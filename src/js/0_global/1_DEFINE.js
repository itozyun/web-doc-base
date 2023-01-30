var
/** @define {boolean} */
    DEFINE_WEB_DOC_BASE__DEBUG              = false,
/** @define {string} */
    DEFINE_WEB_DOC_BASE__LOGGER_ELEMENT_ID  = '',
/** @define {number} */
    DEFINE_WEB_DOC_BASE__WEBFONT_DEBUG_MODE = 0, // 1 なら Web font のテストに失敗, 2 なら webfont embeded css のテストに失敗

/** @define {string} */
    DEFINE_WEB_DOC_BASE__MAIN_COLUMN_ID     = 'jsMain',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__SIDE_COLUMN_ID     = 'jsSide',

/** ===========================================================================
 * Path of the assets directories
 */
/** @define {string} */
    DEFINE_WEB_DOC_BASE__ASSET_DIR_TO_JS_DIR   = 'js',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__ASSET_DIR_TO_CSS_DIR  = 'css',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__DESKTOP_PAGE_CSS_DIR  = 'pc',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__MOBILE_PAGE_CSS_DIR   = 'mb',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__FORCED_COLORS_CSS_DIR = 'hc',

/** @define {string} */
    DEFINE_WEB_DOC_BASE__CSS_FILENAME_MODERN  = 'modern',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__CSS_FILENAME_MACIE5  = 'ie5mac',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__CSS_FILENAME_IE5     = 'ie5win',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__CSS_FILENAME_IE55    = 'ie55',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__CSS_FILENAME_IE6     = 'ie6',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__CSS_FILENAME_IE7     = 'ie7',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__CSS_FILENAME_IE8     = 'ie8',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__CSS_FILENAME_IE9     = 'ie9',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__CSS_FILENAME_OPERA70 = 'opr70',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__CSS_FILENAME_OPERA72 = 'opr72',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__CSS_FILENAME_OPERA8  = 'opr8',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__CSS_FILENAME_OPERA9  = 'opr9',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__CSS_FILENAME_GECKO07 = 'gck07',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__CSS_FILENAME_GECKO08 = 'gck08',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__CSS_FILENAME_GECKO09 = 'gck09',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__CSS_FILENAME_GECKO12 = 'gck12',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__CSS_FILENAME_GECKO13 = 'gck13',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__CSS_FILENAME_GECKO19 = 'gck19',

/** ===========================================================================
 * 6_CanUse/cssGeneratedContent.js
 */
/** @define {string} */
    DEFINE_WEB_DOC_BASE__CSS_GENERATED_CONTENT_TEST_ID = 'jsCanUseContent',

/** ===========================================================================
 * 7_Patch/cssLoader.toEndOfScript.js
 */
/** @define {boolean} */
    DEFINE_WEB_DOC_BASE__USE_CSS_LOADER_OF_INLINE_JS = true,

/** ===========================================================================
 * 7_Patch/detectImageTurnedOff.js
 */
/** @define {string} */
    DEFINE_WEB_DOC_BASE__CLASSNAME_IMG_LOADED = 'js-image-has-been-loaded',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__CLASSNAME_ABODY_ROOT = 'aBodyRoot',

/** ===========================================================================
 * 7_Patch/fixBrokenAnchorsForOldGecko.js
 */
/** @define {string} */
    DEFINE_WEB_DOC_BASE__CLASSNAME_RICHLINK_SEP =  'RichLink-sep',

/** ===========================================================================
 * 7_Patch/polyfillForcedColors.js
 */
/** @define {string} */
    DEFINE_WEB_DOC_BASE__CLASSNAME_CANROTATE = 'js-canuse-css-rotate-when-forced-colors-mode',

/** ===========================================================================
 * 8_Library/blockquot.js
 */
/** @define {string} */
    DEFINE_WEB_DOC_BASE__CLASSNAME_BLOCKQUOT_LINK = 'js-generated-link-in-blockquote',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__CLASSNAME_BLOCKQUOT_CITE = 'js-generated-cite-in-blockquote',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__AMAZON_ID                = '',

/** ===========================================================================
 * 8_Library/blog2slide.js
 */
/** @define {string} */
    DEFINE_WEB_DOC_BASE__BLOG_2_SLIDE_START_ID   = 'blog2slide-start',
    /** @define {string} */
    DEFINE_WEB_DOC_BASE__BLOG_2_SLIDE_ROOT_ID    = 'blog2slide-root',
    /** @define {string} */
    DEFINE_WEB_DOC_BASE__BLOG_2_SLIDE_CURRENT_ID = 'blog2slide-current',

/** ===========================================================================
 * 8_Library/PicaThumbnail.js
 */
/** @define {string} */
    DEFINE_WEB_DOC_BASE__CLASSNAME_PICA_THMBNAIL_TARGET = 'js-pica-thumbnail',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__CLASSNAME_PICA_THMBNAIL_LARGE  = 'js-pica-thumbnail__large',

/** @define {string} */
    DEFINE_WEB_DOC_BASE__CLASSNAME_CAPTIONED_OBJ        = 'caption',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__CLASSNAME_CAPTIONED_OBJ_TARGET = 'js-captioned-thumbnail',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__CLASSNAME_CAPTIONED_OBJ_LARGE  = 'js-captioned-thumbnail__large',

/** ===========================================================================
 * 8_Library/SidebarFixer.js
 */
/** @define {string} */
    DEFINE_WEB_DOC_BASE__SIDEBARFIXER_WRAPPER_ID       = 'jsSidebarFixer',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__SIDEBARFIXER_1ST_WHEEL_ELM_ID = 'jsSidebarFixer1',
/** @define {string} */
    DEFINE_WEB_DOC_BASE__SIDEBARFIXER_2ND_WHEEL_ELM_ID = 'jsSidebarFixer2';