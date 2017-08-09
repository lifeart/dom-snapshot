var DEFAULT_STYLE = 0;
var CACHE_KEYS = [];
var CACHE_VALUES = [];
var items = [];

copyWorldTo(items);
destroyWorld();
restoreWorldFrom(items);
console.log(getState());
clearState();

function clearState() {
	items = [];
	DEFAULT_STYLE = 0;
	CACHE_KEYS = [];
	CACHE_VALUES = [];
}

function copyWorldTo(items) {
	var all = [];
	walker(document.body, all);
	const SCRIPT_NODE = 'SCRIPT';
	for (var i = 0; i < all.length; i++) {
		if (all[i].dataset) {
			all[i].dataset.index = i;
		}
		if (all[i].nodeName !== SCRIPT_NODE && all[i].parentNode.nodeName !== SCRIPT_NODE) {		
			items.push(formatStyle(getStyleForNode(all[i]),all[i], i));
		}
	}
}

function restoreWorldFrom(items) {
	items.forEach(el=>{
		if (el && el.nodeName !== 'SCRIPT' && el.nodeType !== 8) {
			insertNode(createNode(el),el);
		}
	});
}

function destroyWorld() {
	document.body.innerHTML = '';
}

function getStyleForNode(element) {
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

function isNumeric(el) {
	return parseInt(el,10) == el && !isNaN(el);
}

function isDefault(name, value) {
	if (typeof DEFAULT_STYLE !== 'object') {
		DEFAULT_STYLE = {};
		const styleObject = getStyleForNode(window.document.body);
		Object.keys(styleObject).forEach(el=>{
			if (!isNumeric(el)) {
				DEFAULT_STYLE[el] = styleObject[el];
			}
		});
	}
	return DEFAULT_STYLE[name] === value || false;
	
}

function skipStyle(name, value) {
	return isDefault(name, value);
}

function formatStyle(style, node, index) {
	var result = {
		styles: []
	};
	Object.keys(style).forEach(el=>{
		if (!isNumeric(el) && !skipStyle(el, style[el], node.nodeName)) {
			result.styles.push(getOptimalValue(el,style[el]));
		}
	});
	result.nodeName = node.nodeName;
	result.index = index;
	result.nodeType = node.nodeType;
	result.parent = node.parentNode?node.parentNode.dataset.index:0;
	result.textContent = node.children ? "" : node.data;
	// result.textContent = node.innerText;
	if (![8,3].includes(node.nodeType)) {
		result.attributes = Array.prototype.map.call(node.attributes, el=>{
			return [el.nodeName, el.nodeValue];
		});		
	}
	return result;
}

function walker(node,all=[]) {
	var walk=document.createTreeWalker(node,NodeFilter.SHOW_ALL);
	while(n=walk.nextNode()) {
		all.push(n);
	}
}


function createNode(params) {
	
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

	
	params.styles.forEach((key)=>{
		const [name, value] = getFromOptimalValue(key);
		node.style[name] = value;
	});
	if (node.dataset) {
		node.dataset.parent = params.parent;
	}
	return node;
}

function insertNode(node, obj) {
	
	const selector = `[data-index="${node.dataset?node.dataset.parent:obj.parent}"]`;
	const parent = document.querySelector(selector) || document.body;
	parent.appendChild(node);
}


function getFromOptimalValue(value) {
	const [keyIndex, valueIndex] = value.split('/');
	return [CACHE_KEYS[keyIndex], CACHE_VALUES[valueIndex]];
}

function getOptimalValue(key, value) {
	
	var keyIndex = CACHE_KEYS.indexOf(key);
	var keyValue = CACHE_VALUES.indexOf(value);
	
	if (keyIndex === -1) {
		CACHE_KEYS.push(key);
		keyIndex = CACHE_KEYS.length - 1;
	}
	
	if (keyValue === -1) {
		CACHE_VALUES.push(value);
		keyValue = CACHE_VALUES.length - 1;
	}
	
	return `${keyIndex}/${keyValue}`;
}

function getState() {
	return {
		CACHE_KEYS: CACHE_KEYS.slice(0),
		CACHE_VALUES: CACHE_VALUES.slice(0),
		items: items.slice(0),
		DEFAULT_STYLE: JSON.parse(JSON.stringify(DEFAULT_STYLE))
	}
}
