(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-story-auto-ads",ev:"0.1",l:true,f:(function(AMP,_){
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

  // src/core/types/object/index.js
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
  function findIndex(array, predicate) {
    for (var i = 0; i < array.length; i++) {
      if (predicate(array[i], i, array)) {
        return i;
      }
    }
    return -1;
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
  function includes(string, substring, start) {
    if (typeof start !== "number") {
      start = 0;
    }
    if (start + substring.length > string.length) {
      return false;
    }
    return string.indexOf(substring, start) !== -1;
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
  function escapeCssSelectorIdent(ident) {
    if (isEsm()) {
      return CSS.escape(ident);
    }
    return cssEscape(ident);
  }

  // src/core/dom/query.js
  function assertIsName(name) {
    devAssert(/^[\w-]+$/.test(name), 'Expected "' + name + '" to be a CSS name composed of alphanumerics and hyphens.');
  }
  function closest(element, callback, opt_stopAt) {
    for (var el = element; el && el !== opt_stopAt; el = el.parentElement) {
      if (callback(el)) {
        return el;
      }
    }
    return null;
  }
  function elementByTag(element, tagName) {
    assertIsName(tagName);
    return element.querySelector(tagName);
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
  function iterateCursor(iterable, cb) {
    var length = iterable.length;
    for (var i = 0; i < length; i++) {
      cb(iterable[i], i);
    }
  }
  function isJsonScriptTag(element) {
    var _element$getAttribute;
    return element.tagName == "SCRIPT" && ((_element$getAttribute = element.getAttribute("type")) == null ? void 0 : _element$getAttribute.toUpperCase()) == "APPLICATION/JSON";
  }
  function toggleAttribute(element, name, forced) {
    var hasAttribute = element.hasAttribute(name);
    var enabled = forced !== void 0 ? forced : !hasAttribute;
    if (enabled !== hasAttribute) {
      if (enabled) {
        element.setAttribute(name, "");
      } else {
        element.removeAttribute(name);
      }
    }
    return enabled;
  }

  // src/core/dom/static-template.js
  var svgContainer;
  function svgFor(nodeOrDoc) {
    var doc = nodeOrDoc.ownerDocument || nodeOrDoc;
    if (!svgContainer || svgContainer.ownerDocument !== svgContainer) {
      svgContainer = doc.createElementNS("http://www.w3.org/2000/svg", "svg");
    }
    return svg;
  }
  function svg(strings) {
    return createNode(svgContainer, strings);
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
  function userAssert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    return user().assert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
  }

  // src/service-helpers.js
  function registerServiceBuilder(win, id, constructor, opt_instantiate) {
    win = getTopWindow(win);
    registerServiceInternal(win, win, id, constructor);
    if (opt_instantiate) {
      getServiceInternal(win, id);
    }
  }
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

  // src/experiments/index.js
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
  function toggleExperiment(win, experimentId, opt_on, opt_transientExperiment) {
    var currentlyOn = isExperimentOn(win, experimentId);
    var on = opt_on != null ? opt_on : !currentlyOn;
    if (on != currentlyOn) {
      var toggles = experimentToggles(win);
      toggles[experimentId] = on;
      if (!opt_transientExperiment) {
        var storedToggles = getExperimentToggles(win);
        storedToggles[experimentId] = on;
        saveExperimentToggles(win, storedToggles);
        if (!getMode().test) {
          user().warn(TAG, '"%s" experiment %s for the domain "%s". See: https://amp.dev/documentation/guides-and-tutorials/learn/experimental', experimentId, on ? "enabled" : "disabled", win.location.hostname);
        }
      }
    }
    return on;
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
        for (var _iterator = _createForOfIteratorHelperLoose(optedInExperiments), _step; !(_step = _iterator()).done; ) {
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
      for (var _iterator2 = _createForOfIteratorHelperLoose(allowedUrlOptIn), _step2; !(_step2 = _iterator2()).done; ) {
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
    for (var _iterator3 = _createForOfIteratorHelperLoose(tokens), _step3; !(_step3 = _iterator3()).done; ) {
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
  function saveExperimentToggles(win, toggles) {
    var experimentIds = [];
    for (var experiment in toggles) {
      experimentIds.push((toggles[experiment] === false ? "-" : "") + experiment);
    }
    try {
      var _win$localStorage;
      (_win$localStorage = win.localStorage) == null ? void 0 : _win$localStorage.setItem(LOCAL_STORAGE_KEY, experimentIds.join(","));
    } catch (e) {
      user().error(TAG, "Failed to save experiments to localStorage.");
    }
  }
  function slowButAccuratePrng() {
    return Math.random();
  }
  var RANDOM_NUMBER_GENERATORS = {
    accuratePrng: slowButAccuratePrng
  };
  function selectRandomItem(arr) {
    var rn = RANDOM_NUMBER_GENERATORS.accuratePrng();
    return dev().assertString(arr[Math.floor(rn * arr.length)]) || null;
  }
  function randomlySelectUnsetExperiments(win, experiments) {
    win.__AMP_EXPERIMENT_BRANCHES = win.__AMP_EXPERIMENT_BRANCHES || {};
    var selectedExperiments = {};
    for (var _iterator4 = _createForOfIteratorHelperLoose(experiments), _step4; !(_step4 = _iterator4()).done; ) {
      var experiment = _step4.value;
      var experimentName = experiment.experimentId;
      if (hasOwn(win.__AMP_EXPERIMENT_BRANCHES, experimentName)) {
        selectedExperiments[experimentName] = win.__AMP_EXPERIMENT_BRANCHES[experimentName];
        continue;
      }
      if (!(experiment.isTrafficEligible != null && experiment.isTrafficEligible(win))) {
        win.__AMP_EXPERIMENT_BRANCHES[experimentName] = null;
        continue;
      }
      if (!win.__AMP_EXPERIMENT_BRANCHES[experimentName] && isExperimentOn(win, experimentName)) {
        win.__AMP_EXPERIMENT_BRANCHES[experimentName] = selectRandomItem(experiment.branches);
        selectedExperiments[experimentName] = win.__AMP_EXPERIMENT_BRANCHES[experimentName];
      }
    }
    return selectedExperiments;
  }
  function getExperimentBranch(win, experimentName) {
    return win.__AMP_EXPERIMENT_BRANCHES ? win.__AMP_EXPERIMENT_BRANCHES[experimentName] : null;
  }
  function forceExperimentBranch(win, experimentName, branchId) {
    win.__AMP_EXPERIMENT_BRANCHES = win.__AMP_EXPERIMENT_BRANCHES || {};
    toggleExperiment(win, experimentName, !!branchId, true);
    win.__AMP_EXPERIMENT_BRANCHES[experimentName] = branchId;
  }

  // src/experiments/story-ad-auto-advance.js
  var AdvanceExpToTime = {
    "31060905": "6s",
    "31060906": "8s",
    "31060907": "10s"
  };
  var StoryAdAutoAdvance = {
    ID: "story-ad-auto-advance",
    CONTROL: "31060904",
    SIX_SECONDS: "31060905",
    EIGHT_SECONDS: "31060906",
    TEN_SECONDS: "31060907"
  };
  function divertStoryAdAutoAdvance(win) {
    var experimentInfo = {
      experimentId: StoryAdAutoAdvance.ID,
      isTrafficEligible: function isTrafficEligible() {
        return true;
      },
      branches: [StoryAdAutoAdvance.CONTROL, StoryAdAutoAdvance.SIX_SECONDS, StoryAdAutoAdvance.EIGHT_SECONDS, StoryAdAutoAdvance.TEN_SECONDS]
    };
    randomlySelectUnsetExperiments(win, [experimentInfo]);
  }

  // src/experiments/story-ad-placements.js
  var StoryAdPlacements = {
    ID: "story-ad-placements",
    CONTROL: "31060567",
    PREDETERMINED_EIGHT: "31060568",
    PREDETERMINED_TEN: "31060817",
    PREDETERMINED_TWELVE: "31060569"
  };
  function divertStoryAdPlacements(win) {
    var experimentInfo = {
      experimentId: StoryAdPlacements.ID,
      isTrafficEligible: function isTrafficEligible() {
        return true;
      },
      branches: [StoryAdPlacements.CONTROL, StoryAdPlacements.PREDETERMINED_EIGHT, StoryAdPlacements.PREDETERMINED_TEN, StoryAdPlacements.PREDETERMINED_TWELVE]
    };
    randomlySelectUnsetExperiments(win, [experimentInfo]);
  }

  // src/experiments/story-ad-progress-segment.js
  var _BranchToTimeValues;
  var StoryAdSegmentExp = {
    ID: "story-ad-progress-segment",
    CONTROL: "31063379",
    NO_ADVANCE_BOTH: "31063380",
    NO_ADVANCE_AD: "31063381",
    TEN_SECONDS: "31063382",
    TWELVE_SECONDS: "31063383",
    FOURTEEN_SECONDS: "31063384"
  };
  var StoryAdSegmentTimes = {
    SENTINEL: "999999ms",
    TEN_SECONDS: "10000ms",
    TWELVE_SECONDS: "12000ms",
    FOURTEEN_SECONDS: "14000ms"
  };
  var BranchToTimeValues = (_BranchToTimeValues = {}, _BranchToTimeValues[StoryAdSegmentExp.TEN_SECONDS] = StoryAdSegmentTimes.TEN_SECONDS, _BranchToTimeValues[StoryAdSegmentExp.TWELVE_SECONDS] = StoryAdSegmentTimes.TWELVE_SECONDS, _BranchToTimeValues[StoryAdSegmentExp.FOURTEEN_SECONDS] = StoryAdSegmentTimes.FOURTEEN_SECONDS, _BranchToTimeValues);

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

  // src/core/types/string/bytes.js
  function getCryptoRandomBytesArray(win, length) {
    var crypto = win.crypto;
    if (!isEsm()) {
      crypto = crypto || win.msCrypto;
      if (!crypto || !crypto.getRandomValues) {
        return null;
      }
    }
    var uint8array = new Uint8Array(length);
    crypto.getRandomValues(uint8array);
    return uint8array;
  }

  // src/service/localization/strings.js
  var LocalizedStringId_Enum = {
    AMP_STORY_ACTIVATE_BUTTON_TEXT: "83",
    AMP_STORY_AUDIO_MUTE_BUTTON_LABEL: "66",
    AMP_STORY_AUDIO_MUTE_BUTTON_TEXT: "31",
    AMP_STORY_AUDIO_UNMUTE_BUTTON_LABEL: "67",
    AMP_STORY_AUDIO_UNMUTE_NO_SOUND_TEXT: "33",
    AMP_STORY_AUDIO_UNMUTE_SOUND_TEXT: "32",
    AMP_STORY_CLOSE_BUTTON_LABEL: "87",
    AMP_STORY_CONSENT_ACCEPT_BUTTON_LABEL: "22",
    AMP_STORY_CONSENT_DECLINE_BUTTON_LABEL: "23",
    AMP_STORY_CONTINUE_ANYWAY_BUTTON_LABEL: "27",
    AMP_STORY_DISCOVERY_DIALOG_TEXT: "96",
    AMP_STORY_DOMAIN_DIALOG_HEADING_LABEL: "25",
    AMP_STORY_DOMAIN_DIALOG_HEADING_LINK: "26",
    AMP_STORY_EDUCATION_NAVIGATION_SWIPE_PROGRESS: "78",
    AMP_STORY_EDUCATION_NAVIGATION_SWIPE_INSTRUCTIONS: "79",
    AMP_STORY_EDUCATION_NAVIGATION_SWIPE_DISMISS: "80",
    AMP_STORY_EDUCATION_NAVIGATION_TAP_PROGRESS: "75",
    AMP_STORY_EDUCATION_NAVIGATION_TAP_PROGRESS_SINGLE: "81",
    AMP_STORY_EDUCATION_NAVIGATION_TAP_INSTRUCTIONS: "76",
    AMP_STORY_EDUCATION_NAVIGATION_TAP_DISMISS: "77",
    AMP_STORY_HAS_NEW_PAGE_TEXT: "64",
    AMP_STORY_FORM_SUBMIT_ERROR: "98",
    AMP_STORY_FORM_SUBMIT_SUCCESS: "99",
    AMP_STORY_HINT_UI_NEXT_LABEL: "2",
    AMP_STORY_HINT_UI_PREVIOUS_LABEL: "3",
    AMP_STORY_INFO_BUTTON_LABEL: "68",
    AMP_STORY_NEXT_PAGE: "91",
    AMP_STORY_NEXT_STORY: "90",
    AMP_STORY_OPEN_OUTLINK_TEXT: "97",
    AMP_STORY_PAGE_ATTACHMENT_OPEN_LABEL: "35",
    AMP_STORY_PAGINATION_BUTTON_PREVIOUS_PAGE_LABEL: "82",
    AMP_STORY_PAGE_ERROR_VIDEO: "65",
    AMP_STORY_PAGE_PLAY_VIDEO: "34",
    AMP_STORY_PAUSE_BUTTON_LABEL: "85",
    AMP_STORY_PLAY_BUTTON_LABEL: "86",
    AMP_STORY_PREVIOUS_PAGE: "93",
    AMP_STORY_READ_MORE: "100",
    AMP_STORY_REPLAY: "92",
    AMP_STORY_SHARE_BUTTON_LABEL: "69",
    AMP_STORY_SHARING_CLIPBOARD_FAILURE_TEXT: "4",
    AMP_STORY_SHARING_CLIPBOARD_SUCCESS_TEXT: "5",
    AMP_STORY_SHARING_PAGE_LABEL: "62",
    AMP_STORY_SHARING_PROVIDER_NAME_EMAIL: "6",
    AMP_STORY_SHARING_PROVIDER_NAME_FACEBOOK: "7",
    AMP_STORY_SHARING_PROVIDER_NAME_LINE: "63",
    AMP_STORY_SHARING_PROVIDER_NAME_LINK: "9",
    AMP_STORY_SHARING_PROVIDER_NAME_LINKEDIN: "10",
    AMP_STORY_SHARING_PROVIDER_NAME_PINTEREST: "11",
    AMP_STORY_SHARING_PROVIDER_NAME_SMS: "12",
    AMP_STORY_SHARING_PROVIDER_NAME_SYSTEM: "13",
    AMP_STORY_SHARING_PROVIDER_NAME_TUMBLR: "14",
    AMP_STORY_SHARING_PROVIDER_NAME_TWITTER: "15",
    AMP_STORY_SHARING_PROVIDER_NAME_WHATSAPP: "16",
    AMP_STORY_SIDEBAR_BUTTON_LABEL: "70",
    AMP_STORY_SKIP_TO_NEXT_BUTTON_LABEL: "88",
    AMP_STORY_TOOLTIP_EXPAND_TWEET: "36",
    AMP_STORY_WARNING_DESKTOP_HEIGHT_SIZE_TEXT: "37",
    AMP_STORY_WARNING_DESKTOP_SIZE_TEXT: "18",
    AMP_STORY_WARNING_DESKTOP_WIDTH_SIZE_TEXT: "38",
    AMP_STORY_WARNING_EXPERIMENT_DISABLED_TEXT: "19",
    AMP_STORY_WARNING_LANDSCAPE_ORIENTATION_TEXT: "20",
    AMP_STORY_WARNING_UNSUPPORTED_BROWSER_TEXT: "21",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_APPLY_NOW: "39",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_BOOK_NOW: "40",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_BUY_TICKETS: "41",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_DOWNLOAD: "42",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_EXPLORE: "43",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_GET_NOW: "44",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_INSTALL: "45",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_LEARN_MORE: "46",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_LISTEN: "47",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_MORE: "48",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_OPEN_APP: "49",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_ORDER_NOW: "50",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_PLAY: "51",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_READ: "52",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_SHOP: "53",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_SHOW: "54",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_SHOWTIMES: "55",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_SIGN_UP: "56",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_SUBSCRIBE: "57",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_USE_APP: "58",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_VIEW: "59",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_WATCH: "60",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_WATCH_EPISODE: "61",
    AMP_STORY_INTERACTIVE_DISCLAIMER_NOTE: "89",
    AMP_STORY_INTERACTIVE_RESULTS_SCORE: "84",
    AMP_STORY_INTERACTIVE_QUIZ_ANSWER_CHOICE_A: "71",
    AMP_STORY_INTERACTIVE_QUIZ_ANSWER_CHOICE_B: "72",
    AMP_STORY_INTERACTIVE_QUIZ_ANSWER_CHOICE_C: "73",
    AMP_STORY_INTERACTIVE_QUIZ_ANSWER_CHOICE_D: "74"
  };
  function cloneLocalizedStringBundle(localizedStringBundle) {
    return parseJson(JSON.stringify(localizedStringBundle));
  }
  function createPseudoLocale(localizedStringBundle, localizationFn) {
    var pseudoLocaleStringBundle = cloneLocalizedStringBundle(localizedStringBundle);
    Object.keys(pseudoLocaleStringBundle).forEach(function(localizedStringIdAsStr) {
      var localizedStringId = localizedStringIdAsStr;
      var entry = localizedStringBundle[localizedStringId];
      pseudoLocaleStringBundle[localizedStringId] = localizationFn(entry["string"] || entry);
    });
    return pseudoLocaleStringBundle;
  }

  // src/service/localization/index.js
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
  var FALLBACK_LANGUAGE_CODE = "default";
  var LANGUAGE_CODE_CHUNK_REGEX = /\w+/gi;
  function findLocalizedString(localizedStringBundles, languageCodes, localizedStringId) {
    for (var _iterator = _createForOfIteratorHelperLoose2(languageCodes), _step; !(_step = _iterator()).done; ) {
      var _localizedStringBundl;
      var code = _step.value;
      var entry = (_localizedStringBundl = localizedStringBundles[code]) == null ? void 0 : _localizedStringBundl[localizedStringId];
      if (entry != null) {
        return entry["string"] || entry;
      }
    }
    return null;
  }
  function getLanguageCodesFromString(languageCode) {
    if (!languageCode) {
      return ["en", FALLBACK_LANGUAGE_CODE];
    }
    var matches2 = languageCode.match(LANGUAGE_CODE_CHUNK_REGEX) || [];
    return matches2.reduce(function(fallbackLanguageCodeList, chunk, index) {
      var fallbackLanguageCode = matches2.slice(0, index + 1).join("-").toLowerCase();
      fallbackLanguageCodeList.unshift(fallbackLanguageCode);
      return fallbackLanguageCodeList;
    }, [FALLBACK_LANGUAGE_CODE]);
  }
  var LocalizationService = /* @__PURE__ */ function() {
    function LocalizationService2(element) {
      this.element_ = element;
      this.viewerLanguageCode_ = Services.viewerForDoc(element).getParam("lang");
      this.localizedStringBundles_ = {};
    }
    var _proto = LocalizationService2.prototype;
    _proto.getLanguageCodesForElement_ = function getLanguageCodesForElement_(element) {
      var languageEl = closest(element, function(el) {
        return el.hasAttribute("lang");
      });
      var languageCode = languageEl ? languageEl.getAttribute("lang") : null;
      var languageCodesToUse = getLanguageCodesFromString(languageCode || "");
      if (this.viewerLanguageCode_) {
        languageCodesToUse.unshift(this.viewerLanguageCode_);
      }
      return languageCodesToUse;
    };
    _proto.registerLocalizedStringBundle = function registerLocalizedStringBundle(languageCode, localizedStringBundle) {
      var normalizedLangCode = languageCode.toLowerCase();
      if (!this.localizedStringBundles_[normalizedLangCode]) {
        this.localizedStringBundles_[normalizedLangCode] = {};
      }
      Object.assign(this.localizedStringBundles_[normalizedLangCode], localizedStringBundle);
      return this;
    };
    _proto.getLocalizedString = function getLocalizedString(localizedStringId, elementToUse) {
      if (elementToUse === void 0) {
        elementToUse = this.element_;
      }
      var languageCodes = this.getLanguageCodesForElement_(elementToUse);
      return findLocalizedString(this.localizedStringBundles_, languageCodes, localizedStringId);
    };
    return LocalizationService2;
  }();

  // extensions/amp-story-auto-ads/0.1/story-ad-localization.js
  var LocalizedStringsAr = JSON.parse('{"39":"\u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643 \u0627\u0644\u0622\u0646","40":"\u062D\u062C\u0632","41":"\u0634\u0631\u0627\u0621 \u0627\u0644\u062A\u0630\u0627\u0643\u0631","42":"\u062A\u0646\u0632\u064A\u0644","43":"\u0627\u0633\u062A\u0643\u0634\u0627\u0641","44":"\u062A\u0646\u0632\u064A\u0644 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0622\u0646","45":"\u062A\u062B\u0628\u064A\u062A \u0627\u0644\u0622\u0646","46":"\u0645\u0632\u064A\u062F \u0645\u0646 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A","47":"\u0627\u0633\u062A\u0645\u0627\u0639","48":"\u0627\u0644\u0645\u0632\u064A\u062F","49":"\u0641\u062A\u062D \u0627\u0644\u062A\u0637\u0628\u064A\u0642","50":"\u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628 \u0627\u0644\u0622\u0646","51":"\u062A\u0634\u063A\u064A\u0644","52":"\u0642\u0631\u0627\u0621\u0629","53":"\u062A\u0633\u0648\u0642","54":"\u0639\u0631\u0636","55":"\u0645\u0648\u0627\u0639\u064A\u062F \u0627\u0644\u0639\u0631\u0636","56":"\u0627\u0634\u062A\u0631\u0627\u0643","57":"\u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643 \u0627\u0644\u0622\u0646","58":"\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u062A\u0637\u0628\u064A\u0642","59":"\u0639\u0631\u0636","60":"\u0627\u0644\u0645\u0634\u0627\u0647\u062F\u0629","61":"\u0645\u0634\u0627\u0647\u062F\u0629 \u0627\u0644\u062D\u0644\u0642\u0629"}');
  var LocalizedStringsDe = JSON.parse('{"39":"Jetzt bewerben","40":"Reservieren","41":"Tickets kaufen","42":"Herunterladen","43":"Erkunden","44":"Jetzt herunterladen","45":"Jetzt installieren","46":"Weitere Informationen","47":"Anh\xF6ren","48":"Mehr","49":"App \xF6ffnen","50":"Jetzt bestellen","51":"Abspielen","52":"Lesen","53":"Einkaufen","54":"Anzeigen","55":"Vorf\xFChrungszeiten","56":"Anmelden","57":"Jetzt abonnieren","58":"Zur App","59":"Ansehen","60":"Ansehen","61":"Folge ansehen"}');
  var LocalizedStringsEnGb = JSON.parse('{"39":"Apply Now","40":"Book","41":"Buy Tickets","42":"Download","43":"Explore","44":"Get Now","45":"Install Now","46":"Learn More","47":"Listen","48":"More","49":"Open App","50":"Order Now","51":"Play","52":"Read","53":"Shop Now","54":"Show","55":"Performance times","56":"Sign Up","57":"Subscribe Now","58":"Use App","59":"View","60":"Watch","61":"Watch Episode"}');
  var LocalizedStringsEn = JSON.parse('{"39":"Apply Now","40":"Book","41":"Buy Tickets","42":"Download","43":"Explore","44":"Get Now","45":"Install Now","46":"Learn More","47":"Listen","48":"More","49":"Open App","50":"Order Now","51":"Play","52":"Read","53":"Shop Now","54":"Show","55":"Showtimes","56":"Sign Up","57":"Subscribe Now","58":"Use App","59":"View","60":"Watch","61":"Watch Episode"}');
  var LocalizedStringsEs419 = JSON.parse('{"39":"Enviar solicitud ahora","40":"Reservar","41":"Comprar entradas","42":"Descargar","43":"Explorar","44":"Obtener ahora","45":"Instalar ahora","46":"M\xE1s informaci\xF3n","47":"Escuchar","48":"M\xE1s","49":"Abrir app","50":"Pedir ahora","51":"Reproducir","52":"Leer","53":"Comprar","54":"Mostrar","55":"Horarios","56":"Registrarse","57":"Suscribirse ahora","58":"Usar app","59":"Ver","60":"Mirar","61":"Mirar episodio"}');
  var LocalizedStringsEs = JSON.parse('{"39":"Solic\xEDtalo ahora","40":"Reserva","41":"Compra entradas","42":"Descargar","43":"Consultar","44":"Descargar ahora","45":"Instalar ahora","46":"Consulta m\xE1s informaci\xF3n","47":"Escuchar","48":"M\xE1s","49":"Abrir la aplicaci\xF3n","50":"Haz el pedido ahora","51":"Reproducir","52":"Leer","53":"Comprar","54":"Mostrar","55":"Consulta los horarios","56":"Reg\xEDstrate","57":"Suscr\xEDbete ahora","58":"Usa la aplicaci\xF3n","59":"Ver","60":"Visual\xEDzalo","61":"Ver episodio"}');
  var LocalizedStringsFr = JSON.parse('{"39":"Inscrivez-vous d\xE8s maintenant","40":"R\xE9server","41":"Acheter des billets","42":"T\xE9l\xE9charger","43":"D\xE9couvrir","44":"Obtenir","45":"Installer","46":"En savoir plus","47":"\xC9couter","48":"Plus","49":"Ouvrir l\'application","50":"Commander","51":"Lire","52":"Lire","53":"Acheter","54":"Afficher","55":"Horaires des s\xE9ances","56":"S\'inscrire","57":"S\'abonner","58":"Utiliser l\'application","59":"Afficher","60":"Regarder","61":"Regarder l\'\xE9pisode"}');
  var LocalizedStringsHi = JSON.parse('{"39":"\u0905\u092D\u0940 \u0906\u0935\u0947\u0926\u0928 \u0915\u0930\u0947\u0902","40":"\u092C\u0941\u0915 \u0915\u0930\u0947\u0902","41":"\u091F\u093F\u0915\u091F \u0916\u0930\u0940\u0926\u0947\u0902","42":"\u0921\u093E\u0909\u0928\u0932\u094B\u0921 \u0915\u0930\u0947\u0902","43":"\u0914\u0930 \u091C\u093E\u0928\u0947\u0902","44":"\u0905\u092D\u0940 \u092A\u093E\u090F\u0902","45":"\u0905\u092D\u0940 \u0907\u0902\u0938\u094D\u091F\u0949\u0932 \u0915\u0930\u0947\u0902","46":"\u091C\u093C\u094D\u092F\u093E\u0926\u093E \u091C\u093E\u0928\u0947\u0902","47":"\u0938\u0941\u0928\u0947\u0902","48":"\u0926\u0942\u0938\u0930\u0940 \u0938\u093E\u092E\u0917\u094D\u0930\u0940","49":"\u0910\u092A\u094D\u0932\u093F\u0915\u0947\u0936\u0928 \u0916\u094B\u0932\u0947\u0902","50":"\u0905\u092D\u0940 \u0911\u0930\u094D\u0921\u0930 \u0915\u0930\u0947\u0902","51":"\u091A\u0932\u093E\u090F\u0902","52":"\u092A\u0922\u093C\u0947\u0902","53":"\u0916\u0930\u0940\u0926\u093E\u0930\u0940 \u0915\u0930\u0947\u0902","54":"\u0926\u093F\u0916\u093E\u090F\u0902","55":"\u0936\u094B \u0915\u093E \u0938\u092E\u092F","56":"\u0938\u093E\u0907\u0928 \u0905\u092A \u0915\u0930\u0947\u0902","57":"\u0905\u092D\u0940 \u0938\u0926\u0938\u094D\u092F \u092C\u0928\u0947\u0902","58":"\u0910\u092A\u094D\u0932\u093F\u0915\u0947\u0936\u0928 \u0907\u0938\u094D\u0924\u0947\u092E\u093E\u0932 \u0915\u0930\u0947\u0902","59":"\u0926\u0947\u0916\u0947\u0902","60":"\u0926\u0947\u0916\u0947\u0902","61":"\u090F\u092A\u093F\u0938\u094B\u0921 \u0926\u0947\u0916\u0947\u0902"}');
  var LocalizedStringsId = JSON.parse('{"39":"Daftarkan Sekarang","40":"Reservasi","41":"Beli Tiket","42":"Download","43":"Jelajahi","44":"Dapatkan Sekarang","45":"Instal Sekarang","46":"Pelajari Lebih Lanjut","47":"Dengarkan","48":"Lainnya","49":"Buka Aplikasi","50":"Pesan Sekarang","51":"Putar","52":"Baca","53":"Beli","54":"Tampilkan","55":"Jam Tayang","56":"Daftar","57":"Berlangganan Sekarang","58":"Gunakan Aplikasi","59":"Lihat","60":"Tonton","61":"Tonton Episode"}');
  var LocalizedStringsIt = JSON.parse('{"39":"Richiedi ora","40":"Prenota","41":"Acquista biglietti","42":"Scarica","43":"Esplora","44":"Scarica ora","45":"Installa ora","46":"Ulteriori informazioni","47":"Ascolta","48":"Altro","49":"Apri app","50":"Ordina ora","51":"Riproduci","52":"Leggi","53":"Acquista","54":"Mostra","55":"Orari di programmazione","56":"Registrati","57":"Abbonati ora","58":"Usa app","59":"Visualizza","60":"Guarda","61":"Guarda la puntata"}');
  var LocalizedStringsJa = JSON.parse('{"39":"\u4ECA\u3059\u3050\u304A\u7533\u3057\u8FBC\u307F","40":"\u4E88\u7D04","41":"\u30C1\u30B1\u30C3\u30C8\u3092\u8CFC\u5165","42":"\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9","43":"\u63A2\u3059","44":"\u4ECA\u3059\u3050\u5165\u624B","45":"\u4ECA\u3059\u3050\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB","46":"\u8A73\u7D30","47":"\u8074\u304F","48":"\u3082\u3063\u3068\u898B\u308B","49":"\u30A2\u30D7\u30EA\u3092\u958B\u304F","50":"\u4ECA\u3059\u3050\u6CE8\u6587","51":"\u518D\u751F","52":"\u8AAD\u3080","53":"\u8CFC\u5165","54":"\u8868\u793A","55":"\u4E0A\u6620\u6642\u9593","56":"\u767B\u9332","57":"\u4ECA\u3059\u3050\u767B\u9332","58":"\u30A2\u30D7\u30EA\u3092\u4F7F\u7528","59":"\u8868\u793A","60":"\u898B\u308B","61":"\u30A8\u30D4\u30BD\u30FC\u30C9\u3092\u898B\u308B"}');
  var LocalizedStringsKo = JSON.parse('{"39":"\uC2E0\uCCAD\uD558\uAE30","40":"\uC608\uC57D","41":"\uD2F0\uCF13 \uAD6C\uB9E4","42":"\uB2E4\uC6B4\uB85C\uB4DC","43":"\uD0D0\uC0C9","44":"\uBC1B\uAE30","45":"\uC9C0\uAE08 \uC124\uCE58","46":"\uC790\uC138\uD788 \uC54C\uC544\uBCF4\uAE30","47":"\uB4E3\uAE30","48":"\uB354\uBCF4\uAE30","49":"\uC571 \uC5F4\uAE30","50":"\uC9C0\uAE08 \uC8FC\uBB38","51":"\uC7AC\uC0DD","52":"\uC77D\uAE30","53":"\uC1FC\uD551\uD558\uAE30","54":"\uD45C\uC2DC","55":"\uC0C1\uC601\uC77C\uC815","56":"\uAC00\uC785","57":"\uC9C0\uAE08 \uAD6C\uB3C5","58":"\uC571 \uC0AC\uC6A9","59":"\uBCF4\uAE30","60":"\uBCF4\uAE30","61":"\uC5D0\uD53C\uC18C\uB4DC \uBCF4\uAE30"}');
  var LocalizedStringsNl = JSON.parse('{"39":"Nu toepassen","40":"Boeken","41":"Kaartjes kopen","42":"Downloaden","43":"Verkennen","44":"Nu ophalen","45":"Nu installeren","46":"Meer informatie","47":"Luisteren","48":"Meer","49":"App openen","50":"Nu bestellen","51":"Afspelen","52":"Lezen","53":"Winkelen","54":"Weergeven","55":"Aanvangstijden","56":"Aanmelden","57":"Nu abonneren","58":"App gebruiken","59":"Bekijken","60":"Bekijken","61":"Aflevering bekijken"}');
  var LocalizedStringsNo = JSON.parse('{"39":"S\xF8k n\xE5","40":"Bestill","41":"Kj\xF8p billetter","42":"Last ned","43":"Utforsk","44":"Skaff deg n\xE5","45":"Installer n\xE5","46":"Finn ut mer","47":"Lytt","48":"Mer","49":"\xC5pne appen","50":"Bestill n\xE5","51":"Spill av","52":"Les","53":"Kj\xF8p","54":"Vis","55":"Kinotider","56":"Registrer deg","57":"Abonner n\xE5","58":"Bruk app","59":"Se","60":"Se","61":"Se episoden"}');
  var LocalizedStringsPtBr = JSON.parse('{"39":"Inscreva-se agora","40":"Agendar","41":"Comprar ingressos","42":"Download","43":"Descobrir","44":"Adquirir agora","45":"Instalar agora","46":"Saiba mais","47":"Ouvir","48":"Mais","49":"Abrir app","50":"Comprar agora","51":"Reproduzir","52":"Ler","53":"Comprar","54":"Mostrar","55":"Hor\xE1rios de exibi\xE7\xE3o","56":"Inscreva-se","57":"Assinar","58":"Usar app","59":"Ver","60":"Assistir","61":"Assistir epis\xF3dio"}');
  var LocalizedStringsPtPt = JSON.parse('{"39":"Candidate-se agora","40":"Reservar","41":"Comprar bilhetes","42":"Transferir","43":"Explorar","44":"Obter agora","45":"Instalar agora","46":"Saiba mais","47":"Ouvir","48":"Mais","49":"Abrir aplica\xE7\xE3o","50":"Encomendar agora","51":"Reproduzir","52":"Ler","53":"Comprar","54":"Mostrar","55":"Sess\xF5es","56":"Inscrever-se","57":"Subscrever agora","58":"Utilizar aplica\xE7\xE3o","59":"Ver","60":"Ver","61":"Ver epis\xF3dio"}');
  var LocalizedStringsRu = JSON.parse('{"39":"\u041F\u043E\u0434\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443","40":"\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C","41":"\u041A\u0443\u043F\u0438\u0442\u044C \u0431\u0438\u043B\u0435\u0442\u044B","42":"\u0421\u043A\u0430\u0447\u0430\u0442\u044C","43":"\u0418\u0437\u0443\u0447\u0438\u0442\u044C","44":"\u0421\u043A\u0430\u0447\u0430\u0442\u044C","45":"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C","46":"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435","47":"\u0421\u043B\u0443\u0448\u0430\u0442\u044C","48":"\u0415\u0449\u0451","49":"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435","50":"\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C","51":"\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438","52":"\u0427\u0438\u0442\u0430\u0442\u044C","53":"\u041A\u0443\u043F\u0438\u0442\u044C","54":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C","55":"\u0412\u0440\u0435\u043C\u044F \u0441\u0435\u0430\u043D\u0441\u043E\u0432","56":"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F","57":"\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F","58":"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435","59":"\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C","60":"\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C","61":"\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0441\u0435\u0440\u0438\u044E"}');
  var LocalizedStringsTr = JSON.parse('{"39":"Hemen Ba\u015Fvur","40":"Kitap","41":"Bilet Sat\u0131n Al","42":"\u0130ndir","43":"Ke\u015Ffet","44":"Hemen Al","45":"\u015Eimdi Y\xFCkle","46":"Daha Fazla Bilgi","47":"Dinle","48":"Di\u011Fer","49":"Uygulamay\u0131 A\xE7","50":"\u015Eimdi Sipari\u015F Et","51":"Oynat","52":"Oku","53":"Sat\u0131n al","54":"G\xF6ster","55":"G\xF6sterim zamanlar\u0131","56":"Kaydol","57":"\u015Eimdi Abone Ol","58":"Uygulama Kullan","59":"G\xF6ster","60":"\u0130zle","61":"B\xF6l\xFCm\xFC \u0130zle"}');
  var LocalizedStringsVi = JSON.parse('{"39":"\u0110\u0103ng k\xFD ngay b\xE2y gi\u1EDD","40":"S\xE1ch","41":"Mua V\xE9","42":"T\u1EA3i xu\u1ED1ng","43":"Kh\xE1m ph\xE1","44":"Nh\u1EADn ngay","45":"C\xE0i \u0111\u1EB7t ngay","46":"T\xECm hi\u1EC3u th\xEAm","47":"Nghe","48":"Th\xEAm","49":"M\u1EDF \u1EE9ng d\u1EE5ng","50":"\u0110\u1EB7t h\xE0ng ngay b\xE2y gi\u1EDD","51":"Ph\xE1t","52":"\u0110\u1ECDc","53":"Mua s\u1EAFm","54":"Hi\u1EC3n th\u1ECB","55":"Th\u1EDDi gian chi\u1EBFu","56":"\u0110\u0103ng k\xFD","57":"\u0110\u0103ng k\xFD ngay","58":"S\u1EED d\u1EE5ng \u1EE9ng d\u1EE5ng","59":"Xem","60":"Xem","61":"Xem t\u1EADp"}');
  var LocalizedStringsZhCn = JSON.parse('{"39":"\u7ACB\u5373\u7533\u8BF7","40":"\u9884\u8BA2","41":"\u4E70\u7968","42":"\u4E0B\u8F7D","43":"\u63A2\u7D22","44":"\u7ACB\u5373\u83B7\u53D6","45":"\u7ACB\u5373\u5B89\u88C5","46":"\u4E86\u89E3\u8BE6\u60C5","47":"\u6536\u542C","48":"\u66F4\u591A","49":"\u6253\u5F00\u5E94\u7528","50":"\u7ACB\u5373\u8BA2\u8D2D","51":"\u64AD\u653E","52":"\u9605\u8BFB","53":"\u9009\u8D2D","54":"\u663E\u793A","55":"\u653E\u6620\u65F6\u95F4","56":"\u6CE8\u518C","57":"\u7ACB\u5373\u8BA2\u9605","58":"\u4F7F\u7528\u5E94\u7528","59":"\u67E5\u770B","60":"\u89C2\u770B","61":"\u89C2\u770B\u5267\u96C6"}');
  var LocalizedStringsZhTw = JSON.parse('{"39":"\u7ACB\u5373\u7533\u8ACB","40":"\u9810\u8A02","41":"\u8CB7\u7968","42":"\u4E0B\u8F09","43":"\u63A2\u7D22","44":"\u7ACB\u5373\u53D6\u5F97","45":"\u7ACB\u5373\u5B89\u88DD","46":"\u77AD\u89E3\u8A73\u60C5","47":"\u8046\u807D","48":"\u986F\u793A\u66F4\u591A","49":"\u958B\u555F\u61C9\u7528\u7A0B\u5F0F","50":"\u7ACB\u523B\u8A02\u8CFC","51":"\u64AD\u653E","52":"\u95B1\u8B80","53":"\u8CFC\u7269","54":"\u986F\u793A","55":"\u653E\u6620\u6642\u9593","56":"\u8A3B\u518A","57":"\u7ACB\u5373\u8A02\u95B1","58":"\u4F7F\u7528\u61C9\u7528\u7A0B\u5F0F","59":"\u67E5\u770B","60":"\u89C0\u770B","61":"\u89C0\u770B\u5287\u96C6"}');
  var CtaTypes = {
    APPLY_NOW: LocalizedStringId_Enum.AMP_STORY_AUTO_ADS_BUTTON_LABEL_APPLY_NOW,
    BOOK_NOW: LocalizedStringId_Enum.AMP_STORY_AUTO_ADS_BUTTON_LABEL_BOOK_NOW,
    BUY_TICKETS: LocalizedStringId_Enum.AMP_STORY_AUTO_ADS_BUTTON_LABEL_BUY_TICKETS,
    DOWNLOAD: LocalizedStringId_Enum.AMP_STORY_AUTO_ADS_BUTTON_LABEL_DOWNLOAD,
    EXPLORE: LocalizedStringId_Enum.AMP_STORY_AUTO_ADS_BUTTON_LABEL_EXPLORE,
    GET_NOW: LocalizedStringId_Enum.AMP_STORY_AUTO_ADS_BUTTON_LABEL_GET_NOW,
    INSTALL: LocalizedStringId_Enum.AMP_STORY_AUTO_ADS_BUTTON_LABEL_INSTALL,
    LEARN_MORE: LocalizedStringId_Enum.AMP_STORY_AUTO_ADS_BUTTON_LABEL_LEARN_MORE,
    LISTEN: LocalizedStringId_Enum.AMP_STORY_AUTO_ADS_BUTTON_LABEL_LISTEN,
    MORE: LocalizedStringId_Enum.AMP_STORY_AUTO_ADS_BUTTON_LABEL_MORE,
    OPEN_APP: LocalizedStringId_Enum.AMP_STORY_AUTO_ADS_BUTTON_LABEL_OPEN_APP,
    ORDER_NOW: LocalizedStringId_Enum.AMP_STORY_AUTO_ADS_BUTTON_LABEL_ORDER_NOW,
    PLAY: LocalizedStringId_Enum.AMP_STORY_AUTO_ADS_BUTTON_LABEL_PLAY,
    READ: LocalizedStringId_Enum.AMP_STORY_AUTO_ADS_BUTTON_LABEL_READ,
    SHOP: LocalizedStringId_Enum.AMP_STORY_AUTO_ADS_BUTTON_LABEL_SHOP,
    SHOW: LocalizedStringId_Enum.AMP_STORY_AUTO_ADS_BUTTON_LABEL_SHOW,
    SHOWTIMES: LocalizedStringId_Enum.AMP_STORY_AUTO_ADS_BUTTON_LABEL_SHOWTIMES,
    SIGN_UP: LocalizedStringId_Enum.AMP_STORY_AUTO_ADS_BUTTON_LABEL_SIGN_UP,
    SUBSCRIBE: LocalizedStringId_Enum.AMP_STORY_AUTO_ADS_BUTTON_LABEL_SUBSCRIBE,
    USE_APP: LocalizedStringId_Enum.AMP_STORY_AUTO_ADS_BUTTON_LABEL_USE_APP,
    VIEW: LocalizedStringId_Enum.AMP_STORY_AUTO_ADS_BUTTON_LABEL_VIEW,
    WATCH: LocalizedStringId_Enum.AMP_STORY_AUTO_ADS_BUTTON_LABEL_WATCH,
    WATCH_EPISODE: LocalizedStringId_Enum.AMP_STORY_AUTO_ADS_BUTTON_LABEL_WATCH_EPISODE
  };
  var getLocalizationService = function getLocalizationService2(element) {
    var localizationService = Services.localizationForDoc(element);
    if (!localizationService) {
      localizationService = new LocalizationService(element);
      registerServiceBuilderForDoc(element, "localization", function() {
        return localizationService;
      });
    }
    return localizationService;
  };
  var StoryAdLocalization = /* @__PURE__ */ function() {
    function StoryAdLocalization2(storyAutoAdsEl) {
      this.storyAutoAdsEl_ = storyAutoAdsEl;
      this.localizationService_ = null;
    }
    var _proto = StoryAdLocalization2.prototype;
    _proto.getLocalizedString = function getLocalizedString(id) {
      if (!this.localizationService_) {
        this.init_();
      }
      return this.localizationService_.getLocalizedString(id);
    };
    _proto.init_ = function init_() {
      this.localizationService_ = getLocalizationService(this.storyAutoAdsEl_);
      var enXaPseudoLocaleBundle = createPseudoLocale(LocalizedStringsEn, function(s) {
        return "[" + s + " one two]";
      });
      this.localizationService_.registerLocalizedStringBundle("default", LocalizedStringsEn).registerLocalizedStringBundle("ar", LocalizedStringsAr).registerLocalizedStringBundle("de", LocalizedStringsDe).registerLocalizedStringBundle("en", LocalizedStringsEn).registerLocalizedStringBundle("en-GB", LocalizedStringsEnGb).registerLocalizedStringBundle("es", LocalizedStringsEs).registerLocalizedStringBundle("es-419", LocalizedStringsEs419).registerLocalizedStringBundle("fr", LocalizedStringsFr).registerLocalizedStringBundle("hi", LocalizedStringsHi).registerLocalizedStringBundle("id", LocalizedStringsId).registerLocalizedStringBundle("it", LocalizedStringsIt).registerLocalizedStringBundle("ja", LocalizedStringsJa).registerLocalizedStringBundle("ko", LocalizedStringsKo).registerLocalizedStringBundle("nl", LocalizedStringsNl).registerLocalizedStringBundle("no", LocalizedStringsNo).registerLocalizedStringBundle("pt-PT", LocalizedStringsPtPt).registerLocalizedStringBundle("pt-BR", LocalizedStringsPtBr).registerLocalizedStringBundle("ru", LocalizedStringsRu).registerLocalizedStringBundle("tr", LocalizedStringsTr).registerLocalizedStringBundle("vi", LocalizedStringsVi).registerLocalizedStringBundle("zh-cn", LocalizedStringsZhCn).registerLocalizedStringBundle("zh-TW", LocalizedStringsZhTw).registerLocalizedStringBundle("en-xa", enXaPseudoLocaleBundle);
    };
    return StoryAdLocalization2;
  }();

  // extensions/amp-story-auto-ads/0.1/utils.js
  function getUniqueId(win) {
    var uint8array = getCryptoRandomBytesArray(win, 16);
    if (uint8array) {
      return uint8array.join("");
    }
    return String(win.location.href + Date.now() + win.Math.random() + win.screen.width + win.screen.height);
  }
  function localizeCtaText(ctaType, localizationService) {
    if (CtaTypes[ctaType]) {
      var ctaLocalizedStringId = CtaTypes[ctaType];
      return localizationService.getLocalizedString(ctaLocalizedStringId);
    }
    return ctaType;
  }
  function getFrameDoc(iframe) {
    return iframe.contentDocument || iframe.contentWindow.document;
  }

  // extensions/amp-story-auto-ads/0.1/story-ad-analytics.js
  var STORY_AD_ANALYTICS = "story-ad-analytics";
  var AnalyticsEvents = {
    AD_REQUESTED: "story-ad-request",
    AD_LOADED: "story-ad-load",
    AD_INSERTED: "story-ad-insert",
    AD_VIEWED: "story-ad-view",
    AD_SWIPED: "story-ad-swipe",
    AD_CLICKED: "story-ad-click",
    AD_EXITED: "story-ad-exit",
    AD_DISCARDED: "story-ad-discard"
  };
  var AnalyticsVars = {
    AD_REQUESTED: "requestTime",
    AD_LOADED: "loadTime",
    AD_INSERTED: "insertTime",
    AD_VIEWED: "viewTime",
    AD_SWIPED: "swipeTime",
    AD_CLICKED: "clickTime",
    AD_EXITED: "exitTime",
    AD_DISCARDED: "discardTime",
    AD_INDEX: "adIndex",
    AD_UNIQUE_ID: "adUniqueId",
    POSITION: "position",
    CTA_TYPE: "ctaType"
  };
  var StoryAdAnalytics = /* @__PURE__ */ function() {
    function StoryAdAnalytics2(ampdoc2) {
      this.win_ = ampdoc2.win;
      this.data_ = {};
    }
    var _proto = StoryAdAnalytics2.prototype;
    _proto.fireEvent = function fireEvent(element, adIndex, eventType, vars) {
      this.ensurePageTrackingInitialized_(adIndex);
      Object.assign(this.data_[adIndex], vars);
      triggerAnalyticsEvent(element, eventType, this.data_[adIndex]);
    };
    _proto.setVar = function setVar(adIndex, varName, value) {
      this.ensurePageTrackingInitialized_(adIndex);
      this.data_[adIndex][varName] = value;
    };
    _proto.ensurePageTrackingInitialized_ = function ensurePageTrackingInitialized_(adIndex) {
      if (!this.data_[adIndex]) {
        var _dict;
        this.data_[adIndex] = dict((_dict = {}, _dict[AnalyticsVars.AD_INDEX] = adIndex, _dict[AnalyticsVars.AD_UNIQUE_ID] = getUniqueId(this.win_), _dict));
      }
    };
    return StoryAdAnalytics2;
  }();

  // extensions/amp-story-auto-ads/0.1/story-ad-button-text-fitter.js
  var MAX_HEIGHT = 32;
  var FontSizes = {
    MIN: 12,
    MAX: 14
  };
  var ButtonTextFitter = /* @__PURE__ */ function() {
    function ButtonTextFitter2(ampdoc2) {
      var _this = this;
      this.mutator_ = Services.mutatorForDoc(ampdoc2);
      this.doc_ = ampdoc2.win.document;
      this.measurer_ = this.doc_.createElement("div");
      this.mutator_.mutateElement(this.measurer_, function() {
        _this.doc_.body.appendChild(_this.measurer_);
        setStyles(_this.measurer_, {
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          visibility: "hidden",
          "font-weight": "bold",
          "letter-spacing": "0.2px"
        });
      });
    }
    var _proto = ButtonTextFitter2.prototype;
    _proto.fit = function fit(pageElement, container, content) {
      var _this2 = this;
      var success = false;
      return this.mutator_.mutateElement(container, function() {
        _this2.measurer_.textContent = content;
        var fontSize = calculateFontSize(_this2.measurer_, MAX_HEIGHT, _this2.getMaxWidth_(pageElement), FontSizes.MIN, FontSizes.MAX);
        if (fontSize >= FontSizes.MIN) {
          _this2.updateFontSize_(container, fontSize);
          success = true;
        }
      }).then(function() {
        return success;
      });
    };
    _proto.getMaxWidth_ = function getMaxWidth_(pageElement) {
      return pageElement.offsetWidth - 84;
    };
    _proto.updateFontSize_ = function updateFontSize_(container, fontSize) {
      setStyle(container, "fontSize", px(fontSize));
    };
    return ButtonTextFitter2;
  }();
  function calculateFontSize(measurer, expectedHeight, expectedWidth, minFontSize, maxFontSize) {
    for (var fontSize = maxFontSize; fontSize >= minFontSize; fontSize--) {
      setStyle(measurer, "fontSize", px(fontSize));
      var height = measurer.offsetHeight;
      var width = measurer.offsetWidth;
      if (height < expectedHeight && width < expectedWidth) {
        return fontSize;
      }
    }
    return minFontSize - 1;
  }

  // src/core/dom/event-helper-listen.js
  var optsSupported;
  var passiveSupported;
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
  function supportsPassiveEventListener(win) {
    if (passiveSupported !== void 0) {
      return passiveSupported;
    }
    passiveSupported = false;
    try {
      var options = {
        get passive() {
          passiveSupported = true;
          return false;
        }
      };
      win.addEventListener("test-options", null, options);
      win.removeEventListener("test-options", null, options);
    } catch (err) {
    }
    return passiveSupported;
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
  function getData(event) {
    return event.data;
  }

  // build/amp-story-auto-ads-attribution-0.1.css.js
  var CSS2 = ".i-amphtml-story-ad-attribution{position:absolute;bottom:0!important;left:0!important;max-height:15px!important;z-index:4!important}.i-amphtml-story-ad-fullbleed.i-amphtml-story-ad-attribution{bottom:12.5vh!important;left:50%!important;transform:translateX(-22.5vh)!important}\n/*# sourceURL=/extensions/amp-story-auto-ads/0.1/amp-story-auto-ads-attribution.css*/";

  // build/amp-story-auto-ads-cta-button-0.1.css.js
  var CSS3 = ".i-amphtml-story-ad-link{background-color:#fff!important;border-radius:20px!important;box-sizing:border-box!important;bottom:32px!important;box-shadow:0px 2px 12px rgba(0,0,0,0.16)!important;color:#4285f4!important;font-family:Roboto,sans-serif!important;font-weight:700!important;height:36px!important;letter-spacing:0.2px!important;line-height:36px!important;overflow:hidden!important;opacity:0;padding:0 10px!important;position:absolute!important;text-align:center!important;text-decoration:none!important;min-width:120px!important;max-width:calc(100vw - 64px)}[cta-active].i-amphtml-story-ad-link{animation-delay:100ms!important;animation-duration:300ms!important;animation-timing-function:cubic-bezier(0.4,0,0.2,1)!important;animation-fill-mode:forwards!important;animation-name:ad-cta!important}@keyframes ad-cta{0%{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}\n/*# sourceURL=/extensions/amp-story-auto-ads/0.1/amp-story-auto-ads-cta-button.css*/";

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
    userAssert(urlString != null, "%s %s must be available", elementContext, sourceName);
    userAssert(isSecureUrlDeprecated(urlString) || /^\/\//.test(urlString), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', elementContext, sourceName, urlString);
    return urlString;
  }

  // extensions/amp-story/1.0/embed-mode.js
  var EmbedMode = {
    NOT_EMBEDDED: 0,
    NAME_TBD: 1,
    NO_SHARING: 2,
    PREVIEW: 3,
    NO_SHARING_NOR_AUDIO_UI: 4
  };
  var EmbedModeParam = "embedMode";
  function parseEmbedMode(str) {
    var params = parseQueryString(str);
    var unsanitizedEmbedMode = params[EmbedModeParam];
    var embedModeIndex = parseInt(unsanitizedEmbedMode, 10);
    return isEnumValue(EmbedMode, embedModeIndex) ? embedModeIndex : EmbedMode.NOT_EMBEDDED;
  }

  // src/core/data-structures/observable.js
  function _createForOfIteratorHelperLoose3(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray3(o)) || allowArrayLike && o && typeof o.length === "number") {
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
  function _unsupportedIterableToArray3(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray3(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray3(o, minLen);
  }
  function _arrayLikeToArray3(arr, len) {
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
      for (var _iterator = _createForOfIteratorHelperLoose3(this.handlers_), _step; !(_step = _iterator()).done; ) {
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

  // extensions/amp-story/1.0/amp-story-store-service.js
  var _stateComparisonFunct;
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
  var TAG2 = "amp-story";
  var getStoreService = function getStoreService2(win) {
    var service = Services.storyStoreService(win);
    if (!service) {
      service = new AmpStoryStoreService(win);
      registerServiceBuilder(win, "story-store", function() {
        return service;
      });
    }
    return service;
  };
  var UIType = {
    MOBILE: 0,
    DESKTOP_FULLBLEED: 2,
    DESKTOP_ONE_PANEL: 4,
    VERTICAL: 3
  };
  var EmbeddedComponentState = {
    HIDDEN: 0,
    FOCUSED: 1
  };
  var StateProperty = {
    CAN_INSERT_AUTOMATIC_AD: "canInsertAutomaticAd",
    CAN_SHOW_AUDIO_UI: "canShowAudioUi",
    CAN_SHOW_NAVIGATION_OVERLAY_HINT: "canShowNavigationOverlayHint",
    CAN_SHOW_PAGINATION_BUTTONS: "canShowPaginationButtons",
    CAN_SHOW_PREVIOUS_PAGE_HELP: "canShowPreviousPageHelp",
    CAN_SHOW_SHARING_UIS: "canShowSharingUis",
    CAN_SHOW_STORY_URL_INFO: "canShowStoryUrlInfo",
    CAN_SHOW_SYSTEM_LAYER_BUTTONS: "canShowSystemLayerButtons",
    VIEWER_CUSTOM_CONTROLS: "viewerCustomControls",
    ACCESS_STATE: "accessState",
    AD_STATE: "adState",
    PAGE_ATTACHMENT_STATE: "pageAttachmentState",
    AFFILIATE_LINK_STATE: "affiliateLinkState",
    EDUCATION_STATE: "educationState",
    GYROSCOPE_PERMISSION_STATE: "gyroscopePermissionState",
    INFO_DIALOG_STATE: "infoDialogState",
    INTERACTIVE_COMPONENT_STATE: "interactiveEmbeddedComponentState",
    INTERACTIVE_REACT_STATE: "interactiveReactState",
    KEYBOARD_ACTIVE_STATE: "keyboardActiveState",
    MUTED_STATE: "mutedState",
    PAGE_HAS_AUDIO_STATE: "pageAudioState",
    PAGE_HAS_ELEMENTS_WITH_PLAYBACK_STATE: "pageHasElementsWithPlaybackState",
    PANNING_MEDIA_STATE: "panningMediaState",
    PAUSED_STATE: "pausedState",
    PREVIEW_STATE: "previewState",
    RTL_STATE: "rtlState",
    SHARE_MENU_STATE: "shareMenuState",
    SHOPPING_DATA: "shoppingData",
    STORY_HAS_AUDIO_STATE: "storyHasAudioState",
    STORY_HAS_BACKGROUND_AUDIO_STATE: "storyHasBackgroundAudioState",
    STORY_HAS_PLAYBACK_UI_STATE: "storyHasPlaybackUiState",
    SYSTEM_UI_IS_VISIBLE_STATE: "systemUiIsVisibleState",
    UI_STATE: "uiState",
    ACTIONS_ALLOWLIST: "actionsAllowlist",
    CONSENT_ID: "consentId",
    CURRENT_PAGE_ID: "currentPageId",
    CURRENT_PAGE_INDEX: "currentPageIndex",
    ADVANCEMENT_MODE: "advancementMode",
    NAVIGATION_PATH: "navigationPath",
    NEW_PAGE_AVAILABLE_ID: "newPageAvailableId",
    PAGE_IDS: "pageIds",
    PAGE_SIZE: "pageSize"
  };
  var Action = {
    ADD_INTERACTIVE_REACT: "addInteractiveReact",
    ADD_TO_ACTIONS_ALLOWLIST: "addToActionsAllowlist",
    CHANGE_PAGE: "setCurrentPageId",
    SET_CONSENT_ID: "setConsentId",
    SET_ADVANCEMENT_MODE: "setAdvancementMode",
    SET_NAVIGATION_PATH: "setNavigationPath",
    SET_PAGE_IDS: "setPageIds",
    TOGGLE_ACCESS: "toggleAccess",
    TOGGLE_AD: "toggleAd",
    TOGGLE_AFFILIATE_LINK: "toggleAffiliateLink",
    TOGGLE_EDUCATION: "toggleEducation",
    TOGGLE_INFO_DIALOG: "toggleInfoDialog",
    TOGGLE_INTERACTIVE_COMPONENT: "toggleInteractiveComponent",
    TOGGLE_KEYBOARD_ACTIVE_STATE: "toggleKeyboardActiveState",
    TOGGLE_MUTED: "toggleMuted",
    TOGGLE_PAGE_ATTACHMENT_STATE: "togglePageAttachmentState",
    TOGGLE_PAGE_HAS_AUDIO: "togglePageHasAudio",
    TOGGLE_PAGE_HAS_ELEMENT_WITH_PLAYBACK: "togglePageHasElementWithPlayblack",
    TOGGLE_PAUSED: "togglePaused",
    TOGGLE_RTL: "toggleRtl",
    TOGGLE_SHARE_MENU: "toggleShareMenu",
    ADD_SHOPPING_DATA: "addShoppingData",
    TOGGLE_STORY_HAS_AUDIO: "toggleStoryHasAudio",
    TOGGLE_STORY_HAS_BACKGROUND_AUDIO: "toggleStoryHasBackgroundAudio",
    TOGGLE_STORY_HAS_PLAYBACK_UI: "toggleStoryHasPlaybackUi",
    TOGGLE_SYSTEM_UI_IS_VISIBLE: "toggleSystemUiIsVisible",
    TOGGLE_UI: "toggleUi",
    SET_GYROSCOPE_PERMISSION: "setGyroscopePermission",
    ADD_NEW_PAGE_ID: "addNewPageId",
    SET_PAGE_SIZE: "updatePageSize",
    ADD_PANNING_MEDIA_STATE: "addPanningMediaState",
    SET_VIEWER_CUSTOM_CONTROLS: "setCustomControls"
  };
  var stateComparisonFunctions = (_stateComparisonFunct = {}, _stateComparisonFunct[StateProperty.ACTIONS_ALLOWLIST] = function(old, curr) {
    return old.length !== curr.length;
  }, _stateComparisonFunct[StateProperty.INTERACTIVE_COMPONENT_STATE] = function(old, curr) {
    return old.element !== curr.element || old.state !== curr.state;
  }, _stateComparisonFunct[StateProperty.NAVIGATION_PATH] = function(old, curr) {
    return old.length !== curr.length;
  }, _stateComparisonFunct[StateProperty.PAGE_IDS] = function(old, curr) {
    return old.length !== curr.length;
  }, _stateComparisonFunct[StateProperty.PAGE_SIZE] = function(old, curr) {
    return old === null || curr === null || old.width !== curr.width || old.height !== curr.height;
  }, _stateComparisonFunct[StateProperty.PANNING_MEDIA_STATE] = function(old, curr) {
    return old === null || curr === null || !deepEquals(old, curr, 2);
  }, _stateComparisonFunct[StateProperty.SHOPPING_DATA] = function(old, curr) {
    return old === null || curr === null || !deepEquals(old, curr, 2);
  }, _stateComparisonFunct[StateProperty.INTERACTIVE_REACT_STATE] = function(old, curr) {
    return !deepEquals(old, curr, 3);
  }, _stateComparisonFunct);
  var actions = function actions2(state, action, data) {
    var _extends22, _extends32, _extends42, _extends5, _extends6, _extends7, _extends8, _extends9, _extends10, _extends11, _extends12, _extends13, _extends14, _extends15, _extends16, _extends17, _extends18, _extends19, _extends20, _extends21, _extends222, _extends23, _extends24, _extends25, _extends26, _extends27, _extends28, _extends29, _extends30, _extends31, _extends322, _extends33, _extends34;
    switch (action) {
      case Action.ADD_INTERACTIVE_REACT:
        return _extends2({}, state, (_extends32 = {}, _extends32[StateProperty.INTERACTIVE_REACT_STATE] = _extends2({}, state[StateProperty.INTERACTIVE_REACT_STATE], (_extends22 = {}, _extends22[data["interactiveId"]] = data, _extends22)), _extends32));
      case Action.ADD_NEW_PAGE_ID:
        return _extends2({}, state, (_extends42 = {}, _extends42[StateProperty.NEW_PAGE_AVAILABLE_ID] = data, _extends42));
      case Action.ADD_PANNING_MEDIA_STATE:
        var updatedState = _extends2({}, state[StateProperty.PANNING_MEDIA_STATE], data);
        return _extends2({}, state, (_extends5 = {}, _extends5[StateProperty.PANNING_MEDIA_STATE] = updatedState, _extends5));
      case Action.ADD_SHOPPING_DATA:
        var updatedShoppingData = _extends2({}, state[StateProperty.SHOPPING_DATA], data);
        return _extends2({}, state, (_extends6 = {}, _extends6[StateProperty.SHOPPING_DATA] = updatedShoppingData, _extends6));
      case Action.ADD_TO_ACTIONS_ALLOWLIST:
        var newActionsAllowlist = [].concat(state[StateProperty.ACTIONS_ALLOWLIST], data);
        return _extends2({}, state, (_extends7 = {}, _extends7[StateProperty.ACTIONS_ALLOWLIST] = newActionsAllowlist, _extends7));
      case Action.TOGGLE_ACCESS:
        if (state[StateProperty.ACCESS_STATE] === data) {
          return state;
        }
        return _extends2({}, state, (_extends8 = {}, _extends8[StateProperty.ACCESS_STATE] = !!data, _extends8[StateProperty.PAUSED_STATE] = !!data, _extends8));
      case Action.TOGGLE_PAGE_ATTACHMENT_STATE:
        return _extends2({}, state, (_extends9 = {}, _extends9[StateProperty.PAGE_ATTACHMENT_STATE] = !!data, _extends9));
      case Action.TOGGLE_AD:
        return _extends2({}, state, (_extends10 = {}, _extends10[StateProperty.AD_STATE] = !!data, _extends10));
      case Action.TOGGLE_AFFILIATE_LINK:
        return _extends2({}, state, (_extends11 = {}, _extends11[StateProperty.AFFILIATE_LINK_STATE] = data, _extends11));
      case Action.TOGGLE_EDUCATION:
        return _extends2({}, state, (_extends12 = {}, _extends12[StateProperty.EDUCATION_STATE] = !!data, _extends12));
      case Action.TOGGLE_INTERACTIVE_COMPONENT:
        data = data;
        return _extends2({}, state, (_extends13 = {}, _extends13[StateProperty.PAUSED_STATE] = data.state === EmbeddedComponentState.FOCUSED, _extends13[StateProperty.SYSTEM_UI_IS_VISIBLE_STATE] = true, _extends13[StateProperty.INTERACTIVE_COMPONENT_STATE] = data, _extends13));
      case Action.TOGGLE_INFO_DIALOG:
        return _extends2({}, state, (_extends14 = {}, _extends14[StateProperty.INFO_DIALOG_STATE] = !!data, _extends14[StateProperty.PAUSED_STATE] = !!data, _extends14));
      case Action.TOGGLE_STORY_HAS_AUDIO:
        return _extends2({}, state, (_extends15 = {}, _extends15[StateProperty.STORY_HAS_AUDIO_STATE] = !!data, _extends15));
      case Action.TOGGLE_STORY_HAS_BACKGROUND_AUDIO:
        return _extends2({}, state, (_extends16 = {}, _extends16[StateProperty.STORY_HAS_BACKGROUND_AUDIO_STATE] = !!data, _extends16));
      case Action.TOGGLE_STORY_HAS_PLAYBACK_UI:
        return _extends2({}, state, (_extends17 = {}, _extends17[StateProperty.STORY_HAS_PLAYBACK_UI_STATE] = !!data, _extends17));
      case Action.TOGGLE_MUTED:
        return _extends2({}, state, (_extends18 = {}, _extends18[StateProperty.MUTED_STATE] = !!data, _extends18));
      case Action.TOGGLE_PAGE_HAS_AUDIO:
        return _extends2({}, state, (_extends19 = {}, _extends19[StateProperty.PAGE_HAS_AUDIO_STATE] = !!data, _extends19));
      case Action.TOGGLE_PAGE_HAS_ELEMENT_WITH_PLAYBACK:
        return _extends2({}, state, (_extends20 = {}, _extends20[StateProperty.PAGE_HAS_ELEMENTS_WITH_PLAYBACK_STATE] = !!data, _extends20));
      case Action.TOGGLE_PAUSED:
        return _extends2({}, state, (_extends21 = {}, _extends21[StateProperty.PAUSED_STATE] = !!data, _extends21));
      case Action.TOGGLE_RTL:
        return _extends2({}, state, (_extends222 = {}, _extends222[StateProperty.RTL_STATE] = !!data, _extends222));
      case Action.TOGGLE_KEYBOARD_ACTIVE_STATE:
        return _extends2({}, state, (_extends23 = {}, _extends23[StateProperty.KEYBOARD_ACTIVE_STATE] = !!data, _extends23));
      case Action.TOGGLE_SHARE_MENU:
        return _extends2({}, state, (_extends24 = {}, _extends24[StateProperty.PAUSED_STATE] = !!data, _extends24[StateProperty.SHARE_MENU_STATE] = !!data, _extends24));
      case Action.TOGGLE_SYSTEM_UI_IS_VISIBLE:
        return _extends2({}, state, (_extends25 = {}, _extends25[StateProperty.SYSTEM_UI_IS_VISIBLE_STATE] = !!data, _extends25));
      case Action.TOGGLE_UI:
        if (state[StateProperty.UI_STATE] === UIType.VERTICAL && data !== UIType.VERTICAL) {
          dev().error(TAG2, "Cannot switch away from UIType.VERTICAL");
          return state;
        }
        return _extends2({}, state, (_extends26 = {}, _extends26[StateProperty.UI_STATE] = data, _extends26));
      case Action.SET_GYROSCOPE_PERMISSION:
        return _extends2({}, state, (_extends27 = {}, _extends27[StateProperty.GYROSCOPE_PERMISSION_STATE] = data, _extends27));
      case Action.SET_CONSENT_ID:
        return _extends2({}, state, (_extends28 = {}, _extends28[StateProperty.CONSENT_ID] = data, _extends28));
      case Action.CHANGE_PAGE:
        return _extends2({}, state, (_extends29 = {}, _extends29[StateProperty.CURRENT_PAGE_ID] = data.id, _extends29[StateProperty.CURRENT_PAGE_INDEX] = data.index, _extends29));
      case Action.SET_ADVANCEMENT_MODE:
        return _extends2({}, state, (_extends30 = {}, _extends30[StateProperty.ADVANCEMENT_MODE] = data, _extends30));
      case Action.SET_NAVIGATION_PATH:
        return _extends2({}, state, (_extends31 = {}, _extends31[StateProperty.NAVIGATION_PATH] = data, _extends31));
      case Action.SET_PAGE_IDS:
        return _extends2({}, state, (_extends322 = {}, _extends322[StateProperty.PAGE_IDS] = data, _extends322));
      case Action.SET_PAGE_SIZE:
        return _extends2({}, state, (_extends33 = {}, _extends33[StateProperty.PAGE_SIZE] = data, _extends33));
      case Action.SET_VIEWER_CUSTOM_CONTROLS:
        return _extends2({}, state, (_extends34 = {}, _extends34[StateProperty.VIEWER_CUSTOM_CONTROLS] = data, _extends34));
      default:
        dev().error(TAG2, "Unknown action %s.", action);
        return state;
    }
  };
  var AmpStoryStoreService = /* @__PURE__ */ function() {
    function AmpStoryStoreService2(win) {
      this.win_ = win;
      this.listeners_ = {};
      this.state_ = _extends2({}, this.getDefaultState_(), this.getEmbedOverrides_());
    }
    var _proto = AmpStoryStoreService2.prototype;
    _proto.get = function get(key) {
      if (!hasOwn(this.state_, key)) {
        dev().error(TAG2, "Unknown state %s.", key);
        return;
      }
      return this.state_[key];
    };
    _proto.subscribe = function subscribe(key, listener, callToInitialize) {
      if (callToInitialize === void 0) {
        callToInitialize = false;
      }
      if (!hasOwn(this.state_, key)) {
        dev().error(TAG2, "Can't subscribe to unknown state %s.", key);
        return;
      }
      if (!this.listeners_[key]) {
        this.listeners_[key] = new Observable();
      }
      this.listeners_[key].add(listener);
      if (callToInitialize) {
        listener(this.get(key));
      }
    };
    _proto.dispatch = function dispatch2(action, data) {
      var _this = this;
      var oldState = _extends2({}, this.state_);
      this.state_ = actions(this.state_, action, data);
      var comparisonFn;
      Object.keys(this.listeners_).forEach(function(key) {
        comparisonFn = stateComparisonFunctions[key];
        if (comparisonFn ? comparisonFn(oldState[key], _this.state_[key]) : oldState[key] !== _this.state_[key]) {
          _this.listeners_[key].fire(_this.state_[key]);
        }
      });
    };
    _proto.getDefaultState_ = function getDefaultState_() {
      var _StateProperty$CAN_IN;
      return _StateProperty$CAN_IN = {}, _StateProperty$CAN_IN[StateProperty.CAN_INSERT_AUTOMATIC_AD] = true, _StateProperty$CAN_IN[StateProperty.CAN_SHOW_AUDIO_UI] = true, _StateProperty$CAN_IN[StateProperty.CAN_SHOW_NAVIGATION_OVERLAY_HINT] = true, _StateProperty$CAN_IN[StateProperty.CAN_SHOW_PREVIOUS_PAGE_HELP] = true, _StateProperty$CAN_IN[StateProperty.CAN_SHOW_PAGINATION_BUTTONS] = true, _StateProperty$CAN_IN[StateProperty.CAN_SHOW_SHARING_UIS] = true, _StateProperty$CAN_IN[StateProperty.CAN_SHOW_STORY_URL_INFO] = true, _StateProperty$CAN_IN[StateProperty.CAN_SHOW_SYSTEM_LAYER_BUTTONS] = true, _StateProperty$CAN_IN[StateProperty.VIEWER_CUSTOM_CONTROLS] = [], _StateProperty$CAN_IN[StateProperty.ACCESS_STATE] = false, _StateProperty$CAN_IN[StateProperty.AD_STATE] = false, _StateProperty$CAN_IN[StateProperty.AFFILIATE_LINK_STATE] = null, _StateProperty$CAN_IN[StateProperty.EDUCATION_STATE] = false, _StateProperty$CAN_IN[StateProperty.GYROSCOPE_PERMISSION_STATE] = "", _StateProperty$CAN_IN[StateProperty.INFO_DIALOG_STATE] = false, _StateProperty$CAN_IN[StateProperty.INTERACTIVE_COMPONENT_STATE] = {
        state: EmbeddedComponentState.HIDDEN
      }, _StateProperty$CAN_IN[StateProperty.INTERACTIVE_REACT_STATE] = {}, _StateProperty$CAN_IN[StateProperty.KEYBOARD_ACTIVE_STATE] = false, _StateProperty$CAN_IN[StateProperty.MUTED_STATE] = true, _StateProperty$CAN_IN[StateProperty.PAGE_ATTACHMENT_STATE] = false, _StateProperty$CAN_IN[StateProperty.PAGE_HAS_AUDIO_STATE] = false, _StateProperty$CAN_IN[StateProperty.PAGE_HAS_ELEMENTS_WITH_PLAYBACK_STATE] = false, _StateProperty$CAN_IN[StateProperty.PANNING_MEDIA_STATE] = {}, _StateProperty$CAN_IN[StateProperty.PAUSED_STATE] = false, _StateProperty$CAN_IN[StateProperty.RTL_STATE] = false, _StateProperty$CAN_IN[StateProperty.SHARE_MENU_STATE] = false, _StateProperty$CAN_IN[StateProperty.SHOPPING_DATA] = {}, _StateProperty$CAN_IN[StateProperty.STORY_HAS_AUDIO_STATE] = false, _StateProperty$CAN_IN[StateProperty.STORY_HAS_BACKGROUND_AUDIO_STATE] = false, _StateProperty$CAN_IN[StateProperty.STORY_HAS_PLAYBACK_UI_STATE] = false, _StateProperty$CAN_IN[StateProperty.SYSTEM_UI_IS_VISIBLE_STATE] = true, _StateProperty$CAN_IN[StateProperty.UI_STATE] = UIType.MOBILE, _StateProperty$CAN_IN[StateProperty.ACTIONS_ALLOWLIST] = [], _StateProperty$CAN_IN[StateProperty.CONSENT_ID] = null, _StateProperty$CAN_IN[StateProperty.CURRENT_PAGE_ID] = "", _StateProperty$CAN_IN[StateProperty.CURRENT_PAGE_INDEX] = 0, _StateProperty$CAN_IN[StateProperty.ADVANCEMENT_MODE] = "", _StateProperty$CAN_IN[StateProperty.NEW_PAGE_AVAILABLE_ID] = "", _StateProperty$CAN_IN[StateProperty.NAVIGATION_PATH] = [], _StateProperty$CAN_IN[StateProperty.PAGE_IDS] = [], _StateProperty$CAN_IN[StateProperty.PAGE_SIZE] = null, _StateProperty$CAN_IN[StateProperty.PREVIEW_STATE] = false, _StateProperty$CAN_IN;
    };
    _proto.getEmbedOverrides_ = function getEmbedOverrides_() {
      var _ref, _ref2, _ref3, _ref4;
      var embedMode = parseEmbedMode(this.win_.location.hash);
      switch (embedMode) {
        case EmbedMode.NAME_TBD:
          return _ref = {}, _ref[StateProperty.CAN_INSERT_AUTOMATIC_AD] = false, _ref[StateProperty.CAN_SHOW_NAVIGATION_OVERLAY_HINT] = false, _ref[StateProperty.CAN_SHOW_PAGINATION_BUTTONS] = false, _ref[StateProperty.CAN_SHOW_PREVIOUS_PAGE_HELP] = true, _ref[StateProperty.CAN_SHOW_SYSTEM_LAYER_BUTTONS] = false, _ref[StateProperty.MUTED_STATE] = false, _ref;
        case EmbedMode.NO_SHARING:
          return _ref2 = {}, _ref2[StateProperty.CAN_SHOW_SHARING_UIS] = false, _ref2;
        case EmbedMode.PREVIEW:
          return _ref3 = {}, _ref3[StateProperty.PREVIEW_STATE] = true, _ref3[StateProperty.CAN_INSERT_AUTOMATIC_AD] = false, _ref3[StateProperty.CAN_SHOW_NAVIGATION_OVERLAY_HINT] = false, _ref3[StateProperty.CAN_SHOW_PAGINATION_BUTTONS] = false, _ref3[StateProperty.CAN_SHOW_PREVIOUS_PAGE_HELP] = false, _ref3[StateProperty.CAN_SHOW_SYSTEM_LAYER_BUTTONS] = false, _ref3;
        case EmbedMode.NO_SHARING_NOR_AUDIO_UI:
          return _ref4 = {}, _ref4[StateProperty.CAN_SHOW_AUDIO_UI] = false, _ref4[StateProperty.CAN_SHOW_SHARING_UIS] = false, _ref4[StateProperty.CAN_SHOW_STORY_URL_INFO] = false, _ref4;
        default:
          return {};
      }
    };
    return AmpStoryStoreService2;
  }();

  // src/core/dom/web-components.js
  var ShadowDomVersion_Enum = {
    NONE: "none",
    V0: "v0",
    V1: "v1"
  };
  var shadowDomSupportedVersion;
  var shadowCssSupported;
  function isShadowDomSupported() {
    return getShadowDomSupportedVersion() != ShadowDomVersion_Enum.NONE;
  }
  function isShadowCssSupported() {
    if (shadowCssSupported === void 0) {
      shadowCssSupported = isShadowDomSupported() && (isNative(Element.prototype.attachShadow) || isNative(Element.prototype.createShadowRoot));
    }
    return shadowCssSupported;
  }
  function isNative(func) {
    return !!func && func.toString().indexOf("[native code]") != -1;
  }
  function getShadowDomSupportedVersion(opt_elementClass) {
    if (shadowDomSupportedVersion === void 0) {
      shadowDomSupportedVersion = getShadowDomVersion(opt_elementClass || Element);
    }
    return shadowDomSupportedVersion;
  }
  function getShadowDomVersion(element) {
    if (!!element.prototype.attachShadow) {
      return ShadowDomVersion_Enum.V1;
    } else if (!!element.prototype.createShadowRoot) {
      return ShadowDomVersion_Enum.V0;
    }
    return ShadowDomVersion_Enum.NONE;
  }

  // third_party/webcomponentsjs/ShadowCSS.js
  var ShadowCSS = {
    strictStyling: false,
    scopeRules: function scopeRules(cssRules, scopeSelector2, opt_transformer) {
      var cssText = "";
      if (cssRules) {
        Array.prototype.forEach.call(cssRules, function(rule) {
          if (rule.selectorText && (rule.style && rule.style.cssText !== void 0)) {
            cssText += this.scopeSelector(rule.selectorText, scopeSelector2, this.strictStyling, opt_transformer) + " {\n	";
            cssText += this.propertiesFromRule(rule) + "\n}\n\n";
          } else if (rule.type === CSSRule.MEDIA_RULE) {
            cssText += "@media " + rule.media.mediaText + " {\n";
            cssText += this.scopeRules(rule.cssRules, scopeSelector2);
            cssText += "\n}\n\n";
          } else {
            try {
              if (rule.cssText) {
                cssText += rule.cssText + "\n\n";
              }
            } catch (x) {
              if (rule.type === CSSRule.KEYFRAMES_RULE && rule.cssRules) {
                cssText += this.ieSafeCssTextFromKeyFrameRule(rule);
              }
            }
          }
        }, this);
      }
      return cssText;
    },
    ieSafeCssTextFromKeyFrameRule: function ieSafeCssTextFromKeyFrameRule(rule) {
      var cssText = "@keyframes " + rule.name + " {";
      Array.prototype.forEach.call(rule.cssRules, function(rule2) {
        cssText += " " + rule2.keyText + " {" + rule2.style.cssText + "}";
      });
      cssText += " }";
      return cssText;
    },
    scopeSelector: function scopeSelector(selector, _scopeSelector, strict, opt_transformer) {
      var r = [], parts = selector.split(",");
      parts.forEach(function(p) {
        p = p.trim();
        if (opt_transformer) {
          p = opt_transformer(p);
        }
        if (this.selectorNeedsScoping(p, _scopeSelector)) {
          p = strict && !p.match(polyfillHostNoCombinator) ? this.applyStrictSelectorScope(p, _scopeSelector) : this.applySelectorScope(p, _scopeSelector);
        }
        r.push(p);
      }, this);
      return r.join(", ");
    },
    selectorNeedsScoping: function selectorNeedsScoping(selector, scopeSelector2) {
      if (Array.isArray(scopeSelector2)) {
        return true;
      }
      var re = this.makeScopeMatcher(scopeSelector2);
      return !selector.match(re);
    },
    makeScopeMatcher: function makeScopeMatcher(scopeSelector2) {
      scopeSelector2 = scopeSelector2.replace(/\[/g, "\\[").replace(/\]/g, "\\]");
      return new RegExp("^(" + scopeSelector2 + ")" + selectorReSuffix, "m");
    },
    applySelectorScope: function applySelectorScope(selector, selectorScope) {
      return Array.isArray(selectorScope) ? this.applySelectorScopeList(selector, selectorScope) : this.applySimpleSelectorScope(selector, selectorScope);
    },
    applySelectorScopeList: function applySelectorScopeList(selector, scopeSelectorList) {
      var r = [];
      for (var i = 0, s; s = scopeSelectorList[i]; i++) {
        r.push(this.applySimpleSelectorScope(selector, s));
      }
      return r.join(", ");
    },
    applySimpleSelectorScope: function applySimpleSelectorScope(selector, scopeSelector2) {
      if (selector.match(polyfillHostRe)) {
        selector = selector.replace(polyfillHostNoCombinator, scopeSelector2);
        return selector.replace(polyfillHostRe, scopeSelector2 + " ");
      } else {
        return scopeSelector2 + " " + selector;
      }
    },
    applyStrictSelectorScope: function applyStrictSelectorScope(selector, scopeSelector2) {
      scopeSelector2 = scopeSelector2.replace(/\[is=([^\]]*)\]/g, "$1");
      var splits = [" ", ">", "+", "~"], scoped = selector, attrName = "[" + scopeSelector2 + "]";
      splits.forEach(function(sep) {
        var parts = scoped.split(sep);
        scoped = parts.map(function(p) {
          var t = p.trim().replace(polyfillHostRe, "");
          if (t && splits.indexOf(t) < 0 && t.indexOf(attrName) < 0) {
            p = t.replace(/([^:]*)(:*)(.*)/, "$1" + attrName + "$2$3");
          }
          return p;
        }).join(sep);
      });
      return scoped;
    },
    propertiesFromRule: function propertiesFromRule(rule) {
      var cssText = rule.style.cssText;
      if (rule.style.content && !rule.style.content.match(/['"]+|attr/)) {
        cssText = cssText.replace(/content:[^;]*;/g, "content: '" + rule.style.content + "';");
      }
      var style = rule.style;
      for (var i in style) {
        if (style[i] === "initial") {
          cssText += i + ": initial; ";
        }
      }
      return cssText;
    }
  };
  var polyfillHost = "-shadowcsshost";
  var polyfillHostContext = "-shadowcsscontext";
  var parenSuffix = ")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)";
  var cssColonHostRe = new RegExp("(" + polyfillHost + parenSuffix, "gim");
  var cssColonHostContextRe = new RegExp("(" + polyfillHostContext + parenSuffix, "gim");
  var selectorReSuffix = "([>\\s~+[.,{:][\\s\\S]*)?$";
  var polyfillHostNoCombinator = polyfillHost + "-no-combinator";
  var polyfillHostRe = new RegExp(polyfillHost, "gim");
  var polyfillHostContextRe = new RegExp(polyfillHostContext, "gim");

  // src/style-installer.js
  var TRANSFORMER_PROP = "__AMP_CSS_TR";
  function installCssTransformer(cssRoot, transformer) {
    cssRoot[TRANSFORMER_PROP] = transformer;
  }

  // src/shadow-embed.js
  var CSS_SELECTOR_BEG_REGEX = /[^\.\-\_0-9a-zA-Z]/;
  var CSS_SELECTOR_END_REGEX = /[^\-\_0-9a-zA-Z]/;
  function createShadowRoot(hostElement) {
    var win = getWin(hostElement);
    var existingRoot = hostElement.shadowRoot || hostElement.__AMP_SHADOW_ROOT;
    if (existingRoot) {
      existingRoot.innerHTML = "";
      return existingRoot;
    }
    var shadowRoot;
    var shadowDomSupported = getShadowDomSupportedVersion();
    if (shadowDomSupported == ShadowDomVersion_Enum.V1) {
      shadowRoot = hostElement.attachShadow({
        mode: "open"
      });
      if (!shadowRoot.styleSheets) {
        Object.defineProperty(shadowRoot, "styleSheets", {
          get: function get() {
            var items = [];
            iterateCursor(shadowRoot.childNodes, function(child) {
              if (child.tagName === "STYLE") {
                items.push(child.sheet);
              }
            });
            return items;
          }
        });
      }
    } else if (shadowDomSupported == ShadowDomVersion_Enum.V0) {
      shadowRoot = hostElement.createShadowRoot();
    } else {
      shadowRoot = createShadowRootPolyfill(hostElement);
    }
    if (!isShadowCssSupported()) {
      var rootId = "i-amphtml-sd-" + win.Math.floor(win.Math.random() * 1e4);
      shadowRoot["id"] = rootId;
      shadowRoot.host.classList.add(rootId);
      installCssTransformer(shadowRoot, function(css) {
        return transformShadowCss(shadowRoot, css);
      });
    }
    return shadowRoot;
  }
  function createShadowRootPolyfill(hostElement) {
    var doc = hostElement.ownerDocument;
    hostElement.classList.add("i-amphtml-shadow-host-polyfill");
    var hostStyle = doc.createElement("style");
    hostStyle.textContent = ".i-amphtml-shadow-host-polyfill>:not(i-amphtml-shadow-root){display:none!important}";
    hostElement.appendChild(hostStyle);
    var shadowRoot = doc.createElement("i-amphtml-shadow-root");
    hostElement.appendChild(shadowRoot);
    hostElement.__AMP_SHADOW_ROOT = shadowRoot;
    Object.defineProperty(hostElement, "shadowRoot", {
      enumerable: true,
      configurable: true,
      value: shadowRoot
    });
    shadowRoot.host = hostElement;
    shadowRoot.getElementById = function(id) {
      var escapedId = escapeCssSelectorIdent(id);
      return shadowRoot.querySelector("#" + escapedId);
    };
    Object.defineProperty(shadowRoot, "styleSheets", {
      get: function get() {
        if (!doc.styleSheets) {
          return [];
        }
        return toArray(doc.styleSheets).filter(function(styleSheet) {
          return shadowRoot.contains(styleSheet.ownerNode);
        });
      }
    });
    return shadowRoot;
  }
  function transformShadowCss(shadowRoot, css) {
    return scopeShadowCss(shadowRoot, css);
  }
  function scopeShadowCss(shadowRoot, css) {
    var id = devAssert2(shadowRoot["id"]);
    var doc = shadowRoot.ownerDocument;
    var rules = null;
    try {
      rules = getStylesheetRules(doc.implementation.createHTMLDocument(""), css);
    } catch (e) {
    }
    if (!rules) {
      try {
        rules = getStylesheetRules(doc, css);
      } catch (e) {
      }
    }
    if (!rules) {
      return css;
    }
    var scopeRules2 = ShadowCSS.scopeRules;
    return scopeRules2.call(ShadowCSS, rules, "." + id, transformRootSelectors);
  }
  function transformRootSelectors(selector) {
    return selector.replace(/(html|body)/g, rootSelectorPrefixer);
  }
  function rootSelectorPrefixer(match, name, pos, selector) {
    var prev = selector.charAt(pos - 1);
    var next = selector.charAt(pos + match.length);
    if ((!prev || CSS_SELECTOR_BEG_REGEX.test(prev)) && (!next || CSS_SELECTOR_END_REGEX.test(next))) {
      return "amp-" + match;
    }
    return match;
  }
  function getStylesheetRules(doc, css) {
    var style = doc.createElement("style");
    style.textContent = css;
    try {
      (doc.head || doc.documentElement).appendChild(style);
      if (style.sheet) {
        return style.sheet.cssRules;
      }
      return null;
    } finally {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    }
  }

  // extensions/amp-story/1.0/utils.js
  function createShadowRootWithStyle(container, element, css) {
    var style = self.document.createElement("style");
    style.textContent = css;
    var containerToUse = getMode().test ? container : createShadowRoot(container);
    containerToUse.appendChild(style);
    containerToUse.appendChild(element);
    return container;
  }
  var TEXT_BACKGROUND_COLOR_ATTRIBUTE_NAME = "data-text-background-color";
  var TEXT_BACKGROUND_COLOR_SELECTOR = "[" + TEXT_BACKGROUND_COLOR_ATTRIBUTE_NAME + "]";

  // extensions/amp-story-auto-ads/0.1/story-ad-ui.js
  function _createForOfIteratorHelperLoose4(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray4(o)) || allowArrayLike && o && typeof o.length === "number") {
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
  function _unsupportedIterableToArray4(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray4(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray4(o, minLen);
  }
  function _arrayLikeToArray4(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  var TAG3 = "amp-story-auto-ads:ui";
  var CTA_META_PREFIX = "amp-cta-";
  var A4A_VARS_META_PREFIX = "amp4ads-vars-";
  var START_CTA_ANIMATION_ATTR = "cta-active";
  var A4AVarNames = {
    ATTRIBUTION_ICON: "attribution-icon",
    ATTRIBUTION_URL: "attribution-url",
    CTA_TYPE: "cta-type",
    CTA_URL: "cta-url"
  };
  var PageOutlinkLayerVarNames = ["cta-accent-color", "cta-accent-element", "cta-image", "theme"];
  var DataAttrs = {
    CTA_TYPE: "data-vars-ctatype",
    CTA_URL: "data-vars-ctaurl"
  };
  function getStoryAdMetaTags(doc) {
    var selector = "meta[name^=amp4ads-vars-],meta[name^=amp-cta-]";
    return doc.querySelectorAll(selector);
  }
  function getStoryAdMetadataFromDoc(doc) {
    var storyMetaTags = getStoryAdMetaTags(doc);
    var vars = map();
    iterateCursor(storyMetaTags, function(tag) {
      var content = tag.content, name = tag.name;
      if (name.startsWith(CTA_META_PREFIX)) {
        var key = name.split("amp-")[1];
        vars[key] = content;
      } else if (name.startsWith(A4A_VARS_META_PREFIX)) {
        var _key = name.split(A4A_VARS_META_PREFIX)[1];
        vars[_key] = content;
      }
    });
    return vars;
  }
  function getStoryAdMetadataFromElement(adElement) {
    var _ref;
    var ctaUrl = adElement.getAttribute(DataAttrs.CTA_URL);
    var ctaType = adElement.getAttribute(DataAttrs.CTA_TYPE);
    return _ref = {}, _ref[A4AVarNames.CTA_TYPE] = ctaType, _ref[A4AVarNames.CTA_URL] = ctaUrl, _ref;
  }
  function validateCtaMetadata(metadata, opt_inabox) {
    if (!metadata[A4AVarNames.CTA_TYPE] || !metadata[A4AVarNames.CTA_URL]) {
      !opt_inabox && user().error(TAG3, "Both CTA Type & CTA Url are required in ad response.");
      return false;
    }
    return true;
  }
  function maybeCreateAttribution(win, metadata, container) {
    var doc = win.document;
    try {
      var href = metadata[A4AVarNames.ATTRIBUTION_URL];
      var src = metadata[A4AVarNames.ATTRIBUTION_ICON];
      if (!href || !src) {
        return null;
      }
      assertHttpsUrl(href, dev().assertElement(container), "amp-story-auto-ads attribution url");
      assertHttpsUrl(src, dev().assertElement(container), "amp-story-auto-ads attribution icon");
      var root = createElementWithAttributes(doc, "div", dict({
        "role": "button",
        "class": "i-amphtml-attribution-host"
      }));
      var adChoicesIcon = createElementWithAttributes(doc, "img", dict({
        "class": "i-amphtml-story-ad-attribution",
        "src": src
      }));
      adChoicesIcon.addEventListener("click", function(unusedEvent) {
        return handleAttributionClick(win, href);
      });
      createShadowRootWithStyle(root, adChoicesIcon, CSS2);
      container.appendChild(root);
      return adChoicesIcon;
    } catch (e) {
      return null;
    }
  }
  function handleAttributionClick(win, href) {
    openWindowDialog(win, href, "_blank");
  }
  function createPageOutlink_(doc, uiMetadata, container) {
    var pageOutlink = doc.createElement("amp-story-page-outlink");
    pageOutlink.setAttribute("layout", "nodisplay");
    var pageAnchorTag = createElementWithAttributes(doc, "a", dict({
      "class": "i-amphtml-story-ad-link",
      "target": "_top",
      "href": uiMetadata[A4AVarNames.CTA_URL]
    }));
    pageAnchorTag.textContent = uiMetadata[A4AVarNames.CTA_TYPE];
    pageOutlink.appendChild(pageAnchorTag);
    for (var _iterator = _createForOfIteratorHelperLoose4(PageOutlinkLayerVarNames), _step; !(_step = _iterator()).done; ) {
      var pageOutlinkLayerVarName = _step.value;
      if (uiMetadata[pageOutlinkLayerVarName]) {
        pageOutlink.setAttribute(pageOutlinkLayerVarName, uiMetadata[pageOutlinkLayerVarName]);
      }
    }
    pageOutlink.className = "i-amphtml-story-page-outlink-container";
    container.appendChild(pageOutlink);
    return pageAnchorTag;
  }
  function createCtaLayer_(a, doc, container) {
    var ctaLayer = doc.createElement("amp-story-cta-layer");
    ctaLayer.className = "i-amphtml-cta-container";
    var linkRoot = createElementWithAttributes(doc, "div", dict({
      "class": "i-amphtml-story-ad-link-root",
      "role": "button"
    }));
    createShadowRootWithStyle(linkRoot, a, CSS3);
    ctaLayer.appendChild(linkRoot);
    container.appendChild(ctaLayer);
    return a;
  }
  function createCta(doc, buttonFitter, container, uiMetadata) {
    var ctaUrl = uiMetadata[A4AVarNames.CTA_URL];
    var ctaText = uiMetadata[A4AVarNames.CTA_TYPE];
    var a = createElementWithAttributes(doc, "a", dict({
      "class": "i-amphtml-story-ad-link",
      "target": "_blank",
      "href": ctaUrl
    }));
    var fitPromise = buttonFitter.fit(dev().assertElement(container), a, ctaText);
    return fitPromise.then(function(success) {
      if (!success) {
        user().warn(TAG3, "CTA button text is too long. Ad was discarded.");
        return null;
      }
      a.href = ctaUrl;
      a.textContent = ctaText;
      if (a.protocol !== "https:" && a.protocol !== "http:") {
        user().warn(TAG3, "CTA url is not valid. Ad was discarded");
        return null;
      }
      var storyAdSegmentBranch = getExperimentBranch(doc.defaultView, StoryAdSegmentExp.ID);
      if (storyAdSegmentBranch && storyAdSegmentBranch !== StoryAdSegmentExp.CONTROL) {
        return createPageOutlink_(doc, uiMetadata, container);
      } else {
        return createCtaLayer_(a, doc, container);
      }
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

  // src/gesture.js
  var PROP_ = "__AMP_Gestures";
  var Gesture = function Gesture2(type, data, time, event) {
    this.type = type;
    this.data = data;
    this.time = time;
    this.event = event;
  };
  var Gestures = /* @__PURE__ */ function() {
    Gestures2.get = function get(element, opt_shouldNotPreventDefault, opt_shouldStopPropagation) {
      if (opt_shouldNotPreventDefault === void 0) {
        opt_shouldNotPreventDefault = false;
      }
      if (opt_shouldStopPropagation === void 0) {
        opt_shouldStopPropagation = false;
      }
      var res = element[PROP_];
      if (!res) {
        res = new Gestures2(element, opt_shouldNotPreventDefault, opt_shouldStopPropagation);
        element[PROP_] = res;
      }
      return res;
    };
    function Gestures2(element, shouldNotPreventDefault, shouldStopPropagation) {
      this.element_ = element;
      this.recognizers_ = [];
      this.tracking_ = [];
      this.ready_ = [];
      this.pending_ = [];
      this.eventing_ = null;
      this.shouldNotPreventDefault_ = shouldNotPreventDefault;
      this.shouldStopPropagation_ = shouldStopPropagation;
      this.wasEventing_ = false;
      this.pass_ = new Pass(getWin(element), this.doPass_.bind(this));
      this.pointerDownObservable_ = new Observable();
      this.overservers_ = Object.create(null);
      this.boundOnTouchStart_ = this.onTouchStart_.bind(this);
      this.boundOnTouchEnd_ = this.onTouchEnd_.bind(this);
      this.boundOnTouchMove_ = this.onTouchMove_.bind(this);
      this.boundOnTouchCancel_ = this.onTouchCancel_.bind(this);
      var win = element.ownerDocument.defaultView;
      var passiveSupported2 = supportsPassiveEventListener(toWin(win));
      this.element_.addEventListener("touchstart", this.boundOnTouchStart_, passiveSupported2 ? {
        passive: true
      } : false);
      this.element_.addEventListener("touchend", this.boundOnTouchEnd_);
      this.element_.addEventListener("touchmove", this.boundOnTouchMove_, passiveSupported2 ? {
        passive: true
      } : false);
      this.element_.addEventListener("touchcancel", this.boundOnTouchCancel_);
      this.passAfterEvent_ = false;
    }
    var _proto = Gestures2.prototype;
    _proto.cleanup = function cleanup() {
      this.element_.removeEventListener("touchstart", this.boundOnTouchStart_);
      this.element_.removeEventListener("touchend", this.boundOnTouchEnd_);
      this.element_.removeEventListener("touchmove", this.boundOnTouchMove_);
      this.element_.removeEventListener("touchcancel", this.boundOnTouchCancel_);
      delete this.element_[PROP_];
      this.pass_.cancel();
    };
    _proto.onGesture = function onGesture(recognizerConstr, handler) {
      var recognizer = new recognizerConstr(this);
      var type = recognizer.getType();
      var overserver = this.overservers_[type];
      if (!overserver) {
        this.recognizers_.push(recognizer);
        overserver = new Observable();
        this.overservers_[type] = overserver;
      }
      return overserver.add(handler);
    };
    _proto.removeGesture = function removeGesture(recognizerConstr) {
      var type = new recognizerConstr(this).getType();
      var overserver = this.overservers_[type];
      if (overserver) {
        overserver.removeAll();
        var index = findIndex(this.recognizers_, function(e) {
          return e.getType() == type;
        });
        if (index < 0) {
          return false;
        }
        this.recognizers_.splice(index, 1);
        this.ready_.splice(index, 1);
        this.pending_.splice(index, 1);
        this.tracking_.splice(index, 1);
        delete this.overservers_[type];
        return true;
      } else {
        return false;
      }
    };
    _proto.onPointerDown = function onPointerDown(handler) {
      return this.pointerDownObservable_.add(handler);
    };
    _proto.onTouchStart_ = function onTouchStart_(event) {
      var now = Date.now();
      this.wasEventing_ = false;
      this.pointerDownObservable_.fire(event);
      for (var i = 0; i < this.recognizers_.length; i++) {
        if (this.ready_[i]) {
          continue;
        }
        if (this.pending_[i] && this.pending_[i] < now) {
          this.stopTracking_(i);
        }
        if (this.recognizers_[i].onTouchStart(event)) {
          this.startTracking_(i);
        }
      }
      this.afterEvent_(event);
    };
    _proto.onTouchMove_ = function onTouchMove_(event) {
      var now = Date.now();
      for (var i = 0; i < this.recognizers_.length; i++) {
        if (!this.tracking_[i]) {
          continue;
        }
        if (this.pending_[i] && this.pending_[i] < now) {
          this.stopTracking_(i);
          continue;
        }
        if (!this.recognizers_[i].onTouchMove(event)) {
          this.stopTracking_(i);
        }
      }
      this.afterEvent_(event);
    };
    _proto.onTouchEnd_ = function onTouchEnd_(event) {
      var now = Date.now();
      for (var i = 0; i < this.recognizers_.length; i++) {
        if (!this.tracking_[i]) {
          continue;
        }
        if (this.pending_[i] && this.pending_[i] < now) {
          this.stopTracking_(i);
          continue;
        }
        this.recognizers_[i].onTouchEnd(event);
        var isReady = !this.pending_[i];
        var isExpired = this.pending_[i] < now;
        var isEventing = this.eventing_ == this.recognizers_[i];
        if (!isEventing && (isReady || isExpired)) {
          this.stopTracking_(i);
        }
      }
      this.afterEvent_(event);
    };
    _proto.onTouchCancel_ = function onTouchCancel_(event) {
      for (var i = 0; i < this.recognizers_.length; i++) {
        this.cancelEventing_(i);
      }
      this.afterEvent_(event);
    };
    _proto.signalReady_ = function signalReady_(recognizer, offset) {
      if (this.eventing_) {
        recognizer.acceptCancel();
        return;
      }
      var now = Date.now();
      for (var i = 0; i < this.recognizers_.length; i++) {
        if (this.recognizers_[i] == recognizer) {
          this.ready_[i] = now + offset;
          this.pending_[i] = 0;
        }
      }
      this.passAfterEvent_ = true;
    };
    _proto.signalPending_ = function signalPending_(recognizer, timeLeft) {
      if (this.eventing_) {
        recognizer.acceptCancel();
        return;
      }
      var now = Date.now();
      for (var i = 0; i < this.recognizers_.length; i++) {
        if (this.recognizers_[i] == recognizer) {
          this.pending_[i] = now + timeLeft;
        }
      }
    };
    _proto.signalEnd_ = function signalEnd_(recognizer) {
      if (this.eventing_ == recognizer) {
        this.eventing_ = null;
        this.wasEventing_ = true;
      }
    };
    _proto.signalEmit_ = function signalEmit_(recognizer, data, event) {
      devAssert2(this.eventing_ == recognizer, "Recognizer is not currently allowed: %s", recognizer.getType());
      var overserver = this.overservers_[recognizer.getType()];
      if (overserver) {
        overserver.fire(new Gesture(recognizer.getType(), data, Date.now(), event));
      }
    };
    _proto.afterEvent_ = function afterEvent_(event) {
      var cancelEvent = !!this.eventing_ || this.wasEventing_;
      this.wasEventing_ = false;
      if (!cancelEvent) {
        var now = Date.now();
        for (var i = 0; i < this.recognizers_.length; i++) {
          if (this.ready_[i] || this.pending_[i] && this.pending_[i] >= now) {
            cancelEvent = true;
            break;
          }
        }
      }
      if (cancelEvent) {
        event.stopPropagation();
        if (!this.shouldNotPreventDefault_) {
          event.preventDefault();
        }
      } else if (this.shouldStopPropagation_) {
        event.stopPropagation();
      }
      if (this.passAfterEvent_) {
        this.passAfterEvent_ = false;
        this.doPass_();
      }
    };
    _proto.doPass_ = function doPass_() {
      var now = Date.now();
      var readyIndex = -1;
      for (var i = 0; i < this.recognizers_.length; i++) {
        if (!this.ready_[i]) {
          if (this.pending_[i] && this.pending_[i] < now) {
            this.stopTracking_(i);
          }
          continue;
        }
        if (readyIndex == -1 || this.ready_[i] > this.ready_[readyIndex]) {
          readyIndex = i;
        }
      }
      if (readyIndex == -1) {
        return;
      }
      var waitTime = 0;
      for (var _i = 0; _i < this.recognizers_.length; _i++) {
        if (this.ready_[_i] || !this.tracking_[_i]) {
          continue;
        }
        waitTime = Math.max(waitTime, this.pending_[_i] - now);
      }
      if (waitTime < 2) {
        this.startEventing_(readyIndex);
        return;
      }
      this.pass_.schedule(waitTime);
    };
    _proto.startEventing_ = function startEventing_(index) {
      var recognizer = this.recognizers_[index];
      for (var i = 0; i < this.recognizers_.length; i++) {
        if (i != index) {
          this.cancelEventing_(i);
        }
      }
      this.ready_[index] = 0;
      this.pending_[index] = 0;
      this.eventing_ = recognizer;
      recognizer.acceptStart();
    };
    _proto.startTracking_ = function startTracking_(index) {
      this.tracking_[index] = true;
      this.pending_[index] = 0;
    };
    _proto.stopTracking_ = function stopTracking_(index) {
      this.tracking_[index] = false;
      this.pending_[index] = 0;
      if (!this.ready_[index]) {
        this.recognizers_[index].acceptCancel();
      }
    };
    _proto.cancelEventing_ = function cancelEventing_(index) {
      this.ready_[index] = 0;
      this.stopTracking_(index);
    };
    return Gestures2;
  }();
  var GestureRecognizer = /* @__PURE__ */ function() {
    function GestureRecognizer2(type, manager) {
      this.type_ = type;
      this.manager_ = manager;
    }
    var _proto2 = GestureRecognizer2.prototype;
    _proto2.getType = function getType() {
      return this.type_;
    };
    _proto2.signalReady = function signalReady(offset) {
      this.manager_.signalReady_(this, offset);
    };
    _proto2.signalPending = function signalPending(timeLeft) {
      this.manager_.signalPending_(this, timeLeft);
    };
    _proto2.signalEnd = function signalEnd() {
      this.manager_.signalEnd_(this);
    };
    _proto2.signalEmit = function signalEmit(data, event) {
      this.manager_.signalEmit_(this, data, event);
    };
    _proto2.acceptStart = function acceptStart() {
    };
    _proto2.acceptCancel = function acceptCancel() {
    };
    _proto2.onTouchStart = function onTouchStart(unusedEvent) {
      return false;
    };
    _proto2.onTouchMove = function onTouchMove(unusedEvent) {
      return false;
    };
    _proto2.onTouchEnd = function onTouchEnd(unusedEvent) {
    };
    return GestureRecognizer2;
  }();

  // src/motion.js
  var FRAME_CONST_ = 16.67;
  var EXP_FRAME_CONST_ = Math.round(-FRAME_CONST_ / Math.log(0.95));
  var VELOCITY_DEPR_FACTOR_ = FRAME_CONST_ * 2;
  function calcVelocity(deltaV, deltaTime, prevVelocity) {
    if (deltaTime < 1) {
      deltaTime = 1;
    }
    var speed = deltaV / deltaTime;
    var depr = 0.5 + Math.min(deltaTime / VELOCITY_DEPR_FACTOR_, 0.5);
    return speed * depr + prevVelocity * (1 - depr);
  }

  // src/gesture-recognizers.js
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
  var SwipeRecognizer = /* @__PURE__ */ function(_GestureRecognizer3) {
    _inherits(SwipeRecognizer2, _GestureRecognizer3);
    var _super3 = _createSuper(SwipeRecognizer2);
    function SwipeRecognizer2(type, manager, horiz, vert) {
      var _this3;
      _this3 = _super3.call(this, type, manager);
      _this3.horiz_ = horiz;
      _this3.vert_ = vert;
      _this3.eventing_ = false;
      _this3.startX_ = 0;
      _this3.startY_ = 0;
      _this3.lastX_ = 0;
      _this3.lastY_ = 0;
      _this3.prevX_ = 0;
      _this3.prevY_ = 0;
      _this3.startTime_ = 0;
      _this3.lastTime_ = 0;
      _this3.prevTime_ = 0;
      _this3.velocityX_ = 0;
      _this3.velocityY_ = 0;
      return _this3;
    }
    var _proto3 = SwipeRecognizer2.prototype;
    _proto3.onTouchStart = function onTouchStart(e) {
      var touches = e.touches;
      if (this.eventing_ && touches && touches.length > 1) {
        return true;
      }
      if (touches && touches.length == 1) {
        this.startTime_ = Date.now();
        this.startX_ = touches[0].clientX;
        this.startY_ = touches[0].clientY;
        return true;
      } else {
        return false;
      }
    };
    _proto3.onTouchMove = function onTouchMove(e) {
      var touches = e.touches;
      if (touches && touches.length >= 1) {
        var _touches$ = touches[0], x = _touches$.clientX, y = _touches$.clientY;
        this.lastX_ = x;
        this.lastY_ = y;
        if (this.eventing_) {
          this.emit_(false, false, e);
        } else {
          var dx = Math.abs(x - this.startX_);
          var dy = Math.abs(y - this.startY_);
          if (this.horiz_ && this.vert_) {
            if (dx >= 8 || dy >= 8) {
              this.signalReady(-10);
            }
          } else if (this.horiz_) {
            if (dx >= 8 && dx > dy) {
              this.signalReady(-10);
            } else if (dy >= 8) {
              return false;
            }
          } else if (this.vert_) {
            if (dy >= 8 && dy > dx) {
              this.signalReady(-10);
            } else if (dx >= 8) {
              return false;
            }
          } else {
            return false;
          }
        }
        return true;
      } else {
        return false;
      }
    };
    _proto3.onTouchEnd = function onTouchEnd(e) {
      var touches = e.touches;
      if (touches && touches.length == 0) {
        this.end_(e);
      }
    };
    _proto3.acceptStart = function acceptStart() {
      this.eventing_ = true;
      this.prevX_ = this.startX_;
      this.prevY_ = this.startY_;
      this.prevTime_ = this.startTime_;
      this.startX_ = this.lastX_;
      this.startY_ = this.lastY_;
      this.emit_(true, false, null);
    };
    _proto3.acceptCancel = function acceptCancel() {
      this.eventing_ = false;
    };
    _proto3.emit_ = function emit_(first, last, event) {
      this.lastTime_ = Date.now();
      var deltaTime = this.lastTime_ - this.prevTime_;
      if (!last && deltaTime > 4 || last && deltaTime > 16) {
        var velocityX = calcVelocity(this.lastX_ - this.prevX_, deltaTime, this.velocityX_);
        var velocityY = calcVelocity(this.lastY_ - this.prevY_, deltaTime, this.velocityY_);
        if (!last || deltaTime > 32 || velocityX != 0 || velocityY != 0) {
          this.velocityX_ = Math.abs(velocityX) > 1e-4 ? velocityX : 0;
          this.velocityY_ = Math.abs(velocityY) > 1e-4 ? velocityY : 0;
        }
        this.prevX_ = this.lastX_;
        this.prevY_ = this.lastY_;
        this.prevTime_ = this.lastTime_;
      }
      this.signalEmit({
        first: first,
        last: last,
        time: this.lastTime_,
        deltaX: this.lastX_ - this.startX_,
        deltaY: this.lastY_ - this.startY_,
        startX: this.startX_,
        startY: this.startY_,
        lastX: this.lastX_,
        lastY: this.lastY_,
        velocityX: this.velocityX_,
        velocityY: this.velocityY_
      }, event);
    };
    _proto3.end_ = function end_(event) {
      if (this.eventing_) {
        this.eventing_ = false;
        this.emit_(false, true, event);
        this.signalEnd();
      }
    };
    return SwipeRecognizer2;
  }(GestureRecognizer);
  var SwipeXRecognizer = /* @__PURE__ */ function(_SwipeRecognizer2) {
    _inherits(SwipeXRecognizer2, _SwipeRecognizer2);
    var _super5 = _createSuper(SwipeXRecognizer2);
    function SwipeXRecognizer2(manager) {
      return _super5.call(this, "swipe-x", manager, true, false);
    }
    return SwipeXRecognizer2;
  }(SwipeRecognizer);

  // extensions/amp-ad-exit/0.1/filters/filter.js
  var FilterType = {
    CLICK_DELAY: "clickDelay",
    CLICK_LOCATION: "clickLocation",
    INACTIVE_ELEMENT: "inactiveElement"
  };

  // extensions/amp-analytics/0.1/iframe-transport-vendors.js
  function _extends3() {
    _extends3 = Object.assign || function(target) {
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
    return _extends3.apply(this, arguments);
  }
  var prodConfig = {
    "bg": "https://tpc.googlesyndication.com/b4a/b4a-runner.html",
    "moat": "https://z.moatads.com/ampanalytics093284/iframe.html"
  };
  var canaryConfig = _extends3({}, prodConfig, {
    "bg": "https://tpc.googlesyndication.com/b4a/experimental/b4a-runner.html"
  });

  // extensions/amp-ad-exit/0.1/config.js
  var TransportMode = {
    BEACON: "beacon",
    IMAGE: "image"
  };
  function assertConfig(config) {
    userAssert(typeof config == "object");
    if (config["filters"]) {
      assertFilters(config["filters"]);
    } else {
      config["filters"] = {};
    }
    if (config["transport"]) {
      assertTransport(config["transport"]);
    } else {
      config["transport"] = {};
    }
    assertTargets(config["targets"], config);
    return config;
  }
  function assertTransport(transport) {
    for (var t in transport) {
      userAssert(t == TransportMode.BEACON || t == TransportMode.IMAGE, "Unknown transport option: '" + t + "'");
      userAssert(typeof transport[t] == "boolean");
    }
  }
  function assertFilters(filters) {
    var validFilters = [FilterType.CLICK_DELAY, FilterType.CLICK_LOCATION, FilterType.INACTIVE_ELEMENT];
    for (var name in filters) {
      userAssert(typeof filters[name] == "object", "Filter specification '%s' is malformed", name);
      userAssert(validFilters.indexOf(filters[name].type) != -1, "Supported filters: " + validFilters.join(", "));
    }
  }
  function assertTargets(targets, config) {
    userAssert(typeof targets == "object", "'targets' must be an object");
    for (var target in targets) {
      assertTarget(target, targets[target], config);
    }
  }
  function assertTarget(name, target, config) {
    userAssert(typeof target["finalUrl"] == "string", "finalUrl of target '%s' must be a string", name);
    if (target["filters"]) {
      target["filters"].forEach(function(filter) {
        userAssert(config["filters"][filter], "filter '%s' not defined", filter);
      });
    }
    if (target["vars"]) {
      var pattern = /^_[a-zA-Z0-9_-]+$/;
      for (var variable in target["vars"]) {
        userAssert(pattern.test(variable), "'%s' must match the pattern '%s'", variable, pattern);
      }
    }
  }

  // extensions/amp-story-auto-ads/0.1/story-ad-page.js
  var TAG4 = "amp-story-auto-ads:page";
  var TIMEOUT_LIMIT = 1e4;
  var GLASS_PANE_CLASS = "i-amphtml-glass-pane";
  var DESKTOP_FULLBLEED_CLASS = "i-amphtml-story-ad-fullbleed";
  var PageAttributes = {
    LOADING: "i-amphtml-loading",
    IFRAME_BODY_VISIBLE: "amp-story-visible"
  };
  var StoryAdPage = /* @__PURE__ */ function() {
    function StoryAdPage2(ampdoc2, config, index, localization, buttonFitter, storeService) {
      this.config_ = config;
      this.index_ = index;
      this.localizationService_ = localization;
      this.id_ = "i-amphtml-ad-page-" + this.index_;
      this.win_ = ampdoc2.win;
      this.doc_ = this.win_.document;
      this.analytics_ = getServicePromiseForDoc(ampdoc2, STORY_AD_ANALYTICS);
      this.timeCreated_ = null;
      this.pageElement_ = null;
      this.adElement_ = null;
      this.adFrame_ = null;
      this.adChoicesIcon_ = null;
      this.ctaAnchor_ = null;
      this.adDoc_ = null;
      this.loaded_ = false;
      this.loadCallbacks_ = [];
      this.buttonFitter_ = buttonFitter;
      this.viewed_ = false;
      this.storeService_ = storeService;
      this.is3pAdFrame_ = false;
    }
    var _proto = StoryAdPage2.prototype;
    _proto.getAdDoc = function getAdDoc() {
      return this.adDoc_;
    };
    _proto.getId = function getId() {
      return this.id_;
    };
    _proto.hasTimedOut = function hasTimedOut() {
      return !!this.timeCreated_ && Date.now() - this.timeCreated_ > TIMEOUT_LIMIT;
    };
    _proto.isLoaded = function isLoaded() {
      return this.loaded_;
    };
    _proto.hasBeenViewed = function hasBeenViewed() {
      return this.viewed_;
    };
    _proto.getPageElement = function getPageElement() {
      return this.pageElement_;
    };
    _proto.registerLoadCallback = function registerLoadCallback(cb) {
      this.loadCallbacks_.push(cb);
    };
    _proto.toggleVisibility = function toggleVisibility() {
      this.viewed_ = true;
      this.ctaAnchor_ && toggleAttribute(this.ctaAnchor_, START_CTA_ANIMATION_ATTR);
      if (this.adDoc_) {
        toggleAttribute(dev().assertElement(this.adDoc_.body), PageAttributes.IFRAME_BODY_VISIBLE);
        var alternateBody = this.adDoc_.querySelector("#x-a4a-former-body");
        alternateBody && toggleAttribute(alternateBody, PageAttributes.IFRAME_BODY_VISIBLE);
      }
    };
    _proto.build = function build() {
      var _this$analyticsEvent_;
      this.timeCreated_ = Date.now();
      this.pageElement_ = this.createPageElement_();
      this.adElement_ = this.createAdElement_();
      var glassPane = this.doc_.createElement("div");
      glassPane.classList.add(GLASS_PANE_CLASS);
      var gridLayer = this.doc_.createElement("amp-story-grid-layer");
      gridLayer.setAttribute("template", "fill");
      var paneGridLayer = gridLayer.cloneNode(false);
      gridLayer.appendChild(this.adElement_);
      paneGridLayer.appendChild(glassPane);
      this.pageElement_.appendChild(gridLayer);
      this.pageElement_.appendChild(paneGridLayer);
      this.listenForAdLoadSignals_();
      this.listenForSwipes_();
      this.analyticsEvent_(AnalyticsEvents.AD_REQUESTED, (_this$analyticsEvent_ = {}, _this$analyticsEvent_[AnalyticsVars.AD_REQUESTED] = Date.now(), _this$analyticsEvent_));
      return this.pageElement_;
    };
    _proto.maybeCreateCta = function maybeCreateCta() {
      var _this = this;
      return resolvedPromise().then(function() {
        if (_this.is3pAdFrame_) {
          return true;
        }
        var uiMetadata = map();
        if (!_this.adDoc_) {
          Object.assign(uiMetadata, getStoryAdMetadataFromElement(devAssert2(_this.adElement_)));
        } else {
          Object.assign(uiMetadata, getStoryAdMetadataFromDoc(_this.adDoc_), _this.readAmpAdExit_());
        }
        if (!validateCtaMetadata(uiMetadata)) {
          return false;
        }
        uiMetadata[A4AVarNames.CTA_TYPE] = localizeCtaText(uiMetadata[A4AVarNames.CTA_TYPE], _this.localizationService_) || uiMetadata[A4AVarNames.CTA_TYPE];
        _this.analytics_.then(function(analytics) {
          return analytics.setVar(_this.index_, AnalyticsVars.CTA_TYPE, uiMetadata[A4AVarNames.CTA_TYPE]);
        });
        if (_this.adChoicesIcon_ = maybeCreateAttribution(_this.win_, uiMetadata, devAssert2(_this.pageElement_))) {
          _this.storeService_.subscribe(StateProperty.UI_STATE, function(uiState) {
            _this.onUIStateUpdate_(uiState);
          }, true);
        }
        return _this.createCtaLayer_(uiMetadata);
      });
    };
    _proto.createPageElement_ = function createPageElement_() {
      var attributes = dict({
        "ad": "",
        "distance": "2",
        "i-amphtml-loading": "",
        "id": this.id_
      });
      var segmentExpBranch = getExperimentBranch(this.win_, StoryAdSegmentExp.ID);
      if (segmentExpBranch && segmentExpBranch !== StoryAdSegmentExp.CONTROL && segmentExpBranch !== StoryAdSegmentExp.NO_ADVANCE_BOTH && segmentExpBranch !== StoryAdSegmentExp.NO_ADVANCE_AD) {
        attributes["auto-advance-after"] = BranchToTimeValues[segmentExpBranch];
      }
      var page = createElementWithAttributes(this.doc_, "amp-story-page", attributes);
      setStyle(page, "background-color", "#212125");
      return page;
    };
    _proto.createAdElement_ = function createAdElement_() {
      if (this.config_["type"] === "fake") {
        this.config_["id"] = "i-amphtml-demo-" + this.index_;
      }
      return createElementWithAttributes(this.doc_, "amp-ad", this.config_);
    };
    _proto.listenForAdLoadSignals_ = function listenForAdLoadSignals_() {
      var _this2 = this;
      this.adElement_.signals().whenSignal(CommonSignals_Enum.INI_LOAD).then(function() {
        return _this2.onAdLoaded_();
      });
      var removeListener = listen(this.win_, "message", function(e) {
        if (getData(e) !== "amp-story-ad-load") {
          return;
        }
        if (_this2.getAdFrame_() && e.source === _this2.adFrame_.contentWindow) {
          _this2.is3pAdFrame_ = true;
          _this2.pageElement_.setAttribute("xdomain-ad", "");
          _this2.onAdLoaded_();
          removeListener();
        }
      });
    };
    _proto.listenForSwipes_ = function listenForSwipes_() {
      var _this3 = this;
      var gestures = Gestures.get(this.pageElement_, true, false);
      gestures.onGesture(SwipeXRecognizer, function() {
        var _this3$analyticsEvent;
        _this3.analyticsEvent_(AnalyticsEvents.AD_SWIPED, (_this3$analyticsEvent = {}, _this3$analyticsEvent[AnalyticsVars.AD_SWIPED] = Date.now(), _this3$analyticsEvent));
        gestures.cleanup();
      });
    };
    _proto.getAdFrame_ = function getAdFrame_() {
      if (this.adFrame_) {
        return this.adFrame_;
      }
      return this.adFrame_ = elementByTag(devAssert2(this.pageElement_), "iframe");
    };
    _proto.onAdLoaded_ = function onAdLoaded_() {
      var _this$analyticsEvent_2;
      this.pageElement_.getImpl().then(function(impl) {
        return impl.delegateVideoAutoplay();
      });
      this.pageElement_.removeAttribute(PageAttributes.LOADING);
      this.analyticsEvent_(AnalyticsEvents.AD_LOADED, (_this$analyticsEvent_2 = {}, _this$analyticsEvent_2[AnalyticsVars.AD_LOADED] = Date.now(), _this$analyticsEvent_2));
      if (this.getAdFrame_() && !this.is3pAdFrame_) {
        this.adDoc_ = getFrameDoc(this.adFrame_);
      }
      this.loaded_ = true;
      this.loadCallbacks_.forEach(function(cb) {
        return cb();
      });
    };
    _proto.createCtaLayer_ = function createCtaLayer_2(uiMetadata) {
      var _this4 = this;
      return createCta(this.doc_, devAssert2(this.buttonFitter_), dev().assertElement(this.pageElement_), uiMetadata).then(function(anchor) {
        if (anchor) {
          _this4.ctaAnchor_ = anchor;
          anchor.addEventListener("click", function() {
            var _vars;
            var vars = (_vars = {}, _vars[AnalyticsVars.AD_CLICKED] = Date.now(), _vars);
            _this4.analyticsEvent_(AnalyticsEvents.AD_CLICKED, vars);
          });
          return true;
        }
        return false;
      });
    };
    _proto.readAmpAdExit_ = function readAmpAdExit_() {
      var ampAdExit = elementByTag(dev().assertElement(this.adDoc_.body), "amp-ad-exit");
      if (ampAdExit) {
        try {
          var _ref;
          var children = ampAdExit.children;
          userAssert(children.length == 1, "The tag should contain exactly one <script> child.");
          var child = children[0];
          userAssert(isJsonScriptTag(child), 'The amp-ad-exit config should be inside a <script> tag with type="application/json"');
          var config = assertConfig(parseJson(child.textContent));
          var target = config["targets"] && Object.keys(config["targets"]) && config["targets"][Object.keys(config["targets"])[0]];
          var finalUrl = target && target["finalUrl"];
          return target ? (_ref = {}, _ref[A4AVarNames.CTA_URL] = finalUrl, _ref) : {};
        } catch (e) {
          dev().error(TAG4, e);
          return {};
        }
      }
    };
    _proto.onUIStateUpdate_ = function onUIStateUpdate_(uiState) {
      if (!this.adChoicesIcon_) {
        return;
      }
      this.adChoicesIcon_.classList.toggle(DESKTOP_FULLBLEED_CLASS, uiState === UIType.DESKTOP_FULLBLEED);
    };
    _proto.analyticsEvent_ = function analyticsEvent_(eventType, vars) {
      var _this5 = this;
      this.analytics_.then(function(analytics) {
        return analytics.fireEvent(_this5.pageElement_, _this5.index_, eventType, vars);
      });
    };
    return StoryAdPage2;
  }();

  // extensions/amp-story-auto-ads/0.1/story-ad-page-manager.js
  var TAG5 = "amp-story-auto-ads:page-manager";
  var InsertionState = {
    DELAYED: 0,
    FAILURE: 1,
    SUCCESS: 2
  };
  var NEXT_PAGE_NO_AD_ATTR = "next-page-no-ad";
  var StoryAdPageManager = /* @__PURE__ */ function() {
    function StoryAdPageManager2(ampStory, config) {
      this.ampStory_ = ampStory;
      this.config_ = config;
      this.ampdoc_ = ampStory.getAmpDoc();
      this.analytics_ = getServicePromiseForDoc(this.ampdoc_, STORY_AD_ANALYTICS);
      this.localizationService_ = new StoryAdLocalization(this.ampStory_.element);
      this.buttonFitter_ = new ButtonTextFitter(this.ampdoc_);
      this.pages_ = {};
      this.storeService_ = getStoreService(this.ampdoc_.win);
      this.adsConsumed_ = 0;
      this.createdPageIds_ = [];
    }
    var _proto = StoryAdPageManager2.prototype;
    _proto.hasUnusedAdPage = function hasUnusedAdPage() {
      return this.adsConsumed_ < this.createdPageIds_.length;
    };
    _proto.getUnusedAdPage = function getUnusedAdPage() {
      var pageId = this.createdPageIds_[this.adsConsumed_];
      devAssert2(pageId, TAG5 + " all created ads consumed.");
      return this.pages_[pageId];
    };
    _proto.discardCurrentAd = function discardCurrentAd() {
      var _this$analyticsEvent_;
      this.adsConsumed_++;
      this.analyticsEvent_(AnalyticsEvents.AD_DISCARDED, (_this$analyticsEvent_ = {}, _this$analyticsEvent_[AnalyticsVars.AD_INDEX] = this.adsConsumed_, _this$analyticsEvent_[AnalyticsVars.AD_DISCARDED] = Date.now(), _this$analyticsEvent_));
    };
    _proto.numberOfAdsCreated = function numberOfAdsCreated() {
      return this.createdPageIds_.length;
    };
    _proto.createAdPage = function createAdPage() {
      var _this = this;
      var index = this.createdPageIds_.length + 1;
      var page = new StoryAdPage(this.ampdoc_, this.config_, index, this.localizationService_, devAssert2(this.buttonFitter_), devAssert2(this.storeService_));
      var pageElement = page.build();
      var pageId = page.getId();
      this.pages_[pageId] = page;
      this.createdPageIds_.push(pageId);
      this.ampStory_.element.appendChild(pageElement);
      pageElement.getImpl().then(function(impl) {
        _this.ampStory_.addPage(impl);
      });
      return page;
    };
    _proto.hasId = function hasId(pageId) {
      return !!this.pages_[pageId];
    };
    _proto.getAdPageById = function getAdPageById(pageId) {
      return this.pages_[pageId];
    };
    _proto.getIndexById = function getIndexById(pageId) {
      return findIndex(this.createdPageIds_, function(id) {
        return id === pageId;
      }) + 1;
    };
    _proto.maybeInsertPageAfter = function maybeInsertPageAfter(pageBeforeAdId, nextAdPage) {
      var _this2 = this;
      var pageBeforeAd = this.ampStory_.getPageById(pageBeforeAdId);
      var pageAfterAd = this.ampStory_.getNextPage(pageBeforeAd);
      if (!pageAfterAd) {
        return Promise.resolve(InsertionState.DELAYED);
      }
      if (this.nextPageNoAd_(pageBeforeAd) || pageBeforeAd.isAd() || pageAfterAd.isAd()) {
        return Promise.resolve(InsertionState.DELAYED);
      }
      return nextAdPage.maybeCreateCta().then(function(ctaCreated) {
        if (!ctaCreated) {
          _this2.discardCurrentAd();
          return InsertionState.FAILURE;
        }
        return _this2.insertIntoParentStory_(nextAdPage, pageBeforeAdId);
      });
    };
    _proto.insertIntoParentStory_ = function insertIntoParentStory_(nextAdPage, pageBeforeAdId) {
      var nextAdPageId = nextAdPage.getId();
      this.ampStory_.insertPage(pageBeforeAdId, nextAdPageId);
      var adIndex = this.getIndexById(nextAdPageId);
      var pageNumber = this.ampStory_.getPageIndexById(pageBeforeAdId);
      this.analytics_.then(function(analytics) {
        return analytics.setVar(adIndex, AnalyticsVars.POSITION, pageNumber + 1);
      });
      this.currentAdInserted_();
      return InsertionState.SUCCESS;
    };
    _proto.currentAdInserted_ = function currentAdInserted_() {
      var _this$analyticsEvent_2;
      this.adsConsumed_++;
      this.analyticsEvent_(AnalyticsEvents.AD_INSERTED, (_this$analyticsEvent_2 = {}, _this$analyticsEvent_2[AnalyticsVars.AD_INDEX] = this.adsConsumed_, _this$analyticsEvent_2[AnalyticsVars.AD_INSERTED] = Date.now(), _this$analyticsEvent_2));
    };
    _proto.nextPageNoAd_ = function nextPageNoAd_(page) {
      return page.element.hasAttribute(NEXT_PAGE_NO_AD_ATTR);
    };
    _proto.analyticsEvent_ = function analyticsEvent_(eventType, vars) {
      var _this3 = this;
      this.analytics_.then(function(analytics) {
        return analytics.fireEvent(_this3.ampStory_.element, vars["adIndex"], eventType, vars);
      });
    };
    return StoryAdPageManager2;
  }();

  // extensions/amp-story-auto-ads/0.1/algorithm-count-pages.js
  var INTERVAL = 7;
  var CountPagesAlgorithm = /* @__PURE__ */ function() {
    function CountPagesAlgorithm2(storeService, pageManager) {
      this.storeService_ = storeService;
      this.pageManager_ = pageManager;
      this.uniquePageIds_ = map();
      this.newPagesSinceLastAd_ = 1;
      this.pendingAdView_ = false;
      this.tryingToInsert_ = false;
    }
    var _proto = CountPagesAlgorithm2.prototype;
    _proto.isStoryEligible = function isStoryEligible() {
      var numPages = this.storeService_.get(StateProperty.PAGE_IDS).length;
      return numPages > INTERVAL;
    };
    _proto.initializePages = function initializePages() {
      return [this.pageManager_.createAdPage()];
    };
    _proto.onPageChange = function onPageChange(pageId) {
      if (!hasOwn(this.uniquePageIds_, pageId)) {
        this.uniquePageIds_[pageId] = true;
        this.newPagesSinceLastAd_++;
      }
      if (this.pendingAdView_ || this.tryingToInsert_ || !this.readyToPlaceAd_() || !this.pageManager_.hasUnusedAdPage()) {
        return;
      }
      this.tryingToInsert_ = true;
      this.tryToPlaceAdAfterPage_(pageId);
    };
    _proto.onNewAdView = function onNewAdView(pageIndex) {
      this.pendingAdView_ = false;
      this.newPagesSinceLastAd_ = 0;
      if (this.shouldCreateNextAd_(pageIndex)) {
        this.pageManager_.createAdPage();
      }
    };
    _proto.shouldCreateNextAd_ = function shouldCreateNextAd_(pageIndex) {
      var numPages = this.storeService_.get(StateProperty.PAGE_IDS).length;
      return numPages - pageIndex > INTERVAL;
    };
    _proto.readyToPlaceAd_ = function readyToPlaceAd_() {
      return this.newPagesSinceLastAd_ >= INTERVAL;
    };
    _proto.tryToPlaceAdAfterPage_ = function tryToPlaceAdAfterPage_(pageBeforeAdId) {
      var _this = this;
      var nextAdPage = this.pageManager_.getUnusedAdPage();
      if (!nextAdPage.isLoaded() && nextAdPage.hasTimedOut()) {
        this.pageManager_.discardCurrentAd();
        return;
      }
      if (!nextAdPage.isLoaded()) {
        return;
      }
      this.pageManager_.maybeInsertPageAfter(pageBeforeAdId, nextAdPage).then(function(insertionState) {
        _this.tryingToInsert_ = false;
        if (insertionState === InsertionState.SUCCESS) {
          _this.pendingAdView_ = true;
        }
      });
    };
    return CountPagesAlgorithm2;
  }();

  // extensions/amp-story-auto-ads/0.1/algorithm-predetermined.js
  var BEGINNING_OF_STORY_BUFFER = 3;
  var END_OF_STORY_BUFFER = 1;
  var MAX_ADS_PER_STORY = 4;
  function getAdPositions(storyLength, numberOfAds) {
    if (!numberOfAds) {
      return [];
    }
    var firstPosition = Math.ceil(storyLength / (numberOfAds + 1));
    var pagesLeft = storyLength - firstPosition;
    var positions = [firstPosition];
    var interval = Math.ceil(pagesLeft / numberOfAds);
    for (var i = 1; i < numberOfAds; i++) {
      var position = firstPosition + interval * i;
      positions.push(position);
    }
    return positions;
  }
  function getNumberOfAds(pageCount, targetInterval) {
    var fullSegments = Math.floor(pageCount / targetInterval);
    var addExtraAd = Math.random() < pageCount % targetInterval / targetInterval;
    var remainderAds = addExtraAd ? 1 : 0;
    return Math.min(fullSegments + remainderAds, MAX_ADS_PER_STORY);
  }
  var PredeterminedPositionAlgorithm = /* @__PURE__ */ function() {
    function PredeterminedPositionAlgorithm2(storeService, pageManager, placementsExpBranch) {
      this.pageManager_ = pageManager;
      this.targetInterval_ = this.getIntervalFromExpId_(placementsExpBranch);
      this.storyPageIds_ = storeService.get(StateProperty.PAGE_IDS);
      this.adPositions_ = [];
      this.pagesCreated_ = 0;
    }
    var _proto = PredeterminedPositionAlgorithm2.prototype;
    _proto.isStoryEligible = function isStoryEligible() {
      var storyLength = this.storyPageIds_.length;
      return storyLength > BEGINNING_OF_STORY_BUFFER + END_OF_STORY_BUFFER;
    };
    _proto.initializePages = function initializePages() {
      var storyLength = this.storyPageIds_.length;
      var numberOfAds = getNumberOfAds(storyLength, this.targetInterval_);
      this.adPositions_ = getAdPositions(storyLength, numberOfAds);
      if (numberOfAds) {
        return [this.createNextPage_()];
      }
      return [];
    };
    _proto.createNextPage_ = function createNextPage_() {
      var _this = this;
      var position = this.adPositions_[this.pagesCreated_];
      var adPage = this.pageManager_.createAdPage();
      adPage.registerLoadCallback(function() {
        _this.pageManager_.maybeInsertPageAfter(_this.storyPageIds_[position - 1], adPage);
      });
      this.pagesCreated_++;
      return adPage;
    };
    _proto.onPageChange = function onPageChange(unusedPageId) {
    };
    _proto.onNewAdView = function onNewAdView(unusedPageIndex) {
      if (this.pagesCreated_ < this.adPositions_.length) {
        this.createNextPage_();
      }
    };
    _proto.getIntervalFromExpId_ = function getIntervalFromExpId_(branchId) {
      if (branchId === StoryAdPlacements.PREDETERMINED_EIGHT) {
        return 8;
      } else if (branchId === StoryAdPlacements.PREDETERMINED_TEN) {
        return 10;
      } else if (branchId === StoryAdPlacements.PREDETERMINED_TWELVE) {
        return 12;
      }
    };
    return PredeterminedPositionAlgorithm2;
  }();

  // extensions/amp-story-auto-ads/0.1/algorithm-utils.js
  function getPlacementAlgo(win, storeService, pageManager) {
    var placementsExpBranch = getExperimentBranch(win, StoryAdPlacements.ID);
    if (placementsExpBranch && placementsExpBranch !== StoryAdPlacements.CONTROL) {
      return new PredeterminedPositionAlgorithm(storeService, pageManager, placementsExpBranch);
    }
    return new CountPagesAlgorithm(storeService, pageManager);
  }

  // extensions/amp-story-auto-ads/0.1/story-ad-config.js
  function _extends4() {
    _extends4 = Object.assign || function(target) {
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
    return _extends4.apply(this, arguments);
  }
  var TAG6 = "amp-story-auto-ads:config";
  var DisallowedAdAttributes = {
    "height": true,
    "layout": true,
    "width": true
  };
  var AllowedAdTypes = {
    "adsense": true,
    "custom": true,
    "doubleclick": true,
    "fake": true,
    "nws": true
  };
  var StoryAdConfig = /* @__PURE__ */ function() {
    function StoryAdConfig2(element, win) {
      this.element_ = element;
      this.win_ = win;
    }
    var _proto = StoryAdConfig2.prototype;
    _proto.getConfig = function getConfig() {
      var _this = this;
      var configData = this.element_.hasAttribute("src") ? this.getRemoteConfig_() : this.getInlineConfig_(this.element_.firstElementChild);
      return configData.then(function(jsonConfig) {
        return _this.validateConfig_(jsonConfig);
      });
    };
    _proto.validateConfig_ = function validateConfig_(jsonConfig) {
      var requiredAttrs = {
        class: "i-amphtml-story-ad",
        layout: "fill",
        "amp-story": ""
      };
      var adAttributes = jsonConfig["ad-attributes"];
      userAssert(adAttributes, TAG6 + ' Error reading config. Top level JSON should have an "ad-attributes" key');
      this.validateType_(adAttributes["type"]);
      for (var attr in adAttributes) {
        var value = adAttributes[attr];
        if (isObject(value)) {
          adAttributes[attr] = JSON.stringify(value);
        }
        if (DisallowedAdAttributes[attr]) {
          user().warn(TAG6, 'ad-attribute "%s" is not allowed', attr);
          delete adAttributes[attr];
        }
      }
      return _extends4({}, adAttributes, requiredAttrs);
    };
    _proto.getInlineConfig_ = function getInlineConfig_(child) {
      userAssert(child && isJsonScriptTag(child), "The " + TAG6 + ' should be inside a <script> tag with type="application/json"');
      var inlineJSONConfig = parseJson(child.textContent);
      return Promise.resolve(inlineJSONConfig);
    };
    _proto.getRemoteConfig_ = function getRemoteConfig_() {
      return Services.xhrFor(this.win_).fetchJson(this.element_.getAttribute("src")).then(function(response) {
        return response.json();
      }).catch(function(err) {
        user().error(TAG6, "error determining if remote config is valid json: bad url or bad json", err);
      });
    };
    _proto.validateType_ = function validateType_(type) {
      userAssert(!!AllowedAdTypes[type], TAG6 + ' "' + type + '" ad type is missing or not supported');
      if (type === "fake") {
        var id = this.element_.id;
        userAssert(id && id.startsWith("i-amphtml-demo-"), TAG6 + " id must start with i-amphtml-demo- to use fake ads");
      }
    };
    return StoryAdConfig2;
  }();

  // build/amp-story-auto-ads-0.1.css.js
  var CSS4 = ".i-amphtml-story-desktop-fullbleed .i-amphtml-cta-container{bottom:12.5vh!important;top:67.5%!important}.i-amphtml-glass-pane{height:100%!important;width:100%!important;z-index:1!important}amp-story-page[xdomain-ad] .i-amphtml-glass-pane{height:80%!important}amp-story-page amp-ad iframe{width:100%;height:100%}amp-story-page amp-ad[data-a4a-upgrade-type=amp-ad-network-doubleclick-impl],amp-story-page amp-ad[type=adsense]{top:0!important;left:0!important;transform:translate(0)!important}.i-amphtml-story-desktop-fullbleed amp-story-grid-layer[template=fill]>amp-ad{left:50%!important;right:auto!important;margin:auto!important;min-height:75vh!important;max-height:75vh!important;min-width:45vh!important;max-width:45vh!important;transform:translateX(-50%)!important}\n/*# sourceURL=/extensions/amp-story-auto-ads/0.1/amp-story-auto-ads.css*/";

  // build/amp-story-auto-ads-ad-badge-0.1.css.js
  var CSS5 = ".i-amphtml-ad-overlay-container{-ms-flex-align:center!important;align-items:center!important;display:-ms-flexbox!important;display:flex!important;height:48px!important;left:0!important;-ms-flex-pack:center!important;justify-content:center!important;pointer-events:none!important;position:absolute!important;top:0!important;width:48px!important;z-index:100001!important}.i-amphtml-ad-overlay-container[dir=rtl]{left:auto!important;right:0!important}.i-amphtml-ad-overlay-container[desktop-fullbleed]{left:calc(50vw - 22.5vh)!important;top:12.5vh!important}.i-amphtml-story-ad-badge-svg{top:50%!important;left:50%!important;position:relative!important;transform:translate(-50%,-50%)!important}.i-amphtml-story-ad-badge{height:24px!important;opacity:0!important;width:24px!important;visibility:hidden!important}[dir=rtl] .i-amphtml-story-ad-badge{margin-left:0px!important;margin-right:16px!important}[ad-showing] .i-amphtml-story-ad-badge{visibility:visible!important;opacity:1!important}.i-amphtml-ad-overlay-container[desktop-one-panel]{top:var(--i-amphtml-story-desktop-one-panel-responsive-margin)!important;left:calc(50vw - var(--i-amphtml-story-desktop-one-panel-width)/2)!important}\n/*# sourceURL=/extensions/amp-story-auto-ads/0.1/amp-story-auto-ads-ad-badge.css*/";

  // build/amp-story-auto-ads-progress-bar-0.1.css.js
  var CSS6 = ".i-amphtml-story-ad-progress-background{background:hsla(0,0%,100%,0.4)!important;border-radius:1px!important;height:2px!important;left:4px!important;margin:4px auto!important;opacity:0!important;position:absolute!important;width:calc(100% - 8px)!important;visibility:hidden!important;z-index:100001!important}.i-amphtml-story-ad-progress-background[ad-showing]{opacity:1!important;visibility:visible!important}.i-amphtml-story-ad-progress-background[desktop-one-panel]{top:var(--i-amphtml-story-desktop-one-panel-responsive-margin)!important;left:calc(50vw - var(--i-amphtml-story-desktop-one-panel-width)/2 + 4px)!important;width:calc(var(--i-amphtml-story-desktop-one-panel-width) - 8px)!important}.i-amphtml-story-ad-progress-bar{background:#fff!important;height:2px!important}[ad-showing] .i-amphtml-story-ad-progress-bar{animation:grow linear}[paused] .i-amphtml-story-ad-progress-bar{animation-play-state:paused}@keyframes grow{0%{width:0%}to{width:100%}}\n/*# sourceURL=/extensions/amp-story-auto-ads/0.1/amp-story-auto-ads-progress-bar.css*/";

  // build/amp-story-auto-ads-shared-0.1.css.js
  var CSS7 = ".i-amphtml-story-ad-link-root{all:initial!important;color:initial!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;-ms-flex-align:center!important;align-items:center!important}\n/*# sourceURL=/extensions/amp-story-auto-ads/0.1/amp-story-auto-ads-shared.css*/";

  // extensions/amp-story/1.0/events.js
  var EventType = {
    MUTE: "ampstory:mute",
    UNMUTE: "ampstory:unmute",
    SWITCH_PAGE: "ampstory:switchpage",
    PREVIOUS_PAGE: "ampstory:previouspage",
    NEXT_PAGE: "ampstory:nextpage",
    PAGE_PROGRESS: "ampstory:pageprogress",
    REPLAY: "ampstory:replay",
    DEV_LOG_ENTRIES_AVAILABLE: "ampstory:devlogentriesavailable",
    NO_NEXT_PAGE: "ampstory:nonextpage",
    NO_PREVIOUS_PAGE: "ampstory:nopreviouspage",
    STORY_LOADED: "ampstory:load",
    PAGE_LOADED: "ampstory:pageload",
    DISPATCH_ACTION: "ampstory:dispatchaction"
  };
  function dispatch(win, source, eventName, payload, eventInit) {
    if (payload === void 0) {
      payload = void 0;
    }
    if (eventInit === void 0) {
      eventInit = void 0;
    }
    var event = createCustomEvent(win, eventName, payload, eventInit);
    source.dispatchEvent(event);
  }

  // extensions/amp-story-auto-ads/0.1/amp-story-auto-ads.js
  var _RELEVANT_PLAYER_EXPS;
  var _templateObject;
  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
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
  var TAG7 = "amp-story-auto-ads";
  var AD_TAG = "amp-ad";
  var MUSTACHE_TAG = "amp-mustache";
  var RELEVANT_PLAYER_EXPS = (_RELEVANT_PLAYER_EXPS = {}, _RELEVANT_PLAYER_EXPS[StoryAdSegmentExp.CONTROL] = StoryAdSegmentExp.ID, _RELEVANT_PLAYER_EXPS[StoryAdSegmentExp.NO_ADVANCE_BOTH] = StoryAdSegmentExp.ID, _RELEVANT_PLAYER_EXPS[StoryAdSegmentExp.NO_ADVANCE_AD] = StoryAdSegmentExp.ID, _RELEVANT_PLAYER_EXPS[StoryAdSegmentExp.TEN_SECONDS] = StoryAdSegmentExp.ID, _RELEVANT_PLAYER_EXPS[StoryAdSegmentExp.TWELVE_SECONDS] = StoryAdSegmentExp.ID, _RELEVANT_PLAYER_EXPS[StoryAdSegmentExp.FOURTEEN_SECONDS] = StoryAdSegmentExp.ID, _RELEVANT_PLAYER_EXPS);
  var Attributes = {
    AD_SHOWING: "ad-showing",
    DESKTOP_FULLBLEED: "desktop-fullbleed",
    DESKTOP_ONE_PANEL: "desktop-one-panel",
    DIR: "dir",
    PAUSED: "paused"
  };
  var AmpStoryAutoAds = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits2(AmpStoryAutoAds2, _AMP$BaseElement);
    var _super = _createSuper2(AmpStoryAutoAds2);
    function AmpStoryAutoAds2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.doc_ = _this.win.document;
      _this.ampStory_ = null;
      _this.visibleAdPage_ = null;
      _this.config_ = dict();
      _this.analytics_ = null;
      _this.adBadgeContainer_ = null;
      _this.progressBarBackground_ = null;
      _this.storeService_ = null;
      _this.placementAlgorithm_ = null;
      _this.adPageManager_ = null;
      return _this;
    }
    var _proto = AmpStoryAutoAds2.prototype;
    _proto.buildCallback = function buildCallback() {
      var _this2 = this;
      this.askPlayerForActiveExperiments_();
      return Services.storyStoreServiceForOrNull(this.win).then(function(storeService) {
        devAssert2(storeService, "Could not retrieve AmpStoryStoreService");
        _this2.storeService_ = storeService;
        if (!_this2.isAutomaticAdInsertionAllowed_()) {
          return;
        }
        var ampStoryElement = _this2.element.parentElement;
        userAssert(ampStoryElement.tagName === "AMP-STORY", "<" + TAG7 + "> should be child of <amp-story>");
        var ampdoc2 = _this2.getAmpDoc();
        var extensionService = Services.extensionsFor(_this2.win);
        extensionService.installExtensionForDoc(ampdoc2, AD_TAG);
        return ampStoryElement.getImpl().then(function(impl) {
          _this2.ampStory_ = impl;
        });
      });
    };
    _proto.isLayoutSupported = function isLayoutSupported() {
      return true;
    };
    _proto.layoutCallback = function layoutCallback() {
      var _this3 = this;
      if (!this.isAutomaticAdInsertionAllowed_()) {
        return resolvedPromise();
      }
      return this.ampStory_.signals().whenSignal(CommonSignals_Enum.INI_LOAD).then(function() {
        return _this3.handleConfig_();
      }).then(function() {
        _this3.adPageManager_ = new StoryAdPageManager(_this3.ampStory_, _this3.config_);
        divertStoryAdPlacements(_this3.win);
        divertStoryAdAutoAdvance(_this3.win);
        _this3.placementAlgorithm_ = getPlacementAlgo(_this3.win, _this3.storeService_, _this3.adPageManager_);
        if (!_this3.placementAlgorithm_.isStoryEligible()) {
          return;
        }
        _this3.analytics_ = getServicePromiseForDoc(_this3.element, STORY_AD_ANALYTICS);
        _this3.createAdOverlay_();
        _this3.maybeCreateProgressBar_();
        _this3.initializeListeners_();
        _this3.initializePages_();
      });
    };
    _proto.askPlayerForActiveExperiments_ = function askPlayerForActiveExperiments_() {
      var _this4 = this;
      var viewer = Services.viewerForDoc(this.doc_);
      if (!viewer.isEmbedded()) {
        return;
      }
      viewer.sendMessageAwaitResponse("playerExperiments").then(function(expObj) {
        var ids = expObj == null ? void 0 : expObj["experimentIds"];
        if (ids) {
          ids.forEach(function(id) {
            var relevantExp = RELEVANT_PLAYER_EXPS[id];
            if (relevantExp) {
              forceExperimentBranch(_this4.win, relevantExp, id.toString());
            }
          });
        }
      });
    };
    _proto.forcePlaceAdAfterPage_ = function forcePlaceAdAfterPage_(adPage) {
      var _this5 = this;
      var pageBeforeAdId = this.storeService_.get(StateProperty.CURRENT_PAGE_ID);
      adPage.registerLoadCallback(function() {
        return _this5.adPageManager_.maybeInsertPageAfter(pageBeforeAdId, adPage).then(function() {
          return _this5.navigateToFirstAdPage_(adPage);
        });
      });
    };
    _proto.navigateToFirstAdPage_ = function navigateToFirstAdPage_(adPage) {
      var firstAdPageElement = adPage.getPageElement();
      firstAdPageElement.setAttribute("distance", "1");
      var payload = dict({
        "targetPageId": "i-amphtml-ad-page-1",
        "direction": "next"
      });
      var eventInit = {
        bubbles: true
      };
      dispatch(this.win, firstAdPageElement, EventType.SWITCH_PAGE, payload, eventInit);
    };
    _proto.handleConfig_ = function handleConfig_() {
      var _this6 = this;
      return new StoryAdConfig(this.element, this.win).getConfig().then(function(config) {
        _this6.config_ = config;
        if (config["type"] === "custom") {
          Services.extensionsFor(_this6.win).installExtensionForDoc(_this6.element.getAmpDoc(), MUSTACHE_TAG, "latest");
        }
        return config;
      });
    };
    _proto.isAutomaticAdInsertionAllowed_ = function isAutomaticAdInsertionAllowed_() {
      return !!this.storeService_.get(StateProperty.CAN_INSERT_AUTOMATIC_AD);
    };
    _proto.initializeListeners_ = function initializeListeners_() {
      var _this7 = this;
      this.storeService_.subscribe(StateProperty.AD_STATE, function(isAd) {
        _this7.onAdStateUpdate_(isAd);
      });
      this.storeService_.subscribe(StateProperty.RTL_STATE, function(rtlState) {
        _this7.onRtlStateUpdate_(rtlState);
      }, true);
      this.storeService_.subscribe(StateProperty.UI_STATE, function(uiState) {
        _this7.onUIStateUpdate_(uiState);
      }, true);
      this.storeService_.subscribe(StateProperty.CURRENT_PAGE_ID, function(pageId) {
        var pageIndex = _this7.storeService_.get(StateProperty.CURRENT_PAGE_INDEX);
        _this7.handleActivePageChange_(dev().assertNumber(pageIndex), dev().assertString(pageId));
      });
    };
    _proto.onAdStateUpdate_ = function onAdStateUpdate_(isAd) {
      var _this8 = this;
      this.mutateElement(function() {
        if (isAd) {
          _this8.adBadgeContainer_.setAttribute(Attributes.AD_SHOWING, "");
          _this8.progressBarBackground_ && _this8.progressBarBackground_.setAttribute(Attributes.AD_SHOWING, "");
        } else {
          _this8.adBadgeContainer_.removeAttribute(Attributes.AD_SHOWING);
          _this8.progressBarBackground_ && _this8.progressBarBackground_.removeAttribute(Attributes.AD_SHOWING);
        }
      });
    };
    _proto.onRtlStateUpdate_ = function onRtlStateUpdate_(rtlState) {
      var _this9 = this;
      this.mutateElement(function() {
        rtlState ? _this9.adBadgeContainer_.setAttribute(Attributes.DIR, "rtl") : _this9.adBadgeContainer_.removeAttribute(Attributes.DIR);
      });
    };
    _proto.onUIStateUpdate_ = function onUIStateUpdate_(uiState) {
      var _this10 = this;
      this.mutateElement(function() {
        var _this10$progressBarBa;
        var DESKTOP_FULLBLEED = Attributes.DESKTOP_FULLBLEED, DESKTOP_ONE_PANEL = Attributes.DESKTOP_ONE_PANEL;
        _this10.adBadgeContainer_.removeAttribute(DESKTOP_FULLBLEED);
        _this10.adBadgeContainer_.removeAttribute(DESKTOP_ONE_PANEL);
        (_this10$progressBarBa = _this10.progressBarBackground_) == null ? void 0 : _this10$progressBarBa.removeAttribute(DESKTOP_ONE_PANEL);
        if (uiState === UIType.DESKTOP_FULLBLEED) {
          _this10.adBadgeContainer_.setAttribute(DESKTOP_FULLBLEED, "");
        }
        if (uiState === UIType.DESKTOP_ONE_PANEL) {
          var _this10$progressBarBa2;
          _this10.adBadgeContainer_.setAttribute(DESKTOP_ONE_PANEL, "");
          (_this10$progressBarBa2 = _this10.progressBarBackground_) == null ? void 0 : _this10$progressBarBa2.setAttribute(DESKTOP_ONE_PANEL, "");
        }
      });
    };
    _proto.createAdOverlay_ = function createAdOverlay_() {
      var root = this.doc_.createElement("div");
      root.className = "i-amphtml-ad-overlay-host";
      this.adBadgeContainer_ = this.doc_.createElement("aside");
      this.adBadgeContainer_.className = "i-amphtml-ad-overlay-container";
      var badge = this.doc_.createElement("div");
      badge.className = "i-amphtml-story-ad-badge";
      this.adBadgeContainer_.appendChild(badge);
      createShadowRootWithStyle(root, this.adBadgeContainer_, CSS5);
      var svg2 = svgFor(this.doc_);
      var badgeSVG = svg2(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(['<svg\n      width="39"\n      height="31"\n      viewBox="0 0 39 31"\n      fill="none"\n      class="i-amphtml-story-ad-badge-svg"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <g filter="url(#filter0_d)">\n        <path\n          d="M17.3672 19.3633H12.7441L11.8652 22H9.06152L13.8252 9.20312H16.2686L21.0586 22H18.2549L17.3672 19.3633ZM13.4561 17.2275H16.6553L15.0469 12.4375L13.4561 17.2275ZM22.1914 17.1748C22.1914 15.6924 22.5225 14.5117 23.1846 13.6328C23.8525 12.7539 24.7637 12.3145 25.918 12.3145C26.8438 12.3145 27.6084 12.6602 28.2119 13.3516V8.5H30.7607V22H28.4668L28.3438 20.9893C27.7109 21.7803 26.8965 22.1758 25.9004 22.1758C24.7812 22.1758 23.8818 21.7363 23.2021 20.8574C22.5283 19.9727 22.1914 18.7451 22.1914 17.1748ZM24.7314 17.3594C24.7314 18.25 24.8867 18.9326 25.1973 19.4072C25.5078 19.8818 25.959 20.1191 26.5508 20.1191C27.3359 20.1191 27.8896 19.7881 28.2119 19.126V15.373C27.8955 14.7109 27.3477 14.3799 26.5684 14.3799C25.3438 14.3799 24.7314 15.373 24.7314 17.3594Z"\n          fill="white"\n        ></path>\n        <path\n          d="M17.3672 19.3633L17.4857 19.3234L17.457 19.2383H17.3672V19.3633ZM12.7441 19.3633V19.2383H12.654L12.6256 19.3238L12.7441 19.3633ZM11.8652 22V22.125H11.9553L11.9838 22.0395L11.8652 22ZM9.06152 22L8.94438 21.9564L8.88161 22.125H9.06152V22ZM13.8252 9.20312V9.07812H13.7383L13.708 9.15952L13.8252 9.20312ZM16.2686 9.20312L16.3856 9.15931L16.3552 9.07812H16.2686V9.20312ZM21.0586 22V22.125H21.2389L21.1757 21.9562L21.0586 22ZM18.2549 22L18.1364 22.0399L18.1651 22.125H18.2549V22ZM13.4561 17.2275L13.3374 17.1881L13.2828 17.3525H13.4561V17.2275ZM16.6553 17.2275V17.3525H16.8291L16.7738 17.1877L16.6553 17.2275ZM15.0469 12.4375L15.1654 12.3977L15.0462 12.0429L14.9282 12.3981L15.0469 12.4375ZM17.3672 19.2383H12.7441V19.4883H17.3672V19.2383ZM12.6256 19.3238L11.7466 21.9605L11.9838 22.0395L12.8627 19.4028L12.6256 19.3238ZM11.8652 21.875H9.06152V22.125H11.8652V21.875ZM9.17867 22.0436L13.9423 9.24673L13.708 9.15952L8.94438 21.9564L9.17867 22.0436ZM13.8252 9.32812H16.2686V9.07812H13.8252V9.32812ZM16.1515 9.24694L20.9415 22.0438L21.1757 21.9562L16.3856 9.15931L16.1515 9.24694ZM21.0586 21.875H18.2549V22.125H21.0586V21.875ZM18.3733 21.9601L17.4857 19.3234L17.2487 19.4032L18.1364 22.0399L18.3733 21.9601ZM13.4561 17.3525H16.6553V17.1025H13.4561V17.3525ZM16.7738 17.1877L15.1654 12.3977L14.9284 12.4773L16.5368 17.2673L16.7738 17.1877ZM14.9282 12.3981L13.3374 17.1881L13.5747 17.2669L15.1655 12.4769L14.9282 12.3981ZM23.1846 13.6328L23.085 13.5572L23.0847 13.5576L23.1846 13.6328ZM28.2119 13.3516L28.1177 13.4338L28.3369 13.6849V13.3516H28.2119ZM28.2119 8.5V8.375H28.0869V8.5H28.2119ZM30.7607 8.5H30.8857V8.375H30.7607V8.5ZM30.7607 22V22.125H30.8857V22H30.7607ZM28.4668 22L28.3427 22.0151L28.3561 22.125H28.4668V22ZM28.3438 20.9893L28.4678 20.9742L28.4319 20.679L28.2461 20.9112L28.3438 20.9893ZM23.2021 20.8574L23.1027 20.9332L23.1033 20.9339L23.2021 20.8574ZM28.2119 19.126L28.3243 19.1807L28.3369 19.1548V19.126H28.2119ZM28.2119 15.373H28.3369V15.3447L28.3247 15.3192L28.2119 15.373ZM22.3164 17.1748C22.3164 15.7102 22.6435 14.5588 23.2844 13.708L23.0847 13.5576C22.4015 14.4646 22.0664 15.6746 22.0664 17.1748H22.3164ZM23.2841 13.7084C23.9272 12.8623 24.8007 12.4395 25.918 12.4395V12.1895C24.7267 12.1895 23.7779 12.6455 23.0851 13.5572L23.2841 13.7084ZM25.918 12.4395C26.808 12.4395 27.5382 12.7698 28.1177 13.4338L28.3061 13.2694C27.6786 12.5505 26.8795 12.1895 25.918 12.1895V12.4395ZM28.3369 13.3516V8.5H28.0869V13.3516H28.3369ZM28.2119 8.625H30.7607V8.375H28.2119V8.625ZM30.6357 8.5V22H30.8857V8.5H30.6357ZM30.7607 21.875H28.4668V22.125H30.7607V21.875ZM28.5909 21.9849L28.4678 20.9742L28.2197 21.0044L28.3427 22.0151L28.5909 21.9849ZM28.2461 20.9112C27.6366 21.6731 26.8578 22.0508 25.9004 22.0508V22.3008C26.9352 22.3008 27.7853 21.8874 28.4414 21.0673L28.2461 20.9112ZM25.9004 22.0508C24.8196 22.0508 23.9568 21.629 23.301 20.781L23.1033 20.9339C23.8068 21.8437 24.7429 22.3008 25.9004 22.3008V22.0508ZM23.3016 20.7817C22.65 19.9261 22.3164 18.7287 22.3164 17.1748H22.0664C22.0664 18.7615 22.4067 20.0193 23.1027 20.9332L23.3016 20.7817ZM24.6064 17.3594C24.6064 18.2616 24.7632 18.9722 25.0927 19.4757L25.3019 19.3388C25.0102 18.8931 24.8564 18.2384 24.8564 17.3594H24.6064ZM25.0927 19.4757C25.4275 19.9874 25.919 20.2441 26.5508 20.2441V19.9941C25.999 19.9941 25.5881 19.7763 25.3019 19.3388L25.0927 19.4757ZM26.5508 20.2441C26.961 20.2441 27.319 20.1575 27.6191 19.9781C27.9196 19.7984 28.1541 19.5304 28.3243 19.1807L28.0995 19.0713C27.9475 19.3837 27.744 19.6122 27.4908 19.7636C27.2371 19.9152 26.9257 19.9941 26.5508 19.9941V20.2441ZM28.3369 19.126V15.373H28.0869V19.126H28.3369ZM28.3247 15.3192C28.1576 14.9694 27.9261 14.7011 27.6284 14.5212C27.3311 14.3416 26.9758 14.2549 26.5684 14.2549V14.5049C26.9402 14.5049 27.2485 14.5837 27.4991 14.7352C27.7492 14.8863 27.9499 15.1146 28.0991 15.4269L28.3247 15.3192ZM26.5684 14.2549C25.9153 14.2549 25.4145 14.5235 25.0843 15.0592C24.7601 15.5849 24.6064 16.3574 24.6064 17.3594H24.8564C24.8564 16.375 25.0089 15.6578 25.2971 15.1904C25.5791 14.7329 25.9968 14.5049 26.5684 14.5049V14.2549Z"\n          fill="white"\n        ></path>\n      </g>\n      <defs>\n        <filter\n          id="filter0_d"\n          x="0.881836"\n          y="0.375"\n          width="38.0041"\n          height="29.9258"\n          filterUnits="userSpaceOnUse"\n          color-interpolation-filters="sRGB"\n        >\n          <feFlood flood-opacity="0" result="BackgroundImageFix" />\n          <feColorMatrix\n            in="SourceAlpha"\n            type="matrix"\n            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"\n          />\n          <feOffset />\n          <feGaussianBlur stdDeviation="4" />\n          <feColorMatrix\n            type="matrix"\n            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"\n          />\n          <feBlend\n            mode="normal"\n            in2="BackgroundImageFix"\n            result="effect1_dropShadow"\n          />\n          <feBlend\n            mode="normal"\n            in="SourceGraphic"\n            in2="effect1_dropShadow"\n            result="shape"\n          />\n        </filter>\n      </defs>\n    </svg> '])));
      badge.appendChild(badgeSVG);
      this.ampStory_.element.appendChild(root);
    };
    _proto.maybeCreateProgressBar_ = function maybeCreateProgressBar_() {
      var autoAdvanceExpBranch = getExperimentBranch(this.win, StoryAdAutoAdvance.ID);
      if (getExperimentBranch(this.win, StoryAdSegmentExp.ID)) {
        return;
      } else if (autoAdvanceExpBranch && autoAdvanceExpBranch !== StoryAdAutoAdvance.CONTROL) {
        this.createProgressBar_(AdvanceExpToTime[autoAdvanceExpBranch]);
      }
    };
    _proto.createProgressBar_ = function createProgressBar_(time) {
      var _this11 = this;
      var progressBar = this.doc_.createElement("div");
      progressBar.className = "i-amphtml-story-ad-progress-bar";
      setStyle(progressBar, "animationDuration", time);
      this.progressBarBackground_ = this.doc_.createElement("div");
      this.progressBarBackground_.className = "i-amphtml-story-ad-progress-background";
      var host = this.doc_.createElement("div");
      host.className = "i-amphtml-story-ad-progress-bar-host";
      this.progressBarBackground_.appendChild(progressBar);
      createShadowRootWithStyle(host, this.progressBarBackground_, CSS6);
      this.ampStory_.element.appendChild(host);
      this.storeService_.subscribe(StateProperty.PAUSED_STATE, function(isPaused) {
        _this11.onPauseStateUpdate_(isPaused);
      });
    };
    _proto.onPauseStateUpdate_ = function onPauseStateUpdate_(isPaused) {
      var adShowing = this.storeService_.get(StateProperty.AD_STATE);
      if (!adShowing) {
        return;
      }
      toggleAttribute(this.progressBarBackground_, Attributes.PAUSED, isPaused);
    };
    _proto.initializePages_ = function initializePages_() {
      var pages = this.placementAlgorithm_.initializePages();
      this.maybeForceAdPlacement_(devAssert2(pages[0]));
    };
    _proto.maybeForceAdPlacement_ = function maybeForceAdPlacement_(adPage) {
      if (this.element.hasAttribute("development") && this.config_["type"] === "fake") {
        this.forcePlaceAdAfterPage_(adPage);
      }
    };
    _proto.handleActivePageChange_ = function handleActivePageChange_(pageIndex, pageId) {
      if (this.adPageManager_.numberOfAdsCreated() === 0) {
        return;
      }
      this.placementAlgorithm_.onPageChange(pageId);
      if (this.visibleAdPage_) {
        this.transitionFromAdShowing_();
      }
      if (this.adPageManager_.hasId(pageId)) {
        this.transitionToAdShowing_(pageIndex, pageId);
      }
    };
    _proto.transitionFromAdShowing_ = function transitionFromAdShowing_() {
      var _this$analyticsEvent_;
      var adPageId = this.visibleAdPage_.getId();
      var adIndex = this.adPageManager_.getIndexById(adPageId);
      this.removeVisibleAttribute_();
      this.analyticsEvent_(AnalyticsEvents.AD_EXITED, (_this$analyticsEvent_ = {}, _this$analyticsEvent_[AnalyticsVars.AD_EXITED] = Date.now(), _this$analyticsEvent_[AnalyticsVars.AD_INDEX] = adIndex, _this$analyticsEvent_));
    };
    _proto.transitionToAdShowing_ = function transitionToAdShowing_(pageIndex, adPageId) {
      var _this$analyticsEvent_2;
      var adPage = this.adPageManager_.getAdPageById(adPageId);
      var adIndex = this.adPageManager_.getIndexById(adPageId);
      if (!adPage.hasBeenViewed()) {
        this.placementAlgorithm_.onNewAdView(pageIndex);
      }
      this.setVisibleAttribute_(adPage);
      this.analyticsEvent_(AnalyticsEvents.AD_VIEWED, (_this$analyticsEvent_2 = {}, _this$analyticsEvent_2[AnalyticsVars.AD_VIEWED] = Date.now(), _this$analyticsEvent_2[AnalyticsVars.AD_INDEX] = adIndex, _this$analyticsEvent_2));
    };
    _proto.setVisibleAttribute_ = function setVisibleAttribute_(adPage) {
      var _this12 = this;
      this.mutateElement(function() {
        adPage.toggleVisibility();
        _this12.visibleAdPage_ = adPage;
      });
    };
    _proto.removeVisibleAttribute_ = function removeVisibleAttribute_() {
      var _this13 = this;
      this.mutateElement(function() {
        if (_this13.visibleAdPage_) {
          _this13.visibleAdPage_.toggleVisibility();
          _this13.visibleAdPage_ = null;
        }
      });
    };
    _proto.analyticsEvent_ = function analyticsEvent_(eventType, vars) {
      var _this14 = this;
      this.analytics_.then(function(analytics) {
        return analytics.fireEvent(_this14.element, vars["adIndex"], eventType, vars);
      });
    };
    return AmpStoryAutoAds2;
  }(AMP.BaseElement);
  AMP.registerElement("amp-story-auto-ads", AmpStoryAutoAds, CSS4 + CSS7);
  AMP.registerServiceForDoc(STORY_AD_ANALYTICS, StoryAdAnalytics);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
/**
* @license
* Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
* Use of this source code is governed by a BSD-style
* license that can be found in the LICENSE file or at
* https://developers.google.com/open-source/licenses/bsd
*/
})});
//# sourceMappingURL=amp-story-auto-ads-0.1.max.js.map
