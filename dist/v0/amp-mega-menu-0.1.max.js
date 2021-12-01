(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-mega-menu",ev:"0.1",l:true,f:(function(AMP,_){
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

  // src/core/types/array.js
  function toArray(arrayLike) {
    return arrayLike ? Array.prototype.slice.call(arrayLike) : [];
  }
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

  // src/core/window/index.js
  function toWin(winOrNull) {
    return winOrNull;
  }
  function getWin(node) {
    return toWin((node.ownerDocument || node).defaultView);
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
  function scopedQuerySelectorAll(root, selector) {
    if (isEsm() || isScopeSelectorSupported(root)) {
      return root.querySelectorAll(prependSelectorsWith(selector, ":scope"));
    }
    return scopedQuerySelectionFallback(root, selector);
  }
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
  function isConnectedNode(node) {
    var connected = node.isConnected;
    if (connected !== void 0) {
      return connected;
    }
    var n = node;
    do {
      n = rootNodeFor(n);
      if (n.host) {
        n = n.host;
      } else {
        break;
      }
    } while (true);
    return n.nodeType === Node.DOCUMENT_NODE;
  }
  function rootNodeFor(node) {
    if (Node.prototype.getRootNode) {
      return node.getRootNode() || node;
    }
    var n;
    for (n = node; !!n.parentNode && !isShadowRoot(n); n = n.parentNode) {
    }
    return n;
  }
  function isShadowRoot(value) {
    if (!value) {
      return false;
    }
    if (value.tagName == "I-AMPHTML-SHADOW-ROOT") {
      return true;
    }
    return value.nodeType == 11 && Object.prototype.toString.call(value) === "[object ShadowRoot]";
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

  // src/core/dom/modal.js
  var modalEntryStack = [];
  var SAVED_TAB_INDEX = "__AMP_MODAL_SAVED_TAB_INDEX";
  function getElementsToAriaHide(element) {
    var arr = [];
    var ancestors = getAncestors(element);
    var _loop = function _loop2(i2) {
      var cur = ancestors[i2];
      if (!cur.parentNode) {
        return "continue";
      }
      toArray(cur.parentNode.children).filter(function(c) {
        return c != cur;
      }).forEach(function(c) {
        return arr.push(c);
      });
    };
    for (var i = 0; i < ancestors.length; i++) {
      var _ret = _loop(i);
      if (_ret === "continue")
        continue;
    }
    return arr;
  }
  function getAncestors(element) {
    var ancestry = [];
    for (var cur = element; cur; cur = cur.parentNode || cur.host) {
      ancestry.push(cur);
    }
    return ancestry;
  }
  function getPotentiallyFocusableElements(element) {
    var arr = [];
    var cur = element;
    while (cur) {
      var root = rootNodeFor(cur);
      var potentiallyFocusable = root.querySelectorAll(["a[href]", "area[href]", "button", "details summary", "iframe", "input", "select", "textarea", "[contenteditable]", "[draggable]", "[tabindex]"].join(","));
      Array.prototype.push.apply(arr, potentiallyFocusable);
      cur = root.host;
    }
    return arr;
  }
  function restoreAttributeValue(element, attribute, value) {
    if (value === null) {
      element.removeAttribute(attribute);
    } else {
      element.setAttribute(attribute, value);
    }
  }
  function setModalAsOpen(element) {
    devAssert(modalEntryStack.every(function(info) {
      return info.element !== element;
    }));
    devAssert(isConnectedNode(element));
    var elements = getElementsToAriaHide(element);
    var ancestry = getAncestors(element).filter(isElement);
    var focusableElements = getPotentiallyFocusableElements(element);
    var focusableInternalElements = focusableElements.filter(function(e) {
      return element.contains(e) && e[SAVED_TAB_INDEX] !== void 0;
    });
    var focusableExternalElements = focusableElements.filter(function(e) {
      return !element.contains(e) && e[SAVED_TAB_INDEX] === void 0;
    });
    var hiddenElementInfos = elements.concat(ancestry).map(function(element2) {
      return {
        element: element2,
        prevValue: element2.getAttribute("aria-hidden")
      };
    });
    ancestry.forEach(function(e) {
      return e.removeAttribute("aria-hidden");
    });
    elements.forEach(function(e) {
      return e.setAttribute("aria-hidden", "true");
    });
    focusableExternalElements.forEach(function(e) {
      e[SAVED_TAB_INDEX] = e.getAttribute("tabindex");
      e.setAttribute("tabindex", "-1");
    });
    focusableInternalElements.forEach(function(e) {
      devAssert(e[SAVED_TAB_INDEX] !== void 0);
      restoreAttributeValue(e, "tabindex", e[SAVED_TAB_INDEX]);
    });
    modalEntryStack.push({
      element: element,
      hiddenElementInfos: hiddenElementInfos,
      focusableExternalElements: focusableExternalElements,
      focusableInternalElements: focusableInternalElements
    });
  }
  function setModalAsClosed(element) {
    var _modalEntryStack$pop = modalEntryStack.pop(), topModalElement = _modalEntryStack$pop.element, focusableExternalElements = _modalEntryStack$pop.focusableExternalElements, focusableInternalElements = _modalEntryStack$pop.focusableInternalElements, hiddenElementInfos = _modalEntryStack$pop.hiddenElementInfos;
    devAssert(isConnectedNode(element));
    devAssert(topModalElement === element);
    hiddenElementInfos.forEach(function(_ref) {
      var element2 = _ref.element, prevValue = _ref.prevValue;
      return restoreAttributeValue(element2, "aria-hidden", prevValue);
    });
    focusableInternalElements.forEach(function(e) {
      return e.setAttribute("tabindex", "-1");
    });
    focusableExternalElements.forEach(function(e) {
      devAssert(e[SAVED_TAB_INDEX] !== void 0);
      restoreAttributeValue(e, "tabindex", e[SAVED_TAB_INDEX]);
      e[SAVED_TAB_INDEX] = void 0;
    });
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
  function userAssert2(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
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

  // build/amp-mega-menu-0.1.css.js
  var CSS2 = "amp-mega-menu{z-index:1000!important;white-space:nowrap!important}amp-mega-menu.i-amphtml-layout-size-defined[open]{overflow:visible!important}amp-mega-menu nav{background:#fff}amp-mega-menu nav>*{margin:0}amp-mega-menu .i-amphtml-mega-menu-item{display:inline-block!important}amp-mega-menu .i-amphtml-mega-menu-heading{cursor:pointer!important}amp-mega-menu .i-amphtml-mega-menu-content{position:absolute!important;left:0;width:100vw;opacity:0!important;visibility:hidden!important;background:#fff}amp-mega-menu .i-amphtml-mega-menu-item[open]>.i-amphtml-mega-menu-content{visibility:visible!important;opacity:1!important}amp-mega-menu .i-amphtml-mega-menu-item:not([open]) .i-amphtml-screen-reader{display:none!important}.i-amphtml-mega-menu-mask-parent{z-index:1000!important;position:relative}.i-amphtml-mega-menu-mask{position:fixed!important;z-index:-1!important;visibility:hidden!important;opacity:0!important;top:0!important;bottom:0!important;left:0!important;right:0!important;background:rgba(0,0,0,0.5);transition:opacity 200ms,visibility 0s 200ms}.i-amphtml-mega-menu-mask[open]{opacity:1!important;visibility:visible!important;transition:opacity 200ms}\n/*# sourceURL=/extensions/amp-mega-menu/0.1/amp-mega-menu.css*/";

  // extensions/amp-mega-menu/0.1/amp-mega-menu.js
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
  var TAG = "amp-mega-menu";
  var ARIA_LABEL_CLOSE = "Close the menu";
  var AmpMegaMenu = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpMegaMenu2, _AMP$BaseElement);
    var _super = _createSuper(AmpMegaMenu2);
    AmpMegaMenu2.prerenderAllowed = function prerenderAllowed() {
      return true;
    };
    function AmpMegaMenu2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.items_ = [];
      _this.itemCount_ = 0;
      _this.expandedItem_ = null;
      _this.maskElement_ = null;
      _this.document_ = _this.win.document;
      _this.documentElement_ = _this.document_.documentElement;
      _this.action_ = null;
      _this.prefix_ = element.id || Math.floor(Math.random() * 100);
      _this.domUpdateHandler_ = _this.registerMenuItems_.bind(_assertThisInitialized(_this));
      _this.rootClickHandler_ = _this.handleRootClick_.bind(_assertThisInitialized(_this));
      _this.rootKeyDownHandler_ = _this.handleRootKeyDown_.bind(_assertThisInitialized(_this));
      return _this;
    }
    var _proto = AmpMegaMenu2.prototype;
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return layout === Layout_Enum.FIXED_HEIGHT;
    };
    _proto.buildCallback = function buildCallback() {
      this.action_ = Services.actionServiceForDoc(this.element);
    };
    _proto.layoutCallback = function layoutCallback() {
      this.registerMenuItems_();
      this.element.addEventListener(AmpEvents_Enum.DOM_UPDATE, this.domUpdateHandler_);
      if (!this.maskElement_) {
        this.maskElement_ = this.createMaskElement_();
      }
      return resolvedPromise();
    };
    _proto.unlayoutCallback = function unlayoutCallback() {
      this.element.removeEventListener(AmpEvents_Enum.DOM_UPDATE, this.domUpdateHandler_);
      this.collapse_();
      return true;
    };
    _proto.createMaskElement_ = function createMaskElement_() {
      var mask = this.document_.createElement("div");
      mask.classList.add("i-amphtml-mega-menu-mask");
      mask.setAttribute("aria-hidden", "true");
      var maskParent = closestAncestorElementBySelector(this.element, "header") || this.element;
      maskParent.classList.add("i-amphtml-mega-menu-mask-parent");
      maskParent.appendChild(mask);
      return mask;
    };
    _proto.registerMenuItems_ = function registerMenuItems_() {
      var _this2 = this;
      this.items_ = toArray(scopedQuerySelectorAll(this.element, "nav > * > li"));
      this.items_.filter(function(item) {
        return !item.classList.contains("i-amphtml-mega-menu-item");
      }).forEach(function(item) {
        if (item.childElementCount == 1) {
          var _heading = dev().assertElement(item.firstElementChild);
          _this2.registerMenuItem_(item, _heading, null);
          return;
        }
        var heading = scopedQuerySelector(item, "> button") || scopedQuerySelector(item, "> [role=button]");
        var content = scopedQuerySelector(item, "> [role=dialog]");
        userAssert2(heading, TAG + " requires each expandable item to include a button that toggles it.");
        _this2.registerMenuItem_(item, heading, content);
      });
    };
    _proto.registerMenuItem_ = function registerMenuItem_(item, heading, content) {
      var _this3 = this;
      item.classList.add("i-amphtml-mega-menu-item");
      this.itemCount_++;
      heading.classList.add("i-amphtml-mega-menu-heading");
      if (!heading.hasAttribute("tabindex")) {
        heading.setAttribute("tabindex", 0);
      }
      heading.addEventListener("click", function(e) {
        return _this3.handleHeadingClick_(e);
      });
      heading.addEventListener("keydown", function(e) {
        return _this3.handleHeadingKeyDown_(e);
      });
      if (!content || this.action_.hasAction(heading, "tap", item)) {
        return;
      }
      content.classList.add("i-amphtml-mega-menu-content");
      content.setAttribute("aria-modal", "false");
      var contentId = content.getAttribute("id");
      if (!contentId) {
        contentId = this.prefix_ + "_AMP_content_" + this.itemCount_;
        content.setAttribute("id", contentId);
      }
      content.insertBefore(this.createScreenReaderCloseButton_(), content.firstChild);
      content.appendChild(this.createScreenReaderCloseButton_());
      heading.setAttribute("aria-haspopup", "dialog");
      heading.setAttribute("aria-controls", contentId);
      heading.setAttribute("aria-expanded", "false");
    };
    _proto.handleRootClick_ = function handleRootClick_(event) {
      var target = dev().assertElement(event.target);
      if (this.expandedItem_ && !this.expandedItem_.contains(target) && isConnectedNode(target)) {
        this.collapse_();
      }
    };
    _proto.handleRootKeyDown_ = function handleRootKeyDown_(event) {
      if (event.key === Keys_Enum.ESCAPE && this.collapse_()) {
        event.preventDefault();
      }
    };
    _proto.handleHeadingClick_ = function handleHeadingClick_(event) {
      if (!this.shouldHandleClick_(event)) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      var item = dev().assertElement(event.currentTarget.parentElement);
      var previousItem = this.collapse_();
      if (item != previousItem) {
        this.expand_(item);
      }
    };
    _proto.shouldHandleClick_ = function shouldHandleClick_(event) {
      var target = dev().assertElement(event.target);
      var currentTarget = dev().assertElement(event.currentTarget);
      var hasAnchor = !!closest(target, function(e) {
        return e.tagName == "A";
      }, currentTarget);
      if (hasAnchor) {
        return false;
      }
      var hasTapAction = this.action_.hasAction(target, "tap", currentTarget);
      if (hasTapAction) {
        return false;
      }
      return currentTarget.hasAttribute("aria-haspopup");
    };
    _proto.handleHeadingKeyDown_ = function handleHeadingKeyDown_(event) {
      if (event.defaultPrevented) {
        return;
      }
      var key = event.key;
      switch (key) {
        case Keys_Enum.LEFT_ARROW:
        case Keys_Enum.RIGHT_ARROW:
          this.handleNavigationKeyDown_(event);
          return;
        case Keys_Enum.ENTER:
        case Keys_Enum.SPACE:
          if (event.target == event.currentTarget) {
            this.handleHeadingClick_(event);
          }
          return;
      }
    };
    _proto.handleNavigationKeyDown_ = function handleNavigationKeyDown_(event) {
      var item = dev().assertElement(event.currentTarget.parentElement);
      var index = this.items_.indexOf(item);
      if (index !== -1) {
        event.preventDefault();
        var dir = event.key == Keys_Enum.LEFT_ARROW ? -1 : 1;
        if (isRTL(this.document_)) {
          dir = -dir;
        }
        var newIndex = mod(index + dir, this.items_.length);
        tryFocus(this.getItemHeading_(this.items_[newIndex]));
      }
    };
    _proto.expand_ = function expand_(item) {
      var _this4 = this;
      this.mutateElement(function() {
        var content = _this4.getItemContent_(item);
        setModalAsOpen(content);
        content.setAttribute("aria-modal", "true");
      });
      item.setAttribute("open", "");
      this.element.setAttribute("open", "");
      this.maskElement_.setAttribute("open", "");
      var heading = this.getItemHeading_(item);
      heading.setAttribute("aria-expanded", "true");
      var screenReaderCloseButton = dev().assertElement(item.querySelector(".i-amphtml-screen-reader"));
      tryFocus(screenReaderCloseButton);
      this.documentElement_.addEventListener("click", this.rootClickHandler_);
      this.documentElement_.addEventListener("keydown", this.rootKeyDownHandler_);
      this.expandedItem_ = item;
    };
    _proto.collapse_ = function collapse_() {
      var _this5 = this;
      if (!this.expandedItem_) {
        return null;
      }
      var item = dev().assertElement(this.expandedItem_);
      this.mutateElement(function() {
        var content = _this5.getItemContent_(item);
        setModalAsClosed(content);
        content.setAttribute("aria-modal", "false");
      });
      item.removeAttribute("open");
      this.element.removeAttribute("open");
      this.maskElement_.removeAttribute("open");
      var heading = this.getItemHeading_(item);
      heading.setAttribute("aria-expanded", "false");
      if (item.contains(this.document_.activeElement)) {
        tryFocus(heading);
      }
      this.documentElement_.removeEventListener("click", this.rootClickHandler_);
      this.documentElement_.removeEventListener("keydown", this.rootKeyDownHandler_);
      this.expandedItem_ = null;
      return item;
    };
    _proto.getItemHeading_ = function getItemHeading_(item) {
      var heading = scopedQuerySelector(item, "> .i-amphtml-mega-menu-heading");
      return dev().assertElement(heading);
    };
    _proto.getItemContent_ = function getItemContent_(item) {
      var content = scopedQuerySelector(item, "> .i-amphtml-mega-menu-content");
      return dev().assertElement(content);
    };
    _proto.createScreenReaderCloseButton_ = function createScreenReaderCloseButton_() {
      var _this6 = this;
      var ariaLabel = this.element.getAttribute("data-close-button-aria-label") || ARIA_LABEL_CLOSE;
      var screenReaderCloseButton = this.document_.createElement("button");
      screenReaderCloseButton.textContent = ariaLabel;
      screenReaderCloseButton.classList.add("i-amphtml-screen-reader");
      screenReaderCloseButton.addEventListener("click", function() {
        return _this6.collapse_();
      });
      return screenReaderCloseButton;
    };
    return AmpMegaMenu2;
  }(AMP.BaseElement);
  AMP.registerElement(TAG, AmpMegaMenu, CSS2);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-mega-menu-0.1.max.js.map
