class DomSnapshot {
	
	constructor(config = {}, fbConfig = false) {
		if (!config.state) {
			config.state = {};
		}
		this.DEFAULT_STYLE = config.state.DEFAULT_STYLE || 0;
		this.CACHE_KEYS  = config.state.CACHE_KEYS || [];
		this.CACHE_VALUES = config.state.CACHE_VALUES || [];
		this.BODY_ATTRIBUTES = config.state.CACHE_VALUES || [];
		this.items  = config.state.items || [];
		this.meta = config.state.meta || {};
		this.isLoaded = false;
		this.NODES_TO_IGNORE = ['NOSCRIPT', 'SCRIPT', 'STYLE', 'COMMENT'];
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
	shouldTakeElement(node) {
		
		
		if(!this.restrictedNodeTypes.includes(node.nodeType)) {
			if (this.skipDisplayNone && node.style) {
				return node.style.display !== 'none';
			}
		}
		
		if (this.NODES_TO_IGNORE.includes(node.nodeName)) {
			return false;
		} 		
		
		if (node.parentNode && this.NODES_TO_IGNORE.includes(node.parentNode.nodeName)) {
			return false;
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
		this.DEFAULT_STYLE = 0;
		this.CACHE_VALUES = [];
		this.BODY_ATTRIBUTES = [];
	}
	setState(state) {
		this.meta = this.cloneObject(state.meta) || this.meta || {};
		this.items = state.items.slice(0) || [];
		this.CACHE_KEYS = state.CACHE_KEYS.slice(0) || [];
		this.CACHE_VALUES = state.CACHE_VALUES.slice(0) || [];
		this.DEFAULT_STYLE = this.cloneObject(state.DEFAULT_STYLE) || {};
		this.BODY_ATTRIBUTES = state.BODY_ATTRIBUTES.slice(0) || [];
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
	setBodyStyle() {
		const body = this.getBodyNode();
		Object.keys(this.DEFAULT_STYLE).forEach((key) => {
			body.style[key] = this.DEFAULT_STYLE[key];
		});
	}
	restoreWorld() {
		this.setBodyAttributes();
		this.setBodyStyle();
		return this.restoreWorldFrom(this.items);
	}
	restoreWorldFrom(items) {
		items.forEach(el=>{
			if (el && el.nodeName !== 'SCRIPT' && el.nodeType !== 8) {
				this.insertNode(this.createNode(el),el);
			}
		});
	}
	setBodyAttributes() {
		const attributes = this.BODY_ATTRIBUTES;
		const body = this.getBodyNode();
		attributes.forEach(([name, value]) => {
			body.setAttribute(name, value);
		});
	}
	destroyBodyAttributes() {
		const attributes = this.getBodyAttributes();
		const body = this.getBodyNode();
		attributes.forEach(([name]) => {
			body.removeAttribute(name);
		});
	}
	destroyWorld() {
		this.destroyBodyAttributes();
		this.getBodyNode().innerHTML = '';
	}
	getStyleForNode(element) {
		if (this.restrictedNodeTypes.includes(element.nodeType)) {
			return {};
		}
		let style = {};
		try {
			style = window.getComputedStyle(element, null);
		} catch (e) {
			console.log(e, element, element.nodeType);
		}
		return style;
	}
	isNumeric(el) {
		return parseInt(el,10) == el && !isNaN(el);
	}
	getBodyNode() {
		return window.document.body;
	}
	isDefault(name, value) {
		if (typeof this.DEFAULT_STYLE !== 'object') {
			this.DEFAULT_STYLE = {};
			const styleObject = this.getStyleForNode(this.getBodyNode());
			Object.keys(styleObject).forEach(el=>{
				if (!this.isNumeric(el)) {
					this.DEFAULT_STYLE[el] = styleObject[el];
				}
			});
		}
		return this.DEFAULT_STYLE[name] === value || false;
	}
	skipStyle(name, value) {
		return this.isDefault(name, value);
	}
	formatStyle(style, node, index) {
		var result = {
			styles: []
		};
		Object.keys(style).forEach(el=>{
			if (!this.isNumeric(el) && !this.skipStyle(el, style[el], node.nodeName)) {
				result.styles.push(this.getOptimalValue(el,style[el]));
			}
		});
		result.nodeName = node.nodeName;
		result.index = index;
		result.nodeType = node.nodeType;
		result.parent = node.parentNode?node.parentNode.dataset.index:0;
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
	createNode(params) {
		
		let node = null;
		
		if (this.restrictedNodeTypes.includes(params.nodeType)) {
			node = document.createTextNode(params.textContent);
		} else {
			node = document.createElement(params.nodeName);
			node.textContent = params.textContent;
		}	
		
		params.attributes&&params.attributes.forEach(([name,value])=>{
			node.setAttribute(name,value);
		});	

		params.styles&&params.styles.forEach((key)=>{
			const [name, value] = this.getFromOptimalValue(key);
			node.style[name] = value;
		});
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
			BODY_ATTRIBUTES: this.BODY_ATTRIBUTES.slice(0),
			CACHE_KEYS: this.CACHE_KEYS.slice(0),
			CACHE_VALUES: this.CACHE_VALUES.slice(0),
			items: this.items.slice(0),
			DEFAULT_STYLE: this.cloneObject(this.DEFAULT_STYLE)
		}
	}
}
