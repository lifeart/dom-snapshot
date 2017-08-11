class DomSnapshot {
	
	constructor(state = {}, fbConfig = false) {
		this.DEFAULT_STYLE = state.DEFAULT_STYLE || 0;
		this.CACHE_KEYS  = state.CACHE_KEYS || [];
		this.CACHE_VALUES = state.CACHE_VALUES || [];
		this.items  = state.items || [];
		this.meta = state.meta || {};
		this.isLoaded = false;
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
		this.clearMeta();
		this.DEFAULT_STYLE = 0;
		this.CACHE_KEYS = [];
		this.CACHE_VALUES = [];
	}
	setState(state) {
		this.meta = this.cloneObject(state.meta) || this.meta || {};
		this.items = state.items.slice(0);
		this.DEFAULT_STYLE = this.cloneObject(state.DEFAULT_STYLE);
		this.CACHE_KEYS = state.CACHE_KEYS.slice(0);
		this.CACHE_VALUES = state.CACHE_VALUES.slice(0);
	}
	cloneObject(obj) {
		return JSON.parse(JSON.stringify(obj));
	}
	copyWorld() {
		return this.copyWorldTo(this.items);
	}
	copyWorldTo(items) {
		var all = [];
		this.walker(document.body, all);
		const NODES_TO_IGNORE = ['NOSCRIPT', 'SCRIPT', 'STYLE', 'COMMENT'];
		
		for (let i = 0; i < all.length; i++) {
			if (all[i].dataset) {
				all[i].dataset.index = i;
			}
			if (
				!NODES_TO_IGNORE.includes(all[i].nodeName) 
				&& 
				!NODES_TO_IGNORE.includes(all[i].parentNode.nodeName)
				) {
				items.push(this.formatStyle(this.getStyleForNode(all[i]),all[i], i));
			}
		}
	}
	restoreWorld() {
		return this.restoreWorldFrom(this.items);
	}
	restoreWorldFrom(items) {
		items.forEach(el=>{
			if (el && el.nodeName !== 'SCRIPT' && el.nodeType !== 8) {
				this.insertNode(this.createNode(el),el);
			}
		});
	}
	destroyWorld() {
		document.body.innerHTML = '';
	}
	getStyleForNode(element) {
		if ([8,3].includes(element.nodeType)) {
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
	isDefault(name, value) {
		if (typeof this.DEFAULT_STYLE !== 'object') {
			this.DEFAULT_STYLE = {};
			const styleObject = this.getStyleForNode(window.document.body);
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
		if (![8,3].includes(node.nodeType)) {
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
		
		if ([8,3].includes(params.nodeType)) {
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
		const parent = document.querySelector(selector) || document.body;
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
			meta: this.cloneObject(this.DEFAULT_STYLE),
			CACHE_KEYS: this.CACHE_KEYS.slice(0),
			CACHE_VALUES: this.CACHE_VALUES.slice(0),
			items: this.items.slice(0),
			DEFAULT_STYLE: this.cloneObject(this.DEFAULT_STYLE)
		}
	}
}
