(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FIREBASE_DEFAULT_CONFIG = {
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
const DOM_NAMESPACES = {
    SVG: 'http://www.w3.org/2000/svg'
};
exports.default = DOM_NAMESPACES;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PSEUDOSELECTORS = [
    ':after', ':before', ':first-line', ':first-letter', ':selection'
];
exports.default = PSEUDOSELECTORS;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ESCAPED_ATTRIBUTES = [
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
const INHERIT_STYLE_ATTRIBUTES = [
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
const NODE_NAMES_TO_IGNORE = [
    'NOSCRIPT', 'SCRIPT', 'STYLE', '#comment', '#document'
];
exports.default = NODE_NAMES_TO_IGNORE;

},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NODE_NAMES_TO_REPLACE = {
    'IFRAME': 'DIV'
};
exports.default = NODE_NAMES_TO_REPLACE;

},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SKIPPED_STYLE_ATTRIBUTES = {
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
const escaped_attributes_1 = require("./constants/escaped-attributes");
const firebase_default_config_1 = require("./config/firebase-default-config");
const inherit_style_attributes_1 = require("./constants/inherit-style-attributes");
const skipped_style_attributes_1 = require("./constants/skipped-style-attributes");
const dom_namespaces_1 = require("./constants/dom-namespaces");
const node_names_to_ignore_1 = require("./constants/node-names-to-ignore");
const node_names_to_replace_1 = require("./constants/node-names-to-replace");
const dom_pseudoselectors_1 = require("./constants/dom-pseudoselectors");
const collect_meta_1 = require("./utils/collect-meta");
class DomSnapshot {
    /*
     */
    constructor(config = {
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
    }, fbConfig = false) {
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
    _normalizeAttributeName(attrName) {
        return String(attrName)
            .trim()
            .toLowerCase();
    }
    _isSafeAttribute(attrName) {
        if (this._USE_SAFE_ATTRIBUTES &&
            this.ESCAPED_ATTRIBUTES.includes(this._normalizeAttributeName(attrName))) {
            return false;
        }
        return (!attrName.includes("ng-") &&
            !attrName.includes('"') &&
            !attrName.includes("data-uid_") &&
            !attrName.includes("style"));
    }
    _extractNodeAttributes(node) {
        return Array.prototype.map
            .call(node.attributes, el => {
            return [el.nodeName, this._patchAttribute(el.nodeName, el.nodeValue)];
        })
            .filter(([attrName]) => {
            return this._isSafeAttribute(attrName);
        });
    }
    resetTarget() {
        this.setBodyNode(false);
        this.setHtmlNode(false);
        this.setHeadNode(false);
    }
    /// set rootNode for restoring
    restoreTo(node) {
        this.setBodyNode(node);
    }
    _collectMeta() {
        return collect_meta_1.default();
    }
    _patchAttribute(name, value) {
        if (["src", "href"].includes(name)) {
            const firstChar = String(value).charAt(0);
            const secondChar = String(value).charAt(1);
            const hasHash = secondChar === "#" || firstChar === "#";
            const hasTwoSlashes = firstChar === secondChar && firstChar === "/";
            const hasPath = secondChar === "/";
            if (!hasTwoSlashes && (hasPath || hasHash)) {
                if (this.meta.hostname && this.meta.protocol) {
                    return `${this.meta.protocol}//${this.meta.hostname}${value}`;
                }
            }
        }
        return value;
    }
    _isSVG(element) {
        return element.namespaceURI === this._NAMESPACES.SVG;
    }
    _getBodyAttributes() {
        return this._extractNodeAttributes(this._getBodyNode());
    }
    _getBodyStyle() {
        return this._createStyleObject(this._getStyleForNode(this._getBodyNode()));
    }
    _getHTMLStyle() {
        return this._getBodyParentStyle();
    }
    _getBodyParentStyle() {
        const body = this._getBodyNode();
        let styleNode = [];
        if (body.parentNode) {
            styleNode = this._getStyleForNode(body.parentNode);
        }
        return this._createStyleObject(styleNode);
        // get optimal style, save as special node
    }
    addMeta(keyOrObject, value, target = this) {
        if (typeof keyOrObject === "object") {
            target.meta = Object.assign(target.meta, keyOrObject);
        }
        else {
            target.meta[keyOrObject] = value;
        }
        return this;
    }
    getMeta() {
        return Object.assign({}, this.meta);
    }
    clearMeta() {
        this.meta = {};
    }
    _addFbScript(resolve, reject, config) {
        const head = this._getDocument().getElementsByTagName("head")[0];
        const script = this._getDocument().createElement("script");
        script.type = "text/javascript";
        script.onload = () => {
            window.firebase.initializeApp(config);
            this.firebase = window.firebase;
            this.isLoaded = true;
            resolve(this);
        };
        script.onerror = e => {
            reject(e);
        };
        script.src = "https://www.gstatic.com/firebasejs/4.2.0/firebase.js";
        head.appendChild(script);
    }
    intFirebase(fbConfig) {
        this._loaded = new Promise((resolve, reject) => {
            if (typeof window.firebase !== "undefined") {
                this.firebase = window.firebase;
                this.isLoaded = true;
                return resolve(this);
            }
            this._addFbScript(resolve, reject, fbConfig);
        });
        return this._loaded;
    }
    loaded() {
        return this._loaded;
    }
    _getHead() {
        return (this._head ||
            this._getBodyNode().parentNode.querySelector("head") ||
            this._getDocument().head ||
            this._getDocument().getElementsByTagName("head")[0]);
    }
    _cleanHeadNodeFromStyles() {
        const head = this._getHead();
        let stylesToRemove = head.getElementsByTagName("style");
        if (stylesToRemove.length) {
            for (let i = 0; i < stylesToRemove.length; i++) {
                head.removeChild(stylesToRemove[i]);
            }
        }
        let styleLinksToRemove = head.querySelectorAll('link[rel="stylesheet"]');
        if (styleLinksToRemove.length) {
            for (let i = 0; i < styleLinksToRemove.length; i++) {
                head.removeChild(styleLinksToRemove[i]);
            }
        }
    }
    _addStyleNode(css) {
        const style = this._getDocument().createElement("style");
        const head = this._getHead();
        style.type = "text/css";
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        }
        else {
            style.appendChild(this._getDocument().createTextNode(css));
        }
        head.appendChild(style);
    }
    _getDomNodeFromArgument(selector) {
        let target = typeof selector === "object"
            ? selector
            : document.querySelector(selector);
        return target;
    }
    _cleanDomNode(target) {
        while (target.firstChild) {
            target.removeChild(target.firstChild);
        }
    }
    takeSnapshot(selector) {
        return this.createSnapshot(this._getDomNodeFromArgument(selector));
    }
    renderSnapshot(selector, snapshot, rewriteDomContent = true) {
        let target = this._getDomNodeFromArgument(selector);
        if (target === null) {
            throw new Error(`unable to find target by selector ${selector}`);
        }
        if (rewriteDomContent) {
            this._cleanDomNode(target);
        }
        this.restoreWorldFrom(snapshot, target);
    }
    showSnapshot(id, selector = false) {
        return this.getSnapshotById(id).then(snapshot => {
            this.destroyWorld();
            let targetNode = document.querySelector(String(selector).valueOf()) ||
                this._getBodyNode();
            let source = this.setState(this, snapshot);
            this.restoreWorldFrom(source, targetNode);
        });
    }
    restoreSnapshot(id) {
        return this._showSnapshot(id);
    }
    _fbAddToSnapshotList(id, data) {
        this.firebase
            .database()
            .ref(`snapshots-list/${id}`)
            .set(data);
    }
    _fbSetSnapshot(id, snapshot) {
        this.firebase
            .database()
            .ref(`snapshots/${id}`)
            .set(snapshot);
    }
    _fbGetSnapshot(id) {
        return new Promise(resolve => {
            this.firebase
                .database()
                .ref("snapshots/" + id)
                .once("value")
                .then(snapshot => {
                return resolve(snapshot.val());
            });
        });
    }
    getSnapshotById(id) {
        return this._fbGetSnapshot(id);
    }
    _showSnapshot(id = "1502312089479", rootElement = window.document) {
        return this.getSnapshotById(id).then(snapshot => {
            this.destroyWorld();
            this.setState(this, snapshot);
            this.restoreWorld(rootElement, this);
        });
    }
    _clearState(target) {
        target.items = [];
        target.CACHE_KEYS = [];
        target.BODY_STYLE = [];
        target.HTML_STYLE = [];
        target.CACHE_VALUES = [];
        target.BODY_ATTRIBUTES = [];
    }
    _getArrayCopy(element) {
        if (typeof element !== "object" || element === null) {
            return [];
        }
        return element.slice(0);
    }
    _cloneObject(obj) {
        if (typeof obj === "undefined" || obj === null) {
            return {};
        }
        return JSON.parse(JSON.stringify(obj));
    }
    _copyWorld(rootNode = false, source) {
        return this._copyWorldTo(rootNode, source);
    }
    _copyWorldTo(rootNode, source) {
        const pseudoSelectorsStylesArray = [];
        const reindexMap = {};
        let items = source.items;
        source.meta = this._collectMeta();
        let target = rootNode || this._getBodyNode();
        let isBodyNodeRoot = target === this._getBodyNode();
        if (isBodyNodeRoot) {
            source.BODY_ATTRIBUTES = this._getBodyAttributes();
            source.HTML_STYLE = this._styleObjectToOptimalStyleArray(this._getHTMLStyle(), undefined, source);
            source.BODY_STYLE = this._styleObjectToOptimalStyleArray(this._getBodyStyle(), undefined, source);
        }
        let capturedNodes = this._getAllDomNodes(target);
        if (!isBodyNodeRoot) {
            capturedNodes.unshift(rootNode);
        }
        const nodesMap = new WeakMap();
        for (let i = 0; i < capturedNodes.length; i++) {
            let item = capturedNodes[i];
            nodesMap.set(item, i);
            let nodeStyle = this._getStyleForNode(item);
            if (this._shouldTakeElement(item, nodeStyle)) {
                if (item.dataset && this._USE_PSEUDOSELECTORS) {
                    let pseudoselecorStyles = this._getStylesForPseudoSelectors(item, source);
                    if (pseudoselecorStyles) {
                        pseudoselecorStyles.index = i;
                        pseudoSelectorsStylesArray.push(pseudoselecorStyles);
                    }
                }
                items.push(this._serializeNode(nodeStyle, item, i, source, nodesMap));
                reindexMap[i] = items.length - 1;
            }
        }
        if (this._USE_PSEUDOSELECTORS) {
            this._forEach(pseudoSelectorsStylesArray, el => {
                let item = items[reindexMap[el.index]];
                item.pseudoselectors = el;
            });
        }
        if (this._USE_VACUUM) {
            source.items = this._vacuum(items);
        }
        if (this._USE_STYLES_CLEANUP) {
            this._cleanupStyles(source);
        }
    }
    _getHtmlNode() {
        return this._html || this._getBodyNode().parentNode || this._getBodyNode();
    }
    restoreWorld(target = false, source) {
        if (!target) {
            //this._setHTMLStyle(source);
            this._setBodyAttributes(source);
            //this._setBodyStyle(source);
        }
        return this.restoreWorldFrom(source, target);
    }
    _forEach(array, action) {
        const length = array.length;
        for (let i = 0; i < length; i++) {
            action(array[i], i);
        }
    }
    restoreWorldFrom(source, target = false) {
        const stylesToUppend = [];
        const fragment = this._getDocument().createDocumentFragment();
        this.uidPrefix =
            "d" +
                Math.random()
                    .toString(36)
                    .slice(-2);
        const nodesIndex = {};
        this._forEach(source.items, el => {
            let node = this._createNode(el, stylesToUppend, source);
            nodesIndex[el.index] = node;
            this._insertNode(node, el, fragment, nodesIndex);
        });
        stylesToUppend.push(`html { ${this._getNodeStyleText(source.HTML_STYLE, source)} }`);
        stylesToUppend.push(`body { ${this._getNodeStyleText(source.BODY_STYLE, source)} }`);
        this._addStyleNode(stylesToUppend.reverse().join("\n"));
        let rootNode = target || this._getBodyNode();
        rootNode.appendChild(fragment);
        this.uidPrefix = null;
        return this;
    }
    _destroyBodyAttributes() {
        const attributes = this._getBodyAttributes();
        const body = this._getBodyNode();
        this._forEach(attributes, ([name]) => {
            body.removeAttribute(name);
        });
        return this;
    }
    destroyWorld() {
        this._destroyBodyAttributes();
        this._getBodyNode().innerHTML = "";
        this._cleanHeadNodeFromStyles();
        return this;
    }
    _createStyleObject(styleNode) {
        const styleObject = {};
        if (!styleNode.length) {
            return styleObject;
        }
        for (let i = 0; i < styleNode.length; i++) {
            const propertyName = styleNode[i];
            styleObject[propertyName] = styleNode.getPropertyValue(propertyName);
        }
        return styleObject;
    }
    _isDefaultStyle(name, value) {
        return false;
        // return this.BODY_STYLE[name] === value || false;
    }
    _vacuum(items) {
        const itemsToRemove = [];
        const lastItemIndex = items.length - 1;
        this._forEach(items, (item, index) => {
            if (lastItemIndex !== index && item.nodeName === "#text") {
                let nextNode = items[index + 1];
                let hasSameParent = nextNode.parent === item.parent;
                let hasSameNodeName = nextNode.nodeName === item.nodeName;
                if (hasSameParent && hasSameNodeName) {
                    nextNode.textContent = `${item.textContent}${nextNode.textContent}`;
                    itemsToRemove.push(index);
                }
            }
        });
        return items.filter((el, index) => !itemsToRemove.includes(index));
    }
    _cleanupStyles(source) {
        const stylesToRemove = [];
        const styledItems = source.items.filter(e => e.styles.length);
        // collect browser default styles
        this._forEach(source.HTML_STYLE, style => {
            if (styledItems.every(el => el.styles.includes(style))) {
                if (source.BODY_STYLE.includes(style)) {
                    stylesToRemove.push(style);
                }
            }
        });
        // exclude collected stules
        source.HTML_STYLE = source.HTML_STYLE.filter(el => !stylesToRemove.includes(el));
        source.BODY_STYLE = source.BODY_STYLE.filter(el => !stylesToRemove.includes(el));
        this._forEach(source.items, item => {
            if (this._isNotEmptyArray(item.styles)) {
                item.styles = item.styles.filter(el => !stylesToRemove.includes(el));
            }
        });
        source.BODY_STYLE = source.BODY_STYLE.filter(el => !stylesToRemove.includes(el));
    }
    _getNameForNode(nodeName) {
        return this.NODE_NAMES_TO_REPLACE[nodeName] || nodeName;
    }
    _getParentForNode(node, nodesMap) {
        let parentId = nodesMap.has(node.parentNode)
            ? nodesMap.get(node.parentNode)
            : 0;
        let parent = parentId ? parentId : 0;
        if (!this.isNotUndefined(parent)) {
            return 0;
        }
        return parent;
    }
    _getNodeTextContent(node) {
        return node.children ? "" : node.data;
    }
    _arrayToObject(arr = []) {
        return arr.reduce((result, [key, value]) => {
            result[key] = value;
            return result;
        }, {});
    }
    getSnapshotsDiff(s1, s2) {
        let firstState = this.setState({}, s1);
        let secondState = this.setState({}, s2);
        let firstStyles = firstState.items
            .filter(e => e.styles)
            .map(el => {
            let item = this._setNodeStyleFromStyleArray(el.styles, {
                style: {}
            }, firstState);
            return Object.assign({}, el, item);
        });
        let secondStyles = secondState.items
            .filter(e => e.styles)
            .map(el => {
            let item = this._setNodeStyleFromStyleArray(el.styles, {
                style: {}
            }, secondState);
            return Object.assign({}, el, item);
        });
        let diffArray = new Array(firstState.items.length).fill(null);
        return diffArray.map((_, index) => {
            return {
                firstNode: firstStyles[index],
                secondNode: secondStyles[index],
                stylesDiff: this._getAllKeysDiff(firstStyles[index].style, secondStyles[index].style),
                attributesDiff: this._getAllKeysDiff(this._arrayToObject(firstStyles[index].attributes), this._arrayToObject(secondStyles[index].attributes))
            };
        });
    }
    _serializeNode(styleNode, node, index, source, nodesMap) {
        let payload = this._formatStyle(styleNode, node, index, source, nodesMap);
        return payload;
    }
    _formatStyle(styleNode, node, index, source, nodesMap) {
        const result = {
            styles: [],
            nodeName: this._getNameForNode(node.nodeName),
            index,
            attributes: [],
            nodeType: node.nodeType,
            parent: this._getParentForNode(node, nodesMap),
            isSVG: this._isSVG(node),
            textContent: this._getNodeTextContent(node)
        };
        const style = this._createStyleObject(styleNode);
        // if (result.isSVG && result.nodeName !== 'svg') {
        // result.styles = [];
        // } else {
        result.styles = this._styleObjectToOptimalStyleArray(style, result.parent, source);
        // }
        if (!this.restrictedNodeTypes.includes(node.nodeType)) {
            result.attributes = this._extractNodeAttributes(node);
        }
        return result;
    }
    _getAllDomNodes(node) {
        let listOfNodes = [];
        let walk = this._getDocument().createTreeWalker(node, NodeFilter.SHOW_ALL, {
            acceptNode: node => {
                return !this.NODE_NAMES_TO_IGNORE.includes(node.nodeName)
                    ? NodeFilter.FILTER_ACCEPT
                    : NodeFilter.FILTER_REJECT;
            }
        });
        let n = null;
        while ((n = walk.nextNode())) {
            listOfNodes.push(n);
        }
        return listOfNodes;
    }
    _fbSaveSnapshot(id, state) {
        this._fbSetSnapshot(id, state);
        this._fbAddToSnapshotList(id, { visible: true, meta: state.meta });
    }
    createSnapshot(rootNode = false) {
        let source = {};
        this._clearState(source);
        this._copyWorld(rootNode, source);
        this.addMeta("Date", Date.now(), source);
        this.addMeta("URL", window.location.href, source);
        this.addMeta("Browser", window.navigator.userAgent, source);
        let state = this._getState(source);
        return state;
    }
    saveSnapshot(customId = false, state) {
        const id = customId || Date.now();
        if (!state) {
            state = this.createSnapshot();
        }
        this._fbSaveSnapshot(id, state);
        console.log(`snapshot ID is: ${id}`);
        return id;
    }
    _setBodyAttributes(source) {
        const attributes = source.BODY_ATTRIBUTES;
        const body = this._getBodyNode();
        this._forEach(attributes, ([name, value]) => {
            body.setAttribute(name, value);
        });
        return this;
    }
    setBodyNode(node) {
        this._body = node;
    }
    _setBodyStyle(source) {
        this._setNodeStyleFromStyleArray(source.BODY_STYLE, this._getBodyNode(), source);
        return this;
    }
    setHeadNode(node) {
        this._head = node;
    }
    _setHTMLStyle(source) {
        const node = this._getHtmlNode();
        if (node) {
            this._setNodeStyleFromStyleArray(source.HTML_STYLE, node, source);
        }
        return this;
    }
    setHtmlNode(node) {
        this._html = node;
    }
    _setNodeStyleFromStyleArray(styles, node, source) {
        this._forEach(styles, key => {
            const [name, value] = this._getFromOptimalValue(key, source);
            node.style[name] = value;
        });
        return node;
    }
    setMeta(meta) {
        if (typeof meta !== "object") {
            console.log("meta should be an object");
            return;
        }
        this.meta = Object.assign({}, meta);
        return this;
    }
    setState(target = this, state) {
        target.meta = this._cloneObject(state.meta) || this.meta || {};
        target.items = this._getArrayCopy(state.items) || [];
        target.CACHE_KEYS = this._getArrayCopy(state.CACHE_KEYS) || [];
        target.CACHE_VALUES = this._getArrayCopy(state.CACHE_VALUES) || [];
        target.BODY_STYLE = this._getArrayCopy(state.BODY_STYLE) || [];
        target.HTML_STYLE = this._getArrayCopy(state.HTML_STYLE) || [];
        target.BODY_ATTRIBUTES = this._getArrayCopy(state.BODY_ATTRIBUTES) || [];
        return target;
    }
    setStyleFromObject(node, styleObject) {
        this._forEach(Object.keys(styleObject), key => {
            node.style[key] = styleObject[key];
        });
        return this;
    }
    /// set rootNode for capturing
    setTarget(node) {
        this.setBodyNode(node);
        this.setHtmlNode(node.parentNode);
        this.setHeadNode(node.parentNode);
    }
    _styleObjectToOptimalStyleArray(styleObject = {}, parentIndex, source) {
        let parentStyle = [];
        if (this.isNotUndefined(parentIndex)) {
            parentStyle = this.getParentStyleByIndex(parentIndex, source);
        }
        const styles = [];
        this._forEach(Object.keys(styleObject), el => {
            let styleKey = this.getOptimalValue(el, styleObject[el], source);
            if (styleKey &&
                !(this.INHERIT.includes(el) && parentStyle.includes(styleKey))) {
                styles.push(styleKey);
            }
        });
        return styles;
    }
    skipStyle(name, value) {
        return this._isDefaultStyle(name, value);
    }
    _shouldTakeElement(node, nodeStyle) {
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
                // node.dataset.ignored = true;
            }
            return false;
        }
        if (!this.restrictedNodeTypes.includes(node.nodeType)) {
            if (this.skipDisplayNone && node.style && nodeStyle.length) {
                if (nodeStyle.display === "none") {
                    //   node.dataset.ignored = true;
                    return false;
                }
            }
        }
        return true;
    }
    isNotUndefined(el) {
        return el !== void 0;
    }
    _isNotEmptyArray(arr) {
        return arr && arr.length;
    }
    _hasTextContent(node = { textContent: "" }) {
        return typeof node.textContent === "string" && node.textContent.length;
    }
    _hasNodeInCache(nodeName) {
        return nodeName in this.nodeCache;
    }
    _addNodeToCache(nodeName) {
        this.nodeCache[nodeName] = this._getDocument().createElement(nodeName);
    }
    _getTextNode(textContent) {
        return this._getDocument().createTextNode(textContent);
    }
    _getSVGNode(nodeName) {
        return this._getDocument().createElementNS(this._NAMESPACES.SVG, nodeName);
    }
    _addTextContent(node, params) {
        if (this._hasTextContent(params)) {
            node.textContent = params.textContent;
        }
    }
    _createNode(params = {
        nodeType: "3",
        index: 3,
        textContent: "noop",
        attributes: [],
        styles: [],
        parent: null,
        isSVG: false,
        pseudoselectors: undefined,
        nodeName: "DIV"
    }, styles, source) {
        let node = null;
        const { nodeName, textContent, nodeType, isSVG } = params;
        if (this.restrictedNodeTypes.includes(parseInt(nodeType))) {
            node = isSVG ? this._getSVGNode("text") : this._getTextNode(textContent);
        }
        else if (isSVG) {
            node = this._getSVGNode(nodeName);
        }
        else {
            node = this._getNodeByName(nodeName);
            this._addTextContent(node, params);
        }
        if (typeof node.setAttribute === "function") {
            node.setAttribute(this._nodeSelectorName(), params.index);
        }
        if (this._isNotEmptyArray(params.attributes)) {
            try {
                this._forEach(params.attributes, ([name, value]) => {
                    if (name) {
                        if (isSVG) {
                            if (name.includes("data-")) {
                                node.setAttribute(name, value);
                            }
                            else {
                                node.setAttributeNS(null, name, value);
                            }
                        }
                        else {
                            if (this._isSafeAttribute(name)) {
                                if (name === "id") {
                                    // don't handle ids
                                    return;
                                }
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
        // if (node.dataset) {
        //   node.dataset.parent = params.parent;
        // }
        return node;
    }
    _styleTextForNode(index, styles, postfix = "", source) {
        return `[${this._nodeSelectorName()}="${this._nodeSelectorValue(index)}"]${postfix} { ${this._getNodeStyleText(styles, source)} }`;
    }
    _nodeSelectorName() {
        return `data-uid_${this._nodeSelectorDatasetName()}`;
    }
    _nodeSelectorDatasetName() {
        if (this.uidPrefix !== null) {
            return `${this.uidPrefix}`;
        }
        else {
            return "index";
        }
    }
    _nodeSelectorValue(index) {
        return index;
    }
    _insertNode(node, obj, fragment, nodesIndex) {
        let parentId = obj.parent;
        // const selector = `[${this._nodeSelectorName()}="${this._nodeSelectorValue(
        //   parentId
        // )}"]`;
        if (parentId === 0 && fragment.childNodes.length === 0) {
            fragment.appendChild(node);
            return;
        }
        // || nodesIndex[parentId]
        const parent = nodesIndex[parentId] || fragment;
        if (node === parent) {
            return;
        }
        if (typeof parent.appendChild === 'function') {
            try {
                parent.appendChild(node);
            }
            catch (e) {
                fragment.appendChild(node);
            }
        }
        else {
            fragment.appendChild(node);
        }
    }
    _getValueOrEmptyString(obj, key) {
        if (key in obj) {
            return obj[key];
        }
        else {
            return "";
        }
    }
    _getAllKeysDiff(first = {}, second = {}) {
        let fKeys = Object.keys(first);
        let sKeys = Object.keys(second);
        let allKeys = Array.from(new Set([].concat(fKeys, sKeys)));
        let diffs = {};
        allKeys.forEach(key => {
            let fValue = this._getValueOrEmptyString(first, key);
            let sValue = this._getValueOrEmptyString(second, key);
            if (fValue !== sValue) {
                diffs[key] = [fValue, sValue];
            }
        });
        return Object.keys(diffs).length ? diffs : false;
    }
    _getEqualKeysDiff(first, second) {
        let diffs = {};
        Object.keys(first).map(key => {
            if (first[key] !== second[key]) {
                diffs[key] = [first[key], second[key]];
            }
        });
        return Object.keys(diffs).length ? diffs : false;
    }
    _getStylesForPseudoSelectors(node, source) {
        const before = this._createStyleObject(this._getStyleForNode(node, ":before"));
        const after = this._createStyleObject(this._getStyleForNode(node, ":after"));
        const styleDiff = this._getEqualKeysDiff(before, after);
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
    }
    _getStyleForNode(element, pseudoselecor = null) {
        if (this.restrictedNodeTypes.includes(element.nodeType)) {
            return [];
        }
        let style = [];
        try {
            style = window.getComputedStyle(element, pseudoselecor);
        }
        catch (e) {
            console.log(e, element, element.nodeType);
        }
        return style;
    }
    _getBodyNode() {
        //legacy hook
        if ("getBodyNode" in this && typeof this.getBodyNode === "function") {
            return this.getBodyNode();
        }
        return this._body || window.document.body;
    }
    _getDocument() {
        return document;
    }
    _getNodeStyleText(styles, source) {
        const style = [];
        this._forEach(styles, key => {
            const [name, value] = this._getFromOptimalValue(key, source);
            style.push(`${name}:${value}`);
        });
        return style.join(";");
    }
    _getNodeByName(nodeName) {
        if (!this._hasNodeInCache(nodeName)) {
            this._addNodeToCache(nodeName);
        }
        return this._getNodeFromCache(nodeName);
    }
    _getNodeFromCache(tag) {
        return this.nodeCache[tag].cloneNode(false);
    }
    _getFromOptimalValue(value, source = this) {
        const [keyIndex, valueIndex] = value.split("/");
        return [source.CACHE_KEYS[keyIndex], source.CACHE_VALUES[valueIndex]];
    }
    getOptimalValue(key, value, source) {
        if (this.SKIP_STYLES[key] === value) {
            return false;
        }
        let keyIndex = source.CACHE_KEYS.indexOf(key);
        let keyValue = source.CACHE_VALUES.indexOf(value);
        if (keyIndex === -1) {
            source.CACHE_KEYS.push(key);
            keyIndex = source.CACHE_KEYS.length - 1;
        }
        if (keyValue === -1) {
            source.CACHE_VALUES.push(value);
            keyValue = source.CACHE_VALUES.length - 1;
        }
        return `${keyIndex}/${keyValue}`;
    }
    _getState(target) {
        return {
            meta: this._cloneObject(target.meta),
            items: this._getArrayCopy(target.items),
            HTML_STYLE: this._getArrayCopy(target.HTML_STYLE),
            BODY_STYLE: this._getArrayCopy(target.BODY_STYLE),
            CACHE_KEYS: this._getArrayCopy(target.CACHE_KEYS),
            CACHE_VALUES: this._getArrayCopy(target.CACHE_VALUES),
            BODY_ATTRIBUTES: this._getArrayCopy(target.BODY_ATTRIBUTES)
        };
    }
    getParentStyleByIndex(index, source) {
        if (typeof index !== "number") {
            return source.BODY_STYLE || [];
        }
        else {
            for (let i = 0; i < index; i++) {
                if (source.items[i] && source.items[i].index === index) {
                    return source.items[i].style || [];
                }
            }
            return [];
        }
    }
}
if (typeof window.AUTOSTART === "boolean" && window.AUTOSTART === true) {
    new DomSnapshot();
}
else {
    window.snapshoter = new DomSnapshot();
}

},{"./config/firebase-default-config":1,"./constants/dom-namespaces":2,"./constants/dom-pseudoselectors":3,"./constants/escaped-attributes":4,"./constants/inherit-style-attributes":5,"./constants/node-names-to-ignore":6,"./constants/node-names-to-replace":7,"./constants/skipped-style-attributes":8,"./utils/collect-meta":10}],10:[function(require,module,exports){
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

},{}]},{},[9])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUvbGlmZWFydC9yZXBvc2l0b3JpZXMvZG9tLXNuYXBzaG90L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjb25maWcvZmlyZWJhc2UtZGVmYXVsdC1jb25maWcuanMiLCJjb25zdGFudHMvZG9tLW5hbWVzcGFjZXMuanMiLCJjb25zdGFudHMvZG9tLXBzZXVkb3NlbGVjdG9ycy5qcyIsImNvbnN0YW50cy9lc2NhcGVkLWF0dHJpYnV0ZXMuanMiLCJjb25zdGFudHMvaW5oZXJpdC1zdHlsZS1hdHRyaWJ1dGVzLmpzIiwiY29uc3RhbnRzL25vZGUtbmFtZXMtdG8taWdub3JlLmpzIiwiY29uc3RhbnRzL25vZGUtbmFtZXMtdG8tcmVwbGFjZS5qcyIsImNvbnN0YW50cy9za2lwcGVkLXN0eWxlLWF0dHJpYnV0ZXMuanMiLCJpbmRleC5qcyIsInV0aWxzL2NvbGxlY3QtbWV0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMTlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBGSVJFQkFTRV9ERUZBVUxUX0NPTkZJRyA9IHtcbiAgICBhcGlLZXk6ICdBSXphU3lBODR2YWdfUzBRU083ajFFZmY0dlpKRWpkTGM2d1B4ME0nLFxuICAgIGF1dGhEb21haW46ICdkb20tc25hcHNob3QuZmlyZWJhc2VhcHAuY29tJyxcbiAgICBkYXRhYmFzZVVSTDogJ2h0dHBzOi8vZG9tLXNuYXBzaG90LmZpcmViYXNlaW8uY29tJyxcbiAgICBwcm9qZWN0SWQ6ICdkb20tc25hcHNob3QnLFxuICAgIHN0b3JhZ2VCdWNrZXQ6ICdkb20tc25hcHNob3QuYXBwc3BvdC5jb20nLFxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiAnNTc4MDA5MzU0MTcxJ1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEZJUkVCQVNFX0RFRkFVTFRfQ09ORklHO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmlyZWJhc2UtZGVmYXVsdC1jb25maWcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBET01fTkFNRVNQQUNFUyA9IHtcbiAgICBTVkc6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zydcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBET01fTkFNRVNQQUNFUztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRvbS1uYW1lc3BhY2VzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUFNFVURPU0VMRUNUT1JTID0gW1xuICAgICc6YWZ0ZXInLCAnOmJlZm9yZScsICc6Zmlyc3QtbGluZScsICc6Zmlyc3QtbGV0dGVyJywgJzpzZWxlY3Rpb24nXG5dO1xuZXhwb3J0cy5kZWZhdWx0ID0gUFNFVURPU0VMRUNUT1JTO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZG9tLXBzZXVkb3NlbGVjdG9ycy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEVTQ0FQRURfQVRUUklCVVRFUyA9IFtcbiAgICAvL2JvZHlcbiAgICAnb25hZnRlcnByaW50JyxcbiAgICAnb25iZWZvcmVwcmludCcsXG4gICAgJ29uYmVmb3JldW5sb2FkJyxcbiAgICAnb25lcnJvcicsXG4gICAgJ29uaGFzaGNoYW5nZScsXG4gICAgJ29ubG9hZCcsXG4gICAgJ29ubWVzc2FnZScsXG4gICAgJ29ub2ZmbGluZScsXG4gICAgJ29ub25saW5lJyxcbiAgICAnb25wYWdlaGlkZScsXG4gICAgJ29ucGFnZXNob3cnLFxuICAgICdvbnBvcHN0YXRlJyxcbiAgICAnb25yZXNpemUnLFxuICAgICdvbnN0b3JhZ2UnLFxuICAgICdvbnVubG9hZCcsXG4gICAgLy9mb3Jtc1xuICAgICdvbmJsdXInLFxuICAgICdvbmNoYW5nZScsXG4gICAgJ29uY29udGV4dG1lbnUnLFxuICAgICdvbmZvY3VzJyxcbiAgICAnb25pbnB1dCcsXG4gICAgJ29uaW52YWxpZCcsXG4gICAgJ29ucmVzZXQnLFxuICAgICdvbnNlYXJjaCcsXG4gICAgJ29uc2VsZWN0JyxcbiAgICAnb25zdWJtaXQnLFxuICAgIC8va2V5Ym9hcmRcbiAgICAnb25rZXlkb3duJyxcbiAgICAnb25rZXlwcmVzcycsXG4gICAgJ29ua2V5dXAnLFxuICAgIC8vbW91c2VcbiAgICAnb25jbGljaycsXG4gICAgJ29uZGJsY2xpY2snLFxuICAgICdvbm1vdXNlZG93bicsXG4gICAgJ29ubW91c2Vtb3ZlJyxcbiAgICAnb25tb3VzZW91dCcsXG4gICAgJ29ubW91c2VvdmVyJyxcbiAgICAnb25tb3VzZXVwJyxcbiAgICAnb25tb3VzZXdoZWVsJyxcbiAgICAnb253aGVlbCcsXG4gICAgLy9EcmFnIEV2ZW50c1xuICAgICdvbmRyYWcnLFxuICAgICdvbmRyYWdlbmQnLFxuICAgICdvbmRyYWdlbnRlcicsXG4gICAgJ29uZHJhZ2xlYXZlJyxcbiAgICAnb25kcmFnb3ZlcicsXG4gICAgJ29uZHJhZ3N0YXJ0JyxcbiAgICAnb25kcm9wJyxcbiAgICAnb25zY3JvbGwnLFxuICAgIC8vQ2xpcGJvYXJkIEV2ZW50c1xuICAgICdvbmNvcHknLFxuICAgICdvbmN1dCcsXG4gICAgJ29ucGFzdGUnLFxuICAgIC8vIE1lZGlhIEV2ZW50c1xuICAgICdvbmFib3J0JyxcbiAgICAnb25jYW5wbGF5JyxcbiAgICAnb25jYW5wbGF5dGhyb3VnaCcsXG4gICAgJ29uY3VlY2hhbmdlJyxcbiAgICAnb25kdXJhdGlvbmNoYW5nZScsXG4gICAgJ29uZW1wdGllZCcsXG4gICAgJ29uZW5kZWQnLFxuICAgICdvbmVycm9yJyxcbiAgICAnb25sb2FkZWRkYXRhJyxcbiAgICAnb25sb2FkZWRtZXRhZGF0YScsXG4gICAgJ29ubG9hZHN0YXJ0JyxcbiAgICAnb25wYXVzZScsXG4gICAgJ29ucGxheScsXG4gICAgJ29ucGxheWluZycsXG4gICAgJ29ucHJvZ3Jlc3MnLFxuICAgICdvbnJhdGVjaGFuZ2UnLFxuICAgICdvbnNlZWtlZCcsXG4gICAgJ29uc2Vla2luZycsXG4gICAgJ29uc3RhbGxlZCcsXG4gICAgJ29uc3VzcGVuZCcsXG4gICAgJ29udGltZXVwZGF0ZScsXG4gICAgJ29udm9sdW1lY2hhbmdlJyxcbiAgICAnb253YWl0aW5nJyxcbiAgICAvLyBNaXNjIEV2ZW50c1xuICAgICdvbnRvZ2dsZSdcbl07XG5leHBvcnRzLmRlZmF1bHQgPSBFU0NBUEVEX0FUVFJJQlVURVM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lc2NhcGVkLWF0dHJpYnV0ZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJTkhFUklUX1NUWUxFX0FUVFJJQlVURVMgPSBbXG4gICAgJ2F6aW11dGgnLCAnYm9yZGVyLWNvbGxhcHNlJywgJ2JvcmRlci1zcGFjaW5nJywgJ2NhcHRpb24tc2lkZScsXG4gICAgJ2NvbG9yJywgJ2N1cnNvcicsICdkaXJlY3Rpb24nLCAnZWxldmF0aW9uJywgJ2VtcHR5LWNlbGxzJyxcbiAgICAnZm9udC1mYW1pbHknLCAnZm9udC1zaXplJywgJ2ZvbnQtc3R5bGUnLCAnZm9udC12YXJpYW50JywgJ2ZvbnQtd2VpZ2h0JyxcbiAgICAnZm9udCcsICdsZXR0ZXItc3BhY2luZycsICdsaW5lLWhlaWdodCcsICdsaXN0LXN0eWxlLWltYWdlJywgJ2xpc3Qtc3R5bGUtcG9zaXRpb24nLFxuICAgICdsaXN0LXN0eWxlLXR5cGUnLCAnbGlzdC1zdHlsZScsICdvcnBoYW5zJywgJ3BpdGNoLXJhbmdlJywgJ3BpdGNoJywgJ3F1b3RlcycsICdyaWNobmVzcycsXG4gICAgJ3NwZWFrLWhlYWRlcicsICdzcGVhay1udW1lcmFsJywgJ3NwZWFrLXB1bmN0dWF0aW9uJywgJ3NwZWFrJyxcbiAgICAnc3BlZWNoLXJhdGUnLCAnc3RyZXNzJywgJ3RleHQtYWxpZ24nLCAndGV4dC1pbmRlbnQnLCAndGV4dC10cmFuc2Zvcm0nLFxuICAgICd2aXNpYmlsaXR5JywgJ3ZvaWNlLWZhbWlseScsICd2b2x1bWUnLCAnd2hpdGUtc3BhY2UnLCAnd2lkb3dzJywgJ3dvcmQtc3BhY2luZydcbl07XG5leHBvcnRzLmRlZmF1bHQgPSBJTkhFUklUX1NUWUxFX0FUVFJJQlVURVM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmhlcml0LXN0eWxlLWF0dHJpYnV0ZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBOT0RFX05BTUVTX1RPX0lHTk9SRSA9IFtcbiAgICAnTk9TQ1JJUFQnLCAnU0NSSVBUJywgJ1NUWUxFJywgJyNjb21tZW50JywgJyNkb2N1bWVudCdcbl07XG5leHBvcnRzLmRlZmF1bHQgPSBOT0RFX05BTUVTX1RPX0lHTk9SRTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vZGUtbmFtZXMtdG8taWdub3JlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgTk9ERV9OQU1FU19UT19SRVBMQUNFID0ge1xuICAgICdJRlJBTUUnOiAnRElWJ1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IE5PREVfTkFNRVNfVE9fUkVQTEFDRTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vZGUtbmFtZXMtdG8tcmVwbGFjZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFNLSVBQRURfU1RZTEVfQVRUUklCVVRFUyA9IHtcbiAgICAnYWxpZ24taXRlbXMnOiAnbm9ybWFsJyxcbiAgICAnYWxpZ24tc2VsZic6ICdub3JtYWwnLFxuICAgICdjbGlwLXBhdGgnOiAnbm9uZScsXG4gICAgJ2ZsZXgtYmFzaXMnOiAnYXV0bycsXG4gICAgJ2ZsZXgtZ3Jvdyc6ICcwJyxcbiAgICAnZmxleC1zaHJpbmsnOiAnMScsXG4gICAgJ2p1c3RpZnktY29udGVudCc6ICdub3JtYWwnLFxuICAgICd1c2VyLXNlbGVjdCc6ICd0ZXh0JyxcbiAgICAnYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyc6ICcwcHgnLFxuICAgICdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cyc6ICcwcHgnLFxuICAgICdib3JkZXItdG9wLXJpZ2h0LXJhZGl1cyc6ICcwcHgnLFxuICAgICdib3JkZXItdG9wLWxlZnQtcmFkaXVzJzogJzBweCcsXG4gICAgJ2N1cnNvcic6ICdhdXRvJyxcbiAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICcwJSAwJScsXG4gICAgJ2JhY2tncm91bmQtc2l6ZSc6ICdhdXRvJyxcbiAgICAnZGlyZWN0aW9uJzogJ2x0cicsXG4gICAgLy8gXCJtYXJnaW4tYm90dG9tXCI6IFwiMHB4XCIsXG4gICAgLy8gXCJtYXJnaW4tbGVmdFwiOiBcIjBweFwiLFxuICAgIC8vIFwibWFyZ2luLXJpZ2h0XCI6IFwiMHB4XCIsXG4gICAgLy8gXCJtYXJnaW4tdG9wXCI6IFwiMHB4XCIsXG4gICAgJ21heC1oZWlnaHQnOiAnbm9uZScsXG4gICAgJ21heC13aWR0aCc6ICdub25lJyxcbiAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAvLyBcInBhZGRpbmctYm90dG9tXCI6IFwiMHB4XCIsXG4gICAgLy8gXCJwYWRkaW5nLWxlZnRcIjogXCIwcHhcIixcbiAgICAvLyBcInBhZGRpbmctcmlnaHRcIjogXCIwcHhcIixcbiAgICAvLyBcInBhZGRpbmctdG9wXCI6IFwiMHB4XCIsXG4gICAgJ3JpZ2h0JzogJ2F1dG8nLFxuICAgICdzcGVhayc6ICdub3JtYWwnLFxuICAgICd0b3AnOiAnYXV0bycsXG4gICAgJ3RyYW5zaXRpb24tZGVsYXknOiAnMHMnLFxuICAgICd0cmFuc2l0aW9uLWR1cmF0aW9uJzogJzBzJyxcbiAgICAndHJhbnNpdGlvbi1wcm9wZXJ0eSc6ICdhbGwnLFxuICAgICd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbic6ICdlYXNlJyxcbiAgICAndmVydGljYWwtYWxpZ24nOiAnYmFzZWxpbmUnLFxuICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICd3aGl0ZS1zcGFjZSc6ICdub3JtYWwnLFxuICAgICd3aWRvd3MnOiAnMicsXG4gICAgJ3dvcmQtYnJlYWsnOiAnbm9ybWFsJyxcbiAgICAnei1pbmRleCc6ICdhdXRvJyxcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBTS0lQUEVEX1NUWUxFX0FUVFJJQlVURVM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1za2lwcGVkLXN0eWxlLWF0dHJpYnV0ZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBlc2NhcGVkX2F0dHJpYnV0ZXNfMSA9IHJlcXVpcmUoXCIuL2NvbnN0YW50cy9lc2NhcGVkLWF0dHJpYnV0ZXNcIik7XG5jb25zdCBmaXJlYmFzZV9kZWZhdWx0X2NvbmZpZ18xID0gcmVxdWlyZShcIi4vY29uZmlnL2ZpcmViYXNlLWRlZmF1bHQtY29uZmlnXCIpO1xuY29uc3QgaW5oZXJpdF9zdHlsZV9hdHRyaWJ1dGVzXzEgPSByZXF1aXJlKFwiLi9jb25zdGFudHMvaW5oZXJpdC1zdHlsZS1hdHRyaWJ1dGVzXCIpO1xuY29uc3Qgc2tpcHBlZF9zdHlsZV9hdHRyaWJ1dGVzXzEgPSByZXF1aXJlKFwiLi9jb25zdGFudHMvc2tpcHBlZC1zdHlsZS1hdHRyaWJ1dGVzXCIpO1xuY29uc3QgZG9tX25hbWVzcGFjZXNfMSA9IHJlcXVpcmUoXCIuL2NvbnN0YW50cy9kb20tbmFtZXNwYWNlc1wiKTtcbmNvbnN0IG5vZGVfbmFtZXNfdG9faWdub3JlXzEgPSByZXF1aXJlKFwiLi9jb25zdGFudHMvbm9kZS1uYW1lcy10by1pZ25vcmVcIik7XG5jb25zdCBub2RlX25hbWVzX3RvX3JlcGxhY2VfMSA9IHJlcXVpcmUoXCIuL2NvbnN0YW50cy9ub2RlLW5hbWVzLXRvLXJlcGxhY2VcIik7XG5jb25zdCBkb21fcHNldWRvc2VsZWN0b3JzXzEgPSByZXF1aXJlKFwiLi9jb25zdGFudHMvZG9tLXBzZXVkb3NlbGVjdG9yc1wiKTtcbmNvbnN0IGNvbGxlY3RfbWV0YV8xID0gcmVxdWlyZShcIi4vdXRpbHMvY29sbGVjdC1tZXRhXCIpO1xuY2xhc3MgRG9tU25hcHNob3Qge1xuICAgIC8qXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnID0ge1xuICAgICAgICBpbmxpbmVTdHlsZXM6IGZhbHNlLFxuICAgICAgICB2YWN1dW06IGZhbHNlLFxuICAgICAgICBzdHlsZXNDbGVhbnVwOiB0cnVlLFxuICAgICAgICBjYXB0dXJlUHNldWRvc2VsZWN0b3JzOiB0cnVlLFxuICAgICAgICBzYWZlQXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgIEJPRFlfU1RZTEU6IFtdLFxuICAgICAgICAgICAgQ0FDSEVfS0VZUzogW10sXG4gICAgICAgICAgICBDQUNIRV9WQUxVRVM6IFtdLFxuICAgICAgICAgICAgSFRNTF9TVFlMRTogW10sXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgLy8gdXNlZCB0byBwYXRjaCBpbWFnZSBsaW5rcyBvbiBzbmFwc2hvdCByZXN0b3JlIChtYXkgYmUgcmVwbGFjZWQgdG8gYmFzZTY0IGlubGluZSlcbiAgICAgICAgICAgICAgICBwcm90b2NvbDogXCJcIixcbiAgICAgICAgICAgICAgICBob3N0bmFtZTogXCJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgZmJDb25maWcgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLnVpZFByZWZpeCA9IG51bGw7XG4gICAgICAgIC8vIHRoaXMgbm9kZXMgbm90IGdvaW5nIHRvIHNuYXBzaG90XG4gICAgICAgIHRoaXMuTk9ERV9OQU1FU19UT19JR05PUkUgPSBub2RlX25hbWVzX3RvX2lnbm9yZV8xLmRlZmF1bHQ7XG4gICAgICAgIC8vIGlmcmFtZXMgbm9kZXMgd2lsbCBiZSByZXBsYWNlZCB0byBkaXYnc1xuICAgICAgICB0aGlzLk5PREVfTkFNRVNfVE9fUkVQTEFDRSA9IG5vZGVfbmFtZXNfdG9fcmVwbGFjZV8xLmRlZmF1bHQ7XG4gICAgICAgIC8vIHBzZXVkb3NlbGVjdG9ycyB0byBjYXB0dXJlXG4gICAgICAgIHRoaXMuUFNFVURPU0VMRUNUT1JTID0gZG9tX3BzZXVkb3NlbGVjdG9yc18xLmRlZmF1bHQ7XG4gICAgICAgIC8vIGluaGVyaXQgc3R5bGVzIChiYXNlZCBvbiBjc3MgMi4xKTtcbiAgICAgICAgdGhpcy5JTkhFUklUID0gaW5oZXJpdF9zdHlsZV9hdHRyaWJ1dGVzXzEuZGVmYXVsdDtcbiAgICAgICAgLy8gc3R5bGVzIHRvIHNraXAgZnJvbSBjYXB0dXJpbmdcbiAgICAgICAgdGhpcy5TS0lQX1NUWUxFUyA9IHNraXBwZWRfc3R5bGVfYXR0cmlidXRlc18xLmRlZmF1bHQ7XG4gICAgICAgIC8vaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9UQUdzL3JlZl9ldmVudGF0dHJpYnV0ZXMuYXNwXG4gICAgICAgIHRoaXMuRVNDQVBFRF9BVFRSSUJVVEVTID0gZXNjYXBlZF9hdHRyaWJ1dGVzXzEuZGVmYXVsdDtcbiAgICAgICAgaWYgKCFjb25maWcuc3RhdGUpIHtcbiAgICAgICAgICAgIGNvbmZpZy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICBCT0RZX1NUWUxFOiBbXSxcbiAgICAgICAgICAgICAgICBDQUNIRV9LRVlTOiBbXSxcbiAgICAgICAgICAgICAgICBDQUNIRV9WQUxVRVM6IFtdLFxuICAgICAgICAgICAgICAgIEhUTUxfU1RZTEU6IFtdLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHByb3RvY29sOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBob3N0bmFtZTogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW5pdCBzdGF0ZVxuICAgICAgICB0aGlzLkJPRFlfU1RZTEUgPSBjb25maWcuc3RhdGUuQk9EWV9TVFlMRSB8fCBbXTtcbiAgICAgICAgdGhpcy5DQUNIRV9LRVlTID0gY29uZmlnLnN0YXRlLkNBQ0hFX0tFWVMgfHwgW107XG4gICAgICAgIHRoaXMuQ0FDSEVfVkFMVUVTID0gY29uZmlnLnN0YXRlLkNBQ0hFX1ZBTFVFUyB8fCBbXTtcbiAgICAgICAgdGhpcy5CT0RZX0FUVFJJQlVURVMgPSBjb25maWcuc3RhdGUuQ0FDSEVfVkFMVUVTIHx8IFtdO1xuICAgICAgICB0aGlzLkhUTUxfU1RZTEUgPSBjb25maWcuc3RhdGUuSFRNTF9TVFlMRSB8fCBbXTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IGNvbmZpZy5zdGF0ZS5pdGVtcyB8fCBbXTtcbiAgICAgICAgdGhpcy5tZXRhID0gY29uZmlnLnN0YXRlLm1ldGEgfHwge307XG4gICAgICAgIHRoaXMuX1VTRV9WQUNVVU0gPSBjb25maWcudmFjdXVtIHx8IGZhbHNlO1xuICAgICAgICAvLyBhcHBlbmQgc3R5bGVzIHRvIGRvbSBub2RlIGluc3RlYWQgb2Ygc3R5bGUgbm9kZVxuICAgICAgICB0aGlzLl9VU0VfSU5MSU5FX1NUWUxFUyA9IGNvbmZpZy5pbmxpbmVTdHlsZXMgfHwgZmFsc2U7XG4gICAgICAgIHRoaXMuX1VTRV9TVFlMRVNfQ0xFQU5VUCA9IGNvbmZpZy5zdHlsZXNDbGVhbnVwIHx8IHRydWU7XG4gICAgICAgIHRoaXMuX1VTRV9QU0VVRE9TRUxFQ1RPUlMgPSBjb25maWcuY2FwdHVyZVBzZXVkb3NlbGVjdG9ycyB8fCB0cnVlO1xuICAgICAgICB0aGlzLl9VU0VfU0FGRV9BVFRSSUJVVEVTID0gY29uZmlnLnNhZmVBdHRyaWJ1dGVzIHx8IHRydWU7XG4gICAgICAgIHRoaXMuX05BTUVTUEFDRVMgPSBkb21fbmFtZXNwYWNlc18xLmRlZmF1bHQ7XG4gICAgICAgIC8vIG5vZGUgY2FjaGUgKGZvciBub2RlIGNyZWF0aW9uKVxuICAgICAgICB0aGlzLm5vZGVDYWNoZSA9IHt9O1xuICAgICAgICAvLyByb290cyBpbml0XG4gICAgICAgIHRoaXMuX2h0bWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faGVhZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9ib2R5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNMb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gc2tpcCB0aGlzIG5vZGUgdHlwZXNcbiAgICAgICAgdGhpcy5yZXN0cmljdGVkTm9kZVR5cGVzID0gWzMsIDhdO1xuICAgICAgICAvLyBza2lwIGhpZGRlbiBub2Rlc1xuICAgICAgICB0aGlzLnNraXBEaXNwbGF5Tm9uZSA9IHRydWU7XG4gICAgICAgIC8vIGZpcmViYXNlIGNvbmZpZyB3aXRoIGRlZmF1bHRzXG4gICAgICAgIHRoaXMuZmJDb25maWcgPSBmYkNvbmZpZyB8fCBmaXJlYmFzZV9kZWZhdWx0X2NvbmZpZ18xLmRlZmF1bHQ7XG4gICAgICAgIHRoaXMuaW50RmlyZWJhc2UodGhpcy5mYkNvbmZpZyk7XG4gICAgfVxuICAgIF9ub3JtYWxpemVBdHRyaWJ1dGVOYW1lKGF0dHJOYW1lKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcoYXR0ck5hbWUpXG4gICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgX2lzU2FmZUF0dHJpYnV0ZShhdHRyTmFtZSkge1xuICAgICAgICBpZiAodGhpcy5fVVNFX1NBRkVfQVRUUklCVVRFUyAmJlxuICAgICAgICAgICAgdGhpcy5FU0NBUEVEX0FUVFJJQlVURVMuaW5jbHVkZXModGhpcy5fbm9ybWFsaXplQXR0cmlidXRlTmFtZShhdHRyTmFtZSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICghYXR0ck5hbWUuaW5jbHVkZXMoXCJuZy1cIikgJiZcbiAgICAgICAgICAgICFhdHRyTmFtZS5pbmNsdWRlcygnXCInKSAmJlxuICAgICAgICAgICAgIWF0dHJOYW1lLmluY2x1ZGVzKFwiZGF0YS11aWRfXCIpICYmXG4gICAgICAgICAgICAhYXR0ck5hbWUuaW5jbHVkZXMoXCJzdHlsZVwiKSk7XG4gICAgfVxuICAgIF9leHRyYWN0Tm9kZUF0dHJpYnV0ZXMobm9kZSkge1xuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcFxuICAgICAgICAgICAgLmNhbGwobm9kZS5hdHRyaWJ1dGVzLCBlbCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gW2VsLm5vZGVOYW1lLCB0aGlzLl9wYXRjaEF0dHJpYnV0ZShlbC5ub2RlTmFtZSwgZWwubm9kZVZhbHVlKV07XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKChbYXR0ck5hbWVdKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNTYWZlQXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlc2V0VGFyZ2V0KCkge1xuICAgICAgICB0aGlzLnNldEJvZHlOb2RlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zZXRIdG1sTm9kZShmYWxzZSk7XG4gICAgICAgIHRoaXMuc2V0SGVhZE5vZGUoZmFsc2UpO1xuICAgIH1cbiAgICAvLy8gc2V0IHJvb3ROb2RlIGZvciByZXN0b3JpbmdcbiAgICByZXN0b3JlVG8obm9kZSkge1xuICAgICAgICB0aGlzLnNldEJvZHlOb2RlKG5vZGUpO1xuICAgIH1cbiAgICBfY29sbGVjdE1ldGEoKSB7XG4gICAgICAgIHJldHVybiBjb2xsZWN0X21ldGFfMS5kZWZhdWx0KCk7XG4gICAgfVxuICAgIF9wYXRjaEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICAgICAgICBpZiAoW1wic3JjXCIsIFwiaHJlZlwiXS5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgICAgICAgY29uc3QgZmlyc3RDaGFyID0gU3RyaW5nKHZhbHVlKS5jaGFyQXQoMCk7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmRDaGFyID0gU3RyaW5nKHZhbHVlKS5jaGFyQXQoMSk7XG4gICAgICAgICAgICBjb25zdCBoYXNIYXNoID0gc2Vjb25kQ2hhciA9PT0gXCIjXCIgfHwgZmlyc3RDaGFyID09PSBcIiNcIjtcbiAgICAgICAgICAgIGNvbnN0IGhhc1R3b1NsYXNoZXMgPSBmaXJzdENoYXIgPT09IHNlY29uZENoYXIgJiYgZmlyc3RDaGFyID09PSBcIi9cIjtcbiAgICAgICAgICAgIGNvbnN0IGhhc1BhdGggPSBzZWNvbmRDaGFyID09PSBcIi9cIjtcbiAgICAgICAgICAgIGlmICghaGFzVHdvU2xhc2hlcyAmJiAoaGFzUGF0aCB8fCBoYXNIYXNoKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1ldGEuaG9zdG5hbWUgJiYgdGhpcy5tZXRhLnByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLm1ldGEucHJvdG9jb2x9Ly8ke3RoaXMubWV0YS5ob3N0bmFtZX0ke3ZhbHVlfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgX2lzU1ZHKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQubmFtZXNwYWNlVVJJID09PSB0aGlzLl9OQU1FU1BBQ0VTLlNWRztcbiAgICB9XG4gICAgX2dldEJvZHlBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXh0cmFjdE5vZGVBdHRyaWJ1dGVzKHRoaXMuX2dldEJvZHlOb2RlKCkpO1xuICAgIH1cbiAgICBfZ2V0Qm9keVN0eWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3R5bGVPYmplY3QodGhpcy5fZ2V0U3R5bGVGb3JOb2RlKHRoaXMuX2dldEJvZHlOb2RlKCkpKTtcbiAgICB9XG4gICAgX2dldEhUTUxTdHlsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldEJvZHlQYXJlbnRTdHlsZSgpO1xuICAgIH1cbiAgICBfZ2V0Qm9keVBhcmVudFN0eWxlKCkge1xuICAgICAgICBjb25zdCBib2R5ID0gdGhpcy5fZ2V0Qm9keU5vZGUoKTtcbiAgICAgICAgbGV0IHN0eWxlTm9kZSA9IFtdO1xuICAgICAgICBpZiAoYm9keS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICBzdHlsZU5vZGUgPSB0aGlzLl9nZXRTdHlsZUZvck5vZGUoYm9keS5wYXJlbnROb2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3R5bGVPYmplY3Qoc3R5bGVOb2RlKTtcbiAgICAgICAgLy8gZ2V0IG9wdGltYWwgc3R5bGUsIHNhdmUgYXMgc3BlY2lhbCBub2RlXG4gICAgfVxuICAgIGFkZE1ldGEoa2V5T3JPYmplY3QsIHZhbHVlLCB0YXJnZXQgPSB0aGlzKSB7XG4gICAgICAgIGlmICh0eXBlb2Yga2V5T3JPYmplY3QgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHRhcmdldC5tZXRhID0gT2JqZWN0LmFzc2lnbih0YXJnZXQubWV0YSwga2V5T3JPYmplY3QpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0Lm1ldGFba2V5T3JPYmplY3RdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGdldE1ldGEoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm1ldGEpO1xuICAgIH1cbiAgICBjbGVhck1ldGEoKSB7XG4gICAgICAgIHRoaXMubWV0YSA9IHt9O1xuICAgIH1cbiAgICBfYWRkRmJTY3JpcHQocmVzb2x2ZSwgcmVqZWN0LCBjb25maWcpIHtcbiAgICAgICAgY29uc3QgaGVhZCA9IHRoaXMuX2dldERvY3VtZW50KCkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuICAgICAgICBjb25zdCBzY3JpcHQgPSB0aGlzLl9nZXREb2N1bWVudCgpLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIHNjcmlwdC50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5maXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XG4gICAgICAgICAgICB0aGlzLmZpcmViYXNlID0gd2luZG93LmZpcmViYXNlO1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgICBzY3JpcHQub25lcnJvciA9IGUgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9O1xuICAgICAgICBzY3JpcHQuc3JjID0gXCJodHRwczovL3d3dy5nc3RhdGljLmNvbS9maXJlYmFzZWpzLzQuMi4wL2ZpcmViYXNlLmpzXCI7XG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9XG4gICAgaW50RmlyZWJhc2UoZmJDb25maWcpIHtcbiAgICAgICAgdGhpcy5fbG9hZGVkID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuZmlyZWJhc2UgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcmViYXNlID0gd2luZG93LmZpcmViYXNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fYWRkRmJTY3JpcHQocmVzb2x2ZSwgcmVqZWN0LCBmYkNvbmZpZyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVkO1xuICAgIH1cbiAgICBsb2FkZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkZWQ7XG4gICAgfVxuICAgIF9nZXRIZWFkKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX2hlYWQgfHxcbiAgICAgICAgICAgIHRoaXMuX2dldEJvZHlOb2RlKCkucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiaGVhZFwiKSB8fFxuICAgICAgICAgICAgdGhpcy5fZ2V0RG9jdW1lbnQoKS5oZWFkIHx8XG4gICAgICAgICAgICB0aGlzLl9nZXREb2N1bWVudCgpLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXSk7XG4gICAgfVxuICAgIF9jbGVhbkhlYWROb2RlRnJvbVN0eWxlcygpIHtcbiAgICAgICAgY29uc3QgaGVhZCA9IHRoaXMuX2dldEhlYWQoKTtcbiAgICAgICAgbGV0IHN0eWxlc1RvUmVtb3ZlID0gaGVhZC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN0eWxlXCIpO1xuICAgICAgICBpZiAoc3R5bGVzVG9SZW1vdmUubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0eWxlc1RvUmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaGVhZC5yZW1vdmVDaGlsZChzdHlsZXNUb1JlbW92ZVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN0eWxlTGlua3NUb1JlbW92ZSA9IGhlYWQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7XG4gICAgICAgIGlmIChzdHlsZUxpbmtzVG9SZW1vdmUubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0eWxlTGlua3NUb1JlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGhlYWQucmVtb3ZlQ2hpbGQoc3R5bGVMaW5rc1RvUmVtb3ZlW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBfYWRkU3R5bGVOb2RlKGNzcykge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHRoaXMuX2dldERvY3VtZW50KCkuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgICBjb25zdCBoZWFkID0gdGhpcy5fZ2V0SGVhZCgpO1xuICAgICAgICBzdHlsZS50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuICAgICAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQodGhpcy5fZ2V0RG9jdW1lbnQoKS5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICAgICAgfVxuICAgICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG4gICAgX2dldERvbU5vZGVGcm9tQXJndW1lbnQoc2VsZWN0b3IpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IHR5cGVvZiBzZWxlY3RvciA9PT0gXCJvYmplY3RcIlxuICAgICAgICAgICAgPyBzZWxlY3RvclxuICAgICAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG4gICAgX2NsZWFuRG9tTm9kZSh0YXJnZXQpIHtcbiAgICAgICAgd2hpbGUgKHRhcmdldC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlQ2hpbGQodGFyZ2V0LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRha2VTbmFwc2hvdChzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTbmFwc2hvdCh0aGlzLl9nZXREb21Ob2RlRnJvbUFyZ3VtZW50KHNlbGVjdG9yKSk7XG4gICAgfVxuICAgIHJlbmRlclNuYXBzaG90KHNlbGVjdG9yLCBzbmFwc2hvdCwgcmV3cml0ZURvbUNvbnRlbnQgPSB0cnVlKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLl9nZXREb21Ob2RlRnJvbUFyZ3VtZW50KHNlbGVjdG9yKTtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB1bmFibGUgdG8gZmluZCB0YXJnZXQgYnkgc2VsZWN0b3IgJHtzZWxlY3Rvcn1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmV3cml0ZURvbUNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NsZWFuRG9tTm9kZSh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdG9yZVdvcmxkRnJvbShzbmFwc2hvdCwgdGFyZ2V0KTtcbiAgICB9XG4gICAgc2hvd1NuYXBzaG90KGlkLCBzZWxlY3RvciA9IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFNuYXBzaG90QnlJZChpZCkudGhlbihzbmFwc2hvdCA9PiB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lXb3JsZCgpO1xuICAgICAgICAgICAgbGV0IHRhcmdldE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFN0cmluZyhzZWxlY3RvcikudmFsdWVPZigpKSB8fFxuICAgICAgICAgICAgICAgIHRoaXMuX2dldEJvZHlOb2RlKCk7XG4gICAgICAgICAgICBsZXQgc291cmNlID0gdGhpcy5zZXRTdGF0ZSh0aGlzLCBzbmFwc2hvdCk7XG4gICAgICAgICAgICB0aGlzLnJlc3RvcmVXb3JsZEZyb20oc291cmNlLCB0YXJnZXROb2RlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlc3RvcmVTbmFwc2hvdChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2hvd1NuYXBzaG90KGlkKTtcbiAgICB9XG4gICAgX2ZiQWRkVG9TbmFwc2hvdExpc3QoaWQsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5maXJlYmFzZVxuICAgICAgICAgICAgLmRhdGFiYXNlKClcbiAgICAgICAgICAgIC5yZWYoYHNuYXBzaG90cy1saXN0LyR7aWR9YClcbiAgICAgICAgICAgIC5zZXQoZGF0YSk7XG4gICAgfVxuICAgIF9mYlNldFNuYXBzaG90KGlkLCBzbmFwc2hvdCkge1xuICAgICAgICB0aGlzLmZpcmViYXNlXG4gICAgICAgICAgICAuZGF0YWJhc2UoKVxuICAgICAgICAgICAgLnJlZihgc25hcHNob3RzLyR7aWR9YClcbiAgICAgICAgICAgIC5zZXQoc25hcHNob3QpO1xuICAgIH1cbiAgICBfZmJHZXRTbmFwc2hvdChpZCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpcmViYXNlXG4gICAgICAgICAgICAgICAgLmRhdGFiYXNlKClcbiAgICAgICAgICAgICAgICAucmVmKFwic25hcHNob3RzL1wiICsgaWQpXG4gICAgICAgICAgICAgICAgLm9uY2UoXCJ2YWx1ZVwiKVxuICAgICAgICAgICAgICAgIC50aGVuKHNuYXBzaG90ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShzbmFwc2hvdC52YWwoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldFNuYXBzaG90QnlJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmJHZXRTbmFwc2hvdChpZCk7XG4gICAgfVxuICAgIF9zaG93U25hcHNob3QoaWQgPSBcIjE1MDIzMTIwODk0NzlcIiwgcm9vdEVsZW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U25hcHNob3RCeUlkKGlkKS50aGVuKHNuYXBzaG90ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveVdvcmxkKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMsIHNuYXBzaG90KTtcbiAgICAgICAgICAgIHRoaXMucmVzdG9yZVdvcmxkKHJvb3RFbGVtZW50LCB0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9jbGVhclN0YXRlKHRhcmdldCkge1xuICAgICAgICB0YXJnZXQuaXRlbXMgPSBbXTtcbiAgICAgICAgdGFyZ2V0LkNBQ0hFX0tFWVMgPSBbXTtcbiAgICAgICAgdGFyZ2V0LkJPRFlfU1RZTEUgPSBbXTtcbiAgICAgICAgdGFyZ2V0LkhUTUxfU1RZTEUgPSBbXTtcbiAgICAgICAgdGFyZ2V0LkNBQ0hFX1ZBTFVFUyA9IFtdO1xuICAgICAgICB0YXJnZXQuQk9EWV9BVFRSSUJVVEVTID0gW107XG4gICAgfVxuICAgIF9nZXRBcnJheUNvcHkoZWxlbWVudCkge1xuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgIT09IFwib2JqZWN0XCIgfHwgZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50LnNsaWNlKDApO1xuICAgIH1cbiAgICBfY2xvbmVPYmplY3Qob2JqKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiIHx8IG9iaiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xuICAgIH1cbiAgICBfY29weVdvcmxkKHJvb3ROb2RlID0gZmFsc2UsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29weVdvcmxkVG8ocm9vdE5vZGUsIHNvdXJjZSk7XG4gICAgfVxuICAgIF9jb3B5V29ybGRUbyhyb290Tm9kZSwgc291cmNlKSB7XG4gICAgICAgIGNvbnN0IHBzZXVkb1NlbGVjdG9yc1N0eWxlc0FycmF5ID0gW107XG4gICAgICAgIGNvbnN0IHJlaW5kZXhNYXAgPSB7fTtcbiAgICAgICAgbGV0IGl0ZW1zID0gc291cmNlLml0ZW1zO1xuICAgICAgICBzb3VyY2UubWV0YSA9IHRoaXMuX2NvbGxlY3RNZXRhKCk7XG4gICAgICAgIGxldCB0YXJnZXQgPSByb290Tm9kZSB8fCB0aGlzLl9nZXRCb2R5Tm9kZSgpO1xuICAgICAgICBsZXQgaXNCb2R5Tm9kZVJvb3QgPSB0YXJnZXQgPT09IHRoaXMuX2dldEJvZHlOb2RlKCk7XG4gICAgICAgIGlmIChpc0JvZHlOb2RlUm9vdCkge1xuICAgICAgICAgICAgc291cmNlLkJPRFlfQVRUUklCVVRFUyA9IHRoaXMuX2dldEJvZHlBdHRyaWJ1dGVzKCk7XG4gICAgICAgICAgICBzb3VyY2UuSFRNTF9TVFlMRSA9IHRoaXMuX3N0eWxlT2JqZWN0VG9PcHRpbWFsU3R5bGVBcnJheSh0aGlzLl9nZXRIVE1MU3R5bGUoKSwgdW5kZWZpbmVkLCBzb3VyY2UpO1xuICAgICAgICAgICAgc291cmNlLkJPRFlfU1RZTEUgPSB0aGlzLl9zdHlsZU9iamVjdFRvT3B0aW1hbFN0eWxlQXJyYXkodGhpcy5fZ2V0Qm9keVN0eWxlKCksIHVuZGVmaW5lZCwgc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2FwdHVyZWROb2RlcyA9IHRoaXMuX2dldEFsbERvbU5vZGVzKHRhcmdldCk7XG4gICAgICAgIGlmICghaXNCb2R5Tm9kZVJvb3QpIHtcbiAgICAgICAgICAgIGNhcHR1cmVkTm9kZXMudW5zaGlmdChyb290Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgbm9kZXNNYXAgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcHR1cmVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gY2FwdHVyZWROb2Rlc1tpXTtcbiAgICAgICAgICAgIG5vZGVzTWFwLnNldChpdGVtLCBpKTtcbiAgICAgICAgICAgIGxldCBub2RlU3R5bGUgPSB0aGlzLl9nZXRTdHlsZUZvck5vZGUoaXRlbSk7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2hvdWxkVGFrZUVsZW1lbnQoaXRlbSwgbm9kZVN0eWxlKSkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmRhdGFzZXQgJiYgdGhpcy5fVVNFX1BTRVVET1NFTEVDVE9SUykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHNldWRvc2VsZWNvclN0eWxlcyA9IHRoaXMuX2dldFN0eWxlc0ZvclBzZXVkb1NlbGVjdG9ycyhpdGVtLCBzb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHNldWRvc2VsZWNvclN0eWxlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHNldWRvc2VsZWNvclN0eWxlcy5pbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwc2V1ZG9TZWxlY3RvcnNTdHlsZXNBcnJheS5wdXNoKHBzZXVkb3NlbGVjb3JTdHlsZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2godGhpcy5fc2VyaWFsaXplTm9kZShub2RlU3R5bGUsIGl0ZW0sIGksIHNvdXJjZSwgbm9kZXNNYXApKTtcbiAgICAgICAgICAgICAgICByZWluZGV4TWFwW2ldID0gaXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fVVNFX1BTRVVET1NFTEVDVE9SUykge1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaChwc2V1ZG9TZWxlY3RvcnNTdHlsZXNBcnJheSwgZWwgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gaXRlbXNbcmVpbmRleE1hcFtlbC5pbmRleF1dO1xuICAgICAgICAgICAgICAgIGl0ZW0ucHNldWRvc2VsZWN0b3JzID0gZWw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fVVNFX1ZBQ1VVTSkge1xuICAgICAgICAgICAgc291cmNlLml0ZW1zID0gdGhpcy5fdmFjdXVtKGl0ZW1zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fVVNFX1NUWUxFU19DTEVBTlVQKSB7XG4gICAgICAgICAgICB0aGlzLl9jbGVhbnVwU3R5bGVzKHNvdXJjZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2dldEh0bWxOb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faHRtbCB8fCB0aGlzLl9nZXRCb2R5Tm9kZSgpLnBhcmVudE5vZGUgfHwgdGhpcy5fZ2V0Qm9keU5vZGUoKTtcbiAgICB9XG4gICAgcmVzdG9yZVdvcmxkKHRhcmdldCA9IGZhbHNlLCBzb3VyY2UpIHtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIC8vdGhpcy5fc2V0SFRNTFN0eWxlKHNvdXJjZSk7XG4gICAgICAgICAgICB0aGlzLl9zZXRCb2R5QXR0cmlidXRlcyhzb3VyY2UpO1xuICAgICAgICAgICAgLy90aGlzLl9zZXRCb2R5U3R5bGUoc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN0b3JlV29ybGRGcm9tKHNvdXJjZSwgdGFyZ2V0KTtcbiAgICB9XG4gICAgX2ZvckVhY2goYXJyYXksIGFjdGlvbikge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFjdGlvbihhcnJheVtpXSwgaSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzdG9yZVdvcmxkRnJvbShzb3VyY2UsIHRhcmdldCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlc1RvVXBwZW5kID0gW107XG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gdGhpcy5fZ2V0RG9jdW1lbnQoKS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIHRoaXMudWlkUHJlZml4ID1cbiAgICAgICAgICAgIFwiZFwiICtcbiAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpXG4gICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygzNilcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKC0yKTtcbiAgICAgICAgY29uc3Qgbm9kZXNJbmRleCA9IHt9O1xuICAgICAgICB0aGlzLl9mb3JFYWNoKHNvdXJjZS5pdGVtcywgZWwgPT4ge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLl9jcmVhdGVOb2RlKGVsLCBzdHlsZXNUb1VwcGVuZCwgc291cmNlKTtcbiAgICAgICAgICAgIG5vZGVzSW5kZXhbZWwuaW5kZXhdID0gbm9kZTtcbiAgICAgICAgICAgIHRoaXMuX2luc2VydE5vZGUobm9kZSwgZWwsIGZyYWdtZW50LCBub2Rlc0luZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN0eWxlc1RvVXBwZW5kLnB1c2goYGh0bWwgeyAke3RoaXMuX2dldE5vZGVTdHlsZVRleHQoc291cmNlLkhUTUxfU1RZTEUsIHNvdXJjZSl9IH1gKTtcbiAgICAgICAgc3R5bGVzVG9VcHBlbmQucHVzaChgYm9keSB7ICR7dGhpcy5fZ2V0Tm9kZVN0eWxlVGV4dChzb3VyY2UuQk9EWV9TVFlMRSwgc291cmNlKX0gfWApO1xuICAgICAgICB0aGlzLl9hZGRTdHlsZU5vZGUoc3R5bGVzVG9VcHBlbmQucmV2ZXJzZSgpLmpvaW4oXCJcXG5cIikpO1xuICAgICAgICBsZXQgcm9vdE5vZGUgPSB0YXJnZXQgfHwgdGhpcy5fZ2V0Qm9keU5vZGUoKTtcbiAgICAgICAgcm9vdE5vZGUuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICB0aGlzLnVpZFByZWZpeCA9IG51bGw7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBfZGVzdHJveUJvZHlBdHRyaWJ1dGVzKCkge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gdGhpcy5fZ2V0Qm9keUF0dHJpYnV0ZXMoKTtcbiAgICAgICAgY29uc3QgYm9keSA9IHRoaXMuX2dldEJvZHlOb2RlKCk7XG4gICAgICAgIHRoaXMuX2ZvckVhY2goYXR0cmlidXRlcywgKFtuYW1lXSkgPT4ge1xuICAgICAgICAgICAgYm9keS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGVzdHJveVdvcmxkKCkge1xuICAgICAgICB0aGlzLl9kZXN0cm95Qm9keUF0dHJpYnV0ZXMoKTtcbiAgICAgICAgdGhpcy5fZ2V0Qm9keU5vZGUoKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB0aGlzLl9jbGVhbkhlYWROb2RlRnJvbVN0eWxlcygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgX2NyZWF0ZVN0eWxlT2JqZWN0KHN0eWxlTm9kZSkge1xuICAgICAgICBjb25zdCBzdHlsZU9iamVjdCA9IHt9O1xuICAgICAgICBpZiAoIXN0eWxlTm9kZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHlsZU9iamVjdDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0eWxlTm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gc3R5bGVOb2RlW2ldO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbcHJvcGVydHlOYW1lXSA9IHN0eWxlTm9kZS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlT2JqZWN0O1xuICAgIH1cbiAgICBfaXNEZWZhdWx0U3R5bGUobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5CT0RZX1NUWUxFW25hbWVdID09PSB2YWx1ZSB8fCBmYWxzZTtcbiAgICB9XG4gICAgX3ZhY3V1bShpdGVtcykge1xuICAgICAgICBjb25zdCBpdGVtc1RvUmVtb3ZlID0gW107XG4gICAgICAgIGNvbnN0IGxhc3RJdGVtSW5kZXggPSBpdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICB0aGlzLl9mb3JFYWNoKGl0ZW1zLCAoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChsYXN0SXRlbUluZGV4ICE9PSBpbmRleCAmJiBpdGVtLm5vZGVOYW1lID09PSBcIiN0ZXh0XCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV4dE5vZGUgPSBpdGVtc1tpbmRleCArIDFdO1xuICAgICAgICAgICAgICAgIGxldCBoYXNTYW1lUGFyZW50ID0gbmV4dE5vZGUucGFyZW50ID09PSBpdGVtLnBhcmVudDtcbiAgICAgICAgICAgICAgICBsZXQgaGFzU2FtZU5vZGVOYW1lID0gbmV4dE5vZGUubm9kZU5hbWUgPT09IGl0ZW0ubm9kZU5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKGhhc1NhbWVQYXJlbnQgJiYgaGFzU2FtZU5vZGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHROb2RlLnRleHRDb250ZW50ID0gYCR7aXRlbS50ZXh0Q29udGVudH0ke25leHROb2RlLnRleHRDb250ZW50fWA7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zVG9SZW1vdmUucHVzaChpbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcigoZWwsIGluZGV4KSA9PiAhaXRlbXNUb1JlbW92ZS5pbmNsdWRlcyhpbmRleCkpO1xuICAgIH1cbiAgICBfY2xlYW51cFN0eWxlcyhzb3VyY2UpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVzVG9SZW1vdmUgPSBbXTtcbiAgICAgICAgY29uc3Qgc3R5bGVkSXRlbXMgPSBzb3VyY2UuaXRlbXMuZmlsdGVyKGUgPT4gZS5zdHlsZXMubGVuZ3RoKTtcbiAgICAgICAgLy8gY29sbGVjdCBicm93c2VyIGRlZmF1bHQgc3R5bGVzXG4gICAgICAgIHRoaXMuX2ZvckVhY2goc291cmNlLkhUTUxfU1RZTEUsIHN0eWxlID0+IHtcbiAgICAgICAgICAgIGlmIChzdHlsZWRJdGVtcy5ldmVyeShlbCA9PiBlbC5zdHlsZXMuaW5jbHVkZXMoc3R5bGUpKSkge1xuICAgICAgICAgICAgICAgIGlmIChzb3VyY2UuQk9EWV9TVFlMRS5pbmNsdWRlcyhzdHlsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzVG9SZW1vdmUucHVzaChzdHlsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gZXhjbHVkZSBjb2xsZWN0ZWQgc3R1bGVzXG4gICAgICAgIHNvdXJjZS5IVE1MX1NUWUxFID0gc291cmNlLkhUTUxfU1RZTEUuZmlsdGVyKGVsID0+ICFzdHlsZXNUb1JlbW92ZS5pbmNsdWRlcyhlbCkpO1xuICAgICAgICBzb3VyY2UuQk9EWV9TVFlMRSA9IHNvdXJjZS5CT0RZX1NUWUxFLmZpbHRlcihlbCA9PiAhc3R5bGVzVG9SZW1vdmUuaW5jbHVkZXMoZWwpKTtcbiAgICAgICAgdGhpcy5fZm9yRWFjaChzb3VyY2UuaXRlbXMsIGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lzTm90RW1wdHlBcnJheShpdGVtLnN0eWxlcykpIHtcbiAgICAgICAgICAgICAgICBpdGVtLnN0eWxlcyA9IGl0ZW0uc3R5bGVzLmZpbHRlcihlbCA9PiAhc3R5bGVzVG9SZW1vdmUuaW5jbHVkZXMoZWwpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNvdXJjZS5CT0RZX1NUWUxFID0gc291cmNlLkJPRFlfU1RZTEUuZmlsdGVyKGVsID0+ICFzdHlsZXNUb1JlbW92ZS5pbmNsdWRlcyhlbCkpO1xuICAgIH1cbiAgICBfZ2V0TmFtZUZvck5vZGUobm9kZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuTk9ERV9OQU1FU19UT19SRVBMQUNFW25vZGVOYW1lXSB8fCBub2RlTmFtZTtcbiAgICB9XG4gICAgX2dldFBhcmVudEZvck5vZGUobm9kZSwgbm9kZXNNYXApIHtcbiAgICAgICAgbGV0IHBhcmVudElkID0gbm9kZXNNYXAuaGFzKG5vZGUucGFyZW50Tm9kZSlcbiAgICAgICAgICAgID8gbm9kZXNNYXAuZ2V0KG5vZGUucGFyZW50Tm9kZSlcbiAgICAgICAgICAgIDogMDtcbiAgICAgICAgbGV0IHBhcmVudCA9IHBhcmVudElkID8gcGFyZW50SWQgOiAwO1xuICAgICAgICBpZiAoIXRoaXMuaXNOb3RVbmRlZmluZWQocGFyZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG4gICAgX2dldE5vZGVUZXh0Q29udGVudChub2RlKSB7XG4gICAgICAgIHJldHVybiBub2RlLmNoaWxkcmVuID8gXCJcIiA6IG5vZGUuZGF0YTtcbiAgICB9XG4gICAgX2FycmF5VG9PYmplY3QoYXJyID0gW10pIHtcbiAgICAgICAgcmV0dXJuIGFyci5yZWR1Y2UoKHJlc3VsdCwgW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSwge30pO1xuICAgIH1cbiAgICBnZXRTbmFwc2hvdHNEaWZmKHMxLCBzMikge1xuICAgICAgICBsZXQgZmlyc3RTdGF0ZSA9IHRoaXMuc2V0U3RhdGUoe30sIHMxKTtcbiAgICAgICAgbGV0IHNlY29uZFN0YXRlID0gdGhpcy5zZXRTdGF0ZSh7fSwgczIpO1xuICAgICAgICBsZXQgZmlyc3RTdHlsZXMgPSBmaXJzdFN0YXRlLml0ZW1zXG4gICAgICAgICAgICAuZmlsdGVyKGUgPT4gZS5zdHlsZXMpXG4gICAgICAgICAgICAubWFwKGVsID0+IHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5fc2V0Tm9kZVN0eWxlRnJvbVN0eWxlQXJyYXkoZWwuc3R5bGVzLCB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHt9XG4gICAgICAgICAgICB9LCBmaXJzdFN0YXRlKTtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBlbCwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgc2Vjb25kU3R5bGVzID0gc2Vjb25kU3RhdGUuaXRlbXNcbiAgICAgICAgICAgIC5maWx0ZXIoZSA9PiBlLnN0eWxlcylcbiAgICAgICAgICAgIC5tYXAoZWwgPT4ge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9zZXROb2RlU3R5bGVGcm9tU3R5bGVBcnJheShlbC5zdHlsZXMsIHtcbiAgICAgICAgICAgICAgICBzdHlsZToge31cbiAgICAgICAgICAgIH0sIHNlY29uZFN0YXRlKTtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBlbCwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZGlmZkFycmF5ID0gbmV3IEFycmF5KGZpcnN0U3RhdGUuaXRlbXMubGVuZ3RoKS5maWxsKG51bGwpO1xuICAgICAgICByZXR1cm4gZGlmZkFycmF5Lm1hcCgoXywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZmlyc3ROb2RlOiBmaXJzdFN0eWxlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgc2Vjb25kTm9kZTogc2Vjb25kU3R5bGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICBzdHlsZXNEaWZmOiB0aGlzLl9nZXRBbGxLZXlzRGlmZihmaXJzdFN0eWxlc1tpbmRleF0uc3R5bGUsIHNlY29uZFN0eWxlc1tpbmRleF0uc3R5bGUpLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXNEaWZmOiB0aGlzLl9nZXRBbGxLZXlzRGlmZih0aGlzLl9hcnJheVRvT2JqZWN0KGZpcnN0U3R5bGVzW2luZGV4XS5hdHRyaWJ1dGVzKSwgdGhpcy5fYXJyYXlUb09iamVjdChzZWNvbmRTdHlsZXNbaW5kZXhdLmF0dHJpYnV0ZXMpKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9zZXJpYWxpemVOb2RlKHN0eWxlTm9kZSwgbm9kZSwgaW5kZXgsIHNvdXJjZSwgbm9kZXNNYXApIHtcbiAgICAgICAgbGV0IHBheWxvYWQgPSB0aGlzLl9mb3JtYXRTdHlsZShzdHlsZU5vZGUsIG5vZGUsIGluZGV4LCBzb3VyY2UsIG5vZGVzTWFwKTtcbiAgICAgICAgcmV0dXJuIHBheWxvYWQ7XG4gICAgfVxuICAgIF9mb3JtYXRTdHlsZShzdHlsZU5vZGUsIG5vZGUsIGluZGV4LCBzb3VyY2UsIG5vZGVzTWFwKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgIHN0eWxlczogW10sXG4gICAgICAgICAgICBub2RlTmFtZTogdGhpcy5fZ2V0TmFtZUZvck5vZGUobm9kZS5ub2RlTmFtZSksXG4gICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFtdLFxuICAgICAgICAgICAgbm9kZVR5cGU6IG5vZGUubm9kZVR5cGUsXG4gICAgICAgICAgICBwYXJlbnQ6IHRoaXMuX2dldFBhcmVudEZvck5vZGUobm9kZSwgbm9kZXNNYXApLFxuICAgICAgICAgICAgaXNTVkc6IHRoaXMuX2lzU1ZHKG5vZGUpLFxuICAgICAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuX2dldE5vZGVUZXh0Q29udGVudChub2RlKVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzdHlsZSA9IHRoaXMuX2NyZWF0ZVN0eWxlT2JqZWN0KHN0eWxlTm9kZSk7XG4gICAgICAgIC8vIGlmIChyZXN1bHQuaXNTVkcgJiYgcmVzdWx0Lm5vZGVOYW1lICE9PSAnc3ZnJykge1xuICAgICAgICAvLyByZXN1bHQuc3R5bGVzID0gW107XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC5zdHlsZXMgPSB0aGlzLl9zdHlsZU9iamVjdFRvT3B0aW1hbFN0eWxlQXJyYXkoc3R5bGUsIHJlc3VsdC5wYXJlbnQsIHNvdXJjZSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKCF0aGlzLnJlc3RyaWN0ZWROb2RlVHlwZXMuaW5jbHVkZXMobm9kZS5ub2RlVHlwZSkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzID0gdGhpcy5fZXh0cmFjdE5vZGVBdHRyaWJ1dGVzKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIF9nZXRBbGxEb21Ob2Rlcyhub2RlKSB7XG4gICAgICAgIGxldCBsaXN0T2ZOb2RlcyA9IFtdO1xuICAgICAgICBsZXQgd2FsayA9IHRoaXMuX2dldERvY3VtZW50KCkuY3JlYXRlVHJlZVdhbGtlcihub2RlLCBOb2RlRmlsdGVyLlNIT1dfQUxMLCB7XG4gICAgICAgICAgICBhY2NlcHROb2RlOiBub2RlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuTk9ERV9OQU1FU19UT19JR05PUkUuaW5jbHVkZXMobm9kZS5ub2RlTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgPyBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFRcbiAgICAgICAgICAgICAgICAgICAgOiBOb2RlRmlsdGVyLkZJTFRFUl9SRUpFQ1Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgbiA9IG51bGw7XG4gICAgICAgIHdoaWxlICgobiA9IHdhbGsubmV4dE5vZGUoKSkpIHtcbiAgICAgICAgICAgIGxpc3RPZk5vZGVzLnB1c2gobik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3RPZk5vZGVzO1xuICAgIH1cbiAgICBfZmJTYXZlU25hcHNob3QoaWQsIHN0YXRlKSB7XG4gICAgICAgIHRoaXMuX2ZiU2V0U25hcHNob3QoaWQsIHN0YXRlKTtcbiAgICAgICAgdGhpcy5fZmJBZGRUb1NuYXBzaG90TGlzdChpZCwgeyB2aXNpYmxlOiB0cnVlLCBtZXRhOiBzdGF0ZS5tZXRhIH0pO1xuICAgIH1cbiAgICBjcmVhdGVTbmFwc2hvdChyb290Tm9kZSA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBzb3VyY2UgPSB7fTtcbiAgICAgICAgdGhpcy5fY2xlYXJTdGF0ZShzb3VyY2UpO1xuICAgICAgICB0aGlzLl9jb3B5V29ybGQocm9vdE5vZGUsIHNvdXJjZSk7XG4gICAgICAgIHRoaXMuYWRkTWV0YShcIkRhdGVcIiwgRGF0ZS5ub3coKSwgc291cmNlKTtcbiAgICAgICAgdGhpcy5hZGRNZXRhKFwiVVJMXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmLCBzb3VyY2UpO1xuICAgICAgICB0aGlzLmFkZE1ldGEoXCJCcm93c2VyXCIsIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LCBzb3VyY2UpO1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLl9nZXRTdGF0ZShzb3VyY2UpO1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICAgIHNhdmVTbmFwc2hvdChjdXN0b21JZCA9IGZhbHNlLCBzdGF0ZSkge1xuICAgICAgICBjb25zdCBpZCA9IGN1c3RvbUlkIHx8IERhdGUubm93KCk7XG4gICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlID0gdGhpcy5jcmVhdGVTbmFwc2hvdCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2ZiU2F2ZVNuYXBzaG90KGlkLCBzdGF0ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBzbmFwc2hvdCBJRCBpczogJHtpZH1gKTtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH1cbiAgICBfc2V0Qm9keUF0dHJpYnV0ZXMoc291cmNlKSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBzb3VyY2UuQk9EWV9BVFRSSUJVVEVTO1xuICAgICAgICBjb25zdCBib2R5ID0gdGhpcy5fZ2V0Qm9keU5vZGUoKTtcbiAgICAgICAgdGhpcy5fZm9yRWFjaChhdHRyaWJ1dGVzLCAoW25hbWUsIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgYm9keS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNldEJvZHlOb2RlKG5vZGUpIHtcbiAgICAgICAgdGhpcy5fYm9keSA9IG5vZGU7XG4gICAgfVxuICAgIF9zZXRCb2R5U3R5bGUoc291cmNlKSB7XG4gICAgICAgIHRoaXMuX3NldE5vZGVTdHlsZUZyb21TdHlsZUFycmF5KHNvdXJjZS5CT0RZX1NUWUxFLCB0aGlzLl9nZXRCb2R5Tm9kZSgpLCBzb3VyY2UpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2V0SGVhZE5vZGUobm9kZSkge1xuICAgICAgICB0aGlzLl9oZWFkID0gbm9kZTtcbiAgICB9XG4gICAgX3NldEhUTUxTdHlsZShzb3VyY2UpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuX2dldEh0bWxOb2RlKCk7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXROb2RlU3R5bGVGcm9tU3R5bGVBcnJheShzb3VyY2UuSFRNTF9TVFlMRSwgbm9kZSwgc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2V0SHRtbE5vZGUobm9kZSkge1xuICAgICAgICB0aGlzLl9odG1sID0gbm9kZTtcbiAgICB9XG4gICAgX3NldE5vZGVTdHlsZUZyb21TdHlsZUFycmF5KHN0eWxlcywgbm9kZSwgc291cmNlKSB7XG4gICAgICAgIHRoaXMuX2ZvckVhY2goc3R5bGVzLCBrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW25hbWUsIHZhbHVlXSA9IHRoaXMuX2dldEZyb21PcHRpbWFsVmFsdWUoa2V5LCBzb3VyY2UpO1xuICAgICAgICAgICAgbm9kZS5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHNldE1ldGEobWV0YSkge1xuICAgICAgICBpZiAodHlwZW9mIG1ldGEgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibWV0YSBzaG91bGQgYmUgYW4gb2JqZWN0XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWV0YSA9IE9iamVjdC5hc3NpZ24oe30sIG1ldGEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2V0U3RhdGUodGFyZ2V0ID0gdGhpcywgc3RhdGUpIHtcbiAgICAgICAgdGFyZ2V0Lm1ldGEgPSB0aGlzLl9jbG9uZU9iamVjdChzdGF0ZS5tZXRhKSB8fCB0aGlzLm1ldGEgfHwge307XG4gICAgICAgIHRhcmdldC5pdGVtcyA9IHRoaXMuX2dldEFycmF5Q29weShzdGF0ZS5pdGVtcykgfHwgW107XG4gICAgICAgIHRhcmdldC5DQUNIRV9LRVlTID0gdGhpcy5fZ2V0QXJyYXlDb3B5KHN0YXRlLkNBQ0hFX0tFWVMpIHx8IFtdO1xuICAgICAgICB0YXJnZXQuQ0FDSEVfVkFMVUVTID0gdGhpcy5fZ2V0QXJyYXlDb3B5KHN0YXRlLkNBQ0hFX1ZBTFVFUykgfHwgW107XG4gICAgICAgIHRhcmdldC5CT0RZX1NUWUxFID0gdGhpcy5fZ2V0QXJyYXlDb3B5KHN0YXRlLkJPRFlfU1RZTEUpIHx8IFtdO1xuICAgICAgICB0YXJnZXQuSFRNTF9TVFlMRSA9IHRoaXMuX2dldEFycmF5Q29weShzdGF0ZS5IVE1MX1NUWUxFKSB8fCBbXTtcbiAgICAgICAgdGFyZ2V0LkJPRFlfQVRUUklCVVRFUyA9IHRoaXMuX2dldEFycmF5Q29weShzdGF0ZS5CT0RZX0FUVFJJQlVURVMpIHx8IFtdO1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cbiAgICBzZXRTdHlsZUZyb21PYmplY3Qobm9kZSwgc3R5bGVPYmplY3QpIHtcbiAgICAgICAgdGhpcy5fZm9yRWFjaChPYmplY3Qua2V5cyhzdHlsZU9iamVjdCksIGtleSA9PiB7XG4gICAgICAgICAgICBub2RlLnN0eWxlW2tleV0gPSBzdHlsZU9iamVjdFtrZXldO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vLyBzZXQgcm9vdE5vZGUgZm9yIGNhcHR1cmluZ1xuICAgIHNldFRhcmdldChub2RlKSB7XG4gICAgICAgIHRoaXMuc2V0Qm9keU5vZGUobm9kZSk7XG4gICAgICAgIHRoaXMuc2V0SHRtbE5vZGUobm9kZS5wYXJlbnROb2RlKTtcbiAgICAgICAgdGhpcy5zZXRIZWFkTm9kZShub2RlLnBhcmVudE5vZGUpO1xuICAgIH1cbiAgICBfc3R5bGVPYmplY3RUb09wdGltYWxTdHlsZUFycmF5KHN0eWxlT2JqZWN0ID0ge30sIHBhcmVudEluZGV4LCBzb3VyY2UpIHtcbiAgICAgICAgbGV0IHBhcmVudFN0eWxlID0gW107XG4gICAgICAgIGlmICh0aGlzLmlzTm90VW5kZWZpbmVkKHBhcmVudEluZGV4KSkge1xuICAgICAgICAgICAgcGFyZW50U3R5bGUgPSB0aGlzLmdldFBhcmVudFN0eWxlQnlJbmRleChwYXJlbnRJbmRleCwgc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdHlsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fZm9yRWFjaChPYmplY3Qua2V5cyhzdHlsZU9iamVjdCksIGVsID0+IHtcbiAgICAgICAgICAgIGxldCBzdHlsZUtleSA9IHRoaXMuZ2V0T3B0aW1hbFZhbHVlKGVsLCBzdHlsZU9iamVjdFtlbF0sIHNvdXJjZSk7XG4gICAgICAgICAgICBpZiAoc3R5bGVLZXkgJiZcbiAgICAgICAgICAgICAgICAhKHRoaXMuSU5IRVJJVC5pbmNsdWRlcyhlbCkgJiYgcGFyZW50U3R5bGUuaW5jbHVkZXMoc3R5bGVLZXkpKSkge1xuICAgICAgICAgICAgICAgIHN0eWxlcy5wdXNoKHN0eWxlS2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgfVxuICAgIHNraXBTdHlsZShuYW1lLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNEZWZhdWx0U3R5bGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgICBfc2hvdWxkVGFrZUVsZW1lbnQobm9kZSwgbm9kZVN0eWxlKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1NWRyhub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuTk9ERV9OQU1FU19UT19JR05PUkUuaW5jbHVkZXMobm9kZS5ub2RlTmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5wYXJlbnROb2RlICYmXG4gICAgICAgICAgICB0aGlzLk5PREVfTkFNRVNfVE9fSUdOT1JFLmluY2x1ZGVzKG5vZGUucGFyZW50Tm9kZS5ub2RlTmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5wYXJlbnROb2RlICYmIG5vZGUucGFyZW50Tm9kZS5kYXRhc2V0Lmlnbm9yZWQpIHtcbiAgICAgICAgICAgIGlmIChub2RlLmRhdGFzZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBub2RlLmRhdGFzZXQuaWdub3JlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnJlc3RyaWN0ZWROb2RlVHlwZXMuaW5jbHVkZXMobm9kZS5ub2RlVHlwZSkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNraXBEaXNwbGF5Tm9uZSAmJiBub2RlLnN0eWxlICYmIG5vZGVTdHlsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZVN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgbm9kZS5kYXRhc2V0Lmlnbm9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpc05vdFVuZGVmaW5lZChlbCkge1xuICAgICAgICByZXR1cm4gZWwgIT09IHZvaWQgMDtcbiAgICB9XG4gICAgX2lzTm90RW1wdHlBcnJheShhcnIpIHtcbiAgICAgICAgcmV0dXJuIGFyciAmJiBhcnIubGVuZ3RoO1xuICAgIH1cbiAgICBfaGFzVGV4dENvbnRlbnQobm9kZSA9IHsgdGV4dENvbnRlbnQ6IFwiXCIgfSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG5vZGUudGV4dENvbnRlbnQgPT09IFwic3RyaW5nXCIgJiYgbm9kZS50ZXh0Q29udGVudC5sZW5ndGg7XG4gICAgfVxuICAgIF9oYXNOb2RlSW5DYWNoZShub2RlTmFtZSkge1xuICAgICAgICByZXR1cm4gbm9kZU5hbWUgaW4gdGhpcy5ub2RlQ2FjaGU7XG4gICAgfVxuICAgIF9hZGROb2RlVG9DYWNoZShub2RlTmFtZSkge1xuICAgICAgICB0aGlzLm5vZGVDYWNoZVtub2RlTmFtZV0gPSB0aGlzLl9nZXREb2N1bWVudCgpLmNyZWF0ZUVsZW1lbnQobm9kZU5hbWUpO1xuICAgIH1cbiAgICBfZ2V0VGV4dE5vZGUodGV4dENvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldERvY3VtZW50KCkuY3JlYXRlVGV4dE5vZGUodGV4dENvbnRlbnQpO1xuICAgIH1cbiAgICBfZ2V0U1ZHTm9kZShub2RlTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RG9jdW1lbnQoKS5jcmVhdGVFbGVtZW50TlModGhpcy5fTkFNRVNQQUNFUy5TVkcsIG5vZGVOYW1lKTtcbiAgICB9XG4gICAgX2FkZFRleHRDb250ZW50KG5vZGUsIHBhcmFtcykge1xuICAgICAgICBpZiAodGhpcy5faGFzVGV4dENvbnRlbnQocGFyYW1zKSkge1xuICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IHBhcmFtcy50ZXh0Q29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfY3JlYXRlTm9kZShwYXJhbXMgPSB7XG4gICAgICAgIG5vZGVUeXBlOiBcIjNcIixcbiAgICAgICAgaW5kZXg6IDMsXG4gICAgICAgIHRleHRDb250ZW50OiBcIm5vb3BcIixcbiAgICAgICAgYXR0cmlidXRlczogW10sXG4gICAgICAgIHN0eWxlczogW10sXG4gICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgaXNTVkc6IGZhbHNlLFxuICAgICAgICBwc2V1ZG9zZWxlY3RvcnM6IHVuZGVmaW5lZCxcbiAgICAgICAgbm9kZU5hbWU6IFwiRElWXCJcbiAgICB9LCBzdHlsZXMsIHNvdXJjZSkge1xuICAgICAgICBsZXQgbm9kZSA9IG51bGw7XG4gICAgICAgIGNvbnN0IHsgbm9kZU5hbWUsIHRleHRDb250ZW50LCBub2RlVHlwZSwgaXNTVkcgfSA9IHBhcmFtcztcbiAgICAgICAgaWYgKHRoaXMucmVzdHJpY3RlZE5vZGVUeXBlcy5pbmNsdWRlcyhwYXJzZUludChub2RlVHlwZSkpKSB7XG4gICAgICAgICAgICBub2RlID0gaXNTVkcgPyB0aGlzLl9nZXRTVkdOb2RlKFwidGV4dFwiKSA6IHRoaXMuX2dldFRleHROb2RlKHRleHRDb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1NWRykge1xuICAgICAgICAgICAgbm9kZSA9IHRoaXMuX2dldFNWR05vZGUobm9kZU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZSA9IHRoaXMuX2dldE5vZGVCeU5hbWUobm9kZU5hbWUpO1xuICAgICAgICAgICAgdGhpcy5fYWRkVGV4dENvbnRlbnQobm9kZSwgcGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG5vZGUuc2V0QXR0cmlidXRlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKHRoaXMuX25vZGVTZWxlY3Rvck5hbWUoKSwgcGFyYW1zLmluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5faXNOb3RFbXB0eUFycmF5KHBhcmFtcy5hdHRyaWJ1dGVzKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9mb3JFYWNoKHBhcmFtcy5hdHRyaWJ1dGVzLCAoW25hbWUsIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzU1ZHKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUuaW5jbHVkZXMoXCJkYXRhLVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faXNTYWZlQXR0cmlidXRlKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSBcImlkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRvbid0IGhhbmRsZSBpZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUsIG5vZGUsIG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIF9hZGRTdHlsZU5vZGVcbiAgICAgICAgaWYgKHRoaXMuX2lzTm90RW1wdHlBcnJheShwYXJhbXMuc3R5bGVzKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX1VTRV9JTkxJTkVfU1RZTEVTKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0Tm9kZVN0eWxlRnJvbVN0eWxlQXJyYXkocGFyYW1zLnN0eWxlcywgbm9kZSwgc291cmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0eWxlcy5wdXNoKHRoaXMuX3N0eWxlVGV4dEZvck5vZGUocGFyYW1zLmluZGV4LCBwYXJhbXMuc3R5bGVzLCBcIlwiLCBzb3VyY2UpKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLnBzZXVkb3NlbGVjdG9ycykge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXMucHVzaCh0aGlzLl9zdHlsZVRleHRGb3JOb2RlKHBhcmFtcy5pbmRleCwgcGFyYW1zLnBzZXVkb3NlbGVjdG9ycy5iZWZvcmUsIFwiOmJlZm9yZVwiLCBzb3VyY2UpKTtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzLnB1c2godGhpcy5fc3R5bGVUZXh0Rm9yTm9kZShwYXJhbXMuaW5kZXgsIHBhcmFtcy5wc2V1ZG9zZWxlY3RvcnMuYWZ0ZXIsIFwiOmFmdGVyXCIsIHNvdXJjZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiAobm9kZS5kYXRhc2V0KSB7XG4gICAgICAgIC8vICAgbm9kZS5kYXRhc2V0LnBhcmVudCA9IHBhcmFtcy5wYXJlbnQ7XG4gICAgICAgIC8vIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIF9zdHlsZVRleHRGb3JOb2RlKGluZGV4LCBzdHlsZXMsIHBvc3RmaXggPSBcIlwiLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIGBbJHt0aGlzLl9ub2RlU2VsZWN0b3JOYW1lKCl9PVwiJHt0aGlzLl9ub2RlU2VsZWN0b3JWYWx1ZShpbmRleCl9XCJdJHtwb3N0Zml4fSB7ICR7dGhpcy5fZ2V0Tm9kZVN0eWxlVGV4dChzdHlsZXMsIHNvdXJjZSl9IH1gO1xuICAgIH1cbiAgICBfbm9kZVNlbGVjdG9yTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIGBkYXRhLXVpZF8ke3RoaXMuX25vZGVTZWxlY3RvckRhdGFzZXROYW1lKCl9YDtcbiAgICB9XG4gICAgX25vZGVTZWxlY3RvckRhdGFzZXROYW1lKCkge1xuICAgICAgICBpZiAodGhpcy51aWRQcmVmaXggIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLnVpZFByZWZpeH1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiaW5kZXhcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfbm9kZVNlbGVjdG9yVmFsdWUoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgICBfaW5zZXJ0Tm9kZShub2RlLCBvYmosIGZyYWdtZW50LCBub2Rlc0luZGV4KSB7XG4gICAgICAgIGxldCBwYXJlbnRJZCA9IG9iai5wYXJlbnQ7XG4gICAgICAgIC8vIGNvbnN0IHNlbGVjdG9yID0gYFske3RoaXMuX25vZGVTZWxlY3Rvck5hbWUoKX09XCIke3RoaXMuX25vZGVTZWxlY3RvclZhbHVlKFxuICAgICAgICAvLyAgIHBhcmVudElkXG4gICAgICAgIC8vICl9XCJdYDtcbiAgICAgICAgaWYgKHBhcmVudElkID09PSAwICYmIGZyYWdtZW50LmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyB8fCBub2Rlc0luZGV4W3BhcmVudElkXVxuICAgICAgICBjb25zdCBwYXJlbnQgPSBub2Rlc0luZGV4W3BhcmVudElkXSB8fCBmcmFnbWVudDtcbiAgICAgICAgaWYgKG5vZGUgPT09IHBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcGFyZW50LmFwcGVuZENoaWxkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfZ2V0VmFsdWVPckVtcHR5U3RyaW5nKG9iaiwga2V5KSB7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfZ2V0QWxsS2V5c0RpZmYoZmlyc3QgPSB7fSwgc2Vjb25kID0ge30pIHtcbiAgICAgICAgbGV0IGZLZXlzID0gT2JqZWN0LmtleXMoZmlyc3QpO1xuICAgICAgICBsZXQgc0tleXMgPSBPYmplY3Qua2V5cyhzZWNvbmQpO1xuICAgICAgICBsZXQgYWxsS2V5cyA9IEFycmF5LmZyb20obmV3IFNldChbXS5jb25jYXQoZktleXMsIHNLZXlzKSkpO1xuICAgICAgICBsZXQgZGlmZnMgPSB7fTtcbiAgICAgICAgYWxsS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBsZXQgZlZhbHVlID0gdGhpcy5fZ2V0VmFsdWVPckVtcHR5U3RyaW5nKGZpcnN0LCBrZXkpO1xuICAgICAgICAgICAgbGV0IHNWYWx1ZSA9IHRoaXMuX2dldFZhbHVlT3JFbXB0eVN0cmluZyhzZWNvbmQsIGtleSk7XG4gICAgICAgICAgICBpZiAoZlZhbHVlICE9PSBzVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBkaWZmc1trZXldID0gW2ZWYWx1ZSwgc1ZhbHVlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkaWZmcykubGVuZ3RoID8gZGlmZnMgOiBmYWxzZTtcbiAgICB9XG4gICAgX2dldEVxdWFsS2V5c0RpZmYoZmlyc3QsIHNlY29uZCkge1xuICAgICAgICBsZXQgZGlmZnMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoZmlyc3QpLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKGZpcnN0W2tleV0gIT09IHNlY29uZFtrZXldKSB7XG4gICAgICAgICAgICAgICAgZGlmZnNba2V5XSA9IFtmaXJzdFtrZXldLCBzZWNvbmRba2V5XV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZGlmZnMpLmxlbmd0aCA/IGRpZmZzIDogZmFsc2U7XG4gICAgfVxuICAgIF9nZXRTdHlsZXNGb3JQc2V1ZG9TZWxlY3RvcnMobm9kZSwgc291cmNlKSB7XG4gICAgICAgIGNvbnN0IGJlZm9yZSA9IHRoaXMuX2NyZWF0ZVN0eWxlT2JqZWN0KHRoaXMuX2dldFN0eWxlRm9yTm9kZShub2RlLCBcIjpiZWZvcmVcIikpO1xuICAgICAgICBjb25zdCBhZnRlciA9IHRoaXMuX2NyZWF0ZVN0eWxlT2JqZWN0KHRoaXMuX2dldFN0eWxlRm9yTm9kZShub2RlLCBcIjphZnRlclwiKSk7XG4gICAgICAgIGNvbnN0IHN0eWxlRGlmZiA9IHRoaXMuX2dldEVxdWFsS2V5c0RpZmYoYmVmb3JlLCBhZnRlcik7XG4gICAgICAgIGlmIChzdHlsZURpZmYpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYmVmb3JlOiB0aGlzLl9zdHlsZU9iamVjdFRvT3B0aW1hbFN0eWxlQXJyYXkoYmVmb3JlLCB1bmRlZmluZWQsIHNvdXJjZSksXG4gICAgICAgICAgICAgICAgYWZ0ZXI6IHRoaXMuX3N0eWxlT2JqZWN0VG9PcHRpbWFsU3R5bGVBcnJheShhZnRlciwgdW5kZWZpbmVkLCBzb3VyY2UpLFxuICAgICAgICAgICAgICAgIGRpZmY6IHN0eWxlRGlmZixcbiAgICAgICAgICAgICAgICBpbmRleDogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfZ2V0U3R5bGVGb3JOb2RlKGVsZW1lbnQsIHBzZXVkb3NlbGVjb3IgPSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc3RyaWN0ZWROb2RlVHlwZXMuaW5jbHVkZXMoZWxlbWVudC5ub2RlVHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc3R5bGUgPSBbXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgcHNldWRvc2VsZWNvcik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUsIGVsZW1lbnQsIGVsZW1lbnQubm9kZVR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9XG4gICAgX2dldEJvZHlOb2RlKCkge1xuICAgICAgICAvL2xlZ2FjeSBob29rXG4gICAgICAgIGlmIChcImdldEJvZHlOb2RlXCIgaW4gdGhpcyAmJiB0eXBlb2YgdGhpcy5nZXRCb2R5Tm9kZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRCb2R5Tm9kZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9ib2R5IHx8IHdpbmRvdy5kb2N1bWVudC5ib2R5O1xuICAgIH1cbiAgICBfZ2V0RG9jdW1lbnQoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICB9XG4gICAgX2dldE5vZGVTdHlsZVRleHQoc3R5bGVzLCBzb3VyY2UpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBbXTtcbiAgICAgICAgdGhpcy5fZm9yRWFjaChzdHlsZXMsIGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBbbmFtZSwgdmFsdWVdID0gdGhpcy5fZ2V0RnJvbU9wdGltYWxWYWx1ZShrZXksIHNvdXJjZSk7XG4gICAgICAgICAgICBzdHlsZS5wdXNoKGAke25hbWV9OiR7dmFsdWV9YCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3R5bGUuam9pbihcIjtcIik7XG4gICAgfVxuICAgIF9nZXROb2RlQnlOYW1lKG5vZGVOYW1lKSB7XG4gICAgICAgIGlmICghdGhpcy5faGFzTm9kZUluQ2FjaGUobm9kZU5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGROb2RlVG9DYWNoZShub2RlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE5vZGVGcm9tQ2FjaGUobm9kZU5hbWUpO1xuICAgIH1cbiAgICBfZ2V0Tm9kZUZyb21DYWNoZSh0YWcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZUNhY2hlW3RhZ10uY2xvbmVOb2RlKGZhbHNlKTtcbiAgICB9XG4gICAgX2dldEZyb21PcHRpbWFsVmFsdWUodmFsdWUsIHNvdXJjZSA9IHRoaXMpIHtcbiAgICAgICAgY29uc3QgW2tleUluZGV4LCB2YWx1ZUluZGV4XSA9IHZhbHVlLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgcmV0dXJuIFtzb3VyY2UuQ0FDSEVfS0VZU1trZXlJbmRleF0sIHNvdXJjZS5DQUNIRV9WQUxVRVNbdmFsdWVJbmRleF1dO1xuICAgIH1cbiAgICBnZXRPcHRpbWFsVmFsdWUoa2V5LCB2YWx1ZSwgc291cmNlKSB7XG4gICAgICAgIGlmICh0aGlzLlNLSVBfU1RZTEVTW2tleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGtleUluZGV4ID0gc291cmNlLkNBQ0hFX0tFWVMuaW5kZXhPZihrZXkpO1xuICAgICAgICBsZXQga2V5VmFsdWUgPSBzb3VyY2UuQ0FDSEVfVkFMVUVTLmluZGV4T2YodmFsdWUpO1xuICAgICAgICBpZiAoa2V5SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBzb3VyY2UuQ0FDSEVfS0VZUy5wdXNoKGtleSk7XG4gICAgICAgICAgICBrZXlJbmRleCA9IHNvdXJjZS5DQUNIRV9LRVlTLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleVZhbHVlID09PSAtMSkge1xuICAgICAgICAgICAgc291cmNlLkNBQ0hFX1ZBTFVFUy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIGtleVZhbHVlID0gc291cmNlLkNBQ0hFX1ZBTFVFUy5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHtrZXlJbmRleH0vJHtrZXlWYWx1ZX1gO1xuICAgIH1cbiAgICBfZ2V0U3RhdGUodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXRhOiB0aGlzLl9jbG9uZU9iamVjdCh0YXJnZXQubWV0YSksXG4gICAgICAgICAgICBpdGVtczogdGhpcy5fZ2V0QXJyYXlDb3B5KHRhcmdldC5pdGVtcyksXG4gICAgICAgICAgICBIVE1MX1NUWUxFOiB0aGlzLl9nZXRBcnJheUNvcHkodGFyZ2V0LkhUTUxfU1RZTEUpLFxuICAgICAgICAgICAgQk9EWV9TVFlMRTogdGhpcy5fZ2V0QXJyYXlDb3B5KHRhcmdldC5CT0RZX1NUWUxFKSxcbiAgICAgICAgICAgIENBQ0hFX0tFWVM6IHRoaXMuX2dldEFycmF5Q29weSh0YXJnZXQuQ0FDSEVfS0VZUyksXG4gICAgICAgICAgICBDQUNIRV9WQUxVRVM6IHRoaXMuX2dldEFycmF5Q29weSh0YXJnZXQuQ0FDSEVfVkFMVUVTKSxcbiAgICAgICAgICAgIEJPRFlfQVRUUklCVVRFUzogdGhpcy5fZ2V0QXJyYXlDb3B5KHRhcmdldC5CT0RZX0FUVFJJQlVURVMpXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldFBhcmVudFN0eWxlQnlJbmRleChpbmRleCwgc291cmNlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXggIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2UuQk9EWV9TVFlMRSB8fCBbXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChzb3VyY2UuaXRlbXNbaV0gJiYgc291cmNlLml0ZW1zW2ldLmluZGV4ID09PSBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc291cmNlLml0ZW1zW2ldLnN0eWxlIHx8IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmlmICh0eXBlb2Ygd2luZG93LkFVVE9TVEFSVCA9PT0gXCJib29sZWFuXCIgJiYgd2luZG93LkFVVE9TVEFSVCA9PT0gdHJ1ZSkge1xuICAgIG5ldyBEb21TbmFwc2hvdCgpO1xufVxuZWxzZSB7XG4gICAgd2luZG93LnNuYXBzaG90ZXIgPSBuZXcgRG9tU25hcHNob3QoKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZGVmYXVsdF8xKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgICAgaG9zdG5hbWU6IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSxcbiAgICAgICAgcHJvdG9jb2w6IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCxcbiAgICAgICAgdXJsOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgc2NyZWVuV2lkdGg6IHdpbmRvdy5zY3JlZW4ud2lkdGgsXG4gICAgICAgIHNjcmVlbkhlaWdodDogd2luZG93LnNjcmVlbi5oZWlnaHQsXG4gICAgICAgIHNjcmVlbkF2YWlsV2lkdGg6IHdpbmRvdy5zY3JlZW4uYXZhaWxXaWR0aCxcbiAgICAgICAgc2NyZWVuQXZhaWxIZWlnaHQ6IHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQsXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZhdWx0XzE7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb2xsZWN0LW1ldGEuanMubWFwIl19
