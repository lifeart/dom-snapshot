class DomSnapshot {

	constructor(config = {}, fbConfig = false) {
		if (!config.state) {
			config.state = {};
		}
		this.BODY_STYLE = config.state.BODY_STYLE || [];
		this.CACHE_KEYS  = config.state.CACHE_KEYS || [];
		this.CACHE_VALUES = config.state.CACHE_VALUES || [];
		this.BODY_ATTRIBUTES = config.state.CACHE_VALUES || [];
		this.items  = config.state.items || [];
		this.meta = config.state.meta || {};
		this.HTML_STYLE = config.state.HTML_STYLE || [];
		this.isLoaded = false;
		this.NODES_TO_IGNORE = ['NOSCRIPT', 'SCRIPT', 'STYLE', '#comment', '#document', 'IFRAME'];
		this.pseudoselectors = [
			':after', ':before', ':first-line', ':first-letter', ':selection'
		];
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
	shouldTakeElement(node) {


		if (this.NODES_TO_IGNORE.includes(node.nodeName)) {
			return false;
		} 		
		
		if (node.parentNode && this.NODES_TO_IGNORE.includes(node.parentNode.nodeName)) {
			return false;
		}

		if (!this.restrictedNodeTypes.includes(node.nodeType)) {
			if (this.skipDisplayNone && node.style) {
				return node.style.display !== 'none';
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
		
		for (let i = 0; i < all.length; i++) {
			if (all[i].dataset) {
				all[i].dataset.index = i;
			}
			if (this.shouldTakeElement(all[i])) {
				items.push(this.formatStyle(this.getStyleForNode(all[i]),all[i], i));
			}
		}
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
		this.setHTMLStyle();
		this.setBodyAttributes();
		this.setBodyStyle();
		return this.restoreWorldFrom(this.items);
	}
	restoreWorldFrom(items) {
		items.forEach(el=>{
			this.insertNode(this.createNode(el),el);
		});
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
	getParentStyleByIndex(index) {
		if (typeof index !== 'number') {
			return this.BODY_STYLE || [];
		} else {
			return this.items[index].style || []
		}
	}
	styleObjectToOptimalStyleArray(styleObject, parentIndex) {
		let parentStyle = [];
		if (parentIndex !== undefined) {
			//parentStyle = this.getParentStyleByIndex(parentIndex);
		}

		const styles = [];
		Object.keys(styleObject).forEach(el=>{
			let styleKey = this.getOptimalValue(el,styleObject[el]);
			if (!parentStyle.includes(styleKey)) {
				styles.push(styleKey);
			}
		});
		return styles;
	}
	formatStyle(styleNode, node, index) {
		var result = {
			styles: []
		};
		const style = this.createStyleObject(styleNode);
		result.nodeName = node.nodeName;
		result.index = index;
		result.nodeType = node.nodeType;
		result.parent = node.parentNode?node.parentNode.dataset.index:0;
		result.styles = this.styleObjectToOptimalStyleArray(style, result.parent);
		if (result.parent === undefined) {
			result.parent = 0;
		}
		result.textContent = node.children ? "" : node.data;
		if (!this.restrictedNodeTypes.includes(node.nodeType)) {
			result.attributes = Array.prototype.map.call(node.attributes, el=>{
				return [el.nodeName, el.nodeValue];
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
	setNodeStyleFromStyleArray(styles, node) {
		styles.forEach((key)=>{
			const [name, value] = this.getFromOptimalValue(key);
			node.style[name] = value;
		});
	}
	createNode(params) {
		
		let node = null;
		
		if (this.restrictedNodeTypes.includes(params.nodeType)) {
			node = document.createTextNode(params.textContent);
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

		params.styles && this.setNodeStyleFromStyleArray(params.styles, node);

		if (node.dataset) {
			node.dataset.parent = params.parent;
		}
		return node;
	}
	insertNode(node, obj) {
		const selector = `[data-index="${node.dataset?node.dataset.parent:obj.parent}"]`;
		const parent = document.querySelector(selector) || this.getBodyNode();
		parent.appendChild(node);
	}
	getFromOptimalValue(value) {
		const [keyIndex, valueIndex] = value.split('/');
		return [this.CACHE_KEYS[keyIndex], this.CACHE_VALUES[valueIndex]];
	}
	getOptimalValue(key, value) {
		
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