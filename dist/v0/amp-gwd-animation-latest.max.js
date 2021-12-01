(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-gwd-animation",ev:"0.1",l:true,f:(function(AMP,_){
(function() {
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

  // src/core/types/object/index.js
  var _Object$prototype = Object.prototype;
  var hasOwn_ = _Object$prototype.hasOwnProperty;
  var toString_ = _Object$prototype.toString;
  function dict(opt_initial) {
    return opt_initial || {};
  }
  function hasOwn(obj, key) {
    return hasOwn_.call(obj, key);
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

  // src/core/window/index.js
  function toWin(winOrNull) {
    return winOrNull;
  }
  function getWin(node) {
    return toWin((node.ownerDocument || node).defaultView);
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
  function escapeCssSelectorIdent(ident) {
    if (isEsm()) {
      return CSS.escape(ident);
    }
    return cssEscape(ident);
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
  function scopedQuerySelector(root, selector) {
    if (isEsm() || isScopeSelectorSupported(root)) {
      return root.querySelector(prependSelectorsWith(selector, ":scope"));
    }
    var fallbackResult = scopedQuerySelectionFallback(root, selector);
    return fallbackResult[0] === void 0 ? null : fallbackResult[0];
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
  function getDetail(event) {
    return event.detail;
  }

  // extensions/amp-gwd-animation/0.1/amp-gwd-animation-impl.js
  var ANIMATIONS_DISABLED_CLASS = "i-amphtml-gwd-animation-disabled";
  var GWD_PAGE_WRAPPER_CLASS = "gwd-page-wrapper";
  var PlaybackCssClass = {
    PAUSE: "gwd-pause-animation",
    PLAY: "gwd-play-animation"
  };
  var CURRENT_LABEL_ANIMATION_ATTR = "data-gwd-label-animation";
  var EVENT_NAME_ATTR = "data-event-name";
  var GWD_TIMELINE_EVENT = "gwd.timelineEvent";
  var VENDOR_ANIMATIONEND_EVENTS = ["animationend", "webkitAnimationEnd"];
  var GOTO_AND_PAUSE_DELAY = 40;
  var GOTO_COUNTER_PROP = "__AMP_GWD_GOTO_COUNTERS__";
  var GWD_SERVICE_NAME = "gwd";
  var LOG_ID = "GWD";
  function getCounter(receiver, counterName) {
    if (receiver[GOTO_COUNTER_PROP] && hasOwn(receiver[GOTO_COUNTER_PROP], counterName)) {
      return receiver[GOTO_COUNTER_PROP][counterName];
    }
    return 0;
  }
  function setCounter(receiver, counterName, counterValue) {
    if (!receiver[GOTO_COUNTER_PROP]) {
      receiver[GOTO_COUNTER_PROP] = {};
    }
    if (!hasOwn(receiver[GOTO_COUNTER_PROP], counterName)) {
      receiver[GOTO_COUNTER_PROP][counterName] = 0;
    }
    receiver[GOTO_COUNTER_PROP][counterName] = counterValue;
  }
  var AmpGwdRuntimeService = /* @__PURE__ */ function() {
    function AmpGwdRuntimeService2(ampdoc2) {
      var _this = this;
      this.ampdoc_ = ampdoc2;
      this.win_ = ampdoc2.win;
      this.doc_ = this.win_.document;
      this.boundOnAnimationEndEvent_ = this.onAnimationEndEvent_.bind(this);
      ampdoc2.whenReady().then(function() {
        var body = dev().assertElement(_this.doc_.body);
        waitForChild(body, function() {
          return !!body.querySelector("." + escapeCssSelectorIdent(GWD_PAGE_WRAPPER_CLASS));
        }, _this.initialize_.bind(_this));
      });
    }
    var _proto = AmpGwdRuntimeService2.prototype;
    _proto.initialize_ = function initialize_() {
      this.listenForAnimationEnd_();
      this.setCurrentPage(0);
    };
    _proto.setEnabled = function setEnabled(enable) {
      this.doc_.body.classList.toggle(ANIMATIONS_DISABLED_CLASS, !enable);
    };
    _proto.setCurrentPage = function setCurrentPage(index) {
      var gwdPages = this.doc_.body.querySelectorAll("." + escapeCssSelectorIdent(GWD_PAGE_WRAPPER_CLASS));
      if (gwdPages.length == 0) {
        user().warn(LOG_ID, "Could not set current page. No pages were found in the document.");
        return;
      }
      var activePageSelector = "." + escapeCssSelectorIdent(GWD_PAGE_WRAPPER_CLASS) + "." + escapeCssSelectorIdent(PlaybackCssClass.PLAY);
      var currentPageEl = scopedQuerySelector(this.doc_.body, activePageSelector);
      if (currentPageEl) {
        this.deactivatePage_(currentPageEl);
      }
      var newPageEl = gwdPages[index];
      if (newPageEl) {
        this.activatePage_(newPageEl);
      } else {
        user().error(LOG_ID, "Could not find page with index " + index + ".");
      }
    };
    _proto.activatePage_ = function activatePage_(pageEl) {
      pageEl.classList.add(PlaybackCssClass.PLAY);
    };
    _proto.deactivatePage_ = function deactivatePage_(pageEl) {
      var _this2 = this;
      pageEl.classList.remove(PlaybackCssClass.PLAY);
      [pageEl].concat(toArray(pageEl.querySelectorAll("*"))).forEach(function(el) {
        return _this2.resetAnimatedElement_(el);
      });
    };
    _proto.resetAnimatedElement_ = function resetAnimatedElement_(element) {
      element.classList.remove(PlaybackCssClass.PAUSE);
      if (element.hasAttribute(CURRENT_LABEL_ANIMATION_ATTR)) {
        var activeGotoAnimation = element.getAttribute(CURRENT_LABEL_ANIMATION_ATTR);
        element.classList.remove(activeGotoAnimation);
        element.removeAttribute(CURRENT_LABEL_ANIMATION_ATTR);
      }
      delete element[GOTO_COUNTER_PROP];
    };
    _proto.play = function play(id) {
      var receiver = this.getReceiver(id);
      if (!receiver) {
        return;
      }
      receiver.classList.remove(PlaybackCssClass.PAUSE);
    };
    _proto.pause = function pause(id) {
      var receiver = this.getReceiver(id);
      if (!receiver) {
        return;
      }
      receiver.classList.add(PlaybackCssClass.PAUSE);
    };
    _proto.togglePlay = function togglePlay(id) {
      var receiver = this.getReceiver(id);
      if (!receiver) {
        return;
      }
      receiver.classList.toggle(PlaybackCssClass.PAUSE);
    };
    _proto.gotoAndPlay = function gotoAndPlay(id, label) {
      var receiver = this.getReceiver(id);
      if (!receiver) {
        return;
      }
      this.playLabelAnimation_(receiver, label);
    };
    _proto.gotoAndPause = function gotoAndPause(id, label) {
      var _this3 = this;
      var receiver = this.getReceiver(id);
      if (!receiver) {
        return;
      }
      this.playLabelAnimation_(receiver, label);
      this.win_.setTimeout(function() {
        _this3.pause(id);
      }, GOTO_AND_PAUSE_DELAY);
    };
    _proto.gotoAndPlayNTimes = function gotoAndPlayNTimes(id, label, maxCount, eventName) {
      if (maxCount <= 0) {
        user().error(LOG_ID, "Invalid maxCount parameter: " + maxCount);
        return;
      }
      if (!eventName) {
        user().error(LOG_ID, "Event name required but not specified.");
        return;
      }
      var receiver = this.getReceiver(id);
      if (!receiver) {
        return;
      }
      var counterName = eventName + "_" + label;
      var currentCount = getCounter(receiver, counterName);
      if (currentCount < maxCount) {
        this.playLabelAnimation_(receiver, label);
        setCounter(receiver, counterName, currentCount + 1);
      }
    };
    _proto.getReceiver = function getReceiver(id) {
      if (id == "document.body") {
        return this.doc_.body;
      }
      var receiver = this.doc_.getElementById(id);
      if (receiver && receiver.classList) {
        return receiver;
      } else {
        user().error(LOG_ID, "Could not get receiver with id " + id + ".");
        return null;
      }
    };
    _proto.playLabelAnimation_ = function playLabelAnimation_(receiver, label) {
      receiver.classList.remove(PlaybackCssClass.PAUSE);
      var currentLabel = receiver.getAttribute(CURRENT_LABEL_ANIMATION_ATTR);
      if (currentLabel) {
        receiver.classList.remove(currentLabel);
        receiver.removeAttribute(CURRENT_LABEL_ANIMATION_ATTR);
      }
      if (currentLabel == label) {
        reflow(receiver);
      }
      receiver.classList.add(label);
      receiver.setAttribute(CURRENT_LABEL_ANIMATION_ATTR, label);
    };
    _proto.onAnimationEndEvent_ = function onAnimationEndEvent_(event) {
      var userEventName = event.target.getAttribute(EVENT_NAME_ATTR);
      if (!userEventName) {
        return;
      }
      var detail = dict({
        "eventName": userEventName,
        "sourceEvent": event
      });
      var timelineEvent = createCustomEvent(this.win_, GWD_TIMELINE_EVENT, detail);
      this.doc_.dispatchEvent(timelineEvent);
    };
    _proto.listenForAnimationEnd_ = function listenForAnimationEnd_() {
      for (var i = 0; i < VENDOR_ANIMATIONEND_EVENTS.length; i++) {
        this.doc_.body.addEventListener(VENDOR_ANIMATIONEND_EVENTS[i], this.boundOnAnimationEndEvent_, true);
      }
    };
    _proto.unlistenForAnimationEnd_ = function unlistenForAnimationEnd_() {
      for (var i = 0; i < VENDOR_ANIMATIONEND_EVENTS.length; i++) {
        this.doc_.body.removeEventListener(VENDOR_ANIMATIONEND_EVENTS[i], this.boundOnAnimationEndEvent_, true);
      }
    };
    _proto.dispose = function dispose() {
      this.unlistenForAnimationEnd_();
    };
    return AmpGwdRuntimeService2;
  }();
  function reflow(element) {
    var globalRef = "__AMP_GWD_TEMP";
    self[globalRef] = element.offsetWidth;
    delete self[globalRef];
  }

  // build/amp-gwd-animation-0.1.css.js
  var CSS2 = ".i-amphtml-gwd-animation-disabled [class*=-animation],.i-amphtml-gwd-animation-disabled [class*=gwdanimation]{animation:none!important}\n/*# sourceURL=/extensions/amp-gwd-animation/0.1/amp-gwd-animation.css*/";

  // src/url.js
  var SERVING_TYPE_PREFIX = new Set([
    "c",
    "v",
    "a",
    "ad"
  ]);

  // src/iframe-helper.js
  var FIE_EMBED_PROP = "__AMP_EMBED__";
  function getFriendlyIframeEmbedOptional(iframe) {
    return iframe[FIE_EMBED_PROP];
  }

  // extensions/amp-gwd-animation/0.1/amp-gwd-animation.js
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
  function getValueForExpr(obj, expr) {
    var parts = expr.split(".");
    var value = obj;
    for (var i = 0; i < parts.length; i++) {
      var part = parts[i];
      if (part && value && value[part] !== void 0) {
        value = value[part];
        continue;
      }
      value = void 0;
      break;
    }
    return value;
  }
  var TAG = "amp-gwd-animation";
  var GWD_PAGEDECK_ID = "pagedeck";
  var ACTION_IMPL_ARGS = {
    "play": ["args.id"],
    "pause": ["args.id"],
    "togglePlay": ["args.id"],
    "gotoAndPlay": ["args.id", "args.label"],
    "gotoAndPause": ["args.id", "args.label"],
    "gotoAndPlayNTimes": ["args.id", "args.label", "args.N", "event.detail.eventName"],
    "setCurrentPage": ["args.index"]
  };
  var GwdAnimation = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(GwdAnimation2, _AMP$BaseElement);
    var _super = _createSuper(GwdAnimation2);
    function GwdAnimation2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.timelineEventPrefix_ = "";
      _this.fie_ = null;
      _this.boundOnGwdTimelineEvent_ = _this.onGwdTimelineEvent_.bind(_assertThisInitialized(_this));
      return _this;
    }
    var _proto = GwdAnimation2.prototype;
    _proto.buildCallback = function buildCallback() {
      this.timelineEventPrefix_ = this.element.getAttribute("timeline-event-prefix") || "";
      var frameElement = getParentWindowFrameElement(this.element, this.getAmpDoc().win);
      if (frameElement) {
        this.fie_ = getFriendlyIframeEmbedOptional(frameElement);
      }
      var root = this.getRoot_();
      root.addEventListener(GWD_TIMELINE_EVENT, this.boundOnGwdTimelineEvent_, true);
      var gwdPageDeck = this.getGwdPageDeck_();
      if (gwdPageDeck) {
        userAssert(this.element.id, "The " + TAG + " element must have an id.");
        var setCurrentPageAction = this.element.id + ".setCurrentPage(index=event.index)";
        addAction(this.element, gwdPageDeck, "slideChange", setCurrentPageAction);
      }
      var handler = this.actionHandler_.bind(this);
      for (var name in ACTION_IMPL_ARGS) {
        this.registerAction(name, handler);
      }
    };
    _proto.getRoot_ = function getRoot_() {
      return this.fie_ ? this.fie_.win.document : this.getAmpDoc().getRootNode();
    };
    _proto.getGwdPageDeck_ = function getGwdPageDeck_() {
      return this.getRoot_().getElementById(GWD_PAGEDECK_ID);
    };
    _proto.actionHandler_ = function actionHandler_(invocation) {
      if (this.shouldExecuteInvocation_(invocation)) {
        this.executeInvocation_(invocation);
      }
    };
    _proto.shouldExecuteInvocation_ = function shouldExecuteInvocation_(invocation) {
      if (invocation.method == "setCurrentPage") {
        var gwdPageDeck = this.getGwdPageDeck_();
        var isFromPageDeck = gwdPageDeck && invocation.source == gwdPageDeck;
        return isFromPageDeck;
      }
      return true;
    };
    _proto.executeInvocation_ = function executeInvocation_(invocation) {
      var service = userAssert(getServiceForDocOrNull(this.element, GWD_SERVICE_NAME), "Cannot execute action because the GWD service is not registered.");
      var argPaths = ACTION_IMPL_ARGS[invocation.method];
      var actionArgs = argPaths.map(function(argPath) {
        return getValueForExpr(invocation, argPath);
      });
      service[invocation.method].apply(service, actionArgs);
    };
    _proto.onGwdTimelineEvent_ = function onGwdTimelineEvent_(event) {
      var actionService = Services.actionServiceForDoc(this.element);
      var eventName = getDetail(event)["eventName"];
      var timelineEventName = "" + this.timelineEventPrefix_ + eventName;
      actionService.trigger(this.element, timelineEventName, event, ActionTrust_Enum.HIGH);
    };
    _proto.detachedCallback = function detachedCallback() {
      this.getRoot_().removeEventListener(GWD_TIMELINE_EVENT, this.boundOnGwdTimelineEvent_, true);
      return true;
    };
    return GwdAnimation2;
  }(AMP.BaseElement);
  function addAction(context, target, event, actionStr) {
    var newActionsStr;
    var currentActionsStr = target.getAttribute("on") || "";
    var eventPrefix = event + ":";
    var eventActionsIndex = currentActionsStr.indexOf(eventPrefix);
    if (eventActionsIndex != -1) {
      var actionsStartIndex = eventActionsIndex + eventPrefix.length;
      newActionsStr = currentActionsStr.substr(0, actionsStartIndex) + actionStr + "," + currentActionsStr.substr(actionsStartIndex);
    } else {
      newActionsStr = currentActionsStr;
      if (newActionsStr) {
        newActionsStr += ";";
      }
      newActionsStr += "" + eventPrefix + actionStr;
    }
    var actionService = Services.actionServiceForDoc(context);
    actionService.setActions(target, newActionsStr);
  }
  AMP.registerServiceForDoc(GWD_SERVICE_NAME, AmpGwdRuntimeService);
  AMP.registerElement(TAG, GwdAnimation, CSS2);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-gwd-animation-0.1.max.js.map
