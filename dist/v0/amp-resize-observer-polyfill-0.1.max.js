(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-resize-observer-polyfill",ev:"0.1",l:true,f:(function(AMP,_){
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

  // src/polyfills/stubs/resize-observer-stub.js
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
  var UPGRADERS = "_upgraders";
  var STUB = "_stub";
  function upgradePolyfill(win, installer) {
    var Stub = win.ResizeObserver[STUB];
    if (Stub) {
      delete win.ResizeObserver;
      delete win.ResizeObserverEntry;
      installer();
      var Polyfill = win.ResizeObserver;
      var upgraders = Stub[UPGRADERS].slice(0);
      var microtask = resolvedPromise();
      var upgrade2 = function upgrade3(upgrader2) {
        microtask.then(function() {
          return upgrader2(Polyfill);
        });
      };
      for (var _iterator = _createForOfIteratorHelperLoose(upgraders), _step; !(_step = _iterator()).done; ) {
        var upgrader = _step.value;
        upgrade2(upgrader);
      }
      Stub[UPGRADERS] = {
        "push": upgrade2
      };
    } else {
      installer();
    }
  }
  var ResizeObserverStub = /* @__PURE__ */ function() {
    function ResizeObserverStub2(callback) {
      this.callback_ = callback;
      this.elements_ = [];
      this.inst_ = null;
      ResizeObserverStub2[UPGRADERS].push(this.upgrade_.bind(this));
    }
    var _proto = ResizeObserverStub2.prototype;
    _proto.disconnect = function disconnect() {
      if (this.inst_) {
        this.inst_.disconnect();
      } else {
        this.elements_.length = 0;
      }
    };
    _proto.observe = function observe(target) {
      if (this.inst_) {
        this.inst_.observe(target);
      } else {
        if (this.elements_.indexOf(target) == -1) {
          this.elements_.push(target);
        }
      }
    };
    _proto.unobserve = function unobserve(target) {
      if (this.inst_) {
        this.inst_.unobserve(target);
      } else {
        var index = this.elements_.indexOf(target);
        if (index != -1) {
          this.elements_.splice(index, 1);
        }
      }
    };
    _proto.upgrade_ = function upgrade_(Ctor) {
      var inst = new Ctor(this.callback_);
      this.inst_ = inst;
      for (var _iterator2 = _createForOfIteratorHelperLoose(this.elements_), _step2; !(_step2 = _iterator2()).done; ) {
        var e = _step2.value;
        inst.observe(e);
      }
      this.elements_.length = 0;
    };
    return ResizeObserverStub2;
  }();
  ResizeObserverStub[UPGRADERS] = [];

  // src/core/types/array.js
  var isArray = Array.isArray;

  // src/core/types/object/index.js
  var _Object$prototype = Object.prototype;
  var hasOwn_ = _Object$prototype.hasOwnProperty;
  var toString_ = _Object$prototype.toString;

  // src/core/mode/minified.js
  function isMinified() {
    return false;
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
  function dev() {
    return logs.dev || (logs.dev = callLogConstructor(function(logNum) {
      return logNum >= 3 ? LogLevel_Enum.FINE : logNum >= 2 ? LogLevel_Enum.INFO : LogLevel_Enum.OFF;
    }));
  }
  function devAssert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    if (isMinified()) {
      return shouldBeTrueish;
    }
    if (self.__AMP_ASSERTION_CHECK) {
      console.log("__devAssert_sentinel__");
    }
    return dev().assert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
  }

  // src/service-helpers.js
  function registerServiceBuilder(win, id, constructor, opt_instantiate) {
    win = getTopWindow(win);
    registerServiceInternal(win, win, id, constructor);
    if (opt_instantiate) {
      getServiceInternal(win, id);
    }
  }
  function getTopWindow(win) {
    return win.__AMP_TOP || (win.__AMP_TOP = win);
  }
  function getServiceInternal(holder, id) {
    devAssert(isServiceRegistered(holder, id), "Expected service " + id + " to be registered");
    var services = getServices(holder);
    var s = services[id];
    if (!s.obj) {
      devAssert(s.ctor, "Service " + id + " registered without ctor nor impl.");
      devAssert(s.context, "Service " + id + " registered without context.");
      s.obj = new s.ctor(s.context);
      devAssert(s.obj, "Service " + id + " constructed to null.");
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

  // third_party/resize-observer-polyfill/ResizeObserver.install.js
  function installResizeObserver(global) {
    (function(global2, factory) {
      global2.ResizeObserver = factory();
    })(global, function() {
      "use strict";
      var MapShim = function() {
        if (typeof Map !== "undefined") {
          return Map;
        }
        function getIndex(arr, key) {
          var result = -1;
          arr.some(function(entry, index2) {
            if (entry[0] === key) {
              result = index2;
              return true;
            }
            return false;
          });
          return result;
        }
        return function() {
          function class_1() {
            this.__entries__ = [];
          }
          Object.defineProperty(class_1.prototype, "size", {
            get: function get() {
              return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
          });
          class_1.prototype.get = function(key) {
            var index2 = getIndex(this.__entries__, key);
            var entry = this.__entries__[index2];
            return entry && entry[1];
          };
          class_1.prototype.set = function(key, value) {
            var index2 = getIndex(this.__entries__, key);
            if (~index2) {
              this.__entries__[index2][1] = value;
            } else {
              this.__entries__.push([key, value]);
            }
          };
          class_1.prototype.delete = function(key) {
            var entries = this.__entries__;
            var index2 = getIndex(entries, key);
            if (~index2) {
              entries.splice(index2, 1);
            }
          };
          class_1.prototype.has = function(key) {
            return !!~getIndex(this.__entries__, key);
          };
          class_1.prototype.clear = function() {
            this.__entries__.splice(0);
          };
          class_1.prototype.forEach = function(callback, ctx) {
            if (ctx === void 0) {
              ctx = null;
            }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
              var entry = _a[_i];
              callback.call(ctx, entry[1], entry[0]);
            }
          };
          return class_1;
        }();
      }();
      var defineConfigurable = function(target, props) {
        for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
          var key = _a[_i];
          Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
          });
        }
        return target;
      };
      var global$1 = function() {
        if (typeof global !== "undefined" && global.Math === Math) {
          return global;
        }
        if (typeof self !== "undefined" && self.Math === Math) {
          return self;
        }
        if (typeof window !== "undefined" && window.Math === Math) {
          return window;
        }
        return Function("return this")();
      }();
      var getWindowOf = function(target) {
        var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
        return ownerGlobal || global$1;
      };
      var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
      var emptyRect = createRectInit(0, 0, 0, 0);
      function toFloat(value) {
        return parseFloat(value) || 0;
      }
      function getBordersSize(styles) {
        var positions = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          positions[_i - 1] = arguments[_i];
        }
        return positions.reduce(function(size, position) {
          var value = styles["border-" + position + "-width"];
          return size + toFloat(value);
        }, 0);
      }
      function getPaddings(styles) {
        var positions = ["top", "right", "bottom", "left"];
        var paddings = {};
        for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
          var position = positions_1[_i];
          var value = styles["padding-" + position];
          paddings[position] = toFloat(value);
        }
        return paddings;
      }
      function getSVGContentRect(target) {
        var bbox = target.getBBox();
        return createRectInit(0, 0, bbox.width, bbox.height);
      }
      function getHTMLElementContentRect(target) {
        var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
        if (!clientWidth && !clientHeight) {
          return emptyRect;
        }
        var styles = getWindowOf(target).getComputedStyle(target);
        var paddings = getPaddings(styles);
        var horizPad = paddings.left + paddings.right;
        var vertPad = paddings.top + paddings.bottom;
        var width = toFloat(styles.width), height = toFloat(styles.height);
        if (styles.boxSizing === "border-box") {
          if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, "left", "right") + horizPad;
          }
          if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, "top", "bottom") + vertPad;
          }
        }
        if (!isDocumentElement(target)) {
          var vertScrollbar = Math.round(width + horizPad) - clientWidth;
          var horizScrollbar = Math.round(height + vertPad) - clientHeight;
          if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
          }
          if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
          }
        }
        return createRectInit(paddings.left, paddings.top, width, height);
      }
      var isSVGGraphicsElement = function() {
        if (typeof SVGGraphicsElement !== "undefined") {
          return function(target) {
            return target instanceof getWindowOf(target).SVGGraphicsElement;
          };
        }
        return function(target) {
          return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === "function";
        };
      }();
      function isDocumentElement(target) {
        return target === getWindowOf(target).document.documentElement;
      }
      function getContentRect(target) {
        if (!isBrowser) {
          return emptyRect;
        }
        if (isSVGGraphicsElement(target)) {
          return getSVGContentRect(target);
        }
        return getHTMLElementContentRect(target);
      }
      function createReadOnlyRect(_a) {
        var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
        var rect = Object.create(Constr.prototype);
        defineConfigurable(rect, {
          x: x,
          y: y,
          width: width,
          height: height,
          top: y,
          right: x + width,
          bottom: height + y,
          left: x
        });
        return rect;
      }
      function createRectInit(x, y, width, height) {
        return {
          x: x,
          y: y,
          width: width,
          height: height
        };
      }
      var ResizeObservation = function() {
        function ResizeObservation2(target, rootNode) {
          this.broadcastWidth = 0;
          this.broadcastHeight = 0;
          this.contentRect_ = createRectInit(0, 0, 0, 0);
          this.target = target;
          this.rootNode = rootNode;
        }
        ResizeObservation2.prototype.isActive = function() {
          var rect = getContentRect(this.target);
          this.contentRect_ = rect;
          return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
        };
        ResizeObservation2.prototype.broadcastRect = function() {
          var rect = this.contentRect_;
          this.broadcastWidth = rect.width;
          this.broadcastHeight = rect.height;
          return rect;
        };
        return ResizeObservation2;
      }();
      var ResizeObserverEntry = function() {
        function ResizeObserverEntry2(target, rectInit) {
          var contentRect = createReadOnlyRect(rectInit);
          defineConfigurable(this, {
            target: target,
            contentRect: contentRect
          });
        }
        return ResizeObserverEntry2;
      }();
      function getRootNode(node) {
        if (typeof node.getRootNode === "function") {
          return node.getRootNode();
        }
        var n;
        for (n = node; n.parentNode; n = n.parentNode) {
        }
        return n;
      }
      var intersectionObserverSupported = typeof IntersectionObserver !== "undefined";
      var ResizeObserverSPI = function() {
        function ResizeObserverSPI2(callback, controller, callbackCtx) {
          var _this = this;
          this.activeObservations_ = [];
          this.observations_ = new MapShim();
          this.rootNodes_ = new MapShim();
          this.intersectionObserver_ = null;
          if (typeof callback !== "function") {
            throw new TypeError("The callback provided as parameter 1 is not a function.");
          }
          this.callback_ = callback;
          this.controller_ = controller;
          this.callbackCtx_ = callbackCtx;
          if (intersectionObserverSupported) {
            this.intersectionObserver_ = new IntersectionObserver(function() {
              return _this.checkRootChanges_();
            });
          }
        }
        ResizeObserverSPI2.prototype.observe = function(target) {
          if (!arguments.length) {
            throw new TypeError("1 argument required, but only 0 present.");
          }
          if (typeof Element === "undefined" || !(Element instanceof Object)) {
            return;
          }
          if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
          }
          var observations = this.observations_;
          if (observations.has(target)) {
            return;
          }
          var rootNode = getControlledRootNode(target, target.ownerDocument);
          observations.set(target, new ResizeObservation(target, rootNode));
          var rootNodeTargets = this.rootNodes_.get(rootNode);
          if (!rootNodeTargets) {
            rootNodeTargets = [];
            this.rootNodes_.set(rootNode, rootNodeTargets);
            this.controller_.addObserver(rootNode, this);
          }
          rootNodeTargets.push(target);
          if (this.intersectionObserver_) {
            this.intersectionObserver_.observe(target);
          }
          this.controller_.refresh(rootNode);
        };
        ResizeObserverSPI2.prototype.unobserve = function(target) {
          if (!arguments.length) {
            throw new TypeError("1 argument required, but only 0 present.");
          }
          if (typeof Element === "undefined" || !(Element instanceof Object)) {
            return;
          }
          if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
          }
          var observations = this.observations_;
          var observation = observations.get(target);
          if (!observation) {
            return;
          }
          observations.delete(target);
          if (this.intersectionObserver_) {
            this.intersectionObserver_.unobserve(target);
          }
          var rootNode = observation.rootNode;
          var rootNodeTargets = this.rootNodes_.get(rootNode);
          if (rootNodeTargets) {
            var index2 = rootNodeTargets.indexOf(target);
            if (~index2) {
              rootNodeTargets.splice(index2, 1);
            }
            if (rootNodeTargets.length === 0) {
              this.rootNodes_.delete(rootNode);
              this.controller_.removeObserver(rootNode, this);
            }
          }
        };
        ResizeObserverSPI2.prototype.disconnect = function() {
          var _this = this;
          this.clearActive();
          this.observations_.clear();
          this.rootNodes_.forEach(function(_, rootNode) {
            _this.controller_.removeObserver(rootNode, _this);
          });
          this.rootNodes_.clear();
          if (this.intersectionObserver_) {
            this.intersectionObserver_.disconnect();
            this.intersectionObserver_ = null;
          }
        };
        ResizeObserverSPI2.prototype.gatherActive = function() {
          var _this = this;
          this.checkRootChanges_();
          this.clearActive();
          this.observations_.forEach(function(observation) {
            if (observation.isActive()) {
              _this.activeObservations_.push(observation);
            }
          });
        };
        ResizeObserverSPI2.prototype.broadcastActive = function() {
          if (!this.hasActive()) {
            return;
          }
          var ctx = this.callbackCtx_;
          var entries = this.activeObservations_.map(function(observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
          });
          this.callback_.call(ctx, entries, ctx);
          this.clearActive();
        };
        ResizeObserverSPI2.prototype.clearActive = function() {
          this.activeObservations_.splice(0);
        };
        ResizeObserverSPI2.prototype.hasActive = function() {
          return this.activeObservations_.length > 0;
        };
        ResizeObserverSPI2.prototype.checkRootChanges_ = function() {
          var _this = this;
          var changedRootTargets = null;
          this.observations_.forEach(function(observation) {
            var target = observation.target, oldRootNode = observation.rootNode;
            var rootNode = getControlledRootNode(target, oldRootNode);
            if (rootNode !== oldRootNode) {
              if (!changedRootTargets) {
                changedRootTargets = [];
              }
              changedRootTargets.push(target);
            }
          });
          if (changedRootTargets) {
            changedRootTargets.forEach(function(target) {
              _this.unobserve(target);
              _this.observe(target);
            });
          }
        };
        return ResizeObserverSPI2;
      }();
      function getControlledRootNode(target, def) {
        var rootNode = getRootNode(target);
        if (rootNode.nodeType === 9 || rootNode.nodeType === 11) {
          return rootNode;
        }
        return def;
      }
      var requestAnimationFrame$1 = function() {
        if (typeof requestAnimationFrame === "function") {
          return requestAnimationFrame.bind(global$1);
        }
        return function(callback) {
          return setTimeout(function() {
            return callback(Date.now());
          }, 1e3 / 60);
        };
      }();
      var trailingTimeout = 2;
      function throttle(callback, delay) {
        var leadingCall = false, trailingCall = false, lastCallTime = 0;
        function resolvePending() {
          if (leadingCall) {
            leadingCall = false;
            callback();
          }
          if (trailingCall) {
            proxy();
          }
        }
        function timeoutCallback() {
          requestAnimationFrame$1(resolvePending);
        }
        function proxy() {
          var timeStamp = Date.now();
          if (leadingCall) {
            if (timeStamp - lastCallTime < trailingTimeout) {
              return;
            }
            trailingCall = true;
          } else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
          }
          lastCallTime = timeStamp;
        }
        return proxy;
      }
      var REFRESH_DELAY = 20;
      var transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
      var mutationObserverSupported = typeof MutationObserver !== "undefined";
      var ResizeObserverController = function() {
        function ResizeObserverController2(rootNode, globalController) {
          this.rootNode_ = null;
          this.globalController_ = null;
          this.connected_ = false;
          this.mutationEventsAdded_ = false;
          this.mutationsObserver_ = null;
          this.hostObserver_ = null;
          this.observers_ = [];
          this.rootNode_ = rootNode;
          this.globalController_ = globalController;
          this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
          this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
        }
        ResizeObserverController2.prototype.addObserver = function(observer) {
          if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
          }
          if (!this.connected_) {
            this.connect_();
          }
        };
        ResizeObserverController2.prototype.removeObserver = function(observer) {
          var observers2 = this.observers_;
          var index2 = observers2.indexOf(observer);
          if (~index2) {
            observers2.splice(index2, 1);
          }
          if (!observers2.length && this.connected_) {
            this.disconnect_();
          }
        };
        ResizeObserverController2.prototype.refresh = function() {
          var changesDetected = this.updateObservers_();
          if (changesDetected) {
            this.refresh();
          }
        };
        ResizeObserverController2.prototype.updateObservers_ = function() {
          var activeObservers = this.observers_.filter(function(observer) {
            return observer.gatherActive(), observer.hasActive();
          });
          activeObservers.forEach(function(observer) {
            return observer.broadcastActive();
          });
          return activeObservers.length > 0;
        };
        ResizeObserverController2.prototype.connect_ = function() {
          if (!isBrowser || this.connected_) {
            return;
          }
          var rootNode = this.rootNode_;
          var doc = rootNode.ownerDocument || rootNode;
          var win = doc.defaultView;
          rootNode.addEventListener("transitionend", this.onTransitionEnd_, true);
          if (win) {
            win.addEventListener("resize", this.refresh, true);
          }
          if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            try {
              this.mutationsObserver_.observe(rootNode, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
              });
            } catch (e) {
            }
            if (rootNode.host) {
              this.mutationsObserver_.observe(rootNode.host, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
              });
            }
          } else {
            rootNode.addEventListener("DOMSubtreeModified", this.refresh, true);
            this.mutationEventsAdded_ = true;
          }
          if (rootNode.host) {
            this.hostObserver_ = new ResizeObserverSPI(this.refresh, this.globalController_, this);
            this.hostObserver_.observe(rootNode.host);
          }
          this.connected_ = true;
        };
        ResizeObserverController2.prototype.disconnect_ = function() {
          if (!isBrowser || !this.connected_) {
            return;
          }
          var rootNode = this.rootNode_;
          var doc = rootNode.ownerDocument || rootNode;
          var win = doc.defaultView;
          rootNode.removeEventListener("transitionend", this.onTransitionEnd_, true);
          if (win) {
            win.removeEventListener("resize", this.refresh, true);
          }
          if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
          }
          if (this.mutationEventsAdded_) {
            rootNode.removeEventListener("DOMSubtreeModified", this.refresh, true);
          }
          if (this.hostObserver_) {
            this.hostObserver_.disconnect();
          }
          this.hostObserver_ = null;
          this.mutationsObserver_ = null;
          this.mutationEventsAdded_ = false;
          this.connected_ = false;
        };
        ResizeObserverController2.prototype.onTransitionEnd_ = function(_a) {
          var _b = _a.propertyName, propertyName = _b === void 0 ? "" : _b;
          var isReflowProperty = transitionKeys.some(function(key) {
            return !!~propertyName.indexOf(key);
          });
          if (isReflowProperty) {
            this.refresh();
          }
        };
        return ResizeObserverController2;
      }();
      var GlobalResizeObserverController = function() {
        function GlobalResizeObserverController2() {
          this.rootNodeControllers_ = typeof WeakMap !== "undefined" ? new WeakMap() : new Map();
        }
        GlobalResizeObserverController2.prototype.addObserver = function(rootNode, observer) {
          var rootNodeController = this.rootNodeControllers_.get(rootNode);
          if (!rootNodeController) {
            rootNodeController = new ResizeObserverController(rootNode, this);
            this.rootNodeControllers_.set(rootNode, rootNodeController);
          }
          rootNodeController.addObserver(observer);
        };
        GlobalResizeObserverController2.prototype.removeObserver = function(rootNode, observer) {
          var rootNodeController = this.rootNodeControllers_.get(rootNode);
          if (rootNodeController) {
            rootNodeController.removeObserver(observer);
          }
        };
        GlobalResizeObserverController2.prototype.refresh = function(rootNode) {
          var rootNodeController = this.rootNodeControllers_.get(rootNode);
          if (rootNodeController) {
            rootNodeController.refresh();
          }
        };
        GlobalResizeObserverController2.getInstance = function() {
          if (!this.instance_) {
            this.instance_ = new GlobalResizeObserverController2();
          }
          return this.instance_;
        };
        GlobalResizeObserverController2.instance_ = null;
        return GlobalResizeObserverController2;
      }();
      var observers = typeof WeakMap !== "undefined" ? new WeakMap() : new MapShim();
      var ResizeObserver = function() {
        function ResizeObserver2(callback) {
          if (!(this instanceof ResizeObserver2)) {
            throw new TypeError("Cannot call a class as a function.");
          }
          if (!arguments.length) {
            throw new TypeError("1 argument required, but only 0 present.");
          }
          var controller = GlobalResizeObserverController.getInstance();
          var observer = new ResizeObserverSPI(callback, controller, this);
          observers.set(this, observer);
        }
        return ResizeObserver2;
      }();
      ["observe", "unobserve", "disconnect"].forEach(function(method) {
        ResizeObserver.prototype[method] = function() {
          var _a;
          return (_a = observers.get(this))[method].apply(_a, arguments);
        };
      });
      var index = function() {
        if (typeof global$1.ResizeObserver !== "undefined") {
          return global$1.ResizeObserver;
        }
        return ResizeObserver;
      }();
      return index;
    });
  }

  // extensions/amp-resize-observer-polyfill/0.1/amp-resize-observer-polyfill.js
  var TAG = "amp-resize-observer-polyfill";
  function upgrade(win) {
    upgradePolyfill(win, function() {
      installResizeObserver(win);
    });
    return {};
  }
  function upgradeResizeObserverPolyfill(win) {
    registerServiceBuilder(win, TAG, upgrade, true);
  }
  upgradeResizeObserverPolyfill(window);
})();
})});
//# sourceMappingURL=amp-resize-observer-polyfill-0.1.max.js.map
