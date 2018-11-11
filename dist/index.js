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
    svg: 'http://www.w3.org/2000/svg',
    xhtml: 'http://www.w3.org/1999/xhtml',
    xml: 'http://www.w3.org/XML/1998/namespace',
    xlink: 'http://www.w3.org/1999/xlink',
    xmlns: 'http://www.w3.org/2000/xmlns'
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
        return element.namespaceURI === this._NAMESPACES.svg;
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
        return this._getDocument().createElementNS(this._NAMESPACES.svg, nodeName);
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
                        // https://github.com/asnowwolf/angular/commit/3adb1abff81d60c8440a73c9ab75c193eaf2cf51
                        if (isSVG) {
                            if (name.includes("data-")) {
                                node.setAttribute(name, value);
                            }
                            else {
                                try {
                                    node.setAttributeNS(null, name, value);
                                }
                                catch (e) {
                                    try {
                                        node.setAttributeNS(this._NAMESPACES.svg, name, value);
                                    }
                                    catch (ee) {
                                        node.setAttribute(name, value);
                                    }
                                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUvbGlmZWFydC9yZXBvc2l0b3JpZXMvZG9tLXNuYXBzaG90L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjb25maWcvZmlyZWJhc2UtZGVmYXVsdC1jb25maWcuanMiLCJjb25zdGFudHMvZG9tLW5hbWVzcGFjZXMuanMiLCJjb25zdGFudHMvZG9tLXBzZXVkb3NlbGVjdG9ycy5qcyIsImNvbnN0YW50cy9lc2NhcGVkLWF0dHJpYnV0ZXMuanMiLCJjb25zdGFudHMvaW5oZXJpdC1zdHlsZS1hdHRyaWJ1dGVzLmpzIiwiY29uc3RhbnRzL25vZGUtbmFtZXMtdG8taWdub3JlLmpzIiwiY29uc3RhbnRzL25vZGUtbmFtZXMtdG8tcmVwbGFjZS5qcyIsImNvbnN0YW50cy9za2lwcGVkLXN0eWxlLWF0dHJpYnV0ZXMuanMiLCJpbmRleC5qcyIsInV0aWxzL2NvbGxlY3QtbWV0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcitCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBGSVJFQkFTRV9ERUZBVUxUX0NPTkZJRyA9IHtcbiAgICBhcGlLZXk6ICdBSXphU3lBODR2YWdfUzBRU083ajFFZmY0dlpKRWpkTGM2d1B4ME0nLFxuICAgIGF1dGhEb21haW46ICdkb20tc25hcHNob3QuZmlyZWJhc2VhcHAuY29tJyxcbiAgICBkYXRhYmFzZVVSTDogJ2h0dHBzOi8vZG9tLXNuYXBzaG90LmZpcmViYXNlaW8uY29tJyxcbiAgICBwcm9qZWN0SWQ6ICdkb20tc25hcHNob3QnLFxuICAgIHN0b3JhZ2VCdWNrZXQ6ICdkb20tc25hcHNob3QuYXBwc3BvdC5jb20nLFxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiAnNTc4MDA5MzU0MTcxJ1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEZJUkVCQVNFX0RFRkFVTFRfQ09ORklHO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmlyZWJhc2UtZGVmYXVsdC1jb25maWcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBET01fTkFNRVNQQUNFUyA9IHtcbiAgICBzdmc6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG4gICAgeGh0bWw6ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJyxcbiAgICB4bWw6ICdodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2UnLFxuICAgIHhsaW5rOiAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsXG4gICAgeG1sbnM6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zJ1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IERPTV9OQU1FU1BBQ0VTO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZG9tLW5hbWVzcGFjZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBQU0VVRE9TRUxFQ1RPUlMgPSBbXG4gICAgJzphZnRlcicsICc6YmVmb3JlJywgJzpmaXJzdC1saW5lJywgJzpmaXJzdC1sZXR0ZXInLCAnOnNlbGVjdGlvbidcbl07XG5leHBvcnRzLmRlZmF1bHQgPSBQU0VVRE9TRUxFQ1RPUlM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kb20tcHNldWRvc2VsZWN0b3JzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgRVNDQVBFRF9BVFRSSUJVVEVTID0gW1xuICAgIC8vYm9keVxuICAgICdvbmFmdGVycHJpbnQnLFxuICAgICdvbmJlZm9yZXByaW50JyxcbiAgICAnb25iZWZvcmV1bmxvYWQnLFxuICAgICdvbmVycm9yJyxcbiAgICAnb25oYXNoY2hhbmdlJyxcbiAgICAnb25sb2FkJyxcbiAgICAnb25tZXNzYWdlJyxcbiAgICAnb25vZmZsaW5lJyxcbiAgICAnb25vbmxpbmUnLFxuICAgICdvbnBhZ2VoaWRlJyxcbiAgICAnb25wYWdlc2hvdycsXG4gICAgJ29ucG9wc3RhdGUnLFxuICAgICdvbnJlc2l6ZScsXG4gICAgJ29uc3RvcmFnZScsXG4gICAgJ29udW5sb2FkJyxcbiAgICAvL2Zvcm1zXG4gICAgJ29uYmx1cicsXG4gICAgJ29uY2hhbmdlJyxcbiAgICAnb25jb250ZXh0bWVudScsXG4gICAgJ29uZm9jdXMnLFxuICAgICdvbmlucHV0JyxcbiAgICAnb25pbnZhbGlkJyxcbiAgICAnb25yZXNldCcsXG4gICAgJ29uc2VhcmNoJyxcbiAgICAnb25zZWxlY3QnLFxuICAgICdvbnN1Ym1pdCcsXG4gICAgLy9rZXlib2FyZFxuICAgICdvbmtleWRvd24nLFxuICAgICdvbmtleXByZXNzJyxcbiAgICAnb25rZXl1cCcsXG4gICAgLy9tb3VzZVxuICAgICdvbmNsaWNrJyxcbiAgICAnb25kYmxjbGljaycsXG4gICAgJ29ubW91c2Vkb3duJyxcbiAgICAnb25tb3VzZW1vdmUnLFxuICAgICdvbm1vdXNlb3V0JyxcbiAgICAnb25tb3VzZW92ZXInLFxuICAgICdvbm1vdXNldXAnLFxuICAgICdvbm1vdXNld2hlZWwnLFxuICAgICdvbndoZWVsJyxcbiAgICAvL0RyYWcgRXZlbnRzXG4gICAgJ29uZHJhZycsXG4gICAgJ29uZHJhZ2VuZCcsXG4gICAgJ29uZHJhZ2VudGVyJyxcbiAgICAnb25kcmFnbGVhdmUnLFxuICAgICdvbmRyYWdvdmVyJyxcbiAgICAnb25kcmFnc3RhcnQnLFxuICAgICdvbmRyb3AnLFxuICAgICdvbnNjcm9sbCcsXG4gICAgLy9DbGlwYm9hcmQgRXZlbnRzXG4gICAgJ29uY29weScsXG4gICAgJ29uY3V0JyxcbiAgICAnb25wYXN0ZScsXG4gICAgLy8gTWVkaWEgRXZlbnRzXG4gICAgJ29uYWJvcnQnLFxuICAgICdvbmNhbnBsYXknLFxuICAgICdvbmNhbnBsYXl0aHJvdWdoJyxcbiAgICAnb25jdWVjaGFuZ2UnLFxuICAgICdvbmR1cmF0aW9uY2hhbmdlJyxcbiAgICAnb25lbXB0aWVkJyxcbiAgICAnb25lbmRlZCcsXG4gICAgJ29uZXJyb3InLFxuICAgICdvbmxvYWRlZGRhdGEnLFxuICAgICdvbmxvYWRlZG1ldGFkYXRhJyxcbiAgICAnb25sb2Fkc3RhcnQnLFxuICAgICdvbnBhdXNlJyxcbiAgICAnb25wbGF5JyxcbiAgICAnb25wbGF5aW5nJyxcbiAgICAnb25wcm9ncmVzcycsXG4gICAgJ29ucmF0ZWNoYW5nZScsXG4gICAgJ29uc2Vla2VkJyxcbiAgICAnb25zZWVraW5nJyxcbiAgICAnb25zdGFsbGVkJyxcbiAgICAnb25zdXNwZW5kJyxcbiAgICAnb250aW1ldXBkYXRlJyxcbiAgICAnb252b2x1bWVjaGFuZ2UnLFxuICAgICdvbndhaXRpbmcnLFxuICAgIC8vIE1pc2MgRXZlbnRzXG4gICAgJ29udG9nZ2xlJ1xuXTtcbmV4cG9ydHMuZGVmYXVsdCA9IEVTQ0FQRURfQVRUUklCVVRFUztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVzY2FwZWQtYXR0cmlidXRlcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElOSEVSSVRfU1RZTEVfQVRUUklCVVRFUyA9IFtcbiAgICAnYXppbXV0aCcsICdib3JkZXItY29sbGFwc2UnLCAnYm9yZGVyLXNwYWNpbmcnLCAnY2FwdGlvbi1zaWRlJyxcbiAgICAnY29sb3InLCAnY3Vyc29yJywgJ2RpcmVjdGlvbicsICdlbGV2YXRpb24nLCAnZW1wdHktY2VsbHMnLFxuICAgICdmb250LWZhbWlseScsICdmb250LXNpemUnLCAnZm9udC1zdHlsZScsICdmb250LXZhcmlhbnQnLCAnZm9udC13ZWlnaHQnLFxuICAgICdmb250JywgJ2xldHRlci1zcGFjaW5nJywgJ2xpbmUtaGVpZ2h0JywgJ2xpc3Qtc3R5bGUtaW1hZ2UnLCAnbGlzdC1zdHlsZS1wb3NpdGlvbicsXG4gICAgJ2xpc3Qtc3R5bGUtdHlwZScsICdsaXN0LXN0eWxlJywgJ29ycGhhbnMnLCAncGl0Y2gtcmFuZ2UnLCAncGl0Y2gnLCAncXVvdGVzJywgJ3JpY2huZXNzJyxcbiAgICAnc3BlYWstaGVhZGVyJywgJ3NwZWFrLW51bWVyYWwnLCAnc3BlYWstcHVuY3R1YXRpb24nLCAnc3BlYWsnLFxuICAgICdzcGVlY2gtcmF0ZScsICdzdHJlc3MnLCAndGV4dC1hbGlnbicsICd0ZXh0LWluZGVudCcsICd0ZXh0LXRyYW5zZm9ybScsXG4gICAgJ3Zpc2liaWxpdHknLCAndm9pY2UtZmFtaWx5JywgJ3ZvbHVtZScsICd3aGl0ZS1zcGFjZScsICd3aWRvd3MnLCAnd29yZC1zcGFjaW5nJ1xuXTtcbmV4cG9ydHMuZGVmYXVsdCA9IElOSEVSSVRfU1RZTEVfQVRUUklCVVRFUztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluaGVyaXQtc3R5bGUtYXR0cmlidXRlcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IE5PREVfTkFNRVNfVE9fSUdOT1JFID0gW1xuICAgICdOT1NDUklQVCcsICdTQ1JJUFQnLCAnU1RZTEUnLCAnI2NvbW1lbnQnLCAnI2RvY3VtZW50J1xuXTtcbmV4cG9ydHMuZGVmYXVsdCA9IE5PREVfTkFNRVNfVE9fSUdOT1JFO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9kZS1uYW1lcy10by1pZ25vcmUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBOT0RFX05BTUVTX1RPX1JFUExBQ0UgPSB7XG4gICAgJ0lGUkFNRSc6ICdESVYnXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gTk9ERV9OQU1FU19UT19SRVBMQUNFO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9kZS1uYW1lcy10by1yZXBsYWNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgU0tJUFBFRF9TVFlMRV9BVFRSSUJVVEVTID0ge1xuICAgICdhbGlnbi1pdGVtcyc6ICdub3JtYWwnLFxuICAgICdhbGlnbi1zZWxmJzogJ25vcm1hbCcsXG4gICAgJ2NsaXAtcGF0aCc6ICdub25lJyxcbiAgICAnZmxleC1iYXNpcyc6ICdhdXRvJyxcbiAgICAnZmxleC1ncm93JzogJzAnLFxuICAgICdmbGV4LXNocmluayc6ICcxJyxcbiAgICAnanVzdGlmeS1jb250ZW50JzogJ25vcm1hbCcsXG4gICAgJ3VzZXItc2VsZWN0JzogJ3RleHQnLFxuICAgICdib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJzogJzBweCcsXG4gICAgJ2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzJzogJzBweCcsXG4gICAgJ2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJzogJzBweCcsXG4gICAgJ2JvcmRlci10b3AtbGVmdC1yYWRpdXMnOiAnMHB4JyxcbiAgICAnY3Vyc29yJzogJ2F1dG8nLFxuICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogJzAlIDAlJyxcbiAgICAnYmFja2dyb3VuZC1zaXplJzogJ2F1dG8nLFxuICAgICdkaXJlY3Rpb24nOiAnbHRyJyxcbiAgICAvLyBcIm1hcmdpbi1ib3R0b21cIjogXCIwcHhcIixcbiAgICAvLyBcIm1hcmdpbi1sZWZ0XCI6IFwiMHB4XCIsXG4gICAgLy8gXCJtYXJnaW4tcmlnaHRcIjogXCIwcHhcIixcbiAgICAvLyBcIm1hcmdpbi10b3BcIjogXCIwcHhcIixcbiAgICAnbWF4LWhlaWdodCc6ICdub25lJyxcbiAgICAnbWF4LXdpZHRoJzogJ25vbmUnLFxuICAgICdvcGFjaXR5JzogJzEnLFxuICAgIC8vIFwicGFkZGluZy1ib3R0b21cIjogXCIwcHhcIixcbiAgICAvLyBcInBhZGRpbmctbGVmdFwiOiBcIjBweFwiLFxuICAgIC8vIFwicGFkZGluZy1yaWdodFwiOiBcIjBweFwiLFxuICAgIC8vIFwicGFkZGluZy10b3BcIjogXCIwcHhcIixcbiAgICAncmlnaHQnOiAnYXV0bycsXG4gICAgJ3NwZWFrJzogJ25vcm1hbCcsXG4gICAgJ3RvcCc6ICdhdXRvJyxcbiAgICAndHJhbnNpdGlvbi1kZWxheSc6ICcwcycsXG4gICAgJ3RyYW5zaXRpb24tZHVyYXRpb24nOiAnMHMnLFxuICAgICd0cmFuc2l0aW9uLXByb3BlcnR5JzogJ2FsbCcsXG4gICAgJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJzogJ2Vhc2UnLFxuICAgICd2ZXJ0aWNhbC1hbGlnbic6ICdiYXNlbGluZScsXG4gICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgJ3doaXRlLXNwYWNlJzogJ25vcm1hbCcsXG4gICAgJ3dpZG93cyc6ICcyJyxcbiAgICAnd29yZC1icmVhayc6ICdub3JtYWwnLFxuICAgICd6LWluZGV4JzogJ2F1dG8nLFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNLSVBQRURfU1RZTEVfQVRUUklCVVRFUztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNraXBwZWQtc3R5bGUtYXR0cmlidXRlcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGVzY2FwZWRfYXR0cmlidXRlc18xID0gcmVxdWlyZShcIi4vY29uc3RhbnRzL2VzY2FwZWQtYXR0cmlidXRlc1wiKTtcbmNvbnN0IGZpcmViYXNlX2RlZmF1bHRfY29uZmlnXzEgPSByZXF1aXJlKFwiLi9jb25maWcvZmlyZWJhc2UtZGVmYXVsdC1jb25maWdcIik7XG5jb25zdCBpbmhlcml0X3N0eWxlX2F0dHJpYnV0ZXNfMSA9IHJlcXVpcmUoXCIuL2NvbnN0YW50cy9pbmhlcml0LXN0eWxlLWF0dHJpYnV0ZXNcIik7XG5jb25zdCBza2lwcGVkX3N0eWxlX2F0dHJpYnV0ZXNfMSA9IHJlcXVpcmUoXCIuL2NvbnN0YW50cy9za2lwcGVkLXN0eWxlLWF0dHJpYnV0ZXNcIik7XG5jb25zdCBkb21fbmFtZXNwYWNlc18xID0gcmVxdWlyZShcIi4vY29uc3RhbnRzL2RvbS1uYW1lc3BhY2VzXCIpO1xuY29uc3Qgbm9kZV9uYW1lc190b19pZ25vcmVfMSA9IHJlcXVpcmUoXCIuL2NvbnN0YW50cy9ub2RlLW5hbWVzLXRvLWlnbm9yZVwiKTtcbmNvbnN0IG5vZGVfbmFtZXNfdG9fcmVwbGFjZV8xID0gcmVxdWlyZShcIi4vY29uc3RhbnRzL25vZGUtbmFtZXMtdG8tcmVwbGFjZVwiKTtcbmNvbnN0IGRvbV9wc2V1ZG9zZWxlY3RvcnNfMSA9IHJlcXVpcmUoXCIuL2NvbnN0YW50cy9kb20tcHNldWRvc2VsZWN0b3JzXCIpO1xuY29uc3QgY29sbGVjdF9tZXRhXzEgPSByZXF1aXJlKFwiLi91dGlscy9jb2xsZWN0LW1ldGFcIik7XG5jbGFzcyBEb21TbmFwc2hvdCB7XG4gICAgLypcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcgPSB7XG4gICAgICAgIGlubGluZVN0eWxlczogZmFsc2UsXG4gICAgICAgIHZhY3V1bTogZmFsc2UsXG4gICAgICAgIHN0eWxlc0NsZWFudXA6IHRydWUsXG4gICAgICAgIGNhcHR1cmVQc2V1ZG9zZWxlY3RvcnM6IHRydWUsXG4gICAgICAgIHNhZmVBdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgQk9EWV9TVFlMRTogW10sXG4gICAgICAgICAgICBDQUNIRV9LRVlTOiBbXSxcbiAgICAgICAgICAgIENBQ0hFX1ZBTFVFUzogW10sXG4gICAgICAgICAgICBIVE1MX1NUWUxFOiBbXSxcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgICAvLyB1c2VkIHRvIHBhdGNoIGltYWdlIGxpbmtzIG9uIHNuYXBzaG90IHJlc3RvcmUgKG1heSBiZSByZXBsYWNlZCB0byBiYXNlNjQgaW5saW5lKVxuICAgICAgICAgICAgICAgIHByb3RvY29sOiBcIlwiLFxuICAgICAgICAgICAgICAgIGhvc3RuYW1lOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBmYkNvbmZpZyA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMudWlkUHJlZml4ID0gbnVsbDtcbiAgICAgICAgLy8gdGhpcyBub2RlcyBub3QgZ29pbmcgdG8gc25hcHNob3RcbiAgICAgICAgdGhpcy5OT0RFX05BTUVTX1RPX0lHTk9SRSA9IG5vZGVfbmFtZXNfdG9faWdub3JlXzEuZGVmYXVsdDtcbiAgICAgICAgLy8gaWZyYW1lcyBub2RlcyB3aWxsIGJlIHJlcGxhY2VkIHRvIGRpdidzXG4gICAgICAgIHRoaXMuTk9ERV9OQU1FU19UT19SRVBMQUNFID0gbm9kZV9uYW1lc190b19yZXBsYWNlXzEuZGVmYXVsdDtcbiAgICAgICAgLy8gcHNldWRvc2VsZWN0b3JzIHRvIGNhcHR1cmVcbiAgICAgICAgdGhpcy5QU0VVRE9TRUxFQ1RPUlMgPSBkb21fcHNldWRvc2VsZWN0b3JzXzEuZGVmYXVsdDtcbiAgICAgICAgLy8gaW5oZXJpdCBzdHlsZXMgKGJhc2VkIG9uIGNzcyAyLjEpO1xuICAgICAgICB0aGlzLklOSEVSSVQgPSBpbmhlcml0X3N0eWxlX2F0dHJpYnV0ZXNfMS5kZWZhdWx0O1xuICAgICAgICAvLyBzdHlsZXMgdG8gc2tpcCBmcm9tIGNhcHR1cmluZ1xuICAgICAgICB0aGlzLlNLSVBfU1RZTEVTID0gc2tpcHBlZF9zdHlsZV9hdHRyaWJ1dGVzXzEuZGVmYXVsdDtcbiAgICAgICAgLy9odHRwczovL3d3dy53M3NjaG9vbHMuY29tL1RBR3MvcmVmX2V2ZW50YXR0cmlidXRlcy5hc3BcbiAgICAgICAgdGhpcy5FU0NBUEVEX0FUVFJJQlVURVMgPSBlc2NhcGVkX2F0dHJpYnV0ZXNfMS5kZWZhdWx0O1xuICAgICAgICBpZiAoIWNvbmZpZy5zdGF0ZSkge1xuICAgICAgICAgICAgY29uZmlnLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIEJPRFlfU1RZTEU6IFtdLFxuICAgICAgICAgICAgICAgIENBQ0hFX0tFWVM6IFtdLFxuICAgICAgICAgICAgICAgIENBQ0hFX1ZBTFVFUzogW10sXG4gICAgICAgICAgICAgICAgSFRNTF9TVFlMRTogW10sXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvdG9jb2w6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGhvc3RuYW1lOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpbml0IHN0YXRlXG4gICAgICAgIHRoaXMuQk9EWV9TVFlMRSA9IGNvbmZpZy5zdGF0ZS5CT0RZX1NUWUxFIHx8IFtdO1xuICAgICAgICB0aGlzLkNBQ0hFX0tFWVMgPSBjb25maWcuc3RhdGUuQ0FDSEVfS0VZUyB8fCBbXTtcbiAgICAgICAgdGhpcy5DQUNIRV9WQUxVRVMgPSBjb25maWcuc3RhdGUuQ0FDSEVfVkFMVUVTIHx8IFtdO1xuICAgICAgICB0aGlzLkJPRFlfQVRUUklCVVRFUyA9IGNvbmZpZy5zdGF0ZS5DQUNIRV9WQUxVRVMgfHwgW107XG4gICAgICAgIHRoaXMuSFRNTF9TVFlMRSA9IGNvbmZpZy5zdGF0ZS5IVE1MX1NUWUxFIHx8IFtdO1xuICAgICAgICB0aGlzLml0ZW1zID0gY29uZmlnLnN0YXRlLml0ZW1zIHx8IFtdO1xuICAgICAgICB0aGlzLm1ldGEgPSBjb25maWcuc3RhdGUubWV0YSB8fCB7fTtcbiAgICAgICAgdGhpcy5fVVNFX1ZBQ1VVTSA9IGNvbmZpZy52YWN1dW0gfHwgZmFsc2U7XG4gICAgICAgIC8vIGFwcGVuZCBzdHlsZXMgdG8gZG9tIG5vZGUgaW5zdGVhZCBvZiBzdHlsZSBub2RlXG4gICAgICAgIHRoaXMuX1VTRV9JTkxJTkVfU1RZTEVTID0gY29uZmlnLmlubGluZVN0eWxlcyB8fCBmYWxzZTtcbiAgICAgICAgdGhpcy5fVVNFX1NUWUxFU19DTEVBTlVQID0gY29uZmlnLnN0eWxlc0NsZWFudXAgfHwgdHJ1ZTtcbiAgICAgICAgdGhpcy5fVVNFX1BTRVVET1NFTEVDVE9SUyA9IGNvbmZpZy5jYXB0dXJlUHNldWRvc2VsZWN0b3JzIHx8IHRydWU7XG4gICAgICAgIHRoaXMuX1VTRV9TQUZFX0FUVFJJQlVURVMgPSBjb25maWcuc2FmZUF0dHJpYnV0ZXMgfHwgdHJ1ZTtcbiAgICAgICAgdGhpcy5fTkFNRVNQQUNFUyA9IGRvbV9uYW1lc3BhY2VzXzEuZGVmYXVsdDtcbiAgICAgICAgLy8gbm9kZSBjYWNoZSAoZm9yIG5vZGUgY3JlYXRpb24pXG4gICAgICAgIHRoaXMubm9kZUNhY2hlID0ge307XG4gICAgICAgIC8vIHJvb3RzIGluaXRcbiAgICAgICAgdGhpcy5faHRtbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9oZWFkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2JvZHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0xvYWRlZCA9IGZhbHNlO1xuICAgICAgICAvLyBza2lwIHRoaXMgbm9kZSB0eXBlc1xuICAgICAgICB0aGlzLnJlc3RyaWN0ZWROb2RlVHlwZXMgPSBbMywgOF07XG4gICAgICAgIC8vIHNraXAgaGlkZGVuIG5vZGVzXG4gICAgICAgIHRoaXMuc2tpcERpc3BsYXlOb25lID0gdHJ1ZTtcbiAgICAgICAgLy8gZmlyZWJhc2UgY29uZmlnIHdpdGggZGVmYXVsdHNcbiAgICAgICAgdGhpcy5mYkNvbmZpZyA9IGZiQ29uZmlnIHx8IGZpcmViYXNlX2RlZmF1bHRfY29uZmlnXzEuZGVmYXVsdDtcbiAgICAgICAgdGhpcy5pbnRGaXJlYmFzZSh0aGlzLmZiQ29uZmlnKTtcbiAgICB9XG4gICAgX25vcm1hbGl6ZUF0dHJpYnV0ZU5hbWUoYXR0ck5hbWUpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyhhdHRyTmFtZSlcbiAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBfaXNTYWZlQXR0cmlidXRlKGF0dHJOYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLl9VU0VfU0FGRV9BVFRSSUJVVEVTICYmXG4gICAgICAgICAgICB0aGlzLkVTQ0FQRURfQVRUUklCVVRFUy5pbmNsdWRlcyh0aGlzLl9ub3JtYWxpemVBdHRyaWJ1dGVOYW1lKGF0dHJOYW1lKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCFhdHRyTmFtZS5pbmNsdWRlcyhcIm5nLVwiKSAmJlxuICAgICAgICAgICAgIWF0dHJOYW1lLmluY2x1ZGVzKCdcIicpICYmXG4gICAgICAgICAgICAhYXR0ck5hbWUuaW5jbHVkZXMoXCJkYXRhLXVpZF9cIikgJiZcbiAgICAgICAgICAgICFhdHRyTmFtZS5pbmNsdWRlcyhcInN0eWxlXCIpKTtcbiAgICB9XG4gICAgX2V4dHJhY3ROb2RlQXR0cmlidXRlcyhub2RlKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUubWFwXG4gICAgICAgICAgICAuY2FsbChub2RlLmF0dHJpYnV0ZXMsIGVsID0+IHtcbiAgICAgICAgICAgIHJldHVybiBbZWwubm9kZU5hbWUsIHRoaXMuX3BhdGNoQXR0cmlidXRlKGVsLm5vZGVOYW1lLCBlbC5ub2RlVmFsdWUpXTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoKFthdHRyTmFtZV0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc1NhZmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVzZXRUYXJnZXQoKSB7XG4gICAgICAgIHRoaXMuc2V0Qm9keU5vZGUoZmFsc2UpO1xuICAgICAgICB0aGlzLnNldEh0bWxOb2RlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zZXRIZWFkTm9kZShmYWxzZSk7XG4gICAgfVxuICAgIC8vLyBzZXQgcm9vdE5vZGUgZm9yIHJlc3RvcmluZ1xuICAgIHJlc3RvcmVUbyhub2RlKSB7XG4gICAgICAgIHRoaXMuc2V0Qm9keU5vZGUobm9kZSk7XG4gICAgfVxuICAgIF9jb2xsZWN0TWV0YSgpIHtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3RfbWV0YV8xLmRlZmF1bHQoKTtcbiAgICB9XG4gICAgX3BhdGNoQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGlmIChbXCJzcmNcIiwgXCJocmVmXCJdLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdENoYXIgPSBTdHJpbmcodmFsdWUpLmNoYXJBdCgwKTtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZENoYXIgPSBTdHJpbmcodmFsdWUpLmNoYXJBdCgxKTtcbiAgICAgICAgICAgIGNvbnN0IGhhc0hhc2ggPSBzZWNvbmRDaGFyID09PSBcIiNcIiB8fCBmaXJzdENoYXIgPT09IFwiI1wiO1xuICAgICAgICAgICAgY29uc3QgaGFzVHdvU2xhc2hlcyA9IGZpcnN0Q2hhciA9PT0gc2Vjb25kQ2hhciAmJiBmaXJzdENoYXIgPT09IFwiL1wiO1xuICAgICAgICAgICAgY29uc3QgaGFzUGF0aCA9IHNlY29uZENoYXIgPT09IFwiL1wiO1xuICAgICAgICAgICAgaWYgKCFoYXNUd29TbGFzaGVzICYmIChoYXNQYXRoIHx8IGhhc0hhc2gpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWV0YS5ob3N0bmFtZSAmJiB0aGlzLm1ldGEucHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMubWV0YS5wcm90b2NvbH0vLyR7dGhpcy5tZXRhLmhvc3RuYW1lfSR7dmFsdWV9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBfaXNTVkcoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IHRoaXMuX05BTUVTUEFDRVMuc3ZnO1xuICAgIH1cbiAgICBfZ2V0Qm9keUF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9leHRyYWN0Tm9kZUF0dHJpYnV0ZXModGhpcy5fZ2V0Qm9keU5vZGUoKSk7XG4gICAgfVxuICAgIF9nZXRCb2R5U3R5bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZU9iamVjdCh0aGlzLl9nZXRTdHlsZUZvck5vZGUodGhpcy5fZ2V0Qm9keU5vZGUoKSkpO1xuICAgIH1cbiAgICBfZ2V0SFRNTFN0eWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0Qm9keVBhcmVudFN0eWxlKCk7XG4gICAgfVxuICAgIF9nZXRCb2R5UGFyZW50U3R5bGUoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSB0aGlzLl9nZXRCb2R5Tm9kZSgpO1xuICAgICAgICBsZXQgc3R5bGVOb2RlID0gW107XG4gICAgICAgIGlmIChib2R5LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHN0eWxlTm9kZSA9IHRoaXMuX2dldFN0eWxlRm9yTm9kZShib2R5LnBhcmVudE5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZU9iamVjdChzdHlsZU5vZGUpO1xuICAgICAgICAvLyBnZXQgb3B0aW1hbCBzdHlsZSwgc2F2ZSBhcyBzcGVjaWFsIG5vZGVcbiAgICB9XG4gICAgYWRkTWV0YShrZXlPck9iamVjdCwgdmFsdWUsIHRhcmdldCA9IHRoaXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXlPck9iamVjdCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgdGFyZ2V0Lm1ldGEgPSBPYmplY3QuYXNzaWduKHRhcmdldC5tZXRhLCBrZXlPck9iamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQubWV0YVtrZXlPck9iamVjdF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0TWV0YSgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMubWV0YSk7XG4gICAgfVxuICAgIGNsZWFyTWV0YSgpIHtcbiAgICAgICAgdGhpcy5tZXRhID0ge307XG4gICAgfVxuICAgIF9hZGRGYlNjcmlwdChyZXNvbHZlLCByZWplY3QsIGNvbmZpZykge1xuICAgICAgICBjb25zdCBoZWFkID0gdGhpcy5fZ2V0RG9jdW1lbnQoKS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IHRoaXMuX2dldERvY3VtZW50KCkuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgc2NyaXB0LnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcbiAgICAgICAgICAgIHRoaXMuZmlyZWJhc2UgPSB3aW5kb3cuZmlyZWJhc2U7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUodGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gZSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH07XG4gICAgICAgIHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL2ZpcmViYXNlanMvNC4yLjAvZmlyZWJhc2UuanNcIjtcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH1cbiAgICBpbnRGaXJlYmFzZShmYkNvbmZpZykge1xuICAgICAgICB0aGlzLl9sb2FkZWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5maXJlYmFzZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlyZWJhc2UgPSB3aW5kb3cuZmlyZWJhc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9hZGRGYlNjcmlwdChyZXNvbHZlLCByZWplY3QsIGZiQ29uZmlnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkZWQ7XG4gICAgfVxuICAgIGxvYWRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlZDtcbiAgICB9XG4gICAgX2dldEhlYWQoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5faGVhZCB8fFxuICAgICAgICAgICAgdGhpcy5fZ2V0Qm9keU5vZGUoKS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpIHx8XG4gICAgICAgICAgICB0aGlzLl9nZXREb2N1bWVudCgpLmhlYWQgfHxcbiAgICAgICAgICAgIHRoaXMuX2dldERvY3VtZW50KCkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdKTtcbiAgICB9XG4gICAgX2NsZWFuSGVhZE5vZGVGcm9tU3R5bGVzKCkge1xuICAgICAgICBjb25zdCBoZWFkID0gdGhpcy5fZ2V0SGVhZCgpO1xuICAgICAgICBsZXQgc3R5bGVzVG9SZW1vdmUgPSBoZWFkLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3R5bGVcIik7XG4gICAgICAgIGlmIChzdHlsZXNUb1JlbW92ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3R5bGVzVG9SZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBoZWFkLnJlbW92ZUNoaWxkKHN0eWxlc1RvUmVtb3ZlW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgc3R5bGVMaW5rc1RvUmVtb3ZlID0gaGVhZC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtcbiAgICAgICAgaWYgKHN0eWxlTGlua3NUb1JlbW92ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3R5bGVMaW5rc1RvUmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaGVhZC5yZW1vdmVDaGlsZChzdHlsZUxpbmtzVG9SZW1vdmVbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIF9hZGRTdHlsZU5vZGUoY3NzKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5fZ2V0RG9jdW1lbnQoKS5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgIGNvbnN0IGhlYWQgPSB0aGlzLl9nZXRIZWFkKCk7XG4gICAgICAgIHN0eWxlLnR5cGUgPSBcInRleHQvY3NzXCI7XG4gICAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdHlsZS5hcHBlbmRDaGlsZCh0aGlzLl9nZXREb2N1bWVudCgpLmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgICAgICB9XG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cbiAgICBfZ2V0RG9tTm9kZUZyb21Bcmd1bWVudChzZWxlY3Rvcikge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gdHlwZW9mIHNlbGVjdG9yID09PSBcIm9iamVjdFwiXG4gICAgICAgICAgICA/IHNlbGVjdG9yXG4gICAgICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cbiAgICBfY2xlYW5Eb21Ob2RlKHRhcmdldCkge1xuICAgICAgICB3aGlsZSAodGFyZ2V0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmVDaGlsZCh0YXJnZXQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGFrZVNuYXBzaG90KHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNuYXBzaG90KHRoaXMuX2dldERvbU5vZGVGcm9tQXJndW1lbnQoc2VsZWN0b3IpKTtcbiAgICB9XG4gICAgcmVuZGVyU25hcHNob3Qoc2VsZWN0b3IsIHNuYXBzaG90LCByZXdyaXRlRG9tQ29udGVudCA9IHRydWUpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuX2dldERvbU5vZGVGcm9tQXJndW1lbnQoc2VsZWN0b3IpO1xuICAgICAgICBpZiAodGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHVuYWJsZSB0byBmaW5kIHRhcmdldCBieSBzZWxlY3RvciAke3NlbGVjdG9yfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXdyaXRlRG9tQ29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5fY2xlYW5Eb21Ob2RlKHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN0b3JlV29ybGRGcm9tKHNuYXBzaG90LCB0YXJnZXQpO1xuICAgIH1cbiAgICBzaG93U25hcHNob3QoaWQsIHNlbGVjdG9yID0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U25hcHNob3RCeUlkKGlkKS50aGVuKHNuYXBzaG90ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveVdvcmxkKCk7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoU3RyaW5nKHNlbGVjdG9yKS52YWx1ZU9mKCkpIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5fZ2V0Qm9keU5vZGUoKTtcbiAgICAgICAgICAgIGxldCBzb3VyY2UgPSB0aGlzLnNldFN0YXRlKHRoaXMsIHNuYXBzaG90KTtcbiAgICAgICAgICAgIHRoaXMucmVzdG9yZVdvcmxkRnJvbShzb3VyY2UsIHRhcmdldE5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVzdG9yZVNuYXBzaG90KGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaG93U25hcHNob3QoaWQpO1xuICAgIH1cbiAgICBfZmJBZGRUb1NuYXBzaG90TGlzdChpZCwgZGF0YSkge1xuICAgICAgICB0aGlzLmZpcmViYXNlXG4gICAgICAgICAgICAuZGF0YWJhc2UoKVxuICAgICAgICAgICAgLnJlZihgc25hcHNob3RzLWxpc3QvJHtpZH1gKVxuICAgICAgICAgICAgLnNldChkYXRhKTtcbiAgICB9XG4gICAgX2ZiU2V0U25hcHNob3QoaWQsIHNuYXBzaG90KSB7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VcbiAgICAgICAgICAgIC5kYXRhYmFzZSgpXG4gICAgICAgICAgICAucmVmKGBzbmFwc2hvdHMvJHtpZH1gKVxuICAgICAgICAgICAgLnNldChzbmFwc2hvdCk7XG4gICAgfVxuICAgIF9mYkdldFNuYXBzaG90KGlkKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlyZWJhc2VcbiAgICAgICAgICAgICAgICAuZGF0YWJhc2UoKVxuICAgICAgICAgICAgICAgIC5yZWYoXCJzbmFwc2hvdHMvXCIgKyBpZClcbiAgICAgICAgICAgICAgICAub25jZShcInZhbHVlXCIpXG4gICAgICAgICAgICAgICAgLnRoZW4oc25hcHNob3QgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHNuYXBzaG90LnZhbCgpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0U25hcHNob3RCeUlkKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mYkdldFNuYXBzaG90KGlkKTtcbiAgICB9XG4gICAgX3Nob3dTbmFwc2hvdChpZCA9IFwiMTUwMjMxMjA4OTQ3OVwiLCByb290RWxlbWVudCA9IHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTbmFwc2hvdEJ5SWQoaWQpLnRoZW4oc25hcHNob3QgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95V29ybGQoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcywgc25hcHNob3QpO1xuICAgICAgICAgICAgdGhpcy5yZXN0b3JlV29ybGQocm9vdEVsZW1lbnQsIHRoaXMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2NsZWFyU3RhdGUodGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5pdGVtcyA9IFtdO1xuICAgICAgICB0YXJnZXQuQ0FDSEVfS0VZUyA9IFtdO1xuICAgICAgICB0YXJnZXQuQk9EWV9TVFlMRSA9IFtdO1xuICAgICAgICB0YXJnZXQuSFRNTF9TVFlMRSA9IFtdO1xuICAgICAgICB0YXJnZXQuQ0FDSEVfVkFMVUVTID0gW107XG4gICAgICAgIHRhcmdldC5CT0RZX0FUVFJJQlVURVMgPSBbXTtcbiAgICB9XG4gICAgX2dldEFycmF5Q29weShlbGVtZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCAhPT0gXCJvYmplY3RcIiB8fCBlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuc2xpY2UoMCk7XG4gICAgfVxuICAgIF9jbG9uZU9iamVjdChvYmopIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgfHwgb2JqID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gICAgfVxuICAgIF9jb3B5V29ybGQocm9vdE5vZGUgPSBmYWxzZSwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb3B5V29ybGRUbyhyb290Tm9kZSwgc291cmNlKTtcbiAgICB9XG4gICAgX2NvcHlXb3JsZFRvKHJvb3ROb2RlLCBzb3VyY2UpIHtcbiAgICAgICAgY29uc3QgcHNldWRvU2VsZWN0b3JzU3R5bGVzQXJyYXkgPSBbXTtcbiAgICAgICAgY29uc3QgcmVpbmRleE1hcCA9IHt9O1xuICAgICAgICBsZXQgaXRlbXMgPSBzb3VyY2UuaXRlbXM7XG4gICAgICAgIHNvdXJjZS5tZXRhID0gdGhpcy5fY29sbGVjdE1ldGEoKTtcbiAgICAgICAgbGV0IHRhcmdldCA9IHJvb3ROb2RlIHx8IHRoaXMuX2dldEJvZHlOb2RlKCk7XG4gICAgICAgIGxldCBpc0JvZHlOb2RlUm9vdCA9IHRhcmdldCA9PT0gdGhpcy5fZ2V0Qm9keU5vZGUoKTtcbiAgICAgICAgaWYgKGlzQm9keU5vZGVSb290KSB7XG4gICAgICAgICAgICBzb3VyY2UuQk9EWV9BVFRSSUJVVEVTID0gdGhpcy5fZ2V0Qm9keUF0dHJpYnV0ZXMoKTtcbiAgICAgICAgICAgIHNvdXJjZS5IVE1MX1NUWUxFID0gdGhpcy5fc3R5bGVPYmplY3RUb09wdGltYWxTdHlsZUFycmF5KHRoaXMuX2dldEhUTUxTdHlsZSgpLCB1bmRlZmluZWQsIHNvdXJjZSk7XG4gICAgICAgICAgICBzb3VyY2UuQk9EWV9TVFlMRSA9IHRoaXMuX3N0eWxlT2JqZWN0VG9PcHRpbWFsU3R5bGVBcnJheSh0aGlzLl9nZXRCb2R5U3R5bGUoKSwgdW5kZWZpbmVkLCBzb3VyY2UpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjYXB0dXJlZE5vZGVzID0gdGhpcy5fZ2V0QWxsRG9tTm9kZXModGFyZ2V0KTtcbiAgICAgICAgaWYgKCFpc0JvZHlOb2RlUm9vdCkge1xuICAgICAgICAgICAgY2FwdHVyZWROb2Rlcy51bnNoaWZ0KHJvb3ROb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBub2Rlc01hcCA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FwdHVyZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYXB0dXJlZE5vZGVzW2ldO1xuICAgICAgICAgICAgbm9kZXNNYXAuc2V0KGl0ZW0sIGkpO1xuICAgICAgICAgICAgbGV0IG5vZGVTdHlsZSA9IHRoaXMuX2dldFN0eWxlRm9yTm9kZShpdGVtKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zaG91bGRUYWtlRWxlbWVudChpdGVtLCBub2RlU3R5bGUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGF0YXNldCAmJiB0aGlzLl9VU0VfUFNFVURPU0VMRUNUT1JTKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwc2V1ZG9zZWxlY29yU3R5bGVzID0gdGhpcy5fZ2V0U3R5bGVzRm9yUHNldWRvU2VsZWN0b3JzKGl0ZW0sIHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwc2V1ZG9zZWxlY29yU3R5bGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwc2V1ZG9zZWxlY29yU3R5bGVzLmluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzZXVkb1NlbGVjdG9yc1N0eWxlc0FycmF5LnB1c2gocHNldWRvc2VsZWNvclN0eWxlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaCh0aGlzLl9zZXJpYWxpemVOb2RlKG5vZGVTdHlsZSwgaXRlbSwgaSwgc291cmNlLCBub2Rlc01hcCkpO1xuICAgICAgICAgICAgICAgIHJlaW5kZXhNYXBbaV0gPSBpdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9VU0VfUFNFVURPU0VMRUNUT1JTKSB7XG4gICAgICAgICAgICB0aGlzLl9mb3JFYWNoKHBzZXVkb1NlbGVjdG9yc1N0eWxlc0FycmF5LCBlbCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBpdGVtc1tyZWluZGV4TWFwW2VsLmluZGV4XV07XG4gICAgICAgICAgICAgICAgaXRlbS5wc2V1ZG9zZWxlY3RvcnMgPSBlbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9VU0VfVkFDVVVNKSB7XG4gICAgICAgICAgICBzb3VyY2UuaXRlbXMgPSB0aGlzLl92YWN1dW0oaXRlbXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9VU0VfU1RZTEVTX0NMRUFOVVApIHtcbiAgICAgICAgICAgIHRoaXMuX2NsZWFudXBTdHlsZXMoc291cmNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfZ2V0SHRtbE5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odG1sIHx8IHRoaXMuX2dldEJvZHlOb2RlKCkucGFyZW50Tm9kZSB8fCB0aGlzLl9nZXRCb2R5Tm9kZSgpO1xuICAgIH1cbiAgICByZXN0b3JlV29ybGQodGFyZ2V0ID0gZmFsc2UsIHNvdXJjZSkge1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgLy90aGlzLl9zZXRIVE1MU3R5bGUoc291cmNlKTtcbiAgICAgICAgICAgIHRoaXMuX3NldEJvZHlBdHRyaWJ1dGVzKHNvdXJjZSk7XG4gICAgICAgICAgICAvL3RoaXMuX3NldEJvZHlTdHlsZShzb3VyY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3RvcmVXb3JsZEZyb20oc291cmNlLCB0YXJnZXQpO1xuICAgIH1cbiAgICBfZm9yRWFjaChhcnJheSwgYWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYWN0aW9uKGFycmF5W2ldLCBpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXN0b3JlV29ybGRGcm9tKHNvdXJjZSwgdGFyZ2V0ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVzVG9VcHBlbmQgPSBbXTtcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSB0aGlzLl9nZXREb2N1bWVudCgpLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgdGhpcy51aWRQcmVmaXggPVxuICAgICAgICAgICAgXCJkXCIgK1xuICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKClcbiAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKDM2KVxuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoLTIpO1xuICAgICAgICBjb25zdCBub2Rlc0luZGV4ID0ge307XG4gICAgICAgIHRoaXMuX2ZvckVhY2goc291cmNlLml0ZW1zLCBlbCA9PiB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuX2NyZWF0ZU5vZGUoZWwsIHN0eWxlc1RvVXBwZW5kLCBzb3VyY2UpO1xuICAgICAgICAgICAgbm9kZXNJbmRleFtlbC5pbmRleF0gPSBub2RlO1xuICAgICAgICAgICAgdGhpcy5faW5zZXJ0Tm9kZShub2RlLCBlbCwgZnJhZ21lbnQsIG5vZGVzSW5kZXgpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3R5bGVzVG9VcHBlbmQucHVzaChgaHRtbCB7ICR7dGhpcy5fZ2V0Tm9kZVN0eWxlVGV4dChzb3VyY2UuSFRNTF9TVFlMRSwgc291cmNlKX0gfWApO1xuICAgICAgICBzdHlsZXNUb1VwcGVuZC5wdXNoKGBib2R5IHsgJHt0aGlzLl9nZXROb2RlU3R5bGVUZXh0KHNvdXJjZS5CT0RZX1NUWUxFLCBzb3VyY2UpfSB9YCk7XG4gICAgICAgIHRoaXMuX2FkZFN0eWxlTm9kZShzdHlsZXNUb1VwcGVuZC5yZXZlcnNlKCkuam9pbihcIlxcblwiKSk7XG4gICAgICAgIGxldCByb290Tm9kZSA9IHRhcmdldCB8fCB0aGlzLl9nZXRCb2R5Tm9kZSgpO1xuICAgICAgICByb290Tm9kZS5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgICAgIHRoaXMudWlkUHJlZml4ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIF9kZXN0cm95Qm9keUF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB0aGlzLl9nZXRCb2R5QXR0cmlidXRlcygpO1xuICAgICAgICBjb25zdCBib2R5ID0gdGhpcy5fZ2V0Qm9keU5vZGUoKTtcbiAgICAgICAgdGhpcy5fZm9yRWFjaChhdHRyaWJ1dGVzLCAoW25hbWVdKSA9PiB7XG4gICAgICAgICAgICBib2R5LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkZXN0cm95V29ybGQoKSB7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lCb2R5QXR0cmlidXRlcygpO1xuICAgICAgICB0aGlzLl9nZXRCb2R5Tm9kZSgpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHRoaXMuX2NsZWFuSGVhZE5vZGVGcm9tU3R5bGVzKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBfY3JlYXRlU3R5bGVPYmplY3Qoc3R5bGVOb2RlKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlT2JqZWN0ID0ge307XG4gICAgICAgIGlmICghc3R5bGVOb2RlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0eWxlT2JqZWN0O1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3R5bGVOb2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBzdHlsZU5vZGVbaV07XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtwcm9wZXJ0eU5hbWVdID0gc3R5bGVOb2RlLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHlOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGVPYmplY3Q7XG4gICAgfVxuICAgIF9pc0RlZmF1bHRTdHlsZShuYW1lLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vIHJldHVybiB0aGlzLkJPRFlfU1RZTEVbbmFtZV0gPT09IHZhbHVlIHx8IGZhbHNlO1xuICAgIH1cbiAgICBfdmFjdXVtKGl0ZW1zKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zVG9SZW1vdmUgPSBbXTtcbiAgICAgICAgY29uc3QgbGFzdEl0ZW1JbmRleCA9IGl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIHRoaXMuX2ZvckVhY2goaXRlbXMsIChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGxhc3RJdGVtSW5kZXggIT09IGluZGV4ICYmIGl0ZW0ubm9kZU5hbWUgPT09IFwiI3RleHRcIikge1xuICAgICAgICAgICAgICAgIGxldCBuZXh0Tm9kZSA9IGl0ZW1zW2luZGV4ICsgMV07XG4gICAgICAgICAgICAgICAgbGV0IGhhc1NhbWVQYXJlbnQgPSBuZXh0Tm9kZS5wYXJlbnQgPT09IGl0ZW0ucGFyZW50O1xuICAgICAgICAgICAgICAgIGxldCBoYXNTYW1lTm9kZU5hbWUgPSBuZXh0Tm9kZS5ub2RlTmFtZSA9PT0gaXRlbS5ub2RlTmFtZTtcbiAgICAgICAgICAgICAgICBpZiAoaGFzU2FtZVBhcmVudCAmJiBoYXNTYW1lTm9kZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dE5vZGUudGV4dENvbnRlbnQgPSBgJHtpdGVtLnRleHRDb250ZW50fSR7bmV4dE5vZGUudGV4dENvbnRlbnR9YDtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNUb1JlbW92ZS5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKChlbCwgaW5kZXgpID0+ICFpdGVtc1RvUmVtb3ZlLmluY2x1ZGVzKGluZGV4KSk7XG4gICAgfVxuICAgIF9jbGVhbnVwU3R5bGVzKHNvdXJjZSkge1xuICAgICAgICBjb25zdCBzdHlsZXNUb1JlbW92ZSA9IFtdO1xuICAgICAgICBjb25zdCBzdHlsZWRJdGVtcyA9IHNvdXJjZS5pdGVtcy5maWx0ZXIoZSA9PiBlLnN0eWxlcy5sZW5ndGgpO1xuICAgICAgICAvLyBjb2xsZWN0IGJyb3dzZXIgZGVmYXVsdCBzdHlsZXNcbiAgICAgICAgdGhpcy5fZm9yRWFjaChzb3VyY2UuSFRNTF9TVFlMRSwgc3R5bGUgPT4ge1xuICAgICAgICAgICAgaWYgKHN0eWxlZEl0ZW1zLmV2ZXJ5KGVsID0+IGVsLnN0eWxlcy5pbmNsdWRlcyhzdHlsZSkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZS5CT0RZX1NUWUxFLmluY2x1ZGVzKHN0eWxlKSkge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXNUb1JlbW92ZS5wdXNoKHN0eWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBleGNsdWRlIGNvbGxlY3RlZCBzdHVsZXNcbiAgICAgICAgc291cmNlLkhUTUxfU1RZTEUgPSBzb3VyY2UuSFRNTF9TVFlMRS5maWx0ZXIoZWwgPT4gIXN0eWxlc1RvUmVtb3ZlLmluY2x1ZGVzKGVsKSk7XG4gICAgICAgIHNvdXJjZS5CT0RZX1NUWUxFID0gc291cmNlLkJPRFlfU1RZTEUuZmlsdGVyKGVsID0+ICFzdHlsZXNUb1JlbW92ZS5pbmNsdWRlcyhlbCkpO1xuICAgICAgICB0aGlzLl9mb3JFYWNoKHNvdXJjZS5pdGVtcywgaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5faXNOb3RFbXB0eUFycmF5KGl0ZW0uc3R5bGVzKSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGVzID0gaXRlbS5zdHlsZXMuZmlsdGVyKGVsID0+ICFzdHlsZXNUb1JlbW92ZS5pbmNsdWRlcyhlbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc291cmNlLkJPRFlfU1RZTEUgPSBzb3VyY2UuQk9EWV9TVFlMRS5maWx0ZXIoZWwgPT4gIXN0eWxlc1RvUmVtb3ZlLmluY2x1ZGVzKGVsKSk7XG4gICAgfVxuICAgIF9nZXROYW1lRm9yTm9kZShub2RlTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5OT0RFX05BTUVTX1RPX1JFUExBQ0Vbbm9kZU5hbWVdIHx8IG5vZGVOYW1lO1xuICAgIH1cbiAgICBfZ2V0UGFyZW50Rm9yTm9kZShub2RlLCBub2Rlc01hcCkge1xuICAgICAgICBsZXQgcGFyZW50SWQgPSBub2Rlc01hcC5oYXMobm9kZS5wYXJlbnROb2RlKVxuICAgICAgICAgICAgPyBub2Rlc01hcC5nZXQobm9kZS5wYXJlbnROb2RlKVxuICAgICAgICAgICAgOiAwO1xuICAgICAgICBsZXQgcGFyZW50ID0gcGFyZW50SWQgPyBwYXJlbnRJZCA6IDA7XG4gICAgICAgIGlmICghdGhpcy5pc05vdFVuZGVmaW5lZChwYXJlbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cbiAgICBfZ2V0Tm9kZVRleHRDb250ZW50KG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUuY2hpbGRyZW4gPyBcIlwiIDogbm9kZS5kYXRhO1xuICAgIH1cbiAgICBfYXJyYXlUb09iamVjdChhcnIgPSBbXSkge1xuICAgICAgICByZXR1cm4gYXJyLnJlZHVjZSgocmVzdWx0LCBba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuICAgIGdldFNuYXBzaG90c0RpZmYoczEsIHMyKSB7XG4gICAgICAgIGxldCBmaXJzdFN0YXRlID0gdGhpcy5zZXRTdGF0ZSh7fSwgczEpO1xuICAgICAgICBsZXQgc2Vjb25kU3RhdGUgPSB0aGlzLnNldFN0YXRlKHt9LCBzMik7XG4gICAgICAgIGxldCBmaXJzdFN0eWxlcyA9IGZpcnN0U3RhdGUuaXRlbXNcbiAgICAgICAgICAgIC5maWx0ZXIoZSA9PiBlLnN0eWxlcylcbiAgICAgICAgICAgIC5tYXAoZWwgPT4ge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9zZXROb2RlU3R5bGVGcm9tU3R5bGVBcnJheShlbC5zdHlsZXMsIHtcbiAgICAgICAgICAgICAgICBzdHlsZToge31cbiAgICAgICAgICAgIH0sIGZpcnN0U3RhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGVsLCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBzZWNvbmRTdHlsZXMgPSBzZWNvbmRTdGF0ZS5pdGVtc1xuICAgICAgICAgICAgLmZpbHRlcihlID0+IGUuc3R5bGVzKVxuICAgICAgICAgICAgLm1hcChlbCA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuX3NldE5vZGVTdHlsZUZyb21TdHlsZUFycmF5KGVsLnN0eWxlcywge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7fVxuICAgICAgICAgICAgfSwgc2Vjb25kU3RhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGVsLCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBkaWZmQXJyYXkgPSBuZXcgQXJyYXkoZmlyc3RTdGF0ZS5pdGVtcy5sZW5ndGgpLmZpbGwobnVsbCk7XG4gICAgICAgIHJldHVybiBkaWZmQXJyYXkubWFwKChfLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmaXJzdE5vZGU6IGZpcnN0U3R5bGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICBzZWNvbmROb2RlOiBzZWNvbmRTdHlsZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgIHN0eWxlc0RpZmY6IHRoaXMuX2dldEFsbEtleXNEaWZmKGZpcnN0U3R5bGVzW2luZGV4XS5zdHlsZSwgc2Vjb25kU3R5bGVzW2luZGV4XS5zdHlsZSksXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlc0RpZmY6IHRoaXMuX2dldEFsbEtleXNEaWZmKHRoaXMuX2FycmF5VG9PYmplY3QoZmlyc3RTdHlsZXNbaW5kZXhdLmF0dHJpYnV0ZXMpLCB0aGlzLl9hcnJheVRvT2JqZWN0KHNlY29uZFN0eWxlc1tpbmRleF0uYXR0cmlidXRlcykpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3NlcmlhbGl6ZU5vZGUoc3R5bGVOb2RlLCBub2RlLCBpbmRleCwgc291cmNlLCBub2Rlc01hcCkge1xuICAgICAgICBsZXQgcGF5bG9hZCA9IHRoaXMuX2Zvcm1hdFN0eWxlKHN0eWxlTm9kZSwgbm9kZSwgaW5kZXgsIHNvdXJjZSwgbm9kZXNNYXApO1xuICAgICAgICByZXR1cm4gcGF5bG9hZDtcbiAgICB9XG4gICAgX2Zvcm1hdFN0eWxlKHN0eWxlTm9kZSwgbm9kZSwgaW5kZXgsIHNvdXJjZSwgbm9kZXNNYXApIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgICAgc3R5bGVzOiBbXSxcbiAgICAgICAgICAgIG5vZGVOYW1lOiB0aGlzLl9nZXROYW1lRm9yTm9kZShub2RlLm5vZGVOYW1lKSxcbiAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgYXR0cmlidXRlczogW10sXG4gICAgICAgICAgICBub2RlVHlwZTogbm9kZS5ub2RlVHlwZSxcbiAgICAgICAgICAgIHBhcmVudDogdGhpcy5fZ2V0UGFyZW50Rm9yTm9kZShub2RlLCBub2Rlc01hcCksXG4gICAgICAgICAgICBpc1NWRzogdGhpcy5faXNTVkcobm9kZSksXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5fZ2V0Tm9kZVRleHRDb250ZW50KG5vZGUpXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5fY3JlYXRlU3R5bGVPYmplY3Qoc3R5bGVOb2RlKTtcbiAgICAgICAgLy8gaWYgKHJlc3VsdC5pc1NWRyAmJiByZXN1bHQubm9kZU5hbWUgIT09ICdzdmcnKSB7XG4gICAgICAgIC8vIHJlc3VsdC5zdHlsZXMgPSBbXTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnN0eWxlcyA9IHRoaXMuX3N0eWxlT2JqZWN0VG9PcHRpbWFsU3R5bGVBcnJheShzdHlsZSwgcmVzdWx0LnBhcmVudCwgc291cmNlKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBpZiAoIXRoaXMucmVzdHJpY3RlZE5vZGVUeXBlcy5pbmNsdWRlcyhub2RlLm5vZGVUeXBlKSkge1xuICAgICAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXMgPSB0aGlzLl9leHRyYWN0Tm9kZUF0dHJpYnV0ZXMobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgX2dldEFsbERvbU5vZGVzKG5vZGUpIHtcbiAgICAgICAgbGV0IGxpc3RPZk5vZGVzID0gW107XG4gICAgICAgIGxldCB3YWxrID0gdGhpcy5fZ2V0RG9jdW1lbnQoKS5jcmVhdGVUcmVlV2Fsa2VyKG5vZGUsIE5vZGVGaWx0ZXIuU0hPV19BTEwsIHtcbiAgICAgICAgICAgIGFjY2VwdE5vZGU6IG5vZGUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5OT0RFX05BTUVTX1RPX0lHTk9SRS5pbmNsdWRlcyhub2RlLm5vZGVOYW1lKVxuICAgICAgICAgICAgICAgICAgICA/IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVFxuICAgICAgICAgICAgICAgICAgICA6IE5vZGVGaWx0ZXIuRklMVEVSX1JFSkVDVDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBuID0gbnVsbDtcbiAgICAgICAgd2hpbGUgKChuID0gd2Fsay5uZXh0Tm9kZSgpKSkge1xuICAgICAgICAgICAgbGlzdE9mTm9kZXMucHVzaChuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdE9mTm9kZXM7XG4gICAgfVxuICAgIF9mYlNhdmVTbmFwc2hvdChpZCwgc3RhdGUpIHtcbiAgICAgICAgdGhpcy5fZmJTZXRTbmFwc2hvdChpZCwgc3RhdGUpO1xuICAgICAgICB0aGlzLl9mYkFkZFRvU25hcHNob3RMaXN0KGlkLCB7IHZpc2libGU6IHRydWUsIG1ldGE6IHN0YXRlLm1ldGEgfSk7XG4gICAgfVxuICAgIGNyZWF0ZVNuYXBzaG90KHJvb3ROb2RlID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHNvdXJjZSA9IHt9O1xuICAgICAgICB0aGlzLl9jbGVhclN0YXRlKHNvdXJjZSk7XG4gICAgICAgIHRoaXMuX2NvcHlXb3JsZChyb290Tm9kZSwgc291cmNlKTtcbiAgICAgICAgdGhpcy5hZGRNZXRhKFwiRGF0ZVwiLCBEYXRlLm5vdygpLCBzb3VyY2UpO1xuICAgICAgICB0aGlzLmFkZE1ldGEoXCJVUkxcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYsIHNvdXJjZSk7XG4gICAgICAgIHRoaXMuYWRkTWV0YShcIkJyb3dzZXJcIiwgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQsIHNvdXJjZSk7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuX2dldFN0YXRlKHNvdXJjZSk7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgc2F2ZVNuYXBzaG90KGN1c3RvbUlkID0gZmFsc2UsIHN0YXRlKSB7XG4gICAgICAgIGNvbnN0IGlkID0gY3VzdG9tSWQgfHwgRGF0ZS5ub3coKTtcbiAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUgPSB0aGlzLmNyZWF0ZVNuYXBzaG90KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZmJTYXZlU25hcHNob3QoaWQsIHN0YXRlKTtcbiAgICAgICAgY29uc29sZS5sb2coYHNuYXBzaG90IElEIGlzOiAke2lkfWApO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuICAgIF9zZXRCb2R5QXR0cmlidXRlcyhzb3VyY2UpIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IHNvdXJjZS5CT0RZX0FUVFJJQlVURVM7XG4gICAgICAgIGNvbnN0IGJvZHkgPSB0aGlzLl9nZXRCb2R5Tm9kZSgpO1xuICAgICAgICB0aGlzLl9mb3JFYWNoKGF0dHJpYnV0ZXMsIChbbmFtZSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBib2R5LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2V0Qm9keU5vZGUobm9kZSkge1xuICAgICAgICB0aGlzLl9ib2R5ID0gbm9kZTtcbiAgICB9XG4gICAgX3NldEJvZHlTdHlsZShzb3VyY2UpIHtcbiAgICAgICAgdGhpcy5fc2V0Tm9kZVN0eWxlRnJvbVN0eWxlQXJyYXkoc291cmNlLkJPRFlfU1RZTEUsIHRoaXMuX2dldEJvZHlOb2RlKCksIHNvdXJjZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzZXRIZWFkTm9kZShub2RlKSB7XG4gICAgICAgIHRoaXMuX2hlYWQgPSBub2RlO1xuICAgIH1cbiAgICBfc2V0SFRNTFN0eWxlKHNvdXJjZSkge1xuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5fZ2V0SHRtbE5vZGUoKTtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldE5vZGVTdHlsZUZyb21TdHlsZUFycmF5KHNvdXJjZS5IVE1MX1NUWUxFLCBub2RlLCBzb3VyY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzZXRIdG1sTm9kZShub2RlKSB7XG4gICAgICAgIHRoaXMuX2h0bWwgPSBub2RlO1xuICAgIH1cbiAgICBfc2V0Tm9kZVN0eWxlRnJvbVN0eWxlQXJyYXkoc3R5bGVzLCBub2RlLCBzb3VyY2UpIHtcbiAgICAgICAgdGhpcy5fZm9yRWFjaChzdHlsZXMsIGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBbbmFtZSwgdmFsdWVdID0gdGhpcy5fZ2V0RnJvbU9wdGltYWxWYWx1ZShrZXksIHNvdXJjZSk7XG4gICAgICAgICAgICBub2RlLnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgc2V0TWV0YShtZXRhKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWV0YSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJtZXRhIHNob3VsZCBiZSBhbiBvYmplY3RcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tZXRhID0gT2JqZWN0LmFzc2lnbih7fSwgbWV0YSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzZXRTdGF0ZSh0YXJnZXQgPSB0aGlzLCBzdGF0ZSkge1xuICAgICAgICB0YXJnZXQubWV0YSA9IHRoaXMuX2Nsb25lT2JqZWN0KHN0YXRlLm1ldGEpIHx8IHRoaXMubWV0YSB8fCB7fTtcbiAgICAgICAgdGFyZ2V0Lml0ZW1zID0gdGhpcy5fZ2V0QXJyYXlDb3B5KHN0YXRlLml0ZW1zKSB8fCBbXTtcbiAgICAgICAgdGFyZ2V0LkNBQ0hFX0tFWVMgPSB0aGlzLl9nZXRBcnJheUNvcHkoc3RhdGUuQ0FDSEVfS0VZUykgfHwgW107XG4gICAgICAgIHRhcmdldC5DQUNIRV9WQUxVRVMgPSB0aGlzLl9nZXRBcnJheUNvcHkoc3RhdGUuQ0FDSEVfVkFMVUVTKSB8fCBbXTtcbiAgICAgICAgdGFyZ2V0LkJPRFlfU1RZTEUgPSB0aGlzLl9nZXRBcnJheUNvcHkoc3RhdGUuQk9EWV9TVFlMRSkgfHwgW107XG4gICAgICAgIHRhcmdldC5IVE1MX1NUWUxFID0gdGhpcy5fZ2V0QXJyYXlDb3B5KHN0YXRlLkhUTUxfU1RZTEUpIHx8IFtdO1xuICAgICAgICB0YXJnZXQuQk9EWV9BVFRSSUJVVEVTID0gdGhpcy5fZ2V0QXJyYXlDb3B5KHN0YXRlLkJPRFlfQVRUUklCVVRFUykgfHwgW107XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuICAgIHNldFN0eWxlRnJvbU9iamVjdChub2RlLCBzdHlsZU9iamVjdCkge1xuICAgICAgICB0aGlzLl9mb3JFYWNoKE9iamVjdC5rZXlzKHN0eWxlT2JqZWN0KSwga2V5ID0+IHtcbiAgICAgICAgICAgIG5vZGUuc3R5bGVba2V5XSA9IHN0eWxlT2JqZWN0W2tleV07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLy8vIHNldCByb290Tm9kZSBmb3IgY2FwdHVyaW5nXG4gICAgc2V0VGFyZ2V0KG5vZGUpIHtcbiAgICAgICAgdGhpcy5zZXRCb2R5Tm9kZShub2RlKTtcbiAgICAgICAgdGhpcy5zZXRIdG1sTm9kZShub2RlLnBhcmVudE5vZGUpO1xuICAgICAgICB0aGlzLnNldEhlYWROb2RlKG5vZGUucGFyZW50Tm9kZSk7XG4gICAgfVxuICAgIF9zdHlsZU9iamVjdFRvT3B0aW1hbFN0eWxlQXJyYXkoc3R5bGVPYmplY3QgPSB7fSwgcGFyZW50SW5kZXgsIHNvdXJjZSkge1xuICAgICAgICBsZXQgcGFyZW50U3R5bGUgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuaXNOb3RVbmRlZmluZWQocGFyZW50SW5kZXgpKSB7XG4gICAgICAgICAgICBwYXJlbnRTdHlsZSA9IHRoaXMuZ2V0UGFyZW50U3R5bGVCeUluZGV4KHBhcmVudEluZGV4LCBzb3VyY2UpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IFtdO1xuICAgICAgICB0aGlzLl9mb3JFYWNoKE9iamVjdC5rZXlzKHN0eWxlT2JqZWN0KSwgZWwgPT4ge1xuICAgICAgICAgICAgbGV0IHN0eWxlS2V5ID0gdGhpcy5nZXRPcHRpbWFsVmFsdWUoZWwsIHN0eWxlT2JqZWN0W2VsXSwgc291cmNlKTtcbiAgICAgICAgICAgIGlmIChzdHlsZUtleSAmJlxuICAgICAgICAgICAgICAgICEodGhpcy5JTkhFUklULmluY2x1ZGVzKGVsKSAmJiBwYXJlbnRTdHlsZS5pbmNsdWRlcyhzdHlsZUtleSkpKSB7XG4gICAgICAgICAgICAgICAgc3R5bGVzLnB1c2goc3R5bGVLZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICB9XG4gICAgc2tpcFN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0RlZmF1bHRTdHlsZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICAgIF9zaG91bGRUYWtlRWxlbWVudChub2RlLCBub2RlU3R5bGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzU1ZHKG5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5OT0RFX05BTUVTX1RPX0lHTk9SRS5pbmNsdWRlcyhub2RlLm5vZGVOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLnBhcmVudE5vZGUgJiZcbiAgICAgICAgICAgIHRoaXMuTk9ERV9OQU1FU19UT19JR05PUkUuaW5jbHVkZXMobm9kZS5wYXJlbnROb2RlLm5vZGVOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLnBhcmVudE5vZGUgJiYgbm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuaWdub3JlZCkge1xuICAgICAgICAgICAgaWYgKG5vZGUuZGF0YXNldCkge1xuICAgICAgICAgICAgICAgIC8vIG5vZGUuZGF0YXNldC5pZ25vcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucmVzdHJpY3RlZE5vZGVUeXBlcy5pbmNsdWRlcyhub2RlLm5vZGVUeXBlKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2tpcERpc3BsYXlOb25lICYmIG5vZGUuc3R5bGUgJiYgbm9kZVN0eWxlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlU3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICBub2RlLmRhdGFzZXQuaWdub3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlzTm90VW5kZWZpbmVkKGVsKSB7XG4gICAgICAgIHJldHVybiBlbCAhPT0gdm9pZCAwO1xuICAgIH1cbiAgICBfaXNOb3RFbXB0eUFycmF5KGFycikge1xuICAgICAgICByZXR1cm4gYXJyICYmIGFyci5sZW5ndGg7XG4gICAgfVxuICAgIF9oYXNUZXh0Q29udGVudChub2RlID0geyB0ZXh0Q29udGVudDogXCJcIiB9KSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygbm9kZS50ZXh0Q29udGVudCA9PT0gXCJzdHJpbmdcIiAmJiBub2RlLnRleHRDb250ZW50Lmxlbmd0aDtcbiAgICB9XG4gICAgX2hhc05vZGVJbkNhY2hlKG5vZGVOYW1lKSB7XG4gICAgICAgIHJldHVybiBub2RlTmFtZSBpbiB0aGlzLm5vZGVDYWNoZTtcbiAgICB9XG4gICAgX2FkZE5vZGVUb0NhY2hlKG5vZGVOYW1lKSB7XG4gICAgICAgIHRoaXMubm9kZUNhY2hlW25vZGVOYW1lXSA9IHRoaXMuX2dldERvY3VtZW50KCkuY3JlYXRlRWxlbWVudChub2RlTmFtZSk7XG4gICAgfVxuICAgIF9nZXRUZXh0Tm9kZSh0ZXh0Q29udGVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RG9jdW1lbnQoKS5jcmVhdGVUZXh0Tm9kZSh0ZXh0Q29udGVudCk7XG4gICAgfVxuICAgIF9nZXRTVkdOb2RlKG5vZGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXREb2N1bWVudCgpLmNyZWF0ZUVsZW1lbnROUyh0aGlzLl9OQU1FU1BBQ0VTLnN2Zywgbm9kZU5hbWUpO1xuICAgIH1cbiAgICBfYWRkVGV4dENvbnRlbnQobm9kZSwgcGFyYW1zKSB7XG4gICAgICAgIGlmICh0aGlzLl9oYXNUZXh0Q29udGVudChwYXJhbXMpKSB7XG4gICAgICAgICAgICBub2RlLnRleHRDb250ZW50ID0gcGFyYW1zLnRleHRDb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIF9jcmVhdGVOb2RlKHBhcmFtcyA9IHtcbiAgICAgICAgbm9kZVR5cGU6IFwiM1wiLFxuICAgICAgICBpbmRleDogMyxcbiAgICAgICAgdGV4dENvbnRlbnQ6IFwibm9vcFwiLFxuICAgICAgICBhdHRyaWJ1dGVzOiBbXSxcbiAgICAgICAgc3R5bGVzOiBbXSxcbiAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICBpc1NWRzogZmFsc2UsXG4gICAgICAgIHBzZXVkb3NlbGVjdG9yczogdW5kZWZpbmVkLFxuICAgICAgICBub2RlTmFtZTogXCJESVZcIlxuICAgIH0sIHN0eWxlcywgc291cmNlKSB7XG4gICAgICAgIGxldCBub2RlID0gbnVsbDtcbiAgICAgICAgY29uc3QgeyBub2RlTmFtZSwgdGV4dENvbnRlbnQsIG5vZGVUeXBlLCBpc1NWRyB9ID0gcGFyYW1zO1xuICAgICAgICBpZiAodGhpcy5yZXN0cmljdGVkTm9kZVR5cGVzLmluY2x1ZGVzKHBhcnNlSW50KG5vZGVUeXBlKSkpIHtcbiAgICAgICAgICAgIG5vZGUgPSBpc1NWRyA/IHRoaXMuX2dldFNWR05vZGUoXCJ0ZXh0XCIpIDogdGhpcy5fZ2V0VGV4dE5vZGUodGV4dENvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzU1ZHKSB7XG4gICAgICAgICAgICBub2RlID0gdGhpcy5fZ2V0U1ZHTm9kZShub2RlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlID0gdGhpcy5fZ2V0Tm9kZUJ5TmFtZShub2RlTmFtZSk7XG4gICAgICAgICAgICB0aGlzLl9hZGRUZXh0Q29udGVudChub2RlLCBwYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZS5zZXRBdHRyaWJ1dGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUodGhpcy5fbm9kZVNlbGVjdG9yTmFtZSgpLCBwYXJhbXMuaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9pc05vdEVtcHR5QXJyYXkocGFyYW1zLmF0dHJpYnV0ZXMpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZvckVhY2gocGFyYW1zLmF0dHJpYnV0ZXMsIChbbmFtZSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYXNub3d3b2xmL2FuZ3VsYXIvY29tbWl0LzNhZGIxYWJmZjgxZDYwYzg0NDBhNzNjOWFiNzVjMTkzZWFmMmNmNTFcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1NWRykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lLmluY2x1ZGVzKFwiZGF0YS1cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgbmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlTlModGhpcy5fTkFNRVNQQUNFUy5zdmcsIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc1NhZmVBdHRyaWJ1dGUobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09IFwiaWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZG9uJ3QgaGFuZGxlIGlkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSwgbm9kZSwgbmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gX2FkZFN0eWxlTm9kZVxuICAgICAgICBpZiAodGhpcy5faXNOb3RFbXB0eUFycmF5KHBhcmFtcy5zdHlsZXMpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fVVNFX0lOTElORV9TVFlMRVMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXROb2RlU3R5bGVGcm9tU3R5bGVBcnJheShwYXJhbXMuc3R5bGVzLCBub2RlLCBzb3VyY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3R5bGVzLnB1c2godGhpcy5fc3R5bGVUZXh0Rm9yTm9kZShwYXJhbXMuaW5kZXgsIHBhcmFtcy5zdHlsZXMsIFwiXCIsIHNvdXJjZSkpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMucHNldWRvc2VsZWN0b3JzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcy5wdXNoKHRoaXMuX3N0eWxlVGV4dEZvck5vZGUocGFyYW1zLmluZGV4LCBwYXJhbXMucHNldWRvc2VsZWN0b3JzLmJlZm9yZSwgXCI6YmVmb3JlXCIsIHNvdXJjZSkpO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXMucHVzaCh0aGlzLl9zdHlsZVRleHRGb3JOb2RlKHBhcmFtcy5pbmRleCwgcGFyYW1zLnBzZXVkb3NlbGVjdG9ycy5hZnRlciwgXCI6YWZ0ZXJcIiwgc291cmNlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIChub2RlLmRhdGFzZXQpIHtcbiAgICAgICAgLy8gICBub2RlLmRhdGFzZXQucGFyZW50ID0gcGFyYW1zLnBhcmVudDtcbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgX3N0eWxlVGV4dEZvck5vZGUoaW5kZXgsIHN0eWxlcywgcG9zdGZpeCA9IFwiXCIsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gYFske3RoaXMuX25vZGVTZWxlY3Rvck5hbWUoKX09XCIke3RoaXMuX25vZGVTZWxlY3RvclZhbHVlKGluZGV4KX1cIl0ke3Bvc3RmaXh9IHsgJHt0aGlzLl9nZXROb2RlU3R5bGVUZXh0KHN0eWxlcywgc291cmNlKX0gfWA7XG4gICAgfVxuICAgIF9ub2RlU2VsZWN0b3JOYW1lKCkge1xuICAgICAgICByZXR1cm4gYGRhdGEtdWlkXyR7dGhpcy5fbm9kZVNlbGVjdG9yRGF0YXNldE5hbWUoKX1gO1xuICAgIH1cbiAgICBfbm9kZVNlbGVjdG9yRGF0YXNldE5hbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLnVpZFByZWZpeCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMudWlkUHJlZml4fWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJpbmRleFwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9ub2RlU2VsZWN0b3JWYWx1ZShpbmRleCkge1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICAgIF9pbnNlcnROb2RlKG5vZGUsIG9iaiwgZnJhZ21lbnQsIG5vZGVzSW5kZXgpIHtcbiAgICAgICAgbGV0IHBhcmVudElkID0gb2JqLnBhcmVudDtcbiAgICAgICAgLy8gY29uc3Qgc2VsZWN0b3IgPSBgWyR7dGhpcy5fbm9kZVNlbGVjdG9yTmFtZSgpfT1cIiR7dGhpcy5fbm9kZVNlbGVjdG9yVmFsdWUoXG4gICAgICAgIC8vICAgcGFyZW50SWRcbiAgICAgICAgLy8gKX1cIl1gO1xuICAgICAgICBpZiAocGFyZW50SWQgPT09IDAgJiYgZnJhZ21lbnQuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHx8IG5vZGVzSW5kZXhbcGFyZW50SWRdXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IG5vZGVzSW5kZXhbcGFyZW50SWRdIHx8IGZyYWdtZW50O1xuICAgICAgICBpZiAobm9kZSA9PT0gcGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBwYXJlbnQuYXBwZW5kQ2hpbGQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9nZXRWYWx1ZU9yRW1wdHlTdHJpbmcob2JqLCBrZXkpIHtcbiAgICAgICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBvYmpba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9nZXRBbGxLZXlzRGlmZihmaXJzdCA9IHt9LCBzZWNvbmQgPSB7fSkge1xuICAgICAgICBsZXQgZktleXMgPSBPYmplY3Qua2V5cyhmaXJzdCk7XG4gICAgICAgIGxldCBzS2V5cyA9IE9iamVjdC5rZXlzKHNlY29uZCk7XG4gICAgICAgIGxldCBhbGxLZXlzID0gQXJyYXkuZnJvbShuZXcgU2V0KFtdLmNvbmNhdChmS2V5cywgc0tleXMpKSk7XG4gICAgICAgIGxldCBkaWZmcyA9IHt9O1xuICAgICAgICBhbGxLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGxldCBmVmFsdWUgPSB0aGlzLl9nZXRWYWx1ZU9yRW1wdHlTdHJpbmcoZmlyc3QsIGtleSk7XG4gICAgICAgICAgICBsZXQgc1ZhbHVlID0gdGhpcy5fZ2V0VmFsdWVPckVtcHR5U3RyaW5nKHNlY29uZCwga2V5KTtcbiAgICAgICAgICAgIGlmIChmVmFsdWUgIT09IHNWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGRpZmZzW2tleV0gPSBbZlZhbHVlLCBzVmFsdWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRpZmZzKS5sZW5ndGggPyBkaWZmcyA6IGZhbHNlO1xuICAgIH1cbiAgICBfZ2V0RXF1YWxLZXlzRGlmZihmaXJzdCwgc2Vjb25kKSB7XG4gICAgICAgIGxldCBkaWZmcyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhmaXJzdCkubWFwKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoZmlyc3Rba2V5XSAhPT0gc2Vjb25kW2tleV0pIHtcbiAgICAgICAgICAgICAgICBkaWZmc1trZXldID0gW2ZpcnN0W2tleV0sIHNlY29uZFtrZXldXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkaWZmcykubGVuZ3RoID8gZGlmZnMgOiBmYWxzZTtcbiAgICB9XG4gICAgX2dldFN0eWxlc0ZvclBzZXVkb1NlbGVjdG9ycyhub2RlLCBzb3VyY2UpIHtcbiAgICAgICAgY29uc3QgYmVmb3JlID0gdGhpcy5fY3JlYXRlU3R5bGVPYmplY3QodGhpcy5fZ2V0U3R5bGVGb3JOb2RlKG5vZGUsIFwiOmJlZm9yZVwiKSk7XG4gICAgICAgIGNvbnN0IGFmdGVyID0gdGhpcy5fY3JlYXRlU3R5bGVPYmplY3QodGhpcy5fZ2V0U3R5bGVGb3JOb2RlKG5vZGUsIFwiOmFmdGVyXCIpKTtcbiAgICAgICAgY29uc3Qgc3R5bGVEaWZmID0gdGhpcy5fZ2V0RXF1YWxLZXlzRGlmZihiZWZvcmUsIGFmdGVyKTtcbiAgICAgICAgaWYgKHN0eWxlRGlmZikge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBiZWZvcmU6IHRoaXMuX3N0eWxlT2JqZWN0VG9PcHRpbWFsU3R5bGVBcnJheShiZWZvcmUsIHVuZGVmaW5lZCwgc291cmNlKSxcbiAgICAgICAgICAgICAgICBhZnRlcjogdGhpcy5fc3R5bGVPYmplY3RUb09wdGltYWxTdHlsZUFycmF5KGFmdGVyLCB1bmRlZmluZWQsIHNvdXJjZSksXG4gICAgICAgICAgICAgICAgZGlmZjogc3R5bGVEaWZmLFxuICAgICAgICAgICAgICAgIGluZGV4OiBudWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9nZXRTdHlsZUZvck5vZGUoZWxlbWVudCwgcHNldWRvc2VsZWNvciA9IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdHJpY3RlZE5vZGVUeXBlcy5pbmNsdWRlcyhlbGVtZW50Lm5vZGVUeXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzdHlsZSA9IFtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBwc2V1ZG9zZWxlY29yKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSwgZWxlbWVudCwgZWxlbWVudC5ub2RlVHlwZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cbiAgICBfZ2V0Qm9keU5vZGUoKSB7XG4gICAgICAgIC8vbGVnYWN5IGhvb2tcbiAgICAgICAgaWYgKFwiZ2V0Qm9keU5vZGVcIiBpbiB0aGlzICYmIHR5cGVvZiB0aGlzLmdldEJvZHlOb2RlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEJvZHlOb2RlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvZHkgfHwgd2luZG93LmRvY3VtZW50LmJvZHk7XG4gICAgfVxuICAgIF9nZXREb2N1bWVudCgpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIH1cbiAgICBfZ2V0Tm9kZVN0eWxlVGV4dChzdHlsZXMsIHNvdXJjZSkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IFtdO1xuICAgICAgICB0aGlzLl9mb3JFYWNoKHN0eWxlcywga2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFtuYW1lLCB2YWx1ZV0gPSB0aGlzLl9nZXRGcm9tT3B0aW1hbFZhbHVlKGtleSwgc291cmNlKTtcbiAgICAgICAgICAgIHN0eWxlLnB1c2goYCR7bmFtZX06JHt2YWx1ZX1gKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdHlsZS5qb2luKFwiO1wiKTtcbiAgICB9XG4gICAgX2dldE5vZGVCeU5hbWUobm9kZU5hbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9oYXNOb2RlSW5DYWNoZShub2RlTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZE5vZGVUb0NhY2hlKG5vZGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0Tm9kZUZyb21DYWNoZShub2RlTmFtZSk7XG4gICAgfVxuICAgIF9nZXROb2RlRnJvbUNhY2hlKHRhZykge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlQ2FjaGVbdGFnXS5jbG9uZU5vZGUoZmFsc2UpO1xuICAgIH1cbiAgICBfZ2V0RnJvbU9wdGltYWxWYWx1ZSh2YWx1ZSwgc291cmNlID0gdGhpcykge1xuICAgICAgICBjb25zdCBba2V5SW5kZXgsIHZhbHVlSW5kZXhdID0gdmFsdWUuc3BsaXQoXCIvXCIpO1xuICAgICAgICByZXR1cm4gW3NvdXJjZS5DQUNIRV9LRVlTW2tleUluZGV4XSwgc291cmNlLkNBQ0hFX1ZBTFVFU1t2YWx1ZUluZGV4XV07XG4gICAgfVxuICAgIGdldE9wdGltYWxWYWx1ZShrZXksIHZhbHVlLCBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHRoaXMuU0tJUF9TVFlMRVNba2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQga2V5SW5kZXggPSBzb3VyY2UuQ0FDSEVfS0VZUy5pbmRleE9mKGtleSk7XG4gICAgICAgIGxldCBrZXlWYWx1ZSA9IHNvdXJjZS5DQUNIRV9WQUxVRVMuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgIGlmIChrZXlJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHNvdXJjZS5DQUNIRV9LRVlTLnB1c2goa2V5KTtcbiAgICAgICAgICAgIGtleUluZGV4ID0gc291cmNlLkNBQ0hFX0tFWVMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5VmFsdWUgPT09IC0xKSB7XG4gICAgICAgICAgICBzb3VyY2UuQ0FDSEVfVkFMVUVTLnB1c2godmFsdWUpO1xuICAgICAgICAgICAga2V5VmFsdWUgPSBzb3VyY2UuQ0FDSEVfVkFMVUVTLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke2tleUluZGV4fS8ke2tleVZhbHVlfWA7XG4gICAgfVxuICAgIF9nZXRTdGF0ZSh0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1ldGE6IHRoaXMuX2Nsb25lT2JqZWN0KHRhcmdldC5tZXRhKSxcbiAgICAgICAgICAgIGl0ZW1zOiB0aGlzLl9nZXRBcnJheUNvcHkodGFyZ2V0Lml0ZW1zKSxcbiAgICAgICAgICAgIEhUTUxfU1RZTEU6IHRoaXMuX2dldEFycmF5Q29weSh0YXJnZXQuSFRNTF9TVFlMRSksXG4gICAgICAgICAgICBCT0RZX1NUWUxFOiB0aGlzLl9nZXRBcnJheUNvcHkodGFyZ2V0LkJPRFlfU1RZTEUpLFxuICAgICAgICAgICAgQ0FDSEVfS0VZUzogdGhpcy5fZ2V0QXJyYXlDb3B5KHRhcmdldC5DQUNIRV9LRVlTKSxcbiAgICAgICAgICAgIENBQ0hFX1ZBTFVFUzogdGhpcy5fZ2V0QXJyYXlDb3B5KHRhcmdldC5DQUNIRV9WQUxVRVMpLFxuICAgICAgICAgICAgQk9EWV9BVFRSSUJVVEVTOiB0aGlzLl9nZXRBcnJheUNvcHkodGFyZ2V0LkJPRFlfQVRUUklCVVRFUylcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0UGFyZW50U3R5bGVCeUluZGV4KGluZGV4LCBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZS5CT0RZX1NUWUxFIHx8IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZS5pdGVtc1tpXSAmJiBzb3VyY2UuaXRlbXNbaV0uaW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2UuaXRlbXNbaV0uc3R5bGUgfHwgW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgfVxufVxuaWYgKHR5cGVvZiB3aW5kb3cuQVVUT1NUQVJUID09PSBcImJvb2xlYW5cIiAmJiB3aW5kb3cuQVVUT1NUQVJUID09PSB0cnVlKSB7XG4gICAgbmV3IERvbVNuYXBzaG90KCk7XG59XG5lbHNlIHtcbiAgICB3aW5kb3cuc25hcHNob3RlciA9IG5ldyBEb21TbmFwc2hvdCgpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBkZWZhdWx0XzEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlckFnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICAgICBob3N0bmFtZTogd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLFxuICAgICAgICBwcm90b2NvbDogd2luZG93LmxvY2F0aW9uLnByb3RvY29sLFxuICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICBzY3JlZW5XaWR0aDogd2luZG93LnNjcmVlbi53aWR0aCxcbiAgICAgICAgc2NyZWVuSGVpZ2h0OiB3aW5kb3cuc2NyZWVuLmhlaWdodCxcbiAgICAgICAgc2NyZWVuQXZhaWxXaWR0aDogd2luZG93LnNjcmVlbi5hdmFpbFdpZHRoLFxuICAgICAgICBzY3JlZW5BdmFpbEhlaWdodDogd2luZG93LnNjcmVlbi5hdmFpbEhlaWdodCxcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRfMTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbGxlY3QtbWV0YS5qcy5tYXAiXX0=
