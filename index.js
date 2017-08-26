class DomSnapshot {

	constructor(config = {}, fbConfig = false) {
		if (!config.state) {
			config.state = {};
		}
		this.BODY_STYLE = config.state.BODY_STYLE || [];
		this.CACHE_KEYS  = config.state.CACHE_KEYS || [];
		this.CACHE_VALUES = config.state.CACHE_VALUES || [];
		this.BODY_ATTRIBUTES = config.state.CACHE_VALUES || [];
		this.HTML_STYLE = config.state.HTML_STYLE || [];
		this.NODE_NAMES_TO_IGNORE = [
			'NOSCRIPT', 'SCRIPT', 'STYLE', '#comment', '#document'
		];
		this.NODE_NAMES_TO_REPLACE = {
			'IFRAME': 'DIV'
		};
		this.PSEUDOSELECTORS = [
			':after', ':before', ':first-line', ':first-letter', ':selection'
		];
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
			"margin-bottom": "0px",
			"margin-left": "0px",
			"margin-right": "0px",
			"margin-top": "0px",
			"max-height": "none",
			"max-width": "none",
			"opacity": "1",
			"padding-bottom": "0px",
			"padding-left": "0px",
			"padding-right": "0px",
			"padding-top": "0px",
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

		this.items  = config.state.items || [];
		this.meta = config.state.meta || {};
		this.isLoaded = false;
		this.restrictedNodeTypes = [3,8];
		this.skipDisplayNone = true;
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
	collectMeta() {
		return {
			userAgent: navigator.userAgent,
			hostname: window.location.hostname,
			url: window.location.href,
			screenWidth: window.screen.width,
			screenHeight: window.screen.height,
			screenAvailWidth: window.screen.availWidth,
			screenAvailHeight: window.screen.availHeight,
			timestamp: Date.now()
		};
	}
	isSVG(element) {
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
	getBodyAttributes() {
		return Array.prototype.map.call(this.getBodyNode().attributes, el=>{
			return [el.nodeName, el.nodeValue];
		});
	}
	getBodyStyle() {
		return this.createStyleObject(this.getStyleForNode(this.getBodyNode()));
	}
	getHTMLStyle() {
		return this.getBodyParentStyle();
	}
	getBodyParentStyle() {
		const body = this.getBodyNode();
		let styleNode = {};
		if (body.parentNode) {
			styleNode = this.getStyleForNode(body.parentNode);
		}
		return this.createStyleObject(styleNode);
		// get optimal style, save as special node
	}
	shouldTakeElement(node, nodeStyle) {

		if (this.isSVG(node)) {
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
	addMeta(keyOrObject, value) {
		if (typeof keyOrObject === 'object') {
			this.meta = Object.assign(this.meta, keyOrObject);
		} else {
			this.meta[keyOrObject] = value;
		}
		return this;
	}
	setMeta(meta) {
		if (typeof meta !== 'object') {
			console.log('meta should be an object');
			return;
		}
		this.meta = Object.assign({},meta);
		return this;
	}
	getMeta(meta) {
		return Object.assign({},this.meta);
	}
	clearMeta() {
		this.meta = {};
	}
	addFbScript(resolve, reject, config) {
		const head = document.getElementsByTagName('head')[0];
		const script = document.createElement('script');
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
		this._loaded = new Promise((resolve,reject) => {
			if (typeof window.firebase !== 'undefined') {
				this.firebase = firebase;
				this.isLoaded = true;
				return resolve(this);
			}
			this.addFbScript(resolve,reject,fbConfig);
		});
		return this._loaded;
	}
	loaded() {
		return this._loaded;
	}
	addStyleNode(css) {

		const head = this.getBodyNode().parentNode.querySelector('head') || document.head || document.getElementsByTagName('head')[0];
		const style = document.createElement('style');

		style.type = 'text/css';
		if (style.styleSheet){
			style.styleSheet.cssText = css;
		} else {
			style.appendChild(document.createTextNode(css));
		}

		head.appendChild(style);

	}
	createSnapshot() {
		this.saveSnapshot();
	}
	saveSnapshot() {
		const id = Date.now();

		this.clearState();
		this.copyWorld();
		this.firebase.database().ref(`snapshots/${id}`).set(this.getState());
		this.firebase.database().ref(`snapshots-list/${id}`).set({
			visible: true
		});
		console.log(`snapshot ID is: ${id}`);
		return id;

	}
	restoreSnapshot(id) {
		return this.showSnapshot(id);
	}
	showSnapshot(id = '1502312089479') {
		return this.firebase.database().ref('snapshots/' + id).once('value').then((snapshot) => {
			this.setState(snapshot.val());
			this.destroyWorld();
			this.restoreWorld();
			return snapshot.val();
		});
	}
	clearState() {
		this.items = [];
		this.CACHE_KEYS = [];
		this.BODY_STYLE = [];
		this.HTML_STYLE = [];
		this.CACHE_VALUES = [];
		this.BODY_ATTRIBUTES = [];
	}
	getArrayCopy(element) {
		if (typeof element !== 'object' || element === null) {
			return [];
		}
		return element.slice(0);
	}
	setState(state) {
		this.meta = this.cloneObject(state.meta) || this.meta || {};
		this.items = this.getArrayCopy(state.items) || [];
		this.CACHE_KEYS = this.getArrayCopy(state.CACHE_KEYS) || [];
		this.CACHE_VALUES = this.getArrayCopy(state.CACHE_VALUES) || [];
		this.BODY_STYLE = this.getArrayCopy(state.BODY_STYLE) || [];
		this.HTML_STYLE = this.getArrayCopy(state.HTML_STYLE) || [];
		this.BODY_ATTRIBUTES = this.getArrayCopy(state.BODY_ATTRIBUTES) || [];
	}
	cloneObject(obj) {
		if (typeof obj === 'undefined' || obj === null) {
			return {};
		}
		return JSON.parse(JSON.stringify(obj));
	}
	copyWorld() {
		return this.copyWorldTo(this.items);
	}
	copyWorldTo(items) {
		var all = [];

		this.BODY_ATTRIBUTES = this.getBodyAttributes();
		this.HTML_STYLE = this.styleObjectToOptimalStyleArray(this.getHTMLStyle());
		this.BODY_STYLE = this.styleObjectToOptimalStyleArray(this.getBodyStyle());
		this.walker(this.getBodyNode(), all);

		const pseudoSelectorsStylesArray = [];
		const reindexMap = {};

		for (let i = 0; i < all.length; i++) {
			if (all[i].dataset) {
				all[i].dataset.index = i;
			}
			let nodeStyle = this.getStyleForNode(all[i]);
			if (this.shouldTakeElement(all[i], nodeStyle)) {
				if (all[i].dataset) {
					let pseudoselecorStyles = this.getStylesForPseudoSelectors(all[i]);
					if (pseudoselecorStyles) {
						pseudoselecorStyles.index = i;
						pseudoSelectorsStylesArray.push(pseudoselecorStyles);
					}
				}
				items.push(this.formatStyle(nodeStyle,all[i], i));
				reindexMap[i] = items.length - 1;
			}
		}

		pseudoSelectorsStylesArray.forEach(el=>{
			let item = items[reindexMap[el.index]];
			item.pseudoselectors = el;
		});

		this.vacuum();
		this.cleanupStyles();
	}
	setStyleFromObject(node, styleObject) {
		Object.keys(styleObject).forEach((key) => {
			node.style[key] = styleObject[key];
		});
		return this;
	}
	setHTMLStyle() {
		const body = this.getBodyNode();
		if (body.parentNode) {
			this.setNodeStyleFromStyleArray(this.HTML_STYLE, body.parentNode);
		}
		return this;
	}
	setBodyStyle() {
		this.setNodeStyleFromStyleArray(this.BODY_STYLE, this.getBodyNode());
		return this;
	}
	restoreWorld() {
		//this.setHTMLStyle();
		this.setBodyAttributes();
		//this.setBodyStyle();
		return this.restoreWorldFrom(this.items);
	}
	restoreWorldFrom(items) {
		const stylesToUppend = [];
		const fragment = document.createDocumentFragment();

		items.forEach(el=>{
			this.insertNode(this.createNode(el, stylesToUppend),el, fragment);
		});
		this.getBodyNode().appendChild(fragment);

		stylesToUppend.push(`html { ${this.getNodeStyleText(this.HTML_STYLE)} }`);
		stylesToUppend.push(`body { ${this.getNodeStyleText(this.BODY_STYLE)} }`);
		this.addStyleNode(stylesToUppend.reverse().join("\n"));
		return this;
	}
	setBodyAttributes() {
		const attributes = this.BODY_ATTRIBUTES;
		const body = this.getBodyNode();
		attributes.forEach(([name, value]) => {
			body.setAttribute(name, value);
		});
		return this;
	}
	destroyBodyAttributes() {
		const attributes = this.getBodyAttributes();
		const body = this.getBodyNode();
		attributes.forEach(([name]) => {
			body.removeAttribute(name);
		});
		return this;
	}
	destroyWorld() {
		this.destroyBodyAttributes();
		this.getBodyNode().innerHTML = '';
		return this;
	}
	getEqualKeysDiff(first, second) {
		let diffs = {};
		Object.keys(first).map(key=>{
			if (first[key] !== second[key]) {
				diffs[key] = [first[key], second[key]];
			}
		});
		return Object.keys(diffs).length ? diffs : false;
	}
	getStylesForPseudoSelectors(node) {
		const before = this.createStyleObject(this.getStyleForNode(node, ':before'));
		const after = this.createStyleObject(this.getStyleForNode(node, ':after'));
		const styleDiff = this.getEqualKeysDiff(before, after);
		if (styleDiff) {
			return {
				before: this.styleObjectToOptimalStyleArray(before),
				after: this.styleObjectToOptimalStyleArray(after),
				diff: styleDiff
			};
		} else {
			return false;
		}
	}
	getStyleForNode(element, pseudoselecor) {
		if (!pseudoselecor) {
			pseudoselecor = null;
		}
		if (this.restrictedNodeTypes.includes(element.nodeType)) {
			return {};
		}
		let style = {};
		try {
			style = window.getComputedStyle(element, pseudoselecor);
		} catch (e) {
			console.log(e, element, element.nodeType);
		}
		return style;
	}
	getBodyNode() {
		return window.document.body;
	}
	createStyleObject(styleNode) {
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
	isDefault(name, value) {
		return false;
		return this.BODY_STYLE[name] === value || false;
	}
	skipStyle(name, value) {
		return this.isDefault(name, value);
	}
	vacuum() {
		const items = this.items;
		const itemsToRemove = [];
		const lastItemIndex = items.length - 1;
		items.forEach((item,index)=>{
			if (lastItemIndex !== index) {
				let nextNode = items[index+1];
				if (nextNode.parent === item.parent && nextNode.nodeName === item.nodeName && item.nodeName === '#text') {
					nextNode.textContent = `${item.textContent}${nextNode.textContent}`;
					itemsToRemove.push(index);
				}
			}
		});
		this.items = items.filter((el,index)=>!itemsToRemove.includes(index));
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
	styleObjectToOptimalStyleArray(styleObject, parentIndex) {
		let parentStyle = [];
		if (parentIndex !== undefined) {
			parentStyle = this.getParentStyleByIndex(parentIndex);
		}

		const styles = [];
		Object.keys(styleObject).forEach(el=>{
			let styleKey = this.getOptimalValue(el,styleObject[el]);
			if (styleKey && !(this.INHERIT.includes(el) && parentStyle.includes(styleKey))) {
				styles.push(styleKey);
			}
		});
		return styles;
	}
	cleanupStyles() {
		const stylesToRemove  = [];
		const styledItems = this.items.filter(e=>e.styles.length);
		this.HTML_STYLE.forEach(style=>{
			if (styledItems.every((el)=>el.styles.includes(style))) {
				if (this.BODY_STYLE.includes(style)) {
					stylesToRemove.push(style);
				}
			}
		});

		this.HTML_STYLE = this.HTML_STYLE.filter(el=>!stylesToRemove.includes(el));
		this.BODY_STYLE = this.BODY_STYLE.filter(el=>!stylesToRemove.includes(el));
		this.items.forEach(item=>{
			if (item.styles.length) {
				item.styles = item.styles.filter(el=>!stylesToRemove.includes(el));
			}
		});
		this.BODY_STYLE = this.BODY_STYLE.filter(el=>!stylesToRemove.includes(el));
	}
	formatStyle(styleNode, node, index) {
		var result = {
			styles: []
		};
		const style = this.createStyleObject(styleNode);
		result.nodeName = this.NODE_NAMES_TO_REPLACE[node.nodeName] || node.nodeName;
		result.index = index;
		result.nodeType = node.nodeType;
		result.parent = node.parentNode?node.parentNode.dataset.index:0;

		if (result.parent === undefined) {
			result.parent = 0;
		}
		result.isSVG = this.isSVG(node);
		if (result.isSVG && result.nodeName !== 'svg') {
			result.styles = [];
		} else {
			result.styles = this.styleObjectToOptimalStyleArray(style, result.parent);
		}
		result.textContent = node.children ? "" : node.data;
		if (!this.restrictedNodeTypes.includes(node.nodeType)) {
			result.attributes = Array.prototype.map.call(node.attributes, el=>{
				return [el.nodeName, el.nodeValue];
			}).filter(([attrName])=>{
				if (result.isSVG) {
					return true;
				}
				return attrName !== 'style';
			});
		}
		return result;
	}
	walker(node, all=[]) {
		var walk = document.createTreeWalker(node, NodeFilter.SHOW_ALL);
		let n = null;
		while(n = walk.nextNode()) {
			all.push(n);
		}
	}
	getNodeStyleText(styles) {
		const style = [];
		styles.forEach((key)=>{
			const [name, value] = this.getFromOptimalValue(key);
			style.push(`${name}:${value}`);
		});
		return style.join(';');
	}
	setNodeStyleFromStyleArray(styles, node) {
		styles.forEach((key)=>{
			const [name, value] = this.getFromOptimalValue(key);
			node.style[name] = value;
		});
	}
	createNode(params, styles) {

		let node = null;

		if (this.restrictedNodeTypes.includes(params.nodeType)) {
			node = document.createTextNode(params.textContent);
		} else if (params.isSVG) {
			node = document.createElementNS("http://www.w3.org/2000/svg", params.nodeName);
		} else {
			node = document.createElement(params.nodeName);
			node.textContent = params.textContent;
		}

		params.attributes&&params.attributes.forEach(([name,value])=>{
			try {
				if (name && name !== '"') {
					node.setAttribute(name,value);
				}
			} catch (e) {
				console.log(e, node, name, value);
			}
		});

		// addStyleNode
		if (params.styles && params.styles.length) {
			//this.setNodeStyleFromStyleArray(params.styles, node);
			styles.push(`[data-index="${params.index}"] { ${this.getNodeStyleText(params.styles)} }`);
			if (params.pseudoselectors) {
				styles.push(`[data-index="${params.index}"]:before { ${this.getNodeStyleText(params.pseudoselectors.before)} }`);
				styles.push(`[data-index="${params.index}"]:after { ${this.getNodeStyleText(params.pseudoselectors.after)} }`);
			}
		}

		if (node.dataset) {
			node.dataset.parent = params.parent;
		}
		return node;
	}
	insertNode(node, obj, fragment) {
		const selector = `[data-index="${node.dataset?node.dataset.parent:obj.parent}"]`;
		const parent = fragment.querySelector(selector) || fragment;
		parent.appendChild(node);
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
	getState() {
		this.meta = this.collectMeta();
		return {
			meta: this.cloneObject(this.meta),
			items: this.getArrayCopy(this.items),
			HTML_STYLE: this.getArrayCopy(this.HTML_STYLE),
			BODY_STYLE: this.getArrayCopy(this.BODY_STYLE),
			CACHE_KEYS: this.getArrayCopy(this.CACHE_KEYS),
			CACHE_VALUES: this.getArrayCopy(this.CACHE_VALUES),
			BODY_ATTRIBUTES: this.getArrayCopy(this.BODY_ATTRIBUTES)
		}
	}
}
