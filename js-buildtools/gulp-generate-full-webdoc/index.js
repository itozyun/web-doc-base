"use strict";
const createAllCastPage      = require( './templete/all-cast-page.js' );
const createArticlePage      = require( './templete/article.js' );
const createStaticPage       = require( './templete/static-page.js' );
const createArticleIndexPage = require( './templete/article-index.js' );
const googlePhotoURLResizer  = require( './util/google-photo-url-resizer.js' );
const dateTime               = require( './util/datetime.js' );

const PLUGIN_NAME = 'gulp-page-fragment-to-full-page';
const stream      = new ( require( 'stream' ).Transform )( { objectMode : true } );
const PluginError = require( 'plugin-error' );
const JSDOM       = require( 'jsdom' ).JSDOM;
const Path        = require( 'path' );
const Marked      = require( 'marked' );
const marked      = Marked.marked;
const FS          = require( 'fs' );

const renderer = new marked.Renderer();

const originalRenderCode = renderer.code;

renderer.code = function( code, infostring, escaped ){
    const classStart = '<pre><code class="';
    var html = originalRenderCode.call( this, code, infostring, escaped );

    if( 0 <= html.indexOf( classStart ) ){
        const classEnd = html.indexOf( '"', classStart.length );
        const langClass = html.substring( classStart.length, classEnd );
        html = html.replace( '<pre><code class="' + langClass + '">', '<pre class="' + langClass + '"><code>' );
    };
    return html;
};

marked.setOptions( { langPrefix : 'prettyprint lang-', renderer: renderer } );

module.exports = function( pageBase, BASE_PATH, jsdomOptions ){
    const files = [];

    jsdomOptions = jsdomOptions || {};
    jsdomOptions.includeNodeLocations = true;

    function getPageBaseObject(){
        var page = {};

        for( var k in pageBase ){
            page[ k ] = pageBase[ k ];
        };
        return page;
    };

    stream._transform = function( file, encoding, callback ){
        if( file.isNull() ) return cb( null, file );

        if( file.isStream() ) return cb( new PluginError( PLUGIN_NAME, 'Streaming not supported' ) );

        if( file.isBuffer() ){
            if( file.extname === '.md' ){
                file.markdown = file.contents.toString( encoding );
                file.contents = Buffer.from( marked.parse( file.markdown ) );
                file.extname  = '.html';
                file.path = file.path
            };
            file._encoding = encoding;
            files.push( file );
        };
        callback();
    };

    stream._flush = function( callback ){
        const pages             = [],
              labelList         = [];

        var pagesCreatedOrder, pagesUpdatedOrder;

        var pageRoot, prevPage, file, page;

        files.sort(
            function( file1, file2 ){
                return pathToURL( file1.path ) < pathToURL( file2.path ) ? -1 : 1;
            }
        );

        function getPageByPath( path ){
            var i = -1, page;

            if( path.charAt( path.length - 1 ) === '/' ){
                path += 'index.html';
            };

            for( ; page = pages[ ++i ]; ){
                if( page.path === path ){
                    return page;
                };
            };
        };

        while( file = files.shift() ){
            const jsdom      = new JSDOM( file.contents.toString( file._encoding ), jsdomOptions );
            const document   = jsdom.window.document;
            const isMarkdown = !!file.markdown;

            page = getPageBaseObject();
            pages.push( page );
            page._file = file;
        /**********************************************************************
         * pageOption の収集
         * 
         * <script type="application/json" for="page-meta-data">
         * </script>
         */
            var script = document.querySelectorAll( 'script[type="application/json"]' )[ 0 ],
                pageOption = {};

            if( script ){
                pageOption = JSON.parse( script.textContent );
                for( var k in pageOption ){
                    page[ k ] = pageOption[ k ];
                };
            };

            var createdTimeMs = parseInt( file.stat.birthtimeMs, 10 ),
                updatedTimeMs = parseInt( file.stat.ctimeMs    , 10 ),
                updateFile;

            if( !page.createdAt ){
                page.createdAt = pageOption.createdAt = dateTime.toYYYYMMDDHHMM( createdTimeMs );
                updateFile = true;
            };

            if( !page.updatedAt || dateTime.toUnixTime( page.updatedAt ) <= dateTime.toUnixTime( updatedTimeMs ) ){
                page.updatedAt = pageOption.updatedAt = dateTime.toYYYYMMDDHHMM( updatedTimeMs );
                updateFile = true;
            };

            if( false && updateFile ){
                var textContent = '\n' + JSON.stringify( pageOption, null, '    ' ) + '\n';
                if( isMarkdown ){
                    if( script ){
                        var markdownDOM = new JSDOM( file.markdown.toString( file._encoding ), jsdomOptions ),
                            markdownDoc = markdownDOM.window.document;
                        markdownDoc.querySelectorAll( 'script[type="application/json"]' )[ 0 ].textContent = textContent;
                        FS.writeFile( file.path.replace( '.html', '.md' ), jsdomToString( markdownDOM, markdownDoc.documentElement, false ) );
                    } else {
                        FS.writeFile( file.path.replace( '.html', '.md' ),
                            '<script type="application/json" for="page-meta-data">' + textContent + '</script>\n\n' + file.markdown );
                    };
                } else {
                    if( !script ){
                        script = document.createElement( 'script' );
                        script.setAttribute( 'type', 'application/json' );
                        script.setAttribute( 'for' , 'page-meta-data'   );
                        document.body.insertBefore( script, document.body.firstChild );
                    };
                    script.textContent = textContent;
                    FS.writeFile( file.path, jsdomToString( jsdom, document.documentElement, false ) );
                };
            };

            if( script ){
                script.parentNode.removeChild( script );
            };
        /**********************************************************************
         * page.path
         */
            page.path = page.path || Path.relative( BASE_PATH, file.path ).split( '\\' ).join( '/' );
            console.log( page.path )
        /**********************************************************************
         * label の収集
         */
        /**********************************************************************
         * dnsPrefetch の収集
         */
        /**********************************************************************
         * page.ogp
         */
            page.ogp = page.ogp || {};
            page.ogp.type = page.ogp.type || 'article';
            if( !page.image ){
                var images = document.getElementsByTagName( 'img' );
                for( var i = 0, image; image = images[ i ]; ++i ){
                    if( googlePhotoURLResizer.isResizable( image.src ) ){
                        page.image = image.src;
                        break;
                    };
                };
            };
        /**********************************************************************
         * page.title
         */
            if( !page.title ){
                var h1 = document.getElementsByTagName( 'h1' )[ 0 ];
                if( h1 ){
                    page.title = h1.textContent;
                    h1.parentNode.removeChild( h1 );
                };
            };
        /**********************************************************************
         * textarea
         */
            var textarea = document.querySelectorAll( 'textarea[id="what-browser-am-i"]' )[ 0 ];
            if( textarea ){
                textarea.textContent = page.site.inlineScript;
            };

        /**********************************************************************
         * page.articleBody
         */
            page.articleBody = jsdomToString( jsdom, document.documentElement, false );
        /**********************************************************************
         * page.articleText
         */
            page.articleText = jsdomToString( jsdom, document.documentElement, true );

        /**********************************************************************
         * page.directories
         */
            page.directories = [ { title : 'github', path : '//github.com/itozyun/web-doc-base/' } ];
            if( page.path !== 'index.html' ){
                page.directories.push( { title : '目次', path : '' } );
                for( var depth = 0, pathElements, path; pathElements = page.path.replace( '/index.html', '' ).split( '/' ), depth < pathElements.length - 1; ++depth ){
                    pathElements.splice( depth + 1 );
                    path = pathElements.join( '/' ) + '/';
                    page.directories.push( { title : ( getPageByPath( path ) || {} ).title || 'NO TITLE!', path : path } );
                };
            };
        };

        pagesCreatedOrder = pages.concat( [] ).sort(
            function( a, b ){
                return dateTime.toUnixTime( a.createdAt ) < dateTime.toUnixTime( b.createdAt ) ? 1 : -1;
            }
        );

        pagesUpdatedOrder = pages.concat( [] ).sort(
            function( a, b ){
                return dateTime.toUnixTime( a.updatedAt ) < dateTime.toUnixTime( b.updatedAt ) ? 1 : -1;
            }
        );
    /**========================================================================
     |  目次と子ページをリンクする
     */
        for( let page, i = -1; page = pages[ ++i ]; ){
            if( page.path !== 'index.html' ){
                if( 0 < page.path.indexOf( '/index.html' ) ){
                    var dir = pathToDirectory( page.path );
                    page.templete = 'index';
                    page.links = [ null, [] ];
                    for( let _page, j = -1; _page = pages[ ++j ]; ){
                        let _dir = pathToDirectory( _page.path );
                        if( _page !== page &&
                            ( _dir === dir ||
                            isIndexPage( _page.path ) && _dir.indexOf( dir ) === 0 && getDepthFromDirectory( _dir ) === getDepthFromDirectory( dir ) + 1 )
                        ){
                            page.links[ 1 ].push( _page );
                        };
                    };
                };
            } else {
                pageRoot = page;
            };
        };
    /**========================================================================
     |  home
     */
        let htmlTOC = '';
        for( let page, i = -1; page = pages[ ++i ]; ){
            console.log( '>> ' + page.path, getDepthFromDirectory( pathToDirectory( page.path ) ) )
            if( page !== pageRoot ){
                if( page.templete === 'index' && getDepthFromDirectory( pathToDirectory( page.path ) ) === 1 ){
                    createTOCOfIndexPage( page, 1 );
                } else if( getDepthFromDirectory( pathToDirectory( page.path ) ) === 0 ){
                    htmlTOC += '<li><a href="' + page.path + '">' + page.title.split( '. ' ).pop() + '</a>';
                };
            };
        };
        function createTOCOfIndexPage( page, depth ){
            htmlTOC += '<li><a href="' + pathToURL( page.path ) + '">' + page.title.split( '. ' ).pop() + '</a>';
            htmlTOC += '<ol>';
            for( let _page, j = -1; _page = page.links[ 1 ][ ++j ]; ){
                if( _page.templete === 'index' ){
                    createTOCOfIndexPage( _page, depth + 1 );
                } else if( getDepthFromDirectory( pathToDirectory( _page.path ) ) === depth ){
                    htmlTOC += '<li><a href="' + _page.path + '">' + _page.title + '</a>';
                };
            };
            htmlTOC += '</ol>';
        };
        pageRoot.articleBody += '<ol>' + htmlTOC + '</ol>';
    /**========================================================================
     |  label 関連
     */
    /**========================================================================
     | 
     |  archive
     |
     */
    /**========================================================================
     | 
     |  sitemap
     |
     */
    /**========================================================================
     |  pages
     */
        for( var i = 0, l = pages.length; i < l; ++i ){
            page = pages[ i ];
            // next, prev
            if( page !== pageRoot ){
                page.next = pages[ i + 1 ];
                if( isIndexPage( page.path ) ){
                    // 
                } else {
                    page.prev = pages[ i - 1 ];
                };
            };
            page.links = page.links || [];
            page.links[ 0 ] = pagesUpdatedOrder;
            page._file.contents = Buffer.from( createFullPage( page, pages ) );
            this.push( page._file );
        };
        callback();
    };
    return stream;

    function createFullPage( page, pages ){
        switch( page.templete ){
            case 'allcast' :
                return createAllCastPage( page, pages );
            case 'article' :
                return createArticlePage( page, pages );
            case 'page' :
                return createStaticPage( page, pages );
            case 'index' :
                return createArticleIndexPage( page, pages );
        };
    };

    function jsdomToString( jsdom, currentNode, textContentOnly ){
        var html = '';
    
        for( var childNode = currentNode.firstChild; childNode; childNode = childNode.nextSibling ){
                switch( childNode.nodeType ){
                    case 1 :
                        if( jsdom.nodeLocation( childNode ) ){
                            if( textContentOnly ){
                                html += jsdomToString( jsdom, childNode, textContentOnly );
                            } else {
                                html += childNode.outerHTML;
                            };
                        } else {
                            html += jsdomToString( jsdom, childNode, textContentOnly );
                        };
                        break;
                    case 3 :
                        html += childNode.data.split( '&' ).join( '&amp;' )
                                              .split( '<' ).join( '&lt;' )
                                              .split( '>' ).join( '&gt;' );
                        break;
                };
        };
        return html;
    };

    function pathToDirectory( path ){
        var dir = path.split( '\\' ).join( '/' ).split( '/' );

        dir.pop();
        return dir.join( '/' ) + '/';
    };

    function pathToURL( path ){
        return path.split( '\\' ).join( '/' ).replace( '/index.html', '/' );
    };

    function isIndexPage( path ){
        return path.split( '/' ).pop() === 'index.html';
    };

    function getDepthFromDirectory( path ){
        return path === '/' ? 0 : path.split( '/' ).length - 1;
    };
};

