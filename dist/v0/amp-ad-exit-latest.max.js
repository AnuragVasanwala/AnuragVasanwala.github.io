(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-ad-exit",ev:"0.1",l:true,f:(function(AMP,_){
(function() {
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

  // src/core/types/string/index.js
  function includes(string, substring, start) {
    if (typeof start !== "number") {
      start = 0;
    }
    if (start + substring.length > string.length) {
      return false;
    }
    return string.indexOf(substring, start) !== -1;
  }
  function isString(s) {
    return typeof s == "string";
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
  function listen(element, eventType, listener, opt_evtListenerOpts) {
    return internalListenImplementation(element, eventType, listener, opt_evtListenerOpts);
  }
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

  // src/core/constants/action-constants.js
  var ActionTrust_Enum = {
    LOW: 1,
    DEFAULT: 2,
    HIGH: 3
  };

  // src/core/window/index.js
  function toWin(winOrNull) {
    return winOrNull;
  }
  function getWin(node) {
    return toWin((node.ownerDocument || node).defaultView);
  }

  // src/core/dom/query.js
  function matches(el, selector) {
    var matcher = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector || el.oMatchesSelector;
    if (matcher) {
      return matcher.call(el, selector);
    }
    return false;
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
  function userAssert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    return user().assert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
  }

  // src/core/data-structures/promise.js
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
  function rejectServicePromiseForDoc(nodeOrDoc, id, error) {
    var ampdoc2 = getAmpdoc(nodeOrDoc);
    var holder = getAmpdocServiceHolder(ampdoc2);
    rejectServicePromiseInternal(holder, id, error);
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
  function rejectServicePromiseInternal(holder, id, error) {
    var services = getServices(holder);
    var s = services[id];
    if (s) {
      if (s.reject) {
        s.reject(error);
      }
      return;
    }
    services[id] = emptyServiceHolderWithPromise();
    services[id].reject(error);
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

  // src/inabox/host-services.js
  var ServiceNames = {
    VISIBILITY: "host-visibility",
    FULLSCREEN: "host-fullscreen",
    EXIT: "host-exit"
  };
  var HostServices = /* @__PURE__ */ function() {
    function HostServices2() {
    }
    HostServices2.isAvailable = function isAvailable(elementOrAmpDoc) {
      var head = Services.ampdoc(elementOrAmpDoc).getHeadNode();
      return !!head.querySelector("script[host-service]");
    };
    HostServices2.visibilityForDoc = function visibilityForDoc(elementOrAmpDoc) {
      return getServicePromiseForDoc(elementOrAmpDoc, ServiceNames.VISIBILITY);
    };
    HostServices2.installVisibilityServiceForDoc = function installVisibilityServiceForDoc(elementOrAmpDoc, impl) {
      registerServiceBuilderForDoc(elementOrAmpDoc, ServiceNames.VISIBILITY, impl, true);
    };
    HostServices2.rejectVisibilityServiceForDoc = function rejectVisibilityServiceForDoc(elementOrAmpDoc, error) {
      rejectServicePromiseForDoc(elementOrAmpDoc, ServiceNames.VISIBILITY, error);
    };
    HostServices2.fullscreenForDoc = function fullscreenForDoc(elementOrAmpDoc) {
      return getServicePromiseForDoc(elementOrAmpDoc, ServiceNames.FULLSCREEN);
    };
    HostServices2.installFullscreenServiceForDoc = function installFullscreenServiceForDoc(elementOrAmpDoc, impl) {
      registerServiceBuilderForDoc(elementOrAmpDoc, ServiceNames.FULLSCREEN, impl, true);
    };
    HostServices2.rejectFullscreenServiceForDoc = function rejectFullscreenServiceForDoc(elementOrAmpDoc, error) {
      rejectServicePromiseForDoc(elementOrAmpDoc, ServiceNames.FULLSCREEN, error);
    };
    HostServices2.exitForDoc = function exitForDoc(elementOrAmpDoc) {
      return getServicePromiseForDoc(elementOrAmpDoc, ServiceNames.EXIT);
    };
    HostServices2.installExitServiceForDoc = function installExitServiceForDoc(elementOrAmpDoc, impl) {
      registerServiceBuilderForDoc(elementOrAmpDoc, ServiceNames.EXIT, impl, true);
    };
    HostServices2.rejectExitServiceForDoc = function rejectExitServiceForDoc(elementOrAmpDoc, error) {
      rejectServicePromiseForDoc(elementOrAmpDoc, ServiceNames.EXIT, error);
    };
    return HostServices2;
  }();

  // src/utils/event-helper.js
  function getData(event) {
    return event.data;
  }

  // extensions/amp-ad-exit/0.1/filters/filter.js
  var FilterType = {
    CLICK_DELAY: "clickDelay",
    CLICK_LOCATION: "clickLocation",
    INACTIVE_ELEMENT: "inactiveElement"
  };
  var Filter = /* @__PURE__ */ function() {
    function Filter2(name, type) {
      this.name = name;
      this.type = type;
    }
    var _proto = Filter2.prototype;
    _proto.filter = function filter(unusedEvent) {
    };
    _proto.onLayoutMeasure = function onLayoutMeasure() {
    };
    return Filter2;
  }();

  // extensions/amp-analytics/0.1/iframe-transport-vendors.js
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
  var prodConfig = {
    "bg": "https://tpc.googlesyndication.com/b4a/b4a-runner.html",
    "moat": "https://z.moatads.com/ampanalytics093284/iframe.html"
  };
  var canaryConfig = _extends({}, prodConfig, {
    "bg": "https://tpc.googlesyndication.com/b4a/experimental/b4a-runner.html"
  });
  var IFRAME_TRANSPORTS = prodConfig;

  // extensions/amp-ad-exit/0.1/config.js
  var TransportMode = {
    BEACON: "beacon",
    IMAGE: "image"
  };
  function assertConfig(config) {
    userAssert(typeof config == "object");
    if (config["filters"]) {
      assertFilters(config["filters"]);
    } else {
      config["filters"] = {};
    }
    if (config["transport"]) {
      assertTransport(config["transport"]);
    } else {
      config["transport"] = {};
    }
    assertTargets(config["targets"], config);
    return config;
  }
  function assertTransport(transport) {
    for (var t in transport) {
      userAssert(t == TransportMode.BEACON || t == TransportMode.IMAGE, "Unknown transport option: '" + t + "'");
      userAssert(typeof transport[t] == "boolean");
    }
  }
  function assertFilters(filters) {
    var validFilters = [FilterType.CLICK_DELAY, FilterType.CLICK_LOCATION, FilterType.INACTIVE_ELEMENT];
    for (var name in filters) {
      userAssert(typeof filters[name] == "object", "Filter specification '%s' is malformed", name);
      userAssert(validFilters.indexOf(filters[name].type) != -1, "Supported filters: " + validFilters.join(", "));
    }
  }
  function assertTargets(targets, config) {
    userAssert(typeof targets == "object", "'targets' must be an object");
    for (var target in targets) {
      assertTarget(target, targets[target], config);
    }
  }
  function assertTarget(name, target, config) {
    userAssert(typeof target["finalUrl"] == "string", "finalUrl of target '%s' must be a string", name);
    if (target["filters"]) {
      target["filters"].forEach(function(filter) {
        userAssert(config["filters"][filter], "filter '%s' not defined", filter);
      });
    }
    if (target["vars"]) {
      var pattern = /^_[a-zA-Z0-9_-]+$/;
      for (var variable in target["vars"]) {
        userAssert(pattern.test(variable), "'%s' must match the pattern '%s'", variable, pattern);
      }
    }
  }
  function assertVendor(vendor) {
    return user().assertString(IFRAME_TRANSPORTS[vendor], "Unknown or invalid vendor " + vendor + ", note that vendor must use transport: iframe");
  }

  // extensions/amp-ad-exit/0.1/filters/click-delay.js
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf5(o2, p2) {
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
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf5(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  var TAG = "amp-ad-exit";
  var ClickDelayFilter = /* @__PURE__ */ function(_Filter) {
    _inherits(ClickDelayFilter2, _Filter);
    var _super = _createSuper(ClickDelayFilter2);
    function ClickDelayFilter2(name, spec, win) {
      var _this;
      _this = _super.call(this, name, spec.type);
      userAssert(spec.type == FilterType.CLICK_DELAY && typeof spec.delay == "number" && spec.delay > 0, "Invalid ClickDelay spec");
      _this.spec = spec;
      _this.intervalStart = Date.now();
      if (spec.startTimingEvent) {
        if (!win["performance"] || !win["performance"]["timing"]) {
          dev().warn(TAG, "Browser does not support performance timing, falling back to now");
        } else if (win["performance"]["timing"][spec.startTimingEvent] == void 0) {
          dev().warn(TAG, "Invalid performance timing event type " + spec.startTimingEvent + ", falling back to now");
        } else {
          _this.intervalStart = win["performance"]["timing"][spec.startTimingEvent];
        }
      }
      return _this;
    }
    var _proto = ClickDelayFilter2.prototype;
    _proto.filter = function filter() {
      return Date.now() - this.intervalStart >= this.spec.delay;
    };
    return ClickDelayFilter2;
  }(Filter);
  function makeClickDelaySpec(delay, startTimingEvent) {
    if (startTimingEvent === void 0) {
      startTimingEvent = void 0;
    }
    return {
      type: FilterType.CLICK_DELAY,
      delay: delay,
      startTimingEvent: startTimingEvent
    };
  }

  // extensions/amp-ad-exit/0.1/filters/click-location.js
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf2(subClass, superClass);
  }
  function _setPrototypeOf2(o, p) {
    _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf5(o2, p2) {
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
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf5(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf2(o);
  }
  var ClickLocationFilter = /* @__PURE__ */ function(_Filter) {
    _inherits2(ClickLocationFilter2, _Filter);
    var _super = _createSuper2(ClickLocationFilter2);
    function ClickLocationFilter2(name, spec, adExitElement) {
      var _this;
      _this = _super.call(this, name, spec.type);
      userAssert(isValidClickLocationSpec(spec), "Invaid ClickLocation spec");
      _this.leftBorder_ = spec.left || 0;
      _this.rightBorder_ = spec.right || 0;
      _this.topBorder_ = spec.top || 0;
      _this.bottomBorder_ = spec.bottom || 0;
      _this.relativeTo_ = spec.relativeTo;
      _this.adExitElement_ = adExitElement;
      var AllowedRectDef;
      _this.allowedRect_ = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };
      return _this;
    }
    var _proto = ClickLocationFilter2.prototype;
    _proto.filter = function filter(event) {
      if (event.clientX >= this.allowedRect_.left && event.clientX <= this.allowedRect_.right && event.clientY >= this.allowedRect_.top && event.clientY <= this.allowedRect_.bottom) {
        return true;
      }
      return false;
    };
    _proto.onLayoutMeasure = function onLayoutMeasure() {
      var _this2 = this;
      this.adExitElement_.getVsync().measure(function() {
        var win = _this2.adExitElement_.win;
        if (_this2.relativeTo_) {
          var relativeElement = win.document.querySelector(_this2.relativeTo_);
          userAssert(relativeElement, "relativeTo element " + _this2.relativeTo_ + " not found.");
          var rect = relativeElement.getBoundingClientRect();
          _this2.allowedRect_.left = rect.left;
          _this2.allowedRect_.top = rect.top;
          _this2.allowedRect_.bottom = rect.bottom;
          _this2.allowedRect_.right = rect.right;
        } else {
          _this2.allowedRect_.left = 0;
          _this2.allowedRect_.top = 0;
          _this2.allowedRect_.bottom = win.innerHeight;
          _this2.allowedRect_.right = win.innerWidth;
        }
        _this2.allowedRect_.left += _this2.leftBorder_;
        _this2.allowedRect_.top += _this2.topBorder_;
        _this2.allowedRect_.right -= _this2.rightBorder_;
        _this2.allowedRect_.bottom -= _this2.bottomBorder_;
      });
    };
    return ClickLocationFilter2;
  }(Filter);
  function isValidClickLocationSpec(spec) {
    return spec.type == FilterType.CLICK_LOCATION && (typeof spec.left === "undefined" || typeof spec.left === "number") && (typeof spec.right === "undefined" || typeof spec.right === "number") && (typeof spec.top === "undefined" || typeof spec.top === "number") && (typeof spec.bottom === "undefined" || typeof spec.bottom === "number") && (typeof spec.relativeTo === "undefined" || typeof spec.relativeTo === "string");
  }

  // extensions/amp-ad-exit/0.1/filters/inactive-element.js
  function _inherits3(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf3(subClass, superClass);
  }
  function _setPrototypeOf3(o, p) {
    _setPrototypeOf3 = Object.setPrototypeOf || function _setPrototypeOf5(o2, p2) {
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
    _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf5(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf3(o);
  }
  var InactiveElementFilter = /* @__PURE__ */ function(_Filter) {
    _inherits3(InactiveElementFilter2, _Filter);
    var _super = _createSuper3(InactiveElementFilter2);
    function InactiveElementFilter2(name, spec) {
      var _this;
      _this = _super.call(this, name, spec.type);
      userAssert(isValidInactiveElementSpec(spec), "Invalid InactiveElementspec");
      _this.selector_ = spec.selector;
      return _this;
    }
    var _proto = InactiveElementFilter2.prototype;
    _proto.filter = function filter(event) {
      var element = dev().assertElement(event.target);
      return !matches(element, this.selector_);
    };
    return InactiveElementFilter2;
  }(Filter);
  function isValidInactiveElementSpec(spec) {
    return spec.type == FilterType.INACTIVE_ELEMENT && typeof spec.selector == "string";
  }
  function makeInactiveElementSpec(selector) {
    return {
      type: FilterType.INACTIVE_ELEMENT,
      selector: selector
    };
  }

  // extensions/amp-ad-exit/0.1/filters/factory.js
  function createFilter(name, spec, adExitInstance) {
    switch (spec.type) {
      case FilterType.CLICK_DELAY:
        return new ClickDelayFilter(name, spec, adExitInstance.win);
      case FilterType.CLICK_LOCATION:
        return new ClickLocationFilter(name, spec, adExitInstance);
      case FilterType.INACTIVE_ELEMENT:
        return new InactiveElementFilter(name, spec);
      default:
        return void 0;
    }
  }

  // src/ad-helper.js
  function getAmpAdResourceId(node, topWin) {
    try {
      var frameParent = getParentWindowFrameElement(node, topWin).parentElement;
      if (frameParent.nodeName == "AMP-AD") {
        return String(frameParent.getResourceId());
      }
    } catch (e) {
    }
    return null;
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

  // extensions/amp-ad-exit/0.1/amp-ad-exit.js
  function _inherits4(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf4(subClass, superClass);
  }
  function _setPrototypeOf4(o, p) {
    _setPrototypeOf4 = Object.setPrototypeOf || function _setPrototypeOf5(o2, p2) {
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
    _getPrototypeOf4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf5(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf4(o);
  }
  var TAG2 = "amp-ad-exit";
  var AttributionReportingStatus = {
    ATTRIBUTION_MACRO_PRESENT: 1,
    ATTRIBUTION_DATA_PRESENT: 2,
    ATTRIBUTION_DATA_PRESENT_AND_POLICY_ENABLED: 3
  };
  var AmpAdExit = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits4(AmpAdExit2, _AMP$BaseElement);
    var _super = _createSuper4(AmpAdExit2);
    function AmpAdExit2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.targets_ = {};
      _this.variableTargets_ = {};
      _this.defaultFilters_ = [];
      _this.transport_ = {
        beacon: true,
        image: true
      };
      _this.userFilters_ = {};
      _this.registerAction("exit", _this.exit.bind(_assertThisInitialized4(_this)));
      _this.registerAction("setVariable", _this.setVariable.bind(_assertThisInitialized4(_this)), ActionTrust_Enum.LOW);
      _this.vendorResponses_ = {};
      _this.unlisten_ = null;
      _this.ampAdResourceId_ = null;
      _this.expectedOriginToVendor_ = {};
      _this.isAttributionReportingSupported_ = _this.detectAttributionReportingSupport();
      return _this;
    }
    var _proto = AmpAdExit2.prototype;
    _proto.exit = function exit(invocation) {
      var _this2 = this;
      var args = invocation.args;
      var event = invocation.event;
      userAssert("variable" in args != "target" in args, "One and only one of 'target' and 'variable' must be specified");
      var targetName;
      if ("variable" in args) {
        targetName = this.variableTargets_[args["variable"]];
        if (!targetName) {
          targetName = args["default"];
        }
        userAssert(targetName, "Variable target not found, variable:'" + args["variable"] + "', default:'" + args["default"] + "'");
        delete args["default"];
      } else {
        targetName = args["target"];
      }
      var target = this.targets_[targetName];
      userAssert(target, "Exit target not found: '" + targetName + "'");
      userAssert(event, "Unexpected null event");
      event = event;
      event.preventDefault();
      if (!this.filter_(this.defaultFilters_, event) || !this.filter_(target.filters, event)) {
        return;
      }
      var substituteVariables = this.getUrlVariableRewriter_(args, event, target);
      if (target.trackingUrls) {
        target.trackingUrls.map(substituteVariables).forEach(function(url) {
          return _this2.pingTrackingUrl_(url);
        });
      }
      var finalUrl = substituteVariables(target.finalUrl);
      if (HostServices.isAvailable(this.getAmpDoc())) {
        HostServices.exitForDoc(this.getAmpDoc()).then(function(exitService) {
          return exitService.openUrl(finalUrl);
        }).catch(function(error) {
          dev().fine(TAG2, "ExitServiceError - fallback=" + error.fallback);
          if (error.fallback) {
            openWindowDialog(_this2.win, finalUrl, "_blank");
          }
        });
      } else {
        var clickTarget = target.behaviors && target.behaviors.clickTarget && target.behaviors.clickTarget == "_top" ? "_top" : "_blank";
        openWindowDialog(this.win, finalUrl, clickTarget, target.windowFeatures);
      }
    };
    _proto.setVariable = function setVariable(invocation) {
      var args = invocation.args;
      var pointToTarget = this.targets_[args["target"]];
      userAssert(pointToTarget, "Exit target not found: '" + args["target"] + "'");
      this.variableTargets_[args["name"]] = args["target"];
    };
    _proto.getUrlVariableRewriter_ = function getUrlVariableRewriter_(args, event, target) {
      var _this3 = this;
      var substitutionFunctions = {
        "ATTRIBUTION_REPORTING_STATUS": function ATTRIBUTION_REPORTING_STATUS() {
          return getAttributionReportingStatus(_this3.isAttributionReportingSupported_, target);
        },
        "CLICK_X": function CLICK_X() {
          return event.clientX;
        },
        "CLICK_Y": function CLICK_Y() {
          return event.clientY;
        }
      };
      var replacements = Services.urlReplacementsForDoc(this.element);
      var allowlist = {
        "ATTRIBUTION_REPORTING_STATUS": true,
        "CLICK_X": true,
        "CLICK_Y": true,
        "RANDOM": true
      };
      if (target["vars"]) {
        var _loop = function _loop2(customVarName2) {
          if (customVarName2[0] != "_") {
            return "continue";
          }
          var customVar = target["vars"][customVarName2];
          if (!customVar) {
            return "continue";
          }
          substitutionFunctions[customVarName2] = function() {
            if (customVar.iframeTransportSignal) {
              var vendorResponse = replacements.expandStringSync(customVar.iframeTransportSignal, {
                "IFRAME_TRANSPORT_SIGNAL": function IFRAME_TRANSPORT_SIGNAL(vendor, responseKey) {
                  if (!(vendor && responseKey)) {
                    return "";
                  }
                  var vendorResponses = _this3.vendorResponses_[vendor];
                  if (vendorResponses && responseKey in vendorResponses) {
                    return vendorResponses[responseKey];
                  }
                }
              });
              if (customVar.iframeTransportSignal == "IFRAME_TRANSPORT_SIGNAL" + vendorResponse) {
                dev().error(TAG2, "Invalid IFRAME_TRANSPORT_SIGNAL format:" + vendorResponse + " (perhaps there is a space after a comma?)");
              } else if (vendorResponse != "") {
                return vendorResponse;
              }
            }
            return customVarName2 in args ? args[customVarName2] : customVar.defaultValue;
          };
          allowlist[customVarName2] = true;
        };
        for (var customVarName in target["vars"]) {
          var _ret = _loop(customVarName);
          if (_ret === "continue")
            continue;
        }
      }
      return function(url) {
        return replacements.expandUrlSync(url, substitutionFunctions, allowlist);
      };
    };
    _proto.pingTrackingUrl_ = function pingTrackingUrl_(url) {
      user().fine(TAG2, "pinging " + url);
      if (this.transport_.beacon && this.win.navigator.sendBeacon && this.win.navigator.sendBeacon(url, "")) {
        return;
      }
      if (this.transport_.image) {
        var req = this.win.document.createElement("img");
        req.src = url;
        return;
      }
    };
    _proto.filter_ = function filter_(filters, event) {
      return filters.every(function(filter) {
        var result = filter.filter(event);
        user().info(TAG2, "Filter '" + filter.name + "': " + (result ? "pass" : "fail"));
        return result;
      });
    };
    _proto.buildCallback = function buildCallback() {
      var _this4 = this;
      this.element.setAttribute("aria-hidden", "true");
      this.defaultFilters_.push(createFilter("minDelay", makeClickDelaySpec(1e3), this));
      this.defaultFilters_.push(createFilter("carouselBtns", makeInactiveElementSpec(".amp-carousel-button"), this));
      var children = this.element.children;
      userAssert(children.length == 1, "The tag should contain exactly one <script> child.");
      var child = children[0];
      userAssert(isJsonScriptTag(child), 'The amp-ad-exit config should be inside a <script> tag with type="application/json"');
      try {
        var config = assertConfig(parseJson(child.textContent));
        var defaultClickStartTimingEvent;
        if (isObject(config["options"]) && typeof config["options"]["startTimingEvent"] === "string") {
          defaultClickStartTimingEvent = config["options"]["startTimingEvent"];
          this.defaultFilters_.splice(0, 1, devAssert2(createFilter("minDelay", makeClickDelaySpec(1e3, config["options"]["startTimingEvent"]), this)));
        }
        for (var name in config["filters"]) {
          var spec = config["filters"][name];
          if (spec.type == FilterType.CLICK_DELAY) {
            spec.startTimingEvent = spec.startTimingEvent || defaultClickStartTimingEvent;
          }
          this.userFilters_[name] = createFilter(name, spec, this);
        }
        for (var _name in config["targets"]) {
          var target = config["targets"][_name];
          this.targets_[_name] = {
            finalUrl: target["finalUrl"],
            trackingUrls: target["trackingUrls"] || [],
            vars: target["vars"] || {},
            filters: (target["filters"] || []).map(function(f) {
              return _this4.userFilters_[f];
            }).filter(Boolean),
            behaviors: target["behaviors"] || {}
          };
          if (this.isAttributionReportingSupported_) {
            var _target$behaviors;
            this.targets_[_name]["windowFeatures"] = this.getAttributionReportingValues_(target == null ? void 0 : (_target$behaviors = target.behaviors) == null ? void 0 : _target$behaviors.browserAdConversion);
          }
          for (var customVar in target["vars"]) {
            if (!target["vars"][customVar].iframeTransportSignal) {
              continue;
            }
            var matches2 = target["vars"][customVar].iframeTransportSignal.match(/IFRAME_TRANSPORT_SIGNAL\(([^,]+)/);
            if (!matches2 || matches2.length < 2) {
              continue;
            }
            var vendor = matches2[1];
            var _parseUrlDeprecated = parseUrlDeprecated(assertVendor(vendor)), origin = _parseUrlDeprecated.origin;
            this.expectedOriginToVendor_[origin] = this.expectedOriginToVendor_[origin] || vendor;
          }
        }
        this.transport_.beacon = config["transport"][TransportMode.BEACON] !== false;
        this.transport_.image = config["transport"][TransportMode.IMAGE] !== false;
      } catch (e) {
        this.user().error(TAG2, "Invalid JSON config", e);
        throw e;
      }
      this.init3pResponseListener_();
    };
    _proto.detectAttributionReportingSupport = function detectAttributionReportingSupport() {
      var _this$win$document$fe;
      return (_this$win$document$fe = this.win.document.featurePolicy) == null ? void 0 : _this$win$document$fe.allowsFeature("attribution-reporting");
    };
    _proto.getAttributionReportingValues_ = function getAttributionReportingValues_(adConversionData) {
      if (!adConversionData || !Object.keys(adConversionData)) {
        return;
      }
      var parts = ["noopener"];
      for (var _i = 0, _Object$keys = Object.keys(adConversionData); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        parts.push(key.toLowerCase() + "=" + adConversionData[key]);
      }
      return parts.join(",");
    };
    _proto.getAmpAdResourceId_ = function getAmpAdResourceId_() {
      return getAmpAdResourceId(this.element, getTopWindow(this.win));
    };
    _proto.resumeCallback = function resumeCallback() {
      this.init3pResponseListener_();
    };
    _proto.unlayoutCallback = function unlayoutCallback() {
      if (this.unlisten_) {
        this.unlisten_();
        this.unlisten_ = null;
      }
      return _AMP$BaseElement.prototype.unlayoutCallback.call(this);
    };
    _proto.init3pResponseListener_ = function init3pResponseListener_() {
      var _this5 = this;
      if (getMode().runtime == "inabox") {
        return;
      }
      this.ampAdResourceId_ = this.ampAdResourceId_ || this.getAmpAdResourceId_();
      if (!this.ampAdResourceId_) {
        user().warn(TAG2, "No friendly parent amp-ad element was found for amp-ad-exit; not in inabox case.");
        return;
      }
      devAssert2(!this.unlisten_, "Unlistener should not already exist.");
      this.unlisten_ = listen(this.getAmpDoc().win, "message", function(event) {
        if (!_this5.expectedOriginToVendor_[event.origin]) {
          return;
        }
        var responseMsg = deserializeMessage(getData(event));
        if (!responseMsg || responseMsg["type"] != MessageType_Enum.IFRAME_TRANSPORT_RESPONSE) {
          return;
        }
        _this5.assertValidResponseMessage_(responseMsg, event.origin);
        if (responseMsg["creativeId"] != _this5.ampAdResourceId_) {
          return;
        }
        _this5.vendorResponses_[responseMsg["vendor"]] = responseMsg["message"];
      });
    };
    _proto.assertValidResponseMessage_ = function assertValidResponseMessage_(responseMessage, eventOrigin) {
      userAssert(responseMessage["message"], "Received empty response from 3p analytics frame");
      userAssert(responseMessage["creativeId"], "Received malformed message from 3p analytics frame: creativeId missing");
      userAssert(responseMessage["vendor"], "Received malformed message from 3p analytics frame: vendor missing");
      var vendorURL = parseUrlDeprecated(assertVendor(responseMessage["vendor"]));
      userAssert(vendorURL && vendorURL.origin == eventOrigin, "Invalid origin for vendor " + (responseMessage["vendor"] + ": " + eventOrigin));
    };
    _proto.isLayoutSupported = function isLayoutSupported(unused) {
      return true;
    };
    _proto.onLayoutMeasure = function onLayoutMeasure() {
      for (var name in this.userFilters_) {
        this.userFilters_[name].onLayoutMeasure();
      }
    };
    return AmpAdExit2;
  }(AMP.BaseElement);
  AMP.registerElement(TAG2, AmpAdExit);
  function getAttributionReportingStatus(isAttributionReportingSupported, target) {
    var _target$behaviors2, _target$behaviors3;
    if (target != null && (_target$behaviors2 = target.behaviors) != null && _target$behaviors2.browserAdConversion && isAttributionReportingSupported) {
      return AttributionReportingStatus.ATTRIBUTION_DATA_PRESENT_AND_POLICY_ENABLED;
    } else if (target != null && (_target$behaviors3 = target.behaviors) != null && _target$behaviors3.browserAdConversion) {
      return AttributionReportingStatus.ATTRIBUTION_DATA_PRESENT;
    }
    return AttributionReportingStatus.ATTRIBUTION_MACRO_PRESENT;
  }
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-ad-exit-0.1.max.js.map
