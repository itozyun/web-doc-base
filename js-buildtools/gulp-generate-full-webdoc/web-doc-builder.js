/* ============================================================================
 *  web-doc-base の定義した文書構造に合致する HTML 文字列を出力するツール
 *
 *  TOC
 *    1. utils
 *    2. document > html > head,body,script,link[rel=stylesheet]
 *    3. [Structures] Header, Ribbon, Main, Footer
 *    4. [Layouts]
 *    5. [Modules]
 *    6. [Export]
 */

/* ============================================================================
 *  1. utils
 */
const dateTime              = require( './util/datetime.js' );
const { createAttribute, createElement, createElementList, resizeImage, getRelativePath, isExternalURL } = require( './util/html.js' );
const RichLink              = require( './modules/RichLink.js' );
const Magazine              = require( './modules/Magazine.js' );

var MAX_WIDTH_FIX_START = '\n<!--[if lte IE 6]><div><div class="e6L"></div><div class="e6R"></div><div class="e6C"><![endif]-->';
var MAX_WIDTH_FIX_END   = '\n<!--[if lte IE 6]></div><br class="e6BR"></div><![endif]-->';

module.exports = function( page, pages ){
    const site = page.site || {};
    const isHome = page.path === 'index.html';

    const canonicalURL = ( site.canonicalHomepageURL + page.path ).replace( '/index.html', '/' );
    const URL = ( ( site.homepageURL || site.canonicalHomepageURL ) + page.path ).replace( '/index.html', '/' );
    const depth = page.path.split( '/' ).length;
    const dir = '../'.repeat( depth - 1 );

    function isLayout( obj ){
        if( Layout.MainColumn.separete === ( obj.layout || obj ) ){
            return 'separate';
        };
        for( var layoutName in Layout ){
            if( Layout[ layoutName ] === ( obj.layout || obj ) ) return layoutName;
        };
    };
    
    function isModule( obj ){
        for( var moduleName in Module ){
            if( Module[ moduleName ] === ( obj.module || obj ) ) return moduleName;
        };
    };
    
    function toLayoutOrModuleList( args, layoutName, allowMix ){
        var isLayoutList, obj;

        for( var i = 0, l = args.length; i < l; ++i ){
            obj = args[ i ];
            if( isLayout( obj ) ){
                if( isLayoutList === false && !allowMix ){
                    throw new Error( layoutName + ' mix' );
                };
                isLayoutList = true;
            };
            if( isModule( obj ) ){
                if( isLayoutList === true && !allowMix ){
                    throw new Error( layoutName + ' mix' );
                };
                if( Module.ArticleHeader === ( obj.module || obj ) ){
                    useArticleHeaderModule = true;
                };
                isLayoutList = false;
            };
        };
        return [].slice.call( args );
    };
    
    function toLayoutList( args, layoutName ){
        for( var i = 0, l = args.length; i < l; ++i ){
            if( !isLayout( args[ i ] ) ){
                throw new Error( layoutName + ' require Layout! but' + isModule( args[ i ] ) );
            };
        };
        return [].slice.call( args );
    };
    
    function toModuleList( args, layoutName ){
        for( var i = 0, l = args.length; i < l; ++i ){
            if( !isModule( args[ i ] ) ){
                throw new Error( layoutName + ' require Module! but' + isLayout( args[ i ] ) );
            };
        };
        return [].slice.call( args );
    };

    var isCorrectionPhase = true;
    var layoutTree = [];
    var ribbonHasArticleHeader,
        mainHasArticleHeader;
    var containNoScriptMessageModule;
    var useArticleHeaderModule;
    var layoutRequired = null;
    var noscriptMessageID = '-o-';

    function downLayoutTree( layout ){
        // console.dir( layout )
        if( isLayout( layout ) ){
            layoutTree.push( layout );
        };
    };

    function upLayoutTree( layout ){
        if( isLayout( layout ) ){
            if( layoutTree.pop() !== layout ){
                throw new Error( 'miss match!' );
            };
        };
    };
/* ============================================================================
 *  2. document > html > head,body,script,link[rel=stylesheet]
 */
    function Document(){
        return '<!DOCTYPE html>' + [].slice.call( arguments ).join( '\n' );
    };

    function HTML(){
        /** PWA   */ 
        return '\n<html' +
        /** lang  */ createAttribute( 'lang', page.lang || site.lang, !!( page.lang || site.lang ) ) +
        /** dir   */ createAttribute( 'dir' , page.dir  || site.lang, !!( page.dir  || site.dir  ) ) +
        /** class */ createAttribute( 'class', 'nojs' ) +
        /** amp   */ 
        /** VML   */ createAttribute( 'xmlns:v', 'urn:schemas-microsoft-com:vml', !!page.vml || ( site.vml && page.vml === undefined ) ) +
        '>' + [].slice.call( arguments ).join( '\n' ) +
        '\n</html>';
    };

    function HEAD(){
        return '\n<head' +
        /** OGP     */  createAttribute( 'prefix', 'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#', !!page.ogp
         ) +
        '>' +
        /** charset */  createElement( 'meta', { 'http-equiv' : 'Content-Type', content : page.charset || site.charset || 'text/html; charset=UTF-8'  } ) +
        /** title   */ '\n<title>' + page.title + '</title>' +
        /** viewport, see http://outcloud.blogspot.com/2016/02/viewport2016.html */
                        createElement( 'meta', { name : 'viewport', content : page.viewport || site.viewport || 'width=device-width,target-densitydpi=medium-dpi,initial-scale=1,minimum-scale=1,shrink-to-fit=no' } ) +
        /** inlin style */
                        '<style>/*<!--*/\n@media only screen and(prefers-color-scheme:dark){body{background:hsl(0,0%,0%);color:hsl(0,0%,100%)}}/*-->*/</style>' +
        /** inlin javascript */
                        createElement( 'script', null, '<!--\n' + page.inlineScript + '//-->', !!page.inlineScript ) +
                        createElement( 'script', null, '<!--\n' + site.inlineScript + '//-->', !!site.inlineScript ) +

        /** preload */  createElementList( 'link', 'href', page.preloadStyles, { rel : 'preload', as : 'style'  } ) +
                        createElementList( 'link', 'href', page.preloadScripts, { rel : 'preload', as : 'script' } ) +
        /** dns-prefetch */
                        createElement( 'meta', { 'http-equiv' : 'x-dns-prefetch-control', content : 'on' }, '', !!page.dnsPrefetchUrls && page.dnsPrefetchUrls.length ) +
                        createElementList( 'link', 'href', page.dnsPrefetchUrls, { rel : 'dns-prefetch' } ) +
        
        /** description */
                        createElement( 'meta', {                              name : 'description'        , content : page.ogp.description || page.description } ) +
        /** OGP  */     createElement( 'meta', { property : 'og:title'      , name : 'twitter:title'      , content : page.ogp.title || page.title             }, '', !!page.ogp ) +
                        createElement( 'meta', { property : 'og:description', name : 'twitter:description', content : page.ogp.description || page.description }, '', !!page.ogp ) +
                        createElement( 'meta', { property : 'og:image'      , name : 'twitter:image'      , content : resizeImage( page.ogp.image || page.image || site.ALT_THUMBNAIL_IMAGE, site.OG_IMAGE_WIDTH, site.OG_IMAGE_HEIGHT ) }, '', !!page.ogp ) +
                        createElement( 'meta', { property : 'og:image;width'                              , content : site.OG_IMAGE_WIDTH                      }, '', !!page.ogp ) +
                        createElement( 'meta', { property : 'og:image:height'                             , content : site.OG_IMAGE_HEIGHT                     }, '', !!page.ogp ) +
                        createElement( 'meta', { property : 'og:type'                                     , content : page.ogp.type || 'article'               }, '', !!page.ogp ) +
                        createElement( 'meta', { property : 'og:url'                                      , content : canonicalURL                             }, '', !!page.ogp ) +
                        createElement( 'meta', { property : 'og:site_name'                                , content : site.title                               }, '', !!page.ogp ) +
                        createElement( 'meta', { property : 'twitter:site'                                , content : site.twitterID                           }, '', !!page.ogp && !!site.twitterID ) +
                        createElement( 'meta', { property : 'twitter:card'                                , content : 'summary_large_image'                    }, '', !!page.ogp ) +
                        createElement( 'meta', { property : 'fb:app_id'                                   , content : site.facebookAppID                       }, '', !!page.ogp && !!site.facebookAppID ) +
        /** Bing     */ createElement( 'meta', {                              name : 'msvalidate.01'      , content : site.msValidateID                        }, '', !!site.msValidateID ) +
        /** for IE   */ '\n<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">' +
                        '\n<meta http-equiv="imagetoolbar" content="no">' +
                        '\n<meta http-equiv="cleartype" content="on">' +
                        '\n<meta name="HandheldFriendly" content="True">' +
                        '\n<meta name="mobileoptimized" content="0">' +
        /** for iOS  */ '\n<meta name="format-detection" content="telephone=no">' +
                        '\n<meta name="apple-mobile-web-app-capable" content="yes">' +
        /** for Watch OS 5+ */
                        '\n<meta name="disabled-adaptations" content="watch">' +
        /** theme color */
                        createElement( 'meta', { name : 'theme-color'                  , content : site.themeColor }, '', !!site.themeColor ) +
                        createElement( 'meta', { name : 'msapplication-navbutton-color', content : site.themeColor }, '', !!site.themeColor ) +
        /** favicon */
                        createElement( 'link', { rel : 'icon', type : 'image/vnd.microsoft.icon', href : site.faviconURL }, '', !!site.faviconURL ) +
        /** canonical URL */
                        createElement( 'link', { rel : 'canonical', href : canonicalURL }, '', !!site.canonicalHomepageURL ) +
        /** Feed links */
                        createElement( 'link', { rel : 'alternate', type : 'application/atom+xml', title : site.feed.atomTitle || site.title + ' - Atom', href : site.canonicalHomepageURL + 'feed/atom.xml' }, '', !!site.feed ) +
                        createElement( 'link', { rel : 'alternate', type : 'application/rss+xml' , title : site.feed.rssTitle  || site.title + ' - RSS' , href : site.canonicalHomepageURL + 'feed/rss.xml'  }, '', !!site.feed  ) +
        '\n</head>';
    };

    function BODY( structures ){
        var htmlString = '';

        isCorrectionPhase = false;
        for( var i = 0, l = structures.length; i < l; ++i ){
            var structure = structures[ i ];
            layoutTree = [ structure ];
            // console.dir( structure )
            htmlString += structure.structure( structure.layouts );
        };
        return '\n<body size="1">' + htmlString + '\n</body>';
    };

    var Import = {
        StyleSheet : function(){
return '' +
`<!--[if !IE]><!-->
<noscript><style type="text/css" media="screen,handheld,projection,tv,print">` +
`/*\\*//*/@import "${dir}assets/css/pc/ie5mac.css";/**/ /*\\*/@import "${dir}assets/css/pc/modern.css";/**/` +
`</style></noscript><!--<![endif]-->
<!--[if IE 9]><link href="${dir}assets/css/pc/ie9.css" rel="stylesheet" type="text/css"><![endif]-->
<!--[if IE 8]><link href="${dir}assets/css/pc/ie8.css" rel="stylesheet" type="text/css"><![endif]-->
<!--[if (IE 7)|(IEMobile)]><link href="${dir}assets/css/pc/ie7.css" rel="stylesheet" type="text/css"><![endif]-->
<!--[if IE 6]><link href="${dir}assets/css/pc/ie6.css" rel="stylesheet" type="text/css"><![endif]-->
<!--[if IE 5]><style type="text/css">` +
`@media tty{i{content:"\\";/*" "*/}};@import '${dir}assets/css/pc/ie5win.css';{;}/*";}}/* */` +
`@media tty{i{content:"\\";/*" "*/}}@m;@import '${dir}assets/css/pc/ie55.css';/*";}}/* */` +
`</style><![endif]-->
`;
        },
        Script : function(){
            return `<script src="${dir}assets/js/${page.mainJavascriptFilename || site.mainJavascriptFilename}"></script>`;
        }
    };

/* ============================================================================
 * 3. [Structures] Header, Ribbon, Main, Footer
 */
    function Header( layouts ){
        if( isCorrectionPhase ){
            return { structure : Header, name : 'Header', layouts : toLayoutList( arguments, 'Header' ) };
        };
        var htmlString = '';

        for( var i = -1, layout; layout = layouts[ ++i ]; ){
            downLayoutTree( layout );
            htmlString += layout.layout( layout.layouts || layout.layoutsOrModules || layout.modules );
            upLayoutTree( layout );
        };

        return '\n<div id="lH" class="baseColor">' +
            MAX_WIDTH_FIX_START +
                htmlString + 
            MAX_WIDTH_FIX_END +
        '\n</div>' +
        '\n<a name="top" id="top"></a>';
    };

    function Ribbon( layouts ){
        if( isCorrectionPhase ){
            return { structure : Ribbon, name : 'Ribbon', layouts : toLayoutList( arguments, 'Ribbon' ) };
        };
        var htmlString = '';

        for( var i = -1, layout; layout = layouts[ ++i ]; ){
            downLayoutTree( layout );
            htmlString += layout.layout( layout.layouts || layout.layoutsOrModules || layout.modules );
            upLayoutTree( layout );
        };

        htmlString =
            '\n<div id="lE" class="ribbon">' +
                MAX_WIDTH_FIX_START +
                    htmlString + 
                MAX_WIDTH_FIX_END +
            '\n</div>';

        if( ribbonHasArticleHeader ){
            htmlString = '\n<main>' + '\n<article>' + htmlString;
        };
        return htmlString;
    };

    function Main( layouts ){
        if( isCorrectionPhase ){
            return { structure : Main, name : 'Main', layouts : toLayoutList( arguments, 'Main' ) };
        };
        var htmlString = '';

        for( var i = -1, layout; layout = layouts[ ++i ]; ){
            downLayoutTree( layout );
            htmlString += layout.layout( layout.layouts || layout.layoutsOrModules || layout.modules );
            upLayoutTree( layout );
        };

        htmlString =
            '\n<div id="lB" class="baseColor">' +
                MAX_WIDTH_FIX_START +
                    htmlString + 
                MAX_WIDTH_FIX_END +
            '\n</div>';

        if( ribbonHasArticleHeader ){
            htmlString += '\n</article>' + '\n</main>';
            ribbonHasArticleHeader = false;
        };
        return htmlString;
    };

    function Footer( layouts ){
        if( isCorrectionPhase ){
            return { structure : Footer, name : 'Footer', layouts : toLayoutList( arguments, 'Footer' ) };
        };
        var htmlString = '';

        for( var i = -1, layout; layout = layouts[ ++i ]; ){
            downLayoutTree( layout );
            htmlString += layout.layout( layout.layouts || layout.layoutsOrModules || layout.modules );
            upLayoutTree( layout );
        };

        return '\n<footer>' +
            '\n<div id="lF" class="ribbon">' +
                MAX_WIDTH_FIX_START +
                    htmlString + 
                MAX_WIDTH_FIX_END +
            '\n</div>' +
        '\n</footer>';
    };

/* ============================================================================
 *  4. [Layouts]
 *     1. Wrapper
 *     2. MainColumn
 *     3. SideColumn
 *     4. SingleColumn
 *     5. MainColumnSeparate, SideColumnSeparate
 */
    var Layout = {
        Wrapper : function( layouts ){
            if( isCorrectionPhase ){
                return { layout : Layout.Wrapper, name : 'Wrapper', layouts : toLayoutList( arguments, 'Wrapper' ) };
            };
            var htmlString = '', childIsSingleColumn;
    
            for( var i = -1, layout; layout = layouts[ ++i ]; ){
                if( 0 < i && layout.layout === Layout.SingleColumn ){
                    throw new Error( 'layout error! 1' );
                } else if( i === 0 && layout.layout === Layout.SideColumn ){
                    throw new Error( 'layout error! 2' );
                } else if( i === 1 && layout.layout !== Layout.SideColumn ){
                    throw new Error( 'layout error! 3' );
                } else if( i === 0 && layout.layout === Layout.SingleColumn ){
                    childIsSingleColumn = true;
                };
                downLayoutTree( layout );
                htmlString += layout.layout( layout.layouts || layout.layoutsOrModules || layout.modules );
                upLayoutTree( layout );
            };

            if( !childIsSingleColumn ){
                htmlString = '\n<div class="lW">' + htmlString + '\n</div>';
            };
            return htmlString;
        },
        MainColumn : function( layoutOrModules ){
            if( isCorrectionPhase ){
                return { layout : Layout.MainColumn, name : 'MainColumn', layoutsOrModules : toLayoutOrModuleList( arguments, 'MainColumn', true ) };
            };
            var htmlString = '', _htmlString,
                htmlStringUnderMainInner   = '',
                htmlStringUnderMain0Margin = '',
                htmlStringUnderFullWidth   = '',
                htmlStringUnderHalfWidth   = '',
                separateCount = 0, lastLayout = null, prevIsSeparate; // separete と Module は同じ階層にならない
    
            for( var i = 0, l = layoutOrModules.length, layoutOrModule; i < l; ++i ){
                layoutOrModule = layoutOrModules[ i ];
                // lMz>lMf|lMh, lMi, lMi>lM1|lM2
                if( layoutOrModule.layout === Layout.MainColumn.separete ){
                    ++separateCount;
                } else {
                    if( separateCount % 2 ){
                        // separate は必ずペアで出現する
                        throw new Error( 'separate error!' );
                    };
                };
                downLayoutTree( layoutOrModule );
                _htmlString = isModule( layoutOrModule )
                                ?
                                    layoutOrModule.module ? layoutOrModule.module( layoutOrModule ) : layoutOrModule()
                                :
                                    layoutOrModule.layout( layoutOrModule.modules, Layout.MainColumn, separateCount % 2 );
                upLayoutTree( layoutOrModule );

                if( lastLayout !== layoutRequired || prevIsSeparate && isModule( layoutOrModule ) ){
                    if( htmlStringUnderMainInner ){
                        htmlString += '\n<div class="lMi">' + htmlStringUnderMainInner + '\n</div><!-- lMi -->';
                        htmlStringUnderMainInner = '';
                    };
                    if( htmlStringUnderFullWidth ){
                        htmlStringUnderMain0Margin += MainColumn_fullWidth( htmlStringUnderFullWidth );
                        htmlStringUnderFullWidth = '';
                    };
                    if( htmlStringUnderHalfWidth ){
                        htmlStringUnderMain0Margin += MainColumn_halfWidth( htmlStringUnderHalfWidth );
                        htmlStringUnderHalfWidth = '';
                    };
                };
                prevIsSeparate = false;
                
                if( layoutRequired === MainColumn_fullWidth ){
                    htmlStringUnderFullWidth += _htmlString;
                    lastLayout = layoutRequired;
                } else if( layoutRequired === MainColumn_halfWidth ){
                    htmlStringUnderHalfWidth += _htmlString;
                    lastLayout = layoutRequired;
                } else {
                    if( htmlStringUnderMain0Margin ){
                        htmlString += '\n<div class="lMz">' + htmlStringUnderMain0Margin + '\n</div><!-- lMz -->';
                        htmlStringUnderMain0Margin = '';
                    };
                    htmlStringUnderMainInner += _htmlString;
                    lastLayout = null;
                };
                layoutRequired = null;
                if( layoutOrModule.layout === Layout.MainColumn.separete ){
                    prevIsSeparate = true;
                };
            };
            if( separateCount % 2 ){
                // separate は必ず偶数で出現する
                throw new Error( 'separate error! 2' );
            };
            if( htmlStringUnderMainInner ){
                htmlString += '\n<div class="lMi">' + htmlStringUnderMainInner + '\n</div><!-- lMi -->';
            };
            if( htmlStringUnderFullWidth ){
                htmlStringUnderMain0Margin += MainColumn_fullWidth( htmlStringUnderFullWidth );
            };
            if( htmlStringUnderHalfWidth ){
                htmlStringUnderMain0Margin += MainColumn_halfWidth( htmlStringUnderHalfWidth );
            };
            if( htmlStringUnderMain0Margin ){
                htmlString += '\n<div class="lMz">' + htmlStringUnderMain0Margin + '\n</div><!-- lMz -->';
            };
            if( mainHasArticleHeader ){
                htmlString = '\n<main>' + htmlString + '\n</main>';
                mainHasArticleHeader = false;
            };

            if( layoutTree[ 0 ].structure === Main ){
                return '\n<div class="lM" id="jsMain">' + htmlString + '\n</div><!-- lM -->';
            } else {
                return '\n<div class="lM">' + htmlString + '\n</div><!-- lM -->';
            };
        },
        SideColumn : function( layoutOrModules ){
            if( isCorrectionPhase ){
                return { layout : Layout.SideColumn, name : 'SideColumn', layoutsOrModules : toLayoutOrModuleList( arguments, 'SideColumn', false ) };
            };
            var htmlString = '', separateCount = 0;

            for( var i = 0, l = layoutOrModules.length, layoutOrModule; i < l; ++i ){
                layoutOrModule = layoutOrModules[ i ];
                // lSi, lSi>lS1|lS2
                if( layoutOrModule.layout === Layout.SideColumn.separete ){
                    ++separateCount;
                } else if( separateCount % 2 ){
                    // separate は必ず偶数の連続で出現する
                    throw new Error( 'separate error! 3' );
                };
                downLayoutTree( layoutOrModule );
                htmlString += isModule( layoutOrModule )
                                ?
                                    layoutOrModule.module ? layoutOrModule.module( layoutOrModule ) : layoutOrModule()
                                :
                                    layoutOrModule.layout( layoutOrModule.modules, Layout.SideColumn, separateCount % 2 );
                upLayoutTree( layoutOrModule );
            };
            if( separateCount % 2 ){
                // separate は必ず偶数で出現する
                throw new Error( 'separate error! 4' );
            };

            if( layoutTree[ 0 ].structure === Main ){
                return '\n<div class="lS" id="jsSide">\n<div class="lSi">' + htmlString + '\n</div>\n</div>';
            } else {
                return '\n<div class="lS">\n<div class="lSi">' + htmlString + '\n</div>\n</div>';
            };
        },
        SingleColumn : function( layoutOrModules ){
            if( isCorrectionPhase ){
                return { layout : Layout.SingleColumn, name : 'SingleColumn', layoutsOrModules : toLayoutOrModuleList( arguments, 'SingleColumn', true ) };
            };
            var htmlString = '', separateCount = 0;

            for( var i = 0, l = layoutOrModules.length, layoutOrModule; i < l; ++i ){
                layoutOrModule = layoutOrModules[ i ];
                // lSi, lSi>lS1|lS2
                if( layoutOrModule.layout === Layout.SingleColumn.separete ){
                    ++separateCount;
                } else if( separateCount % 2 ){
                    // separate は必ず偶数の連続で出現する
                    throw new Error( 'separate error! 5' );
                };
                downLayoutTree( layoutOrModule );
                htmlString += isModule( layoutOrModule )
                                ?
                                    layoutOrModule.module ? layoutOrModule.module( layoutOrModule ) : layoutOrModule()
                                :
                                    layoutOrModule.layout( layoutOrModule.modules, Layout.SingleColumn, separateCount % 2 );
                upLayoutTree( layoutOrModule );
            };
            if( separateCount % 2 ){
                // separate は必ず偶数で出現する
                throw new Error( 'separate error! 4' );
            };

            if( containNoScriptMessageModule ){
                htmlString = '\n<!--[if !IE]><!--><noscript><div class="lX" id="' + noscriptMessageID + '"><div class="lXi">' + htmlString + '</div></div></noscript><!--<![endif]-->';
                containNoScriptMessageModule = false;
            } else {
                htmlString = '\n<div class="lX">\n<div class="lXi">' + htmlString + '\n</div>\n</div>';
            };
            return htmlString;
        }
    };
    Layout.MainColumn.separete = Layout.SideColumn.separete = Layout.SingleColumn.separete = function( modules, parentLayout, order ){
        if( isCorrectionPhase ){
            return { layout : Layout.MainColumn.separete, name : 'separete', modules : toModuleList( arguments, 'separate' ) };
        };
        order = 2 - order;
        var className = ( parentLayout === Layout.MainColumn ? 'lM' : parentLayout === Layout.SideColumn ? 'lS' : 'lX' ) + order, // getHierarcyOf( 2 )
            htmlString = '';

        for( var i = -1, module; module = modules[ ++i ]; ){
            htmlString += module.module ? module.module( module ) : module();
        };

        if( layoutTree[ 0 ].structure === Main && layoutTree[ 2 ].layout === Layout.SideColumn ){
            return '\n<div class="' + className + '" id="jsSidebarFixer' + order + '">' + htmlString + '\n</div>';
        } else {
            return '\n<div class="' + className + '">' + htmlString + '\n</div>';
        };
    };

    function MainColumn_fullWidth( htmlString ){
        return '\n<div class="lMf">' + htmlString + '\n</div>';
    };

    function MainColumn_halfWidth( htmlString ){
        return '\n<div class="lMh">' + htmlString + '\n</div>';
    };

/* ============================================================================
 *  5. [Modules]
 */
    function checkValidHierarchy( moduleFunction, opt_parents ){
        if( isCorrectionPhase ){
            throw new Error( 'Module called at invalid phase!' );
        };
        if( opt_parents ){
            for( var i = 0, l = opt_parents.length; i < l; ++i ){
                var parent = opt_parents[ i ];
                if( parent === MainColumn_fullWidth ){
                    layoutRequired = MainColumn_fullWidth;
                } else if( parent === MainColumn_halfWidth ){
                    layoutRequired = MainColumn_halfWidth;
                } else if( Array.isArray( parent ) ){
                    for( var j = 0, m = parent.length; j < m; ++j ){
                        if( layoutTree[ i ].structure === parent[ j ] || layoutTree[ i ].layout === parent[ j ] ){
                            break;
                        };
                    };
                    if( j === m ){
                        throw new Error( '不正な親です!' + isModule( moduleFunction ) );
                    };
                } else {
                    // console.log(i, layoutTree.length)
                    // console.dir( layoutTree[ i ] )
                    if( layoutTree[ i ].structure !== parent && layoutTree[ i ].layout !== parent ){
                        throw new Error( '不正な親です! ' + isModule( moduleFunction ) );
                    };
                };
            };
        };
    };

    function getParentLayout(){
        return layoutTree[ layoutTree.length - 1 ];
    };

    function toArticleFooterItemList( args ){
        for( var i = 0, l = args.length, isArticleFooterItem; i < l; ++i ){
            isArticleFooterItem = false;
            for( var itemName in Module.ArticleFooter ){
                if( Module.ArticleFooter[ itemName ] === args[ i ] ){
                    isArticleFooterItem = true;
                };
            };
            if( !isArticleFooterItem ) throw new Error( 'invalid ArticleFooterItem!' );
        };
        return [].slice.call( args );
    };

    var Module = {
        NoScriptMessage : function(){
            var layout = getParentLayout();
            var onlyNoscriptModule = layout.layoutsOrModules.length === 1;
            var noscriptMassage = site.noscriptMessage || 'Please enabled javascript or use new version of browser. At least ';
            var htmlString = onlyNoscriptModule ?
`<style>/*<!--*/` +
    // common
    `#${noscriptMessageID} p{border:double 5px #f66;padding:1em;background:#300;color:#fff}` +
    // Opera 7.20~9.27
    `@media all and(-o-:0),not all and(-o-:0){` +
        `html:first-child #${noscriptMessageID}{display:block}` +
        `:_{top:0}` + /* Opera ~7.11 skip next rule {display:none} */
    `}`+
    // common
    `#${noscriptMessageID}{display:none}` +
    `#${noscriptMessageID} p:after{content:attr(nojs) attr(opr)}` +
    // Gecko ~1.8
    `@media \\0 all{` +
        `#${noscriptMessageID}{display:block}` +
        `#${noscriptMessageID} p:after{content:attr(nojs) attr(gck)}` +
    `}` +
    `@-moz-document url-prefix(){` +
        // Gecko 1.8~1.9.2
        `_:not(),_:-moz-loading,#${noscriptMessageID}{display:block}` +
        `_:not(),_:-moz-loading,#${noscriptMessageID} p:after{content:attr(nojs) attr(gck)}` +
        // Gecko 1.9.1~1.9.2
        `_:not(),_:-moz-handler-blocked,#${noscriptMessageID}{display:none}` +
    `}` +
`/*-->*/</style>` +
`<p nojs="${noscriptMassage}" opr="Opera 9.5+." gck="Firefox 3.5+."></p>`
:
`<style>/*<!--*/` +
    // common
    `#${noscriptMessageID}{border:double 5px #f66;padding:1em;background:#300;color:#fff}` +
    // Opera 7.20~9.27
    `@media all and(-o-:0),not all and(-o-:0){` +
        `html:first-child #${noscriptMessageID}{display:block}` +
        `:_{top:0}` + /* Opera ~7.11 skip next rule {display:none} */
    `}`+
    // common
    `#${noscriptMessageID}{display:none}` +
    `#${noscriptMessageID}:after{content:attr(nojs) attr(opr)}` +
    // Gecko ~1.8
    `@media \\0 all{` +
        `#${noscriptMessageID}{display:block}` +
        `#${noscriptMessageID}:after{content:attr(nojs) attr(gck)}` +
    `}` +
    `@-moz-document url-prefix(){` +
        // Gecko 1.8~1.9.2
        `_:not(),_:-moz-loading,#${noscriptMessageID}{display:block}` +
        `_:not(),_:-moz-loading,#${noscriptMessageID}:after{content:attr(nojs) attr(gck)}` +
        // Gecko 1.9.1~1.9.2
        `_:not(),_:-moz-handler-blocked,#${noscriptMessageID}{display:none}` +
    `}` +
`/*-->*/</style>` +
`<p id="${noscriptMessageID}" nojs="${noscriptMassage}" opr="Opera 9.5+." gck="Firefox 3.5+."></p>`;
            if( !onlyNoscriptModule ){
                htmlString = '<!--[if !IE]><!--><noscript>' + htmlString + '</noscript><!--<![endif]-->';
            } else {
                if( layout.layout === Layout.MainColumn || layout.layout === Layout.SideColumn || layout.layout === Layout.MainColumn.separete ){
                    throw new Error( 'NoScriptMessage 単体で MainColumn SideColumn separate の下にいるのは禁止' ); // getHierarcyOf() SideColumn
                };
                containNoScriptMessageModule = true;
            };
            return htmlString;
        },

        SimpleHeader : function(){
            checkValidHierarchy( Module.SimpleHeader, [ Header, Layout.Wrapper, Layout.MainColumn ] );

            return '' +
`<div class='Header'>
    <header role='banner'>
        ${useArticleHeaderModule ? '<div class="h1">' : '<h1>'}
        ${isHome ? site.title : createElement( 'a', { href : site.url, "tabindex" : -1 }, site.title )}
        ${useArticleHeaderModule ? '</div>' : '</h1>'}
        ${createElement( 'span', null, site.subTitle, !!site.subTitle )}
    </header>
</div>`;
        },
        SearchBox : function(){
            checkValidHierarchy( Module.SearchBox, [ Header, Layout.Wrapper, Layout.SideColumn ] );
            var searchBoxPlaceholderText = site.searchBoxPlaceholderText || 'サイトを検索する';
            var searchButtonLabel = site.searchButtonLabel || '検索';
            return '' +
`<form class='Search' action='${site.searchUrl}' method='get' role='search'>
    <input name='max-results' type='hidden' value='20' tabindex='-1'>
    <input class='Search-txt' type='text' size='16' name='q' autocomplete='off' autocapitalize='off' placeholder='${searchBoxPlaceholderText}' title='${searchBoxPlaceholderText}' required>
    <input class='btn' value='${searchButtonLabel}' type='submit'>
</form>`;
        },
        BreadcrumbList : function(){
            checkValidHierarchy( Module.Breadcrumb, [ [ Ribbon, Main ], Layout.Wrapper, Layout.SingleColumn, Layout.SingleColumn.separete ] );

            var directories = page.directories,
                html = '';

            if( directories ){
                for( var i = 0, l = directories.length; i < l; ++i ){
                    if( i ){
                        html += ' / ';
                    };
                    dirPage = directories[ i ];
                    html += '<a itemprop="item" href="' + getRelativePath( page.path, dirPage.path ) + '"' + createAttribute( 'rel', 'nofollow', isExternalURL( dirPage.path ) ) + '>' +
                            '<span itemprop="name">' + dirPage.title + '</span>' +
                            '<meta itemprop="position" content="' + ( i + 1 ) + '">' +
                            '</a>';
                };
            };
            return '' +
`<div class="BreadcrumbList" itemscope itemtype="http://schema.org/BreadcrumbList">
    <span itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
        ${html}
    </span>
</div>`;
        },
        TextNavi : function(){
            checkValidHierarchy( Module.TextNavi, [ [ Ribbon, Main ], Layout.Wrapper, Layout.SingleColumn, Layout.SingleColumn.separete ] );

            return page.prev || page.next ? '' +
`<div class="TxtNavi">
    <nav>
    ${createElement( 'a', { href : getRelativePath( page.path, page.prev && page.prev.path || '' ), title : page.prev && page.prev.title }, '前', !!page.prev )}
    ${page.prev && page.next ? ', ' : ''}
    ${createElement( 'a', { href : getRelativePath( page.path, page.next && page.next.path || '' ), title : page.next && page.next.title }, '次', !!page.next )}
    </nav>
</div>` : '';
        },
        ArticleHeader : function(){
            checkValidHierarchy( Module.ArticleHeader, [ [ Ribbon, Main ], Layout.Wrapper, Layout.MainColumn ] );

            var articleHeaderlabels = '';

`    <b:if cond='data:post.labels.size != 0'>
<b:loop values='data:post.labels' var='label' index='i'>
    <b:if cond='data:i != 0'>,<b:else/>&lt;div class='AHead-labels'&gt;<i class='ico' expr:title='data:messages.labels'>&#x1f3f7;</i>
    </b:if>
    <a expr:href='data:label.url' rel='tag'><data:label.name/></a>
</b:loop>
&lt;/div&gt;
</b:if>`

            if( layoutTree[ 0 ].structure === Ribbon ){
                ribbonHasArticleHeader = true;
                return '' +
`<div class='AHead'>
<header>
    <h1>${page.title}</h1>
    <div>
        <i class='ico' title='投稿日時'>📅</i>
        <time datetime='${dateTime.toISO8601(page.createdAt)}' aria-label='${dateTime.toLocalARIAString(page.createdAt)}'>
        ${dateTime.toLocalString(page.createdAt)}
        </time>
    </div>
    ${articleHeaderlabels}
</header>
</div>`;
            };
            mainHasArticleHeader = true;
            return '' +
`<header>
    <div class='AHead'>
        <h1>${page.title}</h1>
    </div>
</header>`;
        },
        ArticleAuthor : function(){
            checkValidHierarchy( Module.ArticleAuthor, [ Ribbon, Layout.Wrapper, Layout.SideColumn ] );

            return '' +
`<div class='AAuthor'>
    <img src='${resizeImage( page.author.photo, 50 )}' alt=''/>
    <!-- i class='ico' expr:title='data:messages.postedBy'>&#x1f464;</i-->
    <p><a href='${page.author.profileURL}' rel='author' title='author profile' target='_blank'>
        ${page.author.name}
    </a>
    <!-- 投稿者 ${page.author.name} -->
    ${page.author.aboutMe}
</div>`;
        },
        ArticleDescription : function(){
            checkValidHierarchy( Module.ArticleDescription, [ Ribbon, Layout.Wrapper, Layout.SideColumn ] );

            return '' +
`<div class='ADesc'>
    <p>${page.description}
</div>`;
        },
        ArticleBody : function(){
            checkValidHierarchy( Module.ArticleBody, [ Main, Layout.Wrapper, Layout.MainColumn, MainColumn_fullWidth ] );

            return page.articleBody &&
`\n<article>
<div class='ABody'>
    <div class='aBodyRoot'>
${page.blog2slide ? '<!--[if !IE]><!--><div id="blog2slide-start"></div><!--<![endif]-->' : ''}
${page.articleBody}
    </div>
</div>
</article>`;
        },
        ArticleFooter : function( articleFooterItem ){
            if( isCorrectionPhase ){
                return { module : Module.ArticleFooter, name : 'ArticleFooter', articleFooterItemList : toArticleFooterItemList( arguments ) };
            };
            checkValidHierarchy( Module.ArticleFooter, [ Main, Layout.Wrapper, Layout.MainColumn, MainColumn_halfWidth ] );

            //
            var settings = articleFooterItem || { articleFooterItemList : [] },
                html = '';

            for( var i = 0, l = settings.articleFooterItemList.length; i < l; ++i ){
                html += settings.articleFooterItemList[ i ]();
            };

            return html ? `<div class='AFoot' style='border-top-width:1px'>${html}</div>` : '';
        },
        CommentForm : function(){
            checkValidHierarchy( Module.CommentForm, [ Main, Layout.Wrapper, Layout.MainColumn, MainColumn_halfWidth ] );

            return '<h2>CommentForm</h2>' +
`<div class='CmtForm'>
</div>`;
        },
        Comment : function(){
            checkValidHierarchy( Module.Comment, [ Main, Layout.Wrapper, Layout.MainColumn, MainColumn_halfWidth ] );


            return '<h2>Comment</h2>' +
`<div class='Comment'>
</div>`;
        },
        Cover : function(){
            checkValidHierarchy( Module.Cover, [ Main, Layout.Wrapper, Layout.MainColumn, Layout.MainColumn.separete ] );

            return '' +
`<div class='Cover'>
</div>`;
        },
        Magazine : function( title, id ){
            if( isCorrectionPhase ){
                return { module : Module.Magazine, name : 'Magazine', title : title, id : id };
            };

            checkValidHierarchy( Module.Magazine, [ Main, Layout.Wrapper, Layout.MainColumn ] );

            var setting = title || { title : 'NO TITLE' },
            links = page.links[ setting.id ];

            return `<h2>${setting.title}</h2>` + Magazine( 10, site, page, links );
        },
        SearchResult : function(){
            checkValidHierarchy( Module.SearchResult, [ Main, Layout.Wrapper, Layout.MainColumn ] );

            return '<h2>SearchResult</h2>' +
`<div class='SearchResult'>
</div>`;
        },
        Form : function(){
            checkValidHierarchy( Module.Form, [ Main, Layout.Wrapper, Layout.MainColumn ] );

            return '<h2>Form</h2>' +
`<div class='mspacer'>
</div>`;
        },
        Label : function(){
            return '<h2>Label</h2>' +
`<div class='Label'>
</div>`;
        },
        BlogArchive : function(){
            return '<h2>BlogArchive</h2>' +
`<div class='BlogArchive'>
</div>`;
        },
        RichLink : function( title, id, medal ){
            if( isCorrectionPhase ){
                return { module : Module.RichLink, name : 'RichLink', title : title, id : id, medal : medal };
            };

            var setting = title || { title : 'NO TITLE' },
            links = page.links[ setting.id ];

            return `<h2>${setting.title}</h2>` + RichLink( layoutTree[ 2 ].layout === Layout.MainColumn, 9, site, page, links, setting.medal );
        },
        LinkList : function(){
            return '<h2>LinkList</h2>' +
`<div class='LinkList' role='list'>
</div>`;
        },
        Subscribe : function(){
            return '<h2>Subscribe</h2>' +
`<div class='Subscribe'>
</div>`;
        },
        Attribution : function(){
            checkValidHierarchy( Module.Attribution, [ Footer, Layout.Wrapper, Layout.SingleColumn ] );

            return '' +
`<div class='Attribution'>
    <small role='contentinfo'>&copy; ${site.title}. Powered by github.</small>
</div>`;
        }
    };

    Module.ArticleFooter.ArticleMeta = function(){
        if( isCorrectionPhase ){
            return Module.ArticleFooter.ArticleMeta;
        };

        return '';
    };
    Module.ArticleFooter.SocialButtons = function(){
        if( isCorrectionPhase ){
            return Module.ArticleFooter.SocialButtons;
        };

        return '';
    };
    Module.ArticleFooter.Pager = function(){
        if( isCorrectionPhase ){
            return Module.ArticleFooter.Pager;
        };

        return page.prev || page.next ?
        `<div class="Pager" role="navigation">
            ${ page.prev ?
                '<span class="Pager-next">' +
                    createElement( 'a', { href : getRelativePath( page.path, page.prev.path || '' ) }, '<i></i>' + page.prev.title ) +
                ',</span>' : '<span></span>'
            }
            ${
                '<span class="Pager-top">' +
                    createElement( 'a', { href : '#top' }, '<i></i>トップへ' ) +
                ( page.next ? ',' : '' ) +
                '</span>'
            }
            ${ page.next ?
                '<span class="Pager-prev">' +
                    createElement( 'a', { href : getRelativePath( page.path, page.next.path || '' ) }, page.next.title + '<!--[if lte IE 7]> <![endif]--><i></i>' ) +
                '</span>' : '<span></span>'
            }
        </div>` : '';
    };

/* ============================================================================
 *  6. [Export]
 */
    return {
        WebDocument : function(){
            return Document( HTML( HEAD(), BODY( arguments ), Import.StyleSheet(), Import.Script() ) );
        },
        Document   : Document,
        HTML       : HTML,
        HEAD       : HEAD,
        BODY       : BODY,
        Header     : Header,
        Ribbon     : Ribbon,
        Main       : Main,
        Footer     : Footer,
        Layout     : Layout,
        Module     : Module,
        Import    : Import
    };
};