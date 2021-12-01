(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-pinterest",ev:"0.1",l:true,f:(function(AMP,_){
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

  // src/core/types/string/index.js
  function endsWith(string, suffix) {
    var index = string.length - suffix.length;
    return index >= 0 && string.indexOf(suffix, index) == index;
  }
  function includes(string, substring, start) {
    if (typeof start !== "number") {
      start = 0;
    }
    if (start + substring.length > string.length) {
      return false;
    }
    return string.indexOf(substring, start) !== -1;
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
  function isLayoutSizeDefined(layout) {
    return layout == Layout_Enum.FIXED || layout == Layout_Enum.FIXED_HEIGHT || layout == Layout_Enum.RESPONSIVE || layout == Layout_Enum.FILL || layout == Layout_Enum.FLEX_ITEM || layout == Layout_Enum.FLUID || layout == Layout_Enum.INTRINSIC;
  }

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
  function isIframed(win) {
    return win.parent && win.parent != win;
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
  function userAssert2(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
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
  function tryResolve(fn) {
    return new Promise(function(resolve) {
      resolve(fn());
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

  // extensions/amp-pinterest/0.1/util.js
  var BASE60 = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ_abcdefghijkmnopqrstuvwxyz";
  var guid = "";
  for (i = 0; i < 12; i = i + 1) {
    guid = guid + BASE60.substr(Math.floor(Math.random() * 60), 1);
  }
  var i;
  function log(queryParams) {
    var call = new Image();
    var query = "https://log.pinterest.com/?guid=" + guid;
    query = query + "&amp=1";
    if (queryParams) {
      query = query + queryParams;
    }
    query = query + "&via=" + encodeURIComponent(window.location.href);
    call.src = query;
  }
  function filter(str) {
    try {
      return new DOMParser().parseFromString(str, "text/html").body.textContent;
    } catch (e) {
      return str;
    }
  }
  function make(doc, data) {
    var el = null, tag, attr;
    for (tag in data) {
      el = doc.createElement(tag);
      for (attr in data[tag]) {
        if (typeof data[tag][attr] === "string") {
          set(el, attr, data[tag][attr]);
        }
      }
      break;
    }
    return el;
  }
  function set(el, attr, value) {
    if (typeof el[attr] === "string") {
      el[attr] = value;
    } else {
      el.setAttribute(attr, value);
    }
  }
  var Util = {
    filter: filter,
    guid: guid,
    log: log,
    make: make,
    set: set
  };

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
  function isSecureUrlDeprecated(url) {
    url = urlAsLocation(url);
    return url.protocol == "https:" || url.hostname == "localhost" || url.hostname == "127.0.0.1" || endsWith(url.hostname, ".localhost");
  }
  function assertHttpsUrl(urlString, elementContext, sourceName) {
    if (sourceName === void 0) {
      sourceName = "source";
    }
    userAssert2(urlString != null, "%s %s must be available", elementContext, sourceName);
    userAssert2(isSecureUrlDeprecated(urlString) || /^\/\//.test(urlString), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', elementContext, sourceName, urlString);
    return urlString;
  }
  function assertAbsoluteHttpOrHttpsUrl(urlString) {
    userAssert2(/^https?\:/i.test(urlString), 'URL must start with "http://" or "https://". Invalid value: %s', urlString);
    return parseUrlDeprecated(urlString).href;
  }

  // extensions/amp-pinterest/0.1/follow-button.js
  var POP_FOLLOW = "status=no,resizable=yes,scrollbars=yes,\n  personalbar=no,directories=no,location=no,toolbar=no,\n  menubar=no,width=1040,height=640,left=0,top=0";
  var FollowButton = /* @__PURE__ */ function() {
    function FollowButton2(rootElement) {
      userAssert2(rootElement.getAttribute("data-href"), "The data-href attribute is required for follow buttons");
      userAssert2(rootElement.getAttribute("data-label"), "The data-label attribute is required for follow buttons");
      this.element = rootElement;
      this.label = rootElement.getAttribute("data-label");
      this.href = assertHttpsUrl(rootElement.getAttribute("data-href"), rootElement);
    }
    var _proto = FollowButton2.prototype;
    _proto.handleClick = function handleClick(event) {
      event.preventDefault();
      openWindowDialog(window, this.href, "pin" + Date.now(), POP_FOLLOW);
      Util.log("&type=button_follow&href=" + this.href);
    };
    _proto.renderTemplate = function renderTemplate() {
      var followButton = Util.make(this.element.ownerDocument, {
        "a": {
          class: "-amp-pinterest-follow-button",
          href: this.href,
          textContent: this.label
        }
      });
      followButton.appendChild(Util.make(this.element.ownerDocument, {
        "i": {}
      }));
      followButton.onclick = this.handleClick.bind(this);
      return followButton;
    };
    _proto.render = function render() {
      var _this = this;
      if (this.href.substr(-1) !== "/") {
        this.href += "/";
      }
      this.href += "pins/follow/?guid=" + Util.guid;
      return tryResolve(function() {
        return _this.renderTemplate();
      });
    };
    _proto.height = function height() {
      return Promise.resolve(null);
    };
    return FollowButton2;
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

  // src/core/dom/layout/viewport-observer.js
  function createViewportObserver(ioCallback, win, opts) {
    if (opts === void 0) {
      opts = {};
    }
    var _opts = opts, needsRootBounds = _opts.needsRootBounds, threshold = _opts.threshold;
    var root = isIframed(win) && needsRootBounds ? win.document : void 0;
    return new win.IntersectionObserver(ioCallback, {
      threshold: threshold,
      root: root
    });
  }
  var viewportObservers = new WeakMap();
  var viewportCallbacks = new WeakMap();

  // src/core/dom/layout/intersection.js
  var intersectionDeferreds;
  var intersectionObservers;
  function getInOb(win) {
    if (!intersectionDeferreds) {
      intersectionDeferreds = new WeakMap();
      intersectionObservers = new WeakMap();
    }
    var observer = intersectionObservers.get(win);
    if (!observer) {
      observer = createViewportObserver(function(entries) {
        var seen = new Set();
        for (var i = entries.length - 1; i >= 0; i--) {
          var target = entries[i].target;
          if (seen.has(target)) {
            continue;
          }
          seen.add(target);
          observer.unobserve(target);
          intersectionDeferreds.get(target).resolve(entries[i]);
          intersectionDeferreds.delete(target);
        }
      }, win, {
        needsRootBounds: true
      });
      intersectionObservers.set(win, observer);
    }
    return observer;
  }
  function measureIntersection(el) {
    if (intersectionDeferreds && intersectionDeferreds.has(el)) {
      return intersectionDeferreds.get(el).promise;
    }
    var inOb = getInOb(getWin(el));
    inOb.observe(el);
    var deferred = new Deferred();
    intersectionDeferreds.set(el, deferred);
    return deferred.promise;
  }

  // extensions/amp-pinterest/0.1/pin-widget.js
  var POP = "status=no,resizable=yes,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,width=900,height=500,left=0,top=0";
  var EMBED_PIN_PADDING = 10;
  var PinWidget = /* @__PURE__ */ function() {
    function PinWidget2(rootElement) {
      userAssert2(rootElement.getAttribute("data-url"), "The data-url attribute is required for Pin widgets");
      this.element = rootElement;
      this.xhr = Services.xhrFor(getWin(rootElement));
      this.pinId = "";
      this.alt = "";
      this.pinUrl = "";
      this.width = "";
      this.layout = "";
      this.heightOwnerElement_ = null;
    }
    var _proto = PinWidget2.prototype;
    _proto.handleKeyDown = function handleKeyDown(event) {
      if (event.key == Keys_Enum.ENTER || event.key == Keys_Enum.SPACE) {
        this.handleClick(event);
      }
    };
    _proto.handleClick = function handleClick(event) {
      event.preventDefault();
      var el = event.target;
      var shouldPop = el.getAttribute("data-pin-pop") || false;
      var href = el.getAttribute("data-pin-href");
      var log2 = el.getAttribute("data-pin-log");
      if (href) {
        assertAbsoluteHttpOrHttpsUrl(href);
        if (shouldPop) {
          openWindowDialog(window, href, "_pinit", POP);
        } else {
          openWindowDialog(window, href + "?amp=1&guid=" + Util.guid, "_blank");
        }
      }
      if (log2) {
        Util.log("&type=" + log2);
      }
    };
    _proto.fetchPin = function fetchPin() {
      var baseUrl = "https://widgets.pinterest.com/v3/pidgets/pins/info/?";
      var query = "pin_ids=" + this.pinId + "&sub=www&base_scheme=https";
      return this.xhr.fetchJson(baseUrl + query, {}).then(function(res) {
        return res.json();
      }).then(function(json) {
        try {
          return json["data"][0];
        } catch (e) {
          return null;
        }
      });
    };
    _proto.renderPin = function renderPin(pin) {
      var className = "-amp-pinterest-embed-pin";
      var imgUrl = assertHttpsUrl(pin["images"]["237x"]["url"], this.element);
      if (this.width === "medium" || this.width === "large") {
        className = className + "-medium";
        imgUrl = imgUrl.replace(/237/, "345");
        Util.log("&type=pidget&pin_count_medium=1");
      } else {
        Util.log("&type=pidget&pin_count=1");
      }
      if (this.layout === "responsive") {
        className += " -amp-pinterest-embed-pin-responsive";
      }
      var structure = Util.make(this.element.ownerDocument, {
        "span": {}
      });
      structure.className = className + " i-amphtml-fill-content";
      this.heightOwnerElement_ = Util.make(this.element.ownerDocument, {
        "span": {
          "className": "-amp-pinterest-embed-pin-inner",
          "data-pin-log": "embed_pin"
        }
      });
      if (!this.alt && pin["attribution"]) {
        this.alt = pin["attribution"]["title"];
      }
      var img = Util.make(this.element.ownerDocument, {
        "img": {
          "src": imgUrl,
          "className": "-amp-pinterest-embed-pin-image",
          "data-pin-no-hover": true,
          "data-pin-href": "https://www.pinterest.com/pin/" + pin["id"] + "/",
          "data-pin-log": "embed_pin_img",
          "alt": this.alt
        }
      });
      this.heightOwnerElement_.appendChild(img);
      var repin = Util.make(this.element.ownerDocument, {
        "span": {
          "className": "-amp-pinterest-rect -amp-pinterest-en-red -amp-pinterest-embed-pin-repin -amp-pinterest-save-button-tall",
          "data-pin-log": "embed_pin_repin",
          "data-pin-pop": "1",
          "data-pin-href": "https://www.pinterest.com/pin/" + pin["id"] + "/repin/x/?amp=1&guid=" + Util.guid,
          "textContent": "Save",
          "role": "button",
          "aria-label": "Repin this image: " + this.alt,
          "tabindex": "0"
        }
      });
      this.heightOwnerElement_.appendChild(repin);
      var text = Util.make(this.element.ownerDocument, {
        "span": {
          "className": "-amp-pinterest-embed-pin-text"
        }
      });
      if (pin["description"]) {
        var description = Util.make(this.element.ownerDocument, {
          "span": {
            "className": "-amp-pinterest-embed-pin-text-block -amp-pinterest-embed-pin-description",
            "textContent": Util.filter(pin["description"])
          }
        });
        text.appendChild(description);
      }
      if (pin["attribution"]) {
        var attribution = Util.make(this.element.ownerDocument, {
          "span": {
            "className": "-amp-pinterest-embed-pin-text-block -amp-pinterest-embed-pin-attribution"
          }
        });
        attribution.appendChild(Util.make(this.element.ownerDocument, {
          "img": {
            "className": "-amp-pinterest-embed-pin-text-icon-attrib",
            "src": pin["attribution"]["provider_icon_url"],
            "alt": "from " + pin["attribution"]["provider_name"]
          }
        }));
        attribution.appendChild(Util.make(this.element.ownerDocument, {
          "span": {
            "textContent": " by "
          }
        }));
        attribution.appendChild(Util.make(this.element.ownerDocument, {
          "span": {
            "data-pin-href": pin["attribution"]["url"],
            "textContent": Util.filter(pin["attribution"]["author_name"])
          }
        }));
        text.appendChild(attribution);
      }
      if (pin["repin_count"] || pin["like_count"]) {
        var stats = Util.make(this.element.ownerDocument, {
          "span": {
            "className": "-amp-pinterest-embed-pin-text-block -amp-pinterest-embed-pin-stats"
          }
        });
        if (pin["repin_count"]) {
          var repinCount = Util.make(this.element.ownerDocument, {
            "span": {
              "className": "-amp-pinterest-embed-pin-stats-repins",
              "textContent": String(pin["repin_count"])
            }
          });
          stats.appendChild(repinCount);
        }
        if (pin["like_count"]) {
          var likeCount = Util.make(this.element.ownerDocument, {
            "span": {
              "className": "-amp-pinterest-embed-pin-stats-likes",
              "textContent": String(pin["like_count"])
            }
          });
          stats.appendChild(likeCount);
        }
        text.appendChild(stats);
      }
      if (pin["pinner"]) {
        var pinner = Util.make(this.element.ownerDocument, {
          "span": {
            "className": "-amp-pinterest-embed-pin-text-block -amp-pinterest-embed-pin-pinner"
          }
        });
        pinner.appendChild(Util.make(this.element.ownerDocument, {
          "img": {
            "className": "-amp-pinterest-embed-pin-pinner-avatar",
            "alt": Util.filter(pin["pinner"]["full_name"]),
            "title": Util.filter(pin["pinner"]["full_name"]),
            "src": pin["pinner"]["image_small_url"],
            "data-pin-href": pin["pinner"]["profile_url"]
          }
        }));
        pinner.appendChild(Util.make(this.element.ownerDocument, {
          "span": {
            "className": "-amp-pinterest-embed-pin-pinner-name",
            "textContent": Util.filter(pin["pinner"]["full_name"]),
            "data-pin-href": pin["pinner"]["profile_url"]
          }
        }));
        pinner.appendChild(Util.make(this.element.ownerDocument, {
          "span": {
            "className": "-amp-pinterest-embed-pin-board-name",
            "textContent": Util.filter(pin["board"]["name"]),
            "data-pin-href": "https://www.pinterest.com/" + pin["board"]["url"]
          }
        }));
        text.appendChild(pinner);
      }
      this.heightOwnerElement_.appendChild(text);
      structure.appendChild(this.heightOwnerElement_);
      structure.addEventListener("click", this.handleClick.bind(this));
      structure.addEventListener("keypress", this.handleKeyDown.bind(this));
      return structure;
    };
    _proto.render = function render() {
      this.pinUrl = this.element.getAttribute("data-url");
      this.width = this.element.getAttribute("data-width");
      this.layout = this.element.getAttribute("layout");
      this.alt = this.element.getAttribute("alt");
      this.pinId = "";
      try {
        this.pinId = this.pinUrl.split("/pin/")[1].split("/")[0];
      } catch (err) {
        return Promise.reject(user().createError("Invalid pinterest url: %s", this.pinUrl));
      }
      return this.fetchPin().then(this.renderPin.bind(this));
    };
    _proto.height = function height() {
      return measureIntersection(this.heightOwnerElement_).then(function(entry) {
        return entry.boundingClientRect.height + EMBED_PIN_PADDING;
      });
    };
    return PinWidget2;
  }();

  // extensions/amp-pinterest/0.1/save-button.js
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
  var POP2 = "status=no,resizable=yes,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,width=900,height=500,left=0,top=0";
  var SaveButton = /* @__PURE__ */ function() {
    function SaveButton2(rootElement) {
      userAssert2(rootElement.getAttribute("data-url"), "The data-url attribute is required for Save buttons");
      userAssert2(rootElement.getAttribute("data-media"), "The data-media attribute is required for Save buttons");
      userAssert2(rootElement.getAttribute("data-description"), "The data-description attribute is required for Save buttons");
      this.element = rootElement;
      this.xhr = Services.xhrFor(getWin(rootElement));
      this.color = rootElement.getAttribute("data-color");
      this.count = rootElement.getAttribute("data-count");
      this.lang = rootElement.getAttribute("data-lang");
      var hasOneToOneDimensions = rootElement.hasAttribute("height") && rootElement.hasAttribute("width") && rootElement.getAttribute("height") === rootElement.getAttribute("width");
      this.round = rootElement.getAttribute("data-round") || hasOneToOneDimensions;
      this.tall = rootElement.getAttribute("data-tall");
      this.description = rootElement.getAttribute("data-description");
      this.media = null;
      this.url = null;
      this.href = null;
    }
    var _proto = SaveButton2.prototype;
    _proto.handleClick = function handleClick(event) {
      event.preventDefault();
      openWindowDialog(window, dev().assertString(this.href), "_pinit", POP2);
      Util.log("&type=button_pinit");
    };
    _proto.fetchCount = function fetchCount() {
      var url = "https://widgets.pinterest.com/v1/urls/count.json?return_jsonp=false&url=" + this.url;
      return this.xhr.fetchJson(url, {}).then(function(res) {
        return res.json();
      });
    };
    _proto.formatPinCount = function formatPinCount(count) {
      if (count > 999) {
        if (count < 1e6) {
          count = parseInt(count / 1e3, 10) + "K+";
        } else {
          if (count < 1e9) {
            count = parseInt(count / 1e6, 10) + "M+";
          } else {
            count = "++";
          }
        }
      }
      return String(count);
    };
    _proto.renderCount = function renderCount(count, heightClass) {
      Util.log("&type=pidget&button_count=1");
      return Util.make(this.element.ownerDocument, {
        "span": {
          class: "-amp-pinterest-bubble-" + this.count + heightClass,
          textContent: this.formatPinCount(count)
        }
      });
    };
    _proto.renderTemplate = function renderTemplate(count) {
      var CLASS = {
        shape: this.round ? "-round" : "",
        height: this.tall ? "-tall" : "",
        lang: this.lang === "ja" ? "-ja" : "-en",
        color: ["gray", "white"].indexOf(this.color) !== -1 ? this.color : "red"
      };
      var clazz = ["-amp-pinterest" + CLASS.shape + CLASS.height, "i-amphtml-fill-content"];
      var countBubble = null;
      if (!this.round) {
        clazz.push("-amp-pinterest-save-button" + CLASS.height);
        clazz.push("-amp-pinterest" + CLASS.lang + "-" + CLASS.color + CLASS.height);
        if (count) {
          clazz.push("-amp-pinterest-count-pad-" + this.count + CLASS.height);
          countBubble = this.renderCount(count["count"], CLASS.height);
        }
      }
      var text = this.lang === "ja" ? "\u4FDD\u5B58" : "Save";
      var textContent = this.round ? "" : text;
      var saveButton = Util.make(this.element.ownerDocument, {
        "a": _extends({
          class: clazz.join(" "),
          href: this.href,
          textContent: textContent
        }, !textContent && {
          "aria-label": text
        })
      });
      if (countBubble) {
        saveButton.appendChild(countBubble);
      }
      saveButton.onclick = this.handleClick.bind(this);
      return saveButton;
    };
    _proto.render = function render() {
      this.description = encodeURIComponent(this.description);
      this.media = encodeURIComponent(this.element.getAttribute("data-media"));
      this.url = encodeURIComponent(this.element.getAttribute("data-url"));
      var query = ["amp=1", "guid=" + Util.guid, "url=" + this.url, "media=" + this.media, "description=" + this.description].join("&");
      this.href = "https://www.pinterest.com/pin/create/button/?" + query;
      var promise;
      if (this.count === "above" || this.count === "beside") {
        promise = this.fetchCount();
      } else {
        promise = resolvedPromise();
      }
      return promise.then(this.renderTemplate.bind(this));
    };
    _proto.height = function height() {
      return Promise.resolve(null);
    };
    return SaveButton2;
  }();

  // build/amp-pinterest-0.1.css.js
  var CSS2 = ".-amp-pinterest-round{background-size:16px 16px;height:16px;width:16px}.-amp-pinterest-round,.-amp-pinterest-round-tall{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='30' width='30' viewBox='-1 -1 31 31'%3E%3Cpath d='M29.449 14.662c0 8.06-6.581 14.594-14.699 14.594-8.118 0-14.699-6.534-14.699-14.594C.051 6.601 6.632.067 14.75.067c8.118 0 14.699 6.534 14.699 14.595' fill='%23fff' stroke='%23fff'/%3E%3Cpath d='M14.733 1.686c-7.217 0-13.068 5.809-13.068 12.976 0 5.497 3.444 10.192 8.305 12.082-.114-1.026-.217-2.601.046-3.722.237-1.012 1.532-6.45 1.532-6.45s-.391-.777-.391-1.926c0-1.804 1.054-3.151 2.365-3.151 1.115 0 1.653.831 1.653 1.828 0 1.113-.713 2.777-1.082 4.32-.308 1.292.652 2.345 1.935 2.345 2.323 0 4.108-2.432 4.108-5.942 0-3.107-2.248-5.279-5.458-5.279-3.719 0-5.901 2.769-5.901 5.631 0 1.115.433 2.311.972 2.961a.385.385 0 0 1 .091.372c-.099.41-.32 1.292-.363 1.472-.057.237-.189.288-.437.173-1.632-.754-2.653-3.124-2.653-5.027 0-4.093 2.996-7.852 8.635-7.852 4.533 0 8.056 3.208 8.056 7.494 0 4.472-2.839 8.071-6.781 8.071-1.324 0-2.569-.683-2.995-1.49 0 0-.655 2.478-.814 3.085-.295 1.127-1.092 2.539-1.625 3.401 1.223.376 2.523.579 3.87.579 7.217 0 13.068-5.809 13.068-12.975 0-7.167-5.851-12.976-13.068-12.976' fill='%23e60023'/%3E%3C/svg%3E\")}.-amp-pinterest-round-tall{background-size:32px 32px;height:32px;width:32px}.-amp-pinterest-rect{height:20px;width:40px;background:url() 0 -20px no-repeat;background-size:40px 60px}.-amp-pinterest-rect:active{background-position:0 -40px}.-amp-pinterest-save-button{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='30' width='30' viewBox='-1 -1 31 31'%3E%3Cpath d='M29.449 14.662c0 8.06-6.581 14.594-14.699 14.594-8.118 0-14.699-6.534-14.699-14.594C.051 6.601 6.632.067 14.75.067c8.118 0 14.699 6.534 14.699 14.595' fill='%23fff' stroke='%23fff'/%3E%3Cpath d='M14.733 1.686c-7.217 0-13.068 5.809-13.068 12.976 0 5.497 3.444 10.192 8.305 12.082-.114-1.026-.217-2.601.046-3.722.237-1.012 1.532-6.45 1.532-6.45s-.391-.777-.391-1.926c0-1.804 1.054-3.151 2.365-3.151 1.115 0 1.653.831 1.653 1.828 0 1.113-.713 2.777-1.082 4.32-.308 1.292.652 2.345 1.935 2.345 2.323 0 4.108-2.432 4.108-5.942 0-3.107-2.248-5.279-5.458-5.279-3.719 0-5.901 2.769-5.901 5.631 0 1.115.433 2.311.972 2.961a.385.385 0 0 1 .091.372c-.099.41-.32 1.292-.363 1.472-.057.237-.189.288-.437.173-1.632-.754-2.653-3.124-2.653-5.027 0-4.093 2.996-7.852 8.635-7.852 4.533 0 8.056 3.208 8.056 7.494 0 4.472-2.839 8.071-6.781 8.071-1.324 0-2.569-.683-2.995-1.49 0 0-.655 2.478-.814 3.085-.295 1.127-1.092 2.539-1.625 3.401 1.223.376 2.523.579 3.87.579 7.217 0 13.068-5.809 13.068-12.975 0-7.167-5.851-12.976-13.068-12.976' fill='%23e60023'/%3E%3C/svg%3E\") 3px 5px no-repeat;background-size:10px 10px;border-radius:2px;font:9px/20px Helvetica Neue,Helvetica,sans-serif;font-weight:700;max-height:20px;max-width:40px;min-height:20px;min-width:40px;text-indent:16px;text-decoration:none;-webkit-font-smoothing:antialiased}.-amp-pinterest-save-button-tall{background:#e60023 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='30' width='30' viewBox='-1 -1 31 31'%3E%3Cpath d='M29.449 14.662c0 8.06-6.581 14.594-14.699 14.594-8.118 0-14.699-6.534-14.699-14.594C.051 6.601 6.632.067 14.75.067c8.118 0 14.699 6.534 14.699 14.595' fill='%23fff' stroke='%23fff'/%3E%3Cpath d='M14.733 1.686c-7.217 0-13.068 5.809-13.068 12.976 0 5.497 3.444 10.192 8.305 12.082-.114-1.026-.217-2.601.046-3.722.237-1.012 1.532-6.45 1.532-6.45s-.391-.777-.391-1.926c0-1.804 1.054-3.151 2.365-3.151 1.115 0 1.653.831 1.653 1.828 0 1.113-.713 2.777-1.082 4.32-.308 1.292.652 2.345 1.935 2.345 2.323 0 4.108-2.432 4.108-5.942 0-3.107-2.248-5.279-5.458-5.279-3.719 0-5.901 2.769-5.901 5.631 0 1.115.433 2.311.972 2.961a.385.385 0 0 1 .091.372c-.099.41-.32 1.292-.363 1.472-.057.237-.189.288-.437.173-1.632-.754-2.653-3.124-2.653-5.027 0-4.093 2.996-7.852 8.635-7.852 4.533 0 8.056 3.208 8.056 7.494 0 4.472-2.839 8.071-6.781 8.071-1.324 0-2.569-.683-2.995-1.49 0 0-.655 2.478-.814 3.085-.295 1.127-1.092 2.539-1.625 3.401 1.223.376 2.523.579 3.87.579 7.217 0 13.068-5.809 13.068-12.975 0-7.167-5.851-12.976-13.068-12.976' fill='%23e60023'/%3E%3C/svg%3E\") 3px 6px no-repeat;background-position-x:4px;background-size:15px 15px;border-radius:4px;max-height:28px;max-width:56px;min-height:28px;min-width:56px;text-indent:23px;text-decoration:none;font:12px/28px Helvetica Neue,Helvetica,Arial,\"sans-serif\";font-weight:700;-webkit-font-smoothing:antialiased}.-amp-pinterest-en-gray,.-amp-pinterest-en-gray-tall,.-amp-pinterest-ja-gray,.-amp-pinterest-ja-gray-tall{color:#555;background-color:#efefef}.-amp-pinterest-en-red,.-amp-pinterest-en-red-tall,.-amp-pinterest-ja-red,.-amp-pinterest-ja-red-tall{color:#fff;background-color:#e60023}.-amp-pinterest-en-white,.-amp-pinterest-en-white-tall,.-amp-pinterest-ja-white,.-amp-pinterest-ja-white-tall{color:#e60023;background-color:#fff;box-sizing:border-box;box-shadow:inset 0 0 1px #e60023}.-amp-pinterest-rect-tall{height:28px;width:56px;background:url() 0 -28px no-repeat;background-size:56px 84px}.-amp-pinterest-rect-tall:active{background-position:0 -56px}.-amp-pinterest-count-pad-above{margin-top:26px}.-amp-pinterest-count-pad-above-tall{margin-top:40px}.-amp-pinterest-bubble-above{position:absolute;left:0;text-align:center;text-decoration:none;text-indent:0;color:#555;top:-26px;height:20px;width:40px;background:#efefef;background-size:40px 20px;border-radius:4px;line-height:20px}.-amp-pinterest-bubble-above:after{border-top:7px solid #efefef;border-right:7px solid transparent;border-left:7px solid transparent;bottom:-4px;left:4px;content:\"\";position:absolute}.-amp-pinterest-bubble-above-tall{position:absolute;left:0;text-align:center;text-decoration:none;color:#555;top:-40px;bottom:29px;height:34px;width:56px;background:#efefef;border-radius:4px;text-indent:0;line-height:34px}.-amp-pinterest-bubble-above-tall:after{border-top:7px solid #efefef;border-right:7px solid transparent;border-left:7px solid transparent;bottom:-4px;left:7px;content:\"\";position:absolute}.-amp-pinterest-count-pad-beside{margin-left:0;width:86px}.-amp-pinterest-count-pad-beside-tall{margin-left:0;width:120px}.-amp-pinterest-bubble-beside{position:absolute;top:0;right:-46px;height:20px;width:40px;text-align:center;text-indent:0;text-decoration:none;color:#555;background:#efefef;background-size:40px 20px;border-radius:4px;line-height:20px}.-amp-pinterest-bubble-beside:before{top:3px;left:-4px;border-right:7px solid #efefef;border-top:7px solid transparent;border-bottom:7px solid transparent;content:\"\";position:absolute}.-amp-pinterest-bubble-beside-tall{position:absolute;top:0;right:-62px;height:28px;width:56px;text-align:center;text-indent:0;text-decoration:none;color:#555;background:#efefef;background-size:56px 28px;border-radius:4px;line-height:28px}.-amp-pinterest-bubble-beside-tall:before{top:7px;left:-4px;border-right:7px solid #efefef;border-top:7px solid transparent;border-bottom:7px solid transparent;content:\"\";position:absolute}.-amp-pinterest-follow-button{background-color:#efefef;background-size:200px 60px;border-radius:3px;box-sizing:border-box;box-shadow:inset 0 0 1px #888;color:#363636;cursor:pointer;display:inline-block;font:700 normal normal 11px/20px Helvetica Neue,helvetica,arial,san-serif;height:20px;padding:0 4px 0 20px;position:relative;text-decoration:none;vertical-align:baseline}.-amp-pinterest-follow-button i{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='30' width='30' viewBox='-1 -1 31 31'%3E%3Cpath d='M29.449 14.662c0 8.06-6.581 14.594-14.699 14.594-8.118 0-14.699-6.534-14.699-14.594C.051 6.601 6.632.067 14.75.067c8.118 0 14.699 6.534 14.699 14.595' fill='%23fff' stroke='%23fff'/%3E%3Cpath d='M14.733 1.686c-7.217 0-13.068 5.809-13.068 12.976 0 5.497 3.444 10.192 8.305 12.082-.114-1.026-.217-2.601.046-3.722.237-1.012 1.532-6.45 1.532-6.45s-.391-.777-.391-1.926c0-1.804 1.054-3.151 2.365-3.151 1.115 0 1.653.831 1.653 1.828 0 1.113-.713 2.777-1.082 4.32-.308 1.292.652 2.345 1.935 2.345 2.323 0 4.108-2.432 4.108-5.942 0-3.107-2.248-5.279-5.458-5.279-3.719 0-5.901 2.769-5.901 5.631 0 1.115.433 2.311.972 2.961a.385.385 0 0 1 .091.372c-.099.41-.32 1.292-.363 1.472-.057.237-.189.288-.437.173-1.632-.754-2.653-3.124-2.653-5.027 0-4.093 2.996-7.852 8.635-7.852 4.533 0 8.056 3.208 8.056 7.494 0 4.472-2.839 8.071-6.781 8.071-1.324 0-2.569-.683-2.995-1.49 0 0-.655 2.478-.814 3.085-.295 1.127-1.092 2.539-1.625 3.401 1.223.376 2.523.579 3.87.579 7.217 0 13.068-5.809 13.068-12.975 0-7.167-5.851-12.976-13.068-12.976' fill='%23e60023'/%3E%3C/svg%3E\");background-size:14px 14px;height:14px;left:3px;position:absolute;top:3px;width:14px}.-amp-pinterest-embed-pin,.-amp-pinterest-embed-pin-medium{box-sizing:border-box;padding:5px;width:237px}.-amp-pinterest-embed-pin-medium{width:345px}.-amp-pinterest-embed-pin-responsive{width:100%}.-amp-pinterest-embed-pin-responsive .-amp-pinterest-embed-pin-image{max-width:100%}.-amp-pinterest-embed-pin-inner{display:block;position:relative;-webkit-font-smoothing:antialiased;cursor:pointer;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.33);border-radius:3px;width:100%}.-amp-pinterest-embed-pin-text{color:#a8a8a8;white-space:normal;font-family:Helvetica Neue,arial,sans-serif;font-size:11px;line-height:18px;font-weight:700}.-amp-pinterest-embed-pin-image{border-radius:3px 3px 0 0}.-amp-pinterest-embed-pin-text-block{display:block;line-height:30px;padding:0 12px}.-amp-pinterest-embed-pin-text-icon-attrib{height:16px;width:16px;vertical-align:middle}.-amp-pinterest-embed-pin-stats{height:16px;line-height:16px;padding:8px 12px}.-amp-pinterest-embed-pin-stats-likes{padding-left:14px;background:transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAAAAAClR+AmAAAAUElEQVR4AT2HMQpFIQwEc/+zbXhFLBW8QUihIAT2E8Q/xe6M0Jv2zK7NKUcBzAlAjzjqtdZl4c8S2nOjMPS6BoWMr/wLVnAbYJs3mGMkXzx+OeRqUf5HHRoAAAAASUVORK5CYII=) 0 2px no-repeat}.-amp-pinterest-embed-pin-stats-repins{padding:0 10px 0 18px;background:transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALCAAAAABq7uO+AAAASklEQVQI10WNMQrAMBRCvf/Z3pQcImPplsIPdqhNXOSJqLxVtnWQsuUO9IM3cHlV8dSSDZQHAOPH2YA2FU+qtH7MRhaVh/xt/PQCEW6N4EV+CPEAAAAASUVORK5CYII=) 0 0 no-repeat}.-amp-pinterest-embed-pin-description{color:#363636;font-weight:400;font-size:14px;line-height:17px;padding-top:5px}.-amp-pinterest-embed-pin-pinner{padding:12px;border-top:1px solid rgba(0,0,0,.09)}.-amp-pinterest-embed-pin-pinner-avatar{border-radius:15px;border:none;height:30px;width:30px;vertical-align:middle;margin:0 8px 12px 0;float:left}.-amp-pinterest-embed-pin-board-name,.-amp-pinterest-embed-pin-pinner-name{display:block;height:15px;line-height:15px}.-amp-pinterest-embed-pin-pinner-name{color:#777}.-amp-pinterest-embed-pin-repin{border-radius:4px;position:absolute;top:12px;left:12px;cursor:pointer}\n/*# sourceURL=/extensions/amp-pinterest/0.1/amp-pinterest.css*/";

  // extensions/amp-pinterest/0.1/amp-pinterest.js
  var _templateObject;
  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
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
  var AmpPinterest = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpPinterest2, _AMP$BaseElement);
    var _super = _createSuper(AmpPinterest2);
    AmpPinterest2.createLoaderLogoCallback = function createLoaderLogoCallback(element) {
      var type = element.getAttribute("data-do");
      if (type != "embedPin") {
        return {};
      }
      var html2 = htmlFor(element);
      return {
        color: "#E60019",
        content: html2(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(['\n        <svg viewBox="0 0 72 72">\n          <path\n            fill="currentColor"\n            d="M36,26c-5.52,0-9.99,4.47-9.99,9.99c0,4.24,2.63,7.85,6.35,9.31c-0.09-0.79-0.16-2.01,0.03-2.87\n            c0.18-0.78,1.17-4.97,1.17-4.97s-0.3-0.6-0.3-1.48c0-1.39,0.81-2.43,1.81-2.43c0.86,0,1.27,0.64,1.27,1.41\n            c0,0.86-0.54,2.14-0.83,3.33c-0.24,1,0.5,1.81,1.48,1.81c1.78,0,3.14-1.88,3.14-4.57c0-2.39-1.72-4.06-4.18-4.06\n            c-2.85,0-4.51,2.13-4.51,4.33c0,0.86,0.33,1.78,0.74,2.28c0.08,0.1,0.09,0.19,0.07,0.29c-0.07,0.31-0.25,1-0.28,1.13\n            c-0.04,0.18-0.15,0.22-0.34,0.13c-1.25-0.58-2.03-2.4-2.03-3.87c0-3.15,2.29-6.04,6.6-6.04c3.46,0,6.16,2.47,6.16,5.77\n            c0,3.45-2.17,6.22-5.18,6.22c-1.01,0-1.97-0.53-2.29-1.15c0,0-0.5,1.91-0.62,2.38c-0.22,0.87-0.83,1.96-1.24,2.62\n            c0.94,0.29,1.92,0.44,2.96,0.44c5.52,0,9.99-4.47,9.99-9.99C45.99,30.47,41.52,26,36,26z"\n          ></path>\n        </svg>\n      '])))
      };
    };
    function AmpPinterest2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.type_ = "";
      _this.renderClass_ = null;
      return _this;
    }
    var _proto = AmpPinterest2.prototype;
    _proto.preconnectCallback = function preconnectCallback(onLayout) {
      Services.preconnectFor(this.win).url(this.getAmpDoc(), "https://widgets.pinterest.com", onLayout);
    };
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return isLayoutSizeDefined(layout);
    };
    _proto.buildCallback = function buildCallback() {
      this.type_ = userAssert2(this.element.getAttribute("data-do"), "The data-do attribute is required for <amp-pinterest> %s", this.element);
      switch (this.type_) {
        case "embedPin":
          this.renderClass_ = new PinWidget(this.element);
          break;
        case "buttonPin":
          this.renderClass_ = new SaveButton(this.element);
          break;
        case "buttonFollow":
          this.renderClass_ = new FollowButton(this.element);
          break;
        default:
          return Promise.reject(user().createError("Invalid type: %s", this.type_));
      }
    };
    _proto.layoutCallback = function layoutCallback() {
      var _this2 = this;
      return this.renderClass_.render().then(function(node) {
        return _this2.element.appendChild(node);
      });
    };
    _proto.firstLayoutCompleted = function firstLayoutCompleted() {
      var _this3 = this;
      this.renderClass_.height().then(function(renderedHeight) {
        if (renderedHeight !== null) {
          _this3.attemptChangeHeight(renderedHeight);
        }
      });
    };
    return AmpPinterest2;
  }(AMP.BaseElement);
  AMP.registerElement("amp-pinterest", AmpPinterest, CSS2);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-pinterest-0.1.max.js.map
