(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-ad-network-adsense-impl",ev:"0.1",l:true,f:(function(AMP,_){
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

  // src/core/constants/consent-state.js
  var CONSENT_POLICY_STATE = {
    SUFFICIENT: 1,
    INSUFFICIENT: 2,
    UNKNOWN_NOT_REQUIRED: 3,
    UNKNOWN: 4
  };
  var CONSENT_STRING_TYPE = {
    TCF_V1: 1,
    TCF_V2: 2,
    US_PRIVACY_STRING: 3
  };

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
  function findIndex(array, predicate) {
    for (var i = 0; i < array.length; i++) {
      if (predicate(array[i], i, array)) {
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

  // src/core/mode/prod.js
  function isProd() {
    return false;
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
  function stringHash32(str) {
    var length = str.length;
    var hash = 5381;
    for (var i = 0; i < length; i++) {
      hash = hash * 33 ^ str.charCodeAt(i);
    }
    return String(hash >>> 0);
  }
  function trimStart(str) {
    if (str.trimStart) {
      return str.trimStart();
    }
    return (str + "_").trim().slice(0, -1);
  }
  function padStart(s, targetLength, padString) {
    if (s.length >= targetLength) {
      return s;
    }
    targetLength = targetLength - s.length;
    var padding = padString;
    while (targetLength > padding.length) {
      padding += padString;
    }
    return padding.slice(0, targetLength) + s;
  }
  function isString(s) {
    return typeof s == "string";
  }

  // src/core/types/object/index.js
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
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
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
  function memo(obj, prop, factory) {
    var result = obj[prop];
    if (result === void 0) {
      result = factory(obj, prop);
      obj[prop] = result;
    }
    return result;
  }
  function recreateNonProtoObject(obj) {
    var copy = map();
    for (var k in obj) {
      if (!hasOwn(obj, k)) {
        continue;
      }
      var v = obj[k];
      copy[k] = isObject(v) ? recreateNonProtoObject(v) : v;
    }
    return copy;
  }
  function getValueForExpr(obj, expr) {
    if (expr == ".") {
      return obj;
    }
    var parts = expr.split(".");
    var value = obj;
    for (var _iterator = _createForOfIteratorHelperLoose(parts), _step; !(_step = _iterator()).done; ) {
      var part = _step.value;
      if (part && value && value[part] !== void 0 && typeof value == "object" && hasOwn(value, part)) {
        value = value[part];
        continue;
      }
      value = void 0;
      break;
    }
    return value;
  }

  // src/core/types/index.js
  function isElement(value) {
    return (value == null ? void 0 : value.nodeType) == 1;
  }
  function isFiniteNumber(value) {
    return typeof value === "number" && isFinite(value);
  }

  // src/core/dom/fingerprint.js
  function domFingerprintPlain(element) {
    var ids = [];
    var level = 0;
    while (isElement(element) && level < 25) {
      var id = "";
      if (element.id) {
        id = "/" + element.id;
      }
      var nodeName = element.nodeName.toLowerCase();
      ids.push("" + nodeName + id + indexWithinParent(element));
      level++;
      element = element.parentElement;
    }
    return ids.join();
  }
  var DomFingerprint = /* @__PURE__ */ function() {
    function DomFingerprint2() {
    }
    DomFingerprint2.generate = function generate(element) {
      return stringHash32(domFingerprintPlain(element));
    };
    return DomFingerprint2;
  }();
  function indexWithinParent(element) {
    var nodeName = element.nodeName;
    var i = 0;
    var count = 0;
    var sibling = element.previousElementSibling;
    while (sibling && count < 25 && i < 100) {
      if (sibling.nodeName == nodeName) {
        count++;
      }
      i++;
      sibling = sibling.previousElementSibling;
    }
    return count < 25 && i < 100 ? "." + count : "";
  }

  // extensions/amp-geo/0.1/amp-geo-in-group.js
  var GEO_IN_GROUP = {
    NOT_DEFINED: 1,
    IN: 2,
    NOT_IN: 3
  };

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

  // src/core/types/object/json.js
  function parseJson(json) {
    return JSON.parse(json);
  }
  function tryParseJson(json, opt_onFailed) {
    try {
      return parseJson(json);
    } catch (e) {
      opt_onFailed == null ? void 0 : opt_onFailed(e);
      return null;
    }
  }

  // src/core/window/index.js
  function toWin(winOrNull) {
    return winOrNull;
  }
  function getWin(node) {
    return toWin((node.ownerDocument || node).defaultView);
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
  function isUserErrorMessage(message) {
    return message.indexOf(USER_ERROR_SENTINEL) >= 0;
  }
  function stripUserError(message) {
    return message.replace(USER_ERROR_SENTINEL, "");
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
    error.messageArray = remove(messageArray, function(x) {
      return x !== "";
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

  // src/core/dom/query.js
  function assertIsName(name) {
    devAssert(/^[\w-]+$/.test(name), 'Expected "' + name + '" to be a CSS name composed of alphanumerics and hyphens.');
  }
  function scopedQuerySelectionFallback(root, selector) {
    var unique = "i-amphtml-scoped";
    root.classList.add(unique);
    var scopedSelector = prependSelectorsWith(selector, "." + unique);
    var elements2 = root.querySelectorAll(scopedSelector);
    root.classList.remove(unique);
    return elements2;
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
  function lastChildElement(parent, callback) {
    for (var child = parent.lastElementChild; child; child = child.previousElementSibling) {
      if (callback(child)) {
        return child;
      }
    }
    return null;
  }
  function childElementsByTag(parent, tagName) {
    assertIsName(tagName);
    return scopedQuerySelectorAll(parent, "> " + tagName);
  }

  // src/core/dom/index.js
  var HTML_ESCAPE_CHARS = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  };
  var HTML_ESCAPE_REGEX = /(&|<|>|"|'|`)/g;
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
  function insertAfterOrAtStart(root, element, after) {
    if (after === void 0) {
      after = null;
    }
    if (!after) {
      insertAtStart(root, element);
      return;
    }
    var before = after.nextSibling;
    root.insertBefore(element, before);
  }
  function insertAtStart(root, element) {
    root.insertBefore(element, root.firstChild);
  }
  function addAttributesToElement(element, attributes) {
    for (var attr in attributes) {
      element.setAttribute(attr, attributes[attr]);
    }
    return element;
  }
  function createElementWithAttributes(doc, tagName, attributes) {
    var element = doc.createElement(tagName);
    return addAttributesToElement(element, attributes);
  }
  function rootNodeFor(node) {
    if (Node.prototype.getRootNode) {
      return node.getRootNode() || node;
    }
    var n;
    for (n = node; !!n.parentNode && !isShadowRoot(n); n = n.parentNode) {
    }
    return n;
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
  function hasNextNodeInDocumentOrder(element, opt_stopNode) {
    var currentElement = element;
    do {
      if (currentElement.nextSibling) {
        return true;
      }
    } while ((currentElement = currentElement.parentNode) && currentElement != opt_stopNode);
    return false;
  }
  function iterateCursor(iterable, cb) {
    var length = iterable.length;
    for (var i = 0; i < length; i++) {
      cb(iterable[i], i);
    }
  }
  function escapeHtml(text) {
    if (!text) {
      return text;
    }
    return text.replace(HTML_ESCAPE_REGEX, escapeHtmlChar);
  }
  function escapeHtmlChar(c) {
    return HTML_ESCAPE_CHARS[c];
  }
  function tryFocus(element) {
    try {
      element.focus();
    } catch (e) {
    }
  }
  function isIframed(win) {
    return win.parent && win.parent != win;
  }
  function isEnabled(element) {
    return !(element.disabled || matches(element, ":disabled"));
  }
  function getVerticalScrollbarWidth(win) {
    var documentElement = win.document.documentElement;
    var windowWidth = win.innerWidth;
    var documentWidth = documentElement.clientWidth;
    return windowWidth - documentWidth;
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

  // src/core/error/index.js
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
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
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
    for (var _iterator = _createForOfIteratorHelperLoose2(arguments), _step; !(_step = _iterator()).done; ) {
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
  function rethrowAsync(var_args) {
    var error = createError.apply(null, arguments);
    setTimeout(function() {
      maybeReportError(error);
      throw error;
    });
  }

  // src/core/types/function/index.js
  function throttle(win, callback, minInterval) {
    var locker = 0;
    var nextCallArgs = null;
    function fire(args) {
      nextCallArgs = null;
      locker = win.setTimeout(waiter, minInterval);
      callback.apply(null, args);
    }
    function waiter() {
      locker = 0;
      if (nextCallArgs) {
        fire(nextCallArgs);
      }
    }
    return function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (locker) {
        nextCallArgs = args;
      } else {
        fire(args);
      }
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

  // src/utils/log.js
  var LogLevel_Enum = {
    OFF: 0,
    ERROR: 1,
    WARN: 2,
    INFO: 3,
    FINE: 4
  };
  var logHashParam = function logHashParam2(opt_win) {
    return parseInt(getHashParams(opt_win)["log"], 10);
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
  function userAssert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    return user().assert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
  }

  // src/service-helpers.js
  function installServiceInEmbedDoc(ampdoc2, id, service) {
    registerServiceInternal(getAmpdocServiceHolder(ampdoc2), ampdoc2, id, function() {
      return service;
    }, true);
  }
  function registerServiceBuilderInEmbedWin(embedWin, id, constructor) {
    registerServiceInternal(embedWin, embedWin, id, constructor, true);
  }
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
  function setParentWindow(win, parentWin) {
    win.__AMP_PARENT = parentWin;
    win.__AMP_TOP = getTopWindow(parentWin);
  }
  function getTopWindow(win) {
    return win.__AMP_TOP || (win.__AMP_TOP = win);
  }
  function getParentWindowFrameElement(node, opt_topWin) {
    var childWin = (node.ownerDocument || node).defaultView;
    var topWin = opt_topWin || getTopWindow(childWin);
    if (childWin && childWin != topWin && getTopWindow(childWin) == topWin) {
      try {
        return childWin.frameElement;
      } catch (e) {
      }
    }
    return null;
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
  function isDisposable(service) {
    return typeof service.dispose == "function";
  }
  function assertDisposable(service) {
    devAssert2(isDisposable(service), "required to implement Disposable");
    return service;
  }
  function disposeServicesForEmbed(embedWin) {
    disposeServicesInternal(embedWin);
  }
  function disposeServicesInternal(holder) {
    var services = getServices(holder);
    var _loop = function _loop2(id2) {
      if (!Object.prototype.hasOwnProperty.call(services, id2)) {
        return "continue";
      }
      var serviceHolder = services[id2];
      if (serviceHolder.sharedInstance) {
        return "continue";
      }
      if (serviceHolder.obj) {
        disposeServiceInternal(id2, serviceHolder.obj);
      } else if (serviceHolder.promise) {
        serviceHolder.promise.then(function(instance) {
          return disposeServiceInternal(id2, instance);
        });
      }
    };
    for (var id in services) {
      var _ret = _loop(id);
      if (_ret === "continue")
        continue;
    }
  }
  function disposeServiceInternal(id, service) {
    if (!isDisposable(service)) {
      return;
    }
    try {
      assertDisposable(service).dispose();
    } catch (e) {
      dev().error("SERVICE", "failed to dispose service", id, e);
    }
  }
  function adoptServiceForEmbedDoc(ampdoc2, id) {
    var service = getServiceInternal(getAmpdocServiceHolder(devAssert2(ampdoc2.getParent())), id);
    registerServiceInternal(getAmpdocServiceHolder(ampdoc2), ampdoc2, id, function() {
      return service;
    }, false, true);
  }
  function adoptServiceFactoryForEmbedDoc(ampdoc2, id) {
    var parentHolder = getAmpdocServiceHolder(devAssert2(ampdoc2.getParent()));
    devAssert2(isServiceRegistered(parentHolder, id), "Expected service " + id + " to be registered");
    var service = getServices(parentHolder)[id];
    registerServiceInternal(getAmpdocServiceHolder(ampdoc2), ampdoc2, id, devAssert2(service.ctor));
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
    return userAssert(service, "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.", id, extension, extension, extension);
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

  // ads/google/a4a/shared/url-builder.js
  function buildUrl(baseUrl, queryParams, maxLength, opt_truncationQueryParam) {
    var encodedParams = [];
    var encodedTruncationParam = opt_truncationQueryParam && !(opt_truncationQueryParam.value == null || opt_truncationQueryParam.value === "") ? encodeURIComponent(opt_truncationQueryParam.name) + "=" + encodeURIComponent(String(opt_truncationQueryParam.value)) : null;
    var capacity = maxLength - baseUrl.length;
    if (encodedTruncationParam) {
      capacity -= encodedTruncationParam.length + 1;
    }
    var keys = Object.keys(queryParams);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = queryParams[key];
      if (value == null || value === "") {
        continue;
      }
      var encodedNameAndSep = encodeURIComponent(key) + "=";
      var encodedValue = encodeURIComponent(String(value));
      var fullLength = encodedNameAndSep.length + encodedValue.length + 1;
      if (fullLength > capacity) {
        var truncatedValue = encodedValue.substr(0, capacity - encodedNameAndSep.length - 1).replace(/%\w?$/, "");
        if (truncatedValue) {
          encodedParams.push(encodedNameAndSep + truncatedValue);
        }
        if (encodedTruncationParam) {
          encodedParams.push(encodedTruncationParam);
        }
        break;
      }
      encodedParams.push(encodedNameAndSep + encodedValue);
      capacity -= fullLength;
    }
    if (!encodedParams.length) {
      return baseUrl;
    }
    return baseUrl + "?" + encodedParams.join("&");
  }

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
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
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
  var TAG = "EXPERIMENTS";
  var LOCAL_STORAGE_KEY = "amp-experiment-toggles";
  var TOGGLES_WINDOW_PROPERTY = "__AMP__EXPERIMENT_TOGGLES";
  function isCanary(win) {
    var _win$AMP_CONFIG;
    return !!((_win$AMP_CONFIG = win.AMP_CONFIG) != null && _win$AMP_CONFIG.canary);
  }
  function getBinaryType(win) {
    var _win$AMP_CONFIG2;
    return ((_win$AMP_CONFIG2 = win.AMP_CONFIG) == null ? void 0 : _win$AMP_CONFIG2.type) || "unknown";
  }
  function isExperimentOn(win, experimentId) {
    var toggles = experimentToggles(win);
    return !!toggles[experimentId];
  }
  function toggleExperiment(win, experimentId, opt_on, opt_transientExperiment) {
    var currentlyOn = isExperimentOn(win, experimentId);
    var on = opt_on != null ? opt_on : !currentlyOn;
    if (on != currentlyOn) {
      var toggles = experimentToggles(win);
      toggles[experimentId] = on;
      if (!opt_transientExperiment) {
        var storedToggles = getExperimentToggles(win);
        storedToggles[experimentId] = on;
        saveExperimentToggles(win, storedToggles);
        if (!getMode().test) {
          user().warn(TAG, '"%s" experiment %s for the domain "%s". See: https://amp.dev/documentation/guides-and-tutorials/learn/experimental', experimentId, on ? "enabled" : "disabled", win.location.hostname);
        }
      }
    }
    return on;
  }
  function experimentToggles(win) {
    var _win$AMP_CONFIG3, _win$AMP_EXP, _win$__AMP_EXP, _win$AMP_CONFIG4, _win$AMP_CONFIG5;
    if (win[TOGGLES_WINDOW_PROPERTY]) {
      return win[TOGGLES_WINDOW_PROPERTY];
    }
    win[TOGGLES_WINDOW_PROPERTY] = map();
    var toggles = win[TOGGLES_WINDOW_PROPERTY];
    var buildExperimentConfigs = _extends({}, (_win$AMP_CONFIG3 = win.AMP_CONFIG) != null ? _win$AMP_CONFIG3 : {}, (_win$AMP_EXP = win.AMP_EXP) != null ? _win$AMP_EXP : parseJson(((_win$__AMP_EXP = win.__AMP_EXP) == null ? void 0 : _win$__AMP_EXP.textContent) || "{}"));
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
  function experimentTogglesOrNull(win) {
    return win[TOGGLES_WINDOW_PROPERTY] || null;
  }
  function getExperimentToggles(win) {
    var _experimentsString;
    var experimentsString = "";
    try {
      if ("localStorage" in win) {
        experimentsString = win.localStorage.getItem(LOCAL_STORAGE_KEY);
      }
    } catch (_unused) {
      dev().warn(TAG, "Failed to retrieve experiments from localStorage.");
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
  function saveExperimentToggles(win, toggles) {
    var experimentIds = [];
    for (var experiment in toggles) {
      experimentIds.push((toggles[experiment] === false ? "-" : "") + experiment);
    }
    try {
      var _win$localStorage;
      (_win$localStorage = win.localStorage) == null ? void 0 : _win$localStorage.setItem(LOCAL_STORAGE_KEY, experimentIds.join(","));
    } catch (e) {
      user().error(TAG, "Failed to save experiments to localStorage.");
    }
  }
  function slowButAccuratePrng() {
    return Math.random();
  }
  var RANDOM_NUMBER_GENERATORS = {
    accuratePrng: slowButAccuratePrng
  };
  function selectRandomItem(arr) {
    var rn = RANDOM_NUMBER_GENERATORS.accuratePrng();
    return dev().assertString(arr[Math.floor(rn * arr.length)]) || null;
  }
  function randomlySelectUnsetExperiments(win, experiments) {
    win.__AMP_EXPERIMENT_BRANCHES = win.__AMP_EXPERIMENT_BRANCHES || {};
    var selectedExperiments = {};
    for (var _iterator4 = _createForOfIteratorHelperLoose3(experiments), _step4; !(_step4 = _iterator4()).done; ) {
      var experiment = _step4.value;
      var experimentName = experiment.experimentId;
      if (hasOwn(win.__AMP_EXPERIMENT_BRANCHES, experimentName)) {
        selectedExperiments[experimentName] = win.__AMP_EXPERIMENT_BRANCHES[experimentName];
        continue;
      }
      if (!(experiment.isTrafficEligible != null && experiment.isTrafficEligible(win))) {
        win.__AMP_EXPERIMENT_BRANCHES[experimentName] = null;
        continue;
      }
      if (!win.__AMP_EXPERIMENT_BRANCHES[experimentName] && isExperimentOn(win, experimentName)) {
        win.__AMP_EXPERIMENT_BRANCHES[experimentName] = selectRandomItem(experiment.branches);
        selectedExperiments[experimentName] = win.__AMP_EXPERIMENT_BRANCHES[experimentName];
      }
    }
    return selectedExperiments;
  }
  function getExperimentBranch(win, experimentName) {
    return win.__AMP_EXPERIMENT_BRANCHES ? win.__AMP_EXPERIMENT_BRANCHES[experimentName] : null;
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
  function getConsentPolicyInfo(element, policyId) {
    if (policyId === void 0) {
      policyId = "default";
    }
    return Services.consentPolicyServiceForDocOrNull(element).then(function(consentPolicy) {
      if (!consentPolicy) {
        return null;
      }
      return consentPolicy.getConsentStringInfo(policyId);
    });
  }
  function getConsentMetadata(element, policyId) {
    if (policyId === void 0) {
      policyId = "default";
    }
    return Services.consentPolicyServiceForDocOrNull(element).then(function(consentPolicy) {
      if (!consentPolicy) {
        return null;
      }
      return consentPolicy.getConsentMetadataInfo(policyId);
    });
  }

  // src/service/resources-interface.js
  var READY_SCAN_SIGNAL = "ready-scan";

  // src/ini-load.js
  var EXCLUDE_INI_LOAD = ["AMP-AD", "AMP-ANALYTICS", "AMP-PIXEL", "AMP-AD-EXIT"];
  function whenContentIniLoad(elementOrAmpDoc, hostWin, rect, opt_prerenderableOnly) {
    if (true) {
      return whenContentIniLoadInOb(elementOrAmpDoc, opt_prerenderableOnly);
    }
    return whenContentIniLoadMeasure(elementOrAmpDoc, hostWin, rect, opt_prerenderableOnly);
  }
  function whenContentIniLoadMeasure(elementOrAmpDoc, hostWin, rect, opt_prerenderableOnly) {
    var ampdoc2 = Services.ampdoc(elementOrAmpDoc);
    return getMeasuredResources(ampdoc2, hostWin, function(r) {
      if (!r.isDisplayed() || !r.overlaps(rect) && !r.isFixed() || opt_prerenderableOnly && !r.prerenderAllowed()) {
        return false;
      }
      return true;
    }).then(function(resources) {
      var promises = [];
      resources.forEach(function(r) {
        if (!EXCLUDE_INI_LOAD.includes(r.element.tagName)) {
          promises.push(r.loadedOnce());
        }
      });
      return Promise.all(promises);
    });
  }
  function whenContentIniLoadInOb(elementOrAmpDoc, opt_prerenderableOnly) {
    var ampdoc2 = Services.ampdoc(elementOrAmpDoc);
    var whenReady = ampdoc2.signals().whenSignal(READY_SCAN_SIGNAL);
    return whenReady.then(function() {
      var resources = Services.resourcesForDoc(ampdoc2);
      var elements2 = resources.get().filter(function(r) {
        if (opt_prerenderableOnly && !r.prerenderAllowed()) {
          return false;
        }
        return !EXCLUDE_INI_LOAD.includes(r.element.tagName);
      }).map(function(r) {
        return r.element;
      });
      if (elements2.length === 0) {
        return Promise.resolve([]);
      }
      return new Promise(function(resolve) {
        var win = ampdoc2.win;
        var io = new win.IntersectionObserver(function(entries) {
          io.disconnect();
          var intersecting = [];
          for (var i2 = 0; i2 < entries.length; i2++) {
            var _entries$i = entries[i2], isIntersecting = _entries$i.isIntersecting, target = _entries$i.target;
            if (isIntersecting) {
              intersecting.push(target);
            }
          }
          resolve(intersecting);
        }, {
          root: isIframed(win) ? win.document : null,
          threshold: 0.01
        });
        for (var i = 0; i < Math.min(elements2.length, 100); i++) {
          io.observe(elements2[i]);
        }
      }).then(function(elements3) {
        return Promise.all(elements3.map(function(element) {
          return element.whenLoaded();
        }));
      });
    });
  }
  function getMeasuredResources(ampdoc2, hostWin, filterFn) {
    return ampdoc2.signals().whenSignal(READY_SCAN_SIGNAL).then(function() {
      var measurePromiseArray = [];
      var resources = Services.resourcesForDoc(ampdoc2);
      resources.get().forEach(function(r) {
        if (!r.hasBeenMeasured() && r.hostWin == hostWin && !r.hasOwner()) {
          measurePromiseArray.push(r.ensureMeasured());
        }
      });
      return Promise.all(measurePromiseArray);
    }).then(function() {
      var resources = Services.resourcesForDoc(ampdoc2);
      return resources.get().filter(function(r) {
        return r.hostWin == hostWin && !r.hasOwner() && r.hasBeenMeasured() && filterFn(r);
      });
    });
  }

  // ads/_config.js
  var adConfig = JSON.parse('{"_ping_":{"renderStartImplemented":true,"clientIdScope":"_PING_","consentHandlingOverride":true},"1wo":{},"24smi":{"prefetch":"https://jsn.24smi.net/smi.js","preconnect":"https://data.24smi.net"},"a8":{"prefetch":"https://statics.a8.net/amp/ad.js","renderStartImplemented":true},"a9":{"prefetch":"https://z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"},"accesstrade":{"prefetch":"https://h.accesstrade.net/js/amp/amp.js"},"adagio":{"prefetch":"https://js-ssl.neodatagroup.com/adagio_amp.js","preconnect":["https://ad-aws-it.neodatagroup.com","https://tracker.neodatagroup.com"],"renderStartImplemented":true},"adblade":{"prefetch":"https://web.adblade.com/js/ads/async/show.js","preconnect":["https://staticd.cdn.adblade.com","https://static.adblade.com"],"renderStartImplemented":true},"adbutler":{"prefetch":"https://servedbyadbutler.com/app.js"},"adform":{},"adfox":{"prefetch":"https://yandex.ru/ads/system/context.js","preconnect":["https://yastatic.net/"],"renderStartImplemented":true},"adgeneration":{"prefetch":"https://i.socdm.com/sdk/js/adg-script-loader.js"},"adglare":{"renderStartImplemented":true},"adhese":{"renderStartImplemented":true},"adincube":{"renderStartImplemented":true},"adition":{},"adman":{},"admanmedia":{"renderStartImplemented":true},"admixer":{"renderStartImplemented":true,"preconnect":["https://inv-nets.admixer.net","https://cdn.admixer.net"]},"adnuntius":{"prefetch":"https://cdn.adnuntius.com/adn.js","renderStartImplemented":true},"adocean":{"consentHandlingOverride":true},"adop":{},"adpicker":{"renderStartImplemented":true},"adplugg":{"prefetch":"https://www.adplugg.com/serve/js/ad.js","renderStartImplemented":true},"adpon":{"prefetch":"https://ad.adpon.jp/amp.js","clientIdScope":"AMP_ECID_ADPON"},"adpushup":{"prefetch":"https://securepubads.g.doubleclick.net/tag/js/gpt.js","preconnect":"https://cdn.adpushup.com"},"adreactor":{},"adsensor":{"prefetch":"https://wfpscripts.webspectator.com/amp/adsensor-amp.js","clientIdScope":"amp_ecid_adensor","renderStartImplemented":true},"adservsolutions":{},"adskeeper":{"renderStartImplemented":true,"preconnect":["https://jsc.adskeeper.com","https://servicer.adskeeper.com","https://s-img.adskeeper.com"]},"adsloom":{"clientIdScope":"AMP_ECID_ADSLOOM"},"adsnative":{"prefetch":"https://static.adsnative.com/static/js/render.v1.js","preconnect":"https://api.adsnative.com"},"adspeed":{"preconnect":"https://g.adspeed.net","renderStartImplemented":true},"adspirit":{},"adstir":{"prefetch":"https://js.ad-stir.com/js/adstir_async.js","preconnect":"https://ad.ad-stir.com"},"adstyle":{"prefetch":"https://widgets.ad.style/amp.js","preconnect":["https://w.ad.style"]},"adtech":{"prefetch":"https://s.aolcdn.com/os/ads/adsWrapper3.js","preconnect":["https://mads.at.atwola.com","https://aka-cdn.adtechus.com"]},"adtelligent":{"preconnect":["https://s.adtelligent.com"],"renderStartImplemented":true},"adthrive":{"prefetch":["https://www.googletagservices.com/tag/js/gpt.js"],"preconnect":["https://partner.googleadservices.com","https://securepubads.g.doubleclick.net","https://tpc.googlesyndication.com"],"renderStartImplemented":true},"adunity":{"preconnect":["https://content.adunity.com"],"renderStartImplemented":true},"aduptech":{"prefetch":"https://s.d.adup-tech.com/jsapi","preconnect":["https://d.adup-tech.com","https://m.adup-tech.com","https://v.adup-tech.com"],"renderStartImplemented":true,"consentHandlingOverride":true},"adventive":{"preconnect":["https://ads.adventive.com","https://amp.adventivedev.com"],"renderStartImplemented":true},"adverline":{"prefetch":"https://ads.adverline.com/richmedias/amp.js","preconnect":["https://adnext.fr"],"renderStartImplemented":true},"adverticum":{},"advertserve":{"renderStartImplemented":true},"adyoulike":{"consentHandlingOverride":true,"prefetch":"https://fo-static.omnitagjs.com/amp.js","renderStartImplemented":true},"adzerk":{},"affiliateb":{"prefetch":"https://track.affiliate-b.com/amp/a.js","renderStartImplemented":true},"aja":{"prefetch":["https://cdn.as.amanad.adtdp.com/sdk/asot-amp.js","https://cdn.as.amanad.adtdp.com/sdk/asot-v2.js"],"preconnect":["https://ad.as.amanad.adtdp.com"]},"appvador":{"prefetch":["https://cdn.apvdr.com/js/VastAdUnit.min.js","https://cdn.apvdr.com/js/VideoAd.min.js","https://cdn.apvdr.com/js/VideoAd3PAS.min.js","https://cdn.apvdr.com/js/VideoAdAutoPlay.min.js","https://cdn.apvdr.com/js/VideoAdNative.min.js"],"renderStartImplemented":true},"amoad":{"prefetch":["https://j.amoad.com/js/a.js","https://j.amoad.com/js/n.js"],"preconnect":["https://d.amoad.com","https://i.amoad.com","https://m.amoad.com","https://v.amoad.com"]},"amplified":{"preconnect":"https://srv.clickfuse.com","renderStartImplemented":true},"andbeyond":{"prefetch":"https://securepubads.g.doubleclick.net/tag/js/gpt.js","preconnect":"https://cdn.andbeyond.media"},"aniview":{"renderStartImplemented":true},"anyclip":{"prefetch":"https://player.anyclip.com/anyclip-widget/lre-widget/prod/v1/src/lre.js","preconnect":["https://trafficmanager.anyclip.com","https://lreprx-server.anyclip.com"],"renderStartImplemented":true},"appnexus":{"prefetch":"https://acdn.adnxs.com/ast/ast.js","preconnect":"https://ib.adnxs.com","renderStartImplemented":true},"atomx":{"prefetch":"https://s.ato.mx/p.js"},"avantisvideo":{"renderStartImplemented":true},"beaverads":{"renderStartImplemented":true},"beopinion":{"prefetch":"https://widget.beop.io/sdk.js","preconnect":["https://t.beop.io","https://s.beop.io","https://data.beop.io"],"renderStartImplemented":true},"bidtellect":{},"blade":{"prefetch":"https://sdk.streamrail.com/blade/sr.blade.js","renderStartImplemented":true},"brainy":{},"bringhub":{"renderStartImplemented":true,"preconnect":["https://static.bh-cdn.com","https://core-api.bringhub.io"]},"broadbandy":{"renderStartImplemented":true},"broadstreetads":{"prefetch":"https://cdn.broadstreetads.com/init-2.min.js","renderStartImplemented":true},"byplay":{},"caajainfeed":{"prefetch":["https://cdn.amanad.adtdp.com/sdk/ajaamp.js"],"preconnect":["https://ad.amanad.adtdp.com"]},"capirs":{"renderStartImplemented":true},"caprofitx":{"prefetch":["https://cdn.caprofitx.com/pfx.min.js","https://cdn.caprofitx.com/tags/amp/profitx_amp.js"],"preconnect":"https://ad.caprofitx.adtdp.com"},"cedato":{"renderStartImplemented":true},"chargeads":{},"colombia":{"prefetch":"https://static.clmbtech.com/ad/commons/js/colombia-amp.js"},"colombiafeed":{"prefetch":"https://static.clmbtech.com/c1e/static/themes/js/colombiafeed-amp.js"},"conative":{"renderStartImplemented":true},"connatix":{"renderStartImplemented":true},"contentad":{},"criteo":{"prefetch":"https://static.criteo.net/js/ld/publishertag.js","preconnect":"https://cas.criteo.com"},"csa":{"prefetch":"https://www.google.com/adsense/search/ads.js"},"dable":{"preconnect":["https://static.dable.io","https://api.dable.io","https://images.dable.io"],"renderStartImplemented":true},"digiteka":{"renderStartImplemented":true},"directadvert":{"renderStartImplemented":true},"distroscale":{"preconnect":["https://c.jsrdn.com","https://s.jsrdn.com","https://i.jsrdn.com"],"renderStartImplemented":true},"dotandads":{"prefetch":"https://amp.ad.dotandad.com/dotandadsAmp.js","preconnect":"https://bal.ad.dotandad.com"},"dynad":{"preconnect":["https://t.dynad.net","https://tm.jsuol.com.br"]},"eadv":{"renderStartImplemented":true,"clientIdScope":"AMP_ECID_EADV","prefetch":["https://www.eadv.it/track/esr.min.js","https://www.eadv.it/track/ead.min.js"]},"empower":{"prefetch":"https://cdn.empower.net/sdk/amp-ad.min.js","renderStartImplemented":true},"engageya":{},"epeex":{},"eplanning":{"prefetch":"https://us.img.e-planning.net/layers/epl-amp.js"},"exco":{"renderStartImplemented":true},"ezoic":{"prefetch":["https://www.googletagservices.com/tag/js/gpt.js","https://g.ezoic.net/ezoic/ampad.js"],"clientIdScope":"AMP_ECID_EZOIC","consentHandlingOverride":true,"renderStartImplemented":true},"f1e":{"prefetch":"https://img.ak.impact-ad.jp/util/f1e_amp.min.js"},"f1h":{"preconnect":"https://img.ak.impact-ad.jp","renderStartImplemented":true},"fake":{},"fake-delayed":{"renderStartImplemented":true},"feedad":{"clientIdScope":"__fa_amp","prefetch":"https://web.feedad.com/sdk/feedad-async.js","renderStartImplemented":true,"fullWidthHeightRatio":1.7777777777777777,"consentHandlingOverride":true},"felmat":{"prefetch":"https://t.felmat.net/js/fmamp.js","renderStartImplemented":true},"finative":{},"firstimpression":{"prefetch":"https://ecdn.firstimpression.io/static/js/fiamp.js","preconnect":"https://cdn.firstimpression.io","renderStartImplemented":true,"consentHandlingOverride":true},"flite":{},"fluct":{"prefetch":["https://pdn.adingo.jp/p.js"],"preconnect":["https://cdn-fluct.sh.adingo.jp","https://sh.adingo.jp","https://i.adingo.jp"]},"forkmedia":{"renderStartImplemented":true},"freewheel":{"prefetch":"https://cdn.stickyadstv.com/prime-time/fw-amp.min.js","renderStartImplemented":true},"fusion":{"prefetch":"https://assets.adtomafusion.net/fusion/latest/fusion-amp.min.js"},"gecko":{},"genieessp":{"prefetch":"https://js.gsspcln.jp/l/amp.js"},"giraff":{"renderStartImplemented":true},"glomex":{"prefetch":"https://player.glomex.com/integration/1/amp-embed.js"},"gmossp":{"prefetch":"https://cdn.gmossp-sp.jp/ads/amp.js"},"gumgum":{"prefetch":"https://js.gumgum.com/slot.js","renderStartImplemented":true},"holder":{"prefetch":"https://i.holder.com.ua/js2/holder/ajax/ampv1.js","preconnect":"https://h.holder.com.ua","renderStartImplemented":true},"ibillboard":{},"idealmedia":{"renderStartImplemented":true,"preconnect":["https://jsc.idealmedia.io","https://servicer.idealmedia.io","https://s-img.idealmedia.io/"]},"imedia":{"prefetch":"https://i.imedia.cz/js/im3.js","renderStartImplemented":true},"imobile":{"prefetch":"https://spamp.i-mobile.co.jp/script/amp.js","preconnect":"https://spad.i-mobile.co.jp"},"imonomy":{"renderStartImplemented":true},"improvedigital":{},"industrybrains":{"prefetch":"https://web.industrybrains.com/js/ads/async/show.js","preconnect":["https://staticd.cdn.industrybrains.com","https://static.industrybrains.com"],"renderStartImplemented":true},"inmobi":{"prefetch":"https://cf.cdn.inmobi.com/ad/inmobi.secure.js","renderStartImplemented":true},"innity":{"prefetch":"https://cdn.innity.net/admanager.js","preconnect":"https://as.innity.com","renderStartImplemented":true},"insticator":{"preconnect":"https://d3lcz8vpax4lo2.cloudfront.net","renderStartImplemented":true},"invibes":{"prefetch":"https://k.r66net.com/GetAmpLink","renderStartImplemented":true,"consentHandlingOverride":true},"iprom":{"prefetch":"https://cdn.ipromcloud.com/ipromNS.js"},"ix":{"prefetch":["https://js-sec.indexww.com/apl/amp.js"],"preconnect":"https://as-sec.casalemedia.com","renderStartImplemented":true},"jubna":{},"kargo":{},"ketshwa":{},"kiosked":{"renderStartImplemented":true},"jixie":{"prefetch":["https://scripts.jixie.io/jxamp.min.js"],"clientIdScope":"__jxamp","clientIdCookieName":"_jx","renderStartImplemented":true},"kixer":{"prefetch":"https://cdn.kixer.com/ad/load.js","renderStartImplemented":true},"kuadio":{},"lentainform":{"renderStartImplemented":true,"preconnect":["https://jsc.lentainform.com","https://servicer.lentainform.com","https://s-img.lentainform.com"]},"ligatus":{"prefetch":"https://ssl.ligatus.com/render/ligrend.js","renderStartImplemented":true},"lockerdome":{"prefetch":"https://cdn2.lockerdomecdn.com/_js/amp.js","renderStartImplemented":true},"logly":{"preconnect":["https://l.logly.co.jp","https://cdn.logly.co.jp"],"renderStartImplemented":true},"loka":{"prefetch":"https://loka-cdn.akamaized.net/scene/amp.js","preconnect":["https://scene-front.lokaplatform.com","https://loka-materials.akamaized.net"],"renderStartImplemented":true},"luckyads":{"renderStartImplemented":true},"macaw":{"renderStartImplemented":true},"mads":{"prefetch":"https://eu2.madsone.com/js/tags.js"},"mantis-display":{"prefetch":"https://assets.mantisadnetwork.com/mantodea.min.js","preconnect":["https://mantodea.mantisadnetwork.com","https://res.cloudinary.com","https://resize.mantisadnetwork.com"]},"marfeel":{"prefetch":"https://securepubads.g.doubleclick.net/tag/js/gpt.js","preconnect":["https://live.mrf.io","https://tpc.googlesyndication.com","https://fastlane.rubiconproject.com","https://htlb.casalemedia.com","https://prg.smartadserver.com","https://ib.adnxs.com","https://bidder.criteo.com","https://marfeel-d.openx.net","https://ice.360yield.com","https://mbid.marfeelrev.com","https://adservice.google.com"],"consentHandlingOverride":true},"mantis-recommend":{"prefetch":"https://assets.mantisadnetwork.com/recommend.min.js","preconnect":["https://mantodea.mantisadnetwork.com","https://resize.mantisadnetwork.com"]},"mediaad":{},"medianet":{"preconnect":"https://contextual.media.net","renderStartImplemented":true},"mediavine":{"prefetch":"https://amp.mediavine.com/wrapper.min.js","preconnect":["https://partner.googleadservices.com","https://securepubads.g.doubleclick.net","https://tpc.googlesyndication.com"],"renderStartImplemented":true,"consentHandlingOverride":true},"medyanet":{"renderStartImplemented":true},"meg":{"renderStartImplemented":true},"mgid":{"renderStartImplemented":true,"preconnect":["https://jsc.mgid.com","https://servicer.mgid.com","https://s-img.mgid.com"]},"microad":{"prefetch":"https://j.microad.net/js/camp.js","preconnect":["https://s-rtb.send.microad.jp","https://s-rtb.send.microadinc.com","https://cache.send.microad.jp","https://cache.send.microadinc.com","https://deb.send.microad.jp"]},"miximedia":{"renderStartImplemented":true},"mixpo":{"prefetch":"https://cdn.mixpo.com/js/loader.js","preconnect":["https://player1.mixpo.com","https://player2.mixpo.com"]},"monetizer101":{"renderStartImplemented":true},"mox":{"prefetch":["https://ad.mox.tv/js/amp.min.js","https://ad.mox.tv/mox/mwayss_invocation.min.js"],"renderStartImplemented":true},"my6sense":{"renderStartImplemented":true},"myfinance":{"preconnect":["https://a.myfidevs.io","https://static.myfinance.com","https://www.myfinance.com"],"renderStartImplemented":true,"clientIdScope":"AMP_ECID_GOOGLE"},"myoffrz":{"renderStartImplemented":true},"mytarget":{"prefetch":"https://ad.mail.ru/static/ads-async.js","renderStartImplemented":true},"myua":{"renderStartImplemented":true},"mywidget":{"preconnect":"https://likemore-fe.go.mail.ru","prefetch":"https://likemore-go.imgsmail.ru/widget_amp.js","renderStartImplemented":true},"nativeroll":{"prefetch":"https://cdn01.nativeroll.tv/js/seedr-player.min.js"},"nativery":{"preconnect":"https://cdn.nativery.com"},"nativo":{"prefetch":"https://s.ntv.io/serve/load.js"},"navegg":{"renderStartImplemented":true},"nend":{"prefetch":"https://js1.nend.net/js/amp.js","preconnect":["https://output.nend.net","https://img1.nend.net"]},"netletix":{"preconnect":["https://call.netzathleten-media.de"],"renderStartImplemented":true},"noddus":{"prefetch":"https://noddus.com/amp_loader.js","renderStartImplemented":true},"nokta":{"prefetch":"https://static.virgul.com/theme/mockups/noktaamp/ampjs.js","renderStartImplemented":true},"nws":{},"oblivki":{"renderStartImplemented":true},"onead":{"prefetch":"https://ad-specs.guoshipartners.com/static/js/onead-amp.min.js","renderStartImplemented":true},"onnetwork":{"renderStartImplemented":true},"openadstream":{},"openx":{"prefetch":"https://www.googletagservices.com/tag/js/gpt.js","preconnect":["https://partner.googleadservices.com","https://securepubads.g.doubleclick.net","https://tpc.googlesyndication.com"],"renderStartImplemented":true},"opinary":{"renderStartImplemented":true},"outbrain":{"renderStartImplemented":true,"prefetch":"https://widgets.outbrain.com/widgetAMP/outbrainAMP.min.js","preconnect":["https://odb.outbrain.com"],"consentHandlingOverride":true},"pixels":{"prefetch":"https://cdn.adsfactor.net/amp/pixels-amp.min.js","clientIdCookieName":"__AF","renderStartImplemented":true},"playstream":{"prefetch":"https://app.playstream.media/js/amp.js","renderStartImplemented":true},"plista":{},"polymorphicads":{"prefetch":"https://www.polymorphicads.jp/js/amp.js","preconnect":["https://img.polymorphicads.jp","https://ad.polymorphicads.jp"],"renderStartImplemented":true},"popin":{"renderStartImplemented":true},"postquare":{},"ppstudio":{"renderStartImplemented":true},"pressboard":{"renderStartImplemented":true},"promoteiq":{},"pubexchange":{},"pubguru":{"renderStartImplemented":true},"pubmatic":{"prefetch":"https://ads.pubmatic.com/AdServer/js/amp.js"},"pubmine":{"prefetch":["https://s.pubmine.com/head.js"],"preconnect":"https://delivery.g.switchadhub.com","renderStartImplemented":true},"puffnetwork":{"prefetch":"https://static.puffnetwork.com/amp_ad.js","renderStartImplemented":true},"pulse":{"prefetch":"https://static.pulse.mail.ru/pulse-widget-amp.js","renderStartImplemented":true},"pulsepoint":{"prefetch":"https://ads.contextweb.com/TagPublish/getjs.static.js","preconnect":"https://tag.contextweb.com"},"purch":{"prefetch":"https://ramp.purch.com/serve/creative_amp.js","renderStartImplemented":true},"quoraad":{"prefetch":"https://a.quora.com/amp_ad.js","preconnect":"https://ampad.quora.com","renderStartImplemented":true},"rakutenunifiedads":{"prefetch":"https://s-cdn.rmp.rakuten.co.jp/js/amp.js","renderStartImplemented":true},"rbinfox":{"renderStartImplemented":true},"rcmwidget":{"prefetch":"https://rcmjs.rambler.ru/static/rcmw/rcmw-amp.js","renderStartImplemented":true},"readmo":{"renderStartImplemented":true},"realclick":{"renderStartImplemented":true},"recomad":{"renderStartImplemented":true},"recreativ":{"prefetch":"https://go.rcvlink.com/static/amp.js","renderStartImplemented":true},"relap":{"renderStartImplemented":true},"relappro":{"prefetch":"https://cdn.relappro.com/adservices/amp/relappro.amp.min.js","preconnect":"https://tags.relappro.com","renderStartImplemented":true},"remixd":{"preconnect":"https://tags.remixd.com","renderStartImplemented":true},"revcontent":{"prefetch":"https://labs-cdn.revcontent.com/build/amphtml/revcontent.amp.min.js","preconnect":["https://trends.revcontent.com","https://cdn.revcontent.com","https://img.revcontent.com"],"renderStartImplemented":true},"revjet":{"prefetch":"https://cdn.revjet.com/~cdn/JS/03/amp.js","renderStartImplemented":true},"rfp":{"prefetch":"https://js.rfp.fout.jp/rfp-amp.js","preconnect":"https://ad.rfp.fout.jp","renderStartImplemented":true},"rnetplus":{},"rubicon":{},"runative":{"prefetch":"https://cdn.run-syndicate.com/sdk/v1/n.js","renderStartImplemented":true},"sabavision":{"renderStartImplemented":true},"sas":{"renderStartImplemented":true},"seedingalliance":{},"seedtag":{"prefetch":"https://config.seedtag.com/omid/bridge/bridge.js","preconnect":["https://s.seedtag.com"],"consentHandlingOverride":true,"renderStartImplemented":true},"sekindo":{"renderStartImplemented":true},"sharethrough":{"renderStartImplemented":true},"shemedia":{"prefetch":["https://securepubads.g.doubleclick.net/tag/js/gpt.js","https://ads.shemedia.com/static/amp.js"],"preconnect":["https://partner.googleadservices.com","https://tpc.googlesyndication.com","https://ads.blogherads.com"],"renderStartImplemented":true},"sklik":{"prefetch":"https://c.imedia.cz/js/amp.js"},"slimcutmedia":{"preconnect":["https://sb.freeskreen.com","https://static.freeskreen.com","https://video.freeskreen.com"],"renderStartImplemented":true},"smartads":{"prefetch":"https://smart-ads.biz/amp.js"},"smartadserver":{"prefetch":"https://ec-ns.sascdn.com/diff/js/amp.v0.js","preconnect":"https://static.sascdn.com","renderStartImplemented":true},"smartclip":{"prefetch":"https://cdn.smartclip.net/amp/amp.v0.js","preconnect":"https://des.smartclip.net","renderStartImplemented":true},"smi2":{"renderStartImplemented":true},"smilewanted":{"prefetch":"https://prebid.smilewanted.com/amp/amp.js","preconnect":"https://static.smilewanted.com","renderStartImplemented":true},"sogouad":{"prefetch":"https://theta.sogoucdn.com/wap/js/aw.js","renderStartImplemented":true},"sortable":{"prefetch":"https://www.googletagservices.com/tag/js/gpt.js","preconnect":["https://tags-cdn.deployads.com","https://partner.googleadservices.com","https://securepubads.g.doubleclick.net","https://tpc.googlesyndication.com"],"renderStartImplemented":true},"sona":{"renderStartImplemented":true},"sovrn":{"prefetch":"https://ap.lijit.com/www/sovrn_amp/sovrn_ads.js"},"speakol":{"renderStartImplemented":true},"spotx":{"preconnect":"https://js.spotx.tv","renderStartImplemented":true},"springAds":{"preconnect":["https://ib.adnxs.com"],"renderStartImplemented":true},"ssp":{"prefetch":"https://ssp.imedia.cz/static/js/ssp.js","renderStartImplemented":true,"consentHandlingOverride":true},"strossle":{"preconnect":["https://amp.spklw.com","https://widgets.sprinklecontent.com","https://images.sprinklecontent.com"]},"sunmedia":{"prefetch":"https://vod.addevweb.com/sunmedia/amp/ads/sunmedia.js","preconnect":"https://static.addevweb.com","renderStartImplemented":true},"svknative":{"renderStartImplemented":true,"prefetch":"https://widget.svk-native.ru/js/embed.js"},"swoop":{"prefetch":"https://www.swoop-amp.com/amp.js","preconnect":["https://www.swpsvc.com","https://client.swpcld.com"],"renderStartImplemented":true},"taboola":{},"tagon":{"prefetch":"https://js.tagon.co/tagon-amp.min.js"},"tail":{"renderStartImplemented":true},"tcsemotion":{"prefetch":"https://ads.tcsemotion.com/www/delivery/amphb.js","renderStartImplemented":true},"teads":{"prefetch":"https://s8t.teads.tv/media/format/v3/teads-format.min.js","preconnect":["https://cdn2.teads.tv","https://a.teads.tv","https://t.teads.tv","https://r.teads.tv"],"consentHandlingOverride":true},"temedya":{"prefetch":["https://widget.cdn.vidyome.com/builds/loader-amp.js","https://vidyome-com.cdn.vidyome.com/vidyome/builds/widgets.js"],"renderStartImplemented":true},"torimochi":{"renderStartImplemented":true},"tracdelight":{"prefetch":"https://scripts.tracdelight.io/amp.js","renderStartImplemented":true},"trafficstars":{"prefetch":"https://cdn.tsyndicate.com/sdk/v1/master.spot.js","renderStartImplemented":true},"triplelift":{},"trugaze":{"clientIdScope":"__tg_amp","renderStartImplemented":true},"uas":{"prefetch":"https://ads.pubmatic.com/AdServer/js/phoenix.js"},"ucfunnel":{"renderStartImplemented":true},"uzou":{"preconnect":["https://speee-ad.akamaized.net"],"renderStartImplemented":true},"unruly":{"prefetch":"https://video.unrulymedia.com/native/native-loader.js","renderStartImplemented":true},"valuecommerce":{"prefetch":"https://amp.valuecommerce.com/amp_bridge.js","preconnect":["https://ad.jp.ap.valuecommerce.com"],"renderStartImplemented":true},"vdoai":{"prefetch":"https://a.vdo.ai/core/dependencies_amp/vdo.min.js","renderStartImplemented":true},"videointelligence":{"preconnect":"https://s.vi-serve.com","renderStartImplemented":true},"videonow":{"renderStartImplemented":true},"viralize":{"renderStartImplemented":true},"vlyby":{"prefetch":"https://cdn.vlyby.com/amp/qad/qad-outer2.js"},"vmfive":{"prefetch":"https://man.vm5apis.com/dist/adn-web-sdk.js","preconnect":["https://vawpro.vm5apis.com","https://vahfront.vm5apis.com"],"renderStartImplemented":true},"webediads":{"prefetch":"https://eu1.wbdds.com/amp.min.js","preconnect":["https://goutee.top","https://mediaathay.org.uk"],"renderStartImplemented":true},"weborama-display":{"prefetch":["https://cstatic.weborama.fr/js/advertiserv2/adperf_launch_1.0.0_scrambled.js","https://cstatic.weborama.fr/js/advertiserv2/adperf_core_1.0.0_scrambled.js"]},"whopainfeed":{"prefetch":"https://widget.infeed.com.ar/widget/widget-amp.js"},"widespace":{},"wisteria":{"renderStartImplemented":true},"wpmedia":{"prefetch":"https://std.wpcdn.pl/wpjslib/wpjslib-amp.js","preconnect":["https://www.wp.pl","https://v.wpimg.pl"],"renderStartImplemented":true},"wunderkind":{"preconnect":["https://tag.wknd.ai","https://api.bounceexchange.com"],"renderStartImplemented":true},"xlift":{"prefetch":"https://cdn.x-lift.jp/resources/common/xlift_amp.js","renderStartImplemented":true},"yahoo":{"prefetch":"https://s.yimg.com/aaq/ampad/display.js","preconnect":"https://us.adserver.yahoo.com"},"yahoofedads":{"renderStartImplemented":true},"yahoojp":{"prefetch":["https://s.yimg.jp/images/listing/tool/yads/ydn/amp/amp.js","https://yads.c.yimg.jp/js/yads.js"],"preconnect":"https://yads.yahoo.co.jp"},"yahoonativeads":{"renderStartImplemented":true},"yandex":{"prefetch":"https://yandex.ru/ads/system/context.js","preconnect":["https://yastatic.net/"],"renderStartImplemented":true},"yektanet":{"preconnect":["https://cdn.yektanet.com","https://cg-sc.yektanet.com","https://native.yektanet.com","https://nfetch.yektanet.net","https://rfetch.yektanet.net","https://scrapper.yektanet.com","https://ua.yektanet.com","https://bfetch.yektanet.com","https://mostatil.cdn.yektanet.com"],"renderStartImplemented":true},"yengo":{"renderStartImplemented":true},"yieldbot":{"prefetch":["https://cdn.yldbt.com/js/yieldbot.intent.amp.js","https://msg.yldbt.com/js/ybmsg.html"],"preconnect":"https://i.yldbt.com"},"yieldmo":{"prefetch":"https://static.yieldmo.com/ym.1.js","preconnect":["https://s.yieldmo.com","https://ads.yieldmo.com"],"renderStartImplemented":true},"yieldone":{"prefetch":"https://img.ak.impact-ad.jp/ic/pone/commonjs/yone-amp.js"},"yieldpro":{"preconnect":"https://creatives.yieldpro.eu","renderStartImplemented":true},"zedo":{"prefetch":"https://ss3.zedo.com/gecko/tag/Gecko.amp.min.js","renderStartImplemented":true},"zen":{"prefetch":"https://zen.yandex.ru/widget-loader","preconnect":["https://yastatic.net/"],"renderStartImplemented":true},"zergnet":{},"zucks":{"preconnect":["https://j.zucks.net.zimg.jp","https://sh.zucks.net","https://k.zucks.net","https://static.zucks.net.zimg.jp"]},"baidu":{"prefetch":"https://dup.baidustatic.com/js/dm.js","renderStartImplemented":true},"sulvo":{}}');

  // src/ad-cid.js
  function getOrCreateAdCid(ampDoc, clientIdScope, opt_clientIdCookieName, opt_timeout) {
    var timeout = isNaN(opt_timeout) || opt_timeout == null ? 1e3 : opt_timeout;
    var cidPromise = Services.cidForDoc(ampDoc).then(function(cidService) {
      if (!cidService) {
        return;
      }
      return cidService.get({
        scope: dev().assertString(clientIdScope),
        createCookieIfNotPresent: true,
        cookieName: opt_clientIdCookieName
      }, Promise.resolve(void 0)).catch(function(error) {
        dev().error("AD-CID", error);
        return void 0;
      });
    });
    return Services.timerFor(ampDoc.win).timeoutPromise(timeout, cidPromise, "cid timeout").catch(function(error) {
      dev().warn("AD-CID", error);
      return void 0;
    });
  }

  // src/core/dom/layout/rect.js
  function layoutRectLtwh(left, top, width, height) {
    return {
      left: left,
      top: top,
      width: width,
      height: height,
      bottom: top + height,
      right: left + width,
      x: left,
      y: top
    };
  }
  function layoutRectFromDomRect(rect) {
    return layoutRectLtwh(Number(rect.left), Number(rect.top), Number(rect.width), Number(rect.height));
  }
  function rectsOverlap(r1, r2) {
    return r1.top <= r2.bottom && r2.top <= r1.bottom && r1.left <= r2.right && r2.left <= r1.right;
  }
  function expandLayoutRect(rect, dw, dh) {
    return layoutRectLtwh(rect.left - rect.width * dw, rect.top - rect.height * dh, rect.width * (1 + dw * 2), rect.height * (1 + dh * 2));
  }
  function moveLayoutRect(rect, dx, dy) {
    if (dx == 0 && dy == 0 || rect.width == 0 && rect.height == 0) {
      return rect;
    }
    return layoutRectLtwh(rect.left + dx, rect.top + dy, rect.width, rect.height);
  }
  function areMarginsChanged(margins, change) {
    return change.top !== void 0 && change.top != margins.top || change.right !== void 0 && change.right != margins.right || change.bottom !== void 0 && change.bottom != margins.bottom || change.left !== void 0 && change.left != margins.left;
  }
  function layoutRectSizeEquals(from, to) {
    return from.width == to.width && from.height === to.height;
  }
  function layoutSizeFromRect(rect) {
    var height = rect.height, width = rect.width;
    return {
      width: width,
      height: height
    };
  }

  // src/core/dom/layout/page-layout-box.js
  function getPageLayoutBoxBlocking(element) {
    var stop = element.ownerDocument.body;
    var left = 0;
    var top = 0;
    for (var n = element; n && n != stop; n = n.offsetParent) {
      left += n.offsetLeft;
      top += n.offsetTop;
    }
    var _element = element, offsetHeight = _element.offsetHeight, offsetWidth = _element.offsetWidth;
    return layoutRectLtwh(left, top, offsetWidth, offsetHeight);
  }

  // src/core/document/format.js
  function isAmpFormatType(formats, doc) {
    var html2 = doc.documentElement;
    var isFormatType = formats.some(function(format) {
      return html2.hasAttribute(format);
    });
    return isFormatType;
  }
  function isAmp4Email(doc) {
    return isAmpFormatType(["\u26A14email", "amp4email"], doc);
  }

  // src/core/document/ready.js
  function isDocumentReady(doc) {
    return doc.readyState != "loading" && doc.readyState != "uninitialized";
  }
  function isDocumentComplete(doc) {
    return doc.readyState == "complete";
  }
  function onDocumentReady(doc, callback) {
    onDocumentState(doc, isDocumentReady, callback);
  }
  function onDocumentState(doc, stateFn, callback) {
    var ready = stateFn(doc);
    if (ready) {
      callback(doc);
    } else {
      var readyListener = function readyListener2() {
        if (stateFn(doc)) {
          if (!ready) {
            ready = true;
            callback(doc);
          }
          doc.removeEventListener("readystatechange", readyListener2);
        }
      };
      doc.addEventListener("readystatechange", readyListener);
    }
  }
  function whenDocumentReady(doc) {
    return new Promise(function(resolve) {
      onDocumentReady(doc, resolve);
    });
  }
  function whenDocumentComplete(doc) {
    return new Promise(function(resolve) {
      onDocumentState(doc, isDocumentComplete, resolve);
    });
  }

  // src/core/dom/event-helper-listen.js
  var optsSupported;
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

  // src/utils/event-helper.js
  var LOAD_FAILURE_PREFIX = "Failed to load:";
  var MEDIA_LOAD_FAILURE_SRC_PROPERTY = "__AMP_MEDIA_LOAD_FAILURE_SRC";
  function listen(element, eventType, listener, opt_evtListenerOpts) {
    return internalListenImplementation(element, eventType, listener, opt_evtListenerOpts);
  }
  function getData(event) {
    return event.data;
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
  function isLoaded(eleOrWindow) {
    return !!(eleOrWindow.complete || eleOrWindow.readyState == "complete" || isHTMLMediaElement(eleOrWindow) && eleOrWindow.readyState > 0 || eleOrWindow.document && eleOrWindow.document.readyState == "complete");
  }
  function loadPromise(eleOrWindow) {
    var unlistenLoad;
    var unlistenError;
    if (isLoaded(eleOrWindow)) {
      return Promise.resolve(eleOrWindow);
    }
    var isMediaElement = isHTMLMediaElement(eleOrWindow);
    if (isMediaElement && eleOrWindow[MEDIA_LOAD_FAILURE_SRC_PROPERTY] === eleOrWindow.currentSrc) {
      return Promise.reject(eleOrWindow);
    }
    var loadingPromise = new Promise(function(resolve, reject) {
      if (isMediaElement) {
        unlistenLoad = listenOnce(eleOrWindow, "loadedmetadata", resolve, {
          capture: true
        });
      } else {
        unlistenLoad = listenOnce(eleOrWindow, "load", resolve);
      }
      if (!eleOrWindow.tagName) {
        return;
      }
      var errorTarget = eleOrWindow;
      if (isMediaElement && !eleOrWindow.hasAttribute("src")) {
        errorTarget = lastChildElement(eleOrWindow, function(child) {
          return child.tagName === "SOURCE";
        });
        if (!errorTarget) {
          return reject(new Error("Media has no source."));
        }
      }
      unlistenError = listenOnce(errorTarget, "error", reject);
    });
    return loadingPromise.then(function() {
      if (unlistenError) {
        unlistenError();
      }
      return eleOrWindow;
    }, function() {
      if (unlistenLoad) {
        unlistenLoad();
      }
      failedToLoad(eleOrWindow);
    });
  }
  function failedToLoad(eleOrWindow) {
    if (isHTMLMediaElement(eleOrWindow)) {
      eleOrWindow[MEDIA_LOAD_FAILURE_SRC_PROPERTY] = eleOrWindow.currentSrc || true;
    }
    var target = eleOrWindow;
    if (target && target.src) {
      target = target.src;
    }
    throw user().createError(LOAD_FAILURE_PREFIX, target);
  }
  function isHTMLMediaElement(eleOrWindow) {
    return eleOrWindow.tagName === "AUDIO" || eleOrWindow.tagName === "VIDEO";
  }
  function isLoadErrorMessage(message) {
    return message.indexOf(LOAD_FAILURE_PREFIX) != -1;
  }

  // src/service/variable-source.js
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
  var WAITFOR_EVENTS_ENUM = {
    VIEWER_FIRST_VISIBLE: 1,
    DOCUMENT_COMPLETE: 2,
    LOAD: 3,
    LOAD_END: 4
  };
  var NAV_TIMING_WAITFOR_EVENTS = {
    "navigationStart": WAITFOR_EVENTS_ENUM.VIEWER_FIRST_VISIBLE,
    "redirectStart": WAITFOR_EVENTS_ENUM.VIEWER_FIRST_VISIBLE,
    "redirectEnd": WAITFOR_EVENTS_ENUM.VIEWER_FIRST_VISIBLE,
    "fetchStart": WAITFOR_EVENTS_ENUM.VIEWER_FIRST_VISIBLE,
    "domainLookupStart": WAITFOR_EVENTS_ENUM.VIEWER_FIRST_VISIBLE,
    "domainLookupEnd": WAITFOR_EVENTS_ENUM.VIEWER_FIRST_VISIBLE,
    "connectStart": WAITFOR_EVENTS_ENUM.VIEWER_FIRST_VISIBLE,
    "secureConnectionStart": WAITFOR_EVENTS_ENUM.VIEWER_FIRST_VISIBLE,
    "connectEnd": WAITFOR_EVENTS_ENUM.VIEWER_FIRST_VISIBLE,
    "requestStart": WAITFOR_EVENTS_ENUM.VIEWER_FIRST_VISIBLE,
    "responseStart": WAITFOR_EVENTS_ENUM.VIEWER_FIRST_VISIBLE,
    "responseEnd": WAITFOR_EVENTS_ENUM.VIEWER_FIRST_VISIBLE,
    "domLoading": WAITFOR_EVENTS_ENUM.DOCUMENT_COMPLETE,
    "domInteractive": WAITFOR_EVENTS_ENUM.DOCUMENT_COMPLETE,
    "domContentLoaded": WAITFOR_EVENTS_ENUM.DOCUMENT_COMPLETE,
    "domComplete": WAITFOR_EVENTS_ENUM.DOCUMENT_COMPLETE,
    "loadEventStart": WAITFOR_EVENTS_ENUM.LOAD,
    "loadEventEnd": WAITFOR_EVENTS_ENUM.LOAD_END
  };
  function getTimingDataAsync(win, startEvent, endEvent) {
    var startWaitForEvent = NAV_TIMING_WAITFOR_EVENTS[startEvent] || WAITFOR_EVENTS_ENUM.LOAD;
    var endWaitForEvent = endEvent ? NAV_TIMING_WAITFOR_EVENTS[endEvent] || WAITFOR_EVENTS_ENUM.LOAD : startWaitForEvent;
    var waitForEvent = Math.max(startWaitForEvent, endWaitForEvent);
    var readyPromise;
    if (waitForEvent === WAITFOR_EVENTS_ENUM.VIEWER_FIRST_VISIBLE) {
      readyPromise = resolvedPromise();
    } else if (waitForEvent === WAITFOR_EVENTS_ENUM.DOCUMENT_COMPLETE) {
      readyPromise = whenDocumentComplete(win.document);
    } else if (waitForEvent === WAITFOR_EVENTS_ENUM.LOAD) {
      readyPromise = loadPromise(win);
    } else if (waitForEvent === WAITFOR_EVENTS_ENUM.LOAD_END) {
      var timer = Services.timerFor(win);
      readyPromise = loadPromise(win).then(function() {
        return timer.promise(1);
      });
    }
    devAssert2(readyPromise, "waitForEvent not supported " + waitForEvent);
    return readyPromise.then(function() {
      return getTimingDataSync(win, startEvent, endEvent);
    });
  }
  function getTimingDataSync(win, startEvent, endEvent) {
    var timingInfo = win["performance"] && win["performance"]["timing"];
    if (!timingInfo || timingInfo["navigationStart"] == 0) {
      return;
    }
    var metric = endEvent === void 0 ? timingInfo[startEvent] : timingInfo[endEvent] - timingInfo[startEvent];
    if (!isFiniteNumber(metric) || metric < 0) {
      return;
    } else {
      return metric;
    }
  }
  function getNavigationData(win, attribute) {
    var navigationInfo = win["performance"] && win["performance"]["navigation"];
    if (!navigationInfo || navigationInfo[attribute] === void 0) {
      return;
    }
    return navigationInfo[attribute];
  }
  var VariableSource = /* @__PURE__ */ function() {
    function VariableSource2(ampdoc2) {
      this.ampdoc = ampdoc2;
      this.replacements_ = Object.create(null);
      this.initialized_ = false;
      this.getUrlMacroAllowlist_();
    }
    var _proto = VariableSource2.prototype;
    _proto.initialize_ = function initialize_() {
      this.initialize();
      this.initialized_ = true;
    };
    _proto.initialize = function initialize() {
    };
    _proto.get = function get(name) {
      if (!this.initialized_) {
        this.initialize_();
      }
      return this.replacements_[name];
    };
    _proto.set = function set(varName, syncResolver) {
      devAssert2(varName.indexOf("RETURN") == -1);
      this.replacements_[varName] = this.replacements_[varName] || {
        sync: void 0,
        async: void 0
      };
      this.replacements_[varName].sync = syncResolver;
      return this;
    };
    _proto.setAsync = function setAsync(varName, asyncResolver) {
      devAssert2(varName.indexOf("RETURN") == -1);
      this.replacements_[varName] = this.replacements_[varName] || {
        sync: void 0,
        async: void 0
      };
      this.replacements_[varName].async = asyncResolver;
      return this;
    };
    _proto.setBoth = function setBoth(varName, syncResolver, asyncResolver) {
      return this.set(varName, syncResolver).setAsync(varName, asyncResolver);
    };
    _proto.getExpr = function getExpr(opt_bindings, opt_allowlist) {
      if (!this.initialized_) {
        this.initialize_();
      }
      var all = _extends2({}, this.replacements_, opt_bindings);
      return this.buildExpr_(Object.keys(all), opt_allowlist);
    };
    _proto.buildExpr_ = function buildExpr_(keys, opt_allowlist) {
      var _this = this;
      if (this.getUrlMacroAllowlist_()) {
        keys = keys.filter(function(key) {
          return _this.getUrlMacroAllowlist_().includes(key);
        });
      }
      if (opt_allowlist) {
        keys = keys.filter(function(key) {
          return opt_allowlist[key];
        });
      }
      if (keys.length === 0) {
        var regexThatMatchesNothing = /_^/g;
        return regexThatMatchesNothing;
      }
      keys.sort(function(s1, s2) {
        return s2.length - s1.length;
      });
      var escaped = keys.map(function(key) {
        if (key[0] === "$") {
          return "\\" + key;
        }
        return key;
      });
      var all = escaped.join("|");
      var regexStr = "\\$?(" + all + ")";
      return new RegExp(regexStr, "g");
    };
    _proto.getUrlMacroAllowlist_ = function getUrlMacroAllowlist_() {
      if (this.variableAllowlist_) {
        return this.variableAllowlist_;
      }
      if (this.ampdoc.isSingleDoc()) {
        var doc = this.ampdoc.getRootNode();
        if (isAmp4Email(doc)) {
          this.variableAllowlist_ = [""];
          return this.variableAllowlist_;
        }
      }
    };
    return VariableSource2;
  }();

  // ads/google/a4a/utils.js
  var AMP_ANALYTICS_HEADER = "X-AmpAnalytics";
  var MAX_URL_LENGTH = 15360;
  var AmpAdImplementation = {
    AMP_AD_XHR_TO_IFRAME: "2",
    AMP_AD_XHR_TO_IFRAME_OR_AMP: "3",
    AMP_AD_IFRAME_GET: "5"
  };
  var ValidAdContainerTypes = {
    "AMP-CAROUSEL": "ac",
    "AMP-FX-FLYING-CARPET": "fc",
    "AMP-LIGHTBOX": "lb",
    "AMP-STICKY-AD": "sa"
  };
  var visibilityStateCodes = {
    "visible": "1",
    "hidden": "2",
    "prerender": "3",
    "unloaded": "5"
  };
  var QQID_HEADER = "X-QQID";
  var SANDBOX_HEADER = "amp-ff-sandbox";
  var EXPERIMENT_ATTRIBUTE = "data-experiment-id";
  var AMP_EXPERIMENT_ATTRIBUTE = "data-amp-experiment-id";
  var TRUNCATION_PARAM = {
    name: "trunc",
    value: "1"
  };
  var CDN_PROXY_REGEXP = /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org((\/.*)|($))+/;
  var TOKEN_VALUE = "AxOH8+XUqIxXfDG7Bxf7YR6oBTF4f73xWZNTyqhrkvIEgEmpxrpX8rzEqe9/yOsCGW9ChT05U9t++yH/aCYKCAgAAACVeyJvcmlnaW4iOiJodHRwczovL2FtcHByb2plY3Qub3JnOjQ0MyIsImZlYXR1cmUiOiJDb252ZXJzaW9uTWVhc3VyZW1lbnQiLCJleHBpcnkiOjE2NDMxNTUxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWUsInVzYWdlIjoic3Vic2V0In0=";
  function maybeInsertOriginTrialToken(win) {
    if (win.document.head.querySelector("meta[content='" + TOKEN_VALUE + "']")) {
      return;
    }
    var metaEl = createElementWithAttributes(win.document, "meta", {
      "http-equiv": "origin-trial",
      content: TOKEN_VALUE
    });
    win.document.head.appendChild(metaEl);
  }
  function getNavigationTiming(win, timingEvent) {
    return win["performance"] && win["performance"]["timing"] && win["performance"]["timing"][timingEvent] || 0;
  }
  function isReportingEnabled(ampElement) {
    var type = ampElement.element.getAttribute("type");
    var win = ampElement.win;
    if (getMode(ampElement.win).localDev && !getMode(ampElement.win).test) {
      toggleExperiment(win, "a4aProfilingRate", true, true);
    }
    return (type == "doubleclick" || type == "adsense") && isExperimentOn(win, "a4aProfilingRate");
  }
  function googleBlockParameters(a4a, opt_experimentIds) {
    var adElement = a4a.element, win = a4a.win;
    var slotRect = getPageLayoutBoxBlocking(adElement);
    var iframeDepth = iframeNestingDepth(win);
    var enclosingContainers = getEnclosingContainerTypes(adElement);
    if (a4a.uiHandler.isStickyAd() && !enclosingContainers.includes(ValidAdContainerTypes["AMP-STICKY-AD"])) {
      enclosingContainers.push(ValidAdContainerTypes["AMP-STICKY-AD"]);
    }
    var eids = adElement.getAttribute(EXPERIMENT_ATTRIBUTE);
    if (opt_experimentIds) {
      eids = mergeExperimentIds(opt_experimentIds, eids);
    }
    var aexp = adElement.getAttribute(AMP_EXPERIMENT_ATTRIBUTE);
    return {
      "adf": DomFingerprint.generate(adElement),
      "nhd": iframeDepth,
      "eid": eids,
      "adx": Math.round(slotRect.left),
      "ady": Math.round(slotRect.top),
      "oid": "2",
      "act": enclosingContainers.length ? enclosingContainers.join() : null,
      "aexp": aexp ? aexp.replace(/,/g, "!") : null
    };
  }
  function googlePageParameters(a4a, startTime) {
    var win = a4a.win;
    var ampDoc = a4a.getAmpDoc();
    var referrerPromise = Services.timerFor(win).timeoutPromise(1e3, Services.viewerForDoc(ampDoc).getReferrerUrl()).catch(function() {
      dev().expectedError("AMP-A4A", "Referrer timeout!");
      return "";
    });
    var uaHintsPromise = Services.timerFor(win).timeoutPromise(1e3, getUserAgentClientHintParameters(win)).catch(function() {
      dev().expectedError("AMP-A4A", "UACH timeout!");
      return {};
    });
    var domLoading = a4a.getAmpDoc().getParam("visibilityState") ? a4a.getAmpDoc().getLastVisibleTime() : getNavigationTiming(win, "domLoading");
    return Promise.all([getOrCreateAdCid(ampDoc, "AMP_ECID_GOOGLE", "_ga"), referrerPromise, uaHintsPromise]).then(function(promiseResults) {
      var clientId = promiseResults[0];
      var referrer = promiseResults[1];
      var uaDataValues = promiseResults[2];
      var _Services$documentInf = Services.documentInfoForDoc(ampDoc), canonicalUrl = _Services$documentInf.canonicalUrl, pageViewId = _Services$documentInf.pageViewId;
      win.gaGlobal = win.gaGlobal || {
        cid: clientId,
        hid: pageViewId
      };
      var screen = win.screen;
      var viewport = Services.viewportForDoc(ampDoc);
      var viewportRect = viewport.getRect();
      var viewportSize = viewport.getSize();
      var visibilityState = ampDoc.getVisibilityState();
      return {
        "is_amp": a4a.isXhrAllowed() ? AmpAdImplementation.AMP_AD_XHR_TO_IFRAME_OR_AMP : AmpAdImplementation.AMP_AD_IFRAME_GET,
        "amp_v": version(),
        "d_imp": "1",
        "c": getCorrelator(win, ampDoc, clientId),
        "ga_cid": win.gaGlobal.cid || null,
        "ga_hid": win.gaGlobal.hid || null,
        "dt": startTime,
        "biw": viewportRect.width,
        "bih": viewportRect.height,
        "u_aw": screen ? screen.availWidth : null,
        "u_ah": screen ? screen.availHeight : null,
        "u_cd": screen ? screen.colorDepth : null,
        "u_w": screen ? screen.width : null,
        "u_h": screen ? screen.height : null,
        "u_tz": -new Date().getTimezoneOffset(),
        "u_his": getHistoryLength(win),
        "isw": win != win.top ? viewportSize.width : null,
        "ish": win != win.top ? viewportSize.height : null,
        "art": getAmpRuntimeTypeParameter(win),
        "vis": visibilityStateCodes[visibilityState] || "0",
        "scr_x": Math.round(viewport.getScrollLeft()),
        "scr_y": Math.round(viewport.getScrollTop()),
        "bc": getBrowserCapabilitiesBitmap(win) || null,
        "debug_experiment_id": (/(?:#|,)deid=([\d,]+)/i.exec(win.location.hash) || [])[1] || null,
        "url": canonicalUrl || null,
        "top": win != win.top ? topWindowUrlOrDomain(win) : null,
        "loc": win.location.href == canonicalUrl ? null : win.location.href,
        "ref": referrer || null,
        "bdt": domLoading ? startTime - domLoading : null,
        "uap": uaDataValues == null ? void 0 : uaDataValues.platform,
        "uapv": uaDataValues == null ? void 0 : uaDataValues.platformVersion,
        "uaa": uaDataValues == null ? void 0 : uaDataValues.architecture,
        "uam": uaDataValues == null ? void 0 : uaDataValues.model,
        "uafv": uaDataValues == null ? void 0 : uaDataValues.uaFullVersion,
        "uab": uaDataValues == null ? void 0 : uaDataValues.bitness
      };
    });
  }
  function googleAdUrl(a4a, baseUrl, startTime, parameters, opt_experimentIds) {
    var blockLevelParameters = googleBlockParameters(a4a, opt_experimentIds);
    return googlePageParameters(a4a, startTime).then(function(pageLevelParameters) {
      Object.assign(parameters, blockLevelParameters, pageLevelParameters);
      return truncAndTimeUrl(baseUrl, parameters, startTime);
    });
  }
  function truncAndTimeUrl(baseUrl, parameters, startTime) {
    return buildUrl(baseUrl, parameters, MAX_URL_LENGTH - 10, TRUNCATION_PARAM) + "&dtd=" + elapsedTimeWithCeiling(Date.now(), startTime);
  }
  function iframeNestingDepth(win) {
    var w = win;
    var depth = 0;
    while (w != w.parent && depth < 100) {
      w = w.parent;
      depth++;
    }
    devAssert2(w == win.top);
    return depth;
  }
  function getHistoryLength(win) {
    try {
      return win.history.length;
    } catch (e) {
      return 0;
    }
  }
  function extractHost(url) {
    return (/^(?:https?:\/\/)?([^\/\?:]+)/i.exec(url) || [])[1] || url;
  }
  function topWindowUrlOrDomain(win) {
    var ancestorOrigins = win.location.ancestorOrigins;
    if (ancestorOrigins) {
      var origin = win.location.origin;
      var topOrigin = ancestorOrigins[ancestorOrigins.length - 1];
      if (origin == topOrigin) {
        return win.top.location.hostname;
      }
      var secondFromTop = secondWindowFromTop(win);
      if (secondFromTop == win || origin == ancestorOrigins[ancestorOrigins.length - 2]) {
        return extractHost(secondFromTop.document.referrer);
      }
      return extractHost(topOrigin);
    } else {
      try {
        return win.top.location.hostname;
      } catch (e) {
      }
      var _secondFromTop = secondWindowFromTop(win);
      try {
        return extractHost(_secondFromTop.document.referrer);
      } catch (e) {
      }
      return null;
    }
  }
  function secondWindowFromTop(win) {
    var secondFromTop = win;
    var depth = 0;
    while (secondFromTop.parent != secondFromTop.parent.parent && depth < 100) {
      secondFromTop = secondFromTop.parent;
      depth++;
    }
    devAssert2(secondFromTop.parent == win.top);
    return secondFromTop;
  }
  function elapsedTimeWithCeiling(time, start) {
    var duration = time - start;
    if (duration >= 1e6) {
      return "M";
    } else if (duration >= 0) {
      return duration;
    }
    return "-M";
  }
  function getCorrelator(win, elementOrAmpDoc, opt_cid) {
    if (!win.ampAdPageCorrelator) {
      win.ampAdPageCorrelator = isExperimentOn(win, "exp-new-correlator") ? Math.floor(4503599627370496 * Math.random()) : makeCorrelator(Services.documentInfoForDoc(elementOrAmpDoc).pageViewId, opt_cid);
    }
    return win.ampAdPageCorrelator;
  }
  function makeCorrelator(pageViewId, opt_clientId) {
    var pageViewIdNumeric = Number(pageViewId || 0);
    if (opt_clientId) {
      return pageViewIdNumeric + opt_clientId.replace(/\D/g, "") % 1e6 * 1e6;
    } else {
      return Math.floor(4503599627370496 * Math.random());
    }
  }
  function additionalDimensions(win, viewportSize) {
    var screenX, screenY, outerWidth, outerHeight, innerWidth, innerHeight;
    try {
      screenX = win.screenX;
      screenY = win.screenY;
    } catch (e) {
    }
    try {
      outerWidth = win.outerWidth;
      outerHeight = win.outerHeight;
    } catch (e) {
    }
    try {
      innerWidth = viewportSize.width;
      innerHeight = viewportSize.height;
    } catch (e) {
    }
    return [win.screenLeft, win.screenTop, screenX, screenY, win.screen ? win.screen.availWidth : void 0, win.screen ? win.screen.availTop : void 0, outerWidth, outerHeight, innerWidth, innerHeight].join();
  }
  function csiTrigger(on, params) {
    return dict({
      "on": on,
      "request": "csi",
      "sampleSpec": {
        "sampleOn": "a4a-csi-${pageViewId}",
        "threshold": 1
      },
      "selector": "amp-ad",
      "selectionMethod": "closest",
      "extraUrlParams": params
    });
  }
  function getCsiAmpAnalyticsConfig() {
    return dict({
      "requests": {
        "csi": "https://csi.gstatic.com/csi?"
      },
      "transport": {
        "xhrpost": false
      },
      "triggers": {
        "adRequestStart": csiTrigger("ad-request-start", {
          "met.a4a": "afs_lvt.${viewerLastVisibleTime}~afs.${time}"
        }),
        "adResponseEnd": csiTrigger("ad-response-end", {
          "met.a4a": "afe.${time}"
        }),
        "adRenderStart": csiTrigger("ad-render-start", {
          "met.a4a": "ast.${scheduleTime}~ars_lvt.${viewerLastVisibleTime}~ars.${time}",
          "qqid": "${qqid}"
        }),
        "adIframeLoaded": csiTrigger("ad-iframe-loaded", {
          "met.a4a": "ail.${time}"
        })
      },
      "extraUrlParams": {
        "s": "ampad",
        "ctx": "2",
        "c": "${correlator}",
        "slotId": "${slotId}",
        "puid": "${requestCount}~${timestamp}"
      }
    });
  }
  function getCsiAmpAnalyticsVariables(analyticsTrigger, a4a, qqid) {
    var win = a4a.win;
    var ampdoc2 = a4a.getAmpDoc();
    var navStart = getNavigationTiming(win, "navigationStart");
    var vars = {
      "correlator": getCorrelator(win, ampdoc2),
      "slotId": a4a.element.getAttribute("data-amp-slot-index"),
      "viewerLastVisibleTime": ampdoc2.getLastVisibleTime() - navStart
    };
    if (qqid) {
      vars["qqid"] = qqid;
    }
    if (analyticsTrigger == "ad-render-start") {
      vars["scheduleTime"] = a4a.element.layoutScheduleTime - navStart;
    }
    return vars;
  }
  function extractAmpAnalyticsConfig(a4a, responseHeaders) {
    if (!responseHeaders.has(AMP_ANALYTICS_HEADER)) {
      return null;
    }
    try {
      var analyticsConfig = parseJson(responseHeaders.get(AMP_ANALYTICS_HEADER));
      var acUrls = analyticsConfig["url"];
      var btrUrls = analyticsConfig["btrUrl"];
      if (acUrls && !Array.isArray(acUrls) || btrUrls && !Array.isArray(btrUrls)) {
        dev().error("AMP-A4A", "Invalid analytics", responseHeaders.get(AMP_ANALYTICS_HEADER));
      }
      var hasActiveViewRequests = Array.isArray(acUrls) && acUrls.length;
      var hasBeginToRenderRequests = Array.isArray(btrUrls) && btrUrls.length;
      if (!hasActiveViewRequests && !hasBeginToRenderRequests) {
        return null;
      }
      var config = dict({
        "transport": {
          "beacon": false,
          "xhrpost": false
        },
        "requests": {},
        "triggers": {}
      });
      if (hasActiveViewRequests) {
        generateActiveViewRequest(config, acUrls);
      }
      if (hasBeginToRenderRequests) {
        generateBeginToRenderRequest(config, btrUrls);
      }
      return config;
    } catch (err) {
      dev().error("AMP-A4A", "Invalid analytics", err, responseHeaders.get(AMP_ANALYTICS_HEADER));
    }
    return null;
  }
  function generateActiveViewRequest(config, urls2) {
    config["triggers"]["continuousVisible"] = dict({
      "request": [],
      "on": "visible",
      "visibilitySpec": {
        "selector": "amp-ad",
        "selectionMethod": "closest",
        "visiblePercentageMin": 50,
        "continuousTimeMin": 1e3
      }
    });
    for (var idx = 0; idx < urls2.length; idx++) {
      config["requests"]["visibility" + (idx + 1)] = "" + urls2[idx];
      config["triggers"]["continuousVisible"]["request"].push("visibility" + (idx + 1));
    }
  }
  function generateBeginToRenderRequest(config, urls2) {
    config["triggers"]["beginToRender"] = dict({
      "request": [],
      "on": "ini-load",
      "selector": "amp-ad",
      "selectionMethod": "closest"
    });
    for (var idx = 0; idx < urls2.length; idx++) {
      config["requests"]["btr" + (idx + 1)] = "" + urls2[idx];
      config["triggers"]["beginToRender"]["request"].push("btr" + (idx + 1));
    }
  }
  function mergeExperimentIds(newIds, currentIdString) {
    var newIdString = newIds.filter(function(newId) {
      return Number(newId);
    }).join(",");
    currentIdString = currentIdString || "";
    return currentIdString + (currentIdString && newIdString ? "," : "") + newIdString;
  }
  function addCsiSignalsToAmpAnalyticsConfig(win, element, config, qqid, isVerifiedAmpCreative) {
    var correlator = getCorrelator(win, element);
    var slotId = Number(element.getAttribute("data-amp-slot-index"));
    var eids = encodeURIComponent(element.getAttribute(EXPERIMENT_ATTRIBUTE));
    var aexp = element.getAttribute(AMP_EXPERIMENT_ATTRIBUTE);
    if (aexp) {
      aexp = aexp.replace(/,/g, "!");
    }
    var adType = element.getAttribute("type");
    var initTime = Number(getTimingDataSync(win, "navigationStart") || Date.now());
    var deltaTime = Math.round(win.performance && win.performance.now ? win.performance.now() : Date.now() - initTime);
    var baseCsiUrl = "https://csi.gstatic.com/csi?s=a4a" + ("&c=" + correlator + "&slotId=" + slotId + "&qqid." + slotId + "=" + qqid) + ("&dt=" + initTime) + (eids != "null" ? "&e." + slotId + "=" + eids : "") + (aexp ? "&aexp=" + aexp : "") + ("&rls=" + version() + "&adt." + slotId + "=" + adType);
    var isAmpSuffix = isVerifiedAmpCreative ? "Friendly" : "CrossDomain";
    config["triggers"]["continuousVisibleIniLoad"] = {
      "on": "ini-load",
      "selector": "amp-ad",
      "selectionMethod": "closest",
      "request": "iniLoadCsi"
    };
    config["triggers"]["continuousVisibleRenderStart"] = {
      "on": "render-start",
      "selector": "amp-ad",
      "selectionMethod": "closest",
      "request": "renderStartCsi"
    };
    config["requests"]["iniLoadCsi"] = baseCsiUrl + ("&met.a4a." + slotId + "=iniLoadCsi" + isAmpSuffix + "." + deltaTime);
    config["requests"]["renderStartCsi"] = baseCsiUrl + ("&met.a4a." + slotId + "=renderStartCsi" + isAmpSuffix + "." + deltaTime);
    config["requests"]["visibilityCsi"] = baseCsiUrl + ("&met.a4a." + slotId + "=visibilityCsi." + deltaTime);
    config["triggers"]["continuousVisible"]["request"].push("visibilityCsi");
    return config;
  }
  function getEnclosingContainerTypes(adElement) {
    var containerTypeSet = {};
    for (var el = adElement.parentElement, counter = 0; el && counter < 20; el = el.parentElement, counter++) {
      var tagName = el.tagName.toUpperCase();
      if (ValidAdContainerTypes[tagName]) {
        containerTypeSet[ValidAdContainerTypes[tagName]] = true;
      }
    }
    return Object.keys(containerTypeSet);
  }
  function maybeAppendErrorParameter(adUrl, parameterValue) {
    devAssert2(!!adUrl && !!parameterValue);
    if (new RegExp("[?|&](" + encodeURIComponent(TRUNCATION_PARAM.name) + "=" + (encodeURIComponent(String(TRUNCATION_PARAM.value)) + "|aet=[^&]*)$")).test(adUrl)) {
      return;
    }
    var modifiedAdUrl = adUrl + ("&aet=" + parameterValue);
    devAssert2(modifiedAdUrl.length <= MAX_URL_LENGTH);
    return modifiedAdUrl;
  }
  function getBinaryTypeNumericalCode(type) {
    return {
      "production": "0",
      "control": "1",
      "experimental": "2",
      "rc": "3",
      "nightly": "4",
      "nightly-control": "5",
      "experimentA": "10",
      "experimentB": "11",
      "experimentC": "12",
      "nomod": "42",
      "mod": "43"
    }[type] || null;
  }
  var IDENTITY_DOMAIN_REGEXP_ = /\.google\.(?:com?\.)?[a-z]{2,3}$/;
  function getIdentityToken(win, ampDoc, consentPolicyId) {
    win["goog_identity_prom"] = win["goog_identity_prom"] || (consentPolicyId ? getConsentPolicyState(ampDoc.getHeadNode(), consentPolicyId) : Promise.resolve(CONSENT_POLICY_STATE.UNKNOWN_NOT_REQUIRED)).then(function(consentState) {
      return consentState == CONSENT_POLICY_STATE.INSUFFICIENT || consentState == CONSENT_POLICY_STATE.UNKNOWN ? {} : executeIdentityTokenFetch(win, ampDoc);
    });
    return win["goog_identity_prom"];
  }
  function executeIdentityTokenFetch(win, ampDoc, redirectsRemaining, domain, startTime) {
    if (redirectsRemaining === void 0) {
      redirectsRemaining = 1;
    }
    if (domain === void 0) {
      domain = void 0;
    }
    if (startTime === void 0) {
      startTime = Date.now();
    }
    var url = getIdentityTokenRequestUrl(win, ampDoc, domain);
    return Services.xhrFor(win).fetchJson(url, {
      mode: "cors",
      method: "GET",
      ampCors: false,
      credentials: "include"
    }).then(function(res) {
      return res.json();
    }).then(function(obj) {
      var token = obj["newToken"];
      var jar = obj["1p_jar"] || "";
      var pucrd = obj["pucrd"] || "";
      var freshLifetimeSecs = parseInt(obj["freshLifetimeSecs"] || "", 10);
      var validLifetimeSecs = parseInt(obj["validLifetimeSecs"] || "", 10);
      var altDomain = obj["altDomain"];
      var fetchTimeMs = Date.now() - startTime;
      if (IDENTITY_DOMAIN_REGEXP_.test(altDomain)) {
        if (!redirectsRemaining--) {
          return {
            fetchTimeMs: fetchTimeMs
          };
        }
        return executeIdentityTokenFetch(win, ampDoc, redirectsRemaining, altDomain, startTime);
      } else if (freshLifetimeSecs > 0 && validLifetimeSecs > 0 && typeof token == "string") {
        return {
          token: token,
          jar: jar,
          pucrd: pucrd,
          freshLifetimeSecs: freshLifetimeSecs,
          validLifetimeSecs: validLifetimeSecs,
          fetchTimeMs: fetchTimeMs
        };
      }
      return {
        fetchTimeMs: fetchTimeMs
      };
    }).catch(function(unusedErr) {
      return {};
    });
  }
  function getIdentityTokenRequestUrl(win, ampDoc, domain) {
    if (domain === void 0) {
      domain = void 0;
    }
    if (!domain && win != win.top && win.location.ancestorOrigins) {
      var matches2 = IDENTITY_DOMAIN_REGEXP_.exec(win.location.ancestorOrigins[win.location.ancestorOrigins.length - 1]);
      domain = matches2 && matches2[0] || void 0;
    }
    domain = domain || ".google.com";
    var canonical = extractHost(Services.documentInfoForDoc(ampDoc).canonicalUrl);
    return "https://adservice" + domain + "/adsid/integrator.json?domain=" + canonical;
  }
  function isCdnProxy(win) {
    return CDN_PROXY_REGEXP.test(win.location.origin);
  }
  var Capability_Enum = {
    SVG_SUPPORTED: 1 << 0,
    SANDBOXING_ALLOW_TOP_NAVIGATION_BY_USER_ACTIVATION_SUPPORTED: 1 << 1,
    SANDBOXING_ALLOW_POPUPS_TO_ESCAPE_SANDBOX_SUPPORTED: 1 << 2
  };
  function getBrowserCapabilitiesBitmap(win) {
    var browserCapabilities = 0;
    var doc = win.document;
    if (win.SVGElement && doc.createElementNS) {
      browserCapabilities |= Capability_Enum.SVG_SUPPORTED;
    }
    var iframeEl = doc.createElement("iframe");
    if (iframeEl.sandbox && iframeEl.sandbox.supports) {
      if (iframeEl.sandbox.supports("allow-top-navigation-by-user-activation")) {
        browserCapabilities |= Capability_Enum.SANDBOXING_ALLOW_TOP_NAVIGATION_BY_USER_ACTIVATION_SUPPORTED;
      }
      if (iframeEl.sandbox.supports("allow-popups-to-escape-sandbox")) {
        browserCapabilities |= Capability_Enum.SANDBOXING_ALLOW_POPUPS_TO_ESCAPE_SANDBOX_SUPPORTED;
      }
    }
    return browserCapabilities;
  }
  function getAmpRuntimeTypeParameter(win) {
    var art = getBinaryTypeNumericalCode(getBinaryType(win));
    return isCdnProxy(win) && art != "0" ? art : null;
  }
  function getServeNpaPromise(element) {
    if (!element.hasAttribute("always-serve-npa")) {
      return Promise.resolve(false);
    }
    var npaSignal = element.getAttribute("always-serve-npa");
    if (npaSignal == "") {
      return Promise.resolve(true);
    }
    return Services.geoForDocOrNull(element).then(function(geoService) {
      if (!geoService) {
        return true;
      }
      var locations = npaSignal.split(",");
      for (var i = 0; i < locations.length; i++) {
        var geoGroup = geoService.isInCountryGroup(locations[i]);
        if (geoGroup === GEO_IN_GROUP.IN) {
          return true;
        } else if (geoGroup === GEO_IN_GROUP.NOT_DEFINED) {
          user().warn("AMP-AD", 'Geo group "' + locations[i] + '" was not defined.');
        }
      }
      return false;
    });
  }
  function getUserAgentClientHintParameters(win) {
    if (!win.navigator || !win.navigator.userAgentData || typeof win.navigator.userAgentData.getHighEntropyValues !== "function") {
      return resolvedPromise();
    }
    return win.navigator.userAgentData.getHighEntropyValues(["platform", "platformVersion", "architecture", "model", "uaFullVersion", "bitness"]);
  }

  // ads/google/a4a/traffic-experiments.js
  var MANUAL_EXPERIMENT_ID = "117152632";
  function parseExperimentIds(idString) {
    if (idString) {
      return idString.split(",");
    }
    return [];
  }
  function isInExperiment(element, id) {
    return parseExperimentIds(element.getAttribute(EXPERIMENT_ATTRIBUTE)).some(function(x) {
      return x === id;
    });
  }
  function isInManualExperiment(element) {
    return isInExperiment(element, MANUAL_EXPERIMENT_ID);
  }
  function validateExperimentIds(idList) {
    return idList.every(function(id) {
      return !isNaN(parseInt(id, 10));
    });
  }
  function addExpIdToElement(experimentId, element, attr) {
    if (!experimentId) {
      return;
    }
    var currentEids = element.getAttribute(attr);
    if (currentEids && validateExperimentIds(parseExperimentIds(currentEids))) {
      element.setAttribute(attr, mergeExperimentIds([experimentId], currentEids));
    } else {
      element.setAttribute(attr, experimentId);
    }
  }
  function addExperimentIdToElement(experimentId, element) {
    addExpIdToElement(experimentId, element, EXPERIMENT_ATTRIBUTE);
  }
  function addAmpExperimentIdToElement(experimentId, element) {
    addExpIdToElement(experimentId, element, AMP_EXPERIMENT_ATTRIBUTE);
  }

  // src/core/dom/style.js
  var propertyNameCache;
  var vendorPrefixes = ["Webkit", "webkit", "Moz", "moz", "ms", "O", "o"];
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
  function getStyle(element, property, opt_bypassCache) {
    var propertyName = getVendorJsPropertyName(element.style, property, opt_bypassCache);
    if (!propertyName) {
      return void 0;
    }
    if (isVar(propertyName)) {
      return element.style.getPropertyValue(propertyName);
    }
    return element.style[propertyName];
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

  // src/core/types/string/bytes.js
  function utf8Decode(bytes) {
    if (typeof TextDecoder !== "undefined") {
      return new TextDecoder("utf-8").decode(bytes);
    }
    var asciiString = bytesToString(new Uint8Array(bytes.buffer || bytes));
    return decodeURIComponent(escape(asciiString));
  }
  function stringToBytes(str) {
    var bytes = new Uint8Array(str.length);
    for (var i = 0; i < str.length; i++) {
      var charCode = str.charCodeAt(i);
      devAssert(charCode <= 255, "Characters must be in range [0,255]");
      bytes[i] = charCode;
    }
    return bytes;
  }
  function bytesToString(bytes) {
    var array = new Array(bytes.length);
    for (var i = 0; i < bytes.length; i++) {
      array[i] = String.fromCharCode(bytes[i]);
    }
    return array.join("");
  }
  function getCryptoRandomBytesArray(win, length) {
    var crypto = win.crypto;
    if (!isEsm()) {
      crypto = crypto || win.msCrypto;
      if (!crypto || !crypto.getRandomValues) {
        return null;
      }
    }
    var uint8array = new Uint8Array(length);
    crypto.getRandomValues(uint8array);
    return uint8array;
  }

  // src/experiments/story-ad-auto-advance.js
  var StoryAdAutoAdvance = {
    ID: "story-ad-auto-advance",
    CONTROL: "31060904",
    SIX_SECONDS: "31060905",
    EIGHT_SECONDS: "31060906",
    TEN_SECONDS: "31060907"
  };

  // src/experiments/story-ad-placements.js
  var StoryAdPlacements = {
    ID: "story-ad-placements",
    CONTROL: "31060567",
    PREDETERMINED_EIGHT: "31060568",
    PREDETERMINED_TEN: "31060817",
    PREDETERMINED_TWELVE: "31060569"
  };

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

  // src/core/data-structures/priority-queue.js
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var PriorityQueue = /* @__PURE__ */ function() {
    function PriorityQueue2() {
      this.queue_ = [];
    }
    var _proto = PriorityQueue2.prototype;
    _proto.peek = function peek() {
      var l = this.length;
      if (!l) {
        return null;
      }
      return this.queue_[l - 1].item;
    };
    _proto.enqueue = function enqueue(item, priority) {
      if (isNaN(priority)) {
        throw new Error("Priority must not be NaN.");
      }
      var i = this.binarySearch_(priority);
      this.queue_.splice(i, 0, {
        item: item,
        priority: priority
      });
    };
    _proto.binarySearch_ = function binarySearch_(target) {
      var i = -1;
      var lo = 0;
      var hi = this.length;
      while (lo <= hi) {
        i = Math.floor((lo + hi) / 2);
        if (i === this.length) {
          break;
        }
        if (this.queue_[i].priority < target) {
          lo = i + 1;
        } else if (i > 0 && this.queue_[i - 1].priority >= target) {
          hi = i - 1;
        } else {
          break;
        }
      }
      return i;
    };
    _proto.forEach = function forEach(callback) {
      var index = this.length;
      while (index--) {
        callback(this.queue_[index].item);
      }
    };
    _proto.dequeue = function dequeue() {
      if (!this.length) {
        return null;
      }
      return this.queue_.pop().item;
    };
    _createClass(PriorityQueue2, [{
      key: "length",
      get: function get() {
        return this.queue_.length;
      }
    }]);
    return PriorityQueue2;
  }();

  // src/core/window/interface.js
  var WindowInterface = /* @__PURE__ */ function() {
    function WindowInterface2() {
    }
    WindowInterface2.getTop = function getTop(win) {
      return win.top;
    };
    WindowInterface2.getLocation = function getLocation(win) {
      return win.location;
    };
    WindowInterface2.getDocumentReferrer = function getDocumentReferrer(win) {
      return win.document.referrer;
    };
    WindowInterface2.getHostname = function getHostname(win) {
      return win.location.hostname;
    };
    WindowInterface2.getUserAgent = function getUserAgent(win) {
      return win.navigator.userAgent;
    };
    WindowInterface2.getUserLanguage = function getUserLanguage(win) {
      return win.navigator["userLanguage"] || win.navigator.language;
    };
    WindowInterface2.getDevicePixelRatio = function getDevicePixelRatio() {
      return self.devicePixelRatio || 1;
    };
    WindowInterface2.getSendBeacon = function getSendBeacon(win) {
      if (!win.navigator.sendBeacon) {
        return void 0;
      }
      return win.navigator.sendBeacon.bind(win.navigator);
    };
    WindowInterface2.getXMLHttpRequest = function getXMLHttpRequest(win) {
      return win.XMLHttpRequest;
    };
    WindowInterface2.getImage = function getImage(win) {
      return win.Image;
    };
    return WindowInterface2;
  }();

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
  var SOURCE_ORIGIN_PARAM = "__amp_source_origin";
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
  function appendEncodedParamStringToUrl(url, paramString, opt_addToFront) {
    if (!paramString) {
      return url;
    }
    var mainAndFragment = url.split("#", 2);
    var mainAndQuery = mainAndFragment[0].split("?", 2);
    var newUrl = mainAndQuery[0] + (mainAndQuery[1] ? opt_addToFront ? "?" + paramString + "&" + mainAndQuery[1] : "?" + mainAndQuery[1] + "&" + paramString : "?" + paramString);
    newUrl += mainAndFragment[1] ? "#" + mainAndFragment[1] : "";
    return newUrl;
  }
  function urlEncodeKeyValue(key, value) {
    return encodeURIComponent(key) + "=" + encodeURIComponent(value);
  }
  function addParamsToUrl(url, params) {
    return appendEncodedParamStringToUrl(url, serializeQueryString(params));
  }
  function addMissingParamsToUrl(url, params) {
    var location = parseUrlDeprecated(url);
    var existingParams = parseQueryString(location.search);
    var paramsToAdd = dict({});
    var keys = Object.keys(params);
    for (var i = 0; i < keys.length; i++) {
      if (!hasOwn(existingParams, keys[i])) {
        paramsToAdd[keys[i]] = params[keys[i]];
      }
    }
    return addParamsToUrl(url, paramsToAdd);
  }
  function serializeQueryString(params) {
    var s = [];
    for (var k in params) {
      var v = params[k];
      if (v == null) {
        continue;
      }
      v = arrayOrSingleItemToArray(v);
      for (var i = 0; i < v.length; i++) {
        s.push(urlEncodeKeyValue(k, v[i]));
      }
    }
    return s.join("&");
  }
  function isSecureUrlDeprecated(url) {
    url = urlAsLocation(url);
    return url.protocol == "https:" || url.hostname == "localhost" || url.hostname == "127.0.0.1" || endsWith(url.hostname, ".localhost");
  }
  function assertHttpsUrl(urlString, elementContext, sourceName) {
    if (sourceName === void 0) {
      sourceName = "source";
    }
    userAssert(urlString != null, "%s %s must be available", elementContext, sourceName);
    userAssert(isSecureUrlDeprecated(urlString) || /^\/\//.test(urlString), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', elementContext, sourceName, urlString);
    return urlString;
  }
  function assertAbsoluteHttpOrHttpsUrl(urlString) {
    userAssert(/^https?\:/i.test(urlString), 'URL must start with "http://" or "https://". Invalid value: %s', urlString);
    return parseUrlDeprecated(urlString).href;
  }
  function removeFragment(url) {
    var index = url.indexOf("#");
    if (index == -1) {
      return url;
    }
    return url.substring(0, index);
  }
  function isProxyOrigin(url) {
    return urls.cdnProxyRegex.test(urlAsLocation(url).origin);
  }
  function isLocalhostOrigin(url) {
    return urls.localhostRegex.test(urlAsLocation(url).origin);
  }
  function isAmpScriptUri(uri) {
    return uri.startsWith("amp-script:");
  }
  function getProxyServingType(url) {
    url = urlAsLocation(url);
    if (!isProxyOrigin(url)) {
      return null;
    }
    var path = url.pathname.split("/", 2);
    return path[1];
  }
  function isProtocolValid(url) {
    return !(url && INVALID_PROTOCOLS.includes(urlAsLocation(url).protocol));
  }
  function removeAmpJsParamsFromUrl(url) {
    var _parseUrlDeprecated = parseUrlDeprecated(url), hash = _parseUrlDeprecated.hash, origin = _parseUrlDeprecated.origin, pathname = _parseUrlDeprecated.pathname, search = _parseUrlDeprecated.search;
    var searchRemoved = removeAmpJsParamsFromSearch(search);
    return origin + pathname + searchRemoved + hash;
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
    userAssert(SERVING_TYPE_PREFIX.has(prefix), "Unknown path prefix in url %s", url.href);
    var domainOrHttpsSignal = path[2];
    var origin = domainOrHttpsSignal == "s" ? "https://" + decodeURIComponent(path[3]) : "http://" + decodeURIComponent(domainOrHttpsSignal);
    userAssert(origin.indexOf(".") > 0, "Expected a . in origin %s", origin);
    path.splice(1, domainOrHttpsSignal == "s" ? 3 : 2);
    return origin + path.join("/") + removeAmpJsParamsFromSearch(url.search) + (url.hash || "");
  }
  function getSourceOrigin(url) {
    return parseUrlDeprecated(getSourceUrl(url)).origin;
  }
  function resolveRelativeUrl(relativeUrlString, baseUrl) {
    baseUrl = urlAsLocation(baseUrl);
    if (isEsm() || typeof URL == "function") {
      return new URL(relativeUrlString, baseUrl.href).toString();
    }
    return resolveRelativeUrlFallback_(relativeUrlString, baseUrl);
  }
  function resolveRelativeUrlFallback_(relativeUrlString, baseUrl) {
    baseUrl = urlAsLocation(baseUrl);
    relativeUrlString = relativeUrlString.replace(/\\/g, "/");
    var relativeUrl = parseUrlDeprecated(relativeUrlString);
    if (relativeUrlString.toLowerCase().startsWith(relativeUrl.protocol)) {
      return relativeUrl.href;
    }
    if (relativeUrlString.startsWith("//")) {
      return baseUrl.protocol + relativeUrlString;
    }
    if (relativeUrlString.startsWith("/")) {
      return baseUrl.origin + relativeUrlString;
    }
    return baseUrl.origin + baseUrl.pathname.replace(/\/[^/]*$/, "/") + relativeUrlString;
  }
  function checkCorsUrl(url) {
    var parsedUrl = parseUrlDeprecated(url);
    var query2 = parseQueryString(parsedUrl.search);
    userAssert(!(SOURCE_ORIGIN_PARAM in query2), "Source origin is not allowed in %s", url);
  }

  // src/impression.js
  var trackImpressionPromise = null;
  var DEFAULT_APPEND_URL_PARAM = ["gclid", "gclsrc"];
  function getTrackImpressionPromise() {
    return userAssert(trackImpressionPromise, "E#19457 trackImpressionPromise");
  }
  function shouldAppendExtraParams(ampdoc2) {
    return ampdoc2.whenReady().then(function() {
      return !!ampdoc2.getBody().querySelector("amp-analytics[type=googleanalytics]");
    });
  }
  function getExtraParamsUrl(win, target) {
    var url = parseUrlDeprecated(WindowInterface.getLocation(win).href);
    var params = parseQueryString(url.search);
    var appendParams = [];
    for (var i = 0; i < DEFAULT_APPEND_URL_PARAM.length; i++) {
      var param = DEFAULT_APPEND_URL_PARAM[i];
      if (typeof params[param] !== "undefined") {
        appendParams.push(param);
      }
    }
    var additionalUrlParams = target.getAttribute("data-amp-addparams");
    var href = target.href;
    if (additionalUrlParams) {
      href = addParamsToUrl(href, parseQueryString(additionalUrlParams));
    }
    var loc = parseUrlDeprecated(href);
    var existParams = parseQueryString(loc.search);
    for (var _i = appendParams.length - 1; _i >= 0; _i--) {
      var _param = appendParams[_i];
      if (typeof existParams[_param] !== "undefined") {
        appendParams.splice(_i, 1);
      }
    }
    return getQueryParamUrl(appendParams);
  }
  function getQueryParamUrl(params) {
    var url = "";
    for (var i = 0; i < params.length; i++) {
      var param = params[i];
      url += i == 0 ? param + "=QUERY_PARAM(" + param + ")" : "&" + param + "=QUERY_PARAM(" + param + ")";
    }
    return url;
  }

  // src/open-window-dialog.js
  function openWindowDialog(win, url, target, opt_features) {
    var res;
    try {
      res = win.open(url, target, opt_features);
    } catch (e) {
      dev().error("DOM", "Failed to open url on target: ", target, e);
    }
    if (!res && target != "_top" && !includes(opt_features || "", "noopener")) {
      res = win.open(url, "_top");
    }
    return res;
  }

  // src/service/navigation.js
  var TAG2 = "navigation";
  var EVENT_TYPE_CLICK = "click";
  var EVENT_TYPE_CONTEXT_MENU = "contextmenu";
  var VALID_TARGETS = ["_top", "_blank"];
  var ORIG_HREF_ATTRIBUTE = "data-a4a-orig-href";
  var AMP_CUSTOM_LINKER_TARGET = "__AMP_CUSTOM_LINKER_TARGET__";
  function installGlobalNavigationHandlerForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, TAG2, Navigation, true);
  }
  var Navigation = /* @__PURE__ */ function() {
    function Navigation2(ampdoc2) {
      var _this = this;
      this.ampdoc = ampdoc2;
      this.rootNode_ = ampdoc2.getRootNode();
      this.viewport_ = Services.viewportForDoc(this.ampdoc);
      this.viewer_ = Services.viewerForDoc(this.ampdoc);
      this.history_ = Services.historyForDoc(this.ampdoc);
      this.platform_ = Services.platformFor(this.ampdoc.win);
      this.isIosSafari_ = this.platform_.isIos() && this.platform_.isSafari();
      this.isIframed_ = isIframed(this.ampdoc.win) && this.viewer_.isOvertakeHistory();
      this.isEmbed_ = this.rootNode_ != this.ampdoc.getRootNode() || !!this.ampdoc.getParent();
      this.isInABox_ = getMode(this.ampdoc.win).runtime == "inabox";
      this.serviceContext_ = this.rootNode_.nodeType == Node.DOCUMENT_NODE ? this.rootNode_.documentElement : this.rootNode_;
      this.boundHandle_ = this.handle_.bind(this);
      this.rootNode_.addEventListener(EVENT_TYPE_CLICK, this.boundHandle_);
      this.rootNode_.addEventListener(EVENT_TYPE_CONTEXT_MENU, this.boundHandle_);
      this.appendExtraParams_ = false;
      shouldAppendExtraParams(this.ampdoc).then(function(res) {
        _this.appendExtraParams_ = res;
      });
      this.isTrustedViewer_ = false;
      this.isLocalViewer_ = false;
      Promise.all([this.viewer_.isTrustedViewer(), this.viewer_.getViewerOrigin()]).then(function(values) {
        _this.isTrustedViewer_ = values[0];
        _this.isLocalViewer_ = isLocalhostOrigin(values[1]);
      });
      this.a2aFeatures_ = null;
      this.anchorMutators_ = new PriorityQueue();
      this.navigateToMutators_ = new PriorityQueue();
    }
    Navigation2.installAnchorClickInterceptor = function installAnchorClickInterceptor(ampdoc2, win) {
      win.document.documentElement.addEventListener("click", maybeExpandUrlParams.bind(null, ampdoc2), true);
    };
    var _proto = Navigation2.prototype;
    _proto.cleanup = function cleanup() {
      if (this.boundHandle_) {
        this.rootNode_.removeEventListener(EVENT_TYPE_CLICK, this.boundHandle_);
        this.rootNode_.removeEventListener(EVENT_TYPE_CONTEXT_MENU, this.boundHandle_);
      }
    };
    _proto.openWindow = function openWindow(win, url, target, opener) {
      var options = "";
      if ((this.platform_.isIos() || !this.platform_.isChrome()) && !opener) {
        options += "noopener";
      }
      var newWin = openWindowDialog(win, url, target, options);
      if (newWin && !opener) {
        newWin.opener = null;
      }
    };
    _proto.navigateTo = function navigateTo(win, url, opt_requestedBy, options) {
      if (options === void 0) {
        options = {};
      }
      var _options = options, _options$opener = _options.opener, opener = _options$opener === void 0 ? false : _options$opener, _options$target = _options.target, target = _options$target === void 0 ? "_top" : _options$target;
      url = this.applyNavigateToMutators_(url);
      var urlService = Services.urlForDoc(this.serviceContext_);
      if (!urlService.isProtocolValid(url)) {
        user().error(TAG2, "Cannot navigate to invalid protocol: " + url);
        return;
      }
      userAssert(VALID_TARGETS.includes(target), "Target '" + target + "' not supported.");
      var sourceUrl = urlService.getSourceUrl(win.location);
      url = urlService.resolveRelativeUrl(url, sourceUrl);
      if (target == "_blank") {
        this.openWindow(win, url, target, opener);
        return;
      }
      if (opt_requestedBy) {
        if (!this.a2aFeatures_) {
          this.a2aFeatures_ = this.queryA2AFeatures_();
        }
        if (this.a2aFeatures_.includes(opt_requestedBy)) {
          if (this.navigateToAmpUrl(url, opt_requestedBy)) {
            return;
          }
        }
      }
      win.top.location.href = url;
    };
    _proto.navigateToAmpUrl = function navigateToAmpUrl(url, requestedBy) {
      if (this.viewer_.hasCapability("a2a")) {
        this.viewer_.sendMessage("a2aNavigate", dict({
          "url": url,
          "requestedBy": requestedBy
        }));
        return true;
      }
      return false;
    };
    _proto.queryA2AFeatures_ = function queryA2AFeatures_() {
      var meta = this.rootNode_.querySelector('meta[name="amp-to-amp-navigation"]');
      if (meta && meta.hasAttribute("content")) {
        return meta.getAttribute("content").split(",").map(function(s) {
          return s.trim();
        });
      }
      return [];
    };
    _proto.handle_ = function handle_(e) {
      if (e.defaultPrevented) {
        return;
      }
      var element = dev().assertElement(e[AMP_CUSTOM_LINKER_TARGET] || e.target);
      var target = closestAncestorElementBySelector(element, "A");
      if (!target || !target.href) {
        return;
      }
      if (e.type == EVENT_TYPE_CLICK) {
        this.handleClick_(target, e);
      } else if (e.type == EVENT_TYPE_CONTEXT_MENU) {
        this.handleContextMenuClick_(target, e);
      }
    };
    _proto.handleClick_ = function handleClick_(element, e) {
      this.expandVarsForAnchor_(element);
      var toLocation = this.parseUrl_(element.href);
      if (this.handleA2AClick_(e, element, toLocation)) {
        return;
      }
      if (this.handleCustomProtocolClick_(e, element, toLocation)) {
        return;
      }
      var fromLocation = this.getLocation_();
      if (getHrefMinusHash(toLocation) != getHrefMinusHash(fromLocation)) {
        this.applyAnchorMutators_(element, e);
        toLocation = this.parseUrl_(element.href);
      }
      this.handleNavigation_(e, element, toLocation, fromLocation);
    };
    _proto.handleContextMenuClick_ = function handleContextMenuClick_(element, e) {
      this.expandVarsForAnchor_(element);
      this.applyAnchorMutators_(element, e);
    };
    _proto.applyAnchorMutators_ = function applyAnchorMutators_(element, e) {
      this.anchorMutators_.forEach(function(anchorMutator) {
        anchorMutator(element, e);
      });
    };
    _proto.applyNavigateToMutators_ = function applyNavigateToMutators_(url) {
      this.navigateToMutators_.forEach(function(mutator) {
        url = mutator(url);
      });
      return url;
    };
    _proto.expandVarsForAnchor_ = function expandVarsForAnchor_(el) {
      var defaultExpandParamsUrl = null;
      if (this.appendExtraParams_ && !this.isEmbed_) {
        defaultExpandParamsUrl = getExtraParamsUrl(this.ampdoc.win, el);
      }
      var urlReplacements = Services.urlReplacementsForDoc(el);
      urlReplacements.maybeExpandLink(el, defaultExpandParamsUrl);
    };
    _proto.handleCustomProtocolClick_ = function handleCustomProtocolClick_(e, element, location) {
      if (!this.isIframed_) {
        return false;
      }
      var win = getWin(element);
      var url = element.href;
      var protocol = location.protocol;
      var isFTP = protocol == "ftp:";
      if (isFTP) {
        openWindowDialog(win, url, "_blank");
        e.preventDefault();
        return true;
      }
      var isNormalProtocol = /^(https?|mailto):$/.test(protocol);
      if (this.isIosSafari_ && !isNormalProtocol) {
        openWindowDialog(win, url, "_top");
        e.preventDefault();
        return true;
      }
      return false;
    };
    _proto.handleA2AClick_ = function handleA2AClick_(e, element, location) {
      if (!element.hasAttribute("rel")) {
        return false;
      }
      var relations = element.getAttribute("rel").split(" ").map(function(s) {
        return s.trim();
      });
      if (!relations.includes("amphtml")) {
        return false;
      }
      if (this.navigateToAmpUrl(location.href, "<a rel=amphtml>")) {
        e.preventDefault();
        return true;
      }
      return false;
    };
    _proto.handleNavigation_ = function handleNavigation_(e, element, toLocation, fromLocation) {
      var to = getHrefMinusHash(toLocation);
      var from = getHrefMinusHash(fromLocation);
      if (toLocation.hash && to == from) {
        this.handleHashNavigation_(e, toLocation, fromLocation);
      } else {
        var target = (element.getAttribute("target") || "").toLowerCase();
        if (this.isEmbed_ || this.isInABox_) {
          if (target != "_top" && target != "_blank") {
            target = "_blank";
            element.setAttribute("target", target);
          }
        }
        var win = this.ampdoc.win;
        var platform = Services.platformFor(win);
        var viewer = Services.viewerForDoc(element);
        if (fromLocation.search && platform.isSafari() && platform.getMajorVersion() >= 13 && viewer.isProxyOrigin() && viewer.isEmbedded()) {
          this.removeViewerQueryBeforeNavigation_(win, fromLocation, target);
        }
        if (this.viewerInterceptsNavigation(to, "intercept_click")) {
          e.preventDefault();
        }
      }
    };
    _proto.removeViewerQueryBeforeNavigation_ = function removeViewerQueryBeforeNavigation_(win, fromLocation, target) {
      dev().info(TAG2, "Removing iframe query string before navigation:", fromLocation.search);
      var original = fromLocation.href;
      var noQuery = "" + fromLocation.origin + fromLocation.pathname + fromLocation.hash;
      win.history.replaceState(null, "", noQuery);
      var restoreQuery = function restoreQuery2() {
        var currentHref = win.location.href;
        if (currentHref == noQuery) {
          dev().info(TAG2, "Restored iframe URL with query string:", original);
          win.history.replaceState(null, "", original);
        } else {
          dev().error(TAG2, "Unexpected iframe URL change:", currentHref, noQuery);
        }
      };
      if (target === "_blank") {
        win.setTimeout(restoreQuery, 0);
      } else {
        win.addEventListener("pageshow", function onPageShow(e) {
          if (e.persisted) {
            restoreQuery();
            win.removeEventListener("pageshow", onPageShow);
          }
        });
      }
    };
    _proto.handleHashNavigation_ = function handleHashNavigation_(e, toLocation, fromLocation) {
      var _this2 = this;
      e.preventDefault();
      if (this.isEmbed_) {
        return;
      }
      var hash = toLocation.hash.slice(1);
      var el = null;
      if (hash) {
        var escapedHash = escapeCssSelectorIdent(hash);
        el = this.rootNode_.getElementById(hash) || this.rootNode_.querySelector('a[name="' + escapedHash + '"]');
      }
      if (toLocation.hash != fromLocation.hash) {
        this.history_.replaceStateForTarget(toLocation.hash).then(function() {
          _this2.scrollToElement_(el, hash);
        });
      } else {
        this.scrollToElement_(el, hash);
      }
    };
    _proto.registerAnchorMutator = function registerAnchorMutator(callback, priority) {
      this.anchorMutators_.enqueue(callback, priority);
    };
    _proto.registerNavigateToMutator = function registerNavigateToMutator(callback, priority) {
      this.navigateToMutators_.enqueue(callback, priority);
    };
    _proto.scrollToElement_ = function scrollToElement_(elem, hash) {
      var _this3 = this;
      if (elem) {
        this.viewport_.scrollIntoView(elem);
        Services.timerFor(this.ampdoc.win).delay(function() {
          return _this3.viewport_.scrollIntoView(dev().assertElement(elem));
        }, 1);
      } else {
        dev().warn(TAG2, "failed to find element with id=" + hash + " or a[name=" + hash + "]");
      }
    };
    _proto.parseUrl_ = function parseUrl_(url) {
      return Services.urlForDoc(this.serviceContext_).parse(url);
    };
    _proto.getLocation_ = function getLocation_() {
      var baseHref = getMode().test && !this.isEmbed_ ? this.ampdoc.win.location.href : "";
      return this.parseUrl_(baseHref);
    };
    _proto.viewerInterceptsNavigation = function viewerInterceptsNavigation(url, requestedBy) {
      var viewerHasCapability = this.viewer_.hasCapability("interceptNavigation");
      var docOptedIn = this.ampdoc.isSingleDoc() && this.ampdoc.getRootNode().documentElement.hasAttribute("allow-navigation-interception");
      if (!viewerHasCapability || !docOptedIn || !(this.isTrustedViewer_ || this.isLocalViewer_)) {
        return false;
      }
      this.viewer_.sendMessage("navigateTo", dict({
        "url": url,
        "requestedBy": requestedBy
      }));
      return true;
    };
    return Navigation2;
  }();
  function maybeExpandUrlParams(ampdoc2, e) {
    var target = closestAncestorElementBySelector(dev().assertElement(e.target), "A");
    if (!target || !target.href) {
      return;
    }
    var hrefToExpand = target.getAttribute(ORIG_HREF_ATTRIBUTE) || target.getAttribute("href");
    if (!hrefToExpand) {
      return;
    }
    var vars = {
      "CLICK_X": function CLICK_X() {
        return e.pageX;
      },
      "CLICK_Y": function CLICK_Y() {
        return e.pageY;
      }
    };
    var newHref = Services.urlReplacementsForDoc(target).expandUrlSync(hrefToExpand, vars, {
      "CLICK_X": true,
      "CLICK_Y": true
    });
    if (newHref != hrefToExpand) {
      if (!target.getAttribute(ORIG_HREF_ATTRIBUTE)) {
        target.setAttribute(ORIG_HREF_ATTRIBUTE, hrefToExpand);
      }
      target.setAttribute("href", newHref);
    }
  }
  function getHrefMinusHash(location) {
    return "" + location.origin + location.pathname + location.search;
  }

  // extensions/amp-ad-network-adsense-impl/0.1/adsense-shared-state.js
  var AdsenseSharedState = /* @__PURE__ */ function() {
    function AdsenseSharedState2() {
      this.previousSlots_ = [];
    }
    var _proto = AdsenseSharedState2.prototype;
    _proto.addNewSlot = function addNewSlot(format, id, client, slotname) {
      var result = {
        pv: 2,
        prevFmts: "",
        prevSlotnames: ""
      };
      this.previousSlots_.forEach(function(slot) {
        devAssert2(slot.id != id);
        result.prevFmts += (result.prevFmts ? "," : "") + slot.format;
        if (slot.slotname) {
          result.prevSlotnames += (result.prevSlotnames ? "," : "") + slot.slotname;
        }
        if (slot.client == client) {
          result.pv = 1;
        }
      });
      this.previousSlots_.push({
        id: id,
        format: format,
        client: client,
        slotname: slotname
      });
      return result;
    };
    _proto.removeSlot = function removeSlot(id) {
      this.previousSlots_ = this.previousSlots_.filter(function(slot) {
        return slot.id != id;
      });
    };
    _proto.reset = function reset() {
      this.previousSlots_ = [];
    };
    return AdsenseSharedState2;
  }();

  // ads/google/a4a/shared/content-recommendation.js
  var _LAYOUT_ASPECT_RATIO_;
  var _LAYOUT_TEXT_HEIGHT_M;
  var _LAYOUT_AD_WIDTH_MAP;
  var LayoutType = {
    IMAGE_STACKED: "image_stacked",
    IMAGE_SIDEBYSIDE: "image_sidebyside",
    MOBILE_BANNER_IMAGE_SIDEBYSIDE: "mobile_banner_image_sidebyside",
    PUB_CONTROL_IMAGE_STACKED: "pub_control_image_stacked",
    PUB_CONTROL_IMAGE_SIDEBYSIDE: "pub_control_image_sidebyside",
    PUB_CONTROL_IMAGE_CARD_STACKED: "pub_control_image_card_stacked",
    PUB_CONTROL_IMAGE_CARD_SIDEBYSIDE: "pub_control_image_card_sidebyside",
    PUB_CONTROL_TEXT: "pub_control_text",
    PUB_CONTROL_TEXT_CARD: "pub_control_text_card",
    PEDESTAL: "pedestal"
  };
  var ExternalCorePubVars = {
    UI_TYPE: "data-matched-content-ui-type",
    COLUMNS_NUM: "data-matched-content-columns-num",
    ROWS_NUM: "data-matched-content-rows-num"
  };
  var MIN_PUB_CONTROL_WIDTH_OF_DESKTOP = 468;
  var PADDING = 8;
  var MAX_PUB_CONTROL_DIMENSION = 1500;
  var LAYOUT_ASPECT_RATIO_MAP = (_LAYOUT_ASPECT_RATIO_ = {}, _LAYOUT_ASPECT_RATIO_[LayoutType.IMAGE_STACKED] = 1 / 1.91, _LAYOUT_ASPECT_RATIO_[LayoutType.IMAGE_SIDEBYSIDE] = 1 / 3.82, _LAYOUT_ASPECT_RATIO_[LayoutType.MOBILE_BANNER_IMAGE_SIDEBYSIDE] = 1 / 3.82, _LAYOUT_ASPECT_RATIO_[LayoutType.PUB_CONTROL_IMAGE_STACKED] = 1 / 1.91, _LAYOUT_ASPECT_RATIO_[LayoutType.PUB_CONTROL_IMAGE_SIDEBYSIDE] = 1 / 3.82, _LAYOUT_ASPECT_RATIO_[LayoutType.PUB_CONTROL_IMAGE_CARD_STACKED] = 1 / 1.91, _LAYOUT_ASPECT_RATIO_[LayoutType.PUB_CONTROL_IMAGE_CARD_SIDEBYSIDE] = 1 / 3.74, _LAYOUT_ASPECT_RATIO_[LayoutType.PUB_CONTROL_TEXT] = 0, _LAYOUT_ASPECT_RATIO_[LayoutType.PUB_CONTROL_TEXT_CARD] = 0, _LAYOUT_ASPECT_RATIO_);
  var LAYOUT_TEXT_HEIGHT_MAP = (_LAYOUT_TEXT_HEIGHT_M = {}, _LAYOUT_TEXT_HEIGHT_M[LayoutType.IMAGE_STACKED] = 80, _LAYOUT_TEXT_HEIGHT_M[LayoutType.IMAGE_SIDEBYSIDE] = 0, _LAYOUT_TEXT_HEIGHT_M[LayoutType.MOBILE_BANNER_IMAGE_SIDEBYSIDE] = 0, _LAYOUT_TEXT_HEIGHT_M[LayoutType.PUB_CONTROL_IMAGE_STACKED] = 80, _LAYOUT_TEXT_HEIGHT_M[LayoutType.PUB_CONTROL_IMAGE_SIDEBYSIDE] = 0, _LAYOUT_TEXT_HEIGHT_M[LayoutType.PUB_CONTROL_IMAGE_CARD_STACKED] = 85, _LAYOUT_TEXT_HEIGHT_M[LayoutType.PUB_CONTROL_IMAGE_CARD_SIDEBYSIDE] = 0, _LAYOUT_TEXT_HEIGHT_M[LayoutType.PUB_CONTROL_TEXT] = 80, _LAYOUT_TEXT_HEIGHT_M[LayoutType.PUB_CONTROL_TEXT_CARD] = 80, _LAYOUT_TEXT_HEIGHT_M);
  var LAYOUT_AD_WIDTH_MAP = (_LAYOUT_AD_WIDTH_MAP = {}, _LAYOUT_AD_WIDTH_MAP[LayoutType.PUB_CONTROL_IMAGE_STACKED] = 100, _LAYOUT_AD_WIDTH_MAP[LayoutType.PUB_CONTROL_IMAGE_SIDEBYSIDE] = 200, _LAYOUT_AD_WIDTH_MAP[LayoutType.PUB_CONTROL_IMAGE_CARD_STACKED] = 150, _LAYOUT_AD_WIDTH_MAP[LayoutType.PUB_CONTROL_IMAGE_CARD_SIDEBYSIDE] = 250, _LAYOUT_AD_WIDTH_MAP[LayoutType.PUB_CONTROL_TEXT] = 100, _LAYOUT_AD_WIDTH_MAP[LayoutType.PUB_CONTROL_TEXT_CARD] = 150, _LAYOUT_AD_WIDTH_MAP);
  var PUB_CONTROL_LAYOUT_PREFIX = "pub_control_";
  var PUB_CONTROL_EXAMPLE = '\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"';
  function getAutoConfig(availableWidth, isMobile) {
    if (availableWidth < MIN_PUB_CONTROL_WIDTH_OF_DESKTOP) {
      if (isMobile) {
        var layoutType = LayoutType.MOBILE_BANNER_IMAGE_SIDEBYSIDE;
        var numColumns = 1;
        var numRows = 12;
        var slotSize = getLargerAdOneColumnSidebysideSize(availableWidth, layoutType, numColumns, numRows);
        return {
          slotWidth: slotSize.width,
          slotHeight: slotSize.height,
          numberOfColumns: numColumns,
          numberOfRows: numRows,
          layoutType: layoutType
        };
      } else {
        var _slotSize = getAutoSlotSize(availableWidth);
        return {
          slotWidth: _slotSize.width,
          slotHeight: _slotSize.height,
          numberOfColumns: 1,
          numberOfRows: 13,
          layoutType: LayoutType.IMAGE_SIDEBYSIDE
        };
      }
    } else {
      var _slotSize2 = getAutoSlotSize(availableWidth);
      return {
        slotWidth: _slotSize2.width,
        slotHeight: _slotSize2.height,
        numberOfColumns: 4,
        numberOfRows: 2,
        layoutType: LayoutType.IMAGE_STACKED
      };
    }
  }
  function getPubControlConfig(availableWidth, rawPubControlParams) {
    var pubParams = validateAndParsePubControlParams(rawPubControlParams);
    if (pubParams.validationError) {
      return {
        slotWidth: 0,
        slotHeight: 0,
        numberOfColumns: 0,
        numberOfRows: 0,
        layoutType: LayoutType.IMAGE_STACKED,
        validationError: pubParams.validationError
      };
    }
    var index;
    if (pubParams.layoutTypes.length === 2 && availableWidth >= MIN_PUB_CONTROL_WIDTH_OF_DESKTOP) {
      index = 1;
    } else {
      index = 0;
    }
    var layout = convertToPubControlLayoutType(pubParams.layoutTypes[index]);
    var numColumns = getOptimizedNumColumns(availableWidth, pubParams.numberOfColumns[index], layout);
    var numRows = pubParams.numberOfRows[index];
    var slotSize = getPubControlSlotSize(availableWidth, numColumns, numRows, layout);
    if (slotSize.sizeError) {
      return {
        slotWidth: 0,
        slotHeight: 0,
        numberOfColumns: 0,
        numberOfRows: 0,
        layoutType: layout,
        validationError: slotSize.sizeError
      };
    }
    return {
      slotWidth: slotSize.width,
      slotHeight: slotSize.height,
      numberOfColumns: numColumns,
      numberOfRows: numRows,
      layoutType: layout
    };
  }
  function validateAndParsePubControlParams(params) {
    var numberOfPubControlParams = 0;
    if (params.layoutType) {
      numberOfPubControlParams++;
    }
    if (params.numberOfColumns) {
      numberOfPubControlParams++;
    }
    if (params.numberOfRows) {
      numberOfPubControlParams++;
    }
    if (numberOfPubControlParams < 3) {
      return {
        validationError: "Tags " + ExternalCorePubVars.UI_TYPE + ", " + ExternalCorePubVars.COLUMNS_NUM + " and " + ExternalCorePubVars.ROWS_NUM + " should be set together."
      };
    }
    var layoutTypes = params.layoutType.split(",");
    var numberOfRows = params.numberOfRows.split(",");
    var numberOfColumns = params.numberOfColumns.split(",");
    if (layoutTypes.length !== numberOfRows.length || layoutTypes.length !== numberOfColumns.length) {
      return {
        validationError: "Lengths of parameters " + ExternalCorePubVars.UI_TYPE + ", " + ExternalCorePubVars.COLUMNS_NUM + " and " + ExternalCorePubVars.ROWS_NUM + " must match. Example: " + PUB_CONTROL_EXAMPLE
      };
    }
    if (layoutTypes.length > 2) {
      return {
        validationError: "The parameter length of attribute " + ExternalCorePubVars.UI_TYPE + ", " + ExternalCorePubVars.COLUMNS_NUM + " and " + ExternalCorePubVars.ROWS_NUM + " is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + ("you are providing " + layoutTypes.length + " parameters. Example: " + PUB_CONTROL_EXAMPLE + ".")
      };
    }
    var numberOfRowsAsNumbers = [];
    var numberOfColumnsAsNumbers = [];
    for (var i = 0; i < layoutTypes.length; i++) {
      var row = Number(numberOfRows[i]);
      if (isNaN(row) || row === 0) {
        return {
          validationError: "Wrong value '" + numberOfRows[i] + "' for " + ExternalCorePubVars.ROWS_NUM + "."
        };
      }
      numberOfRowsAsNumbers.push(row);
      var col = Number(numberOfColumns[i]);
      if (isNaN(col) || col === 0) {
        return {
          validationError: "Wrong value '" + numberOfColumns[i] + "' for " + ExternalCorePubVars.COLUMNS_NUM + "."
        };
      }
      numberOfColumnsAsNumbers.push(col);
    }
    return {
      numberOfRows: numberOfRowsAsNumbers,
      numberOfColumns: numberOfColumnsAsNumbers,
      layoutTypes: layoutTypes
    };
  }
  function getAutoSlotSize(availableWidth) {
    if (availableWidth >= 1200) {
      return {
        width: 1200,
        height: 600
      };
    } else if (availableWidth >= 850) {
      return {
        width: availableWidth,
        height: Math.floor(availableWidth * 0.5)
      };
    } else if (availableWidth >= 550) {
      return {
        width: availableWidth,
        height: Math.floor(availableWidth * 0.6)
      };
    } else if (availableWidth >= 468) {
      return {
        width: availableWidth,
        height: Math.floor(availableWidth * 0.7)
      };
    } else {
      return {
        width: availableWidth,
        height: Math.floor(availableWidth * 3.44)
      };
    }
  }
  function getAdHeight(adWidth, layout) {
    return adWidth * LAYOUT_ASPECT_RATIO_MAP[layout] + LAYOUT_TEXT_HEIGHT_MAP[layout];
  }
  function getAdWidth(slotWidth, numColumns) {
    return (slotWidth - PADDING * numColumns - PADDING) / numColumns;
  }
  function getSlotHeight(adHeight, numRows) {
    return Math.floor(adHeight * numRows + PADDING * numRows + PADDING);
  }
  function getPubControlSlotSize(slotWidth, numColumns, numRows, layout) {
    var adWidth = getAdWidth(slotWidth, numColumns);
    var adHeight = getAdHeight(adWidth, layout);
    var slotHeight = getSlotHeight(adHeight, numRows);
    if (slotWidth > MAX_PUB_CONTROL_DIMENSION) {
      return {
        width: 0,
        height: 0,
        sizeError: "Calculated slot width is too large: " + slotWidth
      };
    }
    if (slotHeight > MAX_PUB_CONTROL_DIMENSION) {
      return {
        width: 0,
        height: 0,
        sizeError: "Calculated slot height is too large: " + slotHeight
      };
    }
    return {
      width: slotWidth,
      height: slotHeight
    };
  }
  function getLargerAdOneColumnSidebysideSize(availableWidth, layoutType, numColumns, numRows) {
    var adWidth = getAdWidth(availableWidth, numColumns);
    var firstAdHeight = Math.floor(adWidth / 1.91 + 70);
    var restAdHeight = getAdHeight(adWidth, layoutType);
    var slotHeight = firstAdHeight + getSlotHeight(restAdHeight, numRows - 1);
    return {
      width: availableWidth,
      height: slotHeight
    };
  }
  function convertToPubControlLayoutType(layout) {
    return layout.indexOf(PUB_CONTROL_LAYOUT_PREFIX) === 0 ? layout : PUB_CONTROL_LAYOUT_PREFIX + layout;
  }
  function getOptimizedNumColumns(availableWidth, numColumns, layout) {
    var minWidth = LAYOUT_AD_WIDTH_MAP[layout];
    var optimizedNumColumns = numColumns;
    while (availableWidth / optimizedNumColumns < minWidth && optimizedNumColumns > 1) {
      optimizedNumColumns--;
    }
    return optimizedNumColumns;
  }

  // ads/google/utils.js
  var ADSENSE_RSPV_ALLOWED_HEIGHT = 320;
  var ADSENSE_RSPV_TAG = "rspv";
  var ADSENSE_MCRSPV_TAG = "mcrspv";
  function getMatchedContentResponsiveHeightAndUpdatePubParams(availableWidth, element) {
    var pubControlParams = {
      numberOfRows: element.getAttribute(ExternalCorePubVars.ROWS_NUM),
      numberOfColumns: element.getAttribute(ExternalCorePubVars.COLUMNS_NUM),
      layoutType: element.getAttribute(ExternalCorePubVars.UI_TYPE)
    };
    var config;
    if (pubControlParams.numberOfRows || pubControlParams.numberOfColumns || pubControlParams.layoutType) {
      config = getPubControlConfig(availableWidth, pubControlParams);
    } else {
      config = getAutoConfig(availableWidth, availableWidth <= MIN_PUB_CONTROL_WIDTH_OF_DESKTOP);
    }
    if (config.validationError) {
      user().error("AMP-AD", config.validationError);
      return 0;
    }
    element.setAttribute(ExternalCorePubVars.ROWS_NUM, config.numberOfRows);
    element.setAttribute(ExternalCorePubVars.COLUMNS_NUM, config.numberOfColumns);
    element.setAttribute(ExternalCorePubVars.UI_TYPE, config.layoutType);
    return config.slotHeight;
  }

  // src/core/math.js
  function clamp(val, min, max) {
    devAssert(min <= max, "Minimum value is greater than the maximum.");
    return Math.min(Math.max(val, min), max);
  }

  // extensions/amp-ad-network-adsense-impl/0.1/responsive-state.js
  var _RAFMT_PARAMS;
  var TAG3 = "amp-ad-network-adsense-impl";
  var RAFMT_PARAMS = (_RAFMT_PARAMS = {}, _RAFMT_PARAMS[ADSENSE_RSPV_TAG] = 13, _RAFMT_PARAMS[ADSENSE_MCRSPV_TAG] = 15, _RAFMT_PARAMS);
  var MAX_HEIGHT_EXP = {
    branch: "fix-inconsistent-responsive-height-selection",
    control: "368226520",
    experiment: "368226521"
  };
  var ResponsiveState = /* @__PURE__ */ function() {
    function ResponsiveState2(element, isContainerWidth) {
      this.element_ = element;
      this.isAlignedToViewport_ = false;
      this.isContainerWidth_ = !!isContainerWidth;
      this.win_ = getWin(element);
    }
    ResponsiveState2.createIfResponsive = function createIfResponsive(element) {
      var autoFormat = element.getAttribute("data-auto-format");
      if (!hasOwn(RAFMT_PARAMS, autoFormat)) {
        return null;
      }
      return new ResponsiveState2(element);
    };
    ResponsiveState2.createContainerWidthState = function createContainerWidthState(element) {
      return new ResponsiveState2(element, true);
    };
    ResponsiveState2.maybeUpgradeToResponsive = function maybeUpgradeToResponsive(element, adClientId) {
      if (element.hasAttribute("data-auto-format")) {
        return Promise.resolve(null);
      }
      if (!ResponsiveState2.isLayoutViewportNarrow(element)) {
        return Promise.resolve(null);
      }
      return Services.storageForDoc(element).then(function(storage) {
        return storage.get(ResponsiveState2.getAdSizeOptimizationStorageKey_(adClientId));
      }).then(function(isAdSizeOptimizationEnabled) {
        if (isAdSizeOptimizationEnabled) {
          return ResponsiveState2.upgradeToResponsive_(element);
        }
        return null;
      }).catch(function() {
        dev().warn(TAG3, "Failed to look up publisher ad size settings.");
        return null;
      });
    };
    ResponsiveState2.upgradeToResponsive_ = function upgradeToResponsive_(element) {
      element.setAttribute("height", ADSENSE_RSPV_ALLOWED_HEIGHT);
      element.setAttribute("width", "100vw");
      element.setAttribute("data-full-width", "");
      element.setAttribute("data-auto-format", "rspv");
      var state = ResponsiveState2.createIfResponsive(element);
      devAssert2(state != null, "Upgrade failed");
      return state;
    };
    ResponsiveState2.convertToContainerWidth = function convertToContainerWidth(element) {
      var vsync = Services.vsyncFor(getWin(element));
      return vsync.runPromise({
        measure: function measure(state) {
          state.clientWidth = String(element.parentElement.clientWidth);
        },
        mutate: function mutate(state) {
          element.setAttribute("height", ADSENSE_RSPV_ALLOWED_HEIGHT);
          element.setAttribute("width", state.clientWidth);
          element.removeAttribute("data-full-width");
          element.removeAttribute("data-auto-format");
        }
      }, {
        clientWidth: ""
      }).then(function() {
        var state = ResponsiveState2.createContainerWidthState(element);
        devAssert2(state != null, "Convert to container width state failed");
        return state;
      });
    };
    ResponsiveState2.maybeAttachSettingsListener = function maybeAttachSettingsListener(element, iframe, adClientId) {
      var promiseResolver;
      var savePromise = new Promise(function(resolve) {
        promiseResolver = resolve;
      });
      var win = getWin(element);
      var listener = function listener2(event) {
        var data = getData(event);
        var dataList = null;
        if (typeof data == "string") {
          dataList = tryParseJson(data);
        } else if (typeof data == "object") {
          dataList = data;
        }
        if (dataList == null) {
          return;
        }
        if (!!dataList && dataList["googMsgType"] != "adsense-settings") {
          return;
        }
        if (dataList["adClient"] != adClientId) {
          return;
        }
        var autoAdSizeStatus = dataList["enableAutoAdSize"] == "1";
        win.removeEventListener("message", listener2);
        Services.storageForDoc(element).then(function(storage) {
          return storage.set(ResponsiveState2.getAdSizeOptimizationStorageKey_(adClientId), autoAdSizeStatus).then(function() {
            dev().info(TAG3, "Saved publisher auto ad size setting: " + autoAdSizeStatus);
            promiseResolver();
          });
        }).catch(function() {
          dev().warn(TAG3, "Failed to persist publisher auto ad size setting.");
        });
      };
      win.addEventListener("message", listener);
      return savePromise;
    };
    ResponsiveState2.getAdSizeOptimizationStorageKey_ = function getAdSizeOptimizationStorageKey_(adClientId) {
      return "aas-" + adClientId;
    };
    var _proto = ResponsiveState2.prototype;
    _proto.isValidElement = function isValidElement() {
      if (this.isContainerWidth_) {
        return true;
      }
      if (!this.element_.hasAttribute("data-full-width")) {
        user().warn(TAG3, "Responsive AdSense ad units require the attribute data-full-width.");
        return false;
      }
      var height = this.element_.getAttribute("height");
      var width = this.element_.getAttribute("width");
      if (height != 0 && height != ADSENSE_RSPV_ALLOWED_HEIGHT) {
        user().warn(TAG3, "Specified height " + height + " in <amp-ad> tag is not equal to the " + ("required height of " + ADSENSE_RSPV_ALLOWED_HEIGHT + " for ") + "responsive AdSense ad units.");
        return false;
      }
      if (width != "100vw") {
        user().warn(TAG3, "Invalid width " + width + " for full-width responsive <amp-ad> tag. Width must be 100vw.");
        return false;
      }
      return true;
    };
    _proto.alignToViewport = function alignToViewport() {
      var _this = this;
      if (this.isAlignedToViewport_) {
        return;
      }
      this.isAlignedToViewport_ = true;
      var vsync = Services.vsyncFor(this.win_);
      var layoutBox = this.element_.getLayoutBox();
      var viewportSize = Services.viewportForDoc(this.element_.getAmpDoc()).getSize();
      var elementStyleWidth = parseInt(getStyle(this.element_, "width"), 10) || 0;
      vsync.run({
        measure: function measure(state) {
          state.direction = computedStyle(_this.win_, dev().assertElement(_this.element_.parentElement))["direction"];
        },
        mutate: function mutate(state) {
          if (_this.isContainerWidth_) {
            setStyle(_this.element_, "width", "100%");
          } else {
            if (elementStyleWidth != viewportSize.width) {
              return;
            }
            if (state.direction == "rtl") {
              setStyle(_this.element_, "marginRight", layoutBox.left, "px");
            } else {
              setStyle(_this.element_, "marginLeft", -layoutBox.left, "px");
            }
          }
        }
      }, {
        direction: ""
      });
    };
    _proto.isContainerWidthState = function isContainerWidthState() {
      return this.isContainerWidth_;
    };
    _proto.getAutoFormat_ = function getAutoFormat_() {
      return this.element_.getAttribute("data-auto-format");
    };
    _proto.getRafmtParam = function getRafmtParam() {
      return RAFMT_PARAMS[this.getAutoFormat_()];
    };
    _proto.isInResponsiveHeightFixExperimentBranch_ = function isInResponsiveHeightFixExperimentBranch_() {
      var _this2 = this;
      var experimentInfoList = [{
        experimentId: MAX_HEIGHT_EXP.branch,
        isTrafficEligible: function isTrafficEligible() {
          return true;
        },
        branches: [MAX_HEIGHT_EXP.control, MAX_HEIGHT_EXP.experiment]
      }];
      var setExps = randomlySelectUnsetExperiments(this.win_, experimentInfoList);
      Object.keys(setExps).forEach(function(expName) {
        return addExperimentIdToElement(setExps[expName], _this2.element_);
      });
      return setExps[MAX_HEIGHT_EXP.branch] == MAX_HEIGHT_EXP.experiment;
    };
    _proto.attemptToMatchResponsiveHeight = function attemptToMatchResponsiveHeight() {
      var _this3 = this;
      var viewportSize = Services.viewportForDoc(this.element_.getAmpDoc()).getSize();
      return this.element_.getImpl(false).then(function(impl) {
        return impl.attemptChangeSize(_this3.getResponsiveHeight_(viewportSize), viewportSize.width).catch(function() {
          dev().info(TAG3, "Change size attempt failed.");
        });
      });
    };
    _proto.getResponsiveHeight_ = function getResponsiveHeight_(viewportSize) {
      switch (this.getAutoFormat_()) {
        case ADSENSE_RSPV_TAG:
          var minHeight = 100;
          var maxHeight = Math.min(this.isInResponsiveHeightFixExperimentBranch_() ? 500 : 300, viewportSize.height);
          var idealHeight = Math.round(viewportSize.width / 1.2);
          return clamp(idealHeight, minHeight, maxHeight);
        case ADSENSE_MCRSPV_TAG:
          return getMatchedContentResponsiveHeightAndUpdatePubParams(viewportSize.width, this.element_);
        default:
          return 0;
      }
    };
    ResponsiveState2.isLayoutViewportNarrow = function isLayoutViewportNarrow(element) {
      var viewportSize = Services.viewportForDoc(element).getSize();
      return viewportSize.width < 488;
    };
    return ResponsiveState2;
  }();

  // src/core/3p-frame.js
  var getRequiredSandboxFlags = function getRequiredSandboxFlags2() {
    return [
      "allow-top-navigation-by-user-activation",
      "allow-popups-to-escape-sandbox"
    ];
  };
  var getOptionalSandboxFlags = function getOptionalSandboxFlags2() {
    return [
      "allow-forms",
      "allow-modals",
      "allow-pointer-lock",
      "allow-popups",
      "allow-same-origin",
      "allow-scripts"
    ];
  };

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
  var LayoutPriority_Enum = {
    CONTENT: 0,
    METADATA: 1,
    ADS: 2,
    BACKGROUND: 3
  };
  function getLayoutClass(layout) {
    return "i-amphtml-layout-" + layout;
  }
  function isLayoutSizeDefined(layout) {
    return layout == Layout_Enum.FIXED || layout == Layout_Enum.FIXED_HEIGHT || layout == Layout_Enum.RESPONSIVE || layout == Layout_Enum.FILL || layout == Layout_Enum.FLEX_ITEM || layout == Layout_Enum.FLUID || layout == Layout_Enum.INTRINSIC;
  }
  function getLengthNumeral(length) {
    var res = parseFloat(length);
    return isFiniteNumber(res) ? res : void 0;
  }
  function applyFillContent(element, opt_replacedContent) {
    element.classList.add("i-amphtml-fill-content");
    if (opt_replacedContent) {
      element.classList.add("i-amphtml-replaced-content");
    }
  }

  // src/mode-object.js
  function getModeObject(opt_win) {
    return {
      localDev: getMode(opt_win).localDev,
      development: getMode(opt_win).development,
      esm: getMode(opt_win).esm,
      test: getMode(opt_win).test,
      rtvVersion: getMode(opt_win).rtvVersion
    };
  }

  // src/iframe-attributes.js
  function getContextMetadata(parentWindow, element, sentinel, attributes) {
    var startTime = Date.now();
    var width = element.getAttribute("width");
    var height = element.getAttribute("height");
    attributes = attributes ? attributes : dict();
    attributes["width"] = getLengthNumeral(width);
    attributes["height"] = getLengthNumeral(height);
    if (element.getAttribute("title")) {
      attributes["title"] = element.getAttribute("title");
    }
    var locationHref = parentWindow.location.href;
    if (locationHref == "about:srcdoc") {
      locationHref = parentWindow.parent.location.href;
    }
    var ampdoc2 = Services.ampdoc(element);
    var docInfo = Services.documentInfoForDoc(element);
    var viewer = Services.viewerForDoc(element);
    var referrer = viewer.getUnconfirmedReferrerUrl();
    var layoutRect = getPageLayoutBoxBlocking(element);
    attributes["_context"] = dict({
      "ampcontextVersion": version(),
      "ampcontextFilepath": urls.thirdParty + "/" + version() + "/ampcontext-v0.js",
      "sourceUrl": docInfo.sourceUrl,
      "referrer": referrer,
      "canonicalUrl": docInfo.canonicalUrl,
      "pageViewId": docInfo.pageViewId,
      "location": {
        "href": locationHref
      },
      "startTime": startTime,
      "tagName": element.tagName,
      "mode": getModeObject(),
      "canary": isCanary(parentWindow),
      "hidden": !ampdoc2.isVisible(),
      "initialLayoutRect": layoutRect ? {
        "left": layoutRect.left,
        "top": layoutRect.top,
        "width": layoutRect.width,
        "height": layoutRect.height
      } : null,
      "domFingerprint": DomFingerprint.generate(element),
      "experimentToggles": experimentToggles(parentWindow),
      "sentinel": sentinel
    });
    var adSrc = element.getAttribute("src");
    if (adSrc) {
      attributes["src"] = adSrc;
    }
    return attributes;
  }

  // src/3p-frame.js
  var overrideBootstrapBaseUrl;
  var TAG4 = "3p-frame";
  function getDefaultBootstrapBaseUrl(parentWindow, opt_srcFileBasename) {
    var srcFileBasename = opt_srcFileBasename || "frame";
    if (!isProd()) {
      return getDevelopmentBootstrapBaseUrl(parentWindow, srcFileBasename);
    }
    parentWindow.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN = parentWindow.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN || getSubDomain(parentWindow);
    return "https://" + parentWindow.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN + ("." + urls.thirdPartyFrameHost + "/" + version() + "/") + (srcFileBasename + ".html");
  }
  function getDevelopmentBootstrapBaseUrl(parentWindow, srcFileBasename) {
    return overrideBootstrapBaseUrl || getAdsLocalhost(parentWindow) + "/dist.3p/" + (isMinified() ? version() + "/" + srcFileBasename : "current/" + srcFileBasename + ".max") + ".html";
  }
  function getAdsLocalhost(win) {
    var _URL;
    var adsUrl = urls.thirdParty;
    if (adsUrl == "https://3p.ampproject.net") {
      adsUrl = "http://ads.localhost";
    }
    return adsUrl + ":" + (((_URL = new URL(win.document.baseURI)) == null ? void 0 : _URL.port) || win.location.port || win.parent.location.port);
  }
  function getSubDomain(win) {
    return "d-" + getRandom(win);
  }
  function getRandom(win) {
    var rand;
    if (win.crypto && win.crypto.getRandomValues) {
      var uint32array = new Uint32Array(2);
      win.crypto.getRandomValues(uint32array);
      rand = String(uint32array[0]) + uint32array[1];
    } else {
      rand = String(win.Math.random()).substr(2) + "0";
    }
    return rand;
  }
  function applySandbox(iframe) {
    if (!iframe.sandbox || !iframe.sandbox.supports) {
      return;
    }
    var requiredFlags = getRequiredSandboxFlags();
    for (var i = 0; i < requiredFlags.length; i++) {
      var flag = requiredFlags[i];
      if (!iframe.sandbox.supports(flag)) {
        dev().info(TAG4, "Iframe doesn't support %s", flag);
        return;
      }
    }
    iframe.sandbox = requiredFlags.join(" ") + " " + getOptionalSandboxFlags().join(" ");
  }
  function generateSentinel(parentWindow) {
    var windowDepth = 0;
    for (var win = parentWindow; win && win != win.parent; win = win.parent) {
      windowDepth++;
    }
    return String(windowDepth) + "-" + getRandom(parentWindow);
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

  // src/extension-analytics.js
  function insertAnalyticsElement(parentElement, config, loadAnalytics, disableImmediate) {
    if (loadAnalytics === void 0) {
      loadAnalytics = false;
    }
    if (disableImmediate === void 0) {
      disableImmediate = false;
    }
    var doc = parentElement.ownerDocument;
    var analyticsElem = createElementWithAttributes(doc, "amp-analytics", dict({
      "sandbox": "true",
      "trigger": disableImmediate ? "" : "immediate"
    }));
    var scriptElem = createElementWithAttributes(doc, "script", dict({
      "type": "application/json"
    }));
    scriptElem.textContent = JSON.stringify(config);
    analyticsElem.appendChild(scriptElem);
    analyticsElem.CONFIG = config;
    if (loadAnalytics) {
      var extensions = Services.extensionsFor(getWin(parentElement));
      var ampdoc2 = Services.ampdoc(parentElement);
      extensions.installExtensionForDoc(ampdoc2, "amp-analytics");
    } else {
      Services.analyticsForDocOrNull(parentElement).then(function(analytics) {
        devAssert2(analytics);
      });
    }
    parentElement.appendChild(analyticsElem);
    return analyticsElem;
  }

  // ads/_a4a-config.js
  var signingServerURLs = {
    "google": "https://cdn.ampproject.org/amp-ad-verifying-keyset.json",
    "google-dev": "https://cdn.ampproject.org/amp-ad-verifying-keyset-dev.json"
  };

  // src/core/dom/layout/viewport-observer.js
  function createViewportObserver(ioCallback2, win, opts) {
    if (opts === void 0) {
      opts = {};
    }
    var _opts = opts, needsRootBounds = _opts.needsRootBounds, threshold = _opts.threshold;
    var root = isIframed(win) && needsRootBounds ? win.document : void 0;
    return new win.IntersectionObserver(ioCallback2, {
      threshold: threshold,
      root: root
    });
  }
  var viewportObservers = new WeakMap();
  var viewportCallbacks = new WeakMap();
  function observeIntersections(element, callback) {
    var win = getWin(element);
    var viewportObserver = viewportObservers.get(win);
    if (!viewportObserver) {
      viewportObservers.set(win, viewportObserver = createViewportObserver(ioCallback, win));
    }
    var callbacks = viewportCallbacks.get(element);
    if (!callbacks) {
      callbacks = [];
      viewportCallbacks.set(element, callbacks);
    }
    callbacks.push(callback);
    viewportObserver.observe(element);
    return function() {
      unobserveIntersections(element, callback);
    };
  }
  function unobserveIntersections(element, callback) {
    var callbacks = viewportCallbacks.get(element);
    if (!callbacks) {
      return;
    }
    if (!removeItem(callbacks, callback)) {
      return;
    }
    if (callbacks.length) {
      return;
    }
    var win = getWin(element);
    var viewportObserver = viewportObservers.get(win);
    viewportObserver == null ? void 0 : viewportObserver.unobserve(element);
    viewportCallbacks.delete(element);
  }
  function ioCallback(entries) {
    var seen = new Set();
    for (var i = entries.length - 1; i >= 0; i--) {
      var entry = entries[i];
      var target = entry.target;
      if (seen.has(target)) {
        continue;
      }
      seen.add(target);
      var callbacks = viewportCallbacks.get(target);
      if (!callbacks) {
        continue;
      }
      for (var k = 0; k < callbacks.length; k++) {
        var callback = callbacks[k];
        callback(entry);
      }
    }
  }

  // src/core/dom/layout/intersection.js
  function intersectionEntryToJson(entry) {
    return dict({
      "time": entry.time,
      "rootBounds": safeLayoutRectFromDomRect(entry.rootBounds),
      "boundingClientRect": safeLayoutRectFromDomRect(entry.boundingClientRect),
      "intersectionRect": safeLayoutRectFromDomRect(entry.intersectionRect),
      "intersectionRatio": entry.intersectionRatio
    });
  }
  function safeLayoutRectFromDomRect(rect) {
    if (rect === null) {
      return null;
    }
    return layoutRectFromDomRect(rect);
  }

  // src/core/dom/stream/detached.js
  var DetachedDomStream = /* @__PURE__ */ function() {
    function DetachedDomStream2(win, onChunk, onEnd) {
      this.onChunk_ = onChunk;
      this.onEnd_ = onEnd;
      this.detachedDoc_ = win.document.implementation.createHTMLDocument("");
      this.detachedDoc_.open();
      this.eof_ = false;
    }
    var _proto = DetachedDomStream2.prototype;
    _proto.write = function write(chunk) {
      devAssert(!this.eof_, "Detached doc already closed.");
      if (chunk) {
        this.detachedDoc_.write(chunk);
      }
      this.onChunk_(this.detachedDoc_);
    };
    _proto.close = function close() {
      this.eof_ = true;
      this.detachedDoc_.close();
      this.onEnd_(this.detachedDoc_);
    };
    return DetachedDomStream2;
  }();

  // src/core/dom/stream/response.js
  function streamResponseToWriter(win, response, writer) {
    var hasContentDeferred = new Deferred();
    if (win.TextDecoder && win.ReadableStream) {
      var firstRead = true;
      var reader = response.body.getReader();
      var decoder = new TextDecoder();
      reader.read().then(function handleChunk(_ref) {
        var done = _ref.done, value = _ref.value;
        if (firstRead) {
          hasContentDeferred.resolve(!done);
          firstRead = false;
        }
        value = value || new Uint8Array(0);
        var text = decoder.decode(value, {
          stream: !done
        });
        if (text) {
          writer.write(text);
        }
        if (!done) {
          return reader.read().then(handleChunk);
        }
        writer.close();
      });
    } else {
      response.text().then(function(text) {
        hasContentDeferred.resolve(!!text);
        writer.write(text);
        writer.close();
      });
    }
    return hasContentDeferred.promise;
  }

  // src/service/real-time-config/callout-vendors.js
  var RTC_VENDORS = JSON.parse('{"admax":{"url":"https://prebid.admaxmedia.io/openrtb2/amp?tag_id=PLACEMENT_ID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&targeting=TGT&curl=CANONICAL_URL&timeout=TIMEOUT&adcid=ADCID&purl=HREF&gdpr_consent=CONSENT_STRING&account=ACCOUNT_ID","macros":["PLACEMENT_ID","CONSENT_STRING","ACCOUNT_ID"],"disableKeyAppend":true},"adpushup":{"url":"https://amp.adpushup.com/prebidserver/openrtb2/amp?tag_id=TAG_ID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&curl=CANONICAL_URL&gdpr_consent=CONSENT_STRING&adc=ADCID&purl=HREF","macros":["TAG_ID","CONSENT_STRING"],"disableKeyAppend":true},"andbeyond":{"url":"https://prebid.andbeyond.media/amp.php?tag_id=TAG_ID","macros":["TAG_ID"],"disableKeyAppend":true},"aps":{"url":"https://aax.amazon-adsystem.com/e/dtb/bid?src=PUB_ID&pubid=PUB_UUID&amp=1&u=CANONICAL_URL&slots=%5B%7B%22sd%22%3A%22ATTR(data-slot)%22%2C%22s%22%3A%5B%22ATTR(width)xATTR(height)%22%5D%2C%22ms%22%3A%22ATTR(data-multi-size)%22%7D%5D&pj=PARAMS&gdprc=CONSENT_STRING","macros":["PUB_ID","PARAMS","PUB_UUID","CONSENT_STRING"],"disableKeyAppend":true},"automatad":{"url":"https://pbs01.automatad.com/openrtb2/amp?tag_id=TAG_ID","macros":["TAG_ID"],"disableKeyAppend":true},"browsi":{"url":"https://amp.browsiprod.com/predict?pvid=PAGEVIEWID_64&ot=ELEMENT_POS&ul=SCROLL_TOP&pl=PAGE_HEIGHT&bks=BKG_STATE&pk=PUB_KEY&sk=SITE_KEY&h=ATTR(height)&adix=ATTR(data-amp-slot-index)&ref=REFERRER&url=HREF","macros":["PUB_KEY","SITE_KEY"],"errorReportingUrl":"https://events.browsiprod.com/events/amp?e=ERROR_TYPE&h=HREF&et=predict_error","disableKeyAppend":true},"criteo":{"url":"https://bidder.criteo.com/amp/rtc?zid=ZONE_ID&nid=NETWORK_ID&psubid=PUBLISHER_SUB_ID&lir=LINE_ITEM_RANGES&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&timeout=TIMEOUT&curl=CANONICAL_URL&href=HREF&cst=CONSENT_STATE&cst_str=CONSENT_STRING&cst_type=CONSENT_METADATA(consentStringType)","macros":["ZONE_ID","NETWORK_ID","PUBLISHER_SUB_ID","LINE_ITEM_RANGES","CONSENT_STATE","CONSENT_STRING"],"disableKeyAppend":true},"freestar":{"url":"https://prebid-amp.pub.network/openrtb2/amp?tag_id=TAG_ID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&targeting=TGT&curl=CANONICAL_URL&timeout=TIMEOUT&adc=ADCID&purl=HREF&gdpr_consent=CONSENT_STRING&account=ACCOUNT_ID","macros":["TAG_ID","CONSENT_STRING","ACCOUNT_ID"],"disableKeyAppend":true},"future":{"url":"https://ads.servebom.com/amp?adunit=ADUNIT&gdpr_consent=CONSENT_STRING","macros":["ADUNIT","CONSENT_STRING"],"disableKeyAppend":true},"glxm":{"url":"https://pbserver.galaxiemedia.fr/openrtb2/amp?tag_id=REQUEST_ID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&targeting=TGT&curl=CANONICAL_URL&timeout=TIMEOUT&adc=ADCID&purl=HREF&gdpr_consent=CONSENT_STRING&account=ACCOUNT_ID","macros":["REQUEST_ID","CONSENT_STRING","ACCOUNT_ID"],"disableKeyAppend":true},"highfivve":{"url":"https://prebid-server.h5v.eu/openrtb2/amp?tag_id=TAG_ID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&targeting=TGT&curl=CANONICAL_URL&timeout=TIMEOUT&adc=ADCID&purl=HREF&gdpr_consent=CONSENT_STRING&account=ACCOUNT_ID","macros":["TAG_ID","CONSENT_STRING","ACCOUNT_ID"],"disableKeyAppend":true},"hubvisor":{"url":"https://pbs.hubvisor.io/openrtb2/amp?tag_id=PLACEMENT_ID&slot=ATTR(data-slot)&targeting=TGT&curl=CANONICAL_URL&timeout=TIMEOUT&adcid=ADCID&purl=HREF&gdpr_consent=CONSENT_STRING","macros":["PLACEMENT_ID","CONSENT_STRING"],"disableKeyAppend":true},"indexexchange":{"url":"https://amp.casalemedia.com/amprtc?v=1&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&s=SITE_ID&p=CANONICAL_URL&consent_state=CONSENT_STATE&consent_string=CONSENT_STRING","macros":["SITE_ID","CONSENT_STATE","CONSENT_STRING"],"disableKeyAppend":true},"kargo":{"url":"https://krk.kargo.com/api/v1/amprtc?slot=SLOT_ID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&pslot=ATTR(data-slot)&pvid=PAGEVIEWID&targeting=TGT&curl=CANONICAL_URL&timeout=TIMEOUT&acid=ADCID&purl=HREF","macros":["SLOT_ID"],"errorReportingUrl":"https://krk.kargo.com/api/v1/event/amprtc-error?error_type=ERROR_TYPE&url=HREF","disableKeyAppend":true},"lotame":{"url":"https://ad.crwdcntrl.net/5/pe=y/c=CLIENT_ID/an=AD_NETWORK/ma=MAX_AUDIENCES","macros":["CLIENT_ID","AD_NETWORK","MAX_AUDIENCES"],"disableKeyAppend":true},"medianet":{"url":"https://amprtc.media.net/rtb/getrtc?cid=CID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&tgt=TGT&curl=CANONICAL_URL&to=TIMEOUT&purl=HREF&cste=CONSENT_STATE&cstr=CONSENT_STRING&adcid=ADCID&dmsv=ATTR(data-multi-size-validation)&ep=ELEMENT_POS&st=SCROLL_TOP&ph=PAGE_HEIGHT&bks=BKG_STATE&ref=REFERRER&dj=ATTR(data-json)","macros":["CID"],"errorReportingUrl":"https://qsearch-a.akamaihd.net/log?logid=kfk&evtid=projectevents&project=amprtc_error&error=ERROR_TYPE&rd=HREF","disableKeyAppend":true},"mediasquare":{"url":"https://pbs-front.mediasquare.fr/msq_prebid?owner=OWNER&code=CODE&sizes=ATTR(data-multi-size)&adunit=ATTR(data-slot)&referer=HREF&gdpr_consent=CONSENT_STRING","macros":["OWNER","CODE","CONSENT_STRING"],"disableKeyAppend":true},"navegg":{"url":"https://usr.navdmp.com/usr?acc=NVG_ACC&wst=0&v=10","macros":["NVG_ACC"],"disableKeyAppend":true},"newspassid":{"url":"https://bidder.newspassid.com/openrtb2/amp?tag_id=TAG_ID&placement_id=PLACEMENT_ID&gdpr_consent=CONSENT_STRING&ad_unit_code=AD_UNIT_CODE&site_id=SITE_ID&publisher_id=PUBLISHER_ID&custom_data=TGT&pubcid=PUBCID&adcid=ADCID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&curl=CANONICAL_URL&timeout=TIMEOUT&purl=HREF","macros":["TAG_ID","PLACEMENT_ID","SITE_ID","PUBLISHER_ID","AD_UNIT_CODE","PUBCID"],"errorReportingUrl":"https://bidder.newspassid.com/amp_error?err=ERROR_TYPE&url=HREF","disableKeyAppend":true},"nexx360":{"url":"https://pbs.nexx360.io/openrtb2/amp?tag_id=TAG_ID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&targeting=TGT&curl=CANONICAL_URL&timeout=TIMEOUT&adc=ADCID&purl=HREF&gdpr_consent=CONSENT_STRING&account=ACCOUNT_ID","macros":["TAG_ID","CONSENT_STRING","ACCOUNT_ID"],"disableKeyAppend":true},"openwrap":{"url":"https://ow.pubmatic.com/amp?v=1&w=ATTR(width)&h=ATTR(height)&ms=ATTR(data-multi-size)&auId=ATTR(data-slot)&purl=HREF&pubId=PUB_ID&profId=PROFILE_ID&consent_string=CONSENT_STRING&gdpr_applies=CONSENT_METADATA(gdprApplies)&addtl_consent=CONSENT_METADATA(additionalConsent)&consent_type=CONSENT_METADATA(consentStringType)","macros":["PUB_ID","PROFILE_ID","CONSENT_STRING"],"errorReportingUrl":"https://ow.pubmatic.com/amp_error?e=ERROR_TYPE&h=HREF","disableKeyAppend":true},"ozone":{"url":"https://elb.the-ozone-project.com/openrtb2/amp?tag_id=TAG_ID&placement_id=PLACEMENT_ID&gdpr_consent=CONSENT_STRING&ad_unit_code=AD_UNIT_CODE&site_id=SITE_ID&publisher_id=PUBLISHER_ID&custom_data=TGT&pubcid=PUBCID&adcid=ADCID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&curl=CANONICAL_URL&timeout=TIMEOUT&purl=HREF","macros":["TAG_ID","PLACEMENT_ID","SITE_ID","PUBLISHER_ID","AD_UNIT_CODE","PUBCID"],"errorReportingUrl":"https://elb.the-ozone-project.com/amp_error?err=ERROR_TYPE&url=HREF","disableKeyAppend":true},"prebidappnexus":{"url":"https://prebid.adnxs.com/pbs/v1/openrtb2/amp?tag_id=PLACEMENT_ID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&targeting=TGT&curl=CANONICAL_URL&timeout=TIMEOUT&adcid=ADCID&purl=HREF&gdpr_consent=CONSENT_STRING&account=ACCOUNT_ID&gdpr_applies=CONSENT_METADATA(gdprApplies)&addtl_consent=CONSENT_METADATA(additionalConsent)&consent_type=CONSENT_METADATA(consentStringType)","macros":["PLACEMENT_ID","CONSENT_STRING","ACCOUNT_ID"],"disableKeyAppend":true},"prebidappnexuspsp":{"url":"https://ib.adnxs.com/prebid/amp?tag_id=PLACEMENT_ID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&targeting=TGT&curl=CANONICAL_URL&timeout=TIMEOUT&adcid=ADCID&purl=HREF&gdpr_consent=CONSENT_STRING&account=ACCOUNT_ID&gdpr_applies=CONSENT_METADATA(gdprApplies)&addtl_consent=CONSENT_METADATA(additionalConsent)&consent_type=CONSENT_METADATA(consentStringType)","macros":["PLACEMENT_ID","CONSENT_STRING","ACCOUNT_ID"],"disableKeyAppend":true},"prebidflux":{"url":"https://prebid-server.flux-adserver.com/openrtb2/amp?tag_id=TAG_ID","macros":["TAG_ID"],"disableKeyAppend":true},"prebidopenx":{"url":"https://prebid.openx.net/openrtb2/amp?tag_id=REQUEST_ID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&targeting=TGT&curl=CANONICAL_URL&timeout=TIMEOUT&adc=ADCID&purl=HREF&gdpr_consent=CONSENT_STRING&account=ACCOUNT_ID","macros":["REQUEST_ID","CONSENT_STRING","ACCOUNT_ID"],"disableKeyAppend":true},"prebidrubicon":{"url":"https://prebid-server.rubiconproject.com/openrtb2/amp?tag_id=REQUEST_ID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&targeting=TGT&curl=CANONICAL_URL&timeout=TIMEOUT&adc=ADCID&purl=HREF&gdpr_consent=CONSENT_STRING&account=ACCOUNT_ID&gdpr_applies=CONSENT_METADATA(gdprApplies)&addtl_consent=CONSENT_METADATA(additionalConsent)&consent_type=CONSENT_METADATA(consentStringType)","macros":["REQUEST_ID","CONSENT_STRING","ACCOUNT_ID"],"disableKeyAppend":true},"purch":{"url":"https://ads.servebom.com/tmntag.js?v=1.2&fmt=amp&o={%22p%22%3APLACEMENT_ID}&div_id=DIV_ID","macros":["PLACEMENT_ID","DIV_ID"],"disableKeyAppend":true},"salesforcedmp":{"url":"https://cdn.krxd.net/userdata/v2/amp/ORGANIZATION_ID?segments_key=SEGMENTS_KEY&kuid_key=USER_KEY","macros":["ORGANIZATION_ID","SEGMENTS_KEY","USER_KEY"],"disableKeyAppend":true},"sonobi":{"url":"https://apex.go.sonobi.com/trinity.json?key_maker=%7B%22_DIVIDER_ATTR(data-slot)%7C1%22%3A%22PLACEMENT_ID_DIVIDER_ATTR(width)xATTR(height)%2CATTR(data-multi-size)%22%7D&ref=CANONICAL_URL&lib_name=amp&lib_v=0.1&pv=PAGEVIEWID&amp=1","disableKeyAppend":true,"macros":["PLACEMENT_ID","_DIVIDER_"]},"t13":{"url":"https://s2s.t13.io/openrtb2/amp?tag_id=TAG_ID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&targeting=TGT&curl=CANONICAL_URL&timeout=TIMEOUT&adc=ADCID&purl=HREF&gdpr_consent=CONSENT_STRING&account=ACCOUNT_ID","macros":["TAG_ID","CONSENT_STRING","ACCOUNT_ID"],"disableKeyAppend":true},"tail":{"url":"https://ACCOUNT_ID.seg.t.tailtarget.com/amp","macros":["ACCOUNT_ID"],"disableKeyAppend":true},"yieldbot":{"url":"https://i.yldbt.com/m/YB_PSN/v1/amp/init?curl=CANONICAL_URL&sn=YB_SLOT&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&aup=ATTR(data-slot)&pvi=PAGEVIEWID&tgt=TGT&adcid=ADCID&href=HREF","macros":["YB_PSN","YB_SLOT"],"disableKeyAppend":true},"yieldlab":{"url":"https://ad.yieldlab.net/yp/ADSLOT_ID?content=amp&consent=CONSENT_STRING&t=amp%3D1","macros":["ADSLOT_ID","CONSENT_STRING"],"disableKeyAppend":true},"snigel":{"url":"https://adserv.snigelweb.com/bp/v1/openrtb2/amp?tag_id=PLACEMENT_ID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&targeting=TGT&curl=CANONICAL_URL&timeout=TIMEOUT&adcid=ADCID&purl=HREF&consent_string=CONSENT_STRING&account=ACCOUNT_ID&gdpr_applies=CONSENT_METADATA(gdprApplies)&addtl_consent=CONSENT_METADATA(additionalConsent)&consent_type=CONSENT_METADATA(consentStringType)","macros":["PLACEMENT_ID","CONSENT_STRING","ACCOUNT_ID"],"disableKeyAppend":true}}');
  if (getMode().localDev || getMode().test) {
    RTC_VENDORS["fakevendor"] = {
      url: "https://localhost:8000/examples/rtcE1.json?slot_id=SLOT_ID&page_id=PAGE_ID&foo_id=FOO_ID",
      macros: ["SLOT_ID", "PAGE_ID", "FOO_ID"]
    };
    RTC_VENDORS["fakevendor2"] = {
      url: "https://localhost:8000/examples/rtcE1.json?slot_id=SLOT_ID&page_id=PAGE_ID&foo_id=FOO_ID",
      errorReportingUrl: "https://localhost:8000/examples/ERROR_TYPE",
      disableKeyAppend: true
    };
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

  // src/core/types/function/exponential-backoff.js
  function exponentialBackoff(opt_base) {
    var getTimeout = exponentialBackoffClock(opt_base);
    return function(work) {
      return setTimeout(work, getTimeout());
    };
  }
  function exponentialBackoffClock(opt_base) {
    var base = opt_base || 2;
    var count = 0;
    return function() {
      var wait = Math.pow(base, count++);
      wait += getJitter(wait);
      return wait * 1e3;
    };
  }
  function getJitter(wait, opt_perc) {
    opt_perc = opt_perc || 0.3;
    var jitter = wait * opt_perc * Math.random();
    if (Math.random() > 0.5) {
      jitter *= -1;
    }
    return jitter;
  }

  // src/style-installer.js
  var TRANSFORMER_PROP = "__AMP_CSS_TR";
  var STYLE_MAP_PROP = "__AMP_CSS_SM";
  function installStylesForDoc(ampdoc2, cssText2, cb, opt_isRuntimeCss, opt_ext) {
    var cssRoot = ampdoc2.getHeadNode();
    var style = insertStyleElement(cssRoot, maybeTransform(cssRoot, cssText2), opt_isRuntimeCss || false, opt_ext || null);
    if (cb) {
      var rootNode = ampdoc2.getRootNode();
      if (styleLoaded(rootNode, style)) {
        cb(style);
        return style;
      }
      var interval = setInterval(function() {
        if (styleLoaded(rootNode, style)) {
          clearInterval(interval);
          cb(style);
        }
      }, 4);
    }
    return style;
  }
  function insertStyleElement(cssRoot, cssText2, isRuntimeCss, ext) {
    var styleMap = cssRoot[STYLE_MAP_PROP];
    if (!styleMap) {
      styleMap = cssRoot[STYLE_MAP_PROP] = map();
    }
    var isExtCss = !isRuntimeCss && ext && ext != "amp-custom" && ext != "amp-keyframes";
    var key = isRuntimeCss ? "amp-runtime" : isExtCss ? "amp-extension=" + ext : null;
    if (key) {
      var existing = getExistingStyleElement(cssRoot, styleMap, key);
      if (existing) {
        if (existing.tagName == "STYLE" && existing.textContent !== cssText2) {
          existing.textContent = cssText2;
        }
        return existing;
      }
    }
    var doc = cssRoot.ownerDocument || cssRoot;
    var style = doc.createElement("style");
    style.textContent = cssText2;
    var afterElement = null;
    if (isRuntimeCss) {
      style.setAttribute("amp-runtime", "");
    } else if (isExtCss) {
      style.setAttribute("amp-extension", ext || "");
      afterElement = dev().assertElement(getExistingStyleElement(cssRoot, styleMap, "amp-runtime"));
    } else {
      if (ext) {
        style.setAttribute(ext, "");
      }
      afterElement = cssRoot.lastChild;
    }
    insertAfterOrAtStart(cssRoot, style, afterElement);
    if (key) {
      styleMap[key] = style;
    }
    return style;
  }
  function getExistingStyleElement(cssRoot, styleMap, key) {
    if (styleMap[key]) {
      return styleMap[key];
    }
    var existing = cssRoot.querySelector("style[" + key + "], link[" + key + "]");
    if (existing) {
      styleMap[key] = existing;
      return existing;
    }
    return null;
  }
  function maybeTransform(cssRoot, cssText2) {
    var transformer = cssRoot[TRANSFORMER_PROP];
    return transformer ? transformer(cssText2) : cssText2;
  }
  var bodyMadeVisible = false;
  function makeBodyVisibleRecovery(doc) {
    devAssert2(doc.defaultView, "Passed in document must have a defaultView");
    if (bodyMadeVisible) {
      return;
    }
    bodyMadeVisible = true;
    setBodyVisibleStyles(doc);
  }
  function setBodyVisibleStyles(doc) {
    setStyles(dev().assertElement(doc.body), {
      opacity: 1,
      visibility: "visible",
      "animation": "none"
    });
  }
  function styleLoaded(doc, style) {
    var sheets = doc.styleSheets;
    for (var i = 0; i < sheets.length; i++) {
      var sheet = sheets[i];
      if (sheet.ownerNode == style) {
        return true;
      }
    }
    return false;
  }

  // src/error-reporting.js
  var CANCELLED = "CANCELLED";
  var BLOCK_BY_CONSENT = "BLOCK_BY_CONSENT";
  var NON_ACTIONABLE_ERROR_THROTTLE_THRESHOLD = 1e-3;
  var USER_ERROR_THROTTLE_THRESHOLD = 0.1;
  var BETA_ERROR_REPORT_URL_FREQ = 0.1;
  var accumulatedErrorMessages = self.__AMP_ERRORS || [];
  self.__AMP_ERRORS = accumulatedErrorMessages;
  function pushLimit(array, element, limit) {
    if (array.length >= limit) {
      array.splice(0, array.length - limit + 1);
    }
    array.push(element);
  }
  var _reportingBackoff = function reportingBackoff(work) {
    _reportingBackoff = exponentialBackoff(1.5);
    return _reportingBackoff(work);
  };
  function tryJsonStringify(value) {
    try {
      return JSON.stringify(value);
    } catch (e) {
      return String(value);
    }
  }
  function reportError(error, opt_associatedElement) {
    try {
      var isValidError;
      if (error) {
        if (error.message !== void 0) {
          error = duplicateErrorIfNecessary(error);
          isValidError = true;
        } else {
          var origError = error;
          error = new Error(tryJsonStringify(origError));
          error.origError = origError;
        }
      } else {
        error = new Error("Unknown error");
      }
      if (!isValidError && getMode().localDev && !getMode().test) {
        setTimeout(function() {
          var rethrow = new Error("_reported_ Error reported incorrectly: " + error);
          throw rethrow;
        });
      }
      if (error.reported) {
        return error;
      }
      error.reported = true;
      if (error.messageArray) {
        var elIndex = findIndex(error.messageArray, function(item) {
          return item == null ? void 0 : item.tagName;
        });
        if (elIndex > -1) {
          error.associatedElement = error.messageArray[elIndex];
        }
      }
      var element = opt_associatedElement || error.associatedElement;
      if (element && element.classList) {
        element.classList.add("i-amphtml-error");
        if (getMode().development) {
          element.classList.add("i-amphtml-element-error");
          element.setAttribute("error-message", error.message);
        }
      }
      if (self.console && (isUserErrorMessage(error.message) || !error.expected || getMode().localDev)) {
        var output = console.error || console.log;
        if (error.messageArray) {
          output.apply(console, error.messageArray);
        } else {
          if (element) {
            output.call(console, error.message, element);
          } else if (!isMinified()) {
            output.call(console, error.stack);
          } else {
            output.call(console, error.message);
          }
        }
      }
      if (element && element.dispatchCustomEventForTesting) {
        element.dispatchCustomEventForTesting(AmpEvents_Enum.ERROR, error.message);
      }
      onError["call"](self, void 0, void 0, void 0, void 0, error);
    } catch (errorReportingError) {
      setTimeout(function() {
        throw errorReportingError;
      });
    }
    return error;
  }
  function cancellation() {
    return new Error(CANCELLED);
  }
  function isCancellation(errorOrMessage) {
    if (!errorOrMessage) {
      return false;
    }
    if (typeof errorOrMessage == "string") {
      return errorOrMessage.startsWith(CANCELLED);
    }
    if (typeof errorOrMessage.message == "string") {
      return errorOrMessage.message.startsWith(CANCELLED);
    }
    return false;
  }
  function isBlockedByConsent(errorOrMessage) {
    if (!errorOrMessage) {
      return false;
    }
    if (typeof errorOrMessage == "string") {
      return errorOrMessage.startsWith(BLOCK_BY_CONSENT);
    }
    if (typeof errorOrMessage.message == "string") {
      return errorOrMessage.message.startsWith(BLOCK_BY_CONSENT);
    }
    return false;
  }
  function onError(message, filename, line, col, error) {
    var _this = this;
    if (this && this.document && (!error || !error.expected)) {
      makeBodyVisibleRecovery(this.document);
    }
    if (getMode().localDev || getMode().development || getMode().test) {
      return;
    }
    var hasNonAmpJs = false;
    try {
      hasNonAmpJs = detectNonAmpJs(self);
    } catch (ignore) {
    }
    if (hasNonAmpJs && Math.random() > 0.01) {
      return;
    }
    var data = getErrorReportData(message, filename, line, col, error, hasNonAmpJs);
    if (data) {
      _reportingBackoff(function() {
        try {
          return reportErrorToServerOrViewer(_this, data).catch(function() {
          });
        } catch (e) {
        }
      });
    }
  }
  function chooseReportingUrl_() {
    return Math.random() < BETA_ERROR_REPORT_URL_FREQ ? urls.betaErrorReporting : urls.errorReporting;
  }
  function reportErrorToServerOrViewer(win, data) {
    if (data["pt"] && Math.random() < 0.9) {
      return resolvedPromise();
    }
    return maybeReportErrorToViewer(win, data).then(function(reportedErrorToViewer) {
      if (!reportedErrorToViewer) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", chooseReportingUrl_(), true);
        xhr.send(JSON.stringify(data));
      }
    });
  }
  function maybeReportErrorToViewer(win, data) {
    var ampdocService = Services.ampdocServiceFor(win);
    if (!ampdocService.isSingleDoc()) {
      return Promise.resolve(false);
    }
    var ampdocSingle = ampdocService.getSingleDoc();
    var htmlElement = ampdocSingle.getRootNode().documentElement;
    var docOptedIn = htmlElement.hasAttribute("report-errors-to-viewer");
    if (!docOptedIn) {
      return Promise.resolve(false);
    }
    var viewer = Services.viewerForDoc(ampdocSingle);
    if (!viewer.hasCapability("errorReporter")) {
      return Promise.resolve(false);
    }
    return viewer.isTrustedViewer().then(function(viewerTrusted) {
      if (!viewerTrusted) {
        return false;
      }
      viewer.sendMessage("error", errorReportingDataForViewer(data));
      return true;
    });
  }
  function errorReportingDataForViewer(errorReportData) {
    return dict({
      "m": errorReportData["m"],
      "a": errorReportData["a"],
      "s": errorReportData["s"],
      "el": errorReportData["el"],
      "ex": errorReportData["ex"],
      "v": errorReportData["v"],
      "pt": errorReportData["pt"]
    });
  }
  function buildErrorMessage_(message, error) {
    if (error) {
      if (error.message) {
        message = error.message;
      } else {
        message = String(error);
      }
    }
    if (!message) {
      message = "Unknown error";
    }
    return message;
  }
  function getErrorReportData(message, filename, line, col, error, hasNonAmpJs) {
    message = buildErrorMessage_(message, error);
    var expected = !!(error && error.expected);
    if (/_reported_/.test(message)) {
      return;
    }
    if (message == CANCELLED) {
      return;
    }
    var detachedWindow = !(self && self.window);
    var throttleBase = Math.random();
    if (isLoadErrorMessage(message) || message == "Script error." || detachedWindow) {
      expected = true;
      if (throttleBase > NON_ACTIONABLE_ERROR_THROTTLE_THRESHOLD) {
        return;
      }
    }
    var isUserError = isUserErrorMessage(message);
    if (isUserError && throttleBase > USER_ERROR_THROTTLE_THRESHOLD) {
      return;
    }
    var data = Object.create(null);
    data["v"] = getMode().rtvVersion;
    data["noAmp"] = hasNonAmpJs ? "1" : "0";
    data["m"] = message.replace(USER_ERROR_SENTINEL, "");
    data["a"] = isUserError ? "1" : "0";
    data["ex"] = expected ? "1" : "0";
    data["dw"] = detachedWindow ? "1" : "0";
    var runtime = "1p";
    if (false) {
      runtime = "sxg";
      data["sxg"] = "1";
    } else if (isEsm()) {
      runtime = "esm";
      data["esm"] = "1";
    } else if (self.context && self.context.location) {
      data["3p"] = "1";
      runtime = "3p";
    } else if (getMode().runtime) {
      runtime = getMode().runtime;
    }
    data["rt"] = runtime;
    if (runtime === "inabox") {
      data["adid"] = getMode().a4aId;
    }
    data["ca"] = isCanary(self) ? "1" : "0";
    data["bt"] = getBinaryType(self);
    if (self.location.ancestorOrigins && self.location.ancestorOrigins[0]) {
      data["or"] = self.location.ancestorOrigins[0];
    }
    if (self.viewerState) {
      data["vs"] = self.viewerState;
    }
    if (self.parent && self.parent != self) {
      data["iem"] = "1";
    }
    if (self.AMP && self.AMP.viewer) {
      var resolvedViewerUrl = self.AMP.viewer.getResolvedViewerUrl();
      var messagingOrigin = self.AMP.viewer.maybeGetMessagingOrigin();
      if (resolvedViewerUrl) {
        data["rvu"] = resolvedViewerUrl;
      }
      if (messagingOrigin) {
        data["mso"] = messagingOrigin;
      }
    }
    var exps = [];
    var experiments = experimentTogglesOrNull(self);
    for (var exp in experiments) {
      var on = experiments[exp];
      exps.push(exp + "=" + (on ? "1" : "0"));
    }
    data["exps"] = exps.join(",");
    if (error) {
      var _error$associatedElem;
      data["el"] = ((_error$associatedElem = error.associatedElement) == null ? void 0 : _error$associatedElem.tagName) || "u";
      if (error.args) {
        data["args"] = JSON.stringify(error.args);
      }
      if (!isUserError && !error.ignoreStack && error.stack) {
        data["s"] = error.stack;
      }
      if (error.message) {
        error.message += " _reported_";
      }
    } else {
      data["f"] = filename || "";
      data["l"] = line || "";
      data["c"] = col || "";
    }
    data["r"] = self.document ? self.document.referrer : "";
    data["ae"] = accumulatedErrorMessages.join(",");
    data["fr"] = self.location["originalHash"] || self.location.hash;
    if (data["bt"] === "production") {
      data["pt"] = "1";
    }
    pushLimit(accumulatedErrorMessages, message, 25);
    return data;
  }
  function detectNonAmpJs(win) {
    if (!win.document) {
      return false;
    }
    var scripts = win.document.querySelectorAll("script[src]");
    for (var i = 0; i < scripts.length; i++) {
      if (!isProxyOrigin(scripts[i].src.toLowerCase())) {
        return true;
      }
    }
    return false;
  }

  // src/service/real-time-config/real-time-config-impl.js
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
  var TAG5 = "real-time-config";
  var MAX_RTC_CALLOUTS = 5;
  var MAX_URL_LENGTH2 = 16384;
  var RTC_ERROR_ENUM = {
    MALFORMED_JSON_RESPONSE: "4",
    DUPLICATE_URL: "5",
    INSECURE_URL: "6",
    MAX_CALLOUTS_EXCEEDED: "7",
    NETWORK_FAILURE: "8",
    UNKNOWN_VENDOR: "9",
    TIMEOUT: "10",
    MACRO_EXPAND_TIMEOUT: "11"
  };
  var GLOBAL_MACRO_ALLOWLIST = {
    CLIENT_ID: true
  };
  var RealTimeConfigService = /* @__PURE__ */ function() {
    function RealTimeConfigService2(ampDoc) {
      this.ampDoc_ = ampDoc;
    }
    var _proto = RealTimeConfigService2.prototype;
    _proto.maybeExecuteRealTimeConfig = function maybeExecuteRealTimeConfig(element, customMacros, consentState, consentString, consentMetadata, checkStillCurrent) {
      return new RealTimeConfigManager(this.ampDoc_).execute(element, customMacros, consentState, consentString, consentMetadata, checkStillCurrent);
    };
    return RealTimeConfigService2;
  }();
  var RealTimeConfigManager = /* @__PURE__ */ function() {
    function RealTimeConfigManager2(ampDoc) {
      this.ampDoc_ = ampDoc;
      this.win_ = ampDoc.win;
      this.seenUrls_ = {};
      this.rtcStartTime_ = null;
      this.promiseArray_ = [];
      this.rtcConfig_ = null;
      this.consentState_ = null;
      this.consentString_ = null;
      this.consentMetadata_ = null;
    }
    var _proto2 = RealTimeConfigManager2.prototype;
    _proto2.buildErrorResponse_ = function buildErrorResponse_(error, callout, errorReportingUrl, opt_rtcTime) {
      dev().warn(TAG5, "RTC callout to " + callout + " caused " + error);
      if (errorReportingUrl) {
        this.sendErrorMessage(error, errorReportingUrl);
      }
      return Promise.resolve({
        error: error,
        callout: callout,
        rtcTime: opt_rtcTime || 0
      });
    };
    _proto2.sendErrorMessage = function sendErrorMessage(errorType, errorReportingUrl) {
      if (!getMode(this.win_).localDev && !getMode(this.win_).test && Math.random() >= 0.01) {
        return;
      }
      var allowlist = {
        ERROR_TYPE: true,
        HREF: true
      };
      var macros = {
        ERROR_TYPE: errorType,
        HREF: this.win_.location.href
      };
      var service = Services.urlReplacementsForDoc(this.ampDoc_);
      var url = service.expandUrlSync(errorReportingUrl, macros, allowlist);
      new this.win_.Image().src = url;
    };
    _proto2.getCalloutParam_ = function getCalloutParam_(url) {
      var urlService = Services.urlForDoc(this.ampDoc_);
      var parsedUrl = urlService.parse(url);
      return (parsedUrl.hostname + parsedUrl.pathname).substr(0, 50);
    };
    _proto2.isValidCalloutForConsentState = function isValidCalloutForConsentState(calloutConfig, optIsGloballyValid) {
      var sendRegardlessOfConsentState = calloutConfig.sendRegardlessOfConsentState;
      if (!isObject(calloutConfig) || !sendRegardlessOfConsentState) {
        return !!optIsGloballyValid;
      }
      if (typeof sendRegardlessOfConsentState == "boolean") {
        return sendRegardlessOfConsentState;
      }
      if (isArray(sendRegardlessOfConsentState)) {
        for (var i = 0; i < sendRegardlessOfConsentState.length; i++) {
          if (this.consentState_ == CONSENT_POLICY_STATE[sendRegardlessOfConsentState[i]]) {
            return true;
          } else if (!CONSENT_POLICY_STATE[sendRegardlessOfConsentState[i]]) {
            dev().warn(TAG5, "Invalid RTC consent state given: " + ("" + sendRegardlessOfConsentState[i]));
          }
        }
        return false;
      }
      user().warn(TAG5, "Invalid value for sendRegardlessOfConsentState:" + ("" + sendRegardlessOfConsentState));
      return !!optIsGloballyValid;
    };
    _proto2.modifyRtcConfigForConsentStateSettings = function modifyRtcConfigForConsentStateSettings() {
      var _this = this;
      if (this.consentState_ == void 0 || this.consentState_ == CONSENT_POLICY_STATE.SUFFICIENT || this.consentState_ == CONSENT_POLICY_STATE.UNKNOWN_NOT_REQUIRED) {
        return;
      }
      var isGloballyValid = this.isValidCalloutForConsentState(this.rtcConfig_);
      this.rtcConfig_.urls = (this.rtcConfig_.urls || []).filter(function(url) {
        return _this.isValidCalloutForConsentState(url, isGloballyValid);
      });
      Object.keys(this.rtcConfig_.vendors || {}).forEach(function(vendor) {
        if (!_this.isValidCalloutForConsentState(_this.rtcConfig_.vendors[vendor], isGloballyValid)) {
          delete _this.rtcConfig_.vendors[vendor];
        }
      });
    };
    _proto2.assignMacros = function assignMacros(macros) {
      var _this2 = this;
      macros["TIMEOUT"] = function() {
        return _this2.rtcConfig_.timeoutMillis;
      };
      macros["CONSENT_STATE"] = function() {
        return _this2.consentState_;
      };
      macros["CONSENT_STRING"] = function() {
        return _this2.consentString_;
      };
      macros["CONSENT_METADATA"] = function(key) {
        userAssert(key, "CONSENT_METADATA macro must contian a key");
        return _this2.consentMetadata_ ? _this2.consentMetadata_[key] : null;
      };
      return macros;
    };
    _proto2.handleRtcForCustomUrls = function handleRtcForCustomUrls(customMacros, checkStillCurrent, element) {
      var _this3 = this;
      (this.rtcConfig_.urls || []).forEach(function(urlObj) {
        var url, errorReportingUrl;
        if (isObject(urlObj)) {
          url = urlObj.url;
          errorReportingUrl = urlObj.errorReportingUrl;
        } else if (typeof urlObj == "string") {
          url = urlObj;
        } else {
          dev().warn(TAG5, "Invalid url: " + urlObj);
        }
        _this3.inflateAndSendRtc_(url, customMacros, errorReportingUrl, checkStillCurrent, void 0, element);
      });
    };
    _proto2.handleRtcForVendorUrls = function handleRtcForVendorUrls(customMacros, checkStillCurrent) {
      var _this4 = this;
      Object.keys(this.rtcConfig_.vendors || []).forEach(function(vendor) {
        var vendorObject = RTC_VENDORS[vendor.toLowerCase()];
        var url = vendorObject ? vendorObject.url : "";
        var errorReportingUrl = vendorObject && vendorObject.errorReportingUrl ? vendorObject.errorReportingUrl : "";
        if (!url) {
          return _this4.promiseArray_.push(_this4.buildErrorResponse_(RTC_ERROR_ENUM.UNKNOWN_VENDOR, vendor, errorReportingUrl));
        }
        var vendorMacros = isObject(_this4.rtcConfig_.vendors[vendor]["macros"]) ? _this4.rtcConfig_.vendors[vendor]["macros"] : _this4.rtcConfig_.vendors[vendor];
        var validVendorMacros = {};
        Object.keys(vendorMacros).forEach(function(macro) {
          if (!(vendorObject.macros && vendorObject.macros.includes(macro))) {
            user().error(TAG5, "Unknown macro: " + macro + " for vendor: " + vendor);
          } else {
            var value = vendorMacros[macro];
            validVendorMacros[macro] = isObject(value) || isArray(value) ? JSON.stringify(value) : value;
          }
        });
        var macros = Object.assign(validVendorMacros, customMacros);
        _this4.inflateAndSendRtc_(url, macros, errorReportingUrl, checkStillCurrent, vendor.toLowerCase());
      });
    };
    _proto2.inflateAndSendRtc_ = function inflateAndSendRtc_(url, macros, errorReportingUrl, checkStillCurrent, opt_vendor, opt_element) {
      var _this5 = this;
      var timeoutMillis = this.rtcConfig_.timeoutMillis;
      var callout = opt_vendor || this.getCalloutParam_(url);
      var send = function send2(url2) {
        if (Object.keys(_this5.seenUrls_).length == MAX_RTC_CALLOUTS) {
          return _this5.buildErrorResponse_(RTC_ERROR_ENUM.MAX_CALLOUTS_EXCEEDED, callout, errorReportingUrl);
        }
        if (!Services.urlForDoc(_this5.ampDoc_).isSecure(url2) && !isAmpScriptUri(url2)) {
          return _this5.buildErrorResponse_(RTC_ERROR_ENUM.INSECURE_URL, callout, errorReportingUrl);
        }
        if (_this5.seenUrls_[url2]) {
          return _this5.buildErrorResponse_(RTC_ERROR_ENUM.DUPLICATE_URL, callout, errorReportingUrl);
        }
        _this5.seenUrls_[url2] = true;
        if (url2.length > MAX_URL_LENGTH2) {
          url2 = _this5.truncUrl_(url2);
        }
        return _this5.sendRtcCallout_(url2, timeoutMillis, callout, checkStillCurrent, errorReportingUrl, opt_element);
      };
      var allowlist = _extends3({}, GLOBAL_MACRO_ALLOWLIST);
      Object.keys(macros).forEach(function(key) {
        return allowlist[key] = true;
      });
      var urlReplacementStartTime = Date.now();
      this.promiseArray_.push(Services.timerFor(this.win_).timeoutPromise(timeoutMillis, Services.urlReplacementsForDoc(this.ampDoc_).expandUrlAsync(url, macros, allowlist)).then(function(url2) {
        checkStillCurrent();
        timeoutMillis -= urlReplacementStartTime - Date.now();
        return send(url2);
      }).catch(function(error) {
        return isCancellation(error) ? void 0 : _this5.buildErrorResponse_(RTC_ERROR_ENUM.MACRO_EXPAND_TIMEOUT, callout, errorReportingUrl);
      }));
    };
    _proto2.truncUrl_ = function truncUrl_(url) {
      url = url.substr(0, MAX_URL_LENGTH2 - 12).replace(/%\w?$/, "");
      return url + "&__trunc__=1";
    };
    _proto2.sendRtcCallout_ = function sendRtcCallout_(url, timeoutMillis, callout, checkStillCurrent, errorReportingUrl, opt_element) {
      var _this6 = this;
      var rtcFetch;
      if (isAmpScriptUri(url)) {
        rtcFetch = Services.scriptForDocOrNull(opt_element).then(function(service) {
          userAssert(service, "AMP-SCRIPT is not installed.");
          return service.fetch(url);
        }).then(function(json) {
          checkStillCurrent();
          var rtcTime = Date.now() - _this6.rtcStartTime_;
          if (typeof json !== "object") {
            return _this6.buildErrorResponse_(RTC_ERROR_ENUM.MALFORMED_JSON_RESPONSE, callout, errorReportingUrl, rtcTime);
          }
          return {
            response: json,
            rtcTime: rtcTime,
            callout: callout
          };
        });
      } else {
        rtcFetch = Services.xhrFor(this.win_).fetchJson(url, {
          credentials: "include"
        }).then(function(res) {
          checkStillCurrent();
          return res.text().then(function(text) {
            checkStillCurrent();
            var rtcTime = Date.now() - _this6.rtcStartTime_;
            if (!text) {
              return {
                rtcTime: rtcTime,
                callout: callout
              };
            }
            var response = tryParseJson(text);
            return response ? {
              response: response,
              rtcTime: rtcTime,
              callout: callout
            } : _this6.buildErrorResponse_(RTC_ERROR_ENUM.MALFORMED_JSON_RESPONSE, callout, errorReportingUrl, rtcTime);
          });
        });
      }
      return Services.timerFor(this.win_).timeoutPromise(timeoutMillis, rtcFetch).catch(function(error) {
        return isCancellation(error) ? void 0 : _this6.buildErrorResponse_(/^timeout/.test(error.message) ? RTC_ERROR_ENUM.TIMEOUT : RTC_ERROR_ENUM.NETWORK_FAILURE, callout, errorReportingUrl, Date.now() - _this6.rtcStartTime_);
      });
    };
    _proto2.execute = function execute(element, customMacros, consentState, consentString, consentMetadata, checkStillCurrent) {
      if (!this.validateRtcConfig_(element)) {
        return;
      }
      this.consentState_ = consentState;
      this.consentString_ = consentString;
      this.consentMetadata_ = consentMetadata;
      this.modifyRtcConfigForConsentStateSettings();
      customMacros = this.assignMacros(customMacros);
      this.rtcStartTime_ = Date.now();
      this.handleRtcForCustomUrls(customMacros, checkStillCurrent, element);
      this.handleRtcForVendorUrls(customMacros, checkStillCurrent);
      return Promise.all(this.promiseArray_);
    };
    _proto2.validateRtcConfig_ = function validateRtcConfig_(element) {
      var _this7 = this;
      var defaultTimeoutMillis = 1e3;
      var unparsedRtcConfig = element.getAttribute("rtc-config");
      if (!unparsedRtcConfig) {
        return false;
      }
      var rtcConfig = tryParseJson(unparsedRtcConfig);
      if (!rtcConfig) {
        user().warn(TAG5, "Could not JSON parse rtc-config attribute");
        return false;
      }
      var timeout;
      try {
        userAssert(rtcConfig["vendors"] || rtcConfig["urls"], "RTC Config must specify vendors or urls");
        Object.keys(rtcConfig).forEach(function(key) {
          switch (key) {
            case "vendors":
              userAssert(isObject(rtcConfig[key]), "RTC invalid vendors");
              break;
            case "urls":
              userAssert(isArray(rtcConfig[key]), "RTC invalid urls");
              break;
            case "timeoutMillis":
              timeout = parseInt(rtcConfig[key], 10);
              if (isNaN(timeout)) {
                user().warn(TAG5, "Invalid RTC timeout is NaN, " + ("using default timeout " + defaultTimeoutMillis + "ms"));
                timeout = void 0;
              } else if (timeout > defaultTimeoutMillis || timeout < 0) {
                user().warn(TAG5, "Invalid RTC timeout: " + timeout + "ms, " + ("using default timeout " + defaultTimeoutMillis + "ms"));
                timeout = void 0;
              }
              break;
            default:
              user().warn(TAG5, "Unknown RTC Config key: " + key);
              break;
          }
        });
        if (!Object.keys(rtcConfig["vendors"] || {}).length && !(rtcConfig["urls"] || []).length) {
          return false;
        }
        var validateErrorReportingUrl = function validateErrorReportingUrl2(urlObj) {
          var errorUrl = urlObj["errorReportingUrl"];
          if (errorUrl && !Services.urlForDoc(_this7.ampDoc_).isSecure(errorUrl)) {
            dev().warn(TAG5, "Insecure RTC errorReportingUrl: " + errorUrl);
            urlObj["errorReportingUrl"] = void 0;
          }
        };
        (rtcConfig["urls"] || []).forEach(function(urlObj) {
          if (isObject(urlObj)) {
            validateErrorReportingUrl(urlObj);
          }
        });
        validateErrorReportingUrl(rtcConfig);
      } catch (unusedErr) {
        return false;
      }
      rtcConfig["timeoutMillis"] = timeout !== void 0 ? timeout : defaultTimeoutMillis;
      this.rtcConfig_ = rtcConfig;
      return true;
    };
    return RealTimeConfigManager2;
  }();
  function installRealTimeConfigServiceForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, "real-time-config", function(doc) {
      return new RealTimeConfigService(doc);
    });
  }

  // src/service/url-expander/expander.js
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
  var PARSER_IGNORE_FLAG = "`";
  var TAG6 = "Expander";
  var Expander = /* @__PURE__ */ function() {
    function Expander2(variableSource, opt_bindings, opt_collectVars, opt_sync, opt_allowlist, opt_noEncode) {
      this.variableSource_ = variableSource;
      this.bindings_ = opt_bindings;
      this.collectVars_ = opt_collectVars;
      this.sync_ = opt_sync;
      this.allowlist_ = opt_allowlist;
      this.encode_ = !opt_noEncode;
    }
    var _proto = Expander2.prototype;
    _proto.expand = function expand(url) {
      if (!url.length) {
        return this.sync_ ? url : Promise.resolve(url);
      }
      var expr = this.variableSource_.getExpr(this.bindings_, this.allowlist_);
      var matches2 = this.findMatches_(url, expr);
      if (!matches2.length) {
        return this.sync_ ? url : Promise.resolve(url);
      }
      return this.parseUrlRecursively_(url, matches2);
    };
    _proto.getMacroNames = function getMacroNames(url) {
      var expr = this.variableSource_.getExpr(this.bindings_, this.allowlist_);
      var matches2 = url.match(expr);
      if (matches2) {
        return matches2;
      }
      return [];
    };
    _proto.findMatches_ = function findMatches_(url, expression) {
      var matches2 = [];
      url.replace(expression, function(match, name, startPosition) {
        var length = match.length;
        var stopPosition = length + startPosition - 1;
        var info = {
          start: startPosition,
          stop: stopPosition,
          name: name,
          length: length
        };
        matches2.push(info);
      });
      return matches2;
    };
    _proto.parseUrlRecursively_ = function parseUrlRecursively_(url, matches2) {
      var _this = this;
      var stack = [];
      var urlIndex = 0;
      var matchIndex = 0;
      var match = matches2[matchIndex];
      var numOfPendingCalls = 0;
      var ignoringChars = false;
      var evaluateNextLevel = function evaluateNextLevel2(encode) {
        var builder = "";
        var results = [];
        var args = [];
        while (urlIndex < url.length && matchIndex <= matches2.length) {
          var trimmedBuilder = builder.trim();
          if (match && urlIndex === match.start) {
            if (trimmedBuilder) {
              results.push(numOfPendingCalls ? trimStart(builder) : builder);
            }
            var binding = void 0;
            if (_this.bindings_ && hasOwn(_this.bindings_, match.name)) {
              binding = {
                name: match.name,
                prioritized: _this.bindings_[match.name],
                encode: encode
              };
            } else {
              binding = _extends4({}, _this.variableSource_.get(match.name), {
                name: match.name,
                encode: encode
              });
            }
            urlIndex = match.stop + 1;
            match = matches2[++matchIndex];
            if (url[urlIndex] === "(") {
              urlIndex++;
              numOfPendingCalls++;
              stack.push(binding);
              results.push(evaluateNextLevel2(false));
            } else {
              results.push(_this.evaluateBinding_(binding));
            }
            builder = "";
          } else if (url[urlIndex] === PARSER_IGNORE_FLAG) {
            if (!ignoringChars) {
              ignoringChars = true;
              if (trimmedBuilder) {
                results.push(trimmedBuilder);
              }
            } else {
              ignoringChars = false;
              if (builder.length) {
                results.push(builder);
              }
            }
            builder = "";
            urlIndex++;
          } else if (numOfPendingCalls && url[urlIndex] === "," && !ignoringChars) {
            if (trimmedBuilder) {
              results.push(trimmedBuilder);
            }
            args.push(results);
            results = [];
            if (url[urlIndex + 1] === ",") {
              args.push([""]);
              urlIndex++;
            }
            builder = "";
            urlIndex++;
          } else if (numOfPendingCalls && url[urlIndex] === ")" && !ignoringChars) {
            urlIndex++;
            numOfPendingCalls--;
            var _binding = stack.pop();
            if (trimmedBuilder) {
              results.push(trimmedBuilder);
            }
            args.push(results);
            var value = _this.evaluateBinding_(_binding, args);
            return value;
          } else {
            builder += url[urlIndex];
            urlIndex++;
          }
          if (urlIndex === url.length && builder.length) {
            results.push(builder);
          }
        }
        if (_this.sync_) {
          return results.join("");
        }
        return Promise.all(results).then(function(promiseArray) {
          return promiseArray.join("");
        }).catch(function(e) {
          rethrowAsync(e);
          return "";
        });
      };
      return evaluateNextLevel(this.encode_);
    };
    _proto.evaluateBinding_ = function evaluateBinding_(bindingInfo, opt_args) {
      var encode = bindingInfo.encode, name = bindingInfo.name;
      var binding;
      if (bindingInfo.prioritized != void 0) {
        binding = bindingInfo.prioritized;
      } else if (this.sync_ && bindingInfo.sync != void 0) {
        binding = bindingInfo.sync;
      } else if (this.sync_) {
        user().error(TAG6, "ignoring async replacement key: ", bindingInfo.name);
        binding = "";
      } else {
        binding = bindingInfo.async || bindingInfo.sync;
      }
      if (this.sync_) {
        var result = this.evaluateBindingSync_(binding, name, opt_args);
        return encode ? encodeURIComponent(result) : result;
      } else {
        return this.evaluateBindingAsync_(binding, name, opt_args).then(function(result2) {
          return encode ? encodeURIComponent(result2) : result2;
        });
      }
    };
    _proto.evaluateBindingAsync_ = function evaluateBindingAsync_(binding, name, opt_args) {
      var _this2 = this;
      var value;
      try {
        if (typeof binding === "function") {
          var bindingFunc = binding;
          if (opt_args) {
            value = this.processArgsAsync_(opt_args).then(function(args) {
              return bindingFunc.apply(null, args);
            });
          } else {
            value = tryResolve(bindingFunc);
          }
        } else {
          value = Promise.resolve(binding);
        }
        return value.then(function(val) {
          _this2.maybeCollectVars_(name, val, opt_args);
          var result;
          if (val == null) {
            result = "";
          } else {
            result = val;
          }
          return result;
        }).catch(function(e) {
          rethrowAsync(e);
          _this2.maybeCollectVars_(name, "", opt_args);
          return Promise.resolve("");
        });
      } catch (e) {
        rethrowAsync(e);
        this.maybeCollectVars_(name, "", opt_args);
        return Promise.resolve("");
      }
    };
    _proto.processArgsAsync_ = function processArgsAsync_(argsArray) {
      return Promise.all(argsArray.map(function(argArray) {
        return Promise.all(argArray).then(function(resolved3) {
          return resolved3.join("");
        });
      }));
    };
    _proto.evaluateBindingSync_ = function evaluateBindingSync_(binding, name, opt_args) {
      try {
        var value = binding;
        if (typeof binding === "function") {
          value = binding.apply(null, this.processArgsSync_(opt_args));
        }
        var result;
        if (value && typeof value.then == "function") {
          user().error(TAG6, "ignoring async macro resolution");
          result = "";
        } else if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
          this.maybeCollectVars_(name, value, opt_args);
          result = value.toString();
        } else {
          this.maybeCollectVars_(name, "", opt_args);
          result = "";
        }
        return result;
      } catch (e) {
        rethrowAsync(e);
        this.maybeCollectVars_(name, "", opt_args);
        return "";
      }
    };
    _proto.processArgsSync_ = function processArgsSync_(argsArray) {
      if (!argsArray) {
        return argsArray;
      }
      return argsArray.map(function(argArray) {
        return argArray.join("");
      });
    };
    _proto.maybeCollectVars_ = function maybeCollectVars_(name, value, opt_args) {
      if (!this.collectVars_) {
        return;
      }
      var args = "";
      if (opt_args) {
        var rawArgs = opt_args.filter(function(arg) {
          return arg !== "";
        }).join(",");
        args = "(" + rawArgs + ")";
      }
      this.collectVars_["" + name + args] = value || "";
    };
    return Expander2;
  }();

  // src/service/url-replacements-impl.js
  function _inherits(subClass2, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass2.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass2, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass2, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
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
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  var TAG7 = "UrlReplacements";
  var EXPERIMENT_DELIMITER = "!";
  var VARIANT_DELIMITER = ".";
  var GEO_DELIM = ",";
  var ORIGINAL_HREF_PROPERTY = "amp-original-href";
  var ORIGINAL_VALUE_PROPERTY = "amp-original-value";
  function dateMethod(method) {
    return function() {
      return new Date()[method]();
    };
  }
  function screenProperty(screen, property) {
    return function() {
      return screen[property];
    };
  }
  function geoData(geo, geoType) {
    if (geoType) {
      userAssert(geoType === "ISOCountry", "The value passed to AMP_GEO() is not valid name:" + geoType);
      return geo && geo[geoType] || "unknown";
    }
    return (geo == null ? void 0 : geo.matchedISOCountryGroups.join(GEO_DELIM)) || "unknown";
  }
  var GlobalVariableSource = /* @__PURE__ */ function(_VariableSource) {
    _inherits(GlobalVariableSource2, _VariableSource);
    var _super = _createSuper(GlobalVariableSource2);
    function GlobalVariableSource2(ampdoc2) {
      var _this;
      _this = _super.call(this, ampdoc2);
      _this.cachedGeo_ = null;
      return _this;
    }
    var _proto = GlobalVariableSource2.prototype;
    _proto.setTimingResolver_ = function setTimingResolver_(varName, startEvent, endEvent) {
      var _this2 = this;
      return this.setBoth(varName, function() {
        return getTimingDataSync(_this2.ampdoc.win, startEvent, endEvent);
      }, function() {
        return getTimingDataAsync(_this2.ampdoc.win, startEvent, endEvent);
      });
    };
    _proto.initialize = function initialize() {
      var _this3 = this;
      var win = this.ampdoc.win;
      var element = this.ampdoc.getHeadNode();
      var viewport = Services.viewportForDoc(this.ampdoc);
      Services.geoForDocOrNull(this.ampdoc).then(function(geo) {
        _this3.cachedGeo_ = geo;
      });
      this.set("RANDOM", function() {
        return Math.random();
      });
      var counterStore = Object.create(null);
      this.set("COUNTER", function(scope) {
        return counterStore[scope] = (counterStore[scope] | 0) + 1;
      });
      this.set("CANONICAL_URL", function() {
        return _this3.getDocInfo_().canonicalUrl;
      });
      this.set("CANONICAL_HOST", function() {
        return parseUrlDeprecated(_this3.getDocInfo_().canonicalUrl).host;
      });
      this.set("CANONICAL_HOSTNAME", function() {
        return parseUrlDeprecated(_this3.getDocInfo_().canonicalUrl).hostname;
      });
      this.set("CANONICAL_PATH", function() {
        return parseUrlDeprecated(_this3.getDocInfo_().canonicalUrl).pathname;
      });
      this.setAsync("DOCUMENT_REFERRER", function() {
        return Services.viewerForDoc(_this3.ampdoc).getReferrerUrl();
      });
      this.setAsync("EXTERNAL_REFERRER", function() {
        return Services.viewerForDoc(_this3.ampdoc).getReferrerUrl().then(function(referrer) {
          if (!referrer) {
            return null;
          }
          var referrerHostname = parseUrlDeprecated(getSourceUrl(referrer)).hostname;
          var currentHostname = WindowInterface.getHostname(win);
          return referrerHostname === currentHostname ? null : referrer;
        });
      });
      this.set("TITLE", function() {
        var doc = win.document;
        return doc["originalTitle"] || doc.title;
      });
      this.set("AMPDOC_URL", function() {
        return removeFragment(_this3.addReplaceParamsIfMissing_(win.location.href));
      });
      this.set("AMPDOC_HOST", function() {
        var url = parseUrlDeprecated(win.location.href);
        return url && url.host;
      });
      this.set("AMPDOC_HOSTNAME", function() {
        var url = parseUrlDeprecated(win.location.href);
        return url && url.hostname;
      });
      var expandSourceUrl = function expandSourceUrl2() {
        var docInfo = _this3.getDocInfo_();
        return removeFragment(_this3.addReplaceParamsIfMissing_(docInfo.sourceUrl));
      };
      this.setBoth("SOURCE_URL", function() {
        return expandSourceUrl();
      }, function() {
        return getTrackImpressionPromise().then(function() {
          return expandSourceUrl();
        });
      });
      this.set("SOURCE_HOST", function() {
        return parseUrlDeprecated(_this3.getDocInfo_().sourceUrl).host;
      });
      this.set("SOURCE_HOSTNAME", function() {
        return parseUrlDeprecated(_this3.getDocInfo_().sourceUrl).hostname;
      });
      this.set("SOURCE_PATH", function() {
        return parseUrlDeprecated(_this3.getDocInfo_().sourceUrl).pathname;
      });
      this.set("PAGE_VIEW_ID", function() {
        return _this3.getDocInfo_().pageViewId;
      });
      this.setAsync("PAGE_VIEW_ID_64", function() {
        return _this3.getDocInfo_().pageViewId64;
      });
      this.setBoth("QUERY_PARAM", function(param, defaultValue) {
        if (defaultValue === void 0) {
          defaultValue = "";
        }
        return _this3.getQueryParamData_(param, defaultValue);
      }, function(param, defaultValue) {
        if (defaultValue === void 0) {
          defaultValue = "";
        }
        return getTrackImpressionPromise().then(function() {
          return _this3.getQueryParamData_(param, defaultValue);
        });
      });
      this.set("FRAGMENT_PARAM", function(param, defaultValue) {
        if (defaultValue === void 0) {
          defaultValue = "";
        }
        return _this3.getFragmentParamData_(param, defaultValue);
      });
      var clientIds = null;
      this.setBoth("CLIENT_ID", function(scope) {
        if (!clientIds) {
          return null;
        }
        return clientIds[scope];
      }, function(scope, opt_userNotificationId, opt_cookieName, opt_disableBackup) {
        userAssert(scope, "The first argument to CLIENT_ID, the fallback Cookie name, is required");
        var consent = resolvedPromise();
        if (opt_userNotificationId) {
          consent = Services.userNotificationManagerForDoc(element).then(function(service) {
            return service.get(opt_userNotificationId);
          });
        }
        return Services.cidForDoc(_this3.ampdoc).then(function(cid) {
          opt_disableBackup = opt_disableBackup == "true" ? true : false;
          return cid.get({
            scope: scope,
            createCookieIfNotPresent: true,
            cookieName: opt_cookieName || void 0,
            disableBackup: opt_disableBackup
          }, consent);
        }).then(function(cid) {
          if (!clientIds) {
            clientIds = Object.create(null);
          }
          var cookieName = opt_cookieName || scope;
          if (cid && cookieName == "_ga") {
            if (typeof cid === "string") {
              cid = extractClientIdFromGaCookie(cid);
            } else {
              dev().error(TAG7, "non-string cid, what is it?", Object.keys(cid));
            }
          }
          clientIds[scope] = cid;
          return cid;
        });
      });
      this.setAsync("VARIANT", function(experiment) {
        return _this3.getVariantsValue_(function(variants) {
          var variant = variants[experiment];
          userAssert(variant !== void 0, "The value passed to VARIANT() is not a valid experiment in <amp-experiment>:" + experiment);
          return variant === null ? "none" : variant;
        }, "VARIANT");
      });
      this.setAsync("VARIANTS", function() {
        return _this3.getVariantsValue_(function(variants) {
          var experiments = [];
          for (var experiment in variants) {
            var variant = variants[experiment];
            experiments.push(experiment + VARIANT_DELIMITER + (variant || "none"));
          }
          return experiments.join(EXPERIMENT_DELIMITER);
        }, "VARIANTS");
      });
      this.setBoth("AMP_GEO", function(geoType) {
        return geoData(_this3.cachedGeo_, geoType);
      }, function(geoType) {
        return _this3.getGeo_(function(geo) {
          return geoData(geo, geoType);
        }, "AMP_GEO");
      });
      this.set("TIMESTAMP", dateMethod("getTime"));
      this.set("TIMESTAMP_ISO", dateMethod("toISOString"));
      this.set("TIMEZONE", dateMethod("getTimezoneOffset"));
      this.set("SCROLL_HEIGHT", function() {
        return viewport.getScrollHeight();
      });
      this.set("SCROLL_WIDTH", function() {
        return viewport.getScrollWidth();
      });
      this.set("VIEWPORT_HEIGHT", function() {
        return viewport.getHeight();
      });
      this.set("VIEWPORT_WIDTH", function() {
        return viewport.getWidth();
      });
      var screen = win.screen;
      this.set("SCREEN_WIDTH", screenProperty(screen, "width"));
      this.set("SCREEN_HEIGHT", screenProperty(screen, "height"));
      this.set("AVAILABLE_SCREEN_HEIGHT", screenProperty(screen, "availHeight"));
      this.set("AVAILABLE_SCREEN_WIDTH", screenProperty(screen, "availWidth"));
      this.set("SCREEN_COLOR_DEPTH", screenProperty(screen, "colorDepth"));
      this.set("DOCUMENT_CHARSET", function() {
        var doc = win.document;
        return doc.characterSet || doc.charset;
      });
      this.set("BROWSER_LANGUAGE", function() {
        var nav = win.navigator;
        return (nav.language || nav["userLanguage"] || nav.browserLanguage || "").toLowerCase();
      });
      this.set("USER_AGENT", function() {
        return win.navigator.userAgent;
      });
      this.setAsync("UACH", function(variable) {
        var _win$navigator, _win$navigator$userAg, _win$navigator$userAg2;
        return ((_win$navigator = win.navigator) == null ? void 0 : (_win$navigator$userAg = _win$navigator.userAgentData) == null ? void 0 : (_win$navigator$userAg2 = _win$navigator$userAg.getHighEntropyValues([variable])) == null ? void 0 : _win$navigator$userAg2.then(function(values) {
          return typeof values[variable] !== "object" ? values[variable] : JSON.stringify(values[variable]);
        })) || Promise.resolve("");
      });
      this.setTimingResolver_("PAGE_LOAD_TIME", "navigationStart", "loadEventStart");
      this.setTimingResolver_("DOMAIN_LOOKUP_TIME", "domainLookupStart", "domainLookupEnd");
      this.setTimingResolver_("TCP_CONNECT_TIME", "connectStart", "connectEnd");
      this.setTimingResolver_("SERVER_RESPONSE_TIME", "requestStart", "responseStart");
      this.setTimingResolver_("PAGE_DOWNLOAD_TIME", "responseStart", "responseEnd");
      this.setTimingResolver_("REDIRECT_TIME", "navigationStart", "fetchStart");
      this.setTimingResolver_("DOM_INTERACTIVE_TIME", "navigationStart", "domInteractive");
      this.setTimingResolver_("CONTENT_LOAD_TIME", "navigationStart", "domContentLoadedEventStart");
      this.setAsync("ACCESS_READER_ID", function() {
        return _this3.getAccessValue_(function(accessService) {
          return accessService.getAccessReaderId();
        }, "ACCESS_READER_ID");
      });
      this.setAsync("AUTHDATA", function(field) {
        userAssert(field, "The first argument to AUTHDATA, the field, is required");
        return _this3.getAccessValue_(function(accessService) {
          return accessService.getAuthdataField(field);
        }, "AUTHDATA");
      });
      this.setAsync("VIEWER", function() {
        return Services.viewerForDoc(_this3.ampdoc).getViewerOrigin().then(function(viewer) {
          return viewer == void 0 ? "" : viewer;
        });
      });
      this.setAsync("TOTAL_ENGAGED_TIME", function() {
        return Services.activityForDoc(element).then(function(activity) {
          return activity.getTotalEngagedTime();
        });
      });
      this.setAsync("INCREMENTAL_ENGAGED_TIME", function(name, reset) {
        return Services.activityForDoc(element).then(function(activity) {
          return activity.getIncrementalEngagedTime(name, reset !== "false");
        });
      });
      this.set("NAV_TIMING", function(startAttribute, endAttribute) {
        userAssert(startAttribute, "The first argument to NAV_TIMING, the start attribute name, is required");
        return getTimingDataSync(win, startAttribute, endAttribute);
      });
      this.setAsync("NAV_TIMING", function(startAttribute, endAttribute) {
        userAssert(startAttribute, "The first argument to NAV_TIMING, the start attribute name, is required");
        return getTimingDataAsync(win, startAttribute, endAttribute);
      });
      this.set("NAV_TYPE", function() {
        return getNavigationData(win, "type");
      });
      this.set("NAV_REDIRECT_COUNT", function() {
        return getNavigationData(win, "redirectCount");
      });
      this.set("AMP_VERSION", function() {
        return version();
      });
      this.set("BACKGROUND_STATE", function() {
        return _this3.ampdoc.isVisible() ? "0" : "1";
      });
      this.setAsync("VIDEO_STATE", function(id, property) {
        return Services.videoManagerForDoc(_this3.ampdoc).getVideoStateProperty(id, property);
      });
      this.setAsync("AMP_STATE", function(key) {
        var root = _this3.ampdoc.getRootNode();
        var element2 = root.documentElement || root;
        return Services.bindForDocOrNull(element2).then(function(bind) {
          if (!bind) {
            return "";
          }
          return bind.getStateValue(key) || "";
        });
      });
    };
    _proto.addReplaceParamsIfMissing_ = function addReplaceParamsIfMissing_(orig) {
      var _this$getDocInfo_ = this.getDocInfo_(), replaceParams = _this$getDocInfo_.replaceParams;
      if (!replaceParams) {
        return orig;
      }
      return addMissingParamsToUrl(removeAmpJsParamsFromUrl(orig), replaceParams);
    };
    _proto.getDocInfo_ = function getDocInfo_() {
      return Services.documentInfoForDoc(this.ampdoc);
    };
    _proto.getAccessValue_ = function getAccessValue_(getter, expr) {
      var element = this.ampdoc.getHeadNode();
      return Promise.all([Services.accessServiceForDocOrNull(element), Services.subscriptionsServiceForDocOrNull(element)]).then(function(services) {
        var accessService = services[0];
        var subscriptionService = services[1];
        var service = accessService || subscriptionService;
        if (!service) {
          user().error(TAG7, "Access or subsciptions service is not installed to access: ", expr);
          return null;
        }
        if (accessService && subscriptionService) {
          return getter(subscriptionService) || getter(accessService);
        }
        return getter(service);
      });
    };
    _proto.getQueryParamData_ = function getQueryParamData_(param, defaultValue) {
      userAssert(param, "The first argument to QUERY_PARAM, the query string param is required");
      var url = parseUrlDeprecated(removeAmpJsParamsFromUrl(this.ampdoc.win.location.href));
      var params = parseQueryString(url.search);
      var _this$getDocInfo_2 = this.getDocInfo_(), replaceParams = _this$getDocInfo_2.replaceParams;
      if (typeof params[param] !== "undefined") {
        return params[param];
      }
      if (replaceParams && typeof replaceParams[param] !== "undefined") {
        return replaceParams[param];
      }
      return defaultValue;
    };
    _proto.getFragmentParamData_ = function getFragmentParamData_(param, defaultValue) {
      userAssert(param, "The first argument to FRAGMENT_PARAM, the fragment string param is required");
      userAssert(typeof param == "string", "param should be a string");
      var params = getHashParams(this.ampdoc.win);
      return params[param] === void 0 ? defaultValue : params[param];
    };
    _proto.getVariantsValue_ = function getVariantsValue_(getter, expr) {
      return Services.variantsForDocOrNull(this.ampdoc.getHeadNode()).then(function(variants) {
        userAssert(variants, "To use variable %s, amp-experiment should be configured", expr);
        return variants.getVariants();
      }).then(function(variantsMap) {
        return getter(variantsMap);
      });
    };
    _proto.getGeo_ = function getGeo_(getter, expr) {
      var _this4 = this;
      if (this.cachedGeo_ !== null) {
        return getter(this.cachedGeo_);
      }
      return Services.geoForDocOrNull(this.ampdoc.getHeadNode()).then(function(geo) {
        userAssert(geo, "To use variable %s, amp-geo should be configured", expr);
        _this4.cachedGeo_ = geo;
        return getter(geo);
      });
    };
    return GlobalVariableSource2;
  }(VariableSource);
  var UrlReplacements = /* @__PURE__ */ function() {
    function UrlReplacements2(ampdoc2, variableSource) {
      this.ampdoc = ampdoc2;
      this.variableSource_ = variableSource;
    }
    var _proto2 = UrlReplacements2.prototype;
    _proto2.expandStringSync = function expandStringSync(source, opt_bindings, opt_allowlist) {
      return new Expander(this.variableSource_, opt_bindings, void 0, true, opt_allowlist, true).expand(source);
    };
    _proto2.expandStringAsync = function expandStringAsync(source, opt_bindings, opt_allowlist) {
      return new Expander(this.variableSource_, opt_bindings, void 0, void 0, opt_allowlist, true).expand(source);
    };
    _proto2.expandUrlSync = function expandUrlSync(url, opt_bindings, opt_allowlist) {
      return this.ensureProtocolMatches_(url, new Expander(this.variableSource_, opt_bindings, void 0, true, opt_allowlist).expand(url));
    };
    _proto2.expandUrlAsync = function expandUrlAsync(url, opt_bindings, opt_allowlist, opt_noEncode) {
      var _this5 = this;
      return new Expander(this.variableSource_, opt_bindings, void 0, void 0, opt_allowlist, opt_noEncode).expand(url).then(function(replacement) {
        return _this5.ensureProtocolMatches_(url, replacement);
      });
    };
    _proto2.expandInputValueAsync = function expandInputValueAsync(element) {
      return this.expandInputValue_(element, false);
    };
    _proto2.expandInputValueSync = function expandInputValueSync(element) {
      return this.expandInputValue_(element, true);
    };
    _proto2.expandInputValue_ = function expandInputValue_(element, opt_sync) {
      devAssert2(element.tagName == "INPUT" && (element.getAttribute("type") || "").toLowerCase() == "hidden", "Input value expansion only works on hidden input fields: %s", element);
      var allowlist = this.getAllowlistForElement_(element);
      if (!allowlist) {
        return opt_sync ? element.value : Promise.resolve(element.value);
      }
      if (element[ORIGINAL_VALUE_PROPERTY] === void 0) {
        element[ORIGINAL_VALUE_PROPERTY] = element.value;
      }
      var result = new Expander(this.variableSource_, void 0, void 0, opt_sync, allowlist).expand(element[ORIGINAL_VALUE_PROPERTY] || element.value);
      if (opt_sync) {
        return element.value = result;
      }
      return result.then(function(newValue) {
        element.value = newValue;
        return newValue;
      });
    };
    _proto2.getAllowlistForElement_ = function getAllowlistForElement_(element, opt_supportedReplacement) {
      var allowlist = element.getAttribute("data-amp-replace");
      if (!allowlist) {
        return;
      }
      var requestedReplacements = {};
      allowlist.trim().split(/\s+/).forEach(function(replacement) {
        if (!opt_supportedReplacement || hasOwn(opt_supportedReplacement, replacement)) {
          requestedReplacements[replacement] = true;
        } else {
          user().warn("URL", "Ignoring unsupported replacement", replacement);
        }
      });
      return requestedReplacements;
    };
    _proto2.isAllowedOrigin_ = function isAllowedOrigin_(url) {
      var docInfo = Services.documentInfoForDoc(this.ampdoc);
      if (url.origin == parseUrlDeprecated(docInfo.canonicalUrl).origin || url.origin == parseUrlDeprecated(docInfo.sourceUrl).origin) {
        return true;
      }
      var meta = this.ampdoc.getMetaByName("amp-link-variable-allowed-origin");
      if (meta) {
        var allowlist = meta.trim().split(/\s+/);
        for (var i = 0; i < allowlist.length; i++) {
          if (url.origin == parseUrlDeprecated(allowlist[i]).origin) {
            return true;
          }
        }
      }
      return false;
    };
    _proto2.maybeExpandLink = function maybeExpandLink(element, defaultUrlParams) {
      devAssert2(element.tagName == "A");
      var aElement = element;
      var supportedReplacements = {
        "CLIENT_ID": true,
        "QUERY_PARAM": true,
        "PAGE_VIEW_ID": true,
        "PAGE_VIEW_ID_64": true,
        "NAV_TIMING": true
      };
      var additionalUrlParameters = aElement.getAttribute("data-amp-addparams") || "";
      var allowlist = this.getAllowlistForElement_(aElement, supportedReplacements);
      if (!allowlist && !additionalUrlParameters && !defaultUrlParams) {
        return;
      }
      var href = dev().assertString(aElement[ORIGINAL_HREF_PROPERTY] || aElement.getAttribute("href"));
      var url = parseUrlDeprecated(href);
      if (aElement[ORIGINAL_HREF_PROPERTY] == null) {
        aElement[ORIGINAL_HREF_PROPERTY] = href;
      }
      var isAllowedOrigin = this.isAllowedOrigin_(url);
      if (additionalUrlParameters) {
        additionalUrlParameters = isAllowedOrigin ? this.expandSyncIfAllowedList_(additionalUrlParameters, allowlist) : additionalUrlParameters;
        href = addParamsToUrl(href, parseQueryString(additionalUrlParameters));
      }
      if (!isAllowedOrigin) {
        if (allowlist) {
          user().warn("URL", "Ignoring link replacement %s because the link does not go to the document's source, canonical, or allowlisted origin.", href);
        }
        return aElement.href = href;
      }
      if (defaultUrlParams) {
        if (!allowlist || !allowlist["QUERY_PARAM"]) {
          var overrideAllowlist = {
            "QUERY_PARAM": true
          };
          defaultUrlParams = this.expandUrlSync(defaultUrlParams, void 0, overrideAllowlist);
        }
        href = addParamsToUrl(href, parseQueryString(defaultUrlParams));
      }
      href = this.expandSyncIfAllowedList_(href, allowlist);
      return aElement.href = href;
    };
    _proto2.expandSyncIfAllowedList_ = function expandSyncIfAllowedList_(href, allowlist) {
      return allowlist ? this.expandUrlSync(href, void 0, allowlist) : href;
    };
    _proto2.collectVars = function collectVars(url, opt_bindings) {
      var vars = Object.create(null);
      return new Expander(this.variableSource_, opt_bindings, vars).expand(url).then(function() {
        return vars;
      });
    };
    _proto2.collectDisallowedVarsSync = function collectDisallowedVarsSync(element) {
      var url = element.getAttribute("src");
      var macroNames = new Expander(this.variableSource_).getMacroNames(url);
      var allowlist = this.getAllowlistForElement_(element);
      if (allowlist) {
        return macroNames.filter(function(v) {
          return !allowlist[v];
        });
      } else {
        return macroNames;
      }
    };
    _proto2.ensureProtocolMatches_ = function ensureProtocolMatches_(url, replacement) {
      var newProtocol = parseUrlDeprecated(replacement, true).protocol;
      var oldProtocol = parseUrlDeprecated(url, true).protocol;
      if (newProtocol != oldProtocol) {
        user().error(TAG7, "Illegal replacement of the protocol: ", url);
        return url;
      }
      userAssert(isProtocolValid(replacement), "The replacement url has invalid protocol: %s", replacement);
      return replacement;
    };
    _proto2.getVariableSource = function getVariableSource() {
      return this.variableSource_;
    };
    return UrlReplacements2;
  }();
  function extractClientIdFromGaCookie(gaCookie) {
    return gaCookie.replace(/^(GA1|1)\.[\d-]+\./, "");
  }
  function installUrlReplacementsServiceForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, "url-replace", function(doc) {
      return new UrlReplacements(doc, new GlobalVariableSource(doc));
    });
  }
  function installUrlReplacementsForEmbed(ampdoc2, varSource) {
    installServiceInEmbedDoc(ampdoc2, "url-replace", new UrlReplacements(ampdoc2, varSource));
  }

  // src/utils/dom-writer.js
  function removeNoScriptElements(parent) {
    var noscriptElements = childElementsByTag(parent, "noscript");
    iterateCursor(noscriptElements, function(element) {
      removeElement(element);
    });
  }

  // src/utils/dom-tranform-stream.js
  var DEFAULT_TRANSFER_THROTTLE_FUNC = function DEFAULT_TRANSFER_THROTTLE_FUNC2(cb) {
    return Promise.resolve(cb());
  };
  var DomTransformStream = /* @__PURE__ */ function() {
    function DomTransformStream2(win, opt_transferThrottleFunc) {
      var headDefer = new Deferred();
      this.headPromise_ = headDefer.promise;
      this.headResolver_ = headDefer.resolve;
      var transferDefer = new Deferred();
      this.bodyTransferPromise_ = transferDefer.promise;
      this.bodyTransferResolver_ = transferDefer.resolve;
      this.detachedBody_ = null;
      var targetBodyDefer = new Deferred();
      this.targetBodyPromise_ = targetBodyDefer.promise;
      this.targetBodyResolver_ = targetBodyDefer.resolve;
      this.currentChunkTransferPromise_ = null;
      this.shouldTransfer_ = false;
      this.transferThrottle_ = opt_transferThrottleFunc || DEFAULT_TRANSFER_THROTTLE_FUNC;
    }
    var _proto = DomTransformStream2.prototype;
    _proto.onChunk = function onChunk(detachedDoc) {
      if (!this.detachedBody_ && detachedDoc.body) {
        this.detachedBody_ = detachedDoc.body;
        this.headResolver_(devAssertElement(detachedDoc.head));
      }
      if (this.shouldTransfer_) {
        this.transferBodyChunk_();
      }
    };
    _proto.onEnd = function onEnd(unusedCompleteDoc) {
      this.bodyTransferResolver_(this.transferBodyChunk_());
    };
    _proto.waitForHead = function waitForHead() {
      return this.headPromise_;
    };
    _proto.transferBody = function transferBody(targetBody) {
      var _this = this;
      devAssertElement(targetBody, "No target body given to DomTransformStream.transferBody");
      devAssert(!this.shouldTransfer_, "DomTransformStream.transferBody should only be called once");
      this.shouldTransfer_ = true;
      this.targetBodyResolver_(targetBody);
      this.headPromise_.then(function() {
        var attrs = _this.detachedBody_.attributes;
        for (var i = 0; i < attrs.length; i++) {
          var _attrs$i = attrs[i], name = _attrs$i.name, value = _attrs$i.value;
          targetBody.setAttribute(name, value);
        }
      });
      this.transferBodyChunk_();
      return this.bodyTransferPromise_;
    };
    _proto.transferBodyChunk_ = function transferBodyChunk_() {
      var _this2 = this;
      if (this.currentChunkTransferPromise_) {
        return this.currentChunkTransferPromise_;
      }
      this.currentChunkTransferPromise_ = Promise.all([this.targetBodyPromise_, this.headPromise_]).then(function(resolvedElements) {
        var transferThrottle = _this2.transferThrottle_;
        return transferThrottle(function() {
          _this2.currentChunkTransferPromise_ = null;
          var targetBody = resolvedElements[0];
          removeNoScriptElements(devAssertElement(_this2.detachedBody_));
          while (_this2.detachedBody_.firstChild) {
            targetBody.appendChild(_this2.detachedBody_.firstChild);
          }
        });
      });
      return this.currentChunkTransferPromise_;
    };
    return DomTransformStream2;
  }();

  // extensions/amp-a4a/0.1/a4a-variable-source.js
  function _inherits2(subClass2, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass2.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass2, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf2(subClass2, superClass);
  }
  function _setPrototypeOf2(o, p) {
    _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
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
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf2(o);
  }
  var ALLOWLISTED_VARIABLES = ["AMPDOC_HOST", "AMPDOC_HOSTNAME", "AMPDOC_URL", "AMP_VERSION", "AVAILABLE_SCREEN_HEIGHT", "AVAILABLE_SCREEN_WIDTH", "BACKGROUND_STATE", "BROWSER_LANGUAGE", "CANONICAL_HOST", "CANONICAL_HOSTNAME", "CANONICAL_PATH", "CANONICAL_URL", "COUNTER", "DOCUMENT_CHARSET", "DOCUMENT_REFERRER", "PAGE_VIEW_ID", "RANDOM", "SCREEN_COLOR_DEPTH", "SCREEN_HEIGHT", "SCREEN_WIDTH", "SCROLL_HEIGHT", "SCROLL_WIDTH", "SOURCE_HOST", "SOURCE_HOSTNAME", "SOURCE_PATH", "SOURCE_URL", "TIMESTAMP", "TIMEZONE", "TITLE", "TOTAL_ENGAGED_TIME", "USER_AGENT", "VARIANT", "VARIANTS", "VIEWER", "VIEWPORT_HEIGHT", "VIEWPORT_WIDTH"];
  var A4AVariableSource = /* @__PURE__ */ function(_VariableSource) {
    _inherits2(A4AVariableSource2, _VariableSource);
    var _super = _createSuper2(A4AVariableSource2);
    function A4AVariableSource2(parentAmpdoc, embedWin) {
      var _this;
      _this = _super.call(this, parentAmpdoc);
      var headNode = parentAmpdoc.getHeadNode();
      var urlReplacements = Services.urlReplacementsForDoc(headNode);
      _this.globalVariableSource_ = urlReplacements.getVariableSource();
      _this.win_ = embedWin;
      return _this;
    }
    var _proto = A4AVariableSource2.prototype;
    _proto.initialize = function initialize() {
      var _this2 = this;
      for (var v = 0; v < ALLOWLISTED_VARIABLES.length; v++) {
        var varName = ALLOWLISTED_VARIABLES[v];
        var resolvers = this.globalVariableSource_.get(varName);
        this.set(varName, resolvers.sync).setAsync(varName, resolvers.async);
      }
      this.set("NAV_TIMING", function(startAttribute, endAttribute) {
        userAssert(startAttribute, "The first argument to NAV_TIMING, the start attribute name, is required");
        return getTimingDataSync(_this2.win_, startAttribute, endAttribute);
      }).setAsync("NAV_TIMING", function(startAttribute, endAttribute) {
        userAssert(startAttribute, "The first argument to NAV_TIMING, the start attribute name, is required");
        return getTimingDataAsync(_this2.win_, startAttribute, endAttribute);
      });
      this.set("NAV_TYPE", function() {
        return getNavigationData(_this2.win_, "type");
      });
      this.set("NAV_REDIRECT_COUNT", function() {
        return getNavigationData(_this2.win_, "redirectCount");
      });
      this.set("HTML_ATTR", this.htmlAttributeBinding_.bind(this));
      this.set("CLIENT_ID", function() {
        return null;
      });
    };
    _proto.htmlAttributeBinding_ = function htmlAttributeBinding_(cssSelector, var_args) {
      var HTML_ATTR_MAX_ELEMENTS_TO_TRAVERSE = 20;
      var HTML_ATTR_MAX_ELEMENTS_TO_RETURN = 10;
      var HTML_ATTR_MAX_ATTRS = 10;
      var TAG17 = "A4AVariableSource";
      var attributeNames = Array.prototype.slice.call(arguments, 1);
      if (!cssSelector || !attributeNames.length) {
        return "[]";
      }
      if (attributeNames.length > HTML_ATTR_MAX_ATTRS) {
        user().error(TAG17, "At most " + HTML_ATTR_MAX_ATTRS + " may be requested.");
        return "[]";
      }
      cssSelector = decodeURI(cssSelector);
      var elements2;
      try {
        elements2 = this.win_.document.querySelectorAll(cssSelector);
      } catch (e) {
        user().error(TAG17, "Invalid selector: " + cssSelector);
        return "[]";
      }
      if (elements2.length > HTML_ATTR_MAX_ELEMENTS_TO_TRAVERSE) {
        user().error(TAG17, "CSS selector may match at most " + (HTML_ATTR_MAX_ELEMENTS_TO_TRAVERSE + " elements."));
        return "[]";
      }
      var result = [];
      for (var i = 0; i < elements2.length && result.length < HTML_ATTR_MAX_ELEMENTS_TO_RETURN; ++i) {
        var currentResult = {};
        var foundAtLeastOneAttr = false;
        for (var j = 0; j < attributeNames.length; ++j) {
          var attributeName = attributeNames[j];
          if (elements2[i].hasAttribute(attributeName)) {
            currentResult[attributeName] = elements2[i].getAttribute(attributeName);
            foundAtLeastOneAttr = true;
          }
        }
        if (foundAtLeastOneAttr) {
          result.push(currentResult);
        }
      }
      return JSON.stringify(result);
    };
    return A4AVariableSource2;
  }(VariableSource);

  // extensions/amp-a4a/0.1/amp-ad-utils.js
  function getExtensionsFromMetadata(creativeMetadata) {
    var parsedExtensions = [];
    var extensions = creativeMetadata.extensions;
    if (!extensions || !isArray(extensions)) {
      return parsedExtensions;
    }
    for (var i = 0; i < extensions.length; i++) {
      var extension = extensions[i];
      var extensionData = parseExtensionUrl(extension.src);
      if (extensionData) {
        parsedExtensions.push(extensionData);
      }
    }
    return parsedExtensions;
  }

  // src/core/constants/visibility-state.js
  var VisibilityState_Enum = {
    PRERENDER: "prerender",
    VISIBLE: "visible",
    HIDDEN: "hidden",
    PAUSED: "paused",
    INACTIVE: "inactive"
  };

  // src/core/data-structures/signals.js
  var Signals = /* @__PURE__ */ function() {
    function Signals2() {
      this.map_ = map();
      this.promiseMap_ = null;
    }
    var _proto = Signals2.prototype;
    _proto.get = function get(name) {
      var v = this.map_[name];
      return v == null ? null : v;
    };
    _proto.whenSignal = function whenSignal(name) {
      var _this$promiseMap_;
      var promiseStruct = (_this$promiseMap_ = this.promiseMap_) == null ? void 0 : _this$promiseMap_[name];
      if (!promiseStruct) {
        var result = this.map_[name];
        if (result != null) {
          var promise = typeof result == "number" ? Promise.resolve(result) : Promise.reject(result);
          promiseStruct = {
            promise: promise
          };
        } else {
          promiseStruct = new Deferred();
        }
        if (!this.promiseMap_) {
          this.promiseMap_ = map();
        }
        this.promiseMap_[name] = promiseStruct;
      }
      return promiseStruct.promise;
    };
    _proto.signal = function signal(name, opt_time) {
      var _this$promiseMap_2;
      if (this.map_[name] != null) {
        return;
      }
      var time = opt_time != null ? opt_time : Date.now();
      this.map_[name] = time;
      var promiseStruct = (_this$promiseMap_2 = this.promiseMap_) == null ? void 0 : _this$promiseMap_2[name];
      if (promiseStruct != null && promiseStruct.resolve) {
        promiseStruct.resolve(time);
        promiseStruct.resolve = void 0;
        promiseStruct.reject = void 0;
      }
    };
    _proto.rejectSignal = function rejectSignal(name, error) {
      var _this$promiseMap_3;
      if (this.map_[name] != null) {
        return;
      }
      this.map_[name] = error;
      var promiseStruct = (_this$promiseMap_3 = this.promiseMap_) == null ? void 0 : _this$promiseMap_3[name];
      if (promiseStruct != null && promiseStruct.reject) {
        promiseStruct.reject(error);
        promiseStruct.promise.catch(function() {
        });
        promiseStruct.resolve = void 0;
        promiseStruct.reject = void 0;
      }
    };
    _proto.reset = function reset(name) {
      var _this$promiseMap_4;
      if (this.map_[name]) {
        delete this.map_[name];
      }
      var promiseStruct = (_this$promiseMap_4 = this.promiseMap_) == null ? void 0 : _this$promiseMap_4[name];
      if (promiseStruct && !promiseStruct.resolve) {
        delete this.promiseMap_[name];
      }
    };
    return Signals2;
  }();

  // src/polyfills/abort-controller.js
  function _defineProperties2(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass2(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties2(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties2(Constructor, staticProps);
    return Constructor;
  }
  var AbortController2 = /* @__PURE__ */ function() {
    function AbortController3() {
      this.signal_ = new AbortSignal();
    }
    var _proto = AbortController3.prototype;
    _proto.abort = function abort() {
      if (this.signal_.isAborted_) {
        return;
      }
      this.signal_.isAborted_ = true;
      if (this.signal_.onabort_) {
        var event = {
          "type": "abort",
          "bubbles": false,
          "cancelable": false,
          "target": this.signal_,
          "currentTarget": this.signal_
        };
        this.signal_.onabort_(event);
      }
    };
    _createClass2(AbortController3, [{
      key: "signal",
      get: function get() {
        return this.signal_;
      }
    }]);
    return AbortController3;
  }();
  var AbortSignal = /* @__PURE__ */ function() {
    function AbortSignal2() {
      this.isAborted_ = false;
      this.onabort_ = null;
    }
    _createClass2(AbortSignal2, [{
      key: "aborted",
      get: function get() {
        return this.isAborted_;
      }
    }, {
      key: "onabort",
      get: function get() {
        return this.onabort_;
      },
      set: function set(value) {
        this.onabort_ = value;
      }
    }]);
    return AbortSignal2;
  }();
  function install(win) {
    if (win.AbortController) {
      return;
    }
    Object.defineProperty(win, "AbortController", {
      configurable: true,
      enumerable: false,
      writable: true,
      value: AbortController2
    });
    Object.defineProperty(win, "AbortSignal", {
      configurable: true,
      enumerable: false,
      writable: true,
      value: AbortSignal
    });
  }

  // src/polyfills/custom-elements.js
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
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
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
  var VALID_NAME = /^[a-z][a-z0-9._]*-[a-z0-9._-]*$/;
  var INVALID_NAMES = ["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"];
  var TRACK_SUBTREE = {
    "childList": true,
    "subtree": true
  };
  function assertValidName(SyntaxError, name) {
    if (!VALID_NAME.test(name) || INVALID_NAMES.includes(name)) {
      throw new SyntaxError('invalid custom element name "' + name + '"');
    }
  }
  function hasCustomElements(win) {
    var customElements = win.customElements;
    return !!(customElements && customElements.define && customElements.get && customElements.whenDefined);
  }
  function isPatched(win) {
    var tag = win.HTMLElement.toString();
    return tag.indexOf("[native code]") === -1;
  }
  var CustomElementRegistry = /* @__PURE__ */ function() {
    function CustomElementRegistry2(win, registry) {
      this.win_ = win;
      this.registry_ = registry;
      this.pendingDefines_ = map();
    }
    var _proto = CustomElementRegistry2.prototype;
    _proto.define = function define(name, ctor, options) {
      this.registry_.define(name, ctor, options);
      var pending = this.pendingDefines_;
      var deferred = pending[name];
      if (deferred) {
        deferred.resolve();
        delete pending[name];
      }
    };
    _proto.get = function get(name) {
      var def = this.registry_.getByName(name);
      if (def) {
        return def.ctor;
      }
    };
    _proto.whenDefined = function whenDefined(name) {
      var _this$win_ = this.win_, Promise2 = _this$win_.Promise, SyntaxError = _this$win_.SyntaxError;
      assertValidName(SyntaxError, name);
      if (this.registry_.getByName(name)) {
        return resolvedPromise();
      }
      var pending = this.pendingDefines_;
      var deferred = pending[name];
      if (!deferred) {
        deferred = new Deferred();
        pending[name] = deferred;
      }
      return deferred.promise;
    };
    _proto.upgrade = function upgrade(root) {
      this.registry_.upgrade(root);
    };
    return CustomElementRegistry2;
  }();
  var Registry = /* @__PURE__ */ function() {
    function Registry2(win) {
      this.win_ = win;
      this.definitions_ = map();
      this.query_ = "";
      this.current_ = null;
      this.mutationObserver_ = null;
      this.roots_ = [win.document];
    }
    var _proto2 = Registry2.prototype;
    _proto2.current = function current() {
      var current2 = this.current_;
      this.current_ = null;
      return current2;
    };
    _proto2.getByName = function getByName(name) {
      var definition = this.definitions_[name];
      if (definition) {
        return definition;
      }
    };
    _proto2.getByConstructor = function getByConstructor(ctor) {
      var definitions = this.definitions_;
      for (var name in definitions) {
        var def = definitions[name];
        if (def.ctor === ctor) {
          return def;
        }
      }
    };
    _proto2.define = function define(name, ctor, options) {
      var _this$win_2 = this.win_, Error2 = _this$win_2.Error, SyntaxError = _this$win_2.SyntaxError;
      if (options) {
        throw new Error2("Extending native custom elements is not supported");
      }
      assertValidName(SyntaxError, name);
      if (this.getByName(name) || this.getByConstructor(ctor)) {
        throw new Error2('duplicate definition "' + name + '"');
      }
      this.definitions_[name] = {
        name: name,
        ctor: ctor
      };
      this.observe_(name);
      for (var _iterator = _createForOfIteratorHelperLoose4(this.roots_), _step; !(_step = _iterator()).done; ) {
        var tree = _step.value;
        this.upgrade(tree, name);
      }
    };
    _proto2.upgrade = function upgrade(root, opt_query) {
      var newlyDefined = !!opt_query;
      var query2 = opt_query || this.query_;
      var upgradeCandidates = this.queryAll_(root, query2);
      for (var _iterator2 = _createForOfIteratorHelperLoose4(upgradeCandidates), _step2; !(_step2 = _iterator2()).done; ) {
        var candidate = _step2.value;
        if (newlyDefined) {
          this.connectedCallback_(candidate);
        } else {
          this.upgradeSelf(candidate);
        }
      }
    };
    _proto2.upgradeSelf = function upgradeSelf(node) {
      var def = this.getByName(node.localName);
      if (!def) {
        return;
      }
      this.upgradeSelf_(node, def);
    };
    _proto2.queryAll_ = function queryAll_(root, query2) {
      if (!query2 || !root.querySelectorAll) {
        return [];
      }
      return root.querySelectorAll(query2);
    };
    _proto2.upgradeSelf_ = function upgradeSelf_(node, def) {
      var ctor = def.ctor;
      if (node instanceof ctor) {
        return;
      }
      this.current_ = node;
      try {
        var el = new ctor();
        if (el !== node) {
          throw new this.win_.Error("Constructor illegally returned a different instance.");
        }
      } catch (e) {
        rethrowAsync(e);
      }
    };
    _proto2.connectedCallback_ = function connectedCallback_(node) {
      var def = this.getByName(node.localName);
      if (!def) {
        return;
      }
      node = node;
      this.upgradeSelf_(node, def);
      if (node.connectedCallback) {
        try {
          node.connectedCallback();
        } catch (e) {
          rethrowAsync(e);
        }
      }
    };
    _proto2.disconnectedCallback_ = function disconnectedCallback_(node) {
      node = node;
      if (node.disconnectedCallback) {
        try {
          node.disconnectedCallback();
        } catch (e) {
          rethrowAsync(e);
        }
      }
    };
    _proto2.observe_ = function observe_(name) {
      var _this = this;
      if (this.query_) {
        this.query_ += "," + name;
        return;
      }
      this.query_ = name;
      var mo = new this.win_.MutationObserver(function(records) {
        if (records) {
          _this.handleRecords_(records);
        }
      });
      this.mutationObserver_ = mo;
      for (var _iterator3 = _createForOfIteratorHelperLoose4(this.roots_), _step3; !(_step3 = _iterator3()).done; ) {
        var tree = _step3.value;
        mo.observe(tree, TRACK_SUBTREE);
      }
      installPatches(this.win_, this);
    };
    _proto2.observe = function observe(tree) {
      this.roots_.push(tree);
      if (this.mutationObserver_) {
        this.mutationObserver_.observe(tree, TRACK_SUBTREE);
      }
    };
    _proto2.sync = function sync() {
      if (this.mutationObserver_) {
        this.handleRecords_(this.mutationObserver_.takeRecords());
      }
    };
    _proto2.handleRecords_ = function handleRecords_(records) {
      for (var _iterator4 = _createForOfIteratorHelperLoose4(records), _step4; !(_step4 = _iterator4()).done; ) {
        var record = _step4.value;
        if (!record) {
          continue;
        }
        var addedNodes = record.addedNodes, removedNodes = record.removedNodes;
        for (var _iterator5 = _createForOfIteratorHelperLoose4(addedNodes), _step5; !(_step5 = _iterator5()).done; ) {
          var node = _step5.value;
          var connectedCandidates = this.queryAll_(node, this.query_);
          this.connectedCallback_(node);
          for (var _iterator7 = _createForOfIteratorHelperLoose4(connectedCandidates), _step7; !(_step7 = _iterator7()).done; ) {
            var candidate = _step7.value;
            this.connectedCallback_(candidate);
          }
        }
        for (var _iterator6 = _createForOfIteratorHelperLoose4(removedNodes), _step6; !(_step6 = _iterator6()).done; ) {
          var _node = _step6.value;
          var disconnectedCandidates = this.queryAll_(_node, this.query_);
          this.disconnectedCallback_(_node);
          for (var _iterator8 = _createForOfIteratorHelperLoose4(disconnectedCandidates), _step8; !(_step8 = _iterator8()).done; ) {
            var _candidate = _step8.value;
            this.disconnectedCallback_(_candidate);
          }
        }
      }
    };
    return Registry2;
  }();
  function installPatches(win, registry) {
    var _innerHTMLDesc;
    var Document = win.Document, Element = win.Element, Node2 = win.Node, document = win.document;
    var docProto = Document.prototype;
    var elProto = Element.prototype;
    var nodeProto = Node2.prototype;
    var createElement = docProto.createElement, importNode = docProto.importNode;
    var appendChild = nodeProto.appendChild, cloneNode = nodeProto.cloneNode, insertBefore = nodeProto.insertBefore, removeChild = nodeProto.removeChild, replaceChild = nodeProto.replaceChild;
    docProto.createElement = function(name) {
      var def = registry.getByName(name);
      if (def) {
        return new def.ctor();
      }
      return createElement.apply(this, arguments);
    };
    docProto.importNode = function() {
      var imported = importNode.apply(this, arguments);
      if (imported && this === document) {
        registry.upgradeSelf(imported);
        registry.upgrade(imported);
      }
      return imported;
    };
    nodeProto.appendChild = function() {
      var appended = appendChild.apply(this, arguments);
      registry.sync();
      return appended;
    };
    nodeProto.insertBefore = function() {
      var inserted = insertBefore.apply(this, arguments);
      registry.sync();
      return inserted;
    };
    nodeProto.removeChild = function() {
      var removed = removeChild.apply(this, arguments);
      registry.sync();
      return removed;
    };
    nodeProto.replaceChild = function() {
      var replaced = replaceChild.apply(this, arguments);
      registry.sync();
      return replaced;
    };
    nodeProto.cloneNode = function() {
      var cloned = cloneNode.apply(this, arguments);
      if (cloned.ownerDocument === document) {
        registry.upgradeSelf(cloned);
        registry.upgrade(cloned);
      }
      return cloned;
    };
    var innerHTMLProto = elProto;
    var innerHTMLDesc = Object.getOwnPropertyDescriptor(innerHTMLProto, "innerHTML");
    if (!innerHTMLDesc) {
      innerHTMLProto = Object.getPrototypeOf(win.HTMLElement.prototype);
      innerHTMLDesc = Object.getOwnPropertyDescriptor(innerHTMLProto, "innerHTML");
    }
    if ((_innerHTMLDesc = innerHTMLDesc) != null && _innerHTMLDesc.configurable) {
      var innerHTMLSetter = innerHTMLDesc.set;
      innerHTMLDesc.set = function(html2) {
        innerHTMLSetter.call(this, html2);
        registry.upgrade(this);
      };
      Object.defineProperty(innerHTMLProto, "innerHTML", innerHTMLDesc);
    }
  }
  function polyfill(win) {
    var Element = win.Element, HTMLElement = win.HTMLElement, document = win.document;
    var createElement = document.createElement;
    var registry = new Registry(win);
    var customElements = new CustomElementRegistry(win, registry);
    Object.defineProperty(win, "customElements", {
      enumerable: true,
      configurable: true,
      value: customElements
    });
    var elProto = Element.prototype;
    var attachShadow = elProto.attachShadow, createShadowRoot = elProto.createShadowRoot;
    if (attachShadow) {
      elProto.attachShadow = function(unused) {
        var shadow = attachShadow.apply(this, arguments);
        registry.observe(shadow);
        return shadow;
      };
      elProto.attachShadow.toString = function() {
        return attachShadow.toString();
      };
    }
    if (createShadowRoot) {
      elProto.createShadowRoot = function() {
        var shadow = createShadowRoot.apply(this, arguments);
        registry.observe(shadow);
        return shadow;
      };
      elProto.createShadowRoot.toString = function() {
        return createShadowRoot.toString();
      };
    }
    function HTMLElementPolyfill() {
      var constructor = this.constructor;
      var el = registry.current();
      if (!el) {
        var def = registry.getByConstructor(constructor);
        el = createElement.call(document, def.name);
      }
      setPrototypeOf(el, constructor.prototype);
      return el;
    }
    subClass(HTMLElement, HTMLElementPolyfill);
    win.HTMLElementOrig = win.HTMLElement;
    win.HTMLElement = HTMLElementPolyfill;
    if (!HTMLElementPolyfill.call) {
      HTMLElementPolyfill.apply = win.Function.apply;
      HTMLElementPolyfill.bind = win.Function.bind;
      HTMLElementPolyfill.call = win.Function.call;
    }
  }
  function wrapHTMLElement(win) {
    var HTMLElement = win.HTMLElement, Reflect2 = win.Reflect;
    function HTMLElementWrapper() {
      var ctor = this.constructor;
      return Reflect2.construct(HTMLElement, [], ctor);
    }
    subClass(HTMLElement, HTMLElementWrapper);
    win.HTMLElementOrig = win.HTMLElement;
    win.HTMLElement = HTMLElementWrapper;
  }
  function subClass(superClass, subClass2) {
    subClass2.prototype = Object.create(superClass.prototype, {
      constructor: {
        configurable: true,
        writable: true,
        value: subClass2
      }
    });
    setPrototypeOf(subClass2, superClass);
  }
  function supportsUnderProto() {
    var proto = {
      "test": true
    };
    var obj = {};
    obj.__proto__ = proto;
    return !!obj["test"];
  }
  function setPrototypeOf(obj, prototype) {
    if (isEsm() || Object.setPrototypeOf) {
      Object.setPrototypeOf(obj, prototype);
    } else if (supportsUnderProto()) {
      obj.__proto__ = prototype;
    } else {
      copyProperties(obj, prototype);
    }
  }
  function copyProperties(obj, prototype) {
    var current = prototype;
    while (current !== null) {
      if (Object.isPrototypeOf.call(current, obj)) {
        break;
      }
      for (var _iterator9 = _createForOfIteratorHelperLoose4(Object.getOwnPropertyNames(current)), _step9; !(_step9 = _iterator9()).done; ) {
        var prop = _step9.value;
        if (Object.hasOwnProperty.call(obj, prop)) {
          continue;
        }
        var desc = Object.getOwnPropertyDescriptor(current, prop);
        Object.defineProperty(obj, prop, desc);
      }
      current = Object.getPrototypeOf(current);
    }
  }
  function install2(win, ctor) {
    var shouldInstall = win.document;
    var hasCE = hasCustomElements(win);
    if (!shouldInstall || hasCE && isPatched(win)) {
      return;
    }
    var install4 = true;
    var installWrapper = false;
    if (ctor && hasCE) {
      try {
        var _Reflect = win.Reflect;
        var instance = Object.create(ctor.prototype);
        Function.call.call(ctor, instance);
        installWrapper = !!(_Reflect != null && _Reflect.construct);
      } catch (e) {
        install4 = false;
      }
    }
    if (installWrapper) {
      wrapHTMLElement(win);
    } else if (install4) {
      polyfill(win);
    }
  }

  // src/polyfills/document-contains.js
  function documentContainsPolyfill(node) {
    return node == this || this.documentElement.contains(node);
  }
  function install3(win) {
    var documentClass = win.HTMLDocument || win.Document;
    if (documentClass && !documentClass.prototype.contains) {
      win.Object.defineProperty(documentClass.prototype, "contains", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: documentContainsPolyfill
      });
    }
  }

  // src/polyfills/stubs/intersection-observer-stub.js
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
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
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
  function _defineProperties3(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass3(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties3(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties3(Constructor, staticProps);
    return Constructor;
  }
  var UPGRADERS = "_upgraders";
  var STUB = "_stub";
  function shouldLoadPolyfill(win) {
    return !win.IntersectionObserver || !win.IntersectionObserverEntry || !!win.IntersectionObserver[STUB] || !supportsDocumentRoot(win) || isWebkit(win);
  }
  function isWebkit(win) {
    return /apple/i.test(win.navigator.vendor);
  }
  function supportsDocumentRoot(win) {
    try {
      new win.IntersectionObserver(function() {
      }, {
        root: win.document
      });
      return true;
    } catch (_unused) {
      return false;
    }
  }
  var IntersectionObserverStub = /* @__PURE__ */ function() {
    function IntersectionObserverStub2(callback, options) {
      this.callback_ = callback;
      this.options_ = _extends5({
        root: null,
        rootMargin: "0px 0px 0px 0px"
      }, options);
      this.elements_ = [];
      this.inst_ = null;
      IntersectionObserverStub2[UPGRADERS].push(this.upgrade_.bind(this));
    }
    var _proto = IntersectionObserverStub2.prototype;
    _proto.disconnect = function disconnect() {
      if (this.inst_) {
        this.inst_.disconnect();
      } else {
        this.elements_.length = 0;
      }
    };
    _proto.takeRecords = function takeRecords() {
      if (this.inst_) {
        return this.inst_.takeRecords();
      }
      return [];
    };
    _proto.observe = function observe(target) {
      if (this.inst_) {
        this.inst_.observe(target);
      } else {
        if (this.elements_.indexOf(target) == -1) {
          this.elements_.push(target);
        }
      }
    };
    _proto.unobserve = function unobserve(target) {
      if (this.inst_) {
        this.inst_.unobserve(target);
      } else {
        var index = this.elements_.indexOf(target);
        if (index != -1) {
          this.elements_.splice(index, 1);
        }
      }
    };
    _proto.upgrade_ = function upgrade_(Ctor) {
      var inst = new Ctor(this.callback_, this.options_);
      this.inst_ = inst;
      for (var _iterator = _createForOfIteratorHelperLoose5(this.elements_), _step; !(_step = _iterator()).done; ) {
        var e = _step.value;
        inst.observe(e);
      }
      this.elements_.length = 0;
    };
    _createClass3(IntersectionObserverStub2, [{
      key: "root",
      get: function get() {
        if (this.inst_) {
          return this.inst_.root;
        }
        return this.options_.root || null;
      }
    }, {
      key: "rootMargin",
      get: function get() {
        if (this.inst_) {
          return this.inst_.rootMargin;
        }
        return this.options_.rootMargin;
      }
    }, {
      key: "thresholds",
      get: function get() {
        if (this.inst_) {
          return this.inst_.thresholds;
        }
        return [].concat(this.options_.threshold || 0);
      }
    }]);
    return IntersectionObserverStub2;
  }();
  IntersectionObserverStub[UPGRADERS] = [];

  // src/polyfills/intersection-observer.js
  function installForChildWin(parentWin, childWin) {
    if (shouldLoadPolyfill(childWin)) {
      Object.defineProperties(childWin, {
        IntersectionObserver: {
          get: function get() {
            return parentWin.IntersectionObserver;
          }
        },
        IntersectionObserverEntry: {
          get: function get() {
            return parentWin.IntersectionObserverEntry;
          }
        }
      });
    } else {
      fixEntry(childWin);
    }
  }
  function fixEntry(win) {
    if (win.IntersectionObserverEntry && !("isIntersecting" in win.IntersectionObserverEntry.prototype)) {
      Object.defineProperty(win.IntersectionObserverEntry.prototype, "isIntersecting", {
        enumerable: true,
        configurable: true,
        get: function get() {
          return this.intersectionRatio > 0;
        }
      });
    }
  }

  // src/polyfills/stubs/resize-observer-stub.js
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
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
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
  var UPGRADERS2 = "_upgraders";
  var ResizeObserverStub = /* @__PURE__ */ function() {
    function ResizeObserverStub2(callback) {
      this.callback_ = callback;
      this.elements_ = [];
      this.inst_ = null;
      ResizeObserverStub2[UPGRADERS2].push(this.upgrade_.bind(this));
    }
    var _proto = ResizeObserverStub2.prototype;
    _proto.disconnect = function disconnect() {
      if (this.inst_) {
        this.inst_.disconnect();
      } else {
        this.elements_.length = 0;
      }
    };
    _proto.observe = function observe(target) {
      if (this.inst_) {
        this.inst_.observe(target);
      } else {
        if (this.elements_.indexOf(target) == -1) {
          this.elements_.push(target);
        }
      }
    };
    _proto.unobserve = function unobserve(target) {
      if (this.inst_) {
        this.inst_.unobserve(target);
      } else {
        var index = this.elements_.indexOf(target);
        if (index != -1) {
          this.elements_.splice(index, 1);
        }
      }
    };
    _proto.upgrade_ = function upgrade_(Ctor) {
      var inst = new Ctor(this.callback_);
      this.inst_ = inst;
      for (var _iterator2 = _createForOfIteratorHelperLoose6(this.elements_), _step2; !(_step2 = _iterator2()).done; ) {
        var e = _step2.value;
        inst.observe(e);
      }
      this.elements_.length = 0;
    };
    return ResizeObserverStub2;
  }();
  ResizeObserverStub[UPGRADERS2] = [];

  // src/polyfills/resize-observer.js
  function installForChildWin2(parentWin, childWin) {
    if (!childWin.ResizeObserver && parentWin.ResizeObserver) {
      Object.defineProperties(childWin, {
        ResizeObserver: {
          get: function get() {
            return parentWin.ResizeObserver;
          }
        },
        ResizeObserverEntry: {
          get: function get() {
            return parentWin.ResizeObserverEntry;
          }
        }
      });
    }
  }

  // src/core/dom/static-template.js
  var htmlContainer;
  function htmlFor(nodeOrDoc) {
    var doc = nodeOrDoc.ownerDocument || nodeOrDoc;
    if (!htmlContainer || htmlContainer.ownerDocument !== doc) {
      htmlContainer = doc.createElement("div");
    }
    return html;
  }
  function html(strings) {
    return createNode(htmlContainer, strings);
  }
  function createNode(container, strings) {
    devAssert(strings.length === 1, "Improper html template tag usage.");
    container.innerHTML = strings[0];
    var el = container.firstElementChild;
    devAssert(el, "No elements in template");
    devAssert(!el.nextElementSibling, "Too many root elements in template");
    container.removeChild(el);
    return el;
  }

  // src/service/resource.js
  var TAG8 = "Resource";
  var RESOURCE_PROP_ = "__AMP__RESOURCE";
  var OWNER_PROP_ = "__AMP__OWNER";
  var ResourceState_Enum = {
    NOT_BUILT: 0,
    NOT_LAID_OUT: 1,
    READY_FOR_LAYOUT: 2,
    LAYOUT_SCHEDULED: 3,
    LAYOUT_COMPLETE: 4,
    LAYOUT_FAILED: 5
  };
  var Resource = /* @__PURE__ */ function() {
    Resource2.forElement = function forElement(element) {
      return devAssert2(Resource2.forElementOptional(element), "Missing resource prop on %s", element);
    };
    Resource2.forElementOptional = function forElementOptional(element) {
      return element[RESOURCE_PROP_];
    };
    Resource2.setOwner = function setOwner(element, owner) {
      devAssert2(owner.contains(element), "Owner must contain the element");
      if (Resource2.forElementOptional(element)) {
        Resource2.forElementOptional(element).updateOwner(owner);
      }
      element[OWNER_PROP_] = owner;
      var cachedElements = element.getElementsByClassName("i-amphtml-element");
      for (var i = 0; i < cachedElements.length; i++) {
        var ele = cachedElements[i];
        if (Resource2.forElementOptional(ele)) {
          Resource2.forElementOptional(ele).updateOwner(void 0);
        }
      }
    };
    function Resource2(id, element, resources) {
      element[RESOURCE_PROP_] = this;
      this.id_ = id;
      this.element = element;
      this.debugid = element.tagName.toLowerCase() + "#" + id;
      this.hostWin = toWin(element.ownerDocument.defaultView);
      this.resources_ = resources;
      this.isPlaceholder_ = element.hasAttribute("placeholder");
      this.isBuilding_ = false;
      this.owner_ = void 0;
      this.state_ = element.isBuilt() ? ResourceState_Enum.NOT_LAID_OUT : ResourceState_Enum.NOT_BUILT;
      if (this.state_ == ResourceState_Enum.NOT_BUILT && element.isBuilding()) {
        this.build();
      }
      this.priorityOverride_ = -1;
      this.layoutCount_ = 0;
      this.abortController_ = null;
      this.lastLayoutError_ = null;
      this.isFixed_ = false;
      this.layoutBox_ = layoutRectLtwh(-1e4, -1e4, 0, 0);
      this.initialLayoutBox_ = null;
      this.isMeasureRequested_ = false;
      this.withViewportDeferreds_ = null;
      this.layoutPromise_ = null;
      this.pendingChangeSize_ = void 0;
      var deferred = new Deferred();
      this.loadPromise_ = deferred.promise;
      this.loadPromiseResolve_ = deferred.resolve;
      this.isInViewport_ = false;
    }
    var _proto = Resource2.prototype;
    _proto.getId = function getId() {
      return this.id_;
    };
    _proto.updateOwner = function updateOwner(owner) {
      this.owner_ = owner;
    };
    _proto.getOwner = function getOwner() {
      if (this.owner_ === void 0) {
        for (var n = this.element; n; n = n.parentElement) {
          if (n[OWNER_PROP_]) {
            this.owner_ = n[OWNER_PROP_];
            break;
          }
        }
        if (this.owner_ === void 0) {
          this.owner_ = null;
        }
      }
      return this.owner_;
    };
    _proto.hasOwner = function hasOwner() {
      return !!this.getOwner();
    };
    _proto.getLayoutPriority = function getLayoutPriority() {
      if (this.priorityOverride_ != -1) {
        return this.priorityOverride_;
      }
      return this.element.getLayoutPriority();
    };
    _proto.updateLayoutPriority = function updateLayoutPriority(newPriority) {
      this.priorityOverride_ = newPriority;
    };
    _proto.getState = function getState() {
      return this.state_;
    };
    _proto.isBuilt = function isBuilt() {
      return this.element.isBuilt();
    };
    _proto.isBuilding = function isBuilding() {
      return this.isBuilding_;
    };
    _proto.whenBuilt = function whenBuilt() {
      return this.element.signals().whenSignal("res-built");
    };
    _proto.build = function build() {
      var _this = this;
      if (this.isBuilding_ || !this.element.isUpgraded()) {
        return null;
      }
      this.isBuilding_ = true;
      return this.element.buildInternal().then(function() {
        _this.isBuilding_ = false;
        _this.state_ = ResourceState_Enum.NOT_LAID_OUT;
        _this.element.signals().signal("res-built");
      }, function(reason) {
        _this.maybeReportErrorOnBuildFailure(reason);
        _this.isBuilding_ = false;
        _this.element.signals().rejectSignal("res-built", reason);
        throw reason;
      });
    };
    _proto.maybeReportErrorOnBuildFailure = function maybeReportErrorOnBuildFailure(reason) {
      if (!isBlockedByConsent(reason)) {
        dev().error(TAG8, "failed to build:", this.debugid, reason);
      }
    };
    _proto.changeSize = function changeSize(newHeight, newWidth, opt_newMargins) {
      this.element.applySize(newHeight, newWidth, opt_newMargins);
      this.requestMeasure();
    };
    _proto.overflowCallback = function overflowCallback(overflown, requestedHeight, requestedWidth, requestedMargins) {
      if (overflown) {
        this.pendingChangeSize_ = {
          height: requestedHeight,
          width: requestedWidth,
          margins: requestedMargins
        };
      }
      this.element.overflowCallback(overflown, requestedHeight, requestedWidth, requestedMargins);
    };
    _proto.resetPendingChangeSize = function resetPendingChangeSize() {
      this.pendingChangeSize_ = void 0;
    };
    _proto.getPendingChangeSize = function getPendingChangeSize() {
      return this.pendingChangeSize_;
    };
    _proto.getUpgradeDelayMs = function getUpgradeDelayMs() {
      return this.element.getUpgradeDelayMs();
    };
    _proto.measure = function measure() {
      if (this.isPlaceholder_ && this.element.parentElement && this.element.parentElement.tagName.startsWith("AMP-") && !(RESOURCE_PROP_ in this.element.parentElement)) {
        return;
      }
      if (!this.element.ownerDocument || !this.element.ownerDocument.defaultView) {
        this.state_ = ResourceState_Enum.NOT_LAID_OUT;
        return;
      }
      this.isMeasureRequested_ = false;
      var oldBox = this.layoutBox_;
      this.computeMeasurements_();
      var newBox = this.layoutBox_;
      var sizeChanges = !layoutRectSizeEquals(oldBox, newBox);
      if (this.state_ == ResourceState_Enum.NOT_LAID_OUT || oldBox.top != newBox.top || sizeChanges) {
        if (this.element.isUpgraded()) {
          if (this.state_ == ResourceState_Enum.NOT_LAID_OUT) {
            this.state_ = ResourceState_Enum.READY_FOR_LAYOUT;
          } else if ((this.state_ == ResourceState_Enum.LAYOUT_COMPLETE || this.state_ == ResourceState_Enum.LAYOUT_FAILED) && this.element.isRelayoutNeeded()) {
            this.state_ = ResourceState_Enum.READY_FOR_LAYOUT;
          }
        }
      }
      if (!this.hasBeenMeasured()) {
        this.initialLayoutBox_ = newBox;
      }
      this.element.updateLayoutBox(newBox, sizeChanges);
    };
    _proto.ensureMeasured = function ensureMeasured() {
      var _this2 = this;
      if (this.hasBeenMeasured()) {
        return resolvedPromise();
      }
      return Services.vsyncFor(this.hostWin).measure(function() {
        return _this2.measure();
      });
    };
    _proto.computeMeasurements_ = function computeMeasurements_() {
      var viewport = Services.viewportForDoc(this.element);
      this.layoutBox_ = viewport.getLayoutRect(this.element);
      var isFixed = false;
      if (viewport.supportsPositionFixed() && this.isDisplayed()) {
        var _this$resources_$getA = this.resources_.getAmpdoc(), win = _this$resources_$getA.win;
        var body = win.document.body;
        for (var n = this.element; n && n != body; n = n.offsetParent) {
          if (n.isAlwaysFixed && n.isAlwaysFixed()) {
            isFixed = true;
            break;
          }
          if (viewport.isDeclaredFixed(n) && computedStyle(win, n).position == "fixed") {
            isFixed = true;
            break;
          }
        }
      }
      this.isFixed_ = isFixed;
      if (isFixed) {
        this.layoutBox_ = moveLayoutRect(this.layoutBox_, -viewport.getScrollLeft(), -viewport.getScrollTop());
      }
    };
    _proto.completeCollapse = function completeCollapse() {
      toggle(this.element, false);
      this.layoutBox_ = layoutRectLtwh(this.layoutBox_.left, this.layoutBox_.top, 0, 0);
      this.isFixed_ = false;
      this.element.updateLayoutBox(this.getLayoutBox());
      var owner = this.getOwner();
      if (owner) {
        owner.collapsedCallback(this.element);
      }
    };
    _proto.completeExpand = function completeExpand() {
      toggle(this.element, true);
      this.requestMeasure();
    };
    _proto.isMeasureRequested = function isMeasureRequested() {
      return this.isMeasureRequested_;
    };
    _proto.hasBeenMeasured = function hasBeenMeasured() {
      return !!this.initialLayoutBox_;
    };
    _proto.requestMeasure = function requestMeasure() {
      this.isMeasureRequested_ = true;
    };
    _proto.getLayoutSize = function getLayoutSize() {
      return layoutSizeFromRect(this.layoutBox_);
    };
    _proto.getLayoutBox = function getLayoutBox() {
      if (!this.isFixed_) {
        return this.layoutBox_;
      }
      var viewport = Services.viewportForDoc(this.element);
      return moveLayoutRect(this.layoutBox_, viewport.getScrollLeft(), viewport.getScrollTop());
    };
    _proto.getInitialLayoutBox = function getInitialLayoutBox() {
      return this.initialLayoutBox_ || this.layoutBox_;
    };
    _proto.isDisplayed = function isDisplayed() {
      var isConnected = this.element.ownerDocument && this.element.ownerDocument.defaultView;
      if (!isConnected) {
        return false;
      }
      var isFluid = this.element.getLayout() == Layout_Enum.FLUID;
      var box = this.getLayoutBox();
      var hasNonZeroSize = box.height > 0 && box.width > 0;
      return isFluid || hasNonZeroSize;
    };
    _proto.isFixed = function isFixed() {
      return this.isFixed_;
    };
    _proto.overlaps = function overlaps(rect) {
      return rectsOverlap(this.getLayoutBox(), rect);
    };
    _proto.prerenderAllowed = function prerenderAllowed() {
      return this.element.prerenderAllowed();
    };
    _proto.isBuildRenderBlocking = function isBuildRenderBlocking() {
      return this.element.isBuildRenderBlocking();
    };
    _proto.whenWithinViewport = function whenWithinViewport2(viewport) {
      devAssert2(viewport !== false);
      if (!this.isLayoutPending() || viewport === true) {
        return resolvedPromise();
      }
      var viewportNum = dev().assertNumber(viewport);
      var key = String(viewportNum);
      if (this.withViewportDeferreds_ && this.withViewportDeferreds_[key]) {
        return this.withViewportDeferreds_[key].promise;
      }
      if (this.isWithinViewportRatio(viewportNum)) {
        return resolvedPromise();
      }
      this.withViewportDeferreds_ = this.withViewportDeferreds_ || {};
      this.withViewportDeferreds_[key] = new Deferred();
      return this.withViewportDeferreds_[key].promise;
    };
    _proto.resolveDeferredsWhenWithinViewports_ = function resolveDeferredsWhenWithinViewports_() {
      if (!this.withViewportDeferreds_) {
        return;
      }
      var viewportRatio = this.getDistanceViewportRatio();
      for (var key in this.withViewportDeferreds_) {
        if (this.isWithinViewportRatio(parseFloat(key), viewportRatio)) {
          this.withViewportDeferreds_[key].resolve();
          delete this.withViewportDeferreds_[key];
        }
      }
    };
    _proto.getDistanceViewportRatio = function getDistanceViewportRatio() {
      var viewport = Services.viewportForDoc(this.element);
      var viewportBox = viewport.getRect();
      var layoutBox = this.getLayoutBox();
      var scrollDirection = this.resources_.getScrollDirection();
      var scrollPenalty = 1;
      var distance = 0;
      if (viewportBox.right < layoutBox.left || viewportBox.left > layoutBox.right) {
        return {
          distance: false
        };
      }
      if (viewportBox.bottom < layoutBox.top) {
        distance = layoutBox.top - viewportBox.bottom;
        if (scrollDirection == -1) {
          scrollPenalty = 2;
        }
      } else if (viewportBox.top > layoutBox.bottom) {
        distance = viewportBox.top - layoutBox.bottom;
        if (scrollDirection == 1) {
          scrollPenalty = 2;
        }
      } else {
        return {
          distance: true
        };
      }
      return {
        distance: distance,
        scrollPenalty: scrollPenalty,
        viewportHeight: viewportBox.height
      };
    };
    _proto.isWithinViewportRatio = function isWithinViewportRatio(multiplier, opt_viewportRatio) {
      if (typeof multiplier === "boolean") {
        return multiplier;
      }
      var _ref = opt_viewportRatio || this.getDistanceViewportRatio(), distance = _ref.distance, scrollPenalty = _ref.scrollPenalty, viewportHeight = _ref.viewportHeight;
      if (typeof distance == "boolean") {
        return distance;
      }
      return distance < viewportHeight * multiplier / scrollPenalty;
    };
    _proto.renderOutsideViewport = function renderOutsideViewport() {
      this.resolveDeferredsWhenWithinViewports_();
      return this.hasOwner() || this.isWithinViewportRatio(this.element.renderOutsideViewport());
    };
    _proto.idleRenderOutsideViewport = function idleRenderOutsideViewport() {
      return this.isWithinViewportRatio(this.element.idleRenderOutsideViewport());
    };
    _proto.layoutScheduled = function layoutScheduled(scheduleTime) {
      this.state_ = ResourceState_Enum.LAYOUT_SCHEDULED;
      this.element.layoutScheduleTime = scheduleTime;
    };
    _proto.layoutCanceled = function layoutCanceled() {
      this.state_ = this.hasBeenMeasured() ? ResourceState_Enum.READY_FOR_LAYOUT : ResourceState_Enum.NOT_LAID_OUT;
    };
    _proto.startLayout = function startLayout() {
      var _this3 = this;
      if (this.layoutPromise_) {
        return this.layoutPromise_;
      }
      if (this.state_ == ResourceState_Enum.LAYOUT_COMPLETE) {
        return resolvedPromise();
      }
      if (this.state_ == ResourceState_Enum.LAYOUT_FAILED) {
        return Promise.reject(this.lastLayoutError_);
      }
      devAssert2(this.state_ != ResourceState_Enum.NOT_BUILT, "Not ready to start layout: %s (%s)", this.debugid, this.state_);
      devAssert2(this.isDisplayed(), "Not displayed for layout: %s", this.debugid);
      if (this.state_ != ResourceState_Enum.LAYOUT_SCHEDULED) {
        var err = dev().createError("startLayout called but not LAYOUT_SCHEDULED", "currently: ", this.state_);
        reportError(err, this.element);
        return Promise.reject(err);
      }
      if (this.layoutCount_ > 0 && !this.element.isRelayoutNeeded()) {
        dev().fine(TAG8, "layout canceled since it wasn't requested:", this.debugid, this.state_);
        this.state_ = ResourceState_Enum.LAYOUT_COMPLETE;
        return resolvedPromise();
      }
      dev().fine(TAG8, "start layout:", this.debugid, "count:", this.layoutCount_);
      this.layoutCount_++;
      this.state_ = ResourceState_Enum.LAYOUT_SCHEDULED;
      this.abortController_ = new AbortController();
      var signal = this.abortController_.signal;
      var promise = new Promise(function(resolve, reject) {
        Services.vsyncFor(_this3.hostWin).mutate(function() {
          var callbackResult;
          try {
            callbackResult = _this3.element.layoutCallback(signal);
          } catch (e) {
            reject(e);
          }
          Promise.resolve(callbackResult).then(resolve, reject);
        });
        signal.onabort = function() {
          return reject(cancellation());
        };
      }).then(function() {
        return _this3.layoutComplete_(true, signal);
      }, function(reason) {
        return _this3.layoutComplete_(false, signal, reason);
      });
      return this.layoutPromise_ = promise;
    };
    _proto.layoutComplete_ = function layoutComplete_(success, signal, opt_reason) {
      this.abortController_ = null;
      if (signal.aborted) {
        var err = dev().createError("layoutComplete race");
        err.associatedElement = this.element;
        dev().expectedError(TAG8, err);
        throw cancellation();
      }
      if (this.loadPromiseResolve_) {
        this.loadPromiseResolve_();
        this.loadPromiseResolve_ = null;
      }
      this.layoutPromise_ = null;
      this.state_ = success ? ResourceState_Enum.LAYOUT_COMPLETE : ResourceState_Enum.LAYOUT_FAILED;
      this.lastLayoutError_ = opt_reason;
      if (success) {
        dev().fine(TAG8, "layout complete:", this.debugid);
      } else {
        dev().fine(TAG8, "loading failed:", this.debugid, opt_reason);
        return Promise.reject(opt_reason);
      }
    };
    _proto.isLayoutPending = function isLayoutPending() {
      return this.state_ != ResourceState_Enum.LAYOUT_COMPLETE && this.state_ != ResourceState_Enum.LAYOUT_FAILED;
    };
    _proto.loadedOnce = function loadedOnce() {
      if (this.element.R1()) {
        return this.element.whenLoaded();
      }
      return this.loadPromise_;
    };
    _proto.isInViewport = function isInViewport() {
      if (this.isInViewport_) {
        this.resolveDeferredsWhenWithinViewports_();
      }
      return this.isInViewport_;
    };
    _proto.setInViewport = function setInViewport(inViewport) {
      this.isInViewport_ = inViewport;
    };
    _proto.unlayout = function unlayout() {
      if (this.state_ == ResourceState_Enum.NOT_BUILT || this.state_ == ResourceState_Enum.NOT_LAID_OUT || this.state_ == ResourceState_Enum.READY_FOR_LAYOUT) {
        return;
      }
      if (this.abortController_) {
        this.abortController_.abort();
        this.abortController_ = null;
      }
      this.setInViewport(false);
      if (this.element.unlayoutCallback()) {
        this.element.togglePlaceholder(true);
        this.state_ = ResourceState_Enum.NOT_LAID_OUT;
        this.layoutCount_ = 0;
        this.layoutPromise_ = null;
      }
    };
    _proto.getTaskId = function getTaskId(localId) {
      return this.debugid + "#" + localId;
    };
    _proto.pause = function pause() {
      this.element.pause();
    };
    _proto.pauseOnRemove = function pauseOnRemove() {
      this.element.pause();
    };
    _proto.resume = function resume() {
      this.element.resume();
    };
    _proto.unload = function unload() {
      this.element.unmount();
    };
    _proto.disconnect = function disconnect() {
      delete this.element[RESOURCE_PROP_];
      this.element.disconnect(true);
    };
    return Resource2;
  }();

  // src/chunk.js
  function _inherits3(subClass2, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass2.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass2, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf3(subClass2, superClass);
  }
  function _setPrototypeOf3(o, p) {
    _setPrototypeOf3 = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
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
    _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf3(o);
  }
  var TAG9 = "CHUNK";
  var deactivated = /nochunking=1/.test(self.location.hash);
  var allowLongTasks = false;
  var resolved2 = resolvedPromise();
  function chunkServiceForDoc(elementOrAmpDoc) {
    registerServiceBuilderForDoc(elementOrAmpDoc, "chunk", Chunks);
    return getServiceForDoc(elementOrAmpDoc, "chunk");
  }
  function startupChunk(doc, fn, opt_makesBodyVisible) {
    if (deactivated) {
      resolved2.then(fn);
      return;
    }
    var service = chunkServiceForDoc(doc.documentElement || doc);
    service.runForStartup(fn);
    if (opt_makesBodyVisible) {
      service.runForStartup(function() {
        service.bodyIsVisible_ = true;
      });
    }
  }
  var TaskState_Enum = {
    NOT_RUN: "not_run",
    RUN: "run"
  };
  var Task = /* @__PURE__ */ function() {
    function Task2(fn) {
      this.state = TaskState_Enum.NOT_RUN;
      this.fn_ = fn;
    }
    var _proto = Task2.prototype;
    _proto.runTask_ = function runTask_(idleDeadline) {
      if (this.state == TaskState_Enum.RUN) {
        return;
      }
      this.state = TaskState_Enum.RUN;
      try {
        this.fn_(idleDeadline);
      } catch (e) {
        this.onTaskError_(e);
        throw e;
      }
    };
    _proto.getName_ = function getName_() {
      return this.fn_.displayName || this.fn_.name;
    };
    _proto.onTaskError_ = function onTaskError_(unusedError) {
    };
    _proto.immediateTriggerCondition_ = function immediateTriggerCondition_() {
      return false;
    };
    _proto.useRequestIdleCallback_ = function useRequestIdleCallback_() {
      return false;
    };
    return Task2;
  }();
  var StartupTask = /* @__PURE__ */ function(_Task) {
    _inherits3(StartupTask2, _Task);
    var _super = _createSuper3(StartupTask2);
    function StartupTask2(fn, win, chunks) {
      var _this;
      _this = _super.call(this, fn);
      _this.chunks_ = chunks;
      return _this;
    }
    var _proto2 = StartupTask2.prototype;
    _proto2.onTaskError_ = function onTaskError_(unusedError) {
      makeBodyVisibleRecovery(self.document);
    };
    _proto2.immediateTriggerCondition_ = function immediateTriggerCondition_() {
      return this.isVisible_();
    };
    _proto2.useRequestIdleCallback_ = function useRequestIdleCallback_() {
      return this.chunks_.coreReady_;
    };
    _proto2.isVisible_ = function isVisible_() {
      return this.chunks_.ampdoc.isVisible();
    };
    return StartupTask2;
  }(Task);
  var Chunks = /* @__PURE__ */ function() {
    function Chunks2(ampDoc) {
      var _this2 = this;
      this.ampdoc = ampDoc;
      this.win_ = ampDoc.win;
      this.tasks_ = new PriorityQueue();
      this.boundExecute_ = this.execute_.bind(this);
      this.durationOfLastExecution_ = 0;
      this.supportsInputPending_ = !!(this.win_.navigator.scheduling && this.win_.navigator.scheduling.isInputPending);
      this.scheduledImmediateInvocation_ = false;
      this.bodyIsVisible_ = this.win_.document.documentElement.hasAttribute("i-amphtml-no-boilerplate");
      this.win_.addEventListener("message", function(e) {
        if (getData(e) == "amp-macro-task") {
          _this2.execute_(null);
        }
      });
      this.coreReady_ = false;
      Services.viewerPromiseForDoc(ampDoc).then(function() {
        _this2.coreReady_ = true;
      });
      ampDoc.onVisibilityChanged(function() {
        if (ampDoc.isVisible()) {
          _this2.schedule_();
        }
      });
    }
    var _proto3 = Chunks2.prototype;
    _proto3.run = function run(fn, priority) {
      var t = new Task(fn);
      this.enqueueTask_(t, priority);
    };
    _proto3.runForStartup = function runForStartup(fn) {
      var t = new StartupTask(fn, this.win_, this);
      this.enqueueTask_(t, Number.POSITIVE_INFINITY);
    };
    _proto3.enqueueTask_ = function enqueueTask_(task, priority) {
      this.tasks_.enqueue(task, priority);
      this.schedule_();
    };
    _proto3.nextTask_ = function nextTask_(opt_dequeue) {
      var t = this.tasks_.peek();
      while (t && t.state !== TaskState_Enum.NOT_RUN) {
        this.tasks_.dequeue();
        t = this.tasks_.peek();
      }
      if (t && opt_dequeue) {
        this.tasks_.dequeue();
      }
      return t;
    };
    _proto3.execute_ = function execute_(idleDeadline) {
      var _this3 = this;
      var t = this.nextTask_(true);
      if (!t) {
        this.scheduledImmediateInvocation_ = false;
        this.durationOfLastExecution_ = 0;
        return false;
      }
      var before;
      try {
        before = Date.now();
        t.runTask_(idleDeadline);
      } finally {
        resolved2.then().then().then().then().then().then().then().then().then(function() {
          _this3.scheduledImmediateInvocation_ = false;
          _this3.durationOfLastExecution_ += Date.now() - before;
          dev().fine(TAG9, t.getName_(), "Chunk duration", Date.now() - before, _this3.durationOfLastExecution_);
          _this3.schedule_();
        });
      }
      return true;
    };
    _proto3.executeAsap_ = function executeAsap_(idleDeadline) {
      var _this4 = this;
      if (!allowLongTasks && this.bodyIsVisible_ && (this.supportsInputPending_ ? this.win_.navigator.scheduling.isInputPending() : this.durationOfLastExecution_ > 5)) {
        this.durationOfLastExecution_ = 0;
        this.requestMacroTask_();
        return;
      }
      resolved2.then(function() {
        _this4.boundExecute_(idleDeadline);
      });
    };
    _proto3.schedule_ = function schedule_() {
      if (this.scheduledImmediateInvocation_) {
        return;
      }
      var nextTask = this.nextTask_();
      if (!nextTask) {
        return;
      }
      if (nextTask.immediateTriggerCondition_()) {
        this.scheduledImmediateInvocation_ = true;
        this.executeAsap_(null);
        return;
      }
      if (nextTask.useRequestIdleCallback_() && this.win_.requestIdleCallback) {
        onIdle(this.win_, 15, 2e3, this.boundExecute_);
        return;
      }
      this.requestMacroTask_();
    };
    _proto3.requestMacroTask_ = function requestMacroTask_() {
      this.win_.postMessage("amp-macro-task", "*");
    };
    return Chunks2;
  }();
  function onIdle(win, minimumTimeRemaining, timeout, fn) {
    var startTime = Date.now();
    function rIC(info) {
      if (info.timeRemaining() < minimumTimeRemaining) {
        var remainingTimeout = timeout - (Date.now() - startTime);
        if (remainingTimeout <= 0 || info.didTimeout) {
          dev().fine(TAG9, "Timed out", timeout, info.didTimeout);
          fn(info);
        } else {
          dev().fine(TAG9, "Rescheduling with", remainingTimeout, info.timeRemaining());
          win.requestIdleCallback(rIC, {
            timeout: remainingTimeout
          });
        }
      } else {
        dev().fine(TAG9, "Running idle callback with ", minimumTimeRemaining);
        fn(info);
      }
    }
    win.requestIdleCallback(rIC, {
      timeout: timeout
    });
  }

  // src/core/constants/action-constants.js
  var RAW_OBJECT_ARGS_KEY = "__AMP_OBJECT_STRING__";
  var DEFAULT_ACTION = "activate";
  var ActionTrust_Enum = {
    LOW: 1,
    DEFAULT: 2,
    HIGH: 3
  };
  function actionTrustToString(actionTrust) {
    switch (actionTrust) {
      case ActionTrust_Enum.LOW:
        return "low";
      case ActionTrust_Enum.HIGH:
        return "high";
      default:
        devAssert(actionTrust === ActionTrust_Enum.DEFAULT);
        return "default";
    }
  }

  // src/iframe-helper.js
  var FIE_EMBED_PROP = "__AMP_EMBED__";
  function getFriendlyIframeEmbedOptional(iframe) {
    return iframe[FIE_EMBED_PROP];
  }

  // src/utils/intersection-observer-3p-host.js
  var INIT_TIME = Date.now();

  // src/custom-element.js
  var unresolvableExtensions = new Set();

  // src/service/custom-element-registry.js
  var docInitializedMap = new WeakMap();

  // src/core/data-structures/observable.js
  function _createForOfIteratorHelperLoose7(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray7(o)) || allowArrayLike && o && typeof o.length === "number") {
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
  function _unsupportedIterableToArray7(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray7(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray7(o, minLen);
  }
  function _arrayLikeToArray7(arr, len) {
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
      for (var _iterator = _createForOfIteratorHelperLoose7(this.handlers_), _step; !(_step = _iterator()).done; ) {
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

  // src/inabox/inabox-resources.js
  var TAG10 = "inabox-resources";
  var FOUR_FRAME_DELAY = 70;
  var InaboxResources = /* @__PURE__ */ function() {
    function InaboxResources2(ampdoc2) {
      var _this = this;
      this.ampdoc_ = ampdoc2;
      this.win = ampdoc2.win;
      this.resources_ = [];
      this.resourceIdCounter_ = 0;
      this.pass_ = new Pass(this.win, this.doPass_.bind(this), FOUR_FRAME_DELAY);
      this.passObservable_ = new Observable();
      this.firstPassDone_ = new Deferred();
      this.inViewportObserver_ = null;
      var input = Services.inputFor(this.win);
      input.setupInputModeClasses(ampdoc2);
      if (getMode(this.win).runtime != "inabox") {
        ampdoc2.onVisibilityChanged(function() {
          switch (ampdoc2.getVisibilityState()) {
            case VisibilityState_Enum.PAUSED:
              _this.resources_.forEach(function(r) {
                return r.pause();
              });
              break;
            case VisibilityState_Enum.VISIBLE:
              _this.resources_.forEach(function(r) {
                return r.resume();
              });
              _this.schedulePass();
              break;
          }
        });
      }
      this.pendingBuildResources_ = [];
      this.documentReady_ = false;
      this.ampdoc_.whenReady().then(function() {
        _this.documentReady_ = true;
        _this.buildReadyResources_();
        _this.schedulePass(1);
      });
    }
    var _proto = InaboxResources2.prototype;
    _proto.dispose = function dispose() {
      this.resources_.forEach(function(r) {
        return r.unload();
      });
      this.resources_.length = 0;
      if (this.inViewportObserver_) {
        this.inViewportObserver_.disconnect();
        this.inViewportObserver_ = null;
      }
    };
    _proto.get = function get() {
      return this.resources_.slice(0);
    };
    _proto.getAmpdoc = function getAmpdoc2() {
      return this.ampdoc_;
    };
    _proto.getResourceForElement = function getResourceForElement(element) {
      return Resource.forElement(element);
    };
    _proto.getResourceForElementOptional = function getResourceForElementOptional(element) {
      return Resource.forElementOptional(element);
    };
    _proto.getScrollDirection = function getScrollDirection() {
      return 1;
    };
    _proto.add = function add(element) {
      var resource = new Resource(++this.resourceIdCounter_, element, this);
      this.resources_.push(resource);
      dev().fine(TAG10, "resource added:", resource.debugid);
    };
    _proto.upgraded = function upgraded(element) {
      var resource = Resource.forElement(element);
      this.pendingBuildResources_.push(resource);
      this.buildReadyResources_();
    };
    _proto.remove = function remove2(element) {
      var resource = Resource.forElementOptional(element);
      if (!resource) {
        return;
      }
      if (this.inViewportObserver_) {
        this.inViewportObserver_.unobserve(element);
      }
      var index = this.resources_.indexOf(resource);
      if (index !== -1) {
        this.resources_.splice(index, 1);
      }
      dev().fine(TAG10, "element removed:", resource.debugid);
    };
    _proto.scheduleLayoutOrPreload = function scheduleLayoutOrPreload(unusedResource) {
      this.pass_.schedule();
    };
    _proto.schedulePass = function schedulePass(opt_delay) {
      return this.pass_.schedule(opt_delay);
    };
    _proto.updateOrEnqueueMutateTask = function updateOrEnqueueMutateTask(unusedResource, unusedNewRequest) {
    };
    _proto.schedulePassVsync = function schedulePassVsync() {
    };
    _proto.onNextPass = function onNextPass(callback) {
      this.passObservable_.add(callback);
    };
    _proto.ampInitComplete = function ampInitComplete() {
    };
    _proto.updateLayoutPriority = function updateLayoutPriority(unusedElement, unusedNewLayoutPriority) {
    };
    _proto.setRelayoutTop = function setRelayoutTop(unusedRelayoutTop) {
    };
    _proto.maybeHeightChanged = function maybeHeightChanged() {
    };
    _proto.whenFirstPass = function whenFirstPass() {
      return this.firstPassDone_.promise;
    };
    _proto.doPass_ = function doPass_() {
      var now = Date.now();
      dev().fine(TAG10, "doPass");
      this.resources_.forEach(function(resource) {
        if (!resource.isLayoutPending() || resource.element.R1()) {
          return;
        }
        resource.measure();
      });
      this.resources_.forEach(function(resource) {
        if (!resource.element.R1() && resource.getState() === ResourceState_Enum.READY_FOR_LAYOUT && resource.isDisplayed()) {
          resource.layoutScheduled(now);
          resource.startLayout();
        }
      });
      this.ampdoc_.signals().signal(READY_SCAN_SIGNAL);
      this.passObservable_.fire();
      this.firstPassDone_.resolve();
    };
    _proto.buildReadyResources_ = function buildReadyResources_() {
      var _this2 = this;
      for (var i = this.pendingBuildResources_.length - 1; i >= 0; i--) {
        var resource = this.pendingBuildResources_[i];
        if (this.documentReady_ || hasNextNodeInDocumentOrder(resource.element, this.ampdoc_.getRootNode())) {
          this.pendingBuildResources_.splice(i, 1);
          resource.build().then(function() {
            return _this2.schedulePass();
          });
          dev().fine(TAG10, "resource upgraded:", resource.debugid);
        }
      }
    };
    return InaboxResources2;
  }();
  function installInaboxResourcesServiceForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, "resources", InaboxResources);
  }

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

  // src/service/action-impl.js
  var TAG_ = "Action";
  var ACTION_MAP_ = "__AMP_ACTION_MAP__" + Math.random();
  var ACTION_QUEUE_ = "__AMP_ACTION_QUEUE__";
  var ACTION_HANDLER_ = "__AMP_ACTION_HANDLER__";
  var DEFAULT_DEBOUNCE_WAIT = 300;
  var DEFAULT_THROTTLE_INTERVAL = 100;
  var NON_AMP_ELEMENTS_ACTIONS_ = {
    "form": ["submit", "clear"]
  };
  var DEFAULT_EMAIL_ALLOWLIST = [{
    tagOrTarget: "AMP",
    method: "setState"
  }, {
    tagOrTarget: "*",
    method: "focus"
  }, {
    tagOrTarget: "*",
    method: "hide"
  }, {
    tagOrTarget: "*",
    method: "show"
  }, {
    tagOrTarget: "*",
    method: "toggleClass"
  }, {
    tagOrTarget: "*",
    method: "toggleChecked"
  }, {
    tagOrTarget: "*",
    method: "toggleVisibility"
  }];
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
  var ActionInvocation = /* @__PURE__ */ function() {
    function ActionInvocation2(node, method, args, source, caller, event, trust, actionEventType, tagOrTarget, sequenceId) {
      if (actionEventType === void 0) {
        actionEventType = "?";
      }
      if (tagOrTarget === void 0) {
        tagOrTarget = null;
      }
      if (sequenceId === void 0) {
        sequenceId = Math.random();
      }
      this.node = node;
      this.method = method;
      this.args = args;
      this.source = source;
      this.caller = caller;
      this.event = event;
      this.trust = trust;
      this.actionEventType = actionEventType;
      this.tagOrTarget = tagOrTarget || node.tagName;
      this.sequenceId = sequenceId;
    }
    var _proto = ActionInvocation2.prototype;
    _proto.satisfiesTrust = function satisfiesTrust(minimumTrust) {
      if (!isFiniteNumber(this.trust)) {
        dev().error(TAG_, "Invalid trust for '" + this.method + "': " + this.trust);
        return false;
      }
      if (this.trust < minimumTrust) {
        var t = actionTrustToString(this.trust);
        user().error(TAG_, '"' + this.actionEventType + '" event with "' + t + '" trust is not allowed to ' + ('invoke "' + this.tagOrTarget.toLowerCase() + "." + this.method + '".'));
        return false;
      }
      return true;
    };
    return ActionInvocation2;
  }();
  var ActionService = /* @__PURE__ */ function() {
    function ActionService2(ampdoc2, opt_root) {
      this.ampdoc = ampdoc2;
      this.root_ = opt_root || ampdoc2.getRootNode();
      this.isEmail_ = this.ampdoc.isSingleDoc() && isAmp4Email(this.root_);
      this.allowlist_ = this.isEmail_ ? DEFAULT_EMAIL_ALLOWLIST : null;
      this.globalTargets_ = map();
      this.globalMethodHandlers_ = map();
      this.addEvent("tap");
      this.addEvent("submit");
      this.addEvent("change");
      this.addEvent("input-debounced");
      this.addEvent("input-throttled");
      this.addEvent("valid");
      this.addEvent("invalid");
    }
    var _proto2 = ActionService2.prototype;
    _proto2.addEvent = function addEvent(name) {
      var _this = this;
      if (name == "tap") {
        this.root_.addEventListener("click", function(event) {
          if (!event.defaultPrevented) {
            var element = dev().assertElement(event.target);
            _this.trigger(element, name, event, ActionTrust_Enum.HIGH);
          }
        });
        this.root_.addEventListener("keydown", function(event) {
          var key = event.key, target = event.target;
          var element = dev().assertElement(target);
          if (key == Keys_Enum.ENTER || key == Keys_Enum.SPACE) {
            var role = element.getAttribute("role");
            var isTapEventRole = role && hasOwn(TAPPABLE_ARIA_ROLES, role.toLowerCase());
            if (!event.defaultPrevented && isTapEventRole) {
              var hasAction = _this.trigger(element, name, event, ActionTrust_Enum.HIGH);
              if (hasAction) {
                event.preventDefault();
              }
            }
          }
        });
      } else if (name == "submit") {
        this.root_.addEventListener(name, function(event) {
          var element = dev().assertElement(event.target);
          _this.trigger(element, name, event, ActionTrust_Enum.HIGH);
        });
      } else if (name == "change") {
        this.root_.addEventListener(name, function(event) {
          var element = dev().assertElement(event.target);
          _this.addTargetPropertiesAsDetail_(event);
          _this.trigger(element, name, event, ActionTrust_Enum.HIGH);
        });
      } else if (name == "input-debounced") {
        var debouncedInput = debounce(this.ampdoc.win, function(event) {
          var target = dev().assertElement(event.target);
          _this.trigger(target, name, event, ActionTrust_Enum.HIGH);
        }, DEFAULT_DEBOUNCE_WAIT);
        this.root_.addEventListener("input", function(event) {
          var deferredEvent = new DeferredEvent(event);
          _this.addTargetPropertiesAsDetail_(deferredEvent);
          debouncedInput(deferredEvent);
        });
      } else if (name == "input-throttled") {
        var throttledInput = throttle(this.ampdoc.win, function(event) {
          var target = dev().assertElement(event.target);
          _this.trigger(target, name, event, ActionTrust_Enum.HIGH);
        }, DEFAULT_THROTTLE_INTERVAL);
        this.root_.addEventListener("input", function(event) {
          var deferredEvent = new DeferredEvent(event);
          _this.addTargetPropertiesAsDetail_(deferredEvent);
          throttledInput(deferredEvent);
        });
      } else if (name == "valid" || name == "invalid") {
        this.root_.addEventListener(name, function(event) {
          var element = dev().assertElement(event.target);
          _this.trigger(element, name, event, ActionTrust_Enum.HIGH);
        });
      }
    };
    _proto2.addGlobalTarget = function addGlobalTarget(name, handler) {
      this.globalTargets_[name] = handler;
    };
    _proto2.addGlobalMethodHandler = function addGlobalMethodHandler(name, handler, minTrust) {
      if (minTrust === void 0) {
        minTrust = ActionTrust_Enum.DEFAULT;
      }
      this.globalMethodHandlers_[name] = {
        handler: handler,
        minTrust: minTrust
      };
    };
    _proto2.trigger = function trigger(target, eventType, event, trust, opt_args) {
      return this.action_(target, eventType, event, trust, opt_args);
    };
    _proto2.execute = function execute(target, method, args, source, caller, event, trust) {
      var invocation = new ActionInvocation(target, method, args, source, caller, event, trust);
      this.invoke_(invocation);
    };
    _proto2.installActionHandler = function installActionHandler(target, handler) {
      var targetId = target.getAttribute("id") || "";
      devAssert2(isAmpTagName(targetId) || target.tagName.toLowerCase() in NON_AMP_ELEMENTS_ACTIONS_, "AMP or special element expected: %s", target.tagName + "#" + targetId);
      if (target[ACTION_HANDLER_]) {
        dev().error(TAG_, "Action handler already installed for " + target);
        return;
      }
      target[ACTION_HANDLER_] = handler;
      var queuedInvocations = target[ACTION_QUEUE_];
      if (isArray(queuedInvocations)) {
        Services.timerFor(getWin(target)).delay(function() {
          queuedInvocations.forEach(function(invocation) {
            try {
              handler(invocation);
            } catch (e) {
              dev().error(TAG_, "Action execution failed:", invocation, e);
            }
          });
          target[ACTION_QUEUE_].length = 0;
        }, 1);
      }
    };
    _proto2.hasAction = function hasAction(element, actionEventType, opt_stopAt) {
      return !!this.findAction_(element, actionEventType, opt_stopAt);
    };
    _proto2.hasResolvableAction = function hasResolvableAction(element, actionEventType, opt_stopAt) {
      var _this2 = this;
      var action = this.findAction_(element, actionEventType, opt_stopAt);
      if (!action) {
        return false;
      }
      return action.actionInfos.some(function(action2) {
        var target = action2.target;
        return !!_this2.getActionNode_(target);
      });
    };
    _proto2.hasResolvableActionForTarget = function hasResolvableActionForTarget(element, actionEventType, targetElement, opt_stopAt) {
      var _this3 = this;
      var action = this.findAction_(element, actionEventType, opt_stopAt);
      if (!action) {
        return false;
      }
      return action.actionInfos.some(function(actionInfo) {
        var target = actionInfo.target;
        return _this3.getActionNode_(target) == targetElement;
      });
    };
    _proto2.getActionNode_ = function getActionNode_(target) {
      return this.globalTargets_[target] ? this.root_ : this.root_.getElementById(target);
    };
    _proto2.setAllowlist = function setAllowlist(allowlist) {
      devAssert2(allowlist.every(function(v) {
        return v.tagOrTarget && v.method;
      }), "Action allowlist entries should be of shape { tagOrTarget: string, method: string }");
      this.allowlist_ = allowlist;
    };
    _proto2.addToAllowlist = function addToAllowlist(tagOrTarget, methods, opt_forFormat) {
      var _this4 = this;
      if (opt_forFormat && opt_forFormat.includes("email") !== this.isEmail_) {
        return;
      }
      if (!this.allowlist_) {
        this.allowlist_ = [];
      }
      if (!isArray(methods)) {
        methods = [methods];
      }
      methods.forEach(function(method) {
        if (_this4.allowlist_.some(function(v) {
          return v.tagOrTarget == tagOrTarget && v.method == method;
        })) {
          return;
        }
        _this4.allowlist_.push({
          tagOrTarget: tagOrTarget,
          method: method
        });
      });
    };
    _proto2.action_ = function action_(source, actionEventType, event, trust, opt_args) {
      var _this5 = this;
      var action = this.findAction_(source, actionEventType);
      if (!action) {
        return false;
      }
      var sequenceId = Math.random();
      var currentPromise = null;
      action.actionInfos.forEach(function(actionInfo) {
        var args = actionInfo.args, method = actionInfo.method, str = actionInfo.str, target = actionInfo.target;
        var dereferencedArgs = dereferenceArgsVariables(args, event, opt_args);
        var invokeAction = function invokeAction2() {
          var node = _this5.getActionNode_(target);
          if (!node) {
            _this5.error_('Target "' + target + '" not found for action [' + str + "].");
            return;
          }
          var invocation = new ActionInvocation(node, method, dereferencedArgs, source, action.node, event, trust, actionEventType, node.tagName || target, sequenceId);
          return _this5.invoke_(invocation);
        };
        currentPromise = currentPromise ? currentPromise.then(invokeAction) : invokeAction();
      });
      return action.actionInfos.length >= 1;
    };
    _proto2.error_ = function error_(message, opt_element) {
      if (opt_element) {
        var e = user().createError("[" + TAG_ + "] " + message);
        reportError(e, opt_element);
        throw e;
      } else {
        user().error(TAG_, message);
      }
    };
    _proto2.invoke_ = function invoke_(invocation) {
      var method = invocation.method, tagOrTarget = invocation.tagOrTarget;
      if (this.allowlist_) {
        if (!isActionAllowlisted(invocation, this.allowlist_)) {
          this.error_('"' + tagOrTarget + "." + method + '" is not allowlisted ' + JSON.stringify(this.allowlist_) + ".");
          return null;
        }
      }
      var globalTarget = this.globalTargets_[tagOrTarget];
      if (globalTarget) {
        return globalTarget(invocation);
      }
      var node = dev().assertElement(invocation.node);
      var globalMethod = this.globalMethodHandlers_[method];
      if (globalMethod && invocation.satisfiesTrust(globalMethod.minTrust)) {
        return globalMethod.handler(invocation);
      }
      var lowerTagName = node.tagName.toLowerCase();
      if (isAmpTagName(lowerTagName)) {
        if (node.enqueAction) {
          node.enqueAction(invocation);
        } else {
          this.error_('Unrecognized AMP element "' + lowerTagName + '".', node);
        }
        return null;
      }
      var nonAmpActions = NON_AMP_ELEMENTS_ACTIONS_[lowerTagName];
      var targetId = node.getAttribute("id") || "";
      if (isAmpTagName(targetId) || nonAmpActions && nonAmpActions.indexOf(method) > -1) {
        var handler = node[ACTION_HANDLER_];
        if (handler) {
          handler(invocation);
        } else {
          node[ACTION_QUEUE_] = node[ACTION_QUEUE_] || [];
          node[ACTION_QUEUE_].push(invocation);
        }
        return null;
      }
      this.error_("Target (" + tagOrTarget + ") doesn't support \"" + method + '" action.', invocation.caller);
      return null;
    };
    _proto2.findAction_ = function findAction_(target, actionEventType, opt_stopAt) {
      var n = target;
      while (n) {
        if (opt_stopAt && n == opt_stopAt) {
          return null;
        }
        var actionInfos = this.matchActionInfos_(n, actionEventType);
        if (actionInfos && isEnabled(n)) {
          return {
            node: n,
            actionInfos: devAssert2(actionInfos)
          };
        }
        n = n.parentElement;
      }
      return null;
    };
    _proto2.matchActionInfos_ = function matchActionInfos_(node, actionEventType) {
      var actionMap = this.getActionMap_(node, actionEventType);
      if (!actionMap) {
        return null;
      }
      return actionMap[actionEventType] || null;
    };
    _proto2.getActionMap_ = function getActionMap_(node, actionEventType) {
      var actionMap = node[ACTION_MAP_];
      if (actionMap === void 0) {
        actionMap = null;
        if (node.hasAttribute("on")) {
          var action = node.getAttribute("on");
          actionMap = parseActionMap(action, node);
          node[ACTION_MAP_] = actionMap;
        } else if (node.hasAttribute("execute")) {
          var _action = node.getAttribute("execute");
          actionMap = parseActionMap(actionEventType + ":" + _action, node);
          node[ACTION_MAP_] = actionMap;
        }
      }
      return actionMap;
    };
    _proto2.setActions = function setActions(node, actionsStr) {
      node.setAttribute("on", actionsStr);
      delete node[ACTION_MAP_];
    };
    _proto2.addTargetPropertiesAsDetail_ = function addTargetPropertiesAsDetail_(event) {
      var detail = map();
      var target = event.target;
      if (target.value !== void 0) {
        detail["value"] = target.value;
      }
      if (target.tagName == "INPUT") {
        detail["valueAsNumber"] = Number(target.value);
      }
      if (target.checked !== void 0) {
        detail["checked"] = target.checked;
      }
      if (target.min !== void 0 || target.max !== void 0) {
        detail["min"] = target.min;
        detail["max"] = target.max;
      }
      if (target.files) {
        detail["files"] = toArray(target.files).map(function(file) {
          return {
            "name": file.name,
            "size": file.size,
            "type": file.type
          };
        });
      }
      if (Object.keys(detail).length > 0) {
        try {
          event.detail = detail;
        } catch (_unused) {
        }
      }
    };
    return ActionService2;
  }();
  function isAmpTagName(lowercaseTagName) {
    return lowercaseTagName.substring(0, 4) === "amp-";
  }
  function isActionAllowlisted(invocation, allowlist) {
    var method = invocation.method;
    var node = invocation.node, tagOrTarget = invocation.tagOrTarget;
    if (method === DEFAULT_ACTION && typeof node.getDefaultActionAlias == "function") {
      method = node.getDefaultActionAlias();
    }
    var lcMethod = method.toLowerCase();
    var lcTagOrTarget = tagOrTarget.toLowerCase();
    return allowlist.some(function(w) {
      if (w.tagOrTarget.toLowerCase() === lcTagOrTarget || w.tagOrTarget === "*") {
        if (w.method.toLowerCase() === lcMethod) {
          return true;
        }
      }
      return false;
    });
  }
  var DeferredEvent = function DeferredEvent2(event) {
    this.detail = null;
    cloneWithoutFunctions(event, this);
  };
  function cloneWithoutFunctions(original, opt_dest) {
    var clone = opt_dest || map();
    for (var prop in original) {
      var value = original[prop];
      if (typeof value === "function") {
        clone[prop] = notImplemented;
      } else {
        clone[prop] = original[prop];
      }
    }
    return clone;
  }
  function notImplemented() {
    devAssert2(null, "Deferred events cannot access native event functions.");
  }
  function parseActionMap(action, context) {
    var assertAction = assertActionForParser.bind(null, action, context);
    var assertToken = assertTokenForParser.bind(null, action, context);
    var actionMap = null;
    var toks = new ParserTokenizer(action);
    var tok;
    var peek;
    do {
      tok = toks.next();
      if (tok.type == TokenType_Enum.EOF || tok.type == TokenType_Enum.SEPARATOR && tok.value == ";") {
      } else if (tok.type == TokenType_Enum.LITERAL || tok.type == TokenType_Enum.ID) {
        var event = tok.value;
        assertToken(toks.next(), [TokenType_Enum.SEPARATOR], ":");
        var actions = [];
        do {
          var target = assertToken(toks.next(), [TokenType_Enum.LITERAL, TokenType_Enum.ID]).value;
          var method = DEFAULT_ACTION;
          var args = null;
          peek = toks.peek();
          if (peek.type == TokenType_Enum.SEPARATOR && peek.value == ".") {
            toks.next();
            method = assertToken(toks.next(), [TokenType_Enum.LITERAL, TokenType_Enum.ID]).value || method;
            peek = toks.peek();
            if (peek.type == TokenType_Enum.SEPARATOR && peek.value == "(") {
              toks.next();
              args = tokenizeMethodArguments(toks, assertToken, assertAction);
            }
          }
          actions.push({
            event: event,
            target: target,
            method: method,
            args: args && getMode().test && Object.freeze ? Object.freeze(args) : args,
            str: action
          });
          peek = toks.peek();
        } while (peek.type == TokenType_Enum.SEPARATOR && peek.value == "," && toks.next());
        if (!actionMap) {
          actionMap = map();
        }
        actionMap[event] = actions;
      } else {
        assertAction(false, "; unexpected token [" + (tok.value || "") + "]");
      }
    } while (tok.type != TokenType_Enum.EOF);
    return actionMap;
  }
  function tokenizeMethodArguments(toks, assertToken, assertAction) {
    var peek = toks.peek();
    var tok;
    var args = null;
    if (peek.type == TokenType_Enum.OBJECT) {
      args = map();
      var _toks$next = toks.next(), value = _toks$next.value;
      args[RAW_OBJECT_ARGS_KEY] = value;
      assertToken(toks.next(), [TokenType_Enum.SEPARATOR], ")");
    } else {
      do {
        tok = toks.next();
        var _tok = tok, type = _tok.type, _value = _tok.value;
        if (type == TokenType_Enum.SEPARATOR && (_value == "," || _value == ")")) {
        } else if (type == TokenType_Enum.LITERAL || type == TokenType_Enum.ID) {
          assertToken(toks.next(), [TokenType_Enum.SEPARATOR], "=");
          tok = assertToken(toks.next(true), [TokenType_Enum.LITERAL, TokenType_Enum.ID]);
          var argValueTokens = [tok];
          if (tok.type == TokenType_Enum.ID) {
            for (peek = toks.peek(); peek.type == TokenType_Enum.SEPARATOR && peek.value == "."; peek = toks.peek()) {
              toks.next();
              tok = assertToken(toks.next(false), [TokenType_Enum.ID]);
              argValueTokens.push(tok);
            }
          }
          var argValue = argValueForTokens(argValueTokens);
          if (!args) {
            args = map();
          }
          args[_value] = argValue;
          peek = toks.peek();
          assertAction(peek.type == TokenType_Enum.SEPARATOR && (peek.value == "," || peek.value == ")"), "Expected either [,] or [)]");
        } else {
          assertAction(false, "; unexpected token [" + (tok.value || "") + "]");
        }
      } while (!(tok.type == TokenType_Enum.SEPARATOR && tok.value == ")"));
    }
    return args;
  }
  function argValueForTokens(tokens) {
    if (tokens.length == 0) {
      return null;
    } else if (tokens.length == 1) {
      return tokens[0].value;
    } else {
      var values = tokens.map(function(token) {
        return token.value;
      });
      var expression = values.join(".");
      return {
        expression: expression
      };
    }
  }
  function dereferenceArgsVariables(args, event, opt_args) {
    if (!args) {
      return args;
    }
    var data = opt_args || dict({});
    if (event) {
      var detail = getDetail(event);
      if (detail) {
        data["event"] = detail;
      }
    }
    var applied = map();
    Object.keys(args).forEach(function(key) {
      var value = args[key];
      if (typeof value == "object" && value.expression) {
        var expr = value.expression;
        var exprValue = getValueForExpr(data, expr);
        value = exprValue === void 0 ? null : exprValue;
      }
      if (data[value]) {
        applied[key] = data[value];
      } else {
        applied[key] = value;
      }
    });
    return applied;
  }
  function assertActionForParser(s, context, condition, opt_message) {
    return userAssert(condition, "Invalid action definition in %s: [%s] %s", context, s, opt_message || "");
  }
  function assertTokenForParser(s, context, tok, types, opt_value) {
    if (opt_value !== void 0) {
      assertActionForParser(s, context, types.includes(tok.type) && tok.value == opt_value, "; expected [" + opt_value + "]");
    } else {
      assertActionForParser(s, context, types.includes(tok.type));
    }
    return tok;
  }
  var TokenType_Enum = {
    INVALID: 0,
    EOF: 1,
    SEPARATOR: 2,
    LITERAL: 3,
    ID: 4,
    OBJECT: 5
  };
  var WHITESPACE_SET = " 	\n\r\f\v\xA0\u2028\u2029";
  var SEPARATOR_SET = ";:.()=,|!";
  var STRING_SET = "\"'";
  var OBJECT_SET = "{}";
  var SPECIAL_SET = WHITESPACE_SET + SEPARATOR_SET + STRING_SET + OBJECT_SET;
  var ParserTokenizer = /* @__PURE__ */ function() {
    function ParserTokenizer2(str) {
      this.str_ = str;
      this.index_ = -1;
    }
    var _proto3 = ParserTokenizer2.prototype;
    _proto3.next = function next(opt_convertValues) {
      var tok = this.next_(opt_convertValues || false);
      this.index_ = tok.index;
      return tok;
    };
    _proto3.peek = function peek(opt_convertValues) {
      return this.next_(opt_convertValues || false);
    };
    _proto3.next_ = function next_(convertValues) {
      var newIndex = this.index_ + 1;
      if (newIndex >= this.str_.length) {
        return {
          type: TokenType_Enum.EOF,
          index: this.index_
        };
      }
      var c = this.str_.charAt(newIndex);
      if (WHITESPACE_SET.indexOf(c) != -1) {
        newIndex++;
        for (; newIndex < this.str_.length; newIndex++) {
          if (WHITESPACE_SET.indexOf(this.str_.charAt(newIndex)) == -1) {
            break;
          }
        }
        if (newIndex >= this.str_.length) {
          return {
            type: TokenType_Enum.EOF,
            index: newIndex
          };
        }
        c = this.str_.charAt(newIndex);
      }
      if (convertValues && (isNum(c) || c == "." && newIndex + 1 < this.str_.length && isNum(this.str_[newIndex + 1]))) {
        var hasFraction = c == ".";
        var _end = newIndex + 1;
        for (; _end < this.str_.length; _end++) {
          var c2 = this.str_.charAt(_end);
          if (c2 == ".") {
            hasFraction = true;
            continue;
          }
          if (!isNum(c2)) {
            break;
          }
        }
        var _s = this.str_.substring(newIndex, _end);
        var value = hasFraction ? parseFloat(_s) : parseInt(_s, 10);
        newIndex = _end - 1;
        return {
          type: TokenType_Enum.LITERAL,
          value: value,
          index: newIndex
        };
      }
      if (SEPARATOR_SET.indexOf(c) != -1) {
        return {
          type: TokenType_Enum.SEPARATOR,
          value: c,
          index: newIndex
        };
      }
      if (STRING_SET.indexOf(c) != -1) {
        var _end2 = -1;
        for (var i = newIndex + 1; i < this.str_.length; i++) {
          if (this.str_.charAt(i) == c) {
            _end2 = i;
            break;
          }
        }
        if (_end2 == -1) {
          return {
            type: TokenType_Enum.INVALID,
            index: newIndex
          };
        }
        var _value2 = this.str_.substring(newIndex + 1, _end2);
        newIndex = _end2;
        return {
          type: TokenType_Enum.LITERAL,
          value: _value2,
          index: newIndex
        };
      }
      if (c == "{") {
        var numberOfBraces = 1;
        var _end3 = -1;
        for (var _i = newIndex + 1; _i < this.str_.length; _i++) {
          var char = this.str_[_i];
          if (char == "{") {
            numberOfBraces++;
          } else if (char == "}") {
            numberOfBraces--;
          }
          if (numberOfBraces <= 0) {
            _end3 = _i;
            break;
          }
        }
        if (_end3 == -1) {
          return {
            type: TokenType_Enum.INVALID,
            index: newIndex
          };
        }
        var _value3 = this.str_.substring(newIndex, _end3 + 1);
        newIndex = _end3;
        return {
          type: TokenType_Enum.OBJECT,
          value: _value3,
          index: newIndex
        };
      }
      var end = newIndex + 1;
      for (; end < this.str_.length; end++) {
        if (SPECIAL_SET.indexOf(this.str_.charAt(end)) != -1) {
          break;
        }
      }
      var s = this.str_.substring(newIndex, end);
      newIndex = end - 1;
      if (convertValues && (s == "true" || s == "false")) {
        var _value4 = s == "true";
        return {
          type: TokenType_Enum.LITERAL,
          value: _value4,
          index: newIndex
        };
      }
      if (!isNum(s.charAt(0))) {
        return {
          type: TokenType_Enum.ID,
          value: s,
          index: newIndex
        };
      }
      return {
        type: TokenType_Enum.LITERAL,
        value: s,
        index: newIndex
      };
    };
    return ParserTokenizer2;
  }();
  function isNum(c) {
    return c >= "0" && c <= "9";
  }
  function installActionServiceForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, "action", ActionService, true);
  }

  // src/core/types/string/base64.js
  var base64UrlEncodeSubs = {
    "+": "-",
    "/": "_",
    "=": "."
  };
  function base64DecodeToBytes(str) {
    return stringToBytes(atob(str));
  }
  function base64UrlEncodeFromBytes(bytes) {
    var str = bytesToString(bytes);
    return btoa(str).replace(/[+/=]/g, function(ch) {
      return base64UrlEncodeSubs[ch];
    });
  }

  // src/service/cache-cid-api.js
  var SERVICE_KEY_ = "AIzaSyDKtqGxnoeIqVM33Uf7hRSa3GJxuzR7mLc";
  var TAG_2 = "CacheCidApi";
  var CACHE_API_URL = "https://ampcid.google.com/v1/cache:getClientId?key=";
  var TIMEOUT_ = 3e4;
  var CacheCidApi = /* @__PURE__ */ function() {
    function CacheCidApi2(ampdoc2) {
      this.ampdoc_ = ampdoc2;
      this.viewer_ = Services.viewerForDoc(this.ampdoc_);
      this.publisherCidPromise_ = null;
      this.timer_ = Services.timerFor(this.ampdoc_.win);
    }
    var _proto = CacheCidApi2.prototype;
    _proto.isSupported = function isSupported() {
      return this.viewer_.isCctEmbedded() && this.viewer_.isProxyOrigin();
    };
    _proto.getScopedCid = function getScopedCid(scope) {
      var _this = this;
      if (!this.viewer_.isCctEmbedded()) {
        return Promise.resolve(null);
      }
      if (!this.publisherCidPromise_) {
        var url = CACHE_API_URL + SERVICE_KEY_;
        this.publisherCidPromise_ = this.fetchCid_(url);
      }
      return this.publisherCidPromise_.then(function(publisherCid) {
        return publisherCid ? _this.scopeCid_(publisherCid, scope) : null;
      });
    };
    _proto.fetchCid_ = function fetchCid_(url, useAlternate) {
      var _this2 = this;
      if (useAlternate === void 0) {
        useAlternate = true;
      }
      var payload = dict({
        "publisherOrigin": getSourceOrigin(this.ampdoc_.win.location)
      });
      var timeoutMessage = "fetchCidTimeout";
      return this.timer_.timeoutPromise(TIMEOUT_, Services.xhrFor(this.ampdoc_.win).fetchJson(url, {
        method: "POST",
        ampCors: false,
        credentials: "include",
        mode: "cors",
        body: payload
      }), timeoutMessage).then(function(res) {
        return res.json().then(function(response) {
          if (response["optOut"]) {
            return null;
          }
          var cid = response["publisherClientId"];
          if (!cid && useAlternate && response["alternateUrl"]) {
            var alt = response["alternateUrl"] + "?key=" + SERVICE_KEY_;
            return _this2.fetchCid_(dev().assertString(alt), false);
          }
          return cid;
        });
      }).catch(function(e) {
        if (e && e.response) {
          e.response.json().then(function(res) {
            dev().error(TAG_2, JSON.stringify(res));
          });
        } else {
          var isTimeout = e && e.message == timeoutMessage;
          if (isTimeout) {
            dev().expectedError(TAG_2, e);
          } else {
            dev().error(TAG_2, e);
          }
        }
        return null;
      });
    };
    _proto.scopeCid_ = function scopeCid_(publisherCid, scope) {
      var text = publisherCid + ";" + scope;
      return Services.cryptoFor(this.ampdoc_.win).sha384Base64(text).then(function(enc) {
        return "amp-" + enc;
      });
    };
    return CacheCidApi2;
  }();

  // src/cookies.js
  var TEST_COOKIE_NAME = "-test-amp-cookie-tmp";
  function getCookie(win, name) {
    var cookieString = tryGetDocumentCookie_(win);
    if (!cookieString) {
      return null;
    }
    var cookies = cookieString.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      var eq = cookie.indexOf("=");
      if (eq == -1) {
        continue;
      }
      if (tryDecodeUriComponent(cookie.substring(0, eq).trim()) == name) {
        var value = cookie.substring(eq + 1).trim();
        return tryDecodeUriComponent(value, value);
      }
    }
    return null;
  }
  function tryGetDocumentCookie_(win) {
    try {
      return win.document.cookie;
    } catch (e) {
      return "";
    }
  }
  function setCookie(win, name, value, expirationTime, options) {
    if (options === void 0) {
      options = {};
    }
    checkOriginForSettingCookie(win, options, name);
    var domain = void 0;
    if (options.domain) {
      domain = options.domain;
    } else if (options.highestAvailableDomain) {
      domain = getHighestAvailableDomain(win);
    }
    trySetCookie(win, name, value, expirationTime, domain, options.sameSite, options.secure);
  }
  function getHighestAvailableDomain(win) {
    var metaTag = win.document.head && win.document.head.querySelector("meta[name='amp-cookie-scope']");
    if (metaTag) {
      var cookieScope = metaTag.getAttribute("content") || "";
      var sourceOrigin = getSourceOrigin(win.location.href);
      if (endsWith(sourceOrigin, "." + cookieScope)) {
        return cookieScope;
      } else {
        return sourceOrigin.split("://")[1];
      }
    }
    if (!isProxyOrigin(win.location.href)) {
      var parts = win.location.hostname.split(".");
      var domain = parts[parts.length - 1];
      var testCookieName = getTempCookieName(win);
      for (var i = parts.length - 2; i >= 0; i--) {
        domain = parts[i] + "." + domain;
        trySetCookie(win, testCookieName, "delete", Date.now() + 1e3, domain);
        if (getCookie(win, testCookieName) == "delete") {
          trySetCookie(win, testCookieName, "delete", Date.now() - 1e3, domain);
          return domain;
        }
      }
    }
    return null;
  }
  function trySetCookie(win, name, value, expirationTime, domain, sameSite, secure) {
    if (domain == "ampproject.org") {
      value = "delete";
      expirationTime = 0;
    }
    var cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; path=/" + (domain ? "; domain=" + domain : "") + "; expires=" + new Date(expirationTime).toUTCString() + getSameSiteString(win, sameSite) + (secure ? "; Secure" : "");
    try {
      win.document.cookie = cookie;
    } catch (ignore) {
    }
  }
  function getSameSiteString(win, sameSite) {
    if (!sameSite) {
      return "";
    }
    return "; SameSite=" + sameSite;
  }
  function checkOriginForSettingCookie(win, options, name) {
    if (options.allowOnProxyOrigin) {
      userAssert(!options.highestAvailableDomain, "Could not support highestAvailable Domain on proxy origin, specify domain explicitly");
      return;
    }
    userAssert(!isProxyOrigin(win.location.href), "Should never attempt to set cookie on proxy origin: " + name);
    var current = parseUrlDeprecated(win.location.href).hostname.toLowerCase();
    var proxy = parseUrlDeprecated(urls.cdn).hostname.toLowerCase();
    userAssert(!(current == proxy || endsWith(current, "." + proxy)), "Should never attempt to set cookie on proxy origin. (in depth check): " + name);
  }
  function getTempCookieName(win) {
    var testCookieName = TEST_COOKIE_NAME;
    var counter = 0;
    while (getCookie(win, testCookieName)) {
      testCookieName = TEST_COOKIE_NAME + counter;
    }
    return testCookieName;
  }

  // src/service/cid-api.js
  var GOOGLE_API_URL = "https://ampcid.google.com/v1/publisher:getClientId?key=";
  var TAG11 = "GoogleCidApi";
  var AMP_TOKEN = "AMP_TOKEN";
  var TokenStatus_Enum = {
    RETRIEVING: "$RETRIEVING",
    OPT_OUT: "$OPT_OUT",
    NOT_FOUND: "$NOT_FOUND",
    ERROR: "$ERROR"
  };
  var TIMEOUT = 3e4;
  var HOUR = 60 * 60 * 1e3;
  var DAY = 24 * HOUR;
  var YEAR = 365 * DAY;
  var GoogleCidApi = /* @__PURE__ */ function() {
    function GoogleCidApi2(ampdoc2) {
      this.win_ = ampdoc2.win;
      this.timer_ = Services.timerFor(this.win_);
      this.cidPromise_ = {};
      var _Services$documentInf = Services.documentInfoForDoc(ampdoc2), canonicalUrl = _Services$documentInf.canonicalUrl;
      this.canonicalOrigin_ = canonicalUrl ? parseUrlDeprecated(canonicalUrl).origin : null;
    }
    var _proto = GoogleCidApi2.prototype;
    _proto.getScopedCid = function getScopedCid(apiKey, scope) {
      var _this = this;
      if (this.cidPromise_[scope]) {
        return this.cidPromise_[scope];
      }
      var token;
      return this.cidPromise_[scope] = this.timer_.poll(200, function() {
        token = getCookie(_this.win_, AMP_TOKEN);
        return token !== TokenStatus_Enum.RETRIEVING;
      }).then(function() {
        if (token === TokenStatus_Enum.OPT_OUT) {
          return TokenStatus_Enum.OPT_OUT;
        }
        var forceFetch = token === TokenStatus_Enum.NOT_FOUND && _this.isReferrerProxyOrigin_();
        if (!forceFetch && _this.isStatusToken_(token)) {
          return null;
        }
        if (!token || _this.isStatusToken_(token)) {
          _this.persistToken_(TokenStatus_Enum.RETRIEVING, TIMEOUT);
        }
        var url = GOOGLE_API_URL + apiKey;
        return _this.fetchCid_(dev().assertString(url), scope, token).then(function(response) {
          var cid = _this.handleResponse_(response);
          if (!cid && response["alternateUrl"]) {
            var altUrl = response["alternateUrl"] + "?key=" + apiKey;
            return _this.fetchCid_(dev().assertString(altUrl), scope, token).then(_this.handleResponse_.bind(_this));
          }
          return cid;
        }).catch(function(e) {
          _this.persistToken_(TokenStatus_Enum.ERROR, TIMEOUT);
          if (e && e.response) {
            e.response.json().then(function(res) {
              dev().error(TAG11, JSON.stringify(res));
            });
          } else {
            dev().error(TAG11, e);
          }
          return null;
        });
      });
    };
    _proto.fetchCid_ = function fetchCid_(url, scope, token) {
      var payload = dict({
        "originScope": scope,
        "canonicalOrigin": this.canonicalOrigin_
      });
      if (token) {
        payload["securityToken"] = token;
      }
      return this.timer_.timeoutPromise(TIMEOUT, Services.xhrFor(this.win_).fetchJson(url, {
        method: "POST",
        ampCors: false,
        credentials: "include",
        mode: "cors",
        body: payload
      }).then(function(res) {
        return res.json();
      }));
    };
    _proto.handleResponse_ = function handleResponse_(res) {
      if (res["optOut"]) {
        this.persistToken_(TokenStatus_Enum.OPT_OUT, YEAR);
        return TokenStatus_Enum.OPT_OUT;
      }
      if (res["clientId"]) {
        this.persistToken_(res["securityToken"], YEAR);
        return res["clientId"];
      }
      if (res["alternateUrl"]) {
        return null;
      }
      this.persistToken_(TokenStatus_Enum.NOT_FOUND, HOUR);
      return null;
    };
    _proto.persistToken_ = function persistToken_(tokenValue, expires) {
      if (tokenValue) {
        setCookie(this.win_, AMP_TOKEN, tokenValue, this.expiresIn_(expires), {
          highestAvailableDomain: true
        });
      }
    };
    _proto.expiresIn_ = function expiresIn_(time) {
      return this.win_.Date.now() + time;
    };
    _proto.isReferrerProxyOrigin_ = function isReferrerProxyOrigin_() {
      return isProxyOrigin(WindowInterface.getDocumentReferrer(this.win_));
    };
    _proto.isStatusToken_ = function isStatusToken_(token) {
      return token && token[0] === "$";
    };
    return GoogleCidApi2;
  }();

  // src/service/viewer-cid-api.js
  var ViewerCidApi = /* @__PURE__ */ function() {
    function ViewerCidApi2(ampdoc2) {
      this.ampdoc_ = ampdoc2;
      this.viewer_ = Services.viewerForDoc(this.ampdoc_);
      var _Services$documentInf = Services.documentInfoForDoc(this.ampdoc_), canonicalUrl = _Services$documentInf.canonicalUrl;
      this.canonicalOrigin_ = canonicalUrl ? parseUrlDeprecated(canonicalUrl).origin : null;
    }
    var _proto = ViewerCidApi2.prototype;
    _proto.isSupported = function isSupported() {
      if (!this.viewer_.hasCapability("cid")) {
        return Promise.resolve(false);
      }
      return this.viewer_.isTrustedViewer();
    };
    _proto.getScopedCid = function getScopedCid(apiKey, scope) {
      var payload = dict({
        "scope": scope,
        "clientIdApi": !!apiKey,
        "canonicalOrigin": this.canonicalOrigin_
      });
      if (apiKey) {
        payload["apiKey"] = apiKey;
      }
      return this.viewer_.sendMessageAwaitResponse("cid", payload);
    };
    return ViewerCidApi2;
  }();

  // src/service/cid-impl.js
  var ONE_DAY_MILLIS = 24 * 3600 * 1e3;
  var BASE_CID_MAX_AGE_MILLIS = 365 * ONE_DAY_MILLIS;
  var SCOPE_NAME_VALIDATOR = /^[a-zA-Z0-9-_.]+$/;
  var CID_OPTOUT_STORAGE_KEY = "amp-cid-optout";
  var CID_OPTOUT_VIEWER_MESSAGE = "cidOptOut";
  var CID_BACKUP_STORAGE_KEY = "amp-cid:";
  var TAG_3 = "CID";
  var GOOGLE_CID_API_META_NAME = "amp-google-client-id-api";
  var CID_API_SCOPE_ALLOWLIST = {
    "googleanalytics": "AMP_ECID_GOOGLE"
  };
  var API_KEYS = {
    "googleanalytics": "AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM"
  };
  var Cid = /* @__PURE__ */ function() {
    function Cid2(ampdoc2) {
      this.ampdoc = ampdoc2;
      this.baseCid_ = null;
      this.externalCidCache_ = Object.create(null);
      this.cacheCidApi_ = new CacheCidApi(ampdoc2);
      this.viewerCidApi_ = new ViewerCidApi(ampdoc2);
      this.cidApi_ = new GoogleCidApi(ampdoc2);
      this.apiKeyMap_ = null;
      this.isBackupCidExpOn = isExperimentOn(this.ampdoc.win, "amp-cid-backup");
    }
    var _proto2 = Cid2.prototype;
    _proto2.get = function get(getCidStruct, consent, opt_persistenceConsent) {
      var _this = this;
      userAssert(SCOPE_NAME_VALIDATOR.test(getCidStruct.scope) && SCOPE_NAME_VALIDATOR.test(getCidStruct.cookieName), "The CID scope and cookie name must only use the characters [a-zA-Z0-9-_.]+\nInstead found: %s", getCidStruct.scope);
      return consent.then(function() {
        return _this.ampdoc.whenFirstVisible();
      }).then(function() {
        return isOptedOutOfCid(_this.ampdoc);
      }).then(function(optedOut) {
        if (optedOut) {
          return "";
        }
        var cidPromise = _this.getExternalCid_(getCidStruct, opt_persistenceConsent || consent);
        return Services.timerFor(_this.ampdoc.win).timeoutPromise(1e4, cidPromise, 'Getting cid for "' + getCidStruct.scope + '" timed out').catch(function(error) {
          rethrowAsync(error);
        });
      });
    };
    _proto2.optOut = function optOut() {
      return optOutOfCid(this.ampdoc);
    };
    _proto2.getExternalCid_ = function getExternalCid_(getCidStruct, persistenceConsent) {
      var _this2 = this;
      var scope = getCidStruct.scope;
      var url = parseUrlDeprecated(this.ampdoc.win.location.href);
      if (!isProxyOrigin(url)) {
        var apiKey = this.isScopeOptedIn_(scope);
        if (apiKey) {
          return this.cidApi_.getScopedCid(apiKey, scope).then(function(scopedCid) {
            if (scopedCid == TokenStatus_Enum.OPT_OUT) {
              return null;
            }
            if (scopedCid) {
              var cookieName = getCidStruct.cookieName || scope;
              setCidCookie(_this2.ampdoc.win, cookieName, scopedCid);
              return scopedCid;
            }
            return getOrCreateCookie(_this2, getCidStruct, persistenceConsent);
          });
        }
        return getOrCreateCookie(this, getCidStruct, persistenceConsent);
      }
      return this.viewerCidApi_.isSupported().then(function(supported) {
        if (supported) {
          var _apiKey = _this2.isScopeOptedIn_(scope);
          return _this2.viewerCidApi_.getScopedCid(_apiKey, scope);
        }
        if (_this2.cacheCidApi_.isSupported() && _this2.isScopeOptedIn_(scope)) {
          return _this2.cacheCidApi_.getScopedCid(scope).then(function(scopedCid) {
            if (scopedCid) {
              return scopedCid;
            }
            return _this2.scopeBaseCid_(persistenceConsent, scope, url);
          });
        }
        return _this2.scopeBaseCid_(persistenceConsent, scope, url);
      });
    };
    _proto2.scopeBaseCid_ = function scopeBaseCid_(persistenceConsent, scope, url) {
      var _this3 = this;
      return getBaseCid(this, persistenceConsent).then(function(baseCid) {
        return Services.cryptoFor(_this3.ampdoc.win).sha384Base64(baseCid + getProxySourceOrigin(url) + scope);
      });
    };
    _proto2.isScopeOptedIn_ = function isScopeOptedIn_(scope) {
      if (!this.apiKeyMap_) {
        this.apiKeyMap_ = this.getOptedInScopes_();
      }
      return this.apiKeyMap_[scope];
    };
    _proto2.getOptedInScopes_ = function getOptedInScopes_() {
      var apiKeyMap = {};
      var optInMeta = this.ampdoc.getMetaByName(GOOGLE_CID_API_META_NAME);
      if (optInMeta) {
        optInMeta.split(",").forEach(function(item) {
          item = item.trim();
          if (item.indexOf("=") > 0) {
            var pair = item.split("=");
            var scope = pair[0].trim();
            apiKeyMap[scope] = pair[1].trim();
          } else {
            var clientName = item;
            var _scope = CID_API_SCOPE_ALLOWLIST[clientName];
            if (_scope) {
              apiKeyMap[_scope] = API_KEYS[clientName];
            } else {
              user().warn(TAG_3, "Unsupported client for Google CID API: " + clientName + "." + ('Please remove or correct meta[name="' + GOOGLE_CID_API_META_NAME + '"]'));
            }
          }
        });
      }
      return apiKeyMap;
    };
    return Cid2;
  }();
  function optOutOfCid(ampdoc2) {
    Services.viewerForDoc(ampdoc2).sendMessage(CID_OPTOUT_VIEWER_MESSAGE, dict());
    return Services.storageForDoc(ampdoc2).then(function(storage) {
      return storage.set(CID_OPTOUT_STORAGE_KEY, true);
    });
  }
  function isOptedOutOfCid(ampdoc2) {
    return Services.storageForDoc(ampdoc2).then(function(storage) {
      return storage.get(CID_OPTOUT_STORAGE_KEY).then(function(val) {
        return !!val;
      });
    }).catch(function() {
      return false;
    });
  }
  function setCidCookie(win, scope, cookie) {
    var expiration = Date.now() + BASE_CID_MAX_AGE_MILLIS;
    setCookie(win, scope, cookie, expiration, {
      highestAvailableDomain: true
    });
  }
  function setCidBackup(ampdoc2, cookieName, cookie) {
    Services.storageForDoc(ampdoc2).then(function(storage) {
      var isViewerStorage = storage.isViewerStorage();
      if (!isViewerStorage) {
        var key = getStorageKey(cookieName);
        storage.setNonBoolean(key, cookie);
      }
    });
  }
  function getStorageKey(cookieName) {
    return CID_BACKUP_STORAGE_KEY + cookieName;
  }
  function maybeGetCidFromCookieOrBackup(cid, getCidStruct) {
    var ampdoc2 = cid.ampdoc, isBackupCidExpOn = cid.isBackupCidExpOn;
    var win = ampdoc2.win;
    var disableBackup = getCidStruct.disableBackup, scope = getCidStruct.scope;
    var cookieName = getCidStruct.cookieName || scope;
    var existingCookie = getCookie(win, cookieName);
    if (existingCookie) {
      return Promise.resolve(existingCookie);
    }
    if (isBackupCidExpOn && !disableBackup) {
      return Services.storageForDoc(ampdoc2).then(function(storage) {
        var key = getStorageKey(cookieName);
        return storage.get(key, BASE_CID_MAX_AGE_MILLIS);
      }).then(function(backupCid) {
        if (!backupCid || typeof backupCid != "string") {
          return null;
        }
        return backupCid;
      });
    }
    return Promise.resolve(null);
  }
  function getOrCreateCookie(cid, getCidStruct, persistenceConsent) {
    var ampdoc2 = cid.ampdoc, isBackupCidExpOn = cid.isBackupCidExpOn;
    var win = ampdoc2.win;
    var disableBackup = getCidStruct.disableBackup, scope = getCidStruct.scope;
    var cookieName = getCidStruct.cookieName || scope;
    return maybeGetCidFromCookieOrBackup(cid, getCidStruct).then(function(existingCookie) {
      if (!existingCookie && !getCidStruct.createCookieIfNotPresent) {
        return Promise.resolve(null);
      }
      if (existingCookie) {
        if (/^amp-/.test(existingCookie)) {
          setCidCookie(win, cookieName, existingCookie);
          if (isBackupCidExpOn && !disableBackup) {
            setCidBackup(ampdoc2, cookieName, existingCookie);
          }
        }
        return Promise.resolve(existingCookie);
      }
      if (cid.externalCidCache_[scope]) {
        return cid.externalCidCache_[scope];
      }
      var newCookiePromise = getRandomString64(win).then(function(randomStr) {
        return "amp-" + randomStr;
      });
      Promise.all([newCookiePromise, persistenceConsent]).then(function(results) {
        var newCookie = results[0];
        var relookup = getCookie(win, cookieName);
        if (!relookup) {
          setCidCookie(win, cookieName, newCookie);
          if (isBackupCidExpOn && !disableBackup) {
            setCidBackup(ampdoc2, cookieName, newCookie);
          }
        }
      });
      return cid.externalCidCache_[scope] = newCookiePromise;
    });
  }
  function getProxySourceOrigin(url) {
    userAssert(isProxyOrigin(url), "Expected proxy origin %s", url.origin);
    return getSourceOrigin(url);
  }
  function getBaseCid(cid, persistenceConsent) {
    if (cid.baseCid_) {
      return cid.baseCid_;
    }
    var win = cid.ampdoc.win;
    return cid.baseCid_ = read(cid.ampdoc).then(function(stored) {
      var needsToStore = false;
      var baseCid;
      if (stored && !isExpired(stored)) {
        baseCid = Promise.resolve(stored.cid);
        if (shouldUpdateStoredTime(stored)) {
          needsToStore = true;
        }
      } else {
        baseCid = Services.cryptoFor(win).sha384Base64(getEntropy(win));
        needsToStore = true;
      }
      if (needsToStore) {
        baseCid.then(function(baseCid2) {
          store(cid.ampdoc, persistenceConsent, baseCid2);
        });
      }
      return baseCid;
    });
  }
  function store(ampdoc2, persistenceConsent, cidString) {
    var win = ampdoc2.win;
    if (isIframed(win)) {
      viewerBaseCid(ampdoc2, createCidData(cidString));
    } else {
      persistenceConsent.then(function() {
        try {
          win.localStorage.setItem("amp-cid", createCidData(cidString));
        } catch (ignore) {
        }
      });
    }
  }
  function viewerBaseCid(ampdoc2, opt_data) {
    var viewer = Services.viewerForDoc(ampdoc2);
    return viewer.isTrustedViewer().then(function(trusted) {
      if (!trusted) {
        return void 0;
      }
      dev().expectedError("CID", "Viewer does not provide cap=cid");
      return viewer.sendMessageAwaitResponse("cid", opt_data).then(function(data) {
        if (data && !tryParseJson(data)) {
          dev().expectedError("CID", "invalid cid format");
          return JSON.stringify(dict({
            "time": Date.now(),
            "cid": data
          }));
        }
        return data;
      });
    });
  }
  function createCidData(cidString) {
    return JSON.stringify(dict({
      "time": Date.now(),
      "cid": cidString
    }));
  }
  function read(ampdoc2) {
    var win = ampdoc2.win;
    var data;
    try {
      data = win.localStorage.getItem("amp-cid");
    } catch (ignore) {
    }
    var dataPromise = Promise.resolve(data);
    if (!data && isIframed(win)) {
      dataPromise = viewerBaseCid(ampdoc2);
    }
    return dataPromise.then(function(data2) {
      if (!data2) {
        return null;
      }
      var item = parseJson(data2);
      return {
        time: item["time"],
        cid: item["cid"]
      };
    });
  }
  function isExpired(storedCidInfo) {
    var createdTime = storedCidInfo.time;
    var now = Date.now();
    return createdTime + BASE_CID_MAX_AGE_MILLIS < now;
  }
  function shouldUpdateStoredTime(storedCidInfo) {
    var createdTime = storedCidInfo.time;
    var now = Date.now();
    return createdTime + ONE_DAY_MILLIS < now;
  }
  function getEntropy(win) {
    var uint8array = getCryptoRandomBytesArray(win, 16);
    if (uint8array) {
      return uint8array;
    }
    return String(win.location.href + Date.now() + win.Math.random() + win.screen.width + win.screen.height);
  }
  function getRandomString64(win) {
    var entropy = getEntropy(win);
    if (typeof entropy == "string") {
      return Services.cryptoFor(win).sha384Base64(entropy);
    } else {
      var cast = entropy;
      return tryResolve(function() {
        return base64UrlEncodeFromBytes(cast).replace(/\.+$/, "");
      });
    }
  }
  function installCidService(ampdoc2) {
    return registerServiceBuilderForDoc(ampdoc2, "cid", Cid);
  }

  // src/service/document-info-impl.js
  var filteredLinkRels = ["prefetch", "preload", "preconnect", "dns-prefetch"];
  function installDocumentInfoServiceForDoc(nodeOrDoc) {
    return registerServiceBuilderForDoc(nodeOrDoc, "documentInfo", DocInfo);
  }
  var DocInfo = /* @__PURE__ */ function() {
    function DocInfo2(ampdoc2) {
      this.ampdoc_ = ampdoc2;
      this.info_ = null;
      this.pageViewId64_ = null;
    }
    var _proto = DocInfo2.prototype;
    _proto.get = function get() {
      if (this.info_) {
        return this.info_;
      }
      var ampdoc2 = this.ampdoc_;
      var url = ampdoc2.getUrl();
      var sourceUrl = getSourceUrl(url);
      var rootNode = ampdoc2.getRootNode();
      var canonicalUrl = rootNode && rootNode.AMP && rootNode.AMP.canonicalUrl;
      if (!canonicalUrl) {
        var canonicalTag = rootNode.querySelector("link[rel=canonical]");
        canonicalUrl = canonicalTag ? parseUrlDeprecated(canonicalTag.href).href : sourceUrl;
      }
      var pageViewId = getPageViewId(ampdoc2.win);
      var linkRels = getLinkRels(ampdoc2.win.document);
      var viewport = getViewport(ampdoc2.win.document);
      var replaceParams = getReplaceParams(ampdoc2);
      return this.info_ = {
        get sourceUrl() {
          return getSourceUrl(ampdoc2.getUrl());
        },
        canonicalUrl: canonicalUrl,
        pageViewId: pageViewId,
        get pageViewId64() {
          if (!this.pageViewId64_) {
            this.pageViewId64_ = getRandomString64(ampdoc2.win);
          }
          return this.pageViewId64_;
        },
        linkRels: linkRels,
        viewport: viewport,
        replaceParams: replaceParams
      };
    };
    return DocInfo2;
  }();
  function getPageViewId(win) {
    return String(Math.floor(win.Math.random() * 1e4));
  }
  function getLinkRels(doc) {
    var linkRels = map();
    if (doc.head) {
      var links = doc.head.querySelectorAll("link[rel]");
      var _loop = function _loop2(i2) {
        var link = links[i2];
        var href = link.href;
        var rels = link.getAttribute("rel");
        if (!rels || !href) {
          return "continue";
        }
        rels.split(/\s+/).forEach(function(rel) {
          if (filteredLinkRels.indexOf(rel) != -1) {
            return;
          }
          var value = linkRels[rel];
          if (value) {
            if (!isArray(value)) {
              value = linkRels[rel] = [value];
            }
            value.push(href);
          } else {
            linkRels[rel] = href;
          }
        });
      };
      for (var i = 0; i < links.length; i++) {
        var _ret = _loop(i);
        if (_ret === "continue")
          continue;
      }
    }
    return linkRels;
  }
  function getViewport(doc) {
    var viewportEl = doc.head.querySelector('meta[name="viewport"]');
    return viewportEl ? viewportEl.getAttribute("content") : null;
  }
  function getReplaceParams(ampdoc2) {
    if (!ampdoc2.isSingleDoc() || getProxyServingType(ampdoc2.win.location.href) != "a") {
      return null;
    }
    var url = parseUrlDeprecated(ampdoc2.win.location.href);
    var replaceRaw = parseQueryString(url.search)["amp_r"];
    if (replaceRaw === void 0) {
      return null;
    }
    return parseQueryString(replaceRaw);
  }

  // src/service/hidden-observer-impl.js
  var OBSERVER_OPTIONS = {
    attributes: true,
    attributeFilter: ["hidden"],
    subtree: true
  };
  var HiddenObserver = /* @__PURE__ */ function() {
    function HiddenObserver2(ampdoc2) {
      this.root_ = ampdoc2.getRootNode();
      var doc = this.root_.ownerDocument || this.root_;
      this.win_ = devAssert2(doc.defaultView);
      this.mutationObserver_ = null;
      this.observable_ = null;
    }
    var _proto = HiddenObserver2.prototype;
    _proto.add = function add(handler) {
      var _this = this;
      this.init_();
      var remove2 = this.observable_.add(handler);
      return function() {
        remove2();
        if (_this.observable_.getHandlerCount() === 0) {
          _this.dispose();
        }
      };
    };
    _proto.init_ = function init_() {
      var _this2 = this;
      if (this.mutationObserver_) {
        return;
      }
      this.observable_ = new Observable();
      var mo = new this.win_.MutationObserver(function(mutations) {
        if (mutations) {
          _this2.observable_.fire(mutations);
        }
      });
      this.mutationObserver_ = mo;
      mo.observe(this.root_, OBSERVER_OPTIONS);
    };
    _proto.dispose = function dispose() {
      if (!this.mutationObserver_) {
        return;
      }
      this.mutationObserver_.disconnect();
      this.observable_.removeAll();
      this.mutationObserver_ = null;
      this.observable_ = null;
    };
    return HiddenObserver2;
  }();
  function installHiddenObserverForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, "hidden-observer", HiddenObserver);
  }

  // src/core/window/history.js
  function getHistoryState(history) {
    try {
      return history.state;
    } catch (e) {
      return null;
    }
  }

  // src/service/history-impl.js
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
  var TAG_4 = "History";
  var HISTORY_PROP_ = "AMP.History";
  var History = /* @__PURE__ */ function() {
    function History2(ampdoc2, binding) {
      this.ampdoc_ = ampdoc2;
      this.timer_ = Services.timerFor(ampdoc2.win);
      this.binding_ = binding;
      this.stackIndex_ = 0;
      this.stackOnPop_ = [];
      this.queue_ = [];
      this.binding_.setOnStateUpdated(this.onStateUpdated_.bind(this));
    }
    var _proto = History2.prototype;
    _proto.cleanup = function cleanup() {
      this.binding_.cleanup();
    };
    _proto.push = function push(opt_onPop, opt_stateUpdate) {
      var _this = this;
      return this.enque_(function() {
        return _this.binding_.push(opt_stateUpdate).then(function(historyState) {
          _this.onStateUpdated_(historyState);
          if (opt_onPop) {
            _this.stackOnPop_[historyState.stackIndex] = opt_onPop;
          }
          return historyState.stackIndex;
        });
      }, "push");
    };
    _proto.pop = function pop(stateId) {
      var _this2 = this;
      return this.enque_(function() {
        return _this2.binding_.pop(stateId).then(function(historyState) {
          _this2.onStateUpdated_(historyState);
        });
      }, "pop");
    };
    _proto.replace = function replace(opt_stateUpdate) {
      var _this3 = this;
      return this.enque_(function() {
        return _this3.binding_.replace(opt_stateUpdate);
      }, "replace");
    };
    _proto.get = function get() {
      var _this4 = this;
      return this.enque_(function() {
        return _this4.binding_.get();
      }, "get");
    };
    _proto.goBack = function goBack(navigate) {
      var _this5 = this;
      return this.enque_(function() {
        if (_this5.stackIndex_ <= 0 && !navigate) {
          return resolvedPromise();
        }
        return _this5.binding_.pop(_this5.stackIndex_).then(function(historyState) {
          _this5.onStateUpdated_(historyState);
        });
      }, "goBack");
    };
    _proto.replaceStateForTarget = function replaceStateForTarget(target) {
      var _this6 = this;
      devAssert2(target[0] == "#", "target should start with a #");
      var previousHash = this.ampdoc_.win.location.hash;
      return this.push(function() {
        _this6.ampdoc_.win.location.replace(previousHash || "#");
      }).then(function() {
        _this6.binding_.replaceStateForTarget(target);
      });
    };
    _proto.getFragment = function getFragment() {
      return this.binding_.getFragment();
    };
    _proto.updateFragment = function updateFragment(fragment) {
      if (fragment[0] == "#") {
        fragment = fragment.substr(1);
      }
      return this.binding_.updateFragment(fragment);
    };
    _proto.onStateUpdated_ = function onStateUpdated_(historyState) {
      this.stackIndex_ = historyState.stackIndex;
      this.doPop_(historyState);
    };
    _proto.doPop_ = function doPop_(historyState) {
      var _this7 = this;
      if (this.stackIndex_ >= this.stackOnPop_.length - 1) {
        return;
      }
      var toPop = [];
      for (var i = this.stackOnPop_.length - 1; i > this.stackIndex_; i--) {
        if (this.stackOnPop_[i]) {
          toPop.push(this.stackOnPop_[i]);
          this.stackOnPop_[i] = void 0;
        }
      }
      this.stackOnPop_.splice(this.stackIndex_ + 1);
      if (toPop.length > 0) {
        var _loop = function _loop2(_i2) {
          _this7.timer_.delay(function() {
            return toPop[_i2](historyState);
          }, 1);
        };
        for (var _i = 0; _i < toPop.length; _i++) {
          _loop(_i);
        }
      }
    };
    _proto.enque_ = function enque_(callback, name) {
      var deferred = new Deferred();
      var promise = deferred.promise, reject = deferred.reject, resolve = deferred.resolve;
      var trace = new Error("history trace for " + name + ": ");
      this.queue_.push({
        callback: callback,
        resolve: resolve,
        reject: reject,
        trace: trace
      });
      if (this.queue_.length == 1) {
        this.deque_();
      }
      return promise;
    };
    _proto.deque_ = function deque_() {
      var _this8 = this;
      if (this.queue_.length == 0) {
        return;
      }
      var task = this.queue_[0];
      var promise;
      try {
        promise = task.callback();
      } catch (e) {
        promise = Promise.reject(e);
      }
      promise.then(function(result) {
        task.resolve(result);
      }, function(reason) {
        dev().error(TAG_4, "failed to execute a task:", reason);
        if (task.trace) {
          task.trace.message += reason;
          dev().error(TAG_4, task.trace);
        }
        task.reject(reason);
      }).then(function() {
        _this8.queue_.splice(0, 1);
        _this8.deque_();
      });
    };
    return History2;
  }();
  var HistoryBindingNatural_ = /* @__PURE__ */ function() {
    function HistoryBindingNatural_2(win) {
      var _this9 = this;
      this.win = win;
      this.timer_ = Services.timerFor(win);
      var history = this.win.history;
      this.startIndex_ = history.length - 1;
      var state = getHistoryState(history);
      if (state && state[HISTORY_PROP_] !== void 0) {
        this.startIndex_ = Math.min(state[HISTORY_PROP_], this.startIndex_);
      }
      this.stackIndex_ = this.startIndex_;
      this.waitingState_;
      this.onStateUpdated_ = null;
      this.supportsState_ = "state" in history;
      this.unsupportedState_ = this.historyState_(this.stackIndex_);
      var pushState, replaceState;
      if (history.pushState && history.replaceState) {
        this.origPushState_ = history.originalPushState || history.pushState.bind(history);
        this.origReplaceState_ = history.originalReplaceState || history.replaceState.bind(history);
        pushState = function pushState2(state2, opt_title, opt_url) {
          _this9.unsupportedState_ = state2;
          _this9.origPushState_(state2, opt_title, opt_url || null);
        };
        replaceState = function replaceState2(state2, opt_title, opt_url) {
          _this9.unsupportedState_ = state2;
          if (opt_url !== void 0) {
            _this9.origReplaceState_(state2, opt_title, opt_url);
          } else {
            _this9.origReplaceState_(state2, opt_title);
          }
        };
        if (!history.originalPushState) {
          history.originalPushState = this.origPushState_;
        }
        if (!history.originalReplaceState) {
          history.originalReplaceState = this.origReplaceState_;
        }
      } else {
        pushState = function pushState2(state2, opt_title, opt_url) {
          _this9.unsupportedState_ = state2;
        };
        replaceState = function replaceState2(state2, opt_title, opt_url) {
          _this9.unsupportedState_ = state2;
        };
      }
      this.pushState_ = pushState;
      this.replaceState_ = replaceState;
      try {
        this.replaceState_(this.historyState_(this.stackIndex_, true));
      } catch (e) {
        dev().error(TAG_4, "Initial replaceState failed: " + e.message);
      }
      history.pushState = this.historyPushState_.bind(this);
      history.replaceState = this.historyReplaceState_.bind(this);
      this.popstateHandler_ = function(e) {
        var event = e;
        var state2 = event.state;
        dev().fine(TAG_4, "popstate event: " + _this9.win.history.length + ", " + JSON.stringify(state2));
        _this9.onHistoryEvent_();
      };
      this.win.addEventListener("popstate", this.popstateHandler_);
    }
    var _proto3 = HistoryBindingNatural_2.prototype;
    _proto3.cleanup = function cleanup() {
      if (this.origPushState_) {
        this.win.history.pushState = this.origPushState_;
      }
      if (this.origReplaceState_) {
        this.win.history.replaceState = this.origReplaceState_;
      }
      this.win.removeEventListener("popstate", this.popstateHandler_);
    };
    _proto3.historyState_ = function historyState_(stackIndex, opt_replace) {
      var state = map(opt_replace ? this.getState_() : void 0);
      state[HISTORY_PROP_] = stackIndex;
      return state;
    };
    _proto3.setOnStateUpdated = function setOnStateUpdated(callback) {
      this.onStateUpdated_ = callback;
    };
    _proto3.push = function push(opt_stateUpdate) {
      var _this10 = this;
      return this.whenReady_(function() {
        var newState = _this10.mergeStateUpdate_(_this10.getState_(), opt_stateUpdate || {});
        _this10.historyPushState_(newState, void 0, newState.fragment ? "#" + newState.fragment : void 0);
        return tryResolve(function() {
          return _this10.mergeStateUpdate_(newState, {
            stackIndex: _this10.stackIndex_
          });
        });
      });
    };
    _proto3.pop = function pop(stackIndex) {
      var _this11 = this;
      stackIndex = Math.max(stackIndex, this.startIndex_);
      return this.whenReady_(function() {
        return _this11.back_(_this11.stackIndex_ - stackIndex + 1);
      }).then(function(newStackIndex) {
        return _this11.mergeStateUpdate_(_this11.getState_(), {
          stackIndex: newStackIndex
        });
      });
    };
    _proto3.replace = function replace(opt_stateUpdate) {
      var _this12 = this;
      if (opt_stateUpdate === void 0) {
        opt_stateUpdate = {};
      }
      return this.whenReady_(function() {
        var newState = _this12.mergeStateUpdate_(_this12.getState_(), opt_stateUpdate || {});
        var url = (newState.url || "").replace(/#.*/, "");
        var fragment = newState.fragment ? "#" + newState.fragment : "";
        _this12.historyReplaceState_(newState, newState.title, url || fragment ? url + fragment : void 0);
        return tryResolve(function() {
          return _this12.mergeStateUpdate_(newState, {
            stackIndex: _this12.stackIndex_
          });
        });
      });
    };
    _proto3.get = function get() {
      var _this13 = this;
      return tryResolve(function() {
        return _this13.mergeStateUpdate_(_this13.getState_(), {
          stackIndex: _this13.stackIndex_
        });
      });
    };
    _proto3.backTo = function backTo(stackIndex) {
      var _this14 = this;
      stackIndex = Math.max(stackIndex, this.startIndex_);
      return this.whenReady_(function() {
        return _this14.back_(_this14.stackIndex_ - stackIndex);
      });
    };
    _proto3.onHistoryEvent_ = function onHistoryEvent_() {
      var state = this.getState_();
      dev().fine(TAG_4, "history event: " + this.win.history.length + ", " + JSON.stringify(state));
      var stackIndex = state ? state[HISTORY_PROP_] : void 0;
      var newStackIndex = this.stackIndex_;
      var waitingState = this.waitingState_;
      this.waitingState_ = void 0;
      if (newStackIndex > this.win.history.length - 2) {
        newStackIndex = this.win.history.length - 2;
        this.updateHistoryState_(this.mergeStateUpdate_(state, {
          stackIndex: newStackIndex
        }));
      }
      if (stackIndex == void 0) {
        newStackIndex = newStackIndex + 1;
      } else if (stackIndex < this.win.history.length) {
        newStackIndex = stackIndex;
      } else {
        newStackIndex = this.win.history.length - 1;
      }
      if (!state) {
        state = {};
      }
      state[HISTORY_PROP_] = newStackIndex;
      this.replaceState_(state, void 0, void 0);
      if (newStackIndex != this.stackIndex_) {
        this.updateHistoryState_(this.mergeStateUpdate_(state, {
          stackIndex: newStackIndex
        }));
      }
      if (newStackIndex < this.startIndex_) {
        this.startIndex_ = newStackIndex;
      }
      if (waitingState) {
        waitingState.resolve();
      }
    };
    _proto3.getState_ = function getState_() {
      if (this.supportsState_) {
        return getHistoryState(this.win.history);
      }
      return this.unsupportedState_;
    };
    _proto3.assertReady_ = function assertReady_() {
      devAssert2(!this.waitingState_, "The history must not be in the waiting state");
    };
    _proto3.whenReady_ = function whenReady_(callback) {
      if (!this.waitingState_) {
        return callback();
      }
      return this.waitingState_.promise.then(callback, callback);
    };
    _proto3.wait_ = function wait_() {
      this.assertReady_();
      var deferred = new Deferred();
      var reject = deferred.reject, resolve = deferred.resolve;
      var promise = this.timer_.timeoutPromise(500, deferred.promise);
      this.waitingState_ = {
        promise: promise,
        resolve: resolve,
        reject: reject
      };
      return promise;
    };
    _proto3.back_ = function back_(steps) {
      var _this15 = this;
      this.assertReady_();
      if (steps <= 0) {
        return Promise.resolve(this.stackIndex_);
      }
      this.unsupportedState_ = this.historyState_(this.stackIndex_ - steps);
      var promise = this.wait_();
      this.win.history.go(-steps);
      return promise.then(function() {
        return Promise.resolve(_this15.stackIndex_);
      });
    };
    _proto3.historyPushState_ = function historyPushState_(state, title, url) {
      this.assertReady_();
      if (!state) {
        state = {};
      }
      var stackIndex = this.stackIndex_ + 1;
      state[HISTORY_PROP_] = stackIndex;
      this.pushState_(state, title, url);
      if (stackIndex != this.win.history.length - 1) {
        stackIndex = this.win.history.length - 1;
        state[HISTORY_PROP_] = stackIndex;
        this.replaceState_(state);
      }
      var newState = this.mergeStateUpdate_(state, {
        stackIndex: stackIndex
      });
      this.updateHistoryState_(newState);
    };
    _proto3.replaceStateForTarget = function replaceStateForTarget(target) {
      var _this16 = this;
      devAssert2(target[0] == "#", "target should start with a #");
      this.whenReady_(function() {
        _this16.win.removeEventListener("popstate", _this16.popstateHandler_);
        try {
          _this16.win.location.replace(target);
        } finally {
          _this16.win.addEventListener("popstate", _this16.popstateHandler_);
        }
        _this16.historyReplaceState_();
        return resolvedPromise();
      });
    };
    _proto3.historyReplaceState_ = function historyReplaceState_(state, title, url) {
      this.assertReady_();
      if (!state) {
        state = {};
      }
      var stackIndex = Math.min(this.stackIndex_, this.win.history.length - 1);
      state[HISTORY_PROP_] = stackIndex;
      this.replaceState_(state, title, url);
      var newState = this.mergeStateUpdate_(state, {
        stackIndex: stackIndex
      });
      this.updateHistoryState_(newState);
    };
    _proto3.updateHistoryState_ = function updateHistoryState_(historyState) {
      this.assertReady_();
      historyState.stackIndex = Math.min(historyState.stackIndex, this.win.history.length - 1);
      if (this.stackIndex_ != historyState.stackIndex) {
        dev().fine(TAG_4, "stack index changed: " + this.stackIndex_ + " -> " + historyState.stackIndex);
        this.stackIndex_ = historyState.stackIndex;
        if (this.onStateUpdated_) {
          this.onStateUpdated_(historyState);
        }
      }
    };
    _proto3.getFragment = function getFragment() {
      var hash = this.win.location.hash;
      hash = hash.substr(1);
      return Promise.resolve(hash);
    };
    _proto3.updateFragment = function updateFragment(fragment) {
      return this.replace({
        fragment: fragment
      });
    };
    _proto3.mergeStateUpdate_ = function mergeStateUpdate_(state, update) {
      var mergedData = _extends6({}, state && state.data || {}, update.data || {});
      return _extends6({}, state || {}, update, {
        data: mergedData
      });
    };
    return HistoryBindingNatural_2;
  }();
  var HistoryBindingVirtual_ = /* @__PURE__ */ function() {
    function HistoryBindingVirtual_2(win, viewer) {
      var _this17 = this;
      this.win = win;
      this.viewer_ = viewer;
      this.stackIndex_ = 0;
      this.onStateUpdated_ = null;
      this.unlistenOnHistoryPopped_ = this.viewer_.onMessage("historyPopped", function(data) {
        return _this17.onHistoryPopped_(data);
      });
    }
    var _proto4 = HistoryBindingVirtual_2.prototype;
    _proto4.replaceStateForTarget = function replaceStateForTarget(target) {
      devAssert2(target[0] == "#", "target should start with a #");
      this.win.location.replace(target);
    };
    _proto4.cleanup = function cleanup() {
      this.unlistenOnHistoryPopped_();
    };
    _proto4.setOnStateUpdated = function setOnStateUpdated(callback) {
      this.onStateUpdated_ = callback;
    };
    _proto4.toHistoryState_ = function toHistoryState_(maybeHistoryState, fallbackState, debugId) {
      if (this.isHistoryState_(maybeHistoryState)) {
        return maybeHistoryState;
      } else {
        dev().warn(TAG_4, 'Ignored unexpected "%s" data:', debugId, maybeHistoryState);
      }
      return fallbackState;
    };
    _proto4.isHistoryState_ = function isHistoryState_(maybeHistoryState) {
      return !!maybeHistoryState && maybeHistoryState["stackIndex"] !== void 0;
    };
    _proto4.push = function push(opt_stateUpdate) {
      var _this18 = this;
      var message = _extends6({
        "stackIndex": this.stackIndex_ + 1
      }, opt_stateUpdate || {});
      var push2 = "pushHistory";
      return this.viewer_.sendMessageAwaitResponse(push2, message).then(function(response) {
        var fallbackState = message;
        var newState = _this18.toHistoryState_(response, fallbackState, push2);
        _this18.updateHistoryState_(newState);
        return newState;
      });
    };
    _proto4.pop = function pop(stackIndex) {
      var _this19 = this;
      if (stackIndex > this.stackIndex_) {
        return this.get();
      }
      var message = dict({
        "stackIndex": this.stackIndex_
      });
      var pop2 = "popHistory";
      return this.viewer_.sendMessageAwaitResponse(pop2, message).then(function(response) {
        var fallbackState = dict({
          "stackIndex": _this19.stackIndex_ - 1
        });
        var newState = _this19.toHistoryState_(response, fallbackState, pop2);
        _this19.updateHistoryState_(newState);
        return newState;
      });
    };
    _proto4.replace = function replace(opt_stateUpdate) {
      var _this20 = this;
      if (opt_stateUpdate && opt_stateUpdate.url) {
        if (!this.viewer_.hasCapability("fullReplaceHistory")) {
          var curState = dict({
            "stackIndex": this.stackIndex_
          });
          return Promise.resolve(curState);
        }
        var url = opt_stateUpdate.url.replace(/#.*/, "");
        opt_stateUpdate.url = url;
      }
      var message = _extends6({
        "stackIndex": this.stackIndex_
      }, opt_stateUpdate || {});
      var replace2 = "replaceHistory";
      return this.viewer_.sendMessageAwaitResponse(replace2, message, true).then(function(response) {
        var fallbackState = message;
        var newState = _this20.toHistoryState_(response, fallbackState, replace2);
        _this20.updateHistoryState_(newState);
        return newState;
      });
    };
    _proto4.get = function get() {
      return Promise.resolve({
        data: void 0,
        fragment: "",
        stackIndex: this.stackIndex_,
        title: ""
      });
    };
    _proto4.onHistoryPopped_ = function onHistoryPopped_(data) {
      if (data["newStackIndex"] !== void 0) {
        data["stackIndex"] = data["newStackIndex"];
      }
      if (this.isHistoryState_(data)) {
        this.updateHistoryState_(data);
      } else {
        dev().warn(TAG_4, 'Ignored unexpected "historyPopped" data:', data);
      }
    };
    _proto4.updateHistoryState_ = function updateHistoryState_(state) {
      var stackIndex = state.stackIndex;
      if (this.stackIndex_ != stackIndex) {
        dev().fine(TAG_4, "stackIndex: " + this.stackIndex_ + " -> " + stackIndex);
        this.stackIndex_ = stackIndex;
        if (this.onStateUpdated_) {
          this.onStateUpdated_(state);
        }
      }
    };
    _proto4.getFragment = function getFragment() {
      if (!this.viewer_.hasCapability("fragment")) {
        return Promise.resolve("");
      }
      return this.viewer_.sendMessageAwaitResponse("getFragment", void 0, true).then(function(data) {
        if (!data) {
          return "";
        }
        var hash = dev().assertString(data);
        if (hash[0] == "#") {
          hash = hash.substr(1);
        }
        return hash;
      });
    };
    _proto4.updateFragment = function updateFragment(fragment) {
      if (!this.viewer_.hasCapability("fragment")) {
        return resolvedPromise();
      }
      return this.viewer_.sendMessageAwaitResponse("replaceHistory", dict({
        "fragment": fragment
      }), true);
    };
    return HistoryBindingVirtual_2;
  }();
  function createHistory(ampdoc2) {
    var viewer = Services.viewerForDoc(ampdoc2);
    var binding;
    if (viewer.isOvertakeHistory() || getMode(ampdoc2.win).test || ampdoc2.win.__AMP_TEST_IFRAME) {
      binding = new HistoryBindingVirtual_(ampdoc2.win, viewer);
    } else {
      registerServiceBuilder(ampdoc2.win, "global-history-binding", HistoryBindingNatural_);
      binding = getService(ampdoc2.win, "global-history-binding");
    }
    return new History(ampdoc2, binding);
  }
  function installHistoryServiceForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, "history", createHistory);
  }

  // src/service/loader-element.js
  function getLoaderServicePromise(ampDoc, element) {
    return Services.extensionsFor(ampDoc.win).installExtensionForDoc(ampDoc, "amp-loader").then(function() {
      return Services.loaderServiceForDoc(element);
    });
  }
  function createLoaderElement(ampDoc, element, elementWidth, elementHeight, startTime) {
    if (startTime === void 0) {
      startTime = ampDoc.win.Date.now();
    }
    var loaderRoot = element.ownerDocument.createElement("div");
    getLoaderServicePromise(ampDoc, element).then(function(loaderService) {
      var endTime = ampDoc.win.Date.now();
      var initDelay = endTime - startTime;
      loaderService.initializeLoader(element, loaderRoot, initDelay, elementWidth, elementHeight);
    });
    return loaderRoot;
  }

  // src/service/loading-indicator.js
  var _templateObject;
  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var MIN_SIZE = 20;
  function installLoadingIndicatorForDoc(nodeOrDoc) {
    registerServiceBuilderForDoc(nodeOrDoc, "loadingIndicator", LoadingIndicatorImpl);
  }
  var LoadingIndicatorImpl = /* @__PURE__ */ function() {
    function LoadingIndicatorImpl2(ampdoc2) {
      this.ampdoc_ = ampdoc2;
      var win = ampdoc2.win;
      var inViewport = this.inViewport_.bind(this);
      var ioCallback2 = function ioCallback3(records) {
        return records.forEach(inViewport);
      };
      this.io_ = createViewportObserver(ioCallback2, win);
      this.states_ = new WeakMap();
    }
    var _proto = LoadingIndicatorImpl2.prototype;
    _proto.dispose = function dispose() {
      this.io_.disconnect();
    };
    _proto.track = function track(element) {
      this.io_.observe(element);
    };
    _proto.untrack = function untrack(element) {
      this.io_.unobserve(element);
      this.cleanup_(element);
    };
    _proto.inViewport_ = function inViewport_(record) {
      var boundingClientRect = record.boundingClientRect, isIntersecting = record.isIntersecting, target = record.target;
      var height = boundingClientRect.height, width = boundingClientRect.width;
      var element = target;
      var show = isIntersecting && width > MIN_SIZE && height > MIN_SIZE;
      var state = this.states_.get(element);
      var isCurrentlyShown = state && state.shown || false;
      if (show === isCurrentlyShown) {
        return;
      }
      if (show && !state) {
        state = this.createLoaderState_(element, width, height);
        this.states_.set(element, state);
      }
      if (state) {
        state.shown = show;
        state.container.classList.toggle("amp-hidden", !show);
        state.loader.classList.toggle("amp-active", show);
      }
    };
    _proto.createLoaderState_ = function createLoaderState_(element, width, height) {
      var startTime = Date.now();
      var loader = createLoaderElement(this.ampdoc_, element, width, height, startTime);
      var container = htmlFor(this.ampdoc_.win.document)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(['\n        <div slot="i-amphtml-svc" class="i-amphtml-svc i-amphtml-loading-container i-amphtml-fill-content\n            amp-hidden"></div>\n      '])));
      container.appendChild(loader);
      element.appendChild(container);
      return {
        shown: false,
        loader: loader,
        container: container
      };
    };
    _proto.cleanup_ = function cleanup_(element) {
      var state = this.states_.get(element);
      if (!state) {
        return;
      }
      this.states_.delete(element);
      removeElement(state.container);
    };
    return LoadingIndicatorImpl2;
  }();

  // src/focus-history.js
  var FocusHistory = /* @__PURE__ */ function() {
    function FocusHistory2(win, purgeTimeout) {
      var _this = this;
      this.win = win;
      this.purgeTimeout_ = purgeTimeout;
      this.history_ = [];
      this.observeFocus_ = new Observable();
      this.captureFocus_ = function(e) {
        if (isElement(e.target)) {
          _this.pushFocus_(dev().assertElement(e.target));
        }
      };
      this.captureBlur_ = function(unusedE) {
        Services.timerFor(win).delay(function() {
          if (_this.win.document.activeElement) {
            _this.pushFocus_(_this.win.document.activeElement);
          }
        }, 500);
      };
      this.win.document.addEventListener("focus", this.captureFocus_, true);
      this.win.addEventListener("blur", this.captureBlur_);
    }
    var _proto = FocusHistory2.prototype;
    _proto.cleanup_ = function cleanup_() {
      this.win.document.removeEventListener("focus", this.captureFocus_, true);
      this.win.removeEventListener("blur", this.captureBlur_);
    };
    _proto.onFocus = function onFocus(handler) {
      return this.observeFocus_.add(handler);
    };
    _proto.pushFocus_ = function pushFocus_(element) {
      var now = Date.now();
      if (this.history_.length == 0 || this.history_[this.history_.length - 1].el != element) {
        this.history_.push({
          el: element,
          time: now
        });
      } else {
        this.history_[this.history_.length - 1].time = now;
      }
      this.purgeBefore(now - this.purgeTimeout_);
      this.observeFocus_.fire(element);
    };
    _proto.getLast = function getLast() {
      if (this.history_.length == 0) {
        return null;
      }
      return this.history_[this.history_.length - 1].el;
    };
    _proto.purgeBefore = function purgeBefore(time) {
      var index = this.history_.length - 1;
      for (var i = 0; i < this.history_.length; i++) {
        if (this.history_[i].time >= time) {
          index = i - 1;
          break;
        }
      }
      if (index != -1) {
        this.history_.splice(0, index + 1);
      }
    };
    _proto.hasDescendantsOf = function hasDescendantsOf(element) {
      if (this.win.document.activeElement) {
        this.pushFocus_(this.win.document.activeElement);
      }
      for (var i = 0; i < this.history_.length; i++) {
        if (element.contains(this.history_[i].el)) {
          return true;
        }
      }
      return false;
    };
    return FocusHistory2;
  }();

  // src/service/mutator-impl.js
  var FOUR_FRAME_DELAY_ = 70;
  var FOCUS_HISTORY_TIMEOUT_ = 1e3 * 60;
  var TAG_5 = "Mutator";
  var MutatorImpl = /* @__PURE__ */ function() {
    function MutatorImpl2(ampdoc2) {
      var _this = this;
      this.ampdoc = ampdoc2;
      this.win = ampdoc2.win;
      this.resources_ = Services.resourcesForDoc(ampdoc2);
      this.viewport_ = Services.viewportForDoc(this.ampdoc);
      this.vsync_ = Services.vsyncFor(this.win);
      this.activeHistory_ = new FocusHistory(this.win, FOCUS_HISTORY_TIMEOUT_);
      this.activeHistory_.onFocus(function(element) {
        _this.checkPendingChangeSize_(element);
      });
    }
    var _proto = MutatorImpl2.prototype;
    _proto.forceChangeSize = function forceChangeSize(element, newHeight, newWidth, opt_callback, opt_newMargins) {
      this.scheduleChangeSize_(Resource.forElement(element), newHeight, newWidth, opt_newMargins, void 0, true, opt_callback);
    };
    _proto.requestChangeSize = function requestChangeSize(element, newHeight, newWidth, opt_newMargins, opt_event) {
      var _this2 = this;
      return new Promise(function(resolve, reject) {
        _this2.scheduleChangeSize_(Resource.forElement(element), newHeight, newWidth, opt_newMargins, opt_event, false, function(success) {
          if (success) {
            resolve();
          } else {
            reject(new Error("changeSize attempt denied"));
          }
        });
      });
    };
    _proto.expandElement = function expandElement(element) {
      var resource = Resource.forElement(element);
      resource.completeExpand();
      this.resources_.schedulePass(FOUR_FRAME_DELAY_);
    };
    _proto.attemptCollapse = function attemptCollapse(element) {
      var _this3 = this;
      return new Promise(function(resolve, reject) {
        _this3.scheduleChangeSize_(Resource.forElement(element), 0, 0, void 0, void 0, false, function(success) {
          if (success) {
            var resource = Resource.forElement(element);
            resource.completeCollapse();
            resolve();
          } else {
            reject(dev().createExpectedError("collapse attempt denied"));
          }
        });
      });
    };
    _proto.collapseElement = function collapseElement(element) {
      var box = this.viewport_.getLayoutRect(element);
      if (box.width != 0 && box.height != 0) {
        if (isExperimentOn(this.win, "dirty-collapse-element")) {
          this.dirtyElement(element);
        } else {
          this.resources_.setRelayoutTop(box.top);
        }
      }
      var resource = Resource.forElement(element);
      resource.completeCollapse();
      this.resources_.schedulePass(FOUR_FRAME_DELAY_);
    };
    _proto.measureElement = function measureElement(measurer) {
      return this.vsync_.measurePromise(measurer);
    };
    _proto.mutateElement = function mutateElement(element, mutator, skipRemeasure) {
      return this.measureMutateElementResources_(element, null, mutator, skipRemeasure);
    };
    _proto.measureMutateElement = function measureMutateElement(element, measurer, mutator) {
      return this.measureMutateElementResources_(element, measurer, mutator);
    };
    _proto.getLayoutMargins_ = function getLayoutMargins_(resource) {
      var style = computedStyle(this.win, resource.element);
      return {
        top: parseInt(style.marginTop, 10) || 0,
        right: parseInt(style.marginRight, 10) || 0,
        bottom: parseInt(style.marginBottom, 10) || 0,
        left: parseInt(style.marginLeft, 10) || 0
      };
    };
    _proto.measureMutateElementResources_ = function measureMutateElementResources_(element, measurer, mutator, skipRemeasure) {
      var _this4 = this;
      if (skipRemeasure === void 0) {
        skipRemeasure = false;
      }
      var calcRelayoutTop = function calcRelayoutTop2() {
        var box = _this4.viewport_.getLayoutRect(element);
        if (box.width != 0 && box.height != 0) {
          return box.top;
        }
        return -1;
      };
      var relayoutTop = -1;
      return this.vsync_.runPromise({
        measure: function measure() {
          if (measurer) {
            measurer();
          }
          if (!skipRemeasure) {
            relayoutTop = calcRelayoutTop();
          }
        },
        mutate: function mutate() {
          mutator();
          if (skipRemeasure) {
            return;
          }
          if (element.classList.contains("i-amphtml-element")) {
            var r = Resource.forElement(element);
            r.requestMeasure();
          }
          var ampElements = element.getElementsByClassName("i-amphtml-element");
          for (var i = 0; i < ampElements.length; i++) {
            var _r = Resource.forElement(ampElements[i]);
            _r.requestMeasure();
          }
          _this4.resources_.schedulePass(FOUR_FRAME_DELAY_);
          if (relayoutTop != -1) {
            _this4.resources_.setRelayoutTop(relayoutTop);
          }
          _this4.vsync_.measure(function() {
            var updatedRelayoutTop = calcRelayoutTop();
            if (updatedRelayoutTop != -1 && updatedRelayoutTop != relayoutTop) {
              _this4.resources_.setRelayoutTop(updatedRelayoutTop);
              _this4.resources_.schedulePass(FOUR_FRAME_DELAY_);
            }
            _this4.resources_.maybeHeightChanged();
          });
        }
      });
    };
    _proto.dirtyElement = function dirtyElement(element) {
      var relayoutAll = false;
      var isAmpElement = element.classList.contains("i-amphtml-element");
      if (isAmpElement) {
        var r = Resource.forElement(element);
        this.resources_.setRelayoutTop(r.getLayoutBox().top);
      } else {
        relayoutAll = true;
      }
      this.resources_.schedulePass(FOUR_FRAME_DELAY_, relayoutAll);
    };
    _proto.checkPendingChangeSize_ = function checkPendingChangeSize_(element) {
      var resourceElement = closest(element, function(el) {
        return !!Resource.forElementOptional(el);
      });
      if (!resourceElement) {
        return;
      }
      var resource = Resource.forElement(resourceElement);
      var pendingChangeSize = resource.getPendingChangeSize();
      if (pendingChangeSize !== void 0) {
        this.scheduleChangeSize_(resource, pendingChangeSize.height, pendingChangeSize.width, pendingChangeSize.margins, void 0, true);
      }
    };
    _proto.scheduleChangeSize_ = function scheduleChangeSize_(resource, newHeight, newWidth, newMargins, event, force, opt_callback) {
      var _this5 = this;
      if (resource.hasBeenMeasured() && !newMargins) {
        this.completeScheduleChangeSize_(resource, newHeight, newWidth, void 0, event, force, opt_callback);
      } else {
        this.vsync_.measure(function() {
          if (!resource.hasBeenMeasured()) {
            resource.measure();
          }
          var marginChange = newMargins ? {
            newMargins: newMargins,
            currentMargins: _this5.getLayoutMargins_(resource)
          } : void 0;
          _this5.completeScheduleChangeSize_(resource, newHeight, newWidth, marginChange, event, force, opt_callback);
        });
      }
    };
    _proto.completeScheduleChangeSize_ = function completeScheduleChangeSize_(resource, newHeight, newWidth, marginChange, event, force, opt_callback) {
      resource.resetPendingChangeSize();
      var layoutSize = resource.getLayoutSize();
      if ((newHeight === void 0 || newHeight == layoutSize.height) && (newWidth === void 0 || newWidth == layoutSize.width) && (marginChange === void 0 || !areMarginsChanged(marginChange.currentMargins, marginChange.newMargins))) {
        if (newHeight === void 0 && newWidth === void 0 && marginChange === void 0) {
          dev().error(TAG_5, "attempting to change size with undefined dimensions", resource.debugid);
        }
        if (opt_callback) {
          opt_callback(true);
        }
        return;
      }
      this.resources_.updateOrEnqueueMutateTask(resource, {
        resource: resource,
        newHeight: newHeight,
        newWidth: newWidth,
        marginChange: marginChange,
        event: event,
        force: force,
        callback: opt_callback
      });
      this.resources_.schedulePassVsync();
    };
    return MutatorImpl2;
  }();
  function installMutatorServiceForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, "mutator", MutatorImpl);
  }

  // src/service/owners-impl.js
  function _createForOfIteratorHelperLoose8(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray8(o)) || allowArrayLike && o && typeof o.length === "number") {
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
  function _unsupportedIterableToArray8(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray8(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray8(o, minLen);
  }
  function _arrayLikeToArray8(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function elements(elements2) {
    return isArray(elements2) ? elements2 : [elements2];
  }
  var OwnersImpl = /* @__PURE__ */ function() {
    function OwnersImpl2(ampdoc2) {
      this.resources_ = Services.resourcesForDoc(ampdoc2);
    }
    var _proto = OwnersImpl2.prototype;
    _proto.setOwner = function setOwner(element, owner) {
      Resource.setOwner(element, owner);
    };
    _proto.schedulePreload = function schedulePreload(parentElement, subElements) {
      this.scheduleLayoutOrPreloadForSubresources_(this.resources_.getResourceForElement(parentElement), false, elements(subElements));
    };
    _proto.scheduleLayout = function scheduleLayout(parentElement, subElements) {
      this.scheduleLayoutOrPreloadForSubresources_(this.resources_.getResourceForElement(parentElement), true, elements(subElements));
    };
    _proto.schedulePause = function schedulePause(parentElement, subElements) {
      var parentResource = this.resources_.getResourceForElement(parentElement);
      subElements = elements(subElements);
      this.findResourcesInElements_(parentResource, subElements, function(resource) {
        resource.pause();
      });
    };
    _proto.scheduleResume = function scheduleResume(parentElement, subElements) {
      var parentResource = this.resources_.getResourceForElement(parentElement);
      subElements = elements(subElements);
      this.findResourcesInElements_(parentResource, subElements, function(resource) {
        resource.resume();
      });
    };
    _proto.scheduleUnlayout = function scheduleUnlayout(parentElement, subElements) {
      var parentResource = this.resources_.getResourceForElement(parentElement);
      subElements = elements(subElements);
      this.findResourcesInElements_(parentResource, subElements, function(resource) {
        resource.unlayout();
      });
    };
    _proto.requireLayout = function requireLayout(element, opt_parentPriority) {
      var promises = [];
      this.discoverResourcesForElement_(element, function(resource) {
        promises.push(resource.element.ensureLoaded());
      });
      return Promise.all(promises);
    };
    _proto.findResourcesInElements_ = function findResourcesInElements_(parentResource, elements2, callback) {
      for (var _iterator = _createForOfIteratorHelperLoose8(elements2), _step; !(_step = _iterator()).done; ) {
        var element = _step.value;
        devAssert2(parentResource.element.contains(element));
        this.discoverResourcesForElement_(element, callback);
      }
    };
    _proto.discoverResourcesForElement_ = function discoverResourcesForElement_(element, callback) {
      if (element.classList.contains("i-amphtml-element")) {
        callback(this.resources_.getResourceForElement(element));
        var placeholder = element.getPlaceholder();
        if (placeholder) {
          this.discoverResourcesForElement_(placeholder, callback);
        }
      } else {
        var ampElements = element.getElementsByClassName("i-amphtml-element");
        var seen = [];
        for (var i = 0; i < ampElements.length; i++) {
          var ampElement = ampElements[i];
          var covered = false;
          for (var j = 0; j < seen.length; j++) {
            if (seen[j].contains(ampElement)) {
              covered = true;
              break;
            }
          }
          if (!covered) {
            seen.push(ampElement);
            callback(this.resources_.getResourceForElement(ampElement));
          }
        }
      }
    };
    _proto.scheduleLayoutOrPreloadForSubresources_ = function scheduleLayoutOrPreloadForSubresources_(parentResource, layout, subElements) {
      this.findResourcesInElements_(parentResource, subElements, function(resource) {
        resource.element.ensureLoaded(parentResource.getLayoutPriority());
      });
    };
    return OwnersImpl2;
  }();
  function installOwnersServiceForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, "owners", OwnersImpl);
  }

  // src/core/data-structures/finite-state-machine.js
  var FiniteStateMachine = /* @__PURE__ */ function() {
    function FiniteStateMachine2(initialState) {
      this.state_ = initialState;
      this.transitions_ = map();
    }
    var _proto = FiniteStateMachine2.prototype;
    _proto.addTransition = function addTransition(oldState, newState, callback) {
      var transition = this.statesToTransition_(oldState, newState);
      devAssert(!this.transitions_[transition], "cannot define a duplicate transition callback");
      this.transitions_[transition] = callback;
    };
    _proto.setState = function setState(newState) {
      var oldState = this.state_;
      this.state_ = newState;
      var transition = this.statesToTransition_(oldState, newState);
      var callback = this.transitions_[transition];
      callback == null ? void 0 : callback();
    };
    _proto.statesToTransition_ = function statesToTransition_(oldState, newState) {
      return oldState + "|" + newState;
    };
    return FiniteStateMachine2;
  }();

  // src/service/task-queue.js
  var TaskQueue = /* @__PURE__ */ function() {
    function TaskQueue2() {
      this.tasks_ = [];
      this.taskIdMap_ = {};
      this.lastEnqueueTime_ = 0;
      this.lastDequeueTime_ = 0;
    }
    var _proto = TaskQueue2.prototype;
    _proto.getSize = function getSize() {
      return this.tasks_.length;
    };
    _proto.getLastEnqueueTime = function getLastEnqueueTime() {
      return this.lastEnqueueTime_;
    };
    _proto.getLastDequeueTime = function getLastDequeueTime() {
      return this.lastDequeueTime_;
    };
    _proto.getTaskById = function getTaskById(taskId) {
      return this.taskIdMap_[taskId] || null;
    };
    _proto.enqueue = function enqueue(task) {
      devAssert2(!this.taskIdMap_[task.id], "Task already enqueued: %s", task.id);
      this.tasks_.push(task);
      this.taskIdMap_[task.id] = task;
      this.lastEnqueueTime_ = Date.now();
    };
    _proto.dequeue = function dequeue(task) {
      var existing = this.taskIdMap_[task.id];
      var dequeued = this.removeAtIndex(task, this.tasks_.indexOf(existing));
      if (!dequeued) {
        return false;
      }
      this.lastDequeueTime_ = Date.now();
      return true;
    };
    _proto.peek = function peek(scorer) {
      var minScore = 1e6;
      var minTask = null;
      for (var i = 0; i < this.tasks_.length; i++) {
        var task = this.tasks_[i];
        var score = scorer(task);
        if (score < minScore) {
          minScore = score;
          minTask = task;
        }
      }
      return minTask;
    };
    _proto.forEach = function forEach(callback) {
      this.tasks_.forEach(callback);
    };
    _proto.removeAtIndex = function removeAtIndex(task, index) {
      var existing = this.taskIdMap_[task.id];
      if (!existing || this.tasks_[index] != existing) {
        return false;
      }
      this.tasks_.splice(index, 1);
      delete this.taskIdMap_[task.id];
      return true;
    };
    _proto.purge = function purge(callback) {
      var index = this.tasks_.length;
      while (index--) {
        if (callback(this.tasks_[index])) {
          this.removeAtIndex(this.tasks_[index], index);
        }
      }
    };
    return TaskQueue2;
  }();

  // src/service/resources-impl.js
  var TAG_6 = "Resources";
  var LAYOUT_TASK_ID_ = "L";
  var LAYOUT_TASK_OFFSET_ = 0;
  var PRELOAD_TASK_ID_ = "P";
  var PRELOAD_TASK_OFFSET_ = 2;
  var PRIORITY_BASE_ = 10;
  var PRIORITY_PENALTY_TIME_ = 1e3;
  var POST_TASK_PASS_DELAY_ = 1e3;
  var MUTATE_DEFER_DELAY_ = 500;
  var FOCUS_HISTORY_TIMEOUT_2 = 1e3 * 60;
  var FOUR_FRAME_DELAY_2 = 70;
  var ResourcesImpl = /* @__PURE__ */ function() {
    function ResourcesImpl2(ampdoc2) {
      var _this = this;
      this.ampdoc = ampdoc2;
      this.win = ampdoc2.win;
      this.viewer_ = Services.viewerForDoc(ampdoc2);
      this.isRuntimeOn_ = this.viewer_.isRuntimeOn();
      this.isBuildOn_ = false;
      this.resourceIdCounter_ = 0;
      this.resources_ = [];
      this.addCount_ = 0;
      this.buildAttemptsCount_ = 0;
      this.buildsThisPass_ = 0;
      this.visible_ = this.ampdoc.isVisible();
      this.documentReady_ = false;
      this.firstPassAfterDocumentReady_ = true;
      this.ampInitialized_ = false;
      this.firstVisibleTime_ = -1;
      this.relayoutAll_ = true;
      this.relayoutTop_ = -1;
      this.lastScrollTime_ = 0;
      this.lastVelocity_ = 0;
      this.pass_ = new Pass(this.win, function() {
        return _this.doPass();
      });
      this.remeasurePass_ = new Pass(this.win, function() {
        _this.relayoutAll_ = true;
        _this.schedulePass();
      });
      this.exec_ = new TaskQueue();
      this.queue_ = new TaskQueue();
      this.boundTaskScorer_ = this.calcTaskScore_.bind(this);
      this.requestsChangeSize_ = [];
      this.pendingBuildResources_ = [];
      this.isCurrentlyBuildingPendingResources_ = false;
      this.viewport_ = Services.viewportForDoc(this.ampdoc);
      this.vsync_ = Services.vsyncFor(this.win);
      this.activeHistory_ = new FocusHistory(this.win, FOCUS_HISTORY_TIMEOUT_2);
      this.vsyncScheduled_ = false;
      this.contentHeight_ = 0;
      this.maybeChangeHeight_ = false;
      this.passCallbacks_ = [];
      this.elementsThatScrolled_ = [];
      this.firstPassDone_ = new Deferred();
      this.visibilityStateMachine_ = new FiniteStateMachine(this.ampdoc.getVisibilityState());
      this.viewport_.onChanged(function(event) {
        _this.lastScrollTime_ = _this.win.Date.now();
        _this.lastVelocity_ = event.velocity;
        if (event.relayoutAll) {
          _this.relayoutAll_ = true;
          _this.maybeChangeHeight_ = true;
        }
        _this.schedulePass();
      });
      this.viewport_.onScroll(function() {
        _this.lastScrollTime_ = _this.win.Date.now();
      });
      this.ampdoc.onVisibilityChanged(function() {
        if (_this.firstVisibleTime_ == -1 && _this.ampdoc.isVisible()) {
          _this.firstVisibleTime_ = _this.win.Date.now();
        }
        _this.schedulePass();
      });
      this.viewer_.onRuntimeState(function(state) {
        dev().fine(TAG_6, "Runtime state:", state);
        _this.isRuntimeOn_ = state;
        _this.schedulePass(1);
      });
      startupChunk(this.ampdoc, function() {
        _this.setupVisibilityStateMachine_(_this.visibilityStateMachine_);
        _this.schedulePass(0);
      });
      this.rebuildDomWhenReady_();
      this.throttledScroll_ = throttle(this.win, function(e) {
        return _this.scrolled_(e);
      }, 250);
      listen(this.win.document, "scroll", this.throttledScroll_, {
        capture: true,
        passive: true
      });
    }
    var _proto = ResourcesImpl2.prototype;
    _proto.rebuildDomWhenReady_ = function rebuildDomWhenReady_() {
      var _this2 = this;
      this.ampdoc.whenReady().then(function() {
        _this2.documentReady_ = true;
        _this2.buildReadyResources_();
        _this2.pendingBuildResources_ = null;
        var input = Services.inputFor(_this2.win);
        input.setupInputModeClasses(_this2.ampdoc);
        if (isEsm()) {
          return;
        }
        var remeasure = function remeasure2() {
          return _this2.remeasurePass_.schedule();
        };
        remeasure();
        Promise.race([loadPromise(_this2.win), Services.timerFor(_this2.win).promise(3100)]).then(remeasure);
        if (_this2.win.document.fonts && _this2.win.document.fonts.status != "loaded") {
          _this2.win.document.fonts.ready.then(remeasure);
        }
      });
    };
    _proto.get = function get() {
      return this.resources_.slice(0);
    };
    _proto.getAmpdoc = function getAmpdoc2() {
      return this.ampdoc;
    };
    _proto.getResourceForElement = function getResourceForElement(element) {
      return Resource.forElement(element);
    };
    _proto.getResourceForElementOptional = function getResourceForElementOptional(element) {
      return Resource.forElementOptional(element);
    };
    _proto.getScrollDirection = function getScrollDirection() {
      return Math.sign(this.lastVelocity_) || 1;
    };
    _proto.add = function add(element) {
      this.addCount_++;
      if (this.addCount_ == 1) {
        this.viewport_.ensureReadyForElements();
      }
      var resource = Resource.forElementOptional(element);
      if (resource && resource.getState() != ResourceState_Enum.NOT_BUILT && !element.reconstructWhenReparented()) {
        resource.requestMeasure();
        dev().fine(TAG_6, "resource reused:", resource.debugid);
      } else {
        resource = new Resource(++this.resourceIdCounter_, element, this);
        dev().fine(TAG_6, "resource added:", resource.debugid);
      }
      this.resources_.push(resource);
      this.remeasurePass_.schedule(1e3);
    };
    _proto.isUnderBuildQuota_ = function isUnderBuildQuota_() {
      return this.buildAttemptsCount_ < 20 || this.ampdoc.hasBeenVisible();
    };
    _proto.buildOrScheduleBuildForResource_ = function buildOrScheduleBuildForResource_(resource, checkForDupes, ignoreQuota) {
      if (checkForDupes === void 0) {
        checkForDupes = false;
      }
      if (ignoreQuota === void 0) {
        ignoreQuota = false;
      }
      var buildingEnabled = this.isRuntimeOn_ || this.isBuildOn_;
      if (!buildingEnabled) {
        return;
      }
      var shouldBuildResource = this.ampdoc.getVisibilityState() != VisibilityState_Enum.PRERENDER || resource.prerenderAllowed();
      if (!shouldBuildResource) {
        return;
      }
      if (this.documentReady_) {
        this.buildResourceUnsafe_(resource, ignoreQuota);
      } else if (!resource.isBuilt() && !resource.isBuilding()) {
        if (!checkForDupes || !this.pendingBuildResources_.includes(resource)) {
          this.pendingBuildResources_.push(resource);
          this.buildReadyResources_();
        }
      }
    };
    _proto.buildReadyResources_ = function buildReadyResources_() {
      if (this.isCurrentlyBuildingPendingResources_) {
        return;
      }
      try {
        this.isCurrentlyBuildingPendingResources_ = true;
        this.buildReadyResourcesUnsafe_();
      } finally {
        this.isCurrentlyBuildingPendingResources_ = false;
      }
    };
    _proto.buildReadyResourcesUnsafe_ = function buildReadyResourcesUnsafe_() {
      for (var i = 0; i < this.pendingBuildResources_.length; i++) {
        var resource = this.pendingBuildResources_[i];
        if (this.documentReady_ || hasNextNodeInDocumentOrder(resource.element, this.ampdoc.getRootNode())) {
          this.pendingBuildResources_.splice(i--, 1);
          this.buildResourceUnsafe_(resource);
        }
      }
    };
    _proto.buildResourceUnsafe_ = function buildResourceUnsafe_(resource, ignoreQuota) {
      var _this3 = this;
      if (ignoreQuota === void 0) {
        ignoreQuota = false;
      }
      if (!ignoreQuota && !this.isUnderBuildQuota_() && !resource.isBuildRenderBlocking()) {
        return null;
      }
      var promise = resource.build();
      if (!promise) {
        return null;
      }
      dev().fine(TAG_6, "build resource:", resource.debugid);
      this.buildAttemptsCount_++;
      this.buildsThisPass_++;
      return promise.then(function() {
        return _this3.schedulePass();
      }, function(error) {
        _this3.removeResource_(resource);
        if (!isBlockedByConsent(error)) {
          throw error;
        }
      });
    };
    _proto.remove = function remove2(element) {
      var resource = Resource.forElementOptional(element);
      if (!resource) {
        return;
      }
      this.removeResource_(resource);
    };
    _proto.removeResource_ = function removeResource_(resource) {
      var index = this.resources_.indexOf(resource);
      if (index != -1) {
        this.resources_.splice(index, 1);
      }
      if (resource.isBuilt()) {
        resource.pauseOnRemove();
      }
      if (resource.getState() === ResourceState_Enum.LAYOUT_SCHEDULED) {
        resource.layoutCanceled();
      }
      this.cleanupTasks_(resource, true);
      dev().fine(TAG_6, "resource removed:", resource.debugid);
    };
    _proto.upgraded = function upgraded(element) {
      var resource = Resource.forElement(element);
      this.buildOrScheduleBuildForResource_(resource);
      dev().fine(TAG_6, "resource upgraded:", resource.debugid);
    };
    _proto.updateLayoutPriority = function updateLayoutPriority(element, newLayoutPriority) {
      var resource = Resource.forElement(element);
      resource.updateLayoutPriority(newLayoutPriority);
      this.queue_.forEach(function(task) {
        if (task.resource == resource) {
          task.priority = newLayoutPriority;
        }
      });
      this.schedulePass();
    };
    _proto.schedulePass = function schedulePass(opt_delay) {
      return this.pass_.schedule(opt_delay);
    };
    _proto.updateOrEnqueueMutateTask = function updateOrEnqueueMutateTask(resource, newRequest) {
      var request = null;
      for (var i = 0; i < this.requestsChangeSize_.length; i++) {
        if (this.requestsChangeSize_[i].resource == resource) {
          request = this.requestsChangeSize_[i];
          break;
        }
      }
      if (request) {
        request.newHeight = newRequest.newHeight;
        request.newWidth = newRequest.newWidth;
        request.marginChange = newRequest.marginChange;
        request.event = newRequest.event;
        request.force = newRequest.force || request.force;
        request.callback = newRequest.callback;
      } else {
        this.requestsChangeSize_.push(newRequest);
      }
    };
    _proto.schedulePassVsync = function schedulePassVsync() {
      var _this4 = this;
      if (this.vsyncScheduled_) {
        return;
      }
      this.vsyncScheduled_ = true;
      this.vsync_.mutate(function() {
        return _this4.doPass();
      });
    };
    _proto.ampInitComplete = function ampInitComplete() {
      this.ampInitialized_ = true;
      dev().fine(TAG_6, "ampInitComplete");
      this.schedulePass();
    };
    _proto.setRelayoutTop = function setRelayoutTop(relayoutTop) {
      if (this.relayoutTop_ == -1) {
        this.relayoutTop_ = relayoutTop;
      } else {
        this.relayoutTop_ = Math.min(relayoutTop, this.relayoutTop_);
      }
    };
    _proto.maybeHeightChanged = function maybeHeightChanged() {
      this.maybeChangeHeight_ = true;
    };
    _proto.onNextPass = function onNextPass(callback) {
      this.passCallbacks_.push(callback);
    };
    _proto.doPass = function doPass() {
      var _this5 = this;
      if (!this.isRuntimeOn_) {
        dev().fine(TAG_6, "runtime is off");
        return;
      }
      this.visible_ = this.ampdoc.isVisible();
      this.buildsThisPass_ = 0;
      var firstPassAfterDocumentReady = this.documentReady_ && this.firstPassAfterDocumentReady_ && this.ampInitialized_;
      if (firstPassAfterDocumentReady) {
        var _doc$body$firstElemen;
        this.firstPassAfterDocumentReady_ = false;
        var doc = this.win.document;
        var documentInfo = Services.documentInfoForDoc(this.ampdoc);
        this.viewer_.sendMessage("documentLoaded", dict({
          "title": doc.title,
          "sourceUrl": getSourceUrl(this.ampdoc.getUrl()),
          "isStory": ((_doc$body$firstElemen = doc.body.firstElementChild) == null ? void 0 : _doc$body$firstElemen.tagName) === "AMP-STORY",
          "serverLayout": doc.documentElement.hasAttribute("i-amphtml-element"),
          "linkRels": documentInfo.linkRels,
          "metaTags": {
            "viewport": documentInfo.viewport
          },
          "viewport": documentInfo.viewport
        }), true);
        this.contentHeight_ = this.viewport_.getContentHeight();
        this.viewer_.sendMessage("documentHeight", dict({
          "height": this.contentHeight_
        }), true);
        dev().fine(TAG_6, "document height on load: %s", this.contentHeight_);
      }
      var firstPassAfterAllBuilt = !this.firstPassAfterDocumentReady_ && this.firstPassAfterAllBuilt_ && this.resources_.every(function(r) {
        return r.getState() != Resource.NOT_BUILT || r.element.R1();
      });
      if (firstPassAfterAllBuilt) {
        this.firstPassAfterAllBuilt_ = false;
        this.maybeChangeHeight_ = true;
      }
      var viewportSize = this.viewport_.getSize();
      dev().fine(TAG_6, "PASS: visible=", this.visible_, ", relayoutAll=", this.relayoutAll_, ", relayoutTop=", this.relayoutTop_, ", viewportSize=", viewportSize.width, viewportSize.height);
      this.pass_.cancel();
      this.vsyncScheduled_ = false;
      this.visibilityStateMachine_.setState(this.ampdoc.getVisibilityState());
      this.signalIfReady_();
      if (this.maybeChangeHeight_) {
        this.maybeChangeHeight_ = false;
        this.vsync_.measure(function() {
          var measuredContentHeight = _this5.viewport_.getContentHeight();
          if (measuredContentHeight != _this5.contentHeight_) {
            _this5.viewer_.sendMessage("documentHeight", dict({
              "height": measuredContentHeight
            }), true);
            _this5.contentHeight_ = measuredContentHeight;
            dev().fine(TAG_6, "document height changed: %s", _this5.contentHeight_);
            _this5.viewport_.contentHeightChanged();
          }
        });
      }
      for (var i = 0; i < this.passCallbacks_.length; i++) {
        var fn = this.passCallbacks_[i];
        fn();
      }
      this.passCallbacks_.length = 0;
    };
    _proto.signalIfReady_ = function signalIfReady_() {
      if (this.documentReady_ && this.ampInitialized_ && !this.ampdoc.signals().get(READY_SCAN_SIGNAL)) {
        this.ampdoc.signals().signal(READY_SCAN_SIGNAL);
        dev().fine(TAG_6, "signal: ready-scan");
      }
    };
    _proto.hasMutateWork_ = function hasMutateWork_() {
      return this.requestsChangeSize_.length > 0;
    };
    _proto.mutateWork_ = function mutateWork_() {
      var _this6 = this;
      var now = this.win.Date.now();
      var viewportRect = this.viewport_.getRect();
      var topOffset = viewportRect.height / 10;
      var bottomOffset = viewportRect.height / 10;
      var isScrollingStopped = Math.abs(this.lastVelocity_) < 0.01 && now - this.lastScrollTime_ > MUTATE_DEFER_DELAY_ || now - this.lastScrollTime_ > MUTATE_DEFER_DELAY_ * 2;
      if (this.requestsChangeSize_.length > 0) {
        dev().fine(TAG_6, "change size requests:", this.requestsChangeSize_.length);
        var requestsChangeSize = this.requestsChangeSize_;
        this.requestsChangeSize_ = [];
        var minTop = -1;
        var scrollAdjSet = [];
        var aboveVpHeightChange = 0;
        var _loop = function _loop2(i2) {
          var request = requestsChangeSize[i2];
          var _request = request, event = _request.event, resource = _request.resource;
          var box = resource.getLayoutBox();
          var topMarginDiff = 0;
          var bottomMarginDiff = 0;
          var leftMarginDiff = 0;
          var rightMarginDiff = 0;
          var bottomDisplacedBoundary = box.bottom, topUnchangedBoundary = box.top;
          var newMargins = void 0;
          if (request.marginChange) {
            newMargins = request.marginChange.newMargins;
            var margins = request.marginChange.currentMargins;
            if (newMargins.top != void 0) {
              topMarginDiff = newMargins.top - margins.top;
            }
            if (newMargins.bottom != void 0) {
              bottomMarginDiff = newMargins.bottom - margins.bottom;
            }
            if (newMargins.left != void 0) {
              leftMarginDiff = newMargins.left - margins.left;
            }
            if (newMargins.right != void 0) {
              rightMarginDiff = newMargins.right - margins.right;
            }
            if (topMarginDiff) {
              topUnchangedBoundary = box.top - margins.top;
            }
            if (bottomMarginDiff) {
              bottomDisplacedBoundary = box.bottom + margins.bottom;
            }
          }
          var heightDiff = request.newHeight - box.height;
          var widthDiff = request.newWidth - box.width;
          var resize = false;
          if (heightDiff == 0 && topMarginDiff == 0 && bottomMarginDiff == 0 && widthDiff == 0 && leftMarginDiff == 0 && rightMarginDiff == 0) {
          } else if (request.force || !_this6.visible_) {
            resize = true;
          } else if (_this6.activeHistory_.hasDescendantsOf(resource.element) || event && event.userActivation && event.userActivation.hasBeenActive) {
            resize = true;
          } else if (topUnchangedBoundary >= viewportRect.bottom - bottomOffset || topMarginDiff == 0 && box.bottom + Math.min(heightDiff, 0) >= viewportRect.bottom - bottomOffset) {
            resize = true;
          } else if (viewportRect.top > 1 && bottomDisplacedBoundary <= viewportRect.top + topOffset) {
            if (heightDiff < 0 && viewportRect.top + aboveVpHeightChange < -heightDiff) {
              return "continue";
            }
            if (isScrollingStopped) {
              aboveVpHeightChange = aboveVpHeightChange + heightDiff;
              scrollAdjSet.push(request);
            } else {
              _this6.requestsChangeSize_.push(request);
            }
            return "continue";
          } else if (_this6.elementNearBottom_(resource, box)) {
            resize = true;
          } else if (heightDiff < 0 || topMarginDiff < 0 || bottomMarginDiff < 0) {
          } else if (request.newHeight == box.height) {
            _this6.vsync_.run({
              measure: function measure(state) {
                state.resize = false;
                var parent = resource.element.parentElement;
                if (!parent) {
                  return;
                }
                var parentWidth = parent.getLayoutSize && parent.getLayoutSize().width || parent.offsetWidth;
                var cumulativeWidth = widthDiff;
                for (var _i = 0; _i < parent.childElementCount; _i++) {
                  cumulativeWidth += parent.children[_i].offsetWidth;
                  if (cumulativeWidth > parentWidth) {
                    return;
                  }
                }
                state.resize = true;
              },
              mutate: function mutate(state) {
                if (state.resize) {
                  request.resource.changeSize(request.newHeight, request.newWidth, newMargins);
                }
                request.resource.overflowCallback(!state.resize, request.newHeight, request.newWidth, newMargins);
              }
            }, {});
          } else {
            request.resource.overflowCallback(true, request.newHeight, request.newWidth, newMargins);
          }
          if (resize) {
            if (box.top >= 0) {
              minTop = minTop == -1 ? box.top : Math.min(minTop, box.top);
            }
            request.resource.changeSize(request.newHeight, request.newWidth, newMargins);
            request.resource.overflowCallback(false, request.newHeight, request.newWidth, newMargins);
            _this6.maybeChangeHeight_ = true;
          }
          if (request.callback) {
            request.callback(resize);
          }
        };
        for (var i = 0; i < requestsChangeSize.length; i++) {
          var _ret = _loop(i);
          if (_ret === "continue")
            continue;
        }
        if (minTop != -1) {
          this.setRelayoutTop(minTop);
        }
        if (scrollAdjSet.length > 0) {
          this.vsync_.run({
            measure: function measure(state) {
              state.scrollHeight = _this6.viewport_.getScrollHeight();
              state.scrollTop = _this6.viewport_.getScrollTop();
            },
            mutate: function mutate(state) {
              var minTop2 = -1;
              scrollAdjSet.forEach(function(request) {
                var box = request.resource.getLayoutBox();
                minTop2 = minTop2 == -1 ? box.top : Math.min(minTop2, box.top);
                request.resource.changeSize(request.newHeight, request.newWidth, request.marginChange ? request.marginChange.newMargins : void 0);
                if (request.callback) {
                  request.callback(true);
                }
              });
              if (minTop2 != -1) {
                _this6.setRelayoutTop(minTop2);
              }
              var newScrollHeight = _this6.viewport_.getScrollHeight();
              if (newScrollHeight != state.scrollHeight) {
                _this6.viewport_.setScrollTop(state.scrollTop + (newScrollHeight - state.scrollHeight));
              }
              _this6.maybeChangeHeight_ = true;
            }
          }, {});
        }
      }
    };
    _proto.elementNearBottom_ = function elementNearBottom_(resource, opt_layoutBox, opt_initialLayoutBox) {
      var contentHeight = this.viewport_.getContentHeight();
      var threshold = Math.max(contentHeight * 0.85, contentHeight - 1e3);
      var box = opt_layoutBox || resource.getLayoutBox();
      var initialBox = opt_initialLayoutBox || resource.getInitialLayoutBox();
      return box.bottom >= threshold || initialBox.bottom >= threshold;
    };
    _proto.measureResource_ = function measureResource_(r) {
      var wasDisplayed = r.isDisplayed();
      r.measure();
      return !(wasDisplayed && !r.isDisplayed());
    };
    _proto.unloadResources_ = function unloadResources_(resources) {
      var _this7 = this;
      if (resources.length) {
        this.vsync_.mutate(function() {
          resources.forEach(function(r) {
            r.unload();
            _this7.cleanupTasks_(r);
          });
          dev().fine(TAG_6, "unload:", resources);
        });
      }
    };
    _proto.discoverWork_ = function discoverWork_() {
      var now = this.win.Date.now();
      var elementsThatScrolled = this.elementsThatScrolled_, relayoutAll = this.relayoutAll_, relayoutTop = this.relayoutTop_;
      this.relayoutAll_ = false;
      this.relayoutTop_ = -1;
      var relayoutCount = 0;
      var remeasureCount = 0;
      for (var i = 0; i < this.resources_.length; i++) {
        var r = this.resources_[i];
        if (r.getState() == ResourceState_Enum.NOT_BUILT && !r.isBuilding() && !r.element.R1()) {
          this.buildOrScheduleBuildForResource_(r, true);
        }
        if (relayoutAll || !r.hasBeenMeasured() || r.getState() == ResourceState_Enum.NOT_LAID_OUT) {
          relayoutCount++;
        }
        if (r.isMeasureRequested()) {
          remeasureCount++;
        }
      }
      var toUnload;
      if (relayoutCount > 0 || remeasureCount > 0 || relayoutAll || relayoutTop != -1 || elementsThatScrolled.length > 0) {
        for (var _i2 = 0; _i2 < this.resources_.length; _i2++) {
          var _r = this.resources_[_i2];
          if (_r.hasOwner() && !_r.isMeasureRequested() || _r.element.R1()) {
            continue;
          }
          var needsMeasure = relayoutAll || _r.getState() == ResourceState_Enum.NOT_LAID_OUT || !_r.hasBeenMeasured() || _r.isMeasureRequested() || relayoutTop != -1 && _r.getLayoutBox().bottom >= relayoutTop;
          if (!needsMeasure) {
            for (var _i3 = 0; _i3 < elementsThatScrolled.length; _i3++) {
              if (elementsThatScrolled[_i3].contains(_r.element)) {
                needsMeasure = true;
                break;
              }
            }
          }
          if (needsMeasure) {
            var isDisplayed = this.measureResource_(_r);
            if (!isDisplayed) {
              if (!toUnload) {
                toUnload = [];
              }
              toUnload.push(_r);
            }
          }
        }
      }
      elementsThatScrolled.length = 0;
      if (toUnload) {
        this.unloadResources_(toUnload);
      }
      var viewportRect = this.viewport_.getRect();
      var loadRect;
      if (this.visible_) {
        loadRect = expandLayoutRect(viewportRect, 0.25, 2);
      } else {
        loadRect = viewportRect;
      }
      var visibleRect = this.visible_ ? expandLayoutRect(viewportRect, 0.25, 0.25) : viewportRect;
      for (var _i4 = 0; _i4 < this.resources_.length; _i4++) {
        var _r2 = this.resources_[_i4];
        if (_r2.getState() == ResourceState_Enum.NOT_BUILT || _r2.hasOwner() || _r2.element.R1()) {
          continue;
        }
        var shouldBeInViewport = this.visible_ && _r2.isDisplayed() && _r2.overlaps(visibleRect);
        _r2.setInViewport(shouldBeInViewport);
      }
      if (loadRect) {
        for (var _i5 = 0; _i5 < this.resources_.length; _i5++) {
          var _r3 = this.resources_[_i5];
          if (!_r3.isBuilt() && !_r3.isBuilding() && !_r3.hasOwner() && !_r3.element.R1() && _r3.hasBeenMeasured() && _r3.isDisplayed() && _r3.overlaps(loadRect)) {
            this.buildOrScheduleBuildForResource_(_r3, true, true);
          }
          if (_r3.getState() != ResourceState_Enum.READY_FOR_LAYOUT || _r3.hasOwner()) {
            continue;
          }
          if (_r3.isDisplayed() && _r3.overlaps(loadRect)) {
            this.scheduleLayoutOrPreload(_r3, true);
          }
        }
      }
      if (this.visible_ && this.isIdle_(now)) {
        var idleScheduledCount = 0;
        for (var _i6 = 0; _i6 < this.resources_.length && idleScheduledCount < 4; _i6++) {
          var _r4 = this.resources_[_i6];
          if (_r4.getState() == ResourceState_Enum.READY_FOR_LAYOUT && !_r4.hasOwner() && !_r4.element.R1() && _r4.isDisplayed() && _r4.idleRenderOutsideViewport()) {
            dev().fine(TAG_6, "idleRenderOutsideViewport layout:", _r4.debugid);
            this.scheduleLayoutOrPreload(_r4, false);
            idleScheduledCount++;
          }
        }
        for (var _i7 = 0; _i7 < this.resources_.length && idleScheduledCount < 4; _i7++) {
          var _r5 = this.resources_[_i7];
          if (_r5.getState() == ResourceState_Enum.READY_FOR_LAYOUT && !_r5.hasOwner() && !_r5.element.R1() && _r5.isDisplayed()) {
            dev().fine(TAG_6, "idle layout:", _r5.debugid);
            this.scheduleLayoutOrPreload(_r5, false);
            idleScheduledCount++;
          }
        }
      }
    };
    _proto.isIdle_ = function isIdle_(now) {
      if (now === void 0) {
        now = Date.now();
      }
      var lastDequeueTime = this.exec_.getLastDequeueTime();
      return this.exec_.getSize() == 0 && this.queue_.getSize() == 0 && now > lastDequeueTime + 5e3 && lastDequeueTime > 0;
    };
    _proto.work_ = function work_() {
      var now = this.win.Date.now();
      var timeout = -1;
      var task = this.queue_.peek(this.boundTaskScorer_);
      while (task) {
        timeout = this.calcTaskTimeout_(task);
        dev().fine(TAG_6, "peek from queue:", task.id, "sched at", task.scheduleTime, "score", this.boundTaskScorer_(task), "timeout", timeout);
        if (timeout > 16) {
          break;
        }
        this.queue_.dequeue(task);
        var executing = this.exec_.getTaskById(task.id);
        if (executing) {
          var reschedule = this.reschedule_.bind(this, task);
          executing.promise.then(reschedule, reschedule);
        } else {
          var _task = task, resource = _task.resource;
          var stillDisplayed = true;
          resource.measure();
          if (stillDisplayed && this.isLayoutAllowed_(resource, task.forceOutsideViewport)) {
            task.promise = task.callback();
            task.startTime = now;
            dev().fine(TAG_6, "exec:", task.id, "at", task.startTime);
            this.exec_.enqueue(task);
            task.promise.then(this.taskComplete_.bind(this, task, true), this.taskComplete_.bind(this, task, false)).catch(reportError);
          } else {
            dev().fine(TAG_6, "cancelled", task.id);
            resource.layoutCanceled();
          }
        }
        task = this.queue_.peek(this.boundTaskScorer_);
        timeout = -1;
      }
      dev().fine(TAG_6, "queue size:", this.queue_.getSize(), "exec size:", this.exec_.getSize());
      if (timeout >= 0) {
        return timeout;
      }
      var nextPassDelay = (now - this.exec_.getLastDequeueTime()) * 2;
      nextPassDelay = Math.max(Math.min(3e4, nextPassDelay), 5e3);
      return nextPassDelay;
    };
    _proto.calcTaskScore_ = function calcTaskScore_(task) {
      var viewport = this.viewport_.getRect();
      var box = task.resource.getLayoutBox();
      var posPriority = Math.floor((box.top - viewport.top) / viewport.height);
      if (Math.sign(posPriority) != this.getScrollDirection()) {
        posPriority *= 2;
      }
      posPriority = Math.abs(posPriority);
      return task.priority * PRIORITY_BASE_ + posPriority;
    };
    _proto.calcTaskTimeout_ = function calcTaskTimeout_(task) {
      var now = this.win.Date.now();
      if (this.exec_.getSize() == 0) {
        if (this.firstVisibleTime_ === -1) {
          return 0;
        }
        var penalty = task.priority * PRIORITY_PENALTY_TIME_;
        return Math.max(penalty - (now - this.firstVisibleTime_), 0);
      }
      var timeout = 0;
      this.exec_.forEach(function(other) {
        var penalty2 = Math.max((task.priority - other.priority) * PRIORITY_PENALTY_TIME_, 0);
        timeout = Math.max(timeout, penalty2 - (now - other.startTime));
      });
      return timeout;
    };
    _proto.reschedule_ = function reschedule_(task) {
      if (!this.queue_.getTaskById(task.id)) {
        this.queue_.enqueue(task);
      }
    };
    _proto.taskComplete_ = function taskComplete_(task, success, opt_reason) {
      this.exec_.dequeue(task);
      this.schedulePass(POST_TASK_PASS_DELAY_);
      if (!success) {
        dev().info(TAG_6, "task failed:", task.id, task.resource.debugid, opt_reason);
        return Promise.reject(opt_reason);
      }
    };
    _proto.isLayoutAllowed_ = function isLayoutAllowed_(resource, forceOutsideViewport) {
      if (resource.getState() == ResourceState_Enum.NOT_BUILT || !resource.isDisplayed()) {
        return false;
      }
      if (!this.visible_) {
        if (this.ampdoc.getVisibilityState() != VisibilityState_Enum.PRERENDER || !resource.prerenderAllowed()) {
          return false;
        }
      }
      if (!forceOutsideViewport && !resource.isInViewport() && !resource.renderOutsideViewport() && !resource.idleRenderOutsideViewport()) {
        return false;
      }
      return true;
    };
    _proto.scheduleLayoutOrPreload = function scheduleLayoutOrPreload(resource, layout, opt_parentPriority, opt_forceOutsideViewport) {
      if (resource.element.R1()) {
        return;
      }
      var isBuilt = resource.getState() != ResourceState_Enum.NOT_BUILT;
      var isDisplayed = resource.isDisplayed();
      if (!isBuilt || !isDisplayed) {
        devAssert2(false, "Not ready for layout: %s (%s)", resource.debugid, resource.getState());
      }
      var forceOutsideViewport = opt_forceOutsideViewport || false;
      if (!this.isLayoutAllowed_(resource, forceOutsideViewport)) {
        return;
      }
      if (layout) {
        this.schedule_(resource, LAYOUT_TASK_ID_, LAYOUT_TASK_OFFSET_, opt_parentPriority || 0, forceOutsideViewport, resource.startLayout.bind(resource));
      } else {
        this.schedule_(resource, PRELOAD_TASK_ID_, PRELOAD_TASK_OFFSET_, opt_parentPriority || 0, forceOutsideViewport, resource.startLayout.bind(resource));
      }
    };
    _proto.schedule_ = function schedule_(resource, localId, priorityOffset, parentPriority, forceOutsideViewport, callback) {
      var taskId = resource.getTaskId(localId);
      var task = {
        id: taskId,
        resource: resource,
        priority: Math.max(resource.getLayoutPriority(), parentPriority) + priorityOffset,
        forceOutsideViewport: forceOutsideViewport,
        callback: callback,
        scheduleTime: this.win.Date.now(),
        startTime: 0,
        promise: null
      };
      dev().fine(TAG_6, "schedule:", task.id, "at", task.scheduleTime);
      var queued = this.queue_.getTaskById(taskId);
      if (!queued || task.priority < queued.priority) {
        if (queued) {
          this.queue_.dequeue(queued);
        }
        this.queue_.enqueue(task);
        this.schedulePass(this.calcTaskTimeout_(task));
      }
      task.resource.layoutScheduled(task.scheduleTime);
    };
    _proto.whenFirstPass = function whenFirstPass() {
      return this.firstPassDone_.promise;
    };
    _proto.setupVisibilityStateMachine_ = function setupVisibilityStateMachine_(vsm) {
      var _this8 = this;
      var hidden = VisibilityState_Enum.HIDDEN, inactive = VisibilityState_Enum.INACTIVE, paused = VisibilityState_Enum.PAUSED, prerender = VisibilityState_Enum.PRERENDER, visible = VisibilityState_Enum.VISIBLE;
      var doWork = function doWork2() {
        var viewportSize = _this8.viewport_.getSize();
        if (viewportSize.height > 0 && viewportSize.width > 0) {
          if (_this8.hasMutateWork_()) {
            _this8.mutateWork_();
          }
          _this8.discoverWork_();
          var delay = _this8.work_();
          if (_this8.hasMutateWork_()) {
            delay = Math.min(delay, MUTATE_DEFER_DELAY_);
          }
          if (_this8.visible_) {
            if (_this8.schedulePass(delay)) {
              dev().fine(TAG_6, "next pass:", delay);
            } else {
              dev().fine(TAG_6, "pass already scheduled");
            }
          } else {
            dev().fine(TAG_6, "document is not visible: no scheduling");
          }
          _this8.firstPassDone_.resolve();
        }
      };
      var noop = function noop2() {
      };
      var pause = function pause2() {
        _this8.resources_.forEach(function(r) {
          return r.pause();
        });
      };
      var unload = function unload2() {
        _this8.resources_.forEach(function(r) {
          r.unload();
          _this8.cleanupTasks_(r);
        });
        _this8.unselectText_();
      };
      var resume = function resume2() {
        _this8.resources_.forEach(function(r) {
          return r.resume();
        });
        doWork();
      };
      vsm.addTransition(prerender, prerender, doWork);
      vsm.addTransition(prerender, visible, doWork);
      vsm.addTransition(prerender, hidden, doWork);
      vsm.addTransition(prerender, inactive, doWork);
      vsm.addTransition(prerender, paused, doWork);
      vsm.addTransition(visible, visible, doWork);
      vsm.addTransition(visible, hidden, doWork);
      vsm.addTransition(visible, inactive, unload);
      vsm.addTransition(visible, paused, pause);
      vsm.addTransition(hidden, visible, doWork);
      vsm.addTransition(hidden, hidden, doWork);
      vsm.addTransition(hidden, inactive, unload);
      vsm.addTransition(hidden, paused, pause);
      vsm.addTransition(inactive, visible, resume);
      vsm.addTransition(inactive, hidden, resume);
      vsm.addTransition(inactive, inactive, noop);
      vsm.addTransition(inactive, paused, doWork);
      vsm.addTransition(paused, visible, resume);
      vsm.addTransition(paused, hidden, doWork);
      vsm.addTransition(paused, inactive, unload);
      vsm.addTransition(paused, paused, noop);
    };
    _proto.unselectText_ = function unselectText_() {
      try {
        this.win.getSelection().removeAllRanges();
      } catch (e) {
      }
    };
    _proto.cleanupTasks_ = function cleanupTasks_(resource, opt_removePending) {
      if (resource.getState() == ResourceState_Enum.NOT_LAID_OUT || resource.getState() == ResourceState_Enum.READY_FOR_LAYOUT) {
        this.queue_.purge(function(task) {
          return task.resource == resource;
        });
        this.exec_.purge(function(task) {
          return task.resource == resource;
        });
        remove(this.requestsChangeSize_, function(request) {
          return request.resource === resource;
        });
      }
      if (resource.getState() == ResourceState_Enum.NOT_BUILT && opt_removePending && this.pendingBuildResources_) {
        var pendingIndex = this.pendingBuildResources_.indexOf(resource);
        if (pendingIndex != -1) {
          this.pendingBuildResources_.splice(pendingIndex, 1);
        }
      }
    };
    _proto.scrolled_ = function scrolled_(event) {
      var target = event.target;
      if (target.nodeType !== Node.ELEMENT_NODE) {
        return;
      }
      if (target === this.viewport_.getScrollingElement()) {
        return;
      }
      var scrolled = dev().assertElement(target);
      if (!this.elementsThatScrolled_.includes(scrolled)) {
        this.elementsThatScrolled_.push(scrolled);
        this.schedulePass(FOUR_FRAME_DELAY_2);
      }
    };
    return ResourcesImpl2;
  }();
  function installResourcesServiceForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, "resources", ResourcesImpl);
  }

  // src/service/standard-actions-impl.js
  function isShowable(element) {
    return element.hasAttribute("hidden");
  }
  function getAutofocusElementForShowAction(element) {
    if (element.hasAttribute("autofocus")) {
      return element;
    }
    return element.querySelector("[autofocus]");
  }
  var TAG12 = "STANDARD-ACTIONS";
  var AMP_CSS_RE = /^i-amphtml-/;
  var StandardActions = /* @__PURE__ */ function() {
    function StandardActions2(ampdoc2) {
      this.ampdoc = ampdoc2;
      var context = ampdoc2.getHeadNode();
      this.mutator_ = Services.mutatorForDoc(ampdoc2);
      this.viewport_ = Services.viewportForDoc(ampdoc2);
      this.installActions_(Services.actionServiceForDoc(context));
    }
    var _proto = StandardActions2.prototype;
    _proto.installActions_ = function installActions_(actionService) {
      actionService.addGlobalTarget("AMP", this.handleAmpTarget_.bind(this));
      actionService.addGlobalMethodHandler("hide", this.handleHide_.bind(this));
      actionService.addGlobalMethodHandler("show", this.handleShow_.bind(this));
      actionService.addGlobalMethodHandler("toggleVisibility", this.handleToggle_.bind(this));
      actionService.addGlobalMethodHandler("scrollTo", this.handleScrollTo_.bind(this));
      actionService.addGlobalMethodHandler("focus", this.handleFocus_.bind(this));
      actionService.addGlobalMethodHandler("toggleClass", this.handleToggleClass_.bind(this));
      actionService.addGlobalMethodHandler("toggleChecked", this.handleToggleChecked_.bind(this));
    };
    _proto.handleAmpTarget_ = function handleAmpTarget_(invocation) {
      if (!invocation.satisfiesTrust(ActionTrust_Enum.DEFAULT)) {
        return null;
      }
      var args = invocation.args, method = invocation.method, node = invocation.node;
      var win = getWin(node);
      switch (method) {
        case "pushState":
        case "setState":
          var element = node.nodeType === Node.DOCUMENT_NODE ? node.documentElement : dev().assertElement(node);
          return Services.bindForDocOrNull(element).then(function(bind) {
            userAssert(bind, "AMP-BIND is not installed.");
            return bind.invoke(invocation);
          });
        case "navigateTo":
          return this.handleNavigateTo_(invocation);
        case "closeOrNavigateTo":
          return this.handleCloseOrNavigateTo_(invocation);
        case "scrollTo":
          userAssert(args["id"], "AMP.scrollTo must provide element ID");
          invocation.node = dev().assertElement(getAmpdoc(node).getElementById(args["id"]), "scrollTo element ID must exist on page");
          return this.handleScrollTo_(invocation);
        case "goBack":
          Services.historyForDoc(this.ampdoc).goBack(!!(args && args["navigate"] === true));
          return null;
        case "print":
          win.print();
          return null;
        case "optoutOfCid":
          return Services.cidForDoc(this.ampdoc).then(function(cid) {
            return cid.optOut();
          }).catch(function(reason) {
            dev().error(TAG12, "Failed to opt out of CID", reason);
          });
      }
      throw user().createError("Unknown AMP action ", method);
    };
    _proto.handleNavigateTo_ = function handleNavigateTo_(invocation) {
      var _this = this;
      var args = invocation.args, caller = invocation.caller, method = invocation.method, node = invocation.node;
      var win = getWin(node);
      var permission = resolvedPromise();
      if (caller.tagName.startsWith("AMP-")) {
        var ampElement = caller;
        permission = ampElement.getImpl().then(function(impl) {
          if (typeof impl.throwIfCannotNavigate == "function") {
            impl.throwIfCannotNavigate();
          }
        });
      }
      return permission.then(function() {
        Services.navigationForDoc(_this.ampdoc).navigateTo(win, args["url"], "AMP." + method, {
          target: args["target"],
          opener: args["opener"]
        });
      }, function(e) {
        user().error(TAG12, e);
      });
    };
    _proto.handleCloseOrNavigateTo_ = function handleCloseOrNavigateTo_(invocation) {
      var node = invocation.node;
      var win = getWin(node);
      var hasParent = win.parent != win;
      var canBeClosed = win.opener && this.ampdoc.isSingleDoc() && !hasParent;
      var wasClosed = false;
      if (canBeClosed) {
        win.close();
        wasClosed = win.closed;
      }
      if (!wasClosed) {
        return this.handleNavigateTo_(invocation);
      }
      return resolvedPromise();
    };
    _proto.handleScrollTo_ = function handleScrollTo_(invocation) {
      var node = dev().assertElement(invocation.node);
      var args = invocation.args;
      var posOrUndef = args && args["position"];
      var durationOrUndef = args && args["duration"];
      if (posOrUndef && !["top", "bottom", "center"].includes(posOrUndef)) {
        posOrUndef = void 0;
      }
      if (!isFiniteNumber(durationOrUndef)) {
        durationOrUndef = void 0;
      }
      return this.viewport_.animateScrollIntoView(node, posOrUndef, durationOrUndef);
    };
    _proto.handleFocus_ = function handleFocus_(invocation) {
      var node = dev().assertElement(invocation.node);
      tryFocus(node);
      return null;
    };
    _proto.handleHide_ = function handleHide_(invocation) {
      var target = dev().assertElement(invocation.node);
      if (target.classList.contains("i-amphtml-element")) {
        var ampElement = target;
        this.mutator_.mutateElement(ampElement, function() {
          return ampElement.collapse();
        }, true);
      } else {
        this.mutator_.mutateElement(target, function() {
          return toggle(target, false);
        });
      }
      return null;
    };
    _proto.handleShow_ = function handleShow_(invocation) {
      var _this2 = this;
      var node = invocation.node;
      var target = dev().assertElement(node);
      var ownerWindow = getWin(target);
      if (target.classList.contains(getLayoutClass(Layout_Enum.NODISPLAY))) {
        user().warn(TAG12, "Elements with layout=nodisplay cannot be dynamically shown.", target);
        return null;
      }
      this.mutator_.measureElement(function() {
        if (computedStyle(ownerWindow, target).display == "none" && !isShowable(target)) {
          user().warn(TAG12, 'Elements can only be dynamically shown when they have the "hidden" attribute set or when they were dynamically hidden.', target);
        }
      });
      var autofocusElOrNull = getAutofocusElementForShowAction(target);
      if (autofocusElOrNull && Services.platformFor(ownerWindow).isIos()) {
        this.handleShowSync_(target, autofocusElOrNull);
        this.mutator_.mutateElement(target, function() {
        });
      } else {
        this.mutator_.mutateElement(target, function() {
          _this2.handleShowSync_(target, autofocusElOrNull);
        });
      }
      return null;
    };
    _proto.handleShowSync_ = function handleShowSync_(target, autofocusElOrNull) {
      if (target.classList.contains("i-amphtml-element")) {
        var ampElement = target;
        ampElement.expand();
      } else {
        toggle(target, true);
      }
      if (autofocusElOrNull) {
        tryFocus(autofocusElOrNull);
      }
    };
    _proto.handleToggle_ = function handleToggle_(invocation) {
      if (isShowable(dev().assertElement(invocation.node))) {
        return this.handleShow_(invocation);
      }
      return this.handleHide_(invocation);
    };
    _proto.handleToggleClass_ = function handleToggleClass_(invocation) {
      var target = dev().assertElement(invocation.node);
      var args = invocation.args;
      var className = user().assertString(args["class"], "Argument 'class' must be a string.");
      if (AMP_CSS_RE.test(className)) {
        return null;
      }
      this.mutator_.mutateElement(target, function() {
        if (args["force"] !== void 0) {
          var shouldForce = user().assertBoolean(args["force"], "Optional argument 'force' must be a boolean.");
          target.classList.toggle(className, shouldForce);
        } else {
          target.classList.toggle(className);
        }
      });
      return null;
    };
    _proto.handleToggleChecked_ = function handleToggleChecked_(invocation) {
      var target = dev().assertElement(invocation.node);
      var args = invocation.args;
      this.mutator_.mutateElement(target, function() {
        if (args["force"] !== void 0) {
          var shouldForce = user().assertBoolean(args["force"], "Optional argument 'force' must be a boolean.");
          target.checked = shouldForce;
        } else {
          if (target.checked === true) {
            target.checked = false;
          } else {
            target.checked = true;
          }
        }
      });
      return null;
    };
    return StandardActions2;
  }();
  function installStandardActionsForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, "standard-actions", StandardActions, true);
  }

  // src/service/storage-impl.js
  var TAG13 = "Storage";
  var MAX_VALUES_PER_ORIGIN = 8;
  var Storage = /* @__PURE__ */ function() {
    function Storage2(ampdoc2, viewer, binding) {
      this.ampdoc = ampdoc2;
      this.viewer_ = viewer;
      this.binding_ = binding;
      this.isViewerStorage_ = binding instanceof ViewerStorageBinding;
      this.origin_ = getSourceOrigin(this.ampdoc.win.location);
      this.storePromise_ = null;
    }
    var _proto = Storage2.prototype;
    _proto.start_ = function start_() {
      this.listenToBroadcasts_();
      return this;
    };
    _proto.get = function get(name, opt_duration) {
      return this.getStore_().then(function(store2) {
        return store2.get(name, opt_duration);
      });
    };
    _proto.set = function set(name, value, opt_isUpdate) {
      devAssert2(typeof value == "boolean", "Only boolean values accepted");
      return this.setNonBoolean(name, value, opt_isUpdate);
    };
    _proto.setNonBoolean = function setNonBoolean(name, value, opt_isUpdate) {
      return this.saveStore_(function(store2) {
        return store2.set(name, value, opt_isUpdate);
      });
    };
    _proto.remove = function remove2(name) {
      return this.saveStore_(function(store2) {
        return store2.remove(name);
      });
    };
    _proto.isViewerStorage = function isViewerStorage() {
      return this.isViewerStorage_;
    };
    _proto.getStore_ = function getStore_() {
      if (!this.storePromise_) {
        this.storePromise_ = this.binding_.loadBlob(this.origin_).then(function(blob) {
          return blob ? parseJson(atob(blob)) : {};
        }).catch(function(reason) {
          dev().expectedError(TAG13, "Failed to load store: ", reason);
          return {};
        }).then(function(obj) {
          return new Store(obj);
        });
      }
      return this.storePromise_;
    };
    _proto.saveStore_ = function saveStore_(mutator) {
      var _this = this;
      return this.getStore_().then(function(store2) {
        mutator(store2);
        var blob = btoa(JSON.stringify(store2.obj));
        return _this.binding_.saveBlob(_this.origin_, blob);
      }).then(this.broadcastReset_.bind(this));
    };
    _proto.listenToBroadcasts_ = function listenToBroadcasts_() {
      var _this2 = this;
      this.viewer_.onBroadcast(function(message) {
        if (message["type"] == "amp-storage-reset" && message["origin"] == _this2.origin_) {
          dev().fine(TAG13, "Received reset message");
          _this2.storePromise_ = null;
        }
      });
    };
    _proto.broadcastReset_ = function broadcastReset_() {
      dev().fine(TAG13, "Broadcasted reset message");
      this.viewer_.broadcast({
        "type": "amp-storage-reset",
        "origin": this.origin_
      });
    };
    return Storage2;
  }();
  var Store = /* @__PURE__ */ function() {
    function Store2(obj, opt_maxValues) {
      this.obj = recreateNonProtoObject(obj);
      this.maxValues_ = opt_maxValues || MAX_VALUES_PER_ORIGIN;
      this.values_ = this.obj["vv"] || Object.create(null);
      if (!this.obj["vv"]) {
        this.obj["vv"] = this.values_;
      }
    }
    var _proto2 = Store2.prototype;
    _proto2.get = function get(name, opt_duration) {
      var item = this.values_[name];
      var timestamp = item ? item["t"] : void 0;
      var isNotExpired = opt_duration && timestamp != void 0 ? timestamp + opt_duration > Date.now() : true;
      var value = item && isNotExpired ? item["v"] : void 0;
      return value;
    };
    _proto2.set = function set(name, value, opt_isUpdate) {
      devAssert2(name != "__proto__" && name != "prototype", "Name is not allowed: %s", name);
      if (this.values_[name] !== void 0) {
        var item = this.values_[name];
        var timestamp = Date.now();
        if (opt_isUpdate) {
          timestamp = item["t"];
        }
        item["v"] = value;
        item["t"] = timestamp;
      } else {
        this.values_[name] = dict({
          "v": value,
          "t": Date.now()
        });
      }
      var keys = Object.keys(this.values_);
      if (keys.length > this.maxValues_) {
        var minTime = Infinity;
        var minKey = null;
        for (var i = 0; i < keys.length; i++) {
          var _item = this.values_[keys[i]];
          if (_item["t"] < minTime) {
            minKey = keys[i];
            minTime = _item["t"];
          }
        }
        if (minKey) {
          delete this.values_[minKey];
        }
      }
    };
    _proto2.remove = function remove2(name) {
      delete this.values_[name];
    };
    return Store2;
  }();
  var LocalStorageBinding = /* @__PURE__ */ function() {
    function LocalStorageBinding2(win) {
      this.win = win;
      this.isLocalStorageSupported_ = this.checkIsLocalStorageSupported_();
      if (!this.isLocalStorageSupported_) {
        var error = new Error("localStorage not supported.");
        dev().expectedError(TAG13, error);
      }
    }
    var _proto4 = LocalStorageBinding2.prototype;
    _proto4.checkIsLocalStorageSupported_ = function checkIsLocalStorageSupported_() {
      try {
        if (!("localStorage" in this.win)) {
          return false;
        }
        this.win.localStorage.getItem("test");
        return true;
      } catch (e) {
        return false;
      }
    };
    _proto4.getKey_ = function getKey_(origin) {
      return "amp-store:" + origin;
    };
    _proto4.loadBlob = function loadBlob(origin) {
      var _this3 = this;
      return new Promise(function(resolve) {
        if (!_this3.isLocalStorageSupported_) {
          resolve(null);
          return;
        }
        resolve(_this3.win.localStorage.getItem(_this3.getKey_(origin)));
      });
    };
    _proto4.saveBlob = function saveBlob(origin, blob) {
      var _this4 = this;
      return new Promise(function(resolve) {
        if (!_this4.isLocalStorageSupported_) {
          resolve();
          return;
        }
        _this4.win.localStorage.setItem(_this4.getKey_(origin), blob);
        resolve();
      });
    };
    return LocalStorageBinding2;
  }();
  var ViewerStorageBinding = /* @__PURE__ */ function() {
    function ViewerStorageBinding2(viewer) {
      this.viewer_ = viewer;
    }
    var _proto5 = ViewerStorageBinding2.prototype;
    _proto5.loadBlob = function loadBlob(origin) {
      return this.viewer_.sendMessageAwaitResponse("loadStore", dict({
        "origin": origin
      })).then(function(response) {
        return response["blob"];
      });
    };
    _proto5.saveBlob = function saveBlob(origin, blob) {
      return this.viewer_.sendMessageAwaitResponse("saveStore", dict({
        "origin": origin,
        "blob": blob
      })).catch(function(reason) {
        throw dev().createExpectedError(TAG13, "Failed to save store: ", reason);
      });
    };
    return ViewerStorageBinding2;
  }();
  function installStorageServiceForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, "storage", function() {
      var viewer = Services.viewerForDoc(ampdoc2);
      var overrideStorage = parseInt(viewer.getParam("storage"), 10);
      var binding = overrideStorage ? new ViewerStorageBinding(viewer) : new LocalStorageBinding(ampdoc2.win);
      return new Storage(ampdoc2, viewer, binding).start_();
    }, true);
  }

  // src/service/template-impl.js
  var PROP_ = "__AMP_IMPL_";
  var PROP_PROMISE_ = "__AMP_WAIT_";
  var EMPTY_FUNC = function EMPTY_FUNC2() {
  };
  var Templates = /* @__PURE__ */ function() {
    function Templates2(ampdoc2) {
      this.ampdoc_ = ampdoc2;
      this.templateClassMap_ = {};
      this.templateClassResolvers_ = {};
    }
    var _proto = Templates2.prototype;
    _proto.whenReady = function whenReady(templateElement) {
      return this.getImplementation_(templateElement).then(EMPTY_FUNC);
    };
    _proto.setHtmlForTemplate = function setHtmlForTemplate(templateElement, html2) {
      var _this = this;
      return this.getImplementation_(templateElement).then(function(impl) {
        return _this.setHtml_(impl, html2);
      });
    };
    _proto.renderTemplate = function renderTemplate(templateElement, data) {
      var _this2 = this;
      return this.getImplementation_(templateElement).then(function(impl) {
        return _this2.render_(impl, data);
      });
    };
    _proto.renderTemplateAsString = function renderTemplateAsString(templateElement, data) {
      return this.getImplementation_(templateElement).then(function(impl) {
        return impl.renderAsString(data);
      });
    };
    _proto.renderTemplateArray = function renderTemplateArray(templateElement, array) {
      var _this3 = this;
      if (array.length == 0) {
        return Promise.resolve([]);
      }
      return this.getImplementation_(templateElement).then(function(impl) {
        return array.map(function(item) {
          return _this3.render_(impl, item);
        });
      });
    };
    _proto.findAndRenderTemplate = function findAndRenderTemplate(parent, data, opt_querySelector) {
      return this.renderTemplate(this.findTemplate(parent, opt_querySelector), data);
    };
    _proto.findAndSetHtmlForTemplate = function findAndSetHtmlForTemplate(parent, html2, opt_querySelector) {
      return this.setHtmlForTemplate(this.findTemplate(parent, opt_querySelector), html2);
    };
    _proto.findAndRenderTemplateArray = function findAndRenderTemplateArray(parent, array, opt_querySelector) {
      return this.renderTemplateArray(this.findTemplate(parent, opt_querySelector), array);
    };
    _proto.hasTemplate = function hasTemplate(parent, opt_querySelector) {
      return !!this.maybeFindTemplate(parent, opt_querySelector);
    };
    _proto.findTemplate = function findTemplate(parent, opt_querySelector) {
      var templateElement = this.maybeFindTemplate(parent, opt_querySelector);
      userAssert(templateElement, "Template not found for %s", parent);
      var templateTagName = templateElement.tagName;
      userAssert(templateTagName == "TEMPLATE" || templateTagName == "SCRIPT" && templateElement.getAttribute("type") === "text/plain", 'Template must be defined in a <template> or <script type="text/plain"> tag');
      return templateElement;
    };
    _proto.maybeFindTemplate = function maybeFindTemplate(parent, opt_querySelector) {
      var templateId = parent.getAttribute("template");
      if (templateId) {
        var rootNode = rootNodeFor(parent);
        return rootNode.getElementById(templateId);
      } else if (opt_querySelector) {
        return scopedQuerySelector(parent, opt_querySelector);
      } else {
        return parent.querySelector('template[type], script[type="text/plain"]');
      }
    };
    _proto.getImplementation_ = function getImplementation_(element) {
      var _this4 = this;
      var impl = element[PROP_];
      if (impl) {
        return Promise.resolve(impl);
      }
      var type = "";
      var tagName = element.tagName;
      if (tagName == "TEMPLATE") {
        type = element.getAttribute("type");
      } else if (tagName == "SCRIPT") {
        type = element.getAttribute("template");
      }
      userAssert(type, "Type must be specified: %s", element);
      var promise = element[PROP_PROMISE_];
      if (promise) {
        return promise;
      }
      promise = this.waitForTemplateClass_(element, type).then(function(templateClass) {
        var Constr = templateClass;
        var impl2 = element[PROP_] = new Constr(element, _this4.ampdoc_.win);
        delete element[PROP_PROMISE_];
        return impl2;
      });
      element[PROP_PROMISE_] = promise;
      return promise;
    };
    _proto.waitForTemplateClass_ = function waitForTemplateClass_(element, type) {
      if (this.templateClassMap_[type]) {
        return this.templateClassMap_[type];
      }
      var deferred = new Deferred();
      var promise = deferred.promise, resolve = deferred.resolve;
      this.templateClassMap_[type] = promise;
      this.templateClassResolvers_[type] = resolve;
      return promise;
    };
    _proto.registerTemplate_ = function registerTemplate_(type, templateClass) {
      if (!this.templateClassMap_[type]) {
        this.templateClassMap_[type] = Promise.resolve(templateClass);
      } else {
        var resolver = this.templateClassResolvers_[type];
        userAssert(resolver, "Duplicate template type: %s", type);
        delete this.templateClassResolvers_[type];
        resolver(templateClass);
      }
    };
    _proto.render_ = function render_(impl, data) {
      return impl.render(data);
    };
    _proto.setHtml_ = function setHtml_(impl, html2) {
      return impl.setHtml(html2);
    };
    return Templates2;
  }();
  function installTemplatesServiceForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, "templates", Templates);
  }

  // src/service/timer-impl.js
  var TAG14 = "timer";
  var timersForTesting;
  var Timer = /* @__PURE__ */ function() {
    function Timer2(win) {
      this.win = win;
      this.resolved_ = this.win.Promise.resolve();
      this.taskCount_ = 0;
      this.canceled_ = {};
      this.startTime_ = Date.now();
    }
    var _proto = Timer2.prototype;
    _proto.timeSinceStart = function timeSinceStart() {
      return Date.now() - this.startTime_;
    };
    _proto.delay = function delay(callback, opt_delay) {
      var _this = this;
      if (!opt_delay) {
        var id = "p" + this.taskCount_++;
        this.resolved_.then(function() {
          if (_this.canceled_[id]) {
            delete _this.canceled_[id];
            return;
          }
          callback();
        }).catch(reportError);
        return id;
      }
      var wrapped = function wrapped2() {
        try {
          callback();
        } catch (e) {
          reportError(e);
          throw e;
        }
      };
      var index = this.win.setTimeout(wrapped, opt_delay);
      if (getMode().test) {
        if (!timersForTesting) {
          timersForTesting = [];
        }
        timersForTesting.push(index);
      }
      return index;
    };
    _proto.cancel = function cancel(timeoutId) {
      if (typeof timeoutId == "string") {
        this.canceled_[timeoutId] = true;
        return;
      }
      this.win.clearTimeout(timeoutId);
    };
    _proto.promise = function promise(opt_delay) {
      var _this2 = this;
      return new this.win.Promise(function(resolve) {
        var timerKey = _this2.delay(resolve, opt_delay);
        if (timerKey == -1) {
          throw new Error("Failed to schedule timer.");
        }
      });
    };
    _proto.timeoutPromise = function timeoutPromise(delay, opt_racePromise, opt_message) {
      var _this3 = this;
      var timerKey;
      var delayPromise = new this.win.Promise(function(_resolve, reject) {
        timerKey = _this3.delay(function() {
          reject(user().createError(opt_message || "timeout"));
        }, delay);
        if (timerKey == -1) {
          throw new Error("Failed to schedule timer.");
        }
      });
      if (!opt_racePromise) {
        return delayPromise;
      }
      var cancel = function cancel2() {
        _this3.cancel(timerKey);
      };
      opt_racePromise.then(cancel, cancel);
      return this.win.Promise.race([delayPromise, opt_racePromise]);
    };
    _proto.poll = function poll(delay, predicate) {
      var _this4 = this;
      return new this.win.Promise(function(resolve) {
        var interval = _this4.win.setInterval(function() {
          if (predicate()) {
            _this4.win.clearInterval(interval);
            resolve();
          }
        }, delay);
      });
    };
    return Timer2;
  }();
  function installTimerInEmbedWindow(embedWin) {
    registerServiceBuilderInEmbedWin(embedWin, TAG14, Timer);
  }

  // src/service/url-impl.js
  var SERVICE = "url";
  var Url = /* @__PURE__ */ function() {
    function Url2(ampdoc2) {
      var root = ampdoc2.getRootNode();
      var doc = root.ownerDocument || root;
      this.anchor_ = doc.createElement("a");
      this.cache_ = isEsm() ? null : new LruCache(100);
    }
    var _proto = Url2.prototype;
    _proto.parse = function parse(url, opt_nocache) {
      return parseUrlWithA(this.anchor_, url, isEsm() || opt_nocache ? null : this.cache_);
    };
    _proto.parse_ = function parse_(url) {
      if (typeof url !== "string") {
        return url;
      }
      return this.parse(url);
    };
    _proto.isProtocolValid = function isProtocolValid2(url) {
      return isProtocolValid(url);
    };
    _proto.getSourceOrigin = function getSourceOrigin2(url) {
      return getSourceOrigin(this.parse_(url));
    };
    _proto.getSourceUrl = function getSourceUrl2(url) {
      return getSourceUrl(this.parse_(url));
    };
    _proto.resolveRelativeUrl = function resolveRelativeUrl2(relativeUrlString, baseUrl) {
      return resolveRelativeUrl(relativeUrlString, this.parse_(baseUrl));
    };
    _proto.assertHttpsUrl = function assertHttpsUrl2(urlString, elementContext, sourceName) {
      if (sourceName === void 0) {
        sourceName = "source";
      }
      return assertHttpsUrl(urlString, elementContext, sourceName);
    };
    _proto.assertAbsoluteHttpOrHttpsUrl = function assertAbsoluteHttpOrHttpsUrl2(urlString) {
      return assertAbsoluteHttpOrHttpsUrl(urlString);
    };
    _proto.isProxyOrigin = function isProxyOrigin2(url) {
      return isProxyOrigin(this.parse_(url));
    };
    _proto.isSecure = function isSecure(url) {
      return isSecureUrlDeprecated(this.parse_(url));
    };
    _proto.getWinOrigin = function getWinOrigin2(win) {
      return win.origin || this.parse_(win.location.href).origin;
    };
    _proto.getCdnUrlOnOrigin = function getCdnUrlOnOrigin(resourceUrl) {
      if (isProxyOrigin(resourceUrl)) {
        return resourceUrl;
      }
      var _this$parse_ = this.parse_(resourceUrl), hash = _this$parse_.hash, host = _this$parse_.host, pathname = _this$parse_.pathname, search = _this$parse_.search;
      var encodedHost = encodeURIComponent(host);
      return urls.cdn + "/c/" + encodedHost + pathname + search + hash;
    };
    return Url2;
  }();
  function installUrlForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, SERVICE, Url, true);
  }

  // src/service/viewer-impl.js
  var TAG_7 = "Viewer";
  var RECEIVED_MESSAGE_QUEUE_MAX_LENGTH = 50;
  var VIEWER_ORIGIN_TIMEOUT_ = 1e3;
  var TRIM_ORIGIN_PATTERN_ = /^(https?:\/\/)((www[0-9]*|web|ftp|wap|home|mobile|amp|m)\.)+/i;
  var ViewerImpl = /* @__PURE__ */ function() {
    function ViewerImpl2(ampdoc2) {
      var _this = this;
      this.ampdoc = ampdoc2;
      this.win = ampdoc2.win;
      this.isIframed_ = isIframed(this.win);
      this.isRuntimeOn_ = true;
      this.overtakeHistory_ = false;
      this.messageObservables_ = map();
      this.messageResponders_ = map();
      this.runtimeOnObservable_ = new Observable();
      this.broadcastObservable_ = new Observable();
      this.messageDeliverer_ = null;
      this.messagingOrigin_ = null;
      this.messageQueue_ = [];
      this.receivedMessageQueue_ = map();
      this.hashParams_ = map();
      if (ampdoc2.isSingleDoc()) {
        Object.assign(this.hashParams_, parseQueryString(this.win.location.hash));
      }
      this.isRuntimeOn_ = !parseInt(ampdoc2.getParam("off"), 10);
      dev().fine(TAG_7, "- runtimeOn:", this.isRuntimeOn_);
      this.overtakeHistory_ = !!(parseInt(ampdoc2.getParam("history"), 10) || this.overtakeHistory_);
      dev().fine(TAG_7, "- history:", this.overtakeHistory_);
      dev().fine(TAG_7, "- visibilityState:", this.ampdoc.getVisibilityState());
      this.isCctEmbedded_ = null;
      this.isProxyOrigin_ = isProxyOrigin(parseUrlDeprecated(this.ampdoc.win.location.href));
      var messagingDeferred = new Deferred();
      this.messagingReadyResolver_ = messagingDeferred.resolve;
      this.messagingReadyPromise_ = this.initMessagingChannel_(messagingDeferred.promise);
      this.isTrustedViewer_ = null;
      this.viewerOrigin_ = null;
      var referrerParam = ampdoc2.getParam("referrer");
      this.unconfirmedReferrerUrl_ = this.isEmbedded() && referrerParam != null && this.isTrustedAncestorOrigins_() !== false ? referrerParam : this.win.document.referrer;
      this.referrerUrl_ = new Promise(function(resolve) {
        if (_this.isEmbedded() && ampdoc2.getParam("referrer") != null) {
          _this.isTrustedViewer().then(function(isTrusted) {
            if (isTrusted) {
              resolve(ampdoc2.getParam("referrer"));
            } else {
              resolve(_this.win.document.referrer);
              if (_this.unconfirmedReferrerUrl_ != _this.win.document.referrer) {
                dev().expectedError(TAG_7, "Untrusted viewer referrer override: " + _this.unconfirmedReferrerUrl_ + " at " + _this.messagingOrigin_);
                _this.unconfirmedReferrerUrl_ = _this.win.document.referrer;
              }
            }
          });
        } else {
          resolve(_this.win.document.referrer);
        }
      });
      this.resolvedViewerUrl_ = removeFragment(this.win.location.href || "");
      this.viewerUrl_ = new Promise(function(resolve) {
        var viewerUrlOverride = ampdoc2.getParam("viewerUrl");
        if (_this.isEmbedded() && viewerUrlOverride) {
          _this.isTrustedViewer().then(function(isTrusted) {
            if (isTrusted) {
              _this.resolvedViewerUrl_ = devAssert2(viewerUrlOverride);
            } else {
              dev().expectedError(TAG_7, "Untrusted viewer url override: " + viewerUrlOverride + " at " + _this.messagingOrigin_);
            }
            resolve(_this.resolvedViewerUrl_);
          });
        } else {
          resolve(_this.resolvedViewerUrl_);
        }
      });
      if (this.hashParams_["click"]) {
        var newUrl = removeFragment(this.win.location.href);
        if (newUrl != this.win.location.href && this.win.history.replaceState) {
          if (!this.win.location["originalHash"]) {
            this.win.location["originalHash"] = this.win.location.hash;
          }
          this.win.history.replaceState({}, "", newUrl);
          delete this.hashParams_["click"];
          dev().fine(TAG_7, "replace fragment:" + this.win.location.href);
        }
      }
      this.ampdoc.whenFirstVisible().then(function() {
        _this.maybeUpdateFragmentForCct();
      });
      if (this.ampdoc.isSingleDoc()) {
        this.visibleOnUserAction_();
      }
    }
    var _proto = ViewerImpl2.prototype;
    _proto.initMessagingChannel_ = function initMessagingChannel_(messagingPromise) {
      var isEmbedded = !!(this.isIframed_ && !this.win.__AMP_TEST_IFRAME && (this.ampdoc.getParam("origin") || this.ampdoc.getParam("visibilityState") || this.win.location.search.indexOf("amp_js_v") != -1) || this.isWebviewEmbedded() || this.isCctEmbedded() || !this.ampdoc.isSingleDoc());
      if (!isEmbedded) {
        return null;
      }
      var timeoutMessage = "initMessagingChannel timeout";
      return Services.timerFor(this.win).timeoutPromise(2e4, messagingPromise, timeoutMessage).catch(function(reason) {
        var error = getChannelError(reason);
        if (error && endsWith(error.message, timeoutMessage)) {
          error = dev().createExpectedError(error);
        }
        reportError(error);
        throw error;
      });
    };
    _proto.getAmpDoc = function getAmpDoc() {
      return this.ampdoc;
    };
    _proto.getParam = function getParam(name) {
      return this.ampdoc.getParam(name);
    };
    _proto.hasCapability = function hasCapability(name) {
      var capabilities = this.ampdoc.getParam("cap");
      if (!capabilities) {
        return false;
      }
      return capabilities.split(",").indexOf(name) != -1;
    };
    _proto.isEmbedded = function isEmbedded() {
      return !!this.messagingReadyPromise_;
    };
    _proto.isWebviewEmbedded = function isWebviewEmbedded() {
      return !this.isIframed_ && this.ampdoc.getParam("webview") == "1";
    };
    _proto.isCctEmbedded = function isCctEmbedded() {
      if (this.isCctEmbedded_ != null) {
        return this.isCctEmbedded_;
      }
      this.isCctEmbedded_ = false;
      if (!this.isIframed_) {
        var queryParams = parseQueryString(this.win.location.search);
        this.isCctEmbedded_ = queryParams["amp_gsa"] === "1" && (queryParams["amp_js_v"] || "").startsWith("a");
      }
      return this.isCctEmbedded_;
    };
    _proto.isProxyOrigin = function isProxyOrigin2() {
      return this.isProxyOrigin_;
    };
    _proto.maybeUpdateFragmentForCct = function maybeUpdateFragmentForCct() {
      if (!this.isCctEmbedded()) {
        return;
      }
      if (!this.win.history.replaceState) {
        return;
      }
      var sourceOrigin = getSourceOrigin(this.win.location.href);
      var _Services$documentInf = Services.documentInfoForDoc(this.ampdoc), canonicalUrl = _Services$documentInf.canonicalUrl;
      var canonicalSourceOrigin = getSourceOrigin(canonicalUrl);
      if (this.hasRoughlySameOrigin_(sourceOrigin, canonicalSourceOrigin)) {
        this.hashParams_["ampshare"] = canonicalUrl;
        this.win.history.replaceState({}, "", "#" + serializeQueryString(this.hashParams_));
      }
    };
    _proto.hasRoughlySameOrigin_ = function hasRoughlySameOrigin_(first, second) {
      var trimOrigin = function trimOrigin2(origin) {
        if (origin.split(".").length > 2) {
          return origin.replace(TRIM_ORIGIN_PATTERN_, "$1");
        }
        return origin;
      };
      return trimOrigin(first) == trimOrigin(second);
    };
    _proto.isRuntimeOn = function isRuntimeOn() {
      return this.isRuntimeOn_;
    };
    _proto.toggleRuntime = function toggleRuntime() {
      this.isRuntimeOn_ = !this.isRuntimeOn_;
      dev().fine(TAG_7, "Runtime state:", this.isRuntimeOn_);
      this.runtimeOnObservable_.fire(this.isRuntimeOn_);
    };
    _proto.onRuntimeState = function onRuntimeState(handler) {
      return this.runtimeOnObservable_.add(handler);
    };
    _proto.isOvertakeHistory = function isOvertakeHistory() {
      return this.overtakeHistory_;
    };
    _proto.getVisibilityState = function getVisibilityState() {
      return this.ampdoc.getVisibilityState();
    };
    _proto.isVisible = function isVisible() {
      return this.ampdoc.isVisible();
    };
    _proto.hasBeenVisible = function hasBeenVisible() {
      return this.ampdoc.hasBeenVisible();
    };
    _proto.whenFirstVisible = function whenFirstVisible() {
      return this.ampdoc.whenFirstVisible();
    };
    _proto.whenNextVisible = function whenNextVisible() {
      return this.ampdoc.whenNextVisible();
    };
    _proto.getFirstVisibleTime = function getFirstVisibleTime() {
      return this.ampdoc.getFirstVisibleTime();
    };
    _proto.getLastVisibleTime = function getLastVisibleTime() {
      return this.ampdoc.getLastVisibleTime();
    };
    _proto.onVisibilityChanged = function onVisibilityChanged(handler) {
      return this.ampdoc.onVisibilityChanged(handler);
    };
    _proto.setVisibilityState_ = function setVisibilityState_(state) {
      if (!state) {
        return;
      }
      devAssert2(isEnumValue(VisibilityState_Enum, state));
      if (state === VisibilityState_Enum.HIDDEN) {
        state = this.ampdoc.getLastVisibleTime() != null ? VisibilityState_Enum.INACTIVE : VisibilityState_Enum.PRERENDER;
      }
      this.ampdoc.overrideVisibilityState(state);
      dev().fine(TAG_7, "visibilitychange event:", this.ampdoc.getVisibilityState());
    };
    _proto.getResolvedViewerUrl = function getResolvedViewerUrl() {
      return this.resolvedViewerUrl_;
    };
    _proto.getViewerUrl = function getViewerUrl() {
      return this.viewerUrl_;
    };
    _proto.maybeGetMessagingOrigin = function maybeGetMessagingOrigin() {
      return this.messagingOrigin_;
    };
    _proto.getUnconfirmedReferrerUrl = function getUnconfirmedReferrerUrl() {
      return this.unconfirmedReferrerUrl_;
    };
    _proto.getReferrerUrl = function getReferrerUrl() {
      return this.referrerUrl_;
    };
    _proto.isTrustedViewer = function isTrustedViewer() {
      var _this2 = this;
      if (!this.isTrustedViewer_) {
        var isTrustedAncestorOrigins = this.isTrustedAncestorOrigins_();
        this.isTrustedViewer_ = isTrustedAncestorOrigins !== void 0 ? Promise.resolve(isTrustedAncestorOrigins) : this.messagingReadyPromise_.then(function(origin) {
          return origin ? _this2.isTrustedViewerOrigin_(origin) : false;
        });
      }
      return this.isTrustedViewer_;
    };
    _proto.isTrustedAncestorOrigins_ = function isTrustedAncestorOrigins_() {
      if (!this.isEmbedded()) {
        return false;
      } else if (this.win.location.ancestorOrigins && !this.isWebviewEmbedded() && !this.isCctEmbedded()) {
        return this.win.location.ancestorOrigins.length > 0 && this.isTrustedViewerOrigin_(this.win.location.ancestorOrigins[0]);
      }
    };
    _proto.getViewerOrigin = function getViewerOrigin() {
      if (!this.viewerOrigin_) {
        var origin;
        if (!this.isEmbedded()) {
          origin = "";
        } else if (this.win.location.ancestorOrigins && this.win.location.ancestorOrigins.length > 0) {
          origin = this.win.location.ancestorOrigins[0];
        }
        this.viewerOrigin_ = origin !== void 0 ? Promise.resolve(origin) : Services.timerFor(this.win).timeoutPromise(VIEWER_ORIGIN_TIMEOUT_, this.messagingReadyPromise_).catch(function() {
          return "";
        });
      }
      return this.viewerOrigin_;
    };
    _proto.isTrustedViewerOrigin_ = function isTrustedViewerOrigin_(urlString) {
      var url = parseUrlDeprecated(urlString);
      var protocol = url.protocol;
      if (protocol == "x-thread:") {
        return true;
      }
      if (protocol != "https:") {
        return false;
      }
      return urls.trustedViewerHosts.some(function(th) {
        return th.test(url.hostname);
      });
    };
    _proto.onMessage = function onMessage(eventType, handler) {
      var observable = this.messageObservables_[eventType];
      if (!observable) {
        observable = new Observable();
        this.messageObservables_[eventType] = observable;
      }
      var unlistenFn = observable.add(handler);
      if (this.receivedMessageQueue_[eventType]) {
        this.receivedMessageQueue_[eventType].forEach(function(message) {
          observable.fire(message.data);
          message.deferred.resolve();
        });
        this.receivedMessageQueue_[eventType] = [];
      }
      return unlistenFn;
    };
    _proto.onMessageRespond = function onMessageRespond(eventType, responder) {
      var _this3 = this;
      this.messageResponders_[eventType] = responder;
      if (this.receivedMessageQueue_[eventType]) {
        this.receivedMessageQueue_[eventType].forEach(function(message) {
          message.deferred.resolve(responder(message.data));
        });
        this.receivedMessageQueue_[eventType] = [];
      }
      return function() {
        if (_this3.messageResponders_[eventType] === responder) {
          delete _this3.messageResponders_[eventType];
        }
      };
    };
    _proto.receiveMessage = function receiveMessage(eventType, data, unusedAwaitResponse) {
      if (eventType == "visibilitychange") {
        this.setVisibilityState_(data["state"]);
        return resolvedPromise();
      }
      if (eventType == "broadcast") {
        this.broadcastObservable_.fire(data);
        return resolvedPromise();
      }
      var observable = this.messageObservables_[eventType];
      var responder = this.messageResponders_[eventType];
      if (!observable && !responder) {
        this.receivedMessageQueue_[eventType] = this.receivedMessageQueue_[eventType] || [];
        if (this.receivedMessageQueue_[eventType].length >= RECEIVED_MESSAGE_QUEUE_MAX_LENGTH) {
          return void 0;
        }
        var deferred = new Deferred();
        this.receivedMessageQueue_[eventType].push({
          data: data,
          deferred: deferred
        });
        return deferred.promise;
      }
      if (observable) {
        observable.fire(data);
      }
      if (responder) {
        return responder(data);
      } else if (observable) {
        return resolvedPromise();
      }
    };
    _proto.setMessageDeliverer = function setMessageDeliverer(deliverer, origin) {
      var _this4 = this;
      if (this.messageDeliverer_) {
        throw new Error("message channel can only be initialized once");
      }
      if (origin == null) {
        throw new Error("message channel must have an origin");
      }
      dev().fine(TAG_7, "message channel established with origin: ", origin);
      this.messageDeliverer_ = deliverer;
      this.messagingOrigin_ = origin;
      this.messagingReadyResolver_(origin);
      if (this.messageQueue_.length > 0) {
        var queue = this.messageQueue_.slice(0);
        this.messageQueue_ = [];
        queue.forEach(function(message) {
          var responsePromise = _this4.messageDeliverer_(message.eventType, message.data, message.awaitResponse);
          if (message.awaitResponse) {
            message.responseResolver(responsePromise);
          }
        });
      }
    };
    _proto.maybeGetMessageDeliverer = function maybeGetMessageDeliverer() {
      return this.messageDeliverer_;
    };
    _proto.sendMessage = function sendMessage(eventType, data, cancelUnsent) {
      if (cancelUnsent === void 0) {
        cancelUnsent = false;
      }
      this.sendMessageInternal_(eventType, data, cancelUnsent, false);
    };
    _proto.sendMessageAwaitResponse = function sendMessageAwaitResponse(eventType, data, cancelUnsent) {
      if (cancelUnsent === void 0) {
        cancelUnsent = false;
      }
      return this.sendMessageInternal_(eventType, data, cancelUnsent, true);
    };
    _proto.sendMessageInternal_ = function sendMessageInternal_(eventType, data, cancelUnsent, awaitResponse) {
      var _this5 = this;
      if (this.messageDeliverer_) {
        return tryResolve(function() {
          return _this5.messageDeliverer_(eventType, data, awaitResponse);
        });
      }
      if (!this.messagingReadyPromise_) {
        if (awaitResponse) {
          return Promise.reject(getChannelError());
        } else {
          return resolvedPromise();
        }
      }
      if (!cancelUnsent) {
        return this.messagingReadyPromise_.then(function() {
          return _this5.messageDeliverer_(eventType, data, awaitResponse);
        });
      }
      var found = findIndex(this.messageQueue_, function(m) {
        return m.eventType == eventType;
      });
      var message;
      if (found != -1) {
        message = this.messageQueue_.splice(found, 1)[0];
        message.data = data;
        message.awaitResponse = message.awaitResponse || awaitResponse;
      } else {
        var deferred = new Deferred();
        var responsePromise = deferred.promise, responseResolver = deferred.resolve;
        message = {
          eventType: eventType,
          data: data,
          awaitResponse: awaitResponse,
          responsePromise: responsePromise,
          responseResolver: responseResolver
        };
      }
      this.messageQueue_.push(message);
      return message.responsePromise;
    };
    _proto.broadcast = function broadcast(message) {
      if (!this.messagingReadyPromise_) {
        return Promise.resolve(false);
      }
      return this.sendMessageInternal_("broadcast", message, false, false).then(function() {
        return true;
      }, function() {
        return false;
      });
    };
    _proto.onBroadcast = function onBroadcast(handler) {
      return this.broadcastObservable_.add(handler);
    };
    _proto.whenMessagingReady = function whenMessagingReady() {
      return this.messagingReadyPromise_;
    };
    _proto.replaceUrl = function replaceUrl(newUrl) {
      if (!newUrl || !this.ampdoc.isSingleDoc() || !this.win.history.replaceState) {
        return;
      }
      try {
        var url = parseUrlDeprecated(this.win.location.href);
        var replaceUrl2 = parseUrlDeprecated(removeFragment(newUrl) + this.win.location.hash);
        if (url.origin == replaceUrl2.origin && getSourceOrigin(url) == getSourceOrigin(replaceUrl2)) {
          this.win.history.replaceState({}, "", replaceUrl2.href);
          this.win.location["originalHref"] = url.href;
          dev().fine(TAG_7, "replace url:" + replaceUrl2.href);
        }
      } catch (e) {
        dev().error(TAG_7, "replaceUrl failed", e);
      }
    };
    _proto.visibleOnUserAction_ = function visibleOnUserAction_() {
      var _this6 = this;
      if (this.ampdoc.getVisibilityState() == VisibilityState_Enum.VISIBLE) {
        return;
      }
      var unlisten = [];
      var doUnlisten = function doUnlisten2() {
        return unlisten.forEach(function(fn) {
          return fn();
        });
      };
      var makeVisible = function makeVisible2() {
        _this6.setVisibilityState_(VisibilityState_Enum.VISIBLE);
        doUnlisten();
        dev().expectedError(TAG_7, "Received user action in non-visible doc");
      };
      var options = {
        capture: true,
        passive: true
      };
      unlisten.push(listen(this.win, "keydown", makeVisible, options), listen(this.win, "touchstart", makeVisible, options), listen(this.win, "mousedown", makeVisible, options));
      this.whenFirstVisible().then(doUnlisten);
    };
    return ViewerImpl2;
  }();
  function getChannelError(opt_reason) {
    var channelError;
    if (opt_reason instanceof Error) {
      opt_reason = duplicateErrorIfNecessary(opt_reason);
      opt_reason.message = "No messaging channel: " + opt_reason.message;
      channelError = opt_reason;
    } else {
      channelError = new Error("No messaging channel: " + opt_reason);
    }
    channelError.message = stripUserError(channelError.message);
    return channelError;
  }
  function installViewerServiceForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, "viewer", ViewerImpl, true);
  }

  // src/core/dom/transition.js
  function numeric(start, end) {
    return function(time) {
      return start + (end - start) * time;
    };
  }

  // src/core/data-structures/curve.js
  function bezierCurve(x1, y1, x2, y2) {
    return function(xVal) {
      return Bezier.solveYValueFromXValue(xVal, 0, 0, x1, y1, x2, y2, 1, 1);
    };
  }
  var Bezier = /* @__PURE__ */ function() {
    function Bezier2() {
    }
    Bezier2.solveYValueFromXValue = function solveYValueFromXValue(xVal, x0, y0, x1, y1, x2, y2, x3, y3) {
      return Bezier2.getPointY_(Bezier2.solvePositionFromXValue_(xVal, x0, x1, x2, x3), y0, y1, y2, y3);
    };
    Bezier2.solvePositionFromXValue_ = function solvePositionFromXValue_(xVal, x0, x1, x2, x3) {
      var epsilon = 1e-6;
      var t = (xVal - x0) / (x3 - x0);
      if (t <= 0) {
        return 0;
      } else if (t >= 1) {
        return 1;
      }
      var tMin = 0;
      var tMax = 1;
      var value = 0;
      for (var i = 0; i < 8; i++) {
        value = Bezier2.getPointX_(t, x0, x1, x2, x3);
        var derivative = (Bezier2.getPointX_(t + epsilon, x0, x1, x2, x3) - value) / epsilon;
        if (Math.abs(value - xVal) < epsilon) {
          return t;
        } else if (Math.abs(derivative) < epsilon) {
          break;
        } else {
          if (value < xVal) {
            tMin = t;
          } else {
            tMax = t;
          }
          t -= (value - xVal) / derivative;
        }
      }
      for (var _i = 0; Math.abs(value - xVal) > epsilon && _i < 8; _i++) {
        if (value < xVal) {
          tMin = t;
          t = (t + tMax) / 2;
        } else {
          tMax = t;
          t = (t + tMin) / 2;
        }
        value = Bezier2.getPointX_(t, x0, x1, x2, x3);
      }
      return t;
    };
    Bezier2.getPointX_ = function getPointX_(t, x0, x1, x2, x3) {
      if (t == 0) {
        return x0;
      } else if (t == 1) {
        return x3;
      }
      var ix0 = Bezier2.lerp_(x0, x1, t);
      var ix1 = Bezier2.lerp_(x1, x2, t);
      var ix2 = Bezier2.lerp_(x2, x3, t);
      ix0 = Bezier2.lerp_(ix0, ix1, t);
      ix1 = Bezier2.lerp_(ix1, ix2, t);
      return Bezier2.lerp_(ix0, ix1, t);
    };
    Bezier2.getPointY_ = function getPointY_(t, y0, y1, y2, y3) {
      if (t == 0) {
        return y0;
      } else if (t == 1) {
        return y3;
      }
      var iy0 = Bezier2.lerp_(y0, y1, t);
      var iy1 = Bezier2.lerp_(y1, y2, t);
      var iy2 = Bezier2.lerp_(y2, y3, t);
      iy0 = Bezier2.lerp_(iy0, iy1, t);
      iy1 = Bezier2.lerp_(iy1, iy2, t);
      return Bezier2.lerp_(iy0, iy1, t);
    };
    Bezier2.lerp_ = function lerp_(a, b, x) {
      return a + x * (b - a);
    };
    return Bezier2;
  }();
  var Curves_Enum = {
    LINEAR: function LINEAR(xVal) {
      return xVal;
    },
    EASE: function EASE(xVal) {
      return Bezier.solveYValueFromXValue(xVal, 0, 0, 0.25, 0.1, 0.25, 1, 1, 1);
    },
    EASE_IN: function EASE_IN(xVal) {
      return Bezier.solveYValueFromXValue(xVal, 0, 0, 0.42, 0, 1, 1, 1, 1);
    },
    EASE_OUT: function EASE_OUT(xVal) {
      return Bezier.solveYValueFromXValue(xVal, 0, 0, 0, 0, 0.58, 1, 1, 1);
    },
    EASE_IN_OUT: function EASE_IN_OUT(xVal) {
      return Bezier.solveYValueFromXValue(xVal, 0, 0, 0.42, 0, 0.58, 1, 1, 1);
    }
  };
  var NAME_MAP = {
    "linear": Curves_Enum.LINEAR,
    "ease": Curves_Enum.EASE,
    "ease-in": Curves_Enum.EASE_IN,
    "ease-out": Curves_Enum.EASE_OUT,
    "ease-in-out": Curves_Enum.EASE_IN_OUT
  };
  function getCurve(curve) {
    if (!curve) {
      return null;
    }
    if (isString(curve)) {
      curve = curve;
      if (curve.indexOf("cubic-bezier") != -1) {
        var match = curve.match(/cubic-bezier\((.+)\)/);
        if (match) {
          var values = match[1].split(",").map(parseFloat);
          if (values.length == 4) {
            for (var i = 0; i < 4; i++) {
              if (isNaN(values[i])) {
                return null;
              }
            }
            return bezierCurve(values[0], values[1], values[2], values[3]);
          }
        }
        return null;
      }
      return NAME_MAP[curve];
    }
    return curve;
  }

  // src/utils/animation.js
  var TAG_8 = "Animation";
  var NOOP_CALLBACK = function NOOP_CALLBACK2() {
  };
  var Animation = /* @__PURE__ */ function() {
    Animation2.animate = function animate(contextNode, transition, duration, opt_curve) {
      return new Animation2(contextNode).setCurve(opt_curve).add(0, transition, 1).start(duration);
    };
    function Animation2(contextNode, opt_vsync) {
      this.contextNode_ = contextNode;
      this.vsync_ = opt_vsync || Services.vsyncFor(self);
      this.curve_ = null;
      this.segments_ = [];
    }
    var _proto = Animation2.prototype;
    _proto.setCurve = function setCurve(curve) {
      if (curve) {
        this.curve_ = getCurve(curve);
      }
      return this;
    };
    _proto.add = function add(delay, transition, duration, opt_curve) {
      this.segments_.push({
        delay: delay,
        func: transition,
        duration: duration,
        curve: getCurve(opt_curve)
      });
      return this;
    };
    _proto.start = function start(duration) {
      var player = new AnimationPlayer(this.vsync_, this.contextNode_, this.segments_, this.curve_, duration);
      return player;
    };
    return Animation2;
  }();
  var AnimationPlayer = /* @__PURE__ */ function() {
    function AnimationPlayer2(vsync, contextNode, segments, defaultCurve, duration) {
      this.vsync_ = vsync;
      this.contextNode_ = contextNode;
      this.segments_ = [];
      for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        this.segments_.push({
          delay: segment.delay,
          func: segment.func,
          duration: segment.duration,
          curve: segment.curve || defaultCurve,
          started: false,
          completed: false
        });
      }
      this.duration_ = duration;
      this.startTime_ = Date.now();
      this.running_ = true;
      this.state_ = {};
      var deferred = new Deferred();
      this.promise_ = deferred.promise;
      this.resolve_ = deferred.resolve;
      this.reject_ = deferred.reject;
      this.task_ = this.vsync_.createAnimTask(this.contextNode_, {
        mutate: this.stepMutate_.bind(this)
      });
      if (this.vsync_.canAnimate(this.contextNode_)) {
        this.task_(this.state_);
      } else {
        dev().warn(TAG_8, "cannot animate");
        this.complete_(false, 0);
      }
    }
    var _proto2 = AnimationPlayer2.prototype;
    _proto2.then = function then(opt_resolve, opt_reject) {
      if (!opt_resolve && !opt_reject) {
        return this.promise_;
      }
      return this.promise_.then(opt_resolve, opt_reject);
    };
    _proto2.thenAlways = function thenAlways(opt_callback) {
      var callback = opt_callback || NOOP_CALLBACK;
      return this.then(callback, callback);
    };
    _proto2.halt = function halt(opt_dir) {
      this.complete_(false, opt_dir || 0);
    };
    _proto2.complete_ = function complete_(success, dir) {
      if (!this.running_) {
        return;
      }
      this.running_ = false;
      if (dir != 0) {
        if (this.segments_.length > 1) {
          this.segments_.sort(function(s1, s2) {
            return s1.delay + s1.duration - (s2.delay + s2.duration);
          });
        }
        try {
          if (dir > 0) {
            for (var i = 0; i < this.segments_.length; i++) {
              this.segments_[i].func(1, true);
            }
          } else {
            for (var _i = this.segments_.length - 1; _i >= 0; _i--) {
              this.segments_[_i].func(0, false);
            }
          }
        } catch (e) {
          dev().error(TAG_8, "completion failed: " + e, e);
          success = false;
        }
      }
      if (success) {
        this.resolve_();
      } else {
        this.reject_();
      }
    };
    _proto2.stepMutate_ = function stepMutate_(unusedState) {
      if (!this.running_) {
        return;
      }
      var currentTime = Date.now();
      var normLinearTime = Math.min((currentTime - this.startTime_) / this.duration_, 1);
      for (var i = 0; i < this.segments_.length; i++) {
        var segment = this.segments_[i];
        if (!segment.started && normLinearTime >= segment.delay) {
          segment.started = true;
        }
      }
      for (var _i2 = 0; _i2 < this.segments_.length; _i2++) {
        var _segment = this.segments_[_i2];
        if (!_segment.started || _segment.completed) {
          continue;
        }
        this.mutateSegment_(_segment, normLinearTime);
      }
      if (normLinearTime == 1) {
        this.complete_(true, 0);
      } else {
        if (this.vsync_.canAnimate(this.contextNode_)) {
          this.task_(this.state_);
        } else {
          dev().warn(TAG_8, "cancel animation");
          this.complete_(false, 0);
        }
      }
    };
    _proto2.mutateSegment_ = function mutateSegment_(segment, totalLinearTime) {
      var normLinearTime;
      var normTime;
      if (segment.duration > 0) {
        normLinearTime = Math.min((totalLinearTime - segment.delay) / segment.duration, 1);
        normTime = normLinearTime;
        if (segment.curve && normTime != 1) {
          try {
            normTime = segment.curve(normLinearTime);
          } catch (e) {
            dev().error(TAG_8, "step curve failed: " + e, e);
            this.complete_(false, 0);
            return;
          }
        }
      } else {
        normLinearTime = 1;
        normTime = 1;
      }
      if (normLinearTime == 1) {
        segment.completed = true;
      }
      try {
        segment.func(normTime, segment.completed);
      } catch (e) {
        dev().error(TAG_8, "step mutate failed: " + e, e);
        this.complete_(false, 0);
        return;
      }
    };
    return AnimationPlayer2;
  }();

  // src/service/viewport/viewport-binding-def.js
  function marginBottomOfLastChild(win, element) {
    var style;
    for (var n = element.lastElementChild; n; n = n.previousElementSibling) {
      var r = n.getBoundingClientRect();
      if (r.height > 0) {
        var s = computedStyle(win, n);
        if (s.position == "static" || s.position == "relative") {
          style = s;
          break;
        }
      }
    }
    return style ? parseInt(style.marginBottom, 10) : 0;
  }

  // src/service/viewport/viewport-binding-ios-embed-wrapper.js
  var TAG_9 = "Viewport";
  var ViewportBindingIosEmbedWrapper_ = /* @__PURE__ */ function() {
    function ViewportBindingIosEmbedWrapper_2(win) {
      var _this = this;
      this.win = win;
      this.vsync_ = Services.vsyncFor(win);
      var doc = this.win.document;
      var documentElement = doc.documentElement;
      var topClasses = documentElement.className;
      documentElement.classList.add("i-amphtml-ios-embed");
      var wrapper = doc.createElement("html");
      this.wrapper_ = wrapper;
      wrapper.id = "i-amphtml-wrapper";
      wrapper.className = topClasses;
      this.scrollObservable_ = new Observable();
      this.resizeObservable_ = new Observable();
      this.boundScrollEventListener_ = this.onScrolled_.bind(this);
      this.boundResizeEventListener_ = function() {
        return _this.resizeObservable_.fire();
      };
      this.paddingTop_ = 0;
      this.setupDone_ = false;
      waitForBodyOpen(doc, this.setup_.bind(this));
      whenDocumentReady(doc).then(function() {
        documentElement.classList.add("i-amphtml-ios-overscroll");
      });
      dev().fine(TAG_9, "initialized ios-embed-wrapper viewport");
    }
    var _proto = ViewportBindingIosEmbedWrapper_2.prototype;
    _proto.ensureReadyForElements = function ensureReadyForElements() {
      this.setup_();
    };
    _proto.setup_ = function setup_() {
      if (this.setupDone_) {
        return;
      }
      this.setupDone_ = true;
      var doc = this.win.document;
      var body = dev().assertElement(doc.body, "body is not available");
      doc.documentElement.appendChild(this.wrapper_);
      this.wrapper_.appendChild(body);
      Object.defineProperty(doc, "body", {
        get: function get() {
          return body;
        }
      });
      this.onScrolled_();
    };
    _proto.connect = function connect() {
      this.win.addEventListener("resize", this.boundResizeEventListener_);
      this.wrapper_.addEventListener("scroll", this.boundScrollEventListener_);
    };
    _proto.disconnect = function disconnect() {
      this.win.removeEventListener("resize", this.boundResizeEventListener_);
      this.wrapper_.removeEventListener("scroll", this.boundScrollEventListener_);
    };
    _proto.getBorderTop = function getBorderTop() {
      return 1;
    };
    _proto.requiresFixedLayerTransfer = function requiresFixedLayerTransfer() {
      if (!isExperimentOn(this.win, "ios-fixed-no-transfer")) {
        return true;
      }
      var iosVersion = parseFloat(Services.platformFor(this.win).getIosVersionString());
      return iosVersion < 12.2;
    };
    _proto.overrideGlobalScrollTo = function overrideGlobalScrollTo() {
      return true;
    };
    _proto.supportsPositionFixed = function supportsPositionFixed() {
      return true;
    };
    _proto.onScroll = function onScroll(callback) {
      this.scrollObservable_.add(callback);
    };
    _proto.onResize = function onResize(callback) {
      this.resizeObservable_.add(callback);
    };
    _proto.updatePaddingTop = function updatePaddingTop(paddingTop) {
      this.paddingTop_ = paddingTop;
      setImportantStyles(this.wrapper_, {
        "padding-top": px(paddingTop)
      });
    };
    _proto.hideViewerHeader = function hideViewerHeader(transient, unusedLastPaddingTop) {
      if (!transient) {
        this.updatePaddingTop(0);
      }
    };
    _proto.showViewerHeader = function showViewerHeader(transient, paddingTop) {
      if (!transient) {
        this.updatePaddingTop(paddingTop);
      }
    };
    _proto.disableScroll = function disableScroll() {
      this.wrapper_.classList.add("i-amphtml-scroll-disabled");
    };
    _proto.resetScroll = function resetScroll() {
      this.wrapper_.classList.remove("i-amphtml-scroll-disabled");
    };
    _proto.updateLightboxMode = function updateLightboxMode(unusedLightboxMode) {
      return resolvedPromise();
    };
    _proto.getSize = function getSize() {
      return {
        width: this.win.innerWidth,
        height: this.win.innerHeight
      };
    };
    _proto.getScrollTop = function getScrollTop() {
      return this.wrapper_.scrollTop;
    };
    _proto.getScrollLeft = function getScrollLeft() {
      return 0;
    };
    _proto.getScrollWidth = function getScrollWidth() {
      return this.wrapper_.scrollWidth;
    };
    _proto.getScrollHeight = function getScrollHeight() {
      return this.wrapper_.scrollHeight;
    };
    _proto.getContentHeight = function getContentHeight() {
      var content = this.win.document.body;
      var _content$getBoundingC = content.getBoundingClientRect(), height = _content$getBoundingC.height;
      var childMarginBottom = marginBottomOfLastChild(this.win, content);
      var style = computedStyle(this.win, content);
      return parseInt(style.marginTop, 10) + this.paddingTop_ + height + childMarginBottom + parseInt(style.marginBottom, 10);
    };
    _proto.contentHeightChanged = function contentHeightChanged() {
    };
    _proto.getLayoutRect = function getLayoutRect(el, opt_scrollLeft, opt_scrollTop) {
      var b = el.getBoundingClientRect();
      var scrollTop = opt_scrollTop != void 0 ? opt_scrollTop : this.getScrollTop();
      var scrollLeft = opt_scrollLeft != void 0 ? opt_scrollLeft : this.getScrollLeft();
      return layoutRectLtwh(Math.round(b.left + scrollLeft), Math.round(b.top + scrollTop), Math.round(b.width), Math.round(b.height));
    };
    _proto.getRootClientRectAsync = function getRootClientRectAsync() {
      return Promise.resolve(null);
    };
    _proto.setScrollTop = function setScrollTop(scrollTop) {
      this.wrapper_.scrollTop = scrollTop || 1;
    };
    _proto.onScrolled_ = function onScrolled_(opt_event) {
      if (this.wrapper_.scrollTop == 0) {
        this.wrapper_.scrollTop = 1;
        if (opt_event) {
          opt_event.preventDefault();
        }
      }
      if (opt_event) {
        this.scrollObservable_.fire();
      }
    };
    _proto.getScrollingElement = function getScrollingElement() {
      return this.wrapper_;
    };
    _proto.getScrollingElementScrollsLikeViewport = function getScrollingElementScrollsLikeViewport() {
      return false;
    };
    return ViewportBindingIosEmbedWrapper_2;
  }();

  // src/service/viewport/viewport-binding-natural.js
  var TAG_10 = "Viewport";
  var ViewportBindingNatural_ = /* @__PURE__ */ function() {
    function ViewportBindingNatural_2(ampdoc2) {
      var _this = this;
      this.ampdoc = ampdoc2;
      this.win = ampdoc2.win;
      this.platform_ = Services.platformFor(this.win);
      this.scrollObservable_ = new Observable();
      this.resizeObservable_ = new Observable();
      this.boundScrollEventListener_ = this.handleScrollEvent_.bind(this);
      this.boundResizeEventListener_ = function() {
        return _this.resizeObservable_.fire();
      };
      dev().fine(TAG_10, "initialized natural viewport");
    }
    var _proto = ViewportBindingNatural_2.prototype;
    _proto.handleScrollEvent_ = function handleScrollEvent_() {
      this.scrollObservable_.fire();
    };
    _proto.connect = function connect() {
      this.win.addEventListener("scroll", this.boundScrollEventListener_);
      this.win.addEventListener("resize", this.boundResizeEventListener_);
    };
    _proto.disconnect = function disconnect() {
      this.win.removeEventListener("scroll", this.boundScrollEventListener_);
      this.win.removeEventListener("resize", this.boundResizeEventListener_);
    };
    _proto.ensureReadyForElements = function ensureReadyForElements() {
    };
    _proto.getBorderTop = function getBorderTop() {
      return 0;
    };
    _proto.requiresFixedLayerTransfer = function requiresFixedLayerTransfer() {
      return false;
    };
    _proto.overrideGlobalScrollTo = function overrideGlobalScrollTo() {
      return false;
    };
    _proto.supportsPositionFixed = function supportsPositionFixed() {
      return true;
    };
    _proto.onScroll = function onScroll(callback) {
      this.scrollObservable_.add(callback);
    };
    _proto.onResize = function onResize(callback) {
      this.resizeObservable_.add(callback);
    };
    _proto.updatePaddingTop = function updatePaddingTop(paddingTop) {
      setImportantStyles(this.win.document.documentElement, {
        "padding-top": px(paddingTop)
      });
    };
    _proto.hideViewerHeader = function hideViewerHeader(transient, unusedLastPaddingTop) {
      if (!transient) {
        this.updatePaddingTop(0);
      }
    };
    _proto.showViewerHeader = function showViewerHeader(transient, paddingTop) {
      if (!transient) {
        this.updatePaddingTop(paddingTop);
      }
    };
    _proto.disableScroll = function disableScroll() {
      this.win.document.documentElement.classList.add("i-amphtml-scroll-disabled");
    };
    _proto.resetScroll = function resetScroll() {
      this.win.document.documentElement.classList.remove("i-amphtml-scroll-disabled");
    };
    _proto.updateLightboxMode = function updateLightboxMode(unusedLightboxMode) {
      return resolvedPromise();
    };
    _proto.getSize = function getSize() {
      var winWidth = this.win.innerWidth;
      var winHeight = this.win.innerHeight;
      if (winWidth && winHeight) {
        return {
          width: winWidth,
          height: winHeight
        };
      }
      var el = this.win.document.documentElement;
      return {
        width: el.clientWidth,
        height: el.clientHeight
      };
    };
    _proto.getScrollTop = function getScrollTop() {
      var pageScrollTop = this.getScrollingElement().scrollTop || this.win.pageYOffset;
      var _this$ampdoc$getRootN = this.ampdoc.getRootNode(), host = _this$ampdoc$getRootN.host;
      return host ? pageScrollTop - host.offsetTop : pageScrollTop;
    };
    _proto.getScrollLeft = function getScrollLeft() {
      return 0;
    };
    _proto.getScrollWidth = function getScrollWidth() {
      return this.getScrollingElement().scrollWidth;
    };
    _proto.getScrollHeight = function getScrollHeight() {
      return this.getScrollingElement().scrollHeight;
    };
    _proto.getContentHeight = function getContentHeight() {
      var content = this.getScrollingElement();
      var rect = content.getBoundingClientRect();
      var top = rect.top + this.getScrollTop();
      var childMarginBottom = Services.platformFor(this.win).isSafari() ? marginBottomOfLastChild(this.win, content) : 0;
      var style = computedStyle(this.win, content);
      return top + parseInt(style.marginTop, 10) + rect.height + childMarginBottom + parseInt(style.marginBottom, 10);
    };
    _proto.contentHeightChanged = function contentHeightChanged() {
    };
    _proto.getLayoutRect = function getLayoutRect(el, opt_scrollLeft, opt_scrollTop) {
      var b = el.getBoundingClientRect();
      var scrollTop = opt_scrollTop != void 0 ? opt_scrollTop : this.getScrollTop();
      var scrollLeft = opt_scrollLeft != void 0 ? opt_scrollLeft : this.getScrollLeft();
      return layoutRectLtwh(Math.round(b.left + scrollLeft), Math.round(b.top + scrollTop), Math.round(b.width), Math.round(b.height));
    };
    _proto.getRootClientRectAsync = function getRootClientRectAsync() {
      return Promise.resolve(null);
    };
    _proto.setScrollTop = function setScrollTop(scrollTop) {
      this.getScrollingElement().scrollTop = scrollTop;
    };
    _proto.getScrollingElement = function getScrollingElement() {
      var doc = this.win.document;
      if (doc.scrollingElement) {
        return doc.scrollingElement;
      }
      if (doc.body && this.platform_.isWebKit()) {
        return doc.body;
      }
      return doc.documentElement;
    };
    _proto.getScrollingElementScrollsLikeViewport = function getScrollingElementScrollsLikeViewport() {
      return true;
    };
    return ViewportBindingNatural_2;
  }();

  // src/service/viewport/viewport-impl.js
  var TAG_11 = "Viewport";
  function getComputedStylePropertyPixels(win, element, property) {
    var value = parseInt(computedStyle(win, element)[property], 10);
    return isNaN(value) ? 0 : value;
  }
  function getScrollPadding(win, element, property) {
    var effectiveElement = element === win.document.body ? win.document.documentElement : element;
    return getComputedStylePropertyPixels(win, effectiveElement, property);
  }
  function getScrollPaddingTop(win, element) {
    return getScrollPadding(win, element, "scrollPaddingTop");
  }
  function getScrollPaddingBottom(win, element) {
    return getScrollPadding(win, element, "scrollPaddingBottom");
  }
  var ViewportImpl = /* @__PURE__ */ function() {
    function ViewportImpl2(ampdoc2, binding, viewer) {
      var _this = this;
      var win = ampdoc2.win;
      this.ampdoc = ampdoc2;
      this.globalDoc_ = this.ampdoc.win.document;
      this.binding_ = binding;
      this.viewer_ = viewer;
      this.rect_ = null;
      this.size_ = null;
      this.scrollTop_ = null;
      this.scrollAnimationFrameThrottled_ = false;
      this.scrollLeft_ = null;
      this.paddingTop_ = Number(viewer.getParam("paddingTop") || 0);
      this.lastPaddingTop_ = 0;
      this.timer_ = Services.timerFor(win);
      this.vsync_ = Services.vsyncFor(win);
      this.scrollTracking_ = false;
      this.scrollingElement_ = null;
      this.scrollCount_ = 0;
      this.changeObservable_ = new Observable();
      this.scrollObservable_ = new Observable();
      this.resizeObservable_ = new Observable();
      this.viewportMeta_ = void 0;
      this.originalViewportMetaString_ = void 0;
      this.fixedLayer_ = null;
      this.viewer_.onMessage("viewport", this.updateOnViewportEvent_.bind(this));
      this.viewer_.onMessage("scroll", this.viewerSetScrollTop_.bind(this));
      this.viewer_.onMessage("disableScroll", this.disableScrollEventHandler_.bind(this));
      if (this.viewer_.isEmbedded()) {
        this.binding_.updatePaddingTop(this.paddingTop_);
      }
      this.binding_.onScroll(this.scroll_.bind(this));
      this.binding_.onResize(this.resize_.bind(this));
      this.onScroll(this.sendScrollMessage_.bind(this));
      this.visible_ = false;
      this.ampdoc.onVisibilityChanged(this.updateVisibility_.bind(this));
      this.updateVisibility_();
      var globalDocElement = this.globalDoc_.documentElement;
      if (ampdoc2.isSingleDoc()) {
        globalDocElement.classList.add("i-amphtml-singledoc");
      }
      if (viewer.isEmbedded()) {
        globalDocElement.classList.add("i-amphtml-embedded");
      } else {
        globalDocElement.classList.add("i-amphtml-standalone");
      }
      if (isIframed(win)) {
        globalDocElement.classList.add("i-amphtml-iframed");
      }
      if (viewer.getParam("webview") === "1") {
        globalDocElement.classList.add("i-amphtml-webview");
      }
      if (isIframed(win) && "scrollRestoration" in win.history) {
        win.history.scrollRestoration = "manual";
      }
      if (this.binding_.overrideGlobalScrollTo()) {
        try {
          Object.defineProperty(win, "scrollTo", {
            value: function value(x, y) {
              return _this.setScrollTop(y);
            }
          });
          ["pageYOffset", "scrollY"].forEach(function(prop) {
            Object.defineProperty(win, prop, {
              get: function get() {
                return _this.getScrollTop();
              }
            });
          });
        } catch (e) {
        }
      }
      var isIframedIos = Services.platformFor(win).isIos() && isIframed(win);
      if (isIframedIos && this.ampdoc.isSingleDoc()) {
        this.ampdoc.whenReady().then(function() {
          win.scrollTo(-0.1, 0);
        });
      }
    }
    var _proto = ViewportImpl2.prototype;
    _proto.dispose = function dispose() {
      this.binding_.disconnect();
    };
    _proto.ensureReadyForElements = function ensureReadyForElements() {
      this.binding_.ensureReadyForElements();
    };
    _proto.updateVisibility_ = function updateVisibility_() {
      var visible = this.ampdoc.isVisible();
      if (visible != this.visible_) {
        this.visible_ = visible;
        if (visible) {
          this.binding_.connect();
          if (this.size_) {
            this.resize_();
          }
          if (this.scrollTop_) {
            this.scrollTop_ = null;
            this.getScrollTop();
          }
        } else {
          this.binding_.disconnect();
        }
      }
    };
    _proto.getPaddingTop = function getPaddingTop() {
      return this.paddingTop_;
    };
    _proto.getScrollTop = function getScrollTop() {
      if (this.scrollTop_ == null) {
        this.scrollTop_ = this.binding_.getScrollTop();
      }
      return this.scrollTop_;
    };
    _proto.getScrollLeft = function getScrollLeft() {
      if (this.scrollLeft_ == null) {
        this.scrollLeft_ = this.binding_.getScrollLeft();
      }
      return this.scrollLeft_;
    };
    _proto.setScrollTop = function setScrollTop(scrollPos) {
      this.scrollTop_ = null;
      this.binding_.setScrollTop(scrollPos);
    };
    _proto.updatePaddingBottom = function updatePaddingBottom(paddingBottom) {
      this.ampdoc.waitForBodyOpen().then(function(body) {
        setStyle(body, "borderBottom", paddingBottom + "px solid transparent");
      });
    };
    _proto.getSize = function getSize() {
      if (this.size_) {
        return this.size_;
      }
      this.size_ = this.binding_.getSize();
      if (this.size_.width == 0 || this.size_.height == 0) {
        var visibilityState = this.ampdoc.getVisibilityState();
        if (visibilityState == VisibilityState_Enum.PRERENDER || visibilityState == VisibilityState_Enum.VISIBLE) {
          if (Math.random() < 0.01) {
            dev().error(TAG_11, "viewport has zero dimensions");
          }
        }
      }
      return this.size_;
    };
    _proto.getHeight = function getHeight() {
      return this.getSize().height;
    };
    _proto.getWidth = function getWidth() {
      return this.getSize().width;
    };
    _proto.getScrollWidth = function getScrollWidth() {
      return this.binding_.getScrollWidth();
    };
    _proto.getScrollHeight = function getScrollHeight() {
      return this.binding_.getScrollHeight();
    };
    _proto.getContentHeight = function getContentHeight() {
      return this.binding_.getContentHeight();
    };
    _proto.contentHeightChanged = function contentHeightChanged() {
      this.binding_.contentHeightChanged();
    };
    _proto.getRect = function getRect() {
      if (this.rect_ == null) {
        var scrollTop = this.getScrollTop();
        var scrollLeft = this.getScrollLeft();
        var size = this.getSize();
        this.rect_ = layoutRectLtwh(scrollLeft, scrollTop, size.width, size.height);
      }
      return this.rect_;
    };
    _proto.getLayoutRect = function getLayoutRect(el) {
      var scrollLeft = this.getScrollLeft();
      var scrollTop = this.getScrollTop();
      var frameElement = getParentWindowFrameElement(el, this.ampdoc.win);
      if (frameElement) {
        var b = this.binding_.getLayoutRect(el, 0, 0);
        var c = this.binding_.getLayoutRect(frameElement, scrollLeft, scrollTop);
        return layoutRectLtwh(Math.round(b.left + c.left), Math.round(b.top + c.top), Math.round(b.width), Math.round(b.height));
      }
      return this.binding_.getLayoutRect(el, scrollLeft, scrollTop);
    };
    _proto.getClientRectAsync = function getClientRectAsync(el) {
      var local = this.vsync_.measurePromise(function() {
        return el.getBoundingClientRect();
      });
      var root = this.binding_.getRootClientRectAsync();
      var frameElement = getParentWindowFrameElement(el, this.ampdoc.win);
      if (frameElement) {
        root = this.vsync_.measurePromise(function() {
          return frameElement.getBoundingClientRect();
        });
      }
      return Promise.all([local, root]).then(function(values) {
        var l = values[0];
        var r = values[1];
        if (!r) {
          return layoutRectFromDomRect(l);
        }
        return moveLayoutRect(l, r.left, r.top);
      });
    };
    _proto.supportsPositionFixed = function supportsPositionFixed() {
      return this.binding_.supportsPositionFixed();
    };
    _proto.isDeclaredFixed = function isDeclaredFixed(element) {
      if (!this.fixedLayer_) {
        return false;
      }
      return this.fixedLayer_.isDeclaredFixed(element);
    };
    _proto.scrollIntoView = function scrollIntoView(element) {
      var _this2 = this;
      if (false) {
        element.scrollIntoView();
        return resolvedPromise();
      } else {
        return this.getScrollingContainerFor_(element).then(function(parent) {
          return _this2.scrollIntoViewInternal_(element, parent);
        });
      }
    };
    _proto.scrollIntoViewInternal_ = function scrollIntoViewInternal_(element, parent) {
      var _this3 = this;
      var elementTop = this.binding_.getLayoutRect(element).top;
      var scrollPaddingTop = getScrollPaddingTop(this.ampdoc.win, parent);
      var newScrollTopPromise = tryResolve(function() {
        return Math.max(0, elementTop - _this3.paddingTop_ - scrollPaddingTop);
      });
      newScrollTopPromise.then(function(newScrollTop) {
        return _this3.setElementScrollTop_(parent, newScrollTop);
      });
    };
    _proto.animateScrollIntoView = function animateScrollIntoView(element, pos, opt_duration, opt_curve) {
      var _this4 = this;
      if (pos === void 0) {
        pos = "top";
      }
      if (false) {
        return new Promise(function(resolve, opt_) {
          element.scrollIntoView({
            block: SCROLL_POS_TO_BLOCK[pos],
            behavior: "smooth"
          });
          setTimeout(resolve, SMOOTH_SCROLL_DELAY_);
        });
      } else {
        devAssert2(!opt_curve || opt_duration !== void 0, "Curve without duration doesn't make sense.");
        return this.getScrollingContainerFor_(element).then(function(parent) {
          return _this4.animateScrollWithinParent(element, parent, dev().assertString(pos), opt_duration, opt_curve);
        });
      }
    };
    _proto.animateScrollWithinParent = function animateScrollWithinParent(element, parent, pos, opt_duration, opt_curve) {
      var _this5 = this;
      devAssert2(!opt_curve || opt_duration !== void 0, "Curve without duration doesn't make sense.");
      var elementRect = this.binding_.getLayoutRect(element);
      var _ref = this.isScrollingElement_(parent) ? this.getSize() : this.getLayoutRect(parent), parentHeight = _ref.height;
      var win = this.ampdoc.win;
      var scrollPaddingTop = getScrollPaddingTop(win, parent);
      var scrollPaddingBottom = getScrollPaddingBottom(win, parent);
      var offset = -scrollPaddingTop;
      if (pos === "bottom") {
        offset = -parentHeight + scrollPaddingBottom + elementRect.height;
      } else if (pos === "center") {
        var effectiveParentHeight = parentHeight - scrollPaddingTop - scrollPaddingBottom;
        offset = -effectiveParentHeight / 2 + elementRect.height / 2;
      }
      return this.getElementScrollTop_(parent).then(function(curScrollTop) {
        var calculatedScrollTop = elementRect.top - _this5.paddingTop_ + offset;
        var newScrollTop = Math.max(0, calculatedScrollTop);
        if (newScrollTop == curScrollTop) {
          return;
        }
        return _this5.interpolateScrollIntoView_(parent, curScrollTop, newScrollTop, opt_duration, opt_curve);
      });
    };
    _proto.interpolateScrollIntoView_ = function interpolateScrollIntoView_(parent, curScrollTop, newScrollTop, opt_duration, curve) {
      var _this6 = this;
      if (curve === void 0) {
        curve = "ease-in";
      }
      var duration = opt_duration !== void 0 ? dev().assertNumber(opt_duration) : getDefaultScrollAnimationDuration(curScrollTop, newScrollTop);
      var interpolate = numeric(curScrollTop, newScrollTop);
      return Animation.animate(parent, function(position) {
        _this6.setElementScrollTop_(parent, interpolate(position));
      }, duration, curve).thenAlways(function() {
        _this6.setElementScrollTop_(parent, newScrollTop);
      });
    };
    _proto.getScrollingContainerFor_ = function getScrollingContainerFor_(element) {
      var _this7 = this;
      return this.vsync_.measurePromise(function() {
        return closestAncestorElementBySelector(element, ".i-amphtml-scrollable") || _this7.binding_.getScrollingElement();
      });
    };
    _proto.setElementScrollTop_ = function setElementScrollTop_(element, scrollTop) {
      if (this.isScrollingElement_(element)) {
        this.binding_.setScrollTop(scrollTop);
        return;
      }
      this.vsync_.mutate(function() {
        element.scrollTop = scrollTop;
      });
    };
    _proto.getElementScrollTop_ = function getElementScrollTop_(element) {
      var _this8 = this;
      if (this.isScrollingElement_(element)) {
        return tryResolve(function() {
          return _this8.getScrollTop();
        });
      }
      return this.vsync_.measurePromise(function() {
        return element.scrollTop;
      });
    };
    _proto.isScrollingElement_ = function isScrollingElement_(element) {
      return element == this.binding_.getScrollingElement();
    };
    _proto.getScrollingElement = function getScrollingElement() {
      if (this.scrollingElement_) {
        return this.scrollingElement_;
      }
      return this.scrollingElement_ = this.binding_.getScrollingElement();
    };
    _proto.onChanged = function onChanged(handler) {
      return this.changeObservable_.add(handler);
    };
    _proto.onScroll = function onScroll(handler) {
      return this.scrollObservable_.add(handler);
    };
    _proto.onResize = function onResize(handler) {
      return this.resizeObservable_.add(handler);
    };
    _proto.enterLightboxMode = function enterLightboxMode(opt_requestingElement, opt_onComplete) {
      this.viewer_.sendMessage("requestFullOverlay", dict(), true);
      this.enterOverlayMode();
      if (this.fixedLayer_) {
        this.fixedLayer_.enterLightbox(opt_requestingElement, opt_onComplete);
      }
      if (opt_requestingElement) {
        this.maybeEnterFieLightboxMode(dev().assertElement(opt_requestingElement));
      }
      return this.binding_.updateLightboxMode(true);
    };
    _proto.leaveLightboxMode = function leaveLightboxMode(opt_requestingElement) {
      this.viewer_.sendMessage("cancelFullOverlay", dict(), true);
      if (this.fixedLayer_) {
        this.fixedLayer_.leaveLightbox();
      }
      this.leaveOverlayMode();
      if (opt_requestingElement) {
        this.maybeLeaveFieLightboxMode(dev().assertElement(opt_requestingElement));
      }
      return this.binding_.updateLightboxMode(false);
    };
    _proto.isLightboxExperimentOn = function isLightboxExperimentOn() {
      return isExperimentOn(this.ampdoc.win, "amp-lightbox-a4a-proto");
    };
    _proto.maybeEnterFieLightboxMode = function maybeEnterFieLightboxMode(requestingElement) {
      var fieOptional = this.getFriendlyIframeEmbed_(requestingElement);
      if (fieOptional) {
        devAssert2(this.isLightboxExperimentOn(), "Lightbox mode for A4A is only available when 'amp-lightbox-a4a-proto' experiment is on");
        fieOptional.enterFullOverlayMode();
      }
    };
    _proto.maybeLeaveFieLightboxMode = function maybeLeaveFieLightboxMode(requestingElement) {
      var fieOptional = this.getFriendlyIframeEmbed_(requestingElement);
      if (fieOptional) {
        devAssert2(fieOptional).leaveFullOverlayMode();
      }
    };
    _proto.getFriendlyIframeEmbed_ = function getFriendlyIframeEmbed_(element) {
      var iframeOptional = getParentWindowFrameElement(element, this.ampdoc.win);
      return iframeOptional && getFriendlyIframeEmbedOptional(dev().assertElement(iframeOptional));
    };
    _proto.enterOverlayMode = function enterOverlayMode() {
      this.disableTouchZoom();
      this.disableScroll();
    };
    _proto.leaveOverlayMode = function leaveOverlayMode() {
      this.resetScroll();
      this.restoreOriginalTouchZoom();
    };
    _proto.disableScroll = function disableScroll() {
      var _this9 = this;
      var win = this.ampdoc.win;
      var documentElement = win.document.documentElement;
      var requestedMarginRight;
      this.vsync_.measure(function() {
        var existingMargin = computedStyle(win, documentElement).marginRight;
        var scrollbarWidth = getVerticalScrollbarWidth(_this9.ampdoc.win);
        requestedMarginRight = parseInt(existingMargin, 10) + scrollbarWidth;
      });
      this.vsync_.mutate(function() {
        setStyle(documentElement, "margin-right", requestedMarginRight, "px");
        _this9.binding_.disableScroll();
      });
    };
    _proto.resetScroll = function resetScroll() {
      var _this10 = this;
      var win = this.ampdoc.win;
      var documentElement = win.document.documentElement;
      this.vsync_.mutate(function() {
        setStyle(documentElement, "margin-right", "");
        _this10.binding_.resetScroll();
      });
    };
    _proto.resetTouchZoom = function resetTouchZoom() {
      var _this11 = this;
      var windowHeight = this.ampdoc.win.innerHeight;
      var documentHeight = this.globalDoc_.documentElement.clientHeight;
      if (windowHeight && documentHeight && windowHeight === documentHeight) {
        return;
      }
      if (this.disableTouchZoom()) {
        this.timer_.delay(function() {
          _this11.restoreOriginalTouchZoom();
        }, 50);
      }
    };
    _proto.disableTouchZoom = function disableTouchZoom() {
      var viewportMeta = this.getViewportMeta_();
      if (!viewportMeta) {
        return false;
      }
      var newValue = updateViewportMetaString(viewportMeta.content, {
        "maximum-scale": "1",
        "user-scalable": "no"
      });
      return this.setViewportMetaString_(newValue);
    };
    _proto.restoreOriginalTouchZoom = function restoreOriginalTouchZoom() {
      if (this.originalViewportMetaString_ !== void 0) {
        return this.setViewportMetaString_(this.originalViewportMetaString_);
      }
      return false;
    };
    _proto.updateFixedLayer = function updateFixedLayer() {
      if (!this.fixedLayer_) {
        return resolvedPromise();
      }
      return this.fixedLayer_.update();
    };
    _proto.addToFixedLayer = function addToFixedLayer(element, opt_forceTransfer) {
      if (!this.fixedLayer_) {
        return resolvedPromise();
      }
      return this.fixedLayer_.addElement(element, opt_forceTransfer);
    };
    _proto.removeFromFixedLayer = function removeFromFixedLayer(element) {
      if (!this.fixedLayer_) {
        return;
      }
      this.fixedLayer_.removeElement(element);
    };
    _proto.createFixedLayer = function createFixedLayer(constructor) {
      var _this12 = this;
      this.fixedLayer_ = new constructor(this.ampdoc, this.vsync_, this.binding_.getBorderTop(), this.paddingTop_, this.binding_.requiresFixedLayerTransfer());
      this.ampdoc.whenReady().then(function() {
        return _this12.fixedLayer_.setup();
      });
    };
    _proto.setViewportMetaString_ = function setViewportMetaString_(viewportMetaString) {
      var viewportMeta = this.getViewportMeta_();
      if (viewportMeta && viewportMeta.content != viewportMetaString) {
        dev().fine(TAG_11, "changed viewport meta to:", viewportMetaString);
        viewportMeta.content = viewportMetaString;
        return true;
      }
      return false;
    };
    _proto.getViewportMeta_ = function getViewportMeta_() {
      if (isIframed(this.ampdoc.win)) {
        return null;
      }
      if (this.viewportMeta_ === void 0) {
        this.viewportMeta_ = this.globalDoc_.querySelector("meta[name=viewport]");
        if (this.viewportMeta_) {
          this.originalViewportMetaString_ = this.viewportMeta_.content;
        }
      }
      return this.viewportMeta_;
    };
    _proto.viewerSetScrollTop_ = function viewerSetScrollTop_(data) {
      var targetScrollTop = data["scrollTop"];
      this.setScrollTop(targetScrollTop);
    };
    _proto.updateOnViewportEvent_ = function updateOnViewportEvent_(data) {
      var _this13 = this;
      var paddingTop = data["paddingTop"];
      var duration = data["duration"] || 0;
      var curve = data["curve"];
      var transient = data["transient"];
      if (paddingTop == void 0 || paddingTop == this.paddingTop_) {
        return;
      }
      this.lastPaddingTop_ = this.paddingTop_;
      this.paddingTop_ = paddingTop;
      if (this.fixedLayer_) {
        var animPromise = this.fixedLayer_.animateFixedElements(this.paddingTop_, this.lastPaddingTop_, duration, curve, transient);
        if (paddingTop < this.lastPaddingTop_) {
          this.binding_.hideViewerHeader(transient, this.lastPaddingTop_);
        } else {
          animPromise.then(function() {
            _this13.binding_.showViewerHeader(transient, paddingTop);
          });
        }
      }
    };
    _proto.disableScrollEventHandler_ = function disableScrollEventHandler_(data) {
      if (!!data) {
        this.disableScroll();
      } else {
        this.resetScroll();
      }
    };
    _proto.changed_ = function changed_(relayoutAll, velocity) {
      var size = this.getSize();
      var scrollTop = this.getScrollTop();
      var scrollLeft = this.getScrollLeft();
      dev().fine(TAG_11, "changed event:", "relayoutAll=", relayoutAll, "top=", scrollTop, "left=", scrollLeft, "bottom=", scrollTop + size.height, "velocity=", velocity);
      this.changeObservable_.fire({
        relayoutAll: relayoutAll,
        top: scrollTop,
        left: scrollLeft,
        width: size.width,
        height: size.height,
        velocity: velocity
      });
    };
    _proto.scroll_ = function scroll_() {
      var _this14 = this;
      this.rect_ = null;
      this.scrollCount_++;
      this.scrollLeft_ = this.binding_.getScrollLeft();
      var newScrollTop = this.binding_.getScrollTop();
      if (newScrollTop < 0) {
        return;
      }
      this.scrollTop_ = newScrollTop;
      if (!this.scrollTracking_) {
        this.scrollTracking_ = true;
        var now = Date.now();
        this.timer_.delay(function() {
          _this14.vsync_.measure(function() {
            _this14.throttledScroll_(now, newScrollTop);
          });
        }, 36);
      }
      this.scrollObservable_.fire();
    };
    _proto.throttledScroll_ = function throttledScroll_(referenceTime, referenceTop) {
      var _this15 = this;
      this.scrollTop_ = this.binding_.getScrollTop();
      var newScrollTop = this.scrollTop_;
      var now = Date.now();
      var velocity = 0;
      if (now != referenceTime) {
        velocity = (newScrollTop - referenceTop) / (now - referenceTime);
      }
      dev().fine(TAG_11, "scroll: scrollTop=" + newScrollTop + "; velocity=" + velocity);
      if (Math.abs(velocity) < 0.03) {
        this.changed_(false, velocity);
        this.scrollTracking_ = false;
      } else {
        this.timer_.delay(function() {
          return _this15.vsync_.measure(_this15.throttledScroll_.bind(_this15, now, newScrollTop));
        }, 20);
      }
    };
    _proto.sendScrollMessage_ = function sendScrollMessage_() {
      var _this16 = this;
      if (!this.scrollAnimationFrameThrottled_) {
        this.scrollAnimationFrameThrottled_ = true;
        this.vsync_.measure(function() {
          _this16.scrollAnimationFrameThrottled_ = false;
          _this16.viewer_.sendMessage("scroll", dict({
            "scrollTop": _this16.getScrollTop()
          }), true);
        });
      }
    };
    _proto.resize_ = function resize_() {
      var _this17 = this;
      this.rect_ = null;
      var oldSize = this.size_;
      this.size_ = null;
      var newSize = this.getSize();
      this.updateFixedLayer().then(function() {
        var widthChanged = !oldSize || oldSize.width != newSize.width;
        _this17.changed_(widthChanged, 0);
        var sizeChanged = widthChanged || oldSize.height != newSize.height;
        if (sizeChanged) {
          _this17.resizeObservable_.fire({
            relayoutAll: widthChanged,
            width: newSize.width,
            height: newSize.height
          });
        }
      });
    };
    return ViewportImpl2;
  }();
  function parseViewportMeta(content) {
    var params = Object.create(null);
    if (!content) {
      return params;
    }
    var pairs = content.split(/,|;/);
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i];
      var split = pair.split("=");
      var name = split[0].trim();
      var value = split[1];
      value = (value || "").trim();
      if (name) {
        params[name] = value;
      }
    }
    return params;
  }
  function stringifyViewportMeta(params) {
    var content = "";
    for (var k in params) {
      if (content.length > 0) {
        content += ",";
      }
      if (params[k]) {
        content += k + "=" + params[k];
      } else {
        content += k;
      }
    }
    return content;
  }
  function updateViewportMetaString(currentValue, updateParams) {
    var params = parseViewportMeta(currentValue);
    var changed = false;
    for (var k in updateParams) {
      if (params[k] !== updateParams[k]) {
        changed = true;
        if (updateParams[k] !== void 0) {
          params[k] = updateParams[k];
        } else {
          delete params[k];
        }
      }
    }
    if (!changed) {
      return currentValue;
    }
    return stringifyViewportMeta(params);
  }
  function getDefaultScrollAnimationDuration(scrollTopA, scrollTopB, max) {
    if (max === void 0) {
      max = 500;
    }
    return Math.floor(clamp(0.65 * Math.abs(scrollTopA - scrollTopB), 0, max));
  }
  function createViewport(ampdoc2) {
    var viewer = Services.viewerForDoc(ampdoc2);
    var win = ampdoc2.win;
    var binding;
    if (ampdoc2.isSingleDoc() && getViewportType(win, viewer) == ViewportType_Enum.NATURAL_IOS_EMBED && true) {
      binding = new ViewportBindingIosEmbedWrapper_(win);
    } else {
      binding = new ViewportBindingNatural_(ampdoc2);
    }
    return new ViewportImpl(ampdoc2, binding, viewer);
  }
  var ViewportType_Enum = {
    NATURAL: "natural",
    NATURAL_IOS_EMBED: "natural-ios-embed"
  };
  function getViewportType(win, viewer) {
    var isIframedIos = Services.platformFor(win).isIos() && isIframed(win);
    if (getMode(win).test && isIframedIos) {
      return ViewportType_Enum.NATURAL_IOS_EMBED;
    }
    if (isIframedIos && viewer.isEmbedded() && !viewer.hasCapability("iframeScroll")) {
      return ViewportType_Enum.NATURAL_IOS_EMBED;
    }
    return ViewportType_Enum.NATURAL;
  }
  function installViewportServiceForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, "viewport", createViewport, true);
  }

  // src/document-submit.js
  function installGlobalSubmitListenerForDoc(ampdoc2) {
    return ampdoc2.whenExtensionsKnown().then(function() {
      if (ampdoc2.declaresExtension("amp-form")) {
        ampdoc2.getRootNode().addEventListener("submit", onDocumentFormSubmit_, true);
      }
    });
  }
  function onDocumentFormSubmit_(e) {
    if (e.defaultPrevented) {
      return;
    }
    var form = dev().assertElement(e.target);
    if (!form || form.tagName != "FORM") {
      return;
    }
    var isAmpFormMarked = form.classList.contains("i-amphtml-form");
    var shouldValidate;
    if (isAmpFormMarked) {
      shouldValidate = !form.hasAttribute("amp-novalidate");
    } else {
      shouldValidate = !form.hasAttribute("novalidate");
    }
    if (shouldValidate && form.checkValidity && !form.checkValidity()) {
      e.preventDefault();
    }
    var inputs = form.elements;
    for (var i = 0; i < inputs.length; i++) {
      userAssert(!inputs[i].name || inputs[i].name != SOURCE_ORIGIN_PARAM, "Illegal input name, %s found: %s", SOURCE_ORIGIN_PARAM, inputs[i]);
    }
    var action = form.getAttribute("action");
    var actionXhr = form.getAttribute("action-xhr");
    var method = (form.getAttribute("method") || "GET").toUpperCase();
    if (actionXhr) {
      assertHttpsUrl(actionXhr, form, "action-xhr");
      userAssert(!isProxyOrigin(actionXhr), "form action-xhr should not be on AMP CDN: %s", form);
      checkCorsUrl(actionXhr);
    }
    if (action) {
      assertHttpsUrl(action, form, "action");
      userAssert(!isProxyOrigin(action), "form action should not be on AMP CDN: %s", form);
      checkCorsUrl(action);
    }
    if (method == "GET") {
      userAssert(actionXhr || action, "form action-xhr or action attribute is required for method=GET: %s", form);
    } else if (method == "POST") {
      if (action) {
        var TAG17 = "form";
        user().error(TAG17, "action attribute is invalid for method=POST: %s", form);
      }
      if (!actionXhr) {
        e.preventDefault();
        userAssert(false, "Only XHR based (via action-xhr attribute) submissions are support for POST requests. %s", form);
      }
    }
    var target = form.getAttribute("target");
    if (target) {
      userAssert(target == "_blank" || target == "_top", "form target=%s is invalid can only be _blank or _top: %s", target, form);
    } else {
      form.setAttribute("target", "_top");
    }
    if (actionXhr) {
      e.preventDefault();
      e.stopImmediatePropagation();
      var actions = Services.actionServiceForDoc(form);
      actions.execute(form, "submit", null, form, form, e, ActionTrust_Enum.HIGH);
    }
  }

  // src/preconnect.js
  var ACTIVE_CONNECTION_TIMEOUT_MS = 180 * 1e3;
  var PRECONNECT_TIMEOUT_MS = 10 * 1e3;

  // src/service/core-services.js
  function installAmpdocServicesForEmbed(ampdoc2) {
    devAssert2(!!ampdoc2.getParent());
    installAmpdocServicesInternal(ampdoc2, true);
  }
  function installAmpdocServicesInternal(ampdoc2, isEmbedded) {
    installUrlForDoc(ampdoc2);
    isEmbedded ? adoptServiceFactoryForEmbedDoc(ampdoc2, "templates") : installTemplatesServiceForDoc(ampdoc2);
    isEmbedded ? adoptServiceForEmbedDoc(ampdoc2, "documentInfo") : installDocumentInfoServiceForDoc(ampdoc2);
    isEmbedded ? adoptServiceForEmbedDoc(ampdoc2, "cid") : installCidService(ampdoc2);
    isEmbedded ? adoptServiceForEmbedDoc(ampdoc2, "viewer") : installViewerServiceForDoc(ampdoc2);
    isEmbedded ? adoptServiceForEmbedDoc(ampdoc2, "viewport") : installViewportServiceForDoc(ampdoc2);
    installHiddenObserverForDoc(ampdoc2);
    isEmbedded ? adoptServiceForEmbedDoc(ampdoc2, "history") : installHistoryServiceForDoc(ampdoc2);
    isEmbedded ? installInaboxResourcesServiceForDoc(ampdoc2) : installResourcesServiceForDoc(ampdoc2);
    installOwnersServiceForDoc(ampdoc2);
    installMutatorServiceForDoc(ampdoc2);
    isEmbedded ? adoptServiceForEmbedDoc(ampdoc2, "url-replace") : installUrlReplacementsServiceForDoc(ampdoc2);
    installActionServiceForDoc(ampdoc2);
    installStandardActionsForDoc(ampdoc2);
    isEmbedded ? adoptServiceForEmbedDoc(ampdoc2, "storage") : installStorageServiceForDoc(ampdoc2);
    installGlobalNavigationHandlerForDoc(ampdoc2);
    installGlobalSubmitListenerForDoc(ampdoc2);
    if (!isEmbedded) {
      installLoadingIndicatorForDoc(ampdoc2);
    }
  }

  // build/ampshared.css.js
  var cssText = "[hidden]{display:none!important}.i-amphtml-element{display:inline-block}.i-amphtml-blurry-placeholder{transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;pointer-events:none}[layout=nodisplay]:not(.i-amphtml-element){display:none!important}.i-amphtml-layout-fixed,[layout=fixed][width][height]:not(.i-amphtml-layout-fixed){display:inline-block;position:relative}.i-amphtml-layout-responsive,[layout=responsive][width][height]:not(.i-amphtml-layout-responsive),[width][height][heights]:not([layout]):not(.i-amphtml-layout-responsive),[width][height][sizes]:not(img):not([layout]):not(.i-amphtml-layout-responsive){display:block;position:relative}.i-amphtml-layout-intrinsic,[layout=intrinsic][width][height]:not(.i-amphtml-layout-intrinsic){display:inline-block;position:relative;max-width:100%}.i-amphtml-layout-intrinsic .i-amphtml-sizer{max-width:100%}.i-amphtml-intrinsic-sizer{max-width:100%;display:block!important}.i-amphtml-layout-container,.i-amphtml-layout-fixed-height,[layout=container],[layout=fixed-height][height]:not(.i-amphtml-layout-fixed-height){display:block;position:relative}.i-amphtml-layout-fill,.i-amphtml-layout-fill.i-amphtml-notbuilt,[layout=fill]:not(.i-amphtml-layout-fill),body noscript>*{display:block;overflow:hidden!important;position:absolute;top:0;left:0;bottom:0;right:0}body noscript>*{position:absolute!important;width:100%;height:100%;z-index:2}body noscript{display:inline!important}.i-amphtml-layout-flex-item,[layout=flex-item]:not(.i-amphtml-layout-flex-item){display:block;position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.i-amphtml-layout-fluid{position:relative}.i-amphtml-layout-size-defined{overflow:hidden!important}.i-amphtml-layout-awaiting-size{position:absolute!important;top:auto!important;bottom:auto!important}i-amphtml-sizer{display:block!important}@supports (aspect-ratio:1/1){i-amphtml-sizer.i-amphtml-disable-ar{display:none!important}}.i-amphtml-blurry-placeholder,.i-amphtml-fill-content{display:block;height:0;max-height:100%;max-width:100%;min-height:100%;min-width:100%;width:0;margin:auto}.i-amphtml-layout-size-defined .i-amphtml-fill-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-replaced-content,.i-amphtml-screen-reader{padding:0!important;border:none!important}.i-amphtml-screen-reader{position:fixed!important;top:0px!important;left:0px!important;width:4px!important;height:4px!important;opacity:0!important;overflow:hidden!important;margin:0!important;display:block!important;visibility:visible!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:8px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:12px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:16px!important}.i-amphtml-unresolved{position:relative;overflow:hidden!important}.i-amphtml-select-disabled{-webkit-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.i-amphtml-notbuilt,[layout]:not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not(img):not([layout]):not(.i-amphtml-element){position:relative;overflow:hidden!important;color:transparent!important}.i-amphtml-notbuilt:not(.i-amphtml-layout-container)>*,[layout]:not([layout=container]):not(.i-amphtml-element)>*,[width][height][heights]:not([layout]):not(.i-amphtml-element)>*,[width][height][sizes]:not([layout]):not(.i-amphtml-element)>*{display:none}amp-img:not(.i-amphtml-element)[i-amphtml-ssr]>img.i-amphtml-fill-content{display:block}.i-amphtml-notbuilt:not(.i-amphtml-layout-container),[layout]:not([layout=container]):not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not(img):not([layout]):not(.i-amphtml-element){color:transparent!important;line-height:0!important}.i-amphtml-ghost{visibility:hidden!important}.i-amphtml-element>[placeholder],[layout]:not(.i-amphtml-element)>[placeholder],[width][height][heights]:not([layout]):not(.i-amphtml-element)>[placeholder],[width][height][sizes]:not([layout]):not(.i-amphtml-element)>[placeholder]{display:block;line-height:normal}.i-amphtml-element>[placeholder].amp-hidden,.i-amphtml-element>[placeholder].hidden{visibility:hidden}.i-amphtml-element:not(.amp-notsupported)>[fallback],.i-amphtml-layout-container>[placeholder].amp-hidden,.i-amphtml-layout-container>[placeholder].hidden{display:none}.i-amphtml-layout-size-defined>[fallback],.i-amphtml-layout-size-defined>[placeholder]{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:1}amp-img[i-amphtml-ssr]:not(.i-amphtml-element)>[placeholder]{z-index:auto}.i-amphtml-notbuilt>[placeholder]{display:block!important}.i-amphtml-hidden-by-media-query{display:none!important}.i-amphtml-element-error{background:red!important;color:#fff!important;position:relative!important}.i-amphtml-element-error:before{content:attr(error-message)}i-amp-scroll-container,i-amphtml-scroll-container{position:absolute;top:0;left:0;right:0;bottom:0;display:block}i-amp-scroll-container.amp-active,i-amphtml-scroll-container.amp-active{overflow:auto;-webkit-overflow-scrolling:touch}.i-amphtml-loading-container{display:block!important;pointer-events:none;z-index:1}.i-amphtml-notbuilt>.i-amphtml-loading-container{display:block!important}.i-amphtml-loading-container.amp-hidden{visibility:hidden}.i-amphtml-element>[overflow]{cursor:pointer;position:relative;z-index:2;visibility:hidden;display:initial;line-height:normal}.i-amphtml-layout-size-defined>[overflow]{position:absolute}.i-amphtml-element>[overflow].amp-visible{visibility:visible}template{display:none!important}.amp-border-box,.amp-border-box *,.amp-border-box :after,.amp-border-box :before{box-sizing:border-box}amp-pixel{display:none!important}amp-analytics,amp-auto-ads,amp-story-auto-ads{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}html.i-amphtml-fie>amp-analytics{position:initial!important}[visible-when-invalid]:not(.visible),form [submit-error],form [submit-success],form [submitting]{display:none}amp-accordion{display:block!important}@media (min-width:1px){:where(amp-accordion>section)>:first-child{margin:0;background-color:#efefef;padding-right:20px;border:1px solid #dfdfdf}:where(amp-accordion>section)>:last-child{margin:0}}amp-accordion>section{float:none!important}amp-accordion>section>*{float:none!important;display:block!important;overflow:hidden!important;position:relative!important}amp-accordion,amp-accordion>section{margin:0}amp-accordion:not(.i-amphtml-built)>section>:last-child{display:none!important}amp-accordion:not(.i-amphtml-built)>section[expanded]>:last-child{display:block!important}\n/*# sourceURL=/css/ampshared.css*/";

  // src/friendly-iframe-embed.js
  var srcdocSupported;
  function getDelayPromiseProducer() {
    return function(val) {
      return new Promise(function(resolve) {
        setTimeout(function() {
          return resolve(val);
        }, 1);
      });
    };
  }
  function isSrcdocSupported() {
    if (srcdocSupported === void 0) {
      srcdocSupported = "srcdoc" in HTMLIFrameElement.prototype;
    }
    return srcdocSupported;
  }
  function getFieSafeScriptSrcs() {
    var cdnBase = getMode().localDev ? "http://localhost:8000/dist" : urls.cdn;
    return cdnBase + "/lts/ " + cdnBase + "/rtv/ " + cdnBase + "/sw/";
  }
  function preloadFriendlyIframeEmbedExtensions(win, extensions) {
    var extensionsService = Services.extensionsFor(win);
    extensions.forEach(function(_ref) {
      var extensionId = _ref.extensionId, extensionVersion = _ref.extensionVersion;
      return extensionsService.preloadExtension(extensionId, extensionVersion);
    });
  }
  function installFriendlyIframeEmbed(iframe, container, spec, opt_preinstallCallback) {
    var win = getTopWindow(getWin(iframe));
    var extensionsService = Services.extensionsFor(win);
    var ampdocService = Services.ampdocServiceFor(win);
    setStyle(iframe, "visibility", "hidden");
    iframe.setAttribute("referrerpolicy", "unsafe-url");
    iframe.setAttribute("marginheight", "0");
    iframe.setAttribute("marginwidth", "0");
    var extensions = spec.extensions || [];
    preloadFriendlyIframeEmbedExtensions(win, extensions);
    var html2 = spec.skipHtmlMerge ? spec.html : mergeHtml(spec);
    iframe.onload = function() {
      iframe.readyState = "complete";
    };
    var registerViolationListener = function registerViolationListener2() {
      iframe.contentWindow.addEventListener("securitypolicyviolation", function(violationEvent) {
        dev().warn("FIE", "security policy violation", violationEvent);
      });
    };
    var loadedPromise;
    if (isSrcdocSupported()) {
      iframe.srcdoc = html2;
      loadedPromise = loadPromise(iframe);
      container.appendChild(iframe);
      registerViolationListener();
    } else {
      iframe.src = "about:blank";
      container.appendChild(iframe);
      var childDoc = iframe.contentWindow.document;
      registerViolationListener();
      childDoc.open();
      childDoc.write(devAssert2(html2));
      loadedPromise = loadPromise(iframe.contentWindow);
      childDoc.close();
    }
    var readyPromise;
    if (isIframeReady(iframe)) {
      readyPromise = resolvedPromise();
    } else {
      readyPromise = new Promise(function(resolve) {
        var interval = win.setInterval(function() {
          if (isIframeReady(iframe)) {
            resolve();
            win.clearInterval(interval);
          }
        }, 5);
        loadedPromise.catch(function(error) {
          rethrowAsync(error);
        }).then(function() {
          resolve();
          win.clearInterval(interval);
        });
      });
    }
    return readyPromise.then(function() {
      var childWin = iframe.contentWindow;
      var signals = spec.host && spec.host.signals();
      var ampdoc2 = ampdocService.installFieDoc(spec.url, childWin, {
        signals: signals
      });
      var embed = new FriendlyIframeEmbed(iframe, spec, loadedPromise, ampdoc2);
      iframe[FIE_EMBED_PROP] = embed;
      if (!childWin.frameElement) {
        return null;
      }
      return Installers.installExtensionsInEmbed(embed, extensionsService, ampdoc2, extensions, opt_preinstallCallback).then(function() {
        if (!childWin.frameElement) {
          return null;
        }
        return embed;
      });
    });
  }
  function isIframeReady(iframe) {
    var childDoc = iframe.contentWindow && iframe.contentWindow.document;
    return !!(childDoc && isDocumentReady(childDoc) && childDoc.body && childDoc.body.firstChild);
  }
  function mergeHtml(spec) {
    var originalHtml = spec.html;
    var originalHtmlUp = originalHtml.toUpperCase();
    var ip = originalHtmlUp.indexOf("<HEAD");
    if (ip != -1) {
      ip = originalHtmlUp.indexOf(">", ip + 1) + 1;
    }
    if (ip == -1) {
      ip = originalHtmlUp.indexOf("<BODY");
    }
    if (ip == -1) {
      ip = originalHtmlUp.indexOf("<HTML");
      if (ip != -1) {
        ip = originalHtmlUp.indexOf(">", ip + 1) + 1;
      }
    }
    var result = [];
    if (ip > 0) {
      result.push(originalHtml.substring(0, ip));
    }
    result.push('<base href="' + escapeHtml(spec.url) + '">');
    if (spec.fonts) {
      spec.fonts.forEach(function(font) {
        result.push('<link href="' + escapeHtml(font) + '" rel="stylesheet" type="text/css">');
      });
    }
    var cspScriptSrc = getFieSafeScriptSrcs();
    result.push("<meta http-equiv=Content-Security-Policy " + ('content="script-src ' + cspScriptSrc + ";object-src 'none';child-src 'none'\">"));
    if (ip > 0) {
      result.push(originalHtml.substring(ip));
    } else {
      result.push(originalHtml);
    }
    return result.join("");
  }
  var FriendlyIframeEmbed = /* @__PURE__ */ function() {
    function FriendlyIframeEmbed2(iframe, spec, loadedPromise, ampdoc2) {
      var _this = this;
      this.iframe = iframe;
      this.win = iframe.contentWindow;
      this.ampdoc = ampdoc2;
      this.spec = spec;
      this.host = spec.host || null;
      this.startTime_ = Date.now();
      this.signals_ = this.ampdoc ? this.ampdoc.signals() : this.host ? this.host.signals() : new Signals();
      this.renderComplete_ = new Deferred();
      this.winLoadedPromise_ = Promise.all([loadedPromise, this.whenRenderStarted()]);
      if (this.ampdoc) {
        this.whenRenderComplete().then(function() {
          return _this.ampdoc.setReady();
        });
      }
      this.win.addEventListener("resize", function() {
        return _this.handleResize_();
      });
    }
    var _proto = FriendlyIframeEmbed2.prototype;
    _proto.destroy = function destroy() {
      disposeServicesForEmbed(this.win);
      if (this.ampdoc) {
        this.ampdoc.dispose();
      }
    };
    _proto.getStartTime = function getStartTime() {
      return this.startTime_;
    };
    _proto.getUrl = function getUrl() {
      return this.spec.url;
    };
    _proto.signals = function signals() {
      return this.signals_;
    };
    _proto.whenRenderStarted = function whenRenderStarted() {
      return this.signals_.whenSignal(CommonSignals_Enum.RENDER_START);
    };
    _proto.whenWindowLoaded = function whenWindowLoaded() {
      return this.winLoadedPromise_;
    };
    _proto.whenIniLoaded = function whenIniLoaded() {
      return this.signals_.whenSignal(CommonSignals_Enum.INI_LOAD);
    };
    _proto.whenRenderComplete = function whenRenderComplete() {
      return this.renderComplete_.promise;
    };
    _proto.renderCompleted = function renderCompleted() {
      this.renderComplete_.resolve();
    };
    _proto.pause = function pause() {
      if (this.ampdoc) {
        this.ampdoc.overrideVisibilityState(VisibilityState_Enum.PAUSED);
      }
    };
    _proto.resume = function resume() {
      if (this.ampdoc) {
        this.ampdoc.overrideVisibilityState(VisibilityState_Enum.VISIBLE);
      }
    };
    _proto.startRender_ = function startRender_() {
      var _this2 = this;
      if (this.host) {
        this.host.renderStarted();
      } else {
        this.signals_.signal(CommonSignals_Enum.RENDER_START);
      }
      if (!this.spec.skipHtmlMerge) {
        this.renderComplete_.resolve();
      }
      setStyle(this.iframe, "visibility", "");
      if (this.win.document && this.win.document.body) {
        this.win.document.documentElement.classList.add("i-amphtml-fie");
        setStyles(dev().assertElement(this.win.document.body), {
          opacity: 1,
          visibility: "visible",
          animation: "none"
        });
      }
      var rect;
      if (this.host) {
        rect = this.host.getLayoutBox();
      } else {
        rect = layoutRectLtwh(0, 0, this.win.innerWidth, this.win.innerHeight);
      }
      Promise.all([this.whenRenderComplete(), whenContentIniLoad(this.ampdoc, this.win, rect)]).then(function() {
        _this2.signals_.signal(CommonSignals_Enum.INI_LOAD);
      });
    };
    _proto.getBodyElement = function getBodyElement() {
      return (this.iframe.contentDocument || this.iframe.contentWindow.document).body;
    };
    _proto.handleResize_ = function handleResize_() {
      this.getMutator_().mutateElement(this.win.document.documentElement, function() {
      });
    };
    _proto.getMutator_ = function getMutator_() {
      return Services.mutatorForDoc(this.iframe);
    };
    _proto.measureMutate_ = function measureMutate_(task) {
      return this.getMutator_().measureMutateElement(this.iframe, task.measure || null, task.mutate);
    };
    _proto.enterFullOverlayMode = function enterFullOverlayMode() {
      var _this3 = this;
      var ampAdParent = dev().assertElement(this.iframe.parentNode);
      userAssert(ampAdParent.tagName.toLowerCase() == "amp-ad", "Only <amp-ad> is allowed to enter lightbox mode.");
      var bodyStyle;
      return this.measureMutate_({
        measure: function measure() {
          var rect = _this3.host ? _this3.host.getLayoutBox() : _this3.iframe.getBoundingClientRect();
          var dy = -Services.viewportForDoc(_this3.iframe).getScrollTop();
          var _moveLayoutRect = moveLayoutRect(rect, 0, dy), height = _moveLayoutRect.height, left = _moveLayoutRect.left, top = _moveLayoutRect.top, width = _moveLayoutRect.width;
          bodyStyle = {
            top: px(top),
            left: px(left),
            width: px(width),
            height: px(height)
          };
        },
        mutate: function mutate() {
          setImportantStyles(_this3.iframe, {
            "position": "fixed",
            "left": 0,
            "right": 0,
            "bottom": 0,
            "width": "100vw",
            "top": 0,
            "height": "100vh"
          });
          setImportantStyles(_this3.getBodyElement(), {
            "background": "transparent",
            "position": "absolute",
            "bottom": "auto",
            "right": "auto",
            "top": bodyStyle.top,
            "left": bodyStyle.left,
            "width": bodyStyle.width,
            "height": bodyStyle.height
          });
        }
      });
    };
    _proto.leaveFullOverlayMode = function leaveFullOverlayMode() {
      var _this4 = this;
      return this.measureMutate_({
        mutate: function mutate() {
          resetStyles(_this4.iframe, ["position", "left", "right", "top", "bottom", "width", "height"]);
          resetStyles(_this4.getBodyElement(), ["position", "top", "left", "width", "height", "bottom", "right"]);
        }
      });
    };
    return FriendlyIframeEmbed2;
  }();
  function installPolyfillsInChildWindow(parentWin, childWin) {
    if (!isEsm()) {
      install3(childWin);
      install2(childWin, /* @__PURE__ */ function() {
        function _class() {
        }
        return _class;
      }());
    }
    if (true) {
      installForChildWin(parentWin, childWin);
      installForChildWin2(parentWin, childWin);
      install(childWin);
    }
  }
  var Installers = /* @__PURE__ */ function() {
    function Installers2() {
    }
    Installers2.installExtensionsInEmbed = function installExtensionsInEmbed(embed, extensionsService, ampdoc2, extensions, preinstallCallback, opt_installComplete) {
      var childWin = ampdoc2.win;
      var parentWin = getWin(childWin.frameElement);
      setParentWindow(childWin, parentWin);
      var getDelayPromise = getDelayPromiseProducer();
      return getDelayPromise(void 0).then(function() {
        installPolyfillsInChildWindow(parentWin, childWin);
      }).then(getDelayPromise).then(function() {
        if (isEsm()) {
          installStylesForDoc(ampdoc2, cssText, null, true, "amp-runtime");
        } else {
          installStylesForDoc(ampdoc2, cssText, null, true, "amp-runtime");
        }
      }).then(getDelayPromise).then(function() {
        if (!childWin.frameElement) {
          return;
        }
        if (preinstallCallback) {
          preinstallCallback(ampdoc2.win, ampdoc2);
        }
      }).then(getDelayPromise).then(function() {
        if (!childWin.frameElement) {
          return;
        }
        Installers2.installStandardServicesInEmbed(ampdoc2);
      }).then(getDelayPromise).then(function() {
        if (!childWin.frameElement) {
          return;
        }
        extensionsService.preinstallEmbed(ampdoc2, extensions);
      }).then(getDelayPromise).then(function() {
        if (!childWin.frameElement) {
          return;
        }
        embed.startRender_();
      }).then(getDelayPromise).then(function() {
        if (!childWin.frameElement) {
          return;
        }
        var promise = extensionsService.installExtensionsInDoc(ampdoc2, extensions);
        ampdoc2.setExtensionsKnown();
        if (opt_installComplete) {
          opt_installComplete(promise);
        }
      });
    };
    Installers2.installStandardServicesInEmbed = function installStandardServicesInEmbed(ampdoc2) {
      installTimerInEmbedWindow(ampdoc2.win);
      installAmpdocServicesForEmbed(ampdoc2);
    };
    return Installers2;
  }();

  // extensions/amp-a4a/0.1/head-validation.js
  var ALLOWED_FONT_REGEX = new RegExp("https://cdn\\.materialdesignicons\\.com/([0-9]+\\.?)+/css/materialdesignicons\\.min\\.css|https://cloud\\.typography\\.com/[0-9]*/[0-9]*/css/fonts\\.css|https://fast\\.fonts\\.net/.*|https://fonts\\.googleapis\\.com/css2?\\?.*|https://fonts\\.googleapis\\.com/icon\\?.*|https://fonts\\.googleapis\\.com/earlyaccess/.*\\.css|https://maxcdn\\.bootstrapcdn\\.com/font-awesome/([0-9]+\\.?)+/css/font-awesome\\.min\\.css(\\?.*)?|https://(use|pro)\\.fontawesome\\.com/releases/v([0-9]+\\.?)+/css/[0-9a-zA-Z-]+\\.css|https://(use|pro)\\.fontawesome\\.com/[0-9a-zA-Z-]+\\.css|https://use\\.typekit\\.net/[\\w\\p{L}\\p{N}_]+\\.css");
  var EXTENSION_ALLOWLIST = map({
    "amp-accordion": true,
    "amp-ad-exit": true,
    "amp-analytics": true,
    "amp-anim": true,
    "amp-animation": true,
    "amp-audio": true,
    "amp-bind": true,
    "amp-carousel": true,
    "amp-fit-text": true,
    "amp-font": true,
    "amp-form": true,
    "amp-gwd-animation": true,
    "amp-img": true,
    "amp-layout": true,
    "amp-lightbox": true,
    "amp-mraid": true,
    "amp-mustache": true,
    "amp-pixel": true,
    "amp-position-observer": true,
    "amp-selector": true,
    "amp-social-share": true,
    "amp-video": true
  });
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  var EXTENSION_URL_PREFIX = new RegExp("^" + escapeRegExp(urls.cdn) + "/(rtv/\\d+/)?v0/");
  function processHead(win, adElement, head) {
    if (!head || !head.firstChild) {
      return null;
    }
    var root = rootNodeFor(head);
    var htmlTag = root.documentElement;
    if (!htmlTag || !htmlTag.hasAttribute("amp4ads") && !htmlTag.hasAttribute("\u26A1\uFE0F4ads") && !htmlTag.hasAttribute("\u26A14ads")) {
      return null;
    }
    var urlService = Services.urlForDoc(adElement);
    var extensions = [];
    var fonts = [];
    var images = [];
    var element = head.firstElementChild;
    while (element) {
      var nextElement = element.nextElementSibling;
      switch (element.tagName.toUpperCase()) {
        case "SCRIPT":
          handleScript(extensions, element);
          break;
        case "STYLE":
          handleStyle(element);
          break;
        case "LINK":
          handleLink(fonts, images, element);
          break;
        case "META":
        case "TITLE":
          break;
        default:
          removeElement(element);
          break;
      }
      element = nextElement;
    }
    preloadFriendlyIframeEmbedExtensions(win, extensions);
    fonts.forEach(function(fontUrl) {
      return Services.preconnectFor(win).preload(adElement.getAmpDoc(), fontUrl);
    });
    images.forEach(function(imageUrl) {
      return urlService.isSecure(imageUrl) && Services.preconnectFor(win).preload(adElement.getAmpDoc(), imageUrl);
    });
    return {
      extensions: extensions,
      head: head
    };
  }
  function handleScript(extensions, script) {
    if (script.type === "application/json") {
      return;
    }
    var src = script.src;
    var isTesting = getMode().test || getMode().localDev;
    if (EXTENSION_URL_PREFIX.test(src) || isTesting && includes(src, "/dist/")) {
      var extensionInfo = parseExtensionUrl(src);
      if (extensionInfo && EXTENSION_ALLOWLIST[extensionInfo.extensionId]) {
        extensions.push(extensionInfo);
      }
    }
    removeElement(script);
  }
  function handleLink(fonts, images, link) {
    var as = link.as, href = link.href, rel = link.rel;
    if (rel === "preload" && as === "image") {
      images.push(href);
      return;
    }
    if (rel === "stylesheet" && ALLOWED_FONT_REGEX.test(href)) {
      fonts.push(href);
      return;
    }
    removeElement(link);
  }
  function handleStyle(style) {
    if (style.hasAttribute("amp-custom") || style.hasAttribute("amp-keyframes") || style.hasAttribute("amp4ads-boilerplate")) {
      return;
    }
    removeElement(style);
  }

  // extensions/amp-a4a/0.1/secure-frame.js
  var fontProviderAllowList = ["https://cdn.materialdesignicons.com", "https://cloud.typography.com", "https://fast.fonts.net", "https://fonts.googleapis.com", "https://maxcdn.bootstrapcdn.com", "https://p.typekit.net", "https://pro.fontawesome.com", "https://use.fontawesome.com", "https://use.typekit.net"].join(" ");
  var sandboxVals = "allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation";
  var TOKEN_VALUE_1P = "AlbC5LKqHkvdIY45O3/1Js/EyRmwSjb4wyp3XZy8KbMWhfMknydD4Wx9K9GyEIdG3ojUlZOdpdbX340wPHpYfQoAAABweyJvcmlnaW4iOiJodHRwczovL2FtcHByb2plY3Qub3JnOjQ0MyIsImZlYXR1cmUiOiJDb252ZXJzaW9uTWVhc3VyZW1lbnQiLCJleHBpcnkiOjE2NDMxNTUxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==";
  var createSecureDocSkeleton = function createSecureDocSkeleton2(url, sanitizedHeadElements, body) {
    return '<!DOCTYPE html>\n  <html \u26A14ads lang="en">\n  <head>\n    <base href="' + escapeHtml(url) + '">\n    <meta charset="UTF-8">\n    <meta http-equiv=Content-Security-Policy content="\n      img-src * data:;\n      media-src *;\n      font-src *;\n      connect-src *;\n      script-src ' + getFieSafeScriptSrcs() + ";\n      object-src 'none';\n      child-src 'none';\n      default-src 'none';\n      style-src " + fontProviderAllowList + ' \'unsafe-inline\';\n    ">\n    <meta http-equiv="origin-trial" content=' + TOKEN_VALUE_1P + ">    \n    " + sanitizedHeadElements + "\n  </head>\n  <body>" + body + "</body>\n  </html>";
  };
  function createSecureFrame(win, title, height, width) {
    var document = win.document;
    var iframe = createElementWithAttributes(document, "iframe", dict({
      "height": height,
      "width": width,
      "title": title,
      "frameborder": "0",
      "allowfullscreen": "",
      "allowtransparency": "",
      "scrolling": "no",
      "sandbox": sandboxVals,
      "role": "region",
      "aria-label": "Advertisement",
      "tabindex": "0"
    }));
    if (isAttributionReportingSupported(document)) {
      iframe.setAttribute("allow", "attribution-reporting 'src'");
    }
    return iframe;
  }
  function isAttributionReportingSupported(doc) {
    var _doc$featurePolicy;
    return (_doc$featurePolicy = doc.featurePolicy) == null ? void 0 : _doc$featurePolicy.features().includes("attribution-reporting");
  }

  // extensions/amp-a4a/0.1/signature-verifier.js
  var AMP_SIGNATURE_HEADER = "AMP-Fast-Fetch-Signature";
  var VerificationStatus = {
    OK: 0,
    UNVERIFIED: 1,
    ERROR_KEY_NOT_FOUND: 2,
    ERROR_SIGNATURE_MISMATCH: 3,
    CRYPTO_UNAVAILABLE: 4
  };
  var SignatureVerifier = /* @__PURE__ */ function() {
    function SignatureVerifier2(win, signingServerURLs2) {
      this.win_ = win;
      this.signingServerURLs_ = signingServerURLs2;
      this.signers_ = Services.cryptoFor(win).isPkcsAvailable() ? {} : null;
      this.getNow_ = win.performance && win.performance.now ? win.performance.now.bind(win.performance) : Date.now;
    }
    var _proto = SignatureVerifier2.prototype;
    _proto.loadKeyset = function loadKeyset(signingServiceName) {
      if (this.signers_ && !this.signers_[signingServiceName]) {
        var keys = {};
        var promise = this.fetchAndAddKeys_(keys, signingServiceName, null);
        this.signers_[signingServiceName] = {
          promise: promise,
          keys: keys
        };
      }
    };
    _proto.verify = function verify(creative, headers) {
      var signatureFormat = /^([A-Za-z0-9._-]+):([A-Za-z0-9._-]+):([A-Za-z0-9+/]{341}[AQgw]==)$/;
      if (!headers.has(AMP_SIGNATURE_HEADER)) {
        return Promise.resolve(VerificationStatus.UNVERIFIED);
      }
      var headerValue = headers.get(AMP_SIGNATURE_HEADER);
      var match = signatureFormat.exec(headerValue);
      if (!match) {
        user().error("AMP-A4A", "Invalid signature header: " + headerValue.split(":")[0]);
        return Promise.resolve(VerificationStatus.ERROR_SIGNATURE_MISMATCH);
      }
      return this.verifyCreativeAndSignature(match[1], match[2], base64DecodeToBytes(match[3]), creative);
    };
    _proto.verifyCreativeAndSignature = function verifyCreativeAndSignature(signingServiceName, keypairId, signature, creative) {
      var _this = this;
      if (!this.signers_) {
        return Promise.resolve(VerificationStatus.CRYPTO_UNAVAILABLE);
      }
      var signer = this.signers_[signingServiceName];
      devAssert2(signer, "Keyset for service %s not loaded before verification", signingServiceName);
      return signer.promise.then(function(success) {
        if (!success) {
          return VerificationStatus.UNVERIFIED;
        }
        var keyPromise = signer.keys[keypairId];
        if (keyPromise === void 0) {
          signer.promise = _this.fetchAndAddKeys_(signer.keys, signingServiceName, keypairId).then(function(success2) {
            if (signer.keys[keypairId] === void 0) {
              signer.keys[keypairId] = null;
            }
            return success2;
          });
          return _this.verifyCreativeAndSignature(signingServiceName, keypairId, signature, creative);
        } else if (keyPromise === null) {
          return VerificationStatus.ERROR_KEY_NOT_FOUND;
        } else {
          return keyPromise.then(function(key) {
            if (!key) {
              return VerificationStatus.UNVERIFIED;
            }
            var crypto = Services.cryptoFor(_this.win_);
            return crypto.verifyPkcs(key, signature, creative).then(function(result) {
              return result ? VerificationStatus.OK : VerificationStatus.ERROR_SIGNATURE_MISMATCH;
            }, function(err) {
              var message = err && err.message;
              dev().error("AMP-A4A", "Failed to verify signature: " + message);
              return VerificationStatus.UNVERIFIED;
            });
          });
        }
      });
    };
    _proto.fetchAndAddKeys_ = function fetchAndAddKeys_(keys, signingServiceName, keypairId) {
      var _this2 = this;
      var url = this.signingServerURLs_[signingServiceName];
      if (keypairId != null) {
        url += "?kid=" + encodeURIComponent(keypairId);
      }
      return Services.xhrFor(this.win_).fetchJson(url, {
        mode: "cors",
        method: "GET",
        ampCors: false,
        credentials: "omit"
      }).then(function(response) {
        devAssert2(response.status === 200, "Fast Fetch keyset spec requires status code 200");
        devAssert2(response.headers.get("Content-Type") == "application/jwk-set+json", "Fast Fetch keyset spec requires Content-Type: application/jwk-set+json");
        return response.json().then(function(jsonResponse) {
          var jwkSet = jsonResponse;
          if (!jwkSet || !isArray(jwkSet["keys"])) {
            signingServiceError(signingServiceName, "Key set (" + JSON.stringify(jwkSet) + ') has no "keys"');
            return false;
          }
          jwkSet["keys"].forEach(function(jwk) {
            if (!jwk || typeof jwk["kid"] != "string") {
              signingServiceError(signingServiceName, "Key (" + JSON.stringify(jwk) + ') has no "kid"');
            } else if (keys[jwk["kid"]] === void 0) {
              keys[jwk["kid"]] = Services.cryptoFor(_this2.win_).importPkcsKey(jwk).catch(function(err) {
                var jwkData = JSON.stringify(jwk);
                var message = err && err.message;
                signingServiceError(signingServiceName, "Failed to import key (" + jwkData + "): " + message);
                return null;
              });
            }
          });
          return true;
        }, function(err) {
          signingServiceError(signingServiceName, "Failed to parse JSON: " + (err && err.response));
          return false;
        });
      }, function(err) {
        if (err && err.response) {
          signingServiceError(signingServiceName, "Status code " + err.response.status);
        }
        return false;
      });
    };
    return SignatureVerifier2;
  }();
  function signingServiceError(signingServiceName, message) {
    dev().error("AMP-A4A", "Signing service error for " + signingServiceName + ": " + message);
  }

  // extensions/amp-a4a/0.1/within-viewport.js
  var OBSERVERS_MAP_PROP = "__AMP_A4A_VP_MAP";
  function whenWithinViewport(element, viewportNum) {
    if (!(getMode().localDev || getMode().test)) {
      return Promise.reject("!WITHIN_VIEWPORT_INOB");
    }
    var win = getWin(element);
    var observersMap = memo(win, OBSERVERS_MAP_PROP, createObserversMap);
    var observer = observersMap.get(viewportNum);
    if (!observer) {
      observer = createObserver(win, viewportNum);
      observersMap.set(viewportNum, observer);
    }
    return observer(element);
  }
  var createObserversMap = function createObserversMap2() {
    return new Map();
  };
  function createObserver(win, viewportNum) {
    var elements2 = new WeakMap();
    var callback = function callback2(records) {
      for (var i = 0; i < records.length; i++) {
        var _records$i = records[i], isIntersecting = _records$i.isIntersecting, element = _records$i.target;
        var deferred = elements2.get(element);
        if (deferred && isIntersecting) {
          deferred.resolve();
          observer.unobserve(element);
          elements2.delete(element);
        }
      }
    };
    var iframed = isIframed(win);
    var root = iframed ? win.document : null;
    var observer = new win.IntersectionObserver(callback, {
      root: root,
      rootMargin: (viewportNum - 1) * 100 + "%"
    });
    return function(element) {
      var deferred = elements2.get(element);
      if (!deferred) {
        deferred = new Deferred();
        elements2.set(element, deferred);
        observer.observe(element);
      }
      return deferred.promise;
    };
  }

  // src/ad-helper.js
  var CONTAINERS = {
    "AMP-FX-FLYING-CARPET": true,
    "AMP-LIGHTBOX": true,
    "AMP-STICKY-AD": true,
    "AMP-LIGHTBOX-GALLERY": true
  };
  function isPositionFixed(el, win) {
    var _computedStyle = computedStyle(win, el), position = _computedStyle.position;
    return position == "fixed" || position == "sticky";
  }
  function isAdPositionAllowed(element, win) {
    var hasFixedAncestor = false;
    var containers = 0;
    var el = element;
    do {
      if (CONTAINERS[el.tagName]) {
        containers++;
        hasFixedAncestor = false;
      } else if (isPositionFixed(dev().assertElement(el), win)) {
        hasFixedAncestor = true;
      }
      el = el.parentElement;
    } while (el && el.tagName != "BODY");
    return !hasFixedAncestor && containers <= 1;
  }

  // extensions/amp-ad/0.1/concurrent-load.js
  var LOADING_ADS_WIN_ID_ = "3pla";
  var throttlePromise_ = null;
  var throttlePromiseResolver_ = null;
  function is3pThrottled(win) {
    return !!win[LOADING_ADS_WIN_ID_];
  }
  function getAmpAdRenderOutsideViewport(element) {
    var rawValue = element.getAttribute("data-loading-strategy");
    if (rawValue == null) {
      return null;
    }
    if (rawValue == "prefer-viewability-over-views" || rawValue == "") {
      return 1.25;
    }
    var errorMessage = "Value of data-loading-strategy should be a float number in range of [0, 3], but got " + rawValue;
    var viewportNumber = user().assertNumber(parseFloat(rawValue), errorMessage);
    userAssert(viewportNumber >= 0 && viewportNumber <= 3, errorMessage);
    return viewportNumber;
  }
  function incrementLoadingAds(win, opt_loadingPromise) {
    if (win[LOADING_ADS_WIN_ID_] === void 0) {
      win[LOADING_ADS_WIN_ID_] = 0;
    }
    win[LOADING_ADS_WIN_ID_]++;
    if (!throttlePromise_) {
      var deferred = new Deferred();
      throttlePromise_ = deferred.promise;
      throttlePromiseResolver_ = deferred.resolve;
    }
    Services.timerFor(win).timeoutPromise(1e3, opt_loadingPromise).catch(function() {
    }).then(function() {
      if (!--win[LOADING_ADS_WIN_ID_]) {
        throttlePromiseResolver_();
        throttlePromise_ = null;
        throttlePromiseResolver_ = null;
      }
    });
  }

  // extensions/amp-a4a/0.1/amp-a4a.js
  function _inherits4(subClass2, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass2.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass2, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf4(subClass2, superClass);
  }
  function _setPrototypeOf4(o, p) {
    _setPrototypeOf4 = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
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
    _getPrototypeOf4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf4(o);
  }
  var METADATA_STRINGS = ["<script amp-ad-metadata type=application/json>", '<script type="application/json" amp-ad-metadata>', "<script type=application/json amp-ad-metadata>"];
  var DEFAULT_SAFEFRAME_VERSION = "1-0-37";
  var CREATIVE_SIZE_HEADER = "X-CreativeSize";
  var RENDERING_TYPE_HEADER = "X-AmpAdRender";
  var SAFEFRAME_VERSION_HEADER = "X-AmpSafeFrameVersion";
  var EXPERIMENT_FEATURE_HEADER_NAME = "amp-ff-exps";
  var TAG15 = "amp-a4a";
  var NO_CONTENT_RESPONSE = "NO-CONTENT-RESPONSE";
  var NETWORK_FAILURE = "NETWORK-FAILURE";
  var INVALID_SPSA_RESPONSE = "INVALID-SPSA-RESPONSE";
  var IFRAME_GET = "IFRAME-GET";
  var XORIGIN_MODE = {
    CLIENT_CACHE: "client_cache",
    SAFEFRAME: "safeframe",
    NAMEFRAME: "nameframe",
    IFRAME_GET: "iframe_get"
  };
  var SHARED_IFRAME_PROPERTIES = dict({
    "frameborder": "0",
    "allowfullscreen": "",
    "allowtransparency": "",
    "scrolling": "no",
    "marginwidth": "0",
    "marginheight": "0"
  });
  var AnalyticsTrigger = {
    AD_REQUEST_START: "ad-request-start",
    AD_RESPONSE_END: "ad-response-end",
    AD_RENDER_START: "ad-render-start",
    AD_RENDER_END: "ad-render-end",
    AD_IFRAME_LOADED: "ad-iframe-loaded",
    AD_REFRESH: "ad-refresh"
  };
  var LIFECYCLE_STAGE_TO_ANALYTICS_TRIGGER = {
    "adRequestStart": AnalyticsTrigger.AD_REQUEST_START,
    "adRequestEnd": AnalyticsTrigger.AD_RESPONSE_END,
    "renderFriendlyStart": AnalyticsTrigger.AD_RENDER_START,
    "renderCrossDomainStart": AnalyticsTrigger.AD_RENDER_START,
    "renderSafeFrameStart": AnalyticsTrigger.AD_RENDER_START,
    "renderFriendlyEnd": AnalyticsTrigger.AD_RENDER_END,
    "renderCrossDomainEnd": AnalyticsTrigger.AD_RENDER_END,
    "friendlyIframeIniLoad": AnalyticsTrigger.AD_IFRAME_LOADED,
    "crossDomainIframeLoaded": AnalyticsTrigger.AD_IFRAME_LOADED
  };
  function protectFunctionWrapper(fn, inThis, onError2) {
    if (inThis === void 0) {
      inThis = void 0;
    }
    if (onError2 === void 0) {
      onError2 = void 0;
    }
    return function() {
      for (var _len = arguments.length, fnArgs = new Array(_len), _key = 0; _key < _len; _key++) {
        fnArgs[_key] = arguments[_key];
      }
      try {
        return fn.apply(inThis, fnArgs);
      } catch (err) {
        if (onError2) {
          try {
            fnArgs.unshift(err);
            return onError2.apply(inThis, fnArgs);
          } catch (captureErr) {
          }
        }
        return void 0;
      }
    };
  }
  var AmpA4A = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits4(AmpA4A2, _AMP$BaseElement);
    var _super = _createSuper4(AmpA4A2);
    function AmpA4A2(element) {
      var _this;
      _this = _super.call(this, element);
      devAssert2(AMP.AmpAdUIHandler);
      devAssert2(AMP.AmpAdXOriginIframeHandler);
      _this.keysetPromise_ = null;
      _this.adPromise_ = null;
      _this.promiseId_ = 0;
      _this.adUrl_ = null;
      _this.friendlyIframeEmbed_ = null;
      _this.uiHandler = null;
      _this.xOriginIframeHandler_ = null;
      _this.isVerifiedAmpCreative_ = false;
      _this.creativeBody_ = null;
      _this.creativeSize_ = null;
      _this.originalSlotSize_ = null;
      _this.experimentalNonAmpCreativeRenderMethod_ = _this.getNonAmpCreativeRenderingMethod();
      _this.getNow_ = _this.win.performance && _this.win.performance.now ? _this.win.performance.now.bind(_this.win.performance) : Date.now;
      _this.sentinel = generateSentinel(window);
      _this.isCollapsed_ = false;
      _this.iframe = null;
      _this.safeframeVersion = DEFAULT_SAFEFRAME_VERSION;
      _this.isRefreshing = false;
      _this.isRelayoutNeededFlag = false;
      _this.postAdResponseExperimentFeatures = {};
      _this.a4aAnalyticsConfig_ = null;
      _this.a4aAnalyticsElement_ = null;
      _this.isSinglePageStoryAd = false;
      _this.transferDomBody_ = null;
      _this.unobserveIntersections_ = null;
      return _this;
    }
    var _proto = AmpA4A2.prototype;
    _proto.getLayoutPriority = function getLayoutPriority() {
      var isPWA = !this.element.getAmpDoc().isSingleDoc();
      return isPWA ? LayoutPriority_Enum.METADATA : LayoutPriority_Enum.ADS;
    };
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return isLayoutSizeDefined(layout);
    };
    _proto.isRelayoutNeeded = function isRelayoutNeeded() {
      return this.isRelayoutNeededFlag;
    };
    _proto.buildCallback = function buildCallback() {
      var _this2 = this;
      this.creativeSize_ = {
        width: this.element.getAttribute("width"),
        height: this.element.getAttribute("height")
      };
      var upgradeDelayMs = Math.round(this.getResource().getUpgradeDelayMs());
      dev().info(TAG15, "upgradeDelay " + this.element.getAttribute("type") + ": " + upgradeDelayMs);
      this.uiHandler = new AMP.AmpAdUIHandler(this);
      this.uiHandler.validateStickyAd();
      if (!this.isInNoSigningExp()) {
        var verifier = signatureVerifierFor(this.win);
        this.keysetPromise_ = this.getAmpDoc().whenFirstVisible().then(function() {
          _this2.getSigningServiceNames().forEach(function(signingServiceName) {
            verifier.loadKeyset(signingServiceName);
          });
        });
      }
      this.a4aAnalyticsConfig_ = this.getA4aAnalyticsConfig();
      if (this.a4aAnalyticsConfig_) {
        this.a4aAnalyticsElement_ = insertAnalyticsElement(this.element, this.a4aAnalyticsConfig_, true);
      }
      this.isSinglePageStoryAd = this.element.hasAttribute("amp-story");
    };
    _proto.renderOutsideViewport = function renderOutsideViewport() {
      if (!this.isVerifiedAmpCreative_ && is3pThrottled(this.win) && !this.inNonAmpPreferenceExp()) {
        return false;
      }
      var elementCheck = getAmpAdRenderOutsideViewport(this.element);
      return elementCheck !== null ? elementCheck : _AMP$BaseElement.prototype.renderOutsideViewport.call(this);
    };
    _proto.isValidElement = function isValidElement() {
      return true;
    };
    _proto.getCreativeSize = function getCreativeSize() {
      return this.creativeSize_;
    };
    _proto.delayAdRequestEnabled = function delayAdRequestEnabled() {
      return false;
    };
    _proto.getPreconnectUrls = function getPreconnectUrls() {
      return [];
    };
    _proto.getPrefetchUrls = function getPrefetchUrls() {
      return [];
    };
    _proto.isAmpAdElement = function isAmpAdElement() {
      return this.element.tagName == "AMP-AD" || this.element.tagName == "AMP-EMBED";
    };
    _proto.preconnectCallback = function preconnectCallback(unusedOnLayout) {
      var _this3 = this;
      var preconnect = this.getPreconnectUrls();
      if (preconnect) {
        preconnect.forEach(function(p) {
          Services.preconnectFor(_this3.win).url(_this3.getAmpDoc(), p, true);
        });
      }
    };
    _proto.pauseCallback = function pauseCallback() {
      if (this.friendlyIframeEmbed_) {
        this.friendlyIframeEmbed_.pause();
      }
    };
    _proto.resumeCallback = function resumeCallback() {
      if (this.friendlyIframeEmbed_) {
        this.friendlyIframeEmbed_.resume();
        return;
      }
      var resource = this.getResource();
      if (resource.hasBeenMeasured() && !resource.isMeasureRequested()) {
        this.onLayoutMeasure();
      }
    };
    _proto.getResource = function getResource() {
      return this.element.getResources().getResourceForElement(this.element);
    };
    _proto.hasAdPromise = function hasAdPromise() {
      return !!this.adPromise_;
    };
    _proto.inNonAmpPreferenceExp = function inNonAmpPreferenceExp() {
      return !!this.postAdResponseExperimentFeatures["pref_neutral_enabled"] && ["adsense", "doubleclick"].includes(this.element.getAttribute("type"));
    };
    _proto.shouldInitializePromiseChain_ = function shouldInitializePromiseChain_() {
      var slotRect = this.getIntersectionElementLayoutBox();
      var fixedSizeZeroHeightOrWidth = this.getLayout() != Layout_Enum.FLUID && (slotRect.height == 0 || slotRect.width == 0);
      if (fixedSizeZeroHeightOrWidth || this.element.hasAttribute("hidden") || this.element.classList.contains("i-amphtml-hidden-by-media-query")) {
        dev().fine(TAG15, "onLayoutMeasure canceled due height/width 0", this.element);
        return false;
      }
      if (!this.uiHandler.isStickyAd() && !isAdPositionAllowed(this.element, this.win)) {
        user().warn(TAG15, "<" + this.element.tagName + "> is not allowed to be " + ("placed in elements with position: fixed or sticky: " + this.element));
        return false;
      }
      if (!this.isValidElement()) {
        user().warn(TAG15, this.element.getAttribute("type"), "Amp ad element ignored as invalid", this.element);
        return false;
      }
      return true;
    };
    _proto.onLayoutMeasure = function onLayoutMeasure() {
      this.initiateAdRequest();
    };
    _proto.whenWithinViewport = function whenWithinViewport2(viewport) {
      devAssert2(viewport !== false);
      var resource = this.getResource();
      if (getMode().localDev || getMode().test) {
        if (!resource.isLayoutPending() || viewport === true) {
          return resolvedPromise();
        }
        var viewportNum = dev().assertNumber(viewport);
        return whenWithinViewport(this.element, viewportNum);
      }
      return resource.whenWithinViewport(viewport);
    };
    _proto.initiateAdRequest = function initiateAdRequest() {
      var _this4 = this;
      if (this.xOriginIframeHandler_) {
        this.xOriginIframeHandler_.onLayoutMeasure();
      }
      if (this.adPromise_ || !this.shouldInitializePromiseChain_()) {
        return;
      }
      ++this.promiseId_;
      var checkStillCurrent = this.verifyStillCurrent();
      this.adPromise_ = this.getAmpDoc().whenFirstVisible().then(function() {
        checkStillCurrent();
        var delay = _this4.delayAdRequestEnabled();
        if (delay) {
          return _this4.whenWithinViewport(typeof delay == "number" ? delay : _this4.renderOutsideViewport());
        }
      }).then(function() {
        checkStillCurrent();
        var consentPolicyId = _AMP$BaseElement.prototype.getConsentPolicy.call(_this4);
        if (consentPolicyId) {
          var consentStatePromise = getConsentPolicyState(_this4.element, consentPolicyId).catch(function(err) {
            user().error(TAG15, "Error determining consent state", err);
            return CONSENT_POLICY_STATE.UNKNOWN;
          });
          var consentStringPromise = getConsentPolicyInfo(_this4.element, consentPolicyId).catch(function(err) {
            user().error(TAG15, "Error determining consent string", err);
            return null;
          });
          var consentMetadataPromise = getConsentMetadata(_this4.element, consentPolicyId).catch(function(err) {
            user().error(TAG15, "Error determining consent metadata", err);
            return null;
          });
          return Promise.all([consentStatePromise, consentStringPromise, consentMetadataPromise]);
        }
        return Promise.resolve([null, null, null]);
      }).then(function(consentResponse) {
        checkStillCurrent();
        var consentState = consentResponse[0];
        var consentString = consentResponse[1];
        var consentMetadata = consentResponse[2];
        var gdprApplies = consentMetadata ? consentMetadata["gdprApplies"] : consentMetadata;
        var additionalConsent = consentMetadata ? consentMetadata["additionalConsent"] : consentMetadata;
        var consentStringType = consentMetadata ? consentMetadata["consentStringType"] : consentMetadata;
        return _this4.getServeNpaSignal().then(function(npaSignal) {
          return _this4.getAdUrl({
            consentState: consentState,
            consentString: consentString,
            consentStringType: consentStringType,
            gdprApplies: gdprApplies,
            additionalConsent: additionalConsent
          }, _this4.tryExecuteRealTimeConfig_(consentState, consentString, consentMetadata), npaSignal);
        });
      }).then(function(adUrl) {
        checkStillCurrent();
        _this4.adUrl_ = adUrl;
        if (!_this4.isXhrAllowed() && !!_this4.adUrl_) {
          _this4.experimentalNonAmpCreativeRenderMethod_ = XORIGIN_MODE.IFRAME_GET;
          return Promise.reject(IFRAME_GET);
        }
        return adUrl && _this4.sendXhrRequest(adUrl);
      }).then(function(fetchResponse) {
        checkStillCurrent();
        _this4.maybeTriggerAnalyticsEvent_("adRequestEnd");
        if (!fetchResponse || !fetchResponse.arrayBuffer || fetchResponse.headers.has("amp-ff-empty-creative")) {
          _this4.forceCollapse();
          return Promise.reject(NO_CONTENT_RESPONSE);
        }
        if (fetchResponse.headers && fetchResponse.headers.has(EXPERIMENT_FEATURE_HEADER_NAME)) {
          _this4.populatePostAdResponseExperimentFeatures_(fetchResponse.headers.get(EXPERIMENT_FEATURE_HEADER_NAME));
        }
        if (getMode().localDev && _this4.win.location && _this4.win.location.search) {
          var match = /(?:\?|&)a4a_feat_exp=([^&]+)/.exec(_this4.win.location.search);
          if (match && match[1]) {
            dev().info(TAG15, "Using debug exp features: " + match[1]);
            _this4.populatePostAdResponseExperimentFeatures_(tryDecodeUriComponent(match[1]));
          }
        }
        var method = _this4.getNonAmpCreativeRenderingMethod(fetchResponse.headers.get(RENDERING_TYPE_HEADER));
        _this4.experimentalNonAmpCreativeRenderMethod_ = method;
        if (_this4.experimentalNonAmpCreativeRenderMethod_ == XORIGIN_MODE.NAMEFRAME) {
          Services.preconnectFor(_this4.win).preload(_this4.getAmpDoc(), getDefaultBootstrapBaseUrl(_this4.win, "nameframe"));
        }
        var safeframeVersionHeader = fetchResponse.headers.get(SAFEFRAME_VERSION_HEADER);
        if (/^[0-9-]+$/.test(safeframeVersionHeader) && safeframeVersionHeader != DEFAULT_SAFEFRAME_VERSION) {
          _this4.safeframeVersion = safeframeVersionHeader;
          Services.preconnectFor(_this4.win).preload(_this4.getAmpDoc(), _this4.getSafeframePath());
        }
        return fetchResponse;
      }).then(function(fetchResponse) {
        return _this4.isInNoSigningExp() ? _this4.streamResponse_(fetchResponse, checkStillCurrent) : _this4.startValidationFlow_(fetchResponse, checkStillCurrent);
      }).catch(function(error) {
        switch (error.message || error) {
          case IFRAME_GET:
          case NETWORK_FAILURE:
            return null;
          case INVALID_SPSA_RESPONSE:
          case NO_CONTENT_RESPONSE:
            return {
              minifiedCreative: "",
              customElementExtensions: [],
              customStylesheets: []
            };
        }
        _this4.promiseErrorHandler_(error);
        return null;
      });
    };
    _proto.isInNoSigningExp = function isInNoSigningExp() {
      return true;
    };
    _proto.skipClientSideValidation = function skipClientSideValidation(unusedHeaders) {
      return false;
    };
    _proto.streamResponse_ = function streamResponse_(httpResponse, checkStillCurrent) {
      var _this5 = this;
      if (httpResponse.status === 204) {
        this.forceCollapse();
        return Promise.reject(NO_CONTENT_RESPONSE);
      }
      var size = this.extractSize(httpResponse.headers);
      this.creativeSize_ = size || this.creativeSize_;
      if (!isPlatformSupported(this.win) || this.skipClientSideValidation(httpResponse.headers)) {
        return this.handleFallback_(httpResponse, checkStillCurrent);
      }
      var fallbackHttpResponse = httpResponse.clone();
      var transformStream = new DomTransformStream(this.win);
      var detachedStream = new DetachedDomStream(this.win, function(chunk) {
        return transformStream.onChunk(chunk);
      }, function(doc) {
        return transformStream.onEnd(doc);
      });
      this.transferDomBody_ = transformStream.transferBody.bind(transformStream);
      return streamResponseToWriter(this.win, httpResponse, detachedStream).then(function(responseBodyHasContent) {
        checkStillCurrent();
        if (!responseBodyHasContent) {
          _this5.forceCollapse();
          return Promise.reject(NO_CONTENT_RESPONSE);
        }
      }).then(function() {
        checkStillCurrent();
        return transformStream.waitForHead();
      }).then(function(head) {
        checkStillCurrent();
        return _this5.validateHeadElement_(head);
      }).then(function(sanitizedHeadElement) {
        checkStillCurrent();
        if (!sanitizedHeadElement) {
          return _this5.handleFallback_(fallbackHttpResponse, checkStillCurrent);
        }
        _this5.updateLayoutPriority(LayoutPriority_Enum.CONTENT);
        _this5.isVerifiedAmpCreative_ = true;
        return sanitizedHeadElement;
      });
    };
    _proto.handleFallback_ = function handleFallback_(fallbackHttpResponse, checkStillCurrent) {
      var _this6 = this;
      if (this.inNonAmpPreferenceExp()) {
        this.updateLayoutPriority(LayoutPriority_Enum.CONTENT);
      }
      return fallbackHttpResponse.arrayBuffer().then(function(domTextContent) {
        checkStillCurrent();
        _this6.creativeBody_ = domTextContent;
        return null;
      });
    };
    _proto.validateHeadElement_ = function validateHeadElement_(headElement) {
      return processHead(this.win, this.element, headElement);
    };
    _proto.startValidationFlow_ = function startValidationFlow_(fetchResponse, checkStillCurrent) {
      var _this7 = this;
      return fetchResponse.arrayBuffer().then(function(bytes) {
        if (bytes.byteLength == 0) {
          _this7.forceCollapse();
          return Promise.reject(NO_CONTENT_RESPONSE);
        }
        return {
          bytes: bytes,
          headers: fetchResponse.headers
        };
      }).then(function(responseParts) {
        checkStillCurrent();
        if (!responseParts) {
          return null;
        }
        var bytes = responseParts.bytes, headers = responseParts.headers;
        var size = _this7.extractSize(responseParts.headers);
        _this7.creativeSize_ = size || _this7.creativeSize_;
        if (_this7.experimentalNonAmpCreativeRenderMethod_ != XORIGIN_MODE.CLIENT_CACHE && bytes) {
          _this7.creativeBody_ = bytes;
        }
        return _this7.maybeValidateAmpCreative(bytes, headers);
      }).then(function(creative) {
        checkStillCurrent();
        _this7.isVerifiedAmpCreative_ = !!creative;
        return creative && utf8Decode(creative);
      }).then(function(creativeDecoded) {
        checkStillCurrent();
        var creativeMetaDataDef;
        if (!isPlatformSupported(_this7.win) || !creativeDecoded || !(creativeMetaDataDef = _this7.getAmpAdMetadata(creativeDecoded))) {
          if (_this7.inNonAmpPreferenceExp()) {
            _this7.updateLayoutPriority(LayoutPriority_Enum.CONTENT);
          }
          return null;
        }
        _this7.updateLayoutPriority(LayoutPriority_Enum.CONTENT);
        var extensions = getExtensionsFromMetadata(creativeMetaDataDef);
        preloadFriendlyIframeEmbedExtensions(_this7.win, extensions);
        (creativeMetaDataDef.customStylesheets || []).forEach(function(font) {
          return Services.preconnectFor(_this7.win).preload(_this7.getAmpDoc(), font.href);
        });
        var urls2 = Services.urlForDoc(_this7.element);
        (creativeMetaDataDef.images || []).forEach(function(image) {
          return urls2.isSecure(image) && Services.preconnectFor(_this7.win).preload(_this7.getAmpDoc(), image);
        });
        return creativeMetaDataDef;
      });
    };
    _proto.maybeValidateAmpCreative = function maybeValidateAmpCreative(bytes, headers) {
      var _this8 = this;
      var checkStillCurrent = this.verifyStillCurrent();
      return this.keysetPromise_.then(function() {
        if (_this8.element.getAttribute("type") == "fake" && !_this8.element.getAttribute("checksig")) {
          return Promise.resolve(VerificationStatus.OK);
        }
        return signatureVerifierFor(_this8.win).verify(bytes, headers);
      }).then(function(status) {
        checkStillCurrent();
        var result = null;
        switch (status) {
          case VerificationStatus.OK:
            result = bytes;
            break;
          case VerificationStatus.CRYPTO_UNAVAILABLE:
            result = _this8.shouldPreferentialRenderWithoutCrypto() ? bytes : null;
            break;
          case VerificationStatus.ERROR_KEY_NOT_FOUND:
          case VerificationStatus.ERROR_SIGNATURE_MISMATCH:
            user().error(TAG15, _this8.element.getAttribute("type"), "Signature verification failed");
          case VerificationStatus.UNVERIFIED:
        }
        if (_this8.isSinglePageStoryAd && !result) {
          throw new Error(INVALID_SPSA_RESPONSE);
        }
        return result;
      });
    };
    _proto.populatePostAdResponseExperimentFeatures_ = function populatePostAdResponseExperimentFeatures_(input) {
      var _this9 = this;
      input.split(",").forEach(function(line) {
        if (!line) {
          return;
        }
        var parts = line.split("=");
        if (parts.length != 2 || !parts[0]) {
          dev().warn(TAG15, "invalid experiment feature " + line);
          return;
        }
        _this9.postAdResponseExperimentFeatures[parts[0]] = parts[1];
      });
    };
    _proto.refresh = function refresh(refreshEndCallback) {
      var _this10 = this;
      devAssert2(!this.isRefreshing);
      this.isRefreshing = true;
      this.tearDownSlot();
      this.initiateAdRequest();
      if (!this.adPromise_) {
        return resolvedPromise();
      }
      var promiseId = this.promiseId_;
      return devAssert2(this.adPromise_).then(function() {
        if (!_this10.isRefreshing || promiseId != _this10.promiseId_) {
          refreshEndCallback();
          return;
        }
        return _this10.mutateElement(function() {
          triggerAnalyticsEvent(_this10.element, AnalyticsTrigger.AD_REFRESH);
          _this10.togglePlaceholder(true);
          return Services.timerFor(_this10.win).promise(1e3).then(function() {
            _this10.isRelayoutNeededFlag = true;
            _this10.getResource().layoutCanceled();
            _this10.getAmpDoc().whenNextVisible().then(function() {
              Services.ownersForDoc(_this10.getAmpDoc()).requireLayout(_this10.element);
            });
          });
        });
      });
    };
    _proto.promiseErrorHandler_ = function promiseErrorHandler_(error, opt_ignoreStack) {
      if (isCancellation(error)) {
        throw error;
      }
      if (error && error.message) {
        error = duplicateErrorIfNecessary(error);
      } else {
        error = new Error("unknown error " + error);
      }
      if (opt_ignoreStack) {
        error.ignoreStack = opt_ignoreStack;
      }
      var type = this.element.getAttribute("type") || "notype";
      if (error.message.indexOf(TAG15 + ": " + type + ":") != 0) {
        error.message = TAG15 + ": " + type + ": " + error.message;
      }
      assignAdUrlToError(error, this.adUrl_);
      if (getMode().development || getMode().localDev || logHashParam()) {
        user().error(TAG15, error);
      } else {
        user().warn(TAG15, error);
        if (Math.random() < 0.01) {
          dev().expectedError(TAG15, error);
        }
      }
    };
    _proto.layoutCallback = function layoutCallback() {
      var _this11 = this;
      if (this.isRefreshing) {
        this.destroyFrame(true);
      }
      return this.attemptToRenderCreative().then(function() {
        _this11.unobserveIntersections_ = observeIntersections(_this11.element, function(_ref) {
          var isIntersecting = _ref.isIntersecting;
          return _this11.viewportCallback(isIntersecting);
        });
      });
    };
    _proto.attemptToRenderCreative = function attemptToRenderCreative() {
      var _this12 = this;
      if (!this.adPromise_) {
        if (this.shouldInitializePromiseChain_()) {
          dev().error(TAG15, "Null promise in layoutCallback");
        }
        return resolvedPromise();
      }
      var checkStillCurrent = this.verifyStillCurrent();
      return Promise.all([this.adPromise_, this.uiHandler.getScrollPromiseForStickyAd()]).then(function(values) {
        checkStillCurrent();
        _this12.uiHandler.maybeInitStickyAd();
        var creativeMetaData = values[0];
        if (_this12.isCollapsed_) {
          return resolvedPromise();
        }
        if (_this12.iframe && !_this12.isRefreshing) {
          return resolvedPromise();
        }
        if (!creativeMetaData) {
          return _this12.renderNonAmpCreative();
        }
        var friendlyRenderPromise;
        if (_this12.isInNoSigningExp()) {
          friendlyRenderPromise = _this12.renderFriendlyTrustless_(creativeMetaData, checkStillCurrent);
        } else {
          friendlyRenderPromise = _this12.renderAmpCreative_(creativeMetaData);
        }
        return friendlyRenderPromise.catch(function(err) {
          checkStillCurrent();
          user().warn(TAG15, _this12.element.getAttribute("type"), "Error injecting creative in friendly frame", err);
          return _this12.renderNonAmpCreative();
        });
      }).catch(function(error) {
        _this12.promiseErrorHandler_(error);
        throw cancellation();
      });
    };
    _proto.isXhrAllowed = function isXhrAllowed() {
      return true;
    };
    _proto.attemptChangeSize = function attemptChangeSize(newHeight, newWidth) {
      this.originalSlotSize_ = this.originalSlotSize_ || this.getLayoutSize();
      return _AMP$BaseElement.prototype.attemptChangeSize.call(this, newHeight, newWidth);
    };
    _proto.unlayoutCallback = function unlayoutCallback() {
      var _this$unobserveInters;
      (_this$unobserveInters = this.unobserveIntersections_) == null ? void 0 : _this$unobserveInters.call(this);
      this.unobserveIntersections_ = null;
      this.tearDownSlot();
      return true;
    };
    _proto.tearDownSlot = function tearDownSlot() {
      var _this13 = this;
      this.promiseId_++;
      this.uiHandler.applyUnlayoutUI();
      if (this.originalSlotSize_) {
        _AMP$BaseElement.prototype.attemptChangeSize.call(this, this.originalSlotSize_.height, this.originalSlotSize_.width).then(function() {
          _this13.originalSlotSize_ = null;
        }).catch(function(err) {
          dev().warn(TAG15, "unable to revert to original size", err);
        });
      }
      this.isCollapsed_ = false;
      this.destroyFrame();
      this.adPromise_ = null;
      this.adUrl_ = null;
      this.creativeBody_ = null;
      this.isVerifiedAmpCreative_ = false;
      this.transferDomBody_ = null;
      this.experimentalNonAmpCreativeRenderMethod_ = this.getNonAmpCreativeRenderingMethod();
      this.postAdResponseExperimentFeatures = {};
    };
    _proto.detachedCallback = function detachedCallback() {
      _AMP$BaseElement.prototype.detachedCallback.call(this);
      this.destroyFrame(true);
    };
    _proto.destroyFrame = function destroyFrame(force) {
      if (force === void 0) {
        force = false;
      }
      if (!force && this.isRefreshing) {
        return;
      }
      if (this.friendlyIframeEmbed_) {
        this.friendlyIframeEmbed_.destroy();
        this.friendlyIframeEmbed_ = null;
      }
      if (this.iframe && this.iframe.parentElement) {
        this.iframe.parentElement.removeChild(this.iframe);
        this.iframe = null;
      }
      if (this.xOriginIframeHandler_) {
        this.xOriginIframeHandler_.freeXOriginIframe();
        this.xOriginIframeHandler_ = null;
      }
      if (this.uiHandler) {
        this.uiHandler.cleanup();
      }
    };
    _proto.viewportCallback = function viewportCallback(inViewport) {
      if (this.xOriginIframeHandler_) {
        this.xOriginIframeHandler_.viewportCallback(inViewport);
      }
    };
    _proto.getAdUrl = function getAdUrl(opt_ununsedConsentTuple, opt_rtcResponsesPromise, opt_serveNpaSignal) {
      throw new Error("getAdUrl not implemented!");
    };
    _proto.getServeNpaSignal = function getServeNpaSignal() {
      return Promise.resolve(false);
    };
    _proto.getBlockRtc_ = function getBlockRtc_() {
      var _this14 = this;
      if (!this.element.getAttribute("block-rtc")) {
        return Promise.resolve(false);
      }
      return Services.geoForDocOrNull(this.element).then(function(geoService) {
        userAssert(geoService, "%s: requires <amp-geo> to use `block-rtc`", TAG15);
        var blockRtcLocations = _this14.element.getAttribute("block-rtc");
        var locations = blockRtcLocations.split(",");
        for (var i = 0; i < locations.length; i++) {
          var geoGroup = geoService.isInCountryGroup(locations[i]);
          if (geoGroup === GEO_IN_GROUP.IN) {
            return true;
          } else if (geoGroup === GEO_IN_GROUP.NOT_DEFINED) {
            user().warn("AMP-AD", 'Geo group "' + locations[i] + '" was not defined.');
          }
        }
        return false;
      });
    };
    _proto.resetAdUrl = function resetAdUrl() {
      this.adUrl_ = null;
    };
    _proto.verifyStillCurrent = function verifyStillCurrent() {
      var _this15 = this;
      var promiseId = this.promiseId_;
      return function() {
        if (promiseId != _this15.promiseId_) {
          throw cancellation();
        }
      };
    };
    _proto.extractSize = function extractSize(responseHeaders) {
      var headerValue = responseHeaders.get(CREATIVE_SIZE_HEADER);
      if (!headerValue) {
        return null;
      }
      var match = /^([0-9]+)x([0-9]+)$/.exec(headerValue);
      if (!match) {
        user().error(TAG15, "Invalid size header: " + headerValue);
        return null;
      }
      return {
        width: Number(match[1]),
        height: Number(match[2])
      };
    };
    _proto.forceCollapse = function forceCollapse() {
      if (this.isRefreshing) {
        this.isRefreshing = false;
        return;
      }
      devAssert2(this.uiHandler);
      this.originalSlotSize_ = this.originalSlotSize_ || this.getLayoutSize();
      this.uiHandler.applyNoContentUI();
      this.isCollapsed_ = true;
    };
    _proto.onCreativeRender = function onCreativeRender(creativeMetaData, opt_onLoadPromise) {
      this.maybeTriggerAnalyticsEvent_(creativeMetaData ? "renderFriendlyEnd" : "renderCrossDomainEnd");
    };
    _proto.onCrossDomainIframeCreated = function onCrossDomainIframeCreated(iframe) {
      dev().info(TAG15, this.element.getAttribute("type"), "onCrossDomainIframeCreated " + iframe);
    };
    _proto.sandboxHTMLCreativeFrame = function sandboxHTMLCreativeFrame() {
      return true;
    };
    _proto.sendXhrRequest = function sendXhrRequest(adUrl) {
      var _this16 = this;
      this.maybeTriggerAnalyticsEvent_("adRequestStart");
      var xhrInit = {
        mode: "cors",
        method: "GET",
        credentials: "include"
      };
      return Services.xhrFor(this.win).fetch(adUrl, xhrInit).catch(function(error) {
        if (error.response && error.response.status > 200) {
          return null;
        }
        var networkFailureHandlerResult = _this16.onNetworkFailure(error, _this16.adUrl_);
        devAssert2(!!networkFailureHandlerResult);
        if (networkFailureHandlerResult.frameGetDisabled) {
          dev().info(TAG15, "frame get disabled as part of network failure handler");
          _this16.resetAdUrl();
        } else {
          _this16.adUrl_ = networkFailureHandlerResult.adUrl || _this16.adUrl_;
          return Promise.reject(NETWORK_FAILURE);
        }
        return null;
      });
    };
    _proto.onNetworkFailure = function onNetworkFailure(unusedError, unusedAdUrl) {
      return {};
    };
    _proto.getSigningServiceNames = function getSigningServiceNames() {
      return getMode().localDev ? ["google", "google-dev"] : ["google"];
    };
    _proto.renderNonAmpCreative = function renderNonAmpCreative(throttleApplied) {
      var _this17 = this;
      if (this.element.getAttribute("disable3pfallback") == "true") {
        user().warn(TAG15, this.element.getAttribute("type"), "fallback to 3p disabled");
        return Promise.resolve(false);
      }
      dev().warn(TAG15, "fallback to 3p");
      var method = this.experimentalNonAmpCreativeRenderMethod_;
      var renderPromise = Promise.resolve(false);
      if ((method == XORIGIN_MODE.SAFEFRAME || method == XORIGIN_MODE.NAMEFRAME) && this.creativeBody_) {
        renderPromise = this.renderViaNameAttrOfXOriginIframe_(this.creativeBody_);
        this.creativeBody_ = null;
      } else if (this.adUrl_) {
        assertHttpsUrl(this.adUrl_, this.element);
        renderPromise = this.renderViaIframeGet_(this.adUrl_);
      } else {
        user().warn(TAG15, this.element.getAttribute("type"), "No creative or URL available -- A4A can't render any ad");
      }
      if (!throttleApplied && !this.inNonAmpPreferenceExp()) {
        incrementLoadingAds(this.win, renderPromise);
      }
      return renderPromise.then(function(result) {
        _this17.maybeTriggerAnalyticsEvent_("crossDomainIframeLoaded");
        return result;
      });
    };
    _proto.renderFriendlyTrustless_ = function renderFriendlyTrustless_(headData, checkStillCurrent) {
      var _this18 = this;
      checkStillCurrent();
      devAssert2(this.element.ownerDocument);
      this.maybeTriggerAnalyticsEvent_("renderFriendlyStart");
      var _this$creativeSize_ = this.creativeSize_, height = _this$creativeSize_.height, width = _this$creativeSize_.width;
      var extensions = headData.extensions, fonts = headData.fonts, head = headData.head;
      this.iframe = createSecureFrame(this.win, this.getIframeTitle(), height, width);
      if (!this.uiHandler.isStickyAd()) {
        applyFillContent(this.iframe);
      }
      var body = "";
      var transferComplete = new Deferred();
      if (!isSrcdocSupported()) {
        body = head.ownerDocument.body.outerHTML;
        transferComplete.resolve();
      } else {
        listenOnce(this.iframe, "load", function() {
          var fieBody = _this18.iframe.contentDocument.body;
          _this18.transferDomBody_(devAssert2(fieBody)).then(transferComplete.resolve);
        });
      }
      var secureDoc = createSecureDocSkeleton(devAssert2(this.adUrl_), head.outerHTML, body);
      var fieInstallPromise = this.installFriendlyIframeEmbed_(secureDoc, extensions, fonts, true);
      Promise.all([fieInstallPromise, transferComplete.promise]).then(function(values) {
        var friendlyIframeEmbed = values[0];
        friendlyIframeEmbed && friendlyIframeEmbed.renderCompleted();
      });
      var extensionIds = extensions.map(function(extension) {
        return extension.extensionId;
      });
      return fieInstallPromise.then(function(friendlyIframeEmbed) {
        checkStillCurrent();
        _this18.makeFieVisible_(friendlyIframeEmbed, {
          minifiedCreative: "",
          customStylesheets: [],
          customElementExtensions: extensionIds
        }, checkStillCurrent);
      });
    };
    _proto.renderAmpCreative_ = function renderAmpCreative_(creativeMetaData) {
      var _this19 = this;
      devAssert2(creativeMetaData.minifiedCreative, "missing minified creative");
      devAssert2(!!this.element.ownerDocument, "missing owner document?!");
      this.maybeTriggerAnalyticsEvent_("renderFriendlyStart");
      this.iframe = createElementWithAttributes(this.element.ownerDocument, "iframe", dict({
        "height": this.creativeSize_.height,
        "width": this.creativeSize_.width,
        "frameborder": "0",
        "allowfullscreen": "",
        "allowtransparency": "",
        "scrolling": "no",
        "title": this.getIframeTitle(),
        "role": "region",
        "aria-label": "Advertisement",
        "tabindex": "0"
      }));
      if (!this.uiHandler.isStickyAd()) {
        applyFillContent(this.iframe);
      }
      var fontsArray = [];
      if (creativeMetaData.customStylesheets) {
        creativeMetaData.customStylesheets.forEach(function(s) {
          var href = s["href"];
          if (href) {
            fontsArray.push(href);
          }
        });
      }
      var checkStillCurrent = this.verifyStillCurrent();
      var minifiedCreative = creativeMetaData.minifiedCreative;
      var extensions = getExtensionsFromMetadata(creativeMetaData);
      return this.installFriendlyIframeEmbed_(minifiedCreative, extensions, fontsArray || [], false).then(function(friendlyIframeEmbed) {
        return _this19.makeFieVisible_(friendlyIframeEmbed, creativeMetaData, checkStillCurrent);
      });
    };
    _proto.installFriendlyIframeEmbed_ = function installFriendlyIframeEmbed_(html2, extensions, fonts, skipHtmlMerge) {
      var _this20 = this;
      return installFriendlyIframeEmbed(devAssert2(this.iframe), this.element, {
        host: this.element,
        url: devAssert2(this.adUrl_),
        html: html2,
        extensions: extensions,
        fonts: fonts,
        skipHtmlMerge: skipHtmlMerge
      }, function(embedWin, ampdoc2) {
        return _this20.preinstallCallback_(embedWin, ampdoc2);
      });
    };
    _proto.preinstallCallback_ = function preinstallCallback_(embedWin, ampdoc2) {
      var parentAmpdoc = this.getAmpDoc();
      installUrlReplacementsForEmbed(ampdoc2, new A4AVariableSource(parentAmpdoc, embedWin));
    };
    _proto.makeFieVisible_ = function makeFieVisible_(friendlyIframeEmbed, creativeMetaData, checkStillCurrent) {
      var _this21 = this;
      checkStillCurrent();
      this.friendlyIframeEmbed_ = friendlyIframeEmbed;
      var frameBody = this.getFieBody_(friendlyIframeEmbed);
      setStyle(frameBody, "visibility", "visible");
      protectFunctionWrapper(this.onCreativeRender, this, function(err) {
        dev().error(TAG15, _this21.element.getAttribute("type"), "Error executing onCreativeRender", err);
      })(creativeMetaData, friendlyIframeEmbed.whenWindowLoaded());
      friendlyIframeEmbed.whenIniLoaded().then(function() {
        checkStillCurrent();
        _this21.maybeTriggerAnalyticsEvent_("friendlyIframeIniLoad");
      });
    };
    _proto.getFieBody_ = function getFieBody_(friendlyIframeEmbed) {
      var frameDoc = friendlyIframeEmbed.iframe.contentDocument || friendlyIframeEmbed.win.document;
      return devAssert2(frameDoc.body);
    };
    _proto.iframeRenderHelper_ = function iframeRenderHelper_(attributes) {
      var _this22 = this;
      var mergedAttributes = Object.assign(attributes, dict({
        "height": this.creativeSize_.height,
        "width": this.creativeSize_.width,
        "title": this.getIframeTitle(),
        "role": "region",
        "aria-label": "Advertisement",
        "tabindex": "0"
      }));
      if (this.sentinel) {
        mergedAttributes["data-amp-3p-sentinel"] = this.sentinel;
      }
      var featurePolicies = "sync-xhr 'none';";
      if (isAttributionReportingSupported(this.win.document)) {
        featurePolicies += "attribution-reporting 'src';";
      }
      mergedAttributes["allow"] = featurePolicies;
      this.iframe = createElementWithAttributes(this.element.ownerDocument, "iframe", Object.assign(mergedAttributes, SHARED_IFRAME_PROPERTIES));
      if (this.sandboxHTMLCreativeFrame()) {
        applySandbox(this.iframe);
      }
      this.xOriginIframeHandler_ = new AMP.AmpAdXOriginIframeHandler(this);
      var frameLoadPromise = this.xOriginIframeHandler_.init(this.iframe, true, this.letCreativeTriggerRenderStart());
      protectFunctionWrapper(this.onCreativeRender, this, function(err) {
        dev().error(TAG15, _this22.element.getAttribute("type"), "Error executing onCreativeRender", err);
      })(null);
      return frameLoadPromise;
    };
    _proto.renderViaIframeGet_ = function renderViaIframeGet_(adUrl) {
      this.maybeTriggerAnalyticsEvent_("renderCrossDomainStart");
      var contextMetadata = getContextMetadata(this.win, this.element, this.sentinel);
      var intersection = this.element.getIntersectionChangeEntry();
      contextMetadata["_context"]["initialIntersection"] = intersectionEntryToJson(intersection);
      return this.iframeRenderHelper_(dict({
        "src": Services.xhrFor(this.win).getCorsUrl(this.win, adUrl),
        "name": JSON.stringify(contextMetadata)
      }));
    };
    _proto.letCreativeTriggerRenderStart = function letCreativeTriggerRenderStart() {
      return false;
    };
    _proto.renderViaNameAttrOfXOriginIframe_ = function renderViaNameAttrOfXOriginIframe_(creativeBody) {
      var _this23 = this;
      var method = this.experimentalNonAmpCreativeRenderMethod_;
      devAssert2(method == XORIGIN_MODE.SAFEFRAME || method == XORIGIN_MODE.NAMEFRAME, "Unrecognized A4A cross-domain rendering mode: %s", method);
      this.maybeTriggerAnalyticsEvent_("renderSafeFrameStart");
      var checkStillCurrent = this.verifyStillCurrent();
      return tryResolve(function() {
        return utf8Decode(creativeBody);
      }).then(function(creative) {
        checkStillCurrent();
        var srcPath;
        var name = "";
        switch (method) {
          case XORIGIN_MODE.SAFEFRAME:
            srcPath = _this23.getSafeframePath() + "?n=0";
            break;
          case XORIGIN_MODE.NAMEFRAME:
            srcPath = getDefaultBootstrapBaseUrl(_this23.win, "nameframe");
            break;
          default:
            user().error("A4A", "A4A received unrecognized cross-domain name attribute iframe rendering mode request: %s.  Unable to render a creative for slot %s.", method, _this23.element.getAttribute("id"));
            return Promise.reject("Unrecognized rendering mode request");
        }
        var contextMetadata = getContextMetadata(_this23.win, _this23.element, _this23.sentinel, _this23.getAdditionalContextMetadata(method == XORIGIN_MODE.SAFEFRAME));
        var intersection = _this23.element.getIntersectionChangeEntry();
        contextMetadata["initialIntersection"] = intersectionEntryToJson(intersection);
        if (method == XORIGIN_MODE.NAMEFRAME) {
          contextMetadata["creative"] = creative;
          name = JSON.stringify(contextMetadata);
        } else if (method == XORIGIN_MODE.SAFEFRAME) {
          contextMetadata = JSON.stringify(contextMetadata);
          name = _this23.safeframeVersion + ";" + creative.length + ";" + creative + ("" + contextMetadata);
        }
        return _this23.iframeRenderHelper_(dict({
          "src": srcPath,
          "name": name
        }));
      });
    };
    _proto.getAmpAdMetadata = function getAmpAdMetadata(creative) {
      var metadataStart = -1;
      var metadataString;
      for (var i = 0; i < METADATA_STRINGS.length; i++) {
        metadataString = METADATA_STRINGS[i];
        metadataStart = creative.lastIndexOf(metadataString);
        if (metadataStart >= 0) {
          break;
        }
      }
      if (metadataStart < 0) {
        dev().warn(TAG15, this.element.getAttribute("type"), "Could not locate start index for amp meta data in: %s", creative);
        return null;
      }
      var metadataEnd = creative.lastIndexOf("<\/script>");
      if (metadataEnd < 0) {
        dev().warn(TAG15, this.element.getAttribute("type"), "Could not locate closing script tag for amp meta data in: %s", creative);
        return null;
      }
      try {
        var metaDataObj = parseJson(creative.slice(metadataStart + metadataString.length, metadataEnd));
        var ampRuntimeUtf16CharOffsets = metaDataObj["ampRuntimeUtf16CharOffsets"];
        if (!isArray(ampRuntimeUtf16CharOffsets) || ampRuntimeUtf16CharOffsets.length != 2 || typeof ampRuntimeUtf16CharOffsets[0] !== "number" || typeof ampRuntimeUtf16CharOffsets[1] !== "number") {
          throw new Error("Invalid runtime offsets");
        }
        var metaData = {};
        if (metaDataObj["customElementExtensions"]) {
          metaData.customElementExtensions = metaDataObj["customElementExtensions"];
          if (!isArray(metaData.customElementExtensions)) {
            throw new Error("Invalid extensions", metaData.customElementExtensions);
          }
        } else {
          metaData.customElementExtensions = [];
        }
        if (metaDataObj["extensions"]) {
          metaData.extensions = metaDataObj["extensions"];
        }
        if (metaDataObj["customStylesheets"]) {
          metaData.customStylesheets = metaDataObj["customStylesheets"];
          var errorMsg = "Invalid custom stylesheets";
          if (!isArray(metaData.customStylesheets)) {
            throw new Error(errorMsg);
          }
          var urls2 = Services.urlForDoc(this.element);
          metaData.customStylesheets.forEach(function(stylesheet) {
            if (!isObject(stylesheet) || !stylesheet["href"] || typeof stylesheet["href"] !== "string" || !urls2.isSecure(stylesheet["href"])) {
              throw new Error(errorMsg);
            }
          });
        }
        if (isArray(metaDataObj["images"])) {
          metaData.images = metaDataObj["images"].splice(0, 5);
        }
        if (this.isSinglePageStoryAd) {
          if (!metaDataObj["ctaType"]) {
            throw new Error(INVALID_SPSA_RESPONSE);
          }
          this.element.setAttribute("data-vars-ctatype", metaDataObj["ctaType"]);
          this.element.setAttribute("data-vars-ctaurl", metaDataObj["ctaUrl"]);
        }
        metaData.minifiedCreative = creative.slice(0, ampRuntimeUtf16CharOffsets[0]) + creative.slice(ampRuntimeUtf16CharOffsets[1], metadataStart) + creative.slice(metadataEnd + "<\/script>".length);
        return metaData;
      } catch (err) {
        dev().warn(TAG15, this.element.getAttribute("type"), "Invalid amp metadata: %s", creative.slice(metadataStart + metadataString.length, metadataEnd));
        if (this.isSinglePageStoryAd) {
          throw err;
        }
        return null;
      }
    };
    _proto.getSafeframePath = function getSafeframePath() {
      return "https://tpc.googlesyndication.com/safeframe/" + (this.safeframeVersion + "/html/container.html");
    };
    _proto.maybeTriggerAnalyticsEvent_ = function maybeTriggerAnalyticsEvent_(lifecycleStage) {
      if (!this.a4aAnalyticsConfig_) {
        return;
      }
      var analyticsEvent = devAssert2(LIFECYCLE_STAGE_TO_ANALYTICS_TRIGGER[lifecycleStage]);
      var analyticsVars = Object.assign(dict({
        "time": Math.round(this.getNow_())
      }), this.getA4aAnalyticsVars(analyticsEvent));
      triggerAnalyticsEvent(this.element, analyticsEvent, analyticsVars);
    };
    _proto.getA4aAnalyticsVars = function getA4aAnalyticsVars(unusedAnalyticsEvent) {
      return dict({});
    };
    _proto.getA4aAnalyticsConfig = function getA4aAnalyticsConfig() {
      return null;
    };
    _proto.tryExecuteRealTimeConfig_ = function tryExecuteRealTimeConfig_(consentState, consentString, consentMetadata) {
      var _this24 = this;
      if (this.element.getAttribute("rtc-config")) {
        installRealTimeConfigServiceForDoc(this.getAmpDoc());
        return this.getBlockRtc_().then(function(shouldBlock) {
          return shouldBlock ? void 0 : Services.realTimeConfigForDoc(_this24.getAmpDoc()).then(function(realTimeConfig) {
            return realTimeConfig.maybeExecuteRealTimeConfig(_this24.element, _this24.getCustomRealTimeConfigMacros_(), consentState, consentString, consentMetadata, _this24.verifyStillCurrent());
          });
        });
      }
    };
    _proto.getCustomRealTimeConfigMacros_ = function getCustomRealTimeConfigMacros_() {
      return {};
    };
    _proto.shouldPreferentialRenderWithoutCrypto = function shouldPreferentialRenderWithoutCrypto() {
      return false;
    };
    _proto.getNonAmpCreativeRenderingMethod = function getNonAmpCreativeRenderingMethod(headerValue) {
      if (headerValue) {
        if (!isEnumValue(XORIGIN_MODE, headerValue)) {
          dev().error("AMP-A4A", "cross-origin render mode header " + headerValue);
        } else {
          return headerValue;
        }
      }
      return Services.platformFor(this.win).isIos() ? XORIGIN_MODE.NAMEFRAME : null;
    };
    _proto.getAdditionalContextMetadata = function getAdditionalContextMetadata(opt_isSafeframe) {
    };
    _proto.isVerifiedAmpCreative = function isVerifiedAmpCreative() {
      return this.isVerifiedAmpCreative_;
    };
    _proto.getIframeTitle = function getIframeTitle() {
      return this.element.getAttribute("title") || "3rd party ad content";
    };
    _proto.getSsrExpIds_ = function getSsrExpIds_() {
      var exps = [];
      var meta = this.getAmpDoc().getMetaByName("amp-usqp");
      if (meta) {
        var keyValues = meta.split(",");
        for (var i = 0; i < keyValues.length; i++) {
          var kv = keyValues[i].split("=");
          if (kv.length !== 2) {
            continue;
          }
          var val = Number(kv[1]);
          if (!isNaN(kv[0]) && val >= 0 && val < 100) {
            var padded = padStart(kv[1], 2, "0");
            exps.push(kv[0] + padded);
          }
        }
      }
      return exps;
    };
    return AmpA4A2;
  }(AMP.BaseElement);
  function assignAdUrlToError(error, adUrl) {
    if (!adUrl || error.args && error.args["au"]) {
      return;
    }
    var adQueryIdx = adUrl.indexOf("?");
    if (adQueryIdx == -1) {
      return;
    }
    (error.args || (error.args = {}))["au"] = adUrl.substring(adQueryIdx + 1, adQueryIdx + 251);
  }
  function signatureVerifierFor(win) {
    var propertyName = "AMP_FAST_FETCH_SIGNATURE_VERIFIER_";
    return win[propertyName] || (win[propertyName] = new SignatureVerifier(win, signingServerURLs));
  }
  function isPlatformSupported(win) {
    if (!isNative(win.Element.prototype.attachShadow) && isExperimentOn(win, "disable-a4a-non-sd")) {
      return false;
    }
    return true;
  }
  function isNative(func) {
    return !!func && func.toString().indexOf("[native code]") != -1;
  }

  // extensions/amp-ad-network-adsense-impl/0.1/amp-ad-network-adsense-impl.js
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
  function _inherits5(subClass2, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass2.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass2, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf5(subClass2, superClass);
  }
  function _setPrototypeOf5(o, p) {
    _setPrototypeOf5 = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
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
    _getPrototypeOf5 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf5(o);
  }
  var ADSENSE_BASE_URL = "https://googleads.g.doubleclick.net/pagead/ads";
  var TAG16 = "amp-ad-network-adsense-impl";
  var sharedState = new AdsenseSharedState();
  function resetSharedState() {
    sharedState.reset();
  }
  var AmpAdNetworkAdsenseImpl = /* @__PURE__ */ function(_AmpA4A) {
    _inherits5(AmpAdNetworkAdsenseImpl2, _AmpA4A);
    var _super = _createSuper5(AmpAdNetworkAdsenseImpl2);
    function AmpAdNetworkAdsenseImpl2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.uniqueSlotId_ = null;
      _this.ampAnalyticsConfig_ = null;
      _this.extensions_ = Services.extensionsFor(_this.win);
      _this.size_ = null;
      _this.ampAnalyticsElement_ = null;
      _this.qqid_ = null;
      _this.responsiveState_ = ResponsiveState.createIfResponsive(element);
      _this.identityTokenPromise_ = null;
      _this.isAmpCreative_ = null;
      _this.ifi_ = 0;
      _this.shouldSandbox_ = false;
      return _this;
    }
    var _proto = AmpAdNetworkAdsenseImpl2.prototype;
    _proto.isValidElement = function isValidElement() {
      if (this.responsiveState_ != null && !this.responsiveState_.isValidElement()) {
        return false;
      }
      if (!this.element.getAttribute("data-ad-client")) {
        return false;
      }
      return this.isAmpAdElement();
    };
    _proto.delayAdRequestEnabled = function delayAdRequestEnabled() {
      return getAmpAdRenderOutsideViewport(this.element) || 3;
    };
    _proto.buildCallback = function buildCallback() {
      var _this2 = this;
      _AmpA4A.prototype.buildCallback.call(this);
      maybeInsertOriginTrialToken(this.win);
      this.identityTokenPromise_ = this.getAmpDoc().whenFirstVisible().then(function() {
        return getIdentityToken(_this2.win, _this2.getAmpDoc(), _AmpA4A.prototype.getConsentPolicy.call(_this2));
      });
      if (this.element.hasAttribute("data-auto-format") && !ResponsiveState.isLayoutViewportNarrow(this.element)) {
        return ResponsiveState.convertToContainerWidth(this.element).then(function(state) {
          if (state != null) {
            _this2.responsiveState_ = state;
          }
          _this2.divertExperiments();
        });
      } else {
        return ResponsiveState.maybeUpgradeToResponsive(this.element, this.getAdClientId_()).then(function(state) {
          if (state != null) {
            _this2.responsiveState_ = state;
          }
          if (_this2.responsiveState_ != null) {
            return _this2.responsiveState_.attemptToMatchResponsiveHeight();
          }
          _this2.divertExperiments();
        });
      }
    };
    _proto.getConsentPolicy = function getConsentPolicy() {
      return null;
    };
    _proto.divertExperiments = function divertExperiments() {
      var _this3 = this;
      var experimentInfoList = [];
      var setExps = randomlySelectUnsetExperiments(this.win, experimentInfoList);
      Object.keys(setExps).forEach(function(expName) {
        return addExperimentIdToElement(setExps[expName], _this3.element);
      });
      var ssrExpIds = this.getSsrExpIds_();
      for (var i = 0; i < ssrExpIds.length; i++) {
        addAmpExperimentIdToElement(ssrExpIds[i], this.element);
      }
      var storyAdPlacementsExpId = getExperimentBranch(this.win, StoryAdPlacements.ID);
      if (storyAdPlacementsExpId) {
        addExperimentIdToElement(storyAdPlacementsExpId, this.element);
      }
      var autoAdvanceExpBranch = getExperimentBranch(this.win, StoryAdAutoAdvance.ID);
      if (autoAdvanceExpBranch) {
        addExperimentIdToElement(autoAdvanceExpBranch, this.element);
      }
      var storyAdSegmentBranch = getExperimentBranch(this.win, StoryAdSegmentExp.ID);
      if (storyAdSegmentBranch) {
        addExperimentIdToElement(storyAdSegmentBranch, this.element);
      }
    };
    _proto.getAdClientId_ = function getAdClientId_() {
      var adClientId = (this.element.getAttribute("data-ad-client") || "").toLowerCase();
      if (!/^ca-/i.test(adClientId)) {
        return "ca-" + adClientId;
      }
      return adClientId;
    };
    _proto.getAdUrl = function getAdUrl(consentTuple, opt_unusedRtcResponsesPromise, opt_serveNpaSignal) {
      var _this4 = this;
      var consentState = void 0;
      var consentString = void 0;
      var gdprApplies = void 0;
      var additionalConsent = void 0;
      var consentStringType = void 0;
      if (consentTuple) {
        consentState = consentTuple.consentState;
        consentString = consentTuple.consentString;
        gdprApplies = consentTuple.gdprApplies;
        additionalConsent = consentTuple.additionalConsent;
        consentStringType = consentTuple.consentStringType;
      }
      if (consentState == CONSENT_POLICY_STATE.UNKNOWN && this.element.getAttribute("data-npa-on-unknown-consent") != "true") {
        user().info(TAG16, "Ad request suppressed due to unknown consent");
        return Promise.resolve("");
      }
      var startTime = Date.now();
      var global = this.win;
      var adClientId = this.getAdClientId_();
      var adTestOn = this.element.getAttribute("data-adtest") || isInManualExperiment(this.element);
      var width = Number(this.element.getAttribute("width"));
      var height = Number(this.element.getAttribute("height"));
      if (this.responsiveState_ != null && this.responsiveState_.isContainerWidthState()) {
        this.size_ = {
          width: width,
          height: height
        };
      } else {
        this.size_ = this.getIntersectionElementLayoutBox();
      }
      var sizeToSend = this.isSinglePageStoryAd ? {
        width: 1,
        height: 1
      } : this.size_;
      var format = sizeToSend.width + "x" + sizeToSend.height;
      var slotId = this.element.getAttribute("data-amp-slot-index");
      var adk = this.adKey_(format);
      this.uniqueSlotId_ = slotId + adk;
      var slotname = this.element.getAttribute("data-ad-slot");
      var sharedStateParams = sharedState.addNewSlot(format, this.uniqueSlotId_, adClientId, slotname);
      var viewportSize = this.getViewport().getSize();
      if (!this.ifi_) {
        this.win["ampAdGoogleIfiCounter"] = this.win["ampAdGoogleIfiCounter"] || 1;
        this.ifi_ = this.win["ampAdGoogleIfiCounter"]++;
      }
      var enclosingContainers = getEnclosingContainerTypes(this.element);
      var pfx = enclosingContainers.includes(ValidAdContainerTypes["AMP-FX-FLYING-CARPET"]) || enclosingContainers.includes(ValidAdContainerTypes["AMP-STICKY-AD"]);
      var parameters = {
        "client": adClientId,
        "format": format,
        "w": sizeToSend.width,
        "h": sizeToSend.height,
        "ptt": 12,
        "iu": slotname,
        "fa": {
          bottom: 1,
          top: 2
        }[this.element.getAttribute("sticky")],
        "npa": consentState == CONSENT_POLICY_STATE.INSUFFICIENT || consentState == CONSENT_POLICY_STATE.UNKNOWN || !!opt_serveNpaSignal ? 1 : null,
        "adtest": adTestOn ? "on" : null,
        "adk": adk,
        "output": "html",
        "bc": global.SVGElement && global.document.createElementNS ? "1" : null,
        "ctypes": this.getCtypes_(),
        "host": this.element.getAttribute("data-ad-host"),
        "h_ch": this.element.getAttribute("data-ad-host-channel"),
        "hl": this.element.getAttribute("data-language"),
        "to": this.element.getAttribute("data-tag-origin"),
        "pv": sharedStateParams.pv,
        "channel": this.element.getAttribute("data-ad-channel"),
        "wgl": global["WebGLRenderingContext"] ? "1" : "0",
        "asnt": this.sentinel,
        "dff": computedStyle(this.win, this.element)["font-family"],
        "prev_fmts": sharedStateParams.prevFmts || null,
        "prev_slotnames": sharedStateParams.prevSlotnames || null,
        "brdim": additionalDimensions(this.win, viewportSize),
        "ifi": this.ifi_,
        "rafmt": this.responsiveState_ != null ? this.responsiveState_.getRafmtParam() : null,
        "gdpr": gdprApplies === true ? "1" : gdprApplies === false ? "0" : null,
        "gdpr_consent": consentStringType != CONSENT_STRING_TYPE.US_PRIVACY_STRING ? consentString : null,
        "addtl_consent": additionalConsent,
        "us_privacy": consentStringType == CONSENT_STRING_TYPE.US_PRIVACY_STRING ? consentString : null,
        "pfx": pfx ? "1" : "0",
        "aanf": /^(true|false)$/i.test(this.element.getAttribute("data-no-fill")) ? this.element.getAttribute("data-no-fill") : null,
        "crui": this.element.getAttribute("data-matched-content-ui-type"),
        "cr_row": this.element.getAttribute("data-matched-content-rows-num"),
        "cr_col": this.element.getAttribute("data-matched-content-columns-num"),
        "pwprc": this.element.getAttribute("data-package"),
        "spsa": this.isSinglePageStoryAd ? this.size_.width + "x" + this.size_.height : null
      };
      var experimentIds = [];
      var identityPromise = Services.timerFor(this.win).timeoutPromise(1e3, this.identityTokenPromise_).catch(function(unusedErr) {
        return {};
      });
      return identityPromise.then(function(identity) {
        return googleAdUrl(_this4, ADSENSE_BASE_URL, startTime, _extends7({
          "adsid": identity.token || null,
          "jar": identity.jar || null,
          "pucrd": identity.pucrd || null
        }, parameters), experimentIds);
      });
    };
    _proto.getServeNpaSignal = function getServeNpaSignal() {
      return getServeNpaPromise(this.element);
    };
    _proto.onNetworkFailure = function onNetworkFailure(error, adUrl) {
      dev().info(TAG16, "network error, attempt adding of error parameter", error);
      return {
        adUrl: maybeAppendErrorParameter(adUrl, "n")
      };
    };
    _proto.maybeValidateAmpCreative = function maybeValidateAmpCreative(bytes, headers) {
      if (headers.get("AMP-Verification-Checksum-Algorithm") !== "djb2a-32") {
        return _AmpA4A.prototype.maybeValidateAmpCreative.call(this, bytes, headers);
      }
      var checksum = headers.get("AMP-Verification-Checksum");
      return Promise.resolve(checksum && stringHash32(utf8Decode(bytes)) == checksum ? bytes : null);
    };
    _proto.extractSize = function extractSize(responseHeaders) {
      this.ampAnalyticsConfig_ = extractAmpAnalyticsConfig(this, responseHeaders);
      this.qqid_ = responseHeaders.get(QQID_HEADER);
      this.shouldSandbox_ = responseHeaders.get(SANDBOX_HEADER) == "true";
      if (this.ampAnalyticsConfig_) {
        this.extensions_.installExtensionForDoc(this.getAmpDoc(), "amp-analytics");
      }
      return this.size_;
    };
    _proto.skipClientSideValidation = function skipClientSideValidation(headers) {
      return headers && !headers.has(AMP_SIGNATURE_HEADER);
    };
    _proto.adKey_ = function adKey_(format) {
      var element = this.element;
      var slot = element.getAttribute("data-ad-slot") || "";
      var string = slot + ":" + format + ":" + domFingerprintPlain(element);
      return stringHash32(string);
    };
    _proto.getCtypes_ = function getCtypes_() {
      if (!getMode().localDev) {
        return null;
      }
      var ctypesReMatch = /[?&]force_a4a_ctypes=([^&]+)/.exec(this.win.location.search);
      if (ctypesReMatch) {
        return ctypesReMatch[1];
      }
      return null;
    };
    _proto.isXhrAllowed = function isXhrAllowed() {
      return isCdnProxy(this.win);
    };
    _proto.sandboxHTMLCreativeFrame = function sandboxHTMLCreativeFrame() {
      return this.shouldSandbox_;
    };
    _proto.onCreativeRender = function onCreativeRender(creativeMetaData) {
      _AmpA4A.prototype.onCreativeRender.call(this, creativeMetaData);
      if (this.iframe != null) {
        ResponsiveState.maybeAttachSettingsListener(this.element, this.iframe, this.getAdClientId_());
      }
      this.isAmpCreative_ = !!creativeMetaData;
      if (creativeMetaData && !creativeMetaData.customElementExtensions.includes("amp-ad-exit")) {
        devAssert2(this.iframe);
        Navigation.installAnchorClickInterceptor(this.getAmpDoc(), devAssert2(this.iframe.contentWindow));
      }
      if (this.ampAnalyticsConfig_) {
        devAssert2(!this.ampAnalyticsElement_);
        if (isReportingEnabled(this)) {
          addCsiSignalsToAmpAnalyticsConfig(this.win, this.element, this.ampAnalyticsConfig_, this.qqid_, !!creativeMetaData);
        }
        this.ampAnalyticsElement_ = insertAnalyticsElement(this.element, this.ampAnalyticsConfig_, true, !!this.postAdResponseExperimentFeatures["avr_disable_immediate"]);
      }
      setStyles(dev().assertElement(this.iframe), {
        width: this.size_.width + "px",
        height: this.size_.height + "px"
      });
      if (this.qqid_) {
        this.element.setAttribute("data-google-query-id", this.qqid_);
      }
      dev().assertElement(this.iframe).id = "google_ads_iframe_" + this.ifi_;
    };
    _proto.unlayoutCallback = function unlayoutCallback() {
      if (this.isAmpCreative_) {
        return false;
      }
      var superResult = _AmpA4A.prototype.unlayoutCallback.call(this);
      this.element.setAttribute("data-amp-slot-index", this.win.ampAdSlotIdCounter++);
      if (this.uniqueSlotId_) {
        sharedState.removeSlot(this.uniqueSlotId_);
      }
      if (this.ampAnalyticsElement_) {
        removeElement(this.ampAnalyticsElement_);
        this.ampAnalyticsElement_ = null;
      }
      this.ampAnalyticsConfig_ = null;
      this.qqid_ = null;
      this.isAmpCreative_ = null;
      this.shouldSandbox_ = false;
      return superResult;
    };
    _proto.onLayoutMeasure = function onLayoutMeasure() {
      _AmpA4A.prototype.onLayoutMeasure.call(this);
      this.responsiveState_ && this.responsiveState_.alignToViewport();
    };
    _proto.getPreconnectUrls = function getPreconnectUrls() {
      Services.preconnectFor(this.win).preload(this.getAmpDoc(), getDefaultBootstrapBaseUrl(this.win, "nameframe"));
      return ["https://googleads.g.doubleclick.net"];
    };
    _proto.getA4aAnalyticsVars = function getA4aAnalyticsVars(analyticsTrigger) {
      return getCsiAmpAnalyticsVariables(analyticsTrigger, this, this.qqid_);
    };
    _proto.getA4aAnalyticsConfig = function getA4aAnalyticsConfig() {
      return getCsiAmpAnalyticsConfig();
    };
    _proto.letCreativeTriggerRenderStart = function letCreativeTriggerRenderStart() {
      var _this5 = this;
      if (this.element && this.element.parentElement && this.element.parentElement.tagName == "AMP-STICKY-AD") {
        var stickyMsgListener = function stickyMsgListener2(event) {
          if (getData(event) == "fill_sticky" && event["source"] == _this5.iframe.contentWindow) {
            _this5.renderStarted();
            setStyles(_this5.iframe, {
              "visibility": ""
            });
            _this5.win.removeEventListener("message", stickyMsgListener2);
          }
        };
        this.win.addEventListener("message", stickyMsgListener);
        return true;
      }
      return false;
    };
    return AmpAdNetworkAdsenseImpl2;
  }(AmpA4A);
  AMP.registerElement(TAG16, AmpAdNetworkAdsenseImpl);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-ad-network-adsense-impl-0.1.max.js.map
