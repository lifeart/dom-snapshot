var elem1 = window.document.body;
var DEFAULT_STYLE = 0;;
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
		style: {
			
		}
	};
	Object.keys(style).forEach(el=>{
		if (!isNumeric(el) && !skipStyle(el, style[el], node.nodeName)) {
			result.style[el] = style[el];
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


var all = document.body.getElementsByTagName('*');
all = [];


function walker(node,all=[]) {
	var walk=document.createTreeWalker(node,NodeFilter.SHOW_ALL);
	while(n=walk.nextNode()) {
		all.push(n);
	}
}

walker(document.body,all);

var items = [];



for (var i = 0; i < all.length; i++) {
	if (all[i].dataset) {
		all[i].dataset.index = i;
	}
	if (all[i].nodeName !== 'SCRIPT' && all[i].parentNode.nodeName !== 'SCRIPT') {		
		items.push(formatStyle(getStyleForNode(all[i]),all[i], i));
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
	Object.keys(params.style).forEach((key)=>{
		node.style[key] = params.style[key];
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

document.body.innerHTML = '';
items.forEach(el=>{
	if (el && el.nodeName !== 'SCRIPT' && el.nodeType !== 8) {
		insertNode(createNode(el),el);
	}
	
});
console.log(all,items);
