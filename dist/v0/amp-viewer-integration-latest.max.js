(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-viewer-integration",ev:"0.1",l:true,p:"high",f:(function(AMP,_){
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

  // src/core/types/object/json.js
  function parseJson(json) {
    return JSON.parse(json);
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
  function isString(s) {
    return typeof s == "string";
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
  function isIframed(win) {
    return win.parent && win.parent != win;
  }
  function domOrderComparator(element1, element2) {
    if (element1 === element2) {
      return 0;
    }
    var pos = element1.compareDocumentPosition(element2);
    var precedingOrContains = Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINS;
    if (pos & precedingOrContains) {
      return 1;
    }
    return -1;
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
  function devError(tag) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    var error = createError.apply(null, args);
    error.name = tag || error.name;
    maybeReportError(error);
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
  var TAG_ = "Animation";
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
        dev().warn(TAG_, "cannot animate");
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
          dev().error(TAG_, "completion failed: " + e, e);
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
          dev().warn(TAG_, "cancel animation");
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
            dev().error(TAG_, "step curve failed: " + e, e);
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
        dev().error(TAG_, "step mutate failed: " + e, e);
        this.complete_(false, 0);
        return;
      }
    };
    return AnimationPlayer2;
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

  // src/service/fixed-layer.js
  var TAG = "FixedLayer";
  var DECLARED_FIXED_PROP = "__AMP_DECLFIXED";
  var DECLARED_STICKY_PROP = "__AMP_DECLSTICKY";
  var LIGHTBOX_MODE_ATTR = "i-amphtml-lightbox";
  var LIGHTBOX_ELEMENT_CLASS = "i-amphtml-lightbox-element";
  function isLightbox(el) {
    return el.tagName.indexOf("LIGHTBOX") !== -1;
  }
  var FixedLayer = /* @__PURE__ */ function() {
    function FixedLayer2(ampdoc2, vsync, borderTop, paddingTop, transfer) {
      var _this = this;
      this.ampdoc = ampdoc2;
      this.vsync_ = vsync;
      this.borderTop_ = borderTop;
      this.paddingTop_ = paddingTop;
      this.committedPaddingTop_ = paddingTop;
      this.transfer_ = transfer && ampdoc2.isSingleDoc();
      this.transferLayer_ = null;
      this.counter_ = 0;
      this.elements_ = [];
      this.updatePass_ = new Pass(ampdoc2.win, function() {
        return _this.update();
      });
      this.hiddenObserverUnlistener_ = null;
      this.fixedSelectors_ = [];
      this.stickySelectors_ = [];
    }
    var _proto = FixedLayer2.prototype;
    _proto.enterLightbox = function enterLightbox(opt_lightbox, opt_onComplete) {
      var _this2 = this;
      var transferLayer = this.getTransferLayer_();
      if (transferLayer) {
        transferLayer.setLightboxMode(true);
      }
      if (opt_lightbox && opt_onComplete) {
        opt_onComplete.then(function() {
          return _this2.scanNode_(dev().assertElement(opt_lightbox), true);
        });
      }
    };
    _proto.leaveLightbox = function leaveLightbox() {
      var transferLayer = this.getTransferLayer_();
      if (transferLayer) {
        transferLayer.setLightboxMode(false);
      }
      var fes = remove(this.elements_, function(fe) {
        return !!fe.lightboxed;
      });
      this.returnFixedElements_(fes);
      if (!this.elements_.length) {
        this.unobserveHiddenMutations_();
      }
    };
    _proto.setup = function setup() {
      var viewer = Services.viewerForDoc(this.ampdoc);
      if (!getMode().localDev && !viewer.isEmbedded()) {
        return false;
      }
      var root = this.ampdoc.getRootNode();
      var stylesheets = root.styleSheets;
      if (!stylesheets) {
        return true;
      }
      this.fixedSelectors_.length = 0;
      this.stickySelectors_.length = 0;
      for (var i = 0; i < stylesheets.length; i++) {
        var stylesheet = stylesheets[i];
        if (!stylesheet) {
          dev().error(TAG, "Aborting setup due to null stylesheet.");
          return true;
        }
        var disabled = stylesheet.disabled, ownerNode = stylesheet.ownerNode;
        if (disabled || !ownerNode || ownerNode.tagName != "STYLE" || ownerNode.hasAttribute("amp-boilerplate") || ownerNode.hasAttribute("amp-runtime") || ownerNode.hasAttribute("amp-extension")) {
          continue;
        }
        this.discoverSelectors_(stylesheet.cssRules);
      }
      this.scanNode_(root);
      if (this.elements_.length > 0) {
        this.observeHiddenMutations();
      }
      var platform = Services.platformFor(this.ampdoc.win);
      if (this.elements_.length > 0 && !this.transfer_ && platform.isIos()) {
        user().warn(TAG, "Please test this page inside of an AMP Viewer such as Google's because the fixed or sticky positioning might have slightly different layout.");
      }
      return true;
    };
    _proto.scanNode_ = function scanNode_(node, opt_lightboxMode) {
      this.trySetupSelectors_(node, opt_lightboxMode);
      this.sortInDomOrder_();
      this.update();
    };
    _proto.observeHiddenMutations = function observeHiddenMutations() {
      this.initHiddenObserver_();
    };
    _proto.unobserveHiddenMutations_ = function unobserveHiddenMutations_() {
      this.updatePass_.cancel();
      var unlisten = this.hiddenObserverUnlistener_;
      if (unlisten) {
        unlisten();
        this.hiddenObserverUnlistener_ = null;
      }
    };
    _proto.initHiddenObserver_ = function initHiddenObserver_() {
      var _this3 = this;
      if (this.hiddenObserverUnlistener_) {
        return;
      }
      var root = this.ampdoc.getRootNode();
      var element = root.documentElement || root;
      var hiddenObserver = Services.hiddenObserverForDoc(element);
      this.hiddenObserverUnlistener_ = hiddenObserver.add(function() {
        if (!_this3.updatePass_.isPending()) {
          _this3.updatePass_.schedule(16);
        }
      });
    };
    _proto.updatePaddingTop = function updatePaddingTop(paddingTop, opt_transient) {
      this.paddingTop_ = paddingTop;
      if (!opt_transient) {
        this.committedPaddingTop_ = paddingTop;
      }
      this.update();
    };
    _proto.transformMutate = function transformMutate(transform) {
      if (transform) {
        this.elements_.forEach(function(e) {
          if (e.fixedNow && e.top) {
            setStyle(e.element, "transition", "none");
            if (e.transform && e.transform != "none") {
              setStyle(e.element, "transform", e.transform + " " + transform);
            } else {
              setStyle(e.element, "transform", transform);
            }
          }
        });
      } else {
        this.elements_.forEach(function(e) {
          if (e.fixedNow && e.top) {
            setStyles(e.element, {
              transform: "",
              transition: ""
            });
          }
        });
      }
    };
    _proto.addElement = function addElement(element, opt_forceTransfer) {
      var added = this.setupElement_(element, "*", "fixed", opt_forceTransfer);
      if (!added) {
        return resolvedPromise();
      }
      this.sortInDomOrder_();
      this.observeHiddenMutations();
      return this.update();
    };
    _proto.removeElement = function removeElement(element) {
      var fes = this.tearDownElement_(element);
      this.returnFixedElements_(fes);
    };
    _proto.returnFixedElements_ = function returnFixedElements_(fes) {
      var _this4 = this;
      if (fes.length > 0 && this.transferLayer_) {
        this.vsync_.mutate(function() {
          for (var i = 0; i < fes.length; i++) {
            var fe = fes[i];
            if (fe.position == "fixed") {
              _this4.transferLayer_.returnFrom(fe);
            }
          }
        });
      }
    };
    _proto.isDeclaredFixed = function isDeclaredFixed(element) {
      return !!element[DECLARED_FIXED_PROP];
    };
    _proto.isDeclaredSticky = function isDeclaredSticky(element) {
      return !!element[DECLARED_STICKY_PROP];
    };
    _proto.update = function update() {
      var _this5 = this;
      var toRemove = this.elements_.filter(function(fe) {
        return !_this5.ampdoc.contains(fe.element);
      });
      toRemove.forEach(function(fe) {
        return _this5.tearDownElement_(fe.element);
      });
      if (this.elements_.length == 0) {
        return resolvedPromise();
      }
      this.updatePass_.cancel();
      var hasTransferables = false;
      return this.vsync_.runPromise({
        measure: function measure(state) {
          var elements = _this5.elements_;
          var autoTops = [];
          var win = _this5.ampdoc.win;
          for (var i = 0; i < elements.length; i++) {
            setImportantStyles(elements[i].element, {
              top: "",
              bottom: "-9999vh",
              transition: "none"
            });
          }
          for (var _i = 0; _i < elements.length; _i++) {
            autoTops.push(computedStyle(win, elements[_i].element).top);
          }
          for (var _i2 = 0; _i2 < elements.length; _i2++) {
            setStyle(elements[_i2].element, "bottom", "");
          }
          for (var _i3 = 0; _i3 < elements.length; _i3++) {
            var fe = elements[_i3];
            var element = fe.element, forceTransfer = fe.forceTransfer;
            var style = computedStyle(win, element);
            var offsetHeight = element.offsetHeight, offsetTop = element.offsetTop, offsetWidth = element.offsetWidth;
            var bottom = style.bottom, _style$display = style.display, display = _style$display === void 0 ? "" : _style$display, _style$position = style.position, position = _style$position === void 0 ? "" : _style$position, zIndex = style.zIndex;
            var opacity = parseFloat(style.opacity);
            var transform = style[getVendorJsPropertyName(style, "transform")];
            var top = style.top;
            var isFixed = position === "fixed" && (forceTransfer || offsetWidth > 0 && offsetHeight > 0);
            var isSticky = endsWith(position, "sticky");
            var isDisplayed = display !== "none";
            if (!isDisplayed || !(isFixed || isSticky)) {
              state[fe.id] = {
                fixed: false,
                sticky: false,
                transferrable: false,
                top: "",
                zIndex: ""
              };
              continue;
            }
            if (top === "auto" || autoTops[_i3] !== top) {
              if (isFixed && offsetTop === _this5.committedPaddingTop_ + _this5.borderTop_) {
                top = "0px";
              } else {
                top = "";
              }
            }
            var isTransferrable = false;
            if (isFixed) {
              if (forceTransfer === true) {
                isTransferrable = true;
              } else if (forceTransfer === false) {
                isTransferrable = false;
              } else {
                isTransferrable = opacity > 0 && offsetHeight < 300 && !!(top || bottom);
              }
            }
            if (isTransferrable) {
              hasTransferables = true;
            }
            state[fe.id] = {
              fixed: isFixed,
              sticky: isSticky,
              transferrable: isTransferrable,
              top: top,
              zIndex: zIndex,
              transform: transform
            };
          }
        },
        mutate: function mutate(state) {
          if (hasTransferables && _this5.transfer_) {
            _this5.getTransferLayer_().update();
          }
          var elements = _this5.elements_;
          for (var i = 0; i < elements.length; i++) {
            var fe = elements[i];
            var feState = state[fe.id];
            setStyle(fe.element, "transition", "none");
            setStyle(fe.element, "transition", "");
            if (feState) {
              _this5.mutateElement_(fe, i, feState);
            }
          }
        }
      }, {}).catch(function(error) {
        dev().error(TAG, "Failed to mutate fixed elements:", error);
      });
    };
    _proto.trySetupSelectors_ = function trySetupSelectors_(root, opt_lightboxMode) {
      try {
        this.setupSelectors_(root, opt_lightboxMode);
      } catch (e) {
        dev().error(TAG, "Failed to setup fixed elements:", e);
      }
    };
    _proto.setupSelectors_ = function setupSelectors_(root, opt_lightboxMode) {
      for (var i = 0; i < this.fixedSelectors_.length; i++) {
        var fixedSelector = this.fixedSelectors_[i];
        var elements = root.querySelectorAll(fixedSelector);
        for (var j = 0; j < elements.length; j++) {
          if (this.elements_.length > 10) {
            break;
          }
          this.setupElement_(elements[j], fixedSelector, "fixed", void 0, opt_lightboxMode);
        }
      }
      for (var _i4 = 0; _i4 < this.stickySelectors_.length; _i4++) {
        var stickySelector = this.stickySelectors_[_i4];
        var _elements = root.querySelectorAll(stickySelector);
        for (var _j = 0; _j < _elements.length; _j++) {
          this.setupElement_(_elements[_j], stickySelector, "sticky", void 0, opt_lightboxMode);
        }
      }
    };
    _proto.warnAboutInlineStylesIfNecessary_ = function warnAboutInlineStylesIfNecessary_(element) {
      if (element.hasAttribute("style") && (getStyle(element, "top") || getStyle(element, "bottom"))) {
        user().error(TAG, "Inline styles with `top`, `bottom` and other CSS rules are not supported yet for fixed or sticky elements (#14186). Unexpected behavior may occur.", element);
      }
    };
    _proto.setupElement_ = function setupElement_(element, selector, position, opt_forceTransfer, opt_lightboxMode) {
      if (!opt_forceTransfer) {
        this.warnAboutInlineStylesIfNecessary_(element);
      }
      if (isLightbox(element)) {
        return false;
      }
      var isLightboxDescendant = closest(element, isLightbox);
      if (!opt_lightboxMode && isLightboxDescendant) {
        return false;
      }
      var elements = this.elements_;
      var removals = [];
      for (var i = 0; i < elements.length; i++) {
        var el = elements[i].element;
        if (el === element) {
          break;
        }
        if (el.contains(element)) {
          return false;
        }
        if (element.contains(el)) {
          removals.push(el);
        }
      }
      for (var _i5 = 0; _i5 < removals.length; _i5++) {
        this.removeElement(removals[_i5]);
      }
      var fe = null;
      for (var _i6 = 0; _i6 < elements.length; _i6++) {
        var _el = elements[_i6];
        if (_el.element == element && _el.position == position) {
          fe = _el;
          break;
        }
      }
      var isFixed = position == "fixed";
      if (fe) {
        if (!fe.selectors.includes(selector)) {
          fe.selectors.push(selector);
        }
      } else {
        var id = "F" + this.counter_++;
        element.setAttribute("i-amphtml-fixedid", id);
        if (isFixed) {
          element[DECLARED_FIXED_PROP] = true;
        } else {
          element[DECLARED_STICKY_PROP] = true;
        }
        fe = {
          id: id,
          element: element,
          position: position,
          selectors: [selector],
          fixedNow: false,
          stickyNow: false,
          lightboxed: !!isLightboxDescendant
        };
        elements.push(fe);
      }
      fe.forceTransfer = isFixed ? opt_forceTransfer : false;
      return true;
    };
    _proto.tearDownElement_ = function tearDownElement_(element) {
      var removed = [];
      for (var i = 0; i < this.elements_.length; i++) {
        var fe = this.elements_[i];
        if (fe.element === element) {
          if (!fe.lightboxed) {
            this.vsync_.mutate(function() {
              setStyle(element, "top", "");
            });
          }
          this.elements_.splice(i, 1);
          removed.push(fe);
        }
      }
      if (!this.elements_.length) {
        this.unobserveHiddenMutations_();
      }
      return removed;
    };
    _proto.sortInDomOrder_ = function sortInDomOrder_() {
      this.elements_.sort(function(fe1, fe2) {
        return domOrderComparator(fe1.element, fe2.element);
      });
    };
    _proto.mutateElement_ = function mutateElement_(fe, index, state) {
      var element = fe.element, oldFixed = fe.fixedNow;
      fe.fixedNow = state.fixed;
      fe.stickyNow = state.sticky;
      fe.top = state.fixed || state.sticky ? state.top : "";
      fe.transform = state.transform;
      if (oldFixed && (!state.fixed || !state.transferrable) && this.transferLayer_) {
        this.transferLayer_.returnFrom(fe);
      }
      if (state.top && (state.fixed || state.sticky) && !fe.lightboxed) {
        if (state.fixed || !this.transfer_) {
          setStyle(element, "top", "calc(" + state.top + " + " + this.paddingTop_ + "px)");
        } else {
          if (this.committedPaddingTop_ === this.paddingTop_) {
            setStyle(element, "top", state.top);
          } else {
            setStyle(element, "top", "calc(" + state.top + " - " + this.committedPaddingTop_ + "px)");
          }
        }
      }
      if (this.transfer_ && state.fixed && state.transferrable) {
        this.getTransferLayer_().transferTo(fe, index, state);
      }
    };
    _proto.getTransferLayer_ = function getTransferLayer_() {
      if (!this.transfer_ || this.transferLayer_) {
        return this.transferLayer_;
      }
      var doc = this.ampdoc.win.document;
      this.transferLayer_ = new TransferLayerBody(doc, this.vsync_);
      return this.transferLayer_;
    };
    _proto.discoverSelectors_ = function discoverSelectors_(rules) {
      for (var i = 0; i < rules.length; i++) {
        var rule = rules[i];
        if (rule.type == 4 || rule.type == 12) {
          this.discoverSelectors_(rule.cssRules);
          continue;
        }
        if (rule.type == 1) {
          var selectorText = rule.selectorText;
          var position = rule.style.position;
          if (selectorText === "*" || !position) {
            continue;
          }
          if (position === "fixed") {
            this.fixedSelectors_.push(selectorText);
          } else if (endsWith(position, "sticky")) {
            this.stickySelectors_.push(selectorText);
          }
        }
      }
    };
    _proto.animateFixedElements = function animateFixedElements(paddingTop, lastPaddingTop, duration, curve, transient) {
      var _this6 = this;
      this.updatePaddingTop(paddingTop, transient);
      if (duration <= 0) {
        return resolvedPromise();
      }
      var tr = function tr2(time) {
        return lastPaddingTop - paddingTop + (paddingTop - lastPaddingTop) * time;
      };
      return Animation.animate(this.ampdoc.getRootNode(), function(time) {
        var p = tr(time);
        _this6.transformMutate("translateY(" + p + "px)");
      }, duration, curve).thenAlways(function() {
        _this6.transformMutate(null);
      });
    };
    return FixedLayer2;
  }();
  var TransferLayerBody = /* @__PURE__ */ function() {
    function TransferLayerBody2(doc, vsync) {
      this.doc_ = doc;
      this.vsync_ = vsync;
      this.layer_ = doc.body.cloneNode(false);
      this.layer_.removeAttribute("style");
      var styles = {
        position: "absolute",
        top: 0,
        left: 0,
        height: 0,
        width: 0,
        pointerEvents: "none",
        overflow: "hidden",
        animation: "none",
        background: "none",
        border: "none",
        borderImage: "none",
        boxSizing: "border-box",
        boxShadow: "none",
        float: "none",
        margin: 0,
        opacity: 1,
        outline: "none",
        padding: "none",
        transform: "none",
        transition: "none"
      };
      setStyles(this.layer_, assertDoesNotContainDisplay(styles));
      setInitialDisplay(this.layer_, "block");
      doc.documentElement.appendChild(this.layer_);
    }
    var _proto3 = TransferLayerBody2.prototype;
    _proto3.getRoot = function getRoot() {
      return this.layer_;
    };
    _proto3.setLightboxMode = function setLightboxMode(on) {
      var _this7 = this;
      this.vsync_.mutate(function() {
        var root = _this7.getRoot();
        if (on) {
          root.setAttribute(LIGHTBOX_MODE_ATTR, "");
        } else {
          root.removeAttribute(LIGHTBOX_MODE_ATTR);
        }
      });
    };
    _proto3.update = function update() {
      var body = this.doc_.body;
      var layer = this.layer_;
      var bodyAttrs = body.attributes;
      var layerAttrs = layer.attributes;
      for (var i = 0; i < bodyAttrs.length; i++) {
        var attr = bodyAttrs[i];
        if (attr.name === "style") {
          continue;
        }
        layerAttrs.setNamedItem(attr.cloneNode(false));
      }
      for (var _i7 = 0; _i7 < layerAttrs.length; _i7++) {
        var name = layerAttrs[_i7].name;
        if (name === "style" || name === LIGHTBOX_MODE_ATTR || body.hasAttribute(name)) {
          continue;
        }
        layer.removeAttribute(name);
        _i7--;
      }
    };
    _proto3.transferTo = function transferTo(fe, index, state) {
      var _this8 = this;
      var element = fe.element;
      if (element.parentElement == this.layer_) {
        return;
      }
      dev().fine(TAG, "transfer to fixed:", fe.id, fe.element);
      user().warn(TAG, "In order to improve scrolling performance in Safari, we now move the element to a fixed positioning layer:", fe.element);
      if (!fe.placeholder) {
        setStyle(element, "pointer-events", "initial");
        var placeholder = fe.placeholder = this.doc_.createElement("i-amphtml-fpa");
        toggle(placeholder, false);
        placeholder.setAttribute("i-amphtml-fixedid", fe.id);
      }
      setStyle(element, "zIndex", "calc(" + (1e4 + index) + " + " + (state.zIndex || 0) + ")");
      if (fe.lightboxed) {
        element.classList.add(LIGHTBOX_ELEMENT_CLASS);
      }
      element.parentElement.replaceChild(fe.placeholder, element);
      this.layer_.appendChild(element);
      var matches2 = fe.selectors.some(function(selector) {
        return _this8.matches_(element, selector);
      });
      if (!matches2) {
        user().warn(TAG, "Failed to move the element to the fixed position layer. This is most likely due to the compound CSS selector:", fe.element);
        this.returnFrom(fe);
      }
    };
    _proto3.returnFrom = function returnFrom(fe) {
      if (!fe.placeholder || !this.doc_.contains(fe.placeholder)) {
        return;
      }
      var element = fe.element, placeholder = fe.placeholder;
      dev().fine(TAG, "return from fixed:", fe.id, element);
      if (fe.lightboxed) {
        element.classList.remove(LIGHTBOX_ELEMENT_CLASS);
      }
      if (this.doc_.contains(element)) {
        setStyle(fe.element, "zIndex", "");
        placeholder.parentElement.replaceChild(element, placeholder);
      } else {
        placeholder.parentElement.removeChild(placeholder);
      }
    };
    _proto3.matches_ = function matches_(element, selector) {
      try {
        return matches(element, selector);
      } catch (e) {
        dev().error(TAG, "Failed to test query match:", e);
        return false;
      }
    };
    return TransferLayerBody2;
  }();

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

  // extensions/amp-viewer-integration/0.1/focus-handler.js
  var FocusHandler = /* @__PURE__ */ function() {
    function FocusHandler2(win, messaging) {
      this.win = win;
      this.messaging_ = messaging;
      this.listenForFocusEvents_();
    }
    var _proto = FocusHandler2.prototype;
    _proto.listenForFocusEvents_ = function listenForFocusEvents_() {
      var doc = this.win.document;
      listen(doc, "focusin", this.forwardEventToViewer_.bind(this), {
        capture: false
      });
    };
    _proto.forwardEventToViewer_ = function forwardEventToViewer_(e) {
      if (e.defaultPrevented) {
        return;
      }
      this.messaging_.sendRequest(e.type, dict({
        "focusTargetRect": e.target.getBoundingClientRect()
      }), false);
    };
    return FocusHandler2;
  }();

  // src/core/document/ready.js
  function isDocumentReady(doc) {
    return doc.readyState != "loading" && doc.readyState != "uninitialized";
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
  function moveLayoutRect(rect, dx, dy) {
    if (dx == 0 && dy == 0 || rect.width == 0 && rect.height == 0) {
      return rect;
    }
    return layoutRectLtwh(rect.left + dx, rect.top + dy, rect.width, rect.height);
  }

  // extensions/amp-viewer-integration/0.1/findtext.js
  var CircularBuffer = /* @__PURE__ */ function() {
    function CircularBuffer2(max) {
      this.max_ = max;
      this.buff_ = [];
      this.next_ = 0;
    }
    var _proto = CircularBuffer2.prototype;
    _proto.push = function push(item) {
      this.buff_[this.next_] = item;
      this.next_ = (this.next_ + 1) % this.max_;
    };
    _proto.get = function get(index) {
      if (this.buff_.length >= this.max_) {
        index = (this.next_ + index) % this.max_;
      }
      return this.buff_[index];
    };
    _proto.size = function size() {
      return this.buff_.length;
    };
    return CircularBuffer2;
  }();
  function textPosChar(pos) {
    return pos.node.wholeText[pos.offset];
  }
  var skipCharRe = /[,.\s\u2022()]/;
  function canonicalizeChar(c) {
    if (c == "\u2019" || c == "\u2018") {
      return "'";
    }
    if (c == "\u201C" || c == "\u201D") {
      return '"';
    }
    return c.toLowerCase();
  }
  function canonicalizeString(s) {
    var buf = [];
    for (var i = 0; i < s.length; i++) {
      var c = s[i];
      if (skipCharRe.test(c)) {
        continue;
      }
      buf.push(canonicalizeChar(c));
    }
    return buf.join("");
  }
  function canonicalizeSentences(sentences) {
    var ret = [];
    for (var i = 0; i < sentences.length; i++) {
      var sen = canonicalizeString(sentences[i]);
      if (sen) {
        ret.push(sen);
      }
    }
    return ret;
  }
  var Matcher = /* @__PURE__ */ function() {
    function Matcher2(sen, buf) {
      this.sen_ = sen;
      this.buf_ = buf;
      this.matches = [];
      this.skipTable_ = {};
      this.skip_ = sen.length - 1;
      for (var i = 0; i < sen.length; i++) {
        var c = sen[i];
        this.skipTable_[c] = sen.length - 1 - i;
      }
    }
    var _proto2 = Matcher2.prototype;
    _proto2.update = function update() {
      if (this.skip_ > 0) {
        this.skip_--;
        return;
      }
      var buf = this.buf_, sen = this.sen_;
      var bufSize = buf.size();
      for (var j = 0; j < sen.length; j++) {
        var c = canonicalizeChar(textPosChar(buf.get(bufSize - 1 - j).pos));
        if (sen[sen.length - 1 - j] == c) {
          continue;
        }
        var skip = this.skipTable_[c];
        if (skip == null) {
          skip = sen.length;
        }
        skip -= j;
        if (skip < 1) {
          skip = 1;
        }
        this.skip_ = skip - 1;
        return;
      }
      var endPosIdx = buf.get(bufSize - 1);
      var endPos = endPosIdx.pos;
      this.matches.push({
        start: buf.get(bufSize - sen.length),
        end: {
          pos: {
            node: endPos.node,
            offset: endPos.offset + 1
          },
          idx: endPosIdx.idx + 1
        }
      });
    };
    return Matcher2;
  }();
  function findSentences(win, node, sentences) {
    sentences = canonicalizeSentences(sentences);
    if (sentences.length <= 0) {
      return null;
    }
    var scanner = new TextScanner(win, node);
    var buf = new CircularBuffer(sentences.map(function(sen) {
      return sen.length;
    }).reduce(function(x, y) {
      return Math.max(x, y);
    }));
    var matchers = [new Matcher(sentences[0], buf)];
    var posIdx = -1;
    while (true) {
      posIdx++;
      var pos = scanner.next();
      if (pos == null) {
        return null;
      }
      if (skipCharRe.test(textPosChar(pos))) {
        continue;
      }
      buf.push({
        pos: pos,
        idx: posIdx
      });
      for (var i = 0; i < matchers.length; i++) {
        matchers[i].update();
      }
      var lastMatcher = matchers[matchers.length - 1];
      if (lastMatcher.matches.length == 0) {
        continue;
      }
      if (matchers.length == sentences.length) {
        break;
      }
      matchers.push(new Matcher(sentences[matchers.length], buf));
    }
    var matches2 = [];
    outerLoop:
      for (var _i = sentences.length - 1; _i >= 0; _i--) {
        var mm = matchers[_i].matches;
        if (matches2.length == 0) {
          matches2.push(mm[mm.length - 1]);
          continue;
        }
        var prev = matches2[matches2.length - 1];
        for (var j = mm.length - 1; j >= 0; j--) {
          var match = mm[j];
          if (prev.start.idx >= match.end.idx) {
            matches2.push(match);
            continue outerLoop;
          }
        }
        devAssert2(false, "missing valid match");
      }
    var ret = [];
    for (var _i2 = matches2.length - 1; _i2 >= 0; _i2--) {
      var _match = matches2[_i2];
      ret.push({
        start: _match.start.pos,
        end: _match.end.pos
      });
    }
    return ret;
  }
  function markTextRangeList(win, ranges) {
    ranges = concatContinuousRanges(ranges);
    var marked = [];
    for (var i = 0; i < ranges.length; i++) {
      var r = ranges[i];
      markTextRange(win, r.start, r.end, ranges, i, marked);
    }
    return marked;
  }
  function concatContinuousRanges(ranges) {
    var ret = [];
    var prev = null;
    for (var i = 0; i < ranges.length; i++) {
      var r = ranges[i];
      if (prev && prev.end.node == r.start.node && prev.end.offset == r.start.offset) {
        prev.end = r.end;
        continue;
      }
      prev = r;
      ret.push(r);
      continue;
    }
    return ret;
  }
  function fixTextRangesWithRemovedText(pos, newText, from, ranges) {
    for (var i = from; i < ranges.length; i++) {
      var r = ranges[i];
      if (pos.node != r.start.node) {
        return;
      }
      r.start.node = newText;
      r.start.offset -= pos.offset;
      if (pos.node != r.end.node) {
        return;
      }
      r.end.node = newText;
      r.end.offset -= pos.offset;
    }
  }
  function markTextRange(win, start, end, ranges, idx, marked) {
    while (true) {
      if (start.node == end.node) {
        var newText = markSingleTextNode(win, start.node, start.offset, end.offset, marked);
        if (newText) {
          fixTextRangesWithRemovedText(end, newText, idx + 1, ranges);
        }
        return;
      }
      var next = nextTextNode(win, start.node);
      markSingleTextNode(win, start.node, start.offset, start.node.wholeText.length, marked);
      if (!next) {
        break;
      }
      start = {
        node: next,
        offset: 0
      };
    }
  }
  function markSingleTextNode(win, node, start, end, marked) {
    if (start >= end) {
      return null;
    }
    var doc = win.document;
    var parent = node.parentNode, text = node.wholeText;
    if (start > 0) {
      parent.insertBefore(doc.createTextNode(text.substring(0, start)), node);
    }
    var span = doc.createElement("span");
    span.appendChild(doc.createTextNode(text.substring(start, end)));
    parent.insertBefore(span, node);
    marked.push(span);
    var endText = null;
    if (end < text.length) {
      endText = doc.createTextNode(text.substring(end));
      parent.insertBefore(endText, node);
    }
    parent.removeChild(node);
    return endText;
  }
  function nextTextNode(win, textNode) {
    var leaving = true;
    var node = textNode;
    while (true) {
      if (node == null) {
        return null;
      }
      if (leaving) {
        var next = node.nextSibling;
        if (next) {
          node = next;
          leaving = false;
        } else {
          node = node.parentNode;
        }
        continue;
      }
      if (node instanceof win.Text) {
        return node;
      }
      if (!node.firstChild) {
        leaving = true;
      } else {
        node = node.firstChild;
      }
    }
  }
  var TextScanner = /* @__PURE__ */ function() {
    function TextScanner2(win, node) {
      this.win_ = win;
      this.node_ = node;
      this.textIdx_ = -1;
      this.child_ = null;
      if (node instanceof win.Text) {
        this.textIdx_ = 0;
      } else if (node instanceof win.Element) {
        var _computedStyle = computedStyle(win, node), display = _computedStyle.display;
        if (display == "none") {
          return;
        }
        var child = node.firstChild;
        if (child != null) {
          this.child_ = new TextScanner2(win, child);
        }
      }
    }
    var _proto3 = TextScanner2.prototype;
    _proto3.next = function next() {
      if (this.textIdx_ >= 0) {
        return this.nextTextPos_();
      }
      while (this.child_ != null) {
        var pos = this.child_.next();
        if (pos != null) {
          return pos;
        }
        var sibling = this.child_.node_.nextSibling;
        this.child_ = sibling != null ? new TextScanner2(this.win_, sibling) : null;
      }
      return null;
    };
    _proto3.nextTextPos_ = function nextTextPos_() {
      var text = this.node_.wholeText;
      if (this.textIdx_ < text.length) {
        var idx = this.textIdx_;
        this.textIdx_++;
        return {
          node: this.node_,
          offset: idx
        };
      }
      return null;
    };
    return TextScanner2;
  }();

  // extensions/amp-viewer-integration/0.1/highlight-handler.js
  var HIGHLIGHT_DISMISS = "highlightDismiss";
  var HIGHLIGHT_STATE = "highlightState";
  var PARAM_OLD_TOP_DISCREPANCY = "od";
  var PARAM_NEW_TOP_DISCREPANCY = "nd";
  var HIGHLIGHT_PARAM_LENGTH_LIMIT = 100 << 10;
  var NUM_SENTENCES_LIMIT = 15;
  var NUM_ALL_CHARS_LIMIT = 1500;
  var SCROLL_ANIMATION_HEIGHT = 500;
  var PAGE_TOP_MARGIN = 80;
  var TEXT_FRAGMENT_PREFIX = ":~:";
  function getHighlightParam(ampdoc2) {
    var param = parseQueryString(ampdoc2.win.location.hash)["highlight"];
    if (!param || param.length > HIGHLIGHT_PARAM_LENGTH_LIMIT) {
      return null;
    }
    var highlight = parseJson(param);
    var sens = highlight["s"];
    if (!(sens instanceof Array) || sens.length > NUM_SENTENCES_LIMIT) {
      return null;
    }
    var sum = 0;
    for (var i = 0; i < sens.length; i++) {
      var sen = sens[i];
      if (typeof sen != "string" || !sen) {
        return null;
      }
      sum += sen.length;
      if (sum > NUM_ALL_CHARS_LIMIT) {
        return null;
      }
    }
    var skipRendering = false;
    if (highlight["n"]) {
      skipRendering = true;
    }
    var skipScrollAnimation = false;
    if (highlight["na"]) {
      skipScrollAnimation = true;
    }
    return {
      sentences: sens,
      skipScrollAnimation: skipScrollAnimation,
      skipRendering: skipRendering
    };
  }
  var HighlightHandler = /* @__PURE__ */ function() {
    function HighlightHandler2(ampdoc2, highlightInfo) {
      var _this = this;
      this.ampdoc_ = ampdoc2;
      this.viewer_ = Services.viewerForDoc(ampdoc2);
      this.viewport_ = Services.viewportForDoc(this.ampdoc_);
      this.highlightedNodes_ = null;
      var platform = Services.platformFor(this.ampdoc_.win);
      if ("fragmentDirective" in document && platform.isChrome() && platform.getMajorVersion() >= 93) {
        ampdoc2.whenFirstVisible().then(function() {
          return _this.highlightUsingTextFragments_(highlightInfo);
        });
      } else {
        whenDocumentReady(ampdoc2.win.document).then(function() {
          _this.initHighlight_(highlightInfo);
        });
      }
    }
    var _proto = HighlightHandler2.prototype;
    _proto.highlightUsingTextFragments_ = function highlightUsingTextFragments_(highlightInfo) {
      var sentences = highlightInfo.sentences;
      if (!(sentences != null && sentences.length)) {
        return;
      }
      var fragment = sentences.map(function(text) {
        return "text=" + encodeURIComponent(text);
      }).join("&");
      this.updateUrlWithTextFragment_(fragment);
    };
    _proto.updateUrlWithTextFragment_ = function updateUrlWithTextFragment_(fragment) {
      var hash = this.ampdoc_.win.location.hash;
      if (hash) {
        this.ampdoc_.win.location.replace(hash + TEXT_FRAGMENT_PREFIX + fragment);
      } else {
        this.ampdoc_.win.location.replace("#" + TEXT_FRAGMENT_PREFIX + fragment);
      }
    };
    _proto.sendHighlightState_ = function sendHighlightState_(state, opt_params) {
      var params = dict({
        "state": state
      });
      for (var key in opt_params) {
        params[key] = opt_params[key];
      }
      this.viewer_.sendMessage(HIGHLIGHT_STATE, params);
    };
    _proto.findHighlightedNodes_ = function findHighlightedNodes_(highlightInfo) {
      var win = this.ampdoc_.win;
      var sens = findSentences(win, this.ampdoc_.getBody(), highlightInfo.sentences);
      if (!sens) {
        return;
      }
      var nodes = markTextRangeList(win, sens);
      if (!nodes || nodes.length == 0) {
        return;
      }
      this.highlightedNodes_ = nodes;
    };
    _proto.onVisibleOnce = function onVisibleOnce(handler) {
      var _this2 = this;
      handler = once(handler);
      this.ampdoc_.onVisibilityChanged(function() {
        if (_this2.ampdoc_.getVisibilityState() != "visible") {
          return;
        }
        handler();
      });
    };
    _proto.initHighlight_ = function initHighlight_(highlightInfo) {
      var _this3 = this;
      if (this.ampdoc_.win.document.querySelector('script[id="amp-access"]')) {
        this.sendHighlightState_("has_amp_access");
        return;
      }
      this.findHighlightedNodes_(highlightInfo);
      if (!this.highlightedNodes_) {
        this.sendHighlightState_("not_found");
        return;
      }
      var scrollTop = this.calcTopToCenterHighlightedNodes_();
      this.sendHighlightState_("found", dict({
        "scroll": scrollTop
      }));
      if (highlightInfo.skipRendering) {
        return;
      }
      for (var i = 0; i < this.highlightedNodes_.length; i++) {
        var n = this.highlightedNodes_[i];
        setStyles(n, {
          backgroundColor: "#fcff00",
          color: "#000"
        });
      }
      var visibility = this.ampdoc_.getVisibilityState();
      if (!highlightInfo.skipScrollAnimation) {
        if (visibility == "visible") {
          this.animateScrollToTop_(scrollTop);
        } else {
          this.scrollToAnimationStart_(scrollTop);
          this.onVisibleOnce(function() {
            _this3.animateScrollToTop_(_this3.calcTopToCenterHighlightedNodes_());
          });
        }
      } else {
        if (visibility == "visible") {
          this.scrollToTopWitoutAnimation_(scrollTop);
        } else {
          this.viewport_.setScrollTop(scrollTop);
          this.onVisibleOnce(function() {
            _this3.scrollToTopWitoutAnimation_(_this3.calcTopToCenterHighlightedNodes_());
          });
        }
      }
      listenOnce(this.ampdoc_.getBody(), "click", this.dismissHighlight_.bind(this));
    };
    _proto.calcTopToCenterHighlightedNodes_ = function calcTopToCenterHighlightedNodes_() {
      var nodes = this.highlightedNodes_;
      if (!nodes) {
        return 0;
      }
      var viewport = this.viewport_;
      var minTop = Number.MAX_VALUE;
      var maxBottom = 0;
      var paddingTop = viewport.getPaddingTop();
      for (var i = 0; i < nodes.length; i++) {
        var _moveLayoutRect = moveLayoutRect(viewport.getLayoutRect(nodes[i]), 0, -paddingTop), bottom = _moveLayoutRect.bottom, top = _moveLayoutRect.top;
        minTop = Math.min(minTop, top);
        maxBottom = Math.max(maxBottom, bottom);
      }
      if (minTop >= maxBottom) {
        return 0;
      }
      var height = viewport.getHeight() - paddingTop;
      var pos = (maxBottom + minTop - height) / 2;
      if (pos > minTop - PAGE_TOP_MARGIN) {
        pos = minTop - PAGE_TOP_MARGIN;
      }
      return pos > 0 ? pos : 0;
    };
    _proto.scrollToTopWitoutAnimation_ = function scrollToTopWitoutAnimation_(top) {
      this.sendHighlightState_("auto_scroll");
      this.viewport_.setScrollTop(top);
      this.sendHighlightState_("shown");
    };
    _proto.scrollToAnimationStart_ = function scrollToAnimationStart_(top) {
      var start = Math.max(0, top - SCROLL_ANIMATION_HEIGHT);
      this.viewport_.setScrollTop(start);
    };
    _proto.mayAdjustTop_ = function mayAdjustTop_(oldTop) {
      var newTop = this.calcTopToCenterHighlightedNodes_();
      var current = this.viewport_.getScrollTop();
      if (current == newTop && current == oldTop) {
        return null;
      }
      var shownParam = dict();
      if (current != newTop) {
        this.viewport_.setScrollTop(newTop);
        shownParam[PARAM_NEW_TOP_DISCREPANCY] = current - newTop;
      }
      if (current != oldTop) {
        shownParam[PARAM_OLD_TOP_DISCREPANCY] = current - oldTop;
      }
      return shownParam;
    };
    _proto.animateScrollToTop_ = function animateScrollToTop_(top) {
      var _this4 = this;
      this.scrollToAnimationStart_(top);
      var sentinel = this.ampdoc_.win.document.createElement("div");
      setInitialDisplay(sentinel, "block");
      setStyles(sentinel, {
        "position": "absolute",
        "top": Math.floor(top) + "px",
        "height": "1px",
        "left": "0",
        "width": "1px",
        "pointer-events": "none"
      });
      var body = this.ampdoc_.getBody();
      body.appendChild(sentinel);
      this.sendHighlightState_("auto_scroll");
      this.viewport_.animateScrollIntoView(sentinel).then(function() {
        body.removeChild(sentinel);
        _this4.sendHighlightState_("shown", _this4.mayAdjustTop_(top));
      });
    };
    _proto.setupMessaging = function setupMessaging(messaging) {
      messaging.registerHandler(HIGHLIGHT_DISMISS, this.dismissHighlight_.bind(this));
    };
    _proto.dismissHighlight_ = function dismissHighlight_() {
      if (!this.highlightedNodes_) {
        return;
      }
      for (var i = 0; i < this.highlightedNodes_.length; i++) {
        resetStyles(this.highlightedNodes_[i], ["backgroundColor", "color"]);
      }
    };
    return HighlightHandler2;
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

  // extensions/amp-viewer-integration/0.1/keyboard-handler.js
  var eventProperties = [
    "key",
    "code",
    "location",
    "ctrlKey",
    "shiftKey",
    "altKey",
    "metaKey",
    "repeat",
    "isComposing",
    "charCode",
    "keyCode",
    "which"
  ];
  var KeyboardHandler = /* @__PURE__ */ function() {
    function KeyboardHandler2(win, messaging) {
      this.win = win;
      this.messaging_ = messaging;
      this.listenForKeyboardEvents_();
    }
    var _proto = KeyboardHandler2.prototype;
    _proto.listenForKeyboardEvents_ = function listenForKeyboardEvents_() {
      var handleEvent = this.handleEvent_.bind(this);
      listen(this.win, "keydown", handleEvent);
      listen(this.win, "keypress", handleEvent);
      listen(this.win, "keyup", handleEvent);
    };
    _proto.handleEvent_ = function handleEvent_(e) {
      if (isHandledByEventTarget(e)) {
        return;
      }
      this.forwardEventToViewer_(e);
    };
    _proto.forwardEventToViewer_ = function forwardEventToViewer_(e) {
      this.messaging_.sendRequest(e.type, getKeyboardEventInit(e), false);
    };
    return KeyboardHandler2;
  }();
  function isHandledByEventTarget(e) {
    if (e.defaultPrevented) {
      return true;
    }
    if (e.key == Keys_Enum.ESCAPE) {
      return false;
    }
    switch (e.target.nodeName) {
      case "INPUT":
        return e.target.type != "checkbox" || e.key == Keys_Enum.SPACE;
      case "TEXTAREA":
      case "BUTTON":
      case "SELECT":
      case "OPTION":
        return true;
    }
    return e.target.hasAttribute && e.target.hasAttribute("contenteditable");
  }
  function getKeyboardEventInit(e) {
    var copiedEvent = dict();
    eventProperties.forEach(function(eventProperty) {
      if (e[eventProperty] !== void 0) {
        copiedEvent[eventProperty] = e[eventProperty];
      }
    });
    return copiedEvent;
  }

  // extensions/amp-viewer-integration/0.1/messaging/messaging.js
  var TAG2 = "amp-viewer-messaging";
  var CHANNEL_OPEN_MSG = "channelOpen";
  var HANDSHAKE_POLL_MSG = "handshake-poll";
  var APP = "__AMPHTML__";
  var MessageType_Enum = {
    REQUEST: "q",
    RESPONSE: "s"
  };
  function parseMessage(message) {
    if (typeof message != "string") {
      return message;
    }
    if (message.charAt(0) != "{") {
      return null;
    }
    try {
      return JSON.parse(message);
    } catch (e) {
      return null;
    }
  }
  var WindowPortEmulator = /* @__PURE__ */ function() {
    function WindowPortEmulator2(win, origin, target) {
      this.win_ = win;
      this.origin_ = origin;
      this.target_ = target;
    }
    var _proto = WindowPortEmulator2.prototype;
    _proto.addEventListener = function addEventListener(eventType, handler) {
      var _this = this;
      this.win_.addEventListener("message", function(event) {
        if (event.origin == _this.origin_ && event.source == _this.target_) {
          handler(event);
        }
      });
    };
    _proto.postMessage = function postMessage(data) {
      var targetOrigin = this.origin_ === "null" ? "*" : this.origin_;
      this.target_.postMessage(data, targetOrigin);
    };
    _proto.start = function start() {
    };
    return WindowPortEmulator2;
  }();
  var Messaging = /* @__PURE__ */ function() {
    Messaging2.initiateHandshakeWithDocument = function initiateHandshakeWithDocument(target, opt_token) {
      return new Promise(function(resolve) {
        var intervalRef = setInterval(function() {
          var channel = new MessageChannel();
          var pollMessage = {
            app: APP,
            name: HANDSHAKE_POLL_MSG
          };
          target.postMessage(pollMessage, "*", [channel.port2]);
          var port = channel.port1;
          var listener = function listener2(event) {
            var message = parseMessage(event.data);
            if (!message) {
              return;
            }
            if (message.app === APP && message.name === CHANNEL_OPEN_MSG) {
              clearInterval(intervalRef);
              port.removeEventListener("message", listener2);
              var messaging = new Messaging2(null, port, false, opt_token, true);
              messaging.sendResponse_(message.requestid, CHANNEL_OPEN_MSG, null);
              resolve(messaging);
            }
          };
          port.addEventListener("message", listener);
          port.start();
        }, 1e3);
      });
    };
    Messaging2.waitForHandshakeFromDocument = function waitForHandshakeFromDocument(source, target, origin, opt_token, opt_cdnProxyRegex) {
      return new Promise(function(resolve) {
        var listener = function listener2(event) {
          var message = parseMessage(event.data);
          if (!message) {
            return;
          }
          if ((event.origin == origin || opt_cdnProxyRegex && opt_cdnProxyRegex.test(event.origin)) && (!event.source || event.source == target) && message.app === APP && message.name === CHANNEL_OPEN_MSG) {
            source.removeEventListener("message", listener2);
            var port = new WindowPortEmulator(source, event.origin, target);
            var messaging = new Messaging2(null, port, false, opt_token, true);
            messaging.sendResponse_(message.requestid, CHANNEL_OPEN_MSG, null);
            resolve(messaging);
          }
        };
        source.addEventListener("message", listener);
      });
    };
    function Messaging2(win, port, opt_isWebview, opt_token, opt_verifyToken) {
      this.win_ = win;
      this.port_ = port;
      this.isWebview_ = !!opt_isWebview;
      this.token_ = opt_token || null;
      this.verifyToken_ = !!opt_verifyToken;
      this.requestIdCounter_ = 0;
      this.waitingForResponse_ = {};
      this.messageHandlers_ = {};
      this.defaultHandler_ = null;
      this.port_.addEventListener("message", this.handleMessage_.bind(this));
      this.port_.start();
    }
    var _proto2 = Messaging2.prototype;
    _proto2.registerHandler = function registerHandler(messageName, requestHandler) {
      this.messageHandlers_[messageName] = requestHandler;
    };
    _proto2.unregisterHandler = function unregisterHandler(messageName) {
      delete this.messageHandlers_[messageName];
    };
    _proto2.setDefaultHandler = function setDefaultHandler(requestHandler) {
      this.defaultHandler_ = requestHandler;
    };
    _proto2.handleMessage_ = function handleMessage_(event) {
      var message = parseMessage(event.data);
      if (!message || message.app !== APP) {
        return;
      }
      if (this.token_ && this.verifyToken_ && message.messagingToken !== this.token_) {
        this.logError_(TAG2 + ": handleMessage_ error: ", "invalid token");
        return;
      }
      if (message.type === MessageType_Enum.REQUEST) {
        this.handleRequest_(message);
      } else if (message.type === MessageType_Enum.RESPONSE) {
        this.handleResponse_(message);
      }
    };
    _proto2.sendRequest = function sendRequest(messageName, messageData, awaitResponse) {
      var _this2 = this;
      var requestId = ++this.requestIdCounter_;
      var promise = void 0;
      if (awaitResponse) {
        promise = new Promise(function(resolve, reject) {
          _this2.waitingForResponse_[requestId] = {
            resolve: resolve,
            reject: reject
          };
        });
      }
      this.sendMessage_({
        app: APP,
        requestid: requestId,
        type: MessageType_Enum.REQUEST,
        name: messageName,
        data: messageData,
        rsvp: awaitResponse
      });
      return promise;
    };
    _proto2.sendResponse_ = function sendResponse_(requestId, messageName, messageData) {
      this.sendMessage_({
        app: APP,
        requestid: requestId,
        type: MessageType_Enum.RESPONSE,
        name: messageName,
        data: messageData
      });
    };
    _proto2.sendResponseError_ = function sendResponseError_(requestId, messageName, reason) {
      var errString = this.errorToString_(reason);
      this.logError_(TAG2 + ": sendResponseError_, message name: " + messageName, errString);
      this.sendMessage_({
        app: APP,
        requestid: requestId,
        type: MessageType_Enum.RESPONSE,
        name: messageName,
        data: null,
        error: errString
      });
    };
    _proto2.sendMessage_ = function sendMessage_(message) {
      var finalMessage = Object.assign(message, {});
      if (this.token_ && !this.verifyToken_) {
        finalMessage.messagingToken = this.token_;
      }
      this.port_.postMessage(this.isWebview_ ? JSON.stringify(finalMessage) : finalMessage);
    };
    _proto2.handleRequest_ = function handleRequest_(message) {
      var _this3 = this;
      var handler = this.messageHandlers_[message.name];
      if (!handler) {
        handler = this.defaultHandler_;
      }
      if (!handler) {
        var error = new Error("Cannot handle request because no default handler is set!");
        error.args = message.name;
        throw error;
      }
      var promise = handler(message.name, message.data, !!message.rsvp);
      if (message.rsvp) {
        var requestId = message.requestid;
        if (!promise) {
          this.sendResponseError_(requestId, message.name, new Error("no response"));
          throw new Error("expected response but none given: " + message.name);
        }
        promise.then(function(data) {
          _this3.sendResponse_(requestId, message.name, data);
        }, function(reason) {
          _this3.sendResponseError_(requestId, message.name, reason);
        });
      }
    };
    _proto2.handleResponse_ = function handleResponse_(message) {
      var requestId = message.requestid;
      var pending = this.waitingForResponse_[requestId];
      if (pending) {
        delete this.waitingForResponse_[requestId];
        if (message.error) {
          this.logError_(TAG2 + ": handleResponse_ error: ", message.error);
          pending.reject(new Error("Request " + message.name + " failed: " + message.error));
        } else {
          pending.resolve(message.data);
        }
      }
    };
    _proto2.logError_ = function logError_(state, opt_data) {
      if (!this.win_) {
        return;
      }
      var stateStr = "amp-messaging-error-logger: " + state;
      var dataStr = " data: " + this.errorToString_(opt_data);
      stateStr += dataStr;
      this.win_["viewerState"] = stateStr;
    };
    _proto2.errorToString_ = function errorToString_(err) {
      return err ? err.message ? err.message : String(err) : "unknown error";
    };
    return Messaging2;
  }();

  // extensions/amp-viewer-integration/0.1/touch-handler.js
  var EVENT_PROPERTIES = ["altKey", "charCode", "ctrlKey", "detail", "eventPhase", "key", "layerX", "layerY", "metaKey", "pageX", "pageY", "returnValue", "shiftKey", "timeStamp", "type", "which"];
  var TOUCH_PROPERTIES = ["clientX", "clientY", "force", "identifier", "pageX", "pageY", "radiusX", "radiusY", "screenX", "screenY"];
  var SCROLL_LOCK = "scrollLock";
  var TouchHandler = /* @__PURE__ */ function() {
    function TouchHandler2(win, messaging) {
      this.win = win;
      this.messaging_ = messaging;
      this.scrollLocked_ = false;
      this.unlistenHandlers_ = [];
      messaging.registerHandler(SCROLL_LOCK, this.scrollLockHandler_.bind(this));
      this.listenForTouchEvents_();
    }
    var _proto = TouchHandler2.prototype;
    _proto.listenForTouchEvents_ = function listenForTouchEvents_() {
      var handleEvent = this.handleEvent_.bind(this);
      var doc = this.win.document;
      var options = {
        capture: false,
        passive: !this.scrollLocked_
      };
      this.unlistenHandlers_.push(listen(doc, "touchstart", handleEvent, options), listen(doc, "touchend", handleEvent, options), listen(doc, "touchmove", handleEvent, options));
    };
    _proto.unlisten_ = function unlisten_() {
      this.unlistenHandlers_.forEach(function(unlisten) {
        return unlisten();
      });
      this.unlistenHandlers_.length = 0;
    };
    _proto.handleEvent_ = function handleEvent_(e) {
      switch (e.type) {
        case "touchstart":
        case "touchend":
        case "touchmove":
          this.forwardEvent_(e);
          break;
        default:
          return;
      }
    };
    _proto.forwardEvent_ = function forwardEvent_(e) {
      if (e != null && e.shouldViewerCancelPropagation) {
        e.stopImmediatePropagation();
        return;
      }
      if (e && e.type) {
        var msg = this.copyTouchEvent_(e);
        this.messaging_.sendRequest(e.type, msg, false);
      }
      if (this.scrollLocked_ && e.cancelable) {
        e.preventDefault();
      }
    };
    _proto.copyTouchEvent_ = function copyTouchEvent_(e) {
      var copiedEvent = this.copyProperties_(e, EVENT_PROPERTIES);
      if (e.touches) {
        copiedEvent["touches"] = this.copyTouches_(e.touches);
      }
      if (e.changedTouches) {
        copiedEvent["changedTouches"] = this.copyTouches_(e.changedTouches);
      }
      return copiedEvent;
    };
    _proto.copyTouches_ = function copyTouches_(touchList) {
      var copiedTouches = [];
      for (var i = 0; i < touchList.length; i++) {
        copiedTouches.push(this.copyProperties_(touchList[i], TOUCH_PROPERTIES));
      }
      return copiedTouches;
    };
    _proto.copyProperties_ = function copyProperties_(o, properties) {
      var copy = dict();
      for (var i = 0; i < properties.length; i++) {
        var p = properties[i];
        if (o[p] !== void 0) {
          copy[p] = o[p];
        }
      }
      return copy;
    };
    _proto.scrollLockHandler_ = function scrollLockHandler_(type, payload, awaitResponse) {
      this.scrollLocked_ = !!payload;
      this.unlisten_();
      this.listenForTouchEvents_();
      return awaitResponse ? Promise.resolve({}) : void 0;
    };
    return TouchHandler2;
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
    userAssert(SERVING_TYPE_PREFIX.has(prefix), "Unknown path prefix in url %s", url.href);
    var domainOrHttpsSignal = path[2];
    var origin = domainOrHttpsSignal == "s" ? "https://" + decodeURIComponent(path[3]) : "http://" + decodeURIComponent(domainOrHttpsSignal);
    userAssert(origin.indexOf(".") > 0, "Expected a . in origin %s", origin);
    path.splice(1, domainOrHttpsSignal == "s" ? 3 : 2);
    return origin + path.join("/") + removeAmpJsParamsFromSearch(url.search) + (url.hash || "");
  }

  // extensions/amp-viewer-integration/0.1/amp-viewer-integration.js
  var TAG3 = "amp-viewer-integration";
  var APP2 = "__AMPHTML__";
  var RequestNames = {
    CHANNEL_OPEN: "channelOpen",
    UNLOADED: "unloaded"
  };
  var AmpViewerIntegration = /* @__PURE__ */ function() {
    function AmpViewerIntegration2(win) {
      this.win = win;
      this.isWebView_ = false;
      this.isHandShakePoll_ = false;
      this.highlightHandler_ = null;
    }
    var _proto = AmpViewerIntegration2.prototype;
    _proto.init = function init() {
      var _this = this;
      dev().fine(TAG3, "handshake init()");
      var ampdoc2 = getAmpdoc(this.win.document);
      var viewer = Services.viewerForDoc(ampdoc2);
      this.isWebView_ = viewer.getParam("webview") == "1";
      this.isHandShakePoll_ = viewer.hasCapability("handshakepoll");
      var messagingToken = viewer.getParam("messagingToken");
      var origin = viewer.getParam("origin") || "";
      if (!this.isWebView_ && !origin) {
        return resolvedPromise();
      }
      var viewport = Services.viewportForDoc(ampdoc2);
      viewport.createFixedLayer(FixedLayer);
      if (this.isWebView_ || this.isHandShakePoll_) {
        var source = isIframed(this.win) ? this.win.parent : null;
        return this.webviewPreHandshakePromise_(source, origin).then(function(receivedPort) {
          return _this.openChannelAndStart_(viewer, ampdoc2, origin, new Messaging(_this.win, receivedPort, _this.isWebView_, messagingToken));
        });
      }
      var highlightInfo = getHighlightParam(ampdoc2);
      if (highlightInfo) {
        this.highlightHandler_ = new HighlightHandler(ampdoc2, highlightInfo);
      }
      var port = new WindowPortEmulator(this.win, origin, this.win.parent);
      return this.openChannelAndStart_(viewer, ampdoc2, origin, new Messaging(this.win, port, this.isWebView_, messagingToken));
    };
    _proto.webviewPreHandshakePromise_ = function webviewPreHandshakePromise_(source, origin) {
      var _this2 = this;
      return new Promise(function(resolve) {
        var unlisten = listen(_this2.win, "message", function(e) {
          dev().fine(TAG3, "AMPDOC got a pre-handshake message:", e.type, getData(e));
          var data = parseMessage(getData(e));
          if (!data) {
            return;
          }
          if (e.origin === origin && e.source === source && data.app == APP2 && data.name == "handshake-poll") {
            if (_this2.isWebView_ && (!e.ports || !e.ports.length)) {
              throw new Error("Did not receive communication port from the Viewer!");
            }
            var port = e.ports && e.ports.length > 0 ? e.ports[0] : new WindowPortEmulator(_this2.win, origin, _this2.win.parent);
            resolve(port);
            unlisten();
          }
        });
      });
    };
    _proto.openChannelAndStart_ = function openChannelAndStart_(viewer, ampdoc2, origin, messaging) {
      var _this3 = this;
      dev().fine(TAG3, "Send a handshake request");
      var ampdocUrl = ampdoc2.getUrl();
      var srcUrl = getSourceUrl(ampdocUrl);
      return messaging.sendRequest(RequestNames.CHANNEL_OPEN, dict({
        "url": ampdocUrl,
        "sourceUrl": srcUrl
      }), true).then(function() {
        dev().fine(TAG3, "Channel has been opened!");
        _this3.setup_(messaging, viewer, origin);
      });
    };
    _proto.setup_ = function setup_(messaging, viewer, origin) {
      messaging.setDefaultHandler(function(type, payload, awaitResponse) {
        return viewer.receiveMessage(type, payload, awaitResponse);
      });
      viewer.setMessageDeliverer(messaging.sendRequest.bind(messaging), origin);
      listenOnce(this.win, "unload", this.handleUnload_.bind(this, messaging));
      if (viewer.hasCapability("swipe") || viewer.hasCapability("touch")) {
        this.initTouchHandler_(messaging);
      }
      if (viewer.hasCapability("keyboard")) {
        this.initKeyboardHandler_(messaging);
      }
      if (viewer.hasCapability("focus-rect")) {
        this.initFocusHandler_(messaging);
      }
      if (this.highlightHandler_ != null) {
        this.highlightHandler_.setupMessaging(messaging);
      }
    };
    _proto.handleUnload_ = function handleUnload_(messaging) {
      return messaging.sendRequest(RequestNames.UNLOADED, dict(), true);
    };
    _proto.initFocusHandler_ = function initFocusHandler_(messaging) {
      new FocusHandler(this.win, messaging);
    };
    _proto.initTouchHandler_ = function initTouchHandler_(messaging) {
      new TouchHandler(this.win, messaging);
    };
    _proto.initKeyboardHandler_ = function initKeyboardHandler_(messaging) {
      new KeyboardHandler(this.win, messaging);
    };
    return AmpViewerIntegration2;
  }();
  new AmpViewerIntegration(AMP.win).init();
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-viewer-integration-0.1.max.js.map
