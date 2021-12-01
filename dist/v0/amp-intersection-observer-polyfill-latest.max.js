(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-intersection-observer-polyfill",ev:"0.1",l:true,f:(function(AMP,_){
(function() {
  // node_modules/intersection-observer/intersection-observer.install.js
  function installIntersectionObserver() {
    (function() {
      "use strict";
      if (typeof window !== "object") {
        return;
      }
      if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
        if (!("isIntersecting" in window.IntersectionObserverEntry.prototype)) {
          Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
            get: function get() {
              return this.intersectionRatio > 0;
            }
          });
        }
        return;
      }
      function getFrameElement(doc) {
        try {
          return doc.defaultView && doc.defaultView.frameElement || null;
        } catch (e) {
          return null;
        }
      }
      var document = function(startDoc) {
        var doc = startDoc;
        var frame = getFrameElement(doc);
        while (frame) {
          doc = frame.ownerDocument;
          frame = getFrameElement(doc);
        }
        return doc;
      }(window.document);
      var registry = [];
      var crossOriginUpdater = null;
      var crossOriginRect = null;
      function IntersectionObserverEntry(entry) {
        this.time = entry.time;
        this.target = entry.target;
        this.rootBounds = ensureDOMRect(entry.rootBounds);
        this.boundingClientRect = ensureDOMRect(entry.boundingClientRect);
        this.intersectionRect = ensureDOMRect(entry.intersectionRect || getEmptyRect());
        this.isIntersecting = !!entry.intersectionRect;
        var targetRect = this.boundingClientRect;
        var targetArea = targetRect.width * targetRect.height;
        var intersectionRect = this.intersectionRect;
        var intersectionArea = intersectionRect.width * intersectionRect.height;
        if (targetArea) {
          this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
        } else {
          this.intersectionRatio = this.isIntersecting ? 1 : 0;
        }
      }
      function IntersectionObserver(callback, opt_options) {
        var options = opt_options || {};
        if (typeof callback != "function") {
          throw new Error("callback must be a function");
        }
        if (options.root && options.root.nodeType != 1 && options.root.nodeType != 9) {
          throw new Error("root must be a Document or Element");
        }
        this._checkForIntersections = throttle(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);
        this._callback = callback;
        this._observationTargets = [];
        this._queuedEntries = [];
        this._rootMarginValues = this._parseRootMargin(options.rootMargin);
        this.thresholds = this._initThresholds(options.threshold);
        this.root = options.root || null;
        this.rootMargin = this._rootMarginValues.map(function(margin) {
          return margin.value + margin.unit;
        }).join(" ");
        this._monitoringDocuments = [];
        this._monitoringUnsubscribes = [];
      }
      IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;
      IntersectionObserver.prototype.POLL_INTERVAL = null;
      IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;
      IntersectionObserver._setupCrossOriginUpdater = function() {
        if (!crossOriginUpdater) {
          crossOriginUpdater = function crossOriginUpdater2(boundingClientRect, intersectionRect) {
            if (!boundingClientRect || !intersectionRect) {
              crossOriginRect = getEmptyRect();
            } else {
              crossOriginRect = convertFromParentRect(boundingClientRect, intersectionRect);
            }
            registry.forEach(function(observer) {
              observer._checkForIntersections();
            });
          };
        }
        return crossOriginUpdater;
      };
      IntersectionObserver._resetCrossOriginUpdater = function() {
        crossOriginUpdater = null;
        crossOriginRect = null;
      };
      IntersectionObserver.prototype.observe = function(target) {
        var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
          return item.element == target;
        });
        if (isTargetAlreadyObserved) {
          return;
        }
        if (!(target && target.nodeType == 1)) {
          throw new Error("target must be an Element");
        }
        this._registerInstance();
        this._observationTargets.push({
          element: target,
          entry: null
        });
        this._monitorIntersections(target.ownerDocument);
        this._checkForIntersections();
      };
      IntersectionObserver.prototype.unobserve = function(target) {
        this._observationTargets = this._observationTargets.filter(function(item) {
          return item.element != target;
        });
        this._unmonitorIntersections(target.ownerDocument);
        if (this._observationTargets.length == 0) {
          this._unregisterInstance();
        }
      };
      IntersectionObserver.prototype.disconnect = function() {
        this._observationTargets = [];
        this._unmonitorAllIntersections();
        this._unregisterInstance();
      };
      IntersectionObserver.prototype.takeRecords = function() {
        var records = this._queuedEntries.slice();
        this._queuedEntries = [];
        return records;
      };
      IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
        var threshold = opt_threshold || [0];
        if (!Array.isArray(threshold))
          threshold = [threshold];
        return threshold.sort().filter(function(t, i, a) {
          if (typeof t != "number" || isNaN(t) || t < 0 || t > 1) {
            throw new Error("threshold must be a number between 0 and 1 inclusively");
          }
          return t !== a[i - 1];
        });
      };
      IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
        var marginString = opt_rootMargin || "0px";
        var margins = marginString.split(/\s+/).map(function(margin) {
          var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
          if (!parts) {
            throw new Error("rootMargin must be specified in pixels or percent");
          }
          return {
            value: parseFloat(parts[1]),
            unit: parts[2]
          };
        });
        margins[1] = margins[1] || margins[0];
        margins[2] = margins[2] || margins[0];
        margins[3] = margins[3] || margins[1];
        return margins;
      };
      IntersectionObserver.prototype._monitorIntersections = function(doc) {
        var win = doc.defaultView;
        if (!win) {
          return;
        }
        if (this._monitoringDocuments.indexOf(doc) != -1) {
          return;
        }
        var callback = this._checkForIntersections;
        var monitoringInterval = null;
        var domObserver = null;
        if (this.POLL_INTERVAL) {
          monitoringInterval = win.setInterval(callback, this.POLL_INTERVAL);
        } else {
          addEvent(win, "resize", callback, true);
          addEvent(doc, "scroll", callback, true);
          if (this.USE_MUTATION_OBSERVER && "MutationObserver" in win) {
            domObserver = new win.MutationObserver(callback);
            domObserver.observe(doc, {
              attributes: true,
              childList: true,
              characterData: true,
              subtree: true
            });
          }
        }
        this._monitoringDocuments.push(doc);
        this._monitoringUnsubscribes.push(function() {
          var win2 = doc.defaultView;
          if (win2) {
            if (monitoringInterval) {
              win2.clearInterval(monitoringInterval);
            }
            removeEvent(win2, "resize", callback, true);
          }
          removeEvent(doc, "scroll", callback, true);
          if (domObserver) {
            domObserver.disconnect();
          }
        });
        var rootDoc = this.root && (this.root.ownerDocument || this.root) || document;
        if (doc != rootDoc) {
          var frame = getFrameElement(doc);
          if (frame) {
            this._monitorIntersections(frame.ownerDocument);
          }
        }
      };
      IntersectionObserver.prototype._unmonitorIntersections = function(doc) {
        var index = this._monitoringDocuments.indexOf(doc);
        if (index == -1) {
          return;
        }
        var rootDoc = this.root && (this.root.ownerDocument || this.root) || document;
        var hasDependentTargets = this._observationTargets.some(function(item) {
          var itemDoc = item.element.ownerDocument;
          if (itemDoc == doc) {
            return true;
          }
          while (itemDoc && itemDoc != rootDoc) {
            var frame2 = getFrameElement(itemDoc);
            itemDoc = frame2 && frame2.ownerDocument;
            if (itemDoc == doc) {
              return true;
            }
          }
          return false;
        });
        if (hasDependentTargets) {
          return;
        }
        var unsubscribe = this._monitoringUnsubscribes[index];
        this._monitoringDocuments.splice(index, 1);
        this._monitoringUnsubscribes.splice(index, 1);
        unsubscribe();
        if (doc != rootDoc) {
          var frame = getFrameElement(doc);
          if (frame) {
            this._unmonitorIntersections(frame.ownerDocument);
          }
        }
      };
      IntersectionObserver.prototype._unmonitorAllIntersections = function() {
        var unsubscribes = this._monitoringUnsubscribes.slice(0);
        this._monitoringDocuments.length = 0;
        this._monitoringUnsubscribes.length = 0;
        for (var i = 0; i < unsubscribes.length; i++) {
          unsubscribes[i]();
        }
      };
      IntersectionObserver.prototype._checkForIntersections = function() {
        if (!this.root && crossOriginUpdater && !crossOriginRect) {
          return;
        }
        var rootIsInDom = this._rootIsInDom();
        var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();
        this._observationTargets.forEach(function(item) {
          var target = item.element;
          var targetRect = getBoundingClientRect(target);
          var rootContainsTarget = this._rootContainsTarget(target);
          var oldEntry = item.entry;
          var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, targetRect, rootRect);
          var rootBounds = null;
          if (!this._rootContainsTarget(target)) {
            rootBounds = getEmptyRect();
          } else if (!crossOriginUpdater || this.root) {
            rootBounds = rootRect;
          }
          var newEntry = item.entry = new IntersectionObserverEntry({
            time: now(),
            target: target,
            boundingClientRect: targetRect,
            rootBounds: rootBounds,
            intersectionRect: intersectionRect
          });
          if (!oldEntry) {
            this._queuedEntries.push(newEntry);
          } else if (rootIsInDom && rootContainsTarget) {
            if (this._hasCrossedThreshold(oldEntry, newEntry)) {
              this._queuedEntries.push(newEntry);
            }
          } else {
            if (oldEntry && oldEntry.isIntersecting) {
              this._queuedEntries.push(newEntry);
            }
          }
        }, this);
        if (this._queuedEntries.length) {
          this._callback(this.takeRecords(), this);
        }
      };
      IntersectionObserver.prototype._computeTargetAndRootIntersection = function(target, targetRect, rootRect) {
        if (window.getComputedStyle(target).display == "none")
          return;
        var intersectionRect = targetRect;
        var parent = getParentNode(target);
        var atRoot = false;
        while (!atRoot && parent) {
          var parentRect = null;
          var parentComputedStyle = parent.nodeType == 1 ? window.getComputedStyle(parent) : {};
          if (parentComputedStyle.display == "none")
            return null;
          if (parent == this.root || parent.nodeType == 9) {
            atRoot = true;
            if (parent == this.root || parent == document) {
              if (crossOriginUpdater && !this.root) {
                if (!crossOriginRect || crossOriginRect.width == 0 && crossOriginRect.height == 0) {
                  parent = null;
                  parentRect = null;
                  intersectionRect = null;
                } else {
                  parentRect = crossOriginRect;
                }
              } else {
                parentRect = rootRect;
              }
            } else {
              var frame = getParentNode(parent);
              var frameRect = frame && getBoundingClientRect(frame);
              var frameIntersect = frame && this._computeTargetAndRootIntersection(frame, frameRect, rootRect);
              if (frameRect && frameIntersect) {
                parent = frame;
                parentRect = convertFromParentRect(frameRect, frameIntersect);
              } else {
                parent = null;
                intersectionRect = null;
              }
            }
          } else {
            var doc = parent.ownerDocument;
            if (parent != doc.body && parent != doc.documentElement && parentComputedStyle.overflow != "visible") {
              parentRect = getBoundingClientRect(parent);
            }
          }
          if (parentRect) {
            intersectionRect = computeRectIntersection(parentRect, intersectionRect);
          }
          if (!intersectionRect)
            break;
          parent = parent && getParentNode(parent);
        }
        return intersectionRect;
      };
      IntersectionObserver.prototype._getRootRect = function() {
        var rootRect;
        if (this.root && !isDoc(this.root)) {
          rootRect = getBoundingClientRect(this.root);
        } else {
          var doc = isDoc(this.root) ? this.root : document;
          var html = doc.documentElement;
          var body = doc.body;
          rootRect = {
            top: 0,
            left: 0,
            right: html.clientWidth || body.clientWidth,
            width: html.clientWidth || body.clientWidth,
            bottom: html.clientHeight || body.clientHeight,
            height: html.clientHeight || body.clientHeight
          };
        }
        return this._expandRectByRootMargin(rootRect);
      };
      IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
        var margins = this._rootMarginValues.map(function(margin, i) {
          return margin.unit == "px" ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100;
        });
        var newRect = {
          top: rect.top - margins[0],
          right: rect.right + margins[1],
          bottom: rect.bottom + margins[2],
          left: rect.left - margins[3]
        };
        newRect.width = newRect.right - newRect.left;
        newRect.height = newRect.bottom - newRect.top;
        return newRect;
      };
      IntersectionObserver.prototype._hasCrossedThreshold = function(oldEntry, newEntry) {
        var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
        var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1;
        if (oldRatio === newRatio)
          return;
        for (var i = 0; i < this.thresholds.length; i++) {
          var threshold = this.thresholds[i];
          if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) {
            return true;
          }
        }
      };
      IntersectionObserver.prototype._rootIsInDom = function() {
        return !this.root || containsDeep(document, this.root);
      };
      IntersectionObserver.prototype._rootContainsTarget = function(target) {
        var rootDoc = this.root && (this.root.ownerDocument || this.root) || document;
        return containsDeep(rootDoc, target) && (!this.root || rootDoc == target.ownerDocument);
      };
      IntersectionObserver.prototype._registerInstance = function() {
        if (registry.indexOf(this) < 0) {
          registry.push(this);
        }
      };
      IntersectionObserver.prototype._unregisterInstance = function() {
        var index = registry.indexOf(this);
        if (index != -1)
          registry.splice(index, 1);
      };
      function now() {
        return window.performance && performance.now && performance.now();
      }
      function throttle(fn, timeout) {
        var timer = null;
        return function() {
          if (!timer) {
            timer = setTimeout(function() {
              fn();
              timer = null;
            }, timeout);
          }
        };
      }
      function addEvent(node, event, fn, opt_useCapture) {
        if (typeof node.addEventListener == "function") {
          node.addEventListener(event, fn, opt_useCapture || false);
        } else if (typeof node.attachEvent == "function") {
          node.attachEvent("on" + event, fn);
        }
      }
      function removeEvent(node, event, fn, opt_useCapture) {
        if (typeof node.removeEventListener == "function") {
          node.removeEventListener(event, fn, opt_useCapture || false);
        } else if (typeof node.detatchEvent == "function") {
          node.detatchEvent("on" + event, fn);
        }
      }
      function computeRectIntersection(rect1, rect2) {
        var top = Math.max(rect1.top, rect2.top);
        var bottom = Math.min(rect1.bottom, rect2.bottom);
        var left = Math.max(rect1.left, rect2.left);
        var right = Math.min(rect1.right, rect2.right);
        var width = right - left;
        var height = bottom - top;
        return width >= 0 && height >= 0 && {
          top: top,
          bottom: bottom,
          left: left,
          right: right,
          width: width,
          height: height
        } || null;
      }
      function getBoundingClientRect(el) {
        var rect;
        try {
          rect = el.getBoundingClientRect();
        } catch (err) {
        }
        if (!rect)
          return getEmptyRect();
        if (!(rect.width && rect.height)) {
          rect = {
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
            left: rect.left,
            width: rect.right - rect.left,
            height: rect.bottom - rect.top
          };
        }
        return rect;
      }
      function getEmptyRect() {
        return {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 0,
          height: 0
        };
      }
      function ensureDOMRect(rect) {
        if (!rect || "x" in rect) {
          return rect;
        }
        return {
          top: rect.top,
          y: rect.top,
          bottom: rect.bottom,
          left: rect.left,
          x: rect.left,
          right: rect.right,
          width: rect.width,
          height: rect.height
        };
      }
      function convertFromParentRect(parentBoundingRect, parentIntersectionRect) {
        var top = parentIntersectionRect.top - parentBoundingRect.top;
        var left = parentIntersectionRect.left - parentBoundingRect.left;
        return {
          top: top,
          left: left,
          height: parentIntersectionRect.height,
          width: parentIntersectionRect.width,
          bottom: top + parentIntersectionRect.height,
          right: left + parentIntersectionRect.width
        };
      }
      function containsDeep(parent, child) {
        var node = child;
        while (node) {
          if (node == parent)
            return true;
          node = getParentNode(node);
        }
        return false;
      }
      function getParentNode(node) {
        var parent = node.parentNode;
        if (node.nodeType == 9 && node != document) {
          return getFrameElement(node);
        }
        if (parent && parent.assignedSlot) {
          parent = parent.assignedSlot.parentNode;
        }
        if (parent && parent.nodeType == 11 && parent.host) {
          return parent.host;
        }
        return parent;
      }
      function isDoc(node) {
        return node && node.nodeType === 9;
      }
      window.IntersectionObserver = IntersectionObserver;
      window.IntersectionObserverEntry = IntersectionObserverEntry;
    })();
  }

  // src/core/data-structures/promise.js
  var resolved;
  function resolvedPromise() {
    if (resolved) {
      return resolved;
    }
    resolved = Promise.resolve(void 0);
    return resolved;
  }

  // src/polyfills/stubs/intersection-observer-stub.js
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
  var UPGRADERS = "_upgraders";
  var NATIVE = "_native";
  var STUB = "_stub";
  function getIntersectionObserverDispatcher(Native, Polyfill) {
    function Ctor(ioCallback, opts) {
      var _opts$root;
      if ((opts == null ? void 0 : (_opts$root = opts.root) == null ? void 0 : _opts$root.nodeType) === 9) {
        return new Polyfill(ioCallback, opts);
      } else {
        return new Native(ioCallback, opts);
      }
    }
    return Ctor;
  }
  function upgradePolyfill(win, installer) {
    var Stub = win.IntersectionObserver[STUB];
    if (Stub) {
      var Native = win.IntersectionObserver[NATIVE];
      delete win.IntersectionObserver;
      delete win.IntersectionObserverEntry;
      installer();
      var Polyfill = win.IntersectionObserver;
      if (Native) {
        win.IntersectionObserver = getIntersectionObserverDispatcher(Native, Polyfill);
      }
      var upgraders = Stub[UPGRADERS].slice(0);
      var microtask = resolvedPromise();
      var upgrade2 = function upgrade3(upgrader) {
        microtask.then(function() {
          return upgrader(Polyfill);
        });
      };
      upgraders.forEach(upgrade2);
      Stub[UPGRADERS] = {
        "push": upgrade2
      };
    } else {
      installer();
    }
  }
  var IntersectionObserverStub = /* @__PURE__ */ function() {
    function IntersectionObserverStub2(callback, options) {
      this.callback_ = callback;
      this.options_ = _extends({
        root: null,
        rootMargin: "0px 0px 0px 0px"
      }, options);
      this.elements_ = [];
      this.inst_ = null;
      IntersectionObserverStub2[UPGRADERS].push(this.upgrade_.bind(this));
    }
    var _proto = IntersectionObserverStub2.prototype;
    _proto.disconnect = function disconnect() {
      if (this.inst_) {
        this.inst_.disconnect();
      } else {
        this.elements_.length = 0;
      }
    };
    _proto.takeRecords = function takeRecords() {
      if (this.inst_) {
        return this.inst_.takeRecords();
      }
      return [];
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
      var inst = new Ctor(this.callback_, this.options_);
      this.inst_ = inst;
      for (var _iterator = _createForOfIteratorHelperLoose(this.elements_), _step; !(_step = _iterator()).done; ) {
        var e = _step.value;
        inst.observe(e);
      }
      this.elements_.length = 0;
    };
    _createClass(IntersectionObserverStub2, [{
      key: "root",
      get: function get() {
        if (this.inst_) {
          return this.inst_.root;
        }
        return this.options_.root || null;
      }
    }, {
      key: "rootMargin",
      get: function get() {
        if (this.inst_) {
          return this.inst_.rootMargin;
        }
        return this.options_.rootMargin;
      }
    }, {
      key: "thresholds",
      get: function get() {
        if (this.inst_) {
          return this.inst_.thresholds;
        }
        return [].concat(this.options_.threshold || 0);
      }
    }]);
    return IntersectionObserverStub2;
  }();
  IntersectionObserverStub[UPGRADERS] = [];

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

  // src/core/types/array.js
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

  // src/core/3p-frame-messaging.js
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
  function devAssert2(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    if (isMinified()) {
      return shouldBeTrueish;
    }
    if (self.__AMP_ASSERTION_CHECK) {
      console.log("__devAssert_sentinel__");
    }
    return dev().assert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
  }

  // src/url.js
  var SERVING_TYPE_PREFIX = new Set([
    "c",
    "v",
    "a",
    "ad"
  ]);

  // src/service-helpers.js
  function registerServiceBuilder(win, id, constructor, opt_instantiate) {
    win = getTopWindow(win);
    registerServiceInternal(win, win, id, constructor);
    if (opt_instantiate) {
      getServiceInternal(win, id);
    }
  }
  function getExistingServiceOrNull(win, id) {
    win = getTopWindow(win);
    if (isServiceRegistered(win, id)) {
      return getServiceInternal(win, id);
    } else {
      return null;
    }
  }
  function getTopWindow(win) {
    return win.__AMP_TOP || (win.__AMP_TOP = win);
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

  // src/inabox/inabox-iframe-messaging-client.js
  function iframeMessagingClientFor(win) {
    return getExistingServiceOrNull(win, "iframeMessagingClient");
  }

  // extensions/amp-intersection-observer-polyfill/0.1/cross-origin-observer.js
  function maybeSetupCrossOriginObserver(win) {
    if (win == WindowInterface.getTop(win) || getMode(win).runtime != "inabox") {
      return;
    }
    var iframeClient = iframeMessagingClientFor(win);
    var setupPolyfillUpdater = win.IntersectionObserver["_setupCrossOriginUpdater"];
    if (!iframeClient || !setupPolyfillUpdater) {
      return;
    }
    var updater = setupPolyfillUpdater();
    iframeClient.makeRequest(MessageType_Enum.SEND_POSITIONS, MessageType_Enum.POSITION, function(data) {
      var boundingClientRect = data["targetRect"];
      var viewportRect = data["viewportRect"];
      var intersectionRect = calculateIntersectionRect(viewportRect, boundingClientRect);
      updater(boundingClientRect, intersectionRect);
    });
  }
  function calculateIntersectionRect(viewportRect, targetRect) {
    var top = Math.max(targetRect.top, 0);
    var left = Math.max(targetRect.left, 0);
    var bottom = Math.min(targetRect.bottom, viewportRect.height);
    var right = Math.min(targetRect.right, viewportRect.width);
    if (top > bottom || left > right) {
      return layoutRectLtwh(0, 0, 0, 0);
    }
    return layoutRectLtwh(left, top, right - left, bottom - top);
  }

  // extensions/amp-intersection-observer-polyfill/0.1/amp-intersection-observer-polyfill.js
  var TAG = "amp-intersection-observer-polyfill";
  function upgrade(win) {
    upgradePolyfill(win, function() {
      installIntersectionObserver();
      maybeSetupCrossOriginObserver(win);
    });
    return {};
  }
  function upgradeIntersectionObserverPolyfill(win) {
    registerServiceBuilder(win, TAG, upgrade, true);
  }
  upgradeIntersectionObserverPolyfill(window);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-intersection-observer-polyfill-0.1.max.js.map
