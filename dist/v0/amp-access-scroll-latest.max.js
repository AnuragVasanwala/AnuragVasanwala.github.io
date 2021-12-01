(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-access-scroll",ev:"0.1",l:true,f:(function(AMP,_){
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

  // src/core/types/array.js
  var isArray = Array.isArray;

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

  // extensions/amp-access-scroll/0.1/read-depth-tracker.js
  var ReadDepthTracker = /* @__PURE__ */ function() {
    function ReadDepthTracker2(ampdoc2, accessSource, connectHostname3) {
      var _this = this;
      this.ampdoc_ = ampdoc2;
      this.lastReadIndex_ = null;
      this.accessSource_ = accessSource;
      this.connectHostname_ = connectHostname3;
      var debouncedFindTopParagraph_ = debounce(ampdoc2.win, this.findTopParagraph_.bind(this), 1e3);
      this.viewport_ = Services.viewportForDoc(ampdoc2);
      this.paragraphs_ = [];
      ampdoc2.whenReady().then(function() {
        _this.viewport_.onChanged(debouncedFindTopParagraph_);
        _this.paragraphs_ = ampdoc2.getBody().getElementsByTagName("p");
      });
    }
    var _proto = ReadDepthTracker2.prototype;
    _proto.findTopParagraph_ = function findTopParagraph_() {
      var _this2 = this;
      return Promise.all([].slice.call(this.paragraphs_).map(function(p) {
        return _this2.viewport_.getClientRectAsync(p);
      })).then(function(rects) {
        var lastIdxAboveViewport = null;
        var lastPosition = null;
        for (var i = rects.length - 1; i >= 0; i--) {
          var bottomPosition = rects[i].bottom;
          if (bottomPosition <= 0 && (lastPosition === null || lastPosition < bottomPosition)) {
            lastIdxAboveViewport = i;
            lastPosition = bottomPosition;
          }
        }
        if (lastIdxAboveViewport !== null) {
          _this2.recordLatestRead_(lastIdxAboveViewport);
        }
      });
    };
    _proto.recordLatestRead_ = function recordLatestRead_(paragraphIdx) {
      if (this.lastReadIndex_ !== paragraphIdx) {
        this.lastReadIndex_ = paragraphIdx;
        this.updateLastRead_(this.paragraphs_[paragraphIdx].innerText.substring(0, 50));
      }
    };
    _proto.updateLastRead_ = function updateLastRead_(snippet) {
      var _this3 = this;
      this.accessSource_.buildUrl(this.connectHostname_ + "/amp/updatedepth?rid=READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL&rd=" + encodeURIComponent(snippet), false).then(function(url) {
        Services.xhrFor(_this3.ampdoc_.win).fetch(url);
      });
    };
    return ReadDepthTracker2;
  }();

  // src/core/dom/style.js
  var propertyNameCache;
  var vendorPrefixes = ["Webkit", "webkit", "Moz", "moz", "ms", "O", "o"];
  var DISPLAY_STYLE_MESSAGE = "`display` style detected. You must use toggle instead.";
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
  function isVar(property) {
    return property.startsWith("--");
  }
  function assertDoesNotContainDisplay(styles) {
    if ("display" in styles) {
      devError("STYLE", DISPLAY_STYLE_MESSAGE);
    }
    return styles;
  }

  // extensions/amp-access-scroll/0.1/scroll-component.js
  var ScrollComponent = /* @__PURE__ */ function() {
    function ScrollComponent2(doc) {
      var _this = this;
      this.doc_ = doc;
      this.setWindow_ = null;
      this.root_ = null;
      this.frame_ = null;
      this.layout_ = {
        "width": null,
        "left": null,
        "right": null
      };
      this.window = new Promise(function(resolve) {
        _this.setWindow_ = resolve;
      });
    }
    var _proto = ScrollComponent2.prototype;
    _proto.el = function el(elementName, attrs, children) {
      var e = createElementWithAttributes(this.doc_.win.document, elementName, attrs);
      if (Array.isArray(children)) {
        children.forEach(function(c) {
          return e.appendChild(c);
        });
      }
      return e;
    };
    _proto.mount = function mount() {
      var root = devAssert2(this.root_);
      this.doc_.getBody().appendChild(root);
      Services.viewportForDoc(this.doc_).addToFixedLayer(root);
    };
    _proto.mutate = function mutate(mutator) {
      Services.vsyncFor(this.doc_.win).mutate(mutator);
    };
    _proto.toggleClass = function toggleClass(className, condition) {
      var classes = devAssert2(this.root_).classList;
      if (condition) {
        classes.add(className);
      } else {
        classes.remove(className);
      }
    };
    _proto.toggleChecked = function toggleChecked(condition) {
      var input = devAssert2(this.root_);
      if (condition) {
        input.checked = true;
      } else {
        input.checked = false;
      }
    };
    _proto.updateHorizontalLayout = function updateHorizontalLayout(updates) {
      var _this2 = this;
      var changed = false;
      Object.keys(this.layout_).forEach(function(key) {
        if (!hasOwn(updates, key)) {
          return;
        }
        var size = _this2.cssSize(updates[key]);
        if (_this2.layout_[key] !== size) {
          _this2.layout_[key] = size;
          changed = true;
        }
      });
      return changed;
    };
    _proto.renderHorizontalLayout = function renderHorizontalLayout() {
      setStyles(devAssert2(this.root_), assertDoesNotContainDisplay(this.layout_));
    };
    _proto.cssSize = function cssSize(size) {
      return typeof size === "number" ? px(size) : size;
    };
    return ScrollComponent2;
  }();
  ScrollComponent.HorizontalLayout;

  // extensions/amp-access-scroll/0.1/scroll-protocol.js
  var PROTOCOL_VERSION = "1.2";

  // extensions/amp-access-scroll/0.1/scroll-url.js
  var devEtld = function devEtld2(config) {
    return getMode().development && config["etld"] ? config["etld"] : "";
  };
  var connectHostname = function connectHostname2(config) {
    return "https://connect" + (devEtld(config) || ".scroll.com");
  };
  function buildUrl(accessSource, base) {
    return accessSource.buildUrl("" + base + "?rid=READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL" + ("&p=" + PROTOCOL_VERSION) + "&x=QUERY_PARAM(scrollx)", false);
  }

  // extensions/amp-access-scroll/0.1/scroll-bar.js
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf4(o2, p2) {
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
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf4(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  var ScrollBar = /* @__PURE__ */ function(_ScrollComponent) {
    _inherits(ScrollBar2, _ScrollComponent);
    var _super = _createSuper(ScrollBar2);
    function ScrollBar2(doc, accessSource) {
      var _this;
      _this = _super.call(this, doc);
      _this.accessSource_ = accessSource;
      _this.render_();
      return _this;
    }
    var _proto = ScrollBar2.prototype;
    _proto.render_ = function render_() {
      var _this2 = this;
      this.mutate(function() {
        if (!_this2.frame_) {
          _this2.makeIframe_();
          _this2.setWindow_(_this2.frame_.contentWindow);
        }
        _this2.renderHorizontalLayout();
      });
    };
    _proto.makeIframe_ = function makeIframe_() {
      var _this3 = this;
      this.frame_ = this.el("iframe", dict({
        "scrolling": "no",
        "frameborder": "0",
        "allowtransparency": "true",
        "title": "Twitter Blue bar",
        "width": "100%",
        "height": "100%",
        "sandbox": "allow-scripts allow-same-origin allow-top-navigation allow-popups allow-popups-to-escape-sandbox"
      }));
      this.root_ = this.el("div", dict({
        "class": "amp-access-scroll-bar"
      }), [this.frame_]);
      this.mount();
      buildUrl(this.accessSource_, connectHostname(this.accessSource_.getAdapterConfig()) + "/html/amp/scrolltab").then(function(scrollbarUrl) {
        _this3.frame_.setAttribute("src", scrollbarUrl);
      });
    };
    _proto.update = function update(action) {
      var changed = this.updateHorizontalLayout(action);
      if (changed) {
        this.render_();
      }
    };
    return ScrollBar2;
  }(ScrollComponent);

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

  // src/core/3p-frame-messaging.js
  function listen(element, eventType, listener, opt_evtListenerOpts) {
    return internalListenImplementation(element, eventType, listener, opt_evtListenerOpts);
  }

  // src/utils/event-helper.js
  function getData(event) {
    return event.data;
  }

  // extensions/amp-access-scroll/0.1/scroll-relay.js
  var Relay = /* @__PURE__ */ function() {
    function Relay2(domain) {
      this.frames_ = [];
      this.listeners_ = [];
      this.origin_ = domain;
      this.onMessage_ = this.onMessage_.bind(this);
      listen(window, "message", this.onMessage_);
    }
    var _proto = Relay2.prototype;
    _proto.onMessage_ = function onMessage_(e) {
      var _this = this;
      var data = getData(e);
      var fromScrollOrigin = e.origin === this.origin_;
      var isScrollAmpMessage = typeof data === "object" && "_scramp" in data;
      var fromFrameInRelay = this.frames_.indexOf(e.source) > -1;
      if (!fromScrollOrigin || !fromFrameInRelay || !isScrollAmpMessage) {
        return;
      }
      this.listeners_.forEach(function(listener) {
        return listener(data);
      });
      this.frames_.filter(function(f) {
        return f !== e.source;
      }).forEach(function(f) {
        f.postMessage(data, _this.origin_);
      });
    };
    _proto.register = function register(frame, messageListener) {
      var _this2 = this;
      messageListener && this.listeners_.push(messageListener);
      Promise.resolve(frame).then(function(frame2) {
        if (_this2.frames_.indexOf(frame2) === -1) {
          _this2.frames_.push(frame2);
        }
      });
    };
    return Relay2;
  }();

  // extensions/amp-access-scroll/0.1/scroll-sheet.js
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf2(subClass, superClass);
  }
  function _setPrototypeOf2(o, p) {
    _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf4(o2, p2) {
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
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf4(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf2(o);
  }
  var Sheet = /* @__PURE__ */ function(_ScrollComponent) {
    _inherits2(Sheet2, _ScrollComponent);
    var _super = _createSuper2(Sheet2);
    function Sheet2(doc) {
      var _this;
      _this = _super.call(this, doc);
      _this.DEFAULT_TITLE_ = "Scroll Feature";
      _this.state_ = {
        url: "",
        open: false,
        title: _this.DEFAULT_TITLE_
      };
      return _this;
    }
    var _proto = Sheet2.prototype;
    _proto.update = function update(action) {
      var _this2 = this;
      var changed = false;
      switch (action["_scramp"]) {
        case "au":
          changed = this.updateHorizontalLayout(action);
          ["open", "url", "title"].forEach(function(key) {
            if (hasOwn(action, key) && action[key] !== _this2.state_[key]) {
              _this2.state_[key] = action[key];
              changed = true;
            }
          });
          break;
        case "st":
          ["revealed"].forEach(function(key) {
            if (hasOwn(action, key) && action[key] !== _this2.state_[key]) {
              _this2.state_[key] = action[key];
              changed = true;
            }
          });
          break;
      }
      if (changed) {
        this.render_(this.state_);
      }
    };
    _proto.render_ = function render_(state) {
      var _this3 = this;
      this.mutate(function() {
        if (!_this3.frame_) {
          _this3.makeIframe_();
          _this3.setWindow_(_this3.frame_.contentWindow);
        }
        if (_this3.frame_.src !== state.url) {
          _this3.frame_.setAttribute("src", state.url);
        }
        _this3.renderHorizontalLayout();
        _this3.frame_.setAttribute("title", state.title);
        toggle(_this3.frame_, state.open);
      });
    };
    _proto.makeIframe_ = function makeIframe_() {
      this.frame_ = this.el("iframe", dict({
        "class": "amp-access-scroll-sheet",
        "scrolling": "no",
        "frameborder": "0",
        "allowtransparency": "true",
        "title": this.DEFAULT_TITLE_,
        "sandbox": "allow-scripts allow-same-origin allow-top-navigation allow-popups allow-popups-to-escape-sandbox"
      }));
      this.root_ = this.frame_;
      this.mount();
    };
    return Sheet2;
  }(ScrollComponent);
  Sheet.State;

  // build/amp-access-scroll-0.1.css.js
  var CSS2 = ".amp-access-scroll-bar{bottom:0;height:60px;left:auto;right:0px;width:48px;margin:0;padding:0}.amp-access-scroll-bar,.amp-access-scroll-sheet{position:fixed;background:transparent;z-index:2147483647}@media (max-width:599px){.amp-access-scroll-sheet{bottom:60px;height:100px;left:0!important;right:0!important;width:100%!important}}@media (min-width:600px){.amp-access-scroll-sheet{bottom:76px;height:56px;left:auto;right:16px;width:475px}}\n/*# sourceURL=/extensions/amp-access-scroll/0.1/amp-access-scroll.css*/";

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
    userAssert(urlString != null, "%s %s must be available", elementContext, sourceName);
    userAssert(isSecureUrlDeprecated(urlString) || /^\/\//.test(urlString), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', elementContext, sourceName, urlString);
    return urlString;
  }
  function isProxyOrigin(url) {
    return urls.cdnProxyRegex.test(urlAsLocation(url).origin);
  }

  // extensions/amp-access/0.1/amp-access-client.js
  var TAG = "amp-access-client";
  var DEFAULT_AUTHORIZATION_TIMEOUT = 3e3;
  var AccessClientAdapter = /* @__PURE__ */ function() {
    function AccessClientAdapter2(ampdoc2, configJson, context) {
      this.ampdoc = ampdoc2;
      this.context_ = context;
      this.authorizationUrl_ = userAssert(configJson["authorization"], '"authorization" URL must be specified');
      assertHttpsUrl(this.authorizationUrl_, '"authorization"');
      this.isPingbackEnabled_ = !configJson["noPingback"];
      this.pingbackUrl_ = configJson["pingback"];
      if (this.isPingbackEnabled_) {
        userAssert(this.pingbackUrl_, '"pingback" URL must be specified');
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
      userAssert(typeof timeout == "number", '"authorizationTimeout" must be a number');
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
      dev().fine(TAG, "Start authorization via ", this.authorizationUrl_);
      var urlPromise = this.context_.buildUrl(this.authorizationUrl_, false);
      return urlPromise.then(function(url) {
        dev().fine(TAG, "Authorization URL: ", url);
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
        dev().fine(TAG, "Pingback URL: ", url);
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

  // extensions/amp-access-scroll/0.1/scroll-impl.js
  function _inherits3(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf3(subClass, superClass);
  }
  function _setPrototypeOf3(o, p) {
    _setPrototypeOf3 = Object.setPrototypeOf || function _setPrototypeOf4(o2, p2) {
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
    _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf4(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf3(o);
  }
  var TAG2 = "amp-access-scroll-elt";
  var accessConfig = function accessConfig2(baseUrl) {
    var ACCESS_CONFIG = {
      "authorization": baseUrl + "/amp/access?rid=READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL&x=QUERY_PARAM(scrollx)" + ("&p=" + PROTOCOL_VERSION),
      "pingback": baseUrl + "/amp/pingback?rid=READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL&r=DOCUMENT_REFERRER&x=QUERY_PARAM(scrollx)&d=AUTHDATA(scroll)&v=AUTHDATA(visitId)" + ("&p=" + PROTOCOL_VERSION),
      "namespace": "scroll"
    };
    return ACCESS_CONFIG;
  };
  var analyticsConfig = function analyticsConfig2(baseUrl) {
    var ANALYTICS_CONFIG = {
      "requests": {
        "scroll": baseUrl + "/amp/analytics?rid=ACCESS_READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL&r=DOCUMENT_REFERRER&x=QUERY_PARAM(scrollx)&d=AUTHDATA(scroll.scroll)&v=AUTHDATA(scroll.visitId)&h=SOURCE_HOSTNAME&s=${totalEngagedTime}" + ("&p=" + PROTOCOL_VERSION)
      },
      "triggers": {
        "trackInterval": {
          "on": "timer",
          "timerSpec": {
            "interval": 15,
            "maxTimerLength": 7200
          },
          "request": "scroll"
        }
      }
    };
    return ANALYTICS_CONFIG;
  };
  var ScrollAccessVendor = /* @__PURE__ */ function(_AccessClientAdapter) {
    _inherits3(ScrollAccessVendor2, _AccessClientAdapter);
    var _super = _createSuper3(ScrollAccessVendor2);
    function ScrollAccessVendor2(ampdoc2, accessSource) {
      var _this;
      var scrollConfig = accessSource.getAdapterConfig();
      var baseUrl = connectHostname(scrollConfig);
      _this = _super.call(this, ampdoc2, accessConfig(baseUrl), {
        buildUrl: accessSource.buildUrl.bind(accessSource),
        collectUrlVars: accessSource.collectUrlVars.bind(accessSource)
      });
      installStylesForDoc(ampdoc2, CSS2, function() {
      }, false, TAG2);
      _this.accessSource_ = accessSource;
      _this.baseUrl_ = baseUrl;
      return _this;
    }
    var _proto = ScrollAccessVendor2.prototype;
    _proto.authorize = function authorize() {
      var _this2 = this;
      return _AccessClientAdapter.prototype.authorize.call(this).then(function(response) {
        var isStory = _this2.ampdoc.getRootNode().querySelector("amp-story[standalone]");
        if (response && response["scroll"]) {
          if (!isStory) {
            var bar = new ScrollBar(_this2.ampdoc, _this2.accessSource_);
            var sheet = new Sheet(_this2.ampdoc);
            var relay = new Relay(_this2.baseUrl_);
            relay.register(sheet.window, function(message) {
              if (message["_scramp"] === "au" || message["_scramp"] === "st") {
                sheet.update(message);
              }
            });
            relay.register(bar.window, function(message) {
              if (message["_scramp"] === "st") {
                sheet.update(message);
                bar.update(message);
              }
            });
            var config = _this2.accessSource_.getAdapterConfig();
            addAnalytics(_this2.ampdoc, config);
            if (response["features"] && response["features"]["d"]) {
              new ReadDepthTracker(_this2.ampdoc, _this2.accessSource_, connectHostname(config));
            }
          }
        } else {
          if (response && response["blocker"] && ScrollContentBlocker.shouldCheck(_this2.ampdoc)) {
            new ScrollContentBlocker(_this2.ampdoc, _this2.accessSource_, response["features"] && response["features"]["r"]).check();
          }
        }
        return response;
      });
    };
    return ScrollAccessVendor2;
  }(AccessClientAdapter);
  var ScrollContentBlocker = /* @__PURE__ */ function() {
    ScrollContentBlocker2.shouldCheck = function shouldCheck(ampdoc2) {
      var queryParams = parseQueryString(ampdoc2.win.location.search);
      return !queryParams["scrollnoblockerrefresh"];
    };
    function ScrollContentBlocker2(ampdoc2, accessSource, redirect) {
      this.ampdoc_ = ampdoc2;
      this.accessSource_ = accessSource;
      this.redirect_ = redirect;
    }
    var _proto2 = ScrollContentBlocker2.prototype;
    _proto2.check = function check() {
      var _this3 = this;
      Services.xhrFor(this.ampdoc_.win).fetchJson("https://block.scroll.com/check.json").then(function(response) {
        return response.json().then(function(json) {
          return json["dns"] === true;
        });
      }, function(e) {
        return _this3.blockedByScrollApp_(e.message);
      }).then(function(blockedByScrollApp) {
        if (blockedByScrollApp === true) {
          _this3.handleBlocked_();
        }
      });
    };
    _proto2.handleBlocked_ = function handleBlocked_() {
      var _this4 = this;
      if (this.redirect_ && !isProxyOrigin(this.ampdoc_.win.location)) {
        buildUrl(this.accessSource_, "https://scroll.com/loginwithapp").then(function(url) {
          var navigationService = Services.navigationForDoc(_this4.ampdoc_);
          navigationService.navigateTo(_this4.ampdoc_.win, addParamToUrl(url, "feature", "r"));
        });
      } else {
        var baseUrl = connectHostname(this.accessSource_.getAdapterConfig());
        var bar = new ScrollBar(this.ampdoc_, this.accessSource_);
        var relay = new Relay(baseUrl);
        relay.register(bar.window, function(message) {
          if (message["_scramp"] === "st") {
            bar.update(message);
          }
        });
      }
    };
    _proto2.blockedByScrollApp_ = function blockedByScrollApp_(message) {
      return message.indexOf("XHR Failed fetching (https://block.scroll.com/...): Resource blocked by content blocker") === 0;
    };
    return ScrollContentBlocker2;
  }();
  function addAnalytics(ampdoc2, vendorConfig) {
    if (vendorConfig["disableAnalytics"]) {
      return;
    }
    var doc = ampdoc2.win.document;
    var attributes = dict({
      "trigger": "immediate"
    });
    if (vendorConfig["dataConsentId"]) {
      attributes["data-block-on-consent"] = "";
    }
    var analyticsElem = createElementWithAttributes(doc, "amp-analytics", attributes);
    var scriptElem = createElementWithAttributes(doc, "script", dict({
      "type": "application/json"
    }));
    var ANALYTICS_CONFIG = analyticsConfig(connectHostname(vendorConfig));
    scriptElem.textContent = JSON.stringify(ANALYTICS_CONFIG);
    analyticsElem.appendChild(scriptElem);
    analyticsElem.CONFIG = ANALYTICS_CONFIG;
    var extensions = Services.extensionsFor(ampdoc2.win);
    extensions.installExtensionForDoc(ampdoc2, "amp-analytics");
    ampdoc2.getBody().appendChild(analyticsElem);
  }

  // extensions/amp-access-scroll/0.1/amp-access-scroll.js
  AMP.registerServiceForDoc("scroll", function(ampdoc2) {
    var element = ampdoc2.getHeadNode();
    return Services.accessServiceForDoc(element).then(function(accessService) {
      var source = accessService.getVendorSource("scroll");
      var vendor = new ScrollAccessVendor(ampdoc2, source);
      var adapter = source.getAdapter();
      adapter.registerVendor(vendor);
      return vendor;
    });
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-access-scroll-0.1.max.js.map
