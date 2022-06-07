module.exports = function( page, pages ){
var WebDocBase  = require( '../web-doc-builder.js' )( page, pages ),
    WebDocument = WebDocBase.WebDocument,
    Header      = WebDocBase.Header,
    Ribbon      = WebDocBase.Ribbon,
    Main        = WebDocBase.Main,
    Footer      = WebDocBase.Footer,
    Layout      = WebDocBase.Layout,
    Module      = WebDocBase.Module;

return WebDocument(
        Header(
            Layout.Wrapper(
                Layout.MainColumn(
                    Module.SimpleHeader
                ),
                Layout.SideColumn(
                    Module.SearchBox
                )
            )
        ),
        Ribbon(
            Layout.Wrapper(
                Layout.SingleColumn(
                    Module.NoScriptMessage,
                    Layout.SingleColumn.separete(
                        Module.BreadcrumbList
                    ),
                    Layout.SingleColumn.separete(
                        Module.TextNavi
                    )
                )
            ),
            Layout.Wrapper(
                Layout.MainColumn(
                    Module.ArticleHeader
                ),
                Layout.SideColumn(
                    Layout.SideColumn.separete(
                        Module.ArticleAuthor
                    ),
                    Layout.SideColumn.separete(
                        Module.ArticleDescription
                    )
                )
            )
        ),
        Main(
            Layout.Wrapper(
                Layout.MainColumn(
                    Module.ArticleBody,
                    Module.ArticleFooter(
                        Module.ArticleFooter.ArticleMeta,
                        Module.ArticleFooter.SocialButtons,
                        Module.ArticleFooter.Pager
                    ),
                    Module.CommentForm,
                    Module.Comment,
                    Layout.MainColumn.separete(
                        Module.Label
                    ),
                    Layout.MainColumn.separete(
                        Module.BlogArchive
                    ),
                    Layout.MainColumn.separete(
                        Module.Cover
                    ),
                    Layout.MainColumn.separete(
                        Module.Cover
                    ),
                    Module.RichLink( '人気の投稿', 0, true ),
                    Module.Magazine( '全てのラベル', 0 ),
                    Module.SearchResult,
                    Module.Form
                ),
                Layout.SideColumn(
                    Layout.SideColumn.separete(
                        Module.RichLink( '最近更新された記事', 0 )
                    ),
                    Layout.SideColumn.separete(
                        Module.LinkList,
                        Module.LinkList
                    )
                )
            )
        ),
        Footer(
            Layout.Wrapper(
                Layout.MainColumn(
                    Module.Label
                ),
                Layout.SideColumn(
                    Module.Subscribe
                )
            ),
            Layout.Wrapper(
                Layout.SingleColumn(
                    Module.Attribution
                )
            )
        )
    );
};