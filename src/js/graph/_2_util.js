function Graph_toNumeric( str ){
    return parseFloat( str ) || 0;
};

function Graph_createDataList( elmNoscript ){
    var dataSourcies = DOM_getAttribute( elmNoscript, 'graph-src' ).split( ',' ),
        dataList = [],
        i = -1, srcElementID, elmSrc, elmHead, elmTRs, j, m, elmTR, vals, data;
    
    while( srcElementID = dataSourcies[ ++i ] ){
        elmSrc  = DOM_getElementById( srcElementID );
        elmHead = DOM_getElementsByTagName( 'thead', elmSrc )[ 0 ];

        dataList.push( data = {
            caption : DOM_getHTML( DOM_getElementsByTagName( 'caption', elmSrc )[ 0 ] ),
            color   : DOM_getAttribute( elmSrc, 'graph-color' ),
            labelX  : readValues( DOM_getElementsByTagName( 'tr', elmHead )[ 0 ] ),
            labelY  : [],
            values  : []
        } );

        elmTRs = DOM_getElementsByTagName( 'tr', DOM_getElementsByTagName( 'tbody', elmSrc )[ 0 ] );
        for( j = 0, m = elmTRs.length; j < m; ++j ){
            elmTR = elmTRs[ j ];
            vals = readValues( elmTR );
            vals.color = DOM_getAttribute( elmTR, 'graph-color' );
            data.labelY.push( vals.shift() );
            data.values.push( vals );
        };
    };

    function readValues( tr ){
        var values = [],
            kids   = DOM_getChildren( tr ),
            i = 0, l = kids.length, kid, v;

        for( ; i < l; ++i ){
            kid = kids[ i ];
            v = DOM_getHTML( kid );
            v = DOM_hasAttribute( kid, 'graph-label' ) ?
                    DOM_getAttribute( kid, 'graph-label' ) :
                    (
                        DOM_getTagName( kid ) === 'TH' ?
                            v :
                            Graph_toNumeric( v )
                    );
            values[ i ] = v;
        };
        return values;
    };

    return dataList;
};

function Graph_getValueRange( dataList ){
    var i = -1, data, values, j, ary, k, v,
        min = 1 / 0, max = -min;

    while( data = dataList[ ++i ] ){
        values = data.values;
        j = -1;
        while( ary = values[ ++j ] ){
            k = -1;
            while( isFinite( v = ary[ ++k ] ) ){
                min = min < v ? min : v;
                max = v < max ? max : v;
            };
        };
    };
    return { min : min, max : max };
};

function Graph_createElementWrap(){
    var elmWrap = DOM_createElement( 'div' );

    DOM_setClassName( elmWrap, 'graph' );

    return elmWrap;
};

function Graph_createSVGElement( tagName ){
    return DOM_createElementNS( GRAPH_SVG_NS, tagName );
};

function Graph_createSVG( elmLabelY, w, h ){
    var svg = Graph_createSVGElement( 'svg' );

    DOM_setAttributeNS( svg, null, 'version', '1.1' );
    DOM_setAttribute( svg, 'viewBox' , '0 0 ' + w + ' ' + h );
    //DOM_setAttribute( svg, 'width' , 1000 );
    //DOM_setAttribute( svg, 'height', 1000 );
    //DOM_setAttribute( svg, 'xmlns' , GRAPH_SVG_NS );
    //DOM_setAttribute( svg, 'xmlns:xlink', 'http://www.w3.org/1999/xlink' );
    DOM_appendChild( elmLabelY, svg );
    return svg;
};
    function Graph_createVerticalLine( svg, color, strokeWidth, startX ){
        var path = Graph_createSVGElement( 'path' );

        DOM_setAttribute( path, 'stroke'      , color );
        DOM_setAttribute( path, 'stroke-width', strokeWidth );
        DOM_setAttribute( path, 'd'           , 'M' + startX + ',0 v1000' );
        DOM_appendChild( svg, path );
    };
    function Graph_createHorizontalLine( svg, color, strokeWidth, startX ){
        var path = Graph_createSVGElement( 'path' );

        DOM_setAttribute( path, 'stroke'      , color );
        DOM_setAttribute( path, 'stroke-width', strokeWidth );
        DOM_setAttribute( path, 'd'           , 'M0,' + startX + ' h1000' );
        DOM_appendChild( svg, path );
    };

function Graph_createElementLabelY( elmWrap ){
    var elmLabelY = DOM_createElement( 'div' );

    DOM_appendChild( elmWrap, elmLabelY );
    DOM_setClassName( elmLabelY, 'graph-labelY' );
    return elmLabelY;
};
    function Graph_createElementLabelYItem( elmLabelY, label, top ){
        var elm = DOM_createElement( 'div' );

        DOM_setHTML( elm, label );
        DOM_setCssText( elm, 'top:' + top + '%;' );
        DOM_appendChild( elmLabelY, elm );
    };

function Graph_createElementLabelX( elmWrap ){
    var elmLabelX = DOM_createElement( 'div' );

    DOM_appendChild( elmWrap, elmLabelX );
    DOM_setClassName( elmLabelX, 'graph-labelX' );
    return elmLabelX;
};

    function Graph_createElementLabelXItem( elmLabelX, label, left, width ){
        var elm = DOM_createElement( 'div' );

        DOM_setHTML( elm, label );
        DOM_appendChild( elmLabelX, elm );
        DOM_setCssText( elm, 'left:' + left + '%;width:' + width + '%' );
    };

function Graph_createElementCaption( elmLabelY, caption, color ){
    var elm = DOM_createElement( 'div' );

    DOM_setClassName( elm, 'graph-caption' );
    DOM_setHTML( elm, caption );
    DOM_setCssText( elm, 'border-color:' + color );
    DOM_insertBefore( elm, elmLabelY );
};