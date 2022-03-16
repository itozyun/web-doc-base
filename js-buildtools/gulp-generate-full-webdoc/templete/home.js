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
                    Module.NoScriptMessage
                )
            )
        ),
        Main(
            Layout.Wrapper(
                Layout.SingleColumn(
                    Layout.MainColumn.separete(
                        Module.Cover
                    ),
                    Layout.MainColumn.separete(
                        Module.Cover
                    ),
                    Module.RichLink( '最近更新された記事', 0 ),
                    Module.ArticleFooter(
                        Module.ArticleFooter.Pager
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