class DomSnapshot {

	/*

	*/
	constructor(config = {
		inlineStyles: false, // use inline styles on restore
		vacuum: false, // use node-vacuum (squashing) 
		stylesCleanup: true,
		capturePseudoselectors: true,
		state: {
			BODY_STYLE: [],
			CACHE_KEYS: [],
			CACHE_VALUES: [],
			HTML_STYLE: [],
			items: [],
			meta: {	// used to patch image links on snapshot restore (may be replaced to base64 inline)
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
			"align-items": "normal",
			"align-self": "normal",
			"clip-path": "none",
			"flex-basis": "auto",
			"flex-grow": "0",
			"flex-shrink": "1",
			"justify-content": "normal",
			"user-select": "text",
			"border-bottom-left-radius": "0px",
			"border-bottom-right-radius": "0px",
			"border-top-right-radius": "0px",
			"border-top-left-radius": "0px",
			"cursor": "auto",
			"background-position": "0% 0%",
			"background-size": "auto",
			"direction": "ltr",
			// "margin-bottom": "0px",
			// "margin-left": "0px",
			// "margin-right": "0px",
			// "margin-top": "0px",
			"max-height": "none",
			"max-width": "none",
			"opacity": "1",
			// "padding-bottom": "0px",
			// "padding-left": "0px",
			// "padding-right": "0px",
			// "padding-top": "0px",
			"right": "auto",
			"speak": "normal",
			"top": "auto",
			"transition-delay": "0s",
			"transition-duration": "0s",
			"transition-property": "all",
			"transition-timing-function": "ease",
			"vertical-align": "baseline",
			"visibility": "visible",
			"white-space": "normal",
			"widows": "2",
			"word-break": "normal",
			"z-index": "auto",
		};

		this.isLoaded = false;
		// skip this node types
		this.restrictedNodeTypes = [3, 8];
		// skip hidden nodes
		this.skipDisplayNone = true;
		// firebase config with defaults
		this.fbConfig = fbConfig || {
			apiKey: "AIzaSyA84vag_S0QSO7j1Eff4vZJEjdLc6wPx0M",
			authDomain: "dom-snapshot.firebaseapp.com",
			databaseURL: "https://dom-snapshot.firebaseio.com",
			projectId: "dom-snapshot",
			storageBucket: "dom-snapshot.appspot.com",
			messagingSenderId: "578009354171"
		};
		this.intFirebase(this.fbConfig);
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
		const svgResult = element.parentNode.dataset.svg;
		if (svgResult && element.dataset) {
			element.dataset.svg = true;
		}
		return svgResult || false;
	}
	_getBodyAttributes() {
		return Array.prototype.map.call(this._getBodyNode().attributes, el => {
			return [el.nodeName, el.nodeValue];
		});
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
	addMeta(keyOrObject, value) {
		if (typeof keyOrObject === 'object') {
			this.meta = Object.assign(this.meta, keyOrObject);
		} else {
			this.meta[keyOrObject] = value;
		}
		return this;
	}
	getMeta(meta) {
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
		} else {
			style.appendChild(this._getDocument().createTextNode(css));
		}

		head.appendChild(style);
	}
	createSnapshot() {
		return this.saveSnapshot();
	}
	restoreSnapshot(id) {
		return this._showSnapshot(id);
	}
	_showSnapshot(id = '1502312089479') {
		return this.firebase.database().ref('snapshots/' + id)
			.once('value')
			.then((snapshot) => {
				this.setState(this, snapshot.val());
				this.destroyWorld();
				this.restoreWorld();
				return snapshot.val();
			});
	}
	_clearState() {
		this.items = [];
		this.CACHE_KEYS = [];
		this.BODY_STYLE = [];
		this.HTML_STYLE = [];
		this.CACHE_VALUES = [];
		this.BODY_ATTRIBUTES = [];
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
	_copyWorld(rootNode = false) {
		return this._copyWorldTo(rootNode, this.items);
	}
	_copyWorldTo(rootNode, items) {
		const all = [];
		const pseudoSelectorsStylesArray = [];
		const reindexMap = {};

		this.meta = this._collectMeta();

		let target = rootNode || this._getBodyNode();

		if (target === this._getBodyNode()) {
			this.BODY_ATTRIBUTES = this._getBodyAttributes();
			this.HTML_STYLE = this._styleObjectToOptimalStyleArray(this._getHTMLStyle());
			this.BODY_STYLE = this._styleObjectToOptimalStyleArray(this._getBodyStyle());
		}

		let capturedNodes = this._getAllDomNodes(target);

		for (let i = 0; i < capturedNodes.length; i++) {
			let item = capturedNodes[i];
			if (item.dataset) {
				item.dataset.index = i;
			}
			let nodeStyle = this._getStyleForNode(item);
			if (this._shouldTakeElement(item, nodeStyle)) {
				if (item.dataset && this._USE_PSEUDOSELECTORS) {
					let pseudoselecorStyles = this._getStylesForPseudoSelectors(item);
					if (pseudoselecorStyles) {
						pseudoselecorStyles.index = i;
						pseudoSelectorsStylesArray.push(pseudoselecorStyles);
					}
				}
				items.push(this._formatStyle(nodeStyle, item, i));
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
			this.items = this._vacuum(items);
		}
		if (this._USE_STYLES_CLEANUP) {
			this._cleanupStyles();
		}
	}
	_getHtmlNode() {
		return this._html || this._getBodyNode().parentNode || this._getBodyNode();
	}
	restoreWorld(target = false) {
		
		if (!target) {
			//this._setHTMLStyle();
			this._setBodyAttributes();
			//this._setBodyStyle();
		}

		let source  = this;
		return this.restoreWorldFrom(this.items, target, source);
	}
	_forEach(array, action) {
		const length = array.length;
		for (let i = 0; i < length; i++) {
			action(array[i], i);
		}
	}
	restoreWorldFrom(items, target = false, source) {
		const stylesToUppend = [];
		const fragment = this._getDocument().createDocumentFragment();

		this._forEach(items, (el) => {
			this._insertNode(this._createNode(el, stylesToUppend), el, fragment);
		})

		stylesToUppend.push(`html { ${this._getNodeStyleText(source.HTML_STYLE)} }`);
		stylesToUppend.push(`body { ${this._getNodeStyleText(source.BODY_STYLE)} }`);
		
		this._addStyleNode(stylesToUppend.reverse().join("\n"));
		(target || this._getBodyNode()).appendChild(fragment);
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
	_cleanupStyles() {
		const stylesToRemove = [];
		const styledItems = this.items.filter((e) => e.styles.length);
		// collect browser default styles
		this._forEach(this.HTML_STYLE, (style) => {
			if (styledItems.every((el) => el.styles.includes(style))) {
				if (this.BODY_STYLE.includes(style)) {
					stylesToRemove.push(style);
				}
			}
		});
		// exclude collected stules
		this.HTML_STYLE = this.HTML_STYLE.filter((el) => !stylesToRemove.includes(el));
		this.BODY_STYLE = this.BODY_STYLE.filter((el) => !stylesToRemove.includes(el));
		this._forEach(this.items, (item) => {
			if (this._isNotEmptyArray(item.styles)) {
				item.styles = item.styles.filter((el) => !stylesToRemove.includes(el));
			}
		});
		this.BODY_STYLE = this.BODY_STYLE.filter(el => !stylesToRemove.includes(el));
	}
	_getNameForNode(nodeName) {
		return this.NODE_NAMES_TO_REPLACE[nodeName] || nodeName;
	}
	_getParentForNode(node) {
		let parent = node.parentNode ? node.parentNode.dataset.index : 0;
		if (!this.isNotUndefined(parent)) {
			return 0;
		}
		return parent;
	}
	_getNodeTextContent(node) {
		return node.children ? "" : node.data;
	}
	getSnapshotsDiff(s1, s2) {
		let firstState = this.setState({}, s1);
		let secondState = this.setState({}, s2);

		let firstStyles = firstState.items.filter(e=>e.styles).map(el=>{
			let item =  this._setNodeStyleFromStyleArray(el.styles, {});
			return Object.assign({}, el, item);
		});

		let secondStyles = secondState.items.filter(e=>e.styles).map(el=>{
			let item =  this._setNodeStyleFromStyleArray(el.styles, {});
			return Object.assign({}, el, item);
		});


		let diffArray = [];

		firstStyles.forEach((item, index)=>{
			diffArray.push(this._getEqualKeysDiff(item, secondStyles[index])); 
		});
		
		return diffArray.map((diff, index)=>{
			return {
				firstState: firstStyles[index],
				secondState: secondStyles[index],
				diff: diff
			}
		});
	}
	_formatStyle(styleNode, node, index) {
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

		if (result.isSVG && result.nodeName !== 'svg') {
			result.styles = [];
		} else {
			result.styles = this._styleObjectToOptimalStyleArray(style, result.parent);
		}

		if (!this.restrictedNodeTypes.includes(node.nodeType)) {
			result.attributes = Array.prototype.map.call(node.attributes, el => {
				return [el.nodeName, this._patchAttribute(el.nodeName, el.nodeValue)];
			}).filter(([attrName]) => {
				if (result.isSVG) {
					return true;
				}
				return attrName !== 'style';
			});
		}
		return result;
	}
	_getAllDomNodes(node) {
		let listOfNodes = [];
		let walk = this._getDocument().createTreeWalker(node, NodeFilter.SHOW_ALL);
		let n = null;
		while (n = walk.nextNode()) {
			listOfNodes.push(n);
		}
		return listOfNodes;
	}
	saveSnapshot(rootNode = false, customId) {
		const id = customId || Date.now();
		const database = this.firebase.database();
		this._clearState();
		this._copyWorld(rootNode);

		this.addMeta('Date', Date.now());
		this.addMeta('URL', window.location.href);
		this.addMeta('Browser', window.navigator.name);

		let state = this._getState();

		database
			.ref(`snapshots/${id}`)
			.set(this._getState());

		database
			.ref(`snapshots-list/${id}`)
			.set({
				visible: true,
				meta: state.meta
			});
		console.log(`snapshot ID is: ${id}`);
		return id;
	}
	_setBodyAttributes() {
		const attributes = this.BODY_ATTRIBUTES;
		const body = this._getBodyNode();
		this._forEach(attributes, ([name, value]) => {
			body.setAttribute(name, value);
		})
		return this;
	}
	setBodyNode(node) {
		this._body = node;
	}
	_setBodyStyle() {
		this._setNodeStyleFromStyleArray(this.BODY_STYLE, this._getBodyNode());
		return this;
	}
	setHeadNode(node) {
		this._head = node;
	}
	_setHTMLStyle() {
		const node = this._getHtmlNode();
		if (node) {
			this._setNodeStyleFromStyleArray(this.HTML_STYLE, node);
		}
		return this;
	}
	setHtmlNode(node) {
		this._html = node;
	}
	_setNodeStyleFromStyleArray(styles, node) {
		if (!node.style) {
			node.style = [];
		}
		this._forEach(styles, (key) => {
			const [name, value] = this.getFromOptimalValue(key);
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
	_styleObjectToOptimalStyleArray(styleObject = {}, parentIndex) {
		let parentStyle = [];
		if (this.isNotUndefined(parentIndex)) {
			parentStyle = this.getParentStyleByIndex(parentIndex);
		}
		const styles = [];
		this._forEach(Object.keys(styleObject), el => {
			let styleKey = this.getOptimalValue(el, styleObject[el]);
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
		return typeof params.textContent === 'string' && params.textContent.length;
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
		return this._getDocument().createElementNS("http://www.w3.org/2000/svg", nodeName);
	}
	_addTextContent(node, params) {
		if (this._hasTextContent(params)) {
			node.textContent = textContent;
		}
	}
	_createNode(params = {
		nodeType: '3',
		textContent: 'noop',
		isSVG: false,
		nodeName: 'DIV'
	}, styles) {

		let node = null;

		const { nodeName, textContent, nodeType, isSVG } = params;

		if (this.restrictedNodeTypes.includes(nodeType)) {
			node = this._getTextNode(textContent);
		} else if (isSVG) {
			node = this._getSVGNode(nodeName);
		} else {
			node = this._getNodeByName(nodeName);
			this._addTextContent(node, params);
		}

		if (this._isNotEmptyArray(params.attributes)) {
			try {
				this._forEach(params.attributes, ([name, value]) => {
					if (name && name !== '"') {
						node.setAttribute(name, value);
					}
				});
			} catch (e) {
				console.log(e, node, name, value);
			}
		}


		// _addStyleNode
		if (this._isNotEmptyArray(params.styles)) {
			if (this._USE_INLINE_STYLES) {
				this._setNodeStyleFromStyleArray(params.styles, node);
			} else {
				styles.push(this._styleTextForNode(params.index, params.styles));
				if (params.pseudoselectors) {
					styles.push(this._styleTextForNode(params.index, params.pseudoselectors.before, ':before'));
					styles.push(this._styleTextForNode(params.index, params.pseudoselectors.after, ':after'));
				}
			}
		}

		if (node.dataset) {
			node.dataset.parent = params.parent;
		}
		return node;
	}
	_styleTextForNode(index, styles, postfix = '') {
		return `[data-index="${index}"]${postfix} { ${this._getNodeStyleText(styles)} }`;
	}
	_insertNode(node, obj, fragment) {
		const selector = `[data-index="${node.dataset ? node.dataset.parent : obj.parent}"]`;
		const parent = fragment.querySelector(selector) || fragment;
		parent.appendChild(node);
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
	_getStylesForPseudoSelectors(node) {
		const before = this._createStyleObject(this._getStyleForNode(node, ':before'));
		const after = this._createStyleObject(this._getStyleForNode(node, ':after'));
		const styleDiff = this._getEqualKeysDiff(before, after);
		if (styleDiff) {
			return {
				before: this._styleObjectToOptimalStyleArray(before),
				after: this._styleObjectToOptimalStyleArray(after),
				diff: styleDiff
			};
		} else {
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
		} catch (e) {
			console.log(e, element, element.nodeType);
		}
		return style;
	}
	_getBodyNode() {
		return this._body || window.document.body;
	}
	_getDocument() {
		return document;
	}
	_getNodeStyleText(styles) {
		const style = [];
		this._forEach(styles, (key) => {
			const [name, value] = this.getFromOptimalValue(key);
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
	getFromOptimalValue(value) {
		const [keyIndex, valueIndex] = value.split('/');
		return [this.CACHE_KEYS[keyIndex], this.CACHE_VALUES[valueIndex]];
	}
	getOptimalValue(key, value) {

		if (this.SKIP_STYLES[key] === value) {
			return false;
		}

		let keyIndex = this.CACHE_KEYS.indexOf(key);
		let keyValue = this.CACHE_VALUES.indexOf(value);

		if (keyIndex === -1) {
			this.CACHE_KEYS.push(key);
			keyIndex = this.CACHE_KEYS.length - 1;
		}

		if (keyValue === -1) {
			this.CACHE_VALUES.push(value);
			keyValue = this.CACHE_VALUES.length - 1;
		}

		return `${keyIndex}/${keyValue}`;
	}
	_getState() {
		return {
			meta: this._cloneObject(this.meta),
			items: this._getArrayCopy(this.items),
			HTML_STYLE: this._getArrayCopy(this.HTML_STYLE),
			BODY_STYLE: this._getArrayCopy(this.BODY_STYLE),
			CACHE_KEYS: this._getArrayCopy(this.CACHE_KEYS),
			CACHE_VALUES: this._getArrayCopy(this.CACHE_VALUES),
			BODY_ATTRIBUTES: this._getArrayCopy(this.BODY_ATTRIBUTES)
		}
	}
	getParentStyleByIndex(index) {
		if (typeof index !== 'number') {
			return this.BODY_STYLE || [];
		} else {
			for (let i = 0; i < index; i++) {
				if (this.items[i].index === index) {
					return this.items[i].style;
				}
			}
			return [];
		}
	}
}
