/*
 * <noscript graph="bable2D" graph-src="weekly-tw,weekly-rt" skip-cleanup="yes"><img role="image" aria-labelledby="weekly-tw"></noscript>
 * <table id="weekly-tw" graph-color="#444444">
 */

function Graph_bable2D( elmNoscript ){
    var MIN_CIRCLE_SIZE = 3,
        STROKE_WIDTH = 1.5,
        dataList  = Graph_createDataList( elmNoscript ),
        range     = Graph_getValueRange( dataList ),
        min       = range.min,
        max       = range.max,
        elmWrap   = Graph_createElementWrap(),
        elmLabelY = Graph_createElementLabelY( elmWrap ),
        svg       = Graph_createSVG( elmLabelY, 1000, 1000 ),
        elmLabelX = Graph_createElementLabelX( elmWrap ),
        
        i = -1, j, m, k, n,
        data, labels, label, path, x, y, w, maxR, v, color, values;

    while( data = dataList[ ++i ] ){
        if( i === 0 ){
            for( j = 1, labels = data.labelX, m = labels.length, w = 1 / ( m + 1 ) * 100; j < m; ++j ){
                if( label = labels[ j ] ){
                    Graph_createElementLabelXItem( elmLabelX, label, ( j - 1 ) / m * 1000 / 10, w );

                    Graph_createVerticalLine( svg, '#eee', STROKE_WIDTH, ( j - .5 ) / m * 1000 - STROKE_WIDTH / 2 );
                };
            };
            Graph_createVerticalLine( svg, '#eee', STROKE_WIDTH, ( j - .5 ) / m * 1000 - STROKE_WIDTH / 2 );

            for( j = 0, labels = data.labelY, m = labels.length; j < m; ++j ){
                if( label = labels[ j ] ){
                    Graph_createElementLabelYItem( elmLabelY, label, j / m * 100 );

                    Graph_createHorizontalLine( svg, '#aaa', STROKE_WIDTH, ( j + 1 ) / m * 1000 - STROKE_WIDTH );
                };
            };
        };
        color = data.color;
        Graph_createElementCaption( elmLabelY, data.caption, color );

        j     = -1;
        m     = data.values.length;
        maxR  = 1000 / Math.max( m, data.values[ 0 ].length ) * 2 - MIN_CIRCLE_SIZE;
        while( values = data.values[ ++j ] ){
            y = ( j + 0.5 ) / ( m ) * 1000;
            for( k = 0, n = values.length; k < n; ++k ){
                v = values[ k ];
                if( v ){
                    x = ( k + 0.5 ) / ( n + 1 ) * 1000;
                    path = Graph_createSVGElement( 'circle' );
                    DOM_setAttribute( path, 'cx', x  );
                    DOM_setAttribute( path, 'cy', y  );
                    DOM_setAttribute( path, 'r' , v / max * maxR + MIN_CIRCLE_SIZE );
                    DOM_setAttribute( path, 'fill'        , color );
                    DOM_setAttribute( path, 'fill-opacity', 0.5 );
                    DOM_setAttribute( path, 'stroke'      , color );
                    DOM_setAttribute( path, 'stroke-width', '1.5' );
                    
                    DOM_appendChild( svg, path );
                };
            };
        };
    };

    DOM_insertBefore( elmWrap, elmNoscript );
    DOM_remove( elmNoscript );
};