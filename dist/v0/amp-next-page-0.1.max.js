(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-next-page",ev:"0.1",l:false,f:(function(AMP,_){
(function() {
  // src/core/constants/consent-state.js
  var CONSENT_POLICY_STATE = {
    SUFFICIENT: 1,
    INSUFFICIENT: 2,
    UNKNOWN_NOT_REQUIRED: 3,
    UNKNOWN: 4
  };

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

  // src/core/types/array.js
  function toArray(arrayLike) {
    return arrayLike ? Array.prototype.slice.call(arrayLike) : [];
  }
  var isArray = Array.isArray;
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
  function fromIterator(iterator) {
    var array = [];
    for (var e = iterator.next(); !e.done; e = iterator.next()) {
      array.push(e.value);
    }
    return array;
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

  // src/core/types/string/index.js
  function endsWith(string, suffix) {
    var index = string.length - suffix.length;
    return index >= 0 && string.indexOf(suffix, index) == index;
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
    error.messageArray = remove(messageArray, function(x) {
      return x !== "";
    });
    self.__AMP_REPORT_ERROR == null ? void 0 : self.__AMP_REPORT_ERROR(error);
    throw error;
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

  // src/core/assert/user.js
  function userAssert(shouldBeTruthy, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    return assert(USER_ERROR_SENTINEL, shouldBeTruthy, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
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
    var elements = root.querySelectorAll(scopedSelector);
    root.classList.remove(unique);
    return elements;
  }
  function scopedQuerySelectorAll(root, selector) {
    if (isEsm() || isScopeSelectorSupported(root)) {
      return root.querySelectorAll(prependSelectorsWith(selector, ":scope"));
    }
    return scopedQuerySelectionFallback(root, selector);
  }
  function childElementsByAttr(parent, attr) {
    assertIsName(attr);
    return scopedQuerySelectorAll(parent, "> [" + attr + "]");
  }
  function childElementsByTag(parent, tagName) {
    assertIsName(tagName);
    return scopedQuerySelectorAll(parent, "> " + tagName);
  }
  function elementByTag(element, tagName) {
    assertIsName(tagName);
    return element.querySelector(tagName);
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
  function isConnectedNode(node) {
    var connected = node.isConnected;
    if (connected !== void 0) {
      return connected;
    }
    var n = node;
    do {
      n = rootNodeFor(n);
      if (n.host) {
        n = n.host;
      } else {
        break;
      }
    } while (true);
    return n.nodeType === Node.DOCUMENT_NODE;
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

  // src/core/types/function/index.js
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

  // src/service-helpers.js
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
  function isDisposable(service2) {
    return typeof service2.dispose == "function";
  }
  function assertDisposable(service2) {
    devAssert2(isDisposable(service2), "required to implement Disposable");
    return service2;
  }
  function disposeServicesForDoc(ampdoc2) {
    disposeServicesInternal(ampdoc2);
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
  function disposeServiceInternal(id, service2) {
    if (!isDisposable(service2)) {
      return;
    }
    try {
      assertDisposable(service2).dispose();
    } catch (e) {
      dev().error("SERVICE", "failed to dispose service", id, e);
    }
  }
  function isServiceRegistered(holder, id) {
    var service2 = holder.__AMP_SERVICES && holder.__AMP_SERVICES[id];
    return !!(service2 && service2.ctor);
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

  // src/experiments/index.js
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
        for (var _iterator = _createForOfIteratorHelperLoose2(optedInExperiments), _step; !(_step = _iterator()).done; ) {
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
      for (var _iterator2 = _createForOfIteratorHelperLoose2(allowedUrlOptIn), _step2; !(_step2 = _iterator2()).done; ) {
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
      dev().warn(TAG, "Failed to retrieve experiments from localStorage.");
    }
    var tokens = ((_experimentsString = experimentsString) == null ? void 0 : _experimentsString.split(/\s*,\s*/g)) || [];
    var toggles = map();
    for (var _iterator3 = _createForOfIteratorHelperLoose2(tokens), _step3; !(_step3 = _iterator3()).done; ) {
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

  // src/element-service.js
  function getElementServiceIfAvailable(win, id, extension, version2, opt_element) {
    var s = getServicePromiseOrNull(win, id);
    if (s) {
      return s;
    }
    return getElementServicePromiseOrNull(win, id, extension, version2, opt_element);
  }
  function getElementServiceForDoc(element, id, extension, opt_element) {
    return getElementServiceIfAvailableForDoc(element, id, extension, opt_element).then(function(service2) {
      return assertService(service2, id, extension);
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
  function assertService(service2, id, extension) {
    return userAssert2(service2, "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.", id, extension, extension, extension);
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
  function ampdocServiceForInternal(window) {
    return getService(window, "ampdoc");
  }
  function ampdocInternal(nodeOrAmpDoc) {
    return getAmpdoc(nodeOrAmpDoc);
  }
  function extensionsForInternal(window) {
    return getService(window, "extensions");
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
    batchedXhrFor: function batchedXhrFor(window) {
      return getService(window, "batched-xhr");
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
    cryptoFor: function cryptoFor(window) {
      return getService(window, "crypto");
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
    performanceFor: function performanceFor(window) {
      return getService(window, "performance");
    },
    performanceForOrNull: function performanceForOrNull(window) {
      return getExistingServiceOrNull(window, "performance");
    },
    platformFor: function platformFor(window) {
      return getService(window, "platform");
    },
    positionObserverForDoc: function positionObserverForDoc(element) {
      return getServiceForDoc(element, "position-observer");
    },
    preconnectFor: function preconnectFor(window) {
      return getService(window, "preconnect");
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
    timerFor: function timerFor(window) {
      return getServiceInEmbedWin(window, "timer");
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
    vsyncFor: function vsyncFor(window) {
      return getService(window, "vsync");
    },
    viewportForDoc: function viewportForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "viewport");
    },
    xhrFor: function xhrFor(window) {
      return getService(window, "xhr");
    },
    cacheUrlServicePromiseForDoc: function cacheUrlServicePromiseForDoc(elementOrAmpDoc) {
      return getServicePromiseForDoc(elementOrAmpDoc, "cache-url");
    }
  };

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
  var SOURCE_ORIGIN_PARAM = "__amp_source_origin";
  var urlAsLocation = function urlAsLocation2(url) {
    return typeof url == "string" ? parseUrlDeprecated(url) : url;
  };
  function getWinOrigin(win) {
    return win.origin || parseUrlDeprecated(win.location.href).origin;
  }
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
  function addParamToUrl(url, key, value, opt_addToFront) {
    return appendEncodedParamStringToUrl(url, urlEncodeKeyValue(key, value), opt_addToFront);
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
  function isProxyOrigin(url) {
    return urls.cdnProxyRegex.test(urlAsLocation(url).origin);
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
  function getCorsUrl(win, url) {
    checkCorsUrl(url);
    var sourceOrigin = getSourceOrigin(win.location.href);
    return addParamToUrl(url, SOURCE_ORIGIN_PARAM, sourceOrigin);
  }
  function checkCorsUrl(url) {
    var parsedUrl = parseUrlDeprecated(url);
    var query = parseQueryString(parsedUrl.search);
    userAssert2(!(SOURCE_ORIGIN_PARAM in query), "Source origin is not allowed in %s", url);
  }

  // extensions/amp-next-page/0.1/config.js
  var ADSENSE_REC_ORIGIN = "https://googleads.g.doubleclick.net";
  function assertConfig(context, config, documentUrl) {
    userAssert2(config, "amp-next-page config must be specified");
    userAssert2(isArray(config.pages), "pages must be an array");
    assertRecos(context, config.pages, documentUrl);
    if ("hideSelectors" in config) {
      userAssert2(isArray(config["hideSelectors"]), "amp-next-page hideSelectors should be an array");
      assertSelectors(config["hideSelectors"]);
    }
    return config;
  }
  function assertRecos(context, recos, documentUrl) {
    recos.forEach(function(reco) {
      return assertReco(context, reco, documentUrl);
    });
  }
  var BANNED_SELECTOR_PATTERNS = [/(^|\W)i-amphtml-/];
  function assertSelectors(selectors) {
    selectors.forEach(function(selector) {
      BANNED_SELECTOR_PATTERNS.forEach(function(pattern) {
        user().assertString(selector, "amp-next-page hideSelector value should be a string");
        userAssert2(!pattern.test(selector), "amp-next-page hideSelector %s not allowed", selector);
      });
    });
  }
  function assertReco(context, reco, documentUrl) {
    user().assertString(reco.ampUrl, "ampUrl must be a string");
    var base = getSourceUrl(documentUrl);
    reco.ampUrl = resolveRelativeUrl(reco.ampUrl, base);
    var urlService = Services.urlForDoc(context);
    var url = urlService.parse(reco.ampUrl);
    var _urlService$parse = urlService.parse(documentUrl), origin = _urlService$parse.origin;
    var sourceOrigin = getSourceOrigin(documentUrl);
    userAssert2(url.origin === origin || url.origin === sourceOrigin || isValidAdSenseURL(context, url, origin), "pages must be from the same origin as the current document");
    user().assertString(reco.image, "image must be a string");
    user().assertString(reco.title, "title must be a string");
    if (sourceOrigin !== origin && url.origin === sourceOrigin) {
      reco.ampUrl = origin + "/c/" + (url.protocol === "https:" ? "s/" : "") + encodeURIComponent(url.host) + url.pathname + (url.search || "") + (url.hash || "");
    }
  }
  function isValidAdSenseURL(context, url, origin) {
    var matches2 = url.search.match(/adurl=(.*)(?:&|$)/);
    if (!matches2) {
      return false;
    }
    var urlService = Services.urlForDoc(context);
    var targetUrl = urlService.parse(matches2[1]);
    return url.origin === ADSENSE_REC_ORIGIN && targetUrl.origin === origin;
  }

  // src/core/constants/visibility-state.js
  var VisibilityState_Enum = {
    PRERENDER: "prerender",
    VISIBLE: "visible",
    HIDDEN: "hidden",
    PAUSED: "paused",
    INACTIVE: "inactive"
  };

  // src/core/dom/layout/rect.js
  var RelativePositions_Enum = {
    INSIDE: "inside",
    TOP: "top",
    BOTTOM: "bottom"
  };
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
  function rectsOverlap(r1, r2) {
    return r1.top <= r2.bottom && r2.top <= r1.bottom && r1.left <= r2.right && r2.left <= r1.right;
  }
  function layoutRectsRelativePos(r1, r2) {
    if (r1.top < r2.top) {
      return RelativePositions_Enum.TOP;
    } else if (r1.bottom > r2.bottom) {
      return RelativePositions_Enum.BOTTOM;
    } else {
      return RelativePositions_Enum.INSIDE;
    }
  }
  function layoutRectEquals(r1, r2) {
    if (!r1 || !r2) {
      return false;
    }
    return r1.left == r2.left && r1.top == r2.top && r1.width == r2.width && r1.height == r2.height;
  }

  // src/core/dom/style.js
  var propertyNameCache;
  var vendorPrefixes = ["Webkit", "webkit", "Moz", "moz", "ms", "O", "o"];
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
  function setInitialDisplay(el, value) {
    var style = el.style;
    devAssert(value !== "" && value !== "none", 'Initial display value must not be "none". Use toggle instead.');
    devAssert(!style["display"], "setInitialDisplay MUST NOT be used for resetting the display style. If you are looking for display:none toggling, use toggle instead.");
    style["display"] = value;
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
  function isVar(property) {
    return property.startsWith("--");
  }

  // src/service/position-observer/position-observer-worker.js
  var PositionObserverFidelity_Enum = {
    HIGH: 1,
    LOW: 0
  };
  var LOW_FIDELITY_FRAME_COUNT = 4;
  var PositionObserverWorker = /* @__PURE__ */ function() {
    function PositionObserverWorker2(ampdoc2, element, fidelity, handler) {
      this.element = element;
      this.handler_ = handler;
      this.fidelity = fidelity;
      this.turn = fidelity == PositionObserverFidelity_Enum.LOW ? Math.floor(Math.random() * LOW_FIDELITY_FRAME_COUNT) : 0;
      this.prevPosition_ = null;
      this.viewport_ = Services.viewportForDoc(ampdoc2);
    }
    var _proto = PositionObserverWorker2.prototype;
    _proto.trigger_ = function trigger_(position) {
      var prevPos = this.prevPosition_;
      if (prevPos && layoutRectEquals(prevPos.positionRect, position.positionRect) && layoutRectEquals(prevPos.viewportRect, position.viewportRect)) {
        return;
      }
      devAssert2(position.positionRect, "PositionObserver should always trigger entry with clientRect");
      var positionRect = position.positionRect;
      position.relativePos = layoutRectsRelativePos(positionRect, position.viewportRect);
      if (rectsOverlap(positionRect, position.viewportRect)) {
        this.prevPosition_ = position;
        this.handler_(position);
      } else if (this.prevPosition_) {
        this.prevPosition_ = null;
        position.positionRect = null;
        this.handler_(position);
      }
    };
    _proto.update = function update(opt_force) {
      var _this = this;
      if (!opt_force) {
        if (this.turn != 0) {
          this.turn--;
          return;
        }
        if (this.fidelity == PositionObserverFidelity_Enum.LOW) {
          this.turn = LOW_FIDELITY_FRAME_COUNT;
        }
      }
      var viewportSize = this.viewport_.getSize();
      var viewportBox = layoutRectLtwh(0, 0, viewportSize.width, viewportSize.height);
      this.viewport_.getClientRectAsync(this.element).then(function(elementBox) {
        _this.trigger_({
          positionRect: elementBox,
          viewportRect: viewportBox,
          relativePos: null
        });
      });
    };
    return PositionObserverWorker2;
  }();

  // src/service/position-observer/position-observer-impl.js
  var TAG2 = "POSITION_OBSERVER";
  var SCROLL_TIMEOUT = 500;
  var PositionObserver = /* @__PURE__ */ function() {
    function PositionObserver2(ampdoc2) {
      var _this = this;
      this.ampdoc_ = ampdoc2;
      this.win_ = ampdoc2.win;
      this.workers_ = [];
      this.vsync_ = Services.vsyncFor(this.win_);
      this.viewport_ = Services.viewportForDoc(ampdoc2);
      this.unlisteners_ = [];
      this.inScroll_ = false;
      this.measure_ = false;
      this.callbackStarted_ = false;
      this.boundStopScroll_ = debounce(this.win_, function() {
        _this.inScroll_ = false;
      }, SCROLL_TIMEOUT);
    }
    var _proto = PositionObserver2.prototype;
    _proto.observe = function observe(element, fidelity, handler) {
      var _this2 = this;
      var worker = new PositionObserverWorker(this.ampdoc_, element, fidelity, handler);
      this.workers_.push(worker);
      if (!this.callbackStarted_) {
        this.startCallback_();
      }
      worker.update();
      return function() {
        for (var i = 0; i < _this2.workers_.length; i++) {
          if (_this2.workers_[i] == worker) {
            _this2.removeWorker_(i);
            return;
          }
        }
      };
    };
    _proto.unobserve = function unobserve(element) {
      for (var i = 0; i < this.workers_.length; i++) {
        if (this.workers_[i].element == element) {
          this.removeWorker_(i);
          return;
        }
      }
      dev().error(TAG2, "cannot unobserve unobserved element");
    };
    _proto.removeWorker_ = function removeWorker_(index) {
      this.workers_.splice(index, 1);
      if (this.workers_.length == 0) {
        this.stopCallback_();
      }
    };
    _proto.startCallback_ = function startCallback_() {
      var _this3 = this;
      this.callbackStarted_ = true;
      this.unlisteners_.push(this.viewport_.onScroll(function() {
        _this3.onScrollHandler_();
      }));
      this.unlisteners_.push(this.viewport_.onResize(function() {
        _this3.onResizeHandler_();
      }));
    };
    _proto.stopCallback_ = function stopCallback_() {
      this.callbackStarted_ = false;
      while (this.unlisteners_.length) {
        var unlisten = this.unlisteners_.pop();
        unlisten();
      }
    };
    _proto.updateAllEntries = function updateAllEntries(opt_force) {
      for (var i = 0; i < this.workers_.length; i++) {
        var worker = this.workers_[i];
        worker.update(opt_force);
      }
    };
    _proto.onScrollHandler_ = function onScrollHandler_() {
      this.boundStopScroll_();
      this.inScroll_ = true;
      if (!this.measure_) {
        this.schedulePass_();
      }
    };
    _proto.onResizeHandler_ = function onResizeHandler_() {
      this.updateAllEntries(true);
    };
    _proto.schedulePass_ = function schedulePass_() {
      var _this4 = this;
      this.updateAllEntries();
      this.measure_ = true;
      if (!this.inScroll_) {
        this.measure_ = false;
        return;
      }
      this.vsync_.measure(function() {
        _this4.schedulePass_();
      });
    };
    return PositionObserver2;
  }();
  function installPositionObserverServiceForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, "position-observer", PositionObserver);
  }

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

  // build/amp-next-page-0.1.css.js
  var CSS2 = ".amp-next-page-default-separator{border-bottom:1px solid rgba(0,0,0,0.12)}.amp-next-page-links{border-top:1px solid rgba(0,0,0,0.12)}.amp-next-page-link{border-bottom:1px solid rgba(0,0,0,0.12)}.amp-next-page-text{color:#3c4043;font-size:17px}.i-amphtml-next-page-document{overflow-y:hidden}.i-amphtml-next-page-document>[i-amphtml-fixedid]{display:none}.i-amphtml-next-page-hidden{display:none!important}.i-amphtml-next-page{background:#fff}.i-amphtml-next-page>[separator]{display:none}.i-amphtml-reco-holder-article{display:block;overflow:auto;padding:10px 0;text-decoration:none}.i-amphtml-next-article-image{width:72px;height:72px;float:left;margin:0 10px;background-size:cover;background-position:50%}.i-amphtml-next-article-title{position:relative;margin:5px 30px 5px 0}\n/*# sourceURL=/extensions/amp-next-page/0.1/amp-next-page.css*/";

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
      var cssText = "";
      if (cssRules) {
        Array.prototype.forEach.call(cssRules, function(rule) {
          if (rule.selectorText && (rule.style && rule.style.cssText !== void 0)) {
            cssText += this.scopeSelector(rule.selectorText, scopeSelector2, this.strictStyling, opt_transformer) + " {\n	";
            cssText += this.propertiesFromRule(rule) + "\n}\n\n";
          } else if (rule.type === CSSRule.MEDIA_RULE) {
            cssText += "@media " + rule.media.mediaText + " {\n";
            cssText += this.scopeRules(rule.cssRules, scopeSelector2);
            cssText += "\n}\n\n";
          } else {
            try {
              if (rule.cssText) {
                cssText += rule.cssText + "\n\n";
              }
            } catch (x) {
              if (rule.type === CSSRule.KEYFRAMES_RULE && rule.cssRules) {
                cssText += this.ieSafeCssTextFromKeyFrameRule(rule);
              }
            }
          }
        }, this);
      }
      return cssText;
    },
    ieSafeCssTextFromKeyFrameRule: function ieSafeCssTextFromKeyFrameRule(rule) {
      var cssText = "@keyframes " + rule.name + " {";
      Array.prototype.forEach.call(rule.cssRules, function(rule2) {
        cssText += " " + rule2.keyText + " {" + rule2.style.cssText + "}";
      });
      cssText += " }";
      return cssText;
    },
    scopeSelector: function scopeSelector(selector, _scopeSelector, strict, opt_transformer) {
      var r = [], parts = selector.split(",");
      parts.forEach(function(p) {
        p = p.trim();
        if (opt_transformer) {
          p = opt_transformer(p);
        }
        if (this.selectorNeedsScoping(p, _scopeSelector)) {
          p = strict && !p.match(polyfillHostNoCombinator) ? this.applyStrictSelectorScope(p, _scopeSelector) : this.applySelectorScope(p, _scopeSelector);
        }
        r.push(p);
      }, this);
      return r.join(", ");
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
      var r = [];
      for (var i = 0, s; s = scopeSelectorList[i]; i++) {
        r.push(this.applySimpleSelectorScope(selector, s));
      }
      return r.join(", ");
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
          var t = p.trim().replace(polyfillHostRe, "");
          if (t && splits.indexOf(t) < 0 && t.indexOf(attrName) < 0) {
            p = t.replace(/([^:]*)(:*)(.*)/, "$1" + attrName + "$2$3");
          }
          return p;
        }).join(sep);
      });
      return scoped;
    },
    propertiesFromRule: function propertiesFromRule(rule) {
      var cssText = rule.style.cssText;
      if (rule.style.content && !rule.style.content.match(/['"]+|attr/)) {
        cssText = cssText.replace(/content:[^;]*;/g, "content: '" + rule.style.content + "';");
      }
      var style = rule.style;
      for (var i in style) {
        if (style[i] === "initial") {
          cssText += i + ": initial; ";
        }
      }
      return cssText;
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

  // src/style-installer.js
  var TRANSFORMER_PROP = "__AMP_CSS_TR";
  var STYLE_MAP_PROP = "__AMP_CSS_SM";
  function installStylesForDoc(ampdoc2, cssText, cb, opt_isRuntimeCss, opt_ext) {
    var cssRoot = ampdoc2.getHeadNode();
    var style = insertStyleElement(cssRoot, maybeTransform(cssRoot, cssText), opt_isRuntimeCss || false, opt_ext || null);
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
  function insertStyleElement(cssRoot, cssText, isRuntimeCss, ext) {
    var styleMap = cssRoot[STYLE_MAP_PROP];
    if (!styleMap) {
      styleMap = cssRoot[STYLE_MAP_PROP] = map();
    }
    var isExtCss = !isRuntimeCss && ext && ext != "amp-custom" && ext != "amp-keyframes";
    var key = isRuntimeCss ? "amp-runtime" : isExtCss ? "amp-extension=" + ext : null;
    if (key) {
      var existing = getExistingStyleElement(cssRoot, styleMap, key);
      if (existing) {
        if (existing.tagName == "STYLE" && existing.textContent !== cssText) {
          existing.textContent = cssText;
        }
        return existing;
      }
    }
    var doc = cssRoot.ownerDocument || cssRoot;
    var style = doc.createElement("style");
    style.textContent = cssText;
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
  function installCssTransformer(cssRoot, transformer) {
    cssRoot[TRANSFORMER_PROP] = transformer;
  }
  function maybeTransform(cssRoot, cssText) {
    var transformer = cssRoot[TRANSFORMER_PROP];
    return transformer ? transformer(cssText) : cssText;
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

  // src/utils/dom-writer.js
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
  var DomWriterStreamer = /* @__PURE__ */ function() {
    function DomWriterStreamer2(win) {
      this.parser_ = win.document.implementation.createHTMLDocument("");
      this.parser_.open();
      this.vsync_ = Services.vsyncFor(win);
      this.boundMerge_ = this.merge_.bind(this);
      this.onBody_ = null;
      this.onBodyChunk_ = null;
      this.onEnd_ = null;
      this.mergeScheduled_ = false;
      this.success_ = resolvedPromise();
      this.eof_ = false;
      this.targetBody_ = null;
    }
    var _proto2 = DomWriterStreamer2.prototype;
    _proto2.onBody = function onBody(callback) {
      this.onBody_ = callback;
    };
    _proto2.onBodyChunk = function onBodyChunk(callback) {
      this.onBodyChunk_ = callback;
    };
    _proto2.onEnd = function onEnd(callback) {
      this.onEnd_ = callback;
    };
    _proto2.write = function write(chunk) {
      if (this.eof_) {
        throw new Error("closed already");
      }
      if (chunk) {
        this.parser_.write(chunk);
      }
      this.schedule_();
      return this.success_;
    };
    _proto2.close = function close() {
      this.parser_.close();
      this.eof_ = true;
      this.schedule_();
      return this.success_;
    };
    _proto2.abort = function abort(unusedReason) {
      throw new Error("Not implemented");
    };
    _proto2.releaseLock = function releaseLock() {
      throw new Error("Not implemented");
    };
    _proto2.schedule_ = function schedule_() {
      devAssert(this.onBody_ && this.onBodyChunk_ && this.onEnd_);
      if (!this.mergeScheduled_) {
        this.mergeScheduled_ = true;
        this.vsync_.mutate(this.boundMerge_);
      }
    };
    _proto2.merge_ = function merge_() {
      this.mergeScheduled_ = false;
      if (!this.targetBody_ && this.parser_.body) {
        this.targetBody_ = this.onBody_(this.parser_);
      }
      if (this.targetBody_) {
        var inputBody = dev().assertElement(this.parser_.body);
        var targetBody = devAssert(this.targetBody_);
        var transferCount = 0;
        removeNoScriptElements(inputBody);
        while (inputBody.firstChild) {
          transferCount++;
          targetBody.appendChild(inputBody.firstChild);
        }
        if (transferCount > 0) {
          this.onBodyChunk_();
        }
      }
      if (this.eof_) {
        this.onEnd_();
      }
    };
    _createClass(DomWriterStreamer2, [{
      key: "closed",
      get: function get() {
        throw new Error("Not implemented");
      }
    }, {
      key: "desiredSize",
      get: function get() {
        throw new Error("Not implemented");
      }
    }, {
      key: "ready",
      get: function get() {
        throw new Error("Not implemented");
      }
    }]);
    return DomWriterStreamer2;
  }();
  var DomWriterBulk = /* @__PURE__ */ function() {
    function DomWriterBulk2(win) {
      this.fullHtml_ = [];
      this.vsync_ = Services.vsyncFor(win);
      this.onBody_ = null;
      this.onBodyChunk_ = null;
      this.onEnd_ = null;
      this.success_ = resolvedPromise();
      this.eof_ = false;
    }
    var _proto3 = DomWriterBulk2.prototype;
    _proto3.onBody = function onBody(callback) {
      this.onBody_ = callback;
    };
    _proto3.onBodyChunk = function onBodyChunk(callback) {
      this.onBodyChunk_ = callback;
    };
    _proto3.onEnd = function onEnd(callback) {
      this.onEnd_ = callback;
    };
    _proto3.write = function write(chunk) {
      devAssert(this.onBody_ && this.onBodyChunk_ && this.onEnd_);
      if (this.eof_) {
        throw new Error("closed already");
      }
      if (chunk) {
        this.fullHtml_.push(dev().assertString(chunk));
      }
      return this.success_;
    };
    _proto3.close = function close() {
      var _this = this;
      devAssert(this.onBody_ && this.onBodyChunk_ && this.onEnd_);
      this.eof_ = true;
      this.vsync_.mutate(function() {
        return _this.complete_();
      });
      return this.success_;
    };
    _proto3.abort = function abort(unusedReason) {
      throw new Error("Not implemented");
    };
    _proto3.releaseLock = function releaseLock() {
      throw new Error("Not implemented");
    };
    _proto3.complete_ = function complete_() {
      var fullHtml = this.fullHtml_.join("");
      var doc = new DOMParser().parseFromString(fullHtml, "text/html");
      if (doc.body) {
        var inputBody = doc.body;
        var targetBody = this.onBody_(doc);
        var transferCount = 0;
        removeNoScriptElements(inputBody);
        while (inputBody.firstChild) {
          transferCount++;
          targetBody.appendChild(inputBody.firstChild);
        }
        if (transferCount > 0) {
          this.onBodyChunk_();
        }
      }
      this.onEnd_();
    };
    _createClass(DomWriterBulk2, [{
      key: "closed",
      get: function get() {
        throw new Error("Not implemented");
      }
    }, {
      key: "desiredSize",
      get: function get() {
        throw new Error("Not implemented");
      }
    }, {
      key: "ready",
      get: function get() {
        throw new Error("Not implemented");
      }
    }]);
    return DomWriterBulk2;
  }();
  function removeNoScriptElements(parent) {
    var noscriptElements = childElementsByTag(parent, "noscript");
    iterateCursor(noscriptElements, function(element) {
      removeElement(element);
    });
  }

  // src/shadow-embed.js
  var CSS_SELECTOR_BEG_REGEX = /[^\.\-\_0-9a-zA-Z]/;
  var CSS_SELECTOR_END_REGEX = /[^\-\_0-9a-zA-Z]/;
  var shadowDomStreamingSupported;
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
  function importShadowBody(shadowRoot, body, deep) {
    var doc = shadowRoot.ownerDocument;
    var resultBody;
    if (isShadowCssSupported()) {
      resultBody = dev().assertElement(doc.importNode(body, deep));
    } else {
      resultBody = doc.createElement("amp-body");
      setInitialDisplay(resultBody, "block");
      for (var i = 0; i < body.attributes.length; i++) {
        resultBody.setAttribute(body.attributes[0].name, body.attributes[0].value);
      }
      if (deep) {
        for (var n = body.firstChild; !!n; n = n.nextSibling) {
          resultBody.appendChild(doc.importNode(n, true));
        }
      }
    }
    setStyle(resultBody, "position", "relative");
    var oldBody = shadowRoot["body"];
    if (oldBody) {
      shadowRoot.removeChild(oldBody);
    }
    shadowRoot.appendChild(resultBody);
    Object.defineProperty(shadowRoot, "body", {
      configurable: true,
      value: resultBody
    });
    return resultBody;
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
  function isShadowDomStreamingSupported(win) {
    if (shadowDomStreamingSupported === void 0) {
      shadowDomStreamingSupported = calcShadowDomStreamingSupported(win);
    }
    return shadowDomStreamingSupported;
  }
  function calcShadowDomStreamingSupported(win) {
    if (!win.document.implementation || typeof win.document.implementation.createHTMLDocument != "function") {
      return false;
    }
    if (Services.platformFor(win).isFirefox()) {
      return false;
    }
    return true;
  }
  function createShadowDomWriter(win) {
    if (isShadowDomStreamingSupported(win)) {
      return new DomWriterStreamer(win);
    }
    return new DomWriterBulk(win);
  }

  // src/multidoc-manager.js
  var TAG3 = "multidoc-manager";
  var MultidocManager = /* @__PURE__ */ function() {
    function MultidocManager2(win, ampdocService, extensions, timer) {
      this.win = win;
      this.ampdocService_ = ampdocService;
      this.extensions_ = extensions;
      this.timer_ = timer;
      this.shadowRoots_ = [];
    }
    var _proto = MultidocManager2.prototype;
    _proto.attachShadowDoc_ = function attachShadowDoc_(hostElement, url, params, builder) {
      var _this = this;
      params = params || Object.create(null);
      this.purgeShadowRoots_();
      setStyle(hostElement, "visibility", "hidden");
      var shadowRoot = createShadowRoot(hostElement);
      if (shadowRoot.AMP) {
        user().warn(TAG3, "Shadow doc wasn't previously closed");
        this.closeShadowRoot_(shadowRoot);
      }
      var amp = {};
      shadowRoot.AMP = amp;
      amp.url = url;
      var _parseUrlDeprecated = parseUrlDeprecated(url), origin = _parseUrlDeprecated.origin;
      var ampdoc2 = this.ampdocService_.installShadowDoc(url, shadowRoot, {
        params: params
      });
      amp.ampdoc = ampdoc2;
      dev().fine(TAG3, "Attach to shadow root:", shadowRoot, ampdoc2);
      installStylesForDoc(ampdoc2, AMP.combinedCss, null, true);
      AMP.installAmpdocServices(ampdoc2);
      var viewer = Services.viewerForDoc(ampdoc2);
      amp["setVisibilityState"] = function(state) {
        ampdoc2.overrideVisibilityState(state);
      };
      amp["postMessage"] = viewer.receiveMessage.bind(viewer);
      var onMessage;
      amp["onMessage"] = function(callback) {
        onMessage = callback;
      };
      viewer.setMessageDeliverer(function(eventType, data, awaitResponse) {
        if (eventType == "broadcast") {
          _this.broadcast_(data, shadowRoot);
          return awaitResponse ? resolvedPromise() : void 0;
        }
        return onMessage == null ? void 0 : onMessage(eventType, data, awaitResponse);
      }, origin);
      amp["close"] = function() {
        return _this.closeShadowRoot_(shadowRoot);
      };
      if (getMode().development) {
        amp.toggleRuntime = viewer.toggleRuntime.bind(viewer);
        amp.resources = Services.resourcesForDoc(ampdoc2);
      }
      amp["getState"] = function(name) {
        return Services.bindForDocOrNull(shadowRoot).then(function(bind) {
          if (!bind) {
            return Promise.reject("amp-bind is not available in this document");
          }
          return bind.getState(name);
        });
      };
      amp["setState"] = function(state) {
        return Services.bindForDocOrNull(shadowRoot).then(function(bind) {
          if (!bind) {
            return Promise.reject("amp-bind is not available in this document");
          }
          if (typeof state === "string") {
            return bind.setStateWithExpression(state, {});
          } else if (isObject(state) || isArray(state)) {
            return bind.setStateWithObject(state);
          }
          return Promise.reject("Invalid state");
        });
      };
      builder(amp, shadowRoot, ampdoc2).then(function() {
        ampdoc2.setReady();
        ampdoc2.signals().signal(CommonSignals_Enum.RENDER_START);
        setStyle(hostElement, "visibility", "visible");
      });
      if (!this.shadowRoots_.includes(shadowRoot)) {
        this.shadowRoots_.push(shadowRoot);
      }
      dev().fine(TAG3, "Shadow root initialization is done:", shadowRoot, ampdoc2);
      return amp;
    };
    _proto.attachShadowDoc = function attachShadowDoc(hostElement, doc, url, opt_initParams) {
      var _this2 = this;
      user().assertString(url);
      dev().fine(TAG3, "Attach shadow doc:", doc);
      return this.attachShadowDoc_(hostElement, url, opt_initParams, function(amp, shadowRoot, ampdoc2) {
        _this2.mergeShadowHead_(ampdoc2, shadowRoot, doc);
        if (doc.body) {
          var body = importShadowBody(shadowRoot, doc.body, true);
          body.classList.add("amp-shadow");
          ampdoc2.setBody(body);
        }
        setTimeout(function() {
          ampdoc2.signals().signal(CommonSignals_Enum.RENDER_START);
          setStyle(hostElement, "visibility", "visible");
        }, 50);
        return resolvedPromise();
      });
    };
    _proto.attachShadowDocAsStream = function attachShadowDocAsStream(hostElement, url, opt_initParams) {
      var _this3 = this;
      user().assertString(url);
      dev().fine(TAG3, "Attach shadow doc as stream");
      return this.attachShadowDoc_(hostElement, url, opt_initParams, function(amp, shadowRoot, ampdoc2) {
        var renderStarted = false;
        var writer = createShadowDomWriter(_this3.win);
        amp["writer"] = writer;
        writer.onBody(function(doc) {
          _this3.mergeShadowHead_(ampdoc2, shadowRoot, doc);
          var body = importShadowBody(shadowRoot, dev().assertElement(doc.body), false);
          body.classList.add("amp-shadow");
          ampdoc2.setBody(body);
          return body;
        });
        writer.onBodyChunk(function() {
          if (!renderStarted) {
            renderStarted = true;
            setTimeout(function() {
              ampdoc2.signals().signal(CommonSignals_Enum.RENDER_START);
              setStyle(hostElement, "visibility", "visible");
            }, 50);
          }
        });
        return new Promise(function(resolve) {
          writer.onEnd(function() {
            resolve();
            amp.writer = null;
          });
        });
      });
    };
    _proto.mergeShadowHead_ = function mergeShadowHead_(ampdoc2, shadowRoot, doc) {
      if (doc.head) {
        shadowRoot.AMP.head = doc.head;
        var parentLinks = {};
        var links = childElementsByTag(dev().assertElement(this.win.document.head), "link");
        for (var i = 0; i < links.length; i++) {
          var href = links[i].getAttribute("href");
          if (href) {
            parentLinks[href] = true;
          }
        }
        for (var n = doc.head.firstElementChild; n; n = n.nextElementSibling) {
          var _n = n, tagName = _n.tagName;
          var name = n.getAttribute("name");
          var rel = n.getAttribute("rel");
          switch (tagName) {
            case "TITLE":
              shadowRoot.AMP.title = n.textContent;
              dev().fine(TAG3, "- set title: ", shadowRoot.AMP.title);
              break;
            case "META":
              if (n.hasAttribute("charset")) {
              } else if (name == "viewport") {
              } else if (name) {
                ampdoc2.setMetaByName(name, n.getAttribute("content") || "");
              } else {
                dev().warn(TAG3, "meta ignored: ", n);
              }
              break;
            case "LINK":
              var _href = n.getAttribute("href");
              if (rel == "canonical") {
                shadowRoot.AMP.canonicalUrl = _href;
                dev().fine(TAG3, "- set canonical: ", shadowRoot.AMP.canonicalUrl);
              } else if (rel == "stylesheet") {
                if (parentLinks[_href]) {
                  dev().fine(TAG3, "- stylesheet already included: ", _href);
                  installStylesForDoc(ampdoc2, '@import "' + _href + '"', null, false);
                } else {
                  parentLinks[_href] = true;
                  var el = this.win.document.createElement("link");
                  el.setAttribute("rel", "stylesheet");
                  el.setAttribute("type", "text/css");
                  el.setAttribute("href", _href);
                  this.win.document.head.appendChild(el);
                  dev().fine(TAG3, "- import font to parent: ", _href, el);
                }
              } else {
                dev().fine(TAG3, "- ignore link rel=", rel);
              }
              break;
            case "STYLE":
              if (n.hasAttribute("amp-boilerplate")) {
                dev().fine(TAG3, "- ignore boilerplate style: ", n);
              } else if (n.hasAttribute("amp-custom")) {
                installStylesForDoc(ampdoc2, n.textContent, null, false, "amp-custom");
                dev().fine(TAG3, "- import style: ", n);
              } else if (n.hasAttribute("amp-keyframes")) {
                installStylesForDoc(ampdoc2, n.textContent, null, false, "amp-keyframes");
                dev().fine(TAG3, "- import style: ", n);
              }
              break;
            case "SCRIPT":
              if (n.hasAttribute("src")) {
                dev().fine(TAG3, "- src script: ", n);
                var src = n.getAttribute("src");
                var urlParts = parseExtensionUrl(src);
                var customElement = n.getAttribute("custom-element");
                var customTemplate = n.getAttribute("custom-template");
                var extensionId = customElement || customTemplate;
                if (!urlParts) {
                  dev().fine(TAG3, "- ignore runtime script: ", src);
                } else if (extensionId) {
                  this.extensions_.installExtensionForDoc(ampdoc2, extensionId, urlParts.extensionVersion);
                } else if (!n.hasAttribute("data-amp-report-test")) {
                  user().error(TAG3, "- unknown script: ", n, src);
                }
              } else {
                var type = n.getAttribute("type") || "application/javascript";
                if (type.indexOf("javascript") == -1) {
                  shadowRoot.appendChild(this.win.document.importNode(n, true));
                  dev().fine(TAG3, "- non-src script: ", n);
                } else if (!n.hasAttribute("amp-onerror")) {
                  user().error(TAG3, "- unallowed inline javascript: ", n);
                }
              }
              break;
            case "NOSCRIPT":
              break;
            default:
              user().error(TAG3, "- UNKNOWN head element:", n);
              break;
          }
        }
      }
      ampdoc2.setExtensionsKnown();
    };
    _proto.broadcast_ = function broadcast_(data, sender) {
      var _this4 = this;
      this.purgeShadowRoots_();
      this.shadowRoots_.forEach(function(shadowRoot) {
        if (shadowRoot == sender) {
          return;
        }
        var viewer = Services.viewerForDoc(shadowRoot.AMP.ampdoc);
        _this4.timer_.delay(function() {
          viewer.receiveMessage("broadcast", data, false);
        }, 0);
      });
    };
    _proto.closeShadowRoot_ = function closeShadowRoot_(shadowRoot) {
      this.removeShadowRoot_(shadowRoot);
      var amp = shadowRoot.AMP;
      delete shadowRoot.AMP;
      var ampdoc2 = amp.ampdoc;
      ampdoc2.overrideVisibilityState(VisibilityState_Enum.INACTIVE);
      disposeServicesForDoc(ampdoc2);
      return this.timer_.timeoutPromise(15, new this.win.Promise(function(resolve) {
        getServicePromiseOrNullForDoc(ampdoc2, "resources").then(function(resources) {
          if (resources) {
            resources.onNextPass(resolve);
          } else {
            resolve();
          }
        });
      }), "Timeout reached waiting for visibility state change callback").catch(function(error) {
        user().info(TAG3, error);
      });
    };
    _proto.removeShadowRoot_ = function removeShadowRoot_(shadowRoot) {
      var index = this.shadowRoots_.indexOf(shadowRoot);
      if (index != -1) {
        this.shadowRoots_.splice(index, 1);
      }
    };
    _proto.closeShadowRootAsync_ = function closeShadowRootAsync_(shadowRoot) {
      var _this5 = this;
      this.timer_.delay(function() {
        _this5.closeShadowRoot_(shadowRoot);
      }, 0);
    };
    _proto.purgeShadowRoots_ = function purgeShadowRoots_() {
      var _this6 = this;
      this.shadowRoots_.forEach(function(shadowRoot) {
        if (!shadowRoot.host || !isConnectedNode(shadowRoot.host)) {
          user().warn(TAG3, "Shadow doc wasn't previously closed");
          _this6.removeShadowRoot_(shadowRoot);
          _this6.closeShadowRootAsync_(shadowRoot);
        }
      });
    };
    return MultidocManager2;
  }();

  // extensions/amp-next-page/0.1/next-page-service.js
  var SEPARATOR_RECOS = 3;
  var MAX_ARTICLES = 2;
  var PRERENDER_VIEWPORT_COUNT = 3;
  var TAG4 = "amp-next-page";
  var NextPageService = /* @__PURE__ */ function() {
    function NextPageService2() {
      this.win_ = null;
      this.element_ = null;
      this.xhr_ = null;
      this.config_ = null;
      this.hideSelector_;
      this.separator_ = null;
      this.mutator_ = null;
      this.multidocManager_ = null;
      this.nextArticle_ = 0;
      this.documentQueued_ = false;
      this.navigation_ = null;
      this.viewport_ = null;
      this.positionObserver_ = null;
      this.documentRefs_ = [];
      this.activeDocumentRef_ = null;
      this.appendPageHandler_ = function() {
      };
      this.urlService_ = null;
      this.origin_ = "";
      this.history_ = null;
    }
    var _proto = NextPageService2.prototype;
    _proto.isActive = function isActive() {
      return this.config_ !== null;
    };
    _proto.register = function register(element, config, separator) {
      var _this = this;
      if (this.isActive()) {
        return;
      }
      var ampDoc = getAmpdoc(element);
      var win = ampDoc.win;
      this.config_ = config;
      this.win_ = win;
      this.separator_ = separator || this.createDefaultSeparator_();
      this.element_ = element;
      this.xhr_ = Services.xhrFor(win);
      if (this.config_.hideSelectors) {
        this.hideSelector_ = this.config_.hideSelectors.join(",");
      }
      this.navigation_ = Services.navigationForDoc(ampDoc);
      this.viewport_ = Services.viewportForDoc(ampDoc);
      this.mutator_ = Services.mutatorForDoc(ampDoc);
      this.multidocManager_ = new MultidocManager(win, Services.ampdocServiceFor(win), Services.extensionsFor(win), Services.timerFor(win));
      this.urlService_ = Services.urlForDoc(dev().assertElement(this.element_));
      this.origin_ = this.urlService_.parse(ampDoc.getUrl()).origin;
      this.history_ = Services.historyForDoc(ampDoc);
      installPositionObserverServiceForDoc(ampDoc);
      this.positionObserver_ = Services.positionObserverForDoc(element);
      var _Services$documentInf = Services.documentInfoForDoc(ampDoc), canonicalUrl = _Services$documentInf.canonicalUrl;
      var documentRef = createDocumentRef(win.document.location.href, win.document.title, canonicalUrl);
      var amp = {
        ampdoc: ampDoc,
        url: win.document.location.href,
        title: win.document.title,
        canonicalUrl: canonicalUrl
      };
      documentRef.amp = amp;
      this.documentRefs_.push(documentRef);
      this.activeDocumentRef_ = this.documentRefs_[0];
      this.viewport_.onScroll(function() {
        return _this.scrollHandler_();
      });
      this.viewport_.onResize(function() {
        return _this.scrollHandler_();
      });
      this.scrollHandler_();
    };
    _proto.setAppendPageHandler = function setAppendPageHandler(handler) {
      this.appendPageHandler_ = handler;
    };
    _proto.attachShadowDoc_ = function attachShadowDoc_(shadowRoot, doc) {
      if (this.hideSelector_) {
        var elements = doc.querySelectorAll(this.hideSelector_);
        for (var i = 0; i < elements.length; i++) {
          elements[i].classList.add("i-amphtml-next-page-hidden");
        }
      }
      var analytics = doc.querySelectorAll("amp-analytics");
      for (var _i = 0; _i < analytics.length; _i++) {
        var item = analytics[_i];
        removeElement(item);
      }
      var amp = this.multidocManager_.attachShadowDoc(shadowRoot, doc, "", {
        visibilityState: VisibilityState_Enum.PRERENDER
      });
      var ampdoc2 = devAssert2(amp.ampdoc);
      installStylesForDoc(ampdoc2, CSS2, null, false, TAG4);
      var body = ampdoc2.getBody();
      body.classList.add("i-amphtml-next-page-document");
      return amp;
    };
    _proto.createMeasurer_ = function createMeasurer_() {
      var measurer = this.win_.document.createElement("div");
      measurer.classList.add("i-amphtml-next-page-measurer");
      return measurer;
    };
    _proto.createDefaultSeparator_ = function createDefaultSeparator_() {
      var separator = this.win_.document.createElement("div");
      separator.classList.add("amp-next-page-default-separator");
      return separator;
    };
    _proto.appendNextArticle_ = function appendNextArticle_() {
      var _this2 = this;
      if (this.nextArticle_ < this.config_.pages.length) {
        var next = this.config_.pages[this.nextArticle_];
        var documentRef = createDocumentRef(next.ampUrl);
        this.documentRefs_.push(documentRef);
        var container = this.win_.document.createElement("div");
        var measurer = this.createMeasurer_();
        container.appendChild(measurer);
        var separator = this.separator_.cloneNode(true);
        separator.removeAttribute("separator");
        container.appendChild(separator);
        var articleLinks = this.createArticleLinks_(this.nextArticle_);
        container.appendChild(articleLinks);
        documentRef.recUnit.el = articleLinks;
        var shadowRoot = this.win_.document.createElement("div");
        container.appendChild(shadowRoot);
        var page = this.nextArticle_;
        this.appendPageHandler_(container).then(function() {
          _this2.positionObserver_.observe(measurer, PositionObserverFidelity_Enum.LOW, function(position) {
            return _this2.positionUpdate_(page, position);
          });
          _this2.positionObserver_.observe(articleLinks, PositionObserverFidelity_Enum.LOW, function(unused) {
            return _this2.articleLinksPositionUpdate_(documentRef);
          });
        });
        if (this.nextArticle_ >= MAX_ARTICLES) {
          return;
        }
        this.nextArticle_++;
        this.xhr_.fetch(next.ampUrl, {
          ampCors: false
        }).then(function(response) {
          documentRef.ampUrl = response.url;
          var url = _this2.urlService_.parse(response.url);
          userAssert2(url.origin === _this2.origin_, "ampUrl resolved to a different origin from the origin of the current document");
          return response.text();
        }).then(function(html) {
          var doc = _this2.win_.document.implementation.createHTMLDocument("");
          doc.open();
          doc.write(html);
          doc.close();
          return doc;
        }).then(function(doc) {
          return new Promise(function(resolve, reject) {
            if (documentRef.cancelled) {
              resolve();
              return;
            }
            if (documentRef.recUnit.isObserving) {
              _this2.positionObserver_.unobserve(articleLinks);
              documentRef.recUnit.isObserving = true;
            }
            _this2.mutator_.mutateElement(container, function() {
              try {
                documentRef.amp = _this2.attachShadowDoc_(shadowRoot, doc);
                toggle(dev().assertElement(documentRef.recUnit.el), false);
                _this2.documentQueued_ = false;
                resolve();
              } catch (e) {
                reject(e);
              }
            });
          });
        }, function(e) {
          return user().error(TAG4, "failed to fetch %s", next.ampUrl, e);
        }).catch(function(e) {
          return dev().error(TAG4, "failed to attach shadow document for %s", next.ampUrl, e);
        }).then(function() {
          return _this2.scrollHandler_();
        });
      }
    };
    _proto.createArticleLinks_ = function createArticleLinks_(nextPage) {
      var _this3 = this;
      var doc = this.win_.document;
      var currentArticle = nextPage - 1;
      var article = nextPage;
      var currentAmpUrl = "";
      if (nextPage > 0) {
        currentAmpUrl = this.documentRefs_[currentArticle].ampUrl;
      }
      var element = doc.createElement("div");
      element.classList.add("amp-next-page-links");
      var _loop = function _loop2() {
        var next = _this3.config_.pages[article];
        article++;
        var articleHolder = doc.createElement("a");
        articleHolder.href = next.ampUrl;
        articleHolder.classList.add("i-amphtml-reco-holder-article", "amp-next-page-link");
        articleHolder.addEventListener("click", function(e) {
          _this3.triggerAnalyticsEvent_("amp-next-page-click", next.ampUrl, currentAmpUrl);
          var a2a = _this3.navigation_.navigateToAmpUrl(next.ampUrl, "content-discovery");
          if (a2a) {
            e.preventDefault();
          }
        });
        var imageElement = doc.createElement("div");
        imageElement.classList.add("i-amphtml-next-article-image", "amp-next-page-image");
        setStyle(imageElement, "background-image", "url(" + next.image + ")");
        articleHolder.appendChild(imageElement);
        var titleElement = doc.createElement("div");
        titleElement.classList.add("i-amphtml-next-article-title", "amp-next-page-text");
        titleElement.textContent = next.title;
        articleHolder.appendChild(titleElement);
        element.appendChild(articleHolder);
      };
      while (article < this.config_.pages.length && article - nextPage < SEPARATOR_RECOS) {
        _loop();
      }
      return element;
    };
    _proto.scrollHandler_ = function scrollHandler_() {
      var _this4 = this;
      if (this.documentQueued_) {
        return;
      }
      var viewportSize = this.viewport_.getSize();
      var viewportBox = layoutRectLtwh(0, 0, viewportSize.width, viewportSize.height);
      this.viewport_.getClientRectAsync(dev().assertElement(this.element_)).then(function(elementBox) {
        if (_this4.documentQueued_) {
          return;
        }
        var prerenderHeight = PRERENDER_VIEWPORT_COUNT * viewportSize.height;
        if (elementBox.bottom - viewportBox.bottom < prerenderHeight) {
          _this4.documentQueued_ = true;
          _this4.appendNextArticle_();
        }
      });
    };
    _proto.positionUpdate_ = function positionUpdate_(i, position) {
      if (!position || position.positionRect !== null) {
        return;
      }
      var ref = this.documentRefs_[i];
      var analyticsEvent = "";
      switch (position.relativePos) {
        case "top":
          ref = this.documentRefs_[i + 1];
          analyticsEvent = "amp-next-page-scroll";
          break;
        case "bottom":
          analyticsEvent = "amp-next-page-scroll-back";
          break;
        default:
          break;
      }
      if (ref && ref.amp) {
        this.triggerAnalyticsEvent_(analyticsEvent, ref.ampUrl, this.activeDocumentRef_.ampUrl);
        this.setActiveDocument_(ref);
      }
    };
    _proto.articleLinksPositionUpdate_ = function articleLinksPositionUpdate_(documentRef) {
      documentRef.cancelled = true;
      if (documentRef.recUnit.isObserving) {
        this.positionObserver_.unobserve(dev().assertElement(documentRef.recUnit.el));
        documentRef.recUnit.isObserving = false;
      }
    };
    _proto.setActiveDocument_ = function setActiveDocument_(ref) {
      var _this5 = this;
      this.documentRefs_.forEach(function(docRef) {
        var amp = docRef.amp;
        if (docRef === ref) {
          _this5.win_.document.title = amp.title || "";
          _this5.activeDocumentRef_ = docRef;
          _this5.setActiveDocumentInHistory_(docRef);
          _this5.setDocumentVisibility_(docRef, VisibilityState_Enum.VISIBLE);
        } else {
          _this5.setDocumentVisibility_(docRef, VisibilityState_Enum.HIDDEN);
        }
      });
    };
    _proto.setDocumentVisibility_ = function setDocumentVisibility_(ref, visibilityState) {
      if (ref === this.documentRefs_[0]) {
        return;
      }
      var ampDoc = ref.amp && ref.amp.ampdoc;
      if (!ampDoc) {
        return;
      }
      if (!ampDoc.hasBeenVisible() && visibilityState == VisibilityState_Enum.HIDDEN) {
        return;
      }
      ref.amp.setVisibilityState(visibilityState);
    };
    _proto.setActiveDocumentInHistory_ = function setActiveDocumentInHistory_(documentRef) {
      var _documentRef$amp = documentRef.amp, canonicalUrl = _documentRef$amp.canonicalUrl, title = _documentRef$amp.title;
      var _this$urlService_$par = this.urlService_.parse(documentRef.ampUrl), pathname = _this$urlService_$par.pathname, search = _this$urlService_$par.search;
      this.history_.replace({
        title: title,
        url: pathname + search,
        canonicalUrl: canonicalUrl
      });
    };
    _proto.triggerAnalyticsEvent_ = function triggerAnalyticsEvent_(eventType, toURL, fromURL) {
      fromURL = fromURL || "";
      var vars = dict({
        "toURL": toURL,
        "fromURL": fromURL
      });
      triggerAnalyticsEvent(dev().assertElement(this.element_), eventType, vars);
    };
    return NextPageService2;
  }();
  function createDocumentRef(ampUrl, title, canonicalUrl) {
    var amp = title || canonicalUrl ? {
      title: title,
      canonicalUrl: canonicalUrl
    } : null;
    return {
      ampUrl: ampUrl,
      amp: amp,
      recUnit: {
        el: null,
        isObserving: false
      },
      cancelled: false
    };
  }

  // src/batched-json.js
  var UrlReplacementPolicy_Enum = {
    NONE: 0,
    OPT_IN: 1,
    ALL: 2
  };
  function batchFetchJsonFor(ampdoc2, element, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$expr = _options.expr, expr = _options$expr === void 0 ? "." : _options$expr, _options$urlReplaceme = _options.urlReplacement, urlReplacement = _options$urlReplaceme === void 0 ? UrlReplacementPolicy_Enum.NONE : _options$urlReplaceme, _options$refresh = _options.refresh, refresh = _options$refresh === void 0 ? false : _options$refresh, _options$xssiPrefix = _options.xssiPrefix, xssiPrefix = _options$xssiPrefix === void 0 ? void 0 : _options$xssiPrefix;
    assertHttpsUrl(element.getAttribute("src"), element);
    var xhr = Services.batchedXhrFor(ampdoc2.win);
    return requestForBatchFetch(element, urlReplacement, refresh).then(function(data) {
      return xhr.fetchJson(data.xhrUrl, data.fetchOpt);
    }).then(function(res) {
      return Services.xhrFor(ampdoc2.win).xssiJson(res, xssiPrefix);
    }).then(function(data) {
      if (data == null) {
        throw new Error("Response is undefined.");
      }
      return getValueForExpr(data, expr || ".");
    }).catch(function(err) {
      throw user().createError("failed fetching JSON data", err);
    });
  }
  function requestForBatchFetch(element, replacement, refresh) {
    var url = element.getAttribute("src");
    var urlReplacements = Services.urlReplacementsForDoc(element);
    var promise = replacement >= UrlReplacementPolicy_Enum.OPT_IN ? urlReplacements.expandUrlAsync(url) : Promise.resolve(url);
    return promise.then(function(xhrUrl) {
      if (replacement == UrlReplacementPolicy_Enum.OPT_IN) {
        var invalid = urlReplacements.collectDisallowedVarsSync(element);
        if (invalid.length > 0) {
          throw user().createError("URL variable substitutions in CORS fetches from dynamic URLs (e.g. via amp-bind) require opt-in. " + ('Please add data-amp-replace="' + invalid.join(" ") + '" to the ') + ("<" + element.tagName + "> element. See https://bit.ly/amp-var-subs."));
        }
      }
      var fetchOpt = {};
      if (element.hasAttribute("credentials")) {
        fetchOpt.credentials = element.getAttribute("credentials");
      }
      if (refresh) {
        fetchOpt.cache = "reload";
      }
      return {
        "xhrUrl": xhrUrl,
        "fetchOpt": fetchOpt
      };
    });
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

  // src/form-data-wrapper.js
  function isFormDataWrapper(o) {
    return !!o && typeof o.getFormData == "function";
  }

  // src/utils/xhr-utils.js
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
  var allowedMethods_ = ["GET", "POST"];
  function toStructuredCloneable(input, init) {
    var newInit = _extends2({}, init);
    if (isFormDataWrapper(init.body)) {
      var wrapper = init.body;
      newInit.headers["Content-Type"] = "multipart/form-data;charset=utf-8";
      newInit.body = fromIterator(wrapper.entries());
    }
    return {
      input: input,
      init: newInit
    };
  }
  function fromStructuredCloneable(response, responseType) {
    userAssert(isObject(response), "Object expected: %s", response);
    var isDocumentType = responseType == "document";
    if (!isDocumentType) {
      return new Response(response["body"], response["init"]);
    }
    var lowercasedHeaders = map();
    var data = {
      status: 200,
      statusText: "OK",
      getResponseHeader: function getResponseHeader(name) {
        return lowercasedHeaders[String(name).toLowerCase()] || null;
      }
    };
    if (response["init"]) {
      var init = response["init"];
      if (isArray(init.headers)) {
        init.headers.forEach(function(entry) {
          var headerName = entry[0];
          var headerValue = entry[1];
          lowercasedHeaders[String(headerName).toLowerCase()] = String(headerValue);
        });
      }
      if (init.status) {
        data.status = parseInt(init.status, 10);
      }
      if (init.statusText) {
        data.statusText = String(init.statusText);
      }
    }
    return new Response(response["body"] ? String(response["body"]) : "", data);
  }
  function getViewerInterceptResponse(win, ampdocSingle, input, init) {
    if (!ampdocSingle) {
      return resolvedPromise();
    }
    var whenUnblocked = init.prerenderSafe ? resolvedPromise() : ampdocSingle.whenFirstVisible();
    var viewer = Services.viewerForDoc(ampdocSingle);
    var urlIsProxy = isProxyOrigin(input);
    var viewerCanIntercept = viewer.hasCapability("xhrInterceptor");
    var interceptorDisabledForLocalDev = init.bypassInterceptorForDev && getMode(win).localDev;
    if (urlIsProxy || !viewerCanIntercept || interceptorDisabledForLocalDev) {
      return whenUnblocked;
    }
    var htmlElement = ampdocSingle.getRootNode().documentElement;
    var docOptedIn = htmlElement.hasAttribute("allow-xhr-interception");
    if (!docOptedIn) {
      return whenUnblocked;
    }
    return whenUnblocked.then(function() {
      return viewer.isTrustedViewer();
    }).then(function(viewerTrusted) {
      if (!(viewerTrusted || getMode(win).localDev || isExperimentOn(win, "untrusted-xhr-interception"))) {
        return;
      }
      var messagePayload = dict({
        "originalRequest": toStructuredCloneable(input, init)
      });
      return viewer.sendMessageAwaitResponse("xhr", messagePayload).then(function(response) {
        return fromStructuredCloneable(response, init.responseType);
      });
    });
  }
  function setupInput(win, input, init) {
    devAssert(typeof input == "string", "Only URL supported: %s", input);
    if (init.ampCors !== false) {
      input = getCorsUrl(win, input);
    }
    return input;
  }
  function setupInit(opt_init, opt_accept) {
    var init = opt_init || {};
    var creds = init.credentials;
    devAssert(creds === void 0 || creds == "include" || creds == "omit", "Only credentials=include|omit support: %s", creds);
    init.method = normalizeMethod_(init.method);
    init.headers = init.headers || dict({});
    if (opt_accept) {
      init.headers["Accept"] = opt_accept;
    }
    devAssert(init.body !== null, "fetch `body` can not be `null`");
    return init;
  }
  function setupAMPCors(win, input, init) {
    init = init || {};
    var currentOrigin = getWinOrigin(win);
    var targetOrigin = parseUrlDeprecated(input).origin;
    if (currentOrigin == targetOrigin) {
      init["headers"] = init["headers"] || {};
      init["headers"]["AMP-Same-Origin"] = "true";
    }
    return init;
  }
  function normalizeMethod_(method) {
    if (method === void 0) {
      return "GET";
    }
    method = method.toUpperCase();
    devAssert(allowedMethods_.includes(method), "Only one of %s is currently allowed. Got %s", allowedMethods_.join(", "), method);
    return method;
  }
  function isRetriable(status) {
    return status == 415 || status >= 500 && status < 600;
  }
  function assertSuccess(response) {
    return new Promise(function(resolve) {
      if (response.ok) {
        return resolve(response);
      }
      var status = response.status;
      var err = user().createError("HTTP error " + status);
      err["retriable"] = isRetriable(status);
      err["response"] = response;
      throw err;
    });
  }

  // src/document-fetcher.js
  function fetchDocument(win, input, opt_init) {
    var init = setupInit(opt_init, "text/html");
    init = setupAMPCors(win, input, init);
    input = setupInput(win, input, init);
    var ampdocService = Services.ampdocServiceFor(win);
    var ampdocSingle = ampdocService.isSingleDoc() ? ampdocService.getSingleDoc() : null;
    init.responseType = "document";
    return getViewerInterceptResponse(win, ampdocSingle, input, init).then(function(interceptorResponse) {
      if (interceptorResponse) {
        return interceptorResponse.text().then(function(body) {
          return new DOMParser().parseFromString(body, "text/html");
        });
      }
      return xhrRequest(input, init).then(function(resp) {
        var xhr = resp.xhr;
        return xhr.responseXML;
      });
    });
  }
  function xhrRequest(input, init) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open(init.method || "GET", input, true);
      xhr.withCredentials = init.credentials == "include";
      xhr.responseType = "document";
      for (var header in init.headers) {
        xhr.setRequestHeader(header, init.headers[header]);
      }
      xhr.onreadystatechange = function() {
        if (xhr.readyState < 2) {
          return;
        }
        if (xhr.status < 100 || xhr.status > 599) {
          xhr.onreadystatechange = null;
          reject(user().createExpectedError("Unknown HTTP status " + xhr.status));
          return;
        }
        if (xhr.readyState == 4) {
          var options = {
            status: xhr.status,
            statusText: xhr.statusText,
            headers: parseHeaders(xhr.getAllResponseHeaders())
          };
          var response = new Response("", options);
          var promise = assertSuccess(response).then(function(response2) {
            return {
              response: response2,
              xhr: xhr
            };
          });
          resolve(promise);
        }
      };
      xhr.onerror = function() {
        reject(user().createExpectedError("Request failure"));
      };
      xhr.onabort = function() {
        reject(user().createExpectedError("Request aborted"));
      };
      if (init.method == "POST") {
        xhr.send(init.body);
      } else {
        xhr.send();
      }
    });
  }
  function parseHeaders(rawHeaders) {
    var headers = dict({});
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(":");
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(":").trim();
        headers[key] = value;
      }
    });
    return headers;
  }

  // extensions/amp-next-page/0.1/amp-next-page.js
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
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
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  var TAG5 = "amp-next-page";
  var SERVICE_ID = "next-page";
  var ADSENSE_BASE_URL = "https://googleads.g.doubleclick.net/pagead/ads";
  var AmpNextPage = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpNextPage2, _AMP$BaseElement);
    var _super = _createSuper(AmpNextPage2);
    function AmpNextPage2() {
      return _super.apply(this, arguments);
    }
    var _proto = AmpNextPage2.prototype;
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return layout == Layout_Enum.CONTAINER;
    };
    _proto.buildCallback = function buildCallback() {
      var _this = this;
      userAssert2(isExperimentOn(this.win, "amp-next-page"), "Experiment amp-next-page disabled");
      var separatorElements = childElementsByAttr(this.element, "separator");
      userAssert2(separatorElements.length <= 1, "%s should contain at most one <div separator> child", TAG5);
      var separator = null;
      if (separatorElements.length === 1) {
        separator = separatorElements[0];
        removeElement(separator);
      }
      return nextPageServiceForDoc2(this.getAmpDoc()).then(function(service2) {
        if (service2.isActive()) {
          return;
        }
        var element = _this.element;
        element.classList.add("i-amphtml-next-page");
        var prohibitedAttribute = element.hasAttribute("deep-parsing") ? "deep-parsing" : element.hasAttribute("xssi-prefix") ? "xssi-prefix" : element.hasAttribute("max-pages") ? "max-pages" : null;
        if (prohibitedAttribute) {
          _this.unsupportedFeatureWarn_(prohibitedAttribute);
        }
        var src = element.getAttribute("src");
        var configPromise;
        var pagesPromise = Promise.resolve([]);
        var type = element.getAttribute("type");
        if (type) {
          userAssert2(type === "adsense", TAG5 + " only supports type=adsense");
          var client = element.getAttribute("data-client");
          var slot = element.getAttribute("data-slot");
          userAssert2(/^ca-pub-\d+$/.test(client), TAG5 + " AdSense client should be of the format 'ca-pub-123456'");
          userAssert2(/^\d+$/.test(slot), TAG5 + " AdSense slot should be a number");
          var consentPolicyId = _this.getConsentPolicy();
          var consent = consentPolicyId ? getConsentPolicyState(element, consentPolicyId).catch(function(err) {
            user().error(TAG5, "Error determining consent state", err);
            return CONSENT_POLICY_STATE.UNKNOWN;
          }) : Promise.resolve(CONSENT_POLICY_STATE.SUFFICIENT);
          pagesPromise = consent.then(function(state) {
            return _this.fetchAdSensePages_(client, slot, state === CONSENT_POLICY_STATE.SUFFICIENT || state === CONSENT_POLICY_STATE.UNKNOWN_NOT_REQUIRED);
          }).catch(function(error) {
            user().warn(TAG5, "error fetching recommendations from AdSense", error);
            return [];
          });
        }
        var inlineConfig = _this.getInlineConfig_();
        if (src) {
          configPromise = _this.fetchConfig_().catch(function(error) {
            return user().error(TAG5, "error fetching config", error);
          });
        } else {
          configPromise = Promise.resolve(inlineConfig);
        }
        if (inlineConfig && (src || type)) {
          _this.unsupportedFeatureWarn_("mixing configuration types");
        }
        userAssert2(inlineConfig || src || type, "%s should contain a <script> child, a URL specified in [src], or a [type]", TAG5);
        return Promise.all([configPromise, pagesPromise]).then(function(values) {
          var config = values[0] || {};
          var pages = values[1] || [];
          config.pages = pages.concat(config.pages || []);
          _this.register_(service2, config, separator);
        });
      });
    };
    _proto.getInlineConfig_ = function getInlineConfig_() {
      var scriptElements = childElementsByTag(this.element, "SCRIPT");
      if (!scriptElements.length) {
        return null;
      }
      userAssert2(scriptElements.length === 1, TAG5 + " should contain at most one <script> child");
      var scriptElement = scriptElements[0];
      userAssert2(isJsonScriptTag(scriptElement), TAG5 + ' config should be inside a <script> tag with type="application/json"');
      return tryParseJson(scriptElement.textContent, function(error) {
        user().error(TAG5, "failed to parse config", error);
      });
    };
    _proto.fetchAdSensePages_ = function fetchAdSensePages_(client, slot, personalized) {
      var _this2 = this;
      var adUrl = ADSENSE_BASE_URL + "?client=" + client + "&slotname=" + slot + ("&url=" + encodeURIComponent(this.getAmpDoc().getUrl())) + "&ecr=1&crui=title&is_amp=3&output=xml";
      return fetchDocument(this.win, adUrl, {
        credentials: personalized ? "include" : "omit"
      }).then(function(doc) {
        var urlService = Services.urlForDoc(dev().assertElement(_this2.element));
        var _urlService$parse = urlService.parse(_this2.getAmpDoc().getUrl()), origin = _urlService$parse.origin;
        var recs = [];
        var ads = doc.getElementsByTagName("AD");
        for (var i = 0; i < ads.length; i++) {
          var ad = ads[i];
          var titleEl = elementByTag(ad, "LINE1");
          var mediaEl = elementByTag(ad, "MEDIA_TEMPLATE_DATA");
          var visibleUrl = ad.getAttribute("visible_url");
          var url = ad.getAttribute("url");
          var title = extractAdSenseTextContent(titleEl);
          var image = extractAdSenseImageUrl(mediaEl);
          var isValidOrigin = urlService.parse(visibleUrl).origin === origin;
          if (isValidOrigin && url && title && image) {
            recs.push({
              title: title,
              image: image,
              ampUrl: url
            });
          }
        }
        return recs;
      });
    };
    _proto.register_ = function register_(service2, configJson, separator) {
      var _this3 = this;
      var element = this.element;
      var config = assertConfig(element, configJson, this.getAmpDoc().getUrl());
      service2.register(element, config, separator);
      service2.setAppendPageHandler(function(element2) {
        return _this3.appendPage_(element2);
      });
    };
    _proto.appendPage_ = function appendPage_(element) {
      var _this4 = this;
      return this.mutateElement(function() {
        return _this4.element.appendChild(element);
      });
    };
    _proto.fetchConfig_ = function fetchConfig_() {
      var ampdoc2 = this.getAmpDoc();
      var policy = UrlReplacementPolicy_Enum.ALL;
      return batchFetchJsonFor(ampdoc2, this.element, {
        urlReplacement: policy
      });
    };
    _proto.unsupportedFeatureWarn_ = function unsupportedFeatureWarn_(feature) {
      user().warn(TAG5, feature + " is a feature of " + TAG5 + " 1.0, please update your version to use it");
    };
    return AmpNextPage2;
  }(AMP.BaseElement);
  function nextPageServiceForDoc2(elementOrAmpDoc) {
    return getServicePromiseForDoc(elementOrAmpDoc, SERVICE_ID);
  }
  function extractAdSenseImageUrl(el) {
    try {
      var media = parseJson(el.textContent.trim().slice(0, -1))[0];
      return media["core_image_url"];
    } catch (e) {
      return "";
    }
  }
  function extractAdSenseTextContent(el) {
    var content = el && el.textContent || "";
    return content.trim();
  }
  var service = new NextPageService();
  AMP.registerServiceForDoc(SERVICE_ID, function() {
    return service;
  });
  AMP.registerElement(TAG5, AmpNextPage, CSS2);
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
//# sourceMappingURL=amp-next-page-0.1.max.js.map
