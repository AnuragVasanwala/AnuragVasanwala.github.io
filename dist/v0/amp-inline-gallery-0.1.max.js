(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-inline-gallery",ev:"0.1",l:true,f:(function(AMP,_){
(function() {
  // build/amp-inline-gallery-0.1.css.js
  var CSS2 = "amp-inline-gallery{--i-amphtml-caption-height:0px}amp-inline-gallery>amp-base-carousel{padding-bottom:var(--i-amphtml-caption-height)}amp-inline-gallery .i-amphtml-base-carousel-arrow-next-slot,amp-inline-gallery .i-amphtml-base-carousel-arrow-prev-slot{margin-bottom:var(--i-amphtml-caption-height)}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery.css*/";

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

  // extensions/amp-inline-gallery/0.1/inline-gallery-events.js
  var InlineGalleryEvents = {
    GO_TO_SLIDE: "amp-inline-gallery:go-to-slide"
  };

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
  function getDetail(event) {
    return event.detail;
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

  // extensions/amp-inline-gallery/0.1/amp-inline-gallery-pagination.js
  var _templateObject;
  var _templateObject2;
  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
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
  var MAX_DOT_COUNT = 8;
  function exponentialFalloff(percentage, power) {
    devAssert2(percentage >= 0);
    devAssert2(percentage <= 1);
    devAssert2(power >= 1);
    return Math.max(0, 1 - 1 / Math.pow(percentage, -1 / power));
  }
  var AmpInlineGalleryPagination = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpInlineGalleryPagination2, _AMP$BaseElement);
    var _super = _createSuper(AmpInlineGalleryPagination2);
    AmpInlineGalleryPagination2.prerenderAllowed = function prerenderAllowed() {
      return true;
    };
    function AmpInlineGalleryPagination2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.total_ = 0;
      _this.useDots_ = null;
      _this.paginationDots_ = null;
      _this.paginationNumbersEl_ = null;
      _this.paginationIndexEl_ = null;
      _this.paginationTotalEl_ = null;
      return _this;
    }
    var _proto = AmpInlineGalleryPagination2.prototype;
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return layout == Layout_Enum.FIXED_HEIGHT;
    };
    _proto.buildCallback = function buildCallback() {
      this.element.appendChild(this.createDom_());
      this.paginationDots_ = this.element.querySelector(".i-amphtml-inline-gallery-pagination-dots");
      this.paginationNumbersEl_ = this.element.querySelector(".i-amphtml-inline-gallery-pagination-numbers");
      this.paginationIndexEl_ = this.element.querySelector(".i-amphtml-inline-gallery-pagination-index");
      this.paginationTotalEl_ = this.element.querySelector(".i-amphtml-inline-gallery-pagination-total");
    };
    _proto.createDom_ = function createDom_() {
      var html2 = htmlFor(this.element);
      return html2(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(['\n      <div\n        class="i-amphtml-inline-gallery-pagination-container"\n        aria-hidden="true"\n      >\n        <div class="i-amphtml-inline-gallery-pagination-dots" hidden>\n          <div class="i-amphtml-inline-gallery-pagination-frosting"></div>\n          <div class="i-amphtml-inline-gallery-pagination-backdrop"></div>\n          <div class="i-amphtml-inline-gallery-pagination-background"></div>\n        </div>\n        <div class="i-amphtml-inline-gallery-pagination-numbers" hidden>\n          <div class="i-amphtml-inline-gallery-pagination-frosting"></div>\n          <div class="i-amphtml-inline-gallery-pagination-backdrop"></div>\n          <div class="i-amphtml-inline-gallery-pagination-background"></div>\n          <div class="i-amphtml-inline-gallery-pagination-count">\n            <span class="i-amphtml-inline-gallery-pagination-index"></span>\n            <span> / </span>\n            <span class="i-amphtml-inline-gallery-pagination-total"></span>\n          </div>\n        </div>\n      </div>\n    '])));
    };
    _proto.createPaginationDot_ = function createPaginationDot_(index) {
      var _this2 = this;
      var html2 = htmlFor(this.element);
      var content = html2(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(['\n      <div class="i-amphtml-inline-gallery-pagination-dot-container">\n        <div class="i-amphtml-inline-gallery-pagination-dot">\n          <div class="i-amphtml-inline-gallery-pagination-dot-progress"></div>\n        </div>\n      </div>\n    '])));
      content.onclick = function() {
        var event = createCustomEvent(_this2.win, InlineGalleryEvents.GO_TO_SLIDE, dict({
          "index": index
        }), {
          bubbles: true
        });
        _this2.element.dispatchEvent(event);
      };
      return content;
    };
    _proto.updateTotal_ = function updateTotal_(total, force) {
      if (force === void 0) {
        force = false;
      }
      if (total == this.total_ && !force) {
        return;
      }
      var useDots = total <= MAX_DOT_COUNT;
      var dotCount = useDots ? total : 0;
      if (total === this.total_ && useDots === this.useDots_) {
        return;
      }
      this.total_ = total;
      this.useDots_ = useDots;
      this.paginationDots_.hidden = !useDots;
      this.paginationNumbersEl_.hidden = useDots;
      this.paginationTotalEl_.textContent = total;
      this.createDots_(dotCount);
    };
    _proto.getDots_ = function getDots_() {
      return toArray(scopedQuerySelectorAll(devAssert2(this.paginationDots_), "> .i-amphtml-inline-gallery-pagination-dot-container"));
    };
    _proto.createDots_ = function createDots_(dotCount) {
      var dots = this.getDots_();
      for (var i = dotCount; i < dots.length; i++) {
        this.paginationDots_.removeChild(dots[i]);
      }
      for (var _i = dots.length; _i < dotCount; _i++) {
        this.paginationDots_.appendChild(this.createPaginationDot_(_i));
      }
    };
    _proto.updateDots_ = function updateDots_(index, offset) {
      this.getDots_().forEach(function(dot, i) {
        var distance = i - (index + offset);
        var percentage = Math.max(1 - Math.abs(distance), 0);
        var percentageFalloff = exponentialFalloff(percentage, 2);
        setImportantStyles(dot, {
          "--percentage-falloff": percentageFalloff
        });
        if (offset == 0) {
          dot.setAttribute("i-amphtml-inline-gallery-pagination-dot-active", i === index);
        }
      });
    };
    _proto.updateNumbers_ = function updateNumbers_(index) {
      this.paginationIndexEl_.textContent = index + 1;
    };
    _proto.updateProgress = function updateProgress(total, index, offset, unusedSlides) {
      var _this3 = this;
      this.mutateElement(function() {
        _this3.updateTotal_(total);
        _this3.updateDots_(index, offset);
        _this3.updateNumbers_(index);
      });
    };
    return AmpInlineGalleryPagination2;
  }(AMP.BaseElement);

  // src/core/types/object/json.js
  function parseJson(json) {
    return JSON.parse(json);
  }

  // src/core/data-structures/promise.js
  var Deferred = function Deferred2() {
    var _this = this;
    this.promise = new Promise(function(res, rej) {
      _this.resolve = res;
      _this.reject = rej;
    });
  };

  // src/core/window/index.js
  function toWin(winOrNull) {
    return winOrNull;
  }
  function getWin(node) {
    return toWin((node.ownerDocument || node).defaultView);
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

  // extensions/amp-inline-gallery/0.1/amp-inline-gallery-captions.js
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
  var AmpInlineGalleryCaptions = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits2(AmpInlineGalleryCaptions2, _AMP$BaseElement);
    var _super = _createSuper2(AmpInlineGalleryCaptions2);
    function AmpInlineGalleryCaptions2(element) {
      return _super.call(this, element);
    }
    var _proto = AmpInlineGalleryCaptions2.prototype;
    _proto.isRelayoutNeeded = function isRelayoutNeeded() {
      return true;
    };
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      userAssert2(isExperimentOn(this.win, "amp-inline-gallery-captions") || 'expected "amp-inline-gallery-captions" experiment to be enabled');
      return isLayoutSizeDefined(layout);
    };
    _proto.layoutCallback = function layoutCallback() {
      var _this$getLayoutBox = this.getLayoutBox(), height = _this$getLayoutBox.height;
      var parentGallery = closestAncestorElementBySelector(this.element, "amp-inline-gallery");
      setImportantStyles(parentGallery, {
        "--i-amphtml-caption-height": height + "px"
      });
    };
    _proto.updateProgress = function updateProgress(unusedTotal, index, offset, slides) {
      var _this = this;
      this.mutateElement(function() {
        _this.updateCaptionOpacities_(slides, index, offset);
      });
    };
    _proto.updateCaptionOpacities_ = function updateCaptionOpacities_(slides, index, offset) {
      slides.forEach(function(slide, i) {
        var indexDistance = Math.abs(index + offset - i);
        var falloffDistance = Math.min(2 * indexDistance, 1);
        var opacity = exponentialFalloff(falloffDistance, 3);
        setImportantStyles(slide, {
          "--caption-opacity": opacity,
          "pointer-events": opacity == 0 ? "none" : "all"
        });
      });
    };
    return AmpInlineGalleryCaptions2;
  }(AMP.BaseElement);

  // build/amp-inline-gallery-captions-0.1.css.js
  var CSS3 = "amp-inline-gallery-captions{pointer-events:none;padding-top:var(--caption-margin-top);margin-top:calc(var(--i-amphtml-caption-height, 0)*-1)}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery-captions.css*/";

  // build/amp-inline-gallery-pagination-0.1.css.js
  var CSS4 = "amp-inline-gallery-pagination{font-size:12px;font-family:sans-serif;line-height:1}.i-amphtml-inline-gallery-pagination-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}.i-amphtml-inline-gallery-pagination-dots{-ms-flex-item-align:center;align-self:center;z-index:0;-ms-flex-align:center;align-items:center;height:100%;max-width:60%}.i-amphtml-inline-gallery-pagination-dot-container,.i-amphtml-inline-gallery-pagination-dots{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.i-amphtml-inline-gallery-pagination-dot-container{z-index:1;width:16px;min-width:14px}.i-amphtml-inline-gallery-pagination-dot{position:relative;background-color:rgba(0,0,0,0.2)}.i-amphtml-inline-gallery-pagination-dot-progress{position:absolute;top:0;background-color:rgba(0,0,0,0.6);opacity:0;opacity:calc(1 - var(--percentage-falloff))}[i-amphtml-inline-gallery-pagination-dot-active=true] .i-amphtml-inline-gallery-pagination-dot-progress{opacity:1;opacity:calc(1 - var(--percentage-falloff))}.i-amphtml-inline-gallery-pagination-dot,.i-amphtml-inline-gallery-pagination-dot-progress{width:8px;height:8px;border-radius:50%}.i-amphtml-inline-gallery-pagination-numbers{position:relative;-ms-flex-item-align:end;align-self:flex-end;z-index:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:100%;padding:0 8px}.i-amphtml-inline-gallery-pagination-count{z-index:1}.i-amphtml-inline-gallery-pagination-dots[hidden],.i-amphtml-inline-gallery-pagination-numbers[hidden]{display:none}amp-inline-gallery-pagination[inset]:not(.i-amphtml-hidden-by-media-query){position:absolute!important;left:0;right:0;bottom:0;bottom:var(--i-amphtml-caption-height,0);display:-ms-flexbox!important;display:flex!important}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-container{margin:18px;height:20px}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-backdrop,amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-background,amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-frosting{position:absolute;top:0;bottom:0;left:0;right:0;border-radius:12px}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-frosting{-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-backdrop{-webkit-backdrop-filter:blur(12px) invert(1) grayscale(0.6) brightness(0.8);backdrop-filter:blur(12px) invert(1) grayscale(0.6) brightness(0.8);opacity:0.5}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-background{background-color:rgba(0,0,0,0.3)}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-dots{padding:0 4px}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-numbers{color:#fff}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-dot{background-color:hsla(0,0%,100%,0.35)}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-dot-progress{background-color:#fff}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery-pagination.css*/";

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
  function iterateCursor(iterable, cb) {
    var length = iterable.length;
    for (var i = 0; i < length; i++) {
      cb(iterable[i], i);
    }
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

  // extensions/amp-inline-gallery/0.1/amp-inline-gallery-slide.js
  var _templateObject3;
  function _taggedTemplateLiteralLoose2(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
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
  var AmpInlineGallerySlide = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits3(AmpInlineGallerySlide2, _AMP$BaseElement);
    var _super = _createSuper3(AmpInlineGallerySlide2);
    var _proto = AmpInlineGallerySlide2.prototype;
    _proto.createDom_ = function createDom_() {
      var _this = this;
      userAssert2(isExperimentOn(this.win, "amp-inline-gallery-captions") || 'expected "amp-inline-gallery-captions" experiment to be enabled');
      var html2 = htmlFor(this.element);
      var content = html2(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose2(['\n      <figure class="i-amphtml-inline-gallery-slide-container">\n        <div class="i-amphtml-inline-gallery-slide-content-slot"></div>\n        <figcaption class="i-amphtml-inline-gallery-slide-caption">\n          <amp-truncate-text layout="fill">\n            <span class="i-amphtml-inline-gallery-slide-caption-slot"></span>\n            <button\n              class="i-amphtml-inline-gallery-slide-see-more"\n              slot="collapsed"\n            >\n              See more\n            </button>\n            <div\n              class="i-amphtml-inline-gallery-slide-persistent-slot"\n              slot="persistent"\n            ></div>\n          </amp-truncate-text>\n        </figcaption>\n      </figure>\n    '])));
      var expand = content.querySelector('[slot="collapsed"]');
      expand.addEventListener("click", function(e) {
        _this.openLightbox();
        e.stopPropagation();
      });
      return content;
    };
    function AmpInlineGallerySlide2(element) {
      return _super.call(this, element);
    }
    _proto.openLightbox = function openLightbox() {
      var _this2 = this;
      Services.extensionsFor(this.win).installExtensionForDoc(this.getAmpDoc(), "amp-lightbox-gallery").then(function() {
        var el = document.querySelector("amp-lightbox-gallery");
        return el.getImpl();
      }).then(function(impl) {
        impl.open(_this2.element, true);
      });
    };
    _proto.isLayoutSupported = function isLayoutSupported() {
      return Layout_Enum.FLEX_ITEM;
    };
    _proto.buildCallback = function buildCallback() {
      var dom2 = this.createDom_();
      var captionSlot = dom2.querySelector(".i-amphtml-inline-gallery-slide-caption-slot");
      var contentSlot = dom2.querySelector(".i-amphtml-inline-gallery-slide-content-slot");
      var attributionSlot = dom2.querySelector(".i-amphtml-inline-gallery-slide-persistent-slot");
      var childNodesArray = toArray(this.element.childNodes);
      childNodesArray.filter(function(n) {
        return n.hasAttribute && n.getAttribute("slot") === "caption";
      }).forEach(function(node) {
        return captionSlot.appendChild(node);
      });
      childNodesArray.filter(function(n) {
        return !n.hasAttribute || !n.hasAttribute("slot");
      }).forEach(function(node) {
        return contentSlot.appendChild(node);
      });
      childNodesArray.filter(function(n) {
        return n.hasAttribute && n.getAttribute("slot") === "attribution";
      }).forEach(function(node) {
        return attributionSlot.appendChild(node);
      });
      this.element.appendChild(dom2);
    };
    return AmpInlineGallerySlide2;
  }(AMP.BaseElement);

  // build/amp-inline-gallery-slide-0.1.css.js
  var CSS5 = "amp-inline-gallery-slide{position:static!important;transform:none!important;will-change:auto!important}amp-inline-gallery-slide.i-amphtml-layout-size-defined{overflow:visible!important}.i-amphtml-inline-gallery-slide-container{width:100%;height:100%;margin:0}.i-amphtml-inline-gallery-slide-content-slot{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:calc(100% - var(--i-amphtml-caption-height, 0px));transform:var(--content-transform,translateZ(1px));will-change:transform;overflow:hidden}.i-amphtml-inline-gallery-slide-caption{position:absolute;left:6px;right:6px;margin-top:var(--caption-margin-top);height:var(--i-amphtml-caption-height,0);overflow:hidden;opacity:var(--caption-opacity)}.i-amphtml-inline-gallery-slide-see-more{float:right;padding:0 0 0 6px;border:0;color:#48f;background-color:transparent;outline:none;font-family:inherit;font-size:inherit;line-height:1.25em}.i-amphtml-inline-gallery-slide-persistent-slot{clear:both}.i-amphtml-inline-gallery-slide-content-slot>*{height:100%;width:100%}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery-slide.css*/";

  // extensions/amp-base-carousel/0.1/carousel-events.js
  var CarouselEvents = {
    OFFSET_CHANGE: "amp-carousel:offsetchange",
    INDEX_CHANGE: "amp-carousel:indexchange",
    SCROLL_START: "amp-carousel:scrollstart",
    SCROLL_POSITION_CHANGED: "amp-carousel:scrollpositionchange"
  };

  // src/core/dom/propagate-attributes.js
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
  function propagateAttributes(attributes, sourceElement, updateElement, opt_removeMissingAttrs) {
    var attrs = arrayOrSingleItemToArray(attributes);
    for (var _iterator = _createForOfIteratorHelperLoose2(attrs), _step; !(_step = _iterator()).done; ) {
      var attr = _step.value;
      var val = sourceElement.getAttribute(attr);
      if (val !== null) {
        updateElement.setAttribute(attr, val);
      } else if (opt_removeMissingAttrs) {
        updateElement.removeAttribute(attr);
      }
    }
  }

  // extensions/amp-inline-gallery/0.1/amp-inline-gallery-thumbnails.js
  var _templateObject4;
  var _templateObject22;
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
  function _taggedTemplateLiteralLoose3(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
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
  var AmpInlineGalleryThumbnails = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits4(AmpInlineGalleryThumbnails2, _AMP$BaseElement);
    var _super = _createSuper4(AmpInlineGalleryThumbnails2);
    AmpInlineGalleryThumbnails2.prerenderAllowed = function prerenderAllowed() {
      return true;
    };
    function AmpInlineGalleryThumbnails2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.carousel_ = null;
      _this.thumbAspectRatio_ = null;
      return _this;
    }
    var _proto = AmpInlineGalleryThumbnails2.prototype;
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return isLayoutSizeDefined(layout);
    };
    _proto.buildCallback = function buildCallback() {
      var aspectRatioWidth = Number(this.element.getAttribute("aspect-ratio-width")) || 0;
      var aspectRatioHeight = Number(this.element.getAttribute("aspect-ratio-height")) || 0;
      if (aspectRatioWidth && aspectRatioHeight) {
        this.thumbAspectRatio_ = aspectRatioWidth / aspectRatioHeight;
      }
      this.element.addEventListener(CarouselEvents.OFFSET_CHANGE, function(event) {
        event.stopPropagation();
      });
      this.element.addEventListener(CarouselEvents.INDEX_CHANGE, function(event) {
        event.stopPropagation();
      });
    };
    _proto.setSlides = function setSlides(slides) {
      var _this2 = this;
      var thumbnails = slides.map(function(slide, index) {
        return _this2.createThumbnailForElement_(slide, index);
      });
      this.mutateElement(function() {
        _this2.createCarousel_(thumbnails);
      });
    };
    _proto.createThumbnailForElement_ = function createThumbnailForElement_(srcElement, index) {
      var _this3 = this;
      var html2 = htmlFor(this.element);
      var content = html2(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose3(['\n      <div class="i-amphtml-inline-gallery-thumbnails-container">\n        <div class="i-amphtml-inline-gallery-thumbnails-thumbnail">\n          <div class="i-amphtml-inline-gallery-thumbnails-resizer"></div>\n        </div>\n      </div>\n    '])));
      var srcAspectRatio = srcElement.offsetWidth / srcElement.offsetHeight;
      var aspectRatio = this.thumbAspectRatio_ || srcAspectRatio || 1;
      setStyle(content.querySelector(".i-amphtml-inline-gallery-thumbnails-resizer"), "padding-right", 100 * aspectRatio, "%");
      content.querySelector(".i-amphtml-inline-gallery-thumbnails-thumbnail").appendChild(this.getThumbnailContent_(srcElement));
      content.onclick = function() {
        _this3.element.dispatchEvent(createCustomEvent(_this3.win, InlineGalleryEvents.GO_TO_SLIDE, dict({
          "index": index
        }), {
          bubbles: true
        }));
        _this3.carousel_.getImpl().then(function(impl) {
          impl.goToSlide(index, {
            smoothScroll: true
          });
        });
      };
      return content;
    };
    _proto.createDefaultThumbnail_ = function createDefaultThumbnail_() {
      var div = document.createElement("div");
      div.className = "i-amphtml-inline-gallery-thumbnails-default";
      return div;
    };
    _proto.getThumbnailContent_ = function getThumbnailContent_(slide) {
      var image = matches(slide, "amp-img, img") ? slide : scopedQuerySelector(slide, "> amp-img, > img");
      if (!image) {
        return this.createDefaultThumbnail_();
      }
      var thumbImg = document.createElement("amp-img");
      thumbImg.className = "i-amphtml-inline-gallery-thumbnails-image";
      thumbImg.setAttribute("layout", "fill");
      var src = image.getAttribute("src");
      if (src) {
        thumbImg.setAttribute("src", src);
      }
      var srcset = image.getAttribute("srcset");
      if (srcset) {
        thumbImg.setAttribute("srcset", srcset);
      }
      var sizes = image.getAttribute("sizes");
      if (sizes) {
        thumbImg.setAttribute("sizes", sizes);
      }
      return thumbImg;
    };
    _proto.createCarousel_ = function createCarousel_(thumbnails) {
      if (this.carousel_) {
        this.element.removeChild(this.carousel_);
      }
      var html2 = htmlFor(this.element);
      this.carousel_ = html2(_templateObject22 || (_templateObject22 = _taggedTemplateLiteralLoose3(['\n      <amp-base-carousel\n        layout="fill"\n        loop="true"\n        mixed-length="true"\n        snap="false"\n        snap-align="center"\n        controls="(pointer: fine) always, never"\n        aria-hidden="true"\n      >\n      </amp-base-carousel>\n    '])));
      for (var _iterator = _createForOfIteratorHelperLoose3(thumbnails), _step; !(_step = _iterator()).done; ) {
        var thumbnail = _step.value;
        this.carousel_.appendChild(thumbnail);
      }
      propagateAttributes(["loop"], this.element, this.carousel_);
      this.element.appendChild(this.carousel_);
    };
    return AmpInlineGalleryThumbnails2;
  }(AMP.BaseElement);

  // build/amp-inline-gallery-thumbnails-0.1.css.js
  var CSS6 = "amp-inline-gallery-thumbnails .i-amphtml-carousel-content{padding:0;padding:0 calc(var(--thumbnail-margin, 0)/2)}.i-amphtml-inline-gallery-thumbnails-container{box-sizing:border-box;width:auto!important;height:100%;-ms-flex-preferred-size:content;flex-basis:content;padding:0;padding:var(--thumbnail-margin,0) calc(var(--thumbnail-margin, 0)/2);-ms-writing-mode:tb-lr;writing-mode:vertical-lr}.i-amphtml-inline-gallery-thumbnails-thumbnail{position:relative;width:auto;height:100%}.i-amphtml-inline-gallery-thumbnails-resizer{position:static;height:100%}.i-amphtml-inline-gallery-thumbnails-default,.i-amphtml-inline-gallery-thumbnails-image{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-inline-gallery-thumbnails-default{background-color:#999}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery-thumbnails.css*/";

  // extensions/amp-inline-gallery/0.1/amp-inline-gallery.js
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
  var CHILDREN_FOR_PROGRESS_SELECTOR = "amp-inline-gallery-pagination, amp-inline-gallery-captions";
  var THUMBNAILS_SELECTORS = "amp-inline-gallery-thumbnails";
  var CAROUSEL_SELECTOR = "> amp-base-carousel, :not(amp-inline-gallery-thumbnails) > amp-base-carousel";
  var AmpInlineGallery = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits5(AmpInlineGallery2, _AMP$BaseElement);
    var _super = _createSuper5(AmpInlineGallery2);
    AmpInlineGallery2.prerenderAllowed = function prerenderAllowed() {
      return true;
    };
    function AmpInlineGallery2(element) {
      return _super.call(this, element);
    }
    var _proto = AmpInlineGallery2.prototype;
    _proto.buildCallback = function buildCallback() {
      var _this = this;
      this.element.addEventListener(CarouselEvents.OFFSET_CHANGE, function(event) {
        _this.onOffsetChange_(event);
      });
      this.element.addEventListener(CarouselEvents.INDEX_CHANGE, function(event) {
        _this.onIndexChange_(event);
      });
      this.element.addEventListener(InlineGalleryEvents.GO_TO_SLIDE, function(event) {
        _this.onGoToSlide_(event);
      });
      Promise.all([scopedQuerySelector(this.element, CAROUSEL_SELECTOR).getImpl(), Promise.all(toArray(scopedQuerySelectorAll(this.element, THUMBNAILS_SELECTORS)).map(function(el) {
        return el.getImpl();
      }))]).then(function(data) {
        var carouselImpl = data[0];
        var thumbnailsImpls = data[1];
        var slides = carouselImpl.getSlides();
        toArray(thumbnailsImpls).forEach(function(impl) {
          return impl.setSlides(slides);
        });
      });
    };
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return layout === Layout_Enum.CONTAINER;
    };
    _proto.updateProgress_ = function updateProgress_(total, index, offset, slides) {
      iterateCursor(scopedQuerySelectorAll(this.element, CHILDREN_FOR_PROGRESS_SELECTOR), function(el) {
        el.getImpl().then(function(pagination) {
          pagination.updateProgress(total, index, offset, slides);
        });
      });
    };
    _proto.onIndexChange_ = function onIndexChange_(event) {
      var detail = getDetail(event);
      var total = detail["total"];
      var index = detail["index"];
      var slides = detail["slides"];
      this.updateProgress_(total, index, 0, slides);
    };
    _proto.onOffsetChange_ = function onOffsetChange_(event) {
      var detail = getDetail(event);
      var total = detail["total"];
      var index = detail["index"];
      var offset = detail["offset"];
      var slides = detail["slides"];
      this.updateProgress_(total, index, offset, slides);
    };
    _proto.onGoToSlide_ = function onGoToSlide_(event) {
      var detail = getDetail(event);
      var index = detail["index"];
      iterateCursor(scopedQuerySelectorAll(this.element, CAROUSEL_SELECTOR), function(el) {
        el.getImpl().then(function(carousel) {
          carousel.goToSlide(index, {
            smoothScroll: true
          });
        });
      });
    };
    return AmpInlineGallery2;
  }(AMP.BaseElement);
  AMP.registerElement("amp-inline-gallery-captions", AmpInlineGalleryCaptions, CSS3);
  AMP.registerElement("amp-inline-gallery-pagination", AmpInlineGalleryPagination, CSS4);
  AMP.registerElement("amp-inline-gallery-slide", AmpInlineGallerySlide, CSS5);
  AMP.registerElement("amp-inline-gallery-thumbnails", AmpInlineGalleryThumbnails, CSS6);
  AMP.registerElement("amp-inline-gallery", AmpInlineGallery, CSS2);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-inline-gallery-0.1.max.js.map
