(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-mustache",ev:"0.1",l:false,f:(function(AMP,_){
(function() {
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

  // src/core/types/index.js
  function isElement(value) {
    return (value == null ? void 0 : value.nodeType) == 1;
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
  function copyChildren(from, to) {
    var frag = to.ownerDocument.createDocumentFragment();
    for (var n = from.firstChild; n; n = n.nextSibling) {
      frag.appendChild(n.cloneNode(true));
    }
    to.appendChild(frag);
  }
  function templateContentClone(template) {
    if ("content" in template) {
      return template.content.cloneNode(true);
    } else {
      var content = template.ownerDocument.createDocumentFragment();
      copyChildren(template, content);
      return content;
    }
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
  function userAssert2(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
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

  // src/base-template.js
  var BaseTemplate = /* @__PURE__ */ function() {
    function BaseTemplate2(element, win) {
      this.element = element;
      this.win = element.ownerDocument.defaultView || win;
      this.viewer_ = Services.viewerForDoc(this.element);
      this.compileCallback();
    }
    var _proto = BaseTemplate2.prototype;
    _proto.compileCallback = function compileCallback() {
    };
    _proto.setHtml = function setHtml(unusedData) {
    };
    _proto.render = function render(unusedData) {
    };
    _proto.renderAsString = function renderAsString(unusedData) {
    };
    _proto.visitChildren_ = function visitChildren_(root, callback) {
      for (var n = root.firstChild; n != null; n = n.nextSibling) {
        if (n.nodeType == 3) {
          var text = n.textContent.trim();
          if (text) {
            callback(text);
          }
        } else if (n.nodeType == 8) {
        } else if (isElement(n)) {
          callback(dev().assertElement(n));
        }
      }
    };
    _proto.tryUnwrap = function tryUnwrap(root) {
      var onlyChild;
      this.visitChildren_(root, function(c) {
        if (onlyChild === void 0 && c.nodeType) {
          onlyChild = c;
        } else {
          onlyChild = null;
        }
      });
      return onlyChild || root;
    };
    _proto.unwrapChildren = function unwrapChildren(root) {
      var _this = this;
      var children = [];
      this.visitChildren_(root, function(c) {
        if (typeof c == "string") {
          var element = _this.win.document.createElement("div");
          element.textContent = c;
          children.push(element);
        } else {
          children.push(c);
        }
      });
      return children;
    };
    _proto.viewerCanRenderTemplates = function viewerCanRenderTemplates() {
      return this.viewer_.hasCapability("viewerRenderTemplate");
    };
    return BaseTemplate2;
  }();

  // src/core/document/format.js
  function isAmpFormatType(formats, doc) {
    var html2 = doc.documentElement;
    var isFormatType = formats.some(function(format) {
      return html2.hasAttribute(format);
    });
    return isFormatType;
  }
  function isAmp4Email(doc) {
    return isAmpFormatType(["\u26A14email", "amp4email"], doc);
  }

  // src/core/dom/srcset.js
  var srcsetRegex = /(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;
  function parseSrcset(s) {
    var sources = [];
    var match;
    while (match = srcsetRegex.exec(s)) {
      var url = match[1];
      var width = void 0, dpr = void 0;
      if (match[2]) {
        var type = match[3].toLowerCase();
        if (type == "w") {
          width = parseInt(match[2], 10);
        } else if (type == "x") {
          dpr = parseFloat(match[2]);
        } else {
          continue;
        }
      } else {
        dpr = 1;
      }
      sources.push({
        url: url,
        width: width,
        dpr: dpr
      });
    }
    return new Srcset(sources);
  }
  var Srcset = /* @__PURE__ */ function() {
    function Srcset2(sources) {
      userAssert(sources.length > 0, "Srcset must have at least one source");
      this.sources_ = sources;
      var hasWidth = false;
      var hasDpr = false;
      for (var i = 0; i < sources.length; i++) {
        var source = sources[i];
        hasWidth = hasWidth || !!source.width;
        hasDpr = hasDpr || !!source.dpr;
      }
      userAssert(!!(hasWidth ^ hasDpr), "Srcset must have width or dpr sources, but not both");
      sources.sort(hasWidth ? sortByWidth : sortByDpr);
      this.widthBased_ = hasWidth;
    }
    var _proto = Srcset2.prototype;
    _proto.select = function select(width, dpr) {
      devAssert(width, "width=%s", width);
      devAssert(dpr, "dpr=%s", dpr);
      var index = 0;
      if (this.widthBased_) {
        index = this.selectByWidth_(width * dpr);
      } else {
        index = this.selectByDpr_(dpr);
      }
      return this.sources_[index].url;
    };
    _proto.selectByWidth_ = function selectByWidth_(width) {
      var sources = this.sources_;
      var minIndex = 0;
      var minScore = Infinity;
      var minWidth = Infinity;
      for (var i = 0; i < sources.length; i++) {
        var sWidth = sources[i].width;
        var score = Math.abs(sWidth - width);
        if (score <= minScore * 1.1 || width / minWidth > 1.2) {
          minIndex = i;
          minScore = score;
          minWidth = sWidth;
        } else {
          break;
        }
      }
      return minIndex;
    };
    _proto.selectByDpr_ = function selectByDpr_(dpr) {
      var sources = this.sources_;
      var minIndex = 0;
      var minScore = Infinity;
      for (var i = 0; i < sources.length; i++) {
        var score = Math.abs(sources[i].dpr - dpr);
        if (score <= minScore) {
          minIndex = i;
          minScore = score;
        } else {
          break;
        }
      }
      return minIndex;
    };
    _proto.getUrls = function getUrls() {
      return this.sources_.map(function(s) {
        return s.url;
      });
    };
    _proto.stringify = function stringify(opt_mapper) {
      var res = [];
      var sources = this.sources_;
      for (var i = 0; i < sources.length; i++) {
        var source = sources[i];
        var src = source.url;
        if (opt_mapper) {
          src = opt_mapper(src);
        }
        if (this.widthBased_) {
          src += " " + source.width + "w";
        } else {
          src += " " + source.dpr + "x";
        }
        res.push(src);
      }
      return res.join(", ");
    };
    return Srcset2;
  }();
  function sortByWidth(s1, s2) {
    userAssert(s1.width != s2.width, "Duplicate width: %s", s1.width);
    return s1.width - s2.width;
  }
  function sortByDpr(s1, s2) {
    userAssert(s1.dpr != s2.dpr, "Duplicate dpr: %s", s1.dpr);
    return s1.dpr - s2.dpr;
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
    userAssert2(SERVING_TYPE_PREFIX.has(prefix), "Unknown path prefix in url %s", url.href);
    var domainOrHttpsSignal = path[2];
    var origin = domainOrHttpsSignal == "s" ? "https://" + decodeURIComponent(path[3]) : "http://" + decodeURIComponent(domainOrHttpsSignal);
    userAssert2(origin.indexOf(".") > 0, "Expected a . in origin %s", origin);
    path.splice(1, domainOrHttpsSignal == "s" ? 3 : 2);
    return origin + path.join("/") + removeAmpJsParamsFromSearch(url.search) + (url.hash || "");
  }
  function resolveRelativeUrl(relativeUrlString, baseUrl) {
    baseUrl = urlAsLocation(baseUrl);
    if (isEsm() || typeof URL == "function") {
      return new URL(relativeUrlString, baseUrl.href).toString();
    }
    return resolveRelativeUrlFallback_(relativeUrlString, baseUrl);
  }
  function resolveRelativeUrlFallback_(relativeUrlString, baseUrl) {
    baseUrl = urlAsLocation(baseUrl);
    relativeUrlString = relativeUrlString.replace(/\\/g, "/");
    var relativeUrl = parseUrlDeprecated(relativeUrlString);
    if (relativeUrlString.toLowerCase().startsWith(relativeUrl.protocol)) {
      return relativeUrl.href;
    }
    if (relativeUrlString.startsWith("//")) {
      return baseUrl.protocol + relativeUrlString;
    }
    if (relativeUrlString.startsWith("/")) {
      return baseUrl.origin + relativeUrlString;
    }
    return baseUrl.origin + baseUrl.pathname.replace(/\/[^/]*$/, "/") + relativeUrlString;
  }
  function checkCorsUrl(url) {
    var parsedUrl = parseUrlDeprecated(url);
    var query = parseQueryString(parsedUrl.search);
    userAssert2(!(SOURCE_ORIGIN_PARAM in query), "Source origin is not allowed in %s", url);
  }

  // src/url-rewrite.js
  var TAG = "URL-REWRITE";
  function rewriteAttributeValue(tagName, attrName, attrValue) {
    if (isUrlAttribute(attrName)) {
      return resolveUrlAttr(tagName, attrName, attrValue, self.location);
    }
    return attrValue;
  }
  function isUrlAttribute(attrName) {
    return attrName == "src" || attrName == "href" || attrName == "xlink:href" || attrName == "srcset";
  }
  function resolveUrlAttr(tagName, attrName, attrValue, windowLocation) {
    checkCorsUrl(attrValue);
    var isProxyHost = isProxyOrigin(windowLocation);
    var baseUrl = parseUrlDeprecated(getSourceUrl(windowLocation));
    if (attrName == "href" && !attrValue.startsWith("#")) {
      return resolveRelativeUrl(attrValue, baseUrl);
    }
    if (attrName == "src") {
      if (tagName == "amp-img") {
        return resolveImageUrlAttr(attrValue, baseUrl, isProxyHost);
      }
      return resolveRelativeUrl(attrValue, baseUrl);
    }
    if (attrName == "srcset") {
      var srcset;
      try {
        srcset = parseSrcset(attrValue);
      } catch (e) {
        user().error(TAG, "Failed to parse srcset: ", e);
        return attrValue;
      }
      return srcset.stringify(function(url) {
        return resolveImageUrlAttr(url, baseUrl, isProxyHost);
      });
    }
    return attrValue;
  }
  function resolveImageUrlAttr(attrValue, baseUrl, isProxyHost) {
    var src = parseUrlDeprecated(resolveRelativeUrl(attrValue, baseUrl));
    if (src.protocol == "data:" || isProxyOrigin(src) || !isProxyHost) {
      return src.href;
    }
    return urls.cdn + "/i/" + (src.protocol == "https:" ? "s/" : "") + encodeURIComponent(src.host) + src.pathname + (src.search || "") + (src.hash || "");
  }

  // src/purifier/sanitation.js
  var BIND_PREFIX = "data-amp-bind-";
  var DENYLISTED_TAGS = {
    "applet": true,
    "audio": true,
    "base": true,
    "embed": true,
    "frame": true,
    "frameset": true,
    "iframe": true,
    "img": true,
    "link": true,
    "meta": true,
    "object": true,
    "style": true,
    "video": true
  };
  var EMAIL_ALLOWLISTED_AMP_TAGS = {
    "amp-accordion": true,
    "amp-anim": true,
    "amp-bind-macro": true,
    "amp-carousel": true,
    "amp-fit-text": true,
    "amp-img": true,
    "amp-layout": true,
    "amp-selector": true,
    "amp-sidebar": true,
    "amp-timeago": true
  };
  var TRIPLE_MUSTACHE_ALLOWLISTED_TAGS = ["a", "amp-img", "article", "aside", "b", "blockquote", "br", "caption", "code", "col", "colgroup", "dd", "del", "details", "div", "dl", "dt", "em", "figcaption", "figure", "footer", "h1", "h2", "h3", "header", "hr", "i", "ins", "li", "main", "mark", "nav", "ol", "p", "pre", "q", "s", "section", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "tfoot", "th", "thead", "time", "tr", "u", "ul"];
  var ALLOWLISTED_ATTRS = [
    "amp-fx",
    "fallback",
    "heights",
    "layout",
    "min-font-size",
    "max-font-size",
    "on",
    "option",
    "placeholder",
    "submitting",
    "submit-success",
    "submit-error",
    "validation-for",
    "verify-error",
    "visible-when-invalid",
    "href",
    "style",
    "text",
    "subscriptions-action",
    "subscriptions-actions",
    "subscriptions-decorate",
    "subscriptions-dialog",
    "subscriptions-display",
    "subscriptions-section",
    "subscriptions-service",
    "subscriptions-google-rtc",
    "amp-nested-submenu",
    "amp-nested-submenu-open",
    "amp-nested-submenu-close",
    "itemprop"
  ];
  var ALLOWLISTED_ATTRS_BY_TAGS = {
    "a": ["rel", "target"],
    "div": ["template"],
    "form": ["action-xhr", "verify-xhr", "custom-validation-reporting", "target"],
    "input": ["mask-output"],
    "template": ["type"],
    "textarea": ["autoexpand"]
  };
  var ALLOWLISTED_TARGETS = ["_top", "_blank"];
  var DENYLISTED_PROTOCOLS = /^(?:\w+script|data|blob):/i;
  var EXTENDED_DENYLISTED_PROTOCOLS = /^(?:blob):/i;
  var ATTR_WHITESPACE = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g;
  var DENYLISTED_TAG_SPECIFIC_ATTR_VALUES = Object.freeze(dict({
    "input": {
      "type": /(?:image|button)/i
    }
  }));
  var EMAIL_DENYLISTED_TAG_SPECIFIC_ATTR_VALUES = Object.freeze(dict({
    "input": {
      "type": /(?:button|file|image|password)/i
    }
  }));
  var DENYLISTED_FIELDS_ATTR = Object.freeze(["form", "formaction", "formmethod", "formtarget", "formnovalidate", "formenctype"]);
  var DENYLISTED_TAG_SPECIFIC_ATTRS = Object.freeze(dict({
    "input": DENYLISTED_FIELDS_ATTR,
    "textarea": DENYLISTED_FIELDS_ATTR,
    "select": DENYLISTED_FIELDS_ATTR
  }));
  var EMAIL_DENYLISTED_TAG_SPECIFIC_ATTRS = Object.freeze(dict({
    "amp-anim": ["controls"],
    "form": ["name"]
  }));
  var INVALID_INLINE_STYLE_REGEX = /!important|position\s*:\s*fixed|position\s*:\s*sticky/i;
  function isValidAttr(tagName, attrName, attrValue, doc, opt_purify) {
    if (opt_purify === void 0) {
      opt_purify = false;
    }
    var attrValueWithoutWhitespace = attrValue ? attrValue.replace(ATTR_WHITESPACE, "") : "";
    if (!opt_purify) {
      if (attrName.startsWith("on") && attrName != "on") {
        return false;
      }
      var normalized = attrValueWithoutWhitespace.toLowerCase();
      if (normalized.indexOf("<script") >= 0 || normalized.indexOf("<\/script") >= 0) {
        return false;
      }
      if (DENYLISTED_PROTOCOLS.test(attrValueWithoutWhitespace)) {
        return false;
      }
    }
    if (EXTENDED_DENYLISTED_PROTOCOLS.test(attrValueWithoutWhitespace)) {
      return false;
    }
    if (attrName == "style") {
      return !INVALID_INLINE_STYLE_REGEX.test(attrValue);
    }
    if (attrName == "class" && attrValue && /(^|\W)i-amphtml-/i.test(attrValue)) {
      return false;
    }
    if (isUrlAttribute(attrName) && /__amp_source_origin/.test(attrValue)) {
      return false;
    }
    var isEmail = isAmp4Email(doc);
    var attrDenylist = Object.assign(map(), DENYLISTED_TAG_SPECIFIC_ATTRS, isEmail ? EMAIL_DENYLISTED_TAG_SPECIFIC_ATTRS : {})[tagName];
    if (attrDenylist && attrDenylist.indexOf(attrName) != -1) {
      return false;
    }
    var attrValueDenylist = Object.assign(map(), DENYLISTED_TAG_SPECIFIC_ATTR_VALUES, isEmail ? EMAIL_DENYLISTED_TAG_SPECIFIC_ATTR_VALUES : {})[tagName];
    if (attrValueDenylist) {
      var denylistedValuesRegex = attrValueDenylist[attrName];
      if (denylistedValuesRegex && attrValue.search(denylistedValuesRegex) != -1) {
        return false;
      }
    }
    return true;
  }

  // third_party/caja/html-sanitizer.js
  var URI = function() {
    function parse(uriStr) {
      var m = ("" + uriStr).match(URI_RE_);
      if (!m) {
        return null;
      }
      return new URI2(nullIfAbsent(m[1]), nullIfAbsent(m[2]), nullIfAbsent(m[3]), nullIfAbsent(m[4]), nullIfAbsent(m[5]), nullIfAbsent(m[6]), nullIfAbsent(m[7]));
    }
    function create(scheme, credentials, domain, port, path, query, fragment) {
      var uri = new URI2(encodeIfExists2(scheme, URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_), encodeIfExists2(credentials, URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_), encodeIfExists(domain), port > 0 ? port.toString() : null, encodeIfExists2(path, URI_DISALLOWED_IN_PATH_), null, encodeIfExists(fragment));
      if (query) {
        if (typeof query === "string") {
          uri.setRawQuery(query.replace(/[^?&=0-9A-Za-z_\-~.%]/g, encodeOne));
        } else {
          uri.setAllParameters(query);
        }
      }
      return uri;
    }
    function encodeIfExists(unescapedPart) {
      if (typeof unescapedPart == "string") {
        return encodeURIComponent(unescapedPart);
      }
      return null;
    }
    ;
    function encodeIfExists2(unescapedPart, extra) {
      if (typeof unescapedPart == "string") {
        return encodeURI(unescapedPart).replace(extra, encodeOne);
      }
      return null;
    }
    ;
    function encodeOne(ch) {
      var n = ch.charCodeAt(0);
      return "%" + "0123456789ABCDEF".charAt(n >> 4 & 15) + "0123456789ABCDEF".charAt(n & 15);
    }
    function normPath(path) {
      return path.replace(/(^|\/)\.(?:\/|$)/g, "$1").replace(/\/{2,}/g, "/");
    }
    var PARENT_DIRECTORY_HANDLER = new RegExp("(/|^)(?:[^./][^/]*|\\.{2,}(?:[^./][^/]*)|\\.{3,}[^/]*)/\\.\\.(?:/|$)");
    var PARENT_DIRECTORY_HANDLER_RE = new RegExp(PARENT_DIRECTORY_HANDLER);
    var EXTRA_PARENT_PATHS_RE = /^(?:\.\.\/)*(?:\.\.$)?/;
    function collapse_dots(path) {
      if (path === null) {
        return null;
      }
      var p = normPath(path);
      var r = PARENT_DIRECTORY_HANDLER_RE;
      for (var q; (q = p.replace(r, "$1")) != p; p = q) {
      }
      ;
      return p;
    }
    function _resolve(baseUri, relativeUri) {
      var absoluteUri = baseUri.clone();
      var overridden = relativeUri.hasScheme();
      if (overridden) {
        absoluteUri.setRawScheme(relativeUri.getRawScheme());
      } else {
        overridden = relativeUri.hasCredentials();
      }
      if (overridden) {
        absoluteUri.setRawCredentials(relativeUri.getRawCredentials());
      } else {
        overridden = relativeUri.hasDomain();
      }
      if (overridden) {
        absoluteUri.setRawDomain(relativeUri.getRawDomain());
      } else {
        overridden = relativeUri.hasPort();
      }
      var rawPath = relativeUri.getRawPath();
      var simplifiedPath = collapse_dots(rawPath);
      if (overridden) {
        absoluteUri.setPort(relativeUri.getPort());
        simplifiedPath = simplifiedPath && simplifiedPath.replace(EXTRA_PARENT_PATHS_RE, "");
      } else {
        overridden = !!rawPath;
        if (overridden) {
          if (simplifiedPath.charCodeAt(0) !== 47) {
            var absRawPath = collapse_dots(absoluteUri.getRawPath() || "").replace(EXTRA_PARENT_PATHS_RE, "");
            var slash = absRawPath.lastIndexOf("/") + 1;
            simplifiedPath = collapse_dots((slash ? absRawPath.substring(0, slash) : "") + collapse_dots(rawPath)).replace(EXTRA_PARENT_PATHS_RE, "");
          }
        } else {
          simplifiedPath = simplifiedPath && simplifiedPath.replace(EXTRA_PARENT_PATHS_RE, "");
          if (simplifiedPath !== rawPath) {
            absoluteUri.setRawPath(simplifiedPath);
          }
        }
      }
      if (overridden) {
        absoluteUri.setRawPath(simplifiedPath);
      } else {
        overridden = relativeUri.hasQuery();
      }
      if (overridden) {
        absoluteUri.setRawQuery(relativeUri.getRawQuery());
      } else {
        overridden = relativeUri.hasFragment();
      }
      if (overridden) {
        absoluteUri.setRawFragment(relativeUri.getRawFragment());
      }
      return absoluteUri;
    }
    function URI2(rawScheme, rawCredentials, rawDomain, port, rawPath, rawQuery, rawFragment) {
      this.scheme_ = rawScheme;
      this.credentials_ = rawCredentials;
      this.domain_ = rawDomain;
      this.port_ = port;
      this.path_ = rawPath;
      this.query_ = rawQuery;
      this.fragment_ = rawFragment;
      this.paramCache_ = null;
    }
    URI2.prototype.toString = function() {
      var out = [];
      if (this.scheme_ !== null) {
        out.push(this.scheme_, ":");
      }
      if (this.domain_ !== null) {
        out.push("//");
        if (this.credentials_ !== null) {
          out.push(this.credentials_, "@");
        }
        out.push(this.domain_);
        if (this.port_ !== null) {
          out.push(":", this.port_.toString());
        }
      }
      if (this.path_ !== null) {
        out.push(this.path_);
      }
      if (this.query_ !== null) {
        out.push("?", this.query_);
      }
      if (this.fragment_ !== null) {
        out.push("#", this.fragment_);
      }
      return out.join("");
    };
    URI2.prototype.clone = function() {
      return new URI2(this.scheme_, this.credentials_, this.domain_, this.port_, this.path_, this.query_, this.fragment_);
    };
    URI2.prototype.getScheme = function() {
      return this.scheme_ && decodeURIComponent(this.scheme_).toLowerCase();
    };
    URI2.prototype.getRawScheme = function() {
      return this.scheme_;
    };
    URI2.prototype.setScheme = function(newScheme) {
      this.scheme_ = encodeIfExists2(newScheme, URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_);
      return this;
    };
    URI2.prototype.setRawScheme = function(newScheme) {
      this.scheme_ = newScheme ? newScheme : null;
      return this;
    };
    URI2.prototype.hasScheme = function() {
      return this.scheme_ !== null;
    };
    URI2.prototype.getCredentials = function() {
      return this.credentials_ && decodeURIComponent(this.credentials_);
    };
    URI2.prototype.getRawCredentials = function() {
      return this.credentials_;
    };
    URI2.prototype.setCredentials = function(newCredentials) {
      this.credentials_ = encodeIfExists2(newCredentials, URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_);
      return this;
    };
    URI2.prototype.setRawCredentials = function(newCredentials) {
      this.credentials_ = newCredentials ? newCredentials : null;
      return this;
    };
    URI2.prototype.hasCredentials = function() {
      return this.credentials_ !== null;
    };
    URI2.prototype.getDomain = function() {
      return this.domain_ && decodeURIComponent(this.domain_);
    };
    URI2.prototype.getRawDomain = function() {
      return this.domain_;
    };
    URI2.prototype.setDomain = function(newDomain) {
      return this.setRawDomain(newDomain && encodeURIComponent(newDomain));
    };
    URI2.prototype.setRawDomain = function(newDomain) {
      this.domain_ = newDomain ? newDomain : null;
      return this.setRawPath(this.path_);
    };
    URI2.prototype.hasDomain = function() {
      return this.domain_ !== null;
    };
    URI2.prototype.getPort = function() {
      return this.port_ && decodeURIComponent(this.port_);
    };
    URI2.prototype.setPort = function(newPort) {
      if (newPort) {
        newPort = Number(newPort);
        if (newPort !== (newPort & 65535)) {
          throw new Error("Bad port number " + newPort);
        }
        this.port_ = "" + newPort;
      } else {
        this.port_ = null;
      }
      return this;
    };
    URI2.prototype.hasPort = function() {
      return this.port_ !== null;
    };
    URI2.prototype.getPath = function() {
      return this.path_ && decodeURIComponent(this.path_);
    };
    URI2.prototype.getRawPath = function() {
      return this.path_;
    };
    URI2.prototype.setPath = function(newPath) {
      return this.setRawPath(encodeIfExists2(newPath, URI_DISALLOWED_IN_PATH_));
    };
    URI2.prototype.setRawPath = function(newPath) {
      if (newPath) {
        newPath = String(newPath);
        this.path_ = !this.domain_ || /^\//.test(newPath) ? newPath : "/" + newPath;
      } else {
        this.path_ = null;
      }
      return this;
    };
    URI2.prototype.hasPath = function() {
      return this.path_ !== null;
    };
    URI2.prototype.getQuery = function() {
      return this.query_ && decodeURIComponent(this.query_).replace(/\+/g, " ");
    };
    URI2.prototype.getRawQuery = function() {
      return this.query_;
    };
    URI2.prototype.setQuery = function(newQuery) {
      this.paramCache_ = null;
      this.query_ = encodeIfExists(newQuery);
      return this;
    };
    URI2.prototype.setRawQuery = function(newQuery) {
      this.paramCache_ = null;
      this.query_ = newQuery ? newQuery : null;
      return this;
    };
    URI2.prototype.hasQuery = function() {
      return this.query_ !== null;
    };
    URI2.prototype.setAllParameters = function(params) {
      if (typeof params === "object") {
        if (!(params instanceof Array) && (params instanceof Object || Object.prototype.toString.call(params) !== "[object Array]")) {
          var newParams = [];
          var i = -1;
          for (var k in params) {
            var v = params[k];
            if (typeof v === "string") {
              newParams[++i] = k;
              newParams[++i] = v;
            }
          }
          params = newParams;
        }
      }
      this.paramCache_ = null;
      var queryBuf = [];
      var separator = "";
      for (var j = 0; j < params.length; ) {
        var k = params[j++];
        var v = params[j++];
        queryBuf.push(separator, encodeURIComponent(k.toString()));
        separator = "&";
        if (v) {
          queryBuf.push("=", encodeURIComponent(v.toString()));
        }
      }
      this.query_ = queryBuf.join("");
      return this;
    };
    URI2.prototype.checkParameterCache_ = function() {
      if (!this.paramCache_) {
        var q = this.query_;
        if (!q) {
          this.paramCache_ = [];
        } else {
          var cgiParams = q.split(/[&\?]/);
          var out = [];
          var k = -1;
          for (var i = 0; i < cgiParams.length; ++i) {
            var m = cgiParams[i].match(/^([^=]*)(?:=(.*))?$/);
            out[++k] = decodeURIComponent(m[1]).replace(/\+/g, " ");
            out[++k] = decodeURIComponent(m[2] || "").replace(/\+/g, " ");
          }
          this.paramCache_ = out;
        }
      }
    };
    URI2.prototype.setParameterValues = function(key, values) {
      if (typeof values === "string") {
        values = [values];
      }
      this.checkParameterCache_();
      var newValueIndex = 0;
      var pc = this.paramCache_;
      var params = [];
      for (var i = 0, k = 0; i < pc.length; i += 2) {
        if (key === pc[i]) {
          if (newValueIndex < values.length) {
            params.push(key, values[newValueIndex++]);
          }
        } else {
          params.push(pc[i], pc[i + 1]);
        }
      }
      while (newValueIndex < values.length) {
        params.push(key, values[newValueIndex++]);
      }
      this.setAllParameters(params);
      return this;
    };
    URI2.prototype.removeParameter = function(key) {
      return this.setParameterValues(key, []);
    };
    URI2.prototype.getAllParameters = function() {
      this.checkParameterCache_();
      return this.paramCache_.slice(0, this.paramCache_.length);
    };
    URI2.prototype.getParameterValues = function(paramNameUnescaped) {
      this.checkParameterCache_();
      var values = [];
      for (var i = 0; i < this.paramCache_.length; i += 2) {
        if (paramNameUnescaped === this.paramCache_[i]) {
          values.push(this.paramCache_[i + 1]);
        }
      }
      return values;
    };
    URI2.prototype.getParameterMap = function(paramNameUnescaped) {
      this.checkParameterCache_();
      var paramMap = {};
      for (var i = 0; i < this.paramCache_.length; i += 2) {
        var key = this.paramCache_[i++], value = this.paramCache_[i++];
        if (!(key in paramMap)) {
          paramMap[key] = [value];
        } else {
          paramMap[key].push(value);
        }
      }
      return paramMap;
    };
    URI2.prototype.getParameterValue = function(paramNameUnescaped) {
      this.checkParameterCache_();
      for (var i = 0; i < this.paramCache_.length; i += 2) {
        if (paramNameUnescaped === this.paramCache_[i]) {
          return this.paramCache_[i + 1];
        }
      }
      return null;
    };
    URI2.prototype.getFragment = function() {
      return this.fragment_ && decodeURIComponent(this.fragment_);
    };
    URI2.prototype.getRawFragment = function() {
      return this.fragment_;
    };
    URI2.prototype.setFragment = function(newFragment) {
      this.fragment_ = newFragment ? encodeURIComponent(newFragment) : null;
      return this;
    };
    URI2.prototype.setRawFragment = function(newFragment) {
      this.fragment_ = newFragment ? newFragment : null;
      return this;
    };
    URI2.prototype.hasFragment = function() {
      return this.fragment_ !== null;
    };
    function nullIfAbsent(matchPart) {
      return typeof matchPart == "string" && matchPart.length > 0 ? matchPart : null;
    }
    var URI_RE_ = new RegExp("^(?:([^:/?#]+):)?(?://(?:([^/?#]*)@)?([^/?#:@]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
    var URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_ = /[#\/\?@]/g;
    var URI_DISALLOWED_IN_PATH_ = /[\#\?]/g;
    URI2.parse = parse;
    URI2.create = create;
    URI2.resolve = _resolve;
    URI2.collapse_dots = collapse_dots;
    URI2.utils = {
      mimeTypeOf: function mimeTypeOf(uri) {
        var uriObj = parse(uri);
        if (/\.html$/.test(uriObj.getPath())) {
          return "text/html";
        } else {
          return "application/javascript";
        }
      },
      resolve: function resolve(base, uri) {
        if (base) {
          return _resolve(parse(base), parse(uri)).toString();
        } else {
          return "" + uri;
        }
      }
    };
    return URI2;
  }();
  if (typeof window !== "undefined") {
  }
  var html4 = {};
  html4.atype = {
    "NONE": 0,
    "URI": 1,
    "URI_FRAGMENT": 11,
    "SCRIPT": 2,
    "STYLE": 3,
    "HTML": 12,
    "ID": 4,
    "IDREF": 5,
    "IDREFS": 6,
    "GLOBAL_NAME": 7,
    "LOCAL_NAME": 8,
    "CLASSES": 9,
    "FRAME_TARGET": 10,
    "MEDIA_QUERY": 13
  };
  html4["atype"] = html4.atype;
  html4.ATTRIBS = {
    "*::class": 9,
    "*::dir": 0,
    "*::draggable": 0,
    "*::hidden": 0,
    "*::id": 4,
    "*::inert": 0,
    "*::itemprop": 0,
    "*::itemref": 6,
    "*::itemscope": 0,
    "*::lang": 0,
    "*::onblur": 2,
    "*::onchange": 2,
    "*::onclick": 2,
    "*::ondblclick": 2,
    "*::onerror": 2,
    "*::onfocus": 2,
    "*::onkeydown": 2,
    "*::onkeypress": 2,
    "*::onkeyup": 2,
    "*::onload": 2,
    "*::onmousedown": 2,
    "*::onmousemove": 2,
    "*::onmouseout": 2,
    "*::onmouseover": 2,
    "*::onmouseup": 2,
    "*::onreset": 2,
    "*::onscroll": 2,
    "*::onselect": 2,
    "*::onsubmit": 2,
    "*::ontouchcancel": 2,
    "*::ontouchend": 2,
    "*::ontouchenter": 2,
    "*::ontouchleave": 2,
    "*::ontouchmove": 2,
    "*::ontouchstart": 2,
    "*::onunload": 2,
    "*::spellcheck": 0,
    "*::style": 3,
    "*::tabindex": 0,
    "*::title": 0,
    "*::translate": 0,
    "a::accesskey": 0,
    "a::coords": 0,
    "a::href": 1,
    "a::hreflang": 0,
    "a::name": 7,
    "a::onblur": 2,
    "a::onfocus": 2,
    "a::shape": 0,
    "a::target": 10,
    "a::type": 0,
    "area::accesskey": 0,
    "area::alt": 0,
    "area::coords": 0,
    "area::href": 1,
    "area::nohref": 0,
    "area::onblur": 2,
    "area::onfocus": 2,
    "area::shape": 0,
    "area::target": 10,
    "audio::controls": 0,
    "audio::loop": 0,
    "audio::mediagroup": 5,
    "audio::muted": 0,
    "audio::preload": 0,
    "audio::src": 1,
    "bdo::dir": 0,
    "blockquote::cite": 1,
    "br::clear": 0,
    "button::accesskey": 0,
    "button::disabled": 0,
    "button::name": 8,
    "button::onblur": 2,
    "button::onfocus": 2,
    "button::type": 0,
    "button::value": 0,
    "canvas::height": 0,
    "canvas::width": 0,
    "caption::align": 0,
    "col::align": 0,
    "col::char": 0,
    "col::charoff": 0,
    "col::span": 0,
    "col::valign": 0,
    "col::width": 0,
    "colgroup::align": 0,
    "colgroup::char": 0,
    "colgroup::charoff": 0,
    "colgroup::span": 0,
    "colgroup::valign": 0,
    "colgroup::width": 0,
    "command::checked": 0,
    "command::command": 5,
    "command::disabled": 0,
    "command::icon": 1,
    "command::label": 0,
    "command::radiogroup": 0,
    "command::type": 0,
    "data::value": 0,
    "del::cite": 1,
    "del::datetime": 0,
    "details::open": 0,
    "dir::compact": 0,
    "div::align": 0,
    "dl::compact": 0,
    "fieldset::disabled": 0,
    "font::color": 0,
    "font::face": 0,
    "font::size": 0,
    "form::accept": 0,
    "form::action": 1,
    "form::autocomplete": 0,
    "form::enctype": 0,
    "form::method": 0,
    "form::name": 7,
    "form::novalidate": 0,
    "form::onreset": 2,
    "form::onsubmit": 2,
    "form::target": 10,
    "h1::align": 0,
    "h2::align": 0,
    "h3::align": 0,
    "h4::align": 0,
    "h5::align": 0,
    "h6::align": 0,
    "hr::align": 0,
    "hr::noshade": 0,
    "hr::size": 0,
    "hr::width": 0,
    "iframe::align": 0,
    "iframe::frameborder": 0,
    "iframe::height": 0,
    "iframe::marginheight": 0,
    "iframe::marginwidth": 0,
    "iframe::width": 0,
    "img::align": 0,
    "img::alt": 0,
    "img::border": 0,
    "img::height": 0,
    "img::hspace": 0,
    "img::ismap": 0,
    "img::name": 7,
    "img::src": 1,
    "img::usemap": 11,
    "img::vspace": 0,
    "img::width": 0,
    "input::accept": 0,
    "input::accesskey": 0,
    "input::align": 0,
    "input::alt": 0,
    "input::autocomplete": 0,
    "input::checked": 0,
    "input::disabled": 0,
    "input::inputmode": 0,
    "input::ismap": 0,
    "input::list": 5,
    "input::max": 0,
    "input::maxlength": 0,
    "input::min": 0,
    "input::multiple": 0,
    "input::name": 8,
    "input::onblur": 2,
    "input::onchange": 2,
    "input::onfocus": 2,
    "input::onselect": 2,
    "input::pattern": 0,
    "input::placeholder": 0,
    "input::readonly": 0,
    "input::required": 0,
    "input::size": 0,
    "input::src": 1,
    "input::step": 0,
    "input::type": 0,
    "input::usemap": 11,
    "input::value": 0,
    "ins::cite": 1,
    "ins::datetime": 0,
    "label::accesskey": 0,
    "label::for": 5,
    "label::onblur": 2,
    "label::onfocus": 2,
    "legend::accesskey": 0,
    "legend::align": 0,
    "li::type": 0,
    "li::value": 0,
    "map::name": 7,
    "menu::compact": 0,
    "menu::label": 0,
    "menu::type": 0,
    "meter::high": 0,
    "meter::low": 0,
    "meter::max": 0,
    "meter::min": 0,
    "meter::optimum": 0,
    "meter::value": 0,
    "ol::compact": 0,
    "ol::reversed": 0,
    "ol::start": 0,
    "ol::type": 0,
    "optgroup::disabled": 0,
    "optgroup::label": 0,
    "option::disabled": 0,
    "option::label": 0,
    "option::selected": 0,
    "option::value": 0,
    "output::for": 6,
    "output::name": 8,
    "p::align": 0,
    "pre::width": 0,
    "progress::max": 0,
    "progress::min": 0,
    "progress::value": 0,
    "q::cite": 1,
    "select::autocomplete": 0,
    "select::disabled": 0,
    "select::multiple": 0,
    "select::name": 8,
    "select::onblur": 2,
    "select::onchange": 2,
    "select::onfocus": 2,
    "select::required": 0,
    "select::size": 0,
    "source::src": 1,
    "source::type": 0,
    "table::align": 0,
    "table::bgcolor": 0,
    "table::border": 0,
    "table::cellpadding": 0,
    "table::cellspacing": 0,
    "table::frame": 0,
    "table::rules": 0,
    "table::summary": 0,
    "table::width": 0,
    "tbody::align": 0,
    "tbody::char": 0,
    "tbody::charoff": 0,
    "tbody::valign": 0,
    "td::abbr": 0,
    "td::align": 0,
    "td::axis": 0,
    "td::bgcolor": 0,
    "td::char": 0,
    "td::charoff": 0,
    "td::colspan": 0,
    "td::headers": 6,
    "td::height": 0,
    "td::nowrap": 0,
    "td::rowspan": 0,
    "td::scope": 0,
    "td::valign": 0,
    "td::width": 0,
    "template::type": 0,
    "textarea::accesskey": 0,
    "textarea::autocomplete": 0,
    "textarea::cols": 0,
    "textarea::disabled": 0,
    "textarea::inputmode": 0,
    "textarea::name": 8,
    "textarea::onblur": 2,
    "textarea::onchange": 2,
    "textarea::onfocus": 2,
    "textarea::onselect": 2,
    "textarea::placeholder": 0,
    "textarea::readonly": 0,
    "textarea::required": 0,
    "textarea::rows": 0,
    "textarea::wrap": 0,
    "tfoot::align": 0,
    "tfoot::char": 0,
    "tfoot::charoff": 0,
    "tfoot::valign": 0,
    "th::abbr": 0,
    "th::align": 0,
    "th::axis": 0,
    "th::bgcolor": 0,
    "th::char": 0,
    "th::charoff": 0,
    "th::colspan": 0,
    "th::headers": 6,
    "th::height": 0,
    "th::nowrap": 0,
    "th::rowspan": 0,
    "th::scope": 0,
    "th::valign": 0,
    "th::width": 0,
    "thead::align": 0,
    "thead::char": 0,
    "thead::charoff": 0,
    "thead::valign": 0,
    "tr::align": 0,
    "tr::bgcolor": 0,
    "tr::char": 0,
    "tr::charoff": 0,
    "tr::valign": 0,
    "track::default": 0,
    "track::kind": 0,
    "track::label": 0,
    "track::srclang": 0,
    "ul::compact": 0,
    "ul::type": 0,
    "video::controls": 0,
    "video::height": 0,
    "video::loop": 0,
    "video::mediagroup": 5,
    "video::muted": 0,
    "video::poster": 1,
    "video::preload": 0,
    "video::src": 1,
    "video::width": 0
  };
  html4["ATTRIBS"] = html4.ATTRIBS;
  html4.eflags = {
    "OPTIONAL_ENDTAG": 1,
    "EMPTY": 2,
    "CDATA": 4,
    "RCDATA": 8,
    "UNSAFE": 16,
    "FOLDABLE": 32,
    "SCRIPT": 64,
    "STYLE": 128,
    "VIRTUALIZED": 256
  };
  html4["eflags"] = html4.eflags;
  html4.ELEMENTS = {
    "a": 0,
    "abbr": 0,
    "acronym": 0,
    "address": 0,
    "applet": 272,
    "area": 2,
    "article": 0,
    "aside": 0,
    "audio": 0,
    "b": 0,
    "base": 274,
    "basefont": 274,
    "bdi": 0,
    "bdo": 0,
    "big": 0,
    "blockquote": 0,
    "body": 305,
    "br": 2,
    "button": 0,
    "canvas": 0,
    "caption": 0,
    "center": 0,
    "cite": 0,
    "code": 0,
    "col": 2,
    "colgroup": 1,
    "command": 2,
    "data": 0,
    "datalist": 0,
    "dd": 1,
    "del": 0,
    "details": 0,
    "dfn": 0,
    "dialog": 272,
    "dir": 0,
    "div": 0,
    "dl": 0,
    "dt": 1,
    "em": 0,
    "fieldset": 0,
    "figcaption": 0,
    "figure": 0,
    "font": 0,
    "footer": 0,
    "form": 0,
    "frame": 274,
    "frameset": 272,
    "h1": 0,
    "h2": 0,
    "h3": 0,
    "h4": 0,
    "h5": 0,
    "h6": 0,
    "head": 305,
    "header": 0,
    "hgroup": 0,
    "hr": 2,
    "html": 305,
    "i": 0,
    "iframe": 4,
    "img": 2,
    "input": 2,
    "ins": 0,
    "isindex": 274,
    "kbd": 0,
    "keygen": 274,
    "label": 0,
    "legend": 0,
    "li": 1,
    "link": 274,
    "map": 0,
    "mark": 0,
    "menu": 0,
    "meta": 274,
    "meter": 0,
    "nav": 0,
    "nobr": 0,
    "noembed": 276,
    "noframes": 276,
    "noscript": 276,
    "object": 272,
    "ol": 0,
    "optgroup": 0,
    "option": 1,
    "output": 0,
    "p": 1,
    "param": 274,
    "pre": 0,
    "progress": 0,
    "q": 0,
    "s": 0,
    "samp": 0,
    "script": 84,
    "section": 0,
    "select": 0,
    "small": 0,
    "source": 2,
    "span": 0,
    "strike": 0,
    "strong": 0,
    "style": 148,
    "sub": 0,
    "summary": 0,
    "sup": 0,
    "table": 0,
    "tbody": 1,
    "td": 1,
    "template": 4,
    "textarea": 8,
    "tfoot": 1,
    "th": 1,
    "thead": 1,
    "time": 0,
    "title": 280,
    "tr": 1,
    "track": 2,
    "tt": 0,
    "u": 0,
    "ul": 0,
    "var": 0,
    "video": 0,
    "wbr": 2
  };
  html4["ELEMENTS"] = html4.ELEMENTS;
  html4.ELEMENT_DOM_INTERFACES = {
    "a": "HTMLAnchorElement",
    "abbr": "HTMLElement",
    "acronym": "HTMLElement",
    "address": "HTMLElement",
    "applet": "HTMLAppletElement",
    "area": "HTMLAreaElement",
    "article": "HTMLElement",
    "aside": "HTMLElement",
    "audio": "HTMLAudioElement",
    "b": "HTMLElement",
    "base": "HTMLBaseElement",
    "basefont": "HTMLBaseFontElement",
    "bdi": "HTMLElement",
    "bdo": "HTMLElement",
    "big": "HTMLElement",
    "blockquote": "HTMLQuoteElement",
    "body": "HTMLBodyElement",
    "br": "HTMLBRElement",
    "button": "HTMLButtonElement",
    "canvas": "HTMLCanvasElement",
    "caption": "HTMLTableCaptionElement",
    "center": "HTMLElement",
    "cite": "HTMLElement",
    "code": "HTMLElement",
    "col": "HTMLTableColElement",
    "colgroup": "HTMLTableColElement",
    "command": "HTMLCommandElement",
    "data": "HTMLElement",
    "datalist": "HTMLDataListElement",
    "dd": "HTMLElement",
    "del": "HTMLModElement",
    "details": "HTMLDetailsElement",
    "dfn": "HTMLElement",
    "dialog": "HTMLDialogElement",
    "dir": "HTMLDirectoryElement",
    "div": "HTMLDivElement",
    "dl": "HTMLDListElement",
    "dt": "HTMLElement",
    "em": "HTMLElement",
    "fieldset": "HTMLFieldSetElement",
    "figcaption": "HTMLElement",
    "figure": "HTMLElement",
    "font": "HTMLFontElement",
    "footer": "HTMLElement",
    "form": "HTMLFormElement",
    "frame": "HTMLFrameElement",
    "frameset": "HTMLFrameSetElement",
    "h1": "HTMLHeadingElement",
    "h2": "HTMLHeadingElement",
    "h3": "HTMLHeadingElement",
    "h4": "HTMLHeadingElement",
    "h5": "HTMLHeadingElement",
    "h6": "HTMLHeadingElement",
    "head": "HTMLHeadElement",
    "header": "HTMLElement",
    "hgroup": "HTMLElement",
    "hr": "HTMLHRElement",
    "html": "HTMLHtmlElement",
    "i": "HTMLElement",
    "iframe": "HTMLIFrameElement",
    "img": "HTMLImageElement",
    "input": "HTMLInputElement",
    "ins": "HTMLModElement",
    "isindex": "HTMLUnknownElement",
    "kbd": "HTMLElement",
    "keygen": "HTMLKeygenElement",
    "label": "HTMLLabelElement",
    "legend": "HTMLLegendElement",
    "li": "HTMLLIElement",
    "link": "HTMLLinkElement",
    "map": "HTMLMapElement",
    "mark": "HTMLElement",
    "menu": "HTMLMenuElement",
    "meta": "HTMLMetaElement",
    "meter": "HTMLMeterElement",
    "nav": "HTMLElement",
    "nobr": "HTMLElement",
    "noembed": "HTMLElement",
    "noframes": "HTMLElement",
    "noscript": "HTMLElement",
    "object": "HTMLObjectElement",
    "ol": "HTMLOListElement",
    "optgroup": "HTMLOptGroupElement",
    "option": "HTMLOptionElement",
    "output": "HTMLOutputElement",
    "p": "HTMLParagraphElement",
    "param": "HTMLParamElement",
    "pre": "HTMLPreElement",
    "progress": "HTMLProgressElement",
    "q": "HTMLQuoteElement",
    "s": "HTMLElement",
    "samp": "HTMLElement",
    "script": "HTMLScriptElement",
    "section": "HTMLElement",
    "select": "HTMLSelectElement",
    "small": "HTMLElement",
    "source": "HTMLSourceElement",
    "span": "HTMLSpanElement",
    "strike": "HTMLElement",
    "strong": "HTMLElement",
    "style": "HTMLStyleElement",
    "sub": "HTMLElement",
    "summary": "HTMLElement",
    "sup": "HTMLElement",
    "table": "HTMLTableElement",
    "tbody": "HTMLTableSectionElement",
    "td": "HTMLTableDataCellElement",
    "template": "HTMLTemplateElement",
    "textarea": "HTMLTextAreaElement",
    "tfoot": "HTMLTableSectionElement",
    "th": "HTMLTableHeaderCellElement",
    "thead": "HTMLTableSectionElement",
    "time": "HTMLTimeElement",
    "title": "HTMLTitleElement",
    "tr": "HTMLTableRowElement",
    "track": "HTMLTrackElement",
    "tt": "HTMLElement",
    "u": "HTMLElement",
    "ul": "HTMLUListElement",
    "var": "HTMLElement",
    "video": "HTMLVideoElement",
    "wbr": "HTMLElement"
  };
  html4["ELEMENT_DOM_INTERFACES"] = html4.ELEMENT_DOM_INTERFACES;
  html4.ueffects = {
    "NOT_LOADED": 0,
    "SAME_DOCUMENT": 1,
    "NEW_DOCUMENT": 2
  };
  html4["ueffects"] = html4.ueffects;
  html4.URIEFFECTS = {
    "a::href": 2,
    "area::href": 2,
    "audio::src": 1,
    "blockquote::cite": 0,
    "command::icon": 1,
    "del::cite": 0,
    "form::action": 2,
    "img::src": 1,
    "input::src": 1,
    "ins::cite": 0,
    "q::cite": 0,
    "video::poster": 1,
    "video::src": 1
  };
  html4["URIEFFECTS"] = html4.URIEFFECTS;
  html4.ltypes = {
    "UNSANDBOXED": 2,
    "SANDBOXED": 1,
    "DATA": 0
  };
  html4["ltypes"] = html4.ltypes;
  html4.LOADERTYPES = {
    "a::href": 2,
    "area::href": 2,
    "audio::src": 2,
    "blockquote::cite": 2,
    "command::icon": 1,
    "del::cite": 2,
    "form::action": 2,
    "img::src": 1,
    "input::src": 1,
    "ins::cite": 2,
    "q::cite": 2,
    "video::poster": 1,
    "video::src": 2
  };
  html4["LOADERTYPES"] = html4.LOADERTYPES;
  if (typeof window !== "undefined") {
  }
  if ("I".toLowerCase() !== "i") {
    throw "I/i problem";
  }
  var defs = {};
  defs.TagPolicyDecision;
  defs.TagPolicy;
  var html = function(html42) {
    var parseCssDeclarations, sanitizeCssProperty, cssSchema;
    if (typeof window !== "undefined") {
      parseCssDeclarations = window["parseCssDeclarations"];
      sanitizeCssProperty = window["sanitizeCssProperty"];
      cssSchema = window["cssSchema"];
    }
    var ENTITIES = {
      "lt": "<",
      "LT": "<",
      "gt": ">",
      "GT": ">",
      "amp": "&",
      "AMP": "&",
      "quot": '"',
      "apos": "'",
      "nbsp": "\xA0"
    };
    var decimalEscapeRe = /^#(\d+)$/;
    var hexEscapeRe = /^#x([0-9A-Fa-f]+)$/;
    var safeEntityNameRe = /^[A-Za-z][A-Za-z0-9]+$/;
    var entityLookupElement = typeof window !== "undefined" && window["document"] ? window["document"].createElement("textarea") : null;
    function lookupEntity(name) {
      if (ENTITIES.hasOwnProperty(name)) {
        return ENTITIES[name];
      }
      var m = name.match(decimalEscapeRe);
      if (m) {
        return String.fromCharCode(parseInt(m[1], 10));
      } else if (!!(m = name.match(hexEscapeRe))) {
        return String.fromCharCode(parseInt(m[1], 16));
      } else if (entityLookupElement && safeEntityNameRe.test(name)) {
        entityLookupElement.innerHTML = "&" + name + ";";
        var text = entityLookupElement.textContent;
        ENTITIES[name] = text;
        return text;
      } else {
        return "&" + name + ";";
      }
    }
    function decodeOneEntity(_, name) {
      return lookupEntity(name);
    }
    var nulRe = /\0/g;
    function stripNULs(s) {
      return s.replace(nulRe, "");
    }
    var ENTITY_RE_1 = /&(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/g;
    var ENTITY_RE_2 = /^(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/;
    function unescapeEntities(s) {
      return s.replace(ENTITY_RE_1, decodeOneEntity);
    }
    var ampRe = /&/g;
    var looseAmpRe = /&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi;
    var ltRe = /[<]/g;
    var gtRe = />/g;
    var quotRe = /\"/g;
    function escapeAttrib(s) {
      return ("" + s).replace(ampRe, "&amp;").replace(ltRe, "&lt;").replace(gtRe, "&gt;").replace(quotRe, "&#34;");
    }
    function normalizeRCData(rcdata) {
      return rcdata.replace(looseAmpRe, "&amp;$1").replace(ltRe, "&lt;").replace(gtRe, "&gt;");
    }
    var ATTR_RE = new RegExp("^\\s*(\\[[-.:\\w]+\\]|[-.:\\w]+)(?:\\s*(=)\\s*((\")[^\"]*(\"|$)|(')[^']*('|$)|(?=[a-z][-\\w]*\\s*=)|[^\"'\\s]*))?", "i");
    var splitWillCapture = "a,b".split(/(,)/).length === 3;
    var EFLAGS_TEXT = html42.eflags["CDATA"] | html42.eflags["RCDATA"];
    function makeSaxParser(handler) {
      var hcopy = {
        cdata: handler.cdata || handler["cdata"],
        comment: handler.comment || handler["comment"],
        endDoc: handler.endDoc || handler["endDoc"],
        endTag: handler.endTag || handler["endTag"],
        pcdata: handler.pcdata || handler["pcdata"],
        rcdata: handler.rcdata || handler["rcdata"],
        startDoc: handler.startDoc || handler["startDoc"],
        startTag: handler.startTag || handler["startTag"]
      };
      return function(htmlText, param) {
        return parse(htmlText, hcopy, param);
      };
    }
    var continuationMarker = {};
    function parse(htmlText, handler, param) {
      var m, p, tagName;
      var parts = htmlSplit(htmlText);
      var state = {
        noMoreGT: false,
        noMoreEndComments: false
      };
      parseCPS(handler, parts, 0, state, param);
    }
    function continuationMaker(h, parts, initial, state, param) {
      return function() {
        parseCPS(h, parts, initial, state, param);
      };
    }
    function parseCPS(h, parts, initial, state, param) {
      try {
        if (h.startDoc && initial == 0) {
          h.startDoc(param);
        }
        var m, p, tagName;
        for (var pos = initial, end = parts.length; pos < end; ) {
          var current = parts[pos++];
          var next = parts[pos];
          switch (current) {
            case "&":
              if (ENTITY_RE_2.test(next)) {
                if (h.pcdata) {
                  h.pcdata("&" + next, param, continuationMarker, continuationMaker(h, parts, pos, state, param));
                }
                pos++;
              } else {
                if (h.pcdata) {
                  h.pcdata("&amp;", param, continuationMarker, continuationMaker(h, parts, pos, state, param));
                }
              }
              break;
            case "</":
              if (m = /^([-\w:]+)[^\'\"]*/.exec(next)) {
                if (m[0].length === next.length && parts[pos + 1] === ">") {
                  pos += 2;
                  tagName = m[1].toLowerCase();
                  if (h.endTag) {
                    h.endTag(tagName, param, continuationMarker, continuationMaker(h, parts, pos, state, param));
                  }
                } else {
                  pos = parseEndTag(parts, pos, h, param, continuationMarker, state);
                }
              } else {
                if (h.pcdata) {
                  h.pcdata("&lt;/", param, continuationMarker, continuationMaker(h, parts, pos, state, param));
                }
              }
              break;
            case "<":
              if (m = /^([-\w:]+)\s*\/?/.exec(next)) {
                if (m[0].length === next.length && parts[pos + 1] === ">") {
                  pos += 2;
                  tagName = m[1].toLowerCase();
                  if (h.startTag) {
                    h.startTag(tagName, [], param, continuationMarker, continuationMaker(h, parts, pos, state, param));
                  }
                  var eflags = html42.ELEMENTS[tagName];
                  if (eflags & EFLAGS_TEXT) {
                    var tag = {
                      name: tagName,
                      next: pos,
                      eflags: eflags
                    };
                    pos = parseText(parts, tag, h, param, continuationMarker, state);
                  }
                } else {
                  pos = parseStartTag(parts, pos, h, param, continuationMarker, state);
                }
              } else {
                if (h.pcdata) {
                  h.pcdata("&lt;", param, continuationMarker, continuationMaker(h, parts, pos, state, param));
                }
              }
              break;
            case "<!--":
              if (!state.noMoreEndComments) {
                for (p = pos + 1; p < end; p++) {
                  if (parts[p] === ">" && /--$/.test(parts[p - 1])) {
                    break;
                  }
                }
                if (p < end) {
                  if (h.comment) {
                    var comment = parts.slice(pos, p).join("");
                    h.comment(comment.substr(0, comment.length - 2), param, continuationMarker, continuationMaker(h, parts, p + 1, state, param));
                  }
                  pos = p + 1;
                } else {
                  state.noMoreEndComments = true;
                }
              }
              if (state.noMoreEndComments) {
                if (h.pcdata) {
                  h.pcdata("&lt;!--", param, continuationMarker, continuationMaker(h, parts, pos, state, param));
                }
              }
              break;
            case "<!":
              if (!/^\w/.test(next)) {
                if (h.pcdata) {
                  h.pcdata("&lt;!", param, continuationMarker, continuationMaker(h, parts, pos, state, param));
                }
              } else {
                if (!state.noMoreGT) {
                  for (p = pos + 1; p < end; p++) {
                    if (parts[p] === ">") {
                      break;
                    }
                  }
                  if (p < end) {
                    pos = p + 1;
                  } else {
                    state.noMoreGT = true;
                  }
                }
                if (state.noMoreGT) {
                  if (h.pcdata) {
                    h.pcdata("&lt;!", param, continuationMarker, continuationMaker(h, parts, pos, state, param));
                  }
                }
              }
              break;
            case "<?":
              if (!state.noMoreGT) {
                for (p = pos + 1; p < end; p++) {
                  if (parts[p] === ">") {
                    break;
                  }
                }
                if (p < end) {
                  pos = p + 1;
                } else {
                  state.noMoreGT = true;
                }
              }
              if (state.noMoreGT) {
                if (h.pcdata) {
                  h.pcdata("&lt;?", param, continuationMarker, continuationMaker(h, parts, pos, state, param));
                }
              }
              break;
            case ">":
              if (h.pcdata) {
                h.pcdata("&gt;", param, continuationMarker, continuationMaker(h, parts, pos, state, param));
              }
              break;
            case "":
              break;
            default:
              if (h.pcdata) {
                h.pcdata(current, param, continuationMarker, continuationMaker(h, parts, pos, state, param));
              }
              break;
          }
        }
        if (h.endDoc) {
          h.endDoc(param);
        }
      } catch (e) {
        if (e !== continuationMarker) {
          throw e;
        }
      }
    }
    function htmlSplit(str) {
      var re = /(<\/|<\!--|<[!?]|[&<>])/g;
      str += "";
      if (splitWillCapture) {
        return str.split(re);
      } else {
        var parts = [];
        var lastPos = 0;
        var m;
        while ((m = re.exec(str)) !== null) {
          parts.push(str.substring(lastPos, m.index));
          parts.push(m[0]);
          lastPos = m.index + m[0].length;
        }
        parts.push(str.substring(lastPos));
        return parts;
      }
    }
    function parseEndTag(parts, pos, h, param, continuationMarker2, state) {
      var tag = parseTagAndAttrs(parts, pos);
      if (!tag) {
        return parts.length;
      }
      if (h.endTag) {
        h.endTag(tag.name, param, continuationMarker2, continuationMaker(h, parts, pos, state, param));
      }
      return tag.next;
    }
    function parseStartTag(parts, pos, h, param, continuationMarker2, state) {
      var tag = parseTagAndAttrs(parts, pos);
      if (!tag) {
        return parts.length;
      }
      if (h.startTag) {
        h.startTag(tag.name, tag.attrs, param, continuationMarker2, continuationMaker(h, parts, tag.next, state, param));
      }
      if (tag.eflags & EFLAGS_TEXT) {
        return parseText(parts, tag, h, param, continuationMarker2, state);
      } else {
        return tag.next;
      }
    }
    var endTagRe = {};
    function parseText(parts, tag, h, param, continuationMarker2, state) {
      var end = parts.length;
      if (!endTagRe.hasOwnProperty(tag.name)) {
        endTagRe[tag.name] = new RegExp("^" + tag.name + "(?:[\\s\\/]|$)", "i");
      }
      var re = endTagRe[tag.name];
      var first = tag.next;
      var p = tag.next + 1;
      for (; p < end; p++) {
        if (parts[p - 1] === "</" && re.test(parts[p])) {
          break;
        }
      }
      if (p < end) {
        p -= 1;
      }
      var buf = parts.slice(first, p).join("");
      if (tag.eflags & html42.eflags["CDATA"]) {
        if (h.cdata) {
          h.cdata(buf, param, continuationMarker2, continuationMaker(h, parts, p, state, param));
        }
      } else if (tag.eflags & html42.eflags["RCDATA"]) {
        if (h.rcdata) {
          h.rcdata(normalizeRCData(buf), param, continuationMarker2, continuationMaker(h, parts, p, state, param));
        }
      } else {
        throw new Error("bug");
      }
      return p;
    }
    function parseTagAndAttrs(parts, pos) {
      var m = /^([-\w:]+)/.exec(parts[pos]);
      var tag = {};
      tag.name = m[1].toLowerCase();
      tag.eflags = html42.ELEMENTS[tag.name];
      var buf = parts[pos].substr(m[0].length);
      var p = pos + 1;
      var end = parts.length;
      for (; p < end; p++) {
        if (parts[p] === ">") {
          break;
        }
        buf += parts[p];
      }
      if (end <= p) {
        return void 0;
      }
      var attrs = [];
      while (buf !== "") {
        m = ATTR_RE.exec(buf);
        if (!m) {
          buf = buf.replace(/^[\s\S][^a-z\s]*/, "");
        } else if (m[4] && !m[5] || m[6] && !m[7]) {
          var quote = m[4] || m[6];
          var sawQuote = false;
          var abuf = [buf, parts[p++]];
          for (; p < end; p++) {
            if (sawQuote) {
              if (parts[p] === ">") {
                break;
              }
            } else if (0 <= parts[p].indexOf(quote)) {
              sawQuote = true;
            }
            abuf.push(parts[p]);
          }
          if (end <= p) {
            break;
          }
          buf = abuf.join("");
          continue;
        } else {
          var aName = m[1].toLowerCase();
          var aValue = m[2] ? decodeValue(m[3]) : "";
          attrs.push(aName, aValue);
          buf = buf.substr(m[0].length);
        }
      }
      tag.attrs = attrs;
      tag.next = p + 1;
      return tag;
    }
    function decodeValue(v) {
      var q = v.charCodeAt(0);
      if (q === 34 || q === 39) {
        v = v.substr(1, v.length - 2);
      }
      return unescapeEntities(stripNULs(v));
    }
    function makeHtmlSanitizer(tagPolicy) {
      var stack;
      var ignoring;
      var emit = function emit2(text, out) {
        if (!ignoring) {
          out.push(text);
        }
      };
      return makeSaxParser({
        "startDoc": function startDoc(_) {
          stack = [];
          ignoring = false;
        },
        "startTag": function startTag(tagNameOrig, attribs, out) {
          if (ignoring) {
            return;
          }
          if (!html42.ELEMENTS.hasOwnProperty(tagNameOrig)) {
            return;
          }
          var eflagsOrig = html42.ELEMENTS[tagNameOrig];
          if (eflagsOrig & html42.eflags["FOLDABLE"]) {
            return;
          }
          var decision = tagPolicy(tagNameOrig, attribs);
          if (!decision) {
            ignoring = !(eflagsOrig & html42.eflags["EMPTY"]);
            return;
          } else if (typeof decision !== "object") {
            throw new Error("tagPolicy did not return object (old API?)");
          }
          if ("attribs" in decision) {
            attribs = decision["attribs"];
          } else {
            throw new Error("tagPolicy gave no attribs");
          }
          var eflagsRep;
          var tagNameRep;
          if ("tagName" in decision) {
            tagNameRep = decision["tagName"];
            eflagsRep = html42.ELEMENTS[tagNameRep];
          } else {
            tagNameRep = tagNameOrig;
            eflagsRep = eflagsOrig;
          }
          if (eflagsOrig & html42.eflags["OPTIONAL_ENDTAG"]) {
            var onStack = stack[stack.length - 1];
            if (onStack && onStack.orig === tagNameOrig && (onStack.rep !== tagNameRep || tagNameOrig !== tagNameRep)) {
              out.push("</", onStack.rep, ">");
            }
          }
          if (!(eflagsOrig & html42.eflags["EMPTY"])) {
            stack.push({
              orig: tagNameOrig,
              rep: tagNameRep
            });
          }
          out.push("<", tagNameRep);
          for (var i = 0, n = attribs.length; i < n; i += 2) {
            var attribName = attribs[i], value = attribs[i + 1];
            if (value !== null && value !== void 0) {
              out.push(" ", attribName, '="', escapeAttrib(value), '"');
            }
          }
          out.push(">");
          if (eflagsOrig & html42.eflags["EMPTY"] && !(eflagsRep & html42.eflags["EMPTY"])) {
            out.push("</", tagNameRep, ">");
          }
        },
        "endTag": function endTag(tagName, out) {
          if (ignoring) {
            ignoring = false;
            return;
          }
          if (!html42.ELEMENTS.hasOwnProperty(tagName)) {
            return;
          }
          var eflags = html42.ELEMENTS[tagName];
          if (!(eflags & (html42.eflags["EMPTY"] | html42.eflags["FOLDABLE"]))) {
            var index;
            if (eflags & html42.eflags["OPTIONAL_ENDTAG"]) {
              for (index = stack.length; --index >= 0; ) {
                var stackElOrigTag = stack[index].orig;
                if (stackElOrigTag === tagName) {
                  break;
                }
                if (!(html42.ELEMENTS[stackElOrigTag] & html42.eflags["OPTIONAL_ENDTAG"])) {
                  return;
                }
              }
            } else {
              for (index = stack.length; --index >= 0; ) {
                if (stack[index].orig === tagName) {
                  break;
                }
              }
            }
            if (index < 0) {
              return;
            }
            for (var i = stack.length; --i > index; ) {
              var stackElRepTag = stack[i].rep;
              if (!(html42.ELEMENTS[stackElRepTag] & html42.eflags["OPTIONAL_ENDTAG"])) {
                out.push("</", stackElRepTag, ">");
              }
            }
            if (index < stack.length) {
              tagName = stack[index].rep;
            }
            stack.length = index;
            out.push("</", tagName, ">");
          }
        },
        "pcdata": emit,
        "rcdata": emit,
        "cdata": emit,
        "endDoc": function endDoc(out) {
          for (; stack.length; stack.length--) {
            out.push("</", stack[stack.length - 1].rep, ">");
          }
        }
      });
    }
    var ALLOWED_URI_SCHEMES = /^(?:https?|geo|mailto|sms|tel)$/i;
    function safeUri(uri, effect, ltype, hints, naiveUriRewriter) {
      if (!naiveUriRewriter) {
        return null;
      }
      try {
        var parsed = URI.parse("" + uri);
        if (parsed) {
          if (!parsed.hasScheme() || ALLOWED_URI_SCHEMES.test(parsed.getScheme())) {
            var safe = naiveUriRewriter(parsed, effect, ltype, hints);
            return safe ? safe.toString() : null;
          }
        }
      } catch (e) {
        return null;
      }
      return null;
    }
    function log(logger, tagName, attribName, oldValue, newValue) {
      if (!attribName) {
        logger(tagName + " removed", {
          change: "removed",
          tagName: tagName
        });
      }
      if (oldValue !== newValue) {
        var changed = "changed";
        if (oldValue && !newValue) {
          changed = "removed";
        } else if (!oldValue && newValue) {
          changed = "added";
        }
        logger(tagName + "." + attribName + " " + changed, {
          change: changed,
          tagName: tagName,
          attribName: attribName,
          oldValue: oldValue,
          newValue: newValue
        });
      }
    }
    function lookupAttribute(map2, tagName, attribName) {
      var attribKey;
      attribKey = tagName + "::" + attribName;
      if (map2.hasOwnProperty(attribKey)) {
        return map2[attribKey];
      }
      attribKey = "*::" + attribName;
      if (map2.hasOwnProperty(attribKey)) {
        return map2[attribKey];
      }
      return void 0;
    }
    function getAttributeType(tagName, attribName) {
      return lookupAttribute(html42.ATTRIBS, tagName, attribName);
    }
    function getLoaderType(tagName, attribName) {
      return lookupAttribute(html42.LOADERTYPES, tagName, attribName);
    }
    function getUriEffect(tagName, attribName) {
      return lookupAttribute(html42.URIEFFECTS, tagName, attribName);
    }
    function sanitizeAttribs(tagName, attribs, opt_naiveUriRewriter, opt_nmTokenPolicy, opt_logger) {
      for (var i = 0; i < attribs.length; i += 2) {
        var attribName = attribs[i];
        var value = attribs[i + 1];
        var oldValue = value;
        var atype = null, attribKey;
        if ((attribKey = tagName + "::" + attribName, html42.ATTRIBS.hasOwnProperty(attribKey)) || (attribKey = "*::" + attribName, html42.ATTRIBS.hasOwnProperty(attribKey))) {
          atype = html42.ATTRIBS[attribKey];
        }
        if (atype !== null) {
          switch (atype) {
            case html42.atype["NONE"]:
              break;
            case html42.atype["SCRIPT"]:
              value = null;
              if (opt_logger) {
                log(opt_logger, tagName, attribName, oldValue, value);
              }
              break;
            case html42.atype["STYLE"]:
              if (typeof parseCssDeclarations === "undefined") {
                value = null;
                if (opt_logger) {
                  log(opt_logger, tagName, attribName, oldValue, value);
                }
                break;
              }
              var sanitizedDeclarations = [];
              parseCssDeclarations(value, {
                "declaration": function declaration(property, tokens) {
                  var normProp = property.toLowerCase();
                  sanitizeCssProperty(normProp, tokens, opt_naiveUriRewriter ? function(url) {
                    return safeUri(url, html42.ueffects.SAME_DOCUMENT, html42.ltypes.SANDBOXED, {
                      "TYPE": "CSS",
                      "CSS_PROP": normProp
                    }, opt_naiveUriRewriter);
                  } : null);
                  if (tokens.length) {
                    sanitizedDeclarations.push(normProp + ": " + tokens.join(" "));
                  }
                }
              });
              value = sanitizedDeclarations.length > 0 ? sanitizedDeclarations.join(" ; ") : null;
              if (opt_logger) {
                log(opt_logger, tagName, attribName, oldValue, value);
              }
              break;
            case html42.atype["ID"]:
            case html42.atype["IDREF"]:
            case html42.atype["IDREFS"]:
            case html42.atype["GLOBAL_NAME"]:
            case html42.atype["LOCAL_NAME"]:
            case html42.atype["CLASSES"]:
              value = opt_nmTokenPolicy ? opt_nmTokenPolicy(value) : value;
              if (opt_logger) {
                log(opt_logger, tagName, attribName, oldValue, value);
              }
              break;
            case html42.atype["URI"]:
              value = safeUri(value, getUriEffect(tagName, attribName), getLoaderType(tagName, attribName), {
                "TYPE": "MARKUP",
                "XML_ATTR": attribName,
                "XML_TAG": tagName
              }, opt_naiveUriRewriter);
              if (opt_logger) {
                log(opt_logger, tagName, attribName, oldValue, value);
              }
              break;
            case html42.atype["URI_FRAGMENT"]:
              if (value && value.charAt(0) === "#") {
                value = value.substring(1);
                value = opt_nmTokenPolicy ? opt_nmTokenPolicy(value) : value;
                if (value !== null && value !== void 0) {
                  value = "#" + value;
                }
              } else {
                value = null;
              }
              if (opt_logger) {
                log(opt_logger, tagName, attribName, oldValue, value);
              }
              break;
            default:
              value = null;
              if (opt_logger) {
                log(opt_logger, tagName, attribName, oldValue, value);
              }
              break;
          }
        } else {
          value = null;
          if (opt_logger) {
            log(opt_logger, tagName, attribName, oldValue, value);
          }
        }
        attribs[i + 1] = value;
      }
      return attribs;
    }
    function makeTagPolicy(opt_naiveUriRewriter, opt_nmTokenPolicy, opt_logger) {
      return function(tagName, attribs) {
        if (!(html42.ELEMENTS[tagName] & html42.eflags["UNSAFE"])) {
          return {
            "attribs": sanitizeAttribs(tagName, attribs, opt_naiveUriRewriter, opt_nmTokenPolicy, opt_logger)
          };
        } else {
          if (opt_logger) {
            log(opt_logger, tagName, void 0, void 0, void 0);
          }
        }
      };
    }
    function sanitizeWithPolicy(inputHtml, tagPolicy) {
      var outputArray = [];
      makeHtmlSanitizer(tagPolicy)(inputHtml, outputArray);
      return outputArray.join("");
    }
    function sanitize(inputHtml, opt_naiveUriRewriter, opt_nmTokenPolicy, opt_logger) {
      var tagPolicy = makeTagPolicy(opt_naiveUriRewriter, opt_nmTokenPolicy, opt_logger);
      return sanitizeWithPolicy(inputHtml, tagPolicy);
    }
    var html2 = {};
    html2.escapeAttrib = html2["escapeAttrib"] = escapeAttrib;
    html2.makeHtmlSanitizer = html2["makeHtmlSanitizer"] = makeHtmlSanitizer;
    html2.makeSaxParser = html2["makeSaxParser"] = makeSaxParser;
    html2.makeTagPolicy = html2["makeTagPolicy"] = makeTagPolicy;
    html2.normalizeRCData = html2["normalizeRCData"] = normalizeRCData;
    html2.sanitize = html2["sanitize"] = sanitize;
    html2.sanitizeAttribs = html2["sanitizeAttribs"] = sanitizeAttribs;
    html2.sanitizeWithPolicy = html2["sanitizeWithPolicy"] = sanitizeWithPolicy;
    html2.unescapeEntities = html2["unescapeEntities"] = unescapeEntities;
    return html2;
  }(html4);
  var html_sanitize = html["sanitize"];
  if (typeof window !== "undefined") {
  }
  var htmlSanitizer = html;

  // src/sanitizer.js
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
  var TAG2 = "sanitizer";
  var SELF_CLOSING_TAGS = dict({
    "br": true,
    "col": true,
    "hr": true,
    "img": true,
    "input": true,
    "source": true,
    "track": true,
    "wbr": true,
    "area": true,
    "base": true,
    "command": true,
    "embed": true,
    "keygen": true,
    "link": true,
    "meta": true,
    "param": true
  });
  var ALLOWLISTED_ATTR_PREFIX_REGEX = /^(data-|aria-)|^role$/i;
  function sanitizeHtml(html2, doc) {
    var tagPolicy = htmlSanitizer.makeTagPolicy(function(parsed) {
      return parsed.getScheme() === "https" ? parsed : null;
    });
    var output = [];
    var ignore = 0;
    var emit = function emit2(content) {
      if (ignore == 0) {
        output.push(content);
      }
    };
    var cajaDenylistedTags = _extends({
      "script": true,
      "svg": true
    }, DENYLISTED_TAGS);
    var parser = htmlSanitizer.makeSaxParser({
      "startTag": function startTag(tagName, attribs) {
        if (ignore > 0) {
          if (!SELF_CLOSING_TAGS[tagName]) {
            ignore++;
          }
          return;
        }
        var isAmpElement = tagName.startsWith("amp-");
        var bindingAttribs = [];
        for (var i = 0; i < attribs.length; i += 2) {
          var attr = attribs[i];
          if (!attr) {
            continue;
          }
          var classicBinding = attr[0] == "[" && attr[attr.length - 1] == "]";
          var alternativeBinding = attr.startsWith(BIND_PREFIX);
          if (classicBinding) {
            attribs[i] = attr.slice(1, -1);
          }
          if (classicBinding || alternativeBinding) {
            bindingAttribs.push(i);
          }
        }
        if (cajaDenylistedTags[tagName]) {
          ignore++;
        } else if (isAmpElement) {
          if (isAmp4Email(doc) && !EMAIL_ALLOWLISTED_AMP_TAGS[tagName]) {
            ignore++;
          }
        } else {
          var savedAttribs = attribs.slice(0);
          var scrubbed = tagPolicy(tagName, attribs);
          if (!scrubbed) {
            ignore++;
          } else {
            attribs = scrubbed["attribs"];
            for (var _i = 0; _i < attribs.length; _i += 2) {
              var attrName = attribs[_i];
              if (ALLOWLISTED_ATTRS.includes(attrName)) {
                attribs[_i + 1] = savedAttribs[_i + 1];
              } else if (attrName.search(ALLOWLISTED_ATTR_PREFIX_REGEX) == 0) {
                attribs[_i + 1] = savedAttribs[_i + 1];
              } else if (ALLOWLISTED_ATTRS_BY_TAGS[tagName] && ALLOWLISTED_ATTRS_BY_TAGS[tagName].includes(attrName)) {
                attribs[_i + 1] = savedAttribs[_i + 1];
              }
            }
          }
          if (tagName == "a") {
            var index = -1;
            var hasHref = false;
            for (var _i2 = 0; _i2 < savedAttribs.length; _i2 += 2) {
              if (savedAttribs[_i2] == "target") {
                index = _i2 + 1;
              } else if (savedAttribs[_i2] == "href") {
                hasHref = attribs[_i2 + 1] != null;
              }
            }
            var origTarget = index != -1 ? savedAttribs[index] : null;
            if (origTarget != null) {
              origTarget = origTarget.toLowerCase();
              if (ALLOWLISTED_TARGETS.indexOf(origTarget) != -1) {
                attribs[index] = origTarget;
              } else {
                attribs[index] = "_top";
              }
            } else if (hasHref) {
              attribs.push("target", "_top");
            }
          }
        }
        if (ignore > 0) {
          if (SELF_CLOSING_TAGS[tagName]) {
            ignore--;
          }
          return;
        }
        var hasBindings = bindingAttribs.some(function(i2) {
          return !!attribs[i2 + 1];
        });
        if (hasBindings) {
          attribs.push("i-amphtml-binding", "");
        }
        emit("<");
        emit(tagName);
        for (var _i3 = 0; _i3 < attribs.length; _i3 += 2) {
          var _attrName = attribs[_i3];
          var attrValue = attribs[_i3 + 1];
          if (!isValidAttr(tagName, _attrName, attrValue, doc, false)) {
            user().error(TAG2, 'Removing "' + _attrName + '" attribute with invalid ' + ("value in <" + tagName + " " + _attrName + '="' + attrValue + '">.'));
            continue;
          }
          emit(" ");
          if (bindingAttribs.includes(_i3) && !_attrName.startsWith(BIND_PREFIX)) {
            emit("[" + _attrName + "]");
          } else {
            emit(_attrName);
          }
          emit('="');
          if (attrValue) {
            var rewrite = bindingAttribs.includes(_i3) ? attrValue : rewriteAttributeValue(tagName, _attrName, attrValue);
            emit(htmlSanitizer.escapeAttrib(rewrite));
          }
          emit('"');
        }
        emit(">");
      },
      "endTag": function endTag(tagName) {
        if (ignore > 0) {
          ignore--;
          return;
        }
        emit("</");
        emit(tagName);
        emit(">");
      },
      "pcdata": emit,
      "rcdata": emit,
      "cdata": emit
    });
    parser(html2);
    return output.join("");
  }
  function sanitizeTagsForTripleMustache(html2) {
    return htmlSanitizer.sanitizeWithPolicy(html2, tripleMustacheTagPolicy);
  }
  function tripleMustacheTagPolicy(tagName, attribs) {
    if (tagName == "template") {
      for (var i = 0; i < attribs.length; i += 2) {
        if (attribs[i] == "type" && attribs[i + 1] == "amp-mustache") {
          return {
            tagName: tagName,
            attribs: ["type", "amp-mustache"]
          };
        }
      }
    }
    if (!TRIPLE_MUSTACHE_ALLOWLISTED_TAGS.includes(tagName)) {
      return null;
    }
    return {
      tagName: tagName,
      attribs: attribs
    };
  }

  // third_party/mustache/mustache.js
  function mustacheFactory(mustache) {
    var objectToString = Object.prototype.toString;
    var isArray2 = Array.isArray || function isArrayPolyfill(object) {
      return objectToString.call(object) === "[object Array]";
    };
    function isFunction(object) {
      return typeof object === "function";
    }
    function typeStr(obj) {
      return isArray2(obj) ? "array" : typeof obj;
    }
    function escapeRegExp(string) {
      return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    }
    function hasProperty(obj, propName) {
      return obj != null && typeof obj === "object" && Object.prototype.hasOwnProperty.call(obj, propName);
    }
    var regExpTest = RegExp.prototype.test;
    function testRegExp(re, string) {
      return regExpTest.call(re, string);
    }
    var nonSpaceRe = /\S/;
    function isWhitespace(string) {
      return !testRegExp(nonSpaceRe, string);
    }
    var entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;"
    };
    function escapeHtml(string) {
      return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap(s) {
        return entityMap[s];
      });
    }
    var whiteRe = /\s*/;
    var spaceRe = /\s+/;
    var equalsRe = /\s*=/;
    var curlyRe = /\s*\}/;
    var tagRe = /#|\^|\/|>|\{|&|=|!/;
    function parseTemplate(template, tags) {
      if (!template)
        return [];
      var sections = [];
      var tokens = [];
      var spaces = [];
      var hasTag = false;
      var nonSpace = false;
      function stripSpace() {
        if (hasTag && !nonSpace) {
          while (spaces.length) {
            delete tokens[spaces.pop()];
          }
        } else {
          spaces = [];
        }
        hasTag = false;
        nonSpace = false;
      }
      var openingTagRe, closingTagRe, closingCurlyRe;
      function compileTags(tagsToCompile) {
        if (typeof tagsToCompile === "string")
          tagsToCompile = tagsToCompile.split(spaceRe, 2);
        if (!isArray2(tagsToCompile) || tagsToCompile.length !== 2)
          throw new Error("Invalid tags: " + tagsToCompile);
        openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + "\\s*");
        closingTagRe = new RegExp("\\s*" + escapeRegExp(tagsToCompile[1]));
        closingCurlyRe = new RegExp("\\s*" + escapeRegExp("}" + tagsToCompile[1]));
      }
      compileTags(tags || mustache.tags);
      var scanner = new Scanner(template);
      var start, type, value, chr, token, openSection;
      while (!scanner.eos()) {
        start = scanner.pos;
        value = scanner.scanUntil(openingTagRe);
        if (value) {
          for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
            chr = value.charAt(i);
            if (isWhitespace(chr)) {
              spaces.push(tokens.length);
            } else {
              nonSpace = true;
            }
            tokens.push(["text", chr, start, start + 1]);
            start += 1;
            if (chr === "\n")
              stripSpace();
          }
        }
        if (!scanner.scan(openingTagRe))
          break;
        hasTag = true;
        type = scanner.scan(tagRe) || "name";
        scanner.scan(whiteRe);
        if (type === "=") {
          value = scanner.scanUntil(equalsRe);
          scanner.scan(equalsRe);
          scanner.scanUntil(closingTagRe);
        } else if (type === "{") {
          value = scanner.scanUntil(closingCurlyRe);
          scanner.scan(curlyRe);
          scanner.scanUntil(closingTagRe);
          type = "&";
        } else {
          value = scanner.scanUntil(closingTagRe);
        }
        if (!scanner.scan(closingTagRe))
          throw new Error("Unclosed tag at " + scanner.pos);
        token = [type, value, start, scanner.pos];
        tokens.push(token);
        if (type === "#" || type === "^") {
          sections.push(token);
        } else if (type === "/") {
          openSection = sections.pop();
          if (!openSection)
            throw new Error('Unopened section "' + value + '" at ' + start);
          if (openSection[1] !== value)
            throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
        } else if (type === "name" || type === "{" || type === "&") {
          nonSpace = true;
        }
      }
      openSection = sections.pop();
      if (openSection)
        throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
      return nestTokens(squashTokens(tokens));
    }
    function squashTokens(tokens) {
      var squashedTokens = [];
      var token, lastToken;
      for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
        token = tokens[i];
        if (token) {
          if (token[0] === "text" && lastToken && lastToken[0] === "text") {
            lastToken[1] += token[1];
            lastToken[3] = token[3];
          } else {
            squashedTokens.push(token);
            lastToken = token;
          }
        }
      }
      return squashedTokens;
    }
    function nestTokens(tokens) {
      var nestedTokens = [];
      var collector = nestedTokens;
      var sections = [];
      var token, section;
      for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
        token = tokens[i];
        switch (token[0]) {
          case "#":
          case "^":
            collector.push(token);
            sections.push(token);
            collector = token[4] = [];
            break;
          case "/":
            section = sections.pop();
            section[5] = token[2];
            collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
            break;
          default:
            collector.push(token);
        }
      }
      return nestedTokens;
    }
    function Scanner(string) {
      this.string = string;
      this.tail = string;
      this.pos = 0;
    }
    Scanner.prototype.eos = function eos() {
      return this.tail === "";
    };
    Scanner.prototype.scan = function scan(re) {
      var match = this.tail.match(re);
      if (!match || match.index !== 0)
        return "";
      var string = match[0];
      this.tail = this.tail.substring(string.length);
      this.pos += string.length;
      return string;
    };
    Scanner.prototype.scanUntil = function scanUntil(re) {
      var index = this.tail.search(re), match;
      switch (index) {
        case -1:
          match = this.tail;
          this.tail = "";
          break;
        case 0:
          match = "";
          break;
        default:
          match = this.tail.substring(0, index);
          this.tail = this.tail.substring(index);
      }
      this.pos += match.length;
      return match;
    };
    function Context(view, parentContext) {
      this.view = view;
      this.cache = {
        ".": this.view
      };
      this.parent = parentContext;
    }
    Context.prototype.push = function push(view) {
      return new Context(view, this);
    };
    Context.prototype.lookup = function lookup(name) {
      var cache = this.cache;
      var value;
      if (cache.hasOwnProperty(name)) {
        value = cache[name];
      } else {
        var context = this, names, index, lookupHit = false;
        while (context) {
          if (name.indexOf(".") > 0) {
            value = context.view;
            names = name.split(".");
            index = 0;
            while (value != null && index < names.length) {
              if (!hasProperty(value, names[index])) {
                value = null;
                break;
              }
              if (index === names.length - 1)
                lookupHit = true;
              value = value[names[index++]];
            }
          } else {
            if (!hasProperty(context.view, name)) {
              value = null;
            } else {
              value = context.view[name];
              lookupHit = true;
            }
          }
          if (lookupHit)
            break;
          context = context.parent;
        }
        cache[name] = value;
      }
      if (isFunction(value))
        value = value.call(this.view);
      return value;
    };
    function Writer() {
      this.cache = {};
    }
    Writer.prototype.clearCache = function clearCache() {
      this.cache = {};
    };
    Writer.prototype.parse = function parse(template, tags) {
      var cache = this.cache;
      var tokens = cache[template];
      if (tokens == null)
        tokens = cache[template] = parseTemplate(template, tags);
      return tokens;
    };
    Writer.prototype.render = function render(template, view, partials) {
      var tokens = this.parse(template);
      var context = view instanceof Context ? view : new Context(view);
      return this.renderTokens(tokens, context, partials, template);
    };
    Writer.prototype.renderTokens = function renderTokens(tokens, context, partials, originalTemplate) {
      var buffer = "";
      var token, symbol, value;
      for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
        value = void 0;
        token = tokens[i];
        symbol = token[0];
        if (symbol === "#")
          value = this.renderSection(token, context, partials, originalTemplate);
        else if (symbol === "^")
          value = this.renderInverted(token, context, partials, originalTemplate);
        else if (symbol === ">")
          value = this.renderPartial(token, context, partials, originalTemplate);
        else if (symbol === "&")
          value = this.unescapedValue(token, context);
        else if (symbol === "name")
          value = this.escapedValue(token, context);
        else if (symbol === "text")
          value = this.rawValue(token);
        if (value !== void 0)
          buffer += value;
      }
      return buffer;
    };
    Writer.prototype.renderSection = function renderSection(token, context, partials, originalTemplate) {
      var self2 = this;
      var buffer = "";
      var value = context.lookup(token[1]);
      function subRender(template) {
        return self2.render(template, context, partials);
      }
      if (!value)
        return;
      if (isArray2(value)) {
        for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
          buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
        }
      } else if (typeof value === "object" || typeof value === "string" || typeof value === "number") {
        buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
      } else if (isFunction(value)) {
        if (typeof originalTemplate !== "string")
          throw new Error("Cannot use higher-order sections without the original template");
        value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);
        if (value != null)
          buffer += value;
      } else {
        buffer += this.renderTokens(token[4], context, partials, originalTemplate);
      }
      return buffer;
    };
    Writer.prototype.renderInverted = function renderInverted(token, context, partials, originalTemplate) {
      var value = context.lookup(token[1]);
      if (!value || isArray2(value) && value.length === 0)
        return this.renderTokens(token[4], context, partials, originalTemplate);
    };
    Writer.prototype.renderPartial = function renderPartial(token, context, partials) {
      if (!partials)
        return;
      var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
      if (value != null)
        return this.renderTokens(this.parse(value), context, partials, value);
    };
    Writer.prototype.unescapedValue = function unescapedValue(token, context) {
      var value = context.lookup(token[1]);
      if (value != null) {
        if (mustache.sanitizeUnescaped) {
          return mustache.sanitizeUnescaped(value);
        }
        return value;
      }
    };
    Writer.prototype.escapedValue = function escapedValue(token, context) {
      var value = context.lookup(token[1]);
      if (value != null)
        return mustache.escape(value);
    };
    Writer.prototype.rawValue = function rawValue(token) {
      return token[1];
    };
    mustache.name = "mustache.js";
    mustache.version = "2.2.0";
    mustache.tags = ["{{", "}}"];
    var defaultWriter = new Writer();
    mustache.clearCache = function clearCache() {
      return defaultWriter.clearCache();
    };
    mustache.parse = function parse(template, tags) {
      return defaultWriter.parse(template, tags);
    };
    mustache.render = function render(template, view, partials) {
      if (typeof template !== "string") {
        throw new TypeError('Invalid template! Template should be a "string" but "' + typeStr(template) + '" was given as the first argument for mustache#render(template, view, partials)');
      }
      return defaultWriter.render(template, view, partials);
    };
    mustache.to_html = function to_html(template, view, partials, send) {
      var result = mustache.render(template, view, partials);
      if (isFunction(send)) {
        send(result);
      } else {
        return result;
      }
    };
    mustache.escape = escapeHtml;
    mustache.sanitizeUnescaped = null;
    mustache.setUnescapedSanitizer = function setUnescapedSanitizer(sanitizeUnescaped) {
      mustache.sanitizeUnescaped = sanitizeUnescaped;
    };
    mustache.Scanner = Scanner;
    mustache.Context = Context;
    mustache.Writer = Writer;
  }
  var Mustache = {};
  mustacheFactory(Mustache);
  var mustache_default = Mustache;

  // extensions/amp-mustache/0.1/amp-mustache.js
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
  var TAG3 = "amp-mustache";
  var AmpMustache = /* @__PURE__ */ function(_BaseTemplate) {
    _inherits(AmpMustache2, _BaseTemplate);
    var _super = _createSuper(AmpMustache2);
    function AmpMustache2(element, win) {
      var _this;
      _this = _super.call(this, element, win);
      mustache_default.setUnescapedSanitizer(sanitizeTagsForTripleMustache);
      user().warn(TAG3, 'The extension "amp-mustache-0.1.js" is deprecated. Please use a more recent version of this extension.');
      return _this;
    }
    var _proto = AmpMustache2.prototype;
    _proto.compileCallback = function compileCallback() {
      if (this.viewerCanRenderTemplates()) {
        return;
      }
      this.nestedTemplates_ = dict();
      this.template_ = this.initTemplateString_();
      mustache_default.parse(this.template_, void 0);
    };
    _proto.initTemplateString_ = function initTemplateString_() {
      if (this.element.tagName == "TEMPLATE") {
        var content = templateContentClone(this.element);
        this.processNestedTemplates_(content);
        var container = this.element.ownerDocument.createElement("div");
        container.appendChild(content);
        return container.innerHTML;
      }
      if (this.element.tagName == "SCRIPT") {
        return this.element.textContent;
      }
      return "";
    };
    _proto.processNestedTemplates_ = function processNestedTemplates_(content) {
      var _this2 = this;
      var templates = content.querySelectorAll("template");
      iterateCursor(templates, function(nestedTemplate, index) {
        var nestedTemplateKey = "__AMP_NESTED_TEMPLATE_" + index;
        _this2.nestedTemplates_[nestedTemplateKey] = nestedTemplate.outerHTML;
        var nestedTemplateAsVariable = _this2.element.ownerDocument.createTextNode("{{{" + nestedTemplateKey + "}}}");
        nestedTemplate.parentNode.replaceChild(nestedTemplateAsVariable, nestedTemplate);
      });
    };
    _proto.setHtml = function setHtml(html2) {
      var wrapped = "<div>" + html2 + "</div>";
      var serialized = this.serializeHtml_(wrapped);
      return this.unwrapChildren(serialized);
    };
    _proto.render = function render(data) {
      var html2 = this.render_(data);
      return this.serializeHtml_(html2);
    };
    _proto.renderAsString = function renderAsString(data) {
      var html2 = this.render_(data);
      return sanitizeHtml(html2, this.win.document);
    };
    _proto.render_ = function render_(data) {
      var mustacheData = data;
      if (typeof data === "object") {
        mustacheData = _extends2({}, data, this.nestedTemplates_);
      }
      return mustache_default.render(this.template_, mustacheData, void 0);
    };
    _proto.serializeHtml_ = function serializeHtml_(html2) {
      var doc = this.win.document;
      var root = doc.createElement("div");
      var sanitized = sanitizeHtml(html2, doc);
      root.innerHTML = sanitized;
      return this.tryUnwrap(root);
    };
    return AmpMustache2;
  }(BaseTemplate);
  AMP.registerTemplate(TAG3, AmpMustache);
})();
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-mustache-0.1.max.js.map
