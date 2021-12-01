(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-playbuzz",ev:"0.1",l:true,f:(function(AMP,_){
(function() {
  // build/amp-playbuzz-0.1.css.js
  var CSS2 = ".pb-overflow[overflow]{width:100%;height:150px;position:absolute;bottom:0;text-align:center;background:linear-gradient(180deg,hsla(0,0%,100%,0) 0%,#fff 75%)}.pb-overflow button{width:140px;height:37px;position:absolute;bottom:0;left:50%;margin-left:-70px;border-radius:4px;background-color:#fff;border:1px solid #009cff;color:#009cff;font-weight:700;font-family:Helvetica,Roboto,Arial,sans-serif;cursor:pointer}.pb-arrow-down{height:8px;margin-left:10px}.pb_feed_placeholder_container{width:100%;height:100%}.pb_feed_placeholder_container{direction:ltr}.pb_feed_placeholder_inner{position:relative;width:100%;height:100%;margin:auto}.pb_feed_placeholder_content{width:100%;height:100%;background-color:#f2f2f2;border-radius:5px}.pb_feed_placeholder_preloader{position:absolute;top:47%;left:50%;width:29px;height:38px;margin-top:-36px;margin-left:-15px;overflow:hidden;box-sizing:border-box}@media screen and (max-width:568px){.pb_feed_placeholder_preloader{top:46%}}@media screen and (min-width:569px) and (max-width:992px){.pb_feed_placeholder_preloader{top:48%}}.pb_feed_anim_mask{position:absolute;width:30px;top:0;left:0}.pb_feed_loading_text{position:absolute;font-family:arial;font-size:11px;color:#aaa;text-align:center;width:100%;top:51%;direction:ltr}\n/*# sourceURL=/extensions/amp-playbuzz/0.1/amp-playbuzz.css*/";

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
  function removeItem(array, item) {
    var index = array.indexOf(item);
    if (index == -1) {
      return false;
    }
    array.splice(index, 1);
    return true;
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
  function removeElement(element) {
    var _element$parentElemen;
    (_element$parentElemen = element.parentElement) == null ? void 0 : _element$parentElemen.removeChild(element);
  }
  function isIframed(win) {
    return win.parent && win.parent != win;
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
  function applyFillContent(element, opt_replacedContent) {
    element.classList.add("i-amphtml-fill-content");
    if (opt_replacedContent) {
      element.classList.add("i-amphtml-replaced-content");
    }
  }

  // src/core/dom/layout/viewport-observer.js
  function createViewportObserver(ioCallback2, win, opts) {
    if (opts === void 0) {
      opts = {};
    }
    var _opts = opts, needsRootBounds = _opts.needsRootBounds, threshold = _opts.threshold;
    var root = isIframed(win) && needsRootBounds ? win.document : void 0;
    return new win.IntersectionObserver(ioCallback2, {
      threshold: threshold,
      root: root
    });
  }
  var viewportObservers = new WeakMap();
  var viewportCallbacks = new WeakMap();
  function observeIntersections(element, callback) {
    var win = getWin(element);
    var viewportObserver = viewportObservers.get(win);
    if (!viewportObserver) {
      viewportObservers.set(win, viewportObserver = createViewportObserver(ioCallback, win));
    }
    var callbacks = viewportCallbacks.get(element);
    if (!callbacks) {
      callbacks = [];
      viewportCallbacks.set(element, callbacks);
    }
    callbacks.push(callback);
    viewportObserver.observe(element);
    return function() {
      unobserveIntersections(element, callback);
    };
  }
  function unobserveIntersections(element, callback) {
    var callbacks = viewportCallbacks.get(element);
    if (!callbacks) {
      return;
    }
    if (!removeItem(callbacks, callback)) {
      return;
    }
    if (callbacks.length) {
      return;
    }
    var win = getWin(element);
    var viewportObserver = viewportObservers.get(win);
    viewportObserver == null ? void 0 : viewportObserver.unobserve(element);
    viewportCallbacks.delete(element);
  }
  function ioCallback(entries) {
    var seen = new Set();
    for (var i = entries.length - 1; i >= 0; i--) {
      var entry = entries[i];
      var target = entry.target;
      if (seen.has(target)) {
        continue;
      }
      seen.add(target);
      var callbacks = viewportCallbacks.get(target);
      if (!callbacks) {
        continue;
      }
      for (var k = 0; k < callbacks.length; k++) {
        var callback = callbacks[k];
        callback(entry);
      }
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
  function rethrowAsync(var_args) {
    var error = createError.apply(null, arguments);
    setTimeout(function() {
      maybeReportError(error);
      throw error;
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

  // src/utils/event-helper.js
  function listen(element, eventType, listener, opt_evtListenerOpts) {
    return internalListenImplementation(element, eventType, listener, opt_evtListenerOpts);
  }
  function getData(event) {
    return event.data;
  }

  // extensions/amp-playbuzz/0.1/images.js
  var logo = "data:image/png;base64,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";
  var showMoreArrow = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAYAAAAMJL+VAAAAm0lEQVR4AZ3ORxXCABBF0VGBAfYooaOEXp2kxwOKwg4D9E/vLS9zzt/eN3Y7V/3DEvNUtqznqXXYzALV7elcTQ7TZatMEV+9B2N9MBqPn+tpnpbXCMWfIoFKx0BymH5GOH7d1E6Iq9XfCMfnFqlgh+MRhJvxCMZJhOMosuH4l8hhy3eE4zzCcR7hOI9wHEYoDiIA5xcqb7FyBm4P6hrNHZK+MqYAAAAASUVORK5CYII=";

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
  function urlEncodeKeyValue(key, value) {
    return encodeURIComponent(key) + "=" + encodeURIComponent(value);
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
    userAssert2(/^https?\:/i.test(urlString), 'URL must start with "http://" or "https://". Invalid value: %s', urlString);
    return parseUrlDeprecated(urlString).href;
  }
  function removeFragment(url) {
    var index = url.indexOf("#");
    if (index == -1) {
      return url;
    }
    return url.substring(0, index);
  }

  // extensions/amp-playbuzz/0.1/utils.js
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var _this = this;
      var args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        timeout = null;
        if (!immediate) {
          func.apply(_this, args);
        }
      }, wait);
      if (immediate && !timeout) {
        func.apply(this, args);
      }
    };
  }
  function getElementCreator(document) {
    return function createElement(name, className, children) {
      var element = document.createElement(name);
      element.className = className;
      appendChildren(element, children);
      return element;
    };
  }
  function appendChildren(element, children) {
    children = !children ? [] : Array.isArray(children) ? children : [children];
    children.forEach(function(child) {
      return element.appendChild(child);
    });
  }
  function handleMessageByName(element, event, messageName, handler) {
    var isMessageFromElement = element.contentWindow === event.source;
    if (isMessageFromElement) {
      handlePlaybuzzItemEvent(event, messageName, handler);
    }
  }
  function handlePlaybuzzItemEvent(event, eventName, handler) {
    var data = parsePlaybuzzEventData(getData(event));
    if (data[eventName]) {
      handler(data[eventName]);
    }
  }
  function parsePlaybuzzEventData(data) {
    if (typeof data === "object") {
      return data;
    }
    var err = "error parsing json message from playbuzz item: " + data;
    try {
      if (typeof data === "string") {
        return parseJson(data);
      }
    } catch (e) {
      rethrowAsync("amp-playbuzz", err, e);
      return dict({});
    }
    rethrowAsync("amp-playbuzz", err, data);
    return dict({});
  }
  function composeEmbedUrl(options) {
    var embedUrl = options.itemUrl + "?" + serializeQueryString(dict({
      "feed": true,
      "implementation": "amp",
      "src": options.itemUrl,
      "embedBy": "00000000-0000-0000-0000-000000000000",
      "game": options.relativeUrl,
      "comments": void 0,
      "useComments": options.displayComments,
      "gameInfo": options.displayItemInfo,
      "useShares": options.displayShareBar,
      "socialReferrer": false,
      "height": "auto",
      "parentUrl": options.parentUrl,
      "parentHost": options.parentHost
    }));
    return embedUrl;
  }
  function sanitizeUrl(localtion) {
    var url = removeFragment(localtion.href).replace(localtion.protocol, "");
    return url.replace(/(www\.)?playbuzz\.com/, "app.ex.co/stories");
  }
  function composeItemSrcUrl(src, itemId) {
    var DEFAULT_BASE_URL = "//app.ex.co/stories/";
    var iframeSrcUrl = itemId ? DEFAULT_BASE_URL + "item/" + itemId : sanitizeUrl(parseUrlDeprecated(src));
    return iframeSrcUrl;
  }

  // extensions/amp-playbuzz/0.1/amp-playbuzz.js
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
  var AmpPlaybuzz = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpPlaybuzz2, _AMP$BaseElement);
    var _super = _createSuper(AmpPlaybuzz2);
    function AmpPlaybuzz2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.iframe_ = null;
      _this.iframePromise_ = null;
      _this.itemHeight_ = 300;
      _this.displayItemInfo_ = false;
      _this.displayShareBar_ = false;
      _this.displayComments_ = false;
      _this.iframeLoaded_ = false;
      _this.inViewport_ = false;
      _this.unlisteners_ = [];
      _this.iframeSrcUrl_ = "";
      _this.unobserveIntersections_ = null;
      return _this;
    }
    var _proto = AmpPlaybuzz2.prototype;
    _proto.preconnectCallback = function preconnectCallback() {
      Services.preconnectFor(this.win).url(this.getAmpDoc(), this.iframeSrcUrl_);
    };
    _proto.renderOutsideViewport = function renderOutsideViewport() {
      return false;
    };
    _proto.buildCallback = function buildCallback() {
      var e = this.element;
      var src = e.getAttribute("src");
      var itemId = e.getAttribute("data-item");
      userAssert2(src || itemId, "Either src or data-item attribute is required for <amp-playbuzz> %s", this.element);
      if (src) {
        assertAbsoluteHttpOrHttpsUrl(src);
      }
      var parsedHeight = parseInt(e.getAttribute("height"), 10);
      this.iframeSrcUrl_ = composeItemSrcUrl(src, itemId);
      this.itemHeight_ = isNaN(parsedHeight) ? this.itemHeight_ : parsedHeight;
      this.displayItemInfo_ = e.getAttribute("data-item-info") === "true";
      this.displayShareBar_ = e.getAttribute("data-share-buttons") === "true";
      this.displayComments_ = e.getAttribute("data-comments") === "true";
    };
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return layout === Layout_Enum.RESPONSIVE || layout === Layout_Enum.FIXED_HEIGHT;
    };
    _proto.createPlaceholderCallback = function createPlaceholderCallback() {
      var placeholder = this.win.document.createElement("div");
      if (this.element.hasAttribute("aria-label")) {
        placeholder.setAttribute("aria-label", "Loading - " + this.element.getAttribute("aria-label"));
      } else {
        placeholder.setAttribute("aria-label", "Loading interactive element");
      }
      placeholder.setAttribute("placeholder", "");
      placeholder.appendChild(this.createPlaybuzzLoader_());
      return placeholder;
    };
    _proto.notifyIframe_ = function notifyIframe_(eventData) {
      var data = JSON.stringify(eventData);
      this.iframe_.contentWindow.postMessage(data, "*");
    };
    _proto.getOverflowElement_ = function getOverflowElement_() {
      var createElement = getElementCreator(this.element.ownerDocument);
      var overflow = createElement("div", "pb-overflow");
      overflow.setAttribute("overflow", "");
      var overflowButton = createElement("button");
      overflowButton.textContent = "Show More";
      var arrow = createElement("img", "pb-arrow-down");
      arrow.src = showMoreArrow;
      overflowButton.appendChild(arrow);
      overflow.appendChild(overflowButton);
      return overflow;
    };
    _proto.layoutCallback = function layoutCallback() {
      var _this2 = this;
      this.unobserveIntersections_ = observeIntersections(this.element, function(_ref) {
        var isIntersecting = _ref.isIntersecting;
        return _this2.inViewport_ = isIntersecting;
      });
      var iframe = this.element.ownerDocument.createElement("iframe");
      this.iframe_ = iframe;
      iframe.setAttribute("scrolling", "no");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowtransparency", "true");
      iframe.setAttribute("allowfullscreen", "true");
      iframe.src = this.generateEmbedSourceUrl_();
      this.listenToPlaybuzzItemMessage_("resize_height", debounce(this.itemHeightChanged_.bind(this), 100));
      this.element.appendChild(this.getOverflowElement_());
      applyFillContent(iframe);
      this.element.appendChild(iframe);
      return this.iframePromise_ = this.loadPromise(iframe).then(function() {
        _this2.iframeLoaded_ = true;
        _this2.attemptChangeHeight(dev().assertNumber(_this2.itemHeight_)).catch(function() {
        });
        var unlisten = _this2.getViewport().onChanged(_this2.sendScrollDataToItem_.bind(_this2));
        _this2.unlisteners_.push(unlisten);
      });
    };
    _proto.createPlaybuzzLoader_ = function createPlaybuzzLoader_() {
      var doc = this.element.ownerDocument;
      var createElement = getElementCreator(doc);
      var loaderImage = createElement("img", "pb_feed_anim_mask");
      loaderImage.src = logo;
      var loadingPlaceholder = createElement("div", "pb_feed_placeholder_container", createElement("div", "pb_feed_placeholder_inner", createElement("div", "pb_feed_placeholder_content", createElement("div", "pb_feed_placeholder_preloader", loaderImage))));
      return loadingPlaceholder;
    };
    _proto.itemHeightChanged_ = function itemHeightChanged_(height) {
      if (isNaN(height) || height === this.itemHeight_) {
        return;
      }
      this.itemHeight_ = height;
      if (this.iframeLoaded_) {
        this.attemptChangeHeight(this.itemHeight_).catch(function() {
        });
      }
    };
    _proto.listenToPlaybuzzItemMessage_ = function listenToPlaybuzzItemMessage_(messageName, handler) {
      var _this3 = this;
      var unlisten = listen(this.win, "message", function(event) {
        return handleMessageByName(_this3.iframe_, event, messageName, handler);
      });
      this.unlisteners_.push(unlisten);
    };
    _proto.generateEmbedSourceUrl_ = function generateEmbedSourceUrl_() {
      var _Services$documentInf = Services.documentInfoForDoc(this.element), canonicalUrl = _Services$documentInf.canonicalUrl;
      var parsedPageUrl = parseUrlDeprecated(canonicalUrl);
      var params = {
        itemUrl: this.iframeSrcUrl_,
        relativeUrl: parseUrlDeprecated(this.iframeSrcUrl_).pathname,
        displayItemInfo: this.displayItemInfo_,
        displayShareBar: this.displayShareBar_,
        displayComments: this.displayComments_,
        parentUrl: removeFragment(parsedPageUrl.href),
        parentHost: parsedPageUrl.host
      };
      var embedUrl = composeEmbedUrl(params);
      return embedUrl;
    };
    _proto.sendScrollDataToItem_ = function sendScrollDataToItem_(changeEvent) {
      if (!this.inViewport_) {
        return;
      }
      var scrollingData = dict({
        "event": "scroll",
        "windowHeight": changeEvent.height,
        "scroll": changeEvent.top,
        "offsetTop": this.getLayoutBox().top
      });
      this.notifyIframe_(scrollingData);
    };
    _proto.unlayoutOnPause = function unlayoutOnPause() {
      return true;
    };
    _proto.unlayoutCallback = function unlayoutCallback() {
      var _this$unobserveInters;
      (_this$unobserveInters = this.unobserveIntersections_) == null ? void 0 : _this$unobserveInters.call(this);
      this.unobserveIntersections_ = null;
      this.unlisteners_.forEach(function(unlisten) {
        return unlisten();
      });
      this.unlisteners_.length = 0;
      if (this.iframe_) {
        removeElement(this.iframe_);
        this.iframe_ = null;
        this.iframePromise_ = null;
      }
      return true;
    };
    return AmpPlaybuzz2;
  }(AMP.BaseElement);
  AMP.registerElement("amp-playbuzz", AmpPlaybuzz, CSS2);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-playbuzz-0.1.max.js.map
