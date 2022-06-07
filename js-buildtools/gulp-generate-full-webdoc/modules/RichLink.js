const { createAttribute, createElement, createElementList, resizeImage, getRelativePath, isExternalURL, snippetFromArticleText } = require( '../util/html.js' );
const dateTime = require( '../util/datetime.js' );

module.exports = function( underMainColmun, maxLink, site, currentPage, links, opt_numberOfMedal ){
    var html = '\n<div class="RichLink">\n<div class="RichLink-sep">';

    if( !links ) return 'NO LINKS!';

    for( var i = 0, l = Math.min( links.length, maxLink), link; i < l; ++i ){
        link = links[ i ];
        if( underMainColmun && i !== 0 && i % 3 === l % 3 ){
            html += '\n</div>\n<div class="RichLink-sep">';
        };
        // console.dir( link );
        html += createRichLinkItem( underMainColmun, site, currentPage, link, link === currentPage, opt_numberOfMedal );
    };
    return html + '\n</div>\n</div>';
};

function createRichLinkItem( underMainColmun, site, currentPage, link, isCurrentPage, opt_numberOfMedal ){
    if( underMainColmun ){
        return '' +
`<a role="listitem"${createAttribute( 'href', getRelativePath( currentPage.path, link.path ), !isCurrentPage)}>
<h3>
    <img alt="" role="presentation" src="${ resizeImage( link.image || site.ALT_THUMBNAIL_IMAGE, 125, 125 ) }" width="125" height="125">
    ${link.title}
</h3>
<div class="RichLink-meta">
    <span>
        <i class="ico-clock" title="投稿日時"></i>
        <time datetime='${dateTime.toISO8601(link.createdAt)}' aria-label='${dateTime.toLocalARIAString(link.createdAt)}'>
        ${dateTime.toYYYYMMDDHHMM(link.createdAt)}
        </time>
    </span><br>
    <span>
        <i class="ico-pen" title="更新日時"></i>
        <time datetime='${dateTime.toISO8601(link.updatedAt)}' aria-label='${dateTime.toLocalARIAString(link.updatedAt)}'>
        ${dateTime.toYYYYMMDDHHMM(link.updatedAt)}
        </time>
    </span>
    <span aria-label="ラベル">
        <i class="ico-label"></i>
        Firefox, Web開発, クロスブラウザ, テキストブラウザ
    </span>
</div>
<p aria-hidden="true">${ snippetFromArticleText( link.articleText, 80 ) }</p>
</a>`;
    };
    // console.dir( link )
    return '' +
`<a role="listitem"${createAttribute( 'href', getRelativePath( currentPage.path, link.path ), !isCurrentPage)}>
<img alt="" role="presentation" src="${ resizeImage( link.image || site.ALT_THUMBNAIL_IMAGE, 50, 50 ) }" width="50" height="50">
<b>${link.title}</b>
</a>`;
};