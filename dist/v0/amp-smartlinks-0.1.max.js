(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-smartlinks",ev:"0.1",l:true,f:(function(AMP,_){
(function() {
  // src/core/constants/common-signals.js
  var CommonSignals_Enum = {
    READY_TO_UPGRADE: "ready-upgrade",
    UPGRADED: "upgraded",
    BUILT: "built",
    MOUNTED: "mounted",
    LOAD_START: "load-start",
    RENDER_START: "render-start",
    LOAD_END: "load-end",
    INI_LOAD: "ini-load",
    UNLOAD: "unload"
  };

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

  // src/core/types/object/json.js
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

  // src/utils/event-helper.js
  function getData(event) {
    return event.data;
  }

  // extensions/amp-smartlinks/0.1/constants.js
  var BASE_API_URL = "https://api.narrativ.com/api";
  var ENDPOINTS = {
    PAGE_IMPRESSION_ENDPOINT: BASE_API_URL + "/v1/events/impressions/page_impression/",
    NRTV_CONFIG_ENDPOINT: BASE_API_URL + "/v0/publishers/.nrtv_slug./amp_config/",
    LINKMATE_ENDPOINT: BASE_API_URL + "/v1/publishers/.pub_id./linkmate/smart_links/"
  };

  // extensions/amp-skimlinks/0.1/link-rewriter/two-steps-response.js
  var TwoStepsResponse = function TwoStepsResponse2(syncResponse, asyncResponse) {
    this.syncResponse = syncResponse;
    this.asyncResponse = asyncResponse;
  };

  // extensions/amp-smartlinks/0.1/linkmate.js
  var Linkmate = /* @__PURE__ */ function() {
    function Linkmate2(ampDoc, xhr, linkmateOptions, win) {
      this.xhr_ = xhr;
      this.requestExclusiveLinks_ = linkmateOptions.exclusiveLinks;
      this.publisherID_ = linkmateOptions.publisherID;
      this.linkAttribute_ = linkmateOptions.linkAttribute;
      this.anchorList_ = null;
      this.linkmateResponse_ = null;
      this.win_ = win;
    }
    var _proto = Linkmate2.prototype;
    _proto.runLinkmate = function runLinkmate(anchorList) {
      var _this = this;
      var syncMappedLinks = null;
      var anchorListChanged = this.anchorList_ && !deepEquals(this.anchorList_, anchorList);
      if (this.linkmateResponse_ && anchorListChanged) {
        syncMappedLinks = this.mapLinks_();
      }
      if (!this.linkmateResponse_ || anchorListChanged) {
        var asyncMappedLinks = this.postToLinkmate_(anchorList).then(function(res) {
          _this.linkmateResponse_ = getData(res)[0]["smart_links"];
          _this.anchorList_ = anchorList;
          return _this.mapLinks_();
        });
        return new TwoStepsResponse(syncMappedLinks, asyncMappedLinks);
      } else {
        this.anchorList_ = anchorList;
        return new TwoStepsResponse(syncMappedLinks, null);
      }
    };
    _proto.postToLinkmate_ = function postToLinkmate_(anchorList) {
      var linksPayload = this.buildLinksPayload_(anchorList);
      var editPayload = this.getEditInfo_();
      var payload = dict({
        "article": editPayload,
        "links": linksPayload
      });
      var fetchUrl = ENDPOINTS.LINKMATE_ENDPOINT.replace(".pub_id.", this.publisherID_.toString());
      var postOptions = {
        method: "POST",
        ampCors: false,
        headers: dict({
          "Content-Type": "application/json"
        }),
        body: payload
      };
      return this.xhr_.fetchJson(fetchUrl, postOptions).then(function(res) {
        return res.json();
      });
    };
    _proto.buildLinksPayload_ = function buildLinksPayload_(anchorList) {
      var _this2 = this;
      var postLinks = [];
      anchorList.forEach(function(anchor) {
        var link = anchor.getAttribute(_this2.linkAttribute_);
        if (/shop-links.co/.test(link)) {
          if (!/\?amp=true$/.test(link)) {
            anchor[_this2.linkAttribute_] = anchor[_this2.linkAttribute_] + "?amp=true";
          }
          return;
        }
        if (!/#donotlink$/.test(link)) {
          var exclusive = _this2.requestExclusiveLinks_ || /#locklink$/.test(link);
          var linkObj = {
            "raw_url": link,
            "exclusive_match_requested": exclusive,
            "link_source": "linkmate"
          };
          postLinks.push(linkObj);
        }
      });
      return postLinks;
    };
    _proto.getEditInfo_ = function getEditInfo_() {
      return dict({
        "name": this.getEditName_(),
        "url": this.getLocationHref_()
      });
    };
    _proto.getEditName_ = function getEditName_() {
      var editName = null;
      if (this.win_.document.getElementsByTagName("title").length > 0) {
        editName = this.win_.document.getElementsByTagName("title")[0].text;
      }
      return editName;
    };
    _proto.getLocationHref_ = function getLocationHref_() {
      return this.win_.location.href;
    };
    _proto.mapLinks_ = function mapLinks_() {
      var _this3 = this;
      var mappings = [];
      this.anchorList_.forEach(function(anchor) {
        _this3.linkmateResponse_.forEach(function(smartLink) {
          if (anchor.getAttribute(_this3.linkAttribute_) === smartLink["url"] && smartLink["auction_id"]) {
            mappings.push({
              anchor: anchor,
              replacementUrl: "https://shop-links.co/" + smartLink["auction_id"] + "/?amp=true"
            });
          }
        });
      });
      return mappings;
    };
    return Linkmate2;
  }();

  // extensions/amp-smartlinks/0.1/linkmate-options.js
  function getConfigOptions(element) {
    return {
      nrtvSlug: getNrtvAccountName_(element),
      linkmateEnabled: hasLinkmateFlag_(element),
      exclusiveLinks: hasExclusiveLinksFlag_(element),
      linkAttribute: getLinkAttribute_(element),
      linkSelector: getLinkSelector_(element)
    };
  }
  function getNrtvAccountName_(element) {
    var nrtvSlug = element.getAttribute("nrtv-account-name");
    return nrtvSlug.toLowerCase();
  }
  function hasLinkmateFlag_(element) {
    return !!element.hasAttribute("linkmate");
  }
  function hasExclusiveLinksFlag_(element) {
    return !!element.hasAttribute("exclusive-links");
  }
  function getLinkAttribute_(element) {
    var linkAttribute = element.getAttribute("link-attribute");
    return linkAttribute ? linkAttribute.toLowerCase() : "href";
  }
  function getLinkSelector_(element) {
    var linkSelector = element.getAttribute("link-selector");
    return linkSelector ? linkSelector.toLowerCase() : "a";
  }

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

  // src/extension-analytics.js
  function insertAnalyticsElement(parentElement, config, loadAnalytics, disableImmediate) {
    if (loadAnalytics === void 0) {
      loadAnalytics = false;
    }
    if (disableImmediate === void 0) {
      disableImmediate = false;
    }
    var doc = parentElement.ownerDocument;
    var analyticsElem = createElementWithAttributes(doc, "amp-analytics", dict({
      "sandbox": "true",
      "trigger": disableImmediate ? "" : "immediate"
    }));
    var scriptElem = createElementWithAttributes(doc, "script", dict({
      "type": "application/json"
    }));
    scriptElem.textContent = JSON.stringify(config);
    analyticsElem.appendChild(scriptElem);
    analyticsElem.CONFIG = config;
    if (loadAnalytics) {
      var extensions = Services.extensionsFor(getWin(parentElement));
      var ampdoc2 = Services.ampdoc(parentElement);
      extensions.installExtensionForDoc(ampdoc2, "amp-analytics");
    } else {
      Services.analyticsForDocOrNull(parentElement).then(function(analytics) {
        devAssert2(analytics);
      });
    }
    parentElement.appendChild(analyticsElem);
    return analyticsElem;
  }
  var CustomEventReporter = /* @__PURE__ */ function() {
    function CustomEventReporter2(parent, config) {
      var _this = this;
      devAssert2(config["triggers"], "Config must have triggers defined");
      this.id_ = parent.getResourceId();
      this.parent_ = parent;
      this.config_ = config;
      for (var event in config["triggers"]) {
        var eventType = config["triggers"][event]["on"];
        devAssert2(eventType, "CustomEventReporter config must specify trigger eventType");
        var newEventType = this.getEventTypeInSandbox_(eventType);
        config["triggers"][event]["on"] = newEventType;
      }
      this.parent_.signals().whenSignal(CommonSignals_Enum.LOAD_START).then(function() {
        insertAnalyticsElement(_this.parent_, config, true);
      });
    }
    var _proto = CustomEventReporter2.prototype;
    _proto.trigger = function trigger(eventType, opt_vars) {
      devAssert2(this.config_["triggers"][eventType], "Cannot trigger non initiated eventType");
      triggerAnalyticsEvent(this.parent_, this.getEventTypeInSandbox_(eventType), opt_vars, false);
    };
    _proto.getEventTypeInSandbox_ = function getEventTypeInSandbox_(eventType) {
      return "sandbox-" + this.id_ + "-" + eventType;
    };
    return CustomEventReporter2;
  }();
  var CustomEventReporterBuilder = /* @__PURE__ */ function() {
    function CustomEventReporterBuilder2(parent) {
      this.parent_ = parent;
      this.config_ = {
        "requests": {},
        "triggers": {}
      };
    }
    var _proto2 = CustomEventReporterBuilder2.prototype;
    _proto2.setTransportConfig = function setTransportConfig(transportConfig) {
      this.config_["transport"] = transportConfig;
    };
    _proto2.setExtraUrlParams = function setExtraUrlParams(extraUrlParamsConfig) {
      this.config_["extraUrlParams"] = extraUrlParamsConfig;
    };
    _proto2.track = function track(eventType, request) {
      request = isArray(request) ? request : [request];
      devAssert2(!this.config_["triggers"][eventType], "customEventReporterBuilder should not track same eventType twice");
      var requestList = [];
      for (var i = 0; i < request.length; i++) {
        var requestName = eventType + "-request-" + i;
        this.config_["requests"][requestName] = request[i];
        requestList.push(requestName);
      }
      this.config_["triggers"][eventType] = {
        "on": eventType,
        "request": requestList
      };
      return this;
    };
    _proto2.build = function build() {
      devAssert2(this.config_, "CustomEventReporter already built");
      var report = new CustomEventReporter(this.parent_, this.config_);
      this.config_ = null;
      return report;
    };
    return CustomEventReporterBuilder2;
  }();

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

  // src/core/data-structures/priority-queue.js
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var PriorityQueue = /* @__PURE__ */ function() {
    function PriorityQueue2() {
      this.queue_ = [];
    }
    var _proto = PriorityQueue2.prototype;
    _proto.peek = function peek() {
      var l = this.length;
      if (!l) {
        return null;
      }
      return this.queue_[l - 1].item;
    };
    _proto.enqueue = function enqueue(item, priority) {
      if (isNaN(priority)) {
        throw new Error("Priority must not be NaN.");
      }
      var i = this.binarySearch_(priority);
      this.queue_.splice(i, 0, {
        item: item,
        priority: priority
      });
    };
    _proto.binarySearch_ = function binarySearch_(target) {
      var i = -1;
      var lo = 0;
      var hi = this.length;
      while (lo <= hi) {
        i = Math.floor((lo + hi) / 2);
        if (i === this.length) {
          break;
        }
        if (this.queue_[i].priority < target) {
          lo = i + 1;
        } else if (i > 0 && this.queue_[i - 1].priority >= target) {
          hi = i - 1;
        } else {
          break;
        }
      }
      return i;
    };
    _proto.forEach = function forEach(callback) {
      var index = this.length;
      while (index--) {
        callback(this.queue_[index].item);
      }
    };
    _proto.dequeue = function dequeue() {
      if (!this.length) {
        return null;
      }
      return this.queue_.pop().item;
    };
    _createClass(PriorityQueue2, [{
      key: "length",
      get: function get() {
        return this.queue_.length;
      }
    }]);
    return PriorityQueue2;
  }();

  // src/url.js
  var SERVING_TYPE_PREFIX = new Set([
    "c",
    "v",
    "a",
    "ad"
  ]);

  // src/service/navigation.js
  var Priority_Enum = {
    LINK_REWRITER_MANAGER: 0,
    ANALYTICS_LINKER: 2
  };

  // extensions/amp-skimlinks/0.1/link-rewriter/constants.js
  var EVENTS = {
    PAGE_SCANNED: "PAGE_SCANNED",
    CLICK: "CLICK"
  };
  var ORIGINAL_URL_ATTRIBUTE = "data-link-rewriter-original-url";
  var PRIORITY_META_TAG_NAME = "amp-link-rewriter-priorities";

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

  // extensions/amp-skimlinks/0.1/link-rewriter/link-replacement-cache.js
  var LinkReplacementCache = /* @__PURE__ */ function() {
    function LinkReplacementCache2() {
      this.anchorList_ = [];
      this.replacementList_ = [];
    }
    var _proto = LinkReplacementCache2.prototype;
    _proto.updateLinkList = function updateLinkList(newAnchorList) {
      this.replacementList_ = newAnchorList.map(this.getReplacementUrlForAnchor.bind(this));
      this.anchorList_ = newAnchorList;
    };
    _proto.updateReplacementUrls = function updateReplacementUrls(replacementList) {
      var _this = this;
      replacementList.forEach(function(replacementItem) {
        var anchor = replacementItem.anchor, replacementUrl = replacementItem.replacementUrl;
        var anchorIndex = _this.anchorList_.indexOf(anchor);
        if (anchorIndex !== -1) {
          _this.replacementList_[anchorIndex] = replacementUrl;
        }
      });
    };
    _proto.getReplacementUrlForAnchor = function getReplacementUrlForAnchor(anchor) {
      var index = this.anchorList_.indexOf(anchor);
      return index !== -1 ? this.replacementList_[index] : null;
    };
    _proto.isInCache = function isInCache(anchor) {
      return this.anchorList_.indexOf(anchor) !== -1;
    };
    _proto.getAnchorReplacementList = function getAnchorReplacementList() {
      var _this2 = this;
      return this.anchorList_.map(function(anchor) {
        return {
          anchor: anchor,
          replacementUrl: _this2.getReplacementUrlForAnchor(anchor)
        };
      });
    };
    return LinkReplacementCache2;
  }();

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
  function isVar(property) {
    return property.startsWith("--");
  }

  // src/style-installer.js
  var bodyMadeVisible = false;
  function makeBodyVisibleRecovery(doc) {
    devAssert2(doc.defaultView, "Passed in document must have a defaultView");
    if (bodyMadeVisible) {
      return;
    }
    bodyMadeVisible = true;
    setBodyVisibleStyles(doc);
  }
  function setBodyVisibleStyles(doc) {
    setStyles(dev().assertElement(doc.body), {
      opacity: 1,
      visibility: "visible",
      "animation": "none"
    });
  }

  // src/chunk.js
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
  var TAG = "CHUNK";
  var deactivated = /nochunking=1/.test(self.location.hash);
  var allowLongTasks = false;
  var resolved2 = resolvedPromise();
  function chunkServiceForDoc(elementOrAmpDoc) {
    registerServiceBuilderForDoc(elementOrAmpDoc, "chunk", Chunks);
    return getServiceForDoc(elementOrAmpDoc, "chunk");
  }
  function chunk(elementOrAmpDoc, fn, priority) {
    if (deactivated) {
      resolved2.then(fn);
      return;
    }
    var service = chunkServiceForDoc(elementOrAmpDoc);
    service.run(fn, priority);
  }
  var ChunkPriority_Enum = {
    HIGH: 20,
    LOW: 10,
    BACKGROUND: 0
  };
  var TaskState_Enum = {
    NOT_RUN: "not_run",
    RUN: "run"
  };
  var Task = /* @__PURE__ */ function() {
    function Task2(fn) {
      this.state = TaskState_Enum.NOT_RUN;
      this.fn_ = fn;
    }
    var _proto = Task2.prototype;
    _proto.runTask_ = function runTask_(idleDeadline) {
      if (this.state == TaskState_Enum.RUN) {
        return;
      }
      this.state = TaskState_Enum.RUN;
      try {
        this.fn_(idleDeadline);
      } catch (e) {
        this.onTaskError_(e);
        throw e;
      }
    };
    _proto.getName_ = function getName_() {
      return this.fn_.displayName || this.fn_.name;
    };
    _proto.onTaskError_ = function onTaskError_(unusedError) {
    };
    _proto.immediateTriggerCondition_ = function immediateTriggerCondition_() {
      return false;
    };
    _proto.useRequestIdleCallback_ = function useRequestIdleCallback_() {
      return false;
    };
    return Task2;
  }();
  var StartupTask = /* @__PURE__ */ function(_Task) {
    _inherits(StartupTask2, _Task);
    var _super = _createSuper(StartupTask2);
    function StartupTask2(fn, win, chunks) {
      var _this;
      _this = _super.call(this, fn);
      _this.chunks_ = chunks;
      return _this;
    }
    var _proto2 = StartupTask2.prototype;
    _proto2.onTaskError_ = function onTaskError_(unusedError) {
      makeBodyVisibleRecovery(self.document);
    };
    _proto2.immediateTriggerCondition_ = function immediateTriggerCondition_() {
      return this.isVisible_();
    };
    _proto2.useRequestIdleCallback_ = function useRequestIdleCallback_() {
      return this.chunks_.coreReady_;
    };
    _proto2.isVisible_ = function isVisible_() {
      return this.chunks_.ampdoc.isVisible();
    };
    return StartupTask2;
  }(Task);
  var Chunks = /* @__PURE__ */ function() {
    function Chunks2(ampDoc) {
      var _this2 = this;
      this.ampdoc = ampDoc;
      this.win_ = ampDoc.win;
      this.tasks_ = new PriorityQueue();
      this.boundExecute_ = this.execute_.bind(this);
      this.durationOfLastExecution_ = 0;
      this.supportsInputPending_ = !!(this.win_.navigator.scheduling && this.win_.navigator.scheduling.isInputPending);
      this.scheduledImmediateInvocation_ = false;
      this.bodyIsVisible_ = this.win_.document.documentElement.hasAttribute("i-amphtml-no-boilerplate");
      this.win_.addEventListener("message", function(e) {
        if (getData(e) == "amp-macro-task") {
          _this2.execute_(null);
        }
      });
      this.coreReady_ = false;
      Services.viewerPromiseForDoc(ampDoc).then(function() {
        _this2.coreReady_ = true;
      });
      ampDoc.onVisibilityChanged(function() {
        if (ampDoc.isVisible()) {
          _this2.schedule_();
        }
      });
    }
    var _proto3 = Chunks2.prototype;
    _proto3.run = function run(fn, priority) {
      var t = new Task(fn);
      this.enqueueTask_(t, priority);
    };
    _proto3.runForStartup = function runForStartup(fn) {
      var t = new StartupTask(fn, this.win_, this);
      this.enqueueTask_(t, Number.POSITIVE_INFINITY);
    };
    _proto3.enqueueTask_ = function enqueueTask_(task, priority) {
      this.tasks_.enqueue(task, priority);
      this.schedule_();
    };
    _proto3.nextTask_ = function nextTask_(opt_dequeue) {
      var t = this.tasks_.peek();
      while (t && t.state !== TaskState_Enum.NOT_RUN) {
        this.tasks_.dequeue();
        t = this.tasks_.peek();
      }
      if (t && opt_dequeue) {
        this.tasks_.dequeue();
      }
      return t;
    };
    _proto3.execute_ = function execute_(idleDeadline) {
      var _this3 = this;
      var t = this.nextTask_(true);
      if (!t) {
        this.scheduledImmediateInvocation_ = false;
        this.durationOfLastExecution_ = 0;
        return false;
      }
      var before;
      try {
        before = Date.now();
        t.runTask_(idleDeadline);
      } finally {
        resolved2.then().then().then().then().then().then().then().then().then(function() {
          _this3.scheduledImmediateInvocation_ = false;
          _this3.durationOfLastExecution_ += Date.now() - before;
          dev().fine(TAG, t.getName_(), "Chunk duration", Date.now() - before, _this3.durationOfLastExecution_);
          _this3.schedule_();
        });
      }
      return true;
    };
    _proto3.executeAsap_ = function executeAsap_(idleDeadline) {
      var _this4 = this;
      if (!allowLongTasks && this.bodyIsVisible_ && (this.supportsInputPending_ ? this.win_.navigator.scheduling.isInputPending() : this.durationOfLastExecution_ > 5)) {
        this.durationOfLastExecution_ = 0;
        this.requestMacroTask_();
        return;
      }
      resolved2.then(function() {
        _this4.boundExecute_(idleDeadline);
      });
    };
    _proto3.schedule_ = function schedule_() {
      if (this.scheduledImmediateInvocation_) {
        return;
      }
      var nextTask = this.nextTask_();
      if (!nextTask) {
        return;
      }
      if (nextTask.immediateTriggerCondition_()) {
        this.scheduledImmediateInvocation_ = true;
        this.executeAsap_(null);
        return;
      }
      if (nextTask.useRequestIdleCallback_() && this.win_.requestIdleCallback) {
        onIdle(this.win_, 15, 2e3, this.boundExecute_);
        return;
      }
      this.requestMacroTask_();
    };
    _proto3.requestMacroTask_ = function requestMacroTask_() {
      this.win_.postMessage("amp-macro-task", "*");
    };
    return Chunks2;
  }();
  function onIdle(win, minimumTimeRemaining, timeout, fn) {
    var startTime = Date.now();
    function rIC(info) {
      if (info.timeRemaining() < minimumTimeRemaining) {
        var remainingTimeout = timeout - (Date.now() - startTime);
        if (remainingTimeout <= 0 || info.didTimeout) {
          dev().fine(TAG, "Timed out", timeout, info.didTimeout);
          fn(info);
        } else {
          dev().fine(TAG, "Rescheduling with", remainingTimeout, info.timeRemaining());
          win.requestIdleCallback(rIC, {
            timeout: remainingTimeout
          });
        }
      } else {
        dev().fine(TAG, "Running idle callback with ", minimumTimeRemaining);
        fn(info);
      }
    }
    win.requestIdleCallback(rIC, {
      timeout: timeout
    });
  }

  // extensions/amp-skimlinks/0.1/link-rewriter/link-rewriter.js
  var LinkRewriter = /* @__PURE__ */ function() {
    function LinkRewriter2(rootNode, id, resolveUnknownLinks, options) {
      this.events = new Observable();
      this.id = id;
      this.rootNode_ = rootNode;
      this.resolveUnknownLinks_ = resolveUnknownLinks;
      this.linkSelector_ = options.linkSelector || "a";
      this.restoreDelay_ = 300;
      this.anchorReplacementCache_ = new LinkReplacementCache();
    }
    var _proto = LinkRewriter2.prototype;
    _proto.getReplacementUrl = function getReplacementUrl(anchor) {
      if (!this.isWatchingLink(anchor)) {
        return null;
      }
      return this.anchorReplacementCache_.getReplacementUrlForAnchor(anchor);
    };
    _proto.getAnchorReplacementList = function getAnchorReplacementList() {
      return this.anchorReplacementCache_.getAnchorReplacementList();
    };
    _proto.isWatchingLink = function isWatchingLink(anchor) {
      return this.anchorReplacementCache_.isInCache(anchor);
    };
    _proto.rewriteAnchorUrl = function rewriteAnchorUrl(anchor) {
      var newUrl = this.getReplacementUrl(anchor);
      if (!newUrl || newUrl === anchor.href) {
        return false;
      }
      anchor.setAttribute(ORIGINAL_URL_ATTRIBUTE, anchor.href);
      anchor.href = newUrl;
      setTimeout(function() {
        anchor.href = anchor.getAttribute(ORIGINAL_URL_ATTRIBUTE);
        anchor.removeAttribute(ORIGINAL_URL_ATTRIBUTE);
      }, this.restoreDelay_);
      return true;
    };
    _proto.onDomUpdated = function onDomUpdated() {
      var _this = this;
      return new Promise(function(resolve) {
        var task = function task2() {
          return _this.scanLinksOnPage_().then(function() {
            _this.events.fire({
              type: EVENTS.PAGE_SCANNED
            });
            resolve();
          });
        };
        var elementOrShadowRoot = _this.rootNode_.nodeType == Node.DOCUMENT_NODE ? _this.rootNode_.documentElement : _this.rootNode_;
        chunk(elementOrShadowRoot, task, ChunkPriority_Enum.LOW);
      });
    };
    _proto.scanLinksOnPage_ = function scanLinksOnPage_() {
      var _this2 = this;
      var anchorList = this.getLinksInDOM_();
      var unknownAnchors = this.getUnknownAnchors_(anchorList);
      this.anchorReplacementCache_.updateLinkList(anchorList);
      if (!unknownAnchors.length) {
        return resolvedPromise();
      }
      this.anchorReplacementCache_.updateReplacementUrls(unknownAnchors.map(function(anchor) {
        return {
          anchor: anchor,
          replacementUrl: null
        };
      }));
      var twoStepsResponse = this.resolveUnknownLinks_(unknownAnchors);
      userAssert(twoStepsResponse instanceof TwoStepsResponse, 'Invalid response from provided "resolveUnknownLinks" function."resolveUnknownLinks" should return an instance of TwoStepsResponse');
      if (twoStepsResponse.syncResponse) {
        this.anchorReplacementCache_.updateReplacementUrls(twoStepsResponse.syncResponse);
      }
      if (twoStepsResponse.asyncResponse) {
        return twoStepsResponse.asyncResponse.then(function(data) {
          _this2.anchorReplacementCache_.updateReplacementUrls(data);
        });
      }
      return resolvedPromise();
    };
    _proto.getUnknownAnchors_ = function getUnknownAnchors_(anchorList) {
      var _this3 = this;
      var unknownAnchors = [];
      anchorList.forEach(function(anchor) {
        if (!_this3.isWatchingLink(anchor)) {
          unknownAnchors.push(anchor);
        }
      });
      return unknownAnchors;
    };
    _proto.getLinksInDOM_ = function getLinksInDOM_() {
      var q = this.rootNode_.querySelectorAll(this.linkSelector_);
      return [].slice.call(q);
    };
    return LinkRewriter2;
  }();

  // extensions/amp-skimlinks/0.1/link-rewriter/link-rewriter-manager.js
  var LinkRewriterManager = /* @__PURE__ */ function() {
    function LinkRewriterManager2(ampdoc2) {
      this.rootNode_ = ampdoc2.getRootNode();
      this.priorityList_ = this.getPriorityList_(ampdoc2);
      this.linkRewriters_ = [];
      this.installGlobalEventListener_(this.rootNode_);
      var navigation = Services.navigationForDoc(ampdoc2);
      navigation.registerAnchorMutator(this.maybeRewriteLink.bind(this), Priority_Enum.LINK_REWRITER_MANAGER);
    }
    var _proto = LinkRewriterManager2.prototype;
    _proto.registerLinkRewriter = function registerLinkRewriter(linkRewriterId, resolveUnknownLinks, options) {
      var linkRewriter = new LinkRewriter(this.rootNode_, linkRewriterId, resolveUnknownLinks, options);
      this.insertInListBasedOnPriority_(this.linkRewriters_, linkRewriter, this.priorityList_);
      linkRewriter.onDomUpdated();
      return linkRewriter;
    };
    _proto.maybeRewriteLink = function maybeRewriteLink(anchor, event) {
      var suitableLinkRewriters = this.getSuitableLinkRewritersForLink_(anchor);
      if (suitableLinkRewriters.length) {
        var chosenLinkRewriter = null;
        for (var i = 0; i < suitableLinkRewriters.length; i++) {
          var hasReplaced = suitableLinkRewriters[i].rewriteAnchorUrl(anchor);
          if (hasReplaced) {
            chosenLinkRewriter = suitableLinkRewriters[i];
            break;
          }
        }
        var linkRewriterId = chosenLinkRewriter ? chosenLinkRewriter.id : null;
        var eventData = {
          linkRewriterId: linkRewriterId,
          anchor: anchor,
          clickType: event.type
        };
        suitableLinkRewriters.forEach(function(linkRewriter) {
          var event2 = {
            type: EVENTS.CLICK,
            eventData: eventData
          };
          linkRewriter.events.fire(event2);
        });
      }
    };
    _proto.getPriorityList_ = function getPriorityList_(ampdoc2) {
      var value = ampdoc2.getMetaByName(PRIORITY_META_TAG_NAME);
      return value ? value.trim().split(/\s+/) : [];
    };
    _proto.installGlobalEventListener_ = function installGlobalEventListener_(rootNode) {
      rootNode.addEventListener(AmpEvents_Enum.DOM_UPDATE, this.onDomChanged_.bind(this));
    };
    _proto.onDomChanged_ = function onDomChanged_() {
      this.linkRewriters_.forEach(function(linkRewriter) {
        linkRewriter.onDomUpdated();
      });
    };
    _proto.parseLinkRewriterPriorityForAnchor_ = function parseLinkRewriterPriorityForAnchor_(anchor) {
      var dataValue = anchor.hasAttribute("data-link-rewriters") ? anchor.getAttribute("data-link-rewriters").trim() : null;
      if (!dataValue) {
        return [];
      }
      return dataValue.split(/\s+/);
    };
    _proto.insertInListBasedOnPriority_ = function insertInListBasedOnPriority_(linkRewriterList, linkRewriter, idPriorityList) {
      var B_HAS_PRIORITY = 1;
      var A_HAS_PRIORITY = -1;
      var compareFunction = function compareFunction2(linkRewriterA, linkRewriterB) {
        var indexA = idPriorityList.indexOf(linkRewriterA.id);
        var indexB = idPriorityList.indexOf(linkRewriterB.id);
        if (indexA === -1 && indexB === -1) {
          return 0;
        }
        if (indexA === -1) {
          return B_HAS_PRIORITY;
        }
        if (indexB === -1) {
          return A_HAS_PRIORITY;
        }
        return indexA > indexB ? B_HAS_PRIORITY : A_HAS_PRIORITY;
      };
      linkRewriterList.push(linkRewriter);
      linkRewriterList.sort(compareFunction);
      return linkRewriterList;
    };
    _proto.getSuitableLinkRewritersForLink_ = function getSuitableLinkRewritersForLink_(anchor) {
      var _this = this;
      var linkPriorityList = this.parseLinkRewriterPriorityForAnchor_(anchor);
      return this.linkRewriters_.reduce(function(acc, linkRewriter) {
        if (linkRewriter.isWatchingLink(anchor)) {
          _this.insertInListBasedOnPriority_(acc, linkRewriter, linkPriorityList);
        }
        return acc;
      }, []);
    };
    return LinkRewriterManager2;
  }();

  // extensions/amp-smartlinks/0.1/amp-smartlinks.js
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
  var TAG2 = "amp-smartlinks";
  var AmpSmartlinks = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits2(AmpSmartlinks2, _AMP$BaseElement);
    var _super = _createSuper2(AmpSmartlinks2);
    function AmpSmartlinks2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.xhr_ = null;
      _this.ampDoc_ = null;
      _this.linkRewriterService_ = null;
      _this.smartLinkRewriter_ = null;
      _this.linkmateOptions_ = null;
      _this.linkmate_ = null;
      _this.referrer_ = null;
      return _this;
    }
    var _proto = AmpSmartlinks2.prototype;
    _proto.buildCallback = function buildCallback() {
      var _this2 = this;
      this.ampDoc_ = this.getAmpDoc();
      this.xhr_ = Services.xhrFor(this.ampDoc_.win);
      var viewer = Services.viewerForDoc(this.ampDoc_);
      this.linkmateOptions_ = getConfigOptions(this.element);
      this.linkRewriterService_ = new LinkRewriterManager(this.ampDoc_);
      return this.ampDoc_.whenReady().then(function() {
        return viewer.getReferrerUrl();
      }).then(function(referrer) {
        _this2.referrer_ = referrer;
        _this2.ampDoc_.whenFirstVisible().then(function() {
          _this2.runSmartlinks_();
        });
      });
    };
    _proto.runSmartlinks_ = function runSmartlinks_() {
      var _this3 = this;
      this.getLinkmateOptions_().then(function(config) {
        if (!config) {
          return;
        }
        _this3.linkmateOptions_.linkmateExpected = config["linkmate_enabled"];
        _this3.linkmateOptions_.publisherID = config["publisher_id"];
        _this3.postPageImpression_();
        _this3.linkmate_ = new Linkmate(_this3.ampDoc_, _this3.xhr_, _this3.linkmateOptions_, _this3.win);
        _this3.smartLinkRewriter_ = _this3.initLinkRewriter_();
        if (_this3.linkmateOptions_.linkmateEnabled && _this3.linkmateOptions_.linkmateExpected) {
          _this3.smartLinkRewriter_.getAnchorReplacementList();
        }
      });
    };
    _proto.getLinkmateOptions_ = function getLinkmateOptions_() {
      var fetchUrl = ENDPOINTS.NRTV_CONFIG_ENDPOINT.replace(".nrtv_slug.", this.linkmateOptions_.nrtvSlug);
      try {
        return this.xhr_.fetchJson(fetchUrl, {
          method: "GET",
          ampCors: false
        }).then(function(res) {
          return res.json();
        }).then(function(res) {
          return getData(res)[0]["amp_config"];
        });
      } catch (err) {
        return null;
      }
    };
    _proto.postPageImpression_ = function postPageImpression_() {
      this.signals().signal(CommonSignals_Enum.LOAD_START);
      var payload = this.buildPageImpressionPayload_();
      var builder = new CustomEventReporterBuilder(this.element);
      builder.track("page-impression", ENDPOINTS.PAGE_IMPRESSION_ENDPOINT);
      builder.setTransportConfig(dict({
        "beacon": true,
        "image": false,
        "xhrpost": true,
        "useBody": true
      }));
      builder.setExtraUrlParams(payload);
      var reporter = builder.build();
      reporter.trigger("page-impression");
    };
    _proto.initLinkRewriter_ = function initLinkRewriter_() {
      var _this4 = this;
      var options = {
        linkSelector: this.linkmateOptions_.linkSelector
      };
      return this.linkRewriterService_.registerLinkRewriter(TAG2, function(anchorList) {
        return _this4.linkmate_.runLinkmate(anchorList);
      }, options);
    };
    _proto.buildPageImpressionPayload_ = function buildPageImpressionPayload_() {
      return dict({
        "events": [{
          "is_amp": true
        }],
        "organization_id": this.linkmateOptions_.publisherID,
        "organization_type": "publisher",
        "user": {
          "page_session_uuid": this.generateUUID_(),
          "source_url": this.getLocationHref_(),
          "previous_url": this.referrer_,
          "user_agent": this.ampDoc_.win.navigator.userAgent
        }
      });
    };
    _proto.getLocationHref_ = function getLocationHref_() {
      return this.win.location.href;
    };
    _proto.generateUUID_ = function generateUUID_() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(c) {
        return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
      });
    };
    return AmpSmartlinks2;
  }(AMP.BaseElement);
  AMP.registerElement("amp-smartlinks", AmpSmartlinks);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-smartlinks-0.1.max.js.map
