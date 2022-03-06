/**
 * @const
 */
var ua = {};

/**
 * @const
 */
var IE4DOM = {
    tags : function(){}
};

/**
 * @type {function()}
 */
var emptyFunction;

/**
 * @type {Event} 
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
 * @type {function(!Event)|undefined}
 */
function onunload(){};

/**
 * @type {function(!Event=)|undefined}
 */
function onscroll(){};

/**
 * @type {function(!Event)|undefined}
 */
function onresize(){};

/**
 * @type {function(!Event)|undefined}
 */
function onbeforeprint(){};

/**
 * @type {function(!Event)|undefined}
 */
function onafterprint(){};

/**
 * @type {function()}
 */
function prettyPrint(){};


/** @type {function()} */
document.onfullscreenchange = function(){};
/** @type {function()} Gecko 10+ */
document.onmozfullscreenchange = function(){};
/** @type {function()} Safari 5.1, Mobile safari 5.1+, */
document.onwebkitfullscreenchange = function(){};
/** @type {function()} Trident 11+ */
document.onmsfullscreenchange = function(){};

/** @type {boolean}  */
document.fullscreen;
/** @type {boolean}  */
document.mozFullScreen;
/** @type {boolean}  */
document.msFullscreenElement;
/** @type {boolean}  */
document.webkitIsFullscreen;

/** @type {function()} Chrome 15+, Safari 6+, */
HTMLElement.prototype.webkitRequestFullscreen = function(){};
/** @type {function()} Gecko 9+ */
HTMLElement.prototype.mozRequestFullscreen = function(){};
/** @type {function()} Trident 11+ */
HTMLElement.prototype.msRequestFullscreen = function(){};

/** @type {function()} Gecko 1.9.0 */
CanvasRenderingContext2D.prototype.mozDrawText = function(){};

/** @type {number}  */
var __vml = 0;