(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-analytics",ev:"0.1",l:true,f:(function(AMP,_){
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
  function deepMerge(target, source, depth) {
    if (depth === void 0) {
      depth = 10;
    }
    var seen = [];
    var queue = [];
    queue.push({
      t: target,
      s: source,
      d: 0
    });
    while (queue.length > 0) {
      var _queue$shift = queue.shift(), d = _queue$shift.d, s = _queue$shift.s, t = _queue$shift.t;
      if (seen.includes(s)) {
        throw new Error("Source object has a circular reference.");
      }
      seen.push(s);
      if (t === s) {
        continue;
      }
      if (d > depth) {
        Object.assign(t, s);
        continue;
      }
      for (var _i = 0, _Object$keys = Object.keys(s); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        var newValue = s[key];
        if (hasOwn(t, key)) {
          var oldValue = t[key];
          if (isObject(newValue) && isObject(oldValue)) {
            queue.push({
              t: oldValue,
              s: newValue,
              d: d + 1
            });
            continue;
          }
        }
        t[key] = newValue;
      }
    }
    return target;
  }

  // src/core/types/array.js
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
  function tryParseJson(json, opt_onFailed) {
    try {
      return parseJson(json);
    } catch (e) {
      opt_onFailed == null ? void 0 : opt_onFailed(e);
      return null;
    }
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
  function enumValues(enumObj) {
    if (isProd()) {
      return Object.values(enumObj);
    }
    return Object.freeze(Object.values(enumObj));
  }

  // src/core/types/string/index.js
  function endsWith(string, suffix) {
    var index = string.length - suffix.length;
    return index >= 0 && string.indexOf(suffix, index) == index;
  }
  function expandTemplate(template, getter, opt_maxIterations) {
    var maxIterations = opt_maxIterations || 1;
    var _loop = function _loop2(i2) {
      var matches2 = 0;
      template = template.replace(/\${([^}]*)}/g, function(_a, b) {
        matches2++;
        return getter(b);
      });
      if (!matches2) {
        return "break";
      }
    };
    for (var i = 0; i < maxIterations; i++) {
      var _ret = _loop(i);
      if (_ret === "break")
        break;
    }
    return template;
  }
  function asyncStringReplace(str, regex, replacer) {
    if (isString(replacer)) {
      return Promise.resolve(str.replace(regex, replacer));
    }
    var stringBuilder = [];
    var lastIndex = 0;
    str.replace(regex, function(match) {
      var matchIndex = arguments[arguments.length - 2];
      stringBuilder.push(str.slice(lastIndex, matchIndex));
      lastIndex = matchIndex + match.length;
      var replacementPromise = replacer.apply(null, arguments);
      stringBuilder.push(replacementPromise);
    });
    stringBuilder.push(str.slice(lastIndex));
    return Promise.all(stringBuilder).then(function(resolved3) {
      return resolved3.join("");
    });
  }
  function isString(s) {
    return typeof s == "string";
  }

  // src/core/types/index.js
  function isElement(value) {
    return (value == null ? void 0 : value.nodeType) == 1;
  }
  function isFiniteNumber(value) {
    return typeof value === "number" && isFinite(value);
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
  function assertString(assertFn, shouldBeString, opt_message) {
    return assertType_(assertFn, shouldBeString, isString(shouldBeString), "String expected", opt_message);
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
  function devAssertString(shouldBeString, opt_message) {
    if (isMinified()) {
      return shouldBeString;
    }
    devAssertDceCheck();
    return assertString(devAssert, shouldBeString, opt_message);
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
  function lastChildElement(parent, callback) {
    for (var child = parent.lastElementChild; child; child = child.previousElementSibling) {
      if (callback(child)) {
        return child;
      }
    }
    return null;
  }
  function childElementsByTag(parent, tagName) {
    assertIsName(tagName);
    return scopedQuerySelectorAll(parent, "> " + tagName);
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
  function isJsonScriptTag(element) {
    var _element$getAttribute;
    return element.tagName == "SCRIPT" && ((_element$getAttribute = element.getAttribute("type")) == null ? void 0 : _element$getAttribute.toUpperCase()) == "APPLICATION/JSON";
  }
  function isIframed(win) {
    return win.parent && win.parent != win;
  }
  function getChildJsonConfig(element) {
    var scripts = childElementsByTag(element, "script");
    var length = scripts.length;
    if (length !== 1) {
      throw new Error("Found " + length + " <script> children. Expected 1.");
    }
    var script = scripts[0];
    if (!isJsonScriptTag(script)) {
      throw new Error('<script> child must have type="application/json"');
    }
    try {
      return parseJson(script.textContent);
    } catch (_unused) {
      throw new Error("Failed to parse <script> contents. Is it valid JSON?");
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
  function getHashParams(opt_win) {
    var _ref = opt_win || self, location = _ref.location;
    return parseQueryString(location["originalHash"] || location.hash);
  }

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

  // src/service/extension-script.js
  function calculateScriptBaseUrl(location, opt_isLocalDev) {
    if (opt_isLocalDev) {
      var prefix = location.protocol + "//" + location.host;
      if (location.protocol == "about:" || location.protocol == "blob:" || location.protocol == "data:") {
        prefix = "";
      }
      return prefix + "/dist";
    }
    return urls.cdn;
  }
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

  // src/core/types/function/index.js
  function debounce(win, callback, minInterval) {
    var locker = 0;
    var timestamp = 0;
    var nextCallArgs = null;
    function fire(args) {
      nextCallArgs = null;
      callback.apply(null, args);
    }
    function waiter() {
      locker = 0;
      var remaining = minInterval - (win.Date.now() - timestamp);
      if (remaining > 0) {
        locker = win.setTimeout(waiter, remaining);
      } else {
        fire(nextCallArgs);
      }
    }
    return function() {
      timestamp = win.Date.now();
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      nextCallArgs = args;
      if (!locker) {
        locker = win.setTimeout(waiter, minInterval);
      }
    };
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
  var LOAD_FAILURE_PREFIX = "Failed to load:";
  var MEDIA_LOAD_FAILURE_SRC_PROPERTY = "__AMP_MEDIA_LOAD_FAILURE_SRC";
  function listen(element, eventType, listener, opt_evtListenerOpts) {
    return internalListenImplementation(element, eventType, listener, opt_evtListenerOpts);
  }
  function getData(event) {
    return event.data;
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
  function isLoaded(eleOrWindow) {
    return !!(eleOrWindow.complete || eleOrWindow.readyState == "complete" || isHTMLMediaElement(eleOrWindow) && eleOrWindow.readyState > 0 || eleOrWindow.document && eleOrWindow.document.readyState == "complete");
  }
  function loadPromise(eleOrWindow) {
    var unlistenLoad;
    var unlistenError;
    if (isLoaded(eleOrWindow)) {
      return Promise.resolve(eleOrWindow);
    }
    var isMediaElement = isHTMLMediaElement(eleOrWindow);
    if (isMediaElement && eleOrWindow[MEDIA_LOAD_FAILURE_SRC_PROPERTY] === eleOrWindow.currentSrc) {
      return Promise.reject(eleOrWindow);
    }
    var loadingPromise = new Promise(function(resolve, reject) {
      if (isMediaElement) {
        unlistenLoad = listenOnce(eleOrWindow, "loadedmetadata", resolve, {
          capture: true
        });
      } else {
        unlistenLoad = listenOnce(eleOrWindow, "load", resolve);
      }
      if (!eleOrWindow.tagName) {
        return;
      }
      var errorTarget = eleOrWindow;
      if (isMediaElement && !eleOrWindow.hasAttribute("src")) {
        errorTarget = lastChildElement(eleOrWindow, function(child) {
          return child.tagName === "SOURCE";
        });
        if (!errorTarget) {
          return reject(new Error("Media has no source."));
        }
      }
      unlistenError = listenOnce(errorTarget, "error", reject);
    });
    return loadingPromise.then(function() {
      if (unlistenError) {
        unlistenError();
      }
      return eleOrWindow;
    }, function() {
      if (unlistenLoad) {
        unlistenLoad();
      }
      failedToLoad(eleOrWindow);
    });
  }
  function failedToLoad(eleOrWindow) {
    if (isHTMLMediaElement(eleOrWindow)) {
      eleOrWindow[MEDIA_LOAD_FAILURE_SRC_PROPERTY] = eleOrWindow.currentSrc || true;
    }
    var target = eleOrWindow;
    if (target && target.src) {
      target = target.src;
    }
    throw user().createError(LOAD_FAILURE_PREFIX, target);
  }
  function isHTMLMediaElement(eleOrWindow) {
    return eleOrWindow.tagName === "AUDIO" || eleOrWindow.tagName === "VIDEO";
  }

  // extensions/amp-analytics/0.1/activity-impl.js
  var DEFAULT_ENGAGED_SECONDS = 5;
  var ActivityEventType = {
    ACTIVE: "active",
    INACTIVE: "inactive"
  };
  function findEngagedTimeBetween(activityEvent, time) {
    var engagementBonus = 0;
    if (activityEvent.type === ActivityEventType.ACTIVE) {
      engagementBonus = DEFAULT_ENGAGED_SECONDS;
    }
    return Math.min(time - activityEvent.time, engagementBonus);
  }
  var ActivityHistory = /* @__PURE__ */ function() {
    function ActivityHistory2() {
      this.totalEngagedTime_ = 0;
      this.prevActivityEvent_ = void 0;
    }
    var _proto = ActivityHistory2.prototype;
    _proto.push = function push(activityEvent) {
      if (this.prevActivityEvent_ && this.prevActivityEvent_.time < activityEvent.time) {
        this.totalEngagedTime_ += findEngagedTimeBetween(this.prevActivityEvent_, activityEvent.time);
      }
      this.prevActivityEvent_ = activityEvent;
    };
    _proto.getTotalEngagedTime = function getTotalEngagedTime(time) {
      var totalEngagedTime = 0;
      if (this.prevActivityEvent_ !== void 0) {
        totalEngagedTime = this.totalEngagedTime_ + findEngagedTimeBetween(this.prevActivityEvent_, time);
      }
      return totalEngagedTime;
    };
    return ActivityHistory2;
  }();
  var ACTIVE_EVENT_TYPES = ["mousedown", "mouseup", "mousemove", "keydown", "keyup"];
  var INACTIVE_EVENT_TYPES = ["mouseleave"];
  var Activity = /* @__PURE__ */ function() {
    function Activity2(ampdoc2) {
      this.ampdoc = ampdoc2;
      this.boundStopIgnore_ = this.stopIgnore_.bind(this);
      this.boundHandleActivity_ = this.handleActivity_.bind(this);
      this.boundHandleInactive_ = this.handleInactive_.bind(this);
      this.boundHandleVisibilityChange_ = this.handleVisibilityChange_.bind(this);
      this.totalEngagedTimeByTrigger_ = {};
      this.unlistenFuncs_ = [];
      this.ignoreActivity_ = false;
      this.ignoreInactive_ = false;
      this.activityHistory_ = new ActivityHistory();
      this.viewport_ = Services.viewportForDoc(this.ampdoc);
      this.ampdoc.whenFirstVisible().then(this.start_.bind(this));
    }
    var _proto2 = Activity2.prototype;
    _proto2.start_ = function start_() {
      this.startTime_ = Date.now();
      this.handleActivity_();
      this.setUpActivityListeners_();
    };
    _proto2.getTimeSinceStart_ = function getTimeSinceStart_() {
      var timeSinceStart = Date.now() - this.startTime_;
      return timeSinceStart > 0 ? timeSinceStart : 0;
    };
    _proto2.stopIgnore_ = function stopIgnore_() {
      this.ignoreActivity_ = false;
      this.ignoreInactive_ = false;
    };
    _proto2.setUpActivityListeners_ = function setUpActivityListeners_() {
      this.setUpListenersFromArray_(this.ampdoc.getRootNode(), ACTIVE_EVENT_TYPES, this.boundHandleActivity_);
      this.setUpListenersFromArray_(this.ampdoc.getRootNode(), INACTIVE_EVENT_TYPES, this.boundHandleInactive_);
      this.unlistenFuncs_.push(this.ampdoc.onVisibilityChanged(this.boundHandleVisibilityChange_));
      this.viewport_.onScroll(this.boundHandleActivity_);
    };
    _proto2.setUpListenersFromArray_ = function setUpListenersFromArray_(target, events, listener) {
      for (var i = 0; i < events.length; i++) {
        this.unlistenFuncs_.push(listen(target, events[i], listener));
      }
    };
    _proto2.handleActivity_ = function handleActivity_() {
      if (this.ignoreActivity_) {
        return;
      }
      this.ignoreActivity_ = true;
      this.ignoreInactive_ = false;
      this.handleActivityEvent_(ActivityEventType.ACTIVE);
    };
    _proto2.handleInactive_ = function handleInactive_() {
      if (this.ignoreInactive_) {
        return;
      }
      this.ignoreInactive_ = true;
      this.ignoreActivity_ = false;
      this.handleActivityEvent_(ActivityEventType.INACTIVE);
    };
    _proto2.handleActivityEvent_ = function handleActivityEvent_(type) {
      var timeSinceStart = this.getTimeSinceStart_();
      var secondKey = Math.floor(timeSinceStart / 1e3);
      var timeToWait = 1e3 - timeSinceStart % 1e3;
      setTimeout(this.boundStopIgnore_, timeToWait);
      this.activityHistory_.push({
        type: type,
        time: secondKey
      });
    };
    _proto2.handleVisibilityChange_ = function handleVisibilityChange_() {
      if (this.ampdoc.isVisible()) {
        this.handleActivity_();
      } else {
        this.handleInactive_();
      }
    };
    _proto2.unlisten_ = function unlisten_() {
      for (var i = 0; i < this.unlistenFuncs_.length; i++) {
        var unlistenFunc = this.unlistenFuncs_[i];
        if (typeof unlistenFunc === "function") {
          unlistenFunc();
        }
      }
      this.unlistenFuncs_ = [];
    };
    _proto2.cleanup_ = function cleanup_() {
      this.unlisten_();
    };
    _proto2.getTotalEngagedTime = function getTotalEngagedTime() {
      var secondsSinceStart = Math.floor(this.getTimeSinceStart_() / 1e3);
      return this.activityHistory_.getTotalEngagedTime(secondsSinceStart);
    };
    _proto2.getIncrementalEngagedTime = function getIncrementalEngagedTime(name, reset) {
      if (reset === void 0) {
        reset = true;
      }
      if (!hasOwn(this.totalEngagedTimeByTrigger_, name)) {
        if (reset) {
          this.totalEngagedTimeByTrigger_[name] = this.getTotalEngagedTime();
        }
        return this.getTotalEngagedTime();
      }
      var currentIncrementalEngagedTime = this.totalEngagedTimeByTrigger_[name];
      if (reset === false) {
        return this.getTotalEngagedTime() - currentIncrementalEngagedTime;
      }
      this.totalEngagedTimeByTrigger_[name] = this.getTotalEngagedTime();
      return this.totalEngagedTimeByTrigger_[name] - currentIncrementalEngagedTime;
    };
    return Activity2;
  }();

  // extensions/amp-analytics/0.1/default-config.js
  var defaultConfig = JSON.parse('{"transport":{"beacon":true,"xhrpost":true,"image":true},"vars":{"accessReaderId":"ACCESS_READER_ID","ampGeo":"AMP_GEO","ampState":"AMP_STATE","ampVersion":"AMP_VERSION","ampdocHost":"AMPDOC_HOST","ampdocHostname":"AMPDOC_HOSTNAME","ampdocMeta":"AMPDOC_META","ampdocUrl":"AMPDOC_URL","authdata":"AUTHDATA","availableScreenHeight":"AVAILABLE_SCREEN_HEIGHT","availableScreenWidth":"AVAILABLE_SCREEN_WIDTH","backgroundState":"BACKGROUND_STATE","browserLanguage":"BROWSER_LANGUAGE","canonicalHost":"CANONICAL_HOST","canonicalHostname":"CANONICAL_HOSTNAME","canonicalPath":"CANONICAL_PATH","canonicalUrl":"CANONICAL_URL","clientId":"CLIENT_ID","consentState":"CONSENT_STATE","consentString":"CONSENT_STRING","contentLoadTime":"CONTENT_LOAD_TIME","cookie":"COOKIE","counter":"COUNTER","cumulativeLayoutShift":"CUMULATIVE_LAYOUT_SHIFT","documentCharset":"DOCUMENT_CHARSET","documentReferrer":"DOCUMENT_REFERRER","domInteractiveTime":"DOM_INTERACTIVE_TIME","domainLookupTime":"DOMAIN_LOOKUP_TIME","experimentBranches":"EXPERIMENT_BRANCHES","externalReferrer":"EXTERNAL_REFERRER","firstContentfulPaint":"FIRST_CONTENTFUL_PAINT","firstInputDelay":"FIRST_INPUT_DELAY","firstViewportReady":"FIRST_VIEWPORT_READY","fragmentParam":"FRAGMENT_PARAM","htmlAttr":"HTML_ATTR","incrementalEngagedTime":"INCREMENTAL_ENGAGED_TIME","largestContentfulPaint":"LARGEST_CONTENTFUL_PAINT","makeBodyVisible":"MAKE_BODY_VISIBLE","navRedirectCount":"NAV_REDIRECT_COUNT","navTiming":"NAV_TIMING","navType":"NAV_TYPE","pageDownloadTime":"PAGE_DOWNLOAD_TIME","pageLoadTime":"PAGE_LOAD_TIME","pageViewId":"PAGE_VIEW_ID","pageViewId64":"PAGE_VIEW_ID_64","queryParam":"QUERY_PARAM","random":"RANDOM","redirectTime":"REDIRECT_TIME","resourceTiming":"RESOURCE_TIMING","screenColorDepth":"SCREEN_COLOR_DEPTH","screenHeight":"SCREEN_HEIGHT","screenWidth":"SCREEN_WIDTH","scrollHeight":"SCROLL_HEIGHT","scrollLeft":"SCROLL_LEFT","scrollTop":"SCROLL_TOP","scrollWidth":"SCROLL_WIDTH","sessionId":"SESSION_ID","sessionCount":"SESSION_COUNT","sessionEngaged":"SESSION_ENGAGED","sessionEventTimestamp":"SESSION_EVENT_TIMESTAMP","sessionTimestamp":"SESSION_TIMESTAMP","serverResponseTime":"SERVER_RESPONSE_TIME","sourceHost":"SOURCE_HOST","sourceHostname":"SOURCE_HOSTNAME","sourcePath":"SOURCE_PATH","sourceUrl":"SOURCE_URL","tcpConnectTime":"TCP_CONNECT_TIME","timestamp":"TIMESTAMP","timezone":"TIMEZONE","timezoneCode":"TIMEZONE_CODE","title":"TITLE","totalEngagedTime":"TOTAL_ENGAGED_TIME","uach":"UACH","userAgent":"USER_AGENT","viewer":"VIEWER","viewportHeight":"VIEWPORT_HEIGHT","viewportWidth":"VIEWPORT_WIDTH"}}');
  var DEFAULT_CONFIG = defaultConfig;

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
  function addParamsToUrl(url, params) {
    return appendEncodedParamStringToUrl(url, serializeQueryString(params));
  }
  function addMissingParamsToUrl(url, params) {
    var location = parseUrlDeprecated(url);
    var existingParams = parseQueryString(location.search);
    var paramsToAdd = dict({});
    var keys = Object.keys(params);
    for (var i = 0; i < keys.length; i++) {
      if (!hasOwn(existingParams, keys[i])) {
        paramsToAdd[keys[i]] = params[keys[i]];
      }
    }
    return addParamsToUrl(url, paramsToAdd);
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
    userAssert(urlString != null, "%s %s must be available", elementContext, sourceName);
    userAssert(isSecureUrlDeprecated(urlString) || /^\/\//.test(urlString), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', elementContext, sourceName, urlString);
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
    userAssert(SERVING_TYPE_PREFIX.has(prefix), "Unknown path prefix in url %s", url.href);
    var domainOrHttpsSignal = path[2];
    var origin = domainOrHttpsSignal == "s" ? "https://" + decodeURIComponent(path[3]) : "http://" + decodeURIComponent(domainOrHttpsSignal);
    userAssert(origin.indexOf(".") > 0, "Expected a . in origin %s", origin);
    path.splice(1, domainOrHttpsSignal == "s" ? 3 : 2);
    return origin + path.join("/") + removeAmpJsParamsFromSearch(url.search) + (url.hash || "");
  }
  function getSourceOrigin(url) {
    return parseUrlDeprecated(getSourceUrl(url)).origin;
  }
  function checkCorsUrl(url) {
    var parsedUrl = parseUrlDeprecated(url);
    var query = parseQueryString(parsedUrl.search);
    userAssert(!(SOURCE_ORIGIN_PARAM in query), "Source origin is not allowed in %s", url);
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
  function isCanary(win) {
    var _win$AMP_CONFIG;
    return !!((_win$AMP_CONFIG = win.AMP_CONFIG) != null && _win$AMP_CONFIG.canary);
  }
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
  function getExperimentBranch(win, experimentName) {
    return win.__AMP_EXPERIMENT_BRANCHES ? win.__AMP_EXPERIMENT_BRANCHES[experimentName] : null;
  }
  function getActiveExperimentBranches(win) {
    var topWin = getTopWindow(win);
    if (!topWin.__AMP_EXPERIMENT_BRANCHES) {
      topWin.__AMP_EXPERIMENT_BRANCHES = {};
    }
    return _extends({}, topWin.__AMP_EXPERIMENT_BRANCHES);
  }

  // src/core/constants/visibility-state.js
  var VisibilityState_Enum = {
    PRERENDER: "prerender",
    VISIBLE: "visible",
    HIDDEN: "hidden",
    PAUSED: "paused",
    INACTIVE: "inactive"
  };

  // src/core/dom/style.js
  var propertyNameCache;
  var vendorPrefixes = ["Webkit", "webkit", "Moz", "moz", "ms", "O", "o"];
  var EMPTY_CSS_DECLARATION = {
    "getPropertyPriority": function getPropertyPriority() {
      return "";
    },
    "getPropertyValue": function getPropertyValue() {
      return "";
    }
  };
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
  function computedStyle(win, el) {
    var style = win.getComputedStyle(el);
    return style || EMPTY_CSS_DECLARATION;
  }
  function isVar(property) {
    return property.startsWith("--");
  }

  // src/core/document/visibility.js
  function getDocumentVisibilityState(doc) {
    var visibilityStateProp = getVendorJsPropertyName(doc, "visibilityState", true);
    if (doc[visibilityStateProp]) {
      return doc[visibilityStateProp];
    }
    var hiddenProp = getVendorJsPropertyName(doc, "hidden", true);
    if (doc[hiddenProp]) {
      return doc[hiddenProp] ? VisibilityState_Enum.HIDDEN : VisibilityState_Enum.VISIBLE;
    }
    return VisibilityState_Enum.VISIBLE;
  }
  function isDocumentHidden(doc) {
    return getDocumentVisibilityState(doc) != VisibilityState_Enum.VISIBLE;
  }

  // extensions/amp-analytics/0.1/session-manager.js
  var TAG2 = "amp-analytics/session-manager";
  var SESSION_STORAGE_KEY = "amp-session:";
  var SESSION_MAX_AGE_MILLIS = 30 * 60 * 1e3;
  var SESSION_VALUES = {
    SESSION_ID: "sessionId",
    CREATION_TIMESTAMP: "creationTimestamp",
    ACCESS_TIMESTAMP: "accessTimestamp",
    ENGAGED: "engaged",
    EVENT_TIMESTAMP: "eventTimestamp",
    COUNT: "count"
  };
  var SessionManager = /* @__PURE__ */ function() {
    function SessionManager2(ampdoc2) {
      this.storagePromise_ = Services.storageForDoc(ampdoc2);
      this.sessions_ = map();
      this.ampdoc_ = ampdoc2;
      this.win_ = ampdoc2.win;
      this.unlisteners_ = [];
      this.isFocused_ = null;
      this.isVisible_ = null;
      this.isOpen_ = true;
      this.init_();
    }
    var _proto = SessionManager2.prototype;
    _proto.init_ = function init_() {
      var _this = this;
      this.setInitialEngagedSignals_();
      this.unlisteners_.push(listen(this.win_, "focus", function() {
        _this.isFocused_ = true;
        _this.updateEngagedForSessions_();
      }), listen(this.win_, "blur", function() {
        _this.isFocused_ = false;
        _this.updateEngagedForSessions_();
      }), listen(this.win_, "pageshow", function() {
        _this.isOpen_ = true;
        _this.updateEngagedForSessions_();
      }), listen(this.win_, "pagehide", function() {
        _this.isOpen_ = false;
        _this.updateEngagedForSessions_();
      }), this.ampdoc_.onVisibilityChanged(function() {
        _this.isVisible_ = _this.ampdoc_.isVisible();
        _this.updateEngagedForSessions_();
      }));
    };
    _proto.setInitialEngagedSignals_ = function setInitialEngagedSignals_() {
      this.isFocused_ = this.win_.document.hasFocus();
      this.isVisible_ = !isDocumentHidden(this.win_.document);
    };
    _proto.updateEngagedForSessions_ = function updateEngagedForSessions_() {
      var _this2 = this;
      Object.keys(this.sessions_).forEach(function(key) {
        var session = _this2.sessions_[key];
        session[SESSION_VALUES.ENGAGED] = _this2.getEngagedValue_();
        _this2.setSession_(key, session);
      });
    };
    _proto.dispose = function dispose() {
      this.unlisteners_.forEach(function(unlisten) {
        unlisten();
      });
      this.unlisteners_.length = 0;
    };
    _proto.getSessionValue = function getSessionValue(type, value) {
      return this.get(type).then(function(session) {
        return session == null ? void 0 : session[value];
      });
    };
    _proto.updateEvent = function updateEvent(type) {
      return this.get(type, function(session) {
        session[SESSION_VALUES.EVENT_TIMESTAMP] = Date.now();
      });
    };
    _proto.get = function get(type, opt_processing) {
      if (!type) {
        user().error(TAG2, "Sessions can only be accessed with a vendor type.");
        return Promise.resolve(null);
      }
      if (hasOwn(this.sessions_, type) && !isSessionExpired(this.sessions_[type])) {
        this.sessions_[type] = this.updateSession_(this.sessions_[type]);
        opt_processing == null ? void 0 : opt_processing(this.sessions_[type]);
        this.setSession_(type, this.sessions_[type]);
        return Promise.resolve(this.sessions_[type]);
      }
      return this.getOrCreateSession_(type, opt_processing);
    };
    _proto.getOrCreateSession_ = function getOrCreateSession_(type, opt_processing) {
      var _this3 = this;
      return this.storagePromise_.then(function(storage) {
        var storageKey = getStorageKey(type);
        return storage.get(storageKey);
      }).then(function(session) {
        return !session ? constructSessionInfo(_this3.getEngagedValue_()) : _this3.updateSession_(constructSessionFromStoredValue(session), true);
      }).then(function(session) {
        if (type in _this3.sessions_ && !isSessionExpired(_this3.sessions_[type])) {
          return _this3.sessions_[type];
        }
        opt_processing == null ? void 0 : opt_processing(session);
        _this3.setSession_(type, session);
        _this3.sessions_[type] = session;
        return _this3.sessions_[type];
      });
    };
    _proto.updateSession_ = function updateSession_(session, opt_usePersistedEngaged) {
      var currentCount = session[SESSION_VALUES.COUNT];
      var now = Date.now();
      if (isSessionExpired(session)) {
        var newSessionCount = (currentCount != null ? currentCount : 0) + 1;
        session = constructSessionInfo(this.getEngagedValue_(), newSessionCount);
      } else {
        var previouslyEngaged = opt_usePersistedEngaged && session[SESSION_VALUES.ENGAGED];
        session[SESSION_VALUES.ENGAGED] = previouslyEngaged || this.getEngagedValue_();
        if (previouslyEngaged) {
          this.isFocused_ = true;
          this.isOpen_ = true;
          this.isVisible_ = true;
        }
      }
      session[SESSION_VALUES.ACCESS_TIMESTAMP] = now;
      return session;
    };
    _proto.getEngagedValue_ = function getEngagedValue_() {
      return this.isOpen_ && this.isVisible_ && this.isFocused_;
    };
    _proto.setSession_ = function setSession_(type, session) {
      return this.storagePromise_.then(function(storage) {
        var storageKey = getStorageKey(type);
        storage.setNonBoolean(storageKey, session);
      });
    };
    return SessionManager2;
  }();
  function isSessionExpired(session) {
    var accessTimestamp = session[SESSION_VALUES.ACCESS_TIMESTAMP];
    return accessTimestamp + SESSION_MAX_AGE_MILLIS < Date.now();
  }
  function generateSessionId() {
    return Math.round(1e4 * Math.random());
  }
  function getStorageKey(type) {
    return SESSION_STORAGE_KEY + type;
  }
  function constructSessionFromStoredValue(storedSession) {
    var _storedSession$SESSIO, _ref;
    if (!isObject(storedSession)) {
      dev().error(TAG2, "Invalid stored session value");
      return constructSessionInfo();
    }
    return _ref = {}, _ref[SESSION_VALUES.SESSION_ID] = storedSession[SESSION_VALUES.SESSION_ID], _ref[SESSION_VALUES.CREATION_TIMESTAMP] = storedSession[SESSION_VALUES.CREATION_TIMESTAMP], _ref[SESSION_VALUES.COUNT] = storedSession[SESSION_VALUES.COUNT], _ref[SESSION_VALUES.ACCESS_TIMESTAMP] = storedSession[SESSION_VALUES.ACCESS_TIMESTAMP], _ref[SESSION_VALUES.EVENT_TIMESTAMP] = storedSession[SESSION_VALUES.EVENT_TIMESTAMP], _ref[SESSION_VALUES.ENGAGED] = (_storedSession$SESSIO = storedSession[SESSION_VALUES.ENGAGED]) != null ? _storedSession$SESSIO : true, _ref;
  }
  function constructSessionInfo(engaged, count) {
    var _ref2;
    if (count === void 0) {
      count = 1;
    }
    return _ref2 = {}, _ref2[SESSION_VALUES.SESSION_ID] = generateSessionId(), _ref2[SESSION_VALUES.CREATION_TIMESTAMP] = Date.now(), _ref2[SESSION_VALUES.ACCESS_TIMESTAMP] = Date.now(), _ref2[SESSION_VALUES.COUNT] = count, _ref2[SESSION_VALUES.EVENT_TIMESTAMP] = void 0, _ref2[SESSION_VALUES.ENGAGED] = engaged, _ref2;
  }
  function sessionServicePromiseForDoc(elementOrAmpDoc) {
    return getServicePromiseForDoc(elementOrAmpDoc, "amp-analytics-session");
  }

  // src/core/constants/enums.js
  var AMPDOC_SINGLETON_NAME_ENUM = {
    TRACKING_IFRAME: 1,
    LINKER: 2
  };
  var TickLabel_Enum = {
    ACCESS_AUTHORIZATION: "aaa",
    ACCESS_AUTHORIZATION_VISIBLE: "aaav",
    CUMULATIVE_LAYOUT_SHIFT: "cls",
    CUMULATIVE_LAYOUT_SHIFT_TYPE_UNION: "clstu",
    CUMULATIVE_LAYOUT_SHIFT_1: "cls-1",
    CUMULATIVE_LAYOUT_SHIFT_2: "cls-2",
    DOCUMENT_READY: "dr",
    END_INSTALL_STYLES: "e_is",
    FIRST_CONTENTFUL_PAINT: "fcp",
    FIRST_CONTENTFUL_PAINT_VISIBLE: "fcpv",
    FIRST_PAINT: "fp",
    FIRST_INPUT_DELAY: "fid",
    FIRST_VIEWPORT_READY: "pc",
    INSTALL_STYLES: "is",
    LARGEST_CONTENTFUL_PAINT: "lcp",
    LARGEST_CONTENTFUL_PAINT_TYPE: "lcpt",
    LARGEST_CONTENTFUL_PAINT_VISIBLE: "lcpv",
    LONG_TASKS_SELF: "lts",
    MAKE_BODY_VISIBLE: "mbv",
    MESSAGING_READY: "msr",
    ON_FIRST_VISIBLE: "ofv",
    ON_LOAD: "ol",
    TIME_ORIGIN: "timeOrigin",
    VIDEO_CACHE_STATE: "vcs",
    VIDEO_ERROR: "verr",
    VIDEO_ON_FIRST_PAGE: "vofp",
    VIDEO_JOINT_LATENCY: "vjl",
    VIDEO_MEAN_TIME_BETWEEN_REBUFFER: "vmtbrb",
    VIDEO_REBUFFERS: "vrb",
    VIDEO_REBUFFER_RATE: "vrbr",
    VIDEO_WATCH_TIME: "vwt"
  };

  // src/core/types/string/bytes.js
  function utf8Decode(bytes) {
    if (typeof TextDecoder !== "undefined") {
      return new TextDecoder("utf-8").decode(bytes);
    }
    var asciiString = bytesToString(new Uint8Array(bytes.buffer || bytes));
    return decodeURIComponent(escape(asciiString));
  }
  function utf8Encode(string) {
    if (typeof TextEncoder !== "undefined") {
      return new TextEncoder("utf-8").encode(string);
    }
    return stringToBytes(unescape(encodeURIComponent(string)));
  }
  function stringToBytes(str) {
    var bytes = new Uint8Array(str.length);
    for (var i = 0; i < str.length; i++) {
      var charCode = str.charCodeAt(i);
      devAssert(charCode <= 255, "Characters must be in range [0,255]");
      bytes[i] = charCode;
    }
    return bytes;
  }
  function bytesToString(bytes) {
    var array = new Array(bytes.length);
    for (var i = 0; i < bytes.length; i++) {
      array[i] = String.fromCharCode(bytes[i]);
    }
    return array.join("");
  }

  // src/core/types/string/base64.js
  var base64UrlDecodeSubs = {
    "-": "+",
    "_": "/",
    ".": "="
  };
  var base64UrlEncodeSubs = {
    "+": "-",
    "/": "_",
    "=": "."
  };
  function base64UrlDecodeToBytes(str) {
    var encoded = atob(str.replace(/[-_.]/g, function(ch) {
      return base64UrlDecodeSubs[ch];
    }));
    return stringToBytes(encoded);
  }
  function base64UrlEncodeFromBytes(bytes) {
    var str = bytesToString(bytes);
    return btoa(str).replace(/[+/=]/g, function(ch) {
      return base64UrlEncodeSubs[ch];
    });
  }
  function base64UrlEncodeFromString(str) {
    var bytes = utf8Encode(str);
    return base64UrlEncodeFromBytes(bytes);
  }
  function base64UrlDecodeFromString(str) {
    var bytes = base64UrlDecodeToBytes(str);
    return utf8Decode(bytes);
  }

  // src/cookies.js
  var TEST_COOKIE_NAME = "-test-amp-cookie-tmp";
  var SameSite_Enum = {
    LAX: "Lax",
    STRICT: "Strict",
    NONE: "None"
  };
  function getCookie(win, name) {
    var cookieString = tryGetDocumentCookie_(win);
    if (!cookieString) {
      return null;
    }
    var cookies = cookieString.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      var eq = cookie.indexOf("=");
      if (eq == -1) {
        continue;
      }
      if (tryDecodeUriComponent(cookie.substring(0, eq).trim()) == name) {
        var value = cookie.substring(eq + 1).trim();
        return tryDecodeUriComponent(value, value);
      }
    }
    return null;
  }
  function tryGetDocumentCookie_(win) {
    try {
      return win.document.cookie;
    } catch (e) {
      return "";
    }
  }
  function setCookie(win, name, value, expirationTime, options) {
    if (options === void 0) {
      options = {};
    }
    checkOriginForSettingCookie(win, options, name);
    var domain = void 0;
    if (options.domain) {
      domain = options.domain;
    } else if (options.highestAvailableDomain) {
      domain = getHighestAvailableDomain(win);
    }
    trySetCookie(win, name, value, expirationTime, domain, options.sameSite, options.secure);
  }
  function getHighestAvailableDomain(win) {
    var metaTag = win.document.head && win.document.head.querySelector("meta[name='amp-cookie-scope']");
    if (metaTag) {
      var cookieScope = metaTag.getAttribute("content") || "";
      var sourceOrigin = getSourceOrigin(win.location.href);
      if (endsWith(sourceOrigin, "." + cookieScope)) {
        return cookieScope;
      } else {
        return sourceOrigin.split("://")[1];
      }
    }
    if (!isProxyOrigin(win.location.href)) {
      var parts = win.location.hostname.split(".");
      var domain = parts[parts.length - 1];
      var testCookieName = getTempCookieName(win);
      for (var i = parts.length - 2; i >= 0; i--) {
        domain = parts[i] + "." + domain;
        trySetCookie(win, testCookieName, "delete", Date.now() + 1e3, domain);
        if (getCookie(win, testCookieName) == "delete") {
          trySetCookie(win, testCookieName, "delete", Date.now() - 1e3, domain);
          return domain;
        }
      }
    }
    return null;
  }
  function trySetCookie(win, name, value, expirationTime, domain, sameSite, secure) {
    if (domain == "ampproject.org") {
      value = "delete";
      expirationTime = 0;
    }
    var cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; path=/" + (domain ? "; domain=" + domain : "") + "; expires=" + new Date(expirationTime).toUTCString() + getSameSiteString(win, sameSite) + (secure ? "; Secure" : "");
    try {
      win.document.cookie = cookie;
    } catch (ignore) {
    }
  }
  function getSameSiteString(win, sameSite) {
    if (!sameSite) {
      return "";
    }
    return "; SameSite=" + sameSite;
  }
  function checkOriginForSettingCookie(win, options, name) {
    if (options.allowOnProxyOrigin) {
      userAssert(!options.highestAvailableDomain, "Could not support highestAvailable Domain on proxy origin, specify domain explicitly");
      return;
    }
    userAssert(!isProxyOrigin(win.location.href), "Should never attempt to set cookie on proxy origin: " + name);
    var current = parseUrlDeprecated(win.location.href).hostname.toLowerCase();
    var proxy = parseUrlDeprecated(urls.cdn).hostname.toLowerCase();
    userAssert(!(current == proxy || endsWith(current, "." + proxy)), "Should never attempt to set cookie on proxy origin. (in depth check): " + name);
  }
  function getTempCookieName(win) {
    var testCookieName = TEST_COOKIE_NAME;
    var counter = 0;
    while (getCookie(win, testCookieName)) {
      testCookieName = TEST_COOKIE_NAME + counter;
    }
    return testCookieName;
  }

  // src/core/3p-frame-messaging.js
  var AMP_MESSAGE_PREFIX = "amp-";
  var MessageType_Enum = {
    SEND_EMBED_STATE: "send-embed-state",
    EMBED_STATE: "embed-state",
    SEND_EMBED_CONTEXT: "send-embed-context",
    EMBED_CONTEXT: "embed-context",
    SEND_INTERSECTIONS: "send-intersections",
    INTERSECTION: "intersection",
    EMBED_SIZE: "embed-size",
    EMBED_SIZE_CHANGED: "embed-size-changed",
    EMBED_SIZE_DENIED: "embed-size-denied",
    NO_CONTENT: "no-content",
    GET_HTML: "get-html",
    GET_CONSENT_STATE: "get-consent-state",
    SIGNAL_INTERACTIVE: "signal-interactive",
    FULL_OVERLAY_FRAME: "full-overlay-frame",
    FULL_OVERLAY_FRAME_RESPONSE: "full-overlay-frame-response",
    CANCEL_FULL_OVERLAY_FRAME: "cancel-full-overlay-frame",
    CANCEL_FULL_OVERLAY_FRAME_RESPONSE: "cancel-full-overlay-frame-response",
    SEND_POSITIONS: "send-positions",
    POSITION: "position",
    SEND_IFRAME_TRANSPORT_EVENTS: "send-iframe-transport-events",
    IFRAME_TRANSPORT_EVENTS: "iframe-transport-events",
    IFRAME_TRANSPORT_RESPONSE: "iframe-transport-response",
    USER_ERROR_IN_IFRAME: "user-error-in-iframe",
    SEND_CONSENT_DATA: "send-consent-data",
    CONSENT_DATA: "consent-data"
  };
  function deserializeMessage(message) {
    if (!isAmpMessage(message)) {
      return null;
    }
    var startPos = devAssertString(message).indexOf("{");
    devAssert(startPos != -1, "JSON missing in %s", message);
    return tryParseJson(devAssertString(message).substr(startPos), function(e) {
      rethrowAsync(new Error("MESSAGING: Failed to parse message: " + message + "\n" + e.message));
    });
  }
  function isAmpMessage(message) {
    return typeof message == "string" && message.startsWith(AMP_MESSAGE_PREFIX) && message.indexOf("{") != -1;
  }

  // src/iframe-helper.js
  var UNLISTEN_SENTINEL = "unlisten";
  function getListenFors(parentWin, opt_create) {
    var listeningFors = parentWin.listeningFors;
    if (!listeningFors && opt_create) {
      listeningFors = parentWin.listeningFors = Object.create(null);
    }
    return listeningFors || null;
  }
  function getListenForSentinel(parentWin, sentinel, opt_create) {
    var listeningFors = getListenFors(parentWin, opt_create);
    if (!listeningFors) {
      return listeningFors;
    }
    var listenSentinel = listeningFors[sentinel];
    if (!listenSentinel && opt_create) {
      listenSentinel = listeningFors[sentinel] = [];
    }
    return listenSentinel || null;
  }
  function getOrCreateListenForEvents(parentWin, iframe, opt_is3P) {
    var sentinel = getSentinel_(iframe, opt_is3P);
    var listenSentinel = getListenForSentinel(parentWin, sentinel, true);
    var windowEvents;
    for (var i = 0; i < listenSentinel.length; i++) {
      var we = listenSentinel[i];
      if (we.frame === iframe) {
        windowEvents = we;
        break;
      }
    }
    if (!windowEvents) {
      windowEvents = {
        frame: iframe,
        events: Object.create(null)
      };
      listenSentinel.push(windowEvents);
    }
    return windowEvents.events;
  }
  function getListenForEvents(parentWin, sentinel, origin, triggerWin) {
    var listenSentinel = getListenForSentinel(parentWin, sentinel);
    if (!listenSentinel) {
      return listenSentinel;
    }
    var windowEvents;
    for (var i = 0; i < listenSentinel.length; i++) {
      var we = listenSentinel[i];
      var contentWindow = we.frame.contentWindow;
      if (!contentWindow) {
        setTimeout(dropListenSentinel, 0, listenSentinel);
      } else if (triggerWin == contentWindow || isDescendantWindow(contentWindow, triggerWin)) {
        windowEvents = we;
        break;
      }
    }
    return windowEvents ? windowEvents.events : null;
  }
  function isDescendantWindow(ancestor, descendant) {
    for (var win = descendant; win && win != win.parent; win = win.parent) {
      if (win == ancestor) {
        return true;
      }
    }
    return false;
  }
  function dropListenSentinel(listenSentinel) {
    var noopData = dict({
      "sentinel": UNLISTEN_SENTINEL
    });
    for (var i = listenSentinel.length - 1; i >= 0; i--) {
      var windowEvents = listenSentinel[i];
      if (!windowEvents.frame.contentWindow) {
        listenSentinel.splice(i, 1);
        var events = windowEvents.events;
        for (var name in events) {
          events[name].splice(0, Infinity).forEach(function(event) {
            event(noopData);
          });
        }
      }
    }
  }
  function registerGlobalListenerIfNeeded(parentWin) {
    if (parentWin.listeningFors) {
      return;
    }
    var listenForListener = function listenForListener2(event) {
      if (!getData(event)) {
        return;
      }
      var data = parseIfNeeded(getData(event));
      if (!data || !data["sentinel"]) {
        return;
      }
      var listenForEvents = getListenForEvents(parentWin, data["sentinel"], event.origin, event.source);
      if (!listenForEvents) {
        return;
      }
      var listeners = listenForEvents[data["type"]];
      if (!listeners) {
        return;
      }
      listeners = listeners.slice();
      for (var i = 0; i < listeners.length; i++) {
        var listener = listeners[i];
        listener(data, event.source, event.origin, event);
      }
    };
    parentWin.addEventListener("message", listenForListener);
  }
  function listenFor(iframe, typeOfMessage, callback, opt_is3P, opt_includingNestedWindows, opt_allowOpaqueOrigin) {
    devAssert2(iframe.src, "only iframes with src supported");
    devAssert2(!iframe.parentNode, "cannot register events on an attached iframe. It will cause hair-pulling bugs like #2942");
    devAssert2(callback);
    var parentWin = iframe.ownerDocument.defaultView;
    registerGlobalListenerIfNeeded(parentWin);
    var listenForEvents = getOrCreateListenForEvents(parentWin, iframe, opt_is3P);
    var iframeOrigin = parseUrlDeprecated(iframe.src).origin;
    var events = listenForEvents[typeOfMessage] || (listenForEvents[typeOfMessage] = []);
    var unlisten;
    var listener = function listener2(data, source, origin, event) {
      var sentinel = data["sentinel"];
      if (sentinel == "amp") {
        if (source != iframe.contentWindow) {
          return;
        }
        var isOpaqueAndAllowed = origin == "null" && opt_allowOpaqueOrigin;
        if (iframeOrigin != origin && !isOpaqueAndAllowed) {
          return;
        }
      }
      if (!opt_includingNestedWindows && source != iframe.contentWindow) {
        return;
      }
      if (data.sentinel == UNLISTEN_SENTINEL) {
        unlisten();
        return;
      }
      callback(data, source, origin, event);
    };
    events.push(listener);
    return unlisten = function unlisten2() {
      if (listener) {
        var index = events.indexOf(listener);
        if (index > -1) {
          events.splice(index, 1);
        }
        listener = null;
        events = null;
        callback = null;
      }
    };
  }
  function postMessageToWindows(iframe, targets, type, object, opt_is3P) {
    if (!iframe.contentWindow) {
      return;
    }
    object["type"] = type;
    object["sentinel"] = getSentinel_(iframe, opt_is3P);
    var payload = object;
    if (opt_is3P) {
      payload = "amp-" + JSON.stringify(object);
    }
    for (var i = 0; i < targets.length; i++) {
      var target = targets[i];
      target.win.postMessage(payload, target.origin);
    }
  }
  function getSentinel_(iframe, opt_is3P) {
    return opt_is3P ? iframe.getAttribute("data-amp-3p-sentinel") : "amp";
  }
  function parseIfNeeded(data) {
    if (typeof data == "string") {
      if (data.charAt(0) == "{") {
        data = tryParseJson(data, function(e) {
          dev().warn("IFRAME-HELPER", "Postmessage could not be parsed. Is it in a valid JSON format?", e);
        }) || null;
      } else if (isAmpMessage(data)) {
        data = deserializeMessage(data);
      } else {
        data = null;
      }
    }
    return data;
  }
  var SubscriptionApi = /* @__PURE__ */ function() {
    function SubscriptionApi2(iframe, type, is3p, requestCallback) {
      var _this = this;
      this.iframe_ = iframe;
      this.is3p_ = is3p;
      this.clientWindows_ = [];
      this.unlisten_ = listenFor(this.iframe_, type, function(data, source, origin) {
        if (!_this.clientWindows_.some(function(entry) {
          return entry.win == source;
        })) {
          _this.clientWindows_.push({
            win: source,
            origin: origin
          });
        }
        requestCallback(data, source, origin);
      }, this.is3p_, this.is3p_);
    }
    var _proto = SubscriptionApi2.prototype;
    _proto.send = function send(type, data) {
      remove(this.clientWindows_, function(client) {
        return !client.win.parent;
      });
      postMessageToWindows(this.iframe_, this.clientWindows_, type, data, this.is3p_);
    };
    _proto.destroy = function destroy() {
      this.unlisten_();
      this.clientWindows_.length = 0;
    };
    return SubscriptionApi2;
  }();
  var FIE_EMBED_PROP = "__AMP_EMBED__";
  function getFriendlyIframeEmbedOptional(iframe) {
    return iframe[FIE_EMBED_PROP];
  }
  function isInFie(element) {
    return element.classList.contains("i-amphtml-fie") || !!closestAncestorElementBySelector(element, ".i-amphtml-fie");
  }

  // extensions/amp-analytics/0.1/cookie-reader.js
  function cookieReader(win, element, name) {
    if (!isCookieAllowed(win, element)) {
      return null;
    }
    return getCookie(win, name);
  }
  function isCookieAllowed(win, element) {
    return !isInFie(element) && !isProxyOrigin(win.location) && !(getMode(win).runtime == "inabox");
  }

  // src/consent.js
  function getConsentPolicyState(element, policyId) {
    if (policyId === void 0) {
      policyId = "default";
    }
    return Services.consentPolicyServiceForDocOrNull(element).then(function(consentPolicy) {
      if (!consentPolicy) {
        return null;
      }
      return consentPolicy.whenPolicyResolved(policyId);
    });
  }
  function getConsentPolicyInfo(element, policyId) {
    if (policyId === void 0) {
      policyId = "default";
    }
    return Services.consentPolicyServiceForDocOrNull(element).then(function(consentPolicy) {
      if (!consentPolicy) {
        return null;
      }
      return consentPolicy.getConsentStringInfo(policyId);
    });
  }
  function getConsentMetadata(element, policyId) {
    if (policyId === void 0) {
      policyId = "default";
    }
    return Services.consentPolicyServiceForDocOrNull(element).then(function(consentPolicy) {
      if (!consentPolicy) {
        return null;
      }
      return consentPolicy.getConsentMetadataInfo(policyId);
    });
  }

  // src/core/window/interface.js
  var WindowInterface = /* @__PURE__ */ function() {
    function WindowInterface2() {
    }
    WindowInterface2.getTop = function getTop(win) {
      return win.top;
    };
    WindowInterface2.getLocation = function getLocation(win) {
      return win.location;
    };
    WindowInterface2.getDocumentReferrer = function getDocumentReferrer(win) {
      return win.document.referrer;
    };
    WindowInterface2.getHostname = function getHostname(win) {
      return win.location.hostname;
    };
    WindowInterface2.getUserAgent = function getUserAgent(win) {
      return win.navigator.userAgent;
    };
    WindowInterface2.getUserLanguage = function getUserLanguage(win) {
      return win.navigator["userLanguage"] || win.navigator.language;
    };
    WindowInterface2.getDevicePixelRatio = function getDevicePixelRatio() {
      return self.devicePixelRatio || 1;
    };
    WindowInterface2.getSendBeacon = function getSendBeacon(win) {
      if (!win.navigator.sendBeacon) {
        return void 0;
      }
      return win.navigator.sendBeacon.bind(win.navigator);
    };
    WindowInterface2.getXMLHttpRequest = function getXMLHttpRequest(win) {
      return win.XMLHttpRequest;
    };
    WindowInterface2.getImage = function getImage(win) {
      return win.Image;
    };
    return WindowInterface2;
  }();

  // extensions/amp-analytics/0.1/crc32.js
  var CRC32_KEY = 3988292384;
  var crcTable = null;
  function crc32(str) {
    if (!crcTable) {
      crcTable = makeCrcTable();
    }
    var bytes = utf8Encode(str);
    var crc = -1 >>> 0;
    for (var i = 0; i < bytes.length; i++) {
      var lookupIndex = (crc ^ bytes[i]) & 255;
      crc = crc >>> 8 ^ crcTable[lookupIndex];
    }
    return (crc ^ -1) >>> 0;
  }
  function makeCrcTable() {
    var crcTable2 = new Array(256);
    for (var i = 0; i < 256; i++) {
      var c = i;
      for (var j = 0; j < 8; j++) {
        if (c & 1) {
          c = c >>> 1 ^ CRC32_KEY;
        } else {
          c = c >>> 1;
        }
      }
      crcTable2[i] = c;
    }
    return crcTable2;
  }

  // extensions/amp-analytics/0.1/linker.js
  var DELIMITER = "*";
  var KEY_VALIDATOR = /^[a-zA-Z0-9\-_.]+$/;
  var CHECKSUM_OFFSET_MAX_MIN = 1;
  var VALID_VERSION = 1;
  var TAG3 = "amp-analytics/linker";
  function createLinker(version2, ids) {
    var serializedIds = serialize(ids);
    if (serializedIds === "") {
      return "";
    }
    var checksum = getCheckSum(serializedIds);
    return [version2, checksum, serializedIds].join(DELIMITER);
  }
  function parseLinker(value) {
    var linkerObj = parseLinkerParamValue(value);
    if (!linkerObj) {
      return null;
    }
    var checksum = linkerObj.checksum, serializedIds = linkerObj.serializedIds;
    if (!isCheckSumValid(serializedIds, checksum)) {
      user().error(TAG3, "LINKER_PARAM value checksum not valid");
      return null;
    }
    return deserialize(serializedIds);
  }
  function parseLinkerParamValue(value) {
    var parts = value.split(DELIMITER);
    var isEven = parts.length % 2 == 0;
    if (parts.length < 4 || !isEven) {
      user().error(TAG3, "Invalid linker_param value " + value);
      return null;
    }
    var version2 = Number(parts.shift());
    if (version2 !== VALID_VERSION) {
      user().error(TAG3, "Invalid version number " + version2);
      return null;
    }
    var checksum = parts.shift();
    var serializedIds = parts.join(DELIMITER);
    return {
      checksum: checksum,
      serializedIds: serializedIds
    };
  }
  function isCheckSumValid(serializedIds, checksum) {
    for (var i = 0; i <= CHECKSUM_OFFSET_MAX_MIN; i++) {
      var calculateCheckSum = getCheckSum(serializedIds, i);
      if (calculateCheckSum == checksum) {
        return true;
      }
    }
    return false;
  }
  function getCheckSum(serializedIds, opt_offsetMin) {
    var fingerprint = getFingerprint();
    var offset = opt_offsetMin || 0;
    var timestamp = getMinSinceEpoch() - offset;
    var crc = crc32([fingerprint, timestamp, serializedIds].join(DELIMITER));
    return crc.toString(36);
  }
  function getFingerprint() {
    var date = new Date();
    var timezone = date.getTimezoneOffset();
    var language = WindowInterface.getUserLanguage(window);
    return [WindowInterface.getUserAgent(window), timezone, language].join(DELIMITER);
  }
  function serialize(pairs) {
    if (!pairs) {
      return "";
    }
    return Object.keys(pairs).filter(function(key) {
      var valid = KEY_VALIDATOR.test(key);
      if (!valid) {
        user().error(TAG3, "Invalid linker key: " + key);
      }
      return valid;
    }).map(function(key) {
      return key + DELIMITER + encode(pairs[key]);
    }).join(DELIMITER);
  }
  function deserialize(serializedIds) {
    var keyValuePairs = {};
    var params = serializedIds.split(DELIMITER);
    for (var i = 0; i < params.length; i += 2) {
      var key = params[i];
      var valid = KEY_VALIDATOR.test(key);
      if (!valid) {
        user().error(TAG3, "Invalid linker key " + key + ", value ignored");
        continue;
      }
      var value = decode(params[i + 1]);
      keyValuePairs[key] = value;
    }
    return keyValuePairs;
  }
  function getMinSinceEpoch() {
    return Math.floor(Date.now() / 6e4);
  }
  function encode(value) {
    return base64UrlEncodeFromString(String(value));
  }
  function decode(value) {
    return base64UrlDecodeFromString(String(value));
  }

  // extensions/amp-analytics/0.1/linker-reader.js
  var TAG4 = "amp-analytics/linker-reader";
  var LinkerReader = /* @__PURE__ */ function() {
    function LinkerReader2(win) {
      this.win_ = win;
      this.linkerParams_ = {};
    }
    var _proto = LinkerReader2.prototype;
    _proto.get = function get(name, id) {
      if (!name || !id) {
        user().error(TAG4, "LINKER_PARAM requires two params, name and id");
        return null;
      }
      if (!hasOwn(this.linkerParams_, name)) {
        this.linkerParams_[name] = this.parseAndCleanQueryString_(name);
      }
      if (this.linkerParams_[name] && this.linkerParams_[name][id]) {
        return this.linkerParams_[name][id];
      }
      return null;
    };
    _proto.parseAndCleanQueryString_ = function parseAndCleanQueryString_(name) {
      var params = parseQueryString(this.win_.location.search);
      if (!hasOwn(params, name)) {
        return null;
      }
      var value = params[name];
      this.removeLinkerParam_(this.win_.location, name);
      return parseLinker(value);
    };
    _proto.removeLinkerParam_ = function removeLinkerParam_(url, name) {
      if (!this.win_.history.replaceState) {
        return;
      }
      var searchUrl = url.search;
      var removedLinkerParamSearchUrl = removeParamsFromSearch(searchUrl, name);
      var newHref = url.origin + url.pathname + removedLinkerParamSearchUrl + (url.hash || "");
      this.win_.history.replaceState(null, "", newHref);
    };
    return LinkerReader2;
  }();
  function installLinkerReaderService(win) {
    registerServiceBuilder(win, "amp-analytics-linker-reader", LinkerReader);
  }
  function linkerReaderServiceFor(win) {
    return getService(win, "amp-analytics-linker-reader");
  }

  // extensions/amp-analytics/0.1/variables.js
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
  var TAG5 = "amp-analytics/variables";
  var VARIABLE_ARGS_REGEXP = /^(?:([^\s]*)(\([^)]*\))|[^]+)$/;
  var EXTERNAL_CONSENT_POLICY_STATE_STRING = {
    1: "sufficient",
    2: "insufficient",
    3: "not_required",
    4: "unknown"
  };
  var ExpansionOptions = /* @__PURE__ */ function() {
    function ExpansionOptions2(vars, opt_iterations, opt_noEncode) {
      this.vars = vars;
      this.iterations = opt_iterations === void 0 ? 2 : opt_iterations;
      this.noEncode = !!opt_noEncode;
      this.freezeVars = {};
    }
    var _proto = ExpansionOptions2.prototype;
    _proto.freezeVar = function freezeVar(str) {
      this.freezeVars[str] = true;
    };
    _proto.getVar = function getVar(name) {
      var value = this.vars[name];
      if (value == null) {
        value = "";
      }
      return value;
    };
    return ExpansionOptions2;
  }();
  function substrMacro(value, s, opt_l) {
    var start = Number(s);
    var length = value.length;
    userAssert(isFiniteNumber(start), "Start index " + start + "in substr macro should be a number");
    if (opt_l) {
      length = Number(opt_l);
      userAssert(isFiniteNumber(length), "Length " + length + " in substr macro should be a number");
    }
    return value.substr(start, length);
  }
  function defaultMacro(value, defaultValue) {
    if (!value || !value.length) {
      return defaultValue;
    }
    return value;
  }
  function replaceMacro(string, matchPattern, opt_newSubStr) {
    if (!matchPattern) {
      user().warn(TAG5, "REPLACE macro must have two or more arguments");
    }
    if (!opt_newSubStr) {
      opt_newSubStr = "";
    }
    var regex = new RegExp(matchPattern, "g");
    return string.replace(regex, opt_newSubStr);
  }
  function matchMacro(string, matchPattern, opt_matchingGroupIndexStr) {
    if (!matchPattern) {
      user().warn(TAG5, "MATCH macro must have two or more arguments");
    }
    var index = 0;
    if (opt_matchingGroupIndexStr) {
      index = parseInt(opt_matchingGroupIndexStr, 10);
      if (index != 0 && !index || index < 0) {
        user().error(TAG5, "Third argument in MATCH macro must be a number >= 0");
        index = 0;
      }
    }
    var regex = new RegExp(matchPattern);
    var matches2 = string.match(regex);
    return matches2 && matches2[index] ? matches2[index] : "";
  }
  function calcMacro(leftOperand, rightOperand, operation, round) {
    var left = Number(leftOperand);
    var right = Number(rightOperand);
    userAssert(!isNaN(left), "CALC macro - left operand must be a number");
    userAssert(!isNaN(right), "CALC macro - right operand must be a number");
    var result = 0;
    switch (operation) {
      case "add":
        result = left + right;
        break;
      case "subtract":
        result = left - right;
        break;
      case "multiply":
        result = left * right;
        break;
      case "divide":
        userAssert(right, "CALC macro - cannot divide by 0");
        result = left / right;
        break;
      default:
        user().error(TAG5, "CALC macro - Invalid operation");
    }
    return stringToBool(round) ? Math.round(result) : result;
  }
  function experimentBranchesMacro(win, opt_expName) {
    if (opt_expName) {
      return getExperimentBranch(win, opt_expName) || "";
    }
    var branches = getActiveExperimentBranches(win);
    return Object.keys(branches).map(function(expName) {
      return expName + ":" + branches[expName];
    }).join(",");
  }
  var VariableService = /* @__PURE__ */ function() {
    function VariableService2(ampdoc2) {
      var _this = this;
      this.ampdoc_ = ampdoc2;
      this.macros_ = dict({});
      this.linkerReader_ = linkerReaderServiceFor(this.ampdoc_.win);
      this.sessionManagerPromise_ = sessionServicePromiseForDoc(this.ampdoc_);
      this.register_("$DEFAULT", defaultMacro);
      this.register_("$SUBSTR", substrMacro);
      this.register_("$TRIM", function(value) {
        return value.trim();
      });
      this.register_("$TOLOWERCASE", function(value) {
        return value.toLowerCase();
      });
      this.register_("$TOUPPERCASE", function(value) {
        return value.toUpperCase();
      });
      this.register_("$NOT", function(value) {
        return String(!value);
      });
      this.register_("$BASE64", function(value) {
        return base64UrlEncodeFromString(value);
      });
      this.register_("$HASH", this.hashMacro_.bind(this));
      this.register_("$IF", function(value, thenValue, elseValue) {
        return stringToBool(value) ? thenValue : elseValue;
      });
      this.register_("$REPLACE", replaceMacro);
      this.register_("$MATCH", matchMacro);
      this.register_("$CALC", calcMacro);
      this.register_("$EQUALS", function(firstValue, secValue) {
        return firstValue === secValue;
      });
      this.register_("LINKER_PARAM", function(name, id) {
        return _this.linkerReader_.get(name, id);
      });
      this.register_("TIMEZONE_CODE", function() {
        var tzCode = "";
        if ("Intl" in _this.ampdoc_.win && "DateTimeFormat" in _this.ampdoc_.win.Intl) {
          tzCode = new _this.ampdoc_.win.Intl.DateTimeFormat().resolvedOptions().timeZone;
        }
        return tzCode;
      });
      this.register_("SCROLL_TOP", function() {
        return Math.round(Services.viewportForDoc(_this.ampdoc_).getScrollTop());
      });
      this.register_("SCROLL_LEFT", function() {
        return Math.round(Services.viewportForDoc(_this.ampdoc_).getScrollLeft());
      });
      this.register_("EXPERIMENT_BRANCHES", function(opt_expName) {
        return experimentBranchesMacro(_this.ampdoc_.win, opt_expName);
      });
      this.register_("AMPDOC_META", function(meta, defaultValue) {
        var _this$ampdoc_$getMeta;
        if (defaultValue === void 0) {
          defaultValue = "";
        }
        return (_this$ampdoc_$getMeta = _this.ampdoc_.getMetaByName(meta)) != null ? _this$ampdoc_$getMeta : defaultValue;
      });
    }
    var _proto2 = VariableService2.prototype;
    _proto2.getMacros = function getMacros(element) {
      var _this2 = this;
      var type = element.getAttribute("type");
      var elementMacros = {
        "COOKIE": function COOKIE(name) {
          return cookieReader(_this2.ampdoc_.win, dev().assertElement(element), name);
        },
        "CONSENT_STATE": getConsentStateStr(element),
        "CONSENT_STRING": getConsentPolicyInfo(element),
        "CONSENT_METADATA": function CONSENT_METADATA(key) {
          return getConsentMetadataValue(element, userAssert(key, "CONSENT_METADATA macro must contain a key"));
        },
        "SESSION_ID": function SESSION_ID() {
          return _this2.getSessionValue_(type, SESSION_VALUES.SESSION_ID);
        },
        "SESSION_TIMESTAMP": function SESSION_TIMESTAMP() {
          return _this2.getSessionValue_(type, SESSION_VALUES.CREATION_TIMESTAMP);
        },
        "SESSION_COUNT": function SESSION_COUNT() {
          return _this2.getSessionValue_(type, SESSION_VALUES.COUNT);
        },
        "SESSION_EVENT_TIMESTAMP": function SESSION_EVENT_TIMESTAMP() {
          return _this2.getSessionValue_(type, SESSION_VALUES.EVENT_TIMESTAMP);
        },
        "SESSION_ENGAGED": function SESSION_ENGAGED() {
          return _this2.getSessionValue_(type, SESSION_VALUES.ENGAGED);
        }
      };
      var perfMacros = isInFie(element) ? {} : {
        "FIRST_CONTENTFUL_PAINT": function FIRST_CONTENTFUL_PAINT() {
          return Services.performanceFor(_this2.ampdoc_.win).getMetric(TickLabel_Enum.FIRST_CONTENTFUL_PAINT_VISIBLE);
        },
        "FIRST_VIEWPORT_READY": function FIRST_VIEWPORT_READY() {
          return Services.performanceFor(_this2.ampdoc_.win).getMetric(TickLabel_Enum.FIRST_VIEWPORT_READY);
        },
        "MAKE_BODY_VISIBLE": function MAKE_BODY_VISIBLE() {
          return Services.performanceFor(_this2.ampdoc_.win).getMetric(TickLabel_Enum.MAKE_BODY_VISIBLE);
        },
        "LARGEST_CONTENTFUL_PAINT": function LARGEST_CONTENTFUL_PAINT() {
          return Services.performanceFor(_this2.ampdoc_.win).getMetric(TickLabel_Enum.LARGEST_CONTENTFUL_PAINT_VISIBLE);
        },
        "FIRST_INPUT_DELAY": function FIRST_INPUT_DELAY() {
          return Services.performanceFor(_this2.ampdoc_.win).getMetric(TickLabel_Enum.FIRST_INPUT_DELAY);
        },
        "CUMULATIVE_LAYOUT_SHIFT": function CUMULATIVE_LAYOUT_SHIFT() {
          return Services.performanceFor(_this2.ampdoc_.win).getMetric(TickLabel_Enum.CUMULATIVE_LAYOUT_SHIFT);
        }
      };
      var merged = _extends2({}, this.macros_, elementMacros, perfMacros);
      return merged;
    };
    _proto2.getSessionValue_ = function getSessionValue_(vendorType, key) {
      return this.sessionManagerPromise_.then(function(sessionManager) {
        return sessionManager.getSessionValue(vendorType, key);
      });
    };
    _proto2.register_ = function register_(name, macro) {
      devAssert2(!this.macros_[name], 'Macro "' + name + '" already registered.');
      this.macros_[name] = macro;
    };
    _proto2.expandTemplate = function expandTemplate2(template, options, element, opt_bindings, opt_allowlist) {
      var _this3 = this;
      return asyncStringReplace(template, /\${([^}]*)}/g, function(match, key) {
        if (options.iterations < 0) {
          user().error(TAG5, "Maximum depth reached while expanding variables. Please ensure that the variables are not recursive.");
          return match;
        }
        if (!key) {
          return "";
        }
        var _getNameArgs = getNameArgs(key), argList = _getNameArgs.argList, name = _getNameArgs.name;
        if (options.freezeVars[name]) {
          return match;
        }
        var value = options.getVar(name);
        var urlReplacements = Services.urlReplacementsForDoc(element);
        if (typeof value == "string") {
          value = _this3.expandValueAndReplaceAsync_(value, options, element, urlReplacements, opt_bindings, opt_allowlist, argList);
        } else if (isArray(value)) {
          for (var i = 0; i < value.length; i++) {
            value[i] = typeof value[i] == "string" ? _this3.expandValueAndReplaceAsync_(value[i], options, element, urlReplacements, opt_bindings, opt_allowlist) : value[i];
          }
          value = Promise.all(value);
        }
        return Promise.resolve(value).then(function(value2) {
          return !options.noEncode ? encodeVars(value2) : value2;
        });
      });
    };
    _proto2.expandValueAndReplaceAsync_ = function expandValueAndReplaceAsync_(value, options, element, urlReplacements, opt_bindings, opt_allowlist, opt_argList) {
      var _this4 = this;
      return this.expandTemplate(value, new ExpansionOptions(options.vars, options.iterations - 1, true), element, opt_bindings, opt_allowlist).then(function(val) {
        return urlReplacements.expandStringAsync(opt_argList ? val + opt_argList : val, opt_bindings || _this4.getMacros(element), opt_allowlist);
      });
    };
    _proto2.hashMacro_ = function hashMacro_(value) {
      return Services.cryptoFor(this.ampdoc_.win).sha384Base64(value);
    };
    return VariableService2;
  }();
  function encodeVars(raw) {
    if (raw == null) {
      return "";
    }
    if (isArray(raw)) {
      return raw.map(encodeVars).join(",");
    }
    var _getNameArgs2 = getNameArgs(String(raw)), argList = _getNameArgs2.argList, name = _getNameArgs2.name;
    return encodeURIComponent(name) + argList;
  }
  function getNameArgs(key) {
    if (!key) {
      return {
        name: "",
        argList: ""
      };
    }
    var match = key.match(VARIABLE_ARGS_REGEXP);
    userAssert(match, "Variable with invalid format found: " + key);
    return {
      name: match[1] || match[0],
      argList: match[2] || ""
    };
  }
  function variableServiceForDoc(elementOrAmpDoc) {
    return getServiceForDoc(elementOrAmpDoc, "amp-analytics-variables");
  }
  function variableServicePromiseForDoc(elementOrAmpDoc) {
    return getServicePromiseForDoc(elementOrAmpDoc, "amp-analytics-variables");
  }
  function getConsentStateStr(element) {
    return getConsentPolicyState(element).then(function(consent) {
      if (!consent) {
        return null;
      }
      return EXTERNAL_CONSENT_POLICY_STATE_STRING[consent];
    });
  }
  function getConsentMetadataValue(element, key) {
    return getConsentMetadata(element).then(function(consentMetadata) {
      if (!consentMetadata) {
        return null;
      }
      return consentMetadata[key];
    });
  }
  function stringToBool(str) {
    return str !== "false" && str !== "" && str !== "0" && str !== "null" && str !== "NaN" && str !== "undefined";
  }

  // extensions/amp-analytics/0.1/config.js
  var TAG6 = "amp-analytics/config";
  var AnalyticsConfig = /* @__PURE__ */ function() {
    function AnalyticsConfig2(element) {
      this.element_ = element;
      this.win_ = null;
      this.defaultConfig_ = DEFAULT_CONFIG || dict();
      this.vendorConfig_ = dict();
      this.config_ = dict();
      this.remoteConfig_ = dict();
      this.isSandbox_ = false;
      this.variableService_ = variableServiceForDoc(element);
    }
    var _proto = AnalyticsConfig2.prototype;
    _proto.loadConfig = function loadConfig() {
      var _this = this;
      this.win_ = this.element_.ownerDocument.defaultView;
      this.isSandbox_ = this.element_.hasAttribute("sandbox");
      return Promise.all([this.fetchRemoteConfig_(), this.fetchVendorConfig_()]).then(this.processConfigs_.bind(this)).then(this.checkWarningMessage_.bind(this)).then(function() {
        return _this.config_;
      });
    };
    _proto.getVendorUrl_ = function getVendorUrl_(vendor) {
      var baseUrl = calculateScriptBaseUrl(this.win_.location, getMode().localDev);
      var canary = vendor === "bg" && isCanary(self) ? ".canary" : "";
      return baseUrl + "/rtv/" + getMode().rtvVersion + "/v0/analytics-vendors/" + vendor + canary + ".json";
    };
    _proto.fetchVendorConfig_ = function fetchVendorConfig_() {
      var _this2 = this;
      var type = this.element_.getAttribute("type");
      if (!type) {
        return resolvedPromise();
      }
      var vendorUrl = this.getVendorUrl_(type);
      var TAG15 = this.getName_();
      dev().fine(TAG15, "Fetching vendor config", vendorUrl);
      return Services.xhrFor(toWin(this.win_)).fetchJson(vendorUrl, {
        ampCors: false
      }).then(function(res) {
        return res.json();
      }).then(function(jsonValue) {
        _this2.vendorConfig_ = jsonValue || dict();
        dev().fine(TAG15, "Vendor config loaded for " + type, jsonValue);
      }, function(err) {
        user().error(TAG15, "Error loading vendor config: ", vendorUrl, err);
      });
    };
    _proto.fetchRemoteConfig_ = function fetchRemoteConfig_() {
      var _this3 = this;
      var remoteConfigUrl = this.element_.getAttribute("config");
      if (!remoteConfigUrl || this.isSandbox_) {
        return resolvedPromise();
      }
      assertHttpsUrl(remoteConfigUrl, this.element_);
      var TAG15 = this.getName_();
      dev().fine(TAG15, "Fetching remote config", remoteConfigUrl);
      var fetchConfig = {};
      if (this.element_.hasAttribute("data-credentials")) {
        fetchConfig.credentials = this.element_.getAttribute("data-credentials");
      }
      return Services.urlReplacementsForDoc(this.element_).expandUrlAsync(remoteConfigUrl, this.variableService_.getMacros(this.element_)).then(function(expandedUrl) {
        remoteConfigUrl = expandedUrl;
        return Services.xhrFor(toWin(_this3.win_)).fetchJson(remoteConfigUrl, fetchConfig);
      }).then(function(res) {
        return res.json();
      }).then(function(jsonValue) {
        _this3.remoteConfig_ = jsonValue;
        dev().fine(TAG15, "Remote config loaded", remoteConfigUrl);
      }, function(err) {
        user().error(TAG15, "Error loading remote config: ", remoteConfigUrl, err);
      });
    };
    _proto.processConfigs_ = function processConfigs_() {
      var configRewriterUrl = this.getConfigRewriter_()["url"];
      var config = dict({});
      var inlineConfig = this.getInlineConfig_();
      this.validateTransport_(inlineConfig);
      mergeObjects(inlineConfig, config);
      mergeObjects(this.remoteConfig_, config);
      if (!configRewriterUrl || this.isSandbox_) {
        this.config_ = this.mergeConfigs_(config);
        return resolvedPromise();
      }
      return this.handleConfigRewriter_(config, configRewriterUrl);
    };
    _proto.handleConfigRewriter_ = function handleConfigRewriter_(config, configRewriterUrl) {
      var _this4 = this;
      assertHttpsUrl(configRewriterUrl, this.element_);
      var TAG15 = this.getName_();
      dev().fine(TAG15, "Rewriting config", configRewriterUrl);
      return this.handleVarGroups_(config).then(function() {
        var fetchConfig = {
          method: "POST",
          body: config
        };
        if (_this4.element_.hasAttribute("data-credentials")) {
          fetchConfig.credentials = _this4.element_.getAttribute("data-credentials");
        }
        return Services.urlReplacementsForDoc(_this4.element_).expandUrlAsync(configRewriterUrl).then(function(expandedUrl) {
          return Services.xhrFor(toWin(_this4.win_)).fetchJson(expandedUrl, fetchConfig);
        }).then(function(res) {
          return res.json();
        }).then(function(jsonValue) {
          _this4.config_ = _this4.mergeConfigs_(jsonValue);
          dev().fine(TAG15, "Configuration re-written", configRewriterUrl);
        }, function(err) {
          user().error(TAG15, "Error rewriting configuration: ", configRewriterUrl, err);
        });
      });
    };
    _proto.checkWarningMessage_ = function checkWarningMessage_() {
      if (this.config_["warningMessage"]) {
        var _TAG = this.getName_();
        var type = this.element_.getAttribute("type");
        var remoteConfigUrl = this.element_.getAttribute("config");
        user().warn(_TAG, "Warning from analytics vendor%s%s: %s", type ? " " + type : "", remoteConfigUrl ? " with remote config url " + remoteConfigUrl : "", String(this.config_["warningMessage"]));
        delete this.config_["warningMessage"];
      }
    };
    _proto.handleVarGroups_ = function handleVarGroups_(pubConfig) {
      var _this5 = this;
      var pubRewriterConfig = pubConfig["configRewriter"];
      var pubVarGroups = pubRewriterConfig && pubRewriterConfig["varGroups"];
      var vendorVarGroups = this.getConfigRewriter_()["varGroups"];
      if (!pubVarGroups && !vendorVarGroups) {
        return resolvedPromise();
      }
      if (pubVarGroups && !vendorVarGroups) {
        var _TAG2 = this.getName_();
        user().warn(_TAG2, "This analytics provider does not currently support varGroups");
        return resolvedPromise();
      }
      pubConfig["configRewriter"] = pubConfig["configRewriter"] || dict();
      var rewriterConfig = pubConfig["configRewriter"];
      rewriterConfig["vars"] = dict({});
      var allPromises = [];
      var mergedConfig = pubVarGroups || dict();
      deepMerge(mergedConfig, vendorVarGroups);
      Object.keys(mergedConfig).forEach(function(groupName) {
        var group = mergedConfig[groupName];
        if (!group["enabled"]) {
          return;
        }
        var groupPromise = _this5.shallowExpandObject(_this5.element_, group).then(function(expandedGroup) {
          delete expandedGroup["enabled"];
          Object.assign(rewriterConfig["vars"], expandedGroup);
        });
        allPromises.push(groupPromise);
      });
      return Promise.all(allPromises).then(function() {
        if (!Object.keys(rewriterConfig["vars"]).length) {
          return delete pubConfig["configRewriter"];
        }
        pubVarGroups && delete rewriterConfig["varGroups"];
      });
    };
    _proto.mergeConfigs_ = function mergeConfigs_(rewrittenConfig) {
      var config = dict({
        "vars": {
          "requestCount": 0
        }
      });
      mergeObjects(expandConfigRequest(this.defaultConfig_), config);
      mergeObjects(expandConfigRequest(this.vendorConfig_), config, true);
      mergeObjects(expandConfigRequest(rewrittenConfig), config, true);
      return config;
    };
    _proto.getConfigRewriter_ = function getConfigRewriter_() {
      return this.vendorConfig_["configRewriter"] || {};
    };
    _proto.getInlineConfig_ = function getInlineConfig_() {
      if (this.element_.CONFIG) {
        return this.element_.CONFIG;
      }
      var inlineConfig = {};
      var TAG15 = this.getName_();
      try {
        var children = this.element_.children;
        if (children.length == 1) {
          inlineConfig = getChildJsonConfig(this.element_);
        } else if (children.length > 1) {
          user().error(TAG15, "The tag should contain only one <script> child.");
        }
      } catch (er) {
        user().error(TAG15, er.message);
      }
      return inlineConfig;
    };
    _proto.validateTransport_ = function validateTransport_(inlineConfig) {
      if (this.element_.getAttribute("type")) {
        if (inlineConfig["transport"] || this.remoteConfig_["transport"]) {
          var _TAG3 = this.getName_();
          user().error(_TAG3, "Inline or remote config should not overwrite vendor transport settings");
        }
      }
      if (inlineConfig["transport"] && inlineConfig["transport"]["iframe"]) {
        user().error(TAG6, "Inline configs are not allowed to specify transport iframe");
        if (!getMode().localDev || getMode().test) {
          inlineConfig["transport"]["iframe"] = void 0;
        }
      }
      if (this.remoteConfig_["transport"] && this.remoteConfig_["transport"]["iframe"]) {
        user().error(TAG6, "Remote configs are not allowed to specify transport iframe");
        this.remoteConfig_["transport"]["iframe"] = void 0;
      }
    };
    _proto.getName_ = function getName_() {
      return "AmpAnalytics " + (this.element_.getAttribute("id") || "<unknown id>");
    };
    _proto.shallowExpandObject = function shallowExpandObject(element, obj) {
      var expandedObj = dict();
      var keys = [];
      var expansionPromises = [];
      var urlReplacements = Services.urlReplacementsForDoc(element);
      var bindings = variableServiceForDoc(element).getMacros(element);
      Object.keys(obj).forEach(function(key) {
        keys.push(key);
        var expanded = urlReplacements.expandStringAsync(obj[key], bindings);
        expansionPromises.push(expanded);
      });
      return Promise.all(expansionPromises).then(function(expandedValues) {
        keys.forEach(function(key, i) {
          return expandedObj[key] = expandedValues[i];
        });
        return expandedObj;
      });
    };
    return AnalyticsConfig2;
  }();
  function mergeObjects(from, to, opt_predefinedVendorConfig) {
    if (to === null || to === void 0) {
      to = {};
    }
    userAssert(opt_predefinedVendorConfig || !from || !from["optout"] || from["optout"] == "_gaUserPrefs.ioo" || from["optoutElementId"] == "__gaOptOutExtension", "optout property is only available to vendor config.");
    for (var property in from) {
      userAssert(opt_predefinedVendorConfig || property != "iframePing", "iframePing config is only available to vendor config.");
      if (hasOwn(from, property)) {
        if (isArray(from[property])) {
          if (!isArray(to[property])) {
            to[property] = [];
          }
          to[property] = mergeObjects(from[property], to[property], opt_predefinedVendorConfig);
        } else if (isObject(from[property])) {
          if (!isObject(to[property])) {
            to[property] = {};
          }
          to[property] = mergeObjects(from[property], to[property], opt_predefinedVendorConfig);
        } else {
          to[property] = from[property];
        }
      }
    }
    return to;
  }
  function expandConfigRequest(config) {
    if (!config["requests"]) {
      return config;
    }
    for (var k in config["requests"]) {
      if (hasOwn(config["requests"], k)) {
        config["requests"][k] = expandRequestStr(config["requests"][k]);
      }
    }
    return handleTopLevelAttributes_(config);
  }
  function expandRequestStr(request) {
    if (isObject(request)) {
      return request;
    }
    return {
      "baseUrl": request
    };
  }
  function handleTopLevelAttributes_(config) {
    if (hasOwn(config, "requests") && hasOwn(config, "requestOrigin")) {
      var requestOrigin = config["requestOrigin"];
      for (var requestName in config["requests"]) {
        if (!hasOwn(config["requests"][requestName], "origin")) {
          config["requests"][requestName]["origin"] = requestOrigin;
        }
      }
    }
    return config;
  }

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

  // src/core/dom/amp-element-helpers.js
  function isAmpElement(element) {
    var tag = element.tagName;
    return tag.startsWith("AMP-") && !(tag == "AMP-STICKY-AD-TOP-PADDING" || tag == "AMP-BODY");
  }

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
  var PlayingStates_Enum = {
    PLAYING_MANUAL: "playing_manual",
    PLAYING_AUTO: "playing_auto",
    PAUSED: "paused"
  };
  var VideoAnalyticsEvents_Enum = {
    ENDED: "video-ended",
    PAUSE: "video-pause",
    PLAY: "video-play",
    SESSION: "video-session",
    SESSION_VISIBLE: "video-session-visible",
    SECONDS_PLAYED: "video-seconds-played",
    CUSTOM: "video-hosted-custom",
    PERCENTAGE_PLAYED: "video-percentage-played",
    AD_START: "video-ad-start",
    AD_END: "video-ad-end"
  };
  var videoAnalyticsCustomEventTypeKey = "__amp:eventType";

  // extensions/amp-analytics/0.1/events.js
  var _Object$freeze;
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
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
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
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  var SCROLL_PRECISION_PERCENT = 5;
  var VAR_H_SCROLL_BOUNDARY = "horizontalScrollBoundary";
  var VAR_V_SCROLL_BOUNDARY = "verticalScrollBoundary";
  var MIN_TIMER_INTERVAL_SECONDS = 0.5;
  var DEFAULT_MAX_TIMER_LENGTH_SECONDS = 7200;
  var VARIABLE_DATA_ATTRIBUTE_KEY = /^vars(.+)/;
  var NO_UNLISTEN = function NO_UNLISTEN2() {
  };
  var TAG7 = "amp-analytics/events";
  var SESSION_DEBOUNCE_TIME_MS = 500;
  var AnalyticsEventType = {
    CLICK: "click",
    BROWSER_EVENT: "browser-event",
    CUSTOM: "custom",
    HIDDEN: "hidden",
    INI_LOAD: "ini-load",
    RENDER_START: "render-start",
    SCROLL: "scroll",
    STORY: "story",
    TIMER: "timer",
    VIDEO: "video",
    VISIBLE: "visible"
  };
  var BrowserEventType = {
    BLUR: "blur",
    CHANGE: "change"
  };
  var ALLOWED_FOR_ALL_ROOT_TYPES = ["ampdoc", "embed"];
  var TRACKER_TYPE = Object.freeze((_Object$freeze = {}, _Object$freeze[AnalyticsEventType.CLICK] = {
    name: AnalyticsEventType.CLICK,
    allowedFor: ALLOWED_FOR_ALL_ROOT_TYPES.concat(["timer"]),
    klass: function klass(root) {
      return new ClickEventTracker(root);
    }
  }, _Object$freeze[AnalyticsEventType.BROWSER_EVENT] = {
    name: AnalyticsEventType.BROWSER_EVENT,
    allowedFor: ALLOWED_FOR_ALL_ROOT_TYPES.concat(["timer"]),
    klass: function klass2(root) {
      return new BrowserEventTracker(root);
    }
  }, _Object$freeze[AnalyticsEventType.CUSTOM] = {
    name: AnalyticsEventType.CUSTOM,
    allowedFor: ALLOWED_FOR_ALL_ROOT_TYPES.concat(["timer"]),
    klass: function klass3(root) {
      return new CustomEventTracker(root);
    }
  }, _Object$freeze[AnalyticsEventType.HIDDEN] = {
    name: AnalyticsEventType.VISIBLE,
    allowedFor: ALLOWED_FOR_ALL_ROOT_TYPES.concat(["timer"]),
    klass: function klass4(root) {
      return new VisibilityTracker(root);
    }
  }, _Object$freeze[AnalyticsEventType.INI_LOAD] = {
    name: AnalyticsEventType.INI_LOAD,
    allowedFor: ALLOWED_FOR_ALL_ROOT_TYPES.concat(["timer", "visible"]),
    klass: function klass5(root) {
      return new IniLoadTracker(root);
    }
  }, _Object$freeze[AnalyticsEventType.RENDER_START] = {
    name: AnalyticsEventType.RENDER_START,
    allowedFor: ALLOWED_FOR_ALL_ROOT_TYPES.concat(["timer", "visible"]),
    klass: function klass6(root) {
      return new SignalTracker(root);
    }
  }, _Object$freeze[AnalyticsEventType.SCROLL] = {
    name: AnalyticsEventType.SCROLL,
    allowedFor: ALLOWED_FOR_ALL_ROOT_TYPES.concat(["timer"]),
    klass: function klass7(root) {
      return new ScrollEventTracker(root);
    }
  }, _Object$freeze[AnalyticsEventType.STORY] = {
    name: AnalyticsEventType.STORY,
    allowedFor: ALLOWED_FOR_ALL_ROOT_TYPES,
    klass: function klass8(root) {
      return new AmpStoryEventTracker(root);
    }
  }, _Object$freeze[AnalyticsEventType.TIMER] = {
    name: AnalyticsEventType.TIMER,
    allowedFor: ALLOWED_FOR_ALL_ROOT_TYPES,
    klass: function klass9(root) {
      return new TimerEventTracker(root);
    }
  }, _Object$freeze[AnalyticsEventType.VIDEO] = {
    name: AnalyticsEventType.VIDEO,
    allowedFor: ALLOWED_FOR_ALL_ROOT_TYPES.concat(["timer"]),
    klass: function klass10(root) {
      return new VideoEventTracker(root);
    }
  }, _Object$freeze[AnalyticsEventType.VISIBLE] = {
    name: AnalyticsEventType.VISIBLE,
    allowedFor: ALLOWED_FOR_ALL_ROOT_TYPES.concat(["timer"]),
    klass: function klass11(root) {
      return new VisibilityTracker(root);
    }
  }, _Object$freeze));
  function isAmpStoryTriggerType(triggerType) {
    return triggerType.startsWith("story");
  }
  function assertUniqueSelectors(selectors) {
    userAssert(!isArray(selectors) || new Set(selectors).size === selectors.length, "Cannot have duplicate selectors in selectors list: %s", selectors);
  }
  function isVideoTriggerType(triggerType) {
    return triggerType.startsWith("video");
  }
  function isCustomBrowserTriggerType(triggerType) {
    return isEnumValue(BrowserEventType, triggerType);
  }
  function isReservedTriggerType(triggerType) {
    return isEnumValue(AnalyticsEventType, triggerType);
  }
  function getTrackerKeyName(eventType) {
    if (isVideoTriggerType(eventType)) {
      return AnalyticsEventType.VIDEO;
    }
    if (isCustomBrowserTriggerType(eventType)) {
      return AnalyticsEventType.BROWSER_EVENT;
    }
    if (isAmpStoryTriggerType(eventType)) {
      return AnalyticsEventType.STORY;
    }
    if (!isReservedTriggerType(eventType)) {
      return AnalyticsEventType.CUSTOM;
    }
    return hasOwn(TRACKER_TYPE, eventType) ? TRACKER_TYPE[eventType].name : eventType;
  }
  function getTrackerTypesForParentType(parentType) {
    var filtered = {};
    Object.keys(TRACKER_TYPE).forEach(function(key) {
      if (hasOwn(TRACKER_TYPE, key) && TRACKER_TYPE[key].allowedFor.indexOf(parentType) != -1) {
        filtered[key] = TRACKER_TYPE[key].klass;
      }
    });
    return filtered;
  }
  function mergeDataVars(target, eventVars) {
    var vars = getDataParamsFromAttributes(target, void 0, VARIABLE_DATA_ATTRIBUTE_KEY);
    deepMerge(vars, eventVars, 0);
    return vars;
  }
  var AnalyticsEvent = function AnalyticsEvent2(target, type, vars, enableDataVars) {
    if (vars === void 0) {
      vars = dict();
    }
    if (enableDataVars === void 0) {
      enableDataVars = true;
    }
    this["target"] = target;
    this["type"] = type;
    this["vars"] = enableDataVars ? mergeDataVars(target, vars) : vars;
  };
  var EventTracker = /* @__PURE__ */ function() {
    function EventTracker2(root) {
      this.root = root;
    }
    var _proto2 = EventTracker2.prototype;
    _proto2.dispose = function dispose() {
    };
    _proto2.add = function add(unusedContext, unusedEventType, unusedConfig, unusedListener) {
    };
    return EventTracker2;
  }();
  var BrowserEventTracker = /* @__PURE__ */ function(_EventTracker) {
    _inherits(BrowserEventTracker2, _EventTracker);
    var _super = _createSuper(BrowserEventTracker2);
    function BrowserEventTracker2(root) {
      var _this;
      _this = _super.call(this, root);
      _this.observables_ = new Observable();
      _this.listenerMap_ = dict({});
      _this.boundOnSession_ = _this.observables_.fire.bind(_this.observables_);
      _this.debouncedBoundOnSession_ = debounce(_this.root.ampdoc.win, _this.boundOnSession_, SESSION_DEBOUNCE_TIME_MS);
      return _this;
    }
    var _proto3 = BrowserEventTracker2.prototype;
    _proto3.dispose = function dispose() {
      var _this2 = this;
      var root = this.root.getRoot();
      Object.keys(this.listenerMap_).forEach(function(eventName) {
        root.removeEventListener(eventName, _this2.debouncedBoundOnSession_);
      });
      this.boundOnSession_ = null;
      this.observables_ = null;
    };
    _proto3.add = function add(context, eventType, config, listener) {
      userAssert(isExperimentOn(this.root.ampdoc.win, "analytics-browser-events"), 'expected global "analytics-browser-events" experiment to be enabled');
      var eventName = config["on"], _config$selectionMeth = config["selectionMethod"], selectionMethod = _config$selectionMeth === void 0 ? null : _config$selectionMeth, selector = config["selector"];
      userAssert(selector == null ? void 0 : selector.length, "Missing required selector on browser event trigger");
      assertUniqueSelectors(selector);
      var targetPromises = this.root.getElements(context, selector, selectionMethod, false);
      if (!this.listenerMap_[eventName]) {
        this.root.getRootElement().addEventListener(eventName, this.debouncedBoundOnSession_, true);
        this.listenerMap_[eventName] = true;
      }
      return this.observables_.add(function(event) {
        if (event.type !== eventName) {
          return;
        }
        targetPromises.then(function(targets) {
          targets.forEach(function(target) {
            var el = event.target;
            if (!target.contains(el)) {
              return;
            }
            listener(new AnalyticsEvent(target, eventName, {}));
          });
        });
      });
    };
    return BrowserEventTracker2;
  }(EventTracker);
  var CustomEventTracker = /* @__PURE__ */ function(_EventTracker2) {
    _inherits(CustomEventTracker2, _EventTracker2);
    var _super2 = _createSuper(CustomEventTracker2);
    function CustomEventTracker2(root) {
      var _this3;
      _this3 = _super2.call(this, root);
      _this3.observables_ = {};
      _this3.buffer_ = {};
      _this3.sandboxBuffer_ = {};
      setTimeout(function() {
        _this3.buffer_ = void 0;
      }, 1e4);
      return _this3;
    }
    var _proto4 = CustomEventTracker2.prototype;
    _proto4.dispose = function dispose() {
      this.buffer_ = void 0;
      this.sandboxBuffer_ = void 0;
      for (var k in this.observables_) {
        this.observables_[k].removeAll();
      }
    };
    _proto4.add = function add(context, eventType, config, listener) {
      var _this4 = this;
      var selector = config["selector"];
      if (!selector) {
        selector = ":root";
      }
      var selectionMethod = config["selectionMethod"] || null;
      var targetReady = this.root.getElement(context, selector, selectionMethod);
      var isSandboxEvent = eventType.startsWith("sandbox-");
      var buffer = isSandboxEvent ? this.sandboxBuffer_ && this.sandboxBuffer_[eventType] : this.buffer_ && this.buffer_[eventType];
      if (buffer) {
        var bufferLength = buffer.length;
        targetReady.then(function(target) {
          setTimeout(function() {
            for (var i = 0; i < bufferLength; i++) {
              var event = buffer[i];
              if (target.contains(event["target"])) {
                listener(event);
              }
            }
            if (isSandboxEvent) {
              _this4.sandboxBuffer_[eventType] = void 0;
            }
          }, 1);
        });
      }
      var observables = this.observables_[eventType];
      if (!observables) {
        observables = new Observable();
        this.observables_[eventType] = observables;
      }
      return this.observables_[eventType].add(function(event) {
        targetReady.then(function(target) {
          if (target.contains(event["target"])) {
            listener(event);
          }
        });
      });
    };
    _proto4.trigger = function trigger(event) {
      var eventType = event["type"];
      var isSandboxEvent = eventType.startsWith("sandbox-");
      var observables = this.observables_[eventType];
      if (observables) {
        observables.fire(event);
        if (isSandboxEvent) {
          return;
        }
      }
      if (isSandboxEvent) {
        this.sandboxBuffer_[eventType] = this.sandboxBuffer_[eventType] || [];
        this.sandboxBuffer_[eventType].push(event);
      } else {
        if (this.buffer_) {
          this.buffer_[eventType] = this.buffer_[eventType] || [];
          this.buffer_[eventType].push(event);
        }
      }
    };
    return CustomEventTracker2;
  }(EventTracker);
  var AmpStoryEventTracker = /* @__PURE__ */ function(_CustomEventTracker) {
    _inherits(AmpStoryEventTracker2, _CustomEventTracker);
    var _super3 = _createSuper(AmpStoryEventTracker2);
    function AmpStoryEventTracker2(root) {
      return _super3.call(this, root);
    }
    var _proto5 = AmpStoryEventTracker2.prototype;
    _proto5.add = function add(context, eventType, config, listener) {
      var _this5 = this;
      var rootTarget = this.root.getRootElement();
      var buffer = this.buffer_ && this.buffer_[eventType];
      if (buffer) {
        var bufferLength = buffer.length;
        for (var i = 0; i < bufferLength; i++) {
          var event = buffer[i];
          this.fireListener_(event, rootTarget, config, listener);
        }
      }
      var observables = this.observables_[eventType];
      if (!observables) {
        observables = new Observable();
        this.observables_[eventType] = observables;
      }
      return this.observables_[eventType].add(function(event2) {
        _this5.fireListener_(event2, rootTarget, config, listener);
      });
    };
    _proto5.fireListener_ = function fireListener_(event, rootTarget, config, listener) {
      var type = event["type"];
      var vars = event["vars"];
      var storySpec = config["storySpec"] || {};
      var repeat = storySpec["repeat"] === void 0 ? true : storySpec["repeat"];
      var eventDetails = vars["eventDetails"];
      var tagName = config["tagName"];
      if (tagName && eventDetails["tagName"] && tagName.toLowerCase() !== eventDetails["tagName"]) {
        return;
      }
      if (repeat === false && eventDetails["repeated"]) {
        return;
      }
      listener(new AnalyticsEvent(rootTarget, type, vars));
    };
    _proto5.trigger = function trigger(event) {
      var eventType = event["type"];
      var observables = this.observables_[eventType];
      if (observables) {
        observables.fire(event);
      }
      if (this.buffer_) {
        this.buffer_[eventType] = this.buffer_[eventType] || [];
        this.buffer_[eventType].push(event);
      }
    };
    return AmpStoryEventTracker2;
  }(CustomEventTracker);
  var ClickEventTracker = /* @__PURE__ */ function(_EventTracker3) {
    _inherits(ClickEventTracker2, _EventTracker3);
    var _super4 = _createSuper(ClickEventTracker2);
    function ClickEventTracker2(root) {
      var _this6;
      _this6 = _super4.call(this, root);
      _this6.clickObservable_ = new Observable();
      _this6.boundOnClick_ = _this6.clickObservable_.fire.bind(_this6.clickObservable_);
      _this6.root.getRoot().addEventListener("click", _this6.boundOnClick_);
      return _this6;
    }
    var _proto6 = ClickEventTracker2.prototype;
    _proto6.dispose = function dispose() {
      this.root.getRoot().removeEventListener("click", this.boundOnClick_);
      this.clickObservable_.removeAll();
    };
    _proto6.add = function add(context, eventType, config, listener) {
      var selector = userAssert(config["selector"], "Missing required selector on click trigger");
      var selectionMethod = config["selectionMethod"] || null;
      return this.clickObservable_.add(this.root.createSelectiveListener(this.handleClick_.bind(this, listener), context.parentElement || context, selector, selectionMethod));
    };
    _proto6.handleClick_ = function handleClick_(listener, target, unusedEvent) {
      listener(new AnalyticsEvent(target, "click"));
    };
    return ClickEventTracker2;
  }(EventTracker);
  var ScrollEventTracker = /* @__PURE__ */ function(_EventTracker4) {
    _inherits(ScrollEventTracker2, _EventTracker4);
    var _super5 = _createSuper(ScrollEventTracker2);
    function ScrollEventTracker2(root) {
      var _this7;
      _this7 = _super5.call(this, root);
      _this7.root_ = root;
      _this7.boundScrollHandler_ = null;
      return _this7;
    }
    var _proto7 = ScrollEventTracker2.prototype;
    _proto7.dispose = function dispose() {
      if (this.boundScrollHandler_ !== null) {
        this.root_.getScrollManager().removeScrollHandler(this.boundScrollHandler_);
        this.boundScrollHandler_ = null;
      }
    };
    _proto7.add = function add(context, eventType, config, listener) {
      if (!config["scrollSpec"]) {
        user().error(TAG7, "Missing scrollSpec on scroll trigger.");
        return NO_UNLISTEN;
      }
      if (!Array.isArray(config["scrollSpec"]["verticalBoundaries"]) && !Array.isArray(config["scrollSpec"]["horizontalBoundaries"])) {
        user().error(TAG7, "Boundaries are required for the scroll trigger to work.");
        return NO_UNLISTEN;
      }
      var boundsV = this.normalizeBoundaries_(config["scrollSpec"]["verticalBoundaries"]);
      var boundsH = this.normalizeBoundaries_(config["scrollSpec"]["horizontalBoundaries"]);
      var useInitialPageSize = !!config["scrollSpec"]["useInitialPageSize"];
      this.boundScrollHandler_ = this.scrollHandler_.bind(this, boundsH, boundsV, useInitialPageSize, listener);
      return this.root_.getScrollManager().addScrollHandler(this.boundScrollHandler_);
    };
    _proto7.scrollHandler_ = function scrollHandler_(boundsH, boundsV, useInitialPageSize, listener, e) {
      var _ref = useInitialPageSize ? e.initialSize : e, scrollHeight = _ref.scrollHeight, scrollWidth = _ref.scrollWidth;
      this.triggerScrollEvents_(boundsV, (e.top + e.height) * 100 / scrollHeight, VAR_V_SCROLL_BOUNDARY, listener);
      this.triggerScrollEvents_(boundsH, (e.left + e.width) * 100 / scrollWidth, VAR_H_SCROLL_BOUNDARY, listener);
    };
    _proto7.normalizeBoundaries_ = function normalizeBoundaries_(bounds) {
      var result = dict({});
      if (!bounds || !Array.isArray(bounds)) {
        return result;
      }
      for (var b = 0; b < bounds.length; b++) {
        var bound = bounds[b];
        if (typeof bound !== "number" || !isFinite(bound)) {
          user().error(TAG7, "Scroll trigger boundaries must be finite.");
          return result;
        }
        bound = Math.min(Math.round(bound / SCROLL_PRECISION_PERCENT) * SCROLL_PRECISION_PERCENT, 100);
        result[bound] = false;
      }
      return result;
    };
    _proto7.triggerScrollEvents_ = function triggerScrollEvents_(bounds, scrollPos, varName, listener) {
      if (!scrollPos) {
        return;
      }
      for (var b in bounds) {
        if (!hasOwn(bounds, b)) {
          continue;
        }
        var bound = parseInt(b, 10);
        if (bound > scrollPos || bounds[bound]) {
          continue;
        }
        bounds[bound] = true;
        var vars = dict();
        vars[varName] = b;
        listener(new AnalyticsEvent(this.root_.getRootElement(), AnalyticsEventType.SCROLL, vars, false));
      }
    };
    return ScrollEventTracker2;
  }(EventTracker);
  var SignalTracker = /* @__PURE__ */ function(_EventTracker5) {
    _inherits(SignalTracker2, _EventTracker5);
    var _super6 = _createSuper(SignalTracker2);
    function SignalTracker2(root) {
      return _super6.call(this, root);
    }
    var _proto8 = SignalTracker2.prototype;
    _proto8.dispose = function dispose() {
    };
    _proto8.add = function add(context, eventType, config, listener) {
      var _this8 = this;
      var target;
      var signalsPromise;
      var selector = config["selector"] || ":root";
      if (selector == ":root" || selector == ":host") {
        target = this.root.getRootElement();
        signalsPromise = this.getRootSignal(eventType);
      } else {
        var selectionMethod = config["selectionMethod"];
        signalsPromise = this.root.getAmpElement(context.parentElement || context, selector, selectionMethod).then(function(element) {
          target = element;
          return _this8.getElementSignal(eventType, target);
        });
      }
      signalsPromise.then(function() {
        listener(new AnalyticsEvent(target, eventType));
      });
      return NO_UNLISTEN;
    };
    _proto8.getRootSignal = function getRootSignal(eventType) {
      return this.root.signals().whenSignal(eventType);
    };
    _proto8.getElementSignal = function getElementSignal(eventType, element) {
      if (typeof element.signals != "function") {
        return resolvedPromise();
      }
      return element.signals().whenSignal(eventType);
    };
    return SignalTracker2;
  }(EventTracker);
  var IniLoadTracker = /* @__PURE__ */ function(_EventTracker6) {
    _inherits(IniLoadTracker2, _EventTracker6);
    var _super7 = _createSuper(IniLoadTracker2);
    function IniLoadTracker2(root) {
      return _super7.call(this, root);
    }
    var _proto9 = IniLoadTracker2.prototype;
    _proto9.dispose = function dispose() {
    };
    _proto9.add = function add(context, eventType, config, listener) {
      var _this9 = this;
      var target;
      var promise;
      var selector = config["selector"] || ":root";
      if (selector == ":root" || selector == ":host") {
        target = this.root.getRootElement();
        promise = this.getRootSignal();
      } else {
        var selectionMethod = config["selectionMethod"];
        promise = this.root.getAmpElement(context.parentElement || context, selector, selectionMethod).then(function(element) {
          target = element;
          return _this9.getElementSignal("ini-load", target);
        });
      }
      promise.then(function() {
        listener(new AnalyticsEvent(target, eventType));
      });
      return NO_UNLISTEN;
    };
    _proto9.getRootSignal = function getRootSignal() {
      return this.root.whenIniLoaded();
    };
    _proto9.getElementSignal = function getElementSignal(unusedEventType, element) {
      if (typeof element.signals != "function") {
        return resolvedPromise();
      }
      var signals = element.signals();
      return Promise.race([signals.whenSignal(CommonSignals_Enum.INI_LOAD), signals.whenSignal(CommonSignals_Enum.LOAD_END)]);
    };
    return IniLoadTracker2;
  }(EventTracker);
  var TimerEventHandler = /* @__PURE__ */ function() {
    function TimerEventHandler2(timerSpec, opt_startBuilder, opt_stopBuilder) {
      this.intervalId_ = void 0;
      userAssert("interval" in timerSpec, "Timer interval specification required");
      this.intervalLength_ = Number(timerSpec["interval"]) || 0;
      userAssert(this.intervalLength_ >= MIN_TIMER_INTERVAL_SECONDS, "Bad timer interval specification");
      this.maxTimerLength_ = "maxTimerLength" in timerSpec ? Number(timerSpec["maxTimerLength"]) : DEFAULT_MAX_TIMER_LENGTH_SECONDS;
      userAssert(this.maxTimerLength_ > 0, "Bad maxTimerLength specification");
      this.maxTimerInSpec_ = "maxTimerLength" in timerSpec;
      this.callImmediate_ = "immediate" in timerSpec ? Boolean(timerSpec["immediate"]) : true;
      this.intervalCallback_ = null;
      this.unlistenStart_ = null;
      this.unlistenStop_ = null;
      this.startBuilder_ = opt_startBuilder || null;
      this.stopBuilder_ = opt_stopBuilder || null;
      this.startTime_ = void 0;
      this.lastRequestTime_ = void 0;
    }
    var _proto10 = TimerEventHandler2.prototype;
    _proto10.init = function init(startTimer) {
      if (!this.startBuilder_) {
        startTimer();
      } else {
        this.listenForStart_();
      }
    };
    _proto10.dispose = function dispose() {
      this.unlistenForStop_();
      this.unlistenForStart_();
    };
    _proto10.listenForStart_ = function listenForStart_() {
      if (this.startBuilder_) {
        this.unlistenStart_ = this.startBuilder_();
      }
    };
    _proto10.unlistenForStart_ = function unlistenForStart_() {
      if (this.unlistenStart_) {
        this.unlistenStart_();
        this.unlistenStart_ = null;
      }
    };
    _proto10.listenForStop_ = function listenForStop_() {
      if (this.stopBuilder_) {
        try {
          this.unlistenStop_ = this.stopBuilder_();
        } catch (e) {
          this.dispose();
          throw e;
        }
      }
    };
    _proto10.unlistenForStop_ = function unlistenForStop_() {
      if (this.unlistenStop_) {
        this.unlistenStop_();
        this.unlistenStop_ = null;
      }
    };
    _proto10.isRunning = function isRunning() {
      return !!this.intervalId_;
    };
    _proto10.startIntervalInWindow = function startIntervalInWindow(win, timerCallback, timeoutCallback) {
      if (this.isRunning()) {
        return;
      }
      this.startTime_ = Date.now();
      this.lastRequestTime_ = void 0;
      this.intervalCallback_ = timerCallback;
      this.intervalId_ = win.setInterval(function() {
        timerCallback();
      }, this.intervalLength_ * 1e3);
      if (!this.stopBuilder_ || this.stopBuilder_ && this.maxTimerInSpec_) {
        win.setTimeout(function() {
          timeoutCallback();
        }, this.maxTimerLength_ * 1e3);
      }
      this.unlistenForStart_();
      if (this.callImmediate_) {
        timerCallback();
      }
      this.listenForStop_();
    };
    _proto10.stopTimer_ = function stopTimer_(win) {
      if (!this.isRunning()) {
        return;
      }
      this.intervalCallback_();
      this.intervalCallback_ = null;
      win.clearInterval(this.intervalId_);
      this.intervalId_ = void 0;
      this.lastRequestTime_ = void 0;
      this.unlistenForStop_();
      this.listenForStart_();
    };
    _proto10.calculateDuration_ = function calculateDuration_() {
      if (this.startTime_) {
        return Date.now() - (this.lastRequestTime_ || this.startTime_);
      }
      return 0;
    };
    _proto10.getTimerVars = function getTimerVars() {
      var timerDuration = 0;
      if (this.isRunning()) {
        timerDuration = this.calculateDuration_();
        this.lastRequestTime_ = Date.now();
      }
      return dict({
        "timerDuration": timerDuration,
        "timerStart": this.startTime_ || 0
      });
    };
    return TimerEventHandler2;
  }();
  var TimerEventTracker = /* @__PURE__ */ function(_EventTracker7) {
    _inherits(TimerEventTracker2, _EventTracker7);
    var _super8 = _createSuper(TimerEventTracker2);
    function TimerEventTracker2(root) {
      var _this10;
      _this10 = _super8.call(this, root);
      _this10.trackers_ = {};
      _this10.timerIdSequence_ = 1;
      return _this10;
    }
    var _proto11 = TimerEventTracker2.prototype;
    _proto11.getTrackedTimerKeys = function getTrackedTimerKeys() {
      return Object.keys(this.trackers_);
    };
    _proto11.dispose = function dispose() {
      var _this11 = this;
      this.getTrackedTimerKeys().forEach(function(timerId) {
        _this11.removeTracker_(timerId);
      });
    };
    _proto11.add = function add(context, eventType, config, listener) {
      var _this12 = this;
      var timerSpec = config["timerSpec"];
      userAssert(timerSpec && typeof timerSpec == "object", "Bad timer specification");
      var timerStart = "startSpec" in timerSpec ? timerSpec["startSpec"] : null;
      userAssert(!timerStart || typeof timerStart == "object", "Bad timer start specification");
      var timerStop = "stopSpec" in timerSpec ? timerSpec["stopSpec"] : null;
      userAssert(!timerStart && !timerStop || typeof timerStop == "object", "Bad timer stop specification");
      var timerId = this.generateTimerId_();
      var startBuilder;
      var stopBuilder;
      if (timerStart) {
        var startTracker = this.getTracker_(timerStart);
        userAssert(startTracker, "Cannot track timer start");
        startBuilder = startTracker.add.bind(startTracker, context, timerStart["on"], timerStart, this.handleTimerToggle_.bind(this, timerId, eventType, listener));
      }
      if (timerStop) {
        var stopTracker = this.getTracker_(timerStop);
        userAssert(stopTracker, "Cannot track timer stop");
        stopBuilder = stopTracker.add.bind(stopTracker, context, timerStop["on"], timerStop, this.handleTimerToggle_.bind(this, timerId, eventType, listener));
      }
      var timerHandler = new TimerEventHandler(timerSpec, startBuilder, stopBuilder);
      this.trackers_[timerId] = timerHandler;
      timerHandler.init(this.startTimer_.bind(this, timerId, eventType, listener));
      return function() {
        _this12.removeTracker_(timerId);
      };
    };
    _proto11.generateTimerId_ = function generateTimerId_() {
      return ++this.timerIdSequence_;
    };
    _proto11.getTracker_ = function getTracker_(config) {
      var eventType = user().assertString(config["on"]);
      var trackerKey = getTrackerKeyName(eventType);
      return this.root.getTrackerForAllowlist(trackerKey, getTrackerTypesForParentType("timer"));
    };
    _proto11.handleTimerToggle_ = function handleTimerToggle_(timerId, eventType, listener) {
      var timerHandler = this.trackers_[timerId];
      if (!timerHandler) {
        return;
      }
      if (timerHandler.isRunning()) {
        this.stopTimer_(timerId);
      } else {
        this.startTimer_(timerId, eventType, listener);
      }
    };
    _proto11.startTimer_ = function startTimer_(timerId, eventType, listener) {
      var _this13 = this;
      var timerHandler = this.trackers_[timerId];
      var timerCallback = function timerCallback2() {
        listener(_this13.createEvent_(timerId, eventType));
      };
      timerHandler.startIntervalInWindow(this.root.ampdoc.win, timerCallback, this.removeTracker_.bind(this, timerId));
    };
    _proto11.stopTimer_ = function stopTimer_(timerId) {
      this.trackers_[timerId].stopTimer_(this.root.ampdoc.win);
    };
    _proto11.createEvent_ = function createEvent_(timerId, eventType) {
      return new AnalyticsEvent(this.root.getRootElement(), eventType, this.trackers_[timerId].getTimerVars(), false);
    };
    _proto11.removeTracker_ = function removeTracker_(timerId) {
      if (this.trackers_[timerId]) {
        this.stopTimer_(timerId);
        this.trackers_[timerId].dispose();
        delete this.trackers_[timerId];
      }
    };
    return TimerEventTracker2;
  }(EventTracker);
  var VideoEventTracker = /* @__PURE__ */ function(_EventTracker8) {
    _inherits(VideoEventTracker2, _EventTracker8);
    var _super9 = _createSuper(VideoEventTracker2);
    function VideoEventTracker2(root) {
      var _this14;
      _this14 = _super9.call(this, root);
      _this14.sessionObservable_ = new Observable();
      _this14.boundOnSession_ = _this14.sessionObservable_.fire.bind(_this14.sessionObservable_);
      enumValues(VideoAnalyticsEvents_Enum).forEach(function(value) {
        _this14.root.getRoot().addEventListener(value, _this14.boundOnSession_);
      });
      return _this14;
    }
    var _proto12 = VideoEventTracker2.prototype;
    _proto12.dispose = function dispose() {
      var _this15 = this;
      var root = this.root.getRoot();
      enumValues(VideoAnalyticsEvents_Enum).forEach(function(value) {
        root.removeEventListener(value, _this15.boundOnSession_);
      });
      this.boundOnSession_ = null;
      this.sessionObservable_ = null;
    };
    _proto12.add = function add(context, eventType, config, listener) {
      var videoSpec = config["videoSpec"] || {};
      var selector = userAssert(config["selector"] || videoSpec["selector"], "Missing required selector on video trigger");
      userAssert(selector.length, "Missing required selector on video trigger");
      assertUniqueSelectors(selector);
      var selectionMethod = config["selectionMethod"] || null;
      var targetPromises = this.root.getElements(context, selector, selectionMethod, false);
      var endSessionWhenInvisible = videoSpec["end-session-when-invisible"];
      var excludeAutoplay = videoSpec["exclude-autoplay"];
      var interval = videoSpec["interval"];
      var percentages = videoSpec["percentages"];
      var on = config["on"];
      var percentageInterval = 5;
      var intervalCounter = 0;
      var lastPercentage = 0;
      return this.sessionObservable_.add(function(event) {
        var type = event.type;
        var details = getData(event);
        var normalizedType = normalizeVideoEventType(type, details);
        if (normalizedType !== on) {
          return;
        }
        if (normalizedType === VideoAnalyticsEvents_Enum.SECONDS_PLAYED && !interval) {
          user().error(TAG7, "video-seconds-played requires interval spec with non-zero value");
          return;
        }
        if (normalizedType === VideoAnalyticsEvents_Enum.SECONDS_PLAYED) {
          intervalCounter++;
          if (intervalCounter % interval !== 0) {
            return;
          }
        }
        if (normalizedType === VideoAnalyticsEvents_Enum.PERCENTAGE_PLAYED) {
          if (!percentages) {
            user().error(TAG7, "video-percentage-played requires percentages spec.");
            return;
          }
          for (var i = 0; i < percentages.length; i++) {
            var percentage = percentages[i];
            if (percentage <= 0 || percentage % percentageInterval != 0) {
              user().error(TAG7, "Percentages must be set in increments of %s with non-zero values", percentageInterval);
              return;
            }
          }
          var normalizedPercentage = details["normalizedPercentage"];
          var normalizedPercentageInt = parseInt(normalizedPercentage, 10);
          devAssert2(isFiniteNumber(normalizedPercentageInt));
          devAssert2(normalizedPercentageInt % percentageInterval == 0);
          if (lastPercentage == normalizedPercentageInt && percentages.length > 1) {
            return;
          }
          if (percentages.indexOf(normalizedPercentageInt) < 0) {
            return;
          }
          lastPercentage = normalizedPercentageInt;
        }
        if (type === VideoAnalyticsEvents_Enum.SESSION_VISIBLE && !endSessionWhenInvisible) {
          return;
        }
        if (excludeAutoplay && details["state"] === PlayingStates_Enum.PLAYING_AUTO) {
          return;
        }
        var el = dev().assertElement(event.target, "No target specified by video session event.");
        targetPromises.then(function(targets) {
          targets.forEach(function(target) {
            if (!target.contains(el)) {
              return;
            }
            var normalizedDetails = removeInternalVars(details);
            listener(new AnalyticsEvent(target, normalizedType, normalizedDetails));
          });
        });
      });
    };
    return VideoEventTracker2;
  }(EventTracker);
  function normalizeVideoEventType(type, details) {
    if (type == VideoAnalyticsEvents_Enum.SESSION_VISIBLE) {
      return VideoAnalyticsEvents_Enum.SESSION;
    }
    if (type == VideoAnalyticsEvents_Enum.CUSTOM) {
      return dev().assertString(details[videoAnalyticsCustomEventTypeKey]);
    }
    return type;
  }
  function removeInternalVars(details) {
    if (!details) {
      return dict();
    }
    var clean = _extends3({}, details);
    delete clean[videoAnalyticsCustomEventTypeKey];
    return clean;
  }
  var VisibilityTracker = /* @__PURE__ */ function(_EventTracker9) {
    _inherits(VisibilityTracker2, _EventTracker9);
    var _super10 = _createSuper(VisibilityTracker2);
    function VisibilityTracker2(root) {
      var _this16;
      _this16 = _super10.call(this, root);
      _this16.waitForTrackers_ = {};
      return _this16;
    }
    var _proto13 = VisibilityTracker2.prototype;
    _proto13.dispose = function dispose() {
    };
    _proto13.add = function add(context, eventType, config, listener) {
      var _this17 = this;
      var visibilitySpec = config["visibilitySpec"] || {};
      var selector = config["selector"] || visibilitySpec["selector"];
      var waitForSpec = visibilitySpec["waitFor"];
      var reportWhenSpec = visibilitySpec["reportWhen"];
      var createReportReadyPromiseFunc = null;
      if (reportWhenSpec) {
        userAssert(!visibilitySpec["repeat"], "reportWhen and repeat are mutually exclusive.");
      }
      if (eventType === AnalyticsEventType.HIDDEN) {
        if (reportWhenSpec) {
          user().error(TAG7, 'ReportWhen should not be defined when eventType is "hidden"');
        }
        reportWhenSpec = "documentHidden";
      }
      var visibilityManager = this.root.getVisibilityManager();
      if (reportWhenSpec == "documentHidden") {
        createReportReadyPromiseFunc = this.createReportReadyPromiseForDocumentHidden_.bind(this);
      } else if (reportWhenSpec == "documentExit") {
        createReportReadyPromiseFunc = this.createReportReadyPromiseForDocumentExit_.bind(this);
      } else {
        userAssert(!reportWhenSpec, 'reportWhen value "%s" not supported.', reportWhenSpec);
      }
      if (!selector || selector == ":root" || selector == ":host") {
        var readyPromiseWaitForSpec = waitForSpec || (selector ? "ini-load" : "none");
        return visibilityManager.listenRoot(visibilitySpec, this.getReadyPromise(readyPromiseWaitForSpec), createReportReadyPromiseFunc, this.onEvent_.bind(this, eventType, listener, this.root.getRootElement()));
      }
      var selectionMethod = config["selectionMethod"] || visibilitySpec["selectionMethod"];
      assertUniqueSelectors(selector);
      var unlistenPromise = this.root.getElements(context.parentElement || context, selector, selectionMethod).then(function(elements) {
        var unlistenCallbacks = [];
        for (var i = 0; i < elements.length; i++) {
          unlistenCallbacks.push(visibilityManager.listenElement(elements[i], visibilitySpec, _this17.getReadyPromise(waitForSpec, elements[i]), createReportReadyPromiseFunc, _this17.onEvent_.bind(_this17, eventType, listener, elements[i])));
        }
        return unlistenCallbacks;
      });
      return function() {
        unlistenPromise.then(function(unlistenCallbacks) {
          for (var i = 0; i < unlistenCallbacks.length; i++) {
            unlistenCallbacks[i]();
          }
        });
      };
    };
    _proto13.createReportReadyPromiseForDocumentHidden_ = function createReportReadyPromiseForDocumentHidden_() {
      var ampdoc2 = this.root.ampdoc;
      if (!ampdoc2.isVisible()) {
        return resolvedPromise();
      }
      return new Promise(function(resolve) {
        ampdoc2.onVisibilityChanged(function() {
          if (!ampdoc2.isVisible()) {
            resolve();
          }
        });
      });
    };
    _proto13.createReportReadyPromiseForDocumentExit_ = function createReportReadyPromiseForDocumentExit_() {
      var deferred = new Deferred();
      var win = this.root.ampdoc.win;
      var _unloadListener, _pageHideListener;
      if (!this.supportsPageHide_()) {
        win.addEventListener("unload", _unloadListener = function unloadListener() {
          win.removeEventListener("unload", _unloadListener);
          deferred.resolve();
        });
      }
      win.addEventListener("pagehide", _pageHideListener = function pageHideListener() {
        win.removeEventListener("pagehide", _pageHideListener);
        deferred.resolve();
      });
      return deferred.promise;
    };
    _proto13.supportsPageHide_ = function supportsPageHide_() {
      return "onpagehide" in this.root.ampdoc.win;
    };
    _proto13.getReadyPromise = function getReadyPromise(waitForSpec, opt_element) {
      if (opt_element) {
        if (!isAmpElement(opt_element)) {
          userAssert(!waitForSpec || waitForSpec == "none", "waitFor for non-AMP elements must be none or null. Found %s", waitForSpec);
        } else {
          waitForSpec = waitForSpec || "ini-load";
        }
      }
      if (!waitForSpec || waitForSpec == "none") {
        return null;
      }
      var trackerAllowlist = getTrackerTypesForParentType("visible");
      userAssert(trackerAllowlist[waitForSpec] !== void 0, "waitFor value %s not supported", waitForSpec);
      var waitForTracker = this.waitForTrackers_[waitForSpec] || this.root.getTrackerForAllowlist(waitForSpec, trackerAllowlist);
      if (waitForTracker) {
        this.waitForTrackers_[waitForSpec] = waitForTracker;
      } else {
        return null;
      }
      return opt_element ? waitForTracker.getElementSignal(waitForSpec, opt_element) : waitForTracker.getRootSignal(waitForSpec);
    };
    _proto13.onEvent_ = function onEvent_(eventType, listener, target, state) {
      var attr = getDataParamsFromAttributes(target, void 0, VARIABLE_DATA_ATTRIBUTE_KEY);
      for (var key in attr) {
        state[key] = attr[key];
      }
      listener(new AnalyticsEvent(target, eventType, state, false));
    };
    return VisibilityTracker2;
  }(EventTracker);

  // src/core/data-structures/priority-queue.js
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var PriorityQueue = /* @__PURE__ */ function() {
    function PriorityQueue2() {
      this.queue_ = [];
    }
    var _proto = PriorityQueue2.prototype;
    _proto.peek = function peek() {
      var l = this.length;
      if (!l) {
        return null;
      }
      return this.queue_[l - 1].item;
    };
    _proto.enqueue = function enqueue(item, priority) {
      if (isNaN(priority)) {
        throw new Error("Priority must not be NaN.");
      }
      var i = this.binarySearch_(priority);
      this.queue_.splice(i, 0, {
        item: item,
        priority: priority
      });
    };
    _proto.binarySearch_ = function binarySearch_(target) {
      var i = -1;
      var lo = 0;
      var hi = this.length;
      while (lo <= hi) {
        i = Math.floor((lo + hi) / 2);
        if (i === this.length) {
          break;
        }
        if (this.queue_[i].priority < target) {
          lo = i + 1;
        } else if (i > 0 && this.queue_[i - 1].priority >= target) {
          hi = i - 1;
        } else {
          break;
        }
      }
      return i;
    };
    _proto.forEach = function forEach(callback) {
      var index = this.length;
      while (index--) {
        callback(this.queue_[index].item);
      }
    };
    _proto.dequeue = function dequeue() {
      if (!this.length) {
        return null;
      }
      return this.queue_.pop().item;
    };
    _createClass(PriorityQueue2, [{
      key: "length",
      get: function get() {
        return this.queue_.length;
      }
    }]);
    return PriorityQueue2;
  }();

  // src/style-installer.js
  var bodyMadeVisible = false;
  function makeBodyVisibleRecovery(doc) {
    devAssert2(doc.defaultView, "Passed in document must have a defaultView");
    if (bodyMadeVisible) {
      return;
    }
    bodyMadeVisible = true;
    setBodyVisibleStyles(doc);
  }
  function setBodyVisibleStyles(doc) {
    setStyles(dev().assertElement(doc.body), {
      opacity: 1,
      visibility: "visible",
      "animation": "none"
    });
  }

  // src/chunk.js
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf2(subClass, superClass);
  }
  function _setPrototypeOf2(o, p) {
    _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
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
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf2(o);
  }
  var TAG8 = "CHUNK";
  var deactivated = /nochunking=1/.test(self.location.hash);
  var allowLongTasks = false;
  var resolved2 = resolvedPromise();
  function chunkServiceForDoc(elementOrAmpDoc) {
    registerServiceBuilderForDoc(elementOrAmpDoc, "chunk", Chunks);
    return getServiceForDoc(elementOrAmpDoc, "chunk");
  }
  function chunk(elementOrAmpDoc, fn, priority) {
    if (deactivated) {
      resolved2.then(fn);
      return;
    }
    var service = chunkServiceForDoc(elementOrAmpDoc);
    service.run(fn, priority);
  }
  var ChunkPriority_Enum = {
    HIGH: 20,
    LOW: 10,
    BACKGROUND: 0
  };
  var TaskState_Enum = {
    NOT_RUN: "not_run",
    RUN: "run"
  };
  var Task = /* @__PURE__ */ function() {
    function Task2(fn) {
      this.state = TaskState_Enum.NOT_RUN;
      this.fn_ = fn;
    }
    var _proto = Task2.prototype;
    _proto.runTask_ = function runTask_(idleDeadline) {
      if (this.state == TaskState_Enum.RUN) {
        return;
      }
      this.state = TaskState_Enum.RUN;
      try {
        this.fn_(idleDeadline);
      } catch (e) {
        this.onTaskError_(e);
        throw e;
      }
    };
    _proto.getName_ = function getName_() {
      return this.fn_.displayName || this.fn_.name;
    };
    _proto.onTaskError_ = function onTaskError_(unusedError) {
    };
    _proto.immediateTriggerCondition_ = function immediateTriggerCondition_() {
      return false;
    };
    _proto.useRequestIdleCallback_ = function useRequestIdleCallback_() {
      return false;
    };
    return Task2;
  }();
  var StartupTask = /* @__PURE__ */ function(_Task) {
    _inherits2(StartupTask2, _Task);
    var _super = _createSuper2(StartupTask2);
    function StartupTask2(fn, win, chunks) {
      var _this;
      _this = _super.call(this, fn);
      _this.chunks_ = chunks;
      return _this;
    }
    var _proto2 = StartupTask2.prototype;
    _proto2.onTaskError_ = function onTaskError_(unusedError) {
      makeBodyVisibleRecovery(self.document);
    };
    _proto2.immediateTriggerCondition_ = function immediateTriggerCondition_() {
      return this.isVisible_();
    };
    _proto2.useRequestIdleCallback_ = function useRequestIdleCallback_() {
      return this.chunks_.coreReady_;
    };
    _proto2.isVisible_ = function isVisible_() {
      return this.chunks_.ampdoc.isVisible();
    };
    return StartupTask2;
  }(Task);
  var Chunks = /* @__PURE__ */ function() {
    function Chunks2(ampDoc) {
      var _this2 = this;
      this.ampdoc = ampDoc;
      this.win_ = ampDoc.win;
      this.tasks_ = new PriorityQueue();
      this.boundExecute_ = this.execute_.bind(this);
      this.durationOfLastExecution_ = 0;
      this.supportsInputPending_ = !!(this.win_.navigator.scheduling && this.win_.navigator.scheduling.isInputPending);
      this.scheduledImmediateInvocation_ = false;
      this.bodyIsVisible_ = this.win_.document.documentElement.hasAttribute("i-amphtml-no-boilerplate");
      this.win_.addEventListener("message", function(e) {
        if (getData(e) == "amp-macro-task") {
          _this2.execute_(null);
        }
      });
      this.coreReady_ = false;
      Services.viewerPromiseForDoc(ampDoc).then(function() {
        _this2.coreReady_ = true;
      });
      ampDoc.onVisibilityChanged(function() {
        if (ampDoc.isVisible()) {
          _this2.schedule_();
        }
      });
    }
    var _proto3 = Chunks2.prototype;
    _proto3.run = function run(fn, priority) {
      var t = new Task(fn);
      this.enqueueTask_(t, priority);
    };
    _proto3.runForStartup = function runForStartup(fn) {
      var t = new StartupTask(fn, this.win_, this);
      this.enqueueTask_(t, Number.POSITIVE_INFINITY);
    };
    _proto3.enqueueTask_ = function enqueueTask_(task, priority) {
      this.tasks_.enqueue(task, priority);
      this.schedule_();
    };
    _proto3.nextTask_ = function nextTask_(opt_dequeue) {
      var t = this.tasks_.peek();
      while (t && t.state !== TaskState_Enum.NOT_RUN) {
        this.tasks_.dequeue();
        t = this.tasks_.peek();
      }
      if (t && opt_dequeue) {
        this.tasks_.dequeue();
      }
      return t;
    };
    _proto3.execute_ = function execute_(idleDeadline) {
      var _this3 = this;
      var t = this.nextTask_(true);
      if (!t) {
        this.scheduledImmediateInvocation_ = false;
        this.durationOfLastExecution_ = 0;
        return false;
      }
      var before;
      try {
        before = Date.now();
        t.runTask_(idleDeadline);
      } finally {
        resolved2.then().then().then().then().then().then().then().then().then(function() {
          _this3.scheduledImmediateInvocation_ = false;
          _this3.durationOfLastExecution_ += Date.now() - before;
          dev().fine(TAG8, t.getName_(), "Chunk duration", Date.now() - before, _this3.durationOfLastExecution_);
          _this3.schedule_();
        });
      }
      return true;
    };
    _proto3.executeAsap_ = function executeAsap_(idleDeadline) {
      var _this4 = this;
      if (!allowLongTasks && this.bodyIsVisible_ && (this.supportsInputPending_ ? this.win_.navigator.scheduling.isInputPending() : this.durationOfLastExecution_ > 5)) {
        this.durationOfLastExecution_ = 0;
        this.requestMacroTask_();
        return;
      }
      resolved2.then(function() {
        _this4.boundExecute_(idleDeadline);
      });
    };
    _proto3.schedule_ = function schedule_() {
      if (this.scheduledImmediateInvocation_) {
        return;
      }
      var nextTask = this.nextTask_();
      if (!nextTask) {
        return;
      }
      if (nextTask.immediateTriggerCondition_()) {
        this.scheduledImmediateInvocation_ = true;
        this.executeAsap_(null);
        return;
      }
      if (nextTask.useRequestIdleCallback_() && this.win_.requestIdleCallback) {
        onIdle(this.win_, 15, 2e3, this.boundExecute_);
        return;
      }
      this.requestMacroTask_();
    };
    _proto3.requestMacroTask_ = function requestMacroTask_() {
      this.win_.postMessage("amp-macro-task", "*");
    };
    return Chunks2;
  }();
  function onIdle(win, minimumTimeRemaining, timeout, fn) {
    var startTime = Date.now();
    function rIC(info) {
      if (info.timeRemaining() < minimumTimeRemaining) {
        var remainingTimeout = timeout - (Date.now() - startTime);
        if (remainingTimeout <= 0 || info.didTimeout) {
          dev().fine(TAG8, "Timed out", timeout, info.didTimeout);
          fn(info);
        } else {
          dev().fine(TAG8, "Rescheduling with", remainingTimeout, info.timeRemaining());
          win.requestIdleCallback(rIC, {
            timeout: remainingTimeout
          });
        }
      } else {
        dev().fine(TAG8, "Running idle callback with ", minimumTimeRemaining);
        fn(info);
      }
    }
    win.requestIdleCallback(rIC, {
      timeout: timeout
    });
  }

  // src/service/cid-api.js
  var HOUR = 60 * 60 * 1e3;
  var DAY = 24 * HOUR;
  var YEAR = 365 * DAY;

  // src/service/cid-impl.js
  var ONE_DAY_MILLIS = 24 * 3600 * 1e3;
  var BASE_CID_MAX_AGE_MILLIS = 365 * ONE_DAY_MILLIS;

  // extensions/amp-analytics/0.1/cookie-writer.js
  var TAG9 = "amp-analytics/cookie-writer";
  var RESERVED_KEYS = {
    "referrerDomains": true,
    "enabled": true,
    "cookiePath": true,
    "cookieMaxAge": true,
    "cookieSecure": true,
    "cookieDomain": true,
    "sameSite": true,
    "SameSite": true,
    "secure": true
  };
  var CookieWriter = /* @__PURE__ */ function() {
    function CookieWriter2(win, element, config) {
      this.win_ = win;
      this.element_ = element;
      this.urlReplacementService_ = Services.urlReplacementsForDoc(element);
      this.writeDeferred_ = null;
      this.config_ = config;
      this.bindings_ = variableServiceForDoc(element).getMacros(element);
    }
    var _proto = CookieWriter2.prototype;
    _proto.write = function write() {
      var _this = this;
      if (!this.writeDeferred_) {
        this.writeDeferred_ = new Deferred();
        var task = function task2() {
          _this.writeDeferred_.resolve(_this.init_());
        };
        chunk(this.element_, task, ChunkPriority_Enum.LOW);
      }
      return this.writeDeferred_.promise;
    };
    _proto.init_ = function init_() {
      if (!isCookieAllowed(this.win_, this.element_)) {
        return resolvedPromise();
      }
      if (!hasOwn(this.config_, "cookies")) {
        return resolvedPromise();
      }
      if (!isObject(this.config_["cookies"])) {
        user().error(TAG9, "cookies config must be an object");
        return resolvedPromise();
      }
      var inputConfig = this.config_["cookies"];
      if (inputConfig["enabled"] === false) {
        return resolvedPromise();
      }
      var cookieExpireDateMs = this.getCookieMaxAgeMs_(inputConfig);
      var ids = Object.keys(inputConfig);
      var promises = [];
      for (var i = 0; i < ids.length; i++) {
        var cookieName = ids[i];
        var cookieObj = inputConfig[cookieName];
        var sameSite = this.getSameSiteType_(cookieObj["sameSite"] || cookieObj["SameSite"] || inputConfig["sameSite"] || inputConfig["SameSite"]);
        if (this.isValidCookieConfig_(cookieName, cookieObj)) {
          promises.push(this.expandAndWrite_(cookieName, cookieObj["value"], cookieExpireDateMs, sameSite));
        }
      }
      return Promise.all(promises);
    };
    _proto.getCookieMaxAgeMs_ = function getCookieMaxAgeMs_(inputConfig) {
      if (!hasOwn(inputConfig, "cookieMaxAge")) {
        return BASE_CID_MAX_AGE_MILLIS;
      }
      var cookieMaxAgeNumber = Number(inputConfig["cookieMaxAge"]);
      if (!cookieMaxAgeNumber && cookieMaxAgeNumber !== 0) {
        user().error(TAG9, "invalid cookieMaxAge %s, falling back to default value (1 year)", inputConfig["cookieMaxAge"]);
        return BASE_CID_MAX_AGE_MILLIS;
      }
      if (cookieMaxAgeNumber <= 0) {
        user().warn(TAG9, "cookieMaxAge %s less than or equal to 0, cookie will immediately expire", inputConfig["cookieMaxAge"]);
      }
      return cookieMaxAgeNumber * 1e3;
    };
    _proto.isValidCookieConfig_ = function isValidCookieConfig_(cookieName, cookieConfig) {
      if (RESERVED_KEYS[cookieName]) {
        return false;
      }
      if (!isObject(cookieConfig)) {
        user().error(TAG9, "cookieValue must be configured in an object");
        return false;
      }
      if (!hasOwn(cookieConfig, "value")) {
        user().error(TAG9, "value is required in the cookieValue object");
        return false;
      }
      return true;
    };
    _proto.expandAndWrite_ = function expandAndWrite_(cookieName, cookieValue, cookieExpireDateMs, sameSite) {
      var _this2 = this;
      return this.urlReplacementService_.expandStringAsync(cookieValue, this.bindings_).then(function(value) {
        if (value) {
          var expireDate = Date.now() + cookieExpireDateMs;
          var secure = sameSite === SameSite_Enum.NONE;
          setCookie(_this2.win_, cookieName, value, expireDate, {
            highestAvailableDomain: true,
            sameSite: sameSite,
            secure: secure
          });
        }
      }).catch(function(e) {
        user().error(TAG9, "Error expanding cookie string", e);
      });
    };
    _proto.getSameSiteType_ = function getSameSiteType_(sameSite) {
      switch (sameSite) {
        case "Strict":
          return SameSite_Enum.STRICT;
        case "Lax":
          return SameSite_Enum.LAX;
        case "None":
          return SameSite_Enum.NONE;
        default:
          return;
      }
    };
    return CookieWriter2;
  }();

  // extensions/amp-analytics/0.1/scroll-manager.js
  var ScrollManager = /* @__PURE__ */ function() {
    function ScrollManager2(root) {
      this.viewport_ = Services.viewportForDoc(root.ampdoc);
      this.mutator_ = Services.mutatorForDoc(root.ampdoc);
      this.viewportOnChangedUnlistener_ = null;
      this.scrollObservable_ = new Observable();
      this.root_ = root.getRootElement();
      this.initialRootRectPromise_ = null;
    }
    var _proto = ScrollManager2.prototype;
    _proto.dispose = function dispose() {
      this.scrollObservable_.removeAll();
      this.removeViewportOnChangedListener_();
    };
    _proto.removeScrollHandler = function removeScrollHandler(handler) {
      this.scrollObservable_.remove(handler);
      if (this.scrollObservable_.getHandlerCount() <= 0) {
        this.removeViewportOnChangedListener_();
      }
    };
    _proto.addScrollHandler = function addScrollHandler(handler) {
      var _this = this;
      var size = this.viewport_.getSize();
      this.getInitRootElementRect_().then(function(initRootElementRect) {
        var scrollHeight = initRootElementRect.height, scrollLeft = initRootElementRect.left, scrollTop = initRootElementRect.top, scrollWidth = initRootElementRect.width;
        var scrollEvent = {
          top: _this.viewport_.getScrollTop() - scrollTop,
          left: _this.viewport_.getScrollLeft() - scrollLeft,
          width: size.width,
          height: size.height,
          scrollHeight: scrollHeight,
          scrollWidth: scrollWidth,
          initialSize: {
            scrollHeight: scrollHeight,
            scrollWidth: scrollWidth
          }
        };
        handler(scrollEvent);
      });
      if (this.scrollObservable_.getHandlerCount() === 0) {
        this.addViewportOnChangedListener_();
      }
      return this.scrollObservable_.add(handler);
    };
    _proto.onScroll_ = function onScroll_(e) {
      var _this2 = this;
      return Promise.all([
        this.getInitRootElementRect_(),
        this.measureRootElement_()
      ]).then(function(rects) {
        var _rects$ = rects[0], initialScrollHeight = _rects$.height, initialScrollWidth = _rects$.width;
        var _rects$2 = rects[1], scrollHeight = _rects$2.height, scrollLeft = _rects$2.left, scrollTop = _rects$2.top, scrollWidth = _rects$2.width;
        var scrollEvent = {
          top: e.top - scrollTop,
          left: e.left - scrollLeft,
          width: e.width,
          height: e.height,
          scrollWidth: scrollWidth,
          scrollHeight: scrollHeight,
          initialSize: {
            scrollHeight: initialScrollHeight,
            scrollWidth: initialScrollWidth
          }
        };
        _this2.scrollObservable_.fire(scrollEvent);
      });
    };
    _proto.removeViewportOnChangedListener_ = function removeViewportOnChangedListener_() {
      if (this.viewportOnChangedUnlistener_) {
        this.viewportOnChangedUnlistener_();
        this.viewportOnChangedUnlistener_ = null;
      }
    };
    _proto.addViewportOnChangedListener_ = function addViewportOnChangedListener_() {
      this.viewportOnChangedUnlistener_ = this.viewport_.onChanged(this.onScroll_.bind(this));
    };
    _proto.getInitRootElementRect_ = function getInitRootElementRect_() {
      return devAssert2(this.initialRootRectPromise_ || this.measureRootElement_());
    };
    _proto.measureRootElement_ = function measureRootElement_() {
      var _this3 = this;
      var rectPromise = this.mutator_.measureElement(function() {
        return _this3.viewport_.getLayoutRect(_this3.root_);
      });
      this.initialRootRectPromise_ = this.initialRootRectPromise_ || rectPromise;
      return rectPromise;
    };
    return ScrollManager2;
  }();

  // src/core/dom/layout/rect.js
  var RelativePositions_Enum = {
    INSIDE: "inside",
    TOP: "top",
    BOTTOM: "bottom"
  };
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
  function layoutRectFromDomRect(rect) {
    return layoutRectLtwh(Number(rect.left), Number(rect.top), Number(rect.width), Number(rect.height));
  }
  function rectsOverlap(r1, r2) {
    return r1.top <= r2.bottom && r2.top <= r1.bottom && r1.left <= r2.right && r2.left <= r1.right;
  }
  function layoutRectsRelativePos(r1, r2) {
    if (r1.top < r2.top) {
      return RelativePositions_Enum.TOP;
    } else if (r1.bottom > r2.bottom) {
      return RelativePositions_Enum.BOTTOM;
    } else {
      return RelativePositions_Enum.INSIDE;
    }
  }
  function layoutPositionRelativeToScrolledViewport(layoutBox, viewport, scrollPos) {
    var scrollLayoutBox = layoutRectFromDomRect({
      top: scrollPos,
      bottom: scrollPos + viewport.getHeight(),
      left: 0,
      right: viewport.getWidth()
    });
    if (rectsOverlap(layoutBox, scrollLayoutBox)) {
      return RelativePositions_Enum.INSIDE;
    } else {
      return layoutRectsRelativePos(layoutBox, scrollLayoutBox);
    }
  }

  // extensions/amp-analytics/0.1/visibility-model.js
  var VisibilityModel = /* @__PURE__ */ function() {
    function VisibilityModel2(spec, calcVisibility) {
      var _this = this;
      this.calcVisibility_ = calcVisibility;
      this.spec_ = dict({
        "visiblePercentageMin": Number(spec["visiblePercentageMin"]) / 100 || 0,
        "visiblePercentageMax": Number(spec["visiblePercentageMax"]) / 100 || 1,
        "totalTimeMin": Number(spec["totalTimeMin"]) || 0,
        "totalTimeMax": Number(spec["totalTimeMax"]) || Infinity,
        "continuousTimeMin": Number(spec["continuousTimeMin"]) || 0,
        "continuousTimeMax": Number(spec["continuousTimeMax"]) || Infinity
      });
      if (String(spec["visiblePercentageMax"]).trim() === "0") {
        this.spec_["visiblePercentageMax"] = 0;
      }
      this.ignoreVisibilityForReport_ = spec["reportWhen"] !== void 0;
      this.repeat_ = spec["repeat"] === true;
      this.onTriggerObservable_ = new Observable();
      var deferred = new Deferred();
      this.eventPromise_ = deferred.promise;
      this.eventResolver_ = deferred.resolve;
      this.eventPromise_.then(function() {
        _this.onTriggerObservable_.fire();
      });
      this.unsubscribe_ = [];
      this.createdTime_ = Date.now();
      this.ready_ = true;
      this.reportReady_ = true;
      this.createReportReadyPromise_ = null;
      this.scheduledUpdateTimeoutId_ = null;
      this.matchesVisibility_ = false;
      this.everMatchedVisibility_ = false;
      this.continuousTime_ = 0;
      this.maxContinuousVisibleTime_ = 0;
      this.totalVisibleTime_ = 0;
      this.firstSeenTime_ = 0;
      this.lastSeenTime_ = 0;
      this.firstVisibleTime_ = 0;
      this.lastVisibleTime_ = 0;
      this.loadTimeVisibility_ = 0;
      this.minVisiblePercentage_ = 0;
      this.maxVisiblePercentage_ = 0;
      this.lastVisibleUpdateTime_ = 0;
      this.initialScrollDepth_ = 0;
      this.initialScrollDepthAlreadySet_ = false;
      this.waitToReset_ = false;
      this.scheduleRepeatId_ = null;
    }
    var _proto = VisibilityModel2.prototype;
    _proto.reset_ = function reset_() {
      var _this2 = this;
      devAssert2(!this.eventResolver_, "Attempt to refresh visible event before previous one resolve");
      var deferred = new Deferred();
      this.eventPromise_ = deferred.promise;
      this.eventResolver_ = deferred.resolve;
      this.eventPromise_.then(function() {
        _this2.onTriggerObservable_.fire();
      });
      this.scheduleRepeatId_ = null;
      this.everMatchedVisibility_ = false;
      this.matchesVisibility_ = false;
      this.continuousTime_ = 0;
      this.maxContinuousVisibleTime_ = 0;
      this.totalVisibleTime_ = 0;
      this.firstVisibleTime_ = 0;
      this.firstSeenTime_ = 0;
      this.lastSeenTime_ = 0;
      this.lastVisibleTime_ = 0;
      this.minVisiblePercentage_ = 0;
      this.maxVisiblePercentage_ = 0;
      this.lastVisibleUpdateTime_ = 0;
      this.waitToReset_ = false;
    };
    _proto.maybeDispose = function maybeDispose() {
      if (!this.repeat_) {
        this.dispose();
      }
    };
    _proto.dispose = function dispose() {
      if (this.scheduledUpdateTimeoutId_) {
        clearTimeout(this.scheduledUpdateTimeoutId_);
        this.scheduledUpdateTimeoutId_ = null;
      }
      if (this.scheduleRepeatId_) {
        clearTimeout(this.scheduleRepeatId_);
        this.scheduleRepeatId_ = null;
      }
      this.unsubscribe_.forEach(function(unsubscribe) {
        unsubscribe();
      });
      this.unsubscribe_.length = 0;
      this.eventResolver_ = null;
      if (this.onTriggerObservable_) {
        this.onTriggerObservable_.removeAll();
        this.onTriggerObservable_ = null;
      }
    };
    _proto.unsubscribe = function unsubscribe(handler) {
      this.unsubscribe_.push(handler);
    };
    _proto.onTriggerEvent = function onTriggerEvent(handler) {
      if (this.onTriggerObservable_) {
        this.onTriggerObservable_.add(handler);
      }
      if (this.eventPromise_ && !this.eventResolver_) {
        handler();
      }
    };
    _proto.setReady = function setReady(ready) {
      this.ready_ = ready;
      this.update();
    };
    _proto.setReportReady = function setReportReady(callback) {
      this.reportReady_ = false;
      this.createReportReadyPromise_ = callback;
    };
    _proto.getVisibility_ = function getVisibility_() {
      return this.ready_ ? this.calcVisibility_() : 0;
    };
    _proto.update = function update() {
      this.update_(this.getVisibility_());
    };
    _proto.getState = function getState(startTime) {
      return dict({
        "firstSeenTime": timeBase(this.firstSeenTime_, startTime),
        "lastSeenTime": timeBase(this.lastSeenTime_, startTime),
        "lastVisibleTime": timeBase(this.lastVisibleTime_, startTime),
        "firstVisibleTime": timeBase(this.firstVisibleTime_, startTime),
        "maxContinuousVisibleTime": this.maxContinuousVisibleTime_,
        "totalVisibleTime": this.totalVisibleTime_,
        "loadTimeVisibility": this.loadTimeVisibility_ * 100 || 0,
        "minVisiblePercentage": this.minVisiblePercentage_ * 100,
        "maxVisiblePercentage": this.maxVisiblePercentage_ * 100
      });
    };
    _proto.update_ = function update_(visibility) {
      var _this3 = this;
      if (this.waitToReset_) {
        if (!this.isVisibilityMatch_(visibility)) {
          this.reset_();
        }
        return;
      }
      if (!this.eventResolver_) {
        return;
      }
      var conditionsMet = this.updateCounters_(visibility) || this.ignoreVisibilityForReport_;
      if (conditionsMet) {
        if (this.scheduledUpdateTimeoutId_) {
          clearTimeout(this.scheduledUpdateTimeoutId_);
          this.scheduledUpdateTimeoutId_ = null;
        }
        if (this.reportReady_) {
          this.eventResolver_();
          this.eventResolver_ = null;
          if (this.repeat_) {
            this.waitToReset_ = true;
            this.continuousTime_ = 0;
          }
        } else if (this.createReportReadyPromise_) {
          var reportReadyPromise = this.createReportReadyPromise_();
          this.createReportReadyPromise_ = null;
          reportReadyPromise.then(function() {
            _this3.reportReady_ = true;
            _this3.update();
          });
        }
      } else if (this.matchesVisibility_ && !this.scheduledUpdateTimeoutId_) {
        var timeToWait = this.computeTimeToWait_();
        if (timeToWait > 0) {
          this.scheduledUpdateTimeoutId_ = setTimeout(function() {
            _this3.scheduledUpdateTimeoutId_ = null;
            _this3.update();
          }, timeToWait);
        }
      } else if (!this.matchesVisibility_ && this.scheduledUpdateTimeoutId_) {
        clearTimeout(this.scheduledUpdateTimeoutId_);
        this.scheduledUpdateTimeoutId_ = null;
      }
    };
    _proto.isVisibilityMatch_ = function isVisibilityMatch_(visibility) {
      devAssert2(visibility >= 0 && visibility <= 1, "invalid visibility value: %s", visibility);
      if (this.spec_["visiblePercentageMin"] == 1) {
        return visibility == 1;
      }
      if (this.spec_["visiblePercentageMax"] == 0) {
        return visibility == 0;
      }
      return visibility > this.spec_["visiblePercentageMin"] && visibility <= this.spec_["visiblePercentageMax"];
    };
    _proto.updateCounters_ = function updateCounters_(visibility) {
      devAssert2(visibility >= 0 && visibility <= 1, "invalid visibility value: %s", visibility);
      var now = Date.now();
      if (visibility > 0) {
        this.firstSeenTime_ = this.firstSeenTime_ || now;
        this.lastSeenTime_ = now;
        if (!this.loadTimeVisibility_ && now - this.createdTime_ < 300) {
          this.loadTimeVisibility_ = visibility;
        }
      }
      var prevMatchesVisibility = this.matchesVisibility_;
      var timeSinceLastUpdate = this.lastVisibleUpdateTime_ ? now - this.lastVisibleUpdateTime_ : 0;
      this.matchesVisibility_ = this.isVisibilityMatch_(visibility);
      if (this.matchesVisibility_) {
        this.everMatchedVisibility_ = true;
        if (prevMatchesVisibility) {
          this.totalVisibleTime_ += timeSinceLastUpdate;
          this.continuousTime_ += timeSinceLastUpdate;
          this.maxContinuousVisibleTime_ = Math.max(this.maxContinuousVisibleTime_, this.continuousTime_);
        } else {
          devAssert2(!this.lastVisibleUpdateTime_);
          this.firstVisibleTime_ = this.firstVisibleTime_ || now;
        }
        this.lastVisibleUpdateTime_ = now;
        this.minVisiblePercentage_ = this.minVisiblePercentage_ > 0 ? Math.min(this.minVisiblePercentage_, visibility) : visibility;
        this.maxVisiblePercentage_ = Math.max(this.maxVisiblePercentage_, visibility);
        this.lastVisibleTime_ = now;
      } else if (prevMatchesVisibility) {
        devAssert2(this.lastVisibleUpdateTime_ > 0);
        this.maxContinuousVisibleTime_ = Math.max(this.maxContinuousVisibleTime_, this.continuousTime_ + timeSinceLastUpdate);
        this.lastVisibleUpdateTime_ = 0;
        this.totalVisibleTime_ += timeSinceLastUpdate;
        this.continuousTime_ = 0;
        this.lastVisibleTime_ = now;
      }
      return this.everMatchedVisibility_ && this.totalVisibleTime_ >= this.spec_["totalTimeMin"] && this.totalVisibleTime_ <= this.spec_["totalTimeMax"] && this.maxContinuousVisibleTime_ >= this.spec_["continuousTimeMin"] && this.maxContinuousVisibleTime_ <= this.spec_["continuousTimeMax"];
    };
    _proto.maybeSetInitialScrollDepth = function maybeSetInitialScrollDepth(depth) {
      if (!this.initialScrollDepthAlreadySet_) {
        this.initialScrollDepth_ = depth;
        this.initialScrollDepthAlreadySet_ = true;
      }
    };
    _proto.getInitialScrollDepth = function getInitialScrollDepth() {
      return this.initialScrollDepth_;
    };
    _proto.computeTimeToWait_ = function computeTimeToWait_() {
      var waitForContinuousTime = Math.max(this.spec_["continuousTimeMin"] - this.continuousTime_, 0);
      var waitForTotalTime = Math.max(this.spec_["totalTimeMin"] - this.totalVisibleTime_, 0);
      var maxWaitTime = Math.max(waitForContinuousTime, waitForTotalTime);
      return Math.min(maxWaitTime, waitForContinuousTime || Infinity, waitForTotalTime || Infinity);
    };
    return VisibilityModel2;
  }();
  function timeBase(time, baseTime) {
    return time >= baseTime ? time - baseTime : 0;
  }

  // extensions/amp-analytics/0.1/opacity.js
  function getMinOpacity(el) {
    var parentNodeTree = getElementNodeTree(el.parentElement);
    parentNodeTree.push(el);
    var minOpacityFound = 1;
    var opacity;
    for (var i = 0; i < parentNodeTree.length; i++) {
      var node = parentNodeTree[i];
      opacity = getElementOpacity(node);
      if (opacity < minOpacityFound) {
        minOpacityFound = opacity;
      }
      if (minOpacityFound === 0) {
        return minOpacityFound;
      }
    }
    return minOpacityFound;
  }
  function getElementOpacity(el) {
    var win = window;
    var fullyVisibleValue = 1;
    var fullyHiddenValue = 0;
    if (!el) {
      return fullyVisibleValue;
    }
    var _computedStyle = computedStyle(win, el), opacity = _computedStyle.opacity, visibility = _computedStyle.visibility;
    if (visibility === "hidden") {
      return fullyHiddenValue;
    }
    var opacityValue = opacity === "" ? fullyVisibleValue : parseFloat(opacity);
    if (isNaN(opacityValue)) {
      return fullyVisibleValue;
    }
    return opacityValue;
  }
  function getElementNodeTree(el) {
    var nodeList = [];
    if (!el) {
      return nodeList;
    }
    var CAP = 50;
    var DOCUMENT_NODE_TYPE = 9;
    var ELEMENT_WITH_PARENT_TYPE = 1;
    var parent;
    var element = el;
    nodeList.push(element);
    for (var i = 0; i < CAP; i++) {
      parent = element.parentNode || element.parentElement;
      if (parent && parent.nodeType == ELEMENT_WITH_PARENT_TYPE) {
        element = parent;
        nodeList.push(element);
      } else if (parent && parent.nodeType == DOCUMENT_NODE_TYPE) {
        parent = element.ownerDocument.defaultView.frameElement;
        if (parent && parent.nodeType == ELEMENT_WITH_PARENT_TYPE) {
          element = parent;
          nodeList.push(element);
        } else {
          break;
        }
      } else {
        break;
      }
    }
    return nodeList;
  }

  // extensions/amp-analytics/0.1/visibility-manager.js
  function _inherits3(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf3(subClass, superClass);
  }
  function _setPrototypeOf3(o, p) {
    _setPrototypeOf3 = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf3(o, p);
  }
  function _createSuper3(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct3();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf3(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf3(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn3(this, result);
    };
  }
  function _possibleConstructorReturn3(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized3(self2);
  }
  function _assertThisInitialized3(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct3() {
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
  function _getPrototypeOf3(o) {
    _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf3(o);
  }
  var TAG10 = "amp-analytics/visibility-manager";
  var PROP = "__AMP_VIS";
  var VISIBILITY_ID_PROP = "__AMP_VIS_ID";
  var DEFAULT_THRESHOLD = [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1];
  var visibilityIdCounter = 1;
  function getElementId(element) {
    var id = element[VISIBILITY_ID_PROP];
    if (!id) {
      id = ++visibilityIdCounter;
      element[VISIBILITY_ID_PROP] = id;
    }
    return id;
  }
  function provideVisibilityManager(rootNode) {
    if (!rootNode[PROP]) {
      rootNode[PROP] = createVisibilityManager(rootNode);
    }
    return rootNode[PROP];
  }
  function createVisibilityManager(rootNode) {
    var ampdoc2 = Services.ampdoc(rootNode);
    var frame = getParentWindowFrameElement(rootNode);
    var embed = frame && getFriendlyIframeEmbedOptional(frame);
    var frameRootNode = frame && rootNodeFor(frame);
    if (embed && frameRootNode) {
      return new VisibilityManagerForEmbed(provideVisibilityManager(frameRootNode), embed);
    }
    return new VisibilityManagerForDoc(ampdoc2);
  }
  var VisibilityManager = /* @__PURE__ */ function() {
    function VisibilityManager2(parent, ampdoc2) {
      var _this = this;
      this.parent = parent;
      this.ampdoc = ampdoc2;
      this.rootVisibility_ = 0;
      this.models_ = [];
      this.children_ = null;
      this.unsubscribe_ = [];
      this.maxScrollDepth_ = 0;
      if (this.parent) {
        this.parent.addChild_(this);
      }
      var viewport = Services.viewportForDoc(this.ampdoc);
      viewport.onChanged(function() {
        _this.maybeUpdateMaxScrollDepth(viewport.getScrollTop());
      });
    }
    var _proto = VisibilityManager2.prototype;
    _proto.addChild_ = function addChild_(child) {
      if (!this.children_) {
        this.children_ = [];
      }
      this.children_.push(child);
    };
    _proto.removeChild_ = function removeChild_(child) {
      if (this.children_) {
        var index = this.children_.indexOf(child);
        if (index != -1) {
          this.children_.splice(index, 1);
        }
      }
    };
    _proto.dispose = function dispose() {
      this.setRootVisibility(0);
      for (var i = this.models_.length - 1; i >= 0; i--) {
        this.models_[i].dispose();
      }
      this.unsubscribe_.forEach(function(unsubscribe) {
        unsubscribe();
      });
      this.unsubscribe_.length = 0;
      if (this.parent) {
        this.parent.removeChild_(this);
      }
      if (this.children_) {
        for (var _i = 0; _i < this.children_.length; _i++) {
          this.children_[_i].dispose();
        }
      }
    };
    _proto.unsubscribe = function unsubscribe(handler) {
      this.unsubscribe_.push(handler);
    };
    _proto.getStartTime = function getStartTime() {
    };
    _proto.isBackgrounded = function isBackgrounded() {
    };
    _proto.isBackgroundedAtStart = function isBackgroundedAtStart() {
    };
    _proto.getRootMinOpacity = function getRootMinOpacity() {
    };
    _proto.getRootLayoutBox = function getRootLayoutBox() {
    };
    _proto.getRootVisibility = function getRootVisibility() {
      if (!this.parent) {
        return this.rootVisibility_;
      }
      return this.parent.getRootVisibility() > 0 ? this.rootVisibility_ : 0;
    };
    _proto.setRootVisibility = function setRootVisibility(visibility) {
      this.rootVisibility_ = visibility;
      this.updateModels_();
      if (this.children_) {
        for (var i = 0; i < this.children_.length; i++) {
          this.children_[i].updateModels_();
        }
      }
    };
    _proto.maybeUpdateMaxScrollDepth = function maybeUpdateMaxScrollDepth(depth) {
      if (depth > this.maxScrollDepth_) {
        this.maxScrollDepth_ = depth;
      }
    };
    _proto.getMaxScrollDepth = function getMaxScrollDepth() {
      return this.maxScrollDepth_;
    };
    _proto.updateModels_ = function updateModels_() {
      for (var i = 0; i < this.models_.length; i++) {
        this.models_[i].update();
      }
    };
    _proto.listenRoot = function listenRoot(spec, readyPromise, createReportPromiseFunc, callback) {
      var calcVisibility = this.getRootVisibility.bind(this);
      return this.createModelAndListen_(calcVisibility, spec, readyPromise, createReportPromiseFunc, callback);
    };
    _proto.listenElement = function listenElement(element, spec, readyPromise, createReportPromiseFunc, callback) {
      var calcVisibility = this.getElementVisibility.bind(this, element);
      return this.createModelAndListen_(calcVisibility, spec, readyPromise, createReportPromiseFunc, callback, element);
    };
    _proto.createModelAndListen_ = function createModelAndListen_(calcVisibility, spec, readyPromise, createReportPromiseFunc, callback, opt_element) {
      if (spec["visiblePercentageThresholds"] && spec["visiblePercentageMin"] == void 0 && spec["visiblePercentageMax"] == void 0) {
        var unlisteners = [];
        var ranges = spec["visiblePercentageThresholds"];
        if (!ranges || !isArray(ranges)) {
          user().error(TAG10, "invalid visiblePercentageThresholds");
          return function() {
          };
        }
        for (var i = 0; i < ranges.length; i++) {
          var percents = ranges[i];
          if (!isArray(percents) || percents.length != 2) {
            user().error(TAG10, "visiblePercentageThresholds entry length is not 2");
            continue;
          }
          if (!isFiniteNumber(percents[0]) || !isFiniteNumber(percents[1])) {
            user().error(TAG10, "visiblePercentageThresholds entry is not valid number");
            continue;
          }
          var min = Number(percents[0]);
          var max = Number(percents[1]);
          if (min < 0 || max > 100 || min > max || min == max && min != 100 && max != 0) {
            user().error(TAG10, "visiblePercentageThresholds entry invalid min/max value");
            continue;
          }
          var newSpec = spec;
          newSpec["visiblePercentageMin"] = min;
          newSpec["visiblePercentageMax"] = max;
          var _model = new VisibilityModel(newSpec, calcVisibility, Services.viewportForDoc(this.ampdoc));
          unlisteners.push(this.listen_(_model, spec, readyPromise, createReportPromiseFunc, callback, opt_element));
        }
        return function() {
          unlisteners.forEach(function(unlistener) {
            return unlistener();
          });
        };
      }
      var model = new VisibilityModel(spec, calcVisibility, Services.viewportForDoc(this.ampdoc));
      return this.listen_(model, spec, readyPromise, createReportPromiseFunc, callback, opt_element);
    };
    _proto.listen_ = function listen_(model, spec, readyPromise, createReportPromiseFunc, callback, opt_element) {
      var _this2 = this;
      if (createReportPromiseFunc) {
        model.setReportReady(createReportPromiseFunc);
      }
      var viewport = Services.viewportForDoc(this.ampdoc);
      var scrollDepth = viewport.getScrollTop();
      this.maybeUpdateMaxScrollDepth(scrollDepth);
      if (readyPromise) {
        model.setReady(false);
        readyPromise.then(function() {
          model.setReady(true);
          model.maybeSetInitialScrollDepth(scrollDepth);
        });
      } else {
        model.maybeSetInitialScrollDepth(scrollDepth);
      }
      model.onTriggerEvent(function() {
        var startTime = _this2.getStartTime();
        var state = model.getState(startTime);
        state["backgrounded"] = _this2.isBackgrounded() ? 1 : 0;
        state["backgroundedAtStart"] = _this2.isBackgroundedAtStart() ? 1 : 0;
        state["totalTime"] = Date.now() - startTime;
        var layoutBox;
        if (opt_element) {
          state["elementId"] = opt_element.id;
          state["opacity"] = getMinOpacity(opt_element);
          layoutBox = viewport.getLayoutRect(opt_element);
          var intersectionRatio = _this2.getElementVisibility(opt_element);
          var intersectionRect = _this2.getElementIntersectionRect(opt_element);
          Object.assign(state, dict({
            "intersectionRatio": intersectionRatio,
            "intersectionRect": JSON.stringify(intersectionRect)
          }));
        } else {
          state["opacity"] = _this2.getRootMinOpacity();
          state["intersectionRatio"] = _this2.getRootVisibility();
          layoutBox = _this2.getRootLayoutBox();
        }
        model.maybeDispose();
        if (layoutBox) {
          Object.assign(state, dict({
            "elementX": layoutBox.left,
            "elementY": layoutBox.top,
            "elementWidth": layoutBox.width,
            "elementHeight": layoutBox.height
          }));
          state["initialScrollDepth"] = layoutPositionRelativeToScrolledViewport(layoutBox, viewport, model.getInitialScrollDepth());
          state["maxScrollDepth"] = layoutPositionRelativeToScrolledViewport(layoutBox, viewport, _this2.getMaxScrollDepth());
        }
        callback(state);
      });
      this.models_.push(model);
      model.unsubscribe(function() {
        var index = _this2.models_.indexOf(model);
        if (index != -1) {
          _this2.models_.splice(index, 1);
        }
      });
      if (opt_element) {
        model.unsubscribe(this.observe(opt_element, function() {
          return model.update();
        }));
      }
      model.update();
      return function() {
        model.dispose();
      };
    };
    _proto.observe = function observe(unusedElement, unusedListener) {
    };
    _proto.getElementVisibility = function getElementVisibility(unusedElement) {
    };
    _proto.getElementIntersectionRect = function getElementIntersectionRect(unusedElement) {
    };
    return VisibilityManager2;
  }();
  var VisibilityManagerForDoc = /* @__PURE__ */ function(_VisibilityManager) {
    _inherits3(VisibilityManagerForDoc2, _VisibilityManager);
    var _super = _createSuper3(VisibilityManagerForDoc2);
    function VisibilityManagerForDoc2(ampdoc2) {
      var _this3;
      _this3 = _super.call(this, null, ampdoc2);
      _this3.viewport_ = Services.viewportForDoc(ampdoc2);
      _this3.backgrounded_ = !ampdoc2.isVisible();
      _this3.backgroundedAtStart_ = _this3.isBackgrounded();
      _this3.trackedElements_ = map();
      _this3.intersectionObserver_ = null;
      if (getMode(_this3.ampdoc.win).runtime == "inabox") {
        var root = _this3.ampdoc.getRootNode();
        var rootElement = dev().assertElement(root.documentElement || root.body || root);
        _this3.unsubscribe(_this3.observe(rootElement, _this3.setRootVisibility.bind(_assertThisInitialized3(_this3))));
        var resizeListener = function resizeListener2() {
          var id = getElementId(rootElement);
          var trackedRoot = _this3.trackedElements_[id];
          if (!trackedRoot) {
            return;
          }
          if (_this3.ampdoc.win.innerHeight < 1 || _this3.ampdoc.win.innerWidth < 1) {
            trackedRoot.isVisible = false;
          } else {
            trackedRoot.isVisible = true;
          }
          _this3.setRootVisibility(trackedRoot.isVisible ? trackedRoot.intersectionRatio : 0);
        };
        _this3.ampdoc.win.addEventListener("resize", resizeListener);
        _this3.unsubscribe(function() {
          _this3.ampdoc.win.removeEventListener("resize", resizeListener);
        });
      } else {
        _this3.setRootVisibility(_this3.ampdoc.isVisible() ? 1 : 0);
        _this3.unsubscribe(_this3.ampdoc.onVisibilityChanged(function() {
          var isVisible = _this3.ampdoc.isVisible();
          if (!isVisible) {
            _this3.backgrounded_ = true;
          }
          _this3.setRootVisibility(isVisible ? 1 : 0);
        }));
      }
      return _this3;
    }
    var _proto2 = VisibilityManagerForDoc2.prototype;
    _proto2.dispose = function dispose() {
      _VisibilityManager.prototype.dispose.call(this);
      if (this.intersectionObserver_) {
        this.intersectionObserver_.disconnect();
        this.intersectionObserver_ = null;
      }
    };
    _proto2.getStartTime = function getStartTime() {
      return dev().assertNumber(this.ampdoc.getFirstVisibleTime());
    };
    _proto2.isBackgrounded = function isBackgrounded() {
      return this.backgrounded_;
    };
    _proto2.isBackgroundedAtStart = function isBackgroundedAtStart() {
      return this.backgroundedAtStart_;
    };
    _proto2.getRootMinOpacity = function getRootMinOpacity() {
      var root = this.ampdoc.getRootNode();
      var rootElement = dev().assertElement(root.documentElement || root.body || root);
      return getMinOpacity(rootElement);
    };
    _proto2.getRootLayoutBox = function getRootLayoutBox() {
      var root = this.ampdoc.getRootNode();
      var rootElement = dev().assertElement(root.documentElement || root.body || root);
      return this.viewport_.getLayoutRect(rootElement);
    };
    _proto2.observe = function observe(element, listener) {
      var _this4 = this;
      var id = getElementId(element);
      var trackedElement = this.trackedElements_[id];
      if (!trackedElement) {
        trackedElement = {
          element: element,
          intersectionRatio: 0,
          intersectionRect: null,
          isVisible: false,
          boundingClientRect: null,
          listeners: []
        };
        this.trackedElements_[id] = trackedElement;
      } else if (trackedElement.intersectionRatio > 0 && trackedElement.isVisible) {
        listener(trackedElement.intersectionRatio);
      }
      trackedElement.listeners.push(listener);
      this.getIntersectionObserver_().observe(element);
      return function() {
        var trackedElement2 = _this4.trackedElements_[id];
        if (trackedElement2) {
          var index = trackedElement2.listeners.indexOf(listener);
          if (index != -1) {
            trackedElement2.listeners.splice(index, 1);
          }
          if (trackedElement2.listeners.length == 0) {
            _this4.intersectionObserver_.unobserve(element);
            delete _this4.trackedElements_[id];
          }
        }
      };
    };
    _proto2.getElementVisibility = function getElementVisibility(element) {
      if (this.getRootVisibility() == 0) {
        return 0;
      }
      var id = getElementId(element);
      var trackedElement = this.trackedElements_[id];
      return trackedElement && trackedElement.isVisible && trackedElement.intersectionRatio || 0;
    };
    _proto2.getElementIntersectionRect = function getElementIntersectionRect(element) {
      if (this.getElementVisibility(element) <= 0) {
        return null;
      }
      var id = getElementId(element);
      var trackedElement = this.trackedElements_[id];
      if (trackedElement) {
        return trackedElement.intersectionRect;
      }
      return null;
    };
    _proto2.getIntersectionObserver_ = function getIntersectionObserver_() {
      if (!this.intersectionObserver_) {
        var win = this.ampdoc.win;
        this.intersectionObserver_ = new win.IntersectionObserver(this.onIntersectionChanges_.bind(this), {
          threshold: DEFAULT_THRESHOLD
        });
      }
      return this.intersectionObserver_;
    };
    _proto2.onIntersectionChanges_ = function onIntersectionChanges_(entries) {
      var _this5 = this;
      entries.forEach(function(change) {
        var intersection = change.intersectionRect;
        intersection = layoutRectLtwh(Number(intersection.left), Number(intersection.top), Number(intersection.width), Number(intersection.height));
        var boundingClientRect = change.boundingClientRect;
        boundingClientRect = boundingClientRect && layoutRectLtwh(Number(boundingClientRect.left), Number(boundingClientRect.top), Number(boundingClientRect.width), Number(boundingClientRect.height));
        _this5.onIntersectionChange_(change.target, change.intersectionRatio, intersection, boundingClientRect);
      });
    };
    _proto2.onIntersectionChange_ = function onIntersectionChange_(target, intersectionRatio, intersectionRect, boundingClientRect) {
      intersectionRatio = Math.min(Math.max(intersectionRatio, 0), 1);
      var id = getElementId(target);
      var trackedElement = this.trackedElements_[id];
      var isVisible = true;
      if (boundingClientRect.width < 1 || boundingClientRect.height < 1) {
        isVisible = false;
      }
      if (trackedElement) {
        trackedElement.isVisible = isVisible;
        trackedElement.intersectionRatio = intersectionRatio;
        trackedElement.intersectionRect = intersectionRect;
        trackedElement.boundingClientRect = boundingClientRect;
        for (var i = 0; i < trackedElement.listeners.length; i++) {
          trackedElement.listeners[i](trackedElement.isVisible ? intersectionRatio : 0);
        }
      }
    };
    return VisibilityManagerForDoc2;
  }(VisibilityManager);
  var VisibilityManagerForEmbed = /* @__PURE__ */ function(_VisibilityManager2) {
    _inherits3(VisibilityManagerForEmbed2, _VisibilityManager2);
    var _super2 = _createSuper3(VisibilityManagerForEmbed2);
    function VisibilityManagerForEmbed2(parent, embed) {
      var _this6;
      _this6 = _super2.call(this, parent, parent.ampdoc);
      _this6.embed = embed;
      _this6.backgroundedAtStart_ = _this6.parent.isBackgrounded();
      _this6.unsubscribe(_this6.parent.observe(dev().assertElement(embed.host), _this6.setRootVisibility.bind(_assertThisInitialized3(_this6))));
      return _this6;
    }
    var _proto3 = VisibilityManagerForEmbed2.prototype;
    _proto3.getStartTime = function getStartTime() {
      return this.embed.getStartTime();
    };
    _proto3.isBackgrounded = function isBackgrounded() {
      return this.parent.isBackgrounded();
    };
    _proto3.isBackgroundedAtStart = function isBackgroundedAtStart() {
      return this.backgroundedAtStart_;
    };
    _proto3.getRootMinOpacity = function getRootMinOpacity() {
      var rootElement = dev().assertElement(this.embed.iframe);
      return getMinOpacity(rootElement);
    };
    _proto3.getRootLayoutBox = function getRootLayoutBox() {
      var rootElement = dev().assertElement(this.embed.iframe);
      return Services.viewportForDoc(this.ampdoc).getLayoutRect(rootElement);
    };
    _proto3.observe = function observe(element, listener) {
      return this.parent.observe(element, listener);
    };
    _proto3.getElementVisibility = function getElementVisibility(element) {
      if (this.getRootVisibility() == 0) {
        return 0;
      }
      return this.parent.getElementVisibility(element);
    };
    _proto3.getElementIntersectionRect = function getElementIntersectionRect(element) {
      if (this.getRootVisibility() == 0) {
        return null;
      }
      return this.parent.getElementIntersectionRect(element);
    };
    return VisibilityManagerForEmbed2;
  }(VisibilityManager);

  // src/service/resources-interface.js
  var READY_SCAN_SIGNAL = "ready-scan";

  // src/ini-load.js
  var EXCLUDE_INI_LOAD = ["AMP-AD", "AMP-ANALYTICS", "AMP-PIXEL", "AMP-AD-EXIT"];
  function whenContentIniLoad(elementOrAmpDoc, hostWin, rect, opt_prerenderableOnly) {
    if (true) {
      return whenContentIniLoadInOb(elementOrAmpDoc, opt_prerenderableOnly);
    }
    return whenContentIniLoadMeasure(elementOrAmpDoc, hostWin, rect, opt_prerenderableOnly);
  }
  function whenContentIniLoadMeasure(elementOrAmpDoc, hostWin, rect, opt_prerenderableOnly) {
    var ampdoc2 = Services.ampdoc(elementOrAmpDoc);
    return getMeasuredResources(ampdoc2, hostWin, function(r) {
      if (!r.isDisplayed() || !r.overlaps(rect) && !r.isFixed() || opt_prerenderableOnly && !r.prerenderAllowed()) {
        return false;
      }
      return true;
    }).then(function(resources) {
      var promises = [];
      resources.forEach(function(r) {
        if (!EXCLUDE_INI_LOAD.includes(r.element.tagName)) {
          promises.push(r.loadedOnce());
        }
      });
      return Promise.all(promises);
    });
  }
  function whenContentIniLoadInOb(elementOrAmpDoc, opt_prerenderableOnly) {
    var ampdoc2 = Services.ampdoc(elementOrAmpDoc);
    var whenReady = ampdoc2.signals().whenSignal(READY_SCAN_SIGNAL);
    return whenReady.then(function() {
      var resources = Services.resourcesForDoc(ampdoc2);
      var elements = resources.get().filter(function(r) {
        if (opt_prerenderableOnly && !r.prerenderAllowed()) {
          return false;
        }
        return !EXCLUDE_INI_LOAD.includes(r.element.tagName);
      }).map(function(r) {
        return r.element;
      });
      if (elements.length === 0) {
        return Promise.resolve([]);
      }
      return new Promise(function(resolve) {
        var win = ampdoc2.win;
        var io = new win.IntersectionObserver(function(entries) {
          io.disconnect();
          var intersecting = [];
          for (var i2 = 0; i2 < entries.length; i2++) {
            var _entries$i = entries[i2], isIntersecting = _entries$i.isIntersecting, target = _entries$i.target;
            if (isIntersecting) {
              intersecting.push(target);
            }
          }
          resolve(intersecting);
        }, {
          root: isIframed(win) ? win.document : null,
          threshold: 0.01
        });
        for (var i = 0; i < Math.min(elements.length, 100); i++) {
          io.observe(elements[i]);
        }
      }).then(function(elements2) {
        return Promise.all(elements2.map(function(element) {
          return element.whenLoaded();
        }));
      });
    });
  }
  function getMeasuredResources(ampdoc2, hostWin, filterFn) {
    return ampdoc2.signals().whenSignal(READY_SCAN_SIGNAL).then(function() {
      var measurePromiseArray = [];
      var resources = Services.resourcesForDoc(ampdoc2);
      resources.get().forEach(function(r) {
        if (!r.hasBeenMeasured() && r.hostWin == hostWin && !r.hasOwner()) {
          measurePromiseArray.push(r.ensureMeasured());
        }
      });
      return Promise.all(measurePromiseArray);
    }).then(function() {
      var resources = Services.resourcesForDoc(ampdoc2);
      return resources.get().filter(function(r) {
        return r.hostWin == hostWin && !r.hasOwner() && r.hasBeenMeasured() && filterFn(r);
      });
    });
  }

  // extensions/amp-analytics/0.1/analytics-root.js
  function _inherits4(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf4(subClass, superClass);
  }
  function _setPrototypeOf4(o, p) {
    _setPrototypeOf4 = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf4(o, p);
  }
  function _createSuper4(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct4();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf4(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf4(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn4(this, result);
    };
  }
  function _possibleConstructorReturn4(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized4(self2);
  }
  function _assertThisInitialized4(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct4() {
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
  function _getPrototypeOf4(o) {
    _getPrototypeOf4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf4(o);
  }
  var TAG11 = "amp-analytics/analytics-root";
  var VARIABLE_DATA_ATTRIBUTE_KEY2 = /^vars(.+)/;
  var AnalyticsRoot = /* @__PURE__ */ function() {
    function AnalyticsRoot2(ampdoc2) {
      this.ampdoc = ampdoc2;
      this.trackers_ = map();
      this.visibilityManager_ = null;
      this.scrollManager_ = null;
    }
    var _proto = AnalyticsRoot2.prototype;
    _proto.dispose = function dispose() {
      for (var k in this.trackers_) {
        this.trackers_[k].dispose();
        delete this.trackers_[k];
      }
      if (this.visibilityManager_) {
        this.visibilityManager_.dispose();
      }
      if (this.scrollManager_) {
        this.scrollManager_.dispose();
      }
    };
    _proto.getType = function getType() {
    };
    _proto.getRoot = function getRoot() {
    };
    _proto.getRootElement = function getRootElement() {
      var root = this.getRoot();
      return dev().assertElement(root.host || root.documentElement || root.body || root);
    };
    _proto.getHostElement = function getHostElement() {
    };
    _proto.signals = function signals() {
    };
    _proto.contains = function contains(node) {
      return this.getRoot().contains(node);
    };
    _proto.getElementById = function getElementById(unusedId) {
    };
    _proto.getTrackerForAllowlist = function getTrackerForAllowlist(name, allowlist) {
      var trackerProfile = allowlist[name];
      if (trackerProfile) {
        return this.getTracker(name, trackerProfile);
      }
      return null;
    };
    _proto.getTracker = function getTracker(name, klass12) {
      var tracker = this.trackers_[name];
      if (!tracker) {
        tracker = new klass12(this);
        this.trackers_[name] = tracker;
      }
      return tracker;
    };
    _proto.getTrackerOptional = function getTrackerOptional(name) {
      return this.trackers_[name] || null;
    };
    _proto.getElement = function getElement(context, selector, selectionMethod) {
      var _this = this;
      if (selectionMethod === void 0) {
        selectionMethod = null;
      }
      if (selector == ":root") {
        return tryResolve(function() {
          return _this.getRootElement();
        });
      }
      if (selector == ":host") {
        return new Promise(function(resolve) {
          resolve(user().assertElement(_this.getHostElement(), 'Element "' + selector + '" not found'));
        });
      }
      return this.ampdoc.whenReady().then(function() {
        var found;
        var result = null;
        try {
          if (selectionMethod == "scope") {
            found = scopedQuerySelector(context, selector);
          } else if (selectionMethod == "closest") {
            found = closestAncestorElementBySelector(context, selector);
          } else {
            found = _this.getRoot().querySelector(selector);
          }
        } catch (e) {
          userAssert(false, "Invalid query selector " + selector);
        }
        if (found && _this.contains(found)) {
          result = found;
        }
        return user().assertElement(result, 'Element "' + selector + '" not found');
      });
    };
    _proto.getElementsByQuerySelectorAll_ = function getElementsByQuerySelectorAll_(selectors, useDataVars) {
      var _this2 = this;
      if (useDataVars === void 0) {
        useDataVars = true;
      }
      return this.ampdoc.whenReady().then(function() {
        var elements = [];
        for (var i = 0; i < selectors.length; i++) {
          var nodeList = void 0;
          var elementArray = [];
          var selector = selectors[i];
          try {
            nodeList = _this2.getRoot().querySelectorAll(selector);
          } catch (e) {
            userAssert(false, "Invalid query selector " + selector);
          }
          for (var j = 0; j < nodeList.length; j++) {
            if (_this2.contains(nodeList[j])) {
              elementArray.push(nodeList[j]);
            }
          }
          elementArray = useDataVars ? _this2.getDataVarsElements_(elementArray, selector) : elementArray;
          userAssert(elementArray.length, 'Element "' + selector + '" not found');
          elements = elements.concat(elementArray);
        }
        return elements.filter(function(element, index) {
          return elements.indexOf(element) === index;
        });
      });
    };
    _proto.getDataVarsElements_ = function getDataVarsElements_(elementArray, selector) {
      var removedCount = 0;
      var dataVarsArray = [];
      for (var i = 0; i < elementArray.length; i++) {
        var dataVarKeys = Object.keys(getDataParamsFromAttributes(elementArray[i], void 0, VARIABLE_DATA_ATTRIBUTE_KEY2));
        if (dataVarKeys.length) {
          dataVarsArray.push(elementArray[i]);
        } else {
          removedCount++;
        }
      }
      if (removedCount) {
        user().warn(TAG11, '%s element(s) ommited from selector "%s" because no data-vars-* attribute was found.', removedCount, selector);
      }
      return dataVarsArray;
    };
    _proto.getAmpElement = function getAmpElement(context, selector, selectionMethod) {
      var _this3 = this;
      return this.getElement(context, selector, selectionMethod).then(function(element) {
        _this3.verifyAmpElements_([element], selector);
        return element;
      });
    };
    _proto.getElements = function getElements(context, selectors, selectionMethod, useDataVars) {
      if (useDataVars === void 0) {
        useDataVars = true;
      }
      if (isArray(selectors)) {
        userAssert(!selectionMethod, "Cannot have selectionMethod %s defined with an array selector.", selectionMethod);
        return this.getElementsByQuerySelectorAll_(selectors, useDataVars);
      }
      return this.getElement(context, selectors, selectionMethod).then(function(element) {
        return [element];
      });
    };
    _proto.verifyAmpElements_ = function verifyAmpElements_(elements, selector) {
      for (var i = 0; i < elements.length; i++) {
        userAssert(elements[i].classList.contains("i-amphtml-element"), 'Element "%s" is required to be an AMP element', selector);
      }
    };
    _proto.createSelectiveListener = function createSelectiveListener(listener, context, selector, selectionMethod) {
      var _this4 = this;
      if (selectionMethod === void 0) {
        selectionMethod = null;
      }
      return function(event) {
        if (selector == ":host") {
          return;
        }
        var rootElement = _this4.getRootElement();
        var isSelectAny = selector == "*";
        var isSelectRoot = selector == ":root";
        var target = event.target;
        while (target) {
          if (!_this4.contains(target)) {
            break;
          }
          if (selectionMethod == "scope" && !isSelectRoot && !context.contains(target)) {
            break;
          }
          if (selectionMethod == "closest" && !target.contains(context)) {
            target = target.parentElement;
            continue;
          }
          if (isSelectAny || isSelectRoot && target == rootElement || tryMatches_(target, selector)) {
            listener(target, event);
            break;
          }
          target = target.parentElement;
        }
      };
    };
    _proto.whenIniLoaded = function whenIniLoaded() {
    };
    _proto.getVisibilityManager = function getVisibilityManager() {
      if (!this.visibilityManager_) {
        this.visibilityManager_ = provideVisibilityManager(this.getRoot());
      }
      return this.visibilityManager_;
    };
    _proto.getScrollManager = function getScrollManager() {
      if (!this.scrollManager_) {
        this.scrollManager_ = new ScrollManager(this);
      }
      return this.scrollManager_;
    };
    return AnalyticsRoot2;
  }();
  var AmpdocAnalyticsRoot = /* @__PURE__ */ function(_AnalyticsRoot) {
    _inherits4(AmpdocAnalyticsRoot2, _AnalyticsRoot);
    var _super = _createSuper4(AmpdocAnalyticsRoot2);
    function AmpdocAnalyticsRoot2(ampdoc2) {
      return _super.call(this, ampdoc2);
    }
    var _proto2 = AmpdocAnalyticsRoot2.prototype;
    _proto2.getType = function getType() {
      return "ampdoc";
    };
    _proto2.getRoot = function getRoot() {
      return this.ampdoc.getRootNode();
    };
    _proto2.getHostElement = function getHostElement() {
      return null;
    };
    _proto2.signals = function signals() {
      return this.ampdoc.signals();
    };
    _proto2.getElementById = function getElementById(id) {
      return this.ampdoc.getElementById(id);
    };
    _proto2.whenIniLoaded = function whenIniLoaded() {
      var viewport = Services.viewportForDoc(this.ampdoc);
      var rect;
      if (getMode(this.ampdoc.win).runtime == "inabox") {
        rect = viewport.getLayoutRect(this.getRootElement());
      } else {
        var size = viewport.getSize();
        rect = layoutRectLtwh(0, 0, size.width, size.height);
      }
      return whenContentIniLoad(this.ampdoc, this.ampdoc.win, rect);
    };
    return AmpdocAnalyticsRoot2;
  }(AnalyticsRoot);
  var EmbedAnalyticsRoot = /* @__PURE__ */ function(_AnalyticsRoot2) {
    _inherits4(EmbedAnalyticsRoot2, _AnalyticsRoot2);
    var _super2 = _createSuper4(EmbedAnalyticsRoot2);
    function EmbedAnalyticsRoot2(ampdoc2, embed) {
      var _this5;
      _this5 = _super2.call(this, ampdoc2);
      _this5.embed = embed;
      return _this5;
    }
    var _proto3 = EmbedAnalyticsRoot2.prototype;
    _proto3.getType = function getType() {
      return "embed";
    };
    _proto3.getRoot = function getRoot() {
      return this.embed.win.document;
    };
    _proto3.getHostElement = function getHostElement() {
      return this.embed.iframe;
    };
    _proto3.signals = function signals() {
      return this.embed.signals();
    };
    _proto3.getElementById = function getElementById(id) {
      return this.embed.win.document.getElementById(id);
    };
    _proto3.whenIniLoaded = function whenIniLoaded() {
      return this.embed.whenIniLoaded();
    };
    return EmbedAnalyticsRoot2;
  }(AnalyticsRoot);
  function tryMatches_(el, selector) {
    try {
      return matches(el, selector);
    } catch (e) {
      user().error(TAG11, "Bad query selector.", selector, e);
      return false;
    }
  }

  // extensions/amp-analytics/0.1/analytics-group.js
  var IMMEDIATE_TRIGGER_THRES = 1;
  var HIGH_PRIORITY_TRIGGER_THRES = 3;
  var AnalyticsGroup = /* @__PURE__ */ function() {
    function AnalyticsGroup2(root, analyticsElement) {
      this.root_ = root;
      this.analyticsElement_ = analyticsElement;
      this.listeners_ = [];
      this.triggerCount_ = 0;
      this.win_ = getWin(analyticsElement);
    }
    var _proto = AnalyticsGroup2.prototype;
    _proto.dispose = function dispose() {
      this.listeners_.forEach(function(listener) {
        listener();
      });
    };
    _proto.addTrigger = function addTrigger(config, handler) {
      var _this = this;
      var eventType = dev().assertString(config["on"]);
      var trackerKey = getTrackerKeyName(eventType);
      var trackerAllowlist = getTrackerTypesForParentType(this.root_.getType());
      var tracker = this.root_.getTrackerForAllowlist(trackerKey, trackerAllowlist);
      userAssert(!!tracker, 'Trigger type "%s" is not allowed in the %s', eventType, this.root_.getType());
      var unlisten;
      var deferred = new Deferred();
      var task = function task2() {
        unlisten = tracker.add(_this.analyticsElement_, eventType, config, handler);
        _this.listeners_.push(unlisten);
        deferred.resolve();
      };
      if (this.triggerCount_ < IMMEDIATE_TRIGGER_THRES || getMode(this.win_).runtime == "inabox") {
        task();
      } else {
        var priority = this.triggerCount_ < HIGH_PRIORITY_TRIGGER_THRES ? ChunkPriority_Enum.HIGH : ChunkPriority_Enum.LOW;
        chunk(this.analyticsElement_, task, priority);
      }
      this.triggerCount_++;
      return deferred.promise;
    };
    return AnalyticsGroup2;
  }();

  // extensions/amp-analytics/0.1/instrumentation.js
  var PROP2 = "__AMP_AN_ROOT";
  var InstrumentationService = /* @__PURE__ */ function() {
    function InstrumentationService2(ampdoc2) {
      this.ampdoc = ampdoc2;
      this.root_ = this.findRoot_(ampdoc2.getRootNode());
    }
    var _proto = InstrumentationService2.prototype;
    _proto.dispose = function dispose() {
      this.root_.dispose();
    };
    _proto.getAnalyticsRoot = function getAnalyticsRoot(context) {
      return this.findRoot_(context);
    };
    _proto.createAnalyticsGroup = function createAnalyticsGroup(analyticsElement) {
      var root = this.findRoot_(analyticsElement);
      return new AnalyticsGroup(root, analyticsElement);
    };
    _proto.getTrackerClass_ = function getTrackerClass_(trackerName) {
      switch (trackerName) {
        case AnalyticsEventType.STORY:
          return AmpStoryEventTracker;
        default:
          return CustomEventTracker;
      }
    };
    _proto.triggerEventForTarget = function triggerEventForTarget(target, eventType, vars, enableDataVars) {
      if (vars === void 0) {
        vars = dict();
      }
      if (enableDataVars === void 0) {
        enableDataVars = true;
      }
      var event = new AnalyticsEvent(target, eventType, vars, enableDataVars);
      var root = this.findRoot_(target);
      var trackerName = getTrackerKeyName(eventType);
      var tracker = root.getTracker(trackerName, this.getTrackerClass_(trackerName));
      tracker.trigger(event);
    };
    _proto.findRoot_ = function findRoot_(context) {
      var ampdoc2 = Services.ampdoc(context);
      var frame = getParentWindowFrameElement(context);
      var embed = frame && getFriendlyIframeEmbedOptional(frame);
      if (ampdoc2 == this.ampdoc && !embed && this.root_) {
        return this.root_;
      }
      return this.getOrCreateRoot_(embed || ampdoc2, function() {
        if (embed) {
          return new EmbedAnalyticsRoot(ampdoc2, embed);
        }
        return new AmpdocAnalyticsRoot(ampdoc2);
      });
    };
    _proto.getOrCreateRoot_ = function getOrCreateRoot_(holder, factory) {
      var root = holder[PROP2];
      if (!root) {
        root = factory();
        holder[PROP2] = root;
      }
      return root;
    };
    return InstrumentationService2;
  }();
  function instrumentationServicePromiseForDoc(elementOrAmpDoc) {
    return getServicePromiseForDoc(elementOrAmpDoc, "amp-analytics-instrumentation");
  }

  // src/core/dom/layout/index.js
  var LayoutPriority_Enum = {
    CONTENT: 0,
    METADATA: 1,
    ADS: 2,
    BACKGROUND: 3
  };

  // src/service/navigation.js
  var Priority_Enum = {
    LINK_REWRITER_MANAGER: 0,
    ANALYTICS_LINKER: 2
  };

  // extensions/amp-analytics/0.1/linker-manager.js
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
  var TAG12 = "amp-analytics/linker-manager";
  var LinkerManager = /* @__PURE__ */ function() {
    function LinkerManager2(ampdoc2, config, type, element) {
      this.ampdoc_ = ampdoc2;
      this.config_ = config["linkers"];
      this.vars_ = config["vars"] || {};
      this.type_ = type;
      this.element_ = element;
      this.resolvedIds_ = dict();
      this.urlService_ = Services.urlForDoc(this.element_);
      this.formSubmitService_ = Services.formSubmitForDoc(ampdoc2);
      this.formSubmitUnlistener_ = null;
      this.variableService_ = variableServiceForDoc(this.ampdoc_);
      this.highestAvailableDomain_ = null;
    }
    var _proto = LinkerManager2.prototype;
    _proto.init = function init() {
      var _this = this;
      if (!isObject(this.config_)) {
        return resolvedPromise();
      }
      this.highestAvailableDomain_ = getHighestAvailableDomain(this.ampdoc_.win);
      this.config_ = this.processConfig_(this.config_);
      var allLinkerPromises = Object.keys(this.config_).map(function(name) {
        var ids = _this.config_[name]["ids"];
        var keys = Object.keys(ids);
        var valuePromises = keys.map(function(key) {
          var expansionOptions = new ExpansionOptions(_this.vars_, void 0, true);
          return _this.expandTemplateWithUrlParams_(ids[key], expansionOptions);
        });
        return Promise.all(valuePromises).then(function(values) {
          var expandedIds = {};
          values.forEach(function(value, i) {
            if (value) {
              expandedIds[keys[i]] = value;
            }
          });
          _this.resolvedIds_[name] = expandedIds;
          return expandedIds;
        });
      });
      if (allLinkerPromises.length) {
        var navigation = Services.navigationForDoc(this.ampdoc_);
        navigation.registerAnchorMutator(function(element, event) {
          if (!element.href || event.type !== "click") {
            return;
          }
          element.href = _this.applyLinkers_(element.href);
        }, Priority_Enum.ANALYTICS_LINKER);
        navigation.registerNavigateToMutator(function(url) {
          return _this.applyLinkers_(url);
        }, Priority_Enum.ANALYTICS_LINKER);
      }
      this.enableFormSupport_();
      return Promise.all(allLinkerPromises);
    };
    _proto.dispose = function dispose() {
      if (this.formSubmitUnlistener_) {
        this.formSubmitUnlistener_();
      }
    };
    _proto.processConfig_ = function processConfig_(config) {
      var processedConfig = dict();
      var defaultConfig2 = {
        enabled: this.isLegacyOptIn_() && this.isSafari12OrAbove_()
      };
      var linkerNames = Object.keys(config).filter(function(key) {
        var value = config[key];
        var isLinkerConfig = isObject(value);
        if (!isLinkerConfig) {
          defaultConfig2[key] = value;
        }
        return isLinkerConfig;
      });
      var location = WindowInterface.getLocation(this.ampdoc_.win);
      var isProxyOrigin2 = this.urlService_.isProxyOrigin(location);
      linkerNames.forEach(function(name) {
        var mergedConfig = _extends4({}, defaultConfig2, config[name]);
        if (mergedConfig["enabled"] !== true) {
          user().info(TAG12, "linker config for %s is not enabled and will be ignored.", name);
          return;
        }
        if (!isProxyOrigin2 && mergedConfig["proxyOnly"] !== false) {
          return;
        }
        if (!mergedConfig["ids"]) {
          user().error(TAG12, '"ids" is a required field for use of "linkers".');
          return;
        }
        processedConfig[name] = mergedConfig;
      });
      return processedConfig;
    };
    _proto.expandTemplateWithUrlParams_ = function expandTemplateWithUrlParams_(template, expansionOptions) {
      var _this2 = this;
      var bindings = this.variableService_.getMacros(this.element_);
      return this.variableService_.expandTemplate(template, expansionOptions, this.element_).then(function(expanded) {
        var urlReplacements = Services.urlReplacementsForDoc(_this2.element_);
        return urlReplacements.expandUrlAsync(expanded, bindings);
      });
    };
    _proto.isLegacyOptIn_ = function isLegacyOptIn_() {
      if (this.type_ !== "googleanalytics") {
        return false;
      }
      if (this.ampdoc_.getMetaByName("amp-google-client-id-api") !== "googleanalytics") {
        return false;
      }
      return this.ampdoc_.registerSingleton(AMPDOC_SINGLETON_NAME_ENUM.LINKER);
    };
    _proto.isSafari12OrAbove_ = function isSafari12OrAbove_() {
      var platform = Services.platformFor(this.ampdoc_.win);
      return platform.isSafari() && platform.getMajorVersion() >= 12;
    };
    _proto.applyLinkers_ = function applyLinkers_(url) {
      var linkerConfigs = this.config_;
      for (var linkerName in linkerConfigs) {
        if (this.resolvedIds_[linkerName]) {
          url = this.maybeAppendLinker_(url, linkerName, linkerConfigs[linkerName]);
        }
      }
      return url;
    };
    _proto.maybeAppendLinker_ = function maybeAppendLinker_(url, name, config) {
      var location = this.urlService_.parse(url);
      if (this.isDomainMatch_(location, name, config) && this.isProtocolMatch_(location)) {
        var linkerValue = createLinker("1", this.resolvedIds_[name]);
        if (linkerValue) {
          var params = dict();
          params[name] = linkerValue;
          return addMissingParamsToUrl(url, params);
        }
      }
      return url;
    };
    _proto.isDomainMatch_ = function isDomainMatch_(location, name, config) {
      var domains = config["destinationDomains"];
      var hostname = location.hostname;
      var winHostname = WindowInterface.getHostname(this.ampdoc_.win);
      var sameDomain = config["sameDomainEnabled"];
      if (!Boolean(sameDomain) && winHostname === hostname) {
        return false;
      }
      if (domains && !Array.isArray(domains)) {
        user().warn(TAG12, "%s destinationDomains must be an array.", name);
        return false;
      }
      if (domains) {
        return this.destinationDomainsMatch_(domains, hostname);
      }
      var _Services$documentInf = Services.documentInfoForDoc(this.ampdoc_), canonicalUrl = _Services$documentInf.canonicalUrl, sourceUrl = _Services$documentInf.sourceUrl;
      var canonicalOrigin = this.urlService_.parse(canonicalUrl).hostname;
      var isFriendlyCanonicalOrigin = areFriendlyDomains(canonicalOrigin, hostname);
      if (this.highestAvailableDomain_) {
        var destinationDomain = [this.highestAvailableDomain_, "*" + this.highestAvailableDomain_];
        return this.destinationDomainsMatch_(destinationDomain, hostname) || isFriendlyCanonicalOrigin;
      }
      var sourceOrigin = this.urlService_.parse(sourceUrl).hostname;
      return areFriendlyDomains(sourceOrigin, hostname) || isFriendlyCanonicalOrigin;
    };
    _proto.isProtocolMatch_ = function isProtocolMatch_(location) {
      return location.protocol === "https:" || location.protocol === "http:";
    };
    _proto.destinationDomainsMatch_ = function destinationDomainsMatch_(domains, hostname) {
      for (var i = 0; i < domains.length; i++) {
        var domain = domains[i];
        if (domain === hostname) {
          return true;
        }
        if (domain.indexOf("*") !== -1 && isWildCardMatch(hostname, domain)) {
          return true;
        }
      }
      return false;
    };
    _proto.enableFormSupport_ = function enableFormSupport_() {
      var _this3 = this;
      if (this.formSubmitUnlistener_) {
        return;
      }
      this.formSubmitService_.then(function(formService) {
        _this3.formSubmitUnlistener_ = formService.beforeSubmit(_this3.handleFormSubmit_.bind(_this3));
      });
    };
    _proto.handleFormSubmit_ = function handleFormSubmit_(event) {
      var actionXhrMutator = event.actionXhrMutator, form = event.form;
      for (var linkerName in this.config_) {
        var config = this.config_[linkerName];
        var url = form.getAttribute("action-xhr") || form.getAttribute("action");
        var location = this.urlService_.parse(url);
        if (this.isDomainMatch_(location, linkerName, config)) {
          this.addDataToForm_(form, actionXhrMutator, linkerName);
        }
      }
    };
    _proto.addDataToForm_ = function addDataToForm_(form, actionXhrMutator, linkerName) {
      var ids = this.resolvedIds_[linkerName];
      if (!ids) {
        return;
      }
      var linkerValue = createLinker("1", ids);
      var actionXhrUrl = form.getAttribute("action-xhr");
      if (actionXhrUrl) {
        var decoratedUrl = addParamToUrl(actionXhrUrl, linkerName, linkerValue);
        return actionXhrMutator(decoratedUrl);
      }
      this.addHiddenInputs_(form, linkerName, linkerValue);
    };
    _proto.addHiddenInputs_ = function addHiddenInputs_(form, linkerName, linkerValue) {
      var attrs = dict({
        "type": "hidden",
        "name": linkerName,
        "value": linkerValue
      });
      var inputEl = createElementWithAttributes(form.ownerDocument, "input", attrs);
      form.appendChild(inputEl);
    };
    return LinkerManager2;
  }();
  function areFriendlyDomains(domain1, domain2) {
    return getBaseDomain(domain1) === getBaseDomain(domain2);
  }
  function getBaseDomain(domain) {
    return domain.replace(/^(?:www\.|m\.|amp\.)+/, "");
  }
  function regexEscape(str) {
    return str.replace(/[-\/\\^$+?.()|[\]{}]/g, "\\$&");
  }
  function isWildCardMatch(hostname, domain) {
    var escaped = regexEscape(domain);
    var regex = escaped.replace(/\*/g, ".*");
    return new RegExp("^" + regex + "$").test(hostname);
  }

  // extensions/amp-analytics/0.1/transport-serializer.js
  var EXTRA_URL_PARAM_VAR = "${extraUrlParams}";
  var DefaultTransportSerializer = /* @__PURE__ */ function() {
    function DefaultTransportSerializer2() {
    }
    var _proto2 = DefaultTransportSerializer2.prototype;
    _proto2.generateRequest = function generateRequest(baseUrl, segment, withPayload) {
      if (withPayload === void 0) {
        withPayload = false;
      }
      if (withPayload) {
        return {
          url: baseUrl.replace(EXTRA_URL_PARAM_VAR, ""),
          payload: JSON.stringify(segment["extraUrlParams"])
        };
      }
      return {
        url: defaultSerializer(baseUrl, [segment])
      };
    };
    _proto2.generateBatchRequest = function generateBatchRequest(baseUrl, segments, withPayload) {
      if (withPayload === void 0) {
        withPayload = false;
      }
      if (withPayload) {
        return {
          url: baseUrl.replace(EXTRA_URL_PARAM_VAR, ""),
          payload: JSON.stringify(segments.map(function(segment) {
            return segment["extraUrlParams"];
          }))
        };
      }
      return {
        url: defaultSerializer(baseUrl, segments)
      };
    };
    return DefaultTransportSerializer2;
  }();
  var TransportSerializers = {
    "default": new DefaultTransportSerializer()
  };
  function defaultSerializer(baseUrl, batchSegments) {
    var extraUrlParamsStr = batchSegments.map(function(item) {
      return serializeQueryString(item["extraUrlParams"]);
    }).filter(Boolean).join("&");
    var requestUrl;
    if (baseUrl.indexOf(EXTRA_URL_PARAM_VAR) >= 0) {
      requestUrl = baseUrl.replace(EXTRA_URL_PARAM_VAR, extraUrlParamsStr);
    } else {
      requestUrl = appendEncodedParamStringToUrl(baseUrl, extraUrlParamsStr);
    }
    return requestUrl;
  }

  // extensions/amp-analytics/0.1/sandbox-vars-allowlist.js
  var SANDBOX_AVAILABLE_VARS = {
    "AMPDOC_HOST": true,
    "AMPDOC_HOSTNAME": true,
    "AMPDOC_URL": true,
    "AMP_VERSION": true,
    "AVAILABLE_SCREEN_HEIGHT": true,
    "AVAILABLE_SCREEN_WIDTH": true,
    "BACKGROUND_STATE": true,
    "BROWSER_LANGUAGE": true,
    "CANONICAL_HOST": true,
    "CANONICAL_HOSTNAME": true,
    "CANONICAL_PATH": true,
    "CANONICAL_URL": true,
    "DOCUMENT_CHARSET": true,
    "FIRST_CONTENTFUL_PAINT": true,
    "FIRST_VIEWPORT_READY": true,
    "MAKE_BODY_VISIBLE": true,
    "RANDOM": true,
    "SCREEN_COLOR_DEPTH": true,
    "SCREEN_HEIGHT": true,
    "SCREEN_WIDTH": true,
    "SOURCE_HOST": true,
    "SOURCE_HOSTNAME": true,
    "SOURCE_PATH": true,
    "SOURCE_URL": true,
    "TIMESTAMP": true,
    "TIMEZONE": true,
    "TIMEZONE_CODE": true,
    "USER_AGENT": true,
    "VIEWPORT_HEIGHT": true,
    "VIEWPORT_WIDTH": true
  };

  // extensions/amp-analytics/0.1/resource-timing.js
  var RESOURCE_TIMING_BUFFER_SIZE = 150;
  function yieldThread(fn) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        return resolve(fn());
      });
    });
  }
  function validateResourceTimingSpec(spec) {
    if (!isObject(spec["resources"])) {
      user().warn("ANALYTICS", 'resourceTimingSpec missing "resources" field');
      return false;
    }
    if (!spec["encoding"] || !spec["encoding"]["entry"] || !spec["encoding"]["delim"]) {
      user().warn("ANALYTICS", "resourceTimingSpec is missing or has incomplete encoding options");
      return false;
    }
    if (spec["encoding"]["base"] < 2 || spec["encoding"]["base"] > 36) {
      user().warn("ANALYTICS", "resource timing variables only supports bases between 2 and 36");
      return false;
    }
    if (spec["responseAfter"] != null && typeof spec["responseAfter"] != "number") {
      user().warn("ANALYTICS", 'resourceTimingSpec["responseAfter"] must be a number');
      return false;
    }
    return true;
  }
  function getResourceTimingEntries(win) {
    return win.performance.getEntriesByType("resource");
  }
  function entryToExpansionOptions(entry, name, format) {
    var vars = {
      "key": name,
      "startTime": format(entry.startTime),
      "redirectTime": format(entry.redirectEnd, entry.redirectStart),
      "domainLookupTime": format(entry.domainLookupEnd, entry.domainLookupStart),
      "tcpConnectTime": format(entry.connectEnd, entry.connectStart),
      "serverResponseTime": format(entry.responseStart, entry.requestStart),
      "networkTransferTime": format(entry.responseEnd, entry.responseStart),
      "transferSize": format(entry.transferSize || 0),
      "encodedBodySize": format(entry.encodedBodySize || 0),
      "decodedBodySize": format(entry.decodedBodySize || 0),
      "duration": format(entry.duration),
      "initiatorType": entry.initiatorType
    };
    return new ExpansionOptions(vars, 1);
  }
  function nameForEntry(entry, resourcesByHost) {
    var url = entry.name;
    for (var i = 0; i < resourcesByHost.length; ++i) {
      var _resourcesByHost$i = resourcesByHost[i], hostPattern = _resourcesByHost$i.hostPattern, resources = _resourcesByHost$i.resources;
      if (!hostPattern.test(url.host)) {
        continue;
      }
      var index = findIndex(resources, function(res) {
        return res.pathPattern.test(url.pathname) && res.queryPattern.test(url.search);
      });
      if (index != -1) {
        return resources[index].name;
      }
    }
    return null;
  }
  function groupSpecsByHost(resourceDefs) {
    var byHost = {};
    for (var name in resourceDefs) {
      var host = resourceDefs[name]["host"] || "";
      var path = resourceDefs[name]["path"] || "";
      var query = resourceDefs[name]["query"] || "";
      var pattern = {
        name: name,
        pathPattern: new RegExp(path),
        queryPattern: new RegExp(query)
      };
      if (byHost[host]) {
        byHost[host].resources.push(pattern);
      } else {
        byHost[host] = {
          hostPattern: new RegExp(host),
          resources: [pattern]
        };
      }
    }
    var byHostArray = [];
    for (var _host in byHost) {
      byHostArray.push(byHost[_host]);
    }
    return byHostArray;
  }
  function filterEntries(entries, resourceDefs) {
    var byHost = groupSpecsByHost(resourceDefs);
    var results = [];
    entries.forEach(function(entry) {
      var name = nameForEntry(entry, byHost);
      if (name) {
        results.push({
          entry: entry,
          name: name
        });
      }
    });
    return results;
  }
  function serialize2(entries, resourceTimingSpec, element) {
    var resources = resourceTimingSpec["resources"];
    var encoding = resourceTimingSpec["encoding"];
    var variableService = variableServiceForDoc(element);
    var format = function format2(val, relativeTo) {
      if (relativeTo === void 0) {
        relativeTo = 0;
      }
      return Math.round(val - relativeTo).toString(encoding["base"] || 10);
    };
    var promises = filterEntries(entries, resources).map(function(resourceTimingEntry) {
      var entry = resourceTimingEntry.entry, name = resourceTimingEntry.name;
      return entryToExpansionOptions(entry, name, format);
    }).map(function(expansion) {
      return variableService.expandTemplate(encoding["entry"], expansion, element);
    });
    return Promise.all(promises).then(function(vars) {
      return vars.join(encoding["delim"]);
    });
  }
  function serializeResourceTiming(element, resourceTimingSpec) {
    var _element$getAmpDoc = element.getAmpDoc(), win = _element$getAmpDoc.win;
    if (resourceTimingSpec["done"] || !win.performance || !win.performance.now || !win.performance.getEntriesByType || !validateResourceTimingSpec(resourceTimingSpec)) {
      resourceTimingSpec["done"] = true;
      return Promise.resolve("");
    }
    var entries = getResourceTimingEntries(win);
    if (entries.length >= RESOURCE_TIMING_BUFFER_SIZE) {
      resourceTimingSpec["done"] = true;
    }
    var responseAfter = resourceTimingSpec["responseAfter"] || 0;
    resourceTimingSpec["responseAfter"] = Math.max(responseAfter, win.performance.now());
    entries = entries.filter(function(e) {
      return e.startTime + e.duration >= responseAfter;
    });
    if (!entries.length) {
      return Promise.resolve("");
    }
    return yieldThread(function() {
      return serialize2(entries, resourceTimingSpec, element);
    });
  }
  function getResourceTiming(element, spec, startTime) {
    if (spec && Date.now() < startTime + 60 * 1e3) {
      return serializeResourceTiming(element, spec);
    } else {
      return Promise.resolve("");
    }
  }

  // extensions/amp-analytics/0.1/requests.js
  function _extends5() {
    _extends5 = Object.assign || function(target) {
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
    return _extends5.apply(this, arguments);
  }
  var BATCH_INTERVAL_MIN = 200;
  var RequestHandler = /* @__PURE__ */ function() {
    function RequestHandler2(element, request, preconnect, transport, isSandbox) {
      this.element_ = element;
      this.ampdoc_ = element.getAmpDoc();
      this.win = this.ampdoc_.win;
      this.requestOrigin_ = request["origin"];
      this.baseUrl = devAssert2(request["baseUrl"]);
      this.batchInterval_ = request["batchInterval"];
      this.reportWindow_ = Number(request["reportWindow"]) || null;
      this.batchIntervalPointer_ = null;
      this.variableService_ = variableServiceForDoc(element);
      this.urlReplacementService_ = Services.urlReplacementsForDoc(element);
      this.urlService_ = Services.urlForDoc(element);
      this.baseUrlPromise_ = null;
      this.requestOriginPromise_ = null;
      this.batchSegmentPromises_ = [];
      this.preconnect_ = preconnect;
      this.transport_ = transport;
      this.allowlist_ = isSandbox ? SANDBOX_AVAILABLE_VARS : void 0;
      this.batchIntervalTimeoutId_ = null;
      this.reportWindowTimeoutId_ = null;
      this.reportRequest_ = true;
      this.lastTrigger_ = null;
      this.queueSize_ = 0;
      this.startTime_ = Date.now();
      this.initReportWindow_();
      this.initBatchInterval_();
    }
    var _proto = RequestHandler2.prototype;
    _proto.send = function send(configParams, trigger, expansionOptions) {
      var isImportant = trigger["important"] === true;
      if (!this.reportRequest_ && !isImportant) {
        return;
      }
      this.queueSize_++;
      this.lastTrigger_ = trigger;
      var bindings = this.variableService_.getMacros(this.element_);
      bindings["RESOURCE_TIMING"] = getResourceTiming(this.element_, trigger["resourceTimingSpec"], this.startTime_);
      if (!this.baseUrlPromise_) {
        expansionOptions.freezeVar("extraUrlParams");
        this.baseUrlPromise_ = this.expandTemplateUrl_(this.baseUrl, expansionOptions, bindings);
      }
      if (!this.requestOriginPromise_ && this.requestOrigin_) {
        var requestOriginExpansionOptions = new ExpansionOptions(expansionOptions.vars, expansionOptions.iterations, true);
        this.requestOriginPromise_ = this.expandTemplateUrl_(this.requestOrigin_, requestOriginExpansionOptions, bindings);
      }
      var params = _extends5({}, configParams, trigger["extraUrlParams"]);
      var timestamp = this.win.Date.now();
      var batchSegmentPromise = expandExtraUrlParams(this.variableService_, this.urlReplacementService_, params, expansionOptions, bindings, this.element_, this.allowlist_).then(function(params2) {
        return dict({
          "trigger": trigger["on"],
          "timestamp": timestamp,
          "extraUrlParams": params2
        });
      });
      this.batchSegmentPromises_.push(batchSegmentPromise);
      this.trigger_(isImportant || !this.batchInterval_);
    };
    _proto.dispose = function dispose() {
      this.reset_();
      if (this.batchIntervalTimeoutId_) {
        this.win.clearTimeout(this.batchIntervalTimeoutId_);
        this.batchIntervalTimeoutId_ = null;
      }
      if (this.reportWindowTimeoutId_) {
        this.win.clearTimeout(this.reportWindowTimeoutId_);
        this.reportWindowTimeoutId_ = null;
      }
    };
    _proto.expandTemplateUrl_ = function expandTemplateUrl_(url, expansionOptions, bindings) {
      var _this = this;
      return this.variableService_.expandTemplate(url, expansionOptions, this.element_, bindings, this.allowlist_).then(function(url2) {
        return _this.urlReplacementService_.expandUrlAsync(url2, bindings, _this.allowlist_).catch(function(e) {
          return userAssert(false, 'Could not expand URL "' + url2 + '": ' + e.message);
        });
      });
    };
    _proto.trigger_ = function trigger_(isImmediate) {
      if (this.queueSize_ == 0) {
        return;
      }
      if (isImmediate) {
        this.fire_();
      }
    };
    _proto.fire_ = function fire_() {
      var _this2 = this;
      var baseUrlPromise = this.baseUrlPromise_, segmentPromises = this.batchSegmentPromises_, requestOriginPromise = this.requestOriginPromise_;
      var trigger = this.lastTrigger_;
      this.reset_();
      var preconnectPromise = requestOriginPromise ? requestOriginPromise : baseUrlPromise;
      preconnectPromise.then(function(preUrl) {
        _this2.preconnect_.url(_this2.ampdoc_, preUrl, true);
      });
      Promise.all([baseUrlPromise, Promise.all(segmentPromises), requestOriginPromise]).then(function(results) {
        var requestUrl = _this2.composeRequestUrl_(results[0], results[2]);
        var batchSegments = results[1];
        if (batchSegments.length === 0) {
          return;
        }
        if (trigger["iframePing"]) {
          userAssert(trigger["on"] == AnalyticsEventType.VISIBLE, "iframePing is only available on page view requests.");
          _this2.transport_.sendRequestUsingIframe(requestUrl, batchSegments[0]);
        } else {
          _this2.transport_.sendRequest(requestUrl, batchSegments, !!_this2.batchInterval_);
        }
      });
    };
    _proto.reset_ = function reset_() {
      this.queueSize_ = 0;
      this.baseUrlPromise_ = null;
      this.batchSegmentPromises_ = [];
      this.lastTrigger_ = null;
    };
    _proto.initBatchInterval_ = function initBatchInterval_() {
      if (!this.batchInterval_) {
        return;
      }
      this.batchInterval_ = isArray(this.batchInterval_) ? this.batchInterval_ : [this.batchInterval_];
      for (var i = 0; i < this.batchInterval_.length; i++) {
        var interval = this.batchInterval_[i];
        userAssert(isFiniteNumber(interval), "Invalid batchInterval value: %s", this.batchInterval_);
        interval = Number(interval) * 1e3;
        userAssert(interval >= BATCH_INTERVAL_MIN, "Invalid batchInterval value: %s, interval value must be greater than %s ms.", this.batchInterval_, BATCH_INTERVAL_MIN);
        this.batchInterval_[i] = interval;
      }
      this.batchIntervalPointer_ = 0;
      this.refreshBatchInterval_();
    };
    _proto.initReportWindow_ = function initReportWindow_() {
      var _this3 = this;
      if (this.reportWindow_) {
        this.reportWindowTimeoutId_ = this.win.setTimeout(function() {
          _this3.trigger_(true);
          _this3.reportRequest_ = false;
          if (_this3.batchIntervalTimeoutId_) {
            _this3.win.clearTimeout(_this3.batchIntervalTimeoutId_);
            _this3.batchIntervalTimeoutId_ = null;
          }
        }, this.reportWindow_ * 1e3);
      }
    };
    _proto.refreshBatchInterval_ = function refreshBatchInterval_() {
      var _this4 = this;
      devAssert2(this.batchIntervalPointer_ != null, "Should not start batchInterval without pointer");
      var interval = this.batchIntervalPointer_ < this.batchInterval_.length ? this.batchInterval_[this.batchIntervalPointer_++] : this.batchInterval_[this.batchInterval_.length - 1];
      this.batchIntervalTimeoutId_ = this.win.setTimeout(function() {
        _this4.trigger_(true);
        _this4.refreshBatchInterval_();
      }, interval);
    };
    _proto.composeRequestUrl_ = function composeRequestUrl_(baseUrl, opt_requestOrigin) {
      if (opt_requestOrigin) {
        var requestOriginInfo = this.urlService_.parse(opt_requestOrigin);
        return requestOriginInfo.origin + baseUrl;
      }
      return baseUrl;
    };
    return RequestHandler2;
  }();
  function expandPostMessage(ampdoc2, msg, configParams, trigger, expansionOption, element) {
    var variableService = variableServiceForDoc(ampdoc2);
    var urlReplacementService = Services.urlReplacementsForDoc(element);
    var bindings = variableService.getMacros(element);
    expansionOption.freezeVar("extraUrlParams");
    var basePromise = variableService.expandTemplate(msg, expansionOption, element).then(function(base) {
      return urlReplacementService.expandStringAsync(base, bindings);
    });
    if (msg.indexOf("${extraUrlParams}") < 0) {
      return basePromise;
    }
    return basePromise.then(function(expandedMsg) {
      var params = _extends5({}, configParams, trigger["extraUrlParams"]);
      return expandExtraUrlParams(variableService, urlReplacementService, params, expansionOption, bindings, element).then(function(extraUrlParams) {
        return defaultSerializer(expandedMsg, [dict({
          "extraUrlParams": extraUrlParams
        })]);
      });
    });
  }
  function expandExtraUrlParams(variableService, urlReplacements, params, expansionOption, bindings, element, opt_allowlist) {
    var newParams = {};
    var requestPromises = [];
    var option = new ExpansionOptions(expansionOption.vars, expansionOption.iterations, true);
    var expandObject = function expandObject2(data, key, expandedData) {
      var value = data[key];
      if (typeof value === "string") {
        expandedData[key] = void 0;
        var request = variableService.expandTemplate(value, option, element).then(function(value2) {
          return urlReplacements.expandStringAsync(value2, bindings, opt_allowlist);
        }).then(function(value2) {
          expandedData[key] = value2;
        });
        requestPromises.push(request);
      } else if (isArray(value)) {
        expandedData[key] = [];
        for (var index2 = 0; index2 < value.length; index2++) {
          expandObject2(value, index2, expandedData[key]);
        }
      } else if (isObject(value) && value !== null) {
        expandedData[key] = {};
        var valueKeys = Object.keys(value);
        for (var _index = 0; _index < valueKeys.length; _index++) {
          expandObject2(value, valueKeys[_index], expandedData[key]);
        }
      } else {
        expandedData[key] = value;
      }
    };
    var paramKeys = Object.keys(params);
    for (var index = 0; index < paramKeys.length; index++) {
      expandObject(params, paramKeys[index], newParams);
    }
    return Promise.all(requestPromises).then(function() {
      return newParams;
    });
  }

  // extensions/amp-analytics/0.1/iframe-transport-message-queue.js
  var TAG_ = "amp-analytics/iframe-transport-message-queue";
  var MAX_QUEUE_SIZE_ = 100;
  var IframeTransportMessageQueue = /* @__PURE__ */ function() {
    function IframeTransportMessageQueue2(win, frame) {
      var _this = this;
      this.frame_ = frame;
      this.isReady_ = false;
      this.pendingEvents_ = [];
      this.postMessageApi_ = new SubscriptionApi(this.frame_, MessageType_Enum.SEND_IFRAME_TRANSPORT_EVENTS, true, function() {
        _this.setIsReady();
      });
    }
    var _proto = IframeTransportMessageQueue2.prototype;
    _proto.isReady = function isReady() {
      return this.isReady_;
    };
    _proto.setIsReady = function setIsReady() {
      this.isReady_ = true;
      this.flushQueue_();
    };
    _proto.queueSize = function queueSize() {
      return this.pendingEvents_.length;
    };
    _proto.enqueue = function enqueue(event) {
      devAssert2(event && event.creativeId && event.message, "Attempted to enqueue malformed message for: " + event.creativeId);
      this.pendingEvents_.push(event);
      if (this.queueSize() >= MAX_QUEUE_SIZE_) {
        dev().warn(TAG_, "Exceeded maximum size of queue for: " + event.creativeId);
        this.pendingEvents_.shift();
      }
      this.flushQueue_();
    };
    _proto.flushQueue_ = function flushQueue_() {
      if (this.isReady() && this.queueSize()) {
        this.postMessageApi_.send(MessageType_Enum.IFRAME_TRANSPORT_EVENTS, {
          events: this.pendingEvents_
        });
        this.pendingEvents_ = [];
      }
    };
    return IframeTransportMessageQueue2;
  }();

  // extensions/amp-analytics/0.1/iframe-transport.js
  var TAG_2 = "amp-analytics/iframe-transport";
  var LONG_TASK_REPORTING_THRESHOLD = 5;
  function getIframeTransportScriptUrl(ampWin, opt_forceProdUrl) {
    if ((getMode().localDev || getMode().test) && !opt_forceProdUrl && ampWin.parent && ampWin.parent.location) {
      var loc = ampWin.parent.location;
      return loc.protocol + "//" + loc.host + "/dist/iframe-transport-client-lib.js";
    }
    return urls.thirdParty + ("/" + version() + "/iframe-transport-client-v0.js");
  }
  var IframeTransport = /* @__PURE__ */ function() {
    function IframeTransport2(ampWin, type, config, id) {
      this.ampWin_ = ampWin;
      this.type_ = type;
      this.creativeId_ = id;
      devAssert2(config && config["iframe"], "Must supply iframe URL to constructor!");
      this.frameUrl_ = config["iframe"];
      this.numLongTasks_ = 0;
      this.processCrossDomainIframe();
    }
    var _proto = IframeTransport2.prototype;
    _proto.detach = function detach() {
      IframeTransport2.markCrossDomainIframeAsDone(this.ampWin_.document, this.type_);
    };
    _proto.processCrossDomainIframe = function processCrossDomainIframe() {
      var frameData;
      if (IframeTransport2.hasCrossDomainIframe(this.type_)) {
        frameData = IframeTransport2.getFrameData(this.type_);
        ++frameData.usageCount;
      } else {
        frameData = this.createCrossDomainIframe();
        this.ampWin_.document.body.appendChild(frameData.frame);
        this.createPerformanceObserver_();
      }
      devAssert2(frameData, "Trying to use non-existent frame");
    };
    _proto.createCrossDomainIframe = function createCrossDomainIframe() {
      var sentinel = IframeTransport2.createUniqueId_();
      var frameName = JSON.stringify({
        scriptSrc: getIframeTransportScriptUrl(this.ampWin_),
        sentinel: sentinel,
        type: this.type_
      });
      var frame = createElementWithAttributes(this.ampWin_.document, "iframe", {
        sandbox: "allow-scripts allow-same-origin",
        name: frameName,
        "data-amp-3p-sentinel": sentinel
      });
      frame.sentinel = sentinel;
      toggle(frame, false);
      frame.src = this.frameUrl_;
      var frameData = {
        frame: frame,
        usageCount: 1,
        queue: new IframeTransportMessageQueue(this.ampWin_, frame)
      };
      IframeTransport2.crossDomainIframes_[this.type_] = frameData;
      return frameData;
    };
    _proto.createPerformanceObserver_ = function createPerformanceObserver_() {
      var _this = this;
      if (!isLongTaskApiSupported(this.ampWin_)) {
        return;
      }
      IframeTransport2.performanceObservers_[this.type_] = new this.ampWin_.PerformanceObserver(function(entryList) {
        if (!entryList) {
          return;
        }
        entryList.getEntries().forEach(function(entry) {
          if (entry && entry["entryType"] == "longtask" && entry["name"] == "cross-origin-descendant" && entry.attribution) {
            entry.attribution.forEach(function(attrib) {
              if (_this.frameUrl_ == attrib["containerSrc"] && ++_this.numLongTasks_ % LONG_TASK_REPORTING_THRESHOLD == 0) {
                user().error(TAG_2, 'Long Task: Vendor: "' + _this.type_ + '"');
              }
            });
          }
        });
      });
      IframeTransport2.performanceObservers_[this.type_].observe({
        entryTypes: ["longtask"]
      });
    };
    IframeTransport2.markCrossDomainIframeAsDone = function markCrossDomainIframeAsDone(ampDoc, type) {
      var frameData = IframeTransport2.getFrameData(type);
      devAssert2(frameData && frameData.frame && frameData.usageCount, "Marked the " + type + " frame as done, but there is no record of it existing.");
      if (--frameData.usageCount) {
        return;
      }
      ampDoc.body.removeChild(frameData.frame);
      delete IframeTransport2.crossDomainIframes_[type];
      if (IframeTransport2.performanceObservers_[type]) {
        IframeTransport2.performanceObservers_[type].disconnect();
        IframeTransport2.performanceObservers_[type] = null;
      }
    };
    IframeTransport2.hasCrossDomainIframe = function hasCrossDomainIframe(type) {
      return hasOwn(IframeTransport2.crossDomainIframes_, type);
    };
    IframeTransport2.createUniqueId_ = function createUniqueId_() {
      return String(++IframeTransport2.nextId_);
    };
    _proto.sendRequest = function sendRequest(event) {
      var frameData = IframeTransport2.getFrameData(this.type_);
      devAssert2(frameData, "Trying to send message to non-existent frame");
      devAssert2(frameData.queue, "Event queue is missing for messages from " + this.type_ + " to creative ID " + this.creativeId_);
      frameData.queue.enqueue({
        creativeId: this.creativeId_,
        message: event
      });
    };
    IframeTransport2.getFrameData = function getFrameData(type) {
      return IframeTransport2.crossDomainIframes_[type];
    };
    IframeTransport2.resetCrossDomainIframes = function resetCrossDomainIframes() {
      IframeTransport2.crossDomainIframes_ = {};
    };
    _proto.getCreativeId = function getCreativeId() {
      return this.creativeId_;
    };
    _proto.getType = function getType() {
      return this.type_;
    };
    return IframeTransport2;
  }();
  function isLongTaskApiSupported(win) {
    return !!win.PerformanceObserver && !!win["TaskAttributionTiming"] && "containerName" in win["TaskAttributionTiming"].prototype;
  }
  IframeTransport.crossDomainIframes_ = {};
  IframeTransport.nextId_ = 0;
  IframeTransport.performanceObservers_ = {};

  // src/pixel.js
  var TAG13 = "pixel";
  function createPixel(win, src, referrerPolicy) {
    if (referrerPolicy && referrerPolicy !== "no-referrer") {
      user().error(TAG13, "Unsupported referrerPolicy: %s", referrerPolicy);
    }
    return referrerPolicy === "no-referrer" ? createNoReferrerPixel(win, src) : createImagePixel(win, src);
  }
  function createNoReferrerPixel(win, src) {
    if (isReferrerPolicySupported()) {
      return createImagePixel(win, src, true);
    } else {
      var iframe = createElementWithAttributes(win.document, "iframe", dict({
        "src": "about:blank",
        "style": "display:none"
      }));
      iframe.onload = function() {
        createImagePixel(iframe.contentWindow, src);
      };
      win.document.body.appendChild(iframe);
      return iframe;
    }
  }
  function createImagePixel(win, src, noReferrer) {
    if (noReferrer === void 0) {
      noReferrer = false;
    }
    var Image2 = WindowInterface.getImage(win);
    var image = new Image2();
    if (noReferrer) {
      image.referrerPolicy = "no-referrer";
    }
    image.src = src;
    return image;
  }
  function isReferrerPolicySupported() {
    return "referrerPolicy" in Image.prototype;
  }

  // src/ad-helper.js
  function getAmpAdResourceId(node, topWin) {
    try {
      var frameParent = getParentWindowFrameElement(node, topWin).parentElement;
      if (frameParent.nodeName == "AMP-AD") {
        return String(frameParent.getResourceId());
      }
    } catch (e) {
    }
    return null;
  }

  // extensions/amp-analytics/0.1/transport.js
  var TAG_3 = "amp-analytics/transport";
  var Transport = /* @__PURE__ */ function() {
    function Transport2(ampdoc2, options) {
      if (options === void 0) {
        options = {};
      }
      this.ampdoc_ = ampdoc2;
      this.win_ = ampdoc2.win;
      this.options_ = options;
      this.referrerPolicy_ = this.options_["referrerPolicy"];
      if (this.referrerPolicy_ === "no-referrer") {
        this.options_["beacon"] = false;
        this.options_["xhrpost"] = false;
      }
      this.useBody_ = !!this.options_["useBody"];
      this.iframeTransport_ = null;
      this.isInabox_ = getMode(this.win_).runtime == "inabox";
    }
    var _proto = Transport2.prototype;
    _proto.sendRequest = function sendRequest(url, segments, inBatch) {
      if (!url || segments.length === 0) {
        dev().info(TAG_3, "Empty request not sent: ", url);
        return;
      }
      var serializer = this.getSerializer_();
      function generateRequest(withPayload) {
        var request = inBatch ? serializer.generateBatchRequest(url, segments, withPayload) : serializer.generateRequest(url, segments[0], withPayload);
        if (!isAmpScriptUri(request.url)) {
          assertHttpsUrl(request.url, "amp-analytics request");
          checkCorsUrl(request.url);
        }
        return request;
      }
      var getRequest = cacheFuncResult(generateRequest);
      if (this.options_["iframe"]) {
        if (!this.iframeTransport_) {
          dev().error(TAG_3, "iframe transport was inadvertently deleted");
          return;
        }
        this.iframeTransport_.sendRequest(getRequest(false).url);
        return;
      }
      if (this.options_["amp-script"]) {
        Transport2.forwardRequestToAmpScript(this.ampdoc_, {
          url: url,
          payload: getRequest(true).payload
        });
        return;
      }
      if (this.options_["beacon"] && Transport2.sendRequestUsingBeacon(this.win_, getRequest(this.useBody_))) {
        return;
      }
      if (this.options_["xhrpost"] && Transport2.sendRequestUsingXhr(this.win_, getRequest(this.useBody_))) {
        return;
      }
      var image = this.options_["image"];
      if (image) {
        var suppressWarnings = typeof image == "object" && image["suppressWarnings"];
        Transport2.sendRequestUsingImage(this.win_, getRequest(false), suppressWarnings, this.referrerPolicy_);
        return;
      }
      user().warn(TAG_3, "Failed to send request", url, this.options_);
    };
    _proto.maybeInitIframeTransport = function maybeInitIframeTransport(element) {
      if (!this.options_["iframe"] || this.iframeTransport_) {
        return;
      }
      var topWin = getTopWindow(getWin(element));
      var type = element.getAttribute("type");
      var ampAdResourceId = this.isInabox_ ? "1" : user().assertString(getAmpAdResourceId(element, topWin), "No friendly amp-ad ancestor element was found for amp-analytics tag with iframe transport.");
      this.iframeTransport_ = new IframeTransport(topWin, type, this.options_, ampAdResourceId);
    };
    _proto.deleteIframeTransport = function deleteIframeTransport() {
      if (this.iframeTransport_) {
        this.iframeTransport_.detach();
        this.iframeTransport_ = null;
      }
    };
    _proto.sendRequestUsingIframe = function sendRequestUsingIframe(url, segment) {
      var _this = this;
      var request = defaultSerializer(url, [segment]);
      if (!request) {
        user().error(TAG_3, "Request not sent. Contents empty.");
        return;
      }
      assertHttpsUrl(request, "amp-analytics request");
      userAssert(parseUrlDeprecated(request).origin != parseUrlDeprecated(this.win_.location.href).origin, "Origin of iframe request must not be equal to the document origin. See https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-iframe-origin-policy.md for details.");
      var iframe = this.win_.document.createElement("iframe");
      toggle(iframe, false);
      iframe.onload = iframe.onerror = function() {
        Services.timerFor(_this.win_).delay(function() {
          removeElement(iframe);
        }, 5e3);
      };
      iframe.setAttribute("amp-analytics", "");
      iframe.setAttribute("sandbox", "allow-scripts allow-same-origin");
      iframe.src = request;
      this.win_.document.body.appendChild(iframe);
    };
    _proto.getSerializer_ = function getSerializer_() {
      return TransportSerializers["default"];
    };
    Transport2.sendRequestUsingImage = function sendRequestUsingImage(win, request, suppressWarnings, referrerPolicy) {
      if (!win) {
        return;
      }
      var image = createPixel(win, request.url, referrerPolicy);
      loadPromise(image).then(function() {
        dev().fine(TAG_3, "Sent image request", request.url);
      }).catch(function() {
        if (!suppressWarnings) {
          user().warn(TAG_3, "Response unparseable or failed to send image request", request.url);
        }
      });
    };
    Transport2.sendRequestUsingBeacon = function sendRequestUsingBeacon(win, request) {
      var sendBeacon = WindowInterface.getSendBeacon(win);
      if (!sendBeacon) {
        return false;
      }
      var result = sendBeacon(request.url, request.payload || "");
      if (result) {
        dev().fine(TAG_3, "Sent beacon request", request);
      }
      return result;
    };
    Transport2.sendRequestUsingXhr = function sendRequestUsingXhr(win, request) {
      var XMLHttpRequest = WindowInterface.getXMLHttpRequest(win);
      if (!XMLHttpRequest) {
        return false;
      }
      var xhr = new XMLHttpRequest();
      if (!("withCredentials" in xhr)) {
        return false;
      }
      xhr.open("POST", request.url, true);
      xhr.withCredentials = true;
      xhr.setRequestHeader("Content-Type", "text/plain");
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          dev().fine(TAG_3, "Sent XHR request", request.url);
        }
      };
      xhr.send(request.payload || "");
      return true;
    };
    Transport2.forwardRequestToAmpScript = function forwardRequestToAmpScript(ampdoc2, request) {
      return Services.scriptForDocOrNull(ampdoc2).then(function(ampScriptService) {
        userAssert(ampScriptService, "AMP-SCRIPT is not installed");
        ampScriptService.fetch(request.url, JSON.parse(request.payload));
      });
    };
    return Transport2;
  }();
  function cacheFuncResult(func) {
    var cachedValue = {};
    return function(arg) {
      var key = String(arg);
      if (cachedValue[key] === void 0) {
        cachedValue[key] = func(arg);
      }
      return cachedValue[key];
    };
  }

  // extensions/amp-analytics/0.1/amp-analytics.js
  function _inherits5(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf5(subClass, superClass);
  }
  function _setPrototypeOf5(o, p) {
    _setPrototypeOf5 = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf5(o, p);
  }
  function _createSuper5(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct5();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf5(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf5(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn5(this, result);
    };
  }
  function _possibleConstructorReturn5(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized5(self2);
  }
  function _assertThisInitialized5(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct5() {
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
  function _getPrototypeOf5(o) {
    _getPrototypeOf5 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf5(o);
  }
  var TAG14 = "amp-analytics";
  var MAX_REPLACES = 16;
  var ALLOWLIST_EVENT_IN_SANDBOX = [AnalyticsEventType.VISIBLE, AnalyticsEventType.HIDDEN, AnalyticsEventType.INI_LOAD, AnalyticsEventType.RENDER_START];
  var AmpAnalytics = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits5(AmpAnalytics2, _AMP$BaseElement);
    var _super = _createSuper5(AmpAnalytics2);
    function AmpAnalytics2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.consentPromise_ = resolvedPromise();
      _this.consentNotificationId_ = null;
      _this.isSandbox_ = false;
      _this.requests_ = {};
      _this.config_ = dict();
      _this.instrumentation_ = null;
      _this.analyticsGroup_ = null;
      _this.variableService_ = null;
      _this.cryptoService_ = Services.cryptoFor(_this.win);
      _this.iniPromise_ = null;
      _this.transport_ = null;
      _this.type_ = _this.element.getAttribute("type");
      _this.isInabox_ = getMode(_this.win).runtime == "inabox";
      _this.linkerManager_ = null;
      _this.sessionManager_ = null;
      _this.isInFie_ = null;
      return _this;
    }
    var _proto = AmpAnalytics2.prototype;
    _proto.getLayoutPriority = function getLayoutPriority() {
      return this.isInabox_ ? LayoutPriority_Enum.CONTENT : LayoutPriority_Enum.METADATA;
    };
    _proto.isAlwaysFixed = function isAlwaysFixed() {
      return !isInFie(this.element);
    };
    _proto.isLayoutSupported = function isLayoutSupported(unusedLayout) {
      return true;
    };
    _proto.buildCallback = function buildCallback() {
      var _this2 = this;
      this.isSandbox_ = this.element.hasAttribute("sandbox");
      this.element.setAttribute("aria-hidden", "true");
      this.consentNotificationId_ = this.element.getAttribute("data-consent-notification-id");
      if (this.consentNotificationId_ != null) {
        this.consentPromise_ = Services.userNotificationManagerForDoc(this.element).then(function(service) {
          return service.get(dev().assertString(_this2.consentNotificationId_));
        });
      }
      if (this.element.getAttribute("trigger") == "immediate") {
        this.ensureInitialized_();
      }
    };
    _proto.layoutCallback = function layoutCallback() {
      return this.ensureInitialized_();
    };
    _proto.detachedCallback = function detachedCallback() {
      if (this.analyticsGroup_) {
        this.analyticsGroup_.dispose();
        this.analyticsGroup_ = null;
      }
      if (this.linkerManager_) {
        this.linkerManager_.dispose();
        this.linkerManager_ = null;
      }
      for (var request in this.requests_) {
        this.requests_[request].dispose();
        delete this.requests_[request];
      }
    };
    _proto.resumeCallback = function resumeCallback() {
      var _this3 = this;
      if (this.iniPromise_) {
        this.iniPromise_.then(function() {
          _this3.transport_.maybeInitIframeTransport(_this3.element);
        });
      }
    };
    _proto.unlayoutCallback = function unlayoutCallback() {
      var _this4 = this;
      if (this.getAmpDoc().isVisible()) {
        return false;
      }
      if (this.iniPromise_) {
        this.iniPromise_.then(function() {
          _this4.transport_.deleteIframeTransport();
        });
      }
      return _AMP$BaseElement.prototype.unlayoutCallback.call(this);
    };
    _proto.ensureInitialized_ = function ensureInitialized_() {
      var _this5 = this;
      if (this.iniPromise_) {
        return this.iniPromise_;
      }
      var ampdoc2 = this.getAmpDoc();
      this.iniPromise_ = ampdoc2.whenFirstVisible().then(function() {
        return Services.timerFor(_this5.win).promise(1);
      }).then(function() {
        return _this5.consentPromise_;
      }).then(function() {
        return Promise.all([instrumentationServicePromiseForDoc(ampdoc2), variableServicePromiseForDoc(ampdoc2)]);
      }).then(function(services) {
        _this5.instrumentation_ = services[0];
        _this5.variableService_ = services[1];
        var loadConfigDeferred = new Deferred();
        var loadConfigTask = function loadConfigTask2() {
          var configPromise = new AnalyticsConfig(_this5.element).loadConfig();
          loadConfigDeferred.resolve(configPromise);
        };
        if (_this5.isInabox_) {
          loadConfigTask();
        } else {
          chunk(_this5.element, loadConfigTask, ChunkPriority_Enum.HIGH);
        }
        return loadConfigDeferred.promise;
      }).then(function(config) {
        _this5.config_ = config;
        return new CookieWriter(_this5.win, _this5.element, _this5.config_).write();
      }).then(function() {
        _this5.transport_ = new Transport(_this5.getAmpDoc(), _this5.config_["transport"] || {});
      }).then(this.maybeInitializeSessionManager_.bind(this)).then(this.registerTriggers_.bind(this)).then(this.initializeLinker_.bind(this));
      this.iniPromise_.then(function() {
        _this5.collapse();
      });
      return this.iniPromise_;
    };
    _proto.allowParentPostMessage_ = function allowParentPostMessage_() {
      if (this.isInabox_) {
        return true;
      }
      if (this.isInFie_ == null) {
        this.isInFie_ = isInFie(this.element);
      }
      return this.isInFie_;
    };
    _proto.maybeInitializeSessionManager_ = function maybeInitializeSessionManager_() {
      var _this6 = this;
      if (!this.config_["triggers"]) {
        return resolvedPromise();
      }
      var shouldInitialize = Object.values(this.config_["triggers"]).some(function(trigger) {
        var _trigger$session;
        return trigger == null ? void 0 : (_trigger$session = trigger["session"]) == null ? void 0 : _trigger$session["persistEvent"];
      });
      if (shouldInitialize && this.type_) {
        var ampdoc2 = this.getAmpDoc();
        return sessionServicePromiseForDoc(ampdoc2).then(function(manager) {
          _this6.sessionManager_ = manager;
        });
      }
      return resolvedPromise();
    };
    _proto.registerTriggers_ = function registerTriggers_() {
      var _this7 = this;
      if (this.hasOptedOut_()) {
        var _TAG = this.getName_();
        user().fine(_TAG, "User has opted out. No hits will be sent.");
        return resolvedPromise();
      }
      this.generateRequests_();
      if (!this.config_["triggers"]) {
        var _TAG2 = this.getName_();
        this.user().warn(_TAG2, "No triggers were found in the config. No analytics data will be sent.");
        return resolvedPromise();
      }
      this.processExtraUrlParams_(this.config_["extraUrlParams"], this.config_["extraUrlParamsReplaceMap"]);
      this.analyticsGroup_ = this.instrumentation_.createAnalyticsGroup(this.element);
      this.transport_.maybeInitIframeTransport(this.element);
      var promises = [];
      for (var k in this.config_["triggers"]) {
        if (hasOwn(this.config_["triggers"], k)) {
          var _ret = function() {
            var trigger = _this7.config_["triggers"][k];
            var expansionOptions = _this7.expansionOptions_(dict({}), trigger, void 0, true);
            var TAG15 = _this7.getName_();
            if (!trigger) {
              _this7.user().error(TAG15, "Trigger should be an object: ", k);
              return "continue";
            }
            var hasRequestOrPostMessage = trigger["request"] || trigger["parentPostMessage"] && _this7.allowParentPostMessage_();
            if (!trigger["on"] || !hasRequestOrPostMessage) {
              var errorMsgSeg = _this7.allowParentPostMessage_() ? '/"parentPostMessage"' : "";
              _this7.user().error(TAG15, '"on" and "request"' + errorMsgSeg + " attributes are required for data to be collected.");
              return "continue";
            }
            if (_this7.isSandbox_) {
              var eventType = trigger["on"];
              if (isEnumValue(AnalyticsEventType, eventType) && !ALLOWLIST_EVENT_IN_SANDBOX.includes(eventType)) {
                _this7.user().error(TAG15, eventType + " is not supported for amp-analytics in scope");
                return "continue";
              }
            }
            _this7.processExtraUrlParams_(trigger["extraUrlParams"], _this7.config_["extraUrlParamsReplaceMap"]);
            promises.push(_this7.isSampledIn_(trigger).then(function(result) {
              if (!result) {
                return;
              }
              if (_this7.isSandbox_) {
                if (!_this7.element.parentElement) {
                  return;
                }
                trigger["selector"] = _this7.element.parentElement.tagName;
                trigger["selectionMethod"] = "closest";
                return _this7.addTrigger_(trigger);
              } else if (trigger["selector"] && !isArray(trigger["selector"])) {
                return _this7.variableService_.expandTemplate(trigger["selector"], expansionOptions, _this7.element).then(function(selector) {
                  trigger["selector"] = selector;
                  return _this7.addTrigger_(trigger);
                });
              } else {
                return _this7.addTrigger_(trigger);
              }
            }));
          }();
          if (_ret === "continue")
            continue;
        }
      }
      return Promise.all(promises);
    };
    _proto.preload = function preload(url, opt_preloadAs) {
      Services.preconnectFor(this.win).preload(this.getAmpDoc(), url, opt_preloadAs);
    };
    _proto.addTrigger_ = function addTrigger_(config) {
      if (!this.analyticsGroup_) {
        return resolvedPromise();
      }
      try {
        return this.analyticsGroup_.addTrigger(config, this.handleEvent_.bind(this, config));
      } catch (e) {
        var _TAG3 = this.getName_();
        var eventType = config["on"];
        rethrowAsync(_TAG3, 'Failed to process trigger "' + eventType + '"', e);
        return resolvedPromise();
      }
    };
    _proto.processExtraUrlParams_ = function processExtraUrlParams_(params, replaceMap) {
      if (params && replaceMap) {
        var count = 0;
        for (var replaceMapKey in replaceMap) {
          if (++count > MAX_REPLACES) {
            var _TAG4 = this.getName_();
            this.user().error(_TAG4, "More than " + MAX_REPLACES + " extraUrlParamsReplaceMap rules aren't allowed; Skipping the rest");
            break;
          }
          for (var extraUrlParamsKey in params) {
            var newkey = extraUrlParamsKey.replace(replaceMapKey, replaceMap[replaceMapKey]);
            if (extraUrlParamsKey != newkey) {
              var value = params[extraUrlParamsKey];
              delete params[extraUrlParamsKey];
              params[newkey] = value;
            }
          }
        }
      }
    };
    _proto.hasOptedOut_ = function hasOptedOut_() {
      var elementId = this.config_["optoutElementId"];
      if (elementId && this.win.document.getElementById(elementId)) {
        return true;
      }
      if (!this.config_["optout"]) {
        return false;
      }
      var props = this.config_["optout"].split(".");
      var k = this.win;
      for (var i = 0; i < props.length; i++) {
        if (!k) {
          return false;
        }
        k = k[props[i]];
      }
      return k();
    };
    _proto.generateRequests_ = function generateRequests_() {
      var _this8 = this;
      if (!this.config_["requests"]) {
        if (!this.allowParentPostMessage_()) {
          var _TAG5 = this.getName_();
          this.user().warn(_TAG5, "No request strings defined. Analytics data will not be sent from this page.");
        }
        return;
      }
      if (this.config_["requests"]) {
        for (var k in this.config_["requests"]) {
          if (hasOwn(this.config_["requests"], k)) {
            var request = this.config_["requests"][k];
            if (!request["baseUrl"]) {
              this.user().error(TAG14, "request must have a baseUrl");
              delete this.config_["requests"][k];
            }
          }
        }
        for (var _k in this.config_["requests"]) {
          this.config_["requests"][_k]["baseUrl"] = expandTemplate(this.config_["requests"][_k]["baseUrl"], function(key) {
            var request2 = _this8.config_["requests"][key];
            return request2 && request2["baseUrl"] || "${" + key + "}";
          }, 5);
        }
        var requests = {};
        for (var _k2 in this.config_["requests"]) {
          if (hasOwn(this.config_["requests"], _k2)) {
            var _request = this.config_["requests"][_k2];
            requests[_k2] = new RequestHandler(this.element, _request, Services.preconnectFor(this.win), this.transport_, this.isSandbox_);
          }
        }
        this.requests_ = requests;
      }
    };
    _proto.initializeLinker_ = function initializeLinker_() {
      var _this9 = this;
      this.linkerManager_ = new LinkerManager(this.getAmpDoc(), this.config_, this.type_, this.element);
      var linkerTask = function linkerTask2() {
        _this9.linkerManager_.init();
      };
      if (this.isInabox_) {
        linkerTask();
      } else {
        chunk(this.element, linkerTask, ChunkPriority_Enum.LOW);
      }
    };
    _proto.handleEvent_ = function handleEvent_(trigger, event) {
      var _trigger$session2;
      var persistEvent = !!((_trigger$session2 = trigger.session) != null && _trigger$session2["persistEvent"]);
      if (persistEvent) {
        var _this$sessionManager_;
        (_this$sessionManager_ = this.sessionManager_) == null ? void 0 : _this$sessionManager_.updateEvent(this.type_);
      }
      var requests = isArray(trigger["request"]) ? trigger["request"] : [trigger["request"]];
      for (var r = 0; r < requests.length; r++) {
        var requestName = requests[r];
        this.handleRequestForEvent_(requestName, trigger, event);
      }
    };
    _proto.handleRequestForEvent_ = function handleRequestForEvent_(requestName, trigger, event) {
      var _this10 = this;
      if (!this.element.ownerDocument.defaultView) {
        var _TAG6 = this.getName_();
        dev().warn(_TAG6, "request against destroyed embed: ", trigger["on"]);
      }
      var request = this.requests_[requestName];
      var hasPostMessage = this.allowParentPostMessage_() && trigger["parentPostMessage"];
      if (requestName != void 0 && !request) {
        var _TAG7 = this.getName_();
        this.user().error(_TAG7, "Ignoring request for event. Request string not found: ", trigger["request"]);
        if (!hasPostMessage) {
          return;
        }
      }
      this.checkTriggerEnabled_(trigger, event).then(function(enabled) {
        var isConnected = _this10.element.ownerDocument && _this10.element.ownerDocument.defaultView;
        if (!enabled || !isConnected) {
          return;
        }
        _this10.expandAndSendRequest_(request, trigger, event);
        var shouldSendToAmpAd = trigger["parentPostMessage"] && _this10.allowParentPostMessage_() && isIframed(_this10.win);
        if (shouldSendToAmpAd) {
          _this10.expandAndPostMessage_(trigger, event);
        }
      });
    };
    _proto.expandAndSendRequest_ = function expandAndSendRequest_(request, trigger, event) {
      if (!request) {
        return;
      }
      this.config_["vars"]["requestCount"]++;
      var expansionOptions = this.expansionOptions_(event, trigger);
      request.send(this.config_["extraUrlParams"], trigger, expansionOptions);
    };
    _proto.expandAndPostMessage_ = function expandAndPostMessage_(trigger, event) {
      var _this11 = this;
      var msg = trigger["parentPostMessage"];
      var expansionOptions = this.expansionOptions_(event, trigger);
      expandPostMessage(this.getAmpDoc(), msg, this.config_["extraUrlParams"], trigger, expansionOptions, this.element).then(function(message) {
        _this11.win.parent.postMessage(message, "*");
      });
    };
    _proto.isSampledIn_ = function isSampledIn_(trigger) {
      var _this12 = this;
      var spec = trigger["sampleSpec"];
      var TAG15 = this.getName_();
      if (!spec) {
        return Promise.resolve(true);
      }
      var sampleOn = spec["sampleOn"];
      if (!sampleOn) {
        this.user().error(TAG15, "Invalid sampleOn value.");
        return Promise.resolve(true);
      }
      var threshold = parseFloat(spec["threshold"]);
      if (threshold >= 0 && threshold <= 100) {
        var sampleDeferred = new Deferred();
        var sampleInTask = function sampleInTask2() {
          var expansionOptions = _this12.expansionOptions_(dict({}), trigger);
          var samplePromise = _this12.expandTemplateWithUrlParams_(sampleOn, expansionOptions).then(function(key) {
            return _this12.cryptoService_.uniform(key);
          }).then(function(digest) {
            return digest * 100 < threshold;
          });
          sampleDeferred.resolve(samplePromise);
        };
        if (this.isInabox_) {
          sampleInTask();
        } else {
          chunk(this.element, sampleInTask, ChunkPriority_Enum.LOW);
        }
        return sampleDeferred.promise;
      }
      user().error(TAG15, "Invalid threshold for sampling.");
      return Promise.resolve(true);
    };
    _proto.checkTriggerEnabled_ = function checkTriggerEnabled_(trigger, event) {
      var expansionOptions = this.expansionOptions_(event, trigger);
      var enabledOnTagLevel = this.checkSpecEnabled_(this.config_["enabled"], expansionOptions);
      var enabledOnTriggerLevel = this.checkSpecEnabled_(trigger["enabled"], expansionOptions);
      return Promise.all([enabledOnTagLevel, enabledOnTriggerLevel]).then(function(enabled) {
        devAssert2(enabled.length === 2);
        return enabled[0] && enabled[1];
      });
    };
    _proto.checkSpecEnabled_ = function checkSpecEnabled_(spec, expansionOptions) {
      if (spec === void 0) {
        return Promise.resolve(true);
      }
      if (typeof spec === "boolean") {
        return Promise.resolve(spec);
      }
      return this.expandTemplateWithUrlParams_(spec, expansionOptions).then(function(val) {
        return stringToBool(val);
      });
    };
    _proto.expandTemplateWithUrlParams_ = function expandTemplateWithUrlParams_(spec, expansionOptions) {
      var _this13 = this;
      return this.variableService_.expandTemplate(spec, expansionOptions, this.element).then(function(key) {
        return Services.urlReplacementsForDoc(_this13.element).expandUrlAsync(key, _this13.variableService_.getMacros(_this13.element));
      });
    };
    _proto.getName_ = function getName_() {
      return "AmpAnalytics " + (this.element.getAttribute("id") || "<unknown id>");
    };
    _proto.expansionOptions_ = function expansionOptions_(source1, source2, opt_iterations, opt_noEncode) {
      var vars = dict();
      mergeObjects(this.config_["vars"], vars);
      mergeObjects(source2["vars"], vars);
      mergeObjects(source1["vars"], vars);
      return new ExpansionOptions(vars, opt_iterations, opt_noEncode);
    };
    return AmpAnalytics2;
  }(AMP.BaseElement);
  AMP.registerServiceForDoc("amp-analytics-instrumentation", InstrumentationService);
  AMP.registerServiceForDoc("activity", Activity);
  installLinkerReaderService(AMP.win);
  AMP.registerServiceForDoc("amp-analytics-session", SessionManager);
  AMP.registerServiceForDoc("amp-analytics-variables", VariableService);
  AMP.registerElement(TAG14, AmpAnalytics);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-analytics-0.1.max.js.map
