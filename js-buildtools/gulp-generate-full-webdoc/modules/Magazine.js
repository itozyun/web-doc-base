const { createAttribute, createElement, createElementList, resizeImage, getRelativePath, isExternalURL, snippetFromArticleText } = require( '../util/html.js' );
const dateTime = require( '../util/datetime.js' );

module.exports = function( maxLink, site, currentPage, links ){
    var l = Math.min( links.length, maxLink),
        html = '\n<div class="Magazine">\n<div class="Magazine-sep' + ( l % 2 ? ' Magazine-only' : '' ) + '">';

    if( !links ) return 'NO LINKS!';

    for( var i = 0, link; i < l; ++i ){
        link = links[ i ];
        if( i !== 0 && i % 2 === l % 2 ){
            html += '\n</div>\n<div class="Magazine-sep">';
        };
        // console.dir( link );
        html += createMagazineItem( site, currentPage, link, link === currentPage );
    };
    return html + '\n</div>\n</div>';
};

function createMagazineItem( site, currentPage, link, isCurrentPage ){
    return '' +
`<div class="Magazine-sep-inner">
<div class="Magazine-item">
    <span class="Magazine-date">
        <time datetime='${dateTime.toISO8601(link.createdAt)}' aria-label='${dateTime.toLocalARIAString(link.createdAt)}'>
            <span class="Magazine-yy">${dateTime.toYYYY(link.createdAt)}</span>
            <span class="Magazine-y">/</span>
            <span class="Magazine-mm">${dateTime.toMM(link.createdAt)}</span>
            <span class="Magazine-m">/</span>
            <span class="Magazine-dd">${dateTime.toDD(link.createdAt)}</span>
        </time>
    </span>
    <div class="Magazine-main">
        <h3><a ${createAttribute( 'href', getRelativePath( currentPage.path, link.path ), !isCurrentPage)}>${link.title}</a></h3>
        <div class="Magazine-label">
            Firefox, Web開発, クロスブラウザ, テキストブラウザ
        </div>
        <div class="Magazine-snippet">
            <img alt="" role="presentation" src="${ resizeImage( link.image || site.ALT_THUMBNAIL_IMAGE, 125, 125 ) }" width="125" height="125">
            <p aria-hidden="true">${ snippetFromArticleText( link.articleText, 200 ) }
        </div>
    </div>
</div>
</div>`;
};