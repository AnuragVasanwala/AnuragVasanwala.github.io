(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-story-captions",ev:"0.1",l:true,f:(function(AMP,_){
(function() {
  // src/core/types/array.js
  function toArray(arrayLike) {
    return arrayLike ? Array.prototype.slice.call(arrayLike) : [];
  }
  var isArray = Array.isArray;

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
  function applyFillContent(element, opt_replacedContent) {
    element.classList.add("i-amphtml-fill-content");
    if (opt_replacedContent) {
      element.classList.add("i-amphtml-replaced-content");
    }
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
  self.__AMP_LOG = self.__AMP_LOG || {
    user: null,
    dev: null,
    userForEmbed: null
  };
  var logs = self.__AMP_LOG;

  // src/utils/event-helper.js
  function listen(element, eventType, listener, opt_evtListenerOpts) {
    return internalListenImplementation(element, eventType, listener, opt_evtListenerOpts);
  }

  // src/core/dom/index.js
  function removeElement(element) {
    var _element$parentElemen;
    (_element$parentElemen = element.parentElement) == null ? void 0 : _element$parentElemen.removeChild(element);
  }
  function removeChildren(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
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
  function isVar(property) {
    return property.startsWith("--");
  }

  // extensions/amp-story-captions/0.1/track-renderer.js
  var FUTURE_CUE_SECTION_CLASS = "amp-story-captions-future";
  function parseTimestamp(timestamp) {
    var match = /^(?:(\d{2,}):)?(\d{2}):(\d{2})\.(\d{3})$/.exec(timestamp);
    if (!match) {
      return null;
    }
    var hours = match[1] ? parseInt(match[1], 10) : 0;
    var minutes = parseInt(match[2], 10);
    var seconds = parseInt(match[3], 10);
    var milliseconds = parseInt(match[4], 10);
    return hours * 3600 + minutes * 60 + seconds + milliseconds / 1e3;
  }
  var TrackRenderer = /* @__PURE__ */ function() {
    function TrackRenderer2(video, track, container) {
      var _this = this;
      this.video_ = video;
      this.track_ = track;
      this.element_ = container.ownerDocument.createElement("div");
      container.appendChild(this.element_);
      this.cueTimestamps_ = [];
      this.render_();
      this.cueChangeUnlistener_ = listen(track, "cuechange", function() {
        _this.render_();
      });
      this.timeUpdateUnlistener_ = listen(video, "timeupdate", function() {
        _this.updateTime_();
      });
    }
    var _proto = TrackRenderer2.prototype;
    _proto.dispose = function dispose() {
      this.cueChangeUnlistener_();
      this.timeUpdateUnlistener_();
      removeElement(this.element_);
      this.video_ = null;
      this.track_ = null;
    };
    _proto.render_ = function render_() {
      var _this2 = this;
      removeChildren(this.element_);
      this.cueTimestamps_.length = 0;
      toArray(this.track_.activeCues).forEach(function(cue) {
        var cueElement = _this2.element_.ownerDocument.createElement("div");
        setStyles(cueElement, {
          "position": "absolute",
          "bottom": 0,
          "left": 0,
          "right": 0
        });
        var html = cue.getCueAsHTML();
        var section = _this2.element_.ownerDocument.createElement("span");
        cueElement.appendChild(section);
        var timestamps = [];
        toArray(html.childNodes).forEach(function(node) {
          if (node.target === "timestamp") {
            var timestamp = parseTimestamp(node.data);
            if (timestamp !== null) {
              timestamps.push(timestamp);
              section = _this2.element_.ownerDocument.createElement("span");
              cueElement.appendChild(section);
            }
          } else {
            section.appendChild(node);
          }
        });
        _this2.cueTimestamps_.push(timestamps);
        _this2.element_.appendChild(cueElement);
      });
      this.updateTime_();
    };
    _proto.updateTime_ = function updateTime_() {
      var _this3 = this;
      var videoTime = this.video_.currentTime;
      toArray(this.element_.childNodes).forEach(function(cue, i) {
        toArray(cue.childNodes).forEach(function(section, j) {
          if (j > 0) {
            section.classList.toggle(FUTURE_CUE_SECTION_CLASS, _this3.cueTimestamps_[i][j - 1] > videoTime);
          }
        });
      });
    };
    return TrackRenderer2;
  }();

  // build/amp-story-captions-0.1.css.js
  var CSS2 = "amp-story-captions{white-space:pre-wrap}.amp-story-captions-future{color:gray}\n/*# sourceURL=/extensions/amp-story-captions/0.1/amp-story-captions.css*/";

  // extensions/amp-story-captions/0.1/amp-story-captions.js
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
  var AmpStoryCaptions = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpStoryCaptions2, _AMP$BaseElement);
    var _super = _createSuper(AmpStoryCaptions2);
    function AmpStoryCaptions2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.container_ = null;
      _this.video_ = null;
      _this.textTracksChangeUnlistener_ = null;
      _this.trackRenderers_ = [];
      return _this;
    }
    var _proto = AmpStoryCaptions2.prototype;
    _proto.buildCallback = function buildCallback() {
      this.container_ = this.element.ownerDocument.createElement("div");
      this.element.appendChild(this.container_);
      applyFillContent(this.container_, true);
    };
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return isLayoutSizeDefined(layout);
    };
    _proto.setVideoElement = function setVideoElement(video) {
      var _this2 = this;
      if (this.textTracksChangeUnlistener_) {
        this.textTracksChangeUnlistener_();
      }
      this.video_ = video;
      this.updateTracks_();
      this.textTracksChangeUnlistener_ = listen(video.textTracks, "change", function() {
        _this2.updateTracks_();
      });
    };
    _proto.updateTracks_ = function updateTracks_() {
      var _this3 = this;
      while (this.trackRenderers_.length) {
        this.trackRenderers_.pop().dispose();
      }
      toArray(this.video_.textTracks).forEach(function(track) {
        if (track.mode === "showing" || track.mode === "hidden") {
          track.mode = "hidden";
          _this3.trackRenderers_.push(new TrackRenderer(_this3.video_, track, _this3.container_));
        }
      });
    };
    return AmpStoryCaptions2;
  }(AMP.BaseElement);
  AMP.registerElement("amp-story-captions", AmpStoryCaptions, CSS2);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-story-captions-0.1.max.js.map
