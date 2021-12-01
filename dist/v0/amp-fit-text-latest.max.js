(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-fit-text",ev:"0.1",l:true,f:(function(AMP,_){
(function() {
  // build/amp-fit-text-0.1.css.js
  var CSS2 = ".i-amphtml-fit-text-content,.i-amphtml-fit-text-content.i-amphtml-fill-content{display:block;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:center;justify-content:center}.i-amphtml-fit-text-content{z-index:2!important;visibility:hidden!important}.i-amphtml-fit-text-content-wrapper{line-height:1.15em!important}.i-amphtml-fit-text-content-overflown{display:block;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.i-amphtml-fit-text-measurer{position:absolute!important;top:0!important;left:0!important;z-index:1!important;visibility:hidden!important;line-height:1.15em!important}\n/*# sourceURL=/extensions/amp-fit-text/0.1/amp-fit-text.css*/";

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
  function isFiniteNumber(value) {
    return typeof value === "number" && isFinite(value);
  }

  // src/core/error/message-helpers.js
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
  function getLengthNumeral(length) {
    var res = parseFloat(length);
    return isFiniteNumber(res) ? res : void 0;
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
  function px(value) {
    return value + "px";
  }
  function isVar(property) {
    return property.startsWith("--");
  }

  // src/core/types/function/index.js
  function throttle(win, callback, minInterval) {
    var locker = 0;
    var nextCallArgs = null;
    function fire(args) {
      nextCallArgs = null;
      locker = win.setTimeout(waiter, minInterval);
      callback.apply(null, args);
    }
    function waiter() {
      locker = 0;
      if (nextCallArgs) {
        fire(nextCallArgs);
      }
    }
    return function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (locker) {
        nextCallArgs = args;
      } else {
        fire(args);
      }
    };
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
  function childNodes(parent, callback) {
    var nodes = [];
    for (var child = parent.firstChild; child; child = child.nextSibling) {
      if (callback(child)) {
        nodes.push(child);
      }
    }
    return nodes;
  }
  function realChildNodes(element) {
    return childNodes(element, function(node) {
      return !isInternalOrServiceNode(node);
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
  function isServerRendered(element) {
    return element.hasAttribute("i-amphtml-ssr");
  }

  // extensions/amp-fit-text/0.1/build-dom.js
  var MEASURER_CLASS = "i-amphtml-fit-text-measurer";
  var CONTENT_CLASS = "i-amphtml-fit-text-content";
  var CONTENT_WRAPPER_CLASS = "i-amphtml-fit-text-content-wrapper";
  function buildDom(element) {
    if (isServerRendered(element)) {
      return queryDom(element);
    }
    var doc = element.ownerDocument;
    var content = doc.createElement("div");
    applyFillContent(content);
    content.classList.add(CONTENT_CLASS);
    var contentWrapper = doc.createElement("div");
    contentWrapper.classList.add(CONTENT_WRAPPER_CLASS);
    content.appendChild(contentWrapper);
    var measurer = doc.createElement("div");
    measurer.classList.add(MEASURER_CLASS);
    realChildNodes(element).forEach(function(node) {
      return contentWrapper.appendChild(node);
    });
    mirrorNode(contentWrapper, measurer);
    element.appendChild(content);
    element.appendChild(measurer);
    return {
      content: content,
      contentWrapper: contentWrapper,
      measurer: measurer
    };
  }
  function queryDom(element) {
    var content = element.querySelector("." + escapeCssSelectorIdent(CONTENT_CLASS));
    var contentWrapper = element.querySelector("." + escapeCssSelectorIdent(CONTENT_WRAPPER_CLASS));
    var measurer = element.querySelector("." + escapeCssSelectorIdent(MEASURER_CLASS));
    if (!content || !contentWrapper || !measurer) {
      throw new Error("Invalid server render");
    }
    return {
      content: content,
      contentWrapper: contentWrapper,
      measurer: measurer
    };
  }
  function mirrorNode(from, to) {
    removeChildren(to);
    copyChildren(from, to);
  }

  // extensions/amp-fit-text/0.1/amp-fit-text.js
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
  var TAG = "amp-fit-text";
  var LINE_HEIGHT_EM_ = 1.15;
  var RESIZE_THROTTLE_MS = 100;
  var AmpFitText = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpFitText2, _AMP$BaseElement);
    var _super = _createSuper(AmpFitText2);
    AmpFitText2.prerenderAllowed = function prerenderAllowed() {
      return true;
    };
    function AmpFitText2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.content_ = null;
      _this.contentWrapper_ = null;
      _this.measurer_ = null;
      _this.minFontSize_ = -1;
      _this.maxFontSize_ = -1;
      _this.resizeObserverUnlistener_ = null;
      _this.textContent_ = "";
      return _this;
    }
    var _proto = AmpFitText2.prototype;
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return isLayoutSizeDefined(layout);
    };
    _proto.buildCallback = function buildCallback() {
      var _this2 = this;
      var element = this.element;
      var _buildDom = buildDom(element), content = _buildDom.content, contentWrapper = _buildDom.contentWrapper, measurer = _buildDom.measurer;
      this.content_ = content;
      this.contentWrapper_ = contentWrapper;
      this.measurer_ = measurer;
      this.minFontSize_ = getLengthNumeral(element.getAttribute("min-font-size")) || 6;
      this.maxFontSize_ = getLengthNumeral(element.getAttribute("max-font-size")) || 72;
      Object.defineProperty(this.element, "textContent", {
        set: function set(v) {
          _this2.textContent_ = v;
          _this2.mutateElement(function() {
            _this2.contentWrapper_.textContent = v;
            _this2.updateMeasurerContent_();
            _this2.updateFontSize_();
          });
        },
        get: function get() {
          return _this2.textContent_ || _this2.contentWrapper_.textContent;
        }
      });
    };
    _proto.isRelayoutNeeded = function isRelayoutNeeded() {
      return true;
    };
    _proto.layoutCallback = function layoutCallback() {
      var _this3 = this;
      if (this.win.ResizeObserver && this.resizeObserverUnlistener_ === null) {
        var observer = new this.win.ResizeObserver(throttle(this.win, function() {
          return _this3.mutateElement(function() {
            _this3.updateMeasurerContent_();
            _this3.updateFontSize_();
          });
        }, RESIZE_THROTTLE_MS));
        observer.observe(this.content_);
        observer.observe(this.measurer_);
        this.resizeObserverUnlistener_ = function() {
          observer.disconnect();
        };
      }
      return this.mutateElement(function() {
        _this3.updateFontSize_();
        setImportantStyles(_this3.content_, {
          visibility: "visible"
        });
      });
    };
    _proto.unlayoutCallback = function unlayoutCallback() {
      if (this.resizeObserverUnlistener_ !== null) {
        this.resizeObserverUnlistener_();
        this.resizeObserverUnlistener_ = null;
      }
    };
    _proto.updateMeasurerContent_ = function updateMeasurerContent_() {
      mirrorNode(this.contentWrapper_, this.measurer_);
    };
    _proto.updateFontSize_ = function updateFontSize_() {
      var maxHeight = this.content_.offsetHeight;
      var maxWidth = this.content_.offsetWidth;
      var fontSize = calculateFontSize_(this.measurer_, maxHeight, maxWidth, this.minFontSize_, this.maxFontSize_);
      setStyle(this.contentWrapper_, "fontSize", px(fontSize));
      updateOverflow_(this.contentWrapper_, this.measurer_, maxHeight, fontSize);
    };
    return AmpFitText2;
  }(AMP.BaseElement);
  function calculateFontSize_(measurer, expectedHeight, expectedWidth, minFontSize, maxFontSize) {
    maxFontSize++;
    while (maxFontSize - minFontSize > 1) {
      var mid = Math.floor((minFontSize + maxFontSize) / 2);
      setStyle(measurer, "fontSize", px(mid));
      var height = measurer.offsetHeight;
      var width = measurer.offsetWidth;
      if (height > expectedHeight || width > expectedWidth) {
        maxFontSize = mid;
      } else {
        minFontSize = mid;
      }
    }
    return minFontSize;
  }
  function updateOverflow_(content, measurer, maxHeight, fontSize) {
    setStyle(measurer, "fontSize", px(fontSize));
    var overflown = measurer.offsetHeight > maxHeight;
    var lineHeight = fontSize * LINE_HEIGHT_EM_;
    var numberOfLines = Math.floor(maxHeight / lineHeight);
    content.classList.toggle("i-amphtml-fit-text-content-overflown", overflown);
    setStyles(content, {
      lineClamp: overflown ? numberOfLines : "",
      maxHeight: overflown ? px(lineHeight * numberOfLines) : ""
    });
  }
  AMP.registerElement(TAG, AmpFitText, CSS2);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-fit-text-0.1.max.js.map
