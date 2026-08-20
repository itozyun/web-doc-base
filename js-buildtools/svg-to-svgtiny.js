// ============================================================
// SVG Path Normalizer for SVG Tiny
// - Converts all commands to absolute
// - H/V → L
// - S → C
// - T → Q
// - A → multiple C (cubic bezier)
// - Output uses only: M, L, C, Q, Z
// ============================================================

// ------------------------------
// A → C (cubic bezier) converter
// ------------------------------
function arcToCubicBeziers(x1, y1, rx, ry, angle, largeArcFlag, sweepFlag, x2, y2) {
    const rad = (Math.PI / 180) * angle;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);

    const dx = (x1 - x2) / 2;
    const dy = (y1 - y2) / 2;

    const x1p = cos * dx + sin * dy;
    const y1p = -sin * dx + cos * dy;

    let rxs = rx * rx;
    let rys = ry * ry;
    let x1ps = x1p * x1p;
    let y1ps = y1p * y1p;

    let lambda = x1ps / rxs + y1ps / rys;
    if (lambda > 1) {
        const scale = Math.sqrt(lambda);
        rx *= scale;
        ry *= scale;
        rxs = rx * rx;
        rys = ry * ry;
    }

  const sign = (largeArcFlag === sweepFlag) ? -1 : 1;
  const sq = ((rxs * rys) - (rxs * y1ps) - (rys * x1ps)) / (rxs * y1ps + rys * x1ps);
  const coef = sign * Math.sqrt(Math.max(0, sq));

  const cxp = coef * (rx * y1p) / ry;
  const cyp = coef * -(ry * x1p) / rx;

  const cx = cos * cxp - sin * cyp + (x1 + x2) / 2;
  const cy = sin * cxp + cos * cyp + (y1 + y2) / 2;

  function angleBetween(u, v) {
      const dot = u.x * v.x + u.y * v.y;
      const mag = Math.sqrt((u.x * u.x + u.y * u.y) * (v.x * v.x + v.y * v.y));
      let ang = Math.acos(Math.min(Math.max(dot / mag, -1), 1));
      if (u.x * v.y - u.y * v.x < 0) ang = -ang;
      return ang;
  }

  const start = angleBetween(
      { x: 1, y: 0 },
      { x: (x1p - cxp) / rx, y: (y1p - cyp) / ry }
  );

  let delta = angleBetween(
      { x: (x1p - cxp) / rx, y: (y1p - cyp) / ry },
      { x: (-x1p - cxp) / rx, y: (-y1p - cyp) / ry }
  );

  if (!sweepFlag && delta > 0) delta -= 2 * Math.PI;
  if (sweepFlag && delta < 0) delta += 2 * Math.PI;

  const segments = Math.ceil(Math.abs(delta / (Math.PI / 2)));
  const deltaSeg = delta / segments;

  const curves = [];
  for (let i = 0; i < segments; i++) {
      const t1 = start + i * deltaSeg;
      const t2 = start + (i + 1) * deltaSeg;

      const cos1 = Math.cos(t1), sin1 = Math.sin(t1);
      const cos2 = Math.cos(t2), sin2 = Math.sin(t2);

      const p1 = {
          x: cx + rx * (cos * cos1 - sin * sin1),
          y: cy + ry * (sin * cos1 + cos * sin1)
      };
      const p2 = {
          x: cx + rx * (cos * cos2 - sin * sin2),
          y: cy + ry * (sin * cos2 + cos * sin2)
      };

      const alpha = (4 / 3) * Math.tan((t2 - t1) / 4);

      const c1 = {
          x: p1.x - alpha * (rx * (cos * sin1 + sin * cos1)),
          y: p1.y - alpha * (ry * (sin * sin1 - cos * cos1))
      };
      const c2 = {
          x: p2.x + alpha * (rx * (cos * sin2 + sin * cos2)),
          y: p2.y + alpha * (ry * (sin * sin2 - cos * cos2))
      };

      curves.push([c1, c2, p2]);
  }

  return curves;
}

// ------------------------------
// Main path converter
// ------------------------------
function convertPathDataForSvgTiny(d) {
    const tokens = d//.replace(/[\s,]+/g, ' ')   // スペース・カンマを統一
                    //.trim()
                    .match(/[a-zA-Z]|[+-]?(?:\d*\.\d+|\d+\.?\d*)(?:e[+-]?\d+)?/g);
    if (!tokens) return d;

    let i = 0;
    let cmd = '';
    let current = { x: 0, y: 0 };
    let start = { x: 0, y: 0 };
    let lastControl = null;
    const out = [];

    const readNumber = () => parseFloat(tokens[i++]);

    const reflect = (p, around) => ({
        x: 2 * around.x - p.x,
        y: 2 * around.y - p.y
    });

    while (i < tokens.length) {
        const token = tokens[i];

        if (/[a-zA-Z]/.test(token)) {
            cmd = token;
            i++;
        }

        const isRelative = cmd === cmd.toLowerCase();
        const type = cmd.toUpperCase();

        switch (type) {
            case 'M': {
                const x = readNumber();
                const y = readNumber();
                current = {
                    x: isRelative ? current.x + x : x,
                    y: isRelative ? current.y + y : y
                };
                start = { ...current };
                out.push(`M ${current.x},${current.y}`);
                cmd = isRelative ? 'l' : 'L';
                break;
            }

            case 'L': {
                const x = readNumber();
                const y = readNumber();
                current = {
                    x: isRelative ? current.x + x : x,
                    y: isRelative ? current.y + y : y
                };
                out.push(`L ${current.x},${current.y}`);
                lastControl = null;
                break;
            }

            case 'H': {
                const x = readNumber();
                current = {
                    x: isRelative ? current.x + x : x,
                    y: current.y
                };
                out.push(`L ${current.x},${current.y}`);
                lastControl = null;
                break;
            }

            case 'V': {
                const y = readNumber();
                current = {
                    x: current.x,
                    y: isRelative ? current.y + y : y
                };
                out.push(`L ${current.x},${current.y}`);
                lastControl = null;
                break;
            }

            case 'C': {
                const x1 = readNumber();
                const y1 = readNumber();
                const x2 = readNumber();
                const y2 = readNumber();
                const x = readNumber();
                const y = readNumber();

                const c1 = {
                    x: isRelative ? current.x + x1 : x1,
                    y: isRelative ? current.y + y1 : y1
                };
                const c2 = {
                    x: isRelative ? current.x + x2 : x2,
                    y: isRelative ? current.y + y2 : y2
                };
                const p = {
                    x: isRelative ? current.x + x : x,
                    y: isRelative ? current.y + y : y
                };

                out.push(`C ${c1.x},${c1.y} ${c2.x},${c2.y} ${p.x},${p.y}`);
                current = p;
                lastControl = c2;
                break;
            }

            case 'S': {
                const x2 = readNumber();
                const y2 = readNumber();
                const x = readNumber();
                const y = readNumber();

                const c1 = lastControl ? reflect(lastControl, current) : current;
                const c2 = {
                    x: isRelative ? current.x + x2 : x2,
                    y: isRelative ? current.y + y2 : y2
                };
                const p = {
                    x: isRelative ? current.x + x : x,
                    y: isRelative ? current.y + y : y
                };

                out.push(`C ${c1.x},${c1.y} ${c2.x},${c2.y} ${p.x},${p.y}`);
                current = p;
                lastControl = c2;
                break;
            }

            case 'Q': {
                const x1 = readNumber();
                const y1 = readNumber();
                const x = readNumber();
                const y = readNumber();

                const c1 = {
                    x: isRelative ? current.x + x1 : x1,
                    y: isRelative ? current.y + y1 : y1
                };
                const p = {
                    x: isRelative ? current.x + x : x,
                    y: isRelative ? current.y + y : y
                };

                out.push(`Q ${c1.x},${c1.y} ${p.x},${p.y}`);
                current = p;
                lastControl = c1;
                break;
            }

            case 'T': {
                const x = readNumber();
                const y = readNumber();

                const c1 = lastControl ? reflect(lastControl, current) : current;
                const p = {
                    x: isRelative ? current.x + x : x,
                    y: isRelative ? current.y + y : y
                };

                out.push(`Q ${c1.x},${c1.y} ${p.x},${p.y}`);
                current = p;
                lastControl = c1;
                break;
            }

            case 'A': {
                const rx = readNumber();
                const ry = readNumber();
                const xAxisRotation = readNumber();
                const largeArcFlag = readNumber();
                const sweepFlag = readNumber();
                const x = readNumber();
                const y = readNumber();

                const end = {
                    x: isRelative ? current.x + x : x,
                    y: isRelative ? current.y + y : y
                };

                const curves = arcToCubicBeziers(
                    current.x, current.y,
                    rx, ry,
                    xAxisRotation,
                    largeArcFlag, sweepFlag,
                    end.x, end.y
                );

                curves.forEach(([c1, c2, p]) => {
                    out.push(`C ${c1.x},${c1.y} ${c2.x},${c2.y} ${p.x},${p.y}`);
                });

                current = end;
                lastControl = null;
                break;
            }

            case 'Z': {
                out.push(cmd);
                current = { ...start };
                lastControl = null;
                break;
            }

            default:
                i++;
        }
    }

    return out.join(' ');
};

module.exports = convertPathDataForSvgTiny;
