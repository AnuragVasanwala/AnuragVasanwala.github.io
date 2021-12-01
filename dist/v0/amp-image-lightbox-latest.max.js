(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-image-lightbox",ev:"0.1",l:true,f:(function(AMP,_){
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

  // src/core/mode/prod.js
  function isProd() {
    return false;
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

  // src/core/types/index.js
  function isElement(value) {
    return (value == null ? void 0 : value.nodeType) == 1;
  }

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
  function childElementByTag(parent, tagName) {
    assertIsName(tagName);
    return scopedQuerySelector(parent, "> " + tagName);
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
  function removeChildren(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  function copyChildren(from, to) {
    var frag = to.ownerDocument.createDocumentFragment();
    for (var n = from.firstChild; n; n = n.nextSibling) {
      frag.appendChild(n.cloneNode(true));
    }
    to.appendChild(frag);
  }
  function tryFocus(element) {
    try {
      element.focus();
    } catch (e) {
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
  function layoutRectFromDomRect(rect) {
    return layoutRectLtwh(Number(rect.left), Number(rect.top), Number(rect.width), Number(rect.height));
  }
  function moveLayoutRect(rect, dx, dy) {
    if (dx == 0 && dy == 0 || rect.width == 0 && rect.height == 0) {
      return rect;
    }
    return layoutRectLtwh(rect.left + dx, rect.top + dy, rect.width, rect.height);
  }

  // src/core/dom/propagate-attributes.js
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
  function propagateAttributes(attributes, sourceElement, updateElement, opt_removeMissingAttrs) {
    var attrs = arrayOrSingleItemToArray(attributes);
    for (var _iterator = _createForOfIteratorHelperLoose(attrs), _step; !(_step = _iterator()).done; ) {
      var attr = _step.value;
      var val = sourceElement.getAttribute(attr);
      if (val !== null) {
        updateElement.setAttribute(attr, val);
      } else if (opt_removeMissingAttrs) {
        updateElement.removeAttribute(attr);
      }
    }
  }

  // src/core/dom/srcset.js
  var srcsetRegex = /(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;
  function srcsetFromElement(element) {
    var srcsetAttr = element.getAttribute("srcset");
    if (srcsetAttr) {
      return parseSrcset(srcsetAttr);
    }
    var srcAttr = userAssert(element.getAttribute("src"), 'Either non-empty "srcset" or "src" attribute must be specified: %s', element);
    return srcsetFromSrc(srcAttr);
  }
  function srcsetFromSrc(src) {
    return new Srcset([{
      url: src,
      width: void 0,
      dpr: 1
    }]);
  }
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

  // src/core/error/index.js
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
    for (var _iterator = _createForOfIteratorHelperLoose2(arguments), _step; !(_step = _iterator()).done; ) {
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
  function devError(tag) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    var error = createError.apply(null, args);
    error.name = tag || error.name;
    maybeReportError(error);
  }

  // src/core/dom/style.js
  var propertyNameCache;
  var vendorPrefixes = ["Webkit", "webkit", "Moz", "moz", "ms", "O", "o"];
  var DISPLAY_STYLE_MESSAGE = "`display` style detected. You must use toggle instead.";
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
  function px(value) {
    return value + "px";
  }
  function units(value, fn) {
    return typeof value == "number" ? fn(value) : value;
  }
  function translate(x, opt_y) {
    return opt_y === void 0 || opt_y === null ? "translate(" + units(x, px) + ")" : "translate(" + units(x, px) + ", " + units(opt_y, px) + ")";
  }
  function scale(value) {
    return "scale(" + value + ")";
  }
  function isVar(property) {
    return property.startsWith("--");
  }
  function assertNotDisplay(style) {
    if (style === "display") {
      devError("STYLE", DISPLAY_STYLE_MESSAGE);
    }
    return style;
  }

  // src/core/dom/transition.js
  function concat(transitions, opt_delimiter) {
    if (opt_delimiter === void 0) {
      opt_delimiter = " ";
    }
    return function(time, complete) {
      return transitions.map(function(tr2) {
        return tr2(time, complete);
      }).filter(isString).join(opt_delimiter);
    };
  }
  function setStyles2(element, styles) {
    return function(time, complete) {
      for (var k in styles) {
        setStyle(element, assertNotDisplay(k), styles[k](time, complete));
      }
    };
  }
  function numeric(start, end) {
    return function(time) {
      return start + (end - start) * time;
    };
  }
  function translate2(transitionX, opt_transitionY) {
    return function(time) {
      return translate(transitionX(time), opt_transitionY == null ? void 0 : opt_transitionY(time));
    };
  }
  function scale2(transition) {
    return function(time) {
      return scale(transition(time));
    };
  }

  // src/core/math.js
  function clamp(val, min, max) {
    devAssert(min <= max, "Minimum value is greater than the maximum.");
    return Math.min(Math.max(val, min), max);
  }
  function boundValue(val, min, max, extent) {
    devAssert(min <= max, "Lower bound is greater than the upper bound.");
    return clamp(val, min - extent, max + extent);
  }
  function magnitude(deltaX, deltaY) {
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  }
  function distance(x1, y1, x2, y2) {
    return magnitude(x2 - x1, y2 - y1);
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

  // src/core/dom/event-helper-listen.js
  var passiveSupported;
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
  function isLoaded(eleOrWindow) {
    return !!(eleOrWindow.complete || eleOrWindow.readyState == "complete" || isHTMLMediaElement(eleOrWindow) && eleOrWindow.readyState > 0 || eleOrWindow.document && eleOrWindow.document.readyState == "complete");
  }
  function isHTMLMediaElement(eleOrWindow) {
    return eleOrWindow.tagName === "AUDIO" || eleOrWindow.tagName === "VIDEO";
  }

  // build/amp-image-lightbox-0.1.css.js
  var CSS2 = "amp-image-lightbox{position:fixed!important;top:0!important;left:0!important;bottom:0!important;right:0!important;margin:0!important;padding:0!important;overflow:hidden!important;transform:translateZ(0)!important;-ms-touch-action:none!important;touch-action:none!important;z-index:1000;background:rgba(0,0,0,0.95);color:#f2f2f2}.i-amphtml-image-lightbox-container{position:absolute;z-index:0;top:0;left:0;right:0;bottom:0;overflow:hidden;transform:translateZ(0)}.i-amphtml-image-lightbox-trans{pointer-events:none!important;position:fixed;z-index:1001;top:0;left:0;bottom:0;right:0}.i-amphtml-image-lightbox-caption{position:absolute!important;z-index:2;bottom:0!important;left:0!important;right:0!important}.i-amphtml-image-lightbox-caption.i-amphtml-empty,.i-amphtml-image-lightbox-view-mode .i-amphtml-image-lightbox-caption{visibility:hidden}.amp-image-lightbox-caption{background:rgba(0,0,0,0.5);max-height:25%;padding:8px}.i-amphtml-image-lightbox-viewer{position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;overflow:hidden;transform:translateZ(0)}.i-amphtml-image-lightbox-viewer-image{position:absolute;z-index:1;display:block;transform-origin:50% 50%}\n/*# sourceURL=/extensions/amp-image-lightbox/0.1/amp-image-lightbox.css*/";

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
  var NOOP_CALLBACK_ = function NOOP_CALLBACK_2() {
  };
  var MIN_VELOCITY_ = 0.02;
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
  function continueMotion(contextNode, startX, startY, veloX, veloY, callback, opt_vsync) {
    return new Motion(contextNode, startX, startY, veloX, veloY, callback, opt_vsync).start();
  }
  var Motion = /* @__PURE__ */ function() {
    function Motion2(contextNode, startX, startY, veloX, veloY, callback, opt_vsync) {
      this.vsync_ = opt_vsync || Services.vsyncFor(self);
      this.contextNode_ = contextNode;
      this.callback_ = callback;
      this.lastX_ = startX;
      this.lastY_ = startY;
      this.maxVelocityX_ = veloX;
      this.maxVelocityY_ = veloY;
      this.velocityX_ = 0;
      this.velocityY_ = 0;
      var deferred = new Deferred();
      this.promise_ = deferred.promise;
      this.resolve_ = deferred.resolve;
      this.reject_ = deferred.reject;
      this.continuing_ = false;
    }
    var _proto = Motion2.prototype;
    _proto.start = function start() {
      this.continuing_ = true;
      if (Math.abs(this.maxVelocityX_) <= MIN_VELOCITY_ && Math.abs(this.maxVelocityY_) <= MIN_VELOCITY_) {
        this.fireMove_();
        this.completeContinue_(true);
      } else {
        this.runContinuing_();
      }
      return this;
    };
    _proto.halt = function halt() {
      if (this.continuing_) {
        this.completeContinue_(false);
      }
    };
    _proto.then = function then(opt_resolve, opt_reject) {
      if (!opt_resolve && !opt_reject) {
        return this.promise_;
      }
      return this.promise_.then(opt_resolve, opt_reject);
    };
    _proto.thenAlways = function thenAlways(opt_callback) {
      var callback = opt_callback || NOOP_CALLBACK_;
      return this.then(callback, callback);
    };
    _proto.runContinuing_ = function runContinuing_() {
      this.velocityX_ = this.maxVelocityX_;
      this.velocityY_ = this.maxVelocityY_;
      var boundStep = this.stepContinue_.bind(this);
      var boundComplete = this.completeContinue_.bind(this, true);
      return this.vsync_.runAnimMutateSeries(this.contextNode_, boundStep, 5e3).then(boundComplete, boundComplete);
    };
    _proto.stepContinue_ = function stepContinue_(timeSinceStart, timeSincePrev) {
      if (!this.continuing_) {
        return false;
      }
      this.lastX_ += timeSincePrev * this.velocityX_;
      this.lastY_ += timeSincePrev * this.velocityY_;
      if (!this.fireMove_()) {
        return false;
      }
      var decel = Math.exp(-timeSinceStart / EXP_FRAME_CONST_);
      this.velocityX_ = this.maxVelocityX_ * decel;
      this.velocityY_ = this.maxVelocityY_ * decel;
      return Math.abs(this.velocityX_) > MIN_VELOCITY_ || Math.abs(this.velocityY_) > MIN_VELOCITY_;
    };
    _proto.completeContinue_ = function completeContinue_(success) {
      if (!this.continuing_) {
        return;
      }
      this.continuing_ = false;
      this.fireMove_();
      if (success) {
        this.resolve_();
      } else {
        this.reject_();
      }
    };
    _proto.fireMove_ = function fireMove_() {
      return this.callback_(this.lastX_, this.lastY_);
    };
    return Motion2;
  }();

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
  var DOUBLETAP_DELAY = 200;
  var TapRecognizer = /* @__PURE__ */ function(_GestureRecognizer) {
    _inherits(TapRecognizer2, _GestureRecognizer);
    var _super = _createSuper(TapRecognizer2);
    function TapRecognizer2(manager) {
      var _this;
      _this = _super.call(this, "tap", manager);
      _this.startX_ = 0;
      _this.startY_ = 0;
      _this.lastX_ = 0;
      _this.lastY_ = 0;
      _this.target_ = null;
      return _this;
    }
    var _proto = TapRecognizer2.prototype;
    _proto.onTouchStart = function onTouchStart(e) {
      var touches = e.touches;
      this.target_ = e.target;
      if (touches && touches.length == 1) {
        this.startX_ = touches[0].clientX;
        this.startY_ = touches[0].clientY;
        return true;
      } else {
        return false;
      }
    };
    _proto.onTouchMove = function onTouchMove(e) {
      var touches = e.changedTouches || e.touches;
      if (touches && touches.length == 1) {
        this.lastX_ = touches[0].clientX;
        this.lastY_ = touches[0].clientY;
        var dx = Math.abs(this.lastX_ - this.startX_) >= 8;
        var dy = Math.abs(this.lastY_ - this.startY_) >= 8;
        if (dx || dy) {
          return false;
        }
      }
      return true;
    };
    _proto.onTouchEnd = function onTouchEnd(unusedE) {
      this.signalReady(0);
    };
    _proto.acceptStart = function acceptStart() {
      this.signalEmit({
        clientX: this.lastX_,
        clientY: this.lastY_,
        target: this.target_
      }, null);
      this.signalEnd();
    };
    return TapRecognizer2;
  }(GestureRecognizer);
  var DoubletapRecognizer = /* @__PURE__ */ function(_GestureRecognizer2) {
    _inherits(DoubletapRecognizer2, _GestureRecognizer2);
    var _super2 = _createSuper(DoubletapRecognizer2);
    function DoubletapRecognizer2(manager) {
      var _this2;
      _this2 = _super2.call(this, "doubletap", manager);
      _this2.startX_ = 0;
      _this2.startY_ = 0;
      _this2.lastX_ = 0;
      _this2.lastY_ = 0;
      _this2.tapCount_ = 0;
      _this2.event_ = null;
      return _this2;
    }
    var _proto2 = DoubletapRecognizer2.prototype;
    _proto2.onTouchStart = function onTouchStart(e) {
      if (this.tapCount_ > 1) {
        return false;
      }
      var touches = e.touches;
      if (touches && touches.length == 1) {
        this.startX_ = touches[0].clientX;
        this.startY_ = touches[0].clientY;
        this.lastX_ = touches[0].clientX;
        this.lastY_ = touches[0].clientY;
        return true;
      } else {
        return false;
      }
    };
    _proto2.onTouchMove = function onTouchMove(e) {
      var touches = e.touches;
      if (touches && touches.length == 1) {
        this.lastX_ = touches[0].clientX;
        this.lastY_ = touches[0].clientY;
        var dx = Math.abs(this.lastX_ - this.startX_) >= 8;
        var dy = Math.abs(this.lastY_ - this.startY_) >= 8;
        if (dx || dy) {
          this.acceptCancel();
          return false;
        }
        return true;
      } else {
        return false;
      }
    };
    _proto2.onTouchEnd = function onTouchEnd(e) {
      this.tapCount_++;
      if (this.tapCount_ < 2) {
        this.signalPending(DOUBLETAP_DELAY);
      } else {
        this.event_ = e;
        this.signalReady(0);
      }
    };
    _proto2.acceptStart = function acceptStart() {
      this.tapCount_ = 0;
      this.signalEmit({
        clientX: this.lastX_,
        clientY: this.lastY_
      }, this.event_);
      this.signalEnd();
    };
    _proto2.acceptCancel = function acceptCancel() {
      this.tapCount_ = 0;
    };
    return DoubletapRecognizer2;
  }(GestureRecognizer);
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
  var SwipeXYRecognizer = /* @__PURE__ */ function(_SwipeRecognizer) {
    _inherits(SwipeXYRecognizer2, _SwipeRecognizer);
    var _super4 = _createSuper(SwipeXYRecognizer2);
    function SwipeXYRecognizer2(manager) {
      return _super4.call(this, "swipe-xy", manager, true, true);
    }
    return SwipeXYRecognizer2;
  }(SwipeRecognizer);
  var TapzoomRecognizer = /* @__PURE__ */ function(_GestureRecognizer4) {
    _inherits(TapzoomRecognizer2, _GestureRecognizer4);
    var _super7 = _createSuper(TapzoomRecognizer2);
    function TapzoomRecognizer2(manager) {
      var _this4;
      _this4 = _super7.call(this, "tapzoom", manager);
      _this4.eventing_ = false;
      _this4.startX_ = 0;
      _this4.startY_ = 0;
      _this4.lastX_ = 0;
      _this4.lastY_ = 0;
      _this4.tapCount_ = 0;
      _this4.prevX_ = 0;
      _this4.prevY_ = 0;
      _this4.lastTime_ = 0;
      _this4.prevTime_ = 0;
      _this4.velocityX_ = 0;
      _this4.velocityY_ = 0;
      return _this4;
    }
    var _proto4 = TapzoomRecognizer2.prototype;
    _proto4.onTouchStart = function onTouchStart(e) {
      if (this.eventing_) {
        return false;
      }
      var touches = e.touches;
      if (touches && touches.length == 1) {
        this.startX_ = touches[0].clientX;
        this.startY_ = touches[0].clientY;
        return true;
      } else {
        return false;
      }
    };
    _proto4.onTouchMove = function onTouchMove(e) {
      var touches = e.touches;
      if (touches && touches.length == 1) {
        this.lastX_ = touches[0].clientX;
        this.lastY_ = touches[0].clientY;
        if (this.eventing_) {
          this.emit_(false, false, e);
        } else {
          var dx = Math.abs(this.lastX_ - this.startX_) >= 8;
          var dy = Math.abs(this.lastY_ - this.startY_) >= 8;
          if (dx || dy) {
            if (this.tapCount_ == 0) {
              this.acceptCancel();
              return false;
            } else {
              this.signalReady(0);
            }
          }
        }
        return true;
      } else {
        return false;
      }
    };
    _proto4.onTouchEnd = function onTouchEnd(e) {
      if (this.eventing_) {
        this.end_(e);
        return;
      }
      this.tapCount_++;
      if (this.tapCount_ == 1) {
        this.signalPending(400);
        return;
      }
      this.acceptCancel();
    };
    _proto4.acceptStart = function acceptStart() {
      this.tapCount_ = 0;
      this.eventing_ = true;
      this.emit_(true, false, null);
    };
    _proto4.acceptCancel = function acceptCancel() {
      this.tapCount_ = 0;
      this.eventing_ = false;
    };
    _proto4.emit_ = function emit_(first, last, event) {
      this.lastTime_ = Date.now();
      if (first) {
        this.velocityX_ = this.velocityY_ = 0;
      } else if (this.lastTime_ - this.prevTime_ > 2) {
        this.velocityX_ = calcVelocity(this.lastX_ - this.prevX_, this.lastTime_ - this.prevTime_, this.velocityX_);
        this.velocityY_ = calcVelocity(this.lastY_ - this.prevY_, this.lastTime_ - this.prevTime_, this.velocityY_);
      }
      this.prevX_ = this.lastX_;
      this.prevY_ = this.lastY_;
      this.prevTime_ = this.lastTime_;
      this.signalEmit({
        first: first,
        last: last,
        centerClientX: this.startX_,
        centerClientY: this.startY_,
        deltaX: this.lastX_ - this.startX_,
        deltaY: this.lastY_ - this.startY_,
        velocityX: this.velocityX_,
        velocityY: this.velocityY_
      }, event);
    };
    _proto4.end_ = function end_(event) {
      if (this.eventing_) {
        this.eventing_ = false;
        this.emit_(false, true, event);
        this.signalEnd();
      }
    };
    return TapzoomRecognizer2;
  }(GestureRecognizer);

  // extensions/amp-image-lightbox/0.1/amp-image-lightbox.js
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
  var TAG = "amp-image-lightbox";
  var SUPPORTED_ELEMENTS_ = new Set(["amp-img", "amp-anim", "img"]);
  var ARIA_ATTRIBUTES = ["aria-label", "aria-describedby", "aria-labelledby"];
  var ENTER_CURVE_ = bezierCurve(0.4, 0, 0.2, 1);
  var EXIT_CURVE_ = bezierCurve(0.4, 0, 0.2, 1);
  var PAN_ZOOM_CURVE_ = bezierCurve(0.4, 0, 0.2, 1.4);
  var DEFAULT_MAX_SCALE = 2;
  var ImageViewer = /* @__PURE__ */ function() {
    function ImageViewer2(lightbox, win, loadPromise) {
      this.lightbox_ = lightbox;
      this.win = win;
      this.loadPromise_ = loadPromise;
      this.viewer_ = lightbox.element.ownerDocument.createElement("div");
      this.viewer_.classList.add("i-amphtml-image-lightbox-viewer");
      this.image_ = lightbox.element.ownerDocument.createElement("img");
      this.image_.classList.add("i-amphtml-image-lightbox-viewer-image");
      this.viewer_.appendChild(this.image_);
      this.srcset_ = null;
      this.sourceWidth_ = 0;
      this.sourceHeight_ = 0;
      this.viewerBox_ = layoutRectLtwh(0, 0, 0, 0);
      this.imageBox_ = layoutRectLtwh(0, 0, 0, 0);
      this.scale_ = 1;
      this.startScale_ = 1;
      this.maxSeenScale_ = 1;
      this.minScale_ = 1;
      this.maxScale_ = DEFAULT_MAX_SCALE;
      this.startX_ = 0;
      this.startY_ = 0;
      this.posX_ = 0;
      this.posY_ = 0;
      this.minX_ = 0;
      this.minY_ = 0;
      this.maxX_ = 0;
      this.maxY_ = 0;
      this.motion_ = null;
      this.setupGestures_();
    }
    var _proto = ImageViewer2.prototype;
    _proto.getElement = function getElement() {
      return this.viewer_;
    };
    _proto.getImage = function getImage() {
      return this.image_;
    };
    _proto.getViewerBox = function getViewerBox() {
      return this.viewerBox_;
    };
    _proto.getImageBox = function getImageBox() {
      return this.imageBox_;
    };
    _proto.getImageBoxWithOffset = function getImageBoxWithOffset() {
      if (this.posX_ == 0 && this.posY_ == 0) {
        return this.imageBox_;
      }
      return moveLayoutRect(this.imageBox_, this.posX_, this.posY_);
    };
    _proto.reset = function reset() {
      var _this = this;
      this.image_.setAttribute("src", "");
      ARIA_ATTRIBUTES.forEach(function(key) {
        _this.image_.removeAttribute(key);
      });
      this.image_.removeAttribute("aria-describedby");
      this.srcset_ = null;
      this.imageBox_ = layoutRectLtwh(0, 0, 0, 0);
      this.sourceWidth_ = 0;
      this.sourceHeight_ = 0;
      this.maxSeenScale_ = 1;
      this.scale_ = 1;
      this.startScale_ = 1;
      this.maxScale_ = 2;
      this.startX_ = 0;
      this.startY_ = 0;
      this.posX_ = 0;
      this.posY_ = 0;
      this.minX_ = 0;
      this.minY_ = 0;
      this.maxX_ = 0;
      this.maxY_ = 0;
      if (this.motion_) {
        this.motion_.halt();
      }
      this.motion_ = null;
    };
    _proto.setSourceDimensions_ = function setSourceDimensions_(ampImg, img) {
      if (img) {
        this.sourceWidth_ = img.naturalWidth || ampImg.offsetWidth;
        this.sourceHeight_ = img.naturalHeight || ampImg.offsetHeight;
      } else {
        this.sourceWidth_ = ampImg.offsetWidth;
        this.sourceHeight_ = ampImg.offsetHeight;
      }
    };
    _proto.init = function init(sourceElement, sourceImage) {
      var _this2 = this;
      this.setSourceDimensions_(sourceElement, sourceImage);
      this.srcset_ = srcsetFromElement(sourceElement);
      if (sourceElement.tagName.toLowerCase() === "img") {
        propagateAttributes(ARIA_ATTRIBUTES, sourceElement, this.image_);
      } else {
        sourceElement.getImpl().then(function(impl) {
          return propagateAttributes(ARIA_ATTRIBUTES, impl.element, _this2.image_);
        });
      }
      if (sourceImage && isLoaded(sourceImage) && sourceImage.src) {
        this.image_.setAttribute("src", sourceImage.src);
      }
    };
    _proto.measure = function measure() {
      this.viewerBox_ = layoutRectFromDomRect(this.viewer_.getBoundingClientRect());
      var sourceAspectRatio = this.sourceWidth_ / this.sourceHeight_;
      var height = Math.min(this.viewerBox_.width / sourceAspectRatio, this.viewerBox_.height);
      var width = Math.min(this.viewerBox_.height * sourceAspectRatio, this.viewerBox_.width);
      if (Math.abs(width - this.sourceWidth_) <= 16 && Math.abs(height - this.sourceHeight_) <= 16) {
        width = this.sourceWidth_;
        height = this.sourceHeight_;
      }
      this.imageBox_ = layoutRectLtwh(Math.round((this.viewerBox_.width - width) / 2), Math.round((this.viewerBox_.height - height) / 2), Math.round(width), Math.round(height));
      setStyles(this.image_, {
        top: px(this.imageBox_.top),
        left: px(this.imageBox_.left),
        width: px(this.imageBox_.width),
        height: px(this.imageBox_.height)
      });
      var viewerBoxRatio = this.viewerBox_.width / this.viewerBox_.height;
      var maxScale = Math.max(viewerBoxRatio / sourceAspectRatio, sourceAspectRatio / viewerBoxRatio);
      this.maxScale_ = Math.max(DEFAULT_MAX_SCALE, maxScale);
      this.startScale_ = this.scale_ = 1;
      this.startX_ = this.posX_ = 0;
      this.startY_ = this.posY_ = 0;
      this.updatePanZoomBounds_(this.scale_);
      this.updatePanZoom_();
      return this.updateSrc_();
    };
    _proto.updateSrc_ = function updateSrc_() {
      var _this3 = this;
      if (!this.srcset_) {
        return resolvedPromise();
      }
      this.maxSeenScale_ = Math.max(this.maxSeenScale_, this.scale_);
      var width = this.imageBox_.width * this.maxSeenScale_;
      var src = this.srcset_.select(width, WindowInterface.getDevicePixelRatio());
      if (src == this.image_.getAttribute("src")) {
        return resolvedPromise();
      }
      return Services.timerFor(this.win).promise(1).then(function() {
        _this3.image_.setAttribute("src", src);
        return _this3.loadPromise_(_this3.image_);
      });
    };
    _proto.setupGestures_ = function setupGestures_() {
      var _this4 = this;
      var gestures = Gestures.get(this.image_);
      gestures.onGesture(TapRecognizer, function() {
        _this4.lightbox_.toggleViewMode();
      });
      gestures.onGesture(SwipeXYRecognizer, function(e) {
        _this4.onMove_(e.data.deltaX, e.data.deltaY, false);
        if (e.data.last) {
          _this4.onMoveRelease_(e.data.velocityX, e.data.velocityY);
        }
      });
      gestures.onPointerDown(function() {
        if (_this4.motion_) {
          _this4.motion_.halt();
        }
      });
      gestures.onGesture(DoubletapRecognizer, function(e) {
        var newScale;
        if (_this4.scale_ == 1) {
          newScale = _this4.maxScale_;
        } else {
          newScale = _this4.minScale_;
        }
        var deltaX = _this4.viewerBox_.width / 2 - e.data.clientX;
        var deltaY = _this4.viewerBox_.height / 2 - e.data.clientY;
        _this4.onZoom_(newScale, deltaX, deltaY, true).then(function() {
          return _this4.onZoomRelease_(0, 0, 0, 0, 0, 0);
        });
      });
      gestures.onGesture(TapzoomRecognizer, function(e) {
        _this4.onZoomInc_(e.data.centerClientX, e.data.centerClientY, e.data.deltaX, e.data.deltaY);
        if (e.data.last) {
          _this4.onZoomRelease_(e.data.centerClientX, e.data.centerClientY, e.data.deltaX, e.data.deltaY, e.data.velocityY, e.data.velocityY);
        }
      });
    };
    _proto.boundScale_ = function boundScale_(s, allowExtent) {
      return boundValue(s, this.minScale_, this.maxScale_, allowExtent ? 0.25 : 0);
    };
    _proto.boundX_ = function boundX_(x, allowExtent) {
      return boundValue(x, this.minX_, this.maxX_, allowExtent && this.scale_ > 1 ? this.viewerBox_.width * 0.25 : 0);
    };
    _proto.boundY_ = function boundY_(y, allowExtent) {
      return boundValue(y, this.minY_, this.maxY_, allowExtent ? this.viewerBox_.height * 0.25 : 0);
    };
    _proto.updatePanZoomBounds_ = function updatePanZoomBounds_(scale3) {
      var maxY = 0;
      var minY = 0;
      var dh = this.viewerBox_.height - this.imageBox_.height * scale3;
      if (dh >= 0) {
        minY = maxY = 0;
      } else {
        minY = dh / 2;
        maxY = -minY;
      }
      var maxX = 0;
      var minX = 0;
      var dw = this.viewerBox_.width - this.imageBox_.width * scale3;
      if (dw >= 0) {
        minX = maxX = 0;
      } else {
        minX = dw / 2;
        maxX = -minX;
      }
      this.minX_ = minX;
      this.minY_ = minY;
      this.maxX_ = maxX;
      this.maxY_ = maxY;
    };
    _proto.updatePanZoom_ = function updatePanZoom_() {
      setStyles(this.image_, {
        transform: translate(this.posX_, this.posY_) + " " + scale(this.scale_)
      });
      if (this.scale_ != 1) {
        this.lightbox_.toggleViewMode(true);
      }
    };
    _proto.onMove_ = function onMove_(deltaX, deltaY, animate) {
      var newPosX = this.boundX_(this.startX_ + deltaX, true);
      var newPosY = this.boundY_(this.startY_ + deltaY, true);
      this.set_(this.scale_, newPosX, newPosY, animate);
    };
    _proto.onMoveRelease_ = function onMoveRelease_(veloX, veloY) {
      var _this5 = this;
      var deltaY = this.posY_ - this.startY_;
      if (this.scale_ == 1 && Math.abs(deltaY) > 10) {
        this.lightbox_.close();
        return;
      }
      this.motion_ = continueMotion(this.image_, this.posX_, this.posY_, veloX, veloY, function(x, y) {
        var newPosX = _this5.boundX_(x, true);
        var newPosY = _this5.boundY_(y, true);
        if (Math.abs(newPosX - _this5.posX_) < 1 && Math.abs(newPosY - _this5.posY_) < 1) {
          return false;
        }
        _this5.set_(_this5.scale_, newPosX, newPosY, false);
        return true;
      });
      this.motion_.thenAlways(function() {
        _this5.motion_ = null;
        return _this5.release_();
      });
    };
    _proto.onZoomInc_ = function onZoomInc_(centerClientX, centerClientY, deltaX, deltaY) {
      var dist = magnitude(deltaX, deltaY);
      var zoomSign = Math.abs(deltaY) > Math.abs(deltaX) ? Math.sign(deltaY) : Math.sign(-deltaX);
      if (zoomSign == 0) {
        return;
      }
      var newScale = this.startScale_ * (1 + zoomSign * dist / 100);
      var deltaCenterX = this.viewerBox_.width / 2 - centerClientX;
      var deltaCenterY = this.viewerBox_.height / 2 - centerClientY;
      deltaX = Math.min(deltaCenterX, deltaCenterX * (dist / 100));
      deltaY = Math.min(deltaCenterY, deltaCenterY * (dist / 100));
      this.onZoom_(newScale, deltaX, deltaY, false);
    };
    _proto.onZoom_ = function onZoom_(scale3, deltaX, deltaY, animate) {
      var newScale = this.boundScale_(scale3, true);
      if (newScale == this.scale_) {
        return;
      }
      this.updatePanZoomBounds_(newScale);
      var newPosX = this.boundX_(this.startX_ + deltaX * newScale, false);
      var newPosY = this.boundY_(this.startY_ + deltaY * newScale, false);
      return this.set_(newScale, newPosX, newPosY, animate);
    };
    _proto.onZoomRelease_ = function onZoomRelease_(centerClientX, centerClientY, deltaX, deltaY, veloX, veloY) {
      var _this6 = this;
      var promise;
      if (veloX == 0 && veloY == 0) {
        promise = resolvedPromise();
      } else {
        promise = continueMotion(this.image_, deltaX, deltaY, veloX, veloY, function(x, y) {
          _this6.onZoomInc_(centerClientX, centerClientY, x, y);
          return true;
        }).thenAlways();
      }
      var relayout = this.scale_ > this.startScale_;
      return promise.then(function() {
        return _this6.release_();
      }).then(function() {
        if (relayout) {
          _this6.updateSrc_();
        }
      });
    };
    _proto.set_ = function set_(newScale, newPosX, newPosY, animate) {
      var _this7 = this;
      var ds = newScale - this.scale_;
      var dist = distance(this.posX_, this.posY_, newPosX, newPosY);
      var dur = 0;
      if (animate) {
        var maxDur = 250;
        dur = Math.min(maxDur, Math.max(maxDur * dist * 0.01, maxDur * Math.abs(ds)));
      }
      var promise;
      if (dur > 16 && animate) {
        var scaleFunc = numeric(this.scale_, newScale);
        var xFunc = numeric(this.posX_, newPosX);
        var yFunc = numeric(this.posY_, newPosY);
        promise = Animation.animate(this.image_, function(time) {
          _this7.scale_ = scaleFunc(time);
          _this7.posX_ = xFunc(time);
          _this7.posY_ = yFunc(time);
          _this7.updatePanZoom_();
        }, dur, PAN_ZOOM_CURVE_).thenAlways(function() {
          _this7.scale_ = newScale;
          _this7.posX_ = newPosX;
          _this7.posY_ = newPosY;
          _this7.updatePanZoom_();
        });
      } else {
        this.scale_ = newScale;
        this.posX_ = newPosX;
        this.posY_ = newPosY;
        this.updatePanZoom_();
        if (animate) {
          promise = resolvedPromise();
        } else {
          promise = void 0;
        }
      }
      return promise;
    };
    _proto.release_ = function release_() {
      var _this8 = this;
      var newScale = this.boundScale_(this.scale_, false);
      if (newScale != this.scale_) {
        this.updatePanZoomBounds_(newScale);
      }
      var newPosX = this.boundX_(this.posX_ / this.scale_ * newScale, false);
      var newPosY = this.boundY_(this.posY_ / this.scale_ * newScale, false);
      return this.set_(newScale, newPosX, newPosY, true).then(function() {
        _this8.startScale_ = _this8.scale_;
        _this8.startX_ = _this8.posX_;
        _this8.startY_ = _this8.posY_;
      });
    };
    return ImageViewer2;
  }();
  var AmpImageLightbox = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits2(AmpImageLightbox2, _AMP$BaseElement);
    var _super = _createSuper2(AmpImageLightbox2);
    function AmpImageLightbox2(element) {
      var _this9;
      _this9 = _super.call(this, element);
      _this9.historyId_ = -1;
      _this9.active_ = false;
      _this9.entering_ = false;
      _this9.sourceElement_ = null;
      _this9.sourceImage_ = null;
      _this9.unlistenViewport_ = null;
      _this9.container_ = null;
      _this9.imageViewer_ = null;
      _this9.captionElement_ = null;
      _this9.boundCloseOnEscape_ = _this9.closeOnEscape_.bind(_assertThisInitialized2(_this9));
      _this9.registerDefaultAction(function(invocation) {
        return _this9.open_(invocation);
      }, "open");
      return _this9;
    }
    var _proto2 = AmpImageLightbox2.prototype;
    _proto2.buildCallback = function buildCallback() {
      Services.actionServiceForDoc(this.element).addToAllowlist("AMP-IMAGE-LIGHTBOX", "open", ["email"]);
    };
    _proto2.buildLightbox_ = function buildLightbox_() {
      var _this10 = this;
      if (this.container_) {
        return;
      }
      this.container_ = this.element.ownerDocument.createElement("div");
      this.container_.classList.add("i-amphtml-image-lightbox-container");
      this.element.appendChild(this.container_);
      this.imageViewer_ = new ImageViewer(this, this.win, this.loadPromise.bind(this));
      this.container_.appendChild(this.imageViewer_.getElement());
      this.captionElement_ = this.element.ownerDocument.createElement("div");
      this.captionElement_.setAttribute("id", this.element.getAttribute("id") + "-caption");
      this.captionElement_.classList.add("amp-image-lightbox-caption");
      this.captionElement_.classList.add("i-amphtml-image-lightbox-caption");
      this.container_.appendChild(this.captionElement_);
      var screenReaderCloseButton = this.element.ownerDocument.createElement("button");
      var ariaLabel = this.element.getAttribute("data-close-button-aria-label") || "Close the lightbox";
      screenReaderCloseButton.textContent = ariaLabel;
      screenReaderCloseButton.classList.add("i-amphtml-screen-reader");
      screenReaderCloseButton.tabIndex = -1;
      screenReaderCloseButton.addEventListener("click", function() {
        _this10.close();
      });
      this.element.appendChild(screenReaderCloseButton);
      var gestures = Gestures.get(this.element);
      this.element.addEventListener("click", function(e) {
        if (!_this10.entering_ && !_this10.imageViewer_.getImage().contains(e.target)) {
          _this10.close();
        }
      });
      gestures.onGesture(TapRecognizer, function() {
        if (!_this10.entering_) {
          _this10.close();
        }
      });
      gestures.onGesture(SwipeXYRecognizer, function() {
      });
    };
    _proto2.open_ = function open_(invocation) {
      var _this11 = this;
      if (this.active_) {
        return;
      }
      this.buildLightbox_();
      var source = invocation.caller;
      var tagName = source.tagName.toLowerCase();
      userAssert2(source && SUPPORTED_ELEMENTS_.has(tagName), "Unsupported element: %s", source.tagName);
      this.active_ = true;
      this.reset_();
      this.init_(source);
      this.win.document.documentElement.addEventListener("keydown", this.boundCloseOnEscape_);
      this.getViewport().enterLightboxMode();
      this.enter_();
      this.unlistenViewport_ = this.getViewport().onChanged(function() {
        if (_this11.active_) {
          if (Services.platformFor(_this11.win).getIosVersionString().startsWith("10.3")) {
            Services.timerFor(_this11.win).delay(function() {
              _this11.imageViewer_.measure();
            }, 500);
          } else {
            _this11.imageViewer_.measure();
          }
        }
      });
      this.getHistory_().push(this.close.bind(this)).then(function(historyId) {
        _this11.historyId_ = historyId;
      });
    };
    _proto2.closeOnEscape_ = function closeOnEscape_(event) {
      if (event.key == Keys_Enum.ESCAPE) {
        event.preventDefault();
        this.close();
      }
    };
    _proto2.close = function close() {
      if (!this.active_) {
        return;
      }
      this.active_ = false;
      this.entering_ = false;
      this.exit_();
      if (this.unlistenViewport_) {
        this.unlistenViewport_();
        this.unlistenViewport_ = null;
      }
      this.getViewport().leaveLightboxMode();
      if (this.historyId_ != -1) {
        this.getHistory_().pop(this.historyId_);
      }
      this.win.document.documentElement.removeEventListener("keydown", this.boundCloseOnEscape_);
      if (this.sourceElement_) {
        tryFocus(this.sourceElement_);
      }
    };
    _proto2.toggleViewMode = function toggleViewMode(opt_on) {
      if (opt_on !== void 0) {
        this.container_.classList.toggle("i-amphtml-image-lightbox-view-mode", opt_on);
      } else {
        this.container_.classList.toggle("i-amphtml-image-lightbox-view-mode");
      }
    };
    _proto2.init_ = function init_(sourceElement) {
      this.sourceElement_ = sourceElement;
      this.sourceImage_ = childElementByTag(sourceElement, "img");
      this.imageViewer_.init(this.sourceElement_, this.sourceImage_);
      var caption = null;
      var figure = closestAncestorElementBySelector(sourceElement, "figure");
      if (figure) {
        caption = elementByTag(figure, "figcaption");
      }
      if (!caption) {
        var describedBy = sourceElement.getAttribute("aria-describedby");
        caption = this.element.ownerDocument.getElementById(describedBy);
      }
      if (caption) {
        copyChildren(caption, dev().assertElement(this.captionElement_));
        this.imageViewer_.getImage().setAttribute("aria-describedby", this.captionElement_.getAttribute("id"));
      }
      this.captionElement_.classList.toggle("i-amphtml-empty", !caption);
    };
    _proto2.reset_ = function reset_() {
      this.imageViewer_.reset();
      removeChildren(dev().assertElement(this.captionElement_));
      this.sourceElement_ = null;
      this.sourceImage_ = null;
      this.toggleViewMode(false);
    };
    _proto2.enter_ = function enter_() {
      var _this12 = this;
      this.entering_ = true;
      toggle(this.element, true);
      setStyles(this.element, {
        opacity: 0
      });
      this.imageViewer_.measure();
      var anim = new Animation(this.element);
      var dur = 500;
      anim.add(0, setStyles2(this.element, {
        opacity: numeric(0, 1)
      }), 0.6, ENTER_CURVE_);
      var transLayer = null;
      if (this.sourceImage_ && isLoaded(this.sourceImage_) && this.sourceImage_.src) {
        transLayer = this.element.ownerDocument.createElement("div");
        transLayer.classList.add("i-amphtml-image-lightbox-trans");
        this.getAmpDoc().getBody().appendChild(transLayer);
        var rect = layoutRectFromDomRect(this.sourceImage_.getBoundingClientRect());
        var imageBox = this.imageViewer_.getImageBox();
        var clone = this.sourceImage_.cloneNode(true);
        clone.className = "";
        setStyles(clone, {
          position: "absolute",
          top: px(rect.top),
          left: px(rect.left),
          width: px(rect.width),
          height: px(rect.height),
          transformOrigin: "top left",
          willChange: "transform"
        });
        transLayer.appendChild(clone);
        this.sourceImage_.classList.add("i-amphtml-ghost");
        var dx = imageBox.left - rect.left;
        var dy = imageBox.top - rect.top;
        var scaleX = rect.width != 0 ? imageBox.width / rect.width : 1;
        var motionTime = clamp(Math.abs(dy) / 250 * 0.8, 0.2, 0.8);
        anim.add(0, setStyles2(clone, {
          transform: concat([translate2(numeric(0, dx), numeric(0, dy)), scale2(numeric(1, scaleX))])
        }), motionTime, ENTER_CURVE_);
        setStyles(dev().assertElement(this.container_), {
          opacity: 0
        });
        anim.add(0.8, setStyles2(dev().assertElement(this.container_), {
          opacity: numeric(0, 1)
        }), 0.1, ENTER_CURVE_);
        anim.add(0.9, setStyles2(transLayer, {
          opacity: numeric(1, 0.01)
        }), 0.1, EXIT_CURVE_);
      }
      return anim.start(dur).thenAlways(function() {
        _this12.entering_ = false;
        setStyles(_this12.element, {
          opacity: ""
        });
        setStyles(dev().assertElement(_this12.container_), {
          opacity: ""
        });
        if (transLayer) {
          _this12.getAmpDoc().getBody().removeChild(transLayer);
        }
      });
    };
    _proto2.exit_ = function exit_() {
      var _this13 = this;
      var image = this.imageViewer_.getImage();
      var imageBox = this.imageViewer_.getImageBoxWithOffset();
      var anim = new Animation(this.element);
      var dur = 500;
      anim.add(0, setStyles2(this.element, {
        opacity: numeric(1, 0)
      }), 0.9, EXIT_CURVE_);
      var transLayer = null;
      if (isLoaded(image) && image.src && this.sourceImage_) {
        transLayer = this.element.ownerDocument.createElement("div");
        transLayer.classList.add("i-amphtml-image-lightbox-trans");
        this.getAmpDoc().getBody().appendChild(transLayer);
        var rect = layoutRectFromDomRect(this.sourceImage_.getBoundingClientRect());
        var clone = image.cloneNode(true);
        setStyles(clone, {
          position: "absolute",
          top: px(imageBox.top),
          left: px(imageBox.left),
          width: px(imageBox.width),
          height: px(imageBox.height),
          transform: "",
          transformOrigin: "top left",
          willChange: "transform"
        });
        transLayer.appendChild(clone);
        anim.add(0, setStyles2(dev().assertElement(this.container_), {
          opacity: numeric(1, 0)
        }), 0.1, EXIT_CURVE_);
        var dx = rect.left - imageBox.left;
        var dy = rect.top - imageBox.top;
        var scaleX = imageBox.width != 0 ? rect.width / imageBox.width : 1;
        var moveAndScale = setStyles2(clone, {
          transform: concat([translate2(numeric(0, dx), numeric(0, dy)), scale2(numeric(1, scaleX))])
        });
        var motionTime = clamp(Math.abs(dy) / 250 * 0.8, 0.2, 0.8);
        anim.add(Math.min(0.8 - motionTime, 0.2), function(time, complete) {
          moveAndScale(time);
          if (complete) {
            _this13.sourceImage_.classList.remove("i-amphtml-ghost");
          }
        }, motionTime, EXIT_CURVE_);
        anim.add(0.8, setStyles2(transLayer, {
          opacity: numeric(1, 0.01)
        }), 0.2, EXIT_CURVE_);
        dur = clamp(Math.abs(dy) / 250 * dur, 300, dur);
      }
      return anim.start(dur).thenAlways(function() {
        if (_this13.sourceImage_) {
          _this13.sourceImage_.classList.remove("i-amphtml-ghost");
        }
        _this13.collapse();
        setStyles(_this13.element, {
          opacity: ""
        });
        setStyles(dev().assertElement(_this13.container_), {
          opacity: ""
        });
        if (transLayer) {
          _this13.getAmpDoc().getBody().removeChild(transLayer);
        }
        _this13.reset_();
      });
    };
    _proto2.getHistory_ = function getHistory_() {
      return Services.historyForDoc(this.getAmpDoc());
    };
    return AmpImageLightbox2;
  }(AMP.BaseElement);
  AMP.registerElement(TAG, AmpImageLightbox, CSS2);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-image-lightbox-0.1.max.js.map
