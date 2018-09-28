/*eslint no-unused-vars: ["error", { "argsIgnorePattern": "DomSnapshot" }]*/
/* global firebase, AUTOSTART */
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
                protocol: '',
                hostname: ''
            }
        }
    }, fbConfig = false) {
        if (!config.state) {
            config.state = {};
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
        this._NAMESPACES = {
            SVG: 'http://www.w3.org/2000/svg'
        };
        // node cache (for node creation)
        this.nodeCache = {};
        // roots init
        this._html = false;
        this._head = false;
        this._body = false;
        // this nodes not going to snapshot
        this.NODE_NAMES_TO_IGNORE = [
            'NOSCRIPT', 'SCRIPT', 'STYLE', '#comment', '#document'
        ];
        // iframes nodes will be replaced to div's
        this.NODE_NAMES_TO_REPLACE = {
            'IFRAME': 'DIV'
        };
        // pseudoselectors to capture
        this.PSEUDOSELECTORS = [
            ':after', ':before', ':first-line', ':first-letter', ':selection'
        ];
        // inherit styles (based on css 2.1);
        this.INHERIT = [
            'azimuth', 'border-collapse', 'border-spacing', 'caption-side',
            'color', 'cursor', 'direction', 'elevation', 'empty-cells',
            'font-family', 'font-size', 'font-style', 'font-variant', 'font-weight',
            'font', 'letter-spacing', 'line-height', 'list-style-image', 'list-style-position',
            'list-style-type', 'list-style', 'orphans', 'pitch-range', 'pitch', 'quotes', 'richness',
            'speak-header', 'speak-numeral', 'speak-punctuation', 'speak',
            'speech-rate', 'stress', 'text-align', 'text-indent', 'text-transform',
            'visibility', 'voice-family', 'volume', 'white-space', 'widows', 'word-spacing'
        ];
        // styles to skip from capturing
        this.SKIP_STYLES = {
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
        this.isLoaded = false;
        // skip this node types
        this.restrictedNodeTypes = [3, 8];
        // skip hidden nodes
        this.skipDisplayNone = true;
        // firebase config with defaults
        this.fbConfig = fbConfig || {
            apiKey: 'AIzaSyA84vag_S0QSO7j1Eff4vZJEjdLc6wPx0M',
            authDomain: 'dom-snapshot.firebaseapp.com',
            databaseURL: 'https://dom-snapshot.firebaseio.com',
            projectId: 'dom-snapshot',
            storageBucket: 'dom-snapshot.appspot.com',
            messagingSenderId: '578009354171'
        };
        this.intFirebase(this.fbConfig);
        //https://www.w3schools.com/TAGs/ref_eventattributes.asp
        this.ESCAPED_ATTRIBUTES = [
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
    }
    _normalizeAttributeName(attrName) {
        return String(attrName).trim().toLowerCase();
    }
    _isSafeAttribute(attrName) {
        if (this._USE_SAFE_ATTRIBUTES
            &&
                this.ESCAPED_ATTRIBUTES.includes(this._normalizeAttributeName(attrName))) {
            return false;
        }
        return !attrName.includes('ng-') && !attrName.includes('"') && !attrName.includes('style');
    }
    _extractNodeAttributes(node) {
        return Array.prototype.map.call(node.attributes, el => {
            return [el.nodeName, this._patchAttribute(el.nodeName, el.nodeValue)];
        }).filter(([attrName]) => {
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
    _patchAttribute(name, value) {
        if (['src', 'href'].includes(name)) {
            const firstChar = String(value).charAt(0);
            const secondChar = String(value).charAt(1);
            const hasHash = secondChar === '#' || firstChar === '#';
            const hasTwoSlashes = (firstChar === secondChar && firstChar === '/');
            const hasPath = secondChar === '/';
            if (!hasTwoSlashes && (hasPath || hasHash)) {
                if (this.meta.hostname && this.meta.protocol) {
                    return `${this.meta.protocol}//${this.meta.hostname}${value}`;
                }
            }
        }
        return value;
    }
    _isSVG(element) {
        // https://www.w3.org/TR/SVG/propidx.html
        const isSVGNode = element.nodeName.toLowerCase() === 'svg';
        if (isSVGNode) {
            element.dataset.svg = true;
            return true;
        }
        if (!element.parentNode || !element.parentNode.dataset) {
            return false;
        }
        let svgResult = element.parentNode.dataset.svg;
        if (svgResult && element.dataset) {
            element.dataset.svg = true;
        }
        if (svgResult === 'true') {
            svgResult = true;
        }
        return svgResult || false;
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
        if (typeof keyOrObject === 'object') {
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
        const head = this._getDocument().getElementsByTagName('head')[0];
        const script = this._getDocument().createElement('script');
        script.type = 'text/javascript';
        script.onload = () => {
            firebase.initializeApp(config);
            this.firebase = firebase;
            this.isLoaded = true;
            resolve(this);
        };
        script.onerror = (e) => {
            reject(e);
        };
        script.src = 'https://www.gstatic.com/firebasejs/4.2.0/firebase.js';
        head.appendChild(script);
    }
    intFirebase(fbConfig) {
        this._loaded = new Promise((resolve, reject) => {
            if (typeof window.firebase !== 'undefined') {
                this.firebase = firebase;
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
        return this._head || this._getBodyNode().parentNode.querySelector('head') || this._getDocument().head || this._getDocument().getElementsByTagName('head')[0];
    }
    _cleanHeadNodeFromStyles() {
        const head = this._getHead();
        let stylesToRemove = head.getElementsByTagName('style');
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
    _addStyleNode(css, target = false) {
        const style = this._getDocument().createElement('style');
        const head = (target || this._getHead());
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        }
        else {
            style.appendChild(this._getDocument().createTextNode(css));
        }
        head.appendChild(style);
    }
    _getDomNodeFromArgument(selector) {
        let target = typeof selector === 'object' ? selector : document.querySelector(selector);
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
        if (rewriteDomContent) {
            this._cleanDomNode(target);
        }
        this.restoreWorldFrom(snapshot, target);
    }
    showSnapshot(id, selector = false) {
        return this.getSnapshotById(id).then((snapshot) => {
            this.destroyWorld();
            let targetNode = document.querySelector(selector) || this._getBodyNode();
            let source = this.setState(this, snapshot);
            this.restoreWorldFrom(source, targetNode);
        });
    }
    restoreSnapshot(id) {
        return this._showSnapshot(id);
    }
    _fbAddToSnapshotList(id, data) {
        this.firebase.database()
            .ref(`snapshots-list/${id}`)
            .set(data);
    }
    _fbSetSnapshot(id, snapshot) {
        this.firebase.database()
            .ref(`snapshots/${id}`)
            .set(snapshot);
    }
    _fbGetSnapshot(id) {
        return new Promise((resolve) => {
            this.firebase.database().ref('snapshots/' + id)
                .once('value')
                .then((snapshot) => {
                return resolve(snapshot.val());
            });
        });
    }
    getSnapshotById(id) {
        return this._fbGetSnapshot(id);
    }
    _showSnapshot(id = '1502312089479', rootElement) {
        return this.getSnapshotById(id).then((snapshot) => {
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
        if (typeof element !== 'object' || element === null) {
            return [];
        }
        return element.slice(0);
    }
    _cloneObject(obj) {
        if (typeof obj === 'undefined' || obj === null) {
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
        for (let i = 0; i < capturedNodes.length; i++) {
            let item = capturedNodes[i];
            if (item.dataset) {
                item.dataset.index = i;
            }
            let nodeStyle = this._getStyleForNode(item);
            if (this._shouldTakeElement(item, nodeStyle)) {
                if (item.dataset && this._USE_PSEUDOSELECTORS) {
                    let pseudoselecorStyles = this._getStylesForPseudoSelectors(item, source);
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
            this._forEach(pseudoSelectorsStylesArray, (el) => {
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
        let nodesIndex = {};
        this._forEach(source.items, (el) => {
            let node = this._createNode(el, stylesToUppend, source);
            nodesIndex[el.index] = node;
            this._insertNode(node, el, fragment, nodesIndex);
        });
        nodesIndex = {};
        stylesToUppend.push(`html { ${this._getNodeStyleText(source.HTML_STYLE, source)} }`);
        stylesToUppend.push(`body { ${this._getNodeStyleText(source.BODY_STYLE, source)} }`);
        this._addStyleNode(stylesToUppend.reverse().join('\n'));
        let rootNode = (target || this._getBodyNode());
        rootNode.appendChild(fragment);
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
        this._getBodyNode().innerHTML = '';
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
            if (lastItemIndex !== index && item.nodeName === '#text') {
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
        const styledItems = source.items.filter((e) => e.styles.length);
        // collect browser default styles
        this._forEach(source.HTML_STYLE, (style) => {
            if (styledItems.every((el) => el.styles.includes(style))) {
                if (source.BODY_STYLE.includes(style)) {
                    stylesToRemove.push(style);
                }
            }
        });
        // exclude collected stules
        source.HTML_STYLE = source.HTML_STYLE.filter((el) => !stylesToRemove.includes(el));
        source.BODY_STYLE = source.BODY_STYLE.filter((el) => !stylesToRemove.includes(el));
        this._forEach(source.items, (item) => {
            if (this._isNotEmptyArray(item.styles)) {
                item.styles = item.styles.filter((el) => !stylesToRemove.includes(el));
            }
        });
        source.BODY_STYLE = source.BODY_STYLE.filter(el => !stylesToRemove.includes(el));
    }
    _getNameForNode(nodeName) {
        return this.NODE_NAMES_TO_REPLACE[nodeName] || nodeName;
    }
    _getParentForNode(node) {
        let parent = node.parentNode ? node.parentNode.dataset.index : 0;
        if (!this.isNotUndefined(parent)) {
            return 0;
        }
        return parseInt(parent);
    }
    _getNodeTextContent(node) {
        return node.children ? '' : node.data;
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
        let firstStyles = firstState.items.filter(e => e.styles).map(el => {
            let item = this._setNodeStyleFromStyleArray(el.styles, {
                style: {}
            }, firstState);
            return Object.assign({}, el, item);
        });
        let secondStyles = secondState.items.filter(e => e.styles).map(el => {
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
    _serializeNode(styleNode, node, index, source) {
        let payload = this._formatStyle(styleNode, node, index, source);
        return payload;
    }
    _formatStyle(styleNode, node, index, source) {
        const result = {
            styles: [],
            nodeName: this._getNameForNode(node.nodeName),
            index,
            nodeType: node.nodeType,
            parent: this._getParentForNode(node),
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
        let walk = this._getDocument().createTreeWalker(node, NodeFilter.SHOW_ALL, (node) => {
            return !this.NODE_NAMES_TO_IGNORE.includes(node.nodeName);
        });
        let n = null;
        while (n = walk.nextNode()) {
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
        this.addMeta('Date', Date.now(), source);
        this.addMeta('URL', window.location.href, source);
        this.addMeta('Browser', window.navigator.naaddMetame, source);
        let state = this._getState(source);
        console.log('state', state);
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
        this._forEach(styles, (key) => {
            const [name, value] = this._getFromOptimalValue(key, source);
            node.style[name] = value;
        });
        return node;
    }
    setMeta(meta) {
        if (typeof meta !== 'object') {
            console.log('meta should be an object');
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
        this._forEach(Object.keys(styleObject), (key) => {
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
            if (styleKey && !(this.INHERIT.includes(el) && parentStyle.includes(styleKey))) {
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
        if (node.parentNode && this.NODE_NAMES_TO_IGNORE.includes(node.parentNode.nodeName)) {
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
                if (nodeStyle.display === 'none') {
                    node.dataset.ignored = true;
                    return false;
                }
            }
        }
        return true;
    }
    isNotUndefined(el) {
        return el !== void (0);
    }
    _isNotEmptyArray(arr) {
        return arr && arr.length;
    }
    _hasTextContent(node = { textContent: '' }) {
        return typeof node.textContent === 'string' && node.textContent.length;
    }
    _hasNodeInCache(nodeName) {
        return (nodeName in this.nodeCache);
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
        nodeType: '3',
        textContent: 'noop',
        isSVG: false,
        nodeName: 'DIV'
    }, styles, source) {
        let node = null;
        const { nodeName, textContent, nodeType, isSVG } = params;
        if (this.restrictedNodeTypes.includes(nodeType)) {
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
                this._forEach(params.attributes, ([name, value]) => {
                    if (name) {
                        if (isSVG) {
                            node.setAttributeNS(this._NAMESPACES.SVG, name, value);
                        }
                        else {
                            if (this._isSafeAttribute(name)) {
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
                styles.push(this._styleTextForNode(params.index, params.styles, '', source));
                if (params.pseudoselectors) {
                    styles.push(this._styleTextForNode(params.index, params.pseudoselectors.before, ':before', source));
                    styles.push(this._styleTextForNode(params.index, params.pseudoselectors.after, ':after', source));
                }
            }
        }
        if (node.dataset) {
            node.dataset.parent = params.parent;
        }
        return node;
    }
    _styleTextForNode(index, styles, postfix = '', source) {
        return `[data-index="${index}"]${postfix} { ${this._getNodeStyleText(styles, source)} }`;
    }
    _insertNode(node, obj, fragment, nodesIndex) {
        let parentId = node.dataset ? node.dataset.parent : obj.parent;
        const selector = `[data-index="${parentId}"]`;
        // || nodesIndex[parentId]
        const parent = fragment.querySelector(selector) || fragment;
        if (node === parent) {
            return;
        }
        parent.appendChild(node);
    }
    _getValueOrEmptyString(obj, key) {
        if (key in obj) {
            return obj[key];
        }
        else {
            return '';
        }
    }
    _getAllKeysDiff(first = {}, second = {}) {
        let fKeys = Object.keys(first);
        let sKeys = Object.keys(second);
        let allKeys = Array.from(new Set([].concat(fKeys, sKeys)));
        let diffs = {};
        allKeys.forEach((key) => {
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
        const before = this._createStyleObject(this._getStyleForNode(node, ':before'));
        const after = this._createStyleObject(this._getStyleForNode(node, ':after'));
        const styleDiff = this._getEqualKeysDiff(before, after);
        if (styleDiff) {
            return {
                before: this._styleObjectToOptimalStyleArray(before, undefined, source),
                after: this._styleObjectToOptimalStyleArray(after, undefined, source),
                diff: styleDiff
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
        if ('getBodyNode' in this) {
            return this.getBodyNode();
        }
        return this._body || window.document.body;
    }
    _getDocument() {
        return document;
    }
    _getNodeStyleText(styles, source) {
        const style = [];
        this._forEach(styles, (key) => {
            const [name, value] = this._getFromOptimalValue(key, source);
            style.push(`${name}:${value}`);
        });
        return style.join(';');
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
        const [keyIndex, valueIndex] = value.split('/');
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
        if (typeof index !== 'number') {
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
if (typeof AUTOSTART === 'boolean' && AUTOSTART === true) {
    new DomSnapshot();
}
else {
    window.snapshoter = new DomSnapshot();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RUFBNEU7QUFDNUUsZ0NBQWdDO0FBRWhDLE1BQU0sV0FBVztJQTZCaEI7TUFDRTtJQUNGLFlBQVksTUFBTSxHQUFHO1FBQ3BCLFlBQVksRUFBRSxLQUFLO1FBQ25CLE1BQU0sRUFBRSxLQUFLO1FBQ2IsYUFBYSxFQUFFLElBQUk7UUFDbkIsc0JBQXNCLEVBQUUsSUFBSTtRQUM1QixjQUFjLEVBQUUsSUFBSTtRQUNwQixLQUFLLEVBQUU7WUFDTixVQUFVLEVBQUUsRUFBRTtZQUNkLFVBQVUsRUFBRSxFQUFFO1lBQ2QsWUFBWSxFQUFFLEVBQUU7WUFDaEIsVUFBVSxFQUFFLEVBQUU7WUFDZCxLQUFLLEVBQUUsRUFBRTtZQUNULElBQUksRUFBRTtnQkFDTCxRQUFRLEVBQUUsRUFBRTtnQkFDWixRQUFRLEVBQUUsRUFBRTthQUNaO1NBQ0Q7S0FDRCxFQUFFLFFBQVEsR0FBRyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ2xCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsYUFBYTtRQUNiLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFD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SUFDTixNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7Q0FDdEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmVzbGludCBuby11bnVzZWQtdmFyczogW1wiZXJyb3JcIiwgeyBcImFyZ3NJZ25vcmVQYXR0ZXJuXCI6IFwiRG9tU25hcHNob3RcIiB9XSovXG4vKiBnbG9iYWwgZmlyZWJhc2UsIEFVVE9TVEFSVCAqL1xuXG5jbGFzcyBEb21TbmFwc2hvdCB7XG5cblx0cHJpdmF0ZSBCT0RZX1NUWUxFOiBhbnlbXTtcblx0cHJpdmF0ZSBDQUNIRV9LRVlTOiBhbnlbXTtcblx0cHJpdmF0ZSBDQUNIRV9WQUxVRVM6IGFueVtdO1xuXHRwcml2YXRlIEJPRFlfQVRUUklCVVRFUzogYW55W107XG5cdHByaXZhdGUgcmVzdHJpY3RlZE5vZGVUeXBlczogbnVtYmVyW107XG5cdHByaXZhdGUgaXNMb2FkZWQ6IGJvb2xlYW47XG5cdHByaXZhdGUgc2tpcERpc3BsYXlOb25lOiBib29sZWFuO1xuXHRwcml2YXRlIEhUTUxfU1RZTEU6IGFueVtdO1xuXHRwcml2YXRlIGl0ZW1zOiBhbnlbXTtcblx0cHJpdmF0ZSBtZXRhOiBvYmplY3Q7XG5cdHByaXZhdGUgX1VTRV9WQUNVVU06IGJvb2xlYW47XG5cdHByaXZhdGUgX1VTRV9JTkxJTkVfU1RZTEVTOiBib29sZWFuO1xuXHRwcml2YXRlIF9VU0VfU1RZTEVTX0NMRUFOVVA6IGJvb2xlYW47XG5cdHByaXZhdGUgX1VTRV9QU0VVRE9TRUxFQ1RPUlM6IGJvb2xlYW47XG5cdHByaXZhdGUgX1VTRV9TQUZFX0FUVFJJQlVURVM6IGJvb2xlYW47XG5cdHByaXZhdGUgX05BTUVTUEFDRVM6IHsgW2tleTogc3RyaW5nXSA6IHN0cmluZyB9O1xuXHRwcml2YXRlIG5vZGVDYWNoZTogb2JqZWN0O1xuXHRwcml2YXRlIE5PREVfTkFNRVNfVE9fSUdOT1JFOiBzdHJpbmdbXTtcblx0cHJpdmF0ZSBOT0RFX05BTUVTX1RPX1JFUExBQ0U6IHsgW2tleTogc3RyaW5nXSA6IHN0cmluZyB9O1xuXHRwcml2YXRlIF9odG1sOiBmYWxzZSB8IE5vZGU7XG5cdHByaXZhdGUgX2hlYWQ6IGZhbHNlIHwgTm9kZTtcblx0cHJpdmF0ZSBfYm9keTogZmFsc2UgfCBOb2RlO1xuXHRwcml2YXRlIFBTRVVET1NFTEVDVE9SUzogc3RyaW5nW107XG5cdHByaXZhdGUgSU5IRVJJVDogc3RyaW5nW107XG5cdHByaXZhdGUgU0tJUF9TVFlMRVM6IHsgW2tleTogc3RyaW5nXSA6IHN0cmluZyB9O1xuXHRwcml2YXRlIGZiQ29uZmlnOiBhbnk7XG5cblx0Lypcblx0Ki9cblx0Y29uc3RydWN0b3IoY29uZmlnID0ge1xuXHRcdGlubGluZVN0eWxlczogZmFsc2UsIC8vIHVzZSBpbmxpbmUgc3R5bGVzIG9uIHJlc3RvcmVcblx0XHR2YWN1dW06IGZhbHNlLCAvLyB1c2Ugbm9kZS12YWN1dW0gKHNxdWFzaGluZykgXG5cdFx0c3R5bGVzQ2xlYW51cDogdHJ1ZSxcblx0XHRjYXB0dXJlUHNldWRvc2VsZWN0b3JzOiB0cnVlLFxuXHRcdHNhZmVBdHRyaWJ1dGVzOiB0cnVlLFxuXHRcdHN0YXRlOiB7XG5cdFx0XHRCT0RZX1NUWUxFOiBbXSxcblx0XHRcdENBQ0hFX0tFWVM6IFtdLFxuXHRcdFx0Q0FDSEVfVkFMVUVTOiBbXSxcblx0XHRcdEhUTUxfU1RZTEU6IFtdLFxuXHRcdFx0aXRlbXM6IFtdLFxuXHRcdFx0bWV0YToge1x0Ly8gdXNlZCB0byBwYXRjaCBpbWFnZSBsaW5rcyBvbiBzbmFwc2hvdCByZXN0b3JlIChtYXkgYmUgcmVwbGFjZWQgdG8gYmFzZTY0IGlubGluZSlcblx0XHRcdFx0cHJvdG9jb2w6ICcnLFxuXHRcdFx0XHRob3N0bmFtZTogJydcblx0XHRcdH1cblx0XHR9XG5cdH0sIGZiQ29uZmlnID0gZmFsc2UpIHtcblx0XHRpZiAoIWNvbmZpZy5zdGF0ZSkge1xuXHRcdFx0Y29uZmlnLnN0YXRlID0ge307XG5cdFx0fVxuXHRcdC8vIGluaXQgc3RhdGVcblx0XHR0aGlzLkJPRFlfU1RZTEUgPSBjb25maWcuc3RhdGUuQk9EWV9TVFlMRSB8fCBbXTtcblx0XHR0aGlzLkNBQ0hFX0tFWVMgPSBjb25maWcuc3RhdGUuQ0FDSEVfS0VZUyB8fCBbXTtcblx0XHR0aGlzLkNBQ0hFX1ZBTFVFUyA9IGNvbmZpZy5zdGF0ZS5DQUNIRV9WQUxVRVMgfHwgW107XG5cdFx0dGhpcy5CT0RZX0FUVFJJQlVURVMgPSBjb25maWcuc3RhdGUuQ0FDSEVfVkFMVUVTIHx8IFtdO1xuXHRcdHRoaXMuSFRNTF9TVFlMRSA9IGNvbmZpZy5zdGF0ZS5IVE1MX1NUWUxFIHx8IFtdO1xuXHRcdHRoaXMuaXRlbXMgPSBjb25maWcuc3RhdGUuaXRlbXMgfHwgW107XG5cdFx0dGhpcy5tZXRhID0gY29uZmlnLnN0YXRlLm1ldGEgfHwge307XG5cdFx0dGhpcy5fVVNFX1ZBQ1VVTSA9IGNvbmZpZy52YWN1dW0gfHwgZmFsc2U7XG5cdFx0Ly8gYXBwZW5kIHN0eWxlcyB0byBkb20gbm9kZSBpbnN0ZWFkIG9mIHN0eWxlIG5vZGVcblx0XHR0aGlzLl9VU0VfSU5MSU5FX1NUWUxFUyA9IGNvbmZpZy5pbmxpbmVTdHlsZXMgfHwgZmFsc2U7XG5cdFx0dGhpcy5fVVNFX1NUWUxFU19DTEVBTlVQID0gY29uZmlnLnN0eWxlc0NsZWFudXAgfHwgdHJ1ZTtcblx0XHR0aGlzLl9VU0VfUFNFVURPU0VMRUNUT1JTID0gY29uZmlnLmNhcHR1cmVQc2V1ZG9zZWxlY3RvcnMgfHwgdHJ1ZTtcblx0XHR0aGlzLl9VU0VfU0FGRV9BVFRSSUJVVEVTID0gY29uZmlnLnNhZmVBdHRyaWJ1dGVzIHx8IHRydWU7XG5cblx0XHR0aGlzLl9OQU1FU1BBQ0VTID0ge1xuXHRcdFx0U1ZHOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG5cdFx0fTtcblx0XHQvLyBub2RlIGNhY2hlIChmb3Igbm9kZSBjcmVhdGlvbilcblx0XHR0aGlzLm5vZGVDYWNoZSA9IHt9O1xuXHRcdC8vIHJvb3RzIGluaXRcblx0XHR0aGlzLl9odG1sID0gZmFsc2U7XG5cdFx0dGhpcy5faGVhZCA9IGZhbHNlO1xuXHRcdHRoaXMuX2JvZHkgPSBmYWxzZTtcblx0XHQvLyB0aGlzIG5vZGVzIG5vdCBnb2luZyB0byBzbmFwc2hvdFxuXHRcdHRoaXMuTk9ERV9OQU1FU19UT19JR05PUkUgPSBbXG5cdFx0XHQnTk9TQ1JJUFQnLCAnU0NSSVBUJywgJ1NUWUxFJywgJyNjb21tZW50JywgJyNkb2N1bWVudCdcblx0XHRdO1xuXHRcdC8vIGlmcmFtZXMgbm9kZXMgd2lsbCBiZSByZXBsYWNlZCB0byBkaXYnc1xuXHRcdHRoaXMuTk9ERV9OQU1FU19UT19SRVBMQUNFID0ge1xuXHRcdFx0J0lGUkFNRSc6ICdESVYnXG5cdFx0fTtcblx0XHQvLyBwc2V1ZG9zZWxlY3RvcnMgdG8gY2FwdHVyZVxuXHRcdHRoaXMuUFNFVURPU0VMRUNUT1JTID0gW1xuXHRcdFx0JzphZnRlcicsICc6YmVmb3JlJywgJzpmaXJzdC1saW5lJywgJzpmaXJzdC1sZXR0ZXInLCAnOnNlbGVjdGlvbidcblx0XHRdO1xuXHRcdC8vIGluaGVyaXQgc3R5bGVzIChiYXNlZCBvbiBjc3MgMi4xKTtcblx0XHR0aGlzLklOSEVSSVQgPSBbXG5cdFx0XHQnYXppbXV0aCcsICdib3JkZXItY29sbGFwc2UnLCAnYm9yZGVyLXNwYWNpbmcnLCAnY2FwdGlvbi1zaWRlJyxcblx0XHRcdCdjb2xvcicsICdjdXJzb3InLCAnZGlyZWN0aW9uJywgJ2VsZXZhdGlvbicsICdlbXB0eS1jZWxscycsXG5cdFx0XHQnZm9udC1mYW1pbHknLCAnZm9udC1zaXplJywgJ2ZvbnQtc3R5bGUnLCAnZm9udC12YXJpYW50JywgJ2ZvbnQtd2VpZ2h0Jyxcblx0XHRcdCdmb250JywgJ2xldHRlci1zcGFjaW5nJywgJ2xpbmUtaGVpZ2h0JywgJ2xpc3Qtc3R5bGUtaW1hZ2UnLCAnbGlzdC1zdHlsZS1wb3NpdGlvbicsXG5cdFx0XHQnbGlzdC1zdHlsZS10eXBlJywgJ2xpc3Qtc3R5bGUnLCAnb3JwaGFucycsICdwaXRjaC1yYW5nZScsICdwaXRjaCcsICdxdW90ZXMnLCAncmljaG5lc3MnLFxuXHRcdFx0J3NwZWFrLWhlYWRlcicsICdzcGVhay1udW1lcmFsJywgJ3NwZWFrLXB1bmN0dWF0aW9uJywgJ3NwZWFrJyxcblx0XHRcdCdzcGVlY2gtcmF0ZScsICdzdHJlc3MnLCAndGV4dC1hbGlnbicsICd0ZXh0LWluZGVudCcsICd0ZXh0LXRyYW5zZm9ybScsXG5cdFx0XHQndmlzaWJpbGl0eScsICd2b2ljZS1mYW1pbHknLCAndm9sdW1lJywgJ3doaXRlLXNwYWNlJywgJ3dpZG93cycsICd3b3JkLXNwYWNpbmcnXG5cdFx0XTtcblx0XHQvLyBzdHlsZXMgdG8gc2tpcCBmcm9tIGNhcHR1cmluZ1xuXHRcdHRoaXMuU0tJUF9TVFlMRVMgPSB7XG5cdFx0XHQnYWxpZ24taXRlbXMnOiAnbm9ybWFsJyxcblx0XHRcdCdhbGlnbi1zZWxmJzogJ25vcm1hbCcsXG5cdFx0XHQnY2xpcC1wYXRoJzogJ25vbmUnLFxuXHRcdFx0J2ZsZXgtYmFzaXMnOiAnYXV0bycsXG5cdFx0XHQnZmxleC1ncm93JzogJzAnLFxuXHRcdFx0J2ZsZXgtc2hyaW5rJzogJzEnLFxuXHRcdFx0J2p1c3RpZnktY29udGVudCc6ICdub3JtYWwnLFxuXHRcdFx0J3VzZXItc2VsZWN0JzogJ3RleHQnLFxuXHRcdFx0J2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnOiAnMHB4Jyxcblx0XHRcdCdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cyc6ICcwcHgnLFxuXHRcdFx0J2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJzogJzBweCcsXG5cdFx0XHQnYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cyc6ICcwcHgnLFxuXHRcdFx0J2N1cnNvcic6ICdhdXRvJyxcblx0XHRcdCdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogJzAlIDAlJyxcblx0XHRcdCdiYWNrZ3JvdW5kLXNpemUnOiAnYXV0bycsXG5cdFx0XHQnZGlyZWN0aW9uJzogJ2x0cicsXG5cdFx0XHQvLyBcIm1hcmdpbi1ib3R0b21cIjogXCIwcHhcIixcblx0XHRcdC8vIFwibWFyZ2luLWxlZnRcIjogXCIwcHhcIixcblx0XHRcdC8vIFwibWFyZ2luLXJpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XHQvLyBcIm1hcmdpbi10b3BcIjogXCIwcHhcIixcblx0XHRcdCdtYXgtaGVpZ2h0JzogJ25vbmUnLFxuXHRcdFx0J21heC13aWR0aCc6ICdub25lJyxcblx0XHRcdCdvcGFjaXR5JzogJzEnLFxuXHRcdFx0Ly8gXCJwYWRkaW5nLWJvdHRvbVwiOiBcIjBweFwiLFxuXHRcdFx0Ly8gXCJwYWRkaW5nLWxlZnRcIjogXCIwcHhcIixcblx0XHRcdC8vIFwicGFkZGluZy1yaWdodFwiOiBcIjBweFwiLFxuXHRcdFx0Ly8gXCJwYWRkaW5nLXRvcFwiOiBcIjBweFwiLFxuXHRcdFx0J3JpZ2h0JzogJ2F1dG8nLFxuXHRcdFx0J3NwZWFrJzogJ25vcm1hbCcsXG5cdFx0XHQndG9wJzogJ2F1dG8nLFxuXHRcdFx0J3RyYW5zaXRpb24tZGVsYXknOiAnMHMnLFxuXHRcdFx0J3RyYW5zaXRpb24tZHVyYXRpb24nOiAnMHMnLFxuXHRcdFx0J3RyYW5zaXRpb24tcHJvcGVydHknOiAnYWxsJyxcblx0XHRcdCd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbic6ICdlYXNlJyxcblx0XHRcdCd2ZXJ0aWNhbC1hbGlnbic6ICdiYXNlbGluZScsXG5cdFx0XHQndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcblx0XHRcdCd3aGl0ZS1zcGFjZSc6ICdub3JtYWwnLFxuXHRcdFx0J3dpZG93cyc6ICcyJyxcblx0XHRcdCd3b3JkLWJyZWFrJzogJ25vcm1hbCcsXG5cdFx0XHQnei1pbmRleCc6ICdhdXRvJyxcblx0XHR9O1xuXG5cdFx0dGhpcy5pc0xvYWRlZCA9IGZhbHNlO1xuXHRcdC8vIHNraXAgdGhpcyBub2RlIHR5cGVzXG5cdFx0dGhpcy5yZXN0cmljdGVkTm9kZVR5cGVzID0gWzMsIDhdO1xuXHRcdC8vIHNraXAgaGlkZGVuIG5vZGVzXG5cdFx0dGhpcy5za2lwRGlzcGxheU5vbmUgPSB0cnVlO1xuXHRcdC8vIGZpcmViYXNlIGNvbmZpZyB3aXRoIGRlZmF1bHRzXG5cdFx0dGhpcy5mYkNvbmZpZyA9IGZiQ29uZmlnIHx8IHtcblx0XHRcdGFwaUtleTogJ0FJemFTeUE4NHZhZ19TMFFTTzdqMUVmZjR2WkpFamRMYzZ3UHgwTScsXG5cdFx0XHRhdXRoRG9tYWluOiAnZG9tLXNuYXBzaG90LmZpcmViYXNlYXBwLmNvbScsXG5cdFx0XHRkYXRhYmFzZVVSTDogJ2h0dHBzOi8vZG9tLXNuYXBzaG90LmZpcmViYXNlaW8uY29tJyxcblx0XHRcdHByb2plY3RJZDogJ2RvbS1zbmFwc2hvdCcsXG5cdFx0XHRzdG9yYWdlQnVja2V0OiAnZG9tLXNuYXBzaG90LmFwcHNwb3QuY29tJyxcblx0XHRcdG1lc3NhZ2luZ1NlbmRlcklkOiAnNTc4MDA5MzU0MTcxJ1xuXHRcdH07XG5cdFx0dGhpcy5pbnRGaXJlYmFzZSh0aGlzLmZiQ29uZmlnKTtcblxuXG5cdFx0Ly9odHRwczovL3d3dy53M3NjaG9vbHMuY29tL1RBR3MvcmVmX2V2ZW50YXR0cmlidXRlcy5hc3Bcblx0XHR0aGlzLkVTQ0FQRURfQVRUUklCVVRFUyA9IFtcblx0XHRcdC8vYm9keVxuXHRcdFx0J29uYWZ0ZXJwcmludCcsXG5cdFx0XHQnb25iZWZvcmVwcmludCcsXG5cdFx0XHQnb25iZWZvcmV1bmxvYWQnLFxuXHRcdFx0J29uZXJyb3InLFxuXHRcdFx0J29uaGFzaGNoYW5nZScsXG5cdFx0XHQnb25sb2FkJyxcblx0XHRcdCdvbm1lc3NhZ2UnLFxuXHRcdFx0J29ub2ZmbGluZScsXG5cdFx0XHQnb25vbmxpbmUnLFxuXHRcdFx0J29ucGFnZWhpZGUnLFxuXHRcdFx0J29ucGFnZXNob3cnLFxuXHRcdFx0J29ucG9wc3RhdGUnLFxuXHRcdFx0J29ucmVzaXplJyxcblx0XHRcdCdvbnN0b3JhZ2UnLFxuXHRcdFx0J29udW5sb2FkJyxcblxuXHRcdFx0Ly9mb3Jtc1xuXG5cdFx0XHQnb25ibHVyJyxcblx0XHRcdCdvbmNoYW5nZScsXG5cdFx0XHQnb25jb250ZXh0bWVudScsXG5cdFx0XHQnb25mb2N1cycsXG5cdFx0XHQnb25pbnB1dCcsXG5cdFx0XHQnb25pbnZhbGlkJyxcblx0XHRcdCdvbnJlc2V0Jyxcblx0XHRcdCdvbnNlYXJjaCcsXG5cdFx0XHQnb25zZWxlY3QnLFxuXHRcdFx0J29uc3VibWl0JyxcblxuXHRcdFx0Ly9rZXlib2FyZFxuXG5cdFx0XHQnb25rZXlkb3duJyxcblx0XHRcdCdvbmtleXByZXNzJyxcblx0XHRcdCdvbmtleXVwJyxcblxuXHRcdFx0Ly9tb3VzZVxuXG5cdFx0XHQnb25jbGljaycsXG5cdFx0XHQnb25kYmxjbGljaycsXG5cdFx0XHQnb25tb3VzZWRvd24nLFxuXHRcdFx0J29ubW91c2Vtb3ZlJyxcblx0XHRcdCdvbm1vdXNlb3V0Jyxcblx0XHRcdCdvbm1vdXNlb3ZlcicsXG5cdFx0XHQnb25tb3VzZXVwJyxcblx0XHRcdCdvbm1vdXNld2hlZWwnLFxuXHRcdFx0J29ud2hlZWwnLFxuXG5cdFx0XHQvL0RyYWcgRXZlbnRzXG5cblx0XHRcdCdvbmRyYWcnLFxuXHRcdFx0J29uZHJhZ2VuZCcsXG5cdFx0XHQnb25kcmFnZW50ZXInLFxuXHRcdFx0J29uZHJhZ2xlYXZlJyxcblx0XHRcdCdvbmRyYWdvdmVyJyxcblx0XHRcdCdvbmRyYWdzdGFydCcsXG5cdFx0XHQnb25kcm9wJyxcblx0XHRcdCdvbnNjcm9sbCcsXG5cblx0XHRcdC8vQ2xpcGJvYXJkIEV2ZW50c1xuXG5cdFx0XHQnb25jb3B5Jyxcblx0XHRcdCdvbmN1dCcsXG5cdFx0XHQnb25wYXN0ZScsXG5cblx0XHRcdC8vIE1lZGlhIEV2ZW50c1xuXG5cblx0XHRcdCdvbmFib3J0Jyxcblx0XHRcdCdvbmNhbnBsYXknLFxuXHRcdFx0J29uY2FucGxheXRocm91Z2gnLFxuXHRcdFx0J29uY3VlY2hhbmdlJyxcblx0XHRcdCdvbmR1cmF0aW9uY2hhbmdlJyxcblx0XHRcdCdvbmVtcHRpZWQnLFxuXHRcdFx0J29uZW5kZWQnLFxuXHRcdFx0J29uZXJyb3InLFxuXHRcdFx0J29ubG9hZGVkZGF0YScsXG5cdFx0XHQnb25sb2FkZWRtZXRhZGF0YScsXG5cdFx0XHQnb25sb2Fkc3RhcnQnLFxuXHRcdFx0J29ucGF1c2UnLFxuXHRcdFx0J29ucGxheScsXG5cdFx0XHQnb25wbGF5aW5nJyxcblx0XHRcdCdvbnByb2dyZXNzJyxcblx0XHRcdCdvbnJhdGVjaGFuZ2UnLFxuXHRcdFx0J29uc2Vla2VkJyxcblx0XHRcdCdvbnNlZWtpbmcnLFxuXHRcdFx0J29uc3RhbGxlZCcsXG5cdFx0XHQnb25zdXNwZW5kJyxcblx0XHRcdCdvbnRpbWV1cGRhdGUnLFxuXHRcdFx0J29udm9sdW1lY2hhbmdlJyxcblx0XHRcdCdvbndhaXRpbmcnLFxuXG5cdFx0XHQvLyBNaXNjIEV2ZW50c1xuXG5cdFx0XHQnb250b2dnbGUnXG5cdFx0XTtcblx0fVxuXHRfbm9ybWFsaXplQXR0cmlidXRlTmFtZShhdHRyTmFtZSkge1xuXHRcdHJldHVybiBTdHJpbmcoYXR0ck5hbWUpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXHR9XG5cdF9pc1NhZmVBdHRyaWJ1dGUoYXR0ck5hbWUpIHtcblx0XHRpZiAodGhpcy5fVVNFX1NBRkVfQVRUUklCVVRFUyBcblx0XHRcdCYmIFxuXHRcdFx0dGhpcy5FU0NBUEVEX0FUVFJJQlVURVMuaW5jbHVkZXModGhpcy5fbm9ybWFsaXplQXR0cmlidXRlTmFtZShhdHRyTmFtZSkpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiAhYXR0ck5hbWUuaW5jbHVkZXMoJ25nLScpICYmICFhdHRyTmFtZS5pbmNsdWRlcygnXCInKSAmJiAhYXR0ck5hbWUuaW5jbHVkZXMoJ3N0eWxlJyk7XG5cdH1cblx0X2V4dHJhY3ROb2RlQXR0cmlidXRlcyhub2RlKSB7XG5cdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChub2RlLmF0dHJpYnV0ZXMsIGVsID0+IHtcblx0XHRcdHJldHVybiBbZWwubm9kZU5hbWUsIHRoaXMuX3BhdGNoQXR0cmlidXRlKGVsLm5vZGVOYW1lLCBlbC5ub2RlVmFsdWUpXTtcblx0XHR9KS5maWx0ZXIoKFthdHRyTmFtZV0pPT57XG5cdFx0XHRyZXR1cm4gdGhpcy5faXNTYWZlQXR0cmlidXRlKGF0dHJOYW1lKTtcblx0XHR9KTtcblx0fVxuXHRyZXNldFRhcmdldCgpIHtcblx0XHR0aGlzLnNldEJvZHlOb2RlKGZhbHNlKTtcblx0XHR0aGlzLnNldEh0bWxOb2RlKGZhbHNlKTtcblx0XHR0aGlzLnNldEhlYWROb2RlKGZhbHNlKTtcblx0fVxuXHQvLy8gc2V0IHJvb3ROb2RlIGZvciByZXN0b3Jpbmdcblx0cmVzdG9yZVRvKG5vZGUpIHtcblx0XHR0aGlzLnNldEJvZHlOb2RlKG5vZGUpO1xuXHR9XG5cdF9jb2xsZWN0TWV0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dXNlckFnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50LFxuXHRcdFx0aG9zdG5hbWU6IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSxcblx0XHRcdHByb3RvY29sOiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wsXG5cdFx0XHR1cmw6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuXHRcdFx0c2NyZWVuV2lkdGg6IHdpbmRvdy5zY3JlZW4ud2lkdGgsXG5cdFx0XHRzY3JlZW5IZWlnaHQ6IHdpbmRvdy5zY3JlZW4uaGVpZ2h0LFxuXHRcdFx0c2NyZWVuQXZhaWxXaWR0aDogd2luZG93LnNjcmVlbi5hdmFpbFdpZHRoLFxuXHRcdFx0c2NyZWVuQXZhaWxIZWlnaHQ6IHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQsXG5cdFx0XHR0aW1lc3RhbXA6IERhdGUubm93KClcblx0XHR9O1xuXHR9XG5cdF9wYXRjaEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuXHRcdGlmIChbJ3NyYycsICdocmVmJ10uaW5jbHVkZXMobmFtZSkpIHtcblx0XHRcdGNvbnN0IGZpcnN0Q2hhciA9IFN0cmluZyh2YWx1ZSkuY2hhckF0KDApO1xuXHRcdFx0Y29uc3Qgc2Vjb25kQ2hhciA9IFN0cmluZyh2YWx1ZSkuY2hhckF0KDEpO1xuXHRcdFx0Y29uc3QgaGFzSGFzaCA9IHNlY29uZENoYXIgPT09ICcjJyB8fCBmaXJzdENoYXIgPT09ICcjJztcblx0XHRcdGNvbnN0IGhhc1R3b1NsYXNoZXMgPSAoZmlyc3RDaGFyID09PSBzZWNvbmRDaGFyICYmIGZpcnN0Q2hhciA9PT0gJy8nKTtcblx0XHRcdGNvbnN0IGhhc1BhdGggPSBzZWNvbmRDaGFyID09PSAnLyc7XG5cdFx0XHRpZiAoIWhhc1R3b1NsYXNoZXMgJiYgKGhhc1BhdGggfHwgaGFzSGFzaCkpIHtcblx0XHRcdFx0aWYgKHRoaXMubWV0YS5ob3N0bmFtZSAmJiB0aGlzLm1ldGEucHJvdG9jb2wpIHtcblx0XHRcdFx0XHRyZXR1cm4gYCR7dGhpcy5tZXRhLnByb3RvY29sfS8vJHt0aGlzLm1ldGEuaG9zdG5hbWV9JHt2YWx1ZX1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXHRfaXNTVkcoZWxlbWVudCkge1xuXHRcdC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9TVkcvcHJvcGlkeC5odG1sXG5cdFx0Y29uc3QgaXNTVkdOb2RlID0gZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc3ZnJztcblx0XHRpZiAoaXNTVkdOb2RlKSB7XG5cdFx0XHRlbGVtZW50LmRhdGFzZXQuc3ZnID0gdHJ1ZTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSB8fCAhZWxlbWVudC5wYXJlbnROb2RlLmRhdGFzZXQpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0bGV0IHN2Z1Jlc3VsdCA9IGVsZW1lbnQucGFyZW50Tm9kZS5kYXRhc2V0LnN2Zztcblx0XHRpZiAoc3ZnUmVzdWx0ICYmIGVsZW1lbnQuZGF0YXNldCkge1xuXHRcdFx0ZWxlbWVudC5kYXRhc2V0LnN2ZyA9IHRydWU7XG5cdFx0fVxuXHRcdGlmIChzdmdSZXN1bHQgPT09ICd0cnVlJykge1xuXHRcdFx0c3ZnUmVzdWx0ID0gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIHN2Z1Jlc3VsdCB8fCBmYWxzZTtcblx0fVxuXHRfZ2V0Qm9keUF0dHJpYnV0ZXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2V4dHJhY3ROb2RlQXR0cmlidXRlcyh0aGlzLl9nZXRCb2R5Tm9kZSgpKTtcblx0fVxuXHRfZ2V0Qm9keVN0eWxlKCkge1xuXHRcdHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZU9iamVjdCh0aGlzLl9nZXRTdHlsZUZvck5vZGUodGhpcy5fZ2V0Qm9keU5vZGUoKSkpO1xuXHR9XG5cdF9nZXRIVE1MU3R5bGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2dldEJvZHlQYXJlbnRTdHlsZSgpO1xuXHR9XG5cdF9nZXRCb2R5UGFyZW50U3R5bGUoKSB7XG5cdFx0Y29uc3QgYm9keSA9IHRoaXMuX2dldEJvZHlOb2RlKCk7XG5cdFx0bGV0IHN0eWxlTm9kZSA9IFtdO1xuXHRcdGlmIChib2R5LnBhcmVudE5vZGUpIHtcblx0XHRcdHN0eWxlTm9kZSA9IHRoaXMuX2dldFN0eWxlRm9yTm9kZShib2R5LnBhcmVudE5vZGUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fY3JlYXRlU3R5bGVPYmplY3Qoc3R5bGVOb2RlKTtcblx0XHQvLyBnZXQgb3B0aW1hbCBzdHlsZSwgc2F2ZSBhcyBzcGVjaWFsIG5vZGVcblx0fVxuXHRhZGRNZXRhKGtleU9yT2JqZWN0LCB2YWx1ZSwgdGFyZ2V0ID0gdGhpcykge1xuXHRcdGlmICh0eXBlb2Yga2V5T3JPYmplY3QgPT09ICdvYmplY3QnKSB7XG5cdFx0XHR0YXJnZXQubWV0YSA9IE9iamVjdC5hc3NpZ24odGFyZ2V0Lm1ldGEsIGtleU9yT2JqZWN0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0Lm1ldGFba2V5T3JPYmplY3RdID0gdmFsdWU7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGdldE1ldGEoKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMubWV0YSk7XG5cdH1cblx0Y2xlYXJNZXRhKCkge1xuXHRcdHRoaXMubWV0YSA9IHt9O1xuXHR9XG5cdF9hZGRGYlNjcmlwdChyZXNvbHZlLCByZWplY3QsIGNvbmZpZykge1xuXHRcdGNvbnN0IGhlYWQgPSB0aGlzLl9nZXREb2N1bWVudCgpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG5cdFx0Y29uc3Qgc2NyaXB0ID0gdGhpcy5fZ2V0RG9jdW1lbnQoKS5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuXHRcdHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG5cdFx0XHRmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XG5cdFx0XHR0aGlzLmZpcmViYXNlID0gZmlyZWJhc2U7XG5cdFx0XHR0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcblx0XHRcdHJlc29sdmUodGhpcyk7XG5cdFx0fTtcblx0XHRzY3JpcHQub25lcnJvciA9IChlKSA9PiB7XG5cdFx0XHRyZWplY3QoZSk7XG5cdFx0fTtcblx0XHRzY3JpcHQuc3JjID0gJ2h0dHBzOi8vd3d3LmdzdGF0aWMuY29tL2ZpcmViYXNlanMvNC4yLjAvZmlyZWJhc2UuanMnO1xuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblx0fVxuXHRpbnRGaXJlYmFzZShmYkNvbmZpZykge1xuXHRcdHRoaXMuX2xvYWRlZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGlmICh0eXBlb2Ygd2luZG93LmZpcmViYXNlICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHR0aGlzLmZpcmViYXNlID0gZmlyZWJhc2U7XG5cdFx0XHRcdHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xuXHRcdFx0XHRyZXR1cm4gcmVzb2x2ZSh0aGlzKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2FkZEZiU2NyaXB0KHJlc29sdmUsIHJlamVjdCwgZmJDb25maWcpO1xuXHRcdH0pO1xuXHRcdHJldHVybiB0aGlzLl9sb2FkZWQ7XG5cdH1cblx0bG9hZGVkKCkge1xuXHRcdHJldHVybiB0aGlzLl9sb2FkZWQ7XG5cdH1cblx0X2dldEhlYWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2hlYWQgfHwgdGhpcy5fZ2V0Qm9keU5vZGUoKS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKSB8fCB0aGlzLl9nZXREb2N1bWVudCgpLmhlYWQgfHwgdGhpcy5fZ2V0RG9jdW1lbnQoKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuXHR9XG5cdF9jbGVhbkhlYWROb2RlRnJvbVN0eWxlcygpIHtcblx0XHRjb25zdCBoZWFkID0gdGhpcy5fZ2V0SGVhZCgpO1xuXHRcdGxldCBzdHlsZXNUb1JlbW92ZSA9IGhlYWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3N0eWxlJyk7XG5cdFx0aWYgKHN0eWxlc1RvUmVtb3ZlLmxlbmd0aCkge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdHlsZXNUb1JlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRoZWFkLnJlbW92ZUNoaWxkKHN0eWxlc1RvUmVtb3ZlW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0bGV0IHN0eWxlTGlua3NUb1JlbW92ZSA9IGhlYWQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7XG5cdFx0aWYgKHN0eWxlTGlua3NUb1JlbW92ZS5sZW5ndGgpIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3R5bGVMaW5rc1RvUmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGhlYWQucmVtb3ZlQ2hpbGQoc3R5bGVMaW5rc1RvUmVtb3ZlW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0X2FkZFN0eWxlTm9kZShjc3MsIHRhcmdldCA9IGZhbHNlKSB7XG5cdFx0Y29uc3Qgc3R5bGUgPSB0aGlzLl9nZXREb2N1bWVudCgpLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cdFx0Y29uc3QgaGVhZCA9ICh0YXJnZXQgfHwgdGhpcy5fZ2V0SGVhZCgpKTtcblx0XHRzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcblxuXHRcdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKHRoaXMuX2dldERvY3VtZW50KCkuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdFx0fVxuXG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH1cblx0X2dldERvbU5vZGVGcm9tQXJndW1lbnQoc2VsZWN0b3IpIHtcblx0XHRsZXQgdGFyZ2V0ID0gdHlwZW9mIHNlbGVjdG9yID09PSAnb2JqZWN0JyA/IHNlbGVjdG9yIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cdFx0cmV0dXJuIHRhcmdldDtcblx0fVxuXHRfY2xlYW5Eb21Ob2RlKHRhcmdldCkge1xuXHRcdHdoaWxlICh0YXJnZXQuZmlyc3RDaGlsZCkge1xuXHRcdFx0dGFyZ2V0LnJlbW92ZUNoaWxkKHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9XG5cdH1cblx0dGFrZVNuYXBzaG90KHNlbGVjdG9yKSB7XG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlU25hcHNob3QodGhpcy5fZ2V0RG9tTm9kZUZyb21Bcmd1bWVudChzZWxlY3RvcikpO1xuXHR9XG5cdHJlbmRlclNuYXBzaG90KHNlbGVjdG9yLCBzbmFwc2hvdCwgcmV3cml0ZURvbUNvbnRlbnQgPSB0cnVlKSB7XG5cdFx0bGV0IHRhcmdldCA9IHRoaXMuX2dldERvbU5vZGVGcm9tQXJndW1lbnQoc2VsZWN0b3IpO1xuXHRcdGlmIChyZXdyaXRlRG9tQ29udGVudCkge1xuXHRcdFx0dGhpcy5fY2xlYW5Eb21Ob2RlKHRhcmdldCk7XG5cdFx0fVxuXHRcdHRoaXMucmVzdG9yZVdvcmxkRnJvbShzbmFwc2hvdCwgdGFyZ2V0KTtcblx0fVxuXHRzaG93U25hcHNob3QoaWQsIHNlbGVjdG9yID0gZmFsc2UpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRTbmFwc2hvdEJ5SWQoaWQpLnRoZW4oKHNuYXBzaG90KT0+e1xuXHRcdFx0dGhpcy5kZXN0cm95V29ybGQoKTtcblx0XHRcdGxldCB0YXJnZXROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgfHwgdGhpcy5fZ2V0Qm9keU5vZGUoKTtcblx0XHRcdGxldCBzb3VyY2UgPSB0aGlzLnNldFN0YXRlKHRoaXMsIHNuYXBzaG90KTtcblx0XHRcdHRoaXMucmVzdG9yZVdvcmxkRnJvbShzb3VyY2UsIHRhcmdldE5vZGUpO1xuXHRcdH0pO1xuXHR9XG5cdHJlc3RvcmVTbmFwc2hvdChpZCkge1xuXHRcdHJldHVybiB0aGlzLl9zaG93U25hcHNob3QoaWQpO1xuXHR9XG5cdF9mYkFkZFRvU25hcHNob3RMaXN0KGlkLCBkYXRhKSB7XG5cdFx0dGhpcy5maXJlYmFzZS5kYXRhYmFzZSgpXG5cdFx0XHQucmVmKGBzbmFwc2hvdHMtbGlzdC8ke2lkfWApXG5cdFx0XHQuc2V0KGRhdGEpO1xuXHR9XG5cdF9mYlNldFNuYXBzaG90KGlkLCBzbmFwc2hvdCkge1xuXHRcdHRoaXMuZmlyZWJhc2UuZGF0YWJhc2UoKVxuXHRcdFx0LnJlZihgc25hcHNob3RzLyR7aWR9YClcblx0XHRcdC5zZXQoc25hcHNob3QpO1xuXHR9XG5cdF9mYkdldFNuYXBzaG90KGlkKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHR0aGlzLmZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdzbmFwc2hvdHMvJyArIGlkKVxuXHRcdFx0XHQub25jZSgndmFsdWUnKVxuXHRcdFx0XHQudGhlbigoc25hcHNob3QpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZShzbmFwc2hvdC52YWwoKSk7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cdGdldFNuYXBzaG90QnlJZChpZCkge1xuXHRcdHJldHVybiB0aGlzLl9mYkdldFNuYXBzaG90KGlkKTtcblx0fVxuXHRfc2hvd1NuYXBzaG90KGlkID0gJzE1MDIzMTIwODk0NzknLCByb290RWxlbWVudCkge1xuXHRcdHJldHVybiB0aGlzLmdldFNuYXBzaG90QnlJZChpZCkudGhlbigoc25hcHNob3QpPT57XG5cdFx0XHR0aGlzLmRlc3Ryb3lXb3JsZCgpO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh0aGlzLCBzbmFwc2hvdCk7XG5cdFx0XHR0aGlzLnJlc3RvcmVXb3JsZChyb290RWxlbWVudCwgdGhpcyk7XG5cdFx0fSk7XG5cdH1cblx0X2NsZWFyU3RhdGUodGFyZ2V0KSB7XG5cdFx0dGFyZ2V0Lml0ZW1zID0gW107XG5cdFx0dGFyZ2V0LkNBQ0hFX0tFWVMgPSBbXTtcblx0XHR0YXJnZXQuQk9EWV9TVFlMRSA9IFtdO1xuXHRcdHRhcmdldC5IVE1MX1NUWUxFID0gW107XG5cdFx0dGFyZ2V0LkNBQ0hFX1ZBTFVFUyA9IFtdO1xuXHRcdHRhcmdldC5CT0RZX0FUVFJJQlVURVMgPSBbXTtcblx0fVxuXHRfZ2V0QXJyYXlDb3B5KGVsZW1lbnQpIHtcblx0XHRpZiAodHlwZW9mIGVsZW1lbnQgIT09ICdvYmplY3QnIHx8IGVsZW1lbnQgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cdFx0cmV0dXJuIGVsZW1lbnQuc2xpY2UoMCk7XG5cdH1cblx0X2Nsb25lT2JqZWN0KG9iaikge1xuXHRcdGlmICh0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJyB8fCBvYmogPT09IG51bGwpIHtcblx0XHRcdHJldHVybiB7fTtcblx0XHR9XG5cdFx0cmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG5cdH1cblx0X2NvcHlXb3JsZChyb290Tm9kZSA9IGZhbHNlLCBzb3VyY2UpIHtcblx0XHRyZXR1cm4gdGhpcy5fY29weVdvcmxkVG8ocm9vdE5vZGUsIHNvdXJjZSk7XG5cdH1cblx0X2NvcHlXb3JsZFRvKHJvb3ROb2RlLCBzb3VyY2UpIHtcblx0XHRjb25zdCBwc2V1ZG9TZWxlY3RvcnNTdHlsZXNBcnJheSA9IFtdO1xuXHRcdGNvbnN0IHJlaW5kZXhNYXAgPSB7fTtcblx0XHRsZXQgaXRlbXMgPSBzb3VyY2UuaXRlbXM7XG5cdFx0XG5cdFx0c291cmNlLm1ldGEgPSB0aGlzLl9jb2xsZWN0TWV0YSgpO1xuXG5cdFx0bGV0IHRhcmdldCA9IHJvb3ROb2RlIHx8IHRoaXMuX2dldEJvZHlOb2RlKCk7XG5cblx0XHRsZXQgaXNCb2R5Tm9kZVJvb3QgPSB0YXJnZXQgPT09IHRoaXMuX2dldEJvZHlOb2RlKCk7XG5cblx0XHRpZiAoaXNCb2R5Tm9kZVJvb3QpIHtcblx0XHRcdHNvdXJjZS5CT0RZX0FUVFJJQlVURVMgPSB0aGlzLl9nZXRCb2R5QXR0cmlidXRlcygpO1xuXHRcdFx0c291cmNlLkhUTUxfU1RZTEUgPSB0aGlzLl9zdHlsZU9iamVjdFRvT3B0aW1hbFN0eWxlQXJyYXkodGhpcy5fZ2V0SFRNTFN0eWxlKCksIHVuZGVmaW5lZCwgc291cmNlKTtcblx0XHRcdHNvdXJjZS5CT0RZX1NUWUxFID0gdGhpcy5fc3R5bGVPYmplY3RUb09wdGltYWxTdHlsZUFycmF5KHRoaXMuX2dldEJvZHlTdHlsZSgpLCB1bmRlZmluZWQsIHNvdXJjZSk7XG5cdFx0fVxuXG5cdFx0bGV0IGNhcHR1cmVkTm9kZXMgPSB0aGlzLl9nZXRBbGxEb21Ob2Rlcyh0YXJnZXQpO1xuXG5cdFx0aWYgKCFpc0JvZHlOb2RlUm9vdCkge1xuXHRcdFx0Y2FwdHVyZWROb2Rlcy51bnNoaWZ0KHJvb3ROb2RlKTtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNhcHR1cmVkTm9kZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBpdGVtID0gY2FwdHVyZWROb2Rlc1tpXTtcblx0XHRcdGlmIChpdGVtLmRhdGFzZXQpIHtcblx0XHRcdFx0aXRlbS5kYXRhc2V0LmluZGV4ID0gaTtcblx0XHRcdH1cblx0XHRcdGxldCBub2RlU3R5bGUgPSB0aGlzLl9nZXRTdHlsZUZvck5vZGUoaXRlbSk7XG5cdFx0XHRpZiAodGhpcy5fc2hvdWxkVGFrZUVsZW1lbnQoaXRlbSwgbm9kZVN0eWxlKSkge1xuXHRcdFx0XHRpZiAoaXRlbS5kYXRhc2V0ICYmIHRoaXMuX1VTRV9QU0VVRE9TRUxFQ1RPUlMpIHtcblx0XHRcdFx0XHRsZXQgcHNldWRvc2VsZWNvclN0eWxlcyA9IHRoaXMuX2dldFN0eWxlc0ZvclBzZXVkb1NlbGVjdG9ycyhpdGVtLCBzb3VyY2UpO1xuXHRcdFx0XHRcdGlmIChwc2V1ZG9zZWxlY29yU3R5bGVzKSB7XG5cdFx0XHRcdFx0XHRwc2V1ZG9zZWxlY29yU3R5bGVzLmluZGV4ID0gaTtcblx0XHRcdFx0XHRcdHBzZXVkb1NlbGVjdG9yc1N0eWxlc0FycmF5LnB1c2gocHNldWRvc2VsZWNvclN0eWxlcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGl0ZW1zLnB1c2godGhpcy5fc2VyaWFsaXplTm9kZShub2RlU3R5bGUsIGl0ZW0sIGksIHNvdXJjZSkpO1xuXHRcdFx0XHRyZWluZGV4TWFwW2ldID0gaXRlbXMubGVuZ3RoIC0gMTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodGhpcy5fVVNFX1BTRVVET1NFTEVDVE9SUykge1xuXHRcdFx0dGhpcy5fZm9yRWFjaChwc2V1ZG9TZWxlY3RvcnNTdHlsZXNBcnJheSwgKGVsKSA9PiB7XG5cdFx0XHRcdGxldCBpdGVtID0gaXRlbXNbcmVpbmRleE1hcFtlbC5pbmRleF1dO1xuXHRcdFx0XHRpdGVtLnBzZXVkb3NlbGVjdG9ycyA9IGVsO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX1VTRV9WQUNVVU0pIHtcblx0XHRcdHNvdXJjZS5pdGVtcyA9IHRoaXMuX3ZhY3V1bShpdGVtcyk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLl9VU0VfU1RZTEVTX0NMRUFOVVApIHtcblx0XHRcdHRoaXMuX2NsZWFudXBTdHlsZXMoc291cmNlKTtcblx0XHR9XG5cdH1cblx0X2dldEh0bWxOb2RlKCkge1xuXHRcdHJldHVybiB0aGlzLl9odG1sIHx8IHRoaXMuX2dldEJvZHlOb2RlKCkucGFyZW50Tm9kZSB8fCB0aGlzLl9nZXRCb2R5Tm9kZSgpO1xuXHR9XG5cdHJlc3RvcmVXb3JsZCh0YXJnZXQgPSBmYWxzZSwgc291cmNlKSB7XG5cdFx0XG5cdFx0aWYgKCF0YXJnZXQpIHtcblx0XHRcdC8vdGhpcy5fc2V0SFRNTFN0eWxlKHNvdXJjZSk7XG5cdFx0XHR0aGlzLl9zZXRCb2R5QXR0cmlidXRlcyhzb3VyY2UpO1xuXHRcdFx0Ly90aGlzLl9zZXRCb2R5U3R5bGUoc291cmNlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0b3JlV29ybGRGcm9tKHNvdXJjZSwgdGFyZ2V0KTtcblx0fVxuXHRfZm9yRWFjaChhcnJheSwgYWN0aW9uKSB7XG5cdFx0Y29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRcdGFjdGlvbihhcnJheVtpXSwgaSk7XG5cdFx0fVxuXHR9XG5cdHJlc3RvcmVXb3JsZEZyb20oc291cmNlLCB0YXJnZXQgPSBmYWxzZSkge1xuXHRcdGNvbnN0IHN0eWxlc1RvVXBwZW5kID0gW107XG5cdFx0Y29uc3QgZnJhZ21lbnQgPSB0aGlzLl9nZXREb2N1bWVudCgpLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuXHRcdGxldCBub2Rlc0luZGV4ID0ge307XG5cdFx0dGhpcy5fZm9yRWFjaChzb3VyY2UuaXRlbXMsIChlbCkgPT4ge1xuXHRcdFx0bGV0IG5vZGUgPSB0aGlzLl9jcmVhdGVOb2RlKGVsLCBzdHlsZXNUb1VwcGVuZCwgc291cmNlKTtcblx0XHRcdG5vZGVzSW5kZXhbZWwuaW5kZXhdID0gbm9kZTtcblx0XHRcdHRoaXMuX2luc2VydE5vZGUobm9kZSwgZWwsIGZyYWdtZW50LCBub2Rlc0luZGV4KTtcblx0XHR9KTtcblxuXHRcdG5vZGVzSW5kZXggPSB7fTtcblx0XHRzdHlsZXNUb1VwcGVuZC5wdXNoKGBodG1sIHsgJHt0aGlzLl9nZXROb2RlU3R5bGVUZXh0KHNvdXJjZS5IVE1MX1NUWUxFLCBzb3VyY2UpfSB9YCk7XG5cdFx0c3R5bGVzVG9VcHBlbmQucHVzaChgYm9keSB7ICR7dGhpcy5fZ2V0Tm9kZVN0eWxlVGV4dChzb3VyY2UuQk9EWV9TVFlMRSwgc291cmNlKX0gfWApO1xuXHRcdFxuXHRcdHRoaXMuX2FkZFN0eWxlTm9kZShzdHlsZXNUb1VwcGVuZC5yZXZlcnNlKCkuam9pbignXFxuJykpO1xuXHRcdGxldCByb290Tm9kZSA9ICh0YXJnZXQgfHwgdGhpcy5fZ2V0Qm9keU5vZGUoKSk7XG5cdFx0cm9vdE5vZGUuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdF9kZXN0cm95Qm9keUF0dHJpYnV0ZXMoKSB7XG5cdFx0Y29uc3QgYXR0cmlidXRlcyA9IHRoaXMuX2dldEJvZHlBdHRyaWJ1dGVzKCk7XG5cdFx0Y29uc3QgYm9keSA9IHRoaXMuX2dldEJvZHlOb2RlKCk7XG5cdFx0dGhpcy5fZm9yRWFjaChhdHRyaWJ1dGVzLCAoW25hbWVdKSA9PiB7XG5cdFx0XHRib2R5LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkZXN0cm95V29ybGQoKSB7XG5cdFx0dGhpcy5fZGVzdHJveUJvZHlBdHRyaWJ1dGVzKCk7XG5cdFx0dGhpcy5fZ2V0Qm9keU5vZGUoKS5pbm5lckhUTUwgPSAnJztcblx0XHR0aGlzLl9jbGVhbkhlYWROb2RlRnJvbVN0eWxlcygpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdF9jcmVhdGVTdHlsZU9iamVjdChzdHlsZU5vZGUpIHtcblx0XHRjb25zdCBzdHlsZU9iamVjdCA9IHt9O1xuXHRcdGlmICghc3R5bGVOb2RlLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIHN0eWxlT2JqZWN0O1xuXHRcdH1cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0eWxlTm9kZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgcHJvcGVydHlOYW1lID0gc3R5bGVOb2RlW2ldO1xuXHRcdFx0c3R5bGVPYmplY3RbcHJvcGVydHlOYW1lXSA9IHN0eWxlTm9kZS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5TmFtZSk7XG5cdFx0fVxuXHRcdHJldHVybiBzdHlsZU9iamVjdDtcblx0fVxuXHRfaXNEZWZhdWx0U3R5bGUobmFtZSwgdmFsdWUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0Ly8gcmV0dXJuIHRoaXMuQk9EWV9TVFlMRVtuYW1lXSA9PT0gdmFsdWUgfHwgZmFsc2U7XG5cdH1cblx0X3ZhY3V1bShpdGVtcykge1xuXHRcdGNvbnN0IGl0ZW1zVG9SZW1vdmUgPSBbXTtcblx0XHRjb25zdCBsYXN0SXRlbUluZGV4ID0gaXRlbXMubGVuZ3RoIC0gMTtcblx0XHR0aGlzLl9mb3JFYWNoKGl0ZW1zLCAoaXRlbSwgaW5kZXgpID0+IHtcblx0XHRcdGlmIChsYXN0SXRlbUluZGV4ICE9PSBpbmRleCAmJiBpdGVtLm5vZGVOYW1lID09PSAnI3RleHQnKSB7XG5cdFx0XHRcdGxldCBuZXh0Tm9kZSA9IGl0ZW1zW2luZGV4ICsgMV07XG5cdFx0XHRcdGxldCBoYXNTYW1lUGFyZW50ID0gbmV4dE5vZGUucGFyZW50ID09PSBpdGVtLnBhcmVudDtcblx0XHRcdFx0bGV0IGhhc1NhbWVOb2RlTmFtZSA9IG5leHROb2RlLm5vZGVOYW1lID09PSBpdGVtLm5vZGVOYW1lO1xuXHRcdFx0XHRpZiAoaGFzU2FtZVBhcmVudCAmJiBoYXNTYW1lTm9kZU5hbWUpIHtcblx0XHRcdFx0XHRuZXh0Tm9kZS50ZXh0Q29udGVudCA9IGAke2l0ZW0udGV4dENvbnRlbnR9JHtuZXh0Tm9kZS50ZXh0Q29udGVudH1gO1xuXHRcdFx0XHRcdGl0ZW1zVG9SZW1vdmUucHVzaChpbmRleCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHRyZXR1cm4gaXRlbXMuZmlsdGVyKChlbCwgaW5kZXgpID0+ICFpdGVtc1RvUmVtb3ZlLmluY2x1ZGVzKGluZGV4KSk7XG5cdH1cblx0X2NsZWFudXBTdHlsZXMoc291cmNlKSB7XG5cdFx0Y29uc3Qgc3R5bGVzVG9SZW1vdmUgPSBbXTtcblx0XHRjb25zdCBzdHlsZWRJdGVtcyA9IHNvdXJjZS5pdGVtcy5maWx0ZXIoKGUpID0+IGUuc3R5bGVzLmxlbmd0aCk7XG5cdFx0Ly8gY29sbGVjdCBicm93c2VyIGRlZmF1bHQgc3R5bGVzXG5cdFx0dGhpcy5fZm9yRWFjaChzb3VyY2UuSFRNTF9TVFlMRSwgKHN0eWxlKSA9PiB7XG5cdFx0XHRpZiAoc3R5bGVkSXRlbXMuZXZlcnkoKGVsKSA9PiBlbC5zdHlsZXMuaW5jbHVkZXMoc3R5bGUpKSkge1xuXHRcdFx0XHRpZiAoc291cmNlLkJPRFlfU1RZTEUuaW5jbHVkZXMoc3R5bGUpKSB7XG5cdFx0XHRcdFx0c3R5bGVzVG9SZW1vdmUucHVzaChzdHlsZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHQvLyBleGNsdWRlIGNvbGxlY3RlZCBzdHVsZXNcblx0XHRzb3VyY2UuSFRNTF9TVFlMRSA9IHNvdXJjZS5IVE1MX1NUWUxFLmZpbHRlcigoZWwpID0+ICFzdHlsZXNUb1JlbW92ZS5pbmNsdWRlcyhlbCkpO1xuXHRcdHNvdXJjZS5CT0RZX1NUWUxFID0gc291cmNlLkJPRFlfU1RZTEUuZmlsdGVyKChlbCkgPT4gIXN0eWxlc1RvUmVtb3ZlLmluY2x1ZGVzKGVsKSk7XG5cdFx0dGhpcy5fZm9yRWFjaChzb3VyY2UuaXRlbXMsIChpdGVtKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5faXNOb3RFbXB0eUFycmF5KGl0ZW0uc3R5bGVzKSkge1xuXHRcdFx0XHRpdGVtLnN0eWxlcyA9IGl0ZW0uc3R5bGVzLmZpbHRlcigoZWwpID0+ICFzdHlsZXNUb1JlbW92ZS5pbmNsdWRlcyhlbCkpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHNvdXJjZS5CT0RZX1NUWUxFID0gc291cmNlLkJPRFlfU1RZTEUuZmlsdGVyKGVsID0+ICFzdHlsZXNUb1JlbW92ZS5pbmNsdWRlcyhlbCkpO1xuXHR9XG5cdF9nZXROYW1lRm9yTm9kZShub2RlTmFtZSkge1xuXHRcdHJldHVybiB0aGlzLk5PREVfTkFNRVNfVE9fUkVQTEFDRVtub2RlTmFtZV0gfHwgbm9kZU5hbWU7XG5cdH1cblx0X2dldFBhcmVudEZvck5vZGUobm9kZSkge1xuXHRcdGxldCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGUgPyBub2RlLnBhcmVudE5vZGUuZGF0YXNldC5pbmRleCA6IDA7XG5cdFx0aWYgKCF0aGlzLmlzTm90VW5kZWZpbmVkKHBhcmVudCkpIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0XHRyZXR1cm4gcGFyc2VJbnQocGFyZW50KTtcblx0fVxuXHRfZ2V0Tm9kZVRleHRDb250ZW50KG5vZGUpIHtcblx0XHRyZXR1cm4gbm9kZS5jaGlsZHJlbiA/ICcnIDogbm9kZS5kYXRhO1xuXHR9XG5cdF9hcnJheVRvT2JqZWN0KGFyciA9IFtdKSB7XG5cdFx0cmV0dXJuIGFyci5yZWR1Y2UoKHJlc3VsdCwgW2tleSwgdmFsdWVdKT0+e1xuXHRcdFx0cmVzdWx0W2tleV0gPSB2YWx1ZTtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSwge30pO1xuXHR9XG5cdGdldFNuYXBzaG90c0RpZmYoczEsIHMyKSB7XG5cdFx0bGV0IGZpcnN0U3RhdGUgPSB0aGlzLnNldFN0YXRlKHt9LCBzMSk7XG5cdFx0bGV0IHNlY29uZFN0YXRlID0gdGhpcy5zZXRTdGF0ZSh7fSwgczIpO1xuXG5cdFx0bGV0IGZpcnN0U3R5bGVzID0gZmlyc3RTdGF0ZS5pdGVtcy5maWx0ZXIoZT0+ZS5zdHlsZXMpLm1hcChlbD0+e1xuXHRcdFx0bGV0IGl0ZW0gPSAgdGhpcy5fc2V0Tm9kZVN0eWxlRnJvbVN0eWxlQXJyYXkoZWwuc3R5bGVzLCB7XG5cdFx0XHRcdHN0eWxlOiB7fVxuXHRcdFx0fSwgZmlyc3RTdGF0ZSk7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZWwsIGl0ZW0pO1xuXHRcdH0pO1xuXG5cdFx0bGV0IHNlY29uZFN0eWxlcyA9IHNlY29uZFN0YXRlLml0ZW1zLmZpbHRlcihlPT5lLnN0eWxlcykubWFwKGVsPT57XG5cdFx0XHRsZXQgaXRlbSA9ICB0aGlzLl9zZXROb2RlU3R5bGVGcm9tU3R5bGVBcnJheShlbC5zdHlsZXMsIHtcblx0XHRcdFx0c3R5bGU6IHt9XG5cdFx0XHR9LCBzZWNvbmRTdGF0ZSk7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZWwsIGl0ZW0pO1xuXHRcdH0pO1xuXG5cdFx0XG5cblx0XHRsZXQgZGlmZkFycmF5ID0gbmV3IEFycmF5KGZpcnN0U3RhdGUuaXRlbXMubGVuZ3RoKS5maWxsKG51bGwpO1xuXHRcdFxuXHRcdHJldHVybiBkaWZmQXJyYXkubWFwKChfLCBpbmRleCk9Pntcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGZpcnN0Tm9kZTogZmlyc3RTdHlsZXNbaW5kZXhdLFxuXHRcdFx0XHRzZWNvbmROb2RlOiBzZWNvbmRTdHlsZXNbaW5kZXhdLFxuXHRcdFx0XHRzdHlsZXNEaWZmOiB0aGlzLl9nZXRBbGxLZXlzRGlmZihmaXJzdFN0eWxlc1tpbmRleF0uc3R5bGUsIHNlY29uZFN0eWxlc1tpbmRleF0uc3R5bGUpLFxuXHRcdFx0XHRhdHRyaWJ1dGVzRGlmZjogdGhpcy5fZ2V0QWxsS2V5c0RpZmYodGhpcy5fYXJyYXlUb09iamVjdChmaXJzdFN0eWxlc1tpbmRleF0uYXR0cmlidXRlcyksIHRoaXMuX2FycmF5VG9PYmplY3Qoc2Vjb25kU3R5bGVzW2luZGV4XS5hdHRyaWJ1dGVzKSlcblx0XHRcdH07XG5cdFx0fSk7XG5cdH1cblx0X3NlcmlhbGl6ZU5vZGUoc3R5bGVOb2RlLCBub2RlLCBpbmRleCwgc291cmNlKSB7XG5cdFx0bGV0IHBheWxvYWQgPSAgdGhpcy5fZm9ybWF0U3R5bGUoc3R5bGVOb2RlLCBub2RlLCBpbmRleCwgc291cmNlKTtcblx0XHRyZXR1cm4gcGF5bG9hZDtcblx0fVxuXHRfZm9ybWF0U3R5bGUoc3R5bGVOb2RlLCBub2RlLCBpbmRleCwgc291cmNlKSB7XG5cdFx0Y29uc3QgcmVzdWx0ID0ge1xuXHRcdFx0c3R5bGVzOiBbXSxcblx0XHRcdG5vZGVOYW1lOiB0aGlzLl9nZXROYW1lRm9yTm9kZShub2RlLm5vZGVOYW1lKSxcblx0XHRcdGluZGV4LFxuXHRcdFx0bm9kZVR5cGU6IG5vZGUubm9kZVR5cGUsXG5cdFx0XHRwYXJlbnQ6IHRoaXMuX2dldFBhcmVudEZvck5vZGUobm9kZSksXG5cdFx0XHRpc1NWRzogdGhpcy5faXNTVkcobm9kZSksXG5cdFx0XHR0ZXh0Q29udGVudDogdGhpcy5fZ2V0Tm9kZVRleHRDb250ZW50KG5vZGUpXG5cdFx0fTtcblx0XHRjb25zdCBzdHlsZSA9IHRoaXMuX2NyZWF0ZVN0eWxlT2JqZWN0KHN0eWxlTm9kZSk7XG5cblx0XHQvLyBpZiAocmVzdWx0LmlzU1ZHICYmIHJlc3VsdC5ub2RlTmFtZSAhPT0gJ3N2ZycpIHtcblx0XHRcdC8vIHJlc3VsdC5zdHlsZXMgPSBbXTtcblx0XHQvLyB9IGVsc2Uge1xuXHRcdFx0cmVzdWx0LnN0eWxlcyA9IHRoaXMuX3N0eWxlT2JqZWN0VG9PcHRpbWFsU3R5bGVBcnJheShzdHlsZSwgcmVzdWx0LnBhcmVudCwgc291cmNlKTtcblx0XHQvLyB9XG5cblx0XHRpZiAoIXRoaXMucmVzdHJpY3RlZE5vZGVUeXBlcy5pbmNsdWRlcyhub2RlLm5vZGVUeXBlKSkge1xuXHRcdFx0cmVzdWx0LmF0dHJpYnV0ZXMgPSB0aGlzLl9leHRyYWN0Tm9kZUF0dHJpYnV0ZXMobm9kZSk7XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblx0X2dldEFsbERvbU5vZGVzKG5vZGUpIHtcblx0XHRsZXQgbGlzdE9mTm9kZXMgPSBbXTtcblx0XHRsZXQgd2FsayA9IHRoaXMuX2dldERvY3VtZW50KCkuY3JlYXRlVHJlZVdhbGtlcihub2RlLCBOb2RlRmlsdGVyLlNIT1dfQUxMLCAobm9kZSk9Pntcblx0XHRcdHJldHVybiAhdGhpcy5OT0RFX05BTUVTX1RPX0lHTk9SRS5pbmNsdWRlcyhub2RlLm5vZGVOYW1lKTtcblx0XHR9KTtcblx0XHRsZXQgbiA9IG51bGw7XG5cdFx0d2hpbGUgKG4gPSB3YWxrLm5leHROb2RlKCkpIHtcblx0XHRcdGxpc3RPZk5vZGVzLnB1c2gobik7XG5cdFx0fVxuXHRcdHJldHVybiBsaXN0T2ZOb2Rlcztcblx0fVxuXHRfZmJTYXZlU25hcHNob3QoaWQsIHN0YXRlKSB7XG5cdFx0dGhpcy5fZmJTZXRTbmFwc2hvdChpZCwgc3RhdGUpO1xuXHRcdHRoaXMuX2ZiQWRkVG9TbmFwc2hvdExpc3QoaWQsIHsgdmlzaWJsZTogdHJ1ZSwgbWV0YTogc3RhdGUubWV0YSB9KTtcblx0fVxuXHRjcmVhdGVTbmFwc2hvdChyb290Tm9kZSA9IGZhbHNlKSB7XG5cdFx0bGV0IHNvdXJjZSA9IHt9O1xuXHRcdHRoaXMuX2NsZWFyU3RhdGUoc291cmNlKTtcblx0XHR0aGlzLl9jb3B5V29ybGQocm9vdE5vZGUsIHNvdXJjZSk7XG5cdFx0dGhpcy5hZGRNZXRhKCdEYXRlJywgRGF0ZS5ub3coKSwgc291cmNlKTtcblx0XHR0aGlzLmFkZE1ldGEoJ1VSTCcsIHdpbmRvdy5sb2NhdGlvbi5ocmVmLCBzb3VyY2UpO1xuXHRcdHRoaXMuYWRkTWV0YSgnQnJvd3NlcicsIHdpbmRvdy5uYXZpZ2F0b3IubmFhZGRNZXRhbWUsIHNvdXJjZSk7XG5cdFx0bGV0IHN0YXRlID0gdGhpcy5fZ2V0U3RhdGUoc291cmNlKTtcblx0XHRjb25zb2xlLmxvZygnc3RhdGUnLCBzdGF0ZSk7XG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG5cdHNhdmVTbmFwc2hvdChjdXN0b21JZCA9IGZhbHNlLCBzdGF0ZSkge1xuXHRcdGNvbnN0IGlkID0gY3VzdG9tSWQgfHwgRGF0ZS5ub3coKTtcblx0XHRpZiAoIXN0YXRlKSB7XG5cdFx0XHRzdGF0ZSA9IHRoaXMuY3JlYXRlU25hcHNob3QoKTtcblx0XHR9XG5cdFx0dGhpcy5fZmJTYXZlU25hcHNob3QoaWQsIHN0YXRlKTtcblx0XHRjb25zb2xlLmxvZyhgc25hcHNob3QgSUQgaXM6ICR7aWR9YCk7XG5cdFx0cmV0dXJuIGlkO1xuXHR9XG5cdF9zZXRCb2R5QXR0cmlidXRlcyhzb3VyY2UpIHtcblx0XHRjb25zdCBhdHRyaWJ1dGVzID0gc291cmNlLkJPRFlfQVRUUklCVVRFUztcblx0XHRjb25zdCBib2R5ID0gdGhpcy5fZ2V0Qm9keU5vZGUoKTtcblx0XHR0aGlzLl9mb3JFYWNoKGF0dHJpYnV0ZXMsIChbbmFtZSwgdmFsdWVdKSA9PiB7XG5cdFx0XHRib2R5LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0c2V0Qm9keU5vZGUobm9kZSkge1xuXHRcdHRoaXMuX2JvZHkgPSBub2RlO1xuXHR9XG5cdF9zZXRCb2R5U3R5bGUoc291cmNlKSB7XG5cdFx0dGhpcy5fc2V0Tm9kZVN0eWxlRnJvbVN0eWxlQXJyYXkoc291cmNlLkJPRFlfU1RZTEUsIHRoaXMuX2dldEJvZHlOb2RlKCksIHNvdXJjZSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0c2V0SGVhZE5vZGUobm9kZSkge1xuXHRcdHRoaXMuX2hlYWQgPSBub2RlO1xuXHR9XG5cdF9zZXRIVE1MU3R5bGUoc291cmNlKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IHRoaXMuX2dldEh0bWxOb2RlKCk7XG5cdFx0aWYgKG5vZGUpIHtcblx0XHRcdHRoaXMuX3NldE5vZGVTdHlsZUZyb21TdHlsZUFycmF5KHNvdXJjZS5IVE1MX1NUWUxFLCBub2RlLCBzb3VyY2UpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRzZXRIdG1sTm9kZShub2RlKSB7XG5cdFx0dGhpcy5faHRtbCA9IG5vZGU7XG5cdH1cblx0X3NldE5vZGVTdHlsZUZyb21TdHlsZUFycmF5KHN0eWxlcywgbm9kZSwgc291cmNlKSB7XG5cdFx0dGhpcy5fZm9yRWFjaChzdHlsZXMsIChrZXkpID0+IHtcblx0XHRcdGNvbnN0IFtuYW1lLCB2YWx1ZV0gPSB0aGlzLl9nZXRGcm9tT3B0aW1hbFZhbHVlKGtleSwgc291cmNlKTtcblx0XHRcdG5vZGUuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcblx0XHR9KTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXHRzZXRNZXRhKG1ldGEpIHtcblx0XHRpZiAodHlwZW9mIG1ldGEgIT09ICdvYmplY3QnKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnbWV0YSBzaG91bGQgYmUgYW4gb2JqZWN0Jyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMubWV0YSA9IE9iamVjdC5hc3NpZ24oe30sIG1ldGEpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdHNldFN0YXRlKHRhcmdldCA9IHRoaXMsIHN0YXRlKSB7XG5cdFx0dGFyZ2V0Lm1ldGEgPSB0aGlzLl9jbG9uZU9iamVjdChzdGF0ZS5tZXRhKSB8fCB0aGlzLm1ldGEgfHwge307XG5cdFx0dGFyZ2V0Lml0ZW1zID0gdGhpcy5fZ2V0QXJyYXlDb3B5KHN0YXRlLml0ZW1zKSB8fCBbXTtcblx0XHR0YXJnZXQuQ0FDSEVfS0VZUyA9IHRoaXMuX2dldEFycmF5Q29weShzdGF0ZS5DQUNIRV9LRVlTKSB8fCBbXTtcblx0XHR0YXJnZXQuQ0FDSEVfVkFMVUVTID0gdGhpcy5fZ2V0QXJyYXlDb3B5KHN0YXRlLkNBQ0hFX1ZBTFVFUykgfHwgW107XG5cdFx0dGFyZ2V0LkJPRFlfU1RZTEUgPSB0aGlzLl9nZXRBcnJheUNvcHkoc3RhdGUuQk9EWV9TVFlMRSkgfHwgW107XG5cdFx0dGFyZ2V0LkhUTUxfU1RZTEUgPSB0aGlzLl9nZXRBcnJheUNvcHkoc3RhdGUuSFRNTF9TVFlMRSkgfHwgW107XG5cdFx0dGFyZ2V0LkJPRFlfQVRUUklCVVRFUyA9IHRoaXMuX2dldEFycmF5Q29weShzdGF0ZS5CT0RZX0FUVFJJQlVURVMpIHx8IFtdO1xuXHRcdHJldHVybiB0YXJnZXQ7XG5cdH1cblx0c2V0U3R5bGVGcm9tT2JqZWN0KG5vZGUsIHN0eWxlT2JqZWN0KSB7XG5cdFx0dGhpcy5fZm9yRWFjaChPYmplY3Qua2V5cyhzdHlsZU9iamVjdCksIChrZXkpID0+IHtcblx0XHRcdG5vZGUuc3R5bGVba2V5XSA9IHN0eWxlT2JqZWN0W2tleV07XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0Ly8vIHNldCByb290Tm9kZSBmb3IgY2FwdHVyaW5nXG5cdHNldFRhcmdldChub2RlKSB7XG5cdFx0dGhpcy5zZXRCb2R5Tm9kZShub2RlKTtcblx0XHR0aGlzLnNldEh0bWxOb2RlKG5vZGUucGFyZW50Tm9kZSk7XG5cdFx0dGhpcy5zZXRIZWFkTm9kZShub2RlLnBhcmVudE5vZGUpO1xuXHR9XG5cdF9zdHlsZU9iamVjdFRvT3B0aW1hbFN0eWxlQXJyYXkoc3R5bGVPYmplY3QgPSB7fSwgcGFyZW50SW5kZXgsIHNvdXJjZSkge1xuXHRcdGxldCBwYXJlbnRTdHlsZSA9IFtdO1xuXHRcdGlmICh0aGlzLmlzTm90VW5kZWZpbmVkKHBhcmVudEluZGV4KSkge1xuXHRcdFx0cGFyZW50U3R5bGUgPSB0aGlzLmdldFBhcmVudFN0eWxlQnlJbmRleChwYXJlbnRJbmRleCwgc291cmNlKTtcblx0XHR9XG5cdFx0Y29uc3Qgc3R5bGVzID0gW107XG5cdFx0dGhpcy5fZm9yRWFjaChPYmplY3Qua2V5cyhzdHlsZU9iamVjdCksIGVsID0+IHtcblx0XHRcdGxldCBzdHlsZUtleSA9IHRoaXMuZ2V0T3B0aW1hbFZhbHVlKGVsLCBzdHlsZU9iamVjdFtlbF0sIHNvdXJjZSk7XG5cdFx0XHRpZiAoc3R5bGVLZXkgJiYgISh0aGlzLklOSEVSSVQuaW5jbHVkZXMoZWwpICYmIHBhcmVudFN0eWxlLmluY2x1ZGVzKHN0eWxlS2V5KSkpIHtcblx0XHRcdFx0c3R5bGVzLnB1c2goc3R5bGVLZXkpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHJldHVybiBzdHlsZXM7XG5cdH1cblx0c2tpcFN0eWxlKG5hbWUsIHZhbHVlKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2lzRGVmYXVsdFN0eWxlKG5hbWUsIHZhbHVlKTtcblx0fVxuXHRfc2hvdWxkVGFrZUVsZW1lbnQobm9kZSwgbm9kZVN0eWxlKSB7XG5cblx0XHRpZiAodGhpcy5faXNTVkcobm9kZSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLk5PREVfTkFNRVNfVE9fSUdOT1JFLmluY2x1ZGVzKG5vZGUubm9kZU5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKG5vZGUucGFyZW50Tm9kZSAmJiB0aGlzLk5PREVfTkFNRVNfVE9fSUdOT1JFLmluY2x1ZGVzKG5vZGUucGFyZW50Tm9kZS5ub2RlTmFtZSkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAobm9kZS5wYXJlbnROb2RlICYmIG5vZGUucGFyZW50Tm9kZS5kYXRhc2V0Lmlnbm9yZWQpIHtcblx0XHRcdGlmIChub2RlLmRhdGFzZXQpIHtcblx0XHRcdFx0bm9kZS5kYXRhc2V0Lmlnbm9yZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5yZXN0cmljdGVkTm9kZVR5cGVzLmluY2x1ZGVzKG5vZGUubm9kZVR5cGUpKSB7XG5cdFx0XHRpZiAodGhpcy5za2lwRGlzcGxheU5vbmUgJiYgbm9kZS5zdHlsZSAmJiBub2RlU3R5bGUubGVuZ3RoKSB7XG5cdFx0XHRcdGlmIChub2RlU3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdFx0bm9kZS5kYXRhc2V0Lmlnbm9yZWQgPSB0cnVlO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdGlzTm90VW5kZWZpbmVkKGVsKSB7XG5cdFx0cmV0dXJuIGVsICE9PSB2b2lkICgwKTtcblx0fVxuXHRfaXNOb3RFbXB0eUFycmF5KGFycikge1xuXHRcdHJldHVybiBhcnIgJiYgYXJyLmxlbmd0aDtcblx0fVxuXHRfaGFzVGV4dENvbnRlbnQobm9kZSA9IHsgdGV4dENvbnRlbnQ6ICcnIH0pIHtcblx0XHRyZXR1cm4gdHlwZW9mIG5vZGUudGV4dENvbnRlbnQgPT09ICdzdHJpbmcnICYmIG5vZGUudGV4dENvbnRlbnQubGVuZ3RoO1xuXHR9XG5cdF9oYXNOb2RlSW5DYWNoZShub2RlTmFtZSkge1xuXHRcdHJldHVybiAobm9kZU5hbWUgaW4gdGhpcy5ub2RlQ2FjaGUpO1xuXHR9XG5cdF9hZGROb2RlVG9DYWNoZShub2RlTmFtZSkge1xuXHRcdHRoaXMubm9kZUNhY2hlW25vZGVOYW1lXSA9IHRoaXMuX2dldERvY3VtZW50KCkuY3JlYXRlRWxlbWVudChub2RlTmFtZSk7XG5cdH1cblx0X2dldFRleHROb2RlKHRleHRDb250ZW50KSB7XG5cdFx0cmV0dXJuIHRoaXMuX2dldERvY3VtZW50KCkuY3JlYXRlVGV4dE5vZGUodGV4dENvbnRlbnQpO1xuXHR9XG5cdF9nZXRTVkdOb2RlKG5vZGVOYW1lKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2dldERvY3VtZW50KCkuY3JlYXRlRWxlbWVudE5TKHRoaXMuX05BTUVTUEFDRVMuU1ZHLCBub2RlTmFtZSk7XG5cdH1cblx0X2FkZFRleHRDb250ZW50KG5vZGUsIHBhcmFtcykge1xuXHRcdGlmICh0aGlzLl9oYXNUZXh0Q29udGVudChwYXJhbXMpKSB7XG5cdFx0XHRub2RlLnRleHRDb250ZW50ID0gcGFyYW1zLnRleHRDb250ZW50O1xuXHRcdH1cblx0fVxuXHRfY3JlYXRlTm9kZShwYXJhbXMgPSB7XG5cdFx0bm9kZVR5cGU6ICczJyxcblx0XHR0ZXh0Q29udGVudDogJ25vb3AnLFxuXHRcdGlzU1ZHOiBmYWxzZSxcblx0XHRub2RlTmFtZTogJ0RJVidcblx0fSwgc3R5bGVzLCBzb3VyY2UpIHtcblxuXHRcdGxldCBub2RlID0gbnVsbDtcblxuXHRcdGNvbnN0IHsgbm9kZU5hbWUsIHRleHRDb250ZW50LCBub2RlVHlwZSwgaXNTVkcgfSA9IHBhcmFtcztcblxuXHRcdGlmICh0aGlzLnJlc3RyaWN0ZWROb2RlVHlwZXMuaW5jbHVkZXMobm9kZVR5cGUpKSB7XG5cdFx0XHRub2RlID0gdGhpcy5fZ2V0VGV4dE5vZGUodGV4dENvbnRlbnQpO1xuXHRcdH0gZWxzZSBpZiAoaXNTVkcpIHtcblx0XHRcdG5vZGUgPSB0aGlzLl9nZXRTVkdOb2RlKG5vZGVOYW1lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bm9kZSA9IHRoaXMuX2dldE5vZGVCeU5hbWUobm9kZU5hbWUpO1xuXHRcdFx0dGhpcy5fYWRkVGV4dENvbnRlbnQobm9kZSwgcGFyYW1zKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5faXNOb3RFbXB0eUFycmF5KHBhcmFtcy5hdHRyaWJ1dGVzKSkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dGhpcy5fZm9yRWFjaChwYXJhbXMuYXR0cmlidXRlcywgKFtuYW1lLCB2YWx1ZV0pID0+IHtcblx0XHRcdFx0XHRpZiAobmFtZSkge1xuXHRcdFx0XHRcdFx0aWYgKGlzU1ZHKSB7XG5cdFx0XHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlTlModGhpcy5fTkFNRVNQQUNFUy5TVkcsIG5hbWUsIHZhbHVlKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLl9pc1NhZmVBdHRyaWJ1dGUobmFtZSkpIHtcblx0XHRcdFx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlLCBub2RlLCBuYW1lKTtcblx0XHRcdH1cblx0XHR9XG5cblxuXHRcdC8vIF9hZGRTdHlsZU5vZGVcblx0XHRpZiAodGhpcy5faXNOb3RFbXB0eUFycmF5KHBhcmFtcy5zdHlsZXMpKSB7XG5cdFx0XHRpZiAodGhpcy5fVVNFX0lOTElORV9TVFlMRVMpIHtcblx0XHRcdFx0dGhpcy5fc2V0Tm9kZVN0eWxlRnJvbVN0eWxlQXJyYXkocGFyYW1zLnN0eWxlcywgbm9kZSwgc291cmNlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0eWxlcy5wdXNoKHRoaXMuX3N0eWxlVGV4dEZvck5vZGUocGFyYW1zLmluZGV4LCBwYXJhbXMuc3R5bGVzLCAnJywgc291cmNlKSk7XG5cdFx0XHRcdGlmIChwYXJhbXMucHNldWRvc2VsZWN0b3JzKSB7XG5cdFx0XHRcdFx0c3R5bGVzLnB1c2godGhpcy5fc3R5bGVUZXh0Rm9yTm9kZShwYXJhbXMuaW5kZXgsIHBhcmFtcy5wc2V1ZG9zZWxlY3RvcnMuYmVmb3JlLCAnOmJlZm9yZScsIHNvdXJjZSkpO1xuXHRcdFx0XHRcdHN0eWxlcy5wdXNoKHRoaXMuX3N0eWxlVGV4dEZvck5vZGUocGFyYW1zLmluZGV4LCBwYXJhbXMucHNldWRvc2VsZWN0b3JzLmFmdGVyLCAnOmFmdGVyJywgc291cmNlKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAobm9kZS5kYXRhc2V0KSB7XG5cdFx0XHRub2RlLmRhdGFzZXQucGFyZW50ID0gcGFyYW1zLnBhcmVudDtcblx0XHR9XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblx0X3N0eWxlVGV4dEZvck5vZGUoaW5kZXgsIHN0eWxlcywgcG9zdGZpeCA9ICcnLCBzb3VyY2UpIHtcblx0XHRyZXR1cm4gYFtkYXRhLWluZGV4PVwiJHtpbmRleH1cIl0ke3Bvc3RmaXh9IHsgJHt0aGlzLl9nZXROb2RlU3R5bGVUZXh0KHN0eWxlcywgc291cmNlKX0gfWA7XG5cdH1cblx0X2luc2VydE5vZGUobm9kZSwgb2JqLCBmcmFnbWVudCwgbm9kZXNJbmRleCkge1xuXHRcdGxldCBwYXJlbnRJZCA9IG5vZGUuZGF0YXNldCA/IG5vZGUuZGF0YXNldC5wYXJlbnQgOiBvYmoucGFyZW50O1xuXHRcdGNvbnN0IHNlbGVjdG9yID0gYFtkYXRhLWluZGV4PVwiJHtwYXJlbnRJZH1cIl1gO1xuXHRcdC8vIHx8IG5vZGVzSW5kZXhbcGFyZW50SWRdXG5cdFx0Y29uc3QgcGFyZW50ID0gZnJhZ21lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgfHwgZnJhZ21lbnQ7XG5cdFx0aWYgKG5vZGUgPT09IHBhcmVudCkge1xuXHRcdFx0cmV0dXJuO1x0XG5cdFx0fVxuXHRcdHBhcmVudC5hcHBlbmRDaGlsZChub2RlKTtcblx0fVxuXHRfZ2V0VmFsdWVPckVtcHR5U3RyaW5nKG9iaiwga2V5KSB7XG5cdFx0aWYgKGtleSBpbiBvYmopIHtcblx0XHRcdHJldHVybiBvYmpba2V5XTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0fVxuXHRfZ2V0QWxsS2V5c0RpZmYoZmlyc3QgPSB7fSwgc2Vjb25kID0ge30pIHtcblx0XHRsZXQgZktleXMgPSBPYmplY3Qua2V5cyhmaXJzdCk7XG5cdFx0bGV0IHNLZXlzID0gT2JqZWN0LmtleXMoc2Vjb25kKTtcblx0XHRsZXQgYWxsS2V5cyA9IEFycmF5LmZyb20obmV3IFNldChbXS5jb25jYXQoZktleXMsIHNLZXlzKSkpO1xuXHRcdGxldCBkaWZmcyA9IHt9O1xuXHRcdGFsbEtleXMuZm9yRWFjaCgoa2V5KT0+e1xuXHRcdFx0bGV0IGZWYWx1ZSA9IHRoaXMuX2dldFZhbHVlT3JFbXB0eVN0cmluZyhmaXJzdCwga2V5KTtcblx0XHRcdGxldCBzVmFsdWUgPSB0aGlzLl9nZXRWYWx1ZU9yRW1wdHlTdHJpbmcoc2Vjb25kLCBrZXkpO1xuXHRcdFx0aWYgKGZWYWx1ZSAhPT0gc1ZhbHVlKSB7XG5cdFx0XHRcdGRpZmZzW2tleV0gPSBbZlZhbHVlLCBzVmFsdWVdO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyhkaWZmcykubGVuZ3RoID8gZGlmZnMgOiBmYWxzZSA7XG5cdH1cblx0X2dldEVxdWFsS2V5c0RpZmYoZmlyc3QsIHNlY29uZCkge1xuXHRcdGxldCBkaWZmcyA9IHt9O1xuXHRcdE9iamVjdC5rZXlzKGZpcnN0KS5tYXAoa2V5ID0+IHtcblx0XHRcdGlmIChmaXJzdFtrZXldICE9PSBzZWNvbmRba2V5XSkge1xuXHRcdFx0XHRkaWZmc1trZXldID0gW2ZpcnN0W2tleV0sIHNlY29uZFtrZXldXTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXMoZGlmZnMpLmxlbmd0aCA/IGRpZmZzIDogZmFsc2U7XG5cdH1cblx0X2dldFN0eWxlc0ZvclBzZXVkb1NlbGVjdG9ycyhub2RlLCBzb3VyY2UpIHtcblx0XHRjb25zdCBiZWZvcmUgPSB0aGlzLl9jcmVhdGVTdHlsZU9iamVjdCh0aGlzLl9nZXRTdHlsZUZvck5vZGUobm9kZSwgJzpiZWZvcmUnKSk7XG5cdFx0Y29uc3QgYWZ0ZXIgPSB0aGlzLl9jcmVhdGVTdHlsZU9iamVjdCh0aGlzLl9nZXRTdHlsZUZvck5vZGUobm9kZSwgJzphZnRlcicpKTtcblx0XHRjb25zdCBzdHlsZURpZmYgPSB0aGlzLl9nZXRFcXVhbEtleXNEaWZmKGJlZm9yZSwgYWZ0ZXIpO1xuXHRcdGlmIChzdHlsZURpZmYpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGJlZm9yZTogdGhpcy5fc3R5bGVPYmplY3RUb09wdGltYWxTdHlsZUFycmF5KGJlZm9yZSwgdW5kZWZpbmVkLCBzb3VyY2UpLFxuXHRcdFx0XHRhZnRlcjogdGhpcy5fc3R5bGVPYmplY3RUb09wdGltYWxTdHlsZUFycmF5KGFmdGVyLCB1bmRlZmluZWQsIHNvdXJjZSksXG5cdFx0XHRcdGRpZmY6IHN0eWxlRGlmZlxuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRfZ2V0U3R5bGVGb3JOb2RlKGVsZW1lbnQsIHBzZXVkb3NlbGVjb3IgPSBudWxsKSB7XG5cdFx0aWYgKHRoaXMucmVzdHJpY3RlZE5vZGVUeXBlcy5pbmNsdWRlcyhlbGVtZW50Lm5vZGVUeXBlKSkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblx0XHRsZXQgc3R5bGU6IGFueVtdIHwgQ1NTU3R5bGVEZWNsYXJhdGlvbiA9IFtdO1xuXHRcdHRyeSB7XG5cdFx0XHRzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIHBzZXVkb3NlbGVjb3IpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKGUsIGVsZW1lbnQsIGVsZW1lbnQubm9kZVR5cGUpO1xuXHRcdH1cblx0XHRyZXR1cm4gc3R5bGU7XG5cdH1cblx0X2dldEJvZHlOb2RlKCkge1xuXHRcdC8vbGVnYWN5IGhvb2tcblx0XHRpZiAoJ2dldEJvZHlOb2RlJyBpbiB0aGlzKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRCb2R5Tm9kZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fYm9keSB8fCB3aW5kb3cuZG9jdW1lbnQuYm9keTtcblx0fVxuXHRfZ2V0RG9jdW1lbnQoKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50O1xuXHR9XG5cdF9nZXROb2RlU3R5bGVUZXh0KHN0eWxlcywgc291cmNlKSB7XG5cdFx0Y29uc3Qgc3R5bGUgPSBbXTtcblx0XHR0aGlzLl9mb3JFYWNoKHN0eWxlcywgKGtleSkgPT4ge1xuXHRcdFx0Y29uc3QgW25hbWUsIHZhbHVlXSA9IHRoaXMuX2dldEZyb21PcHRpbWFsVmFsdWUoa2V5LCBzb3VyY2UpO1xuXHRcdFx0c3R5bGUucHVzaChgJHtuYW1lfToke3ZhbHVlfWApO1xuXHRcdH0pO1xuXHRcdHJldHVybiBzdHlsZS5qb2luKCc7Jyk7XG5cdH1cblx0X2dldE5vZGVCeU5hbWUobm9kZU5hbWUpIHtcblx0XHRpZiAoIXRoaXMuX2hhc05vZGVJbkNhY2hlKG5vZGVOYW1lKSkge1xuXHRcdFx0dGhpcy5fYWRkTm9kZVRvQ2FjaGUobm9kZU5hbWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fZ2V0Tm9kZUZyb21DYWNoZShub2RlTmFtZSk7XG5cdH1cblx0X2dldE5vZGVGcm9tQ2FjaGUodGFnKSB7XG5cdFx0cmV0dXJuIHRoaXMubm9kZUNhY2hlW3RhZ10uY2xvbmVOb2RlKGZhbHNlKTtcblx0fVxuXHRfZ2V0RnJvbU9wdGltYWxWYWx1ZSh2YWx1ZSwgc291cmNlID0gdGhpcykge1xuXHRcdGNvbnN0IFtrZXlJbmRleCwgdmFsdWVJbmRleF0gPSB2YWx1ZS5zcGxpdCgnLycpO1xuXHRcdHJldHVybiBbc291cmNlLkNBQ0hFX0tFWVNba2V5SW5kZXhdLCBzb3VyY2UuQ0FDSEVfVkFMVUVTW3ZhbHVlSW5kZXhdXTtcblx0fVxuXHRnZXRPcHRpbWFsVmFsdWUoa2V5LCB2YWx1ZSwgc291cmNlKSB7XG5cblx0XHRpZiAodGhpcy5TS0lQX1NUWUxFU1trZXldID09PSB2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGxldCBrZXlJbmRleCA9IHNvdXJjZS5DQUNIRV9LRVlTLmluZGV4T2Yoa2V5KTtcblx0XHRsZXQga2V5VmFsdWUgPSBzb3VyY2UuQ0FDSEVfVkFMVUVTLmluZGV4T2YodmFsdWUpO1xuXG5cdFx0aWYgKGtleUluZGV4ID09PSAtMSkge1xuXHRcdFx0c291cmNlLkNBQ0hFX0tFWVMucHVzaChrZXkpO1xuXHRcdFx0a2V5SW5kZXggPSBzb3VyY2UuQ0FDSEVfS0VZUy5sZW5ndGggLSAxO1xuXHRcdH1cblxuXHRcdGlmIChrZXlWYWx1ZSA9PT0gLTEpIHtcblx0XHRcdHNvdXJjZS5DQUNIRV9WQUxVRVMucHVzaCh2YWx1ZSk7XG5cdFx0XHRrZXlWYWx1ZSA9IHNvdXJjZS5DQUNIRV9WQUxVRVMubGVuZ3RoIC0gMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYCR7a2V5SW5kZXh9LyR7a2V5VmFsdWV9YDtcblx0fVxuXHRfZ2V0U3RhdGUodGFyZ2V0KSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG1ldGE6IHRoaXMuX2Nsb25lT2JqZWN0KHRhcmdldC5tZXRhKSxcblx0XHRcdGl0ZW1zOiB0aGlzLl9nZXRBcnJheUNvcHkodGFyZ2V0Lml0ZW1zKSxcblx0XHRcdEhUTUxfU1RZTEU6IHRoaXMuX2dldEFycmF5Q29weSh0YXJnZXQuSFRNTF9TVFlMRSksXG5cdFx0XHRCT0RZX1NUWUxFOiB0aGlzLl9nZXRBcnJheUNvcHkodGFyZ2V0LkJPRFlfU1RZTEUpLFxuXHRcdFx0Q0FDSEVfS0VZUzogdGhpcy5fZ2V0QXJyYXlDb3B5KHRhcmdldC5DQUNIRV9LRVlTKSxcblx0XHRcdENBQ0hFX1ZBTFVFUzogdGhpcy5fZ2V0QXJyYXlDb3B5KHRhcmdldC5DQUNIRV9WQUxVRVMpLFxuXHRcdFx0Qk9EWV9BVFRSSUJVVEVTOiB0aGlzLl9nZXRBcnJheUNvcHkodGFyZ2V0LkJPRFlfQVRUUklCVVRFUylcblx0XHR9O1xuXHR9XG5cdGdldFBhcmVudFN0eWxlQnlJbmRleChpbmRleCwgc291cmNlKSB7XG5cdFx0aWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHtcblx0XHRcdHJldHVybiBzb3VyY2UuQk9EWV9TVFlMRSB8fCBbXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleDsgaSsrKSB7XG5cdFx0XHRcdGlmIChzb3VyY2UuaXRlbXNbaV0gJiYgc291cmNlLml0ZW1zW2ldLmluZGV4ID09PSBpbmRleCkge1xuXHRcdFx0XHRcdHJldHVybiBzb3VyY2UuaXRlbXNbaV0uc3R5bGUgfHwgW107XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cdH1cbn1cblxuaWYgKHR5cGVvZiBBVVRPU1RBUlQgPT09ICdib29sZWFuJyAmJiBBVVRPU1RBUlQgPT09IHRydWUpIHtcblx0bmV3IERvbVNuYXBzaG90KCk7XG59IGVsc2Uge1xuXHR3aW5kb3cuc25hcHNob3RlciA9IG5ldyBEb21TbmFwc2hvdCgpO1xufVxuIl19