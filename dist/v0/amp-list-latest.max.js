(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-list",ev:"0.1",l:true,f:(function(AMP,_){
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
  function toArray(arrayLike) {
    return arrayLike ? Array.prototype.slice.call(arrayLike) : [];
  }
  var isArray = Array.isArray;
  function arrayOrSingleItemToArray(arrayOrSingleItem) {
    return isArray(arrayOrSingleItem) ? arrayOrSingleItem : [
      arrayOrSingleItem
    ];
  }
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

  // src/core/types/enum.js
  function isEnumValue(enumObj, val) {
    for (var k in enumObj) {
      if (enumObj[k] === val) {
        return true;
      }
    }
    return false;
  }

  // src/core/types/string/index.js
  function endsWith(string, suffix) {
    var index = string.length - suffix.length;
    return index >= 0 && string.indexOf(suffix, index) == index;
  }

  // src/core/types/object/index.js
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
  function hasOwn(obj, key) {
    return hasOwn_.call(obj, key);
  }
  function getValueForExpr(obj, expr) {
    if (expr == ".") {
      return obj;
    }
    var parts = expr.split(".");
    var value = obj;
    for (var _iterator = _createForOfIteratorHelperLoose(parts), _step; !(_step = _iterator()).done; ) {
      var part = _step.value;
      if (part && value && value[part] !== void 0 && typeof value == "object" && hasOwn(value, part)) {
        value = value[part];
        continue;
      }
      value = void 0;
      break;
    }
    return value;
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
  function scopedQuerySelectorAll(root, selector) {
    if (isEsm() || isScopeSelectorSupported(root)) {
      return root.querySelectorAll(prependSelectorsWith(selector, ":scope"));
    }
    return scopedQuerySelectionFallback(root, selector);
  }
  function childElementByAttr(parent, attr) {
    assertIsName(attr);
    return scopedQuerySelector(parent, "> [" + attr + "]");
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
  function removeChildren(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
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
  function parseLayout(s) {
    if (isEnumValue(Layout_Enum, s)) {
      return s;
    }
    return void 0;
  }
  function getLayoutClass(layout) {
    return "i-amphtml-layout-" + layout;
  }
  function isLayoutSizeDefined(layout) {
    return layout == Layout_Enum.FIXED || layout == Layout_Enum.FIXED_HEIGHT || layout == Layout_Enum.RESPONSIVE || layout == Layout_Enum.FILL || layout == Layout_Enum.FLEX_ITEM || layout == Layout_Enum.FLUID || layout == Layout_Enum.INTRINSIC;
  }
  function applyFillContent(element, opt_replacedContent) {
    element.classList.add("i-amphtml-fill-content");
    if (opt_replacedContent) {
      element.classList.add("i-amphtml-replaced-content");
    }
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
  function setStyles(element, styles) {
    for (var k in styles) {
      setStyle(element, k, styles[k]);
    }
  }
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
  function px(value) {
    return value + "px";
  }
  function isVar(property) {
    return property.startsWith("--");
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

  // src/experiments/index.js
  function _createForOfIteratorHelperLoose2(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray2(o)) || allowArrayLike && o && typeof o.length === "number") {
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
  function _unsupportedIterableToArray2(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray2(o, minLen);
  }
  function _arrayLikeToArray2(arr, len) {
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
        for (var _iterator = _createForOfIteratorHelperLoose2(optedInExperiments), _step; !(_step = _iterator()).done; ) {
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
      for (var _iterator2 = _createForOfIteratorHelperLoose2(allowedUrlOptIn), _step2; !(_step2 = _iterator2()).done; ) {
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
    for (var _iterator3 = _createForOfIteratorHelperLoose2(tokens), _step3; !(_step3 = _iterator3()).done; ) {
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
  function isProxyOrigin(url) {
    return urls.cdnProxyRegex.test(urlAsLocation(url).origin);
  }
  function isAmpScriptUri(uri) {
    return uri.startsWith("amp-script:");
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

  // src/purifier/sanitation.js
  var DIFF_KEY = "i-amphtml-key";
  var DIFF_IGNORE = "i-amphtml-ignore";
  var DIFFABLE_AMP_ELEMENTS = {
    "AMP-IMG": ["src", "srcset", "layout", "width", "height"]
  };
  function markElementForDiffing(element, generateKey) {
    var isAmpElement = element.tagName.startsWith("AMP-");
    var hasBinding = element.hasAttribute("i-amphtml-binding");
    if (!hasBinding && DIFFABLE_AMP_ELEMENTS[element.tagName]) {
      element.setAttribute(DIFF_IGNORE, "");
    } else if (hasBinding || isAmpElement) {
      if (!element.hasAttribute(DIFF_KEY)) {
        element.setAttribute(DIFF_KEY, generateKey());
      }
    }
  }
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
  function listen(element, eventType, listener, opt_evtListenerOpts) {
    return internalListenImplementation(element, eventType, listener, opt_evtListenerOpts);
  }

  // src/form-data-wrapper.js
  function isFormDataWrapper(o) {
    return !!o && typeof o.getFormData == "function";
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
  var allowedJsonBodyTypes_ = [isArray, isObject];
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
  function setupJsonFetchInit(init) {
    var fetchInit = setupInit(init, "application/json");
    if (fetchInit.method == "POST" && !isFormDataWrapper(fetchInit.body)) {
      devAssert(allowedJsonBodyTypes_.some(function(test) {
        return test(fetchInit.body);
      }), "body must be of type object or array. %s", fetchInit.body);
      fetchInit.headers["Content-Type"] = fetchInit.headers["Content-Type"] || "text/plain;charset=utf-8";
      var headerContentType = fetchInit.headers["Content-Type"];
      if (headerContentType === "application/x-www-form-urlencoded") {
        fetchInit.body = serializeQueryString(fetchInit.body);
      } else {
        fetchInit.body = JSON.stringify(fetchInit.body);
      }
    }
    return fetchInit;
  }
  function normalizeMethod_(method) {
    if (method === void 0) {
      return "GET";
    }
    method = method.toUpperCase();
    devAssert(allowedMethods_.includes(method), "Only one of %s is currently allowed. Got %s", allowedMethods_.join(", "), method);
    return method;
  }

  // third_party/set-dom/set-dom.js
  "use strict";
  setDOM.KEY = "data-key";
  setDOM.IGNORE = "data-ignore";
  setDOM.CHECKSUM = "data-checksum";
  var KEY_PREFIX = "_set-dom-";
  var NODE_MOUNTED = KEY_PREFIX + "mounted";
  var ELEMENT_TYPE_ENUM = 1;
  var DOCUMENT_TYPE = 9;
  var DOCUMENT_FRAGMENT_TYPE = 11;
  var ignoredNodes = null;
  function setDOM(oldNode, newNode) {
    ignoredNodes = [];
    assert2(oldNode && oldNode.nodeType, "You must provide a valid node to update.");
    if (oldNode.nodeType === DOCUMENT_TYPE)
      oldNode = oldNode.documentElement;
    if (newNode.nodeType === DOCUMENT_FRAGMENT_TYPE) {
      setChildNodes(oldNode, newNode);
    } else {
      setNode(oldNode, newNode);
    }
    if (!oldNode[NODE_MOUNTED]) {
      oldNode[NODE_MOUNTED] = true;
      mount(oldNode);
    }
    var returnValue = ignoredNodes;
    ignoredNodes = null;
    return returnValue;
  }
  function setNode(oldNode, newNode) {
    if (oldNode.nodeType === newNode.nodeType) {
      if (oldNode.nodeType === ELEMENT_TYPE_ENUM) {
        if (isEqualNode(oldNode, newNode))
          return;
        setChildNodes(oldNode, newNode);
        if (oldNode.nodeName === newNode.nodeName) {
          setAttributes(oldNode.attributes, newNode.attributes);
        } else {
          var newPrev = newNode.cloneNode();
          while (oldNode.firstChild) {
            newPrev.appendChild(oldNode.firstChild);
          }
          oldNode.parentNode.replaceChild(newPrev, oldNode);
        }
      } else {
        if (oldNode.nodeValue !== newNode.nodeValue) {
          oldNode.nodeValue = newNode.nodeValue;
        }
      }
    } else {
      oldNode.parentNode.replaceChild(newNode, dismount(oldNode));
      mount(newNode);
    }
  }
  function setAttributes(oldAttributes, newAttributes) {
    var i, a, b, ns, name;
    for (i = oldAttributes.length; i--; ) {
      a = oldAttributes[i];
      ns = a.namespaceURI;
      name = a.localName;
      b = newAttributes.getNamedItemNS(ns, name);
      if (!b)
        oldAttributes.removeNamedItemNS(ns, name);
    }
    for (i = newAttributes.length; i--; ) {
      a = newAttributes[i];
      ns = a.namespaceURI;
      name = a.localName;
      b = oldAttributes.getNamedItemNS(ns, name);
      if (!b) {
        newAttributes.removeNamedItemNS(ns, name);
        oldAttributes.setNamedItemNS(a);
      } else if (b.value !== a.value) {
        b.value = a.value;
      }
    }
  }
  function setChildNodes(oldParent, newParent) {
    var checkOld, oldKey, checkNew, newKey, foundNode, keyedNodes;
    var oldNode = oldParent.firstChild;
    var newNode = newParent.firstChild;
    var extra = 0;
    while (oldNode) {
      extra++;
      checkOld = oldNode;
      oldKey = getKey(checkOld);
      oldNode = oldNode.nextSibling;
      if (oldKey) {
        if (!keyedNodes)
          keyedNodes = {};
        keyedNodes[oldKey] = checkOld;
      }
    }
    oldNode = oldParent.firstChild;
    while (newNode) {
      extra--;
      checkNew = newNode;
      newNode = newNode.nextSibling;
      if (keyedNodes && (newKey = getKey(checkNew)) && (foundNode = keyedNodes[newKey])) {
        delete keyedNodes[newKey];
        if (foundNode !== oldNode) {
          oldParent.insertBefore(foundNode, oldNode);
        } else {
          oldNode = oldNode.nextSibling;
        }
        setNode(foundNode, checkNew);
      } else if (oldNode) {
        checkOld = oldNode;
        oldNode = oldNode.nextSibling;
        if (getKey(checkOld)) {
          oldParent.insertBefore(checkNew, checkOld);
          mount(checkNew);
        } else {
          setNode(checkOld, checkNew);
        }
      } else {
        oldParent.appendChild(checkNew);
        mount(checkNew);
      }
    }
    for (oldKey in keyedNodes) {
      extra--;
      oldParent.removeChild(dismount(keyedNodes[oldKey]));
    }
    while (--extra >= 0) {
      oldParent.removeChild(dismount(oldParent.lastChild));
    }
  }
  function getKey(node) {
    if (node.nodeType !== ELEMENT_TYPE_ENUM)
      return;
    var key = node.getAttribute(setDOM.KEY) || node.id;
    if (key)
      return KEY_PREFIX + key;
  }
  function isEqualNode(a, b) {
    var ignored = isIgnored(a) && isIgnored(b);
    if (ignored) {
      ignoredNodes.push(a, b);
    }
    return ignored || getCheckSum(a) === getCheckSum(b) || a.isEqualNode(b);
  }
  function getCheckSum(node) {
    return node.getAttribute(setDOM.CHECKSUM) || NaN;
  }
  function isIgnored(node) {
    return node.getAttribute(setDOM.IGNORE) != null;
  }
  function mount(node) {
    return dispatch(node, "mount");
  }
  function dismount(node) {
    return dispatch(node, "dismount");
  }
  function dispatch(node, type) {
    if (getKey(node)) {
      var ev = document.createEvent("Event");
      var prop = {
        value: node
      };
      ev.initEvent(type, false, false);
      Object.defineProperty(ev, "target", prop);
      Object.defineProperty(ev, "srcElement", prop);
      node.dispatchEvent(ev);
    }
    var child = node.firstChild;
    while (child) {
      child = dispatch(child, type).nextSibling;
    }
    return node;
  }
  function assert2(val, msg) {
    if (!val)
      throw new Error("set-dom: " + msg);
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

  // extensions/amp-list/0.1/service/load-more-service.js
  var _templateObject;
  var _templateObject2;
  var _templateObject3;
  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var LoadMoreService = /* @__PURE__ */ function() {
    function LoadMoreService2(element) {
      this.ampListElement_ = element;
      this.loadMoreButton_ = null;
      this.loadMoreButtonClickable_ = null;
      this.loadMoreLoadingElement_ = null;
      this.loadMoreFailedElement_ = null;
      this.loadMoreFailedClickable_ = null;
      this.loadMoreEndElement_ = null;
    }
    var _proto = LoadMoreService2.prototype;
    _proto.initializeLoadMore = function initializeLoadMore() {
      this.initializeLoadMoreButton_();
      this.initializeLoadMoreLoadingElement_();
      this.initializeLoadMoreFailedElement_();
      this.initializeLoadMoreEndElement_();
    };
    _proto.initializeLoadMoreButton_ = function initializeLoadMoreButton_() {
      this.loadMoreButton_ = childElementByAttr(this.ampListElement_, "load-more-button");
      if (this.loadMoreButton_) {
        this.loadMoreButton_.classList.add("amp-visible");
      } else {
        this.loadMoreButton_ = htmlFor(this.ampListElement_)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(['\n        <amp-list-load-more load-more-button\n          class="amp-visible i-amphtml-default-ui">\n          <button load-more-clickable class="i-amphtml-list-load-more-button">\n            <label>See More</label>\n          </button>\n        </amp-list-load-more>\n      '])));
      }
      this.ampListElement_.appendChild(this.loadMoreButton_);
      setStyles(this.loadMoreButton_, {
        visibility: "hidden"
      });
    };
    _proto.initializeLoadMoreLoadingElement_ = function initializeLoadMoreLoadingElement_() {
      this.loadMoreLoadingElement_ = childElementByAttr(this.ampListElement_, "load-more-loading");
      if (!this.loadMoreLoadingElement_) {
        this.loadMoreLoadingElement_ = htmlFor(this.ampListElement_)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(['\n        <amp-list-load-more load-more-loading class="i-amphtml-default-ui">\n          <div class="i-amphtml-list-load-more-spinner"></div>\n        </amp-list-load-more>\n      '])));
      }
      this.ampListElement_.appendChild(this.loadMoreLoadingElement_);
    };
    _proto.getLoadMoreButton = function getLoadMoreButton() {
      if (!this.loadMoreButton_) {
        this.initializeLoadMoreButton_();
      }
      return dev().assertElement(this.loadMoreButton_);
    };
    _proto.getLoadMoreLoadingElement = function getLoadMoreLoadingElement() {
      if (!this.loadMoreLoadingElement_) {
        this.initializeLoadMoreLoadingElement_();
      }
      return this.loadMoreLoadingElement_;
    };
    _proto.getLoadMoreButtonClickable = function getLoadMoreButtonClickable() {
      if (!this.loadMoreButtonClickable_) {
        var loadMoreButton = this.getLoadMoreButton();
        this.loadMoreButtonClickable_ = childElementByAttr(loadMoreButton, "load-more-clickable") || loadMoreButton;
      }
      return this.loadMoreButtonClickable_;
    };
    _proto.initializeLoadMoreFailedElement_ = function initializeLoadMoreFailedElement_() {
      this.loadMoreFailedElement_ = childElementByAttr(this.ampListElement_, "load-more-failed");
      if (!this.loadMoreFailedElement_) {
        this.loadMoreFailedElement_ = htmlFor(this.ampListElement_)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(['\n        <amp-list-load-more load-more-failed class="i-amphtml-default-ui">\n          <div class="i-amphtml-list-load-more-message">\n            Unable to Load More\n          </div>\n          <button load-more-clickable\n            class="i-amphtml-list-load-more-button\n                  i-amphtml-list-load-more-button-has-icon\n                  i-amphtml-list-load-more-button-small"\n          >\n            <div class="i-amphtml-list-load-more-icon"></div>\n            <label>Retry</label>\n          </button>\n        </amp-list-load-more>\n      '])));
      }
      this.ampListElement_.appendChild(this.loadMoreFailedElement_);
    };
    _proto.getLoadMoreFailedElement = function getLoadMoreFailedElement() {
      if (!this.loadMoreFailedElement_) {
        this.initializeLoadMoreFailedElement_();
      }
      return dev().assertElement(this.loadMoreFailedElement_);
    };
    _proto.getLoadMoreFailedClickable = function getLoadMoreFailedClickable() {
      if (!this.loadMoreFailedClickable_) {
        var loadFailedElement = this.getLoadMoreFailedElement();
        this.loadMoreFailedClickable_ = childElementByAttr(loadFailedElement, "load-more-clickable") || loadFailedElement;
      }
      return this.loadMoreFailedClickable_;
    };
    _proto.initializeLoadMoreEndElement_ = function initializeLoadMoreEndElement_() {
      if (!this.loadMoreEndElement_) {
        this.loadMoreEndElement_ = childElementByAttr(this.ampListElement_, "load-more-end");
        if (this.loadMoreEndElement_) {
          this.ampListElement_.appendChild(this.loadMoreEndElement_);
        }
      }
    };
    _proto.getLoadMoreEndElement = function getLoadMoreEndElement() {
      return this.loadMoreEndElement_;
    };
    _proto.setLoadMoreEnded = function setLoadMoreEnded() {
      this.getLoadMoreFailedElement().classList.toggle("amp-visible", false);
      this.getLoadMoreButton().classList.toggle("amp-visible", false);
      this.getLoadMoreLoadingElement().classList.toggle("amp-visible", false);
      var loadMoreEndElement = this.getLoadMoreEndElement();
      if (loadMoreEndElement) {
        loadMoreEndElement.classList.toggle("amp-visible", true);
      }
    };
    _proto.toggleLoadMoreLoading = function toggleLoadMoreLoading(state) {
      if (state) {
        this.getLoadMoreFailedElement().classList.toggle("amp-visible", false);
      }
      var loadMoreEndElement = this.getLoadMoreEndElement();
      if (loadMoreEndElement) {
        loadMoreEndElement.classList.toggle("amp-visible", false);
      }
      this.getLoadMoreButton().classList.toggle("amp-visible", !state);
      this.getLoadMoreLoadingElement().classList.toggle("amp-visible", state);
    };
    _proto.setLoadMoreFailed = function setLoadMoreFailed() {
      var loadMoreFailedElement = this.getLoadMoreFailedElement();
      var loadMoreButton = this.getLoadMoreButton();
      if (!loadMoreFailedElement && !loadMoreButton) {
        return;
      }
      loadMoreFailedElement.classList.toggle("amp-visible", true);
      loadMoreButton.classList.toggle("amp-visible", false);
      this.getLoadMoreLoadingElement().classList.toggle("amp-visible", false);
    };
    _proto.hideAllLoadMoreElements = function hideAllLoadMoreElements() {
      this.getLoadMoreButton().classList.toggle("amp-visible", false);
      this.getLoadMoreLoadingElement().classList.toggle("amp-visible", false);
      this.getLoadMoreFailedElement().classList.toggle("amp-visible", false);
      if (this.getLoadMoreEndElement()) {
        this.getLoadMoreEndElement().classList.toggle("amp-visible", false);
      }
    };
    return LoadMoreService2;
  }();

  // build/amp-list-0.1.css.js
  var CSS2 = "amp-list.i-amphtml-list-fetch-error [fetch-error],amp-list[load-more] [load-more-button].amp-visible,amp-list[load-more] [load-more-end].amp-visible,amp-list[load-more] [load-more-failed].amp-visible,amp-list[load-more] [load-more-loading].amp-visible{display:block}amp-list[load-more] [load-more-button].i-amphtml-default-ui,amp-list[load-more] [load-more-failed].i-amphtml-default-ui,amp-list[load-more] [load-more-loading].i-amphtml-default-ui{height:80px;padding:12px 0px;box-sizing:border-box}.i-amphtml-list-load-more-button,amp-list[load-more] [load-more-button].i-amphtml-default-ui,amp-list[load-more] [load-more-failed].i-amphtml-default-ui,amp-list[load-more] [load-more-loading].i-amphtml-default-ui{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-weight:700;font-size:14px;text-transform:uppercase;letter-spacing:.1em;color:#333;text-align:center}amp-list[load-more] [load-more-loading].i-amphtml-default-ui .i-amphtml-list-load-more-spinner{display:inline-block;width:40px;height:40px;margin:8px 0px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='a'%3E%3Cstop stop-color='%23333' stop-opacity='.75'/%3E%3Cstop offset='100%25' stop-color='%23333' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M11 4.4A18 18 0 1 0 38 20' fill='none' stroke='url(%23a)' stroke-width='1.725'/%3E%3C/svg%3E\");animation:amp-list-load-more-spinner 1000ms linear infinite}@keyframes amp-list-load-more-spinner{0%{transform:rotate(0deg)}to{transform:rotate(360deg)}}.i-amphtml-list-load-more-button{border:none;display:inline-block;background-color:rgba(51,51,51,.75);color:#fff;margin:4px 0px;padding:0px 32px;box-sizing:border-box;height:48px;border-radius:24px}[load-more] div[role=list]{overflow-y:hidden}.i-amphtml-list-load-more-button,.i-amphtml-list-load-more-button label,.i-amphtml-list-load-more-icon{cursor:pointer}.i-amphtml-list-load-more-button:hover{background-color:#333}.i-amphtml-list-load-more-button.i-amphtml-list-load-more-button-small{margin:0px;padding:4px 16px;height:32px}.i-amphtml-list-load-more-button label{display:inline-block;vertical-align:middle;line-height:24px}amp-list[load-more] [load-more-failed].i-amphtml-default-ui .i-amphtml-list-load-more-message{line-height:24px}amp-list[load-more] [load-more-failed].i-amphtml-default-ui .i-amphtml-list-load-more-icon{height:24px;width:24px;display:inline-block;vertical-align:middle;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23fff' d='M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'/%3E%3C/svg%3E\")}\n/*# sourceURL=/extensions/amp-list/0.1/amp-list.css*/";

  // src/batched-json.js
  var UrlReplacementPolicy_Enum = {
    NONE: 0,
    OPT_IN: 1,
    ALL: 2
  };
  function batchFetchJsonFor(ampdoc2, element, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$expr = _options.expr, expr = _options$expr === void 0 ? "." : _options$expr, _options$urlReplaceme = _options.urlReplacement, urlReplacement = _options$urlReplaceme === void 0 ? UrlReplacementPolicy_Enum.NONE : _options$urlReplaceme, _options$refresh = _options.refresh, refresh = _options$refresh === void 0 ? false : _options$refresh, _options$xssiPrefix = _options.xssiPrefix, xssiPrefix = _options$xssiPrefix === void 0 ? void 0 : _options$xssiPrefix;
    assertHttpsUrl(element.getAttribute("src"), element);
    var xhr = Services.batchedXhrFor(ampdoc2.win);
    return requestForBatchFetch(element, urlReplacement, refresh).then(function(data) {
      return xhr.fetchJson(data.xhrUrl, data.fetchOpt);
    }).then(function(res) {
      return Services.xhrFor(ampdoc2.win).xssiJson(res, xssiPrefix);
    }).then(function(data) {
      if (data == null) {
        throw new Error("Response is undefined.");
      }
      return getValueForExpr(data, expr || ".");
    }).catch(function(err) {
      throw user().createError("failed fetching JSON data", err);
    });
  }
  function requestForBatchFetch(element, replacement, refresh) {
    var url = element.getAttribute("src");
    var urlReplacements = Services.urlReplacementsForDoc(element);
    var promise = replacement >= UrlReplacementPolicy_Enum.OPT_IN ? urlReplacements.expandUrlAsync(url) : Promise.resolve(url);
    return promise.then(function(xhrUrl) {
      if (replacement == UrlReplacementPolicy_Enum.OPT_IN) {
        var invalid = urlReplacements.collectDisallowedVarsSync(element);
        if (invalid.length > 0) {
          throw user().createError("URL variable substitutions in CORS fetches from dynamic URLs (e.g. via amp-bind) require opt-in. " + ('Please add data-amp-replace="' + invalid.join(" ") + '" to the ') + ("<" + element.tagName + "> element. See https://bit.ly/amp-var-subs."));
        }
      }
      var fetchOpt = {};
      if (element.hasAttribute("credentials")) {
        fetchOpt.credentials = element.getAttribute("credentials");
      }
      if (refresh) {
        fetchOpt.cache = "reload";
      }
      return {
        "xhrUrl": xhrUrl,
        "fetchOpt": fetchOpt
      };
    });
  }

  // src/pass.js
  var Pass = /* @__PURE__ */ function() {
    function Pass2(win, handler, opt_defaultDelay) {
      var _this = this;
      this.timer_ = Services.timerFor(win);
      this.handler_ = handler;
      this.defaultDelay_ = opt_defaultDelay || 0;
      this.scheduled_ = -1;
      this.nextTime_ = 0;
      this.running_ = false;
      this.boundPass_ = function() {
        _this.pass_();
      };
    }
    var _proto = Pass2.prototype;
    _proto.isPending = function isPending() {
      return this.scheduled_ != -1;
    };
    _proto.schedule = function schedule(opt_delay) {
      var delay = opt_delay || this.defaultDelay_;
      if (this.running_ && delay < 10) {
        delay = 10;
      }
      var nextTime = Date.now() + delay;
      if (!this.isPending() || nextTime - this.nextTime_ < -10) {
        this.cancel();
        this.nextTime_ = nextTime;
        this.scheduled_ = this.timer_.delay(this.boundPass_, delay);
        return true;
      }
      return false;
    };
    _proto.pass_ = function pass_() {
      this.scheduled_ = -1;
      this.nextTime_ = 0;
      this.running_ = true;
      this.handler_();
      this.running_ = false;
    };
    _proto.cancel = function cancel() {
      if (this.isPending()) {
        this.timer_.cancel(this.scheduled_);
        this.scheduled_ = -1;
      }
    };
    return Pass2;
  }();

  // src/ssr-template-helper.js
  var SsrTemplateHelper = /* @__PURE__ */ function() {
    function SsrTemplateHelper2(sourceComponent, viewer, templates) {
      this.viewer_ = viewer;
      this.templates_ = templates;
      this.sourceComponent_ = sourceComponent;
    }
    var _proto = SsrTemplateHelper2.prototype;
    _proto.isEnabled = function isEnabled() {
      var ampdoc2 = this.viewer_.getAmpDoc();
      if (ampdoc2.isSingleDoc()) {
        var htmlElement = ampdoc2.getRootNode().documentElement;
        if (htmlElement.hasAttribute("allow-viewer-render-template")) {
          return this.viewer_.hasCapability("viewerRenderTemplate");
        }
      }
      return false;
    };
    _proto.assertTrustedViewer = function assertTrustedViewer(element) {
      return this.viewer_.isTrustedViewer().then(function(trusted) {
        userAssert2(trusted, "Refused to attempt SSR in untrusted viewer: ", element);
      });
    };
    _proto.ssr = function ssr(element, request, opt_templates, opt_attributes) {
      var _this = this;
      if (opt_templates === void 0) {
        opt_templates = null;
      }
      if (opt_attributes === void 0) {
        opt_attributes = {};
      }
      var mustacheTemplate;
      if (!opt_templates) {
        mustacheTemplate = this.templates_.maybeFindTemplate(element);
      }
      return this.assertTrustedViewer(element).then(function() {
        return _this.viewer_.sendMessageAwaitResponse("viewerRenderTemplate", _this.buildPayload_(request, mustacheTemplate, opt_templates, opt_attributes));
      });
    };
    _proto.applySsrOrCsrTemplate = function applySsrOrCsrTemplate(element, data) {
      var _this2 = this;
      var renderTemplatePromise;
      if (this.isEnabled()) {
        userAssert2(typeof data["html"] === "string", "Skipping template rendering due to failed fetch");
        renderTemplatePromise = this.assertTrustedViewer(element).then(function() {
          return _this2.templates_.findAndSetHtmlForTemplate(element, data["html"]);
        });
      } else if (isArray(data)) {
        renderTemplatePromise = this.templates_.findAndRenderTemplateArray(element, data);
      } else {
        renderTemplatePromise = this.templates_.findAndRenderTemplate(element, data);
      }
      return renderTemplatePromise;
    };
    _proto.buildPayload_ = function buildPayload_(request, mustacheTemplate, opt_templates, opt_attributes) {
      if (opt_attributes === void 0) {
        opt_attributes = {};
      }
      var ampComponent = dict({
        "type": this.sourceComponent_
      });
      var successTemplateKey = "successTemplate";
      var successTemplate = opt_templates && opt_templates[successTemplateKey] ? opt_templates[successTemplateKey] : mustacheTemplate;
      if (successTemplate) {
        ampComponent[successTemplateKey] = {
          "type": "amp-mustache",
          "payload": successTemplate.innerHTML
        };
      }
      var errorTemplateKey = "errorTemplate";
      var errorTemplate = opt_templates && opt_templates[errorTemplateKey] ? opt_templates[errorTemplateKey] : null;
      if (errorTemplate) {
        ampComponent[errorTemplateKey] = {
          "type": "amp-mustache",
          "payload": errorTemplate.innerHTML
        };
      }
      if (opt_attributes) {
        Object.assign(ampComponent, opt_attributes);
      }
      var data = dict({
        "originalRequest": toStructuredCloneable(request.xhrUrl, request.fetchOpt),
        "ampComponent": ampComponent
      });
      return data;
    };
    return SsrTemplateHelper2;
  }();

  // extensions/amp-list/0.1/amp-list.js
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
  var TAG2 = "amp-list";
  var TABBABLE_ELEMENTS_QUERY = 'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"]), audio[controls], video[controls], [contenteditable]:not([contenteditable="false"])';
  var AMP_STATE_URI_SCHEME = "amp-state:";
  var RenderItems;
  var AmpList = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpList2, _AMP$BaseElement);
    var _super = _createSuper(AmpList2);
    function AmpList2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.container_ = null;
      _this.viewport_ = null;
      _this.fallbackDisplayed_ = false;
      _this.renderPass_ = new Pass(_this.win, function() {
        return _this.doRenderPass_();
      });
      _this.renderItems_ = null;
      _this.renderedItems_ = null;
      _this.templates_ = null;
      _this.layoutCompleted_ = false;
      _this.enableManagedResizing_ = false;
      _this.initialSrc_ = null;
      _this.diffablePlaceholder_ = null;
      _this.bind_ = null;
      _this.loadMoreEnabled_ = false;
      _this.loadMoreService_ = null;
      _this.loadMoreSrc_ = null;
      _this.resizeFailed_ = false;
      _this.unlistenAutoLoadMore_ = null;
      _this.registerAction("refresh", function() {
        if (_this.layoutCompleted_) {
          _this.resetIfNecessary_();
          return _this.fetchList_({
            refresh: true
          });
        }
      });
      _this.registerAction("changeToLayoutContainer", function() {
        return _this.changeToLayoutContainer_();
      });
      _this.ssrTemplateHelper_ = null;
      _this.action_ = null;
      _this.owners_ = null;
      return _this;
    }
    var _proto = AmpList2.prototype;
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      if (layout === Layout_Enum.CONTAINER) {
        var doc = this.element.ownerDocument;
        var isEmail = doc && isAmp4Email(doc);
        var hasPlaceholder = this.getPlaceholder() || this.element.hasAttribute("diffable");
        if (isEmail) {
          if (!hasPlaceholder) {
            user().warn(TAG2, "amp-list[layout=container] should have a placeholder to establish an initial size. See https://go.amp.dev/c/amp-list/#placeholder-and-fallback. %s", this.element);
          }
          return this.enableManagedResizing_ = true;
        }
        userAssert2(isExperimentOn(this.win, "amp-list-layout-container"), 'Experiment "amp-list-layout-container" is not turned on.');
        userAssert2(hasPlaceholder, "amp-list[layout=container] should have a placeholder to establish an initial size. See https://go.amp.dev/c/amp-list/#placeholder-and-fallback. %s", this.element);
        return this.enableManagedResizing_ = true;
      }
      return isLayoutSizeDefined(layout);
    };
    _proto.buildCallback = function buildCallback() {
      var _this2 = this;
      this.templates_ = Services.templatesForDoc(this.element);
      this.action_ = Services.actionServiceForDoc(this.element);
      this.owners_ = Services.ownersForDoc(this.element);
      this.action_.addToAllowlist("AMP-LIST", ["changeToLayoutContainer", "refresh"], ["email"]);
      this.viewport_ = this.getViewport();
      var viewer = Services.viewerForDoc(this.getAmpDoc());
      this.ssrTemplateHelper_ = new SsrTemplateHelper(TAG2, viewer, this.templates_);
      this.loadMoreEnabled_ = this.element.hasAttribute("load-more");
      userAssert2(!(this.loadMoreEnabled_ && this.enableManagedResizing_), "%s initialized with layout=container does not support infinite scrolling with [load-more]. %s", TAG2, this.element);
      this.initialSrc_ = this.element.getAttribute("src");
      if (this.element.hasAttribute("diffable")) {
        this.diffablePlaceholder_ = this.queryDiffablePlaceholder_();
        if (this.diffablePlaceholder_) {
          this.container_ = this.diffablePlaceholder_;
        } else {
          user().warn(TAG2, "Could not find child div for diffing.", this.element);
        }
      }
      if (!this.container_) {
        this.container_ = this.createContainer_();
        this.element.appendChild(this.container_);
      }
      if (this.element.hasAttribute("auto-resize")) {
        user().warn(TAG2, "auto-resize attribute is deprecated and its behavior is disabled. This feature will be relaunched under a new name soon. Please see https://github.com/ampproject/amphtml/issues/18849");
      }
      setDOM["KEY"] = DIFF_KEY;
      setDOM["IGNORE"] = DIFF_IGNORE;
      Services.bindForDocOrNull(this.element).then(function(bind) {
        _this2.bind_ = bind;
      });
    };
    _proto.reconstructWhenReparented = function reconstructWhenReparented() {
      return false;
    };
    _proto.layoutCallback = function layoutCallback() {
      var _this3 = this;
      this.layoutCompleted_ = true;
      var placeholder = this.getPlaceholder();
      if (placeholder) {
        this.attemptToFit_(placeholder);
      } else if (this.diffablePlaceholder_) {
        this.attemptToFit_(dev().assertElement(this.container_));
      }
      this.viewport_.onResize(function() {
        _this3.maybeResizeListToFitItems_();
      });
      if (this.loadMoreEnabled_) {
        this.initializeLoadMoreElements_();
      }
      return this.fetchList_();
    };
    _proto.queryDiffablePlaceholder_ = function queryDiffablePlaceholder_() {
      var selector = this.element.hasAttribute("single-item") ? "> div" : "> div[role=list]";
      selector += ":not([placeholder]):not([fallback]):not([fetch-error])";
      return scopedQuerySelector(this.element, selector);
    };
    _proto.initializeLoadMoreElements_ = function initializeLoadMoreElements_() {
      var _this4 = this;
      return this.mutateElement(function() {
        _this4.getLoadMoreService_().initializeLoadMore();
        var overflowElement = _this4.getOverflowElement();
        if (overflowElement) {
          toggle(overflowElement, false);
        }
        _this4.element.warnOnMissingOverflow = false;
      }).then(function() {
        _this4.adjustContainerForLoadMoreButton_();
        listen(_this4.getLoadMoreService_().getLoadMoreFailedClickable(), "click", function() {
          return _this4.loadMoreCallback_(true, true);
        });
        listen(_this4.getLoadMoreService_().getLoadMoreButtonClickable(), "click", function() {
          return _this4.loadMoreCallback_(false, true);
        });
      });
    };
    _proto.maybeResizeListToFitItems_ = function maybeResizeListToFitItems_() {
      if (this.loadMoreEnabled_) {
        this.attemptToFitLoadMore_(dev().assertElement(this.container_));
      } else {
        return this.attemptToFit_(dev().assertElement(this.container_));
      }
    };
    _proto.getLoadMoreService_ = function getLoadMoreService_() {
      if (!this.loadMoreService_) {
        this.loadMoreService_ = new LoadMoreService(this.element);
      }
      return this.loadMoreService_;
    };
    _proto.adjustContainerForLoadMoreButton_ = function adjustContainerForLoadMoreButton_() {
      var _this5 = this;
      var buttonHeight;
      var listHeight;
      return this.measureMutateElement(function() {
        buttonHeight = _this5.getLoadMoreService_().getLoadMoreButton().offsetHeight;
        listHeight = _this5.element.offsetHeight;
      }, function() {
        setStyles(dev().assertElement(_this5.container_), {
          "max-height": "calc(100% - " + px(buttonHeight) + ")"
        });
        _this5.element.applySize(listHeight + buttonHeight);
      });
    };
    _proto.isAmpStateSrc_ = function isAmpStateSrc_(src) {
      return src.startsWith(AMP_STATE_URI_SCHEME);
    };
    _proto.getAmpStateJson_ = function getAmpStateJson_(src) {
      var _this6 = this;
      return Services.bindForDocOrNull(this.element).then(function(bind) {
        userAssert2(bind, '"amp-state:" URLs require amp-bind to be installed.');
        userAssert2(!_this6.ssrTemplateHelper_.isEnabled(), '[amp-list]: "amp-state" URIs cannot be used in SSR mode.');
        var ampStatePath = src.slice(AMP_STATE_URI_SCHEME.length);
        return bind.getStateAsync(ampStatePath).catch(function(err) {
          var stateKey = ampStatePath.split(".")[0];
          user().error(TAG2, "'amp-state' element with id '" + stateKey + "' was not found.");
          throw err;
        });
      }).then(function(json) {
        userAssert2(typeof json !== "undefined", "[amp-list] No data was found at provided uri: " + src);
        return json;
      });
    };
    _proto.getAmpScriptJson_ = function getAmpScriptJson_(src) {
      var _this7 = this;
      return resolvedPromise().then(function() {
        userAssert2(!_this7.ssrTemplateHelper_.isEnabled(), '[amp-list]: "amp-script" URIs cannot be used in SSR mode.');
        return Services.scriptForDocOrNull(_this7.element).then(function(ampScriptService) {
          return ampScriptService.fetch(src);
        });
      }).then(function(json) {
        userAssert2(typeof json === "object", "[amp-list] " + src + " must return json, but instead returned: " + typeof json);
        return json;
      });
    };
    _proto.mutatedAttributesCallback = function mutatedAttributesCallback(mutations) {
      var _this8 = this;
      dev().info(TAG2, "mutate:", this.element, mutations);
      var promise;
      var renderLocalData = function renderLocalData2(data) {
        _this8.element.setAttribute("src", "");
        userAssert2(!_this8.ssrTemplateHelper_.isEnabled(), '[amp-list] "[src]" may not be bound in SSR mode.');
        var array = isArray(data) ? data : [data];
        _this8.resetIfNecessary_(false);
        return _this8.scheduleRender_(array, false);
      };
      var src = mutations["src"];
      if (src !== void 0) {
        if (typeof src === "string") {
          if (this.layoutCompleted_) {
            this.resetIfNecessary_();
            promise = this.fetchList_();
          }
        } else if (typeof src === "object") {
          promise = renderLocalData(src);
        } else {
          this.user().error(TAG2, 'Unexpected "src" type: ' + src);
        }
      }
      var isLayoutContainer = mutations["is-layout-container"];
      if (isLayoutContainer) {
        this.changeToLayoutContainer_();
      }
      if (getMode().test) {
        return promise;
      }
    };
    _proto.createContainer_ = function createContainer_() {
      var container = this.win.document.createElement("div");
      this.setRoleAttribute_(container, "list");
      if (!this.loadMoreEnabled_ && !this.enableManagedResizing_) {
        applyFillContent(container, true);
      }
      return container;
    };
    _proto.addElementsToContainer_ = function addElementsToContainer_(elements, container) {
      var _this9 = this;
      elements.forEach(function(element) {
        if (!element.hasAttribute("role")) {
          _this9.setRoleAttribute_(element, "listitem");
        }
        container.appendChild(element);
      });
    };
    _proto.setRoleAttribute_ = function setRoleAttribute_(element, value) {
      if (!this.element.hasAttribute("single-item")) {
        element.setAttribute("role", value);
      }
    };
    _proto.toggleFallback_ = function toggleFallback_(show) {
      if (!show && !this.fallbackDisplayed_) {
        return;
      }
      this.toggleFallback(show);
      this.fallbackDisplayed_ = show;
    };
    _proto.resetIfNecessary_ = function resetIfNecessary_(isFetch) {
      var _this10 = this;
      if (isFetch === void 0) {
        isFetch = true;
      }
      if (isFetch && this.element.hasAttribute("reset-on-refresh") || this.element.getAttribute("reset-on-refresh") === "always") {
        var reset = function reset2() {
          _this10.togglePlaceholder(true);
          var forceLoadingIndicator = _this10.element.hasAttribute("reset-on-refresh");
          _this10.toggleLoading(true, forceLoadingIndicator);
          _this10.toggleFallback_(false);
          if (_this10.bind_) {
            var removed = toArray(_this10.container_.children);
            _this10.bind_.rescan([], removed, {
              "fast": true,
              "update": false
            });
          }
          _this10.owners_.scheduleUnlayout(_this10.element, dev().assertElement(_this10.container_));
          removeChildren(dev().assertElement(_this10.container_));
        };
        if (!this.loadMoreEnabled_ && this.enableManagedResizing_) {
          this.lockHeightAndMutate_(reset);
          return;
        }
        this.mutateElement(function() {
          reset();
          if (_this10.loadMoreEnabled_) {
            _this10.getLoadMoreService_().hideAllLoadMoreElements();
          }
        });
      }
    };
    _proto.computeListItems_ = function computeListItems_(data) {
      var itemsExpr = this.element.getAttribute("items") || "items";
      var items = data;
      if (itemsExpr != ".") {
        items = getValueForExpr(data, itemsExpr);
      }
      userAssert2(typeof items !== "undefined", 'Response must contain an array or object at "%s". %s', itemsExpr, this.element);
      if (this.element.hasAttribute("single-item")) {
        if (!isArray(items)) {
          items = [items];
        } else {
          user().warn(TAG2, 'Expected response to contain a non-array Object due to "single-item" attribute.', this.element);
        }
      }
      items = user().assertArray(items);
      if (this.element.hasAttribute("max-items")) {
        items = this.truncateToMaxLen_(items);
      }
      return items;
    };
    _proto.triggerFetchErrorEvent_ = function triggerFetchErrorEvent_(error) {
      var event = error ? createCustomEvent(this.win, TAG2 + ".error", dict({
        "response": error.response
      })) : null;
      this.action_.trigger(this.element, "fetch-error", event, ActionTrust_Enum.LOW);
    };
    _proto.fetchList_ = function fetchList_(options) {
      var _this11 = this;
      if (options === void 0) {
        options = {};
      }
      var _options = options, _options$append = _options.append, append = _options$append === void 0 ? false : _options$append, _options$refresh = _options.refresh, refresh = _options$refresh === void 0 ? false : _options$refresh;
      var elementSrc = this.element.getAttribute("src");
      if (!elementSrc) {
        return resolvedPromise();
      }
      var fetch;
      if (this.ssrTemplateHelper_.isEnabled()) {
        fetch = this.ssrTemplate_(refresh);
      } else {
        if (this.isAmpStateSrc_(elementSrc)) {
          fetch = this.getAmpStateJson_(elementSrc);
        } else if (isAmpScriptUri(elementSrc)) {
          fetch = this.getAmpScriptJson_(elementSrc);
        } else {
          fetch = this.prepareAndSendFetch_(refresh);
        }
        fetch = fetch.then(function(data) {
          if (elementSrc !== _this11.element.getAttribute("src")) {
            return;
          }
          var items = _this11.computeListItems_(data);
          if (_this11.loadMoreEnabled_) {
            _this11.updateLoadMoreSrc_(data);
          }
          return _this11.scheduleRender_(items, append, data).then(function() {
            return _this11.maybeSetLoadMore_();
          });
        });
      }
      return fetch.catch(function(error) {
        if (append) {
          throw error;
        }
        _this11.triggerFetchErrorEvent_(error);
        _this11.showFallback_();
        throw error;
      });
    };
    _proto.truncateToMaxLen_ = function truncateToMaxLen_(items) {
      var maxLen = parseInt(this.element.getAttribute("max-items"), 10);
      if (maxLen < items.length) {
        items = items.slice(0, maxLen);
      }
      return items;
    };
    _proto.updateLoadMoreSrc_ = function updateLoadMoreSrc_(data) {
      var nextExpr = this.element.getAttribute("load-more-bookmark") || "load-more-src";
      this.loadMoreSrc_ = getValueForExpr(data, nextExpr);
    };
    _proto.ssrTemplate_ = function ssrTemplate_(refresh) {
      var _this12 = this;
      var elementSrc = this.element.getAttribute("src");
      var request;
      return requestForBatchFetch(this.element, this.getPolicy_(), refresh).then(function(r) {
        request = r;
        request.xhrUrl = setupInput(_this12.win, request.xhrUrl, request.fetchOpt);
        request.fetchOpt = setupAMPCors(_this12.win, request.xhrUrl, request.fetchOpt);
        setupJsonFetchInit(r.fetchOpt);
        var attributes = dict({
          "ampListAttributes": {
            "items": _this12.element.getAttribute("items") || "items",
            "singleItem": _this12.element.hasAttribute("single-item"),
            "maxItems": _this12.element.getAttribute("max-items")
          }
        });
        return _this12.ssrTemplateHelper_.ssr(_this12.element, request, null, attributes);
      }).then(function(response) {
        userAssert2(response, "Failed fetching JSON data: XHR Failed fetching " + ("(" + _this12.buildElidedUrl_(request) + "): received no response."));
        var init = response["init"];
        if (init) {
          var status = init["status"];
          if (status >= 300) {
            throw user().createError("Failed fetching JSON data (" + _this12.buildElidedUrl_(request) + "): HTTP error", status);
          }
        }
        userAssert2(typeof response["html"] === "string", "Failed fetching JSON data: XHR Failed fetching " + ("(" + _this12.buildElidedUrl_(request) + "): Expected response with ") + "format {html: <string>}. Received: ", response);
        request.fetchOpt.responseType = "application/json";
        return response;
      }, function(error) {
        throw user().createError("Failed fetching JSON data: XHR Failed fetching " + ("(" + _this12.buildElidedUrl_(request) + ")"), error);
      }).then(function(data) {
        if (elementSrc !== _this12.element.getAttribute("src")) {
          return;
        }
        return _this12.scheduleRender_(data, false);
      });
    };
    _proto.buildElidedUrl_ = function buildElidedUrl_(request) {
      var url = Services.urlForDoc(this.element).parse(request.xhrUrl);
      return url.origin + "/...";
    };
    _proto.scheduleRender_ = function scheduleRender_(data, opt_append, opt_payload) {
      var deferred = new Deferred();
      var promise = deferred.promise, rejecter = deferred.reject, resolver = deferred.resolve;
      if (!this.renderItems_) {
        this.renderPass_.schedule();
      }
      this.renderItems_ = {
        data: data,
        resolver: resolver,
        rejecter: rejecter,
        append: opt_append,
        payload: opt_payload
      };
      if (this.renderedItems_ && opt_append) {
        this.renderItems_.payload = opt_payload || {};
      }
      return promise;
    };
    _proto.doRenderPass_ = function doRenderPass_() {
      var _this13 = this;
      var current = this.renderItems_;
      user().fine(TAG2, "Rendering list", this.element, "with data", current.data);
      devAssert2(current && current.data, "Nothing to render.");
      var scheduleNextPass = function scheduleNextPass2() {
        if (_this13.renderItems_ !== current) {
          _this13.renderPass_.schedule(1);
        } else {
          _this13.renderedItems_ = _this13.renderItems_.data;
          _this13.renderItems_ = null;
        }
      };
      var onFulfilledCallback = function onFulfilledCallback2() {
        scheduleNextPass();
        current.resolver();
      };
      var onRejectedCallback = function onRejectedCallback2() {
        scheduleNextPass();
        current.rejecter();
      };
      var isSSR = this.ssrTemplateHelper_.isEnabled();
      var renderPromise = this.ssrTemplateHelper_.applySsrOrCsrTemplate(this.element, current.data).then(function(result) {
        return _this13.updateBindings_(result, current.append);
      }).then(function(elements) {
        return _this13.render_(elements, current.append);
      });
      if (!isSSR) {
        var payload = current.payload;
        renderPromise = renderPromise.then(function() {
          return _this13.maybeRenderLoadMoreTemplates_(payload);
        });
      }
      renderPromise.then(onFulfilledCallback, onRejectedCallback);
    };
    _proto.maybeRenderLoadMoreTemplates_ = function maybeRenderLoadMoreTemplates_(data) {
      if (this.loadMoreEnabled_) {
        var promises = [];
        promises.push(this.maybeRenderLoadMoreElement_(this.getLoadMoreService_().getLoadMoreButton(), data));
        promises.push(this.maybeRenderLoadMoreElement_(this.getLoadMoreService_().getLoadMoreEndElement(), data));
        return Promise.all(promises);
      } else {
        return resolvedPromise();
      }
    };
    _proto.maybeRenderLoadMoreElement_ = function maybeRenderLoadMoreElement_(elem, data) {
      var _this14 = this;
      if (elem && this.templates_.hasTemplate(elem)) {
        return this.templates_.findAndRenderTemplate(elem, data).then(function(newContents) {
          return _this14.mutateElement(function() {
            removeChildren(dev().assertElement(elem));
            elem.appendChild(newContents);
          });
        });
      }
      return resolvedPromise();
    };
    _proto.updateBindings_ = function updateBindings_(elementOrElements, append) {
      var _this15 = this;
      var elements = isArray(elementOrElements) ? elementOrElements : [elementOrElements];
      var binding = this.element.getAttribute("binding");
      if (binding === "no") {
        return Promise.resolve(elements);
      }
      var hasBindings = elements.some(function(el) {
        return el.hasAttribute("i-amphtml-binding") || !!el.querySelector("[i-amphtml-binding]");
      });
      if (!hasBindings) {
        return Promise.resolve(elements);
      }
      if (!binding) {
        user().warn(TAG2, 'Missing "binding" attribute. Using binding="refresh" is recommended for performance.');
      }
      var updateWith = function updateWith2(bind) {
        var removedElements = append ? [] : [_this15.container_];
        return bind.rescan(elements, removedElements, {
          "fast": true,
          "update": true
        }).then(function() {
          return elements;
        }, function() {
          return elements;
        });
      };
      if (binding && binding.startsWith("refresh")) {
        var afterFirstMutate = this.bind_ && this.bind_.signals().get("FIRST_MUTATE");
        if (afterFirstMutate) {
          return updateWith(this.bind_);
        } else {
          if (!this.element.hasAttribute("diffable")) {
            this.scanForBindings_(elements, []);
          }
          return Promise.resolve(elements);
        }
      }
      return Services.bindForDocOrNull(this.element).then(function(bind) {
        if (bind) {
          return updateWith(bind);
        } else {
          return Promise.resolve(elements);
        }
      });
    };
    _proto.scanForBindings_ = function scanForBindings_(addedElements, removedElements) {
      var binding = this.element.getAttribute("binding");
      if (!binding || !binding.startsWith("refresh")) {
        return;
      }
      Services.bindForDocOrNull(this.element).then(function(bind) {
        if (bind) {
          var update = binding == "refresh-evaluate" ? "evaluate" : false;
          bind.rescan(addedElements, removedElements, {
            "fast": true,
            "update": update
          });
        }
      });
    };
    _proto.render_ = function render_(elements, opt_append) {
      var _this16 = this;
      if (opt_append === void 0) {
        opt_append = false;
      }
      var container = dev().assertElement(this.container_);
      var renderAndResize = function renderAndResize2() {
        _this16.hideFallbackAndPlaceholder_();
        if (_this16.element.hasAttribute("diffable")) {
          _this16.diff_(container, elements);
          _this16.scanForBindings_([container], [container]);
        } else {
          if (!opt_append) {
            _this16.owners_.scheduleUnlayout(_this16.element, container);
            removeChildren(container);
          }
          _this16.addElementsToContainer_(elements, container);
        }
        var event = createCustomEvent(_this16.win, AmpEvents_Enum.DOM_UPDATE, null, {
          bubbles: true
        });
        _this16.container_.dispatchEvent(event);
        var r = _this16.element.getResources().getResourceForElement(_this16.element);
        r.resetPendingChangeSize();
        return _this16.maybeResizeListToFitItems_();
      };
      if (!this.loadMoreEnabled_ && this.enableManagedResizing_) {
        return this.lockHeightAndMutate_(function() {
          var promise = renderAndResize() || Promise.resolve(true);
          promise.then(function(resized) {
            return resized ? _this16.unlockHeightInsideMutate_() : null;
          });
        });
      }
      return this.mutateElement(renderAndResize);
    };
    _proto.diff_ = function diff_(container, elements) {
      var newContainer = this.createContainer_();
      this.addElementsToContainer_(elements, newContainer);
      if (this.diffablePlaceholder_) {
        this.markContainerForDiffing_(container);
      }
      var ignored = setDOM(container, newContainer);
      for (var i = 0; i < ignored.length; i += 2) {
        var before = dev().assertElement(ignored[i]);
        var after = dev().assertElement(ignored[i + 1]);
        this.manuallyDiffElement_(before, after);
      }
    };
    _proto.markContainerForDiffing_ = function markContainerForDiffing_(container) {
      var key = -1;
      var elements = toArray(container.querySelectorAll(".i-amphtml-element"));
      elements.forEach(function(element) {
        markElementForDiffing(element, function() {
          return String(key--);
        });
      });
    };
    _proto.manuallyDiffElement_ = function manuallyDiffElement_(before, after) {
      devAssert2(before.nodeName == after.nodeName, "Mismatched nodeName.");
      var replacementAttrs = DIFFABLE_AMP_ELEMENTS[before.nodeName];
      if (!replacementAttrs) {
        return;
      }
      var shouldReplace = replacementAttrs.some(function(attr) {
        return before.getAttribute(attr) !== after.getAttribute(attr);
      });
      if (shouldReplace) {
        before.parentElement.replaceChild(after, before);
      } else {
        for (var i = 0; i < after.classList.length; i++) {
          before.classList.add(after.classList[i]);
        }
        for (var _i = 0; _i < before.classList.length; _i++) {
          var c = before.classList[_i];
          if (!c.startsWith("i-amphtml-") && !after.classList.contains(c)) {
            before.classList.remove(c);
          }
        }
        if (after.hasAttribute("style")) {
          var afterStyle = after.getAttribute("style");
          before.setAttribute("style", (before.getAttribute("style") || "") + ";" + afterStyle);
        }
      }
    };
    _proto.lockHeightAndMutate_ = function lockHeightAndMutate_(mutate) {
      var _this17 = this;
      if (!this.enableManagedResizing_ || this.loadMoreEnabled_) {
        dev().error(TAG2, "%s initialized with layout=container does not support infinite scrolling with [load-more]. %s", this.element);
        return resolvedPromise();
      }
      var currentHeight;
      return this.measureMutateElement(function() {
        currentHeight = _this17.element.offsetHeight;
      }, function() {
        setImportantStyles(_this17.element, {
          "height": currentHeight + "px",
          "overflow": "hidden"
        });
        return mutate();
      });
    };
    _proto.unlockHeightInsideMutate_ = function unlockHeightInsideMutate_() {
      devAssert2(this.enableManagedResizing_ && !this.loadMoreEnabled_, "%s initialized with layout=container does not support infinite scrolling with [load-more]. %s", TAG2, this.element);
      setImportantStyles(this.element, {
        "height": "",
        "overflow": ""
      });
    };
    _proto.attemptToFit_ = function attemptToFit_(target) {
      var _this18 = this;
      if (this.element.getAttribute("layout") == Layout_Enum.CONTAINER && !this.enableManagedResizing_) {
        return Promise.resolve(true);
      }
      return this.measureElement(function() {
        var targetHeight = target.scrollHeight;
        var height = _this18.element.offsetHeight;
        if (targetHeight > height) {
          return _this18.attemptChangeHeight(targetHeight).then(function() {
            return true;
          }, function() {
            return false;
          });
        }
        return true;
      });
    };
    _proto.attemptToFitLoadMore_ = function attemptToFitLoadMore_(target) {
      var element = !!this.loadMoreSrc_ ? this.getLoadMoreService_().getLoadMoreButton() : this.getLoadMoreService_().getLoadMoreEndElement();
      this.attemptToFitLoadMoreElement_(element, target);
    };
    _proto.attemptToFitLoadMoreElement_ = function attemptToFitLoadMoreElement_(element, target) {
      var _this19 = this;
      if (this.element.getAttribute("layout") == Layout_Enum.CONTAINER) {
        return;
      }
      this.measureElement(function() {
        var targetHeight = target.scrollHeight;
        var height = _this19.element.offsetHeight;
        var loadMoreHeight = element ? element.offsetHeight : 0;
        if (targetHeight + loadMoreHeight > height) {
          _this19.attemptChangeHeight(targetHeight + loadMoreHeight).then(function() {
            _this19.resizeFailed_ = false;
            if (_this19.element.getAttribute("load-more") === "auto") {
              _this19.maybeLoadMoreItems_();
            }
            setStyles(dev().assertElement(_this19.container_), {
              "max-height": ""
            });
          }).catch(function() {
            _this19.resizeFailed_ = true;
            _this19.adjustContainerForLoadMoreButton_();
          });
        }
      });
    };
    _proto.undoLayout_ = function undoLayout_(layoutString) {
      var layout = parseLayout(layoutString);
      var layoutClass = getLayoutClass(devAssert2(layout));
      this.element.classList.remove(layoutClass, "i-amphtml-layout-size-defined");
      if ([Layout_Enum.FIXED, Layout_Enum.FLEX_ITEM, Layout_Enum.FLUID, Layout_Enum.INTRINSIC, Layout_Enum.RESPONSIVE].includes(layout)) {
        setStyles(this.element, {
          width: "",
          height: ""
        });
      } else if (layout == Layout_Enum.FIXED_HEIGHT) {
        setStyles(this.element, {
          height: ""
        });
      }
      this.element.applySize();
    };
    _proto.changeToLayoutContainer_ = function changeToLayoutContainer_() {
      var _this20 = this;
      if (this.enableManagedResizing_) {
        user().warn(TAG2, "[is-layout-container] and changeToLayoutContainer are ineffective when an amp-list initially sets layout=container", this.element);
        return resolvedPromise();
      }
      var previousLayout = this.element.getAttribute("i-amphtml-layout");
      if (previousLayout == Layout_Enum.CONTAINER) {
        return resolvedPromise();
      }
      return this.mutateElement(function() {
        _this20.undoLayout_(previousLayout);
        _this20.container_.classList.remove("i-amphtml-fill-content", "i-amphtml-replaced-content");
        var overflowElement = _this20.getOverflowElement();
        if (overflowElement) {
          toggle(overflowElement, false);
        }
        _this20.element.setAttribute("layout", "container");
        _this20.element.setAttribute("i-amphtml-layout", "container");
        _this20.element.classList.add("i-amphtml-layout-container");
      });
    };
    _proto.maybeSetLoadMore_ = function maybeSetLoadMore_() {
      if (this.loadMoreEnabled_) {
        return this.setLoadMore_();
      }
      return resolvedPromise();
    };
    _proto.setLoadMore_ = function setLoadMore_() {
      var _this21 = this;
      if (this.loadMoreSrc_) {
        var autoLoad = this.element.getAttribute("load-more") === "auto";
        if (autoLoad) {
          this.setupLoadMoreAuto_();
        }
        return this.mutateElement(function() {
          _this21.getLoadMoreService_().toggleLoadMoreLoading(false);
          setStyles(_this21.getLoadMoreService_().getLoadMoreButton(), {
            visibility: ""
          });
        });
      } else {
        return this.mutateElement(function() {
          return _this21.getLoadMoreService_().setLoadMoreEnded();
        });
      }
    };
    _proto.loadMoreCallback_ = function loadMoreCallback_(opt_reload, opt_fromClick) {
      var _this22 = this;
      if (opt_reload === void 0) {
        opt_reload = false;
      }
      if (opt_fromClick === void 0) {
        opt_fromClick = false;
      }
      if (!!this.loadMoreSrc_) {
        this.element.setAttribute("src", this.loadMoreSrc_);
        this.loadMoreSrc_ = null;
      } else if (!opt_reload) {
        return resolvedPromise();
      }
      var container = dev().assertElement(this.container_);
      var lastTabbableChild = this.lastTabbableChild_(container);
      this.mutateElement(function() {
        _this22.getLoadMoreService_().toggleLoadMoreLoading(true);
      });
      return this.fetchList_({
        append: true
      }).then(function() {
        return _this22.mutateElement(function() {
          if (_this22.loadMoreSrc_) {
            _this22.getLoadMoreService_().toggleLoadMoreLoading(false);
            if (lastTabbableChild && opt_fromClick) {
              tryFocus(lastTabbableChild);
            }
          } else {
            _this22.getLoadMoreService_().setLoadMoreEnded();
          }
        });
      }).then(function() {
        _this22.attemptToFitLoadMore_(dev().assertElement(_this22.container_));
      }).catch(function(error) {
        _this22.triggerFetchErrorEvent_(error);
        _this22.handleLoadMoreFailed_();
      });
    };
    _proto.handleLoadMoreFailed_ = function handleLoadMoreFailed_() {
      var _this23 = this;
      this.mutateElement(function() {
        return _this23.getLoadMoreService_().setLoadMoreFailed();
      }).then(function() {
        _this23.attemptToFitLoadMoreElement_(_this23.getLoadMoreService_().getLoadMoreFailedElement(), dev().assertElement(_this23.container_));
      });
    };
    _proto.fetch_ = function fetch_(refresh) {
      if (refresh === void 0) {
        refresh = false;
      }
      return batchFetchJsonFor(this.getAmpDoc(), this.element, {
        expr: ".",
        urlReplacement: this.getPolicy_(),
        refresh: refresh,
        xssiPrefix: this.element.getAttribute("xssi-prefix") || void 0
      });
    };
    _proto.setupLoadMoreAuto_ = function setupLoadMoreAuto_() {
      var _this24 = this;
      if (!this.unlistenAutoLoadMore_) {
        this.unlistenAutoLoadMore_ = this.viewport_.onChanged(function() {
          return _this24.maybeLoadMoreItems_();
        });
      }
    };
    _proto.maybeLoadMoreItems_ = function maybeLoadMoreItems_() {
      var _this25 = this;
      if (this.resizeFailed_) {
        return;
      }
      var endoOfListMarker = this.container_.lastChild || this.container_;
      this.viewport_.getClientRectAsync(dev().assertElement(endoOfListMarker)).then(function(positionRect) {
        var viewportHeight = _this25.viewport_.getHeight();
        if (positionRect.bottom > 0 && 3 * viewportHeight > positionRect.bottom) {
          return _this25.loadMoreCallback_();
        }
      });
    };
    _proto.prepareAndSendFetch_ = function prepareAndSendFetch_(opt_refresh) {
      if (opt_refresh === void 0) {
        opt_refresh = false;
      }
      return this.fetch_(opt_refresh);
    };
    _proto.getPolicy_ = function getPolicy_() {
      var src = this.element.getAttribute("src");
      var policy = UrlReplacementPolicy_Enum.OPT_IN;
      if (src == this.initialSrc_ || getSourceOrigin(src) == getSourceOrigin(this.getAmpDoc().win.location)) {
        policy = UrlReplacementPolicy_Enum.ALL;
      }
      return policy;
    };
    _proto.hideFallbackAndPlaceholder_ = function hideFallbackAndPlaceholder_() {
      this.element.classList.remove("i-amphtml-list-fetch-error");
      this.toggleLoading(false);
      if (this.getFallback()) {
        this.toggleFallback_(false);
      }
      this.togglePlaceholder(false);
    };
    _proto.showFallback_ = function showFallback_() {
      this.element.classList.add("i-amphtml-list-fetch-error");
      if (childElementByAttr(this.element, "fetch-error")) {
        this.attemptToFit_(this.element);
      }
      this.toggleLoading(false);
      if (this.getFallback()) {
        this.toggleFallback_(true);
        this.togglePlaceholder(false);
      }
    };
    _proto.lastTabbableChild_ = function lastTabbableChild_(element) {
      var allTabbableChildren = scopedQuerySelectorAll(element, TABBABLE_ELEMENTS_QUERY);
      return allTabbableChildren ? allTabbableChildren[allTabbableChildren.length - 1] : null;
    };
    return AmpList2;
  }(AMP.BaseElement);
  AMP.registerElement(TAG2, AmpList, CSS2);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-list-0.1.max.js.map
