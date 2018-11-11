(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FIREBASE_DEFAULT_CONFIG = {
    apiKey: 'AIzaSyA84vag_S0QSO7j1Eff4vZJEjdLc6wPx0M',
    authDomain: 'dom-snapshot.firebaseapp.com',
    databaseURL: 'https://dom-snapshot.firebaseio.com',
    projectId: 'dom-snapshot',
    storageBucket: 'dom-snapshot.appspot.com',
    messagingSenderId: '578009354171'
};
exports.default = FIREBASE_DEFAULT_CONFIG;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DOM_NAMESPACES = {
    SVG: 'http://www.w3.org/2000/svg'
};
exports.default = DOM_NAMESPACES;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PSEUDOSELECTORS = [
    ':after', ':before', ':first-line', ':first-letter', ':selection'
];
exports.default = PSEUDOSELECTORS;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ESCAPED_ATTRIBUTES = [
    //body
    'onafterprint',
    'onbeforeprint',
    'onbeforeunload',
    'onerror',
    'onhashchange',
    'onload',
    'onmessage',
    'onoffline',
    'ononline',
    'onpagehide',
    'onpageshow',
    'onpopstate',
    'onresize',
    'onstorage',
    'onunload',
    //forms
    'onblur',
    'onchange',
    'oncontextmenu',
    'onfocus',
    'oninput',
    'oninvalid',
    'onreset',
    'onsearch',
    'onselect',
    'onsubmit',
    //keyboard
    'onkeydown',
    'onkeypress',
    'onkeyup',
    //mouse
    'onclick',
    'ondblclick',
    'onmousedown',
    'onmousemove',
    'onmouseout',
    'onmouseover',
    'onmouseup',
    'onmousewheel',
    'onwheel',
    //Drag Events
    'ondrag',
    'ondragend',
    'ondragenter',
    'ondragleave',
    'ondragover',
    'ondragstart',
    'ondrop',
    'onscroll',
    //Clipboard Events
    'oncopy',
    'oncut',
    'onpaste',
    // Media Events
    'onabort',
    'oncanplay',
    'oncanplaythrough',
    'oncuechange',
    'ondurationchange',
    'onemptied',
    'onended',
    'onerror',
    'onloadeddata',
    'onloadedmetadata',
    'onloadstart',
    'onpause',
    'onplay',
    'onplaying',
    'onprogress',
    'onratechange',
    'onseeked',
    'onseeking',
    'onstalled',
    'onsuspend',
    'ontimeupdate',
    'onvolumechange',
    'onwaiting',
    // Misc Events
    'ontoggle'
];
exports.default = ESCAPED_ATTRIBUTES;

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var INHERIT_STYLE_ATTRIBUTES = [
    'azimuth', 'border-collapse', 'border-spacing', 'caption-side',
    'color', 'cursor', 'direction', 'elevation', 'empty-cells',
    'font-family', 'font-size', 'font-style', 'font-variant', 'font-weight',
    'font', 'letter-spacing', 'line-height', 'list-style-image', 'list-style-position',
    'list-style-type', 'list-style', 'orphans', 'pitch-range', 'pitch', 'quotes', 'richness',
    'speak-header', 'speak-numeral', 'speak-punctuation', 'speak',
    'speech-rate', 'stress', 'text-align', 'text-indent', 'text-transform',
    'visibility', 'voice-family', 'volume', 'white-space', 'widows', 'word-spacing'
];
exports.default = INHERIT_STYLE_ATTRIBUTES;

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NODE_NAMES_TO_IGNORE = [
    'NOSCRIPT', 'SCRIPT', 'STYLE', '#comment', '#document'
];
exports.default = NODE_NAMES_TO_IGNORE;

},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NODE_NAMES_TO_REPLACE = {
    'IFRAME': 'DIV'
};
exports.default = NODE_NAMES_TO_REPLACE;

},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SKIPPED_STYLE_ATTRIBUTES = {
    'align-items': 'normal',
    'align-self': 'normal',
    'clip-path': 'none',
    'flex-basis': 'auto',
    'flex-grow': '0',
    'flex-shrink': '1',
    'justify-content': 'normal',
    'user-select': 'text',
    'border-bottom-left-radius': '0px',
    'border-bottom-right-radius': '0px',
    'border-top-right-radius': '0px',
    'border-top-left-radius': '0px',
    'cursor': 'auto',
    'background-position': '0% 0%',
    'background-size': 'auto',
    'direction': 'ltr',
    // "margin-bottom": "0px",
    // "margin-left": "0px",
    // "margin-right": "0px",
    // "margin-top": "0px",
    'max-height': 'none',
    'max-width': 'none',
    'opacity': '1',
    // "padding-bottom": "0px",
    // "padding-left": "0px",
    // "padding-right": "0px",
    // "padding-top": "0px",
    'right': 'auto',
    'speak': 'normal',
    'top': 'auto',
    'transition-delay': '0s',
    'transition-duration': '0s',
    'transition-property': 'all',
    'transition-timing-function': 'ease',
    'vertical-align': 'baseline',
    'visibility': 'visible',
    'white-space': 'normal',
    'widows': '2',
    'word-break': 'normal',
    'z-index': 'auto',
};
exports.default = SKIPPED_STYLE_ATTRIBUTES;

},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var escaped_attributes_1 = require("./constants/escaped-attributes");
var firebase_default_config_1 = require("./config/firebase-default-config");
var inherit_style_attributes_1 = require("./constants/inherit-style-attributes");
var skipped_style_attributes_1 = require("./constants/skipped-style-attributes");
var dom_namespaces_1 = require("./constants/dom-namespaces");
var node_names_to_ignore_1 = require("./constants/node-names-to-ignore");
var node_names_to_replace_1 = require("./constants/node-names-to-replace");
var dom_pseudoselectors_1 = require("./constants/dom-pseudoselectors");
var collect_meta_1 = require("./utils/collect-meta");
var is_svg_1 = require("./utils/is-svg");
var DomSnapshot = /** @class */ (function () {
    /*
      */
    function DomSnapshot(config, fbConfig) {
        if (config === void 0) { config = {
            inlineStyles: false,
            vacuum: false,
            stylesCleanup: true,
            capturePseudoselectors: true,
            safeAttributes: true,
            state: {
                BODY_STYLE: [],
                CACHE_KEYS: [],
                CACHE_VALUES: [],
                HTML_STYLE: [],
                items: [],
                meta: {
                    // used to patch image links on snapshot restore (may be replaced to base64 inline)
                    protocol: "",
                    hostname: ""
                }
            }
        }; }
        if (fbConfig === void 0) { fbConfig = false; }
        this.uidPrefix = null;
        // this nodes not going to snapshot
        this.NODE_NAMES_TO_IGNORE = node_names_to_ignore_1.default;
        // iframes nodes will be replaced to div's
        this.NODE_NAMES_TO_REPLACE = node_names_to_replace_1.default;
        // pseudoselectors to capture
        this.PSEUDOSELECTORS = dom_pseudoselectors_1.default;
        // inherit styles (based on css 2.1);
        this.INHERIT = inherit_style_attributes_1.default;
        // styles to skip from capturing
        this.SKIP_STYLES = skipped_style_attributes_1.default;
        //https://www.w3schools.com/TAGs/ref_eventattributes.asp
        this.ESCAPED_ATTRIBUTES = escaped_attributes_1.default;
        if (!config.state) {
            config.state = {
                BODY_STYLE: [],
                CACHE_KEYS: [],
                CACHE_VALUES: [],
                HTML_STYLE: [],
                items: [],
                meta: {
                    protocol: "",
                    hostname: ""
                }
            };
        }
        // init state
        this.BODY_STYLE = config.state.BODY_STYLE || [];
        this.CACHE_KEYS = config.state.CACHE_KEYS || [];
        this.CACHE_VALUES = config.state.CACHE_VALUES || [];
        this.BODY_ATTRIBUTES = config.state.CACHE_VALUES || [];
        this.HTML_STYLE = config.state.HTML_STYLE || [];
        this.items = config.state.items || [];
        this.meta = config.state.meta || {};
        this._USE_VACUUM = config.vacuum || false;
        // append styles to dom node instead of style node
        this._USE_INLINE_STYLES = config.inlineStyles || false;
        this._USE_STYLES_CLEANUP = config.stylesCleanup || true;
        this._USE_PSEUDOSELECTORS = config.capturePseudoselectors || true;
        this._USE_SAFE_ATTRIBUTES = config.safeAttributes || true;
        this._NAMESPACES = dom_namespaces_1.default;
        // node cache (for node creation)
        this.nodeCache = {};
        // roots init
        this._html = false;
        this._head = false;
        this._body = false;
        this.isLoaded = false;
        // skip this node types
        this.restrictedNodeTypes = [3, 8];
        // skip hidden nodes
        this.skipDisplayNone = true;
        // firebase config with defaults
        this.fbConfig = fbConfig || firebase_default_config_1.default;
        this.intFirebase(this.fbConfig);
    }
    DomSnapshot.prototype._normalizeAttributeName = function (attrName) {
        return String(attrName)
            .trim()
            .toLowerCase();
    };
    DomSnapshot.prototype._isSafeAttribute = function (attrName) {
        if (this._USE_SAFE_ATTRIBUTES &&
            this.ESCAPED_ATTRIBUTES.includes(this._normalizeAttributeName(attrName))) {
            return false;
        }
        return (!attrName.includes("ng-") &&
            !attrName.includes('"') &&
            !attrName.includes("style"));
    };
    DomSnapshot.prototype._extractNodeAttributes = function (node) {
        var _this = this;
        return Array.prototype.map
            .call(node.attributes, function (el) {
            return [el.nodeName, _this._patchAttribute(el.nodeName, el.nodeValue)];
        })
            .filter(function (_a) {
            var attrName = _a[0];
            return _this._isSafeAttribute(attrName);
        });
    };
    DomSnapshot.prototype.resetTarget = function () {
        this.setBodyNode(false);
        this.setHtmlNode(false);
        this.setHeadNode(false);
    };
    /// set rootNode for restoring
    DomSnapshot.prototype.restoreTo = function (node) {
        this.setBodyNode(node);
    };
    DomSnapshot.prototype._collectMeta = function () {
        return collect_meta_1.default();
    };
    DomSnapshot.prototype._patchAttribute = function (name, value) {
        if (["src", "href"].includes(name)) {
            var firstChar = String(value).charAt(0);
            var secondChar = String(value).charAt(1);
            var hasHash = secondChar === "#" || firstChar === "#";
            var hasTwoSlashes = firstChar === secondChar && firstChar === "/";
            var hasPath = secondChar === "/";
            if (!hasTwoSlashes && (hasPath || hasHash)) {
                if (this.meta.hostname && this.meta.protocol) {
                    return this.meta.protocol + "//" + this.meta.hostname + value;
                }
            }
        }
        return value;
    };
    DomSnapshot.prototype._isSVG = function (element) {
        return is_svg_1.default(element);
    };
    DomSnapshot.prototype._getBodyAttributes = function () {
        return this._extractNodeAttributes(this._getBodyNode());
    };
    DomSnapshot.prototype._getBodyStyle = function () {
        return this._createStyleObject(this._getStyleForNode(this._getBodyNode()));
    };
    DomSnapshot.prototype._getHTMLStyle = function () {
        return this._getBodyParentStyle();
    };
    DomSnapshot.prototype._getBodyParentStyle = function () {
        var body = this._getBodyNode();
        var styleNode = [];
        if (body.parentNode) {
            styleNode = this._getStyleForNode(body.parentNode);
        }
        return this._createStyleObject(styleNode);
        // get optimal style, save as special node
    };
    DomSnapshot.prototype.addMeta = function (keyOrObject, value, target) {
        if (target === void 0) { target = this; }
        if (typeof keyOrObject === "object") {
            target.meta = Object.assign(target.meta, keyOrObject);
        }
        else {
            target.meta[keyOrObject] = value;
        }
        return this;
    };
    DomSnapshot.prototype.getMeta = function () {
        return Object.assign({}, this.meta);
    };
    DomSnapshot.prototype.clearMeta = function () {
        this.meta = {};
    };
    DomSnapshot.prototype._addFbScript = function (resolve, reject, config) {
        var _this = this;
        var head = this._getDocument().getElementsByTagName("head")[0];
        var script = this._getDocument().createElement("script");
        script.type = "text/javascript";
        script.onload = function () {
            window.firebase.initializeApp(config);
            _this.firebase = window.firebase;
            _this.isLoaded = true;
            resolve(_this);
        };
        script.onerror = function (e) {
            reject(e);
        };
        script.src = "https://www.gstatic.com/firebasejs/4.2.0/firebase.js";
        head.appendChild(script);
    };
    DomSnapshot.prototype.intFirebase = function (fbConfig) {
        var _this = this;
        this._loaded = new Promise(function (resolve, reject) {
            if (typeof window.firebase !== "undefined") {
                _this.firebase = window.firebase;
                _this.isLoaded = true;
                return resolve(_this);
            }
            _this._addFbScript(resolve, reject, fbConfig);
        });
        return this._loaded;
    };
    DomSnapshot.prototype.loaded = function () {
        return this._loaded;
    };
    DomSnapshot.prototype._getHead = function () {
        return (this._head ||
            this._getBodyNode().parentNode.querySelector("head") ||
            this._getDocument().head ||
            this._getDocument().getElementsByTagName("head")[0]);
    };
    DomSnapshot.prototype._cleanHeadNodeFromStyles = function () {
        var head = this._getHead();
        var stylesToRemove = head.getElementsByTagName("style");
        if (stylesToRemove.length) {
            for (var i = 0; i < stylesToRemove.length; i++) {
                head.removeChild(stylesToRemove[i]);
            }
        }
        var styleLinksToRemove = head.querySelectorAll('link[rel="stylesheet"]');
        if (styleLinksToRemove.length) {
            for (var i = 0; i < styleLinksToRemove.length; i++) {
                head.removeChild(styleLinksToRemove[i]);
            }
        }
    };
    DomSnapshot.prototype._addStyleNode = function (css, target) {
        if (target === void 0) { target = false; }
        var style = this._getDocument().createElement("style");
        var head = target || this._getHead();
        style.type = "text/css";
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        }
        else {
            style.appendChild(this._getDocument().createTextNode(css));
        }
        head.appendChild(style);
    };
    DomSnapshot.prototype._getDomNodeFromArgument = function (selector) {
        var target = typeof selector === "object"
            ? selector
            : document.querySelector(selector);
        return target;
    };
    DomSnapshot.prototype._cleanDomNode = function (target) {
        while (target.firstChild) {
            target.removeChild(target.firstChild);
        }
    };
    DomSnapshot.prototype.takeSnapshot = function (selector) {
        return this.createSnapshot(this._getDomNodeFromArgument(selector));
    };
    DomSnapshot.prototype.renderSnapshot = function (selector, snapshot, rewriteDomContent) {
        if (rewriteDomContent === void 0) { rewriteDomContent = true; }
        var target = this._getDomNodeFromArgument(selector);
        if (rewriteDomContent) {
            this._cleanDomNode(target);
        }
        this.restoreWorldFrom(snapshot, target);
    };
    DomSnapshot.prototype.showSnapshot = function (id, selector) {
        var _this = this;
        if (selector === void 0) { selector = false; }
        return this.getSnapshotById(id).then(function (snapshot) {
            _this.destroyWorld();
            var targetNode = document.querySelector(String(selector).valueOf()) ||
                _this._getBodyNode();
            var source = _this.setState(_this, snapshot);
            _this.restoreWorldFrom(source, targetNode);
        });
    };
    DomSnapshot.prototype.restoreSnapshot = function (id) {
        return this._showSnapshot(id);
    };
    DomSnapshot.prototype._fbAddToSnapshotList = function (id, data) {
        this.firebase
            .database()
            .ref("snapshots-list/" + id)
            .set(data);
    };
    DomSnapshot.prototype._fbSetSnapshot = function (id, snapshot) {
        this.firebase
            .database()
            .ref("snapshots/" + id)
            .set(snapshot);
    };
    DomSnapshot.prototype._fbGetSnapshot = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.firebase
                .database()
                .ref("snapshots/" + id)
                .once("value")
                .then(function (snapshot) {
                return resolve(snapshot.val());
            });
        });
    };
    DomSnapshot.prototype.getSnapshotById = function (id) {
        return this._fbGetSnapshot(id);
    };
    DomSnapshot.prototype._showSnapshot = function (id, rootElement) {
        var _this = this;
        if (id === void 0) { id = "1502312089479"; }
        if (rootElement === void 0) { rootElement = window.document; }
        return this.getSnapshotById(id).then(function (snapshot) {
            _this.destroyWorld();
            _this.setState(_this, snapshot);
            _this.restoreWorld(rootElement, _this);
        });
    };
    DomSnapshot.prototype._clearState = function (target) {
        target.items = [];
        target.CACHE_KEYS = [];
        target.BODY_STYLE = [];
        target.HTML_STYLE = [];
        target.CACHE_VALUES = [];
        target.BODY_ATTRIBUTES = [];
    };
    DomSnapshot.prototype._getArrayCopy = function (element) {
        if (typeof element !== "object" || element === null) {
            return [];
        }
        return element.slice(0);
    };
    DomSnapshot.prototype._cloneObject = function (obj) {
        if (typeof obj === "undefined" || obj === null) {
            return {};
        }
        return JSON.parse(JSON.stringify(obj));
    };
    DomSnapshot.prototype._copyWorld = function (rootNode, source) {
        if (rootNode === void 0) { rootNode = false; }
        return this._copyWorldTo(rootNode, source);
    };
    DomSnapshot.prototype._copyWorldTo = function (rootNode, source) {
        var pseudoSelectorsStylesArray = [];
        var reindexMap = {};
        var items = source.items;
        source.meta = this._collectMeta();
        var target = rootNode || this._getBodyNode();
        var isBodyNodeRoot = target === this._getBodyNode();
        if (isBodyNodeRoot) {
            source.BODY_ATTRIBUTES = this._getBodyAttributes();
            source.HTML_STYLE = this._styleObjectToOptimalStyleArray(this._getHTMLStyle(), undefined, source);
            source.BODY_STYLE = this._styleObjectToOptimalStyleArray(this._getBodyStyle(), undefined, source);
        }
        var capturedNodes = this._getAllDomNodes(target);
        if (!isBodyNodeRoot) {
            capturedNodes.unshift(rootNode);
        }
        for (var i = 0; i < capturedNodes.length; i++) {
            var item = capturedNodes[i];
            if (item.dataset) {
                item.dataset[this._nodeSelectorDatasetName()] = i;
            }
            var nodeStyle = this._getStyleForNode(item);
            if (this._shouldTakeElement(item, nodeStyle)) {
                if (item.dataset && this._USE_PSEUDOSELECTORS) {
                    var pseudoselecorStyles = this._getStylesForPseudoSelectors(item, source);
                    if (pseudoselecorStyles) {
                        pseudoselecorStyles.index = i;
                        pseudoSelectorsStylesArray.push(pseudoselecorStyles);
                    }
                }
                items.push(this._serializeNode(nodeStyle, item, i, source));
                reindexMap[i] = items.length - 1;
            }
        }
        if (this._USE_PSEUDOSELECTORS) {
            this._forEach(pseudoSelectorsStylesArray, function (el) {
                var item = items[reindexMap[el.index]];
                item.pseudoselectors = el;
            });
        }
        if (this._USE_VACUUM) {
            source.items = this._vacuum(items);
        }
        if (this._USE_STYLES_CLEANUP) {
            this._cleanupStyles(source);
        }
    };
    DomSnapshot.prototype._getHtmlNode = function () {
        return this._html || this._getBodyNode().parentNode || this._getBodyNode();
    };
    DomSnapshot.prototype.restoreWorld = function (target, source) {
        if (target === void 0) { target = false; }
        if (!target) {
            //this._setHTMLStyle(source);
            this._setBodyAttributes(source);
            //this._setBodyStyle(source);
        }
        return this.restoreWorldFrom(source, target);
    };
    DomSnapshot.prototype._forEach = function (array, action) {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            action(array[i], i);
        }
    };
    DomSnapshot.prototype.restoreWorldFrom = function (source, target) {
        var _this = this;
        if (target === void 0) { target = false; }
        var stylesToUppend = [];
        var fragment = this._getDocument().createDocumentFragment();
        this.uidPrefix =
            "d" +
                Math.random()
                    .toString(36)
                    .slice(-2);
        var nodesIndex = {};
        this._forEach(source.items, function (el) {
            var node = _this._createNode(el, stylesToUppend, source);
            nodesIndex[el.index] = node;
            _this._insertNode(node, el, fragment, nodesIndex);
        });
        nodesIndex = {};
        stylesToUppend.push("html { " + this._getNodeStyleText(source.HTML_STYLE, source) + " }");
        stylesToUppend.push("body { " + this._getNodeStyleText(source.BODY_STYLE, source) + " }");
        this._addStyleNode(stylesToUppend.reverse().join("\n"));
        var rootNode = target || this._getBodyNode();
        rootNode.appendChild(fragment);
        this.uidPrefix = null;
        return this;
    };
    DomSnapshot.prototype._destroyBodyAttributes = function () {
        var attributes = this._getBodyAttributes();
        var body = this._getBodyNode();
        this._forEach(attributes, function (_a) {
            var name = _a[0];
            body.removeAttribute(name);
        });
        return this;
    };
    DomSnapshot.prototype.destroyWorld = function () {
        this._destroyBodyAttributes();
        this._getBodyNode().innerHTML = "";
        this._cleanHeadNodeFromStyles();
        return this;
    };
    DomSnapshot.prototype._createStyleObject = function (styleNode) {
        var styleObject = {};
        if (!styleNode.length) {
            return styleObject;
        }
        for (var i = 0; i < styleNode.length; i++) {
            var propertyName = styleNode[i];
            styleObject[propertyName] = styleNode.getPropertyValue(propertyName);
        }
        return styleObject;
    };
    DomSnapshot.prototype._isDefaultStyle = function (name, value) {
        return false;
        // return this.BODY_STYLE[name] === value || false;
    };
    DomSnapshot.prototype._vacuum = function (items) {
        var itemsToRemove = [];
        var lastItemIndex = items.length - 1;
        this._forEach(items, function (item, index) {
            if (lastItemIndex !== index && item.nodeName === "#text") {
                var nextNode = items[index + 1];
                var hasSameParent = nextNode.parent === item.parent;
                var hasSameNodeName = nextNode.nodeName === item.nodeName;
                if (hasSameParent && hasSameNodeName) {
                    nextNode.textContent = "" + item.textContent + nextNode.textContent;
                    itemsToRemove.push(index);
                }
            }
        });
        return items.filter(function (el, index) { return !itemsToRemove.includes(index); });
    };
    DomSnapshot.prototype._cleanupStyles = function (source) {
        var _this = this;
        var stylesToRemove = [];
        var styledItems = source.items.filter(function (e) { return e.styles.length; });
        // collect browser default styles
        this._forEach(source.HTML_STYLE, function (style) {
            if (styledItems.every(function (el) { return el.styles.includes(style); })) {
                if (source.BODY_STYLE.includes(style)) {
                    stylesToRemove.push(style);
                }
            }
        });
        // exclude collected stules
        source.HTML_STYLE = source.HTML_STYLE.filter(function (el) { return !stylesToRemove.includes(el); });
        source.BODY_STYLE = source.BODY_STYLE.filter(function (el) { return !stylesToRemove.includes(el); });
        this._forEach(source.items, function (item) {
            if (_this._isNotEmptyArray(item.styles)) {
                item.styles = item.styles.filter(function (el) { return !stylesToRemove.includes(el); });
            }
        });
        source.BODY_STYLE = source.BODY_STYLE.filter(function (el) { return !stylesToRemove.includes(el); });
    };
    DomSnapshot.prototype._getNameForNode = function (nodeName) {
        return this.NODE_NAMES_TO_REPLACE[nodeName] || nodeName;
    };
    DomSnapshot.prototype._getParentForNode = function (node) {
        var parent = node.parentNode
            ? node.parentNode.dataset[this._nodeSelectorDatasetName()]
            : 0;
        if (!this.isNotUndefined(parent)) {
            return 0;
        }
        return parseInt(parent);
    };
    DomSnapshot.prototype._getNodeTextContent = function (node) {
        return node.children ? "" : node.data;
    };
    DomSnapshot.prototype._arrayToObject = function (arr) {
        if (arr === void 0) { arr = []; }
        return arr.reduce(function (result, _a) {
            var key = _a[0], value = _a[1];
            result[key] = value;
            return result;
        }, {});
    };
    DomSnapshot.prototype.getSnapshotsDiff = function (s1, s2) {
        var _this = this;
        var firstState = this.setState({}, s1);
        var secondState = this.setState({}, s2);
        var firstStyles = firstState.items.filter(function (e) { return e.styles; }).map(function (el) {
            var item = _this._setNodeStyleFromStyleArray(el.styles, {
                style: {}
            }, firstState);
            return Object.assign({}, el, item);
        });
        var secondStyles = secondState.items.filter(function (e) { return e.styles; }).map(function (el) {
            var item = _this._setNodeStyleFromStyleArray(el.styles, {
                style: {}
            }, secondState);
            return Object.assign({}, el, item);
        });
        var diffArray = new Array(firstState.items.length).fill(null);
        return diffArray.map(function (_, index) {
            return {
                firstNode: firstStyles[index],
                secondNode: secondStyles[index],
                stylesDiff: _this._getAllKeysDiff(firstStyles[index].style, secondStyles[index].style),
                attributesDiff: _this._getAllKeysDiff(_this._arrayToObject(firstStyles[index].attributes), _this._arrayToObject(secondStyles[index].attributes))
            };
        });
    };
    DomSnapshot.prototype._serializeNode = function (styleNode, node, index, source) {
        var payload = this._formatStyle(styleNode, node, index, source);
        return payload;
    };
    DomSnapshot.prototype._formatStyle = function (styleNode, node, index, source) {
        var result = {
            styles: [],
            nodeName: this._getNameForNode(node.nodeName),
            index: index,
            attributes: [],
            nodeType: node.nodeType,
            parent: this._getParentForNode(node),
            isSVG: this._isSVG(node),
            textContent: this._getNodeTextContent(node)
        };
        var style = this._createStyleObject(styleNode);
        // if (result.isSVG && result.nodeName !== 'svg') {
        // result.styles = [];
        // } else {
        result.styles = this._styleObjectToOptimalStyleArray(style, result.parent, source);
        // }
        if (!this.restrictedNodeTypes.includes(node.nodeType)) {
            result.attributes = this._extractNodeAttributes(node);
        }
        return result;
    };
    DomSnapshot.prototype._getAllDomNodes = function (node) {
        var _this = this;
        var listOfNodes = [];
        var walk = this._getDocument().createTreeWalker(node, NodeFilter.SHOW_ALL, {
            acceptNode: function (node) {
                return !_this.NODE_NAMES_TO_IGNORE.includes(node.nodeName)
                    ? NodeFilter.FILTER_ACCEPT
                    : undefined;
            }
        });
        var n = null;
        while ((n = walk.nextNode())) {
            listOfNodes.push(n);
        }
        return listOfNodes;
    };
    DomSnapshot.prototype._fbSaveSnapshot = function (id, state) {
        this._fbSetSnapshot(id, state);
        this._fbAddToSnapshotList(id, { visible: true, meta: state.meta });
    };
    DomSnapshot.prototype.createSnapshot = function (rootNode) {
        if (rootNode === void 0) { rootNode = false; }
        var source = {};
        this._clearState(source);
        this._copyWorld(rootNode, source);
        this.addMeta("Date", Date.now(), source);
        this.addMeta("URL", window.location.href, source);
        this.addMeta("Browser", window.navigator.userAgent, source);
        var state = this._getState(source);
        console.log("state", state);
        return state;
    };
    DomSnapshot.prototype.saveSnapshot = function (customId, state) {
        if (customId === void 0) { customId = false; }
        var id = customId || Date.now();
        if (!state) {
            state = this.createSnapshot();
        }
        this._fbSaveSnapshot(id, state);
        console.log("snapshot ID is: " + id);
        return id;
    };
    DomSnapshot.prototype._setBodyAttributes = function (source) {
        var attributes = source.BODY_ATTRIBUTES;
        var body = this._getBodyNode();
        this._forEach(attributes, function (_a) {
            var name = _a[0], value = _a[1];
            body.setAttribute(name, value);
        });
        return this;
    };
    DomSnapshot.prototype.setBodyNode = function (node) {
        this._body = node;
    };
    DomSnapshot.prototype._setBodyStyle = function (source) {
        this._setNodeStyleFromStyleArray(source.BODY_STYLE, this._getBodyNode(), source);
        return this;
    };
    DomSnapshot.prototype.setHeadNode = function (node) {
        this._head = node;
    };
    DomSnapshot.prototype._setHTMLStyle = function (source) {
        var node = this._getHtmlNode();
        if (node) {
            this._setNodeStyleFromStyleArray(source.HTML_STYLE, node, source);
        }
        return this;
    };
    DomSnapshot.prototype.setHtmlNode = function (node) {
        this._html = node;
    };
    DomSnapshot.prototype._setNodeStyleFromStyleArray = function (styles, node, source) {
        var _this = this;
        this._forEach(styles, function (key) {
            var _a = _this._getFromOptimalValue(key, source), name = _a[0], value = _a[1];
            node.style[name] = value;
        });
        return node;
    };
    DomSnapshot.prototype.setMeta = function (meta) {
        if (typeof meta !== "object") {
            console.log("meta should be an object");
            return;
        }
        this.meta = Object.assign({}, meta);
        return this;
    };
    DomSnapshot.prototype.setState = function (target, state) {
        if (target === void 0) { target = this; }
        target.meta = this._cloneObject(state.meta) || this.meta || {};
        target.items = this._getArrayCopy(state.items) || [];
        target.CACHE_KEYS = this._getArrayCopy(state.CACHE_KEYS) || [];
        target.CACHE_VALUES = this._getArrayCopy(state.CACHE_VALUES) || [];
        target.BODY_STYLE = this._getArrayCopy(state.BODY_STYLE) || [];
        target.HTML_STYLE = this._getArrayCopy(state.HTML_STYLE) || [];
        target.BODY_ATTRIBUTES = this._getArrayCopy(state.BODY_ATTRIBUTES) || [];
        return target;
    };
    DomSnapshot.prototype.setStyleFromObject = function (node, styleObject) {
        this._forEach(Object.keys(styleObject), function (key) {
            node.style[key] = styleObject[key];
        });
        return this;
    };
    /// set rootNode for capturing
    DomSnapshot.prototype.setTarget = function (node) {
        this.setBodyNode(node);
        this.setHtmlNode(node.parentNode);
        this.setHeadNode(node.parentNode);
    };
    DomSnapshot.prototype._styleObjectToOptimalStyleArray = function (styleObject, parentIndex, source) {
        var _this = this;
        if (styleObject === void 0) { styleObject = {}; }
        var parentStyle = [];
        if (this.isNotUndefined(parentIndex)) {
            parentStyle = this.getParentStyleByIndex(parentIndex, source);
        }
        var styles = [];
        this._forEach(Object.keys(styleObject), function (el) {
            var styleKey = _this.getOptimalValue(el, styleObject[el], source);
            if (styleKey &&
                !(_this.INHERIT.includes(el) && parentStyle.includes(styleKey))) {
                styles.push(styleKey);
            }
        });
        return styles;
    };
    DomSnapshot.prototype.skipStyle = function (name, value) {
        return this._isDefaultStyle(name, value);
    };
    DomSnapshot.prototype._shouldTakeElement = function (node, nodeStyle) {
        if (this._isSVG(node)) {
            return true;
        }
        if (this.NODE_NAMES_TO_IGNORE.includes(node.nodeName)) {
            return false;
        }
        if (node.parentNode &&
            this.NODE_NAMES_TO_IGNORE.includes(node.parentNode.nodeName)) {
            return false;
        }
        if (node.parentNode && node.parentNode.dataset.ignored) {
            if (node.dataset) {
                node.dataset.ignored = true;
            }
            return false;
        }
        if (!this.restrictedNodeTypes.includes(node.nodeType)) {
            if (this.skipDisplayNone && node.style && nodeStyle.length) {
                if (nodeStyle.display === "none") {
                    node.dataset.ignored = true;
                    return false;
                }
            }
        }
        return true;
    };
    DomSnapshot.prototype.isNotUndefined = function (el) {
        return el !== void 0;
    };
    DomSnapshot.prototype._isNotEmptyArray = function (arr) {
        return arr && arr.length;
    };
    DomSnapshot.prototype._hasTextContent = function (node) {
        if (node === void 0) { node = { textContent: "" }; }
        return typeof node.textContent === "string" && node.textContent.length;
    };
    DomSnapshot.prototype._hasNodeInCache = function (nodeName) {
        return nodeName in this.nodeCache;
    };
    DomSnapshot.prototype._addNodeToCache = function (nodeName) {
        this.nodeCache[nodeName] = this._getDocument().createElement(nodeName);
    };
    DomSnapshot.prototype._getTextNode = function (textContent) {
        return this._getDocument().createTextNode(textContent);
    };
    DomSnapshot.prototype._getSVGNode = function (nodeName) {
        return this._getDocument().createElementNS(this._NAMESPACES.SVG, nodeName);
    };
    DomSnapshot.prototype._addTextContent = function (node, params) {
        if (this._hasTextContent(params)) {
            node.textContent = params.textContent;
        }
    };
    DomSnapshot.prototype._createNode = function (params, styles, source) {
        var _this = this;
        if (params === void 0) { params = {
            nodeType: "3",
            index: "3",
            textContent: "noop",
            attributes: [],
            styles: [],
            parent: null,
            isSVG: false,
            pseudoselectors: undefined,
            nodeName: "DIV"
        }; }
        var node = null;
        var nodeName = params.nodeName, textContent = params.textContent, nodeType = params.nodeType, isSVG = params.isSVG;
        if (this.restrictedNodeTypes.includes(parseInt(nodeType))) {
            node = this._getTextNode(textContent);
        }
        else if (isSVG) {
            node = this._getSVGNode(nodeName);
        }
        else {
            node = this._getNodeByName(nodeName);
            this._addTextContent(node, params);
        }
        if (this._isNotEmptyArray(params.attributes)) {
            try {
                this._forEach(params.attributes, function (_a) {
                    var name = _a[0], value = _a[1];
                    if (name) {
                        if (isSVG) {
                            node.setAttributeNS(_this._NAMESPACES.SVG, name, value);
                        }
                        else {
                            if (_this._isSafeAttribute(name)) {
                                node.setAttribute(name, value);
                            }
                        }
                    }
                });
            }
            catch (e) {
                console.log(e, node, name);
            }
        }
        // _addStyleNode
        if (this._isNotEmptyArray(params.styles)) {
            if (this._USE_INLINE_STYLES) {
                this._setNodeStyleFromStyleArray(params.styles, node, source);
            }
            else {
                styles.push(this._styleTextForNode(params.index, params.styles, "", source));
                if (params.pseudoselectors) {
                    styles.push(this._styleTextForNode(params.index, params.pseudoselectors.before, ":before", source));
                    styles.push(this._styleTextForNode(params.index, params.pseudoselectors.after, ":after", source));
                }
            }
        }
        if (node.dataset) {
            node.dataset.parent = params.parent;
        }
        return node;
    };
    DomSnapshot.prototype._styleTextForNode = function (index, styles, postfix, source) {
        if (postfix === void 0) { postfix = ""; }
        return "[" + this._nodeSelectorName() + "=\"" + this._nodeSelectorValue(index) + "\"]" + postfix + " { " + this._getNodeStyleText(styles, source) + " }";
    };
    DomSnapshot.prototype._nodeSelectorName = function () {
        return "data-" + this._nodeSelectorDatasetName();
    };
    DomSnapshot.prototype._nodeSelectorDatasetName = function () {
        if (this.uidPrefix !== null) {
            return "" + this.uidPrefix;
        }
        else {
            return "index";
        }
    };
    DomSnapshot.prototype._nodeSelectorValue = function (index) {
        return index;
    };
    DomSnapshot.prototype._insertNode = function (node, obj, fragment, nodesIndex) {
        var parentId = node.dataset ? node.dataset.parent : obj.parent;
        var selector = "[" + this._nodeSelectorName() + "=\"" + this._nodeSelectorValue(parentId) + "\"]";
        // || nodesIndex[parentId]
        var parent = fragment.querySelector(selector) || fragment;
        if (node === parent) {
            return;
        }
        parent.appendChild(node);
    };
    DomSnapshot.prototype._getValueOrEmptyString = function (obj, key) {
        if (key in obj) {
            return obj[key];
        }
        else {
            return "";
        }
    };
    DomSnapshot.prototype._getAllKeysDiff = function (first, second) {
        var _this = this;
        if (first === void 0) { first = {}; }
        if (second === void 0) { second = {}; }
        var fKeys = Object.keys(first);
        var sKeys = Object.keys(second);
        var allKeys = Array.from(new Set([].concat(fKeys, sKeys)));
        var diffs = {};
        allKeys.forEach(function (key) {
            var fValue = _this._getValueOrEmptyString(first, key);
            var sValue = _this._getValueOrEmptyString(second, key);
            if (fValue !== sValue) {
                diffs[key] = [fValue, sValue];
            }
        });
        return Object.keys(diffs).length ? diffs : false;
    };
    DomSnapshot.prototype._getEqualKeysDiff = function (first, second) {
        var diffs = {};
        Object.keys(first).map(function (key) {
            if (first[key] !== second[key]) {
                diffs[key] = [first[key], second[key]];
            }
        });
        return Object.keys(diffs).length ? diffs : false;
    };
    DomSnapshot.prototype._getStylesForPseudoSelectors = function (node, source) {
        var before = this._createStyleObject(this._getStyleForNode(node, ":before"));
        var after = this._createStyleObject(this._getStyleForNode(node, ":after"));
        var styleDiff = this._getEqualKeysDiff(before, after);
        if (styleDiff) {
            return {
                before: this._styleObjectToOptimalStyleArray(before, undefined, source),
                after: this._styleObjectToOptimalStyleArray(after, undefined, source),
                diff: styleDiff,
                index: null
            };
        }
        else {
            return false;
        }
    };
    DomSnapshot.prototype._getStyleForNode = function (element, pseudoselecor) {
        if (pseudoselecor === void 0) { pseudoselecor = null; }
        if (this.restrictedNodeTypes.includes(element.nodeType)) {
            return [];
        }
        var style = [];
        try {
            style = window.getComputedStyle(element, pseudoselecor);
        }
        catch (e) {
            console.log(e, element, element.nodeType);
        }
        return style;
    };
    DomSnapshot.prototype._getBodyNode = function () {
        //legacy hook
        if ("getBodyNode" in this && typeof this.getBodyNode === "function") {
            return this.getBodyNode();
        }
        return this._body || window.document.body;
    };
    DomSnapshot.prototype._getDocument = function () {
        return document;
    };
    DomSnapshot.prototype._getNodeStyleText = function (styles, source) {
        var _this = this;
        var style = [];
        this._forEach(styles, function (key) {
            var _a = _this._getFromOptimalValue(key, source), name = _a[0], value = _a[1];
            style.push(name + ":" + value);
        });
        return style.join(";");
    };
    DomSnapshot.prototype._getNodeByName = function (nodeName) {
        if (!this._hasNodeInCache(nodeName)) {
            this._addNodeToCache(nodeName);
        }
        return this._getNodeFromCache(nodeName);
    };
    DomSnapshot.prototype._getNodeFromCache = function (tag) {
        return this.nodeCache[tag].cloneNode(false);
    };
    DomSnapshot.prototype._getFromOptimalValue = function (value, source) {
        if (source === void 0) { source = this; }
        var _a = value.split("/"), keyIndex = _a[0], valueIndex = _a[1];
        return [source.CACHE_KEYS[keyIndex], source.CACHE_VALUES[valueIndex]];
    };
    DomSnapshot.prototype.getOptimalValue = function (key, value, source) {
        if (this.SKIP_STYLES[key] === value) {
            return false;
        }
        var keyIndex = source.CACHE_KEYS.indexOf(key);
        var keyValue = source.CACHE_VALUES.indexOf(value);
        if (keyIndex === -1) {
            source.CACHE_KEYS.push(key);
            keyIndex = source.CACHE_KEYS.length - 1;
        }
        if (keyValue === -1) {
            source.CACHE_VALUES.push(value);
            keyValue = source.CACHE_VALUES.length - 1;
        }
        return keyIndex + "/" + keyValue;
    };
    DomSnapshot.prototype._getState = function (target) {
        return {
            meta: this._cloneObject(target.meta),
            items: this._getArrayCopy(target.items),
            HTML_STYLE: this._getArrayCopy(target.HTML_STYLE),
            BODY_STYLE: this._getArrayCopy(target.BODY_STYLE),
            CACHE_KEYS: this._getArrayCopy(target.CACHE_KEYS),
            CACHE_VALUES: this._getArrayCopy(target.CACHE_VALUES),
            BODY_ATTRIBUTES: this._getArrayCopy(target.BODY_ATTRIBUTES)
        };
    };
    DomSnapshot.prototype.getParentStyleByIndex = function (index, source) {
        if (typeof index !== "number") {
            return source.BODY_STYLE || [];
        }
        else {
            for (var i = 0; i < index; i++) {
                if (source.items[i] && source.items[i].index === index) {
                    return source.items[i].style || [];
                }
            }
            return [];
        }
    };
    return DomSnapshot;
}());
if (typeof window.AUTOSTART === "boolean" && window.AUTOSTART === true) {
    new DomSnapshot();
}
else {
    window.snapshoter = new DomSnapshot();
}

},{"./config/firebase-default-config":1,"./constants/dom-namespaces":2,"./constants/dom-pseudoselectors":3,"./constants/escaped-attributes":4,"./constants/inherit-style-attributes":5,"./constants/node-names-to-ignore":6,"./constants/node-names-to-replace":7,"./constants/skipped-style-attributes":8,"./utils/collect-meta":10,"./utils/is-svg":11}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    return {
        userAgent: navigator.userAgent,
        hostname: window.location.hostname,
        protocol: window.location.protocol,
        url: window.location.href,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        screenAvailWidth: window.screen.availWidth,
        screenAvailHeight: window.screen.availHeight,
        timestamp: Date.now()
    };
}
exports.default = default_1;

},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(element) {
    // https://www.w3.org/TR/SVG/propidx.html
    var isSVGNode = element.nodeName.toLowerCase() === 'svg';
    if (isSVGNode) {
        element.dataset.svg = true;
        return true;
    }
    if (!element.parentNode || !element.parentNode.dataset) {
        return false;
    }
    var svgResult = element.parentNode.dataset.svg;
    if (svgResult && element.dataset) {
        element.dataset.svg = true;
    }
    if (svgResult === 'true') {
        svgResult = true;
    }
    return svgResult || false;
}
exports.default = default_1;

},{}]},{},[9])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUvbGlmZWFydC9yZXBvc2l0b3JpZXMvZG9tLXNuYXBzaG90L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjb25maWcvZmlyZWJhc2UtZGVmYXVsdC1jb25maWcuanMiLCJjb25zdGFudHMvZG9tLW5hbWVzcGFjZXMuanMiLCJjb25zdGFudHMvZG9tLXBzZXVkb3NlbGVjdG9ycy5qcyIsImNvbnN0YW50cy9lc2NhcGVkLWF0dHJpYnV0ZXMuanMiLCJjb25zdGFudHMvaW5oZXJpdC1zdHlsZS1hdHRyaWJ1dGVzLmpzIiwiY29uc3RhbnRzL25vZGUtbmFtZXMtdG8taWdub3JlLmpzIiwiY29uc3RhbnRzL25vZGUtbmFtZXMtdG8tcmVwbGFjZS5qcyIsImNvbnN0YW50cy9za2lwcGVkLXN0eWxlLWF0dHJpYnV0ZXMuanMiLCJpbmRleC5qcyIsInV0aWxzL2NvbGxlY3QtbWV0YS5qcyIsInV0aWxzL2lzLXN2Zy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3IrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEZJUkVCQVNFX0RFRkFVTFRfQ09ORklHID0ge1xuICAgIGFwaUtleTogJ0FJemFTeUE4NHZhZ19TMFFTTzdqMUVmZjR2WkpFamRMYzZ3UHgwTScsXG4gICAgYXV0aERvbWFpbjogJ2RvbS1zbmFwc2hvdC5maXJlYmFzZWFwcC5jb20nLFxuICAgIGRhdGFiYXNlVVJMOiAnaHR0cHM6Ly9kb20tc25hcHNob3QuZmlyZWJhc2Vpby5jb20nLFxuICAgIHByb2plY3RJZDogJ2RvbS1zbmFwc2hvdCcsXG4gICAgc3RvcmFnZUJ1Y2tldDogJ2RvbS1zbmFwc2hvdC5hcHBzcG90LmNvbScsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6ICc1NzgwMDkzNTQxNzEnXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gRklSRUJBU0VfREVGQVVMVF9DT05GSUc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1maXJlYmFzZS1kZWZhdWx0LWNvbmZpZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBET01fTkFNRVNQQUNFUyA9IHtcbiAgICBTVkc6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zydcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBET01fTkFNRVNQQUNFUztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRvbS1uYW1lc3BhY2VzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFBTRVVET1NFTEVDVE9SUyA9IFtcbiAgICAnOmFmdGVyJywgJzpiZWZvcmUnLCAnOmZpcnN0LWxpbmUnLCAnOmZpcnN0LWxldHRlcicsICc6c2VsZWN0aW9uJ1xuXTtcbmV4cG9ydHMuZGVmYXVsdCA9IFBTRVVET1NFTEVDVE9SUztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRvbS1wc2V1ZG9zZWxlY3RvcnMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRVNDQVBFRF9BVFRSSUJVVEVTID0gW1xuICAgIC8vYm9keVxuICAgICdvbmFmdGVycHJpbnQnLFxuICAgICdvbmJlZm9yZXByaW50JyxcbiAgICAnb25iZWZvcmV1bmxvYWQnLFxuICAgICdvbmVycm9yJyxcbiAgICAnb25oYXNoY2hhbmdlJyxcbiAgICAnb25sb2FkJyxcbiAgICAnb25tZXNzYWdlJyxcbiAgICAnb25vZmZsaW5lJyxcbiAgICAnb25vbmxpbmUnLFxuICAgICdvbnBhZ2VoaWRlJyxcbiAgICAnb25wYWdlc2hvdycsXG4gICAgJ29ucG9wc3RhdGUnLFxuICAgICdvbnJlc2l6ZScsXG4gICAgJ29uc3RvcmFnZScsXG4gICAgJ29udW5sb2FkJyxcbiAgICAvL2Zvcm1zXG4gICAgJ29uYmx1cicsXG4gICAgJ29uY2hhbmdlJyxcbiAgICAnb25jb250ZXh0bWVudScsXG4gICAgJ29uZm9jdXMnLFxuICAgICdvbmlucHV0JyxcbiAgICAnb25pbnZhbGlkJyxcbiAgICAnb25yZXNldCcsXG4gICAgJ29uc2VhcmNoJyxcbiAgICAnb25zZWxlY3QnLFxuICAgICdvbnN1Ym1pdCcsXG4gICAgLy9rZXlib2FyZFxuICAgICdvbmtleWRvd24nLFxuICAgICdvbmtleXByZXNzJyxcbiAgICAnb25rZXl1cCcsXG4gICAgLy9tb3VzZVxuICAgICdvbmNsaWNrJyxcbiAgICAnb25kYmxjbGljaycsXG4gICAgJ29ubW91c2Vkb3duJyxcbiAgICAnb25tb3VzZW1vdmUnLFxuICAgICdvbm1vdXNlb3V0JyxcbiAgICAnb25tb3VzZW92ZXInLFxuICAgICdvbm1vdXNldXAnLFxuICAgICdvbm1vdXNld2hlZWwnLFxuICAgICdvbndoZWVsJyxcbiAgICAvL0RyYWcgRXZlbnRzXG4gICAgJ29uZHJhZycsXG4gICAgJ29uZHJhZ2VuZCcsXG4gICAgJ29uZHJhZ2VudGVyJyxcbiAgICAnb25kcmFnbGVhdmUnLFxuICAgICdvbmRyYWdvdmVyJyxcbiAgICAnb25kcmFnc3RhcnQnLFxuICAgICdvbmRyb3AnLFxuICAgICdvbnNjcm9sbCcsXG4gICAgLy9DbGlwYm9hcmQgRXZlbnRzXG4gICAgJ29uY29weScsXG4gICAgJ29uY3V0JyxcbiAgICAnb25wYXN0ZScsXG4gICAgLy8gTWVkaWEgRXZlbnRzXG4gICAgJ29uYWJvcnQnLFxuICAgICdvbmNhbnBsYXknLFxuICAgICdvbmNhbnBsYXl0aHJvdWdoJyxcbiAgICAnb25jdWVjaGFuZ2UnLFxuICAgICdvbmR1cmF0aW9uY2hhbmdlJyxcbiAgICAnb25lbXB0aWVkJyxcbiAgICAnb25lbmRlZCcsXG4gICAgJ29uZXJyb3InLFxuICAgICdvbmxvYWRlZGRhdGEnLFxuICAgICdvbmxvYWRlZG1ldGFkYXRhJyxcbiAgICAnb25sb2Fkc3RhcnQnLFxuICAgICdvbnBhdXNlJyxcbiAgICAnb25wbGF5JyxcbiAgICAnb25wbGF5aW5nJyxcbiAgICAnb25wcm9ncmVzcycsXG4gICAgJ29ucmF0ZWNoYW5nZScsXG4gICAgJ29uc2Vla2VkJyxcbiAgICAnb25zZWVraW5nJyxcbiAgICAnb25zdGFsbGVkJyxcbiAgICAnb25zdXNwZW5kJyxcbiAgICAnb250aW1ldXBkYXRlJyxcbiAgICAnb252b2x1bWVjaGFuZ2UnLFxuICAgICdvbndhaXRpbmcnLFxuICAgIC8vIE1pc2MgRXZlbnRzXG4gICAgJ29udG9nZ2xlJ1xuXTtcbmV4cG9ydHMuZGVmYXVsdCA9IEVTQ0FQRURfQVRUUklCVVRFUztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVzY2FwZWQtYXR0cmlidXRlcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBJTkhFUklUX1NUWUxFX0FUVFJJQlVURVMgPSBbXG4gICAgJ2F6aW11dGgnLCAnYm9yZGVyLWNvbGxhcHNlJywgJ2JvcmRlci1zcGFjaW5nJywgJ2NhcHRpb24tc2lkZScsXG4gICAgJ2NvbG9yJywgJ2N1cnNvcicsICdkaXJlY3Rpb24nLCAnZWxldmF0aW9uJywgJ2VtcHR5LWNlbGxzJyxcbiAgICAnZm9udC1mYW1pbHknLCAnZm9udC1zaXplJywgJ2ZvbnQtc3R5bGUnLCAnZm9udC12YXJpYW50JywgJ2ZvbnQtd2VpZ2h0JyxcbiAgICAnZm9udCcsICdsZXR0ZXItc3BhY2luZycsICdsaW5lLWhlaWdodCcsICdsaXN0LXN0eWxlLWltYWdlJywgJ2xpc3Qtc3R5bGUtcG9zaXRpb24nLFxuICAgICdsaXN0LXN0eWxlLXR5cGUnLCAnbGlzdC1zdHlsZScsICdvcnBoYW5zJywgJ3BpdGNoLXJhbmdlJywgJ3BpdGNoJywgJ3F1b3RlcycsICdyaWNobmVzcycsXG4gICAgJ3NwZWFrLWhlYWRlcicsICdzcGVhay1udW1lcmFsJywgJ3NwZWFrLXB1bmN0dWF0aW9uJywgJ3NwZWFrJyxcbiAgICAnc3BlZWNoLXJhdGUnLCAnc3RyZXNzJywgJ3RleHQtYWxpZ24nLCAndGV4dC1pbmRlbnQnLCAndGV4dC10cmFuc2Zvcm0nLFxuICAgICd2aXNpYmlsaXR5JywgJ3ZvaWNlLWZhbWlseScsICd2b2x1bWUnLCAnd2hpdGUtc3BhY2UnLCAnd2lkb3dzJywgJ3dvcmQtc3BhY2luZydcbl07XG5leHBvcnRzLmRlZmF1bHQgPSBJTkhFUklUX1NUWUxFX0FUVFJJQlVURVM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmhlcml0LXN0eWxlLWF0dHJpYnV0ZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgTk9ERV9OQU1FU19UT19JR05PUkUgPSBbXG4gICAgJ05PU0NSSVBUJywgJ1NDUklQVCcsICdTVFlMRScsICcjY29tbWVudCcsICcjZG9jdW1lbnQnXG5dO1xuZXhwb3J0cy5kZWZhdWx0ID0gTk9ERV9OQU1FU19UT19JR05PUkU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub2RlLW5hbWVzLXRvLWlnbm9yZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBOT0RFX05BTUVTX1RPX1JFUExBQ0UgPSB7XG4gICAgJ0lGUkFNRSc6ICdESVYnXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gTk9ERV9OQU1FU19UT19SRVBMQUNFO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9kZS1uYW1lcy10by1yZXBsYWNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFNLSVBQRURfU1RZTEVfQVRUUklCVVRFUyA9IHtcbiAgICAnYWxpZ24taXRlbXMnOiAnbm9ybWFsJyxcbiAgICAnYWxpZ24tc2VsZic6ICdub3JtYWwnLFxuICAgICdjbGlwLXBhdGgnOiAnbm9uZScsXG4gICAgJ2ZsZXgtYmFzaXMnOiAnYXV0bycsXG4gICAgJ2ZsZXgtZ3Jvdyc6ICcwJyxcbiAgICAnZmxleC1zaHJpbmsnOiAnMScsXG4gICAgJ2p1c3RpZnktY29udGVudCc6ICdub3JtYWwnLFxuICAgICd1c2VyLXNlbGVjdCc6ICd0ZXh0JyxcbiAgICAnYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyc6ICcwcHgnLFxuICAgICdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cyc6ICcwcHgnLFxuICAgICdib3JkZXItdG9wLXJpZ2h0LXJhZGl1cyc6ICcwcHgnLFxuICAgICdib3JkZXItdG9wLWxlZnQtcmFkaXVzJzogJzBweCcsXG4gICAgJ2N1cnNvcic6ICdhdXRvJyxcbiAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICcwJSAwJScsXG4gICAgJ2JhY2tncm91bmQtc2l6ZSc6ICdhdXRvJyxcbiAgICAnZGlyZWN0aW9uJzogJ2x0cicsXG4gICAgLy8gXCJtYXJnaW4tYm90dG9tXCI6IFwiMHB4XCIsXG4gICAgLy8gXCJtYXJnaW4tbGVmdFwiOiBcIjBweFwiLFxuICAgIC8vIFwibWFyZ2luLXJpZ2h0XCI6IFwiMHB4XCIsXG4gICAgLy8gXCJtYXJnaW4tdG9wXCI6IFwiMHB4XCIsXG4gICAgJ21heC1oZWlnaHQnOiAnbm9uZScsXG4gICAgJ21heC13aWR0aCc6ICdub25lJyxcbiAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAvLyBcInBhZGRpbmctYm90dG9tXCI6IFwiMHB4XCIsXG4gICAgLy8gXCJwYWRkaW5nLWxlZnRcIjogXCIwcHhcIixcbiAgICAvLyBcInBhZGRpbmctcmlnaHRcIjogXCIwcHhcIixcbiAgICAvLyBcInBhZGRpbmctdG9wXCI6IFwiMHB4XCIsXG4gICAgJ3JpZ2h0JzogJ2F1dG8nLFxuICAgICdzcGVhayc6ICdub3JtYWwnLFxuICAgICd0b3AnOiAnYXV0bycsXG4gICAgJ3RyYW5zaXRpb24tZGVsYXknOiAnMHMnLFxuICAgICd0cmFuc2l0aW9uLWR1cmF0aW9uJzogJzBzJyxcbiAgICAndHJhbnNpdGlvbi1wcm9wZXJ0eSc6ICdhbGwnLFxuICAgICd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbic6ICdlYXNlJyxcbiAgICAndmVydGljYWwtYWxpZ24nOiAnYmFzZWxpbmUnLFxuICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICd3aGl0ZS1zcGFjZSc6ICdub3JtYWwnLFxuICAgICd3aWRvd3MnOiAnMicsXG4gICAgJ3dvcmQtYnJlYWsnOiAnbm9ybWFsJyxcbiAgICAnei1pbmRleCc6ICdhdXRvJyxcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBTS0lQUEVEX1NUWUxFX0FUVFJJQlVURVM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1za2lwcGVkLXN0eWxlLWF0dHJpYnV0ZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZXNjYXBlZF9hdHRyaWJ1dGVzXzEgPSByZXF1aXJlKFwiLi9jb25zdGFudHMvZXNjYXBlZC1hdHRyaWJ1dGVzXCIpO1xudmFyIGZpcmViYXNlX2RlZmF1bHRfY29uZmlnXzEgPSByZXF1aXJlKFwiLi9jb25maWcvZmlyZWJhc2UtZGVmYXVsdC1jb25maWdcIik7XG52YXIgaW5oZXJpdF9zdHlsZV9hdHRyaWJ1dGVzXzEgPSByZXF1aXJlKFwiLi9jb25zdGFudHMvaW5oZXJpdC1zdHlsZS1hdHRyaWJ1dGVzXCIpO1xudmFyIHNraXBwZWRfc3R5bGVfYXR0cmlidXRlc18xID0gcmVxdWlyZShcIi4vY29uc3RhbnRzL3NraXBwZWQtc3R5bGUtYXR0cmlidXRlc1wiKTtcbnZhciBkb21fbmFtZXNwYWNlc18xID0gcmVxdWlyZShcIi4vY29uc3RhbnRzL2RvbS1uYW1lc3BhY2VzXCIpO1xudmFyIG5vZGVfbmFtZXNfdG9faWdub3JlXzEgPSByZXF1aXJlKFwiLi9jb25zdGFudHMvbm9kZS1uYW1lcy10by1pZ25vcmVcIik7XG52YXIgbm9kZV9uYW1lc190b19yZXBsYWNlXzEgPSByZXF1aXJlKFwiLi9jb25zdGFudHMvbm9kZS1uYW1lcy10by1yZXBsYWNlXCIpO1xudmFyIGRvbV9wc2V1ZG9zZWxlY3RvcnNfMSA9IHJlcXVpcmUoXCIuL2NvbnN0YW50cy9kb20tcHNldWRvc2VsZWN0b3JzXCIpO1xudmFyIGNvbGxlY3RfbWV0YV8xID0gcmVxdWlyZShcIi4vdXRpbHMvY29sbGVjdC1tZXRhXCIpO1xudmFyIGlzX3N2Z18xID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtc3ZnXCIpO1xudmFyIERvbVNuYXBzaG90ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qXG4gICAgICAqL1xuICAgIGZ1bmN0aW9uIERvbVNuYXBzaG90KGNvbmZpZywgZmJDb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIGlubGluZVN0eWxlczogZmFsc2UsXG4gICAgICAgICAgICB2YWN1dW06IGZhbHNlLFxuICAgICAgICAgICAgc3R5bGVzQ2xlYW51cDogdHJ1ZSxcbiAgICAgICAgICAgIGNhcHR1cmVQc2V1ZG9zZWxlY3RvcnM6IHRydWUsXG4gICAgICAgICAgICBzYWZlQXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgQk9EWV9TVFlMRTogW10sXG4gICAgICAgICAgICAgICAgQ0FDSEVfS0VZUzogW10sXG4gICAgICAgICAgICAgICAgQ0FDSEVfVkFMVUVTOiBbXSxcbiAgICAgICAgICAgICAgICBIVE1MX1NUWUxFOiBbXSxcbiAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICAgICAgICAvLyB1c2VkIHRvIHBhdGNoIGltYWdlIGxpbmtzIG9uIHNuYXBzaG90IHJlc3RvcmUgKG1heSBiZSByZXBsYWNlZCB0byBiYXNlNjQgaW5saW5lKVxuICAgICAgICAgICAgICAgICAgICBwcm90b2NvbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgaG9zdG5hbWU6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07IH1cbiAgICAgICAgaWYgKGZiQ29uZmlnID09PSB2b2lkIDApIHsgZmJDb25maWcgPSBmYWxzZTsgfVxuICAgICAgICB0aGlzLnVpZFByZWZpeCA9IG51bGw7XG4gICAgICAgIC8vIHRoaXMgbm9kZXMgbm90IGdvaW5nIHRvIHNuYXBzaG90XG4gICAgICAgIHRoaXMuTk9ERV9OQU1FU19UT19JR05PUkUgPSBub2RlX25hbWVzX3RvX2lnbm9yZV8xLmRlZmF1bHQ7XG4gICAgICAgIC8vIGlmcmFtZXMgbm9kZXMgd2lsbCBiZSByZXBsYWNlZCB0byBkaXYnc1xuICAgICAgICB0aGlzLk5PREVfTkFNRVNfVE9fUkVQTEFDRSA9IG5vZGVfbmFtZXNfdG9fcmVwbGFjZV8xLmRlZmF1bHQ7XG4gICAgICAgIC8vIHBzZXVkb3NlbGVjdG9ycyB0byBjYXB0dXJlXG4gICAgICAgIHRoaXMuUFNFVURPU0VMRUNUT1JTID0gZG9tX3BzZXVkb3NlbGVjdG9yc18xLmRlZmF1bHQ7XG4gICAgICAgIC8vIGluaGVyaXQgc3R5bGVzIChiYXNlZCBvbiBjc3MgMi4xKTtcbiAgICAgICAgdGhpcy5JTkhFUklUID0gaW5oZXJpdF9zdHlsZV9hdHRyaWJ1dGVzXzEuZGVmYXVsdDtcbiAgICAgICAgLy8gc3R5bGVzIHRvIHNraXAgZnJvbSBjYXB0dXJpbmdcbiAgICAgICAgdGhpcy5TS0lQX1NUWUxFUyA9IHNraXBwZWRfc3R5bGVfYXR0cmlidXRlc18xLmRlZmF1bHQ7XG4gICAgICAgIC8vaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9UQUdzL3JlZl9ldmVudGF0dHJpYnV0ZXMuYXNwXG4gICAgICAgIHRoaXMuRVNDQVBFRF9BVFRSSUJVVEVTID0gZXNjYXBlZF9hdHRyaWJ1dGVzXzEuZGVmYXVsdDtcbiAgICAgICAgaWYgKCFjb25maWcuc3RhdGUpIHtcbiAgICAgICAgICAgIGNvbmZpZy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICBCT0RZX1NUWUxFOiBbXSxcbiAgICAgICAgICAgICAgICBDQUNIRV9LRVlTOiBbXSxcbiAgICAgICAgICAgICAgICBDQUNIRV9WQUxVRVM6IFtdLFxuICAgICAgICAgICAgICAgIEhUTUxfU1RZTEU6IFtdLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHByb3RvY29sOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBob3N0bmFtZTogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW5pdCBzdGF0ZVxuICAgICAgICB0aGlzLkJPRFlfU1RZTEUgPSBjb25maWcuc3RhdGUuQk9EWV9TVFlMRSB8fCBbXTtcbiAgICAgICAgdGhpcy5DQUNIRV9LRVlTID0gY29uZmlnLnN0YXRlLkNBQ0hFX0tFWVMgfHwgW107XG4gICAgICAgIHRoaXMuQ0FDSEVfVkFMVUVTID0gY29uZmlnLnN0YXRlLkNBQ0hFX1ZBTFVFUyB8fCBbXTtcbiAgICAgICAgdGhpcy5CT0RZX0FUVFJJQlVURVMgPSBjb25maWcuc3RhdGUuQ0FDSEVfVkFMVUVTIHx8IFtdO1xuICAgICAgICB0aGlzLkhUTUxfU1RZTEUgPSBjb25maWcuc3RhdGUuSFRNTF9TVFlMRSB8fCBbXTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IGNvbmZpZy5zdGF0ZS5pdGVtcyB8fCBbXTtcbiAgICAgICAgdGhpcy5tZXRhID0gY29uZmlnLnN0YXRlLm1ldGEgfHwge307XG4gICAgICAgIHRoaXMuX1VTRV9WQUNVVU0gPSBjb25maWcudmFjdXVtIHx8IGZhbHNlO1xuICAgICAgICAvLyBhcHBlbmQgc3R5bGVzIHRvIGRvbSBub2RlIGluc3RlYWQgb2Ygc3R5bGUgbm9kZVxuICAgICAgICB0aGlzLl9VU0VfSU5MSU5FX1NUWUxFUyA9IGNvbmZpZy5pbmxpbmVTdHlsZXMgfHwgZmFsc2U7XG4gICAgICAgIHRoaXMuX1VTRV9TVFlMRVNfQ0xFQU5VUCA9IGNvbmZpZy5zdHlsZXNDbGVhbnVwIHx8IHRydWU7XG4gICAgICAgIHRoaXMuX1VTRV9QU0VVRE9TRUxFQ1RPUlMgPSBjb25maWcuY2FwdHVyZVBzZXVkb3NlbGVjdG9ycyB8fCB0cnVlO1xuICAgICAgICB0aGlzLl9VU0VfU0FGRV9BVFRSSUJVVEVTID0gY29uZmlnLnNhZmVBdHRyaWJ1dGVzIHx8IHRydWU7XG4gICAgICAgIHRoaXMuX05BTUVTUEFDRVMgPSBkb21fbmFtZXNwYWNlc18xLmRlZmF1bHQ7XG4gICAgICAgIC8vIG5vZGUgY2FjaGUgKGZvciBub2RlIGNyZWF0aW9uKVxuICAgICAgICB0aGlzLm5vZGVDYWNoZSA9IHt9O1xuICAgICAgICAvLyByb290cyBpbml0XG4gICAgICAgIHRoaXMuX2h0bWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faGVhZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9ib2R5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNMb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gc2tpcCB0aGlzIG5vZGUgdHlwZXNcbiAgICAgICAgdGhpcy5yZXN0cmljdGVkTm9kZVR5cGVzID0gWzMsIDhdO1xuICAgICAgICAvLyBza2lwIGhpZGRlbiBub2Rlc1xuICAgICAgICB0aGlzLnNraXBEaXNwbGF5Tm9uZSA9IHRydWU7XG4gICAgICAgIC8vIGZpcmViYXNlIGNvbmZpZyB3aXRoIGRlZmF1bHRzXG4gICAgICAgIHRoaXMuZmJDb25maWcgPSBmYkNvbmZpZyB8fCBmaXJlYmFzZV9kZWZhdWx0X2NvbmZpZ18xLmRlZmF1bHQ7XG4gICAgICAgIHRoaXMuaW50RmlyZWJhc2UodGhpcy5mYkNvbmZpZyk7XG4gICAgfVxuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5fbm9ybWFsaXplQXR0cmlidXRlTmFtZSA9IGZ1bmN0aW9uIChhdHRyTmFtZSkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKGF0dHJOYW1lKVxuICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgfTtcbiAgICBEb21TbmFwc2hvdC5wcm90b3R5cGUuX2lzU2FmZUF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChhdHRyTmFtZSkge1xuICAgICAgICBpZiAodGhpcy5fVVNFX1NBRkVfQVRUUklCVVRFUyAmJlxuICAgICAgICAgICAgdGhpcy5FU0NBUEVEX0FUVFJJQlVURVMuaW5jbHVkZXModGhpcy5fbm9ybWFsaXplQXR0cmlidXRlTmFtZShhdHRyTmFtZSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICghYXR0ck5hbWUuaW5jbHVkZXMoXCJuZy1cIikgJiZcbiAgICAgICAgICAgICFhdHRyTmFtZS5pbmNsdWRlcygnXCInKSAmJlxuICAgICAgICAgICAgIWF0dHJOYW1lLmluY2x1ZGVzKFwic3R5bGVcIikpO1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLl9leHRyYWN0Tm9kZUF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcFxuICAgICAgICAgICAgLmNhbGwobm9kZS5hdHRyaWJ1dGVzLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBbZWwubm9kZU5hbWUsIF90aGlzLl9wYXRjaEF0dHJpYnV0ZShlbC5ub2RlTmFtZSwgZWwubm9kZVZhbHVlKV07XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIGF0dHJOYW1lID0gX2FbMF07XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuX2lzU2FmZUF0dHJpYnV0ZShhdHRyTmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLnJlc2V0VGFyZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNldEJvZHlOb2RlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zZXRIdG1sTm9kZShmYWxzZSk7XG4gICAgICAgIHRoaXMuc2V0SGVhZE5vZGUoZmFsc2UpO1xuICAgIH07XG4gICAgLy8vIHNldCByb290Tm9kZSBmb3IgcmVzdG9yaW5nXG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLnJlc3RvcmVUbyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHRoaXMuc2V0Qm9keU5vZGUobm9kZSk7XG4gICAgfTtcbiAgICBEb21TbmFwc2hvdC5wcm90b3R5cGUuX2NvbGxlY3RNZXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY29sbGVjdF9tZXRhXzEuZGVmYXVsdCgpO1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLl9wYXRjaEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICBpZiAoW1wic3JjXCIsIFwiaHJlZlwiXS5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgICAgICAgdmFyIGZpcnN0Q2hhciA9IFN0cmluZyh2YWx1ZSkuY2hhckF0KDApO1xuICAgICAgICAgICAgdmFyIHNlY29uZENoYXIgPSBTdHJpbmcodmFsdWUpLmNoYXJBdCgxKTtcbiAgICAgICAgICAgIHZhciBoYXNIYXNoID0gc2Vjb25kQ2hhciA9PT0gXCIjXCIgfHwgZmlyc3RDaGFyID09PSBcIiNcIjtcbiAgICAgICAgICAgIHZhciBoYXNUd29TbGFzaGVzID0gZmlyc3RDaGFyID09PSBzZWNvbmRDaGFyICYmIGZpcnN0Q2hhciA9PT0gXCIvXCI7XG4gICAgICAgICAgICB2YXIgaGFzUGF0aCA9IHNlY29uZENoYXIgPT09IFwiL1wiO1xuICAgICAgICAgICAgaWYgKCFoYXNUd29TbGFzaGVzICYmIChoYXNQYXRoIHx8IGhhc0hhc2gpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWV0YS5ob3N0bmFtZSAmJiB0aGlzLm1ldGEucHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWV0YS5wcm90b2NvbCArIFwiLy9cIiArIHRoaXMubWV0YS5ob3N0bmFtZSArIHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBEb21TbmFwc2hvdC5wcm90b3R5cGUuX2lzU1ZHID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGlzX3N2Z18xLmRlZmF1bHQoZWxlbWVudCk7XG4gICAgfTtcbiAgICBEb21TbmFwc2hvdC5wcm90b3R5cGUuX2dldEJvZHlBdHRyaWJ1dGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXh0cmFjdE5vZGVBdHRyaWJ1dGVzKHRoaXMuX2dldEJvZHlOb2RlKCkpO1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLl9nZXRCb2R5U3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZU9iamVjdCh0aGlzLl9nZXRTdHlsZUZvck5vZGUodGhpcy5fZ2V0Qm9keU5vZGUoKSkpO1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLl9nZXRIVE1MU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRCb2R5UGFyZW50U3R5bGUoKTtcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5fZ2V0Qm9keVBhcmVudFN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYm9keSA9IHRoaXMuX2dldEJvZHlOb2RlKCk7XG4gICAgICAgIHZhciBzdHlsZU5vZGUgPSBbXTtcbiAgICAgICAgaWYgKGJvZHkucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgc3R5bGVOb2RlID0gdGhpcy5fZ2V0U3R5bGVGb3JOb2RlKGJvZHkucGFyZW50Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN0eWxlT2JqZWN0KHN0eWxlTm9kZSk7XG4gICAgICAgIC8vIGdldCBvcHRpbWFsIHN0eWxlLCBzYXZlIGFzIHNwZWNpYWwgbm9kZVxuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLmFkZE1ldGEgPSBmdW5jdGlvbiAoa2V5T3JPYmplY3QsIHZhbHVlLCB0YXJnZXQpIHtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gdm9pZCAwKSB7IHRhcmdldCA9IHRoaXM7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBrZXlPck9iamVjdCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgdGFyZ2V0Lm1ldGEgPSBPYmplY3QuYXNzaWduKHRhcmdldC5tZXRhLCBrZXlPck9iamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQubWV0YVtrZXlPck9iamVjdF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5nZXRNZXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5tZXRhKTtcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5jbGVhck1ldGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubWV0YSA9IHt9O1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLl9hZGRGYlNjcmlwdCA9IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QsIGNvbmZpZykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgaGVhZCA9IHRoaXMuX2dldERvY3VtZW50KCkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuICAgICAgICB2YXIgc2NyaXB0ID0gdGhpcy5fZ2V0RG9jdW1lbnQoKS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICBzY3JpcHQudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3aW5kb3cuZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xuICAgICAgICAgICAgX3RoaXMuZmlyZWJhc2UgPSB3aW5kb3cuZmlyZWJhc2U7XG4gICAgICAgICAgICBfdGhpcy5pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKF90aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9O1xuICAgICAgICBzY3JpcHQuc3JjID0gXCJodHRwczovL3d3dy5nc3RhdGljLmNvbS9maXJlYmFzZWpzLzQuMi4wL2ZpcmViYXNlLmpzXCI7XG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5pbnRGaXJlYmFzZSA9IGZ1bmN0aW9uIChmYkNvbmZpZykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLl9sb2FkZWQgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5maXJlYmFzZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIF90aGlzLmZpcmViYXNlID0gd2luZG93LmZpcmViYXNlO1xuICAgICAgICAgICAgICAgIF90aGlzLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShfdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5fYWRkRmJTY3JpcHQocmVzb2x2ZSwgcmVqZWN0LCBmYkNvbmZpZyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVkO1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLmxvYWRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlZDtcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5fZ2V0SGVhZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9oZWFkIHx8XG4gICAgICAgICAgICB0aGlzLl9nZXRCb2R5Tm9kZSgpLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcImhlYWRcIikgfHxcbiAgICAgICAgICAgIHRoaXMuX2dldERvY3VtZW50KCkuaGVhZCB8fFxuICAgICAgICAgICAgdGhpcy5fZ2V0RG9jdW1lbnQoKS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0pO1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLl9jbGVhbkhlYWROb2RlRnJvbVN0eWxlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhlYWQgPSB0aGlzLl9nZXRIZWFkKCk7XG4gICAgICAgIHZhciBzdHlsZXNUb1JlbW92ZSA9IGhlYWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdHlsZVwiKTtcbiAgICAgICAgaWYgKHN0eWxlc1RvUmVtb3ZlLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNUb1JlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGhlYWQucmVtb3ZlQ2hpbGQoc3R5bGVzVG9SZW1vdmVbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBzdHlsZUxpbmtzVG9SZW1vdmUgPSBoZWFkLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO1xuICAgICAgICBpZiAoc3R5bGVMaW5rc1RvUmVtb3ZlLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZUxpbmtzVG9SZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBoZWFkLnJlbW92ZUNoaWxkKHN0eWxlTGlua3NUb1JlbW92ZVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5fYWRkU3R5bGVOb2RlID0gZnVuY3Rpb24gKGNzcywgdGFyZ2V0KSB7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IHZvaWQgMCkgeyB0YXJnZXQgPSBmYWxzZTsgfVxuICAgICAgICB2YXIgc3R5bGUgPSB0aGlzLl9nZXREb2N1bWVudCgpLmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgICAgdmFyIGhlYWQgPSB0YXJnZXQgfHwgdGhpcy5fZ2V0SGVhZCgpO1xuICAgICAgICBzdHlsZS50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuICAgICAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQodGhpcy5fZ2V0RG9jdW1lbnQoKS5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICAgICAgfVxuICAgICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5fZ2V0RG9tTm9kZUZyb21Bcmd1bWVudCA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdHlwZW9mIHNlbGVjdG9yID09PSBcIm9iamVjdFwiXG4gICAgICAgICAgICA/IHNlbGVjdG9yXG4gICAgICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLl9jbGVhbkRvbU5vZGUgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHdoaWxlICh0YXJnZXQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUNoaWxkKHRhcmdldC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLnRha2VTbmFwc2hvdCA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTbmFwc2hvdCh0aGlzLl9nZXREb21Ob2RlRnJvbUFyZ3VtZW50KHNlbGVjdG9yKSk7XG4gICAgfTtcbiAgICBEb21TbmFwc2hvdC5wcm90b3R5cGUucmVuZGVyU25hcHNob3QgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHNuYXBzaG90LCByZXdyaXRlRG9tQ29udGVudCkge1xuICAgICAgICBpZiAocmV3cml0ZURvbUNvbnRlbnQgPT09IHZvaWQgMCkgeyByZXdyaXRlRG9tQ29udGVudCA9IHRydWU7IH1cbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuX2dldERvbU5vZGVGcm9tQXJndW1lbnQoc2VsZWN0b3IpO1xuICAgICAgICBpZiAocmV3cml0ZURvbUNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NsZWFuRG9tTm9kZSh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdG9yZVdvcmxkRnJvbShzbmFwc2hvdCwgdGFyZ2V0KTtcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5zaG93U25hcHNob3QgPSBmdW5jdGlvbiAoaWQsIHNlbGVjdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChzZWxlY3RvciA9PT0gdm9pZCAwKSB7IHNlbGVjdG9yID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U25hcHNob3RCeUlkKGlkKS50aGVuKGZ1bmN0aW9uIChzbmFwc2hvdCkge1xuICAgICAgICAgICAgX3RoaXMuZGVzdHJveVdvcmxkKCk7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoU3RyaW5nKHNlbGVjdG9yKS52YWx1ZU9mKCkpIHx8XG4gICAgICAgICAgICAgICAgX3RoaXMuX2dldEJvZHlOb2RlKCk7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gX3RoaXMuc2V0U3RhdGUoX3RoaXMsIHNuYXBzaG90KTtcbiAgICAgICAgICAgIF90aGlzLnJlc3RvcmVXb3JsZEZyb20oc291cmNlLCB0YXJnZXROb2RlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBEb21TbmFwc2hvdC5wcm90b3R5cGUucmVzdG9yZVNuYXBzaG90ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaG93U25hcHNob3QoaWQpO1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLl9mYkFkZFRvU25hcHNob3RMaXN0ID0gZnVuY3Rpb24gKGlkLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VcbiAgICAgICAgICAgIC5kYXRhYmFzZSgpXG4gICAgICAgICAgICAucmVmKFwic25hcHNob3RzLWxpc3QvXCIgKyBpZClcbiAgICAgICAgICAgIC5zZXQoZGF0YSk7XG4gICAgfTtcbiAgICBEb21TbmFwc2hvdC5wcm90b3R5cGUuX2ZiU2V0U25hcHNob3QgPSBmdW5jdGlvbiAoaWQsIHNuYXBzaG90KSB7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VcbiAgICAgICAgICAgIC5kYXRhYmFzZSgpXG4gICAgICAgICAgICAucmVmKFwic25hcHNob3RzL1wiICsgaWQpXG4gICAgICAgICAgICAuc2V0KHNuYXBzaG90KTtcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5fZmJHZXRTbmFwc2hvdCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgIF90aGlzLmZpcmViYXNlXG4gICAgICAgICAgICAgICAgLmRhdGFiYXNlKClcbiAgICAgICAgICAgICAgICAucmVmKFwic25hcHNob3RzL1wiICsgaWQpXG4gICAgICAgICAgICAgICAgLm9uY2UoXCJ2YWx1ZVwiKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChzbmFwc2hvdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHNuYXBzaG90LnZhbCgpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5nZXRTbmFwc2hvdEJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZiR2V0U25hcHNob3QoaWQpO1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLl9zaG93U25hcHNob3QgPSBmdW5jdGlvbiAoaWQsIHJvb3RFbGVtZW50KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChpZCA9PT0gdm9pZCAwKSB7IGlkID0gXCIxNTAyMzEyMDg5NDc5XCI7IH1cbiAgICAgICAgaWYgKHJvb3RFbGVtZW50ID09PSB2b2lkIDApIHsgcm9vdEVsZW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U25hcHNob3RCeUlkKGlkKS50aGVuKGZ1bmN0aW9uIChzbmFwc2hvdCkge1xuICAgICAgICAgICAgX3RoaXMuZGVzdHJveVdvcmxkKCk7XG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZShfdGhpcywgc25hcHNob3QpO1xuICAgICAgICAgICAgX3RoaXMucmVzdG9yZVdvcmxkKHJvb3RFbGVtZW50LCBfdGhpcyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLl9jbGVhclN0YXRlID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB0YXJnZXQuaXRlbXMgPSBbXTtcbiAgICAgICAgdGFyZ2V0LkNBQ0hFX0tFWVMgPSBbXTtcbiAgICAgICAgdGFyZ2V0LkJPRFlfU1RZTEUgPSBbXTtcbiAgICAgICAgdGFyZ2V0LkhUTUxfU1RZTEUgPSBbXTtcbiAgICAgICAgdGFyZ2V0LkNBQ0hFX1ZBTFVFUyA9IFtdO1xuICAgICAgICB0YXJnZXQuQk9EWV9BVFRSSUJVVEVTID0gW107XG4gICAgfTtcbiAgICBEb21TbmFwc2hvdC5wcm90b3R5cGUuX2dldEFycmF5Q29weSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCAhPT0gXCJvYmplY3RcIiB8fCBlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuc2xpY2UoMCk7XG4gICAgfTtcbiAgICBEb21TbmFwc2hvdC5wcm90b3R5cGUuX2Nsb25lT2JqZWN0ID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBpZiAodHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvYmogPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5fY29weVdvcmxkID0gZnVuY3Rpb24gKHJvb3ROb2RlLCBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHJvb3ROb2RlID09PSB2b2lkIDApIHsgcm9vdE5vZGUgPSBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY29weVdvcmxkVG8ocm9vdE5vZGUsIHNvdXJjZSk7XG4gICAgfTtcbiAgICBEb21TbmFwc2hvdC5wcm90b3R5cGUuX2NvcHlXb3JsZFRvID0gZnVuY3Rpb24gKHJvb3ROb2RlLCBzb3VyY2UpIHtcbiAgICAgICAgdmFyIHBzZXVkb1NlbGVjdG9yc1N0eWxlc0FycmF5ID0gW107XG4gICAgICAgIHZhciByZWluZGV4TWFwID0ge307XG4gICAgICAgIHZhciBpdGVtcyA9IHNvdXJjZS5pdGVtcztcbiAgICAgICAgc291cmNlLm1ldGEgPSB0aGlzLl9jb2xsZWN0TWV0YSgpO1xuICAgICAgICB2YXIgdGFyZ2V0ID0gcm9vdE5vZGUgfHwgdGhpcy5fZ2V0Qm9keU5vZGUoKTtcbiAgICAgICAgdmFyIGlzQm9keU5vZGVSb290ID0gdGFyZ2V0ID09PSB0aGlzLl9nZXRCb2R5Tm9kZSgpO1xuICAgICAgICBpZiAoaXNCb2R5Tm9kZVJvb3QpIHtcbiAgICAgICAgICAgIHNvdXJjZS5CT0RZX0FUVFJJQlVURVMgPSB0aGlzLl9nZXRCb2R5QXR0cmlidXRlcygpO1xuICAgICAgICAgICAgc291cmNlLkhUTUxfU1RZTEUgPSB0aGlzLl9zdHlsZU9iamVjdFRvT3B0aW1hbFN0eWxlQXJyYXkodGhpcy5fZ2V0SFRNTFN0eWxlKCksIHVuZGVmaW5lZCwgc291cmNlKTtcbiAgICAgICAgICAgIHNvdXJjZS5CT0RZX1NUWUxFID0gdGhpcy5fc3R5bGVPYmplY3RUb09wdGltYWxTdHlsZUFycmF5KHRoaXMuX2dldEJvZHlTdHlsZSgpLCB1bmRlZmluZWQsIHNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhcHR1cmVkTm9kZXMgPSB0aGlzLl9nZXRBbGxEb21Ob2Rlcyh0YXJnZXQpO1xuICAgICAgICBpZiAoIWlzQm9keU5vZGVSb290KSB7XG4gICAgICAgICAgICBjYXB0dXJlZE5vZGVzLnVuc2hpZnQocm9vdE5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FwdHVyZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBjYXB0dXJlZE5vZGVzW2ldO1xuICAgICAgICAgICAgaWYgKGl0ZW0uZGF0YXNldCkge1xuICAgICAgICAgICAgICAgIGl0ZW0uZGF0YXNldFt0aGlzLl9ub2RlU2VsZWN0b3JEYXRhc2V0TmFtZSgpXSA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbm9kZVN0eWxlID0gdGhpcy5fZ2V0U3R5bGVGb3JOb2RlKGl0ZW0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Nob3VsZFRha2VFbGVtZW50KGl0ZW0sIG5vZGVTdHlsZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5kYXRhc2V0ICYmIHRoaXMuX1VTRV9QU0VVRE9TRUxFQ1RPUlMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBzZXVkb3NlbGVjb3JTdHlsZXMgPSB0aGlzLl9nZXRTdHlsZXNGb3JQc2V1ZG9TZWxlY3RvcnMoaXRlbSwgc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBzZXVkb3NlbGVjb3JTdHlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzZXVkb3NlbGVjb3JTdHlsZXMuaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHNldWRvU2VsZWN0b3JzU3R5bGVzQXJyYXkucHVzaChwc2V1ZG9zZWxlY29yU3R5bGVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHRoaXMuX3NlcmlhbGl6ZU5vZGUobm9kZVN0eWxlLCBpdGVtLCBpLCBzb3VyY2UpKTtcbiAgICAgICAgICAgICAgICByZWluZGV4TWFwW2ldID0gaXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fVVNFX1BTRVVET1NFTEVDVE9SUykge1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaChwc2V1ZG9TZWxlY3RvcnNTdHlsZXNBcnJheSwgZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tyZWluZGV4TWFwW2VsLmluZGV4XV07XG4gICAgICAgICAgICAgICAgaXRlbS5wc2V1ZG9zZWxlY3RvcnMgPSBlbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9VU0VfVkFDVVVNKSB7XG4gICAgICAgICAgICBzb3VyY2UuaXRlbXMgPSB0aGlzLl92YWN1dW0oaXRlbXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9VU0VfU1RZTEVTX0NMRUFOVVApIHtcbiAgICAgICAgICAgIHRoaXMuX2NsZWFudXBTdHlsZXMoc291cmNlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLl9nZXRIdG1sTm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0bWwgfHwgdGhpcy5fZ2V0Qm9keU5vZGUoKS5wYXJlbnROb2RlIHx8IHRoaXMuX2dldEJvZHlOb2RlKCk7XG4gICAgfTtcbiAgICBEb21TbmFwc2hvdC5wcm90b3R5cGUucmVzdG9yZVdvcmxkID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IHZvaWQgMCkgeyB0YXJnZXQgPSBmYWxzZTsgfVxuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgLy90aGlzLl9zZXRIVE1MU3R5bGUoc291cmNlKTtcbiAgICAgICAgICAgIHRoaXMuX3NldEJvZHlBdHRyaWJ1dGVzKHNvdXJjZSk7XG4gICAgICAgICAgICAvL3RoaXMuX3NldEJvZHlTdHlsZShzb3VyY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3RvcmVXb3JsZEZyb20oc291cmNlLCB0YXJnZXQpO1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLl9mb3JFYWNoID0gZnVuY3Rpb24gKGFycmF5LCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYWN0aW9uKGFycmF5W2ldLCBpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLnJlc3RvcmVXb3JsZEZyb20gPSBmdW5jdGlvbiAoc291cmNlLCB0YXJnZXQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gdm9pZCAwKSB7IHRhcmdldCA9IGZhbHNlOyB9XG4gICAgICAgIHZhciBzdHlsZXNUb1VwcGVuZCA9IFtdO1xuICAgICAgICB2YXIgZnJhZ21lbnQgPSB0aGlzLl9nZXREb2N1bWVudCgpLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgdGhpcy51aWRQcmVmaXggPVxuICAgICAgICAgICAgXCJkXCIgK1xuICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKClcbiAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKDM2KVxuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoLTIpO1xuICAgICAgICB2YXIgbm9kZXNJbmRleCA9IHt9O1xuICAgICAgICB0aGlzLl9mb3JFYWNoKHNvdXJjZS5pdGVtcywgZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IF90aGlzLl9jcmVhdGVOb2RlKGVsLCBzdHlsZXNUb1VwcGVuZCwgc291cmNlKTtcbiAgICAgICAgICAgIG5vZGVzSW5kZXhbZWwuaW5kZXhdID0gbm9kZTtcbiAgICAgICAgICAgIF90aGlzLl9pbnNlcnROb2RlKG5vZGUsIGVsLCBmcmFnbWVudCwgbm9kZXNJbmRleCk7XG4gICAgICAgIH0pO1xuICAgICAgICBub2Rlc0luZGV4ID0ge307XG4gICAgICAgIHN0eWxlc1RvVXBwZW5kLnB1c2goXCJodG1sIHsgXCIgKyB0aGlzLl9nZXROb2RlU3R5bGVUZXh0KHNvdXJjZS5IVE1MX1NUWUxFLCBzb3VyY2UpICsgXCIgfVwiKTtcbiAgICAgICAgc3R5bGVzVG9VcHBlbmQucHVzaChcImJvZHkgeyBcIiArIHRoaXMuX2dldE5vZGVTdHlsZVRleHQoc291cmNlLkJPRFlfU1RZTEUsIHNvdXJjZSkgKyBcIiB9XCIpO1xuICAgICAgICB0aGlzLl9hZGRTdHlsZU5vZGUoc3R5bGVzVG9VcHBlbmQucmV2ZXJzZSgpLmpvaW4oXCJcXG5cIikpO1xuICAgICAgICB2YXIgcm9vdE5vZGUgPSB0YXJnZXQgfHwgdGhpcy5fZ2V0Qm9keU5vZGUoKTtcbiAgICAgICAgcm9vdE5vZGUuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICB0aGlzLnVpZFByZWZpeCA9IG51bGw7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLl9kZXN0cm95Qm9keUF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhdHRyaWJ1dGVzID0gdGhpcy5fZ2V0Qm9keUF0dHJpYnV0ZXMoKTtcbiAgICAgICAgdmFyIGJvZHkgPSB0aGlzLl9nZXRCb2R5Tm9kZSgpO1xuICAgICAgICB0aGlzLl9mb3JFYWNoKGF0dHJpYnV0ZXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBfYVswXTtcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBEb21TbmFwc2hvdC5wcm90b3R5cGUuZGVzdHJveVdvcmxkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9kZXN0cm95Qm9keUF0dHJpYnV0ZXMoKTtcbiAgICAgICAgdGhpcy5fZ2V0Qm9keU5vZGUoKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB0aGlzLl9jbGVhbkhlYWROb2RlRnJvbVN0eWxlcygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5fY3JlYXRlU3R5bGVPYmplY3QgPSBmdW5jdGlvbiAoc3R5bGVOb2RlKSB7XG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9IHt9O1xuICAgICAgICBpZiAoIXN0eWxlTm9kZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHlsZU9iamVjdDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlTm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHByb3BlcnR5TmFtZSA9IHN0eWxlTm9kZVtpXTtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W3Byb3BlcnR5TmFtZV0gPSBzdHlsZU5vZGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZU9iamVjdDtcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5faXNEZWZhdWx0U3R5bGUgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5CT0RZX1NUWUxFW25hbWVdID09PSB2YWx1ZSB8fCBmYWxzZTtcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5fdmFjdXVtID0gZnVuY3Rpb24gKGl0ZW1zKSB7XG4gICAgICAgIHZhciBpdGVtc1RvUmVtb3ZlID0gW107XG4gICAgICAgIHZhciBsYXN0SXRlbUluZGV4ID0gaXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgdGhpcy5fZm9yRWFjaChpdGVtcywgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAobGFzdEl0ZW1JbmRleCAhPT0gaW5kZXggJiYgaXRlbS5ub2RlTmFtZSA9PT0gXCIjdGV4dFwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5leHROb2RlID0gaXRlbXNbaW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICB2YXIgaGFzU2FtZVBhcmVudCA9IG5leHROb2RlLnBhcmVudCA9PT0gaXRlbS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgdmFyIGhhc1NhbWVOb2RlTmFtZSA9IG5leHROb2RlLm5vZGVOYW1lID09PSBpdGVtLm5vZGVOYW1lO1xuICAgICAgICAgICAgICAgIGlmIChoYXNTYW1lUGFyZW50ICYmIGhhc1NhbWVOb2RlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0Tm9kZS50ZXh0Q29udGVudCA9IFwiXCIgKyBpdGVtLnRleHRDb250ZW50ICsgbmV4dE5vZGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zVG9SZW1vdmUucHVzaChpbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihmdW5jdGlvbiAoZWwsIGluZGV4KSB7IHJldHVybiAhaXRlbXNUb1JlbW92ZS5pbmNsdWRlcyhpbmRleCk7IH0pO1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLl9jbGVhbnVwU3R5bGVzID0gZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3R5bGVzVG9SZW1vdmUgPSBbXTtcbiAgICAgICAgdmFyIHN0eWxlZEl0ZW1zID0gc291cmNlLml0ZW1zLmZpbHRlcihmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5zdHlsZXMubGVuZ3RoOyB9KTtcbiAgICAgICAgLy8gY29sbGVjdCBicm93c2VyIGRlZmF1bHQgc3R5bGVzXG4gICAgICAgIHRoaXMuX2ZvckVhY2goc291cmNlLkhUTUxfU1RZTEUsIGZ1bmN0aW9uIChzdHlsZSkge1xuICAgICAgICAgICAgaWYgKHN0eWxlZEl0ZW1zLmV2ZXJ5KGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gZWwuc3R5bGVzLmluY2x1ZGVzKHN0eWxlKTsgfSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlLkJPRFlfU1RZTEUuaW5jbHVkZXMoc3R5bGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1RvUmVtb3ZlLnB1c2goc3R5bGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGV4Y2x1ZGUgY29sbGVjdGVkIHN0dWxlc1xuICAgICAgICBzb3VyY2UuSFRNTF9TVFlMRSA9IHNvdXJjZS5IVE1MX1NUWUxFLmZpbHRlcihmdW5jdGlvbiAoZWwpIHsgcmV0dXJuICFzdHlsZXNUb1JlbW92ZS5pbmNsdWRlcyhlbCk7IH0pO1xuICAgICAgICBzb3VyY2UuQk9EWV9TVFlMRSA9IHNvdXJjZS5CT0RZX1NUWUxFLmZpbHRlcihmdW5jdGlvbiAoZWwpIHsgcmV0dXJuICFzdHlsZXNUb1JlbW92ZS5pbmNsdWRlcyhlbCk7IH0pO1xuICAgICAgICB0aGlzLl9mb3JFYWNoKHNvdXJjZS5pdGVtcywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5faXNOb3RFbXB0eUFycmF5KGl0ZW0uc3R5bGVzKSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGVzID0gaXRlbS5zdHlsZXMuZmlsdGVyKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gIXN0eWxlc1RvUmVtb3ZlLmluY2x1ZGVzKGVsKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzb3VyY2UuQk9EWV9TVFlMRSA9IHNvdXJjZS5CT0RZX1NUWUxFLmZpbHRlcihmdW5jdGlvbiAoZWwpIHsgcmV0dXJuICFzdHlsZXNUb1JlbW92ZS5pbmNsdWRlcyhlbCk7IH0pO1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLl9nZXROYW1lRm9yTm9kZSA9IGZ1bmN0aW9uIChub2RlTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5OT0RFX05BTUVTX1RPX1JFUExBQ0Vbbm9kZU5hbWVdIHx8IG5vZGVOYW1lO1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLl9nZXRQYXJlbnRGb3JOb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZVxuICAgICAgICAgICAgPyBub2RlLnBhcmVudE5vZGUuZGF0YXNldFt0aGlzLl9ub2RlU2VsZWN0b3JEYXRhc2V0TmFtZSgpXVxuICAgICAgICAgICAgOiAwO1xuICAgICAgICBpZiAoIXRoaXMuaXNOb3RVbmRlZmluZWQocGFyZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHBhcmVudCk7XG4gICAgfTtcbiAgICBEb21TbmFwc2hvdC5wcm90b3R5cGUuX2dldE5vZGVUZXh0Q29udGVudCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHJldHVybiBub2RlLmNoaWxkcmVuID8gXCJcIiA6IG5vZGUuZGF0YTtcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5fYXJyYXlUb09iamVjdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICAgICAgaWYgKGFyciA9PT0gdm9pZCAwKSB7IGFyciA9IFtdOyB9XG4gICAgICAgIHJldHVybiBhcnIucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIF9hKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gX2FbMF0sIHZhbHVlID0gX2FbMV07XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSwge30pO1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLmdldFNuYXBzaG90c0RpZmYgPSBmdW5jdGlvbiAoczEsIHMyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBmaXJzdFN0YXRlID0gdGhpcy5zZXRTdGF0ZSh7fSwgczEpO1xuICAgICAgICB2YXIgc2Vjb25kU3RhdGUgPSB0aGlzLnNldFN0YXRlKHt9LCBzMik7XG4gICAgICAgIHZhciBmaXJzdFN0eWxlcyA9IGZpcnN0U3RhdGUuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnN0eWxlczsgfSkubWFwKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBfdGhpcy5fc2V0Tm9kZVN0eWxlRnJvbVN0eWxlQXJyYXkoZWwuc3R5bGVzLCB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHt9XG4gICAgICAgICAgICB9LCBmaXJzdFN0YXRlKTtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBlbCwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgc2Vjb25kU3R5bGVzID0gc2Vjb25kU3RhdGUuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnN0eWxlczsgfSkubWFwKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBfdGhpcy5fc2V0Tm9kZVN0eWxlRnJvbVN0eWxlQXJyYXkoZWwuc3R5bGVzLCB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHt9XG4gICAgICAgICAgICB9LCBzZWNvbmRTdGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZWwsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGRpZmZBcnJheSA9IG5ldyBBcnJheShmaXJzdFN0YXRlLml0ZW1zLmxlbmd0aCkuZmlsbChudWxsKTtcbiAgICAgICAgcmV0dXJuIGRpZmZBcnJheS5tYXAoZnVuY3Rpb24gKF8sIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGZpcnN0Tm9kZTogZmlyc3RTdHlsZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgIHNlY29uZE5vZGU6IHNlY29uZFN0eWxlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgc3R5bGVzRGlmZjogX3RoaXMuX2dldEFsbEtleXNEaWZmKGZpcnN0U3R5bGVzW2luZGV4XS5zdHlsZSwgc2Vjb25kU3R5bGVzW2luZGV4XS5zdHlsZSksXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlc0RpZmY6IF90aGlzLl9nZXRBbGxLZXlzRGlmZihfdGhpcy5fYXJyYXlUb09iamVjdChmaXJzdFN0eWxlc1tpbmRleF0uYXR0cmlidXRlcyksIF90aGlzLl9hcnJheVRvT2JqZWN0KHNlY29uZFN0eWxlc1tpbmRleF0uYXR0cmlidXRlcykpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5fc2VyaWFsaXplTm9kZSA9IGZ1bmN0aW9uIChzdHlsZU5vZGUsIG5vZGUsIGluZGV4LCBzb3VyY2UpIHtcbiAgICAgICAgdmFyIHBheWxvYWQgPSB0aGlzLl9mb3JtYXRTdHlsZShzdHlsZU5vZGUsIG5vZGUsIGluZGV4LCBzb3VyY2UpO1xuICAgICAgICByZXR1cm4gcGF5bG9hZDtcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5fZm9ybWF0U3R5bGUgPSBmdW5jdGlvbiAoc3R5bGVOb2RlLCBub2RlLCBpbmRleCwgc291cmNlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgICAgICBzdHlsZXM6IFtdLFxuICAgICAgICAgICAgbm9kZU5hbWU6IHRoaXMuX2dldE5hbWVGb3JOb2RlKG5vZGUubm9kZU5hbWUpLFxuICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgYXR0cmlidXRlczogW10sXG4gICAgICAgICAgICBub2RlVHlwZTogbm9kZS5ub2RlVHlwZSxcbiAgICAgICAgICAgIHBhcmVudDogdGhpcy5fZ2V0UGFyZW50Rm9yTm9kZShub2RlKSxcbiAgICAgICAgICAgIGlzU1ZHOiB0aGlzLl9pc1NWRyhub2RlKSxcbiAgICAgICAgICAgIHRleHRDb250ZW50OiB0aGlzLl9nZXROb2RlVGV4dENvbnRlbnQobm9kZSlcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHN0eWxlID0gdGhpcy5fY3JlYXRlU3R5bGVPYmplY3Qoc3R5bGVOb2RlKTtcbiAgICAgICAgLy8gaWYgKHJlc3VsdC5pc1NWRyAmJiByZXN1bHQubm9kZU5hbWUgIT09ICdzdmcnKSB7XG4gICAgICAgIC8vIHJlc3VsdC5zdHlsZXMgPSBbXTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnN0eWxlcyA9IHRoaXMuX3N0eWxlT2JqZWN0VG9PcHRpbWFsU3R5bGVBcnJheShzdHlsZSwgcmVzdWx0LnBhcmVudCwgc291cmNlKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBpZiAoIXRoaXMucmVzdHJpY3RlZE5vZGVUeXBlcy5pbmNsdWRlcyhub2RlLm5vZGVUeXBlKSkge1xuICAgICAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXMgPSB0aGlzLl9leHRyYWN0Tm9kZUF0dHJpYnV0ZXMobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5fZ2V0QWxsRG9tTm9kZXMgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbGlzdE9mTm9kZXMgPSBbXTtcbiAgICAgICAgdmFyIHdhbGsgPSB0aGlzLl9nZXREb2N1bWVudCgpLmNyZWF0ZVRyZWVXYWxrZXIobm9kZSwgTm9kZUZpbHRlci5TSE9XX0FMTCwge1xuICAgICAgICAgICAgYWNjZXB0Tm9kZTogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIV90aGlzLk5PREVfTkFNRVNfVE9fSUdOT1JFLmluY2x1ZGVzKG5vZGUubm9kZU5hbWUpXG4gICAgICAgICAgICAgICAgICAgID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG4gPSBudWxsO1xuICAgICAgICB3aGlsZSAoKG4gPSB3YWxrLm5leHROb2RlKCkpKSB7XG4gICAgICAgICAgICBsaXN0T2ZOb2Rlcy5wdXNoKG4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0T2ZOb2RlcztcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5fZmJTYXZlU25hcHNob3QgPSBmdW5jdGlvbiAoaWQsIHN0YXRlKSB7XG4gICAgICAgIHRoaXMuX2ZiU2V0U25hcHNob3QoaWQsIHN0YXRlKTtcbiAgICAgICAgdGhpcy5fZmJBZGRUb1NuYXBzaG90TGlzdChpZCwgeyB2aXNpYmxlOiB0cnVlLCBtZXRhOiBzdGF0ZS5tZXRhIH0pO1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLmNyZWF0ZVNuYXBzaG90ID0gZnVuY3Rpb24gKHJvb3ROb2RlKSB7XG4gICAgICAgIGlmIChyb290Tm9kZSA9PT0gdm9pZCAwKSB7IHJvb3ROb2RlID0gZmFsc2U7IH1cbiAgICAgICAgdmFyIHNvdXJjZSA9IHt9O1xuICAgICAgICB0aGlzLl9jbGVhclN0YXRlKHNvdXJjZSk7XG4gICAgICAgIHRoaXMuX2NvcHlXb3JsZChyb290Tm9kZSwgc291cmNlKTtcbiAgICAgICAgdGhpcy5hZGRNZXRhKFwiRGF0ZVwiLCBEYXRlLm5vdygpLCBzb3VyY2UpO1xuICAgICAgICB0aGlzLmFkZE1ldGEoXCJVUkxcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYsIHNvdXJjZSk7XG4gICAgICAgIHRoaXMuYWRkTWV0YShcIkJyb3dzZXJcIiwgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQsIHNvdXJjZSk7XG4gICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuX2dldFN0YXRlKHNvdXJjZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RhdGVcIiwgc3RhdGUpO1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfTtcbiAgICBEb21TbmFwc2hvdC5wcm90b3R5cGUuc2F2ZVNuYXBzaG90ID0gZnVuY3Rpb24gKGN1c3RvbUlkLCBzdGF0ZSkge1xuICAgICAgICBpZiAoY3VzdG9tSWQgPT09IHZvaWQgMCkgeyBjdXN0b21JZCA9IGZhbHNlOyB9XG4gICAgICAgIHZhciBpZCA9IGN1c3RvbUlkIHx8IERhdGUubm93KCk7XG4gICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlID0gdGhpcy5jcmVhdGVTbmFwc2hvdCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2ZiU2F2ZVNuYXBzaG90KGlkLCBzdGF0ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic25hcHNob3QgSUQgaXM6IFwiICsgaWQpO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfTtcbiAgICBEb21TbmFwc2hvdC5wcm90b3R5cGUuX3NldEJvZHlBdHRyaWJ1dGVzID0gZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgICB2YXIgYXR0cmlidXRlcyA9IHNvdXJjZS5CT0RZX0FUVFJJQlVURVM7XG4gICAgICAgIHZhciBib2R5ID0gdGhpcy5fZ2V0Qm9keU5vZGUoKTtcbiAgICAgICAgdGhpcy5fZm9yRWFjaChhdHRyaWJ1dGVzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gX2FbMF0sIHZhbHVlID0gX2FbMV07XG4gICAgICAgICAgICBib2R5LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5zZXRCb2R5Tm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHRoaXMuX2JvZHkgPSBub2RlO1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLl9zZXRCb2R5U3R5bGUgPSBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICAgIHRoaXMuX3NldE5vZGVTdHlsZUZyb21TdHlsZUFycmF5KHNvdXJjZS5CT0RZX1NUWUxFLCB0aGlzLl9nZXRCb2R5Tm9kZSgpLCBzb3VyY2UpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5zZXRIZWFkTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHRoaXMuX2hlYWQgPSBub2RlO1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLl9zZXRIVE1MU3R5bGUgPSBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICAgIHZhciBub2RlID0gdGhpcy5fZ2V0SHRtbE5vZGUoKTtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldE5vZGVTdHlsZUZyb21TdHlsZUFycmF5KHNvdXJjZS5IVE1MX1NUWUxFLCBub2RlLCBzb3VyY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLnNldEh0bWxOb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgdGhpcy5faHRtbCA9IG5vZGU7XG4gICAgfTtcbiAgICBEb21TbmFwc2hvdC5wcm90b3R5cGUuX3NldE5vZGVTdHlsZUZyb21TdHlsZUFycmF5ID0gZnVuY3Rpb24gKHN0eWxlcywgbm9kZSwgc291cmNlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2ZvckVhY2goc3R5bGVzLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5fZ2V0RnJvbU9wdGltYWxWYWx1ZShrZXksIHNvdXJjZSksIG5hbWUgPSBfYVswXSwgdmFsdWUgPSBfYVsxXTtcbiAgICAgICAgICAgIG5vZGUuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLnNldE1ldGEgPSBmdW5jdGlvbiAobWV0YSkge1xuICAgICAgICBpZiAodHlwZW9mIG1ldGEgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibWV0YSBzaG91bGQgYmUgYW4gb2JqZWN0XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWV0YSA9IE9iamVjdC5hc3NpZ24oe30sIG1ldGEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uICh0YXJnZXQsIHN0YXRlKSB7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IHZvaWQgMCkgeyB0YXJnZXQgPSB0aGlzOyB9XG4gICAgICAgIHRhcmdldC5tZXRhID0gdGhpcy5fY2xvbmVPYmplY3Qoc3RhdGUubWV0YSkgfHwgdGhpcy5tZXRhIHx8IHt9O1xuICAgICAgICB0YXJnZXQuaXRlbXMgPSB0aGlzLl9nZXRBcnJheUNvcHkoc3RhdGUuaXRlbXMpIHx8IFtdO1xuICAgICAgICB0YXJnZXQuQ0FDSEVfS0VZUyA9IHRoaXMuX2dldEFycmF5Q29weShzdGF0ZS5DQUNIRV9LRVlTKSB8fCBbXTtcbiAgICAgICAgdGFyZ2V0LkNBQ0hFX1ZBTFVFUyA9IHRoaXMuX2dldEFycmF5Q29weShzdGF0ZS5DQUNIRV9WQUxVRVMpIHx8IFtdO1xuICAgICAgICB0YXJnZXQuQk9EWV9TVFlMRSA9IHRoaXMuX2dldEFycmF5Q29weShzdGF0ZS5CT0RZX1NUWUxFKSB8fCBbXTtcbiAgICAgICAgdGFyZ2V0LkhUTUxfU1RZTEUgPSB0aGlzLl9nZXRBcnJheUNvcHkoc3RhdGUuSFRNTF9TVFlMRSkgfHwgW107XG4gICAgICAgIHRhcmdldC5CT0RZX0FUVFJJQlVURVMgPSB0aGlzLl9nZXRBcnJheUNvcHkoc3RhdGUuQk9EWV9BVFRSSUJVVEVTKSB8fCBbXTtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5zZXRTdHlsZUZyb21PYmplY3QgPSBmdW5jdGlvbiAobm9kZSwgc3R5bGVPYmplY3QpIHtcbiAgICAgICAgdGhpcy5fZm9yRWFjaChPYmplY3Qua2V5cyhzdHlsZU9iamVjdCksIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIG5vZGUuc3R5bGVba2V5XSA9IHN0eWxlT2JqZWN0W2tleV07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8vLyBzZXQgcm9vdE5vZGUgZm9yIGNhcHR1cmluZ1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5zZXRUYXJnZXQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB0aGlzLnNldEJvZHlOb2RlKG5vZGUpO1xuICAgICAgICB0aGlzLnNldEh0bWxOb2RlKG5vZGUucGFyZW50Tm9kZSk7XG4gICAgICAgIHRoaXMuc2V0SGVhZE5vZGUobm9kZS5wYXJlbnROb2RlKTtcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5fc3R5bGVPYmplY3RUb09wdGltYWxTdHlsZUFycmF5ID0gZnVuY3Rpb24gKHN0eWxlT2JqZWN0LCBwYXJlbnRJbmRleCwgc291cmNlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChzdHlsZU9iamVjdCA9PT0gdm9pZCAwKSB7IHN0eWxlT2JqZWN0ID0ge307IH1cbiAgICAgICAgdmFyIHBhcmVudFN0eWxlID0gW107XG4gICAgICAgIGlmICh0aGlzLmlzTm90VW5kZWZpbmVkKHBhcmVudEluZGV4KSkge1xuICAgICAgICAgICAgcGFyZW50U3R5bGUgPSB0aGlzLmdldFBhcmVudFN0eWxlQnlJbmRleChwYXJlbnRJbmRleCwgc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3R5bGVzID0gW107XG4gICAgICAgIHRoaXMuX2ZvckVhY2goT2JqZWN0LmtleXMoc3R5bGVPYmplY3QpLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIHZhciBzdHlsZUtleSA9IF90aGlzLmdldE9wdGltYWxWYWx1ZShlbCwgc3R5bGVPYmplY3RbZWxdLCBzb3VyY2UpO1xuICAgICAgICAgICAgaWYgKHN0eWxlS2V5ICYmXG4gICAgICAgICAgICAgICAgIShfdGhpcy5JTkhFUklULmluY2x1ZGVzKGVsKSAmJiBwYXJlbnRTdHlsZS5pbmNsdWRlcyhzdHlsZUtleSkpKSB7XG4gICAgICAgICAgICAgICAgc3R5bGVzLnB1c2goc3R5bGVLZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5za2lwU3R5bGUgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGVmYXVsdFN0eWxlKG5hbWUsIHZhbHVlKTtcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5fc2hvdWxkVGFrZUVsZW1lbnQgPSBmdW5jdGlvbiAobm9kZSwgbm9kZVN0eWxlKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1NWRyhub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuTk9ERV9OQU1FU19UT19JR05PUkUuaW5jbHVkZXMobm9kZS5ub2RlTmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5wYXJlbnROb2RlICYmXG4gICAgICAgICAgICB0aGlzLk5PREVfTkFNRVNfVE9fSUdOT1JFLmluY2x1ZGVzKG5vZGUucGFyZW50Tm9kZS5ub2RlTmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5wYXJlbnROb2RlICYmIG5vZGUucGFyZW50Tm9kZS5kYXRhc2V0Lmlnbm9yZWQpIHtcbiAgICAgICAgICAgIGlmIChub2RlLmRhdGFzZXQpIHtcbiAgICAgICAgICAgICAgICBub2RlLmRhdGFzZXQuaWdub3JlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnJlc3RyaWN0ZWROb2RlVHlwZXMuaW5jbHVkZXMobm9kZS5ub2RlVHlwZSkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNraXBEaXNwbGF5Tm9uZSAmJiBub2RlLnN0eWxlICYmIG5vZGVTdHlsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZVN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZGF0YXNldC5pZ25vcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5pc05vdFVuZGVmaW5lZCA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICByZXR1cm4gZWwgIT09IHZvaWQgMDtcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5faXNOb3RFbXB0eUFycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICAgICAgICByZXR1cm4gYXJyICYmIGFyci5sZW5ndGg7XG4gICAgfTtcbiAgICBEb21TbmFwc2hvdC5wcm90b3R5cGUuX2hhc1RleHRDb250ZW50ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgPT09IHZvaWQgMCkgeyBub2RlID0geyB0ZXh0Q29udGVudDogXCJcIiB9OyB9XG4gICAgICAgIHJldHVybiB0eXBlb2Ygbm9kZS50ZXh0Q29udGVudCA9PT0gXCJzdHJpbmdcIiAmJiBub2RlLnRleHRDb250ZW50Lmxlbmd0aDtcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5faGFzTm9kZUluQ2FjaGUgPSBmdW5jdGlvbiAobm9kZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGVOYW1lIGluIHRoaXMubm9kZUNhY2hlO1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLl9hZGROb2RlVG9DYWNoZSA9IGZ1bmN0aW9uIChub2RlTmFtZSkge1xuICAgICAgICB0aGlzLm5vZGVDYWNoZVtub2RlTmFtZV0gPSB0aGlzLl9nZXREb2N1bWVudCgpLmNyZWF0ZUVsZW1lbnQobm9kZU5hbWUpO1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLl9nZXRUZXh0Tm9kZSA9IGZ1bmN0aW9uICh0ZXh0Q29udGVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RG9jdW1lbnQoKS5jcmVhdGVUZXh0Tm9kZSh0ZXh0Q29udGVudCk7XG4gICAgfTtcbiAgICBEb21TbmFwc2hvdC5wcm90b3R5cGUuX2dldFNWR05vZGUgPSBmdW5jdGlvbiAobm9kZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldERvY3VtZW50KCkuY3JlYXRlRWxlbWVudE5TKHRoaXMuX05BTUVTUEFDRVMuU1ZHLCBub2RlTmFtZSk7XG4gICAgfTtcbiAgICBEb21TbmFwc2hvdC5wcm90b3R5cGUuX2FkZFRleHRDb250ZW50ID0gZnVuY3Rpb24gKG5vZGUsIHBhcmFtcykge1xuICAgICAgICBpZiAodGhpcy5faGFzVGV4dENvbnRlbnQocGFyYW1zKSkge1xuICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IHBhcmFtcy50ZXh0Q29udGVudDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLl9jcmVhdGVOb2RlID0gZnVuY3Rpb24gKHBhcmFtcywgc3R5bGVzLCBzb3VyY2UpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHBhcmFtcyA9PT0gdm9pZCAwKSB7IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIG5vZGVUeXBlOiBcIjNcIixcbiAgICAgICAgICAgIGluZGV4OiBcIjNcIixcbiAgICAgICAgICAgIHRleHRDb250ZW50OiBcIm5vb3BcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFtdLFxuICAgICAgICAgICAgc3R5bGVzOiBbXSxcbiAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgIGlzU1ZHOiBmYWxzZSxcbiAgICAgICAgICAgIHBzZXVkb3NlbGVjdG9yczogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbm9kZU5hbWU6IFwiRElWXCJcbiAgICAgICAgfTsgfVxuICAgICAgICB2YXIgbm9kZSA9IG51bGw7XG4gICAgICAgIHZhciBub2RlTmFtZSA9IHBhcmFtcy5ub2RlTmFtZSwgdGV4dENvbnRlbnQgPSBwYXJhbXMudGV4dENvbnRlbnQsIG5vZGVUeXBlID0gcGFyYW1zLm5vZGVUeXBlLCBpc1NWRyA9IHBhcmFtcy5pc1NWRztcbiAgICAgICAgaWYgKHRoaXMucmVzdHJpY3RlZE5vZGVUeXBlcy5pbmNsdWRlcyhwYXJzZUludChub2RlVHlwZSkpKSB7XG4gICAgICAgICAgICBub2RlID0gdGhpcy5fZ2V0VGV4dE5vZGUodGV4dENvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzU1ZHKSB7XG4gICAgICAgICAgICBub2RlID0gdGhpcy5fZ2V0U1ZHTm9kZShub2RlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlID0gdGhpcy5fZ2V0Tm9kZUJ5TmFtZShub2RlTmFtZSk7XG4gICAgICAgICAgICB0aGlzLl9hZGRUZXh0Q29udGVudChub2RlLCBwYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9pc05vdEVtcHR5QXJyYXkocGFyYW1zLmF0dHJpYnV0ZXMpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZvckVhY2gocGFyYW1zLmF0dHJpYnV0ZXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IF9hWzBdLCB2YWx1ZSA9IF9hWzFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzU1ZHKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGVOUyhfdGhpcy5fTkFNRVNQQUNFUy5TVkcsIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5faXNTYWZlQXR0cmlidXRlKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSwgbm9kZSwgbmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gX2FkZFN0eWxlTm9kZVxuICAgICAgICBpZiAodGhpcy5faXNOb3RFbXB0eUFycmF5KHBhcmFtcy5zdHlsZXMpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fVVNFX0lOTElORV9TVFlMRVMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXROb2RlU3R5bGVGcm9tU3R5bGVBcnJheShwYXJhbXMuc3R5bGVzLCBub2RlLCBzb3VyY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3R5bGVzLnB1c2godGhpcy5fc3R5bGVUZXh0Rm9yTm9kZShwYXJhbXMuaW5kZXgsIHBhcmFtcy5zdHlsZXMsIFwiXCIsIHNvdXJjZSkpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMucHNldWRvc2VsZWN0b3JzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcy5wdXNoKHRoaXMuX3N0eWxlVGV4dEZvck5vZGUocGFyYW1zLmluZGV4LCBwYXJhbXMucHNldWRvc2VsZWN0b3JzLmJlZm9yZSwgXCI6YmVmb3JlXCIsIHNvdXJjZSkpO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXMucHVzaCh0aGlzLl9zdHlsZVRleHRGb3JOb2RlKHBhcmFtcy5pbmRleCwgcGFyYW1zLnBzZXVkb3NlbGVjdG9ycy5hZnRlciwgXCI6YWZ0ZXJcIiwgc291cmNlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLmRhdGFzZXQpIHtcbiAgICAgICAgICAgIG5vZGUuZGF0YXNldC5wYXJlbnQgPSBwYXJhbXMucGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLl9zdHlsZVRleHRGb3JOb2RlID0gZnVuY3Rpb24gKGluZGV4LCBzdHlsZXMsIHBvc3RmaXgsIHNvdXJjZSkge1xuICAgICAgICBpZiAocG9zdGZpeCA9PT0gdm9pZCAwKSB7IHBvc3RmaXggPSBcIlwiOyB9XG4gICAgICAgIHJldHVybiBcIltcIiArIHRoaXMuX25vZGVTZWxlY3Rvck5hbWUoKSArIFwiPVxcXCJcIiArIHRoaXMuX25vZGVTZWxlY3RvclZhbHVlKGluZGV4KSArIFwiXFxcIl1cIiArIHBvc3RmaXggKyBcIiB7IFwiICsgdGhpcy5fZ2V0Tm9kZVN0eWxlVGV4dChzdHlsZXMsIHNvdXJjZSkgKyBcIiB9XCI7XG4gICAgfTtcbiAgICBEb21TbmFwc2hvdC5wcm90b3R5cGUuX25vZGVTZWxlY3Rvck5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBcImRhdGEtXCIgKyB0aGlzLl9ub2RlU2VsZWN0b3JEYXRhc2V0TmFtZSgpO1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLl9ub2RlU2VsZWN0b3JEYXRhc2V0TmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMudWlkUHJlZml4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIiArIHRoaXMudWlkUHJlZml4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiaW5kZXhcIjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLl9ub2RlU2VsZWN0b3JWYWx1ZSA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfTtcbiAgICBEb21TbmFwc2hvdC5wcm90b3R5cGUuX2luc2VydE5vZGUgPSBmdW5jdGlvbiAobm9kZSwgb2JqLCBmcmFnbWVudCwgbm9kZXNJbmRleCkge1xuICAgICAgICB2YXIgcGFyZW50SWQgPSBub2RlLmRhdGFzZXQgPyBub2RlLmRhdGFzZXQucGFyZW50IDogb2JqLnBhcmVudDtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gXCJbXCIgKyB0aGlzLl9ub2RlU2VsZWN0b3JOYW1lKCkgKyBcIj1cXFwiXCIgKyB0aGlzLl9ub2RlU2VsZWN0b3JWYWx1ZShwYXJlbnRJZCkgKyBcIlxcXCJdXCI7XG4gICAgICAgIC8vIHx8IG5vZGVzSW5kZXhbcGFyZW50SWRdXG4gICAgICAgIHZhciBwYXJlbnQgPSBmcmFnbWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSB8fCBmcmFnbWVudDtcbiAgICAgICAgaWYgKG5vZGUgPT09IHBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5fZ2V0VmFsdWVPckVtcHR5U3RyaW5nID0gZnVuY3Rpb24gKG9iaiwga2V5KSB7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLl9nZXRBbGxLZXlzRGlmZiA9IGZ1bmN0aW9uIChmaXJzdCwgc2Vjb25kKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChmaXJzdCA9PT0gdm9pZCAwKSB7IGZpcnN0ID0ge307IH1cbiAgICAgICAgaWYgKHNlY29uZCA9PT0gdm9pZCAwKSB7IHNlY29uZCA9IHt9OyB9XG4gICAgICAgIHZhciBmS2V5cyA9IE9iamVjdC5rZXlzKGZpcnN0KTtcbiAgICAgICAgdmFyIHNLZXlzID0gT2JqZWN0LmtleXMoc2Vjb25kKTtcbiAgICAgICAgdmFyIGFsbEtleXMgPSBBcnJheS5mcm9tKG5ldyBTZXQoW10uY29uY2F0KGZLZXlzLCBzS2V5cykpKTtcbiAgICAgICAgdmFyIGRpZmZzID0ge307XG4gICAgICAgIGFsbEtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICB2YXIgZlZhbHVlID0gX3RoaXMuX2dldFZhbHVlT3JFbXB0eVN0cmluZyhmaXJzdCwga2V5KTtcbiAgICAgICAgICAgIHZhciBzVmFsdWUgPSBfdGhpcy5fZ2V0VmFsdWVPckVtcHR5U3RyaW5nKHNlY29uZCwga2V5KTtcbiAgICAgICAgICAgIGlmIChmVmFsdWUgIT09IHNWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGRpZmZzW2tleV0gPSBbZlZhbHVlLCBzVmFsdWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRpZmZzKS5sZW5ndGggPyBkaWZmcyA6IGZhbHNlO1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLl9nZXRFcXVhbEtleXNEaWZmID0gZnVuY3Rpb24gKGZpcnN0LCBzZWNvbmQpIHtcbiAgICAgICAgdmFyIGRpZmZzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGZpcnN0KS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKGZpcnN0W2tleV0gIT09IHNlY29uZFtrZXldKSB7XG4gICAgICAgICAgICAgICAgZGlmZnNba2V5XSA9IFtmaXJzdFtrZXldLCBzZWNvbmRba2V5XV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZGlmZnMpLmxlbmd0aCA/IGRpZmZzIDogZmFsc2U7XG4gICAgfTtcbiAgICBEb21TbmFwc2hvdC5wcm90b3R5cGUuX2dldFN0eWxlc0ZvclBzZXVkb1NlbGVjdG9ycyA9IGZ1bmN0aW9uIChub2RlLCBzb3VyY2UpIHtcbiAgICAgICAgdmFyIGJlZm9yZSA9IHRoaXMuX2NyZWF0ZVN0eWxlT2JqZWN0KHRoaXMuX2dldFN0eWxlRm9yTm9kZShub2RlLCBcIjpiZWZvcmVcIikpO1xuICAgICAgICB2YXIgYWZ0ZXIgPSB0aGlzLl9jcmVhdGVTdHlsZU9iamVjdCh0aGlzLl9nZXRTdHlsZUZvck5vZGUobm9kZSwgXCI6YWZ0ZXJcIikpO1xuICAgICAgICB2YXIgc3R5bGVEaWZmID0gdGhpcy5fZ2V0RXF1YWxLZXlzRGlmZihiZWZvcmUsIGFmdGVyKTtcbiAgICAgICAgaWYgKHN0eWxlRGlmZikge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBiZWZvcmU6IHRoaXMuX3N0eWxlT2JqZWN0VG9PcHRpbWFsU3R5bGVBcnJheShiZWZvcmUsIHVuZGVmaW5lZCwgc291cmNlKSxcbiAgICAgICAgICAgICAgICBhZnRlcjogdGhpcy5fc3R5bGVPYmplY3RUb09wdGltYWxTdHlsZUFycmF5KGFmdGVyLCB1bmRlZmluZWQsIHNvdXJjZSksXG4gICAgICAgICAgICAgICAgZGlmZjogc3R5bGVEaWZmLFxuICAgICAgICAgICAgICAgIGluZGV4OiBudWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEb21TbmFwc2hvdC5wcm90b3R5cGUuX2dldFN0eWxlRm9yTm9kZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBwc2V1ZG9zZWxlY29yKSB7XG4gICAgICAgIGlmIChwc2V1ZG9zZWxlY29yID09PSB2b2lkIDApIHsgcHNldWRvc2VsZWNvciA9IG51bGw7IH1cbiAgICAgICAgaWYgKHRoaXMucmVzdHJpY3RlZE5vZGVUeXBlcy5pbmNsdWRlcyhlbGVtZW50Lm5vZGVUeXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdHlsZSA9IFtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBwc2V1ZG9zZWxlY29yKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSwgZWxlbWVudCwgZWxlbWVudC5ub2RlVHlwZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLl9nZXRCb2R5Tm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9sZWdhY3kgaG9va1xuICAgICAgICBpZiAoXCJnZXRCb2R5Tm9kZVwiIGluIHRoaXMgJiYgdHlwZW9mIHRoaXMuZ2V0Qm9keU5vZGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Qm9keU5vZGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fYm9keSB8fCB3aW5kb3cuZG9jdW1lbnQuYm9keTtcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5fZ2V0RG9jdW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5fZ2V0Tm9kZVN0eWxlVGV4dCA9IGZ1bmN0aW9uIChzdHlsZXMsIHNvdXJjZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3R5bGUgPSBbXTtcbiAgICAgICAgdGhpcy5fZm9yRWFjaChzdHlsZXMsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLl9nZXRGcm9tT3B0aW1hbFZhbHVlKGtleSwgc291cmNlKSwgbmFtZSA9IF9hWzBdLCB2YWx1ZSA9IF9hWzFdO1xuICAgICAgICAgICAgc3R5bGUucHVzaChuYW1lICsgXCI6XCIgKyB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3R5bGUuam9pbihcIjtcIik7XG4gICAgfTtcbiAgICBEb21TbmFwc2hvdC5wcm90b3R5cGUuX2dldE5vZGVCeU5hbWUgPSBmdW5jdGlvbiAobm9kZU5hbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9oYXNOb2RlSW5DYWNoZShub2RlTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZE5vZGVUb0NhY2hlKG5vZGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0Tm9kZUZyb21DYWNoZShub2RlTmFtZSk7XG4gICAgfTtcbiAgICBEb21TbmFwc2hvdC5wcm90b3R5cGUuX2dldE5vZGVGcm9tQ2FjaGUgPSBmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVDYWNoZVt0YWddLmNsb25lTm9kZShmYWxzZSk7XG4gICAgfTtcbiAgICBEb21TbmFwc2hvdC5wcm90b3R5cGUuX2dldEZyb21PcHRpbWFsVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlID09PSB2b2lkIDApIHsgc291cmNlID0gdGhpczsgfVxuICAgICAgICB2YXIgX2EgPSB2YWx1ZS5zcGxpdChcIi9cIiksIGtleUluZGV4ID0gX2FbMF0sIHZhbHVlSW5kZXggPSBfYVsxXTtcbiAgICAgICAgcmV0dXJuIFtzb3VyY2UuQ0FDSEVfS0VZU1trZXlJbmRleF0sIHNvdXJjZS5DQUNIRV9WQUxVRVNbdmFsdWVJbmRleF1dO1xuICAgIH07XG4gICAgRG9tU25hcHNob3QucHJvdG90eXBlLmdldE9wdGltYWxWYWx1ZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHRoaXMuU0tJUF9TVFlMRVNba2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIga2V5SW5kZXggPSBzb3VyY2UuQ0FDSEVfS0VZUy5pbmRleE9mKGtleSk7XG4gICAgICAgIHZhciBrZXlWYWx1ZSA9IHNvdXJjZS5DQUNIRV9WQUxVRVMuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgIGlmIChrZXlJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHNvdXJjZS5DQUNIRV9LRVlTLnB1c2goa2V5KTtcbiAgICAgICAgICAgIGtleUluZGV4ID0gc291cmNlLkNBQ0hFX0tFWVMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5VmFsdWUgPT09IC0xKSB7XG4gICAgICAgICAgICBzb3VyY2UuQ0FDSEVfVkFMVUVTLnB1c2godmFsdWUpO1xuICAgICAgICAgICAga2V5VmFsdWUgPSBzb3VyY2UuQ0FDSEVfVkFMVUVTLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtleUluZGV4ICsgXCIvXCIgKyBrZXlWYWx1ZTtcbiAgICB9O1xuICAgIERvbVNuYXBzaG90LnByb3RvdHlwZS5fZ2V0U3RhdGUgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXRhOiB0aGlzLl9jbG9uZU9iamVjdCh0YXJnZXQubWV0YSksXG4gICAgICAgICAgICBpdGVtczogdGhpcy5fZ2V0QXJyYXlDb3B5KHRhcmdldC5pdGVtcyksXG4gICAgICAgICAgICBIVE1MX1NUWUxFOiB0aGlzLl9nZXRBcnJheUNvcHkodGFyZ2V0LkhUTUxfU1RZTEUpLFxuICAgICAgICAgICAgQk9EWV9TVFlMRTogdGhpcy5fZ2V0QXJyYXlDb3B5KHRhcmdldC5CT0RZX1NUWUxFKSxcbiAgICAgICAgICAgIENBQ0hFX0tFWVM6IHRoaXMuX2dldEFycmF5Q29weSh0YXJnZXQuQ0FDSEVfS0VZUyksXG4gICAgICAgICAgICBDQUNIRV9WQUxVRVM6IHRoaXMuX2dldEFycmF5Q29weSh0YXJnZXQuQ0FDSEVfVkFMVUVTKSxcbiAgICAgICAgICAgIEJPRFlfQVRUUklCVVRFUzogdGhpcy5fZ2V0QXJyYXlDb3B5KHRhcmdldC5CT0RZX0FUVFJJQlVURVMpXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBEb21TbmFwc2hvdC5wcm90b3R5cGUuZ2V0UGFyZW50U3R5bGVCeUluZGV4ID0gZnVuY3Rpb24gKGluZGV4LCBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZS5CT0RZX1NUWUxFIHx8IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmRleDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZS5pdGVtc1tpXSAmJiBzb3VyY2UuaXRlbXNbaV0uaW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2UuaXRlbXNbaV0uc3R5bGUgfHwgW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gRG9tU25hcHNob3Q7XG59KCkpO1xuaWYgKHR5cGVvZiB3aW5kb3cuQVVUT1NUQVJUID09PSBcImJvb2xlYW5cIiAmJiB3aW5kb3cuQVVUT1NUQVJUID09PSB0cnVlKSB7XG4gICAgbmV3IERvbVNuYXBzaG90KCk7XG59XG5lbHNlIHtcbiAgICB3aW5kb3cuc25hcHNob3RlciA9IG5ldyBEb21TbmFwc2hvdCgpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBkZWZhdWx0XzEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlckFnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICAgICBob3N0bmFtZTogd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLFxuICAgICAgICBwcm90b2NvbDogd2luZG93LmxvY2F0aW9uLnByb3RvY29sLFxuICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICBzY3JlZW5XaWR0aDogd2luZG93LnNjcmVlbi53aWR0aCxcbiAgICAgICAgc2NyZWVuSGVpZ2h0OiB3aW5kb3cuc2NyZWVuLmhlaWdodCxcbiAgICAgICAgc2NyZWVuQXZhaWxXaWR0aDogd2luZG93LnNjcmVlbi5hdmFpbFdpZHRoLFxuICAgICAgICBzY3JlZW5BdmFpbEhlaWdodDogd2luZG93LnNjcmVlbi5hdmFpbEhlaWdodCxcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRfMTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbGxlY3QtbWV0YS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGRlZmF1bHRfMShlbGVtZW50KSB7XG4gICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL1NWRy9wcm9waWR4Lmh0bWxcbiAgICB2YXIgaXNTVkdOb2RlID0gZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc3ZnJztcbiAgICBpZiAoaXNTVkdOb2RlKSB7XG4gICAgICAgIGVsZW1lbnQuZGF0YXNldC5zdmcgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUgfHwgIWVsZW1lbnQucGFyZW50Tm9kZS5kYXRhc2V0KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIHN2Z1Jlc3VsdCA9IGVsZW1lbnQucGFyZW50Tm9kZS5kYXRhc2V0LnN2ZztcbiAgICBpZiAoc3ZnUmVzdWx0ICYmIGVsZW1lbnQuZGF0YXNldCkge1xuICAgICAgICBlbGVtZW50LmRhdGFzZXQuc3ZnID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHN2Z1Jlc3VsdCA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHN2Z1Jlc3VsdCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBzdmdSZXN1bHQgfHwgZmFsc2U7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZhdWx0XzE7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy1zdmcuanMubWFwIl19
