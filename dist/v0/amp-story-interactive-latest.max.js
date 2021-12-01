(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-story-interactive",ev:"0.1",l:true,f:(function(AMP,_){
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

  // src/core/dom/query.js
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
  function addAttributesToElement(element, attributes) {
    for (var attr in attributes) {
      element.setAttribute(attr, attributes[attr]);
    }
    return element;
  }
  function iterateCursor(iterable, cb) {
    var length = iterable.length;
    for (var i = 0; i < length; i++) {
      cb(iterable[i], i);
    }
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

  // extensions/amp-story/1.0/amp-story-store-service.js
  var _stateComparisonFunct;
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

  // extensions/amp-story/1.0/story-analytics.js
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

  // src/core/math.js
  function clamp(val, min, max) {
    devAssert(min <= max, "Minimum value is greater than the maximum.");
    return Math.min(Math.max(val, min), max);
  }

  // build/amp-story-interactive-0.1.css.js
  var CSS2 = ".i-amphtml-story-interactive-container{--correct-color:#5bba74!important;--correct-color-shaded:#00600f!important;--incorrect-color:#f34e4e!important;--incorrect-color-shaded:#b71c1c!important;font-family:Poppins,sans-serif!important;background:var(--interactive-prompt-background)!important;border-radius:2em!important}.i-amphtml-story-interactive-prompt-container{display:-ms-flexbox!important;display:flex!important;justify-items:center!important;padding:1.25em!important;color:var(--interactive-prompt-text-color)!important}.i-amphtml-story-interactive-prompt{margin:0px!important;overflow:hidden!important;text-overflow:ellipsis!important;display:-webkit-box!important;-webkit-line-clamp:var(--i-amphtml-interactive-prompt-clamp)!important;-webkit-box-orient:vertical!important;visibility:visible!important;font-size:var(--i-amphtml-interactive-prompt-text-size)!important;line-height:var(--i-amphtml-interactive-prompt-line-height)!important;font-weight:700!important;text-align:var(--interactive-prompt-alignment)!important;width:100%!important}@keyframes i-amphtml-interactive-animation-flash-background{0%{opacity:.4}to{opacity:.2}}@keyframes i-amphtml-interactive-animation-flash-background-color{0%{background-color:var(--i-amphtml-interactive-theme-shading-flash)}to{background-color:var(--i-amphtml-interactive-theme-shading-base)}}@keyframes answer-choice-bounce{0%{transform:scale(0);visibility:hidden}21%{visibility:visible;transform:scale(.01);animation-timing-function:cubic-bezier(.3,.5,.7,1)}43%{transform:scale(1.203);animation-timing-function:ease-in-out}62%{transform:scale(0.956)}83%{transform:scale(1.008)}96%{transform:scale(1)}99%{transform:scale(.998)}to{transform:scale(1)}}.i-amphtml-story-interactive-container:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option{cursor:pointer!important;pointer-events:all}.i-amphtml-story-interactive-confetti-wrapper{position:absolute!important;top:50%!important;left:50%!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center;justify-content:center;z-index:1!important;transform:scale(0)!important;transition:transform .5s var(--i-amphtml-interactive-ease-out-curve),opacity .5s var(--i-amphtml-interactive-ease-out-curve)!important}.i-amphtml-story-interactive-confetti-wrapper.i-amphtml-story-interactive-confetti-wrapper-animate-in{transform:scale(1)!important}.i-amphtml-story-interactive-confetti-wrapper.i-amphtml-story-interactive-confetti-wrapper-animate-out{transform:scale(1.2)!important;opacity:0!important}.i-amphtml-story-interactive-confetti{position:absolute!important}.i-amphtml-story-interactive-active{--i-amphtml-interactive-landing-animation-delay:.5s;--i-amphtml-interactive-landing-animation-offset:.9;--i-amphtml-interactive-landing-animation-delay-offset-el1:var(--i-amphtml-interactive-landing-animation-delay);--i-amphtml-interactive-landing-animation-delay-offset-el2:calc(var(--i-amphtml-interactive-landing-animation-delay) + var(--i-amphtml-interactive-animation-time)*var(--i-amphtml-interactive-landing-animation-offset)*1);--i-amphtml-interactive-landing-animation-delay-offset-el3:calc(var(--i-amphtml-interactive-landing-animation-delay) + var(--i-amphtml-interactive-animation-time)*var(--i-amphtml-interactive-landing-animation-offset)*2);--i-amphtml-interactive-landing-animation-delay-offset-el4:calc(var(--i-amphtml-interactive-landing-animation-delay) + var(--i-amphtml-interactive-animation-time)*var(--i-amphtml-interactive-landing-animation-offset)*3)}@keyframes i-amphtml-interactive-animation-landing-animation-flash-background{30%{opacity:.4}}.i-amphtml-story-interactive-disclaimer-icon{width:1.75em!important;height:1.75em!important;position:absolute!important;right:0!important;top:0!important;padding:.25em!important;font-size:inherit!important;transform-origin:bottom right!important;background-color:#fff!important;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='12'%3E%3Cpath d='M2 0a1.357 1.357 0 0 0-.97.408 1.34 1.34 0 0 0-.38.977l.271 5.497c.009.278.127.542.328.736a1.083 1.083 0 0 0 1.502 0 1.07 1.07 0 0 0 .328-.736l.27-5.497a1.334 1.334 0 0 0-.38-.977A1.35 1.35 0 0 0 2 0zM2 9.3A1.35 1.35 0 1 0 2 12a1.35 1.35 0 0 0 0-2.7z'/%3E%3C/svg%3E\")!important;background-repeat:no-repeat!important;background-position:50%!important;background-size:0.25em!important;border:.25em solid var(--interactive-accent-color)!important;border-radius:50%!important;box-shadow:0 .2em .2em 0 var(--i-amphtml-story-interactive-disclaimer-black-transparent)!important;box-sizing:border-box!important;cursor:pointer!important;pointer-events:all!important;z-index:2!important;--i-amphtml-story-interactive-disclaimer-black-transparent:#00000040!important}.i-amphtml-story-interactive-disclaimer-icon[hide]{display:none!important}[dir=rtl] .i-amphtml-story-interactive-disclaimer-icon{left:0!important;right:auto!important}\n/*# sourceURL=/extensions/amp-story-interactive/0.1/amp-story-interactive.css*/";

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
  function assertAbsoluteHttpOrHttpsUrl(urlString) {
    userAssert(/^https?\:/i.test(urlString), 'URL must start with "http://" or "https://". Invalid value: %s', urlString);
    return parseUrlDeprecated(urlString).href;
  }
  function appendPathToUrl(url, path) {
    var pathname = url.pathname.replace(/\/?$/, "/") + path.replace(/^\//, "");
    return url.origin + pathname + url.search + url.hash;
  }

  // src/core/types/string/bytes.js
  function utf8Encode(string) {
    if (typeof TextEncoder !== "undefined") {
      return new TextEncoder("utf-8").encode(string);
    }
    return stringToBytes(unescape(encodeURIComponent(string)));
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
  var base64UrlEncodeSubs = {
    "+": "-",
    "/": "_",
    "=": "."
  };
  function base64UrlEncodeFromBytes(bytes) {
    var str = bytesToString(bytes);
    return btoa(str).replace(/[+/=]/g, function(ch) {
      return base64UrlEncodeSubs[ch];
    });
  }
  function base64UrlEncodeFromString(str) {
    var bytes = utf8Encode(str);
    return base64UrlEncodeFromBytes(bytes);
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
  function installCssTransformer(cssRoot, transformer) {
    cssRoot[TRANSFORMER_PROP] = transformer;
  }

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
    var b = rgb.b, g = rgb.g, r = rgb.r;
    var getLinearRGBValue = function getLinearRGBValue2(x) {
      x /= 255;
      return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
    };
    var linearR = getLinearRGBValue(r);
    var linearG = getLinearRGBValue(g);
    var linearB = getLinearRGBValue(b);
    var L = 0.2126 * linearR + 0.7152 * linearG + 0.0722 * linearB;
    return L > 0.179 ? "#000" : "#FFF";
  }
  var TEXT_BACKGROUND_COLOR_ATTRIBUTE_NAME = "data-text-background-color";
  var TEXT_BACKGROUND_COLOR_SELECTOR = "[" + TEXT_BACKGROUND_COLOR_ATTRIBUTE_NAME + "]";
  var maybeMakeProxyUrl = function maybeMakeProxyUrl2(url, ampDoc) {
    var urlService = Services.urlForDoc(ampDoc);
    var loc = ampDoc.win.location;
    if (!urlService.isProxyOrigin(loc.origin) || urlService.isProxyOrigin(url)) {
      return url;
    }
    var resolvedRelativeUrl = urlService.resolveRelativeUrl(url, urlService.getSourceOrigin(loc.href));
    return loc.origin + "/i/s/" + resolvedRelativeUrl.replace(/https?:\/\//, "");
  };

  // build/amp-story-interactive-disclaimer-0.1.css.js
  var CSS3 = ".i-amphtml-story-interactive-disclaimer-dialog{overflow:hidden!important;padding:1em!important;text-align:initial!important;box-sizing:border-box!important;font-size:calc(var(--story-page-vmin)*3)!important;max-width:25em!important;background:#fff!important;border-radius:1em!important;box-shadow:0px .2em .2em 0px var(--i-amphtml-story-interactive-disclaimer-black-transparent)!important;--i-amphtml-story-interactive-disclaimer-black-transparent:#00000040!important;--i-amphtml-story-interactive-disclaimer-blue:#005af0!important}.i-amphtml-story-interactive-disclaimer-url{color:#5f6368!important;padding-inline-end:2em!important;text-overflow:ellipsis!important;white-space:nowrap!important;overflow:hidden!important}.i-amphtml-story-interactive-disclaimer-link{color:var(--i-amphtml-story-interactive-disclaimer-blue)!important;font-weight:700!important;text-decoration:none!important;padding-top:0.2em!important}.i-amphtml-story-interactive-disclaimer-close{position:absolute!important;bottom:0!important;right:0!important;cursor:pointer!important;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%239AA0A6'%3E%3Crect x='.788' y='1.833' width='1.479' height='13.264' rx='.739' transform='rotate(-45 .788 1.833)'/%3E%3Crect x='10.167' y='.788' width='1.479' height='13.264' rx='.739' transform='rotate(45 10.167 .788)'/%3E%3C/svg%3E\")!important;width:3em!important;height:3em!important;background-size:1em!important;background-repeat:no-repeat!important;background-position:50%!important;border:none!important;font-size:inherit!important}[dir=rtl] .i-amphtml-story-interactive-disclaimer-close{left:0!important;right:auto!important}\n/*# sourceURL=/extensions/amp-story-interactive/0.1/amp-story-interactive-disclaimer.css*/";

  // extensions/amp-story-interactive/0.1/interactive-disclaimer.js
  var _templateObject;
  var _templateObject2;
  var _templateObject3;
  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var DisclaimerBackendsList = JSON.parse('{"webstoriesinteractivity-beta.web.app":{"learnMoreUrl":"https://amp.dev/stories","entityName":"AMP Disclaimer Testing Site"}}');
  function buildDisclaimerLayout(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(['<div\n    class="i-amphtml-story-interactive-disclaimer-dialog"\n    role="alertdialog"\n  >\n    <div\n      class="i-amphtml-story-interactive-disclaimer-description"\n      ref="descriptionEl"\n    >\n      <span class="i-amphtml-story-interactive-disclaimer-note" ref="noteEl"\n        >Your response will be sent to\n      </span>\n      <span\n        class="i-amphtml-story-interactive-disclaimer-entity"\n        ref="entityEl"\n      ></span>\n      <div class="i-amphtml-story-interactive-disclaimer-url" ref="urlEl"></div>\n    </div>\n    <a\n      target="_blank"\n      class="i-amphtml-story-interactive-disclaimer-link"\n      ref="linkEl"\n      >Learn more</a\n    >\n    <button\n      class="i-amphtml-story-interactive-disclaimer-close"\n      aria-label="Close disclaimer"\n    ></button>\n  </div>'])));
  }
  function buildInteractiveDisclaimer(interactive, attrs) {
    if (attrs === void 0) {
      attrs = {};
    }
    var disclaimer = buildDisclaimerLayout(interactive.element);
    addAttributesToElement(disclaimer, attrs);
    var _htmlRefs = htmlRefs(disclaimer), descriptionEl = _htmlRefs.descriptionEl, entityEl = _htmlRefs.entityEl, linkEl = _htmlRefs.linkEl, noteEl = _htmlRefs.noteEl, urlEl = _htmlRefs.urlEl;
    var backendUrl = interactive.element.getAttribute("endpoint").replace("https://", "");
    var backendSpecs = getBackendSpecs(backendUrl, DisclaimerBackendsList);
    if (backendSpecs) {
      entityEl.textContent = backendSpecs[1].entityName;
      urlEl.textContent = backendSpecs[0];
      backendSpecs[1].learnMoreUrl ? linkEl.href = backendSpecs[1].learnMoreUrl : linkEl.remove();
    } else {
      entityEl.remove();
      urlEl.textContent = backendUrl;
      linkEl.remove();
    }
    noteEl.textContent = interactive.localizationService.getLocalizedString(LocalizedStringId_Enum.AMP_STORY_INTERACTIVE_DISCLAIMER_NOTE);
    var disclaimerDescriptionId = "i-amphtml-story-disclaimer-" + interactive.element.id + "-description";
    descriptionEl.id = disclaimerDescriptionId;
    disclaimer.setAttribute("aria-describedby", disclaimerDescriptionId);
    var disclaimerContainer = htmlFor(interactive.element)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(['<div class="i-amphtml-story-interactive-disclaimer-dialog-container"></div>'])));
    createShadowRootWithStyle(disclaimerContainer, disclaimer, CSS3);
    return disclaimerContainer;
  }
  function buildInteractiveDisclaimerIcon(interactive) {
    var html2 = htmlFor(interactive.element);
    return html2(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(['<button\n    class="i-amphtml-story-interactive-disclaimer-icon"\n    aria-label="Open disclaimer"\n  ></button>'])));
  }
  function getBackendSpecs(backendUrl, backendsList) {
    return Object.entries(backendsList).find(function(element) {
      return element[0] === backendUrl.substring(0, element[0].length);
    });
  }

  // extensions/amp-story-interactive/0.1/utils.js
  var _templateObject4;
  function _taggedTemplateLiteralLoose2(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var deduplicatedIds = false;
  var deduplicateInteractiveIds = function deduplicateInteractiveIds2(doc) {
    if (deduplicatedIds) {
      return;
    }
    deduplicatedIds = true;
    var interactiveEls = doc.querySelectorAll("amp-story-interactive-binary-poll, amp-story-interactive-poll, amp-story-interactive-quiz");
    var idsMap = map();
    for (var i = 0; i < interactiveEls.length; i++) {
      var currId = interactiveEls[i].id || "interactive-id";
      if (idsMap[currId] === void 0) {
        idsMap[currId] = 0;
      } else {
        user().error("AMP-STORY-INTERACTIVE", "Duplicate interactive ID " + currId);
        var newId = currId + "__" + ++idsMap[currId];
        interactiveEls[i].id = newId;
      }
    }
  };
  var buildImgTemplate = function buildImgTemplate2(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose2(['\n    <div\n      class="i-amphtml-story-interactive-img-container i-amphtml-story-interactive-container"\n    >\n      <div class="i-amphtml-story-interactive-prompt-container"></div>\n      <div class="i-amphtml-story-interactive-img-option-container"></div>\n    </div>\n  '])));
  };

  // extensions/amp-story-interactive/0.1/interactive-confetti.js
  var _templateObject5;
  var _templateObject22;
  function _taggedTemplateLiteralLoose3(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var buildConfettiWrapperTemplate = function buildConfettiWrapperTemplate2(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose3(['\n    <div\n      class="i-amphtml-story-interactive-confetti-wrapper"\n      aria-hidden="true"\n    ></div>\n  '])));
  };
  var buildconfettiTemplate = function buildconfettiTemplate2(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject22 || (_templateObject22 = _taggedTemplateLiteralLoose3([' <div class="i-amphtml-story-interactive-confetti"></div> '])));
  };
  function emojiConfetti(rootEl, win, confettiEmoji) {
    var confettiCount = 5;
    var angleSlice = Math.PI * 2 / confettiCount;
    var angleRandomness = angleSlice * 0.2;
    var fontSizeRandomRange = [30, 50];
    var rotationRandomness = 20;
    var additionalDistance = 5;
    var animationTime = 300;
    var animationOutDelay = 1e3;
    var rootElRect = rootEl.getBoundingClientRect();
    var timer = Services.timerFor(win);
    var confettiWrapper = buildConfettiWrapperTemplate(rootEl);
    rootEl.appendChild(confettiWrapper);
    timer.delay(function() {
      for (var i = 0; i < confettiCount; i++) {
        var confetti = buildconfettiTemplate(rootEl);
        confettiWrapper.appendChild(confetti);
        confetti.textContent = confettiEmoji;
        var fontSize = randomInRange(fontSizeRandomRange[0], fontSizeRandomRange[1]) + "px";
        var angle = angleSlice * i + randomInRange(-angleRandomness, angleRandomness);
        var x = Math.sin(angle) * (rootElRect.width / 2 + additionalDistance);
        var y = Math.cos(angle) * (rootElRect.height / 2 + additionalDistance);
        var rotation = randomInRange(-rotationRandomness, rotationRandomness);
        setStyles(confetti, {
          fontSize: fontSize,
          transform: "translate(" + x + "px, " + y + "px) rotate(" + rotation + "deg)"
        });
      }
      confettiWrapper.classList.add("i-amphtml-story-interactive-confetti-wrapper-animate-in");
      timer.delay(function() {
        confettiWrapper.classList.add("i-amphtml-story-interactive-confetti-wrapper-animate-out");
        timer.delay(function() {
          return rootEl.removeChild(confettiWrapper);
        }, animationTime);
      }, animationOutDelay);
    }, animationTime);
  }
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
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

  // extensions/amp-story-interactive/0.1/amp-story-interactive-abstract.js
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf10(o2, p2) {
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
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf10(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  var TAG2 = "amp-story-interactive";
  var MID_SELECTION_CLASS = "i-amphtml-story-interactive-mid-selection";
  var POST_SELECTION_CLASS = "i-amphtml-story-interactive-post-selection";
  var InteractiveType = {
    QUIZ: 0,
    POLL: 1,
    RESULTS: 2,
    SLIDER: 3
  };
  var ENDPOINT_INVALID_ERROR = "The publisher has specified an invalid datastore endpoint";
  var INTERACTIVE_ACTIVE_CLASS = "i-amphtml-story-interactive-active";
  var fontsToLoad = [{
    family: "Poppins",
    weight: "400",
    src: "url(https://fonts.gstatic.com/s/poppins/v9/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2) format('woff2')"
  }, {
    family: "Poppins",
    weight: "700",
    src: "url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEk.woff2) format('woff2')"
  }];
  var AmpStoryInteractive = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpStoryInteractive2, _AMP$BaseElement);
    var _super = _createSuper(AmpStoryInteractive2);
    function AmpStoryInteractive2(element, type, bounds) {
      var _this;
      if (bounds === void 0) {
        bounds = [2, 4];
      }
      _this = _super.call(this, element);
      _this.interactiveType_ = type;
      _this.analyticsService_ = null;
      _this.backendDataPromise_ = null;
      _this.clientIdPromise_ = null;
      _this.disclaimerEl_ = null;
      _this.disclaimerIcon_ = null;
      _this.hasUserSelection_ = false;
      _this.optionBounds_ = bounds;
      _this.optionElements_ = null;
      _this.options_ = null;
      _this.optionsData_ = null;
      _this.pageEl_ = null;
      _this.rootEl_ = null;
      _this.localizationService = null;
      _this.requestService_ = null;
      _this.storeService_ = null;
      _this.urlService_ = null;
      _this.variableService_ = null;
      return _this;
    }
    var _proto = AmpStoryInteractive2.prototype;
    _proto.getRootElement = function getRootElement() {
      return this.rootEl_;
    };
    _proto.getOptionElements = function getOptionElements() {
      if (!this.optionElements_) {
        this.optionElements_ = toArray(this.rootEl_.querySelectorAll(".i-amphtml-story-interactive-option"));
      }
      return this.optionElements_;
    };
    _proto.getInteractiveId_ = function getInteractiveId_() {
      if (!AmpStoryInteractive2.canonicalUrl64) {
        deduplicateInteractiveIds(this.win.document);
        AmpStoryInteractive2.canonicalUrl64 = base64UrlEncodeFromString(Services.documentInfoForDoc(this.element).canonicalUrl);
      }
      return AmpStoryInteractive2.canonicalUrl64 + "+" + this.element.id;
    };
    _proto.getPageEl = function getPageEl() {
      if (this.pageEl_ == null) {
        this.pageEl_ = closest(dev().assertElement(this.element), function(el) {
          return el.tagName.toLowerCase() === "amp-story-page";
        });
      }
      return this.pageEl_;
    };
    _proto.buildCallback = function buildCallback(concreteCSS) {
      var _this2 = this;
      if (concreteCSS === void 0) {
        concreteCSS = "";
      }
      this.loadFonts_();
      this.options_ = this.parseOptions_();
      this.element.classList.add("i-amphtml-story-interactive-component");
      this.adjustGridLayer_();
      devAssert2(this.element.children.length == 0, "Too many children");
      this.urlService_ = Services.urlForDoc(this.element);
      return Promise.all([Services.storyVariableServiceForOrNull(this.win).then(function(service) {
        _this2.variableService_ = service;
      }), Services.storyStoreServiceForOrNull(this.win).then(function(service) {
        _this2.storeService_ = service;
        _this2.updateStoryStoreState_(null);
      }), Services.storyRequestServiceForOrNull(this.win).then(function(service) {
        _this2.requestService_ = service;
      }), Services.storyAnalyticsServiceForOrNull(this.win).then(function(service) {
        _this2.analyticsService_ = service;
      }), Services.localizationServiceForOrNull(this.element).then(function(service) {
        _this2.localizationService = service;
      })]).then(function() {
        _this2.rootEl_ = _this2.buildComponent();
        _this2.rootEl_.classList.add("i-amphtml-story-interactive-container");
        if (isExperimentOn(_this2.win, "amp-story-interactive-disclaimer") && _this2.element.hasAttribute("endpoint")) {
          _this2.disclaimerIcon_ = buildInteractiveDisclaimerIcon(_this2);
          _this2.rootEl_.prepend(_this2.disclaimerIcon_);
        }
        createShadowRootWithStyle(_this2.element, dev().assertElement(_this2.rootEl_), CSS2 + concreteCSS);
        return resolvedPromise();
      });
    };
    _proto.loadFonts_ = function loadFonts_() {
      var _this3 = this;
      if (!AmpStoryInteractive2.loadedFonts && this.win.document.fonts && FontFace) {
        fontsToLoad.forEach(function(_ref) {
          var family = _ref.family, src = _ref.src, _ref$style = _ref.style, style = _ref$style === void 0 ? "normal" : _ref$style, weight = _ref.weight;
          return new FontFace(family, src, {
            weight: weight,
            style: style
          }).load().then(function(font) {
            return _this3.win.document.fonts.add(font);
          });
        });
      }
      AmpStoryInteractive2.loadedFonts = true;
    };
    _proto.parseOptions_ = function parseOptions_() {
      var _this4 = this;
      var options = [];
      toArray(this.element.attributes).forEach(function(attr) {
        if (attr.name.match(/^option-\d+(-\w+)+$/)) {
          var splitParts = attr.name.split("-");
          var optionNumber = parseInt(splitParts[1], 10);
          while (options.length < optionNumber) {
            options.push({
              "optionIndex": options.length
            });
          }
          var key = splitParts.slice(2).join("");
          if (key === "image") {
            options[optionNumber - 1][key] = maybeMakeProxyUrl(attr.value, _this4.getAmpDoc());
          } else {
            options[optionNumber - 1][key] = attr.value;
          }
        }
      });
      if (options.length >= this.optionBounds_[0] && options.length <= this.optionBounds_[1]) {
        return options;
      }
      devAssert2(options.length >= this.optionBounds_[0] && options.length <= this.optionBounds_[1], "Improper number of options. Expected " + this.optionBounds_[0] + " <= options <= " + this.optionBounds_[1] + " but got " + options.length + ".");
      dev().error(TAG2, "Improper number of options. Expected " + this.optionBounds_[0] + " <= options <= " + this.optionBounds_[1] + " but got " + options.length + ".");
    };
    _proto.attachPrompt_ = function attachPrompt_(root) {
      var promptContainer = root.querySelector(".i-amphtml-story-interactive-prompt-container");
      if (!this.element.hasAttribute("prompt-text")) {
        this.rootEl_.removeChild(promptContainer);
      } else {
        var prompt = document.createElement("p");
        prompt.textContent = this.element.getAttribute("prompt-text");
        prompt.classList.add("i-amphtml-story-interactive-prompt");
        promptContainer.appendChild(prompt);
      }
    };
    _proto.buildComponent = function buildComponent() {
    };
    _proto.layoutCallback = function layoutCallback() {
      this.initializeListeners_();
      return this.backendDataPromise_ = this.element.hasAttribute("endpoint") ? this.retrieveInteractiveData_() : resolvedPromise();
    };
    _proto.getClientId_ = function getClientId_() {
      if (!this.clientIdPromise_) {
        this.clientIdPromise_ = Services.cidForDoc(this.element).then(function(data) {
          return data.get({
            scope: "amp-story",
            createCookieIfNotPresent: true
          }, resolvedPromise());
        });
      }
      return this.clientIdPromise_;
    };
    _proto.onRtlStateUpdate_ = function onRtlStateUpdate_(rtlState) {
      var _this5 = this;
      this.mutateElement(function() {
        rtlState ? _this5.rootEl_.setAttribute("dir", "rtl") : _this5.rootEl_.removeAttribute("dir");
      });
    };
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return layout === "container";
    };
    _proto.adjustGridLayer_ = function adjustGridLayer_() {
      var gridLayer = closest(dev().assertElement(this.element), function(el) {
        return el.tagName.toLowerCase() === "amp-story-grid-layer";
      });
      gridLayer.classList.add("i-amphtml-story-has-interactive");
      if (gridLayer.parentElement.querySelector("amp-story-cta-layer")) {
        gridLayer.classList.add("i-amphtml-story-has-CTA-layer");
      }
      if (gridLayer.parentElement.querySelector("amp-story-page-attachment")) {
        gridLayer.classList.add("i-amphtml-story-has-page-attachment");
      }
    };
    _proto.initializeListeners_ = function initializeListeners_() {
      var _this6 = this;
      this.storeService_.subscribe(StateProperty.RTL_STATE, function(rtlState) {
        _this6.onRtlStateUpdate_(rtlState);
      }, true);
      this.storeService_.subscribe(StateProperty.CURRENT_PAGE_ID, function(currPageId) {
        _this6.mutateElement(function() {
          var toggle2 = currPageId === _this6.getPageEl().getAttribute("id");
          _this6.rootEl_.classList.toggle(INTERACTIVE_ACTIVE_CLASS, toggle2);
          _this6.toggleTabbableElements_(toggle2);
        });
        _this6.closeDisclaimer_();
      }, true);
      this.rootEl_.addEventListener("click", function(e) {
        return _this6.handleTap_(e);
      });
    };
    _proto.handleTap_ = function handleTap_(e) {
      if (e.target == this.disclaimerIcon_ && !this.disclaimerEl_) {
        this.openDisclaimer_();
        return;
      }
      if (this.hasUserSelection_) {
        return;
      }
      var optionEl = closest(dev().assertElement(e.target), function(element) {
        return element.classList.contains("i-amphtml-story-interactive-option");
      }, this.rootEl_);
      if (optionEl) {
        this.updateStoryStoreState_(optionEl.optionIndex_);
        this.handleOptionSelection_(optionEl.optionIndex_, optionEl);
        var confettiEmoji = this.options_[optionEl.optionIndex_].confetti;
        if (confettiEmoji) {
          emojiConfetti(dev().assertElement(this.rootEl_), this.win, confettiEmoji);
        }
        this.closeDisclaimer_();
      }
    };
    _proto.triggerAnalytics_ = function triggerAnalytics_(optionIndex) {
      this.variableService_.onVariableUpdate(AnalyticsVariable.STORY_INTERACTIVE_ID, this.element.getAttribute("id"));
      this.variableService_.onVariableUpdate(AnalyticsVariable.STORY_INTERACTIVE_RESPONSE, optionIndex);
      this.variableService_.onVariableUpdate(AnalyticsVariable.STORY_INTERACTIVE_TYPE, this.interactiveType_);
      this.element[ANALYTICS_TAG_NAME] = this.element.tagName;
      this.analyticsService_.triggerEvent(StoryAnalyticsEvent.INTERACTIVE, this.element);
    };
    _proto.displayOptionsData = function displayOptionsData(unusedOptionsData) {
    };
    _proto.preprocessPercentages_ = function preprocessPercentages_(optionsData) {
      var totalResponseCount = optionsData.reduce(function(acc, response) {
        return acc + response["count"];
      }, 0);
      var percentages = optionsData.map(function(e) {
        return (100 * e["count"] / totalResponseCount).toFixed(2);
      });
      var total = percentages.reduce(function(acc, x) {
        return acc + Math.round(x);
      }, 0);
      if (total > 100) {
        percentages = percentages.map(function(percentage) {
          return (percentage - 2 * (percentage - Math.floor(percentage)) / 3).toFixed(2);
        });
        total = percentages.reduce(function(acc, x) {
          return acc += Math.round(x);
        }, 0);
      }
      if (total === 100) {
        return percentages.map(function(percentage) {
          return Math.round(percentage);
        });
      }
      var remainder = 100 - total;
      var preserveOriginal = percentages.map(function(percentage, index) {
        return {
          originalIndex: index,
          value: percentage,
          remainder: (percentage - Math.floor(percentage)).toFixed(2)
        };
      });
      preserveOriginal.sort(function(left, right) {
        return right.remainder - left.remainder || right.value - left.value;
      });
      var finalPercentages = [];
      var _loop = function _loop2() {
        var highestRemainderObj = preserveOriginal[0];
        var ties = preserveOriginal.filter(function(percentageObj) {
          return percentageObj.value === highestRemainderObj.value;
        });
        preserveOriginal = preserveOriginal.filter(function(percentageObj) {
          return percentageObj.value !== highestRemainderObj.value;
        });
        var toRoundUp = ties.length <= remainder && highestRemainderObj.remainder !== "0.00";
        ties.forEach(function(percentageObj) {
          finalPercentages[percentageObj.originalIndex] = Math.floor(percentageObj.value) + (toRoundUp ? 1 : 0);
        });
        remainder -= toRoundUp ? ties.length : 0;
      };
      while (remainder > 0 && preserveOriginal.length !== 0) {
        _loop();
      }
      preserveOriginal.forEach(function(percentageObj) {
        finalPercentages[percentageObj.originalIndex] = Math.floor(percentageObj.value);
      });
      return finalPercentages;
    };
    _proto.handleOptionSelection_ = function handleOptionSelection_(optionIndex, optionEl) {
      var _this7 = this;
      this.backendDataPromise_.then(function() {
        if (_this7.hasUserSelection_) {
          return;
        }
        _this7.triggerAnalytics_(optionIndex);
        _this7.hasUserSelection_ = true;
        if (_this7.optionsData_) {
          _this7.optionsData_[optionIndex]["count"]++;
          _this7.optionsData_[optionIndex]["selected"] = true;
        }
        _this7.mutateElement(function() {
          _this7.updateToPostSelectionState_(optionEl);
        });
        if (_this7.element.hasAttribute("endpoint")) {
          _this7.executeInteractiveRequest_("POST", optionIndex);
        }
      }).catch(function() {
        _this7.triggerAnalytics_(optionIndex);
        _this7.hasUserSelection_ = true;
        _this7.mutateElement(function() {
          _this7.updateToPostSelectionState_(optionEl);
        });
      });
    };
    _proto.retrieveInteractiveData_ = function retrieveInteractiveData_() {
      var _this8 = this;
      return this.executeInteractiveRequest_("GET").then(function(response) {
        _this8.onDataRetrieved_(response);
      });
    };
    _proto.executeInteractiveRequest_ = function executeInteractiveRequest_(method, optionSelected) {
      var _this9 = this;
      if (optionSelected === void 0) {
        optionSelected = void 0;
      }
      var url = this.element.getAttribute("endpoint");
      if (!assertAbsoluteHttpOrHttpsUrl(url)) {
        return Promise.reject(ENDPOINT_INVALID_ERROR);
      }
      return this.getClientId_().then(function(clientId) {
        var requestOptions = {
          "method": method
        };
        var requestParams = dict({
          "type": _this9.interactiveType_,
          "client": clientId
        });
        url = appendPathToUrl(_this9.urlService_.parse(url), _this9.getInteractiveId_());
        if (requestOptions["method"] === "POST") {
          requestOptions["body"] = {
            "option_selected": optionSelected
          };
          requestOptions["headers"] = {
            "Content-Type": "application/json"
          };
          url = appendPathToUrl(_this9.urlService_.parse(url), ":vote");
        }
        url = addParamsToUrl(url, requestParams);
        return _this9.requestService_.executeRequest(url, requestOptions).catch(function(err) {
          return dev().error(TAG2, err);
        });
      });
    };
    _proto.onDataRetrieved_ = function onDataRetrieved_(response) {
      if (!(response && response["options"])) {
        devAssert2(response && "options" in response, "Invalid interactive response, expected { data: InteractiveResponseType, ...} but received " + response);
        dev().error(TAG2, "Invalid interactive response, expected { data: InteractiveResponseType, ...} but received " + response);
        return;
      }
      var numOptions = this.getNumberOfOptions();
      this.updateComponentWithData(response["options"].slice(0, numOptions));
    };
    _proto.updateComponentWithData = function updateComponentWithData(data) {
      var _this10 = this;
      var options = this.rootEl_.querySelectorAll(".i-amphtml-story-interactive-option");
      this.optionsData_ = this.orderData_(data);
      this.optionsData_.forEach(function(response) {
        if (response.selected) {
          _this10.hasUserSelection_ = true;
          _this10.updateStoryStoreState_(response.index);
          _this10.mutateElement(function() {
            _this10.updateToPostSelectionState_(options[response.index]);
          });
        }
      });
    };
    _proto.updateToPostSelectionState_ = function updateToPostSelectionState_(selectedOption) {
      this.rootEl_.classList.add(POST_SELECTION_CLASS);
      if (selectedOption != null) {
        selectedOption.classList.add("i-amphtml-story-interactive-option-selected");
      }
      if (this.optionsData_) {
        this.rootEl_.classList.add("i-amphtml-story-interactive-has-data");
        this.displayOptionsData(this.optionsData_);
      }
      this.getOptionElements().forEach(function(el) {
        el.setAttribute("tabindex", -1);
      });
    };
    _proto.updateStoryStoreState_ = function updateStoryStoreState_(option) {
      if (option === void 0) {
        option = null;
      }
      var update = {
        option: option != null ? this.options_[option] : null,
        interactiveId: this.getInteractiveId_(),
        type: this.interactiveType_
      };
      this.storeService_.dispatch(Action.ADD_INTERACTIVE_REACT, update);
    };
    _proto.toggleTabbableElements_ = function toggleTabbableElements_(toggle2) {
      var _this11 = this;
      this.rootEl_.querySelectorAll("button, a").forEach(function(el) {
        if (el.classList.contains("i-amphtml-story-interactive-option") && _this11.hasUserSelection_) {
          el.setAttribute("tabindex", -1);
        } else {
          el.setAttribute("tabindex", toggle2 ? 0 : -1);
        }
      });
    };
    _proto.getNumberOfOptions = function getNumberOfOptions() {
      return this.getOptionElements().length;
    };
    _proto.orderData_ = function orderData_(optionsData) {
      var numOptionElements = this.getNumberOfOptions();
      var orderedData = new Array(numOptionElements);
      optionsData.forEach(function(option) {
        var index = option.index;
        if (index >= 0 && index < numOptionElements) {
          orderedData[index] = option;
        }
      });
      for (var i = 0; i < orderedData.length; i++) {
        if (!orderedData[i]) {
          orderedData[i] = {
            count: 0,
            index: i,
            selected: false
          };
        }
      }
      return orderedData;
    };
    _proto.openDisclaimer_ = function openDisclaimer_() {
      var _this12 = this;
      if (this.disclaimerEl_) {
        return;
      }
      var dir = this.rootEl_.getAttribute("dir") || "ltr";
      this.disclaimerEl_ = buildInteractiveDisclaimer(this, {
        dir: dir
      });
      var styles;
      this.measureMutateElement(function() {
        var interactiveRect = _this12.element.getBoundingClientRect();
        var pageRect = _this12.getPageEl().getBoundingClientRect();
        var iconRect = _this12.disclaimerIcon_.getBoundingClientRect();
        var bottomFraction = 1 - (iconRect.y + iconRect.height - pageRect.y) / pageRect.height;
        var widthFraction = interactiveRect.width / pageRect.width;
        var bottomPercentage = clamp(bottomFraction * 100, 0, 85);
        var widthPercentage = Math.max(widthFraction * 100, 65);
        styles = {
          "bottom": bottomPercentage + "%",
          "max-width": widthPercentage + "%",
          "position": "absolute",
          "z-index": 3
        };
        if (dir === "rtl") {
          var leftFraction = (iconRect.x - pageRect.x) / pageRect.width;
          styles["left"] = clamp(leftFraction * 100, 0, 25) + "%";
        } else {
          var rightFraction = 1 - (iconRect.x + iconRect.width - pageRect.x) / pageRect.width;
          styles["right"] = clamp(rightFraction * 100, 0, 25) + "%";
        }
      }, function() {
        setImportantStyles(_this12.disclaimerEl_, assertDoesNotContainDisplay(styles));
        _this12.getPageEl().appendChild(_this12.disclaimerEl_);
        _this12.disclaimerIcon_.setAttribute("hide", "");
        _this12.disclaimerEl_.addEventListener("click", function(e) {
          if (e.path[0].classList.contains("i-amphtml-story-interactive-disclaimer-close")) {
            _this12.closeDisclaimer_();
          }
        });
      });
    };
    _proto.closeDisclaimer_ = function closeDisclaimer_() {
      var _this13 = this;
      if (!this.disclaimerEl_) {
        return;
      }
      this.mutateElement(function() {
        _this13.disclaimerEl_.remove();
        _this13.disclaimerEl_ = null;
        if (_this13.disclaimerIcon_) {
          _this13.disclaimerIcon_.removeAttribute("hide");
        }
      });
    };
    return AmpStoryInteractive2;
  }(AMP.BaseElement);

  // build/amp-story-interactive-binary-poll-0.1.css.js
  var CSS4 = '.i-amphtml-story-interactive-binary-poll-container{color:var(--i-amphtml-interactive-option-accent-color)!important;--post-select-scale:0.5!important;--post-select-scale-variable:1;border-radius:2em!important}.i-amphtml-story-interactive-binary-poll-option-container{background:var(--i-amphtml-interactive-option-background-color)!important;height:5.625em!important;border-radius:1em!important;overflow:hidden!important;box-shadow:var(--i-amphtml-interactive-component-shadow)!important;transform:translateZ(0)!important}.i-amphtml-story-interactive-binary-poll-option-container,.i-amphtml-story-interactive-option{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important}.i-amphtml-story-interactive-option{-ms-flex-align:center!important;align-items:center!important;text-align:center!important;-ms-flex-direction:column!important;flex-direction:column!important;width:50%;position:relative!important;background-color:transparent!important;font:inherit!important;border:none!important;outline:none!important;color:inherit!important}.i-amphtml-story-interactive-prompt{text-align:center!important}.i-amphtml-story-interactive-option-text-container{width:100%!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-direction:column!important;flex-direction:column!important;transform:translateY(calc(1em + 1px))!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-option-text-container{transition:transform var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve),opacity var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important;transform:translateY(0)!important}.i-amphtml-story-interactive-binary-poll-container:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option-divider{height:100%!important;width:1px!important;opacity:0.3!important;background-color:var(--i-amphtml-interactive-theme-border)!important}.i-amphtml-story-interactive-option .i-amphtml-story-interactive-option-percent-bar{height:100%!important;width:100%!important;position:absolute!important;opacity:0!important;transform-origin:left!important;transition:transform var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important}.i-amphtml-story-interactive-option:last-child .i-amphtml-story-interactive-option-percent-bar,[dir=rtl] .i-amphtml-story-interactive-option .i-amphtml-story-interactive-option-percent-bar{transform-origin:right!important}[dir=rtl] .i-amphtml-story-interactive-option:last-child .i-amphtml-story-interactive-option-percent-bar{transform-origin:left!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-option.i-amphtml-story-interactive-option-selected .i-amphtml-story-interactive-option-percent-bar{background-color:var(--i-amphtml-interactive-option-accent-color)!important;opacity:0.2!important;animation:i-amphtml-interactive-animation-flash-background forwards var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)}.i-amphtml-story-interactive-option-title{font-weight:800!important;font-size:1.75em!important;margin:0!important;line-height:1.3em!important;width:4.42em!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important;transition:transform var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important;height:2.6em!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-option-title{transform:scale(var(--post-select-scale))!important}.i-amphtml-story-interactive-option-title-text{overflow:hidden!important;text-overflow:ellipsis!important;display:-webkit-box!important;-webkit-line-clamp:2!important;-webkit-box-orient:vertical!important;transition:transform var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important;max-height:2.6em!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-option-title-text{transform:scale(var(--post-select-scale-variable))!important}.i-amphtml-story-interactive-option-percentage-text{font-weight:700!important;font-size:1.375em!important;transform:scale(0)!important;display:inline-block!important;transition:transform var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-option-percentage-text{transform:scale(1) translateY(-0.75em)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:before{background-color:var(--i-amphtml-interactive-theme-shading-flash)!important;content:""!important;position:absolute!important;width:100%!important;height:100%!important;left:0!important;opacity:0!important;animation:i-amphtml-interactive-animation-landing-animation-flash-background var(--i-amphtml-interactive-animation-time)!important;animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el1)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:nth-of-type(2):before{animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el2)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:focus:before{opacity:1!important;background-color:var(--i-amphtml-interactive-theme-shading)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option .i-amphtml-story-interactive-option-title-text{animation:i-amphtml-story-interactive-option-title-text-landing-animation var(--i-amphtml-interactive-animation-time)!important;animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el1)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:nth-of-type(2) .i-amphtml-story-interactive-option-title-text{animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el2)!important}@keyframes i-amphtml-story-interactive-option-title-text-landing-animation{33%{transform:scale(.95)}}\n/*# sourceURL=/extensions/amp-story-interactive/0.1/amp-story-interactive-binary-poll.css*/';

  // extensions/amp-story-interactive/0.1/amp-story-interactive-binary-poll.js
  var _templateObject6;
  var _templateObject23;
  var _templateObject32;
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf2(subClass, superClass);
  }
  function _setPrototypeOf2(o, p) {
    _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf10(o2, p2) {
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
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf10(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf2(o);
  }
  function _taggedTemplateLiteralLoose4(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var FontSize = {
    EMOJI: 28,
    SINGLE_LINE: 16,
    DOUBLE_LINE: 14
  };
  var MIN_HORIZONTAL_TRANSFORM = -20;
  var buildBinaryPollTemplate = function buildBinaryPollTemplate2(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose4(['\n    <div class="i-amphtml-story-interactive-binary-poll-container">\n      <div class="i-amphtml-story-interactive-prompt-container"></div>\n      <div\n        class="i-amphtml-story-interactive-binary-poll-option-container"\n      ></div>\n    </div>\n  '])));
  };
  var buildOptionTemplate = function buildOptionTemplate2(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject23 || (_templateObject23 = _taggedTemplateLiteralLoose4(['\n    <button class="i-amphtml-story-interactive-option" aria-live="polite">\n      <span class="i-amphtml-story-interactive-option-percent-bar"></span>\n      <span class="i-amphtml-story-interactive-option-text-container">\n        <span class="i-amphtml-story-interactive-option-title"\n          ><span class="i-amphtml-story-interactive-option-title-text"></span\n        ></span>\n        <span\n          class="i-amphtml-story-interactive-option-percentage-text"\n          aria-hidden="true"\n          >0%</span\n        >\n      </span>\n    </button>\n  '])));
  };
  var buildBinaryOptionDividerTemplate = function buildBinaryOptionDividerTemplate2(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject32 || (_templateObject32 = _taggedTemplateLiteralLoose4(['\n    <span class="i-amphtml-story-interactive-option-divider"></span>\n  '])));
  };
  var AmpStoryInteractiveBinaryPoll = /* @__PURE__ */ function(_AmpStoryInteractive) {
    _inherits2(AmpStoryInteractiveBinaryPoll2, _AmpStoryInteractive);
    var _super = _createSuper2(AmpStoryInteractiveBinaryPoll2);
    function AmpStoryInteractiveBinaryPoll2(element) {
      return _super.call(this, element, InteractiveType.POLL, [2, 2]);
    }
    var _proto = AmpStoryInteractiveBinaryPoll2.prototype;
    _proto.buildCallback = function buildCallback() {
      return _AmpStoryInteractive.prototype.buildCallback.call(this, CSS4);
    };
    _proto.buildComponent = function buildComponent() {
      this.rootEl_ = buildBinaryPollTemplate(this.element);
      this.attachContent_(this.rootEl_);
      return this.rootEl_;
    };
    _proto.layoutCallback = function layoutCallback() {
      var _this = this;
      return this.adaptFontSize_(dev().assertElement(this.rootEl_)).then(function() {
        return _AmpStoryInteractive.prototype.layoutCallback.call(_this);
      });
    };
    _proto.attachContent_ = function attachContent_(root) {
      this.attachPrompt_(root);
      var options = root.querySelector(".i-amphtml-story-interactive-binary-poll-option-container");
      options.appendChild(this.generateOption_(this.options_[0]));
      options.appendChild(buildBinaryOptionDividerTemplate(root));
      options.appendChild(this.generateOption_(this.options_[1]));
    };
    _proto.adaptFontSize_ = function adaptFontSize_(root) {
      var _this2 = this;
      var largestFontSize = FontSize.EMOJI;
      var allTitles = toArray(root.querySelectorAll(".i-amphtml-story-interactive-option-title-text"));
      return this.measureMutateElement(function() {
        allTitles.forEach(function(e) {
          var lines = Math.round(e.clientHeight / parseFloat(computedStyle(_this2.win, e)["line-height"].replace("px", "")));
          if (e.textContent.length <= 3 && largestFontSize >= FontSize.EMOJI) {
            largestFontSize = FontSize.EMOJI;
          } else if (lines == 1 && largestFontSize >= FontSize.SINGLE_LINE) {
            largestFontSize = FontSize.SINGLE_LINE;
          } else if (lines == 2) {
            largestFontSize = FontSize.DOUBLE_LINE;
          }
        });
      }, function() {
        setStyle(root, "--post-select-scale-variable", "" + (largestFontSize / FontSize.DOUBLE_LINE).toFixed(2));
      }, root);
    };
    _proto.generateOption_ = function generateOption_(option) {
      var convertedOption = buildOptionTemplate(this.element);
      var optionText = convertedOption.querySelector(".i-amphtml-story-interactive-option-title-text");
      optionText.textContent = option["text"];
      convertedOption.optionIndex_ = option["optionIndex"];
      return convertedOption;
    };
    _proto.getTransformVal_ = function getTransformVal_(percentage) {
      var mappedVal = Math.max(percentage - 50, MIN_HORIZONTAL_TRANSFORM);
      if (document.dir === "rtl") {
        mappedVal *= -1;
      }
      return mappedVal;
    };
    _proto.displayOptionsData = function displayOptionsData(responseData) {
      var _this3 = this;
      if (!responseData) {
        return;
      }
      var percentages = this.preprocessPercentages_(responseData);
      this.getOptionElements().forEach(function(el, index) {
        var percentage = percentages[index];
        var percentageEl = el.querySelector(".i-amphtml-story-interactive-option-percentage-text");
        percentageEl.textContent = percentage + "%";
        percentageEl.removeAttribute("aria-hidden");
        setStyle(el.querySelector(".i-amphtml-story-interactive-option-percent-bar"), "transform", "scaleX(" + percentage * 0.01 * 2 + ")");
        var textContainer = el.querySelector(".i-amphtml-story-interactive-option-text-container");
        textContainer.setAttribute("style", "transform: translateX(" + _this3.getTransformVal_(percentage) * (index === 0 ? 1 : -1) + "%) !important");
        if (responseData[index].selected) {
          textContainer.setAttribute("aria-label", "selected " + textContainer.textContent);
        }
        if (percentage === 0) {
          setStyle(textContainer, "opacity", "0");
        }
      });
    };
    return AmpStoryInteractiveBinaryPoll2;
  }(AmpStoryInteractive);

  // build/amp-story-interactive-img-poll-0.1.css.js
  var CSS5 = ".i-amphtml-story-interactive-img-option{--i-amphtml-interactive-option-post-color:var(\n    --interactive-accent-color\n  )!important}\n/*# sourceURL=/extensions/amp-story-interactive/0.1/amp-story-interactive-img-poll.css*/";

  // build/amp-story-interactive-img-0.1.css.js
  var CSS6 = '.i-amphtml-story-interactive-img-container{--i-amphtml-interactive-img-option-size:7.5em!important;--i-amphtml-interactive-img-option-gap:1em!important;--i-amphtml-interactive-img-transform:scale(0.95)!important;border-radius:3.75em 3.75em 4.5em 4.5em!important}.i-amphtml-story-interactive-img-option-container{background:var(\n    --i-amphtml-interactive-options-chip-background-color\n  )!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:justify!important;justify-content:space-between!important;-ms-flex-align:end!important;align-items:flex-end!important;border-radius:4.375em!important;-ms-flex-wrap:wrap!important;flex-wrap:wrap!important;padding:var(--i-amphtml-interactive-img-option-gap)!important}.i-amphtml-story-interactive-img-option{width:var(--i-amphtml-interactive-img-option-size)!important;height:var(--i-amphtml-interactive-img-option-size)!important;position:relative!important;padding:0!important;background:none!important;border:none!important;font-family:inherit!important;font-size:inherit!important}.i-amphtml-story-interactive-img-option:nth-child(3){margin-top:var(--i-amphtml-interactive-img-option-gap)!important}.i-amphtml-story-interactive-img-option:nth-child(3):last-child{margin:0 auto auto!important}.i-amphtml-story-interactive-img-option-img{border-radius:50%!important;overflow:hidden!important;width:100%!important;height:100%!important;background-color:var(\n    --i-amphtml-interactive-placeholder-background\n  )!important;background-position:50%!important;background-size:cover!important;box-shadow:var(--i-amphtml-interactive-img-border)!important;position:relative!important;z-index:1!important;-webkit-clip-path:circle(calc(var(--i-amphtml-interactive-img-option-size)))!important;clip-path:circle(calc(var(--i-amphtml-interactive-img-option-size)))!important}.i-amphtml-story-interactive-img-option:focus{outline:none!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-img-option:focus .i-amphtml-story-interactive-img-option-img{transform:var(--i-amphtml-interactive-img-transform)!important}.i-amphtml-story-interactive-img-option-img:before{content:""!important;display:block!important;width:100%!important;height:100%!important;transform:scaleY(0)!important;transform-origin:bottom!important;opacity:0.5!important}.i-amphtml-story-interactive-option-selected .i-amphtml-story-interactive-img-option-img{box-shadow:inset 0 0 0 0.25em var(--i-amphtml-interactive-option-post-color),var(--i-amphtml-interactive-img-border)!important}.i-amphtml-story-interactive-post-selection.i-amphtml-story-interactive-has-data .i-amphtml-story-interactive-img-option-img:before{background-color:var(--i-amphtml-interactive-option-post-color)!important;transform:scaleY(var(--option-percentage,0))!important;transition:transform var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important}.i-amphtml-story-interactive-post-selection.i-amphtml-story-interactive-has-data .i-amphtml-story-interactive-img-option-percentage-text{position:absolute!important;bottom:0.625em!important;text-align:center!important;right:0!important;left:0!important;color:#fff!important;font-weight:700!important;text-shadow:0 0 0.7em rgba(0,0,0,0.5)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-img-option-img{animation:i-amphtml-story-interactive-img-option-img-landing-animation var(--i-amphtml-interactive-animation-time)!important;animation-delay:var(\n    --i-amphtml-interactive-landing-animation-delay-offset-el1\n  )!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-img-option:nth-of-type(2) .i-amphtml-story-interactive-img-option-img{animation-delay:var(\n    --i-amphtml-interactive-landing-animation-delay-offset-el2\n  )!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-img-option:nth-of-type(3) .i-amphtml-story-interactive-img-option-img{animation-delay:var(\n    --i-amphtml-interactive-landing-animation-delay-offset-el3\n  )!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-img-option:nth-of-type(4) .i-amphtml-story-interactive-img-option-img{animation-delay:var(\n    --i-amphtml-interactive-landing-animation-delay-offset-el4\n  )!important}@keyframes i-amphtml-story-interactive-img-option-img-landing-animation{33%{transform:var(--i-amphtml-interactive-img-transform)}}\n/*# sourceURL=/extensions/amp-story-interactive/0.1/amp-story-interactive-img.css*/';

  // extensions/amp-story-interactive/0.1/amp-story-interactive-img-poll.js
  var _templateObject7;
  function _inherits3(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf3(subClass, superClass);
  }
  function _setPrototypeOf3(o, p) {
    _setPrototypeOf3 = Object.setPrototypeOf || function _setPrototypeOf10(o2, p2) {
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
    _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf10(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf3(o);
  }
  function _taggedTemplateLiteralLoose5(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var buildOptionTemplate3 = function buildOptionTemplate4(option) {
    var html2 = htmlFor(option);
    return html2(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose5(['\n    <button\n      class="i-amphtml-story-interactive-img-option i-amphtml-story-interactive-option"\n      aria-live="polite"\n    >\n      <div class="i-amphtml-story-interactive-img-option-img">\n        <span\n          class="i-amphtml-story-interactive-img-option-percentage-text"\n        ></span>\n      </div>\n    </button>\n  '])));
  };
  var AmpStoryInteractiveImgPoll = /* @__PURE__ */ function(_AmpStoryInteractive) {
    _inherits3(AmpStoryInteractiveImgPoll2, _AmpStoryInteractive);
    var _super = _createSuper3(AmpStoryInteractiveImgPoll2);
    function AmpStoryInteractiveImgPoll2(element) {
      return _super.call(this, element, InteractiveType.POLL);
    }
    var _proto = AmpStoryInteractiveImgPoll2.prototype;
    _proto.buildCallback = function buildCallback() {
      return _AmpStoryInteractive.prototype.buildCallback.call(this, CSS5 + CSS6);
    };
    _proto.buildComponent = function buildComponent() {
      this.rootEl_ = buildImgTemplate(this.element);
      this.attachContent_(this.rootEl_);
      return this.rootEl_;
    };
    _proto.attachContent_ = function attachContent_(root) {
      var _this = this;
      this.attachPrompt_(root);
      var optionContainer = this.rootEl_.querySelector(".i-amphtml-story-interactive-img-option-container");
      this.options_.forEach(function(option, index) {
        return optionContainer.appendChild(_this.configureOption_(option, index));
      });
    };
    _proto.configureOption_ = function configureOption_(option) {
      var convertedOption = buildOptionTemplate3(this.element);
      convertedOption.optionIndex_ = option["optionIndex"];
      setImportantStyles(convertedOption.querySelector(".i-amphtml-story-interactive-img-option-img"), {
        "background-image": "url(" + option["image"] + ")"
      });
      convertedOption.setAttribute("aria-label", option["imagealt"]);
      return convertedOption;
    };
    _proto.displayOptionsData = function displayOptionsData(optionsData) {
      var _this2 = this;
      if (!optionsData) {
        return;
      }
      var percentages = this.preprocessPercentages_(optionsData);
      this.getOptionElements().forEach(function(el, index) {
        if (optionsData[index].selected) {
          el.setAttribute("aria-label", "selected " + _this2.options_[index]["imagealt"]);
        }
        el.querySelector(".i-amphtml-story-interactive-img-option-percentage-text").textContent = percentages[index] + "%";
        setImportantStyles(el, {
          "--option-percentage": percentages[index] / 100
        });
      });
    };
    return AmpStoryInteractiveImgPoll2;
  }(AmpStoryInteractive);

  // build/amp-story-interactive-img-quiz-0.1.css.js
  var CSS7 = ".i-amphtml-story-interactive-img-quiz-answer-choice{position:absolute!important;height:1.5em!important;width:1.5em!important;bottom:0.5em!important;box-shadow:0 0 0 0.125em var(--i-amphtml-interactive-option-background-color)!important;background-color:var(--interactive-accent-color)!important;border-radius:50%!important;text-align:center!important;color:var(--i-amphtml-interactive-option-answer-choice-color)!important;font-weight:700!important;line-height:1.5em!important;z-index:1!important;-webkit-backface-visibility:hidden!important;backface-visibility:hidden!important;-webkit-clip-path:circle(1em)!important;clip-path:circle(1em)!important;background-clip:content-box!important}.i-amphtml-story-interactive-img-container:not([dir=rtl]) .i-amphtml-story-interactive-img-quiz-answer-choice{right:0.5em!important}.i-amphtml-story-interactive-img-container[dir=rtl] .i-amphtml-story-interactive-img-quiz-answer-choice{left:0.5em!important}.i-amphtml-story-interactive-img-quiz-answer-choice:before{content:\"\"!important;width:100%!important;height:100%!important;border-radius:50%!important;position:absolute!important;left:0!important}.i-amphtml-story-interactive-img-option[correct=correct]{--i-amphtml-interactive-option-post-color:var(--correct-color)!important;--i-amphtml-interactive-option-post-marker:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='12' height='10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.584 7.497 1.362 5.276a.641.641 0 1 0-.907.907l3.129 3.129 7.241-7.242a.64.64 0 0 0-.904-.904L3.584 7.497z' fill='%23fff'/%3E%3C/svg%3E\")!important}.i-amphtml-story-interactive-img-option:not([correct=correct]){--i-amphtml-interactive-option-post-color:var(--incorrect-color)!important;--i-amphtml-interactive-option-post-marker:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='12' height='12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.396 1.813A.854.854 0 1 0 10.187.604L6 4.791 1.813.604A.855.855 0 0 0 .604 1.813L4.791 6 .604 10.187a.855.855 0 0 0 1.209 1.209L6 7.209l4.187 4.187a.855.855 0 1 0 1.209-1.209L7.209 6l4.187-4.187z' fill='%23fff'/%3E%3C/svg%3E\")!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-img-quiz-answer-choice{background-color:var(--i-amphtml-interactive-option-post-color)!important;color:transparent!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-img-quiz-answer-choice:before{display:block!important;background-color:transparent!important;background-image:var(--i-amphtml-interactive-option-post-marker)!important;background-position:50%!important;background-repeat:no-repeat!important;background-size:0.75em!important;filter:var(--i-amphtml-story-interactive-img-quiz-answer-filter)!important}.i-amphtml-story-interactive-option-selected .i-amphtml-story-interactive-img-quiz-answer-choice{animation:answer-choice-bounce 600ms linear forwards!important}\n/*# sourceURL=/extensions/amp-story-interactive/0.1/amp-story-interactive-img-quiz.css*/";

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

  // extensions/amp-story-interactive/0.1/amp-story-interactive-img-quiz.js
  var _templateObject8;
  function _inherits4(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf4(subClass, superClass);
  }
  function _setPrototypeOf4(o, p) {
    _setPrototypeOf4 = Object.setPrototypeOf || function _setPrototypeOf10(o2, p2) {
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
    _getPrototypeOf4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf10(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf4(o);
  }
  function _taggedTemplateLiteralLoose6(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var buildOptionTemplate5 = function buildOptionTemplate6(option) {
    var html2 = htmlFor(option);
    return html2(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose6(['\n    <button\n      class="i-amphtml-story-interactive-img-option i-amphtml-story-interactive-option"\n      aria-live="polite"\n    >\n      <div class="i-amphtml-story-interactive-img-option-img">\n        <span\n          class="i-amphtml-story-interactive-img-option-percentage-text"\n        ></span>\n      </div>\n      <div\n        class="i-amphtml-story-interactive-img-quiz-answer-choice notranslate"\n      ></div>\n    </button>\n  '])));
  };
  var AmpStoryInteractiveImgQuiz = /* @__PURE__ */ function(_AmpStoryInteractive) {
    _inherits4(AmpStoryInteractiveImgQuiz2, _AmpStoryInteractive);
    var _super = _createSuper4(AmpStoryInteractiveImgQuiz2);
    function AmpStoryInteractiveImgQuiz2(element) {
      var _this;
      _this = _super.call(this, element, InteractiveType.QUIZ);
      _this.localizedAnswerChoices_ = [];
      return _this;
    }
    var _proto = AmpStoryInteractiveImgQuiz2.prototype;
    _proto.buildCallback = function buildCallback() {
      return _AmpStoryInteractive.prototype.buildCallback.call(this, CSS7 + CSS6);
    };
    _proto.buildComponent = function buildComponent() {
      this.rootEl_ = buildImgTemplate(this.element);
      this.attachContent_(this.rootEl_);
      return this.rootEl_;
    };
    _proto.layoutCallback = function layoutCallback() {
      this.setBubbleTextColor_(dev().assertElement(this.rootEl_));
      return _AmpStoryInteractive.prototype.layoutCallback.call(this);
    };
    _proto.attachContent_ = function attachContent_(root) {
      var _this2 = this;
      this.attachPrompt_(root);
      this.localizedAnswerChoices_ = [LocalizedStringId_Enum.AMP_STORY_INTERACTIVE_QUIZ_ANSWER_CHOICE_A, LocalizedStringId_Enum.AMP_STORY_INTERACTIVE_QUIZ_ANSWER_CHOICE_B, LocalizedStringId_Enum.AMP_STORY_INTERACTIVE_QUIZ_ANSWER_CHOICE_C, LocalizedStringId_Enum.AMP_STORY_INTERACTIVE_QUIZ_ANSWER_CHOICE_D].map(function(choice) {
        return _this2.localizationService.getLocalizedString(choice);
      });
      var optionContainer = this.rootEl_.querySelector(".i-amphtml-story-interactive-img-option-container");
      this.options_.forEach(function(option, index) {
        return optionContainer.appendChild(_this2.configureOption_(option, index));
      });
    };
    _proto.configureOption_ = function configureOption_(option, index) {
      var convertedOption = buildOptionTemplate5(this.element);
      var answerChoiceEl = convertedOption.querySelector(".i-amphtml-story-interactive-img-quiz-answer-choice");
      answerChoiceEl.textContent = this.localizedAnswerChoices_[index];
      convertedOption.optionIndex_ = option["optionIndex"];
      setImportantStyles(convertedOption.querySelector(".i-amphtml-story-interactive-img-option-img"), {
        "background-image": "url(" + option["image"] + ")"
      });
      convertedOption.setAttribute("aria-label", option["imagealt"]);
      if ("correct" in option) {
        convertedOption.setAttribute("correct", "correct");
      }
      return convertedOption;
    };
    _proto.displayOptionsData = function displayOptionsData(optionsData) {
      var _this3 = this;
      if (!optionsData) {
        return;
      }
      var percentages = this.preprocessPercentages_(optionsData);
      this.getOptionElements().forEach(function(el, index) {
        var ariaDescription = obj_str_default({
          selected: optionsData[index].selected,
          correct: el.hasAttribute("correct"),
          incorrect: !el.hasAttribute("correct")
        });
        el.setAttribute("aria-label", ariaDescription + " " + _this3.options_[index]["imagealt"]);
        el.querySelector(".i-amphtml-story-interactive-img-option-percentage-text").textContent = percentages[index] + "%";
        setImportantStyles(el, {
          "--option-percentage": percentages[index] / 100
        });
      });
    };
    _proto.setBubbleTextColor_ = function setBubbleTextColor_(root) {
      var answerChoiceEl = root.querySelector(".i-amphtml-story-interactive-img-quiz-answer-choice");
      var _computedStyle = computedStyle(this.win, answerChoiceEl), backgroundColor = _computedStyle.backgroundColor;
      var rgb = getRGBFromCssColorValue(backgroundColor);
      var contrastColor = getTextColorForRGB(rgb);
      setImportantStyles(root, {
        "--i-amphtml-interactive-option-answer-choice-color": contrastColor
      });
    };
    return AmpStoryInteractiveImgQuiz2;
  }(AmpStoryInteractive);

  // build/amp-story-interactive-poll-0.1.css.js
  var CSS8 = '.i-amphtml-story-interactive-option-container{background-color:var(--i-amphtml-interactive-options-chip-background-color)!important;border-radius:1em!important;color:var(--i-amphtml-interactive-strong-text-color)!important;font-weight:700!important;padding:.5em!important}.i-amphtml-story-interactive-option{display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:justify!important;justify-content:space-between!important;height:3.5em!important;overflow:hidden!important;padding:0px .75em!important;position:relative!important;box-shadow:var(--i-amphtml-interactive-chip-shadow),inset 0px 0px 0px 1px var(--i-amphtml-interactive-theme-border)!important;-webkit-box-shadow:var(--i-amphtml-interactive-chip-shadow),inset 0px 0px 0px 1px var(--i-amphtml-interactive-theme-border)!important;-moz-box-shadow:var(--i-amphtml-interactive-chip-shadow),inset 0px 0px 0px 1px var(--i-amphtml-interactive-theme-border)!important;border-radius:.5em!important;background-color:var(--i-amphtml-interactive-option-background-color);border:none!important;font:inherit!important;color:inherit!important;width:100%!important;outline:none!important;text-align:start!important}.i-amphtml-story-interactive-option:not(:first-child){margin-top:.5em!important}.i-amphtml-story-interactive-option.i-amphtml-story-interactive-option-selected{background-color:var(--i-amphtml-interactive-theme-shading-base);box-shadow:var(--i-amphtml-interactive-chip-shadow-inset),inset 0px 0px 0px 1px var(--i-amphtml-interactive-theme-border)!important;-webkit-box-shadow:var(--i-amphtml-interactive-chip-shadow-inset),inset 0px 0px 0px 1px var(--i-amphtml-interactive-theme-border)!important;-moz-box-shadow:var(--i-amphtml-interactive-chip-shadow-inset),inset 0px 0px 0px 1px var(--i-amphtml-interactive-theme-border)!important;animation:i-amphtml-interactive-animation-flash-background-color forwards var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important}.i-amphtml-story-interactive-option:after{content:""!important;background-color:var(--i-amphtml-interactive-theme-shading)!important;position:absolute!important;height:100%!important;width:100%!important;left:0!important;top:0!important;transform:translateX(-100%)!important;transition:transform var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:focus:before{opacity:1!important;background-color:var(--i-amphtml-interactive-theme-shading)!important}.i-amphtml-story-interactive-poll-container[dir=rtl] .i-amphtml-story-interactive-option:after{transform:translateX(100%)!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-option:after{transform:translateX(calc(var(--option-percentage) - 100%))!important}.i-amphtml-story-interactive-poll-container.i-amphtml-story-interactive-post-selection[dir=rtl] .i-amphtml-story-interactive-option:after{transform:translateX(calc(100% - var(--option-percentage)))!important}.i-amphtml-story-interactive-poll-container:not(.i-amphtml-story-interactive-has-data) .i-amphtml-story-interactive-option:after{visibility:hidden!important}.i-amphtml-story-interactive-option-text{font-size:1.375em!important;margin:0!important;z-index:1!important;transition:transform var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important;transform-origin:left!important;line-height:1.3em!important;word-wrap:break-word!important;overflow:hidden!important;text-overflow:ellipsis!important;display:-webkit-box!important;-webkit-line-clamp:2!important;-webkit-box-orient:vertical!important;max-height:2.6em!important}.i-amphtml-story-interactive-poll-two-lines .i-amphtml-story-interactive-option-text{font-size:1.125em!important}.i-amphtml-story-interactive-poll-container[dir=rtl] .i-amphtml-story-interactive-option-text{transform-origin:right!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-option-text{transform:scale(0.72)!important}.i-amphtml-story-interactive-option-percentage{font-weight:700!important;font-size:1.75em!important;margin:0!important;opacity:0!important;transition:transform var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important;transform:translateX(2em)!important;-ms-flex-negative:0!important;flex-shrink:0!important;direction:ltr!important}.i-amphtml-story-interactive-poll-container[dir=rtl] .i-amphtml-story-interactive-option-percentage{transform:translateX(-2em)!important}.i-amphtml-story-interactive-has-data.i-amphtml-story-interactive-post-selection:not([dir=rtl]) .i-amphtml-story-interactive-option-percentage,.i-amphtml-story-interactive-has-data.i-amphtml-story-interactive-post-selection[dir=rtl] .i-amphtml-story-interactive-option-percentage{opacity:1!important;transform:translateX(0px)!important}.i-amphtml-story-interactive-option-percentage-sign{font-size:.6em!important;margin-left:-.25em!important;display:inline-block!important}.i-amphtml-story-interactive-poll-container:not(.i-amphtml-story-interactive-has-data) .i-amphtml-story-interactive-option-percentage{visibility:hidden!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:before{background-color:var(--i-amphtml-interactive-theme-shading-flash)!important;content:""!important;position:absolute!important;width:100%!important;height:100%!important;left:0!important;opacity:0!important;animation:i-amphtml-interactive-animation-landing-animation-flash-background var(--i-amphtml-interactive-animation-time)!important;animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el1)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:nth-of-type(2):before{animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el2)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:nth-of-type(3):before{animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el3)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:nth-of-type(4):before{animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el4)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option .i-amphtml-story-interactive-option-text{transform-origin:center!important;animation:i-amphtml-story-interactive-option-text-landing-text var(--i-amphtml-interactive-animation-time)!important;animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el1)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:nth-of-type(2) .i-amphtml-story-interactive-option-text{animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el2)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:nth-of-type(3) .i-amphtml-story-interactive-option-text{animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el3)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:nth-of-type(4) .i-amphtml-story-interactive-option-text{animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el4)!important}@keyframes i-amphtml-story-interactive-option-text-landing-text{33%{transform:translateY(.2em)}}\n/*# sourceURL=/extensions/amp-story-interactive/0.1/amp-story-interactive-poll.css*/';

  // extensions/amp-story-interactive/0.1/amp-story-interactive-poll.js
  var _templateObject9;
  var _templateObject24;
  function _inherits5(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf5(subClass, superClass);
  }
  function _setPrototypeOf5(o, p) {
    _setPrototypeOf5 = Object.setPrototypeOf || function _setPrototypeOf10(o2, p2) {
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
    _getPrototypeOf5 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf10(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf5(o);
  }
  function _taggedTemplateLiteralLoose7(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var buildPollTemplate = function buildPollTemplate2(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose7(['\n    <div class="i-amphtml-story-interactive-poll-container">\n      <div class="i-amphtml-story-interactive-prompt-container"></div>\n      <div class="i-amphtml-story-interactive-option-container"></div>\n    </div>\n  '])));
  };
  var buildOptionTemplate7 = function buildOptionTemplate8(option) {
    var html2 = htmlFor(option);
    return html2(_templateObject24 || (_templateObject24 = _taggedTemplateLiteralLoose7(['\n    <button class="i-amphtml-story-interactive-option" aria-live="polite">\n      <span class="i-amphtml-story-interactive-option-text"></span>\n      <span class="i-amphtml-story-interactive-option-percentage">\n        <span class="i-amphtml-story-interactive-option-percentage-text"></span>\n        <span class="i-amphtml-story-interactive-option-percentage-sign"\n          >%</span\n        >\n      </span>\n    </button>\n  '])));
  };
  var AmpStoryInteractivePoll = /* @__PURE__ */ function(_AmpStoryInteractive) {
    _inherits5(AmpStoryInteractivePoll2, _AmpStoryInteractive);
    var _super = _createSuper5(AmpStoryInteractivePoll2);
    function AmpStoryInteractivePoll2(element) {
      return _super.call(this, element, InteractiveType.POLL, [2, 4]);
    }
    var _proto = AmpStoryInteractivePoll2.prototype;
    _proto.buildCallback = function buildCallback() {
      return _AmpStoryInteractive.prototype.buildCallback.call(this, CSS8);
    };
    _proto.buildComponent = function buildComponent() {
      this.rootEl_ = buildPollTemplate(this.element);
      this.attachContent_(this.rootEl_);
      return this.rootEl_;
    };
    _proto.layoutCallback = function layoutCallback() {
      var _this = this;
      return this.adaptFontSize_(dev().assertElement(this.rootEl_)).then(function() {
        return _AmpStoryInteractive.prototype.layoutCallback.call(_this);
      });
    };
    _proto.attachContent_ = function attachContent_(root) {
      var _this2 = this;
      this.attachPrompt_(root);
      this.options_.forEach(function(option, index) {
        return _this2.configureOption_(option, index);
      });
    };
    _proto.configureOption_ = function configureOption_(option, index) {
      var convertedOption = buildOptionTemplate7(this.element);
      convertedOption.optionIndex_ = index;
      convertedOption.querySelector(".i-amphtml-story-interactive-option-text").textContent = option.text;
      this.rootEl_.querySelector(".i-amphtml-story-interactive-option-container").appendChild(convertedOption);
    };
    _proto.displayOptionsData = function displayOptionsData(optionsData) {
      if (!optionsData) {
        return;
      }
      var percentages = this.preprocessPercentages_(optionsData);
      this.getOptionElements().forEach(function(el, index) {
        if (optionsData[index].selected) {
          var textEl = el.querySelector(".i-amphtml-story-interactive-option-text");
          textEl.setAttribute("aria-label", "selected " + textEl.textContent);
        }
        el.querySelector(".i-amphtml-story-interactive-option-percentage-text").textContent = percentages[index];
        setStyle(el, "--option-percentage", percentages[index] + "%");
      });
    };
    _proto.adaptFontSize_ = function adaptFontSize_(root) {
      var _this3 = this;
      var hasTwoLines = false;
      var allOptionTexts = toArray(root.querySelectorAll(".i-amphtml-story-interactive-option-text"));
      return this.measureMutateElement(function() {
        hasTwoLines = allOptionTexts.some(function(e) {
          var lines = Math.round(e.clientHeight / parseFloat(computedStyle(_this3.win, e)["line-height"].replace("px", "")));
          return lines >= 2;
        });
      }, function() {
        _this3.rootEl_.classList.toggle("i-amphtml-story-interactive-poll-two-lines", hasTwoLines);
      }, root);
    };
    return AmpStoryInteractivePoll2;
  }(AmpStoryInteractive);

  // build/amp-story-interactive-quiz-0.1.css.js
  var CSS9 = ".i-amphtml-story-interactive-quiz-option-container{display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column;flex-direction:column;background-color:var(\n    --i-amphtml-interactive-options-chip-background-color\n  )!important;border-radius:2em!important;padding:0.5em 0.5em 0!important;box-shadow:var(--i-amphtml-interactive-component-shadow)!important}.i-amphtml-story-interactive-quiz-option{font-family:inherit!important;position:relative!important;display:-ms-flexbox!important;display:flex!important;justify-items:start!important;-ms-flex-align:center!important;align-items:center!important;border-radius:1.649em!important;padding:0.5em 1em 0.5em 0.5em!important;background-color:var(\n    --i-amphtml-interactive-option-background-color\n  )!important;margin-bottom:0.5em!important;color:var(--i-amphtml-interactive-option-text-color)!important;box-shadow:var(--i-amphtml-interactive-chip-shadow),inset 0px 0px 0px 1px var(--i-amphtml-interactive-theme-border)!important;-webkit-box-shadow:var(--i-amphtml-interactive-chip-shadow),inset 0px 0px 0px 1px var(--i-amphtml-interactive-theme-border)!important;-moz-box-shadow:var(--i-amphtml-interactive-chip-shadow),inset 0px 0px 0px 1px var(--i-amphtml-interactive-theme-border)!important;font-size:1em!important;line-height:1.25em!important;overflow:hidden!important;z-index:0!important;border:none!important;outline:none!important;text-align:start!important}[dir=rtl] .i-amphtml-story-interactive-quiz-option{padding:0.5em 0.5em 0.5em 1em!important}.i-amphtml-story-interactive-quiz-option-text{max-height:2.5em!important;overflow:hidden!important;text-overflow:ellipsis!important;display:-webkit-box!important;-webkit-line-clamp:2!important;-webkit-box-orient:vertical!important;visibility:visible!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-option-selected{color:#fff!important;border:1px solid transparent!important}.i-amphtml-story-interactive-quiz-answer-choice{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;-ms-flex-align:center!important;align-items:center!important;height:1.5em!important;width:1.5em!important;min-width:1.5em!important;border-radius:50%!important;padding:.31em!important;margin-right:1em!important;color:var(--interactive-accent-color)!important;border:0.125em solid!important;border-color:var(--i-amphtml-interactive-answer-choice-border)!important;font-size:1em!important;line-height:1em!important;font-weight:700!important;background-repeat:no-repeat!important;background-position:50%!important;background-size:1.5em!important}[dir=rtl] .i-amphtml-story-interactive-quiz-answer-choice{margin-left:16px!important;margin-right:0px!important}.i-amphtml-story-interactive-quiz-percentage-text{display:-ms-flexbox!important;display:flex!important;padding-left:1em!important;margin-left:auto!important;visibility:hidden!important;-ms-flex-negative:0!important;flex-shrink:0!important}.i-amphtml-story-interactive-quiz-option:not(.i-amphtml-story-interactive-option-selected) .i-amphtml-story-interactive-quiz-percentage-text{opacity:0.5!important}[dir=rtl] .i-amphtml-story-interactive-quiz-percentage-text{padding-left:0px!important;padding-right:1em!important;margin-right:auto!important;margin-left:0px!important}.i-amphtml-story-interactive-post-selection.i-amphtml-story-interactive-has-data .i-amphtml-story-interactive-quiz-percentage-text{visibility:visible!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-option-selected>.i-amphtml-story-interactive-quiz-percentage-text{color:#fff!important}.i-amphtml-story-interactive-post-selection :not([correct])>.i-amphtml-story-interactive-quiz-answer-choice{color:var(--incorrect-color)!important;border-color:var(--incorrect-color)!important}.i-amphtml-story-interactive-post-selection [correct]>.i-amphtml-story-interactive-quiz-answer-choice{color:var(--correct-color)!important;border-color:var(--correct-color)!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-option-selected>.i-amphtml-story-interactive-quiz-answer-choice{border-color:transparent!important;animation:answer-choice-bounce 600ms linear forwards;background-color:var(\n    --i-amphtml-interactive-answer-choice-background\n  )!important}.i-amphtml-story-interactive-post-selection [correct]>.i-amphtml-story-interactive-quiz-answer-choice{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%235BBA74'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z'/%3E%3C/svg%3E\")!important;color:transparent!important}.i-amphtml-story-interactive-post-selection :not([correct])>.i-amphtml-story-interactive-quiz-answer-choice{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23F34E4E'%3E%3Cpath d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important;color:transparent!important}.i-amphtml-story-interactive-quiz-option>*{position:relative!important}.i-amphtml-story-interactive-quiz-option:before{content:\"\"!important;position:absolute!important;left:0px!important;width:100%!important;height:100%!important;border-radius:var(--i-amphtml-interactive-chip-radius)!important;line-height:1.25em!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-quiz-option:focus:before{background:var(--i-amphtml-interactive-theme-shading)!important}.i-amphtml-story-interactive-post-selection:not(.i-amphtml-story-interactive-has-data) .i-amphtml-story-interactive-quiz-option-selected[correct].i-amphtml-story-interactive-quiz-option:before{animation:option-select-correct 150ms cubic-bezier(0,0,0.2,1) forwards!important}.i-amphtml-story-interactive-post-selection:not(.i-amphtml-story-interactive-has-data) .i-amphtml-story-interactive-quiz-option-selected:not([correct]).i-amphtml-story-interactive-quiz-option:before{animation:option-select-incorrect 150ms cubic-bezier(0,0,0.2,1) forwards!important}.i-amphtml-story-interactive-post-selection.i-amphtml-story-interactive-has-data .i-amphtml-story-interactive-quiz-option:before{transform:translateX(var(--option-percentage,0%))!important}.i-amphtml-story-interactive-post-selection.i-amphtml-story-interactive-has-data[dir=rtl] .i-amphtml-story-interactive-quiz-option:before{transform:translateX(calc(var(--option-percentage, 0%)*-1))!important}.i-amphtml-story-interactive-post-selection.i-amphtml-story-interactive-has-data .i-amphtml-story-interactive-quiz-option:before{left:-100%!important;width:100%!important;height:100%!important;border-radius:0px!important;background:var(--i-amphtml-interactive-theme-shading)!important;color:var(--i-amphtml-interactive-theme-shading)!important;transition:transform var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important}.i-amphtml-story-interactive-post-selection.i-amphtml-story-interactive-has-data[dir=rtl] .i-amphtml-story-interactive-quiz-option:before{left:101%!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-option-selected[correct].i-amphtml-story-interactive-quiz-option{background:var(--correct-color)!important;box-shadow:var(--i-amphtml-interactive-chip-shadow-inset)!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-option-selected:not([correct]).i-amphtml-story-interactive-quiz-option{background:var(--incorrect-color)!important;box-shadow:var(--i-amphtml-interactive-chip-shadow-inset)!important}.i-amphtml-story-interactive-option-selected.i-amphtml-story-interactive-quiz-option{border:none!important;box-shadow:var(--i-amphtml-interactive-chip-shadow-inset)!important}.i-amphtml-story-interactive-post-selection.i-amphtml-story-interactive-has-data .i-amphtml-story-interactive-option-selected[correct].i-amphtml-story-interactive-quiz-option:before{background:var(--correct-color-shaded)!important;color:var(--correct-color-shaded)!important}.i-amphtml-story-interactive-post-selection.i-amphtml-story-interactive-has-data .i-amphtml-story-interactive-option-selected:not([correct]).i-amphtml-story-interactive-quiz-option:before{background:var(--incorrect-color-shaded)!important;color:var(--incorrect-color-shaded)!important}@keyframes option-select-incorrect{0%{border-color:var(--incorrect-color);background:var(--incorrect-color);opacity:0.2;transform:scale(0.1);color:var(--incorrect-color)}50%{opacity:1;color:var(--incorrect-color)}to{border-color:var(--incorrect-color);background:var(--incorrect-color);transform:scale(1);color:#fff}}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option .i-amphtml-story-interactive-quiz-answer-choice{animation:i-amphtml-story-interactive-quiz-answer-choice-landing-animation var(--i-amphtml-interactive-animation-time)!important;animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el1)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:nth-of-type(2) .i-amphtml-story-interactive-quiz-answer-choice{animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el2)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:nth-of-type(3) .i-amphtml-story-interactive-quiz-answer-choice{animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el3)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:nth-of-type(4) .i-amphtml-story-interactive-quiz-answer-choice{animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el4)!important}@keyframes i-amphtml-story-interactive-quiz-answer-choice-landing-animation{33%{transform:scale(.8)}}\n/*# sourceURL=/extensions/amp-story-interactive/0.1/amp-story-interactive-quiz.css*/";

  // extensions/amp-story-interactive/0.1/amp-story-interactive-quiz.js
  var _templateObject10;
  var _templateObject25;
  function _inherits6(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf6(subClass, superClass);
  }
  function _setPrototypeOf6(o, p) {
    _setPrototypeOf6 = Object.setPrototypeOf || function _setPrototypeOf10(o2, p2) {
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
    _getPrototypeOf6 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf10(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf6(o);
  }
  function _taggedTemplateLiteralLoose8(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var buildQuizTemplate = function buildQuizTemplate2(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose8(['\n    <div class="i-amphtml-story-interactive-quiz-container">\n      <div class="i-amphtml-story-interactive-prompt-container"></div>\n      <div class="i-amphtml-story-interactive-quiz-option-container"></div>\n    </div>\n  '])));
  };
  var buildOptionTemplate9 = function buildOptionTemplate10(option) {
    var html2 = htmlFor(option);
    return html2(_templateObject25 || (_templateObject25 = _taggedTemplateLiteralLoose8(['\n    <button\n      class="i-amphtml-story-interactive-quiz-option i-amphtml-story-interactive-option"\n      aria-live="polite"\n    >\n      <span\n        class="i-amphtml-story-interactive-quiz-answer-choice notranslate"\n      ></span>\n    </button>\n  '])));
  };
  var AmpStoryInteractiveQuiz = /* @__PURE__ */ function(_AmpStoryInteractive) {
    _inherits6(AmpStoryInteractiveQuiz2, _AmpStoryInteractive);
    var _super = _createSuper6(AmpStoryInteractiveQuiz2);
    function AmpStoryInteractiveQuiz2(element) {
      var _this;
      _this = _super.call(this, element, InteractiveType.QUIZ);
      _this.localizedAnswerChoices_ = [];
      return _this;
    }
    var _proto = AmpStoryInteractiveQuiz2.prototype;
    _proto.buildCallback = function buildCallback() {
      return _AmpStoryInteractive.prototype.buildCallback.call(this, CSS9);
    };
    _proto.buildComponent = function buildComponent() {
      this.rootEl_ = buildQuizTemplate(this.element);
      this.attachContent_(this.rootEl_);
      return this.rootEl_;
    };
    _proto.attachContent_ = function attachContent_(root) {
      var _this2 = this;
      this.attachPrompt_(root);
      this.localizedAnswerChoices_ = [LocalizedStringId_Enum.AMP_STORY_INTERACTIVE_QUIZ_ANSWER_CHOICE_A, LocalizedStringId_Enum.AMP_STORY_INTERACTIVE_QUIZ_ANSWER_CHOICE_B, LocalizedStringId_Enum.AMP_STORY_INTERACTIVE_QUIZ_ANSWER_CHOICE_C, LocalizedStringId_Enum.AMP_STORY_INTERACTIVE_QUIZ_ANSWER_CHOICE_D].map(function(choice) {
        return _this2.localizationService.getLocalizedString(choice);
      });
      var optionContainer = this.rootEl_.querySelector(".i-amphtml-story-interactive-quiz-option-container");
      this.options_.forEach(function(option, index) {
        return optionContainer.appendChild(_this2.configureOption_(option, index));
      });
    };
    _proto.configureOption_ = function configureOption_(option, index) {
      var convertedOption = buildOptionTemplate9(this.element);
      var answerChoiceEl = convertedOption.querySelector(".i-amphtml-story-interactive-quiz-answer-choice");
      answerChoiceEl.textContent = this.localizedAnswerChoices_[index];
      convertedOption.optionIndex_ = option["optionIndex"];
      var optionText = document.createElement("span");
      optionText.classList.add("i-amphtml-story-interactive-quiz-option-text");
      optionText.textContent = option["text"];
      convertedOption.appendChild(optionText);
      var percentageText = document.createElement("span");
      percentageText.classList.add("i-amphtml-story-interactive-quiz-percentage-text");
      convertedOption.appendChild(percentageText);
      if ("correct" in option) {
        convertedOption.setAttribute("correct", "correct");
      }
      return convertedOption;
    };
    _proto.displayOptionsData = function displayOptionsData(optionsData) {
      if (!optionsData) {
        return;
      }
      var percentages = this.preprocessPercentages_(optionsData);
      this.getOptionElements().forEach(function(el, index) {
        var ariaDescription = obj_str_default({
          selected: optionsData[index].selected,
          correct: el.hasAttribute("correct"),
          incorrect: !el.hasAttribute("correct")
        });
        el.querySelector(".i-amphtml-story-interactive-quiz-answer-choice").setAttribute("aria-hidden", true);
        var optionText = el.querySelector(".i-amphtml-story-interactive-quiz-option-text");
        optionText.setAttribute("aria-label", ariaDescription + " " + optionText.textContent);
        el.querySelector(".i-amphtml-story-interactive-quiz-percentage-text").textContent = percentages[index] + "%";
        setStyle(el, "--option-percentage", percentages[index] + "%");
      });
    };
    return AmpStoryInteractiveQuiz2;
  }(AmpStoryInteractive);

  // build/amp-story-interactive-results-0.1.css.js
  var CSS10 = ".i-amphtml-story-interactive-results-container{font-family:Poppins,sans-serif!important;background:var(--i-amphtml-interactive-options-chip-background-color)!important;border-radius:var(--i-amphtml-interactive-chip-radius)!important;color:var(--i-amphtml-interactive-strong-text-color)!important;text-align:center!important;box-shadow:var(--i-amphtml-interactive-component-shadow)!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;-ms-flex-align:center!important;align-items:center!important;padding-bottom:1.25em!important}.i-amphtml-story-interactive-results-container.i-amphtml-story-interactive-has-image:not(.i-amphtml-story-interactive-has-score){padding-top:2.5em!important}.i-amphtml-story-interactive-has-score .i-amphtml-story-interactive-results-top{display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:justify!important;justify-content:space-between!important;padding:1em 1.5em!important;box-sizing:border-box!important;color:var(--interactive-prompt-text-color)!important}.i-amphtml-story-interactive-results-top{width:100%!important;border-top-left-radius:var(--i-amphtml-interactive-chip-radius)!important;border-top-right-radius:var(--i-amphtml-interactive-chip-radius)!important;display:none!important}.i-amphtml-story-interactive-has-score:not(.i-amphtml-story-interactive-has-image) .i-amphtml-story-interactive-results-top{background:var(--interactive-prompt-background)!important}.i-amphtml-story-interactive-results-top-score{font-weight:700!important;font-size:.75em!important;line-height:1em!important;letter-spacing:.15em!important;text-transform:uppercase!important}[dir=rtl] .i-amphtml-story-interactive-results-top-score{left:auto!important;right:1.25em!important}.i-amphtml-story-interactive-results-top-value{font-weight:700!important;font-size:1.75em!important;line-height:1!important}.i-amphtml-story-interactive-results-top-value>span:nth-child(2){font-size:.5em!important}[dir=rtl] .i-amphtml-story-interactive-results-top-value{left:.7em!important;right:auto!important}.i-amphtml-story-interactive-results-container:not(.i-amphtml-story-interactive-has-score){--i-amphtml-story-interactive-score-display:none!important}.i-amphtml-story-interactive-results-container:not(.i-amphtml-story-interactive-has-image) .i-amphtml-story-interactive-results-image-border{display:none!important}.i-amphtml-story-interactive-results-image{width:8.75em!important;height:8.75em!important;background-size:cover!important;background-position:50%!important;border-radius:50%!important}.i-amphtml-story-interactive-results-image-border{margin:0px 10px!important;padding:8px!important;border-radius:50%!important;border:2px solid var(--interactive-accent-color)!important}.i-amphtml-story-interactive-results-prompt{text-transform:uppercase!important;font-size:.75em!important;margin-top:1.75em!important;font-weight:700!important;letter-spacing:.2em!important}.i-amphtml-story-interactive-results-top-transparent.i-amphtml-story-interactive-has-score:not(.i-amphtml-story-interactive-has-image) .i-amphtml-story-interactive-results-prompt{margin-top:0px!important}.i-amphtml-story-interactive-results-title{font-size:1.75em!important;font-weight:700!important}.i-amphtml-story-interactive-results-description{font-size:.875em!important;text-align:center!important;color:var(--i-amphtml-interactive-option-text-color)!important;margin-top:.5em!important;padding:0px 1.4em!important}\n/*# sourceURL=/extensions/amp-story-interactive/0.1/amp-story-interactive-results.css*/";

  // extensions/amp-story-interactive/0.1/amp-story-interactive-results.js
  var _templateObject11;
  var _templateObject26;
  function _inherits7(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf7(subClass, superClass);
  }
  function _setPrototypeOf7(o, p) {
    _setPrototypeOf7 = Object.setPrototypeOf || function _setPrototypeOf10(o2, p2) {
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
    _getPrototypeOf7 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf10(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf7(o);
  }
  function _taggedTemplateLiteralLoose9(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var buildResultsTemplate = function buildResultsTemplate2(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose9(['\n    <div class="i-amphtml-story-interactive-results-container">\n      <div class="i-amphtml-story-interactive-results-image-border">\n        <div class="i-amphtml-story-interactive-results-image"></div>\n      </div>\n      <div class="i-amphtml-story-interactive-results-prompt"></div>\n      <div class="i-amphtml-story-interactive-results-title"></div>\n      <div class="i-amphtml-story-interactive-results-description"></div>\n    </div>\n  '])));
  };
  var buildResultsTopTemplate = function buildResultsTopTemplate2(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject26 || (_templateObject26 = _taggedTemplateLiteralLoose9(['\n    <div class="i-amphtml-story-interactive-results-top">\n      <div class="i-amphtml-story-interactive-results-top-score">SCORE:</div>\n      <div class="i-amphtml-story-interactive-results-top-value">\n        <span class="i-amphtml-story-interactive-results-top-value-number"\n          >100</span\n        ><span>%</span>\n      </div>\n    </div>\n  '])));
  };
  var HAS_IMAGE_CLASS = "i-amphtml-story-interactive-has-image";
  var HAS_SCORE_CLASS = "i-amphtml-story-interactive-has-score";
  var processResults = function processResults2(interactiveState, options) {
    var processStrategy = decideStrategy(options) === "category" ? processResultsCategory : processResultsPercentage;
    return processStrategy(interactiveState, options);
  };
  var processResultsCategory = function processResultsCategory2(interactiveState, options) {
    var result = {
      category: null,
      percentage: null
    };
    var categories = {};
    options.forEach(function(option) {
      if (option.resultscategory) {
        categories[option.resultscategory] = 0;
      }
    });
    Object.values(interactiveState).forEach(function(e) {
      if (e.type == InteractiveType.POLL) {
        if (e.option && e.option.resultscategory && categories[e.option.resultscategory] != null) {
          categories[e.option.resultscategory] += 1;
        }
      }
    });
    result.category = Object.keys(categories).reduce(function(a, b) {
      return categories[a] >= categories[b] ? a : b;
    });
    return result;
  };
  var processResultsPercentage = function processResultsPercentage2(interactiveState, options) {
    var result = {
      category: null,
      percentage: null
    };
    var quizCount = 0;
    var quizCorrect = 0;
    Object.values(interactiveState).forEach(function(e) {
      if (e.type == InteractiveType.QUIZ) {
        quizCount += 1;
        if (e.option && e.option.correct != null) {
          quizCorrect += 1;
        }
      }
    });
    result.percentage = quizCount == 0 ? 0 : 100 * (quizCorrect / quizCount);
    var minThresholdDiff = -100;
    options.forEach(function(option) {
      var currThresholdDiff = result.percentage - parseFloat(option.resultsthreshold);
      if (currThresholdDiff >= 0 && (minThresholdDiff > currThresholdDiff || minThresholdDiff < 0) || currThresholdDiff < 0 && minThresholdDiff < 0 && currThresholdDiff > minThresholdDiff) {
        result.category = option.resultscategory;
        minThresholdDiff = currThresholdDiff;
      }
    });
    return result;
  };
  var decideStrategy = function decideStrategy2(options) {
    return options.some(function(o) {
      return o.resultsthreshold != void 0;
    }) ? "percentage" : "category";
  };
  var AmpStoryInteractiveResults = /* @__PURE__ */ function(_AmpStoryInteractive) {
    _inherits7(AmpStoryInteractiveResults2, _AmpStoryInteractive);
    var _super = _createSuper7(AmpStoryInteractiveResults2);
    function AmpStoryInteractiveResults2(element) {
      return _super.call(this, element, InteractiveType.RESULTS, [2, 4]);
    }
    var _proto = AmpStoryInteractiveResults2.prototype;
    _proto.buildCallback = function buildCallback(additionalCSS) {
      if (additionalCSS === void 0) {
        additionalCSS = "";
      }
      return _AmpStoryInteractive.prototype.buildCallback.call(this, CSS10 + additionalCSS);
    };
    _proto.buildComponent = function buildComponent() {
      this.rootEl_ = buildResultsTemplate(this.element);
      this.buildTop();
      return this.rootEl_;
    };
    _proto.buildTop = function buildTop() {
      this.rootEl_.prepend(buildResultsTopTemplate(this.element));
    };
    _proto.layoutCallback = function layoutCallback() {
      var _this = this;
      if (this.element.hasAttribute("prompt-text")) {
        this.rootEl_.querySelector(".i-amphtml-story-interactive-results-prompt").textContent = this.element.getAttribute("prompt-text");
      }
      this.storeService_.subscribe(StateProperty.INTERACTIVE_REACT_STATE, function(data) {
        return _this.onInteractiveReactStateUpdate(data);
      }, true);
    };
    _proto.onInteractiveReactStateUpdate = function onInteractiveReactStateUpdate(interactiveState) {
      var _this2 = this;
      var results = processResults(interactiveState, this.options_);
      this.rootEl_.classList.toggle(HAS_SCORE_CLASS, results.percentage != null);
      this.rootEl_.querySelector(".i-amphtml-story-interactive-results-top-value-number").textContent = (results.percentage || 0).toFixed(0);
      this.options_.forEach(function(e) {
        if (e.resultscategory === results.category) {
          _this2.mutateElement(function() {
            _this2.updateCategory_(e);
            _this2.updateToPostSelectionState_(null);
          });
        }
      });
    };
    _proto.updateCategory_ = function updateCategory_(categorySelected) {
      this.rootEl_.classList.toggle(HAS_IMAGE_CLASS, categorySelected.image != null);
      if (categorySelected.image) {
        setStyle(this.rootEl_.querySelector(".i-amphtml-story-interactive-results-image"), "background", "url(" + categorySelected.image + ")");
      }
      this.rootEl_.querySelector(".i-amphtml-story-interactive-results-title").textContent = categorySelected.resultscategory;
      this.rootEl_.querySelector(".i-amphtml-story-interactive-results-description").textContent = categorySelected.text || "";
      this.rootEl_.classList.toggle("i-amphtml-story-interactive-results-top-transparent", this.scoreBackgroundIsTransparent_());
    };
    _proto.handleTap_ = function handleTap_(unusedEvent) {
    };
    _proto.displayOptionsData = function displayOptionsData(unusedOptionsData) {
    };
    _proto.updateStoryStoreState_ = function updateStoryStoreState_(unusedOption) {
    };
    _proto.scoreBackgroundIsTransparent_ = function scoreBackgroundIsTransparent_() {
      var bgColor = computedStyle(this.win, dev().assertElement(this.rootEl_.querySelector(".i-amphtml-story-interactive-results-top")))["background"];
      if (bgColor.startsWith("rgba") && bgColor.lastIndexOf("rgb") == 0) {
        return parseFloat(bgColor.split(", ")[3].split(")")[0]) == 0;
      }
      return false;
    };
    return AmpStoryInteractiveResults2;
  }(AmpStoryInteractive);

  // build/amp-story-interactive-results-detailed-0.1.css.js
  var CSS11 = ".i-amphtml-story-interactive-results-detailed{position:relative!important;height:18em!important;width:100%!important}.i-amphtml-story-interactive-results-image{margin:4em auto auto!important;border:0.3em solid var(--interactive-accent-color)!important}.i-amphtml-story-interactive-results-result{border-radius:50%!important;background-position:50%!important;background-size:cover!important;background-color:var(\n    --i-amphtml-interactive-placeholder-background\n  )!important}\n/*# sourceURL=/extensions/amp-story-interactive/0.1/amp-story-interactive-results-detailed.css*/";

  // extensions/amp-story-interactive/0.1/amp-story-interactive-results-detailed.js
  var _templateObject12;
  function _inherits8(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf8(subClass, superClass);
  }
  function _setPrototypeOf8(o, p) {
    _setPrototypeOf8 = Object.setPrototypeOf || function _setPrototypeOf10(o2, p2) {
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
    _getPrototypeOf8 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf10(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf8(o);
  }
  function _taggedTemplateLiteralLoose10(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var buildResultsDetailedTemplate = function buildResultsDetailedTemplate2(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose10(['\n    <div class="i-amphtml-story-interactive-results-container">\n      <div class="i-amphtml-story-interactive-results-prompt"></div>\n      <div class="i-amphtml-story-interactive-results-title"></div>\n      <div class="i-amphtml-story-interactive-results-detailed">\n        <div class="i-amphtml-story-interactive-results-image"></div>\n      </div>\n      <div class="i-amphtml-story-interactive-results-description"></div>\n    </div>\n  '])));
  };
  var AmpStoryInteractiveResultsDetailed = /* @__PURE__ */ function(_AmpStoryInteractiveR) {
    _inherits8(AmpStoryInteractiveResultsDetailed2, _AmpStoryInteractiveR);
    var _super = _createSuper8(AmpStoryInteractiveResultsDetailed2);
    function AmpStoryInteractiveResultsDetailed2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.resultEls_ = {};
      _this.resultsContainer_ = null;
      _this.usePercentage_ = false;
      return _this;
    }
    var _proto = AmpStoryInteractiveResultsDetailed2.prototype;
    _proto.buildCallback = function buildCallback() {
      return _AmpStoryInteractiveR.prototype.buildCallback.call(this, CSS11);
    };
    _proto.buildComponent = function buildComponent() {
      this.rootEl_ = buildResultsDetailedTemplate(this.element);
      this.buildTop();
      this.resultsContainer_ = this.rootEl_.querySelector(".i-amphtml-story-interactive-results-detailed");
      this.usePercentage_ = decideStrategy(this.options_) === "percentage";
      return this.rootEl_;
    };
    _proto.onInteractiveReactStateUpdate = function onInteractiveReactStateUpdate(interactiveState) {
      var _this2 = this;
      var components = Object.values(interactiveState);
      var updateLayout = false;
      components.forEach(function(e) {
        if (_this2.usePercentage_ && e.type === InteractiveType.QUIZ || !_this2.usePercentage_ && e.type === InteractiveType.POLL) {
          if (!_this2.resultEls_[e.interactiveId]) {
            updateLayout = true;
            _this2.createResultEl_(e);
          }
          _this2.updateAnsweredResult_(e);
        }
      });
      if (updateLayout) {
        this.positionResultEls_();
      }
      _AmpStoryInteractiveR.prototype.onInteractiveReactStateUpdate.call(this, interactiveState);
    };
    _proto.createResultEl_ = function createResultEl_(e) {
      var element = document.createElement("div");
      element.classList.add("i-amphtml-story-interactive-results-result");
      this.resultsContainer_.appendChild(element);
      this.resultEls_[e.interactiveId] = {
        element: element,
        answered: false
      };
    };
    _proto.updateAnsweredResult_ = function updateAnsweredResult_(e) {
      if (!e.option || this.resultEls_[e.interactiveId].answered) {
        return;
      }
      if (e.option.image) {
        setImportantStyles(this.resultEls_[e.interactiveId].element, {
          "background-image": "url(" + e.option.image + ")"
        });
      } else {
        this.resultEls_[e.interactiveId].element.textContent = e.option.text;
      }
      this.resultEls_[e.interactiveId].answered = true;
    };
    _proto.positionResultEls_ = function positionResultEls_() {
      for (var id in this.resultEls_) {
        setImportantStyles(this.resultEls_[id].element, {
          "height": "5em",
          "width": "5em"
        });
      }
    };
    return AmpStoryInteractiveResultsDetailed2;
  }(AmpStoryInteractiveResults);

  // build/amp-story-interactive-slider-0.1.css.js
  var CSS12 = '.i-amphtml-story-interactive-slider-container{--average:0%;--fraction:0;--percentage:calc(var(--fraction)*100%)!important;--percentage-corrected:calc(2.5% + var(--percentage)*0.95)!important;--thumb-size:1.5em!important;--gradient-angle:90deg!important;--translate-x-center:-50%!important}.i-amphtml-story-interactive-slider-input-container{display:-ms-flexbox!important;display:flex!important;background:var(--i-amphtml-interactive-option-background-color)!important;border-radius:2em!important;box-shadow:var(--i-amphtml-interactive-component-shadow)!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0em 1em!important}.i-amphtml-story-interactive-slider-bubble{position:absolute!important;--scale-var:calc(var(--fraction) + 1)!important;transform:translateY(calc(var(--scale-var)*-70% - 40%)) scale(var(--scale-var))!important;text-align:center!important;font-weight:700!important;height:100%!important;width:100%!important;color:#fff!important}[dir=rtl].i-amphtml-story-interactive-slider-container{--gradient-angle:270deg!important;--translate-x-center:50%!important}[dir=rtl] .i-amphtml-story-interactive-slider-bubble-wrapper{right:var(--percentage)!important}[type=emoji] .i-amphtml-story-interactive-slider-bubble{display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important}[type=percentage] .i-amphtml-story-interactive-slider-bubble{line-height:2.9em!important}.i-amphtml-story-interactive-slider-bubble:after{position:absolute!important;content:""!important;box-sizing:border-box!important;height:100%!important;width:100%!important;top:0%!important;background:var(--interactive-accent-color)!important;z-index:-1!important;left:50%!important;transform:translateX(-50%) rotate(45deg)!important;border:0.1em solid transparent!important;border-radius:50% 50% 0% 50%!important;box-shadow:0em 0em 0.5em rgba(0,0,0,0.25)!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-slider-bubble{z-index:2!important;transform:scale(0.9)!important;transition:transform var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-slider-bubble:after{cursor:initial!important;border:0.1em solid var(--i-amphtml-interactive-option-background-color)!important;border-bottom-right-radius:50%!important;transition:border-radius var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve),border-color var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important}.i-amphtml-story-interactive-slider-bubble-wrapper{transform:translate(var(--translate-x-center),-50%) scale(0)!important;position:absolute!important;width:2.8em!important;height:2.8em!important;top:50%!important;left:var(--percentage)!important;transition:transform var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important}.i-amphtml-story-interactive-mid-selection .i-amphtml-story-interactive-slider-bubble-wrapper,.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-slider-bubble-wrapper{transform:translate(var(--translate-x-center),-50%) scale(1)!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-slider-bubble-wrapper{z-index:2!important}.i-amphtml-story-interactive-slider-average-indicator{transform:translate(-50%,-50%) scale(0)!important;transition:transform var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important;width:2em!important;height:2em!important;top:50%!important;left:var(--average)!important;opacity:0.6!important;border-radius:50%;position:absolute}.i-amphtml-story-interactive-active.i-amphtml-story-interactive-has-data .i-amphtml-story-interactive-slider-average-indicator{transform:translate(-50%,-50%) scale(1)!important}.i-amphtml-story-interactive-has-data .i-amphtml-story-interactive-slider-average-indicator span{--pulse-animation-duration:3s;transform:scale(0);box-sizing:border-box;content:"";width:2em;height:2em;position:absolute;box-shadow:inset 0 0 0 0.05em var(--i-amphtml-interactive-strong-text-color);border-radius:50%;animation:pulse var(--pulse-animation-duration) linear infinite forwards!important}.i-amphtml-story-interactive-has-data .i-amphtml-story-interactive-slider-average-indicator span:first-child{animation-delay:calc(var(--pulse-animation-duration)*-0.33)!important}.i-amphtml-story-interactive-has-data .i-amphtml-story-interactive-slider-average-indicator span:nth-child(2){animation-delay:calc(var(--pulse-animation-duration)*-0.66)!important}@keyframes pulse{0%{opacity:0;transform:scale(0.15);box-shadow:inset 0 0 0 3em var(--i-amphtml-interactive-strong-text-color)}10%{opacity:1;transform:scale(0.2);box-shadow:inset 0 0 0 0.5em var(--i-amphtml-interactive-strong-text-color)}20%{opacity:1;box-shadow:inset 0 0 0 0.4em var(--i-amphtml-interactive-strong-text-color)}60%{opacity:1}to{opacity:0;transform:scale(1);box-shadow:inset 0 0 0 0.08em var(--i-amphtml-interactive-strong-text-color)}}.i-amphtml-story-interactive-slider-average-text{position:absolute!important;transform:translate(-50%,100%) scale(0)!important;bottom:260%!important;line-height:1.5em!important;font-size:0.7em!important;padding:0.5em 1.5em!important;color:#000!important;z-index:1!important;border-radius:1.5em!important;box-shadow:0 0.4em 0.5em -0.25em rgba(0,0,0,0.2),0 0.3em 1.4em 0.25em rgba(0,0,0,0.14),0 0.75em 1em 0.125em rgba(0,0,0,0.14)!important;background-color:#fff!important}.i-amphtml-story-interactive-slider-average-text:after{content:""!important;position:absolute!important;transform:translateX(-50%) rotate(90deg)!important;left:50%!important;top:90%!important;border:0.75em solid transparent!important;border-left-color:#fff!important}.i-amphtml-story-interactive-active.i-amphtml-story-interactive-has-data .i-amphtml-story-interactive-slider-average-text{left:var(--average)!important;animation:average-pop 3s 0.3s forwards}@keyframes average-pop{0%,to{transform:translate(-50%,35%);opacity:0}10%,90%{opacity:1;transform:translate(-50%)}}[type=emoji] .i-amphtml-story-interactive-slider-bubble span{display:inline-block!important;font-size:3em!important;transform:scale(0.5)!important}.i-amphtml-story-interactive-slider-input{-webkit-opacity:1!important;-webkit-appearance:none!important;font-size:inherit!important;height:1em!important;width:calc(100% + var(--thumb-size))!important;margin:0em calc(var(--thumb-size)*-0.5)!important;border-radius:0.5em!important;position:absolute!important;pointer-events:all!important;cursor:pointer!important;background:transparent!important;z-index:1!important}.i-amphtml-story-interactive-slider-input-size{position:relative!important;-ms-flex:1!important;flex:1!important;margin:1em calc(var(--thumb-size)*0.5)!important;height:1em!important}.i-amphtml-story-interactive-slider-input-size:after,.i-amphtml-story-interactive-slider-input-size:before{content:""!important;background:linear-gradient(var(--gradient-angle),var(--interactive-accent-color) var(--percentage-corrected),transparent var(--percentage-corrected))!important;width:100%!important;height:100%!important;border-radius:0.5em!important;position:absolute!important;margin:0em calc(var(--thumb-size)*-0.5)!important;width:calc(100% + var(--thumb-size))!important}.i-amphtml-story-interactive-slider-input-size:after{background:linear-gradient(var(--gradient-angle),#fff,var(--interactive-accent-color) var(--percentage-corrected))!important;opacity:0.3!important;z-index:0!important}.i-amphtml-story-interactive-slider-input::-webkit-slider-thumb{transform:rotate(45deg)!important;-webkit-appearance:none!important;width:var(--thumb-size)!important;height:var(--thumb-size)!important;background:var(--interactive-accent-color)!important;border-radius:50%!important;position:relative!important;-webkit-transition:border-radius var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve),box-shadow var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important;transition:border-radius var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve),box-shadow var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important;border:none!important;z-index:1!important}.i-amphtml-story-interactive-slider-input::-moz-range-thumb{transform:rotate(45deg)!important;width:var(--thumb-size)!important;height:var(--thumb-size)!important;background:var(--interactive-accent-color)!important;border-radius:50%!important;border:none!important;-moz-transition:border-radius var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve),box-shadow var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important;transition:border-radius var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve),box-shadow var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important}.i-amphtml-story-interactive-mid-selection .i-amphtml-story-interactive-slider-input::-webkit-slider-thumb{box-shadow:0em 0em 0.5em rgba(0,0,0,0.25),0em 0em 0em 0.07em var(--i-amphtml-interactive-option-background-color)!important;border-top-left-radius:0%!important}.i-amphtml-story-interactive-mid-selection .i-amphtml-story-interactive-slider-input::-moz-range-thumb{box-shadow:0em 0em 0.5em rgba(0,0,0,0.25),0em 0em 0em 0.07em var(--i-amphtml-interactive-option-background-color)!important;border-top-left-radius:0%!important}.i-amphtml-story-interactive-slider-input[disabled]{pointer-events:none!important}\n/*# sourceURL=/extensions/amp-story-interactive/0.1/amp-story-interactive-slider.css*/';

  // extensions/amp-story-interactive/0.1/amp-story-interactive-slider.js
  var _templateObject13;
  function _inherits9(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf9(subClass, superClass);
  }
  function _setPrototypeOf9(o, p) {
    _setPrototypeOf9 = Object.setPrototypeOf || function _setPrototypeOf10(o2, p2) {
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
    _getPrototypeOf9 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf10(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf9(o);
  }
  function _taggedTemplateLiteralLoose11(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var buildSliderTemplate = function buildSliderTemplate2(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose11(['\n    <div class="i-amphtml-story-interactive-slider-container">\n      <div class="i-amphtml-story-interactive-prompt-container"></div>\n      <div class="i-amphtml-story-interactive-slider-input-container">\n        <div class="i-amphtml-story-interactive-slider-input-size">\n          <input\n            class="i-amphtml-story-interactive-slider-input"\n            type="range"\n            min="0"\n            max="100"\n            step="0.1"\n            value="0"\n          />\n          <div class="i-amphtml-story-interactive-slider-bubble-wrapper">\n            <div class="i-amphtml-story-interactive-slider-bubble"></div>\n          </div>\n          <div class="i-amphtml-story-interactive-slider-average-indicator">\n            <span></span><span></span><span></span>\n          </div>\n          <div class="i-amphtml-story-interactive-slider-average-text">\n            Average answer\n          </div>\n        </div>\n      </div>\n    </div>\n  '])));
  };
  var easeInOutCubic = function easeInOutCubic2(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };
  var SliderType = {
    PERCENTAGE: "percentage",
    EMOJI: "emoji"
  };
  var HINT_ANIMATION_DURATION_MS = 1500;
  var HINT_ANIMATION_DELAY_MS = 500;
  var AmpStoryInteractiveSlider = /* @__PURE__ */ function(_AmpStoryInteractive) {
    _inherits9(AmpStoryInteractiveSlider2, _AmpStoryInteractive);
    var _super = _createSuper9(AmpStoryInteractiveSlider2);
    function AmpStoryInteractiveSlider2(element) {
      var _this;
      _this = _super.call(this, element, InteractiveType.SLIDER, [0, 1]);
      _this.bubbleEl_ = null;
      _this.inputEl_ = null;
      _this.sliderType_ = SliderType.PERCENTAGE;
      _this.landingAnimationDelayTimeout_ = null;
      _this.currentRAF_ = null;
      return _this;
    }
    var _proto = AmpStoryInteractiveSlider2.prototype;
    _proto.displayOptionsData = function displayOptionsData(responseData) {
      var average = this.calculateWeightedAverage_(responseData);
      setImportantStyles(this.rootEl_, {
        "--average": average + "%"
      });
    };
    _proto.calculateWeightedAverage_ = function calculateWeightedAverage_(responseData) {
      var numerator = 0;
      var denominator = 0;
      for (var i = 0; i < responseData.length; i++) {
        numerator += responseData[i].index * responseData[i].count;
        denominator += responseData[i].count;
      }
      if (denominator == 0) {
        return 0;
      }
      return numerator / denominator;
    };
    _proto.updateComponentWithData = function updateComponentWithData(data) {
      var _this2 = this;
      this.optionsData_ = this.orderData_(data);
      this.optionsData_.forEach(function(response) {
        if (response.selected) {
          _this2.hasUserSelection_ = true;
          _this2.mutateElement(function() {
            _this2.inputEl_.value = response.index;
            _this2.onDrag_();
            _this2.onRelease_();
            _this2.updateToPostSelectionState_(null);
          });
        }
      });
    };
    _proto.buildComponent = function buildComponent() {
      this.rootEl_ = buildSliderTemplate(this.element);
      this.bubbleEl_ = this.rootEl_.querySelector(".i-amphtml-story-interactive-slider-bubble");
      this.inputEl_ = this.rootEl_.querySelector(".i-amphtml-story-interactive-slider-input");
      if (this.options_.length > 0) {
        this.sliderType_ = SliderType.EMOJI;
        var emojiWrapper = this.win.document.createElement("span");
        emojiWrapper.textContent = this.options_[0].text;
        this.bubbleEl_.appendChild(emojiWrapper);
      }
      this.rootEl_.setAttribute("type", this.sliderType_);
      this.attachPrompt_(this.rootEl_);
      return this.rootEl_;
    };
    _proto.buildCallback = function buildCallback() {
      return _AmpStoryInteractive.prototype.buildCallback.call(this, CSS12);
    };
    _proto.initializeListeners_ = function initializeListeners_() {
      var _this3 = this;
      _AmpStoryInteractive.prototype.initializeListeners_.call(this);
      this.inputEl_.addEventListener("input", function() {
        cancelAnimationFrame(_this3.currentRAF_);
        _this3.onDrag_();
      });
      this.inputEl_.addEventListener("change", function() {
        _this3.onRelease_();
      });
      this.inputEl_.addEventListener("touchmove", function(event) {
        return event.stopPropagation();
      }, true);
      this.storeService_.subscribe(StateProperty.CURRENT_PAGE_ID, function(currPageId) {
        var isPostState = _this3.rootEl_.classList.contains(POST_SELECTION_CLASS);
        if (isPostState) {
          return;
        }
        if (currPageId != _this3.getPageEl().getAttribute("id")) {
          cancelAnimationFrame(_this3.currentRAF_);
          clearTimeout(_this3.landingAnimationDelayTimeout_);
          _this3.inputEl_.value = 0;
          _this3.onDrag_();
          _this3.rootEl_.classList.remove(MID_SELECTION_CLASS);
          return;
        }
        var startTime;
        var animateFrame = function animateFrame2(currTime) {
          var hasData = _this3.rootEl_.classList.contains("i-amphtml-story-interactive-has-data");
          if (hasData) {
            return;
          }
          if (!startTime) {
            startTime = currTime;
          }
          var elapsed = currTime - startTime;
          if (HINT_ANIMATION_DURATION_MS < elapsed) {
            _this3.rootEl_.classList.remove(MID_SELECTION_CLASS);
            return;
          }
          var timePercentage = elapsed / HINT_ANIMATION_DURATION_MS;
          var val = timePercentage < 0.5 ? easeInOutCubic(timePercentage * 2) * 30 : easeInOutCubic(2 - timePercentage * 2) * 30;
          _this3.inputEl_.value = val;
          _this3.onDrag_();
          _this3.currentRAF_ = requestAnimationFrame(animateFrame2);
        };
        _this3.landingAnimationDelayTimeout_ = setTimeout(function() {
          return requestAnimationFrame(animateFrame);
        }, HINT_ANIMATION_DELAY_MS);
      }, true);
    };
    _proto.onDrag_ = function onDrag_() {
      var value = this.inputEl_.value;
      if (this.sliderType_ == SliderType.PERCENTAGE) {
        this.bubbleEl_.textContent = Math.round(value) + "%";
      }
      this.rootEl_.classList.add(MID_SELECTION_CLASS);
      setImportantStyles(this.rootEl_, {
        "--fraction": value / 100
      });
    };
    _proto.onRelease_ = function onRelease_() {
      this.updateToPostSelectionState_();
      this.inputEl_.setAttribute("disabled", "");
      this.rootEl_.classList.remove(MID_SELECTION_CLASS);
      this.handleOptionSelection_(Math.round(this.inputEl_.value));
    };
    _proto.getNumberOfOptions = function getNumberOfOptions() {
      return 101;
    };
    return AmpStoryInteractiveSlider2;
  }(AmpStoryInteractive);

  // extensions/amp-story-interactive/0.1/amp-story-interactive.js
  AMP.registerElement("amp-story-interactive-binary-poll", AmpStoryInteractiveBinaryPoll);
  AMP.registerElement("amp-story-interactive-img-poll", AmpStoryInteractiveImgPoll);
  AMP.registerElement("amp-story-interactive-img-quiz", AmpStoryInteractiveImgQuiz);
  AMP.registerElement("amp-story-interactive-poll", AmpStoryInteractivePoll);
  AMP.registerElement("amp-story-interactive-quiz", AmpStoryInteractiveQuiz);
  AMP.registerElement("amp-story-interactive-slider", AmpStoryInteractiveSlider);
  AMP.registerElement("amp-story-interactive-slider", AmpStoryInteractiveSlider);
  AMP.registerElement("amp-story-interactive-slider", AmpStoryInteractiveSlider);
  AMP.registerElement("amp-story-interactive-results", AmpStoryInteractiveResults);
  AMP.registerElement("amp-story-interactive-results-detailed", AmpStoryInteractiveResultsDetailed);
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
//# sourceMappingURL=amp-story-interactive-0.1.max.js.map
