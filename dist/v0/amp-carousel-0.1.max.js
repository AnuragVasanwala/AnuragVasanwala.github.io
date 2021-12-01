(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-carousel",ev:"0.1",l:true,f:(function(AMP,_){
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
  function removeItem(array, item) {
    var index = array.indexOf(item);
    if (index == -1) {
      return false;
    }
    array.splice(index, 1);
    return true;
  }

  // src/core/types/string/index.js
  function isString(s) {
    return typeof s == "string";
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

  // src/core/data-structures/curve.js
  function bezierCurve(x1, y1, x2, y2) {
    return function(xVal) {
      return Bezier.solveYValueFromXValue(xVal, 0, 0, x1, y1, x2, y2, 1, 1);
    };
  }
  var Bezier = /* @__PURE__ */ function() {
    function Bezier2() {
    }
    Bezier2.solveYValueFromXValue = function solveYValueFromXValue(xVal, x0, y0, x1, y1, x2, y2, x3, y3) {
      return Bezier2.getPointY_(Bezier2.solvePositionFromXValue_(xVal, x0, x1, x2, x3), y0, y1, y2, y3);
    };
    Bezier2.solvePositionFromXValue_ = function solvePositionFromXValue_(xVal, x0, x1, x2, x3) {
      var epsilon = 1e-6;
      var t = (xVal - x0) / (x3 - x0);
      if (t <= 0) {
        return 0;
      } else if (t >= 1) {
        return 1;
      }
      var tMin = 0;
      var tMax = 1;
      var value = 0;
      for (var i = 0; i < 8; i++) {
        value = Bezier2.getPointX_(t, x0, x1, x2, x3);
        var derivative = (Bezier2.getPointX_(t + epsilon, x0, x1, x2, x3) - value) / epsilon;
        if (Math.abs(value - xVal) < epsilon) {
          return t;
        } else if (Math.abs(derivative) < epsilon) {
          break;
        } else {
          if (value < xVal) {
            tMin = t;
          } else {
            tMax = t;
          }
          t -= (value - xVal) / derivative;
        }
      }
      for (var _i = 0; Math.abs(value - xVal) > epsilon && _i < 8; _i++) {
        if (value < xVal) {
          tMin = t;
          t = (t + tMax) / 2;
        } else {
          tMax = t;
          t = (t + tMin) / 2;
        }
        value = Bezier2.getPointX_(t, x0, x1, x2, x3);
      }
      return t;
    };
    Bezier2.getPointX_ = function getPointX_(t, x0, x1, x2, x3) {
      if (t == 0) {
        return x0;
      } else if (t == 1) {
        return x3;
      }
      var ix0 = Bezier2.lerp_(x0, x1, t);
      var ix1 = Bezier2.lerp_(x1, x2, t);
      var ix2 = Bezier2.lerp_(x2, x3, t);
      ix0 = Bezier2.lerp_(ix0, ix1, t);
      ix1 = Bezier2.lerp_(ix1, ix2, t);
      return Bezier2.lerp_(ix0, ix1, t);
    };
    Bezier2.getPointY_ = function getPointY_(t, y0, y1, y2, y3) {
      if (t == 0) {
        return y0;
      } else if (t == 1) {
        return y3;
      }
      var iy0 = Bezier2.lerp_(y0, y1, t);
      var iy1 = Bezier2.lerp_(y1, y2, t);
      var iy2 = Bezier2.lerp_(y2, y3, t);
      iy0 = Bezier2.lerp_(iy0, iy1, t);
      iy1 = Bezier2.lerp_(iy1, iy2, t);
      return Bezier2.lerp_(iy0, iy1, t);
    };
    Bezier2.lerp_ = function lerp_(a, b, x) {
      return a + x * (b - a);
    };
    return Bezier2;
  }();
  var Curves_Enum = {
    LINEAR: function LINEAR(xVal) {
      return xVal;
    },
    EASE: function EASE(xVal) {
      return Bezier.solveYValueFromXValue(xVal, 0, 0, 0.25, 0.1, 0.25, 1, 1, 1);
    },
    EASE_IN: function EASE_IN(xVal) {
      return Bezier.solveYValueFromXValue(xVal, 0, 0, 0.42, 0, 1, 1, 1, 1);
    },
    EASE_OUT: function EASE_OUT(xVal) {
      return Bezier.solveYValueFromXValue(xVal, 0, 0, 0, 0, 0.58, 1, 1, 1);
    },
    EASE_IN_OUT: function EASE_IN_OUT(xVal) {
      return Bezier.solveYValueFromXValue(xVal, 0, 0, 0.42, 0, 0.58, 1, 1, 1);
    }
  };
  var NAME_MAP = {
    "linear": Curves_Enum.LINEAR,
    "ease": Curves_Enum.EASE,
    "ease-in": Curves_Enum.EASE_IN,
    "ease-out": Curves_Enum.EASE_OUT,
    "ease-in-out": Curves_Enum.EASE_IN_OUT
  };
  function getCurve(curve) {
    if (!curve) {
      return null;
    }
    if (isString(curve)) {
      curve = curve;
      if (curve.indexOf("cubic-bezier") != -1) {
        var match = curve.match(/cubic-bezier\((.+)\)/);
        if (match) {
          var values = match[1].split(",").map(parseFloat);
          if (values.length == 4) {
            for (var i = 0; i < 4; i++) {
              if (isNaN(values[i])) {
                return null;
              }
            }
            return bezierCurve(values[0], values[1], values[2], values[3]);
          }
        }
        return null;
      }
      return NAME_MAP[curve];
    }
    return curve;
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
  function childElements(parent, callback) {
    var children = [];
    for (var child = parent.firstElementChild; child; child = child.nextElementSibling) {
      if (callback(child)) {
        children.push(child);
      }
    }
    return children;
  }
  function realChildElements(element) {
    return childElements(element, function(element2) {
      return !isInternalOrServiceNode(element2);
    });
  }
  function isInternalOrServiceNode(node) {
    if (isInternalElement(node)) {
      return true;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) {
      return false;
    }
    devAssertElement(node);
    return node.hasAttribute("placeholder") || node.hasAttribute("fallback") || node.hasAttribute("overflow");
  }
  function isInternalElement(nodeOrTagName) {
    var tagName;
    if (typeof nodeOrTagName == "string") {
      tagName = nodeOrTagName;
    } else if (nodeOrTagName.nodeType === Node.ELEMENT_NODE) {
      tagName = devAssertElement(nodeOrTagName).tagName;
    }
    return !!tagName && tagName.toLowerCase().startsWith("i-");
  }

  // src/core/dom/index.js
  var DEFAULT_CUSTOM_EVENT_OPTIONS = {
    bubbles: true,
    cancelable: true
  };
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
  function dispatchCustomEvent(node, name, opt_data, opt_options) {
    var data = opt_data || {};
    var event = node.ownerDocument.createEvent("Event");
    event.data = data;
    var _ref = opt_options || DEFAULT_CUSTOM_EVENT_OPTIONS, bubbles = _ref.bubbles, cancelable = _ref.cancelable;
    event.initEvent(name, bubbles, cancelable);
    node.dispatchEvent(event);
  }
  function isServerRendered(element) {
    return element.hasAttribute("i-amphtml-ssr");
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
  function tryCallback(callback) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return callback.apply(null, args);
    } catch (e) {
      rethrowAsync(e);
    }
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

  // src/utils/animation.js
  var TAG_ = "Animation";
  var NOOP_CALLBACK = function NOOP_CALLBACK2() {
  };
  var Animation = /* @__PURE__ */ function() {
    Animation2.animate = function animate(contextNode, transition, duration, opt_curve) {
      return new Animation2(contextNode).setCurve(opt_curve).add(0, transition, 1).start(duration);
    };
    function Animation2(contextNode, opt_vsync) {
      this.contextNode_ = contextNode;
      this.vsync_ = opt_vsync || Services.vsyncFor(self);
      this.curve_ = null;
      this.segments_ = [];
    }
    var _proto = Animation2.prototype;
    _proto.setCurve = function setCurve(curve) {
      if (curve) {
        this.curve_ = getCurve(curve);
      }
      return this;
    };
    _proto.add = function add(delay, transition, duration, opt_curve) {
      this.segments_.push({
        delay: delay,
        func: transition,
        duration: duration,
        curve: getCurve(opt_curve)
      });
      return this;
    };
    _proto.start = function start(duration) {
      var player = new AnimationPlayer(this.vsync_, this.contextNode_, this.segments_, this.curve_, duration);
      return player;
    };
    return Animation2;
  }();
  var AnimationPlayer = /* @__PURE__ */ function() {
    function AnimationPlayer2(vsync, contextNode, segments, defaultCurve, duration) {
      this.vsync_ = vsync;
      this.contextNode_ = contextNode;
      this.segments_ = [];
      for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        this.segments_.push({
          delay: segment.delay,
          func: segment.func,
          duration: segment.duration,
          curve: segment.curve || defaultCurve,
          started: false,
          completed: false
        });
      }
      this.duration_ = duration;
      this.startTime_ = Date.now();
      this.running_ = true;
      this.state_ = {};
      var deferred = new Deferred();
      this.promise_ = deferred.promise;
      this.resolve_ = deferred.resolve;
      this.reject_ = deferred.reject;
      this.task_ = this.vsync_.createAnimTask(this.contextNode_, {
        mutate: this.stepMutate_.bind(this)
      });
      if (this.vsync_.canAnimate(this.contextNode_)) {
        this.task_(this.state_);
      } else {
        dev().warn(TAG_, "cannot animate");
        this.complete_(false, 0);
      }
    }
    var _proto2 = AnimationPlayer2.prototype;
    _proto2.then = function then(opt_resolve, opt_reject) {
      if (!opt_resolve && !opt_reject) {
        return this.promise_;
      }
      return this.promise_.then(opt_resolve, opt_reject);
    };
    _proto2.thenAlways = function thenAlways(opt_callback) {
      var callback = opt_callback || NOOP_CALLBACK;
      return this.then(callback, callback);
    };
    _proto2.halt = function halt(opt_dir) {
      this.complete_(false, opt_dir || 0);
    };
    _proto2.complete_ = function complete_(success, dir) {
      if (!this.running_) {
        return;
      }
      this.running_ = false;
      if (dir != 0) {
        if (this.segments_.length > 1) {
          this.segments_.sort(function(s1, s2) {
            return s1.delay + s1.duration - (s2.delay + s2.duration);
          });
        }
        try {
          if (dir > 0) {
            for (var i = 0; i < this.segments_.length; i++) {
              this.segments_[i].func(1, true);
            }
          } else {
            for (var _i = this.segments_.length - 1; _i >= 0; _i--) {
              this.segments_[_i].func(0, false);
            }
          }
        } catch (e) {
          dev().error(TAG_, "completion failed: " + e, e);
          success = false;
        }
      }
      if (success) {
        this.resolve_();
      } else {
        this.reject_();
      }
    };
    _proto2.stepMutate_ = function stepMutate_(unusedState) {
      if (!this.running_) {
        return;
      }
      var currentTime = Date.now();
      var normLinearTime = Math.min((currentTime - this.startTime_) / this.duration_, 1);
      for (var i = 0; i < this.segments_.length; i++) {
        var segment = this.segments_[i];
        if (!segment.started && normLinearTime >= segment.delay) {
          segment.started = true;
        }
      }
      for (var _i2 = 0; _i2 < this.segments_.length; _i2++) {
        var _segment = this.segments_[_i2];
        if (!_segment.started || _segment.completed) {
          continue;
        }
        this.mutateSegment_(_segment, normLinearTime);
      }
      if (normLinearTime == 1) {
        this.complete_(true, 0);
      } else {
        if (this.vsync_.canAnimate(this.contextNode_)) {
          this.task_(this.state_);
        } else {
          dev().warn(TAG_, "cancel animation");
          this.complete_(false, 0);
        }
      }
    };
    _proto2.mutateSegment_ = function mutateSegment_(segment, totalLinearTime) {
      var normLinearTime;
      var normTime;
      if (segment.duration > 0) {
        normLinearTime = Math.min((totalLinearTime - segment.delay) / segment.duration, 1);
        normTime = normLinearTime;
        if (segment.curve && normTime != 1) {
          try {
            normTime = segment.curve(normLinearTime);
          } catch (e) {
            dev().error(TAG_, "step curve failed: " + e, e);
            this.complete_(false, 0);
            return;
          }
        }
      } else {
        normLinearTime = 1;
        normTime = 1;
      }
      if (normLinearTime == 1) {
        segment.completed = true;
      }
      try {
        segment.func(normTime, segment.completed);
      } catch (e) {
        dev().error(TAG_, "step mutate failed: " + e, e);
        this.complete_(false, 0);
        return;
      }
    };
    return AnimationPlayer2;
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

  // src/core/document/format.js
  function isAmpFormatType(formats, doc) {
    var html = doc.documentElement;
    var isFormatType = formats.some(function(format) {
      return html.hasAttribute(format);
    });
    return isFormatType;
  }
  function isAmp4Email(doc) {
    return isAmpFormatType(["\u26A14email", "amp4email"], doc);
  }

  // extensions/amp-carousel/0.1/build-dom.js
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
  var ClassNames = {
    BUTTON: "amp-carousel-button",
    PREV_BUTTON: "amp-carousel-button-prev",
    NEXT_BUTTON: "amp-carousel-button-next",
    HAS_CONTROL: "i-amphtml-carousel-has-controls",
    CONTROL_HIDE_ATTRIBUTE: "i-amphtml-carousel-hide-buttons",
    SLIDE: "amp-carousel-slide",
    SLIDESCROLL_CAROUSEL: "i-amphtml-slidescroll",
    SLIDE_WRAPPER: "i-amphtml-slide-item",
    SLIDES_CONTAINER: "i-amphtml-slides-container",
    SLIDES_CONTAINER_NOSNAP: "i-amphtml-slidescroll-no-snap",
    SCROLLABLE_CONTAINER: "i-amphtml-scrollable-carousel-container",
    SCROLLABLE_SLIDE: "amp-scrollable-carousel-slide"
  };
  function assertDomQueryResults() {
    for (var i = 0; i < arguments.length; i++) {
      if (!arguments[i]) {
        throw new Error("Invalid server render");
      }
    }
  }
  function buildButton(element, _ref) {
    var className = _ref.className, enabled = _ref.enabled, title = _ref.title;
    var ariaRole = isScrollable(element) ? "presentation" : "button";
    var button = element.ownerDocument.createElement("div");
    button.setAttribute("tabindex", "0");
    button.classList.add(ClassNames.BUTTON, className);
    button.setAttribute("role", ariaRole);
    button.setAttribute("title", title);
    setButtonState(button, enabled);
    element.appendChild(button);
    return button;
  }
  function setButtonState(button, enabled) {
    button.classList.toggle("amp-disabled", !enabled);
    button.setAttribute("aria-disabled", String(!enabled));
    button.setAttribute("tabindex", String(enabled ? 0 : -1));
  }
  function buildCarouselControls(element, slideCount) {
    if (isServerRendered(element)) {
      return queryCarouselControls(element);
    }
    var doc = element.ownerDocument;
    if (isAmp4Email(doc) || element.hasAttribute("controls")) {
      element.classList.add(ClassNames.HAS_CONTROL);
    }
    var hasLoop = element.hasAttribute("loop");
    var prevIndex = hasLoop ? slideCount : 0;
    var nextIndex = slideCount > 1 ? 2 : hasLoop ? 0 : 1;
    var prevButton = buildButton(element, {
      className: ClassNames.PREV_BUTTON,
      title: getPrevButtonTitle(element, {
        index: String(prevIndex),
        total: String(slideCount)
      }),
      enabled: element.hasAttribute("loop")
    });
    var nextButton = buildButton(element, {
      className: ClassNames.NEXT_BUTTON,
      title: getNextButtonTitle(element, {
        index: String(nextIndex),
        total: String(slideCount)
      }),
      enabled: slideCount > 1
    });
    return {
      prevButton: prevButton,
      nextButton: nextButton
    };
  }
  function queryCarouselControls(element) {
    var prevButton = element.querySelector("." + escapeCssSelectorIdent(ClassNames.PREV_BUTTON));
    var nextButton = element.querySelector("." + escapeCssSelectorIdent(ClassNames.NEXT_BUTTON));
    assertDomQueryResults(prevButton, nextButton);
    return {
      prevButton: prevButton,
      nextButton: nextButton
    };
  }
  function buildScrollableCarousel(element) {
    if (isServerRendered(element)) {
      return queryScrollableCarousel(element);
    }
    var doc = element.ownerDocument;
    var cells = realChildElements(element);
    var container = doc.createElement("div");
    container.classList.add(ClassNames.SCROLLABLE_CONTAINER);
    container.setAttribute("tabindex", "-1");
    element.appendChild(container);
    cells.forEach(function(cell) {
      cell.classList.add(ClassNames.SLIDE, ClassNames.SCROLLABLE_SLIDE);
      container.appendChild(cell);
    });
    return {
      cells: cells,
      container: container
    };
  }
  function queryScrollableCarousel(element) {
    var container = element.querySelector("." + escapeCssSelectorIdent(ClassNames.SCROLLABLE_CONTAINER));
    var cells = Array.from(element.querySelectorAll("." + escapeCssSelectorIdent(ClassNames.SLIDE)));
    assertDomQueryResults(container, cells);
    return {
      container: container,
      cells: cells
    };
  }
  function buildSlideScrollCarousel(element) {
    if (isServerRendered(element)) {
      return querySlideScrollCarousel(element);
    }
    var doc = element.ownerDocument;
    var slides = realChildElements(element);
    element.classList.add(ClassNames.SLIDESCROLL_CAROUSEL);
    var slidesContainer = doc.createElement("div");
    slidesContainer.setAttribute("tabindex", "-1");
    slidesContainer.classList.add(ClassNames.SLIDES_CONTAINER, ClassNames.SLIDES_CONTAINER_NOSNAP);
    slidesContainer.setAttribute("aria-live", "polite");
    element.appendChild(slidesContainer);
    var slideWrappers = [];
    slides.forEach(function(slide) {
      slide.classList.add(ClassNames.SLIDE);
      var slideWrapper = doc.createElement("div");
      slideWrapper.classList.add(ClassNames.SLIDE_WRAPPER);
      slideWrapper.appendChild(slide);
      slidesContainer.appendChild(slideWrapper);
      slideWrappers.push(slideWrapper);
    });
    return {
      slidesContainer: slidesContainer,
      slides: slides,
      slideWrappers: slideWrappers
    };
  }
  function querySlideScrollCarousel(element) {
    var slidesContainer = element.querySelector("." + escapeCssSelectorIdent(ClassNames.SLIDES_CONTAINER));
    var slideWrappers = Array.from(element.querySelectorAll("." + escapeCssSelectorIdent(ClassNames.SLIDE_WRAPPER)));
    var slides = Array.from(element.querySelectorAll("." + escapeCssSelectorIdent(ClassNames.SLIDE)));
    assertDomQueryResults(slidesContainer, slideWrappers, slides);
    return {
      slides: slides,
      slidesContainer: slidesContainer,
      slideWrappers: slideWrappers
    };
  }
  function buildDom(element) {
    var slideCount = realChildElements(element).length;
    var slidesDom = isScrollable(element) ? buildScrollableCarousel(element) : buildSlideScrollCarousel(element);
    var controlsDom = buildCarouselControls(element, slideCount);
    return _extends({}, controlsDom, slidesDom);
  }
  function getNextButtonTitle(element, options) {
    if (options === void 0) {
      options = {};
    }
    var prefix = element.getAttribute("data-next-button-aria-label") || "Next item in carousel";
    var _options = options, index = _options.index, total = _options.total;
    return getButtonTitle(element, {
      prefix: prefix,
      index: index,
      total: total
    });
  }
  function getPrevButtonTitle(element, options) {
    if (options === void 0) {
      options = {};
    }
    var prefix = element.getAttribute("data-prev-button-aria-label") || "Previous item in carousel";
    var _options2 = options, index = _options2.index, total = _options2.total;
    return getButtonTitle(element, {
      prefix: prefix,
      index: index,
      total: total
    });
  }
  function getButtonTitle(element, _ref2) {
    var index = _ref2.index, prefix = _ref2.prefix, total = _ref2.total;
    if (isScrollable(element)) {
      return prefix;
    }
    var suffixFormat = element.getAttribute("data-button-count-format") || "(%s of %s)";
    var suffix = suffixFormat.replace("%s", index).replace("%s", total);
    return prefix + " " + suffix;
  }
  function isScrollable(element) {
    return element.getAttribute("type") !== "slides";
  }

  // extensions/amp-carousel/0.1/carousel-controls.js
  var CarouselControls = /* @__PURE__ */ function() {
    function CarouselControls2(_ref) {
      var element = _ref.element, go = _ref.go, nextButton = _ref.nextButton, prevButton = _ref.prevButton;
      this.element_ = element;
      this.go_ = go;
      this.win_ = getWin(element);
      this.prevButton_ = prevButton;
      this.nextButton_ = nextButton;
      this.showControls_ = false;
      this.setupBehaviors_();
    }
    var _proto = CarouselControls2.prototype;
    _proto.setupBehaviors_ = function setupBehaviors_() {
      var _this = this;
      this.setupButtonInteraction(this.prevButton_, function() {
        return _this.handlePrev();
      });
      this.setupButtonInteraction(this.nextButton_, function() {
        return _this.handleNext();
      });
      if (this.element_.hasAttribute("controls")) {
        this.showControls_ = true;
        return;
      }
      var input = Services.inputFor(this.win_);
      input.onMouseDetected(function(mouseDetected) {
        if (mouseDetected) {
          _this.showControls_ = true;
          toggleAttribute(_this.element_, ClassNames.CONTROL_HIDE_ATTRIBUTE, !_this.showControls_);
          _this.element_.classList.add(ClassNames.HAS_CONTROL);
        }
      }, true);
    };
    _proto.setupButtonInteraction = function setupButtonInteraction(button, onInteraction) {
      button.onkeydown = function(event) {
        if (event.key == Keys_Enum.ENTER || event.key == Keys_Enum.SPACE) {
          if (!event.defaultPrevented) {
            event.preventDefault();
            onInteraction();
          }
        }
      };
      button.onclick = onInteraction;
    };
    _proto.setControlsState = function setControlsState(_ref2) {
      var next = _ref2.next, prev = _ref2.prev;
      setButtonState(this.prevButton_, prev);
      setButtonState(this.nextButton_, next);
    };
    _proto.hintControls = function hintControls() {
      var _this2 = this;
      if (this.showControls_) {
        return;
      }
      Services.vsyncFor(this.win_).mutate(function() {
        var className = "i-amphtml-carousel-button-start-hint";
        var hideAttribute = "i-amphtml-carousel-hide-buttons";
        _this2.element_.classList.add(className);
        Services.timerFor(_this2.win_).delay(function() {
          var mutator = Services.mutatorForDoc(_this2.element_);
          mutator.measureMutateElement(_this2.element_, null, function() {
            _this2.element_.classList.remove(className);
            toggleAttribute(_this2.element_, hideAttribute, !_this2.showControls_);
          });
        }, 4e3);
      });
    };
    _proto.updateButtonTitles = function updateButtonTitles(prevTitle, nextTitle) {
      this.prevButton_.title = prevTitle;
      this.nextButton_.title = nextTitle;
    };
    _proto.handlePrev = function handlePrev() {
      var isEnabled = !this.prevButton_.classList.contains("amp-disabled");
      if (isEnabled) {
        this.go_(-1, true, false);
      }
    };
    _proto.handleNext = function handleNext() {
      var isEnabled = !this.nextButton_.classList.contains("amp-disabled");
      if (isEnabled) {
        this.go_(1, true, false);
      }
    };
    return CarouselControls2;
  }();

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
  function isLayoutSizeFixed(layout) {
    return layout == Layout_Enum.FIXED || layout == Layout_Enum.FIXED_HEIGHT;
  }

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
  function getStyle(element, property, opt_bypassCache) {
    var propertyName = getVendorJsPropertyName(element.style, property, opt_bypassCache);
    if (!propertyName) {
      return void 0;
    }
    if (isVar(propertyName)) {
      return element.style.getPropertyValue(propertyName);
    }
    return element.style[propertyName];
  }
  function computedStyle(win, el) {
    var style = win.getComputedStyle(el);
    return style || EMPTY_CSS_DECLARATION;
  }
  function isVar(property) {
    return property.startsWith("--");
  }

  // src/core/dom/transition.js
  function numeric(start, end) {
    return function(time) {
      return start + (end - start) * time;
    };
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

  // extensions/amp-carousel/0.1/scrollable-carousel.js
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf4(o2, p2) {
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
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf4(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  var TAG = "amp-scrollable-carousel";
  var AmpScrollableCarousel = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpScrollableCarousel2, _AMP$BaseElement);
    var _super = _createSuper(AmpScrollableCarousel2);
    function AmpScrollableCarousel2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.pos_ = 0;
      _this.oldPos_ = 0;
      _this.cells_ = null;
      _this.container_ = null;
      _this.scrollTimerId_ = null;
      _this.unobserveIntersections_ = null;
      _this.controls_ = null;
      return _this;
    }
    var _proto = AmpScrollableCarousel2.prototype;
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return isLayoutSizeFixed(layout);
    };
    _proto.isRelayoutNeeded = function isRelayoutNeeded() {
      return true;
    };
    _proto.setupBehavior_ = function setupBehavior_() {
      var _this2 = this;
      this.cancelTouchEvents_();
      this.container_.addEventListener("scroll", this.scrollHandler_.bind(this));
      this.container_.addEventListener("keydown", this.keydownHandler_.bind(this));
      this.cells_.forEach(function(cell) {
        Services.ownersForDoc(_this2.element).setOwner(cell, _this2.element);
      });
      this.registerAction("goToSlide", function(invocation) {
        var args = invocation.args;
        if (args) {
          var index = parseInt(args["index"], 10);
          _this2.goToSlide(index);
        }
      }, ActionTrust_Enum.LOW);
      Services.actionServiceForDoc(this.element).addToAllowlist("amp-carousel", "goToSlide", ["email"]);
    };
    _proto.buildCallback = function buildCallback() {
      var _buildDom = buildDom(this.element), cells = _buildDom.cells, container = _buildDom.container, nextButton = _buildDom.nextButton, prevButton = _buildDom.prevButton;
      this.container_ = container;
      this.cells_ = cells;
      this.controls_ = new CarouselControls({
        element: this.element,
        prevButton: prevButton,
        nextButton: nextButton,
        go: this.go.bind(this)
      });
      this.setupBehavior_();
    };
    _proto.layoutCallback = function layoutCallback() {
      var _this3 = this;
      this.unobserveIntersections_ = observeIntersections(this.element, function(_ref) {
        var isIntersecting = _ref.isIntersecting;
        return _this3.viewportCallback(isIntersecting);
      });
      this.doLayout_(this.pos_);
      this.preloadNext_(this.pos_, 1);
      this.controls_.setControlsState({
        prev: this.hasPrev_(),
        next: this.hasNext_()
      });
      return resolvedPromise();
    };
    _proto.unlayoutCallback = function unlayoutCallback() {
      var _this$unobserveInters;
      (_this$unobserveInters = this.unobserveIntersections_) == null ? void 0 : _this$unobserveInters.call(this);
      this.unobserveIntersections_ = null;
      return true;
    };
    _proto.viewportCallback = function viewportCallback(inViewport) {
      this.updateInViewport_(this.pos_, this.pos_);
      if (inViewport) {
        this.controls_.hintControls();
      }
    };
    _proto.go = function go(dir, animate) {
      var _this4 = this;
      var newPos = this.nextPos_(this.pos_, dir);
      var oldPos = this.pos_;
      if (newPos == oldPos) {
        return;
      }
      if (!animate) {
        this.commitSwitch_(newPos);
        this.container_.scrollLeft = newPos;
      } else {
        var interpolate = numeric(oldPos, newPos);
        var duration = 200;
        var curve = "ease-in-out";
        Animation.animate(this.element, function(pos) {
          _this4.container_.scrollLeft = interpolate(pos);
        }, duration, curve).thenAlways(function() {
          _this4.commitSwitch_(newPos);
        });
      }
    };
    _proto.goToSlide = function goToSlide(index) {
      var _this5 = this;
      var noOfSlides = this.cells_.length;
      if (!isFinite(index) || index < 0 || index >= noOfSlides) {
        this.user().error(TAG, "Invalid [slide] value: %s", index);
        return resolvedPromise();
      }
      var oldPos = this.pos_;
      var newPos = oldPos;
      var measureNewPosition = function measureNewPosition2() {
        newPos = _this5.getPosForSlideIndex_(index);
      };
      var mutateNewPosition = function mutateNewPosition2() {
        if (newPos == oldPos) {
          return;
        }
        var interpolate = numeric(oldPos, newPos);
        var duration = 200;
        var curve = "ease-in-out";
        Animation.animate(_this5.element, function(pos) {
          _this5.container_.scrollLeft = interpolate(pos);
        }, duration, curve).thenAlways(function() {
          _this5.commitSwitch_(newPos);
        });
      };
      this.measureMutateElement(measureNewPosition, mutateNewPosition);
    };
    _proto.getPosForSlideIndex_ = function getPosForSlideIndex_(index) {
      var containerWidth = this.element.offsetWidth;
      var targetPosition = this.cells_[index].offsetLeft;
      var targetWidth = this.cells_[index].offsetWidth;
      return targetPosition - (containerWidth - targetWidth) / 2;
    };
    _proto.scrollHandler_ = function scrollHandler_() {
      var currentScrollLeft = this.container_.scrollLeft;
      this.pos_ = currentScrollLeft;
      if (this.scrollTimerId_ === null) {
        this.waitForScroll_(currentScrollLeft);
      }
    };
    _proto.keydownHandler_ = function keydownHandler_(event) {
      var key = event.key;
      if (key == Keys_Enum.LEFT_ARROW || key == Keys_Enum.RIGHT_ARROW) {
        event.stopPropagation();
      }
    };
    _proto.waitForScroll_ = function waitForScroll_(startingScrollLeft) {
      var _this6 = this;
      this.scrollTimerId_ = Services.timerFor(this.win).delay(function() {
        if (Math.abs(startingScrollLeft - _this6.pos_) < 30) {
          dev().fine(TAG, "slow scrolling: %s - %s", startingScrollLeft, _this6.pos_);
          _this6.scrollTimerId_ = null;
          _this6.commitSwitch_(_this6.pos_);
        } else {
          dev().fine(TAG, "fast scrolling: %s - %s", startingScrollLeft, _this6.pos_);
          _this6.waitForScroll_(_this6.pos_);
        }
      }, 100);
    };
    _proto.commitSwitch_ = function commitSwitch_(pos) {
      this.updateInViewport_(pos, this.oldPos_);
      this.doLayout_(pos);
      this.preloadNext_(pos, Math.sign(pos - this.oldPos_));
      this.oldPos_ = pos;
      this.pos_ = pos;
      this.controls_.setControlsState({
        prev: this.hasPrev_(),
        next: this.hasNext_()
      });
    };
    _proto.nextPos_ = function nextPos_(pos, dir) {
      var containerWidth = this.element.offsetWidth;
      var fullWidth = this.container_.scrollWidth;
      var newPos = pos + dir * containerWidth;
      if (newPos < 0) {
        return 0;
      }
      if (fullWidth >= containerWidth && newPos > fullWidth - containerWidth) {
        return fullWidth - containerWidth;
      }
      return newPos;
    };
    _proto.withinWindow_ = function withinWindow_(pos, callback) {
      var containerWidth = this.element.offsetWidth;
      for (var i = 0; i < this.cells_.length; i++) {
        var cell = this.cells_[i];
        if (cell.offsetLeft + cell.offsetWidth >= pos && cell.offsetLeft <= pos + containerWidth) {
          callback(cell);
        }
      }
    };
    _proto.doLayout_ = function doLayout_(pos) {
      var _this7 = this;
      this.withinWindow_(pos, function(cell) {
        Services.ownersForDoc(_this7.element).scheduleLayout(_this7.element, cell);
      });
    };
    _proto.preloadNext_ = function preloadNext_(pos, dir) {
      var _this8 = this;
      var nextPos = this.nextPos_(pos, dir);
      if (nextPos != pos) {
        this.withinWindow_(nextPos, function(cell) {
          Services.ownersForDoc(_this8.element).schedulePreload(_this8.element, cell);
        });
      }
    };
    _proto.updateInViewport_ = function updateInViewport_(newPos, oldPos) {
      var _this9 = this;
      var seen = [];
      this.withinWindow_(newPos, function(cell) {
        seen.push(cell);
      });
      if (oldPos != newPos) {
        this.withinWindow_(oldPos, function(cell) {
          if (!seen.includes(cell)) {
            var owners = Services.ownersForDoc(_this9.element);
            owners.schedulePause(_this9.element, cell);
          }
        });
      }
    };
    _proto.hasPrev_ = function hasPrev_() {
      return this.pos_ != 0;
    };
    _proto.hasNext_ = function hasNext_() {
      var containerWidth = this.element.offsetWidth;
      var scrollWidth = this.container_.scrollWidth;
      var maxPos = Math.max(scrollWidth - containerWidth, 0);
      return this.pos_ != maxPos;
    };
    _proto.interactionNext = function interactionNext() {
      this.controls_.handleNext();
    };
    _proto.interactionPrev = function interactionPrev() {
      this.controls_.handlePrev();
    };
    _proto.goCallback = function goCallback(dir, animate) {
      this.go(dir, animate);
    };
    _proto.cancelTouchEvents_ = function cancelTouchEvents_() {
      listen(this.element, "touchmove", function(event) {
        return event.stopPropagation();
      }, {
        passive: true
      });
    };
    return AmpScrollableCarousel2;
  }(AMP.BaseElement);

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
  var TAG2 = "EXPERIMENTS";
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
    var buildExperimentConfigs = _extends2({}, (_win$AMP_CONFIG3 = win.AMP_CONFIG) != null ? _win$AMP_CONFIG3 : {}, (_win$AMP_EXP = win.AMP_EXP) != null ? _win$AMP_EXP : parseJson(((_win$__AMP_EXP = win.__AMP_EXP) == null ? void 0 : _win$__AMP_EXP.textContent) || "{}"));
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
      dev().warn(TAG2, "Failed to retrieve experiments from localStorage.");
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

  // src/core/dom/layout/size-observer.js
  var Type_Enum = {
    CONTENT: 0,
    BORDER_BOX: 1
  };
  var VERTICAL_RE = /vertical/;
  var observers = /* @__PURE__ */ new WeakMap();
  var targetObserverMultimap = /* @__PURE__ */ new WeakMap();
  var targetEntryMap = /* @__PURE__ */ new WeakMap();
  function observeContentSize(element, callback) {
    observeSize(element, Type_Enum.CONTENT, callback);
  }
  function unobserveContentSize(element, callback) {
    unobserveSize(element, Type_Enum.CONTENT, callback);
  }
  function observeSize(element, type, callback) {
    var win = element.ownerDocument.defaultView;
    if (!win) {
      return;
    }
    var callbacks = targetObserverMultimap.get(element);
    if (!callbacks) {
      callbacks = [];
      targetObserverMultimap.set(element, callbacks);
      getObserver(win).observe(element);
    }
    var exists = callbacks.some(function(cb) {
      return cb.callback === callback && cb.type === type;
    });
    if (!exists) {
      callbacks.push({
        type: type,
        callback: callback
      });
      var entry = targetEntryMap.get(element);
      if (entry) {
        setTimeout(function() {
          return computeAndCall(type, callback, entry);
        });
      }
    }
  }
  function unobserveSize(element, type, callback) {
    var callbacks = targetObserverMultimap.get(element);
    if (!callbacks) {
      return;
    }
    remove(callbacks, function(cb) {
      return cb.callback === callback && cb.type === type;
    });
    if (callbacks.length == 0) {
      targetObserverMultimap.delete(element);
      targetEntryMap.delete(element);
      var win = element.ownerDocument.defaultView;
      if (win) {
        getObserver(win).unobserve(element);
      }
    }
  }
  function getObserver(win) {
    var observer = observers.get(win);
    if (!observer) {
      observer = new win.ResizeObserver(processEntries);
      observers.set(win, observer);
    }
    return observer;
  }
  function processEntries(entries) {
    var seen = new Set();
    for (var i = entries.length - 1; i >= 0; i--) {
      var entry = entries[i];
      var target = entry.target;
      if (seen.has(target)) {
        continue;
      }
      seen.add(target);
      var callbacks = targetObserverMultimap.get(target);
      if (!callbacks) {
        continue;
      }
      targetEntryMap.set(target, entry);
      for (var k = 0; k < callbacks.length; k++) {
        var _callbacks$k = callbacks[k], callback = _callbacks$k.callback, type = _callbacks$k.type;
        computeAndCall(type, callback, entry);
      }
    }
  }
  function computeAndCall(type, callback, entry) {
    if (type == Type_Enum.CONTENT) {
      var contentRect = entry.contentRect;
      var height = contentRect.height, width = contentRect.width;
      var size = {
        width: width,
        height: height
      };
      tryCallback(callback, size);
    } else if (type == Type_Enum.BORDER_BOX) {
      var borderBoxSizeArray = entry.borderBoxSize;
      var borderBoxSize;
      if (borderBoxSizeArray) {
        if (borderBoxSizeArray.length > 0) {
          borderBoxSize = borderBoxSizeArray[0];
        } else {
          borderBoxSize = {
            inlineSize: 0,
            blockSize: 0
          };
        }
      } else {
        var target = entry.target;
        var win = getWin(target);
        var isVertical = VERTICAL_RE.test(computedStyle(win, target)["writing-mode"]);
        var _target = target, offsetHeight = _target.offsetHeight, offsetWidth = _target.offsetWidth;
        var inlineSize, blockSize;
        if (isVertical) {
          blockSize = offsetWidth;
          inlineSize = offsetHeight;
        } else {
          inlineSize = offsetWidth;
          blockSize = offsetHeight;
        }
        borderBoxSize = {
          inlineSize: inlineSize,
          blockSize: blockSize
        };
      }
      tryCallback(callback, borderBoxSize);
    }
  }

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

  // extensions/amp-carousel/0.1/slidescroll.js
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf2(subClass, superClass);
  }
  function _setPrototypeOf2(o, p) {
    _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf4(o2, p2) {
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
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf4(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf2(o);
  }
  var SHOWN_CSS_CLASS = "i-amphtml-slide-item-show";
  var NATIVE_SNAP_TIMEOUT = 200;
  var IOS_CUSTOM_SNAP_TIMEOUT = 45;
  var NATIVE_TOUCH_TIMEOUT = 100;
  var IOS_TOUCH_TIMEOUT = 45;
  var CUSTOM_SNAP_TIMEOUT = 100;
  var TAG3 = "AMP-CAROUSEL";
  var AmpSlideScroll = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits2(AmpSlideScroll2, _AMP$BaseElement);
    var _super = _createSuper2(AmpSlideScroll2);
    function AmpSlideScroll2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.vsync_ = null;
      _this.hasNativeSnapPoints_ = false;
      _this.slides_ = [];
      _this.noOfSlides_ = 0;
      _this.slidesContainer_ = null;
      _this.slideWrappers_ = [];
      _this.snappingInProgress_ = false;
      _this.scrollTimeout_ = null;
      _this.isTouching_ = false;
      _this.autoplayTimeoutId_ = null;
      _this.hasLoop_ = false;
      _this.loopAdded_ = false;
      _this.hasAutoplay_ = false;
      _this.autoplayDelay_ = 5e3;
      _this.autoplayLoops_ = null;
      _this.loopsMade_ = 0;
      _this.shouldLoop_ = false;
      _this.shouldAutoplay_ = false;
      _this.elasticScrollState_ = 0;
      _this.slideIndex_ = null;
      _this.initialSlideIndex_ = 0;
      _this.slideWidth_ = 0;
      _this.previousScrollLeft_ = 0;
      _this.dataSlideIdArr_ = [];
      var platform = Services.platformFor(_this.win);
      _this.isIos_ = platform.isIos();
      _this.isSafari_ = platform.isSafari();
      _this.action_ = null;
      _this.shouldDisableCssSnap_ = Services.platformFor(_this.win).getIosVersionString().startsWith("10.3") ? true : _this.isIos_ ? false : !isExperimentOn(_this.win, "amp-carousel-chrome-scroll-snap");
      _this.hasFirstResizedOccured_ = false;
      _this.onResized_ = _this.onResized_.bind(_assertThisInitialized2(_this));
      _this.unobserveIntersections_ = null;
      _this.controls_ = null;
      return _this;
    }
    var _proto = AmpSlideScroll2.prototype;
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return isLayoutSizeDefined(layout);
    };
    _proto.isRelayoutNeeded = function isRelayoutNeeded() {
      return true;
    };
    _proto.setupBehavior_ = function setupBehavior_() {
      var _this2 = this;
      var autoplayVal = this.element.getAttribute("autoplay");
      if (autoplayVal) {
        this.autoplayLoops_ = parseInt(autoplayVal, 10);
        userAssert(isFiniteNumber(this.autoplayLoops_));
      }
      if (this.shouldAutoplay_ && this.autoplayLoops_ != 0) {
        this.setupAutoplay_();
      }
      this.registerAction("toggleAutoplay", function(invocation) {
        var args = invocation.args;
        if (args && args["toggleOn"] !== void 0) {
          _this2.toggleAutoplay_(args["toggleOn"]);
        } else {
          _this2.toggleAutoplay_(!_this2.hasAutoplay_);
        }
      }, ActionTrust_Enum.LOW);
    };
    _proto.setupSlideBehavior_ = function setupSlideBehavior_() {
      var _this3 = this;
      this.vsync_ = this.getVsync();
      this.action_ = Services.actionServiceForDoc(this.element);
      this.action_.addToAllowlist(TAG3, "goToSlide", ["email"]);
      this.hasNativeSnapPoints_ = getStyle(this.element, "scrollSnapType") != void 0;
      if (this.shouldDisableCssSnap_) {
        this.hasNativeSnapPoints_ = false;
      }
      this.slidesContainer_.classList.toggle(ClassNames.SLIDES_CONTAINER_NOSNAP, this.shouldDisableCssSnap_);
      if (this.hasNativeSnapPoints_) {
        var start = this.win.document.createElement("div");
        start.classList.add("i-amphtml-carousel-start-marker");
        this.slidesContainer_.appendChild(start);
        var end = this.win.document.createElement("div");
        end.classList.add("i-amphtml-carousel-end-marker");
        this.slidesContainer_.appendChild(end);
      }
      this.slides_.forEach(function(slide, index) {
        var id = slide.getAttribute("data-slide-id") || index.toString();
        _this3.dataSlideIdArr_.push(id);
        Services.ownersForDoc(_this3.element).setOwner(slide, _this3.element);
      });
      this.cancelTouchEvents_();
      this.slidesContainer_.addEventListener("scroll", this.scrollHandler_.bind(this));
      this.slidesContainer_.addEventListener("keydown", this.keydownHandler_.bind(this));
      listen(this.slidesContainer_, "touchmove", this.touchMoveHandler_.bind(this), {
        passive: true
      });
      listen(this.slidesContainer_, "touchend", this.touchEndHandler_.bind(this), {
        passive: true
      });
      this.registerAction("goToSlide", function(invocation) {
        var args = invocation.args;
        if (args) {
          _this3.goToSlide(args["index"], ActionTrust_Enum.HIGH);
        }
      }, ActionTrust_Enum.LOW);
    };
    _proto.attachedCallback = function attachedCallback() {
      observeContentSize(this.element, this.onResized_);
    };
    _proto.detachedCallback = function detachedCallback() {
      unobserveContentSize(this.element, this.onResized_);
    };
    _proto.isLoopingEligible = function isLoopingEligible() {
      return this.noOfSlides_ > 1;
    };
    _proto.mutatedAttributesCallback = function mutatedAttributesCallback(mutations) {
      var slide = mutations["slide"];
      if (slide !== void 0) {
        this.goToSlide(slide, ActionTrust_Enum.HIGH);
      }
    };
    _proto.touchMoveHandler_ = function touchMoveHandler_() {
      this.clearAutoplayTimer_();
      this.isTouching_ = true;
    };
    _proto.viewportCallback = function viewportCallback(inViewport) {
      if (inViewport) {
        var _this$controls_;
        this.autoplay_();
        (_this$controls_ = this.controls_) == null ? void 0 : _this$controls_.hintControls();
      } else {
        this.clearAutoplayTimer_();
      }
    };
    _proto.interactionNext = function interactionNext() {
      this.controls_.handleNext();
    };
    _proto.interactionPrev = function interactionPrev() {
      this.controls_.handlePrev();
    };
    _proto.goCallback = function goCallback(dir, animate, opt_autoplay) {
      this.go(dir, animate, opt_autoplay);
    };
    _proto.go = function go(dir, animate, opt_autoplay) {
      var trust = opt_autoplay ? ActionTrust_Enum.LOW : ActionTrust_Enum.HIGH;
      this.moveSlide(dir, animate, trust);
      if (opt_autoplay) {
        this.autoplay_();
      } else {
        this.clearAutoplayTimer_();
      }
    };
    _proto.waitForScrollSettled_ = function waitForScrollSettled_(timeout) {
      var _this4 = this;
      if (this.scrollTimeout_) {
        Services.timerFor(this.win).cancel(this.scrollTimeout_);
      }
      this.scrollTimeout_ = Services.timerFor(this.win).delay(function() {
        _this4.scrollTimeout_ = null;
        if (_this4.snappingInProgress_ || _this4.isTouching_) {
          return;
        }
        var currentScrollLeft = _this4.slidesContainer_.scrollLeft;
        if (_this4.hasNativeSnapPoints_) {
          _this4.updateOnScroll_(currentScrollLeft, ActionTrust_Enum.LOW);
        } else {
          _this4.customSnap_(currentScrollLeft, void 0, ActionTrust_Enum.LOW);
        }
      }, timeout);
    };
    _proto.touchEndHandler_ = function touchEndHandler_() {
      var timeout = this.shouldDisableCssSnap_ ? IOS_TOUCH_TIMEOUT : NATIVE_TOUCH_TIMEOUT;
      this.isTouching_ = false;
      this.waitForScrollSettled_(timeout);
    };
    _proto.onResized_ = function onResized_(size) {
      this.slideWidth_ = size.width;
      this.hasFirstResizedOccured_ = true;
    };
    _proto.buildCallback = function buildCallback() {
      var _buildDom = buildDom(this.element), nextButton = _buildDom.nextButton, prevButton = _buildDom.prevButton, slideWrappers = _buildDom.slideWrappers, slides = _buildDom.slides, slidesContainer = _buildDom.slidesContainer;
      this.slides_ = slides;
      this.slidesContainer_ = slidesContainer;
      this.slideWrappers_ = slideWrappers;
      this.noOfSlides_ = this.slides_.length;
      this.hasLoop_ = this.element.hasAttribute("loop");
      this.hasAutoplay_ = this.element.hasAttribute("autoplay");
      this.shouldLoop_ = this.hasLoop_ && this.isLoopingEligible();
      this.shouldAutoplay_ = this.hasAutoplay_ && this.isLoopingEligible();
      this.controls_ = new CarouselControls({
        element: this.element,
        go: this.go.bind(this),
        nextButton: nextButton,
        prevButton: prevButton
      });
      this.controls_.updateButtonTitles(this.getPrevButtonTitle(), this.getNextButtonTitle());
      this.setupBehavior_();
      this.setupSlideBehavior_();
    };
    _proto.layoutCallback = function layoutCallback() {
      var _this5 = this;
      this.unobserveIntersections_ = observeIntersections(this.element, function(_ref) {
        var isIntersecting = _ref.isIntersecting;
        return _this5.viewportCallback(isIntersecting);
      });
      var isScaled = closestAncestorElementBySelector(this.element, "[i-amphtml-scale-animation]");
      if (isScaled) {
        return resolvedPromise();
      }
      if (!this.hasFirstResizedOccured_) {
        this.slideWidth_ = this.slidesContainer_.clientWidth;
      }
      if (this.slideIndex_ === null) {
        this.showSlide_(this.initialSlideIndex_);
      } else {
        var index = user().assertNumber(this.slideIndex_, "E#19457 this.slideIndex_");
        var scrollLeft = this.getScrollLeftForIndex_(index);
        Services.ownersForDoc(this.element).scheduleLayout(this.element, this.slides_[index]);
        this.slidesContainer_.scrollLeft = scrollLeft;
        this.previousScrollLeft_ = scrollLeft;
      }
      return resolvedPromise();
    };
    _proto.unlayoutCallback = function unlayoutCallback() {
      var _this$unobserveInters;
      (_this$unobserveInters = this.unobserveIntersections_) == null ? void 0 : _this$unobserveInters.call(this);
      this.unobserveIntersections_ = null;
      this.slideIndex_ = null;
      return true;
    };
    _proto.hasPrev_ = function hasPrev_() {
      return this.shouldLoop_ || this.slideIndex_ > 0;
    };
    _proto.hasNext_ = function hasNext_() {
      return this.shouldLoop_ || this.slideIndex_ < this.slides_.length - 1;
    };
    _proto.moveSlide = function moveSlide(dir, animate, trust) {
      if (this.slideIndex_ !== null) {
        var hasNext = this.hasNext_();
        var hasPrev = this.hasPrev_();
        if (dir == 1 && hasNext || dir == -1 && hasPrev) {
          var newIndex = dev().assertNumber(this.slideIndex_) + dir;
          if (newIndex == -1) {
            newIndex = this.noOfSlides_ - 1;
          } else if (newIndex >= this.noOfSlides_) {
            newIndex = 0;
          }
          if (animate) {
            var currentScrollLeft = dir == 1 && !hasPrev ? 0 : this.slideWidth_;
            this.customSnap_(currentScrollLeft, dir, trust);
          } else {
            this.showSlideAndTriggerAction_(newIndex, trust);
          }
        }
      }
    };
    _proto.scrollHandler_ = function scrollHandler_(unusedEvent) {
      var currentScrollLeft = this.slidesContainer_.scrollLeft;
      if (!this.isIos_ && !this.isSafari_) {
        this.handleCustomElasticScroll_(currentScrollLeft);
      }
      var timeout = this.hasNativeSnapPoints_ ? NATIVE_SNAP_TIMEOUT : this.isIos_ ? IOS_CUSTOM_SNAP_TIMEOUT : CUSTOM_SNAP_TIMEOUT;
      this.waitForScrollSettled_(timeout);
      this.previousScrollLeft_ = currentScrollLeft;
    };
    _proto.keydownHandler_ = function keydownHandler_(event) {
      var key = event.key;
      if (key == Keys_Enum.LEFT_ARROW || key == Keys_Enum.RIGHT_ARROW) {
        event.stopPropagation();
      }
    };
    _proto.handleCustomElasticScroll_ = function handleCustomElasticScroll_(currentScrollLeft) {
      var _this6 = this;
      var scrollWidth = this.slidesContainer_.scrollWidth;
      if (this.elasticScrollState_ == -1 && currentScrollLeft >= this.previousScrollLeft_) {
        this.customSnap_(currentScrollLeft).then(function() {
          _this6.elasticScrollState_ = 0;
        });
      } else if (this.elasticScrollState_ == 1 && currentScrollLeft <= this.previousScrollLeft_) {
        this.customSnap_(currentScrollLeft).then(function() {
          _this6.elasticScrollState_ = 0;
        });
      } else if (currentScrollLeft < 0) {
        this.elasticScrollState_ = -1;
      } else if (currentScrollLeft + this.slideWidth_ > scrollWidth) {
        this.elasticScrollState_ = 1;
      } else {
        this.elasticScrollState_ = 0;
      }
    };
    _proto.customSnap_ = function customSnap_(currentScrollLeft, opt_forceDir, opt_trust) {
      var _this7 = this;
      this.snappingInProgress_ = true;
      var newIndex = this.getNextSlideIndex_(currentScrollLeft);
      var diff = newIndex - this.slideIndex_;
      var hasPrev = this.hasPrev_();
      var toScrollLeft = hasPrev ? this.slideWidth_ : 0;
      if (diff == 0 && (opt_forceDir == 1 || opt_forceDir == -1)) {
        diff = opt_forceDir;
      }
      if (diff == 1 || diff != -1 && diff == -1 * (this.noOfSlides_ - 1)) {
        toScrollLeft = hasPrev ? this.slideWidth_ * 2 : this.slideWidth_;
      } else if (diff == -1 || diff == this.noOfSlides_ - 1) {
        toScrollLeft = 0;
      }
      return this.animateScrollLeft_(currentScrollLeft, toScrollLeft).then(function() {
        _this7.updateOnScroll_(toScrollLeft, opt_trust);
      });
    };
    _proto.getNextSlideIndex_ = function getNextSlideIndex_(currentScrollLeft) {
      if (!currentScrollLeft && !this.slideWidth_) {
        return 0;
      }
      var scrolledSlideIndex = Math.round(currentScrollLeft / this.slideWidth_);
      var updateValue = 0;
      var hasPrev = this.hasPrev_();
      var hasNext = this.hasNext_();
      if (hasPrev && hasNext) {
        updateValue = scrolledSlideIndex - 1;
      } else if (hasNext) {
        updateValue = scrolledSlideIndex;
      } else if (hasPrev) {
        updateValue = scrolledSlideIndex - 1;
      }
      var newIndex = this.slideIndex_ + updateValue;
      if (this.shouldLoop_) {
        newIndex = newIndex < 0 ? this.noOfSlides_ - 1 : newIndex >= this.noOfSlides_ ? 0 : newIndex;
      } else {
        newIndex = newIndex < 0 ? 0 : newIndex >= this.noOfSlides_ ? this.noOfSlides_ - 1 : newIndex;
      }
      return newIndex;
    };
    _proto.getPrevButtonTitle = function getPrevButtonTitle2() {
      var prevIndex = this.getPrevIndex_(this.slideIndex_);
      var index = (prevIndex == null ? 0 : prevIndex) + 1;
      return getPrevButtonTitle(this.element, {
        index: String(index),
        total: String(this.noOfSlides_)
      });
    };
    _proto.getNextButtonTitle = function getNextButtonTitle2() {
      var nextIndex = this.getNextIndex_(this.slideIndex_);
      var index = (nextIndex == null ? this.noOfSlides_ - 1 : nextIndex) + 1;
      return getNextButtonTitle(this.element, {
        index: String(index),
        total: String(this.noOfSlides_)
      });
    };
    _proto.updateOnScroll_ = function updateOnScroll_(currentScrollLeft, opt_trust) {
      var _this8 = this;
      if (!isFiniteNumber(currentScrollLeft) || this.slideIndex_ === null) {
        return;
      }
      this.snappingInProgress_ = true;
      var newIndex = this.getNextSlideIndex_(currentScrollLeft);
      this.vsync_.mutate(function() {
        _this8.showSlideAndTriggerAction_(newIndex, opt_trust);
        _this8.vsync_.mutate(function() {
          _this8.snappingInProgress_ = false;
        });
      });
    };
    _proto.goToSlide = function goToSlide(value, trust) {
      var index = parseInt(value, 10);
      if (!isFinite(index) || index < 0 || index >= this.noOfSlides_) {
        this.user().error(TAG3, "Invalid [slide] value: ", value);
        return;
      }
      if (this.slideIndex_ === null) {
        this.initialSlideIndex_ = index;
        return;
      }
      this.showSlideAndTriggerAction_(index, trust);
    };
    _proto.getPrevIndex_ = function getPrevIndex_(currentIndex) {
      return currentIndex - 1 >= 0 ? currentIndex - 1 : this.shouldLoop_ ? this.noOfSlides_ - 1 : null;
    };
    _proto.getNextIndex_ = function getNextIndex_(currentIndex) {
      return currentIndex + 1 < this.noOfSlides_ ? currentIndex + 1 : this.shouldLoop_ ? 0 : null;
    };
    _proto.showSlide_ = function showSlide_(newIndex) {
      var _this9 = this, _this$controls_2, _this$controls_3;
      var noOfSlides_ = this.noOfSlides_;
      newIndex = dev().assertNumber(newIndex);
      if (newIndex < 0 || newIndex >= noOfSlides_ || this.slideIndex_ == newIndex) {
        return false;
      }
      var prevIndex = this.getPrevIndex_(newIndex);
      var nextIndex = this.getNextIndex_(newIndex);
      var showIndexArr = [];
      if (prevIndex != null) {
        showIndexArr.push(prevIndex);
      }
      showIndexArr.push(newIndex);
      if (nextIndex != null && nextIndex !== prevIndex) {
        showIndexArr.push(nextIndex);
      }
      var newSlideInView = this.slides_[newIndex];
      if (newSlideInView === void 0) {
        dev().error(TAG3, "Attempting to access a non-existant slide %s / %s", newIndex, noOfSlides_);
        return false;
      }
      showIndexArr.forEach(function(showIndex, loopIndex) {
        if (_this9.shouldLoop_) {
          setStyle(_this9.slideWrappers_[showIndex], "order", loopIndex + 1);
        }
        _this9.slideWrappers_[showIndex].classList.add(SHOWN_CSS_CLASS);
        var owners = Services.ownersForDoc(_this9.element);
        if (showIndex == newIndex) {
          owners.scheduleLayout(_this9.element, _this9.slides_[showIndex]);
          owners.scheduleResume(_this9.element, _this9.slides_[showIndex]);
          _this9.slides_[showIndex].setAttribute("aria-hidden", "false");
        } else {
          owners.schedulePreload(_this9.element, _this9.slides_[showIndex]);
          _this9.slides_[showIndex].setAttribute("aria-hidden", "true");
        }
      });
      this.slidesContainer_.scrollLeft = this.getScrollLeftForIndex_(newIndex);
      this.triggerAnalyticsEvent_(newIndex);
      this.slideIndex_ = newIndex;
      if (this.autoplayLoops_ && this.slideIndex_ === this.noOfSlides_ - 1) {
        this.loopsMade_++;
        if (this.loopsMade_ == this.autoplayLoops_) {
          this.removeAutoplay_();
        }
      }
      this.hideRestOfTheSlides_(showIndexArr);
      (_this$controls_2 = this.controls_) == null ? void 0 : _this$controls_2.setControlsState({
        prev: this.hasPrev_(),
        next: this.hasNext_()
      });
      (_this$controls_3 = this.controls_) == null ? void 0 : _this$controls_3.updateButtonTitles(this.getPrevButtonTitle(), this.getNextButtonTitle());
      return true;
    };
    _proto.showSlideAndTriggerAction_ = function showSlideAndTriggerAction_(newIndex, opt_trust) {
      if (opt_trust === void 0) {
        opt_trust = ActionTrust_Enum.LOW;
      }
      var slideChanged = this.showSlide_(newIndex);
      if (slideChanged) {
        var name = "slideChange";
        var event = createCustomEvent(this.win, "slidescroll." + name, dict({
          "index": newIndex
        }));
        this.action_.trigger(this.element, name, event, opt_trust);
        dispatchCustomEvent(this.element, name, {
          index: newIndex,
          actionTrust: opt_trust
        });
      }
    };
    _proto.getScrollLeftForIndex_ = function getScrollLeftForIndex_(index) {
      var newScrollLeft = this.slideWidth_;
      if (!this.shouldLoop_ && index == 0 || this.slides_.length <= 1) {
        newScrollLeft = 0;
      }
      return newScrollLeft;
    };
    _proto.hideRestOfTheSlides_ = function hideRestOfTheSlides_(indexArr) {
      var noOfSlides_ = this.noOfSlides_;
      for (var i = 0; i < noOfSlides_; i++) {
        if (!this.slideWrappers_[i].classList.contains(SHOWN_CSS_CLASS)) {
          continue;
        }
        if (!indexArr.includes(i)) {
          if (this.shouldLoop_) {
            setStyle(this.slideWrappers_[i], "order", "");
          }
          dev().assertElement(this.slideWrappers_[i]).classList.remove(SHOWN_CSS_CLASS);
          this.slides_[i].removeAttribute("aria-hidden");
        }
        if (this.slideIndex_ != i) {
          Services.ownersForDoc(this.element).schedulePause(this.element, this.slides_[i]);
        }
      }
    };
    _proto.animateScrollLeft_ = function animateScrollLeft_(fromScrollLeft, toScrollLeft) {
      var _this10 = this;
      if (fromScrollLeft == toScrollLeft) {
        return resolvedPromise();
      }
      var interpolate = numeric(fromScrollLeft, toScrollLeft);
      var curve = bezierCurve(0.8, 0, 0.6, 1);
      var duration = 80;
      var slidesContainer = dev().assertElement(this.slidesContainer_);
      return Animation.animate(slidesContainer, function(pos) {
        _this10.slidesContainer_.scrollLeft = interpolate(pos);
      }, duration, curve).thenAlways();
    };
    _proto.cancelTouchEvents_ = function cancelTouchEvents_() {
      listen(this.element, "touchmove", function(event) {
        return event.stopPropagation();
      }, {
        passive: true
      });
    };
    _proto.triggerAnalyticsEvent_ = function triggerAnalyticsEvent_(newSlideIndex) {
      var direction = newSlideIndex - this.slideIndex_;
      if (direction == 0) {
        return;
      } else if (Math.abs(direction) !== 1) {
        direction = direction < 0 ? 1 : -1;
        if (this.slideIndex_ === null) {
          direction = 1;
        }
      }
      var fromSlide = this.slideIndex_ === null ? "null" : this.dataSlideIdArr_[dev().assertNumber(this.slideIndex_)];
      var vars = dict({
        "fromSlide": fromSlide,
        "toSlide": this.dataSlideIdArr_[newSlideIndex]
      });
      this.analyticsEvent_("amp-carousel-change", vars);
      if (direction == 1) {
        this.analyticsEvent_("amp-carousel-next", vars);
      } else {
        this.analyticsEvent_("amp-carousel-prev", vars);
      }
    };
    _proto.analyticsEvent_ = function analyticsEvent_(eventType, vars) {
      triggerAnalyticsEvent(this.element, eventType, vars);
    };
    _proto.setupAutoplay_ = function setupAutoplay_() {
      var delayValue = Number(this.element.getAttribute("delay"));
      if (delayValue > 0) {
        this.autoplayDelay_ = Math.max(1e3, delayValue);
      }
      if (!this.hasLoop_) {
        this.element.setAttribute("loop", "");
        this.loopAdded_ = true;
        this.hasLoop_ = true;
        this.shouldLoop_ = true;
      }
    };
    _proto.autoplay_ = function autoplay_() {
      if (!this.shouldAutoplay_ || this.autoplayLoops_ == 0) {
        return;
      }
      this.clearAutoplayTimer_();
      this.autoplayTimeoutId_ = Services.timerFor(this.win).delay(this.go.bind(this, 1, true, true), this.autoplayDelay_);
    };
    _proto.toggleAutoplay_ = function toggleAutoplay_(toggleOn) {
      if (toggleOn == this.shouldAutoplay_) {
        return;
      }
      var prevAutoplayStatus = this.shouldAutoplay_;
      this.hasAutoplay_ = toggleOn;
      this.shouldAutoplay_ = this.hasAutoplay_ && this.isLoopingEligible();
      if (!prevAutoplayStatus && this.shouldAutoplay_) {
        this.setupAutoplay_();
      }
      if (this.shouldAutoplay_) {
        this.autoplay_();
      } else {
        this.clearAutoplayTimer_();
      }
    };
    _proto.clearAutoplayTimer_ = function clearAutoplayTimer_() {
      if (this.autoplayTimeoutId_ !== null) {
        Services.timerFor(this.win).cancel(this.autoplayTimeoutId_);
        this.autoplayTimeoutId_ = null;
      }
    };
    _proto.removeAutoplay_ = function removeAutoplay_() {
      this.clearAutoplayTimer_();
      if (this.loopAdded_) {
        this.element.removeAttribute("loop");
        this.loopAdded_ = false;
        this.hasLoop_ = false;
        this.shouldLoop_ = false;
      }
      this.hasAutoplay_ = false;
      this.shouldAutoplay_ = this.hasAutoplay_ && this.isLoopingEligible();
    };
    return AmpSlideScroll2;
  }(AMP.BaseElement);

  // build/amp-carousel-0.1.css.js
  var CSS2 = ".amp-carousel-slide>.i-amphtml-replaced-content{-o-object-fit:contain;object-fit:contain}.amp-carousel-button{position:absolute;box-sizing:border-box;top:50%;height:34px;width:34px;border-radius:2px;opacity:0;pointer-events:all;background-color:rgba(0,0,0,.5);background-position:50% 50%;background-repeat:no-repeat;transform:translateY(-50%);visibility:hidden;z-index:10}.amp-carousel-button:focus{border:1px solid #000;outline:1px solid #fff}.amp-mode-mouse .amp-carousel-button,amp-carousel.i-amphtml-carousel-has-controls .amp-carousel-button,amp-carousel[controls] .amp-carousel-button{opacity:1;visibility:visible}.amp-carousel-button-prev{left:16px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='%23fff'%3E%3Cpath d='M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z'/%3E%3C/svg%3E\");background-size:18px 18px}.amp-carousel-button-next{right:16px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='%23fff'%3E%3Cpath d='M9 3 7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z'/%3E%3C/svg%3E\");background-size:18px 18px}.i-amphtml-carousel-button-start-hint .amp-carousel-button:not(.amp-disabled){animation:i-amphtml-carousel-hint 1s ease-in 3s 1 normal both}.amp-mode-mouse .i-amphtml-carousel-button-start-hint .amp-carousel-button:not(.amp-disabled){animation:none}@keyframes i-amphtml-carousel-hint{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}amp-carousel .amp-carousel-button.amp-disabled{animation:none;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}amp-carousel[i-amphtml-carousel-hide-buttons] .amp-carousel-button-next,amp-carousel[i-amphtml-carousel-hide-buttons] .amp-carousel-button-prev{opacity:0;pointer-events:none;visibility:visible!important}.i-amphtml-slides-container{display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:nowrap;flex-wrap:nowrap;height:100%!important;left:0;overflow-x:auto!important;overflow-y:hidden!important;position:absolute!important;top:0;width:100%!important;scroll-snap-type:x mandatory!important;scrollbar-width:none;padding-bottom:20px!important;box-sizing:content-box!important;-webkit-overflow-scrolling:touch!important}.i-amphtml-slides-container::-webkit-scrollbar{display:none!important}.i-amphtml-slides-container.i-amphtml-no-scroll{overflow-x:hidden!important}.i-amphtml-slide-item{-ms-flex-align:center!important;align-items:center!important;display:none!important;-ms-flex:0 0 100%!important;flex:0 0 100%!important;height:100%!important;-ms-flex-pack:center!important;justify-content:center!important;position:relative!important;scroll-snap-align:start!important;width:100%!important}.i-amphtml-slide-item>*{height:100%;width:100%;overflow:hidden!important}.i-amphtml-slide-item-show{display:-ms-flexbox!important;display:flex!important}.i-amphtml-carousel-end-marker,.i-amphtml-carousel-start-marker{background-color:transparent!important;display:block!important;-ms-flex:0 0 1px!important;flex:0 0 1px!important;height:100%!important;position:relative!important;scroll-snap-align:start!important;width:1px!important}.i-amphtml-carousel-start-marker{-ms-flex-order:-1!important;order:-1!important;margin-left:-1px!important}.i-amphtml-carousel-end-marker{-ms-flex-order:100000000!important;order:100000000!important;margin-right:-1px!important}.i-amphtml-slidescroll-no-snap.i-amphtml-slides-container{scroll-snap-type:none!important}.i-amphtml-slidescroll-no-snap .i-amphtml-slide-item{scroll-snap-align:none!important}.i-amphtml-slidescroll-no-snap.i-amphtml-slides-container.i-amphtml-no-scroll{-webkit-overflow-scrolling:auto!important}.amp-scrollable-carousel-slide{display:inline-block!important;margin-left:8px}.amp-scrollable-carousel-slide:first-child{margin-left:0px}.i-amphtml-scrollable-carousel-container{white-space:nowrap!important;overflow-x:auto!important;overflow-y:hidden!important;-webkit-overflow-scrolling:touch!important}\n/*# sourceURL=/extensions/amp-carousel/0.1/amp-carousel.css*/";

  // extensions/amp-carousel/0.1/amp-carousel.js
  function _inherits3(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf3(subClass, superClass);
  }
  function _setPrototypeOf3(o, p) {
    _setPrototypeOf3 = Object.setPrototypeOf || function _setPrototypeOf4(o2, p2) {
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
    _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf4(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf3(o);
  }
  var CarouselSelector = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits3(CarouselSelector2, _AMP$BaseElement);
    var _super = _createSuper3(CarouselSelector2);
    function CarouselSelector2() {
      return _super.apply(this, arguments);
    }
    var _proto = CarouselSelector2.prototype;
    _proto.upgradeCallback = function upgradeCallback() {
      if (isScrollable(this.element)) {
        return new AmpScrollableCarousel(this.element);
      }
      return new AmpSlideScroll(this.element);
    };
    return CarouselSelector2;
  }(AMP.BaseElement);
  AMP.registerElement("amp-carousel", CarouselSelector, CSS2);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-carousel-0.1.max.js.map
