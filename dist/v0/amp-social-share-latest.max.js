(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-social-share",ev:"0.1",l:true,f:(function(AMP,_){
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
  function dict(opt_initial) {
    return opt_initial || {};
  }

  // src/core/types/array.js
  var isArray = Array.isArray;
  function arrayOrSingleItemToArray(arrayOrSingleItem) {
    return isArray(arrayOrSingleItem) ? arrayOrSingleItem : [
      arrayOrSingleItem
    ];
  }

  // src/core/window/index.js
  function toWin(winOrNull) {
    return winOrNull;
  }
  function getWin(node) {
    return toWin((node.ownerDocument || node).defaultView);
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
  function getDataParamsFromAttributes(element, opt_computeParamNameFunc, opt_paramPattern) {
    var computeParamNameFunc = opt_computeParamNameFunc || function(key2) {
      return key2;
    };
    var dataset = element.dataset;
    var params = dict();
    var paramPattern = opt_paramPattern || /^param(.+)/;
    for (var key in dataset) {
      var _matches = key.match(paramPattern);
      if (_matches) {
        var param = _matches[1][0].toLowerCase() + _matches[1].substr(1);
        params[computeParamNameFunc(param)] = dataset[key];
      }
    }
    return params;
  }

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

  // extensions/amp-social-share/0.1/amp-social-share-config.js
  function getSocialConfig(type) {
    return BUILTINS[type];
  }
  var BUILTINS = dict({
    "twitter": {
      "shareEndpoint": "https://twitter.com/intent/tweet",
      "defaultParams": {
        "text": "TITLE",
        "url": "CANONICAL_URL"
      }
    },
    "facebook": {
      "shareEndpoint": "https://www.facebook.com/dialog/share",
      "defaultParams": {
        "href": "CANONICAL_URL"
      }
    },
    "pinterest": {
      "shareEndpoint": "https://www.pinterest.com/pin/create/button/",
      "defaultParams": {
        "url": "CANONICAL_URL",
        "description": "TITLE"
      }
    },
    "linkedin": {
      "shareEndpoint": "https://www.linkedin.com/shareArticle",
      "defaultParams": {
        "url": "CANONICAL_URL",
        "mini": "true"
      }
    },
    "gplus": {
      "obsolete": true
    },
    "email": {
      "bindings": ["recipient"],
      "shareEndpoint": "mailto:RECIPIENT",
      "defaultParams": {
        "subject": "TITLE",
        "body": "CANONICAL_URL",
        "recipient": ""
      }
    },
    "tumblr": {
      "shareEndpoint": "https://www.tumblr.com/share/link",
      "defaultParams": {
        "name": "TITLE",
        "url": "CANONICAL_URL"
      }
    },
    "whatsapp": {
      "shareEndpoint": "https://api.whatsapp.com/send",
      "defaultParams": {
        "text": "TITLE - CANONICAL_URL"
      }
    },
    "line": {
      "shareEndpoint": "https://social-plugins.line.me/lineit/share",
      "defaultParams": {
        "text": "TITLE",
        "url": "CANONICAL_URL"
      }
    },
    "sms": {
      "shareEndpoint": "sms:",
      "defaultParams": {
        "body": "TITLE - CANONICAL_URL"
      }
    },
    "system": {
      "shareEndpoint": "navigator-share:",
      "defaultParams": {
        "text": "TITLE",
        "url": "CANONICAL_URL"
      }
    }
  });

  // build/amp-social-share-0.1.css.js
  var CSS2 = ".amp-social-share-facebook{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M212 197h-37v60h37v176h70V257h50l5-60h-55v-33c0-14 3-20 17-20h38V83h-49c-52 0-76 23-76 67v47z'/%3E%3C/svg%3E\")}.amp-social-share-pinterest{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M267 77c-101 0-151 71-151 131 0 36 14 69 43 81 5 2 9 0 11-6l4-16c1-6 1-8-3-12-8-10-14-23-14-42 0-53 40-101 104-101 57 0 88 35 88 81 0 61-27 112-67 112-22 0-39-18-33-40 6-27 18-56 18-75 0-17-9-32-28-32-23 0-41 24-41 55 0 20 7 33 7 33l-27 115c-9 34-2 76-1 80 0 3 4 3 5 1 2-2 29-35 38-69l15-58c7 14 29 27 51 27 68 0 114-62 114-145 0-62-53-120-133-120z'/%3E%3C/svg%3E\")}.amp-social-share-linkedin{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M186.4 142.4c0 19-15.3 34.5-34.2 34.5-18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5 18.9 0 34.2 15.5 34.2 34.5zm-5 58.9h-57.8v186.8h57.8V201.3zm92.4 0h-55.4v186.8h55.4v-98c0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9v98H398V269.8c0-50-28.3-74.2-68-74.2-39.6 0-56.3 30.9-56.3 30.9v-25.2h.1z'/%3E%3C/svg%3E\")}.amp-social-share-email{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M101 142v229h310V142H101zm275 26-120 91-120-91h240zm-248 26 64 49-64 64V194zm0 150 85-85 43 33 43-33 85 85H128zm256-36-64-65 64-49v114z'/%3E%3C/svg%3E\")}.amp-social-share-twitter{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h400v400H0z'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M153.6 301.6c94.4 0 146-78.2 146-146 0-2.2 0-4.4-.2-6.6a104.4 104.4 0 0 0 25.6-26.5 102.4 102.4 0 0 1-29.5 8 51.5 51.5 0 0 0 22.6-28.3 102.8 102.8 0 0 1-32.6 12.4 51.3 51.3 0 0 0-87.4 46.8 145.6 145.6 0 0 1-105.7-53.6 51.3 51.3 0 0 0 15.9 68.5 51 51 0 0 1-23.3-6.4v.6a51.3 51.3 0 0 0 41.1 50.3 51.2 51.2 0 0 1-23.1.9 51.4 51.4 0 0 0 48 35.6 103 103 0 0 1-63.8 22 104.4 104.4 0 0 1-12.2-.7 145.2 145.2 0 0 0 78.6 23'/%3E%3C/g%3E%3C/svg%3E\")}.amp-social-share-tumblr{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M211 80c-2 19-7 34-13 46a96 96 0 0 1-59 50v50h39v125c0 16 1 28 5 37 3 8 9 16 18 24s20 13 32 17c13 5 27 7 43 7a174 174 0 0 0 81-20v-56a97 97 0 0 1-54 18c-10 0-19-3-27-7-6-4-10-8-12-14s-3-19-3-40v-91h85v-56h-85V80h-50z'/%3E%3C/svg%3E\")}.amp-social-share-whatsapp{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='46'%3E%3Cpath fill='%23FFF' d='M35.4 10.4a18.27 18.27 0 0 0-31.2 13c0 3.2.9 6.3 2.4 9.1L4 42l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2a18.4 18.4 0 0 0 13-31.3zM22.5 38.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L9.9 32l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9 7.2-4.4 16.5-2.3 20.9 4.9 4.4 7.2 2.3 16.5-4.9 20.9-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2l-1.5 1.7c-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6a5.1 5.1 0 0 0-.6 5.4l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5.2-.2.4-.4.5-.6.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z'/%3E%3C/svg%3E\")}.amp-social-share-line{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M443 233c0-84-84-152-188-152S67 149 67 233c0 76 67 139 157 151 7 1 15 4 17 9s1 12 1 17l-3 16c-1 5-4 19 16 10s108-63 148-109c27-30 40-60 40-94zm-254 45a4 4 0 0 1-4 4h-53a4 4 0 0 1-2-1 4 4 0 0 1-1-3v-82a4 4 0 0 1 4-3h13a4 4 0 0 1 3 3v65h36a4 4 0 0 1 4 4zm32 0a4 4 0 0 1-4 4h-13a4 4 0 0 1-4-4v-82a4 4 0 0 1 4-3h13a4 4 0 0 1 4 3zm90 0a4 4 0 0 1-3 4h-13a4 4 0 0 1-1 0h-1v-1a3 3 0 0 1-1-1l-38-50v48a4 4 0 0 1-4 4h-13a4 4 0 0 1-4-4v-82a4 4 0 0 1 4-3h16v1l38 51v-49a4 4 0 0 1 4-3h13a4 4 0 0 1 3 3zm73-69a4 4 0 0 1-3 4h-36v14h36a4 4 0 0 1 3 4v13a4 4 0 0 1-3 4h-36v13h36a4 4 0 0 1 3 4v13a4 4 0 0 1-3 4h-53a4 4 0 0 1-3-1 4 4 0 0 1-1-3v-82a4 4 0 0 1 1-2 4 4 0 0 1 3-1h53a4 4 0 0 1 3 3z' data-name='\u30EC\u30A4\u30E4\u30FC 1'/%3E%3C/svg%3E\")}.amp-social-share-sms{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='29'%3E%3Cpath fill='none' stroke='%23FFF' stroke-width='3' d='M8.7 26v-5.7H2V2h26v18.4H15.9z'/%3E%3C/svg%3E\")}.amp-social-share-system{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23fff'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11A2.99 2.99 0 0 0 21 5a3 3 0 1 0-5.91.7L8.04 9.81A2.99 2.99 0 0 0 3 12a3 3 0 0 0 5.04 2.19l7.12 4.16A2.92 2.92 0 1 0 18 16.08z'/%3E%3C/svg%3E\")}amp-social-share{background-repeat:no-repeat;background-position:50%;background-size:contain;text-decoration:none;cursor:pointer;position:relative}amp-social-share:focus{outline:2px solid #0389ff;outline-offset:2px}.amp-social-share-twitter{background-color:#1da1f2}.amp-social-share-facebook{background-color:#32529f}.amp-social-share-pinterest{background-color:#e60023}.amp-social-share-linkedin{background-color:#0077b5}.amp-social-share-tumblr{background-color:#3c5a77}.amp-social-share-email{background-color:#000}.amp-social-share-whatsapp{background-color:#25d366}.amp-social-share-line{background-color:#52b448}.amp-social-share-sms{background-color:#ca2b63}.amp-social-share-system{background-color:#000}\n/*# sourceURL=/extensions/amp-social-share/0.1/amp-social-share.css*/";

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

  // src/url.js
  var SERVING_TYPE_PREFIX = new Set([
    "c",
    "v",
    "a",
    "ad"
  ]);
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

  // extensions/amp-social-share/0.1/amp-social-share.js
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
  var TAG = "amp-social-share";
  var AmpSocialShare = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpSocialShare2, _AMP$BaseElement);
    var _super = _createSuper(AmpSocialShare2);
    AmpSocialShare2.prerenderAllowed = function prerenderAllowed() {
      return true;
    };
    function AmpSocialShare2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.shareEndpoint_ = null;
      _this.params_ = dict();
      _this.platform_ = null;
      _this.href_ = null;
      _this.target_ = null;
      _this.bindingVars_ = null;
      return _this;
    }
    var _proto = AmpSocialShare2.prototype;
    _proto.isLayoutSupported = function isLayoutSupported() {
      return true;
    };
    _proto.buildCallback = function buildCallback() {
      var _this2 = this;
      var element = this.element;
      var typeAttr = userAssert(element.getAttribute("type"), "The type attribute is required. %s", element);
      userAssert(!/\s/.test(typeAttr), "Space characters are not allowed in type attribute value. %s", element);
      this.platform_ = Services.platformFor(this.win);
      var systemShareSupported = "share" in this.win.navigator;
      if (typeAttr === "system") {
        if (!systemShareSupported) {
          toggle(element, false);
          return;
        }
      } else {
        var systemOnly = systemShareSupported && !!this.win.document.querySelectorAll("amp-social-share[type=system][data-mode=replace]").length;
        if (systemOnly) {
          toggle(element, false);
          return;
        }
      }
      var typeConfig = getSocialConfig(typeAttr) || dict();
      if (typeConfig["obsolete"]) {
        toggle(element, false);
        user().warn(TAG, "Skipping obsolete share button " + typeAttr);
        return;
      }
      this.shareEndpoint_ = userAssert(element.getAttribute("data-share-endpoint") || typeConfig["shareEndpoint"], "The data-share-endpoint attribute is required. %s", element);
      Object.assign(this.params_, typeConfig["defaultParams"], getDataParamsFromAttributes(element));
      this.bindingVars_ = typeConfig["bindings"];
      element.setAttribute("role", "button");
      if (!element.hasAttribute("tabindex")) {
        element.setAttribute("tabindex", "0");
      }
      if (!element.getAttribute("aria-label")) {
        element.setAttribute("aria-label", "Share by " + typeAttr);
      }
      element.addEventListener("click", function() {
        return _this2.handleClick_();
      });
      element.addEventListener("keydown", this.handleKeyPress_.bind(this));
      element.classList.add("amp-social-share-" + typeAttr);
    };
    _proto.layoutCallback = function layoutCallback() {
      var _this3 = this;
      if (!this.shareEndpoint_) {
        return resolvedPromise();
      }
      var hrefWithVars = addParamsToUrl(dev().assertString(this.shareEndpoint_), this.params_);
      var urlReplacements = Services.urlReplacementsForDoc(this.element);
      var bindings = {};
      if (this.bindingVars_) {
        this.bindingVars_.forEach(function(name) {
          var bindingName = name.toUpperCase();
          bindings[bindingName] = _this3.params_[name];
        });
      }
      return urlReplacements.expandUrlAsync(hrefWithVars, bindings).then(function(href) {
        _this3.href_ = href;
        var _Services$urlForDoc$p = Services.urlForDoc(_this3.element).parse(href), protocol = _Services$urlForDoc$p.protocol;
        var isMailTo = protocol === "mailto:";
        var isSms = protocol === "sms:";
        _this3.target_ = _this3.platform_.isIos() && (isMailTo || isSms) ? "_top" : _this3.element.hasAttribute("data-target") ? _this3.element.getAttribute("data-target") : "_blank";
        if (isSms) {
          _this3.href_ = _this3.href_.replace("?", "?&");
        }
      });
    };
    _proto.handleKeyPress_ = function handleKeyPress_(event) {
      var key = event.key;
      if (key == Keys_Enum.SPACE || key == Keys_Enum.ENTER) {
        event.preventDefault();
        this.handleActivation_();
      }
    };
    _proto.handleClick_ = function handleClick_() {
      this.handleActivation_();
    };
    _proto.handleActivation_ = function handleActivation_() {
      userAssert(this.href_ && this.target_, "Clicked before href is set.");
      var href = dev().assertString(this.href_);
      var target = dev().assertString(this.target_);
      if (this.shareEndpoint_ === "navigator-share:") {
        var navigator = this.win.navigator;
        devAssert2(navigator.share);
        var dataStr = href.substr(href.indexOf("?"));
        var data = parseQueryString(dataStr);
        navigator.share(_extends({}, data)).catch(function(e) {
          user().warn(TAG, e.message, dataStr);
        });
      } else {
        var windowFeatures = "resizable,scrollbars,width=640,height=480";
        openWindowDialog(this.win, href, target, windowFeatures);
      }
    };
    return AmpSocialShare2;
  }(AMP.BaseElement);
  AMP.registerElement("amp-social-share", AmpSocialShare, CSS2);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-social-share-0.1.max.js.map
