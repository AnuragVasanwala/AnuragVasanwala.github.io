(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-loader",ev:"0.1",l:true,f:(function(AMP,_){
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
  var videoPlayerTagNameRe = /^amp\-(video|.+player)|AMP-BRIGHTCOVE|AMP-DAILYMOTION|AMP-YOUTUBE|AMP-VIMEO|AMP-IMA-VIDEO/i;
  function isIframeVideoPlayerComponent(tagName) {
    if (tagName == "AMP-VIDEO") {
      return false;
    }
    return videoPlayerTagNameRe.test(tagName);
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
  function setImportantStyles(element, styles) {
    var style = element.style;
    for (var k in styles) {
      style.setProperty(getVendorJsPropertyName(style, k), String(styles[k]), "important");
    }
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
  function isVar(property) {
    return property.startsWith("--");
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

  // build/amp-loader-0.1.css.js
  var CSS2 = ".i-amphtml-loader-background{position:absolute;top:0;left:0;bottom:0;right:0;background-color:#f8f8f8}.i-amphtml-new-loader{display:inline-block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:0;height:0;color:#aaa}.i-amphtml-new-loader-size-default,.i-amphtml-new-loader-size-small{width:72px;height:72px}.i-amphtml-new-loader-logo{transform-origin:center;opacity:0;animation:i-amphtml-new-loader-scale-and-fade-in 0.8s ease-in forwards;animation-delay:0.6s;animation-delay:calc(0.6s - var(--loader-delay-offset))}.i-amphtml-new-loader-size-small .i-amphtml-new-loader-logo{display:none}.i-amphtml-new-loader-logo-default{fill:currentColor;animation:i-amphtml-new-loader-fade-out 0.8s ease-out forwards;animation-delay:1.8s;animation-delay:calc(1.8s - var(--loader-delay-offset))}.i-amphtml-new-loader-has-shim{color:#fff!important}.i-amphtml-new-loader-shim{width:72px;height:72px;border-radius:50%;display:none;transform-origin:center;opacity:0;background-color:rgba(0,0,0,0.6);animation:i-amphtml-new-loader-scale-and-fade-in 0.8s ease-in forwards;animation-delay:0.6s;animation-delay:calc(0.6s - var(--loader-delay-offset))}.i-amphtml-new-loader-size-small .i-amphtml-new-loader-shim{width:48px;height:48px;margin:12px}.i-amphtml-new-loader-has-shim .i-amphtml-new-loader-shim{display:initial}.i-amphtml-new-loader-has-shim .i-amphtml-new-loader-logo-default{display:none}.i-amphtml-new-loader-has-shim .i-amphtml-new-loader-transparent-on-shim{fill:transparent!important}.i-amphtml-new-loader-logo,.i-amphtml-new-loader-shim,.i-amphtml-new-loader-spinner-wrapper{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-new-loader-spinner-wrapper{margin:12px}.i-amphtml-new-loader-spinner{stroke:currentColor;stroke-width:1.5px;opacity:0;animation:i-amphtml-new-loader-fade-in 0.8s ease-in forwards;animation-delay:1.8s;animation-delay:calc(1.8s - var(--loader-delay-offset))}.i-amphtml-new-loader-spinner-path{animation:frame-position-first-spin 0.6s steps(30),frame-position-infinite-spin 1.2s steps(59) infinite;animation-delay:2.8s,3.4s;animation-delay:calc(2.8s - var(--loader-delay-offset)),calc(3.4s - var(--loader-delay-offset))}.i-amphtml-new-loader-size-small .i-amphtml-new-loader-spinner{transform:scale(0.54545);stroke-width:2.75px}.i-amphtml-new-loader-size-small .i-amphtml-new-loader-spinner-path{animation-delay:1.4s,2s;animation-delay:calc(1.4s - var(--loader-delay-offset)),calc(2s - var(--loader-delay-offset))}.i-amphtml-new-loader *{animation-play-state:paused}.amp-active>.i-amphtml-new-loader *{animation-play-state:running}.i-amphtml-new-loader-ad-logo{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.i-amphtml-new-loader-ad-label{all:initial!important;display:inline-block!important;padding:0 0.4ch!important;border:1px solid!important;border-radius:2px!important;color:currentColor!important;font-size:11px!important;font-family:sans-serif!important;line-height:1.1!important;visibility:inherit!important}@keyframes i-amphtml-new-loader-fade-in{0%{opacity:0}to{opacity:1}}@keyframes i-amphtml-new-loader-fade-out{0%{opacity:1}to{opacity:0}}@keyframes i-amphtml-new-loader-scale-and-fade-in{0%{opacity:0;transform:scale(0)}50%{transform:scale(1)}to{opacity:1}}@keyframes frame-position-first-spin{0%{transform:translateX(0)}to{transform:translateX(-1440px)}}@keyframes frame-position-infinite-spin{0%{transform:translateX(-1440px)}to{transform:translateX(-4272px)}}\n/*# sourceURL=/extensions/amp-loader/0.1/amp-loader.css*/";

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

  // extensions/amp-loader/0.1/amp-loader.js
  var _templateObject;
  var _templateObject2;
  var _templateObject3;
  var _templateObject4;
  var _templateObject5;
  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var LOADER_APPEAR_TIME = 600;
  var LOADER_BACKGROUND_TAGS = {
    "AMP-IMG": true,
    "AMP-ANIM": true,
    "AMP-PINTEREST": true,
    "AMP-INSTAGRAM": true,
    "AMP-GOOGLE-DOCUMENT-EMBED": true
  };
  var loaderDom = null;
  function createSpinnerDom(html2) {
    var content = html2(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(['\n    <div class="i-amphtml-new-loader-spinner-wrapper">\n      <svg class="i-amphtml-new-loader-spinner" viewBox="0 0 48 48">\n        <path\n          class="i-amphtml-new-loader-spinner-path"\n          fill="none"\n          d="M24 2a22 22 0 10.01 0m33.27 5.65a22 22 0 102.74-2.1m46.13 1.35a22 22 0 105.96-3.44m42.96 2.74a22 22 0 109.49-3.93m39.46 3.28a22 22 0 1013.13-3.52M253 4.95a22 22 0 1016.69-2.2m32.32 1.65a22 22 0 1019.98 0m29.06-.5a22 22 0 1022.79 3m26.28-3.44a22 22 0 1024.98 6.69m24.1-7.07a22 22 0 1026.4 10.94m22.71-11.27a22 22 0 1026.94 15.56m22.18-15.83a22 22 0 1026.54 20.37m22.59-20.58a22 22 0 1025.17 25.17M645.7 2.12a22 22 0 1022.84 29.76m26.31-29.85a22 22 0 1019.6 33.95M744 2a22 22 0 1015.56 37.56m33.59-37.53a22 22 0 1010.83 40.42M842.3 2.12a22 22 0 105.58 42.42m43.56-42.27a22 22 0 100 43.46m49.13-43.25a22 22 0 10-5.73 43.49m54.85-43.22a22 22 0 10-11.39 42.5m60.5-42.17a22 22 0 00-16.79 40.53m65.87-40.15a22 22 0 00-21.73 37.64m70.8-37.2a22 22 0 00-26.05 33.94m75.09-33.44a22 22 0 00-29.59 29.59M1235 4.95a22 22 0 00-32.25 24.75m81.23-24.15a22 22 0 00-33.95 19.6m82.9-18.95a22 22 0 00-34.66 14.36m83.58-13.66a22 22 0 00-34.38 9.21m83.25-8.46a22 22 0 00-33.17 4.37m82.01-3.58a22 22 0 00-31.11 0m81.35 2.63a22 22 0 00-32.52-3.42m82.32 6.36a22 22 0 00-33.45-7.11m82.77 10.3a22 22 0 00-33.85-11m82.66 14.36a22 22 0 00-33.71-15.01M1726 24a22 22 0 00-33-19.05m80.73 22.49a22 22 0 00-31.72-23.04m78.91 26.4a22 22 0 00-29.87-26.9m76.55 30.09a22 22 0 00-27.49-30.53m73.69 33.47a22 22 0 00-24.6-33.85m70.36 36.48a22 22 0 00-21.25-36.81m66.62 39.05a22 22 0 00-17.51-39.32m62.57 41.12a22 22 0 00-13.43-41.33m58.24 42.65a22 22 0 00-9.1-42.8m53.74 43.61a22 22 0 00-4.59-43.7M2184 46a22 22 0 100-44m44.56 43.73a22 22 0 104.59-43.7m40.05 42.89a22 22 0 109.1-42.8m35.71 41.48a22 22 0 1013.43-41.33m31.63 39.53a22 22 0 1017.51-39.32m27.86 37.08a22 22 0 1021.25-36.81m24.51 34.18a22 22 0 1024.6-33.85m21.6 30.91a22 22 0 1027.49-30.53m19.19 27.34a22 22 0 1029.87-26.9m17.32 23.54a22 22 0 1031.72-23.04M2642 24a22 22 0 1033-19.05m15.27 15.61a22 22 0 1033.71-15.01m15.1 11.65a22 22 0 1033.85-11m15.47 7.81a22 22 0 1033.45-7.11m16.35 4.17a22 22 0 1032.52-3.42m17.72.79a22 22 0 1031.11 0m17.73-.79a22 22 0 1032.52 3.42m16.35-4.17a22 22 0 1033.45 7.11m15.47-7.81a22 22 0 1033.85 11m15.1-11.65a22 22 0 1033.71 15.01M3133 4.95A22 22 0 103166 24m16.01-19.6a22 22 0 1031.72 23.04m17.32-23.54a22 22 0 1029.87 26.9m19.2-27.34a22 22 0 1027.49 30.53m21.59-30.91a22 22 0 1024.6 33.85m24.51-34.18a22 22 0 1021.25 36.81m27.87-37.08a22 22 0 1017.51 39.32m31.62-39.53a22 22 0 1013.43 41.33m35.71-41.48a22 22 0 109.1 42.8m40.05-42.89a22 22 0 104.59 43.7M3624 2a22 22 0 100 44m49.15-43.97a22 22 0 00-4.59 43.7m53.74-43.61a22 22 0 00-9.1 42.8m58.24-42.65a22 22 0 00-13.43 41.33m62.56-41.12a22 22 0 00-17.51 39.32m66.63-39.05a22 22 0 00-21.25 36.81m70.36-36.48a22 22 0 00-24.6 33.85m73.68-33.47a22 22 0 00-27.49 30.53m76.56-30.09a22 22 0 00-29.87 26.9m78.91-26.4a22 22 0 00-31.72 23.04M4115 4.95A22 22 0 004082 24m81.98-18.45a22 22 0 00-33.71 15.01m82.66-14.36a22 22 0 00-33.85 11m82.77-10.3a22 22 0 00-33.45 7.11m82.32-6.36a22 22 0 00-32.52 3.42"\n        ></path>\n      </svg>\n    </div>\n  '])));
    return content;
  }
  function getLoaderDom(element) {
    if (!loaderDom) {
      var html2 = htmlFor(element);
      loaderDom = html2(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(['\n      <div class="i-amphtml-new-loader">\n        <div class="i-amphtml-new-loader-shim"></div>\n        <div class="i-amphtml-new-loader-logo"></div>\n      </div>\n    '])));
      loaderDom.appendChild(createSpinnerDom(html2));
    }
    return loaderDom.cloneNode(true);
  }
  var LoaderBuilder = /* @__PURE__ */ function() {
    function LoaderBuilder2(element, domRoot, elementWidth, elementHeight) {
      this.element_ = element;
      this.domRoot_ = domRoot;
      this.layoutWidth_ = elementWidth;
      this.layoutHeight_ = elementHeight;
      this.loaderRoot_ = null;
    }
    var _proto = LoaderBuilder2.prototype;
    _proto.build = function build() {
      this.loaderRoot_ = getLoaderDom(this.element_);
      this.domRoot_.appendChild(this.loaderRoot_);
      this.maybeAddLoadingBackground_();
      this.maybeAddLoaderAnimation_();
    };
    _proto.maybeAddLoaderAnimation_ = function maybeAddLoaderAnimation_() {
      if (this.isTiny_() || this.hasBlurryImagePlaceholder_()) {
        return;
      }
      this.setSize_();
      if (this.requiresBackgroundShim_()) {
        this.loaderRoot_.classList.add("i-amphtml-new-loader-has-shim");
      }
      this.addLogo_();
    };
    _proto.setSize_ = function setSize_() {
      var sizeClassDefault = "i-amphtml-new-loader-size-default";
      var sizeClassSmall = "i-amphtml-new-loader-size-small";
      var sizeClassLarge = "i-amphtml-new-loader-size-large";
      if (this.isAd_()) {
        return this.loaderRoot_.classList.add(sizeClassDefault);
      }
      if (this.isSmall_()) {
        return this.loaderRoot_.classList.add(sizeClassSmall);
      }
      if (this.requiresLargeSpinner_()) {
        return this.loaderRoot_.classList.add(sizeClassLarge);
      }
      return this.loaderRoot_.classList.add(sizeClassDefault);
    };
    _proto.addLogo_ = function addLogo_() {
      var _this$getCustomLogo_ = this.getCustomLogo_(), color = _this$getCustomLogo_.color, _this$getCustomLogo_$ = _this$getCustomLogo_.content, content = _this$getCustomLogo_$ === void 0 ? this.getDefaultLogo_() : _this$getCustomLogo_$;
      this.loaderRoot_.querySelector(".i-amphtml-new-loader-logo").appendChild(content);
      if (color) {
        setStyle(this.loaderRoot_, "color", color);
      }
    };
    _proto.hasBackgroundContent_ = function hasBackgroundContent_() {
      var hasPlaceholder = !!this.element_.getPlaceholder();
      var hasPoster = this.element_.hasAttribute("poster");
      return hasPlaceholder || hasPoster;
    };
    _proto.tagNeedsBackground_ = function tagNeedsBackground_() {
      var tagName = this.element_.tagName;
      return LOADER_BACKGROUND_TAGS[tagName] || isIframeVideoPlayerComponent(tagName);
    };
    _proto.maybeAddLoadingBackground_ = function maybeAddLoadingBackground_() {
      if (!this.hasBackgroundContent_() && this.tagNeedsBackground_()) {
        this.domRoot_.classList.add("i-amphtml-loader-background");
      }
    };
    _proto.getCustomLogo_ = function getCustomLogo_() {
      if (this.isAd_()) {
        return {
          content: this.getAdsLogo_()
        };
      }
      if (isIframeVideoPlayerComponent(this.element_.tagName)) {
        return {
          content: this.getVideoPlayerLogo_()
        };
      }
      return this.element_.createLoaderLogo();
    };
    _proto.getVideoPlayerLogo_ = function getVideoPlayerLogo_() {
      var html2 = htmlFor(this.element_);
      return html2(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(['\n      <svg viewBox="0 0 72 72">\n        <path\n          class="i-amphtml-new-loader-white-on-shim"\n          fill="currentColor"\n          d="M41,34.5V31c0-0.5-0.4-1-1-1H27c-0.5,0-1,0.5-1,1v10c0,0.6,0.5,1,1,1h13c0.6,0,1-0.4,1-1v-3.5l5,4v-11L41,34.5z"\n        ></path>\n      </svg>\n    '])));
    };
    _proto.getDefaultLogo_ = function getDefaultLogo_() {
      var html2 = htmlFor(this.element_);
      return html2(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(['\n      <svg class="i-amphtml-new-loader-logo-default" viewBox="0 0 72 72">\n        <circle cx="36" cy="36" r="12"></circle>\n      </svg>\n    '])));
    };
    _proto.getAdsLogo_ = function getAdsLogo_() {
      var html2 = htmlFor(this.element_);
      return html2(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(['\n      <div class="i-amphtml-new-loader-ad-logo">\n        <span class="i-amphtml-new-loader-ad-label"> Ad </span>\n      </div>\n    '])));
    };
    _proto.isAd_ = function isAd_() {
      return this.element_.tagName == "AMP-AD";
    };
    _proto.isSmall_ = function isSmall_() {
      return !this.isTiny_() && (this.layoutWidth_ <= 100 || this.layoutHeight_ <= 100);
    };
    _proto.isTiny_ = function isTiny_() {
      return this.layoutWidth_ < 50 || this.layoutHeight_ < 50;
    };
    _proto.hasBlurryImagePlaceholder_ = function hasBlurryImagePlaceholder_() {
      var placeholder = this.element_.getPlaceholder();
      return placeholder && placeholder.classList.contains("i-amphtml-blurry-placeholder");
    };
    _proto.requiresBackgroundShim_ = function requiresBackgroundShim_() {
      if (this.element_.hasAttribute("poster")) {
        return true;
      }
      var placeholder = this.element_.getPlaceholder();
      if (!placeholder) {
        return false;
      }
      if (placeholder.tagName == "AMP-IMG" || placeholder.tagName == "IMG") {
        return true;
      }
      return false;
    };
    _proto.requiresLargeSpinner_ = function requiresLargeSpinner_() {
      return false;
    };
    return LoaderBuilder2;
  }();
  var LoaderService = /* @__PURE__ */ function() {
    function LoaderService2() {
    }
    var _proto2 = LoaderService2.prototype;
    _proto2.initializeLoader = function initializeLoader(element, loaderRoot, initDelay, elementWidth, elementHeight) {
      var loaderDelay = Math.min(initDelay, LOADER_APPEAR_TIME);
      var lb = new LoaderBuilder(element, loaderRoot, elementWidth, elementHeight);
      lb.build();
      setImportantStyles(element, {
        "--loader-delay-offset": loaderDelay + "ms"
      });
    };
    return LoaderService2;
  }();
  AMP.registerServiceForDoc("loader", LoaderService);
  Services.extensionsFor(AMP.win).addDocFactory(function(ampDoc) {
    installStylesForDoc(ampDoc, CSS2, function() {
    }, false, "amp-loader");
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-loader-0.1.max.js.map
