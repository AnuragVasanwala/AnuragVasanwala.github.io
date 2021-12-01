(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-lightbox",ev:"0.1",l:true,f:(function(AMP,_){
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

  // src/core/types/object/index.js
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

  // src/core/constants/action-constants.js
  var ActionTrust_Enum = {
    LOW: 1,
    DEFAULT: 2,
    HIGH: 3
  };

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

  // build/amp-lightbox-0.1.css.js
  var CSS2 = "amp-lightbox{display:none;position:fixed!important;z-index:1000;top:0!important;left:0!important;bottom:0!important;right:0!important}amp-lightbox[scrollable]{overflow-y:auto!important;overflow-x:hidden!important}amp-lightbox i-amphtml-ad-close-header{height:60px!important;display:block!important;visibility:visible!important;opacity:0;position:fixed!important;top:0!important;left:0!important;right:0!important;z-index:1000!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:right!important;justify-content:right!important;transition:opacity 0.1s ease-in}[animate-in=fly-in-bottom]>i-amphtml-ad-close-header,[animate-in=fly-in-top]>i-amphtml-ad-close-header{transition-delay:0.2s}amp-lightbox .amp-ad-close-header{opacity:1!important;box-sizing:border-box;padding:5px;line-height:40px;background-color:#000;color:#fff;font-family:Helvetica,sans-serif;font-size:12px;cursor:pointer}amp-lightbox .amp-ad-close-header>:first-child{margin-left:auto!important;pointer-events:none!important}amp-lightbox .amp-ad-close-button{display:block!important;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23fff'%3E%3Cpath d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\") no-repeat;background-position:50%;width:40px;height:40px;pointer-events:none!important;border-radius:40px;margin-left:5px}amp-lightbox .amp-ad-close-header:active>.amp-ad-close-button{background-color:hsla(0,0%,100%,0.3)}\n/*# sourceURL=/extensions/amp-lightbox/0.1/amp-lightbox.css*/";

  // src/core/data-structures/observable.js
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
      for (var _iterator = _createForOfIteratorHelperLoose(this.handlers_), _step; !(_step = _iterator()).done; ) {
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

  // src/core/dom/event-helper-listen.js
  var passiveSupported;
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

  // src/core/window/index.js
  function toWin(winOrNull) {
    return winOrNull;
  }
  function getWin(node) {
    return toWin((node.ownerDocument || node).defaultView);
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
  function tryCallback(callback) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return callback.apply(null, args);
    } catch (e) {
      rethrowAsync(e);
    }
  }
  function devError(tag) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    var error = createError.apply(null, args);
    error.name = tag || error.name;
    maybeReportError(error);
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
  function userAssert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    return user().assert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
  }

  // src/core/dom/query.js
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
  function childElements(parent, callback) {
    var children = [];
    for (var child = parent.firstElementChild; child; child = child.nextElementSibling) {
      if (callback(child)) {
        children.push(child);
      }
    }
    return children;
  }
  function realChildElements(element) {
    return childElements(element, function(element2) {
      return !isInternalOrServiceNode(element2);
    });
  }
  function isInternalOrServiceNode(node) {
    if (isInternalElement(node)) {
      return true;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) {
      return false;
    }
    devAssertElement(node);
    return node.hasAttribute("placeholder") || node.hasAttribute("fallback") || node.hasAttribute("overflow");
  }
  function isInternalElement(nodeOrTagName) {
    var tagName;
    if (typeof nodeOrTagName == "string") {
      tagName = nodeOrTagName;
    } else if (nodeOrTagName.nodeType === Node.ELEMENT_NODE) {
      tagName = devAssertElement(nodeOrTagName).tagName;
    }
    return !!tagName && tagName.toLowerCase().startsWith("i-");
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
  function tryFocus(element) {
    try {
      element.focus();
    } catch (e) {
    }
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
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
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
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  var SwipeRecognizer = /* @__PURE__ */ function(_GestureRecognizer3) {
    _inherits(SwipeRecognizer2, _GestureRecognizer3);
    var _super3 = _createSuper(SwipeRecognizer2);
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
        var _touches$ = touches[0], x = _touches$.clientX, y = _touches$.clientY;
        this.lastX_ = x;
        this.lastY_ = y;
        if (this.eventing_) {
          this.emit_(false, false, e);
        } else {
          var dx = Math.abs(x - this.startX_);
          var dy = Math.abs(y - this.startY_);
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
    _inherits(SwipeXYRecognizer2, _SwipeRecognizer);
    var _super4 = _createSuper(SwipeXYRecognizer2);
    function SwipeXYRecognizer2(manager) {
      return _super4.call(this, "swipe-xy", manager, true, true);
    }
    return SwipeXYRecognizer2;
  }(SwipeRecognizer);

  // src/core/dom/layout/index.js
  function applyFillContent(element, opt_replacedContent) {
    element.classList.add("i-amphtml-fill-content");
    if (opt_replacedContent) {
      element.classList.add("i-amphtml-replaced-content");
    }
  }

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

  // src/utils/event-helper.js
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

  // src/url.js
  var SERVING_TYPE_PREFIX = new Set([
    "c",
    "v",
    "a",
    "ad"
  ]);

  // src/iframe-helper.js
  function isInFie(element) {
    return element.classList.contains("i-amphtml-fie") || !!closestAncestorElementBySelector(element, ".i-amphtml-fie");
  }

  // src/core/dom/resource-container-helper.js
  var AMP_CLASS = "i-amphtml-element";
  var DEEP = true;
  var unmount = function unmount2(element) {
    return element.unmount();
  };
  function unmountAll(containerOrContainers, includeSelf) {
    if (includeSelf === void 0) {
      includeSelf = true;
    }
    forAllWithin(containerOrContainers, includeSelf, DEEP, unmount);
  }
  function forAllWithin(containerOrContainers, includeSelf, deep, callback) {
    var containers = arrayOrSingleItemToArray(containerOrContainers);
    for (var i = 0; i < containers.length; i++) {
      forAllWithinInternal(containers[i], includeSelf, deep, callback);
    }
  }
  function forAllWithinInternal(container, includeSelf, deep, callback) {
    if (includeSelf && container.classList.contains(AMP_CLASS)) {
      var ampContainer = container;
      tryCallback(callback, ampContainer);
      if (!deep) {
        var placeholder = ampContainer.getPlaceholder();
        if (placeholder) {
          forAllWithinInternal(placeholder, true, !DEEP, callback);
        }
        return;
      }
    }
    var descendants = container.getElementsByClassName(AMP_CLASS);
    var seen = null;
    for (var i = 0; i < descendants.length; i++) {
      var descendant = descendants[i];
      if (deep) {
        tryCallback(callback, descendant);
      } else {
        seen = seen || [];
        var covered = false;
        for (var j = 0; j < seen.length; j++) {
          if (seen[j].contains(descendant)) {
            covered = true;
            break;
          }
        }
        if (!covered) {
          seen.push(descendant);
          tryCallback(callback, descendant);
        }
      }
    }
  }

  // extensions/amp-lightbox/0.1/amp-lightbox.js
  var _templateObject;
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf2(subClass, superClass);
  }
  function _setPrototypeOf2(o, p) {
    _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
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
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf2(o);
  }
  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var TAG = "amp-lightbox";
  var LightboxEvents = {
    OPEN: "lightboxOpen",
    CLOSE: "lightboxClose"
  };
  var AnimationPresets = {
    "fade-in": {
      openStyle: dict({
        "opacity": 1
      }),
      closedStyle: dict({
        "opacity": 0
      }),
      durationSeconds: 0.1
    },
    "fly-in-bottom": {
      openStyle: dict({
        "transform": "translate(0, 0)"
      }),
      closedStyle: dict({
        "transform": "translate(0, 100%)"
      }),
      durationSeconds: 0.2
    },
    "fly-in-top": {
      openStyle: dict({
        "transform": "translate(0, 0)"
      }),
      closedStyle: dict({
        "transform": "translate(0, -100%)"
      }),
      durationSeconds: 0.2
    }
  };
  var DEFAULT_ANIMATION = "fade-in";
  function renderCloseButtonHeader(ctx) {
    return htmlFor(ctx)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(['\n    <i-amphtml-ad-close-header role=button tabindex=0 aria-label="Close Ad">\n      <div>Ad</div>\n      <i-amphtml-ad-close-button class="amp-ad-close-button">\n      </i-amphtml-ad-close-button>\n    </i-amphtml-ad-close-header>'])));
  }
  var AmpLightbox = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits2(AmpLightbox2, _AMP$BaseElement);
    var _super = _createSuper2(AmpLightbox2);
    function AmpLightbox2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.size_ = null;
      _this.container_ = null;
      _this.document_ = _this.win.document;
      _this.action_ = null;
      _this.historyId_ = -1;
      _this.active_ = false;
      _this.boundCloseOnEscape_ = null;
      _this.boundCloseOnEnter_ = null;
      _this.boundFocusin_ = null;
      _this.boundClose_ = null;
      _this.openerElement_ = null;
      _this.isScrollable_ = false;
      _this.pos_ = 0;
      _this.eventCounter_ = 0;
      _this.scrollTimerId_ = null;
      _this.animationPreset_ = (element.getAttribute("animate-in") || DEFAULT_ANIMATION).toLowerCase();
      _this.closeButtonHeader_ = null;
      _this.closeButton_ = null;
      _this.closeButtonSR_ = null;
      var platform = Services.platformFor(_this.win);
      _this.isIos_ = platform.isIos();
      _this.boundReschedule_ = debounce(_this.win, function() {
        var container = user().assertElement(_this.container_, "E#19457 this.container_");
        var owners = Services.ownersForDoc(_this.element);
        owners.scheduleLayout(_this.element, container);
        owners.scheduleResume(_this.element, container);
      }, 500);
      return _this;
    }
    var _proto = AmpLightbox2.prototype;
    _proto.buildCallback = function buildCallback() {
      var _this2 = this;
      this.user().assert(hasOwn(AnimationPresets, this.animationPreset_), "Invalid `animate-in` value %s", this.animationPreset_);
      this.element.classList.add("i-amphtml-overlay");
      this.action_ = Services.actionServiceForDoc(this.element);
      this.maybeSetTransparentBody_();
      this.registerDefaultAction(function(i) {
        return _this2.open_(i.trust, i.caller);
      }, "open");
      this.registerAction("close", function(i) {
        return _this2.close(i.trust);
      });
      this.action_.addToAllowlist("AMP-LIGHTBOX", ["open", "close"], ["email"]);
    };
    _proto.takeOwnershipOfDescendants_ = function takeOwnershipOfDescendants_() {
      var _this3 = this;
      devAssert2(this.isScrollable_);
      this.getComponentDescendants_().forEach(function(child) {
        Services.ownersForDoc(_this3.element).setOwner(child, _this3.element);
      });
    };
    _proto.getComponentDescendants_ = function getComponentDescendants_() {
      return toArray(this.element.getElementsByClassName("i-amphtml-element"));
    };
    _proto.initialize_ = function initialize_() {
      var _this4 = this;
      if (this.container_) {
        return;
      }
      var element = this.element;
      this.isScrollable_ = element.hasAttribute("scrollable");
      var children = realChildElements(this.element);
      this.container_ = element.ownerDocument.createElement("div");
      if (!this.isScrollable_) {
        applyFillContent(this.container_);
      }
      element.appendChild(this.container_);
      children.forEach(function(child) {
        _this4.container_.appendChild(child);
      });
      if (this.isScrollable_) {
        this.takeOwnershipOfDescendants_();
        element.classList.add("i-amphtml-scrollable");
        element.addEventListener(AmpEvents_Enum.DOM_UPDATE, function() {
          _this4.takeOwnershipOfDescendants_();
          _this4.updateChildrenInViewport_(_this4.pos_);
        });
        element.addEventListener("scroll", this.scrollHandler_.bind(this));
      }
      if (!this.isScrollable_) {
        var gestures = Gestures.get(element);
        gestures.onGesture(SwipeXYRecognizer, function() {
        });
      }
      this.maybeCreateCloseButtonHeader_();
    };
    _proto.layoutCallback = function layoutCallback() {
      return resolvedPromise();
    };
    _proto.open_ = function open_(trust, openerElement) {
      var _this5 = this;
      if (this.active_) {
        return;
      }
      this.initialize_();
      this.boundCloseOnEscape_ = this.closeOnEscape_.bind(this);
      this.document_.documentElement.addEventListener("keydown", this.boundCloseOnEscape_);
      this.boundFocusin_ = this.onFocusin_.bind(this);
      this.document_.documentElement.addEventListener("focusin", this.boundFocusin_);
      if (openerElement) {
        this.openerElement_ = openerElement;
      }
      var _Deferred = new Deferred(), promise = _Deferred.promise, resolve = _Deferred.resolve;
      this.getViewport().enterLightboxMode(this.element, promise).then(function() {
        return _this5.finalizeOpen_(resolve, trust);
      });
    };
    _proto.mutatedAttributesCallback = function mutatedAttributesCallback(mutations) {
      var open = mutations["open"];
      if (open !== void 0) {
        if (open) {
          this.open_(ActionTrust_Enum.DEFAULT, document.activeElement);
        } else {
          this.close(ActionTrust_Enum.DEFAULT);
        }
      }
    };
    _proto.handleAutofocus_ = function handleAutofocus_() {
      var autofocusElement = this.container_.querySelector("[autofocus]");
      if (autofocusElement) {
        tryFocus(autofocusElement);
      }
    };
    _proto.finalizeOpen_ = function finalizeOpen_(callback, trust) {
      var _this6 = this;
      var element = this.element;
      var _this$getAnimationPre = this.getAnimationPresetDef_(), closedStyle = _this$getAnimationPre.closedStyle, durationSeconds = _this$getAnimationPre.durationSeconds, openStyle = _this$getAnimationPre.openStyle;
      var props = Object.keys(openStyle);
      var transition = props.map(function(p) {
        return p + " " + durationSeconds + "s ease-in";
      }).join(",");
      this.eventCounter_++;
      if (this.isScrollable_) {
        setStyle(element, "webkitOverflowScrolling", "touch");
      }
      setStyle(element, "transition", transition);
      setStyles(element, assertDoesNotContainDisplay(closedStyle));
      toggle(element, true);
      this.mutateElement(function() {
        element.scrollTop = 0;
      });
      this.handleAutofocus_();
      this.mutateElement(function() {
        setStyles(element, assertDoesNotContainDisplay(openStyle));
      });
      var container = dev().assertElement(this.container_);
      if (this.isScrollable_) {
        this.scrollHandler_();
        this.updateChildrenInViewport_(this.pos_);
      }
      var onAnimationEnd = function onAnimationEnd2() {
        _this6.boundReschedule_();
        callback();
      };
      element.addEventListener("transitionend", onAnimationEnd);
      element.addEventListener("animationend", onAnimationEnd);
      this.setAsContainer();
      var owners = Services.ownersForDoc(this.element);
      owners.scheduleLayout(this.element, container);
      owners.scheduleResume(this.element, container);
      this.triggerEvent_(LightboxEvents.OPEN, trust);
      this.getHistory_().push(function(unused) {
        return _this6.close(trust);
      }).then(function(historyId) {
        _this6.historyId_ = historyId;
      });
      this.maybeRenderCloseButtonHeader_();
      this.focusInModal_();
      this.tieCloseButton_();
      this.active_ = true;
    };
    _proto.maybeCreateCloseButtonHeader_ = function maybeCreateCloseButtonHeader_() {
      var element = this.element;
      if (element.getAttribute("close-button") == null) {
        return;
      }
      this.closeButtonHeader_ = renderCloseButtonHeader(element);
      element.insertBefore(this.closeButtonHeader_, this.container_);
    };
    _proto.maybeRenderCloseButtonHeader_ = function maybeRenderCloseButtonHeader_() {
      var _this7 = this;
      if (!this.closeButtonHeader_) {
        return;
      }
      this.boundCloseOnEnter_ = this.closeOnEnter_.bind(this);
      this.closeButtonHeader_.addEventListener("keydown", this.boundCloseOnEnter_);
      var headerHeight;
      this.measureMutateElement(function() {
        headerHeight = _this7.closeButtonHeader_.getBoundingClientRect().height;
      }, function() {
        _this7.showCloseButtonHeader_();
        setImportantStyles(dev().assertElement(_this7.container_), {
          "margin-top": px(headerHeight),
          "min-height": "calc(100vh - " + px(headerHeight) + ")"
        });
      });
    };
    _proto.showCloseButtonHeader_ = function showCloseButtonHeader_() {
      this.closeButtonHeader_.classList.add("amp-ad-close-header");
    };
    _proto.tieCloseButton_ = function tieCloseButton_() {
      if (!this.closeButtonSR_ && !this.closeButtonHeader_) {
        return;
      }
      this.boundClose_ = this.closeOnClick_.bind(this);
      this.closeButton_.addEventListener("click", this.boundClose_);
    };
    _proto.untieCloseButton_ = function untieCloseButton_() {
      if (!this.closeButtonSR_ && !this.closeButtonHeader_) {
        return;
      }
      this.closeButton_.removeEventListener("click", this.boundClose_);
      this.boundClose_ = null;
      if (!this.closeButtonHeader_) {
        return;
      }
      this.closeButtonHeader_.removeEventListener("keydown", this.boundCloseOnEnter_);
      this.boundCloseOnEnter_ = null;
    };
    _proto.getAnimationPresetDef_ = function getAnimationPresetDef_() {
      return AnimationPresets[this.animationPreset_];
    };
    _proto.closeOnClick_ = function closeOnClick_() {
      this.close(ActionTrust_Enum.HIGH);
    };
    _proto.closeOnEscape_ = function closeOnEscape_(event) {
      if (event.key == Keys_Enum.ESCAPE) {
        event.preventDefault();
        this.close(ActionTrust_Enum.HIGH);
      }
    };
    _proto.closeOnEnter_ = function closeOnEnter_(event) {
      if (event.key == Keys_Enum.ENTER) {
        event.preventDefault();
        this.close(ActionTrust_Enum.HIGH);
      }
    };
    _proto.close = function close(trust) {
      var _this8 = this;
      if (!this.active_) {
        return;
      }
      if (this.isScrollable_) {
        setStyle(this.element, "webkitOverflowScrolling", "");
      }
      this.getViewport().leaveLightboxMode(this.element).then(function() {
        return _this8.finalizeClose_(trust);
      });
    };
    _proto.finalizeClose_ = function finalizeClose_(trust) {
      var _this9 = this;
      var element = this.element;
      var event = ++this.eventCounter_;
      var collapseAndReschedule = function collapseAndReschedule2() {
        if (event != _this9.eventCounter_) {
          return;
        }
        _this9.collapse();
        _this9.boundReschedule_();
      };
      if (this.isInAd_()) {
        resetStyles(element, ["transition"]);
        collapseAndReschedule();
      } else {
        element.addEventListener("transitionend", collapseAndReschedule);
        element.addEventListener("animationend", collapseAndReschedule);
      }
      setStyles(element, assertDoesNotContainDisplay(this.getAnimationPresetDef_().closedStyle));
      if (this.historyId_ != -1) {
        this.getHistory_().pop(this.historyId_);
      }
      this.document_.documentElement.removeEventListener("keydown", this.boundCloseOnEscape_);
      this.boundCloseOnEscape_ = null;
      this.document_.documentElement.removeEventListener("focusin", this.boundFocusin_);
      this.boundFocusin_ = null;
      this.untieCloseButton_();
      this.removeAsContainer();
      unmountAll(this.element, false);
      Services.ownersForDoc(this.element).schedulePause(this.element, dev().assertElement(this.container_));
      this.active_ = false;
      this.triggerEvent_(LightboxEvents.CLOSE, trust);
      if (this.openerElement_) {
        tryFocus(this.openerElement_);
      }
    };
    _proto.isInAd_ = function isInAd_() {
      return getMode(this.win).runtime == "inabox" || isInFie(this.element);
    };
    _proto.hasCurrentFocus_ = function hasCurrentFocus_() {
      var element = this.element;
      if (element.contains(document.activeElement)) {
        return true;
      }
      return false;
    };
    _proto.onFocusin_ = function onFocusin_() {
      if (!this.hasCurrentFocus_()) {
        this.close(ActionTrust_Enum.HIGH);
      }
    };
    _proto.focusInModal_ = function focusInModal_() {
      if (!this.hasCurrentFocus_()) {
        this.closeButton_ = this.getExistingCloseButton_();
        if (!this.closeButton_) {
          this.closeButtonSR_ = this.createScreenReaderCloseButton_();
          this.element.insertBefore(this.closeButtonSR_, this.element.firstChild);
          this.closeButton_ = this.closeButtonSR_;
        }
        tryFocus(this.closeButton_);
      }
    };
    _proto.getExistingCloseButton_ = function getExistingCloseButton_() {
      if (this.closeButton_) {
        return this.closeButton_;
      }
      if (this.closeButtonHeader_) {
        return this.closeButtonHeader_;
      }
      var element = this.element;
      var candidates = element.querySelectorAll("[on]");
      for (var i = 0; i < candidates.length; i++) {
        var candidate = candidates[i];
        var hasAction = this.action_.hasResolvableActionForTarget(candidate, "tap", element, devAssert2(candidate.parentElement));
        if (hasAction) {
          return candidate;
        }
      }
    };
    _proto.createScreenReaderCloseButton_ = function createScreenReaderCloseButton_() {
      var element = this.element;
      var ariaLabel = element.getAttribute("data-close-button-aria-label") || "Close the modal";
      var screenReaderCloseButton = this.document_.createElement("button");
      screenReaderCloseButton.textContent = ariaLabel;
      screenReaderCloseButton.classList.add("i-amphtml-screen-reader");
      screenReaderCloseButton.tabIndex = -1;
      return screenReaderCloseButton;
    };
    _proto.scrollHandler_ = function scrollHandler_() {
      var currentScrollTop = this.element.scrollTop;
      if (this.isIos_) {
        if (currentScrollTop == 0) {
          this.element.scrollTop = 1;
        } else if (this.element.scrollHeight == currentScrollTop + this.element.offsetHeight) {
          this.element.scrollTop = currentScrollTop - 1;
        }
      }
      this.pos_ = currentScrollTop;
      if (this.scrollTimerId_ === null) {
        this.waitForScroll_(currentScrollTop);
      }
    };
    _proto.waitForScroll_ = function waitForScroll_(startingScrollTop) {
      var _this10 = this;
      this.scrollTimerId_ = Services.timerFor(this.win).delay(function() {
        if (Math.abs(startingScrollTop - _this10.pos_) < 30) {
          dev().fine(TAG, "slow scrolling: %s - %s", startingScrollTop, _this10.pos_);
          _this10.scrollTimerId_ = null;
          _this10.update_(_this10.pos_);
        } else {
          dev().fine(TAG, "fast scrolling: %s - %s", startingScrollTop, _this10.pos_);
          _this10.waitForScroll_(_this10.pos_);
        }
      }, 100);
    };
    _proto.update_ = function update_(pos) {
      dev().fine(TAG, "update_");
      this.updateChildrenInViewport_(pos);
      this.pos_ = pos;
    };
    _proto.updateChildrenInViewport_ = function updateChildrenInViewport_(newPos) {
      var _this11 = this;
      var seen = [];
      this.forEachVisibleChild_(newPos, function(cell) {
        seen.push(cell);
        var owners = Services.ownersForDoc(_this11.element);
        owners.scheduleLayout(_this11.element, cell);
      });
    };
    _proto.forEachVisibleChild_ = function forEachVisibleChild_(pos, callback) {
      var containerHeight = this.getSize_().height;
      var descendants = this.getComponentDescendants_();
      for (var i = 0; i < descendants.length; i++) {
        var descendant = descendants[i];
        var offsetTop = 0;
        for (var n = descendant; n && this.element.contains(n); n = n.offsetParent) {
          offsetTop += n.offsetTop;
        }
        var visibilityMargin = 2 * containerHeight;
        if (offsetTop + descendant.offsetHeight >= pos - visibilityMargin && offsetTop <= pos + visibilityMargin) {
          callback(descendant);
        }
      }
    };
    _proto.getSize_ = function getSize_() {
      if (!this.size_) {
        this.size_ = {
          width: this.element.clientWidth,
          height: this.element.clientHeight
        };
      }
      return this.size_;
    };
    _proto.getHistory_ = function getHistory_() {
      return Services.historyForDoc(this.getAmpDoc());
    };
    _proto.maybeSetTransparentBody_ = function maybeSetTransparentBody_() {
      var element = this.element, win = this.win;
      if (!isInFie(element)) {
        return;
      }
      var body = dev().assertElement(win.document.body);
      setTransparentBody(win, body);
    };
    _proto.triggerEvent_ = function triggerEvent_(name, trust) {
      var event = createCustomEvent(this.win, TAG + "." + name, dict({}));
      this.action_.trigger(this.element, name, event, trust);
    };
    return AmpLightbox2;
  }(AMP.BaseElement);
  function setTransparentBody(win, body) {
    var state = {};
    var ampdoc2 = Services.ampdocServiceFor(win).getAmpDoc(body);
    Services.mutatorForDoc(ampdoc2).measureMutateElement(body, function measure() {
      state.alreadyTransparent = computedStyle(win, body)["background-color"] == "rgba(0, 0, 0, 0)";
    }, function mutate() {
      if (!state.alreadyTransparent && !getMode().test) {
        user().warn(TAG, "The background of the <body> element has been forced to transparent. If you need to set background, use an intermediate container.");
      }
      setImportantStyles(body, {
        background: "transparent"
      });
    });
  }
  if (getMode().runtime == "inabox") {
    setTransparentBody(window, devAssert2(document.body));
  }
  AMP.registerElement(TAG, AmpLightbox, CSS2);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-lightbox-0.1.max.js.map
