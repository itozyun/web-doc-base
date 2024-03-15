/** @type {!function(string):HTMLCollection} IE4 DOM */
document.all.tags = function(tag){};

/**
 * @const {!function()}
 */
var emptyFunction = function(){};

/**
 * @const {!Event|undefined} 
 */
var event;

/**
 * @type {function()}
 */
var _wdb_ontimer;

/**
 * @type {function()}
 */
var _wdb_onlooptimer;

/**
 * @type {function(!Event=)|undefined}
 */
function onload(){};

/**
 * @type {function(!Event=)|undefined}
 */
function onunload(){};

/**
 * @type {function(!Event=)|undefined}
 */
function onscroll(){};

/**
 * @type {function(!Event=)|undefined}
 */
function onresize(){};

/**
 * @type {function(!Event=)|undefined}
 */
function onbeforeprint(){};

/**
 * @type {function(!Event=)|undefined}
 */
function onafterprint(){};

/** @type {function(!Event)} */
document.onfullscreenchange = function(e){};
/** @type {function(!Event)} Gecko 10+ */
document.onmozfullscreenchange = function(e){};
/** @type {function(!Event)} Safari 5.1, Mobile safari 5.1+, */
document.onwebkitfullscreenchange = function(e){};
/** @type {function(!Event)} Trident 11+ */
document.onmsfullscreenchange = function(e){};

/** @type {boolean}  */
document.fullscreen;
/** @type {boolean}  */
document.mozFullScreen;
/** @type {boolean}  */
document.msFullscreenElement;
/** @type {boolean}  */
document.webkitIsFullscreen;

/** @type {!function()} Chrome 15+, Safari 6+, */
HTMLElement.prototype.webkitRequestFullscreen = function(){};
/** @type {!function()} Gecko 9+ */
HTMLElement.prototype.mozRequestFullscreen = function(){};
/** @type {!function()} Trident 11+ */
HTMLElement.prototype.msRequestFullscreen = function(){};

/** @type {string} Trident 5+ */
HTMLLinkElement.prototype.readyState;

/** @type {!function()} Gecko 1.9.0 */
CanvasRenderingContext2D.prototype.mozDrawText = function(){};

/** @type {number}  */
var __vml = 0;

// http://help.dottoro.com/ljnillej.php
/** @type {!function()} */
opera.postError = function(){};

/** @type {string} */
HTMLElement.prototype.tabindex;