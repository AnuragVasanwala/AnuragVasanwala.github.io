(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-auto-ads",ev:"0.1",l:true,f:(function(AMP,_){
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

  // src/core/mode/prod.js
  function isProd() {
    return false;
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
  function devAssert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
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

  // src/core/window/index.js
  function toWin(winOrNull) {
    return winOrNull;
  }
  function getWin(node) {
    return toWin((node.ownerDocument || node).defaultView);
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
    devAssert(isServiceRegistered(holder, id), "Expected service " + id + " to be registered");
    var services = getServices(holder);
    var s = services[id];
    if (!s.obj) {
      devAssert(s.ctor, "Service " + id + " registered without ctor nor impl.");
      devAssert(s.context, "Service " + id + " registered without context.");
      s.obj = new s.ctor(s.context);
      devAssert(s.obj, "Service " + id + " constructed to null.");
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

  // src/experiments/index.js
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
        for (var _iterator = _createForOfIteratorHelperLoose(optedInExperiments), _step; !(_step = _iterator()).done; ) {
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
      for (var _iterator2 = _createForOfIteratorHelperLoose(allowedUrlOptIn), _step2; !(_step2 = _iterator2()).done; ) {
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
    for (var _iterator3 = _createForOfIteratorHelperLoose(tokens), _step3; !(_step3 = _iterator3()).done; ) {
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

  // src/core/assert/dev.js
  function devAssertDceCheck() {
    if (self.__AMP_ASSERTION_CHECK) {
      console.log("__devAssert_sentinel__");
    }
  }
  function devAssert2(shouldBeTruthy, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    if (isMinified()) {
      return shouldBeTruthy;
    }
    devAssertDceCheck();
    return assert("", shouldBeTruthy, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
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

  // src/core/dom/query.js
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
  function createElementWithAttributes(doc, tagName, attributes) {
    var element = doc.createElement(tagName);
    return addAttributesToElement(element, attributes);
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

  // extensions/amp-auto-ads/0.1/adsense-network-config.js
  var AdSenseNetworkConfig = /* @__PURE__ */ function() {
    function AdSenseNetworkConfig2(autoAmpAdsElement) {
      this.autoAmpAdsElement_ = autoAmpAdsElement;
    }
    var _proto = AdSenseNetworkConfig2.prototype;
    _proto.isEnabled = function isEnabled() {
      return true;
    };
    _proto.isResponsiveEnabled = function isResponsiveEnabled() {
      return true;
    };
    _proto.getConfigUrl = function getConfigUrl() {
      var docInfo = Services.documentInfoForDoc(this.autoAmpAdsElement_);
      var canonicalHostname = parseUrlDeprecated(docInfo.canonicalUrl).hostname;
      var win = getWin(this.autoAmpAdsElement_);
      return buildUrl("//pagead2.googlesyndication.com/getconfig/ama", {
        "client": this.autoAmpAdsElement_.getAttribute("data-ad-client"),
        "plah": canonicalHostname,
        "ama_t": "amp",
        "url": docInfo.canonicalUrl,
        "debug_experiment_id": (/(?:#|,)deid=([\d,]+)/i.exec(win.location.hash) || [])[1] || null
      }, 4096);
    };
    _proto.getAttributes = function getAttributes() {
      var attributesObj = dict({
        "type": "adsense",
        "data-ad-client": this.autoAmpAdsElement_.getAttribute("data-ad-client")
      });
      var dataAdHost = this.autoAmpAdsElement_.getAttribute("data-ad-host");
      var dataAdHostChannel = this.autoAmpAdsElement_.getAttribute("data-ad-host-channel");
      if (dataAdHost) {
        attributesObj["data-ad-host"] = dataAdHost;
        if (dataAdHostChannel) {
          attributesObj["data-ad-host-channel"] = dataAdHostChannel;
        }
      }
      return attributesObj;
    };
    _proto.getDefaultAdConstraints = function getDefaultAdConstraints() {
      var viewportHeight = Services.viewportForDoc(this.autoAmpAdsElement_).getSize().height;
      return {
        initialMinSpacing: viewportHeight,
        subsequentMinSpacing: [{
          adCount: 3,
          spacing: viewportHeight * 2
        }, {
          adCount: 6,
          spacing: viewportHeight * 3
        }],
        maxAdCount: 8
      };
    };
    _proto.getSizing = function getSizing() {
      return {};
    };
    return AdSenseNetworkConfig2;
  }();

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

  // extensions/amp-auto-ads/0.1/alright-network-config.js
  var AlrightNetworkConfig = /* @__PURE__ */ function() {
    function AlrightNetworkConfig2(autoAmpAdsElement) {
      this.autoAmpAdsElement_ = autoAmpAdsElement;
    }
    var _proto = AlrightNetworkConfig2.prototype;
    _proto.isEnabled = function isEnabled() {
      return true;
    };
    _proto.isResponsiveEnabled = function isResponsiveEnabled() {
      return false;
    };
    _proto.getConfigUrl = function getConfigUrl() {
      var docInfo = Services.documentInfoForDoc(this.autoAmpAdsElement_);
      var publisherId = this.autoAmpAdsElement_.getAttribute("data-publisher-id");
      var pageType = this.autoAmpAdsElement_.getAttribute("data-page-type");
      var contentCategory = this.autoAmpAdsElement_.getAttribute("data-content-category") || "";
      return buildUrl("//analytics.alright.network/amp/", {
        "p": publisherId,
        "t": pageType,
        "c": contentCategory,
        "u": docInfo.canonicalUrl,
        "w": window.screen.width,
        "h": window.screen.height
      }, 4096);
    };
    _proto.getAttributes = function getAttributes() {
      var attributes = dict({
        "width": 300,
        "height": 250,
        "layout": Layout_Enum.RESPONSIVE,
        "data-multi-size-validation": "false",
        "type": "doubleclick",
        "data-ad": "alright"
      });
      return attributes;
    };
    _proto.getDefaultAdConstraints = function getDefaultAdConstraints() {
      var viewportHeight = Services.viewportForDoc(this.autoAmpAdsElement_).getSize().height;
      return {
        initialMinSpacing: viewportHeight,
        subsequentMinSpacing: [{
          adCount: 3,
          spacing: viewportHeight * 2
        }, {
          adCount: 6,
          spacing: viewportHeight * 3
        }],
        maxAdCount: 8
      };
    };
    _proto.getSizing = function getSizing() {
      return {
        width: 300,
        height: 250
      };
    };
    return AlrightNetworkConfig2;
  }();

  // extensions/amp-auto-ads/0.1/denakop-network-config.js
  var DenakopNetworkConfig = /* @__PURE__ */ function() {
    function DenakopNetworkConfig2(autoAmpAdsElement) {
      this.autoAmpAdsElement_ = autoAmpAdsElement;
    }
    var _proto = DenakopNetworkConfig2.prototype;
    _proto.isEnabled = function isEnabled(unused) {
      return true;
    };
    _proto.isResponsiveEnabled = function isResponsiveEnabled() {
      return true;
    };
    _proto.getConfigUrl = function getConfigUrl() {
      var docInfo = Services.documentInfoForDoc(this.autoAmpAdsElement_);
      var accountId = this.autoAmpAdsElement_.getAttribute("data-account-id");
      if (accountId) {
        return buildUrl("https://v3.denakop.com/ad-request", {
          "a": accountId,
          "v": "amp",
          "u": docInfo.canonicalUrl
        }, 4096);
      }
      var publisherId = this.autoAmpAdsElement_.getAttribute("data-publisher-id");
      var tagId = this.autoAmpAdsElement_.getAttribute("data-tag-id");
      return buildUrl("//v2.denakop.com/ad-request/amp", {
        "p": publisherId,
        "t": tagId,
        "u": docInfo.canonicalUrl
      }, 4096);
    };
    _proto.getAttributes = function getAttributes() {
      var attributes = dict({
        "data-multi-size-validation": "false",
        "type": "doubleclick",
        "data-ad": "denakop",
        "style": "position:relative !important"
      });
      return attributes;
    };
    _proto.getDefaultAdConstraints = function getDefaultAdConstraints() {
      var viewportHeight = Services.viewportForDoc(this.autoAmpAdsElement_).getSize().height;
      return {
        initialMinSpacing: viewportHeight,
        subsequentMinSpacing: [{
          adCount: 4,
          spacing: viewportHeight * 2
        }, {
          adCount: 8,
          spacing: viewportHeight * 3
        }],
        maxAdCount: 20
      };
    };
    _proto.getSizing = function getSizing() {
      return {};
    };
    return DenakopNetworkConfig2;
  }();

  // extensions/amp-auto-ads/0.1/doubleclick-network-config.js
  var DoubleclickNetworkConfig = /* @__PURE__ */ function() {
    function DoubleclickNetworkConfig2(autoAmpAdsElement) {
      this.autoAmpAdsElement_ = autoAmpAdsElement;
    }
    var _proto = DoubleclickNetworkConfig2.prototype;
    _proto.isEnabled = function isEnabled(unused) {
      return true;
    };
    _proto.isResponsiveEnabled = function isResponsiveEnabled() {
      return false;
    };
    _proto.getConfigUrl = function getConfigUrl() {
      var docInfo = Services.documentInfoForDoc(this.autoAmpAdsElement_);
      var canonicalHostname = parseUrlDeprecated(docInfo.canonicalUrl).hostname;
      return buildUrl("//pagead2.googlesyndication.com/getconfig/ama", {
        "client": this.autoAmpAdsElement_.getAttribute("data-ad-legacy-client"),
        "plah": canonicalHostname,
        "ama_t": "amp",
        "url": docInfo.canonicalUrl
      }, 4096);
    };
    _proto.getAttributes = function getAttributes() {
      var attributes = dict({
        "type": "doubleclick",
        "data-slot": this.autoAmpAdsElement_.getAttribute("data-slot"),
        "json": this.autoAmpAdsElement_.getAttribute("data-json")
      });
      return attributes;
    };
    _proto.getDefaultAdConstraints = function getDefaultAdConstraints() {
      var viewportHeight = Services.viewportForDoc(this.autoAmpAdsElement_).getSize().height;
      return {
        initialMinSpacing: viewportHeight,
        subsequentMinSpacing: [{
          adCount: 3,
          spacing: viewportHeight * 2
        }, {
          adCount: 6,
          spacing: viewportHeight * 3
        }],
        maxAdCount: 8
      };
    };
    _proto.getSizing = function getSizing() {
      var experimentJson = tryParseJson(this.autoAmpAdsElement_.getAttribute("data-experiment"));
      if (experimentJson) {
        return {
          height: experimentJson["height"] ? Number(experimentJson["height"]) : 250,
          width: experimentJson["width"] ? Number(experimentJson["width"]) : void 0
        };
      }
      return {};
    };
    return DoubleclickNetworkConfig2;
  }();

  // extensions/amp-auto-ads/0.1/firstimpression.io-network-config.js
  var FirstImpressionIoConfig = /* @__PURE__ */ function() {
    function FirstImpressionIoConfig2(autoAmpAdsElement) {
      this.autoAmpAdsElement_ = autoAmpAdsElement;
      this.pvid64 = 0;
    }
    var _proto = FirstImpressionIoConfig2.prototype;
    _proto.isEnabled = function isEnabled(unused) {
      return true;
    };
    _proto.isResponsiveEnabled = function isResponsiveEnabled() {
      return false;
    };
    _proto.getConfigUrl = function getConfigUrl() {
      var _this = this;
      var previewId = 0;
      Services.documentInfoForDoc(this.autoAmpAdsElement_).pageViewId64.then(function(pageViewId64Value) {
        _this.pvid64 = pageViewId64Value;
      });
      var _window$location = window.location, hash = _window$location.hash, host = _window$location.host, pathname = _window$location.pathname, search = _window$location.search;
      var hashParams = Object.assign(parseQueryString(hash), parseQueryString(search));
      var docInfo = Services.documentInfoForDoc(this.autoAmpAdsElement_);
      var previewFlowRegex = /amp\/fi\/(\d+)\//;
      var previewFlowParam = pathname.match(previewFlowRegex);
      if (previewFlowParam != null && previewFlowParam.length == 2) {
        previewId = previewFlowParam[1];
      }
      var fiReveal = hashParams["fi_reveal"];
      var fiDemand = hashParams["fi_demand"];
      var fiGeo = hashParams["fi_geo"];
      var fiDisable = hashParams["disable_fi"];
      var cdnHost = hashParams["fi_cdnhost"] || (previewId ? host : "cdn.firstimpression.io");
      var cdnpath = hashParams["fi_cdnpath"] || (previewId ? "/amp-preview.php" : "/delivery/amp.php");
      var websiteId = this.autoAmpAdsElement_.getAttribute("data-website-id");
      var targeting = this.autoAmpAdsElement_.getAttribute("data-targeting");
      var queryParams = {
        "id": websiteId,
        "url": docInfo.canonicalUrl,
        "w": window.screen.width,
        "h": window.screen.height
      };
      if (targeting) {
        queryParams["targeting"] = targeting;
      }
      if (fiReveal !== void 0) {
        queryParams["fi_reveal"] = fiReveal;
      }
      if (fiDemand !== void 0) {
        queryParams["fi_demand"] = fiDemand;
      }
      if (fiGeo) {
        queryParams["fi_geo"] = fiGeo;
      }
      if (fiDisable) {
        queryParams["disable_fi"] = fiDisable;
      }
      if (previewId) {
        queryParams["preview_id"] = previewId;
      }
      return buildUrl("https://" + cdnHost + cdnpath, queryParams, 4096);
    };
    _proto.getAttributes = function getAttributes() {
      var attributes = dict({
        "type": "firstimpression",
        "data-pvid64": this.pvid64
      });
      return attributes;
    };
    _proto.getDefaultAdConstraints = function getDefaultAdConstraints() {
      var viewportHeight = Services.viewportForDoc(this.autoAmpAdsElement_).getSize().height;
      return {
        initialMinSpacing: viewportHeight,
        subsequentMinSpacing: [{
          adCount: 3,
          spacing: viewportHeight * 2
        }, {
          adCount: 6,
          spacing: viewportHeight * 3
        }],
        maxAdCount: 8
      };
    };
    _proto.getSizing = function getSizing() {
      return {
        height: 1
      };
    };
    return FirstImpressionIoConfig2;
  }();

  // extensions/amp-auto-ads/0.1/ping-network-config.js
  var PingNetworkConfig = /* @__PURE__ */ function() {
    function PingNetworkConfig2(autoAmpAdsElement) {
      this.autoAmpAdsElement_ = autoAmpAdsElement;
    }
    var _proto = PingNetworkConfig2.prototype;
    _proto.isEnabled = function isEnabled() {
      return true;
    };
    _proto.isResponsiveEnabled = function isResponsiveEnabled() {
      return true;
    };
    _proto.getConfigUrl = function getConfigUrl() {
      return buildUrl("//lh3.googleusercontent.com/pSECrJ82R7-AqeBCOEPGPM9iG9OEIQ_QXcbubWIOdkY=w400-h300-no-n", {}, 4096);
    };
    _proto.getAttributes = function getAttributes() {
      return dict({
        "type": "_ping_"
      });
    };
    _proto.getDefaultAdConstraints = function getDefaultAdConstraints() {
      var viewportHeight = Services.viewportForDoc(this.autoAmpAdsElement_).getSize().height;
      return {
        initialMinSpacing: viewportHeight,
        subsequentMinSpacing: [{
          adCount: 3,
          spacing: viewportHeight * 2
        }, {
          adCount: 6,
          spacing: viewportHeight * 3
        }],
        maxAdCount: 8
      };
    };
    _proto.getSizing = function getSizing() {
      return {};
    };
    return PingNetworkConfig2;
  }();

  // extensions/amp-auto-ads/0.1/premiumads-network-config.js
  var PremiumadsNetworkConfig = /* @__PURE__ */ function() {
    function PremiumadsNetworkConfig2(autoAmpAdsElement) {
      this.autoAmpAdsElement_ = autoAmpAdsElement;
    }
    var _proto = PremiumadsNetworkConfig2.prototype;
    _proto.isEnabled = function isEnabled() {
      return true;
    };
    _proto.isResponsiveEnabled = function isResponsiveEnabled() {
      return false;
    };
    _proto.getConfigUrl = function getConfigUrl() {
      var data = this.autoAmpAdsElement_.dataset;
      var host = data.host || "https://tags.premiumads.com.br";
      return buildUrl(host + "/autoads/" + data.publisher, {}, 4096);
    };
    _proto.getAttributes = function getAttributes() {
      var data = this.autoAmpAdsElement_.dataset;
      return dict({
        "type": "doubleclick",
        "data-ad": "premiumads",
        "layout": data.layout || Layout_Enum.FIXED,
        "style": data["style"] || "margin: 15px auto; position: relative !important; display: block !important;"
      });
    };
    _proto.getDefaultAdConstraints = function getDefaultAdConstraints() {
      var viewportHeight = Services.viewportForDoc(this.autoAmpAdsElement_).getSize().height;
      return {
        initialMinSpacing: viewportHeight,
        subsequentMinSpacing: [{
          adCount: 3,
          spacing: viewportHeight * 2
        }, {
          adCount: 6,
          spacing: viewportHeight * 3
        }],
        maxAdCount: 8
      };
    };
    _proto.getSizing = function getSizing() {
      return {};
    };
    return PremiumadsNetworkConfig2;
  }();

  // extensions/amp-auto-ads/0.1/wunderkind-network-config.js
  var WunderkindNetworkConfig = /* @__PURE__ */ function() {
    function WunderkindNetworkConfig2(autoAmpAdsElement) {
      this.autoAmpAdsElement_ = autoAmpAdsElement;
    }
    var _proto = WunderkindNetworkConfig2.prototype;
    _proto.isEnabled = function isEnabled(unused) {
      var websiteID = this.autoAmpAdsElement_.getAttribute("data-website-id");
      return !!(websiteID && websiteID.match(/^[0-9]+$/));
    };
    _proto.isResponsiveEnabled = function isResponsiveEnabled() {
      return true;
    };
    _proto.getConfigUrl = function getConfigUrl() {
      var docInfo = Services.documentInfoForDoc(this.autoAmpAdsElement_);
      var websiteID = this.autoAmpAdsElement_.getAttribute("data-website-id");
      return buildUrl("https://api.bounceexchange.com/bounce/amp", {
        "w_id": websiteID,
        "calling_url": docInfo.sourceUrl
      }, 4096);
    };
    _proto.getAttributes = function getAttributes() {
      var attributes = dict({
        "type": "wunderkind",
        "data-ad": "wunderkind",
        "layout": "responsive",
        "height": "250",
        "width": "250"
      });
      return attributes;
    };
    _proto.getDefaultAdConstraints = function getDefaultAdConstraints() {
      var viewportHeight = Services.viewportForDoc(this.autoAmpAdsElement_).getSize().height;
      return {
        initialMinSpacing: viewportHeight,
        subsequentMinSpacing: [{
          adCount: 3,
          spacing: viewportHeight * 2
        }, {
          adCount: 6,
          spacing: viewportHeight * 3
        }],
        maxAdCount: 8
      };
    };
    _proto.getSizing = function getSizing() {
      return {};
    };
    return WunderkindNetworkConfig2;
  }();

  // extensions/amp-auto-ads/0.1/ad-network-config.js
  function getAdNetworkConfig(type, autoAmpAdsElement) {
    if ((getMode().test || getMode().localDev) && type == "_ping_") {
      return new PingNetworkConfig(autoAmpAdsElement);
    }
    if (type == "adsense") {
      return new AdSenseNetworkConfig(autoAmpAdsElement);
    }
    if (type == "alright") {
      return new AlrightNetworkConfig(autoAmpAdsElement);
    }
    if (type == "denakop") {
      return new DenakopNetworkConfig(autoAmpAdsElement);
    }
    if (type == "doubleclick") {
      return new DoubleclickNetworkConfig(autoAmpAdsElement);
    }
    if (type == "firstimpression.io") {
      return new FirstImpressionIoConfig(autoAmpAdsElement);
    }
    if (type == "premiumads") {
      return new PremiumadsNetworkConfig(autoAmpAdsElement);
    }
    if (type == "wunderkind") {
      return new WunderkindNetworkConfig(autoAmpAdsElement);
    }
    return null;
  }

  // src/core/dom/amp-element-helpers.js
  var UPGRADE_TO_CUSTOMELEMENT_PROMISE = "__AMP_UPG_PRM";
  var UPGRADE_TO_CUSTOMELEMENT_RESOLVER = "__AMP_UPG_RES";
  function isAmpElement(element) {
    var tag = element.tagName;
    return tag.startsWith("AMP-") && !(tag == "AMP-STICKY-AD-TOP-PADDING" || tag == "AMP-BODY");
  }
  function whenUpgradedToCustomElement(element) {
    devAssert2(isAmpElement(element), "element is not AmpElement");
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

  // extensions/amp-auto-ads/0.1/attributes.js
  var TAG2 = "amp-auto-ads";
  var NON_DATA_ATTRIBUTE_ALLOWLIST = {
    "type": true,
    "rtc-config": true,
    "layout": true,
    "height": true,
    "width": true,
    "sticky": true
  };
  var Attributes = {
    BASE_ATTRIBUTES: "attributes",
    STICKY_AD_ATTRIBUTES: "stickyAdAttributes"
  };
  function getAttributesFromConfigObj(configObj, attributes) {
    if (!configObj[attributes]) {
      return dict();
    }
    if (!isObject(configObj[attributes]) || isArray(configObj[attributes])) {
      user().warn(TAG2, attributes + " property not an object");
      return dict();
    }
    return parseAttributes(configObj[attributes]);
  }
  function parseAttributes(attributeObject) {
    var attributes = dict();
    for (var key in attributeObject) {
      if (!NON_DATA_ATTRIBUTE_ALLOWLIST[key] && !key.startsWith("data-")) {
        user().warn(TAG2, "Attribute not whitlisted: " + key);
        continue;
      }
      var valueType = typeof attributeObject[key];
      if (valueType != "number" && valueType != "string" && valueType != "boolean") {
        user().warn(TAG2, "Attribute type not supported: " + valueType);
        continue;
      }
      attributes[key] = String(attributeObject[key]);
    }
    return attributes;
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

  // extensions/amp-auto-ads/0.1/measure-page-layout-box.js
  function measurePageLayoutBox(element) {
    var vsync = Services.vsyncFor(getWin(element));
    return vsync.measurePromise(function() {
      return getPageLayoutBoxBlocking(element);
    });
  }

  // extensions/amp-auto-ads/0.1/placement.js
  var TAG3 = "amp-auto-ads";
  var TARGET_AD_HEIGHT_PX = 250;
  var PlacementState = {
    UNUSED: 0,
    RESIZE_FAILED: 1,
    PLACED: 2,
    TOO_NEAR_EXISTING_AD: 3
  };
  var Position = {
    BEFORE: 1,
    FIRST_CHILD: 2,
    LAST_CHILD: 3,
    AFTER: 4
  };
  var DENYLISTED_ANCESTOR_TAGS = ["AMP-SIDEBAR", "AMP-APP-BANNER"];
  var INJECTORS = {};
  INJECTORS[Position.BEFORE] = function(anchorElement, elementToInject) {
    anchorElement.parentNode.insertBefore(elementToInject, anchorElement);
  };
  INJECTORS[Position.AFTER] = function(anchorElement, elementToInject) {
    anchorElement.parentNode.insertBefore(elementToInject, anchorElement.nextSibling);
  };
  INJECTORS[Position.FIRST_CHILD] = function(anchorElement, elementToInject) {
    anchorElement.insertBefore(elementToInject, anchorElement.firstChild);
  };
  INJECTORS[Position.LAST_CHILD] = function(anchorElement, elementToInject) {
    anchorElement.appendChild(elementToInject);
  };
  var Placement = /* @__PURE__ */ function() {
    function Placement2(ampdoc2, anchorElement, position, injector, attributes, opt_margins) {
      this.ampdoc = ampdoc2;
      this.mutator_ = Services.mutatorForDoc(anchorElement);
      this.anchorElement_ = anchorElement;
      this.position_ = position;
      this.injector_ = injector;
      this.attributes_ = attributes;
      this.margins_ = opt_margins;
      this.adElement_ = null;
      this.state_ = PlacementState.UNUSED;
    }
    var _proto = Placement2.prototype;
    _proto.getAdElement = function getAdElement() {
      return dev().assertElement(this.adElement_, "No ad element");
    };
    _proto.getEstimatedPosition = function getEstimatedPosition() {
      var _this = this;
      return measurePageLayoutBox(this.anchorElement_).then(function(layoutBox) {
        return _this.getEstimatedPositionFromAnchorLayout_(layoutBox);
      });
    };
    _proto.getEstimatedPositionFromAnchorLayout_ = function getEstimatedPositionFromAnchorLayout_(anchorLayout) {
      switch (this.position_) {
        case Position.BEFORE:
        case Position.FIRST_CHILD:
          return anchorLayout.top;
        case Position.LAST_CHILD:
        case Position.AFTER:
          return anchorLayout.bottom;
        default:
          throw new Error("Unknown position");
      }
    };
    _proto.placeAd = function placeAd(baseAttributes, sizing, adTracker, isResponsiveEnabled) {
      var _this2 = this;
      return this.getEstimatedPosition().then(function(yPosition) {
        if (_this2.ampdoc.win.scrollY > yPosition) {
          _this2.state_ = PlacementState.UNUSED;
          return _this2.state_;
        }
        return adTracker.isTooNearAnAd(yPosition).then(function(tooNear) {
          if (tooNear) {
            _this2.state_ = PlacementState.TOO_NEAR_EXISTING_AD;
            return _this2.state_;
          }
          var shouldUseFullWidthResponsive = isResponsiveEnabled && _this2.isLayoutViewportNarrow_(_this2.anchorElement_);
          _this2.adElement_ = shouldUseFullWidthResponsive ? _this2.createFullWidthResponsiveAdElement_(baseAttributes) : _this2.createAdElement_(baseAttributes, sizing.width);
          _this2.injector_(_this2.anchorElement_, _this2.getAdElement());
          if (shouldUseFullWidthResponsive) {
            return whenUpgradedToCustomElement(_this2.getAdElement()).then(function() {
              return _this2.getAdElement().build();
            }).then(function() {
              var resized = !_this2.getAdElement().classList.contains("i-amphtml-layout-awaiting-size");
              _this2.state_ = resized ? PlacementState.PLACED : PlacementState.RESIZE_FAILED;
              return _this2.state_;
            });
          }
          return _this2.getPlacementSizing_(sizing).then(function(placement) {
            return whenUpgradedToCustomElement(_this2.getAdElement()).then(function() {
              return _this2.getAdElement().build();
            }).then(function() {
              return _this2.mutator_.requestChangeSize(_this2.getAdElement(), placement.height, placement.width, placement.margins);
            }).then(function() {
              _this2.state_ = PlacementState.PLACED;
              return _this2.state_;
            }, function() {
              _this2.state_ = PlacementState.RESIZE_FAILED;
              return _this2.state_;
            });
          });
        });
      });
    };
    _proto.getPlacementSizing_ = function getPlacementSizing_(sizing) {
      return Promise.resolve({
        height: sizing.height || TARGET_AD_HEIGHT_PX,
        margins: this.margins_
      });
    };
    _proto.createAdElement_ = function createAdElement_(baseAttributes, width) {
      var attributes = Object.assign(dict({
        "layout": width ? "fixed" : "fixed-height",
        "height": "0",
        "width": width ? width : "auto",
        "class": "i-amphtml-layout-awaiting-size"
      }), baseAttributes, this.attributes_);
      return createElementWithAttributes(this.ampdoc.win.document, "amp-ad", attributes);
    };
    _proto.createFullWidthResponsiveAdElement_ = function createFullWidthResponsiveAdElement_(baseAttributes) {
      var attributes = Object.assign(dict({
        "width": "100vw",
        "height": "0",
        "layout": "fixed",
        "class": "i-amphtml-layout-awaiting-size",
        "data-auto-format": "rspv",
        "data-full-width": ""
      }), baseAttributes, this.attributes_);
      return createElementWithAttributes(this.ampdoc.win.document, "amp-ad", attributes);
    };
    _proto.isLayoutViewportNarrow_ = function isLayoutViewportNarrow_(element) {
      var viewportSize = Services.viewportForDoc(element).getSize();
      return viewportSize.width < 488;
    };
    return Placement2;
  }();
  function getPlacementsFromConfigObj(ampdoc2, configObj) {
    var placementObjs = configObj["placements"];
    if (!placementObjs) {
      user().info(TAG3, "No placements in config");
      return [];
    }
    var placements = [];
    placementObjs.forEach(function(placementObj) {
      getPlacementsFromObject(ampdoc2, placementObj, placements);
    });
    return placements;
  }
  function getPlacementsFromObject(ampdoc2, placementObj, placements) {
    var injector = INJECTORS[placementObj["pos"]];
    if (!injector) {
      user().warn(TAG3, "No injector for position");
      return;
    }
    var anchor = placementObj["anchor"];
    if (!anchor) {
      user().warn(TAG3, "No anchor in placement");
      return;
    }
    var anchorElements = getAnchorElements(ampdoc2.getRootNode(), anchor);
    if (!anchorElements.length) {
      user().warn(TAG3, "No anchor element found");
      return;
    }
    var margins = void 0;
    if (placementObj["style"]) {
      var marginTop = parseInt(placementObj["style"]["top_m"], 10);
      var marginBottom = parseInt(placementObj["style"]["bot_m"], 10);
      if (marginTop || marginBottom) {
        margins = {
          top: marginTop || void 0,
          bottom: marginBottom || void 0
        };
      }
    }
    anchorElements.forEach(function(anchorElement) {
      if (!isPositionValid(anchorElement, placementObj["pos"])) {
        return;
      }
      var attributes = getAttributesFromConfigObj(placementObj, Attributes.BASE_ATTRIBUTES);
      placements.push(new Placement(ampdoc2, anchorElement, placementObj["pos"], injector, attributes, margins));
    });
  }
  function getAnchorElements(rootElement, anchorObj) {
    var selector = anchorObj["selector"];
    if (!selector) {
      user().warn(TAG3, "No selector in anchor");
      return [];
    }
    var elements = [].slice.call(scopedQuerySelectorAll(rootElement.documentElement || rootElement, selector));
    var minChars = anchorObj["min_c"] || 0;
    if (minChars > 0) {
      elements = elements.filter(function(el) {
        return el.textContent.length >= minChars;
      });
    }
    if (typeof anchorObj["index"] == "number" || !anchorObj["all"]) {
      var element = elements[anchorObj["index"] || 0];
      elements = element ? [element] : [];
    }
    if (elements.length == 0) {
      return [];
    }
    if (anchorObj["sub"]) {
      var subElements = [];
      elements.forEach(function(el) {
        subElements = subElements.concat(getAnchorElements(el, anchorObj["sub"]));
      });
      return subElements;
    }
    return elements;
  }
  function isPositionValid(anchorElement, position) {
    var elementToCheckOrNull = position == Position.BEFORE || position == Position.AFTER ? anchorElement.parentElement : anchorElement;
    if (!elementToCheckOrNull) {
      user().warn(TAG3, "Parentless anchor with BEFORE/AFTER position.");
      return false;
    }
    var elementToCheck = dev().assertElement(elementToCheckOrNull);
    return !DENYLISTED_ANCESTOR_TAGS.some(function(tagName) {
      if (closestAncestorElementBySelector(elementToCheck, tagName)) {
        user().warn(TAG3, "Placement inside denylisted ancestor: " + tagName);
        return true;
      }
      return false;
    });
  }

  // extensions/amp-auto-ads/0.1/ad-strategy.js
  var TAG4 = "amp-auto-ads";
  var AdStrategy = /* @__PURE__ */ function() {
    function AdStrategy2(placements, baseAttributes, sizing, adTracker, isResponsiveEnabled) {
      if (isResponsiveEnabled === void 0) {
        isResponsiveEnabled = false;
      }
      this.availablePlacements_ = placements.slice(0);
      this.baseAttributes_ = baseAttributes;
      this.sizing_ = sizing;
      this.adTracker_ = adTracker;
      this.adsPlaced_ = 0;
      this.isResponsiveEnabled_ = isResponsiveEnabled;
    }
    var _proto = AdStrategy2.prototype;
    _proto.run = function run() {
      var _this = this;
      if (this.adTracker_.isMaxAdCountReached()) {
        return tryResolve(function() {
          return _this.getStrategyResult_();
        });
      }
      return this.placeNextAd_().then(function(success) {
        if (success) {
          return _this.run();
        }
        return _this.getStrategyResult_();
      });
    };
    _proto.getStrategyResult_ = function getStrategyResult_() {
      return {
        adsPlaced: this.adsPlaced_,
        totalAdsOnPage: this.adTracker_.getAdCount()
      };
    };
    _proto.placeNextAd_ = function placeNextAd_() {
      var _this2 = this;
      var nextPlacement = this.availablePlacements_.shift();
      if (!nextPlacement) {
        user().info(TAG4, "unable to fulfill ad strategy");
        return Promise.resolve(false);
      }
      return nextPlacement.placeAd(this.baseAttributes_, this.sizing_, this.adTracker_, this.isResponsiveEnabled_).then(function(state) {
        if (state == PlacementState.PLACED) {
          _this2.adTracker_.addAd(nextPlacement.getAdElement());
          _this2.adsPlaced_++;
          return true;
        } else {
          return _this2.placeNextAd_();
        }
      });
    };
    return AdStrategy2;
  }();

  // extensions/amp-auto-ads/0.1/ad-tracker.js
  var TAG5 = "amp-auto-ads";
  var AdTracker = /* @__PURE__ */ function() {
    function AdTracker2(ads, adConstraints) {
      this.ads_ = ads;
      this.initialMinSpacing_ = adConstraints.initialMinSpacing;
      this.subsequentMinSpacing_ = adConstraints.subsequentMinSpacing.slice(0).sort(function(a, b) {
        return a.adCount - b.adCount;
      });
      this.maxAdCount_ = adConstraints.maxAdCount;
      this.minAdSpacing_ = this.getMinAdSpacing_();
    }
    var _proto = AdTracker2.prototype;
    _proto.addAd = function addAd(ad) {
      this.ads_.push(ad);
      this.minAdSpacing_ = this.getMinAdSpacing_();
    };
    _proto.getAdCount = function getAdCount() {
      return this.ads_.length;
    };
    _proto.isMaxAdCountReached = function isMaxAdCountReached() {
      return this.getAdCount() >= this.maxAdCount_;
    };
    _proto.isTooNearAnAd = function isTooNearAnAd(yPosition) {
      return this.isWithinMinDistanceOfAd_(yPosition, 0);
    };
    _proto.isWithinMinDistanceOfAd_ = function isWithinMinDistanceOfAd_(yPosition, adIndex) {
      var _this = this;
      if (adIndex >= this.ads_.length) {
        return Promise.resolve(false);
      }
      return this.getDistanceFromAd_(yPosition, this.ads_[adIndex]).then(function(distance) {
        if (distance < _this.minAdSpacing_) {
          return true;
        }
        return _this.isWithinMinDistanceOfAd_(yPosition, adIndex + 1);
      });
    };
    _proto.getDistanceFromAd_ = function getDistanceFromAd_(yPosition, ad) {
      return measurePageLayoutBox(ad).then(function(box) {
        if (yPosition >= box.top && yPosition <= box.bottom) {
          return 0;
        } else {
          return Math.min(Math.abs(yPosition - box.top), Math.abs(yPosition - box.bottom));
        }
      });
    };
    _proto.getMinAdSpacing_ = function getMinAdSpacing_() {
      var adCount = this.getAdCount();
      var spacing = this.initialMinSpacing_;
      for (var i = 0; i < this.subsequentMinSpacing_.length; i++) {
        var item = this.subsequentMinSpacing_[i];
        if (item.adCount <= adCount) {
          spacing = item.spacing;
        }
      }
      return spacing;
    };
    return AdTracker2;
  }();
  function getExistingAds(ampdoc2) {
    return [].slice.call(ampdoc2.getRootNode().querySelectorAll("AMP-AD")).filter(function(ad) {
      if (ad.parentElement && ad.parentElement.tagName == "AMP-STICKY-AD") {
        return false;
      }
      return true;
    });
  }
  function getAdConstraintsFromConfigObj(ampdoc2, configObj) {
    var obj = configObj["adConstraints"];
    if (!obj) {
      return null;
    }
    var viewportHeight = Services.viewportForDoc(ampdoc2).getHeight();
    var initialMinSpacing = getValueFromString(obj["initialMinSpacing"], viewportHeight);
    if (initialMinSpacing == null) {
      user().warn(TAG5, "Invalid initial min spacing");
      return null;
    }
    var subsequentMinSpacing = (obj["subsequentMinSpacing"] || []).map(function(item) {
      var adCount = item["adCount"];
      if (adCount == null) {
        user().warn(TAG5, "No subsequentMinSpacing adCount specified");
        return null;
      }
      var spacing = getValueFromString(item["spacing"], viewportHeight);
      if (spacing == null) {
        user().warn(TAG5, "Invalid subsequent min spacing");
        return null;
      }
      return {
        adCount: adCount,
        spacing: spacing
      };
    });
    if (subsequentMinSpacing.indexOf(null) != -1) {
      return null;
    }
    if (obj["maxAdCount"] == null) {
      user().warn(TAG5, "No maxAdCount specified");
      return null;
    }
    return {
      initialMinSpacing: initialMinSpacing,
      subsequentMinSpacing: subsequentMinSpacing,
      maxAdCount: obj["maxAdCount"]
    };
  }
  function getValueFromString(strValue, viewportHeight) {
    if (!strValue) {
      return null;
    }
    var numValue = parseFloat(strValue);
    if (isNaN(numValue) || numValue < 0) {
      return null;
    }
    if (endsWith(strValue, "px")) {
      return numValue;
    }
    if (endsWith(strValue, "vp")) {
      return numValue * viewportHeight;
    }
    return null;
  }

  // extensions/amp-auto-ads/0.1/anchor-ad-strategy.js
  var TAG6 = "amp-auto-ads";
  var STICKY_AD_TAG = "amp-sticky-ad";
  var OPT_IN_STATUS_ANCHOR_ADS = 2;
  var AnchorAdStrategy = /* @__PURE__ */ function() {
    function AnchorAdStrategy2(ampdoc2, baseAttributes, configObj) {
      this.ampdoc = ampdoc2;
      this.baseAttributes_ = baseAttributes;
      this.configObj_ = configObj;
    }
    var _proto = AnchorAdStrategy2.prototype;
    _proto.run = function run() {
      if (this.hasExistingStickyAd_()) {
        user().warn(TAG6, "Auto ads may not work because of already existing <amp-sticky-ad>.");
        return Promise.resolve(false);
      }
      if (!this.isAnchorAdEnabled_()) {
        return Promise.resolve(false);
      }
      if (this.baseAttributes_.sticky === "top") {
        Services.extensionsFor(this.ampdoc.win).installExtensionForDoc(this.ampdoc, "amp-ad", "0.1");
        this.placeAmpAdStickyAd_();
      } else {
        Services.extensionsFor(this.ampdoc.win).installExtensionForDoc(this.ampdoc, STICKY_AD_TAG, "1.0");
        this.placeStickyAd_();
      }
      return Promise.resolve(true);
    };
    _proto.hasExistingStickyAd_ = function hasExistingStickyAd_() {
      return !!this.ampdoc.getRootNode().querySelector("amp-sticky-ad, amp-ad[sticky]");
    };
    _proto.isAnchorAdEnabled_ = function isAnchorAdEnabled_() {
      return user().assertArray(this.configObj_["optInStatus"] || []).includes(OPT_IN_STATUS_ANCHOR_ADS);
    };
    _proto.placeAmpAdStickyAd_ = function placeAmpAdStickyAd_() {
      var viewportWidth = Services.viewportForDoc(this.ampdoc).getWidth();
      var attributes = Object.assign(dict(), this.baseAttributes_, dict({
        "width": String(viewportWidth),
        "height": this.baseAttributes_.height || "100"
      }));
      var doc = this.ampdoc.win.document;
      var ampAd = createElementWithAttributes(doc, "amp-ad", attributes);
      var body = this.ampdoc.getBody();
      body.insertBefore(ampAd, body.firstChild);
    };
    _proto.placeStickyAd_ = function placeStickyAd_() {
      var baseAttributes = this.baseAttributes_;
      var viewportWidth = Services.viewportForDoc(this.ampdoc).getWidth();
      var attributes = Object.assign(dict(), baseAttributes, dict({
        "width": String(viewportWidth),
        "height": baseAttributes.height || "100"
      }));
      var doc = this.ampdoc.win.document;
      var ampAd = createElementWithAttributes(doc, "amp-ad", attributes);
      var stickyAd = createElementWithAttributes(doc, "amp-sticky-ad", dict({
        "layout": "nodisplay"
      }));
      stickyAd.appendChild(ampAd);
      var body = this.ampdoc.getBody();
      body.insertBefore(stickyAd, body.firstChild);
    };
    return AnchorAdStrategy2;
  }();

  // extensions/amp-auto-ads/0.1/amp-auto-ads.js
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
  var TAG7 = "amp-auto-ads";
  var AD_TAG = "amp-ad";
  var AmpAutoAds = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpAutoAds2, _AMP$BaseElement);
    var _super = _createSuper(AmpAutoAds2);
    function AmpAutoAds2() {
      return _super.apply(this, arguments);
    }
    var _proto = AmpAutoAds2.prototype;
    _proto.buildCallback = function buildCallback() {
      var _this = this;
      var type = this.element.getAttribute("type");
      userAssert(type, "Missing type attribute");
      this.adNetwork_ = getAdNetworkConfig(type, this.element);
      userAssert(this.adNetwork_, "No AdNetworkConfig for type: " + type);
      if (!this.adNetwork_.isEnabled(this.win)) {
        return;
      }
      var ampdoc2 = this.getAmpDoc();
      Services.extensionsFor(this.win).installExtensionForDoc(ampdoc2, AD_TAG);
      this.configPromise_ = this.getAmpDoc().whenFirstVisible().then(function() {
        return _this.getConfig_(_this.adNetwork_.getConfigUrl());
      });
      if (!this.isAutoAdsLayoutCallbackExperimentOn_()) {
        this.placeAds_();
      }
    };
    _proto.isLayoutSupported = function isLayoutSupported() {
      return true;
    };
    _proto.layoutCallback = function layoutCallback() {
      if (this.isAutoAdsLayoutCallbackExperimentOn_()) {
        return this.placeAds_();
      }
      return resolvedPromise();
    };
    _proto.getConfig_ = function getConfig_(configUrl) {
      var _this2 = this;
      var xhrInit = {
        mode: "cors",
        method: "GET",
        credentials: "omit"
      };
      return Services.xhrFor(this.win).fetchJson(configUrl, xhrInit).then(function(res) {
        return res.json();
      }).catch(function(reason) {
        _this2.user().error(TAG7, "amp-auto-ads config xhr failed: " + reason);
        return null;
      });
    };
    _proto.isAutoAdsLayoutCallbackExperimentOn_ = function isAutoAdsLayoutCallbackExperimentOn_() {
      return isExperimentOn(this.win, "auto-ads-layout-callback");
    };
    _proto.placeAds_ = function placeAds_() {
      var _this3 = this;
      var ampdoc2 = this.getAmpDoc();
      return this.configPromise_.then(function(configObj) {
        if (!configObj) {
          return;
        }
        var noConfigReason = configObj["noConfigReason"];
        if (noConfigReason) {
          _this3.user().warn(TAG7, noConfigReason);
        }
        var placements = getPlacementsFromConfigObj(ampdoc2, configObj);
        var attributes = Object.assign(dict({}), _this3.adNetwork_.getAttributes(), getAttributesFromConfigObj(configObj, Attributes.BASE_ATTRIBUTES));
        var sizing = _this3.adNetwork_.getSizing();
        var adConstraints = getAdConstraintsFromConfigObj(ampdoc2, configObj) || _this3.adNetwork_.getDefaultAdConstraints();
        var adTracker = new AdTracker(getExistingAds(ampdoc2), adConstraints);
        new AdStrategy(placements, attributes, sizing, adTracker, _this3.adNetwork_.isResponsiveEnabled()).run();
        var stickyAdAttributes = Object.assign(dict({}), attributes, getAttributesFromConfigObj(configObj, Attributes.STICKY_AD_ATTRIBUTES));
        new AnchorAdStrategy(ampdoc2, stickyAdAttributes, configObj).run();
      });
    };
    return AmpAutoAds2;
  }(AMP.BaseElement);
  AMP.registerElement(TAG7, AmpAutoAds);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-auto-ads-0.1.max.js.map
