(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-pan-zoom",ev:"0.1",l:true,f:(function(AMP,_){
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

  // src/core/window/index.js
  function toWin(winOrNull) {
    return winOrNull;
  }
  function getWin(node) {
    return toWin((node.ownerDocument || node).defaultView);
  }

  // src/core/dom/query.js
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
  function dispatchCustomEvent(node, name, opt_data, opt_options) {
    var data = opt_data || {};
    var event = node.ownerDocument.createEvent("Event");
    event.data = data;
    var _ref = opt_options || DEFAULT_CUSTOM_EVENT_OPTIONS, bubbles = _ref.bubbles, cancelable = _ref.cancelable;
    event.initEvent(name, bubbles, cancelable);
    node.dispatchEvent(event);
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
  function computedStyle(win, el) {
    var style = win.getComputedStyle(el);
    return style || EMPTY_CSS_DECLARATION;
  }
  function isVar(property) {
    return property.startsWith("--");
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

  // src/core/dom/transition.js
  function numeric(start, end) {
    return function(time) {
      return start + (end - start) * time;
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

  // build/amp-pan-zoom-0.1.css.js
  var CSS2 = ".i-amphtml-pan-zoom{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.i-amphtml-pan-zoom-child{position:absolute}.i-amphtml-pan-zoom-scrollable{cursor:all-scroll}.amp-pan-zoom-button{position:absolute;right:12px;width:36px;height:36px;bottom:12px;background-repeat:no-repeat;background-position:50%;box-shadow:1px 1px 2px;background-color:#fff;border-radius:3px}.amp-pan-zoom-in-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg height='24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")}.amp-pan-zoom-out-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg height='24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 13H5v-2h14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")}\n/*# sourceURL=/extensions/amp-pan-zoom/0.1/amp-pan-zoom.css*/";

  // src/core/data-structures/observable.js
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
      for (var _iterator = _createForOfIteratorHelperLoose2(this.handlers_), _step; !(_step = _iterator()).done; ) {
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
  var PINCH_ACCEPT_THRESHOLD = 4;
  var PINCH_REJECT_THRESHOLD = 10;
  var PinchRecognizer = /* @__PURE__ */ function(_GestureRecognizer5) {
    _inherits(PinchRecognizer2, _GestureRecognizer5);
    var _super8 = _createSuper(PinchRecognizer2);
    function PinchRecognizer2(manager) {
      var _this5;
      _this5 = _super8.call(this, "pinch", manager);
      _this5.eventing_ = false;
      _this5.startX1_ = 0;
      _this5.startY1_ = 0;
      _this5.startX2_ = 0;
      _this5.startY2_ = 0;
      _this5.lastX1_ = 0;
      _this5.lastY1_ = 0;
      _this5.lastX2_ = 0;
      _this5.lastY2_ = 0;
      _this5.prevDeltaX_ = 0;
      _this5.prevDeltaY_ = 0;
      _this5.centerClientX_ = 0;
      _this5.centerClientY_ = 0;
      _this5.startTime_ = 0;
      _this5.lastTime_ = 0;
      _this5.prevTime_ = 0;
      _this5.velocityX_ = 0;
      _this5.velocityY_ = 0;
      return _this5;
    }
    var _proto5 = PinchRecognizer2.prototype;
    _proto5.onTouchStart = function onTouchStart(e) {
      var touches = e.touches;
      if (!touches) {
        return false;
      }
      if (touches.length == 1) {
        return true;
      }
      if (this.eventing_ && touches.length > 2) {
        return true;
      }
      if (touches.length == 2) {
        this.startTime_ = Date.now();
        this.startX1_ = touches[0].clientX;
        this.startY1_ = touches[0].clientY;
        this.startX2_ = touches[1].clientX;
        this.startY2_ = touches[1].clientY;
        return true;
      } else {
        return false;
      }
    };
    _proto5.onTouchMove = function onTouchMove(e) {
      var touches = e.touches;
      if (!touches || touches.length == 0) {
        return false;
      }
      if (touches.length == 1) {
        return true;
      }
      this.lastX1_ = touches[0].clientX;
      this.lastY1_ = touches[0].clientY;
      this.lastX2_ = touches[1].clientX;
      this.lastY2_ = touches[1].clientY;
      if (this.eventing_) {
        this.emit_(false, false, e);
        return true;
      }
      if (this.isPinchRejected_()) {
        return false;
      }
      if (this.isPinchReady_()) {
        this.signalReady(0);
      }
      return true;
    };
    _proto5.isPinchReady_ = function isPinchReady_() {
      var dx1 = this.lastX1_ - this.startX1_;
      var dy1 = this.lastY1_ - this.startY1_;
      var dx2 = this.lastX2_ - this.startX2_;
      var dy2 = this.lastY2_ - this.startY2_;
      var pinchDirectionCorrect = dx1 * dx2 <= 0 && dy1 * dy2 <= 0;
      var xPinchRecognized = Math.abs(dx1 - dx2) >= PINCH_ACCEPT_THRESHOLD;
      var yPinchRecognized = Math.abs(dy1 - dy2) >= PINCH_ACCEPT_THRESHOLD;
      return pinchDirectionCorrect && (xPinchRecognized || yPinchRecognized);
    };
    _proto5.isPinchRejected_ = function isPinchRejected_() {
      var dx1 = this.lastX1_ - this.startX1_;
      var dy1 = this.lastY1_ - this.startY1_;
      var dx2 = this.lastX2_ - this.startX2_;
      var dy2 = this.lastY2_ - this.startY2_;
      var pinchDirectionIncorrect = dx1 * dx2 > 0 || dy1 * dy2 > 0;
      var xPinchRejected = Math.abs(dx1 + dx2) >= PINCH_REJECT_THRESHOLD;
      var yPinchRejected = Math.abs(dy1 + dy2) >= PINCH_REJECT_THRESHOLD;
      return pinchDirectionIncorrect && (xPinchRejected || yPinchRejected);
    };
    _proto5.onTouchEnd = function onTouchEnd(e) {
      var touches = e.touches;
      if (touches && touches.length < 2) {
        this.end_(e);
      }
    };
    _proto5.acceptStart = function acceptStart() {
      this.eventing_ = true;
      this.prevTime_ = this.startTime_;
      this.prevDeltaX_ = 0;
      this.prevDeltaY_ = 0;
      this.centerClientX_ = (this.startX1_ + this.startX2_) * 0.5;
      this.centerClientY_ = (this.startY1_ + this.startY2_) * 0.5;
      this.emit_(true, false, null);
    };
    _proto5.acceptCancel = function acceptCancel() {
      this.eventing_ = false;
    };
    _proto5.emit_ = function emit_(first, last, event) {
      this.lastTime_ = Date.now();
      var deltaTime = this.lastTime_ - this.prevTime_;
      var deltaX = this.deltaX_();
      var deltaY = this.deltaY_();
      if (!last && deltaTime > 4 || last && deltaTime > 16) {
        this.velocityX_ = calcVelocity(deltaX - this.prevDeltaX_, deltaTime, this.velocityX_);
        this.velocityY_ = calcVelocity(deltaY - this.prevDeltaY_, deltaTime, this.velocityY_);
        this.velocityX_ = Math.abs(this.velocityX_) > 1e-4 ? this.velocityX_ : 0;
        this.velocityY_ = Math.abs(this.velocityY_) > 1e-4 ? this.velocityY_ : 0;
        this.prevDeltaX_ = deltaX;
        this.prevDeltaY_ = deltaY;
        this.prevTime_ = this.lastTime_;
      }
      var startSq = this.sqDist_(this.startX1_, this.startX2_, this.startY1_, this.startY2_);
      var lastSq = this.sqDist_(this.lastX1_, this.lastX2_, this.lastY1_, this.lastY2_);
      this.signalEmit({
        first: first,
        last: last,
        time: this.lastTime_,
        centerClientX: this.centerClientX_,
        centerClientY: this.centerClientY_,
        dir: Math.sign(lastSq - startSq),
        deltaX: deltaX * 0.5,
        deltaY: deltaY * 0.5,
        velocityX: this.velocityX_ * 0.5,
        velocityY: this.velocityY_ * 0.5
      }, event);
    };
    _proto5.end_ = function end_(event) {
      if (this.eventing_) {
        this.eventing_ = false;
        this.emit_(false, true, event);
        this.signalEnd();
      }
    };
    _proto5.sqDist_ = function sqDist_(x1, x2, y1, y2) {
      return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
    };
    _proto5.deltaX_ = function deltaX_() {
      return Math.abs(this.lastX1_ - this.startX1_ - (this.lastX2_ - this.startX2_));
    };
    _proto5.deltaY_ = function deltaY_() {
      return Math.abs(this.lastY1_ - this.startY1_ - (this.lastY2_ - this.startY2_));
    };
    return PinchRecognizer2;
  }(GestureRecognizer);

  // extensions/amp-pan-zoom/0.1/amp-pan-zoom.js
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
  var PAN_ZOOM_CURVE_ = bezierCurve(0.4, 0, 0.2, 1.4);
  var TAG = "amp-pan-zoom";
  var DEFAULT_MAX_SCALE = 3;
  var MAX_ANIMATION_DURATION = 250;
  var ELIGIBLE_TAGS = new Set(["svg", "DIV", "AMP-IMG", "AMP-LAYOUT", "AMP-SELECTOR", "IMG"]);
  var AmpPanZoom = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits2(AmpPanZoom2, _AMP$BaseElement);
    var _super = _createSuper2(AmpPanZoom2);
    function AmpPanZoom2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.content_ = null;
      _this.action_ = null;
      _this.sourceWidth_ = 0;
      _this.sourceHeight_ = 0;
      _this.elementBox_ = null;
      _this.contentBox_ = null;
      _this.unlistenOnSwipePan_ = null;
      _this.scale_ = 1;
      _this.startScale_ = 1;
      _this.minScale_ = 1;
      _this.maxScale_ = DEFAULT_MAX_SCALE;
      _this.initialX_ = 0;
      _this.initialY_ = 0;
      _this.initialScale_ = 1;
      _this.startX_ = 0;
      _this.startY_ = 0;
      _this.posX_ = 0;
      _this.posY_ = 0;
      _this.minX_ = 0;
      _this.minY_ = 0;
      _this.maxX_ = 0;
      _this.maxY_ = 0;
      _this.gestures_ = null;
      _this.motion_ = null;
      _this.resetOnResize_ = false;
      _this.zoomButton_ = null;
      _this.disableDoubleTap_ = false;
      _this.unlistenMouseDown_ = null;
      _this.unlistenMouseUp_ = null;
      _this.unlistenMouseMove_ = null;
      _this.mouseStartY_ = 0;
      _this.mouseStartX_ = 0;
      _this.onResize_ = _this.onResize_.bind(_assertThisInitialized2(_this));
      return _this;
    }
    var _proto = AmpPanZoom2.prototype;
    _proto.buildCallback = function buildCallback() {
      var _this2 = this;
      this.action_ = Services.actionServiceForDoc(this.element);
      var children = realChildElements(this.element);
      userAssert2(children.length == 1, "%s should have its target element as its one and only child", TAG);
      userAssert2(ELIGIBLE_TAGS.has(children[0].tagName), "%s is not supported by %s", children[0].tagName, TAG);
      this.element.classList.add("i-amphtml-pan-zoom");
      this.content_ = children[0];
      this.content_.classList.add("i-amphtml-pan-zoom-child");
      this.maxScale_ = this.getNumberAttributeOr_("max-scale", DEFAULT_MAX_SCALE);
      this.initialScale_ = this.getNumberAttributeOr_("initial-scale", 1);
      this.initialX_ = this.getNumberAttributeOr_("initial-x", 0);
      this.initialY_ = this.getNumberAttributeOr_("initial-y", 0);
      this.resetOnResize_ = this.element.hasAttribute("reset-on-resize");
      this.disableDoubleTap_ = this.element.hasAttribute("disable-double-tap");
      this.registerAction("transform", function(invocation) {
        var args = invocation.args;
        if (!args) {
          return;
        }
        var scale2 = args["scale"] || 1;
        var x = args["x"] || 0;
        var y = args["y"] || 0;
        return _this2.transform(x, y, scale2);
      });
    };
    _proto.transform = function transform(x, y, scale2) {
      var _this3 = this;
      this.updatePanZoomBounds_(scale2);
      var boundX = this.boundX_(x, false);
      var boundY = this.boundY_(y, false);
      return this.set_(scale2, boundX, boundY, true).then(function() {
        return _this3.onZoomRelease_();
      });
    };
    _proto.layoutCallback = function layoutCallback() {
      this.createZoomButton_();
      Services.ownersForDoc(this.element).scheduleLayout(this.element, dev().assertElement(this.content_));
      return this.resetContentDimensions_().then(this.setupEvents_());
    };
    _proto.pauseCallback = function pauseCallback() {
      this.cleanupEvents_();
    };
    _proto.resumeCallback = function resumeCallback() {
      if (this.content_) {
        Services.ownersForDoc(this.element).scheduleLayout(this.element, this.content_);
      }
      this.setupEvents_();
    };
    _proto.unlayoutCallback = function unlayoutCallback() {
      this.cleanupEvents_();
      return true;
    };
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return layout == Layout_Enum.FIXED || layout == Layout_Enum.FIXED_HEIGHT || layout == Layout_Enum.FILL || layout == Layout_Enum.RESPONSIVE;
    };
    _proto.onResize_ = function onResize_() {
      if (this.resetOnResize_) {
        this.resetContentDimensions_();
      }
    };
    _proto.createZoomButton_ = function createZoomButton_() {
      var _this4 = this;
      this.zoomButton_ = htmlFor(this.element)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["<div class='amp-pan-zoom-in-icon amp-pan-zoom-button'></div>"])));
      this.zoomButton_.addEventListener("click", function() {
        if (_this4.zoomButton_.classList.contains("amp-pan-zoom-in-icon")) {
          _this4.transform(0, 0, _this4.maxScale_);
          _this4.toggleZoomButtonOut_();
        } else {
          _this4.transform(0, 0, _this4.minScale_);
          _this4.toggleZoomButtonIn_();
        }
      });
      this.element.appendChild(this.zoomButton_);
    };
    _proto.getNumberAttributeOr_ = function getNumberAttributeOr_(attribute, defaultValue) {
      var element = this.element;
      return element.hasAttribute(attribute) ? parseInt(element.getAttribute(attribute), 10) : defaultValue;
    };
    _proto.updateContentDimensions_ = function updateContentDimensions_(aspectRatio) {
      var heightToFit = this.elementBox_.width / aspectRatio;
      var widthToFit = this.elementBox_.height * aspectRatio;
      var height = Math.min(heightToFit, this.elementBox_.height);
      var width = Math.min(widthToFit, this.elementBox_.width);
      if (Math.abs(width - this.sourceWidth_) <= 16 && Math.abs(height - this.sourceHeight_) <= 16) {
        width = this.sourceWidth_;
        height = this.sourceHeight_;
      }
      this.contentBox_ = layoutRectLtwh(0, 0, Math.round(width), Math.round(height));
    };
    _proto.updateMaxScale_ = function updateMaxScale_(sourceAspectRatio) {
      var _this$elementBox_ = this.elementBox_, height = _this$elementBox_.height, width = _this$elementBox_.width;
      var elementBoxRatio = width / height;
      var maxScale = Math.max(elementBoxRatio / sourceAspectRatio, sourceAspectRatio / elementBoxRatio);
      if (!isNaN(maxScale)) {
        this.maxScale_ = Math.max(this.maxScale_, maxScale);
      }
    };
    _proto.measure_ = function measure_() {
      this.sourceWidth_ = this.content_.scrollWidth;
      this.sourceHeight_ = this.content_.scrollHeight;
      var sourceAspectRatio = this.sourceWidth_ / this.sourceHeight_;
      this.elementBox_ = this.getViewport().getLayoutRect(this.element);
      this.updateContentDimensions_(sourceAspectRatio);
      this.updateMaxScale_(sourceAspectRatio);
      this.startScale_ = this.scale_ = this.initialScale_;
      this.startX_ = this.posX_ = this.initialX_;
      this.startY_ = this.posY_ = this.initialY_;
    };
    _proto.resetContentDimensions_ = function resetContentDimensions_() {
      var _this5 = this;
      return this.mutateElement(function() {
        return _this5.clearDimensions_();
      }).then(function() {
        return _this5.measureMutateElement(function() {
          return _this5.measure_();
        }, function() {
          return _this5.setDimensions_();
        }, dev().assertElement(_this5.content_));
      }).then(function() {
        _this5.setContentBoxOffsets_();
        _this5.updatePanZoomBounds_(_this5.scale_);
        return _this5.updatePanZoom_();
      });
    };
    _proto.setContentBoxOffsets_ = function setContentBoxOffsets_() {
      var contentBox = layoutRectFromDomRect(dev().assertElement(this.content_).getBoundingClientRect());
      this.contentBox_.top = contentBox.top - this.elementBox_.top;
      this.contentBox_.left = contentBox.left - this.elementBox_.left;
    };
    _proto.setDimensions_ = function setDimensions_() {
      setStyles(dev().assertElement(this.content_), {
        width: px(this.contentBox_.width),
        height: px(this.contentBox_.height)
      });
    };
    _proto.clearDimensions_ = function clearDimensions_() {
      setStyles(dev().assertElement(this.content_), {
        width: "",
        height: ""
      });
    };
    _proto.getOffsetX_ = function getOffsetX_(clientX) {
      var left = this.elementBox_.left;
      return clientX - (left - this.getViewport().getScrollLeft());
    };
    _proto.getOffsetY_ = function getOffsetY_(clientY) {
      var top = this.elementBox_.top;
      return clientY - (top - this.getViewport().getScrollTop());
    };
    _proto.setupEvents_ = function setupEvents_() {
      var _this6 = this;
      this.setupGestures_();
      this.unlistenMouseDown_ = listen(this.element, "mousedown", function(e) {
        return _this6.onMouseDown_(e);
      });
      observeContentSize(this.element, this.onResize_);
    };
    _proto.unlisten_ = function unlisten_(handle) {
      if (handle) {
        handle();
        handle = null;
      }
    };
    _proto.cleanupEvents_ = function cleanupEvents_() {
      this.cleanupGestures_();
      this.unlisten_(this.unlistenMouseDown_);
      this.unlisten_(this.unlistenMouseMove_);
      this.unlisten_(this.unlistenMouseUp_);
      unobserveContentSize(this.element, this.onResize_);
    };
    _proto.onMouseDown_ = function onMouseDown_(e) {
      var _this7 = this;
      if (e.button == 2) {
        return;
      }
      e.preventDefault();
      var clientX = e.clientX, clientY = e.clientY;
      this.unlisten_(this.unlistenMouseMove_);
      this.unlisten_(this.unlistenMouseUp_);
      this.mouseStartX_ = clientX;
      this.mouseStartY_ = clientY;
      this.unlistenMouseMove_ = listen(this.element, "mousemove", function(e2) {
        return _this7.onMouseMove_(e2);
      });
      this.unlistenMouseUp_ = listen(this.win, "mouseup", function(e2) {
        return _this7.onMouseUp_(e2);
      });
    };
    _proto.onMouseMove_ = function onMouseMove_(e) {
      e.preventDefault();
      var clientX = e.clientX, clientY = e.clientY;
      var deltaX = clientX - this.mouseStartX_;
      var deltaY = clientY - this.mouseStartY_;
      this.onMove_(deltaX, deltaY, false);
    };
    _proto.onMouseUp_ = function onMouseUp_(e) {
      e.preventDefault();
      this.release_();
      this.unlisten_(this.unlistenMouseMove_);
      this.unlisten_(this.unlistenMouseUp_);
    };
    _proto.cleanupGestures_ = function cleanupGestures_() {
      if (this.gestures_) {
        this.gestures_.cleanup();
        this.gestures_ = null;
      }
    };
    _proto.setupGestures_ = function setupGestures_() {
      var _this8 = this;
      if (this.gestures_) {
        return;
      }
      this.gestures_ = Gestures.get(this.element);
      this.gestures_.onPointerDown(function() {
        if (_this8.motion_) {
          _this8.motion_.halt();
        }
      });
      this.gestures_.onGesture(PinchRecognizer, function(e) {
        return _this8.handlePinch(e.data);
      });
      if (!this.disableDoubleTap_) {
        this.gestures_.onGesture(DoubletapRecognizer, function(e) {
          return _this8.handleDoubleTap(e.data);
        });
        this.gestures_.onGesture(TapRecognizer, function(e) {
          return _this8.handleTap_(e.data);
        });
      }
    };
    _proto.handleDoubleTap = function handleDoubleTap(data) {
      var _this9 = this;
      var clientX = data.clientX, clientY = data.clientY;
      return this.onDoubletapZoom_(clientX, clientY).then(function() {
        return _this9.onZoomRelease_();
      });
    };
    _proto.handlePinch = function handlePinch(data) {
      var _this10 = this;
      var centerClientX = data.centerClientX, centerClientY = data.centerClientY, deltaX = data.deltaX, deltaY = data.deltaY, dir = data.dir, last = data.last;
      return this.onPinchZoom_(centerClientX, centerClientY, deltaX, deltaY, dir).then(function() {
        if (last) {
          return _this10.onZoomRelease_();
        }
      });
    };
    _proto.handleSwipe = function handleSwipe(data) {
      var _this11 = this;
      var deltaX = data.deltaX, deltaY = data.deltaY, last = data.last, velocityX = data.velocityX, velocityY = data.velocityY;
      return this.onMove_(deltaX, deltaY, false).then(function() {
        if (last) {
          return _this11.onMoveRelease_(velocityX, velocityY);
        }
      });
    };
    _proto.handleTap_ = function handleTap_(data) {
      var event = createCustomEvent(this.win, "click", null, {
        bubbles: true
      });
      data.target.dispatchEvent(event);
    };
    _proto.registerPanningGesture_ = function registerPanningGesture_() {
      var _this12 = this;
      this.unlistenOnSwipePan_ = this.gestures_.onGesture(SwipeXYRecognizer, function(e) {
        return _this12.handleSwipe(e.data);
      });
    };
    _proto.unregisterPanningGesture_ = function unregisterPanningGesture_() {
      if (this.unlistenOnSwipePan_) {
        this.unlistenOnSwipePan_();
        this.unlistenOnSwipePan_ = null;
        this.gestures_.removeGesture(SwipeXYRecognizer);
      }
    };
    _proto.boundScale_ = function boundScale_(s, allowExtent) {
      var extent = allowExtent ? 0.25 : 0;
      return boundValue(s, this.minScale_, this.maxScale_, extent);
    };
    _proto.boundX_ = function boundX_(x, allowExtent) {
      var maxExtent = this.elementBox_.width * 0.25;
      var extent = allowExtent && this.scale_ > 1 ? maxExtent : 0;
      return boundValue(x, this.minX_, this.maxX_, extent);
    };
    _proto.boundY_ = function boundY_(y, allowExtent) {
      var maxExtent = this.elementBox_.height * 0.25;
      var extent = allowExtent && this.scale_ > 1 ? maxExtent : 0;
      return boundValue(y, this.minY_, this.maxY_, extent);
    };
    _proto.updatePanZoomBounds_ = function updatePanZoomBounds_(scale2) {
      var _this$contentBox_ = this.contentBox_, cHeight = _this$contentBox_.height, xOffset = _this$contentBox_.left, yOffset = _this$contentBox_.top, cWidth = _this$contentBox_.width;
      var _this$elementBox_2 = this.elementBox_, eHeight = _this$elementBox_2.height, eWidth = _this$elementBox_2.width;
      this.minX_ = Math.min(0, eWidth - (xOffset + cWidth * (scale2 + 1) / 2));
      this.maxX_ = Math.max(0, (cWidth * scale2 - cWidth) / 2 - xOffset);
      this.minY_ = Math.min(0, eHeight - (yOffset + cHeight * (scale2 + 1) / 2));
      this.maxY_ = Math.max(0, (cHeight * scale2 - cHeight) / 2 - yOffset);
    };
    _proto.updatePanZoom_ = function updatePanZoom_() {
      var content = this.content_, x = this.posX_, y = this.posY_, s = this.scale_;
      return this.mutateElement(function() {
        setStyles(dev().assertElement(content), {
          transform: translate(x, y) + " " + scale(s)
        });
      }, content);
    };
    _proto.triggerTransformEnd_ = function triggerTransformEnd_(scale2, x, y) {
      var event = createCustomEvent(this.win, TAG + ".transformEnd", dict({
        "scale": scale2,
        "x": x,
        "y": y
      }));
      this.action_.trigger(this.element, "transformEnd", event, ActionTrust_Enum.HIGH);
      dispatchCustomEvent(this.element, "transformEnd");
    };
    _proto.onMove_ = function onMove_(deltaX, deltaY, animate) {
      var newPosX = this.boundX_(this.startX_ + deltaX, true);
      var newPosY = this.boundY_(this.startY_ + deltaY, true);
      return this.set_(this.scale_, newPosX, newPosY, animate);
    };
    _proto.onMoveRelease_ = function onMoveRelease_(veloX, veloY) {
      var _this13 = this;
      this.motion_ = continueMotion(dev().assertElement(this.content_), this.posX_, this.posY_, veloX, veloY, function(x, y) {
        var newPosX = _this13.boundX_(x, true);
        var newPosY = _this13.boundY_(y, true);
        if (Math.abs(newPosX - _this13.posX_) < 1 && Math.abs(newPosY - _this13.posY_) < 1) {
          return false;
        }
        _this13.set_(_this13.scale_, newPosX, newPosY, false);
        return true;
      });
      return this.motion_.thenAlways(function() {
        _this13.motion_ = null;
        return _this13.release_();
      });
    };
    _proto.onDoubletapZoom_ = function onDoubletapZoom_(clientX, clientY) {
      var newScale = this.scale_ == this.minScale_ ? this.maxScale_ : this.minScale_;
      var dx = this.elementBox_.width / 2 - this.getOffsetX_(clientX);
      var dy = this.elementBox_.height / 2 - this.getOffsetY_(clientY);
      return this.onZoom_(newScale, dx, dy, true);
    };
    _proto.onPinchZoom_ = function onPinchZoom_(centerClientX, centerClientY, deltaX, deltaY, dir) {
      if (dir == 0) {
        return resolvedPromise();
      }
      var _this$elementBox_3 = this.elementBox_, height = _this$elementBox_3.height, width = _this$elementBox_3.width;
      var dist = magnitude(deltaX, deltaY);
      var newScale = this.startScale_ * (1 + dir * dist / 100);
      var deltaCenterX = width / 2 - this.getOffsetX_(centerClientX);
      var deltaCenterY = height / 2 - this.getOffsetY_(centerClientY);
      var dx = Math.min(dist / 100, 1) * deltaCenterX;
      var dy = Math.min(dist / 100, 1) * deltaCenterY;
      return this.onZoom_(newScale, dx, dy, false);
    };
    _proto.onZoom_ = function onZoom_(scale2, deltaX, deltaY, animate) {
      var newScale = this.boundScale_(scale2, true);
      if (newScale == this.scale_) {
        return resolvedPromise();
      }
      this.updatePanZoomBounds_(newScale);
      var newPosX = this.boundX_(this.startX_ + deltaX * newScale, false);
      var newPosY = this.boundY_(this.startY_ + deltaY * newScale, false);
      return this.set_(newScale, newPosX, newPosY, animate);
    };
    _proto.toggleZoomButtonIn_ = function toggleZoomButtonIn_() {
      if (this.zoomButton_) {
        this.zoomButton_.classList.add("amp-pan-zoom-in-icon");
        this.zoomButton_.classList.remove("amp-pan-zoom-out-icon");
      }
    };
    _proto.toggleZoomButtonOut_ = function toggleZoomButtonOut_() {
      if (this.zoomButton_) {
        this.zoomButton_.classList.remove("amp-pan-zoom-in-icon");
        this.zoomButton_.classList.add("amp-pan-zoom-out-icon");
      }
    };
    _proto.onZoomRelease_ = function onZoomRelease_() {
      var _this14 = this;
      return this.release_().then(function() {
        if (_this14.scale_ <= _this14.minScale_) {
          _this14.unregisterPanningGesture_();
          _this14.toggleZoomButtonIn_();
          _this14.content_.classList.remove("i-amphtml-pan-zoom-scrollable");
        } else {
          _this14.registerPanningGesture_();
          _this14.toggleZoomButtonOut_();
          _this14.content_.classList.add("i-amphtml-pan-zoom-scrollable");
        }
      });
    };
    _proto.set_ = function set_(newScale, newPosX, newPosY, animate) {
      var _this15 = this;
      var ds = newScale - this.scale_;
      var dist = distance(this.posX_, this.posY_, newPosX, newPosY);
      var dur = animate ? Math.min(1, Math.max(dist * 0.01, Math.abs(ds))) * MAX_ANIMATION_DURATION : 0;
      if (dur > 16 && animate) {
        var scaleFunc = numeric(this.scale_, newScale);
        var xFunc = numeric(this.posX_, newPosX);
        var yFunc = numeric(this.posY_, newPosY);
        return Animation.animate(dev().assertElement(this.content_), function(time) {
          _this15.scale_ = scaleFunc(time);
          _this15.posX_ = xFunc(time);
          _this15.posY_ = yFunc(time);
          _this15.updatePanZoom_();
        }, dur, PAN_ZOOM_CURVE_).thenAlways(function() {
          _this15.scale_ = newScale;
          _this15.posX_ = newPosX;
          _this15.posY_ = newPosY;
          _this15.updatePanZoom_();
        });
      } else {
        this.scale_ = newScale;
        this.posX_ = newPosX;
        this.posY_ = newPosY;
        return this.updatePanZoom_();
      }
    };
    _proto.release_ = function release_() {
      var _this16 = this;
      var newScale = this.boundScale_(this.scale_, false);
      if (newScale != this.scale_) {
        this.updatePanZoomBounds_(newScale);
      }
      var newPosX = this.boundX_(this.posX_ / this.scale_ * newScale, false);
      var newPosY = this.boundY_(this.posY_ / this.scale_ * newScale, false);
      return this.set_(newScale, newPosX, newPosY, true).then(function() {
        _this16.startScale_ = _this16.scale_;
        _this16.startX_ = _this16.posX_;
        _this16.startY_ = _this16.posY_;
        _this16.triggerTransformEnd_(_this16.scale_, _this16.posX_, _this16.posY_);
      });
    };
    return AmpPanZoom2;
  }(AMP.BaseElement);
  AMP.registerElement(TAG, AmpPanZoom, CSS2);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-pan-zoom-0.1.max.js.map
