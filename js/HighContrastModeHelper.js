/*
 * Original:
 *   Detecting if images are disabled in browsers > Checking for Windows High Contrast
 *   https://developer.paciellogroup.com/blog/2011/10/detecting-if-images-are-disabled-in-browsers/
 */
var HighContrastModeHelper_elmDiv,
    HighContrastModeHelper_sheet,
    HighContrastModeHelper_timerID,
    HighContrastModeHelper_isHC;

if( ( ua[ 'Trident' ] || ua[ 'TridentMobile' ] ) === 9 || ( ua[ 'Win32' ] && 44 <= ua[ 'Gecko' ] ) ){
    g_loadEventCallbacks[ g_loadEventCallbacks.length ] =
    function (){
        //Create a test div
        HighContrastModeHelper_elmDiv = document.createElement( 'div' );
        g_body.appendChild( HighContrastModeHelper_elmDiv );
        //Set its color style to something unusual
        DOM_setCssText( HighContrastModeHelper_elmDiv, 'color:#123456;position:absolute;top:0;left:0;width:0;height:0;overflow:hidden' );

        if( ua[ 'Gecko' ] ){
            HighContrastModeHelper_test();
        } else if( HighContrastModeHelper_test() ){ // IE
            HighContrastModeHelper_timerID = setInterval( HighContrastModeHelper_test, 1000 );
        };
        HighContrastModeHelper_test = null;
    };
    g_unloadEventCallbacks[ g_unloadEventCallbacks.length ] = function(){
        HighContrastModeHelper_timerID && clearInterval( HighContrastModeHelper_timerID );
    };
} else {
    HighContrastModeHelper_test = HighContrastModeHelper_init = null;
};

function HighContrastModeHelper_test(){
    var defaultView = document.defaultView,
        computedStyle, color, isHighContrasrt;

    computedStyle = defaultView ?
        defaultView.getComputedStyle( HighContrastModeHelper_elmDiv, null ) :
        HighContrastModeHelper_elmDiv.currentStyle;

    color = ( computedStyle && computedStyle.color || '' ).split( ' ' ).join( '' );

    if( color ){
        isHighContrasrt = color !== '#123456' && color !== 'rgb(18,52,86)';
        if( isHighContrasrt ){
            // https://github.com/anselmh/object-fit/issues/7
            // Document CSSOM CORS: "SecurityError: The operation is insecure." with ext. CSS

            // use new Function for try~catch  IE5-
            HighContrastModeHelper_init && (new Function( 'f', 'try{f()}catch(_){};' ))( HighContrastModeHelper_init );
            if( !HighContrastModeHelper_sheet ){
                clearInterval( HighContrastModeHelper_timerID );
                HighContrastModeHelper_timerID = 0;
                return;
            };
        };
        if( HighContrastModeHelper_sheet && ( HighContrastModeHelper_isHC !== isHighContrasrt ) ){
            HighContrastModeHelper_isHC = isHighContrasrt;
            HighContrastModeHelper_sheet.disabled = !isHighContrasrt;
        };
        return true;
    };
};

function HighContrastModeHelper_init(){
    var // isIeCSSOM = ua[ 'IE' ] < 9,
        sheets = document.styleSheets,
        highContrastRules = [], index = -1,
        i, l, elmStyle, sheet, rule, selector, styleObject, prop, value;

    HighContrastModeHelper_init = null;

    if( sheets ){
        for( i = 0, l = sheets.length; i < l; ++i ){
            findHighContrastRules( sheets[ i ] );
        };
    };

    if( l = highContrastRules.length ){
        elmStyle = document.createElement( 'style' );
        g_body.appendChild( elmStyle ); // TODO 既存styleの後
        elmStyle.setAttribute( 'type', 'text/css' );
        sheet = HighContrastModeHelper_sheet = elmStyle.sheet || elmStyle.styleSheet ;

        // 新しい style に追加
        // https://qiita.com/sainome_7/items/d3f6afa8ffee354e6e36
        for( i = 0; i < l; ++i ){
            rule = highContrastRules[ i ];
            /* if( isIeCSSOM ){ // IE
                selector  = rule.selectorText;
                styleObject = rule.style;
                for( prop in styleObject ){
                    value = styleObject[ prop ];
                    value && sheet.addRule( selector, prop + ":" + value, ++index );
                };
            } else { // ^IE */
                rule && sheet.insertRule( rule, ++index );
            //};
        };
    } else {
        // no @media (-ms-high-contrast:active) found
    };

    function findHighContrastRules( sheet ){
        var rules = /* isIeCSSOM ? sheet.rules :*/ sheet.cssRules,
            i = rules.length, index = -1, rule, cssText, _sheet, imports, l, j, m;

        while( rule = rules[ --i ] ){
            /* if( isIeCSSOM ){
                // rule.media&&console.log(rule.media.mediaText)
                if( 0 <= ( rule.media && rule.media.mediaText || '' ).indexOf( '-ms-high-contrast:active' ) ){
                    // ルールを回収、元の sheet からは削除
                    sheet.deleteRule( i );
                    highContrastRules[ ++index ] = rule;
                };
            } else { */
                // console.log(rule.cssText)
                if( 0 <= ( rule.cssText || '' ).indexOf( '-ms-high-contrast:active' ) ){
                    for( j = 0, m = rule.cssRules.length; j < m; ++j ){
                        //console.log(rule.cssRules[ j ].cssText);
                        cssText = rule.cssRules[ j ].cssText;
                        cssText && ( highContrastRules[ ++index ] = cssText );
                    };
                    sheet.deleteRule( i );
                };
            //};

            if( _sheet = rule.sheet || rule.styleSheet ){
                findHighContrastRules( _sheet );
            };
        };

        //  if( rules = sheet.imports ){ // error at ie5.5
        // http://nonakaryuichi.github.io/css_import_sample/css_import.html
        imports = sheet.imports;
        if( imports && ( l = imports.length ) ){
            for( i = 0; i < l; ++i ){
                findHighContrastRules( imports[ i ] );
            };
        };
    };
};