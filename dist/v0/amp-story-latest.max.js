(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-story",ev:"1.0",l:true,f:(function(AMP,_){
(function() {
  // src/core/data-structures/promise.js
  var resolved;
  function resolvedPromise() {
    if (resolved) {
      return resolved;
    }
    resolved = Promise.resolve(void 0);
    return resolved;
  }
  var Deferred = function Deferred2() {
    var _this = this;
    this.promise = new Promise(function(res, rej) {
      _this.resolve = res;
      _this.reject = rej;
    });
  };
  function tryResolve(fn) {
    return new Promise(function(resolve) {
      resolve(fn());
    });
  }

  // src/core/mode/prod.js
  function isProd() {
    return false;
  }

  // src/core/mode/test.js
  function isTest(opt_win) {
    var _win$AMP_CONFIG;
    if (isProd()) {
      return false;
    }
    var win = opt_win || self;
    return !!((_win$AMP_CONFIG = win.AMP_CONFIG) != null && _win$AMP_CONFIG.test || win.__AMP_TEST || win["__karma__"]);
  }

  // src/core/mode/local-dev.js
  function isLocalDev(opt_win) {
    var _self$AMP_CONFIG;
    if (isProd()) {
      return false;
    }
    return !!((_self$AMP_CONFIG = self.AMP_CONFIG) != null && _self$AMP_CONFIG.localDev) || isTest(opt_win);
  }

  // src/core/mode/minified.js
  function isMinified() {
    return false;
  }

  // src/core/mode/version.js
  function version() {
    return "2109221842260";
  }

  // src/core/mode/esm.js
  function isEsm() {
    var _self$__AMP_MODE$esm, _self, _self$__AMP_MODE;
    if (isProd()) {
      return false;
    }
    return (_self$__AMP_MODE$esm = (_self = self) == null ? void 0 : (_self$__AMP_MODE = _self.__AMP_MODE) == null ? void 0 : _self$__AMP_MODE.esm) != null ? _self$__AMP_MODE$esm : false;
  }

  // src/core/types/array.js
  function toArray(arrayLike) {
    return arrayLike ? Array.prototype.slice.call(arrayLike) : [];
  }
  var isArray = Array.isArray;
  function arrayOrSingleItemToArray(arrayOrSingleItem) {
    return isArray(arrayOrSingleItem) ? arrayOrSingleItem : [
      arrayOrSingleItem
    ];
  }
  function remove(array, shouldRemove) {
    var removed = [];
    var index = 0;
    for (var i = 0; i < array.length; i++) {
      var item = array[i];
      if (shouldRemove(item, i, array)) {
        removed.push(item);
      } else {
        if (index < i) {
          array[index] = item;
        }
        index++;
      }
    }
    if (index < array.length) {
      array.length = index;
    }
    return removed;
  }
  function findIndex(array, predicate7) {
    for (var i = 0; i < array.length; i++) {
      if (predicate7(array[i], i, array)) {
        return i;
      }
    }
    return -1;
  }
  function removeItem(array, item) {
    var index = array.indexOf(item);
    if (index == -1) {
      return false;
    }
    array.splice(index, 1);
    return true;
  }
  function lastItem(array) {
    return array[array.length - 1];
  }

  // src/core/types/enum.js
  function isEnumValue(enumObj, val) {
    for (var k in enumObj) {
      if (enumObj[k] === val) {
        return true;
      }
    }
    return false;
  }

  // src/core/types/string/index.js
  function endsWith(string, suffix) {
    var index = string.length - suffix.length;
    return index >= 0 && string.indexOf(suffix, index) == index;
  }
  function includes(string, substring, start) {
    if (typeof start !== "number") {
      start = 0;
    }
    if (start + substring.length > string.length) {
      return false;
    }
    return string.indexOf(substring, start) !== -1;
  }

  // src/core/types/object/index.js
  var _Object$prototype = Object.prototype;
  var hasOwn_ = _Object$prototype.hasOwnProperty;
  var toString_ = _Object$prototype.toString;
  function isObject(value) {
    return toString_.call(value) === "[object Object]";
  }
  function map(opt_initial) {
    var obj = Object.create(null);
    if (opt_initial) {
      Object.assign(obj, opt_initial);
    }
    return obj;
  }
  function dict(opt_initial) {
    return opt_initial || {};
  }
  function hasOwn(obj, key) {
    return hasOwn_.call(obj, key);
  }
  function omit(o, props) {
    return Object.keys(o).reduce(function(acc, key) {
      if (!props.includes(key)) {
        acc[key] = o[key];
      }
      return acc;
    }, {});
  }

  // src/core/types/index.js
  function isElement(value) {
    return (value == null ? void 0 : value.nodeType) == 1;
  }

  // src/core/error/message-helpers.js
  var USER_ERROR_SENTINEL = "\u200B\u200B\u200B";
  var USER_ERROR_EMBED_SENTINEL = "\u200B\u200B\u200B\u200B";
  function elementStringOrPassThru(val) {
    if (isElement(val)) {
      val = val;
      return val.tagName.toLowerCase() + (val.id ? "#" + val.id : "");
    }
    return val;
  }

  // src/core/assert/base.js
  function assert(sentinel, shouldBeTruthy, opt_message, var_args) {
    if (opt_message === void 0) {
      opt_message = "Assertion failed";
    }
    if (shouldBeTruthy) {
      return shouldBeTruthy;
    }
    if (sentinel && opt_message.indexOf(sentinel) == -1) {
      opt_message += sentinel;
    }
    var i = 3;
    var splitMessage = opt_message.split("%s");
    var message = splitMessage.shift();
    var messageArray = [message];
    while (splitMessage.length) {
      var subValue = arguments[i++];
      var nextConstant = splitMessage.shift();
      message += elementStringOrPassThru(subValue) + nextConstant;
      messageArray.push(subValue, nextConstant.trim());
    }
    var error = new Error(message);
    error.messageArray = remove(messageArray, function(x2) {
      return x2 !== "";
    });
    self.__AMP_REPORT_ERROR == null ? void 0 : self.__AMP_REPORT_ERROR(error);
    throw error;
  }
  function assertType_(assertFn, subject, shouldBeTruthy, defaultMessage, opt_message) {
    if (isArray(opt_message)) {
      assertFn(shouldBeTruthy, opt_message.concat([subject]));
    } else {
      assertFn(shouldBeTruthy, (opt_message || defaultMessage) + ": %s", subject);
    }
    return subject;
  }
  function assertElement(assertFn, shouldBeElement, opt_message) {
    return assertType_(assertFn, shouldBeElement, isElement(shouldBeElement), "Element expected", opt_message);
  }

  // src/core/assert/dev.js
  function devAssertDceCheck() {
    if (self.__AMP_ASSERTION_CHECK) {
      console.log("__devAssert_sentinel__");
    }
  }
  function devAssert(shouldBeTruthy, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    if (isMinified()) {
      return shouldBeTruthy;
    }
    devAssertDceCheck();
    return assert("", shouldBeTruthy, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
  }
  function devAssertElement(shouldBeElement, opt_message) {
    if (isMinified()) {
      return shouldBeElement;
    }
    devAssertDceCheck();
    return assertElement(devAssert, shouldBeElement, opt_message);
  }

  // src/core/dom/layout/index.js
  var Layout_Enum = {
    NODISPLAY: "nodisplay",
    FIXED: "fixed",
    FIXED_HEIGHT: "fixed-height",
    RESPONSIVE: "responsive",
    CONTAINER: "container",
    FILL: "fill",
    FLEX_ITEM: "flex-item",
    FLUID: "fluid",
    INTRINSIC: "intrinsic"
  };

  // extensions/amp-story/1.0/amp-story-base-layer.js
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf13(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf13(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  var AmpStoryBaseLayer = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpStoryBaseLayer2, _AMP$BaseElement);
    var _super = _createSuper(AmpStoryBaseLayer2);
    function AmpStoryBaseLayer2(element) {
      return _super.call(this, element);
    }
    var _proto = AmpStoryBaseLayer2.prototype;
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return layout == Layout_Enum.CONTAINER;
    };
    _proto.buildCallback = function buildCallback() {
      this.element.classList.add("i-amphtml-story-layer");
    };
    return AmpStoryBaseLayer2;
  }(AMP.BaseElement);

  // src/core/types/object/json.js
  function parseJson(json) {
    return JSON.parse(json);
  }
  function deepEquals(a, b, depth) {
    if (depth === void 0) {
      depth = 5;
    }
    if (!isFinite(depth) || depth < 0) {
      throw new Error("Invalid depth: " + depth);
    }
    if (a === b) {
      return true;
    }
    var queue = [{
      a: a,
      b: b,
      depth: depth
    }];
    while (queue.length > 0) {
      var _queue$shift = queue.shift(), _a = _queue$shift.a, _b = _queue$shift.b, _depth = _queue$shift.depth;
      if (_depth > 0) {
        if (typeof _a !== typeof _b) {
          return false;
        } else if (isArray(_a) && isArray(_b)) {
          if (_a.length !== _b.length) {
            return false;
          }
          for (var i = 0; i < _a.length; i++) {
            queue.push({
              a: _a[i],
              b: _b[i],
              depth: _depth - 1
            });
          }
          continue;
        } else if (_a && _b && typeof _a === "object" && typeof _b === "object") {
          var keysA = Object.keys(_a);
          var keysB = Object.keys(_b);
          if (keysA.length !== keysB.length) {
            return false;
          }
          for (var _i = 0, _keysA = keysA; _i < _keysA.length; _i++) {
            var k = _keysA[_i];
            queue.push({
              a: _a[k],
              b: _b[k],
              depth: _depth - 1
            });
          }
          continue;
        }
      }
      if (_a !== _b) {
        return false;
      }
    }
    return true;
  }

  // src/core/window/index.js
  function toWin(winOrNull) {
    return winOrNull;
  }
  function getWin(node) {
    return toWin((node.ownerDocument || node).defaultView);
  }

  // third_party/css-escape/css-escape.js
  var regex = /(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;
  function escaper(match, nil, dash, hexEscape, chars) {
    if (chars) {
      return chars;
    }
    if (nil) {
      return "\uFFFD";
    }
    if (hexEscape) {
      return match.slice(0, -1) + "\\" + match.slice(-1).charCodeAt(0).toString(16) + " ";
    }
    return "\\" + match;
  }
  function cssEscape(value) {
    return String(value).replace(regex, escaper);
  }

  // src/core/dom/css-selectors.js
  var scopeSelectorSupported;
  function isScopeSelectorSupported(el) {
    if (scopeSelectorSupported !== void 0) {
      return scopeSelectorSupported;
    }
    return scopeSelectorSupported = testScopeSelector(el);
  }
  function testScopeSelector(el) {
    try {
      var doc = el.ownerDocument;
      var testElement = doc.createElement("div");
      var testChild = doc.createElement("div");
      testElement.appendChild(testChild);
      return testElement.querySelector(":scope div") === testChild;
    } catch (e) {
      return false;
    }
  }
  function prependSelectorsWith(selector, distribute) {
    return selector.replace(/^|,/g, "$&" + distribute + " ");
  }
  function escapeCssSelectorIdent(ident) {
    if (isEsm()) {
      return CSS.escape(ident);
    }
    return cssEscape(ident);
  }
  function escapeCssSelectorNth(ident) {
    var escaped = String(ident);
    devAssert(escaped.indexOf(")") === -1);
    return escaped;
  }

  // src/core/dom/query.js
  function assertIsName(name) {
    devAssert(/^[\w-]+$/.test(name), 'Expected "' + name + '" to be a CSS name composed of alphanumerics and hyphens.');
  }
  function scopedQuerySelectionFallback(root, selector) {
    var unique = "i-amphtml-scoped";
    root.classList.add(unique);
    var scopedSelector = prependSelectorsWith(selector, "." + unique);
    var elements = root.querySelectorAll(scopedSelector);
    root.classList.remove(unique);
    return elements;
  }
  function scopedQuerySelector(root, selector) {
    if (isEsm() || isScopeSelectorSupported(root)) {
      return root.querySelector(prependSelectorsWith(selector, ":scope"));
    }
    var fallbackResult = scopedQuerySelectionFallback(root, selector);
    return fallbackResult[0] === void 0 ? null : fallbackResult[0];
  }
  function scopedQuerySelectorAll(root, selector) {
    if (isEsm() || isScopeSelectorSupported(root)) {
      return root.querySelectorAll(prependSelectorsWith(selector, ":scope"));
    }
    return scopedQuerySelectionFallback(root, selector);
  }
  function matches(el, selector) {
    var matcher = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector || el.oMatchesSelector;
    if (matcher) {
      return matcher.call(el, selector);
    }
    return false;
  }
  function closest(element, callback, opt_stopAt) {
    for (var el = element; el && el !== opt_stopAt; el = el.parentElement) {
      if (callback(el)) {
        return el;
      }
    }
    return null;
  }
  function closestAncestorElementBySelector(element, selector) {
    return element.closest ? element.closest(selector) : closest(element, function(el) {
      return matches(el, selector);
    });
  }
  function childElement(parent, callback) {
    for (var child = parent.firstElementChild; child; child = child.nextElementSibling) {
      if (callback(child)) {
        return child;
      }
    }
    return null;
  }
  function lastChildElement(parent, callback) {
    for (var child = parent.lastElementChild; child; child = child.previousElementSibling) {
      if (callback(child)) {
        return child;
      }
    }
    return null;
  }
  function childElements(parent, callback) {
    var children = [];
    for (var child = parent.firstElementChild; child; child = child.nextElementSibling) {
      if (callback(child)) {
        children.push(child);
      }
    }
    return children;
  }
  function childNodes(parent, callback) {
    var nodes = [];
    for (var child = parent.firstChild; child; child = child.nextSibling) {
      if (callback(child)) {
        nodes.push(child);
      }
    }
    return nodes;
  }
  function childElementByTag(parent, tagName) {
    assertIsName(tagName);
    return scopedQuerySelector(parent, "> " + tagName);
  }
  function childElementsByTag(parent, tagName) {
    assertIsName(tagName);
    return scopedQuerySelectorAll(parent, "> " + tagName);
  }

  // src/core/dom/index.js
  function waitForChild(parent, checkFunc, callback) {
    if (checkFunc(parent)) {
      callback();
      return;
    }
    var win = getWin(parent);
    if (isEsm() || win.MutationObserver) {
      var observer = new win.MutationObserver(function() {
        if (checkFunc(parent)) {
          observer.disconnect();
          callback();
        }
      });
      observer.observe(parent, {
        childList: true
      });
    } else {
      var interval = win.setInterval(function() {
        if (checkFunc(parent)) {
          win.clearInterval(interval);
          callback();
        }
      }, 5);
    }
  }
  function waitForBodyOpen(doc, callback) {
    waitForChild(doc.documentElement, function() {
      return !!doc.body;
    }, callback);
  }
  function waitForBodyOpenPromise(doc) {
    return new Promise(function(resolve) {
      return waitForBodyOpen(doc, resolve);
    });
  }
  function removeElement(element) {
    var _element$parentElemen;
    (_element$parentElemen = element.parentElement) == null ? void 0 : _element$parentElemen.removeChild(element);
  }
  function removeChildren(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  function copyChildren(from, to) {
    var frag = to.ownerDocument.createDocumentFragment();
    for (var n2 = from.firstChild; n2; n2 = n2.nextSibling) {
      frag.appendChild(n2.cloneNode(true));
    }
    to.appendChild(frag);
  }
  function addAttributesToElement(element, attributes) {
    for (var attr in attributes) {
      element.setAttribute(attr, attributes[attr]);
    }
    return element;
  }
  function isConnectedNode(node) {
    var connected = node.isConnected;
    if (connected !== void 0) {
      return connected;
    }
    var n2 = node;
    do {
      n2 = rootNodeFor(n2);
      if (n2.host) {
        n2 = n2.host;
      } else {
        break;
      }
    } while (true);
    return n2.nodeType === Node.DOCUMENT_NODE;
  }
  function rootNodeFor(node) {
    if (Node.prototype.getRootNode) {
      return node.getRootNode() || node;
    }
    var n2;
    for (n2 = node; !!n2.parentNode && !isShadowRoot(n2); n2 = n2.parentNode) {
    }
    return n2;
  }
  function isShadowRoot(value) {
    if (!value) {
      return false;
    }
    if (value.tagName == "I-AMPHTML-SHADOW-ROOT") {
      return true;
    }
    return value.nodeType == 11 && Object.prototype.toString.call(value) === "[object ShadowRoot]";
  }
  function getDataParamsFromAttributes(element, opt_computeParamNameFunc, opt_paramPattern) {
    var computeParamNameFunc = opt_computeParamNameFunc || function(key2) {
      return key2;
    };
    var dataset = element.dataset;
    var params = dict();
    var paramPattern = opt_paramPattern || /^param(.+)/;
    for (var key in dataset) {
      var _matches = key.match(paramPattern);
      if (_matches) {
        var param = _matches[1][0].toLowerCase() + _matches[1].substr(1);
        params[computeParamNameFunc(param)] = dataset[key];
      }
    }
    return params;
  }
  function iterateCursor(iterable, cb) {
    var length = iterable.length;
    for (var i = 0; i < length; i++) {
      cb(iterable[i], i);
    }
  }
  function isJsonScriptTag(element) {
    var _element$getAttribute;
    return element.tagName == "SCRIPT" && ((_element$getAttribute = element.getAttribute("type")) == null ? void 0 : _element$getAttribute.toUpperCase()) == "APPLICATION/JSON";
  }
  function isRTL(doc) {
    var dir = doc.body.getAttribute("dir") || doc.documentElement.getAttribute("dir") || "ltr";
    return dir == "rtl";
  }
  function tryFocus(element) {
    try {
      element.focus();
    } catch (e) {
    }
  }
  function getChildJsonConfig(element) {
    var scripts = childElementsByTag(element, "script");
    var length = scripts.length;
    if (length !== 1) {
      throw new Error("Found " + length + " <script> children. Expected 1.");
    }
    var script = scripts[0];
    if (!isJsonScriptTag(script)) {
      throw new Error('<script> child must have type="application/json"');
    }
    try {
      return parseJson(script.textContent);
    } catch (_unused) {
      throw new Error("Failed to parse <script> contents. Is it valid JSON?");
    }
  }

  // src/core/error/index.js
  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n2 = Object.prototype.toString.call(o).slice(8, -1);
    if (n2 === "Object" && o.constructor)
      n2 = o.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function duplicateErrorIfNecessary(error) {
    var messageProperty = Object.getOwnPropertyDescriptor(error, "message");
    if (messageProperty != null && messageProperty.writable) {
      return error;
    }
    var message = error.message, stack = error.stack;
    var e = new Error(message);
    for (var prop in error) {
      e[prop] = error[prop];
    }
    e.stack = stack;
    return e;
  }
  function createError(var_args) {
    var error = null;
    var message = "";
    for (var _iterator = _createForOfIteratorHelperLoose(arguments), _step; !(_step = _iterator()).done; ) {
      var arg = _step.value;
      if (arg instanceof Error && !error) {
        error = duplicateErrorIfNecessary(arg);
      } else {
        if (message) {
          message += " ";
        }
        message += arg;
      }
    }
    if (!error) {
      error = new Error(message);
    } else if (message) {
      error.message = message + ": " + error.message;
    }
    return error;
  }
  function maybeReportError(error) {
    self.__AMP_REPORT_ERROR == null ? void 0 : self.__AMP_REPORT_ERROR(error);
  }
  function createExpectedError(var_args) {
    var error = createError.apply(null, arguments);
    error.expected = true;
    return error;
  }
  function devError(tag) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    var error = createError.apply(null, args);
    error.name = tag || error.name;
    maybeReportError(error);
  }
  function devExpectedError(unusedTag) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    maybeReportError(createExpectedError.apply(null, args));
  }

  // src/core/types/function/index.js
  function once(fn) {
    var evaluated = false;
    var retValue = null;
    var callback = fn;
    return function() {
      if (!evaluated) {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        retValue = callback.apply(self, args);
        evaluated = true;
        callback = null;
      }
      return retValue;
    };
  }
  function debounce(win, callback, minInterval) {
    var locker = 0;
    var timestamp = 0;
    var nextCallArgs = null;
    function fire(args) {
      nextCallArgs = null;
      callback.apply(null, args);
    }
    function waiter() {
      locker = 0;
      var remaining = minInterval - (win.Date.now() - timestamp);
      if (remaining > 0) {
        locker = win.setTimeout(waiter, remaining);
      } else {
        fire(nextCallArgs);
      }
    }
    return function() {
      timestamp = win.Date.now();
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      nextCallArgs = args;
      if (!locker) {
        locker = win.setTimeout(waiter, minInterval);
      }
    };
  }

  // src/core/types/string/url.js
  var QUERY_STRING_REGEX = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
  function tryDecodeUriComponent(component, fallback) {
    if (fallback === void 0) {
      fallback = "";
    }
    try {
      return decodeURIComponent(component);
    } catch (e) {
      return fallback;
    }
  }
  function parseQueryString(queryString) {
    var params = map();
    if (!queryString) {
      return params;
    }
    var match;
    while (match = QUERY_STRING_REGEX.exec(queryString)) {
      var name = tryDecodeUriComponent(match[1], match[1]);
      var value = match[2] ? tryDecodeUriComponent(match[2].replace(/\+/g, " "), match[2]) : "";
      params[name] = value;
    }
    return params;
  }
  function getHashParams(opt_win) {
    var _ref = opt_win || self, location = _ref.location;
    return parseQueryString(location["originalHash"] || location.hash);
  }

  // src/config.js
  var env = self.AMP_CONFIG || {};
  var thirdPartyFrameRegex = (typeof env["thirdPartyFrameRegex"] == "string" ? new RegExp(env["thirdPartyFrameRegex"]) : env["thirdPartyFrameRegex"]) || /^d-\d+\.ampproject\.net$/;
  var cdnProxyRegex = (typeof env["cdnProxyRegex"] == "string" ? new RegExp(env["cdnProxyRegex"]) : env["cdnProxyRegex"]) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;
  function getMetaUrl(name) {
    if (!self.document || !self.document.head) {
      return null;
    }
    if (self.location && cdnProxyRegex.test(self.location.origin)) {
      return null;
    }
    var metaEl = self.document.head.querySelector('meta[name="' + name + '"]');
    return metaEl && metaEl.getAttribute("content") || null;
  }
  var urls = {
    thirdParty: env["thirdPartyUrl"] || "https://3p.ampproject.net",
    thirdPartyFrameHost: env["thirdPartyFrameHost"] || "ampproject.net",
    thirdPartyFrameRegex: thirdPartyFrameRegex,
    cdn: env["cdnUrl"] || getMetaUrl("runtime-host") || "https://cdn.ampproject.org",
    cdnProxyRegex: cdnProxyRegex,
    localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
    errorReporting: env["errorReportingUrl"] || "https://us-central1-amp-error-reporting.cloudfunctions.net/r",
    betaErrorReporting: env["betaErrorReportingUrl"] || "https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",
    localDev: env["localDev"] || false,
    trustedViewerHosts: [/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/, /(^|\.)gmail\.(com|dev)$/],
    geoApi: env["geoApiUrl"] || getMetaUrl("amp-geo-api")
  };

  // src/mode.js
  var rtvVersion = "";
  function getMode(opt_win) {
    var win = opt_win || self;
    if (win.__AMP_MODE) {
      return win.__AMP_MODE;
    }
    return win.__AMP_MODE = getMode_(win);
  }
  function getMode_(win) {
    var hashParams = getHashParams(win);
    return {
      localDev: isLocalDev(win),
      development: isModeDevelopment(win, hashParams),
      esm: isEsm(),
      test: isTest(win),
      rtvVersion: getRtvVersion(win)
    };
  }
  function getRtvVersion(win) {
    if (!rtvVersion || isTest(win)) {
      var _win$AMP_CONFIG;
      rtvVersion = ((_win$AMP_CONFIG = win.AMP_CONFIG) == null ? void 0 : _win$AMP_CONFIG.v) || "01" + version();
    }
    return rtvVersion;
  }
  function isModeDevelopment(win, opt_hashParams) {
    var devModes = ["1", "actions", "amp", "amp4ads", "amp4email"];
    var devParam = opt_hashParams || getHashParams(win);
    return devModes.includes(devParam["development"]) || !!win.AMP_DEV_MODE;
  }

  // src/utils/log.js
  var LogLevel_Enum = {
    OFF: 0,
    ERROR: 1,
    WARN: 2,
    INFO: 3,
    FINE: 4
  };
  self.__AMP_LOG = self.__AMP_LOG || {
    user: null,
    dev: null,
    userForEmbed: null
  };
  var logs = self.__AMP_LOG;
  var logConstructor = null;
  function callLogConstructor(levelFunc, opt_suffix) {
    if (!logConstructor) {
      throw new Error("failed to call initLogConstructor");
    }
    return new logConstructor(self, levelFunc, opt_suffix);
  }
  function user(opt_element) {
    if (!logs.user) {
      logs.user = getUserLogger(USER_ERROR_SENTINEL);
    }
    if (isFromEmbed(logs.user.win, opt_element)) {
      return logs.userForEmbed || (logs.userForEmbed = getUserLogger(USER_ERROR_EMBED_SENTINEL));
    }
    return logs.user;
  }
  function getUserLogger(suffix) {
    return callLogConstructor(function(logNum, development) {
      return development || logNum >= 1 ? LogLevel_Enum.FINE : LogLevel_Enum.WARN;
    }, suffix);
  }
  function dev() {
    return logs.dev || (logs.dev = callLogConstructor(function(logNum) {
      return logNum >= 3 ? LogLevel_Enum.FINE : logNum >= 2 ? LogLevel_Enum.INFO : LogLevel_Enum.OFF;
    }));
  }
  function isFromEmbed(win, opt_element) {
    return opt_element && opt_element.ownerDocument.defaultView != win;
  }
  function devAssert2(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    if (isMinified()) {
      return shouldBeTrueish;
    }
    if (self.__AMP_ASSERTION_CHECK) {
      console.log("__devAssert_sentinel__");
    }
    return dev().assert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
  }
  function userAssert2(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    return user().assert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
  }

  // extensions/amp-story/1.0/amp-story-cta-layer.js
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf2(subClass, superClass);
  }
  function _setPrototypeOf2(o, p) {
    _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf13(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf2(o, p);
  }
  function _createSuper2(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct2();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf2(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf2(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn2(this, result);
    };
  }
  function _possibleConstructorReturn2(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized2(self2);
  }
  function _assertThisInitialized2(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct2() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf2(o) {
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf13(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf2(o);
  }
  var TAG = "amp-story-cta-layer";
  var AmpStoryCtaLayer = /* @__PURE__ */ function(_AmpStoryBaseLayer) {
    _inherits2(AmpStoryCtaLayer2, _AmpStoryBaseLayer);
    var _super = _createSuper2(AmpStoryCtaLayer2);
    function AmpStoryCtaLayer2() {
      return _super.apply(this, arguments);
    }
    var _proto = AmpStoryCtaLayer2.prototype;
    _proto.buildCallback = function buildCallback() {
      _AmpStoryBaseLayer.prototype.buildCallback.call(this);
      this.setOrOverwriteAttributes_();
      this.checkAndRemoveLayerIfOnFirstPage_();
    };
    _proto.setOrOverwriteAttributes_ = function setOrOverwriteAttributes_() {
      var ctaLinks = this.element.querySelectorAll("a");
      for (var i = 0; i < ctaLinks.length; i++) {
        ctaLinks[i].setAttribute("target", "_blank");
        if (!ctaLinks[i].getAttribute("role")) {
          ctaLinks[i].setAttribute("role", "link");
        }
      }
      var ctaButtons = this.element.querySelectorAll("button");
      for (var _i = 0; _i < ctaButtons.length; _i++) {
        if (!ctaButtons[_i].getAttribute("role")) {
          ctaButtons[_i].setAttribute("role", "button");
        }
      }
    };
    _proto.checkAndRemoveLayerIfOnFirstPage_ = function checkAndRemoveLayerIfOnFirstPage_() {
      if (matches(this.element, "amp-story-page:first-of-type > amp-story-cta-layer")) {
        removeElement(this.element);
        user().error(TAG, "amp-story-cta-layer is not allowed on the first page of an amp-story.");
      }
    };
    return AmpStoryCtaLayer2;
  }(AmpStoryBaseLayer);

  // src/core/dom/style.js
  var propertyNameCache;
  var vendorPrefixes = ["Webkit", "webkit", "Moz", "moz", "ms", "O", "o"];
  var DISPLAY_STYLE_MESSAGE = "`display` style detected. You must use toggle instead.";
  var EMPTY_CSS_DECLARATION = {
    "getPropertyPriority": function getPropertyPriority() {
      return "";
    },
    "getPropertyValue": function getPropertyValue() {
      return "";
    }
  };
  function camelCaseToTitleCase(camelCase) {
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
  }
  function getVendorJsPropertyName_(style, titleCase) {
    for (var i = 0; i < vendorPrefixes.length; i++) {
      var propertyName = vendorPrefixes[i] + titleCase;
      if (style[propertyName] !== void 0) {
        return propertyName;
      }
    }
    return "";
  }
  function getVendorJsPropertyName(style, camelCase, opt_bypassCache) {
    if (isVar(camelCase)) {
      return camelCase;
    }
    if (!propertyNameCache) {
      propertyNameCache = map();
    }
    var propertyName = propertyNameCache[camelCase];
    if (!propertyName || opt_bypassCache) {
      propertyName = camelCase;
      if (style[camelCase] === void 0) {
        var titleCase = camelCaseToTitleCase(camelCase);
        var prefixedPropertyName = getVendorJsPropertyName_(style, titleCase);
        if (style[prefixedPropertyName] !== void 0) {
          propertyName = prefixedPropertyName;
        }
      }
      if (!opt_bypassCache) {
        propertyNameCache[camelCase] = propertyName;
      }
    }
    return propertyName;
  }
  function setImportantStyles(element, styles) {
    var style = element.style;
    for (var k in styles) {
      style.setProperty(getVendorJsPropertyName(style, k), String(styles[k]), "important");
    }
  }
  function setStyle(element, property, value, opt_units, opt_bypassCache) {
    var propertyName = getVendorJsPropertyName(element.style, property, opt_bypassCache);
    if (!propertyName) {
      return;
    }
    var styleValue = opt_units ? value + opt_units : value;
    if (isVar(propertyName)) {
      element.style.setProperty(propertyName, styleValue);
    } else {
      element.style[propertyName] = styleValue;
    }
  }
  function setStyles(element, styles) {
    for (var k in styles) {
      setStyle(element, k, styles[k]);
    }
  }
  function toggle(element, opt_display) {
    if (opt_display === void 0) {
      opt_display = element.hasAttribute("hidden");
    }
    if (opt_display) {
      element.removeAttribute("hidden");
    } else {
      element.setAttribute("hidden", "");
    }
  }
  function px(value) {
    return value + "px";
  }
  function deg(value) {
    return value + "deg";
  }
  function units(value, fn) {
    return typeof value == "number" ? fn(value) : value;
  }
  function translate(x2, opt_y) {
    return opt_y === void 0 || opt_y === null ? "translate(" + units(x2, px) + ")" : "translate(" + units(x2, px) + ", " + units(opt_y, px) + ")";
  }
  function scale(value) {
    return "scale(" + value + ")";
  }
  function rotate(value) {
    return "rotate(" + units(value, deg) + ")";
  }
  function computedStyle(win, el) {
    var style = win.getComputedStyle(el);
    return style || EMPTY_CSS_DECLARATION;
  }
  function resetStyles(element, properties) {
    for (var i = 0; i < properties.length; i++) {
      setStyle(element, properties[i], null);
    }
  }
  function isVar(property) {
    return property.startsWith("--");
  }
  function assertDoesNotContainDisplay(styles) {
    if ("display" in styles) {
      devError("STYLE", DISPLAY_STYLE_MESSAGE);
    }
    return styles;
  }

  // extensions/amp-story/1.0/prerender-active-page.js
  function isPrerenderActivePage(pageElement) {
    var win = getWin(pageElement);
    var hashId = parseQueryString(win.location.href)["page"];
    var selector = "amp-story-page:first-of-type";
    if (hashId) {
      selector += ", amp-story-page#" + escapeCssSelectorIdent(hashId);
    }
    var selectorNodes = win.document.querySelectorAll(selector);
    return selectorNodes[selectorNodes.length - 1] === pageElement;
  }

  // extensions/amp-story/1.0/amp-story-grid-layer.js
  function _inherits3(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf3(subClass, superClass);
  }
  function _setPrototypeOf3(o, p) {
    _setPrototypeOf3 = Object.setPrototypeOf || function _setPrototypeOf13(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf3(o, p);
  }
  function _createSuper3(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct3();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf3(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf3(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn3(this, result);
    };
  }
  function _possibleConstructorReturn3(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized3(self2);
  }
  function _assertThisInitialized3(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct3() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf3(o) {
    _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf13(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf3(o);
  }
  var SUPPORTED_CSS_GRID_ATTRIBUTES = {
    "align-content": "alignContent",
    "align-items": "alignItems",
    "align-self": "alignSelf",
    "grid-area": "gridArea",
    "justify-content": "justifyContent",
    "justify-items": "justifyItems",
    "justify-self": "justifySelf"
  };
  var SUPPORTED_CSS_GRID_ATTRIBUTES_SELECTOR = Object.keys(SUPPORTED_CSS_GRID_ATTRIBUTES).map(function(key) {
    return "[" + key + "]";
  }).join(",");
  var AmpStoryGridLayer = /* @__PURE__ */ function(_AmpStoryBaseLayer) {
    _inherits3(AmpStoryGridLayer2, _AmpStoryBaseLayer);
    var _super = _createSuper3(AmpStoryGridLayer2);
    AmpStoryGridLayer2.prerenderAllowed = function prerenderAllowed(element) {
      return isPrerenderActivePage(element.parentElement);
    };
    function AmpStoryGridLayer2(element) {
      return _super.call(this, element);
    }
    var _proto = AmpStoryGridLayer2.prototype;
    _proto.buildCallback = function buildCallback() {
      _AmpStoryBaseLayer.prototype.buildCallback.call(this);
      this.applyAspectRatioAttributes_();
      this.setOwnCssGridStyles_();
      this.setDescendentCssGridStyles_();
    };
    _proto.applyAspectRatioAttributes_ = function applyAspectRatioAttributes_() {
      if (!this.element.hasAttribute("aspect-ratio")) {
        return;
      }
      setImportantStyles(this.element, {
        "--aspect-ratio": this.element.getAttribute("aspect-ratio").replace(":", "/")
      });
    };
    _proto.setDescendentCssGridStyles_ = function setDescendentCssGridStyles_() {
      var _this = this;
      var elementsToUpgradeStyles = scopedQuerySelectorAll(this.element, SUPPORTED_CSS_GRID_ATTRIBUTES_SELECTOR);
      Array.prototype.forEach.call(elementsToUpgradeStyles, function(element) {
        _this.setCssGridStyles_(element);
      });
    };
    _proto.setOwnCssGridStyles_ = function setOwnCssGridStyles_() {
      this.setCssGridStyles_(this.element);
    };
    _proto.setCssGridStyles_ = function setCssGridStyles_(element) {
      var styles = {};
      for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes[i];
        var attributeName = attribute.name.toLowerCase();
        var propertyName = SUPPORTED_CSS_GRID_ATTRIBUTES[attributeName];
        if (propertyName) {
          styles[propertyName] = attribute.value;
          element.removeAttribute(attributeName);
        }
      }
      setStyles(element, assertDoesNotContainDisplay(styles));
    };
    return AmpStoryGridLayer2;
  }(AmpStoryBaseLayer);

  // src/core/dom/jsx.js
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function appendChild(parent, child) {
    if (!!child === child || child == null) {
      return;
    }
    if (Array.isArray(child)) {
      var children = child;
      children.forEach(function(child2) {
        appendChild(parent, child2);
      });
      return;
    }
    var maybeNode = child;
    parent.appendChild(maybeNode.nodeType ? maybeNode : self.document.createTextNode(String(child)));
  }
  function setAttribute(element, name, value) {
    if (value === false || value == null) {
      return;
    }
    if (typeof value === "function" && name[0] === "o" && name[1] === "n") {
      var eventName = name.toLowerCase().substr(2);
      element.addEventListener(eventName, value);
      return;
    }
    element.setAttribute(name, value === true ? "" : String(value));
  }
  function createElement(tag, props) {
    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }
    if (typeof tag !== "string") {
      return tag(_extends({}, props, {
        children: children
      }));
    }
    var xmlns = props == null ? void 0 : props["xmlns"];
    if (xmlns) {
      delete props["xmlns"];
    }
    var element = xmlns ? self.document.createElementNS(xmlns, tag) : self.document.createElement(tag);
    appendChild(element, children);
    if (props) {
      Object.keys(props).forEach(function(name) {
        setAttribute(element, name, props[name]);
      });
    }
    return element;
  }

  // src/core/dom/video/index.js
  function detectIsAutoplaySupported(win) {
    var detectionElement = win.document.createElement("video");
    detectionElement.setAttribute("muted", "");
    detectionElement.setAttribute("playsinline", "");
    detectionElement.setAttribute("webkit-playsinline", "");
    detectionElement.setAttribute("height", "0");
    detectionElement.setAttribute("width", "0");
    detectionElement.muted = true;
    detectionElement.playsInline = true;
    detectionElement["playsinline"] = true;
    detectionElement["webkitPlaysinline"] = true;
    setStyles(detectionElement, {
      position: "fixed",
      top: "0",
      width: "0",
      height: "0",
      opacity: "0"
    });
    playIgnoringError(detectionElement);
    return Promise.resolve(!detectionElement.paused);
  }
  var AUTOPLAY_SUPPORTED_WIN_PROP = "__AMP_AUTOPLAY";
  function isAutoplaySupported(win) {
    if (win[AUTOPLAY_SUPPORTED_WIN_PROP] == null) {
      win[AUTOPLAY_SUPPORTED_WIN_PROP] = detectIsAutoplaySupported(win);
    }
    return win[AUTOPLAY_SUPPORTED_WIN_PROP];
  }
  function tryPlay(element, isAutoplay) {
    var promise = tryResolve(function() {
      return element.play(!!isAutoplay);
    });
    promise.catch(function(err) {
      devExpectedError("TRYPLAY", err);
    });
    return promise;
  }
  function playIgnoringError(element) {
    tryResolve(function() {
      return element.play();
    }).catch(function() {
    });
  }

  // src/service/extension-script.js
  function parseExtensionUrl(scriptUrl) {
    if (!scriptUrl) {
      return null;
    }
    var matches2 = scriptUrl.match(/^(.*)\/(.*)-([0-9.]+|latest)(\.max)?\.(?:js|mjs)$/i);
    var extensionId = matches2 ? matches2[2] : void 0;
    var extensionVersion = matches2 ? matches2[3] : void 0;
    if (!extensionId || !extensionVersion) {
      return null;
    }
    return {
      extensionId: extensionId,
      extensionVersion: extensionVersion
    };
  }
  function extensionScriptsInNode(head) {
    if (!head) {
      return [];
    }
    var list = head.querySelectorAll("script[custom-element],script[custom-template]");
    var scripts = [];
    for (var i = 0; i < list.length; i++) {
      var script = list[i];
      var extensionId = script.getAttribute("custom-element") || script.getAttribute("custom-template");
      var urlParts = parseExtensionUrl(script.src);
      if (extensionId && urlParts) {
        scripts.push({
          script: script,
          extensionId: extensionId,
          extensionVersion: urlParts.extensionVersion
        });
      }
    }
    return scripts;
  }
  function extensionScriptInNode(win, id, version2) {
    return extensionScriptsInNode(win.document.head).some(function(_ref) {
      var extensionId = _ref.extensionId, extensionVersion = _ref.extensionVersion;
      return id == extensionId && version2 == extensionVersion;
    });
  }

  // src/service-helpers.js
  function registerServiceBuilder(win, id, constructor, opt_instantiate) {
    win = getTopWindow(win);
    registerServiceInternal(win, win, id, constructor);
    if (opt_instantiate) {
      getServiceInternal(win, id);
    }
  }
  function registerServiceBuilderForDoc(nodeOrDoc, id, constructor, opt_instantiate) {
    var ampdoc2 = getAmpdoc(nodeOrDoc);
    var holder = getAmpdocServiceHolder(ampdoc2);
    registerServiceInternal(holder, ampdoc2, id, constructor);
    if (opt_instantiate) {
      getServiceInternal(holder, id);
    }
  }
  function getService(win, id) {
    win = getTopWindow(win);
    return getServiceInternal(win, id);
  }
  function getServiceInEmbedWin(win, id) {
    return getServiceInternal(win, id);
  }
  function getServicePromise(win, id) {
    return getServicePromiseInternal(win, id);
  }
  function getExistingServiceOrNull(win, id) {
    win = getTopWindow(win);
    if (isServiceRegistered(win, id)) {
      return getServiceInternal(win, id);
    } else {
      return null;
    }
  }
  function getServicePromiseOrNull(win, id) {
    return getServicePromiseOrNullInternal(win, id);
  }
  function getServiceForDoc(elementOrAmpDoc, id) {
    var ampdoc2 = getAmpdoc(elementOrAmpDoc);
    var holder = getAmpdocServiceHolder(ampdoc2);
    return getServiceInternal(holder, id);
  }
  function getServiceForDocOrNull(elementOrAmpDoc, id) {
    var ampdoc2 = getAmpdoc(elementOrAmpDoc);
    var holder = getAmpdocServiceHolder(ampdoc2);
    if (isServiceRegistered(holder, id)) {
      return getServiceInternal(holder, id);
    } else {
      return null;
    }
  }
  function getServicePromiseForDoc(elementOrAmpDoc, id) {
    return getServicePromiseInternal(getAmpdocServiceHolder(elementOrAmpDoc), id);
  }
  function getServicePromiseOrNullForDoc(elementOrAmpDoc, id) {
    return getServicePromiseOrNullInternal(getAmpdocServiceHolder(elementOrAmpDoc), id);
  }
  function getTopWindow(win) {
    return win.__AMP_TOP || (win.__AMP_TOP = win);
  }
  function getAmpdoc(nodeOrDoc) {
    if (nodeOrDoc.nodeType) {
      var win = getWin(nodeOrDoc);
      return getAmpdocService(win).getAmpDoc(nodeOrDoc);
    }
    return nodeOrDoc;
  }
  function getAmpdocServiceHolder(nodeOrDoc) {
    var ampdoc2 = getAmpdoc(nodeOrDoc);
    return ampdoc2.isSingleDoc() ? ampdoc2.win : ampdoc2;
  }
  function getAmpdocService(win) {
    return getService(win, "ampdoc");
  }
  function getServiceInternal(holder, id) {
    devAssert2(isServiceRegistered(holder, id), "Expected service " + id + " to be registered");
    var services = getServices(holder);
    var s = services[id];
    if (!s.obj) {
      devAssert2(s.ctor, "Service " + id + " registered without ctor nor impl.");
      devAssert2(s.context, "Service " + id + " registered without context.");
      s.obj = new s.ctor(s.context);
      devAssert2(s.obj, "Service " + id + " constructed to null.");
      s.context = null;
      if (s.resolve) {
        s.resolve(s.obj);
      }
    }
    return s.obj;
  }
  function registerServiceInternal(holder, context, id, ctor, opt_override, opt_sharedInstance) {
    var services = getServices(holder);
    var s = services[id];
    if (!s) {
      s = services[id] = {
        obj: null,
        promise: null,
        resolve: null,
        reject: null,
        context: null,
        ctor: null,
        sharedInstance: opt_sharedInstance || false
      };
    }
    if (!opt_override && s.ctor) {
      return;
    }
    s.ctor = ctor;
    s.context = context;
    s.sharedInstance = opt_sharedInstance || false;
    if (s.resolve) {
      getServiceInternal(holder, id);
    }
  }
  function getServicePromiseInternal(holder, id) {
    var cached = getServicePromiseOrNullInternal(holder, id);
    if (cached) {
      return cached;
    }
    var services = getServices(holder);
    services[id] = emptyServiceHolderWithPromise();
    return services[id].promise;
  }
  function getServicePromiseOrNullInternal(holder, id) {
    var services = getServices(holder);
    var s = services[id];
    if (s) {
      if (s.promise) {
        return s.promise;
      } else {
        getServiceInternal(holder, id);
        return s.promise = Promise.resolve(s.obj);
      }
    }
    return null;
  }
  function getServices(holder) {
    var services = holder.__AMP_SERVICES;
    if (!services) {
      services = holder.__AMP_SERVICES = {};
    }
    return services;
  }
  function isServiceRegistered(holder, id) {
    var service = holder.__AMP_SERVICES && holder.__AMP_SERVICES[id];
    return !!(service && service.ctor);
  }
  function emptyServiceHolderWithPromise() {
    var deferred = new Deferred();
    var promise = deferred.promise, reject = deferred.reject, resolve = deferred.resolve;
    promise.catch(function() {
    });
    return {
      obj: null,
      promise: promise,
      resolve: resolve,
      reject: reject,
      context: null,
      ctor: null
    };
  }

  // src/element-service.js
  function getElementServiceIfAvailable(win, id, extension, version2, opt_element) {
    var s = getServicePromiseOrNull(win, id);
    if (s) {
      return s;
    }
    return getElementServicePromiseOrNull(win, id, extension, version2, opt_element);
  }
  function getElementServiceForDoc(element, id, extension, opt_element) {
    return getElementServiceIfAvailableForDoc(element, id, extension, opt_element).then(function(service) {
      return assertService(service, id, extension);
    });
  }
  function getElementServiceIfAvailableForDoc(element, id, extension, opt_element) {
    var s = getServicePromiseOrNullForDoc(element, id);
    if (s) {
      return s;
    }
    var ampdoc2 = getAmpdoc(element);
    return ampdoc2.whenExtensionsKnown().then(function() {
      var version2 = ampdoc2.getExtensionVersion(extension);
      if (!version2) {
        return null;
      }
      var extensions = getService(ampdoc2.win, "extensions");
      return extensions.waitForExtension(extension, version2);
    }).then(function(ext) {
      if (!ext) {
        return null;
      }
      if (opt_element) {
        return getServicePromiseOrNullForDoc(element, id);
      }
      return getServicePromiseForDoc(element, id);
    });
  }
  function getElementServiceIfAvailableForDocInEmbedScope(element, id, extension) {
    var s = getServiceForDocOrNull(element, id);
    if (s) {
      return Promise.resolve(s);
    }
    return getElementServiceIfAvailableForDoc(element, id, extension);
  }
  function assertService(service, id, extension) {
    return userAssert2(service, "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.", id, extension, extension, extension);
  }
  function getElementServicePromiseOrNull(win, id, extension, version2, opt_element) {
    return waitForBodyOpenPromise(win.document).then(function() {
      var extensions = getService(win, "extensions");
      if (!extensionScriptInNode(extensions.win, extension, version2)) {
        return null;
      }
      return extensions.waitForExtension(extension, version2);
    }).then(function(ext) {
      if (!ext) {
        return null;
      }
      if (opt_element) {
        return getServicePromiseOrNull(win, id);
      }
      return getServicePromise(win, id);
    });
  }

  // src/service/index.js
  function ampdocServiceForInternal(window2) {
    return getService(window2, "ampdoc");
  }
  function ampdocInternal(nodeOrAmpDoc) {
    return getAmpdoc(nodeOrAmpDoc);
  }
  function extensionsForInternal(window2) {
    return getService(window2, "extensions");
  }
  var Services = {
    accessServiceForDoc: function accessServiceForDoc(element) {
      return getElementServiceForDoc(element, "access", "amp-access");
    },
    accessServiceForDocOrNull: function accessServiceForDocOrNull(element) {
      return getElementServiceIfAvailableForDoc(element, "access", "amp-access");
    },
    subscriptionsServiceForDoc: function subscriptionsServiceForDoc(element) {
      return getElementServiceForDoc(element, "subscriptions", "amp-subscriptions");
    },
    subscriptionsServiceForDocOrNull: function subscriptionsServiceForDocOrNull(element) {
      return getElementServiceIfAvailableForDoc(element, "subscriptions", "amp-subscriptions");
    },
    actionServiceForDoc: function actionServiceForDoc(element) {
      return getServiceForDocOrNull(element, "action");
    },
    standardActionsForDoc: function standardActionsForDoc(element) {
      return getServiceForDocOrNull(element, "standard-actions");
    },
    activityForDoc: function activityForDoc(element) {
      return getElementServiceForDoc(element, "activity", "amp-analytics");
    },
    ampdoc: function ampdoc(nodeOrAmpdoc) {
      return ampdocInternal(nodeOrAmpdoc);
    },
    ampdocServiceFor: function ampdocServiceFor(win) {
      return ampdocServiceForInternal(win);
    },
    analyticsForDoc: function analyticsForDoc(element, loadAnalytics) {
      if (loadAnalytics === void 0) {
        loadAnalytics = false;
      }
      if (loadAnalytics) {
        var ampdoc2 = getAmpdoc(element);
        extensionsForInternal(ampdoc2.win).installExtensionForDoc(ampdoc2, "amp-analytics");
      }
      return getElementServiceForDoc(element, "amp-analytics-instrumentation", "amp-analytics");
    },
    analyticsForDocOrNull: function analyticsForDocOrNull(element) {
      return getElementServiceIfAvailableForDoc(element, "amp-analytics-instrumentation", "amp-analytics");
    },
    batchedXhrFor: function batchedXhrFor(window2) {
      return getService(window2, "batched-xhr");
    },
    bindForDocOrNull: function bindForDocOrNull(element) {
      return getElementServiceIfAvailableForDocInEmbedScope(element, "bind", "amp-bind");
    },
    scriptForDocOrNull: function scriptForDocOrNull(element) {
      return getElementServiceIfAvailableForDocInEmbedScope(element, "amp-script", "amp-script");
    },
    cidForDoc: function cidForDoc(elementOrAmpDoc) {
      return getServicePromiseForDoc(elementOrAmpDoc, "cid");
    },
    navigationForDoc: function navigationForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "navigation");
    },
    loaderServiceForDoc: function loaderServiceForDoc(element) {
      return getElementServiceForDoc(element, "loader", "amp-loader");
    },
    standaloneServiceForDoc: function standaloneServiceForDoc(element) {
      return getElementServiceForDoc(element, "standalone", "amp-standalone");
    },
    cryptoFor: function cryptoFor(window2) {
      return getService(window2, "crypto");
    },
    documentInfoForDoc: function documentInfoForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "documentInfo").get();
    },
    extensionsFor: function extensionsFor(win) {
      return extensionsForInternal(win);
    },
    formSubmitForDoc: function formSubmitForDoc(elementOrAmpDoc) {
      return getServicePromiseForDoc(elementOrAmpDoc, "form-submit-service");
    },
    hiddenObserverForDoc: function hiddenObserverForDoc(element) {
      return getServiceForDocOrNull(element, "hidden-observer");
    },
    historyForDoc: function historyForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "history");
    },
    inputFor: function inputFor(win) {
      return getService(win, "input");
    },
    inputmaskServiceForDocOrNull: function inputmaskServiceForDocOrNull(element) {
      return getElementServiceIfAvailableForDoc(element, "inputmask", "amp-inputmask");
    },
    loadingIndicatorOrNull: function loadingIndicatorOrNull(elementOrAmpDoc) {
      return getServiceForDocOrNull(elementOrAmpDoc, "loadingIndicator");
    },
    nextPageServiceForDoc: function nextPageServiceForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "next-page");
    },
    mutatorForDoc: function mutatorForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "mutator");
    },
    ownersForDoc: function ownersForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "owners");
    },
    performanceFor: function performanceFor(window2) {
      return getService(window2, "performance");
    },
    performanceForOrNull: function performanceForOrNull(window2) {
      return getExistingServiceOrNull(window2, "performance");
    },
    platformFor: function platformFor(window2) {
      return getService(window2, "platform");
    },
    positionObserverForDoc: function positionObserverForDoc(element) {
      return getServiceForDoc(element, "position-observer");
    },
    preconnectFor: function preconnectFor(window2) {
      return getService(window2, "preconnect");
    },
    resourcesForDoc: function resourcesForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "resources");
    },
    resourcesPromiseForDoc: function resourcesPromiseForDoc(elementOrAmpDoc) {
      return getServicePromiseForDoc(elementOrAmpDoc, "resources");
    },
    storyVariableServiceForOrNull: function storyVariableServiceForOrNull(win) {
      return getElementServiceIfAvailable(win, "story-variable", "amp-story", "1.0");
    },
    storyVariableService: function storyVariableService(win) {
      return getExistingServiceOrNull(win, "story-variable");
    },
    storyStoreServiceForOrNull: function storyStoreServiceForOrNull(win) {
      return getElementServiceIfAvailable(win, "story-store", "amp-story", "1.0");
    },
    storyStoreService: function storyStoreService(win) {
      return getExistingServiceOrNull(win, "story-store");
    },
    storyRequestServiceForOrNull: function storyRequestServiceForOrNull(win) {
      return getElementServiceIfAvailable(win, "story-request", "amp-story", "1.0");
    },
    storyRequestService: function storyRequestService(win) {
      return getExistingServiceOrNull(win, "story-request");
    },
    mediaPerformanceMetricsService: function mediaPerformanceMetricsService(win) {
      return getExistingServiceOrNull(win, "media-performance-metrics");
    },
    localizationServiceForOrNull: function localizationServiceForOrNull(el) {
      return getServicePromiseForDoc(el, "localization");
    },
    localizationForDoc: function localizationForDoc(element) {
      return getServiceForDocOrNull(element, "localization");
    },
    storyAnalyticsServiceForOrNull: function storyAnalyticsServiceForOrNull(win) {
      return getElementServiceIfAvailable(win, "story-analytics", "amp-story", "1.0", true);
    },
    storyAnalyticsService: function storyAnalyticsService(win) {
      return getExistingServiceOrNull(win, "story-analytics");
    },
    webAnimationServiceFor: function webAnimationServiceFor(element) {
      return getElementServiceForDoc(element, "web-animation", "amp-animation");
    },
    realTimeConfigForDoc: function realTimeConfigForDoc(elementOrAmpDoc) {
      return getServicePromiseForDoc(elementOrAmpDoc, "real-time-config");
    },
    storageForDoc: function storageForDoc(elementOrAmpDoc) {
      return getServicePromiseForDoc(elementOrAmpDoc, "storage");
    },
    storageForTopLevelDoc: function storageForTopLevelDoc(elementOrAmpDoc) {
      var thisAmpdoc = ampdocInternal(elementOrAmpDoc);
      var ampdocService = ampdocServiceForInternal(thisAmpdoc.win);
      var topAmpdoc = ampdocService.isSingleDoc() ? ampdocService.getSingleDoc() : null;
      var ampdoc2 = topAmpdoc && topAmpdoc.win == thisAmpdoc.win ? topAmpdoc : thisAmpdoc;
      return getServicePromiseForDoc(ampdoc2, "storage");
    },
    templatesForDoc: function templatesForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "templates");
    },
    timerFor: function timerFor(window2) {
      return getServiceInEmbedWin(window2, "timer");
    },
    urlReplacementsForDoc: function urlReplacementsForDoc(element) {
      return getServiceForDocOrNull(element, "url-replace");
    },
    userNotificationManagerForDoc: function userNotificationManagerForDoc(element) {
      return getElementServiceForDoc(element, "userNotificationManager", "amp-user-notification");
    },
    consentPolicyServiceForDocOrNull: function consentPolicyServiceForDocOrNull(element) {
      return getElementServiceIfAvailableForDoc(element, "consentPolicyManager", "amp-consent");
    },
    geoForDocOrNull: function geoForDocOrNull(element) {
      return getElementServiceIfAvailableForDoc(element, "geo", "amp-geo", true);
    },
    urlForDoc: function urlForDoc(element) {
      return getServiceForDocOrNull(element, "url");
    },
    variantsForDocOrNull: function variantsForDocOrNull(element) {
      return getElementServiceIfAvailableForDoc(element, "variant", "amp-experiment", true);
    },
    videoManagerForDoc: function videoManagerForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "video-manager");
    },
    viewerForDoc: function viewerForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "viewer");
    },
    viewerPromiseForDoc: function viewerPromiseForDoc(elementOrAmpDoc) {
      return getServicePromiseForDoc(elementOrAmpDoc, "viewer");
    },
    vsyncFor: function vsyncFor(window2) {
      return getService(window2, "vsync");
    },
    viewportForDoc: function viewportForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "viewport");
    },
    xhrFor: function xhrFor(window2) {
      return getService(window2, "xhr");
    },
    cacheUrlServicePromiseForDoc: function cacheUrlServicePromiseForDoc(elementOrAmpDoc) {
      return getServicePromiseForDoc(elementOrAmpDoc, "cache-url");
    }
  };

  // extensions/amp-story/1.0/embed-mode.js
  var EmbedMode = {
    NOT_EMBEDDED: 0,
    NAME_TBD: 1,
    NO_SHARING: 2,
    PREVIEW: 3,
    NO_SHARING_NOR_AUDIO_UI: 4
  };
  var EmbedModeParam = "embedMode";
  function parseEmbedMode(str) {
    var params = parseQueryString(str);
    var unsanitizedEmbedMode = params[EmbedModeParam];
    var embedModeIndex = parseInt(unsanitizedEmbedMode, 10);
    return isEnumValue(EmbedMode, embedModeIndex) ? embedModeIndex : EmbedMode.NOT_EMBEDDED;
  }
  function isPreviewMode(win) {
    var embedMode = parseEmbedMode(win.location.hash);
    return embedMode === EmbedMode.PREVIEW;
  }

  // src/core/data-structures/observable.js
  function _createForOfIteratorHelperLoose2(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray2(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray2(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray2(o, minLen);
    var n2 = Object.prototype.toString.call(o).slice(8, -1);
    if (n2 === "Object" && o.constructor)
      n2 = o.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray2(o, minLen);
  }
  function _arrayLikeToArray2(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  var Observable = /* @__PURE__ */ function() {
    function Observable2() {
      this.handlers_ = null;
    }
    var _proto = Observable2.prototype;
    _proto.add = function add(handler) {
      var _this = this;
      if (!this.handlers_) {
        this.handlers_ = [];
      }
      this.handlers_.push(handler);
      return function() {
        _this.remove(handler);
      };
    };
    _proto.remove = function remove2(handler) {
      if (!this.handlers_) {
        return;
      }
      removeItem(this.handlers_, handler);
    };
    _proto.removeAll = function removeAll() {
      if (!this.handlers_) {
        return;
      }
      this.handlers_.length = 0;
    };
    _proto.fire = function fire(opt_event) {
      if (!this.handlers_) {
        return;
      }
      for (var _iterator = _createForOfIteratorHelperLoose2(this.handlers_), _step; !(_step = _iterator()).done; ) {
        var handler = _step.value;
        handler(opt_event);
      }
    };
    _proto.getHandlerCount = function getHandlerCount() {
      var _this$handlers_$lengt, _this$handlers_;
      return (_this$handlers_$lengt = (_this$handlers_ = this.handlers_) == null ? void 0 : _this$handlers_.length) != null ? _this$handlers_$lengt : 0;
    };
    return Observable2;
  }();

  // extensions/amp-story/1.0/amp-story-store-service.js
  var _stateComparisonFunct;
  function _extends2() {
    _extends2 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends2.apply(this, arguments);
  }
  var TAG2 = "amp-story";
  var getStoreService = function getStoreService2(win) {
    var service = Services.storyStoreService(win);
    if (!service) {
      service = new AmpStoryStoreService(win);
      registerServiceBuilder(win, "story-store", function() {
        return service;
      });
    }
    return service;
  };
  var UIType = {
    MOBILE: 0,
    DESKTOP_FULLBLEED: 2,
    DESKTOP_ONE_PANEL: 4,
    VERTICAL: 3
  };
  var EmbeddedComponentState = {
    HIDDEN: 0,
    FOCUSED: 1
  };
  var StateProperty = {
    CAN_INSERT_AUTOMATIC_AD: "canInsertAutomaticAd",
    CAN_SHOW_AUDIO_UI: "canShowAudioUi",
    CAN_SHOW_NAVIGATION_OVERLAY_HINT: "canShowNavigationOverlayHint",
    CAN_SHOW_PAGINATION_BUTTONS: "canShowPaginationButtons",
    CAN_SHOW_PREVIOUS_PAGE_HELP: "canShowPreviousPageHelp",
    CAN_SHOW_SHARING_UIS: "canShowSharingUis",
    CAN_SHOW_STORY_URL_INFO: "canShowStoryUrlInfo",
    CAN_SHOW_SYSTEM_LAYER_BUTTONS: "canShowSystemLayerButtons",
    VIEWER_CUSTOM_CONTROLS: "viewerCustomControls",
    ACCESS_STATE: "accessState",
    AD_STATE: "adState",
    PAGE_ATTACHMENT_STATE: "pageAttachmentState",
    AFFILIATE_LINK_STATE: "affiliateLinkState",
    EDUCATION_STATE: "educationState",
    GYROSCOPE_PERMISSION_STATE: "gyroscopePermissionState",
    INFO_DIALOG_STATE: "infoDialogState",
    INTERACTIVE_COMPONENT_STATE: "interactiveEmbeddedComponentState",
    INTERACTIVE_REACT_STATE: "interactiveReactState",
    KEYBOARD_ACTIVE_STATE: "keyboardActiveState",
    MUTED_STATE: "mutedState",
    PAGE_HAS_AUDIO_STATE: "pageAudioState",
    PAGE_HAS_ELEMENTS_WITH_PLAYBACK_STATE: "pageHasElementsWithPlaybackState",
    PANNING_MEDIA_STATE: "panningMediaState",
    PAUSED_STATE: "pausedState",
    PREVIEW_STATE: "previewState",
    RTL_STATE: "rtlState",
    SHARE_MENU_STATE: "shareMenuState",
    SHOPPING_DATA: "shoppingData",
    STORY_HAS_AUDIO_STATE: "storyHasAudioState",
    STORY_HAS_BACKGROUND_AUDIO_STATE: "storyHasBackgroundAudioState",
    STORY_HAS_PLAYBACK_UI_STATE: "storyHasPlaybackUiState",
    SYSTEM_UI_IS_VISIBLE_STATE: "systemUiIsVisibleState",
    UI_STATE: "uiState",
    ACTIONS_ALLOWLIST: "actionsAllowlist",
    CONSENT_ID: "consentId",
    CURRENT_PAGE_ID: "currentPageId",
    CURRENT_PAGE_INDEX: "currentPageIndex",
    ADVANCEMENT_MODE: "advancementMode",
    NAVIGATION_PATH: "navigationPath",
    NEW_PAGE_AVAILABLE_ID: "newPageAvailableId",
    PAGE_IDS: "pageIds",
    PAGE_SIZE: "pageSize"
  };
  var Action = {
    ADD_INTERACTIVE_REACT: "addInteractiveReact",
    ADD_TO_ACTIONS_ALLOWLIST: "addToActionsAllowlist",
    CHANGE_PAGE: "setCurrentPageId",
    SET_CONSENT_ID: "setConsentId",
    SET_ADVANCEMENT_MODE: "setAdvancementMode",
    SET_NAVIGATION_PATH: "setNavigationPath",
    SET_PAGE_IDS: "setPageIds",
    TOGGLE_ACCESS: "toggleAccess",
    TOGGLE_AD: "toggleAd",
    TOGGLE_AFFILIATE_LINK: "toggleAffiliateLink",
    TOGGLE_EDUCATION: "toggleEducation",
    TOGGLE_INFO_DIALOG: "toggleInfoDialog",
    TOGGLE_INTERACTIVE_COMPONENT: "toggleInteractiveComponent",
    TOGGLE_KEYBOARD_ACTIVE_STATE: "toggleKeyboardActiveState",
    TOGGLE_MUTED: "toggleMuted",
    TOGGLE_PAGE_ATTACHMENT_STATE: "togglePageAttachmentState",
    TOGGLE_PAGE_HAS_AUDIO: "togglePageHasAudio",
    TOGGLE_PAGE_HAS_ELEMENT_WITH_PLAYBACK: "togglePageHasElementWithPlayblack",
    TOGGLE_PAUSED: "togglePaused",
    TOGGLE_RTL: "toggleRtl",
    TOGGLE_SHARE_MENU: "toggleShareMenu",
    ADD_SHOPPING_DATA: "addShoppingData",
    TOGGLE_STORY_HAS_AUDIO: "toggleStoryHasAudio",
    TOGGLE_STORY_HAS_BACKGROUND_AUDIO: "toggleStoryHasBackgroundAudio",
    TOGGLE_STORY_HAS_PLAYBACK_UI: "toggleStoryHasPlaybackUi",
    TOGGLE_SYSTEM_UI_IS_VISIBLE: "toggleSystemUiIsVisible",
    TOGGLE_UI: "toggleUi",
    SET_GYROSCOPE_PERMISSION: "setGyroscopePermission",
    ADD_NEW_PAGE_ID: "addNewPageId",
    SET_PAGE_SIZE: "updatePageSize",
    ADD_PANNING_MEDIA_STATE: "addPanningMediaState",
    SET_VIEWER_CUSTOM_CONTROLS: "setCustomControls"
  };
  var stateComparisonFunctions = (_stateComparisonFunct = {}, _stateComparisonFunct[StateProperty.ACTIONS_ALLOWLIST] = function(old, curr) {
    return old.length !== curr.length;
  }, _stateComparisonFunct[StateProperty.INTERACTIVE_COMPONENT_STATE] = function(old, curr) {
    return old.element !== curr.element || old.state !== curr.state;
  }, _stateComparisonFunct[StateProperty.NAVIGATION_PATH] = function(old, curr) {
    return old.length !== curr.length;
  }, _stateComparisonFunct[StateProperty.PAGE_IDS] = function(old, curr) {
    return old.length !== curr.length;
  }, _stateComparisonFunct[StateProperty.PAGE_SIZE] = function(old, curr) {
    return old === null || curr === null || old.width !== curr.width || old.height !== curr.height;
  }, _stateComparisonFunct[StateProperty.PANNING_MEDIA_STATE] = function(old, curr) {
    return old === null || curr === null || !deepEquals(old, curr, 2);
  }, _stateComparisonFunct[StateProperty.SHOPPING_DATA] = function(old, curr) {
    return old === null || curr === null || !deepEquals(old, curr, 2);
  }, _stateComparisonFunct[StateProperty.INTERACTIVE_REACT_STATE] = function(old, curr) {
    return !deepEquals(old, curr, 3);
  }, _stateComparisonFunct);
  var actions = function actions2(state, action, data) {
    var _extends22, _extends32, _extends42, _extends52, _extends62, _extends72, _extends82, _extends92, _extends10, _extends11, _extends12, _extends13, _extends14, _extends15, _extends16, _extends17, _extends18, _extends19, _extends20, _extends21, _extends222, _extends23, _extends24, _extends25, _extends26, _extends27, _extends28, _extends29, _extends30, _extends31, _extends322, _extends33, _extends34;
    switch (action) {
      case Action.ADD_INTERACTIVE_REACT:
        return _extends2({}, state, (_extends32 = {}, _extends32[StateProperty.INTERACTIVE_REACT_STATE] = _extends2({}, state[StateProperty.INTERACTIVE_REACT_STATE], (_extends22 = {}, _extends22[data["interactiveId"]] = data, _extends22)), _extends32));
      case Action.ADD_NEW_PAGE_ID:
        return _extends2({}, state, (_extends42 = {}, _extends42[StateProperty.NEW_PAGE_AVAILABLE_ID] = data, _extends42));
      case Action.ADD_PANNING_MEDIA_STATE:
        var updatedState = _extends2({}, state[StateProperty.PANNING_MEDIA_STATE], data);
        return _extends2({}, state, (_extends52 = {}, _extends52[StateProperty.PANNING_MEDIA_STATE] = updatedState, _extends52));
      case Action.ADD_SHOPPING_DATA:
        var updatedShoppingData = _extends2({}, state[StateProperty.SHOPPING_DATA], data);
        return _extends2({}, state, (_extends62 = {}, _extends62[StateProperty.SHOPPING_DATA] = updatedShoppingData, _extends62));
      case Action.ADD_TO_ACTIONS_ALLOWLIST:
        var newActionsAllowlist = [].concat(state[StateProperty.ACTIONS_ALLOWLIST], data);
        return _extends2({}, state, (_extends72 = {}, _extends72[StateProperty.ACTIONS_ALLOWLIST] = newActionsAllowlist, _extends72));
      case Action.TOGGLE_ACCESS:
        if (state[StateProperty.ACCESS_STATE] === data) {
          return state;
        }
        return _extends2({}, state, (_extends82 = {}, _extends82[StateProperty.ACCESS_STATE] = !!data, _extends82[StateProperty.PAUSED_STATE] = !!data, _extends82));
      case Action.TOGGLE_PAGE_ATTACHMENT_STATE:
        return _extends2({}, state, (_extends92 = {}, _extends92[StateProperty.PAGE_ATTACHMENT_STATE] = !!data, _extends92));
      case Action.TOGGLE_AD:
        return _extends2({}, state, (_extends10 = {}, _extends10[StateProperty.AD_STATE] = !!data, _extends10));
      case Action.TOGGLE_AFFILIATE_LINK:
        return _extends2({}, state, (_extends11 = {}, _extends11[StateProperty.AFFILIATE_LINK_STATE] = data, _extends11));
      case Action.TOGGLE_EDUCATION:
        return _extends2({}, state, (_extends12 = {}, _extends12[StateProperty.EDUCATION_STATE] = !!data, _extends12));
      case Action.TOGGLE_INTERACTIVE_COMPONENT:
        data = data;
        return _extends2({}, state, (_extends13 = {}, _extends13[StateProperty.PAUSED_STATE] = data.state === EmbeddedComponentState.FOCUSED, _extends13[StateProperty.SYSTEM_UI_IS_VISIBLE_STATE] = true, _extends13[StateProperty.INTERACTIVE_COMPONENT_STATE] = data, _extends13));
      case Action.TOGGLE_INFO_DIALOG:
        return _extends2({}, state, (_extends14 = {}, _extends14[StateProperty.INFO_DIALOG_STATE] = !!data, _extends14[StateProperty.PAUSED_STATE] = !!data, _extends14));
      case Action.TOGGLE_STORY_HAS_AUDIO:
        return _extends2({}, state, (_extends15 = {}, _extends15[StateProperty.STORY_HAS_AUDIO_STATE] = !!data, _extends15));
      case Action.TOGGLE_STORY_HAS_BACKGROUND_AUDIO:
        return _extends2({}, state, (_extends16 = {}, _extends16[StateProperty.STORY_HAS_BACKGROUND_AUDIO_STATE] = !!data, _extends16));
      case Action.TOGGLE_STORY_HAS_PLAYBACK_UI:
        return _extends2({}, state, (_extends17 = {}, _extends17[StateProperty.STORY_HAS_PLAYBACK_UI_STATE] = !!data, _extends17));
      case Action.TOGGLE_MUTED:
        return _extends2({}, state, (_extends18 = {}, _extends18[StateProperty.MUTED_STATE] = !!data, _extends18));
      case Action.TOGGLE_PAGE_HAS_AUDIO:
        return _extends2({}, state, (_extends19 = {}, _extends19[StateProperty.PAGE_HAS_AUDIO_STATE] = !!data, _extends19));
      case Action.TOGGLE_PAGE_HAS_ELEMENT_WITH_PLAYBACK:
        return _extends2({}, state, (_extends20 = {}, _extends20[StateProperty.PAGE_HAS_ELEMENTS_WITH_PLAYBACK_STATE] = !!data, _extends20));
      case Action.TOGGLE_PAUSED:
        return _extends2({}, state, (_extends21 = {}, _extends21[StateProperty.PAUSED_STATE] = !!data, _extends21));
      case Action.TOGGLE_RTL:
        return _extends2({}, state, (_extends222 = {}, _extends222[StateProperty.RTL_STATE] = !!data, _extends222));
      case Action.TOGGLE_KEYBOARD_ACTIVE_STATE:
        return _extends2({}, state, (_extends23 = {}, _extends23[StateProperty.KEYBOARD_ACTIVE_STATE] = !!data, _extends23));
      case Action.TOGGLE_SHARE_MENU:
        return _extends2({}, state, (_extends24 = {}, _extends24[StateProperty.PAUSED_STATE] = !!data, _extends24[StateProperty.SHARE_MENU_STATE] = !!data, _extends24));
      case Action.TOGGLE_SYSTEM_UI_IS_VISIBLE:
        return _extends2({}, state, (_extends25 = {}, _extends25[StateProperty.SYSTEM_UI_IS_VISIBLE_STATE] = !!data, _extends25));
      case Action.TOGGLE_UI:
        if (state[StateProperty.UI_STATE] === UIType.VERTICAL && data !== UIType.VERTICAL) {
          dev().error(TAG2, "Cannot switch away from UIType.VERTICAL");
          return state;
        }
        return _extends2({}, state, (_extends26 = {}, _extends26[StateProperty.UI_STATE] = data, _extends26));
      case Action.SET_GYROSCOPE_PERMISSION:
        return _extends2({}, state, (_extends27 = {}, _extends27[StateProperty.GYROSCOPE_PERMISSION_STATE] = data, _extends27));
      case Action.SET_CONSENT_ID:
        return _extends2({}, state, (_extends28 = {}, _extends28[StateProperty.CONSENT_ID] = data, _extends28));
      case Action.CHANGE_PAGE:
        return _extends2({}, state, (_extends29 = {}, _extends29[StateProperty.CURRENT_PAGE_ID] = data.id, _extends29[StateProperty.CURRENT_PAGE_INDEX] = data.index, _extends29));
      case Action.SET_ADVANCEMENT_MODE:
        return _extends2({}, state, (_extends30 = {}, _extends30[StateProperty.ADVANCEMENT_MODE] = data, _extends30));
      case Action.SET_NAVIGATION_PATH:
        return _extends2({}, state, (_extends31 = {}, _extends31[StateProperty.NAVIGATION_PATH] = data, _extends31));
      case Action.SET_PAGE_IDS:
        return _extends2({}, state, (_extends322 = {}, _extends322[StateProperty.PAGE_IDS] = data, _extends322));
      case Action.SET_PAGE_SIZE:
        return _extends2({}, state, (_extends33 = {}, _extends33[StateProperty.PAGE_SIZE] = data, _extends33));
      case Action.SET_VIEWER_CUSTOM_CONTROLS:
        return _extends2({}, state, (_extends34 = {}, _extends34[StateProperty.VIEWER_CUSTOM_CONTROLS] = data, _extends34));
      default:
        dev().error(TAG2, "Unknown action %s.", action);
        return state;
    }
  };
  var AmpStoryStoreService = /* @__PURE__ */ function() {
    function AmpStoryStoreService2(win) {
      this.win_ = win;
      this.listeners_ = {};
      this.state_ = _extends2({}, this.getDefaultState_(), this.getEmbedOverrides_());
    }
    var _proto = AmpStoryStoreService2.prototype;
    _proto.get = function get(key) {
      if (!hasOwn(this.state_, key)) {
        dev().error(TAG2, "Unknown state %s.", key);
        return;
      }
      return this.state_[key];
    };
    _proto.subscribe = function subscribe(key, listener, callToInitialize) {
      if (callToInitialize === void 0) {
        callToInitialize = false;
      }
      if (!hasOwn(this.state_, key)) {
        dev().error(TAG2, "Can't subscribe to unknown state %s.", key);
        return;
      }
      if (!this.listeners_[key]) {
        this.listeners_[key] = new Observable();
      }
      this.listeners_[key].add(listener);
      if (callToInitialize) {
        listener(this.get(key));
      }
    };
    _proto.dispatch = function dispatch2(action, data) {
      var _this = this;
      var oldState = _extends2({}, this.state_);
      this.state_ = actions(this.state_, action, data);
      var comparisonFn;
      Object.keys(this.listeners_).forEach(function(key) {
        comparisonFn = stateComparisonFunctions[key];
        if (comparisonFn ? comparisonFn(oldState[key], _this.state_[key]) : oldState[key] !== _this.state_[key]) {
          _this.listeners_[key].fire(_this.state_[key]);
        }
      });
    };
    _proto.getDefaultState_ = function getDefaultState_() {
      var _StateProperty$CAN_IN;
      return _StateProperty$CAN_IN = {}, _StateProperty$CAN_IN[StateProperty.CAN_INSERT_AUTOMATIC_AD] = true, _StateProperty$CAN_IN[StateProperty.CAN_SHOW_AUDIO_UI] = true, _StateProperty$CAN_IN[StateProperty.CAN_SHOW_NAVIGATION_OVERLAY_HINT] = true, _StateProperty$CAN_IN[StateProperty.CAN_SHOW_PREVIOUS_PAGE_HELP] = true, _StateProperty$CAN_IN[StateProperty.CAN_SHOW_PAGINATION_BUTTONS] = true, _StateProperty$CAN_IN[StateProperty.CAN_SHOW_SHARING_UIS] = true, _StateProperty$CAN_IN[StateProperty.CAN_SHOW_STORY_URL_INFO] = true, _StateProperty$CAN_IN[StateProperty.CAN_SHOW_SYSTEM_LAYER_BUTTONS] = true, _StateProperty$CAN_IN[StateProperty.VIEWER_CUSTOM_CONTROLS] = [], _StateProperty$CAN_IN[StateProperty.ACCESS_STATE] = false, _StateProperty$CAN_IN[StateProperty.AD_STATE] = false, _StateProperty$CAN_IN[StateProperty.AFFILIATE_LINK_STATE] = null, _StateProperty$CAN_IN[StateProperty.EDUCATION_STATE] = false, _StateProperty$CAN_IN[StateProperty.GYROSCOPE_PERMISSION_STATE] = "", _StateProperty$CAN_IN[StateProperty.INFO_DIALOG_STATE] = false, _StateProperty$CAN_IN[StateProperty.INTERACTIVE_COMPONENT_STATE] = {
        state: EmbeddedComponentState.HIDDEN
      }, _StateProperty$CAN_IN[StateProperty.INTERACTIVE_REACT_STATE] = {}, _StateProperty$CAN_IN[StateProperty.KEYBOARD_ACTIVE_STATE] = false, _StateProperty$CAN_IN[StateProperty.MUTED_STATE] = true, _StateProperty$CAN_IN[StateProperty.PAGE_ATTACHMENT_STATE] = false, _StateProperty$CAN_IN[StateProperty.PAGE_HAS_AUDIO_STATE] = false, _StateProperty$CAN_IN[StateProperty.PAGE_HAS_ELEMENTS_WITH_PLAYBACK_STATE] = false, _StateProperty$CAN_IN[StateProperty.PANNING_MEDIA_STATE] = {}, _StateProperty$CAN_IN[StateProperty.PAUSED_STATE] = false, _StateProperty$CAN_IN[StateProperty.RTL_STATE] = false, _StateProperty$CAN_IN[StateProperty.SHARE_MENU_STATE] = false, _StateProperty$CAN_IN[StateProperty.SHOPPING_DATA] = {}, _StateProperty$CAN_IN[StateProperty.STORY_HAS_AUDIO_STATE] = false, _StateProperty$CAN_IN[StateProperty.STORY_HAS_BACKGROUND_AUDIO_STATE] = false, _StateProperty$CAN_IN[StateProperty.STORY_HAS_PLAYBACK_UI_STATE] = false, _StateProperty$CAN_IN[StateProperty.SYSTEM_UI_IS_VISIBLE_STATE] = true, _StateProperty$CAN_IN[StateProperty.UI_STATE] = UIType.MOBILE, _StateProperty$CAN_IN[StateProperty.ACTIONS_ALLOWLIST] = [], _StateProperty$CAN_IN[StateProperty.CONSENT_ID] = null, _StateProperty$CAN_IN[StateProperty.CURRENT_PAGE_ID] = "", _StateProperty$CAN_IN[StateProperty.CURRENT_PAGE_INDEX] = 0, _StateProperty$CAN_IN[StateProperty.ADVANCEMENT_MODE] = "", _StateProperty$CAN_IN[StateProperty.NEW_PAGE_AVAILABLE_ID] = "", _StateProperty$CAN_IN[StateProperty.NAVIGATION_PATH] = [], _StateProperty$CAN_IN[StateProperty.PAGE_IDS] = [], _StateProperty$CAN_IN[StateProperty.PAGE_SIZE] = null, _StateProperty$CAN_IN[StateProperty.PREVIEW_STATE] = false, _StateProperty$CAN_IN;
    };
    _proto.getEmbedOverrides_ = function getEmbedOverrides_() {
      var _ref, _ref2, _ref3, _ref4;
      var embedMode = parseEmbedMode(this.win_.location.hash);
      switch (embedMode) {
        case EmbedMode.NAME_TBD:
          return _ref = {}, _ref[StateProperty.CAN_INSERT_AUTOMATIC_AD] = false, _ref[StateProperty.CAN_SHOW_NAVIGATION_OVERLAY_HINT] = false, _ref[StateProperty.CAN_SHOW_PAGINATION_BUTTONS] = false, _ref[StateProperty.CAN_SHOW_PREVIOUS_PAGE_HELP] = true, _ref[StateProperty.CAN_SHOW_SYSTEM_LAYER_BUTTONS] = false, _ref[StateProperty.MUTED_STATE] = false, _ref;
        case EmbedMode.NO_SHARING:
          return _ref2 = {}, _ref2[StateProperty.CAN_SHOW_SHARING_UIS] = false, _ref2;
        case EmbedMode.PREVIEW:
          return _ref3 = {}, _ref3[StateProperty.PREVIEW_STATE] = true, _ref3[StateProperty.CAN_INSERT_AUTOMATIC_AD] = false, _ref3[StateProperty.CAN_SHOW_NAVIGATION_OVERLAY_HINT] = false, _ref3[StateProperty.CAN_SHOW_PAGINATION_BUTTONS] = false, _ref3[StateProperty.CAN_SHOW_PREVIOUS_PAGE_HELP] = false, _ref3[StateProperty.CAN_SHOW_SYSTEM_LAYER_BUTTONS] = false, _ref3;
        case EmbedMode.NO_SHARING_NOR_AUDIO_UI:
          return _ref4 = {}, _ref4[StateProperty.CAN_SHOW_AUDIO_UI] = false, _ref4[StateProperty.CAN_SHOW_SHARING_UIS] = false, _ref4[StateProperty.CAN_SHOW_STORY_URL_INFO] = false, _ref4;
        default:
          return {};
      }
    };
    return AmpStoryStoreService2;
  }();

  // extensions/amp-story/1.0/variable-service.js
  var AnalyticsVariable = {
    STORY_INTERACTIVE_ID: "storyInteractiveId",
    STORY_INTERACTIVE_RESPONSE: "storyInteractiveResponse",
    STORY_INTERACTIVE_TYPE: "storyInteractiveType",
    STORY_PAGE_ID: "storyPageId",
    STORY_PAGE_INDEX: "storyPageIndex",
    STORY_PAGE_COUNT: "storyPageCount",
    STORY_IS_MUTED: "storyIsMuted",
    STORY_PROGRESS: "storyProgress",
    STORY_PREVIOUS_PAGE_ID: "storyPreviousPageId",
    STORY_ADVANCEMENT_MODE: "storyAdvancementMode"
  };
  var getVariableService = function getVariableService2(win) {
    var service = Services.storyVariableService(win);
    if (!service) {
      service = new AmpStoryVariableService(win);
      registerServiceBuilder(win, "story-variable", function() {
        return service;
      });
    }
    return service;
  };
  var AmpStoryVariableService = /* @__PURE__ */ function() {
    function AmpStoryVariableService2(win) {
      var _dict;
      this.variables_ = dict((_dict = {}, _dict[AnalyticsVariable.STORY_INTERACTIVE_ID] = null, _dict[AnalyticsVariable.STORY_INTERACTIVE_RESPONSE] = null, _dict[AnalyticsVariable.STORY_INTERACTIVE_TYPE] = null, _dict[AnalyticsVariable.STORY_PAGE_INDEX] = null, _dict[AnalyticsVariable.STORY_PAGE_ID] = null, _dict[AnalyticsVariable.STORY_PAGE_COUNT] = null, _dict[AnalyticsVariable.STORY_PROGRESS] = null, _dict[AnalyticsVariable.STORY_IS_MUTED] = null, _dict[AnalyticsVariable.STORY_PREVIOUS_PAGE_ID] = null, _dict[AnalyticsVariable.STORY_ADVANCEMENT_MODE] = null, _dict));
      this.storeService_ = getStoreService(win);
      this.initializeListeners_();
    }
    var _proto = AmpStoryVariableService2.prototype;
    _proto.initializeListeners_ = function initializeListeners_() {
      var _this = this;
      this.storeService_.subscribe(StateProperty.PAGE_IDS, function(pageIds) {
        _this.variables_[AnalyticsVariable.STORY_PAGE_COUNT] = pageIds.length;
      });
      this.storeService_.subscribe(StateProperty.CURRENT_PAGE_ID, function(pageId) {
        if (!pageId) {
          return;
        }
        _this.variables_[AnalyticsVariable.STORY_PREVIOUS_PAGE_ID] = _this.variables_[AnalyticsVariable.STORY_PAGE_ID];
        _this.variables_[AnalyticsVariable.STORY_PAGE_ID] = pageId;
        var pageIndex = _this.storeService_.get(StateProperty.CURRENT_PAGE_INDEX);
        _this.variables_[AnalyticsVariable.STORY_PAGE_INDEX] = pageIndex;
        var numberOfPages = _this.storeService_.get(StateProperty.PAGE_IDS).length;
        if (numberOfPages > 0) {
          if (numberOfPages === 1) {
            _this.variables_[AnalyticsVariable.STORY_PROGRESS] = 0;
          } else {
            _this.variables_[AnalyticsVariable.STORY_PROGRESS] = pageIndex / (numberOfPages - 1);
          }
        }
      }, true);
    };
    _proto.onVariableUpdate = function onVariableUpdate(name, update) {
      this.variables_[name] = update;
    };
    _proto.get = function get() {
      return this.variables_;
    };
    return AmpStoryVariableService2;
  }();

  // src/utils/analytics.js
  function triggerAnalyticsEvent(target, eventType, vars, enableDataVars) {
    if (vars === void 0) {
      vars = dict();
    }
    if (enableDataVars === void 0) {
      enableDataVars = true;
    }
    Services.analyticsForDocOrNull(target).then(function(analytics) {
      if (!analytics) {
        return;
      }
      analytics.triggerEventForTarget(target, eventType, vars, enableDataVars);
    });
  }

  // extensions/amp-story/1.0/story-analytics.js
  function _extends3() {
    _extends3 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends3.apply(this, arguments);
  }
  var ANALYTICS_TAG_NAME = "__AMP_ANALYTICS_TAG_NAME__";
  var StoryAnalyticsEvent = {
    CLICK_THROUGH: "story-click-through",
    FOCUS: "story-focus",
    LAST_PAGE_VISIBLE: "story-last-page-visible",
    OPEN: "story-open",
    CLOSE: "story-close",
    PAGE_ATTACHMENT_ENTER: "story-page-attachment-enter",
    PAGE_ATTACHMENT_EXIT: "story-page-attachment-exit",
    PAGE_VISIBLE: "story-page-visible",
    INTERACTIVE: "story-interactive",
    STORY_CONTENT_LOADED: "story-content-loaded",
    STORY_MUTED: "story-audio-muted",
    STORY_UNMUTED: "story-audio-unmuted"
  };
  var AdvancementMode = {
    GO_TO_PAGE: "goToPageAction",
    AUTO_ADVANCE_TIME: "autoAdvanceTime",
    AUTO_ADVANCE_MEDIA: "autoAdvanceMedia",
    MANUAL_ADVANCE: "manualAdvance",
    ADVANCE_TO_ADS: "manualAdvanceFromAd",
    VIEWER_SELECT_PAGE: "viewerSelectPage"
  };
  var getAnalyticsService = function getAnalyticsService2(win, el) {
    var service = Services.storyAnalyticsService(win);
    if (!service) {
      service = new StoryAnalyticsService(win, el);
      registerServiceBuilder(win, "story-analytics", function() {
        return service;
      });
    }
    return service;
  };
  var StoryAnalyticsService = /* @__PURE__ */ function() {
    function StoryAnalyticsService2(win, element) {
      this.win_ = win;
      this.element_ = element;
      this.variableService_ = getVariableService(win);
      this.pageEventsMap_ = map();
      this.storeService_ = getStoreService(win);
      this.initializeListeners_();
    }
    var _proto = StoryAnalyticsService2.prototype;
    _proto.initializeListeners_ = function initializeListeners_() {
      var _this = this;
      this.storeService_.subscribe(StateProperty.CURRENT_PAGE_ID, function(pageId) {
        var isAd = _this.storeService_.get(StateProperty.AD_STATE);
        if (!pageId || isAd) {
          return;
        }
        _this.triggerEvent(StoryAnalyticsEvent.PAGE_VISIBLE);
        var pageIds = _this.storeService_.get(StateProperty.PAGE_IDS);
        var pageIndex = _this.storeService_.get(StateProperty.CURRENT_PAGE_INDEX);
        if (pageIndex === pageIds.length - 1) {
          _this.triggerEvent(StoryAnalyticsEvent.LAST_PAGE_VISIBLE);
        }
      }, true);
    };
    _proto.triggerEvent = function triggerEvent(eventType, element) {
      if (element === void 0) {
        element = null;
      }
      this.incrementPageEventCount_(eventType);
      triggerAnalyticsEvent(this.element_, eventType, this.updateDetails(eventType, element));
    };
    _proto.updateDetails = function updateDetails(eventType, element) {
      if (element === void 0) {
        element = null;
      }
      var details = {};
      var vars = this.variableService_.get();
      var pageId = vars["storyPageId"];
      if (this.pageEventsMap_[pageId][eventType] > 1) {
        details.repeated = true;
      }
      if (element) {
        details.tagName = element[ANALYTICS_TAG_NAME] || element.tagName.toLowerCase();
        Object.assign(vars, getDataParamsFromAttributes(element, void 0, /^vars(.+)/));
      }
      return _extends3({
        eventDetails: details
      }, vars);
    };
    _proto.incrementPageEventCount_ = function incrementPageEventCount_(eventType) {
      var vars = this.variableService_.get();
      var pageId = vars["storyPageId"];
      this.pageEventsMap_[pageId] = this.pageEventsMap_[pageId] || {};
      this.pageEventsMap_[pageId][eventType] = this.pageEventsMap_[pageId][eventType] || 0;
      this.pageEventsMap_[pageId][eventType]++;
    };
    return StoryAnalyticsService2;
  }();

  // extensions/amp-story/1.0/amp-story-affiliate-link.js
  var AFFILIATE_LINK_SELECTOR = "a[affiliate-link-icon]";
  var AFFILIATE_LINK_BUILT = "__AMP_AFFILIATE_LINK_BUILT";
  var AmpStoryAffiliateLink = /* @__PURE__ */ function() {
    function AmpStoryAffiliateLink2(win, element) {
      this.win_ = win;
      this.element_ = element;
      this.textEl_ = null;
      this.launchEl_ = null;
      this.storeService_ = getStoreService(this.win_);
      this.text_ = this.element_.textContent;
      this.mutator_ = Services.mutatorForDoc(getAmpdoc(this.win_.document));
      this.analyticsService_ = getAnalyticsService(this.win_, element);
    }
    var _proto = AmpStoryAffiliateLink2.prototype;
    _proto.build = function build() {
      var _this = this;
      if (this.element_[AFFILIATE_LINK_BUILT]) {
        return;
      }
      this.mutator_.mutateElement(this.element_, function() {
        _this.element_.textContent = "";
        _this.element_.setAttribute("pristine", "");
        _this.addPulseElement_();
        _this.addIconElement_();
        _this.addText_();
        _this.addLaunchElement_();
      });
      this.initializeListeners_();
      this.element_[AFFILIATE_LINK_BUILT] = true;
    };
    _proto.initializeListeners_ = function initializeListeners_() {
      var _this2 = this;
      this.storeService_.subscribe(StateProperty.AFFILIATE_LINK_STATE, function(elementToToggleExpand) {
        var expand = _this2.element_ === elementToToggleExpand;
        if (expand) {
          _this2.element_.setAttribute("expanded", "");
          _this2.textEl_.removeAttribute("hidden");
          _this2.launchEl_.removeAttribute("hidden");
        } else {
          _this2.element_.removeAttribute("expanded");
          _this2.textEl_.setAttribute("hidden", "");
          _this2.launchEl_.setAttribute("hidden", "");
        }
        if (expand) {
          _this2.element_.removeAttribute("pristine");
          _this2.analyticsService_.triggerEvent(StoryAnalyticsEvent.FOCUS, _this2.element_);
        }
      });
      this.element_.addEventListener("click", function(event) {
        if (_this2.element_.hasAttribute("expanded")) {
          event.stopPropagation();
          _this2.analyticsService_.triggerEvent(StoryAnalyticsEvent.CLICK_THROUGH, _this2.element_);
        }
      });
    };
    _proto.addIconElement_ = function addIconElement_() {
      var iconEl = createElement("div", {
        class: "i-amphtml-story-affiliate-link-circle"
      }, createElement("i", {
        class: "i-amphtml-story-affiliate-link-icon"
      }), createElement("div", {
        class: "i-amphtml-story-reset i-amphtml-hidden"
      }, createElement("span", {
        class: "i-amphtml-story-affiliate-link-text",
        hidden: true
      }), createElement("i", {
        class: "i-amphtml-story-affiliate-link-launch",
        hidden: true
      })));
      this.element_.appendChild(iconEl);
    };
    _proto.addText_ = function addText_() {
      this.textEl_ = this.element_.querySelector(".i-amphtml-story-affiliate-link-text");
      this.textEl_.textContent = this.text_;
      this.textEl_.setAttribute("hidden", "");
    };
    _proto.addLaunchElement_ = function addLaunchElement_() {
      this.launchEl_ = this.element_.querySelector(".i-amphtml-story-affiliate-link-launch");
      this.launchEl_.setAttribute("hidden", "");
    };
    _proto.addPulseElement_ = function addPulseElement_() {
      var pulseEl = createElement("div", {
        class: "i-amphtml-story-affiliate-link-pulse"
      });
      this.element_.appendChild(pulseEl);
    };
    return AmpStoryAffiliateLink2;
  }();

  // src/core/constants/action-constants.js
  var ActionTrust_Enum = {
    LOW: 1,
    DEFAULT: 2,
    HIGH: 3
  };

  // src/core/constants/key-codes.js
  var Keys_Enum = {
    ENTER: "Enter",
    ESCAPE: "Escape",
    SPACE: " ",
    LEFT_ARROW: "ArrowLeft",
    UP_ARROW: "ArrowUp",
    RIGHT_ARROW: "ArrowRight",
    DOWN_ARROW: "ArrowDown",
    TAB: "Tab",
    BACKSPACE: "Backspace",
    HOME: "Home",
    END: "End"
  };

  // src/core/dom/event-helper-listen.js
  var optsSupported;
  var passiveSupported;
  function internalListenImplementation(element, eventType, listener, opt_evtListenerOpts) {
    var localElement = element;
    var localListener = listener;
    var wrapped = function wrapped2(event) {
      try {
        return localListener(event);
      } catch (e) {
        self.__AMP_REPORT_ERROR == null ? void 0 : self.__AMP_REPORT_ERROR(e);
        throw e;
      }
    };
    var optsSupported2 = detectEvtListenerOptsSupport();
    var capture = !!(opt_evtListenerOpts != null && opt_evtListenerOpts.capture);
    localElement.addEventListener(eventType, wrapped, optsSupported2 ? opt_evtListenerOpts : capture);
    return function() {
      var _localElement;
      (_localElement = localElement) == null ? void 0 : _localElement.removeEventListener(eventType, wrapped, optsSupported2 ? opt_evtListenerOpts : capture);
      localListener = null;
      localElement = null;
      wrapped = null;
    };
  }
  function detectEvtListenerOptsSupport() {
    if (optsSupported !== void 0) {
      return optsSupported;
    }
    optsSupported = false;
    try {
      var options = {
        get capture() {
          optsSupported = true;
        }
      };
      self.addEventListener("test-options", null, options);
      self.removeEventListener("test-options", null, options);
    } catch (err) {
    }
    return optsSupported;
  }
  function supportsPassiveEventListener(win) {
    if (passiveSupported !== void 0) {
      return passiveSupported;
    }
    passiveSupported = false;
    try {
      var options = {
        get passive() {
          passiveSupported = true;
          return false;
        }
      };
      win.addEventListener("test-options", null, options);
      win.removeEventListener("test-options", null, options);
    } catch (err) {
    }
    return passiveSupported;
  }

  // src/utils/event-helper.js
  var MEDIA_LOAD_FAILURE_SRC_PROPERTY = "__AMP_MEDIA_LOAD_FAILURE_SRC";
  function createCustomEvent(win, type, detail, opt_eventInit) {
    var eventInit = {
      detail: detail
    };
    Object.assign(eventInit, opt_eventInit);
    if (isEsm() || typeof win.CustomEvent == "function") {
      return new win.CustomEvent(type, eventInit);
    } else {
      var e = win.document.createEvent("CustomEvent");
      e.initCustomEvent(type, !!eventInit.bubbles, !!eventInit.cancelable, detail);
      return e;
    }
  }
  function listen(element, eventType, listener, opt_evtListenerOpts) {
    return internalListenImplementation(element, eventType, listener, opt_evtListenerOpts);
  }
  function getDetail(event) {
    return event.detail;
  }
  function listenOnce(element, eventType, listener, opt_evtListenerOpts) {
    var localListener = listener;
    var unlisten = internalListenImplementation(element, eventType, function(event) {
      try {
        localListener(event);
      } finally {
        localListener = null;
        unlisten();
      }
    }, opt_evtListenerOpts);
    return unlisten;
  }

  // src/core/constants/amp-events.js
  var AmpEvents_Enum = {
    DOM_UPDATE: "amp:dom-update",
    FORM_DIRTINESS_CHANGE: "amp:form-dirtiness-change",
    FORM_VALUE_CHANGE: "amp:form-value-change",
    VISIBILITY_CHANGE: "amp:visibilitychange",
    ATTACHED: "amp:attached",
    STUBBED: "amp:stubbed",
    LOAD_START: "amp:load-start",
    LOAD_END: "amp:load-end",
    ERROR: "amp:error",
    SIZE_CHANGED: "amp:size-changed",
    UNLOAD: "amp:unload"
  };

  // src/experiments/index.js
  function _createForOfIteratorHelperLoose3(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray3(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray3(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray3(o, minLen);
    var n2 = Object.prototype.toString.call(o).slice(8, -1);
    if (n2 === "Object" && o.constructor)
      n2 = o.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray3(o, minLen);
  }
  function _arrayLikeToArray3(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _extends4() {
    _extends4 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends4.apply(this, arguments);
  }
  var TAG3 = "EXPERIMENTS";
  var LOCAL_STORAGE_KEY = "amp-experiment-toggles";
  var TOGGLES_WINDOW_PROPERTY = "__AMP__EXPERIMENT_TOGGLES";
  function isExperimentOn(win, experimentId) {
    var toggles = experimentToggles(win);
    return !!toggles[experimentId];
  }
  function experimentToggles(win) {
    var _win$AMP_CONFIG3, _win$AMP_EXP, _win$__AMP_EXP, _win$AMP_CONFIG4, _win$AMP_CONFIG5;
    if (win[TOGGLES_WINDOW_PROPERTY]) {
      return win[TOGGLES_WINDOW_PROPERTY];
    }
    win[TOGGLES_WINDOW_PROPERTY] = map();
    var toggles = win[TOGGLES_WINDOW_PROPERTY];
    var buildExperimentConfigs = _extends4({}, (_win$AMP_CONFIG3 = win.AMP_CONFIG) != null ? _win$AMP_CONFIG3 : {}, (_win$AMP_EXP = win.AMP_EXP) != null ? _win$AMP_EXP : parseJson(((_win$__AMP_EXP = win.__AMP_EXP) == null ? void 0 : _win$__AMP_EXP.textContent) || "{}"));
    for (var experimentId in buildExperimentConfigs) {
      var frequency = buildExperimentConfigs[experimentId];
      if (typeof frequency === "number" && frequency >= 0 && frequency <= 1) {
        toggles[experimentId] = Math.random() < frequency;
      }
    }
    var allowedDocOptIn = (_win$AMP_CONFIG4 = win.AMP_CONFIG) == null ? void 0 : _win$AMP_CONFIG4["allow-doc-opt-in"];
    if (isArray(allowedDocOptIn) && allowedDocOptIn.length) {
      var meta = win.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
      if (meta) {
        var optedInExperiments = meta.getAttribute("content").split(",");
        for (var _iterator = _createForOfIteratorHelperLoose3(optedInExperiments), _step; !(_step = _iterator()).done; ) {
          var experiment = _step.value;
          if (dev().assertArray(allowedDocOptIn).includes(experiment)) {
            toggles[experiment] = true;
          }
        }
      }
    }
    Object.assign(toggles, getExperimentToggles(win));
    var allowedUrlOptIn = (_win$AMP_CONFIG5 = win.AMP_CONFIG) == null ? void 0 : _win$AMP_CONFIG5["allow-url-opt-in"];
    if (isArray(allowedUrlOptIn) && allowedUrlOptIn.length) {
      var hash = win.location["originalHash"] || win.location.hash;
      var params = parseQueryString(hash);
      for (var _iterator2 = _createForOfIteratorHelperLoose3(allowedUrlOptIn), _step2; !(_step2 = _iterator2()).done; ) {
        var _experiment = _step2.value;
        var param = params["e-" + _experiment];
        if (param == "1") {
          toggles[_experiment] = true;
        }
        if (param == "0") {
          toggles[_experiment] = false;
        }
      }
    }
    return toggles;
  }
  function getExperimentToggles(win) {
    var _experimentsString;
    var experimentsString = "";
    try {
      if ("localStorage" in win) {
        experimentsString = win.localStorage.getItem(LOCAL_STORAGE_KEY);
      }
    } catch (_unused) {
      dev().warn(TAG3, "Failed to retrieve experiments from localStorage.");
    }
    var tokens = ((_experimentsString = experimentsString) == null ? void 0 : _experimentsString.split(/\s*,\s*/g)) || [];
    var toggles = map();
    for (var _iterator3 = _createForOfIteratorHelperLoose3(tokens), _step3; !(_step3 = _iterator3()).done; ) {
      var token = _step3.value;
      if (!token) {
        continue;
      }
      if (token[0] == "-") {
        toggles[token.substr(1)] = false;
      } else {
        toggles[token] = true;
      }
    }
    return toggles;
  }
  function getExperimentBranch(win, experimentName) {
    return win.__AMP_EXPERIMENT_BRANCHES ? win.__AMP_EXPERIMENT_BRANCHES[experimentName] : null;
  }

  // src/core/constants/common-signals.js
  var CommonSignals_Enum = {
    READY_TO_UPGRADE: "ready-upgrade",
    UPGRADED: "upgraded",
    BUILT: "built",
    MOUNTED: "mounted",
    LOAD_START: "load-start",
    RENDER_START: "render-start",
    LOAD_END: "load-end",
    INI_LOAD: "ini-load",
    UNLOAD: "unload"
  };

  // src/core/constants/enums.js
  var TickLabel_Enum = {
    ACCESS_AUTHORIZATION: "aaa",
    ACCESS_AUTHORIZATION_VISIBLE: "aaav",
    CUMULATIVE_LAYOUT_SHIFT: "cls",
    CUMULATIVE_LAYOUT_SHIFT_TYPE_UNION: "clstu",
    CUMULATIVE_LAYOUT_SHIFT_1: "cls-1",
    CUMULATIVE_LAYOUT_SHIFT_2: "cls-2",
    DOCUMENT_READY: "dr",
    END_INSTALL_STYLES: "e_is",
    FIRST_CONTENTFUL_PAINT: "fcp",
    FIRST_CONTENTFUL_PAINT_VISIBLE: "fcpv",
    FIRST_PAINT: "fp",
    FIRST_INPUT_DELAY: "fid",
    FIRST_VIEWPORT_READY: "pc",
    INSTALL_STYLES: "is",
    LARGEST_CONTENTFUL_PAINT: "lcp",
    LARGEST_CONTENTFUL_PAINT_TYPE: "lcpt",
    LARGEST_CONTENTFUL_PAINT_VISIBLE: "lcpv",
    LONG_TASKS_SELF: "lts",
    MAKE_BODY_VISIBLE: "mbv",
    MESSAGING_READY: "msr",
    ON_FIRST_VISIBLE: "ofv",
    ON_LOAD: "ol",
    TIME_ORIGIN: "timeOrigin",
    VIDEO_CACHE_STATE: "vcs",
    VIDEO_ERROR: "verr",
    VIDEO_ON_FIRST_PAGE: "vofp",
    VIDEO_JOINT_LATENCY: "vjl",
    VIDEO_MEAN_TIME_BETWEEN_REBUFFER: "vmtbrb",
    VIDEO_REBUFFERS: "vrb",
    VIDEO_REBUFFER_RATE: "vrbr",
    VIDEO_WATCH_TIME: "vwt"
  };

  // src/style-installer.js
  var TRANSFORMER_PROP = "__AMP_CSS_TR";
  function installCssTransformer(cssRoot, transformer) {
    cssRoot[TRANSFORMER_PROP] = transformer;
  }

  // src/core/data-structures/lru-cache.js
  var LruCache = /* @__PURE__ */ function() {
    function LruCache2(capacity) {
      this.capacity_ = capacity;
      this.size_ = 0;
      this.access_ = 0;
      this.cache_ = map();
    }
    var _proto = LruCache2.prototype;
    _proto.has = function has(key) {
      return !!this.cache_[key];
    };
    _proto.get = function get(key) {
      var cacheable = this.cache_[key];
      if (cacheable) {
        cacheable.access = ++this.access_;
        return cacheable.payload;
      }
      return void 0;
    };
    _proto.put = function put(key, payload) {
      if (!this.has(key)) {
        this.size_++;
      }
      this.cache_[key] = {
        payload: payload,
        access: this.access_
      };
      this.evict_();
    };
    _proto.evict_ = function evict_() {
      if (this.size_ <= this.capacity_) {
        return;
      }
      var cache = this.cache_;
      var oldest = this.access_ + 1;
      var oldestKey;
      for (var key in cache) {
        var access = cache[key].access;
        if (access < oldest) {
          oldest = access;
          oldestKey = key;
        }
      }
      if (oldestKey !== void 0) {
        delete cache[oldestKey];
        this.size_--;
      }
    };
    return LruCache2;
  }();

  // src/url.js
  var SERVING_TYPE_PREFIX = new Set([
    "c",
    "v",
    "a",
    "ad"
  ]);
  var cachedAnchorEl;
  var urlCache;
  var INVALID_PROTOCOLS = ["javascript:", "data:", "vbscript:"];
  var urlAsLocation = function urlAsLocation2(url) {
    return typeof url == "string" ? parseUrlDeprecated(url) : url;
  };
  function parseUrlDeprecated(url, opt_nocache) {
    if (!cachedAnchorEl) {
      cachedAnchorEl = self.document.createElement("a");
      urlCache = isEsm() ? null : self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new LruCache(100));
    }
    return parseUrlWithA(cachedAnchorEl, url, isEsm() || opt_nocache ? null : urlCache);
  }
  function parseUrlWithA(anchorEl, url, opt_cache) {
    if (isEsm()) {
      anchorEl.href = "";
      return new URL(url, anchorEl.href);
    }
    if (opt_cache && opt_cache.has(url)) {
      return opt_cache.get(url);
    }
    anchorEl.href = url;
    if (!anchorEl.protocol) {
      anchorEl.href = anchorEl.href;
    }
    var info = {
      href: anchorEl.href,
      protocol: anchorEl.protocol,
      host: anchorEl.host,
      hostname: anchorEl.hostname,
      port: anchorEl.port == "0" ? "" : anchorEl.port,
      pathname: anchorEl.pathname,
      search: anchorEl.search,
      hash: anchorEl.hash,
      origin: null
    };
    if (info.pathname[0] !== "/") {
      info.pathname = "/" + info.pathname;
    }
    if (info.protocol == "http:" && info.port == 80 || info.protocol == "https:" && info.port == 443) {
      info.port = "";
      info.host = info.hostname;
    }
    var origin;
    if (anchorEl.origin && anchorEl.origin != "null") {
      origin = anchorEl.origin;
    } else if (info.protocol == "data:" || !info.host) {
      origin = info.href;
    } else {
      origin = info.protocol + "//" + info.host;
    }
    info.origin = origin;
    var frozen = isTest() && Object.freeze ? Object.freeze(info) : info;
    if (opt_cache) {
      opt_cache.put(url, frozen);
    }
    return frozen;
  }
  function isSecureUrlDeprecated(url) {
    url = urlAsLocation(url);
    return url.protocol == "https:" || url.hostname == "localhost" || url.hostname == "127.0.0.1" || endsWith(url.hostname, ".localhost");
  }
  function assertHttpsUrl(urlString, elementContext, sourceName) {
    if (sourceName === void 0) {
      sourceName = "source";
    }
    userAssert2(urlString != null, "%s %s must be available", elementContext, sourceName);
    userAssert2(isSecureUrlDeprecated(urlString) || /^\/\//.test(urlString), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', elementContext, sourceName, urlString);
    return urlString;
  }
  function assertAbsoluteHttpOrHttpsUrl(urlString) {
    userAssert2(/^https?\:/i.test(urlString), 'URL must start with "http://" or "https://". Invalid value: %s', urlString);
    return parseUrlDeprecated(urlString).href;
  }
  function isProxyOrigin(url) {
    return urls.cdnProxyRegex.test(urlAsLocation(url).origin);
  }
  function isProtocolValid(url) {
    return !(url && INVALID_PROTOCOLS.includes(urlAsLocation(url).protocol));
  }
  function removeAmpJsParamsFromSearch(urlSearch) {
    return removeParamsFromSearch(urlSearch, "(amp_(js[^&=]*|gsa|r|kit)|usqp)");
  }
  function removeParamsFromSearch(urlSearch, paramName) {
    if (!urlSearch || urlSearch == "?") {
      return "";
    }
    var paramRegex = new RegExp("[?&]" + paramName + "\\b[^&]*", "g");
    var search = urlSearch.replace(paramRegex, "").replace(/^[?&]/, "");
    return search ? "?" + search : "";
  }
  function getSourceUrl(url) {
    url = urlAsLocation(url);
    if (!isProxyOrigin(url)) {
      return url.href;
    }
    var path = url.pathname.split("/");
    var prefix = path[1];
    userAssert2(SERVING_TYPE_PREFIX.has(prefix), "Unknown path prefix in url %s", url.href);
    var domainOrHttpsSignal = path[2];
    var origin = domainOrHttpsSignal == "s" ? "https://" + decodeURIComponent(path[3]) : "http://" + decodeURIComponent(domainOrHttpsSignal);
    userAssert2(origin.indexOf(".") > 0, "Expected a . in origin %s", origin);
    path.splice(1, domainOrHttpsSignal == "s" ? 3 : 2);
    return origin + path.join("/") + removeAmpJsParamsFromSearch(url.search) + (url.hash || "");
  }
  function getSourceOrigin(url) {
    return parseUrlDeprecated(getSourceUrl(url)).origin;
  }

  // src/error-reporting.js
  var accumulatedErrorMessages = self.__AMP_ERRORS || [];
  self.__AMP_ERRORS = accumulatedErrorMessages;

  // src/service/action-impl.js
  var ACTION_MAP_ = "__AMP_ACTION_MAP__" + Math.random();
  var TAPPABLE_ARIA_ROLES = {
    "button": true,
    "checkbox": true,
    "link": true,
    "listbox": true,
    "menuitem": true,
    "menuitemcheckbox": true,
    "menuitemradio": true,
    "option": true,
    "radio": true,
    "scrollbar": true,
    "slider": true,
    "spinbutton": true,
    "switch": true,
    "tab": true,
    "treeitem": true
  };
  var WHITESPACE_SET = " 	\n\r\f\v\xA0\u2028\u2029";
  var SEPARATOR_SET = ";:.()=,|!";
  var STRING_SET = "\"'";
  var OBJECT_SET = "{}";
  var SPECIAL_SET = WHITESPACE_SET + SEPARATOR_SET + STRING_SET + OBJECT_SET;

  // src/core/dom/amp-element-helpers.js
  var UPGRADE_TO_CUSTOMELEMENT_PROMISE = "__AMP_UPG_PRM";
  var UPGRADE_TO_CUSTOMELEMENT_RESOLVER = "__AMP_UPG_RES";
  function isAmpElement(element) {
    var tag = element.tagName;
    return tag.startsWith("AMP-") && !(tag == "AMP-STICKY-AD-TOP-PADDING" || tag == "AMP-BODY");
  }
  function whenUpgradedToCustomElement(element) {
    devAssert(isAmpElement(element), "element is not AmpElement");
    if (element.createdCallback) {
      return Promise.resolve(element);
    }
    if (!element[UPGRADE_TO_CUSTOMELEMENT_PROMISE]) {
      var deferred = new Deferred();
      element[UPGRADE_TO_CUSTOMELEMENT_PROMISE] = deferred.promise;
      element[UPGRADE_TO_CUSTOMELEMENT_RESOLVER] = deferred.resolve;
    }
    return element[UPGRADE_TO_CUSTOMELEMENT_PROMISE];
  }

  // src/video-interface.js
  var VideoInterface = /* @__PURE__ */ function() {
    function VideoInterface2() {
    }
    var _proto = VideoInterface2.prototype;
    _proto.signals = function signals() {
    };
    _proto.mutateElementSkipRemeasure = function mutateElementSkipRemeasure(unusedMutator) {
    };
    _proto.supportsPlatform = function supportsPlatform() {
    };
    _proto.isInteractive = function isInteractive() {
    };
    _proto.getCurrentTime = function getCurrentTime() {
    };
    _proto.getDuration = function getDuration() {
    };
    _proto.getPlayedRanges = function getPlayedRanges() {
    };
    _proto.play = function play(unusedIsAutoplay) {
    };
    _proto.pause = function pause() {
    };
    _proto.mute = function mute() {
    };
    _proto.unmute = function unmute() {
    };
    _proto.showControls = function showControls() {
    };
    _proto.hideControls = function hideControls() {
    };
    _proto.getMetadata = function getMetadata() {
    };
    _proto.preimplementsAutoFullscreen = function preimplementsAutoFullscreen() {
    };
    _proto.preimplementsMediaSessionAPI = function preimplementsMediaSessionAPI() {
    };
    _proto.fullscreenEnter = function fullscreenEnter() {
    };
    _proto.fullscreenExit = function fullscreenExit() {
    };
    _proto.isFullscreen = function isFullscreen() {
    };
    _proto.seekTo = function seekTo(unusedTimeSeconds) {
    };
    return VideoInterface2;
  }();
  VideoInterface.prototype.element;
  VideoInterface.prototype.win;
  var VideoEvents_Enum = {
    REGISTERED: "registered",
    LOAD: "load",
    LOADEDMETADATA: "loadedmetadata",
    LOADEDDATA: "loadeddata",
    PLAY: "play",
    PLAYING: "playing",
    PAUSE: "pause",
    ENDED: "ended",
    MUTED: "muted",
    UNMUTED: "unmuted",
    VISIBILITY: "amp:video:visibility",
    RELOAD: "reloaded",
    AD_START: "ad_start",
    AD_END: "ad_end",
    CUSTOM_TICK: "amp:video:tick"
  };
  var VideoServiceSignals_Enum = {
    USER_INTERACTED: "user-interacted",
    PLAYBACK_DELEGATED: "playback-delegated"
  };
  function delegateAutoplay(video) {
    whenUpgradedToCustomElement(devAssertElement(video)).then(function(el) {
      el.signals().signal(VideoServiceSignals_Enum.PLAYBACK_DELEGATED);
    });
  }
  function userInteractedWith(video) {
    video.signals().signal(VideoServiceSignals_Enum.USER_INTERACTED);
  }

  // src/core/dom/web-components.js
  var ShadowDomVersion_Enum = {
    NONE: "none",
    V0: "v0",
    V1: "v1"
  };
  var shadowDomSupportedVersion;
  var shadowCssSupported;
  function isShadowDomSupported() {
    return getShadowDomSupportedVersion() != ShadowDomVersion_Enum.NONE;
  }
  function isShadowCssSupported() {
    if (shadowCssSupported === void 0) {
      shadowCssSupported = isShadowDomSupported() && (isNative(Element.prototype.attachShadow) || isNative(Element.prototype.createShadowRoot));
    }
    return shadowCssSupported;
  }
  function isNative(func) {
    return !!func && func.toString().indexOf("[native code]") != -1;
  }
  function getShadowDomSupportedVersion(opt_elementClass) {
    if (shadowDomSupportedVersion === void 0) {
      shadowDomSupportedVersion = getShadowDomVersion(opt_elementClass || Element);
    }
    return shadowDomSupportedVersion;
  }
  function getShadowDomVersion(element) {
    if (!!element.prototype.attachShadow) {
      return ShadowDomVersion_Enum.V1;
    } else if (!!element.prototype.createShadowRoot) {
      return ShadowDomVersion_Enum.V0;
    }
    return ShadowDomVersion_Enum.NONE;
  }

  // third_party/webcomponentsjs/ShadowCSS.js
  var ShadowCSS = {
    strictStyling: false,
    scopeRules: function scopeRules(cssRules, scopeSelector2, opt_transformer) {
      var cssText2 = "";
      if (cssRules) {
        Array.prototype.forEach.call(cssRules, function(rule) {
          if (rule.selectorText && (rule.style && rule.style.cssText !== void 0)) {
            cssText2 += this.scopeSelector(rule.selectorText, scopeSelector2, this.strictStyling, opt_transformer) + " {\n	";
            cssText2 += this.propertiesFromRule(rule) + "\n}\n\n";
          } else if (rule.type === CSSRule.MEDIA_RULE) {
            cssText2 += "@media " + rule.media.mediaText + " {\n";
            cssText2 += this.scopeRules(rule.cssRules, scopeSelector2);
            cssText2 += "\n}\n\n";
          } else {
            try {
              if (rule.cssText) {
                cssText2 += rule.cssText + "\n\n";
              }
            } catch (x2) {
              if (rule.type === CSSRule.KEYFRAMES_RULE && rule.cssRules) {
                cssText2 += this.ieSafeCssTextFromKeyFrameRule(rule);
              }
            }
          }
        }, this);
      }
      return cssText2;
    },
    ieSafeCssTextFromKeyFrameRule: function ieSafeCssTextFromKeyFrameRule(rule) {
      var cssText2 = "@keyframes " + rule.name + " {";
      Array.prototype.forEach.call(rule.cssRules, function(rule2) {
        cssText2 += " " + rule2.keyText + " {" + rule2.style.cssText + "}";
      });
      cssText2 += " }";
      return cssText2;
    },
    scopeSelector: function scopeSelector(selector, _scopeSelector, strict, opt_transformer) {
      var r2 = [], parts = selector.split(",");
      parts.forEach(function(p) {
        p = p.trim();
        if (opt_transformer) {
          p = opt_transformer(p);
        }
        if (this.selectorNeedsScoping(p, _scopeSelector)) {
          p = strict && !p.match(polyfillHostNoCombinator) ? this.applyStrictSelectorScope(p, _scopeSelector) : this.applySelectorScope(p, _scopeSelector);
        }
        r2.push(p);
      }, this);
      return r2.join(", ");
    },
    selectorNeedsScoping: function selectorNeedsScoping(selector, scopeSelector2) {
      if (Array.isArray(scopeSelector2)) {
        return true;
      }
      var re = this.makeScopeMatcher(scopeSelector2);
      return !selector.match(re);
    },
    makeScopeMatcher: function makeScopeMatcher(scopeSelector2) {
      scopeSelector2 = scopeSelector2.replace(/\[/g, "\\[").replace(/\]/g, "\\]");
      return new RegExp("^(" + scopeSelector2 + ")" + selectorReSuffix, "m");
    },
    applySelectorScope: function applySelectorScope(selector, selectorScope) {
      return Array.isArray(selectorScope) ? this.applySelectorScopeList(selector, selectorScope) : this.applySimpleSelectorScope(selector, selectorScope);
    },
    applySelectorScopeList: function applySelectorScopeList(selector, scopeSelectorList) {
      var r2 = [];
      for (var i = 0, s; s = scopeSelectorList[i]; i++) {
        r2.push(this.applySimpleSelectorScope(selector, s));
      }
      return r2.join(", ");
    },
    applySimpleSelectorScope: function applySimpleSelectorScope(selector, scopeSelector2) {
      if (selector.match(polyfillHostRe)) {
        selector = selector.replace(polyfillHostNoCombinator, scopeSelector2);
        return selector.replace(polyfillHostRe, scopeSelector2 + " ");
      } else {
        return scopeSelector2 + " " + selector;
      }
    },
    applyStrictSelectorScope: function applyStrictSelectorScope(selector, scopeSelector2) {
      scopeSelector2 = scopeSelector2.replace(/\[is=([^\]]*)\]/g, "$1");
      var splits = [" ", ">", "+", "~"], scoped = selector, attrName = "[" + scopeSelector2 + "]";
      splits.forEach(function(sep) {
        var parts = scoped.split(sep);
        scoped = parts.map(function(p) {
          var t2 = p.trim().replace(polyfillHostRe, "");
          if (t2 && splits.indexOf(t2) < 0 && t2.indexOf(attrName) < 0) {
            p = t2.replace(/([^:]*)(:*)(.*)/, "$1" + attrName + "$2$3");
          }
          return p;
        }).join(sep);
      });
      return scoped;
    },
    propertiesFromRule: function propertiesFromRule(rule) {
      var cssText2 = rule.style.cssText;
      if (rule.style.content && !rule.style.content.match(/['"]+|attr/)) {
        cssText2 = cssText2.replace(/content:[^;]*;/g, "content: '" + rule.style.content + "';");
      }
      var style = rule.style;
      for (var i in style) {
        if (style[i] === "initial") {
          cssText2 += i + ": initial; ";
        }
      }
      return cssText2;
    }
  };
  var polyfillHost = "-shadowcsshost";
  var polyfillHostContext = "-shadowcsscontext";
  var parenSuffix = ")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)";
  var cssColonHostRe = new RegExp("(" + polyfillHost + parenSuffix, "gim");
  var cssColonHostContextRe = new RegExp("(" + polyfillHostContext + parenSuffix, "gim");
  var selectorReSuffix = "([>\\s~+[.,{:][\\s\\S]*)?$";
  var polyfillHostNoCombinator = polyfillHost + "-no-combinator";
  var polyfillHostRe = new RegExp(polyfillHost, "gim");
  var polyfillHostContextRe = new RegExp(polyfillHostContext, "gim");

  // src/shadow-embed.js
  var CSS_SELECTOR_BEG_REGEX = /[^\.\-\_0-9a-zA-Z]/;
  var CSS_SELECTOR_END_REGEX = /[^\-\_0-9a-zA-Z]/;
  function createShadowRoot(hostElement) {
    var win = getWin(hostElement);
    var existingRoot = hostElement.shadowRoot || hostElement.__AMP_SHADOW_ROOT;
    if (existingRoot) {
      existingRoot.innerHTML = "";
      return existingRoot;
    }
    var shadowRoot;
    var shadowDomSupported = getShadowDomSupportedVersion();
    if (shadowDomSupported == ShadowDomVersion_Enum.V1) {
      shadowRoot = hostElement.attachShadow({
        mode: "open"
      });
      if (!shadowRoot.styleSheets) {
        Object.defineProperty(shadowRoot, "styleSheets", {
          get: function get() {
            var items = [];
            iterateCursor(shadowRoot.childNodes, function(child) {
              if (child.tagName === "STYLE") {
                items.push(child.sheet);
              }
            });
            return items;
          }
        });
      }
    } else if (shadowDomSupported == ShadowDomVersion_Enum.V0) {
      shadowRoot = hostElement.createShadowRoot();
    } else {
      shadowRoot = createShadowRootPolyfill(hostElement);
    }
    if (!isShadowCssSupported()) {
      var rootId = "i-amphtml-sd-" + win.Math.floor(win.Math.random() * 1e4);
      shadowRoot["id"] = rootId;
      shadowRoot.host.classList.add(rootId);
      installCssTransformer(shadowRoot, function(css) {
        return transformShadowCss(shadowRoot, css);
      });
    }
    return shadowRoot;
  }
  function createShadowRootPolyfill(hostElement) {
    var doc = hostElement.ownerDocument;
    hostElement.classList.add("i-amphtml-shadow-host-polyfill");
    var hostStyle = doc.createElement("style");
    hostStyle.textContent = ".i-amphtml-shadow-host-polyfill>:not(i-amphtml-shadow-root){display:none!important}";
    hostElement.appendChild(hostStyle);
    var shadowRoot = doc.createElement("i-amphtml-shadow-root");
    hostElement.appendChild(shadowRoot);
    hostElement.__AMP_SHADOW_ROOT = shadowRoot;
    Object.defineProperty(hostElement, "shadowRoot", {
      enumerable: true,
      configurable: true,
      value: shadowRoot
    });
    shadowRoot.host = hostElement;
    shadowRoot.getElementById = function(id) {
      var escapedId = escapeCssSelectorIdent(id);
      return shadowRoot.querySelector("#" + escapedId);
    };
    Object.defineProperty(shadowRoot, "styleSheets", {
      get: function get() {
        if (!doc.styleSheets) {
          return [];
        }
        return toArray(doc.styleSheets).filter(function(styleSheet) {
          return shadowRoot.contains(styleSheet.ownerNode);
        });
      }
    });
    return shadowRoot;
  }
  function transformShadowCss(shadowRoot, css) {
    return scopeShadowCss(shadowRoot, css);
  }
  function scopeShadowCss(shadowRoot, css) {
    var id = devAssert2(shadowRoot["id"]);
    var doc = shadowRoot.ownerDocument;
    var rules = null;
    try {
      rules = getStylesheetRules(doc.implementation.createHTMLDocument(""), css);
    } catch (e) {
    }
    if (!rules) {
      try {
        rules = getStylesheetRules(doc, css);
      } catch (e) {
      }
    }
    if (!rules) {
      return css;
    }
    var scopeRules2 = ShadowCSS.scopeRules;
    return scopeRules2.call(ShadowCSS, rules, "." + id, transformRootSelectors);
  }
  function transformRootSelectors(selector) {
    return selector.replace(/(html|body)/g, rootSelectorPrefixer);
  }
  function rootSelectorPrefixer(match, name, pos, selector) {
    var prev = selector.charAt(pos - 1);
    var next = selector.charAt(pos + match.length);
    if ((!prev || CSS_SELECTOR_BEG_REGEX.test(prev)) && (!next || CSS_SELECTOR_END_REGEX.test(next))) {
      return "amp-" + match;
    }
    return match;
  }
  function getStylesheetRules(doc, css) {
    var style = doc.createElement("style");
    style.textContent = css;
    try {
      (doc.head || doc.documentElement).appendChild(style);
      if (style.sheet) {
        return style.sheet.cssRules;
      }
      return null;
    } finally {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    }
  }

  // extensions/amp-story/1.0/utils.js
  function timeStrToMillis(time, fallbackMs) {
    if (fallbackMs === void 0) {
      fallbackMs = NaN;
    }
    var match = time.toLowerCase().match(/^([0-9\.]+)\s*(s|ms)$/);
    var num = match ? match[1] : void 0;
    var units2 = match ? match[2] : void 0;
    if (!match || match.length !== 3 || units2 !== "s" && units2 !== "ms") {
      return fallbackMs;
    }
    return Math.round((units2 == "s" ? 1e3 : 1) * parseFloat(num));
  }
  function hasTapAction(el) {
    return el.hasAttribute("on") && !!el.getAttribute("on").match(/(^|;)\s*tap\s*:/);
  }
  function unscaledClientRect(el) {
    var _el$getBoundingClient = el.getBoundingClientRect(), height = _el$getBoundingClient.height, left = _el$getBoundingClient.left, top = _el$getBoundingClient.top, width = _el$getBoundingClient.width;
    var scaleFactorX = width == 0 ? 1 : width / el.offsetWidth;
    var scaleFactorY = height == 0 ? 1 : height / el.offsetHeight;
    return {
      left: left / scaleFactorX,
      top: top / scaleFactorY,
      width: width / scaleFactorX,
      height: height / scaleFactorY
    };
  }
  function ampMediaElementFor(el) {
    return closestAncestorElementBySelector(el, "amp-video, amp-audio");
  }
  function createShadowRootWithStyle(container, element, css) {
    var style = self.document.createElement("style");
    style.textContent = css;
    var containerToUse = getMode().test ? container : createShadowRoot(container);
    containerToUse.appendChild(style);
    containerToUse.appendChild(element);
    return container;
  }
  function getRGBFromCssColorValue(cssValue) {
    var regexPattern = /rgba?\((\d{1,3}), (\d{1,3}), (\d{1,3})/;
    if (!cssValue.match(regexPattern)) {
      user().error("UTILS", "getRGBFromCssColorValue expects a parameter in " + ("the form of 'rgba(0, 0, 0, 1)' or 'rgb(0, 0, 0)' but got " + cssValue));
      return {
        r: 0,
        g: 0,
        b: 0
      };
    }
    var matches2 = regexPattern.exec(cssValue);
    return {
      r: Number(matches2[1]),
      g: Number(matches2[2]),
      b: Number(matches2[3])
    };
  }
  function getTextColorForRGB(rgb) {
    var b = rgb.b, g = rgb.g, r2 = rgb.r;
    var getLinearRGBValue = function getLinearRGBValue2(x2) {
      x2 /= 255;
      return x2 <= 0.03928 ? x2 / 12.92 : Math.pow((x2 + 0.055) / 1.055, 2.4);
    };
    var linearR = getLinearRGBValue(r2);
    var linearG = getLinearRGBValue(g);
    var linearB = getLinearRGBValue(b);
    var L = 0.2126 * linearR + 0.7152 * linearG + 0.0722 * linearB;
    return L > 0.179 ? "#000" : "#FFF";
  }
  function setAttributeInMutate(elementImpl, name, opt_value) {
    var value = opt_value || "";
    elementImpl.mutateElement(function() {
      elementImpl.element.setAttribute(name, value);
    });
  }
  function removeAttributeInMutate(elementImpl, name) {
    elementImpl.mutateElement(function() {
      elementImpl.element.removeAttribute(name);
    });
  }
  function getSourceOriginForElement(element, url) {
    var domainName;
    try {
      domainName = getSourceOrigin(Services.urlForDoc(element).parse(url));
      domainName = Services.urlForDoc(element).parse(domainName).hostname;
    } catch (e) {
      domainName = Services.urlForDoc(element).parse(url).hostname;
    }
    return domainName;
  }
  function shouldShowStoryUrlInfo(viewer, storeService) {
    if (!storeService.get(StateProperty.CAN_SHOW_STORY_URL_INFO)) {
      return false;
    }
    var showStoryUrlInfo = viewer.getParam("showStoryUrlInfo");
    return showStoryUrlInfo ? showStoryUrlInfo !== "0" : viewer.isEmbedded();
  }
  function getStoryAttributeSrc(element, attribute, warn) {
    if (warn === void 0) {
      warn = false;
    }
    var storyEl = dev().assertElement(closestAncestorElementBySelector(element, "AMP-STORY"));
    var attrSrc = storyEl && storyEl.getAttribute(attribute);
    if (attrSrc) {
      assertHttpsUrl(attrSrc, storyEl, attribute);
    } else if (warn) {
      user().warn("AMP-STORY", "Expected " + attribute + " attribute on <amp-story>");
    }
    return attrSrc;
  }
  var TEXT_BACKGROUND_COLOR_ATTRIBUTE_NAME = "data-text-background-color";
  var TEXT_BACKGROUND_COLOR_SELECTOR = "[" + TEXT_BACKGROUND_COLOR_ATTRIBUTE_NAME + "]";
  function setTextBackgroundColor(element) {
    var elementsToUpgradeStyles = scopedQuerySelectorAll(element, TEXT_BACKGROUND_COLOR_SELECTOR);
    Array.prototype.forEach.call(elementsToUpgradeStyles, function(el) {
      var color = el.getAttribute(TEXT_BACKGROUND_COLOR_ATTRIBUTE_NAME);
      setStyle(el, "background-color", color);
    });
  }
  function triggerClickFromLightDom(anchorElement, domElement) {
    var outerAnchor = anchorElement.cloneNode();
    toggle(outerAnchor, false);
    domElement.appendChild(outerAnchor);
    outerAnchor.click();
    outerAnchor.remove();
  }
  var maybeMakeProxyUrl = function maybeMakeProxyUrl2(url, ampDoc) {
    var urlService = Services.urlForDoc(ampDoc);
    var loc = ampDoc.win.location;
    if (!urlService.isProxyOrigin(loc.origin) || urlService.isProxyOrigin(url)) {
      return url;
    }
    var resolvedRelativeUrl = urlService.resolveRelativeUrl(url, urlService.getSourceOrigin(loc.href));
    return loc.origin + "/i/s/" + resolvedRelativeUrl.replace(/https?:\/\//, "");
  };

  // build/amp-story-tooltip-1.0.css.js
  var CSS2 = ".i-amphtml-story-focused-state-layer{top:0!important;left:0!important;width:100%!important;height:100%!important;z-index:100001!important;position:absolute!important}.i-amphtml-story-focused-state-layer.i-amphtml-hidden{opacity:0!important;pointer-events:none!important;transition:opacity 0.1s cubic-bezier(0.4,0.0,1,1)!important}.i-amphtml-story-focused-state-layer-nav-button-container{height:100%!important;width:160px!important;position:absolute!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;-ms-flex-pack:center!important;justify-content:center!important}.i-amphtml-story-focused-state-layer-nav-button-container.i-amphtml-story-tooltip-nav-button-left{background-image:linear-gradient(90deg,rgba(33,33,33,0.15) 2%,rgba(33,33,33,0))!important;left:0!important}.i-amphtml-story-focused-state-layer-nav-button-container.i-amphtml-story-tooltip-nav-button-right{background-image:linear-gradient(90deg,rgba(33,33,33,0) 2%,rgba(33,33,33,0.15))!important;right:0!important}.i-amphtml-story-focused-state-layer-nav-button{position:absolute!important;top:0!important;bottom:0!important;margin:auto!important;width:48px!important;height:48px!important;padding:0!important;border:0!important;background-color:transparent!important;filter:drop-shadow(0px 0px 16px rgba(0,0,0,0.5))!important;transition:transform 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-focused-state-layer-nav-button.i-amphtml-story-tooltip-nav-button-left{left:-8px!important;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' fill='%23FFF'%3E%3Cpath d='M30.8 14.8 28 12 16 24l12 12 2.8-2.8-9.1-9.2z'/%3E%3Cpath d='M0 0h48v48H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-hidden .i-amphtml-story-focused-state-layer-nav-button.i-amphtml-story-tooltip-nav-button-left{transform:translate3d(8px,0,0);transition:transform 0s linear .1s!important}.i-amphtml-story-focused-state-layer-nav-button.i-amphtml-story-tooltip-nav-button-right{right:-8px!important;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' fill='%23FFF'%3E%3Cpath d='m20 12-2.8 2.8 9.1 9.2-9.1 9.2L20 36l12-12z'/%3E%3Cpath d='M0 0h48v48H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-hidden .i-amphtml-story-focused-state-layer-nav-button.i-amphtml-story-tooltip-nav-button-right{transform:translate3d(-8px,0,0);transition:transform 0s linear .1s!important}[desktop] .i-amphtml-story-focused-state-layer-nav-button-container{display:none!important}.i-amphtml-hidden>.i-amphtml-story-tooltip,.i-amphtml-hidden>.i-amphtml-story-tooltip.i-amphtml-tooltip-arrow-on-top{transform:translateZ(0)!important;transition:transform 0s linear 0.1s!important}.i-amphtml-story-tooltip{max-width:248px!important;height:40px!important;border-radius:6px!important;padding:8px!important;position:absolute!important;box-sizing:border-box!important;text-decoration:none!important;text-shadow:none!important;font-weight:500!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;background:#fff!important;box-shadow:0px 6px 16px rgba(0,0,0,0.16)!important;transform:translate3d(0,-16px,0)!important;transition:transform 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-tooltip-theme-dark{background:#202125!important}.i-amphtml-story-tooltip.i-amphtml-tooltip-arrow-on-top{transform:translate3d(0,16px,0)!important}.i-amphtml-tooltip-text{text-overflow:ellipsis!important;overflow:hidden!important;white-space:nowrap!important;margin:0px 5px!important;font-family:Roboto,sans-serif!important;font-size:14px!important;color:#3c4043!important;letter-spacing:0!important;line-height:20px!important}.i-amphtml-story-tooltip-theme-dark .i-amphtml-tooltip-text{color:#9aa0a6!important}.i-amphtml-story-tooltip-custom-icon{width:24px!important;height:24px!important;margin:0px 5px!important;background-size:cover!important;background-position:50%!important;background-repeat:no-repeat!important;filter:drop-shadow(0px 0px 8px rgba(0,0,0,0.08))!important;-ms-flex-negative:0;flex-shrink:0;border-radius:50%!important}.i-amphtml-story-tooltip-custom-icon.i-amphtml-hidden{display:none!important}.i-amphtml-tooltip-action-icon{width:16px!important;height:16px!important;margin:0px 5px!important;padding-bottom:2px!important;-ms-flex-negative:0;flex-shrink:0}.i-amphtml-tooltip-action-icon-launch{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 48 48' fill='%23757575'%3E%3Cpath d='M0 0h48v48H0z' fill='none'/%3E%3Cpath d='M38 38H10V10h14V6H10a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V24h-4v14zM28 6v4h7.2L15.5 29.7l2.8 2.8L38 12.8V20h4V6H28z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-tooltip-theme-dark .i-amphtml-tooltip-action-icon-launch{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 48 48' fill='rgba(255, 255, 255, 0.54)'%3E%3Cpath d='M0 0h48v48H0z' fill='none'/%3E%3Cpath d='M38 38H10V10h14V6H10a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V24h-4v14zM28 6v4h7.2L15.5 29.7l2.8 2.8L38 12.8V20h4V6H28z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-tooltip-arrow{border-right:8px solid transparent!important;border-left:8px solid transparent!important;border-top:10px solid #fff!important;position:absolute!important;bottom:-8px!important}.i-amphtml-story-tooltip-theme-dark .i-amphtml-story-tooltip-arrow{border-top:10px solid #202125!important}.i-amphtml-tooltip-arrow-on-top .i-amphtml-story-tooltip-arrow{bottom:auto!important;top:-8px!important;border-top:0px!important;border-bottom:10px solid #fff!important}.i-amphtml-story-tooltip-theme-dark .i-amphtml-tooltip-arrow-on-top .i-amphtml-story-tooltip-arrow{border-bottom:10px solid #202125!important}.amp-social-share-twitter-no-background{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cpath fill='%231da1f2' d='M153.6 301.6c94.4 0 146-78.2 146-146 0-2.2 0-4.4-.2-6.6a104.4 104.4 0 0 0 25.6-26.5 102.4 102.4 0 0 1-29.5 8 51.5 51.5 0 0 0 22.6-28.3 102.8 102.8 0 0 1-32.6 12.4 51.3 51.3 0 0 0-87.4 46.8 145.6 145.6 0 0 1-105.7-53.6 51.3 51.3 0 0 0 15.9 68.5 51 51 0 0 1-23.3-6.4v.6a51.3 51.3 0 0 0 41.1 50.3 51.2 51.2 0 0 1-23.1.9 51.4 51.4 0 0 0 48 35.6 103 103 0 0 1-63.8 22 104.4 104.4 0 0 1-12.2-.7 145.2 145.2 0 0 0 78.6 23'/%3E%3C/svg%3E\")}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story-tooltip.css*/";

  // extensions/amp-story/1.0/events.js
  var EventType = {
    MUTE: "ampstory:mute",
    UNMUTE: "ampstory:unmute",
    SWITCH_PAGE: "ampstory:switchpage",
    PREVIOUS_PAGE: "ampstory:previouspage",
    NEXT_PAGE: "ampstory:nextpage",
    PAGE_PROGRESS: "ampstory:pageprogress",
    REPLAY: "ampstory:replay",
    DEV_LOG_ENTRIES_AVAILABLE: "ampstory:devlogentriesavailable",
    NO_NEXT_PAGE: "ampstory:nonextpage",
    NO_PREVIOUS_PAGE: "ampstory:nopreviouspage",
    STORY_LOADED: "ampstory:load",
    PAGE_LOADED: "ampstory:pageload",
    DISPATCH_ACTION: "ampstory:dispatchaction"
  };
  function dispatch(win, source, eventName, payload, eventInit) {
    if (payload === void 0) {
      payload = void 0;
    }
    if (eventInit === void 0) {
      eventInit = void 0;
    }
    var event = createCustomEvent(win, eventName, payload, eventInit);
    source.dispatchEvent(event);
  }

  // src/service/localization/strings.js
  var LocalizedStringId_Enum = {
    AMP_STORY_ACTIVATE_BUTTON_TEXT: "83",
    AMP_STORY_AUDIO_MUTE_BUTTON_LABEL: "66",
    AMP_STORY_AUDIO_MUTE_BUTTON_TEXT: "31",
    AMP_STORY_AUDIO_UNMUTE_BUTTON_LABEL: "67",
    AMP_STORY_AUDIO_UNMUTE_NO_SOUND_TEXT: "33",
    AMP_STORY_AUDIO_UNMUTE_SOUND_TEXT: "32",
    AMP_STORY_CLOSE_BUTTON_LABEL: "87",
    AMP_STORY_CONSENT_ACCEPT_BUTTON_LABEL: "22",
    AMP_STORY_CONSENT_DECLINE_BUTTON_LABEL: "23",
    AMP_STORY_CONTINUE_ANYWAY_BUTTON_LABEL: "27",
    AMP_STORY_DISCOVERY_DIALOG_TEXT: "96",
    AMP_STORY_DOMAIN_DIALOG_HEADING_LABEL: "25",
    AMP_STORY_DOMAIN_DIALOG_HEADING_LINK: "26",
    AMP_STORY_EDUCATION_NAVIGATION_SWIPE_PROGRESS: "78",
    AMP_STORY_EDUCATION_NAVIGATION_SWIPE_INSTRUCTIONS: "79",
    AMP_STORY_EDUCATION_NAVIGATION_SWIPE_DISMISS: "80",
    AMP_STORY_EDUCATION_NAVIGATION_TAP_PROGRESS: "75",
    AMP_STORY_EDUCATION_NAVIGATION_TAP_PROGRESS_SINGLE: "81",
    AMP_STORY_EDUCATION_NAVIGATION_TAP_INSTRUCTIONS: "76",
    AMP_STORY_EDUCATION_NAVIGATION_TAP_DISMISS: "77",
    AMP_STORY_HAS_NEW_PAGE_TEXT: "64",
    AMP_STORY_FORM_SUBMIT_ERROR: "98",
    AMP_STORY_FORM_SUBMIT_SUCCESS: "99",
    AMP_STORY_HINT_UI_NEXT_LABEL: "2",
    AMP_STORY_HINT_UI_PREVIOUS_LABEL: "3",
    AMP_STORY_INFO_BUTTON_LABEL: "68",
    AMP_STORY_NEXT_PAGE: "91",
    AMP_STORY_NEXT_STORY: "90",
    AMP_STORY_OPEN_OUTLINK_TEXT: "97",
    AMP_STORY_PAGE_ATTACHMENT_OPEN_LABEL: "35",
    AMP_STORY_PAGINATION_BUTTON_PREVIOUS_PAGE_LABEL: "82",
    AMP_STORY_PAGE_ERROR_VIDEO: "65",
    AMP_STORY_PAGE_PLAY_VIDEO: "34",
    AMP_STORY_PAUSE_BUTTON_LABEL: "85",
    AMP_STORY_PLAY_BUTTON_LABEL: "86",
    AMP_STORY_PREVIOUS_PAGE: "93",
    AMP_STORY_READ_MORE: "100",
    AMP_STORY_REPLAY: "92",
    AMP_STORY_SHARE_BUTTON_LABEL: "69",
    AMP_STORY_SHARING_CLIPBOARD_FAILURE_TEXT: "4",
    AMP_STORY_SHARING_CLIPBOARD_SUCCESS_TEXT: "5",
    AMP_STORY_SHARING_PAGE_LABEL: "62",
    AMP_STORY_SHARING_PROVIDER_NAME_EMAIL: "6",
    AMP_STORY_SHARING_PROVIDER_NAME_FACEBOOK: "7",
    AMP_STORY_SHARING_PROVIDER_NAME_LINE: "63",
    AMP_STORY_SHARING_PROVIDER_NAME_LINK: "9",
    AMP_STORY_SHARING_PROVIDER_NAME_LINKEDIN: "10",
    AMP_STORY_SHARING_PROVIDER_NAME_PINTEREST: "11",
    AMP_STORY_SHARING_PROVIDER_NAME_SMS: "12",
    AMP_STORY_SHARING_PROVIDER_NAME_SYSTEM: "13",
    AMP_STORY_SHARING_PROVIDER_NAME_TUMBLR: "14",
    AMP_STORY_SHARING_PROVIDER_NAME_TWITTER: "15",
    AMP_STORY_SHARING_PROVIDER_NAME_WHATSAPP: "16",
    AMP_STORY_SIDEBAR_BUTTON_LABEL: "70",
    AMP_STORY_SKIP_TO_NEXT_BUTTON_LABEL: "88",
    AMP_STORY_TOOLTIP_EXPAND_TWEET: "36",
    AMP_STORY_WARNING_DESKTOP_HEIGHT_SIZE_TEXT: "37",
    AMP_STORY_WARNING_DESKTOP_SIZE_TEXT: "18",
    AMP_STORY_WARNING_DESKTOP_WIDTH_SIZE_TEXT: "38",
    AMP_STORY_WARNING_EXPERIMENT_DISABLED_TEXT: "19",
    AMP_STORY_WARNING_LANDSCAPE_ORIENTATION_TEXT: "20",
    AMP_STORY_WARNING_UNSUPPORTED_BROWSER_TEXT: "21",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_APPLY_NOW: "39",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_BOOK_NOW: "40",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_BUY_TICKETS: "41",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_DOWNLOAD: "42",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_EXPLORE: "43",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_GET_NOW: "44",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_INSTALL: "45",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_LEARN_MORE: "46",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_LISTEN: "47",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_MORE: "48",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_OPEN_APP: "49",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_ORDER_NOW: "50",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_PLAY: "51",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_READ: "52",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_SHOP: "53",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_SHOW: "54",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_SHOWTIMES: "55",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_SIGN_UP: "56",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_SUBSCRIBE: "57",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_USE_APP: "58",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_VIEW: "59",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_WATCH: "60",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_WATCH_EPISODE: "61",
    AMP_STORY_INTERACTIVE_DISCLAIMER_NOTE: "89",
    AMP_STORY_INTERACTIVE_RESULTS_SCORE: "84",
    AMP_STORY_INTERACTIVE_QUIZ_ANSWER_CHOICE_A: "71",
    AMP_STORY_INTERACTIVE_QUIZ_ANSWER_CHOICE_B: "72",
    AMP_STORY_INTERACTIVE_QUIZ_ANSWER_CHOICE_C: "73",
    AMP_STORY_INTERACTIVE_QUIZ_ANSWER_CHOICE_D: "74"
  };
  function cloneLocalizedStringBundle(localizedStringBundle) {
    return parseJson(JSON.stringify(localizedStringBundle));
  }
  function createPseudoLocale(localizedStringBundle, localizationFn) {
    var pseudoLocaleStringBundle = cloneLocalizedStringBundle(localizedStringBundle);
    Object.keys(pseudoLocaleStringBundle).forEach(function(localizedStringIdAsStr) {
      var localizedStringId = localizedStringIdAsStr;
      var entry = localizedStringBundle[localizedStringId];
      pseudoLocaleStringBundle[localizedStringId] = localizationFn(entry["string"] || entry);
    });
    return pseudoLocaleStringBundle;
  }

  // src/service/localization/index.js
  function _createForOfIteratorHelperLoose4(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray4(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray4(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray4(o, minLen);
    var n2 = Object.prototype.toString.call(o).slice(8, -1);
    if (n2 === "Object" && o.constructor)
      n2 = o.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray4(o, minLen);
  }
  function _arrayLikeToArray4(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  var FALLBACK_LANGUAGE_CODE = "default";
  var LANGUAGE_CODE_CHUNK_REGEX = /\w+/gi;
  function findLocalizedString(localizedStringBundles, languageCodes, localizedStringId) {
    for (var _iterator = _createForOfIteratorHelperLoose4(languageCodes), _step; !(_step = _iterator()).done; ) {
      var _localizedStringBundl;
      var code = _step.value;
      var entry = (_localizedStringBundl = localizedStringBundles[code]) == null ? void 0 : _localizedStringBundl[localizedStringId];
      if (entry != null) {
        return entry["string"] || entry;
      }
    }
    return null;
  }
  function getLanguageCodesFromString(languageCode) {
    if (!languageCode) {
      return ["en", FALLBACK_LANGUAGE_CODE];
    }
    var matches2 = languageCode.match(LANGUAGE_CODE_CHUNK_REGEX) || [];
    return matches2.reduce(function(fallbackLanguageCodeList, chunk, index) {
      var fallbackLanguageCode = matches2.slice(0, index + 1).join("-").toLowerCase();
      fallbackLanguageCodeList.unshift(fallbackLanguageCode);
      return fallbackLanguageCodeList;
    }, [FALLBACK_LANGUAGE_CODE]);
  }
  var LocalizationService = /* @__PURE__ */ function() {
    function LocalizationService2(element) {
      this.element_ = element;
      this.viewerLanguageCode_ = Services.viewerForDoc(element).getParam("lang");
      this.localizedStringBundles_ = {};
    }
    var _proto = LocalizationService2.prototype;
    _proto.getLanguageCodesForElement_ = function getLanguageCodesForElement_(element) {
      var languageEl = closest(element, function(el) {
        return el.hasAttribute("lang");
      });
      var languageCode = languageEl ? languageEl.getAttribute("lang") : null;
      var languageCodesToUse = getLanguageCodesFromString(languageCode || "");
      if (this.viewerLanguageCode_) {
        languageCodesToUse.unshift(this.viewerLanguageCode_);
      }
      return languageCodesToUse;
    };
    _proto.registerLocalizedStringBundle = function registerLocalizedStringBundle(languageCode, localizedStringBundle) {
      var normalizedLangCode = languageCode.toLowerCase();
      if (!this.localizedStringBundles_[normalizedLangCode]) {
        this.localizedStringBundles_[normalizedLangCode] = {};
      }
      Object.assign(this.localizedStringBundles_[normalizedLangCode], localizedStringBundle);
      return this;
    };
    _proto.getLocalizedString = function getLocalizedString(localizedStringId, elementToUse) {
      if (elementToUse === void 0) {
        elementToUse = this.element_;
      }
      var languageCodes = this.getLanguageCodesForElement_(elementToUse);
      return findLocalizedString(this.localizedStringBundles_, languageCodes, localizedStringId);
    };
    return LocalizationService2;
  }();

  // extensions/amp-story/1.0/amp-story-localization-service.js
  function getLocalizationService(element) {
    var localizationService = Services.localizationForDoc(element);
    if (!localizationService) {
      localizationService = new LocalizationService(element);
      registerServiceBuilderForDoc(element, "localization", function() {
        return localizationService;
      });
    }
    return localizationService;
  }
  function localize(context, key) {
    return getLocalizationService(context).getLocalizedString(key);
  }

  // src/core/dom/static-template.js
  function htmlRefs(root) {
    var elements = root.querySelectorAll("[ref]");
    var refs = map();
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var ref = devAssert(element.getAttribute("ref"), "Empty ref attr");
      element.removeAttribute("ref");
      devAssert(refs[ref] === void 0, "Duplicate ref");
      refs[ref] = element;
    }
    return refs;
  }

  // node_modules/obj-str/dist/obj-str.mjs
  function obj_str_default(obj) {
    var k, cls = "";
    for (k in obj) {
      if (obj[k]) {
        cls && (cls += " ");
        cls += k;
      }
    }
    return cls;
  }

  // extensions/amp-story/1.0/amp-story-embedded-component.js
  function _extends5() {
    _extends5 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends5.apply(this, arguments);
  }
  var LAUNCH_ICON_CLASS = "i-amphtml-tooltip-action-icon-launch";
  var TOOLTIP_CLOSE_ANIMATION_MS = 100;
  var DARK_THEME_CLASS = "i-amphtml-story-tooltip-theme-dark";
  var TooltipTheme = {
    LIGHT: "light",
    DARK: "dark"
  };
  var EMBEDDED_COMPONENTS_SELECTORS = {
    "amp-twitter": {
      customIconClassName: "amp-social-share-twitter-no-background",
      actionIcon: LAUNCH_ICON_CLASS,
      localizedStringId: LocalizedStringId_Enum.AMP_STORY_TOOLTIP_EXPAND_TWEET,
      selector: "amp-twitter[interactive]"
    }
  };
  var LAUNCHABLE_COMPONENTS = _extends5({
    "a": {
      actionIcon: LAUNCH_ICON_CLASS,
      selector: "a[href]:not([affiliate-link-icon])"
    }
  }, EMBEDDED_COMPONENTS_SELECTORS);
  function getComponentSelectors(components) {
    var componentSelectors = {};
    Object.keys(components).forEach(function(componentName) {
      componentSelectors[componentName] = components[componentName].selector;
    });
    return componentSelectors;
  }
  function embeddedElementsSelectors() {
    return Object.keys(EMBEDDED_COMPONENTS_SELECTORS).join(",");
  }
  function interactiveElementsSelectors() {
    return Object.values(getComponentSelectors(LAUNCHABLE_COMPONENTS)).join(",");
  }
  var MIN_VERTICAL_SPACE = 48;
  var VERTICAL_EDGE_PADDING = 24;
  var HORIZONTAL_EDGE_PADDING = 32;
  var TOOLTIP_ARROW_RIGHT_PADDING = 24;
  var TAG4 = "amp-story-embedded-component";
  var AmpStoryEmbeddedComponent = /* @__PURE__ */ function() {
    function AmpStoryEmbeddedComponent2(win, storyEl) {
      var _this = this;
      this.win_ = win;
      this.storyEl_ = storyEl;
      this.shadowRoot_ = null;
      this.focusedStateOverlay_ = null;
      this.tooltip_ = null;
      this.tooltipArrow_ = null;
      this.storeService_ = getStoreService(this.win_);
      this.mutator_ = Services.mutatorForDoc(getAmpdoc(this.win_.document));
      this.analyticsService_ = getAnalyticsService(this.win_, storyEl);
      this.timer_ = Services.timerFor(this.win_);
      this.triggeringTarget_ = null;
      this.componentPage_ = null;
      this.storeService_.subscribe(StateProperty.INTERACTIVE_COMPONENT_STATE, function(component) {
        _this.onComponentStateUpdate_(component);
      });
      this.state_ = EmbeddedComponentState.HIDDEN;
      this.buttonLeft_ = null;
      this.buttonRight_ = null;
    }
    var _proto = AmpStoryEmbeddedComponent2.prototype;
    _proto.onComponentStateUpdate_ = function onComponentStateUpdate_(component) {
      switch (component.state) {
        case EmbeddedComponentState.HIDDEN:
          this.setState_(EmbeddedComponentState.HIDDEN, null);
          break;
        case EmbeddedComponentState.FOCUSED:
          if (this.state_ !== EmbeddedComponentState.HIDDEN) {
            dev().warn(TAG4, "Invalid component update. Not possible to go from " + this.state_ + "\n              to " + component.state);
          }
          this.setState_(EmbeddedComponentState.FOCUSED, component);
          break;
      }
    };
    _proto.setState_ = function setState_(state, component) {
      switch (state) {
        case EmbeddedComponentState.FOCUSED:
          this.state_ = state;
          this.onFocusedStateUpdate_(component);
          this.analyticsService_.triggerEvent(StoryAnalyticsEvent.FOCUS, this.triggeringTarget_);
          break;
        case EmbeddedComponentState.HIDDEN:
          this.state_ = state;
          this.onFocusedStateUpdate_(null);
          break;
        default:
          dev().warn(TAG4, "EmbeddedComponentState " + this.state_ + " does not exist");
          break;
      }
    };
    _proto.buildFocusedState_ = function buildFocusedState_() {
      var _this2 = this;
      this.shadowRoot_ = this.win_.document.createElement("div");
      this.focusedStateOverlay_ = this.renderFocusedStateElement_();
      createShadowRootWithStyle(this.shadowRoot_, this.focusedStateOverlay_, CSS2);
      this.focusedStateOverlay_.addEventListener("click", function(event) {
        return _this2.onOutsideTooltipClick_(event);
      });
      this.tooltip_.addEventListener("click", function(event) {
        event.stopPropagation();
        _this2.analyticsService_.triggerEvent(StoryAnalyticsEvent.CLICK_THROUGH, _this2.triggeringTarget_);
        _this2.tooltip_.href && _this2.onAnchorClick_(event);
      }, true);
      return this.shadowRoot_;
    };
    _proto.close_ = function close_() {
      var _this3 = this;
      this.timer_.delay(function() {
        _this3.clearTooltip_();
      }, TOOLTIP_CLOSE_ANIMATION_MS);
      this.storeService_.dispatch(Action.TOGGLE_INTERACTIVE_COMPONENT, {
        state: EmbeddedComponentState.HIDDEN
      });
    };
    _proto.onFocusedStateUpdate_ = function onFocusedStateUpdate_(component) {
      var _this4 = this;
      if (!component) {
        this.mutator_.mutateElement(dev().assertElement(this.focusedStateOverlay_), function() {
          _this4.focusedStateOverlay_.classList.toggle("i-amphtml-hidden", true);
        });
        return;
      }
      this.triggeringTarget_ = component.element;
      if (!this.focusedStateOverlay_) {
        this.storyEl_.appendChild(this.buildFocusedState_());
        this.initializeListeners_();
      }
      this.timer_.delay(function() {
        _this4.buildTooltip_(component);
      }, TOOLTIP_CLOSE_ANIMATION_MS);
    };
    _proto.buildTooltip_ = function buildTooltip_(component) {
      var _this5 = this;
      this.updateTooltipBehavior_(component.element);
      this.updateTooltipEl_(component);
      this.componentPage_ = devAssert2(this.storyEl_.querySelector("amp-story-page[active]"));
      this.mutator_.mutateElement(dev().assertElement(this.focusedStateOverlay_), function() {
        _this5.focusedStateOverlay_.classList.toggle("i-amphtml-hidden", false);
        tryFocus(dev().assertElement(_this5.focusedStateOverlay_.querySelector("a.i-amphtml-story-tooltip")));
      });
    };
    _proto.initializeListeners_ = function initializeListeners_() {
      var _this6 = this;
      this.storeService_.subscribe(StateProperty.UI_STATE, function(uiState) {
        _this6.onUIStateUpdate_(uiState);
      }, true);
      this.storeService_.subscribe(StateProperty.CURRENT_PAGE_ID, function() {
        if (_this6.state_ === EmbeddedComponentState.FOCUSED) {
          _this6.close_();
        }
      });
    };
    _proto.onUIStateUpdate_ = function onUIStateUpdate_(uiState) {
      var _this7 = this;
      this.mutator_.mutateElement(dev().assertElement(this.focusedStateOverlay_), function() {
        var isDesktop = [UIType.DESKTOP_FULLBLEED, UIType.DESKTOP_ONE_PANEL].includes(uiState);
        _this7.focusedStateOverlay_.toggleAttribute("desktop", isDesktop);
      });
    };
    _proto.updateTooltipEl_ = function updateTooltipEl_(component) {
      var embedConfig = userAssert2(this.getEmbedConfigFor_(component.element), "Invalid embed config for target", component.element);
      var theme = this.triggeringTarget_.getAttribute("theme");
      if (theme && TooltipTheme.DARK === theme.toLowerCase()) {
        this.tooltip_.classList.add(DARK_THEME_CLASS);
      }
      this.updateTooltipText_(component.element, embedConfig);
      this.updateTooltipComponentIcon_(component.element, embedConfig);
      this.updateTooltipActionIcon_(embedConfig);
      this.updateNavButtons_();
      this.positionTooltip_(component);
    };
    _proto.updateTooltipBehavior_ = function updateTooltipBehavior_(target) {
      if (matches(target, interactiveElementsSelectors())) {
        dev().assertElement(this.tooltip_).setAttribute("href", this.getElementHref_(target));
        return;
      }
    };
    _proto.getElementHref_ = function getElementHref_(target) {
      if (target.tagName.toLowerCase() == "amp-twitter") {
        return "https://twitter.com/_/status/" + target.getAttribute("data-tweetid");
      }
      var elUrl = target.getAttribute("href");
      if (!isProtocolValid(elUrl)) {
        user().error(TAG4, "The tooltip url is invalid");
        return "";
      }
      return parseUrlDeprecated(elUrl).href;
    };
    _proto.getEmbedConfigFor_ = function getEmbedConfigFor_(target) {
      var config = LAUNCHABLE_COMPONENTS[target.tagName.toLowerCase()];
      if (config && matches(target, config.selector)) {
        return config;
      }
      user().error(TAG4, "No config matching provided target.");
      return null;
    };
    _proto.updateTooltipText_ = function updateTooltipText_(target, embedConfig) {
      var tooltipText = target.getAttribute("data-tooltip-text") || localize(this.storyEl_, embedConfig.localizedStringId) || getSourceOriginForElement(target, this.getElementHref_(target));
      var existingTooltipText = this.tooltip_.querySelector(".i-amphtml-tooltip-text");
      existingTooltipText.textContent = tooltipText;
    };
    _proto.updateTooltipActionIcon_ = function updateTooltipActionIcon_(embedConfig) {
      var actionIcon = this.tooltip_.querySelector(".i-amphtml-tooltip-action-icon");
      this.mutator_.mutateElement(dev().assertElement(actionIcon), function() {
        actionIcon.classList.toggle(embedConfig.actionIcon, true);
      });
    };
    _proto.updateTooltipComponentIcon_ = function updateTooltipComponentIcon_(target, embedConfig) {
      var iconUrl = target.getAttribute("data-tooltip-icon");
      if (!isProtocolValid(iconUrl)) {
        user().error(TAG4, "The tooltip icon url is invalid");
        return;
      }
      var tooltipCustomIcon = this.tooltip_.querySelector(".i-amphtml-story-tooltip-custom-icon");
      if (!iconUrl && !embedConfig.customIconClassName) {
        tooltipCustomIcon.classList.toggle("i-amphtml-hidden", true);
        return;
      }
      if (iconUrl) {
        this.mutator_.mutateElement(dev().assertElement(tooltipCustomIcon), function() {
          setImportantStyles(dev().assertElement(tooltipCustomIcon), {
            "background-image": "url(" + parseUrlDeprecated(iconUrl).href + ")"
          });
        });
        return;
      }
      this.mutator_.mutateElement(dev().assertElement(tooltipCustomIcon), function() {
        tooltipCustomIcon.classList.add(embedConfig.customIconClassName);
      });
    };
    _proto.updateNavButtons_ = function updateNavButtons_() {
      if (!this.isLastPage_()) {
        this.buttonLeft_.removeAttribute("hidden");
        this.buttonRight_.removeAttribute("hidden");
      } else {
        this.storeService_.get(StateProperty.RTL_STATE) ? this.buttonLeft_.setAttribute("hidden", true) : this.buttonRight_.setAttribute("hidden", true);
      }
    };
    _proto.isLastPage_ = function isLastPage_() {
      var pageIndex = this.storeService_.get(StateProperty.CURRENT_PAGE_INDEX);
      var pageCount = this.storeService_.get(StateProperty.PAGE_IDS).length;
      return pageIndex + 1 === pageCount;
    };
    _proto.positionTooltip_ = function positionTooltip_(component) {
      var _this8 = this;
      var state = {
        arrowOnTop: false
      };
      this.mutator_.measureMutateElement(this.storyEl_, function() {
        var pageRect = _this8.componentPage_.getBoundingClientRect();
        _this8.horizontalPositioning_(component, pageRect, state);
        _this8.verticalPositioning_(component, pageRect, state);
      }, function() {
        _this8.tooltip_.classList.toggle("i-amphtml-tooltip-arrow-on-top", state.arrowOnTop);
        setImportantStyles(dev().assertElement(_this8.tooltipArrow_), {
          left: state.arrowLeftOffset + "px"
        });
        setImportantStyles(devAssert2(_this8.tooltip_), {
          top: state.tooltipTop + "px",
          left: state.tooltipLeft + "px"
        });
      });
    };
    _proto.verticalPositioning_ = function verticalPositioning_(component, pageRect, state) {
      var tooltipHeight = this.tooltip_.offsetHeight;
      var verticalOffset = VERTICAL_EDGE_PADDING;
      state.tooltipTop = component.clientY - tooltipHeight - verticalOffset;
      if (state.tooltipTop < pageRect.top + MIN_VERTICAL_SPACE) {
        state.arrowOnTop = true;
        state.tooltipTop = component.clientY + verticalOffset;
      }
    };
    _proto.horizontalPositioning_ = function horizontalPositioning_(component, pageRect, state) {
      var tooltipWidth = this.tooltip_.offsetWidth;
      state.tooltipLeft = component.clientX - tooltipWidth / 2;
      var maxLeft = pageRect.left + pageRect.width - HORIZONTAL_EDGE_PADDING - tooltipWidth;
      var minLeft = pageRect.left + HORIZONTAL_EDGE_PADDING;
      state.tooltipLeft = Math.min(state.tooltipLeft, maxLeft);
      state.tooltipLeft = Math.max(state.tooltipLeft, minLeft);
      state.arrowLeftOffset = Math.abs(component.clientX - state.tooltipLeft - this.tooltipArrow_.offsetWidth / 2);
      state.arrowLeftOffset = Math.min(state.arrowLeftOffset, tooltipWidth - TOOLTIP_ARROW_RIGHT_PADDING);
      state.arrowLeftOffset = Math.max(state.arrowLeftOffset, 0);
    };
    _proto.onOutsideTooltipClick_ = function onOutsideTooltipClick_(event) {
      var _this9 = this;
      if (!closest(dev().assertElement(event.target), function(el) {
        return el == _this9.tooltip_;
      })) {
        event.stopPropagation();
        this.close_();
      }
    };
    _proto.clearTooltip_ = function clearTooltip_() {
      var _this10 = this;
      this.mutator_.mutateElement(dev().assertElement(this.tooltip_), function() {
        var actionIcon = _this10.tooltip_.querySelector(".i-amphtml-tooltip-action-icon");
        actionIcon.className = "i-amphtml-tooltip-action-icon";
        var customIcon = _this10.tooltip_.querySelector(".i-amphtml-story-tooltip-custom-icon");
        customIcon.className = "i-amphtml-story-tooltip-custom-icon";
        resetStyles(customIcon, ["background-image"]);
        _this10.tooltip_.classList.remove(DARK_THEME_CLASS);
        _this10.tooltip_.removeAttribute("href");
      });
    };
    _proto.renderFocusedStateElement_ = function renderFocusedStateElement_() {
      var _this11 = this;
      var tooltipOverlay = createElement("section", {
        class: obj_str_default({
          "i-amphtml-story-focused-state-layer": true,
          "i-amphtml-story-system-reset i-amphtml-hidden": true
        })
      }, createElement("div", {
        class: obj_str_default({
          "i-amphtml-story-focused-state-layer-nav-button-container": true,
          "i-amphtml-story-tooltip-nav-button-left": true
        })
      }, createElement("button", {
        ref: "buttonLeft",
        class: obj_str_default({
          "i-amphtml-story-focused-state-layer-nav-button": true,
          "i-amphtml-story-tooltip-nav-button-left": true
        })
      })), createElement("div", {
        class: obj_str_default({
          "i-amphtml-story-focused-state-layer-nav-button-container": true,
          "i-amphtml-story-tooltip-nav-button-right": true
        })
      }, createElement("button", {
        ref: "buttonRight",
        class: obj_str_default({
          "i-amphtml-story-focused-state-layer-nav-button": true,
          "i-amphtml-story-tooltip-nav-button-right": true
        })
      })), createElement("a", {
        class: "i-amphtml-story-tooltip",
        target: "_blank",
        ref: "tooltip",
        role: "tooltip"
      }, createElement("div", {
        class: "i-amphtml-story-tooltip-custom-icon"
      }), createElement("p", {
        class: "i-amphtml-tooltip-text",
        ref: "text"
      }), createElement("div", {
        class: "i-amphtml-tooltip-action-icon"
      }), createElement("div", {
        class: "i-amphtml-story-tooltip-arrow",
        ref: "arrow"
      })));
      var overlayEls = htmlRefs(tooltipOverlay);
      var _overlayEls = overlayEls, arrow = _overlayEls.arrow, buttonLeft = _overlayEls.buttonLeft, buttonRight = _overlayEls.buttonRight, tooltip = _overlayEls.tooltip;
      this.tooltip_ = tooltip;
      this.tooltipArrow_ = arrow;
      this.buttonLeft_ = buttonLeft;
      this.buttonRight_ = buttonRight;
      var rtlState = this.storeService_.get(StateProperty.RTL_STATE);
      this.buttonLeft_.addEventListener("click", function(e) {
        return _this11.onNavigationalClick_(e, rtlState ? EventType.NEXT_PAGE : EventType.PREVIOUS_PAGE);
      });
      this.buttonRight_.addEventListener("click", function(e) {
        return _this11.onNavigationalClick_(e, rtlState ? EventType.PREVIOUS_PAGE : EventType.NEXT_PAGE);
      });
      return tooltipOverlay;
    };
    _proto.onNavigationalClick_ = function onNavigationalClick_(event, direction) {
      event.preventDefault();
      this.storeService_.dispatch(Action.SET_ADVANCEMENT_MODE, AdvancementMode.MANUAL_ADVANCE);
      dispatch(this.win_, dev().assertElement(this.shadowRoot_), direction, void 0, {
        bubbles: true
      });
    };
    _proto.onAnchorClick_ = function onAnchorClick_(event) {
      event.preventDefault();
      triggerClickFromLightDom(this.tooltip_, this.storyEl_);
    };
    _proto.getShadowRootForTesting = function getShadowRootForTesting() {
      return this.shadowRoot_;
    };
    return AmpStoryEmbeddedComponent2;
  }();

  // extensions/amp-story/1.0/page-advancement.js
  function _inherits4(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf4(subClass, superClass);
  }
  function _setPrototypeOf4(o, p) {
    _setPrototypeOf4 = Object.setPrototypeOf || function _setPrototypeOf13(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf4(o, p);
  }
  function _createSuper4(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct4();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf4(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf4(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn4(this, result);
    };
  }
  function _possibleConstructorReturn4(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized4(self2);
  }
  function _assertThisInitialized4(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct4() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf4(o) {
    _getPrototypeOf4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf13(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf4(o);
  }
  var HOLD_TOUCH_THRESHOLD_MS = 500;
  var NEXT_SCREEN_AREA_RATIO = 0.75;
  var PREVIOUS_SCREEN_AREA_RATIO = 0.25;
  var TOP_REGION = 0.8;
  var PROTECTED_SCREEN_EDGE_PERCENT = 12;
  var MINIMUM_PROTECTED_SCREEN_EDGE_PX = 48;
  var MINIMUM_TIME_BASED_AUTO_ADVANCE_MS = 500;
  var MAX_LINK_SCREEN_PERCENT = 0.8;
  var POLL_INTERVAL_MS = 300;
  var TapNavigationDirection = {
    "NEXT": 1,
    "PREVIOUS": 2
  };
  var AdvancementConfig = /* @__PURE__ */ function() {
    function AdvancementConfig2() {
      this.progressListeners_ = [];
      this.advanceListeners_ = [];
      this.previousListeners_ = [];
      this.tapNavigationListeners_ = [];
      this.isRunning_ = false;
    }
    var _proto = AdvancementConfig2.prototype;
    _proto.addProgressListener = function addProgressListener(progressListener) {
      this.progressListeners_.push(progressListener);
    };
    _proto.addAdvanceListener = function addAdvanceListener(advanceListener) {
      this.advanceListeners_.push(advanceListener);
    };
    _proto.addPreviousListener = function addPreviousListener(previousListener) {
      this.previousListeners_.push(previousListener);
    };
    _proto.addOnTapNavigationListener = function addOnTapNavigationListener(onTapNavigationListener) {
      this.tapNavigationListeners_.push(onTapNavigationListener);
    };
    _proto.start = function start() {
      this.isRunning_ = true;
    };
    _proto.stop = function stop(unusedCanResume) {
      this.isRunning_ = false;
    };
    _proto.isAutoAdvance = function isAutoAdvance() {
      return false;
    };
    _proto.isRunning = function isRunning() {
      return this.isRunning_;
    };
    _proto.getProgress = function getProgress() {
      return 1;
    };
    _proto.onProgressUpdate = function onProgressUpdate() {
      var progress = this.getProgress();
      this.progressListeners_.forEach(function(progressListener) {
        progressListener(progress);
      });
    };
    _proto.onAdvance = function onAdvance() {
      this.advanceListeners_.forEach(function(advanceListener) {
        advanceListener();
      });
    };
    _proto.onPrevious = function onPrevious() {
      this.previousListeners_.forEach(function(previousListener) {
        previousListener();
      });
    };
    _proto.onTapNavigation = function onTapNavigation(navigationDirection) {
      this.tapNavigationListeners_.forEach(function(navigationListener) {
        navigationListener(navigationDirection);
      });
    };
    AdvancementConfig2.forElement = function forElement(win, element) {
      var manualAdvancement = ManualAdvancement.fromElement(win, element);
      if (manualAdvancement) {
        return manualAdvancement;
      }
      var autoAdvanceStr = element.getAttribute("auto-advance-after");
      if (autoAdvanceStr) {
        var timeBasedAdvancement = TimeBasedAdvancement.fromAutoAdvanceString(autoAdvanceStr, win, element);
        if (timeBasedAdvancement) {
          return timeBasedAdvancement;
        }
        var mediaBasedAdvancement = MediaBasedAdvancement.fromAutoAdvanceString(autoAdvanceStr, win, element);
        if (mediaBasedAdvancement) {
          return mediaBasedAdvancement;
        }
      }
      return new AdvancementConfig2();
    };
    return AdvancementConfig2;
  }();
  var ManualAdvancement = /* @__PURE__ */ function(_AdvancementConfig) {
    _inherits4(ManualAdvancement2, _AdvancementConfig);
    var _super = _createSuper4(ManualAdvancement2);
    function ManualAdvancement2(win, element) {
      var _this;
      _this = _super.call(this);
      _this.element_ = element;
      _this.timeoutId_ = null;
      _this.timer_ = Services.timerFor(win);
      _this.touchstartTimestamp_ = null;
      _this.pausedState_ = false;
      _this.ampdoc_ = getAmpdoc(win.document);
      _this.startListening_();
      if (element.ownerDocument.defaultView) {
        _this.storeService_ = getStoreService(element.ownerDocument.defaultView);
      }
      var rtlState = _this.storeService_.get(StateProperty.RTL_STATE);
      _this.sections_ = {
        left: {
          widthRatio: rtlState ? NEXT_SCREEN_AREA_RATIO : PREVIOUS_SCREEN_AREA_RATIO,
          direction: rtlState ? TapNavigationDirection.NEXT : TapNavigationDirection.PREVIOUS
        },
        right: {
          widthRatio: rtlState ? PREVIOUS_SCREEN_AREA_RATIO : NEXT_SCREEN_AREA_RATIO,
          direction: rtlState ? TapNavigationDirection.PREVIOUS : TapNavigationDirection.NEXT
        }
      };
      return _this;
    }
    var _proto2 = ManualAdvancement2.prototype;
    _proto2.getProgress = function getProgress() {
      return 1;
    };
    _proto2.startListening_ = function startListening_() {
      var _this2 = this;
      this.element_.addEventListener("touchstart", this.onTouchstart_.bind(this), true);
      this.element_.addEventListener("touchend", this.onTouchend_.bind(this), true);
      this.element_.addEventListener("click", this.maybePerformNavigation_.bind(this), true);
      this.ampdoc_.onVisibilityChanged(function() {
        _this2.ampdoc_.isVisible() ? _this2.processTouchend_() : null;
      });
    };
    _proto2.isAutoAdvance = function isAutoAdvance() {
      return false;
    };
    _proto2.onTouchstart_ = function onTouchstart_(event) {
      var _this3 = this;
      if (this.touchstartTimestamp_ || !this.shouldHandleEvent_(event)) {
        return;
      }
      this.touchstartTimestamp_ = Date.now();
      this.pausedState_ = this.storeService_.get(StateProperty.PAUSED_STATE);
      this.storeService_.dispatch(Action.TOGGLE_PAUSED, true);
      this.timeoutId_ = this.timer_.delay(function() {
        _this3.storeService_.dispatch(Action.TOGGLE_SYSTEM_UI_IS_VISIBLE, false);
      }, HOLD_TOUCH_THRESHOLD_MS);
    };
    _proto2.onTouchend_ = function onTouchend_(event) {
      var touchesCount = (event.touches || []).length;
      if (!this.touchstartTimestamp_ || touchesCount > 0) {
        return;
      }
      if (Date.now() - this.touchstartTimestamp_ > HOLD_TOUCH_THRESHOLD_MS) {
        event.preventDefault();
      }
      this.processTouchend_();
    };
    _proto2.processTouchend_ = function processTouchend_() {
      if (!this.touchstartTimestamp_) {
        return;
      }
      this.storeService_.dispatch(Action.TOGGLE_PAUSED, this.pausedState_);
      this.touchstartTimestamp_ = null;
      this.timer_.cancel(this.timeoutId_);
      this.timeoutId_ = null;
      if (!this.storeService_.get(StateProperty.SYSTEM_UI_IS_VISIBLE_STATE)) {
        this.storeService_.dispatch(Action.TOGGLE_SYSTEM_UI_IS_VISIBLE, true);
      }
    };
    _proto2.isNavigationalClick_ = function isNavigationalClick_(event) {
      return !closest(dev().assertElement(event.target), function(el) {
        return hasTapAction(el);
      }, this.element_);
    };
    _proto2.isProtectedTarget_ = function isProtectedTarget_(event) {
      return !!closest(dev().assertElement(event.target), function(el) {
        var elementRole = el.getAttribute("role");
        if (elementRole) {
          return !!TAPPABLE_ARIA_ROLES[elementRole.toLowerCase()];
        }
        return false;
      }, this.element_);
    };
    _proto2.shouldHandleEvent_ = function shouldHandleEvent_(event) {
      var _this4 = this;
      var shouldHandleEvent = false;
      var tagName;
      closest(dev().assertElement(event.target), function(el) {
        tagName = el.tagName.toLowerCase();
        if (el.classList.contains("amp-story-draggable-drawer-root")) {
          shouldHandleEvent = false;
          return true;
        }
        if (tagName.startsWith("amp-story-interactive-") && (!_this4.isInStoryPageSideEdge_(event, _this4.getStoryPageRect_()) || event.path[0].classList.contains("i-amphtml-story-interactive-disclaimer-icon"))) {
          shouldHandleEvent = false;
          return true;
        }
        if (el.classList.contains("i-amphtml-story-interactive-disclaimer-dialog-container")) {
          shouldHandleEvent = false;
          return true;
        }
        if (tagName === "amp-story-page") {
          shouldHandleEvent = true;
          return true;
        }
        return false;
      }, this.element_);
      return shouldHandleEvent;
    };
    _proto2.canShowTooltip_ = function canShowTooltip_(event, pageRect) {
      var valid = true;
      var tagName;
      var target = dev().assertElement(event.target);
      var canShow = !!closest(target, function(el) {
        tagName = el.tagName.toLowerCase();
        if (tagName === "amp-story-cta-layer" || tagName === "amp-story-page-attachment" || tagName === "amp-story-page-outlink") {
          valid = false;
          return false;
        }
        return tagName === "amp-story-page" && valid;
      }, this.element_);
      if (canShow && (this.isInStoryPageSideEdge_(event, pageRect) || this.isTooLargeOnPage_(event, pageRect))) {
        event.preventDefault();
        return false;
      }
      if (target.getAttribute("show-tooltip") === "auto" && this.isInScreenBottom_(target, pageRect)) {
        target.setAttribute("target", "_blank");
        target.setAttribute("role", "link");
        return false;
      }
      return canShow;
    };
    _proto2.isInScreenBottom_ = function isInScreenBottom_(target, pageRect) {
      var targetRect = target.getBoundingClientRect();
      return targetRect.top - pageRect.top >= pageRect.height * TOP_REGION;
    };
    _proto2.isInStoryPageSideEdge_ = function isInStoryPageSideEdge_(event, pageRect) {
      if (event.clientX === 0 && event.clientY === 0) {
        return false;
      }
      var sideEdgeWidthFromPercent = pageRect.width * (PROTECTED_SCREEN_EDGE_PERCENT / 100);
      var sideEdgeLimit = Math.max(sideEdgeWidthFromPercent, MINIMUM_PROTECTED_SCREEN_EDGE_PX);
      return event.clientX <= pageRect.x + sideEdgeLimit || event.clientX >= pageRect.x + pageRect.width - sideEdgeLimit;
    };
    _proto2.isTooLargeOnPage_ = function isTooLargeOnPage_(event, pageRect) {
      if (event.clientX === 0 && event.clientY === 0) {
        return false;
      }
      var target = dev().assertElement(event.target);
      var targetRect = target.getBoundingClientRect();
      if (targetRect.height * targetRect.width / (pageRect.width * pageRect.height) >= MAX_LINK_SCREEN_PERCENT) {
        user().error("AMP-STORY-PAGE", "Link was too large; skipped for navigation. For more information, see https://github.com/ampproject/amphtml/issues/31108");
        return true;
      }
      return false;
    };
    _proto2.isHandledByEmbeddedComponent_ = function isHandledByEmbeddedComponent_(event, pageRect) {
      var target = dev().assertElement(event.target);
      return matches(target, interactiveElementsSelectors()) && this.canShowTooltip_(event, pageRect);
    };
    _proto2.isHandledByAffiliateLink_ = function isHandledByAffiliateLink_(target) {
      var clickedOnLink = matches(target, AFFILIATE_LINK_SELECTOR);
      if (clickedOnLink && target.hasAttribute("expanded")) {
        return false;
      }
      var expandedElement = this.storeService_.get(StateProperty.AFFILIATE_LINK_STATE);
      return expandedElement != null || clickedOnLink;
    };
    _proto2.maybePerformNavigation_ = function maybePerformNavigation_(event) {
      var target = dev().assertElement(event.target);
      var pageRect = this.getStoryPageRect_();
      if (this.isHandledByEmbeddedComponent_(event, pageRect)) {
        event.stopPropagation();
        event.preventDefault();
        var embedComponent = this.storeService_.get(StateProperty.INTERACTIVE_COMPONENT_STATE);
        this.storeService_.dispatch(Action.TOGGLE_INTERACTIVE_COMPONENT, {
          element: target,
          state: embedComponent.state || EmbeddedComponentState.FOCUSED,
          clientX: event.clientX,
          clientY: event.clientY
        });
        return;
      }
      if (this.isHandledByAffiliateLink_(target)) {
        event.preventDefault();
        event.stopPropagation();
        var clickedOnLink = matches(target, AFFILIATE_LINK_SELECTOR);
        if (clickedOnLink) {
          this.storeService_.dispatch(Action.TOGGLE_AFFILIATE_LINK, target);
        } else {
          this.storeService_.dispatch(Action.TOGGLE_AFFILIATE_LINK, null);
        }
        return;
      }
      if (!this.isRunning() || !this.isNavigationalClick_(event) || this.isProtectedTarget_(event) || !this.shouldHandleEvent_(event)) {
        return;
      }
      event.stopPropagation();
      this.storeService_.dispatch(Action.SET_ADVANCEMENT_MODE, AdvancementMode.MANUAL_ADVANCE);
      var offsetLeft = "x" in pageRect ? pageRect.x : pageRect.left;
      var page = {
        offset: offsetLeft,
        width: pageRect.width,
        clickEventX: event.pageX
      };
      this.onTapNavigation(this.getTapDirection_(page));
    };
    _proto2.getStoryPageRect_ = function getStoryPageRect_() {
      var uiState = this.storeService_.get(StateProperty.UI_STATE);
      if (uiState !== UIType.DESKTOP_ONE_PANEL) {
        return this.element_.getLayoutBox();
      } else {
        return this.element_.querySelector("amp-story-page[active]").getBoundingClientRect();
      }
    };
    _proto2.getTapDirection_ = function getTapDirection_(page) {
      var _this$sections_ = this.sections_, left = _this$sections_.left, right = _this$sections_.right;
      if (page.clickEventX <= page.offset + left.widthRatio * page.width) {
        return left.direction;
      }
      return right.direction;
    };
    ManualAdvancement2.fromElement = function fromElement(win, element) {
      if (element.tagName.toLowerCase() !== "amp-story") {
        return null;
      }
      return new ManualAdvancement2(win, element);
    };
    return ManualAdvancement2;
  }(AdvancementConfig);
  var TimeBasedAdvancement = /* @__PURE__ */ function(_AdvancementConfig2) {
    _inherits4(TimeBasedAdvancement2, _AdvancementConfig2);
    var _super2 = _createSuper4(TimeBasedAdvancement2);
    function TimeBasedAdvancement2(win, delayMs, element) {
      var _this5;
      _this5 = _super2.call(this);
      _this5.timer_ = Services.timerFor(win);
      if (delayMs < MINIMUM_TIME_BASED_AUTO_ADVANCE_MS) {
        user().warn("AMP-STORY-PAGE", element.id + " has an auto advance duration that is too short. " + (MINIMUM_TIME_BASED_AUTO_ADVANCE_MS + "ms is used instead."));
        delayMs = MINIMUM_TIME_BASED_AUTO_ADVANCE_MS;
      }
      _this5.delayMs_ = delayMs;
      _this5.remainingDelayMs_ = null;
      _this5.startTimeMs_ = null;
      _this5.timeoutId_ = null;
      if (element.ownerDocument.defaultView) {
        _this5.storeService_ = getStoreService(element.ownerDocument.defaultView);
      }
      return _this5;
    }
    var _proto3 = TimeBasedAdvancement2.prototype;
    _proto3.getCurrentTimestampMs_ = function getCurrentTimestampMs_() {
      return Date.now();
    };
    _proto3.start = function start() {
      var _this6 = this;
      _AdvancementConfig2.prototype.start.call(this);
      if (this.remainingDelayMs_) {
        this.startTimeMs_ = this.getCurrentTimestampMs_() - (this.delayMs_ - this.remainingDelayMs_);
      } else {
        this.startTimeMs_ = this.getCurrentTimestampMs_();
      }
      this.timeoutId_ = this.timer_.delay(function() {
        return _this6.onAdvance();
      }, this.remainingDelayMs_ || this.delayMs_);
      this.onProgressUpdate();
      this.timer_.poll(POLL_INTERVAL_MS, function() {
        _this6.onProgressUpdate();
        return !_this6.isRunning();
      });
    };
    _proto3.stop = function stop(canResume) {
      if (canResume === void 0) {
        canResume = false;
      }
      _AdvancementConfig2.prototype.stop.call(this);
      if (this.timeoutId_ !== null) {
        this.timer_.cancel(this.timeoutId_);
      }
      this.remainingDelayMs_ = canResume ? this.startTimeMs_ + this.delayMs_ - this.getCurrentTimestampMs_() : null;
    };
    _proto3.isAutoAdvance = function isAutoAdvance() {
      return true;
    };
    _proto3.getProgress = function getProgress() {
      if (this.startTimeMs_ === null) {
        return 0;
      }
      var progress = (this.getCurrentTimestampMs_() - this.startTimeMs_) / this.delayMs_;
      return Math.min(Math.max(progress, 0), 1);
    };
    _proto3.onAdvance = function onAdvance() {
      this.storeService_.dispatch(Action.SET_ADVANCEMENT_MODE, AdvancementMode.AUTO_ADVANCE_TIME);
      _AdvancementConfig2.prototype.onAdvance.call(this);
    };
    _proto3.updateTimeDelay = function updateTimeDelay(autoAdvanceStr) {
      var newDelayMs = timeStrToMillis(autoAdvanceStr);
      if (newDelayMs === void 0 || isNaN(newDelayMs)) {
        return;
      }
      if (this.remainingDelayMs_) {
        this.remainingDelayMs_ += newDelayMs - this.delayMs_;
      }
      this.delayMs_ = newDelayMs;
    };
    TimeBasedAdvancement2.fromAutoAdvanceString = function fromAutoAdvanceString(autoAdvanceStr, win, element) {
      if (!autoAdvanceStr) {
        return null;
      }
      var delayMs = timeStrToMillis(autoAdvanceStr);
      if (delayMs === void 0 || isNaN(delayMs)) {
        return null;
      }
      return new TimeBasedAdvancement2(win, Number(delayMs), element);
    };
    return TimeBasedAdvancement2;
  }(AdvancementConfig);
  var MediaBasedAdvancement = /* @__PURE__ */ function(_AdvancementConfig3) {
    _inherits4(MediaBasedAdvancement2, _AdvancementConfig3);
    var _super3 = _createSuper4(MediaBasedAdvancement2);
    function MediaBasedAdvancement2(win, element) {
      var _this7;
      _this7 = _super3.call(this);
      _this7.timer_ = Services.timerFor(win);
      _this7.element_ = element;
      _this7.mediaElement_ = null;
      _this7.unlistenFns_ = [];
      _this7.unlistenEndedFn_ = null;
      _this7.unlistenTimeupdateFn_ = null;
      _this7.video_ = null;
      _this7.storeService_ = getStoreService(win);
      return _this7;
    }
    var _proto4 = MediaBasedAdvancement2.prototype;
    _proto4.isVideoInterfaceVideo_ = function isVideoInterfaceVideo_() {
      return this.element_.classList.contains("i-amphtml-video-interface");
    };
    _proto4.getMediaElement_ = function getMediaElement_() {
      var tagName = this.element_.tagName.toLowerCase();
      if (this.element_ instanceof HTMLMediaElement) {
        return this.element_;
      } else if (this.element_.hasAttribute("background-audio") && tagName === "amp-story-page") {
        return this.element_.querySelector(".i-amphtml-story-background-audio");
      } else if (tagName === "amp-audio") {
        return this.element_.querySelector("audio");
      }
      return null;
    };
    _proto4.start = function start() {
      var _this8 = this;
      _AdvancementConfig3.prototype.start.call(this);
      (this.element_.build ? this.element_.build() : resolvedPromise()).then(function() {
        return _this8.startWhenBuilt_();
      });
    };
    _proto4.startWhenBuilt_ = function startWhenBuilt_() {
      if (this.isVideoInterfaceVideo_()) {
        this.startVideoInterfaceElement_();
        return;
      }
      if (!this.mediaElement_) {
        this.mediaElement_ = this.getMediaElement_();
      }
      if (this.mediaElement_) {
        this.startHtmlMediaElement_();
        return;
      }
      user().error("AMP-STORY-PAGE", "Element with ID " + this.element_.id + " is not a media element supported for automatic advancement.");
    };
    _proto4.startHtmlMediaElement_ = function startHtmlMediaElement_() {
      var _this9 = this;
      var mediaElement = dev().assertElement(this.mediaElement_, "Media element was unspecified.");
      this.mediaElement_.removeAttribute("loop");
      this.unlistenFns_.push(listenOnce(mediaElement, "ended", function() {
        return _this9.onAdvance();
      }));
      this.onProgressUpdate();
      this.timer_.poll(POLL_INTERVAL_MS, function() {
        _this9.onProgressUpdate();
        return !_this9.isRunning();
      });
    };
    _proto4.startVideoInterfaceElement_ = function startVideoInterfaceElement_() {
      var _this10 = this;
      this.element_.getImpl().then(function(video) {
        _this10.video_ = video;
      });
      this.element_.querySelector("video").removeAttribute("loop");
      this.unlistenFns_.push(listenOnce(this.element_, VideoEvents_Enum.ENDED, function() {
        return _this10.onAdvance();
      }, {
        capture: true
      }));
      this.onProgressUpdate();
      this.timer_.poll(POLL_INTERVAL_MS, function() {
        _this10.onProgressUpdate();
        return !_this10.isRunning();
      });
    };
    _proto4.stop = function stop() {
      _AdvancementConfig3.prototype.stop.call(this);
      this.unlistenFns_.forEach(function(fn) {
        return fn();
      });
    };
    _proto4.isAutoAdvance = function isAutoAdvance() {
      return true;
    };
    _proto4.getProgress = function getProgress() {
      if (this.isVideoInterfaceVideo_()) {
        if (this.video_ && this.video_.getDuration()) {
          return this.video_.getCurrentTime() / this.video_.getDuration();
        }
        return 0;
      }
      if (this.mediaElement_ && this.mediaElement_.duration) {
        return this.mediaElement_.currentTime / this.mediaElement_.duration;
      }
      return _AdvancementConfig3.prototype.getProgress.call(this);
    };
    _proto4.onAdvance = function onAdvance() {
      this.storeService_.dispatch(Action.SET_ADVANCEMENT_MODE, AdvancementMode.AUTO_ADVANCE_MEDIA);
      _AdvancementConfig3.prototype.onAdvance.call(this);
    };
    MediaBasedAdvancement2.fromAutoAdvanceString = function fromAutoAdvanceString(autoAdvanceStr, win, pageEl) {
      try {
        var element = pageEl.querySelector("amp-video[data-id=" + escapeCssSelectorIdent(autoAdvanceStr) + "],\n          amp-video#" + escapeCssSelectorIdent(autoAdvanceStr) + ",\n          amp-audio[data-id=" + escapeCssSelectorIdent(autoAdvanceStr) + "],\n          amp-audio#" + escapeCssSelectorIdent(autoAdvanceStr));
        if (matches(pageEl, "amp-story-page[background-audio]#" + escapeCssSelectorIdent(autoAdvanceStr))) {
          element = pageEl;
        }
        if (!element) {
          if (autoAdvanceStr) {
            user().warn("AMP-STORY-PAGE", "Element with ID " + pageEl.id + " has no media element supported for automatic advancement.");
          }
          return null;
        }
        return new MediaBasedAdvancement2(win, element);
      } catch (e) {
        return null;
      }
    };
    return MediaBasedAdvancement2;
  }(AdvancementConfig);

  // extensions/amp-animation/0.1/web-animation-types.js
  var WebAnimationPlayState = {
    IDLE: "idle",
    PENDING: "pending",
    RUNNING: "running",
    PAUSED: "paused",
    FINISHED: "finished"
  };

  // extensions/amp-story/1.0/animation-presets-utils.js
  function translate2d(startX, startY, endX, endY) {
    return [{
      transform: translate(startX, startY)
    }, {
      transform: translate(endX, endY)
    }];
  }
  function rotateAndTranslate(startX, startY, endX, endY, direction) {
    return [{
      transform: translate(startX, startY) + " " + rotate(direction * 120)
    }, {
      transform: translate(endX, endY) + " " + rotate(0)
    }];
  }
  function whooshIn(startX, startY, endX, endY) {
    return [{
      opacity: 0,
      transform: translate(startX, startY) + " " + scale(0.15)
    }, {
      opacity: 1,
      transform: translate(endX, endY) + " " + scale(1)
    }];
  }
  function targetFitsWithinPage(dimensions) {
    return dimensions.targetWidth <= dimensions.pageWidth || dimensions.targetHeight <= dimensions.pageHeight;
  }
  function calculateTargetScalingFactor(dimensions) {
    if (targetFitsWithinPage(dimensions)) {
      var scalingFactor = 1.25;
      var widthFactor = dimensions.pageWidth > dimensions.targetWidth ? dimensions.pageWidth / dimensions.targetWidth : 1;
      var heightFactor = dimensions.pageHeight > dimensions.targetHeight ? dimensions.pageHeight / dimensions.targetHeight : 1;
      return Math.max(widthFactor, heightFactor) * scalingFactor;
    }
    return 1;
  }
  function enlargeKeyFrames(keyframes16, scalingFactor) {
    keyframes16.forEach(function(frame) {
      frame["transform"] += " " + scale(scalingFactor);
      frame["transform-origin"] = "left top";
    });
    return keyframes16;
  }
  function scaleAndTranslate(startX, startY, endX, endY, scalingFactor) {
    if (scalingFactor === 1) {
      return translate2d(startX, startY, endX, endY);
    }
    return enlargeKeyFrames(translate2d(startX, startY, endX, endY), scalingFactor);
  }

  // extensions/amp-story/1.0/animation-presets.js
  var _ANIMATION_CSS_CLASS_;
  var FULL_BLEED_CATEGORY = "full-bleed";
  var SCALE_HIGH_DEFAULT = 3;
  var SCALE_LOW_DEFAULT = 1;
  var SCALE_START_ATTRIBUTE_NAME = "scale-start";
  var SCALE_END_ATTRIBUTE_NAME = "scale-end";
  var TRANSLATE_X_ATTRIBUTE_NAME = "translate-x";
  var TRANSLATE_Y_ATTRIBUTE_NAME = "translate-y";
  var DEFAULT_CURVE = "0.4, 0.4, 0.0, 1";
  var PRESET_OPTION_ATTRIBUTES = [SCALE_START_ATTRIBUTE_NAME, SCALE_END_ATTRIBUTE_NAME, TRANSLATE_X_ATTRIBUTE_NAME, TRANSLATE_Y_ATTRIBUTE_NAME];
  var FULL_BLEED_ANIMATION_NAMES = ["pan-up", "pan-down", "pan-right", "pan-left", "zoom-in", "zoom-out"];
  var ANIMATION_CSS_CLASS_NAMES = (_ANIMATION_CSS_CLASS_ = {}, _ANIMATION_CSS_CLASS_[FULL_BLEED_CATEGORY] = "i-amphtml-story-grid-template-with-full-bleed-animation", _ANIMATION_CSS_CLASS_);
  function setStyleForPreset(el, presetName) {
    if (FULL_BLEED_ANIMATION_NAMES.indexOf(presetName) >= 0) {
      var parent = el.parentElement;
      parent.classList.add(ANIMATION_CSS_CLASS_NAMES[FULL_BLEED_CATEGORY]);
    }
  }
  var presets = {
    "pulse": {
      duration: 600,
      easing: "cubic-bezier(0.3, 0.0, 0.0, 1)",
      keyframes: [{
        offset: 0,
        transform: "scale(1)"
      }, {
        offset: 0.25,
        transform: "scale(0.95)"
      }, {
        offset: 0.75,
        transform: "scale(1.05)"
      }, {
        offset: 1,
        transform: "scale(1)"
      }]
    },
    "fly-in-left": {
      duration: 600,
      easing: "cubic-bezier(0.2, 0.6, 0.0, 1)",
      keyframes: function keyframes(dimensions) {
        var offsetX = -(dimensions.targetX + dimensions.targetWidth);
        return translate2d(offsetX, 0, 0, 0);
      }
    },
    "fly-in-right": {
      duration: 600,
      easing: "cubic-bezier(0.2, 0.6, 0.0, 1)",
      keyframes: function keyframes2(dimensions) {
        var offsetX = dimensions.pageWidth - dimensions.targetX;
        return translate2d(offsetX, 0, 0, 0);
      }
    },
    "fly-in-top": {
      duration: 600,
      easing: "cubic-bezier(0.2, 0.6, 0.0, 1)",
      keyframes: function keyframes3(dimensions) {
        var offsetY = -(dimensions.targetY + dimensions.targetHeight);
        return translate2d(0, offsetY, 0, 0);
      }
    },
    "fly-in-bottom": {
      duration: 600,
      easing: "cubic-bezier(0.2, 0.6, 0.0, 1)",
      keyframes: function keyframes4(dimensions) {
        var offsetY = dimensions.pageHeight - dimensions.targetY;
        return translate2d(0, offsetY, 0, 0);
      }
    },
    "rotate-in-left": {
      duration: 1e3,
      easing: "cubic-bezier(" + DEFAULT_CURVE + ")",
      keyframes: function keyframes5(dimensions) {
        var offsetX = -(dimensions.targetX + dimensions.targetWidth);
        return rotateAndTranslate(offsetX, 0, 0, 0, -1);
      }
    },
    "rotate-in-right": {
      duration: 1e3,
      easing: "cubic-bezier(" + DEFAULT_CURVE + ")",
      keyframes: function keyframes6(dimensions) {
        var offsetX = dimensions.pageWidth - dimensions.targetX;
        return rotateAndTranslate(offsetX, 0, 0, 0, 1);
      }
    },
    "fade-in": {
      duration: 600,
      easing: "cubic-bezier(" + DEFAULT_CURVE + ")",
      keyframes: [{
        opacity: 0
      }, {
        opacity: 1
      }]
    },
    "scale-fade-up": {
      duration: 600,
      easing: "cubic-bezier(" + DEFAULT_CURVE + ")",
      keyframes: [{
        opacity: 0,
        transform: "scale(0.8)"
      }, {
        opacity: 1,
        transform: "scale(1)"
      }]
    },
    "scale-fade-down": {
      duration: 600,
      easing: "cubic-bezier(" + DEFAULT_CURVE + ")",
      keyframes: [{
        opacity: 0,
        transform: "scale(1.4)"
      }, {
        opacity: 1,
        transform: "scale(1)"
      }]
    },
    "drop": {
      duration: 1600,
      easing: "linear",
      keyframes: function keyframes7(dimensions) {
        var maxBounceHeight = Math.max(160, dimensions.targetY + dimensions.targetHeight);
        return [{
          offset: 0,
          transform: "translateY(" + px(Number(-maxBounceHeight)) + ")",
          easing: "cubic-bezier(.5, 0, 1, 1)"
        }, {
          offset: 0.29,
          transform: "translateY(0)",
          easing: "cubic-bezier(0, 0, .5, 1)"
        }, {
          offset: 0.45,
          transform: "translateY(" + px(-maxBounceHeight * 0.2812) + ")",
          easing: "cubic-bezier(.5, 0, 1, 1)"
        }, {
          offset: 0.61,
          transform: "translateY(0)",
          easing: "cubic-bezier(0, 0, .5, 1)"
        }, {
          offset: 0.71,
          transform: "translateY(" + px(-maxBounceHeight * 0.0956) + ")",
          easing: "cubic-bezier(.5, 0, 1, 1)"
        }, {
          offset: 0.8,
          transform: "translateY(0)",
          easing: "cubic-bezier(0, 0, .5, 1)"
        }, {
          offset: 0.85,
          transform: "translateY(" + px(-maxBounceHeight * 0.0359) + ")",
          easing: "cubic-bezier(.5, 0, 1, 1)"
        }, {
          offset: 0.92,
          transform: "translateY(0)",
          easing: "cubic-bezier(0, 0, .5, 1)"
        }, {
          offset: 0.96,
          transform: "translateY(" + px(-maxBounceHeight * 0.0156) + ")",
          easing: "cubic-bezier(.5, 0, 1, 1)"
        }, {
          offset: 1,
          transform: "translateY(0)",
          easing: "cubic-bezier(0, 0, .5, 1)"
        }];
      }
    },
    "twirl-in": {
      duration: 1e3,
      easing: "cubic-bezier(" + DEFAULT_CURVE + ")",
      keyframes: [{
        transform: "rotate(-540deg) scale(0.1)",
        opacity: 0
      }, {
        transform: "none",
        opacity: 1
      }]
    },
    "whoosh-in-left": {
      duration: 600,
      easing: "cubic-bezier(" + DEFAULT_CURVE + ")",
      keyframes: function keyframes8(dimensions) {
        var offsetX = -(dimensions.targetX + dimensions.targetWidth);
        return whooshIn(offsetX, 0, 0, 0);
      }
    },
    "whoosh-in-right": {
      duration: 600,
      easing: "cubic-bezier(" + DEFAULT_CURVE + ")",
      keyframes: function keyframes9(dimensions) {
        var offsetX = dimensions.pageWidth - dimensions.targetX;
        return whooshIn(offsetX, 0, 0, 0);
      }
    },
    "pan-left": {
      duration: 1e3,
      easing: "linear",
      keyframes: function keyframes10(dimensions, options) {
        var translateX = options[TRANSLATE_X_ATTRIBUTE_NAME];
        var scalingFactor = calculateTargetScalingFactor(dimensions);
        dimensions.targetWidth *= scalingFactor;
        dimensions.targetHeight *= scalingFactor;
        var offsetX = dimensions.pageWidth - dimensions.targetWidth;
        var offsetY = (dimensions.pageHeight - dimensions.targetHeight) / 2;
        return scaleAndTranslate(offsetX, offsetY, translateX ? offsetX + translateX : 0, offsetY, scalingFactor);
      }
    },
    "pan-right": {
      duration: 1e3,
      easing: "linear",
      keyframes: function keyframes11(dimensions, options) {
        var translateX = options[TRANSLATE_X_ATTRIBUTE_NAME];
        var scalingFactor = calculateTargetScalingFactor(dimensions);
        dimensions.targetWidth *= scalingFactor;
        dimensions.targetHeight *= scalingFactor;
        var offsetX = dimensions.pageWidth - dimensions.targetWidth;
        var offsetY = (dimensions.pageHeight - dimensions.targetHeight) / 2;
        return scaleAndTranslate(0, offsetY, -translateX || offsetX, offsetY, scalingFactor);
      }
    },
    "pan-down": {
      duration: 1e3,
      easing: "linear",
      keyframes: function keyframes12(dimensions, options) {
        var translateY = options[TRANSLATE_Y_ATTRIBUTE_NAME];
        var scalingFactor = calculateTargetScalingFactor(dimensions);
        dimensions.targetWidth *= scalingFactor;
        dimensions.targetHeight *= scalingFactor;
        var offsetX = -dimensions.targetWidth / 2;
        var offsetY = dimensions.pageHeight - dimensions.targetHeight;
        return scaleAndTranslate(offsetX, 0, offsetX, -translateY || offsetY, scalingFactor);
      }
    },
    "pan-up": {
      duration: 1e3,
      easing: "linear",
      keyframes: function keyframes13(dimensions, options) {
        var translateY = options[TRANSLATE_Y_ATTRIBUTE_NAME];
        var scalingFactor = calculateTargetScalingFactor(dimensions);
        dimensions.targetWidth *= scalingFactor;
        dimensions.targetHeight *= scalingFactor;
        var offsetX = -dimensions.targetWidth / 2;
        var offsetY = dimensions.pageHeight - dimensions.targetHeight;
        return scaleAndTranslate(offsetX, offsetY, offsetX, translateY ? offsetY + translateY : 0, scalingFactor);
      }
    },
    "zoom-in": {
      duration: 1e3,
      easing: "linear",
      keyframes: function keyframes14(unusedDimensions, options) {
        var scaleStart = options[SCALE_START_ATTRIBUTE_NAME];
        var scaleEnd = options[SCALE_END_ATTRIBUTE_NAME];
        if (scaleStart) {
          userAssert2(scaleEnd > scaleStart, '"scale-end" value must be greater than "scale-start" value when using "zoom-in" animation.');
        }
        return [{
          transform: "scale(" + (scaleStart || SCALE_LOW_DEFAULT) + ")"
        }, {
          transform: "scale(" + (scaleEnd || SCALE_HIGH_DEFAULT) + ")"
        }];
      }
    },
    "zoom-out": {
      duration: 1e3,
      easing: "linear",
      keyframes: function keyframes15(unusedDimensions, options) {
        var scaleStart = options[SCALE_START_ATTRIBUTE_NAME];
        var scaleEnd = options[SCALE_END_ATTRIBUTE_NAME];
        if (scaleStart) {
          userAssert2(scaleStart > scaleEnd, '"scale-start" value must be higher than "scale-end" value when using "zoom-out" animation.');
        }
        return [{
          transform: "scale(" + (scaleStart || SCALE_HIGH_DEFAULT) + ")"
        }, {
          transform: "scale(" + (scaleEnd || SCALE_LOW_DEFAULT) + ")"
        }];
      }
    }
  };

  // src/core/dom/media-query-props.js
  function prefersReducedMotion(win) {
    var _win$matchMedia;
    return !!((_win$matchMedia = win.matchMedia("(prefers-reduced-motion: reduce)")) != null && _win$matchMedia.matches);
  }

  // extensions/amp-story/1.0/animation.js
  var TAG5 = "AMP-STORY";
  var ANIMATE_IN_ATTRIBUTE_NAME = "animate-in";
  var ANIMATE_IN_DURATION_ATTRIBUTE_NAME = "animate-in-duration";
  var ANIMATE_IN_DELAY_ATTRIBUTE_NAME = "animate-in-delay";
  var ANIMATE_IN_AFTER_ATTRIBUTE_NAME = "animate-in-after";
  var ANIMATE_IN_TIMING_FUNCTION_ATTRIBUTE_NAME = "animate-in-timing-function";
  var ANIMATABLE_ELEMENTS_SELECTOR = "[" + ANIMATE_IN_ATTRIBUTE_NAME + "]";
  var DEFAULT_EASING = "cubic-bezier(0.4, 0.0, 0.2, 1)";
  function hasAnimations(element) {
    var selector = ANIMATABLE_ELEMENTS_SELECTOR + ",>amp-story-animation";
    return !!scopedQuerySelector(element, selector);
  }
  var PlaybackActivity = {
    START: 0,
    FINISH: 1
  };
  function getSequencingStartAfterId(root, element) {
    if (!element.hasAttribute(ANIMATE_IN_AFTER_ATTRIBUTE_NAME)) {
      return null;
    }
    var dependencyId = element.getAttribute(ANIMATE_IN_AFTER_ATTRIBUTE_NAME);
    if (!root.querySelector("#" + escapeCssSelectorIdent(dependencyId))) {
      user().warn(TAG5, "The attribute '" + ANIMATE_IN_AFTER_ATTRIBUTE_NAME + "' in tag " + ("'" + element.tagName + "' is set to the invalid value ") + ("'" + dependencyId + "'. No children of parenting 'amp-story-page' ") + ("exist with id " + dependencyId + "."));
      return null;
    }
    return dependencyId;
  }
  var AnimationRunner = /* @__PURE__ */ function() {
    function AnimationRunner2(page, config, webAnimationBuilderPromise, vsync, sequence) {
      var _this = this;
      var preset = config.preset, source = config.source, spec = config.spec, startAfterId = config.startAfterId;
      this.page_ = page;
      this.source_ = source;
      this.vsync_ = vsync;
      this.presetTarget_ = !!preset ? dev().assertElement(spec.target) : null;
      this.sequence_ = sequence;
      this.startAfterId_ = startAfterId;
      this.resolvedSpecPromise_ = this.resolveSpec_(config);
      this.runnerPromise_ = this.resolvedSpecPromise_.then(function(webAnimDef) {
        return webAnimationBuilderPromise.then(function(builder) {
          return builder.createRunner(webAnimDef);
        });
      });
      this.firstFrameProps_ = this.resolvedSpecPromise_.then(function(spec2) {
        var keyframes16 = spec2.keyframes;
        if (!_this.presetTarget_) {
          return null;
        }
        devAssert2(!keyframes16[0].offset, "First keyframe offset for animation preset should be 0 or undefined");
        return omit(keyframes16[0], ["offset"]);
      });
      this.runner_ = null;
      this.scheduledActivity_ = null;
      this.scheduledWait_ = null;
      if (this.presetTarget_) {
        var _spec = spec, delay = _spec.delay;
        userAssert2(dev().assertNumber(delay) >= 0, 'Negative delays are not allowed in amp-story "animate-in" animations.');
      }
      this.runnerPromise_.then(function(runner) {
        return _this.onRunnerReady_(runner);
      });
    }
    AnimationRunner2.create = function create(page, config, webAnimationBuilderPromise, vsync, sequence) {
      return new AnimationRunner2(page, config, webAnimationBuilderPromise, vsync, sequence);
    };
    var _proto = AnimationRunner2.prototype;
    _proto.getDims = function getDims() {
      var _this2 = this;
      return this.vsync_.measurePromise(function() {
        var target = dev().assertElement(_this2.presetTarget_);
        var targetRect = unscaledClientRect(target);
        var pageRect = unscaledClientRect(_this2.page_);
        return {
          pageWidth: pageRect.width,
          pageHeight: pageRect.height,
          targetWidth: targetRect.width,
          targetHeight: targetRect.height,
          targetX: targetRect.left - pageRect.left,
          targetY: targetRect.top - pageRect.top
        };
      });
    };
    _proto.resolvePresetKeyframes_ = function resolvePresetKeyframes_(keyframesOrCreateFn, keyframeOptions) {
      if (typeof keyframesOrCreateFn === "function") {
        return this.getDims().then(function(dimensions) {
          var fn = keyframesOrCreateFn;
          return fn(dimensions, keyframeOptions || {});
        });
      }
      return Promise.resolve(keyframesOrCreateFn);
    };
    _proto.resolveSpec_ = function resolveSpec_(config) {
      var keyframeOptions = config.keyframeOptions, preset = config.preset, spec = config.spec;
      if (!preset) {
        return Promise.resolve(spec);
      }
      var _spec2 = spec, delay = _spec2.delay, duration = _spec2.duration, easing = _spec2.easing;
      var _spec3 = spec, target = _spec3.target;
      return this.resolvePresetKeyframes_(preset.keyframes, keyframeOptions).then(function(keyframes16) {
        return {
          keyframes: keyframes16,
          target: target,
          delay: delay,
          duration: duration,
          easing: easing,
          fill: "forwards"
        };
      });
    };
    _proto.applyFirstFrame = function applyFirstFrame() {
      var _this3 = this;
      if (this.hasStarted()) {
        return resolvedPromise();
      }
      if (this.runner_) {
        this.runner_.cancel();
      }
      return this.firstFrameProps_.then(function(firstFrameProps) {
        if (!firstFrameProps) {
          return;
        }
        return _this3.vsync_.mutatePromise(function() {
          setStyles(dev().assertElement(_this3.presetTarget_), assertDoesNotContainDisplay(devAssert2(firstFrameProps)));
        });
      });
    };
    _proto.applyLastFrame = function applyLastFrame() {
      if (this.presetTarget_) {
        return resolvedPromise();
      }
      this.runnerPromise_.then(function(runner) {
        runner.init();
        runner.finish(true);
      });
    };
    _proto.start = function start() {
      if (this.hasStarted()) {
        return;
      }
      this.playback_(PlaybackActivity.START, this.getStartWaitPromise_());
    };
    _proto.getStartWaitPromise_ = function getStartWaitPromise_() {
      if (this.startAfterId_) {
        return this.sequence_.waitFor(this.startAfterId_);
      }
      return resolvedPromise();
    };
    _proto.startWhenReady_ = function startWhenReady_(runner) {
      runner.start();
    };
    _proto.hasStarted = function hasStarted() {
      return this.isActivityScheduled_(PlaybackActivity.START) || !!this.runner_ && devAssert2(this.runner_).getPlayState() == WebAnimationPlayState.RUNNING;
    };
    _proto.finish = function finish() {
      if (!this.runner_) {
        this.notifyFinish_();
      }
      this.playback_(PlaybackActivity.FINISH);
    };
    _proto.pause = function pause() {
      if (this.scheduledWait_ !== null) {
        return;
      }
      if (this.runner_) {
        try {
          this.runner_.pause();
        } catch (e) {
        }
      }
    };
    _proto.resume = function resume() {
      if (this.scheduledWait_ !== null) {
        return;
      }
      if (this.runner_) {
        try {
          this.runner_.resume();
        } catch (e) {
        }
      }
    };
    _proto.finishWhenReady_ = function finishWhenReady_(runner) {
      if (this.runner_) {
        runner.start();
        runner.finish();
      }
    };
    _proto.cancel = function cancel() {
      this.scheduledActivity_ = null;
      this.scheduledWait_ = null;
      if (this.runner_) {
        devAssert2(this.runner_).cancel();
      }
    };
    _proto.playback_ = function playback_(activity, opt_wait) {
      var wait = opt_wait || null;
      this.scheduledActivity_ = activity;
      this.scheduledWait_ = wait;
      if (this.runner_) {
        this.playbackWhenReady_(activity, wait);
      }
    };
    _proto.playbackWhenReady_ = function playbackWhenReady_(activity, wait) {
      var _this4 = this;
      var runner = devAssert2(this.runner_, "Tried to execute playbackWhenReady_ before runner was resolved.");
      (wait || resolvedPromise()).then(function() {
        if (!_this4.isActivityScheduled_(activity)) {
          return;
        }
        _this4.scheduledActivity_ = null;
        _this4.scheduledWait_ = null;
        switch (activity) {
          case PlaybackActivity.START:
            return _this4.startWhenReady_(runner);
          case PlaybackActivity.FINISH:
            return _this4.finishWhenReady_(runner);
        }
      });
    };
    _proto.onRunnerReady_ = function onRunnerReady_(runner) {
      var _this5 = this;
      this.runner_ = runner;
      runner.onPlayStateChanged(function(state) {
        if (state == WebAnimationPlayState.FINISHED) {
          _this5.notifyFinish_();
        }
      });
      if (!this.isActivityScheduled_()) {
        return;
      }
      this.playbackWhenReady_(this.scheduledActivity_, this.scheduledWait_);
    };
    _proto.isActivityScheduled_ = function isActivityScheduled_(opt_activity) {
      if (!opt_activity) {
        return this.scheduledActivity_ !== null;
      }
      return this.scheduledActivity_ === opt_activity;
    };
    _proto.notifyFinish_ = function notifyFinish_() {
      if (this.source_.id) {
        this.sequence_.notifyFinish(this.source_.id);
      }
    };
    return AnimationRunner2;
  }();
  var AnimationManager = /* @__PURE__ */ function() {
    function AnimationManager2(page, ampdoc2) {
      this.page_ = page;
      this.ampdoc_ = ampdoc2;
      this.vsync_ = Services.vsyncFor(this.ampdoc_.win);
      this.builderPromise_ = this.createAnimationBuilderPromise_();
      var firstPageAnimationDisabled = isExperimentOn(ampdoc2.win, "story-disable-animations-first-page") || isPreviewMode(ampdoc2.win);
      this.skipAnimations_ = prefersReducedMotion(ampdoc2.win) || firstPageAnimationDisabled && matches(page, "amp-story-page:first-of-type");
      this.runners_ = null;
      this.sequence_ = AnimationSequence.create();
    }
    AnimationManager2.create = function create(page, ampdoc2, unusedBaseUrl) {
      return new AnimationManager2(page, ampdoc2);
    };
    var _proto2 = AnimationManager2.prototype;
    _proto2.applyFirstFrameOrFinish = function applyFirstFrameOrFinish() {
      var _this6 = this;
      return Promise.all(this.getOrCreateRunners_().map(function(runner) {
        return _this6.skipAnimations_ ? runner.applyLastFrame() : runner.applyFirstFrame();
      }));
    };
    _proto2.applyLastFrame = function applyLastFrame() {
      return Promise.all(this.getOrCreateRunners_().map(function(runner) {
        return runner.applyLastFrame();
      }));
    };
    _proto2.animateIn = function animateIn() {
      if (this.skipAnimations_) {
        return;
      }
      this.getRunners_().forEach(function(runner) {
        return runner.start();
      });
    };
    _proto2.finishAll = function finishAll() {
      this.getRunners_().forEach(function(runner) {
        return runner.finish();
      });
    };
    _proto2.cancelAll = function cancelAll() {
      if (!this.runners_) {
        return;
      }
      this.getRunners_().forEach(function(runner) {
        return runner.cancel();
      });
    };
    _proto2.pauseAll = function pauseAll() {
      if (!this.runners_ || this.skipAnimations_) {
        return;
      }
      this.getRunners_().forEach(function(runner) {
        return runner.pause();
      });
    };
    _proto2.resumeAll = function resumeAll() {
      if (!this.runners_ || this.skipAnimations_) {
        return;
      }
      this.getRunners_().forEach(function(runner) {
        return runner.resume();
      });
    };
    _proto2.hasAnimationStarted = function hasAnimationStarted() {
      return this.getRunners_().some(function(runner) {
        return runner.hasStarted();
      });
    };
    _proto2.getRunners_ = function getRunners_() {
      return devAssert2(this.runners_, "Executed before applyFirstFrameOrFinish");
    };
    _proto2.getOrCreateRunners_ = function getOrCreateRunners_() {
      var _this7 = this;
      if (!this.runners_) {
        this.runners_ = Array.prototype.map.call(scopedQuerySelectorAll(this.page_, ANIMATABLE_ELEMENTS_SELECTOR), function(el) {
          var preset = _this7.getPreset_(el);
          if (!preset) {
            return null;
          }
          return _this7.createRunner_({
            preset: preset,
            source: el,
            startAfterId: getSequencingStartAfterId(_this7.page_, el),
            keyframeOptions: _this7.getKeyframeOptions_(el),
            spec: _this7.partialAnimationSpecFromPreset_(el, preset)
          });
        }).concat(Array.prototype.map.call(this.page_.querySelectorAll("amp-story-animation[trigger=visibility]"), function(el) {
          return _this7.createRunner_({
            source: el,
            startAfterId: getSequencingStartAfterId(_this7.page_, el),
            spec: getChildJsonConfig(el)
          });
        })).filter(Boolean);
      }
      return devAssert2(this.runners_);
    };
    _proto2.createRunner_ = function createRunner_(config) {
      return AnimationRunner.create(this.page_, config, devAssert2(this.builderPromise_), this.vsync_, this.sequence_);
    };
    _proto2.partialAnimationSpecFromPreset_ = function partialAnimationSpecFromPreset_(el, preset) {
      var animationDef = {
        target: el,
        delay: preset.delay || 0,
        duration: preset.duration || 0,
        easing: preset.easing || DEFAULT_EASING,
        keyframes: []
      };
      if (el.hasAttribute(ANIMATE_IN_DURATION_ATTRIBUTE_NAME)) {
        animationDef.duration = timeStrToMillis(el.getAttribute(ANIMATE_IN_DURATION_ATTRIBUTE_NAME), animationDef.duration);
      }
      if (el.hasAttribute(ANIMATE_IN_DELAY_ATTRIBUTE_NAME)) {
        animationDef.delay = timeStrToMillis(el.getAttribute(ANIMATE_IN_DELAY_ATTRIBUTE_NAME), animationDef.delay);
      }
      if (el.hasAttribute(ANIMATE_IN_TIMING_FUNCTION_ATTRIBUTE_NAME)) {
        animationDef.easing = el.getAttribute(ANIMATE_IN_TIMING_FUNCTION_ATTRIBUTE_NAME);
      }
      return animationDef;
    };
    _proto2.createAnimationBuilderPromise_ = function createAnimationBuilderPromise_() {
      var _this8 = this;
      return Services.extensionsFor(this.ampdoc_.win).installExtensionForDoc(this.ampdoc_, "amp-animation").then(function() {
        return Services.webAnimationServiceFor(_this8.page_);
      }).then(function(webAnimationService) {
        return webAnimationService.createBuilder({
          scope: _this8.page_,
          scaleByScope: true
        });
      });
    };
    _proto2.getPreset_ = function getPreset_(el) {
      var name = el.getAttribute(ANIMATE_IN_ATTRIBUTE_NAME);
      if (!presets[name]) {
        user().warn(TAG5, "Invalid", ANIMATE_IN_ATTRIBUTE_NAME, "preset", name, "for element", el);
        return null;
      }
      setStyleForPreset(el, name);
      return presets[name];
    };
    _proto2.getKeyframeOptions_ = function getKeyframeOptions_(el) {
      var options = {};
      PRESET_OPTION_ATTRIBUTES.forEach(function(name) {
        if (!el.hasAttribute(name)) {
          return;
        }
        var value = parseFloat(el.getAttribute(name));
        if (isNaN(value) || value <= 0) {
          user().warn(TAG5, name, "attribute must be a positive number. Found negative or zero in element", el);
          return;
        }
        options[name] = value;
      });
      return options;
    };
    return AnimationManager2;
  }();
  var AnimationSequence = /* @__PURE__ */ function() {
    function AnimationSequence2() {
      this.subscriptionPromises_ = map();
      this.subscriptionResolvers_ = map();
    }
    AnimationSequence2.create = function create() {
      return new AnimationSequence2();
    };
    var _proto3 = AnimationSequence2.prototype;
    _proto3.notifyFinish = function notifyFinish(id) {
      if (id in this.subscriptionPromises_) {
        devAssert2(this.subscriptionResolvers_[id])();
        delete this.subscriptionPromises_[id];
      }
    };
    _proto3.waitFor = function waitFor(id) {
      if (!(id in this.subscriptionPromises_)) {
        var deferred = new Deferred();
        this.subscriptionPromises_[id] = deferred.promise;
        this.subscriptionResolvers_[id] = deferred.resolve;
      }
      return this.subscriptionPromises_[id];
    };
    return AnimationSequence2;
  }();

  // extensions/amp-story/1.0/loading-spinner.js
  var SPINNER_ACTIVE_ATTRIBUTE = "active";
  var renderSpinnerElement = function renderSpinnerElement2() {
    return createElement("div", {
      class: "i-amphtml-story-spinner",
      "aria-hidden": "true"
    }, createElement("div", {
      class: "i-amphtml-story-spinner-container"
    }, createElement("div", {
      class: "i-amphtml-story-spinner-layer"
    }, createElement("div", {
      class: "i-amphtml-story-spinner-circle-clipper left"
    }), createElement("div", {
      class: "i-amphtml-story-spinner-circle-clipper right"
    }))));
  };
  var LoadingSpinner = /* @__PURE__ */ function() {
    function LoadingSpinner2() {
      this.root_ = null;
      this.isActive_ = false;
    }
    var _proto = LoadingSpinner2.prototype;
    _proto.build = function build() {
      if (this.root_) {
        return this.root_;
      }
      this.root_ = renderSpinnerElement();
      return this.getRoot();
    };
    _proto.getRoot = function getRoot() {
      return dev().assertElement(this.root_);
    };
    _proto.toggle = function toggle2(isActive) {
      if (isActive === this.isActive_) {
        return;
      }
      if (isActive) {
        this.root_.setAttribute(SPINNER_ACTIVE_ATTRIBUTE, "");
        this.root_.setAttribute("aria-hidden", "false");
      } else {
        this.root_.removeAttribute(SPINNER_ACTIVE_ATTRIBUTE);
        this.root_.setAttribute("aria-hidden", "true");
      }
      this.isActive_ = isActive;
    };
    return LoadingSpinner2;
  }();

  // extensions/amp-story/1.0/sources.js
  var Sources = /* @__PURE__ */ function() {
    function Sources2(srcAttr, srcEls, trackEls) {
      if (srcAttr === void 0) {
        srcAttr = null;
      }
      if (srcEls === void 0) {
        srcEls = [];
      }
      if (trackEls === void 0) {
        trackEls = [];
      }
      this.srcAttr_ = srcAttr;
      this.srcEls_ = srcEls;
      this.trackEls_ = trackEls;
    }
    var _proto = Sources2.prototype;
    _proto.applyTracksToElement_ = function applyTracksToElement_(element) {
      Array.prototype.forEach.call(this.trackEls_, function(trackEl) {
        var track = document.createElement("track");
        track.id = trackEl.id;
        track.kind = trackEl.kind;
        track.label = trackEl.label;
        track.srclang = trackEl.srclang;
        track.default = trackEl.default;
        track.src = trackEl.src;
        track.addEventListener("load", function() {
          track.mode = "showing";
          element.textTracks[0].mode = "showing";
        });
        element.appendChild(track);
      });
    };
    _proto.applyToElement = function applyToElement(win, element) {
      var _this = this;
      Sources2.removeFrom(win, element);
      if (!this.srcAttr_) {
        element.removeAttribute("src");
      } else {
        element.setAttribute("src", this.srcAttr_);
      }
      Array.prototype.forEach.call(this.srcEls_, function(srcEl) {
        return element.appendChild(srcEl);
      });
      if (element.changedSources) {
        element.changedSources();
      }
      if (this.trackEls_.length > 0) {
        if (element.readyState >= 1) {
          this.applyTracksToElement_(element);
        } else {
          var addTracksHandler = function addTracksHandler2() {
            element.removeEventListener("loadedmetadata", addTracksHandler2);
            _this.applyTracksToElement_(element);
          };
          element.addEventListener("loadedmetadata", addTracksHandler);
        }
      }
    };
    Sources2.removeFrom = function removeFrom(win, element) {
      var elementToUse = ampMediaElementFor(element) || element;
      var srcEl = null;
      if (elementToUse.hasAttribute("src")) {
        srcEl = Sources2.createSourceElement(win, elementToUse);
        elementToUse.removeAttribute("src");
      }
      var srcEls = toArray(elementToUse.querySelectorAll("source"));
      srcEls.forEach(function(srcEl2) {
        return removeElement(srcEl2);
      });
      var trackEls = toArray(elementToUse.querySelectorAll("track"));
      trackEls.forEach(function(trackEl) {
        return removeElement(trackEl);
      });
      var sourcesToUse = srcEl ? [srcEl] : srcEls;
      return new Sources2(null, sourcesToUse, trackEls);
    };
    Sources2.createSourceElement = function createSourceElement(win, element) {
      var srcEl = win.document.createElement("source");
      var srcAttr = element.getAttribute("src");
      srcEl.setAttribute("src", srcAttr);
      var origSrcAttr = element.getAttribute("amp-orig-src");
      if (origSrcAttr) {
        srcEl.setAttribute("amp-orig-src", origSrcAttr);
      }
      var typeAttr = element.getAttribute("type");
      if (typeAttr) {
        srcEl.setAttribute("type", typeAttr);
      }
      return srcEl;
    };
    return Sources2;
  }();

  // extensions/amp-story/1.0/media-tasks.js
  function _inherits5(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf5(subClass, superClass);
  }
  function _setPrototypeOf5(o, p) {
    _setPrototypeOf5 = Object.setPrototypeOf || function _setPrototypeOf13(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf5(o, p);
  }
  function _createSuper5(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct5();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf5(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf5(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn5(this, result);
    };
  }
  function _possibleConstructorReturn5(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized5(self2);
  }
  function _assertThisInitialized5(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct5() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf5(o) {
    _getPrototypeOf5 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf13(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf5(o);
  }
  var ELEMENT_BLESSED_PROPERTY_NAME = "__AMP_MEDIA_IS_BLESSED__";
  var PROTECTED_CSS_CLASS_NAMES = ["i-amphtml-pool-media", "i-amphtml-pool-audio", "i-amphtml-pool-video"];
  var PROTECTED_ATTRIBUTES = ["id", "src", "class", "autoplay"];
  function isProtectedCssClassName(cssClassName) {
    return PROTECTED_CSS_CLASS_NAMES.indexOf(cssClassName) >= 0;
  }
  function isProtectedAttributeName(attributeName) {
    return PROTECTED_ATTRIBUTES.indexOf(attributeName) >= 0;
  }
  function copyCssClasses(fromEl, toEl) {
    for (var i = toEl.classList.length - 1; i >= 0; i--) {
      var cssClass = toEl.classList.item(i);
      if (!isProtectedCssClassName(cssClass)) {
        toEl.classList.remove(cssClass);
      }
    }
    for (var _i = 0; _i < fromEl.classList.length; _i++) {
      var _cssClass = fromEl.classList.item(_i);
      if (!isProtectedCssClassName(_cssClass)) {
        toEl.classList.add(_cssClass);
      }
    }
  }
  function copyAttributes(fromEl, toEl) {
    var fromAttributes = fromEl.attributes;
    var toAttributes = toEl.attributes;
    for (var i = toAttributes.length - 1; i >= 0; i--) {
      var attributeName = toAttributes[i].name;
      if (!isProtectedAttributeName(attributeName)) {
        toEl.removeAttribute(attributeName);
      }
    }
    for (var _i2 = 0; _i2 < fromAttributes.length; _i2++) {
      var _fromAttributes$_i = fromAttributes[_i2], _attributeName = _fromAttributes$_i.name, attributeValue = _fromAttributes$_i.value;
      if (!isProtectedAttributeName(_attributeName)) {
        toEl.setAttribute(_attributeName, attributeValue);
      }
    }
  }
  var MediaTask = /* @__PURE__ */ function() {
    function MediaTask2(name, options) {
      if (options === void 0) {
        options = {};
      }
      this.name_ = name;
      var deferred = new Deferred();
      this.completionPromise_ = deferred.promise;
      this.options = options;
      this.resolve_ = deferred.resolve;
      this.reject_ = deferred.reject;
    }
    var _proto = MediaTask2.prototype;
    _proto.getName = function getName() {
      return this.name_;
    };
    _proto.whenComplete = function whenComplete() {
      return this.completionPromise_;
    };
    _proto.execute = function execute(mediaEl) {
      return this.executeInternal(mediaEl).then(this.resolve_, this.reject_);
    };
    _proto.executeInternal = function executeInternal(unusedMediaEl) {
      return resolvedPromise();
    };
    _proto.requiresSynchronousExecution = function requiresSynchronousExecution() {
      return false;
    };
    _proto.failTask = function failTask(reason) {
      this.reject_(reason);
    };
    return MediaTask2;
  }();
  var PlayTask = /* @__PURE__ */ function(_MediaTask) {
    _inherits5(PlayTask2, _MediaTask);
    var _super = _createSuper5(PlayTask2);
    function PlayTask2() {
      return _super.call(this, "play");
    }
    var _proto2 = PlayTask2.prototype;
    _proto2.executeInternal = function executeInternal(mediaEl) {
      if (!mediaEl.paused) {
        return resolvedPromise();
      }
      return tryPlay(mediaEl);
    };
    return PlayTask2;
  }(MediaTask);
  var PauseTask = /* @__PURE__ */ function(_MediaTask2) {
    _inherits5(PauseTask2, _MediaTask2);
    var _super2 = _createSuper5(PauseTask2);
    function PauseTask2() {
      return _super2.call(this, "pause");
    }
    var _proto3 = PauseTask2.prototype;
    _proto3.executeInternal = function executeInternal(mediaEl) {
      mediaEl.pause();
      return resolvedPromise();
    };
    return PauseTask2;
  }(MediaTask);
  var UnmuteTask = /* @__PURE__ */ function(_MediaTask3) {
    _inherits5(UnmuteTask2, _MediaTask3);
    var _super3 = _createSuper5(UnmuteTask2);
    function UnmuteTask2() {
      return _super3.call(this, "unmute");
    }
    var _proto4 = UnmuteTask2.prototype;
    _proto4.executeInternal = function executeInternal(mediaEl) {
      mediaEl.muted = false;
      mediaEl.removeAttribute("muted");
      return resolvedPromise();
    };
    return UnmuteTask2;
  }(MediaTask);
  var MuteTask = /* @__PURE__ */ function(_MediaTask4) {
    _inherits5(MuteTask2, _MediaTask4);
    var _super4 = _createSuper5(MuteTask2);
    function MuteTask2() {
      return _super4.call(this, "mute");
    }
    var _proto5 = MuteTask2.prototype;
    _proto5.executeInternal = function executeInternal(mediaEl) {
      mediaEl.muted = true;
      mediaEl.setAttribute("muted", "");
      return resolvedPromise();
    };
    return MuteTask2;
  }(MediaTask);
  var SetCurrentTimeTask = /* @__PURE__ */ function(_MediaTask5) {
    _inherits5(SetCurrentTimeTask2, _MediaTask5);
    var _super5 = _createSuper5(SetCurrentTimeTask2);
    function SetCurrentTimeTask2(options) {
      if (options === void 0) {
        options = {
          currentTime: 0
        };
      }
      return _super5.call(this, "setCurrentTime", options);
    }
    var _proto6 = SetCurrentTimeTask2.prototype;
    _proto6.executeInternal = function executeInternal(mediaEl) {
      mediaEl.currentTime = this.options.currentTime;
      return resolvedPromise();
    };
    return SetCurrentTimeTask2;
  }(MediaTask);
  var LoadTask = /* @__PURE__ */ function(_MediaTask6) {
    _inherits5(LoadTask2, _MediaTask6);
    var _super6 = _createSuper5(LoadTask2);
    function LoadTask2() {
      return _super6.call(this, "load");
    }
    var _proto7 = LoadTask2.prototype;
    _proto7.executeInternal = function executeInternal(mediaEl) {
      mediaEl.load();
      return resolvedPromise();
    };
    _proto7.requiresSynchronousExecution = function requiresSynchronousExecution() {
      return true;
    };
    return LoadTask2;
  }(MediaTask);
  var BlessTask = /* @__PURE__ */ function(_MediaTask7) {
    _inherits5(BlessTask2, _MediaTask7);
    var _super7 = _createSuper5(BlessTask2);
    function BlessTask2() {
      return _super7.call(this, "bless");
    }
    var _proto8 = BlessTask2.prototype;
    _proto8.requiresSynchronousExecution = function requiresSynchronousExecution() {
      return true;
    };
    _proto8.executeInternal = function executeInternal(mediaEl) {
      var isMuted = mediaEl.muted;
      mediaEl.muted = false;
      if (isMuted) {
        mediaEl.muted = true;
      }
      return resolvedPromise();
    };
    return BlessTask2;
  }(MediaTask);
  var UpdateSourcesTask = /* @__PURE__ */ function(_MediaTask8) {
    _inherits5(UpdateSourcesTask2, _MediaTask8);
    var _super8 = _createSuper5(UpdateSourcesTask2);
    function UpdateSourcesTask2(win, newSources) {
      var _this;
      _this = _super8.call(this, "update-src");
      _this.win_ = win;
      _this.newSources_ = newSources;
      return _this;
    }
    var _proto9 = UpdateSourcesTask2.prototype;
    _proto9.executeInternal = function executeInternal(mediaEl) {
      Sources.removeFrom(this.win_, mediaEl);
      this.newSources_.applyToElement(this.win_, mediaEl);
      return resolvedPromise();
    };
    _proto9.requiresSynchronousExecution = function requiresSynchronousExecution() {
      return true;
    };
    return UpdateSourcesTask2;
  }(MediaTask);
  var SwapIntoDomTask = /* @__PURE__ */ function(_MediaTask9) {
    _inherits5(SwapIntoDomTask2, _MediaTask9);
    var _super9 = _createSuper5(SwapIntoDomTask2);
    function SwapIntoDomTask2(placeholderEl) {
      var _this2;
      _this2 = _super9.call(this, "swap-into-dom");
      _this2.placeholderEl_ = placeholderEl;
      return _this2;
    }
    var _proto10 = SwapIntoDomTask2.prototype;
    _proto10.executeInternal = function executeInternal(mediaEl) {
      if (!isConnectedNode(this.placeholderEl_)) {
        this.failTask("Cannot swap media for element that is not in DOM.");
        return resolvedPromise();
      }
      copyCssClasses(this.placeholderEl_, mediaEl);
      copyAttributes(this.placeholderEl_, mediaEl);
      this.placeholderEl_.parentElement.replaceChild(mediaEl, this.placeholderEl_);
      return resolvedPromise();
    };
    _proto10.requiresSynchronousExecution = function requiresSynchronousExecution() {
      return true;
    };
    return SwapIntoDomTask2;
  }(MediaTask);
  var SwapOutOfDomTask = /* @__PURE__ */ function(_MediaTask10) {
    _inherits5(SwapOutOfDomTask2, _MediaTask10);
    var _super10 = _createSuper5(SwapOutOfDomTask2);
    function SwapOutOfDomTask2(placeholderEl) {
      var _this3;
      _this3 = _super10.call(this, "swap-out-of-dom");
      _this3.placeholderEl_ = placeholderEl;
      return _this3;
    }
    var _proto11 = SwapOutOfDomTask2.prototype;
    _proto11.executeInternal = function executeInternal(mediaEl) {
      copyCssClasses(mediaEl, this.placeholderEl_);
      copyAttributes(mediaEl, this.placeholderEl_);
      mediaEl.parentElement.replaceChild(this.placeholderEl_, mediaEl);
      return resolvedPromise();
    };
    _proto11.requiresSynchronousExecution = function requiresSynchronousExecution() {
      return true;
    };
    return SwapOutOfDomTask2;
  }(MediaTask);

  // extensions/amp-story/1.0/media-pool.js
  var MediaType = {
    UNSUPPORTED: "unsupported",
    AUDIO: "audio",
    VIDEO: "video"
  };
  var MediaElementOrigin = {
    PLACEHOLDER: "placeholder",
    POOL: "pool"
  };
  var PLACEHOLDER_ELEMENT_ID_PREFIX = "i-amphtml-placeholder-media-";
  var POOL_ELEMENT_ID_PREFIX = "i-amphtml-pool-media-";
  var POOL_MEDIA_ELEMENT_PROPERTY_NAME = "__AMP_MEDIA_POOL_ID__";
  var ELEMENT_TASK_QUEUE_PROPERTY_NAME = "__AMP_MEDIA_ELEMENT_TASKS__";
  var MEDIA_ELEMENT_ORIGIN_PROPERTY_NAME = "__AMP_MEDIA_ELEMENT_ORIGIN__";
  var REPLACED_MEDIA_PROPERTY_NAME = "replaced-media";
  var instances = {};
  var nextInstanceId = 0;
  var MediaPool = /* @__PURE__ */ function() {
    function MediaPool2(win, maxCounts, distanceFn) {
      var _this = this, _this$mediaFactory_;
      this.win_ = win;
      this.timer_ = Services.timerFor(win);
      this.distanceFn_ = distanceFn;
      this.allocated = {};
      this.unallocated = {};
      this.sources_ = {};
      this.placeholderEls_ = {};
      this.placeholderIdCounter_ = 0;
      this.blessed_ = false;
      this.ampElementsToBless_ = null;
      this.mediaFactory_ = (_this$mediaFactory_ = {}, _this$mediaFactory_[MediaType.AUDIO] = function() {
        var audioEl = _this.win_.document.createElement("audio");
        audioEl.setAttribute("muted", "");
        audioEl.muted = true;
        audioEl.classList.add("i-amphtml-pool-media");
        audioEl.classList.add("i-amphtml-pool-audio");
        return audioEl;
      }, _this$mediaFactory_[MediaType.VIDEO] = function() {
        var videoEl = _this.win_.document.createElement("video");
        videoEl.setAttribute("muted", "");
        videoEl.muted = true;
        videoEl.setAttribute("playsinline", "");
        videoEl.classList.add("i-amphtml-pool-media");
        videoEl.classList.add("i-amphtml-pool-video");
        return videoEl;
      }, _this$mediaFactory_);
      this.initializeMediaPool_(maxCounts);
    }
    var _proto = MediaPool2.prototype;
    _proto.initializeMediaPool_ = function initializeMediaPool_(maxCounts) {
      var _this2 = this;
      var poolIdCounter = 0;
      this.forEachMediaType_(function(key) {
        var type = MediaType[key];
        var count = maxCounts[type] || 0;
        if (count <= 0) {
          return;
        }
        var ctor = devAssert2(_this2.mediaFactory_[type], "Factory for media type `" + type + "` unset.");
        var mediaElSeed = ctor.call(_this2);
        _this2.allocated[type] = [];
        _this2.unallocated[type] = [];
        for (var i = count; i > 0; i--) {
          var mediaEl = i == 1 ? mediaElSeed : mediaElSeed.cloneNode(true);
          mediaEl.addEventListener("error", _this2.onMediaError_, {
            capture: true
          });
          mediaEl.id = POOL_ELEMENT_ID_PREFIX + poolIdCounter++;
          mediaEl.muted = true;
          mediaEl[MEDIA_ELEMENT_ORIGIN_PROPERTY_NAME] = MediaElementOrigin.POOL;
          _this2.unallocated[type].push(mediaEl);
        }
      });
    };
    _proto.onMediaError_ = function onMediaError_(event) {
      var target = dev().assertElement(event.target);
      if (!matches(target, "source:last-of-type, video[src]")) {
        return;
      }
      var media = target.tagName === "SOURCE" ? target.parentElement : target;
      media[MEDIA_LOAD_FAILURE_SRC_PROPERTY] = media.currentSrc || true;
    };
    _proto.getDefaultSource_ = function getDefaultSource_() {
      return new Sources();
    };
    _proto.compareMediaDistances_ = function compareMediaDistances_(mediaA, mediaB) {
      var distanceA = this.distanceFn_(mediaA);
      var distanceB = this.distanceFn_(mediaB);
      return distanceA < distanceB ? -1 : 1;
    };
    _proto.createPlaceholderElementId_ = function createPlaceholderElementId_() {
      return PLACEHOLDER_ELEMENT_ID_PREFIX + this.placeholderIdCounter_++;
    };
    _proto.isPoolMediaElement_ = function isPoolMediaElement_(mediaElement) {
      return mediaElement[MEDIA_ELEMENT_ORIGIN_PROPERTY_NAME] === MediaElementOrigin.POOL;
    };
    _proto.getMediaType_ = function getMediaType_(mediaElement) {
      var tagName = mediaElement.tagName.toLowerCase();
      switch (tagName) {
        case "audio":
          return MediaType.AUDIO;
        case "video":
          return MediaType.VIDEO;
        default:
          return MediaType.UNSUPPORTED;
      }
    };
    _proto.reserveUnallocatedMediaElement_ = function reserveUnallocatedMediaElement_(mediaType) {
      return this.unallocated[mediaType].pop();
    };
    _proto.getMatchingMediaElementFromPool_ = function getMatchingMediaElementFromPool_(mediaType, domMediaEl) {
      if (this.isAllocatedMediaElement_(mediaType, domMediaEl)) {
        return domMediaEl;
      }
      var allocatedEls = this.allocated[mediaType];
      var index = findIndex(allocatedEls, function(poolMediaEl) {
        return poolMediaEl[REPLACED_MEDIA_PROPERTY_NAME] === domMediaEl.id;
      });
      return allocatedEls[index];
    };
    _proto.allocateMediaElement_ = function allocateMediaElement_(mediaType, poolMediaEl) {
      this.allocated[mediaType].push(poolMediaEl);
      var unallocatedEls = this.unallocated[mediaType];
      var indexToRemove = unallocatedEls.indexOf(poolMediaEl);
      if (indexToRemove >= 0) {
        unallocatedEls.splice(indexToRemove, 1);
      }
    };
    _proto.deallocateMediaElement_ = function deallocateMediaElement_(mediaType, opt_elToAllocate) {
      var _this3 = this;
      var allocatedEls = this.allocated[mediaType];
      allocatedEls.sort(function(a, b) {
        return _this3.compareMediaDistances_(a, b);
      });
      if (opt_elToAllocate) {
        var furthestEl = allocatedEls[allocatedEls.length - 1];
        if (!furthestEl || this.distanceFn_(furthestEl) < this.distanceFn_(opt_elToAllocate)) {
          return null;
        }
      }
      var poolMediaEl = allocatedEls.pop();
      this.unallocated[mediaType].push(poolMediaEl);
      return poolMediaEl;
    };
    _proto.forceDeallocateMediaElement_ = function forceDeallocateMediaElement_(poolMediaEl) {
      var _this4 = this;
      var mediaType = this.getMediaType_(poolMediaEl);
      var allocatedEls = this.allocated[mediaType];
      var removeFromDom = isConnectedNode(poolMediaEl) ? this.swapPoolMediaElementOutOfDom_(poolMediaEl) : resolvedPromise();
      return removeFromDom.then(function() {
        var index = allocatedEls.indexOf(poolMediaEl);
        devAssert2(index >= 0, "Cannot deallocate unallocated media element.");
        allocatedEls.splice(index, 1);
        _this4.unallocated[mediaType].push(poolMediaEl);
      });
    };
    _proto.evictMediaElement_ = function evictMediaElement_(mediaType, opt_elToAllocate) {
      var poolMediaEl = this.deallocateMediaElement_(mediaType, opt_elToAllocate);
      if (!poolMediaEl) {
        return null;
      }
      this.swapPoolMediaElementOutOfDom_(poolMediaEl);
      return poolMediaEl;
    };
    _proto.isAllocatedMediaElement_ = function isAllocatedMediaElement_(mediaType, domMediaEl) {
      var poolMediaEl = domMediaEl;
      return this.allocated[mediaType].indexOf(poolMediaEl) >= 0;
    };
    _proto.swapPoolMediaElementIntoDom_ = function swapPoolMediaElementIntoDom_(placeholderEl, poolMediaEl, sources) {
      var _this5 = this;
      var ampMediaForPoolEl = ampMediaElementFor(poolMediaEl);
      var ampMediaForDomEl = ampMediaElementFor(placeholderEl);
      poolMediaEl[REPLACED_MEDIA_PROPERTY_NAME] = placeholderEl.id;
      return this.enqueueMediaElementTask_(poolMediaEl, new SwapIntoDomTask(placeholderEl)).then(function() {
        return Promise.all([_this5.maybeResetAmpMedia_(ampMediaForPoolEl), _this5.maybeResetAmpMedia_(ampMediaForDomEl)]);
      }).then(function() {
        return _this5.enqueueMediaElementTask_(poolMediaEl, new UpdateSourcesTask(_this5.win_, sources));
      }).then(function() {
        return _this5.enqueueMediaElementTask_(poolMediaEl, new LoadTask());
      }).catch(function() {
        _this5.forceDeallocateMediaElement_(poolMediaEl);
      });
    };
    _proto.maybeResetAmpMedia_ = function maybeResetAmpMedia_(componentEl) {
      if (!componentEl) {
        return resolvedPromise();
      }
      if (componentEl.tagName.toLowerCase() == "amp-audio") {
        return resolvedPromise();
      }
      return componentEl.getImpl().then(function(impl) {
        if (impl.resetOnDomChange) {
          impl.resetOnDomChange();
        }
      });
    };
    _proto.resetPoolMediaElementSource_ = function resetPoolMediaElementSource_(poolMediaEl) {
      var _this6 = this;
      var defaultSources = this.getDefaultSource_();
      return this.enqueueMediaElementTask_(poolMediaEl, new UpdateSourcesTask(this.win_, defaultSources)).then(function() {
        return _this6.enqueueMediaElementTask_(poolMediaEl, new LoadTask());
      });
    };
    _proto.swapPoolMediaElementOutOfDom_ = function swapPoolMediaElementOutOfDom_(poolMediaEl) {
      var placeholderElId = poolMediaEl[REPLACED_MEDIA_PROPERTY_NAME];
      var placeholderEl = dev().assertElement(this.placeholderEls_[placeholderElId], "No media element " + placeholderElId + " to put back into DOM aftereviction.");
      poolMediaEl[REPLACED_MEDIA_PROPERTY_NAME] = null;
      var swapOutOfDom = this.enqueueMediaElementTask_(poolMediaEl, new SwapOutOfDomTask(placeholderEl));
      this.resetPoolMediaElementSource_(poolMediaEl);
      return swapOutOfDom;
    };
    _proto.forEachMediaType_ = function forEachMediaType_(callbackFn) {
      Object.keys(MediaType).forEach(callbackFn.bind(this));
    };
    _proto.forEachMediaElement_ = function forEachMediaElement_(callbackFn) {
      var _this7 = this;
      [this.allocated, this.unallocated].forEach(function(mediaSet) {
        _this7.forEachMediaType_(function(key) {
          var type = MediaType[key];
          var els = mediaSet[type];
          if (!els) {
            return;
          }
          els.forEach(callbackFn.bind(_this7));
        });
      });
    };
    _proto.loadInternal_ = function loadInternal_(domMediaEl) {
      if (!isConnectedNode(domMediaEl)) {
        return resolvedPromise();
      }
      var mediaType = this.getMediaType_(domMediaEl);
      var existingPoolMediaEl = this.getMatchingMediaElementFromPool_(mediaType, domMediaEl);
      if (existingPoolMediaEl) {
        return Promise.resolve(existingPoolMediaEl);
      }
      var placeholderEl = domMediaEl;
      var sources = this.sources_[placeholderEl.id];
      devAssert2(sources instanceof Sources, "Cannot play unregistered element.");
      var poolMediaEl = this.reserveUnallocatedMediaElement_(mediaType) || this.evictMediaElement_(mediaType, placeholderEl);
      if (!poolMediaEl) {
        return resolvedPromise();
      }
      this.allocateMediaElement_(mediaType, poolMediaEl);
      return this.swapPoolMediaElementIntoDom_(placeholderEl, poolMediaEl, sources).then(function() {
        return poolMediaEl;
      });
    };
    _proto.bless_ = function bless_(poolMediaEl) {
      if (poolMediaEl[ELEMENT_BLESSED_PROPERTY_NAME]) {
        return resolvedPromise();
      }
      return this.enqueueMediaElementTask_(poolMediaEl, new BlessTask());
    };
    _proto.register = function register(domMediaEl) {
      var parent = domMediaEl.parentNode;
      if (parent && parent.signals) {
        this.trackAmpElementToBless_(parent);
      }
      if (this.isPoolMediaElement_(domMediaEl)) {
        return resolvedPromise();
      }
      var placeholderEl = domMediaEl;
      placeholderEl[MEDIA_ELEMENT_ORIGIN_PROPERTY_NAME] = MediaElementOrigin.PLACEHOLDER;
      var id = placeholderEl.id || this.createPlaceholderElementId_();
      if (this.sources_[id] && this.placeholderEls_[id]) {
        return resolvedPromise();
      }
      placeholderEl.id = id;
      var sources = Sources.removeFrom(this.win_, placeholderEl);
      this.sources_[id] = sources;
      this.placeholderEls_[id] = placeholderEl;
      if (placeholderEl instanceof HTMLMediaElement) {
        placeholderEl.muted = true;
        placeholderEl.setAttribute("muted", "");
        placeholderEl.pause();
      }
      return resolvedPromise();
    };
    _proto.trackAmpElementToBless_ = function trackAmpElementToBless_(element) {
      this.ampElementsToBless_ = this.ampElementsToBless_ || [];
      this.ampElementsToBless_.push(element);
    };
    _proto.preload = function preload(domMediaEl) {
      return this.loadInternal_(domMediaEl).then();
    };
    _proto.play = function play(domMediaEl) {
      var _this8 = this;
      return this.loadInternal_(domMediaEl).then(function(poolMediaEl) {
        if (!poolMediaEl) {
          return resolvedPromise();
        }
        return _this8.enqueueMediaElementTask_(poolMediaEl, new PlayTask());
      });
    };
    _proto.pause = function pause(domMediaEl, rewindToBeginning) {
      var _this9 = this;
      if (rewindToBeginning === void 0) {
        rewindToBeginning = false;
      }
      var mediaType = this.getMediaType_(domMediaEl);
      var poolMediaEl = this.getMatchingMediaElementFromPool_(mediaType, domMediaEl);
      if (!poolMediaEl) {
        return resolvedPromise();
      }
      return this.enqueueMediaElementTask_(poolMediaEl, new PauseTask()).then(function() {
        if (rewindToBeginning) {
          _this9.enqueueMediaElementTask_(poolMediaEl, new SetCurrentTimeTask({
            currentTime: 0
          }));
        }
      });
    };
    _proto.rewindToBeginning = function rewindToBeginning(domMediaEl) {
      return this.setCurrentTime(domMediaEl, 0);
    };
    _proto.setCurrentTime = function setCurrentTime(domMediaEl, currentTime) {
      var mediaType = this.getMediaType_(domMediaEl);
      var poolMediaEl = this.getMatchingMediaElementFromPool_(mediaType, domMediaEl);
      if (!poolMediaEl) {
        return resolvedPromise();
      }
      return this.enqueueMediaElementTask_(poolMediaEl, new SetCurrentTimeTask({
        currentTime: currentTime
      }));
    };
    _proto.mute = function mute(domMediaEl) {
      var mediaType = this.getMediaType_(domMediaEl);
      var poolMediaEl = this.getMatchingMediaElementFromPool_(mediaType, domMediaEl);
      if (!poolMediaEl) {
        return resolvedPromise();
      }
      if (mediaType == MediaType.VIDEO) {
        domMediaEl.volume = 1;
      }
      return this.enqueueMediaElementTask_(poolMediaEl, new MuteTask());
    };
    _proto.unmute = function unmute(domMediaEl) {
      var mediaType = this.getMediaType_(domMediaEl);
      var poolMediaEl = this.getMatchingMediaElementFromPool_(mediaType, domMediaEl);
      if (!poolMediaEl) {
        return resolvedPromise();
      }
      if (mediaType == MediaType.VIDEO) {
        var ampVideoEl = domMediaEl.parentElement;
        if (ampVideoEl) {
          var volume = ampVideoEl.getAttribute("volume");
          if (volume) {
            domMediaEl.volume = parseFloat(volume);
          }
        }
      }
      return this.enqueueMediaElementTask_(poolMediaEl, new UnmuteTask());
    };
    _proto.blessAll = function blessAll() {
      var _this10 = this;
      if (this.blessed_) {
        return resolvedPromise();
      }
      var blessPromises = [];
      (this.ampElementsToBless_ || []).forEach(userInteractedWith);
      this.ampElementsToBless_ = null;
      this.forEachMediaElement_(function(mediaEl) {
        blessPromises.push(_this10.bless_(mediaEl));
      });
      return Promise.all(blessPromises).then(function() {
        _this10.blessed_ = true;
      }, function(reason) {
        dev().expectedError("AMP-STORY", "Blessing all media failed: ", reason);
      });
    };
    _proto.executeNextMediaElementTask_ = function executeNextMediaElementTask_(mediaEl) {
      var _this11 = this;
      var queue = mediaEl[ELEMENT_TASK_QUEUE_PROPERTY_NAME];
      if (queue.length === 0) {
        return;
      }
      var task = queue[0];
      var executionFn = function executionFn2() {
        task.execute(mediaEl).catch(function(reason) {
          return dev().error("AMP-STORY", reason);
        }).then(function() {
          queue.shift();
          _this11.executeNextMediaElementTask_(mediaEl);
        });
      };
      if (task.requiresSynchronousExecution()) {
        executionFn.call(this);
      } else {
        this.timer_.delay(executionFn.bind(this), 0);
      }
    };
    _proto.enqueueMediaElementTask_ = function enqueueMediaElementTask_(mediaEl, task) {
      if (!mediaEl[ELEMENT_TASK_QUEUE_PROPERTY_NAME]) {
        mediaEl[ELEMENT_TASK_QUEUE_PROPERTY_NAME] = [];
      }
      var queue = mediaEl[ELEMENT_TASK_QUEUE_PROPERTY_NAME];
      var isQueueRunning = queue.length !== 0;
      queue.push(task);
      if (!isQueueRunning) {
        this.executeNextMediaElementTask_(mediaEl);
      }
      return task.whenComplete();
    };
    MediaPool2.for = function _for(root) {
      var element = root.getElement();
      var existingId = element[POOL_MEDIA_ELEMENT_PROPERTY_NAME];
      var hasInstanceAllocated = existingId && instances[existingId];
      if (hasInstanceAllocated) {
        return instances[existingId];
      }
      var newId = String(nextInstanceId++);
      element[POOL_MEDIA_ELEMENT_PROPERTY_NAME] = newId;
      instances[newId] = new MediaPool2(getWin(root.getElement()), root.getMaxMediaElementCounts(), function(element2) {
        return root.getElementDistance(element2);
      });
      return instances[newId];
    };
    return MediaPool2;
  }();

  // src/experiments/story-ad-progress-segment.js
  var _BranchToTimeValues;
  var StoryAdSegmentExp = {
    ID: "story-ad-progress-segment",
    CONTROL: "31063379",
    NO_ADVANCE_BOTH: "31063380",
    NO_ADVANCE_AD: "31063381",
    TEN_SECONDS: "31063382",
    TWELVE_SECONDS: "31063383",
    FOURTEEN_SECONDS: "31063384"
  };
  var StoryAdSegmentTimes = {
    SENTINEL: "999999ms",
    TEN_SECONDS: "10000ms",
    TWELVE_SECONDS: "12000ms",
    FOURTEEN_SECONDS: "14000ms"
  };
  var BranchToTimeValues = (_BranchToTimeValues = {}, _BranchToTimeValues[StoryAdSegmentExp.TEN_SECONDS] = StoryAdSegmentTimes.TEN_SECONDS, _BranchToTimeValues[StoryAdSegmentExp.TWELVE_SECONDS] = StoryAdSegmentTimes.TWELVE_SECONDS, _BranchToTimeValues[StoryAdSegmentExp.FOURTEEN_SECONDS] = StoryAdSegmentTimes.FOURTEEN_SECONDS, _BranchToTimeValues);

  // src/iframe-helper.js
  var FIE_EMBED_PROP = "__AMP_EMBED__";
  function getFriendlyIframeEmbedOptional(iframe) {
    return iframe[FIE_EMBED_PROP];
  }

  // extensions/amp-story/1.0/logging.js
  var AMPPROJECT_DOCS = "https://www.ampproject.org/docs";
  function getPosterFromVideo(el) {
    return new Promise(function(resolve, reject) {
      var poster = new Image();
      poster.onload = function() {
        return resolve(poster);
      };
      poster.onerror = reject;
      poster.src = el.getAttribute("poster");
    });
  }
  var LogType = {
    VIDEOS_POSTER_SPECIFIED: {
      message: "Videos should specify a poster image.",
      moreInfo: AMPPROJECT_DOCS + "/reference/components/amp-video#poster",
      selector: "video:not([poster])",
      level: LogLevel_Enum.ERROR
    },
    IMAGES_MAX_720P_OR_SRCSET: {
      message: "Images should not be larger than 720p.  If you wish to use images that are larger than 720p, you should specify a srcset.",
      moreInfo: AMPPROJECT_DOCS + "/guides/responsive/art_direction#srcset",
      selector: "img:not([srcset])",
      predicate: function predicate(el) {
        return el.naturalWidth <= 720 && el.naturalHeight <= 1280;
      },
      level: LogLevel_Enum.WARN
    },
    IMAGES_PORTRAIT: {
      message: "Full-bleed images should be in portrait orientation.",
      selector: 'amp-story-grid-layer[template="fill"] > amp-img > img',
      predicate: function predicate2(el) {
        return el.naturalWidth < el.naturalHeight;
      },
      level: LogLevel_Enum.WARN
    },
    VIDEOS_MAX_720P: {
      message: "Videos should not be larger than 720p.",
      selector: "video",
      predicate: function predicate3(el) {
        return el.videoWidth <= 720 && el.videoHeight <= 1280;
      },
      level: LogLevel_Enum.WARN
    },
    VIDEOS_PORTRAIT: {
      message: "Full-bleed videos should be in portrait orientation.",
      selector: 'amp-story-grid-layer[template="fill"] > amp-video > video',
      predicate: function predicate4(el) {
        return el.videoWidth < el.videoHeight;
      },
      level: LogLevel_Enum.WARN
    },
    VIDEO_POSTER_MAX_720P: {
      message: "Video poster images should not be larger than 720p.",
      selector: "video[poster]",
      predicate: function predicate5(el) {
        return getPosterFromVideo(el).then(function(poster) {
          return poster.naturalWidth <= 720 && poster.naturalHeight <= 1280;
        });
      },
      level: LogLevel_Enum.WARN
    },
    VIDEO_POSTER_POTRAIT: {
      message: "Poster images for full-bleed videos should be in portrait orientation.",
      selector: 'amp-story-grid-layer[template="fill"] > amp-video > video[poster]',
      predicate: function predicate6(el) {
        return getPosterFromVideo(el).then(function(poster) {
          return poster.naturalWidth < poster.naturalHeight;
        });
      },
      level: LogLevel_Enum.WARN
    }
  };
  function getLogType(logTypeKey) {
    var logType = LogType[logTypeKey];
    devAssert2(logType, 'There is no log type "' + logTypeKey + '".');
    devAssert2(logType.message, 'Log type "' + logTypeKey + '" has no associated message.');
    devAssert2(logType.level, 'Log type "' + logTypeKey + '" has no associated log level.');
    return logType;
  }
  function getLogEntry(rootElement, logType, element) {
    var predicate7 = logType.predicate || function(unusedEl) {
      return false;
    };
    return tryResolve(function() {
      return predicate7(element);
    }).then(function(conforms) {
      return new Promise(function(resolve) {
        resolve({
          rootElement: rootElement,
          element: element,
          conforms: conforms,
          level: logType.level,
          message: logType.message,
          moreInfo: logType.moreInfo
        });
      });
    });
  }
  function getLogEntriesForType(rootElement, logType) {
    var precondition = logType.precondition || function(unusedEl) {
      return true;
    };
    var elements = logType.selector ? [].slice.call(scopedQuerySelectorAll(rootElement, logType.selector)) : [rootElement];
    return elements.filter(precondition).map(getLogEntry.bind(null, rootElement, logType));
  }
  function logEntryCompareFn(logEntryA, logEntryB) {
    if (logEntryA.conforms == logEntryB.conforms) {
      return logEntryA.level <= logEntryB.level ? -1 : 1;
    } else {
      return logEntryA.conforms < logEntryB.conforms ? -1 : 1;
    }
  }
  function getLogEntries(rootElement) {
    var logEntryPromises = Object.keys(LogType).reduce(function(entries, key) {
      var logType = getLogType(key);
      var newEntries = getLogEntriesForType(rootElement, logType);
      return entries.concat(newEntries);
    }, []);
    return Promise.all(logEntryPromises).then(function(logEntries) {
      return logEntries.sort(logEntryCompareFn);
    });
  }

  // extensions/amp-story/1.0/media-performance-metrics-service.js
  function _createForOfIteratorHelperLoose5(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray5(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray5(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray5(o, minLen);
    var n2 = Object.prototype.toString.call(o).slice(8, -1);
    if (n2 === "Object" && o.constructor)
      n2 = o.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray5(o, minLen);
  }
  function _arrayLikeToArray5(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  var Status = {
    ERRORED: 0,
    PAUSED: 1,
    PLAYING: 2,
    WAITING: 3
  };
  var CacheState = {
    ORIGIN: 0,
    ORIGIN_CACHE_MISS: 1,
    CACHE: 2
  };
  var FirstPageState = {
    NOT_ON_FIRST_PAGE: 0,
    ON_FIRST_PAGE: 1
  };
  var MINIMUM_TIME_THRESHOLD_MS = 1e3;
  var REBUFFER_THRESHOLD_MS = 250;
  var TAG6 = "media-performance-metrics";
  var getMediaPerformanceMetricsService = function getMediaPerformanceMetricsService2(win) {
    var service = Services.mediaPerformanceMetricsService(win);
    if (!service) {
      service = new MediaPerformanceMetricsService(win);
      registerServiceBuilder(win, "media-performance-metrics", function() {
        return service;
      });
    }
    return service;
  };
  var MediaPerformanceMetricsService = /* @__PURE__ */ function() {
    function MediaPerformanceMetricsService2(win) {
      this.mediaMap_ = new WeakMap();
      this.performanceService_ = Services.performanceFor(win);
    }
    var _proto = MediaPerformanceMetricsService2.prototype;
    _proto.isPerformanceTrackingOn = function isPerformanceTrackingOn() {
      return this.performanceService_.isPerformanceTrackingOn();
    };
    _proto.startMeasuring = function startMeasuring(media) {
      if (!media.paused) {
        dev().expectedError(TAG6, "media must start paused");
        return;
      }
      var unlisteners = this.listen_(media);
      var mediaEntry = this.getNewMediaEntry_(media, unlisteners);
      this.mediaMap_.set(media, mediaEntry);
      if (media.error || media[MEDIA_LOAD_FAILURE_SRC_PROPERTY] === media.currentSrc) {
        mediaEntry.metrics.error = media.error ? media.error.code : 0;
        mediaEntry.status = Status.ERRORED;
      }
    };
    _proto.stopMeasuring = function stopMeasuring(media, sendMetrics) {
      if (sendMetrics === void 0) {
        sendMetrics = true;
      }
      var mediaEntry = this.mediaMap_.get(media);
      if (!mediaEntry) {
        return;
      }
      mediaEntry.unlisteners.forEach(function(unlisten) {
        return unlisten();
      });
      this.mediaMap_.delete(media);
      switch (mediaEntry.status) {
        case Status.PLAYING:
          this.addWatchTime_(mediaEntry);
          break;
        case Status.WAITING:
          this.addRebuffer_(mediaEntry);
          break;
      }
      if (sendMetrics) {
        this.sendMetrics_(mediaEntry);
      }
    };
    _proto.sendMetrics_ = function sendMetrics_(mediaEntry) {
      var media = mediaEntry.media, metrics = mediaEntry.metrics;
      this.performanceService_.tickDelta(TickLabel_Enum.VIDEO_CACHE_STATE, this.getVideoCacheState_(media));
      this.performanceService_.tickDelta(TickLabel_Enum.VIDEO_ON_FIRST_PAGE, matches(media, "amp-story-page:first-of-type " + media.tagName) ? FirstPageState.ON_FIRST_PAGE : FirstPageState.NOT_ON_FIRST_PAGE);
      if (metrics.error !== null) {
        this.performanceService_.tickDelta(TickLabel_Enum.VIDEO_ERROR, metrics.error || 0);
        this.performanceService_.flush();
        return;
      }
      if (!metrics.jointLatency && Date.now() - mediaEntry.timeStamps.start < MINIMUM_TIME_THRESHOLD_MS) {
        return;
      }
      if (!metrics.jointLatency) {
        this.performanceService_.tickDelta(TickLabel_Enum.VIDEO_ERROR, 5);
        this.performanceService_.flush();
        return;
      }
      var rebufferRate = Math.round(metrics.rebufferTime / (metrics.rebufferTime + metrics.watchTime) * 100);
      this.performanceService_.tickDelta(TickLabel_Enum.VIDEO_JOINT_LATENCY, metrics.jointLatency);
      this.performanceService_.tickDelta(TickLabel_Enum.VIDEO_WATCH_TIME, metrics.watchTime);
      this.performanceService_.tickDelta(TickLabel_Enum.VIDEO_REBUFFERS, metrics.rebuffers);
      this.performanceService_.tickDelta(TickLabel_Enum.VIDEO_REBUFFER_RATE, rebufferRate);
      if (metrics.rebuffers) {
        this.performanceService_.tickDelta(TickLabel_Enum.VIDEO_MEAN_TIME_BETWEEN_REBUFFER, Math.round(metrics.watchTime / metrics.rebuffers));
      }
      this.performanceService_.flush();
    };
    _proto.getNewMediaEntry_ = function getNewMediaEntry_(media, unlisteners) {
      return {
        media: media,
        status: Status.PAUSED,
        unlisteners: unlisteners,
        timeStamps: {
          start: Date.now(),
          playing: 0,
          waiting: 0
        },
        metrics: {
          error: null,
          jointLatency: 0,
          meanTimeBetweenRebuffers: 0,
          rebuffers: 0,
          rebufferTime: 0,
          watchTime: 0
        }
      };
    };
    _proto.addWatchTime_ = function addWatchTime_(mediaEntry) {
      mediaEntry.metrics.watchTime += Date.now() - mediaEntry.timeStamps.playing;
    };
    _proto.addRebuffer_ = function addRebuffer_(mediaEntry) {
      var rebufferTime = Date.now() - mediaEntry.timeStamps.waiting;
      if (rebufferTime > REBUFFER_THRESHOLD_MS) {
        mediaEntry.metrics.rebuffers++;
        mediaEntry.metrics.rebufferTime += rebufferTime;
      }
    };
    _proto.listen_ = function listen_(media) {
      var unlisteners = [listen(media, "ended", this.onPauseOrEnded_.bind(this)), listen(media, "pause", this.onPauseOrEnded_.bind(this)), listen(media, "playing", this.onPlaying_.bind(this)), listen(media, "waiting", this.onWaiting_.bind(this))];
      var errorTarget = media;
      if (!media.hasAttribute("src")) {
        errorTarget = lastChildElement(media, function(child) {
          return child.tagName === "SOURCE";
        });
      }
      unlisteners.push(listen(errorTarget || media, "error", this.onError_.bind(this)));
      return unlisteners;
    };
    _proto.onError_ = function onError_(event) {
      var media = event.target.tagName === "SOURCE" ? event.target.parent : event.target;
      var mediaEntry = this.mediaMap_.get(media);
      mediaEntry.metrics.error = media.error ? media.error.code : 0;
      mediaEntry.status = Status.ERRORED;
    };
    _proto.onPauseOrEnded_ = function onPauseOrEnded_(event) {
      var mediaEntry = this.mediaMap_.get(event.target);
      if (mediaEntry.status === Status.PLAYING) {
        this.addWatchTime_(mediaEntry);
      }
      mediaEntry.status = Status.PAUSED;
    };
    _proto.onPlaying_ = function onPlaying_(event) {
      var mediaEntry = this.mediaMap_.get(event.target);
      var metrics = mediaEntry.metrics, timeStamps = mediaEntry.timeStamps;
      if (!metrics.jointLatency) {
        metrics.jointLatency = Date.now() - timeStamps.start;
      }
      if (mediaEntry.status === Status.WAITING) {
        this.addRebuffer_(mediaEntry);
      }
      timeStamps.playing = Date.now();
      mediaEntry.status = Status.PLAYING;
    };
    _proto.onWaiting_ = function onWaiting_(event) {
      var mediaEntry = this.mediaMap_.get(event.target);
      var timeStamps = mediaEntry.timeStamps;
      if (mediaEntry.status === Status.PLAYING) {
        this.addWatchTime_(mediaEntry);
      }
      timeStamps.waiting = Date.now();
      mediaEntry.status = Status.WAITING;
    };
    _proto.getVideoCacheState_ = function getVideoCacheState_(media) {
      var hasCachedSource = false;
      var sources = toArray(media.querySelectorAll("source"));
      for (var _iterator = _createForOfIteratorHelperLoose5(sources), _step; !(_step = _iterator()).done; ) {
        var source = _step.value;
        var isCachedSource = source.hasAttribute("i-amphtml-video-cached-source");
        if (isCachedSource && media.currentSrc === source.src) {
          return CacheState.CACHE;
        }
        if (isCachedSource) {
          hasCachedSource = true;
        }
      }
      return hasCachedSource ? CacheState.ORIGIN_CACHE_MISS : CacheState.ORIGIN;
    };
    return MediaPerformanceMetricsService2;
  }();

  // build/amp-story-open-page-attachment-0.1.css.js
  var CSS3 = ".i-amphtml-story-page-open-attachment{display:none!important;--i-amphtml-chip-background-color:hsla(0,0%,100%,0.5)!important;--i-amphtml-img-background-color:#fff!important;--i-amphtml-label-text-color:#fff!important;--i-amphtml-arrow-color:#000!important;--i-amphtml-page-attachment-ui-animation-delay:1s!important;--i-amphtml-page-attachment-ui-animation-duration:.6s!important}[theme=dark].i-amphtml-story-page-open-attachment{--i-amphtml-chip-background-color:rgba(0,0,0,0.5)!important;--i-amphtml-img-background-color:#000!important;--i-amphtml-label-text-color:#000!important;--i-amphtml-arrow-color:#fff!important}.i-amphtml-story-page-open-attachment[active]{display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important;-ms-flex-direction:column!important;flex-direction:column!important;position:absolute!important;bottom:0!important;left:0!important;width:100%!important;background:linear-gradient(0,rgba(0,0,0,0.15),transparent)!important;pointer-events:none!important;z-index:3!important;-webkit-touch-callout:default!important;text-decoration:none!important}.i-amphtml-story-page-open-attachment:not([active]){visibility:hidden!important}.i-amphtml-story-page-open-attachment>*{cursor:pointer!important;pointer-events:auto!important}.i-amphtml-story-page-open-attachment-icon{display:block!important;height:32px!important;width:32px!important;cursor:pointer!important;animation:open-attachment-icon 0.2s cubic-bezier(0.4,0,0.2,1) 2s both!important}.i-amphtml-story-page-open-attachment-icon:after{content:\"\"!important;position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;background:#fff!important;border-radius:100%!important;z-index:-1!important;animation:open-attachment-icon-explode 0.25s cubic-bezier(0.4,0,0.2,1) 2s both!important}.i-amphtml-story-outlink-page-open-attachment-bar-left,.i-amphtml-story-outlink-page-open-attachment-bar-right,.i-amphtml-story-page-open-attachment-bar-left,.i-amphtml-story-page-open-attachment-bar-right{position:absolute!important;display:block!important;height:3px!important;width:12px!important;border-radius:3px!important;top:14px!important}.i-amphtml-story-page-open-attachment-bar-left{left:6px!important;animation:open-attachment-icon-color 0.25s cubic-bezier(0.4,0,0.2,1) 2s both,open-attachment-bar-left 0.3s cubic-bezier(0.4,0,0.2,1) both!important}.i-amphtml-story-page-open-attachment-bar-right{right:6px!important;animation:open-attachment-icon-color 0.25s cubic-bezier(0.4,0,0.2,1) 2s both,open-attachment-bar-right 0.3s cubic-bezier(0.4,0,0.2,1) both!important}.i-amphtml-story-page-open-attachment-label{position:relative!important;padding:12px 32px 20px!important;height:16px!important;max-width:calc(100% - 64px)!important;color:#fff!important;line-height:16px!important;text-shadow:0px 0px 6px rgba(0,0,0,0.36)!important}.i-amphtml-story-page-attachment-label,.i-amphtml-story-page-open-attachment-label{font-family:Roboto,sans-serif!important;font-size:16px!important;font-weight:700!important;letter-spacing:0.3px;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important}.i-amphtml-story-page-attachment-label{max-width:210px!important;line-height:18px!important}.i-amphtml-story-page-open-attachment-label{color:var(--i-amphtml-label-text-color)!important}.i-amphtml-story-inline-page-attachment-chip{background-color:var(--i-amphtml-chip-background-color)!important;display:-ms-flexbox!important;display:flex!important;border-radius:24px!important;-ms-flex-align:center!important;align-items:center!important;overflow:hidden!important;margin-bottom:12px!important}.i-amphtml-story-page-open-attachment[active] .i-amphtml-story-inline-page-attachment-chip{animation:tap-scale var(--i-amphtml-page-attachment-ui-animation-duration) var(--i-amphtml-page-attachment-ui-animation-delay) both!important}.i-amphtml-story-inline-page-attachment-chip:only-child{margin-bottom:20px!important}.i-amphtml-story-inline-page-attachment-img{background-size:contain!important;background-repeat:no-repeat!important;height:48px!important;width:48px!important;background-color:var(--i-amphtml-img-background-color)!important}.i-amphtml-story-inline-page-attachment-img:nth-child(2){margin-inline-start:1px!important}.i-amphtml-story-inline-page-attachment-arrow{position:relative!important;height:32px!important;width:32px!important;border-radius:50%!important;background-color:var(--i-amphtml-img-background-color)!important}.i-amphtml-story-inline-page-attachment-arrow:not(:only-child){margin:8px!important}.i-amphtml-story-inline-page-attachment-arrow:before{content:\"\"!important;position:absolute!important;top:0!important;left:0!important;width:100%!important;height:100%!important;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='8'%3E%3Cpath d='m18 7.7-.7-.2-7.3-4-7.3 4c-.7.4-1.6.2-2-.6-.4-.7-.1-1.6.6-2l8-4.4a2 2 0 0 1 1.5 0l8 4.4c.7.4 1 1.3.6 2-.4.5-.9.8-1.4.8z'/%3E%3C/svg%3E\")!important;background-position:50%!important;background-size:auto!important;background-repeat:no-repeat!important}.i-amphtml-story-page-open-attachment[active] .i-amphtml-story-inline-page-attachment-arrow:before{animation:move-up-arrow-in-circle var(--i-amphtml-page-attachment-ui-animation-duration) var(--i-amphtml-page-attachment-ui-animation-delay) both!important}[theme=dark] .i-amphtml-story-inline-page-attachment-arrow:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23fff' xmlns='http://www.w3.org/2000/svg' width='20' height='8'%3E%3Cpath d='m18 7.7-.7-.2-7.3-4-7.3 4c-.7.4-1.6.2-2-.6-.4-.7-.1-1.6.6-2l8-4.4a2 2 0 0 1 1.5 0l8 4.4c.7.4 1 1.3.6 2-.4.5-.9.8-1.4.8z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-page-open-attachment:not([href]) .i-amphtml-story-page-attachment-label{margin-bottom:20px!important;color:var(--i-amphtml-label-text-color)!important}.i-amphtml-story-page-open-attachment{--i-amphtml-outlink-cta-background-color:#fff!important;--i-amphtml-outlink-cta-text-color:#000!important;background:linear-gradient(0,rgba(0,0,0,0.25),transparent)!important}[theme=dark].i-amphtml-story-page-open-attachment{--i-amphtml-outlink-cta-background-color:#000!important;--i-amphtml-outlink-cta-text-color:#fff!important;background:linear-gradient(0,hsla(0,0%,100%,0.25),hsla(0,0%,100%,0))!important}[href].i-amphtml-story-page-open-attachment{background:none!important}[href].i-amphtml-story-page-open-attachment[active]{animation:tap-scale var(--i-amphtml-page-attachment-ui-animation-duration) var(--i-amphtml-page-attachment-ui-animation-delay) both!important}.i-amphtml-story-outlink-page-attachment-arrow{display:block!important;cursor:pointer!important;margin-bottom:10px!important;fill:var(--i-amphtml-outlink-cta-background-color)!important;filter:drop-shadow(0px 2px 6px rgba(0,0,0,0.3))!important}.i-amphtml-story-page-open-attachment[active] .i-amphtml-story-outlink-page-attachment-arrow{animation:move-up-arrow var(--i-amphtml-page-attachment-ui-animation-duration) var(--i-amphtml-page-attachment-ui-animation-delay) both!important}@keyframes move-up-arrow{0%,to{opacity:1;transform:translateY(0)}45%{opacity:0;transform:translateY(-7px)}45.01%{transform:translateY(5px)}}@keyframes move-up-arrow-in-circle{0%,to{opacity:1;transform:translateY(0)}45%{opacity:0;transform:translateY(-4px)}45.01%{transform:translateY(3px)}}@keyframes tap-scale{0%,to{transform:scale(1)}45%{transform:scale(.9)}}.i-amphtml-story-outlink-page-attachment-outlink-chip{display:-ms-flexbox!important;display:flex!important;position:relative!important;padding:10px 6px!important;margin:0 0 20px!important;height:16px!important;max-width:calc(100% - 64px)!important;border-radius:30px!important;background:var(--i-amphtml-outlink-cta-background-color)!important;place-items:center!important;box-shadow:0px 4px 10px rgba(0,0,0,.15)!important}.i-amphtml-story-outlink-page-attachment-img{height:24px!important;width:24px!important;vertical-align:middle!important;background-size:cover!important;background-repeat:no-repeat!important;background-position:50%!important;border-radius:50%!important}[href] .i-amphtml-story-page-attachment-label{padding-inline-start:6px!important;padding-inline-end:8px!important;color:var(--i-amphtml-outlink-cta-text-color)!important}.i-amphtml-story-outlink-page-attachment-label:only-child,[href] .i-amphtml-story-page-attachment-label:only-child{padding-inline-start:8px!important}.i-amphtml-story-page-open-attachment-link-icon{width:24px!important;height:24px!important;fill:var(--i-amphtml-outlink-cta-text-color)!important}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story-open-page-attachment.css*/";

  // src/core/dom/propagate-attributes.js
  function _createForOfIteratorHelperLoose6(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray6(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray6(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray6(o, minLen);
    var n2 = Object.prototype.toString.call(o).slice(8, -1);
    if (n2 === "Object" && o.constructor)
      n2 = o.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray6(o, minLen);
  }
  function _arrayLikeToArray6(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function propagateAttributes(attributes, sourceElement, updateElement, opt_removeMissingAttrs) {
    var attrs = arrayOrSingleItemToArray(attributes);
    for (var _iterator = _createForOfIteratorHelperLoose6(attrs), _step; !(_step = _iterator()).done; ) {
      var attr = _step.value;
      var val = sourceElement.getAttribute(attr);
      if (val !== null) {
        updateElement.setAttribute(attr, val);
      } else if (opt_removeMissingAttrs) {
        updateElement.removeAttribute(attr);
      }
    }
  }

  // build/amp-story-draggable-drawer-header-1.0.css.js
  var CSS4 = ":host{all:initial!important;color:initial!important}:host{border-radius:inherit!important}.i-amphtml-story-draggable-drawer-header{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;position:sticky!important;top:0!important;border-radius:inherit!important;z-index:1!important;--i-amphtml-draggable-drawer-background-color:#fff!important;--i-amphtml-draggable-drawer-text-color:#202125!important;--i-amphtml-draggable-drawer-handle-color:rgba(0,0,0,.2)!important;--i-amphtml-draggable-drawer-header-font-family:\"Roboto\",sans-serif!important;--i-amphtml-draggable-drawer-header-font-size:18px!important;--i-amphtml-draggable-drawer-header-title-height:44px!important;background:var(--i-amphtml-draggable-drawer-background-color)!important}.i-amphtml-story-draggable-drawer-header.i-amphtml-story-page-attachment-with-form{padding-bottom:40px!important}:not([desktop]).i-amphtml-story-draggable-drawer-header:before{content:\"\"!important;position:absolute!important;top:8px!important;width:40px!important;height:3px!important;background-color:var(--i-amphtml-draggable-drawer-handle-color)!important;border-radius:3px!important}[theme=dark].i-amphtml-story-draggable-drawer-header{--i-amphtml-draggable-drawer-background-color:#202125!important;--i-amphtml-draggable-drawer-text-color:#fff!important;--i-amphtml-draggable-drawer-handle-color:hsla(0,0%,100%,0.2)!important}:not([desktop]).i-amphtml-story-draggable-drawer-header{height:20px!important}.i-amphtml-story-page-attachment-close-button{display:block!important;padding:15px!important;width:14px!important;height:14px!important;background-origin:content-box!important;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(0, 0, 0, .4)' viewBox='0 0 14 14'%3E%3Cpath d='M13.3 2.1A1 1 0 1 0 11.9.7L7 5.6 2.1.7A1 1 0 1 0 .7 2.1L5.6 7 .7 11.9a1 1 0 1 0 1.4 1.4L7 8.4l4.9 4.9a1 1 0 1 0 1.4-1.4L8.4 7l4.9-4.9z'/%3E%3C/svg%3E\")!important;background-repeat:no-repeat!important;cursor:pointer!important;margin-inline-start:auto!important;box-sizing:content-box!important;border:none!important;background-color:transparent!important}[theme=dark] .i-amphtml-story-page-attachment-close-button{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(255, 255, 255, .4)' viewBox='0 0 14 14'%3E%3Cpath d='M13.3 2.1A1 1 0 1 0 11.9.7L7 5.6 2.1.7A1 1 0 1 0 .7 2.1L5.6 7 .7 11.9a1 1 0 1 0 1.4 1.4L7 8.4l4.9 4.9a1 1 0 1 0 1.4-1.4L8.4 7l4.9-4.9z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-page-attachment-domain-label{background:var(--i-amphtml-draggable-drawer-background-color)!important;color:var(--i-amphtml-draggable-drawer-text-color)!important;display:block!important;font-family:var(--i-amphtml-draggable-drawer-header-font-family)!important;font-size:calc(var(--i-amphtml-draggable-drawer-header-font-size) - 3px)!important;font-weight:300!important;overflow:hidden!important;position:absolute!important;text-align:center!important;text-overflow:ellipsis!important;top:35px!important;white-space:nowrap!important;width:calc(100% - 112px)!important}.i-amphtml-story-draggable-drawer-header .i-amphtml-story-draggable-drawer-header-title-and-close{opacity:1!important;height:var(--i-amphtml-draggable-drawer-header-title-height)!important;width:100%!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important;background:var(--i-amphtml-draggable-drawer-background-color)!important;border-radius:inherit!important}:not([desktop]).i-amphtml-story-draggable-drawer-header .i-amphtml-story-draggable-drawer-header-title-and-close{position:absolute!important;opacity:0!important;transition:opacity .3s,visibility .3s!important;visibility:hidden!important}:not([desktop]).i-amphtml-story-draggable-drawer-header.i-amphtml-story-draggable-drawer-header-stuck .i-amphtml-story-draggable-drawer-header-title-and-close{opacity:1!important;visibility:visible!important}.i-amphtml-story-page-attachment-title{position:absolute!important;font-family:var(--i-amphtml-draggable-drawer-header-font-family)!important;width:calc(100% - 80px)!important;color:var(--i-amphtml-draggable-drawer-text-color)!important;font-size:var(--i-amphtml-draggable-drawer-header-font-size)!important;font-weight:500!important;line-height:40px!important;overflow:hidden!important;text-align:center!important;text-overflow:ellipsis!important;white-space:nowrap!important}.i-amphtml-story-draggable-drawer-header-attachment-remote{display:none!important}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story-draggable-drawer-header.css*/";

  // extensions/amp-story/1.0/amp-story-draggable-drawer.js
  function _inherits6(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf6(subClass, superClass);
  }
  function _setPrototypeOf6(o, p) {
    _setPrototypeOf6 = Object.setPrototypeOf || function _setPrototypeOf13(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf6(o, p);
  }
  function _createSuper6(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct6();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf6(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf6(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn6(this, result);
    };
  }
  function _possibleConstructorReturn6(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized6(self2);
  }
  function _assertThisInitialized6(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct6() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf6(o) {
    _getPrototypeOf6 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf13(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf6(o);
  }
  var TOGGLE_THRESHOLD_PX = 50;
  var DrawerState = {
    CLOSED: 0,
    DRAGGING_TO_CLOSE: 1,
    DRAGGING_TO_OPEN: 2,
    OPEN: 3
  };
  var renderDrawerElement = function renderDrawerElement2() {
    return createElement("div", {
      class: "i-amphtml-story-draggable-drawer"
    }, createElement("div", {
      class: "i-amphtml-story-draggable-drawer-container"
    }, createElement("div", {
      class: "i-amphtml-story-draggable-drawer-content"
    })));
  };
  var renderHeaderElement = function renderHeaderElement2() {
    return createElement("div", {
      class: "i-amphtml-story-draggable-drawer-header"
    });
  };
  var DraggableDrawer = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits6(DraggableDrawer2, _AMP$BaseElement);
    var _super = _createSuper6(DraggableDrawer2);
    DraggableDrawer2.prerenderAllowed = function prerenderAllowed() {
      return false;
    };
    function DraggableDrawer2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.ampComponents_ = [];
      _this.containerEl = null;
      _this.contentEl = null;
      _this.dragCap_ = Infinity;
      _this.headerEl = null;
      _this.ignoreCurrentSwipeYGesture_ = false;
      _this.state = DrawerState.CLOSED;
      _this.storeService = getStoreService(_this.win);
      _this.touchEventState_ = {
        startX: 0,
        startY: 0,
        lastY: 0,
        swipingUp: null,
        isSwipeY: null
      };
      _this.touchEventUnlisteners_ = [];
      _this.openThreshold_ = Infinity;
      _this.spacerElHeight_ = null;
      return _this;
    }
    var _proto = DraggableDrawer2.prototype;
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return layout === Layout_Enum.NODISPLAY;
    };
    _proto.buildCallback = function buildCallback() {
      this.element.classList.add("amp-story-draggable-drawer-root");
      var templateEl = renderDrawerElement();
      var headerShadowRootEl = this.win.document.createElement("div");
      this.headerEl = renderHeaderElement();
      createShadowRootWithStyle(headerShadowRootEl, this.headerEl, CSS4);
      this.containerEl = dev().assertElement(templateEl.querySelector(".i-amphtml-story-draggable-drawer-container"));
      this.contentEl = dev().assertElement(this.containerEl.querySelector(".i-amphtml-story-draggable-drawer-content"));
      var spacerEl = this.win.document.createElement("button");
      spacerEl.classList.add("i-amphtml-story-draggable-drawer-spacer");
      spacerEl.classList.add("i-amphtml-story-system-reset");
      spacerEl.setAttribute("role", "button");
      var localizedCloseString = localize(this.element, LocalizedStringId_Enum.AMP_STORY_CLOSE_BUTTON_LABEL);
      spacerEl.setAttribute("aria-label", localizedCloseString);
      this.containerEl.insertBefore(spacerEl, this.contentEl);
      this.contentEl.appendChild(headerShadowRootEl);
      this.element.appendChild(templateEl);
      this.element.setAttribute("aria-hidden", true);
    };
    _proto.layoutCallback = function layoutCallback() {
      this.initializeListeners_();
      var walker = this.win.document.createTreeWalker(this.element, NodeFilter.SHOW_ELEMENT, null, false);
      while (walker.nextNode()) {
        var el = dev().assertElement(walker.currentNode);
        if (isAmpElement(el)) {
          this.ampComponents_.push(el);
          Services.ownersForDoc(this.element).setOwner(el, this.element);
        }
      }
      return resolvedPromise();
    };
    _proto.initializeListeners_ = function initializeListeners_() {
      var _this2 = this;
      this.storeService.subscribe(StateProperty.UI_STATE, function(uiState) {
        _this2.onUIStateUpdate_(uiState);
      }, true);
      var spacerEl = dev().assertElement(this.element.querySelector(".i-amphtml-story-draggable-drawer-spacer"));
      spacerEl.addEventListener("click", function() {
        _this2.close_();
      });
      var platform = Services.platformFor(this.win);
      if (!platform.isSafari() && !platform.isIos()) {
        new this.win.IntersectionObserver(function(e) {
          _this2.headerEl.classList.toggle("i-amphtml-story-draggable-drawer-header-stuck", !e[0].isIntersecting);
        }).observe(spacerEl);
      }
      new this.win.ResizeObserver(function(e) {
        _this2.spacerElHeight_ = e[0].contentRect.height;
      }).observe(spacerEl);
      this.element.addEventListener("transitionend", function(e) {
        if (e.propertyName === "transform" && _this2.state === DrawerState.CLOSED) {
          _this2.containerEl.scrollTop = 0;
        }
      });
    };
    _proto.onUIStateUpdate_ = function onUIStateUpdate_(uiState) {
      var isMobile = uiState === UIType.MOBILE;
      isMobile ? this.startListeningForTouchEvents_() : this.stopListeningForTouchEvents_();
      this.headerEl.toggleAttribute("desktop", !isMobile);
    };
    _proto.startListeningForTouchEvents_ = function startListeningForTouchEvents_() {
      var parentEl = this.element.parentElement;
      var targetEl;
      if (parentEl.tagName === "AMP-STORY-PAGE") {
        targetEl = dev().assertElement(parentEl);
      } else if (parentEl.tagName === "AMP-STORY-SHOPPING-ATTACHMENT") {
        targetEl = dev().assertElement(this.element.closest("amp-story-page"));
      } else {
        targetEl = dev().assertElement(this.element);
      }
      this.touchEventUnlisteners_.push(listen(targetEl, "touchstart", this.onTouchStart_.bind(this), {
        capture: true
      }));
      this.touchEventUnlisteners_.push(listen(targetEl, "touchmove", this.onTouchMove_.bind(this), {
        capture: true
      }));
      this.touchEventUnlisteners_.push(listen(targetEl, "touchend", this.onTouchEnd_.bind(this), {
        capture: true
      }));
    };
    _proto.stopListeningForTouchEvents_ = function stopListeningForTouchEvents_() {
      this.touchEventUnlisteners_.forEach(function(fn) {
        return fn();
      });
      this.touchEventUnlisteners_ = [];
    };
    _proto.getClientTouchCoordinates_ = function getClientTouchCoordinates_(event) {
      var touches = event.touches;
      if (!touches || touches.length < 1) {
        return null;
      }
      var _touches$ = touches[0], x2 = _touches$.clientX, y2 = _touches$.clientY;
      return {
        x: x2,
        y: y2
      };
    };
    _proto.onTouchStart_ = function onTouchStart_(event) {
      var coordinates = this.getClientTouchCoordinates_(event);
      if (!coordinates) {
        return;
      }
      this.touchEventState_.startX = coordinates.x;
      this.touchEventState_.startY = coordinates.y;
    };
    _proto.onTouchMove_ = function onTouchMove_(event) {
      if (this.touchEventState_.isSwipeY === false) {
        return;
      }
      var coordinates = this.getClientTouchCoordinates_(event);
      if (!coordinates) {
        return;
      }
      var x2 = coordinates.x, y2 = coordinates.y;
      this.touchEventState_.swipingUp = y2 < this.touchEventState_.lastY;
      this.touchEventState_.lastY = y2;
      if (this.state === DrawerState.CLOSED && !this.touchEventState_.swipingUp) {
        return;
      }
      if (this.shouldStopPropagation_()) {
        event.stopPropagation();
      }
      if (this.touchEventState_.isSwipeY === null) {
        this.touchEventState_.isSwipeY = Math.abs(this.touchEventState_.startY - y2) > Math.abs(this.touchEventState_.startX - x2);
        if (!this.touchEventState_.isSwipeY) {
          return;
        }
      }
      this.onSwipeY_({
        event: event,
        data: {
          swipingUp: this.touchEventState_.swipingUp,
          deltaY: y2 - this.touchEventState_.startY,
          last: false
        }
      });
    };
    _proto.shouldStopPropagation_ = function shouldStopPropagation_() {
      return this.state !== DrawerState.CLOSED || this.state === DrawerState.CLOSED && this.touchEventState_.swipingUp;
    };
    _proto.onTouchEnd_ = function onTouchEnd_(event) {
      if (this.touchEventState_.isSwipeY === true) {
        this.onSwipeY_({
          event: event,
          data: {
            swipingUp: this.touchEventState_.swipingUp,
            deltaY: this.touchEventState_.lastY - this.touchEventState_.startY,
            last: true
          }
        });
      }
      this.touchEventState_.startX = 0;
      this.touchEventState_.startY = 0;
      this.touchEventState_.lastY = 0;
      this.touchEventState_.swipingUp = null;
      this.touchEventState_.isSwipeY = null;
    };
    _proto.onSwipeY_ = function onSwipeY_(gesture) {
      var data = gesture.data;
      if (this.ignoreCurrentSwipeYGesture_) {
        this.ignoreCurrentSwipeYGesture_ = !data.last;
        return;
      }
      var deltaY = data.deltaY, swipingUp = data.swipingUp;
      if (this.state === DrawerState.OPEN) {
        var isContentSwipe = this.isDrawerContentDescendant_(dev().assertElement(gesture.event.target));
        if (isContentSwipe && deltaY < 0 || isContentSwipe && deltaY > 0 && this.containerEl.scrollTop > 0) {
          this.ignoreCurrentSwipeYGesture_ = true;
          return;
        }
      }
      gesture.event.preventDefault();
      if (data.last === true) {
        if (this.state === DrawerState.DRAGGING_TO_CLOSE) {
          !swipingUp && deltaY > TOGGLE_THRESHOLD_PX ? this.close_() : this.open();
        }
        if (this.state === DrawerState.DRAGGING_TO_OPEN) {
          swipingUp && -deltaY > TOGGLE_THRESHOLD_PX ? this.open() : this.close_();
        }
        return;
      }
      if (this.state === DrawerState.DRAGGING_TO_OPEN && swipingUp && -deltaY > this.openThreshold_) {
        this.open();
        return;
      }
      this.drag_(deltaY);
    };
    _proto.isDrawerContentDescendant_ = function isDrawerContentDescendant_(element) {
      return !!closest(element, function(el) {
        return el.classList.contains("i-amphtml-story-draggable-drawer-content");
      }, this.element);
    };
    _proto.setOpenThreshold_ = function setOpenThreshold_(openThreshold) {
      this.openThreshold_ = openThreshold;
    };
    _proto.setDragCap_ = function setDragCap_(dragCap) {
      this.dragCap_ = dragCap;
    };
    _proto.drag_ = function drag_(deltaY) {
      var _this3 = this;
      var translate2;
      switch (this.state) {
        case DrawerState.CLOSED:
        case DrawerState.DRAGGING_TO_OPEN:
          if (deltaY > 0) {
            return;
          }
          this.state = DrawerState.DRAGGING_TO_OPEN;
          var drag = Math.max(deltaY, -this.dragCap_) - this.spacerElHeight_;
          translate2 = "translate3d(0, calc(100% + " + drag + "px), 0)";
          break;
        case DrawerState.OPEN:
        case DrawerState.DRAGGING_TO_CLOSE:
          if (deltaY < 0) {
            return;
          }
          this.state = DrawerState.DRAGGING_TO_CLOSE;
          translate2 = "translate3d(0, " + deltaY + "px, 0)";
          break;
      }
      this.mutateElement(function() {
        setImportantStyles(_this3.element, {
          transform: translate2,
          transition: "none",
          visibility: "visible"
        });
      });
    };
    _proto.open = function open(shouldAnimate) {
      var _this4 = this;
      if (shouldAnimate === void 0) {
        shouldAnimate = true;
      }
      if (this.state === DrawerState.OPEN) {
        return;
      }
      this.state = DrawerState.OPEN;
      this.storeService.dispatch(Action.TOGGLE_PAUSED, true);
      this.mutateElement(function() {
        _this4.element.setAttribute("aria-hidden", false);
        resetStyles(_this4.element, ["transform", "transition", "visibility"]);
        if (!shouldAnimate) {
          setImportantStyles(_this4.element, {
            transition: "initial"
          });
          _this4.mutateElement(function() {
            return resetStyles(_this4.element, ["transition"]);
          });
        }
        _this4.element.classList.add("i-amphtml-story-draggable-drawer-open");
        toggle(dev().assertElement(_this4.containerEl), true);
      }).then(function() {
        var owners = Services.ownersForDoc(_this4.element);
        owners.scheduleLayout(_this4.element, _this4.ampComponents_);
        owners.scheduleResume(_this4.element, _this4.ampComponents_);
      });
    };
    _proto.close_ = function close_() {
      this.closeInternal_();
    };
    _proto.closeInternal_ = function closeInternal_(shouldAnimate) {
      var _this5 = this;
      if (shouldAnimate === void 0) {
        shouldAnimate = true;
      }
      if (this.state === DrawerState.CLOSED) {
        return;
      }
      this.state = DrawerState.CLOSED;
      this.storeService.dispatch(Action.TOGGLE_PAUSED, false);
      this.handleSoftKeyboardOnDrawerClose_();
      this.mutateElement(function() {
        _this5.element.setAttribute("aria-hidden", true);
        resetStyles(_this5.element, ["transform", "transition"]);
        if (!shouldAnimate) {
          setImportantStyles(_this5.element, {
            transition: "initial"
          });
          _this5.mutateElement(function() {
            return resetStyles(_this5.element, ["transition"]);
          });
        }
        _this5.element.classList.remove("i-amphtml-story-draggable-drawer-open");
      }).then(function() {
        var owners = Services.ownersForDoc(_this5.element);
        owners.schedulePause(_this5.element, _this5.ampComponents_);
      });
    };
    _proto.handleSoftKeyboardOnDrawerClose_ = function handleSoftKeyboardOnDrawerClose_() {
      var _this$win$document$ac;
      (_this$win$document$ac = this.win.document.activeElement) == null ? void 0 : _this$win$document$ac.blur();
      this.resetStoryScrollPosition_();
    };
    _proto.resetStoryScrollPosition_ = function resetStoryScrollPosition_() {
      var storyEl = closest(this.element, function(el) {
        return el.tagName === "AMP-STORY-PAGE";
      });
      storyEl.scrollTo(0, 0);
    };
    return DraggableDrawer2;
  }(AMP.BaseElement);

  // src/core/window/history.js
  function getHistoryState(history) {
    try {
      return history.state;
    } catch (e) {
      return null;
    }
  }

  // extensions/amp-story/1.0/history.js
  function _extends6() {
    _extends6 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends6.apply(this, arguments);
  }
  var EXPIRATION_DURATION_MILLIS = 10 * 60 * 1e3;
  var CREATION_TIME = "time";
  var STATE = "state";
  var LOCAL_STORAGE_KEY2 = "amp-story-state";
  var HistoryState = {
    ATTACHMENT_PAGE_ID: "ampStoryAttachmentPageId",
    NAVIGATION_PATH: "ampStoryNavigationPath"
  };
  function setHistoryState(win, stateName, value) {
    var _extends22;
    var history = win.history;
    var state = getHistoryState(history) || {};
    var newHistory = _extends6({}, state, (_extends22 = {}, _extends22[stateName] = value, _extends22));
    history.replaceState(newHistory, "");
    setLocalStorageState(win, newHistory);
  }
  function getHistoryState2(win, stateName) {
    var history = win.history;
    var state = getHistoryState(history);
    if (!state || !state[stateName]) {
      state = getLocalStorageState(win);
    }
    if (state) {
      return state[stateName] || null;
    }
    return null;
  }
  function getLocalStorageState(win) {
    var hash = win.location.hash;
    if (hash.indexOf("page=") != -1 || hash.indexOf("ignoreLocalStorageHistory") != -1) {
      return void 0;
    }
    var container = getLocalStorageStateContainer(win);
    var holder = container && container[getDocumentKey(win)];
    return holder && holder[STATE];
  }
  function setLocalStorageState(win, state) {
    var _container$getDocumen;
    var container = getLocalStorageStateContainer(win);
    container[getDocumentKey(win)] = (_container$getDocumen = {}, _container$getDocumen[STATE] = state, _container$getDocumen[CREATION_TIME] = Date.now(), _container$getDocumen);
    writeLocalStorage(win, container);
  }
  function getLocalStorageStateContainer(win) {
    var container = readLocalStorage(win);
    if (!container) {
      return dict();
    }
    var now = Date.now();
    var expired = false;
    Object.keys(container).forEach(function(href) {
      var item = container[href];
      if (now > item[CREATION_TIME] + EXPIRATION_DURATION_MILLIS) {
        delete container[href];
        expired = true;
      }
    });
    if (expired) {
      writeLocalStorage(win, container);
    }
    return container;
  }
  function getDocumentKey(win) {
    return win.location.href.replace(/\#.*/, "");
  }
  function readLocalStorage(win) {
    try {
      return parseJson(win.localStorage.getItem(LOCAL_STORAGE_KEY2));
    } catch (e) {
      return null;
    }
  }
  function writeLocalStorage(win, container) {
    try {
      win.localStorage.setItem(LOCAL_STORAGE_KEY2, JSON.stringify(container));
    } catch (e) {
    }
  }

  // extensions/amp-story/1.0/amp-story-form.js
  var FormResponseAttribute = {
    SUBMITTING: "submitting",
    SUCCESS: "submit-success",
    ERROR: "submit-error"
  };
  var AttributeElementSelector = {
    SUBMITTING: "[" + escapeCssSelectorIdent(FormResponseAttribute.SUBMITTING) + "]",
    SUCCESS: "[" + escapeCssSelectorIdent(FormResponseAttribute.SUCCESS) + "]",
    ERROR: "[" + escapeCssSelectorIdent(FormResponseAttribute.ERROR) + "]"
  };
  function allowlistFormActions(win) {
    var storeService = getStoreService(win);
    storeService.dispatch(Action.ADD_TO_ACTIONS_ALLOWLIST, [{
      tagOrTarget: "FORM",
      method: "clear"
    }, {
      tagOrTarget: "FORM",
      method: "submit"
    }]);
  }
  function setupResponseAttributeElements(win, formEl) {
    var submittingEl = scopedQuerySelector(formEl, AttributeElementSelector.SUBMITTING);
    var successEl = scopedQuerySelector(formEl, AttributeElementSelector.SUCCESS);
    var errorEl = scopedQuerySelector(formEl, AttributeElementSelector.ERROR);
    if (!submittingEl) {
      submittingEl = createFormSubmittingEl_(formEl);
      formEl.appendChild(submittingEl);
    }
    if (!successEl) {
      successEl = createFormResultEl_(win, formEl, true);
      formEl.appendChild(successEl);
    }
    if (!errorEl) {
      errorEl = createFormResultEl_(win, formEl, false);
      formEl.appendChild(errorEl);
    }
  }
  function getResponseAttributeElements(formEl) {
    var selector = "\n    " + AttributeElementSelector.SUBMITTING + ",\n    " + AttributeElementSelector.SUCCESS + ",\n    " + AttributeElementSelector.ERROR;
    return Array.from(scopedQuerySelectorAll(formEl, selector));
  }
  function createFormSubmittingEl_(formEl) {
    var submittingEl = createResponseAttributeEl_(formEl, FormResponseAttribute.SUBMITTING);
    var loadingSpinner = new LoadingSpinner();
    submittingEl.firstElementChild.appendChild(loadingSpinner.build());
    loadingSpinner.toggle(true);
    return submittingEl;
  }
  function createFormResultEl_(win, formEl, isSuccess) {
    var resultEl = createResponseAttributeEl_(formEl, isSuccess ? FormResponseAttribute.SUCCESS : FormResponseAttribute.ERROR);
    var iconEl = win.document.createElement("div");
    iconEl.classList.add("i-amphtml-story-page-attachment-form-submission-status-icon");
    resultEl.firstElementChild.appendChild(iconEl);
    var textEl = win.document.createElement("div");
    textEl.textContent = localize(win.document, isSuccess ? LocalizedStringId_Enum.AMP_STORY_FORM_SUBMIT_SUCCESS : LocalizedStringId_Enum.AMP_STORY_FORM_SUBMIT_ERROR);
    resultEl.firstElementChild.appendChild(textEl);
    return resultEl;
  }
  function createResponseAttributeEl_(formEl, responseAttribute) {
    var statusEl = createElement("div", null, createElement("div", {
      class: "i-amphtml-story-page-attachment-form-submission-status"
    }));
    statusEl.setAttribute(responseAttribute, "");
    return statusEl;
  }

  // extensions/amp-story/1.0/amp-story-page-attachment.js
  function _extends7() {
    _extends7 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends7.apply(this, arguments);
  }
  function _inherits7(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf7(subClass, superClass);
  }
  function _setPrototypeOf7(o, p) {
    _setPrototypeOf7 = Object.setPrototypeOf || function _setPrototypeOf13(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf7(o, p);
  }
  function _createSuper7(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct7();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf7(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf7(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn7(this, result);
    };
  }
  function _possibleConstructorReturn7(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized7(self2);
  }
  function _assertThisInitialized7(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct7() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf7(o) {
    _getPrototypeOf7 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf13(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf7(o);
  }
  var OPEN_THRESHOLD_PX = 150;
  var DRAG_CAP_PX = 56;
  var POST_TAP_ANIMATION_DURATION = 500;
  var AttachmentTheme = {
    LIGHT: "light",
    DARK: "dark",
    CUSTOM: "custom"
  };
  var AttachmentType = {
    INLINE: 0,
    OUTLINK: 1
  };
  var AmpStoryPageAttachment = /* @__PURE__ */ function(_DraggableDrawer) {
    _inherits7(AmpStoryPageAttachment2, _DraggableDrawer);
    var _super = _createSuper7(AmpStoryPageAttachment2);
    function AmpStoryPageAttachment2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.analyticsService_ = getAnalyticsService(_this.win, _this.element);
      _this.historyService_ = Services.historyForDoc(_this.element);
      _this.type_ = null;
      return _this;
    }
    var _proto = AmpStoryPageAttachment2.prototype;
    _proto.buildCallback = function buildCallback() {
      var _this2 = this;
      _DraggableDrawer.prototype.buildCallback.call(this);
      this.maybeSetDarkThemeForElement_(this.headerEl);
      this.maybeSetDarkThemeForElement_(this.element);
      var isOutlink = this.element.tagName === "AMP-STORY-PAGE-OUTLINK" || this.element.hasAttribute("href");
      this.type_ = isOutlink ? AttachmentType.OUTLINK : AttachmentType.INLINE;
      if (this.type_ === AttachmentType.INLINE) {
        this.buildInline_();
      }
      this.win.addEventListener("pageshow", function(event) {
        if (event.persisted) {
          _this2.closeInternal_(false);
        }
      });
      toggle(this.element, true);
      this.element.setAttribute("aria-live", "assertive");
    };
    _proto.layoutCallback = function layoutCallback() {
      _DraggableDrawer.prototype.layoutCallback.call(this);
      if (this.type_ === AttachmentType.OUTLINK) {
        this.buildOutlink_();
      }
    };
    _proto.buildInline_ = function buildInline_() {
      var _this3 = this;
      var closeButtonEl = createElement("button", {
        class: "i-amphtml-story-page-attachment-close-button",
        "aria-label": localize(this.element, LocalizedStringId_Enum.AMP_STORY_CLOSE_BUTTON_LABEL),
        role: "button"
      });
      var titleAndCloseWrapperEl = this.headerEl.appendChild(createElement("div", {
        class: "i-amphtml-story-draggable-drawer-header-title-and-close"
      }));
      titleAndCloseWrapperEl.appendChild(closeButtonEl);
      var titleText = this.element.getAttribute("title") || this.element.getAttribute("data-title");
      if (titleText) {
        var titleEl = createElement("span", {
          class: "i-amphtml-story-page-attachment-title"
        });
        titleEl.textContent = titleText;
        titleAndCloseWrapperEl.appendChild(titleEl);
      }
      var forms = this.element.querySelectorAll("form");
      if (forms.length > 0) {
        allowlistFormActions(this.win);
        forms.forEach(function(form) {
          setupResponseAttributeElements(_this3.win, form);
          getResponseAttributeElements(form).forEach(function(el) {
            new _this3.win.ResizeObserver(function(e) {
              if (_this3.state === DrawerState.OPEN && e[0].contentRect.height > 0) {
                el.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest"
                });
              }
            }).observe(el);
          });
        });
        this.headerEl.append(this.createDomainLabelElement_());
        this.headerEl.classList.add("i-amphtml-story-page-attachment-with-form");
      }
      var templateEl = this.element.querySelector(".i-amphtml-story-draggable-drawer");
      while (this.element.firstChild && this.element.firstChild !== templateEl) {
        this.contentEl.appendChild(this.element.firstChild);
      }
      toggle(dev().assertElement(this.containerEl), true);
    };
    _proto.buildOutlink_ = function buildOutlink_() {
      this.setDragCap_(DRAG_CAP_PX);
      this.setOpenThreshold_(OPEN_THRESHOLD_PX);
      this.headerEl.classList.add("i-amphtml-story-draggable-drawer-header-attachment-remote");
      this.element.classList.add("i-amphtml-story-page-attachment-remote");
      var link = createElement("a", {
        class: "i-amphtml-story-page-attachment-remote-content",
        target: "_blank"
      }, createElement("span", {
        class: "i-amphtml-story-page-attachment-remote-title"
      }, createElement("span", {
        ref: "openStringEl"
      }), createElement("span", {
        ref: "urlStringEl"
      })), createElement("svg", {
        class: "i-amphtml-story-page-attachment-remote-icon",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48"
      }, createElement("path", {
        d: "M38 38H10V10h14V6H10a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V24h-4v14zM28 6v4h7.2L15.5 29.7l2.8 2.8L38 12.8V20h4V6H28z",
        xmlns: "http://www.w3.org/2000/svg"
      })));
      var isPageOutlink = this.element.tagName === "AMP-STORY-PAGE-OUTLINK";
      if (isPageOutlink) {
        this.element.querySelector("a").setAttribute("target", "_top");
      }
      var hrefAttr = isPageOutlink ? this.element.querySelector("a").getAttribute("href") : this.element.getAttribute("href");
      link.setAttribute("href", hrefAttr);
      var _htmlRefs = htmlRefs(link), openStringEl = _htmlRefs.openStringEl, urlStringEl = _htmlRefs.urlStringEl;
      link.addEventListener("click", function(event) {
        return event.preventDefault();
      });
      var openImgAttr = this.element.getAttribute("cta-image");
      if (openImgAttr && openImgAttr !== "none") {
        var ctaImgEl = this.win.document.createElement("div");
        ctaImgEl.classList.add("i-amphtml-story-page-attachment-remote-img");
        setImportantStyles(ctaImgEl, {
          "background-image": "url(" + openImgAttr + ")"
        });
        link.prepend(ctaImgEl);
      } else if (!openImgAttr) {
        var linkImage = renderOutlinkLinkIconElement();
        link.prepend(linkImage);
      }
      var localizedOpenString = localize(this.element, LocalizedStringId_Enum.AMP_STORY_OPEN_OUTLINK_TEXT);
      openStringEl.textContent = localizedOpenString;
      urlStringEl.textContent = hrefAttr;
      this.contentEl.appendChild(link);
    };
    _proto.initializeListeners_ = function initializeListeners_() {
      var _this4 = this;
      _DraggableDrawer.prototype.initializeListeners_.call(this);
      var closeButtonEl = this.headerEl.querySelector(".i-amphtml-story-page-attachment-close-button");
      if (closeButtonEl) {
        closeButtonEl.addEventListener("click", function() {
          return _this4.close_();
        }, true);
      }
      this.contentEl.addEventListener("click", function(event) {
        var target = event.target;
        if (target.tagName.toLowerCase() === "a") {
          target.setAttribute("target", "_blank");
        }
      }, true);
      this.element.addEventListener("click", function(event) {
        if (event.target.tagName.toLowerCase() === "amp-story-page-attachment") {
          _this4.close_();
        }
      }, true);
      if (this.type_ === AttachmentType.OUTLINK) {
        var ampdoc2 = this.getAmpDoc();
        ampdoc2.onVisibilityChanged(function() {
          if (ampdoc2.isVisible() && _this4.state === DrawerState.OPEN) {
            _this4.closeInternal_(false);
          }
        });
      }
    };
    _proto.open = function open(shouldAnimate) {
      var _this5 = this;
      if (shouldAnimate === void 0) {
        shouldAnimate = true;
      }
      if (this.state === DrawerState.OPEN) {
        return;
      }
      _DraggableDrawer.prototype.open.call(this, shouldAnimate);
      this.storeService.dispatch(Action.TOGGLE_PAGE_ATTACHMENT_STATE, true);
      this.storeService.dispatch(Action.TOGGLE_SYSTEM_UI_IS_VISIBLE, false);
      this.toggleBackgroundOverlay_(true);
      if (this.type_ !== AttachmentType.OUTLINK) {
        var _extends22;
        var currentHistoryState = getHistoryState(this.win.history);
        var historyState = _extends7({}, currentHistoryState, (_extends22 = {}, _extends22[HistoryState.ATTACHMENT_PAGE_ID] = this.storeService.get(StateProperty.CURRENT_PAGE_ID), _extends22));
        this.historyService_.push(function() {
          return _this5.closeInternal_();
        }, historyState);
      }
      this.analyticsService_.triggerEvent(StoryAnalyticsEvent.OPEN, this.element);
      this.analyticsService_.triggerEvent(StoryAnalyticsEvent.PAGE_ATTACHMENT_ENTER);
      if (this.type_ === AttachmentType.OUTLINK) {
        this.openRemote_();
      }
    };
    _proto.openRemote_ = function openRemote_() {
      var _this6 = this;
      var programaticallyClickOnTarget = function programaticallyClickOnTarget2() {
        var _this6$element$parent, _this6$element$parent2;
        var pageOutlinkChild = (_this6$element$parent = _this6.element.parentElement.querySelector("amp-story-page-outlink")) == null ? void 0 : _this6$element$parent.querySelector("a");
        var pageAttachmentChild = (_this6$element$parent2 = _this6.element.parentElement) == null ? void 0 : _this6$element$parent2.querySelector(".i-amphtml-story-page-open-attachment-host").shadowRoot.querySelector("a.i-amphtml-story-page-open-attachment");
        if (pageOutlinkChild) {
          pageOutlinkChild.click();
        } else if (pageAttachmentChild) {
          triggerClickFromLightDom(pageAttachmentChild, _this6.element);
        }
      };
      var isMobileUI = this.storeService.get(StateProperty.UI_STATE) === UIType.MOBILE;
      if (!isMobileUI) {
        programaticallyClickOnTarget();
      } else {
        Services.timerFor(this.win).delay(function() {
          programaticallyClickOnTarget();
        }, POST_TAP_ANIMATION_DURATION);
      }
    };
    _proto.close_ = function close_() {
      switch (this.state) {
        case DrawerState.OPEN:
        case DrawerState.DRAGGING_TO_CLOSE:
          this.historyService_.goBack();
          break;
        case DrawerState.DRAGGING_TO_OPEN:
          this.closeInternal_();
          break;
      }
    };
    _proto.closeInternal_ = function closeInternal_(shouldAnimate) {
      if (shouldAnimate === void 0) {
        shouldAnimate = true;
      }
      if (this.state === DrawerState.CLOSED) {
        return;
      }
      _DraggableDrawer.prototype.closeInternal_.call(this, shouldAnimate);
      this.toggleBackgroundOverlay_(false);
      this.storeService.dispatch(Action.TOGGLE_PAGE_ATTACHMENT_STATE, false);
      this.storeService.dispatch(Action.TOGGLE_SYSTEM_UI_IS_VISIBLE, true);
      var storyEl = closest(this.element, function(el) {
        return el.tagName === "AMP-STORY";
      });
      var animationEl = storyEl.querySelector(".i-amphtml-story-page-attachment-expand");
      if (animationEl) {
        this.mutateElement(function() {
          removeElement(dev().assertElement(animationEl));
        });
      }
      setHistoryState(this.win, HistoryState.ATTACHMENT_PAGE_ID, null);
      this.analyticsService_.triggerEvent(StoryAnalyticsEvent.CLOSE, this.element);
      this.analyticsService_.triggerEvent(StoryAnalyticsEvent.PAGE_ATTACHMENT_EXIT);
    };
    _proto.toggleBackgroundOverlay_ = function toggleBackgroundOverlay_(isActive) {
      var activePageEl = closest(this.element, function(el) {
        return el.tagName === "AMP-STORY-PAGE";
      });
      this.mutateElement(function() {
        activePageEl.classList.toggle("i-amphtml-story-page-attachment-active", isActive);
      });
    };
    _proto.maybeSetDarkThemeForElement_ = function maybeSetDarkThemeForElement_(element) {
      var _this$element$getAttr;
      var theme = (_this$element$getAttr = this.element.getAttribute("theme")) == null ? void 0 : _this$element$getAttr.toLowerCase();
      if (theme && AttachmentTheme.DARK === theme) {
        element.setAttribute("theme", theme);
      }
    };
    _proto.createDomainLabelElement_ = function createDomainLabelElement_() {
      var domainLabelEl = this.win.document.createElement("div");
      domainLabelEl.classList.add("i-amphtml-story-page-attachment-domain-label");
      domainLabelEl.textContent = this.getPublisherOrigin_();
      return domainLabelEl;
    };
    _proto.getPublisherOrigin_ = function getPublisherOrigin_() {
      var publisherOrigin = getSourceOrigin(this.getAmpDoc().getUrl());
      return publisherOrigin.replace(/^http(s)?:\/\/(www.)?/, "");
    };
    return AmpStoryPageAttachment2;
  }(DraggableDrawer);

  // extensions/amp-story/1.0/amp-story-open-page-attachment.js
  var CtaAccentElement = {
    TEXT: "text",
    BACKGROUND: "background"
  };
  var renderInlineElement = function renderInlineElement2() {
    return createElement("a", {
      class: "i-amphtml-story-page-open-attachment i-amphtml-story-system-reset",
      role: "button"
    }, createElement("div", {
      class: "i-amphtml-story-inline-page-attachment-chip",
      ref: "chipEl"
    }, createElement("div", {
      class: "i-amphtml-story-inline-page-attachment-arrow"
    })));
  };
  var renderOutlinkElement = function renderOutlinkElement2() {
    return createElement("a", {
      class: "i-amphtml-story-page-open-attachment",
      role: "button",
      target: "_top"
    }, createElement("svg", {
      class: "i-amphtml-story-outlink-page-attachment-arrow",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 8",
      width: "20px",
      height: "8px"
    }, createElement("path", {
      d: "m18 7.7-.7-.2-7.3-4-7.3 4c-.7.4-1.6.2-2-.6-.4-.7-.1-1.6.6-2l8-4.4a2 2 0 0 1 1.5 0l8 4.4c.7.4 1 1.3.6 2-.4.5-.9.8-1.4.8z",
      xmlns: "http://www.w3.org/2000/svg"
    })), createElement("div", {
      class: "i-amphtml-story-outlink-page-attachment-outlink-chip",
      ref: "chipEl"
    }, createElement("span", {
      class: "i-amphtml-story-page-attachment-label",
      ref: "ctaLabelEl"
    })));
  };
  var renderOutlinkLinkIconElement = function renderOutlinkLinkIconElement2() {
    return createElement("svg", {
      class: "i-amphtml-story-page-open-attachment-link-icon",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, createElement("path", {
      "fill-opacity": ".1",
      d: "M12 0c6.6 0 12 5.4 12 12s-5.4 12-12 12S0 18.6 0 12 5.4 0 12 0z",
      xmlns: "http://www.w3.org/2000/svg"
    }), createElement("path", {
      d: "m13.8 14.6.2.5-.2.5-1.5 1.4c-.7.7-1.7 1.1-2.7 1.1A4 4 0 0 1 6.9 17a3.9 3.9 0 0 1-1.1-2.7 4 4 0 0 1 1.1-2.7l1.5-1.5.5-.1.5.2.2.5-.2.5-1.5 1.5c-.5.5-.7 1.1-.7 1.7 0 .6.3 1.3.7 1.7.5.5 1.1.7 1.7.7s1.3-.3 1.7-.7l1.5-1.5c.3-.3.7-.3 1 0zM17 7a3.9 3.9 0 0 0-2.7-1.1A4 4 0 0 0 11.6 7l-1.5 1.5-.1.4.2.5.5.2.5-.2 1.5-1.5c.5-.5 1.1-.7 1.7-.7.6 0 1.3.3 1.7.7.5.5.7 1.1.7 1.7 0 .6-.3 1.3-.7 1.7l-1.5 1.5-.2.5.2.5.5.2.5-.2 1.5-1.5c.7-.7 1.1-1.7 1.1-2.7-.1-1-.5-1.9-1.2-2.6zm-7.9 7.2.2.5.5.2.5-.2 4.5-4.5.2-.5-.2-.5c-.3-.2-.8-.2-1 .1l-4.5 4.5-.2.4z",
      xmlns: "http://www.w3.org/2000/svg"
    }));
  };
  var renderPageAttachmentUI = function renderPageAttachmentUI2(pageEl, attachmentEl) {
    var isOutlink = attachmentEl.tagName === "AMP-STORY-PAGE-OUTLINK" || attachmentEl.getAttribute("href");
    if (isOutlink) {
      return renderOutlinkUI(pageEl, attachmentEl);
    } else {
      return renderInlineUi(pageEl, attachmentEl);
    }
  };
  var renderOutlinkUI = function renderOutlinkUI2(pageEl, attachmentEl) {
    var _pageEl$querySelector;
    var openAttachmentEl = renderOutlinkElement();
    var anchorChild = (_pageEl$querySelector = pageEl.querySelector("amp-story-page-outlink")) == null ? void 0 : _pageEl$querySelector.querySelector("a");
    var attachmentHref = (anchorChild == null ? void 0 : anchorChild.getAttribute("href")) || attachmentEl.getAttribute("href");
    if (attachmentHref) {
      openAttachmentEl.setAttribute("href", attachmentHref);
    }
    var attachmentTitle = (anchorChild == null ? void 0 : anchorChild.getAttribute("title")) || attachmentEl.getAttribute("data-title");
    if (attachmentTitle) {
      openAttachmentEl.setAttribute("title", attachmentTitle);
    }
    var _htmlRefs = htmlRefs(openAttachmentEl), chipEl = _htmlRefs.chipEl, ctaLabelEl = _htmlRefs.ctaLabelEl;
    var themeAttribute = attachmentEl.getAttribute("theme");
    if (themeAttribute) {
      themeAttribute = themeAttribute.toLowerCase();
    }
    openAttachmentEl.setAttribute("theme", themeAttribute);
    if (themeAttribute === AttachmentTheme.CUSTOM) {
      setCustomThemeStyles(attachmentEl, openAttachmentEl);
    }
    var openLabelAttr = (anchorChild == null ? void 0 : anchorChild.textContent) || attachmentEl.getAttribute("cta-text") || attachmentEl.getAttribute("data-cta-text");
    var openLabel = openLabelAttr ? openLabelAttr.trim() : localize(pageEl, LocalizedStringId_Enum.AMP_STORY_PAGE_ATTACHMENT_OPEN_LABEL);
    ctaLabelEl.textContent = openLabel;
    openAttachmentEl.setAttribute("aria-label", openLabel);
    var openImgAttr = attachmentEl.getAttribute("cta-image");
    if (openImgAttr && openImgAttr !== "none") {
      var ctaImgEl = createElement("div", {
        class: "i-amphtml-story-outlink-page-attachment-img"
      });
      setImportantStyles(ctaImgEl, {
        "background-image": "url(" + openImgAttr + ")"
      });
      chipEl.prepend(ctaImgEl);
    } else if (!openImgAttr) {
      var linkImage = renderOutlinkLinkIconElement();
      chipEl.prepend(linkImage);
    }
    return openAttachmentEl;
  };
  var renderInlineUi = function renderInlineUi2(pageEl, attachmentEl) {
    var openAttachmentEl = renderInlineElement();
    var theme = attachmentEl.getAttribute("theme");
    if (theme && AttachmentTheme.DARK === theme.toLowerCase()) {
      openAttachmentEl.setAttribute("theme", AttachmentTheme.DARK);
    }
    var openLabelAttr = attachmentEl.getAttribute("cta-text") || attachmentEl.getAttribute("data-cta-text");
    var openLabel = openLabelAttr && openLabelAttr.trim() || localize(pageEl, LocalizedStringId_Enum.AMP_STORY_PAGE_ATTACHMENT_OPEN_LABEL);
    openAttachmentEl.setAttribute("aria-label", openLabel);
    if (openLabel !== "none") {
      var textEl = createElement("span", {
        class: "i-amphtml-story-page-attachment-label"
      });
      textEl.textContent = openLabel;
      openAttachmentEl.appendChild(textEl);
    }
    var _htmlRefs2 = htmlRefs(openAttachmentEl), chipEl = _htmlRefs2.chipEl;
    var makeImgElWithBG = function makeImgElWithBG2(openImgAttr3) {
      var ctaImgEl = createElement("div", {
        class: "i-amphtml-story-inline-page-attachment-img"
      });
      setImportantStyles(ctaImgEl, {
        "background-image": "url(" + openImgAttr3 + ")"
      });
      return ctaImgEl;
    };
    var openImgAttr2 = attachmentEl.getAttribute("cta-image-2");
    if (openImgAttr2) {
      var src = maybeMakeProxyUrl(openImgAttr2, pageEl.getAmpDoc());
      chipEl.prepend(makeImgElWithBG(src));
    }
    var openImgAttr = attachmentEl.getAttribute("cta-image");
    if (openImgAttr) {
      var _src = maybeMakeProxyUrl(openImgAttr, pageEl.getAmpDoc());
      chipEl.prepend(makeImgElWithBG(_src));
    }
    return openAttachmentEl;
  };
  var setCustomThemeStyles = function setCustomThemeStyles2(attachmentEl, openAttachmentEl) {
    if (!attachmentEl.hasAttribute("cta-accent-color")) {
      dev().warn("AMP-STORY-PAGE-OUTLINK", "No cta-accent-color attribute found.");
    }
    var accentColor = attachmentEl.getAttribute("cta-accent-color") || "#000000";
    var contrastColor = null;
    setImportantStyles(attachmentEl, {
      "background-color": accentColor
    });
    var win = getWin(attachmentEl);
    var styles = computedStyle(win, attachmentEl);
    var rgb = getRGBFromCssColorValue(styles["background-color"]);
    contrastColor = getTextColorForRGB(rgb);
    setImportantStyles(attachmentEl, {
      "background-color": ""
    });
    if (attachmentEl.getAttribute("cta-accent-element") === CtaAccentElement.BACKGROUND) {
      setImportantStyles(openAttachmentEl, {
        "--i-amphtml-outlink-cta-background-color": accentColor,
        "--i-amphtml-outlink-cta-text-color": contrastColor
      });
      setImportantStyles(attachmentEl, {
        "--i-amphtml-outlink-cta-background-color": accentColor,
        "--i-amphtml-outlink-cta-text-color": contrastColor
      });
    } else {
      setImportantStyles(openAttachmentEl, {
        "--i-amphtml-outlink-cta-background-color": contrastColor,
        "--i-amphtml-outlink-cta-text-color": accentColor
      });
      setImportantStyles(attachmentEl, {
        "--i-amphtml-outlink-cta-background-color": contrastColor,
        "--i-amphtml-outlink-cta-text-color": accentColor
      });
    }
  };

  // extensions/amp-story/1.0/semantic-render.js
  function renderPageDescription(page, videos) {
    var descriptionElId = "i-amphtml-story-" + page.element.id + "-description";
    var descriptionEl = createElement("div", {
      class: "i-amphtml-story-page-description",
      id: descriptionElId
    });
    var append = function append2(el) {
      page.mutateElement(function() {
        descriptionEl.appendChild(el);
        if (descriptionEl.parentNode) {
          return;
        }
        page.element.parentElement.insertBefore(descriptionEl, page.element.nextElementSibling);
        if (!page.element.getAttribute("aria-labelledby")) {
          page.element.setAttribute("aria-labelledby", descriptionElId);
        }
      });
    };
    var addTagToDescriptionEl = function addTagToDescriptionEl2(tagName, text) {
      if (!text) {
        return;
      }
      var el = page.win.document.createElement(tagName);
      el.textContent = text;
      append(el);
    };
    addTagToDescriptionEl("h2", page.element.getAttribute("title"));
    videos.forEach(function(videoEl) {
      addTagToDescriptionEl("p", videoEl.getAttribute("alt"));
      addTagToDescriptionEl("p", videoEl.getAttribute("title"));
      addTagToDescriptionEl("p", videoEl.getAttribute("aria-label"));
      fetchCaptions(page, videoEl).then(function(text) {
        addTagToDescriptionEl("p", text);
      });
    });
  }
  function fetchCaptions(page, videoEl) {
    var track = videoEl.querySelector("track[default]") || videoEl.querySelector("track");
    if (!track || !track.src) {
      return resolvedPromise();
    }
    return Services.xhrFor(page.win).fetchText(track.src, {
      mode: "cors"
    }).then(function(response) {
      if (!response.ok) {
        return;
      }
      return response.text().then(extractTextContent);
    });
  }
  function extractTextContent(text) {
    text = text.trim();
    if (text.startsWith("WEBVTT")) {
      return extractTextContentWebVtt(text);
    }
    if (includes(text, "http://www.w3.org/ns/ttml")) {
      return extractTextContentTtml(text);
    }
    return "";
  }
  function extractTextContentTtml(text) {
    try {
      var doc = new DOMParser().parseFromString(text, "text/xml");
      return doc.querySelector("body").textContent.replace(/[\s\n\r]+/g, " ").trim();
    } catch (e) {
      dev().error("TTML", e.message);
    }
    return "";
  }
  function extractTextContentWebVtt(text) {
    var queue = /^\d\d\:\d\d/;
    var seenQueue = false;
    text = text.split(/[\n\r]+/).filter(function(line) {
      var isQueue = queue.test(line);
      seenQueue = seenQueue || isQueue;
      if (!seenQueue || isQueue) {
        return false;
      }
      return !/^NOTE\s+/.test(line);
    }).map(function(line) {
      return line.replace(/^- /, "");
    }).join(" ");
    var div = document.createElement("div");
    div.innerHTML = text;
    return div.textContent;
  }

  // extensions/amp-story/1.0/audio.js
  var BACKGROUND_AUDIO_ELEMENT_CLASS_NAME = "i-amphtml-story-background-audio";
  function upgradeBackgroundAudio(element, loop) {
    if (loop === void 0) {
      loop = true;
    }
    if (!element.hasAttribute("background-audio")) {
      return null;
    }
    var audioEl = element.ownerDocument.createElement("audio");
    var audioSrc = Services.urlForDoc(element).assertHttpsUrl(element.getAttribute("background-audio"), element);
    audioEl.setAttribute("src", audioSrc);
    audioEl.setAttribute("preload", "auto");
    if (loop) {
      audioEl.setAttribute("loop", "");
    }
    audioEl.setAttribute("autoplay", "");
    audioEl.setAttribute("muted", "");
    audioEl.muted = true;
    audioEl.classList.add(BACKGROUND_AUDIO_ELEMENT_CLASS_NAME);
    element.appendChild(audioEl);
    return audioEl;
  }

  // extensions/amp-story/1.0/amp-story-page.js
  function _inherits8(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf8(subClass, superClass);
  }
  function _setPrototypeOf8(o, p) {
    _setPrototypeOf8 = Object.setPrototypeOf || function _setPrototypeOf13(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf8(o, p);
  }
  function _createSuper8(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct8();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf8(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf8(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn8(this, result);
    };
  }
  function _possibleConstructorReturn8(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized8(self2);
  }
  function _assertThisInitialized8(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct8() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf8(o) {
    _getPrototypeOf8 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf13(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf8(o);
  }
  var PAGE_LOADED_CLASS_NAME = "i-amphtml-story-page-loaded";
  var Selectors = {
    ALL_AMP_MEDIA: "amp-story-grid-layer amp-audio, amp-story-grid-layer amp-video, amp-story-grid-layer amp-img, amp-story-grid-layer amp-anim",
    ALL_AMP_VIDEO: "amp-story-grid-layer amp-video",
    ALL_IFRAMED_MEDIA: "audio, video",
    ALL_PLAYBACK_AMP_MEDIA: "amp-story-grid-layer amp-audio, amp-story-grid-layer amp-video",
    ALL_PLAYBACK_MEDIA: "> audio, amp-story-grid-layer audio, amp-story-grid-layer video",
    ALL_VIDEO: "amp-story-grid-layer video",
    ALL_TABBABLE: "a, amp-twitter > iframe"
  };
  var TAG7 = "amp-story-page";
  var ADVERTISEMENT_ATTR_NAME = "ad";
  var DEFAULT_PREVIEW_AUTO_ADVANCE_DURATION = "2s";
  var VIDEO_PREVIEW_AUTO_ADVANCE_DURATION = "5s";
  var VIDEO_MINIMUM_AUTO_ADVANCE_DURATION_S = 2;
  var renderPlayMessageElement = function renderPlayMessageElement2() {
    return createElement("button", {
      role: "button",
      class: "i-amphtml-story-page-play-button i-amphtml-story-system-reset"
    }, createElement("span", {
      class: "i-amphtml-story-page-play-label"
    }), createElement("span", {
      class: "i-amphtml-story-page-play-icon"
    }));
  };
  var renderErrorMessageElement = function renderErrorMessageElement2() {
    return createElement("div", {
      class: "i-amphtml-story-page-error i-amphtml-story-system-reset"
    }, createElement("span", {
      class: "i-amphtml-story-page-error-label"
    }), createElement("span", {
      class: "i-amphtml-story-page-error-icon"
    }));
  };
  var PageState = {
    NOT_ACTIVE: 0,
    PLAYING: 1,
    PAUSED: 2
  };
  var NavigationDirection = {
    NEXT: "next",
    PREVIOUS: "previous"
  };
  var AmpStoryPage = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits8(AmpStoryPage2, _AMP$BaseElement);
    var _super = _createSuper8(AmpStoryPage2);
    AmpStoryPage2.prerenderAllowed = function prerenderAllowed(element) {
      return isPrerenderActivePage(element);
    };
    function AmpStoryPage2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.animationManager_ = null;
      _this.advancement_ = null;
      _this.debounceToggleLoadingSpinner_ = debounce(_this.win, function(isActive) {
        return _this.toggleLoadingSpinner_(!!isActive);
      }, 100);
      _this.loadingSpinner_ = null;
      _this.playMessageEl_ = null;
      _this.errorMessageEl_ = null;
      _this.openAttachmentEl_ = null;
      var deferred = new Deferred();
      _this.mediaPerformanceMetricsService_ = getMediaPerformanceMetricsService(_this.win);
      _this.performanceTrackedVideos_ = [];
      _this.registerAllMediaPromise_ = null;
      _this.mediaPoolPromise_ = deferred.promise;
      _this.mediaPoolResolveFn_ = deferred.resolve;
      _this.mediaPoolRejectFn_ = deferred.reject;
      _this.state_ = PageState.NOT_ACTIVE;
      _this.storeService_ = getStoreService(_this.win);
      _this.unlisteners_ = [];
      _this.backgroundAudioDeferred_ = new Deferred();
      _this.isBotUserAgent_ = Services.platformFor(_this.win).isBot();
      _this.playAudioElementFromTimestamp_ = null;
      return _this;
    }
    var _proto = AmpStoryPage2.prototype;
    _proto.maybeCreateAnimationManager_ = function maybeCreateAnimationManager_() {
      if (this.animationManager_) {
        return;
      }
      if (!hasAnimations(this.element)) {
        return;
      }
      this.animationManager_ = AnimationManager.create(this.element, this.getAmpDoc(), this.getAmpDoc().getUrl());
    };
    _proto.buildCallback = function buildCallback() {
      var _this2 = this;
      this.delegateVideoAutoplay();
      this.markMediaElementsWithPreload_();
      this.initializeMediaPool_();
      this.maybeCreateAnimationManager_();
      this.maybeSetPreviewDuration_();
      this.maybeSetStoryNextUp_();
      this.advancement_ = AdvancementConfig.forElement(this.win, this.element);
      this.advancement_.addPreviousListener(function() {
        return _this2.previous();
      });
      this.advancement_.addAdvanceListener(function() {
        return _this2.next(true);
      });
      this.advancement_.addProgressListener(function(progress) {
        return _this2.emitProgress_(progress);
      });
      this.setDescendantCssTextStyles_();
      this.storeService_.subscribe(StateProperty.UI_STATE, function(uiState) {
        return _this2.onUIStateUpdate_(uiState);
      }, true);
      this.setPageDescription_();
      this.element.setAttribute("role", "region");
      this.initializeImgAltTags_();
      this.initializeTabbableElements_();
    };
    _proto.maybeSetPreviewDuration_ = function maybeSetPreviewDuration_() {
      if (this.storeService_.get(StateProperty.PREVIEW_STATE)) {
        var videos = this.getAllVideos_();
        var autoAdvanceAttr = videos.length > 0 ? VIDEO_PREVIEW_AUTO_ADVANCE_DURATION : DEFAULT_PREVIEW_AUTO_ADVANCE_DURATION;
        this.element.setAttribute("auto-advance-after", autoAdvanceAttr);
      }
    };
    _proto.maybeSetStoryNextUp_ = function maybeSetStoryNextUp_() {
      var autoAdvanceAttr = this.element.getAttribute("auto-advance-after");
      var storyNextUpParam = Services.viewerForDoc(this.element).getParam("storyNextUp");
      if (autoAdvanceAttr !== null || storyNextUpParam === null || storyNextUpParam === StoryAdSegmentTimes.SENTINEL) {
        return;
      }
      this.element.setAttribute("auto-advance-after", storyNextUpParam);
      this.listenAndUpdateAutoAdvanceDuration_();
    };
    _proto.listenAndUpdateAutoAdvanceDuration_ = function listenAndUpdateAutoAdvanceDuration_() {
      var _this3 = this;
      var video = this.getFirstAmpVideo_();
      if (video === null) {
        return;
      }
      whenUpgradedToCustomElement(video).then(function() {
        return video.getImpl();
      }).then(function(videoImpl) {
        var videoDuration = videoImpl.getDuration();
        if (!isNaN(videoDuration)) {
          _this3.maybeUpdateAutoAdvanceTime_(videoDuration);
          return;
        }
        listenOnce(video, VideoEvents_Enum.LOADEDMETADATA, function() {
          _this3.maybeUpdateAutoAdvanceTime_(videoImpl.getDuration());
        });
      });
    };
    _proto.maybeUpdateAutoAdvanceTime_ = function maybeUpdateAutoAdvanceTime_(duration) {
      if (duration < VIDEO_MINIMUM_AUTO_ADVANCE_DURATION_S || !this.advancement_ || !this.advancement_.updateTimeDelay) {
        return;
      }
      this.advancement_.updateTimeDelay(duration + "s");
      this.element.setAttribute("auto-advance-after", duration + "s");
    };
    _proto.getFirstAmpVideo_ = function getFirstAmpVideo_() {
      var videos = this.getAllAmpVideos_();
      return videos.length === 0 ? null : videos[0];
    };
    _proto.delegateVideoAutoplay = function delegateVideoAutoplay() {
      iterateCursor(this.element.querySelectorAll("amp-video"), delegateAutoplay);
    };
    _proto.initializeMediaPool_ = function initializeMediaPool_() {
      var _this4 = this;
      var storyEl = dev().assertElement(closestAncestorElementBySelector(this.element, "amp-story"), "amp-story-page must be a descendant of amp-story.");
      whenUpgradedToCustomElement(storyEl).then(function() {
        return storyEl.getImpl();
      }).then(function(storyImpl) {
        return _this4.mediaPoolResolveFn_(MediaPool.for(storyImpl));
      }, function(reason) {
        return _this4.mediaPoolRejectFn_(reason);
      });
    };
    _proto.markMediaElementsWithPreload_ = function markMediaElementsWithPreload_() {
      var mediaSet = this.element.querySelectorAll("amp-audio, amp-video");
      Array.prototype.forEach.call(mediaSet, function(mediaItem) {
        mediaItem.setAttribute("preload", "auto");
      });
    };
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return layout == Layout_Enum.CONTAINER;
    };
    _proto.setState = function setState(state) {
      var _this$animationManage2;
      switch (state) {
        case PageState.NOT_ACTIVE:
          this.element.removeAttribute("active");
          if (this.openAttachmentEl_) {
            this.openAttachmentEl_.removeAttribute("active");
          }
          this.pause_();
          this.state_ = state;
          break;
        case PageState.PLAYING:
          if (this.state_ === PageState.NOT_ACTIVE) {
            this.element.setAttribute("active", "");
            this.resume_();
            if (this.openAttachmentEl_) {
              this.openAttachmentEl_.setAttribute("active", "");
            }
          }
          if (this.state_ === PageState.PAUSED) {
            var _this$animationManage;
            this.advancement_.start();
            this.playAllMedia_();
            (_this$animationManage = this.animationManager_) == null ? void 0 : _this$animationManage.resumeAll();
          }
          this.state_ = state;
          break;
        case PageState.PAUSED:
          this.advancement_.stop(true);
          this.pauseAllMedia_(false);
          (_this$animationManage2 = this.animationManager_) == null ? void 0 : _this$animationManage2.pauseAll();
          this.state_ = state;
          break;
        default:
          dev().warn(TAG7, "PageState " + state + " does not exist");
          break;
      }
    };
    _proto.pause_ = function pause_() {
      var _this$animationManage3;
      this.advancement_.stop(false);
      this.stopMeasuringAllVideoPerformance_();
      this.stopListeningToVideoEvents_();
      this.toggleErrorMessage_(false);
      this.togglePlayMessage_(false);
      this.playAudioElementFromTimestamp_ = null;
      this.pauseAllMedia_(true);
      if (!this.storeService_.get(StateProperty.MUTED_STATE)) {
        this.muteAllMedia();
      }
      (_this$animationManage3 = this.animationManager_) == null ? void 0 : _this$animationManage3.cancelAll();
    };
    _proto.resume_ = function resume_() {
      var _this5 = this;
      var registerAllPromise = this.registerAllMedia_();
      if (this.isActive()) {
        registerAllPromise.then(function() {
          _this5.signals().whenSignal(CommonSignals_Enum.LOAD_END).then(function() {
            if (_this5.state_ == PageState.PLAYING) {
              _this5.advancement_.start();
            }
          });
          _this5.preloadAllMedia_().then(function() {
            _this5.startMeasuringAllVideoPerformance_();
            _this5.startListeningToVideoEvents_();
            _this5.playAllMedia_().then(function() {
              if (!_this5.storeService_.get(StateProperty.MUTED_STATE)) {
                _this5.unmuteAllMedia();
              }
            });
          });
        });
        this.maybeStartAnimations_();
        this.checkPageHasAudio_();
        this.checkPageHasElementWithPlayback_();
        this.findAndPrepareEmbeddedComponents_();
      }
      this.reportDevModeErrors_();
    };
    _proto.layoutCallback = function layoutCallback() {
      var loop = this.element.getAttribute("id") !== this.element.getAttribute("auto-advance-after");
      upgradeBackgroundAudio(this.element, loop);
      this.backgroundAudioDeferred_.resolve();
      this.muteAllMedia();
      this.renderOpenAttachmentUI_();
      return Promise.all([this.beforeVisible(), this.waitForMediaLayout_(), this.mediaPoolPromise_]);
    };
    _proto.onUIStateUpdate_ = function onUIStateUpdate_(uiState) {
      if (uiState === UIType.VERTICAL) {
        this.maybeFinishAnimations_();
      }
    };
    _proto.beforeVisible = function beforeVisible() {
      this.renderOpenAttachmentUI_();
      return this.maybeApplyFirstAnimationFrameOrFinish();
    };
    _proto.waitForMediaLayout_ = function waitForMediaLayout_() {
      var _this6 = this;
      var mediaSet = toArray(this.getMediaBySelector_(Selectors.ALL_AMP_MEDIA));
      var mediaPromises = mediaSet.map(function(mediaEl) {
        return new Promise(function(resolve) {
          switch (mediaEl.tagName.toLowerCase()) {
            case "amp-anim":
            case "amp-img":
            case "amp-story-360":
              if (mediaEl.hasAttribute("fallback")) {
                resolve();
                return;
              }
              whenUpgradedToCustomElement(mediaEl).then(function(el) {
                return el.signals().whenSignal(CommonSignals_Enum.LOAD_END);
              }).then(resolve, resolve);
              break;
            case "amp-audio":
            case "amp-video":
              var innerMediaEl = mediaEl.querySelector("audio, video");
              if (innerMediaEl && innerMediaEl.readyState >= 2) {
                resolve();
                return;
              }
              mediaEl.addEventListener("canplay", resolve, true);
              break;
            default:
              resolve();
          }
          mediaEl.addEventListener("error", resolve, true);
        });
      });
      return Promise.all(mediaPromises).then(function() {
        return _this6.markPageAsLoaded_();
      });
    };
    _proto.waitForPlaybackMediaLayout_ = function waitForPlaybackMediaLayout_() {
      var mediaSet = toArray(this.getMediaBySelector_(Selectors.ALL_PLAYBACK_AMP_MEDIA));
      var mediaPromises = mediaSet.map(function(mediaEl) {
        return new Promise(function(resolve) {
          switch (mediaEl.tagName.toLowerCase()) {
            case "amp-audio":
            case "amp-video":
              var signal = mediaEl.getAttribute("layout") === Layout_Enum.NODISPLAY ? CommonSignals_Enum.BUILT : CommonSignals_Enum.LOAD_END;
              whenUpgradedToCustomElement(mediaEl).then(function(el) {
                return el.signals().whenSignal(signal);
              }).then(resolve, resolve);
              break;
            case "audio":
            default:
              resolve();
          }
        });
      });
      if (this.element.hasAttribute("background-audio")) {
        mediaPromises.push(this.backgroundAudioDeferred_.promise);
      }
      return Promise.all(mediaPromises);
    };
    _proto.findAndPrepareEmbeddedComponents_ = function findAndPrepareEmbeddedComponents_() {
      this.addClickShieldToEmbeddedComponents_();
      this.buildAffiliateLinks_();
    };
    _proto.addClickShieldToEmbeddedComponents_ = function addClickShieldToEmbeddedComponents_() {
      var componentEls = toArray(scopedQuerySelectorAll(this.element, embeddedElementsSelectors()));
      if (componentEls.length <= 0) {
        return;
      }
      this.mutateElement(function() {
        componentEls.forEach(function(el) {
          el.classList.add("i-amphtml-embedded-component");
        });
      });
    };
    _proto.buildAffiliateLinks_ = function buildAffiliateLinks_() {
      var _this7 = this;
      toArray(scopedQuerySelectorAll(this.element, AFFILIATE_LINK_SELECTOR)).forEach(function(el) {
        var link = new AmpStoryAffiliateLink(_this7.win, el);
        link.build();
      });
    };
    _proto.markPageAsLoaded_ = function markPageAsLoaded_() {
      var _this8 = this;
      dispatch(this.win, this.element, EventType.PAGE_LOADED, void 0, {
        bubbles: true
      });
      this.mutateElement(function() {
        _this8.element.classList.add(PAGE_LOADED_CLASS_NAME);
      });
    };
    _proto.getAllMedia_ = function getAllMedia_() {
      return this.getMediaBySelector_(Selectors.ALL_PLAYBACK_MEDIA);
    };
    _proto.getAllVideos_ = function getAllVideos_() {
      return this.getMediaBySelector_(Selectors.ALL_VIDEO);
    };
    _proto.getAllAmpVideos_ = function getAllAmpVideos_() {
      return this.getMediaBySelector_(Selectors.ALL_AMP_VIDEO);
    };
    _proto.getMediaBySelector_ = function getMediaBySelector_(selector) {
      var iframe = this.element.querySelector("iframe");
      var fie = iframe && getFriendlyIframeEmbedOptional(iframe);
      var mediaSet = [];
      iterateCursor(scopedQuerySelectorAll(this.element, selector), function(el) {
        return mediaSet.push(el);
      });
      if (fie) {
        iterateCursor(scopedQuerySelectorAll(fie.win.document.body, Selectors.ALL_IFRAMED_MEDIA), function(el) {
          return mediaSet.push(el);
        });
      }
      return mediaSet;
    };
    _proto.isAutoplaySupported_ = function isAutoplaySupported_() {
      return isAutoplaySupported(this.win);
    };
    _proto.whenAllMediaElements_ = function whenAllMediaElements_(callbackFn) {
      var mediaSet = toArray(this.getAllMedia_());
      return this.mediaPoolPromise_.then(function(mediaPool) {
        var promises = mediaSet.map(function(mediaEl) {
          return callbackFn(mediaPool, dev().assertElement(mediaEl));
        });
        return Promise.all(promises);
      });
    };
    _proto.pauseAllMedia_ = function pauseAllMedia_(rewindToBeginning) {
      var _this9 = this;
      if (rewindToBeginning === void 0) {
        rewindToBeginning = false;
      }
      return this.whenAllMediaElements_(function(mediaPool, mediaEl) {
        return _this9.pauseMedia_(mediaPool, mediaEl, rewindToBeginning);
      });
    };
    _proto.pauseMedia_ = function pauseMedia_(mediaPool, mediaEl, rewindToBeginning) {
      if (this.isBotUserAgent_) {
        mediaEl.pause();
        return resolvedPromise();
      } else {
        return mediaPool.pause(mediaEl, rewindToBeginning);
      }
    };
    _proto.playAllMedia_ = function playAllMedia_() {
      var _this10 = this;
      return this.whenAllMediaElements_(function(mediaPool, mediaEl) {
        return _this10.playMedia_(mediaPool, mediaEl);
      });
    };
    _proto.playMedia_ = function playMedia_(mediaPool, mediaEl) {
      var _this11 = this;
      if (this.isBotUserAgent_) {
        tryPlay(mediaEl);
        return resolvedPromise();
      } else {
        return this.loadPromise(mediaEl).then(function() {
          return mediaPool.play(mediaEl).catch(function(unusedError) {
            if (mediaEl.tagName === "VIDEO") {
              _this11.debounceToggleLoadingSpinner_(false);
              _this11.isAutoplaySupported_().then(function(isAutoplaySupported2) {
                if (isAutoplaySupported2) {
                  _this11.toggleErrorMessage_(true);
                  return;
                }
                _this11.stopMeasuringAllVideoPerformance_(false);
                _this11.togglePlayMessage_(true);
              });
            }
            if (mediaEl.tagName === "AUDIO") {
              _this11.playAudioElementFromTimestamp_ = Date.now();
            }
          });
        }, function() {
          _this11.debounceToggleLoadingSpinner_(false);
          _this11.toggleErrorMessage_(true);
        });
      }
    };
    _proto.preloadAllMedia_ = function preloadAllMedia_() {
      var _this12 = this;
      return this.whenAllMediaElements_(function(mediaPool, mediaEl) {
        return _this12.preloadMedia_(mediaPool, mediaEl);
      });
    };
    _proto.preloadMedia_ = function preloadMedia_(mediaPool, mediaEl) {
      if (this.isBotUserAgent_) {
        return resolvedPromise();
      } else {
        return mediaPool.preload(mediaEl);
      }
    };
    _proto.muteAllMedia = function muteAllMedia() {
      var _this13 = this;
      return this.whenAllMediaElements_(function(mediaPool, mediaEl) {
        _this13.muteMedia_(mediaPool, mediaEl);
      });
    };
    _proto.muteMedia_ = function muteMedia_(mediaPool, mediaEl) {
      if (this.isBotUserAgent_) {
        mediaEl.muted = true;
        mediaEl.setAttribute("muted", "");
        return resolvedPromise();
      } else {
        return mediaPool.mute(mediaEl);
      }
    };
    _proto.unmuteAllMedia = function unmuteAllMedia() {
      var _this14 = this;
      return this.whenAllMediaElements_(function(mediaPool, mediaEl) {
        _this14.unmuteMedia_(mediaPool, mediaEl);
      });
    };
    _proto.unmuteMedia_ = function unmuteMedia_(mediaPool, mediaEl) {
      if (this.isBotUserAgent_) {
        mediaEl.muted = false;
        mediaEl.removeAttribute("muted");
        if (mediaEl.tagName === "AUDIO" && mediaEl.paused) {
          tryPlay(mediaEl);
        }
        return resolvedPromise();
      } else {
        mediaEl = mediaEl;
        var promises = [mediaPool.unmute(mediaEl)];
        if (mediaEl.tagName === "AUDIO" && mediaEl.paused && this.playAudioElementFromTimestamp_) {
          var currentTime = (Date.now() - this.playAudioElementFromTimestamp_) / 1e3;
          if (mediaEl.hasAttribute("loop") || currentTime < mediaEl.duration) {
            promises.push(mediaPool.setCurrentTime(mediaEl, currentTime % mediaEl.duration));
            promises.push(mediaPool.play(mediaEl));
          }
          this.playAudioElementFromTimestamp_ = null;
        }
        return Promise.all(promises);
      }
    };
    _proto.registerAllMedia_ = function registerAllMedia_() {
      var _this15 = this;
      if (!this.registerAllMediaPromise_) {
        this.registerAllMediaPromise_ = this.waitForPlaybackMediaLayout_().then(function() {
          return _this15.whenAllMediaElements_(function(p, e) {
            return _this15.registerMedia_(p, e);
          });
        });
      }
      return this.registerAllMediaPromise_;
    };
    _proto.registerMedia_ = function registerMedia_(mediaPool, mediaEl) {
      if (this.isBotUserAgent_) {
        return resolvedPromise();
      } else {
        return mediaPool.register(mediaEl);
      }
    };
    _proto.maybeStartAnimations_ = function maybeStartAnimations_() {
      if (!this.animationManager_) {
        return;
      }
      this.animationManager_.animateIn();
    };
    _proto.maybeFinishAnimations_ = function maybeFinishAnimations_() {
      var _this16 = this;
      if (!this.animationManager_) {
        return;
      }
      this.signals().whenSignal(CommonSignals_Enum.LOAD_END).then(function() {
        return _this16.animationManager_.applyLastFrame();
      });
    };
    _proto.maybeApplyFirstAnimationFrameOrFinish = function maybeApplyFirstAnimationFrameOrFinish() {
      var _this$animationManage4;
      return Promise.resolve((_this$animationManage4 = this.animationManager_) == null ? void 0 : _this$animationManage4.applyFirstFrameOrFinish());
    };
    _proto.getDistance = function getDistance() {
      return parseInt(this.element.getAttribute("distance"), 10);
    };
    _proto.setDistance = function setDistance(distance) {
      var _this17 = this;
      if (this.isAd()) {
        distance = Math.min(distance, 2);
      }
      if (distance == this.getDistance()) {
        return;
      }
      this.element.setAttribute("distance", distance);
      this.element.setAttribute("aria-hidden", distance != 0);
      var registerAllPromise = this.registerAllMedia_();
      if (distance > 0 && distance <= 2) {
        this.findAndPrepareEmbeddedComponents_();
        registerAllPromise.then(function() {
          return _this17.preloadAllMedia_();
        });
      }
      this.toggleTabbableElements_(distance == 0);
    };
    _proto.isActive = function isActive() {
      return this.element.hasAttribute("active");
    };
    _proto.emitProgress_ = function emitProgress_(progress) {
      if (this.isAd() || this.state_ === PageState.NOT_ACTIVE) {
        return;
      }
      var payload = dict({
        "pageId": this.element.id,
        "progress": progress
      });
      var eventInit = {
        bubbles: true
      };
      dispatch(this.win, this.element, EventType.PAGE_PROGRESS, payload, eventInit);
    };
    _proto.getAdjacentPageIds = function getAdjacentPageIds() {
      var adjacentPageIds = isExperimentOn(this.win, "amp-story-branching") ? this.actions_() : [];
      var autoAdvanceNext = this.getNextPageId(true);
      var manualAdvanceNext = this.getNextPageId(false);
      var previous = this.getPreviousPageId();
      if (autoAdvanceNext) {
        adjacentPageIds.push(autoAdvanceNext);
      }
      if (manualAdvanceNext && manualAdvanceNext != autoAdvanceNext) {
        adjacentPageIds.push(manualAdvanceNext);
      }
      if (previous) {
        adjacentPageIds.push(previous);
      }
      return adjacentPageIds;
    };
    _proto.getPreviousPageId = function getPreviousPageId() {
      if (this.element.hasAttribute("i-amphtml-return-to")) {
        return this.element.getAttribute("i-amphtml-return-to");
      }
      var navigationPath = this.storeService_.get(StateProperty.NAVIGATION_PATH);
      var pagePathIndex = navigationPath.lastIndexOf(this.element.id);
      var previousPageId = navigationPath[pagePathIndex - 1];
      if (previousPageId) {
        return previousPageId;
      }
      var previousElement = this.element.previousElementSibling;
      if (previousElement && previousElement.tagName.toLowerCase() === TAG7) {
        return previousElement.id;
      }
      return null;
    };
    _proto.getNextPageId = function getNextPageId(isAutomaticAdvance) {
      if (isAutomaticAdvance === void 0) {
        isAutomaticAdvance = false;
      }
      if (isAutomaticAdvance && this.element.hasAttribute("auto-advance-to")) {
        return this.element.getAttribute("auto-advance-to");
      }
      var advanceAttr = isExperimentOn(this.win, "amp-story-branching") ? "advance-to" : "i-amphtml-advance-to";
      if (this.element.hasAttribute(advanceAttr)) {
        return this.element.getAttribute(advanceAttr);
      }
      var nextElement = this.element.nextElementSibling;
      if (nextElement && nextElement.tagName.toLowerCase() === TAG7) {
        return nextElement.id;
      }
      return null;
    };
    _proto.actions_ = function actions_() {
      var actionElements = Array.prototype.slice.call(this.element.querySelectorAll("[on*=goToPage]"));
      var actionAttrs = actionElements.map(function(action) {
        return action.getAttribute("on");
      });
      return actionAttrs.reduce(function(res, actions3) {
        var actionList = actions3.split(/[;,]+/);
        actionList.forEach(function(action) {
          if (action.indexOf("goToPage") >= 0) {
            res.push(action.slice(action.search("=(.*)") + 1, -1));
          }
        });
        return res;
      }, []);
    };
    _proto.previous = function previous() {
      var pageId = this.getPreviousPageId();
      if (pageId === null) {
        dispatch(this.win, this.element, EventType.NO_PREVIOUS_PAGE, void 0, {
          bubbles: true
        });
        return;
      }
      this.storeService_.dispatch(Action.TOGGLE_PAUSED, false);
      this.switchTo_(pageId, NavigationDirection.PREVIOUS);
    };
    _proto.next = function next(isAutomaticAdvance) {
      if (isAutomaticAdvance === void 0) {
        isAutomaticAdvance = false;
      }
      var pageId = this.getNextPageId(isAutomaticAdvance);
      if (!pageId) {
        dispatch(this.win, this.element, EventType.NO_NEXT_PAGE, void 0, {
          bubbles: true
        });
        return;
      }
      this.storeService_.dispatch(Action.TOGGLE_PAUSED, false);
      this.switchTo_(pageId, NavigationDirection.NEXT);
    };
    _proto.switchTo_ = function switchTo_(targetPageId, direction) {
      var payload = dict({
        "targetPageId": targetPageId,
        "direction": direction
      });
      var eventInit = {
        bubbles: true
      };
      dispatch(this.win, this.element, EventType.SWITCH_PAGE, payload, eventInit);
    };
    _proto.checkPageHasAudio_ = function checkPageHasAudio_() {
      var pageHasAudio = this.element.hasAttribute("background-audio") || this.element.querySelector("amp-audio") || this.hasVideoWithAudio_();
      this.storeService_.dispatch(Action.TOGGLE_PAGE_HAS_AUDIO, pageHasAudio);
    };
    _proto.hasVideoWithAudio_ = function hasVideoWithAudio_() {
      var ampVideoEls = this.element.querySelectorAll("amp-video");
      return Array.prototype.some.call(ampVideoEls, function(video) {
        return !video.hasAttribute("noaudio");
      });
    };
    _proto.checkPageHasElementWithPlayback_ = function checkPageHasElementWithPlayback_() {
      var pageHasElementWithPlayback = this.isAutoAdvance() || this.element.hasAttribute("background-audio") || this.getAllMedia_().length > 0;
      this.storeService_.dispatch(Action.TOGGLE_PAGE_HAS_ELEMENT_WITH_PLAYBACK, pageHasElementWithPlayback);
    };
    _proto.reportDevModeErrors_ = function reportDevModeErrors_() {
      var _this18 = this;
      if (!getMode().development) {
        return;
      }
      getLogEntries(this.element).then(function(logEntries) {
        dispatch(_this18.win, _this18.element, EventType.DEV_LOG_ENTRIES_AVAILABLE, logEntries, {
          bubbles: true
        });
      });
    };
    _proto.startMeasuringAllVideoPerformance_ = function startMeasuringAllVideoPerformance_() {
      if (!this.mediaPerformanceMetricsService_.isPerformanceTrackingOn()) {
        return;
      }
      var videoEls = this.getAllVideos_();
      for (var i = 0; i < videoEls.length; i++) {
        this.startMeasuringVideoPerformance_(videoEls[i]);
      }
    };
    _proto.startMeasuringVideoPerformance_ = function startMeasuringVideoPerformance_(videoEl) {
      if (!this.mediaPerformanceMetricsService_.isPerformanceTrackingOn()) {
        return;
      }
      this.performanceTrackedVideos_.push(videoEl);
      this.mediaPerformanceMetricsService_.startMeasuring(videoEl);
    };
    _proto.stopMeasuringAllVideoPerformance_ = function stopMeasuringAllVideoPerformance_(sendMetrics) {
      if (sendMetrics === void 0) {
        sendMetrics = true;
      }
      if (!this.mediaPerformanceMetricsService_.isPerformanceTrackingOn()) {
        return;
      }
      for (var i = 0; i < this.performanceTrackedVideos_.length; i++) {
        this.mediaPerformanceMetricsService_.stopMeasuring(this.performanceTrackedVideos_[i], sendMetrics);
      }
    };
    _proto.startListeningToVideoEvents_ = function startListeningToVideoEvents_() {
      var _this19 = this;
      var videoEls = this.getAllVideos_();
      if (videoEls.length) {
        var alreadyPlaying = videoEls.some(function(video) {
          return video.currentTime != 0;
        });
        if (!alreadyPlaying) {
          this.debounceToggleLoadingSpinner_(true);
        }
      }
      Array.prototype.forEach.call(videoEls, function(videoEl) {
        _this19.unlisteners_.push(listen(videoEl, "playing", function() {
          return _this19.debounceToggleLoadingSpinner_(false);
        }));
        _this19.unlisteners_.push(listen(videoEl, "waiting", function() {
          return _this19.debounceToggleLoadingSpinner_(true);
        }));
      });
    };
    _proto.stopListeningToVideoEvents_ = function stopListeningToVideoEvents_() {
      this.debounceToggleLoadingSpinner_(false);
      this.unlisteners_.forEach(function(unlisten) {
        return unlisten();
      });
      this.unlisteners_ = [];
    };
    _proto.buildAndAppendVideoLoadingSpinner_ = function buildAndAppendVideoLoadingSpinner_() {
      this.loadingSpinner_ = new LoadingSpinner();
      var loadingSpinnerEl = this.loadingSpinner_.build();
      loadingSpinnerEl.setAttribute("aria-label", "Loading video");
      this.element.appendChild(loadingSpinnerEl);
    };
    _proto.toggleLoadingSpinner_ = function toggleLoadingSpinner_(isActive) {
      var _this20 = this;
      this.mutateElement(function() {
        if (!_this20.loadingSpinner_) {
          _this20.buildAndAppendVideoLoadingSpinner_();
        }
        _this20.loadingSpinner_.toggle(isActive);
      });
    };
    _proto.buildAndAppendPlayMessage_ = function buildAndAppendPlayMessage_() {
      var _this21 = this;
      this.playMessageEl_ = renderPlayMessageElement();
      var labelEl = this.playMessageEl_.querySelector(".i-amphtml-story-page-play-label");
      labelEl.textContent = localize(this.element, LocalizedStringId_Enum.AMP_STORY_PAGE_PLAY_VIDEO);
      this.playMessageEl_.addEventListener("click", function() {
        _this21.togglePlayMessage_(false);
        _this21.startMeasuringAllVideoPerformance_();
        _this21.mediaPoolPromise_.then(function(mediaPool) {
          return mediaPool.blessAll();
        }).then(function() {
          return _this21.playAllMedia_();
        });
      });
      this.mutateElement(function() {
        return _this21.element.appendChild(_this21.playMessageEl_);
      });
    };
    _proto.togglePlayMessage_ = function togglePlayMessage_(isActive) {
      var _this22 = this;
      if (!isActive) {
        this.playMessageEl_ && this.mutateElement(function() {
          return toggle(dev().assertElement(_this22.playMessageEl_), false);
        });
        return;
      }
      if (!this.playMessageEl_) {
        this.buildAndAppendPlayMessage_();
      }
      this.mutateElement(function() {
        return toggle(dev().assertElement(_this22.playMessageEl_), true);
      });
    };
    _proto.buildAndAppendErrorMessage_ = function buildAndAppendErrorMessage_() {
      var _this23 = this;
      this.errorMessageEl_ = renderErrorMessageElement();
      var labelEl = this.errorMessageEl_.querySelector(".i-amphtml-story-page-error-label");
      labelEl.textContent = localize(this.element, LocalizedStringId_Enum.AMP_STORY_PAGE_ERROR_VIDEO);
      this.mutateElement(function() {
        return _this23.element.appendChild(_this23.errorMessageEl_);
      });
    };
    _proto.toggleErrorMessage_ = function toggleErrorMessage_(isActive) {
      var _this24 = this;
      if (!isActive) {
        this.errorMessageEl_ && this.mutateElement(function() {
          return toggle(dev().assertElement(_this24.errorMessageEl_), false);
        });
        return;
      }
      if (!this.errorMessageEl_) {
        this.buildAndAppendErrorMessage_();
      }
      this.mutateElement(function() {
        return toggle(dev().assertElement(_this24.errorMessageEl_), true);
      });
    };
    _proto.renderOpenAttachmentUI_ = function renderOpenAttachmentUI_() {
      var _this25 = this;
      var attachmentEl = this.element.querySelector("amp-story-page-attachment, amp-story-page-outlink, amp-story-shopping-attachment");
      if (!attachmentEl) {
        return;
      }
      if (attachmentEl.hasAttribute("title")) {
        attachmentEl.setAttribute("data-title", attachmentEl.getAttribute("title"));
        attachmentEl.removeAttribute("title");
      }
      if (!this.openAttachmentEl_) {
        this.openAttachmentEl_ = renderPageAttachmentUI(this.element, attachmentEl);
        if (this.element.hasAttribute("active")) {
          this.openAttachmentEl_.setAttribute("active", "");
        }
        var container = this.win.document.createElement("div");
        container.classList.add("i-amphtml-story-page-open-attachment-host");
        container.setAttribute("role", "button");
        container.addEventListener("click", function(e) {
          e.preventDefault();
          _this25.openAttachment();
        });
        this.mutateElement(function() {
          _this25.element.appendChild(container);
          createShadowRootWithStyle(container, _this25.openAttachmentEl_, CSS3);
        });
      }
    };
    _proto.openAttachment = function openAttachment(shouldAnimate) {
      if (shouldAnimate === void 0) {
        shouldAnimate = true;
      }
      var attachmentEl = this.element.querySelector("amp-story-page-attachment, amp-story-page-outlink, amp-story-shopping-attachment");
      if (!attachmentEl) {
        return;
      }
      attachmentEl.getImpl().then(function(attachment) {
        return attachment.open(shouldAnimate);
      });
    };
    _proto.isAd = function isAd() {
      return this.element.hasAttribute(ADVERTISEMENT_ATTR_NAME);
    };
    _proto.setDescendantCssTextStyles_ = function setDescendantCssTextStyles_() {
      setTextBackgroundColor(this.element);
    };
    _proto.setPageDescription_ = function setPageDescription_() {
      if (this.isBotUserAgent_) {
        renderPageDescription(this, this.getAllAmpVideos_());
      }
      if (!this.isBotUserAgent_ && this.element.hasAttribute("title")) {
        if (!this.element.getAttribute("aria-label")) {
          this.element.setAttribute("aria-label", this.element.getAttribute("title"));
        }
        this.element.removeAttribute("title");
      }
    };
    _proto.initializeImgAltTags_ = function initializeImgAltTags_() {
      toArray(this.element.querySelectorAll("amp-img")).forEach(function(ampImgNode) {
        if (!ampImgNode.getAttribute("alt")) {
          ampImgNode.setAttribute("alt", "");
          var childImgNode = ampImgNode.querySelector("img");
          childImgNode && ampImgNode.getImpl().then(function(impl) {
            return propagateAttributes("alt", impl.element, childImgNode);
          });
        }
      });
    };
    _proto.isAutoAdvance = function isAutoAdvance() {
      return this.advancement_.isAutoAdvance();
    };
    _proto.initializeTabbableElements_ = function initializeTabbableElements_() {
      toArray(scopedQuerySelectorAll(this.element, Selectors.ALL_TABBABLE)).forEach(function(el) {
        el.setAttribute("i-amphtml-orig-tabindex", el.getAttribute("tabindex") || 0);
      });
    };
    _proto.toggleTabbableElements_ = function toggleTabbableElements_(toggle2) {
      toArray(scopedQuerySelectorAll(this.element, Selectors.ALL_TABBABLE)).forEach(function(el) {
        el.setAttribute("tabindex", toggle2 ? el.getAttribute("i-amphtml-orig-tabindex") : -1);
      });
    };
    return AmpStoryPage2;
  }(AMP.BaseElement);

  // extensions/amp-story/1.0/amp-story-access.js
  function _extends8() {
    _extends8 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends8.apply(this, arguments);
  }
  function _inherits9(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf9(subClass, superClass);
  }
  function _setPrototypeOf9(o, p) {
    _setPrototypeOf9 = Object.setPrototypeOf || function _setPrototypeOf13(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf9(o, p);
  }
  function _createSuper9(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct9();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf9(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf9(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn9(this, result);
    };
  }
  function _possibleConstructorReturn9(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized9(self2);
  }
  function _assertThisInitialized9(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct9() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf9(o) {
    _getPrototypeOf9 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf13(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf9(o);
  }
  var TAG8 = "amp-story-access";
  var Type_Enum = {
    BLOCKING: "blocking",
    NOTIFICATION: "notification"
  };
  var renderBlockingElement = function renderBlockingElement2() {
    return createElement("div", {
      class: "i-amphtml-story-access-overflow"
    }, createElement("div", {
      class: "i-amphtml-story-access-container"
    }, createElement("div", {
      class: "i-amphtml-story-access-header"
    }, createElement("div", {
      class: "i-amphtml-story-access-logo"
    })), createElement("div", {
      class: "i-amphtml-story-access-content"
    })));
  };
  var renderNotificationElement = function renderNotificationElement2() {
    return createElement("div", {
      class: "i-amphtml-story-access-overflow"
    }, createElement("div", {
      class: "i-amphtml-story-access-container"
    }, createElement("div", {
      class: "i-amphtml-story-access-content"
    }, createElement("span", {
      class: "i-amphtml-story-access-close-button",
      role: "button"
    }, "\xD7"))));
  };
  var AmpStoryAccess = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits9(AmpStoryAccess2, _AMP$BaseElement);
    var _super = _createSuper9(AmpStoryAccess2);
    function AmpStoryAccess2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.containerEl_ = null;
      _this.storeService_ = getStoreService(_this.win);
      return _this;
    }
    var _proto = AmpStoryAccess2.prototype;
    _proto.buildCallback = function buildCallback() {
      if (!this.element.hasAttribute("type")) {
        this.element.setAttribute("type", Type_Enum.BLOCKING);
      }
      var drawerEl = this.renderDrawerEl_();
      this.containerEl_ = dev().assertElement(drawerEl.querySelector(".i-amphtml-story-access-container"));
      var contentEl = dev().assertElement(drawerEl.querySelector(".i-amphtml-story-access-content"));
      copyChildren(this.element, contentEl);
      removeChildren(this.element);
      this.element.appendChild(drawerEl);
      this.allowlistActions_();
      this.initializeListeners_();
    };
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return layout == Layout_Enum.CONTAINER;
    };
    _proto.initializeListeners_ = function initializeListeners_() {
      var _this2 = this;
      this.storeService_.subscribe(StateProperty.ACCESS_STATE, function(isAccess) {
        _this2.onAccessStateChange_(isAccess);
      });
      this.storeService_.subscribe(StateProperty.CURRENT_PAGE_INDEX, function(currentPageIndex) {
        _this2.onCurrentPageIndexChange_(currentPageIndex);
      }, true);
      this.element.addEventListener("click", function(event) {
        return _this2.onClick_(event);
      });
    };
    _proto.onAccessStateChange_ = function onAccessStateChange_(isAccess) {
      if (this.getType_() === Type_Enum.BLOCKING) {
        this.toggle_(isAccess);
      }
    };
    _proto.onCurrentPageIndexChange_ = function onCurrentPageIndexChange_(currentPageIndex) {
      if (this.getType_() === Type_Enum.NOTIFICATION) {
        this.toggle_(currentPageIndex === 0);
      }
    };
    _proto.onClick_ = function onClick_(event) {
      var _this3 = this;
      var el = dev().assertElement(event.target);
      if (el.classList.contains("i-amphtml-story-access-close-button")) {
        return this.toggle_(false);
      }
      if (!closest(el, function(el2) {
        return el2 === _this3.containerEl_;
      }, this.element)) {
        this.storeService_.dispatch(Action.TOGGLE_ACCESS, false);
      }
    };
    _proto.toggle_ = function toggle_(show) {
      var _this4 = this;
      this.mutateElement(function() {
        _this4.element.classList.toggle("i-amphtml-story-access-visible", show);
      });
    };
    _proto.getType_ = function getType_() {
      return this.element.getAttribute("type").toLowerCase();
    };
    _proto.renderDrawerEl_ = function renderDrawerEl_() {
      switch (this.getType_()) {
        case Type_Enum.BLOCKING:
          var drawerEl = renderBlockingElement();
          var logoSrc = getStoryAttributeSrc(this.element, "publisher-logo-src", true);
          if (logoSrc) {
            var logoEl = dev().assertElement(drawerEl.querySelector(".i-amphtml-story-access-logo"));
            setImportantStyles(logoEl, {
              "background-image": "url(" + logoSrc + ")"
            });
          }
          return drawerEl;
          break;
        case Type_Enum.NOTIFICATION:
          return renderNotificationElement();
          break;
        default:
          user().error(TAG8, 'Unknown "type" attribute, expected one of: blocking, notification.');
      }
    };
    _proto.allowlistActions_ = function allowlistActions_() {
      var _this5 = this;
      var accessEl = dev().assertElement(this.win.document.getElementById("amp-access"), "Cannot find the amp-access configuration");
      var accessConfig = parseJson(accessEl.textContent);
      if (!isArray(accessConfig)) {
        accessConfig = [accessConfig];
        if (accessConfig[0].namespace) {
          accessConfig.push(_extends8({}, accessConfig[0], {
            namespace: void 0
          }));
        }
      }
      var actions3 = [];
      accessConfig.forEach(function(config) {
        var _config = config, login = _config.login, namespace = _config.namespace;
        if (isObject(login)) {
          var types = Object.keys(login);
          types.forEach(function(type) {
            return actions3.push(_this5.getActionObject_(namespace, type));
          });
        } else {
          actions3.push(_this5.getActionObject_(namespace));
        }
      });
      this.storeService_.dispatch(Action.ADD_TO_ACTIONS_ALLOWLIST, actions3);
    };
    _proto.getActionObject_ = function getActionObject_(namespace, type) {
      if (namespace === void 0) {
        namespace = void 0;
      }
      if (type === void 0) {
        type = void 0;
      }
      var method = ["login", namespace, type].filter(Boolean).join("-");
      return {
        tagOrTarget: "SCRIPT",
        method: method
      };
    };
    return AmpStoryAccess2;
  }(AMP.BaseElement);

  // src/core/dom/jsx-style-property-string.js
  function jsxStylePropertyString(property, value, opt_isDimensional) {
    if (value == null || value === "") {
      return "";
    }
    var withUnit = opt_isDimensional && typeof value === "number" ? value + "px" : value;
    return property + ":" + withUnit + ";";
  }

  // build/amp-story-consent-1.0.css.js
  var CSS5 = ":host{all:initial!important;color:initial!important}.i-amphtml-story-consent{display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;z-index:100005!important}.i-amphtml-story-consent,.i-amphtml-story-consent:before{position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important}.i-amphtml-story-consent:before{content:\"\"!important;background:#000!important;opacity:0.55!important}.i-amphtml-story-consent-overflow{margin-top:auto!important;overflow-y:auto!important;overflow-x:hidden!important;-webkit-overflow-scrolling:touch!important}.i-amphtml-story-consent-container{position:relative!important;margin:88px 0 72px!important;background:#fff!important;border-radius:8px 8px 0 0!important;color:rgba(0,0,0,0.87)!important;font-family:Roboto,sans-serif!important;text-align:start!important;overflow:hidden!important}.i-amphtml-story-consent-header{position:relative!important;height:80px!important;min-height:80px!important;background:var(--primary-color,#f0f0f0)!important;z-index:2!important}.i-amphtml-story-consent-logo{position:absolute!important;bottom:-32px!important;margin-left:-32px!important;left:50%!important;height:64px!important;width:64px!important;background:#f0f0f0!important;background-position:50%!important;background-repeat:no-repeat!important;background-size:contain!important;border-radius:5px!important}.i-amphtml-story-consent-logo:before{content:\"\"!important;position:absolute!important;top:-6px!important;bottom:-6px!important;left:-6px!important;right:-6px!important;background:#fff!important;border-radius:6px!important;box-shadow:0 2px 3px rgba(0,0,0,0.12)!important;z-index:-1!important}.i-amphtml-story-consent-content{padding:42px 16px 16px!important;font-size:14px!important;z-index:0!important}.i-amphtml-story-consent-vendors{margin:0!important;padding:0!important;list-style:none!important}.i-amphtml-story-consent-vendor{height:40px!important;border-bottom:1px solid #f0f0f0!important;line-height:40px!important;text-overflow:ellipsis!important;overflow:hidden!important}.i-amphtml-story-consent-external-link{position:relative!important;display:inline-block!important;margin:24px 0!important;color:rgba(0,0,0,0.87)!important;font-size:15px!important;font-weight:700!important;text-decoration:none!important}.i-amphtml-story-consent-external-link:hover{text-decoration:underline!important}.i-amphtml-story-consent-external-link:after{content:\"\"!important;position:absolute!important;display:block!important;height:16px!important;width:16px!important;top:3px!important;right:-20px!important;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='rgba(0, 0, 0, 0.87)'%3E%3Cpath d='M10 6 8.6 7.4l4.6 4.6-4.6 4.6L10 18l6-6z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\") 50% no-repeat!important}.i-amphtml-story-consent-external-link.i-amphtml-hidden{display:none!important}.i-amphtml-story-consent-actions{position:absolute!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;-ms-flex-align:center!important;align-items:center!important;bottom:0!important;left:0!important;right:0!important;height:72px!important;min-height:72px!important;background:#fff!important;box-shadow:0 -2px 3px rgba(0,0,0,0.12)!important;z-index:1!important}.i-amphtml-story-consent-action{position:relative!important;padding:0 24px!important;margin:0 12px!important;height:40px!important;width:40vw!important;background:#fff!important;border:none!important;border-radius:40px!important;box-sizing:border-box!important;cursor:pointer!important;font-size:13px!important;font-weight:700!important;line-height:40px!important;text-align:center!important;text-transform:uppercase!important}.i-amphtml-story-consent-action.i-amphtml-hidden{display:none!important}.i-amphtml-story-consent-action-accept{background:var(--primary-color,#000)!important;color:#fff!important}.i-amphtml-story-consent-action-reject{border:1px solid #000!important}@media (min-width:420px){.i-amphtml-story-consent{-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important}.i-amphtml-story-consent-overflow{margin-top:0!important}.i-amphtml-story-consent-container{display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;margin:0!important;max-height:60vh!important;min-height:40vh!important;width:calc(100vw - 80px)!important;max-width:800px!important}.i-amphtml-story-consent-content{margin:0 auto!important;max-width:424px!important;-ms-flex-positive:1!important;flex-grow:1!important;overflow-y:auto!important}.i-amphtml-story-consent-content::-webkit-scrollbar{width:0px!important;background:transparent!important}.i-amphtml-story-consent-actions{position:relative!important;left:0px!important;right:0px!important}.i-amphtml-story-consent-action{width:33vw!important;max-width:200px!important}}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story-consent.css*/";

  // extensions/amp-story/1.0/amp-story-consent.js
  function _extends9() {
    _extends9 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends9.apply(this, arguments);
  }
  function _inherits10(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf10(subClass, superClass);
  }
  function _setPrototypeOf10(o, p) {
    _setPrototypeOf10 = Object.setPrototypeOf || function _setPrototypeOf13(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf10(o, p);
  }
  function _createSuper10(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct10();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf10(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf10(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn10(this, result);
    };
  }
  function _possibleConstructorReturn10(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized10(self2);
  }
  function _assertThisInitialized10(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct10() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf10(o) {
    _getPrototypeOf10 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf13(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf10(o);
  }
  var TAG9 = "amp-story-consent";
  var DEFAULT_OPTIONAL_PARAMETERS = {
    externalLink: {},
    onlyAccept: false
  };
  var renderElement = function renderElement2(element, config, consentId, logoSrc) {
    var _config$vendors;
    return createElement("div", {
      class: "i-amphtml-story-consent i-amphtml-story-system-reset"
    }, createElement("div", {
      class: "i-amphtml-story-consent-overflow"
    }, createElement("div", {
      class: "i-amphtml-story-consent-container"
    }, createElement("div", {
      class: "i-amphtml-story-consent-header"
    }, createElement("div", {
      class: "i-amphtml-story-consent-logo",
      style: logoSrc ? jsxStylePropertyString("background-image", "url('" + logoSrc + "') !important", true) : ""
    })), createElement("div", {
      class: "i-amphtml-story-consent-content"
    }, createElement("h3", null, config.title), createElement("p", null, config.message), createElement("ul", {
      class: "i-amphtml-story-consent-vendors"
    }, (_config$vendors = config.vendors) == null ? void 0 : _config$vendors.map(function(vendor) {
      return createElement("li", {
        class: "i-amphtml-story-consent-vendor"
      }, vendor);
    })), createElement("a", {
      class: obj_str_default({
        "i-amphtml-story-consent-external-link": true,
        "i-amphtml-hidden": !(config.externalLink.title && config.externalLink.href)
      }),
      href: config.externalLink.href,
      target: "_top",
      title: config.externalLink.title
    }, config.externalLink.title))), createElement("div", {
      class: "i-amphtml-story-consent-actions"
    }, createElement("button", {
      class: obj_str_default({
        "i-amphtml-story-consent-action": true,
        "i-amphtml-story-consent-action-reject": true,
        "i-amphtml-hidden": config.onlyAccept === true
      }),
      on: "tap:" + consentId + ".reject"
    }, localize(element, LocalizedStringId_Enum.AMP_STORY_CONSENT_DECLINE_BUTTON_LABEL)), createElement("button", {
      class: obj_str_default({
        "i-amphtml-story-consent-action": true,
        "i-amphtml-story-consent-action-accept": true
      }),
      on: "tap:" + consentId + ".accept"
    }, localize(element, LocalizedStringId_Enum.AMP_STORY_CONSENT_ACCEPT_BUTTON_LABEL)))));
  };
  var AmpStoryConsent = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits10(AmpStoryConsent2, _AMP$BaseElement);
    var _super = _createSuper10(AmpStoryConsent2);
    function AmpStoryConsent2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.actions_ = null;
      _this.consentConfig_ = null;
      _this.storeService_ = getStoreService(_this.win);
      _this.storyConsentConfig_ = null;
      _this.storyConsentEl_ = null;
      return _this;
    }
    var _proto = AmpStoryConsent2.prototype;
    _proto.buildCallback = function buildCallback() {
      this.actions_ = Services.actionServiceForDoc(this.element);
      this.assertAndParseConfig_();
      var storyEl = dev().assertElement(closestAncestorElementBySelector(this.element, "AMP-STORY"));
      var consentEl = closestAncestorElementBySelector(this.element, "AMP-CONSENT");
      var consentId = consentEl.id;
      this.storeConsentId_(consentId);
      var logoSrc = storyEl && storyEl.getAttribute("publisher-logo-src");
      if (logoSrc) {
        assertHttpsUrl(logoSrc, storyEl, "publisher-logo-src");
      } else {
        user().warn(TAG9, 'Expected "publisher-logo-src" attribute on <amp-story>');
      }
      if (this.storyConsentConfig_) {
        this.storyConsentEl_ = renderElement(this.element, this.storyConsentConfig_, consentId, logoSrc);
        createShadowRootWithStyle(this.element, this.storyConsentEl_, CSS5);
        var actions3 = [{
          tagOrTarget: "AMP-CONSENT",
          method: "accept"
        }, {
          tagOrTarget: "AMP-CONSENT",
          method: "prompt"
        }, {
          tagOrTarget: "AMP-CONSENT",
          method: "reject"
        }];
        this.storeService_.dispatch(Action.ADD_TO_ACTIONS_ALLOWLIST, actions3);
        this.setAcceptButtonFontColor_();
        this.initializeListeners_();
      }
    };
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return layout == Layout_Enum.NODISPLAY;
    };
    _proto.initializeListeners_ = function initializeListeners_() {
      var _this2 = this;
      this.storyConsentEl_.addEventListener("click", function(event) {
        return _this2.onClick_(event);
      }, true);
      this.storeService_.subscribe(StateProperty.RTL_STATE, function(rtlState) {
        _this2.onRtlStateUpdate_(rtlState);
      }, true);
    };
    _proto.onClick_ = function onClick_(event) {
      if (!event.target) {
        return;
      }
      if (event.target.hasAttribute("on")) {
        var targetEl = dev().assertElement(event.target);
        this.actions_.trigger(targetEl, "tap", event, ActionTrust_Enum.HIGH);
      }
      var anchorClicked = closest(event.target, function(e) {
        return matches(e, "a[href]");
      });
      if (anchorClicked) {
        triggerClickFromLightDom(anchorClicked, this.element);
        event.preventDefault();
      }
    };
    _proto.onRtlStateUpdate_ = function onRtlStateUpdate_(rtlState) {
      var _this3 = this;
      var mutator = function mutator2() {
        rtlState ? _this3.storyConsentEl_.setAttribute("dir", "rtl") : _this3.storyConsentEl_.removeAttribute("dir");
      };
      this.mutateElement(mutator, this.storyConsentEl_);
    };
    _proto.assertAndParseConfig_ = function assertAndParseConfig_() {
      var parentEl = dev().assertElement(this.element.parentElement);
      var consentScript = childElementByTag(parentEl, "script");
      this.consentConfig_ = consentScript && parseJson(consentScript.textContent);
      this.mergeLegacyConsents_();
      if (!this.consentConfig_) {
        return;
      }
      var storyConsentScript = childElementByTag(this.element, "script");
      userAssert2(storyConsentScript && isJsonScriptTag(storyConsentScript), TAG9 + ' config should be put in a <script> tag with type="application/json"');
      this.storyConsentConfig_ = _extends9({}, DEFAULT_OPTIONAL_PARAMETERS, parseJson(storyConsentScript.textContent));
      user().assertString(this.storyConsentConfig_.title, TAG9 + ": config requires a title");
      user().assertString(this.storyConsentConfig_.message, TAG9 + ": config requires a message");
      userAssert2(this.storyConsentConfig_.vendors && isArray(this.storyConsentConfig_.vendors), TAG9 + ": config requires an array of vendors");
      user().assertBoolean(this.storyConsentConfig_.onlyAccept, TAG9 + ': config requires "onlyAccept" to be a boolean');
      if (this.storyConsentConfig_.externalLink.href || this.storyConsentConfig_.externalLink.title) {
        user().assertString(this.storyConsentConfig_.externalLink.title, TAG9 + ': config requires "externalLink.title" to be a string');
        user().assertString(this.storyConsentConfig_.externalLink.href, TAG9 + ': config requires "externalLink.href" to be an absolute URL');
        assertAbsoluteHttpOrHttpsUrl(this.storyConsentConfig_.externalLink.href);
      }
    };
    _proto.mergeLegacyConsents_ = function mergeLegacyConsents_() {
      var legacyConsents = this.consentConfig_["consents"];
      if (legacyConsents) {
        var policyId = Object.keys(legacyConsents)[0];
        var policy = legacyConsents[policyId];
        this.consentConfig_.consentInstanceId = policyId;
        this.consentConfig_.checkConsentHref = policy.checkConsentHref;
        this.consentConfig_.promptIfUnknownForGeoGroup = policy.promptIfUnknownForGeoGroup;
        delete this.consentConfig_["consents"];
      }
    };
    _proto.storeConsentId_ = function storeConsentId_(consentId) {
      var _this4 = this;
      if (this.consentConfig_.checkConsentHref) {
        this.storeService_.dispatch(Action.SET_CONSENT_ID, consentId);
        return;
      }
      var geoGroup = this.consentConfig_.promptIfUnknownForGeoGroup;
      if (geoGroup) {
        Services.geoForDocOrNull(this.element).then(function(geo) {
          var matchedGeoGroups = geo.matchedISOCountryGroups;
          if (geo && !matchedGeoGroups.includes(geoGroup)) {
            return;
          }
          _this4.storeService_.dispatch(Action.SET_CONSENT_ID, consentId);
        });
      }
    };
    _proto.setAcceptButtonFontColor_ = function setAcceptButtonFontColor_() {
      var buttonEl = dev().assertElement(this.storyConsentEl_.querySelector(".i-amphtml-story-consent-action-accept"));
      var styles = computedStyle(this.win, buttonEl);
      var rgb = getRGBFromCssColorValue(styles["background-color"]);
      var color = getTextColorForRGB(rgb);
      setImportantStyles(buttonEl, {
        color: color
      });
    };
    return AmpStoryConsent2;
  }(AMP.BaseElement);

  // build/amp-story-hint-1.0.css.js
  var CSS6 = ".i-amphtml-story-hint-container{transition-property:opacity!important;transition-duration:200ms!important;contain:strict!important;pointer-events:none!important;position:absolute!important;left:0!important;top:0!important;right:0!important;bottom:0!important;z-index:2!important}.i-amphtml-story-hint-container.i-amphtml-hidden{opacity:0!important}.i-amphtml-story-hint-container .i-amphtml-story-navigation-help-overlay{position:absolute!important;left:0!important;top:0!important;right:0!important;bottom:0!important;background:rgba(0,0,0,0.7)!important;-ms-flex-direction:row!important;flex-direction:row!important;color:#fff!important;font-size:20px!important;padding:16px 0!important}.i-amphtml-story-navigation-help-section{position:relative!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important}.prev-page,[dir=rtl].prev-page{-ms-flex:1!important;flex:1!important}.show-first-page-overlay .i-amphtml-story-navigation-help-overlay{background:transparent!important}.show-first-page-overlay .prev-page{background:linear-gradient(90deg,rgba(0,0,0,0.5),transparent)!important}[dir=rtl].show-first-page-overlay .prev-page{background:linear-gradient(270deg,rgba(0,0,0,0.5),transparent)!important}.show-first-page-overlay .next-page{opacity:0!important}.show-first-page-overlay .i-amphtml-story-hint-placeholder{display:none!important}.show-first-page-overlay .i-amphtml-story-navigation-help-overlay{padding:0px!important}.i-amphtml-story-hint-container .next-page{-ms-flex:3!important;flex:3!important;background-image:linear-gradient(#e0d5d5 60%,rgba(255,255,255,0) 0)!important;background-position:0!important;background-size:1px 15px!important;background-repeat:repeat-y!important}[dir=rtl].i-amphtml-story-hint-container .next-page{border-left:none!important;background-position:100%!important}.show-first-page-overlay .i-amphtml-story-navigation-help-overlay,.show-navigation-overlay .i-amphtml-story-navigation-help-overlay{display:-ms-flexbox!important;display:flex!important}.show-first-page-overlay .prev-page .i-amphtml-story-hint-tap-button{visibility:hidden}.show-navigation-overlay .prev-page .i-amphtml-story-hint-tap-button-icon:before{content:\"\"!important;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24'%3E%3Cpath d='M15.4 7.4 14 6l-6 6 6 6 1.4-1.4-4.6-4.6z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important;width:30px!important;height:30px!important;display:inline-block!important}[dir=rtl].show-navigation-overlay .prev-page .i-amphtml-story-hint-tap-button-icon:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24'%3E%3Cpath d='M10 6 8.6 7.4l4.6 4.6-4.6 4.6L10 18l6-6z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-hint-container .i-amphtml-story-hint-tap-button{position:relative!important;width:44px!important;height:44px!important}.i-amphtml-story-hint-tap-button:after,.i-amphtml-story-hint-tap-button:before{position:absolute!important;content:\"\"!important;width:44px!important;height:44px!important;border-radius:50%!important;background-color:hsla(0,0%,100%,0.5)!important;left:0!important;right:0!important}.i-amphtml-story-hint-tap-button:before{animation:expandingBubble 1000ms cubic-bezier(0.4,0,0.2,1) infinite!important}.i-amphtml-story-hint-tap-button:after{background-color:#fff!important}.i-amphtml-story-hint-container .i-amphtml-story-hint-tap-button-icon{position:absolute!important;z-index:1!important;height:44px!important;width:44px!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;-ms-flex-align:center!important;align-items:center!important}.i-amphtml-story-hint-tap-button-icon:after,.i-amphtml-story-hint-tap-button-icon:before{vertical-align:middle!important;margin:0 2px!important;background-position:50%}.next-page .i-amphtml-story-hint-tap-button-icon:after{content:\"\"!important;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24'%3E%3Cpath d='M10 6 8.6 7.4l4.6 4.6-4.6 4.6L10 18l6-6z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important;width:24px!important;height:24px!important;display:inline-block!important}[dir=rtl] .next-page .i-amphtml-story-hint-tap-button-icon:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24'%3E%3Cpath d='M15.4 7.4 14 6l-6 6 6 6 1.4-1.4-4.6-4.6z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-hint-placeholder{top:50%!important;position:absolute!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;-ms-flex-align:center!important;align-items:center!important}.i-amphtml-story-hint-container .i-amphtml-story-hint-tap-button-text{color:#fff!important;font-size:16px!important;font-family:Roboto-Medium,sans-serif!important;margin-top:24px!important;text-align:center!important;word-break:break-word!important;padding:0 6px!important}@keyframes expandingBubble{0%{transform:scale(1);opacity:0}50%{transform:scale(1.5);opacity:1}to{transform:scale(1);opacity:0}}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story-hint.css*/";

  // extensions/amp-story/1.0/amp-story-hint.js
  var renderHintElement = function renderHintElement2(element) {
    return createElement("aside", {
      class: "i-amphtml-story-hint-container i-amphtml-story-system-reset i-amphtml-hidden"
    }, createElement("div", {
      class: "i-amphtml-story-navigation-help-overlay"
    }, createElement("div", {
      class: "i-amphtml-story-navigation-help-section prev-page"
    }, createElement("div", {
      class: "i-amphtml-story-hint-placeholder"
    }, createElement("div", {
      class: "i-amphtml-story-hint-tap-button"
    }, createElement("div", {
      class: "i-amphtml-story-hint-tap-button-icon"
    })), createElement("div", {
      class: "i-amphtml-story-hint-tap-button-text"
    }, localize(element, LocalizedStringId_Enum.AMP_STORY_HINT_UI_PREVIOUS_LABEL)))), createElement("div", {
      class: "i-amphtml-story-navigation-help-section next-page"
    }, createElement("div", {
      class: "i-amphtml-story-hint-placeholder"
    }, createElement("div", {
      class: "i-amphtml-story-hint-tap-button"
    }, createElement("div", {
      class: "i-amphtml-story-hint-tap-button-icon"
    })), createElement("div", {
      class: "i-amphtml-story-hint-tap-button-text"
    }, localize(element, LocalizedStringId_Enum.AMP_STORY_HINT_UI_NEXT_LABEL))))));
  };
  var NAVIGATION_OVERLAY_CLASS = "show-navigation-overlay";
  var FIRST_PAGE_OVERLAY_CLASS = "show-first-page-overlay";
  var NAVIGATION_OVERLAY_TIMEOUT = 3e3;
  var FIRST_PAGE_NAVIGATION_OVERLAY_TIMEOUT = 275;
  var AmpStoryHint = /* @__PURE__ */ function() {
    function AmpStoryHint2(win, parentEl) {
      this.win_ = win;
      this.isBuilt_ = false;
      this.document_ = this.win_.document;
      this.vsync_ = Services.vsyncFor(this.win_);
      this.timer_ = Services.timerFor(this.win_);
      this.hintContainer_ = null;
      this.hintTimeout_ = null;
      this.storeService_ = getStoreService(this.win_);
      this.parentEl_ = parentEl;
    }
    var _proto = AmpStoryHint2.prototype;
    _proto.build = function build() {
      var _this = this;
      if (this.isBuilt()) {
        return;
      }
      this.isBuilt_ = true;
      var root = this.document_.createElement("div");
      this.hintContainer_ = renderHintElement(this.parentEl_);
      createShadowRootWithStyle(root, this.hintContainer_, CSS6);
      this.storeService_.subscribe(StateProperty.RTL_STATE, function(rtlState) {
        _this.onRtlStateUpdate_(rtlState);
      }, true);
      this.storeService_.subscribe(StateProperty.SYSTEM_UI_IS_VISIBLE_STATE, function(isVisible) {
        _this.onSystemUiIsVisibleStateUpdate_(isVisible);
      });
      this.storeService_.subscribe(StateProperty.INTERACTIVE_COMPONENT_STATE, function(component) {
        _this.hideOnFocusedState_(component.state === EmbeddedComponentState.FOCUSED);
      });
      this.vsync_.mutate(function() {
        _this.parentEl_.appendChild(root);
      });
    };
    _proto.isBuilt = function isBuilt() {
      return this.isBuilt_;
    };
    _proto.showHint_ = function showHint_(hintClass) {
      var _this2 = this;
      if (this.storeService_.get(StateProperty.UI_STATE) !== UIType.MOBILE) {
        return;
      }
      this.build();
      this.vsync_.mutate(function() {
        _this2.hintContainer_.classList.toggle(NAVIGATION_OVERLAY_CLASS, hintClass == NAVIGATION_OVERLAY_CLASS);
        _this2.hintContainer_.classList.toggle(FIRST_PAGE_OVERLAY_CLASS, hintClass == FIRST_PAGE_OVERLAY_CLASS);
        _this2.hintContainer_.classList.remove("i-amphtml-hidden");
        var hideTimeout = hintClass == NAVIGATION_OVERLAY_CLASS ? NAVIGATION_OVERLAY_TIMEOUT : FIRST_PAGE_NAVIGATION_OVERLAY_TIMEOUT;
        _this2.hideAfterTimeout(hideTimeout);
      });
    };
    _proto.showNavigationOverlay = function showNavigationOverlay() {
      if (this.storeService_.get(StateProperty.SHARE_MENU_STATE)) {
        return;
      }
      this.showHint_(NAVIGATION_OVERLAY_CLASS);
    };
    _proto.showFirstPageHintOverlay = function showFirstPageHintOverlay() {
      this.showHint_(FIRST_PAGE_OVERLAY_CLASS);
    };
    _proto.hideAfterTimeout = function hideAfterTimeout(timeout) {
      var _this3 = this;
      this.hintTimeout_ = this.timer_.delay(function() {
        return _this3.hideInternal_();
      }, timeout);
    };
    _proto.hideAllNavigationHint = function hideAllNavigationHint() {
      this.hideInternal_();
      if (this.hintTimeout_ !== null) {
        this.timer_.cancel(this.hintTimeout_);
        this.hintTimeout_ = null;
      }
    };
    _proto.hideInternal_ = function hideInternal_() {
      var _this4 = this;
      if (!this.isBuilt()) {
        return;
      }
      this.vsync_.mutate(function() {
        _this4.hintContainer_.classList.add("i-amphtml-hidden");
      });
    };
    _proto.onRtlStateUpdate_ = function onRtlStateUpdate_(rtlState) {
      var _this5 = this;
      this.vsync_.mutate(function() {
        rtlState ? _this5.hintContainer_.setAttribute("dir", "rtl") : _this5.hintContainer_.removeAttribute("dir");
      });
    };
    _proto.onSystemUiIsVisibleStateUpdate_ = function onSystemUiIsVisibleStateUpdate_(isVisible) {
      if (!isVisible) {
        this.hideAllNavigationHint();
      }
    };
    _proto.hideOnFocusedState_ = function hideOnFocusedState_(isActive) {
      if (isActive) {
        this.hideAllNavigationHint();
      }
    };
    return AmpStoryHint2;
  }();

  // extensions/amp-story/1.0/amp-story-render-service.js
  var LOAD_TIMEOUT = 2900;
  var AmpStoryRenderService = /* @__PURE__ */ function() {
    function AmpStoryRenderService2(ampdoc2) {
      this.ampdoc_ = ampdoc2;
      this.timer_ = Services.timerFor(ampdoc2.win);
    }
    var _proto = AmpStoryRenderService2.prototype;
    _proto.whenReady = function whenReady() {
      var whenReadyPromise = this.ampdoc_.whenReady().then(function(body) {
        var storyEl = body.querySelector("amp-story[standalone]");
        if (!storyEl) {
          return;
        }
        return whenUpgradedToCustomElement(storyEl).then(function() {
          return storyEl.signals().whenSignal(CommonSignals_Enum.LOAD_END);
        });
      });
      return Promise.race([whenReadyPromise, this.timer_.promise(LOAD_TIMEOUT)]);
    };
    return AmpStoryRenderService2;
  }();

  // extensions/amp-story/1.0/amp-story-viewer-messaging-handler.js
  var TAG10 = "amp-story-viewer-messaging-handler";
  var DataSources = {
    STORE_SERVICE: 0,
    VARIABLE_SERVICE: 2
  };
  var GET_STATE_CONFIGURATIONS = {
    "CURRENT_PAGE_ID": {
      dataSource: DataSources.STORE_SERVICE,
      property: StateProperty.CURRENT_PAGE_ID
    },
    "EDUCATION_STATE": {
      dataSource: DataSources.STORE_SERVICE,
      property: StateProperty.EDUCATION_STATE
    },
    "MUTED_STATE": {
      dataSource: DataSources.STORE_SERVICE,
      property: StateProperty.MUTED_STATE
    },
    "PAGE_ATTACHMENT_STATE": {
      dataSource: DataSources.STORE_SERVICE,
      property: StateProperty.PAGE_ATTACHMENT_STATE
    },
    "UI_STATE": {
      dataSource: DataSources.STORE_SERVICE,
      property: StateProperty.UI_STATE
    },
    "STORY_PROGRESS": {
      dataSource: DataSources.VARIABLE_SERVICE,
      property: AnalyticsVariable.STORY_PROGRESS
    }
  };
  var SET_STATE_CONFIGURATIONS = {
    "MUTED_STATE": {
      action: Action.TOGGLE_MUTED,
      isValueValid: function isValueValid(value) {
        return typeof value === "boolean";
      }
    }
  };
  var AmpStoryViewerMessagingHandler = /* @__PURE__ */ function() {
    function AmpStoryViewerMessagingHandler2(win, viewer) {
      this.storeService_ = getStoreService(win);
      this.variableService_ = getVariableService(win);
      this.viewer_ = viewer;
    }
    var _proto = AmpStoryViewerMessagingHandler2.prototype;
    _proto.startListening = function startListening() {
      var _this = this;
      this.viewer_.onMessageRespond("getDocumentState", function(data) {
        return _this.onGetDocumentState_(data);
      });
      this.viewer_.onMessage("onDocumentState", function(data) {
        return _this.onOnDocumentState_(data);
      });
      this.viewer_.onMessageRespond("setDocumentState", function(data) {
        return _this.onSetDocumentState_(data);
      });
      this.viewer_.onMessageRespond("customDocumentUI", function(data) {
        return _this.onCustomDocumentUI_(data);
      });
    };
    _proto.send = function send(eventType, data, cancelUnsent) {
      if (cancelUnsent === void 0) {
        cancelUnsent = false;
      }
      this.viewer_.sendMessage(eventType, data, cancelUnsent);
    };
    _proto.onGetDocumentState_ = function onGetDocumentState_(data) {
      if (data === void 0) {
        data = {};
      }
      var _data = data, state = _data.state;
      var config = GET_STATE_CONFIGURATIONS[state];
      if (!config) {
        return Promise.reject("Invalid 'state' parameter");
      }
      var value;
      switch (config.dataSource) {
        case DataSources.STORE_SERVICE:
          value = this.storeService_.get(config.property);
          break;
        case DataSources.VARIABLE_SERVICE:
          value = this.variableService_.get()[config.property];
          break;
        default:
          dev().error(TAG10, "Unknown data source %s.", config.dataSource);
          break;
      }
      return Promise.resolve({
        state: state,
        value: value
      });
    };
    _proto.onOnDocumentState_ = function onOnDocumentState_(data) {
      var _this2 = this;
      if (data === void 0) {
        data = {};
      }
      var _data2 = data, state = _data2.state;
      var config = GET_STATE_CONFIGURATIONS[state];
      if (!config) {
        user().error(TAG10, "Invalid 'state' parameter");
        return;
      }
      this.storeService_.subscribe(config.property, function(value) {
        _this2.viewer_.sendMessage("documentStateUpdate", dict({
          "state": state,
          "value": value
        }));
      });
    };
    _proto.onSetDocumentState_ = function onSetDocumentState_(data) {
      if (data === void 0) {
        data = {};
      }
      var _data3 = data, state = _data3.state, value = _data3.value;
      var config = SET_STATE_CONFIGURATIONS[state];
      if (!config) {
        return Promise.reject("Invalid 'state' parameter");
      }
      if (!config.isValueValid(value)) {
        return Promise.reject("Invalid 'value' parameter");
      }
      this.storeService_.dispatch(config.action, value);
      return Promise.resolve({
        state: state,
        value: value
      });
    };
    _proto.onCustomDocumentUI_ = function onCustomDocumentUI_(data) {
      this.storeService_.dispatch(Action.SET_VIEWER_CUSTOM_CONTROLS, data.controls);
    };
    return AmpStoryViewerMessagingHandler2;
  }();

  // extensions/amp-story/1.0/background-blur.js
  var CANVAS_SIZE = 3;
  var DURATION_MS = 400;
  var CLASS_NAME = "BACKGROUND-BLUR";
  var HAVE_CURRENT_DATA = 2;
  var BackgroundBlur = /* @__PURE__ */ function() {
    function BackgroundBlur2(win, element) {
      this.win_ = win;
      this.element_ = element;
      this.mediaElements_ = null;
      this.canvas_ = null;
      this.offscreenCanvas_ = this.win_.document.createElement("canvas");
      this.offscreenCanvas_.width = this.offscreenCanvas_.height = CANVAS_SIZE;
      this.currentRAF_ = null;
      this.firstLoad_ = true;
    }
    var _proto = BackgroundBlur2.prototype;
    _proto.attach = function attach() {
      this.canvas_ = this.win_.document.createElement("canvas");
      this.canvas_.width = this.canvas_.height = CANVAS_SIZE;
      setImportantStyles(this.canvas_, {
        width: "100%",
        height: "100%",
        position: "absolute",
        left: 0,
        top: 0
      });
      this.element_.appendChild(this.canvas_);
    };
    _proto.detach = function detach() {
      this.element_.removeChild(this.canvas_);
      cancelAnimationFrame(this.currentRAF_);
    };
    _proto.update = function update(pageElement) {
      this.mediaElements_ = this.getBiggestMediaElements_(pageElement);
      this.findAndBlurMediaEl_(this.mediaElements_[0]);
    };
    _proto.findAndBlurMediaEl_ = function findAndBlurMediaEl_(mediaEl) {
      var _this = this;
      if (!mediaEl) {
        user().info(CLASS_NAME, "No amp-img or amp-video found.");
        this.animateBlur_();
        return;
      }
      this.ensureMediaLoaded_(mediaEl).then(function(loadedMediaEl) {
        if (loadedMediaEl.tagName === "AMP-IMG") {
          if (_this.isTransparentGifOrPng_(loadedMediaEl)) {
            _this.findAndBlurMediaEl_(_this.getNextMediaEl_(loadedMediaEl));
            return;
          }
          _this.animateBlur_(loadedMediaEl.querySelector("img"));
          return;
        }
        var innerVideoEl = loadedMediaEl.querySelector("video");
        var alreadyHasData = innerVideoEl.readyState >= HAVE_CURRENT_DATA;
        if (alreadyHasData) {
          _this.animateBlur_(innerVideoEl);
          return;
        }
        var posterSrc = loadedMediaEl.getAttribute("poster");
        if (!posterSrc) {
          _this.animateBlur_();
          user().info(CLASS_NAME, 'No "poster" attribute on amp-video.');
          return;
        }
        var img = new Image();
        img.onload = function() {
          return _this.animateBlur_(img);
        };
        img.src = posterSrc;
      });
    };
    _proto.isTransparentGifOrPng_ = function isTransparentGifOrPng_(mediaEl) {
      if (!this.isGifOrPng_(mediaEl)) {
        return false;
      }
      var imgEl = mediaEl.querySelector("img");
      var canvas = this.win_.document.createElement("canvas");
      canvas.width = canvas.height = CANVAS_SIZE;
      var context = canvas.getContext("2d");
      context.drawImage(imgEl, 0, 0, CANVAS_SIZE, CANVAS_SIZE);
      var imgData = context.getImageData(0, 0, CANVAS_SIZE, CANVAS_SIZE).data;
      for (var i = 0; i < imgData.length; i += 4) {
        var pixelAlphaVal = imgData[i + 3];
        if (pixelAlphaVal < 255) {
          return true;
        }
      }
      return false;
    };
    _proto.isGifOrPng_ = function isGifOrPng_(mediaEl) {
      var src = mediaEl.getAttribute("src").toLowerCase();
      return src.includes(".png") || src.includes(".gif");
    };
    _proto.getNextMediaEl_ = function getNextMediaEl_(mediaEl) {
      var currentMediaElIdx = this.mediaElements_.indexOf(mediaEl);
      return this.mediaElements_[currentMediaElIdx + 1];
    };
    _proto.ensureMediaLoaded_ = function ensureMediaLoaded_(mediaEl) {
      return new Promise(function(resolve) {
        whenUpgradedToCustomElement(mediaEl).then(function() {
          return mediaEl.signals().whenSignal(CommonSignals_Enum.LOAD_END);
        }).then(function() {
          resolve(mediaEl);
        }).catch(function() {
          user().error(CLASS_NAME, "Failed to load the amp-img or amp-video.");
        });
      });
    };
    _proto.animateBlur_ = function animateBlur_(fillElement) {
      var _this2 = this;
      this.drawOffscreenCanvas_(fillElement);
      if (this.firstLoad_) {
        this.drawCanvas_(1);
        this.firstLoad_ = false;
        return;
      }
      var startTime;
      var nextFrame = function nextFrame2(currTime) {
        if (!startTime) {
          startTime = currTime;
        }
        var elapsed = currTime - startTime;
        if (elapsed < DURATION_MS) {
          var easing = elapsed / DURATION_MS;
          _this2.drawCanvas_(easing);
          _this2.currentRAF_ = requestAnimationFrame(nextFrame2);
        }
      };
      cancelAnimationFrame(this.currentRAF_);
      this.currentRAF_ = requestAnimationFrame(nextFrame);
    };
    _proto.drawCanvas_ = function drawCanvas_(alphaPercentage) {
      var context = this.canvas_.getContext("2d");
      context.globalAlpha = alphaPercentage;
      context.drawImage(this.offscreenCanvas_, 0, 0, CANVAS_SIZE, CANVAS_SIZE);
    };
    _proto.drawOffscreenCanvas_ = function drawOffscreenCanvas_(fillElement) {
      var context = this.offscreenCanvas_.getContext("2d");
      context.fillStyle = "black";
      context.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      if (fillElement) {
        context.drawImage(fillElement, 0, 0, CANVAS_SIZE, CANVAS_SIZE);
        context.fillStyle = "rgba(0, 0, 0, .3)";
        context.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      }
    };
    _proto.getBiggestMediaElements_ = function getBiggestMediaElements_(pageElement) {
      var getSize = function getSize2(el) {
        if (!el) {
          return false;
        }
        var layoutBox = el.getLayoutBox();
        return layoutBox.width * layoutBox.height;
      };
      return Array.from(scopedQuerySelectorAll(pageElement, "amp-story-grid-layer amp-img, amp-story-grid-layer amp-video")).sort(function(firstEl, secondEl) {
        return getSize(secondEl) - getSize(firstEl);
      });
    };
    return BackgroundBlur2;
  }();

  // build/amp-story-1.0.css.js
  var CSS7 = "amp-story-access{position:absolute!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;top:0!important;left:0!important;height:100%!important;width:100%!important;z-index:100003!important;transform:translate3d(0,var(--story-100dvh),0)!important;transition-delay:0.15s!important;pointer-events:none!important}amp-story-access[amp-access-hide]{display:none!important}amp-story-access[type=blocking]{z-index:100004!important}amp-story-access.i-amphtml-story-access-visible{transform:translateZ(0)!important;transition-delay:0s!important}amp-story-access[type=blocking]:before{content:\"\"!important;position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;background:#000!important;opacity:0!important;pointer-events:auto!important;transition:opacity 0.15s cubic-bezier(0.4,0.0,1,1)!important}amp-story-access[type=blocking].i-amphtml-story-access-visible:before{opacity:0.55!important;transition:opacity 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-access-overflow{margin-top:auto!important;overflow-y:auto!important;overflow-x:hidden!important;pointer-events:auto!important;-webkit-overflow-scrolling:touch!important}.i-amphtml-story-access-container{position:relative!important;margin:88px 0 0!important;padding:0px!important;background:#fff!important;border-radius:8px 8px 0 0!important;color:rgba(0,0,0,0.87)!important;font-family:Roboto,sans-serif!important;overflow:hidden!important;text-align:start!important;transform:translate3d(0,100%,0)!important;transition:transform 0.15s cubic-bezier(0.4,0.0,1,1)!important}.i-amphtml-story-access-visible .i-amphtml-story-access-container{transform:translateZ(0)!important;transition:transform 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}[type=notification] .i-amphtml-story-access-container{box-shadow:0 -1px 2px 1px rgba(0,0,0,0.12)!important;max-height:calc(var(--story-page-vh, 1vh)*20)!important}.i-amphtml-story-access-header{position:relative!important;margin:0 0 48px!important;height:80px!important;min-height:80px!important;background:var(--primary-color,#f0f0f0)!important;z-index:2!important}.i-amphtml-story-access-logo{position:absolute!important;bottom:-32px!important;margin-left:-32px!important;left:50%!important;height:64px!important;width:64px!important;background:#f0f0f0!important;background-position:50%!important;background-repeat:no-repeat!important;background-size:contain!important;border-radius:5px!important}.i-amphtml-story-access-logo:before{content:\"\"!important;position:absolute!important;top:-6px!important;bottom:-6px!important;left:-6px!important;right:-6px!important;background:#fff!important;border-radius:6px!important;box-shadow:0 2px 3px rgba(0,0,0,0.12)!important;z-index:-1!important}.i-amphtml-story-access-close-button{position:absolute!important;top:0!important;right:0!important;height:36px!important;width:36px!important;color:#757575!important;cursor:pointer!important;font-size:24px!important;line-height:36px!important;text-align:center!important}.i-amphtml-story-access-content{padding:16px!important;font-size:14px!important;z-index:0!important}@media (min-width:420px){amp-story-access{-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important}.i-amphtml-story-access-container{margin:0!important;width:calc(100vw - 80px)!important;max-width:800px!important}.i-amphtml-story-access-content{margin:0 auto!important;max-width:424px!important;-ms-flex-positive:1!important;flex-grow:1!important;overflow-y:auto!important}.i-amphtml-story-access-content::-webkit-scrollbar,.i-amphtml-story-access-overflow::-webkit-scrollbar{width:0px!important;background:transparent!important}[type=blocking] .i-amphtml-story-access-overflow{margin-top:0!important;border-radius:6px!important;box-shadow:0 1px 3px 1px rgba(0,0,0,0.2)!important}[type=blocking] .i-amphtml-story-access-container{display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;max-height:60vh!important;min-height:20vh!important;border-radius:0px!important;opacity:0!important;transform:translateZ(0)!important;transition:opacity 0.15s cubic-bezier(0.4,0.0,1,1)!important}[type=blocking].i-amphtml-story-access-visible .i-amphtml-story-access-container{opacity:1!important;transition:opacity 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}}[affiliate-link-icon]{position:relative!important;width:50px!important;height:50px!important}[affiliate-link-icon]:not([expanded]),[affiliate-link-icon]:not([expanded]) .i-amphtml-story-affiliate-link-circle{animation:i-amphtml-story-affiliate-link-collapse 0.2s cubic-bezier(0.4,0.0,0.2,1) forwards!important}[affiliate-link-icon][pristine],[affiliate-link-icon][pristine] .i-amphtml-story-affiliate-link-circle{animation:none!important}amp-story-page[active] [affiliate-link-icon][expanded],amp-story-page[active] [affiliate-link-icon][expanded] .i-amphtml-story-affiliate-link-circle{animation:i-amphtml-story-affiliate-link-expand 0.2s cubic-bezier(0.4,0.0,0.2,1) forwards!important;transform-origin:left!important}@keyframes i-amphtml-story-affiliate-link-expand{0%{width:40px;border-radius:50%}to{width:160px;border-radius:20px}}@keyframes i-amphtml-story-affiliate-link-collapse{0%{width:160px;border-radius:20px}to{width:40px;border-radius:50%}}.i-amphtml-story-affiliate-link-circle{position:absolute!important;background:#fff!important;margin:5px!important;width:40px!important;height:40px!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:justify!important;justify-content:space-between!important;border-radius:20px!important}[affiliate-link-icon][expanded] .i-amphtml-story-affiliate-link-circle{overflow:hidden!important}[affiliate-link-icon] .i-amphtml-story-reset.i-amphtml-hidden{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.i-amphtml-story-affiliate-link-text{visibility:hidden!important;text-align:center!important;text-overflow:ellipsis!important;overflow:hidden!important;white-space:nowrap!important;max-width:70px!important;width:70px!important;font-family:Roboto,sans-serif!important;font-size:14px!important;color:#3c4043!important;letter-spacing:0!important;line-height:40px!important}.i-amphtml-story-affiliate-link-launch{visibility:hidden!important;background-position:50%!important;background-repeat:no-repeat!important;background-size:18px 18px!important;width:40px!important;height:40px!important;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 48 48' fill='%23757575'%3E%3Cpath d='M0 0h48v48H0z' fill='none'/%3E%3Cpath d='M38 38H10V10h14V6H10a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V24h-4v14zM28 6v4h7.2L15.5 29.7l2.8 2.8L38 12.8V20h4V6H28z'/%3E%3C/svg%3E\")!important}amp-story-page[active] .i-amphtml-story-affiliate-link-pulse{position:absolute!important;border-radius:50%!important;background:hsla(0,0%,100%,0.4)!important;margin:5px!important;width:40px!important;height:40px!important;animation:pulse 1.5s cubic-bezier(0.4,0.0,0.2,1) infinite alternate!important}@keyframes pulse{0%{transform:scale(1)}to{transform:scale(1.3)}}[affiliate-link-icon][expanded] .i-amphtml-story-affiliate-link-pulse{animation:none!important}[affiliate-link-icon][expanded] .i-amphtml-story-affiliate-link-launch,[affiliate-link-icon][expanded] .i-amphtml-story-affiliate-link-text{visibility:visible!important}@media any-hover{[affiliate-link-icon]:hover .i-amphtml-story-affiliate-link-circle{background:hsla(0,0%,100%,0.4)!important}[affiliate-link-icon]:hover .i-amphtml-story-affiliate-link-pulse{background:none!important;animation:none!important}}.i-amphtml-story-affiliate-link-icon{background-position:50%!important;background-repeat:no-repeat!important;background-size:24px 24px!important;color:rgba(0,0,0,0.54)!important;width:40px!important;height:40px!important}[affiliate-link-icon=shopping-cart] .i-amphtml-story-affiliate-link-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23005AF0'%3E%3Cpath d='M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM1 2v2h2l3.6 7.6L5.2 14A2 2 0 0 0 7 17h12v-2H7.4a.2.2 0 0 1-.2-.3l.9-1.7h7.5a2 2 0 0 0 1.7-1l3.6-6.5.1-.5c0-.6-.4-1-1-1H5.2l-1-2H1zm16 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}[affiliate-link-icon=offer] .i-amphtml-story-affiliate-link-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23005AF0'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='m21.4 11.6-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7c0 .6.2 1 .6 1.4l9 9a2 2 0 0 0 2.8 0l7-7c.4-.4.6-.9.6-1.4 0-.6-.2-1-.6-1.4zM5.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z'/%3E%3C/svg%3E\")!important}[affiliate-link-icon=flight] .i-amphtml-story-affiliate-link-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23005AF0'%3E%3Cpath d='M21 16v-2l-8-5V3.5a1.5 1.5 0 1 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}[affiliate-link-icon=hotel] .i-amphtml-story-affiliate-link-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23005AF0'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M7 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4z'/%3E%3C/svg%3E\")!important}[affiliate-link-icon=movie] .i-amphtml-story-affiliate-link-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23005AF0'%3E%3Cpath d='m18 4 2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V4h-4z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}[affiliate-link-icon=activity] .i-amphtml-story-affiliate-link-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23005AF0'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M20 12c0-1.1.9-2 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a2 2 0 0 1 0 4v4c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 1-2-2zm-4.4 4.8L12 14.5l-3.6 2.3 1.1-4.1L6.2 10l4.3-.3L12 5.8l1.5 4 4.3.2-3.3 2.7 1 4.1z'/%3E%3C/svg%3E\")!important}[affiliate-link-icon=more-to-read] .i-amphtml-story-affiliate-link-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23005AF0'%3E%3Cpath fill='none' d='M-74 29h48v48h-48V29zM0 0h24v24H0V0zm0 0h24v24H0V0z'/%3E%3Cpath d='M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 15h-9V6h9v13z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-background{background-color:transparent}amp-story[standalone]{background-color:#000}@media(min-aspect-ratio:3/4){:root:not([data-story-supports-landscape]):not([i-amphtml-story-mobile]){--i-amphtml-story-desktop-one-panel-ratio:69/116;--i-amphtml-story-desktop-one-panel-responsive-margin:max(74px,8.25vh);--i-amphtml-story-desktop-one-panel-height:calc(var(--story-100dvh) - var(--i-amphtml-story-desktop-one-panel-responsive-margin)*2);--i-amphtml-story-desktop-one-panel-width:calc(var(--i-amphtml-story-desktop-one-panel-height)*var(--i-amphtml-story-desktop-one-panel-ratio));--i-amphtml-story-desktop-one-panel-border-radius:10px;--story-page-vw:calc(var(--i-amphtml-story-desktop-one-panel-width)*0.01)!important;--story-page-vh:calc(var(--i-amphtml-story-desktop-one-panel-height)*0.01)!important}@media(max-height:756px){:root:not([data-story-supports-landscape]):not([i-amphtml-story-mobile]){--i-amphtml-story-desktop-one-panel-responsive-margin:0px;--i-amphtml-story-desktop-one-panel-width:calc(var(--story-100dvh)*var(--i-amphtml-story-desktop-one-panel-ratio));--i-amphtml-story-desktop-one-panel-border-radius:0}}@media(max-height:538px){:root:not([data-story-supports-landscape]):not([i-amphtml-story-mobile]){--i-amphtml-story-desktop-one-panel-ratio:36/53}}:root:not([i-amphtml-story-mobile]) amp-story:not([supports-landscape]) amp-story-page{width:var(--i-amphtml-story-desktop-one-panel-width)!important;height:var(--i-amphtml-story-desktop-one-panel-height)!important;border-radius:var(--i-amphtml-story-desktop-one-panel-border-radius)!important;margin:auto!important}}.amp-story-draggable-drawer-root{display:block!important;position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;overflow:hidden!important;z-index:4!important;transform:translate3d(0,100%,0)!important;transition:transform 0.25s cubic-bezier(0.4,0.0,1,1),visibility 0s linear 0.4s!important;visibility:hidden!important;--i-amphtml-draggable-drawer-background-color:#fff!important;--i-amphtml-draggable-drawer-text-color:#202125!important}[theme=dark].amp-story-draggable-drawer-root{--i-amphtml-draggable-drawer-background-color:#202125!important;--i-amphtml-draggable-drawer-text-color:#fff!important}[desktop] .amp-story-draggable-drawer-root{background:none!important}.amp-story-draggable-drawer-root[hidden]{display:none!important}.amp-story-draggable-drawer-root.i-amphtml-story-draggable-drawer-open{transform:translateZ(0)!important;transition:transform 0.4s cubic-bezier(0.0,0.0,0.2,1),visibility 0s linear 0s!important;visibility:visible!important}.i-amphtml-story-draggable-drawer{height:100%!important}.i-amphtml-story-draggable-drawer-container{height:calc(100% - 40px)!important;background:var(--i-amphtml-draggable-drawer-background-color)!important;overflow-y:auto!important;-webkit-overflow-scrolling:touch!important;transition:background 0.3s cubic-bezier(0.4,0.0,0.2,1)!important}.i-amphtml-story-draggable-drawer-container[hidden]{display:block!important;background:hsla(0,0%,100%,0.92)!important}.i-amphtml-story-draggable-drawer-content{position:relative!important;opacity:1!important;transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;background:var(--i-amphtml-draggable-drawer-background-color)!important;color:var(--i-amphtml-draggable-drawer-text-color)!important}amp-story:not([desktop]) .i-amphtml-story-draggable-drawer-content{border-radius:inherit!important}amp-story:not([desktop]) .i-amphtml-story-page-attachment-remote .i-amphtml-story-draggable-drawer-spacer{display:none!important}.i-amphtml-story-draggable-drawer-container[hidden] .i-amphtml-story-draggable-drawer-content{opacity:0!important}.i-amphtml-story-draggable-drawer-container[hidden] .i-amphtml-story-draggable-drawer-content>*{display:none!important}amp-story:not([desktop]) .i-amphtml-story-draggable-drawer-container{border-radius:16px 16px 0 0!important;height:100%!important;background:none!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important}.i-amphtml-story-draggable-drawer-spacer{display:none!important}amp-story:not([desktop]) .i-amphtml-story-draggable-drawer-spacer{background:none!important;display:block!important;height:calc(var(--story-page-vh)*100)!important;min-height:calc(var(--story-page-vh)*20)!important}body:not(.amp-mode-keyboard-active) amp-story:not([desktop]) .i-amphtml-story-draggable-drawer-spacer{outline:none!important}[desktop] .amp-story-draggable-drawer-root{display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important;background:rgba(0,0,0,0.55)!important;opacity:0!important;transition:opacity 0.15s cubic-bezier(0.4,0.0,1,1),transform 0s linear 0.15s,visibility 0s linear 0.4s!important}[desktop] .amp-story-draggable-drawer-root.i-amphtml-story-draggable-drawer-open{opacity:1!important;transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1),visibility 0s linear 0s!important;transform:translateZ(0)!important}[desktop] .i-amphtml-story-draggable-drawer{height:60vh!important;width:800px!important;border-radius:8px!important;overflow:hidden!important}.amp-story-draggable-drawer-root.i-amphtml-story-page-attachment-remote{transition-duration:.2s!important}.i-amphtml-story-page-attachment-remote.i-amphtml-story-draggable-drawer-open:after{content:\"\"!important;position:absolute!important;width:100%!important;height:4px!important;color:#000!important;bottom:0!important;background-color:var(--i-amphtml-outlink-cta-text-color)!important;opacity:.6!important;transform-origin:left!important;animation:progress-bar-animation .6s cubic-bezier(0.4,0.0,1,1) both!important}[dir=rtl] .i-amphtml-story-page-attachment-remote.i-amphtml-story-draggable-drawer-open:after{transform-origin:right!important}@keyframes progress-bar-animation{0%{transform:scaleX(0)}to{transform:scaleX(1)}}.i-amphtml-story-page-attachment-form-submission-status{-ms-flex-align:center!important;align-items:center!important;background:var(--i-amphtml-draggable-drawer-background-color)!important;border:1px solid rgba(0,0,0,0.3)!important;border-radius:12px!important;box-sizing:border-box!important;display:-ms-flexbox!important;display:flex!important;font-family:Roboto,sans-serif!important;font-size:14px!important;font-weight:700!important;height:54px!important;margin:16px 0px!important;width:100%!important;--i-amphtml-story-page-attachment-form-submission-status-icon-height:26px!important}[theme=dark] .i-amphtml-story-page-attachment-form-submission-status{border:1px solid hsla(0,0%,100%,0.2)!important}[submit-success] .i-amphtml-story-page-attachment-form-submission-status{color:#0f8514!important}[submit-error] .i-amphtml-story-page-attachment-form-submission-status{color:#de3333!important}@keyframes submission-status-fade-in{0%{opacity:0}to{opacity:1}}.i-amphtml-story-page-attachment-form-submission-status div,[submitting] .i-amphtml-story-page-attachment-form-submission-status{animation:submission-status-fade-in 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-page-attachment-form-submission-status-icon{height:var(--i-amphtml-story-page-attachment-form-submission-status-icon-height)!important;margin:0px 14px!important;width:var(--i-amphtml-story-page-attachment-form-submission-status-icon-height)!important}[submit-success] .i-amphtml-story-page-attachment-form-submission-status-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26' fill='none'%3E%3Crect x='-14' y='-14' width='328' height='54' rx='12'/%3E%3Ccircle cx='13' cy='13' r='13' fill='%238BDC8F'/%3E%3Cpath d='m5.8 13.9 5 5 9.4-9.6' stroke='%23000' stroke-width='2.5'/%3E%3C/svg%3E\")!important}[submit-error] .i-amphtml-story-page-attachment-form-submission-status-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='26' height='26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13 0a13 13 0 1 0 0 26 13 13 0 0 0 0-26zm1.3 13c0 .7-.6 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3V7.8c0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3V13zm0 5.2c0 .7-.6 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3z' fill='%23FF5252'/%3E%3C/svg%3E\")!important}.i-amphtml-story-page-attachment-form-submission-status .i-amphtml-story-spinner{height:var(--i-amphtml-story-page-attachment-form-submission-status-icon-height)!important;margin:0 auto!important;position:relative!important;width:var(--i-amphtml-story-page-attachment-form-submission-status-icon-height)!important;bottom:0!important;left:0!important;right:0!important}.i-amphtml-story-page-attachment-form-submission-status .i-amphtml-story-spinner-layer{color:var(--i-amphtml-draggable-drawer-text-color)!important;filter:none!important}:host{visibility:inherit!important}.i-amphtml-story-page-attachment-remote{height:56px!important;bottom:0!important;top:auto!important;--i-amphtml-outlink-cta-background-color:#fff!important;--i-amphtml-outlink-cta-text-color:#000!important}[theme=dark].i-amphtml-story-page-attachment-remote{--i-amphtml-outlink-cta-background-color:#000!important;--i-amphtml-outlink-cta-text-color:#fff!important}.i-amphtml-story-page-attachment-remote>a:first-child,amp-story[desktop] .i-amphtml-story-page-attachment-remote{display:none!important}.i-amphtml-story-page-attachment-remote .i-amphtml-story-draggable-drawer-container{height:100%!important;border-radius:8px 8px 0 0!important;box-shadow:0 1px 2px 1px rgba(0,0,0,0.12)!important}.i-amphtml-story-page-attachment-remote-content{display:-ms-flexbox!important;display:flex!important;padding:0 24px!important;-ms-flex-align:center!important;align-items:center!important;color:rgba(0,0,0,0.87)!important;font-family:Roboto,sans-serif!important;font-size:15px!important;-ms-flex-pack:justify!important;justify-content:space-between!important;line-height:48px!important;text-decoration:none!important;height:56px!important;padding-inline-start:12px!important;padding-inline-end:18px!important;background:var(--i-amphtml-outlink-cta-background-color)!important}.i-amphtml-story-page-attachment-remote-content .i-amphtml-story-page-attachment-remote-img,.i-amphtml-story-page-attachment-remote-content .i-amphtml-story-page-open-attachment-link-icon{width:32px!important;height:32px!important;-ms-flex-negative:0!important;flex-shrink:0!important;padding:0px!important;border-radius:50%!important;background-size:cover!important;background-repeat:no-repeat!important;overflow:hidden!important}.i-amphtml-story-page-open-attachment-link-icon{fill:var(--i-amphtml-outlink-cta-text-color)!important}.i-amphtml-story-page-attachment-remote-title{max-width:calc(100% - 30px)!important;overflow:hidden!important;text-overflow:ellipsis!important;font-size:14px!important;padding:0 12px!important;color:var(--i-amphtml-outlink-cta-text-color)!important;display:-ms-flexbox!important;display:flex!important}.i-amphtml-story-page-attachment-remote-title :first-child{font-weight:700!important}.i-amphtml-story-page-attachment-remote-title :first-child:after{content:\"\\00a0 \"!important}.i-amphtml-story-page-attachment-remote-title :nth-child(2){white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.i-amphtml-story-page-attachment-remote-icon{display:block!important;height:20px!important;width:20px!important;padding:0px!important;margin-inline-start:auto!important;-ms-flex-negative:0!important;flex-shrink:0!important;fill:var(--i-amphtml-outlink-cta-text-color)!important}.i-amphtml-story-page-attachment-expand{position:relative!important;width:100%!important;height:100%!important;background:#fff!important;z-index:100000!important;animation:i-amphtml-open-3p-attachment 120ms cubic-bezier(0.0,0.0,0.2,1) forwards!important}@keyframes i-amphtml-open-3p-attachment{0%{transform:scaleX(0);opacity:0.3}to{transform:scaleX(1);opacity:1}}[orientation=landscape] [position=landscape-half-left]{width:50%!important;left:0!important;right:auto!important}[orientation=landscape] [position=landscape-half-right]{width:50%!important;left:auto!important;right:0!important}amp-story{font-display:optional}amp-story-grid-layer:not([aspect-ratio]):not([preset]){overflow:hidden}amp-story-grid-layer *{box-sizing:border-box;margin:0}.i-amphtml-story-grid-template-with-full-bleed-animation amp-img img,[template=fill] amp-anim img,[template=fill] amp-img img,[template=fill] amp-video video{-o-object-fit:cover;object-fit:cover}[template=vertical]{-ms-flex-line-pack:start;align-content:start;grid-gap:16px;-ms-flex-pack:stretch;justify-content:stretch;justify-items:start}[template=vertical]>*{width:100%}[template=horizontal]{-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:start;align-items:start;grid-gap:16px;-ms-flex-pack:start;justify-content:start}amp-story-grid-layer{padding:68px 32px 32px}amp-story-grid-layer.i-amphtml-story-has-page-attachment.i-amphtml-story-has-interactive{padding-bottom:104px}amp-story-grid-layer.i-amphtml-story-has-CTA-layer.i-amphtml-story-has-interactive{padding-bottom:20%}html.i-amphtml-story-vertical{--story-page-vh:1.78vw!important}amp-story[standalone][i-amphtml-vertical]{height:auto!important;contain:initial!important}[i-amphtml-vertical] *{transition-delay:0s!important;transition-duration:0s!important}[i-amphtml-vertical] amp-story-page{position:relative!important;height:178vw!important;contain:initial!important;overflow:visible!important}amp-story[i-amphtml-vertical].i-amphtml-element amp-story-page.i-amphtml-element{transform:none!important}[i-amphtml-vertical] .i-amphtml-story-draggable-drawer-container[hidden] .i-amphtml-story-draggable-drawer-content{opacity:1!important}[i-amphtml-vertical] .i-amphtml-story-draggable-drawer-container[hidden] .i-amphtml-story-draggable-drawer-content>*{display:block!important}[i-amphtml-vertical] amp-story-page-attachment{display:block!important;position:relative!important;transform:none!important}[i-amphtml-vertical] .i-amphtml-story-page-attachment-remote-title{overflow:visible!important}[i-amphtml-vertical] .amp-story-draggable-drawer-root{visibility:visible!important}[i-amphtml-vertical] .i-amphtml-story-page-description{background:#fff!important;display:block!important;padding:32px!important;width:auto!important;z-index:9999999!important}[i-amphtml-vertical] .i-amphtml-story-page-description>*{background:#fff!important;color:#000!important;font-size:1rem!important}[i-amphtml-vertical] .i-amphtml-story-page-description>h2{font-size:1.5rem!important}.i-amphtml-story-button-container{cursor:pointer!important;position:absolute!important;width:30px!important;top:0!important;bottom:0!important;height:calc(var(--story-100dvh) - 150px)!important;margin:auto 0!important;background:none!important;transition:opacity 150ms linear,visibility 150ms linear!important;outline:none!important;z-index:100002!important}amp-story:not([desktop]) .i-amphtml-story-button-container{pointer-events:none!important}.i-amphtml-story-button-container.next-container>.i-amphtml-story-button-move,.next-container{left:auto!important;right:0!important}[dir=rtl] .i-amphtml-story-button-container.next-container>.i-amphtml-story-button-move,[dir=rtl] .next-container{left:0!important;right:auto!important}.i-amphtml-story-desktop-fullbleed .i-amphtml-story-button-container{pointer-events:none!important}[dir=rtl] amp-story:not([desktop]) .i-amphtml-story-button-move,amp-story:not([desktop]) .i-amphtml-story-button-move{width:100%!important;height:100%!important;border:none!important;padding:0!important;pointer-events:none!important;background-repeat:no-repeat!important;background-color:transparent!important;filter:invert(100%) drop-shadow(0 0 3px rgba(0,0,0,0.5))!important}body:not(.amp-mode-keyboard-active) amp-story:not([desktop]):not(.i-amphtml-story-desktop-one-panel) .i-amphtml-story-button-move{background:none!important}[desktop] .i-amphtml-story-button-move{display:-ms-flexbox!important;display:flex!important;position:fixed!important;top:0!important;bottom:0!important;margin:auto 40px!important;width:60px!important;height:60px!important;border-radius:50%!important;border:0!important;background-color:#fff!important;background-repeat:no-repeat!important;background-size:12px 17px!important;-ms-flex-pack:center!important;justify-content:center!important;-ms-flex-align:center!important;align-items:center!important;opacity:.5!important;transition:opacity 150ms linear,transform 350ms linear!important;cursor:pointer!important;pointer-events:all!important}amp-story.i-amphtml-story-desktop-one-panel .i-amphtml-story-button-container{height:40px!important;width:40px!important;transform:translateY(-50%)!important;top:50%!important;bottom:auto!important;pointer-events:all!important;--i-amphtml-story-desktop-one-panel-button-margin:max(10px,calc(50vw - 72px - var(--i-amphtml-story-desktop-one-panel-width)/2))}amp-story.i-amphtml-story-desktop-one-panel .i-amphtml-story-button-container.prev-container{margin-inline-start:var(--i-amphtml-story-desktop-one-panel-button-margin)!important}amp-story.i-amphtml-story-desktop-one-panel .i-amphtml-story-button-container.next-container{margin-inline-end:var(--i-amphtml-story-desktop-one-panel-button-margin)!important}[dir=rtl] amp-story.i-amphtml-story-desktop-one-panel .i-amphtml-story-button-move,amp-story.i-amphtml-story-desktop-one-panel .i-amphtml-story-button-move{filter:none!important;background-color:#fff!important;border-radius:50%!important;width:40px!important;height:40px!important;background-position-y:52%!important;background-size:20%!important}amp-story.i-amphtml-story-desktop-one-panel .i-amphtml-story-fwd-replay>.i-amphtml-story-button-move{background-size:52%!important;background-position-y:56%!important}amp-story.i-amphtml-story-desktop-one-panel .i-amphtml-story-button-hidden{visibility:visible!important;opacity:.1!important;pointer-events:none!important}.i-amphtml-story-desktop-fullbleed .i-amphtml-story-button-move{height:48px!important;width:48px!important;margin:auto 12px!important;background-color:transparent!important;background-size:auto!important;filter:drop-shadow(0 0 16px rgba(0,0,0,0.5))!important;opacity:1!important}.prev-container>.i-amphtml-story-button-move,[dir=rtl] .i-amphtml-story-fwd-next>.i-amphtml-story-button-move{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m15.7 22-9.5-9.5L15.7 3l-3-3L.4 12.6 12.8 25'/%3E%3C/svg%3E\")!important;background-position:45% 50%!important;left:0!important;right:auto!important}.i-amphtml-story-desktop-fullbleed .prev-container>.i-amphtml-story-button-move,.i-amphtml-story-desktop-fullbleed[dir=rtl] .i-amphtml-story-fwd-next>.i-amphtml-story-button-move{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='%23FFF'%3E%3Cpath d='M11.7 3.9 9.9 2 0 12l9.9 9.9 1.8-1.8L3.5 12z'/%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3C/svg%3E\")!important;background-position:10px 0!important}.i-amphtml-story-fwd-next>.i-amphtml-story-button-move,[dir=rtl] .prev-container>.i-amphtml-story-button-move{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m.3 3 9.5 9.5L.3 22l3 3 12.4-12.5L3.2 0'/%3E%3C/svg%3E\")!important;background-position:55% 50%!important;left:auto!important;right:0!important}.i-amphtml-story-desktop-fullbleed .i-amphtml-story-fwd-next>.i-amphtml-story-button-move,.i-amphtml-story-desktop-fullbleed[dir=rtl] .prev-container>.i-amphtml-story-button-move{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' fill='%23FFF'%3E%3Cpath d='M11.8 8.2 27.5 24 11.8 39.8 16 44l20-20L16 4z'/%3E%3Cpath fill='none' d='M0 0h48v48H0z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-fwd-replay{pointer-events:none!important}.i-amphtml-story-fwd-replay>.i-amphtml-story-button-move{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath d='M17.6 6.3A8 8 0 0 0 4 12a8 8 0 0 0 15.7 2h-2a6 6 0 1 1-1.5-6.2L13 11h7V4l-2.4 2.4z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important;background-position:50%;background-size:32px 32px!important}.i-amphtml-story-desktop-fullbleed .i-amphtml-story-fwd-replay>.i-amphtml-story-button-move{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' fill='%23FFF'%3E%3Cpath d='M0 0h48v48H0z' fill='none'/%3E%3Cpath d='M24 10V2L14 12l10 10v-8a12 12 0 1 1-12 12H8a16 16 0 1 0 16-16z'/%3E%3C/svg%3E\")!important;background-size:auto!important}.i-amphtml-story-fwd-more>.i-amphtml-story-button-move{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3C/svg%3E\")!important;background-position:50%;background-size:32px 32px!important}.i-amphtml-story-desktop-fullbleed .i-amphtml-story-fwd-more>.i-amphtml-story-button-move{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' fill='%23FFF'%3E%3Cpath d='M0 0h48v48H0z' fill='none'/%3E%3Cpath d='M12 20a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm24 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-12 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8z'/%3E%3C/svg%3E\")!important;background-size:auto!important}.i-amphtml-story-button-hidden{visibility:hidden!important;opacity:0!important;pointer-events:none!important}:root{--story-page-vw:1vw!important;--story-page-vh:var(--story-dvh,1vh)!important;--story-page-vmin:min(var(--story-page-vw),var(--story-page-vh))!important;--story-page-vmax:max(var(--story-page-vw),var(--story-page-vh))!important;--story-100dvh:calc(var(--story-dvh, 1vh)*100)!important;font-size:calc(var(--story-page-vh, 8px)*2.5)}@supports (height:1dvh){:root{--story-dvh:1dvh!important}}body{animation:none!important;-webkit-animation:none!important;-moz-animation:none!important;-ms-animation:none!important}amp-story,amp-story-cta-layer,amp-story-page{contain:strict!important;overflow:hidden!important;-webkit-touch-callout:none!important}amp-story-grid-layer{contain:size layout!important;-webkit-touch-callout:none!important}amp-story amp-consent{position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;background:none!important;z-index:initial!important}@media (prefers-reduced-motion:reduce){*,:after,:before{animation-duration:0s!important;transition-duration:0s!important}}amp-consent.amp-hidden{display:none!important}.i-amphtml-story-system-reset,.i-amphtml-story-system-reset *{border:none!important;box-sizing:initial!important;color:initial!important;font-family:Roboto,sans-serif!important;font-size:initial!important;font-weight:initial!important;height:auto!important;margin:0!important;padding:0!important;text-align:start!important;text-shadow:none!important;width:auto!important}amp-story{position:relative!important;text-rendering:geometricPrecision!important;-webkit-user-select:none!important;-ms-user-select:none!important;user-select:none!important;-ms-touch-action:manipulation!important;touch-action:manipulation!important}amp-story,html:root,html:root body{height:100%!important;width:100%!important}html:root,html:root body{font-size:calc(var(--story-page-vh, 8px)*2.5);margin:0!important;padding:0!important;border:0!important;cursor:auto!important;-webkit-tap-highlight-color:rgba(0,0,0,0)!important}h4,p{font-size:1rem}h1{font-size:2rem}h2{font-size:1.5rem}h3{font-size:1.17rem}h5{font-size:0.83rem}h6{font-size:0.67rem}html:root #i-amphtml-wrapper body{border-top:none!important;overflow:hidden!important}amp-story[standalone]{-ms-flex-item-align:center!important;align-self:center!important;box-shadow:2px 2px 20px rgba(0,0,0,0.5)!important;height:100%!important;justify-self:center!important;max-height:initial!important;max-width:initial!important;min-height:initial!important;min-width:initial!important}amp-story[standalone].amp-notbuilt{min-height:1px!important}amp-story[standalone]:-webkit-full-screen{height:100vh!important;max-height:none!important;max-width:none!important}amp-story[standalone]:-ms-fullscreen{height:100vh!important;max-height:none!important;max-width:none!important}amp-story[standalone]:fullscreen{height:100vh!important;max-height:none!important;max-width:none!important}amp-story[hide]{display:none!important}amp-story .amp-video-eq{height:14px!important;width:14px!important}amp-story .amp-video-eq .amp-video-eq-col{margin-right:2px!important}amp-story .amp-video-eq .amp-video-eq-col:last-child{margin-right:0!important}.i-amphtml-story-no-audio-ui .amp-video-eq,amp-story .amp-video-eq:not(.amp-video-eq-play){display:none!important}amp-story-page{bottom:0!important;height:auto!important;left:0!important;position:absolute!important;right:0!important;top:0!important;opacity:1!important;-ms-touch-action:none!important;touch-action:none!important;transition:none!important;z-index:0!important}amp-story-page[active]{z-index:1!important}amp-story-page:not(:first-of-type):not([distance]):not([active]),amp-story-page[distance]:not([active]){transform:translateY(1000vh)!important}amp-story-page[active],amp-story-page[distance=\"0\"][distance],amp-story-page[distance=\"1\"][distance]{transform:translateY(0)!important}amp-story-page[distance=\"2\"][distance],amp-story.i-amphtml-experiment-story-load-inactive-outside-viewport:not([desktop]) amp-story-page[distance=\"1\"]:not(.i-amphtml-story-page-loaded):not(.i-amphtml-visited){transform:translateY(var(--story-100dvh))!important}amp-story-page [data-text-background-color]{border-radius:3px!important;line-height:1.5em!important;padding:2px 4px!important;text-indent:0!important;box-decoration-break:clone!important;-webkit-box-decoration-break:clone!important}amp-story-cta-layer{display:block!important;top:80%!important;margin:0!important;z-index:3!important}amp-story-cta-layer,amp-story-grid-layer{position:absolute!important;right:0!important;bottom:0!important;left:0!important}amp-story-grid-layer{box-sizing:border-box!important;display:grid!important;top:0!important;z-index:2!important;pointer-events:none!important}:root:not(.i-amphtml-story-vertical) amp-story{position:absolute!important;top:0;left:0}amp-story-grid-layer[anchor*=left]{margin-left:0!important}amp-story-grid-layer[anchor*=top]{margin-top:0!important}amp-story-grid-layer[anchor*=bottom]{margin-bottom:0!important}amp-story-grid-layer[anchor*=right]{margin-right:0!important;margin-left:auto!important}amp-story-grid-layer amp-video:after{content:\"\"!important;position:absolute!important;height:100%!important;width:100%!important;top:0!important;left:0!important}[template=fill] amp-img img,[template=fill] amp-video video{position:absolute!important}amp-story-grid-layer amp-img img{pointer-events:none!important}amp-story-page[active]:not(.i-amphtml-layout) amp-video.i-amphtml-poolbound{display:none!important}amp-story-grid-layer>*{pointer-events:auto!important}amp-story-grid-layer a *{pointer-events:none!important}amp-story-grid-layer .i-amphtml-embedded-component:after{content:\"\"!important;position:absolute!important;height:100%!important;width:100%!important;top:0!important;left:0!important}.i-amphtml-story-grid-template-with-full-bleed-animation{position:absolute!important;display:block!important;padding:0!important}[template=fill]:not(.i-amphtml-story-grid-template-with-full-bleed-animation)>*{bottom:0!important;height:auto!important;left:0!important;position:absolute!important;right:0!important;top:0!important;width:auto!important}[template=vertical]{grid-auto-flow:row!important;grid-template-columns:100%!important}[template=horizontal]{grid-auto-flow:column!important;grid-template-rows:100%!important}[template=thirds]{height:100%!important;grid-template-rows:33% 33% 33%!important;grid-template-areas:\"upper-third\" \"middle-third\" \"lower-third\"!important}[aspect-ratio],[preset]{margin:auto;width:var(--i-amphtml-story-layer-width,100%);height:var(--i-amphtml-story-layer-height,100%);font-size:calc(var(--i-amphtml-story-layer-height)/10);margin-left:calc(var(--story-page-vw, 1%)*100*0.5 - var(--i-amphtml-story-layer-width, 100%)*0.5);--i-amphtml-aspect-ratio-float:calc(var(--aspect-ratio))!important;--i-amphtml-story-page-width:calc(var(--story-page-vw, 1vw)*100)!important;--i-amphtml-story-page-height:calc(var(--story-page-vh, 1vh)*100)!important;--i-amphtml-story-unscaled-width:min(var(--i-amphtml-story-page-width),calc(var(--i-amphtml-story-page-height)*var(--i-amphtml-aspect-ratio-float)))!important;--i-amphtml-story-unscaled-height:min(var(--i-amphtml-story-page-height),calc(var(--i-amphtml-story-page-width)/var(--i-amphtml-aspect-ratio-float)))!important;--i-amphtml-story-layer-width:calc(var(--i-amphtml-story-unscaled-width)*var(--scaling-factor, 1))!important;--i-amphtml-story-layer-height:calc(var(--i-amphtml-story-unscaled-height)*var(--scaling-factor, 1))!important}[preset=\"2021-background\"],[preset=\"2021-foreground\"]{--aspect-ratio:69/116!important}[preset=\"2021-background\"]{--scaling-factor:1.142!important}.i-amphtml-story-dev-logs-button[data-count=\"0\"]{display:none!important}.i-amphtml-story-dev-logs-button{background-position:50%!important;background-repeat:no-repeat!important}.i-amphtml-story-dev-logs-button:after{background-color:#fff!important;border-radius:6px!important;box-sizing:border-box!important;color:#444;content:attr(data-count)!important;display:inline-block!important;font-family:Roboto!important;font-size:11px!important;height:12px!important;line-height:12px!important;padding:0 6px!important;position:absolute!important;right:0!important;top:6px!important}.i-amphtml-story-error-button{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23DB4437'%3E%3Cpath d='M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm5 13.6L15.6 17 12 13.4 8.4 17 7 15.6l3.6-3.6L7 8.4 8.4 7l3.6 3.6L15.6 7 17 8.4 13.4 12l3.6 3.6z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-warning-button{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFC107'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-success-button{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%230F9D58'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-2 15-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z'/%3E%3C/svg%3E\")!important}amp-story[standalone] .i-amphtml-story-developer-log{background:rgba(0,0,0,0.85)!important;bottom:0!important;box-sizing:border-box!important;color:#fff!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;font-family:Roboto!important;left:0!important;max-height:45%!important;padding:0!important;position:fixed!important;right:0!important;text-align:start!important;z-index:100002!important}.i-amphtml-story-developer-log-header{-ms-flex-align:center!important;align-items:center!important;background:rgb(3,169,244,0.85)!important;display:-ms-flexbox!important;display:flex!important;font-weight:700!important;-ms-flex-pack:justify!important;justify-content:space-between!important;padding:12px 20px!important;text-align:center!important}.i-amphtml-story-developer-log-close,.i-amphtml-story-developer-log-header{-ms-flex-positive:0!important;flex-grow:0!important;-ms-flex-negative:0!important;flex-shrink:0!important}.i-amphtml-story-developer-log-close{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23FFF' height='24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 6.4 17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-developer-log-context{color:#000!important;font-family:Roboto Mono!important}.i-amphtml-story-developer-log-entries{list-style-type:none!important;margin:0!important;overflow-x:hidden!important;overflow-y:auto!important;padding:0!important}.i-amphtml-story-developer-log-entry{-ms-flex-align:center!important;align-items:center!important;border-bottom:1px solid hsla(0,0%,100%,0.5)!important;display:-ms-flexbox!important;display:flex!important;padding:20px!important}.i-amphtml-story-developer-log-entry:before{background-position:50%!important;background-repeat:no-repeat!important;background-size:cover!important;content:\"\";display:inline-block!important;-ms-flex-positive:0!important;flex-grow:0!important;-ms-flex-negative:0!important;flex-shrink:0!important;height:32px!important;margin-right:20px!important;width:32px!important}.i-amphtml-story-developer-log-entry-error:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23DB4437'%3E%3Cpath d='M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm5 13.6L15.6 17 12 13.4 8.4 17 7 15.6l3.6-3.6L7 8.4 8.4 7l3.6 3.6L15.6 7 17 8.4 13.4 12l3.6 3.6z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-developer-log-entry-warning:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFC107'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-developer-log-entry-success:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%230F9D58'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-2 15-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-toast{position:absolute!important;bottom:0!important;left:0!important;right:0!important;display:inline-block!important;padding:1.16em 1.33em!important;line-height:1.33!important;color:#fff!important;background:#212121!important;animation:toast 2.2s!important;animation-fill-mode:both!important;font-family:Roboto,sans-serif!important;font-weight:400!important;font-size:12px!important;max-width:640px!important;z-index:100004!important}@media (min-width:640px){.i-amphtml-story-toast{right:auto!important;font-size:14px!important;margin:0 auto 1.16em 1.16em!important;border-radius:6px}}@keyframes toast{0%{transform:translateY(100px);easing:cubic-bezier(0.0,0.0,0.2,1)}8%{transform:translateY(0)}92%{transform:translateY(0);easing:cubic-bezier(0.4,0.0,1,1)}to{transform:translateY(100px)}}.i-amphtml-story-copy-successful{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-2 15-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z'/%3E%3C/svg%3E\")!important;background-repeat:no-repeat!important;background-size:16px 16px!important;padding-left:24px!important;color:#fff!important;display:-ms-flexbox!important;display:flex!important}.i-amphtml-story-copy-url{-ms-flex:1!important;flex:1!important;color:hsla(0,0%,100%,0.5)!important;margin-left:40px!important;text-overflow:ellipsis!important;overflow:hidden!important;white-space:nowrap!important}.i-amphtml-story-spinner,amp-story .amp-video-eq{right:12px!important;bottom:12px!important}[dir=rtl] .i-amphtml-story-spinner,[dir=rtl] amp-story .amp-video-eq{left:12px!important;right:auto!important}.i-amphtml-story-spinner{display:inline-block!important;position:absolute!important;width:24px!important;height:24px!important;z-index:10!important}.i-amphtml-story-spinner-container{width:100%!important;height:100%!important;direction:ltr!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-container{animation:container-rotate 1294ms linear infinite!important}@keyframes container-rotate{to{transform:rotate(360deg)}}.i-amphtml-story-spinner-layer{position:absolute!important;width:100%!important;height:100%!important;opacity:0!important;white-space:nowrap!important;color:#fff!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-layer{animation-name:fill-unfill-rotate!important;animation-duration:4400ms!important;animation-timing-function:cubic-bezier(0.4,0.0,0.2,1)!important;animation-iteration-count:infinite!important;opacity:1!important;filter:drop-shadow(0px 1px 3px rgba(0,0,0,0.25))!important}@keyframes fill-unfill-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(1080deg)}}.i-amphtml-story-spinner-circle-clipper{display:inline-block!important;position:relative!important;width:50%!important;height:100%!important;overflow:hidden!important}.i-amphtml-story-spinner-layer:after{left:45%!important;width:10%!important;border-top-style:solid!important}.i-amphtml-story-spinner-circle-clipper:after,.i-amphtml-story-spinner-layer:after{content:\"\"!important;box-sizing:border-box!important;position:absolute!important;top:0!important;border-width:3px!important;border-radius:50%!important}.i-amphtml-story-spinner-circle-clipper:after{bottom:0!important;width:200%!important;border-style:solid!important;border-bottom-color:transparent!important}.i-amphtml-story-spinner-circle-clipper.left:after{left:0!important;border-right-color:transparent!important;transform:rotate(129deg)!important}.i-amphtml-story-spinner-circle-clipper.right:after{left:-100%!important;border-left-color:transparent!important;transform:rotate(-129deg)!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-circle-clipper:after{animation-duration:1100ms!important;animation-timing-function:cubic-bezier(0.4,0.0,0.2,1)!important;animation-iteration-count:infinite!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-circle-clipper.left:after{animation-name:left-spin!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-circle-clipper.right:after{animation-name:right-spin!important}@keyframes left-spin{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@keyframes right-spin{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}.i-amphtml-story-page-error,.i-amphtml-story-page-play-button{display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;position:absolute!important;bottom:0!important;right:0!important;height:40px!important;border:0!important;margin:8px 0 0 8px!important;padding:0!important;animation:play-button-fly-in 0.4s cubic-bezier(0.4,0.0,0.2,1)!important;background-color:transparent!important;z-index:10000!important}@keyframes play-button-fly-in{0%{opacity:0;transform:translateX(12px)}to{opacity:1;transform:translateX(0)}}.i-amphtml-story-page-error[hidden],.i-amphtml-story-page-play-button[hidden]{display:none!important}.i-amphtml-story-page-error-label,.i-amphtml-story-page-play-label{color:#fff!important;font-family:Roboto,sans-serif!important;font-size:16px!important;text-shadow:0px 0px 6px rgba(0,0,0,0.36)!important}.i-amphtml-story-page-error-icon,.i-amphtml-story-page-play-icon{display:inline-block!important;height:24px!important;width:24px!important;margin:0 8px!important;border-radius:24px!important;filter:drop-shadow(0px 0px 6px rgba(0,0,0,0.36))!important}.i-amphtml-story-page-error-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFF'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-page-play-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 48 48' fill='%23FFF'%3E%3Cpath d='M0 0h48v48H0z' fill='none'/%3E%3Cpath d='M24 4a20 20 0 1 0 0 40 20 20 0 0 0 0-40zm-4 29V15l12 9-12 9z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-page-attachment-active:after{content:\"\"!important;display:block!important;left:0!important;top:0!important;bottom:0!important;right:0!important;position:absolute!important;background:#000!important;z-index:3!important;animation:i-amphtml-attachment-overlay-opacity 0.3s cubic-bezier(0.0,0.0,0.2,1) forwards!important}@keyframes i-amphtml-attachment-overlay-opacity{0%{opacity:0}to{opacity:0.5}}.i-amphtml-story-interactive-component{-ms-flex-item-align:center;align-self:center;height:auto!important;pointer-events:none!important;min-width:14em!important;max-width:25em!important;font-size:calc(var(--story-page-vmin)*3);width:100%;--interactive-accent-color:#005af0;--interactive-prompt-background:var(--interactive-accent-color);--interactive-prompt-text-color:#fff;--interactive-prompt-alignment:initial;--i-amphtml-interactive-option-accent-color:var(--interactive-accent-color)!important;--i-amphtml-interactive-option-background-color:#fff!important;--i-amphtml-interactive-options-chip-background-color:var(--i-amphtml-interactive-option-background-color)!important;--i-amphtml-interactive-option-text-color:#55595e!important;--i-amphtml-interactive-theme-border:rgba(85,89,94,0.2)!important;--i-amphtml-interactive-theme-shading:rgba(85,89,94,0.2)!important;--i-amphtml-interactive-theme-shading-base:#dedee1!important;--i-amphtml-interactive-theme-shading-flash:rgba(85,89,94,0.5)!important;--i-amphtml-interactive-chip-radius:2em!important;--i-amphtml-interactive-chip-shadow:0px 0px 0px transparent!important;--i-amphtml-interactive-chip-shadow-inset:inset 0px 0px 0px transparent!important;--i-amphtml-interactive-answer-choice-border:var(--interactive-accent-color)!important;--i-amphtml-interactive-answer-choice-background:#fff!important;--i-amphtml-interactive-prompt-text-size:1.375em!important;--i-amphtml-interactive-prompt-line-height:1.3em!important;--i-amphtml-interactive-strong-text-color:#000!important;--i-amphtml-interactive-animation-time:.3s!important;--i-amphtml-interactive-ease-out-curve:cubic-bezier(.3,0,0,1)!important;--i-amphtml-interactive-animation-delay:0s!important;--i-amphtml-interactive-component-shadow:0px 4px 12px rgba(60,64,67,0.08),0px 2px 4px rgba(60,64,67,0.12);--i-amphtml-interactive-prompt-clamp:4!important;--i-amphtml-interactive-results-prompt-margin:20px!important;--i-amphtml-interactive-placeholder-background:rgba(32,33,36,0.2)!important;--i-amphtml-story-interactive-img-quiz-answer-filter:none;--i-amphtml-interactive-img-border:0 0 0 transparent!important}.i-amphtml-story-interactive-component[theme=dark]{--i-amphtml-interactive-option-text-color:#a7adb4!important;--i-amphtml-interactive-option-background-color:#202124!important;--i-amphtml-interactive-theme-border:hsla(212,8%,68%,0.2)!important;--i-amphtml-interactive-theme-shading:hsla(212,8%,68%,0.2)!important;--i-amphtml-interactive-theme-shading-base:#3c3d3f!important;--i-amphtml-interactive-theme-shading-flash:hsla(212,8%,68%,0.5)!important;--i-amphtml-interactive-strong-text-color:#fff!important;--i-amphtml-interactive-placeholder-background:hsla(0,0%,100%,0.2)!important;--i-amphtml-story-interactive-img-quiz-answer-filter:invert(100%)}.i-amphtml-story-interactive-component[chip-style=shadow]{--i-amphtml-interactive-chip-shadow:0px 2px 8px rgba(60,60,60,0.2)!important;--i-amphtml-interactive-chip-shadow-inset:inset 4px 4px 8px rgba(0,0,0,0.2)!important;--i-amphtml-interactive-theme-border:transparent!important}.i-amphtml-story-interactive-component:not(amp-story-interactive-results)[chip-style=transparent]{--i-amphtml-interactive-options-chip-background-color:transparent!important;--interactive-prompt-background:transparent!important;--interactive-prompt-alignment:center;--i-amphtml-interactive-chip-shadow:0px 2px 8px rgba(60,60,60,0.2)!important;--i-amphtml-interactive-chip-shadow-inset:inset 4px 4px 8px rgba(0,0,0,0.2)!important;--i-amphtml-interactive-theme-border:transparent!important;--i-amphtml-interactive-component-shadow:none!important;--i-amphtml-interactive-img-border:0 0 0 0.25em var(--i-amphtml-interactive-option-background-color)!important}.i-amphtml-story-interactive-component[chip-style=shadow][theme=dark]{--i-amphtml-interactive-chip-shadow:0px 2px 8px 0px rgba(0,0,0,0.6)!important;--i-amphtml-interactive-chip-shadow-inset:inset 4px 4px 8px rgba(0,0,0,0.4)!important}.i-amphtml-story-interactive-component[prompt-size=large]{--i-amphtml-interactive-prompt-text-size:1.75em!important;--i-amphtml-interactive-prompt-clamp:3!important}.i-amphtml-story-interactive-component[prompt-size=small]{--i-amphtml-interactive-prompt-text-size:1.125em!important}.i-amphtml-story-interactive-component:not([prompt-text]){--interactive-prompt-background:transparent!important}amp-story-interactive-binary-poll.i-amphtml-story-interactive-component,amp-story-interactive-img-poll.i-amphtml-story-interactive-component,amp-story-interactive-img-quiz.i-amphtml-story-interactive-component,amp-story-interactive-results-detailed.i-amphtml-story-interactive-component,amp-story-interactive-results.i-amphtml-story-interactive-component{max-width:18em!important}amp-story-interactive-img-poll.i-amphtml-story-interactive-component,amp-story-interactive-img-quiz.i-amphtml-story-interactive-component{--interactive-prompt-alignment:center}amp-story-interactive-binary-poll[theme=dark],amp-story-interactive-poll[theme=dark]{--i-amphtml-interactive-option-accent-color:#fff!important}amp-story-interactive-results:not([chip-style=transparent]){--interactive-prompt-text-color:var(--i-amphtml-interactive-strong-text-color)}amp-story-interactive-results[chip-style=transparent]{--i-amphtml-interactive-option-text-color:#000!important;--i-amphtml-interactive-options-chip-background-color:transparent!important;--interactive-prompt-background:transparent;--i-amphtml-interactive-component-shadow:none!important;--interactive-prompt-text-color:#000;--i-amphtml-interactive-results-prompt-margin:0px!important}amp-story-interactive-results[theme=dark][chip-style=transparent]{--i-amphtml-interactive-option-text-color:#fff!important;--interactive-prompt-text-color:#fff}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story.css*/";

  // src/pass.js
  var Pass = /* @__PURE__ */ function() {
    function Pass2(win, handler, opt_defaultDelay) {
      var _this = this;
      this.timer_ = Services.timerFor(win);
      this.handler_ = handler;
      this.defaultDelay_ = opt_defaultDelay || 0;
      this.scheduled_ = -1;
      this.nextTime_ = 0;
      this.running_ = false;
      this.boundPass_ = function() {
        _this.pass_();
      };
    }
    var _proto = Pass2.prototype;
    _proto.isPending = function isPending() {
      return this.scheduled_ != -1;
    };
    _proto.schedule = function schedule(opt_delay) {
      var delay = opt_delay || this.defaultDelay_;
      if (this.running_ && delay < 10) {
        delay = 10;
      }
      var nextTime = Date.now() + delay;
      if (!this.isPending() || nextTime - this.nextTime_ < -10) {
        this.cancel();
        this.nextTime_ = nextTime;
        this.scheduled_ = this.timer_.delay(this.boundPass_, delay);
        return true;
      }
      return false;
    };
    _proto.pass_ = function pass_() {
      this.scheduled_ = -1;
      this.nextTime_ = 0;
      this.running_ = true;
      this.handler_();
      this.running_ = false;
    };
    _proto.cancel = function cancel() {
      if (this.isPending()) {
        this.timer_.cancel(this.scheduled_);
        this.scheduled_ = -1;
      }
    };
    return Pass2;
  }();

  // src/gesture.js
  var PROP_ = "__AMP_Gestures";
  var Gesture = function Gesture2(type, data, time, event) {
    this.type = type;
    this.data = data;
    this.time = time;
    this.event = event;
  };
  var Gestures = /* @__PURE__ */ function() {
    Gestures2.get = function get(element, opt_shouldNotPreventDefault, opt_shouldStopPropagation) {
      if (opt_shouldNotPreventDefault === void 0) {
        opt_shouldNotPreventDefault = false;
      }
      if (opt_shouldStopPropagation === void 0) {
        opt_shouldStopPropagation = false;
      }
      var res = element[PROP_];
      if (!res) {
        res = new Gestures2(element, opt_shouldNotPreventDefault, opt_shouldStopPropagation);
        element[PROP_] = res;
      }
      return res;
    };
    function Gestures2(element, shouldNotPreventDefault, shouldStopPropagation) {
      this.element_ = element;
      this.recognizers_ = [];
      this.tracking_ = [];
      this.ready_ = [];
      this.pending_ = [];
      this.eventing_ = null;
      this.shouldNotPreventDefault_ = shouldNotPreventDefault;
      this.shouldStopPropagation_ = shouldStopPropagation;
      this.wasEventing_ = false;
      this.pass_ = new Pass(getWin(element), this.doPass_.bind(this));
      this.pointerDownObservable_ = new Observable();
      this.overservers_ = Object.create(null);
      this.boundOnTouchStart_ = this.onTouchStart_.bind(this);
      this.boundOnTouchEnd_ = this.onTouchEnd_.bind(this);
      this.boundOnTouchMove_ = this.onTouchMove_.bind(this);
      this.boundOnTouchCancel_ = this.onTouchCancel_.bind(this);
      var win = element.ownerDocument.defaultView;
      var passiveSupported2 = supportsPassiveEventListener(toWin(win));
      this.element_.addEventListener("touchstart", this.boundOnTouchStart_, passiveSupported2 ? {
        passive: true
      } : false);
      this.element_.addEventListener("touchend", this.boundOnTouchEnd_);
      this.element_.addEventListener("touchmove", this.boundOnTouchMove_, passiveSupported2 ? {
        passive: true
      } : false);
      this.element_.addEventListener("touchcancel", this.boundOnTouchCancel_);
      this.passAfterEvent_ = false;
    }
    var _proto = Gestures2.prototype;
    _proto.cleanup = function cleanup() {
      this.element_.removeEventListener("touchstart", this.boundOnTouchStart_);
      this.element_.removeEventListener("touchend", this.boundOnTouchEnd_);
      this.element_.removeEventListener("touchmove", this.boundOnTouchMove_);
      this.element_.removeEventListener("touchcancel", this.boundOnTouchCancel_);
      delete this.element_[PROP_];
      this.pass_.cancel();
    };
    _proto.onGesture = function onGesture(recognizerConstr, handler) {
      var recognizer = new recognizerConstr(this);
      var type = recognizer.getType();
      var overserver = this.overservers_[type];
      if (!overserver) {
        this.recognizers_.push(recognizer);
        overserver = new Observable();
        this.overservers_[type] = overserver;
      }
      return overserver.add(handler);
    };
    _proto.removeGesture = function removeGesture(recognizerConstr) {
      var type = new recognizerConstr(this).getType();
      var overserver = this.overservers_[type];
      if (overserver) {
        overserver.removeAll();
        var index = findIndex(this.recognizers_, function(e) {
          return e.getType() == type;
        });
        if (index < 0) {
          return false;
        }
        this.recognizers_.splice(index, 1);
        this.ready_.splice(index, 1);
        this.pending_.splice(index, 1);
        this.tracking_.splice(index, 1);
        delete this.overservers_[type];
        return true;
      } else {
        return false;
      }
    };
    _proto.onPointerDown = function onPointerDown(handler) {
      return this.pointerDownObservable_.add(handler);
    };
    _proto.onTouchStart_ = function onTouchStart_(event) {
      var now = Date.now();
      this.wasEventing_ = false;
      this.pointerDownObservable_.fire(event);
      for (var i = 0; i < this.recognizers_.length; i++) {
        if (this.ready_[i]) {
          continue;
        }
        if (this.pending_[i] && this.pending_[i] < now) {
          this.stopTracking_(i);
        }
        if (this.recognizers_[i].onTouchStart(event)) {
          this.startTracking_(i);
        }
      }
      this.afterEvent_(event);
    };
    _proto.onTouchMove_ = function onTouchMove_(event) {
      var now = Date.now();
      for (var i = 0; i < this.recognizers_.length; i++) {
        if (!this.tracking_[i]) {
          continue;
        }
        if (this.pending_[i] && this.pending_[i] < now) {
          this.stopTracking_(i);
          continue;
        }
        if (!this.recognizers_[i].onTouchMove(event)) {
          this.stopTracking_(i);
        }
      }
      this.afterEvent_(event);
    };
    _proto.onTouchEnd_ = function onTouchEnd_(event) {
      var now = Date.now();
      for (var i = 0; i < this.recognizers_.length; i++) {
        if (!this.tracking_[i]) {
          continue;
        }
        if (this.pending_[i] && this.pending_[i] < now) {
          this.stopTracking_(i);
          continue;
        }
        this.recognizers_[i].onTouchEnd(event);
        var isReady = !this.pending_[i];
        var isExpired = this.pending_[i] < now;
        var isEventing = this.eventing_ == this.recognizers_[i];
        if (!isEventing && (isReady || isExpired)) {
          this.stopTracking_(i);
        }
      }
      this.afterEvent_(event);
    };
    _proto.onTouchCancel_ = function onTouchCancel_(event) {
      for (var i = 0; i < this.recognizers_.length; i++) {
        this.cancelEventing_(i);
      }
      this.afterEvent_(event);
    };
    _proto.signalReady_ = function signalReady_(recognizer, offset) {
      if (this.eventing_) {
        recognizer.acceptCancel();
        return;
      }
      var now = Date.now();
      for (var i = 0; i < this.recognizers_.length; i++) {
        if (this.recognizers_[i] == recognizer) {
          this.ready_[i] = now + offset;
          this.pending_[i] = 0;
        }
      }
      this.passAfterEvent_ = true;
    };
    _proto.signalPending_ = function signalPending_(recognizer, timeLeft) {
      if (this.eventing_) {
        recognizer.acceptCancel();
        return;
      }
      var now = Date.now();
      for (var i = 0; i < this.recognizers_.length; i++) {
        if (this.recognizers_[i] == recognizer) {
          this.pending_[i] = now + timeLeft;
        }
      }
    };
    _proto.signalEnd_ = function signalEnd_(recognizer) {
      if (this.eventing_ == recognizer) {
        this.eventing_ = null;
        this.wasEventing_ = true;
      }
    };
    _proto.signalEmit_ = function signalEmit_(recognizer, data, event) {
      devAssert2(this.eventing_ == recognizer, "Recognizer is not currently allowed: %s", recognizer.getType());
      var overserver = this.overservers_[recognizer.getType()];
      if (overserver) {
        overserver.fire(new Gesture(recognizer.getType(), data, Date.now(), event));
      }
    };
    _proto.afterEvent_ = function afterEvent_(event) {
      var cancelEvent = !!this.eventing_ || this.wasEventing_;
      this.wasEventing_ = false;
      if (!cancelEvent) {
        var now = Date.now();
        for (var i = 0; i < this.recognizers_.length; i++) {
          if (this.ready_[i] || this.pending_[i] && this.pending_[i] >= now) {
            cancelEvent = true;
            break;
          }
        }
      }
      if (cancelEvent) {
        event.stopPropagation();
        if (!this.shouldNotPreventDefault_) {
          event.preventDefault();
        }
      } else if (this.shouldStopPropagation_) {
        event.stopPropagation();
      }
      if (this.passAfterEvent_) {
        this.passAfterEvent_ = false;
        this.doPass_();
      }
    };
    _proto.doPass_ = function doPass_() {
      var now = Date.now();
      var readyIndex = -1;
      for (var i = 0; i < this.recognizers_.length; i++) {
        if (!this.ready_[i]) {
          if (this.pending_[i] && this.pending_[i] < now) {
            this.stopTracking_(i);
          }
          continue;
        }
        if (readyIndex == -1 || this.ready_[i] > this.ready_[readyIndex]) {
          readyIndex = i;
        }
      }
      if (readyIndex == -1) {
        return;
      }
      var waitTime = 0;
      for (var _i = 0; _i < this.recognizers_.length; _i++) {
        if (this.ready_[_i] || !this.tracking_[_i]) {
          continue;
        }
        waitTime = Math.max(waitTime, this.pending_[_i] - now);
      }
      if (waitTime < 2) {
        this.startEventing_(readyIndex);
        return;
      }
      this.pass_.schedule(waitTime);
    };
    _proto.startEventing_ = function startEventing_(index) {
      var recognizer = this.recognizers_[index];
      for (var i = 0; i < this.recognizers_.length; i++) {
        if (i != index) {
          this.cancelEventing_(i);
        }
      }
      this.ready_[index] = 0;
      this.pending_[index] = 0;
      this.eventing_ = recognizer;
      recognizer.acceptStart();
    };
    _proto.startTracking_ = function startTracking_(index) {
      this.tracking_[index] = true;
      this.pending_[index] = 0;
    };
    _proto.stopTracking_ = function stopTracking_(index) {
      this.tracking_[index] = false;
      this.pending_[index] = 0;
      if (!this.ready_[index]) {
        this.recognizers_[index].acceptCancel();
      }
    };
    _proto.cancelEventing_ = function cancelEventing_(index) {
      this.ready_[index] = 0;
      this.stopTracking_(index);
    };
    return Gestures2;
  }();
  var GestureRecognizer = /* @__PURE__ */ function() {
    function GestureRecognizer2(type, manager) {
      this.type_ = type;
      this.manager_ = manager;
    }
    var _proto2 = GestureRecognizer2.prototype;
    _proto2.getType = function getType() {
      return this.type_;
    };
    _proto2.signalReady = function signalReady(offset) {
      this.manager_.signalReady_(this, offset);
    };
    _proto2.signalPending = function signalPending(timeLeft) {
      this.manager_.signalPending_(this, timeLeft);
    };
    _proto2.signalEnd = function signalEnd() {
      this.manager_.signalEnd_(this);
    };
    _proto2.signalEmit = function signalEmit(data, event) {
      this.manager_.signalEmit_(this, data, event);
    };
    _proto2.acceptStart = function acceptStart() {
    };
    _proto2.acceptCancel = function acceptCancel() {
    };
    _proto2.onTouchStart = function onTouchStart(unusedEvent) {
      return false;
    };
    _proto2.onTouchMove = function onTouchMove(unusedEvent) {
      return false;
    };
    _proto2.onTouchEnd = function onTouchEnd(unusedEvent) {
    };
    return GestureRecognizer2;
  }();

  // build/amp-story-info-dialog-1.0.css.js
  var CSS8 = ":host{all:initial!important;color:initial!important}.amp-social-share-facebook{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M212 197h-37v60h37v176h70V257h50l5-60h-55v-33c0-14 3-20 17-20h38V83h-49c-52 0-76 23-76 67v47z'/%3E%3C/svg%3E\")}.amp-social-share-pinterest{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M267 77c-101 0-151 71-151 131 0 36 14 69 43 81 5 2 9 0 11-6l4-16c1-6 1-8-3-12-8-10-14-23-14-42 0-53 40-101 104-101 57 0 88 35 88 81 0 61-27 112-67 112-22 0-39-18-33-40 6-27 18-56 18-75 0-17-9-32-28-32-23 0-41 24-41 55 0 20 7 33 7 33l-27 115c-9 34-2 76-1 80 0 3 4 3 5 1 2-2 29-35 38-69l15-58c7 14 29 27 51 27 68 0 114-62 114-145 0-62-53-120-133-120z'/%3E%3C/svg%3E\")}.amp-social-share-linkedin{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M186.4 142.4c0 19-15.3 34.5-34.2 34.5-18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5 18.9 0 34.2 15.5 34.2 34.5zm-5 58.9h-57.8v186.8h57.8V201.3zm92.4 0h-55.4v186.8h55.4v-98c0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9v98H398V269.8c0-50-28.3-74.2-68-74.2-39.6 0-56.3 30.9-56.3 30.9v-25.2h.1z'/%3E%3C/svg%3E\")}.amp-social-share-email{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M101 142v229h310V142H101zm275 26-120 91-120-91h240zm-248 26 64 49-64 64V194zm0 150 85-85 43 33 43-33 85 85H128zm256-36-64-65 64-49v114z'/%3E%3C/svg%3E\")}.amp-social-share-twitter{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h400v400H0z'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M153.6 301.6c94.4 0 146-78.2 146-146 0-2.2 0-4.4-.2-6.6a104.4 104.4 0 0 0 25.6-26.5 102.4 102.4 0 0 1-29.5 8 51.5 51.5 0 0 0 22.6-28.3 102.8 102.8 0 0 1-32.6 12.4 51.3 51.3 0 0 0-87.4 46.8 145.6 145.6 0 0 1-105.7-53.6 51.3 51.3 0 0 0 15.9 68.5 51 51 0 0 1-23.3-6.4v.6a51.3 51.3 0 0 0 41.1 50.3 51.2 51.2 0 0 1-23.1.9 51.4 51.4 0 0 0 48 35.6 103 103 0 0 1-63.8 22 104.4 104.4 0 0 1-12.2-.7 145.2 145.2 0 0 0 78.6 23'/%3E%3C/g%3E%3C/svg%3E\")}.amp-social-share-tumblr{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M211 80c-2 19-7 34-13 46a96 96 0 0 1-59 50v50h39v125c0 16 1 28 5 37 3 8 9 16 18 24s20 13 32 17c13 5 27 7 43 7a174 174 0 0 0 81-20v-56a97 97 0 0 1-54 18c-10 0-19-3-27-7-6-4-10-8-12-14s-3-19-3-40v-91h85v-56h-85V80h-50z'/%3E%3C/svg%3E\")}.amp-social-share-whatsapp{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='46'%3E%3Cpath fill='%23FFF' d='M35.4 10.4a18.27 18.27 0 0 0-31.2 13c0 3.2.9 6.3 2.4 9.1L4 42l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2a18.4 18.4 0 0 0 13-31.3zM22.5 38.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L9.9 32l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9 7.2-4.4 16.5-2.3 20.9 4.9 4.4 7.2 2.3 16.5-4.9 20.9-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2l-1.5 1.7c-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6a5.1 5.1 0 0 0-.6 5.4l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5.2-.2.4-.4.5-.6.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z'/%3E%3C/svg%3E\")}.amp-social-share-line{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M443 233c0-84-84-152-188-152S67 149 67 233c0 76 67 139 157 151 7 1 15 4 17 9s1 12 1 17l-3 16c-1 5-4 19 16 10s108-63 148-109c27-30 40-60 40-94zm-254 45a4 4 0 0 1-4 4h-53a4 4 0 0 1-2-1 4 4 0 0 1-1-3v-82a4 4 0 0 1 4-3h13a4 4 0 0 1 3 3v65h36a4 4 0 0 1 4 4zm32 0a4 4 0 0 1-4 4h-13a4 4 0 0 1-4-4v-82a4 4 0 0 1 4-3h13a4 4 0 0 1 4 3zm90 0a4 4 0 0 1-3 4h-13a4 4 0 0 1-1 0h-1v-1a3 3 0 0 1-1-1l-38-50v48a4 4 0 0 1-4 4h-13a4 4 0 0 1-4-4v-82a4 4 0 0 1 4-3h16v1l38 51v-49a4 4 0 0 1 4-3h13a4 4 0 0 1 3 3zm73-69a4 4 0 0 1-3 4h-36v14h36a4 4 0 0 1 3 4v13a4 4 0 0 1-3 4h-36v13h36a4 4 0 0 1 3 4v13a4 4 0 0 1-3 4h-53a4 4 0 0 1-3-1 4 4 0 0 1-1-3v-82a4 4 0 0 1 1-2 4 4 0 0 1 3-1h53a4 4 0 0 1 3 3z' data-name='\u30EC\u30A4\u30E4\u30FC 1'/%3E%3C/svg%3E\")}.amp-social-share-sms{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='29'%3E%3Cpath fill='none' stroke='%23FFF' stroke-width='3' d='M8.7 26v-5.7H2V2h26v18.4H15.9z'/%3E%3C/svg%3E\")}.amp-social-share-system{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23fff'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11A2.99 2.99 0 0 0 21 5a3 3 0 1 0-5.91.7L8.04 9.81A2.99 2.99 0 0 0 3 12a3 3 0 0 0 5.04 2.19l7.12 4.16A2.92 2.92 0 1 0 18 16.08z'/%3E%3C/svg%3E\")}amp-social-share{background-repeat:no-repeat;background-position:50%;background-size:contain;text-decoration:none;cursor:pointer;position:relative}amp-social-share:focus{outline:2px solid #0389ff;outline-offset:2px}.amp-social-share-twitter{background-color:#1da1f2}.amp-social-share-facebook{background-color:#32529f}.amp-social-share-pinterest{background-color:#e60023}.amp-social-share-linkedin{background-color:#0077b5}.amp-social-share-tumblr{background-color:#3c5a77}.amp-social-share-email{background-color:#000}.amp-social-share-whatsapp{background-color:#25d366}.amp-social-share-line{background-color:#52b448}.amp-social-share-sms{background-color:#ca2b63}.amp-social-share-system{background-color:#000}.i-amphtml-story-share-widget{display:block!important;margin:16px 8px!important}.i-amphtml-story-no-sharing .i-amphtml-story-share-widget{display:none!important}.i-amphtml-story-share-widget-scrollable{padding:16px 0!important;overflow:auto!important}.i-amphtml-story-share-widget::-webkit-scrollbar{width:0px!important;background:transparent!important}.i-amphtml-story-share-list{list-style:none!important;padding:0 8px!important;margin:0!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:wrap!important;flex-wrap:wrap!important;width:100%!important}.i-amphtml-story-share-item{width:48px!important;height:66px!important;padding:0 16px!important;margin-bottom:12px!important}@media (max-width:410px){.i-amphtml-story-share-item{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;min-width:60px!important;width:25%!important}}@media (min-width:410px) and (max-width:500px){.i-amphtml-story-share-item{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;width:20%!important}}@media (min-width:500px) and (max-width:720px){.i-amphtml-story-share-item{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;width:16.66%!important}}.i-amphtml-story-share-widget-scrollable .i-amphtml-story-share-list{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.i-amphtml-story-share-widget-scrollable>*>.i-amphtml-story-share-item{display:block!important;margin:0!important;padding:0 16px!important;min-width:auto!important}.i-amphtml-story-share-item:empty{display:none!important}.i-amphtml-story-share-icon{box-sizing:border-box!important;position:relative!important;width:48px!important;height:48px!important;display:block!important;cursor:pointer!important;border-radius:4px!important;overflow:visible!important;background-position:8px 8px!important;background-size:32px 32px!important;background-repeat:no-repeat!important}.i-amphtml-story-share-icon.amp-social-share-facebook{background-size:38px 38px!important;background-position:5px 5px!important}.i-amphtml-story-share-icon:focus{outline:2px solid #0389ff!important;outline-offset:2px!important}.i-amphtml-story-share-icon[type=email]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M20 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important;background-color:#9aa0a6!important}.i-amphtml-story-share-icon[type=system]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3C/svg%3E\")!important;background-color:#9aa0a6!important}.i-amphtml-story-share-icon-link{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3.9 12c0-1.7 1.4-3.1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4a3.1 3.1 0 0 1 0 6.2h-4V17h4a5 5 0 0 0 0-10z'/%3E%3C/svg%3E\")!important;background-color:#9aa0a6!important}.i-amphtml-story-share-icon .i-amphtml-story-share-label{position:absolute!important;top:48px!important;left:0!important;width:100%!important;color:rgba(0,0,0,0.87)!important;padding-top:5px!important;text-transform:capitalize!important;font-family:Roboto,sans-serif!important;font-weight:400!important;line-height:13px!important;font-size:11px!important;text-align:center!important}.i-amphtml-story-info-dialog{position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;z-index:100001!important;transform:translate3d(0,-100%,0)!important;transition-delay:0.15s!important}.i-amphtml-story-info-dialog-visible{transform:translateZ(0)!important;transition-delay:0s!important}.i-amphtml-story-info-dialog:before{content:\"\"!important;position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;background:#000!important;opacity:0!important;transition:opacity 0.15s cubic-bezier(0.4,0.0,1,1)!important}.i-amphtml-story-info-dialog.i-amphtml-story-info-dialog-visible:before{opacity:0.55!important;transition:opacity 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-info-dialog-container{position:absolute!important;top:0!important;left:0!important;right:0!important;height:auto!important;background:#fff!important;border-radius:0 0 8px 8px!important;transform:translate3d(0,-100%,0)!important;transition:transform 0.15s cubic-bezier(0.4,0.0,1,1)!important;padding:20px!important;font-family:Roboto,sans-serif!important}.i-amphtml-story-info-dialog-visible .i-amphtml-story-info-dialog-container{transform:translateZ(0)!important;transition:transform 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-info-heading{display:block!important;font-size:14px!important;font-weight:700!important;margin:0 0 8px!important}.i-amphtml-story-info-link{color:#000!important;display:block!important;margin:0!important;opacity:0.64!important;font-size:12px!important;text-decoration:none!important}.i-amphtml-story-info-moreinfo{color:#4285f4!important;display:none!important;font-family:Roboto-Medium,sans-serif!important;font-size:12px!important;letter-spacing:0.5px!important;margin:16px 0 0;text-decoration:none!important}.i-amphtml-story-info-moreinfo.i-amphtml-story-info-moreinfo-visible{display:block!important}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story-info-dialog.css*/";

  // extensions/amp-story/1.0/amp-story-info-dialog.js
  var DIALOG_VISIBLE_CLASS = "i-amphtml-story-info-dialog-visible";
  var MOREINFO_VISIBLE_CLASS = "i-amphtml-story-info-moreinfo-visible";
  var InfoDialog = /* @__PURE__ */ function() {
    function InfoDialog2(win, parentEl) {
      this.win_ = win;
      this.element_ = null;
      this.innerContainerEl_ = null;
      this.isBuilt_ = false;
      this.storeService_ = getStoreService(this.win_);
      this.analyticsService_ = getAnalyticsService(this.win_, parentEl);
      this.parentEl_ = parentEl;
      this.mutator_ = Services.mutatorForDoc(getAmpdoc(this.win_.document));
      this.moreInfoLinkEl_ = null;
      this.viewer_ = Services.viewerForDoc(this.parentEl_);
    }
    var _proto = InfoDialog2.prototype;
    _proto.build = function build() {
      var _this = this;
      if (this.isBuilt()) {
        return resolvedPromise();
      }
      this.isBuilt_ = true;
      var root = this.win_.document.createElement("div");
      this.element_ = createElement("div", {
        class: "i-amphtml-story-info-dialog i-amphtml-story-system-reset"
      }, createElement("div", {
        class: "i-amphtml-story-info-dialog-container"
      }, createElement("h1", {
        class: "i-amphtml-story-info-heading"
      }), createElement("a", {
        class: "i-amphtml-story-info-link"
      }), createElement("a", {
        class: "i-amphtml-story-info-moreinfo"
      })));
      createShadowRootWithStyle(root, this.element_, CSS8);
      this.initializeListeners_();
      this.innerContainerEl_ = this.element_.querySelector(".i-amphtml-story-info-dialog-container");
      var appendPromise = this.mutator_.mutateElement(this.parentEl_, function() {
        _this.parentEl_.appendChild(root);
      });
      var pageUrl = Services.documentInfoForDoc(getAmpdoc(this.parentEl_)).canonicalUrl;
      return Promise.all([appendPromise, this.setHeading_(), this.setPageLink_(pageUrl), this.requestMoreInfoLink_().then(function(moreInfoUrl) {
        return _this.setMoreInfoLinkUrl_(moreInfoUrl);
      })]);
    };
    _proto.isBuilt = function isBuilt() {
      return this.isBuilt_;
    };
    _proto.initializeListeners_ = function initializeListeners_() {
      var _this2 = this;
      this.storeService_.subscribe(StateProperty.INFO_DIALOG_STATE, function(isOpen) {
        _this2.onInfoDialogStateUpdated_(isOpen);
      });
      this.element_.addEventListener("click", function(event) {
        return _this2.onInfoDialogClick_(event);
      });
    };
    _proto.onInfoDialogStateUpdated_ = function onInfoDialogStateUpdated_(isOpen) {
      var _this3 = this;
      this.mutator_.mutateElement(dev().assertElement(this.element_), function() {
        _this3.element_.classList.toggle(DIALOG_VISIBLE_CLASS, isOpen);
      });
      this.element_[ANALYTICS_TAG_NAME] = "amp-story-info-dialog";
      this.analyticsService_.triggerEvent(isOpen ? StoryAnalyticsEvent.OPEN : StoryAnalyticsEvent.CLOSE, this.element_);
    };
    _proto.onInfoDialogClick_ = function onInfoDialogClick_(event) {
      var _this4 = this;
      var el = dev().assertElement(event.target);
      if (!closest(el, function(el2) {
        return el2 === _this4.innerContainerEl_;
      }, this.element_)) {
        this.close_();
      }
      var anchorClicked = closest(event.target, function(e) {
        return matches(e, "a[href]");
      });
      if (anchorClicked) {
        triggerClickFromLightDom(anchorClicked, this.element);
        event.preventDefault();
      }
    };
    _proto.close_ = function close_() {
      this.storeService_.dispatch(Action.TOGGLE_INFO_DIALOG, false);
    };
    _proto.requestMoreInfoLink_ = function requestMoreInfoLink_() {
      if (!this.viewer_.isEmbedded()) {
        return Promise.resolve(null);
      }
      return this.viewer_.sendMessageAwaitResponse("moreInfoLinkUrl", void 0).then(function(moreInfoUrl) {
        if (!moreInfoUrl) {
          return null;
        }
        return assertAbsoluteHttpOrHttpsUrl(dev().assertString(moreInfoUrl));
      });
    };
    _proto.setHeading_ = function setHeading_() {
      var label = localize(this.parentEl_, LocalizedStringId_Enum.AMP_STORY_DOMAIN_DIALOG_HEADING_LABEL);
      var headingEl = dev().assertElement(this.element_.querySelector(".i-amphtml-story-info-heading"));
      return this.mutator_.mutateElement(headingEl, function() {
        headingEl.textContent = label;
      });
    };
    _proto.setPageLink_ = function setPageLink_(pageUrl) {
      var linkEl = dev().assertElement(this.element_.querySelector(".i-amphtml-story-info-link"));
      return this.mutator_.mutateElement(linkEl, function() {
        linkEl.setAttribute("href", pageUrl);
        linkEl.textContent = pageUrl.replace(/([/.]+)/gi, "$1\u200B");
      });
    };
    _proto.setMoreInfoLinkUrl_ = function setMoreInfoLinkUrl_(moreInfoUrl) {
      var _this5 = this;
      if (!moreInfoUrl) {
        return resolvedPromise();
      }
      this.moreInfoLinkEl_ = dev().assertElement(this.element_.querySelector(".i-amphtml-story-info-moreinfo"));
      return this.mutator_.mutateElement(this.moreInfoLinkEl_, function() {
        var label = localize(_this5.parentEl_, LocalizedStringId_Enum.AMP_STORY_DOMAIN_DIALOG_HEADING_LINK);
        _this5.moreInfoLinkEl_.classList.add(MOREINFO_VISIBLE_CLASS);
        _this5.moreInfoLinkEl_.setAttribute("href", dev().assertString(moreInfoUrl));
        _this5.moreInfoLinkEl_.setAttribute("target", "_blank");
        _this5.moreInfoLinkEl_.textContent = label;
      });
    };
    return InfoDialog2;
  }();

  // extensions/amp-story/1.0/live-story-manager.js
  var AMP_LIVE_LIST_CUSTOM_SLOT_ID = "AMP_LIVE_LIST_CUSTOM_SLOT_ID";
  var LiveStoryManager = /* @__PURE__ */ function() {
    function LiveStoryManager2(ampStory) {
      this.ampStory_ = ampStory;
      this.ampdoc_ = this.ampStory_.getAmpDoc();
      this.storyEl_ = ampStory.element;
      this.storeService_ = getStoreService(this.ampStory_.win);
    }
    var _proto = LiveStoryManager2.prototype;
    _proto.build = function build() {
      var _this = this;
      var liveListEl = createElement("amp-live-list", {
        id: "i-amphtml-" + this.storyEl_.id + "-dynamic-list",
        "data-poll-interval": this.storyEl_.getAttribute("data-poll-interval") || 15e3,
        sort: "ascending",
        "disable-scrolling": true,
        "disable-pagination": true,
        "auto-insert": true
      });
      liveListEl[AMP_LIVE_LIST_CUSTOM_SLOT_ID] = userAssert2(this.storyEl_.id, "amp-story must contain id to use the live story functionality");
      this.ampStory_.element.signals().whenSignal(CommonSignals_Enum.LOAD_END).then(function() {
        Services.extensionsFor(_this.ampdoc_.win).installExtensionForDoc(_this.ampdoc_, "amp-live-list");
        _this.storyEl_.insertBefore(liveListEl, _this.storyEl_.firstElementChild);
      });
    };
    _proto.update = function update() {
      var lastNewPageEl = lastChildElement(this.storyEl_, function(page) {
        return page.classList.contains("amp-live-list-item-new");
      });
      var storyPages = this.storyEl_.querySelectorAll("amp-story-page");
      var pageIds = Array.prototype.map.call(storyPages, function(el) {
        return el.id;
      });
      this.storeService_.dispatch(Action.SET_PAGE_IDS, pageIds);
      this.storeService_.dispatch(Action.ADD_NEW_PAGE_ID, lastNewPageEl.id);
    };
    return LiveStoryManager2;
  }();

  // extensions/amp-story/1.0/pagination-buttons.js
  var BackButtonStates = {
    HIDDEN: {
      className: "i-amphtml-story-button-hidden"
    },
    PREVIOUS_PAGE: {
      className: "i-amphtml-story-back-prev",
      triggers: EventType.PREVIOUS_PAGE,
      label: LocalizedStringId_Enum.AMP_STORY_PREVIOUS_PAGE
    }
  };
  var ForwardButtonStates = {
    HIDDEN: {
      className: "i-amphtml-story-button-hidden"
    },
    NEXT_PAGE: {
      className: "i-amphtml-story-fwd-next",
      triggers: EventType.NEXT_PAGE,
      label: LocalizedStringId_Enum.AMP_STORY_NEXT_PAGE
    },
    NEXT_STORY: {
      className: "i-amphtml-story-fwd-next",
      triggers: EventType.NEXT_PAGE,
      label: LocalizedStringId_Enum.AMP_STORY_NEXT_STORY
    },
    REPLAY: {
      className: "i-amphtml-story-fwd-replay",
      triggers: EventType.REPLAY,
      label: LocalizedStringId_Enum.AMP_STORY_REPLAY
    }
  };
  var renderPaginationButton = function renderPaginationButton2() {
    return createElement("div", {
      class: "i-amphtml-story-button-container"
    }, createElement("button", {
      class: "i-amphtml-story-button-move"
    }));
  };
  var PaginationButton = /* @__PURE__ */ function() {
    function PaginationButton2(doc, initialState, storeService, win) {
      var _this = this;
      this.state_ = initialState;
      this.element = renderPaginationButton();
      this.buttonElement_ = dev().assertElement(this.element.querySelector("button"));
      this.element.classList.add(initialState.className);
      if (initialState.label) {
        this.buttonElement_.setAttribute("aria-label", localize(doc, initialState.label));
      }
      this.element.addEventListener("click", function(e) {
        return _this.onClick_(e);
      });
      this.storeService_ = storeService;
      this.win_ = win;
    }
    var _proto = PaginationButton2.prototype;
    _proto.updateState = function updateState(state) {
      if (state === this.state_) {
        return;
      }
      this.element.classList.remove(this.state_.className);
      this.element.classList.add(state.className);
      state.label ? this.buttonElement_.setAttribute("aria-label", localize(this.win_.document, state.label)) : this.buttonElement_.removeAttribute("aria-label");
      this.state_ = state;
    };
    _proto.getState = function getState() {
      return this.state_;
    };
    _proto.onClick_ = function onClick_(e) {
      e.preventDefault();
      this.storeService_.dispatch(Action.SET_ADVANCEMENT_MODE, AdvancementMode.MANUAL_ADVANCE);
      if (this.state_.triggers) {
        dispatch(this.win_, this.element, devAssert2(this.state_.triggers), void 0, {
          bubbles: true
        });
        return;
      }
      if (this.state_.action) {
        this.storeService_.dispatch(this.state_.action, this.state_.data);
        return;
      }
    };
    return PaginationButton2;
  }();
  var PaginationButtons = /* @__PURE__ */ function() {
    function PaginationButtons2(ampStory) {
      this.ampStory_ = ampStory;
      var win = this.ampStory_.win;
      var doc = win.document;
      this.storeService_ = getStoreService(win);
      this.forwardButton_ = new PaginationButton(doc, ForwardButtonStates.NEXT_PAGE, this.storeService_, win);
      this.backButton_ = new PaginationButton(doc, BackButtonStates.HIDDEN, this.storeService_, win);
      this.forwardButton_.element.classList.add("next-container");
      this.backButton_.element.classList.add("prev-container");
      this.backButtonStateToRestore_ = null;
      this.forwardButtonStateToRestore_ = null;
      this.initializeListeners_();
      this.ampStory_.element.appendChild(this.forwardButton_.element);
      this.ampStory_.element.appendChild(this.backButton_.element);
    }
    var _proto2 = PaginationButtons2.prototype;
    _proto2.initializeListeners_ = function initializeListeners_() {
      var _this2 = this;
      this.storeService_.subscribe(StateProperty.CURRENT_PAGE_INDEX, function(pageIndex) {
        _this2.onCurrentPageIndexUpdate_(pageIndex);
      });
      this.storeService_.subscribe(StateProperty.PAGE_IDS, function() {
        var currentPageIndex = Number(_this2.storeService_.get(StateProperty.CURRENT_PAGE_INDEX));
        _this2.onCurrentPageIndexUpdate_(currentPageIndex);
      }, true);
      this.storeService_.subscribe(StateProperty.SYSTEM_UI_IS_VISIBLE_STATE, function(isVisible) {
        _this2.onSystemUiIsVisibleStateUpdate_(isVisible);
      });
    };
    _proto2.onCurrentPageIndexUpdate_ = function onCurrentPageIndexUpdate_(pageIndex) {
      var totalPages = this.storeService_.get(StateProperty.PAGE_IDS).length;
      if (pageIndex === 0) {
        this.backButton_.updateState(BackButtonStates.HIDDEN);
      }
      if (pageIndex > 0) {
        this.backButton_.updateState(BackButtonStates.PREVIOUS_PAGE);
      }
      if (pageIndex < totalPages - 1) {
        this.forwardButton_.updateState(ForwardButtonStates.NEXT_PAGE);
      }
      if (pageIndex === totalPages - 1) {
        var viewer = Services.viewerForDoc(this.ampStory_.element);
        if (viewer.hasCapability("swipe")) {
          this.forwardButton_.updateState(ForwardButtonStates.NEXT_STORY);
        } else {
          this.forwardButton_.updateState(ForwardButtonStates.REPLAY);
        }
      }
    };
    _proto2.onSystemUiIsVisibleStateUpdate_ = function onSystemUiIsVisibleStateUpdate_(isVisible) {
      if (isVisible) {
        this.backButton_.updateState(devAssert2(this.backButtonStateToRestore_));
        this.forwardButton_.updateState(devAssert2(this.forwardButtonStateToRestore_));
      } else {
        this.backButtonStateToRestore_ = this.backButton_.getState();
        this.backButton_.updateState(BackButtonStates.HIDDEN);
        this.forwardButtonStateToRestore_ = this.forwardButton_.getState();
        this.forwardButton_.updateState(ForwardButtonStates.HIDDEN);
      }
    };
    return PaginationButtons2;
  }();

  // build/amp-story-share-menu-1.0.css.js
  var CSS9 = ":host{all:initial!important;color:initial!important}.amp-social-share-facebook{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M212 197h-37v60h37v176h70V257h50l5-60h-55v-33c0-14 3-20 17-20h38V83h-49c-52 0-76 23-76 67v47z'/%3E%3C/svg%3E\")}.amp-social-share-pinterest{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M267 77c-101 0-151 71-151 131 0 36 14 69 43 81 5 2 9 0 11-6l4-16c1-6 1-8-3-12-8-10-14-23-14-42 0-53 40-101 104-101 57 0 88 35 88 81 0 61-27 112-67 112-22 0-39-18-33-40 6-27 18-56 18-75 0-17-9-32-28-32-23 0-41 24-41 55 0 20 7 33 7 33l-27 115c-9 34-2 76-1 80 0 3 4 3 5 1 2-2 29-35 38-69l15-58c7 14 29 27 51 27 68 0 114-62 114-145 0-62-53-120-133-120z'/%3E%3C/svg%3E\")}.amp-social-share-linkedin{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M186.4 142.4c0 19-15.3 34.5-34.2 34.5-18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5 18.9 0 34.2 15.5 34.2 34.5zm-5 58.9h-57.8v186.8h57.8V201.3zm92.4 0h-55.4v186.8h55.4v-98c0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9v98H398V269.8c0-50-28.3-74.2-68-74.2-39.6 0-56.3 30.9-56.3 30.9v-25.2h.1z'/%3E%3C/svg%3E\")}.amp-social-share-email{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M101 142v229h310V142H101zm275 26-120 91-120-91h240zm-248 26 64 49-64 64V194zm0 150 85-85 43 33 43-33 85 85H128zm256-36-64-65 64-49v114z'/%3E%3C/svg%3E\")}.amp-social-share-twitter{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h400v400H0z'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M153.6 301.6c94.4 0 146-78.2 146-146 0-2.2 0-4.4-.2-6.6a104.4 104.4 0 0 0 25.6-26.5 102.4 102.4 0 0 1-29.5 8 51.5 51.5 0 0 0 22.6-28.3 102.8 102.8 0 0 1-32.6 12.4 51.3 51.3 0 0 0-87.4 46.8 145.6 145.6 0 0 1-105.7-53.6 51.3 51.3 0 0 0 15.9 68.5 51 51 0 0 1-23.3-6.4v.6a51.3 51.3 0 0 0 41.1 50.3 51.2 51.2 0 0 1-23.1.9 51.4 51.4 0 0 0 48 35.6 103 103 0 0 1-63.8 22 104.4 104.4 0 0 1-12.2-.7 145.2 145.2 0 0 0 78.6 23'/%3E%3C/g%3E%3C/svg%3E\")}.amp-social-share-tumblr{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M211 80c-2 19-7 34-13 46a96 96 0 0 1-59 50v50h39v125c0 16 1 28 5 37 3 8 9 16 18 24s20 13 32 17c13 5 27 7 43 7a174 174 0 0 0 81-20v-56a97 97 0 0 1-54 18c-10 0-19-3-27-7-6-4-10-8-12-14s-3-19-3-40v-91h85v-56h-85V80h-50z'/%3E%3C/svg%3E\")}.amp-social-share-whatsapp{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='46'%3E%3Cpath fill='%23FFF' d='M35.4 10.4a18.27 18.27 0 0 0-31.2 13c0 3.2.9 6.3 2.4 9.1L4 42l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2a18.4 18.4 0 0 0 13-31.3zM22.5 38.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L9.9 32l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9 7.2-4.4 16.5-2.3 20.9 4.9 4.4 7.2 2.3 16.5-4.9 20.9-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2l-1.5 1.7c-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6a5.1 5.1 0 0 0-.6 5.4l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5.2-.2.4-.4.5-.6.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z'/%3E%3C/svg%3E\")}.amp-social-share-line{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M443 233c0-84-84-152-188-152S67 149 67 233c0 76 67 139 157 151 7 1 15 4 17 9s1 12 1 17l-3 16c-1 5-4 19 16 10s108-63 148-109c27-30 40-60 40-94zm-254 45a4 4 0 0 1-4 4h-53a4 4 0 0 1-2-1 4 4 0 0 1-1-3v-82a4 4 0 0 1 4-3h13a4 4 0 0 1 3 3v65h36a4 4 0 0 1 4 4zm32 0a4 4 0 0 1-4 4h-13a4 4 0 0 1-4-4v-82a4 4 0 0 1 4-3h13a4 4 0 0 1 4 3zm90 0a4 4 0 0 1-3 4h-13a4 4 0 0 1-1 0h-1v-1a3 3 0 0 1-1-1l-38-50v48a4 4 0 0 1-4 4h-13a4 4 0 0 1-4-4v-82a4 4 0 0 1 4-3h16v1l38 51v-49a4 4 0 0 1 4-3h13a4 4 0 0 1 3 3zm73-69a4 4 0 0 1-3 4h-36v14h36a4 4 0 0 1 3 4v13a4 4 0 0 1-3 4h-36v13h36a4 4 0 0 1 3 4v13a4 4 0 0 1-3 4h-53a4 4 0 0 1-3-1 4 4 0 0 1-1-3v-82a4 4 0 0 1 1-2 4 4 0 0 1 3-1h53a4 4 0 0 1 3 3z' data-name='\u30EC\u30A4\u30E4\u30FC 1'/%3E%3C/svg%3E\")}.amp-social-share-sms{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='29'%3E%3Cpath fill='none' stroke='%23FFF' stroke-width='3' d='M8.7 26v-5.7H2V2h26v18.4H15.9z'/%3E%3C/svg%3E\")}.amp-social-share-system{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23fff'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11A2.99 2.99 0 0 0 21 5a3 3 0 1 0-5.91.7L8.04 9.81A2.99 2.99 0 0 0 3 12a3 3 0 0 0 5.04 2.19l7.12 4.16A2.92 2.92 0 1 0 18 16.08z'/%3E%3C/svg%3E\")}amp-social-share{background-repeat:no-repeat;background-position:50%;background-size:contain;text-decoration:none;cursor:pointer;position:relative}amp-social-share:focus{outline:2px solid #0389ff;outline-offset:2px}.amp-social-share-twitter{background-color:#1da1f2}.amp-social-share-facebook{background-color:#32529f}.amp-social-share-pinterest{background-color:#e60023}.amp-social-share-linkedin{background-color:#0077b5}.amp-social-share-tumblr{background-color:#3c5a77}.amp-social-share-email{background-color:#000}.amp-social-share-whatsapp{background-color:#25d366}.amp-social-share-line{background-color:#52b448}.amp-social-share-sms{background-color:#ca2b63}.amp-social-share-system{background-color:#000}.i-amphtml-story-share-widget{display:block!important;margin:16px 8px!important}.i-amphtml-story-no-sharing .i-amphtml-story-share-widget{display:none!important}.i-amphtml-story-share-widget-scrollable{padding:16px 0!important;overflow:auto!important}.i-amphtml-story-share-widget::-webkit-scrollbar{width:0px!important;background:transparent!important}.i-amphtml-story-share-list{list-style:none!important;padding:0 8px!important;margin:0!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:wrap!important;flex-wrap:wrap!important;width:100%!important}.i-amphtml-story-share-item{width:48px!important;height:66px!important;padding:0 16px!important;margin-bottom:12px!important}@media (max-width:410px){.i-amphtml-story-share-item{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;min-width:60px!important;width:25%!important}}@media (min-width:410px) and (max-width:500px){.i-amphtml-story-share-item{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;width:20%!important}}@media (min-width:500px) and (max-width:720px){.i-amphtml-story-share-item{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;width:16.66%!important}}.i-amphtml-story-share-widget-scrollable .i-amphtml-story-share-list{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.i-amphtml-story-share-widget-scrollable>*>.i-amphtml-story-share-item{display:block!important;margin:0!important;padding:0 16px!important;min-width:auto!important}.i-amphtml-story-share-item:empty{display:none!important}.i-amphtml-story-share-icon{box-sizing:border-box!important;position:relative!important;width:48px!important;height:48px!important;display:block!important;cursor:pointer!important;border-radius:4px!important;overflow:visible!important;background-position:8px 8px!important;background-size:32px 32px!important;background-repeat:no-repeat!important}.i-amphtml-story-share-icon.amp-social-share-facebook{background-size:38px 38px!important;background-position:5px 5px!important}.i-amphtml-story-share-icon:focus{outline:2px solid #0389ff!important;outline-offset:2px!important}.i-amphtml-story-share-icon[type=email]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M20 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important;background-color:#9aa0a6!important}.i-amphtml-story-share-icon[type=system]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3C/svg%3E\")!important;background-color:#9aa0a6!important}.i-amphtml-story-share-icon-link{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3.9 12c0-1.7 1.4-3.1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4a3.1 3.1 0 0 1 0 6.2h-4V17h4a5 5 0 0 0 0-10z'/%3E%3C/svg%3E\")!important;background-color:#9aa0a6!important}.i-amphtml-story-share-icon .i-amphtml-story-share-label{position:absolute!important;top:48px!important;left:0!important;width:100%!important;color:rgba(0,0,0,0.87)!important;padding-top:5px!important;text-transform:capitalize!important;font-family:Roboto,sans-serif!important;font-weight:400!important;line-height:13px!important;font-size:11px!important;text-align:center!important}.i-amphtml-story-share-menu{position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;z-index:100003!important;transform:translate3d(0,var(--story-100dvh),0)!important;transition-delay:0.15s!important;pointer-events:none!important;visibility:hidden!important}.i-amphtml-story-share-menu-visible{transform:translateZ(0)!important;transition-delay:0s!important;pointer-events:auto!important;visibility:initial!important}.i-amphtml-story-share-menu:before{content:\"\"!important;position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;background:#000!important;opacity:0!important;transition:opacity 0.15s cubic-bezier(0.4,0.0,1,1)!important}.i-amphtml-story-share-menu.i-amphtml-story-share-menu-visible:before{opacity:0.55!important;transition:opacity 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-share-menu-container{position:absolute!important;bottom:0!important;left:0!important;right:0!important;height:auto!important;background:#fff!important;border-radius:8px 8px 0 0!important;transform:translate3d(0,100%,0)!important;transition:transform 0.15s cubic-bezier(0.4,0.0,1,1)!important}.i-amphtml-story-share-menu-visible .i-amphtml-story-share-menu-container{transform:translateZ(0)!important;transition:transform 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-share-menu-close-button{display:none!important}.i-amphtml-story-share-menu .i-amphtml-story-share-item{height:72px!important}[desktop].i-amphtml-story-share-menu{display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important}[desktop] .i-amphtml-story-share-menu-container{position:relative!important;margin:0!important;max-width:320px!important;opacity:0!important;transform:none!important;transition:opacity 0.15s cubic-bezier(0.4,0.0,1,1)!important}[desktop].i-amphtml-story-share-menu-visible .i-amphtml-story-share-menu-container{border-radius:8px!important;opacity:1!important;transform:none!important;transition:opacity 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}[desktop] .i-amphtml-story-share-menu-close-button{display:block!important;position:absolute!important;top:0!important;right:0!important;height:30px!important;width:30px!important;color:#9aa0a6!important;cursor:pointer!important;font-size:24px!important;line-height:30px!important;text-align:center!important;border:0!important;padding:0!important;background:none!important}[desktop].i-amphtml-story-share-menu .i-amphtml-story-share-item{padding:0!important;height:66px!important;margin:12px!important}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story-share-menu.css*/";

  // extensions/amp-story/1.0/toast.js
  var TOAST_ROLE = "alert";
  var TOAST_VISIBLE_TIME_MS = 2600;
  var Toast = /* @__PURE__ */ function() {
    function Toast2() {
    }
    Toast2.show = function show(storyEl, childNodeOrText) {
      var win = getWin(storyEl);
      var toast = createElement("div", {
        class: "i-amphtml-story-toast",
        role: TOAST_ROLE
      }, childNodeOrText);
      storyEl.appendChild(toast);
      Services.timerFor(win).delay(function() {
        return removeElement(toast);
      }, TOAST_VISIBLE_TIME_MS);
    };
    return Toast2;
  }();

  // src/core/window/clipboard.js
  function copyTextToClipboard(win, text) {
    var copySuccessful = false;
    var doc = win.document;
    var textarea = doc.createElement("textarea");
    setStyles(textarea, {
      "position": "fixed",
      "top": 0,
      "left": 0,
      "width": "50px",
      "height": "50px",
      "padding": 0,
      "border": "none",
      "outline": "none",
      "background": "transparent"
    });
    textarea.value = text;
    textarea.readOnly = true;
    textarea.contentEditable = true;
    doc.body.appendChild(textarea);
    win.getSelection().removeAllRanges();
    textarea.focus();
    textarea.setSelectionRange(0, text.length);
    try {
      copySuccessful = doc.execCommand("copy");
    } catch (e) {
    }
    removeElement(textarea);
    return copySuccessful;
  }
  function isCopyingToClipboardSupported(doc) {
    return doc.queryCommandSupported("copy");
  }

  // extensions/amp-story/1.0/amp-story-request-service.js
  var CONFIG_SRC_ATTRIBUTE_NAME = "src";
  var CREDENTIALS_ATTRIBUTE_NAME = "data-credentials";
  var TAG11 = "amp-story-request-service";
  var AmpStoryRequestService = /* @__PURE__ */ function() {
    function AmpStoryRequestService2(win, storyElement) {
      var _this = this;
      this.storyElement_ = storyElement;
      this.xhr_ = Services.xhrFor(win);
      this.loadShareConfig = once(function(element) {
        return _this.loadConfig(element);
      });
    }
    var _proto = AmpStoryRequestService2.prototype;
    _proto.executeRequest = function executeRequest(rawUrl, opts) {
      var _this2 = this;
      if (opts === void 0) {
        opts = {};
      }
      if (!isProtocolValid(rawUrl)) {
        user().error(TAG11, "Invalid config url.");
        return Promise.resolve(null);
      }
      return Services.urlReplacementsForDoc(this.storyElement_).expandUrlAsync(user().assertString(rawUrl)).then(function(url) {
        return _this2.xhr_.fetchJson(url, opts);
      }).then(function(response) {
        userAssert2(response.ok, "Invalid HTTP response");
        return response.json();
      });
    };
    _proto.getInlineConfig_ = function getInlineConfig_(element) {
      try {
        return Promise.resolve(getChildJsonConfig(element));
      } catch (err) {
        return Promise.resolve(err);
      }
    };
    _proto.loadConfig = function loadConfig(element) {
      var _this3 = this;
      if (!element) {
        return resolvedPromise();
      }
      if (element.hasAttribute(CONFIG_SRC_ATTRIBUTE_NAME)) {
        var rawUrl = element.getAttribute(CONFIG_SRC_ATTRIBUTE_NAME);
        var credentials = element.getAttribute(CREDENTIALS_ATTRIBUTE_NAME);
        return this.executeRequest(rawUrl, credentials ? {
          credentials: credentials
        } : {}).catch(function() {
          return _this3.getInlineConfig_(element);
        });
      }
      return this.getInlineConfig_(element);
    };
    return AmpStoryRequestService2;
  }();
  var getRequestService = function getRequestService2(win, storyEl) {
    var service = Services.storyRequestService(win);
    if (!service) {
      service = new AmpStoryRequestService(win, storyEl);
      registerServiceBuilder(win, "story-request", function() {
        return service;
      });
    }
    return service;
  };

  // extensions/amp-story/1.0/amp-story-share.js
  var SHARE_PROVIDER_LOCALIZED_STRING_ID = map({
    "system": LocalizedStringId_Enum.AMP_STORY_SHARING_PROVIDER_NAME_SYSTEM,
    "email": LocalizedStringId_Enum.AMP_STORY_SHARING_PROVIDER_NAME_EMAIL,
    "facebook": LocalizedStringId_Enum.AMP_STORY_SHARING_PROVIDER_NAME_FACEBOOK,
    "line": LocalizedStringId_Enum.AMP_STORY_SHARING_PROVIDER_NAME_LINE,
    "linkedin": LocalizedStringId_Enum.AMP_STORY_SHARING_PROVIDER_NAME_LINKEDIN,
    "pinterest": LocalizedStringId_Enum.AMP_STORY_SHARING_PROVIDER_NAME_PINTEREST,
    "tumblr": LocalizedStringId_Enum.AMP_STORY_SHARING_PROVIDER_NAME_TUMBLR,
    "twitter": LocalizedStringId_Enum.AMP_STORY_SHARING_PROVIDER_NAME_TWITTER,
    "whatsapp": LocalizedStringId_Enum.AMP_STORY_SHARING_PROVIDER_NAME_WHATSAPP,
    "sms": LocalizedStringId_Enum.AMP_STORY_SHARING_PROVIDER_NAME_SMS
  });
  var SHARE_PROVIDERS_KEY = "shareProviders";
  var DEPRECATED_SHARE_PROVIDERS_KEY = "share-providers";
  var renderElement3 = function renderElement4() {
    return createElement("div", {
      class: "i-amphtml-story-share-widget"
    }, createElement("ul", {
      class: "i-amphtml-story-share-list"
    }, createElement("li", {
      class: "i-amphtml-story-share-system"
    })));
  };
  var renderShareItemListElement = function renderShareItemListElement2(child) {
    return createElement("li", {
      class: "i-amphtml-story-share-item"
    }, child);
  };
  function renderLinkShareButtonElement(el) {
    return createElement("div", {
      class: "i-amphtml-story-share-icon i-amphtml-story-share-icon-link",
      tabIndex: 0,
      role: "button",
      "aria-label": localize(el, LocalizedStringId_Enum.AMP_STORY_SHARING_PROVIDER_NAME_LINK)
    }, createElement("span", {
      class: "i-amphtml-story-share-label"
    }, localize(el, LocalizedStringId_Enum.AMP_STORY_SHARING_PROVIDER_NAME_LINK)));
  }
  function buildProviderParams(opt_params) {
    var attrs = dict();
    if (opt_params) {
      Object.keys(opt_params).forEach(function(field) {
        if (field === "provider") {
          return;
        }
        attrs["data-param-" + field] = opt_params[field];
      });
    }
    return attrs;
  }
  function buildProvider(doc, shareType, opt_params) {
    var shareProviderLocalizedStringId = SHARE_PROVIDER_LOCALIZED_STRING_ID[shareType];
    if (!shareProviderLocalizedStringId) {
      return;
    }
    var social = createElement("amp-social-share", {
      width: 48,
      height: 48,
      class: "i-amphtml-story-share-icon",
      type: shareType
    }, createElement("span", {
      class: "i-amphtml-story-share-label"
    }, localize(doc, shareProviderLocalizedStringId)));
    return addAttributesToElement(social, buildProviderParams(opt_params));
  }
  function buildCopySuccessfulToast(doc, url) {
    return createElement("div", {
      class: "i-amphtml-story-copy-successful"
    }, createElement("div", null, localize(doc, LocalizedStringId_Enum.AMP_STORY_SHARING_CLIPBOARD_SUCCESS_TEXT)), createElement("div", {
      class: "i-amphtml-story-copy-url"
    }, url));
  }
  var ShareWidget = /* @__PURE__ */ function() {
    function ShareWidget2(win, storyEl) {
      this.ampdoc_ = null;
      this.win = win;
      this.storyEl = storyEl;
      this.root = null;
      this.requestService_ = getRequestService(this.win, storyEl);
    }
    ShareWidget2.create = function create(win, storyEl) {
      return new ShareWidget2(win, storyEl);
    };
    var _proto = ShareWidget2.prototype;
    _proto.build = function build(ampdoc2) {
      devAssert2(!this.root, "Already built.");
      this.ampdoc_ = ampdoc2;
      this.root = renderElement3();
      this.loadProviders();
      this.maybeAddLinkShareButton_();
      this.maybeAddSystemShareButton_();
      return this.root;
    };
    _proto.getAmpDoc_ = function getAmpDoc_() {
      return devAssert2(this.ampdoc_);
    };
    _proto.maybeAddLinkShareButton_ = function maybeAddLinkShareButton_() {
      var _this = this;
      if (!isCopyingToClipboardSupported(this.win.document)) {
        return;
      }
      var linkShareButton = renderLinkShareButtonElement(this.storyEl);
      this.add_(linkShareButton);
      listen(linkShareButton, "click", function(e) {
        e.preventDefault();
        _this.copyUrlToClipboard_();
      });
      listen(linkShareButton, "keyup", function(e) {
        var code = e.charCode || e.keyCode;
        if (code === 32 || code === 13) {
          e.preventDefault();
          _this.copyUrlToClipboard_();
        }
      });
    };
    _proto.copyUrlToClipboard_ = function copyUrlToClipboard_() {
      var url = Services.documentInfoForDoc(this.getAmpDoc_()).canonicalUrl;
      if (!copyTextToClipboard(this.win, url)) {
        var failureString = localize(this.storyEl, LocalizedStringId_Enum.AMP_STORY_SHARING_CLIPBOARD_FAILURE_TEXT);
        Toast.show(this.storyEl, dev().assertString(failureString));
        return;
      }
      Toast.show(this.storyEl, buildCopySuccessfulToast(this.win.document, url));
    };
    _proto.maybeAddSystemShareButton_ = function maybeAddSystemShareButton_() {
      if (!this.isSystemShareSupported()) {
        return;
      }
      var container = dev().assertElement(this.root).querySelector(".i-amphtml-story-share-system");
      this.loadRequiredExtensions();
      container.appendChild(buildProvider(this.win.document, "system"));
    };
    _proto.isSystemShareSupported = function isSystemShareSupported(ampdoc2) {
      if (ampdoc2 === void 0) {
        ampdoc2 = this.getAmpDoc_();
      }
      var viewer = Services.viewerForDoc(ampdoc2);
      var platform = Services.platformFor(this.win);
      var isChromeWebview = viewer.isWebviewEmbedded() && platform.isChrome();
      return "share" in navigator && !isChromeWebview;
    };
    _proto.loadProviders = function loadProviders() {
      var _this2 = this;
      this.loadRequiredExtensions();
      var shareEl = this.storyEl.querySelector("amp-story-social-share, amp-story-bookend");
      this.requestService_.loadShareConfig(shareEl).then(function(config) {
        var providers = config && (config[SHARE_PROVIDERS_KEY] || config[DEPRECATED_SHARE_PROVIDERS_KEY]);
        if (!providers) {
          return;
        }
        _this2.setProviders_(providers);
      });
    };
    _proto.setProviders_ = function setProviders_(providers) {
      var _this3 = this;
      providers.forEach(function(provider) {
        if (isObject(provider)) {
          _this3.add_(buildProvider(_this3.win.document, provider["provider"], provider));
          return;
        }
        if (provider == "system") {
          user().warn("AMP-STORY", "`system` is not a valid share provider type. Native sharing is enabled by default and cannot be turned off.", provider);
          return;
        }
        _this3.add_(buildProvider(_this3.win.document, provider));
      });
    };
    _proto.loadRequiredExtensions = function loadRequiredExtensions(ampdoc2) {
      if (ampdoc2 === void 0) {
        ampdoc2 = this.getAmpDoc_();
      }
      Services.extensionsFor(this.win).installExtensionForDoc(ampdoc2, "amp-social-share");
    };
    _proto.add_ = function add_(node) {
      var list = devAssert2(this.root).lastElementChild;
      var item = renderShareItemListElement(node);
      list.insertBefore(item, list.lastElementChild);
    };
    return ShareWidget2;
  }();

  // extensions/amp-story/1.0/amp-story-share-menu.js
  var VISIBLE_CLASS = "i-amphtml-story-share-menu-visible";
  var renderShareMenu = function renderShareMenu2() {
    return createElement("div", {
      class: "i-amphtml-story-share-menu i-amphtml-story-system-reset",
      "aria-hidden": "true",
      role: "alert"
    }, createElement("div", {
      class: "i-amphtml-story-share-menu-container"
    }, createElement("button", {
      class: "i-amphtml-story-share-menu-close-button",
      "aria-label": "close",
      role: "button"
    }, "\xD7")));
  };
  var renderAmpSocialSystemShareElement = function renderAmpSocialSystemShareElement2() {
    return createElement("amp-social-share", {
      type: "system"
    });
  };
  var ShareMenu = /* @__PURE__ */ function() {
    function ShareMenu2(win, storyEl) {
      this.win_ = win;
      this.element_ = null;
      this.closeButton_ = null;
      this.innerContainerEl_ = null;
      this.isBuilt_ = false;
      this.isSystemShareSupported_ = false;
      this.shareWidget_ = ShareWidget.create(this.win_, storyEl);
      this.storeService_ = getStoreService(this.win_);
      this.analyticsService_ = getAnalyticsService(this.win_, storyEl);
      this.parentEl_ = storyEl;
      this.vsync_ = Services.vsyncFor(this.win_);
    }
    var _proto = ShareMenu2.prototype;
    _proto.build = function build() {
      if (this.isBuilt()) {
        return;
      }
      this.isBuilt_ = true;
      this.isSystemShareSupported_ = this.shareWidget_.isSystemShareSupported(getAmpdoc(this.parentEl_));
      this.isSystemShareSupported_ ? this.buildForSystemSharing_() : this.buildForFallbackSharing_();
    };
    _proto.isBuilt = function isBuilt() {
      return this.isBuilt_;
    };
    _proto.buildForSystemSharing_ = function buildForSystemSharing_() {
      var _this = this;
      this.shareWidget_.loadRequiredExtensions(getAmpdoc(this.parentEl_));
      this.element_ = renderAmpSocialSystemShareElement();
      this.initializeListeners_();
      this.vsync_.mutate(function() {
        setStyles(dev().assertElement(_this.element_), {
          "visibility": "hidden",
          "pointer-events": "none",
          "z-index": -1
        });
        _this.parentEl_.appendChild(_this.element_);
      });
    };
    _proto.buildForFallbackSharing_ = function buildForFallbackSharing_() {
      var _this2 = this;
      var root = this.win_.document.createElement("div");
      root.classList.add("i-amphtml-story-share-menu-host");
      this.element_ = renderShareMenu();
      createShadowRootWithStyle(root, this.element_, CSS9);
      this.closeButton_ = dev().assertElement(this.element_.querySelector(".i-amphtml-story-share-menu-close-button"));
      this.closeButton_.setAttribute("aria-label", localize(this.parentEl_, LocalizedStringId_Enum.AMP_STORY_CLOSE_BUTTON_LABEL));
      this.initializeListeners_();
      this.vsync_.run({
        measure: function measure() {
          _this2.innerContainerEl_ = _this2.element_.querySelector(".i-amphtml-story-share-menu-container");
        },
        mutate: function mutate() {
          _this2.parentEl_.appendChild(root);
          var shareWidget = _this2.shareWidget_.build(getAmpdoc(_this2.parentEl_));
          _this2.innerContainerEl_.appendChild(shareWidget);
        }
      });
    };
    _proto.initializeListeners_ = function initializeListeners_() {
      var _this3 = this;
      this.storeService_.subscribe(StateProperty.UI_STATE, function(uiState) {
        _this3.onUIStateUpdate_(uiState);
      }, true);
      this.storeService_.subscribe(StateProperty.SHARE_MENU_STATE, function(isOpen) {
        _this3.onShareMenuStateUpdate_(isOpen);
      });
      if (!this.isSystemShareSupported_) {
        this.element_.addEventListener("click", function(event) {
          return _this3.onShareMenuClick_(event);
        });
        this.win_.addEventListener("keyup", function(event) {
          if (event.key == Keys_Enum.ESCAPE) {
            event.preventDefault();
            _this3.close_();
          }
        });
      }
    };
    _proto.onShareMenuStateUpdate_ = function onShareMenuStateUpdate_(isOpen) {
      var _this4 = this;
      if (this.isSystemShareSupported_ && isOpen) {
        this.element_.dispatchEvent(new Event("click"));
        this.close_();
      }
      if (!this.isSystemShareSupported_) {
        this.vsync_.mutate(function() {
          _this4.element_.classList.toggle(VISIBLE_CLASS, isOpen);
          _this4.element_.setAttribute("aria-hidden", !isOpen);
        });
      }
      this.element_[ANALYTICS_TAG_NAME] = "amp-story-share-menu";
      this.analyticsService_.triggerEvent(isOpen ? StoryAnalyticsEvent.OPEN : StoryAnalyticsEvent.CLOSE, this.element_);
    };
    _proto.onShareMenuClick_ = function onShareMenuClick_(event) {
      var _this5 = this;
      var el = dev().assertElement(event.target);
      if (el === this.closeButton_) {
        this.close_();
      }
      if (!closest(el, function(el2) {
        return el2 === _this5.innerContainerEl_;
      }, this.element_)) {
        this.close_();
      }
    };
    _proto.onUIStateUpdate_ = function onUIStateUpdate_(uiState) {
      var _this6 = this;
      this.vsync_.mutate(function() {
        uiState !== UIType.MOBILE ? _this6.element_.setAttribute("desktop", "") : _this6.element_.removeAttribute("desktop");
      });
    };
    _proto.close_ = function close_() {
      this.storeService_.dispatch(Action.TOGGLE_SHARE_MENU, false);
    };
    return ShareMenu2;
  }();

  // src/motion.js
  var FRAME_CONST_ = 16.67;
  var EXP_FRAME_CONST_ = Math.round(-FRAME_CONST_ / Math.log(0.95));
  var VELOCITY_DEPR_FACTOR_ = FRAME_CONST_ * 2;
  function calcVelocity(deltaV, deltaTime, prevVelocity) {
    if (deltaTime < 1) {
      deltaTime = 1;
    }
    var speed = deltaV / deltaTime;
    var depr = 0.5 + Math.min(deltaTime / VELOCITY_DEPR_FACTOR_, 0.5);
    return speed * depr + prevVelocity * (1 - depr);
  }

  // src/gesture-recognizers.js
  function _inherits11(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf11(subClass, superClass);
  }
  function _setPrototypeOf11(o, p) {
    _setPrototypeOf11 = Object.setPrototypeOf || function _setPrototypeOf13(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf11(o, p);
  }
  function _createSuper11(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct11();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf11(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf11(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn11(this, result);
    };
  }
  function _possibleConstructorReturn11(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized11(self2);
  }
  function _assertThisInitialized11(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct11() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf11(o) {
    _getPrototypeOf11 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf13(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf11(o);
  }
  var SwipeRecognizer = /* @__PURE__ */ function(_GestureRecognizer3) {
    _inherits11(SwipeRecognizer2, _GestureRecognizer3);
    var _super3 = _createSuper11(SwipeRecognizer2);
    function SwipeRecognizer2(type, manager, horiz, vert) {
      var _this3;
      _this3 = _super3.call(this, type, manager);
      _this3.horiz_ = horiz;
      _this3.vert_ = vert;
      _this3.eventing_ = false;
      _this3.startX_ = 0;
      _this3.startY_ = 0;
      _this3.lastX_ = 0;
      _this3.lastY_ = 0;
      _this3.prevX_ = 0;
      _this3.prevY_ = 0;
      _this3.startTime_ = 0;
      _this3.lastTime_ = 0;
      _this3.prevTime_ = 0;
      _this3.velocityX_ = 0;
      _this3.velocityY_ = 0;
      return _this3;
    }
    var _proto3 = SwipeRecognizer2.prototype;
    _proto3.onTouchStart = function onTouchStart(e) {
      var touches = e.touches;
      if (this.eventing_ && touches && touches.length > 1) {
        return true;
      }
      if (touches && touches.length == 1) {
        this.startTime_ = Date.now();
        this.startX_ = touches[0].clientX;
        this.startY_ = touches[0].clientY;
        return true;
      } else {
        return false;
      }
    };
    _proto3.onTouchMove = function onTouchMove(e) {
      var touches = e.touches;
      if (touches && touches.length >= 1) {
        var _touches$ = touches[0], x2 = _touches$.clientX, y2 = _touches$.clientY;
        this.lastX_ = x2;
        this.lastY_ = y2;
        if (this.eventing_) {
          this.emit_(false, false, e);
        } else {
          var dx = Math.abs(x2 - this.startX_);
          var dy = Math.abs(y2 - this.startY_);
          if (this.horiz_ && this.vert_) {
            if (dx >= 8 || dy >= 8) {
              this.signalReady(-10);
            }
          } else if (this.horiz_) {
            if (dx >= 8 && dx > dy) {
              this.signalReady(-10);
            } else if (dy >= 8) {
              return false;
            }
          } else if (this.vert_) {
            if (dy >= 8 && dy > dx) {
              this.signalReady(-10);
            } else if (dx >= 8) {
              return false;
            }
          } else {
            return false;
          }
        }
        return true;
      } else {
        return false;
      }
    };
    _proto3.onTouchEnd = function onTouchEnd(e) {
      var touches = e.touches;
      if (touches && touches.length == 0) {
        this.end_(e);
      }
    };
    _proto3.acceptStart = function acceptStart() {
      this.eventing_ = true;
      this.prevX_ = this.startX_;
      this.prevY_ = this.startY_;
      this.prevTime_ = this.startTime_;
      this.startX_ = this.lastX_;
      this.startY_ = this.lastY_;
      this.emit_(true, false, null);
    };
    _proto3.acceptCancel = function acceptCancel() {
      this.eventing_ = false;
    };
    _proto3.emit_ = function emit_(first, last, event) {
      this.lastTime_ = Date.now();
      var deltaTime = this.lastTime_ - this.prevTime_;
      if (!last && deltaTime > 4 || last && deltaTime > 16) {
        var velocityX = calcVelocity(this.lastX_ - this.prevX_, deltaTime, this.velocityX_);
        var velocityY = calcVelocity(this.lastY_ - this.prevY_, deltaTime, this.velocityY_);
        if (!last || deltaTime > 32 || velocityX != 0 || velocityY != 0) {
          this.velocityX_ = Math.abs(velocityX) > 1e-4 ? velocityX : 0;
          this.velocityY_ = Math.abs(velocityY) > 1e-4 ? velocityY : 0;
        }
        this.prevX_ = this.lastX_;
        this.prevY_ = this.lastY_;
        this.prevTime_ = this.lastTime_;
      }
      this.signalEmit({
        first: first,
        last: last,
        time: this.lastTime_,
        deltaX: this.lastX_ - this.startX_,
        deltaY: this.lastY_ - this.startY_,
        startX: this.startX_,
        startY: this.startY_,
        lastX: this.lastX_,
        lastY: this.lastY_,
        velocityX: this.velocityX_,
        velocityY: this.velocityY_
      }, event);
    };
    _proto3.end_ = function end_(event) {
      if (this.eventing_) {
        this.eventing_ = false;
        this.emit_(false, true, event);
        this.signalEnd();
      }
    };
    return SwipeRecognizer2;
  }(GestureRecognizer);
  var SwipeXYRecognizer = /* @__PURE__ */ function(_SwipeRecognizer) {
    _inherits11(SwipeXYRecognizer2, _SwipeRecognizer);
    var _super4 = _createSuper11(SwipeXYRecognizer2);
    function SwipeXYRecognizer2(manager) {
      return _super4.call(this, "swipe-xy", manager, true, true);
    }
    return SwipeXYRecognizer2;
  }(SwipeRecognizer);

  // node_modules/@ampproject/toolbox-cache-url/dist/amp-toolbox-cache-url.esm.js
  var l = "ase art bmp blp cd5 cit cpt cr2 cut dds dib djvu egt exif gif gpl grf icns ico iff jng jpeg jpg jfif jp2 jps lbm max miff mng msp nitf ota pbm pc1 pc2 pc3 pcf pcx pdn pgm PI1 PI2 PI3 pict pct pnm pns ppm psb psd pdd psp px pxm pxr qfx raw rle sct sgi rgb int bw tga tiff tif vtf xbm xcf xpm 3dv amf ai awg cgm cdr cmx dxf e2d egt eps fs gbr odg svg stl vrml x3d sxd v2d vnd wmf emf art xar png webp jxr hdp wdp cur ecw iff lbm liff nrrd pam pcx pgf sgi rgb rgba bw int inta sid ras sun tga".split(" ");
  var n = "### #gf $on $tf 0b 8m 8u 12u 15u 64c 075 75 085 85 91 091 096 96 abf acfm acs afm afn afs all amfm apf asf aspf atm auf b30 bco bdf bepf bez bfn bmap bmf bx bzr cbtf cct cef cff cfn cga ch4 cha chm chr chx claf collection compositefont dfont dus dzk eft eot etx euf f00 f06 f08 f09 f3f f10 f11 f12 f13 f16 fd fdb ff ffil flf fli fn3 fnb fnn fnt fnta fo1 fo2 fog fon font fonts fot frf frs ftm fxr fyi gdr gf gft glf glif glyphs gsf gxf hbf ice intellifont lepf lft lwfn mcf mcf mfd mfm mft mgf mmm mrf mtf mvec nlq ntf odttf ofm okf otf pcf pcf pfa pfb pfm pft phf pk pkt prs pss qbf qfn r8? scr sfd sff sfi sfl sfn sfo sfp sfs sif snf spd spritefont sui suit svg sxs t1c t2 tb1 tb2 tdf tfm tmf tpf ttc tte ttf type ufm ufo usl usp us? vf vf1 vf3 vfb vfm vfont vlw vmf vnf w30 wfn wnf woff woff2 xfc xfn xfr xft zfi zsu _v".split(" ");
  var r = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function t(a, b) {
    b = b.split(":")[0];
    a = +a;
    if (!a)
      return false;
    switch (b) {
      case "http":
      case "ws":
        return a !== 80;
      case "https":
      case "wss":
        return a !== 443;
      case "ftp":
        return a !== 21;
      case "gopher":
        return a !== 70;
      case "file":
        return false;
    }
    return a !== 0;
  }
  var u = Object.prototype.hasOwnProperty;
  function v(a) {
    try {
      return decodeURIComponent(a.replace(/\+/g, " "));
    } catch (b) {
      return null;
    }
  }
  var w = {
    stringify: function stringify(a, b) {
      b = b || "";
      var d = [], c;
      typeof b !== "string" && (b = "?");
      for (e in a) {
        if (u.call(a, e)) {
          (c = a[e]) || c !== null && c !== void 0 && !isNaN(c) || (c = "");
          var e = encodeURIComponent(e);
          c = encodeURIComponent(c);
          e !== null && c !== null && d.push(e + "=" + c);
        }
      }
      return d.length ? b + d.join("&") : "";
    },
    parse: function parse(a) {
      for (var b = /([^=?&]+)=?([^&]*)/g, d = {}, c; c = b.exec(a); ) {
        var e = v(c[1]);
        c = v(c[2]);
        e === null || c === null || e in d || (d[e] = c);
      }
      return d;
    }
  };
  var x = /^[A-Za-z][A-Za-z0-9+-.]*:[\\/]+/;
  var y = /^([a-z][a-z0-9.+-]*:)?([\\/]{1,})?([\S\s]*)/i;
  var z = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/;
  function A(a) {
    return (a ? a : "").toString().replace(z, "");
  }
  var B = [["#", "hash"], ["?", "query"], function(a) {
    return a.replace("\\", "/");
  }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d+)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]];
  var C = {
    hash: 1,
    query: 1
  };
  function D(a) {
    var b = (typeof window !== "undefined" ? window : typeof r !== "undefined" ? r : typeof self !== "undefined" ? self : {}).location || {};
    a = a || b;
    b = {};
    var d = typeof a, c;
    if (a.protocol === "blob:")
      b = new E(unescape(a.pathname), {});
    else if (d === "string")
      for (c in b = new E(a, {}), C) {
        delete b[c];
      }
    else if (d === "object") {
      for (c in a) {
        c in C || (b[c] = a[c]);
      }
      b.slashes === void 0 && (b.slashes = x.test(a.href));
    }
    return b;
  }
  function F(a) {
    a = A(a);
    a = y.exec(a);
    return {
      protocol: a[1] ? a[1].toLowerCase() : "",
      slashes: !!(a[2] && 2 <= a[2].length),
      rest: a[2] && a[2].length === 1 ? "/" + a[3] : a[3]
    };
  }
  function E(a, b, d) {
    a = A(a);
    if (!(this instanceof E))
      return new E(a, b, d);
    var c = B.slice();
    var e = typeof b;
    var k = 0;
    e !== "object" && e !== "string" && (d = b, b = null);
    d && typeof d !== "function" && (d = w.parse);
    b = D(b);
    var f = F(a || "");
    e = !f.protocol && !f.slashes;
    this.slashes = f.slashes || e && b.slashes;
    this.protocol = f.protocol || b.protocol || "";
    a = f.rest;
    for (f.slashes || (c[3] = [/(.*)/, "pathname"]); k < c.length; k++) {
      if (f = c[k], typeof f === "function")
        a = f(a);
      else {
        var h = f[0];
        var g = f[1];
        if (h !== h)
          this[g] = a;
        else if (typeof h === "string")
          ~(h = a.indexOf(h)) && (typeof f[2] === "number" ? (this[g] = a.slice(0, h), a = a.slice(h + f[2])) : (this[g] = a.slice(h), a = a.slice(0, h)));
        else if (h = h.exec(a))
          this[g] = h[1], a = a.slice(0, h.index);
        this[g] = this[g] || (e && f[3] ? b[g] || "" : "");
        f[4] && (this[g] = this[g].toLowerCase());
      }
    }
    d && (this.query = d(this.query));
    if (e && b.slashes && this.pathname.charAt(0) !== "/" && (this.pathname !== "" || b.pathname !== "")) {
      a = this.pathname;
      b = b.pathname;
      if (a !== "") {
        b = (b || "/").split("/").slice(0, -1).concat(a.split("/"));
        a = b.length;
        d = b[a - 1];
        c = false;
        for (k = 0; a--; ) {
          b[a] === "." ? b.splice(a, 1) : b[a] === ".." ? (b.splice(a, 1), k++) : k && (a === 0 && (c = true), b.splice(a, 1), k--);
        }
        c && b.unshift("");
        d !== "." && d !== ".." || b.push("");
        b = b.join("/");
      }
      this.pathname = b;
    }
    this.pathname.charAt(0) !== "/" && this.hostname && (this.pathname = "/" + this.pathname);
    t(this.port, this.protocol) || (this.host = this.hostname, this.port = "");
    this.username = this.password = "";
    this.auth && (f = this.auth.split(":"), this.username = f[0] || "", this.password = f[1] || "");
    this.origin = this.protocol && this.host && this.protocol !== "file:" ? this.protocol + "//" + this.host : "null";
    this.href = this.toString();
  }
  E.prototype = {
    set: function set(a, b, d) {
      switch (a) {
        case "query":
          typeof b === "string" && b.length && (b = (d || w.parse)(b));
          this[a] = b;
          break;
        case "port":
          this[a] = b;
          t(b, this.protocol) ? b && (this.host = this.hostname + ":" + b) : (this.host = this.hostname, this[a] = "");
          break;
        case "hostname":
          this[a] = b;
          this.port && (b += ":" + this.port);
          this.host = b;
          break;
        case "host":
          this[a] = b;
          /:\d+$/.test(b) ? (b = b.split(":"), this.port = b.pop(), this.hostname = b.join(":")) : (this.hostname = b, this.port = "");
          break;
        case "protocol":
          this.protocol = b.toLowerCase();
          this.slashes = !d;
          break;
        case "pathname":
        case "hash":
          b ? (d = a === "pathname" ? "/" : "#", this[a] = b.charAt(0) !== d ? d + b : b) : this[a] = b;
          break;
        default:
          this[a] = b;
      }
      for (a = 0; a < B.length; a++) {
        b = B[a], b[4] && (this[b[1]] = this[b[1]].toLowerCase());
      }
      this.origin = this.protocol && this.host && this.protocol !== "file:" ? this.protocol + "//" + this.host : "null";
      this.href = this.toString();
      return this;
    },
    toString: function toString(a) {
      a && typeof a === "function" || (a = w.stringify);
      var b = this.protocol;
      b && b.charAt(b.length - 1) !== ":" && (b += ":");
      b += this.slashes ? "//" : "";
      this.username && (b += this.username, this.password && (b += ":" + this.password), b += "@");
      b += this.host + this.pathname;
      (a = typeof this.query === "object" ? a(this.query) : this.query) && (b += a.charAt(0) !== "?" ? "?" + a : a);
      this.hash && (b += this.hash);
      return b;
    }
  };
  E.extractProtocol = F;
  E.location = D;
  E.trimLeft = A;
  E.qs = w;
  var N = String.fromCharCode;

  // src/core/constants/visibility-state.js
  var VisibilityState_Enum = {
    PRERENDER: "prerender",
    VISIBLE: "visible",
    HIDDEN: "hidden",
    PAUSED: "paused",
    INACTIVE: "inactive"
  };

  // src/amp-story-player/amp-story-player-impl.js
  var AMP_STORY_PLAYER_EVENT = "AMP_STORY_PLAYER_EVENT";
  var PANEL_ASPECT_RATIO_THRESHOLD = 3 / 4;

  // build/amp-story-system-layer-1.0.css.js
  var CSS10 = ".amp-social-share-facebook{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M212 197h-37v60h37v176h70V257h50l5-60h-55v-33c0-14 3-20 17-20h38V83h-49c-52 0-76 23-76 67v47z'/%3E%3C/svg%3E\")}.amp-social-share-pinterest{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M267 77c-101 0-151 71-151 131 0 36 14 69 43 81 5 2 9 0 11-6l4-16c1-6 1-8-3-12-8-10-14-23-14-42 0-53 40-101 104-101 57 0 88 35 88 81 0 61-27 112-67 112-22 0-39-18-33-40 6-27 18-56 18-75 0-17-9-32-28-32-23 0-41 24-41 55 0 20 7 33 7 33l-27 115c-9 34-2 76-1 80 0 3 4 3 5 1 2-2 29-35 38-69l15-58c7 14 29 27 51 27 68 0 114-62 114-145 0-62-53-120-133-120z'/%3E%3C/svg%3E\")}.amp-social-share-linkedin{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M186.4 142.4c0 19-15.3 34.5-34.2 34.5-18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5 18.9 0 34.2 15.5 34.2 34.5zm-5 58.9h-57.8v186.8h57.8V201.3zm92.4 0h-55.4v186.8h55.4v-98c0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9v98H398V269.8c0-50-28.3-74.2-68-74.2-39.6 0-56.3 30.9-56.3 30.9v-25.2h.1z'/%3E%3C/svg%3E\")}.amp-social-share-email{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M101 142v229h310V142H101zm275 26-120 91-120-91h240zm-248 26 64 49-64 64V194zm0 150 85-85 43 33 43-33 85 85H128zm256-36-64-65 64-49v114z'/%3E%3C/svg%3E\")}.amp-social-share-twitter{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h400v400H0z'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M153.6 301.6c94.4 0 146-78.2 146-146 0-2.2 0-4.4-.2-6.6a104.4 104.4 0 0 0 25.6-26.5 102.4 102.4 0 0 1-29.5 8 51.5 51.5 0 0 0 22.6-28.3 102.8 102.8 0 0 1-32.6 12.4 51.3 51.3 0 0 0-87.4 46.8 145.6 145.6 0 0 1-105.7-53.6 51.3 51.3 0 0 0 15.9 68.5 51 51 0 0 1-23.3-6.4v.6a51.3 51.3 0 0 0 41.1 50.3 51.2 51.2 0 0 1-23.1.9 51.4 51.4 0 0 0 48 35.6 103 103 0 0 1-63.8 22 104.4 104.4 0 0 1-12.2-.7 145.2 145.2 0 0 0 78.6 23'/%3E%3C/g%3E%3C/svg%3E\")}.amp-social-share-tumblr{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M211 80c-2 19-7 34-13 46a96 96 0 0 1-59 50v50h39v125c0 16 1 28 5 37 3 8 9 16 18 24s20 13 32 17c13 5 27 7 43 7a174 174 0 0 0 81-20v-56a97 97 0 0 1-54 18c-10 0-19-3-27-7-6-4-10-8-12-14s-3-19-3-40v-91h85v-56h-85V80h-50z'/%3E%3C/svg%3E\")}.amp-social-share-whatsapp{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='46'%3E%3Cpath fill='%23FFF' d='M35.4 10.4a18.27 18.27 0 0 0-31.2 13c0 3.2.9 6.3 2.4 9.1L4 42l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2a18.4 18.4 0 0 0 13-31.3zM22.5 38.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L9.9 32l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9 7.2-4.4 16.5-2.3 20.9 4.9 4.4 7.2 2.3 16.5-4.9 20.9-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2l-1.5 1.7c-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6a5.1 5.1 0 0 0-.6 5.4l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5.2-.2.4-.4.5-.6.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z'/%3E%3C/svg%3E\")}.amp-social-share-line{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M443 233c0-84-84-152-188-152S67 149 67 233c0 76 67 139 157 151 7 1 15 4 17 9s1 12 1 17l-3 16c-1 5-4 19 16 10s108-63 148-109c27-30 40-60 40-94zm-254 45a4 4 0 0 1-4 4h-53a4 4 0 0 1-2-1 4 4 0 0 1-1-3v-82a4 4 0 0 1 4-3h13a4 4 0 0 1 3 3v65h36a4 4 0 0 1 4 4zm32 0a4 4 0 0 1-4 4h-13a4 4 0 0 1-4-4v-82a4 4 0 0 1 4-3h13a4 4 0 0 1 4 3zm90 0a4 4 0 0 1-3 4h-13a4 4 0 0 1-1 0h-1v-1a3 3 0 0 1-1-1l-38-50v48a4 4 0 0 1-4 4h-13a4 4 0 0 1-4-4v-82a4 4 0 0 1 4-3h16v1l38 51v-49a4 4 0 0 1 4-3h13a4 4 0 0 1 3 3zm73-69a4 4 0 0 1-3 4h-36v14h36a4 4 0 0 1 3 4v13a4 4 0 0 1-3 4h-36v13h36a4 4 0 0 1 3 4v13a4 4 0 0 1-3 4h-53a4 4 0 0 1-3-1 4 4 0 0 1-1-3v-82a4 4 0 0 1 1-2 4 4 0 0 1 3-1h53a4 4 0 0 1 3 3z' data-name='\u30EC\u30A4\u30E4\u30FC 1'/%3E%3C/svg%3E\")}.amp-social-share-sms{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='29'%3E%3Cpath fill='none' stroke='%23FFF' stroke-width='3' d='M8.7 26v-5.7H2V2h26v18.4H15.9z'/%3E%3C/svg%3E\")}.amp-social-share-system{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23fff'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11A2.99 2.99 0 0 0 21 5a3 3 0 1 0-5.91.7L8.04 9.81A2.99 2.99 0 0 0 3 12a3 3 0 0 0 5.04 2.19l7.12 4.16A2.92 2.92 0 1 0 18 16.08z'/%3E%3C/svg%3E\")}amp-social-share{background-repeat:no-repeat;background-position:50%;background-size:contain;text-decoration:none;cursor:pointer;position:relative}amp-social-share:focus{outline:2px solid #0389ff;outline-offset:2px}.amp-social-share-twitter{background-color:#1da1f2}.amp-social-share-facebook{background-color:#32529f}.amp-social-share-pinterest{background-color:#e60023}.amp-social-share-linkedin{background-color:#0077b5}.amp-social-share-tumblr{background-color:#3c5a77}.amp-social-share-email{background-color:#000}.amp-social-share-whatsapp{background-color:#25d366}.amp-social-share-line{background-color:#52b448}.amp-social-share-sms{background-color:#ca2b63}.amp-social-share-system{background-color:#000}.i-amphtml-story-share-widget{display:block!important;margin:16px 8px!important}.i-amphtml-story-no-sharing .i-amphtml-story-share-widget{display:none!important}.i-amphtml-story-share-widget-scrollable{padding:16px 0!important;overflow:auto!important}.i-amphtml-story-share-widget::-webkit-scrollbar{width:0px!important;background:transparent!important}.i-amphtml-story-share-list{list-style:none!important;padding:0 8px!important;margin:0!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:wrap!important;flex-wrap:wrap!important;width:100%!important}.i-amphtml-story-share-item{width:48px!important;height:66px!important;padding:0 16px!important;margin-bottom:12px!important}@media (max-width:410px){.i-amphtml-story-share-item{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;min-width:60px!important;width:25%!important}}@media (min-width:410px) and (max-width:500px){.i-amphtml-story-share-item{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;width:20%!important}}@media (min-width:500px) and (max-width:720px){.i-amphtml-story-share-item{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;width:16.66%!important}}.i-amphtml-story-share-widget-scrollable .i-amphtml-story-share-list{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.i-amphtml-story-share-widget-scrollable>*>.i-amphtml-story-share-item{display:block!important;margin:0!important;padding:0 16px!important;min-width:auto!important}.i-amphtml-story-share-item:empty{display:none!important}.i-amphtml-story-share-icon{box-sizing:border-box!important;position:relative!important;width:48px!important;height:48px!important;display:block!important;cursor:pointer!important;border-radius:4px!important;overflow:visible!important;background-position:8px 8px!important;background-size:32px 32px!important;background-repeat:no-repeat!important}.i-amphtml-story-share-icon.amp-social-share-facebook{background-size:38px 38px!important;background-position:5px 5px!important}.i-amphtml-story-share-icon:focus{outline:2px solid #0389ff!important;outline-offset:2px!important}.i-amphtml-story-share-icon[type=email]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M20 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important;background-color:#9aa0a6!important}.i-amphtml-story-share-icon[type=system]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3C/svg%3E\")!important;background-color:#9aa0a6!important}.i-amphtml-story-share-icon-link{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3.9 12c0-1.7 1.4-3.1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4a3.1 3.1 0 0 1 0 6.2h-4V17h4a5 5 0 0 0 0-10z'/%3E%3C/svg%3E\")!important;background-color:#9aa0a6!important}.i-amphtml-story-share-icon .i-amphtml-story-share-label{position:absolute!important;top:48px!important;left:0!important;width:100%!important;color:rgba(0,0,0,0.87)!important;padding-top:5px!important;text-transform:capitalize!important;font-family:Roboto,sans-serif!important;font-weight:400!important;line-height:13px!important;font-size:11px!important;text-align:center!important}.i-amphtml-story-system-layer{background:linear-gradient(180deg,rgba(0,0,0,0.32),transparent)!important;position:absolute!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:justify!important;justify-content:space-between!important;top:0!important;left:0!important;right:0!important;height:54px!important;z-index:100000!important;transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;pointer-events:none!important;font-family:Roboto,sans-serif!important}[desktop] .i-amphtml-story-system-layer{height:96px!important}.i-amphtml-story-hidden.i-amphtml-story-system-layer{opacity:0!important;transition:opacity 0.15s cubic-bezier(0.4,0.0,1,1)!important}.i-amphtml-story-hidden.i-amphtml-story-system-layer *{pointer-events:none!important}.i-amphtml-story-attribution{top:0!important;border:none!important;pointer-events:auto!important;cursor:pointer!important;padding:6px 8px 0!important;height:48px!important;place-items:center!important;display:-ms-flexbox!important;display:flex!important;text-decoration:none!important;overflow:hidden!important;visibility:hidden!important}.i-amphtml-story-attribution-visible{visibility:visible!important}[desktop] .i-amphtml-story-attribution{padding:6px 6px 0!important;left:0!important;right:0!important}.i-amphtml-story-attribution>*{margin:0px 4px!important}.i-amphtml-story-attribution-logo-container{display:grid!important;place-items:center!important}.i-amphtml-story-attribution-logo{border-radius:100%!important;border:1px solid #d4d4d4!important;width:28px!important;height:28px!important;-o-object-fit:cover!important;object-fit:cover!important;box-shadow:0px 0px 6px rgba(0,0,0,0.12)!important}.i-amphtml-story-attribution-text{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;font-size:13px!important;font-weight:500!important;text-shadow:0px 0px 6px rgba(0,0,0,0.16)!important;color:#fff!important}.i-amphtml-story-system-layer-buttons,.i-amphtml-story-system-layer-buttons-start-position{display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:row!important;flex-direction:row!important;-ms-flex-pack:end!important;justify-content:flex-end!important;padding-top:6px!important;box-sizing:border-box!important}.i-amphtml-story-system-layer-buttons-start-position{position:absolute!important;top:0!important;-ms-flex-pack:start!important;justify-content:flex-start!important}[desktop] .i-amphtml-story-system-layer-buttons{padding:8px 4px 0!important}.i-amphtml-story-system-layer-buttons .i-amphtml-story-ui-hide-button.i-amphtml-story-button{display:none!important}.i-amphtml-story-button{background-repeat:no-repeat!important;background-position:50%!important;height:48px!important;width:48px!important;cursor:pointer!important;border:none!important;pointer-events:auto!important;background:50% no-repeat!important;background-size:24px 24px!important}[desktop] .i-amphtml-story-button{margin:0 4px!important;background-size:32px 32px!important;padding:8px!important}.i-amphtml-story-button:active{background-color:rgba(0,0,0,0.2)!important}.i-amphtml-story-progress-bar{border:0!important;display:-ms-flexbox!important;display:flex!important;height:2px!important;left:0!important;margin:4px 0 0!important;padding:0 2px!important;position:absolute!important;right:0!important;top:0!important;visibility:visible!important;z-index:100001!important}[ad-showing] .i-amphtml-story-attribution,[ad-showing] .i-amphtml-story-progress-bar:not([i-amphtml-ad-progress-exp]){visibility:hidden!important}[ad-showing] .i-amphtml-story-share-control{display:none!important}[ad-showing]:not([i-amphtml-current-page-has-audio])\n.i-amphtml-story-mute-audio-control,[ad-showing]:not([i-amphtml-current-page-has-audio])\n.i-amphtml-story-unmute-audio-control{visibility:hidden!important}.i-amphtml-story-page-progress-bar{background:hsla(0,0%,100%,0.4)!important;border-radius:1px!important;height:100%!important;list-style-type:none!important;margin:0 2px!important;overflow:hidden!important;width:100%!important}.i-amphtml-story-page-progress-value{background:#fff!important;transform:translateZ(0) scaleX(0)!important}.i-amphtml-story-ad-progress-value,.i-amphtml-story-page-progress-value{height:100%!important;width:100%!important;transform-origin:left!important}.i-amphtml-story-ad-progress-value{animation-name:i-amphtml-story-ad-value!important;animation-timing-function:linear!important;background-color:#fbc02d!important;position:relative!important;top:-100%!important}@keyframes i-amphtml-story-ad-value{0%{transform:scaleX(0)}to{transform:scaleX(1)}}[paused] .i-amphtml-story-ad-progress-value{animation-play-state:paused!important}[dir=rtl] .i-amphtml-story-ad-progress-value,[dir=rtl] .i-amphtml-story-page-progress-value{transform-origin:right!important}.i-amphtml-first-page-active[info] .i-amphtml-message-container{padding-right:48px!important}.i-amphtml-first-page-active[info][dir=rtl] .i-amphtml-message-container{padding-right:auto!important;padding-left:48px!important}.i-amphtml-message-container{display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;width:-webkit-max-content!important;width:max-content!important;transition-property:opacity,transform!important;position:absolute!important;top:0!important;right:48px!important;height:100%!important;color:#fff!important;font-size:16px!important;text-shadow:0px 0px 6px rgba(0,0,0,0.36)!important}[dir=rtl] .i-amphtml-message-container{right:auto!important;left:48px!important}[i-amphtml-story-messagedisplay=noshow] .i-amphtml-message-container{transition:opacity 0.2s cubic-bezier(0.4,0.0,1,1),visibility 0.2s,transform 0.0s 0.2s!important;opacity:0!important;visibility:hidden!important;transform:translateX(10px)!important}[i-amphtml-story-has-new-page=noshow] .i-amphtml-story-has-new-page-notification-container{transition:opacity 1.5s,visibility 1.5s!important;opacity:0!important;visibility:hidden!important}.i-amphtml-last-page-active[i-amphtml-story-has-new-page=show] .i-amphtml-story-has-new-page-notification-container{transition:opacity 1.5s,visibility 1.5s!important;opacity:1!important;visibility:visible!important}[dir=rtl][i-amphtml-story-messagedisplay=noshow] .i-amphtml-message-container{transform:translateX(-10px)!important}[i-amphtml-story-messagedisplay=show] .i-amphtml-message-container{transition:opacity 0.2s cubic-bezier(0.0,0.0,0.2,1),visibility 0.2s,transform 0.2s cubic-bezier(0.4,0.0,0.2,1)!important;opacity:1!important;visibility:visible!important;transform:translateX(0px)!important}.i-amphtml-story-mute-text,.i-amphtml-story-unmute-no-sound-text,.i-amphtml-story-unmute-sound-text{width:-webkit-max-content!important;width:max-content!important;color:#fff!important}.i-amphtml-story-sound-display{display:inline-block!important;height:46px!important;position:relative!important}.i-amphtml-paused-display,.i-amphtml-story-mute-audio-control,.i-amphtml-story-mute-text,.i-amphtml-story-no-audio-ui .i-amphtml-story-sound-display,.i-amphtml-story-pause-control,.i-amphtml-story-play-control,.i-amphtml-story-skip-to-next,.i-amphtml-story-unmute-audio-control,.i-amphtml-story-unmute-no-sound-text,.i-amphtml-story-unmute-sound-text{display:none!important}.i-amphtml-story-desktop-one-panel .i-amphtml-paused-display,.i-amphtml-story-has-audio:not([muted]) .i-amphtml-story-mute-audio-control,.i-amphtml-story-has-audio[muted] .i-amphtml-story-unmute-audio-control,[desktop] .i-amphtml-paused-display{display:block!important}.i-amphtml-story-system-layer-buttons button[disabled]{opacity:0.3!important;cursor:initial!important}.amp-mode-keyboard-active:not([desktop]) .i-amphtml-paused-display,.i-amphtml-story-has-audio[muted] .i-amphtml-story-mute-text,.i-amphtml-story-has-playback-ui:not([paused]) .i-amphtml-story-pause-control,.i-amphtml-story-has-playback-ui[paused] .i-amphtml-story-play-control,:not([i-amphtml-current-page-has-audio]).i-amphtml-story-has-audio:not([muted]) .i-amphtml-story-unmute-no-sound-text,[i-amphtml-current-page-has-audio].i-amphtml-story-has-audio:not([muted]) .i-amphtml-story-unmute-sound-text{display:block!important}.i-amphtml-story-ui-no-buttons .i-amphtml-story-button,.i-amphtml-story-ui-no-buttons .i-amphtml-story-system-layer-buttons{visibility:hidden!important}.i-amphtml-story-unmute-audio-control{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFF'%3E%3Cpath d='M5.2 4 4 5.2l4.5 4.5H4v5.6h3.8l4.7 4.8v-6.4l4 4c-.6.5-1.3.9-2.1 1.1v2c1.3-.3 2.5-1 3.5-1.7l1.9 1.9 1.2-1.2-8.5-8.5L5.2 4zm13.4 11a6.6 6.6 0 0 0-4.2-8.8v-2A8.5 8.5 0 0 1 20 16.4L18.6 15zm-4.2-6.3a4.3 4.3 0 0 1 2.3 4.4l-2.3-2.3V8.7zm-3.9-1.8 2-2v4l-2-2z'/%3E%3C/svg%3E\")!important}[desktop] .i-amphtml-story-unmute-audio-control{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23FFF'%3E%3Cpath d='M7.4 6 6 7.4l5.3 5.3H6v6.7h4.4L16 25v-7.5l4.7 4.7c-.7.6-1.6 1-2.5 1.3v2.3c1.5-.3 2.9-1.1 4.1-2l2.3 2.3 1.4-1.4-10-10L7.4 6zm15.8 12.9c.4-.9.6-1.9.6-2.9 0-3.5-2.3-6.5-5.6-7.5V6.3a10 10 0 0 1 6.7 14.3l-1.7-1.7zm-5-7.4c1.7.8 2.8 2.5 2.8 4.5l-.1.7-2.7-2.7v-2.5zm-4.5-2.1L16 7.1v4.6l-2.3-2.3z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-mute-audio-control{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFF'%3E%3Cpath d='M4 9.6v5.8h3.8l4.7 4.9V4.7L7.8 9.6H4zm12.7 2.9c0-1.7-1-3.2-2.3-4v7.9a4.3 4.3 0 0 0 2.3-3.9z'/%3E%3Cpath d='M14.4 4v2c2.7.8 4.7 3.4 4.7 6.5 0 3-2 5.7-4.7 6.5v2a8.7 8.7 0 0 0 6.6-8.5c0-4.1-2.8-7.6-6.6-8.5z'/%3E%3C/svg%3E\")!important}[desktop] .i-amphtml-story-mute-audio-control{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23FFF'%3E%3Cpath d='M10.4 12.6 16 6.9v18.2l-5.6-5.7H6v-6.8h4.4zM21 16a5 5 0 0 0-2.8-4.6v9.2A5 5 0 0 0 21 16zM18.2 6v2.3a8 8 0 0 1 5.6 7.7 8 8 0 0 1-5.6 7.7V26c4.5-1 7.8-5.1 7.8-10s-3.3-9-7.8-10z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-pause-control{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23FFF'%3E%3Cpath d='M13.3 25.3H8V6.7h5.3v18.6zm5.4 0V6.7H24v18.7h-5.3z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-play-control{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23FFF'%3E%3Cpath d='M23.5 16.3 9 25.7V7l14.5 9.3z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-share-control{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFF'%3E%3Cpath d='M15.6 16.4c.5-.4 1.2-.7 1.9-.7a2.7 2.7 0 1 1-2.7 2L8.4 14a2.7 2.7 0 0 1-4.7-2 2.7 2.7 0 0 1 4.7-2l6.4-3.8v-.6a2.7 2.7 0 1 1 .8 2l-6.4 3.8v1.2l6.4 3.8zm2.8-10.8c0-.5-.4-1-.9-1a1 1 0 0 0-1 1c0 .5.5.9 1 .9s1-.4 1-1zM6.5 12.9a1 1 0 0 1-1-.9c0-.5.5-1 1-1s1 .5 1 1-.5 1-1 1zm10 5.5c0 .5.5 1 1 1s1-.5 1-1-.5-.9-1-.9a1 1 0 0 0-1 1z' fill-rule='evenodd'/%3E%3C/svg%3E\")!important}[desktop] .i-amphtml-story-share-control{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23FFF'%3E%3Cpath d='M20 20.8c.5-.5 1.2-.8 2-.8 1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3l.1-.7-7-4.1c-.5.5-1.2.8-2 .8-1.7 0-3-1.3-3-3s1.3-3 3-3c.8 0 1.5.3 2 .8l7-4.1L19 9c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3c-.8 0-1.5-.3-2-.8l-7 4.1.1.7-.1.7 7 4.1zM23 9c0-.5-.5-1-1-1s-1 .5-1 1 .5 1 1 1 1-.5 1-1zm-13 8c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1zm11 6c0 .5.5 1 1 1s1-.5 1-1-.5-1-1-1-1 .5-1 1z' fill-rule='evenodd'/%3E%3C/svg%3E\")!important}[ios] .i-amphtml-story-share-control{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFF'%3E%3Cpath fill='%23fff' d='m15.7 4.6-1.3 1.3-1.5-1.5v10.3h-1.8V4.4L9.6 6 8.3 4.6 12 .9l3.7 3.7zm3.6 4.6v10c0 1-.8 1.9-1.8 1.9h-11c-1 0-1.8-.8-1.8-1.9v-10c0-1 .8-1.9 1.8-1.9h2.7v1.9H6.5v10h11v-10h-2.8V7.3h2.8c1 0 1.8.8 1.8 1.9z'/%3E%3C/svg%3E\")!important;background-size:auto!important}.i-amphtml-story-info-control{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFF'%3E%3Cpath d='M11.1 7.3H13v1.9h-1.9V7.3zm0 3.8H13v5.7h-1.9v-5.7zm.9-8.6c-5.2 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5-4.3-9.5-9.5-9.5zm0 17.1a7.6 7.6 0 1 1 0-15.2 7.6 7.6 0 0 1 0 15.2z'/%3E%3C/svg%3E\")!important;display:none!important;background-size:auto!important}.i-amphtml-story-close-control{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFF'%3E%3Cpath d='M19 6.4 17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6L19 6.4z'/%3E%3C/svg%3E\")!important}[desktop] .i-amphtml-story-close-control{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23FFF'%3E%3Cpath d='m25.3 8.5-1.8-1.8L16 14 8.5 6.7 6.7 8.5 14 16l-7.4 7.5 1.8 1.8L16 18l7.5 7.4 1.8-1.8L18 16l7.4-7.5z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-skip-to-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23FFF'%3E%3Cpath d='M19.3 16 8 24V8l11.3 8zm4.7 8h-2.7V8H24v16z'/%3E%3C/svg%3E\")!important}[desktop] .i-amphtml-story-skip-to-next{display:block!important}.i-amphtml-story-has-new-page-notification-container{position:absolute!important;z-index:100002!important;top:32px!important;right:0!important;left:0!important;opacity:0!important}.i-amphtml-story-has-new-page-notification-container,.i-amphtml-story-has-new-page-text-wrapper{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important}.i-amphtml-story-has-new-page-text-wrapper{background-color:rgba(32,33,37,0.8)!important;-ms-flex-align:center!important;align-items:center!important;padding:4px 10px 4px 0!important;border-radius:5px!important}[dir=rtl] .i-amphtml-story-has-new-page-text-wrapper{padding-right:0!important;padding-left:10px!important}.i-amphtml-story-has-new-page-text{color:#fff!important;font-size:16px!important;text-shadow:0px 0px 6px rgba(0,0,0,0.36)!important;font-weight:700!important}.i-amphtml-story-has-new-page-circle-icon{background:#03ffa0!important;border-radius:50%!important;height:6px!important;width:6px!important;position:relative!important;box-shadow:0 0 0 2px rgba(3,255,160,0.5)!important;margin:0px 10px!important}.i-amphtml-embedded.i-amphtml-first-page-active .i-amphtml-story-info-control{display:block!important}.i-amphtml-story-no-sharing .i-amphtml-story-info-control,.i-amphtml-story-no-sharing .i-amphtml-story-share-control{display:none!important}.i-amphtml-animate-progress li{transition:transform 0.8s cubic-bezier(0.4,0.0,0.2,1)!important}.i-amphtml-progress-bar-overflow.i-amphtml-story-progress-bar{width:calc(100% - 4px)!important;margin:4px 2px 0!important;overflow:hidden!important;padding:0!important}.i-amphtml-story-desktop-fullbleed .i-amphtml-story-progress-bar{height:3px!important}.i-amphtml-progress-bar-overflow .i-amphtml-story-page-progress-bar{border-radius:0px!important;list-style:none!important;margin:0 2px!important;width:2px!important;position:absolute!important;transform-origin:left!important}[dir=rtl].i-amphtml-progress-bar-overflow .i-amphtml-story-page-progress-bar{transform-origin:right!important}[desktop] .i-amphtml-progress-bar-overflow .i-amphtml-story-page-progress-bar{width:3px!important}.i-amphtml-story-desktop-one-panel.i-amphtml-story-system-layer{width:var(--i-amphtml-story-desktop-one-panel-width)!important;margin:auto!important;margin-top:var(--i-amphtml-story-desktop-one-panel-responsive-margin)!important;border-radius:var(--i-amphtml-story-desktop-one-panel-border-radius)!important}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story-system-layer.css*/";

  // extensions/amp-story/1.0/development-ui.js
  function toggleHiddenAttribute(vsync, el, isHidden) {
    vsync.mutate(function() {
      toggle(el, !isHidden);
    });
  }
  function createButton(win, classNameOrList, handler) {
    var button = win.document.createElement("div");
    button.setAttribute("role", "button");
    if (isArray(classNameOrList)) {
      classNameOrList.forEach(function(className) {
        return button.classList.add(className);
      });
    } else {
      button.classList.add(classNameOrList);
    }
    button.classList.add("i-amphtml-story-button");
    button.addEventListener("click", handler);
    return button;
  }
  var DevelopmentModeLogButtonSet = /* @__PURE__ */ function() {
    function DevelopmentModeLogButtonSet2(win) {
      this.win_ = win;
      this.root_ = null;
      this.errorButton_ = null;
      this.warningButton_ = null;
      this.successButton_ = null;
    }
    DevelopmentModeLogButtonSet2.create = function create(win) {
      return new DevelopmentModeLogButtonSet2(win);
    };
    var _proto = DevelopmentModeLogButtonSet2.prototype;
    _proto.build = function build(logButtonActionFn) {
      this.errorButton_ = createButton(this.win_, ["i-amphtml-story-error-button", "i-amphtml-story-dev-logs-button"], function() {
        return logButtonActionFn();
      });
      this.warningButton_ = createButton(this.win_, ["i-amphtml-story-warning-button", "i-amphtml-story-dev-logs-button"], function() {
        return logButtonActionFn();
      });
      this.successButton_ = createButton(this.win_, ["i-amphtml-story-success-button", "i-amphtml-story-dev-logs-button"], function() {
        return logButtonActionFn();
      });
      this.root_ = this.win_.document.createElement("div");
      this.root_.appendChild(this.errorButton_);
      this.root_.appendChild(this.warningButton_);
      this.root_.appendChild(this.successButton_);
      return this.root_;
    };
    _proto.getButtonForLogEntry_ = function getButtonForLogEntry_(logEntry) {
      if (logEntry.conforms) {
        return this.successButton_;
      }
      switch (logEntry.level) {
        case LogLevel_Enum.ERROR:
          return this.errorButton_;
        case LogLevel_Enum.WARN:
          return this.warningButton_;
        default:
          return null;
      }
    };
    _proto.log = function log(logEntry) {
      var button = this.getButtonForLogEntry_(logEntry);
      if (!button) {
        return;
      }
      var oldCount = parseInt(button.getAttribute("data-count") || 0, 10);
      button.setAttribute("data-count", oldCount + 1);
    };
    _proto.clear = function clear() {
      this.errorButton_.setAttribute("data-count", 0);
      this.warningButton_.setAttribute("data-count", 0);
      this.successButton_.setAttribute("data-count", 0);
    };
    return DevelopmentModeLogButtonSet2;
  }();
  var DevelopmentModeLog = /* @__PURE__ */ function() {
    function DevelopmentModeLog2(win) {
      this.win_ = win;
      this.root_ = null;
      this.entriesEl_ = null;
      this.contextStringEl_ = null;
    }
    DevelopmentModeLog2.create = function create(win) {
      return new DevelopmentModeLog2(win);
    };
    var _proto2 = DevelopmentModeLog2.prototype;
    _proto2.build = function build() {
      var _this = this;
      this.contextStringEl_ = this.win_.document.createElement("span");
      this.contextStringEl_.classList.add("i-amphtml-story-developer-log-context");
      var titleEl = this.win_.document.createElement("div");
      titleEl.textContent = "Developer logs for page ";
      titleEl.appendChild(this.contextStringEl_);
      var closeDeveloperLogEl = createButton(this.win_, "i-amphtml-story-developer-log-close", function() {
        return _this.hide();
      });
      var headerEl = this.win_.document.createElement("div");
      headerEl.classList.add("i-amphtml-story-developer-log-header");
      headerEl.appendChild(titleEl);
      headerEl.appendChild(closeDeveloperLogEl);
      this.entriesEl_ = this.win_.document.createElement("ul");
      this.entriesEl_.classList.add("i-amphtml-story-developer-log-entries");
      this.root_ = this.win_.document.createElement("div");
      this.root_.classList.add("i-amphtml-story-developer-log");
      toggle(this.root_, false);
      this.root_.appendChild(headerEl);
      this.root_.appendChild(this.entriesEl_);
      this.clear();
      return this.root_;
    };
    _proto2.getCssLogLevelClass_ = function getCssLogLevelClass_(logLevel) {
      switch (logLevel) {
        case LogLevel_Enum.WARN:
          return "i-amphtml-story-developer-log-entry-warning";
        case LogLevel_Enum.ERROR:
          return "i-amphtml-story-developer-log-entry-error";
        default:
          return null;
      }
    };
    _proto2.getCssConformanceClass_ = function getCssConformanceClass_(conforms) {
      if (conforms) {
        return "i-amphtml-story-developer-log-entry-success";
      }
      return null;
    };
    _proto2.log = function log(logEntry) {
      var logLevelClass = this.getCssLogLevelClass_(logEntry.level);
      var conformanceClass = this.getCssConformanceClass_(logEntry.conforms);
      var logEntryUi = this.win_.document.createElement("li");
      logEntryUi.classList.add("i-amphtml-story-developer-log-entry");
      if (logLevelClass) {
        logEntryUi.classList.add(logLevelClass);
      }
      if (conformanceClass) {
        logEntryUi.classList.add(conformanceClass);
      }
      logEntryUi.textContent = logEntry.message;
      this.entriesEl_.appendChild(logEntryUi);
    };
    _proto2.clear = function clear() {
      var _this2 = this;
      Services.vsyncFor(this.win_).mutate(function() {
        removeChildren(dev().assertElement(_this2.entriesEl_));
      });
    };
    _proto2.setContextString = function setContextString(contextString) {
      this.contextStringEl_.textContent = contextString;
    };
    _proto2.toggle = function toggle2() {
      var newHiddenState = !this.root_.hasAttribute("hidden");
      toggleHiddenAttribute(Services.vsyncFor(this.win_), dev().assertElement(this.root_), newHiddenState);
    };
    _proto2.hide = function hide() {
      toggleHiddenAttribute(Services.vsyncFor(this.win_), dev().assertElement(this.root_), true);
    };
    return DevelopmentModeLog2;
  }();

  // extensions/amp-story/1.0/progress-bar.js
  var TRANSITION_LINEAR = "transform " + POLL_INTERVAL_MS + "ms linear";
  var TRANSITION_EASE = "transform 200ms ease";
  var ELLIPSE_WIDTH_PX = 2;
  var SEGMENTS_MARGIN_PX = 4;
  var MAX_SEGMENTS = 20;
  var SEGMENT_INCREMENT = 5;
  var ProgressBar = /* @__PURE__ */ function() {
    function ProgressBar2(win, storyEl) {
      this.win_ = win;
      this.isBuilt_ = false;
      this.root_ = null;
      this.segmentCount_ = 0;
      this.activeSegmentIndex_ = 0;
      this.activeSegmentProgress_ = 1;
      this.ampdoc_ = Services.ampdocServiceFor(this.win_).getSingleDoc();
      this.mutator_ = Services.mutatorForDoc(this.ampdoc_);
      this.segmentIdMap_ = map();
      this.storeService_ = getStoreService(this.win_);
      this.activeSegmentId_ = "";
      this.segments_ = [];
      this.segmentsAddedPromise_ = resolvedPromise();
      this.firstExpandedSegmentIndex_ = 0;
      this.storyEl_ = storyEl;
      this.currentAdSegment_ = null;
    }
    ProgressBar2.create = function create(win, storyEl) {
      return new ProgressBar2(win, storyEl);
    };
    var _proto = ProgressBar2.prototype;
    _proto.build = function build(initialSegmentId) {
      var _this = this;
      if (this.isBuilt_) {
        return this.getRoot();
      }
      this.root_ = this.win_.document.createElement("ol");
      this.root_.setAttribute("aria-hidden", true);
      this.root_.classList.add("i-amphtml-story-progress-bar");
      this.storyEl_.addEventListener(EventType.REPLAY, function() {
        _this.replay_();
      });
      this.storeService_.subscribe(StateProperty.PAGE_IDS, function(pageIds) {
        if (_this.isBuilt_) {
          _this.clear_();
        }
        _this.segmentsAddedPromise_ = _this.mutator_.mutateElement(_this.getRoot(), function() {
          pageIds.forEach(function(id) {
            if (!(id in _this.segmentIdMap_)) {
              _this.addSegment_(id);
            }
          });
        });
        if (_this.isBuilt_) {
          _this.updateProgress(_this.activeSegmentId_, _this.activeSegmentProgress_, true);
        }
      }, true);
      this.storeService_.subscribe(StateProperty.RTL_STATE, function(rtlState) {
        _this.onRtlStateUpdate_(rtlState);
      }, true);
      this.storeService_.subscribe(StateProperty.UI_STATE, function(uiState) {
        _this.onUIStateUpdate_(uiState);
      }, true);
      this.storeService_.subscribe(StateProperty.AD_STATE, function(adState) {
        _this.onAdStateUpdate_(adState);
      });
      Services.viewportForDoc(this.ampdoc_).onResize(debounce(this.win_, function() {
        return _this.onResize_();
      }, 300));
      this.segmentsAddedPromise_.then(function() {
        if (_this.segmentCount_ > MAX_SEGMENTS) {
          _this.getInitialFirstExpandedSegmentIndex_(_this.segmentIdMap_[initialSegmentId]);
          _this.render_(false);
        }
        _this.getRoot().classList.toggle("i-amphtml-progress-bar-overflow", _this.segmentCount_ > MAX_SEGMENTS);
      });
      this.isBuilt_ = true;
      return this.getRoot();
    };
    _proto.replay_ = function replay_() {
      if (this.segmentCount_ > MAX_SEGMENTS) {
        this.firstExpandedSegmentIndex_ = 0;
        this.render_(false);
      }
    };
    _proto.render_ = function render_(shouldAnimate) {
      var _this2 = this;
      if (shouldAnimate === void 0) {
        shouldAnimate = true;
      }
      this.getSegmentWidth_().then(function(segmentWidth) {
        var translateX = -(_this2.firstExpandedSegmentIndex_ - _this2.getPrevEllipsisCount_()) * (ELLIPSE_WIDTH_PX + SEGMENTS_MARGIN_PX);
        _this2.mutator_.mutateElement(_this2.getRoot(), function() {
          _this2.getRoot().classList.toggle("i-amphtml-animate-progress", shouldAnimate);
          for (var index = 0; index < _this2.segmentCount_; index++) {
            var width = index >= _this2.firstExpandedSegmentIndex_ && index < _this2.firstExpandedSegmentIndex_ + MAX_SEGMENTS ? segmentWidth : ELLIPSE_WIDTH_PX;
            _this2.transform_(_this2.segments_[index], translateX, width);
            translateX += width + SEGMENTS_MARGIN_PX;
          }
        });
      });
    };
    _proto.transform_ = function transform_(segment, translateX, width) {
      if (this.storeService_.get(StateProperty.RTL_STATE)) {
        translateX *= -1;
      }
      segment.setAttribute("style", "transform: translate3d(" + translateX + "px, 0px, 0.00001px) scaleX(" + width / ELLIPSE_WIDTH_PX + ");");
    };
    _proto.getSegmentWidth_ = function getSegmentWidth_() {
      var _this3 = this;
      var nextEllipsisCount = this.getNextEllipsisCount_();
      var prevEllipsisCount = this.getPrevEllipsisCount_();
      var totalEllipsisWidth = (nextEllipsisCount + prevEllipsisCount) * (ELLIPSE_WIDTH_PX + SEGMENTS_MARGIN_PX);
      return this.getBarWidth_().then(function(barWidth) {
        var totalSegmentsWidth = barWidth - totalEllipsisWidth;
        return totalSegmentsWidth / Math.min(_this3.segmentCount_, MAX_SEGMENTS) - SEGMENTS_MARGIN_PX;
      });
    };
    _proto.getBarWidth_ = function getBarWidth_() {
      var _this4 = this;
      return this.mutator_.measureElement(function() {
        return _this4.getRoot().getBoundingClientRect().width;
      });
    };
    _proto.getNextEllipsisCount_ = function getNextEllipsisCount_() {
      var nextPagesCount = this.segmentCount_ - (this.firstExpandedSegmentIndex_ + MAX_SEGMENTS);
      return nextPagesCount > 3 ? 3 : Math.max(nextPagesCount, 0);
    };
    _proto.getPrevEllipsisCount_ = function getPrevEllipsisCount_() {
      return Math.min(3, this.firstExpandedSegmentIndex_);
    };
    _proto.checkIndexForOverflow_ = function checkIndexForOverflow_() {
      if (this.activeSegmentIndex_ >= this.firstExpandedSegmentIndex_ + MAX_SEGMENTS) {
        var nextLimit = this.firstExpandedSegmentIndex_ + MAX_SEGMENTS + SEGMENT_INCREMENT - 1;
        this.firstExpandedSegmentIndex_ += nextLimit < this.segmentCount_ ? SEGMENT_INCREMENT : this.segmentCount_ - (this.firstExpandedSegmentIndex_ + MAX_SEGMENTS);
        this.render_();
      } else if (this.activeSegmentIndex_ < this.firstExpandedSegmentIndex_) {
        this.firstExpandedSegmentIndex_ -= this.firstExpandedSegmentIndex_ - SEGMENT_INCREMENT < 0 ? this.firstExpandedSegmentIndex_ : SEGMENT_INCREMENT;
        this.render_();
      }
    };
    _proto.onRtlStateUpdate_ = function onRtlStateUpdate_(rtlState) {
      var _this5 = this;
      this.mutator_.mutateElement(this.getRoot(), function() {
        rtlState ? _this5.getRoot().setAttribute("dir", "rtl") : _this5.getRoot().removeAttribute("dir");
      });
    };
    _proto.onResize_ = function onResize_() {
      if (this.getRoot().classList.contains("i-amphtml-progress-bar-overflow") || this.segmentCount_ > MAX_SEGMENTS) {
        this.getInitialFirstExpandedSegmentIndex_(this.activeSegmentIndex_);
        this.render_(false);
      }
    };
    _proto.onUIStateUpdate_ = function onUIStateUpdate_(uiState) {
      switch (uiState) {
        case UIType.DESKTOP_FULLBLEED:
          MAX_SEGMENTS = 70;
          ELLIPSE_WIDTH_PX = 3;
          break;
        case UIType.MOBILE:
          MAX_SEGMENTS = 20;
          ELLIPSE_WIDTH_PX = 2;
          break;
        default:
          MAX_SEGMENTS = 20;
      }
    };
    _proto.onAdStateUpdate_ = function onAdStateUpdate_(adState) {
      var segmentExpBranch = getExperimentBranch(this.win_, StoryAdSegmentExp.ID);
      if (!segmentExpBranch || segmentExpBranch === StoryAdSegmentExp.CONTROL || segmentExpBranch === StoryAdSegmentExp.NO_ADVANCE_BOTH || segmentExpBranch === StoryAdSegmentExp.NO_ADVANCE_AD) {
        return;
      }
      if (!this.root_.hasAttribute("i-amphtml-ad-progress-exp")) {
        this.root_.setAttribute("i-amphtml-ad-progress-exp", "");
      }
      adState ? this.createAdSegment_(BranchToTimeValues[segmentExpBranch]) : this.removeAdSegment_();
    };
    _proto.createAdSegment_ = function createAdSegment_(animationDuration) {
      var _this$getRoot;
      var index = this.storeService_.get(StateProperty.CURRENT_PAGE_INDEX);
      this.updateProgressByIndex_(index, 1, false);
      var progressEl = (_this$getRoot = this.getRoot()) == null ? void 0 : _this$getRoot.querySelector(".i-amphtml-story-page-progress-bar:nth-child(" + escapeCssSelectorNth(index + 2) + ")");
      var adSegment = this.win_.document.createElement("div");
      adSegment.className = "i-amphtml-story-ad-progress-value";
      setStyle(adSegment, "animationDuration", animationDuration);
      this.currentAdSegment_ = adSegment;
      progressEl.appendChild(adSegment);
    };
    _proto.removeAdSegment_ = function removeAdSegment_() {
      var _this$currentAdSegmen;
      (_this$currentAdSegmen = this.currentAdSegment_) == null ? void 0 : _this$currentAdSegmen.parentNode.removeChild(this.currentAdSegment_);
      this.currentAdSegment_ = null;
    };
    _proto.buildSegmentEl_ = function buildSegmentEl_() {
      var segmentProgressBar = this.win_.document.createElement("li");
      segmentProgressBar.classList.add("i-amphtml-story-page-progress-bar");
      var segmentProgressValue = this.win_.document.createElement("div");
      segmentProgressValue.classList.add("i-amphtml-story-page-progress-value");
      segmentProgressBar.appendChild(segmentProgressValue);
      this.getRoot().appendChild(segmentProgressBar);
      this.segments_.push(segmentProgressBar);
    };
    _proto.clear_ = function clear_() {
      removeChildren(devAssert2(this.root_));
      this.segmentIdMap_ = map();
      this.segmentCount_ = 0;
    };
    _proto.addSegment_ = function addSegment_(id) {
      this.segmentIdMap_[id] = this.segmentCount_++;
      this.buildSegmentEl_();
    };
    _proto.getRoot = function getRoot() {
      return dev().assertElement(this.root_);
    };
    _proto.assertValidSegmentId_ = function assertValidSegmentId_(segmentId) {
      devAssert2(hasOwn(this.segmentIdMap_, segmentId), "Invalid segment-id passed to progress-bar");
    };
    _proto.updateProgress = function updateProgress(segmentId, progress, updateAllSegments) {
      var _this6 = this;
      if (updateAllSegments === void 0) {
        updateAllSegments = false;
      }
      this.segmentsAddedPromise_.then(function() {
        _this6.assertValidSegmentId_(segmentId);
        var segmentIndex = _this6.segmentIdMap_[segmentId];
        _this6.updateProgressByIndex_(segmentIndex, progress);
        if (_this6.activeSegmentIndex_ !== segmentIndex || updateAllSegments) {
          _this6.updateSegments_(segmentIndex, progress, _this6.activeSegmentIndex_, _this6.activeSegmentProgress_);
        }
        _this6.activeSegmentProgress_ = progress;
        _this6.activeSegmentIndex_ = segmentIndex;
        _this6.activeSegmentId_ = segmentId;
        if (_this6.segmentCount_ > MAX_SEGMENTS) {
          _this6.checkIndexForOverflow_();
        }
      });
    };
    _proto.getInitialFirstExpandedSegmentIndex_ = function getInitialFirstExpandedSegmentIndex_(segmentIndex) {
      if (segmentIndex > MAX_SEGMENTS && segmentIndex + MAX_SEGMENTS < this.segmentCount_) {
        this.firstExpandedSegmentIndex_ = segmentIndex - segmentIndex % MAX_SEGMENTS;
      } else if (segmentIndex > MAX_SEGMENTS) {
        this.firstExpandedSegmentIndex_ = this.segmentCount_ - MAX_SEGMENTS;
      } else {
        this.firstExpandedSegmentIndex_ = 0;
      }
    };
    _proto.updateSegments_ = function updateSegments_(activeSegmentIndex, activeSegmentProgress, prevSegmentIndex, prevSegmentProgress) {
      var shouldAnimatePreviousSegment = false;
      if (prevSegmentProgress === 1 && activeSegmentProgress === 1) {
        shouldAnimatePreviousSegment = true;
      }
      if (activeSegmentIndex > prevSegmentIndex && activeSegmentProgress !== 1) {
        shouldAnimatePreviousSegment = true;
      }
      if (prevSegmentIndex > activeSegmentIndex && activeSegmentProgress === 1) {
        shouldAnimatePreviousSegment = true;
      }
      for (var i = 0; i < this.segmentCount_; i++) {
        if (i === activeSegmentIndex) {
          continue;
        }
        var progress = i < activeSegmentIndex ? 1 : 0;
        var withTransition = shouldAnimatePreviousSegment ? i === prevSegmentIndex : false;
        this.updateProgressByIndex_(i, progress, withTransition);
      }
    };
    _proto.updateProgressByIndex_ = function updateProgressByIndex_(segmentIndex, progress, withTransition) {
      if (withTransition === void 0) {
        withTransition = true;
      }
      var nthChildIndex = segmentIndex + 1;
      var progressEl = scopedQuerySelector(this.getRoot(), ".i-amphtml-story-page-progress-bar:nth-child(" + escapeCssSelectorNth(nthChildIndex) + ") .i-amphtml-story-page-progress-value");
      this.mutator_.mutateElement(devAssert2(progressEl), function() {
        var transition = "none";
        if (withTransition) {
          transition = progress === 1 || progress === 0 ? TRANSITION_EASE : TRANSITION_LINEAR;
        }
        setImportantStyles(devAssert2(progressEl), {
          "transform": scale(progress + ",1"),
          "transition": transition
        });
      });
    };
    return ProgressBar2;
  }();

  // extensions/amp-story/1.0/amp-story-system-layer.js
  var _VIEWER_CONTROL_DEFAU;
  var AD_SHOWING_ATTRIBUTE = "ad-showing";
  var AUDIO_MUTED_ATTRIBUTE = "muted";
  var PAUSED_ATTRIBUTE = "paused";
  var HAS_INFO_BUTTON_ATTRIBUTE = "info";
  var MUTE_CLASS = "i-amphtml-story-mute-audio-control";
  var CLOSE_CLASS = "i-amphtml-story-close-control";
  var SKIP_TO_NEXT_CLASS = "i-amphtml-story-skip-to-next";
  var VIEWER_CUSTOM_CONTROL_CLASS = "i-amphtml-story-viewer-custom-control";
  var UNMUTE_CLASS = "i-amphtml-story-unmute-audio-control";
  var PAUSE_CLASS = "i-amphtml-story-pause-control";
  var PLAY_CLASS = "i-amphtml-story-play-control";
  var MESSAGE_DISPLAY_CLASS = "i-amphtml-story-messagedisplay";
  var CURRENT_PAGE_HAS_AUDIO_ATTRIBUTE = "i-amphtml-current-page-has-audio";
  var SHARE_CLASS = "i-amphtml-story-share-control";
  var INFO_CLASS = "i-amphtml-story-info-control";
  var HAS_NEW_PAGE_ATTRIBUTE = "i-amphtml-story-has-new-page";
  var ATTRIBUTION_CLASS = "i-amphtml-story-attribution";
  var HIDE_MESSAGE_TIMEOUT_MS = 1500;
  var renderSystemLayerElement = function renderSystemLayerElement2(element) {
    return createElement("aside", {
      class: "i-amphtml-story-system-layer i-amphtml-story-system-reset"
    }, createElement("a", {
      class: String(ATTRIBUTION_CLASS),
      target: "_blank"
    }, createElement("div", {
      class: "i-amphtml-story-attribution-logo-container"
    }, createElement("img", {
      alt: "",
      class: "i-amphtml-story-attribution-logo"
    })), createElement("div", {
      class: "i-amphtml-story-attribution-text"
    })), createElement("div", {
      class: "i-amphtml-story-has-new-page-notification-container"
    }, createElement("div", {
      class: "i-amphtml-story-has-new-page-text-wrapper"
    }, createElement("span", {
      class: "i-amphtml-story-has-new-page-circle-icon"
    }), createElement("div", {
      class: "i-amphtml-story-has-new-page-text"
    }, localize(element, LocalizedStringId_Enum.AMP_STORY_HAS_NEW_PAGE_TEXT)))), createElement("div", {
      class: "i-amphtml-story-system-layer-buttons"
    }, createElement("div", {
      role: "button",
      class: INFO_CLASS + " i-amphtml-story-button",
      "aria-label": localize(element, LocalizedStringId_Enum.AMP_STORY_INFO_BUTTON_LABEL)
    }), createElement("div", {
      class: "i-amphtml-story-sound-display"
    }, createElement("div", {
      role: "alert",
      class: "i-amphtml-message-container"
    }, createElement("div", {
      class: "i-amphtml-story-mute-text"
    }, localize(element, LocalizedStringId_Enum.AMP_STORY_AUDIO_MUTE_BUTTON_TEXT)), createElement("div", {
      class: "i-amphtml-story-unmute-sound-text"
    }, localize(element, LocalizedStringId_Enum.AMP_STORY_AUDIO_UNMUTE_SOUND_TEXT)), createElement("div", {
      class: "i-amphtml-story-unmute-no-sound-text"
    }, localize(element, LocalizedStringId_Enum.AMP_STORY_AUDIO_UNMUTE_NO_SOUND_TEXT))), createElement("button", {
      class: UNMUTE_CLASS + " i-amphtml-story-button",
      "aria-label": localize(element, LocalizedStringId_Enum.AMP_STORY_AUDIO_UNMUTE_BUTTON_LABEL)
    }), createElement("button", {
      class: MUTE_CLASS + " i-amphtml-story-button",
      "aria-label": localize(element, LocalizedStringId_Enum.AMP_STORY_AUDIO_MUTE_BUTTON_LABEL)
    })), createElement("div", {
      class: "i-amphtml-paused-display"
    }, createElement("button", {
      class: PAUSE_CLASS + " i-amphtml-story-button",
      "aria-label": localize(element, LocalizedStringId_Enum.AMP_STORY_PAUSE_BUTTON_LABEL)
    }), createElement("button", {
      class: PLAY_CLASS + " i-amphtml-story-button",
      "aria-label": localize(element, LocalizedStringId_Enum.AMP_STORY_PLAY_BUTTON_LABEL)
    })), createElement("button", {
      class: SKIP_TO_NEXT_CLASS + " i-amphtml-story-ui-hide-button i-amphtml-story-button",
      "aria-label": localize(element, LocalizedStringId_Enum.AMP_STORY_SKIP_TO_NEXT_BUTTON_LABEL)
    }), createElement("button", {
      class: SHARE_CLASS + " i-amphtml-story-button",
      "aria-label": localize(element, LocalizedStringId_Enum.AMP_STORY_SHARE_BUTTON_LABEL)
    }), createElement("button", {
      class: CLOSE_CLASS + " i-amphtml-story-ui-hide-button i-amphtml-story-button",
      "aria-label": localize(element, LocalizedStringId_Enum.AMP_STORY_CLOSE_BUTTON_LABEL)
    })), createElement("div", {
      class: "i-amphtml-story-system-layer-buttons-start-position"
    }));
  };
  var VIEWER_CONTROL_EVENT_NAME = "__AMP_VIEWER_CONTROL_EVENT_NAME__";
  var VIEWER_CONTROL_TYPES = {
    CLOSE: "close",
    SHARE: "share",
    DEPRECATED_SKIP_NEXT: "skip-next",
    SKIP_TO_NEXT: "skip-to-next"
  };
  var VIEWER_CONTROL_DEFAULTS = (_VIEWER_CONTROL_DEFAU = {}, _VIEWER_CONTROL_DEFAU[VIEWER_CONTROL_TYPES.SHARE] = {
    "selector": "." + SHARE_CLASS
  }, _VIEWER_CONTROL_DEFAU[VIEWER_CONTROL_TYPES.CLOSE] = {
    "selector": "." + CLOSE_CLASS
  }, _VIEWER_CONTROL_DEFAU[VIEWER_CONTROL_TYPES.DEPRECATED_SKIP_NEXT] = {
    "selector": "." + SKIP_TO_NEXT_CLASS
  }, _VIEWER_CONTROL_DEFAU[VIEWER_CONTROL_TYPES.SKIP_TO_NEXT] = {
    "selector": "." + SKIP_TO_NEXT_CLASS
  }, _VIEWER_CONTROL_DEFAU);
  var SystemLayer = /* @__PURE__ */ function() {
    function SystemLayer2(win, parentEl) {
      this.win_ = win;
      this.parentEl_ = parentEl;
      this.isBuilt_ = false;
      this.root_ = null;
      this.systemLayerEl_ = null;
      this.buttonsContainer_ = null;
      this.progressBar_ = ProgressBar.create(win, this.parentEl_);
      this.developerLog_ = DevelopmentModeLog.create(win);
      this.developerButtons_ = DevelopmentModeLogButtonSet.create(win);
      this.storeService_ = getStoreService(this.win_);
      this.vsync_ = Services.vsyncFor(this.win_);
      this.timer_ = Services.timerFor(this.win_);
      this.timeoutId_ = null;
      this.viewer_ = null;
      this.viewerMessagingHandler_ = null;
    }
    var _proto = SystemLayer2.prototype;
    _proto.build = function build(initialPageId) {
      var _this = this;
      if (this.isBuilt_) {
        return this.getRoot();
      }
      this.isBuilt_ = true;
      this.root_ = this.win_.document.createElement("div");
      this.root_.classList.add("i-amphtml-system-layer-host");
      this.systemLayerEl_ = renderSystemLayerElement(this.parentEl_);
      this.systemLayerEl_.querySelector(".i-amphtml-story-share-control").href = Services.documentInfoForDoc(this.parentEl_).canonicalUrl;
      createShadowRootWithStyle(this.root_, this.systemLayerEl_, CSS10);
      this.systemLayerEl_.insertBefore(this.progressBar_.build(initialPageId), this.systemLayerEl_.firstChild);
      this.buttonsContainer_ = this.systemLayerEl_.querySelector(".i-amphtml-story-system-layer-buttons");
      this.buildForDevelopmentMode_();
      this.initializeListeners_();
      this.storeService_.subscribe(StateProperty.CAN_SHOW_SYSTEM_LAYER_BUTTONS, function(canShowButtons) {
        _this.systemLayerEl_.classList.toggle("i-amphtml-story-ui-no-buttons", !canShowButtons);
      }, true);
      if (Services.platformFor(this.win_).isIos()) {
        this.systemLayerEl_.setAttribute("ios", "");
      }
      this.viewer_ = Services.viewerForDoc(this.win_.document.documentElement);
      this.viewerMessagingHandler_ = this.viewer_.isEmbedded() ? new AmpStoryViewerMessagingHandler(this.win_, this.viewer_) : null;
      if (shouldShowStoryUrlInfo(this.viewer_, this.storeService_)) {
        this.systemLayerEl_.classList.add("i-amphtml-embedded");
        this.getShadowRoot().setAttribute(HAS_INFO_BUTTON_ATTRIBUTE, "");
      } else {
        this.getShadowRoot().removeAttribute(HAS_INFO_BUTTON_ATTRIBUTE);
      }
      this.maybeBuildAttribution_();
      this.getShadowRoot().setAttribute(MESSAGE_DISPLAY_CLASS, "noshow");
      this.getShadowRoot().setAttribute(HAS_NEW_PAGE_ATTRIBUTE, "noshow");
      return this.getRoot();
    };
    _proto.maybeBuildAttribution_ = function maybeBuildAttribution_() {
      if (!this.viewer_ || this.viewer_.getParam("attribution") !== "auto") {
        return;
      }
      this.systemLayerEl_.querySelector(".i-amphtml-story-attribution-logo").src = getStoryAttributeSrc(this.parentEl_, "entity-logo-src") || getStoryAttributeSrc(this.parentEl_, "publisher-logo-src");
      var anchorEl = this.systemLayerEl_.querySelector("." + escapeCssSelectorIdent(ATTRIBUTION_CLASS));
      anchorEl.href = getStoryAttributeSrc(this.parentEl_, "entity-url") || getSourceOrigin(Services.documentInfoForDoc(this.parentEl_).sourceUrl);
      this.systemLayerEl_.querySelector(".i-amphtml-story-attribution-text").textContent = this.parentEl_.getAttribute("entity") || this.parentEl_.getAttribute("publisher");
      anchorEl.classList.add("i-amphtml-story-attribution-visible");
    };
    _proto.buildForDevelopmentMode_ = function buildForDevelopmentMode_() {
      if (!getMode().development) {
        return;
      }
      this.buttonsContainer_.appendChild(this.developerButtons_.build(this.developerLog_.toggle.bind(this.developerLog_)));
      this.getShadowRoot().appendChild(this.developerLog_.build());
    };
    _proto.initializeListeners_ = function initializeListeners_() {
      var _this2 = this;
      this.getShadowRoot().addEventListener("click", function(event) {
        var target = dev().assertElement(event.target);
        if (matches(target, "." + MUTE_CLASS + ", ." + MUTE_CLASS + " *")) {
          _this2.onAudioIconClick_(true);
        } else if (matches(target, "." + UNMUTE_CLASS + ", ." + UNMUTE_CLASS + " *")) {
          _this2.onAudioIconClick_(false);
        } else if (matches(target, "." + PAUSE_CLASS + ", ." + PAUSE_CLASS + " *")) {
          _this2.onPausedClick_(true);
        } else if (matches(target, "." + PLAY_CLASS + ", ." + PLAY_CLASS + " *")) {
          _this2.onPausedClick_(false);
        } else if (matches(target, "." + SHARE_CLASS + ", ." + SHARE_CLASS + " *")) {
          _this2.onShareClick_(event);
        } else if (matches(target, "." + INFO_CLASS + ", ." + INFO_CLASS + " *")) {
          _this2.onInfoClick_();
        } else if (matches(target, "." + VIEWER_CUSTOM_CONTROL_CLASS + ", ." + VIEWER_CUSTOM_CONTROL_CLASS + " *")) {
          _this2.onViewerControlClick_(dev().assertElement(event.target));
        } else if (matches(target, "." + ATTRIBUTION_CLASS + ", ." + ATTRIBUTION_CLASS + " *")) {
          var anchorClicked = closest(target, function(e) {
            return matches(e, "a[href]");
          });
          triggerClickFromLightDom(anchorClicked, _this2.parentEl_);
        }
      });
      this.storeService_.subscribe(StateProperty.AD_STATE, function(isAd) {
        _this2.onAdStateUpdate_(isAd);
      });
      this.storeService_.subscribe(StateProperty.CAN_SHOW_AUDIO_UI, function(show) {
        _this2.onCanShowAudioUiUpdate_(show);
      }, true);
      this.storeService_.subscribe(StateProperty.CAN_SHOW_SHARING_UIS, function(show) {
        _this2.onCanShowSharingUisUpdate_(show);
      }, true);
      this.storeService_.subscribe(StateProperty.STORY_HAS_AUDIO_STATE, function(hasAudio) {
        _this2.onStoryHasAudioStateUpdate_(hasAudio);
      }, true);
      this.storeService_.subscribe(StateProperty.STORY_HAS_PLAYBACK_UI_STATE, function(hasPlaybackUi) {
        _this2.onStoryHasPlaybackUiStateUpdate_(hasPlaybackUi);
      }, true);
      this.storeService_.subscribe(StateProperty.MUTED_STATE, function(isMuted) {
        _this2.onMutedStateUpdate_(isMuted);
      }, true);
      this.storeService_.subscribe(StateProperty.UI_STATE, function(uiState) {
        _this2.onUIStateUpdate_(uiState);
      }, true);
      this.storeService_.subscribe(StateProperty.PAUSED_STATE, function(isPaused) {
        _this2.onPausedStateUpdate_(isPaused);
      }, true);
      this.storeService_.subscribe(StateProperty.CURRENT_PAGE_INDEX, function(index) {
        _this2.onPageIndexUpdate_(index);
      }, true);
      this.storeService_.subscribe(StateProperty.RTL_STATE, function(rtlState) {
        _this2.onRtlStateUpdate_(rtlState);
      }, true);
      this.storeService_.subscribe(StateProperty.KEYBOARD_ACTIVE_STATE, function(keyboardState) {
        _this2.onKeyboardActiveUpdate_(keyboardState);
      }, true);
      this.storeService_.subscribe(StateProperty.PAGE_HAS_AUDIO_STATE, function(audio) {
        _this2.onPageHasAudioStateUpdate_(audio);
      }, true);
      this.storeService_.subscribe(StateProperty.PAGE_HAS_ELEMENTS_WITH_PLAYBACK_STATE, function(hasPlaybackUi) {
        _this2.onPageHasElementsWithPlaybackStateUpdate_(hasPlaybackUi);
      }, true);
      this.storeService_.subscribe(StateProperty.SYSTEM_UI_IS_VISIBLE_STATE, function(isVisible) {
        _this2.onSystemUiIsVisibleStateUpdate_(isVisible);
      });
      this.storeService_.subscribe(StateProperty.NEW_PAGE_AVAILABLE_ID, function() {
        _this2.onNewPageAvailable_();
      });
      this.storeService_.subscribe(StateProperty.VIEWER_CUSTOM_CONTROLS, function(config) {
        return _this2.onViewerCustomControls_(config);
      }, true);
    };
    _proto.getRoot = function getRoot() {
      return dev().assertElement(this.root_);
    };
    _proto.getShadowRoot = function getShadowRoot() {
      return dev().assertElement(this.systemLayerEl_);
    };
    _proto.onAdStateUpdate_ = function onAdStateUpdate_(isAd) {
      isAd ? this.getShadowRoot().setAttribute(AD_SHOWING_ATTRIBUTE, "") : this.getShadowRoot().removeAttribute(AD_SHOWING_ATTRIBUTE);
    };
    _proto.onCanShowAudioUiUpdate_ = function onCanShowAudioUiUpdate_(canShowAudioUi) {
      var _this3 = this;
      this.vsync_.mutate(function() {
        _this3.getShadowRoot().classList.toggle("i-amphtml-story-no-audio-ui", !canShowAudioUi);
      });
    };
    _proto.onCanShowSharingUisUpdate_ = function onCanShowSharingUisUpdate_(canShowSharingUis) {
      var _this4 = this;
      this.vsync_.mutate(function() {
        _this4.getShadowRoot().classList.toggle("i-amphtml-story-no-sharing", !canShowSharingUis);
      });
    };
    _proto.onStoryHasAudioStateUpdate_ = function onStoryHasAudioStateUpdate_(hasAudio) {
      var _this5 = this;
      this.vsync_.mutate(function() {
        _this5.getShadowRoot().classList.toggle("i-amphtml-story-has-audio", hasAudio);
      });
    };
    _proto.onStoryHasPlaybackUiStateUpdate_ = function onStoryHasPlaybackUiStateUpdate_(hasPlaybackUi) {
      var _this6 = this;
      this.vsync_.mutate(function() {
        _this6.getShadowRoot().classList.toggle("i-amphtml-story-has-playback-ui", hasPlaybackUi);
      });
    };
    _proto.onPageHasAudioStateUpdate_ = function onPageHasAudioStateUpdate_(pageHasAudio) {
      var _this7 = this;
      pageHasAudio = pageHasAudio || !!this.storeService_.get(StateProperty.STORY_HAS_BACKGROUND_AUDIO_STATE);
      this.vsync_.mutate(function() {
        pageHasAudio ? _this7.getShadowRoot().setAttribute(CURRENT_PAGE_HAS_AUDIO_ATTRIBUTE, "") : _this7.getShadowRoot().removeAttribute(CURRENT_PAGE_HAS_AUDIO_ATTRIBUTE);
      });
    };
    _proto.onPageHasElementsWithPlaybackStateUpdate_ = function onPageHasElementsWithPlaybackStateUpdate_(pageHasElementsWithPlayback) {
      var _this8 = this;
      this.vsync_.mutate(function() {
        toArray(_this8.getShadowRoot().querySelectorAll(".i-amphtml-paused-display button")).forEach(function(button) {
          button.disabled = !pageHasElementsWithPlayback;
        });
      });
    };
    _proto.onMutedStateUpdate_ = function onMutedStateUpdate_(isMuted) {
      var _this9 = this;
      this.vsync_.mutate(function() {
        isMuted ? _this9.getShadowRoot().setAttribute(AUDIO_MUTED_ATTRIBUTE, "") : _this9.getShadowRoot().removeAttribute(AUDIO_MUTED_ATTRIBUTE);
      });
    };
    _proto.onPausedStateUpdate_ = function onPausedStateUpdate_(isPaused) {
      var _this10 = this;
      this.vsync_.mutate(function() {
        isPaused ? _this10.getShadowRoot().setAttribute(PAUSED_ATTRIBUTE, "") : _this10.getShadowRoot().removeAttribute(PAUSED_ATTRIBUTE);
      });
    };
    _proto.hideMessageAfterTimeout_ = function hideMessageAfterTimeout_(message) {
      var _this11 = this;
      if (this.timeoutId_) {
        this.timer_.cancel(this.timeoutId_);
      }
      this.timeoutId_ = this.timer_.delay(function() {
        return _this11.hideMessageInternal_(message);
      }, HIDE_MESSAGE_TIMEOUT_MS);
    };
    _proto.hideMessageInternal_ = function hideMessageInternal_(message) {
      var _this12 = this;
      if (!this.isBuilt_) {
        return;
      }
      this.vsync_.mutate(function() {
        _this12.getShadowRoot().setAttribute(message, "noshow");
      });
    };
    _proto.onUIStateUpdate_ = function onUIStateUpdate_(uiState) {
      var _this13 = this;
      this.vsync_.mutate(function() {
        var shadowRoot = _this13.getShadowRoot();
        shadowRoot.classList.remove("i-amphtml-story-desktop-fullbleed");
        shadowRoot.classList.remove("i-amphtml-story-desktop-one-panel");
        shadowRoot.removeAttribute("desktop");
        switch (uiState) {
          case UIType.DESKTOP_FULLBLEED:
            shadowRoot.setAttribute("desktop", "");
            shadowRoot.classList.add("i-amphtml-story-desktop-fullbleed");
            break;
          case UIType.DESKTOP_ONE_PANEL:
            shadowRoot.classList.add("i-amphtml-story-desktop-one-panel");
            break;
        }
      });
    };
    _proto.onSystemUiIsVisibleStateUpdate_ = function onSystemUiIsVisibleStateUpdate_(isVisible) {
      var _this14 = this;
      this.vsync_.mutate(function() {
        _this14.getShadowRoot().classList.toggle("i-amphtml-story-hidden", !isVisible);
      });
    };
    _proto.onPageIndexUpdate_ = function onPageIndexUpdate_(index) {
      var _this15 = this;
      this.vsync_.mutate(function() {
        var lastIndex = _this15.storeService_.get(StateProperty.PAGE_IDS).length - 1;
        _this15.getShadowRoot().classList.toggle("i-amphtml-first-page-active", index === 0);
        _this15.getShadowRoot().classList.toggle("i-amphtml-last-page-active", index === lastIndex);
      });
    };
    _proto.onRtlStateUpdate_ = function onRtlStateUpdate_(rtlState) {
      var _this16 = this;
      this.vsync_.mutate(function() {
        rtlState ? _this16.getShadowRoot().setAttribute("dir", "rtl") : _this16.getShadowRoot().removeAttribute("dir");
      });
    };
    _proto.onKeyboardActiveUpdate_ = function onKeyboardActiveUpdate_(keyboardActive) {
      var _this17 = this;
      this.vsync_.mutate(function() {
        _this17.getShadowRoot().classList.toggle("amp-mode-keyboard-active", keyboardActive);
      });
    };
    _proto.onAudioIconClick_ = function onAudioIconClick_(mute) {
      var _this18 = this;
      this.storeService_.dispatch(Action.TOGGLE_MUTED, mute);
      this.vsync_.mutate(function() {
        _this18.getShadowRoot().setAttribute(MESSAGE_DISPLAY_CLASS, "show");
        _this18.hideMessageAfterTimeout_(MESSAGE_DISPLAY_CLASS);
      });
    };
    _proto.onPausedClick_ = function onPausedClick_(paused) {
      this.storeService_.dispatch(Action.TOGGLE_PAUSED, paused);
    };
    _proto.onShareClick_ = function onShareClick_(event) {
      event.preventDefault();
      if (event.target[VIEWER_CONTROL_EVENT_NAME]) {
        this.onViewerControlClick_(dev().assertElement(event.target));
        return;
      }
      var isOpen = this.storeService_.get(StateProperty.SHARE_MENU_STATE);
      this.storeService_.dispatch(Action.TOGGLE_SHARE_MENU, !isOpen);
    };
    _proto.onViewerControlClick_ = function onViewerControlClick_(element) {
      var eventName = element[VIEWER_CONTROL_EVENT_NAME];
      this.viewerMessagingHandler_ && this.viewerMessagingHandler_.send("documentStateUpdate", dict({
        "state": AMP_STORY_PLAYER_EVENT,
        "value": eventName
      }));
    };
    _proto.onInfoClick_ = function onInfoClick_() {
      var isOpen = this.storeService_.get(StateProperty.INFO_DIALOG_STATE);
      this.storeService_.dispatch(Action.TOGGLE_INFO_DIALOG, !isOpen);
    };
    _proto.onNewPageAvailable_ = function onNewPageAvailable_() {
      var _this19 = this;
      this.vsync_.mutate(function() {
        _this19.getShadowRoot().setAttribute(HAS_NEW_PAGE_ATTRIBUTE, "show");
        _this19.hideMessageAfterTimeout_(HAS_NEW_PAGE_ATTRIBUTE);
      });
    };
    _proto.onViewerCustomControls_ = function onViewerCustomControls_(controls) {
      var _this20 = this;
      if (controls.length <= 0) {
        return;
      }
      controls.forEach(function(control) {
        if (!control.name) {
          return;
        }
        var defaultConfig = VIEWER_CONTROL_DEFAULTS[control.name];
        var element;
        if (defaultConfig && defaultConfig.selector) {
          element = scopedQuerySelector(_this20.getShadowRoot(), defaultConfig.selector);
        } else {
          element = _this20.win_.document.createElement("button");
          _this20.vsync_.mutate(function() {
            element.classList.add("i-amphtml-story-button");
            _this20.buttonsContainer_.appendChild(element);
          });
        }
        _this20.vsync_.mutate(function() {
          element.classList.add(VIEWER_CUSTOM_CONTROL_CLASS);
        });
        if (control.visibility === "hidden") {
          _this20.vsync_.mutate(function() {
            element.classList.add("i-amphtml-story-ui-hide-button");
          });
        }
        if (!control.visibility || control.visibility === "visible") {
          _this20.vsync_.mutate(function() {
            dev().assertElement(element).classList.remove("i-amphtml-story-ui-hide-button");
          });
        }
        if (control.state === "disabled") {
          _this20.vsync_.mutate(function() {
            element.disabled = true;
          });
        }
        if (control.position === "start") {
          var startButtonContainer = _this20.systemLayerEl_.querySelector(".i-amphtml-story-system-layer-buttons-start-position");
          _this20.vsync_.mutate(function() {
            _this20.buttonsContainer_.removeChild(element);
            startButtonContainer.appendChild(element);
          });
        }
        if (control.backgroundImageUrl) {
          setImportantStyles(dev().assertElement(element), {
            "background-image": "url('" + control.backgroundImageUrl + "')"
          });
        }
        element[VIEWER_CONTROL_EVENT_NAME] = "amp-story-player-" + control.name;
      });
    };
    _proto.updateProgress = function updateProgress(pageId, progress) {
      this.progressBar_.updateProgress(pageId, progress);
    };
    _proto.logInternal_ = function logInternal_(logEntry) {
      this.developerButtons_.log(logEntry);
      this.developerLog_.log(logEntry);
    };
    _proto.logAll = function logAll(logEntries) {
      var _this21 = this;
      if (!getMode().development) {
        return;
      }
      this.vsync_.mutate(function() {
        logEntries.forEach(function(logEntry) {
          return _this21.logInternal_(logEntry);
        });
      });
    };
    _proto.log = function log(logEntry) {
      if (!getMode().development) {
        return;
      }
      this.logInternal_(logEntry);
    };
    _proto.resetDeveloperLogs = function resetDeveloperLogs() {
      if (!getMode().development) {
        return;
      }
      this.developerButtons_.clear();
      this.developerLog_.clear();
    };
    _proto.setDeveloperLogContextString = function setDeveloperLogContextString(contextString) {
      if (!getMode().development) {
        return;
      }
      this.developerLog_.setContextString(contextString);
    };
    _proto.hideDeveloperLog = function hideDeveloperLog() {
      if (!getMode().development) {
        return;
      }
      this.developerLog_.hide();
    };
    return SystemLayer2;
  }();

  // build/amp-story-unsupported-browser-layer-1.0.css.js
  var CSS11 = ".i-amphtml-story-unsupported-browser-overlay{position:absolute!important;z-index:20000001!important;font-family:Roboto,sans-serif;font-weight:700!important;line-height:1.5;padding:32px;background-color:#000!important;color:#fff!important;top:0!important;left:0!important;right:0!important;bottom:0!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important;text-align:center!important;display:none!important}.i-amphtml-story-unsupported-browser-overlay .i-amphtml-story-overlay-text{color:#fff!important}.i-amphtml-story-unsupported-browser-overlay{display:-ms-flexbox!important;display:flex!important}.i-amphtml-gear-icon{background-repeat:no-repeat!important;background-position:50%!important;border-radius:50%!important;background-color:#fff!important;padding:16px!important;height:24px!important;width:24px!important;margin:16px auto!important;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 20 20'%3E%3Cpath fill='none' d='M0 0h20v20H0V0z'/%3E%3Cpath d='M16 10.8V9.2L17.5 8c.2-.1.2-.3.1-.5L16 4.7c0-.2-.3-.2-.5-.2l-2 .8-1.3-.7-.3-2.2c0-.2-.2-.3-.4-.3H8.4c-.2 0-.4.1-.4.3l-.3 2.2a6 6 0 0 0-1.3.7l-2-.8c-.2 0-.4 0-.5.2L2.3 7.4v.5l1.8 1.3a5 5 0 0 0 0 1.6L2.4 12c-.2.1-.2.3-.1.5l1.6 2.8c0 .2.3.2.5.2l2-.8 1.3.7.3 2.2c0 .2.2.3.4.3h3.2c.2 0 .4-.1.4-.3l.3-2.2a6 6 0 0 0 1.3-.7l2 .8c.2 0 .4 0 .5-.2l1.6-2.8V12L16 10.8zM10 13c-1.6 0-3-1.4-3-3s1.4-3 3-3 3 1.4 3 3-1.4 3-3 3z'/%3E%3C/svg%3E\")!important}.i-amphtml-continue-button{border-radius:20px;font-family:Roboto,sans-serif;color:#000;font-weight:400!important;font-size:16px;background:#fff;padding:10px 20px;border:2px solid #aaa;text-decoration:none;display:block;margin-top:25px;margin-right:auto;margin-left:auto;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important;text-align:center!important}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story-unsupported-browser-layer.css*/";

  // extensions/amp-story/1.0/amp-story-unsupported-browser-layer.js
  var renderContent = function renderContent2(context, continueAnyway) {
    return createElement("div", {
      class: "i-amphtml-story-unsupported-browser-overlay"
    }, createElement("div", {
      class: "i-amphtml-overlay-container"
    }, createElement("div", {
      class: "i-amphtml-gear-icon"
    }), createElement("div", {
      class: "i-amphtml-story-overlay-text"
    }, localize(context, LocalizedStringId_Enum.AMP_STORY_WARNING_UNSUPPORTED_BROWSER_TEXT)), createElement("button", {
      class: "i-amphtml-continue-button",
      onClick: continueAnyway
    }, localize(context, LocalizedStringId_Enum.AMP_STORY_CONTINUE_ANYWAY_BUTTON_LABEL))));
  };
  function renderUnsupportedBrowserLayer(context, continueAnyway) {
    var content = renderContent(context, continueAnyway);
    return createShadowRootWithStyle(createElement("div", null), content, CSS11);
  }

  // src/consent.js
  function getConsentPolicyState(element, policyId) {
    if (policyId === void 0) {
      policyId = "default";
    }
    return Services.consentPolicyServiceForDocOrNull(element).then(function(consentPolicy) {
      if (!consentPolicy) {
        return null;
      }
      return consentPolicy.whenPolicyResolved(policyId);
    });
  }

  // extensions/amp-story/1.0/amp-story.js
  var _MAX_MEDIA_ELEMENT_CO;
  function _inherits12(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf12(subClass, superClass);
  }
  function _setPrototypeOf12(o, p) {
    _setPrototypeOf12 = Object.setPrototypeOf || function _setPrototypeOf13(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf12(o, p);
  }
  function _createSuper12(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct12();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf12(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf12(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn12(this, result);
    };
  }
  function _possibleConstructorReturn12(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized12(self2);
  }
  function _assertThisInitialized12(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct12() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf12(o) {
    _getPrototypeOf12 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf13(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf12(o);
  }
  var LocalizedStringsAr = JSON.parse('{"2":"\u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \\"\u0627\u0644\u062A\u0627\u0644\u064A\\"","3":"\u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \\"\u0627\u0644\u0639\u0648\u062F\u0629\\"","4":"\u062A\u0639\u0630\u0651\u064E\u0631 \u0646\u0633\u062E \u0627\u0644\u0631\u0627\u0628\u0637 \u0625\u0644\u0649 \u0627\u0644\u062D\u0627\u0641\u0638\u0629 :(","5":"\u062A\u0645 \u0646\u0633\u062E \u0627\u0644\u0631\u0627\u0628\u0637!","6":"\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A","7":"Facebook","9":"\u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0631\u0627\u0628\u0637","10":"LinkedIn","11":"Pinterest","12":"\u0631\u0633\u0627\u0644\u0629 \u0646\u0635\u064A\u0629 \u0642\u0635\u064A\u0631\u0629","13":"\u0627\u0644\u0645\u0632\u064A\u062F","14":"Tumblr","15":"Twitter","16":"WhatsApp","19":"\u064A\u062C\u0628 \u062A\u0645\u0643\u064A\u0646 \u062A\u062C\u0631\u0628\u0629 amp-story \u0644\u0639\u0631\u0636 \u0647\u0630\u0627 \u0627\u0644\u0645\u062D\u062A\u0648\u0649.","21":"\u0639\u0630\u0631\u064B\u0627\u060C \u064A\u0628\u062F\u0648 \u0623\u0646 \u0645\u062A\u0635\u0641\u062D\u0643 \u0644\u0627 \u064A\u062F\u0639\u0645 \u0647\u0630\u0647 \u0627\u0644\u062A\u062C\u0631\u0628\u0629","22":"\u0642\u0628\u0648\u0644","23":"\u0631\u0641\u0636","25":"\u0627\u0644\u0639\u0631\u0636 \u0639\u0644\u0649 \u0627\u0644\u0646\u0637\u0627\u0642 \u0627\u0644\u0623\u0635\u0644\u064A:","26":"\u0627\u0644\u0645\u0632\u064A\u062F \u0639\u0646 \u0646\u062A\u0627\u0626\u062C AMP","27":"\u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629 \u0639\u0644\u0649 \u0623\u064A \u062D\u0627\u0644","31":"\u0627\u0644\u0635\u0648\u062A \u0645\u062A\u0648\u0642\u0641","32":"\u0627\u0644\u0635\u0648\u062A \u064A\u0639\u0645\u0644","33":"\u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629 \u0644\u064A\u0633 \u0644\u0647\u0627 \u0635\u0648\u062A","34":"\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0641\u064A\u062F\u064A\u0648","35":"\u0627\u0644\u0633\u062D\u0628 \u0644\u0623\u0639\u0644\u0649","62":"\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0628\u062F\u0621\u064B\u0627 \u0645\u0646 \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629","63":"Line","64":"\u062A\u0645 \u0627\u0644\u062A\u062D\u062F\u064A\u062B","65":"\u0641\u0634\u0644 \u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0641\u064A\u062F\u064A\u0648","66":"\u0643\u062A\u0645 \u0635\u0648\u062A \u0627\u0644\u0642\u0635\u0629","67":"\u0625\u0644\u063A\u0627\u0621 \u0643\u062A\u0645 \u0635\u0648\u062A \u0627\u0644\u0642\u0635\u0629","68":"\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0642\u0635\u0629","69":"\u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0644\u0642\u0635\u0629","70":"\u062A\u0634\u063A\u064A\u0644 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0642\u0635\u0629","71":"\u0623","72":"\u0628","73":"\u062C","74":"\u062F","75":"\u0627\u0644\u0646\u0635\u064A\u062D\u0629 1 \u0645\u0646 2","76":"\u0627\u0646\u0642\u0631 \u0644\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0625\u0644\u0649 \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629","77":"\u0627\u0644\u062A\u0627\u0644\u064A","78":"\u0627\u0644\u0646\u0635\u064A\u062D\u0629 2 \u0645\u0646 2","79":"\u0627\u0633\u062D\u0628 \u0644\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0625\u0644\u0649 \u0627\u0644\u0642\u0635\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629","80":"\u0641\u0647\u0645\u062A","81":"\u0646\u0635\u064A\u062D\u0629","82":"\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629","83":"\u062A\u0641\u0639\u064A\u0644","84":"\u0627\u0644\u0646\u0642\u0627\u0637:","85":"\u0625\u064A\u0642\u0627\u0641 \u0627\u0644\u0642\u0635\u0629 \u0645\u0624\u0642\u062A\u064B\u0627","86":"\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0642\u0635\u0629","87":"\u0625\u063A\u0644\u0627\u0642","88":"\u062A\u062E\u0637\u064A \u0627\u0644\u062A\u0627\u0644\u064A","89":"\u0633\u064A\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0631\u062F\u0643 \u0625\u0644\u0649","90":"\u0627\u0644\u0642\u0635\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629","91":"\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629","92":"\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644","93":"\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629","96":"\u062D\u0631\u0651\u0650\u0643 \u0627\u0644\u062C\u0647\u0627\u0632 \u0644\u0644\u0627\u0633\u062A\u0643\u0634\u0627\u0641","97":"\u062C\u0627\u0631\u064D \u0627\u0644\u0641\u062A\u062D","98":"\u0644\u0645 \u064A\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0646\u0645\u0648\u0630\u062C\u060C \u062D\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649","99":"\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0646\u0645\u0648\u0630\u062C \u0628\u0646\u062C\u0627\u062D"}');
  var LocalizedStringsDe = JSON.parse('{"2":"Tippe auf \\\\\\"Weiter\\\\\\"","3":"Tippe auf \\\\\\"Zur\xFCck\\\\\\"","4":"Der Link konnte nicht in die Zwischenablage kopiert werden :(","5":"Link kopiert!","6":"E-Mail","7":"Facebook","9":"Link abrufen","10":"LinkedIn","11":"Pinterest","12":"SMS","13":"Mehr","14":"Tumblr","15":"Twitter","16":"WhatsApp","19":"Um diesen Inhalt anzuzeigen, musst du das Experiment f\xFCr amp-story aktivieren.","21":"Leider unterst\xFCtzt dein Browser diese Art der Pr\xE4sentation nicht.","22":"Akzeptieren","23":"Ablehnen","25":"In urspr\xFCnglicher Domain ansehen:","26":"Mehr \xFCber AMP Ergebnisse","27":"Trotzdem fortfahren","31":"Ton aus","32":"Ton an","33":"Diese Seite hat keinen Ton","34":"Video abspielen","35":"Nach oben wischen","62":"Ab dieser Seite teilen","63":"Line","64":"Aktualisiert","65":"Video konnte nicht abgespielt werden","66":"Story stummschalten","67":"Stummschaltung der Story aufheben","68":"Infos zur Story","69":"Story teilen","70":"Story Men\xFC ein/aus","71":"A","72":"B","73":"C","74":"D","75":"Tipp 1 von 2","76":"Hier tippen, um zum n\xE4chsten Bildschirm zu gelangen","77":"Weiter","78":"Tipp 2 von 2","79":"Wischen, um zur n\xE4chsten Story zu gelangen","80":"Verstanden","81":"Tipp","82":"Vorherige Seite","83":"Aktivieren","84":"SCORE:","85":"Story anhalten","86":"Story abspielen","87":"Schlie\xDFen","88":"N\xE4chstes Element","89":"Deine Antwort wird gesendet an","90":"N\xE4chste Story","91":"N\xE4chste Seite","92":"Wiederholen","93":"Vorherige Seite","96":"Bewege dein Ger\xE4t, um dich umzusehen","97":"Wird ge\xF6ffnet","98":"Formular nicht abgeschickt, versuche es erneut","99":"Formular erfolgreich abgeschickt"}');
  var LocalizedStringsEn = JSON.parse('{"2":"Tap Next","3":"Tap Back","4":"Could not copy link to clipboard :(","5":"Link copied!","6":"Email","7":"Facebook","9":"Get Link","10":"LinkedIn","11":"Pinterest","12":"SMS","13":"More","14":"Tumblr","15":"Twitter","16":"WhatsApp","19":"You must enable the amp-story experiment to view this content.","21":"We\'re sorry, it looks like your browser doesn\'t support this experience","22":"Accept","23":"Decline","25":"View on original domain:","26":"More about AMP results","27":"Continue Anyway","31":"Sound off","32":"Sound on","33":"This page has no sound","34":"Play video","35":"Swipe up","62":"Share starting from this page","63":"Line","64":"Updated","65":"Video failed to play","66":"Mute story","67":"Unmute story","68":"Story information","69":"Share story","70":"Toggle story menu","71":"A","72":"B","73":"C","74":"D","75":"Tip 1 of 2","76":"Tap to go to the next screen","77":"Next","78":"Tip 2 of 2","79":"Swipe to go to the next story","80":"Got it","81":"Tip","82":"Previous page","83":"Activate","84":"SCORE:","85":"Pause story","86":"Play story","87":"Close","88":"Skip next","89":"Your response will be sent to","90":"Next story","91":"Next page","92":"Replay","93":"Previous page","96":"Move device to explore","97":"Opening","98":"Form not submitted, try again","99":"Form successfully submitted","100":"Read more"}');
  var LocalizedStringsEnGb = JSON.parse('{"2":"Tap Next","3":"Tap Back","4":"Could not copy link to clipboard :(","5":"Link copied!","6":"Email","7":"Facebook","9":"Get Link","10":"LinkedIn","11":"Pinterest","12":"SMS","13":"More","14":"Tumblr","15":"Twitter","16":"WhatsApp","19":"You must enable the AMP Story experiment to view this content.","21":"We\'re sorry, it looks like your browser doesn\'t support this experience","22":"Accept","23":"Decline","25":"View on original domain:","26":"More about AMP results","27":"Continue Anyway","31":"Sound off","32":"Sound on","33":"This page has no sound","34":"Play video","35":"Swipe up","62":"Share starting from this page","63":"Line","64":"Updated","65":"Video failed to play","66":"Mute story","67":"Unmute story","68":"Story information","69":"Share story","70":"Toggle story menu","71":"A","72":"B","73":"C","74":"D","75":"Tip 1 of 2","76":"Tap to go to the next screen","77":"Next","78":"Tip 2 of 2","79":"Swipe to go to the next story","80":"Got it","81":"Tip","82":"Previous page","83":"Activate","84":"SCORE:","85":"Pause story","86":"Play story","87":"Close","88":"Skip to next","89":"Your response will be sent to","90":"Next story","91":"Next page","92":"Replay","93":"Previous page","96":"Move device to explore","97":"Opening","98":"Form not submitted. Please try again","99":"Form successfully submitted"}');
  var LocalizedStringsEs = JSON.parse('{"2":"Toca Siguiente","3":"Toca Atr\xE1s","4":"No se ha podido copiar el enlace en el portapapeles :(","5":"\xA1Enlace copiado!","6":"Correo electr\xF3nico","7":"Facebook","9":"Obtener enlace","10":"LinkedIn","11":"Pinterest","12":"SMS","13":"M\xE1s","14":"Tumblr","15":"Twitter","16":"WhatsApp","19":"Para ver este contenido, debes habilitar el experimento de amp-story.","21":"Parece que esta experiencia no est\xE1 disponible para tu navegador","22":"Aceptar","23":"Rechazar","25":"Ver en dominio original:","26":"M\xE1s informaci\xF3n sobre los resultados de AMP","27":"Continuar de todos modos","31":"Sonido desactivado","32":"Sonido activado","33":"Esta p\xE1gina no tiene sonido","34":"Reproducir v\xEDdeo","35":"Deslizar el dedo hacia arriba","62":"Compartir a partir de esta p\xE1gina","63":"Line","64":"Actualizado","65":"No se ha podido reproducir el v\xEDdeo","66":"Silenciar historia","67":"Desactivar silencio de la historia","68":"Informaci\xF3n de la historia","69":"Compartir historia","70":"Alternar men\xFA de la historia","71":"A","72":"B","73":"C","74":"D","75":"Consejo 1 de 2","76":"Toca para ir a la siguiente pantalla","77":"Siguiente","78":"Consejo 2 de 2","79":"Desliza para ir a la siguiente historia","80":"Entendido","81":"Consejo","82":"P\xE1gina anterior","83":"Activar","84":"PUNTUACI\xD3N:","85":"Pausar historia","86":"Reproducir historia","87":"Cerrar","88":"Saltar al siguiente","89":"Tu respuesta se enviar\xE1 a","90":"Siguiente historia","91":"Siguiente p\xE1gina","92":"Repetir","93":"P\xE1gina anterior","96":"Mueve el dispositivo para explorar","97":"Abriendo...","98":"Formulario no enviado. Int\xE9ntalo de nuevo","99":"Formulario enviado correctamente"}');
  var LocalizedStringsEs419 = JSON.parse('{"2":"Pulsa en Siguiente","3":"Pulsa en Atr\xE1s","4":"No se pudo copiar el enlace en el portapapeles :(","5":"\xA1Enlace copiado!","6":"Correo electr\xF3nico","7":"Facebook","9":"Obtener enlace","10":"LinkedIn","11":"Pinterest","12":"SMS","13":"M\xE1s","14":"Tumblr","15":"Twitter","16":"WhatsApp","19":"Para ver este contenido, debes habilitar el experimento en amp-story.","21":"Lo sentimos, parece que esta experiencia no est\xE1 disponible para su navegador","22":"Aceptar","23":"Rechazar","25":"Ver en el dominio original:","26":"M\xE1s informaci\xF3n sobre los resultados de AMP","27":"Continuar de todas formas","31":"Sonido desactivado","32":"Sonido activado","33":"Esta p\xE1gina no tiene sonido","34":"Reproducir video","35":"Deslizar el dedo hacia arriba","62":"Compartir a partir de esta p\xE1gina","63":"Line","64":"Actualizado","65":"No se pudo reproducir el video","66":"Silenciar historia","67":"Dejar de silenciar la historia","68":"Informaci\xF3n de la historia","69":"Compartir historia","70":"Alternar el men\xFA de la historia","71":"A","72":"B","73":"C","74":"D","75":"Consejo 1 de 2","76":"Pulsa para ir a la siguiente pantalla","77":"Siguiente","78":"Consejo 2 de 2","79":"Desliza para ir a la siguiente historia","80":"Entendido","81":"Consejo","82":"P\xE1gina anterior","83":"Activar","84":"PUNTUACI\xD3N:","85":"Pausar la historia","86":"Reproducir la historia","87":"Cerrar","88":"Saltar al siguiente","89":"Tu respuesta se enviar\xE1 a","90":"Historia siguiente","91":"P\xE1gina siguiente","92":"Repetir","93":"P\xE1gina anterior","96":"Mueve el dispositivo para explorar","97":"Abriendo...","98":"No se envi\xF3 el formulario, intenta de nuevo","99":"El formulario se envi\xF3 correctamente"}');
  var LocalizedStringsFr = JSON.parse('{"2":"Appuyez sur Suivant","3":"Appuyez sur Retour","4":"Impossible de copier le lien dans le presse-papiers :(","5":"Lien copi\xE9 !","6":"E-mail","7":"Facebook","9":"Obtenir le lien","10":"LinkedIn","11":"Pinterest","12":"SMS","13":"Plus","14":"Tumblr","15":"Twitter","16":"WhatsApp","19":"Vous devez activer l\'exp\xE9rience amp-story pour voir ce contenu.","21":"Nous sommes d\xE9sol\xE9s, mais votre navigateur n\'est pas compatible avec cette exp\xE9rience","22":"Accepter","23":"Refuser","25":"Afficher sur le domaine d\'origine :","26":"En savoir plus sur les r\xE9sultats AMP","27":"Continuer quand m\xEAme","31":"Son d\xE9sactiv\xE9","32":"Son activ\xE9","33":"Cette page n\'a pas de son","34":"Regarder la vid\xE9o","35":"Balayer l\'\xE9cran vers le haut","62":"Partager \xE0 partir de cette page","63":"Line","64":"Mis \xE0 jour","65":"La lecture de la vid\xE9o a \xE9chou\xE9","66":"D\xE9sactiver le son de l\'histoire","67":"Activer le son de l\'histoire","68":"Informations sur l\'histoire","69":"Partager l\'histoire","70":"Afficher le menu de l\'histoire","71":"A","72":"B","73":"C","74":"D","75":"Astuce 1 sur 2","76":"Appuyez pour acc\xE9der \xE0 l\'\xE9cran suivant","77":"Suivant","78":"Astuce 2 sur 2","79":"Balayez l\'\xE9cran pour acc\xE9der \xE0 l\'histoire suivante","80":"Compris","81":"Astuce","82":"Page pr\xE9c\xE9dente","83":"Activer","84":"SCORE\xA0:","85":"Mettre l\'histoire en pause","86":"Jouer l\'histoire","87":"Fermer","88":"Passer au suivant","89":"Votre r\xE9ponse sera envoy\xE9e \xE0","90":"Histoire suivante","91":"Page suivante","92":"Rejouer","93":"Page pr\xE9c\xE9dente","96":"D\xE9placez l\'appareil pour explorer","97":"Ouverture","98":"Formulaire non envoy\xE9, r\xE9essayez","99":"Formulaire envoy\xE9 avec succ\xE8s"}');
  var LocalizedStringsHi = JSON.parse('{"2":"\'\u0905\u0917\u0932\u093E\' \u092A\u0930 \u091F\u0948\u092A \u0915\u0930\u0947\u0902","3":"\'\u092A\u093F\u091B\u0932\u093E\' \u092A\u0930 \u091F\u0948\u092A \u0915\u0930\u0947\u0902","4":"\u0932\u093F\u0902\u0915 \u0915\u094B \u0915\u094D\u0932\u093F\u092A\u092C\u094B\u0930\u094D\u0921 \u092A\u0930 \u0915\u0949\u092A\u0940 \u0928\u0939\u0940\u0902 \u0915\u093F\u092F\u093E \u091C\u093E \u0938\u0915\u093E :(","5":"\u0932\u093F\u0902\u0915 \u0915\u0949\u092A\u0940 \u0915\u093F\u092F\u093E \u0917\u092F\u093E!","6":"\u0908\u092E\u0947\u0932","7":"Facebook","9":"\u0932\u093F\u0902\u0915 \u092A\u093E\u090F\u0902","10":"LinkedIn","11":"Pinterest","12":"SMS","13":"\u0914\u0930","14":"Tumblr","15":"Twitter","16":"WhatsApp","19":"\u092F\u0939 \u0915\u0902\u091F\u0947\u0902\u091F \u0926\u0947\u0916\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0906\u092A\u0915\u094B AMP Story \u090F\u0915\u094D\u0938\u092A\u0947\u0930\u0940\u092E\u0902\u091F \u091A\u093E\u0932\u0942 \u0915\u0930\u0928\u093E \u091A\u093E\u0939\u093F\u090F\u0964","21":"\u0939\u092E\u0947\u0902 \u0916\u0947\u0926 \u0939\u0948, \u0910\u0938\u093E \u0932\u0917\u0924\u093E \u0939\u0948 \u0915\u093F \u0906\u092A\u0915\u093E \u092C\u094D\u0930\u093E\u0909\u091C\u093C\u0930 \u0907\u0938 \u0935\u0947\u092C\u092A\u0947\u091C \u0915\u094B \u0938\u092A\u094B\u0930\u094D\u091F \u0928\u0939\u0940\u0902 \u0915\u0930\u0924\u093E \u0939\u0948","22":"\u0938\u094D\u0935\u0940\u0915\u093E\u0930 \u0915\u0930\u0947\u0902","23":"\u0905\u0938\u094D\u0935\u0940\u0915\u093E\u0930 \u0915\u0930\u0947\u0902","25":"\u092E\u0942\u0932 \u0921\u094B\u092E\u0947\u0928 \u092A\u0930 \u0926\u0947\u0916\u0947\u0902:","26":"AMP \u092A\u0930\u093F\u0923\u093E\u092E\u094B\u0902 \u0915\u0947 \u092C\u093E\u0930\u0947 \u092E\u0947\u0902 \u0905\u0927\u093F\u0915 \u091C\u093E\u0928\u0915\u093E\u0930\u0940","27":"\u092B\u093F\u0930 \u092D\u0940 \u091C\u093E\u0930\u0940 \u0930\u0916\u0947\u0902","31":"\u0938\u093E\u0909\u0902\u0921 \u092C\u0902\u0926","32":"\u0938\u093E\u0909\u0902\u0921 \u091A\u093E\u0932\u0942","33":"\u0907\u0938 \u092A\u0947\u091C \u092E\u0947\u0902 \u0915\u094B\u0908 \u0938\u093E\u0909\u0902\u0921 \u0928\u0939\u0940\u0902 \u0939\u0948","34":"\u0935\u0940\u0921\u093F\u092F\u094B \u091A\u0932\u093E\u090F\u0902","35":"\u090A\u092A\u0930 \u0938\u094D\u0935\u093E\u0907\u092A \u0915\u0930\u0947\u0902","62":"\u0907\u0938 \u092A\u0947\u091C \u0938\u0947 \u0936\u0941\u0930\u0942 \u0915\u0930\u0924\u0947 \u0939\u0941\u090F \u0936\u0947\u092F\u0930 \u0915\u0930\u0947\u0902","63":"Line","64":"\u0905\u092A\u0921\u0947\u091F \u0915\u093F\u092F\u093E \u0917\u092F\u093E","65":"\u0935\u0940\u0921\u093F\u092F\u094B \u091A\u0932\u0928\u0947 \u092E\u0947\u0902 \u0935\u093F\u092B\u0932 \u0930\u0939\u093E","66":"\u0938\u094D\u091F\u094B\u0930\u0940 \u0915\u094B \u092E\u094D\u092F\u0942\u091F \u0915\u0930\u0947\u0902","67":"\u0938\u094D\u091F\u094B\u0930\u0940 \u0915\u094B \u0905\u0928\u092E\u094D\u092F\u0942\u091F \u0915\u0930\u0947\u0902","68":"\u0938\u094D\u091F\u094B\u0930\u0940 \u0915\u0940 \u091C\u093E\u0928\u0915\u093E\u0930\u0940","69":"\u0938\u094D\u091F\u094B\u0930\u0940 \u0936\u0947\u092F\u0930 \u0915\u0930\u0947\u0902","70":"\u091F\u0949\u0917\u0932 \u0938\u094D\u091F\u094B\u0930\u0940 \u092E\u0947\u0928\u0942","71":"A","72":"B","73":"C","74":"D","75":"2 \u092E\u0947\u0902 \u0938\u0947 \u091F\u093F\u092A 1","76":"\u0905\u0917\u0932\u0940 \u0938\u094D\u0915\u094D\u0930\u0940\u0928 \u092A\u0930 \u091C\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u091F\u0948\u092A \u0915\u0930\u0947\u0902","77":"\u0905\u0917\u0932\u093E","78":"2 \u092E\u0947\u0902 \u0938\u0947 \u091F\u093F\u092A 2","79":"\u0905\u0917\u0932\u0940 \u0938\u094D\u091F\u094B\u0930\u0940 \u092A\u0930 \u091C\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0938\u094D\u0935\u093E\u0907\u092A \u0915\u0930\u0947\u0902","80":"\u0938\u092E\u091D \u0917\u090F","81":"\u091F\u093F\u092A","82":"\u092A\u093F\u091B\u0932\u093E \u092A\u0947\u091C","83":"\u0938\u0915\u094D\u0930\u093F\u092F \u0915\u0930\u0947\u0902","84":"\u0938\u094D\u0915\u094B\u0930:","85":"\u0938\u094D\u091F\u094B\u0930\u0940 \u0915\u094B \u092A\u0949\u091C\u093C \u0915\u0930\u0947\u0902","86":"\u0938\u094D\u091F\u094B\u0930\u0940 \u091A\u0932\u093E\u090F\u0902","87":"\u092C\u0902\u0926 \u0915\u0930\u0947\u0902","88":"\u0905\u0917\u0932\u0947 \u092A\u0930 \u0938\u094D\u0915\u093F\u092A \u0915\u0930\u0947\u0902","89":"\u0906\u092A\u0915\u093E \u091C\u0935\u093E\u092C \u0907\u0928\u094D\u0939\u0947\u0902 \u092D\u0947\u091C\u093E \u091C\u093E\u090F\u0917\u093E","90":"\u0905\u0917\u0932\u0940 \u0938\u094D\u091F\u094B\u0930\u0940","91":"\u0905\u0917\u0932\u093E \u092A\u0947\u091C","92":"\u0930\u0940\u092A\u094D\u0932\u0947 \u0915\u0930\u0947\u0902","93":"\u092A\u093F\u091B\u0932\u093E \u092A\u0947\u091C","96":"\u0914\u0930 \u091C\u093E\u0928\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0921\u093F\u0935\u093E\u0907\u0938 \u0915\u094B \u092E\u0942\u0935 \u0915\u0930\u0947\u0902","97":"\u0916\u0941\u0932 \u0930\u0939\u093E \u0939\u0948","98":"\u092B\u093C\u0949\u0930\u094D\u092E \u0938\u092C\u092E\u093F\u091F \u0928\u0939\u0940\u0902 \u0939\u0941\u0906, \u092B\u093F\u0930 \u0938\u0947 \u0915\u094B\u0936\u093F\u0936 \u0915\u0930\u0947\u0902","99":"\u092B\u093C\u0949\u0930\u094D\u092E \u0938\u092B\u0932\u0924\u093E\u092A\u0942\u0930\u094D\u0935\u0915 \u0938\u092C\u092E\u093F\u091F \u0915\u093F\u092F\u093E \u0917\u092F\u093E"}');
  var LocalizedStringsId = JSON.parse('{"2":"Ketuk Berikutnya","3":"Ketuk Kembali","4":"Tidak dapat menyalin tautan ke clipboard :(","5":"Tautan disalin!","6":"Email","7":"Facebook","9":"Dapatkan Tautan","10":"LinkedIn","11":"Pinterest","12":"SMS","13":"Selengkapnya","14":"Tumblr","15":"Twitter","16":"WhatsApp","19":"Anda harus mengaktifkan eksperimen amp-story untuk melihat konten ini.","21":"Maaf, sepertinya browser Anda tidak mendukung pengalaman cerita ini","22":"Terima","23":"Tolak","25":"Lihat di domain asli:","26":"Selengkapnya tentang hasil AMP","27":"Lanjutkan Saja","31":"Suara dimatikan","32":"Suara dinyalakan","33":"Halaman ini tidak bersuara","34":"Putar video","35":"Usap ke atas","62":"Bagikan mulai dari halaman ini","63":"Line","64":"Diperbarui","65":"Video gagal diputar","66":"Bisukan cerita","67":"Suarakan cerita","68":"Informasi cerita","69":"Bagikan cerita","70":"Beralih menu cerita","71":"A","72":"B","73":"C","74":"D","75":"Kiat 1 dari 2","76":"Ketuk untuk pergi ke layar berikutnya","77":"Berikutnya","78":"Kiat 2 dari 2","79":"Usap untuk pergi ke cerita berikutnya","80":"Mengerti","81":"Kiat","82":"Halaman sebelumnya","83":"Aktifkan","84":"SKOR:","85":"Jeda cerita","86":"Putar cerita","87":"Tutup","88":"Lewati berikutnya","89":"Tanggapan Anda akan dikirimkan ke","90":"Cerita berikutnya","91":"Halaman berikutnya","92":"Putar ulang","93":"Halaman sebelumnya","96":"Gerakkan perangkat untuk menelusuri","97":"Pembukaan","98":"Formulir belum dikirim, coba lagi","99":"Formulir berhasil dikirim"}');
  var LocalizedStringsIt = JSON.parse('{"2":"Tocca Avanti","3":"Tocca Indietro","4":"Impossibile copiare il link negli appunti :(","5":"Link copiato!","6":"Email","7":"Facebook","9":"Ottieni link","10":"LinkedIn","11":"Pinterest","12":"SMS","13":"Altro","14":"Tumblr","15":"Twitter","16":"WhatsApp","19":"Per visualizzare questo contenuto, abilita l\'esperimento amp-story.","21":"Spiacenti, il browser in uso non supporta questa esperienza","22":"Accetta","23":"Rifiuta","25":"Visualizza nel dominio originale:","26":"Ulteriori informazioni sui risultati AMP","27":"Continua comunque","31":"Audio disattivato","32":"Audio attivato","33":"Pagina senza contenuti audio","34":"Riproduci video","35":"Scorri verso l\'alto","62":"Condividi a partire da questa pagina","63":"Line","64":"Aggiornato","65":"Impossibile riprodurre il video","66":"Disattiva audio storia","67":"Riattiva audio storia","68":"Informazioni sulla storia","69":"Condividi storia","70":"Interruttore menu storia","71":"A","72":"B","73":"C","74":"D","75":"Suggerimento 1 di 2","76":"Tocca per passare alla schermata successiva","77":"Avanti","78":"Suggerimento 2 di 2","79":"Scorri per passare alla storia successiva","80":"Ho capito","81":"Suggerimento","82":"Pagina precedente","83":"Attiva","84":"PUNTEGGIO:","85":"Metti storia in pausa","86":"Riproduci storia","87":"Chiudi","88":"Prossimo elemento","89":"La tua risposta verr\xE0 inviata a","90":"Storia successiva","91":"Pagina successiva","92":"Riproduci di nuovo","93":"Pagina precedente","96":"Muovi il dispositivo per esplorare","97":"Apertura in corso","98":"Invio del modulo non riuscito, riprova","99":"Invio del modulo riuscito"}');
  var LocalizedStringsJa = JSON.parse('{"2":"[\u6B21\u3078] \u3092\u30BF\u30C3\u30D7","3":"[\u623B\u308B] \u3092\u30BF\u30C3\u30D7","4":"\u30EA\u30F3\u30AF\u3092\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F :(","5":"\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F\uFF01","6":"\u30E1\u30FC\u30EB","7":"Facebook","9":"\u30EA\u30F3\u30AF\u3092\u53D6\u5F97","10":"LinkedIn","11":"Pinterest","12":"SMS","13":"\u305D\u306E\u4ED6","14":"Tumblr","15":"Twitter","16":"WhatsApp","19":"\u3053\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u8868\u793A\u3059\u308B\u306B\u306F\u3001amp-story \u30C6\u30B9\u30C8\u3092\u6709\u52B9\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002","21":"\u3054\u5229\u7528\u306E\u30D6\u30E9\u30A6\u30B6\u306F\u3053\u306E\u30A8\u30AF\u30B9\u30DA\u30EA\u30A8\u30F3\u30B9\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u305B\u3093","22":"\u540C\u610F\u3059\u308B","23":"\u540C\u610F\u3057\u306A\u3044","25":"\u5143\u306E\u30C9\u30E1\u30A4\u30F3\u3067\u8868\u793A:","26":"AMP \u7D50\u679C\u306B\u95A2\u3059\u308B\u8A73\u7D30","27":"\u3053\u306E\u307E\u307E\u7D9A\u884C\u3059\u308B","31":"\u97F3\u58F0\u304C\u30AA\u30D5\u306B\u306A\u308A\u307E\u3057\u305F","32":"\u97F3\u58F0\u304C\u30AA\u30F3\u306B\u306A\u308A\u307E\u3057\u305F","33":"\u3053\u306E\u30DA\u30FC\u30B8\u306B\u306F\u97F3\u58F0\u304C\u3042\u308A\u307E\u305B\u3093","34":"\u52D5\u753B\u3092\u518D\u751F","35":"\u4E0A\u306B\u30B9\u30EF\u30A4\u30D7","62":"\u3053\u306E\u30DA\u30FC\u30B8\u304B\u3089\u5171\u6709\u3092\u958B\u59CB","63":"Line","64":"\u66F4\u65B0\u3042\u308A","65":"\u52D5\u753B\u306E\u518D\u751F\u306B\u5931\u6557\u3057\u307E\u3057\u305F","66":"\u30B9\u30C8\u30FC\u30EA\u30FC\u3092\u30DF\u30E5\u30FC\u30C8","67":"\u30B9\u30C8\u30FC\u30EA\u30FC\u3092\u30DF\u30E5\u30FC\u30C8\u89E3\u9664","68":"\u30B9\u30C8\u30FC\u30EA\u30FC\u60C5\u5831","69":"\u30B9\u30C8\u30FC\u30EA\u30FC\u3092\u5171\u6709","70":"\u30B9\u30C8\u30FC\u30EA\u30FC\u30E1\u30CB\u30E5\u30FC\u306E\u5207\u308A\u66FF\u3048","71":"A","72":"B","73":"C","74":"D","75":"\u30D2\u30F3\u30C8 1/2","76":"\u30BF\u30C3\u30D7\u3059\u308B\u3068\u6B21\u306E\u753B\u9762\u306B\u9032\u307F\u307E\u3059","77":"\u6B21\u3078","78":"\u30D2\u30F3\u30C8 2/2","79":"\u30B9\u30EF\u30A4\u30D7\u3059\u308B\u3068\u6B21\u306E\u30B9\u30C8\u30FC\u30EA\u30FC\u306B\u9032\u307F\u307E\u3059","80":"\u4E86\u89E3","81":"\u30D2\u30F3\u30C8","82":"\u524D\u306E\u30DA\u30FC\u30B8","83":"\u6709\u52B9\u306B\u3059\u308B","84":"\u30B9\u30B3\u30A2:","85":"\u30B9\u30C8\u30FC\u30EA\u30FC\u3092\u4E00\u6642\u505C\u6B62","86":"\u30B9\u30C8\u30FC\u30EA\u30FC\u3092\u518D\u751F","87":"\u9589\u3058\u308B","88":"\u6B21\u3078\u30B9\u30AD\u30C3\u30D7","89":"\u56DE\u7B54\u306F\u6B21\u3078\u9001\u4FE1\u3055\u308C\u307E\u3059:","90":"\u6B21\u306E\u30B9\u30C8\u30FC\u30EA\u30FC","91":"\u6B21\u306E\u30DA\u30FC\u30B8","92":"\u3082\u3046\u4E00\u5EA6\u518D\u751F","93":"\u524D\u306E\u30DA\u30FC\u30B8","96":"\u30C7\u30D0\u30A4\u30B9\u3092\u52D5\u304B\u3057\u3066\u8A66\u3057\u3066\u304F\u3060\u3055\u3044","97":"\u958B\u3044\u3066\u3044\u307E\u3059","98":"\u30D5\u30A9\u30FC\u30E0\u306F\u9001\u4FE1\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044","99":"\u30D5\u30A9\u30FC\u30E0\u306F\u6B63\u5E38\u306B\u9001\u4FE1\u3055\u308C\u307E\u3057\u305F"}');
  var LocalizedStringsKo = JSON.parse('{"2":"\uB2E4\uC74C\uC744 \uD0ED\uD558\uC138\uC694.","3":"\uB4A4\uB85C\uB97C \uD0ED\uD558\uC138\uC694.","4":"\uB9C1\uD06C\uB97C \uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","5":"\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","6":"\uC774\uBA54\uC77C","7":"Facebook","9":"\uB9C1\uD06C \uBC1B\uAE30","10":"LinkedIn","11":"Pinterest","12":"SMS","13":"\uAE30\uD0C0","14":"Tumblr","15":"Twitter","16":"WhatsApp","19":"\uC774 \uCF58\uD150\uCE20\uB97C \uBCF4\uB824\uBA74 amp-story \uC2E4\uD5D8\uC744 \uC0AC\uC6A9\uD558\uB3C4\uB85D \uC124\uC815\uD574\uC57C \uD569\uB2C8\uB2E4.","21":"\uC0AC\uC6A9 \uC911\uC778 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC774 \uC2A4\uD1A0\uB9AC\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uAC83 \uAC19\uC2B5\uB2C8\uB2E4.","22":"\uC218\uB77D","23":"\uAC70\uBD80","25":"\uC6D0\uB798 \uB3C4\uBA54\uC778\uC5D0\uC11C \uBCF4\uAE30:","26":"AMP \uACB0\uACFC \uC790\uC138\uD788 \uC54C\uC544\uBCF4\uAE30","27":"\uACC4\uC18D\uD558\uAE30","31":"\uC0AC\uC6B4\uB4DC \uAEBC\uC9D0","32":"\uC0AC\uC6B4\uB4DC \uCF1C\uC9D0","33":"\uC774 \uD398\uC774\uC9C0\uC5D0\uB294 \uC0AC\uC6B4\uB4DC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.","34":"\uB3D9\uC601\uC0C1 \uC7AC\uC0DD","35":"\uC704\uB85C \uC2A4\uC640\uC774\uD504","62":"\uC774 \uD398\uC774\uC9C0\uBD80\uD130 \uACF5\uC720 \uC2DC\uC791","63":"Line","64":"\uC5C5\uB370\uC774\uD2B8\uB428","65":"\uB3D9\uC601\uC0C1\uC744 \uC7AC\uC0DD\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","66":"\uC2A4\uD1A0\uB9AC \uC74C\uC18C\uAC70","67":"\uC2A4\uD1A0\uB9AC \uC74C\uC18C\uAC70 \uD574\uC81C","68":"\uC2A4\uD1A0\uB9AC \uC815\uBCF4","69":"\uC2A4\uD1A0\uB9AC \uACF5\uC720","70":"\uC2A4\uD1A0\uB9AC \uBA54\uB274 \uD1A0\uAE00","71":"A","72":"B","73":"C","74":"D","75":"\uD301 1/2","76":"\uB2E4\uC74C \uD654\uBA74\uC73C\uB85C \uC774\uB3D9\uD558\uB824\uBA74 \uD0ED\uD558\uC138\uC694.","77":"\uB2E4\uC74C","78":"\uD301 2/2","79":"\uB2E4\uC74C \uC2A4\uD1A0\uB9AC\uB85C \uC774\uB3D9\uD558\uB824\uBA74 \uC2A4\uC640\uC774\uD504\uD558\uC138\uC694.","80":"\uD655\uC778","81":"\uD301","82":"\uC774\uC804 \uD398\uC774\uC9C0","83":"\uD65C\uC131\uD654","84":"\uC810\uC218:","85":"\uC2A4\uD1A0\uB9AC \uC77C\uC2DC \uC911\uC9C0","86":"\uC2A4\uD1A0\uB9AC \uC7AC\uC0DD","87":"\uB2EB\uAE30","88":"\uB2E4\uC74C\uC73C\uB85C \uAC74\uB108\uB6F0\uAE30","89":"\uC751\uB2F5\uC774 \uB2E4\uC74C\uC73C\uB85C \uBC1C\uC1A1\uB429\uB2C8\uB2E4 -","90":"\uB2E4\uC74C \uC2A4\uD1A0\uB9AC","91":"\uB2E4\uC74C \uD398\uC774\uC9C0","92":"\uB2E4\uC2DC \uC7AC\uC0DD","93":"\uC774\uC804 \uD398\uC774\uC9C0","96":"\uD0D0\uC0C9\uD558\uB824\uBA74 \uAE30\uAE30\uB97C \uC774\uB3D9\uD558\uC138\uC694.","97":"\uC5EC\uB294 \uC911","98":"\uC591\uC2DD\uC774 \uC81C\uCD9C\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC2ED\uC2DC\uC624.","99":"\uC591\uC2DD\uC774 \uC81C\uCD9C\uB418\uC5C8\uC2B5\uB2C8\uB2E4."}');
  var LocalizedStringsNl = JSON.parse('{"2":"Tik op Volgende","3":"Tik op Terug","4":"Kan link niet kopi\xEBren naar klembord :(","5":"Link gekopieerd","6":"E-mail","7":"Facebook","9":"Link ophalen","10":"LinkedIn","11":"Pinterest","12":"Sms","13":"Meer","14":"Tumblr","15":"Twitter","16":"WhatsApp","19":"Je moet het amp-story-experiment inschakelen om deze content te bekijken.","21":"Je browser ondersteunt deze ervaring niet","22":"Accepteren","23":"Weigeren","25":"Bekijken op oorspronkelijk domein:","26":"Meer over AMP-resultaten","27":"Toch doorgaan","31":"Geluid uit","32":"Geluid aan","33":"Deze pagina heeft geen geluid","34":"Video afspelen","35":"Omhoog vegen","62":"Delen vanaf deze pagina","63":"Line","64":"Bijgewerkt","65":"Video kan niet worden afgespeeld","66":"Verhaal dempen","67":"Verhaal niet meer dempen","68":"Verhaalinformatie","69":"Verhaal delen","70":"Verhaalmenu schakelen","71":"A","72":"B","73":"C","74":"D","75":"Tip 1 van 2","76":"Tik om naar het volgende scherm te gaan","77":"Volgende","78":"Tip 2 van 2","79":"Veeg om naar het volgende verhaal te gaan","80":"Begrepen","81":"Tip","82":"Vorige pagina","83":"Activeren","84":"SCORE:","85":"Verhaal pauzeren","86":"Verhaal afspelen","87":"Sluiten","88":"Overslaan naar volgende","89":"Je antwoord wordt verzonden naar","90":"Volgende verhaal","91":"Volgende pagina","92":"Herhalen","93":"Vorige pagina","96":"Beweeg het apparaat om te verkennen","97":"Wordt geopend","98":"Formulier niet verzonden, probeer het opnieuw","99":"Formulier verzonden"}');
  var LocalizedStringsNo = JSON.parse('{"2":"Trykk p\xE5 \xABNeste\xBB","3":"Trykk p\xE5 \xABTilbake\xBB","4":"Kunne ikke kopiere til utklippstavlen :(","5":"Lenke kopiert!","6":"E-post","7":"Facebook","9":"Hent lenke","10":"LinkedIn","11":"Pinterest","12":"SMS","13":"Mer","14":"Tumblr","15":"Twitter","16":"WhatsApp","19":"Du m\xE5 aktivere amp-story-eksperimentet for \xE5 se innholdet.","21":"Vi beklager! Det virker som om nettleseren din ikke st\xF8tter denne opplevelsen","22":"Godta","23":"Avsl\xE5","25":"Vis p\xE5 opprinnelig domene:","26":"Mer om AMP-resultater","27":"Fortsett likevel","31":"Lyd av","32":"Lyd p\xE5","33":"Denne siden har ingen lyd","34":"Spill av video","35":"Sveip opp","62":"Del med start fra denne siden","63":"Linje","64":"Oppdatert","65":"Kunne ikke avspille video","66":"Sl\xE5 av lyd i historie","67":"Sl\xE5 p\xE5 lyd i historie","68":"Historieinformasjon","69":"Del historie","70":"Sl\xE5 p\xE5/av historiemeny","71":"A","72":"B","73":"C","74":"D","75":"Tips \xE9n av to","76":"Trykk for \xE5 g\xE5 til neste skjerm","77":"Neste","78":"Tips to av to","79":"Sveip for \xE5 g\xE5 til neste historie","80":"Jeg forst\xE5r","81":"Tips","82":"Forrige side","83":"Aktiver","84":"RESULTAT:","85":"Sett historie p\xE5 pause","86":"Spill av historie","87":"Lukk","88":"G\xE5 til neste","89":"Svaret ditt sendes til","90":"Neste historie","91":"Neste side","92":"Spill p\xE5 nytt","93":"Forrige side","96":"Beveg p\xE5 enheten for \xE5 utforske","97":"\xC5pner","98":"Skjema ikke sendt inn. Pr\xF8v igjen","99":"Skjema sendt inn"}');
  var LocalizedStringsPtBr = JSON.parse('{"2":"Toque em Avan\xE7ar","3":"Toque em Voltar","4":"N\xE3o foi poss\xEDvel copiar o link para a \xE1rea de transfer\xEAncia :(","5":"Link copiado.","6":"E-mail","7":"Facebook","9":"Copiar link","10":"LinkedIn","11":"Pinterest","12":"SMS","13":"Mais","14":"Tumblr","15":"Twitter","16":"WhatsApp","19":"Voc\xEA precisa ativar o experimento amp-story para ver este conte\xFAdo.","21":"Parece que o navegador n\xE3o \xE9 compat\xEDvel com esta experi\xEAncia","22":"Aceitar","23":"Recusar","25":"Ver no dom\xEDnio original:","26":"Mais sobre os resultados do uso de AMP","27":"Continuar mesmo assim","31":"Som desativado","32":"Som ativado","33":"Esta p\xE1gina n\xE3o tem som","34":"Reproduzir v\xEDdeo","35":"Deslizar para cima","62":"Compartilhar a partir desta p\xE1gina","63":"Line","64":"Atualizada","65":"Falha ao reproduzir v\xEDdeo","66":"Desativar som da hist\xF3ria","67":"Ativar som da hist\xF3ria","68":"Informa\xE7\xF5es da hist\xF3ria","69":"Compartilhar hist\xF3ria","70":"Exibir menu da hist\xF3ria","71":"A","72":"B","73":"C","74":"D","75":"Dica 1 de 2","76":"Toque para ir \xE0 pr\xF3xima tela","77":"Avan\xE7ar","78":"Dica 2 de 2","79":"Deslize o dedo para ver a pr\xF3xima hist\xF3ria","80":"Entendi","81":"Dica","82":"P\xE1gina anterior","83":"Ativar","84":"PONTUA\xC7\xC3O:","85":"Pausar hist\xF3ria","86":"Reproduzir hist\xF3ria","87":"Fechar","88":"Avan\xE7ar","89":"Sua resposta ser\xE1 enviada para","90":"Pr\xF3xima hist\xF3ria","91":"Pr\xF3xima p\xE1gina","92":"Reproduzir novamente","93":"P\xE1gina anterior","96":"Mova o dispositivo para explorar","97":"Abrindo","98":"Formul\xE1rio n\xE3o enviado, tente novamente","99":"Formul\xE1rio enviado com sucesso"}');
  var LocalizedStringsPtPt = JSON.parse('{"2":"Toque em Seguinte","3":"Toque em Anterior","4":"N\xE3o foi poss\xEDvel copiar a liga\xE7\xE3o para a \xE1rea de transfer\xEAncia :(","5":"Liga\xE7\xE3o copiada!","6":"E-mail","7":"Facebook","9":"Obter liga\xE7\xE3o","10":"LinkedIn","11":"Pinterest","12":"SMS","13":"Mais","14":"Tumblr","15":"Twitter","16":"WhatsApp","19":"Deve ativar a experi\xEAncia de amp-story para ver este conte\xFAdo.","21":"Pedimos desculpa, mas parece que o seu navegador n\xE3o suporta esta experi\xEAncia","22":"Aceitar","23":"Recusar","25":"Ver no dom\xEDnio original:","26":"Mais sobre os resultados AMP","27":"Continuar mesmo assim","31":"Som desligado","32":"Som ligado","33":"Esta p\xE1gina n\xE3o tem som","34":"Reproduzir v\xEDdeo","35":"Deslizar para cima","62":"Partilhar a partir desta p\xE1gina","63":"Line","64":"Atualizada","65":"A reprodu\xE7\xE3o do v\xEDdeo falhou","66":"Desativar o som da hist\xF3ria","67":"Ativar o som da hist\xF3ria","68":"Informa\xE7\xE3o da hist\xF3ria","69":"Partilhar hist\xF3ria","70":"Alternar menu da hist\xF3ria","71":"A","72":"B","73":"C","74":"D","75":"Dica 1 de 2","76":"Toque para ir para o pr\xF3ximo ecr\xE3","77":"Pr\xF3ximo","78":"Dica 2 de 2","79":"Deslize para ir para a pr\xF3xima hist\xF3ria","80":"Compreendi","81":"Dica","82":"P\xE1gina anterior","83":"Ativar","84":"PONTUA\xC7\xC3O:","85":"Pausar hist\xF3ria","86":"Reproduzir hist\xF3ria","87":"Fechar","88":"Ir para o pr\xF3ximo","89":"A sua resposta ser\xE1 enviada para","90":"Pr\xF3xima hist\xF3ria","91":"Pr\xF3xima p\xE1gina","92":"Repetir","93":"P\xE1gina anterior","96":"Mover dispositivo para explorar","97":"A abrir","98":"Formul\xE1rio n\xE3o submetido, tente novamente","99":"Formul\xE1rio submetido com sucesso"}');
  var LocalizedStringsRu = JSON.parse('{"2":"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \\"\u0414\u0430\u043B\u0435\u0435\\"","3":"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \\"\u041D\u0430\u0437\u0430\u0434\\"","4":"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430 :(","5":"\u0421\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430!","6":"\u041F\u043E \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u0435","7":"Facebook","9":"\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443","10":"LinkedIn","11":"Pinterest","12":"SMS","13":"\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E","14":"Tumblr","15":"\u0422\u0432\u0438\u0442\u0442\u0435\u0440","16":"WhatsApp","19":"\u0414\u043B\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u044D\u0442\u043E\u043C\u0443 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0443 \u043D\u0443\u0436\u043D\u043E \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442 amp-story.","21":"\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0432\u0435\u0431-\u0438\u0441\u0442\u043E\u0440\u0438\u0439","22":"\u041F\u0440\u0438\u043D\u044F\u0442\u044C","23":"\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C","25":"\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043D\u0430 \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u043C \u0434\u043E\u043C\u0435\u043D\u0435:","26":"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u0445 AMP","27":"\u0412\u0441\u0435 \u0440\u0430\u0432\u043D\u043E \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C","31":"\u0417\u0432\u0443\u043A \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D","32":"\u0417\u0432\u0443\u043A \u0432\u043A\u043B\u044E\u0447\u0435\u043D","33":"\u0412 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0435 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u043D\u0435\u0442 \u0437\u0432\u0443\u043A\u0430","34":"\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0432\u0438\u0434\u0435\u043E","35":"\u041F\u0440\u043E\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0432\u0435\u0440\u0445","62":"\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u044F \u0441 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B","63":"Line","64":"\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430","65":"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0432\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0432\u0438\u0434\u0435\u043E","66":"\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u0432\u0443\u043A \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u0438","67":"\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u0432\u0443\u043A \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u0438","68":"\u0421\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E\u0431 \u0438\u0441\u0442\u043E\u0440\u0438\u0438","69":"\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0438\u0441\u0442\u043E\u0440\u0438\u0435\u0439","70":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C/\u0441\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E \u0438\u0441\u0442\u043E\u0440\u0438\u0438","71":"A","72":"B","73":"C","74":"D","75":"\u0421\u043E\u0432\u0435\u0442 1 \u0438\u0437 2","76":"\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C\u0443 \u044D\u043A\u0440\u0430\u043D\u0443","77":"\u0414\u0430\u043B\u0435\u0435","78":"\u0421\u043E\u0432\u0435\u0442 2 \u0438\u0437 2","79":"\u041F\u0440\u043E\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u043E \u044D\u043A\u0440\u0430\u043D\u0443, \u0447\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0438\u0441\u0442\u043E\u0440\u0438\u0438","80":"\u041F\u043E\u043D\u044F\u0442\u043D\u043E","81":"\u0421\u043E\u0432\u0435\u0442","82":"\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430","83":"\u0410\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C","84":"\u041E\u0426\u0415\u041D\u041A\u0410:","85":"\u041F\u0440\u0438\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0438\u0441\u0442\u043E\u0440\u0438\u044E","86":"\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0438\u0441\u0442\u043E\u0440\u0438\u044E","87":"\u0417\u0430\u043A\u0440\u044B\u0442\u044C","88":"\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C\u0443","89":"\u0412\u0430\u0448 \u043E\u0442\u0432\u0435\u0442 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D","90":"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0438\u0441\u0442\u043E\u0440\u0438\u044F","91":"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430","92":"\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C","93":"\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430","96":"\u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0430\u0439\u0442\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E, \u0447\u0442\u043E\u0431\u044B \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u0430\u043C","97":"\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F","98":"\u0424\u043E\u0440\u043C\u0430 \u043D\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430, \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443","99":"\u0424\u043E\u0440\u043C\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430"}');
  var LocalizedStringsTr = JSON.parse('{"2":"Sonraki\'ye dokunun","3":"Geri\'ye dokunun","4":"Ba\u011Flant\u0131 panoya kopyalanamad\u0131 :(","5":"Ba\u011Flant\u0131 kopyaland\u0131!","6":"E-posta","7":"Facebook","9":"Ba\u011Flant\u0131y\u0131 Al","10":"LinkedIn","11":"Pinterest","12":"SMS","13":"Di\u011Fer","14":"Tumblr","15":"Twitter","16":"WhatsApp","19":"Bu i\xE7eri\u011Fi g\xF6r\xFCnt\xFClemek i\xE7in amp-story deneyini etkinle\u015Ftirmelisiniz.","21":"\xDCzg\xFCn\xFCz, g\xF6r\xFCn\xFC\u015Fe g\xF6re taray\u0131c\u0131n\u0131z bu deneyimi desteklemiyor","22":"Kabul et","23":"Reddet","25":"Orijinal alanda g\xF6r\xFCnt\xFCleyin:","26":"AMP sonu\xE7lar\u0131 hakk\u0131nda daha fazla bilgi","27":"Yine De Devam Et","31":"Ses kapal\u0131","32":"Ses a\xE7\u0131k","33":"Bu sayfada ses yok","34":"Video oynat","35":"Yukar\u0131 kayd\u0131r","62":"Bu sayfadan ba\u015Flayarak payla\u015F\u0131n","63":"Line","64":"G\xFCncellendi","65":"Video oynat\u0131lamad\u0131","66":"Hikayeyi sessiz yap","67":"Hikayenin sesini a\xE7","68":"Hikaye bilgileri","69":"Hikayeyi payla\u015F","70":"Hikaye men\xFCs\xFCn\xFC a\xE7/kapat","71":"A","72":"B","73":"C","74":"D","75":"\u0130pucu 1/2","76":"Sonraki ekrana gitmek i\xE7in dokunun","77":"Sonraki","78":"\u0130pucu 2/2","79":"Sonraki hikayeye gitmek i\xE7in kayd\u0131r\u0131n","80":"Anlad\u0131m","81":"\u0130pucu","82":"\xD6nceki sayfa","83":"Etkinle\u015Ftir","84":"SKOR:","85":"Hikayeyi duraklat","86":"Hikayeyi oynat","87":"Kapat","88":"Sonrakine atla","89":"Yan\u0131t\u0131n\u0131z \u015Furaya g\xF6nderilecek:","90":"Sonraki hikaye","91":"Sonraki sayfa","92":"Tekrar oynat","93":"\xD6nceki sayfa","96":"Ke\u015Ffetmek i\xE7in cihaz\u0131 hareket ettirin","97":"A\xE7\u0131l\u0131yor","98":"Form g\xF6nderilmedi, tekrar deneyin","99":"Form ba\u015Far\u0131yla g\xF6nderildi"}');
  var LocalizedStringsVi = JSON.parse('{"2":"Ch\u1EA1m v\xE0o Ti\u1EBFp theo","3":"Ch\u1EA1m v\xE0o Quay l\u1EA1i","4":"Kh\xF4ng th\u1EC3 sao ch\xE9p li\xEAn k\u1EBFt \u0111\u1EBFn b\u1ED9 nh\u1EDB t\u1EA1m :(","5":"\u0110\xE3 sao ch\xE9p li\xEAn k\u1EBFt!","6":"Email","7":"Facebook","9":"Nh\u1EADn Li\xEAn k\u1EBFt","10":"LinkedIn","11":"Pinterest","12":"SMS","13":"Th\xEAm","14":"Tumblr","15":"Twitter","16":"WhatsApp","19":"B\u1EA1n ph\u1EA3i b\u1EADt t\xEDnh th\u1EED nghi\u1EC7m amp-story \u0111\u1EC3 xem n\u1ED9i dung n\xE0y.","21":"Ch\xFAng t\xF4i r\u1EA5t ti\u1EBFc, c\xF3 v\u1EBB nh\u01B0 tr\xECnh duy\u1EC7t c\u1EE7a b\u1EA1n kh\xF4ng h\u1ED7 tr\u1EE3 tr\u1EA3i nghi\u1EC7m n\xE0y","22":"Ch\u1EA5p nh\u1EADn","23":"T\u1EEB ch\u1ED1i","25":"Xem tr\xEAn mi\u1EC1n g\u1ED1c:","26":"Xem th\xEAm v\u1EC1 k\u1EBFt qu\u1EA3 AMP","27":"V\u1EABn ti\u1EBFp t\u1EE5c","31":"Ti\u1EBFng b\u1ECB t\u1EAFt","32":"Ti\u1EBFng \u0111\u01B0\u1EE3c b\u1EADt","33":"Trang n\xE0y kh\xF4ng c\xF3 ti\u1EBFng","34":"Ph\xE1t video","35":"Vu\u1ED1t l\xEAn","62":"B\u1EAFt \u0111\u1EA7u chia s\u1EBB t\u1EEB trang n\xE0y","63":"Line","64":"\u0110\xE3 c\u1EADp nh\u1EADt","65":"Kh\xF4ng th\u1EC3 ph\xE1t video","66":"T\u1EAFt ti\u1EBFng c\xE2u chuy\u1EC7n","67":"B\u1EADt ti\u1EBFng c\xE2u chuy\u1EC7n","68":"Th\xF4ng tin v\u1EC1 c\xE2u chuy\u1EC7n","69":"Chia s\u1EBB c\xE2u chuy\u1EC7n","70":"Chuy\u1EC3n \u0111\u1ED5i menu c\xE2u chuy\u1EC7n","71":"A","72":"B","73":"C","74":"D","75":"M\u1EB9o 1/2","76":"Ch\u1EA1m \u0111\u1EC3 \u0111i \u0111\u1EBFn m\xE0n h\xECnh ti\u1EBFp theo","77":"Ti\u1EBFp theo","78":"M\u1EB9o 2/2","79":"Vu\u1ED1t \u0111\u1EC3 chuy\u1EC3n \u0111\u1EBFn c\xE2u chuy\u1EC7n ti\u1EBFp theo","80":"T\xF4i hi\u1EC3u","81":"M\u1EB9o","82":"Trang tr\u01B0\u1EDBc","83":"K\xEDch ho\u1EA1t","84":"\u0110I\u1EC2M S\u1ED0:","85":"T\u1EA1m d\u1EEBng c\xE2u chuy\u1EC7n","86":"Ph\xE1t c\xE2u chuy\u1EC7n","87":"\u0110\xF3ng","88":"Ti\u1EBFp theo","89":"Ph\u1EA3n h\u1ED3i c\u1EE7a b\u1EA1n s\u1EBD \u0111\u01B0\u1EE3c g\u1EEDi \u0111\u1EBFn","90":"C\xE2u chuy\u1EC7n ti\u1EBFp theo","91":"Trang ti\u1EBFp theo","92":"Ph\xE1t l\u1EA1i","93":"Trang tr\u01B0\u1EDBc","96":"Di chuy\u1EC3n thi\u1EBFt b\u1ECB \u0111\u1EC3 kh\xE1m ph\xE1","97":"\u0110ang m\u1EDF","98":"Bi\u1EC3u m\u1EABu ch\u01B0a \u0111\u01B0\u1EE3c g\u1EEDi \u0111i, vui l\xF2ng th\u1EED l\u1EA1i","99":"Bi\u1EC3u m\u1EABu \u0111\xE3 \u0111\u01B0\u1EE3c g\u1EEDi \u0111i th\xE0nh c\xF4ng"}');
  var LocalizedStringsZhCn = JSON.parse('{"2":"\u70B9\u6309\u201C\u4E0B\u4E00\u9875\u201D","3":"\u70B9\u6309\u201C\u8FD4\u56DE\u201D","4":"\u65E0\u6CD5\u5C06\u94FE\u63A5\u590D\u5236\u5230\u526A\u8D34\u677F :(","5":"\u94FE\u63A5\u5DF2\u590D\u5236\uFF01","6":"\u7535\u5B50\u90AE\u4EF6","7":"Facebook","9":"\u83B7\u53D6\u94FE\u63A5","10":"LinkedIn","11":"Pinterest","12":"\u77ED\u4FE1","13":"\u66F4\u591A","14":"Tumblr","15":"Twitter","16":"WhatsApp","19":"\u60A8\u5FC5\u987B\u542F\u7528 amp-story \u5B9E\u9A8C\u624D\u80FD\u67E5\u770B\u6B64\u5185\u5BB9\u3002","21":"\u5F88\u62B1\u6B49\uFF0C\u60A8\u7684\u6D4F\u89C8\u5668\u4F3C\u4E4E\u4E0D\u652F\u6301\u6B64\u4F53\u9A8C","22":"\u63A5\u53D7","23":"\u62D2\u7EDD","25":"\u5728\u539F\u59CB\u7F51\u57DF\u4E0A\u67E5\u770B\uFF1A","26":"\u8BE6\u7EC6\u4E86\u89E3 AMP \u7ED3\u679C","27":"\u4ECD\u7136\u7EE7\u7EED","31":"\u5173\u95ED\u58F0\u97F3","32":"\u5F00\u542F\u58F0\u97F3","33":"\u6B64\u7F51\u9875\u6CA1\u6709\u58F0\u97F3","34":"\u64AD\u653E\u89C6\u9891","35":"\u5411\u4E0A\u6ED1\u52A8","62":"\u4ECE\u6B64\u7F51\u9875\u5F00\u59CB\u5206\u4EAB","63":"Line","64":"\u5DF2\u66F4\u65B0","65":"\u89C6\u9891\u65E0\u6CD5\u64AD\u653E","66":"\u5C06\u6545\u4E8B\u9759\u97F3","67":"\u5C06\u6545\u4E8B\u53D6\u6D88\u9759\u97F3","68":"\u6545\u4E8B\u4FE1\u606F","69":"\u5206\u4EAB\u6545\u4E8B","70":"\u5207\u6362\u6545\u4E8B\u83DC\u5355","71":"A","72":"B","73":"C","74":"D","75":"\u63D0\u793A 1/2","76":"\u70B9\u6309\u4EE5\u8F6C\u5230\u4E0B\u4E00\u4E2A\u5C4F\u5E55","77":"\u4E0B\u4E00\u6B65","78":"\u63D0\u793A 2/2","79":"\u6ED1\u52A8\u4EE5\u8F6C\u5230\u4E0B\u4E00\u4E2A\u6545\u4E8B","80":"\u77E5\u9053\u4E86","81":"\u63D0\u793A","82":"\u4E0A\u4E00\u9875","83":"\u6FC0\u6D3B","84":"\u5206\u6570\uFF1A","85":"\u6682\u505C\u6545\u4E8B","86":"\u64AD\u653E\u6545\u4E8B","87":"\u5173\u95ED","88":"\u8DF3\u5230\u4E0B\u4E00\u4E2A","89":"\u60A8\u7684\u56DE\u590D\u5C06\u53D1\u9001\u81F3","90":"\u4E0B\u4E00\u4E2A\u6545\u4E8B","91":"\u4E0B\u4E00\u9875","92":"\u91CD\u64AD","93":"\u4E0A\u4E00\u9875","96":"\u79FB\u52A8\u8BBE\u5907\u4EE5\u63A2\u7D22","97":"\u6B63\u5728\u6253\u5F00","98":"\u8868\u5355\u672A\u63D0\u4EA4\uFF0C\u8BF7\u91CD\u8BD5","99":"\u8868\u5355\u5DF2\u6210\u529F\u63D0\u4EA4"}');
  var LocalizedStringsZhTw = JSON.parse('{"2":"\u8F15\u89F8\u300C\u7E7C\u7E8C\u300D","3":"\u8F15\u89F8\u300C\u8FD4\u56DE\u300D","4":"\u7121\u6CD5\u5C07\u9023\u7D50\u8907\u88FD\u5230\u526A\u8CBC\u7C3F :(","5":"\u5DF2\u8907\u88FD\u9023\u7D50\uFF01","6":"\u96FB\u5B50\u90F5\u4EF6","7":"Facebook","9":"\u53D6\u5F97\u9023\u7D50","10":"LinkedIn","11":"Pinterest","12":"SMS","13":"\u66F4\u591A","14":"Tumblr","15":"Twitter","16":"WhatsApp","19":"\u60A8\u5FC5\u9808\u555F\u7528 amp-story \u5BE6\u9A57\u624D\u80FD\u6AA2\u8996\u6B64\u5167\u5BB9\u3002","21":"\u5F88\u62B1\u6B49\uFF0C\u60A8\u7684\u700F\u89BD\u5668\u4F3C\u4E4E\u4E0D\u652F\u63F4\u6B64\u9AD4\u9A57","22":"\u63A5\u53D7","23":"\u62D2\u7D55","25":"\u5728\u539F\u59CB\u7DB2\u57DF\u4E0A\u6AA2\u8996\uFF1A","26":"\u66F4\u591A AMP \u7D50\u679C\u7684\u76F8\u95DC\u8CC7\u8A0A","27":"\u4ECD\u8981\u7E7C\u7E8C","31":"\u95DC\u9589\u8072\u97F3","32":"\u958B\u555F\u8072\u97F3","33":"\u6B64\u9801\u9762\u6C92\u6709\u8072\u97F3","34":"\u64AD\u653E\u5F71\u7247","35":"\u5411\u4E0A\u6ED1\u52D5","62":"\u5F9E\u6B64\u9801\u9762\u958B\u59CB\u5206\u4EAB","63":"Line","64":"\u5DF2\u66F4\u65B0","65":"\u7121\u6CD5\u64AD\u653E\u5F71\u7247","66":"\u5C07\u6545\u4E8B\u975C\u97F3","67":"\u5C07\u6545\u4E8B\u53D6\u6D88\u975C\u97F3","68":"\u6545\u4E8B\u8CC7\u8A0A","69":"\u5206\u4EAB\u6545\u4E8B","70":"\u5207\u63DB\u6545\u4E8B\u9078\u55AE","71":"A","72":"B","73":"C","74":"D","75":"\u63D0\u793A 1/2","76":"\u8F15\u89F8\u524D\u5F80\u4E0B\u4E00\u500B\u756B\u9762","77":"\u7E7C\u7E8C","78":"\u63D0\u793A 2/2","79":"\u6ED1\u52D5\u524D\u5F80\u4E0B\u4E00\u500B\u6545\u4E8B","80":"\u77E5\u9053\u4E86","81":"\u63D0\u793A","82":"\u4E0A\u4E00\u9801","83":"\u555F\u7528","84":"\u5206\u6578\uFF1A","85":"\u66AB\u505C\u6545\u4E8B","86":"\u64AD\u653E\u6545\u4E8B","87":"\u95DC\u9589","88":"\u8DF3\u904E\u4E0B\u4E00\u500B","89":"\u60A8\u7684\u56DE\u8986\u5C07\u50B3\u9001\u81F3","90":"\u4E0B\u4E00\u500B\u6545\u4E8B","91":"\u4E0B\u4E00\u9801","92":"\u91CD\u64AD","93":"\u4E0A\u4E00\u9801","96":"\u79FB\u52D5\u88DD\u7F6E\u4EE5\u63A2\u7D22","97":"\u6B63\u5728\u958B\u555F","98":"\u8868\u55AE\u672A\u63D0\u4EA4\uFF0C\u8ACB\u518D\u8A66\u4E00\u6B21","99":"\u8868\u55AE\u5DF2\u6210\u529F\u63D0\u4EA4"}');
  var DESKTOP_WIDTH_THRESHOLD = 1024;
  var DESKTOP_HEIGHT_THRESHOLD = 550;
  var DESKTOP_ONE_PANEL_ASPECT_RATIO_THRESHOLD = "3 / 4";
  var MIN_SWIPE_FOR_HINT_OVERLAY_PX = 50;
  var Attributes = {
    AD_SHOWING: "ad-showing",
    ADVANCE_TO: "i-amphtml-advance-to",
    AUTO_ADVANCE_AFTER: "auto-advance-after",
    AUTO_ADVANCE_TO: "auto-advance-to",
    MUTED: "muted",
    ORIENTATION: "orientation",
    PUBLIC_ADVANCE_TO: "advance-to",
    RETURN_TO: "i-amphtml-return-to",
    STANDALONE: "standalone",
    SUPPORTS_LANDSCAPE: "supports-landscape",
    VISITED: "i-amphtml-visited"
  };
  var INITIAL_CONTENT_LOAD_TIMEOUT_MS = 8e3;
  var MINIMUM_AD_MEDIA_ELEMENTS = 2;
  var STORY_LOADED_CLASS_NAME = "i-amphtml-story-loaded";
  var MAX_MEDIA_ELEMENT_COUNTS = (_MAX_MEDIA_ELEMENT_CO = {}, _MAX_MEDIA_ELEMENT_CO[MediaType.AUDIO] = 4, _MAX_MEDIA_ELEMENT_CO[MediaType.VIDEO] = 8, _MAX_MEDIA_ELEMENT_CO);
  var TAG12 = "amp-story";
  var DEFAULT_THEME_COLOR = "#202125";
  var AmpStory = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits12(AmpStory2, _AMP$BaseElement);
    var _super = _createSuper12(AmpStory2);
    AmpStory2.prerenderAllowed = function prerenderAllowed() {
      return true;
    };
    function AmpStory2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.storeService_ = getStoreService(_this.win);
      if (isRTL(_this.win.document)) {
        _this.storeService_.dispatch(Action.TOGGLE_RTL, true);
      }
      _this.analyticsService_ = getAnalyticsService(_this.win, _this.element);
      _this.advancement_ = AdvancementConfig.forElement(_this.win, _this.element);
      _this.advancement_.start();
      _this.vsync_ = _this.getVsync();
      _this.shareMenu_ = new ShareMenu(_this.win, _this.element);
      _this.systemLayer_ = new SystemLayer(_this.win, _this.element);
      new AmpStoryEmbeddedComponent(_this.win, _this.element);
      _this.pages_ = [];
      _this.adPages_ = [];
      _this.variableService_ = getVariableService(_this.win);
      _this.activePage_ = null;
      _this.desktopOnePanelMedia_ = _this.win.matchMedia("(min-aspect-ratio: " + DESKTOP_ONE_PANEL_ASPECT_RATIO_THRESHOLD + ")");
      _this.canRotateToDesktopMedia_ = _this.win.matchMedia("(min-width: " + DESKTOP_HEIGHT_THRESHOLD + "px) and " + ("(min-height: " + DESKTOP_WIDTH_THRESHOLD + "px)"));
      _this.landscapeOrientationMedia_ = _this.win.matchMedia("(orientation: landscape)");
      _this.backgroundAudioEl_ = null;
      _this.ampStoryHint_ = new AmpStoryHint(_this.win, _this.element);
      _this.mediaPool_ = MediaPool.for(_assertThisInitialized12(_this));
      _this.areAccessAuthorizationsCompleted_ = false;
      _this.navigateToPageAfterAccess_ = null;
      _this.timer_ = Services.timerFor(_this.win);
      _this.platform_ = Services.platformFor(_this.win);
      _this.viewer_ = null;
      _this.viewerMessagingHandler_ = null;
      _this.pausedStateToRestore_ = null;
      _this.liveStoryManager_ = null;
      _this.backgroundBlur_ = null;
      _this.uiState_ = null;
      _this.didRewriteStyles_ = false;
      return _this;
    }
    var _proto = AmpStory2.prototype;
    _proto.buildCallback = function buildCallback() {
      var _this$win$CSS, _this2 = this;
      this.viewer_ = Services.viewerForDoc(this.element);
      this.viewerMessagingHandler_ = this.viewer_.isEmbedded() ? new AmpStoryViewerMessagingHandler(this.win, this.viewer_) : null;
      getLocalizationService(this.element).registerLocalizedStringBundle("default", LocalizedStringsEn).registerLocalizedStringBundle("ar", LocalizedStringsAr).registerLocalizedStringBundle("de", LocalizedStringsDe).registerLocalizedStringBundle("en", LocalizedStringsEn).registerLocalizedStringBundle("en-GB", LocalizedStringsEnGb).registerLocalizedStringBundle("es", LocalizedStringsEs).registerLocalizedStringBundle("es-419", LocalizedStringsEs419).registerLocalizedStringBundle("fr", LocalizedStringsFr).registerLocalizedStringBundle("hi", LocalizedStringsHi).registerLocalizedStringBundle("id", LocalizedStringsId).registerLocalizedStringBundle("it", LocalizedStringsIt).registerLocalizedStringBundle("ja", LocalizedStringsJa).registerLocalizedStringBundle("ko", LocalizedStringsKo).registerLocalizedStringBundle("nl", LocalizedStringsNl).registerLocalizedStringBundle("no", LocalizedStringsNo).registerLocalizedStringBundle("pt-PT", LocalizedStringsPtPt).registerLocalizedStringBundle("pt-BR", LocalizedStringsPtBr).registerLocalizedStringBundle("ru", LocalizedStringsRu).registerLocalizedStringBundle("tr", LocalizedStringsTr).registerLocalizedStringBundle("vi", LocalizedStringsVi).registerLocalizedStringBundle("zh-CN", LocalizedStringsZhCn).registerLocalizedStringBundle("zh-TW", LocalizedStringsZhTw).registerLocalizedStringBundle("en-xa", createPseudoLocale(LocalizedStringsEn, function(s) {
        return "[" + s + " one two]";
      }));
      if (this.isStandalone_()) {
        this.initializeStandaloneStory_();
      }
      this.mutateElement(function() {
      });
      if (!((_this$win$CSS = this.win.CSS) != null && _this$win$CSS.supports != null && _this$win$CSS.supports("height: 1dvh"))) {
        this.onResize_(this.getViewport().getSize());
      }
      var pageId = this.getInitialPageId_();
      if (pageId) {
        var page = this.element.querySelector("amp-story-page#" + escapeCssSelectorIdent(pageId));
        page.setAttribute("active", "");
      }
      this.initializeListeners_();
      this.initializeListenersForDev_();
      this.initializePageIds_();
      this.initializeStoryPlayer_();
      this.uiState_ = this.getUIType_();
      this.storeService_.dispatch(Action.TOGGLE_UI, this.uiState_);
      if (this.isLandscapeSupported_()) {
        this.win.document.documentElement.setAttribute("data-story-supports-landscape", "");
      }
      if (!this.platform_.isBot()) {
        this.element.removeAttribute("title");
      }
      var textNodes = childNodes(this.element, function(node) {
        return node.nodeType === Node.TEXT_NODE;
      });
      textNodes.forEach(function(node) {
        _this2.element.removeChild(node);
      });
      if (isExperimentOn(this.win, "amp-story-branching")) {
        this.registerAction("goToPage", function(invocation) {
          var args = invocation.args;
          if (!args) {
            return;
          }
          _this2.storeService_.dispatch(Action.SET_ADVANCEMENT_MODE, AdvancementMode.GO_TO_PAGE);
          _this2.switchTo_(args["id"], NavigationDirection.NEXT);
        });
      }
      if (isExperimentOn(this.win, "story-load-first-page-only")) {
        Services.performanceFor(this.win).addEnabledExperiment("story-load-first-page-only");
      }
      if (isExperimentOn(this.win, "story-disable-animations-first-page") || isPreviewMode(this.win) || prefersReducedMotion(this.win)) {
        Services.performanceFor(this.win).addEnabledExperiment("story-disable-animations-first-page");
      }
      if (isExperimentOn(this.win, "story-load-inactive-outside-viewport")) {
        Services.performanceFor(this.win).addEnabledExperiment("story-load-inactive-outside-viewport");
        this.element.classList.add("i-amphtml-experiment-story-load-inactive-outside-viewport");
      }
      if (this.maybeLoadStoryDevTools_()) {
        return;
      }
    };
    _proto.pause_ = function pause_() {
      this.setPausedStateToRestore_();
      if (!this.storeService_.get(StateProperty.MUTED_STATE)) {
        this.pauseBackgroundAudio_();
      }
      if (this.getAmpDoc().getVisibilityState() === VisibilityState_Enum.INACTIVE) {
        this.activePage_.setState(PageState.NOT_ACTIVE);
        this.activePage_.element.setAttribute("active", "");
      }
    };
    _proto.resume_ = function resume_() {
      this.restorePausedState_();
      if (!this.storeService_.get(StateProperty.MUTED_STATE)) {
        this.playBackgroundAudio_();
      }
    };
    _proto.setPausedStateToRestore_ = function setPausedStateToRestore_() {
      if (this.pausedStateToRestore_ === null) {
        this.pausedStateToRestore_ = !!this.storeService_.get(StateProperty.PAUSED_STATE);
      }
      this.storeService_.dispatch(Action.TOGGLE_PAUSED, true);
    };
    _proto.restorePausedState_ = function restorePausedState_() {
      this.storeService_.dispatch(Action.TOGGLE_PAUSED, this.pausedStateToRestore_);
      this.pausedStateToRestore_ = null;
    };
    _proto.initializeStandaloneStory_ = function initializeStandaloneStory_() {
      this.lockBody_();
      this.onResizeDebounced();
    };
    _proto.initializePageIds_ = function initializePageIds_() {
      var pageEls = this.element.querySelectorAll("amp-story-page");
      var pageIds = toArray(pageEls).map(function(el) {
        return el.id || "default-page";
      });
      var idsMap = map();
      for (var i = 0; i < pageIds.length; i++) {
        if (idsMap[pageIds[i]] === void 0) {
          idsMap[pageIds[i]] = 0;
          continue;
        }
        user().error(TAG12, "Duplicate amp-story-page ID " + pageIds[i]);
        var newId = pageIds[i] + "__" + ++idsMap[pageIds[i]];
        pageEls[i].id = newId;
        pageIds[i] = newId;
      }
      this.storeService_.dispatch(Action.SET_PAGE_IDS, pageIds);
    };
    _proto.rewriteStyles_ = function rewriteStyles_() {
      if (this.didRewriteStyles_) {
        return;
      }
      this.didRewriteStyles_ = true;
      var styleEl = this.win.document.querySelector("style[amp-custom]");
      if (styleEl) {
        styleEl.textContent = styleEl.textContent.replace(/(-?[\d.]+)v(w|h|min|max)/gim, "calc($1 * var(--story-page-v$2))");
      }
    };
    _proto.setThemeColor_ = function setThemeColor_() {
      if (this.win.document.querySelector("meta[name=theme-color]")) {
        return;
      }
      var meta = this.win.document.createElement("meta");
      var ampStoryPageEl = this.element.querySelector("amp-story-page");
      meta.name = "theme-color";
      meta.content = computedStyle(this.win, this.element).getPropertyValue("--primary-color") || computedStyle(this.win, dev().assertElement(ampStoryPageEl)).getPropertyValue("background-color") || DEFAULT_THEME_COLOR;
      this.win.document.head.appendChild(meta);
    };
    _proto.buildSystemLayer_ = function buildSystemLayer_(initialPageId) {
      this.updateAudioIcon_();
      this.updatePausedIcon_();
      this.element.appendChild(this.systemLayer_.build(initialPageId));
    };
    _proto.initializeListeners_ = function initializeListeners_() {
      var _this3 = this;
      this.element.addEventListener(EventType.NEXT_PAGE, function() {
        _this3.next_();
      });
      this.element.addEventListener(EventType.PREVIOUS_PAGE, function() {
        _this3.previous_();
      });
      this.storeService_.subscribe(StateProperty.MUTED_STATE, function(isMuted) {
        _this3.onMutedStateUpdate_(isMuted);
        _this3.variableService_.onVariableUpdate(AnalyticsVariable.STORY_IS_MUTED, isMuted);
      }, true);
      this.storeService_.subscribe(StateProperty.MUTED_STATE, function(isMuted) {
        _this3.analyticsService_.triggerEvent(isMuted ? StoryAnalyticsEvent.STORY_MUTED : StoryAnalyticsEvent.STORY_UNMUTED);
      }, false);
      this.storeService_.subscribe(StateProperty.ADVANCEMENT_MODE, function(mode12) {
        _this3.variableService_.onVariableUpdate(AnalyticsVariable.STORY_ADVANCEMENT_MODE, mode12);
      });
      this.storeService_.subscribe(StateProperty.CAN_SHOW_AUDIO_UI, function(show) {
        _this3.element.classList.toggle("i-amphtml-story-no-audio-ui", !show);
      }, true);
      this.element.addEventListener(EventType.SWITCH_PAGE, function(e) {
        _this3.switchTo_(getDetail(e)["targetPageId"], getDetail(e)["direction"]);
        _this3.ampStoryHint_.hideAllNavigationHint();
      });
      this.element.addEventListener(EventType.PAGE_PROGRESS, function(e) {
        var detail = getDetail(e);
        var pageId = detail["pageId"];
        var progress = detail["progress"];
        if (pageId !== _this3.activePage_.element.id) {
          return;
        }
        if (!_this3.activePage_.isAd()) {
          _this3.systemLayer_.updateProgress(pageId, progress);
        }
      });
      this.element.addEventListener(EventType.REPLAY, function() {
        _this3.replay_();
      });
      this.element.addEventListener(EventType.NO_NEXT_PAGE, function() {
        _this3.onNoNextPage_();
      });
      this.element.addEventListener(EventType.NO_PREVIOUS_PAGE, function() {
        _this3.onNoPreviousPage_();
      });
      this.advancement_.addOnTapNavigationListener(function(direction) {
        _this3.performTapNavigation_(direction);
      });
      this.element.addEventListener(EventType.DISPATCH_ACTION, function(e) {
        if (!getMode().test) {
          return;
        }
        var action = getDetail(e)["action"];
        var data = getDetail(e)["data"];
        _this3.storeService_.dispatch(action, data);
      });
      this.storeService_.subscribe(StateProperty.ACTIONS_ALLOWLIST, function(actionsAllowlist) {
        var actions3 = Services.actionServiceForDoc(_this3.element);
        actions3.setAllowlist(actionsAllowlist);
      }, true);
      this.storeService_.subscribe(StateProperty.AD_STATE, function(isAd) {
        _this3.onAdStateUpdate_(isAd);
      });
      this.storeService_.subscribe(StateProperty.PAUSED_STATE, function(isPaused) {
        _this3.onPausedStateUpdate_(isPaused);
      });
      this.storeService_.subscribe(StateProperty.UI_STATE, function(uiState) {
        _this3.onUIStateUpdate_(uiState);
      }, true);
      this.win.document.addEventListener("keydown", function(e) {
        _this3.onKeyDown_(e);
      }, true);
      this.win.document.addEventListener("contextmenu", function(e) {
        var uiState = _this3.storeService_.get(StateProperty.UI_STATE);
        if (uiState === UIType.MOBILE) {
          if (!_this3.allowContextMenuOnMobile_(e.target)) {
            e.preventDefault();
          }
          e.stopPropagation();
        }
      });
      this.getAmpDoc().onVisibilityChanged(function() {
        return _this3.onVisibilityChanged_();
      });
      this.win.addEventListener("hashchange", function() {
        var maybePageId = parseQueryString(_this3.win.location.hash)["page"];
        if (!maybePageId || !_this3.isActualPage_(maybePageId)) {
          return;
        }
        _this3.switchTo_(maybePageId, NavigationDirection.NEXT);
        var href = _this3.win.location.href.replace(new RegExp("page=" + maybePageId + "&?"), "");
        if (endsWith(href, "#")) {
          href = href.slice(0, -1);
        }
        _this3.win.history.replaceState(_this3.win.history && getHistoryState(_this3.win.history) || {}, _this3.win.document.title, href);
      });
      var bodyElObserver = new this.win.MutationObserver(function(mutations) {
        return _this3.onBodyElMutation_(mutations);
      });
      bodyElObserver.observe(this.win.document.body, {
        attributes: true,
        attributeFilter: ["class"]
      });
      this.getViewport().onResize(debounce(this.win, function() {
        return _this3.onResizeDebounced();
      }, 300));
      this.installGestureRecognizers_();
      this.viewer_.onMessage("selectPage", function(data) {
        return _this3.onSelectPage_(data);
      });
      this.viewer_.onMessage("rewind", function() {
        return _this3.onRewind_();
      });
      if (this.viewerMessagingHandler_) {
        this.viewerMessagingHandler_.startListening();
      }
    };
    _proto.onBodyElMutation_ = function onBodyElMutation_(mutations) {
      var _this4 = this;
      mutations.forEach(function(mutation) {
        var bodyEl = dev().assertElement(mutation.target);
        _this4.storeService_.dispatch(Action.TOGGLE_KEYBOARD_ACTIVE_STATE, bodyEl.classList.contains("amp-mode-keyboard-active"));
      });
    };
    _proto.installGestureRecognizers_ = function installGestureRecognizers_() {
      var _this5 = this;
      if (this.viewer_.hasCapability("swipe")) {
        return;
      }
      var element = this.element;
      var gestures = Gestures.get(element, true);
      gestures.onGesture(SwipeXYRecognizer, function(gesture) {
        var _gesture$data = gesture.data, deltaX = _gesture$data.deltaX, deltaY = _gesture$data.deltaY;
        var embedComponent = _this5.storeService_.get(StateProperty.INTERACTIVE_COMPONENT_STATE);
        if (embedComponent.state !== EmbeddedComponentState.HIDDEN || _this5.storeService_.get(StateProperty.ACCESS_STATE) || !_this5.storeService_.get(StateProperty.SYSTEM_UI_IS_VISIBLE_STATE) || !_this5.storeService_.get(StateProperty.CAN_SHOW_NAVIGATION_OVERLAY_HINT)) {
          if (gesture.event && gesture.event.cancelable !== false) {
            gesture.event.preventDefault();
          }
          return;
        }
        if (gesture.event && gesture.event.defaultPrevented || !_this5.isSwipeLargeEnoughForHint_(deltaX, deltaY)) {
          return;
        }
        _this5.ampStoryHint_.showNavigationOverlay();
      });
    };
    _proto.isSwipeLargeEnoughForHint_ = function isSwipeLargeEnoughForHint_(deltaX, deltaY) {
      var sideSwipe = Math.abs(deltaX) >= MIN_SWIPE_FOR_HINT_OVERLAY_PX;
      var upSwipe = -1 * deltaY >= MIN_SWIPE_FOR_HINT_OVERLAY_PX;
      return sideSwipe || upSwipe;
    };
    _proto.initializeListenersForDev_ = function initializeListenersForDev_() {
      var _this6 = this;
      if (!getMode().development) {
        return;
      }
      this.element.addEventListener(EventType.DEV_LOG_ENTRIES_AVAILABLE, function(e) {
        _this6.systemLayer_.logAll(getDetail(e));
      });
    };
    _proto.lockBody_ = function lockBody_() {
      var document2 = this.win.document;
      setImportantStyles(document2.documentElement, {
        "overflow": "hidden"
      });
      setImportantStyles(document2.body, {
        "overflow": "hidden"
      });
      this.getViewport().resetTouchZoom();
      this.getViewport().disableTouchZoom();
      this.maybeLockScreenOrientation_();
    };
    _proto.maybeLockScreenOrientation_ = function maybeLockScreenOrientation_() {
      var _screen$orientation;
      var screen = this.win.screen;
      if (!screen || !this.canRotateToDesktopMedia_.matches) {
        return;
      }
      var orientationWarning = function orientationWarning2(e) {
        return dev().warn(TAG12, "Failed to lock screen orientation:", e.message);
      };
      var lockOrientationPromise = (_screen$orientation = screen.orientation) == null ? void 0 : _screen$orientation.lock;
      if (lockOrientationPromise) {
        lockOrientationPromise("portrait").catch(orientationWarning);
        return;
      }
      var lockOrientation = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation || function(unusedOrientation) {
      };
      try {
        lockOrientation("portrait");
      } catch (e) {
        orientationWarning(e);
      }
    };
    _proto.layoutCallback = function layoutCallback() {
      if (!AmpStory2.isBrowserSupported(this.win) && !this.platform_.isBot()) {
        return this.displayUnsupportedBrowser_();
      }
      return this.layoutStory_();
    };
    _proto.layoutStory_ = function layoutStory_() {
      var _this7 = this;
      var initialPageId = this.getInitialPageId_();
      this.buildSystemLayer_(initialPageId);
      this.setThemeColor_();
      var storyLayoutPromise = Promise.all([
        this.getAmpDoc().whenFirstVisible(),
        this.initializePages_()
      ]).then(function() {
        _this7.handleConsentExtension_();
        _this7.initializeStoryAccess_();
        _this7.pages_.forEach(function(page, index) {
          page.setState(PageState.NOT_ACTIVE);
          _this7.upgradeCtaAnchorTagsForTracking_(page, index);
        });
        _this7.initializeStoryNavigationPath_();
        if (_this7.storeService_.get(StateProperty.CAN_SHOW_PAGINATION_BUTTONS)) {
          new PaginationButtons(_this7);
        }
      }).then(function() {
        return _this7.switchTo_(_this7.getInitialPageId_(), NavigationDirection.NEXT);
      }).then(function() {
        var shouldReOpenAttachmentForPageId = getHistoryState2(_this7.win, HistoryState.ATTACHMENT_PAGE_ID);
        if (shouldReOpenAttachmentForPageId === _this7.activePage_.element.id) {
          _this7.activePage_.openAttachment(false);
        }
        _this7.shareMenu_.build();
        var infoDialog = shouldShowStoryUrlInfo(devAssert2(_this7.viewer_), _this7.storeService_) ? new InfoDialog(_this7.win, _this7.element) : null;
        if (infoDialog) {
          infoDialog.build();
        }
      });
      this.whenInitialContentLoaded_(INITIAL_CONTENT_LOAD_TIMEOUT_MS).then(function() {
        _this7.markStoryAsLoaded_();
        _this7.initializeLiveStory_();
      });
      this.maybeLoadStoryEducation_();
      var initialPageEl = this.element.querySelector("amp-story-page#" + escapeCssSelectorIdent(initialPageId));
      if (!this.getAmpDoc().hasBeenVisible()) {
        return whenUpgradedToCustomElement(initialPageEl).then(function() {
          return initialPageEl.build();
        });
      }
      return storyLayoutPromise;
    };
    _proto.initializeLiveStory_ = function initializeLiveStory_() {
      var _this8 = this;
      if (this.element.hasAttribute("live-story")) {
        this.liveStoryManager_ = new LiveStoryManager(this);
        this.liveStoryManager_.build();
        this.storeService_.dispatch(Action.ADD_TO_ACTIONS_ALLOWLIST, [{
          tagOrTarget: "AMP-LIVE-LIST",
          method: "update"
        }]);
        this.element.addEventListener(AmpEvents_Enum.DOM_UPDATE, function() {
          _this8.liveStoryManager_.update();
          _this8.initializePages_().then(function() {
            return _this8.preloadPagesByDistance_();
          });
        });
      }
    };
    _proto.getInitialPageId_ = function getInitialPageId_() {
      var maybePageId = parseQueryString(this.win.location.hash)["page"];
      if (maybePageId && this.isActualPage_(maybePageId)) {
        return maybePageId;
      }
      var pages = getHistoryState2(this.win, HistoryState.NAVIGATION_PATH) || [];
      var historyPage = lastItem(pages);
      if (historyPage && this.isActualPage_(historyPage)) {
        return historyPage;
      }
      var firstPageEl = this.element.querySelector("amp-story-page");
      return firstPageEl ? firstPageEl.id : null;
    };
    _proto.isActualPage_ = function isActualPage_(pageId) {
      if (this.pages_.length > 0) {
        return this.pages_.some(function(page) {
          return page.element.id === pageId;
        });
      }
      return !!this.element.querySelector("#" + escapeCssSelectorIdent(pageId));
    };
    _proto.whenInitialContentLoaded_ = function whenInitialContentLoaded_(timeoutMs) {
      if (timeoutMs === void 0) {
        timeoutMs = 0;
      }
      var initialPageEl = this.element.querySelector("amp-story-page#" + escapeCssSelectorIdent(this.getInitialPageId_()));
      var storyLoadPromise = whenUpgradedToCustomElement(initialPageEl).then(function() {
        return initialPageEl.signals().whenSignal(CommonSignals_Enum.LOAD_END);
      });
      return this.timer_.timeoutPromise(timeoutMs, storyLoadPromise).catch(function() {
      });
    };
    _proto.markStoryAsLoaded_ = function markStoryAsLoaded_() {
      var _this9 = this;
      dispatch(this.win, this.element, EventType.STORY_LOADED, void 0, {
        bubbles: true
      });
      this.viewerMessagingHandler_ && this.viewerMessagingHandler_.send("storyContentLoaded", dict({}));
      this.analyticsService_.triggerEvent(StoryAnalyticsEvent.STORY_CONTENT_LOADED);
      this.signals().signal(CommonSignals_Enum.INI_LOAD);
      this.mutateElement(function() {
        _this9.element.classList.add(STORY_LOADED_CLASS_NAME);
      });
    };
    _proto.handleConsentExtension_ = function handleConsentExtension_() {
      var consentEl = this.element.querySelector("amp-consent");
      if (!consentEl) {
        return;
      }
      this.pauseStoryUntilConsentIsResolved_();
      this.validateConsent_(consentEl);
    };
    _proto.pauseStoryUntilConsentIsResolved_ = function pauseStoryUntilConsentIsResolved_() {
      var _this10 = this;
      var policyId = this.getConsentPolicy() || "default";
      var consentPromise = getConsentPolicyState(this.element, policyId);
      if (!consentPromise) {
        return;
      }
      this.storeService_.dispatch(Action.TOGGLE_PAUSED, true);
      consentPromise.then(function() {
        _this10.storeService_.dispatch(Action.TOGGLE_PAUSED, false);
      });
    };
    _proto.validateConsent_ = function validateConsent_(consentEl) {
      if (!childElementByTag(consentEl, "amp-story-consent")) {
        user().error(TAG12, "amp-consent must have an amp-story-consent child");
      }
      var allowedTags = ["SCRIPT", "AMP-STORY-CONSENT"];
      var toRemoveChildren = childElements(consentEl, function(el) {
        return allowedTags.indexOf(el.tagName) === -1;
      });
      if (toRemoveChildren.length === 0) {
        return;
      }
      user().error(TAG12, "amp-consent only allows tags: %s", allowedTags);
      toRemoveChildren.forEach(function(el) {
        return consentEl.removeChild(el);
      });
    };
    _proto.initializeStoryAccess_ = function initializeStoryAccess_() {
      var _this11 = this;
      Services.accessServiceForDocOrNull(this.element).then(function(accessService) {
        if (!accessService) {
          return;
        }
        _this11.areAccessAuthorizationsCompleted_ = accessService.areFirstAuthorizationsCompleted();
        accessService.onApplyAuthorizations(function() {
          return _this11.onAccessApplyAuthorizations_();
        });
        var firstPage = _this11.pages_[0].element;
        if (firstPage.hasAttribute("amp-access") || firstPage.hasAttribute("amp-access-hide")) {
          firstPage.removeAttribute("amp-access");
          firstPage.removeAttribute("amp-access-hide");
          user().error(TAG12, "First amp-story-page cannot have amp-access or amp-access-hide attributes");
        }
      });
    };
    _proto.onAccessApplyAuthorizations_ = function onAccessApplyAuthorizations_() {
      this.areAccessAuthorizationsCompleted_ = true;
      var nextPage = this.navigateToPageAfterAccess_;
      if (nextPage && nextPage.element.hasAttribute("amp-access-hide")) {
        return;
      }
      if (nextPage) {
        this.navigateToPageAfterAccess_ = null;
        this.switchTo_(nextPage.element.id, NavigationDirection.NEXT);
      }
      this.storeService_.dispatch(Action.TOGGLE_ACCESS, false);
    };
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return layout == Layout_Enum.CONTAINER;
    };
    _proto.initializePages_ = function initializePages_() {
      var _this12 = this;
      var pageImplPromises = Array.prototype.map.call(this.element.querySelectorAll("amp-story-page"), function(pageEl) {
        return pageEl.getImpl();
      });
      return Promise.all(pageImplPromises).then(function(pages) {
        _this12.pages_ = pages;
        if (isExperimentOn(_this12.win, "amp-story-branching")) {
          _this12.storeService_.dispatch(Action.ADD_TO_ACTIONS_ALLOWLIST, [{
            tagOrTarget: "AMP-STORY",
            method: "goToPage"
          }]);
        }
      });
    };
    _proto.next_ = function next_(opt_isAutomaticAdvance) {
      var activePage = devAssert2(this.activePage_, "No active page set when navigating to next page.");
      activePage.next(opt_isAutomaticAdvance);
    };
    _proto.initializeStoryPlayer_ = function initializeStoryPlayer_() {
      if (this.viewer_.getParam("storyPlayer") !== "v0") {
        return;
      }
      Services.extensionsFor(this.win).installExtensionForDoc(this.getAmpDoc(), "amp-viewer-integration");
    };
    _proto.onNoNextPage_ = function onNoNextPage_() {
      if (this.viewer_.hasCapability("swipe") && this.viewerMessagingHandler_) {
        var advancementMode = this.storeService_.get(StateProperty.ADVANCEMENT_MODE);
        this.viewerMessagingHandler_.send("selectDocument", dict({
          "next": true,
          "advancementMode": advancementMode
        }));
        return;
      }
    };
    _proto.previous_ = function previous_() {
      var activePage = devAssert2(this.activePage_, "No active page set when navigating to previous page.");
      activePage.previous();
    };
    _proto.onNoPreviousPage_ = function onNoPreviousPage_() {
      if (this.viewer_.hasCapability("swipe") && this.viewerMessagingHandler_) {
        var advancementMode = this.storeService_.get(StateProperty.ADVANCEMENT_MODE);
        this.viewerMessagingHandler_.send("selectDocument", dict({
          "previous": true,
          "advancementMode": advancementMode
        }));
        return;
      }
      if (this.storeService_.get(StateProperty.CAN_SHOW_PREVIOUS_PAGE_HELP)) {
        this.ampStoryHint_.showFirstPageHintOverlay();
      }
    };
    _proto.performTapNavigation_ = function performTapNavigation_(direction) {
      this.storeService_.dispatch(Action.SET_ADVANCEMENT_MODE, AdvancementMode.MANUAL_ADVANCE);
      if (direction === TapNavigationDirection.NEXT) {
        this.next_();
      } else if (direction === TapNavigationDirection.PREVIOUS) {
        this.previous_();
      }
    };
    _proto.switchTo_ = function switchTo_(targetPageId, direction) {
      var _this$backgroundBlur_, _this13 = this;
      var targetPage = this.getPageById(targetPageId);
      var pageIndex = this.getPageIndex(targetPage);
      if (this.activePage_ && this.activePage_.element.id === targetPageId) {
        return resolvedPromise();
      }
      if (targetPage.element.hasAttribute("amp-access") && !this.areAccessAuthorizationsCompleted_) {
        this.navigateToPageAfterAccess_ = targetPage;
        return resolvedPromise();
      }
      if (targetPage.element.hasAttribute("amp-access-hide")) {
        this.storeService_.dispatch(Action.TOGGLE_ACCESS, true);
        this.navigateToPageAfterAccess_ = targetPage;
        return resolvedPromise();
      }
      var oldPage = this.activePage_;
      this.activePage_ = targetPage;
      if (!targetPage.isAd()) {
        this.updateNavigationPath_(targetPageId, direction);
      }
      (_this$backgroundBlur_ = this.backgroundBlur_) == null ? void 0 : _this$backgroundBlur_.update(targetPage.element);
      var steps = [
        function() {
          oldPage && oldPage.element.removeAttribute("active");
          if (!_this13.storeService_.get(StateProperty.PAUSED_STATE)) {
            targetPage.setState(PageState.PLAYING);
          } else {
            targetPage.element.setAttribute("active", "");
          }
          _this13.forceRepaintForSafari_();
        },
        function() {
          if (oldPage) {
            oldPage.setState(PageState.NOT_ACTIVE);
            _this13.getPageIndex(oldPage) < pageIndex ? setAttributeInMutate(oldPage, Attributes.VISITED) : removeAttributeInMutate(oldPage, Attributes.VISITED);
            if (oldPage.isAd()) {
              _this13.storeService_.dispatch(Action.SET_ADVANCEMENT_MODE, AdvancementMode.ADVANCE_TO_ADS);
            }
          }
          var storePageIndex = pageIndex;
          if (targetPage.isAd()) {
            _this13.storeService_.dispatch(Action.TOGGLE_AD, true);
            setAttributeInMutate(_this13, Attributes.AD_SHOWING);
            storePageIndex = _this13.storeService_.get(StateProperty.CURRENT_PAGE_INDEX);
          } else {
            _this13.storeService_.dispatch(Action.TOGGLE_AD, false);
            removeAttributeInMutate(_this13, Attributes.AD_SHOWING);
            if (!targetPage.isAutoAdvance()) {
              _this13.systemLayer_.updateProgress(targetPageId, _this13.advancement_.getProgress());
            }
          }
          _this13.storeService_.dispatch(Action.CHANGE_PAGE, {
            id: targetPageId,
            index: storePageIndex
          });
          if (!oldPage) {
            _this13.registerAndPreloadBackgroundAudio_();
          }
        },
        function() {
          _this13.preloadPagesByDistance_(!oldPage);
          _this13.triggerActiveEventForPage_();
          _this13.systemLayer_.resetDeveloperLogs();
          _this13.systemLayer_.setDeveloperLogContextString(_this13.activePage_.element.id);
        }
      ];
      return new Promise(function(resolve) {
        targetPage.beforeVisible().then(function() {
          var unqueueStepInRAF = function unqueueStepInRAF2() {
            steps.shift().call(_this13);
            if (!steps.length) {
              return resolve();
            }
            _this13.win.requestAnimationFrame(function() {
              return unqueueStepInRAF2();
            });
          };
          unqueueStepInRAF();
        });
      });
    };
    _proto.updateNavigationPath_ = function updateNavigationPath_(targetPageId, direction) {
      var navigationPath = this.storeService_.get(StateProperty.NAVIGATION_PATH);
      if (direction === NavigationDirection.PREVIOUS) {
        navigationPath.pop();
      }
      if (direction === NavigationDirection.NEXT && navigationPath[navigationPath.length - 1] !== targetPageId) {
        navigationPath.push(targetPageId);
      }
      this.storeService_.dispatch(Action.SET_NAVIGATION_PATH, navigationPath);
      setHistoryState(this.win, HistoryState.NAVIGATION_PATH, navigationPath);
    };
    _proto.triggerActiveEventForPage_ = function triggerActiveEventForPage_() {
      Services.actionServiceForDoc(this.element).trigger(this.activePage_.element, "active", null, ActionTrust_Enum.HIGH);
    };
    _proto.forceRepaintForSafari_ = function forceRepaintForSafari_() {
      var _this14 = this;
      if (!this.platform_.isSafari() && !this.platform_.isIos()) {
        return;
      }
      this.mutateElement(function() {
        toggle(_this14.element, false);
        var height = _this14.element.offsetHeight;
        if (height >= 0) {
          toggle(_this14.element, true);
        }
      });
    };
    _proto.onKeyDown_ = function onKeyDown_(e) {
      this.storeService_.dispatch(Action.SET_ADVANCEMENT_MODE, AdvancementMode.MANUAL_ADVANCE);
      var rtlState = this.storeService_.get(StateProperty.RTL_STATE);
      switch (e.key) {
        case Keys_Enum.LEFT_ARROW:
          rtlState ? this.next_() : this.previous_();
          break;
        case Keys_Enum.RIGHT_ARROW:
          rtlState ? this.previous_() : this.next_();
          break;
      }
    };
    _proto.onResizeDebounced = function onResizeDebounced() {
      this.uiState_ = this.getUIType_();
      this.storeService_.dispatch(Action.TOGGLE_UI, this.uiState_);
      var isLandscape = this.isLandscape_();
      var isLandscapeSupported = this.isLandscapeSupported_();
      this.setOrientationAttribute_(isLandscape, isLandscapeSupported);
    };
    _proto.onResize_ = function onResize_(size) {
      var height = size.height, width = size.width;
      if (height === 0 && width === 0) {
        return;
      }
      this.storeService_.dispatch(Action.SET_PAGE_SIZE, {
        height: height,
        width: width
      });
      setImportantStyles(this.win.document.documentElement, {
        "--story-dvh": px(height / 100)
      });
    };
    _proto.setOrientationAttribute_ = function setOrientationAttribute_(isLandscape, isLandscapeSupported) {
      var _this15 = this;
      this.mutateElement(function() {
        _this15.element.setAttribute(Attributes.ORIENTATION, isLandscapeSupported && isLandscape ? "landscape" : "portrait");
      });
    };
    _proto.onVisibilityChanged_ = function onVisibilityChanged_() {
      this.getAmpDoc().isVisible() ? this.resume_() : this.pause_();
    };
    _proto.onAdStateUpdate_ = function onAdStateUpdate_(isAd) {
      if (this.storeService_.get(StateProperty.MUTED_STATE)) {
        return;
      }
      isAd ? this.pauseBackgroundAudio_() : this.playBackgroundAudio_();
    };
    _proto.onUIStateUpdate_ = function onUIStateUpdate_(uiState) {
      var _this$backgroundBlur_2, _this16 = this;
      (_this$backgroundBlur_2 = this.backgroundBlur_) == null ? void 0 : _this$backgroundBlur_2.detach();
      this.backgroundBlur_ = null;
      switch (uiState) {
        case UIType.MOBILE:
          this.vsync_.mutate(function() {
            _this16.win.document.documentElement.setAttribute("i-amphtml-story-mobile", "");
            _this16.element.removeAttribute("desktop");
            _this16.element.classList.remove("i-amphtml-story-desktop-fullbleed");
            _this16.element.classList.remove("i-amphtml-story-desktop-one-panel");
          });
          break;
        case UIType.DESKTOP_ONE_PANEL:
          if (!this.backgroundBlur_) {
            this.backgroundBlur_ = new BackgroundBlur(this.win, this.element);
            this.backgroundBlur_.attach();
            if (this.activePage_) {
              this.backgroundBlur_.update(this.activePage_.element);
            }
          }
          this.vsync_.mutate(function() {
            _this16.rewriteStyles_();
            _this16.win.document.documentElement.removeAttribute("i-amphtml-story-mobile");
            _this16.element.removeAttribute("desktop");
            _this16.element.classList.add("i-amphtml-story-desktop-one-panel");
            _this16.element.classList.remove("i-amphtml-story-desktop-fullbleed");
          });
          break;
        case UIType.DESKTOP_FULLBLEED:
          this.vsync_.mutate(function() {
            _this16.win.document.documentElement.removeAttribute("i-amphtml-story-mobile");
            _this16.element.setAttribute("desktop", "");
            _this16.element.classList.add("i-amphtml-story-desktop-fullbleed");
            _this16.element.classList.remove("i-amphtml-story-desktop-one-panel");
          });
          break;
        case UIType.VERTICAL:
          var pageAttachments = scopedQuerySelectorAll(this.element, "amp-story-page amp-story-page-attachment");
          this.vsync_.mutate(function() {
            _this16.rewriteStyles_();
            _this16.element.setAttribute("i-amphtml-vertical", "");
            _this16.win.document.documentElement.classList.add("i-amphtml-story-vertical");
            setImportantStyles(_this16.win.document.body, {
              height: "auto"
            });
            _this16.win.document.documentElement.removeAttribute("i-amphtml-story-mobile");
            _this16.element.removeAttribute("desktop");
            _this16.element.classList.remove("i-amphtml-story-desktop-fullbleed");
            for (var i = 0; i < pageAttachments.length; i++) {
              _this16.element.insertBefore(pageAttachments[i], pageAttachments[i].getAttribute("href") ? pageAttachments[i].parentElement.nextElementSibling : null);
            }
          });
          this.signals().whenSignal(CommonSignals_Enum.LOAD_END).then(function() {
            _this16.vsync_.mutate(function() {
              _this16.pages_.forEach(function(page) {
                return page.element.setAttribute("active", "");
              });
            });
          });
          break;
      }
    };
    _proto.getUIType_ = function getUIType_() {
      if (this.uiState_ === UIType.MOBILE && this.androidSoftKeyboardIsProbablyOpen_()) {
        return UIType.MOBILE;
      }
      if (this.platform_.isBot()) {
        return UIType.VERTICAL;
      }
      if (!this.isDesktop_()) {
        return UIType.MOBILE;
      }
      if (this.isLandscapeSupported_()) {
        return UIType.DESKTOP_FULLBLEED;
      }
      return UIType.DESKTOP_ONE_PANEL;
    };
    _proto.androidSoftKeyboardIsProbablyOpen_ = function androidSoftKeyboardIsProbablyOpen_() {
      var _this$win$document$ac;
      var platformIsAndroid = this.platform_.isAndroid();
      var tagNamesThatTriggerKeyboard = ["INPUT", "TEXTAREA"];
      var textFieldHasFocus = tagNamesThatTriggerKeyboard.includes((_this$win$document$ac = this.win.document.activeElement) == null ? void 0 : _this$win$document$ac.tagName);
      return platformIsAndroid && textFieldHasFocus;
    };
    _proto.isDesktop_ = function isDesktop_() {
      return this.desktopOnePanelMedia_.matches && !this.platform_.isBot();
    };
    _proto.isLandscape_ = function isLandscape_() {
      return this.landscapeOrientationMedia_.matches;
    };
    _proto.isStandalone_ = function isStandalone_() {
      return this.element.hasAttribute(Attributes.STANDALONE);
    };
    _proto.isLandscapeSupported_ = function isLandscapeSupported_() {
      return this.element.hasAttribute(Attributes.SUPPORTS_LANDSCAPE);
    };
    _proto.onPausedStateUpdate_ = function onPausedStateUpdate_(isPaused) {
      if (!this.activePage_) {
        return;
      }
      var pageState = isPaused ? PageState.PAUSED : PageState.PLAYING;
      this.activePage_.setState(pageState);
    };
    _proto.displayUnsupportedBrowser_ = function displayUnsupportedBrowser_() {
      var _this17 = this;
      this.setPausedStateToRestore_();
      if (this.getFallback()) {
        this.toggleFallback(true);
        return;
      }
      var continueAnyway = function continueAnyway2() {
        _this17.layoutStory_().then(function() {
          _this17.restorePausedState_();
          _this17.mutateElement(function() {
            removeElement(layer);
          });
        });
      };
      var layer = renderUnsupportedBrowserLayer(this.element, continueAnyway);
      return this.mutateElement(function() {
        _this17.element.appendChild(layer);
      });
    };
    _proto.getPagesByDistance_ = function getPagesByDistance_() {
      var _this18 = this;
      var distanceMap = this.getPageDistanceMapHelper_(0, {}, this.activePage_.element.id);
      var pagesByDistance = [];
      Object.keys(distanceMap).forEach(function(pageId) {
        var distance = distanceMap[pageId];
        if (pageId === _this18.pages_[0].element.id && _this18.activePage_ === _this18.pages_[_this18.pages_.length - 1] && _this18.pages_.length > 1 && !_this18.viewer_.hasCapability("swipe")) {
          distance = 1;
        }
        if (!pagesByDistance[distance]) {
          pagesByDistance[distance] = [];
        }
        if (isExperimentOn(_this18.win, "amp-story-branching")) {
          var navigationPath = _this18.storeService_.get(StateProperty.NAVIGATION_PATH);
          var indexInStack = navigationPath.indexOf(_this18.activePage_.element.id);
          var maybePrev = navigationPath[indexInStack - 1];
          if (indexInStack > 0 && pageId === _this18.activePage_.element.id) {
            if (!pagesByDistance[1]) {
              pagesByDistance[1] = [];
            }
            pagesByDistance[1].push(maybePrev);
          }
          if (pageId !== maybePrev) {
            pagesByDistance[distance].push(pageId);
          }
        } else {
          pagesByDistance[distance].push(pageId);
        }
      });
      return pagesByDistance;
    };
    _proto.getPageDistanceMapHelper_ = function getPageDistanceMapHelper_(distance, map2, pageId) {
      var _this19 = this;
      if (map2[pageId] !== void 0 && map2[pageId] <= distance) {
        return map2;
      }
      map2[pageId] = distance;
      var page = this.getPageById(pageId);
      page.getAdjacentPageIds().forEach(function(adjacentPageId) {
        if (map2[adjacentPageId] !== void 0 && map2[adjacentPageId] <= distance) {
          return;
        }
        map2 = _this19.getPageDistanceMapHelper_(distance + 1, map2, adjacentPageId);
      });
      return map2;
    };
    _proto.preloadPagesByDistance_ = function preloadPagesByDistance_(prioritizeActivePage) {
      var _this20 = this;
      if (prioritizeActivePage === void 0) {
        prioritizeActivePage = false;
      }
      if (this.platform_.isBot()) {
        this.pages_.forEach(function(page) {
          page.setDistance(0);
        });
        return;
      }
      var pagesByDistance = this.getPagesByDistance_();
      var preloadAllPages = function preloadAllPages2() {
        pagesByDistance.forEach(function(pageIds, distance) {
          pageIds.forEach(function(pageId) {
            var page = _this20.getPageById(pageId);
            page.setDistance(distance);
          });
        });
      };
      this.mutateElement(function() {
        if (!isExperimentOn(_this20.win, "story-load-first-page-only") || !prioritizeActivePage) {
          return preloadAllPages();
        }
        var activePageId = devAssert2(pagesByDistance[0][0]);
        new Promise(function(res, rej) {
          var page = _this20.getPageById(activePageId);
          page.setDistance(0);
          page.signals().whenSignal(CommonSignals_Enum.LOAD_END).then(res);
          _this20.storeService_.subscribe(StateProperty.CURRENT_PAGE_ID, rej);
        }).then(function() {
          return preloadAllPages();
        }, function() {
        });
      });
    };
    _proto.registerAndPreloadBackgroundAudio_ = function registerAndPreloadBackgroundAudio_() {
      var _this21 = this;
      var backgroundAudioEl = upgradeBackgroundAudio(this.element);
      if (!backgroundAudioEl) {
        return;
      }
      this.activePage_.element.signals().whenSignal(CommonSignals_Enum.LOAD_END).then(function() {
        backgroundAudioEl = backgroundAudioEl;
        _this21.mediaPool_.register(backgroundAudioEl);
        return _this21.mediaPool_.preload(backgroundAudioEl);
      }).then(function() {
        _this21.backgroundAudioEl_ = childElement(_this21.element, function(el) {
          return el.tagName.toLowerCase() === "audio";
        });
      });
    };
    _proto.maybeLoadStoryEducation_ = function maybeLoadStoryEducation_() {
      var _this22 = this;
      if (!this.viewer_.hasCapability("education")) {
        return;
      }
      this.mutateElement(function() {
        _this22.element.appendChild(_this22.win.document.createElement("amp-story-education"));
      });
      Services.extensionsFor(this.win).installExtensionForDoc(this.getAmpDoc(), "amp-story-education");
    };
    _proto.getPageIndexById = function getPageIndexById(id) {
      var pageIndex = findIndex(this.pages_, function(page) {
        return page.element.id === id;
      });
      if (pageIndex < 0) {
        user().error(TAG12, 'Story refers to page "%s", but no such page exists.', id);
      }
      return pageIndex;
    };
    _proto.getPageById = function getPageById(id) {
      var pageIndex = this.getPageIndexById(id);
      return devAssert2(this.pages_[pageIndex], "Page at index %s exists, but is missing from the array.", pageIndex);
    };
    _proto.getPageCount = function getPageCount() {
      return this.pages_.length - this.adPages_.length;
    };
    _proto.getPageIndex = function getPageIndex(desiredPage) {
      return findIndex(this.pages_, function(page) {
        return page === desiredPage;
      });
    };
    _proto.getPageContainingElement_ = function getPageContainingElement_(element) {
      var startingElement = element;
      if (element.ownerDocument !== this.win.document) {
        startingElement = element.ownerDocument.defaultView.frameElement;
      }
      var pageIndex = findIndex(this.pages_, function(page) {
        var pageEl = closest(startingElement, function(el) {
          return el === page.element;
        });
        return !!pageEl;
      });
      return this.pages_[pageIndex] || null;
    };
    _proto.getElementDistance = function getElementDistance(element) {
      var page = this.getPageContainingElement_(element);
      if (!page) {
        return -1;
      }
      return page.getDistance();
    };
    _proto.getMaxMediaElementCounts = function getMaxMediaElementCounts() {
      var _ref;
      var audioMediaElementsCount = this.element.querySelectorAll("amp-audio, [background-audio]").length;
      var videoMediaElementsCount = this.element.querySelectorAll("amp-video").length;
      if (this.element.hasAttribute("background-audio")) {
        audioMediaElementsCount++;
      }
      return _ref = {}, _ref[MediaType.AUDIO] = Math.min(audioMediaElementsCount + MINIMUM_AD_MEDIA_ELEMENTS, MAX_MEDIA_ELEMENT_COUNTS[MediaType.AUDIO]), _ref[MediaType.VIDEO] = Math.min(videoMediaElementsCount + MINIMUM_AD_MEDIA_ELEMENTS, MAX_MEDIA_ELEMENT_COUNTS[MediaType.VIDEO]), _ref;
    };
    _proto.getElement = function getElement() {
      return this.element;
    };
    _proto.onMutedStateUpdate_ = function onMutedStateUpdate_(isMuted) {
      isMuted ? this.mute_() : this.unmute_();
      isMuted ? this.element.setAttribute(Attributes.MUTED, "") : this.element.removeAttribute(Attributes.MUTED);
    };
    _proto.mute_ = function mute_() {
      this.pauseBackgroundAudio_();
      if (this.activePage_) {
        this.activePage_.muteAllMedia();
      }
    };
    _proto.pauseBackgroundAudio_ = function pauseBackgroundAudio_() {
      if (!this.backgroundAudioEl_) {
        return;
      }
      this.mediaPool_.pause(this.backgroundAudioEl_);
    };
    _proto.unmute_ = function unmute_() {
      var _this23 = this;
      var unmuteAllMedia = function unmuteAllMedia2() {
        _this23.playBackgroundAudio_();
        if (_this23.activePage_) {
          _this23.activePage_.unmuteAllMedia();
        }
      };
      this.mediaPool_.blessAll().then(unmuteAllMedia, unmuteAllMedia);
    };
    _proto.playBackgroundAudio_ = function playBackgroundAudio_() {
      if (!this.backgroundAudioEl_) {
        return;
      }
      this.mediaPool_.unmute(this.backgroundAudioEl_);
      this.mediaPool_.play(this.backgroundAudioEl_);
    };
    _proto.updateAudioIcon_ = function updateAudioIcon_() {
      var containsMediaElementWithAudio = !!this.element.querySelector("amp-audio, amp-video:not([noaudio]), [background-audio]");
      var storyHasBackgroundAudio = this.element.hasAttribute("background-audio");
      this.storeService_.dispatch(Action.TOGGLE_STORY_HAS_AUDIO, containsMediaElementWithAudio || storyHasBackgroundAudio);
      this.storeService_.dispatch(Action.TOGGLE_STORY_HAS_BACKGROUND_AUDIO, storyHasBackgroundAudio);
    };
    _proto.updatePausedIcon_ = function updatePausedIcon_() {
      var containsElementsWithPlayback = !!scopedQuerySelector(this.element, "amp-story-grid-layer amp-audio, amp-story-grid-layer amp-video, amp-story-page[background-audio], amp-story-page[auto-advance-after]");
      var storyHasBackgroundAudio = this.element.hasAttribute("background-audio");
      this.storeService_.dispatch(Action.TOGGLE_STORY_HAS_PLAYBACK_UI, containsElementsWithPlayback || storyHasBackgroundAudio);
    };
    _proto.onRewind_ = function onRewind_() {
      var _this24 = this;
      this.signals().whenSignal(CommonSignals_Enum.LOAD_END).then(function() {
        return _this24.replay_();
      });
    };
    _proto.onSelectPage_ = function onSelectPage_(data) {
      if (!data) {
        return;
      }
      this.storeService_.dispatch(Action.SET_ADVANCEMENT_MODE, AdvancementMode.VIEWER_SELECT_PAGE);
      if (data["next"]) {
        this.next_();
      } else if (data["previous"]) {
        this.previous_();
      } else if (data["delta"]) {
        this.switchDelta_(data["delta"]);
      } else if (data["id"]) {
        this.switchTo_(data["id"], this.getPageIndexById(data["id"]) > this.getPageIndex(this.activePage_) ? NavigationDirection.NEXT : NavigationDirection.PREVIOUS);
      }
    };
    _proto.switchDelta_ = function switchDelta_(delta) {
      var currentPageIdx = this.storeService_.get(StateProperty.CURRENT_PAGE_INDEX);
      var newPageIdx = delta > 0 ? Math.min(this.pages_.length - 1, currentPageIdx + delta) : Math.max(0, currentPageIdx + delta);
      var targetPage = this.pages_[newPageIdx];
      if (!this.isActualPage_(targetPage && targetPage.element.id) || newPageIdx === currentPageIdx) {
        return;
      }
      var direction = newPageIdx > currentPageIdx ? NavigationDirection.NEXT : NavigationDirection.PREVIOUS;
      this.switchTo_(targetPage.element.id, direction);
    };
    _proto.initializeStoryNavigationPath_ = function initializeStoryNavigationPath_() {
      var _this25 = this;
      var navigationPath = getHistoryState2(this.win, HistoryState.NAVIGATION_PATH);
      if (!navigationPath || !navigationPath.every(function(pageId) {
        return _this25.isActualPage_(pageId);
      })) {
        navigationPath = [];
      }
      this.storeService_.dispatch(Action.SET_NAVIGATION_PATH, navigationPath);
    };
    _proto.replay_ = function replay_() {
      var _this26 = this;
      this.storeService_.dispatch(Action.SET_NAVIGATION_PATH, []);
      var switchPromise = this.switchTo_(dev().assertElement(this.pages_[0].element).id, NavigationDirection.NEXT);
      if (this.pages_.length === 1) {
        this.pages_[0].setState(PageState.NOT_ACTIVE);
        this.pages_[0].setState(PageState.PLAYING);
      }
      switchPromise.then(function() {
        _this26.pages_.forEach(function(page) {
          return removeAttributeInMutate(page, Attributes.VISITED);
        });
      });
    };
    _proto.upgradeCtaAnchorTagsForTracking_ = function upgradeCtaAnchorTagsForTracking_(page, pageIndex) {
      this.mutateElement(function() {
        var pageId = page.element.id;
        var ctaAnchorEls = scopedQuerySelectorAll(page.element, "amp-story-cta-layer a");
        Array.prototype.forEach.call(ctaAnchorEls, function(ctaAnchorEl) {
          ctaAnchorEl.setAttribute("data-vars-story-page-id", pageId);
          ctaAnchorEl.setAttribute("data-vars-story-page-index", pageIndex);
        });
      });
    };
    _proto.addPage = function addPage(page) {
      this.pages_.push(page);
      if (page.isAd()) {
        this.adPages_.push(page);
      }
    };
    _proto.insertPage = function insertPage(pageBeforeId, pageToBeInsertedId) {
      var pageToBeInserted = this.getPageById(pageToBeInsertedId);
      var pageToBeInsertedEl = pageToBeInserted.element;
      if (pageToBeInserted.isAd() && !this.storeService_.get(StateProperty.CAN_INSERT_AUTOMATIC_AD)) {
        dev().expectedError(TAG12, "Inserting ads automatically is disallowed.");
        return false;
      }
      var pageBefore = this.getPageById(pageBeforeId);
      var pageBeforeEl = pageBefore.element;
      var nextPage = this.getNextPage(pageBefore);
      if (!nextPage) {
        return false;
      }
      var advanceAttr = isExperimentOn(this.win, "amp-story-branching") ? Attributes.PUBLIC_ADVANCE_TO : Attributes.ADVANCE_TO;
      pageBeforeEl.setAttribute(advanceAttr, pageToBeInsertedId);
      pageBeforeEl.setAttribute(Attributes.AUTO_ADVANCE_TO, pageToBeInsertedId);
      pageToBeInsertedEl.setAttribute(Attributes.RETURN_TO, pageBeforeId);
      var nextPageEl = nextPage.element;
      var nextPageId = nextPageEl.id;
      if (nextPageId !== pageToBeInsertedId) {
        pageToBeInsertedEl.setAttribute(advanceAttr, nextPageId);
        pageToBeInsertedEl.setAttribute(Attributes.AUTO_ADVANCE_TO, nextPageId);
        nextPageEl.setAttribute(Attributes.RETURN_TO, pageToBeInsertedId);
      }
      return true;
    };
    _proto.getNextPage = function getNextPage(page) {
      var nextPageId = page.getNextPageId(true);
      if (!nextPageId) {
        return null;
      }
      return this.getPageById(nextPageId);
    };
    AmpStory2.isBrowserSupported = function isBrowserSupported(win) {
      if (isEsm()) {
        return true;
      }
      return Boolean(win.CSS && win.CSS.supports && win.CSS.supports("display", "grid") && win.CSS.supports("color", "var(--test)"));
    };
    _proto.maybeLoadStoryDevTools_ = function maybeLoadStoryDevTools_() {
      if (!isModeDevelopment(this.win) || this.element.getAttribute("mode") === "inspect") {
        return false;
      }
      this.element.setAttribute("mode", "inspect");
      var devToolsEl = this.win.document.createElement("amp-story-dev-tools");
      this.win.document.body.appendChild(devToolsEl);
      this.element.setAttribute("hide", "");
      Services.extensionsFor(this.win).installExtensionForDoc(this.getAmpDoc(), "amp-story-dev-tools");
      return true;
    };
    _proto.allowContextMenuOnMobile_ = function allowContextMenuOnMobile_(element) {
      return !!closest(element, function(e) {
        return matches(e, "a.i-amphtml-story-page-open-attachment[href]");
      }, this.element);
    };
    return AmpStory2;
  }(AMP.BaseElement);
  AMP.registerElement("amp-story", AmpStory, CSS7);
  AMP.registerElement("amp-story-access", AmpStoryAccess);
  AMP.registerElement("amp-story-consent", AmpStoryConsent);
  AMP.registerElement("amp-story-cta-layer", AmpStoryCtaLayer);
  AMP.registerElement("amp-story-grid-layer", AmpStoryGridLayer);
  AMP.registerElement("amp-story-page", AmpStoryPage);
  AMP.registerElement("amp-story-page-attachment", AmpStoryPageAttachment);
  AMP.registerElement("amp-story-page-outlink", AmpStoryPageAttachment);
  AMP.registerServiceForDoc("amp-story-render", AmpStoryRenderService);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
/**
* @license
* Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
* Use of this source code is governed by a BSD-style
* license that can be found in the LICENSE file or at
* https://developers.google.com/open-source/licenses/bsd
*/
})});
//# sourceMappingURL=amp-story-1.0.max.js.map
