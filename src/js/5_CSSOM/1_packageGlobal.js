/**
 * @font-face に対応するも styleSheet.insertRule(), addRule() で @font-face が追加できない件
 * Windows Safari 3.2.3   WebKit 525.29 で必要. Windows Safari 4.0.5 Webkit 531.22.7 でこの処理は不要.
 * Windows Chrome 1.0.154 WebKit 525.19 で必要. Windows Iron 2.0.168 Webkit 530.4 でこの処理は不要.
 */
var p_CSSOM_FAIL_TO_INSERT_FONTFACE_RULE = p_Trident < 9 || ( 525 <= p_WebKit && p_WebKit < 530 ) || p_ChromiumBase < 2,

    p_CSSOM_canuse = 0,

    p_CSSOM_getStyleSheetElementList,
    p_CSSOM_createStyleSheet,
    p_CSSOM_deleteStyleSheet,
    p_CSSOM_insertRuleToStyleSheet,
    p_CSSOM_deleteRuleFromStyleSheet,
    p_CSSOM_setStyleOfRule,
    p_CSSOM_getRawValueOfRule,
    p_CSSOM_getIndexOfRule,
    p_CSSOM_getLastIndexOfRule;