(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-carousel",ev:"0.2",l:false,f:(function(AMP,_){
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

  // extensions/amp-base-carousel/0.1/action-source.js
  var ActionSource = {
    GENERIC_HIGH_TRUST: 0,
    GENERIC_LOW_TRUST: 1,
    WHEEL: 2,
    TOUCH: 3,
    AUTOPLAY: 4
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

  // build/amp-carousel-0.2.css.js
  var CSS2 = ".i-amphtml-carousel-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-carousel-scroll{display:-ms-flexbox;display:flex;width:100%;height:100%;-ms-flex-align:center;align-items:center;outline:none;scroll-behavior:smooth;-webkit-overflow-scrolling:touch!important;--visible-count:1}.i-amphtml-carousel-scroll[hide-scrollbar=true]{scrollbar-width:none}.i-amphtml-carousel-scroll[hide-scrollbar=true]::-webkit-scrollbar{display:none;box-sizing:content-box!important}.i-amphtml-carousel-scroll[horizontal=true]{-ms-flex-direction:row;flex-direction:row;scroll-snap-type-x:mandatory;scroll-snap-type:x mandatory;padding-bottom:20px!important;overflow-y:hidden}.i-amphtml-carousel-scroll[horizontal=false]{-ms-flex-direction:column;flex-direction:column;scroll-snap-type-y:mandatory;scroll-snap-type:y mandatory;padding-right:20px!important;overflow-x:hidden}.i-amphtml-carousel-scroll[snap=false]{scroll-snap-type:none}.i-amphtml-carousel-scroll[user-scrollable=false]{overflow:hidden}.i-amphtml-carousel-spacer{visibility:hidden;z-index:-1}.i-amphtml-carousel-slotted,.i-amphtml-carousel-spacer{box-sizing:border-box!important;margin:0!important;-ms-flex-negative:0!important;flex-shrink:0!important;width:100%;height:100%;scroll-snap-stop:always}.i-amphtml-carousel-scroll[horizontal=true][mixed-length=false]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=true][mixed-length=false]>.i-amphtml-carousel-spacer{width:calc(100%/var(--visible-count))!important;min-width:auto!important;max-width:none!important}.i-amphtml-carousel-scroll[horizontal=false][mixed-length=false]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=false][mixed-length=false]>.i-amphtml-carousel-spacer{height:calc(100%/var(--visible-count))!important;min-height:auto!important;max-height:none!important}.i-amphtml-carousel-scroll[horizontal=true][snap=true][mixed-length=true]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=true][snap=true][mixed-length=true]>.i-amphtml-carousel-spacer{max-width:100%!important}.i-amphtml-carousel-scroll[horizontal=false][snap=true][mixed-length=true]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=false][snap=true][mixed-length=true]>.i-amphtml-carousel-spacer{max-height:100%!important}.i-amphtml-carousel-scroll>.i-amphtml-carousel-slotted{will-change:transform}amp-carousel .i-amphtml-carousel-scroll[horizontal=true]{padding-bottom:0!important}amp-carousel:not([type=slides]) .i-amphtml-carousel-scroll{display:block!important;white-space:nowrap!important}amp-carousel:not([type=slides]) .i-amphtml-carousel-content{position:static}.amp-scrollable-carousel-slide{display:inline-block!important;margin-left:8px;margin-inline-start:8px;margin-inline-end:0}.amp-scrollable-carousel-slide.i-amphtml-layout-responsive{width:100%}.amp-scrollable-carousel-slide:first-child{margin-left:0px;margin-inline-start:0;margin-inline-end:0}.i-amphtml-carousel-arrows{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;pointer-events:none}.amp-carousel-button[dir=rtl]{transform:scaleX(-1)}.amp-carousel-button{position:relative;box-sizing:border-box;height:34px;width:34px;margin:16px;border-style:none;border-radius:2px;background-color:rgba(0,0,0,.5);background-position:50% 50%;background-repeat:no-repeat;z-index:10;pointer-events:all}.amp-carousel-button:focus{border:1px solid #000;outline:1px solid #fff}.amp-carousel-button.amp-disabled{animation:none;pointer-events:none;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;white-space:nowrap;width:1px}.amp-carousel-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='%23fff'%3E%3Cpath d='M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z'/%3E%3C/svg%3E\");background-size:18px 18px}.amp-carousel-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='%23fff'%3E%3Cpath d='M9 3 7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z'/%3E%3C/svg%3E\");background-size:18px 18px}.i-amphtml-carousel-slide-item{position:relative!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;-ms-flex-align:center!important;align-items:center!important}.i-amphtml-carousel-slide-item>*{width:100%;height:100%;overflow:hidden!important}.amp-carousel-slide>.i-amphtml-replaced-content{-o-object-fit:contain;object-fit:contain}\n/*# sourceURL=/extensions/amp-carousel/0.2/amp-carousel.css*/";

  // src/core/math.js
  function mod(a, b) {
    return a > 0 && b > 0 ? a % b : (a % b + b) % b;
  }
  function clamp(val, min, max) {
    devAssert(min <= max, "Minimum value is greater than the maximum.");
    return Math.min(Math.max(val, min), max);
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
  function setStyles(element, styles) {
    for (var k in styles) {
      setStyle(element, k, styles[k]);
    }
  }
  function computedStyle(win, el) {
    var style = win.getComputedStyle(el);
    return style || EMPTY_CSS_DECLARATION;
  }
  function isVar(property) {
    return property.startsWith("--");
  }

  // extensions/amp-base-carousel/0.1/dimensions.js
  var Axis = {
    X: 0,
    Y: 1
  };
  var Alignment = {
    START: "start",
    CENTER: "center"
  };
  function getDimension(axis, el) {
    var _el$getBoundingClient = el.getBoundingClientRect(), bottom = _el$getBoundingClient.bottom, height = _el$getBoundingClient.height, left = _el$getBoundingClient.left, right = _el$getBoundingClient.right, top = _el$getBoundingClient.top, width = _el$getBoundingClient.width;
    return {
      start: axis == Axis.X ? left : top,
      end: axis == Axis.X ? right : bottom,
      length: axis == Axis.X ? width : height
    };
  }
  function getCenter(axis, el) {
    var _getDimension = getDimension(axis, el), end = _getDimension.end, start = _getDimension.start;
    return (start + end) / 2;
  }
  function getStart(axis, el) {
    var _getDimension2 = getDimension(axis, el), start = _getDimension2.start;
    return start;
  }
  function getPosition(axis, alignment, el) {
    return alignment == Alignment.START ? getStart(axis, el) : getCenter(axis, el);
  }
  function updateLengthStyle(axis, el, length) {
    if (axis == Axis.X) {
      setStyle(el, "width", length + "px");
    } else {
      setStyle(el, "height", length + "px");
    }
  }
  function setTransformTranslateStyle(axis, el, delta) {
    var deltaX = axis == Axis.X ? delta : 0;
    var deltaY = axis == Axis.X ? 0 : delta;
    setStyle(el, "transform", "translate(" + deltaX + "px, " + deltaY + "px)");
    setImportantStyles(el, {
      "--content-transform": "translate(" + deltaX + "px, " + deltaY + "px)"
    });
  }
  function overlaps(axis, el, position) {
    var _getDimension3 = getDimension(axis, el), end = _getDimension3.end, start = _getDimension3.start;
    return start <= position && position < end;
  }
  function getPercentageOffsetFromAlignment(axis, alignment, container, el) {
    var elPos = getPosition(axis, alignment, el);
    var containerPos = getPosition(axis, alignment, container);
    var _getDimension4 = getDimension(axis, el), elLength = _getDimension4.length;
    return (elPos - containerPos) / elLength;
  }
  function findOverlappingIndex(axis, alignment, container, children, startIndex) {
    var pos = getPosition(axis, alignment, container);
    if (overlaps(axis, children[startIndex], pos)) {
      return startIndex;
    }
    for (var i = 1; i <= children.length / 2; i++) {
      var nextIndex = mod(startIndex + i, children.length);
      var prevIndex = mod(startIndex - i, children.length);
      if (overlaps(axis, children[nextIndex], pos)) {
        return nextIndex;
      }
      if (overlaps(axis, children[prevIndex], pos)) {
        return prevIndex;
      }
    }
  }
  function getScrollPosition(axis, el) {
    if (axis == Axis.X) {
      return el.scrollLeft;
    }
    return el.scrollTop;
  }
  function setScrollPosition(axis, el, position) {
    if (axis == Axis.X) {
      el.scrollLeft = position;
    } else {
      el.scrollTop = position;
    }
  }
  function updateScrollPosition(axis, el, delta) {
    setScrollPosition(axis, el, getScrollPosition(axis, el) + delta);
  }
  function scrollContainerToElement(axis, alignment, container, el, offset) {
    if (offset === void 0) {
      offset = 0;
    }
    var startAligned = alignment == Alignment.START;
    var _getDimension5 = getDimension(axis, el), length = _getDimension5.length;
    var snapOffset = startAligned ? getStart(axis, el) : getCenter(axis, el);
    var scrollOffset = startAligned ? getStart(axis, container) : getCenter(axis, container);
    var delta = snapOffset - scrollOffset - offset * length;
    updateScrollPosition(axis, container, delta);
  }

  // extensions/amp-base-carousel/0.1/carousel-events.js
  var CarouselEvents = {
    OFFSET_CHANGE: "amp-carousel:offsetchange",
    INDEX_CHANGE: "amp-carousel:indexchange",
    SCROLL_START: "amp-carousel:scrollstart",
    SCROLL_POSITION_CHANGED: "amp-carousel:scrollpositionchange"
  };

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
  function userAssert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
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
  function listen(element, eventType, listener, opt_evtListenerOpts) {
    return internalListenImplementation(element, eventType, listener, opt_evtListenerOpts);
  }
  function getDetail(event) {
    return event.detail;
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

  // extensions/amp-base-carousel/0.1/auto-advance.js
  var MIN_AUTO_ADVANCE_INTERVAL = 1e3;
  var AutoAdvance = /* @__PURE__ */ function() {
    function AutoAdvance2(config) {
      var _this = this;
      var advanceable = config.advanceable, element = config.element, scrollContainer = config.scrollContainer, win = config.win;
      this.win_ = win;
      this.scrollContainer_ = scrollContainer;
      this.advanceable_ = advanceable;
      this.advances_ = 0;
      this.autoAdvance_ = false;
      this.autoAdvanceCount_ = 1;
      this.autoAdvanceInterval_ = MIN_AUTO_ADVANCE_INTERVAL;
      this.paused_ = false;
      this.stopped_ = false;
      this.debouncedAdvance_ = null;
      this.maxAdvances_ = Number.POSITIVE_INFINITY;
      this.ampdoc_ = element.getAmpDoc();
      this.createDebouncedAdvance_(this.autoAdvanceInterval_);
      this.scrollContainer_.addEventListener("scroll", function() {
        return _this.handleScroll_();
      }, true);
      listen(this.scrollContainer_, "touchstart", function() {
        return _this.handleTouchStart_();
      }, {
        capture: true,
        passive: true
      });
      listen(element, CarouselEvents.INDEX_CHANGE, function(event) {
        _this.handleIndexChange_(event);
      });
    }
    var _proto = AutoAdvance2.prototype;
    _proto.stop = function stop() {
      this.stopped_ = true;
    };
    _proto.pause = function pause() {
      this.paused_ = true;
    };
    _proto.resume = function resume() {
      this.paused_ = false;
      this.resetAutoAdvance_();
    };
    _proto.updateAutoAdvance = function updateAutoAdvance(autoAdvance) {
      this.autoAdvance_ = autoAdvance;
      this.resetAutoAdvance_();
    };
    _proto.updateAutoAdvanceCount = function updateAutoAdvanceCount(autoAdvanceCount) {
      this.autoAdvanceCount_ = autoAdvanceCount;
      this.resetAutoAdvance_();
    };
    _proto.updateAutoAdvanceInterval = function updateAutoAdvanceInterval(autoAdvanceInterval) {
      this.autoAdvanceInterval_ = Math.max(autoAdvanceInterval, MIN_AUTO_ADVANCE_INTERVAL);
      this.createDebouncedAdvance_(this.autoAdvanceInterval_);
      this.resetAutoAdvance_();
    };
    _proto.updateMaxAdvances = function updateMaxAdvances(maxAdvances) {
      this.maxAdvances_ = maxAdvances;
    };
    _proto.createDebouncedAdvance_ = function createDebouncedAdvance_(interval) {
      var _this2 = this;
      var debouncedAdvance = debounce(this.win_, function() {
        if (debouncedAdvance != _this2.debouncedAdvance_) {
          return;
        }
        _this2.advance_();
      }, interval);
      this.debouncedAdvance_ = debouncedAdvance;
    };
    _proto.handleTouchStart_ = function handleTouchStart_() {
      var _this3 = this;
      this.pause();
      listenOnce(window, "touchend", function() {
        _this3.resume();
      }, {
        capture: true,
        passive: true
      });
    };
    _proto.shouldAutoAdvance_ = function shouldAutoAdvance_() {
      return this.autoAdvance_ && this.ampdoc_.isVisible() && !this.paused_ && !this.stopped_ && this.advances_ < this.maxAdvances_;
    };
    _proto.handleScroll_ = function handleScroll_() {
      this.resetAutoAdvance_();
    };
    _proto.handleIndexChange_ = function handleIndexChange_(event) {
      var detail = getDetail(event);
      var actionSource = detail["actionSource"];
      if (actionSource && actionSource !== ActionSource.AUTOPLAY) {
        this.stop();
      }
    };
    _proto.advance_ = function advance_() {
      if (!this.shouldAutoAdvance_()) {
        return;
      }
      this.advanceable_.advance(this.autoAdvanceCount_, {
        actionSource: ActionSource.AUTOPLAY,
        allowWrap: true
      });
      this.advances_ += this.autoAdvanceCount_;
    };
    _proto.resetAutoAdvance_ = function resetAutoAdvance_() {
      if (!this.shouldAutoAdvance_()) {
        return;
      }
      this.debouncedAdvance_();
    };
    return AutoAdvance2;
  }();

  // extensions/amp-base-carousel/0.1/carousel-accessibility.js
  var CarouselAccessibility = /* @__PURE__ */ function() {
    function CarouselAccessibility2(config) {
      var _this = this;
      var element = config.element, runMutate = config.runMutate, scrollContainer = config.scrollContainer, stoppable = config.stoppable, win = config.win;
      this.win_ = win;
      this.scrollContainer_ = scrollContainer;
      this.runMutate_ = runMutate;
      this.slides_ = [];
      this.visibleCount_ = 1;
      this.mixedLength_ = false;
      this.updating_ = false;
      this.index_ = 0;
      element.addEventListener("focus", function() {
        stoppable.stop();
      }, true);
      element.addEventListener(CarouselEvents.INDEX_CHANGE, function(event) {
        _this.onIndexChanged_(event);
      });
    }
    var _proto = CarouselAccessibility2.prototype;
    _proto.updateMixedLength = function updateMixedLength(mixedLength) {
      this.mixedLength_ = mixedLength;
    };
    _proto.updateUi = function updateUi() {
      var _this2 = this;
      if (this.updating_) {
        return;
      }
      this.updating_ = true;
      this.runMutate_(function() {
        _this2.updating_ = false;
        _this2.updateConfiguration_();
        _this2.updateAriaHidden_();
      });
    };
    _proto.updateSlides = function updateSlides(slides) {
      this.slides_ = slides;
      this.updateUi();
    };
    _proto.updateVisibleCount = function updateVisibleCount(visibleCount) {
      this.visibleCount_ = visibleCount;
      this.updateUi();
    };
    _proto.treatAsList_ = function treatAsList_() {
      return this.mixedLength_ || this.visibleCount_ >= 2;
    };
    _proto.updateConfiguration_ = function updateConfiguration_() {
      if (this.treatAsList_()) {
        this.scrollContainer_.removeAttribute("aria-live");
        this.scrollContainer_.setAttribute("role", "list");
        this.slides_.forEach(function(slide) {
          slide.setAttribute("role", "listitem");
        });
      } else {
        this.scrollContainer_.setAttribute("aria-live", "polite");
        this.scrollContainer_.removeAttribute("role");
        this.slides_.forEach(function(slide) {
          slide.removeAttribute("role");
        });
      }
    };
    _proto.updateAriaHidden_ = function updateAriaHidden_() {
      var _this3 = this;
      this.slides_.forEach(function(slide, i) {
        var hide = !_this3.treatAsList_() && i !== _this3.index_;
        slide.setAttribute("aria-hidden", hide);
      });
    };
    _proto.onIndexChanged_ = function onIndexChanged_(event) {
      var _this4 = this;
      var detail = getDetail(event);
      var index = detail["index"];
      this.index_ = index;
      this.runMutate_(function() {
        _this4.updateAriaHidden_();
      });
    };
    return CarouselAccessibility2;
  }();

  // extensions/amp-base-carousel/0.1/array-util.js
  function forwardWrappingDistance(a, b, arr) {
    var length = arr.length;
    return a === b ? length : mod(b - a, length);
  }
  function backwardWrappingDistance(a, b, arr) {
    var length = arr.length;
    return a === b ? length : mod(a - b, length);
  }

  // src/core/window/index.js
  function toWin(winOrNull) {
    return winOrNull;
  }
  function getWin(node) {
    return toWin((node.ownerDocument || node).defaultView);
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
  function iterateCursor(iterable, cb) {
    var length = iterable.length;
    for (var i = 0; i < length; i++) {
      cb(iterable[i], i);
    }
  }
  function dispatchCustomEvent(node, name, opt_data, opt_options) {
    var data = opt_data || {};
    var event = node.ownerDocument.createEvent("Event");
    event.data = data;
    var _ref = opt_options || DEFAULT_CUSTOM_EVENT_OPTIONS, bubbles = _ref.bubbles, cancelable = _ref.cancelable;
    event.initEvent(name, bubbles, cancelable);
    node.dispatchEvent(event);
  }

  // extensions/amp-base-carousel/0.1/carousel.js
  var RESET_SCROLL_REFERENCE_POINT_WAIT_MS = 200;
  var SPACER_CLASS = "i-amphtml-carousel-spacer";
  function runDisablingSmoothScroll(el, cb) {
    var scrollBehavior = getStyle(el, "scrollBehavior");
    setStyle(el, "scrollBehavior", "auto");
    cb();
    setStyle(el, "scrollBehavior", scrollBehavior);
  }
  function sum(arr) {
    return arr.reduce(function(p, c) {
      return p + c;
    }, 0);
  }
  var Carousel = /* @__PURE__ */ function() {
    function Carousel2(config) {
      var _this = this;
      var element = config.element, initialIndex = config.initialIndex, runMutate = config.runMutate, scrollContainer = config.scrollContainer, win = config.win;
      this.win_ = win;
      this.runMutate_ = runMutate;
      this.element_ = element;
      this.scrollContainer_ = scrollContainer;
      this.autoAdvance_ = new AutoAdvance({
        win: win,
        element: element,
        scrollContainer: scrollContainer,
        advanceable: this
      });
      this.carouselAccessibility_ = new CarouselAccessibility({
        win: win,
        element: element,
        scrollContainer: scrollContainer,
        runMutate: runMutate,
        stoppable: this.autoAdvance_
      });
      this.debouncedResetScrollReferencePoint_ = debounce(win, function() {
        return _this.resetScrollReferencePoint_();
      }, RESET_SCROLL_REFERENCE_POINT_WAIT_MS);
      this.advanceCount_ = 1;
      this.autoAdvanceLoops_ = Number.POSITIVE_INFINITY;
      this.mixedLength_ = false;
      this.slides_ = [];
      this.userScrollable_ = true;
      this.updating_ = false;
      this.beforeSpacers_ = [];
      this.replacementSpacers_ = [];
      this.afterSpacers_ = [];
      this.allSpacers_ = [];
      this.layoutPaused_ = false;
      this.ignoreNextScroll_ = false;
      this.currentElementOffset_ = 0;
      this.requestedIndex_ = null;
      this.restingIndex_ = NaN;
      this.touching_ = false;
      this.scrolling_ = false;
      this.actionSource_ = void 0;
      this.alignment_ = Alignment.START;
      this.axis_ = Axis.X;
      this.forwards_ = true;
      this.hideScrollbar_ = true;
      this.currentIndex_ = initialIndex || 0;
      this.loop_ = false;
      this.snap_ = true;
      this.snapBy_ = 1;
      this.visibleCount_ = 1;
      this.scrollContainer_.addEventListener("scroll", function() {
        return _this.handleScroll_();
      }, true);
      this.scrollContainer_.addEventListener("scrollend", function() {
        return _this.handleScrollEnd_();
      }, true);
      listen(this.scrollContainer_, "touchstart", function() {
        return _this.handleTouchStart_();
      }, {
        capture: true,
        passive: true
      });
      listen(this.scrollContainer_, "wheel", function() {
        return _this.handleWheel_();
      }, {
        capture: true,
        passive: true
      });
    }
    var _proto = Carousel2.prototype;
    _proto.next = function next(actionSource) {
      this.advance(this.advanceCount_, {
        actionSource: actionSource
      });
    };
    _proto.prev = function prev(actionSource) {
      this.advance(-this.advanceCount_, {
        actionSource: actionSource
      });
    };
    _proto.advance = function advance(delta, options) {
      if (options === void 0) {
        options = {};
      }
      var currentIndex_ = this.currentIndex_, requestedIndex_ = this.requestedIndex_, slides_ = this.slides_;
      var _options = options, actionSource = _options.actionSource, _options$allowWrap = _options.allowWrap, allowWrap = _options$allowWrap === void 0 ? false : _options$allowWrap;
      var index = requestedIndex_ !== null ? requestedIndex_ : currentIndex_;
      var newIndex = index + delta;
      var endIndex = slides_.length - 1;
      var atStart = index === 0;
      var atEnd = index === endIndex;
      var passingStart = newIndex < 0;
      var passingEnd = newIndex > endIndex;
      var forwardWithinLastWindow = delta > 0 && this.inLastWindow_(index) && this.inLastWindow_(newIndex);
      var slideIndex;
      if (this.isLooping()) {
        slideIndex = mod(newIndex, endIndex + 1);
      } else if (!allowWrap) {
        slideIndex = forwardWithinLastWindow ? index : clamp(newIndex, 0, endIndex);
      } else if (forwardWithinLastWindow) {
        slideIndex = 0;
      } else if (passingStart && atStart || passingEnd && !atEnd) {
        slideIndex = endIndex;
      } else if (passingStart && !atStart || passingEnd && atEnd) {
        slideIndex = 0;
      } else {
        slideIndex = newIndex;
      }
      this.goToSlide(slideIndex, {
        actionSource: actionSource
      });
    };
    _proto.pauseLayout = function pauseLayout() {
      this.layoutPaused_ = true;
      this.autoAdvance_.pause();
    };
    _proto.resumeLayout = function resumeLayout() {
      this.layoutPaused_ = false;
      this.updateUi();
      this.autoAdvance_.resume();
    };
    _proto.getCurrentIndex = function getCurrentIndex() {
      return this.currentIndex_;
    };
    _proto.getVisibleCount = function getVisibleCount() {
      return this.visibleCount_;
    };
    _proto.isLooping = function isLooping() {
      return this.loop_ && this.slides_.length / this.visibleCount_ >= 3;
    };
    _proto.goToSlide = function goToSlide(index, options) {
      if (options === void 0) {
        options = {};
      }
      var _options2 = options, actionSource = _options2.actionSource, _options2$smoothScrol = _options2.smoothScroll, smoothScroll = _options2$smoothScrol === void 0 ? true : _options2$smoothScrol;
      if (index < 0 || index > this.slides_.length - 1 || isNaN(index)) {
        return;
      }
      if (index === this.currentIndex_) {
        return;
      }
      if (this.touching_ || this.isUserScrolling_()) {
        return;
      }
      this.ignoreNextScroll_ = false;
      this.requestedIndex_ = index;
      this.actionSource_ = actionSource;
      this.scrollSlideIntoView_(this.slides_[index], {
        smoothScroll: smoothScroll
      });
    };
    _proto.updateAdvanceCount = function updateAdvanceCount(advanceCount) {
      this.advanceCount_ = advanceCount;
    };
    _proto.updateAlignment = function updateAlignment(alignment) {
      this.alignment_ = alignment === "start" ? Alignment.START : Alignment.CENTER;
      this.updateUi();
    };
    _proto.updateAutoAdvance = function updateAutoAdvance(autoAdvance) {
      this.autoAdvance_.updateAutoAdvance(autoAdvance);
    };
    _proto.updateAutoAdvanceCount = function updateAutoAdvanceCount(autoAdvanceCount) {
      this.autoAdvance_.updateAutoAdvanceCount(autoAdvanceCount);
    };
    _proto.updateAutoAdvanceInterval = function updateAutoAdvanceInterval(autoAdvanceInterval) {
      this.autoAdvance_.updateAutoAdvanceInterval(autoAdvanceInterval);
    };
    _proto.updateAutoAdvanceLoops = function updateAutoAdvanceLoops(autoAdvanceLoops) {
      this.autoAdvanceLoops_ = autoAdvanceLoops;
      this.updateUi();
    };
    _proto.updateForwards = function updateForwards(forwards) {
      this.forwards_ = forwards;
      this.updateUi();
    };
    _proto.updateHideScrollbar = function updateHideScrollbar(hideScrollbar) {
      this.hideScrollbar_ = hideScrollbar;
      this.updateUi();
    };
    _proto.updateHorizontal = function updateHorizontal(horizontal) {
      this.axis_ = horizontal ? Axis.X : Axis.Y;
      this.updateUi();
    };
    _proto.updateLoop = function updateLoop(loop) {
      this.loop_ = loop;
      this.updateUi();
    };
    _proto.updateMixedLength = function updateMixedLength(mixedLength) {
      this.mixedLength_ = mixedLength;
      this.carouselAccessibility_.updateMixedLength(mixedLength);
      this.updateUi();
    };
    _proto.updateSlides = function updateSlides(slides) {
      var length = slides.length;
      if (!length) {
        var TAG = this.element_.tagName.toUpperCase();
        dev().warn(TAG, "No slides were found.");
        return;
      }
      this.slides_ = slides;
      this.currentIndex_ = this.isLooping() ? mod(this.currentIndex_, length) : clamp(this.currentIndex_, 0, length - 1) || 0;
      this.carouselAccessibility_.updateSlides(slides);
      this.updateUi();
    };
    _proto.updateSnap = function updateSnap(snap) {
      this.snap_ = snap;
      this.updateUi();
    };
    _proto.updateSnapBy = function updateSnapBy(snapBy) {
      this.snapBy_ = Math.max(1, snapBy);
      this.updateUi();
    };
    _proto.updateUserScrollable = function updateUserScrollable(userScrollable) {
      this.userScrollable_ = userScrollable;
      this.updateUi();
    };
    _proto.updateUi = function updateUi() {
      var _this2 = this;
      if (this.updating_ || this.layoutPaused_) {
        return;
      }
      this.updating_ = true;
      this.runMutate_(function() {
        _this2.updating_ = false;
        _this2.scrollContainer_.setAttribute("mixed-length", _this2.mixedLength_);
        _this2.scrollContainer_.setAttribute("user-scrollable", _this2.userScrollable_);
        _this2.scrollContainer_.setAttribute("hide-scrollbar", _this2.hideScrollbar_);
        _this2.scrollContainer_.setAttribute("horizontal", _this2.axis_ === Axis.X);
        _this2.scrollContainer_.setAttribute("loop", _this2.isLooping());
        _this2.scrollContainer_.setAttribute("snap", _this2.snap_);
        setImportantStyles(_this2.scrollContainer_, {
          "--visible-count": _this2.visibleCount_
        });
        if (!_this2.slides_.length) {
          return;
        }
        _this2.autoAdvance_.updateMaxAdvances(_this2.autoAdvanceLoops_ * _this2.slides_.length - 1);
        _this2.updateSpacers_();
        _this2.setChildrenSnapAlign_();
        _this2.hideSpacersAndSlides_();
        _this2.resetScrollReferencePoint_(true);
      });
    };
    _proto.updateVisibleCount = function updateVisibleCount(visibleCount) {
      this.visibleCount_ = Math.max(1, visibleCount);
      this.carouselAccessibility_.updateVisibleCount(visibleCount);
      this.updateUi();
    };
    _proto.updateRestingIndex_ = function updateRestingIndex_(restingIndex, actionSource) {
      if (this.restingIndex_ === restingIndex) {
        return;
      }
      this.restingIndex_ = restingIndex;
      this.element_.dispatchEvent(createCustomEvent(this.win_, CarouselEvents.INDEX_CHANGE, dict({
        "index": restingIndex,
        "total": this.slides_.length,
        "actionSource": actionSource,
        "slides": this.slides_
      }), {
        bubbles: true
      }));
    };
    _proto.updateCurrentElementOffset_ = function updateCurrentElementOffset_(index, offset) {
      this.currentIndex_ = index;
      this.currentElementOffset_ = offset;
      this.element_.dispatchEvent(createCustomEvent(this.win_, CarouselEvents.OFFSET_CHANGE, dict({
        "index": index,
        "total": this.slides_.length,
        "offset": this.forwards_ ? -offset : offset,
        "slides": this.slides_
      }), {
        bubbles: true
      }));
    };
    _proto.notifyScrollStart = function notifyScrollStart() {
      this.element_.dispatchEvent(createCustomEvent(this.win_, CarouselEvents.SCROLL_START, null));
    };
    _proto.notifyScrollPositionChanged_ = function notifyScrollPositionChanged_() {
      this.element_.dispatchEvent(createCustomEvent(this.win_, CarouselEvents.SCROLL_POSITION_CHANGED, null));
    };
    _proto.handleTouchStart_ = function handleTouchStart_() {
      var _this3 = this;
      this.touching_ = true;
      this.actionSource_ = ActionSource.TOUCH;
      this.requestedIndex_ = null;
      this.ignoreNextScroll_ = false;
      listenOnce(window, "touchend", function() {
        _this3.touching_ = false;
        _this3.debouncedResetScrollReferencePoint_();
      }, {
        capture: true,
        passive: true
      });
    };
    _proto.handleWheel_ = function handleWheel_() {
      this.actionSource_ = ActionSource.WHEEL;
      this.requestedIndex_ = null;
      this.ignoreNextScroll_ = false;
    };
    _proto.handleScroll_ = function handleScroll_() {
      if (this.ignoreNextScroll_) {
        this.ignoreNextScroll_ = false;
        return;
      }
      this.scrolling_ = true;
      this.updateCurrent_();
      this.notifyScrollStart();
      this.debouncedResetScrollReferencePoint_();
    };
    _proto.handleScrollEnd_ = function handleScrollEnd_() {
      if (this.requestedIndex_ !== null) {
        return;
      }
      this.resetScrollReferencePoint_();
    };
    _proto.isUserScrolling_ = function isUserScrolling_() {
      return this.scrolling_ && (this.actionSource_ === ActionSource.TOUCH || this.actionSource_ === ActionSource.WHEEL);
    };
    _proto.setElementTransform_ = function setElementTransform_(el, revolutions, revolutionLength) {
      var dir = this.forwards_ ? 1 : -1;
      var delta = revolutions * revolutionLength * dir;
      setTransformTranslateStyle(this.axis_, el, delta);
      el._revolutions = revolutions;
    };
    _proto.resetSlideTransforms_ = function resetSlideTransforms_(totalLength) {
      var _this4 = this;
      var revolutions = 0;
      this.slides_.forEach(function(slide) {
        _this4.setElementTransform_(slide, revolutions, totalLength);
      });
    };
    _proto.getSlideLengths_ = function getSlideLengths_() {
      var _this5 = this;
      return this.slides_.map(function(s) {
        return getDimension(_this5.axis_, s).length;
      });
    };
    _proto.isAtEnd = function isAtEnd() {
      if (this.isLooping()) {
        return false;
      }
      return this.isScrollAtEndingEdge_();
    };
    _proto.isAtStart = function isAtStart() {
      if (this.isLooping()) {
        return false;
      }
      return this.isScrollAtBeginningEdge_();
    };
    _proto.isScrollAtEndingEdge_ = function isScrollAtEndingEdge_() {
      var el = this.scrollContainer_;
      var vector = el.getBoundingClientRect().width * (this.forwards_ ? 1 : -1);
      var roundedVector = this.forwards_ ? Math.ceil(vector) : Math.floor(vector);
      var edgeClosestToEnd = el.scrollLeft + roundedVector;
      var containerScrollWidth = el.scrollWidth;
      var atEndingEdge = this.forwards_ ? edgeClosestToEnd >= containerScrollWidth : edgeClosestToEnd <= -containerScrollWidth;
      return atEndingEdge;
    };
    _proto.isScrollAtBeginningEdge_ = function isScrollAtBeginningEdge_() {
      var currentScrollPos = this.scrollContainer_.scrollLeft;
      return this.forwards_ ? currentScrollPos <= 0 : currentScrollPos >= 0;
    };
    _proto.createSpacers_ = function createSpacers_(count) {
      var spacers = [];
      for (var i = 0; i < count; i++) {
        var spacer = document.createElement("div");
        spacer.className = SPACER_CLASS;
        spacers.push(spacer);
      }
      return spacers;
    };
    _proto.updateSpacers_ = function updateSpacers_() {
      var _this6 = this;
      var axis_ = this.axis_, slides_ = this.slides_;
      var slideLengths = this.getSlideLengths_();
      var totalLength = sum(slideLengths);
      var count = this.isLooping() ? slides_.length : 0;
      this.beforeSpacers_.forEach(function(spacer) {
        _this6.scrollContainer_.removeChild(spacer);
      });
      this.beforeSpacers_ = this.createSpacers_(count);
      this.beforeSpacers_.forEach(function(spacer, i) {
        updateLengthStyle(axis_, spacer, slideLengths[i]);
        _this6.scrollContainer_.insertBefore(spacer, slides_[0]);
      });
      this.replacementSpacers_.forEach(function(spacer) {
        _this6.scrollContainer_.removeChild(spacer);
      });
      this.replacementSpacers_ = this.createSpacers_(count);
      this.replacementSpacers_.forEach(function(spacer, i) {
        updateLengthStyle(axis_, spacer, slideLengths[i]);
        _this6.setElementTransform_(spacer, -1, totalLength);
        _this6.scrollContainer_.appendChild(spacer);
      });
      this.afterSpacers_.forEach(function(spacer) {
        _this6.scrollContainer_.removeChild(spacer);
      });
      this.afterSpacers_ = this.createSpacers_(count);
      this.afterSpacers_.forEach(function(spacer, i) {
        updateLengthStyle(axis_, spacer, slideLengths[i]);
        _this6.setElementTransform_(spacer, -1, totalLength);
        _this6.scrollContainer_.appendChild(spacer);
      });
      this.allSpacers_ = this.beforeSpacers_.concat(this.replacementSpacers_, this.afterSpacers_);
    };
    _proto.setChildrenSnapAlign_ = function setChildrenSnapAlign_() {
      var _this7 = this;
      var slideCount = this.slides_.length;
      var startAligned = this.alignment_ === Alignment.START;
      var oddVisibleCount = mod(this.visibleCount_, 2) === 1;
      var coordinate = startAligned || oddVisibleCount ? "0%" : "50%";
      iterateCursor(this.scrollContainer_.children, function(child, index) {
        var slideIndex = mod(index, slideCount);
        var shouldSnap = mod(slideIndex, _this7.snapBy_) === 0;
        if (child.classList.contains(SPACER_CLASS) || !_this7.isLooping()) {
          setStyles(child, {
            "scroll-snap-align": shouldSnap ? _this7.alignment_ : "none",
            "scroll-snap-coordinate": shouldSnap ? coordinate : "none"
          });
        }
      });
    };
    _proto.hideSpacersAndSlides_ = function hideSpacersAndSlides_() {
      var afterSpacers_ = this.afterSpacers_, beforeSpacers_ = this.beforeSpacers_, currentIndex_ = this.currentIndex_, slides_ = this.slides_;
      var numBeforeSpacers = Math.max(0, slides_.length - currentIndex_ - 1);
      var numAfterSpacers = Math.max(0, currentIndex_ - 1);
      beforeSpacers_.forEach(function(el, i) {
        var distance = backwardWrappingDistance(currentIndex_, i, beforeSpacers_);
        var tooFar = distance > slides_.length - 1;
        el.hidden = tooFar || i < slides_.length - numBeforeSpacers;
      });
      afterSpacers_.forEach(function(el, i) {
        var distance = forwardWrappingDistance(currentIndex_, i, afterSpacers_);
        var tooFar = distance > slides_.length - 1;
        el.hidden = tooFar || i > numAfterSpacers;
      });
    };
    _proto.updateCurrent_ = function updateCurrent_() {
      var _this8 = this;
      var alignment_ = this.alignment_, allSpacers_ = this.allSpacers_, axis_ = this.axis_, currentIndex_ = this.currentIndex_, scrollContainer_ = this.scrollContainer_, slides_ = this.slides_;
      var totalLength = sum(this.getSlideLengths_());
      var hasSpacers = !!allSpacers_.length;
      var items = hasSpacers ? allSpacers_ : slides_;
      var startIndex = hasSpacers ? currentIndex_ + slides_.length : currentIndex_;
      var overlappingIndex = findOverlappingIndex(axis_, alignment_, scrollContainer_, items, startIndex);
      if (overlappingIndex === void 0) {
        return;
      }
      var overlappingElement = items[overlappingIndex];
      var newIndex = overlappingIndex % slides_.length;
      var offset = getPercentageOffsetFromAlignment(axis_, alignment_, scrollContainer_, overlappingElement);
      this.updateCurrentElementOffset_(newIndex, offset);
      if (newIndex === currentIndex_) {
        return;
      }
      this.runMutate_(function() {
        _this8.moveSlides_(totalLength);
      });
    };
    _proto.resetScrollReferencePoint_ = function resetScrollReferencePoint_(force) {
      var _this9 = this;
      if (force === void 0) {
        force = false;
      }
      var actionSource_ = this.actionSource_;
      if (this.touching_) {
        return;
      }
      this.actionSource_ = void 0;
      this.scrolling_ = false;
      this.runMutate_(function() {
        _this9.notifyScrollPositionChanged_();
      });
      if (this.restingIndex_ === this.currentIndex_ && this.requestedIndex_ === null && !force) {
        return;
      }
      if (this.requestedIndex_ !== null) {
        this.currentIndex_ = this.requestedIndex_;
        this.requestedIndex_ = null;
        this.currentElementOffset_ = 0;
      }
      var totalLength = sum(this.getSlideLengths_());
      this.runMutate_(function() {
        _this9.updateRestingIndex_(_this9.currentIndex_, actionSource_);
        _this9.updateCurrentElementOffset_(_this9.currentIndex_, _this9.currentElementOffset_);
        _this9.resetSlideTransforms_(totalLength);
        _this9.hideSpacersAndSlides_();
        _this9.moveSlides_(totalLength);
        _this9.restoreScrollStart_();
      });
    };
    _proto.restoreScrollStart_ = function restoreScrollStart_() {
      var alignment_ = this.alignment_, axis_ = this.axis_, currentElementOffset_ = this.currentElementOffset_, currentIndex_ = this.currentIndex_, scrollContainer_ = this.scrollContainer_, slides_ = this.slides_;
      var currentElement = slides_[currentIndex_];
      var actualOffset = getPercentageOffsetFromAlignment(axis_, alignment_, scrollContainer_, currentElement);
      var deltaOffset = actualOffset - currentElementOffset_;
      var _getDimension = getDimension(axis_, currentElement), length = _getDimension.length;
      var deltaInPixels = deltaOffset * length;
      if (!deltaInPixels) {
        return;
      }
      this.ignoreNextScroll_ = true;
      runDisablingSmoothScroll(scrollContainer_, function() {
        updateScrollPosition(axis_, scrollContainer_, deltaInPixels);
      });
    };
    _proto.scrollSlideIntoView_ = function scrollSlideIntoView_(slide, options) {
      var _this10 = this;
      var smoothScroll = options.smoothScroll;
      var runner = smoothScroll ? function(el, cb) {
        return cb();
      } : runDisablingSmoothScroll;
      runner(this.scrollContainer_, function() {
        scrollContainerToElement(_this10.axis_, _this10.alignment_, _this10.scrollContainer_, slide);
      });
    };
    _proto.moveSlidesBeforeOrAfter__ = function moveSlidesBeforeOrAfter__(totalLength, count, isAfter) {
      var currentIndex_ = this.currentIndex_, restingIndex_ = this.restingIndex_, slides_ = this.slides_;
      var current = slides_[currentIndex_];
      var currentRevolutions = current._revolutions || 0;
      var dir = isAfter ? 1 : -1;
      for (var i = 1; i <= count; i++) {
        var elIndex = mod(currentIndex_ + i * dir, slides_.length);
        if (elIndex === restingIndex_ && currentIndex_ !== restingIndex_) {
          break;
        }
        var el = slides_[elIndex];
        var needsMove = elIndex > currentIndex_ !== isAfter;
        var revolutions = needsMove ? currentRevolutions + dir : currentRevolutions;
        this.setElementTransform_(el, revolutions, totalLength);
      }
    };
    _proto.moveSlides_ = function moveSlides_(totalLength) {
      if (!this.isLooping()) {
        return;
      }
      var alignment_ = this.alignment_, slides_ = this.slides_, visibleCount_ = this.visibleCount_;
      var isStartAligned = alignment_ === Alignment.START;
      var windowSlideCount = isStartAligned ? visibleCount_ - 1 : 0;
      var beforeCount = (slides_.length - 1 - windowSlideCount) / 2;
      var afterCount = (slides_.length - 1 + windowSlideCount) / 2;
      this.moveSlidesBeforeOrAfter__(totalLength, Math.round(beforeCount), false);
      this.moveSlidesBeforeOrAfter__(totalLength, Math.round(afterCount), true);
    };
    _proto.inLastWindow_ = function inLastWindow_(index) {
      var alignment_ = this.alignment_, slides_ = this.slides_, visibleCount_ = this.visibleCount_;
      var startAligned = alignment_ === Alignment.START;
      var lastWindowSize = startAligned ? visibleCount_ : visibleCount_ / 2;
      return index >= slides_.length - lastWindowSize;
    };
    return Carousel2;
  }();

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

  // extensions/amp-base-carousel/0.1/child-layout-manager.js
  var NEAR_VIEWPORT_FLAG = "__AMP_CAROUSEL_NEAR_VIEWPORT";
  var IN_VIEWPORT_FLAG = "__AMP_CAROUSEL_IN_VIEWPORT";
  var NO_INTERSECTION_MARGIN = "0%";
  var DEFAULT_NEARBY_MARGIN = 100;
  var UNLAYOUT_MARGIN = 10;
  var DEFAULT_INTERSECTION_THRESHOLD = 0.01;
  var ViewportChangeState = {
    ENTER: 0,
    LEAVE: 1
  };
  var ChildLayoutManager = /* @__PURE__ */ function() {
    function ChildLayoutManager2(config) {
      var ampElement = config.ampElement, intersectionElement = config.intersectionElement, _config$intersectionT = config.intersectionThreshold, intersectionThreshold = _config$intersectionT === void 0 ? DEFAULT_INTERSECTION_THRESHOLD : _config$intersectionT, _config$nearbyMarginI = config.nearbyMarginInPercent, nearbyMarginInPercent = _config$nearbyMarginI === void 0 ? DEFAULT_NEARBY_MARGIN : _config$nearbyMarginI, _config$viewportInter = config.viewportIntersectionThreshold, viewportIntersectionThreshold = _config$viewportInter === void 0 ? intersectionThreshold : _config$viewportInter, _config$viewportInter2 = config.viewportIntersectionCallback, viewportIntersectionCallback = _config$viewportInter2 === void 0 ? function() {
      } : _config$viewportInter2;
      this.ampElement_ = ampElement;
      this.owners_ = Services.ownersForDoc(ampElement.element);
      this.intersectionElement_ = intersectionElement;
      this.intersectionThreshold_ = intersectionThreshold;
      this.nearbyMarginInPercent_ = nearbyMarginInPercent;
      this.viewportIntersectionThreshold_ = viewportIntersectionThreshold;
      this.viewportIntersectionCallback_ = viewportIntersectionCallback;
      this.queueChanges_ = false;
      this.children_ = [];
      this.nearingViewportObserver_ = null;
      this.backingAwayViewportObserver_ = null;
      this.inViewportObserver_ = null;
      this.laidOut_ = false;
    }
    var _proto = ChildLayoutManager2.prototype;
    _proto.setQueueChanges = function setQueueChanges(queueChanges) {
      this.queueChanges_ = queueChanges;
    };
    _proto.triggerLayout_ = function triggerLayout_(target, isIntersecting) {
      if (isIntersecting) {
        this.owners_.scheduleLayout(this.ampElement_.element, target);
      } else {
        this.owners_.scheduleUnlayout(this.ampElement_.element, target);
      }
    };
    _proto.triggerVisibility_ = function triggerVisibility_(target, isIntersecting) {
      this.viewportIntersectionCallback_(target, isIntersecting);
    };
    _proto.setup_ = function setup_() {
      var _this = this;
      if (this.nearingViewportObserver_ && this.backingAwayViewportObserver_ && this.inViewportObserver_) {
        return;
      }
      var win = this.ampElement_.win;
      this.nearingViewportObserver_ = new win.IntersectionObserver(function(entries) {
        return _this.processNearingChanges_(entries);
      }, {
        root: this.intersectionElement_,
        rootMargin: this.nearbyMarginInPercent_ + "%",
        threshold: this.intersectionThreshold_
      });
      this.backingAwayViewportObserver_ = new win.IntersectionObserver(function(entries) {
        return _this.processBackingAwayChanges_(entries);
      }, {
        root: this.intersectionElement_,
        rootMargin: this.nearbyMarginInPercent_ + UNLAYOUT_MARGIN + "%",
        threshold: this.intersectionThreshold_
      });
      this.inViewportObserver_ = new win.IntersectionObserver(function(entries) {
        return _this.processInViewportChanges_(entries);
      }, {
        root: this.intersectionElement_,
        rootMargin: NO_INTERSECTION_MARGIN,
        threshold: this.viewportIntersectionThreshold_
      });
    };
    _proto.processNearingChanges_ = function processNearingChanges_(entries) {
      entries.filter(function(entry) {
        var isIntersecting = entry.isIntersecting;
        return isIntersecting;
      }).forEach(function(entry) {
        var target = entry.target;
        target[NEAR_VIEWPORT_FLAG] = ViewportChangeState.ENTER;
      });
      if (!this.queueChanges_) {
        this.flushNearingViewportChanges_();
      }
    };
    _proto.processBackingAwayChanges_ = function processBackingAwayChanges_(entries) {
      entries.filter(function(entry) {
        var isIntersecting = entry.isIntersecting;
        return !isIntersecting;
      }).forEach(function(entry) {
        var target = entry.target;
        target[NEAR_VIEWPORT_FLAG] = ViewportChangeState.LEAVE;
      });
      if (!this.queueChanges_) {
        this.flushBackingAwayViewportChanges_();
      }
    };
    _proto.processInViewportChanges_ = function processInViewportChanges_(entries) {
      entries.forEach(function(entry) {
        var isIntersecting = entry.isIntersecting, target = entry.target;
        target[IN_VIEWPORT_FLAG] = isIntersecting ? ViewportChangeState.ENTER : ViewportChangeState.LEAVE;
      });
      if (!this.queueChanges_) {
        this.flushInViewportChanges_();
      }
    };
    _proto.flushChanges = function flushChanges() {
      this.flushNearingViewportChanges_();
      this.flushBackingAwayViewportChanges_();
      this.flushInViewportChanges_();
    };
    _proto.flushNearingViewportChanges_ = function flushNearingViewportChanges_() {
      for (var i = 0; i < this.children_.length; i++) {
        var child = this.children_[i];
        if (child[NEAR_VIEWPORT_FLAG] == ViewportChangeState.ENTER) {
          this.triggerLayout_(child, true);
          child[NEAR_VIEWPORT_FLAG] = null;
        }
      }
    };
    _proto.flushBackingAwayViewportChanges_ = function flushBackingAwayViewportChanges_() {
      for (var i = 0; i < this.children_.length; i++) {
        var child = this.children_[i];
        if (child[NEAR_VIEWPORT_FLAG] == ViewportChangeState.LEAVE) {
          this.triggerLayout_(child, false);
          child[NEAR_VIEWPORT_FLAG] = null;
        }
      }
    };
    _proto.flushInViewportChanges_ = function flushInViewportChanges_() {
      for (var i = 0; i < this.children_.length; i++) {
        var child = this.children_[i];
        if (child[IN_VIEWPORT_FLAG] == ViewportChangeState.ENTER) {
          this.triggerLayout_(child, true);
          this.triggerVisibility_(child, true);
        } else if (child[IN_VIEWPORT_FLAG] == ViewportChangeState.LEAVE) {
          this.triggerVisibility_(child, false);
        }
        child[IN_VIEWPORT_FLAG] = null;
      }
    };
    _proto.monitorChildren_ = function monitorChildren_(observe) {
      if (!("IntersectionObserver" in this.ampElement_.win)) {
        return;
      }
      this.setup_();
      if (!observe) {
        this.nearingViewportObserver_.disconnect();
        this.backingAwayViewportObserver_.disconnect();
        this.inViewportObserver_.disconnect();
        return;
      }
      for (var i = 0; i < this.children_.length; i++) {
        this.nearingViewportObserver_.observe(this.children_[i]);
        this.backingAwayViewportObserver_.observe(this.children_[i]);
        this.inViewportObserver_.observe(this.children_[i]);
      }
    };
    _proto.updateChildren = function updateChildren(children) {
      this.children_ = children;
      if (!("IntersectionObserver" in this.ampElement_.win)) {
        return;
      }
      for (var i = 0; i < this.children_.length; i++) {
        this.owners_.setOwner(this.children_[i], this.ampElement_.element);
      }
      this.monitorChildren_(false);
      this.monitorChildren_(this.laidOut_);
    };
    _proto.wasLaidOut = function wasLaidOut() {
      this.laidOut_ = true;
      this.monitorChildren_(this.laidOut_);
    };
    _proto.wasUnlaidOut = function wasUnlaidOut() {
      this.laidOut_ = false;
      this.monitorChildren_(this.laidOut_);
      for (var i = 0; i < this.children_.length; i++) {
        this.triggerLayout_(this.children_[i], false);
        this.triggerVisibility_(this.children_[i], false);
      }
    };
    return ChildLayoutManager2;
  }();

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

  // extensions/amp-carousel/0.2/amp-carousel.js
  var _templateObject;
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
  var CarouselType = {
    CAROUSEL: "carousel",
    SLIDES: "slides"
  };
  var AmpCarousel = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpCarousel2, _AMP$BaseElement);
    var _super = _createSuper(AmpCarousel2);
    AmpCarousel2.prerenderAllowed = function prerenderAllowed() {
      return true;
    };
    var _proto = AmpCarousel2.prototype;
    _proto.setupActions_ = function setupActions_() {
      var _this2 = this;
      this.registerAction("goToSlide", function(actionInvocation) {
        var args = actionInvocation.args, trust = actionInvocation.trust;
        var slide = Number(args["index"] || 0);
        userAssert(!isNaN(slide), "Unexpected slide index for goToSlide action: %s. %s", args["index"], _this2.element);
        _this2.carousel_.goToSlide(slide, {
          actionSource: _this2.getActionSource_(trust)
        });
      }, ActionTrust_Enum.LOW);
      this.registerAction("toggleAutoplay", function(actionInvocation) {
        var args = actionInvocation.args;
        var toggle = args ? args["toggleOn"] : void 0;
        _this2.toggleAutoplay_(toggle);
      }, ActionTrust_Enum.LOW);
    };
    function AmpCarousel2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.isIos_ = Services.platformFor(_this.win).isIos();
      _this.carousel_ = null;
      _this.scrollContainer_ = null;
      _this.slides_ = [];
      _this.currentIndex_ = null;
      _this.type_ = "carousel";
      _this.autoplay_ = false;
      _this.nextButton_ = null;
      _this.prevButton_ = null;
      _this.hadTouch_ = false;
      _this.action_ = null;
      _this.childLayoutManager_ = null;
      _this.showControls_ = false;
      _this.isViewerEmbeded_ = Services.viewerForDoc(element).isEmbedded();
      return _this;
    }
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return isLayoutSizeDefined(layout);
    };
    _proto.buildCallback = function buildCallback() {
      var _this3 = this;
      this.action_ = Services.actionServiceForDoc(this.element);
      var element = this.element, win = this.win;
      var slides = realChildElements(this.element);
      element.appendChild(this.renderContainerDom_());
      this.scrollContainer_ = this.element.querySelector(".i-amphtml-carousel-scroll");
      this.prevButton_ = this.element.querySelector(".amp-carousel-button-prev");
      this.nextButton_ = this.element.querySelector(".amp-carousel-button-next");
      this.carousel_ = new Carousel({
        win: win,
        element: element,
        scrollContainer: dev().assertElement(this.scrollContainer_),
        initialIndex: Number(this.element.getAttribute("slide") || "0"),
        runMutate: function runMutate(cb) {
          return _this3.mutateElement(cb);
        }
      });
      this.configureCarousel_(slides);
      this.setupActions_();
      this.element.addEventListener(CarouselEvents.INDEX_CHANGE, function(event) {
        _this3.onIndexChanged_(event);
      });
      this.element.addEventListener(CarouselEvents.SCROLL_START, function() {
        _this3.onScrollStarted_();
      });
      this.element.addEventListener(CarouselEvents.SCROLL_POSITION_CHANGED, function() {
        _this3.onScrollPositionChanged_();
      });
      this.prevButton_.addEventListener("click", function() {
        return _this3.interactionPrev();
      });
      this.nextButton_.addEventListener("click", function() {
        return _this3.interactionNext();
      });
      this.handlePropagationInViewer_();
      var owners = Services.ownersForDoc(element);
      this.childLayoutManager_ = new ChildLayoutManager({
        ampElement: this,
        intersectionElement: dev().assertElement(this.scrollContainer_),
        nearbyMarginInPercent: this.isIos_ ? 200 : 100,
        viewportIntersectionCallback: function viewportIntersectionCallback(child, isIntersecting) {
          if (isIntersecting) {
            owners.scheduleResume(_this3.element, child);
          } else {
            owners.schedulePause(_this3.element, child);
          }
        }
      });
      this.childLayoutManager_.setQueueChanges(this.isIos_);
      this.childLayoutManager_.updateChildren(this.slides_);
      this.carousel_.updateSlides(this.slides_);
      this.carousel_.goToSlide(Number(this.element.getAttribute("slide") || "0"));
      if (this.element.hasAttribute("controls")) {
        this.showControls_ = true;
      } else {
        Services.inputFor(this.win).onMouseDetected(function(mouseDetected) {
          if (mouseDetected) {
            _this3.showControls_ = true;
            _this3.updateUi_();
          }
        }, true);
      }
      return this.mutateElement(function() {
      });
    };
    _proto.isRelayoutNeeded = function isRelayoutNeeded() {
      return true;
    };
    _proto.layoutCallback = function layoutCallback() {
      var isScaled = closestAncestorElementBySelector(this.element, "[i-amphtml-scale-animation]");
      if (isScaled) {
        return resolvedPromise();
      }
      this.childLayoutManager_.wasLaidOut();
      this.carousel_.updateUi();
      return resolvedPromise();
    };
    _proto.unlayoutCallback = function unlayoutCallback() {
      this.childLayoutManager_.wasUnlaidOut();
      return true;
    };
    _proto.pauseCallback = function pauseCallback() {
      this.carousel_.pauseLayout();
    };
    _proto.resumeCallback = function resumeCallback() {
      this.carousel_.resumeLayout();
    };
    _proto.mutatedAttributesCallback = function mutatedAttributesCallback(mutations) {
      if (mutations["slide"] !== void 0) {
        this.carousel_.goToSlide(Number(mutations["slide"]));
      }
    };
    _proto.goToSlide = function goToSlide(index) {
      this.carousel_.goToSlide(index, {
        smoothScroll: false
      });
    };
    _proto.interactionNext = function interactionNext() {
      if (this.type_ == CarouselType.CAROUSEL) {
        this.moveScrollOneViewport_(true);
        return;
      }
      this.carousel_.next(ActionSource.GENERIC_HIGH_TRUST);
    };
    _proto.interactionPrev = function interactionPrev() {
      if (this.type_ == CarouselType.CAROUSEL) {
        this.moveScrollOneViewport_(false);
        return;
      }
      this.carousel_.prev(ActionSource.GENERIC_HIGH_TRUST);
    };
    _proto.moveScrollOneViewport_ = function moveScrollOneViewport_(forwards) {
      var el = devAssert2(this.scrollContainer_);
      var _computedStyle = computedStyle(this.win, el), direction = _computedStyle.direction;
      var forwardsMultiplier = forwards ? 1 : -1;
      var directionMulitplier = direction == "rtl" ? -1 : 1;
      el.scrollLeft += el.offsetWidth * forwardsMultiplier * directionMulitplier;
    };
    _proto.renderContainerDom_ = function renderContainerDom_() {
      var html2 = htmlFor(this.element);
      return html2(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(['\n      <div class="i-amphtml-carousel-content">\n        <div class="i-amphtml-carousel-scroll"></div>\n        <div class="i-amphtml-carousel-arrows">\n          <div\n            tabindex="0"\n            class="amp-carousel-button amp-carousel-button-prev"\n          ></div>\n          <div\n            tabindex="0"\n            class="amp-carousel-button amp-carousel-button-next"\n          ></div>\n        </div>\n      </div>\n    '])));
    };
    _proto.getActionSource_ = function getActionSource_(trust) {
      return trust >= ActionTrust_Enum.DEFAULT ? ActionSource.GENERIC_HIGH_TRUST : ActionSource.GENERIC_LOW_TRUST;
    };
    _proto.configureCarousel_ = function configureCarousel_(slides) {
      var _this4 = this;
      var dir = this.element.getAttribute("dir") || computedStyle(this.win, this.element).direction;
      var loop = this.element.hasAttribute("loop");
      var autoplay = this.element.getAttribute("autoplay");
      var delay = this.element.getAttribute("delay");
      var type = this.element.getAttribute("type");
      var autoAdvance = autoplay != null;
      var autoAdvanceLoops = autoplay ? Number(autoplay) : Number.POSITIVE_INFINITY;
      var autoAdvanceInterval = Math.max(Number(delay) || 5e3, 1e3);
      this.carousel_.updateForwards(dir != "rtl");
      this.carousel_.updateLoop(loop || autoAdvance);
      this.carousel_.updateAutoAdvanceLoops(autoAdvanceLoops);
      this.carousel_.updateAutoAdvanceInterval(autoAdvanceInterval);
      this.mutateElement(function() {
        _this4.prevButton_.setAttribute("dir", dir);
        _this4.nextButton_.setAttribute("dir", dir);
      });
      this.toggleAutoplay_(autoAdvance);
      this.updateType_(type, slides);
      this.updateUi_();
    };
    _proto.getPrevIndex_ = function getPrevIndex_(currentIndex) {
      return currentIndex - 1 >= 0 ? currentIndex - 1 : this.element.hasAttribute("loop") ? this.slides_.length - 1 : null;
    };
    _proto.getNextIndex_ = function getNextIndex_(currentIndex) {
      return currentIndex + 1 < this.slides_.length ? currentIndex + 1 : this.element.hasAttribute("loop") ? 0 : null;
    };
    _proto.getNextButtonTitlePrefix_ = function getNextButtonTitlePrefix_() {
      return this.element.getAttribute("data-next-button-aria-label") || "Next item in carousel";
    };
    _proto.getPrevButtonTitlePrefix_ = function getPrevButtonTitlePrefix_() {
      return this.element.getAttribute("data-prev-button-aria-label") || "Previous item in carousel";
    };
    _proto.getButtonSuffixFormat_ = function getButtonSuffixFormat_() {
      return this.element.getAttribute("data-button-count-format") || "(%s of %s)";
    };
    _proto.getButtonTitleSuffix_ = function getButtonTitleSuffix_(buttonIndex) {
      var index = String(buttonIndex + 1);
      var count = String(this.slides_.length);
      return " " + this.getButtonSuffixFormat_().replace("%s", index).replace("%s", count);
    };
    _proto.getPrevButtonTitle_ = function getPrevButtonTitle_(index) {
      var prevIndex = this.getPrevIndex_(index);
      var labelIndex = prevIndex == null ? 0 : prevIndex;
      return this.getPrevButtonTitlePrefix_() + this.getButtonTitleSuffix_(labelIndex);
    };
    _proto.getNextButtonTitle_ = function getNextButtonTitle_(index) {
      var nextIndex = this.getNextIndex_(index);
      var labelIndex = nextIndex == null ? this.slides_.length - 1 : nextIndex;
      return this.getNextButtonTitlePrefix_() + this.getButtonTitleSuffix_(labelIndex);
    };
    _proto.updateUi_ = function updateUi_() {
      var index = this.carousel_.getCurrentIndex();
      var bothDisabled = this.hadTouch_ && !this.showControls_;
      var prevDisabled = bothDisabled || this.carousel_.isAtStart();
      var nextDisabled = bothDisabled || this.carousel_.isAtEnd();
      this.prevButton_.classList.toggle("amp-disabled", prevDisabled);
      this.prevButton_.setAttribute("aria-disabled", prevDisabled);
      this.prevButton_.title = this.getPrevButtonTitle_(index);
      this.prevButton_.tabIndex = prevDisabled ? -1 : 0;
      this.nextButton_.classList.toggle("amp-disabled", nextDisabled);
      this.nextButton_.setAttribute("aria-disabled", nextDisabled);
      this.nextButton_.title = this.getNextButtonTitle_(index);
      this.nextButton_.tabIndex = nextDisabled ? -1 : 0;
    };
    _proto.updateType_ = function updateType_(type, slides) {
      var _this5 = this;
      var isSlides = type == CarouselType.SLIDES;
      this.type_ = isSlides ? CarouselType.SLIDES : CarouselType.CAROUSEL;
      this.carousel_.updateAlignment(isSlides ? "center" : "start");
      this.carousel_.updateHideScrollbar(isSlides);
      this.carousel_.updateMixedLength(!isSlides);
      this.carousel_.updateSnap(isSlides);
      var buttonRole = isSlides ? "button" : "presentation";
      this.prevButton_.setAttribute("role", buttonRole);
      this.nextButton_.setAttribute("role", buttonRole);
      this.slides_ = slides.map(function(slide) {
        slide.classList.add("amp-carousel-slide");
        if (isSlides) {
          var wrapper = document.createElement("div");
          wrapper.classList.add("i-amphtml-carousel-slotted", "i-amphtml-carousel-wrapper");
          wrapper.appendChild(slide);
          return wrapper;
        }
        return slide;
      });
      this.slides_.forEach(function(slide) {
        _this5.scrollContainer_.appendChild(slide);
        if (isSlides) {
          slide.classList.add("i-amphtml-carousel-slide-item");
        } else {
          slide.classList.add("amp-scrollable-carousel-slide");
        }
      });
    };
    _proto.updateCurrentIndex_ = function updateCurrentIndex_(index, actionSource) {
      var prevIndex = this.currentIndex_;
      this.currentIndex_ = index;
      if (prevIndex == null) {
        return;
      }
      var data = dict({
        "index": index
      });
      var name = "slideChange";
      var isHighTrust = this.isHighTrustActionSource_(actionSource);
      var trust = isHighTrust ? ActionTrust_Enum.HIGH : ActionTrust_Enum.LOW;
      var dataWithActionTrust = dict({
        "index": index,
        "actionTrust": trust
      });
      var action = createCustomEvent(this.win, "slidescroll." + name, data);
      this.action_.trigger(this.element, name, action, trust);
      dispatchCustomEvent(this.element, name, dataWithActionTrust);
      this.triggerAnalyticsEvent_(prevIndex, index);
    };
    _proto.getSlideId_ = function getSlideId_(index) {
      if (index == null) {
        return "null";
      }
      return this.slides_[index].getAttribute("data-slide-id") || String(index);
    };
    _proto.triggerAnalyticsEvent_ = function triggerAnalyticsEvent_(prevIndex, newIndex) {
      var delta = newIndex - prevIndex;
      var total = this.slides_.length;
      var isNext = this.carousel_.isLooping() ? delta > 0 && delta / total < 0.5 || delta < 0 && delta / total < -0.5 : delta > 0;
      var directionEventName = isNext ? "amp-carousel-next" : "amp-carousel-prev";
      var vars = dict({
        "fromSlide": this.getSlideId_(prevIndex),
        "toSlide": this.getSlideId_(newIndex)
      });
      triggerAnalyticsEvent(this.element, "amp-carousel-change", vars);
      triggerAnalyticsEvent(this.element, directionEventName, vars);
    };
    _proto.isHighTrustActionSource_ = function isHighTrustActionSource_(actionSource) {
      return actionSource == ActionSource.WHEEL || actionSource == ActionSource.TOUCH || actionSource == ActionSource.GENERIC_HIGH_TRUST;
    };
    _proto.handlePropagationInViewer_ = function handlePropagationInViewer_() {
      if (!this.isViewerEmbeded_) {
        return;
      }
      listen(this.scrollContainer_, "touchmove", function(event) {
        event.shouldViewerCancelPropagation = true;
      });
    };
    _proto.toggleAutoplay_ = function toggleAutoplay_(enable) {
      this.autoplay_ = enable !== void 0 ? enable : !this.autoplay_;
      this.carousel_.updateAutoAdvance(this.autoplay_);
    };
    _proto.onScrollStarted_ = function onScrollStarted_() {
      this.childLayoutManager_.setQueueChanges(this.isIos_);
    };
    _proto.onScrollPositionChanged_ = function onScrollPositionChanged_() {
      this.childLayoutManager_.flushChanges();
      this.childLayoutManager_.setQueueChanges(false);
      this.updateUi_();
    };
    _proto.onIndexChanged_ = function onIndexChanged_(event) {
      var detail = getDetail(event);
      var index = detail["index"];
      var actionSource = detail["actionSource"];
      this.hadTouch_ = this.hadTouch_ || actionSource == ActionSource.TOUCH;
      this.updateUi_();
      if (this.type_ == CarouselType.CAROUSEL) {
        return;
      }
      this.updateCurrentIndex_(index, actionSource);
    };
    return AmpCarousel2;
  }(AMP.BaseElement);
  AMP.registerElement("amp-carousel", AmpCarousel, CSS2);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-carousel-0.2.max.js.map
