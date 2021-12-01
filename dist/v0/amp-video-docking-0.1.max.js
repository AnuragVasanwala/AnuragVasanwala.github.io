(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-video-docking",ev:"0.1",l:true,f:(function(AMP,_){
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
  function tryResolve(fn) {
    return new Promise(function(resolve) {
      resolve(fn());
    });
  }

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
  function dict(opt_initial) {
    return opt_initial || {};
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
  function assertType_(assertFn, subject, shouldBeTruthy, defaultMessage, opt_message) {
    if (isArray(opt_message)) {
      assertFn(shouldBeTruthy, opt_message.concat([subject]));
    } else {
      assertFn(shouldBeTruthy, (opt_message || defaultMessage) + ": %s", subject);
    }
    return subject;
  }
  function assertElement(assertFn, shouldBeElement, opt_message) {
    return assertType_(assertFn, shouldBeElement, isElement(shouldBeElement), "Element expected", opt_message);
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
  function devAssertElement(shouldBeElement, opt_message) {
    if (isMinified()) {
      return shouldBeElement;
    }
    devAssertDceCheck();
    return assertElement(devAssert, shouldBeElement, opt_message);
  }

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
  function removeElement(element) {
    var _element$parentElemen;
    (_element$parentElemen = element.parentElement) == null ? void 0 : _element$parentElemen.removeChild(element);
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
  function iterateCursor(iterable, cb) {
    var length = iterable.length;
    for (var i = 0; i < length; i++) {
      cb(iterable[i], i);
    }
  }
  function isRTL(doc) {
    var dir = doc.body.getAttribute("dir") || doc.documentElement.getAttribute("dir") || "ltr";
    return dir == "rtl";
  }

  // src/core/dom/layout/index.js
  function applyFillContent(element, opt_replacedContent) {
    element.classList.add("i-amphtml-fill-content");
    if (opt_replacedContent) {
      element.classList.add("i-amphtml-replaced-content");
    }
  }

  // src/core/dom/layout/rect.js
  function layoutRectLtwh(left, top, width, height) {
    return {
      left: left,
      top: top,
      width: width,
      height: height,
      bottom: top + height,
      right: left + width,
      x: left,
      y: top
    };
  }
  function rectIntersection(var_args) {
    var x0 = -Infinity;
    var x1 = Infinity;
    var y0 = -Infinity;
    var y1 = Infinity;
    for (var i = 0; i < arguments.length; i++) {
      var current = arguments[i];
      if (!current) {
        continue;
      }
      x0 = Math.max(x0, current.left);
      x1 = Math.min(x1, current.left + current.width);
      y0 = Math.max(y0, current.top);
      y1 = Math.min(y1, current.top + current.height);
      if (x1 < x0 || y1 < y0) {
        return null;
      }
    }
    if (x1 == Infinity) {
      return null;
    }
    return layoutRectLtwh(x0, y0, x1 - x0, y1 - y0);
  }
  function layoutRectEquals(r1, r2) {
    if (!r1 || !r2) {
      return false;
    }
    return r1.left == r2.left && r1.top == r2.top && r1.width == r2.width && r1.height == r2.height;
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
  function htmlRefs(root) {
    var elements = root.querySelectorAll("[ref]");
    var refs = map();
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var ref = devAssert(element.getAttribute("ref"), "Empty ref attr");
      element.removeAttribute("ref");
      devAssert(refs[ref] === void 0, "Duplicate ref");
      refs[ref] = element;
    }
    return refs;
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
  function createExpectedError(var_args) {
    var error = createError.apply(null, arguments);
    error.expected = true;
    return error;
  }
  function devExpectedError(unusedTag) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    maybeReportError(createExpectedError.apply(null, args));
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
  function units(value, fn) {
    return typeof value == "number" ? fn(value) : value;
  }
  function translate(x, opt_y) {
    return opt_y === void 0 || opt_y === null ? "translate(" + units(x, px) + ")" : "translate(" + units(x, px) + ", " + units(opt_y, px) + ")";
  }
  function resetStyles(element, properties) {
    for (var i = 0; i < properties.length; i++) {
      setStyle(element, properties[i], null);
    }
  }
  function isVar(property) {
    return property.startsWith("--");
  }

  // src/core/dom/video/index.js
  function getInternalVideoElementFor(element) {
    return devAssertElement(element.querySelector("video, iframe"));
  }
  function tryPlay(element, isAutoplay) {
    var promise = tryResolve(function() {
      return element.play(!!isAutoplay);
    });
    promise.catch(function(err) {
      devExpectedError("TRYPLAY", err);
    });
    return promise;
  }

  // src/core/types/function/index.js
  function once(fn) {
    var evaluated = false;
    var retValue = null;
    var callback = fn;
    return function() {
      if (!evaluated) {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        retValue = callback.apply(self, args);
        evaluated = true;
        callback = null;
      }
      return retValue;
    };
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
  function listenOnce(element, eventType, listener, opt_evtListenerOpts) {
    var localListener = listener;
    var unlisten = internalListenImplementation(element, eventType, function(event) {
      try {
        localListener(event);
      } finally {
        localListener = null;
        unlisten();
      }
    }, opt_evtListenerOpts);
    return unlisten;
  }

  // extensions/amp-video-docking/0.1/breakpoints.js
  function applyBreakpointClassname(element, width, breakpoints) {
    breakpoints = breakpoints.sort(function(a, b) {
      return b.minWidth - a.minWidth;
    });
    var maxBreakpoint = -1;
    breakpoints.forEach(function(breakpoint) {
      var className = breakpoint.className, minWidth = breakpoint.minWidth;
      if (minWidth <= width && minWidth > maxBreakpoint) {
        element.classList.add(className);
        maxBreakpoint = minWidth;
      } else {
        element.classList.remove(className);
      }
    });
  }

  // extensions/amp-video-docking/0.1/events.js
  var VideoDockingEvents = {
    DISMISS_ON_TAP: "dock-dismiss-on-tap",
    SCROLL_BACK: "dock-scroll-back"
  };
  function pointerCoords(e) {
    var coords = e.touches ? e.touches[0] : e;
    return {
      x: dev().assertNumber("x" in coords ? coords.x : coords.clientX),
      y: dev().assertNumber("y" in coords ? coords.y : coords.clientY)
    };
  }

  // extensions/amp-video-docking/0.1/timeout.js
  var Timeout = /* @__PURE__ */ function() {
    function Timeout2(win, handler) {
      this.timer_ = Services.timerFor(win);
      this.handler_ = handler;
      this.id_ = null;
    }
    var _proto = Timeout2.prototype;
    _proto.trigger = function trigger(time) {
      var _this = this;
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      this.cancel();
      this.id_ = this.timer_.delay(function() {
        return _this.handler_.apply(null, args);
      }, time);
    };
    _proto.cancel = function cancel() {
      if (this.id_ !== null) {
        this.timer_.cancel(this.id_);
        this.id_ = null;
      }
    };
    _proto.isWaiting = function isWaiting() {
      return this.id_ !== null;
    };
    return Timeout2;
  }();

  // src/video-interface.js
  var VideoInterface = /* @__PURE__ */ function() {
    function VideoInterface2() {
    }
    var _proto = VideoInterface2.prototype;
    _proto.signals = function signals() {
    };
    _proto.mutateElementSkipRemeasure = function mutateElementSkipRemeasure(unusedMutator) {
    };
    _proto.supportsPlatform = function supportsPlatform() {
    };
    _proto.isInteractive = function isInteractive() {
    };
    _proto.getCurrentTime = function getCurrentTime() {
    };
    _proto.getDuration = function getDuration() {
    };
    _proto.getPlayedRanges = function getPlayedRanges() {
    };
    _proto.play = function play(unusedIsAutoplay) {
    };
    _proto.pause = function pause() {
    };
    _proto.mute = function mute() {
    };
    _proto.unmute = function unmute() {
    };
    _proto.showControls = function showControls() {
    };
    _proto.hideControls = function hideControls() {
    };
    _proto.getMetadata = function getMetadata() {
    };
    _proto.preimplementsAutoFullscreen = function preimplementsAutoFullscreen() {
    };
    _proto.preimplementsMediaSessionAPI = function preimplementsMediaSessionAPI() {
    };
    _proto.fullscreenEnter = function fullscreenEnter() {
    };
    _proto.fullscreenExit = function fullscreenExit() {
    };
    _proto.isFullscreen = function isFullscreen() {
    };
    _proto.seekTo = function seekTo(unusedTimeSeconds) {
    };
    return VideoInterface2;
  }();
  VideoInterface.prototype.element;
  VideoInterface.prototype.win;
  var VideoAttributes_Enum = {
    AUTOPLAY: "autoplay",
    DOCK: "dock",
    ROTATE_TO_FULLSCREEN: "rotate-to-fullscreen",
    NO_AUDIO: "noaudio"
  };
  var VideoEvents_Enum = {
    REGISTERED: "registered",
    LOAD: "load",
    LOADEDMETADATA: "loadedmetadata",
    LOADEDDATA: "loadeddata",
    PLAY: "play",
    PLAYING: "playing",
    PAUSE: "pause",
    ENDED: "ended",
    MUTED: "muted",
    UNMUTED: "unmuted",
    VISIBILITY: "amp:video:visibility",
    RELOAD: "reloaded",
    AD_START: "ad_start",
    AD_END: "ad_end",
    CUSTOM_TICK: "amp:video:tick"
  };
  var PlayingStates_Enum = {
    PLAYING_MANUAL: "playing_manual",
    PLAYING_AUTO: "playing_auto",
    PAUSED: "paused"
  };
  function isDockable(element) {
    return element.hasAttribute(VideoAttributes_Enum.DOCK);
  }

  // extensions/amp-video-docking/0.1/controls.js
  var _templateObject;
  var _templateObject2;
  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var ControlSet = {
    PLAYBACK: "playback",
    SCROLL_BACK: "scroll-back"
  };
  var BREAKPOINTS = [{
    className: "amp-small",
    minWidth: 0
  }, {
    className: "amp-large",
    minWidth: 300
  }];
  var TIMEOUT = 1200;
  var TIMEOUT_AFTER_INTERACTION = 800;
  function swap(a, b) {
    toggle(a, false);
    toggle(b, true);
  }
  var renderDockedOverlay = function renderDockedOverlay2(html2) {
    return html2(_templateObject || (_templateObject = _taggedTemplateLiteralLoose([' <div class="i-amphtml-video-docked-overlay" hidden></div> '])));
  };
  var renderControls = function renderControls2(html2) {
    return html2(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(['\n    <div class="amp-video-docked-controls" hidden>\n      <div\n        class="amp-video-docked-main-button-group\n               amp-video-docked-control-set-playback"\n      >\n        <div class="amp-video-docked-button-group">\n          <div\n            role="button"\n            ref="playButton"\n            class="amp-video-docked-play"\n          ></div>\n          <div\n            role="button"\n            ref="pauseButton"\n            class="amp-video-docked-pause"\n          ></div>\n        </div>\n        <div class="amp-video-docked-button-group">\n          <div\n            role="button"\n            ref="muteButton"\n            class="amp-video-docked-mute"\n          ></div>\n          <div\n            role="button"\n            ref="unmuteButton"\n            class="amp-video-docked-unmute"\n          ></div>\n        </div>\n        <div class="amp-video-docked-button-group">\n          <div\n            role="button"\n            ref="fullscreenButton"\n            class="amp-video-docked-fullscreen"\n          ></div>\n        </div>\n      </div>\n      <div\n        class="amp-video-docked-main-button-group\n               amp-video-docked-control-set-scroll-back"\n        hidden\n      >\n        <div class="amp-video-docked-button-group">\n          <div\n            role="button"\n            ref="scrollBackButton"\n            class="amp-video-docked-scroll-back"\n          ></div>\n        </div>\n      </div>\n      <div class="amp-video-docked-button-dismiss-group" ref="dismissContainer">\n        <div\n          role="button"\n          ref="dismissButton"\n          class="amp-video-docked-dismiss"\n        ></div>\n      </div>\n    </div>\n  '])));
  };
  var Controls = /* @__PURE__ */ function() {
    function Controls2(ampdoc2) {
      var _this = this;
      this.ampdoc_ = ampdoc2;
      var html2 = htmlFor(dev().assertElement(ampdoc2.getBody()));
      this.container = renderControls(html2);
      this.overlay = renderDockedOverlay(html2);
      var refs = htmlRefs(this.container);
      var assertRef = function assertRef2(ref) {
        return dev().assertElement(refs[ref]);
      };
      this.dismissButton_ = assertRef("dismissButton");
      this.playButton_ = assertRef("playButton");
      this.pauseButton_ = assertRef("pauseButton");
      this.muteButton_ = assertRef("muteButton");
      this.unmuteButton_ = assertRef("unmuteButton");
      this.fullscreenButton_ = assertRef("fullscreenButton");
      this.scrollBackButton_ = assertRef("scrollBackButton");
      this.dismissContainer_ = assertRef("dismissContainer");
      this.controlSets_ = this.container.querySelectorAll(".amp-video-docked-main-button-group");
      this.isDisabled_ = false;
      this.isSticky_ = false;
      this.getHideTimeout_ = once(function() {
        return new Timeout(_this.ampdoc_.win, function() {
          _this.hide(true);
        });
      });
      this.videoUnlisteners_ = [];
      this.mouseMoveUnlistener_ = null;
      this.mouseOutUnlistener_ = null;
      this.area_ = null;
      this.video_ = null;
      this.hideOnTapOutside_();
      this.showOnTapOrHover_();
    }
    var _proto = Controls2.prototype;
    _proto.disable = function disable() {
      this.isDisabled_ = true;
    };
    _proto.enable = function enable() {
      this.isDisabled_ = false;
    };
    _proto.setVideo = function setVideo(video, area) {
      this.area_ = area;
      if (this.video_ !== video) {
        this.video_ = video;
        this.listen_(video);
      }
    };
    _proto.useControlSet_ = function useControlSet_(setName) {
      var activeClassname = "amp-video-docked-control-set-" + setName;
      iterateCursor(this.controlSets_, function(controlSet) {
        toggle(controlSet, controlSet.classList.contains(activeClassname));
      });
    };
    _proto.listen_ = function listen_(video) {
      var _this2 = this;
      this.unlisten_();
      var click = "click";
      var element = video.element;
      this.videoUnlisteners_.push(this.listenWhenEnabled_(this.dismissButton_, click, function() {
        _this2.dispatch_(VideoDockingEvents.DISMISS_ON_TAP);
      }), this.listenWhenEnabled_(this.playButton_, click, function() {
        tryPlay(video, false);
      }), this.listenWhenEnabled_(this.pauseButton_, click, function() {
        video.pause();
      }), this.listenWhenEnabled_(this.muteButton_, click, function() {
        video.mute();
      }), this.listenWhenEnabled_(this.unmuteButton_, click, function() {
        video.unmute();
      }), this.listenWhenEnabled_(this.fullscreenButton_, click, function() {
        video.fullscreenEnter();
      }), this.listenWhenEnabled_(this.scrollBackButton_, click, function() {
        _this2.dispatch_(VideoDockingEvents.SCROLL_BACK);
      }), listen(this.container, "mouseup", function() {
        return _this2.hideOnTimeout(TIMEOUT_AFTER_INTERACTION);
      }), listen(element, VideoEvents_Enum.PLAYING, function() {
        return _this2.onPlay_();
      }), listen(element, VideoEvents_Enum.PAUSE, function() {
        return _this2.onPause_();
      }), listen(element, VideoEvents_Enum.MUTED, function() {
        return _this2.onMute_();
      }), listen(element, VideoEvents_Enum.UNMUTED, function() {
        return _this2.onUnmute_();
      }), listen(element, VideoEvents_Enum.AD_START, function() {
        return _this2.useControlSet_(ControlSet.SCROLL_BACK);
      }), listen(element, VideoEvents_Enum.AD_END, function() {
        return _this2.useControlSet_(ControlSet.PLAYBACK);
      }));
    };
    _proto.dispatch_ = function dispatch_(event) {
      this.container.dispatchEvent(createCustomEvent(this.ampdoc_.win, event, void 0));
    };
    _proto.onPlay_ = function onPlay_() {
      var pauseButton_ = this.pauseButton_, playButton_ = this.playButton_;
      this.isSticky_ = false;
      swap(playButton_, pauseButton_);
    };
    _proto.onPause_ = function onPause_() {
      var pauseButton_ = this.pauseButton_, playButton_ = this.playButton_;
      this.isSticky_ = true;
      swap(pauseButton_, playButton_);
    };
    _proto.onMute_ = function onMute_() {
      var muteButton_ = this.muteButton_, unmuteButton_ = this.unmuteButton_;
      swap(muteButton_, unmuteButton_);
    };
    _proto.onUnmute_ = function onUnmute_() {
      var muteButton_ = this.muteButton_, unmuteButton_ = this.unmuteButton_;
      swap(unmuteButton_, muteButton_);
    };
    _proto.listenWhenEnabled_ = function listenWhenEnabled_(element, eventType, callback) {
      var _this3 = this;
      return listen(element, eventType, function() {
        if (_this3.isDisabled_) {
          return;
        }
        callback();
      });
    };
    _proto.unlisten_ = function unlisten_() {
      while (this.videoUnlisteners_.length > 0) {
        this.videoUnlisteners_.pop().call();
      }
    };
    _proto.hideOnTimeout = function hideOnTimeout(timeout) {
      if (timeout === void 0) {
        timeout = TIMEOUT;
      }
      this.getHideTimeout_().trigger(timeout);
    };
    _proto.showOnTapOrHover_ = function showOnTapOrHover_() {
      var _this4 = this;
      var overlay = this.overlay;
      var boundShow = function boundShow2() {
        return _this4.show_();
      };
      this.listenWhenEnabled_(overlay, "click", boundShow);
      this.listenWhenEnabled_(overlay, "mouseover", boundShow);
    };
    _proto.show_ = function show_() {
      var _this5 = this;
      this.ampdoc_.win.requestAnimationFrame(function() {
        _this5.showOnNextAnimationFrame_();
      });
    };
    _proto.showOnNextAnimationFrame_ = function showOnNextAnimationFrame_() {
      var manager = Services.videoManagerForDoc(this.ampdoc_);
      var video = devAssert2(this.video_);
      var isRollingAd = manager.isRollingAd(video);
      var isMuted = manager.isMuted(video);
      var isPlaying = manager.getPlayingState(video) !== PlayingStates_Enum.PAUSED;
      var container = this.container, overlay = this.overlay;
      toggle(container, true);
      container.classList.add("amp-video-docked-controls-shown");
      overlay.classList.add("amp-video-docked-controls-bg");
      this.useControlSet_(isRollingAd ? ControlSet.SCROLL_BACK : ControlSet.PLAYBACK);
      toggle(this.playButton_, !isPlaying);
      toggle(this.pauseButton_, isPlaying);
      toggle(this.muteButton_, !isMuted);
      toggle(this.unmuteButton_, isMuted);
      this.listenToMouseMove_();
      this.hideOnTimeout();
    };
    _proto.positionOnVsync = function positionOnVsync(scale, x, y, width, height) {
      this.area_ = layoutRectLtwh(x, y, width * scale, height * scale);
      var container = this.container;
      var halfScale = scale / 2;
      var centerX = x + width * halfScale;
      var centerY = y + height * halfScale;
      applyBreakpointClassname(container, scale * width, BREAKPOINTS);
      setImportantStyles(container, {
        "transform": translate(centerX, centerY)
      });
      var dismissMargin = 4;
      var dismissWidth = 40;
      var dismissX = width * halfScale - dismissMargin - dismissWidth;
      var dismissY = -(height * halfScale - dismissMargin - dismissWidth);
      setImportantStyles(this.dismissContainer_, {
        "transform": translate(dismissX, dismissY)
      });
    };
    _proto.hideOnTapOutside_ = function hideOnTapOutside_() {
      var _this6 = this;
      listen(this.ampdoc_.getRootNode(), "mousedown", function(e) {
        if (_this6.isControlsTarget_(dev().assertElement(e.target))) {
          return;
        }
        _this6.hide(true);
      });
    };
    _proto.isControlsTarget_ = function isControlsTarget_(target) {
      return target == this.overlay || !!closestAncestorElementBySelector(target, ".amp-video-docked-controls");
    };
    _proto.hide = function hide(opt_respectSticky, opt_immediately) {
      var ampVideoDockedControlsShown = "amp-video-docked-controls-shown";
      var container = this.container, overlay = this.overlay;
      if (!container.classList.contains(ampVideoDockedControlsShown)) {
        return;
      }
      if (opt_respectSticky && this.isSticky_) {
        return;
      }
      if (opt_immediately) {
        toggle(container, false);
        toggle(overlay, false);
      }
      overlay.classList.remove("amp-video-docked-controls-bg");
      container.classList.remove(ampVideoDockedControlsShown);
    };
    _proto.listenToMouseMove_ = function listenToMouseMove_() {
      var _this7 = this;
      if (this.mouseMoveUnlistener_) {
        return;
      }
      this.mouseMoveUnlistener_ = listen(this.overlay, "mousemove", function() {
        _this7.show_();
      });
      this.mouseOutUnlistener_ = listen(this.overlay, "mouseout", function(e) {
        devAssert2(_this7.area_);
        var _pointerCoords = pointerCoords(e), x = _pointerCoords.x, y = _pointerCoords.y;
        var _this7$area_ = _this7.area_, bottom = _this7$area_.bottom, left = _this7$area_.left, right = _this7$area_.right, top = _this7$area_.top;
        if (!(x < left || x > right || y < top || y > bottom)) {
          return;
        }
        _this7.hide(true);
        _this7.unlistenToMouseMovement_();
      });
    };
    _proto.unlistenToMouseMovement_ = function unlistenToMouseMovement_() {
      if (this.mouseMoveUnlistener_) {
        this.mouseMoveUnlistener_();
        this.mouseMoveUnlistener_ = null;
      }
      if (this.mouseOutUnlistener_) {
        this.mouseOutUnlistener_();
        this.mouseOutUnlistener_ = null;
      }
    };
    _proto.reset = function reset() {
      var container = this.container, overlay = this.overlay;
      var els = [overlay, container];
      toggle(overlay, false);
      this.hide();
      for (var i = 0; i < els.length; i++) {
        var el = els[i];
        resetStyles(el, ["transform", "transition", "width", "height"]);
      }
    };
    return Controls2;
  }();

  // extensions/amp-video-docking/0.1/def.js
  var DirectionX = {
    LEFT: "left",
    RIGHT: "right"
  };
  var DirectionY = {
    TOP: "top",
    BOTTOM: "bottom"
  };
  var FLOAT_TOLERANCE = 0.02;

  // src/core/math.js
  function mapRange(val, min1, max1, min2, max2) {
    var max1Bound = max1;
    var min1Bound = min1;
    if (min1 > max1) {
      max1Bound = min1;
      min1Bound = max1;
    }
    if (val < min1Bound) {
      val = min1Bound;
    } else if (val > max1Bound) {
      val = max1Bound;
    }
    return (val - min1) * (max2 - min2) / (max1 - min1) + min2;
  }

  // extensions/amp-video-docking/0.1/math.js
  function calculateJustified(containerWidth, itemWidth, itemMargin, directedStep) {
    return directedStep * (containerWidth - itemWidth - itemMargin * 2);
  }
  function calculateRightJustifiedX(containerWidth, itemWidth, itemMargin, step) {
    return calculateJustified(containerWidth, itemWidth, itemMargin, step);
  }
  function calculateLeftJustifiedX(containerWidth, itemWidth, itemMargin, step) {
    return calculateJustified(containerWidth, itemWidth, itemMargin, -step);
  }
  var mapStep = function mapStep2(step, min, max) {
    return mapRange(step, 0, 1, min, max);
  };
  function interpolatedBoxesTransform(from, to, step) {
    if (step === void 0) {
      step = 1;
    }
    var relativeX = to.x < from.x ? DirectionX.LEFT : DirectionX.RIGHT;
    var x = mapStep(step, from.x, to.x);
    var y = mapStep(step, from.y, to.y);
    var width = mapStep(step, from.width, to.width);
    var scale = width / from.width;
    return {
      x: x,
      y: y,
      scale: scale,
      relativeX: relativeX
    };
  }
  function letterboxRect(original, container) {
    var height = original.height, width = original.width;
    var maxHeight = container.height, left = container.left, top = container.top, maxWidth = container.width;
    var containerAspect = maxWidth / maxHeight;
    var originalAspect = width / height;
    var x, y, scale;
    if (originalAspect > containerAspect) {
      scale = maxWidth / width;
      y = top + maxHeight / 2 - height * scale / 2;
      x = left;
    } else {
      scale = maxHeight / height;
      x = left + maxWidth / 2 - width * scale / 2;
      y = top;
    }
    return layoutRectLtwh(x, y, width * scale, height * scale);
  }
  function topCornerRect(original, container, horizontalEdge, widthRatio, widthMin, marginRatio, marginMax) {
    var widthUnit = container.width;
    var margin = Math.min(marginMax, marginRatio * widthUnit);
    var aspect = original.width / original.height;
    var width = Math.max(widthMin, widthUnit * widthRatio);
    var height = width / aspect;
    var x = horizontalEdge == DirectionX.RIGHT ? container.right - margin - width : container.left + margin;
    var y = margin;
    return layoutRectLtwh(x, y, width, height);
  }
  var isVisibleBySize = function isVisibleBySize2(element) {
    return isSizedRect(element.getBoundingClientRect());
  };
  var isSizedRect = function isSizedRect2(rect) {
    return rect.width > 0 && rect.height > 0;
  };

  // extensions/amp-video-docking/0.1/viewport-rect.js
  var readonlyGetterProp = function readonlyGetterProp2(get) {
    return {
      get: get,
      configurable: false,
      enumerable: true
    };
  };
  function createViewportRect(viewport) {
    var width = readonlyGetterProp(function() {
      return viewport.getSize().width;
    });
    var height = readonlyGetterProp(function() {
      return viewport.getSize().height;
    });
    return Object.defineProperties(layoutRectLtwh(0, 0, 0, 0), {
      width: width,
      height: height,
      right: width,
      bottom: height
    });
  }

  // build/amp-video-docking-0.1.css.js
  var CSS2 = ".amp-video-docked-controls{direction:ltr!important;opacity:0;pointer-events:none!important;transition:opacity 0.3s ease;height:120px}.amp-video-docked-main-button-group{height:40px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:-20px 0 0 -60px}.amp-large>.amp-video-docked-main-button-group{margin-left:-70px}.amp-large>.amp-video-docked-main-button-group>.amp-video-docked-button-group{margin-right:10px}.amp-large>.amp-video-docked-control-set-scroll-back,.amp-small>.amp-video-docked-control-set-scroll-back{margin-left:-32px}.amp-large>.amp-video-docked-control-set-scroll-back>.amp-video-docked-button-group{margin-right:0}.amp-large>.amp-video-docked-button-dismiss-group{margin:6px 0 0 -6px}.amp-small>.amp-video-docked-button-dismiss-group,.amp-small>.amp-video-docked-button-dismiss-group>div[role=button]{min-width:32px;height:32px;border-radius:32px;background-size:20px 20px}.amp-small>.amp-video-docked-button-dismiss-group{margin-left:8px}.amp-video-docked-controls-shown{opacity:1;pointer-events:initial!important}.amp-video-docked-button-group{margin:0}.amp-video-docked-button-dismiss-group,.amp-video-docked-button-dismiss-group>div[role=button],.amp-video-docked-button-group,.amp-video-docked-button-group>div[role=button]{min-width:40px;height:40px;border-radius:40px}.amp-video-docked-button-dismiss-group:active,.amp-video-docked-button-group:active{background-color:hsla(0,0%,100%,0.7)}.amp-video-docked-button-dismiss-group>div[role=button],.amp-video-docked-button-group,.amp-video-docked-button-group>div[role=button],.amp-video-docked-controls,.i-amphtml-video-docked-overlay{-webkit-tap-highlight-color:rgba(0,0,0,0)!important}.amp-video-docked-button-dismiss-group>div[role=button],.amp-video-docked-button-group>div[role=button]{background-repeat:no-repeat;background-position:50%}.amp-video-docked-shadow{box-shadow:0px 0 20px 6px rgba(0,0,0,0.2);transition-property:transform,opacity!important}.amp-video-docked-controls-bg{background:hsla(0,0%,90%,0.6)}.amp-video-docked-mute{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")}.amp-video-docked-unmute{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")}.amp-video-docked-pause{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M6 19h4V5H6v14zm8-14v14h4V5h-4z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")}.amp-video-docked-play{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M8 5v14l11-7z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")}.amp-video-docked-fullscreen{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z'/%3E%3C/svg%3E\")}.amp-video-docked-dismiss{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")}.amp-video-docked-scroll-back{background-size:50%}.amp-rtl .amp-video-docked-scroll-back,.amp-video-docked-scroll-back{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M-4-4h48v48H-4z'/%3E%3Cpath d='M36 0c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H12c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4h24zM16 11.868l12.618 12.618 2.829-2.828L18.789 9H27V5H12v15h4v-8.132zM4 8H0v28c0 2.2 1.8 4 4 4h28v-4H4V8z' fill='%23000' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E\")}.amp-video-docked-control-set-scroll-back>.amp-video-docked-button-group,.amp-video-docked-control-set-scroll-back>.amp-video-docked-button-group>div[role=button]{min-width:64px;height:64px}.amp-video-docked-shadow,.i-amphtml-video-docked,.i-amphtml-video-docked-overlay{margin:0!important}.i-amphtml-video-docked{transition-property:transform!important}.amp-video-docked-controls,.amp-video-docked-shadow,.i-amphtml-video-docked,.i-amphtml-video-docked-overlay{position:fixed!important;top:0!important;left:0!important;right:auto!important;bottom:auto!important;padding:0!important;min-width:0!important;min-height:0!important;max-width:auto!important;max-height:auto!important;transform-origin:left top!important;will-change:width,height,transition,transform,opacity;transition:transform 0.05s}.i-amphtml-video-docked-overlay{opacity:0;transition:opacity 0.3s ease;contain:strict!important}.amp-video-docked-controls-bg{opacity:1}.i-amphtml-video-docked-overlay.amp-video-docked-almost-dismissed{opacity:1;background:hsla(0,0%,39%,0.1)}.i-amphtml-video-docked-shadow.amp-video-docked-almost-dismissed,.i-amphtml-video-docked.amp-video-docked-almost-dismissed{opacity:0.3}.amp-video-docked-button-dismiss-group{position:absolute;top:-40px}.amp-video-docked-placeholder-background{background:hsla(0,0%,78%,0.5);transition-property:opacity;overflow:hidden;pointer-events:none;z-index:0;opacity:0}.amp-video-docked-placeholder-icon{-webkit-mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h48v48H0z'/%3E%3Cpath d='M40 4H16c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4zM8 12H4v28c0 2.2 1.8 4 4 4h28v-4H8V12zm28 3.868L23.382 28.486l-2.828-2.828L33.212 13H25V9h15v15h-4v-8.132z' fill='%23000' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h48v48H0z'/%3E%3Cpath d='M40 4H16c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4zM8 12H4v28c0 2.2 1.8 4 4 4h28v-4H8V12zm28 3.868L23.382 28.486l-2.828-2.828L33.212 13H25V9h15v15h-4v-8.132z' fill='%23000' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E\");-webkit-mask-size:48px 48px;mask-size:48px 48px;height:48px;width:48px;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:bottom left;mask-position:bottom left;background:hsla(0,0%,39%,0.8);transition-property:opacity,transform;will-change:opacity,transform;position:absolute;bottom:40px;left:40px}.amp-video-docked-placeholder-icon.amp-rtl{-webkit-mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M-4-4h48v48H-4z'/%3E%3Cpath d='M36 0c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H12c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4h24zM16 11.868l12.618 12.618 2.829-2.828L18.789 9H27V5H12v15h4v-8.132zM4 8H0v28c0 2.2 1.8 4 4 4h28v-4H4V8z' fill='%23000' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M-4-4h48v48H-4z'/%3E%3Cpath d='M36 0c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H12c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4h24zM16 11.868l12.618 12.618 2.829-2.828L18.789 9H27V5H12v15h4v-8.132zM4 8H0v28c0 2.2 1.8 4 4 4h28v-4H4V8z' fill='%23000' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E\");left:auto;right:40px}.amp-video-docked-placeholder-icon.amp-small{-webkit-mask-size:32px 32px;mask-size:32px 32px;width:32px;height:32px;bottom:20px;left:20px}.amp-video-docked-placeholder-icon.amp-rtl.amp-small{left:auto;right:20px}.amp-video-docked-placeholder-background-poster{background-size:cover;background-repeat:no-repeat;filter:blur(20px);transform:scale(1.1);opacity:0.3}.amp-video-docked-controls{z-index:2147483646!important}.i-amphtml-video-docked-overlay{z-index:2147483645!important}.i-amphtml-video-docked{z-index:2147483644!important}.amp-video-docked-shadow{z-index:2147483643!important}\n/*# sourceURL=/extensions/amp-video-docking/0.1/amp-video-docking.css*/";

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

  // extensions/amp-video-docking/0.1/amp-video-docking.js
  var _templateObject3;
  var _templateObject22;
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
  function _taggedTemplateLiteralLoose2(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var TAG = "amp-video-docking";
  var CORNER_WIDTH_RATIO = 0.3;
  var CORNER_WIDTH_MIN = 180;
  var CORNER_MARGIN_MAX = 30;
  var CORNER_MARGIN_RATIO = 0.04;
  var MIN_VIEWPORT_WIDTH = 320;
  var REVERT_TO_INLINE_RATIO = 0.85;
  var PLACEHOLDER_ICON_LARGE_WIDTH = 48;
  var PLACEHOLDER_ICON_LARGE_MARGIN = 40;
  var PLACEHOLDER_ICON_SMALL_WIDTH = 32;
  var PLACEHOLDER_ICON_SMALL_MARGIN = 20;
  var PLACEHOLDER_ICON_BREAKPOINTS = [{
    className: "amp-small",
    minWidth: 0
  }, {
    className: "amp-large",
    minWidth: 420
  }];
  var BASE_CLASS_NAME = "i-amphtml-video-docked";
  var Actions = {
    DOCK: "dock",
    UNDOCK: "undock"
  };
  var DockTargetType = {
    CORNER: "corner",
    SLOT: "slot"
  };
  var transform = function transform2(x, y, scale) {
    return "translate(" + x + "px, " + y + "px) scale(" + scale + ")";
  };
  function throttleByAnimationFrame(win, fn) {
    var running = false;
    return function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (running) {
        return;
      }
      running = true;
      win.requestAnimationFrame(function() {
        fn.apply(null, args);
        running = false;
      });
    };
  }
  function complainAboutPortrait(element) {
    var TAG2 = element.tagName.toUpperCase();
    user().error(TAG2, "Minimize-to-corner (`dock`) does not support portrait video.", element);
  }
  function getPosterImageSrc(element) {
    var attr = element.getAttribute("poster") || element.getAttribute("data-poster");
    if (attr) {
      return attr;
    }
    var imgEl = scopedQuerySelector(element, "amp-img[placeholder],img[placeholder],[placeholder] amp-img");
    if (imgEl) {
      return imgEl.getAttribute("src");
    }
  }
  var ShadowLayer = function ShadowLayer2(html2) {
    return html2(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose2([' <div class="amp-video-docked-shadow" hidden></div> '])));
  };
  var PlaceholderBackground = function PlaceholderBackground2(html2) {
    return html2(_templateObject22 || (_templateObject22 = _taggedTemplateLiteralLoose2(['\n    <div class="amp-video-docked-placeholder-background">\n      <div\n        class="amp-video-docked-placeholder-background-poster"\n        ref="poster"\n      ></div>\n      <div class="amp-video-docked-placeholder-icon" ref="icon"></div>\n    </div>\n  '])));
  };
  var VideoDocking = /* @__PURE__ */ function() {
    function VideoDocking2(ampdoc2) {
      var _this = this;
      this.ampdoc_ = ampdoc2;
      this.manager_ = once(function() {
        return Services.videoManagerForDoc(ampdoc2);
      });
      this.viewport_ = Services.viewportForDoc(ampdoc2);
      this.viewportRect_ = createViewportRect(this.viewport_);
      this.currentlyDocked_ = null;
      this.cornerDirectionX_ = null;
      var html2 = htmlFor(this.getDoc_());
      this.getShadowLayer_ = once(function() {
        return _this.append_(ShadowLayer(html2));
      });
      this.getControls_ = once(function() {
        return _this.installControls_();
      });
      this.getPlaceholderBackground_ = once(function() {
        return _this.append_(PlaceholderBackground(html2));
      });
      this.getPlaceholderRefs_ = once(function() {
        return htmlRefs(_this.getPlaceholderBackground_());
      });
      this.lastDismissed_ = null;
      this.placedAt_ = null;
      this.sizedAt_ = null;
      this.scrollDirection_ = null;
      this.lastScrollTop_ = this.viewport_.getScrollTop();
      this.isDragging_ = false;
      this.dragOffsetX_ = 0;
      this.previousDragOffsetX_ = 0;
      this.dragVelocityX_ = 0;
      this.observed_ = [];
      this.install_ = once(function() {
        var ampdoc3 = _this.ampdoc_;
        _this.viewport_.onScroll(throttleByAnimationFrame(ampdoc3.win, function() {
          return _this.updateScroll_();
        }));
        _this.viewport_.onResize(function() {
          return _this.onViewportResize_();
        });
        installStylesForDoc(ampdoc3, CSS2, null, false, TAG);
      });
      this.findSlotOnce_ = once(function() {
        return _this.findSlot_();
      });
      this.intersectionObserver_ = null;
      this.isTransitioning_ = false;
      this.registerAll_();
    }
    var _proto = VideoDocking2.prototype;
    _proto.registerAll_ = function registerAll_() {
      var _this2 = this;
      if (!this.isEnabled_()) {
        return;
      }
      var ampdoc2 = this.ampdoc_;
      var dockableSelector = "[" + escapeCssSelectorIdent(VideoAttributes_Enum.DOCK) + "]";
      var dockableElements = ampdoc2.getRootNode().querySelectorAll(dockableSelector);
      for (var i = 0; i < dockableElements.length; i++) {
        var element = dockableElements[i];
        if (element.signals && element.signals().get(VideoEvents_Enum.REGISTERED)) {
          this.registerElement(element);
        }
      }
      listen(ampdoc2.getBody(), VideoEvents_Enum.REGISTERED, function(e) {
        var target = dev().assertElement(e.target);
        if (isDockable(target)) {
          _this2.registerElement(target);
        }
      });
    };
    _proto.isEnabled_ = function isEnabled_() {
      if (Services.platformFor(this.ampdoc_.win).isIos() && Services.viewerForDoc(this.ampdoc_).isEmbedded()) {
        return false;
      }
      return true;
    };
    _proto.findSlot_ = function findSlot_() {
      var root = this.ampdoc_.getRootNode();
      var video = root.querySelector("[dock]");
      dev().assertElement(video);
      userAssert2(video.signals().get(VideoEvents_Enum.REGISTERED), "`dock` attribute can only be set on video components.");
      var slotSelector = video.getAttribute("dock").trim();
      if (slotSelector == "") {
        return null;
      }
      var el = root.querySelector(slotSelector);
      if (el) {
        userAssert2(el.tagName.toLowerCase() == "amp-layout", "Dock slot must be an <amp-layout> element.");
      }
      return el;
    };
    _proto.onViewportResize_ = function onViewportResize_() {
      var _this$currentlyDocked, _this3 = this;
      if (this.viewportRect_.width === ((_this$currentlyDocked = this.currentlyDocked_) == null ? void 0 : _this$currentlyDocked.viewportRect.width)) {
        return;
      }
      this.observed_.forEach(function(video) {
        return _this3.updateOnResize_(video);
      });
    };
    _proto.getTopBoundary_ = function getTopBoundary_() {
      var slot = this.getSlot_();
      if (slot) {
        return slot.getBoundingClientRect().top;
      }
      return 0;
    };
    _proto.register = function register(video) {
      var _this4 = this;
      this.install_();
      if (!this.intersectionObserver_) {
        this.intersectionObserver_ = new IntersectionObserver(function(entries) {
          var handled = [];
          var _loop = function _loop2(i2) {
            var _entries$i = entries[i2], boundingClientRect = _entries$i.boundingClientRect, target = _entries$i.target;
            if (handled.indexOf(target) < 0) {
              target.getImpl().then(function(video2) {
                _this4.updateOnPositionChange_(video2, boundingClientRect);
              });
              handled.push(target);
            }
          };
          for (var i = entries.length - 1; i >= 0; i--) {
            _loop(i);
          }
        }, {
          threshold: [0, 0.1, 0.2, 0.8, 0.9, 1]
        });
      }
      this.intersectionObserver_.observe(video.element);
      this.observed_.push(video);
    };
    _proto.registerElement = function registerElement(element) {
      var _this5 = this;
      element.getImpl().then(function(video) {
        return _this5.register(video);
      });
    };
    _proto.updateScroll_ = function updateScroll_() {
      var scrollTop = this.viewport_.getScrollTop();
      if (Math.abs(scrollTop - this.lastScrollTop_) < 5) {
        return;
      }
      var scrollDirection = scrollTop > this.lastScrollTop_ ? DirectionY.TOP : DirectionY.BOTTOM;
      this.scrollDirection_ = scrollDirection;
      this.lastScrollTop_ = scrollTop;
    };
    _proto.getDoc_ = function getDoc_() {
      var root = this.ampdoc_.getRootNode();
      return root.ownerDocument || root;
    };
    _proto.append_ = function append_(element) {
      var root = this.getDoc_().body || this.getDoc_();
      return dev().assertElement(root.appendChild(element));
    };
    _proto.addDragListeners_ = function addDragListeners_(element) {
      var _this6 = this;
      var handler = function handler2(e) {
        return _this6.drag_(e);
      };
      listen(element, "touchstart", handler);
      listen(element, "mousedown", handler);
      return element;
    };
    _proto.installControls_ = function installControls_() {
      var _this7 = this;
      var controls = new Controls(this.ampdoc_);
      var container = controls.container, overlay = controls.overlay;
      listen(container, VideoDockingEvents.DISMISS_ON_TAP, function() {
        _this7.dismissOnTap_();
      });
      listen(container, VideoDockingEvents.SCROLL_BACK, function() {
        _this7.scrollBack_();
      });
      this.addDragListeners_(container);
      this.addDragListeners_(overlay);
      this.append_(container);
      this.append_(overlay);
      return controls;
    };
    _proto.dismissOnTap_ = function dismissOnTap_() {
      this.getControls_().hide(false, true);
      this.undock_(this.getDockedVideo_());
    };
    _proto.getDockedVideo_ = function getDockedVideo_() {
      return devAssert2(this.currentlyDocked_).video;
    };
    _proto.getTargetFor_ = function getTargetFor_(video, opt_inlineRect) {
      if (this.isDragging_ || !this.isValidSize_(video, opt_inlineRect) || this.ignoreBecauseAnotherDocked_(video) || this.ignoreDueToNotPlayingManually_(video)) {
        return null;
      }
      var element = video.element;
      var inlineRect = opt_inlineRect || element.getBoundingClientRect();
      var intersectionRect = rectIntersection(inlineRect, this.viewportRect_);
      if (!intersectionRect || !isSizedRect(intersectionRect)) {
        return null;
      }
      if (intersectionRect.top > this.getTopBoundary_()) {
        return null;
      }
      return this.getUsableTarget_(video, opt_inlineRect);
    };
    _proto.getScrollAdjustedRect_ = function getScrollAdjustedRect_(element) {
      element = element.element || element;
      return element.getBoundingClientRect();
    };
    _proto.updateOnResize_ = function updateOnResize_(video) {
      var _this8 = this;
      this.raf_(function() {
        var target = _this8.getTargetFor_(video);
        if (target) {
          _this8.dock_(video, target, 1);
          return;
        }
        if (_this8.isCurrentlyDocked_(video)) {
          _this8.undock_(video);
        }
      });
    };
    _proto.raf_ = function raf_(cb) {
      this.ampdoc_.win.requestAnimationFrame(cb);
    };
    _proto.updateOnPositionChange_ = function updateOnPositionChange_(video, opt_inlineRect) {
      if (this.isTransitioning_) {
        return;
      }
      if (this.scrollDirection_ == DirectionY.TOP) {
        var target = this.getTargetFor_(video, opt_inlineRect);
        if (target) {
          this.dockOnPositionChange_(video, target, opt_inlineRect);
        }
      } else if (this.scrollDirection_ == DirectionY.BOTTOM) {
        if (!this.currentlyDocked_) {
          return;
        }
        if (video === this.getDockedVideo_()) {
          if (this.isVisible_(video, REVERT_TO_INLINE_RATIO, opt_inlineRect)) {
            this.undock_(video, false, opt_inlineRect);
          }
        }
      }
    };
    _proto.ignoreDueToNotPlayingManually_ = function ignoreDueToNotPlayingManually_(video) {
      return !this.currentlyDocked_ && !this.isPlaying_(video);
    };
    _proto.ignoreBecauseAnotherDocked_ = function ignoreBecauseAnotherDocked_(video) {
      return !!this.currentlyDocked_ && !this.isCurrentlyDocked_(video);
    };
    _proto.isValidSize_ = function isValidSize_(video, opt_inlineRect) {
      var _ref = opt_inlineRect || video.element.getBoundingClientRect(), height = _ref.height, width = _ref.width;
      if (width / height < 1 - FLOAT_TOLERANCE) {
        complainAboutPortrait(video.element);
        return false;
      }
      return this.viewportRect_.width >= MIN_VIEWPORT_WIDTH && this.viewportRect_.height >= height * REVERT_TO_INLINE_RATIO;
    };
    _proto.isPlaying_ = function isPlaying_(optVideo) {
      if (optVideo === void 0) {
        optVideo = null;
      }
      var video = optVideo || this.getDockedVideo_();
      return this.manager_().getPlayingState(video) == PlayingStates_Enum.PLAYING_MANUAL;
    };
    _proto.dockOnPositionChange_ = function dockOnPositionChange_(video, target, opt_inlineRect) {
      if (this.ignoreDueToDismissal_(video)) {
        return;
      }
      if (this.currentlyDocked_) {
        return;
      }
      this.dockInTransferLayerStep_(video, target, opt_inlineRect);
    };
    _proto.dockInTransferLayerStep_ = function dockInTransferLayerStep_(video, target, opt_inlineRect) {
      var _this9 = this;
      var isTransferLayerStep = true;
      return this.dock_(video, target, 0.05, opt_inlineRect, isTransferLayerStep).then(function() {
        return new Promise(function(resolve) {
          _this9.raf_(function() {
            _this9.dock_(video, target, 1, opt_inlineRect).then(resolve);
          });
        });
      });
    };
    _proto.dock_ = function dock_(video, target, step, opt_inlineRect, opt_isTransferLayerStep) {
      var _this10 = this;
      var element = video.element;
      this.removePosterForAndroidBug_(element);
      var _this$getDims_ = this.getDims_(video, target, step, opt_inlineRect), relativeX = _this$getDims_.relativeX, scale = _this$getDims_.scale, x = _this$getDims_.x, y = _this$getDims_.y;
      video.hideControls();
      var transitionDurationMs = this.calculateTransitionDuration_(step);
      this.setCurrentlyDocked_(video, target, step);
      return this.placeAt_(video, x, y, scale, step, transitionDurationMs, relativeX, opt_inlineRect).then(function() {
        if (opt_isTransferLayerStep) {
          return;
        }
        _this10.getControls_().enable();
      });
    };
    _proto.trigger_ = function trigger_(action, opt_target) {
      var element = dev().assertElement(opt_target && opt_target.slot || this.getSlot_() || this.getDockedVideo_().element);
      var trust = ActionTrust_Enum.LOW;
      var event = createCustomEvent(this.ampdoc_.win, action, dict({}));
      var actions = Services.actionServiceForDoc(element);
      actions.trigger(element, action, event, trust);
    };
    _proto.ignoreDueToDismissal_ = function ignoreDueToDismissal_(video) {
      if (this.lastDismissed_ != video) {
        return false;
      }
      if (this.isVisible_(video.element, FLOAT_TOLERANCE)) {
        this.resetDismissed_();
      }
      return true;
    };
    _proto.resetDismissed_ = function resetDismissed_() {
      this.lastDismissed_ = null;
    };
    _proto.calculateTransitionDuration_ = function calculateTransitionDuration_(step) {
      var maxAutoTransitionDurationMs = 300;
      if (!this.currentlyDocked_) {
        return 0;
      }
      var remaining = Math.abs(step - this.currentlyDocked_.step);
      return remaining * maxAutoTransitionDurationMs;
    };
    _proto.alreadyPlacedAt_ = function alreadyPlacedAt_(x, y, scale) {
      return !!this.placedAt_ && this.placedAt_.x == x && this.placedAt_.y == y && this.placedAt_.scale == scale;
    };
    _proto.placeAt_ = function placeAt_(video, x, y, scale, step, transitionDurationMs, opt_relativeX, opt_inlineRect, position) {
      var _this11 = this;
      if (position === void 0) {
        position = "fixed";
      }
      if (this.alreadyPlacedAt_(x, y, scale)) {
        return resolvedPromise();
      }
      this.isTransitioning_ = true;
      var element = video.element;
      var inlineRect = opt_inlineRect || video.element.getBoundingClientRect();
      var height = inlineRect.height, width = inlineRect.width;
      this.placedAt_ = {
        x: x,
        y: y,
        scale: scale
      };
      var transitionTiming = step > 0 ? "ease-out" : "ease-in";
      var internalElement = getInternalVideoElementFor(element);
      var shadowLayer = this.getShadowLayer_();
      var _this$getControls_ = this.getControls_(), overlay = _this$getControls_.overlay;
      var placeholderBackground = this.getPlaceholderBackground_();
      var placeholderIcon = this.getPlaceholderRefs_()["icon"];
      var hasRelativePlacement = opt_relativeX !== void 0;
      var isPlacementRtl = opt_relativeX == DirectionX.LEFT;
      if (hasRelativePlacement) {
        applyBreakpointClassname(placeholderIcon, width, PLACEHOLDER_ICON_BREAKPOINTS);
        placeholderIcon.classList.toggle("amp-rtl", isPlacementRtl);
        this.getControls_().container.classList.toggle("amp-rtl", isPlacementRtl);
      }
      var boxNeedsSizing = this.boxNeedsSizing_(width, height);
      var maybeSetSizing = function maybeSetSizing2(element2) {
        if (!boxNeedsSizing) {
          return;
        }
        setImportantStyles(element2, {
          "width": px(width),
          "height": px(height),
          "min-width": px(width),
          "min-height": px(height)
        });
      };
      var setOpacity = function setOpacity2(element2) {
        return setImportantStyles(element2, {
          "opacity": step
        });
      };
      var setTransitionTiming = function setTransitionTiming2(element2) {
        return setImportantStyles(element2, {
          "transition-duration": transitionDurationMs + "ms",
          "transition-timing-function": transitionTiming
        });
      };
      var isSmallPlaceholderIcon = placeholderIcon.classList.contains("amp-small");
      var placeholderIconWidth = isSmallPlaceholderIcon ? PLACEHOLDER_ICON_SMALL_WIDTH : PLACEHOLDER_ICON_LARGE_WIDTH;
      var placeholderIconMargin = isSmallPlaceholderIcon ? PLACEHOLDER_ICON_SMALL_MARGIN : PLACEHOLDER_ICON_LARGE_MARGIN;
      var iconPlacementFn = isPlacementRtl ? calculateLeftJustifiedX : calculateRightJustifiedX;
      var placeholderIconX = iconPlacementFn(width, placeholderIconWidth, placeholderIconMargin, step);
      video.mutateElement(function() {
        internalElement.classList.add(BASE_CLASS_NAME);
        setImportantStyles(element, {
          "overflow": "visible"
        });
        toggle(shadowLayer, true);
        toggle(overlay, true);
        applyFillContent(_this11.getPlaceholderRefs_()["poster"]);
        applyFillContent(placeholderBackground);
        _this11.setPosterImage_(video);
        element.appendChild(placeholderBackground);
        _this11.raf_(function() {
          video.mutateElement(function() {
            setOpacity(placeholderBackground);
            setTransitionTiming(placeholderBackground);
            setTransitionTiming(placeholderIcon);
            if (hasRelativePlacement) {
              var _y = 0;
              var _scale = 1;
              setImportantStyles(placeholderIcon, {
                "transform": transform(placeholderIconX, _y, _scale)
              });
            }
          });
        });
        var offsetLeft = 0;
        var offsetTop = 0;
        var bodyLevelOffsetLeft = 0;
        var bodyLevelOffsetTop = 0;
        if (position === "absolute") {
          offsetLeft = inlineRect.left;
          offsetTop = inlineRect.top;
          bodyLevelOffsetLeft = element.offsetLeft;
          bodyLevelOffsetTop = element.offsetTop;
        }
        _this11.getElementsOnDockArea_(video).forEach(function(element2) {
          var bodyLevelOffsetFactor = Number(element2 !== internalElement);
          var left = bodyLevelOffsetFactor * bodyLevelOffsetLeft - offsetLeft;
          var top = bodyLevelOffsetFactor * bodyLevelOffsetTop - offsetTop;
          setImportantStyles(element2, {
            "position": position,
            "left": px(left),
            "top": px(top),
            "transform": transform(x, y, scale)
          });
          setTransitionTiming(element2);
          maybeSetSizing(element2);
        });
        setOpacity(shadowLayer);
        _this11.getControls_().positionOnVsync(scale, x, y, width, height);
      });
      return this.getTimer_().promise(transitionDurationMs).then(function() {
        _this11.isTransitioning_ = false;
      });
    };
    _proto.getTimer_ = function getTimer_() {
      return Services.timerFor(this.ampdoc_.win);
    };
    _proto.getElementsOnDockArea_ = function getElementsOnDockArea_(video) {
      return [getInternalVideoElementFor(video.element), this.getShadowLayer_(), this.getControls_().overlay];
    };
    _proto.setPosterImage_ = function setPosterImage_(video) {
      var placeholderPoster = this.getPlaceholderRefs_()["poster"];
      var posterSrc = getPosterImageSrc(video.element);
      if (!posterSrc) {
        toggle(placeholderPoster, false);
        return;
      }
      toggle(placeholderPoster, true);
      setStyles(placeholderPoster, {
        "background-image": "url(" + posterSrc + ")"
      });
    };
    _proto.boxNeedsSizing_ = function boxNeedsSizing_(width, height) {
      var needsSizing = !this.sizedAt_ || this.sizedAt_.width != width || this.sizedAt_.height != height;
      if (needsSizing) {
        this.sizedAt_ = {
          width: width,
          height: height
        };
      }
      return needsSizing;
    };
    _proto.isCurrentlyDocked_ = function isCurrentlyDocked_(video) {
      return !!this.currentlyDocked_ && this.currentlyDocked_.video == video;
    };
    _proto.setCurrentlyDocked_ = function setCurrentlyDocked_(video, target, step) {
      var previouslyDocked = this.currentlyDocked_;
      var viewportRect = _extends({}, this.viewportRect_);
      this.currentlyDocked_ = {
        video: video,
        target: target,
        step: step,
        viewportRect: viewportRect
      };
      if (previouslyDocked && previouslyDocked.video == video && layoutRectEquals(target.rect, previouslyDocked.target.rect)) {
        return;
      }
      this.getControls_().setVideo(video, target.rect);
      this.trigger_(Actions.DOCK, target);
    };
    _proto.offsetX_ = function offsetX_(offsetX) {
      var video = this.getDockedVideo_();
      var target = this.currentlyDocked_.target;
      var step = 1;
      var transitionDurationMs = 0;
      var _this$getDims_2 = this.getDims_(video, target, step), scale = _this$getDims_2.scale, x = _this$getDims_2.x, y = _this$getDims_2.y;
      var centerX = this.getCenterX_(offsetX);
      var directionX = this.calculateDirectionX_(centerX);
      this.dragVelocityX_ = offsetX - this.previousDragOffsetX_;
      this.previousDragOffsetX_ = offsetX;
      this.placeAt_(video, x + offsetX, y, scale, step, transitionDurationMs, directionX);
    };
    _proto.isVisible_ = function isVisible_(element, minRatio, opt_inlineRect) {
      if (minRatio === void 0) {
        minRatio = 1;
      }
      var inlineRect = opt_inlineRect || this.getScrollAdjustedRect_(element);
      if (!isSizedRect(inlineRect)) {
        return 0;
      }
      var intersectionHeight = Math.min(inlineRect.bottom, this.viewportRect_.bottom) - Math.max(inlineRect.top, this.viewportRect_.top);
      var intersectionRatio = Math.max(0, intersectionHeight / inlineRect.height);
      return intersectionRatio > minRatio - FLOAT_TOLERANCE;
    };
    _proto.drag_ = function drag_(e) {
      var _this12 = this;
      if (!this.currentlyDocked_) {
        return;
      }
      if (this.isDockedToType_(DockTargetType.SLOT)) {
        return;
      }
      if (this.isTransitioning_) {
        return;
      }
      this.dragOffsetX_ = 0;
      var _pointerCoords = pointerCoords(e), x = _pointerCoords.x;
      var directionX = this.currentlyDocked_.target.directionX;
      var onDragMove = throttleByAnimationFrame(this.ampdoc_.win, function(e2) {
        return _this12.onDragMove_(e2, directionX, x);
      });
      var onDragEnd = function onDragEnd2() {
        return _this12.onDragEnd_(unlisteners);
      };
      var root = this.ampdoc_.getRootNode();
      var unlisteners = [this.disableScroll_(), this.disableUserSelect_(), this.workaroundWebkitDragAndScrollIssue_(), listen(root, "touchmove", onDragMove), listen(root, "mousemove", onDragMove), listenOnce(root, "touchend", onDragEnd), listenOnce(root, "mouseup", onDragEnd)];
    };
    _proto.isDockedToType_ = function isDockedToType_(type) {
      return !!this.currentlyDocked_ && this.currentlyDocked_.target.type === type;
    };
    _proto.disableUserSelect_ = function disableUserSelect_() {
      var docEl = dev().assertElement(this.getDoc_().documentElement);
      var disabledClassName = "i-amphtml-select-disabled";
      docEl.classList.add(disabledClassName);
      return function() {
        return docEl.classList.remove(disabledClassName);
      };
    };
    _proto.disableScroll_ = function disableScroll_() {
      this.viewport_.disableScroll();
      return this.viewport_.resetScroll.bind(this.viewport_);
    };
    _proto.onDragMove_ = function onDragMove_(e, directionX, startX) {
      if (this.currentlyDocked_.target.directionX !== directionX) {
        return;
      }
      var offsetX = pointerCoords(e).x - startX;
      this.dragOffsetX_ = offsetX;
      if (offsetX <= 10) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      this.getControls_().hide(false, true);
      this.isDragging_ = true;
      this.getControls_().disable();
      this.offsetX_(offsetX);
    };
    _proto.workaroundWebkitDragAndScrollIssue_ = function workaroundWebkitDragAndScrollIssue_() {
      var win = this.ampdoc_.win;
      if (!Services.platformFor(win).isIos()) {
        return function() {
        };
      }
      var handler = function handler2(e) {
        return e.preventDefault();
      };
      win.addEventListener("touchmove", handler, {
        passive: false
      });
      return function() {
        return win.removeEventListener("touchmove", handler);
      };
    };
    _proto.onDragEnd_ = function onDragEnd_(unlisteners) {
      unlisteners.forEach(function(unlisten) {
        return unlisten.call();
      });
      this.isDragging_ = false;
      this.getControls_().enable();
      if (Math.abs(this.dragVelocityX_) < 40) {
        this.snap_(this.dragOffsetX_);
      } else {
        this.flickToDismiss_(this.previousDragOffsetX_, Math.sign(this.dragVelocityX_));
      }
      this.dragVelocityX_ = 0;
      this.previousDragOffsetX_ = 0;
      this.dragOffsetX_ = 0;
    };
    _proto.flickToDismiss_ = function flickToDismiss_(offsetX, direction) {
      var _this13 = this;
      devAssert2(Math.abs(direction) == 1);
      var video = this.getDockedVideo_();
      video.pause();
      if (this.isVisible_(video, 0.2)) {
        this.bounceToDismiss_(video, offsetX, direction);
        return;
      }
      var step = 1;
      var _devAssert = devAssert2(this.currentlyDocked_), target = _devAssert.target;
      var _target$rect = target.rect, width = _target$rect.width, x = _target$rect.x, y = _target$rect.y;
      var _this$getDims_3 = this.getDims_(video, target, step), scale = _this$getDims_3.scale;
      var currentX = x + offsetX;
      var nextX = direction == 1 ? this.viewportRect_.right : this.viewportRect_.left - width;
      var transitionDurationMs = this.calculateDismissalTransitionDurationMs_(nextX - currentX);
      this.reconcileUndocked_();
      video.showControls();
      this.placeAt_(video, nextX, y, scale, 0, transitionDurationMs).then(function() {
        _this13.resetOnUndock_(video);
      });
    };
    _proto.bounceToDismiss_ = function bounceToDismiss_(video, offsetX, direction) {
      var _this14 = this;
      devAssert2(Math.abs(direction) == 1);
      var step = 1;
      var _devAssert2 = devAssert2(this.currentlyDocked_), target = _devAssert2.target;
      var _target$rect2 = target.rect, width = _target$rect2.width, x = _target$rect2.x, y = _target$rect2.y;
      var _this$getDims_4 = this.getDims_(video, target, step), scale = _this$getDims_4.scale;
      var outerWidth = this.viewportRect_.width;
      var currentX = x + offsetX;
      var nextX = direction == 1 ? calculateRightJustifiedX(outerWidth, width, 0, step) : calculateLeftJustifiedX(outerWidth, width, 0, step);
      var transitionDurationMs = this.calculateDismissalTransitionDurationMs_(nextX - currentX);
      this.reconcileUndocked_();
      this.placeAt_(video, nextX, y, scale, 0, transitionDurationMs).then(function() {
        _this14.undock_(video, true);
        video.showControls();
      });
    };
    _proto.calculateDismissalTransitionDurationMs_ = function calculateDismissalTransitionDurationMs_(deltaX) {
      return Math.min(300, Math.abs(deltaX) / 2);
    };
    _proto.getCenterX_ = function getCenterX_(offsetX) {
      var _this$currentlyDocked2 = this.currentlyDocked_, step = _this$currentlyDocked2.step, target = _this$currentlyDocked2.target;
      var video = this.getDockedVideo_();
      var _video$element$getBou = video.element.getBoundingClientRect(), width = _video$element$getBou.width;
      var _this$getDims_5 = this.getDims_(video, target, step), scale = _this$getDims_5.scale, x = _this$getDims_5.x;
      return x + offsetX + width * scale / 2;
    };
    _proto.snap_ = function snap_(offsetX) {
      var video = this.getDockedVideo_();
      var step = this.currentlyDocked_.step;
      var directionX = this.calculateDirectionX_(offsetX);
      this.cornerDirectionX_ = directionX;
      var target = this.getUsableTarget_(video);
      this.currentlyDocked_.target = target;
      var _this$getDims_6 = this.getDims_(video, target, step), scale = _this$getDims_6.scale, x = _this$getDims_6.x, y = _this$getDims_6.y;
      this.placeAt_(video, x, y, scale, step, 200, directionX);
    };
    _proto.calculateDirectionX_ = function calculateDirectionX_(offsetX) {
      return this.getCenterX_(offsetX) >= this.viewportRect_.width / 2 ? DirectionX.RIGHT : DirectionX.LEFT;
    };
    _proto.getDims_ = function getDims_(video, target, step, opt_inlineRect) {
      return interpolatedBoxesTransform(opt_inlineRect || this.getScrollAdjustedRect_(video), target.rect, step);
    };
    _proto.undock_ = function undock_(video, opt_reconciled, opt_inlineRect) {
      var _this15 = this;
      var isMostlyInView = this.isVisible_(video, REVERT_TO_INLINE_RATIO, opt_inlineRect);
      if (!isMostlyInView) {
        video.pause();
        video.showControls();
      }
      if (!opt_reconciled) {
        this.reconcileUndocked_();
      }
      var step = 0;
      var _devAssert3 = devAssert2(this.currentlyDocked_), target = _devAssert3.target;
      var _this$getDims_7 = this.getDims_(video, target, step), relativeX = _this$getDims_7.relativeX, scale = _this$getDims_7.scale, x = _this$getDims_7.x, y = _this$getDims_7.y;
      var transitionDurationMs = isMostlyInView ? this.calculateTransitionDuration_(step) : 0;
      return this.placeAt_(video, x, y, scale, step, transitionDurationMs, relativeX, opt_inlineRect, "absolute").then(function() {
        video.showControls();
        _this15.resetOnUndock_(video);
      });
    };
    _proto.reconcileUndocked_ = function reconcileUndocked_() {
      this.getControls_().disable();
      this.getControls_().hide(false, true);
      this.trigger_(Actions.UNDOCK);
    };
    _proto.resetOnUndock_ = function resetOnUndock_(video) {
      var _this16 = this;
      var element = video.element;
      var internalElement = getInternalVideoElementFor(element);
      return video.mutateElement(function() {
        internalElement.classList.remove(BASE_CLASS_NAME);
        var shadowLayer = _this16.getShadowLayer_();
        var placeholderIcon = _this16.getPlaceholderRefs_()["icon"];
        var placeholderBackground = _this16.getPlaceholderBackground_();
        toggle(shadowLayer, false);
        _this16.getControls_().reset();
        [internalElement, shadowLayer, placeholderBackground, placeholderIcon].forEach(function(el) {
          resetStyles(el, ["transform", "transition", "min-width", "min-height", "width", "height", "opacity", "overflow", "position", "left", "top"]);
        });
        _this16.placedAt_ = null;
        _this16.sizedAt_ = null;
        _this16.currentlyDocked_ = null;
      });
    };
    _proto.removePosterForAndroidBug_ = function removePosterForAndroidBug_(parent) {
      var el = parent.querySelector(".i-amphtml-android-poster-bug");
      if (!el) {
        return;
      }
      removeElement(el);
    };
    _proto.scrollBack_ = function scrollBack_() {
      if (!this.currentlyDocked_) {
        return;
      }
      this.viewport_.animateScrollIntoView(this.getDockedVideo_().element, "center");
    };
    _proto.getUsableTarget_ = function getUsableTarget_(video, opt_inlineRect) {
      var slot = this.getSlot_();
      var inlineRect = opt_inlineRect || video.element.getBoundingClientRect();
      if (slot) {
        return {
          type: DockTargetType.SLOT,
          rect: letterboxRect(inlineRect, slot.getBoundingClientRect()),
          slot: slot
        };
      }
      if (this.cornerDirectionX_ === null) {
        this.cornerDirectionX_ = isRTL(this.getDoc_()) ? DirectionX.LEFT : DirectionX.RIGHT;
      }
      return {
        type: DockTargetType.CORNER,
        rect: topCornerRect(inlineRect, this.viewportRect_, this.cornerDirectionX_, CORNER_WIDTH_RATIO, CORNER_WIDTH_MIN, CORNER_MARGIN_RATIO, CORNER_MARGIN_MAX),
        directionX: this.cornerDirectionX_
      };
    };
    _proto.getSlot_ = function getSlot_() {
      var slot = this.findSlotOnce_();
      if (slot && isVisibleBySize(slot)) {
        return slot;
      }
      return null;
    };
    return VideoDocking2;
  }();
  AMP.registerServiceForDoc("video-docking", VideoDocking);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-video-docking-0.1.max.js.map
