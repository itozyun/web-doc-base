/*
 * noscript graph=bable2D graph-src=weekly-tw,weekly-rt skip-cleanup=yes
 * table id=weekly-tw graph-color-label=#444444 graph-color-bable=#999999
 */

function Graph_bar( elmNoscript ){
    var GRAPH_WIDTH     = 1000,
        GRAPH_HEIGHT    = 1000,
        BAR_WIDTH_RATIO = .75,
        BAR_MARGIN      = ( 1 - BAR_WIDTH_RATIO ) / 2,
        STROKE_WIDTH    = 1.5,
        MAX_BAR_HEIGHT  = GRAPH_HEIGHT - STROKE_WIDTH * 2,
        data      = Graph_createDataList( elmNoscript )[ 0 ],
        values    = data.values,
        row       = values.length,
        min       = 1 / 0,
        max       = -min,
        elmWrap   = Graph_createElementWrap(),
        elmLabelY = Graph_createElementLabelY( elmWrap ),
        svg       = Graph_createSVG( elmLabelY, 1000, 1000 ),
        elmLabelX = Graph_createElementLabelX( elmWrap ),
        i, l, j, m, labels, label, v, step, total, w, h, path, color, elm;

    for( i = 0, l = values[0].length; i < l; ++i ){
        total = 0;
        for( j = 0; j < row; ++j ){
            total += values[ j ][ i ];
        };
        min = min < total ? min : total;
        max = total < max ? max : total;
    };

    for( j = 0, labels = data.labelX, m = labels.length - 1, w = 1 / m * 100; j < m; ++j ){
        if( label = labels[ j + 1 ] ){
            Graph_createElementLabelXItem( elmLabelX, label, j / m * 1000 / 10, w );
        };
    };

    step = ( max / 10 + .99 ) | 0
    for( j = step; j < max; j += step ){
        Graph_createElementLabelYItem( elmLabelY, j, ( 1 - j / max ) * 100 );

        Graph_createHorizontalLine( svg, '#aaa', STROKE_WIDTH, ( 1 - j / max ) * 1000 - STROKE_WIDTH );
    };

    for( i = 0, labels = data.labelY, l = labels.length; i < l; ++i ){
        Graph_createElementCaption( elmLabelY, labels[ i ], values[ i ].color );
    };

    l = values[0].length;
    w = GRAPH_WIDTH / l * BAR_WIDTH_RATIO;
    for( i = 0; i < l; ++i ){
        total = 0;
        for( j = 0; j < row; ++j ){
            color = values[ j ].color;
            v     = values[ j ][ i ];
            h     = v / max * MAX_BAR_HEIGHT;
            path  = Graph_createSVGElement( 'rect' );
            DOM_setAttribute( path, 'x'           , ( i + BAR_MARGIN ) * ( GRAPH_WIDTH / l ) );
            DOM_setAttribute( path, 'y'           , GRAPH_HEIGHT - (total / max * MAX_BAR_HEIGHT) - h );
            DOM_setAttribute( path, 'width'       , w );
            DOM_setAttribute( path, 'height'      , h );
            DOM_setAttribute( path, 'fill'        , color );
            DOM_setAttribute( path, 'fill-opacity', 0.5 );
            DOM_setAttribute( path, 'stroke'      , color );
            DOM_setAttribute( path, 'stroke-width', STROKE_WIDTH );
            
            DOM_appendChild( svg, path );
            total += v;
        };
    };

    DOM_insertBefore( elmWrap, elmNoscript );
    DOM_remove( elmNoscript );
};