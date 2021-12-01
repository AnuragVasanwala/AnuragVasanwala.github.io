(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-apester-media",ev:"0.1",l:true,f:(function(AMP,_){
(function() {
  // build/amp-apester-media-0.1.css.js
  var CSS2 = ".amp-apester-iframe{transition:opacity 0.4s;opacity:0}.i-amphtml-apester-iframe-ready{transition:opacity 1s ease-out;opacity:1!important}.amp-apester-loader{height:100%;width:100%;background-color:#fff}.amp-apester-container{max-width:700px;margin:0 auto;display:block;position:relative;width:100%}.amp-apester-overflow{position:absolute;margin:auto;top:50%;left:50%;transform:translate(-50%,-50%)}.amp-apester-overflow button{border:none;background:#fff;cursor:pointer;padding:25px 80px;text-transform:uppercase;letter-spacing:1px;font-weight:700;outline:none;position:relative}.amp-apester-fullscreen{background:rgba(34,36,38,0.97)!important;position:fixed!important;width:100vw!important;height:100vh!important;z-index:2147483646!important;top:0;zoom:1;-webkit-overflow-scrolling:touch!important}.i-amphtml-amp-apester-companion{display:block;margin:10px auto}.i-amphtml-amp-apester-bottom-ad{display:block!important;position:absolute!important;bottom:0!important;left:50%!important;transform:translateX(-50%)!important;margin:0!important}\n/*# sourceURL=/extensions/amp-apester-media/0.1/amp-apester-media.css*/";

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

  // src/core/mode/minified.js
  function isMinified() {
    return false;
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
  function removeItem(array, item) {
    var index = array.indexOf(item);
    if (index == -1) {
      return false;
    }
    array.splice(index, 1);
    return true;
  }

  // src/core/types/string/index.js
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

  // src/core/types/index.js
  function isElement(value) {
    return (value == null ? void 0 : value.nodeType) == 1;
  }
  function isFiniteNumber(value) {
    return typeof value === "number" && isFinite(value);
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
  function assertType_(assertFn, subject, shouldBeTruthy, defaultMessage, opt_message) {
    if (isArray(opt_message)) {
      assertFn(shouldBeTruthy, opt_message.concat([subject]));
    } else {
      assertFn(shouldBeTruthy, (opt_message || defaultMessage) + ": %s", subject);
    }
    return subject;
  }
  function assertString(assertFn, shouldBeString, opt_message) {
    return assertType_(assertFn, shouldBeString, isString(shouldBeString), "String expected", opt_message);
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
  function devAssertString(shouldBeString, opt_message) {
    if (isMinified()) {
      return shouldBeString;
    }
    devAssertDceCheck();
    return assertString(devAssert, shouldBeString, opt_message);
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

  // src/core/3p-frame-messaging.js
  var AMP_MESSAGE_PREFIX = "amp-";
  var MessageType_Enum = {
    SEND_EMBED_STATE: "send-embed-state",
    EMBED_STATE: "embed-state",
    SEND_EMBED_CONTEXT: "send-embed-context",
    EMBED_CONTEXT: "embed-context",
    SEND_INTERSECTIONS: "send-intersections",
    INTERSECTION: "intersection",
    EMBED_SIZE: "embed-size",
    EMBED_SIZE_CHANGED: "embed-size-changed",
    EMBED_SIZE_DENIED: "embed-size-denied",
    NO_CONTENT: "no-content",
    GET_HTML: "get-html",
    GET_CONSENT_STATE: "get-consent-state",
    SIGNAL_INTERACTIVE: "signal-interactive",
    FULL_OVERLAY_FRAME: "full-overlay-frame",
    FULL_OVERLAY_FRAME_RESPONSE: "full-overlay-frame-response",
    CANCEL_FULL_OVERLAY_FRAME: "cancel-full-overlay-frame",
    CANCEL_FULL_OVERLAY_FRAME_RESPONSE: "cancel-full-overlay-frame-response",
    SEND_POSITIONS: "send-positions",
    POSITION: "position",
    SEND_IFRAME_TRANSPORT_EVENTS: "send-iframe-transport-events",
    IFRAME_TRANSPORT_EVENTS: "iframe-transport-events",
    IFRAME_TRANSPORT_RESPONSE: "iframe-transport-response",
    USER_ERROR_IN_IFRAME: "user-error-in-iframe",
    SEND_CONSENT_DATA: "send-consent-data",
    CONSENT_DATA: "consent-data"
  };
  function deserializeMessage(message) {
    if (!isAmpMessage(message)) {
      return null;
    }
    var startPos = devAssertString(message).indexOf("{");
    devAssert(startPos != -1, "JSON missing in %s", message);
    return tryParseJson(devAssertString(message).substr(startPos), function(e) {
      rethrowAsync(new Error("MESSAGING: Failed to parse message: " + message + "\n" + e.message));
    });
  }
  function isAmpMessage(message) {
    return typeof message == "string" && message.startsWith(AMP_MESSAGE_PREFIX) && message.indexOf("{") != -1;
  }

  // src/core/window/index.js
  function toWin(winOrNull) {
    return winOrNull;
  }
  function getWin(node) {
    return toWin((node.ownerDocument || node).defaultView);
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
  function isJsonLdScriptTag(element) {
    var _element$getAttribute2;
    return element.tagName == "SCRIPT" && ((_element$getAttribute2 = element.getAttribute("type")) == null ? void 0 : _element$getAttribute2.toUpperCase()) == "APPLICATION/LD+JSON";
  }
  function isIframed(win) {
    return win.parent && win.parent != win;
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
  function setStyles(element, styles) {
    for (var k in styles) {
      setStyle(element, k, styles[k]);
    }
  }
  function px(value) {
    return value + "px";
  }
  function isVar(property) {
    return property.startsWith("--");
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
  function userAssert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    return user().assert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
  }

  // src/utils/event-helper.js
  function listen(element, eventType, listener, opt_evtListenerOpts) {
    return internalListenImplementation(element, eventType, listener, opt_evtListenerOpts);
  }
  function getData(event) {
    return event.data;
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

  // src/iframe-helper.js
  var UNLISTEN_SENTINEL = "unlisten";
  function getListenFors(parentWin, opt_create) {
    var listeningFors = parentWin.listeningFors;
    if (!listeningFors && opt_create) {
      listeningFors = parentWin.listeningFors = Object.create(null);
    }
    return listeningFors || null;
  }
  function getListenForSentinel(parentWin, sentinel, opt_create) {
    var listeningFors = getListenFors(parentWin, opt_create);
    if (!listeningFors) {
      return listeningFors;
    }
    var listenSentinel = listeningFors[sentinel];
    if (!listenSentinel && opt_create) {
      listenSentinel = listeningFors[sentinel] = [];
    }
    return listenSentinel || null;
  }
  function getOrCreateListenForEvents(parentWin, iframe, opt_is3P) {
    var sentinel = getSentinel_(iframe, opt_is3P);
    var listenSentinel = getListenForSentinel(parentWin, sentinel, true);
    var windowEvents;
    for (var i = 0; i < listenSentinel.length; i++) {
      var we = listenSentinel[i];
      if (we.frame === iframe) {
        windowEvents = we;
        break;
      }
    }
    if (!windowEvents) {
      windowEvents = {
        frame: iframe,
        events: Object.create(null)
      };
      listenSentinel.push(windowEvents);
    }
    return windowEvents.events;
  }
  function getListenForEvents(parentWin, sentinel, origin, triggerWin) {
    var listenSentinel = getListenForSentinel(parentWin, sentinel);
    if (!listenSentinel) {
      return listenSentinel;
    }
    var windowEvents;
    for (var i = 0; i < listenSentinel.length; i++) {
      var we = listenSentinel[i];
      var contentWindow = we.frame.contentWindow;
      if (!contentWindow) {
        setTimeout(dropListenSentinel, 0, listenSentinel);
      } else if (triggerWin == contentWindow || isDescendantWindow(contentWindow, triggerWin)) {
        windowEvents = we;
        break;
      }
    }
    return windowEvents ? windowEvents.events : null;
  }
  function isDescendantWindow(ancestor, descendant) {
    for (var win = descendant; win && win != win.parent; win = win.parent) {
      if (win == ancestor) {
        return true;
      }
    }
    return false;
  }
  function dropListenSentinel(listenSentinel) {
    var noopData = dict({
      "sentinel": UNLISTEN_SENTINEL
    });
    for (var i = listenSentinel.length - 1; i >= 0; i--) {
      var windowEvents = listenSentinel[i];
      if (!windowEvents.frame.contentWindow) {
        listenSentinel.splice(i, 1);
        var events2 = windowEvents.events;
        for (var name in events2) {
          events2[name].splice(0, Infinity).forEach(function(event) {
            event(noopData);
          });
        }
      }
    }
  }
  function registerGlobalListenerIfNeeded(parentWin) {
    if (parentWin.listeningFors) {
      return;
    }
    var listenForListener = function listenForListener2(event) {
      if (!getData(event)) {
        return;
      }
      var data = parseIfNeeded(getData(event));
      if (!data || !data["sentinel"]) {
        return;
      }
      var listenForEvents = getListenForEvents(parentWin, data["sentinel"], event.origin, event.source);
      if (!listenForEvents) {
        return;
      }
      var listeners = listenForEvents[data["type"]];
      if (!listeners) {
        return;
      }
      listeners = listeners.slice();
      for (var i = 0; i < listeners.length; i++) {
        var listener = listeners[i];
        listener(data, event.source, event.origin, event);
      }
    };
    parentWin.addEventListener("message", listenForListener);
  }
  function listenFor(iframe, typeOfMessage, callback, opt_is3P, opt_includingNestedWindows, opt_allowOpaqueOrigin) {
    devAssert2(iframe.src, "only iframes with src supported");
    devAssert2(!iframe.parentNode, "cannot register events on an attached iframe. It will cause hair-pulling bugs like #2942");
    devAssert2(callback);
    var parentWin = iframe.ownerDocument.defaultView;
    registerGlobalListenerIfNeeded(parentWin);
    var listenForEvents = getOrCreateListenForEvents(parentWin, iframe, opt_is3P);
    var iframeOrigin = parseUrlDeprecated(iframe.src).origin;
    var events2 = listenForEvents[typeOfMessage] || (listenForEvents[typeOfMessage] = []);
    var unlisten;
    var listener = function listener2(data, source, origin, event) {
      var sentinel = data["sentinel"];
      if (sentinel == "amp") {
        if (source != iframe.contentWindow) {
          return;
        }
        var isOpaqueAndAllowed = origin == "null" && opt_allowOpaqueOrigin;
        if (iframeOrigin != origin && !isOpaqueAndAllowed) {
          return;
        }
      }
      if (!opt_includingNestedWindows && source != iframe.contentWindow) {
        return;
      }
      if (data.sentinel == UNLISTEN_SENTINEL) {
        unlisten();
        return;
      }
      callback(data, source, origin, event);
    };
    events2.push(listener);
    return unlisten = function unlisten2() {
      if (listener) {
        var index = events2.indexOf(listener);
        if (index > -1) {
          events2.splice(index, 1);
        }
        listener = null;
        events2 = null;
        callback = null;
      }
    };
  }
  function postMessageToWindows(iframe, targets, type, object, opt_is3P) {
    if (!iframe.contentWindow) {
      return;
    }
    object["type"] = type;
    object["sentinel"] = getSentinel_(iframe, opt_is3P);
    var payload = object;
    if (opt_is3P) {
      payload = "amp-" + JSON.stringify(object);
    }
    for (var i = 0; i < targets.length; i++) {
      var target = targets[i];
      target.win.postMessage(payload, target.origin);
    }
  }
  function getSentinel_(iframe, opt_is3P) {
    return opt_is3P ? iframe.getAttribute("data-amp-3p-sentinel") : "amp";
  }
  function parseIfNeeded(data) {
    if (typeof data == "string") {
      if (data.charAt(0) == "{") {
        data = tryParseJson(data, function(e) {
          dev().warn("IFRAME-HELPER", "Postmessage could not be parsed. Is it in a valid JSON format?", e);
        }) || null;
      } else if (isAmpMessage(data)) {
        data = deserializeMessage(data);
      } else {
        data = null;
      }
    }
    return data;
  }
  var SubscriptionApi = /* @__PURE__ */ function() {
    function SubscriptionApi2(iframe, type, is3p, requestCallback) {
      var _this = this;
      this.iframe_ = iframe;
      this.is3p_ = is3p;
      this.clientWindows_ = [];
      this.unlisten_ = listenFor(this.iframe_, type, function(data, source, origin) {
        if (!_this.clientWindows_.some(function(entry) {
          return entry.win == source;
        })) {
          _this.clientWindows_.push({
            win: source,
            origin: origin
          });
        }
        requestCallback(data, source, origin);
      }, this.is3p_, this.is3p_);
    }
    var _proto = SubscriptionApi2.prototype;
    _proto.send = function send(type, data) {
      remove(this.clientWindows_, function(client) {
        return !client.win.parent;
      });
      postMessageToWindows(this.iframe_, this.clientWindows_, type, data, this.is3p_);
    };
    _proto.destroy = function destroy() {
      this.unlisten_();
      this.clientWindows_.length = 0;
    };
    return SubscriptionApi2;
  }();

  // src/utils/intersection-observer-3p-host.js
  var DEFAULT_THRESHOLD = [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1];
  var INIT_TIME = Date.now();
  var IntersectionObserver3pHost = /* @__PURE__ */ function() {
    function IntersectionObserver3pHost2(baseElement, iframe) {
      var _this = this;
      this.baseElement_ = baseElement;
      this.intersectionObserver_ = null;
      this.subscriptionApi_ = new SubscriptionApi(iframe, MessageType_Enum.SEND_INTERSECTIONS, false, function() {
        _this.startSendingIntersection_();
      });
      this.intersectionObserver_ = new IntersectionObserver(function(entries) {
        _this.subscriptionApi_.send(MessageType_Enum.INTERSECTION, dict({
          "changes": entries.map(cloneEntryForCrossOrigin)
        }));
      }, {
        threshold: DEFAULT_THRESHOLD
      });
    }
    var _proto = IntersectionObserver3pHost2.prototype;
    _proto.startSendingIntersection_ = function startSendingIntersection_() {
      this.intersectionObserver_.observe(this.baseElement_.element);
    };
    _proto.destroy = function destroy() {
      this.intersectionObserver_.disconnect();
      this.intersectionObserver_ = null;
      this.subscriptionApi_.destroy();
      this.subscriptionApi_ = null;
    };
    return IntersectionObserver3pHost2;
  }();
  function cloneEntryForCrossOrigin(entry) {
    return {
      "time": entry.time,
      "rootBounds": entry.rootBounds,
      "boundingClientRect": entry.boundingClientRect,
      "intersectionRect": entry.intersectionRect,
      "intersectionRatio": entry.intersectionRatio
    };
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

  // extensions/amp-apester-media/0.1/utils.js
  var rules = [
    "WebView",
    "(iPhone|iPod|iPad)(?!.*Safari)",
    "Android.*(wv|.0.0.0)",
    "Linux; U; Android"
  ];
  var webviewRegExp = new RegExp("(" + rules.join("|") + ")", "ig");
  function isWebview(ua) {
    return !!ua.match(webviewRegExp);
  }
  function isMobileDevice() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0, 4));
  }
  function getPlatform() {
    var webview = isWebview(navigator.userAgent);
    var isMobile = isMobileDevice();
    return isMobile ? "mobile" + (webview ? "-webview" : "") : "desktop";
  }
  function extractElementTags(element) {
    var tagsAttribute = element && element.getAttribute("data-apester-tags");
    if (tagsAttribute) {
      return tagsAttribute.split(",").map(function(tag) {
        return tag.trim();
      }) || [];
    }
    return [];
  }
  function extractTitle(root) {
    var scriptTags = toArray(root.querySelectorAll('script[type="application/ld+json"]'));
    return scriptTags.map(function(scriptTag) {
      if (!scriptTag || !isJsonLdScriptTag(scriptTag)) {
        return {};
      }
      return tryParseJson(scriptTag.textContent) || {};
    }).map(function(jsonLd) {
      return jsonLd && jsonLd["headline"];
    }).filter(function(e) {
      return typeof e === "string";
    }).map(function(title) {
      return title.trim().split(" ").filter(function(w) {
        return w.length > 2;
      });
    }).reduce(function(result, headline) {
      return result.concat(headline);
    }, []).slice(0, 5);
  }
  function extractArticleTags(ampdoc2) {
    return (ampdoc2.getMetaByName("keywords") || "").split(",").map(function(e) {
      return e.trim();
    }).filter(Boolean);
  }
  function extractTags(ampdoc2, element) {
    var extractedTags = extractElementTags(element) || [];
    var articleMetaTags = extractArticleTags(ampdoc2);
    var concatedTags = extractedTags.concat(articleMetaTags.length ? articleMetaTags : extractTitle(ampdoc2.getRootNode()) || []);
    var loweredCase = concatedTags.map(function(tag) {
      return tag.toLowerCase().trim();
    });
    var noDuplication = loweredCase.filter(function(item, pos, self2) {
      return self2.indexOf(item) === pos;
    });
    return noDuplication;
  }
  function setFullscreenOn(element) {
    element.classList.add("amp-apester-fullscreen");
  }
  function setFullscreenOff(element) {
    element.classList.remove("amp-apester-fullscreen");
  }
  function registerEvent(eventName, callback, win, iframe, unlisteners) {
    var unlisten = listen(win, "message", function(event) {
      var fromApesterMedia = iframe.contentWindow === event.source;
      if (getData(event)["type"] === eventName && fromApesterMedia) {
        callback(getData(event));
      }
    });
    unlisteners.push(unlisten);
  }

  // src/core/constants/consent-state.js
  var CONSENT_POLICY_STATE = {
    SUFFICIENT: 1,
    INSUFFICIENT: 2,
    UNKNOWN_NOT_REQUIRED: 3,
    UNKNOWN: 4
  };

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

  // extensions/amp-apester-media/0.1/monetization/consent-util.js
  var TAG = "amp-apester-media";
  var AWAIT_TIME_OUT_FOR_RESPONSE = 3e3;
  var awaitPromiseTimeout = function awaitPromiseTimeout2() {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve([CONSENT_POLICY_STATE.UNKNOWN, void 0]);
      }, AWAIT_TIME_OUT_FOR_RESPONSE);
    });
  };
  function getConsentData(apesterElement) {
    var consentStatePromise = getConsentPolicyState(apesterElement).catch(function(err) {
      dev().error(TAG, "Error determining consent state", err);
      return CONSENT_POLICY_STATE.UNKNOWN;
    });
    var consentStringPromise = getConsentPolicyInfo(apesterElement, "default").catch(function(err) {
      dev().error(TAG, "Error determining consent string", err);
      return void 0;
    });
    var consentDataPromise = Promise.all([consentStatePromise, consentStringPromise]);
    return Promise.race([consentDataPromise, awaitPromiseTimeout()]).then(function(consentDataResponse) {
      var consentStatus = consentDataResponse[0];
      var gdprString = consentDataResponse[1];
      switch (consentStatus) {
        case CONSENT_POLICY_STATE.SUFFICIENT:
          return dict({
            "gdpr": 1,
            "user_consent": 1,
            "gdprString": gdprString
          });
        case CONSENT_POLICY_STATE.INSUFFICIENT:
        case CONSENT_POLICY_STATE.UNKNOWN:
          return dict({
            "gdpr": 1,
            "user_consent": 0,
            "gdprString": gdprString
          });
        case CONSENT_POLICY_STATE.UNKNOWN_NOT_REQUIRED:
        default:
          return {};
      }
    });
  }

  // extensions/amp-apester-media/0.1/monetization/companion/bottomAd.js
  var ALLOWED_AD_PROVIDER = "gpt";
  function handleCompanionBottomAd(media, apesterElement) {
    var bottomAdOptions = getValueForExpr(media, "campaignData.bottomAdOptions");
    if (!bottomAdOptions) {
      return;
    }
    var enabledBottomAd = getValueForExpr(bottomAdOptions, "enabled");
    if (enabledBottomAd && bottomAdOptions["videoPlayer"] === ALLOWED_AD_PROVIDER) {
      var slot = bottomAdOptions["tag"];
      var bannerSizes = [[300, 50]];
      constructCompanionBottomAd(slot, bannerSizes, apesterElement);
    }
  }
  function constructCompanionBottomAd(slot, bannerSizes, apesterElement) {
    var width = bannerSizes[0][0];
    var height = bannerSizes[0][1];
    var refreshInterval = 30;
    var ampAd = createElementWithAttributes(apesterElement.ownerDocument, "amp-ad", dict({
      "width": "" + width,
      "height": "" + height,
      "type": "doubleclick",
      "layout": "fixed",
      "data-slot": "" + slot,
      "data-multi-size-validation": "false",
      "data-enable-refresh": "" + refreshInterval
    }));
    ampAd.classList.add("i-amphtml-amp-apester-bottom-ad");
    apesterElement.appendChild(ampAd);
    Services.mutatorForDoc(apesterElement).requestChangeSize(ampAd, height);
    return ampAd;
  }

  // extensions/amp-apester-media/0.1/monetization/companion/display.js
  var ALLOWED_AD_PROVIDER2 = "gdt";
  function handleCompanionDisplay(media, apesterElement) {
    var companionOptions = getValueForExpr(media, "campaignData.companionOptions");
    if (!companionOptions) {
      return;
    }
    var enabledDisplayAd = getValueForExpr(companionOptions, "enabled");
    var settings = getValueForExpr(companionOptions, "settings");
    if (enabledDisplayAd && settings && settings["bannerAdProvider"] === ALLOWED_AD_PROVIDER2) {
      var slot = settings["slot"];
      var refreshInterval = settings["options"]["autoRefreshTime"] === 6e4 ? 60 : 30;
      var defaultBannerSizes = [[300, 250]];
      var bannerSizes = settings["bannerSizes"] || defaultBannerSizes;
      constructCompanionDisplayAd(slot, bannerSizes, apesterElement, refreshInterval);
    }
  }
  function constructCompanionDisplayAd(slot, bannerSizes, apesterElement, refreshInterval) {
    var maxWidth = Math.max.apply(null, bannerSizes.map(function(s) {
      return s[0];
    }));
    var maxHeight = Math.max.apply(null, bannerSizes.map(function(s) {
      return s[1];
    }));
    var multiSizeData = bannerSizes.map(function(size) {
      return size.join("x");
    }).join();
    var ampAd = createElementWithAttributes(apesterElement.ownerDocument, "amp-ad", dict({
      "width": "" + maxWidth,
      "height": "0",
      "type": "doubleclick",
      "layout": "fixed",
      "data-slot": "" + slot,
      "data-multi-size-validation": "false",
      "data-multi-size": multiSizeData,
      "data-enable-refresh": "" + refreshInterval
    }));
    ampAd.classList.add("i-amphtml-amp-apester-companion");
    apesterElement.parentNode.insertBefore(ampAd, apesterElement.nextSibling);
    Services.mutatorForDoc(apesterElement).requestChangeSize(ampAd, maxHeight, void 0);
    return ampAd;
  }

  // extensions/amp-apester-media/0.1/monetization/companion/video.js
  var ALLOWED_AD_PROVIDER3 = "sr";
  function handleCompanionVideo(media, apesterElement, consentObj) {
    var companionCampaignOptions = getValueForExpr(media, "campaignData.companionCampaignOptions");
    var videoSettings = getValueForExpr(media, "campaignData.companionOptions.video");
    var position = getCompanionPosition(videoSettings);
    if (!companionCampaignOptions || !videoSettings || !videoSettings["enabled"] || videoSettings["provider"] !== ALLOWED_AD_PROVIDER3 || !position || position === "floating") {
      return;
    }
    var macros = getSrMacros(media, companionCampaignOptions["companionCampaignId"], apesterElement, consentObj);
    addCompanionSrElement(videoSettings["videoTag"], position, macros, apesterElement);
  }
  function getCompanionPosition(video) {
    if (!video) {
      return null;
    }
    if (video["companion"]["enabled"]) {
      return "above";
    }
    if (video["companion_below"]["enabled"]) {
      return "below";
    }
    if (video["floating"]["enabled"]) {
      return "floating";
    }
    return null;
  }
  function addCompanionSrElement(videoTag, position, macros, apesterElement) {
    var size = getCompanionVideoAdSize(apesterElement);
    var refreshInterval = 30;
    var ampBladeAd = createElementWithAttributes(apesterElement.ownerDocument, "amp-ad", dict({
      "width": size.width,
      "height": size.height,
      "type": "blade",
      "layout": "fixed",
      "data-blade_player_type": "bladex",
      "servingDomain": "ssr.streamrail.net",
      "data-blade_macros": JSON.stringify(macros),
      "data-blade_player_id": videoTag,
      "data-blade_api_key": "5857d2ee263dc90002000001",
      "data-enable-refresh": "" + refreshInterval
    }));
    ampBladeAd.classList.add("i-amphtml-amp-apester-companion");
    var relativeElement = position === "below" ? apesterElement.nextSibling : apesterElement;
    apesterElement.parentNode.insertBefore(ampBladeAd, relativeElement);
    Services.mutatorForDoc(apesterElement).requestChangeSize(ampBladeAd, size.height, void 0);
  }
  function getCompanionVideoAdSize(apesterElement) {
    var adWidth = apesterElement.clientWidth;
    var adRatio = 0.6;
    var adHeight = Math.ceil(adWidth * adRatio);
    return {
      width: adWidth,
      height: adHeight
    };
  }
  function getSrMacros(interactionModel, campaignId, apesterElement, consentObj) {
    var interactionId = interactionModel["interactionId"];
    var publisherId = interactionModel["publisherId"];
    var publisher = interactionModel["publisher"];
    var pageUrl = Services.documentInfoForDoc(apesterElement).canonicalUrl;
    var macros = dict({
      "param1": interactionId,
      "param2": publisherId,
      "param6": campaignId,
      "page_url": pageUrl
    });
    if (consentObj["gdpr"]) {
      macros["gdpr"] = consentObj["gdpr"];
      macros["user_consent"] = consentObj["user_consent"];
      macros["param4"] = consentObj["gdprString"];
    }
    if (publisher && publisher.groupId) {
      macros["param7"] = "apester.com:" + publisher.groupId;
      macros["schain"] = "1.0,1!apester.com," + publisher.groupId + ",1,,,,";
    }
    return macros;
  }

  // extensions/amp-apester-media/0.1/monetization/index.js
  function handleCompanionAds(media, apesterElement) {
    var monetizationSettings = media["campaignData"];
    if (monetizationSettings && !monetizationSettings.disabledAmpCompanionAds) {
      return getConsentData(apesterElement).then(function(consentData) {
        handleCompanionDisplay(media, apesterElement);
        handleCompanionVideo(media, apesterElement, consentData);
        handleCompanionBottomAd(media, apesterElement);
      });
    }
    return resolvedPromise();
  }

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

  // extensions/amp-apester-media/0.1/amp-apester-media.js
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
  var TAG2 = "amp-apester-media";
  var AD_TAG = "amp-ad";
  var BOTTOM_AD_MESSAGE = dict({
    "type": "has_bottom_ad",
    "adHeight": 50
  });
  var apesterEventNames = {
    SET_FULL_SCREEN: "fullscreen_on",
    REMOVE_FULL_SCREEN: "fullscreen_off",
    RESIZE_UNIT: "apester_resize_unit"
  };
  var AmpApesterMedia = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpApesterMedia2, _AMP$BaseElement);
    var _super = _createSuper(AmpApesterMedia2);
    function AmpApesterMedia2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.rendererBaseUrl_ = "https://renderer.apester.com";
      _this.displayBaseUrl_ = "https://display.apester.com";
      _this.staticContent_ = "https://static.qmerce.com";
      _this.loaderUrl_ = "https://static.apester.com/js/assets/loader_100x100.gif";
      _this.seen_ = false;
      _this.iframe_ = null;
      _this.placeholder_ = null;
      _this.width_ = null;
      _this.height_ = null;
      _this.random_ = false;
      _this.hasBottomAd_ = false;
      _this.mediaAttribute_ = null;
      _this.embedOptions_ = {};
      _this.mediaId_ = null;
      _this.unlisteners_ = [];
      _this.intersectionObserverHostApi_ = null;
      _this.unobserveIntersections_ = null;
      return _this;
    }
    var _proto = AmpApesterMedia2.prototype;
    _proto.preconnectCallback = function preconnectCallback(onLayout) {
      var preconnect = Services.preconnectFor(this.win);
      preconnect.url(this.getAmpDoc(), this.displayBaseUrl_, onLayout);
      preconnect.url(this.getAmpDoc(), this.rendererBaseUrl_, onLayout);
      preconnect.url(this.getAmpDoc(), this.staticContent_, onLayout);
    };
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return isLayoutSizeDefined(layout);
    };
    _proto.viewportCallback_ = function viewportCallback_(inViewport) {
      if (inViewport && !this.seen_) {
        if (this.iframe_ && this.iframe_.contentWindow) {
          dev().fine(TAG2, "media seen");
          this.seen_ = true;
          this.iframe_.contentWindow.postMessage("interaction seen", "*");
        }
      }
    };
    _proto.buildCallback = function buildCallback() {
      var width = this.element.getAttribute("width");
      var height = this.element.getAttribute("height");
      this.width_ = getLengthNumeral(width);
      this.height_ = getLengthNumeral(height);
      this.random_ = this.element.hasAttribute("data-apester-channel-token");
      this.mediaAttribute_ = userAssert(this.element.getAttribute("data-apester-media-id") || this.element.getAttribute("data-apester-channel-token"), "Either the data-apester-media-id or the data-apester-channel-token attributes must be specified for <amp-apester-media> %s", this.element);
      this.embedOptions_ = {
        playlist: this.random_,
        idOrToken: this.mediaAttribute_,
        inative: this.element.getAttribute("data-apester-inative") === "true",
        fallback: this.element.getAttribute("data-apester-fallback"),
        distributionChannelId: this.element.getAttribute("data-apester-channel-id"),
        renderer: true,
        tags: extractTags(this.getAmpDoc(), this.element)
      };
    };
    _proto.buildUrl_ = function buildUrl_() {
      var _this$embedOptions_ = this.embedOptions_, distributionChannelId = _this$embedOptions_.distributionChannelId, fallback = _this$embedOptions_.fallback, idOrToken = _this$embedOptions_.idOrToken, inative = _this$embedOptions_.inative, playlist = _this$embedOptions_.playlist, tags = _this$embedOptions_.tags;
      var encodedMediaAttribute = encodeURIComponent(dev().assertString(this.mediaAttribute_));
      var suffix = "";
      var queryParams = dict();
      queryParams["renderer"] = false;
      queryParams["platform"] = getPlatform();
      if (inative) {
        if (idOrToken) {
          suffix = "/inatives/" + idOrToken;
        } else if (distributionChannelId) {
          suffix = "/channels/" + distributionChannelId + "/inatives";
        }
      } else if (playlist && tags) {
        suffix = "/tokens/" + encodedMediaAttribute + "/interactions/random";
        queryParams["tags"] = tags;
        queryParams["fallback"] = !!fallback;
      } else if (playlist) {
        suffix = "/tokens/" + encodedMediaAttribute + "/interactions/random";
      } else {
        suffix = "/interactions/" + encodedMediaAttribute + "/display";
      }
      return addParamsToUrl("" + this.displayBaseUrl_ + suffix, queryParams);
    };
    _proto.queryMedia_ = function queryMedia_() {
      var url = this.buildUrl_();
      return Services.xhrFor(this.win).fetchJson(url, {}).then(function(res) {
        if (res.status === 200) {
          return res.json();
        }
        return res;
      });
    };
    _proto.constructUrlFromMedia_ = function constructUrlFromMedia_(id, usePlayer) {
      var queryParams = dict();
      queryParams["channelId"] = this.embedOptions_.distributionChannelId;
      queryParams["type"] = this.embedOptions_.playlist ? "playlist" : "editorial";
      queryParams["platform"] = getPlatform();
      queryParams["cannonicalUrl"] = Services.documentInfoForDoc(this.element).canonicalUrl;
      queryParams["sdk"] = "amp";
      return addParamsToUrl(this.rendererBaseUrl_ + "/" + (usePlayer ? "v2" : "interaction") + "/" + ("" + encodeURIComponent(id)), queryParams);
    };
    _proto.constructIframe_ = function constructIframe_(src) {
      var iframe = this.element.ownerDocument.createElement("iframe");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowtransparency", "true");
      iframe.setAttribute("scrolling", "no");
      iframe.src = src;
      iframe.name = this.win.location.href;
      iframe.height = this.height_;
      iframe.width = this.width_;
      iframe.classList.add("amp-apester-iframe");
      applyFillContent(iframe);
      return iframe;
    };
    _proto.constructLoaderImg_ = function constructLoaderImg_() {
      var img = this.element.ownerDocument.createElement("img");
      img.setAttribute("loading", "lazy");
      img.setAttribute("src", this.loaderUrl_);
      setStyles(img, {
        "width": px(100),
        "height": px(100)
      });
      return img;
    };
    _proto.constructOverflow_ = function constructOverflow_() {
      var overflow = this.element.ownerDocument.createElement("div");
      overflow.setAttribute("overflow", "");
      overflow.className = "amp-apester-overflow";
      var overflowButton = this.element.ownerDocument.createElement("button");
      overflowButton.textContent = "Full Size";
      overflow.appendChild(overflowButton);
      return overflow;
    };
    _proto.layoutCallback = function layoutCallback() {
      var _this2 = this;
      this.element.classList.add("amp-apester-container");
      var vsync = Services.vsyncFor(this.win);
      return this.queryMedia_().then(function(response) {
        if (!response || response["status"] === 204) {
          dev().warn(TAG2, "Display", "No Content for provided tag");
          return _this2.unlayoutCallback();
        }
        var payload = response["payload"];
        var media = _this2.embedOptions_.playlist ? payload[Math.floor(Math.random() * payload.length)] : payload;
        var interactionId = media["interactionId"];
        var usePlayer = media["usePlayer"];
        var src = _this2.constructUrlFromMedia_(interactionId, usePlayer);
        var iframe = _this2.constructIframe_(src);
        _this2.intersectionObserverHostApi_ = new IntersectionObserver3pHost(_this2, iframe);
        _this2.mediaId_ = interactionId;
        _this2.iframe_ = iframe;
        _this2.registerToApesterEvents_();
        return vsync.mutatePromise(function() {
          var overflow = _this2.constructOverflow_();
          _this2.element.appendChild(overflow);
          _this2.element.appendChild(iframe);
          handleCompanionAds(media, _this2.element);
        }).then(function() {
          return _this2.loadPromise(iframe);
        }).then(function() {
          return vsync.mutatePromise(function() {
            var _media$data$size$heig, _media$data, _media$data$size;
            if (_this2.iframe_) {
              _this2.iframe_.classList.add("i-amphtml-apester-iframe-ready");
              var campaignData = media["campaignData"];
              if (campaignData) {
                var bottomAdOptions = campaignData["bottomAdOptions"];
                if (bottomAdOptions != null && bottomAdOptions.enabled) {
                  _this2.hasBottomAd_ = true;
                  var ampdoc2 = _this2.getAmpDoc();
                  Services.extensionsFor(_this2.win).installExtensionForDoc(ampdoc2, AD_TAG);
                  _this2.iframe_.contentWindow.postMessage(BOTTOM_AD_MESSAGE, "*");
                }
                _this2.iframe_.contentWindow.postMessage({
                  type: "campaigns",
                  data: campaignData
                }, "*");
              }
            }
            var height = (_media$data$size$heig = media == null ? void 0 : (_media$data = media["data"]) == null ? void 0 : (_media$data$size = _media$data["size"]) == null ? void 0 : _media$data$size["height"]) != null ? _media$data$size$heig : 0;
            if (height != _this2.height_) {
              _this2.height_ = height;
              if (_this2.random_) {
                _this2.attemptChangeHeight(height);
              } else {
                _this2.forceChangeHeight(height);
              }
            }
          });
        }).then(function() {
          _this2.unobserveIntersections_ = observeIntersections(_this2.element, function(_ref) {
            var isIntersecting = _ref.isIntersecting;
            return _this2.viewportCallback_(isIntersecting);
          });
        });
      }).catch(function(error) {
        user().error(TAG2, "Display", error);
      });
    };
    _proto.createPlaceholderCallback = function createPlaceholderCallback() {
      var placeholder = this.element.ownerDocument.createElement("div");
      var image = this.constructLoaderImg_();
      if (this.element.hasAttribute("aria-label")) {
        placeholder.setAttribute("aria-label", "Loading - " + this.element.getAttribute("aria-label"));
      } else {
        placeholder.setAttribute("aria-label", "Loading Apester Media");
      }
      placeholder.setAttribute("placeholder", "");
      placeholder.className = "amp-apester-loader";
      setStyles(image, {
        position: "relative",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      });
      placeholder.appendChild(image);
      this.placeholder_ = placeholder;
      return placeholder;
    };
    _proto.unlayoutOnPause = function unlayoutOnPause() {
      return true;
    };
    _proto.unlayoutCallback = function unlayoutCallback() {
      var _this$unobserveInters;
      (_this$unobserveInters = this.unobserveIntersections_) == null ? void 0 : _this$unobserveInters.call(this);
      this.unobserveIntersections_ = null;
      if (this.iframe_) {
        this.intersectionObserverHostApi_.destroy();
        this.intersectionObserverHostApi_ = null;
        this.unlisteners_.forEach(function(unlisten) {
          return unlisten();
        });
        removeElement(this.iframe_);
        this.iframe_ = null;
      }
      if (this.placeholder_) {
        removeElement(this.placeholder_);
        this.placeholder_ = null;
      }
      return false;
    };
    _proto.registerToApesterEvents_ = function registerToApesterEvents_() {
      var _this3 = this;
      registerEvent(apesterEventNames.SET_FULL_SCREEN, function(data) {
        if (_this3.mediaId_ === data.id) {
          setFullscreenOn(_this3.element);
        }
      }, this.win, this.iframe_, this.unlisteners_);
      registerEvent(apesterEventNames.REMOVE_FULL_SCREEN, function(data) {
        if (_this3.mediaId_ === data.id) {
          setFullscreenOff(_this3.element);
        }
      }, this.win, this.iframe_, this.unlisteners_);
      registerEvent(apesterEventNames.RESIZE_UNIT, function(data) {
        if (_this3.mediaId_ === data.id && data.height) {
          _this3.attemptChangeHeight(data.height);
          if (_this3.hasBottomAd_) {
            _this3.iframe_.contentWindow.postMessage(BOTTOM_AD_MESSAGE, "*");
          }
        }
      }, this.win, this.iframe_, this.unlisteners_);
    };
    return AmpApesterMedia2;
  }(AMP.BaseElement);
  AMP.registerElement(TAG2, AmpApesterMedia, CSS2);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-apester-media-0.1.max.js.map
