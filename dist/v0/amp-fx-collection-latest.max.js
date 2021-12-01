(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-fx-collection",ev:"0.1",l:true,f:(function(AMP,_){
(function() {
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

  // src/core/mode/prod.js
  function isProd() {
    return false;
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

  // src/core/types/array.js
  var isArray = Array.isArray;
  function removeItem(array, item) {
    var index = array.indexOf(item);
    if (index == -1) {
      return false;
    }
    array.splice(index, 1);
    return true;
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
  function iterateCursor(iterable, cb) {
    var length = iterable.length;
    for (var i = 0; i < length; i++) {
      cb(iterable[i], i);
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

  // extensions/amp-fx-collection/0.1/fx-type.js
  var _FxBindings;
  var TAG = "amp-fx-collection";
  var validFxTypes = [
    "fade-in",
    "fade-in-scroll",
    "float-in-bottom",
    "float-in-top",
    "fly-in-bottom",
    "fly-in-left",
    "fly-in-right",
    "fly-in-top",
    "parallax"
  ];
  var FxType = {
    FADE_IN: validFxTypes[0],
    FADE_IN_SCROLL: validFxTypes[1],
    FLOAT_IN_BOTTOM: validFxTypes[2],
    FLOAT_IN_TOP: validFxTypes[3],
    FLY_IN_BOTTOM: validFxTypes[4],
    FLY_IN_LEFT: validFxTypes[5],
    FLY_IN_RIGHT: validFxTypes[6],
    FLY_IN_TOP: validFxTypes[7],
    PARALLAX: validFxTypes[8]
  };
  var FxObservesSignal = {
    POSITION: 0,
    SCROLL_TOGGLE: 1
  };
  var FxBindings = (_FxBindings = {}, _FxBindings[FxType.FADE_IN] = {
    observes: FxObservesSignal.POSITION,
    opacity: true
  }, _FxBindings[FxType.FADE_IN_SCROLL] = {
    observes: FxObservesSignal.POSITION,
    opacity: true
  }, _FxBindings[FxType.FLOAT_IN_BOTTOM] = {
    observes: FxObservesSignal.SCROLL_TOGGLE,
    translates: {
      y: true
    }
  }, _FxBindings[FxType.FLOAT_IN_TOP] = {
    observes: FxObservesSignal.SCROLL_TOGGLE,
    translates: {
      y: true
    }
  }, _FxBindings[FxType.FLY_IN_BOTTOM] = {
    observes: FxObservesSignal.POSITION,
    translates: {
      y: true
    }
  }, _FxBindings[FxType.FLY_IN_LEFT] = {
    observes: FxObservesSignal.POSITION,
    translates: {
      x: true
    }
  }, _FxBindings[FxType.FLY_IN_RIGHT] = {
    observes: FxObservesSignal.POSITION,
    translates: {
      x: true
    }
  }, _FxBindings[FxType.FLY_IN_TOP] = {
    observes: FxObservesSignal.POSITION,
    translates: {
      y: true
    }
  }, _FxBindings[FxType.PARALLAX] = {
    observes: FxObservesSignal.POSITION,
    translates: {
      y: true
    }
  }, _FxBindings);
  function isValidTypeCombination(fxTypeA, fxTypeB) {
    if (fxTypeA == fxTypeB) {
      return false;
    }
    var _FxBindings$fxTypeA = FxBindings[fxTypeA], observesA = _FxBindings$fxTypeA.observes, opacityA = _FxBindings$fxTypeA.opacity, translatesA = _FxBindings$fxTypeA.translates;
    var _FxBindings$fxTypeB = FxBindings[fxTypeB], observesB = _FxBindings$fxTypeB.observes, opacityB = _FxBindings$fxTypeB.opacity, translatesB = _FxBindings$fxTypeB.translates;
    if (observesA !== observesB) {
      return false;
    }
    if (opacityA && opacityB) {
      return false;
    }
    if (translatesA && translatesB) {
      if (translatesA.x && translatesB.x) {
        return false;
      }
      if (translatesA.y && translatesB.y) {
        return false;
      }
    }
    return true;
  }
  function userAssertIsValidType(type) {
    return userAssert(validFxTypes.indexOf(type) > -1, "Invalid amp-fx type `%s`", type);
  }
  function getFxTypes(element) {
    devAssert2(element.hasAttribute("amp-fx"));
    var fxTypes = element.getAttribute("amp-fx").trim().toLowerCase().split(/\s+/);
    userAssert(fxTypes.length, "No value provided for `amp-fx` attribute");
    return sanitizeFxTypes(fxTypes.filter(userAssertIsValidType));
  }
  function sanitizeFxTypes(types) {
    for (var i = 0; i < types.length; i++) {
      var fxTypeA = types[i];
      for (var j = i + 1; j < types.length; j++) {
        var fxTypeB = types[j];
        if (!isValidTypeCombination(fxTypeA, fxTypeB)) {
          user().warn(TAG, "%s preset can't be combined with %s preset as the resulting animation isn't valid.", fxTypeA, fxTypeB);
          types.splice(j--, 1);
        }
      }
    }
    return types;
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
  function px(value) {
    return value + "px";
  }
  function computedStyle(win, el) {
    var style = win.getComputedStyle(el);
    return style || EMPTY_CSS_DECLARATION;
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
    _proto.update = function update8(opt_force) {
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

  // extensions/amp-fx-collection/0.1/providers/amp-fx-presets.js
  var _Presets;
  function flyIn(fxElement, axis, coeff) {
    devAssert2(axis == "X" || axis == "Y");
    devAssert2(Math.abs(coeff) == 1);
    var element = dev().assertElement(fxElement.element);
    var axisIsX = axis == "X";
    var flyInDistanceAsLength = coeff * fxElement.flyInDistance + (axisIsX ? "vw" : "vh");
    if (!fxElement.initialTrigger) {
      Services.mutatorForDoc(element).mutateElement(element, function() {
        var style = computedStyle(fxElement.win, element);
        var prop = axisIsX ? "left" : "top";
        var propAsLength = style[prop] === "auto" ? "0px" : style[prop];
        var position = style.position === "static" ? "relative" : style.position;
        var styles = {
          position: position,
          visibility: "visible"
        };
        styles[prop] = "calc(" + propAsLength + " - " + flyInDistanceAsLength + ")";
        setStyles(element, assertDoesNotContainDisplay(styles));
      });
      fxElement.initialTrigger = true;
    }
    setStyles(element, {
      "transition-duration": fxElement.duration,
      "transition-timing-function": fxElement.easing,
      "transform": "translate" + axis + "(" + flyInDistanceAsLength + ")"
    });
  }
  function marginStartAsserts(element) {
    var marginStart = parseFloat(element.getAttribute("data-margin-start"));
    if (marginStart) {
      userAssert(marginStart >= 0 && marginStart <= 100, "data-margin-start must be a percentage value and be between 0% and 100% for: %s", element);
    }
    return marginStart;
  }
  function topFromPosObsEntryOrNull(entry) {
    return entry && entry.positionRect ? entry.positionRect.top : null;
  }
  function isInViewportForTopAxis(entry, fxElement, coeff) {
    var top = topFromPosObsEntryOrNull(entry);
    devAssert2(Math.abs(coeff) == 1);
    return !!top && top + coeff * fxElement.viewportHeight * fxElement.flyInDistance / 100 <= (1 - fxElement.marginStart) * fxElement.viewportHeight;
  }
  function isInViewportConsideringMargins(entry, fxElement, opt_vh) {
    var top = topFromPosObsEntryOrNull(entry);
    var vh = opt_vh !== void 0 ? opt_vh : fxElement.viewportHeight;
    return !!top && top <= (1 - fxElement.marginStart) * vh;
  }
  var Presets = (_Presets = {}, _Presets[FxType.PARALLAX] = {
    userAsserts: function userAsserts(element) {
      var factorValue = userAssert(element.getAttribute("data-parallax-factor"), "data-parallax-factor=<number> attribute must be provided for: %s", element);
      userAssert(parseFloat(factorValue) > 0, "data-parallax-factor must be a number and greater than 0 for: %s", element);
    },
    update: function update(entry) {
      var fxElement = this;
      var top = topFromPosObsEntryOrNull(entry);
      devAssert2(fxElement.adjustedViewportHeight);
      if (!top || top > fxElement.adjustedViewportHeight) {
        return;
      }
      var adjustedFactor = -(parseFloat(fxElement.factor) - 1);
      var offset = (fxElement.adjustedViewportHeight - top) * adjustedFactor;
      fxElement.offset = offset;
      setStyles(fxElement.element, {
        transform: "translateY(" + fxElement.offset.toFixed(0) + "px)"
      });
    }
  }, _Presets[FxType.FLY_IN_BOTTOM] = {
    userAsserts: marginStartAsserts,
    update: function update2(entry) {
      var fxElement = this;
      devAssert2(fxElement.viewportHeight);
      if (!isInViewportForTopAxis(entry, fxElement, -1)) {
        return;
      }
      flyIn(fxElement, "Y", -1);
    }
  }, _Presets[FxType.FLY_IN_LEFT] = {
    userAsserts: marginStartAsserts,
    update: function update3(entry) {
      var fxElement = this;
      devAssert2(fxElement.viewportHeight);
      if (!isInViewportConsideringMargins(entry, fxElement)) {
        return;
      }
      flyIn(fxElement, "X", 1);
    }
  }, _Presets[FxType.FLY_IN_RIGHT] = {
    userAsserts: marginStartAsserts,
    update: function update4(entry) {
      var fxElement = this;
      devAssert2(fxElement.viewportHeight);
      if (!isInViewportConsideringMargins(entry, fxElement)) {
        return;
      }
      flyIn(fxElement, "X", -1);
    }
  }, _Presets[FxType.FLY_IN_TOP] = {
    userAsserts: marginStartAsserts,
    update: function update5(entry) {
      var fxElement = this;
      devAssert2(fxElement.viewportHeight);
      if (!isInViewportForTopAxis(entry, fxElement, 1)) {
        return;
      }
      flyIn(fxElement, "Y", 1);
    }
  }, _Presets[FxType.FADE_IN] = {
    userAsserts: marginStartAsserts,
    update: function update6(entry) {
      var fxElement = this;
      devAssert2(fxElement.viewportHeight);
      if (!isInViewportConsideringMargins(entry, fxElement)) {
        return;
      }
      setStyles(fxElement.element, {
        "transition-duration": fxElement.duration,
        "transition-timing-function": fxElement.easing,
        "opacity": 1
      });
    }
  }, _Presets[FxType.FADE_IN_SCROLL] = {
    userAsserts: function userAsserts2(element) {
      var marginStart = marginStartAsserts(element);
      var marginEnd = parseFloat(element.getAttribute("data-margin-end"));
      if (!marginEnd) {
        return;
      }
      userAssert(marginEnd >= 0 && marginEnd <= 100, "data-margin-end must be a percentage value and be between 0% and 100% for: %s", element);
      userAssert(marginEnd > marginStart, "data-margin-end must be greater than data-margin-start for: %s", element);
    },
    update: function update7(entry) {
      var fxElement = this;
      var marginStart = fxElement.marginStart, viewportHeight = fxElement.viewportHeight;
      devAssert2(fxElement.adjustedViewportHeight);
      if (!isInViewportConsideringMargins(entry, fxElement, fxElement.adjustedViewportHeight)) {
        return;
      }
      if (!fxElement.hasRepeat && fxElement.offset >= 1) {
        return;
      }
      var top = topFromPosObsEntryOrNull(entry);
      var marginDelta = fxElement.marginEnd - marginStart;
      var offset = 1 * (viewportHeight - top - marginStart * viewportHeight) / (marginDelta * viewportHeight);
      fxElement.offset = offset;
      setStyles(fxElement.element, {
        opacity: fxElement.offset
      });
    }
  }, _Presets);

  // src/core/math.js
  function mapRange(val, min1, max1, min2, max2) {
    var max1Bound = max1;
    var min1Bound = min1;
    if (min1 > max1) {
      max1Bound = min1;
      min1Bound = max1;
    }
    if (val < min1Bound) {
      val = min1Bound;
    } else if (val > max1Bound) {
      val = max1Bound;
    }
    return (val - min1) * (max2 - min2) / (max1 - min1) + min2;
  }

  // extensions/amp-fx-collection/0.1/providers/amp-fx-presets-utils.js
  var MAX_MOBILE_WIDTH = 480;
  var MAX_TABLET_WIDTH = 1e3;
  function convertEasingKeyword(keyword) {
    var curves = {
      "linear": "cubic-bezier(0.00, 0.00, 1.00, 1.00)",
      "ease-in-out": "cubic-bezier(0.80, 0.00, 0.20, 1.00)",
      "ease-in": "cubic-bezier(0.80, 0.00, 0.60, 1.00)",
      "ease-out": "cubic-bezier(0.40, 0.00, 0.40, 1.00)"
    };
    if (curves[keyword]) {
      return curves[keyword];
    }
    userAssert(keyword.startsWith("cubic-bezier"), "All custom bezier curves should be specified by following the `cubic-bezier()` function notation.");
    return keyword;
  }
  function resolvePercentageToNumber(val) {
    var precentageStrippedVal = parseFloat(val);
    if (!isNaN(precentageStrippedVal)) {
      return precentageStrippedVal / 100;
    }
    return null;
  }
  function installStyles(element, fxType) {
    switch (fxType) {
      case FxType.PARALLAX:
        return {
          "will-change": "transform"
        };
      case FxType.FADE_IN:
        return {
          "will-change": "opacity",
          "opacity": 0
        };
      case FxType.FADE_IN_SCROLL:
        return {
          "will-change": "opacity",
          "opacity": 0
        };
      case FxType.FLY_IN_BOTTOM:
      case FxType.FLY_IN_TOP:
      case FxType.FLY_IN_LEFT:
      case FxType.FLY_IN_RIGHT:
        return {
          "will-change": "transform"
        };
      default:
        return {
          "visibility": "visible"
        };
    }
  }
  function defaultDurationValues(ampdoc2, fxType) {
    switch (fxType) {
      case FxType.FADE_IN:
        return "1000ms";
      case FxType.FLY_IN_BOTTOM:
      case FxType.FLY_IN_TOP:
      case FxType.FLY_IN_LEFT:
      case FxType.FLY_IN_RIGHT:
        var _Services$viewportFor = Services.viewportForDoc(ampdoc2).getSize(), width = _Services$viewportFor.width;
        return mapRange(Math.min(1e3, width), MAX_MOBILE_WIDTH, MAX_TABLET_WIDTH, 400, 600) + "ms";
      default:
        return "1ms";
    }
  }
  function defaultFlyInDistanceValues(ampdoc2, fxType) {
    switch (fxType) {
      case FxType.FLY_IN_BOTTOM:
      case FxType.FLY_IN_TOP:
        var _Services$viewportFor2 = Services.viewportForDoc(ampdoc2).getSize(), width = _Services$viewportFor2.width;
        if (width < MAX_TABLET_WIDTH) {
          return 25;
        }
        return 33;
      case FxType.FLY_IN_LEFT:
      case FxType.FLY_IN_RIGHT:
        return 100;
      default:
        return 1;
    }
  }
  function defaultMarginValues(fxType) {
    switch (fxType) {
      case FxType.FADE_IN:
      case FxType.FLY_IN_RIGHT:
      case FxType.FLY_IN_LEFT:
      case FxType.FLY_IN_TOP:
      case FxType.FLY_IN_BOTTOM:
        return {
          "start": 0.05
        };
      case FxType.FADE_IN_SCROLL:
        return {
          "start": 0,
          "end": 0.5
        };
      default:
        return {
          "start": 0,
          "end": 1
        };
    }
  }
  function defaultEasingValues(fxType) {
    switch (fxType) {
      case FxType.FADE_IN:
        return "ease-in";
      case FxType.FLY_IN_RIGHT:
      case FxType.FLY_IN_LEFT:
      case FxType.FLY_IN_TOP:
      case FxType.FLY_IN_BOTTOM:
        return "ease-out";
      default:
        return "ease-in";
    }
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

  // extensions/amp-fx-collection/0.1/scroll-toggle.js
  var TAG3 = "amp-fx";
  var ScrollTogglePosition = {
    TOP: "top",
    BOTTOM: "bottom"
  };
  var HEIGHT_PX = 36;
  var RETURN_THRESHOLD_PX = 20;
  var ANIMATION_THRESHOLD_PX = 80;
  var ANIMATION_CURVE = "ease";
  var ANIMATION_DURATION_MS = 300;
  var ScrollToggleDispatch = /* @__PURE__ */ function() {
    function ScrollToggleDispatch2(ampdoc2) {
      var _this = this;
      this.ampdoc_ = ampdoc2;
      this.observable_ = new Observable();
      this.initOnce_ = once(function() {
        return _this.init_();
      });
      this.baseScrollTop_ = 0;
      this.lastScrollTop_ = 0;
      this.isShown_ = true;
    }
    var _proto = ScrollToggleDispatch2.prototype;
    _proto.observe = function observe(handler) {
      this.observable_.add(handler);
      this.initOnce_();
    };
    _proto.init_ = function init_() {
      var _this2 = this;
      var viewport = Services.viewportForDoc(this.ampdoc_);
      viewport.onScroll(function() {
        _this2.onScroll_(viewport.getScrollTop());
      });
    };
    _proto.onScroll_ = function onScroll_(scrollTop) {
      this.lastScrollTop_ = scrollTop;
      var delta = this.lastScrollTop_ - this.baseScrollTop_;
      if (!this.isShown_ && delta > 0 || this.isShown_ && delta < 0) {
        this.baseScrollTop_ = this.lastScrollTop_;
      }
      if (!this.isShown_ && this.lastScrollTop_ <= HEIGHT_PX) {
        this.toggle_(true);
        this.baseScrollTop_ = this.lastScrollTop_;
        return;
      }
      if (!this.isShown_ && delta < -RETURN_THRESHOLD_PX) {
        this.toggle_(true);
        this.baseScrollTop_ = this.lastScrollTop_;
        return;
      }
      if (this.isShown_ && delta > ANIMATION_THRESHOLD_PX) {
        this.toggle_(false);
        this.baseScrollTop_ = this.lastScrollTop_;
      }
    };
    _proto.toggle_ = function toggle_(isShown) {
      if (this.isShown_ == isShown) {
        return;
      }
      this.isShown_ = isShown;
      this.observable_.fire(isShown);
    };
    return ScrollToggleDispatch2;
  }();
  function scrollToggleFloatIn(element, offset) {
    setImportantStyles(element, {
      "transition": "transform " + ANIMATION_DURATION_MS + "ms " + ANIMATION_CURVE,
      "transform": "translate(0, " + px(offset) + ")"
    });
  }
  function getScrollToggleFloatInOffset(element, isShown, position) {
    if (isShown) {
      return 0;
    }
    var offset = element.getBoundingClientRect().height;
    if (position == ScrollTogglePosition.TOP) {
      return -offset;
    }
    return offset;
  }
  function assertValidScrollToggleElement(element, computedStyle2) {
    return assertStyleOrWarn(computedStyle2, "overflow", "hidden", element) && assertStyleOrWarn(computedStyle2, "position", "fixed", element);
  }
  function getScrollTogglePosition(element, type, computedStyle2) {
    var position = type.replace(/^float\-in\-([^\s]+)$/, "$1");
    devAssert2(position.length > 0);
    if (!assertStyleOrWarn(computedStyle2, position, px(0), element, "amp-fx=" + type)) {
      return null;
    }
    return position;
  }
  function installScrollToggleStyles(element) {
    setImportantStyles(element, {
      "will-change": "transform"
    });
  }
  function assertStyleOrWarn(computed, prop, expected, element, opt_suffix) {
    if (computed[prop] == expected) {
      return true;
    }
    var suffix = opt_suffix ? " " + opt_suffix : "";
    var shorthand = elementShorthand(element);
    user().warn(TAG3, "FX element must have `" + prop + ": " + expected + "` [" + shorthand + "]" + suffix + ".");
    return false;
  }
  function elementShorthand(element, depth) {
    if (depth === void 0) {
      depth = 0;
    }
    var classList = element.classList, id = element.id, parentElement = element.parentElement, tagName = element.tagName;
    if (id) {
      return "#" + id;
    }
    var tagNameLower = tagName.toLowerCase();
    var suffix = tagNameLower;
    if (classList.length > 0) {
      var ellipsis = classList.length > 1 ? "..." : "";
      suffix += "." + classList[0] + ellipsis;
    }
    if (!parentElement) {
      return suffix + " (detached)";
    }
    var firstElementChild = parentElement.firstElementChild, lastElementChild = parentElement.lastElementChild;
    if (!(element == firstElementChild && element == lastElementChild)) {
      if (element == firstElementChild) {
        suffix += ":first-child";
      } else if (element == lastElementChild) {
        suffix += ":last-child";
      }
    }
    if (depth > 0) {
      return suffix;
    }
    return elementShorthand(parentElement, depth + 1) + " > " + suffix;
  }

  // extensions/amp-fx-collection/0.1/providers/fx-provider.js
  function installScrollToggledFx(ampdoc2, element, type) {
    if (Services.viewerForDoc(element).isEmbedded()) {
      return;
    }
    var fxScrollDispatch = "fx-scroll-dispatch";
    registerServiceBuilderForDoc(ampdoc2, fxScrollDispatch, ScrollToggleDispatch);
    var dispatch = getServiceForDoc(ampdoc2, fxScrollDispatch);
    var mutator = Services.mutatorForDoc(element);
    var shouldMutate = true;
    var measure = function measure2() {
      var computed = computedStyle(ampdoc2.win, element);
      var position = getScrollTogglePosition(element, type, computed);
      var isValid = assertValidScrollToggleElement(element, computed);
      if (!position || !isValid) {
        shouldMutate = false;
        return;
      }
      dispatch.observe(function(isShown) {
        scrollToggle(element, isShown, devAssert2(position));
      });
    };
    var mutate = function mutate2() {
      if (!shouldMutate) {
        return;
      }
      installScrollToggleStyles(element);
    };
    mutator.measureMutateElement(element, measure, mutate);
  }
  function scrollToggle(element, isShown, position) {
    var offset = 0;
    var measure = function measure2() {
      offset = getScrollToggleFloatInOffset(element, isShown, position);
    };
    var mutate = function mutate2() {
      scrollToggleFloatIn(element, offset);
    };
    Services.mutatorForDoc(element).measureMutateElement(element, measure, mutate);
  }
  function installPositionBoundFx(ampdoc2, element, type) {
    installPositionObserverServiceForDoc(ampdoc2);
    new FxElement(ampdoc2, element, type);
    setStyles(element, assertDoesNotContainDisplay(installStyles(element, type)));
  }
  var FxElement = /* @__PURE__ */ function() {
    function FxElement2(ampdoc2, element, fxType) {
      var _this = this;
      this.win = ampdoc2.win;
      this.positionObserver_ = Services.positionObserverForDoc(element);
      this.viewport_ = Services.viewportForDoc(element);
      this.mutator_ = Services.mutatorForDoc(element);
      this.viewportHeight = null;
      this.adjustedViewportHeight = null;
      this.element = element;
      this.offset = 0;
      this.fxType_ = fxType;
      Presets[fxType].userAsserts(element);
      this.factor = parseFloat(element.getAttribute("data-parallax-factor"));
      this.marginStart = element.hasAttribute("data-margin-start") ? resolvePercentageToNumber(element.getAttribute("data-margin-start")) : defaultMarginValues(fxType)["start"];
      this.marginEnd = element.hasAttribute("data-margin-end") ? resolvePercentageToNumber(element.getAttribute("data-margin-end")) : defaultMarginValues(fxType)["end"];
      this.easing = convertEasingKeyword(element.hasAttribute("data-easing") ? element.getAttribute("data-easing") : defaultEasingValues(fxType));
      this.duration = element.hasAttribute("data-duration") ? element.getAttribute("data-duration") : defaultDurationValues(ampdoc2, fxType);
      this.flyInDistance = element.hasAttribute("data-fly-in-distance") ? parseFloat(element.getAttribute("data-fly-in-distance")) : defaultFlyInDistanceValues(ampdoc2, fxType);
      this.hasRepeat = element.hasAttribute("data-repeat");
      this.initialTrigger = false;
      this.getAdjustedViewportHeight_().then(function(adjustedViewportHeight) {
        _this.adjustedViewportHeight = adjustedViewportHeight;
        _this.observePositionChanges_();
      });
      this.updateViewportHeight_();
    }
    var _proto = FxElement2.prototype;
    _proto.observePositionChanges_ = function observePositionChanges_() {
      var _this2 = this;
      this.positionObserver_.observe(this.element, PositionObserverFidelity_Enum.HIGH, Presets[this.fxType_].update.bind(this));
      this.viewport_.onResize(function() {
        _this2.updateViewportHeight_();
        _this2.getAdjustedViewportHeight_().then(function(adjustedViewportHeight) {
          _this2.adjustedViewportHeight = adjustedViewportHeight;
        });
      });
    };
    _proto.updateViewportHeight_ = function updateViewportHeight_() {
      var _this3 = this;
      this.mutator_.measureElement(function() {
        _this3.viewportHeight = _this3.viewport_.getHeight();
      });
    };
    _proto.getAdjustedViewportHeight_ = function getAdjustedViewportHeight_() {
      var _this4 = this;
      return this.mutator_.measureElement(function() {
        var viewportHeight = _this4.viewport_.getHeight();
        var offsetTop = 0;
        for (var node = _this4.element; node; node = node.offsetParent) {
          offsetTop += node.offsetTop;
        }
        var aboveTheFold = offsetTop < viewportHeight;
        return aboveTheFold ? offsetTop : viewportHeight;
      });
    };
    return FxElement2;
  }();

  // extensions/amp-fx-collection/0.1/amp-fx-collection.js
  var TAG4 = "amp-fx-collection";
  var AmpFxCollection = /* @__PURE__ */ function() {
    function AmpFxCollection2(ampdoc2) {
      var _this = this;
      this.ampdoc_ = ampdoc2;
      this.seen_ = [];
      Promise.all([ampdoc2.whenReady(), ampdoc2.whenFirstVisible()]).then(function() {
        var root = _this.ampdoc_.getRootNode();
        _this.scan_();
        listen(root, AmpEvents_Enum.DOM_UPDATE, function() {
          return _this.scan_();
        });
      });
    }
    var _proto = AmpFxCollection2.prototype;
    _proto.scan_ = function scan_() {
      var _this2 = this;
      var elements = this.ampdoc_.getRootNode().querySelectorAll("[amp-fx]");
      iterateCursor(elements, function(element) {
        if (_this2.seen_.includes(element)) {
          return;
        }
        tryCallback(function() {
          return _this2.register_(element);
        });
      });
    };
    _proto.register_ = function register_(element) {
      var _this3 = this;
      devAssert2(element.hasAttribute("amp-fx"));
      devAssert2(!this.seen_.includes(element));
      devAssert2(this.ampdoc_.isVisible());
      getFxTypes(element).forEach(function(type) {
        _this3.install_(element, type);
      });
      this.seen_.push(element);
    };
    _proto.install_ = function install_(element, type) {
      var _devAssert = devAssert2(FxBindings[type]), observes = _devAssert.observes;
      if (observes == FxObservesSignal.SCROLL_TOGGLE) {
        installScrollToggledFx(this.ampdoc_, element, type);
        return;
      }
      installPositionBoundFx(this.ampdoc_, element, type);
    };
    return AmpFxCollection2;
  }();
  AMP.registerServiceForDoc(TAG4, AmpFxCollection);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-fx-collection-0.1.max.js.map
