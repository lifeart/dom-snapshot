/*eslint no-unused-vars: ["error", { "argsIgnorePattern": "DomSnapshot" }]*/
/* global firebase, AUTOSTART */
declare global {
  interface IFirerbaseDatabase {
    ref: Function;
  }
  export type AUTOSTART = boolean;
  export interface firebase {
    initializeApp: Function;
    database: (...any) => IFirerbaseDatabase;
  }
  export interface Window {
    firebase: firebase;
    snapshoter: DomSnapshot;
    AUTOSTART: undefined | boolean;
  }
}

import ESCAPED_ATTRIBUTES from "./constants/escaped-attributes";
import FIREBASE_DEFAULT_CONFIG from "./config/firebase-default-config";
import INHERIT_STYLE_ATTRIBUTES from "./constants/inherit-style-attributes";
import SKIPPED_STYLE_ATTRIBUTES from "./constants/skipped-style-attributes";
import DOM_NAMESPACES from "./constants/dom-namespaces";
import NODE_NAMES_TO_IGNORE from "./constants/node-names-to-ignore";
import NODE_NAMES_TO_REPLACE from "./constants/node-names-to-replace";
import DOM_PSEUDOSELECTORS from "./constants/dom-pseudoselectors";
import collectMeta from "./utils/collect-meta";
import isSvg from "./utils/is-svg";

class DomSnapshot {
  public firebase?: firebase;
  private _loaded: any;
  private BODY_STYLE: any[];
  private CACHE_KEYS: any[];
  private CACHE_VALUES: any[];
  private BODY_ATTRIBUTES: any[];
  private restrictedNodeTypes: number[];
  private isLoaded: boolean;
  private uidPrefix: null | string = null;
  private skipDisplayNone: boolean;
  public getBodyNode: undefined | Function;
  private HTML_STYLE: any[];
  private items: any[];
  private meta: null | {
    hostname?: string;
    protocol?: string;
  };
  private _USE_VACUUM: boolean;
  private _USE_INLINE_STYLES: boolean;
  private _USE_STYLES_CLEANUP: boolean;
  private _USE_PSEUDOSELECTORS: boolean;
  private _USE_SAFE_ATTRIBUTES: boolean;
  private _NAMESPACES: { [key: string]: string };
  private nodeCache: object;
  private _html: false | Node;
  private _head: false | Node;
  private _body: false | Node;
  private fbConfig: any;

  // this nodes not going to snapshot
  private NODE_NAMES_TO_IGNORE = NODE_NAMES_TO_IGNORE;
  // iframes nodes will be replaced to div's
  private NODE_NAMES_TO_REPLACE = NODE_NAMES_TO_REPLACE;
  // pseudoselectors to capture
  private PSEUDOSELECTORS = DOM_PSEUDOSELECTORS;
  // inherit styles (based on css 2.1);
  private INHERIT = INHERIT_STYLE_ATTRIBUTES;
  // styles to skip from capturing
  private SKIP_STYLES = SKIPPED_STYLE_ATTRIBUTES;
  //https://www.w3schools.com/TAGs/ref_eventattributes.asp
  private ESCAPED_ATTRIBUTES = ESCAPED_ATTRIBUTES;

  /*
	*/
  constructor(
    config = {
      inlineStyles: false, // use inline styles on restore
      vacuum: false, // use node-vacuum (squashing)
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
    },
    fbConfig = false
  ) {
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

    this._NAMESPACES = DOM_NAMESPACES;
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
    this.fbConfig = fbConfig || FIREBASE_DEFAULT_CONFIG;
    this.intFirebase(this.fbConfig);
  }
  _normalizeAttributeName(attrName) {
    return String(attrName)
      .trim()
      .toLowerCase();
  }
  _isSafeAttribute(attrName) {
    if (
      this._USE_SAFE_ATTRIBUTES &&
      this.ESCAPED_ATTRIBUTES.includes(this._normalizeAttributeName(attrName))
    ) {
      return false;
    }
    return (
      !attrName.includes("ng-") &&
      !attrName.includes('"') &&
      !attrName.includes("style")
    );
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
    return collectMeta();
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
    return isSvg(element);
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
    let styleNode: CSSStyleDeclaration | any[] = [];
    if (body.parentNode) {
      styleNode = this._getStyleForNode(body.parentNode);
    }
    return this._createStyleObject(styleNode);
    // get optimal style, save as special node
  }
  addMeta(keyOrObject, value, target = this) {
    if (typeof keyOrObject === "object") {
      target.meta = Object.assign(target.meta, keyOrObject);
    } else {
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
    return (
      this._head ||
      this._getBodyNode().parentNode.querySelector("head") ||
      this._getDocument().head ||
      this._getDocument().getElementsByTagName("head")[0]
    );
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
  _addStyleNode(css, target = false) {
    const style: HTMLStyleElement & {
      styleSheet?: StyleSheet & { cssText: string };
    } = this._getDocument().createElement("style");
    const head = target || this._getHead();
    style.type = "text/css";

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(this._getDocument().createTextNode(css));
    }

    head.appendChild(style);
  }
  _getDomNodeFromArgument(selector) {
    let target =
      typeof selector === "object"
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
    if (rewriteDomContent) {
      this._cleanDomNode(target);
    }
    this.restoreWorldFrom(snapshot, target);
  }
  showSnapshot(id, selector = false) {
    return this.getSnapshotById(id).then(snapshot => {
      this.destroyWorld();
      let targetNode =
        document.querySelector(String(selector).valueOf()) ||
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
      source.HTML_STYLE = this._styleObjectToOptimalStyleArray(
        this._getHTMLStyle(),
        undefined,
        source
      );
      source.BODY_STYLE = this._styleObjectToOptimalStyleArray(
        this._getBodyStyle(),
        undefined,
        source
      );
    }

    let capturedNodes = this._getAllDomNodes(target);

    if (!isBodyNodeRoot) {
      capturedNodes.unshift(rootNode);
    }

    for (let i = 0; i < capturedNodes.length; i++) {
      let item = capturedNodes[i];
      if (item.dataset) {
        item.dataset[this._nodeSelectorDatasetName()] = i;
      }
      let nodeStyle = this._getStyleForNode(item);
      if (this._shouldTakeElement(item, nodeStyle)) {
        if (item.dataset && this._USE_PSEUDOSELECTORS) {
          let pseudoselecorStyles = this._getStylesForPseudoSelectors(
            item,
            source
          );
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
  restoreWorld(target: Node | boolean = false, source) {
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
  restoreWorldFrom(source, target: Node | boolean = false) {
    const stylesToUppend = [];
    const fragment = this._getDocument().createDocumentFragment();

    this.uidPrefix =
      "d" +
      Math.random()
        .toString(36)
        .slice(-2);

    let nodesIndex = {};
    this._forEach(source.items, el => {
      let node = this._createNode(el, stylesToUppend, source);
      nodesIndex[el.index] = node;
      this._insertNode(node, el, fragment, nodesIndex);
    });

    nodesIndex = {};
    stylesToUppend.push(
      `html { ${this._getNodeStyleText(source.HTML_STYLE, source)} }`
    );
    stylesToUppend.push(
      `body { ${this._getNodeStyleText(source.BODY_STYLE, source)} }`
    );

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
    source.HTML_STYLE = source.HTML_STYLE.filter(
      el => !stylesToRemove.includes(el)
    );
    source.BODY_STYLE = source.BODY_STYLE.filter(
      el => !stylesToRemove.includes(el)
    );
    this._forEach(source.items, item => {
      if (this._isNotEmptyArray(item.styles)) {
        item.styles = item.styles.filter(el => !stylesToRemove.includes(el));
      }
    });
    source.BODY_STYLE = source.BODY_STYLE.filter(
      el => !stylesToRemove.includes(el)
    );
  }
  _getNameForNode(nodeName) {
    return this.NODE_NAMES_TO_REPLACE[nodeName] || nodeName;
  }
  _getParentForNode(node) {
    let parent = node.parentNode
      ? node.parentNode.dataset[this._nodeSelectorDatasetName()]
      : 0;
    if (!this.isNotUndefined(parent)) {
      return 0;
    }
    return parseInt(parent);
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
    let firstState = this.setState({} as any, s1);
    let secondState = this.setState({} as any, s2);

    let firstStyles = firstState.items.filter(e => e.styles).map(el => {
      let item = this._setNodeStyleFromStyleArray(
        el.styles,
        {
          style: {}
        },
        firstState
      );
      return Object.assign({}, el, item);
    });

    let secondStyles = secondState.items.filter(e => e.styles).map(el => {
      let item = this._setNodeStyleFromStyleArray(
        el.styles,
        {
          style: {}
        },
        secondState
      );
      return Object.assign({}, el, item);
    });

    let diffArray = new Array(firstState.items.length).fill(null);

    return diffArray.map((_, index) => {
      return {
        firstNode: firstStyles[index],
        secondNode: secondStyles[index],
        stylesDiff: this._getAllKeysDiff(
          firstStyles[index].style,
          secondStyles[index].style
        ),
        attributesDiff: this._getAllKeysDiff(
          this._arrayToObject(firstStyles[index].attributes),
          this._arrayToObject(secondStyles[index].attributes)
        )
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
      attributes: [],
      nodeType: node.nodeType,
      parent: this._getParentForNode(node),
      isSVG: this._isSVG(node),
      textContent: this._getNodeTextContent(node)
    };
    const style = this._createStyleObject(styleNode);

    // if (result.isSVG && result.nodeName !== 'svg') {
    // result.styles = [];
    // } else {
    result.styles = this._styleObjectToOptimalStyleArray(
      style,
      result.parent,
      source
    );
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
          : undefined;
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
    this.addMeta("Date", Date.now(), source as any);
    this.addMeta("URL", window.location.href, source as any);
    this.addMeta("Browser", window.navigator.userAgent, source as any);
    let state = this._getState(source);
    console.log("state", state);
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
    this._setNodeStyleFromStyleArray(
      source.BODY_STYLE,
      this._getBodyNode(),
      source
    );
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
      if (
        styleKey &&
        !(this.INHERIT.includes(el) && parentStyle.includes(styleKey))
      ) {
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

    if (
      node.parentNode &&
      this.NODE_NAMES_TO_IGNORE.includes(node.parentNode.nodeName)
    ) {
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
        if (nodeStyle.display === "none") {
          node.dataset.ignored = true;
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
  _createNode(
    params = {
      nodeType: "3",
      index: "3",
      textContent: "noop",
      attributes: [],
      styles: [],
      parent: null,
      isSVG: false,
      pseudoselectors: undefined,
      nodeName: "DIV"
    },
    styles,
    source
  ) {
    let node = null;

    const { nodeName, textContent, nodeType, isSVG } = params;

    if (this.restrictedNodeTypes.includes(parseInt(nodeType))) {
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
          if (name) {
            if (isSVG) {
              node.setAttributeNS(this._NAMESPACES.SVG, name, value);
            } else {
              if (this._isSafeAttribute(name)) {
                node.setAttribute(name, value);
              }
            }
          }
        });
      } catch (e) {
        console.log(e, node, name);
      }
    }

    // _addStyleNode
    if (this._isNotEmptyArray(params.styles)) {
      if (this._USE_INLINE_STYLES) {
        this._setNodeStyleFromStyleArray(params.styles, node, source);
      } else {
        styles.push(
          this._styleTextForNode(params.index, params.styles, "", source)
        );
        if (params.pseudoselectors) {
          styles.push(
            this._styleTextForNode(
              params.index,
              params.pseudoselectors.before,
              ":before",
              source
            )
          );
          styles.push(
            this._styleTextForNode(
              params.index,
              params.pseudoselectors.after,
              ":after",
              source
            )
          );
        }
      }
    }

    if (node.dataset) {
      node.dataset.parent = params.parent;
    }
    return node;
  }
  _styleTextForNode(index, styles, postfix = "", source) {
    return `[${this._nodeSelectorName()}="${this._nodeSelectorValue(
      index
    )}"]${postfix} { ${this._getNodeStyleText(styles, source)} }`;
  }
  _nodeSelectorName() {
    return `data-${this._nodeSelectorDatasetName()}`;
  }
  _nodeSelectorDatasetName() {
    if (this.uidPrefix !== null) {
      return `${this.uidPrefix}`;
    } else {
      return "index";
    }
  }
  _nodeSelectorValue(index) {
    return index;
  }
  _insertNode(node, obj, fragment, nodesIndex) {
    let parentId = node.dataset ? node.dataset.parent : obj.parent;
    const selector = `[${this._nodeSelectorName()}="${this._nodeSelectorValue(
      parentId
    )}"]`;
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
    } else {
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
    const before = this._createStyleObject(
      this._getStyleForNode(node, ":before")
    );
    const after = this._createStyleObject(
      this._getStyleForNode(node, ":after")
    );
    const styleDiff = this._getEqualKeysDiff(before, after);
    if (styleDiff) {
      return {
        before: this._styleObjectToOptimalStyleArray(before, undefined, source),
        after: this._styleObjectToOptimalStyleArray(after, undefined, source),
        diff: styleDiff,
        index: null
      };
    } else {
      return false;
    }
  }
  _getStyleForNode(element, pseudoselecor = null) {
    if (this.restrictedNodeTypes.includes(element.nodeType)) {
      return [];
    }
    let style: any[] | CSSStyleDeclaration = [];
    try {
      style = window.getComputedStyle(element, pseudoselecor);
    } catch (e) {
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
    } else {
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
} else {
  window.snapshoter = new DomSnapshot();
}
