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
            )
        ),
        Main(
            Layout.Wrapper(
                Layout.MainColumn(
                    Module.ArticleHeader,
                    Module.ArticleBody,
                    Module.ArticleFooter(
                        Module.ArticleFooter.ArticleMeta,
                        Module.ArticleFooter.SocialButtons,
                        Module.ArticleFooter.Pager
                    )
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