const site = {
    NUMBER_OF_ARTICLE_PER_PAGE : 10,
    DATETIME_LOCALE            : '',
    ALT_THUMBNAIL_IMAGE        : '//4.bp.blogspot.com/-_jS4oD7mDQ8/WJFq8Z7sZ-I/AAAAAAAARP0/SJJHoRWJ37cwdBuO2pvuHQ_rY3GI1nIHQCLcB/s800/NicePageBuilder_package.jpg',
    OG_IMAGE_WIDTH             : 1200,
    OG_IMAGE_HEIGHT            : 630,

    noscriptMessage            : '',
    title                      : 'web-doc-base',
    subTitle                   : '俺のWeb文書プロジェクトの親プロジェクトです',
    homepageURL                : '',
    canonicalHomepageURL       : 'https://itozyun.github.io/web-doc-base/',
    homepageURL                : '//itozyun.github.io/web-doc-base/',
    lang                       : 'ja',
    dir                        : '',
    vml                        : false,
    charset                    : '',
    viewport                   : '',
    preloadStyles              : [],
    preloadScripts             : [],
    dnsPrefetchUrls            : [],
    searchBoxPlaceholderText   : '文書を検索する',
    searchButtonLabel          : '検索',
    searchUrl                  : '',
    themeColor                 : '',
    faviconURL                 : '',
    twitterID                  : '',
    facebookAppID              : '',
    msValidateID               : '',
    inlineScript               : '',
    mainJavascriptFilename     : 'main.js',
    labelDirectoryToLabelName  : [
        {
            dir      : 'development',
            name     : '開発',
            altImage : ''
        },
        {
            dir      : 'css',
            name     : 'CSS',
            altImage : ''
        },
        {
            dir      : 'javascript',
            name     : 'Javascript',
            altImage : ''
        },
        {
            dir      : 'WAI-ARIA',
            name     : 'WAI-ARIA',
            altImage : ''
        }
    ],
    feed : {
        atomTitle : '',
        rssTitle : '',
    }
};

module.exports = {
    site            : site,
    _path            : '',

    lang            : '',
    dir             : '',
    vml             : false,
    charset         : '',
    viewport        : '',
    preloadStyles   : [],
    preloadScripts  : [],
    dnsPrefetchUrls : [],
    inlineScript    : '',

    author : {
        name       : 'itozyun',
        aboutMe    : '2003年から HTML を書いてます。',
        photo      : '//3.bp.blogspot.com/-yV0t7h21w6w/VsSS3s6f0fI/AAAAAAAAQow/w1e_E4SwEtk/s50/%25E5%2586%2599%25E7%259C%259F.jpg',
        profileURL : '//twitter.com/itozyun/'
    },
    // article : {
    title         : '',
    articleBody   : '',
    articleText   : '',
    createdAt     : '',
    updatedAt     : '',
    labels        : [],
    image         : '',
    description   : 'ogp用概要をここにも表示',
    blog2slide    : false,
    // },
    ogp : {
        type        : '', // article website profile
        title       : '',
        image       : '',
        description : ''
    },
    templete : 'article',
    directories : [],
    prev : null,
    next : null
};