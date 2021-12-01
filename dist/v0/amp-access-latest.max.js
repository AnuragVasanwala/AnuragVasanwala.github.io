(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-access",ev:"0.1",l:true,f:(function(AMP,_){
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
  function fromIterator(iterator) {
    var array = [];
    for (var e = iterator.next(); !e.done; e = iterator.next()) {
      array.push(e.value);
    }
    return array;
  }
  function removeItem(array, item) {
    var index = array.indexOf(item);
    if (index == -1) {
      return false;
    }
    array.splice(index, 1);
    return true;
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
  function escapeCssSelectorIdent(ident) {
    if (isEsm()) {
      return CSS.escape(ident);
    }
    return cssEscape(ident);
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
  function isJsonScriptTag(element) {
    var _element$getAttribute;
    return element.tagName == "SCRIPT" && ((_element$getAttribute = element.getAttribute("type")) == null ? void 0 : _element$getAttribute.toUpperCase()) == "APPLICATION/JSON";
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
  function listen(element, eventType, listener, opt_evtListenerOpts) {
    return internalListenImplementation(element, eventType, listener, opt_evtListenerOpts);
  }
  function getData(event) {
    return event.data;
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

  // build/parsers/access-expr-impl.js
  var parser = function() {
    var o = function o2(k, v, _o, l) {
      for (_o = _o || {}, l = k.length; l--; _o[k[l]] = v) {
        ;
      }
      return _o;
    }, $V0 = [1, 3], $V1 = [1, 4], $V2 = [1, 18], $V3 = [1, 19], $V4 = [1, 14], $V5 = [1, 15], $V6 = [1, 16], $V7 = [1, 17], $V8 = [1, 21], $V9 = [1, 22], $Va = [5, 6, 7, 10], $Vb = [5, 6, 7, 10, 15, 16, 17, 18, 19, 20, 21], $Vc = [5, 6, 7, 10, 15, 16, 17, 18, 19, 20, 21, 25, 27];
    var parser2 = {
      trace: function trace() {
      },
      yy: {},
      symbols_: {
        "error": 2,
        "result": 3,
        "search_condition": 4,
        "EOF": 5,
        "OR": 6,
        "AND": 7,
        "NOT": 8,
        "(": 9,
        ")": 10,
        "predicate": 11,
        "comparison_predicate": 12,
        "truthy_predicate": 13,
        "scalar_exp": 14,
        "EQ": 15,
        "DEQ": 16,
        "NEQ": 17,
        "LT": 18,
        "LTE": 19,
        "GT": 20,
        "GTE": 21,
        "atom": 22,
        "field_ref": 23,
        "literal": 24,
        "DOT": 25,
        "field_name": 26,
        "[": 27,
        "string": 28,
        "]": 29,
        "NAME": 30,
        "STRING": 31,
        "NUMERIC": 32,
        "TRUE": 33,
        "FALSE": 34,
        "NULL": 35,
        "$accept": 0,
        "$end": 1
      },
      terminals_: {
        2: "error",
        5: "EOF",
        6: "OR",
        7: "AND",
        8: "NOT",
        9: "(",
        10: ")",
        15: "EQ",
        16: "DEQ",
        17: "NEQ",
        18: "LT",
        19: "LTE",
        20: "GT",
        21: "GTE",
        25: "DOT",
        27: "[",
        29: "]",
        30: "NAME",
        31: "STRING",
        32: "NUMERIC",
        33: "TRUE",
        34: "FALSE",
        35: "NULL"
      },
      productions_: [0, [3, 2], [4, 3], [4, 3], [4, 2], [4, 3], [4, 1], [11, 1], [11, 1], [12, 3], [12, 3], [12, 3], [12, 3], [12, 3], [12, 3], [12, 3], [13, 1], [14, 1], [14, 1], [22, 1], [23, 3], [23, 4], [23, 1], [26, 1], [28, 1], [24, 1], [24, 1], [24, 1], [24, 1], [24, 1]],
      performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
        var $0 = $$.length - 1;
        switch (yystate) {
          case 1:
            return $$[$0 - 1];
            break;
          case 2:
            this.$ = $$[$0 - 2] || $$[$0];
            break;
          case 3:
            this.$ = $$[$0 - 2] && $$[$0];
            break;
          case 4:
            this.$ = !$$[$0];
            break;
          case 5:
            this.$ = $$[$0 - 1];
            break;
          case 6:
          case 7:
          case 8:
          case 17:
          case 18:
          case 19:
            this.$ = $$[$0];
            break;
          case 9:
            this.$ = $$[$0 - 2] === $$[$0];
            break;
          case 10:
            throw new Error('"==" is not allowed, use "="');
            break;
          case 11:
            this.$ = $$[$0 - 2] !== $$[$0];
            break;
          case 12:
            this.$ = typeof $$[$0 - 2] == typeof $$[$0] && $$[$0 - 2] < $$[$0];
            break;
          case 13:
            this.$ = typeof $$[$0 - 2] == typeof $$[$0] && $$[$0 - 2] <= $$[$0];
            break;
          case 14:
            this.$ = typeof $$[$0 - 2] == typeof $$[$0] && $$[$0 - 2] > $$[$0];
            break;
          case 15:
            this.$ = typeof $$[$0 - 2] == typeof $$[$0] && $$[$0 - 2] >= $$[$0];
            break;
          case 16:
            this.$ = $$[$0] !== void 0 && $$[$0] !== null && $$[$0] !== "" && $$[$0] !== 0 && $$[$0] !== false;
            break;
          case 20:
            this.$ = Object.prototype.toString.call($$[$0 - 2]) == "[object Object]" && $$[$0 - 2].hasOwnProperty($$[$0]) ? $$[$0 - 2][$$[$0]] : null;
            break;
          case 21:
            this.$ = Object.prototype.toString.call($$[$0 - 3]) == "[object Object]" && $$[$0 - 3].hasOwnProperty($$[$0 - 1]) ? $$[$0 - 3][$$[$0 - 1]] : null;
            break;
          case 22:
            this.$ = yy[$$[$0]] !== void 0 ? yy[$$[$0]] : null;
            break;
          case 23:
            this.$ = yytext;
            break;
          case 24:
            this.$ = yytext.substring(1, yytext.length - 1);
            break;
          case 26:
            this.$ = Number(yytext);
            break;
          case 27:
            this.$ = true;
            break;
          case 28:
            this.$ = false;
            break;
          case 29:
            this.$ = null;
            break;
        }
      },
      table: [{
        3: 1,
        4: 2,
        8: $V0,
        9: $V1,
        11: 5,
        12: 6,
        13: 7,
        14: 8,
        22: 9,
        23: 10,
        24: 11,
        26: 12,
        28: 13,
        30: $V2,
        31: $V3,
        32: $V4,
        33: $V5,
        34: $V6,
        35: $V7
      }, {
        1: [3]
      }, {
        5: [1, 20],
        6: $V8,
        7: $V9
      }, {
        4: 23,
        8: $V0,
        9: $V1,
        11: 5,
        12: 6,
        13: 7,
        14: 8,
        22: 9,
        23: 10,
        24: 11,
        26: 12,
        28: 13,
        30: $V2,
        31: $V3,
        32: $V4,
        33: $V5,
        34: $V6,
        35: $V7
      }, {
        4: 24,
        8: $V0,
        9: $V1,
        11: 5,
        12: 6,
        13: 7,
        14: 8,
        22: 9,
        23: 10,
        24: 11,
        26: 12,
        28: 13,
        30: $V2,
        31: $V3,
        32: $V4,
        33: $V5,
        34: $V6,
        35: $V7
      }, o($Va, [2, 6]), o($Va, [2, 7]), o($Va, [2, 8]), o($Va, [2, 16], {
        15: [1, 25],
        16: [1, 26],
        17: [1, 27],
        18: [1, 28],
        19: [1, 29],
        20: [1, 30],
        21: [1, 31]
      }), o($Vb, [2, 17]), o($Vb, [2, 18], {
        25: [1, 32],
        27: [1, 33]
      }), o($Vb, [2, 19]), o($Vc, [2, 22]), o($Vb, [2, 25]), o($Vb, [2, 26]), o($Vb, [2, 27]), o($Vb, [2, 28]), o($Vb, [2, 29]), o($Vc, [2, 23]), o([5, 6, 7, 10, 15, 16, 17, 18, 19, 20, 21, 29], [2, 24]), {
        1: [2, 1]
      }, {
        4: 34,
        8: $V0,
        9: $V1,
        11: 5,
        12: 6,
        13: 7,
        14: 8,
        22: 9,
        23: 10,
        24: 11,
        26: 12,
        28: 13,
        30: $V2,
        31: $V3,
        32: $V4,
        33: $V5,
        34: $V6,
        35: $V7
      }, {
        4: 35,
        8: $V0,
        9: $V1,
        11: 5,
        12: 6,
        13: 7,
        14: 8,
        22: 9,
        23: 10,
        24: 11,
        26: 12,
        28: 13,
        30: $V2,
        31: $V3,
        32: $V4,
        33: $V5,
        34: $V6,
        35: $V7
      }, o($Va, [2, 4]), {
        6: $V8,
        7: $V9,
        10: [1, 36]
      }, {
        14: 37,
        22: 9,
        23: 10,
        24: 11,
        26: 12,
        28: 13,
        30: $V2,
        31: $V3,
        32: $V4,
        33: $V5,
        34: $V6,
        35: $V7
      }, {
        14: 38,
        22: 9,
        23: 10,
        24: 11,
        26: 12,
        28: 13,
        30: $V2,
        31: $V3,
        32: $V4,
        33: $V5,
        34: $V6,
        35: $V7
      }, {
        14: 39,
        22: 9,
        23: 10,
        24: 11,
        26: 12,
        28: 13,
        30: $V2,
        31: $V3,
        32: $V4,
        33: $V5,
        34: $V6,
        35: $V7
      }, {
        14: 40,
        22: 9,
        23: 10,
        24: 11,
        26: 12,
        28: 13,
        30: $V2,
        31: $V3,
        32: $V4,
        33: $V5,
        34: $V6,
        35: $V7
      }, {
        14: 41,
        22: 9,
        23: 10,
        24: 11,
        26: 12,
        28: 13,
        30: $V2,
        31: $V3,
        32: $V4,
        33: $V5,
        34: $V6,
        35: $V7
      }, {
        14: 42,
        22: 9,
        23: 10,
        24: 11,
        26: 12,
        28: 13,
        30: $V2,
        31: $V3,
        32: $V4,
        33: $V5,
        34: $V6,
        35: $V7
      }, {
        14: 43,
        22: 9,
        23: 10,
        24: 11,
        26: 12,
        28: 13,
        30: $V2,
        31: $V3,
        32: $V4,
        33: $V5,
        34: $V6,
        35: $V7
      }, {
        26: 44,
        30: $V2
      }, {
        28: 45,
        31: $V3
      }, o([5, 6, 10], [2, 2], {
        7: $V9
      }), o($Va, [2, 3]), o($Va, [2, 5]), o($Va, [2, 9]), o($Va, [2, 10]), o($Va, [2, 11]), o($Va, [2, 12]), o($Va, [2, 13]), o($Va, [2, 14]), o($Va, [2, 15]), o($Vc, [2, 20]), {
        29: [1, 46]
      }, o($Vc, [2, 21])],
      defaultActions: {
        20: [2, 1]
      },
      parseError: function parseError(str, hash) {
        if (hash.recoverable) {
          this.trace(str);
        } else {
          var error = new Error(str);
          error.hash = hash;
          throw error;
        }
      },
      parse: function parse(input) {
        var self2 = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
        var args = lstack.slice.call(arguments, 1);
        var lexer2 = Object.create(this.lexer);
        var sharedState = {
          yy: {}
        };
        for (var k in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
          }
        }
        lexer2.setInput(input, sharedState.yy);
        sharedState.yy.lexer = lexer2;
        sharedState.yy.parser = this;
        if (typeof lexer2.yylloc == "undefined") {
          lexer2.yylloc = {};
        }
        var yyloc = lexer2.yylloc;
        lstack.push(yyloc);
        var ranges = lexer2.options && lexer2.options.ranges;
        if (typeof sharedState.yy.parseError === "function") {
          this.parseError = sharedState.yy.parseError;
        } else {
          this.parseError = Object.getPrototypeOf(this).parseError;
        }
        function popStack(n) {
          stack.length = stack.length - 2 * n;
          vstack.length = vstack.length - n;
          lstack.length = lstack.length - n;
        }
        var lex = function lex2() {
          var token;
          token = lexer2.lex() || EOF;
          if (typeof token !== "number") {
            token = self2.symbols_[token] || token;
          }
          return token;
        };
        var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
        while (true) {
          state = stack[stack.length - 1];
          if (this.defaultActions[state]) {
            action = this.defaultActions[state];
          } else {
            if (symbol === null || typeof symbol == "undefined") {
              symbol = lex();
            }
            action = table[state] && table[state][symbol];
          }
          if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            expected = [];
            for (p in table[state]) {
              if (this.terminals_[p] && p > TERROR) {
                expected.push("'" + this.terminals_[p] + "'");
              }
            }
            if (lexer2.showPosition) {
              errStr = "Parse error on line " + (yylineno + 1) + ":\n" + lexer2.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
            } else {
              errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == EOF ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
            }
            this.parseError(errStr, {
              text: lexer2.match,
              token: this.terminals_[symbol] || symbol,
              line: lexer2.yylineno,
              loc: yyloc,
              expected: expected
            });
          }
          if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
          }
          switch (action[0]) {
            case 1:
              stack.push(symbol);
              vstack.push(lexer2.yytext);
              lstack.push(lexer2.yylloc);
              stack.push(action[1]);
              symbol = null;
              if (!preErrorSymbol) {
                yyleng = lexer2.yyleng;
                yytext = lexer2.yytext;
                yylineno = lexer2.yylineno;
                yyloc = lexer2.yylloc;
                if (recovering > 0) {
                  recovering--;
                }
              } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
              }
              break;
            case 2:
              len = this.productions_[action[1]][1];
              yyval.$ = vstack[vstack.length - len];
              yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
              };
              if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
              }
              r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));
              if (typeof r !== "undefined") {
                return r;
              }
              if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
              }
              stack.push(this.productions_[action[1]][0]);
              vstack.push(yyval.$);
              lstack.push(yyval._$);
              newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
              stack.push(newState);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }
    };
    var lexer = function() {
      var lexer2 = {
        EOF: 1,
        parseError: function parseError(str, hash) {
          if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
          } else {
            throw new Error(str);
          }
        },
        setInput: function setInput(input, yy) {
          this.yy = yy || this.yy || {};
          this._input = input;
          this._more = this._backtrack = this.done = false;
          this.yylineno = this.yyleng = 0;
          this.yytext = this.matched = this.match = "";
          this.conditionStack = ["INITIAL"];
          this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          };
          if (this.options.ranges) {
            this.yylloc.range = [0, 0];
          }
          this.offset = 0;
          return this;
        },
        input: function input() {
          var ch = this._input[0];
          this.yytext += ch;
          this.yyleng++;
          this.offset++;
          this.match += ch;
          this.matched += ch;
          var lines = ch.match(/(?:\r\n?|\n).*/g);
          if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
          } else {
            this.yylloc.last_column++;
          }
          if (this.options.ranges) {
            this.yylloc.range[1]++;
          }
          this._input = this._input.slice(1);
          return ch;
        },
        unput: function unput(ch) {
          var len = ch.length;
          var lines = ch.split(/(?:\r\n?|\n)/g);
          this._input = ch + this._input;
          this.yytext = this.yytext.substr(0, this.yytext.length - len);
          this.offset -= len;
          var oldLines = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
          }
          var r = this.yylloc.range;
          this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
          };
          if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
          }
          this.yyleng = this.yytext.length;
          return this;
        },
        more: function more() {
          this._more = true;
          return this;
        },
        reject: function reject() {
          if (this.options.backtrack_lexer) {
            this._backtrack = true;
          } else {
            return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
              text: "",
              token: null,
              line: this.yylineno
            });
          }
          return this;
        },
        less: function less(n) {
          this.unput(this.match.slice(n));
        },
        pastInput: function pastInput() {
          var past = this.matched.substr(0, this.matched.length - this.match.length);
          return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
        },
        upcomingInput: function upcomingInput() {
          var next = this.match;
          if (next.length < 20) {
            next += this._input.substr(0, 20 - next.length);
          }
          return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
        },
        showPosition: function showPosition() {
          var pre = this.pastInput();
          var c = new Array(pre.length + 1).join("-");
          return pre + this.upcomingInput() + "\n" + c + "^";
        },
        test_match: function test_match(match, indexed_rule) {
          var token, lines, backup;
          if (this.options.backtrack_lexer) {
            backup = {
              yylineno: this.yylineno,
              yylloc: {
                first_line: this.yylloc.first_line,
                last_line: this.last_line,
                first_column: this.yylloc.first_column,
                last_column: this.yylloc.last_column
              },
              yytext: this.yytext,
              match: this.match,
              matches: this.matches,
              matched: this.matched,
              yyleng: this.yyleng,
              offset: this.offset,
              _more: this._more,
              _input: this._input,
              yy: this.yy,
              conditionStack: this.conditionStack.slice(0),
              done: this.done
            };
            if (this.options.ranges) {
              backup.yylloc.range = this.yylloc.range.slice(0);
            }
          }
          lines = match[0].match(/(?:\r\n?|\n).*/g);
          if (lines) {
            this.yylineno += lines.length;
          }
          this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
          };
          this.yytext += match[0];
          this.match += match[0];
          this.matches = match;
          this.yyleng = this.yytext.length;
          if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
          }
          this._more = false;
          this._backtrack = false;
          this._input = this._input.slice(match[0].length);
          this.matched += match[0];
          token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
          if (this.done && this._input) {
            this.done = false;
          }
          if (token) {
            return token;
          } else if (this._backtrack) {
            for (var k in backup) {
              this[k] = backup[k];
            }
            return false;
          }
          return false;
        },
        next: function next() {
          if (this.done) {
            return this.EOF;
          }
          if (!this._input) {
            this.done = true;
          }
          var token, match, tempMatch, index;
          if (!this._more) {
            this.yytext = "";
            this.match = "";
          }
          var rules = this._currentRules();
          for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
              match = tempMatch;
              index = i;
              if (this.options.backtrack_lexer) {
                token = this.test_match(tempMatch, rules[i]);
                if (token !== false) {
                  return token;
                } else if (this._backtrack) {
                  match = false;
                  continue;
                } else {
                  return false;
                }
              } else if (!this.options.flex) {
                break;
              }
            }
          }
          if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
              return token;
            }
            return false;
          }
          if (this._input === "") {
            return this.EOF;
          } else {
            return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
              text: "",
              token: null,
              line: this.yylineno
            });
          }
        },
        lex: function lex() {
          var r = this.next();
          if (r) {
            return r;
          } else {
            return this.lex();
          }
        },
        begin: function begin(condition) {
          this.conditionStack.push(condition);
        },
        popState: function popState() {
          var n = this.conditionStack.length - 1;
          if (n > 0) {
            return this.conditionStack.pop();
          } else {
            return this.conditionStack[0];
          }
        },
        _currentRules: function _currentRules() {
          if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
          } else {
            return this.conditions["INITIAL"].rules;
          }
        },
        topState: function topState(n) {
          n = this.conditionStack.length - 1 - Math.abs(n || 0);
          if (n >= 0) {
            return this.conditionStack[n];
          } else {
            return "INITIAL";
          }
        },
        pushState: function pushState(condition) {
          this.begin(condition);
        },
        stateStackSize: function stateStackSize() {
          return this.conditionStack.length;
        },
        options: {},
        performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
          var YYSTATE = YY_START;
          switch ($avoiding_name_collisions) {
            case 0:
              break;
            case 1:
              return 7;
              break;
            case 2:
              return 6;
              break;
            case 3:
              return 8;
              break;
            case 4:
              return 35;
              break;
            case 5:
              return 33;
              break;
            case 6:
              return 33;
              break;
            case 7:
              return 34;
              break;
            case 8:
              return 34;
              break;
            case 9:
              return 9;
              break;
            case 10:
              return 10;
              break;
            case 11:
              return 27;
              break;
            case 12:
              return 29;
              break;
            case 13:
              return "|";
              break;
            case 14:
              return 19;
              break;
            case 15:
              return 18;
              break;
            case 16:
              return 21;
              break;
            case 17:
              return 20;
              break;
            case 18:
              return 17;
              break;
            case 19:
              return 16;
              break;
            case 20:
              return 15;
              break;
            case 21:
              return 32;
              break;
            case 22:
              return 30;
              break;
            case 23:
              return 31;
              break;
            case 24:
              return 31;
              break;
            case 25:
              return 25;
              break;
            case 26:
              return "INVALID";
              break;
            case 27:
              return 5;
              break;
          }
        },
        rules: [/^(?:\s+)/, /^(?:AND\b)/, /^(?:OR\b)/, /^(?:NOT\b)/, /^(?:NULL\b)/, /^(?:TRUE\b)/, /^(?:true\b)/, /^(?:FALSE\b)/, /^(?:false\b)/, /^(?:\()/, /^(?:\))/, /^(?:\[)/, /^(?:\])/, /^(?:\|)/, /^(?:<=)/, /^(?:<)/, /^(?:>=)/, /^(?:>)/, /^(?:!=)/, /^(?:==)/, /^(?:=)/, /^(?:-?[0-9]+(\.[0-9]+)?\b)/, /^(?:[a-zA-Z_][a-zA-Z0-9_]*)/, /^(?:'[^\']*')/, /^(?:"[^\"]*")/, /^(?:\.)/, /^(?:.)/, /^(?:$)/],
        conditions: {
          "INITIAL": {
            "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
            "inclusive": true
          }
        }
      };
      return lexer2;
    }();
    parser2.lexer = lexer;
    function Parser() {
      this.yy = {};
    }
    Parser.prototype = parser2;
    parser2.Parser = Parser;
    return new Parser();
  }();
  var accessParser = parser;

  // extensions/amp-access/0.1/access-expr.js
  function evaluateAccessExpr(expr, data) {
    try {
      accessParser.yy = data;
      return !!accessParser.parse(expr);
    } finally {
      accessParser.yy = null;
    }
  }
  var AmpAccessEvaluator = /* @__PURE__ */ function() {
    function AmpAccessEvaluator2() {
      this.cache = null;
      this.lastData_ = null;
    }
    var _proto = AmpAccessEvaluator2.prototype;
    _proto.evaluate = function evaluate(expr, data) {
      if (this.lastData_ !== data) {
        this.lastData_ = data;
        this.cache = map();
      }
      if (!hasOwn(this.cache, expr)) {
        this.cache[expr] = evaluateAccessExpr(expr, data);
      }
      return this.cache[expr];
    };
    return AmpAccessEvaluator2;
  }();

  // extensions/amp-access/0.1/access-vars.js
  var AccessVars = /* @__PURE__ */ function() {
    function AccessVars2() {
    }
    var _proto = AccessVars2.prototype;
    _proto.getAccessReaderId = function getAccessReaderId() {
    };
    _proto.getAuthdataField = function getAuthdataField(unusedField) {
    };
    return AccessVars2;
  }();

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
    userAssert2(urlString != null, "%s %s must be available", elementContext, sourceName);
    userAssert2(isSecureUrlDeprecated(urlString) || /^\/\//.test(urlString), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', elementContext, sourceName, urlString);
    return urlString;
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

  // extensions/amp-access/0.1/amp-access-client.js
  var TAG2 = "amp-access-client";
  var DEFAULT_AUTHORIZATION_TIMEOUT = 3e3;
  var AccessClientAdapter = /* @__PURE__ */ function() {
    function AccessClientAdapter2(ampdoc2, configJson, context) {
      this.ampdoc = ampdoc2;
      this.context_ = context;
      this.authorizationUrl_ = userAssert2(configJson["authorization"], '"authorization" URL must be specified');
      assertHttpsUrl(this.authorizationUrl_, '"authorization"');
      this.isPingbackEnabled_ = !configJson["noPingback"];
      this.pingbackUrl_ = configJson["pingback"];
      if (this.isPingbackEnabled_) {
        userAssert2(this.pingbackUrl_, '"pingback" URL must be specified');
        assertHttpsUrl(this.pingbackUrl_, '"pingback"');
      }
      this.authorizationTimeout_ = this.buildConfigAuthorizationTimeout_(configJson);
      this.xhr_ = Services.xhrFor(ampdoc2.win);
      this.timer_ = Services.timerFor(ampdoc2.win);
    }
    var _proto = AccessClientAdapter2.prototype;
    _proto.buildConfigAuthorizationTimeout_ = function buildConfigAuthorizationTimeout_(configJson) {
      if (!configJson["authorizationTimeout"]) {
        return DEFAULT_AUTHORIZATION_TIMEOUT;
      }
      var timeout = configJson["authorizationTimeout"];
      userAssert2(typeof timeout == "number", '"authorizationTimeout" must be a number');
      if (!(getMode().localDev || getMode().development)) {
        timeout = Math.min(timeout, DEFAULT_AUTHORIZATION_TIMEOUT);
      }
      return timeout;
    };
    _proto.getConfig = function getConfig() {
      return {
        "authorizationUrl": this.authorizationUrl_,
        "pingbackEnabled": this.isPingbackEnabled_,
        "pingbackUrl": this.pingbackUrl_,
        "authorizationTimeout": this.authorizationTimeout_
      };
    };
    _proto.getAuthorizationUrl = function getAuthorizationUrl() {
      return this.authorizationUrl_;
    };
    _proto.isAuthorizationEnabled = function isAuthorizationEnabled() {
      return true;
    };
    _proto.getAuthorizationTimeout = function getAuthorizationTimeout() {
      return this.authorizationTimeout_;
    };
    _proto.authorize = function authorize() {
      var _this = this;
      dev().fine(TAG2, "Start authorization via ", this.authorizationUrl_);
      var urlPromise = this.context_.buildUrl(this.authorizationUrl_, false);
      return urlPromise.then(function(url) {
        dev().fine(TAG2, "Authorization URL: ", url);
        return _this.timer_.timeoutPromise(_this.authorizationTimeout_, _this.xhr_.fetchJson(url, {
          credentials: "include"
        })).then(function(res) {
          return res.json();
        });
      });
    };
    _proto.isPingbackEnabled = function isPingbackEnabled() {
      return this.isPingbackEnabled_;
    };
    _proto.pingback = function pingback() {
      var _this2 = this;
      var promise = this.context_.buildUrl(devAssert2(this.pingbackUrl_), true);
      return promise.then(function(url) {
        dev().fine(TAG2, "Pingback URL: ", url);
        return _this2.xhr_.sendSignal(url, {
          method: "POST",
          credentials: "include",
          headers: dict({
            "Content-Type": "application/x-www-form-urlencoded"
          }),
          body: ""
        });
      });
    };
    _proto.postAction = function postAction() {
    };
    return AccessClientAdapter2;
  }();

  // src/core/dom/style.js
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

  // extensions/amp-access/0.1/iframe-api/messenger.js
  var SENTINEL = "__AMP__";
  var Messenger = /* @__PURE__ */ function() {
    function Messenger2(win, targetOrCallback, targetOrigin) {
      this.win_ = win;
      this.targetOrCallback_ = targetOrCallback;
      this.targetOrigin_ = targetOrigin;
      this.target_ = null;
      this.onCommand_ = null;
      this.boundHandleEvent_ = this.handleEvent_.bind(this);
      this.requestId_ = 0;
      this.waiting_ = {};
    }
    var _proto = Messenger2.prototype;
    _proto.connect = function connect(onCommand) {
      if (this.onCommand_) {
        throw new Error("already connected");
      }
      this.onCommand_ = onCommand;
      this.win_.addEventListener("message", this.boundHandleEvent_);
    };
    _proto.disconnect = function disconnect() {
      if (this.onCommand_) {
        this.onCommand_ = null;
        this.win_.removeEventListener("message", this.boundHandleEvent_);
      }
    };
    _proto.isConnected = function isConnected() {
      return this.targetOrigin_ != null;
    };
    _proto.getTarget = function getTarget() {
      var target = this.getOptionalTarget_();
      if (!target) {
        throw new Error("not connected");
      }
      return target;
    };
    _proto.getOptionalTarget_ = function getOptionalTarget_() {
      if (this.onCommand_ && !this.target_) {
        if (typeof this.targetOrCallback_ == "function") {
          this.target_ = this.targetOrCallback_();
        } else {
          this.target_ = this.targetOrCallback_;
        }
      }
      return this.target_;
    };
    _proto.getTargetOrigin = function getTargetOrigin() {
      if (this.targetOrigin_ == null) {
        throw new Error("not connected");
      }
      return this.targetOrigin_;
    };
    _proto.sendCommand = function sendCommand(cmd, opt_payload) {
      this.sendCommand_(void 0, cmd, opt_payload);
    };
    _proto.sendCommandRsvp = function sendCommandRsvp(cmd, opt_payload) {
      var rsvpId = String(++this.requestId_);
      var resolver = null;
      var promise = new Promise(function(resolve) {
        resolver = resolve;
      });
      this.waiting_[rsvpId] = {
        promise: promise,
        resolver: resolver
      };
      this.sendCommand_(rsvpId, cmd, opt_payload);
      return promise;
    };
    _proto.sendCommand_ = function sendCommand_(rsvpId, cmd, opt_payload) {
      var target = this.getTarget();
      var targetOrigin = cmd == "connect" ? this.targetOrigin_ != null ? this.targetOrigin_ : "*" : this.getTargetOrigin();
      target.postMessage({
        "sentinel": SENTINEL,
        "_rsvp": rsvpId,
        "cmd": cmd,
        "payload": opt_payload || null
      }, targetOrigin);
    };
    _proto.handleEvent_ = function handleEvent_(e) {
      var _this = this;
      var event = e;
      var data = event.data;
      if (!data || data["sentinel"] != SENTINEL) {
        return;
      }
      var origin = event.origin;
      var cmd = data["cmd"];
      var payload = data["payload"] || null;
      if (this.targetOrigin_ == null && cmd == "start") {
        this.targetOrigin_ = origin;
      }
      if (this.targetOrigin_ == null && event.source) {
        if (this.getOptionalTarget_() == event.source) {
          this.targetOrigin_ = origin;
        }
      }
      if (origin != this.targetOrigin_) {
        return;
      }
      var rsvpId = data["_rsvp"];
      var rsvp = !!rsvpId && cmd != "rsvp";
      var result = this.handleCommand_(rsvpId, cmd, payload);
      if (rsvp) {
        Promise.resolve(result).then(function(result2) {
          _this.sendCommand_(rsvpId, "rsvp", {
            "result": result2
          });
        }, function(reason) {
          _this.sendCommand_(rsvpId, "rsvp", {
            "error": String(reason)
          });
        });
      }
    };
    _proto.handleCommand_ = function handleCommand_(rsvpId, cmd, payload) {
      if (cmd == "rsvp") {
        var waiting = rsvpId && this.waiting_[rsvpId];
        if (waiting) {
          if ("error" in payload) {
            waiting.resolver(Promise.reject(new Error(payload["error"])));
          } else {
            waiting.resolver(payload["result"]);
          }
          delete this.waiting_[rsvpId];
        }
        return;
      }
      return this.onCommand_(cmd, payload);
    };
    return Messenger2;
  }();

  // extensions/amp-access/0.1/amp-access-iframe.js
  var AUTHORIZATION_TIMEOUT = 3e3;
  var EXPIRATION_TIMEOUT = 1e3 * 60 * 60 * 24 * 7;
  var TAG3 = "amp-access-iframe";
  var AccessIframeAdapter = /* @__PURE__ */ function() {
    function AccessIframeAdapter2(ampdoc2, configJson, context) {
      var _this = this;
      this.ampdoc = ampdoc2;
      this.context_ = context;
      this.configJson_ = configJson;
      this.timer_ = Services.timerFor(ampdoc2.win);
      this.iframeSrc_ = userAssert2(configJson["iframeSrc"], '"iframeSrc" URL must be specified');
      assertHttpsUrl(this.iframeSrc_, '"iframeSrc"');
      this.iframeVars_ = configJson["iframeVars"] || null;
      if (this.iframeVars_) {
        userAssert2(isArray(this.iframeVars_), '"iframeVars" must be an array');
      }
      this.defaultResponse_ = userAssert2(configJson["defaultResponse"], '"defaultResponse" must be specified');
      this.targetOrigin_ = parseUrlDeprecated(this.iframeSrc_).origin;
      this.connectedResolver_ = null;
      this.connectedPromise_ = null;
      this.iframe_ = ampdoc2.win.document.createElement("iframe");
      toggle(this.iframe_, false);
      this.messenger_ = new Messenger(this.ampdoc.win, function() {
        return _this.iframe_.contentWindow;
      }, this.targetOrigin_);
      this.configPromise_ = null;
    }
    var _proto = AccessIframeAdapter2.prototype;
    _proto.disconnect = function disconnect() {
      this.messenger_.disconnect();
      this.ampdoc.getBody().removeChild(this.iframe_);
    };
    _proto.getConfig = function getConfig() {
      return {
        "iframeSrc": this.iframeSrc_,
        "iframeVars": this.iframeVars_
      };
    };
    _proto.isAuthorizationEnabled = function isAuthorizationEnabled() {
      return true;
    };
    _proto.authorize = function authorize() {
      return Promise.race([this.authorizeLocal_(), this.authorizeRemote_()]);
    };
    _proto.isPingbackEnabled = function isPingbackEnabled() {
      return true;
    };
    _proto.pingback = function pingback() {
      var _this2 = this;
      return this.connect().then(function() {
        return _this2.messenger_.sendCommandRsvp("pingback", {});
      });
    };
    _proto.postAction = function postAction() {
      this.store_(null);
    };
    _proto.connect = function connect() {
      if (!this.connectedPromise_) {
        var deferred = new Deferred();
        this.connectedPromise_ = deferred.promise;
        this.connectedResolver_ = deferred.resolve;
        this.configPromise_ = this.resolveConfig_();
        this.messenger_.connect(this.handleCommand_.bind(this));
        this.ampdoc.getBody().appendChild(this.iframe_);
        this.iframe_.src = this.iframeSrc_;
      }
      return this.connectedPromise_;
    };
    _proto.resolveConfig_ = function resolveConfig_() {
      var _this3 = this;
      return new Promise(function(resolve) {
        var configJson = parseJson(JSON.stringify(_this3.configJson_));
        if (_this3.iframeVars_) {
          var varsString = _this3.iframeVars_.join("&");
          var varsPromise = _this3.context_.collectUrlVars(varsString, false);
          resolve(varsPromise.then(function(vars) {
            configJson["iframeVars"] = vars;
            return configJson;
          }));
        } else {
          resolve(configJson);
        }
      });
    };
    _proto.authorizeLocal_ = function authorizeLocal_() {
      var _this4 = this;
      var timeout = AUTHORIZATION_TIMEOUT * (getMode().development ? 2 : 1);
      return this.timer_.promise(timeout).then(function() {
        return _this4.restore_() || _this4.defaultResponse_;
      });
    };
    _proto.authorizeRemote_ = function authorizeRemote_() {
      var _this5 = this;
      return this.connect().then(function() {
        return _this5.messenger_.sendCommandRsvp("authorize", {});
      }).then(function(data) {
        if (data) {
          resolvedPromise().then(function() {
            return _this5.store_(data);
          });
        }
        return data;
      });
    };
    _proto.restore_ = function restore_() {
      var win = this.ampdoc.win;
      var storage = win.sessionStorage || win.localStorage;
      if (!storage) {
        return null;
      }
      try {
        var raw = storage.getItem(TAG3);
        if (!raw) {
          return null;
        }
        var parsed = parseJson(raw);
        var time = parsed["t"];
        if (time + EXPIRATION_TIMEOUT < this.ampdoc.win.Date.now()) {
          return null;
        }
        return parsed["d"] || null;
      } catch (e) {
        dev().error(TAG3, "failed to restore access response: ", e);
        try {
          storage.removeItem(TAG3);
        } catch (e2) {
        }
        return null;
      }
    };
    _proto.store_ = function store_(data) {
      var win = this.ampdoc.win;
      var storage = win.sessionStorage || win.localStorage;
      if (!storage) {
        return;
      }
      try {
        if (data) {
          storage.setItem(TAG3, JSON.stringify(dict({
            "t": this.ampdoc.win.Date.now(),
            "d": data
          })));
        } else {
          storage.removeItem(TAG3);
        }
      } catch (e) {
        dev().error(TAG3, "failed to store access response: ", e);
      }
    };
    _proto.handleCommand_ = function handleCommand_(cmd, unusedPayload) {
      var _this6 = this;
      if (cmd == "connect") {
        this.configPromise_.then(function(configJson) {
          _this6.messenger_.sendCommandRsvp("start", {
            "protocol": "amp-access",
            "config": configJson
          }).then(function() {
            if (_this6.connectedResolver_) {
              _this6.connectedResolver_();
              _this6.connectedResolver_ = null;
            }
          });
        });
        return;
      }
    };
    return AccessIframeAdapter2;
  }();

  // extensions/amp-access/0.1/amp-access-other.js
  var TAG4 = "amp-access-other";
  var AccessOtherAdapter = /* @__PURE__ */ function() {
    function AccessOtherAdapter2(ampdoc2, configJson, context) {
      this.ampdoc = ampdoc2;
      this.context_ = context;
      this.authorizationResponse_ = configJson["authorizationFallbackResponse"] || null;
      this.isProxyOrigin_ = isProxyOrigin(ampdoc2.win.location);
    }
    var _proto = AccessOtherAdapter2.prototype;
    _proto.getConfig = function getConfig() {
      return {
        "authorizationResponse": this.authorizationResponse_
      };
    };
    _proto.isAuthorizationEnabled = function isAuthorizationEnabled() {
      return !!this.authorizationResponse_ && !this.isProxyOrigin_;
    };
    _proto.authorize = function authorize() {
      dev().fine(TAG4, "Use the authorization fallback for type=other");
      devAssert2(!this.isProxyOrigin_, "Cannot authorize for proxy origin");
      var response = devAssert2(this.authorizationResponse_);
      return Promise.resolve(response);
    };
    _proto.isPingbackEnabled = function isPingbackEnabled() {
      return false;
    };
    _proto.pingback = function pingback() {
      dev().fine(TAG4, "Ignore pingback");
      return resolvedPromise();
    };
    _proto.postAction = function postAction() {
    };
    return AccessOtherAdapter2;
  }();

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

  // extensions/amp-access/0.1/amp-access-server.js
  var TAG5 = "amp-access-server";
  var AccessServerAdapter = /* @__PURE__ */ function() {
    function AccessServerAdapter2(ampdoc2, configJson, context) {
      this.ampdoc = ampdoc2;
      this.context_ = context;
      this.clientAdapter_ = new AccessClientAdapter(ampdoc2, configJson, context);
      this.xhr_ = Services.xhrFor(ampdoc2.win);
      this.timer_ = Services.timerFor(ampdoc2.win);
      this.vsync_ = Services.vsyncFor(ampdoc2.win);
      this.serverState_ = ampdoc2.getMetaByName("i-amphtml-access-state");
      var isInExperiment = isExperimentOn(ampdoc2.win, "amp-access-server");
      this.isProxyOrigin_ = isProxyOrigin(ampdoc2.win.location) || isInExperiment;
      var serviceUrlOverride = isInExperiment ? ampdoc2.getParam("serverAccessService") : null;
      this.serviceUrl_ = serviceUrlOverride || removeFragment(ampdoc2.win.location.href);
    }
    var _proto = AccessServerAdapter2.prototype;
    _proto.getConfig = function getConfig() {
      return {
        "client": this.clientAdapter_.getConfig(),
        "proxy": this.isProxyOrigin_,
        "serverState": this.serverState_
      };
    };
    _proto.isAuthorizationEnabled = function isAuthorizationEnabled() {
      return true;
    };
    _proto.authorize = function authorize() {
      var _this = this;
      dev().fine(TAG5, "Start authorization with ", this.isProxyOrigin_ ? "proxy" : "non-proxy", this.serverState_, this.clientAdapter_.getAuthorizationUrl());
      if (!this.isProxyOrigin_ || !this.serverState_) {
        dev().fine(TAG5, "Proceed via client protocol");
        return this.clientAdapter_.authorize();
      }
      dev().fine(TAG5, "Proceed via server protocol");
      var varsPromise = this.context_.collectUrlVars(this.clientAdapter_.getAuthorizationUrl(), false);
      return varsPromise.then(function(vars) {
        var requestVars = {};
        for (var k in vars) {
          if (vars[k] != null) {
            requestVars[k] = String(vars[k]);
          }
        }
        var request = dict({
          "url": removeFragment(_this.ampdoc.win.location.href),
          "state": _this.serverState_,
          "vars": requestVars
        });
        dev().fine(TAG5, "Authorization request: ", _this.serviceUrl_, request);
        return _this.timer_.timeoutPromise(_this.clientAdapter_.getAuthorizationTimeout(), fetchDocument(_this.ampdoc.win, _this.serviceUrl_, {
          method: "POST",
          body: "request=" + encodeURIComponent(JSON.stringify(request)),
          headers: dict({
            "Content-Type": "application/x-www-form-urlencoded"
          })
        }));
      }).then(function(responseDoc) {
        dev().fine(TAG5, "Authorization response: ", responseDoc);
        var accessDataString = devAssert2(responseDoc.querySelector('script[id="amp-access-data"]'), "No authorization data available").textContent;
        var accessData = parseJson(accessDataString);
        dev().fine(TAG5, "- access data: ", accessData);
        return _this.replaceSections_(responseDoc).then(function() {
          return accessData;
        });
      });
    };
    _proto.isPingbackEnabled = function isPingbackEnabled() {
      return this.clientAdapter_.isPingbackEnabled();
    };
    _proto.pingback = function pingback() {
      return this.clientAdapter_.pingback();
    };
    _proto.postAction = function postAction() {
    };
    _proto.replaceSections_ = function replaceSections_(doc) {
      var _this2 = this;
      var sections = doc.querySelectorAll("[i-amphtml-access-id]");
      dev().fine(TAG5, "- access sections: ", sections);
      return this.vsync_.mutatePromise(function() {
        for (var i = 0; i < sections.length; i++) {
          var section = sections[i];
          var sectionId = section.getAttribute("i-amphtml-access-id");
          var target = _this2.ampdoc.getRootNode().querySelector('[i-amphtml-access-id="' + escapeCssSelectorIdent(sectionId) + '"]');
          if (!target) {
            dev().warn(TAG5, "Section not found: ", sectionId);
            continue;
          }
          target.parentElement.replaceChild(_this2.ampdoc.win.document.importNode(section, true), target);
        }
      });
    };
    return AccessServerAdapter2;
  }();

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

  // src/core/types/string/base64.js
  var base64UrlDecodeSubs = {
    "-": "+",
    "_": "/",
    ".": "="
  };
  function base64UrlDecodeToBytes(str) {
    var encoded = atob(str.replace(/[-_.]/g, function(ch) {
      return base64UrlDecodeSubs[ch];
    }));
    return stringToBytes(encoded);
  }
  function base64DecodeToBytes(str) {
    return stringToBytes(atob(str));
  }

  // extensions/amp-access/0.1/jwt.js
  function pemToBytes(pem) {
    var key = pem.trim().replace(/^-+BEGIN[^-]*-+/, "").replace(/-+END[^-]*-+$/, "").replace(/[\r\n]/g, "").trim();
    return base64DecodeToBytes(key);
  }
  var JwtHelper = /* @__PURE__ */ function() {
    function JwtHelper2(win) {
      this.win = win;
      this.subtle_ = win.crypto && (win.crypto.subtle || win.crypto.webkitSubtle) || null;
    }
    var _proto = JwtHelper2.prototype;
    _proto.decode = function decode(encodedToken) {
      return this.decodeInternal_(encodedToken).payload;
    };
    _proto.isVerificationSupported = function isVerificationSupported() {
      return !!this.subtle_;
    };
    _proto.decodeAndVerify = function decodeAndVerify(encodedToken, pemPromise) {
      var _this = this;
      if (!this.subtle_) {
        throw new Error("Crypto is not supported on this platform");
      }
      var decodedPromise = new Promise(function(resolve) {
        return resolve(_this.decodeInternal_(encodedToken));
      });
      return decodedPromise.then(function(decoded) {
        var alg = decoded.header["alg"];
        if (!alg || alg != "RS256") {
          throw new Error("Only alg=RS256 is supported");
        }
        return _this.importKey_(pemPromise).then(function(key) {
          var sig = base64UrlDecodeToBytes(decoded.sig);
          return _this.subtle_.verify({
            name: "RSASSA-PKCS1-v1_5"
          }, key, sig, stringToBytes(decoded.verifiable));
        }).then(function(isValid) {
          if (isValid) {
            return decoded.payload;
          }
          throw new Error("Signature verification failed");
        });
      });
    };
    _proto.decodeInternal_ = function decodeInternal_(encodedToken) {
      function invalidToken() {
        throw new Error('Invalid token: "' + encodedToken + '"');
      }
      var parts = encodedToken.split(".");
      if (parts.length != 3) {
        invalidToken();
      }
      var headerUtf8Bytes = base64UrlDecodeToBytes(parts[0]);
      var payloadUtf8Bytes = base64UrlDecodeToBytes(parts[1]);
      return {
        header: tryParseJson(utf8Decode(headerUtf8Bytes), invalidToken),
        payload: tryParseJson(utf8Decode(payloadUtf8Bytes), invalidToken),
        verifiable: parts[0] + "." + parts[1],
        sig: parts[2]
      };
    };
    _proto.importKey_ = function importKey_(pemPromise) {
      var _this2 = this;
      return pemPromise.then(function(pem) {
        return _this2.subtle_.importKey("spki", pemToBytes(pem), {
          name: "RSASSA-PKCS1-v1_5",
          hash: {
            name: "SHA-256"
          }
        }, false, ["verify"]);
      });
    };
    return JwtHelper2;
  }();

  // extensions/amp-access/0.1/amp-access-server-jwt.js
  var TAG6 = "amp-access-server-jwt";
  var AUTHORIZATION_TIMEOUT2 = 3e3;
  var AMP_AUD = "ampproject.org";
  var AccessServerJwtAdapter = /* @__PURE__ */ function() {
    function AccessServerJwtAdapter2(ampdoc2, configJson, context) {
      this.ampdoc = ampdoc2;
      this.context_ = context;
      this.clientAdapter_ = new AccessClientAdapter(ampdoc2, configJson, context);
      this.xhr_ = Services.xhrFor(ampdoc2.win);
      this.timer_ = Services.timerFor(ampdoc2.win);
      this.vsync_ = Services.vsyncFor(ampdoc2.win);
      this.serverState_ = ampdoc2.getMetaByName("i-amphtml-access-state");
      var isInExperiment = isExperimentOn(ampdoc2.win, "amp-access-server-jwt");
      this.isProxyOrigin_ = isProxyOrigin(ampdoc2.win.location) || isInExperiment;
      var serviceUrlOverride = isInExperiment ? ampdoc2.getParam("serverAccessService") : null;
      this.serviceUrl_ = serviceUrlOverride || removeFragment(ampdoc2.win.location.href);
      this.key_ = configJson["publicKey"] || null;
      this.keyUrl_ = configJson["publicKeyUrl"] || null;
      userAssert2(this.key_ || this.keyUrl_, '"publicKey" or "publicKeyUrl" must be specified');
      if (this.keyUrl_) {
        assertHttpsUrl(this.keyUrl_, '"publicKeyUrl"');
      }
      if (this.key_ && this.keyUrl_) {
        user().warn(TAG6, 'Both "publicKey" and "publicKeyUrl" specified. The "publicKeyUrl" will be ignored.');
      }
      this.jwtHelper_ = new JwtHelper(ampdoc2.win);
    }
    var _proto = AccessServerJwtAdapter2.prototype;
    _proto.getConfig = function getConfig() {
      return {
        "client": this.clientAdapter_.getConfig(),
        "proxy": this.isProxyOrigin_,
        "serverState": this.serverState_,
        "publicKey": this.key_,
        "publicKeyUrl": this.keyUrl_
      };
    };
    _proto.isAuthorizationEnabled = function isAuthorizationEnabled() {
      return true;
    };
    _proto.authorize = function authorize() {
      dev().fine(TAG6, "Start authorization with ", this.isProxyOrigin_ ? "proxy" : "non-proxy", this.serverState_, this.clientAdapter_.getAuthorizationUrl());
      if (!this.isProxyOrigin_ || !this.serverState_) {
        return this.authorizeOnClient_();
      }
      return this.authorizeOnServer_();
    };
    _proto.isPingbackEnabled = function isPingbackEnabled() {
      return this.clientAdapter_.isPingbackEnabled();
    };
    _proto.pingback = function pingback() {
      return this.clientAdapter_.pingback();
    };
    _proto.postAction = function postAction() {
    };
    _proto.fetchJwt_ = function fetchJwt_() {
      var _this = this;
      var urlPromise = this.context_.buildUrl(this.clientAdapter_.getAuthorizationUrl(), false);
      var jwtPromise = urlPromise.then(function(url) {
        dev().fine(TAG6, "Authorization URL: ", url);
        return _this.timer_.timeoutPromise(AUTHORIZATION_TIMEOUT2, _this.xhr_.fetchText(url, {
          credentials: "include"
        }));
      }).then(function(resp) {
        return resp.text();
      }).then(function(encoded) {
        var jwt = _this.jwtHelper_.decode(encoded);
        userAssert2(jwt["amp_authdata"], '"amp_authdata" must be present in JWT');
        return {
          encoded: encoded,
          jwt: jwt
        };
      });
      if (this.shouldBeValidated_()) {
        if (this.jwtHelper_.isVerificationSupported()) {
          jwtPromise = jwtPromise.then(function(resp) {
            return _this.jwtHelper_.decodeAndVerify(resp.encoded, _this.loadKeyPem_()).then(function() {
              return resp;
            });
          });
        } else {
          user().warn(TAG6, "Cannot verify signature on this browser since it doesn't support WebCrypto APIs");
        }
        jwtPromise = jwtPromise.then(function(resp) {
          _this.validateJwt_(resp.jwt);
          return resp;
        });
      }
      return jwtPromise.catch(function(reason) {
        throw user().createError("JWT fetch or validation failed: ", reason);
      });
    };
    _proto.loadKeyPem_ = function loadKeyPem_() {
      if (this.key_) {
        return Promise.resolve(this.key_);
      }
      return this.xhr_.fetchText(dev().assertString(this.keyUrl_)).then(function(res) {
        return res.text();
      });
    };
    _proto.shouldBeValidated_ = function shouldBeValidated_() {
      return getMode().development;
    };
    _proto.validateJwt_ = function validateJwt_(jwt) {
      var now = Date.now();
      var exp = jwt["exp"];
      userAssert2(exp, '"exp" field must be specified');
      userAssert2(parseFloat(exp) * 1e3 > now, "token has expired: %s", exp);
      var aud = jwt["aud"];
      userAssert2(aud, '"aud" field must be specified');
      var audForAmp = false;
      if (isArray(aud)) {
        for (var i = 0; i < aud.length; i++) {
          if (aud[i] == AMP_AUD) {
            audForAmp = true;
            break;
          }
        }
      } else {
        audForAmp = aud == AMP_AUD;
      }
      userAssert2(audForAmp, '"aud" must be "%s": %s', AMP_AUD, aud);
    };
    _proto.authorizeOnClient_ = function authorizeOnClient_() {
      dev().fine(TAG6, "Proceed via client protocol via ", this.clientAdapter_.getAuthorizationUrl());
      return this.fetchJwt_().then(function(resp) {
        return resp.jwt["amp_authdata"];
      });
    };
    _proto.authorizeOnServer_ = function authorizeOnServer_() {
      var _this2 = this;
      dev().fine(TAG6, "Proceed via server protocol");
      return this.fetchJwt_().then(function(resp) {
        var encoded = resp.encoded, jwt = resp.jwt;
        var accessData = jwt["amp_authdata"];
        var request = serializeQueryString(dict({
          "url": removeFragment(_this2.ampdoc.win.location.href),
          "state": _this2.serverState_,
          "jwt": encoded
        }));
        dev().fine(TAG6, "Authorization request: ", _this2.serviceUrl_, request);
        dev().fine(TAG6, "- access data: ", accessData);
        return _this2.timer_.timeoutPromise(AUTHORIZATION_TIMEOUT2, fetchDocument(_this2.ampdoc.win, _this2.serviceUrl_, {
          method: "POST",
          body: request,
          headers: dict({
            "Content-Type": "application/x-www-form-urlencoded"
          })
        })).then(function(response) {
          dev().fine(TAG6, "Authorization response: ", response);
          return _this2.replaceSections_(response);
        }).then(function() {
          return accessData;
        });
      });
    };
    _proto.replaceSections_ = function replaceSections_(doc) {
      var _this3 = this;
      var sections = doc.querySelectorAll("[i-amphtml-access-id]");
      dev().fine(TAG6, "- access sections: ", sections);
      return this.vsync_.mutatePromise(function() {
        for (var i = 0; i < sections.length; i++) {
          var section = sections[i];
          var sectionId = section.getAttribute("i-amphtml-access-id");
          var target = _this3.ampdoc.getRootNode().querySelector('[i-amphtml-access-id="' + escapeCssSelectorIdent(sectionId) + '"]');
          if (!target) {
            dev().warn(TAG6, "Section not found: ", sectionId);
            continue;
          }
          target.parentElement.replaceChild(_this3.ampdoc.win.document.importNode(section, true), target);
        }
      });
    };
    return AccessServerJwtAdapter2;
  }();

  // extensions/amp-access/0.1/amp-access-vendor.js
  var TAG7 = "amp-access-vendor";
  var AccessVendorAdapter = /* @__PURE__ */ function() {
    function AccessVendorAdapter2(ampdoc2, configJson) {
      this.ampdoc = ampdoc2;
      this.vendorName_ = userAssert2(configJson["vendor"], '"vendor" name must be specified');
      this.vendorConfig_ = configJson[this.vendorName_] || {};
      this.isPingbackEnabled_ = !configJson["noPingback"];
      var deferred = new Deferred();
      this.vendorPromise_ = deferred.promise;
      this.vendorResolve_ = deferred.resolve;
    }
    var _proto = AccessVendorAdapter2.prototype;
    _proto.getVendorName = function getVendorName() {
      return this.vendorName_;
    };
    _proto.getConfig = function getConfig() {
      return this.vendorConfig_;
    };
    _proto.registerVendor = function registerVendor(vendor) {
      userAssert2(this.vendorResolve_, "Vendor has already been registered");
      this.vendorResolve_(vendor);
      this.vendorResolve_ = null;
    };
    _proto.isAuthorizationEnabled = function isAuthorizationEnabled() {
      return true;
    };
    _proto.authorize = function authorize() {
      dev().fine(TAG7, "Start authorization via ", this.vendorName_);
      return this.vendorPromise_.then(function(vendor) {
        return vendor.authorize();
      });
    };
    _proto.isPingbackEnabled = function isPingbackEnabled() {
      return this.isPingbackEnabled_;
    };
    _proto.pingback = function pingback() {
      dev().fine(TAG7, "Pingback via ", this.vendorName_);
      return this.vendorPromise_.then(function(vendor) {
        return vendor.pingback();
      });
    };
    _proto.postAction = function postAction() {
    };
    return AccessVendorAdapter2;
  }();

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

  // extensions/amp-access/0.1/login-dialog.js
  var TAG8 = "amp-access-login";
  var RETURN_URL_REGEX = new RegExp("RETURN_URL");
  function createLoginDialog(ampdoc2, urlOrPromise) {
    var viewer = Services.viewerForDoc(ampdoc2);
    var overrideDialog = parseInt(ampdoc2.getParam("dialog"), 10);
    if (overrideDialog) {
      return new ViewerLoginDialog(viewer, urlOrPromise);
    }
    return new WebLoginDialog(ampdoc2.win, viewer, urlOrPromise);
  }
  function openLoginDialog(ampdoc2, urlOrPromise) {
    return createLoginDialog(ampdoc2, urlOrPromise).open();
  }
  function getLoginUrl(ampdoc2, urlOrPromise) {
    return createLoginDialog(ampdoc2, urlOrPromise).getLoginUrl();
  }
  var ViewerLoginDialog = /* @__PURE__ */ function() {
    function ViewerLoginDialog2(viewer, urlOrPromise) {
      this.viewer = viewer;
      this.urlOrPromise = urlOrPromise;
    }
    var _proto = ViewerLoginDialog2.prototype;
    _proto.getLoginUrl = function getLoginUrl2() {
      var urlPromise;
      if (typeof this.urlOrPromise == "string") {
        urlPromise = Promise.resolve(this.urlOrPromise);
      } else {
        urlPromise = this.urlOrPromise;
      }
      return urlPromise.then(function(url) {
        return buildLoginUrl(url, "RETURN_URL");
      });
    };
    _proto.open = function open() {
      var _this = this;
      return this.getLoginUrl().then(function(loginUrl) {
        dev().fine(TAG8, "Open viewer dialog: ", loginUrl);
        return _this.viewer.sendMessageAwaitResponse("openDialog", dict({
          "url": loginUrl
        }));
      });
    };
    return ViewerLoginDialog2;
  }();
  var WebLoginDialog = /* @__PURE__ */ function() {
    function WebLoginDialog2(win, viewer, urlOrPromise) {
      this.win = win;
      this.viewer = viewer;
      this.urlOrPromise = urlOrPromise;
      this.resolve_ = null;
      this.reject_ = null;
      this.dialog_ = null;
      this.dialogReadyPromise_ = null;
      this.heartbeatInterval_ = null;
      this.messageUnlisten_ = null;
    }
    var _proto2 = WebLoginDialog2.prototype;
    _proto2.open = function open() {
      var _this2 = this;
      userAssert2(!this.resolve_, "Dialog already opened");
      return new Promise(function(resolve, reject) {
        _this2.resolve_ = resolve;
        _this2.reject_ = reject;
        _this2.openInternal_();
      }).then(function(result) {
        _this2.cleanup_();
        return result;
      }, function(error) {
        _this2.cleanup_();
        throw error;
      });
    };
    _proto2.cleanup_ = function cleanup_() {
      this.resolve_ = null;
      this.reject_ = null;
      if (this.dialog_) {
        try {
          this.dialog_.close();
        } catch (e) {
        }
        this.dialog_ = null;
      }
      if (this.heartbeatInterval_) {
        this.win.clearInterval(this.heartbeatInterval_);
        this.heartbeatInterval_ = null;
      }
      if (this.messageUnlisten_) {
        this.messageUnlisten_();
        this.messageUnlisten_ = null;
      }
    };
    _proto2.getLoginUrl = function getLoginUrl2() {
      var _this3 = this;
      var urlPromise;
      if (typeof this.urlOrPromise == "string") {
        urlPromise = Promise.resolve(this.urlOrPromise);
      } else {
        urlPromise = this.urlOrPromise;
      }
      return urlPromise.then(function(url) {
        return buildLoginUrl(url, _this3.getReturnUrl_());
      });
    };
    _proto2.openInternal_ = function openInternal_() {
      var _this4 = this;
      var screen = this.win.screen;
      var w = Math.floor(Math.min(700, screen.width * 0.9));
      var h = Math.floor(Math.min(450, screen.height * 0.9));
      var x = Math.floor((screen.width - w) / 2);
      var y = Math.floor((screen.height - h) / 2);
      var sizing = "height=" + h + ",width=" + w + ",left=" + x + ",top=" + y;
      var options = sizing + ",resizable=yes,scrollbars=yes";
      var returnUrl = this.getReturnUrl_();
      this.dialogReadyPromise_ = null;
      if (typeof this.urlOrPromise == "string") {
        var loginUrl = buildLoginUrl(this.urlOrPromise, returnUrl);
        dev().fine(TAG8, "Open dialog: ", loginUrl, returnUrl, w, h, x, y);
        this.dialog_ = openWindowDialog(this.win, loginUrl, "_blank", options);
        if (this.dialog_) {
          this.dialogReadyPromise_ = resolvedPromise();
        }
      } else {
        dev().fine(TAG8, "Open dialog: ", "about:blank", returnUrl, w, h, x, y);
        this.dialog_ = openWindowDialog(this.win, "", "_blank", options);
        if (this.dialog_) {
          this.dialogReadyPromise_ = this.urlOrPromise.then(function(url) {
            var loginUrl2 = buildLoginUrl(url, returnUrl);
            dev().fine(TAG8, "Set dialog url: ", loginUrl2);
            _this4.dialog_.location.replace(loginUrl2);
          }, function(error) {
            throw new Error("failed to resolve url: " + error);
          });
        }
      }
      if (this.dialogReadyPromise_) {
        this.dialogReadyPromise_.then(function() {
          _this4.setupDialog_(returnUrl);
        }, function(error) {
          _this4.loginDone_(null, error);
        });
      } else {
        this.loginDone_(null, new Error("failed to open dialog"));
      }
    };
    _proto2.setupDialog_ = function setupDialog_(returnUrl) {
      var _this5 = this;
      var returnOrigin = parseUrlDeprecated(returnUrl).origin;
      this.heartbeatInterval_ = this.win.setInterval(function() {
        if (_this5.dialog_.closed) {
          _this5.win.clearInterval(_this5.heartbeatInterval_);
          _this5.heartbeatInterval_ = null;
          _this5.win.setTimeout(function() {
            _this5.loginDone_("");
          }, 3e3);
        }
      }, 500);
      this.messageUnlisten_ = listen(this.win, "message", function(e) {
        dev().fine(TAG8, "MESSAGE:", e);
        if (e.origin != returnOrigin) {
          return;
        }
        if (!getData(e) || getData(e)["sentinel"] != "amp") {
          return;
        }
        dev().fine(TAG8, "Received message from dialog: ", getData(e));
        if (getData(e)["type"] == "result") {
          if (_this5.dialog_) {
            _this5.dialog_.postMessage(dict({
              "sentinel": "amp",
              "type": "result-ack"
            }), returnOrigin);
          }
          _this5.loginDone_(getData(e)["result"]);
        }
      });
    };
    _proto2.loginDone_ = function loginDone_(result, opt_error) {
      if (!this.resolve_) {
        return;
      }
      dev().fine(TAG8, "Login done: ", result, opt_error);
      if (opt_error) {
        this.reject_(opt_error);
      } else {
        this.resolve_(result);
      }
      this.cleanup_();
    };
    _proto2.getReturnUrl_ = function getReturnUrl_() {
      var currentUrl = this.viewer.getResolvedViewerUrl();
      var returnUrl;
      if (getMode().localDev) {
        var loc = this.win.location;
        returnUrl = loc.protocol + "//" + loc.host + "/extensions/amp-access/0.1/amp-login-done.html";
      } else {
        returnUrl = urls.cdn + "/v0/amp-login-done-0.1.html";
      }
      return returnUrl + "?url=" + encodeURIComponent(currentUrl);
    };
    return WebLoginDialog2;
  }();
  function buildLoginUrl(url, returnUrl) {
    if (RETURN_URL_REGEX.test(url)) {
      return url.replace(RETURN_URL_REGEX, encodeURIComponent(returnUrl));
    }
    return url + (url.indexOf("?") == -1 ? "?" : "&") + "return=" + encodeURIComponent(returnUrl);
  }

  // extensions/amp-access/0.1/amp-access-source.js
  var TAG9 = "amp-access";
  var AccessType = {
    CLIENT: "client",
    IFRAME: "iframe",
    SERVER: "server",
    VENDOR: "vendor",
    OTHER: "other"
  };
  var AccessSource = /* @__PURE__ */ function() {
    function AccessSource2(ampdoc2, configJson, readerIdFn, scheduleViewFn, onReauthorizeFn, accessElement) {
      this.ampdoc = ampdoc2;
      this.getReaderId_ = readerIdFn;
      this.scheduleView_ = scheduleViewFn;
      this.onReauthorize_ = onReauthorizeFn;
      this.accessElement_ = accessElement;
      this.isServerEnabled_ = isExperimentOn(ampdoc2.win, "amp-access-server");
      this.isJwtEnabled_ = isExperimentOn(ampdoc2.win, "amp-access-jwt");
      this.type_ = this.buildConfigType_(configJson);
      this.loginConfig_ = this.buildConfigLoginMap_(configJson);
      this.authorizationFallbackResponse_ = configJson["authorizationFallbackResponse"];
      this.namespace_ = configJson["namespace"] || null;
      this.adapter_ = this.createAdapter_(configJson);
      this.urlReplacements_ = Services.urlReplacementsForDoc(accessElement);
      this.openLoginDialog_ = openLoginDialog.bind(null, ampdoc2);
      this.authResponse_ = null;
      var deferred = new Deferred();
      this.firstAuthorizationPromise_ = deferred.promise;
      this.firstAuthorizationResolver_ = deferred.resolve;
      this.loginUrlMap_ = {};
      this.loginPromise_ = null;
      this.loginStartTime_ = 0;
    }
    var _proto = AccessSource2.prototype;
    _proto.getNamespace = function getNamespace() {
      return this.namespace_;
    };
    _proto.getType = function getType() {
      return this.type_;
    };
    _proto.getAdapter = function getAdapter() {
      return this.adapter_;
    };
    _proto.getAuthResponse = function getAuthResponse() {
      return this.authResponse_;
    };
    _proto.createAdapter_ = function createAdapter_(configJson) {
      var context = {
        buildUrl: this.buildUrl.bind(this),
        collectUrlVars: this.collectUrlVars.bind(this)
      };
      var isJwt = this.isJwtEnabled_ && configJson["jwt"] === true;
      switch (this.type_) {
        case AccessType.CLIENT:
          if (isJwt) {
            return new AccessServerJwtAdapter(this.ampdoc, configJson, context);
          }
          return new AccessClientAdapter(this.ampdoc, configJson, context);
        case AccessType.IFRAME:
          return new AccessIframeAdapter(this.ampdoc, configJson, context);
        case AccessType.SERVER:
          if (isJwt) {
            return new AccessServerJwtAdapter(this.ampdoc, configJson, context);
          }
          return new AccessServerAdapter(this.ampdoc, configJson, context);
        case AccessType.VENDOR:
          return new AccessVendorAdapter(this.ampdoc, configJson);
        case AccessType.OTHER:
          return new AccessOtherAdapter(this.ampdoc, configJson, context);
      }
      throw dev().createError("Unsupported access type: ", this.type_);
    };
    _proto.getAdapterConfig = function getAdapterConfig() {
      return this.adapter_.getConfig();
    };
    _proto.whenFirstAuthorized = function whenFirstAuthorized() {
      return this.firstAuthorizationPromise_;
    };
    _proto.buildConfigType_ = function buildConfigType_(configJson) {
      var type = configJson["type"];
      userAssert2(!type || isEnumValue(AccessType, type), "Unknown access type: " + type);
      if (!type) {
        if (configJson["vendor"]) {
          type = AccessType.VENDOR;
        } else {
          type = AccessType.CLIENT;
        }
      }
      if (type == AccessType.SERVER && !this.isServerEnabled_) {
        user().warn(TAG9, 'Experiment "amp-access-server" is not enabled.');
        type = AccessType.CLIENT;
      }
      if (type == AccessType.CLIENT && this.isServerEnabled_) {
        user().info(TAG9, "Forcing access type: SERVER");
        type = AccessType.SERVER;
      }
      return type;
    };
    _proto.buildConfigLoginMap_ = function buildConfigLoginMap_(configJson) {
      var loginConfig = configJson["login"];
      var loginMap = dict();
      if (!loginConfig) {
      } else if (typeof loginConfig == "string") {
        loginMap[""] = loginConfig;
      } else if (isObject(loginConfig)) {
        for (var k in loginConfig) {
          loginMap[k] = loginConfig[k];
        }
      } else {
        userAssert2(false, '"login" must be either a single URL or a map of URLs');
      }
      for (var _k in loginMap) {
        assertHttpsUrl(loginMap[_k], this.accessElement_);
      }
      return loginMap;
    };
    _proto.getRootElement_ = function getRootElement_() {
      var root = this.ampdoc.getRootNode();
      return dev().assertElement(root.documentElement || root.body || root);
    };
    _proto.analyticsEvent_ = function analyticsEvent_(eventType) {
      triggerAnalyticsEvent(this.getRootElement_(), eventType, void 0, false);
    };
    _proto.start = function start() {
      dev().fine(TAG9, "config:", this.type_, this.loginConfig_, this.adapter_.getConfig());
      this.buildLoginUrls_();
    };
    _proto.buildUrl = function buildUrl(url, useAuthData) {
      var _this = this;
      return this.prepareUrlVars_(useAuthData).then(function(vars) {
        return _this.urlReplacements_.expandUrlAsync(url, vars);
      });
    };
    _proto.collectUrlVars = function collectUrlVars(url, useAuthData) {
      var _this2 = this;
      return this.prepareUrlVars_(useAuthData).then(function(vars) {
        return _this2.urlReplacements_.collectVars(url, vars);
      });
    };
    _proto.prepareUrlVars_ = function prepareUrlVars_(useAuthData) {
      var _this3 = this;
      return this.getReaderId_().then(function(readerId) {
        var vars = {
          "READER_ID": readerId,
          "ACCESS_READER_ID": readerId
        };
        if (useAuthData) {
          vars["AUTHDATA"] = function(field) {
            if (_this3.authResponse_) {
              return getValueForExpr(_this3.authResponse_, field);
            }
            return void 0;
          };
        }
        return vars;
      });
    };
    _proto.runAuthorization = function runAuthorization(opt_disableFallback) {
      var _this4 = this;
      if (!this.adapter_.isAuthorizationEnabled()) {
        dev().fine(TAG9, "Ignore authorization for type=", this.type_);
        this.firstAuthorizationResolver_();
        return resolvedPromise();
      }
      var responsePromise = this.adapter_.authorize().catch(function(error) {
        _this4.analyticsEvent_("access-authorization-failed");
        if (_this4.authorizationFallbackResponse_ && !opt_disableFallback) {
          user().error(TAG9, "Authorization failed: ", error);
          return _this4.authorizationFallbackResponse_;
        } else {
          throw error;
        }
      });
      var promise = responsePromise.then(function(response) {
        dev().fine(TAG9, "Authorization response: ", response);
        _this4.setAuthResponse_(response);
        _this4.buildLoginUrls_();
        return response;
      }).catch(function(error) {
        user().error(TAG9, "Authorization failed: ", error);
        _this4.firstAuthorizationResolver_();
        throw error;
      });
      return promise;
    };
    _proto.setAuthResponse_ = function setAuthResponse_(authResponse) {
      this.authResponse_ = authResponse;
      this.firstAuthorizationResolver_();
    };
    _proto.reportViewToServer = function reportViewToServer() {
      var _this5 = this;
      return this.adapter_.pingback().then(function() {
        dev().fine(TAG9, "Pingback complete");
        _this5.analyticsEvent_("access-pingback-sent");
      }).catch(function(error) {
        _this5.analyticsEvent_("access-pingback-failed");
        throw user().createError("Pingback failed: ", error);
      });
    };
    _proto.getLoginUrl = function getLoginUrl2(urlOrPromise) {
      return getLoginUrl(this.ampdoc, urlOrPromise);
    };
    _proto.loginWithType = function loginWithType(type) {
      userAssert2(this.loginConfig_[type], "Login URL is not configured: %s", type);
      var loginUrl = userAssert2(this.loginUrlMap_[type], "Login URL is not ready: %s", type);
      return this.login_(loginUrl, type);
    };
    _proto.loginWithUrl = function loginWithUrl(url, eventLabel) {
      if (eventLabel === void 0) {
        eventLabel = "";
      }
      return this.login_(url, eventLabel);
    };
    _proto.login_ = function login_(loginUrl, eventLabel) {
      var _this6 = this;
      var now = Date.now();
      if (this.loginPromise_ && now - this.loginStartTime_ < 1e3) {
        return this.loginPromise_;
      }
      dev().fine(TAG9, "Start login: ", loginUrl, eventLabel);
      this.loginAnalyticsEvent_(eventLabel, "started");
      var dialogPromise = this.openLoginDialog_(loginUrl);
      var loginPromise = dialogPromise.then(function(result) {
        dev().fine(TAG9, "Login dialog completed: ", eventLabel, result);
        _this6.loginPromise_ = null;
        var query = parseQueryString(result);
        var s = query["success"];
        var success = s == "true" || s == "yes" || s == "1";
        if (success) {
          _this6.loginAnalyticsEvent_(eventLabel, "success");
        } else {
          _this6.loginAnalyticsEvent_(eventLabel, "rejected");
        }
        if (success || !s) {
          _this6.adapter_.postAction();
          var authorizationPromise = _this6.runAuthorization(true);
          _this6.onReauthorize_(authorizationPromise);
          return authorizationPromise.then(function() {
            _this6.scheduleView_(0);
          });
        }
      }).catch(function(reason) {
        dev().fine(TAG9, "Login dialog failed: ", eventLabel, reason);
        _this6.loginAnalyticsEvent_(eventLabel, "failed");
        if (_this6.loginPromise_ == loginPromise) {
          _this6.loginPromise_ = null;
        }
        throw reason;
      });
      this.loginPromise_ = loginPromise;
      this.loginStartTime_ = now;
      return this.loginPromise_;
    };
    _proto.loginAnalyticsEvent_ = function loginAnalyticsEvent_(type, event) {
      this.analyticsEvent_("access-login-" + event);
      if (type) {
        this.analyticsEvent_("access-login-" + type + "-" + event);
      }
    };
    _proto.buildLoginUrls_ = function buildLoginUrls_() {
      var _this7 = this;
      if (Object.keys(this.loginConfig_).length == 0) {
        return null;
      }
      var promises = [];
      var _loop = function _loop2(k2) {
        promises.push(_this7.buildUrl(_this7.loginConfig_[k2], true).then(function(url) {
          _this7.loginUrlMap_[k2] = url;
          return {
            type: k2,
            url: url
          };
        }));
      };
      for (var k in this.loginConfig_) {
        _loop(k);
      }
      return Promise.all(promises);
    };
    return AccessSource2;
  }();

  // build/amp-access-0.1.css.js
  var CSS2 = "\n/*# sourceURL=/extensions/amp-access/0.1/amp-access.css*/";

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

  // src/error-reporting.js
  var CANCELLED = "CANCELLED";
  var accumulatedErrorMessages = self.__AMP_ERRORS || [];
  self.__AMP_ERRORS = accumulatedErrorMessages;
  function cancellation() {
    return new Error(CANCELLED);
  }

  // extensions/amp-access/0.1/amp-access.js
  var TAG10 = "amp-access";
  var VIEW_TIMEOUT = 2e3;
  var TEMPLATE_PROP = "__AMP_ACCESS__TEMPLATE";
  var AccessService = /* @__PURE__ */ function() {
    function AccessService2(ampdoc2) {
      var _this = this;
      this.ampdoc = ampdoc2;
      installStylesForDoc(ampdoc2, CSS2, function() {
      }, false, TAG10);
      var accessElement = ampdoc2.getElementById("amp-access");
      this.enabled_ = !!accessElement;
      if (!this.enabled_) {
        return;
      }
      this.accessElement_ = dev().assertElement(accessElement);
      this.pubOrigin_ = getSourceOrigin(ampdoc2.win.location);
      this.timer_ = Services.timerFor(ampdoc2.win);
      this.vsync_ = Services.vsyncFor(ampdoc2.win);
      this.cid_ = Services.cidForDoc(ampdoc2);
      this.viewer_ = Services.viewerForDoc(ampdoc2);
      this.viewport_ = Services.viewportForDoc(ampdoc2);
      this.templates_ = Services.templatesForDoc(ampdoc2);
      this.mutator_ = Services.mutatorForDoc(ampdoc2);
      this.performance_ = Services.performanceForOrNull(ampdoc2.win);
      this.readerIdPromise_ = null;
      this.evaluator_ = new AmpAccessEvaluator();
      this.sources_ = this.parseConfig_();
      var promises = this.sources_.map(function(source) {
        return source.whenFirstAuthorized();
      });
      this.firstAuthorizationsCompleted_ = false;
      this.lastAuthorizationPromises_ = Promise.all(promises);
      this.reportViewPromise_ = null;
      this.applyAuthorizationsObservable_ = new Observable();
      this.lastAuthorizationPromises_.then(function() {
        _this.firstAuthorizationsCompleted_ = true;
        _this.analyticsEvent_("access-authorization-received");
        if (_this.performance_) {
          _this.performance_.tick(TickLabel_Enum.ACCESS_AUTHORIZATION);
          _this.performance_.tickSinceVisible(TickLabel_Enum.ACCESS_AUTHORIZATION_VISIBLE);
          _this.performance_.flush();
        }
      });
      ampdoc2.getRootNode().addEventListener(AmpEvents_Enum.DOM_UPDATE, this.onDomUpdate_.bind(this));
    }
    var _proto = AccessService2.prototype;
    _proto.getAccessReaderId = function getAccessReaderId() {
      if (!this.enabled_) {
        return null;
      }
      return this.getReaderId_();
    };
    _proto.getReaderId_ = function getReaderId_() {
      if (!this.readerIdPromise_) {
        var consent = resolvedPromise();
        this.readerIdPromise_ = this.cid_.then(function(cid) {
          return cid.get({
            scope: "amp-access",
            createCookieIfNotPresent: true
          }, consent);
        });
      }
      return this.readerIdPromise_;
    };
    _proto.areFirstAuthorizationsCompleted = function areFirstAuthorizationsCompleted() {
      return this.firstAuthorizationsCompleted_;
    };
    _proto.onApplyAuthorizations = function onApplyAuthorizations(callback) {
      this.applyAuthorizationsObservable_.add(callback);
    };
    _proto.parseConfig_ = function parseConfig_() {
      var _this2 = this;
      userAssert2(isJsonScriptTag(this.accessElement_), TAG10 + ' config should be inside a <script> tag with type="application/json"');
      var rawContent = tryParseJson(this.accessElement_.textContent, function(e) {
        throw user().createError('Failed to parse "amp-access" JSON: ' + e);
      });
      var configMap = {};
      if (isArray(rawContent)) {
        var contentArray = rawContent;
        for (var i = 0; i < contentArray["length"]; i++) {
          var namespace = contentArray[i]["namespace"];
          userAssert2(!!namespace, "Namespace required");
          userAssert2(!configMap[namespace], "Namespace already used: " + namespace);
          configMap[namespace] = contentArray[i];
        }
      } else {
        configMap[rawContent["namespace"] || ""] = rawContent;
      }
      var readerIdFn = this.getReaderId_.bind(this);
      var scheduleViewFn = this.scheduleView_.bind(this);
      var onReauthorizeFn = this.onReauthorize_.bind(this);
      return Object.keys(configMap).map(function(key) {
        return new AccessSource(_this2.ampdoc, configMap[key], readerIdFn, scheduleViewFn, onReauthorizeFn, _this2.accessElement_);
      });
    };
    _proto.onDomUpdate_ = function onDomUpdate_(event) {
      var _this3 = this;
      if (this.firstAuthorizationsCompleted_) {
        var target = dev().assertElement(event.target);
        return this.lastAuthorizationPromises_.then(function() {
          var responses = _this3.combinedResponses();
          _this3.applyAuthorizationToRoot_(target, responses);
        });
      }
    };
    _proto.getVendorSource = function getVendorSource(name) {
      for (var i = 0; i < this.sources_.length; i++) {
        var source = this.sources_[i];
        if (source.getType() == AccessType.VENDOR) {
          var vendorAdapter = source.getAdapter();
          if (vendorAdapter.getVendorName() == name) {
            return source;
          }
        }
      }
      userAssert2(false, 'Access vendor "%s" can only be used for "type=vendor", but none found', name);
      throw new Error();
    };
    _proto.isEnabled = function isEnabled() {
      return this.enabled_;
    };
    _proto.getRootElement_ = function getRootElement_() {
      var root = this.ampdoc.getRootNode();
      return dev().assertElement(root.documentElement || root.body || root);
    };
    _proto.analyticsEvent_ = function analyticsEvent_(eventType) {
      triggerAnalyticsEvent(this.getRootElement_(), eventType, void 0, false);
    };
    _proto.start_ = function start_() {
      if (!this.enabled_) {
        user().info(TAG10, 'Access is disabled - no "id=amp-access" element');
        return this;
      }
      this.startInternal_();
      return this;
    };
    _proto.startInternal_ = function startInternal_() {
      var actionService = Services.actionServiceForDoc(this.accessElement_);
      actionService.installActionHandler(this.accessElement_, this.handleAction_.bind(this));
      for (var i = 0; i < this.sources_.length; i++) {
        this.sources_[i].start();
      }
      this.runAuthorization_();
      this.scheduleView_(VIEW_TIMEOUT);
      this.listenToBroadcasts_();
    };
    _proto.listenToBroadcasts_ = function listenToBroadcasts_() {
      var _this4 = this;
      this.viewer_.onBroadcast(function(message) {
        if (message["type"] == "amp-access-reauthorize" && message["origin"] == _this4.pubOrigin_) {
          _this4.runAuthorization_();
        }
      });
    };
    _proto.onReauthorize_ = function onReauthorize_(authorization) {
      var _this5 = this;
      this.broadcastReauthorize_();
      authorization.then(function() {
        if (_this5.firstAuthorizationsCompleted_) {
          _this5.lastAuthorizationPromises_.then(function() {
            _this5.ampdoc.whenReady().then(function() {
              var root = _this5.ampdoc.getRootNode();
              var responses = _this5.combinedResponses();
              return _this5.applyAuthorizationToRoot_(root, responses);
            });
          });
        }
      });
    };
    _proto.broadcastReauthorize_ = function broadcastReauthorize_() {
      this.viewer_.broadcast(dict({
        "type": "amp-access-reauthorize",
        "origin": this.pubOrigin_
      }));
    };
    _proto.runAuthorization_ = function runAuthorization_(opt_disableFallback) {
      var _this6 = this;
      this.toggleTopClass_("amp-access-loading", true);
      var authorizations = this.ampdoc.whenFirstVisible().then(function() {
        return Promise.all(_this6.sources_.map(function(source) {
          return _this6.runOneAuthorization_(source);
        }));
      });
      var rendered = authorizations.then(function() {
        _this6.toggleTopClass_("amp-access-loading", false);
        return _this6.ampdoc.whenReady().then(function() {
          var root = _this6.ampdoc.getRootNode();
          var responses = _this6.combinedResponses();
          return _this6.applyAuthorizationToRoot_(root, responses);
        });
      });
      this.lastAuthorizationPromises_ = rendered;
      return rendered;
    };
    _proto.runOneAuthorization_ = function runOneAuthorization_(source) {
      var _this7 = this;
      return source.runAuthorization().catch(function() {
        _this7.toggleTopClass_("amp-access-error", true);
      });
    };
    _proto.getAuthdataField = function getAuthdataField(field) {
      var _this8 = this;
      if (!this.enabled_) {
        return null;
      }
      return this.lastAuthorizationPromises_.then(function() {
        var responses = _this8.combinedResponses();
        var v = getValueForExpr(responses, field);
        return v !== void 0 ? v : null;
      });
    };
    _proto.applyAuthorizationToRoot_ = function applyAuthorizationToRoot_(root, response) {
      var _this9 = this;
      var elements = root.querySelectorAll("[amp-access]");
      var promises = [];
      for (var i = 0; i < elements.length; i++) {
        promises.push(this.applyAuthorizationToElement_(elements[i], response));
      }
      return Promise.all(promises).then(function() {
        _this9.applyAuthorizationsObservable_.fire();
      });
    };
    _proto.applyAuthorizationToElement_ = function applyAuthorizationToElement_(element, response) {
      var _this10 = this;
      var expr = element.getAttribute("amp-access");
      var on = false;
      try {
        on = this.evaluator_.evaluate(expr, response);
      } catch (err) {
        user().error(TAG10, err);
      }
      if (on) {
        var renderTemplate = this.renderTemplates_(element, response);
        if (renderTemplate) {
          return renderTemplate.then(function() {
            return _this10.applyAuthorizationAttrs_(element, on);
          });
        }
      }
      return this.applyAuthorizationAttrs_(element, on);
    };
    _proto.applyAuthorizationAttrs_ = function applyAuthorizationAttrs_(element, on) {
      var wasOn = !element.hasAttribute("amp-access-hide");
      if (on == wasOn) {
        return resolvedPromise();
      }
      return this.mutator_.mutateElement(element, function() {
        if (on) {
          element.removeAttribute("amp-access-hide");
        } else {
          element.setAttribute("amp-access-hide", "");
        }
      });
    };
    _proto.renderTemplates_ = function renderTemplates_(element, response) {
      var _this11 = this;
      var promises = [];
      var templateElements = element.querySelectorAll("[amp-access-template]");
      if (templateElements.length > 0) {
        var _loop = function _loop2(i2) {
          var p = _this11.renderTemplate_(element, templateElements[i2], response).catch(function(error) {
            dev().error(TAG10, "Template failed: ", error, templateElements[i2], element);
          });
          promises.push(p);
        };
        for (var i = 0; i < templateElements.length; i++) {
          _loop(i);
        }
      }
      return promises.length > 0 ? Promise.all(promises) : null;
    };
    _proto.renderTemplate_ = function renderTemplate_(element, templateOrPrev, response) {
      var _this12 = this;
      var template = templateOrPrev;
      var prev = null;
      if (template.tagName != "TEMPLATE") {
        prev = template;
        template = prev[TEMPLATE_PROP];
      }
      if (!template) {
        return Promise.reject(new Error("template not found"));
      }
      var rendered = this.templates_.renderTemplate(template, response);
      return rendered.then(function(element2) {
        return _this12.vsync_.mutatePromise(function() {
          element2.setAttribute("amp-access-template", "");
          element2[TEMPLATE_PROP] = template;
          if (template.parentElement) {
            template.parentElement.replaceChild(element2, template);
          } else if (prev && prev.parentElement) {
            prev.parentElement.replaceChild(element2, prev);
          }
        });
      });
    };
    _proto.scheduleView_ = function scheduleView_(timeToView) {
      var _this13 = this;
      if (!this.sources_.some(function(s) {
        return s.getAdapter().isPingbackEnabled();
      })) {
        return;
      }
      this.reportViewPromise_ = null;
      this.ampdoc.whenReady().then(function() {
        if (_this13.ampdoc.isVisible()) {
          _this13.reportWhenViewed_(timeToView);
        }
        _this13.ampdoc.onVisibilityChanged(function() {
          if (_this13.ampdoc.isVisible()) {
            _this13.reportWhenViewed_(timeToView);
          }
        });
      });
    };
    _proto.reportWhenViewed_ = function reportWhenViewed_(timeToView) {
      var _this14 = this;
      if (this.reportViewPromise_) {
        return this.reportViewPromise_;
      }
      dev().fine(TAG10, "start view monitoring");
      this.reportViewPromise_ = this.whenViewed_(timeToView).then(function() {
        return _this14.lastAuthorizationPromises_;
      }).then(function() {
        _this14.analyticsEvent_("access-viewed");
        return _this14.reportViewToServer_();
      }).catch(function(reason) {
        dev().fine(TAG10, "view cancelled:", reason);
        _this14.reportViewPromise_ = null;
        throw reason;
      });
      this.reportViewPromise_.then(this.broadcastReauthorize_.bind(this));
      return this.reportViewPromise_;
    };
    _proto.whenViewed_ = function whenViewed_(timeToView) {
      var _this15 = this;
      if (timeToView == 0) {
        return resolvedPromise();
      }
      var unlistenSet = [];
      return new Promise(function(resolve, reject) {
        unlistenSet.push(_this15.ampdoc.onVisibilityChanged(function() {
          if (!_this15.ampdoc.isVisible()) {
            reject(cancellation());
          }
        }));
        var timeoutId = _this15.timer_.delay(resolve, timeToView);
        unlistenSet.push(function() {
          return _this15.timer_.cancel(timeoutId);
        });
        unlistenSet.push(_this15.viewport_.onScroll(resolve));
        unlistenSet.push(listenOnce(_this15.ampdoc.getRootNode(), "click", resolve));
      }).then(function() {
        unlistenSet.forEach(function(unlisten) {
          return unlisten();
        });
      }, function(reason) {
        unlistenSet.forEach(function(unlisten) {
          return unlisten();
        });
        throw reason;
      });
    };
    _proto.reportViewToServer_ = function reportViewToServer_() {
      var promises = [];
      for (var i = 0; i < this.sources_.length; i++) {
        if (this.sources_[i].getAdapter().isPingbackEnabled()) {
          promises.push(this.sources_[i].reportViewToServer());
        }
      }
      return Promise.all(promises);
    };
    _proto.toggleTopClass_ = function toggleTopClass_(className, on) {
      var _this16 = this;
      this.vsync_.mutate(function() {
        _this16.getRootElement_().classList.toggle(className, on);
      });
    };
    _proto.handleAction_ = function handleAction_(invocation) {
      if (!invocation.satisfiesTrust(ActionTrust_Enum.DEFAULT)) {
        return null;
      }
      if (invocation.method == "login") {
        if (invocation.event) {
          invocation.event.preventDefault();
        }
        this.loginWithType_("");
      } else if (invocation.method.startsWith("login-")) {
        if (invocation.event) {
          invocation.event.preventDefault();
        }
        this.loginWithType_(invocation.method.substring("login-".length));
      } else if (invocation.method == "refresh") {
        if (invocation.event) {
          invocation.event.preventDefault();
        }
        this.runAuthorization_();
      }
      return null;
    };
    _proto.getSource = function getSource(index) {
      userAssert2(index >= 0 && index < this.sources_.length, "Invalid index: %d", index);
      return this.sources_[index];
    };
    _proto.loginWithType_ = function loginWithType_(type) {
      var splitPoint = type.indexOf("-");
      var singleSource = this.sources_.length == 1;
      var namespace = splitPoint > -1 ? type.substring(0, splitPoint) : type;
      var match = this.sources_.filter(function(s) {
        return s.getNamespace() == namespace;
      });
      if (match.length) {
        var remaining = splitPoint > -1 ? type.substring(splitPoint + 1) : "";
        return match[0].loginWithType(remaining);
      }
      userAssert2(singleSource, "Login must match namespace: %s", namespace);
      return this.sources_[0].loginWithType(type);
    };
    _proto.combinedResponses = function combinedResponses() {
      if (this.sources_.length == 1 && !this.sources_[0].getNamespace()) {
        return this.sources_[0].getAuthResponse() || {};
      }
      var combined = {};
      this.sources_.forEach(function(source) {
        return combined[source.getNamespace()] = source.getAuthResponse();
      });
      return combined;
    };
    return AccessService2;
  }();
  AMP.registerServiceForDoc("access", function(ampdoc2) {
    return new AccessService(ampdoc2).start_();
  });
  function getAccessVarsClassForTesting() {
    return AccessVars;
  }
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-access-0.1.max.js.map
