(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-live-list",ev:"0.1",l:true,f:(function(AMP,_){
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
  function fromIterator(iterator) {
    var array = [];
    for (var e = iterator.next(); !e.done; e = iterator.next()) {
      array.push(e.value);
    }
    return array;
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
  function scopedQuerySelector(root, selector) {
    if (isEsm() || isScopeSelectorSupported(root)) {
      return root.querySelector(prependSelectorsWith(selector, ":scope"));
    }
    var fallbackResult = scopedQuerySelectionFallback(root, selector);
    return fallbackResult[0] === void 0 ? null : fallbackResult[0];
  }
  function childElementByAttr(parent, attr) {
    assertIsName(attr);
    return scopedQuerySelector(parent, "> [" + attr + "]");
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
  function userAssert2(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    return user().assert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
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

  // src/core/types/function/exponential-backoff.js
  function exponentialBackoffClock(opt_base) {
    var base = opt_base || 2;
    var count = 0;
    return function() {
      var wait = Math.pow(base, count++);
      wait += getJitter(wait);
      return wait * 1e3;
    };
  }
  function getJitter(wait, opt_perc) {
    opt_perc = opt_perc || 0.3;
    var jitter = wait * opt_perc * Math.random();
    if (Math.random() > 0.5) {
      jitter *= -1;
    }
    return jitter;
  }

  // extensions/amp-live-list/0.1/poller.js
  var Poller = /* @__PURE__ */ function() {
    function Poller2(win, wait, work) {
      this.win = win;
      this.wait_ = wait;
      this.work_ = work;
      this.lastTimeoutId_ = null;
      this.isRunning_ = false;
      this.backoffClock_ = null;
      this.lastWorkPromise_ = null;
    }
    var _proto = Poller2.prototype;
    _proto.getTimeout_ = function getTimeout_() {
      if (this.backoffClock_) {
        return this.backoffClock_();
      }
      return this.wait_ + getJitter(this.wait_, 0.2);
    };
    _proto.isRunning = function isRunning() {
      return this.isRunning_;
    };
    _proto.start = function start(opt_immediate) {
      if (this.isRunning_) {
        return;
      }
      this.isRunning_ = true;
      this.poll_(opt_immediate);
    };
    _proto.stop = function stop() {
      if (!this.isRunning_) {
        return;
      }
      this.isRunning_ = false;
      this.clear_();
    };
    _proto.clear_ = function clear_() {
      if (this.lastTimeoutId_) {
        Services.timerFor(this.win).cancel(this.lastTimeoutId_);
        this.lastTimeoutId_ = null;
      }
    };
    _proto.poll_ = function poll_(opt_immediate) {
      var _this = this;
      if (!this.isRunning_) {
        return;
      }
      var work = function work2() {
        _this.lastWorkPromise_ = _this.work_().then(function() {
          if (_this.backoffClock_) {
            _this.backoffClock_ = null;
          }
          _this.poll_();
        }).catch(function(err) {
          if (err.retriable) {
            if (!_this.backoffClock_) {
              _this.backoffClock_ = exponentialBackoffClock();
            }
            _this.poll_();
          } else {
            throw err;
          }
        });
      };
      if (opt_immediate) {
        work();
      } else {
        this.lastTimeoutId_ = Services.timerFor(this.win).delay(work, this.getTimeout_());
      }
    };
    return Poller2;
  }();

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

  // src/form-data-wrapper.js
  function isFormDataWrapper(o) {
    return !!o && typeof o.getFormData == "function";
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

  // extensions/amp-live-list/0.1/live-list-manager.js
  var SERVICE_ID = "liveListManager";
  var TRANSFORMED_PREFIX = "google;v=";
  var AMP_LIVE_LIST_CUSTOM_SLOT_ID = "AMP_LIVE_LIST_CUSTOM_SLOT_ID";
  var LiveListManager = /* @__PURE__ */ function() {
    function LiveListManager2(ampdoc2) {
      var _this = this;
      this.ampdoc = ampdoc2;
      this.liveLists_ = Object.create(null);
      this.extensions_ = Services.extensionsFor(this.ampdoc.win);
      this.interval_ = 15e3;
      this.intervals_ = [this.interval_];
      this.poller_ = null;
      this.url_ = this.ampdoc.getUrl();
      this.latestUpdateTime_ = 0;
      this.work_ = this.fetchDocument_.bind(this);
      this.isTransformed_ = isDocTransformed(ampdoc2.getRootNode());
      this.whenDocReady_().then(function() {
        _this.interval_ = Math.min.apply(Math, _this.intervals_);
        var initialUpdateTimes = Object.keys(_this.liveLists_).map(function(key) {
          return _this.liveLists_[key].getUpdateTime();
        });
        _this.latestUpdateTime_ = Math.max.apply(Math, initialUpdateTimes);
        if (getMode().localDev) {
          var path = _this.ampdoc.win.location.pathname;
          if (path.indexOf("/examples/live-list-update.amp.html") != -1 || path.indexOf("/examples/live-blog.amp.html") != -1 || path.indexOf("/examples/live-blog-non-floating-button.amp.html") != -1) {
            _this.interval_ = 5e3;
          }
        }
        _this.poller_ = new Poller(_this.ampdoc.win, _this.interval_, _this.work_);
        if (_this.ampdoc.isVisible() && _this.hasActiveLiveLists_()) {
          _this.poller_.start();
        }
        _this.setupVisibilityHandler_();
      });
    }
    var _proto = LiveListManager2.prototype;
    _proto.dispose = function dispose() {
      this.poller_.stop();
    };
    LiveListManager2.forDoc = function forDoc(element) {
      return getServicePromiseForDoc(element, SERVICE_ID);
    };
    _proto.hasActiveLiveLists_ = function hasActiveLiveLists_() {
      var _this2 = this;
      return Object.keys(this.liveLists_).some(function(key) {
        return _this2.liveLists_[key].isEnabled();
      });
    };
    _proto.fetchDocument_ = function fetchDocument_() {
      var url = this.url_;
      if (this.latestUpdateTime_ > 0) {
        url = addParamToUrl(url, "amp_latest_update_time", String(this.latestUpdateTime_));
      }
      if (this.isTransformed_) {
        var urlService = Services.urlForDoc(this.ampdoc.getBody());
        url = urlService.getCdnUrlOnOrigin(url);
      }
      return fetchDocument(this.ampdoc.win, url, {}).then(this.updateLiveLists_.bind(this));
    };
    _proto.updateLiveLists_ = function updateLiveLists_(doc) {
      this.installExtensionsForDoc_(doc);
      var allLiveLists = this.getLiveLists_(doc).concat(this.getCustomSlots_(doc));
      var updateTimes = allLiveLists.map(this.updateLiveList_.bind(this));
      var latestUpdateTime = Math.max.apply(Math, [0].concat(updateTimes));
      if (latestUpdateTime > 0) {
        this.latestUpdateTime_ = latestUpdateTime;
      }
      if (!this.hasActiveLiveLists_()) {
        this.poller_.stop();
      }
    };
    _proto.getLiveLists_ = function getLiveLists_(doc) {
      return Array.prototype.slice.call(doc.getElementsByTagName("amp-live-list"));
    };
    _proto.getCustomSlots_ = function getCustomSlots_(doc) {
      var _this3 = this;
      var liveListsWithCustomSlots = Object.keys(this.liveLists_).filter(function(id) {
        return _this3.liveLists_[id].hasCustomSlot();
      });
      return liveListsWithCustomSlots.map(function(id) {
        var customSlotId = _this3.liveLists_[id].element[AMP_LIVE_LIST_CUSTOM_SLOT_ID];
        return doc.getElementById(customSlotId);
      });
    };
    _proto.updateLiveList_ = function updateLiveList_(liveList) {
      var dynamicId = "i-amphtml-" + liveList.id + "-dynamic-list";
      var id = dynamicId in this.liveLists_ ? dynamicId : liveList.getAttribute("id");
      userAssert2(id, "amp-live-list must have an id.");
      userAssert2(id in this.liveLists_, "amp-live-list#%s found but did not exist on original page load.", id);
      var inClientDomLiveList = this.liveLists_[id];
      inClientDomLiveList.toggle(!liveList.hasAttribute("disabled") && !liveList.hasAttribute("live-story-disabled"));
      if (inClientDomLiveList.isEnabled()) {
        return inClientDomLiveList.update(liveList);
      }
      return 0;
    };
    _proto.register = function register(id, liveList) {
      if (id in this.liveLists_) {
        return;
      }
      this.liveLists_[id] = liveList;
      this.intervals_.push(liveList.getInterval());
      if (liveList.isEnabled() && this.poller_ && this.ampdoc.isVisible()) {
        this.poller_.start();
      }
    };
    _proto.whenDocReady_ = function whenDocReady_() {
      return this.ampdoc.whenReady();
    };
    _proto.setupVisibilityHandler_ = function setupVisibilityHandler_() {
      var _this4 = this;
      this.ampdoc.onVisibilityChanged(function() {
        if (_this4.ampdoc.isVisible() && _this4.hasActiveLiveLists_()) {
          _this4.poller_.start(true);
        } else {
          _this4.poller_.stop();
        }
      });
    };
    _proto.installExtensionsForDoc_ = function installExtensionsForDoc_(doc) {
      var _this5 = this;
      var extensions = extensionScriptsInNode(doc);
      extensions.forEach(function(_ref) {
        var extensionId = _ref.extensionId, extensionVersion = _ref.extensionVersion;
        _this5.extensions_.installExtensionForDoc(_this5.ampdoc, extensionId, extensionVersion);
      });
    };
    LiveListManager2.getMinDataPollInterval = function getMinDataPollInterval() {
      return 15e3;
    };
    LiveListManager2.getMinDataMaxItemsPerPage = function getMinDataMaxItemsPerPage() {
      return 1;
    };
    return LiveListManager2;
  }();
  function isDocTransformed(root) {
    if (!root.ownerDocument) {
      return false;
    }
    var documentElement = root.ownerDocument.documentElement;
    var transformed = documentElement.getAttribute("transformed");
    return Boolean(transformed) && transformed.startsWith(TRANSFORMED_PREFIX);
  }

  // build/amp-live-list-0.1.css.js
  var CSS2 = "amp-live-list>[update]{position:relative;z-index:1000}amp-live-list>.amp-active[update]{display:block}amp-live-list>[items]>[data-tombstone]{display:none}@keyframes amp-live-list-item-highlight{0%{box-shadow:0 0 5px 2px #51cbee}to{box-shadow:0}}\n/*# sourceURL=/extensions/amp-live-list/0.1/amp-live-list.css*/";

  // extensions/amp-live-list/0.1/amp-live-list.js
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
  var classes = {
    ITEM: "amp-live-list-item",
    NEW_ITEM: "amp-live-list-item-new"
  };
  var LiveListInterface = /* @__PURE__ */ function() {
    function LiveListInterface2() {
    }
    var _proto = LiveListInterface2.prototype;
    _proto.update = function update(unusedElement) {
    };
    _proto.getInterval = function getInterval() {
    };
    _proto.toggle = function toggle(unusedValue) {
    };
    _proto.isEnabled = function isEnabled() {
    };
    _proto.hasCustomSlot = function hasCustomSlot() {
    };
    _proto.getUpdateTime = function getUpdateTime() {
    };
    return LiveListInterface2;
  }();
  function getNumberMaxOrDefault(value, defaultValue) {
    return Math.max(parseInt(value, 10) || 0, defaultValue);
  }
  var AmpLiveList = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpLiveList2, _AMP$BaseElement);
    var _super = _createSuper(AmpLiveList2);
    function AmpLiveList2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.viewport_ = null;
      _this.manager_ = null;
      _this.updateSlot_ = null;
      _this.itemsSlot_ = null;
      _this.paginationSlot_ = null;
      _this.liveListId_ = "";
      _this.pollInterval_ = 0;
      _this.maxItemsPerPage_ = 0;
      _this.updateTime_ = 0;
      _this.isReverseOrder_ = false;
      _this.knownItems_ = Object.create(null);
      _this.pendingItemsInsert_ = [];
      _this.pendingItemsReplace_ = [];
      _this.pendingItemsTombstone_ = [];
      _this.pendingPagination_ = null;
      _this.customSlotId_ = "";
      _this.curNumOfLiveItems_ = 0;
      _this.comparator_ = _this.sortByDataSortTime_.bind(_assertThisInitialized(_this));
      return _this;
    }
    var _proto2 = AmpLiveList2.prototype;
    _proto2.isLayoutSupported = function isLayoutSupported(layout) {
      return layout == Layout_Enum.CONTAINER || layout == Layout_Enum.FIXED_HEIGHT;
    };
    _proto2.buildCallback = function buildCallback() {
      var _this2 = this;
      this.viewport_ = this.getViewport();
      LiveListManager.forDoc(this.element).then(function(manager) {
        _this2.manager_ = manager;
        _this2.manager_.register(_this2.liveListId_, _this2);
      });
      this.customSlotId_ = this.element[AMP_LIVE_LIST_CUSTOM_SLOT_ID];
      this.updateSlot_ = userAssert2(this.getUpdateSlot_(this.element), 'amp-live-list must have an "update" slot.');
      this.itemsSlot_ = userAssert2(this.getItemsSlot_(this.element), 'amp-live-list must have an "items" slot.');
      this.paginationSlot_ = this.getPaginationSlot_(this.element);
      this.liveListId_ = userAssert2(this.element.getAttribute("id"), "amp-live-list must have an id.");
      this.pollInterval_ = getNumberMaxOrDefault(this.element.getAttribute("data-poll-interval"), LiveListManager.getMinDataPollInterval());
      var maxItems = this.element.getAttribute("data-max-items-per-page");
      userAssert2(Number(maxItems) > 0 || this.element.hasAttribute("disable-pagination"), "amp-live-list # %s must have data-max-items-per-page attribute with numeric value. Found %s.", this.liveListId_, maxItems);
      var actualCount = [].slice.call(this.itemsSlot_.children).filter(function(child) {
        return !child.hasAttribute("data-tombstone");
      }).length;
      this.maxItemsPerPage_ = Math.max(getNumberMaxOrDefault(maxItems, 1), actualCount);
      this.isReverseOrder_ = this.element.getAttribute("sort") === "ascending";
      this.toggleUpdateButton_(false);
      this.eachChildElement_(this.itemsSlot_, function(item) {
        item.classList.add(classes.ITEM);
      });
      this.curNumOfLiveItems_ = this.countAndCacheValidItems_(this.itemsSlot_, true);
      this.registerDefaultAction(this.updateAction_.bind(this), "update");
      if (!this.element.hasAttribute("aria-live")) {
        this.element.setAttribute("aria-live", "polite");
      }
    };
    _proto2.hasCustomSlot = function hasCustomSlot() {
      return !!this.customSlotId_;
    };
    _proto2.isEnabled = function isEnabled() {
      return !this.element.hasAttribute("disabled");
    };
    _proto2.toggle = function toggle(value) {
      if (value) {
        this.element.removeAttribute("disabled");
      } else {
        this.element.setAttribute("disabled", "");
      }
    };
    _proto2.update = function update(updatedElement) {
      var _this3 = this;
      var container = this.getItemsSlot_(updatedElement);
      if (!container) {
        return this.updateTime_;
      }
      this.countAndCacheValidItems_(container);
      var mutateItems = this.getUpdates_(container);
      this.preparePendingItemsInsert_(mutateItems.insert);
      this.preparePendingItemsReplace_(mutateItems.replace);
      this.preparePendingItemsTombstone_(mutateItems.tombstone);
      this.pendingPagination_ = this.getPaginationSlot_(updatedElement);
      if (this.pendingItemsInsert_.length > 0) {
        if (this.element.hasAttribute("auto-insert")) {
          this.updateAction_();
        }
        this.mutateElement(function() {
          _this3.toggleUpdateButton_(true);
          _this3.viewport_.updateFixedLayer();
        });
      } else if (this.pendingItemsReplace_.length > 0 || this.pendingItemsTombstone_.length > 0) {
        this.updateAction_();
      }
      return this.updateTime_;
    };
    _proto2.updateAction_ = function updateAction_() {
      var _this4 = this;
      var hasInsertItems = this.pendingItemsInsert_.length > 0;
      var hasTombstoneItems = this.pendingItemsTombstone_.length > 0;
      var hasReplaceItems = this.pendingItemsReplace_.length > 0;
      var updateHasNewItems = hasInsertItems || hasReplaceItems;
      var promise = this.mutateElement(function() {
        var itemsSlot = user().assertElement(_this4.itemsSlot_);
        if (hasInsertItems) {
          _this4.eachChildElement_(itemsSlot, function(child) {
            child.classList.remove(classes.NEW_ITEM);
          });
          _this4.curNumOfLiveItems_ += _this4.insert_(itemsSlot, _this4.pendingItemsInsert_);
          _this4.pendingItemsInsert_.length = 0;
        }
        if (_this4.pendingItemsReplace_.length > 0) {
          _this4.replace_(itemsSlot, _this4.pendingItemsReplace_);
          _this4.pendingItemsReplace_.length = 0;
        }
        if (_this4.pendingItemsTombstone_.length > 0) {
          _this4.curNumOfLiveItems_ -= _this4.tombstone_(itemsSlot, _this4.pendingItemsTombstone_);
          _this4.pendingItemsTombstone_.length = 0;
        }
        if ((hasInsertItems || hasTombstoneItems) && _this4.paginationSlot_ && _this4.pendingPagination_) {
          _this4.element.replaceChild(_this4.pendingPagination_, _this4.paginationSlot_);
          _this4.paginationSlot_ = _this4.getPaginationSlot_(_this4.element);
        }
        _this4.toggleUpdateButton_(false);
        _this4.pendingPagination_ = null;
        return _this4.removeOverflowItems_(itemsSlot);
      });
      if (updateHasNewItems) {
        promise = promise.then(function() {
          _this4.sendAmpDomUpdateEvent_();
        });
      }
      if (hasInsertItems && !this.element.hasAttribute("disable-scrolling")) {
        promise = promise.then(function() {
          var elementToScrollTo = _this4.isReverseOrder_ && _this4.itemsSlot_.lastElementChild ? _this4.itemsSlot_.lastElementChild : _this4.element;
          var pos = _this4.isReverseOrder_ ? "bottom" : "top";
          return _this4.viewport_.animateScrollIntoView(elementToScrollTo, pos);
        });
      }
      return promise;
    };
    _proto2.toggleUpdateButton_ = function toggleUpdateButton_(visible) {
      this.updateSlot_.classList.toggle("amp-hidden", !visible);
      this.updateSlot_.classList.toggle("amp-active", visible);
    };
    _proto2.insert_ = function insert_(parent, orphans) {
      var _this5 = this;
      var count = 0;
      orphans.forEach(function(orphan) {
        if (_this5.itemsSlot_.childElementCount === 0) {
          _this5.itemsSlot_.appendChild(orphan);
        } else {
          var orphanSortTime = _this5.getSortTime_(orphan);
          if (!_this5.isValidTime_(orphanSortTime)) {
            return;
          }
          if (_this5.isReverseOrder_) {
            for (var child = _this5.itemsSlot_.lastElementChild; child; child = child.previousElementSibling) {
              var childSortTime = _this5.getSortTime_(child);
              if (!_this5.isValidTime_(childSortTime)) {
                continue;
              }
              if (orphanSortTime >= childSortTime) {
                _this5.itemsSlot_.insertBefore(orphan, child.nextElementSibling);
                count++;
                break;
              } else if (!child.previousElementSibling) {
                _this5.itemsSlot_.insertBefore(orphan, child);
                count++;
                break;
              }
              continue;
            }
          } else {
            for (var _child = _this5.itemsSlot_.firstElementChild; _child; _child = _child.nextElementSibling) {
              var _childSortTime = _this5.getSortTime_(_child);
              if (!_this5.isValidTime_(_childSortTime)) {
                continue;
              }
              if (orphanSortTime >= _childSortTime) {
                _this5.itemsSlot_.insertBefore(orphan, _child);
                count++;
                break;
              } else if (!_child.nextElementSibling) {
                _this5.itemsSlot_.appendChild(orphan);
                count++;
                break;
              }
            }
          }
        }
      });
      return count;
    };
    _proto2.replace_ = function replace_(parent, orphans) {
      var count = 0;
      orphans.forEach(function(orphan) {
        var orphanId = orphan.getAttribute("id");
        var liveElement = parent.querySelector("#" + orphanId);
        if (!liveElement) {
          return;
        }
        parent.replaceChild(orphan, liveElement);
        count++;
      });
      return count;
    };
    _proto2.tombstone_ = function tombstone_(parent, orphans) {
      var count = 0;
      orphans.forEach(function(orphan) {
        var orphanId = orphan.getAttribute("id");
        var liveElement = parent.querySelector("#" + orphanId);
        if (!liveElement) {
          return;
        }
        liveElement.setAttribute("data-tombstone", "");
        liveElement.textContent = "";
        count++;
      });
      return count;
    };
    _proto2.removeOverflowItems_ = function removeOverflowItems_(parent) {
      var _this6 = this;
      var numOfItemsToDelete = this.curNumOfLiveItems_ - this.maxItemsPerPage_;
      if (numOfItemsToDelete < 1) {
        return resolvedPromise();
      }
      var deleteItemsCandidates = [];
      var actualDeleteItems = [];
      if (this.isReverseOrder_) {
        for (var child = parent.firstElementChild; child; child = child.nextElementSibling) {
          if (deleteItemsCandidates.length >= numOfItemsToDelete) {
            break;
          }
          if (!this.isChildTombstone_(child)) {
            deleteItemsCandidates.push(child);
          }
        }
      } else {
        for (var _child2 = parent.lastElementChild; _child2; _child2 = _child2.previousElementSibling) {
          if (deleteItemsCandidates.length >= numOfItemsToDelete) {
            break;
          }
          if (!this.isChildTombstone_(_child2)) {
            deleteItemsCandidates.push(_child2);
          }
        }
      }
      return this.getVsync().runPromise({
        measure: function measure() {
          for (var i = 0; i < deleteItemsCandidates.length; i++) {
            var _child3 = deleteItemsCandidates[i];
            if (_this6.isReverseOrder_) {
              if (!_this6.isElementAboveViewport_(_child3)) {
                break;
              }
            } else {
              if (!_this6.isElementBelowViewport_(_child3)) {
                break;
              }
            }
            actualDeleteItems.push(_child3);
          }
        },
        mutate: function mutate() {
          actualDeleteItems.forEach(function(child2) {
            parent.removeChild(child2);
            _this6.curNumOfLiveItems_--;
          });
        }
      });
    };
    _proto2.preparePendingItemsInsert_ = function preparePendingItemsInsert_(items) {
      items.sort(this.comparator_).forEach(function(elem) {
        elem.classList.add(classes.ITEM);
        elem.classList.add(classes.NEW_ITEM);
      });
      this.pendingItemsInsert_.push.apply(this.pendingItemsInsert_, items);
    };
    _proto2.preparePendingItemsReplace_ = function preparePendingItemsReplace_(items) {
      var _this7 = this;
      items.forEach(function(elem) {
        var hasPendingCounterpart = _this7.hasMatchingPendingElement_(_this7.pendingItemsReplace_, elem);
        elem.classList.add("amp-live-list-item");
        if (hasPendingCounterpart == -1) {
          _this7.pendingItemsReplace_.push(elem);
        } else {
          _this7.pendingItemsReplace_[hasPendingCounterpart] = elem;
        }
      });
    };
    _proto2.preparePendingItemsTombstone_ = function preparePendingItemsTombstone_(items) {
      this.pendingItemsTombstone_.push.apply(this.pendingItemsTombstone_, items);
    };
    _proto2.hasMatchingPendingElement_ = function hasMatchingPendingElement_(pendingQueue, elem) {
      for (var i = 0; i < pendingQueue.length; i++) {
        if (pendingQueue[i].getAttribute("id") == elem.getAttribute("id")) {
          return i;
        }
      }
      return -1;
    };
    _proto2.getInterval = function getInterval() {
      return this.pollInterval_;
    };
    _proto2.getUpdates_ = function getUpdates_(updatedElement) {
      var insert = [];
      var replace = [];
      var tombstone = [];
      for (var child = updatedElement.firstElementChild; child; child = child.nextElementSibling) {
        var id = child.getAttribute("id");
        var sortTime = this.getSortTime_(child);
        if (!id || !this.isValidTime_(sortTime)) {
          continue;
        }
        if (this.isChildNew_(child)) {
          var orphan = this.win.document.importNode(child, true);
          insert.push(orphan);
          this.cacheChild_(child);
        } else if (this.isChildUpdate_(child)) {
          var updateTime = this.getUpdateTime_(child);
          this.knownItems_[id] = updateTime;
          var _orphan = this.win.document.importNode(child, true);
          if (updateTime > this.updateTime_) {
            this.updateTime_ = updateTime;
          }
          replace.push(_orphan);
        } else if (this.isChildTombstone_(child) && this.knownItems_[id] != -1) {
          this.knownItems_[id] = -1;
          tombstone.push(child);
        }
      }
      return {
        insert: insert,
        replace: replace,
        tombstone: tombstone
      };
    };
    _proto2.isChildNew_ = function isChildNew_(elem) {
      var id = elem.getAttribute("id");
      if (elem.hasAttribute("data-tombstone")) {
        return false;
      }
      return !(id in this.knownItems_);
    };
    _proto2.isChildUpdate_ = function isChildUpdate_(elem) {
      if (!elem.hasAttribute("data-update-time")) {
        return false;
      }
      if (elem.hasAttribute("data-tombstone")) {
        return false;
      }
      var id = elem.getAttribute("id");
      var updateTime = this.getUpdateTime_(elem);
      return id in this.knownItems_ && this.knownItems_[id] != -1 && updateTime > this.knownItems_[id];
    };
    _proto2.isChildTombstone_ = function isChildTombstone_(elem) {
      return elem.hasAttribute("data-tombstone");
    };
    _proto2.cacheChild_ = function cacheChild_(child) {
      var id = child.getAttribute("id");
      var updateTime = this.getUpdateTime_(child);
      if (updateTime > this.updateTime_) {
        this.updateTime_ = updateTime;
      }
      this.knownItems_[id] = updateTime;
    };
    _proto2.isValidChild_ = function isValidChild_(child) {
      return !!child.hasAttribute("id") && this.isValidTime_(this.getSortTime_(child));
    };
    _proto2.countAndCacheValidItems_ = function countAndCacheValidItems_(element, opt_cacheIds) {
      var _this8 = this;
      var numItems = 0;
      this.eachChildElement_(element, function(child) {
        if (_this8.isValidChild_(child)) {
          numItems++;
          if (opt_cacheIds) {
            _this8.cacheChild_(child);
          }
        }
      });
      return numItems;
    };
    _proto2.eachChildElement_ = function eachChildElement_(parent, cb) {
      for (var child = parent.firstElementChild; child; child = child.nextElementSibling) {
        cb(child);
      }
    };
    _proto2.getCustomSlot_ = function getCustomSlot_(element) {
      if (element.id === this.customSlotId_) {
        return element;
      }
      return this.win.document.getElementById(this.customSlotId_);
    };
    _proto2.getUpdateSlot_ = function getUpdateSlot_(parent) {
      if (this.customSlotId_) {
        return this.getCustomSlot_(parent);
      }
      return childElementByAttr(parent, "update");
    };
    _proto2.getItemsSlot_ = function getItemsSlot_(parent) {
      if (this.customSlotId_) {
        return this.getCustomSlot_(parent);
      }
      return childElementByAttr(parent, "items");
    };
    _proto2.getPaginationSlot_ = function getPaginationSlot_(parent) {
      return childElementByAttr(parent, "pagination");
    };
    _proto2.sortByDataSortTime_ = function sortByDataSortTime_(a, b) {
      return this.getSortTime_(a) - this.getSortTime_(b);
    };
    _proto2.getSortTime_ = function getSortTime_(elem) {
      return this.getTimeAttr_(elem, "data-sort-time");
    };
    _proto2.isValidTime_ = function isValidTime_(time) {
      return time > 0;
    };
    _proto2.getUpdateTime_ = function getUpdateTime_(elem) {
      if (!elem.hasAttribute("data-update-time")) {
        return this.getSortTime_(elem);
      }
      return this.getTimeAttr_(elem, "data-update-time");
    };
    _proto2.getTimeAttr_ = function getTimeAttr_(elem, attr) {
      var time = Number(elem.getAttribute(attr));
      return time;
    };
    _proto2.isElementBelowViewport_ = function isElementBelowViewport_(element) {
      return this.viewport_.getLayoutRect(element).top > this.viewport_.getScrollTop() + this.viewport_.getSize().height;
    };
    _proto2.isElementAboveViewport_ = function isElementAboveViewport_(element) {
      return this.viewport_.getLayoutRect(element).bottom < this.viewport_.getScrollTop();
    };
    _proto2.getUpdateTime = function getUpdateTime() {
      return this.updateTime_;
    };
    _proto2.sendAmpDomUpdateEvent_ = function sendAmpDomUpdateEvent_() {
      var event = this.win.document.createEvent("Event");
      event.initEvent(AmpEvents_Enum.DOM_UPDATE, true, true);
      this.itemsSlot_.dispatchEvent(event);
    };
    return AmpLiveList2;
  }(AMP.BaseElement);
  AMP.registerElement("amp-live-list", AmpLiveList, CSS2);
  AMP.registerServiceForDoc(SERVICE_ID, LiveListManager);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-live-list-0.1.max.js.map
