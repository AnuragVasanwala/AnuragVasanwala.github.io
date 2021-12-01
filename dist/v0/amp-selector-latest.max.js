(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-selector",ev:"0.1",l:true,f:(function(AMP,_){
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
  function toArray(arrayLike) {
    return arrayLike ? Array.prototype.slice.call(arrayLike) : [];
  }
  var isArray = Array.isArray;
  function areEqualOrdered(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
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

  // src/core/types/object/index.js
  var _Object$prototype = Object.prototype;
  var hasOwn_ = _Object$prototype.hasOwnProperty;
  var toString_ = _Object$prototype.toString;
  function dict(opt_initial) {
    return opt_initial || {};
  }

  // src/core/error/message-helpers.js
  var USER_ERROR_SENTINEL = "\u200B\u200B\u200B";
  var USER_ERROR_EMBED_SENTINEL = "\u200B\u200B\u200B\u200B";

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
  function isRTL(doc) {
    var dir = doc.body.getAttribute("dir") || doc.documentElement.getAttribute("dir") || "ltr";
    return dir == "rtl";
  }
  function tryFocus(element) {
    try {
      element.focus();
    } catch (e) {
    }
  }

  // src/core/math.js
  function mod(a, b) {
    return a > 0 && b > 0 ? a % b : (a % b + b) % b;
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

  // build/amp-selector-0.1.css.js
  var CSS2 = "amp-selector [option]{cursor:pointer}amp-selector [option][selected]{cursor:auto;outline:1px solid rgba(0,0,0,0.7)}amp-selector[multiple] [option][selected]{cursor:pointer;outline:1px solid rgba(0,0,0,0.7)}amp-selector [disabled][option],amp-selector[disabled] [option],amp-selector[disabled] [selected],amp-selector [selected][disabled]{cursor:auto;outline:none}\n/*# sourceURL=/extensions/amp-selector/0.1/amp-selector.css*/";

  // extensions/amp-selector/0.1/amp-selector.js
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
  var TAG = "amp-selector";
  var KEYBOARD_SELECT_MODES = {
    NONE: "none",
    FOCUS: "focus",
    SELECT: "select"
  };
  var AmpSelector = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpSelector2, _AMP$BaseElement);
    var _super = _createSuper(AmpSelector2);
    AmpSelector2.prerenderAllowed = function prerenderAllowed() {
      return true;
    };
    function AmpSelector2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.isMultiple_ = false;
      _this.selectedElements_ = [];
      _this.elements_ = [];
      _this.inputs_ = [];
      _this.action_ = null;
      _this.focusedIndex_ = 0;
      _this.kbSelectMode_ = KEYBOARD_SELECT_MODES.NONE;
      return _this;
    }
    var _proto = AmpSelector2.prototype;
    _proto.isLayoutSupported = function isLayoutSupported() {
      return true;
    };
    _proto.buildCallback = function buildCallback() {
      var _this2 = this;
      this.action_ = Services.actionServiceForDoc(this.element);
      this.isMultiple_ = this.element.hasAttribute("multiple");
      if (!this.element.hasAttribute("role")) {
        this.element.setAttribute("role", "listbox");
      }
      if (this.isMultiple_) {
        this.element.setAttribute("aria-multiselectable", "true");
      }
      if (this.element.hasAttribute("disabled")) {
        this.element.setAttribute("aria-disabled", "true");
      }
      var kbSelectMode = this.element.getAttribute("keyboard-select-mode");
      if (kbSelectMode) {
        kbSelectMode = kbSelectMode.toLowerCase();
        userAssert(isEnumValue(KEYBOARD_SELECT_MODES, kbSelectMode), "Unknown keyboard-select-mode: " + kbSelectMode);
        userAssert(!(this.isMultiple_ && kbSelectMode == KEYBOARD_SELECT_MODES.SELECT), "[keyboard-select-mode=select] not supported for multiple selection amp-selector");
      } else {
        kbSelectMode = KEYBOARD_SELECT_MODES.NONE;
      }
      this.kbSelectMode_ = kbSelectMode;
      this.registerAction("clear", this.clearAllSelections_.bind(this));
      this.init_();
      this.element.addEventListener("click", this.clickHandler_.bind(this));
      this.element.addEventListener("keydown", this.keyDownHandler_.bind(this));
      this.registerAction("selectUp", function(invocation) {
        var args = invocation.args, trust = invocation.trust;
        var delta = args && args["delta"] !== void 0 ? -args["delta"] : -1;
        _this2.select_(delta, trust);
      }, ActionTrust_Enum.LOW);
      this.registerAction("selectDown", function(invocation) {
        var args = invocation.args, trust = invocation.trust;
        var delta = args && args["delta"] !== void 0 ? args["delta"] : 1;
        _this2.select_(delta, trust);
      }, ActionTrust_Enum.LOW);
      this.registerAction("toggle", function(invocation) {
        var args = invocation.args, trust = invocation.trust;
        userAssert(args["index"] >= 0, "'index' must be greater than 0");
        userAssert(args["index"] < _this2.elements_.length, "'index' must be less than the length of options in the <amp-selector>");
        if (args && args["index"] !== void 0) {
          return _this2.toggle_(args["index"], args["value"], trust);
        } else {
          return Promise.reject("'index' must be specified");
        }
      }, ActionTrust_Enum.LOW);
      this.action_.addToAllowlist(TAG, ["clear", "selectDown", "selectUp", "toggle"], ["email"]);
      this.element.addEventListener(AmpEvents_Enum.DOM_UPDATE, this.maybeRefreshOnUpdate_.bind(this));
    };
    _proto.mutatedAttributesCallback = function mutatedAttributesCallback(mutations) {
      var selected = mutations["selected"];
      if (selected !== void 0) {
        this.selectedAttributeMutated_(selected);
      }
      var disabled = mutations["disabled"];
      if (disabled !== void 0) {
        if (disabled) {
          this.element.setAttribute("aria-disabled", "true");
        } else {
          this.element.removeAttribute("aria-disabled");
        }
      }
    };
    _proto.selectedAttributeMutated_ = function selectedAttributeMutated_(newValue) {
      var selected = Array.isArray(newValue) ? newValue : [newValue];
      if (newValue === null || selected.length == 0) {
        this.clearAllSelections_();
        return;
      }
      if (!this.isMultiple_) {
        selected = selected.slice(0, 1);
      }
      var current = this.selectedOptions_();
      if (areEqualOrdered(current.sort(), selected.sort())) {
        return;
      }
      var isSelected = selected.reduce(function(map2, value) {
        map2[value] = true;
        return map2;
      }, Object.create(null));
      for (var i = 0; i < this.elements_.length; i++) {
        var element = this.elements_[i];
        var option = element.getAttribute("option");
        if (isSelected[option]) {
          this.setSelection_(element);
        } else {
          this.clearSelection_(element);
        }
      }
      this.updateFocus_();
      this.setInputs_();
    };
    _proto.updateFocus_ = function updateFocus_(opt_focusEl) {
      if (this.kbSelectMode_ == KEYBOARD_SELECT_MODES.NONE) {
        return;
      }
      this.elements_.forEach(function(option) {
        option.tabIndex = -1;
      });
      var focusElement = opt_focusEl;
      if (!focusElement) {
        if (this.isMultiple_) {
          focusElement = this.elements_[0];
        } else {
          focusElement = this.selectedElements_[0] || this.elements_[0];
        }
      }
      if (focusElement) {
        this.focusedIndex_ = this.elements_.indexOf(focusElement);
        focusElement.tabIndex = 0;
      }
    };
    _proto.maybeRefreshOnUpdate_ = function maybeRefreshOnUpdate_(unusedEvent) {
      var newElements = toArray(this.element.querySelectorAll("[option]"));
      if (areEqualOrdered(this.elements_, newElements)) {
        return;
      }
      this.init_(newElements);
    };
    _proto.init_ = function init_(opt_elements) {
      var _this3 = this;
      this.selectedElements_.length = 0;
      var elements = opt_elements ? opt_elements : toArray(this.element.querySelectorAll("[option]"));
      elements.forEach(function(el) {
        if (!el.hasAttribute("role")) {
          el.setAttribute("role", "option");
        }
        if (el.hasAttribute("disabled")) {
          el.setAttribute("aria-disabled", "true");
        }
        if (el.hasAttribute("selected")) {
          _this3.setSelection_(el);
        } else {
          _this3.clearSelection_(el);
        }
        el.tabIndex = 0;
      });
      this.elements_ = elements;
      this.updateFocus_();
      this.setInputs_();
    };
    _proto.setInputs_ = function setInputs_() {
      var _this4 = this;
      var selectedValues = [];
      var elementName = this.element.getAttribute("name");
      if (!elementName || this.element.hasAttribute("disabled")) {
        return selectedValues;
      }
      var formId = this.element.getAttribute("form");
      this.inputs_.forEach(function(input) {
        _this4.element.removeChild(input);
      });
      this.inputs_ = [];
      var doc = this.win.document;
      var fragment = doc.createDocumentFragment();
      this.selectedElements_.forEach(function(option) {
        if (!option.hasAttribute("disabled")) {
          var hidden = doc.createElement("input");
          var value = option.getAttribute("option");
          hidden.setAttribute("type", "hidden");
          hidden.setAttribute("name", elementName);
          hidden.setAttribute("value", value);
          if (formId) {
            hidden.setAttribute("form", formId);
          }
          _this4.inputs_.push(hidden);
          fragment.appendChild(hidden);
          selectedValues.push(value);
        }
      });
      this.element.appendChild(fragment);
      return selectedValues;
    };
    _proto.onOptionPicked_ = function onOptionPicked_(el) {
      var _this5 = this;
      if (el.hasAttribute("disabled")) {
        return;
      }
      this.mutateElement(function() {
        if (el.hasAttribute("selected")) {
          if (_this5.isMultiple_) {
            _this5.clearSelection_(el);
            _this5.setInputs_();
          }
        } else {
          _this5.setSelection_(el);
          _this5.setInputs_();
        }
        _this5.updateFocus_(el);
        _this5.fireSelectEvent_(el, ActionTrust_Enum.HIGH);
      });
    };
    _proto.selectedOptions_ = function selectedOptions_() {
      return this.selectedElements_.map(function(el) {
        return el.getAttribute("option");
      });
    };
    _proto.clickHandler_ = function clickHandler_(event) {
      if (this.element.hasAttribute("disabled")) {
        return;
      }
      var el = dev().assertElement(event.target);
      if (!el) {
        return;
      }
      if (!el.hasAttribute("option")) {
        el = closestAncestorElementBySelector(el, "[option]");
      }
      if (el) {
        this.onOptionPicked_(el);
      }
    };
    _proto.toggle_ = function toggle_(index, value, trust) {
      var _this6 = this;
      var el = this.elements_[index];
      var indexCurrentStatus = el.hasAttribute("selected");
      var indexFinalStatus = value !== void 0 ? value : !indexCurrentStatus;
      var selectedIndex = this.elements_.indexOf(this.selectedElements_[0]);
      if (indexFinalStatus === indexCurrentStatus) {
        return resolvedPromise();
      }
      return this.mutateElement(function() {
        if (selectedIndex !== index) {
          _this6.setSelection_(el);
          var selectedEl = _this6.elements_[selectedIndex];
          if (selectedEl) {
            _this6.clearSelection_(selectedEl);
          }
        } else {
          _this6.clearSelection_(el);
        }
        _this6.fireSelectEvent_(el, trust);
      });
    };
    _proto.fireSelectEvent_ = function fireSelectEvent_(el, trust) {
      var name = "select";
      var selectEvent = createCustomEvent(this.win, "amp-selector." + name, dict({
        "targetOption": el.getAttribute("option"),
        "selectedOptions": this.selectedOptions_()
      }));
      this.action_.trigger(this.element, name, selectEvent, trust);
    };
    _proto.select_ = function select_(delta, trust) {
      var previousIndex = this.elements_.indexOf(this.selectedElements_[0]);
      var selectUpWhenNoneSelected = previousIndex === -1 && delta < 0;
      var index = selectUpWhenNoneSelected ? delta : previousIndex + delta;
      var normalizedIndex = mod(index, this.elements_.length);
      var el = this.elements_[normalizedIndex];
      this.setSelection_(el);
      var previousEl = this.elements_[previousIndex];
      if (previousEl) {
        this.clearSelection_(previousEl);
      }
      this.setInputs_();
      this.fireSelectEvent_(el, trust);
    };
    _proto.keyDownHandler_ = function keyDownHandler_(event) {
      if (this.element.hasAttribute("disabled")) {
        return resolvedPromise();
      }
      var key = event.key;
      switch (key) {
        case Keys_Enum.LEFT_ARROW:
        case Keys_Enum.UP_ARROW:
        case Keys_Enum.RIGHT_ARROW:
        case Keys_Enum.DOWN_ARROW:
        case Keys_Enum.HOME:
        case Keys_Enum.END:
          if (this.kbSelectMode_ != KEYBOARD_SELECT_MODES.NONE) {
            return this.navigationKeyDownHandler_(event);
          }
          return resolvedPromise();
        case Keys_Enum.ENTER:
        case Keys_Enum.SPACE:
          this.selectionKeyDownHandler_(event);
          return resolvedPromise();
      }
      return resolvedPromise();
    };
    _proto.navigationKeyDownHandler_ = function navigationKeyDownHandler_(event) {
      var _this7 = this;
      var doc = this.win.document;
      var dir = 0;
      switch (event.key) {
        case Keys_Enum.LEFT_ARROW:
          dir = isRTL(doc) ? 1 : -1;
          break;
        case Keys_Enum.UP_ARROW:
          dir = -1;
          break;
        case Keys_Enum.RIGHT_ARROW:
          dir = isRTL(doc) ? -1 : 1;
          break;
        case Keys_Enum.DOWN_ARROW:
          dir = 1;
          break;
        case Keys_Enum.HOME:
          dir = 1;
          break;
        case Keys_Enum.END:
          dir = -1;
          break;
        default:
          return resolvedPromise();
      }
      event.preventDefault();
      this.elements_[this.focusedIndex_].tabIndex = -1;
      return this.getElementsSizes_().then(function(sizes) {
        var originalIndex = _this7.focusedIndex_;
        switch (event.key) {
          case Keys_Enum.HOME:
            _this7.focusedIndex_ = _this7.elements_.length - 1;
            break;
          case Keys_Enum.END:
            _this7.focusedIndex_ = 0;
            break;
        }
        do {
          _this7.focusedIndex_ = (_this7.focusedIndex_ + dir) % _this7.elements_.length;
          if (_this7.focusedIndex_ < 0) {
            _this7.focusedIndex_ = _this7.focusedIndex_ + _this7.elements_.length;
          }
        } while (isElementHidden(_this7.elements_[_this7.focusedIndex_], sizes[_this7.focusedIndex_]) && _this7.focusedIndex_ != originalIndex);
        var newSelectedOption = _this7.elements_[_this7.focusedIndex_];
        newSelectedOption.tabIndex = 0;
        tryFocus(newSelectedOption);
        var focusedOption = _this7.elements_[_this7.focusedIndex_];
        if (_this7.kbSelectMode_ == KEYBOARD_SELECT_MODES.SELECT) {
          _this7.onOptionPicked_(focusedOption);
        }
      });
    };
    _proto.selectionKeyDownHandler_ = function selectionKeyDownHandler_(event) {
      var key = event.key;
      if (key == Keys_Enum.SPACE || key == Keys_Enum.ENTER) {
        if (this.elements_.includes(dev().assertElement(event.target))) {
          event.preventDefault();
          var el = dev().assertElement(event.target);
          this.onOptionPicked_(el);
        }
      }
    };
    _proto.clearSelection_ = function clearSelection_(element) {
      element.removeAttribute("selected");
      element.setAttribute("aria-selected", "false");
      var selIndex = this.selectedElements_.indexOf(element);
      if (selIndex !== -1) {
        this.selectedElements_.splice(selIndex, 1);
      }
    };
    _proto.clearAllSelections_ = function clearAllSelections_() {
      while (this.selectedElements_.length > 0) {
        var el = this.selectedElements_.pop();
        this.clearSelection_(el);
      }
      this.setInputs_();
    };
    _proto.setSelection_ = function setSelection_(element) {
      if (this.selectedElements_.includes(element)) {
        return;
      }
      if (!this.isMultiple_) {
        this.clearAllSelections_();
      }
      element.setAttribute("selected", "");
      element.setAttribute("aria-selected", "true");
      this.selectedElements_.push(element);
    };
    _proto.getElementsForTesting = function getElementsForTesting() {
      return this.elements_;
    };
    _proto.getSelectedElementsForTesting = function getSelectedElementsForTesting() {
      return this.selectedElements_;
    };
    _proto.getElementsSizes_ = function getElementsSizes_() {
      var _this8 = this;
      return this.measureElement(function() {
        return _this8.elements_.map(function(element) {
          return element.getBoundingClientRect();
        });
      });
    };
    return AmpSelector2;
  }(AMP.BaseElement);
  function isElementHidden(element, rect) {
    var height = rect.height, width = rect.width;
    return element.hidden || width == 0 || height == 0;
  }
  AMP.registerElement(TAG, AmpSelector, CSS2);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-selector-0.1.max.js.map
