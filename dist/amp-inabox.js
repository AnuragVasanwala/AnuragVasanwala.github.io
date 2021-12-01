self.AMP_CONFIG||(self.AMP_CONFIG={"localDev":true,"allow-doc-opt-in":["amp-next-page"],"allow-url-opt-in":[],"canary":0,"a4aProfilingRate":0.01,"doubleclickSraExp":0.01,"doubleclickSraReportExcludedBlock":0.1,"flexAdSlots":0.05,"flexible-bitrate":0.1,"ios-fixed-no-transfer":0,"disable-a4a-non-sd":1,"amp-cid-backup":1,"story-ad-placements":0.01,"story-disable-animations-first-page":0,"story-load-first-page-only":1,"story-load-inactive-outside-viewport":1,"amp-story-page-attachment-ui-v2":1,"amp-sticky-ad-to-amp-ad-v4":0});/*AMP_CONFIG*/
(function() {
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

  // src/polyfills/abort-controller.js
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
  var AbortController2 = /* @__PURE__ */ function() {
    function AbortController3() {
      this.signal_ = new AbortSignal();
    }
    var _proto = AbortController3.prototype;
    _proto.abort = function abort() {
      if (this.signal_.isAborted_) {
        return;
      }
      this.signal_.isAborted_ = true;
      if (this.signal_.onabort_) {
        var event = {
          "type": "abort",
          "bubbles": false,
          "cancelable": false,
          "target": this.signal_,
          "currentTarget": this.signal_
        };
        this.signal_.onabort_(event);
      }
    };
    _createClass(AbortController3, [{
      key: "signal",
      get: function get() {
        return this.signal_;
      }
    }]);
    return AbortController3;
  }();
  var AbortSignal = /* @__PURE__ */ function() {
    function AbortSignal2() {
      this.isAborted_ = false;
      this.onabort_ = null;
    }
    _createClass(AbortSignal2, [{
      key: "aborted",
      get: function get() {
        return this.isAborted_;
      }
    }, {
      key: "onabort",
      get: function get() {
        return this.onabort_;
      },
      set: function set(value) {
        this.onabort_ = value;
      }
    }]);
    return AbortSignal2;
  }();
  function install(win) {
    if (win.AbortController) {
      return;
    }
    Object.defineProperty(win, "AbortController", {
      configurable: true,
      enumerable: false,
      writable: true,
      value: AbortController2
    });
    Object.defineProperty(win, "AbortSignal", {
      configurable: true,
      enumerable: false,
      writable: true,
      value: AbortSignal
    });
  }

  // src/polyfills/array-includes.js
  function includes(value, opt_fromIndex) {
    var fromIndex = opt_fromIndex || 0;
    var len = this.length;
    var i = fromIndex >= 0 ? fromIndex : Math.max(len + fromIndex, 0);
    for (; i < len; i++) {
      var other = this[i];
      if (other === value || value !== value && other !== other) {
        return true;
      }
    }
    return false;
  }
  function install2(win) {
    if (!win.Array.prototype.includes) {
      win.Object.defineProperty(win.Array.prototype, "includes", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: includes
      });
    }
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
  function createExpectedError(var_args) {
    var error = createError.apply(null, arguments);
    error.expected = true;
    return error;
  }

  // src/core/types/object/index.js
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
  function getValueForExpr(obj, expr) {
    if (expr == ".") {
      return obj;
    }
    var parts = expr.split(".");
    var value = obj;
    for (var _iterator = _createForOfIteratorHelperLoose2(parts), _step; !(_step = _iterator()).done; ) {
      var part = _step.value;
      if (part && value && value[part] !== void 0 && typeof value == "object" && hasOwn(value, part)) {
        value = value[part];
        continue;
      }
      value = void 0;
      break;
    }
    return value;
  }

  // src/polyfills/custom-elements.js
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
  var VALID_NAME = /^[a-z][a-z0-9._]*-[a-z0-9._-]*$/;
  var INVALID_NAMES = ["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"];
  var TRACK_SUBTREE = {
    "childList": true,
    "subtree": true
  };
  function assertValidName(SyntaxError, name) {
    if (!VALID_NAME.test(name) || INVALID_NAMES.includes(name)) {
      throw new SyntaxError('invalid custom element name "' + name + '"');
    }
  }
  function hasCustomElements(win) {
    var customElements = win.customElements;
    return !!(customElements && customElements.define && customElements.get && customElements.whenDefined);
  }
  function isPatched(win) {
    var tag = win.HTMLElement.toString();
    return tag.indexOf("[native code]") === -1;
  }
  var CustomElementRegistry = /* @__PURE__ */ function() {
    function CustomElementRegistry2(win, registry) {
      this.win_ = win;
      this.registry_ = registry;
      this.pendingDefines_ = map();
    }
    var _proto = CustomElementRegistry2.prototype;
    _proto.define = function define(name, ctor, options) {
      this.registry_.define(name, ctor, options);
      var pending = this.pendingDefines_;
      var deferred = pending[name];
      if (deferred) {
        deferred.resolve();
        delete pending[name];
      }
    };
    _proto.get = function get(name) {
      var def = this.registry_.getByName(name);
      if (def) {
        return def.ctor;
      }
    };
    _proto.whenDefined = function whenDefined(name) {
      var _this$win_ = this.win_, Promise2 = _this$win_.Promise, SyntaxError = _this$win_.SyntaxError;
      assertValidName(SyntaxError, name);
      if (this.registry_.getByName(name)) {
        return resolvedPromise();
      }
      var pending = this.pendingDefines_;
      var deferred = pending[name];
      if (!deferred) {
        deferred = new Deferred();
        pending[name] = deferred;
      }
      return deferred.promise;
    };
    _proto.upgrade = function upgrade(root) {
      this.registry_.upgrade(root);
    };
    return CustomElementRegistry2;
  }();
  var Registry = /* @__PURE__ */ function() {
    function Registry2(win) {
      this.win_ = win;
      this.definitions_ = map();
      this.query_ = "";
      this.current_ = null;
      this.mutationObserver_ = null;
      this.roots_ = [win.document];
    }
    var _proto2 = Registry2.prototype;
    _proto2.current = function current() {
      var current2 = this.current_;
      this.current_ = null;
      return current2;
    };
    _proto2.getByName = function getByName(name) {
      var definition = this.definitions_[name];
      if (definition) {
        return definition;
      }
    };
    _proto2.getByConstructor = function getByConstructor(ctor) {
      var definitions = this.definitions_;
      for (var name in definitions) {
        var def = definitions[name];
        if (def.ctor === ctor) {
          return def;
        }
      }
    };
    _proto2.define = function define(name, ctor, options) {
      var _this$win_2 = this.win_, Error2 = _this$win_2.Error, SyntaxError = _this$win_2.SyntaxError;
      if (options) {
        throw new Error2("Extending native custom elements is not supported");
      }
      assertValidName(SyntaxError, name);
      if (this.getByName(name) || this.getByConstructor(ctor)) {
        throw new Error2('duplicate definition "' + name + '"');
      }
      this.definitions_[name] = {
        name: name,
        ctor: ctor
      };
      this.observe_(name);
      for (var _iterator = _createForOfIteratorHelperLoose3(this.roots_), _step; !(_step = _iterator()).done; ) {
        var tree = _step.value;
        this.upgrade(tree, name);
      }
    };
    _proto2.upgrade = function upgrade(root, opt_query) {
      var newlyDefined = !!opt_query;
      var query2 = opt_query || this.query_;
      var upgradeCandidates = this.queryAll_(root, query2);
      for (var _iterator2 = _createForOfIteratorHelperLoose3(upgradeCandidates), _step2; !(_step2 = _iterator2()).done; ) {
        var candidate = _step2.value;
        if (newlyDefined) {
          this.connectedCallback_(candidate);
        } else {
          this.upgradeSelf(candidate);
        }
      }
    };
    _proto2.upgradeSelf = function upgradeSelf(node) {
      var def = this.getByName(node.localName);
      if (!def) {
        return;
      }
      this.upgradeSelf_(node, def);
    };
    _proto2.queryAll_ = function queryAll_(root, query2) {
      if (!query2 || !root.querySelectorAll) {
        return [];
      }
      return root.querySelectorAll(query2);
    };
    _proto2.upgradeSelf_ = function upgradeSelf_(node, def) {
      var ctor = def.ctor;
      if (node instanceof ctor) {
        return;
      }
      this.current_ = node;
      try {
        var el = new ctor();
        if (el !== node) {
          throw new this.win_.Error("Constructor illegally returned a different instance.");
        }
      } catch (e) {
        rethrowAsync(e);
      }
    };
    _proto2.connectedCallback_ = function connectedCallback_(node) {
      var def = this.getByName(node.localName);
      if (!def) {
        return;
      }
      node = node;
      this.upgradeSelf_(node, def);
      if (node.connectedCallback) {
        try {
          node.connectedCallback();
        } catch (e) {
          rethrowAsync(e);
        }
      }
    };
    _proto2.disconnectedCallback_ = function disconnectedCallback_(node) {
      node = node;
      if (node.disconnectedCallback) {
        try {
          node.disconnectedCallback();
        } catch (e) {
          rethrowAsync(e);
        }
      }
    };
    _proto2.observe_ = function observe_(name) {
      var _this = this;
      if (this.query_) {
        this.query_ += "," + name;
        return;
      }
      this.query_ = name;
      var mo = new this.win_.MutationObserver(function(records) {
        if (records) {
          _this.handleRecords_(records);
        }
      });
      this.mutationObserver_ = mo;
      for (var _iterator3 = _createForOfIteratorHelperLoose3(this.roots_), _step3; !(_step3 = _iterator3()).done; ) {
        var tree = _step3.value;
        mo.observe(tree, TRACK_SUBTREE);
      }
      installPatches(this.win_, this);
    };
    _proto2.observe = function observe(tree) {
      this.roots_.push(tree);
      if (this.mutationObserver_) {
        this.mutationObserver_.observe(tree, TRACK_SUBTREE);
      }
    };
    _proto2.sync = function sync() {
      if (this.mutationObserver_) {
        this.handleRecords_(this.mutationObserver_.takeRecords());
      }
    };
    _proto2.handleRecords_ = function handleRecords_(records) {
      for (var _iterator4 = _createForOfIteratorHelperLoose3(records), _step4; !(_step4 = _iterator4()).done; ) {
        var record = _step4.value;
        if (!record) {
          continue;
        }
        var addedNodes = record.addedNodes, removedNodes = record.removedNodes;
        for (var _iterator5 = _createForOfIteratorHelperLoose3(addedNodes), _step5; !(_step5 = _iterator5()).done; ) {
          var node = _step5.value;
          var connectedCandidates = this.queryAll_(node, this.query_);
          this.connectedCallback_(node);
          for (var _iterator7 = _createForOfIteratorHelperLoose3(connectedCandidates), _step7; !(_step7 = _iterator7()).done; ) {
            var candidate = _step7.value;
            this.connectedCallback_(candidate);
          }
        }
        for (var _iterator6 = _createForOfIteratorHelperLoose3(removedNodes), _step6; !(_step6 = _iterator6()).done; ) {
          var _node = _step6.value;
          var disconnectedCandidates = this.queryAll_(_node, this.query_);
          this.disconnectedCallback_(_node);
          for (var _iterator8 = _createForOfIteratorHelperLoose3(disconnectedCandidates), _step8; !(_step8 = _iterator8()).done; ) {
            var _candidate = _step8.value;
            this.disconnectedCallback_(_candidate);
          }
        }
      }
    };
    return Registry2;
  }();
  function installPatches(win, registry) {
    var _innerHTMLDesc;
    var Document = win.Document, Element2 = win.Element, Node2 = win.Node, document = win.document;
    var docProto = Document.prototype;
    var elProto = Element2.prototype;
    var nodeProto = Node2.prototype;
    var createElement = docProto.createElement, importNode = docProto.importNode;
    var appendChild = nodeProto.appendChild, cloneNode = nodeProto.cloneNode, insertBefore = nodeProto.insertBefore, removeChild = nodeProto.removeChild, replaceChild = nodeProto.replaceChild;
    docProto.createElement = function(name) {
      var def = registry.getByName(name);
      if (def) {
        return new def.ctor();
      }
      return createElement.apply(this, arguments);
    };
    docProto.importNode = function() {
      var imported = importNode.apply(this, arguments);
      if (imported && this === document) {
        registry.upgradeSelf(imported);
        registry.upgrade(imported);
      }
      return imported;
    };
    nodeProto.appendChild = function() {
      var appended = appendChild.apply(this, arguments);
      registry.sync();
      return appended;
    };
    nodeProto.insertBefore = function() {
      var inserted = insertBefore.apply(this, arguments);
      registry.sync();
      return inserted;
    };
    nodeProto.removeChild = function() {
      var removed = removeChild.apply(this, arguments);
      registry.sync();
      return removed;
    };
    nodeProto.replaceChild = function() {
      var replaced = replaceChild.apply(this, arguments);
      registry.sync();
      return replaced;
    };
    nodeProto.cloneNode = function() {
      var cloned = cloneNode.apply(this, arguments);
      if (cloned.ownerDocument === document) {
        registry.upgradeSelf(cloned);
        registry.upgrade(cloned);
      }
      return cloned;
    };
    var innerHTMLProto = elProto;
    var innerHTMLDesc = Object.getOwnPropertyDescriptor(innerHTMLProto, "innerHTML");
    if (!innerHTMLDesc) {
      innerHTMLProto = Object.getPrototypeOf(win.HTMLElement.prototype);
      innerHTMLDesc = Object.getOwnPropertyDescriptor(innerHTMLProto, "innerHTML");
    }
    if ((_innerHTMLDesc = innerHTMLDesc) != null && _innerHTMLDesc.configurable) {
      var innerHTMLSetter = innerHTMLDesc.set;
      innerHTMLDesc.set = function(html2) {
        innerHTMLSetter.call(this, html2);
        registry.upgrade(this);
      };
      Object.defineProperty(innerHTMLProto, "innerHTML", innerHTMLDesc);
    }
  }
  function polyfill(win) {
    var Element2 = win.Element, HTMLElement = win.HTMLElement, document = win.document;
    var createElement = document.createElement;
    var registry = new Registry(win);
    var customElements = new CustomElementRegistry(win, registry);
    Object.defineProperty(win, "customElements", {
      enumerable: true,
      configurable: true,
      value: customElements
    });
    var elProto = Element2.prototype;
    var attachShadow = elProto.attachShadow, createShadowRoot2 = elProto.createShadowRoot;
    if (attachShadow) {
      elProto.attachShadow = function(unused) {
        var shadow = attachShadow.apply(this, arguments);
        registry.observe(shadow);
        return shadow;
      };
      elProto.attachShadow.toString = function() {
        return attachShadow.toString();
      };
    }
    if (createShadowRoot2) {
      elProto.createShadowRoot = function() {
        var shadow = createShadowRoot2.apply(this, arguments);
        registry.observe(shadow);
        return shadow;
      };
      elProto.createShadowRoot.toString = function() {
        return createShadowRoot2.toString();
      };
    }
    function HTMLElementPolyfill() {
      var constructor = this.constructor;
      var el = registry.current();
      if (!el) {
        var def = registry.getByConstructor(constructor);
        el = createElement.call(document, def.name);
      }
      setPrototypeOf(el, constructor.prototype);
      return el;
    }
    subClass(HTMLElement, HTMLElementPolyfill);
    win.HTMLElementOrig = win.HTMLElement;
    win.HTMLElement = HTMLElementPolyfill;
    if (!HTMLElementPolyfill.call) {
      HTMLElementPolyfill.apply = win.Function.apply;
      HTMLElementPolyfill.bind = win.Function.bind;
      HTMLElementPolyfill.call = win.Function.call;
    }
  }
  function wrapHTMLElement(win) {
    var HTMLElement = win.HTMLElement, Reflect2 = win.Reflect;
    function HTMLElementWrapper() {
      var ctor = this.constructor;
      return Reflect2.construct(HTMLElement, [], ctor);
    }
    subClass(HTMLElement, HTMLElementWrapper);
    win.HTMLElementOrig = win.HTMLElement;
    win.HTMLElement = HTMLElementWrapper;
  }
  function subClass(superClass, subClass2) {
    subClass2.prototype = Object.create(superClass.prototype, {
      constructor: {
        configurable: true,
        writable: true,
        value: subClass2
      }
    });
    setPrototypeOf(subClass2, superClass);
  }
  function supportsUnderProto() {
    var proto = {
      "test": true
    };
    var obj = {};
    obj.__proto__ = proto;
    return !!obj["test"];
  }
  function setPrototypeOf(obj, prototype) {
    if (isEsm() || Object.setPrototypeOf) {
      Object.setPrototypeOf(obj, prototype);
    } else if (supportsUnderProto()) {
      obj.__proto__ = prototype;
    } else {
      copyProperties(obj, prototype);
    }
  }
  function copyProperties(obj, prototype) {
    var current = prototype;
    while (current !== null) {
      if (Object.isPrototypeOf.call(current, obj)) {
        break;
      }
      for (var _iterator9 = _createForOfIteratorHelperLoose3(Object.getOwnPropertyNames(current)), _step9; !(_step9 = _iterator9()).done; ) {
        var prop = _step9.value;
        if (Object.hasOwnProperty.call(obj, prop)) {
          continue;
        }
        var desc = Object.getOwnPropertyDescriptor(current, prop);
        Object.defineProperty(obj, prop, desc);
      }
      current = Object.getPrototypeOf(current);
    }
  }
  function install3(win, ctor) {
    var shouldInstall2 = win.document;
    var hasCE = hasCustomElements(win);
    if (!shouldInstall2 || hasCE && isPatched(win)) {
      return;
    }
    var install16 = true;
    var installWrapper = false;
    if (ctor && hasCE) {
      try {
        var _Reflect = win.Reflect;
        var instance = Object.create(ctor.prototype);
        Function.call.call(ctor, instance);
        installWrapper = !!(_Reflect != null && _Reflect.construct);
      } catch (e) {
        install16 = false;
      }
    }
    if (installWrapper) {
      wrapHTMLElement(win);
    } else if (install16) {
      polyfill(win);
    }
  }

  // src/polyfills/document-contains.js
  function documentContainsPolyfill(node) {
    return node == this || this.documentElement.contains(node);
  }
  function install4(win) {
    var documentClass = win.HTMLDocument || win.Document;
    if (documentClass && !documentClass.prototype.contains) {
      win.Object.defineProperty(documentClass.prototype, "contains", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: documentContainsPolyfill
      });
    }
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
  function findIndex(array, predicate) {
    for (var i = 0; i < array.length; i++) {
      if (predicate(array[i], i, array)) {
        return i;
      }
    }
    return -1;
  }
  function fromIterator(iterator) {
    var array = [];
    for (var e = iterator.next(); !e.done; e = iterator.next()) {
      array.push(e.value);
    }
    return array;
  }
  function removeItem(array, item) {
    var index = array.indexOf(item);
    if (index == -1) {
      return false;
    }
    array.splice(index, 1);
    return true;
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

  // src/core/types/string/index.js
  function endsWith(string, suffix) {
    var index = string.length - suffix.length;
    return index >= 0 && string.indexOf(suffix, index) == index;
  }
  function includes2(string, substring, start) {
    if (typeof start !== "number") {
      start = 0;
    }
    if (start + substring.length > string.length) {
      return false;
    }
    return string.indexOf(substring, start) !== -1;
  }
  function trimStart(str) {
    if (str.trimStart) {
      return str.trimStart();
    }
    return (str + "_").trim().slice(0, -1);
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
  function isUserErrorMessage(message) {
    return message.indexOf(USER_ERROR_SENTINEL) >= 0;
  }
  function isUserErrorEmbedMessage(message) {
    return message.indexOf(USER_ERROR_EMBED_SENTINEL) >= 0;
  }
  function stripUserError(message) {
    return message.replace(USER_ERROR_SENTINEL, "");
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
  function assertString(assertFn, shouldBeString, opt_message) {
    return assertType_(assertFn, shouldBeString, isString(shouldBeString), "String expected", opt_message);
  }
  function assertNumber(assertFn, shouldBeNumber, opt_message) {
    return assertType_(assertFn, shouldBeNumber, typeof shouldBeNumber == "number", "Number expected", opt_message);
  }
  function assertArray(assertFn, shouldBeArray, opt_message) {
    return assertType_(assertFn, shouldBeArray, isArray(shouldBeArray), "Array expected", opt_message);
  }
  function assertBoolean(assertFn, shouldBeBoolean, opt_message) {
    return assertType_(assertFn, shouldBeBoolean, !!shouldBeBoolean === shouldBeBoolean, "Boolean expected", opt_message);
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
  function devAssertString(shouldBeString, opt_message) {
    if (isMinified()) {
      return shouldBeString;
    }
    devAssertDceCheck();
    return assertString(devAssert, shouldBeString, opt_message);
  }

  // src/core/assert/user.js
  function userAssert(shouldBeTruthy, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    return assert(USER_ERROR_SENTINEL, shouldBeTruthy, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
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
  function deepEquals(a, b, depth) {
    if (depth === void 0) {
      depth = 5;
    }
    if (!isFinite(depth) || depth < 0) {
      throw new Error("Invalid depth: " + depth);
    }
    if (a === b) {
      return true;
    }
    var queue = [{
      a: a,
      b: b,
      depth: depth
    }];
    while (queue.length > 0) {
      var _queue$shift = queue.shift(), _a = _queue$shift.a, _b = _queue$shift.b, _depth = _queue$shift.depth;
      if (_depth > 0) {
        if (typeof _a !== typeof _b) {
          return false;
        } else if (isArray(_a) && isArray(_b)) {
          if (_a.length !== _b.length) {
            return false;
          }
          for (var i = 0; i < _a.length; i++) {
            queue.push({
              a: _a[i],
              b: _b[i],
              depth: _depth - 1
            });
          }
          continue;
        } else if (_a && _b && typeof _a === "object" && typeof _b === "object") {
          var keysA = Object.keys(_a);
          var keysB = Object.keys(_b);
          if (keysA.length !== keysB.length) {
            return false;
          }
          for (var _i = 0, _keysA = keysA; _i < _keysA.length; _i++) {
            var k = _keysA[_i];
            queue.push({
              a: _a[k],
              b: _b[k],
              depth: _depth - 1
            });
          }
          continue;
        }
      }
      if (_a !== _b) {
        return false;
      }
    }
    return true;
  }

  // src/core/types/string/bytes.js
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
  function getCryptoRandomBytesArray(win, length) {
    var crypto = win.crypto;
    if (!isEsm()) {
      crypto = crypto || win.msCrypto;
      if (!crypto || !crypto.getRandomValues) {
        return null;
      }
    }
    var uint8array = new Uint8Array(length);
    crypto.getRandomValues(uint8array);
    return uint8array;
  }

  // src/core/types/function/index.js
  function once(fn) {
    var evaluated = false;
    var retValue = null;
    var callback = fn;
    return function() {
      if (!evaluated) {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        retValue = callback.apply(self, args);
        evaluated = true;
        callback = null;
      }
      return retValue;
    };
  }
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
  var config = {
    urls: urls
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
  var noop = function noop2() {
  };
  function setReportError(fn) {
    self.__AMP_REPORT_ERROR = fn;
  }
  var LogLevel_Enum = {
    OFF: 0,
    ERROR: 1,
    WARN: 2,
    INFO: 3,
    FINE: 4
  };
  var levelOverride_ = void 0;
  function overrideLogLevel(level) {
    levelOverride_ = level;
  }
  var messageUrlRtv = function messageUrlRtv2() {
    return "01" + version();
  };
  var externalMessageUrl = function externalMessageUrl2(id, interpolatedParts) {
    return interpolatedParts.reduce(function(prefix, arg) {
      return prefix + "&s[]=" + messageArgToEncodedComponent(arg);
    }, "https://log.amp.dev/?v=" + messageUrlRtv() + "&id=" + encodeURIComponent(id));
  };
  var externalMessagesSimpleTableUrl = function externalMessagesSimpleTableUrl2() {
    return urls.cdn + "/rtv/" + messageUrlRtv() + "/log-messages.simple.json";
  };
  var messageArgToEncodedComponent = function messageArgToEncodedComponent2(arg) {
    return encodeURIComponent(String(elementStringOrPassThru(arg)));
  };
  var logHashParam = function logHashParam2(opt_win) {
    return parseInt(getHashParams(opt_win)["log"], 10);
  };
  var Log = /* @__PURE__ */ function() {
    function Log2(win, levelFunc, opt_suffix) {
      var _this = this;
      if (opt_suffix === void 0) {
        opt_suffix = "";
      }
      this.win = getMode().test && win.__AMP_TEST_IFRAME ? win.parent : win;
      this.levelFunc_ = levelFunc;
      this.level_ = this.defaultLevel_();
      this.suffix_ = opt_suffix;
      this.messages_ = null;
      this.fetchExternalMessagesOnce_ = once(function() {
        win.fetch(externalMessagesSimpleTableUrl()).then(function(response) {
          return response.json();
        }, noop).then(function(opt_messages) {
          if (opt_messages) {
            _this.messages_ = opt_messages;
          }
        });
      });
      this.boundAssertFn_ = this.assert.bind(this);
    }
    var _proto = Log2.prototype;
    _proto.defaultLevel_ = function defaultLevel_() {
      var _win$console;
      var win = this.win;
      if (!((_win$console = win.console) != null && _win$console.log) || logHashParam(win) == 0) {
        return LogLevel_Enum.OFF;
      }
      if (getMode().test && win.ENABLE_LOG) {
        return LogLevel_Enum.FINE;
      }
      if (getMode().localDev) {
        return LogLevel_Enum.INFO;
      }
      return this.defaultLevelWithFunc_();
    };
    _proto.defaultLevelWithFunc_ = function defaultLevelWithFunc_(opt_win) {
      return this.levelFunc_(logHashParam(opt_win), getMode().development);
    };
    _proto.msg_ = function msg_(tag, level, messages) {
      var _levelOverride_, _LogLevel_Enum$ERROR$, _LogLevel_Enum$ERROR$2;
      if (level > ((_levelOverride_ = levelOverride_) != null ? _levelOverride_ : this.level_)) {
        return false;
      }
      var cs = this.win.console;
      var fn = (_LogLevel_Enum$ERROR$ = (_LogLevel_Enum$ERROR$2 = {}, _LogLevel_Enum$ERROR$2[LogLevel_Enum.ERROR] = cs.error, _LogLevel_Enum$ERROR$2[LogLevel_Enum.INFO] = cs.info, _LogLevel_Enum$ERROR$2[LogLevel_Enum.WARN] = cs.warn, _LogLevel_Enum$ERROR$2)[level]) != null ? _LogLevel_Enum$ERROR$ : cs.log;
      var args = this.maybeExpandMessageArgs_(messages);
      var prefix = "[" + tag + "]";
      if (isString(args[0])) {
        args[0] = prefix + " " + args[0];
      } else {
        args.unshift(prefix);
      }
      fn.apply(cs, args);
      return true;
    };
    _proto.fine = function fine(tag) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      this.msg_(tag, LogLevel_Enum.FINE, args);
    };
    _proto.info = function info(tag) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      this.msg_(tag, LogLevel_Enum.INFO, args);
    };
    _proto.warn = function warn(tag) {
      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }
      this.msg_(tag, LogLevel_Enum.WARN, args);
    };
    _proto.error = function error(tag) {
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }
      if (!this.msg_(tag, LogLevel_Enum.ERROR, args)) {
        var error2 = this.createError.apply(this, args);
        error2.name = tag || error2.name;
        self.__AMP_REPORT_ERROR == null ? void 0 : self.__AMP_REPORT_ERROR(error2);
      }
    };
    _proto.expectedError = function expectedError(tag) {
      for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        args[_key5 - 1] = arguments[_key5];
      }
      if (!this.msg_(tag, LogLevel_Enum.ERROR, args)) {
        self.__AMP_REPORT_ERROR == null ? void 0 : self.__AMP_REPORT_ERROR(this.createExpectedError.apply(this, args));
      }
    };
    _proto.createError = function createError2(var_args) {
      return this.setErrorSuffix_(createError.apply(null, arguments));
    };
    _proto.createExpectedError = function createExpectedError2(var_args) {
      return this.setErrorSuffix_(createExpectedError.apply(null, arguments));
    };
    _proto.setErrorSuffix_ = function setErrorSuffix_(error) {
      error = duplicateErrorIfNecessary(error);
      if (this.suffix_) {
        if (!error.message) {
          error.message = this.suffix_;
        } else if (error.message.indexOf(this.suffix_) == -1) {
          error.message += this.suffix_;
        }
      } else if (isUserErrorMessage(error.message)) {
        error.message = stripUserError(error.message);
      }
      return error;
    };
    _proto.maybeExpandMessageArgs_ = function maybeExpandMessageArgs_(args) {
      return isArray(args[0]) ? this.expandMessageArgs_(args[0]) : args;
    };
    _proto.expandMessageArgs_ = function expandMessageArgs_(parts) {
      var _this$messages_;
      var id = parts.shift();
      if (getMode(this.win).development) {
        this.fetchExternalMessagesOnce_();
      }
      return (_this$messages_ = this.messages_) != null && _this$messages_[id] ? [this.messages_[id]].concat(parts) : ["More info at " + externalMessageUrl(id, parts)];
    };
    _proto.assert = function assert2(shouldBeTrueish, opt_message, var_args) {
      if (isArray(opt_message)) {
        return this.assert.apply(this, [shouldBeTrueish].concat(this.expandMessageArgs_(opt_message)));
      }
      return assert.apply(null, [this.suffix_].concat(Array.prototype.slice.call(arguments)));
    };
    _proto.assertElement = function assertElement2(shouldBeElement, opt_message) {
      return assertElement(this.boundAssertFn_, shouldBeElement, opt_message);
    };
    _proto.assertString = function assertString2(shouldBeString, opt_message) {
      return assertString(this.boundAssertFn_, shouldBeString, opt_message);
    };
    _proto.assertNumber = function assertNumber2(shouldBeNumber, opt_message) {
      return assertNumber(this.boundAssertFn_, shouldBeNumber, opt_message);
    };
    _proto.assertArray = function assertArray2(shouldBeArray, opt_message) {
      return assertArray(this.boundAssertFn_, shouldBeArray, opt_message);
    };
    _proto.assertBoolean = function assertBoolean2(shouldBeBoolean, opt_message) {
      return assertBoolean(this.boundAssertFn_, shouldBeBoolean, opt_message);
    };
    return Log2;
  }();
  self.__AMP_LOG = self.__AMP_LOG || {
    user: null,
    dev: null,
    userForEmbed: null
  };
  var logs = self.__AMP_LOG;
  var logConstructor = null;
  function initLogConstructor() {
    logConstructor = Log;
    dev();
    user();
  }
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

  // src/polyfills/fetch.js
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
  function _inherits(subClass2, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass2.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass2, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass2, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf11(o2, p2) {
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
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf11(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  var allowedMethods = ["GET", "POST"];
  function fetchPolyfill(input, init) {
    if (init === void 0) {
      init = {};
    }
    return new Promise(function(resolve, reject) {
      var requestMethod = normalizeMethod(init.method || "GET");
      var xhr = createXhrRequest(requestMethod, input);
      if (init.credentials == "include") {
        xhr.withCredentials = true;
      }
      if (init.responseType === "document" || init.responseType === "text") {
        xhr.responseType = init.responseType;
      }
      if (init.headers) {
        Object.keys(init.headers).forEach(function(header) {
          xhr.setRequestHeader(header, init.headers[header]);
        });
      }
      xhr.onreadystatechange = function() {
        if (xhr.readyState < 2) {
          return;
        }
        if (xhr.status < 100 || xhr.status > 599) {
          xhr.onreadystatechange = null;
          reject(user().createExpectedError("Unknown HTTP status " + xhr.status));
          return;
        }
        if (xhr.readyState == 4) {
          resolve(new FetchResponse(xhr));
        }
      };
      xhr.onerror = function() {
        reject(user().createExpectedError("Network failure"));
      };
      xhr.onabort = function() {
        reject(user().createExpectedError("Request aborted"));
      };
      if (requestMethod == "POST") {
        xhr.send(init.body);
      } else {
        xhr.send();
      }
    });
  }
  function createXhrRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      xhr.open(method, url, true);
    } else {
      throw dev().createExpectedError("CORS is not supported");
    }
    return xhr;
  }
  var FetchResponse = /* @__PURE__ */ function() {
    function FetchResponse2(xhr) {
      this.xhr_ = xhr;
      this.status = this.xhr_.status;
      this.statusText = this.xhr_.statusText;
      this.ok = this.status >= 200 && this.status < 300;
      this.headers = new FetchResponseHeaders(xhr);
      this.bodyUsed = false;
      this.body = null;
      this.url = xhr.responseURL;
    }
    var _proto = FetchResponse2.prototype;
    _proto.clone = function clone() {
      devAssert(!this.bodyUsed, "Body already used");
      return new FetchResponse2(this.xhr_);
    };
    _proto.drainText_ = function drainText_() {
      devAssert(!this.bodyUsed, "Body already used");
      this.bodyUsed = true;
      return Promise.resolve(this.xhr_.responseText);
    };
    _proto.text = function text() {
      return this.drainText_();
    };
    _proto.json = function json() {
      return this.drainText_().then(parseJson);
    };
    _proto.arrayBuffer = function arrayBuffer() {
      return this.drainText_().then(utf8Encode);
    };
    return FetchResponse2;
  }();
  function normalizeMethod(method) {
    if (method === void 0) {
      return "GET";
    }
    method = method.toUpperCase();
    devAssert(allowedMethods.includes(method), "Only one of %s is currently allowed. Got %s", allowedMethods.join(", "), method);
    return method;
  }
  var FetchResponseHeaders = /* @__PURE__ */ function() {
    function FetchResponseHeaders2(xhr) {
      this.xhr_ = xhr;
    }
    var _proto2 = FetchResponseHeaders2.prototype;
    _proto2.get = function get(name) {
      return this.xhr_.getResponseHeader(name);
    };
    _proto2.has = function has(name) {
      return this.xhr_.getResponseHeader(name) != null;
    };
    return FetchResponseHeaders2;
  }();
  var Response2 = /* @__PURE__ */ function(_FetchResponse) {
    _inherits(Response3, _FetchResponse);
    var _super = _createSuper(Response3);
    function Response3(body, init) {
      if (init === void 0) {
        init = {};
      }
      var lowercasedHeaders = map();
      var data = _extends({
        status: 200,
        statusText: "OK",
        responseText: body ? String(body) : "",
        getResponseHeader: function getResponseHeader(name) {
          var headerName = String(name).toLowerCase();
          return hasOwn(lowercasedHeaders, headerName) ? lowercasedHeaders[headerName] : null;
        }
      }, init);
      data.status = init.status === void 0 ? 200 : parseInt(init.status, 10);
      if (isArray(init.headers)) {
        init.headers.forEach(function(entry) {
          var headerName = entry[0];
          var headerValue = entry[1];
          lowercasedHeaders[String(headerName).toLowerCase()] = String(headerValue);
        });
      } else if (isObject(init.headers)) {
        for (var key in init.headers) {
          lowercasedHeaders[String(key).toLowerCase()] = String(init.headers[key]);
        }
      }
      if (init.statusText) {
        data.statusText = String(init.statusText);
      }
      return _super.call(this, data);
    }
    return Response3;
  }(FetchResponse);
  function install5(win) {
    if (!win.fetch) {
      Object.defineProperty(win, "fetch", {
        value: fetchPolyfill,
        writable: true,
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(win, "Response", {
        value: Response2,
        writable: true,
        enumerable: false,
        configurable: true
      });
    }
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
  function escapeCssSelectorIdent(ident) {
    if (isEsm()) {
      return CSS.escape(ident);
    }
    return cssEscape(ident);
  }

  // src/core/dom/query.js
  function assertIsName(name) {
    devAssert(/^[\w-]+$/.test(name), 'Expected "' + name + '" to be a CSS name composed of alphanumerics and hyphens.');
  }
  function scopedQuerySelectionFallback(root, selector) {
    var unique = "i-amphtml-scoped";
    root.classList.add(unique);
    var scopedSelector = prependSelectorsWith(selector, "." + unique);
    var elements2 = root.querySelectorAll(scopedSelector);
    root.classList.remove(unique);
    return elements2;
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
  function childNodes(parent, callback) {
    var nodes = [];
    for (var child = parent.firstChild; child; child = child.nextSibling) {
      if (callback(child)) {
        nodes.push(child);
      }
    }
    return nodes;
  }
  function childElementByAttr(parent, attr) {
    assertIsName(attr);
    return scopedQuerySelector(parent, "> [" + attr + "]");
  }
  function childElementsByAttr(parent, attr) {
    assertIsName(attr);
    return scopedQuerySelectorAll(parent, "> [" + attr + "]");
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
  function waitForChildPromise(parent, checkFunc) {
    return new Promise(function(resolve) {
      waitForChild(parent, checkFunc, resolve);
    });
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
  function insertAfterOrAtStart(root, element, after) {
    if (after === void 0) {
      after = null;
    }
    if (!after) {
      insertAtStart(root, element);
      return;
    }
    var before = after.nextSibling;
    root.insertBefore(element, before);
  }
  function insertAtStart(root, element) {
    root.insertBefore(element, root.firstChild);
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
  function isConnectedNode(node) {
    var connected = node.isConnected;
    if (connected !== void 0) {
      return connected;
    }
    var n = node;
    do {
      n = rootNodeFor(n);
      if (n.host) {
        n = n.host;
      } else {
        break;
      }
    } while (true);
    return n.nodeType === Node.DOCUMENT_NODE;
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
  function hasNextNodeInDocumentOrder(element, opt_stopNode) {
    var currentElement = element;
    do {
      if (currentElement.nextSibling) {
        return true;
      }
    } while ((currentElement = currentElement.parentNode) && currentElement != opt_stopNode);
    return false;
  }
  function iterateCursor(iterable, cb) {
    var length = iterable.length;
    for (var i = 0; i < length; i++) {
      cb(iterable[i], i);
    }
  }
  function tryFocus(element) {
    try {
      element.focus();
    } catch (e) {
    }
  }
  function isIframed(win) {
    return win.parent && win.parent != win;
  }
  function isEnabled(element) {
    return !(element.disabled || matches(element, ":disabled"));
  }
  function dispatchCustomEvent(node, name, opt_data, opt_options) {
    var data = opt_data || {};
    var event = node.ownerDocument.createEvent("Event");
    event.data = data;
    var _ref = opt_options || DEFAULT_CUSTOM_EVENT_OPTIONS, bubbles = _ref.bubbles, cancelable = _ref.cancelable;
    event.initEvent(name, bubbles, cancelable);
    node.dispatchEvent(event);
  }
  function containsNotSelf(parent, child) {
    return child !== parent && parent.contains(child);
  }
  function isServerRendered(element) {
    return element.hasAttribute("i-amphtml-ssr");
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
  function rectsOverlap(r1, r2) {
    return r1.top <= r2.bottom && r2.top <= r1.bottom && r1.left <= r2.right && r2.left <= r1.right;
  }
  function rectIntersection(var_args) {
    var x0 = -Infinity;
    var x1 = Infinity;
    var y0 = -Infinity;
    var y1 = Infinity;
    for (var i = 0; i < arguments.length; i++) {
      var current = arguments[i];
      if (!current) {
        continue;
      }
      x0 = Math.max(x0, current.left);
      x1 = Math.min(x1, current.left + current.width);
      y0 = Math.max(y0, current.top);
      y1 = Math.min(y1, current.top + current.height);
      if (x1 < x0 || y1 < y0) {
        return null;
      }
    }
    if (x1 == Infinity) {
      return null;
    }
    return layoutRectLtwh(x0, y0, x1 - x0, y1 - y0);
  }
  function moveLayoutRect(rect, dx, dy) {
    if (dx == 0 && dy == 0 || rect.width == 0 && rect.height == 0) {
      return rect;
    }
    return layoutRectLtwh(rect.left + dx, rect.top + dy, rect.width, rect.height);
  }
  function layoutRectSizeEquals(from, to) {
    return from.width == to.width && from.height === to.height;
  }
  function layoutSizeFromRect(rect) {
    var height = rect.height, width = rect.width;
    return {
      width: width,
      height: height
    };
  }

  // src/polyfills/get-bounding-client-rect.js
  var nativeClientRect;
  function getBoundingClientRect() {
    if (isEsm() || isConnectedNode(this)) {
      return nativeClientRect.call(this);
    }
    return layoutRectLtwh(0, 0, 0, 0);
  }
  function shouldInstall(win) {
    if (isEsm()) {
      return false;
    }
    if (!win.document) {
      return false;
    }
    try {
      var div = win.document.createElement("div");
      var rect = div.getBoundingClientRect();
      return rect.top !== 0;
    } catch (e) {
      return true;
    }
  }
  function install6(win) {
    if (shouldInstall(win)) {
      nativeClientRect = Element.prototype.getBoundingClientRect;
      win.Object.defineProperty(win.Element.prototype, "getBoundingClientRect", {
        value: getBoundingClientRect
      });
    }
  }

  // src/polyfills/stubs/intersection-observer-stub.js
  function _createForOfIteratorHelperLoose4(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray4(o)) || allowArrayLike && o && typeof o.length === "number") {
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
  function _unsupportedIterableToArray4(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray4(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray4(o, minLen);
  }
  function _arrayLikeToArray4(arr, len) {
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
  function _defineProperties2(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass2(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties2(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties2(Constructor, staticProps);
    return Constructor;
  }
  var UPGRADERS = "_upgraders";
  var NATIVE = "_native";
  var STUB = "_stub";
  function shouldLoadPolyfill(win) {
    return !win.IntersectionObserver || !win.IntersectionObserverEntry || !!win.IntersectionObserver[STUB] || !supportsDocumentRoot(win) || isWebkit(win);
  }
  function isWebkit(win) {
    return /apple/i.test(win.navigator.vendor);
  }
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
  function installStub(win) {
    if (!win.IntersectionObserver) {
      win.IntersectionObserver = IntersectionObserverStub;
      win.IntersectionObserver[STUB] = IntersectionObserverStub;
      return;
    }
    var Native = win.IntersectionObserver;
    win.IntersectionObserver = getIntersectionObserverDispatcher(win.IntersectionObserver, IntersectionObserverStub);
    win.IntersectionObserver[STUB] = IntersectionObserverStub;
    win.IntersectionObserver[NATIVE] = Native;
  }
  function supportsDocumentRoot(win) {
    try {
      new win.IntersectionObserver(function() {
      }, {
        root: win.document
      });
      return true;
    } catch (_unused) {
      return false;
    }
  }
  var IntersectionObserverStub = /* @__PURE__ */ function() {
    function IntersectionObserverStub2(callback, options) {
      this.callback_ = callback;
      this.options_ = _extends2({
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
      for (var _iterator = _createForOfIteratorHelperLoose4(this.elements_), _step; !(_step = _iterator()).done; ) {
        var e = _step.value;
        inst.observe(e);
      }
      this.elements_.length = 0;
    };
    _createClass2(IntersectionObserverStub2, [{
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

  // src/polyfills/intersection-observer.js
  function install7(win) {
    if (shouldLoadPolyfill(win)) {
      installStub(win);
    }
    fixEntry(win);
  }
  function fixEntry(win) {
    if (win.IntersectionObserverEntry && !("isIntersecting" in win.IntersectionObserverEntry.prototype)) {
      Object.defineProperty(win.IntersectionObserverEntry.prototype, "isIntersecting", {
        enumerable: true,
        configurable: true,
        get: function get() {
          return this.intersectionRatio > 0;
        }
      });
    }
  }

  // src/polyfills/map-set.js
  function install8(win) {
    var Map2 = win.Map;
    var m = new Map2();
    if (m.set(0, 0) !== m) {
      var set = m.set;
      win.Object.defineProperty(Map2.prototype, "set", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function value() {
          set.apply(this, arguments);
          return this;
        }
      });
    }
  }

  // src/polyfills/math-sign.js
  function sign(x) {
    x = Number(x);
    if (!x) {
      return x;
    }
    return x > 0 ? 1 : -1;
  }
  function install9(win) {
    if (!win.Math.sign) {
      win.Object.defineProperty(win.Math, "sign", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: sign
      });
    }
  }

  // src/polyfills/object-assign.js
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function assign(target, var_args) {
    if (target == null) {
      throw new TypeError("Cannot convert undefined or null to object");
    }
    var output = Object(target);
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      if (source != null) {
        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            output[key] = source[key];
          }
        }
      }
    }
    return output;
  }
  function install10(win) {
    if (!win.Object.assign) {
      win.Object.defineProperty(win.Object, "assign", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: assign
      });
    }
  }

  // src/polyfills/object-values.js
  function values(target) {
    return Object.keys(target).map(function(k) {
      return target[k];
    });
  }
  function install11(win) {
    if (!win.Object.values) {
      win.Object.defineProperty(win.Object, "values", {
        configurable: true,
        writable: true,
        value: values
      });
    }
  }

  // src/polyfills/stubs/resize-observer-stub.js
  function _createForOfIteratorHelperLoose5(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray5(o)) || allowArrayLike && o && typeof o.length === "number") {
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
  function _unsupportedIterableToArray5(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray5(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray5(o, minLen);
  }
  function _arrayLikeToArray5(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  var UPGRADERS2 = "_upgraders";
  var STUB2 = "_stub";
  function shouldLoadPolyfill2(win) {
    return !win.ResizeObserver || !!win.ResizeObserver[STUB2];
  }
  function installStub2(win) {
    if (win.ResizeObserver) {
      return;
    }
    win.ResizeObserver = ResizeObserverStub;
    win.ResizeObserver[STUB2] = ResizeObserverStub;
  }
  var ResizeObserverStub = /* @__PURE__ */ function() {
    function ResizeObserverStub2(callback) {
      this.callback_ = callback;
      this.elements_ = [];
      this.inst_ = null;
      ResizeObserverStub2[UPGRADERS2].push(this.upgrade_.bind(this));
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
      for (var _iterator2 = _createForOfIteratorHelperLoose5(this.elements_), _step2; !(_step2 = _iterator2()).done; ) {
        var e = _step2.value;
        inst.observe(e);
      }
      this.elements_.length = 0;
    };
    return ResizeObserverStub2;
  }();
  ResizeObserverStub[UPGRADERS2] = [];

  // src/polyfills/resize-observer.js
  function install12(win) {
    if (shouldLoadPolyfill2(win)) {
      installStub2(win);
    }
  }

  // src/polyfills/set.js
  function install13(win) {
    var SetConstructor = win.Set;
    var s = new SetConstructor([1]);
    if (s.size < 1) {
      win.Set = function(iterable) {
        var set = new SetConstructor();
        if (iterable) {
          var asArray = toArray(iterable);
          for (var i = 0; i < asArray.length; i++) {
            set.add(asArray[i]);
          }
        }
        return set;
      };
    }
    if (s.add(0) !== s) {
      var add = s.add;
      win.Object.defineProperty(SetConstructor.prototype, "add", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function value() {
          add.apply(this, arguments);
          return this;
        }
      });
    }
  }

  // src/polyfills/string-starts-with.js
  function startsWith(search, rawPos) {
    var pos = rawPos > 0 ? rawPos | 0 : 0;
    return this.substr(pos, search.length) === search;
  }
  function install14(win) {
    if (!win.String.prototype.startsWith) {
      win.Object.defineProperty(win.String.prototype, "startsWith", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: startsWith
      });
    }
  }

  // src/polyfills/weakmap-set.js
  function install15(win) {
    var WeakMap2 = win.WeakMap;
    var m = new WeakMap2();
    if (m.set({}, 0) !== m) {
      var set = m.set;
      win.Object.defineProperty(WeakMap2.prototype, "set", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function value() {
          set.apply(this, arguments);
          return this;
        }
      });
    }
  }

  // src/polyfills/index.js
  if (!isEsm()) {
    install5(self);
    install9(self);
    install10(self);
    install11(self);
    install2(self);
    install8(self);
    install15(self);
    install13(self);
    install14(self);
  }
  if (self.document) {
    if (!isEsm()) {
      install4(self);
      install6(self);
      install3(self, /* @__PURE__ */ function() {
        function _class() {
        }
        return _class;
      }());
    }
    if (true) {
      install7(self);
      install12(self);
      install(self);
    }
  }

  // src/core/constants/enums.js
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

  // src/service/extension-script.js
  var CUSTOM_TEMPLATES = ["amp-mustache"];
  var LATEST_VERSION = "latest";
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
  function calculateExtensionScriptUrl(location, extensionId, version2, opt_isLocalDev) {
    var fileExtension = isEsm() ? ".mjs" : ".js";
    var base = calculateScriptBaseUrl(location, opt_isLocalDev);
    var rtv = getMode().rtvVersion;
    var extensionVersion = version2 ? "-" + version2 : "";
    return base + "/rtv/" + rtv + "/v0/" + extensionId + extensionVersion + fileExtension;
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
  function createExtensionScript(win, extensionId, version2) {
    var scriptElement = win.document.createElement("script");
    scriptElement.async = true;
    if (isIntermediateExtension(extensionId)) {
      version2 = "";
    } else {
      scriptElement.setAttribute(CUSTOM_TEMPLATES.indexOf(extensionId) >= 0 ? "custom-template" : "custom-element", extensionId);
    }
    scriptElement.setAttribute("data-script", extensionId);
    scriptElement.setAttribute("i-amphtml-inserted", "");
    if (isEsm()) {
      scriptElement.setAttribute("type", "module");
    }
    var currentScript = win.document.head.querySelector("script[nonce]");
    if (currentScript) {
      scriptElement.setAttribute("nonce", currentScript.getAttribute("nonce"));
    }
    scriptElement.setAttribute("crossorigin", "anonymous");
    var loc = win.location;
    if (getMode(win).test && win.testLocation) {
      loc = win.testLocation;
    }
    var scriptSrc = calculateExtensionScriptUrl(loc, extensionId, version2, getMode(win).localDev);
    scriptElement.src = scriptSrc;
    return scriptElement;
  }
  function getExtensionScripts(win, extensionId, version2, latest, includeInserted) {
    if (includeInserted === void 0) {
      includeInserted = true;
    }
    var modifier = ":not([i-amphtml-loaded-new-version])" + (includeInserted ? "" : ":not([i-amphtml-inserted])");
    var matches2 = win.document.head.querySelectorAll('script[src*="/' + extensionId + '-"]' + modifier);
    var filtered = [];
    for (var i = 0; i < matches2.length; i++) {
      var match = matches2[i];
      var urlParts = parseExtensionUrl(match.src);
      if (!urlParts) {
        continue;
      }
      var scriptExtensionId = urlParts.extensionId, scriptExtensionVersion = urlParts.extensionVersion;
      if (scriptExtensionId == extensionId && (isIntermediateExtension(extensionId) || scriptExtensionVersion == version2 || scriptExtensionVersion == LATEST_VERSION && latest)) {
        filtered.push(match);
      }
    }
    return filtered;
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
  function isIntermediateExtension(extensionId) {
    return extensionId.startsWith("_");
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
  function rejectServicePromiseForDoc(nodeOrDoc, id, error) {
    var ampdoc2 = getAmpdoc(nodeOrDoc);
    var holder = getAmpdocServiceHolder(ampdoc2);
    rejectServicePromiseInternal(holder, id, error);
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
  function rejectServicePromiseInternal(holder, id, error) {
    var services = getServices(holder);
    var s = services[id];
    if (s) {
      if (s.reject) {
        s.reject(error);
      }
      return;
    }
    services[id] = emptyServiceHolderWithPromise();
    services[id].reject(error);
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
  function isDisposable(service) {
    return typeof service.dispose == "function";
  }
  function assertDisposable(service) {
    devAssert2(isDisposable(service), "required to implement Disposable");
    return service;
  }
  function disposeServicesForDoc(ampdoc2) {
    disposeServicesInternal(ampdoc2);
  }
  function disposeServicesInternal(holder) {
    var services = getServices(holder);
    var _loop = function _loop2(id2) {
      if (!Object.prototype.hasOwnProperty.call(services, id2)) {
        return "continue";
      }
      var serviceHolder = services[id2];
      if (serviceHolder.sharedInstance) {
        return "continue";
      }
      if (serviceHolder.obj) {
        disposeServiceInternal(id2, serviceHolder.obj);
      } else if (serviceHolder.promise) {
        serviceHolder.promise.then(function(instance) {
          return disposeServiceInternal(id2, instance);
        });
      }
    };
    for (var id in services) {
      var _ret = _loop(id);
      if (_ret === "continue")
        continue;
    }
  }
  function disposeServiceInternal(id, service) {
    if (!isDisposable(service)) {
      return;
    }
    try {
      assertDisposable(service).dispose();
    } catch (e) {
      dev().error("SERVICE", "failed to dispose service", id, e);
    }
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
      var ampdocService2 = ampdocServiceForInternal(thisAmpdoc.win);
      var topAmpdoc = ampdocService2.isSingleDoc() ? ampdocService2.getSingleDoc() : null;
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

  // src/core/constants/visibility-state.js
  var VisibilityState_Enum = {
    PRERENDER: "prerender",
    VISIBLE: "visible",
    HIDDEN: "hidden",
    PAUSED: "paused",
    INACTIVE: "inactive"
  };

  // src/core/data-structures/observable.js
  function _createForOfIteratorHelperLoose6(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray6(o)) || allowArrayLike && o && typeof o.length === "number") {
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
  function _unsupportedIterableToArray6(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray6(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray6(o, minLen);
  }
  function _arrayLikeToArray6(arr, len) {
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
      for (var _iterator = _createForOfIteratorHelperLoose6(this.handlers_), _step; !(_step = _iterator()).done; ) {
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

  // src/core/data-structures/signals.js
  var Signals = /* @__PURE__ */ function() {
    function Signals2() {
      this.map_ = map();
      this.promiseMap_ = null;
    }
    var _proto = Signals2.prototype;
    _proto.get = function get(name) {
      var v = this.map_[name];
      return v == null ? null : v;
    };
    _proto.whenSignal = function whenSignal(name) {
      var _this$promiseMap_;
      var promiseStruct = (_this$promiseMap_ = this.promiseMap_) == null ? void 0 : _this$promiseMap_[name];
      if (!promiseStruct) {
        var result = this.map_[name];
        if (result != null) {
          var promise = typeof result == "number" ? Promise.resolve(result) : Promise.reject(result);
          promiseStruct = {
            promise: promise
          };
        } else {
          promiseStruct = new Deferred();
        }
        if (!this.promiseMap_) {
          this.promiseMap_ = map();
        }
        this.promiseMap_[name] = promiseStruct;
      }
      return promiseStruct.promise;
    };
    _proto.signal = function signal(name, opt_time) {
      var _this$promiseMap_2;
      if (this.map_[name] != null) {
        return;
      }
      var time = opt_time != null ? opt_time : Date.now();
      this.map_[name] = time;
      var promiseStruct = (_this$promiseMap_2 = this.promiseMap_) == null ? void 0 : _this$promiseMap_2[name];
      if (promiseStruct != null && promiseStruct.resolve) {
        promiseStruct.resolve(time);
        promiseStruct.resolve = void 0;
        promiseStruct.reject = void 0;
      }
    };
    _proto.rejectSignal = function rejectSignal(name, error) {
      var _this$promiseMap_3;
      if (this.map_[name] != null) {
        return;
      }
      this.map_[name] = error;
      var promiseStruct = (_this$promiseMap_3 = this.promiseMap_) == null ? void 0 : _this$promiseMap_3[name];
      if (promiseStruct != null && promiseStruct.reject) {
        promiseStruct.reject(error);
        promiseStruct.promise.catch(function() {
        });
        promiseStruct.resolve = void 0;
        promiseStruct.reject = void 0;
      }
    };
    _proto.reset = function reset(name) {
      var _this$promiseMap_4;
      if (this.map_[name]) {
        delete this.map_[name];
      }
      var promiseStruct = (_this$promiseMap_4 = this.promiseMap_) == null ? void 0 : _this$promiseMap_4[name];
      if (promiseStruct && !promiseStruct.resolve) {
        delete this.promiseMap_[name];
      }
    };
    return Signals2;
  }();

  // src/core/document/ready.js
  function isDocumentReady(doc) {
    return doc.readyState != "loading" && doc.readyState != "uninitialized";
  }
  function isDocumentComplete(doc) {
    return doc.readyState == "complete";
  }
  function onDocumentReady(doc, callback) {
    onDocumentState(doc, isDocumentReady, callback);
  }
  function onDocumentState(doc, stateFn, callback) {
    var ready = stateFn(doc);
    if (ready) {
      callback(doc);
    } else {
      var readyListener = function readyListener2() {
        if (stateFn(doc)) {
          if (!ready) {
            ready = true;
            callback(doc);
          }
          doc.removeEventListener("readystatechange", readyListener2);
        }
      };
      doc.addEventListener("readystatechange", readyListener);
    }
  }
  function whenDocumentReady(doc) {
    return new Promise(function(resolve) {
      onDocumentReady(doc, resolve);
    });
  }
  function whenDocumentComplete(doc) {
    return new Promise(function(resolve) {
      onDocumentState(doc, isDocumentComplete, resolve);
    });
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
  function computedStyle(win, el) {
    var style = win.getComputedStyle(el);
    return style || EMPTY_CSS_DECLARATION;
  }
  function resetStyles(element, properties) {
    for (var i = 0; i < properties.length; i++) {
      setStyle(element, properties[i], null);
    }
  }
  function propagateObjectFitStyles(fromEl, toEl) {
    if (fromEl.hasAttribute("object-fit")) {
      setStyle(toEl, "object-fit", fromEl.getAttribute("object-fit"));
    }
    if (fromEl.hasAttribute("object-position")) {
      setStyle(toEl, "object-position", fromEl.getAttribute("object-position"));
    }
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
  function addDocumentVisibilityChangeListener(doc, handler) {
    if (!doc.addEventListener) {
      return;
    }
    var visibilityChangeEvent = getVisibilityChangeEvent(doc);
    if (visibilityChangeEvent) {
      doc.addEventListener(visibilityChangeEvent, handler);
    }
  }
  function removeDocumentVisibilityChangeListener(doc, handler) {
    if (!doc.removeEventListener) {
      return;
    }
    var visibilityChangeEvent = getVisibilityChangeEvent(doc);
    if (visibilityChangeEvent) {
      doc.removeEventListener(visibilityChangeEvent, handler);
    }
  }
  function getVisibilityChangeEvent(doc) {
    var hiddenProp = getVendorJsPropertyName(doc, "hidden", true);
    var vendorStop = hiddenProp.indexOf("Hidden");
    return vendorStop != -1 ? hiddenProp.substring(0, vendorStop) + "Visibilitychange" : "visibilitychange";
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

  // src/service/ampdoc-impl.js
  function _inherits2(subClass2, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass2.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass2, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf2(subClass2, superClass);
  }
  function _setPrototypeOf2(o, p) {
    _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf11(o2, p2) {
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
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf11(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf2(o);
  }
  var AMPDOC_PROP = "__AMPDOC";
  var PARAMS_SENTINEL = "__AMP__";
  var AmpDocSignals_Enum = {
    EXTENSIONS_KNOWN: "-ampdoc-ext-known",
    FIRST_VISIBLE: "-ampdoc-first-visible",
    NEXT_VISIBLE: "-ampdoc-next-visible"
  };
  var AmpDocService = /* @__PURE__ */ function() {
    function AmpDocService2(win, isSingleDoc, opt_initParams) {
      this.win = win;
      this.singleDoc_ = null;
      if (isSingleDoc) {
        this.singleDoc_ = new AmpDocSingle(win, {
          params: extractSingleDocParams(win, opt_initParams)
        });
        win.document[AMPDOC_PROP] = this.singleDoc_;
      }
    }
    var _proto = AmpDocService2.prototype;
    _proto.isSingleDoc = function isSingleDoc() {
      return !!this.singleDoc_;
    };
    _proto.getSingleDoc = function getSingleDoc() {
      return devAssert2(this.singleDoc_);
    };
    _proto.getCustomElementAmpDocReference_ = function getCustomElementAmpDocReference_(node) {
      if (!node.everAttached || typeof node.getAmpDoc !== "function") {
        return null;
      }
      return node.getAmpDoc();
    };
    _proto.getAmpDocIfAvailable = function getAmpDocIfAvailable(node) {
      var n = node;
      while (n) {
        var cachedAmpDoc = this.getCustomElementAmpDocReference_(node);
        if (cachedAmpDoc) {
          return cachedAmpDoc;
        }
        var rootNode = rootNodeFor(n);
        if (!rootNode) {
          break;
        }
        var ampdoc2 = rootNode[AMPDOC_PROP];
        if (ampdoc2) {
          return ampdoc2;
        }
        if (rootNode.host) {
          n = rootNode.host;
        } else {
          n = getParentWindowFrameElement(rootNode, this.win);
        }
      }
      return null;
    };
    _proto.getAmpDoc = function getAmpDoc(node) {
      var ampdoc2 = this.getAmpDocIfAvailable(node);
      if (!ampdoc2) {
        throw dev().createError("No ampdoc found for", node);
      }
      return ampdoc2;
    };
    _proto.installShadowDoc = function installShadowDoc(url, shadowRoot, opt_options) {
      devAssert2(!shadowRoot[AMPDOC_PROP], "The shadow root already contains ampdoc");
      var ampdoc2 = new AmpDocShadow(this.win, url, shadowRoot, opt_options);
      shadowRoot[AMPDOC_PROP] = ampdoc2;
      return ampdoc2;
    };
    _proto.installFieDoc = function installFieDoc(url, childWin, opt_options) {
      var doc = childWin.document;
      devAssert2(!doc[AMPDOC_PROP], "The fie already contains ampdoc");
      var frameElement = devAssert2(childWin.frameElement);
      var ampdoc2 = new AmpDocFie(childWin, url, this.getAmpDoc(frameElement), opt_options);
      doc[AMPDOC_PROP] = ampdoc2;
      return ampdoc2;
    };
    return AmpDocService2;
  }();
  var AmpDoc = /* @__PURE__ */ function() {
    function AmpDoc2(win, parent, opt_options) {
      var _this = this;
      this.win = win;
      this.registeredSingleton_ = map();
      this.parent_ = parent;
      this.signals_ = opt_options && opt_options.signals || new Signals();
      this.params_ = opt_options && opt_options.params || map();
      this.meta_ = null;
      this.declaredExtensions_ = {};
      var paramsVisibilityState = this.params_["visibilityState"];
      devAssert2(!paramsVisibilityState || isEnumValue(VisibilityState_Enum, paramsVisibilityState));
      this.visibilityStateOverride_ = opt_options && opt_options.visibilityState || paramsVisibilityState || null;
      this.visibilityState_ = null;
      this.visibilityStateHandlers_ = new Observable();
      this.lastVisibleTime_ = null;
      this.unsubsribes_ = [];
      var boundUpdateVisibilityState = this.updateVisibilityState_.bind(this);
      if (this.parent_) {
        this.unsubsribes_.push(this.parent_.onVisibilityChanged(boundUpdateVisibilityState));
      }
      addDocumentVisibilityChangeListener(this.win.document, boundUpdateVisibilityState);
      this.unsubsribes_.push(function() {
        return removeDocumentVisibilityChangeListener(_this.win.document, boundUpdateVisibilityState);
      });
      this.updateVisibilityState_();
    }
    var _proto2 = AmpDoc2.prototype;
    _proto2.dispose = function dispose() {
      disposeServicesForDoc(this);
      this.unsubsribes_.forEach(function(unsubsribe) {
        return unsubsribe();
      });
    };
    _proto2.isSingleDoc = function isSingleDoc() {
      return devAssert2(null, "not implemented");
    };
    _proto2.getParent = function getParent() {
      return this.parent_;
    };
    _proto2.signals = function signals() {
      return this.signals_;
    };
    _proto2.getParam = function getParam(name) {
      var v = this.params_[name];
      return v == null ? null : v;
    };
    _proto2.getMeta = function getMeta() {
      var _this2 = this;
      if (this.meta_) {
        return map(this.meta_);
      }
      this.meta_ = map();
      var metaEls = dev().assertElement(this.win.document.head).querySelectorAll("meta[name]");
      iterateCursor(metaEls, function(metaEl) {
        var name = metaEl.getAttribute("name");
        var content = metaEl.getAttribute("content");
        if (!name || content === null) {
          return;
        }
        if (_this2.meta_[name] === void 0) {
          _this2.meta_[name] = content;
        }
      });
      return map(this.meta_);
    };
    _proto2.getMetaByName = function getMetaByName(name) {
      if (!name) {
        return null;
      }
      var content = this.getMeta()[name];
      return content !== void 0 ? content : null;
    };
    _proto2.setMetaByName = function setMetaByName(unusedName, unusedContent) {
      devAssert2(null, "not implemented");
    };
    _proto2.declaresExtension = function declaresExtension(extensionId, opt_version) {
      var declared = this.declaredExtensions_[extensionId];
      if (!declared) {
        return false;
      }
      return !opt_version || declared === opt_version;
    };
    _proto2.declareExtension = function declareExtension(extensionId, version2) {
      devAssert2(!this.declaredExtensions_[extensionId] || this.declaredExtensions_[extensionId] === version2, "extension already declared %s", extensionId);
      this.declaredExtensions_[extensionId] = version2;
    };
    _proto2.getExtensionVersion = function getExtensionVersion(extensionId) {
      return this.declaredExtensions_[extensionId] || null;
    };
    _proto2.setExtensionsKnown = function setExtensionsKnown() {
      this.signals_.signal(AmpDocSignals_Enum.EXTENSIONS_KNOWN);
    };
    _proto2.whenExtensionsKnown = function whenExtensionsKnown() {
      return this.signals_.whenSignal(AmpDocSignals_Enum.EXTENSIONS_KNOWN);
    };
    _proto2.getRootNode = function getRootNode() {
      return devAssert2(null, "not implemented");
    };
    _proto2.getHeadNode = function getHeadNode() {
    };
    _proto2.isBodyAvailable = function isBodyAvailable() {
      return devAssert2(false, "not implemented");
    };
    _proto2.getBody = function getBody() {
      return devAssert2(null, "not implemented");
    };
    _proto2.waitForBodyOpen = function waitForBodyOpen2() {
      return devAssert2(null, "not implemented");
    };
    _proto2.isReady = function isReady() {
      return devAssert2(null, "not implemented");
    };
    _proto2.whenReady = function whenReady() {
      return devAssert2(null, "not implemented");
    };
    _proto2.getUrl = function getUrl() {
      return devAssert2(null, "not implemented");
    };
    _proto2.getElementById = function getElementById(id) {
      return this.getRootNode().getElementById(id);
    };
    _proto2.contains = function contains(node) {
      return this.getRootNode().contains(node);
    };
    _proto2.overrideVisibilityState = function overrideVisibilityState(visibilityState) {
      if (this.visibilityStateOverride_ != visibilityState) {
        this.visibilityStateOverride_ = visibilityState;
        this.updateVisibilityState_();
      }
    };
    _proto2.updateVisibilityState_ = function updateVisibilityState_() {
      var naturalVisibilityState = getDocumentVisibilityState(this.win.document);
      var parentVisibilityState = VisibilityState_Enum.VISIBLE;
      for (var p = this.parent_; p; p = p.getParent()) {
        if (p.getVisibilityState() != VisibilityState_Enum.VISIBLE) {
          parentVisibilityState = p.getVisibilityState();
          break;
        }
      }
      var visibilityState;
      var visibilityStateOverride = this.visibilityStateOverride_ || VisibilityState_Enum.VISIBLE;
      if (visibilityStateOverride == VisibilityState_Enum.VISIBLE && parentVisibilityState == VisibilityState_Enum.VISIBLE && naturalVisibilityState == VisibilityState_Enum.VISIBLE) {
        visibilityState = VisibilityState_Enum.VISIBLE;
      } else if (naturalVisibilityState == VisibilityState_Enum.HIDDEN && visibilityStateOverride == VisibilityState_Enum.PAUSED) {
        visibilityState = naturalVisibilityState;
      } else if (visibilityStateOverride == VisibilityState_Enum.PAUSED || visibilityStateOverride == VisibilityState_Enum.INACTIVE) {
        visibilityState = visibilityStateOverride;
      } else if (parentVisibilityState == VisibilityState_Enum.PAUSED || parentVisibilityState == VisibilityState_Enum.INACTIVE) {
        visibilityState = parentVisibilityState;
      } else if (visibilityStateOverride == VisibilityState_Enum.PRERENDER || naturalVisibilityState == VisibilityState_Enum.PRERENDER || parentVisibilityState == VisibilityState_Enum.PRERENDER) {
        visibilityState = VisibilityState_Enum.PRERENDER;
      } else {
        visibilityState = VisibilityState_Enum.HIDDEN;
      }
      if (this.visibilityState_ != visibilityState) {
        if (visibilityState == VisibilityState_Enum.VISIBLE) {
          var visibleTime;
          var performance2 = this.win.performance;
          if (this.visibilityState_ == null) {
            var _performance$timeOrig;
            visibleTime = Math.floor((_performance$timeOrig = performance2.timeOrigin) != null ? _performance$timeOrig : performance2.timing.navigationStart);
          } else {
            visibleTime = Math.floor(performance2.now());
          }
          this.lastVisibleTime_ = visibleTime;
          this.signals_.signal(AmpDocSignals_Enum.FIRST_VISIBLE, visibleTime);
          this.signals_.signal(AmpDocSignals_Enum.NEXT_VISIBLE, visibleTime);
        } else {
          this.signals_.reset(AmpDocSignals_Enum.NEXT_VISIBLE);
        }
        this.visibilityState_ = visibilityState;
        this.visibilityStateHandlers_.fire();
      }
    };
    _proto2.whenFirstVisible = function whenFirstVisible() {
      return this.signals_.whenSignal(AmpDocSignals_Enum.FIRST_VISIBLE).then(function() {
        return void 0;
      });
    };
    _proto2.whenNextVisible = function whenNextVisible() {
      return this.signals_.whenSignal(AmpDocSignals_Enum.NEXT_VISIBLE).then(function() {
        return void 0;
      });
    };
    _proto2.getFirstVisibleTime = function getFirstVisibleTime() {
      return this.signals_.get(AmpDocSignals_Enum.FIRST_VISIBLE);
    };
    _proto2.getLastVisibleTime = function getLastVisibleTime() {
      return this.lastVisibleTime_;
    };
    _proto2.getVisibilityState = function getVisibilityState() {
      return devAssert2(this.visibilityState_);
    };
    _proto2.isVisible = function isVisible() {
      return this.visibilityState_ == VisibilityState_Enum.VISIBLE;
    };
    _proto2.hasBeenVisible = function hasBeenVisible() {
      return this.getLastVisibleTime() != null;
    };
    _proto2.onVisibilityChanged = function onVisibilityChanged(handler) {
      return this.visibilityStateHandlers_.add(handler);
    };
    _proto2.registerSingleton = function registerSingleton(name) {
      if (!this.registeredSingleton_[name]) {
        this.registeredSingleton_[name] = true;
        return true;
      }
      return false;
    };
    return AmpDoc2;
  }();
  var AmpDocSingle = /* @__PURE__ */ function(_AmpDoc) {
    _inherits2(AmpDocSingle2, _AmpDoc);
    var _super = _createSuper2(AmpDocSingle2);
    function AmpDocSingle2(win, opt_options) {
      var _this3;
      _this3 = _super.call(this, win, null, opt_options);
      _this3.bodyPromise_ = _this3.win.document.body ? Promise.resolve(_this3.win.document.body) : waitForBodyOpenPromise(_this3.win.document).then(function() {
        return _this3.getBody();
      });
      _this3.readyPromise_ = whenDocumentReady(_this3.win.document);
      return _this3;
    }
    var _proto3 = AmpDocSingle2.prototype;
    _proto3.isSingleDoc = function isSingleDoc() {
      return true;
    };
    _proto3.getRootNode = function getRootNode() {
      return this.win.document;
    };
    _proto3.getUrl = function getUrl() {
      return WindowInterface.getLocation(this.win).href;
    };
    _proto3.getHeadNode = function getHeadNode() {
      return dev().assertElement(this.win.document.head);
    };
    _proto3.isBodyAvailable = function isBodyAvailable() {
      return !!this.win.document.body;
    };
    _proto3.getBody = function getBody() {
      return dev().assertElement(this.win.document.body, "body not available");
    };
    _proto3.waitForBodyOpen = function waitForBodyOpen2() {
      return this.bodyPromise_;
    };
    _proto3.isReady = function isReady() {
      return isDocumentReady(this.win.document);
    };
    _proto3.whenReady = function whenReady() {
      return this.readyPromise_;
    };
    return AmpDocSingle2;
  }(AmpDoc);
  var AmpDocShadow = /* @__PURE__ */ function(_AmpDoc2) {
    _inherits2(AmpDocShadow2, _AmpDoc2);
    var _super2 = _createSuper2(AmpDocShadow2);
    function AmpDocShadow2(win, url, shadowRoot, opt_options) {
      var _this4;
      _this4 = _super2.call(this, win, null, opt_options);
      _this4.url_ = url;
      _this4.shadowRoot_ = shadowRoot;
      _this4.body_ = null;
      var bodyDeferred = new Deferred();
      _this4.bodyPromise_ = bodyDeferred.promise;
      _this4.bodyResolver_ = bodyDeferred.resolve;
      _this4.ready_ = false;
      var readyDeferred = new Deferred();
      _this4.readyPromise_ = readyDeferred.promise;
      _this4.readyResolver_ = readyDeferred.resolve;
      return _this4;
    }
    var _proto4 = AmpDocShadow2.prototype;
    _proto4.isSingleDoc = function isSingleDoc() {
      return false;
    };
    _proto4.getRootNode = function getRootNode() {
      return this.shadowRoot_;
    };
    _proto4.getUrl = function getUrl() {
      return this.url_;
    };
    _proto4.getHeadNode = function getHeadNode() {
      return this.shadowRoot_;
    };
    _proto4.isBodyAvailable = function isBodyAvailable() {
      return !!this.body_;
    };
    _proto4.getBody = function getBody() {
      return dev().assertElement(this.body_, "body not available");
    };
    _proto4.setBody = function setBody(body) {
      devAssert2(!this.body_, "Duplicate body");
      this.body_ = body;
      this.bodyResolver_(body);
      this.bodyResolver_ = void 0;
    };
    _proto4.waitForBodyOpen = function waitForBodyOpen2() {
      return this.bodyPromise_;
    };
    _proto4.isReady = function isReady() {
      return this.ready_;
    };
    _proto4.setReady = function setReady() {
      devAssert2(!this.ready_, "Duplicate ready state");
      this.ready_ = true;
      this.readyResolver_();
      this.readyResolver_ = void 0;
    };
    _proto4.whenReady = function whenReady() {
      return this.readyPromise_;
    };
    _proto4.getMeta = function getMeta() {
      return map(this.meta_);
    };
    _proto4.setMetaByName = function setMetaByName(name, content) {
      devAssert2(name, "Attempted to store invalid meta name/content pair");
      if (!this.meta_) {
        this.meta_ = map();
      }
      this.meta_[name] = content;
    };
    return AmpDocShadow2;
  }(AmpDoc);
  var AmpDocFie = /* @__PURE__ */ function(_AmpDoc3) {
    _inherits2(AmpDocFie2, _AmpDoc3);
    var _super3 = _createSuper2(AmpDocFie2);
    function AmpDocFie2(win, url, parent, opt_options) {
      var _this5;
      _this5 = _super3.call(this, win, parent, opt_options);
      _this5.url_ = url;
      _this5.bodyPromise_ = _this5.win.document.body ? Promise.resolve(_this5.win.document.body) : waitForBodyOpenPromise(_this5.win.document).then(function() {
        return _this5.getBody();
      });
      _this5.ready_ = false;
      var readyDeferred = new Deferred();
      _this5.readyPromise_ = readyDeferred.promise;
      _this5.readyResolver_ = readyDeferred.resolve;
      return _this5;
    }
    var _proto5 = AmpDocFie2.prototype;
    _proto5.isSingleDoc = function isSingleDoc() {
      return false;
    };
    _proto5.getRootNode = function getRootNode() {
      return this.win.document;
    };
    _proto5.getUrl = function getUrl() {
      return this.url_;
    };
    _proto5.getHeadNode = function getHeadNode() {
      return dev().assertElement(this.win.document.head);
    };
    _proto5.isBodyAvailable = function isBodyAvailable() {
      return !!this.win.document.body;
    };
    _proto5.getBody = function getBody() {
      return dev().assertElement(this.win.document.body, "body not available");
    };
    _proto5.waitForBodyOpen = function waitForBodyOpen2() {
      return this.bodyPromise_;
    };
    _proto5.isReady = function isReady() {
      return this.ready_;
    };
    _proto5.whenReady = function whenReady() {
      return this.readyPromise_;
    };
    _proto5.setReady = function setReady() {
      devAssert2(!this.ready_, "Duplicate ready state");
      this.ready_ = true;
      this.readyResolver_();
      this.readyResolver_ = void 0;
    };
    return AmpDocFie2;
  }(AmpDoc);
  function extractSingleDocParams(win, initParams) {
    var params = map();
    if (initParams) {
      Object.assign(params, initParams);
    } else {
      if (win.name && win.name.indexOf(PARAMS_SENTINEL) == 0) {
        Object.assign(params, parseQueryString(win.name.substring(PARAMS_SENTINEL.length)));
      }
      if (win.location && win.location.hash) {
        Object.assign(params, parseQueryString(win.location.hash));
      }
    }
    return params;
  }
  function installDocService(win, isSingleDoc, opt_initParams) {
    registerServiceBuilder(win, "ampdoc", function() {
      return new AmpDocService(win, isSingleDoc, opt_initParams);
    });
  }

  // src/core/constants/ready-state.js
  var ReadyState_Enum = {
    UPGRADING: "upgrading",
    BUILDING: "building",
    MOUNTING: "mounting",
    LOADING: "loading",
    COMPLETE: "complete",
    ERROR: "error"
  };

  // src/core/dom/img.js
  function guaranteeSrcForSrcsetUnsupportedBrowsers(img) {
    if (!img.hasAttribute("src") && "srcset" in img == false) {
      var srcset = img.getAttribute("srcset");
      var matches2 = /\S+/.exec(srcset);
      if (matches2 == null) {
        return;
      }
      var srcseturl = matches2[0];
      img.setAttribute("src", srcseturl);
    }
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
  var LayoutPriority_Enum = {
    CONTENT: 0,
    METADATA: 1,
    ADS: 2,
    BACKGROUND: 3
  };
  var LOADING_ELEMENTS_ENUM = {
    AMP_AD: "AMP-AD",
    AMP_ANIM: "AMP-ANIM",
    AMP_EMBED: "AMP-EMBED",
    AMP_FACEBOOK: "AMP-FACEBOOK",
    AMP_FACEBOOK_COMMENTS: "AMP-FACEBOOK-COMMENTS",
    AMP_FACEBOOK_PAGE: "AMP-FACEBOOK-PAGE",
    AMP_GOOGLE_DOCUMENT_EMBED: "AMP-GOOGLE-DOCUMENT-EMBED",
    AMP_IFRAME: "AMP-IFRAME",
    AMP_IMG: "AMP-IMG",
    AMP_INSTAGRAM: "AMP-INSTAGRAM",
    AMP_LIST: "AMP-LIST",
    AMP_PINTEREST: "AMP-PINTEREST",
    AMP_PLAYBUZZ: "AMP-PLAYBUZZ",
    AMP_RENDER: "AMP-RENDER",
    AMP_TIKTOK: "AMP-TIKTOK",
    AMP_TWITTER: "AMP-TWITTER"
  };
  var videoPlayerTagNameRe = /^amp\-(video|.+player)|AMP-BRIGHTCOVE|AMP-DAILYMOTION|AMP-YOUTUBE|AMP-VIMEO|AMP-IMA-VIDEO/i;
  function parseLayout(s) {
    if (isEnumValue(Layout_Enum, s)) {
      return s;
    }
    return void 0;
  }
  function getLayoutClass(layout) {
    return "i-amphtml-layout-" + layout;
  }
  function isLayoutSizeDefined(layout) {
    return layout == Layout_Enum.FIXED || layout == Layout_Enum.FIXED_HEIGHT || layout == Layout_Enum.RESPONSIVE || layout == Layout_Enum.FILL || layout == Layout_Enum.FLEX_ITEM || layout == Layout_Enum.FLUID || layout == Layout_Enum.INTRINSIC;
  }
  function parseLength(s) {
    if (typeof s == "number") {
      return s + "px";
    }
    if (!s) {
      return void 0;
    }
    if (!/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(s)) {
      return void 0;
    }
    if (/^\d+(\.\d+)?$/.test(s)) {
      return s + "px";
    }
    return s;
  }
  function assertLength(length) {
    userAssert(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)$/.test(length), "Invalid length value: %s", length);
    return length;
  }
  function getLengthUnits(length) {
    assertLength(length);
    var m = userAssert(/[a-z]+/i.exec(length), "Failed to read units from %s", length);
    return m[0];
  }
  function getLengthNumeral(length) {
    var res = parseFloat(length);
    return isFiniteNumber(res) ? res : void 0;
  }
  function isLoadingAllowed(element) {
    var tagName = element.tagName.toUpperCase();
    return isEnumValue(LOADING_ELEMENTS_ENUM, tagName) || isIframeVideoPlayerComponent(tagName);
  }
  function isIframeVideoPlayerComponent(tagName) {
    if (tagName == "AMP-VIDEO") {
      return false;
    }
    return videoPlayerTagNameRe.test(tagName);
  }
  function applyFillContent(element, opt_replacedContent) {
    element.classList.add("i-amphtml-fill-content");
    if (opt_replacedContent) {
      element.classList.add("i-amphtml-replaced-content");
    }
  }

  // src/core/dom/propagate-attributes.js
  function _createForOfIteratorHelperLoose7(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray7(o)) || allowArrayLike && o && typeof o.length === "number") {
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
  function _unsupportedIterableToArray7(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray7(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray7(o, minLen);
  }
  function _arrayLikeToArray7(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function propagateAttributes(attributes, sourceElement, updateElement, opt_removeMissingAttrs) {
    var attrs = arrayOrSingleItemToArray(attributes);
    for (var _iterator = _createForOfIteratorHelperLoose7(attrs), _step; !(_step = _iterator()).done; ) {
      var attr = _step.value;
      var val = sourceElement.getAttribute(attr);
      if (val !== null) {
        updateElement.setAttribute(attr, val);
      } else if (opt_removeMissingAttrs) {
        updateElement.removeAttribute(attr);
      }
    }
  }

  // src/core/constants/amp-events.js
  var AmpEvents_Enum = {
    DOM_UPDATE: "amp:dom-update",
    FORM_DIRTINESS_CHANGE: "amp:form-dirtiness-change",
    FORM_VALUE_CHANGE: "amp:form-value-change",
    VISIBILITY_CHANGE: "amp:visibilitychange",
    ATTACHED: "amp:attached",
    STUBBED: "amp:stubbed",
    LOAD_START: "amp:load-start",
    LOAD_END: "amp:load-end",
    ERROR: "amp:error",
    SIZE_CHANGED: "amp:size-changed",
    UNLOAD: "amp:unload"
  };

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

  // src/core/dom/amp-element-helpers.js
  var UPGRADE_TO_CUSTOMELEMENT_PROMISE = "__AMP_UPG_PRM";
  var UPGRADE_TO_CUSTOMELEMENT_RESOLVER = "__AMP_UPG_RES";

  // src/core/dom/media-query-props.js
  var TRUE_VALUE = "1";
  var MediaQueryProps = /* @__PURE__ */ function() {
    function MediaQueryProps2(win, callback) {
      this.win_ = win;
      this.callback_ = callback;
      this.exprMap_ = {};
      this.prevExprMap_ = null;
    }
    var _proto = MediaQueryProps2.prototype;
    _proto.start = function start() {
      this.prevExprMap_ = this.exprMap_;
      this.exprMap_ = {};
    };
    _proto.resolveMatchQuery = function resolveMatchQuery(queryString) {
      return this.resolve_(queryString, parseMediaQueryMatchExpr, TRUE_VALUE) === TRUE_VALUE;
    };
    _proto.resolveListQuery = function resolveListQuery(exprString) {
      return this.resolve_(exprString, parseMediaQueryListExpr, "");
    };
    _proto.complete = function complete() {
      for (var k in this.prevExprMap_) {
        if (!(k in this.exprMap_)) {
          toggleOnChange(this.prevExprMap_[k], this.callback_, false);
        }
      }
      this.prevExprMap_ = null;
    };
    _proto.dispose = function dispose() {
      for (var k in this.exprMap_) {
        toggleOnChange(this.exprMap_[k], this.callback_, false);
      }
      this.exprMap_ = {};
    };
    _proto.resolve_ = function resolve_(exprString, parser, emptyExprValue) {
      if (!exprString.trim()) {
        return emptyExprValue;
      }
      var expr = this.exprMap_[exprString] || this.prevExprMap_[exprString];
      if (!expr) {
        expr = parser(this.win_, exprString);
        toggleOnChange(expr, this.callback_, true);
      }
      this.exprMap_[exprString] = expr;
      return resolveMediaQueryListExpr(expr);
    };
    return MediaQueryProps2;
  }();
  function parseMediaQueryMatchExpr(win, queryString) {
    var query2 = win.matchMedia(queryString);
    return [{
      query: query2,
      value: TRUE_VALUE
    }, {
      query: null,
      value: ""
    }];
  }
  function parseMediaQueryListExpr(win, exprString) {
    return exprString.split(",").map(function(part) {
      part = part.replace(/\s+/g, " ").trim();
      if (part.length == 0) {
        return;
      }
      var queryString;
      var value;
      var lastChar = part.charAt(part.length - 1);
      var div;
      if (lastChar == ")") {
        var parens = 1;
        div = part.length - 2;
        for (; div >= 0; div--) {
          var c = part.charAt(div);
          if (c == "(") {
            parens--;
          } else if (c == ")") {
            parens++;
          }
          if (parens == 0) {
            break;
          }
        }
        var funcEnd = div - 1;
        if (div > 0) {
          div--;
          for (; div >= 0; div--) {
            var _c = part.charAt(div);
            if (!(_c == "%" || _c == "-" || _c == "_" || _c >= "a" && _c <= "z" || _c >= "A" && _c <= "Z" || _c >= "0" && _c <= "9")) {
              break;
            }
          }
        }
        if (div >= funcEnd) {
          return null;
        }
      } else {
        div = part.length - 2;
        for (; div >= 0; div--) {
          var _c2 = part.charAt(div);
          if (!(_c2 == "%" || _c2 == "." || _c2 >= "a" && _c2 <= "z" || _c2 >= "A" && _c2 <= "Z" || _c2 >= "0" && _c2 <= "9")) {
            break;
          }
        }
      }
      if (div >= 0) {
        queryString = part.substring(0, div + 1).trim();
        value = part.substring(div + 1).trim();
      } else {
        value = part;
        queryString = void 0;
      }
      if (!value) {
        return null;
      }
      var query2 = queryString ? win.matchMedia(queryString) : null;
      return {
        query: query2,
        value: value
      };
    }).filter(Boolean);
  }
  function resolveMediaQueryListExpr(expr) {
    for (var i = 0; i < expr.length; i++) {
      var _expr$i = expr[i], query2 = _expr$i.query, value = _expr$i.value;
      if (!query2 || query2.matches) {
        return value;
      }
    }
    return "";
  }
  function toggleOnChange(expr, callback, on) {
    for (var i = 0; i < expr.length; i++) {
      var query2 = expr[i].query;
      if (query2) {
        if (query2.onchange !== void 0) {
          query2.onchange = on ? callback : null;
        } else {
          if (on) {
            query2.addListener(callback);
          } else {
            query2.removeListener(callback);
          }
        }
      }
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

  // src/core/static-layout.js
  var _templateObject;
  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var naturalDimensions_ = {
    "AMP-PIXEL": {
      width: "0px",
      height: "0px"
    },
    "AMP-ANALYTICS": {
      width: "1px",
      height: "1px"
    },
    "AMP-AUDIO": null,
    "AMP-SOCIAL-SHARE": {
      width: "60px",
      height: "44px"
    }
  };
  function hasNaturalDimensions(tagName) {
    tagName = tagName.toUpperCase();
    return naturalDimensions_[tagName] !== void 0;
  }
  function getNaturalDimensions(element) {
    var tagName = element.tagName.toUpperCase();
    devAssert(naturalDimensions_[tagName] !== void 0);
    if (!naturalDimensions_[tagName]) {
      var doc = element.ownerDocument;
      var naturalTagName = tagName.replace(/^AMP\-/, "");
      var temp = doc.createElement(naturalTagName);
      temp.controls = true;
      setStyles(temp, {
        position: "absolute",
        visibility: "hidden"
      });
      doc.body.appendChild(temp);
      naturalDimensions_[tagName] = {
        width: (temp.offsetWidth || 1) + "px",
        height: (temp.offsetHeight || 1) + "px"
      };
      doc.body.removeChild(temp);
    }
    return naturalDimensions_[tagName];
  }
  function applyStaticLayout(element) {
    var completedLayoutAttr = element.getAttribute("i-amphtml-layout");
    if (completedLayoutAttr) {
      var _layout = devAssert(parseLayout(completedLayoutAttr));
      if ((_layout == Layout_Enum.RESPONSIVE || _layout == Layout_Enum.INTRINSIC) && element.firstElementChild) {
        var _element$sizerElement;
        element.sizerElement = element.querySelector("i-amphtml-sizer") || void 0;
        (_element$sizerElement = element.sizerElement) == null ? void 0 : _element$sizerElement.setAttribute("slot", "i-amphtml-svc");
      } else if (_layout == Layout_Enum.NODISPLAY) {
        toggle(element, false);
      }
      return _layout;
    }
    var _getEffectiveLayoutIn = getEffectiveLayoutInternal(element), height = _getEffectiveLayoutIn.height, layout = _getEffectiveLayoutIn.layout, width = _getEffectiveLayoutIn.width;
    element.classList.add(getLayoutClass(layout));
    if (isLayoutSizeDefined(layout)) {
      element.classList.add("i-amphtml-layout-size-defined");
    }
    if (layout == Layout_Enum.NODISPLAY) {
      toggle(element, false);
    } else if (layout == Layout_Enum.FIXED) {
      setStyles(element, {
        width: devAssertString(width),
        height: devAssertString(height)
      });
    } else if (layout == Layout_Enum.FIXED_HEIGHT) {
      setStyle(element, "height", devAssertString(height));
    } else if (layout == Layout_Enum.RESPONSIVE) {
      var sizer = element.ownerDocument.createElement("i-amphtml-sizer");
      sizer.setAttribute("slot", "i-amphtml-svc");
      setStyles(sizer, {
        paddingTop: getLengthNumeral(height) / getLengthNumeral(width) * 100 + "%"
      });
      element.insertBefore(sizer, element.firstChild);
      element.sizerElement = sizer;
    } else if (layout == Layout_Enum.INTRINSIC) {
      var _sizer = htmlFor(element)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(['\n      <i-amphtml-sizer class="i-amphtml-sizer" slot="i-amphtml-svc">\n        <img alt="" role="presentation" aria-hidden="true"\n             class="i-amphtml-intrinsic-sizer" />\n      </i-amphtml-sizer>'])));
      var intrinsicSizer = _sizer.firstElementChild;
      intrinsicSizer.setAttribute("src", 'data:image/svg+xml;charset=utf-8,<svg height="' + height + '" width="' + width + '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>');
      element.insertBefore(_sizer, element.firstChild);
      element.sizerElement = _sizer;
    } else if (layout == Layout_Enum.FILL) {
    } else if (layout == Layout_Enum.CONTAINER) {
    } else if (layout == Layout_Enum.FLEX_ITEM) {
      if (width) {
        setStyle(element, "width", width);
      }
      if (height) {
        setStyle(element, "height", height);
      }
    } else if (layout == Layout_Enum.FLUID) {
      element.classList.add("i-amphtml-layout-awaiting-size");
      if (width) {
        setStyle(element, "width", width);
      }
      setStyle(element, "height", 0);
    }
    element.setAttribute("i-amphtml-layout", layout);
    return layout;
  }
  function getEffectiveLayout(element) {
    var completedLayout = parseLayout(element.getAttribute("layout"));
    if (completedLayout) {
      return completedLayout;
    }
    return getEffectiveLayoutInternal(element).layout;
  }
  function getEffectiveLayoutInternal(element) {
    var layoutAttr = element.getAttribute("layout");
    var widthAttr = element.getAttribute("width");
    var heightAttr = element.getAttribute("height");
    var sizesAttr = element.getAttribute("sizes");
    var heightsAttr = element.getAttribute("heights");
    var inputLayout = layoutAttr ? parseLayout(layoutAttr) : null;
    userAssert(inputLayout !== void 0, 'Invalid "layout" value: %s, %s', layoutAttr, element);
    var inputWidth = widthAttr && widthAttr != "auto" ? parseLength(widthAttr) : widthAttr;
    userAssert(inputWidth !== void 0, 'Invalid "width" value: %s, %s', widthAttr, element);
    var inputHeight = heightAttr && heightAttr != "fluid" ? parseLength(heightAttr) : heightAttr;
    userAssert(inputHeight !== void 0, 'Invalid "height" value: %s, %s', heightAttr, element);
    var width;
    var height;
    var layout;
    if ((!inputLayout || inputLayout == Layout_Enum.FIXED || inputLayout == Layout_Enum.FIXED_HEIGHT) && (!inputWidth || !inputHeight) && hasNaturalDimensions(element.tagName)) {
      var dimensions = getNaturalDimensions(element);
      width = inputWidth || inputLayout == Layout_Enum.FIXED_HEIGHT ? inputWidth : dimensions.width;
      height = inputHeight || dimensions.height;
    } else {
      width = inputWidth;
      height = inputHeight;
    }
    if (inputLayout) {
      layout = inputLayout;
    } else if (!width && !height) {
      layout = Layout_Enum.CONTAINER;
    } else if (height == "fluid") {
      layout = Layout_Enum.FLUID;
    } else if (height && (!width || width == "auto")) {
      layout = Layout_Enum.FIXED_HEIGHT;
    } else if (height && width && (sizesAttr || heightsAttr)) {
      layout = Layout_Enum.RESPONSIVE;
    } else {
      layout = Layout_Enum.FIXED;
    }
    if (layout == Layout_Enum.FIXED || layout == Layout_Enum.FIXED_HEIGHT || layout == Layout_Enum.RESPONSIVE || layout == Layout_Enum.INTRINSIC) {
      userAssert(height, 'The "height" attribute is missing: %s', element);
    }
    if (layout == Layout_Enum.FIXED_HEIGHT) {
      userAssert(!width || width == "auto", 'The "width" attribute must be missing or "auto": %s', element);
    }
    if (layout == Layout_Enum.FIXED || layout == Layout_Enum.RESPONSIVE || layout == Layout_Enum.INTRINSIC) {
      userAssert(width && width != "auto", 'The "width" attribute must be present and not "auto": %s', element);
    }
    if (layout == Layout_Enum.RESPONSIVE || layout == Layout_Enum.INTRINSIC) {
      userAssert(getLengthUnits(width) == getLengthUnits(height), 'Length units should be the same for "width" and "height": %s, %s, %s', widthAttr, heightAttr, element);
    } else {
      userAssert(heightsAttr === null, '"heights" attribute must be missing: %s', element);
    }
    return {
      layout: layout,
      width: width,
      height: height
    };
  }

  // src/core/types/function/exponential-backoff.js
  function exponentialBackoff(opt_base) {
    var getTimeout = exponentialBackoffClock(opt_base);
    return function(work) {
      return setTimeout(work, getTimeout());
    };
  }
  function exponentialBackoffClock(opt_base) {
    var base = opt_base || 2;
    var count = 0;
    return function() {
      var wait = Math.pow(base, count++);
      wait += getJitter(wait);
      return wait * 1e3;
    };
  }
  function getJitter(wait, opt_perc) {
    opt_perc = opt_perc || 0.3;
    var jitter = wait * opt_perc * Math.random();
    if (Math.random() > 0.5) {
      jitter *= -1;
    }
    return jitter;
  }

  // src/experiments/index.js
  function _createForOfIteratorHelperLoose8(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray8(o)) || allowArrayLike && o && typeof o.length === "number") {
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
  function _unsupportedIterableToArray8(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray8(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray8(o, minLen);
  }
  function _arrayLikeToArray8(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
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
  var TAG = "EXPERIMENTS";
  var LOCAL_STORAGE_KEY = "amp-experiment-toggles";
  var TOGGLES_WINDOW_PROPERTY = "__AMP__EXPERIMENT_TOGGLES";
  function isCanary(win) {
    var _win$AMP_CONFIG;
    return !!((_win$AMP_CONFIG = win.AMP_CONFIG) != null && _win$AMP_CONFIG.canary);
  }
  function getBinaryType(win) {
    var _win$AMP_CONFIG2;
    return ((_win$AMP_CONFIG2 = win.AMP_CONFIG) == null ? void 0 : _win$AMP_CONFIG2.type) || "unknown";
  }
  function isExperimentOn(win, experimentId) {
    var toggles = experimentToggles(win);
    return !!toggles[experimentId];
  }
  function toggleExperiment(win, experimentId, opt_on, opt_transientExperiment) {
    var currentlyOn = isExperimentOn(win, experimentId);
    var on = opt_on != null ? opt_on : !currentlyOn;
    if (on != currentlyOn) {
      var toggles = experimentToggles(win);
      toggles[experimentId] = on;
      if (!opt_transientExperiment) {
        var storedToggles = getExperimentToggles(win);
        storedToggles[experimentId] = on;
        saveExperimentToggles(win, storedToggles);
        if (!getMode().test) {
          user().warn(TAG, '"%s" experiment %s for the domain "%s". See: https://amp.dev/documentation/guides-and-tutorials/learn/experimental', experimentId, on ? "enabled" : "disabled", win.location.hostname);
        }
      }
    }
    return on;
  }
  function experimentToggles(win) {
    var _win$AMP_CONFIG3, _win$AMP_EXP, _win$__AMP_EXP, _win$AMP_CONFIG4, _win$AMP_CONFIG5;
    if (win[TOGGLES_WINDOW_PROPERTY]) {
      return win[TOGGLES_WINDOW_PROPERTY];
    }
    win[TOGGLES_WINDOW_PROPERTY] = map();
    var toggles = win[TOGGLES_WINDOW_PROPERTY];
    var buildExperimentConfigs = _extends3({}, (_win$AMP_CONFIG3 = win.AMP_CONFIG) != null ? _win$AMP_CONFIG3 : {}, (_win$AMP_EXP = win.AMP_EXP) != null ? _win$AMP_EXP : parseJson(((_win$__AMP_EXP = win.__AMP_EXP) == null ? void 0 : _win$__AMP_EXP.textContent) || "{}"));
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
        for (var _iterator = _createForOfIteratorHelperLoose8(optedInExperiments), _step; !(_step = _iterator()).done; ) {
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
      for (var _iterator2 = _createForOfIteratorHelperLoose8(allowedUrlOptIn), _step2; !(_step2 = _iterator2()).done; ) {
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
  function experimentTogglesOrNull(win) {
    return win[TOGGLES_WINDOW_PROPERTY] || null;
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
    for (var _iterator3 = _createForOfIteratorHelperLoose8(tokens), _step3; !(_step3 = _iterator3()).done; ) {
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
  function saveExperimentToggles(win, toggles) {
    var experimentIds = [];
    for (var experiment in toggles) {
      experimentIds.push((toggles[experiment] === false ? "-" : "") + experiment);
    }
    try {
      var _win$localStorage;
      (_win$localStorage = win.localStorage) == null ? void 0 : _win$localStorage.setItem(LOCAL_STORAGE_KEY, experimentIds.join(","));
    } catch (e) {
      user().error(TAG, "Failed to save experiments to localStorage.");
    }
  }
  function getExperimentBranch(win, experimentName) {
    return win.__AMP_EXPERIMENT_BRANCHES ? win.__AMP_EXPERIMENT_BRANCHES[experimentName] : null;
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
  function getData(event) {
    return event.data;
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
  function listenOncePromise(element, eventType, opt_evtListenerOpts, opt_cancel) {
    var unlisten;
    var eventPromise = new Promise(function(resolve) {
      unlisten = listenOnce(element, eventType, resolve, opt_evtListenerOpts);
    });
    eventPromise.then(unlisten, unlisten);
    if (opt_cancel) {
      opt_cancel(unlisten);
    }
    return eventPromise;
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
  function isLoadErrorMessage(message) {
    return message.indexOf(LOAD_FAILURE_PREFIX) != -1;
  }

  // src/render-delaying-services.js
  var SERVICES = {
    "amp-dynamic-css-classes": "[custom-element=amp-dynamic-css-classes]",
    "variant": "amp-experiment",
    "amp-story-render": "amp-story[standalone]"
  };
  var LOAD_TIMEOUT = 3e3;
  function waitForServices(win) {
    var promises = includedServices(win).map(function(serviceId) {
      var serviceReadyPromise = getServicePromise(win, serviceId).then(function(service) {
        if (service && isRenderDelayingService(service)) {
          return service.whenReady().then(function() {
            return service;
          });
        }
        return service;
      });
      return Services.timerFor(win).timeoutPromise(LOAD_TIMEOUT, serviceReadyPromise, "Render timeout waiting for service " + serviceId + " to be ready.");
    });
    return Promise.all(promises);
  }
  function hasRenderDelayingServices(win) {
    return includedServices(win).length > 0;
  }
  function isRenderDelayingService(service) {
    var maybeRenderDelayingService = service;
    return typeof maybeRenderDelayingService.whenReady == "function";
  }
  function includedServices(win) {
    var doc = win.document;
    devAssert2(doc.body);
    return Object.keys(SERVICES).filter(function(service) {
      return doc.querySelector(SERVICES[service]);
    });
  }

  // src/style-installer.js
  var TRANSFORMER_PROP = "__AMP_CSS_TR";
  var STYLE_MAP_PROP = "__AMP_CSS_SM";
  function installStylesForDoc(ampdoc2, cssText3, cb, opt_isRuntimeCss, opt_ext) {
    var cssRoot = ampdoc2.getHeadNode();
    var style = insertStyleElement(cssRoot, maybeTransform(cssRoot, cssText3), opt_isRuntimeCss || false, opt_ext || null);
    if (cb) {
      var rootNode = ampdoc2.getRootNode();
      if (styleLoaded(rootNode, style)) {
        cb(style);
        return style;
      }
      var interval = setInterval(function() {
        if (styleLoaded(rootNode, style)) {
          clearInterval(interval);
          cb(style);
        }
      }, 4);
    }
    return style;
  }
  function insertStyleElement(cssRoot, cssText3, isRuntimeCss, ext) {
    var styleMap = cssRoot[STYLE_MAP_PROP];
    if (!styleMap) {
      styleMap = cssRoot[STYLE_MAP_PROP] = map();
    }
    var isExtCss = !isRuntimeCss && ext && ext != "amp-custom" && ext != "amp-keyframes";
    var key = isRuntimeCss ? "amp-runtime" : isExtCss ? "amp-extension=" + ext : null;
    if (key) {
      var existing = getExistingStyleElement(cssRoot, styleMap, key);
      if (existing) {
        if (existing.tagName == "STYLE" && existing.textContent !== cssText3) {
          existing.textContent = cssText3;
        }
        return existing;
      }
    }
    var doc = cssRoot.ownerDocument || cssRoot;
    var style = doc.createElement("style");
    style.textContent = cssText3;
    var afterElement = null;
    if (isRuntimeCss) {
      style.setAttribute("amp-runtime", "");
    } else if (isExtCss) {
      style.setAttribute("amp-extension", ext || "");
      afterElement = dev().assertElement(getExistingStyleElement(cssRoot, styleMap, "amp-runtime"));
    } else {
      if (ext) {
        style.setAttribute(ext, "");
      }
      afterElement = cssRoot.lastChild;
    }
    insertAfterOrAtStart(cssRoot, style, afterElement);
    if (key) {
      styleMap[key] = style;
    }
    return style;
  }
  function getExistingStyleElement(cssRoot, styleMap, key) {
    if (styleMap[key]) {
      return styleMap[key];
    }
    var existing = cssRoot.querySelector("style[" + key + "], link[" + key + "]");
    if (existing) {
      styleMap[key] = existing;
      return existing;
    }
    return null;
  }
  function installCssTransformer(cssRoot, transformer) {
    cssRoot[TRANSFORMER_PROP] = transformer;
  }
  function maybeTransform(cssRoot, cssText3) {
    var transformer = cssRoot[TRANSFORMER_PROP];
    return transformer ? transformer(cssText3) : cssText3;
  }
  var bodyMadeVisible = false;
  function makeBodyVisible(doc) {
    devAssert2(doc.defaultView, "Passed in document must have a defaultView");
    var win = doc.defaultView;
    waitForBodyOpenPromise(doc).then(function() {
      return waitForServices(win);
    }).catch(function(reason) {
      rethrowAsync(reason);
      return [];
    }).then(function(services) {
      bodyMadeVisible = true;
      if (true) {
        doc.body.getBoundingClientRect();
      }
      setBodyVisibleStyles(doc);
      var ampdoc2 = getAmpdoc(doc);
      ampdoc2.signals().signal(CommonSignals_Enum.RENDER_START);
      if (services.length > 0) {
        var resources = Services.resourcesForDoc(doc.documentElement);
        resources.schedulePass(1, true);
      }
      try {
        var perf = Services.performanceFor(win);
        perf.tick(TickLabel_Enum.MAKE_BODY_VISIBLE);
        perf.flush();
      } catch (e) {
      }
    });
  }
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
  function styleLoaded(doc, style) {
    var sheets = doc.styleSheets;
    for (var i = 0; i < sheets.length; i++) {
      var sheet = sheets[i];
      if (sheet.ownerNode == style) {
        return true;
      }
    }
    return false;
  }

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
  var INVALID_PROTOCOLS = ["javascript:", "data:", "vbscript:"];
  var SOURCE_ORIGIN_PARAM = "__amp_source_origin";
  var urlAsLocation = function urlAsLocation2(url) {
    return typeof url == "string" ? parseUrlDeprecated(url) : url;
  };
  function getWinOrigin(win) {
    return win.origin || parseUrlDeprecated(win.location.href).origin;
  }
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
    userAssert2(urlString != null, "%s %s must be available", elementContext, sourceName);
    userAssert2(isSecureUrlDeprecated(urlString) || /^\/\//.test(urlString), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', elementContext, sourceName, urlString);
    return urlString;
  }
  function assertAbsoluteHttpOrHttpsUrl(urlString) {
    userAssert2(/^https?\:/i.test(urlString), 'URL must start with "http://" or "https://". Invalid value: %s', urlString);
    return parseUrlDeprecated(urlString).href;
  }
  function removeFragment(url) {
    var index = url.indexOf("#");
    if (index == -1) {
      return url;
    }
    return url.substring(0, index);
  }
  function isProxyOrigin(url) {
    return urls.cdnProxyRegex.test(urlAsLocation(url).origin);
  }
  function isLocalhostOrigin(url) {
    return urls.localhostRegex.test(urlAsLocation(url).origin);
  }
  function getProxyServingType(url) {
    url = urlAsLocation(url);
    if (!isProxyOrigin(url)) {
      return null;
    }
    var path = url.pathname.split("/", 2);
    return path[1];
  }
  function isProtocolValid(url) {
    return !(url && INVALID_PROTOCOLS.includes(urlAsLocation(url).protocol));
  }
  function removeAmpJsParamsFromUrl(url) {
    var _parseUrlDeprecated = parseUrlDeprecated(url), hash = _parseUrlDeprecated.hash, origin = _parseUrlDeprecated.origin, pathname = _parseUrlDeprecated.pathname, search = _parseUrlDeprecated.search;
    var searchRemoved = removeAmpJsParamsFromSearch(search);
    return origin + pathname + searchRemoved + hash;
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
    userAssert2(SERVING_TYPE_PREFIX.has(prefix), "Unknown path prefix in url %s", url.href);
    var domainOrHttpsSignal = path[2];
    var origin = domainOrHttpsSignal == "s" ? "https://" + decodeURIComponent(path[3]) : "http://" + decodeURIComponent(domainOrHttpsSignal);
    userAssert2(origin.indexOf(".") > 0, "Expected a . in origin %s", origin);
    path.splice(1, domainOrHttpsSignal == "s" ? 3 : 2);
    return origin + path.join("/") + removeAmpJsParamsFromSearch(url.search) + (url.hash || "");
  }
  function getSourceOrigin(url) {
    return parseUrlDeprecated(getSourceUrl(url)).origin;
  }
  function resolveRelativeUrl(relativeUrlString, baseUrl) {
    baseUrl = urlAsLocation(baseUrl);
    if (isEsm() || typeof URL == "function") {
      return new URL(relativeUrlString, baseUrl.href).toString();
    }
    return resolveRelativeUrlFallback_(relativeUrlString, baseUrl);
  }
  function resolveRelativeUrlFallback_(relativeUrlString, baseUrl) {
    baseUrl = urlAsLocation(baseUrl);
    relativeUrlString = relativeUrlString.replace(/\\/g, "/");
    var relativeUrl = parseUrlDeprecated(relativeUrlString);
    if (relativeUrlString.toLowerCase().startsWith(relativeUrl.protocol)) {
      return relativeUrl.href;
    }
    if (relativeUrlString.startsWith("//")) {
      return baseUrl.protocol + relativeUrlString;
    }
    if (relativeUrlString.startsWith("/")) {
      return baseUrl.origin + relativeUrlString;
    }
    return baseUrl.origin + baseUrl.pathname.replace(/\/[^/]*$/, "/") + relativeUrlString;
  }
  function getCorsUrl(win, url) {
    checkCorsUrl(url);
    var sourceOrigin = getSourceOrigin(win.location.href);
    return addParamToUrl(url, SOURCE_ORIGIN_PARAM, sourceOrigin);
  }
  function checkCorsUrl(url) {
    var parsedUrl = parseUrlDeprecated(url);
    var query2 = parseQueryString(parsedUrl.search);
    userAssert2(!(SOURCE_ORIGIN_PARAM in query2), "Source origin is not allowed in %s", url);
  }

  // src/error-reporting.js
  var CANCELLED = "CANCELLED";
  var BLOCK_BY_CONSENT = "BLOCK_BY_CONSENT";
  var ABORTED = "AbortError";
  var NON_ACTIONABLE_ERROR_THROTTLE_THRESHOLD = 1e-3;
  var USER_ERROR_THROTTLE_THRESHOLD = 0.1;
  var BETA_ERROR_REPORT_URL_FREQ = 0.1;
  var accumulatedErrorMessages = self.__AMP_ERRORS || [];
  self.__AMP_ERRORS = accumulatedErrorMessages;
  function pushLimit(array, element, limit) {
    if (array.length >= limit) {
      array.splice(0, array.length - limit + 1);
    }
    array.push(element);
  }
  var _reportingBackoff = function reportingBackoff(work) {
    _reportingBackoff = exponentialBackoff(1.5);
    return _reportingBackoff(work);
  };
  function tryJsonStringify(value) {
    try {
      return JSON.stringify(value);
    } catch (e) {
      return String(value);
    }
  }
  function reportErrorForWin(win, error, opt_associatedElement) {
    reportError(error, opt_associatedElement);
    if (error && !!win && isUserErrorMessage(error.message) && !isUserErrorEmbedMessage(error.message)) {
      reportErrorToAnalytics(error, win);
    }
  }
  function reportError(error, opt_associatedElement) {
    try {
      var isValidError;
      if (error) {
        if (error.message !== void 0) {
          error = duplicateErrorIfNecessary(error);
          isValidError = true;
        } else {
          var origError = error;
          error = new Error(tryJsonStringify(origError));
          error.origError = origError;
        }
      } else {
        error = new Error("Unknown error");
      }
      if (!isValidError && getMode().localDev && !getMode().test) {
        setTimeout(function() {
          var rethrow = new Error("_reported_ Error reported incorrectly: " + error);
          throw rethrow;
        });
      }
      if (error.reported) {
        return error;
      }
      error.reported = true;
      if (error.messageArray) {
        var elIndex = findIndex(error.messageArray, function(item) {
          return item == null ? void 0 : item.tagName;
        });
        if (elIndex > -1) {
          error.associatedElement = error.messageArray[elIndex];
        }
      }
      var element = opt_associatedElement || error.associatedElement;
      if (element && element.classList) {
        element.classList.add("i-amphtml-error");
        if (getMode().development) {
          element.classList.add("i-amphtml-element-error");
          element.setAttribute("error-message", error.message);
        }
      }
      if (self.console && (isUserErrorMessage(error.message) || !error.expected || getMode().localDev)) {
        var output = console.error || console.log;
        if (error.messageArray) {
          output.apply(console, error.messageArray);
        } else {
          if (element) {
            output.call(console, error.message, element);
          } else if (!isMinified()) {
            output.call(console, error.stack);
          } else {
            output.call(console, error.message);
          }
        }
      }
      if (element && element.dispatchCustomEventForTesting) {
        element.dispatchCustomEventForTesting(AmpEvents_Enum.ERROR, error.message);
      }
      onError["call"](self, void 0, void 0, void 0, void 0, error);
    } catch (errorReportingError) {
      setTimeout(function() {
        throw errorReportingError;
      });
    }
    return error;
  }
  function cancellation() {
    return new Error(CANCELLED);
  }
  function isCancellation(errorOrMessage) {
    if (!errorOrMessage) {
      return false;
    }
    if (typeof errorOrMessage == "string") {
      return errorOrMessage.startsWith(CANCELLED);
    }
    if (typeof errorOrMessage.message == "string") {
      return errorOrMessage.message.startsWith(CANCELLED);
    }
    return false;
  }
  function blockedByConsentError() {
    return new Error(BLOCK_BY_CONSENT);
  }
  function isBlockedByConsent(errorOrMessage) {
    if (!errorOrMessage) {
      return false;
    }
    if (typeof errorOrMessage == "string") {
      return errorOrMessage.startsWith(BLOCK_BY_CONSENT);
    }
    if (typeof errorOrMessage.message == "string") {
      return errorOrMessage.message.startsWith(BLOCK_BY_CONSENT);
    }
    return false;
  }
  function installErrorReporting(win) {
    win.onerror = onError;
    win.addEventListener("unhandledrejection", function(event) {
      if (event.reason && (event.reason.message === CANCELLED || event.reason.message === BLOCK_BY_CONSENT || event.reason.message === ABORTED)) {
        event.preventDefault();
        return;
      }
      reportError(event.reason || new Error("rejected promise " + event));
    });
  }
  function onError(message, filename, line, col, error) {
    var _this = this;
    if (this && this.document && (!error || !error.expected)) {
      makeBodyVisibleRecovery(this.document);
    }
    if (getMode().localDev || getMode().development || getMode().test) {
      return;
    }
    var hasNonAmpJs = false;
    try {
      hasNonAmpJs = detectNonAmpJs(self);
    } catch (ignore) {
    }
    if (hasNonAmpJs && Math.random() > 0.01) {
      return;
    }
    var data = getErrorReportData(message, filename, line, col, error, hasNonAmpJs);
    if (data) {
      _reportingBackoff(function() {
        try {
          return reportErrorToServerOrViewer(_this, data).catch(function() {
          });
        } catch (e) {
        }
      });
    }
  }
  function chooseReportingUrl_() {
    return Math.random() < BETA_ERROR_REPORT_URL_FREQ ? urls.betaErrorReporting : urls.errorReporting;
  }
  function reportErrorToServerOrViewer(win, data) {
    if (data["pt"] && Math.random() < 0.9) {
      return resolvedPromise();
    }
    return maybeReportErrorToViewer(win, data).then(function(reportedErrorToViewer) {
      if (!reportedErrorToViewer) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", chooseReportingUrl_(), true);
        xhr.send(JSON.stringify(data));
      }
    });
  }
  function maybeReportErrorToViewer(win, data) {
    var ampdocService2 = Services.ampdocServiceFor(win);
    if (!ampdocService2.isSingleDoc()) {
      return Promise.resolve(false);
    }
    var ampdocSingle = ampdocService2.getSingleDoc();
    var htmlElement = ampdocSingle.getRootNode().documentElement;
    var docOptedIn = htmlElement.hasAttribute("report-errors-to-viewer");
    if (!docOptedIn) {
      return Promise.resolve(false);
    }
    var viewer = Services.viewerForDoc(ampdocSingle);
    if (!viewer.hasCapability("errorReporter")) {
      return Promise.resolve(false);
    }
    return viewer.isTrustedViewer().then(function(viewerTrusted) {
      if (!viewerTrusted) {
        return false;
      }
      viewer.sendMessage("error", errorReportingDataForViewer(data));
      return true;
    });
  }
  function errorReportingDataForViewer(errorReportData) {
    return dict({
      "m": errorReportData["m"],
      "a": errorReportData["a"],
      "s": errorReportData["s"],
      "el": errorReportData["el"],
      "ex": errorReportData["ex"],
      "v": errorReportData["v"],
      "pt": errorReportData["pt"]
    });
  }
  function buildErrorMessage_(message, error) {
    if (error) {
      if (error.message) {
        message = error.message;
      } else {
        message = String(error);
      }
    }
    if (!message) {
      message = "Unknown error";
    }
    return message;
  }
  function getErrorReportData(message, filename, line, col, error, hasNonAmpJs) {
    message = buildErrorMessage_(message, error);
    var expected = !!(error && error.expected);
    if (/_reported_/.test(message)) {
      return;
    }
    if (message == CANCELLED) {
      return;
    }
    var detachedWindow = !(self && self.window);
    var throttleBase = Math.random();
    if (isLoadErrorMessage(message) || message == "Script error." || detachedWindow) {
      expected = true;
      if (throttleBase > NON_ACTIONABLE_ERROR_THROTTLE_THRESHOLD) {
        return;
      }
    }
    var isUserError = isUserErrorMessage(message);
    if (isUserError && throttleBase > USER_ERROR_THROTTLE_THRESHOLD) {
      return;
    }
    var data = Object.create(null);
    data["v"] = getMode().rtvVersion;
    data["noAmp"] = hasNonAmpJs ? "1" : "0";
    data["m"] = message.replace(USER_ERROR_SENTINEL, "");
    data["a"] = isUserError ? "1" : "0";
    data["ex"] = expected ? "1" : "0";
    data["dw"] = detachedWindow ? "1" : "0";
    var runtime = "1p";
    if (false) {
      runtime = "sxg";
      data["sxg"] = "1";
    } else if (isEsm()) {
      runtime = "esm";
      data["esm"] = "1";
    } else if (self.context && self.context.location) {
      data["3p"] = "1";
      runtime = "3p";
    } else if (getMode().runtime) {
      runtime = getMode().runtime;
    }
    data["rt"] = runtime;
    if (runtime === "inabox") {
      data["adid"] = getMode().a4aId;
    }
    data["ca"] = isCanary(self) ? "1" : "0";
    data["bt"] = getBinaryType(self);
    if (self.location.ancestorOrigins && self.location.ancestorOrigins[0]) {
      data["or"] = self.location.ancestorOrigins[0];
    }
    if (self.viewerState) {
      data["vs"] = self.viewerState;
    }
    if (self.parent && self.parent != self) {
      data["iem"] = "1";
    }
    if (self.AMP && self.AMP.viewer) {
      var resolvedViewerUrl = self.AMP.viewer.getResolvedViewerUrl();
      var messagingOrigin = self.AMP.viewer.maybeGetMessagingOrigin();
      if (resolvedViewerUrl) {
        data["rvu"] = resolvedViewerUrl;
      }
      if (messagingOrigin) {
        data["mso"] = messagingOrigin;
      }
    }
    var exps = [];
    var experiments = experimentTogglesOrNull(self);
    for (var exp in experiments) {
      var on = experiments[exp];
      exps.push(exp + "=" + (on ? "1" : "0"));
    }
    data["exps"] = exps.join(",");
    if (error) {
      var _error$associatedElem;
      data["el"] = ((_error$associatedElem = error.associatedElement) == null ? void 0 : _error$associatedElem.tagName) || "u";
      if (error.args) {
        data["args"] = JSON.stringify(error.args);
      }
      if (!isUserError && !error.ignoreStack && error.stack) {
        data["s"] = error.stack;
      }
      if (error.message) {
        error.message += " _reported_";
      }
    } else {
      data["f"] = filename || "";
      data["l"] = line || "";
      data["c"] = col || "";
    }
    data["r"] = self.document ? self.document.referrer : "";
    data["ae"] = accumulatedErrorMessages.join(",");
    data["fr"] = self.location["originalHash"] || self.location.hash;
    if (data["bt"] === "production") {
      data["pt"] = "1";
    }
    pushLimit(accumulatedErrorMessages, message, 25);
    return data;
  }
  function detectNonAmpJs(win) {
    if (!win.document) {
      return false;
    }
    var scripts = win.document.querySelectorAll("script[src]");
    for (var i = 0; i < scripts.length; i++) {
      if (!isProxyOrigin(scripts[i].src.toLowerCase())) {
        return true;
      }
    }
    return false;
  }
  function reportErrorToAnalytics(error, win) {
    if (Services.ampdocServiceFor(win).isSingleDoc()) {
      var vars = dict({
        "errorName": error.name,
        "errorMessage": error.message
      });
      triggerAnalyticsEvent(getRootElement_(win), "user-error", vars, false);
    }
  }
  function getRootElement_(win) {
    var root = Services.ampdocServiceFor(win).getSingleDoc().getRootNode();
    return dev().assertElement(root.documentElement || root.body || root);
  }

  // src/service/resource.js
  var TAG2 = "Resource";
  var RESOURCE_PROP_ = "__AMP__RESOURCE";
  var OWNER_PROP_ = "__AMP__OWNER";
  var ResourceState_Enum = {
    NOT_BUILT: 0,
    NOT_LAID_OUT: 1,
    READY_FOR_LAYOUT: 2,
    LAYOUT_SCHEDULED: 3,
    LAYOUT_COMPLETE: 4,
    LAYOUT_FAILED: 5
  };
  var Resource = /* @__PURE__ */ function() {
    Resource2.forElement = function forElement(element) {
      return devAssert2(Resource2.forElementOptional(element), "Missing resource prop on %s", element);
    };
    Resource2.forElementOptional = function forElementOptional(element) {
      return element[RESOURCE_PROP_];
    };
    Resource2.setOwner = function setOwner(element, owner) {
      devAssert2(owner.contains(element), "Owner must contain the element");
      if (Resource2.forElementOptional(element)) {
        Resource2.forElementOptional(element).updateOwner(owner);
      }
      element[OWNER_PROP_] = owner;
      var cachedElements = element.getElementsByClassName("i-amphtml-element");
      for (var i = 0; i < cachedElements.length; i++) {
        var ele = cachedElements[i];
        if (Resource2.forElementOptional(ele)) {
          Resource2.forElementOptional(ele).updateOwner(void 0);
        }
      }
    };
    function Resource2(id, element, resources) {
      element[RESOURCE_PROP_] = this;
      this.id_ = id;
      this.element = element;
      this.debugid = element.tagName.toLowerCase() + "#" + id;
      this.hostWin = toWin(element.ownerDocument.defaultView);
      this.resources_ = resources;
      this.isPlaceholder_ = element.hasAttribute("placeholder");
      this.isBuilding_ = false;
      this.owner_ = void 0;
      this.state_ = element.isBuilt() ? ResourceState_Enum.NOT_LAID_OUT : ResourceState_Enum.NOT_BUILT;
      if (this.state_ == ResourceState_Enum.NOT_BUILT && element.isBuilding()) {
        this.build();
      }
      this.priorityOverride_ = -1;
      this.layoutCount_ = 0;
      this.abortController_ = null;
      this.lastLayoutError_ = null;
      this.isFixed_ = false;
      this.layoutBox_ = layoutRectLtwh(-1e4, -1e4, 0, 0);
      this.initialLayoutBox_ = null;
      this.isMeasureRequested_ = false;
      this.withViewportDeferreds_ = null;
      this.layoutPromise_ = null;
      this.pendingChangeSize_ = void 0;
      var deferred = new Deferred();
      this.loadPromise_ = deferred.promise;
      this.loadPromiseResolve_ = deferred.resolve;
      this.isInViewport_ = false;
    }
    var _proto = Resource2.prototype;
    _proto.getId = function getId() {
      return this.id_;
    };
    _proto.updateOwner = function updateOwner(owner) {
      this.owner_ = owner;
    };
    _proto.getOwner = function getOwner() {
      if (this.owner_ === void 0) {
        for (var n = this.element; n; n = n.parentElement) {
          if (n[OWNER_PROP_]) {
            this.owner_ = n[OWNER_PROP_];
            break;
          }
        }
        if (this.owner_ === void 0) {
          this.owner_ = null;
        }
      }
      return this.owner_;
    };
    _proto.hasOwner = function hasOwner() {
      return !!this.getOwner();
    };
    _proto.getLayoutPriority = function getLayoutPriority() {
      if (this.priorityOverride_ != -1) {
        return this.priorityOverride_;
      }
      return this.element.getLayoutPriority();
    };
    _proto.updateLayoutPriority = function updateLayoutPriority(newPriority) {
      this.priorityOverride_ = newPriority;
    };
    _proto.getState = function getState() {
      return this.state_;
    };
    _proto.isBuilt = function isBuilt() {
      return this.element.isBuilt();
    };
    _proto.isBuilding = function isBuilding() {
      return this.isBuilding_;
    };
    _proto.whenBuilt = function whenBuilt() {
      return this.element.signals().whenSignal("res-built");
    };
    _proto.build = function build() {
      var _this = this;
      if (this.isBuilding_ || !this.element.isUpgraded()) {
        return null;
      }
      this.isBuilding_ = true;
      return this.element.buildInternal().then(function() {
        _this.isBuilding_ = false;
        _this.state_ = ResourceState_Enum.NOT_LAID_OUT;
        _this.element.signals().signal("res-built");
      }, function(reason) {
        _this.maybeReportErrorOnBuildFailure(reason);
        _this.isBuilding_ = false;
        _this.element.signals().rejectSignal("res-built", reason);
        throw reason;
      });
    };
    _proto.maybeReportErrorOnBuildFailure = function maybeReportErrorOnBuildFailure(reason) {
      if (!isBlockedByConsent(reason)) {
        dev().error(TAG2, "failed to build:", this.debugid, reason);
      }
    };
    _proto.changeSize = function changeSize(newHeight, newWidth, opt_newMargins) {
      this.element.applySize(newHeight, newWidth, opt_newMargins);
      this.requestMeasure();
    };
    _proto.overflowCallback = function overflowCallback(overflown, requestedHeight, requestedWidth, requestedMargins) {
      if (overflown) {
        this.pendingChangeSize_ = {
          height: requestedHeight,
          width: requestedWidth,
          margins: requestedMargins
        };
      }
      this.element.overflowCallback(overflown, requestedHeight, requestedWidth, requestedMargins);
    };
    _proto.resetPendingChangeSize = function resetPendingChangeSize() {
      this.pendingChangeSize_ = void 0;
    };
    _proto.getPendingChangeSize = function getPendingChangeSize() {
      return this.pendingChangeSize_;
    };
    _proto.getUpgradeDelayMs = function getUpgradeDelayMs() {
      return this.element.getUpgradeDelayMs();
    };
    _proto.measure = function measure() {
      if (this.isPlaceholder_ && this.element.parentElement && this.element.parentElement.tagName.startsWith("AMP-") && !(RESOURCE_PROP_ in this.element.parentElement)) {
        return;
      }
      if (!this.element.ownerDocument || !this.element.ownerDocument.defaultView) {
        this.state_ = ResourceState_Enum.NOT_LAID_OUT;
        return;
      }
      this.isMeasureRequested_ = false;
      var oldBox = this.layoutBox_;
      this.computeMeasurements_();
      var newBox = this.layoutBox_;
      var sizeChanges = !layoutRectSizeEquals(oldBox, newBox);
      if (this.state_ == ResourceState_Enum.NOT_LAID_OUT || oldBox.top != newBox.top || sizeChanges) {
        if (this.element.isUpgraded()) {
          if (this.state_ == ResourceState_Enum.NOT_LAID_OUT) {
            this.state_ = ResourceState_Enum.READY_FOR_LAYOUT;
          } else if ((this.state_ == ResourceState_Enum.LAYOUT_COMPLETE || this.state_ == ResourceState_Enum.LAYOUT_FAILED) && this.element.isRelayoutNeeded()) {
            this.state_ = ResourceState_Enum.READY_FOR_LAYOUT;
          }
        }
      }
      if (!this.hasBeenMeasured()) {
        this.initialLayoutBox_ = newBox;
      }
      this.element.updateLayoutBox(newBox, sizeChanges);
    };
    _proto.ensureMeasured = function ensureMeasured() {
      var _this2 = this;
      if (this.hasBeenMeasured()) {
        return resolvedPromise();
      }
      return Services.vsyncFor(this.hostWin).measure(function() {
        return _this2.measure();
      });
    };
    _proto.computeMeasurements_ = function computeMeasurements_() {
      var viewport = Services.viewportForDoc(this.element);
      this.layoutBox_ = viewport.getLayoutRect(this.element);
      var isFixed = false;
      if (viewport.supportsPositionFixed() && this.isDisplayed()) {
        var _this$resources_$getA = this.resources_.getAmpdoc(), win = _this$resources_$getA.win;
        var body = win.document.body;
        for (var n = this.element; n && n != body; n = n.offsetParent) {
          if (n.isAlwaysFixed && n.isAlwaysFixed()) {
            isFixed = true;
            break;
          }
          if (viewport.isDeclaredFixed(n) && computedStyle(win, n).position == "fixed") {
            isFixed = true;
            break;
          }
        }
      }
      this.isFixed_ = isFixed;
      if (isFixed) {
        this.layoutBox_ = moveLayoutRect(this.layoutBox_, -viewport.getScrollLeft(), -viewport.getScrollTop());
      }
    };
    _proto.completeCollapse = function completeCollapse() {
      toggle(this.element, false);
      this.layoutBox_ = layoutRectLtwh(this.layoutBox_.left, this.layoutBox_.top, 0, 0);
      this.isFixed_ = false;
      this.element.updateLayoutBox(this.getLayoutBox());
      var owner = this.getOwner();
      if (owner) {
        owner.collapsedCallback(this.element);
      }
    };
    _proto.completeExpand = function completeExpand() {
      toggle(this.element, true);
      this.requestMeasure();
    };
    _proto.isMeasureRequested = function isMeasureRequested() {
      return this.isMeasureRequested_;
    };
    _proto.hasBeenMeasured = function hasBeenMeasured() {
      return !!this.initialLayoutBox_;
    };
    _proto.requestMeasure = function requestMeasure() {
      this.isMeasureRequested_ = true;
    };
    _proto.getLayoutSize = function getLayoutSize() {
      return layoutSizeFromRect(this.layoutBox_);
    };
    _proto.getLayoutBox = function getLayoutBox() {
      if (!this.isFixed_) {
        return this.layoutBox_;
      }
      var viewport = Services.viewportForDoc(this.element);
      return moveLayoutRect(this.layoutBox_, viewport.getScrollLeft(), viewport.getScrollTop());
    };
    _proto.getInitialLayoutBox = function getInitialLayoutBox() {
      return this.initialLayoutBox_ || this.layoutBox_;
    };
    _proto.isDisplayed = function isDisplayed() {
      var isConnected = this.element.ownerDocument && this.element.ownerDocument.defaultView;
      if (!isConnected) {
        return false;
      }
      var isFluid = this.element.getLayout() == Layout_Enum.FLUID;
      var box = this.getLayoutBox();
      var hasNonZeroSize = box.height > 0 && box.width > 0;
      return isFluid || hasNonZeroSize;
    };
    _proto.isFixed = function isFixed() {
      return this.isFixed_;
    };
    _proto.overlaps = function overlaps(rect) {
      return rectsOverlap(this.getLayoutBox(), rect);
    };
    _proto.prerenderAllowed = function prerenderAllowed() {
      return this.element.prerenderAllowed();
    };
    _proto.isBuildRenderBlocking = function isBuildRenderBlocking() {
      return this.element.isBuildRenderBlocking();
    };
    _proto.whenWithinViewport = function whenWithinViewport(viewport) {
      devAssert2(viewport !== false);
      if (!this.isLayoutPending() || viewport === true) {
        return resolvedPromise();
      }
      var viewportNum = dev().assertNumber(viewport);
      var key = String(viewportNum);
      if (this.withViewportDeferreds_ && this.withViewportDeferreds_[key]) {
        return this.withViewportDeferreds_[key].promise;
      }
      if (this.isWithinViewportRatio(viewportNum)) {
        return resolvedPromise();
      }
      this.withViewportDeferreds_ = this.withViewportDeferreds_ || {};
      this.withViewportDeferreds_[key] = new Deferred();
      return this.withViewportDeferreds_[key].promise;
    };
    _proto.resolveDeferredsWhenWithinViewports_ = function resolveDeferredsWhenWithinViewports_() {
      if (!this.withViewportDeferreds_) {
        return;
      }
      var viewportRatio = this.getDistanceViewportRatio();
      for (var key in this.withViewportDeferreds_) {
        if (this.isWithinViewportRatio(parseFloat(key), viewportRatio)) {
          this.withViewportDeferreds_[key].resolve();
          delete this.withViewportDeferreds_[key];
        }
      }
    };
    _proto.getDistanceViewportRatio = function getDistanceViewportRatio() {
      var viewport = Services.viewportForDoc(this.element);
      var viewportBox = viewport.getRect();
      var layoutBox = this.getLayoutBox();
      var scrollDirection = this.resources_.getScrollDirection();
      var scrollPenalty = 1;
      var distance = 0;
      if (viewportBox.right < layoutBox.left || viewportBox.left > layoutBox.right) {
        return {
          distance: false
        };
      }
      if (viewportBox.bottom < layoutBox.top) {
        distance = layoutBox.top - viewportBox.bottom;
        if (scrollDirection == -1) {
          scrollPenalty = 2;
        }
      } else if (viewportBox.top > layoutBox.bottom) {
        distance = viewportBox.top - layoutBox.bottom;
        if (scrollDirection == 1) {
          scrollPenalty = 2;
        }
      } else {
        return {
          distance: true
        };
      }
      return {
        distance: distance,
        scrollPenalty: scrollPenalty,
        viewportHeight: viewportBox.height
      };
    };
    _proto.isWithinViewportRatio = function isWithinViewportRatio(multiplier, opt_viewportRatio) {
      if (typeof multiplier === "boolean") {
        return multiplier;
      }
      var _ref = opt_viewportRatio || this.getDistanceViewportRatio(), distance = _ref.distance, scrollPenalty = _ref.scrollPenalty, viewportHeight = _ref.viewportHeight;
      if (typeof distance == "boolean") {
        return distance;
      }
      return distance < viewportHeight * multiplier / scrollPenalty;
    };
    _proto.renderOutsideViewport = function renderOutsideViewport() {
      this.resolveDeferredsWhenWithinViewports_();
      return this.hasOwner() || this.isWithinViewportRatio(this.element.renderOutsideViewport());
    };
    _proto.idleRenderOutsideViewport = function idleRenderOutsideViewport() {
      return this.isWithinViewportRatio(this.element.idleRenderOutsideViewport());
    };
    _proto.layoutScheduled = function layoutScheduled(scheduleTime) {
      this.state_ = ResourceState_Enum.LAYOUT_SCHEDULED;
      this.element.layoutScheduleTime = scheduleTime;
    };
    _proto.layoutCanceled = function layoutCanceled() {
      this.state_ = this.hasBeenMeasured() ? ResourceState_Enum.READY_FOR_LAYOUT : ResourceState_Enum.NOT_LAID_OUT;
    };
    _proto.startLayout = function startLayout() {
      var _this3 = this;
      if (this.layoutPromise_) {
        return this.layoutPromise_;
      }
      if (this.state_ == ResourceState_Enum.LAYOUT_COMPLETE) {
        return resolvedPromise();
      }
      if (this.state_ == ResourceState_Enum.LAYOUT_FAILED) {
        return Promise.reject(this.lastLayoutError_);
      }
      devAssert2(this.state_ != ResourceState_Enum.NOT_BUILT, "Not ready to start layout: %s (%s)", this.debugid, this.state_);
      devAssert2(this.isDisplayed(), "Not displayed for layout: %s", this.debugid);
      if (this.state_ != ResourceState_Enum.LAYOUT_SCHEDULED) {
        var err = dev().createError("startLayout called but not LAYOUT_SCHEDULED", "currently: ", this.state_);
        reportError(err, this.element);
        return Promise.reject(err);
      }
      if (this.layoutCount_ > 0 && !this.element.isRelayoutNeeded()) {
        dev().fine(TAG2, "layout canceled since it wasn't requested:", this.debugid, this.state_);
        this.state_ = ResourceState_Enum.LAYOUT_COMPLETE;
        return resolvedPromise();
      }
      dev().fine(TAG2, "start layout:", this.debugid, "count:", this.layoutCount_);
      this.layoutCount_++;
      this.state_ = ResourceState_Enum.LAYOUT_SCHEDULED;
      this.abortController_ = new AbortController();
      var signal = this.abortController_.signal;
      var promise = new Promise(function(resolve, reject) {
        Services.vsyncFor(_this3.hostWin).mutate(function() {
          var callbackResult;
          try {
            callbackResult = _this3.element.layoutCallback(signal);
          } catch (e) {
            reject(e);
          }
          Promise.resolve(callbackResult).then(resolve, reject);
        });
        signal.onabort = function() {
          return reject(cancellation());
        };
      }).then(function() {
        return _this3.layoutComplete_(true, signal);
      }, function(reason) {
        return _this3.layoutComplete_(false, signal, reason);
      });
      return this.layoutPromise_ = promise;
    };
    _proto.layoutComplete_ = function layoutComplete_(success, signal, opt_reason) {
      this.abortController_ = null;
      if (signal.aborted) {
        var err = dev().createError("layoutComplete race");
        err.associatedElement = this.element;
        dev().expectedError(TAG2, err);
        throw cancellation();
      }
      if (this.loadPromiseResolve_) {
        this.loadPromiseResolve_();
        this.loadPromiseResolve_ = null;
      }
      this.layoutPromise_ = null;
      this.state_ = success ? ResourceState_Enum.LAYOUT_COMPLETE : ResourceState_Enum.LAYOUT_FAILED;
      this.lastLayoutError_ = opt_reason;
      if (success) {
        dev().fine(TAG2, "layout complete:", this.debugid);
      } else {
        dev().fine(TAG2, "loading failed:", this.debugid, opt_reason);
        return Promise.reject(opt_reason);
      }
    };
    _proto.isLayoutPending = function isLayoutPending() {
      return this.state_ != ResourceState_Enum.LAYOUT_COMPLETE && this.state_ != ResourceState_Enum.LAYOUT_FAILED;
    };
    _proto.loadedOnce = function loadedOnce() {
      if (this.element.R1()) {
        return this.element.whenLoaded();
      }
      return this.loadPromise_;
    };
    _proto.isInViewport = function isInViewport() {
      if (this.isInViewport_) {
        this.resolveDeferredsWhenWithinViewports_();
      }
      return this.isInViewport_;
    };
    _proto.setInViewport = function setInViewport(inViewport) {
      this.isInViewport_ = inViewport;
    };
    _proto.unlayout = function unlayout() {
      if (this.state_ == ResourceState_Enum.NOT_BUILT || this.state_ == ResourceState_Enum.NOT_LAID_OUT || this.state_ == ResourceState_Enum.READY_FOR_LAYOUT) {
        return;
      }
      if (this.abortController_) {
        this.abortController_.abort();
        this.abortController_ = null;
      }
      this.setInViewport(false);
      if (this.element.unlayoutCallback()) {
        this.element.togglePlaceholder(true);
        this.state_ = ResourceState_Enum.NOT_LAID_OUT;
        this.layoutCount_ = 0;
        this.layoutPromise_ = null;
      }
    };
    _proto.getTaskId = function getTaskId(localId) {
      return this.debugid + "#" + localId;
    };
    _proto.pause = function pause() {
      this.element.pause();
    };
    _proto.pauseOnRemove = function pauseOnRemove() {
      this.element.pause();
    };
    _proto.resume = function resume() {
      this.element.resume();
    };
    _proto.unload = function unload() {
      this.element.unmount();
    };
    _proto.disconnect = function disconnect() {
      delete this.element[RESOURCE_PROP_];
      this.element.disconnect(true);
    };
    return Resource2;
  }();

  // src/service/resources-interface.js
  var READY_SCAN_SIGNAL = "ready-scan";

  // src/service/scheduler.js
  var ID = "scheduler";
  var ROOT_MARGIN = "250% 31.25%";
  var Scheduler = /* @__PURE__ */ function() {
    function Scheduler2(ampdoc2) {
      var _this = this;
      this.ampdoc_ = ampdoc2;
      var win = ampdoc2.win;
      this.observer_ = new win.IntersectionObserver(function(e) {
        return _this.observed_(e);
      }, {
        root: isIframed(win) ? win.document : null,
        rootMargin: ROOT_MARGIN
      });
      this.containerMap_ = new Map();
      this.targets_ = new Map();
      this.parsingTargets_ = [];
      this.scheduledReady_ = false;
      ampdoc2.whenReady().then(function() {
        return _this.checkParsing_();
      });
      this.visibilityUnlisten_ = ampdoc2.onVisibilityChanged(function() {
        return _this.docVisibilityChanged_();
      });
    }
    var _proto = Scheduler2.prototype;
    _proto.dispose = function dispose() {
      this.observer_.disconnect();
      this.targets_.clear();
      if (this.visibilityUnlisten_) {
        this.visibilityUnlisten_();
        this.visibilityUnlisten_ = null;
      }
    };
    _proto.scheduleAsap = function scheduleAsap(target) {
      this.targets_.set(target, {
        asap: true,
        isIntersecting: false
      });
      this.waitParsing_(target);
    };
    _proto.schedule = function schedule(target) {
      if (this.targets_.has(target)) {
        return;
      }
      if (target.deferredMount()) {
        this.targets_.set(target, {
          asap: false,
          isIntersecting: false
        });
        this.observer_.observe(target);
        if (this.containerMap_.size > 0) {
          this.containerMap_.forEach(function(observer, container) {
            if (containsNotSelf(container, target)) {
              observer.observe(target);
            }
          });
        }
      } else {
        this.targets_.set(target, {
          asap: false,
          isIntersecting: true
        });
      }
      this.waitParsing_(target);
    };
    _proto.unschedule = function unschedule(target) {
      if (!this.targets_.has(target)) {
        return;
      }
      this.targets_.delete(target);
      this.observer_.unobserve(target);
      if (this.containerMap_.size > 0) {
        this.containerMap_.forEach(function(observer) {
          observer.unobserve(target);
        });
      }
      if (this.parsingTargets_) {
        removeItem(this.parsingTargets_, target);
        this.checkParsing_();
      }
    };
    _proto.setContainer = function setContainer(container, opt_scroller) {
      var _this2 = this;
      if (this.containerMap_.has(container)) {
        return;
      }
      var win = this.ampdoc_.win;
      var observer = new win.IntersectionObserver(function(e) {
        return _this2.observed_(e);
      }, {
        root: opt_scroller || container,
        rootMargin: ROOT_MARGIN
      });
      this.containerMap_.set(container, observer);
      this.targets_.forEach(function(_ref, target) {
        var asap = _ref.asap;
        if (!asap && containsNotSelf(container, target)) {
          observer.observe(target);
        }
      });
    };
    _proto.removeContainer = function removeContainer(container) {
      var observer = this.containerMap_.get(container);
      if (!observer) {
        return;
      }
      observer.disconnect();
      this.containerMap_.delete(container);
    };
    _proto.signalScanReady_ = function signalScanReady_() {
      var _this3 = this;
      if (this.ampdoc_.isReady() && !this.scheduledReady_) {
        this.scheduledReady_ = true;
        var win = this.ampdoc_.win;
        win.setTimeout(function() {
          _this3.ampdoc_.signals().signal(READY_SCAN_SIGNAL);
        }, 50);
      }
    };
    _proto.docVisibilityChanged_ = function docVisibilityChanged_() {
      var _this4 = this;
      var vs = this.ampdoc_.getVisibilityState();
      if (vs == VisibilityState_Enum.VISIBLE || vs == VisibilityState_Enum.HIDDEN || vs == VisibilityState_Enum.PRERENDER) {
        this.targets_.forEach(function(_, target) {
          return _this4.maybeBuild_(target);
        });
      }
    };
    _proto.waitParsing_ = function waitParsing_(target) {
      var parsingTargets = this.parsingTargets_;
      if (parsingTargets) {
        if (!parsingTargets.includes(target)) {
          parsingTargets.push(target);
        }
        this.checkParsing_();
      } else {
        this.maybeBuild_(target);
      }
    };
    _proto.checkParsing_ = function checkParsing_() {
      var documentReady = this.ampdoc_.isReady();
      var parsingTargets = this.parsingTargets_;
      if (parsingTargets) {
        for (var i = 0; i < parsingTargets.length; i++) {
          var target = parsingTargets[i];
          if (documentReady || hasNextNodeInDocumentOrder(target, this.ampdoc_.getRootNode())) {
            parsingTargets.splice(i--, 1);
            this.maybeBuild_(target);
          }
        }
      }
      if (documentReady) {
        this.parsingTargets_ = null;
        this.signalScanReady_();
      }
    };
    _proto.observed_ = function observed_(entries) {
      for (var i = 0; i < entries.length; i++) {
        var _entries$i = entries[i], isThisIntersecting = _entries$i.isIntersecting, target = _entries$i.target;
        var ampTarget = target;
        var current = this.targets_.get(ampTarget);
        if (!current) {
          continue;
        }
        var isIntersecting = isThisIntersecting || current.isIntersecting;
        if (isIntersecting !== current.isIntersecting) {
          this.targets_.set(ampTarget, {
            asap: current.asap,
            isIntersecting: isIntersecting
          });
        }
        if (isIntersecting) {
          this.maybeBuild_(ampTarget);
        }
      }
    };
    _proto.maybeBuild_ = function maybeBuild_(target) {
      var parsingTargets = this.parsingTargets_;
      var parsed = !(parsingTargets && parsingTargets.includes(target));
      var _ref2 = this.targets_.get(target) || {
        asap: false,
        isIntersecting: false
      }, asap = _ref2.asap, isIntersecting = _ref2.isIntersecting;
      var vs = this.ampdoc_.getVisibilityState();
      var toBuild = parsed && (asap || isIntersecting) && (vs == VisibilityState_Enum.VISIBLE || vs == VisibilityState_Enum.HIDDEN || vs == VisibilityState_Enum.PRERENDER && target.prerenderAllowed());
      if (!toBuild) {
        return;
      }
      this.unschedule(target);
      var win = this.ampdoc_.win;
      var scheduler = asap || target.getBuildPriority() <= LayoutPriority_Enum.CONTENT ? win.setTimeout : win.requestIdleCallback || win.setTimeout;
      scheduler(function() {
        return target.mountInternal();
      });
    };
    return Scheduler2;
  }();
  function getSchedulerForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, ID, Scheduler);
    return getServiceForDoc(ampdoc2, ID);
  }

  // src/core/data-structures/priority-queue.js
  function _defineProperties3(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass3(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties3(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties3(Constructor, staticProps);
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
    _createClass3(PriorityQueue2, [{
      key: "length",
      get: function get() {
        return this.queue_.length;
      }
    }]);
    return PriorityQueue2;
  }();

  // src/chunk.js
  function _inherits3(subClass2, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass2.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass2, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf3(subClass2, superClass);
  }
  function _setPrototypeOf3(o, p) {
    _setPrototypeOf3 = Object.setPrototypeOf || function _setPrototypeOf11(o2, p2) {
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
    _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf11(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf3(o);
  }
  var TAG3 = "CHUNK";
  var deactivated = /nochunking=1/.test(self.location.hash);
  var allowLongTasks = false;
  var resolved2 = resolvedPromise();
  function chunkServiceForDoc(elementOrAmpDoc) {
    registerServiceBuilderForDoc(elementOrAmpDoc, "chunk", Chunks);
    return getServiceForDoc(elementOrAmpDoc, "chunk");
  }
  function startupChunk(doc, fn, opt_makesBodyVisible) {
    if (deactivated) {
      resolved2.then(fn);
      return;
    }
    var service = chunkServiceForDoc(doc.documentElement || doc);
    service.runForStartup(fn);
    if (opt_makesBodyVisible) {
      service.runForStartup(function() {
        service.bodyIsVisible_ = true;
      });
    }
  }
  function allowLongTasksInChunking() {
    allowLongTasks = true;
  }
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
    _inherits3(StartupTask2, _Task);
    var _super = _createSuper3(StartupTask2);
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
          dev().fine(TAG3, t.getName_(), "Chunk duration", Date.now() - before, _this3.durationOfLastExecution_);
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
          dev().fine(TAG3, "Timed out", timeout, info.didTimeout);
          fn(info);
        } else {
          dev().fine(TAG3, "Rescheduling with", remainingTimeout, info.timeRemaining());
          win.requestIdleCallback(rIC, {
            timeout: remainingTimeout
          });
        }
      } else {
        dev().fine(TAG3, "Running idle callback with ", minimumTimeRemaining);
        fn(info);
      }
    }
    win.requestIdleCallback(rIC, {
      timeout: timeout
    });
  }

  // src/consent.js
  function shouldBlockOnConsentByMeta(element) {
    var ampdoc2 = element.getAmpDoc();
    var content = ampdoc2.getMetaByName("amp-consent-blocking");
    if (!content) {
      return false;
    }
    content = content.toUpperCase().replace(/\s+/g, "");
    var contents = content.split(",");
    return contents.includes(element.tagName);
  }

  // src/core/constants/action-constants.js
  var RAW_OBJECT_ARGS_KEY = "__AMP_OBJECT_STRING__";
  var DEFAULT_ACTION = "activate";
  var ActionTrust_Enum = {
    LOW: 1,
    DEFAULT: 2,
    HIGH: 3
  };
  function actionTrustToString(actionTrust) {
    switch (actionTrust) {
      case ActionTrust_Enum.LOW:
        return "low";
      case ActionTrust_Enum.HIGH:
        return "high";
      default:
        devAssert(actionTrust === ActionTrust_Enum.DEFAULT);
        return "default";
    }
  }

  // src/base-element.js
  var BaseElement = /* @__PURE__ */ function() {
    BaseElement2.R1 = function R1() {
      return false;
    };
    BaseElement2.deferredMount = function deferredMount(unusedElement) {
      return true;
    };
    BaseElement2.prerenderAllowed = function prerenderAllowed(unusedElement) {
      return false;
    };
    BaseElement2.usesLoading = function usesLoading(unusedElement) {
      return false;
    };
    BaseElement2.createLoaderLogoCallback = function createLoaderLogoCallback(unusedElement) {
      return {};
    };
    BaseElement2.getBuildPriority = function getBuildPriority(unusedElement) {
      return LayoutPriority_Enum.CONTENT;
    };
    BaseElement2.getPreconnects = function getPreconnects(unusedElement) {
      return null;
    };
    BaseElement2.requiresShadowDom = function requiresShadowDom() {
      return false;
    };
    function BaseElement2(element) {
      this.element = element;
      this.win = getWin(element);
      this["actionMap_"] = null;
      this["defaultActionAlias_"] = null;
    }
    var _proto = BaseElement2.prototype;
    _proto.signals = function signals() {
      return this.element.signals();
    };
    _proto.getDefaultActionAlias = function getDefaultActionAlias() {
      return this["defaultActionAlias_"];
    };
    _proto.getLayoutPriority = function getLayoutPriority() {
      return LayoutPriority_Enum.CONTENT;
    };
    _proto.updateLayoutPriority = function updateLayoutPriority(newLayoutPriority) {
      this.element.getResources().updateLayoutPriority(this.element, newLayoutPriority);
    };
    _proto.getLayout = function getLayout() {
      return this.element.getLayout();
    };
    _proto.getLayoutBox = function getLayoutBox() {
      return this.element.getLayoutBox();
    };
    _proto.getLayoutSize = function getLayoutSize() {
      return this.element.getLayoutSize();
    };
    _proto.getAmpDoc = function getAmpDoc() {
      return this.element.getAmpDoc();
    };
    _proto.getVsync = function getVsync() {
      return Services.vsyncFor(this.win);
    };
    _proto.getConsentPolicy = function getConsentPolicy() {
      var policyId = null;
      if (this.element.hasAttribute("data-block-on-consent")) {
        policyId = this.element.getAttribute("data-block-on-consent") || "default";
      }
      return policyId;
    };
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return layout == Layout_Enum.NODISPLAY;
    };
    _proto.isAlwaysFixed = function isAlwaysFixed() {
      return false;
    };
    _proto.upgradeCallback = function upgradeCallback() {
      return null;
    };
    _proto.buildCallback = function buildCallback() {
    };
    _proto.preconnectCallback = function preconnectCallback(opt_onLayout) {
    };
    _proto.attachedCallback = function attachedCallback() {
    };
    _proto.detachedCallback = function detachedCallback() {
    };
    _proto.setAsContainer = function setAsContainer(opt_scroller) {
      this.element.setAsContainerInternal(opt_scroller);
    };
    _proto.removeAsContainer = function removeAsContainer() {
      this.element.removeAsContainerInternal();
    };
    _proto.isBuildRenderBlocking = function isBuildRenderBlocking() {
      return false;
    };
    _proto.createPlaceholderCallback = function createPlaceholderCallback() {
      return null;
    };
    _proto.renderOutsideViewport = function renderOutsideViewport() {
      return getMode(this.win).runtime == "inabox" || 3;
    };
    _proto.idleRenderOutsideViewport = function idleRenderOutsideViewport() {
      return false;
    };
    _proto.ensureLoaded = function ensureLoaded() {
    };
    _proto.setReadyState = function setReadyState(state, opt_failure) {
      this.element.setReadyStateInternal(state, opt_failure);
    };
    _proto.mountCallback = function mountCallback(opt_abortSignal) {
    };
    _proto.unmountCallback = function unmountCallback() {
    };
    _proto.isRelayoutNeeded = function isRelayoutNeeded() {
      return false;
    };
    _proto.layoutCallback = function layoutCallback() {
      return resolvedPromise();
    };
    _proto.firstLayoutCompleted = function firstLayoutCompleted() {
      this.togglePlaceholder(false);
    };
    _proto.pauseCallback = function pauseCallback() {
    };
    _proto.resumeCallback = function resumeCallback() {
    };
    _proto.unlayoutCallback = function unlayoutCallback() {
      return false;
    };
    _proto.unlayoutOnPause = function unlayoutOnPause() {
      return false;
    };
    _proto.reconstructWhenReparented = function reconstructWhenReparented() {
      return true;
    };
    _proto.loadPromise = function loadPromise2(element) {
      return loadPromise(element);
    };
    _proto.registerAction = function registerAction(alias, handler, minTrust) {
      if (minTrust === void 0) {
        minTrust = ActionTrust_Enum.DEFAULT;
      }
      initActionMap(this);
      this["actionMap_"][alias] = {
        handler: handler,
        minTrust: minTrust
      };
    };
    _proto.registerDefaultAction = function registerDefaultAction(handler, alias, minTrust) {
      if (alias === void 0) {
        alias = DEFAULT_ACTION;
      }
      if (minTrust === void 0) {
        minTrust = ActionTrust_Enum.DEFAULT;
      }
      devAssert2(!this["defaultActionAlias_"], 'Default action "%s" already registered.', this["defaultActionAlias_"]);
      this.registerAction(alias, handler, minTrust);
      this["defaultActionAlias_"] = alias;
    };
    _proto.executeAction = function executeAction(invocation, unusedDeferred) {
      var method = invocation.method;
      if (method === DEFAULT_ACTION) {
        method = this["defaultActionAlias_"] || method;
      }
      initActionMap(this);
      var holder = this["actionMap_"][method];
      var tagName = this.element.tagName;
      userAssert2(holder, "Method not found: " + method + " in " + tagName);
      var handler = holder.handler, minTrust = holder.minTrust;
      if (invocation.satisfiesTrust(minTrust)) {
        return handler(invocation);
      }
    };
    _proto.forwardEvents = function forwardEvents(events, element) {
      var _this = this;
      var unlisteners = (isArray(events) ? events : [events]).map(function(eventType) {
        return listen(element, eventType, function(event) {
          dispatchCustomEvent(_this.element, eventType, getData(event) || {});
        });
      });
      return function() {
        return unlisteners.forEach(function(unlisten) {
          return unlisten();
        });
      };
    };
    _proto.getPlaceholder = function getPlaceholder() {
      return this.element.getPlaceholder();
    };
    _proto.togglePlaceholder = function togglePlaceholder(state) {
      this.element.togglePlaceholder(state);
    };
    _proto.getFallback = function getFallback() {
      return this.element.getFallback();
    };
    _proto.toggleFallback = function toggleFallback(state) {
      this.element.toggleFallback(state);
    };
    _proto.toggleLoading = function toggleLoading(state, force) {
      if (force === void 0) {
        force = false;
      }
      this.element.toggleLoading(state, force);
    };
    _proto.getOverflowElement = function getOverflowElement() {
      return this.element.getOverflowElement();
    };
    _proto.renderStarted = function renderStarted() {
      this.element.renderStarted();
    };
    _proto.getViewport = function getViewport2() {
      return Services.viewportForDoc(this.getAmpDoc());
    };
    _proto.getIntersectionElementLayoutBox = function getIntersectionElementLayoutBox() {
      return this.getLayoutBox();
    };
    _proto.collapse = function collapse() {
      Services.mutatorForDoc(this.getAmpDoc()).collapseElement(this.element);
    };
    _proto.attemptCollapse = function attemptCollapse() {
      return Services.mutatorForDoc(this.getAmpDoc()).attemptCollapse(this.element);
    };
    _proto.forceChangeHeight = function forceChangeHeight(newHeight) {
      Services.mutatorForDoc(this.getAmpDoc()).forceChangeSize(this.element, newHeight, void 0);
    };
    _proto.attemptChangeHeight = function attemptChangeHeight(newHeight) {
      return Services.mutatorForDoc(this.getAmpDoc()).requestChangeSize(this.element, newHeight, void 0);
    };
    _proto.attemptChangeSize = function attemptChangeSize(newHeight, newWidth, opt_event) {
      return Services.mutatorForDoc(this.getAmpDoc()).requestChangeSize(this.element, newHeight, newWidth, void 0, opt_event);
    };
    _proto.measureElement = function measureElement(measurer) {
      return Services.mutatorForDoc(this.getAmpDoc()).measureElement(measurer);
    };
    _proto.mutateElement = function mutateElement(mutator, opt_element) {
      return this.measureMutateElement(null, mutator, opt_element);
    };
    _proto.measureMutateElement = function measureMutateElement(measurer, mutator, opt_element) {
      return Services.mutatorForDoc(this.getAmpDoc()).measureMutateElement(opt_element || this.element, measurer, mutator);
    };
    _proto.mutateElementSkipRemeasure = function mutateElementSkipRemeasure(mutator) {
      return Services.mutatorForDoc(this.getAmpDoc()).mutateElement(this.element, mutator, true);
    };
    _proto.collapsedCallback = function collapsedCallback(unusedElement) {
    };
    _proto.expand = function expand() {
      Services.mutatorForDoc(this.getAmpDoc()).expandElement(this.element);
    };
    _proto.mutatedAttributesCallback = function mutatedAttributesCallback(unusedMutations) {
    };
    _proto.onLayoutMeasure = function onLayoutMeasure() {
    };
    _proto.user = function user2() {
      return user(this.element);
    };
    _proto.getApi = function getApi() {
      return this;
    };
    return BaseElement2;
  }();
  function initActionMap(baseElement) {
    if (!baseElement["actionMap_"]) {
      baseElement["actionMap_"] = baseElement.win.Object.create(null);
    }
  }

  // src/element-stub.js
  function _inherits4(subClass2, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass2.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass2, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf4(subClass2, superClass);
  }
  function _setPrototypeOf4(o, p) {
    _setPrototypeOf4 = Object.setPrototypeOf || function _setPrototypeOf11(o2, p2) {
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
    _getPrototypeOf4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf11(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf4(o);
  }
  var ElementStub = /* @__PURE__ */ function(_BaseElement) {
    _inherits4(ElementStub2, _BaseElement);
    var _super = _createSuper4(ElementStub2);
    function ElementStub2() {
      return _super.apply(this, arguments);
    }
    return ElementStub2;
  }(BaseElement);

  // src/core/3p-frame-messaging.js
  var AMP_MESSAGE_PREFIX = "amp-";
  var CONSTANTS = {
    responseTypeSuffix: "-result",
    messageIdFieldName: "messageId",
    payloadFieldName: "payload",
    contentFieldName: "content"
  };
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
  function listen2(element, eventType, listener, opt_evtListenerOpts) {
    return internalListenImplementation(element, eventType, listener, opt_evtListenerOpts);
  }
  function serializeMessage(type, sentinel, data, rtvVersion2) {
    if (data === void 0) {
      data = dict();
    }
    if (rtvVersion2 === void 0) {
      rtvVersion2 = null;
    }
    var message = data;
    message["type"] = type;
    message["sentinel"] = sentinel;
    return AMP_MESSAGE_PREFIX + (rtvVersion2 || "") + JSON.stringify(message);
  }
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
  function canInspectWindow(win) {
    try {
      return !!win.location.href && (win["test"] || true);
    } catch (unusedErr) {
      return false;
    }
  }

  // src/utils/intersection-observer-3p-host.js
  var INIT_TIME = Date.now();
  function getIntersectionChangeEntry(element, owner, hostViewport) {
    var intersection = rectIntersection(element, owner, hostViewport) || layoutRectLtwh(0, 0, 0, 0);
    var ratio = intersectionRatio(intersection, element);
    return calculateChangeEntry(element, hostViewport, intersection, ratio);
  }
  function intersectionRatio(smaller, larger) {
    var smallerBoxArea = smaller.width * smaller.height;
    var largerBoxArea = larger.width * larger.height;
    return largerBoxArea === 0 ? 0 : smallerBoxArea / largerBoxArea;
  }
  function calculateChangeEntry(element, hostViewport, intersection, ratio) {
    var boundingClientRect = element;
    var rootBounds = hostViewport;
    if (hostViewport) {
      rootBounds = rootBounds;
      intersection = moveLayoutRect(intersection, -hostViewport.left, -hostViewport.top);
      boundingClientRect = moveLayoutRect(boundingClientRect, -hostViewport.left, -hostViewport.top);
      rootBounds = moveLayoutRect(rootBounds, -hostViewport.left, -hostViewport.top);
    }
    return {
      time: typeof performance !== "undefined" && performance.now ? performance.now() : Date.now() - INIT_TIME,
      rootBounds: rootBounds,
      boundingClientRect: boundingClientRect,
      intersectionRect: intersection,
      intersectionRatio: ratio
    };
  }

  // src/custom-element.js
  function _createForOfIteratorHelperLoose9(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray9(o)) || allowArrayLike && o && typeof o.length === "number") {
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
  function _unsupportedIterableToArray9(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray9(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray9(o, minLen);
  }
  function _arrayLikeToArray9(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _defineProperties4(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass4(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties4(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties4(Constructor, staticProps);
    return Constructor;
  }
  function _inherits5(subClass2, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass2.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass2, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf5(subClass2, superClass);
  }
  function _setPrototypeOf5(o, p) {
    _setPrototypeOf5 = Object.setPrototypeOf || function _setPrototypeOf11(o2, p2) {
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
    _getPrototypeOf5 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf11(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf5(o);
  }
  var TAG4 = "CustomElement";
  var UpgradeState_Enum = {
    NOT_UPGRADED: 1,
    UPGRADED: 2,
    UPGRADE_FAILED: 3,
    UPGRADE_IN_PROGRESS: 4
  };
  var NO_BUBBLES = {
    bubbles: false
  };
  var RETURN_TRUE = function RETURN_TRUE2() {
    return true;
  };
  var templateTagSupported;
  var stubbedElements = [];
  var unresolvableExtensions = new Set();
  function isTemplateTagSupported() {
    if (templateTagSupported === void 0) {
      var template = self.document.createElement("template");
      templateTagSupported = "content" in template;
    }
    return templateTagSupported;
  }
  function createCustomElementClass(win, elementConnectedCallback2) {
    var BaseCustomElement = createBaseCustomElementClass(win, elementConnectedCallback2);
    var CustomAmpElement = /* @__PURE__ */ function(_BaseCustomElement) {
      _inherits5(CustomAmpElement2, _BaseCustomElement);
      var _super = _createSuper5(CustomAmpElement2);
      function CustomAmpElement2() {
        return _super.apply(this, arguments);
      }
      var _proto = CustomAmpElement2.prototype;
      _proto.adoptedCallback = function adoptedCallback() {
        if (Object.getPrototypeOf(this) !== customAmpElementProto) {
          Object.setPrototypeOf(this, customAmpElementProto);
        }
      };
      return CustomAmpElement2;
    }(BaseCustomElement);
    var customAmpElementProto = CustomAmpElement.prototype;
    return CustomAmpElement;
  }
  function createBaseCustomElementClass(win, elementConnectedCallback2) {
    if (win.__AMP_BASE_CE_CLASS) {
      return win.__AMP_BASE_CE_CLASS;
    }
    var htmlElement = win.HTMLElement;
    var BaseCustomElement = /* @__PURE__ */ function(_htmlElement) {
      _inherits5(BaseCustomElement2, _htmlElement);
      var _super2 = _createSuper5(BaseCustomElement2);
      function BaseCustomElement2() {
        var _this;
        _this = _super2.call(this);
        _this.createdCallback();
        return _this;
      }
      var _proto2 = BaseCustomElement2.prototype;
      _proto2.createdCallback = function createdCallback() {
        this.built_ = false;
        this.isConnected_ = false;
        this.buildingPromise_ = null;
        this.mounted_ = false;
        this.mountPromise_ = null;
        this.mountAbortController_ = null;
        this.readyState_ = ReadyState_Enum.UPGRADING;
        this.everAttached = false;
        this.ampdoc_ = null;
        this.resources_ = null;
        this.layout_ = Layout_Enum.NODISPLAY;
        this.layoutCount_ = 0;
        this.isFirstLayoutCompleted_ = false;
        this.warnOnMissingOverflow = true;
        this.sizerElement = void 0;
        this.overflowElement_ = void 0;
        this.layoutScheduleTime = void 0;
        var nonStructThis = this;
        var Ctor = win.__AMP_EXTENDED_ELEMENTS && win.__AMP_EXTENDED_ELEMENTS[this.localName];
        if (getMode().test && nonStructThis["implementationClassForTesting"]) {
          Ctor = nonStructThis["implementationClassForTesting"];
        }
        this.implClass_ = Ctor === ElementStub ? null : Ctor || null;
        if (!this.implClass_) {
          stubbedElements.push(this);
        }
        this.impl_ = null;
        this.upgradeState_ = UpgradeState_Enum.NOT_UPGRADED;
        this.upgradeDelayMs_ = 0;
        this.actionQueue_ = void 0;
        this.isInTemplate_ = void 0;
        this.signals_ = new Signals();
        if (this.implClass_) {
          this.signals_.signal(CommonSignals_Enum.READY_TO_UPGRADE);
        }
        var perf = Services.performanceForOrNull(win);
        this.perfOn_ = perf && perf.isPerformanceTrackingOn();
        this.mediaQueryProps_ = null;
        if (nonStructThis[UPGRADE_TO_CUSTOMELEMENT_RESOLVER]) {
          nonStructThis[UPGRADE_TO_CUSTOMELEMENT_RESOLVER](nonStructThis);
          delete nonStructThis[UPGRADE_TO_CUSTOMELEMENT_RESOLVER];
          delete nonStructThis[UPGRADE_TO_CUSTOMELEMENT_PROMISE];
        }
      };
      _proto2.signals = function signals() {
        return this.signals_;
      };
      _proto2.getAmpDoc = function getAmpDoc() {
        devAssert2(this.ampdoc_, "no ampdoc yet, since element is not attached");
        return this.ampdoc_;
      };
      _proto2.getResources = function getResources() {
        devAssert2(this.resources_, "no resources yet, since element is not attached");
        return this.resources_;
      };
      _proto2.isUpgraded = function isUpgraded() {
        return this.upgradeState_ == UpgradeState_Enum.UPGRADED;
      };
      _proto2.whenUpgraded = function whenUpgraded() {
        return this.signals_.whenSignal(CommonSignals_Enum.UPGRADED);
      };
      _proto2.upgrade = function upgrade(newImplClass) {
        if (this.isInTemplate_) {
          return;
        }
        if (this.upgradeState_ != UpgradeState_Enum.NOT_UPGRADED) {
          return;
        }
        this.implClass_ = newImplClass;
        this.signals_.signal(CommonSignals_Enum.READY_TO_UPGRADE);
        if (this.everAttached) {
          this.upgradeOrSchedule_();
        }
      };
      _proto2.markUnresolved = function markUnresolved() {
        if (!this.implClass_) {
          this.classList.add("amp-unresolved", "i-amphtml-unresolved");
        }
      };
      _proto2.getUpgradeDelayMs = function getUpgradeDelayMs() {
        return this.upgradeDelayMs_;
      };
      _proto2.completeUpgrade_ = function completeUpgrade_(newImpl, upgradeStartTime) {
        this.impl_ = newImpl;
        this.upgradeDelayMs_ = win.Date.now() - upgradeStartTime;
        this.upgradeState_ = UpgradeState_Enum.UPGRADED;
        this.setReadyStateInternal(ReadyState_Enum.BUILDING);
        this.classList.remove("amp-unresolved", "i-amphtml-unresolved");
        this.assertLayout_();
        this.dispatchCustomEventForTesting(AmpEvents_Enum.ATTACHED);
        if (!this.R1()) {
          this.getResources().upgraded(this);
        }
        this.signals_.signal(CommonSignals_Enum.UPGRADED);
      };
      _proto2.assertLayout_ = function assertLayout_() {
        if (this.layout_ != Layout_Enum.NODISPLAY && this.impl_ && !this.impl_.isLayoutSupported(this.layout_)) {
          userAssert2(this.getAttribute("layout"), "The element did not specify a layout attribute. Check https://amp.dev/documentation/guides-and-tutorials/develop/style_and_layout/control_layout and the respective element documentation for details.");
          userAssert2(false, "Layout not supported: " + this.layout_);
        }
      };
      _proto2.getBuildPriority = function getBuildPriority() {
        return this.implClass_ ? this.implClass_.getBuildPriority(this) : LayoutPriority_Enum.BACKGROUND;
      };
      _proto2.getLayoutPriority = function getLayoutPriority() {
        return this.impl_ ? this.impl_.getLayoutPriority() : LayoutPriority_Enum.BACKGROUND;
      };
      _proto2.getDefaultActionAlias = function getDefaultActionAlias() {
        devAssert2(this.isUpgraded(), "Cannot get default action alias of unupgraded element");
        return this.impl_.getDefaultActionAlias();
      };
      _proto2.isBuilding = function isBuilding() {
        return !!this.buildingPromise_;
      };
      _proto2.isBuilt = function isBuilt() {
        return this.built_;
      };
      _proto2.whenBuilt = function whenBuilt() {
        return this.signals_.whenSignal(CommonSignals_Enum.BUILT);
      };
      _proto2.buildInternal = function buildInternal() {
        var _this2 = this;
        assertNotTemplate(this);
        devAssert2(this.implClass_, "Cannot build unupgraded element");
        if (this.buildingPromise_) {
          return this.buildingPromise_;
        }
        this.setReadyStateInternal(ReadyState_Enum.BUILDING);
        var implPromise = this.createImpl_();
        this.getSizer_();
        var consentPromise = implPromise.then(function() {
          var policyId = _this2.getConsentPolicy_();
          var purposeConsents = !policyId ? _this2.getPurposesConsent_() : null;
          if (!policyId && !purposeConsents) {
            return;
          }
          return Services.consentPolicyServiceForDocOrNull(_this2).then(function(policy) {
            if (!policy) {
              return true;
            }
            return policyId ? policy.whenPolicyUnblock(policyId) : policy.whenPurposesUnblock(purposeConsents);
          }).then(function(shouldUnblock) {
            if (!shouldUnblock) {
              throw blockedByConsentError();
            }
          });
        });
        var buildPromise = consentPromise.then(function() {
          return devAssert2(_this2.impl_).buildCallback();
        });
        return this.buildingPromise_ = buildPromise.then(function() {
          _this2.built_ = true;
          _this2.classList.add("i-amphtml-built");
          _this2.classList.remove("i-amphtml-notbuilt", "amp-notbuilt");
          _this2.signals_.signal(CommonSignals_Enum.BUILT);
          if (_this2.R1()) {
            _this2.setReadyStateInternal(_this2.readyState_ != ReadyState_Enum.BUILDING ? _this2.readyState_ : ReadyState_Enum.MOUNTING);
          } else {
            _this2.setReadyStateInternal(ReadyState_Enum.LOADING);
            _this2.preconnect(false);
          }
          if (_this2.isConnected_) {
            _this2.connected_();
          }
          if (_this2.actionQueue_) {
            Services.timerFor(getWin(_this2)).delay(_this2.dequeueActions_.bind(_this2), 1);
          }
          if (!_this2.getPlaceholder()) {
            var placeholder = _this2.createPlaceholder();
            if (placeholder) {
              _this2.appendChild(placeholder);
            }
          }
        }, function(reason) {
          _this2.signals_.rejectSignal(CommonSignals_Enum.BUILT, reason);
          if (_this2.R1()) {
            _this2.setReadyStateInternal(ReadyState_Enum.ERROR, reason);
          }
          if (!isBlockedByConsent(reason)) {
            reportError(reason, _this2);
          }
          throw reason;
        });
      };
      _proto2.build = function build() {
        var _this3 = this;
        if (this.buildingPromise_) {
          return this.buildingPromise_;
        }
        var readyPromise = this.signals_.whenSignal(CommonSignals_Enum.READY_TO_UPGRADE);
        return readyPromise.then(function() {
          if (_this3.R1()) {
            var scheduler = getSchedulerForDoc(_this3.getAmpDoc());
            scheduler.scheduleAsap(_this3);
          }
          return _this3.whenBuilt();
        });
      };
      _proto2.mountInternal = function mountInternal() {
        var _this4 = this;
        if (this.mountPromise_) {
          return this.mountPromise_;
        }
        this.mountAbortController_ = this.mountAbortController_ || new AbortController();
        var signal = this.mountAbortController_.signal;
        return this.mountPromise_ = this.buildInternal().then(function() {
          devAssert2(_this4.R1());
          if (signal.aborted) {
            return;
          }
          _this4.setReadyStateInternal(_this4.readyState_ != ReadyState_Enum.MOUNTING ? _this4.readyState_ : _this4.implClass_.usesLoading(_this4) ? ReadyState_Enum.LOADING : ReadyState_Enum.MOUNTING);
          _this4.mounted_ = true;
          var result = _this4.impl_.mountCallback(signal);
          return result ? result.then(RETURN_TRUE) : false;
        }).then(function(hasLoaded) {
          _this4.mountAbortController_ = null;
          if (signal.aborted) {
            throw cancellation();
          }
          _this4.signals_.signal(CommonSignals_Enum.MOUNTED);
          if (!_this4.implClass_.usesLoading(_this4) || hasLoaded) {
            _this4.setReadyStateInternal(ReadyState_Enum.COMPLETE);
          }
        }).catch(function(reason) {
          _this4.mountAbortController_ = null;
          if (isCancellation(reason)) {
            _this4.mountPromise_ = null;
          } else {
            _this4.signals_.rejectSignal(CommonSignals_Enum.MOUNTED, reason);
            _this4.setReadyStateInternal(ReadyState_Enum.ERROR, reason);
          }
          throw reason;
        });
      };
      _proto2.mount = function mount() {
        var _this5 = this;
        if (this.mountPromise_) {
          return this.mountPromise_;
        }
        this.mountAbortController_ = this.mountAbortController_ || new AbortController();
        var signal = this.mountAbortController_.signal;
        var readyPromise = this.signals_.whenSignal(CommonSignals_Enum.READY_TO_UPGRADE);
        return readyPromise.then(function() {
          if (!_this5.R1()) {
            return _this5.whenBuilt();
          }
          if (signal.aborted) {
            throw cancellation();
          }
          var scheduler = getSchedulerForDoc(_this5.getAmpDoc());
          scheduler.scheduleAsap(_this5);
          return _this5.whenMounted();
        });
      };
      _proto2.unmount = function unmount() {
        if (this.isConnected_) {
          this.pause();
        }
        if (!this.R1()) {
          this.unlayout_();
          return;
        }
        if (this.mountAbortController_) {
          this.mountAbortController_.abort();
          this.mountAbortController_ = null;
        }
        var scheduler = getSchedulerForDoc(this.getAmpDoc());
        scheduler.unschedule(this);
        if (this.mounted_) {
          this.impl_.unmountCallback();
        }
        this.mounted_ = false;
        this.mountPromise_ = null;
        this.reset_();
        if (this.isConnected_) {
          this.upgradeOrSchedule_(true);
        }
      };
      _proto2.whenMounted = function whenMounted() {
        return this.signals_.whenSignal(CommonSignals_Enum.MOUNTED);
      };
      _proto2.whenLoaded = function whenLoaded() {
        return this.signals_.whenSignal(CommonSignals_Enum.LOAD_END);
      };
      _proto2.ensureLoaded = function ensureLoaded(opt_parentPriority) {
        var _this6 = this;
        return this.mount().then(function() {
          if (_this6.R1()) {
            if (_this6.implClass_.usesLoading(_this6)) {
              _this6.impl_.ensureLoaded();
            }
            return _this6.whenLoaded();
          }
          var resource = _this6.getResource_();
          return resource.whenBuilt().then(function() {
            if (resource.getState() == ResourceState_Enum.LAYOUT_COMPLETE) {
              return;
            }
            if (resource.getState() != ResourceState_Enum.LAYOUT_SCHEDULED || resource.isMeasureRequested()) {
              resource.measure();
            }
            if (!resource.isDisplayed()) {
              return;
            }
            _this6.getResources().scheduleLayoutOrPreload(resource, true, opt_parentPriority, true);
            return _this6.whenLoaded();
          });
        });
      };
      _proto2.setAsContainerInternal = function setAsContainerInternal(opt_scroller) {
        var builder = getSchedulerForDoc(this.getAmpDoc());
        builder.setContainer(this, opt_scroller);
      };
      _proto2.removeAsContainerInternal = function removeAsContainerInternal() {
        var builder = getSchedulerForDoc(this.getAmpDoc());
        builder.removeContainer(this);
      };
      _proto2.setReadyStateInternal = function setReadyStateInternal(state, opt_failure) {
        if (state === this.readyState_) {
          return;
        }
        this.readyState_ = state;
        if (!this.R1()) {
          return;
        }
        switch (state) {
          case ReadyState_Enum.LOADING:
            this.signals_.signal(CommonSignals_Enum.LOAD_START);
            this.signals_.reset(CommonSignals_Enum.UNLOAD);
            this.signals_.reset(CommonSignals_Enum.LOAD_END);
            this.classList.add("i-amphtml-layout");
            this.toggleLoading(true);
            this.dispatchCustomEventForTesting(AmpEvents_Enum.LOAD_START);
            return;
          case ReadyState_Enum.COMPLETE:
            this.signals_.signal(CommonSignals_Enum.LOAD_START);
            this.signals_.signal(CommonSignals_Enum.LOAD_END);
            this.signals_.reset(CommonSignals_Enum.UNLOAD);
            this.classList.add("i-amphtml-layout");
            this.toggleLoading(false);
            dispatchCustomEvent(this, "load", null, NO_BUBBLES);
            this.dispatchCustomEventForTesting(AmpEvents_Enum.LOAD_END);
            return;
          case ReadyState_Enum.ERROR:
            this.signals_.rejectSignal(CommonSignals_Enum.LOAD_END, opt_failure);
            this.toggleLoading(false);
            dispatchCustomEvent(this, "error", opt_failure, NO_BUBBLES);
            return;
        }
      };
      _proto2.preconnect = function preconnect(onLayout) {
        var _this7 = this;
        devAssert2(this.isUpgraded());
        if (onLayout) {
          this.impl_.preconnectCallback(onLayout);
        } else {
          startupChunk(this.getAmpDoc(), function() {
            if (!_this7.ownerDocument || !_this7.ownerDocument.defaultView) {
              return;
            }
            _this7.impl_.preconnectCallback(onLayout);
          });
        }
      };
      _proto2.R1 = function R1() {
        return this.implClass_ ? this.implClass_.R1() : false;
      };
      _proto2.deferredMount = function deferredMount() {
        return this.implClass_ ? this.implClass_.deferredMount(this) : false;
      };
      _proto2.isAlwaysFixed = function isAlwaysFixed() {
        return this.impl_ ? this.impl_.isAlwaysFixed() : false;
      };
      _proto2.updateLayoutBox = function updateLayoutBox(layoutBox, sizeChanged) {
        if (sizeChanged === void 0) {
          sizeChanged = false;
        }
        if (this.isBuilt()) {
          this.onMeasure(sizeChanged);
        }
      };
      _proto2.onMeasure = function onMeasure() {
        devAssert2(this.isBuilt());
        try {
          this.impl_.onLayoutMeasure();
        } catch (e) {
          reportError(e, this);
        }
      };
      _proto2.getSizer_ = function getSizer_() {
        if (this.sizerElement === void 0 && (this.layout_ === Layout_Enum.RESPONSIVE || this.layout_ === Layout_Enum.INTRINSIC)) {
          var _this$sizerElement;
          this.sizerElement = this.querySelector("i-amphtml-sizer");
          (_this$sizerElement = this.sizerElement) == null ? void 0 : _this$sizerElement.setAttribute("slot", "i-amphtml-svc");
        }
        return this.sizerElement || null;
      };
      _proto2.resetSizer_ = function resetSizer_(sizer) {
        if (this.layout_ === Layout_Enum.RESPONSIVE) {
          setStyle(sizer, "paddingTop", "0");
          return;
        }
        if (this.layout_ === Layout_Enum.INTRINSIC) {
          var intrinsicSizerImg = sizer.querySelector(".i-amphtml-intrinsic-sizer");
          if (!intrinsicSizerImg) {
            return;
          }
          intrinsicSizerImg.setAttribute("src", "");
          return;
        }
      };
      _proto2.initMediaAttrs_ = function initMediaAttrs_() {
        var _this8 = this;
        var hasMediaAttrs = this.hasAttribute("media") || this.hasAttribute("sizes") && !this.hasAttribute("disable-inline-width") || this.hasAttribute("heights");
        var hadMediaAttrs = !!this.mediaQueryProps_;
        var win2 = this.ownerDocument.defaultView;
        if (hasMediaAttrs != hadMediaAttrs && win2) {
          if (hasMediaAttrs) {
            this.mediaQueryProps_ = new MediaQueryProps(win2, function() {
              return _this8.applyMediaAttrs_();
            });
            this.applyMediaAttrs_();
          } else {
            this.disposeMediaAttrs_();
          }
        }
      };
      _proto2.disposeMediaAttrs_ = function disposeMediaAttrs_() {
        if (this.mediaQueryProps_) {
          this.mediaQueryProps_.dispose();
          this.mediaQueryProps_ = null;
        }
      };
      _proto2.applyMediaAttrs_ = function applyMediaAttrs_() {
        var props = this.mediaQueryProps_;
        if (!props) {
          return;
        }
        props.start();
        var mediaAttr = this.getAttribute("media") || null;
        var matchesMedia = mediaAttr ? props.resolveMatchQuery(mediaAttr) : true;
        this.classList.toggle("i-amphtml-hidden-by-media-query", !matchesMedia);
        var sizesAttr = this.hasAttribute("disable-inline-width") ? null : this.getAttribute("sizes");
        if (sizesAttr) {
          setStyle(this, "width", props.resolveListQuery(sizesAttr));
        }
        var heightsAttr = this.layout_ === Layout_Enum.RESPONSIVE ? this.getAttribute("heights") : null;
        if (heightsAttr) {
          var sizer = this.getSizer_();
          if (sizer) {
            setStyle(sizer, "paddingTop", props.resolveListQuery(heightsAttr));
          }
        }
        props.complete();
        this.getResource_().requestMeasure();
      };
      _proto2.applySize = function applySize(newHeight, newWidth, opt_newMargins) {
        var sizer = this.getSizer_();
        if (sizer) {
          this.sizerElement = null;
          this.resetSizer_(sizer);
          this.mutateOrInvoke_(function() {
            if (sizer) {
              removeElement(sizer);
            }
          });
        }
        if (newHeight !== void 0) {
          setStyle(this, "height", newHeight, "px");
        }
        if (newWidth !== void 0) {
          setStyle(this, "width", newWidth, "px");
        }
        if (opt_newMargins) {
          if (opt_newMargins.top != null) {
            setStyle(this, "marginTop", opt_newMargins.top, "px");
          }
          if (opt_newMargins.right != null) {
            setStyle(this, "marginRight", opt_newMargins.right, "px");
          }
          if (opt_newMargins.bottom != null) {
            setStyle(this, "marginBottom", opt_newMargins.bottom, "px");
          }
          if (opt_newMargins.left != null) {
            setStyle(this, "marginLeft", opt_newMargins.left, "px");
          }
        }
        if (this.isAwaitingSize_()) {
          this.sizeProvided_();
        }
        dispatchCustomEvent(this, AmpEvents_Enum.SIZE_CHANGED);
      };
      _proto2.connectedCallback = function connectedCallback() {
        if (!isTemplateTagSupported() && this.isInTemplate_ === void 0) {
          this.isInTemplate_ = !!closestAncestorElementBySelector(this, "template");
        }
        if (this.isInTemplate_) {
          return;
        }
        if (this.isConnected_ || !isConnectedNode(this)) {
          return;
        }
        this.isConnected_ = true;
        if (!this.everAttached) {
          this.classList.add("i-amphtml-element", "i-amphtml-notbuilt", "amp-notbuilt");
        }
        if (!this.ampdoc_) {
          var _win = getWin(this);
          var ampdocService2 = Services.ampdocServiceFor(_win);
          var ampdoc2 = ampdocService2.getAmpDoc(this);
          this.ampdoc_ = ampdoc2;
          elementConnectedCallback2(ampdoc2, this, this.implClass_);
        }
        if (!this.resources_) {
          this.resources_ = Services.resourcesForDoc(this.ampdoc_);
        }
        this.getResources().add(this);
        if (this.everAttached) {
          var reconstruct = this.reconstructWhenReparented();
          if (reconstruct) {
            this.reset_();
          }
          if (this.isUpgraded()) {
            if (reconstruct && !this.R1()) {
              this.getResources().upgraded(this);
            }
            this.connected_();
            this.dispatchCustomEventForTesting(AmpEvents_Enum.ATTACHED);
          }
          if (this.implClass_ && this.R1()) {
            this.upgradeOrSchedule_();
          }
        } else {
          this.everAttached = true;
          try {
            this.layout_ = applyStaticLayout(this);
            this.initMediaAttrs_();
          } catch (e) {
            reportError(e, this);
          }
          if (this.implClass_) {
            this.upgradeOrSchedule_();
          } else if (unresolvableExtensions.has("*") || unresolvableExtensions.has(this.tagName.toLowerCase())) {
            this.markUnresolved();
          }
          if (!this.isUpgraded()) {
            this.dispatchCustomEventForTesting(AmpEvents_Enum.STUBBED);
          }
        }
        this.toggleLoading(true);
      };
      _proto2.isAwaitingSize_ = function isAwaitingSize_() {
        return this.classList.contains("i-amphtml-layout-awaiting-size");
      };
      _proto2.sizeProvided_ = function sizeProvided_() {
        this.classList.remove("i-amphtml-layout-awaiting-size");
      };
      _proto2.upgradeOrSchedule_ = function upgradeOrSchedule_(opt_disablePreload) {
        if (!this.R1()) {
          this.tryUpgrade_();
          return;
        }
        if (this.mountPromise_) {
          return;
        }
        var scheduler = getSchedulerForDoc(this.getAmpDoc());
        scheduler.schedule(this);
        this.classList.remove("amp-unresolved", "i-amphtml-unresolved");
        if (this.buildingPromise_) {
          this.setReadyStateInternal(this.implClass_ && this.implClass_.usesLoading(this) ? ReadyState_Enum.LOADING : ReadyState_Enum.MOUNTING);
        } else {
          this.setReadyStateInternal(ReadyState_Enum.BUILDING);
          if (!opt_disablePreload) {
            var urls2 = this.implClass_.getPreconnects(this);
            if (urls2 && urls2.length > 0) {
              var ampdoc2 = this.getAmpDoc();
              startupChunk(ampdoc2, function() {
                var win2 = ampdoc2.win;
                if (!win2) {
                  return;
                }
                var preconnect = Services.preconnectFor(win2);
                urls2.forEach(function(url) {
                  return preconnect.url(ampdoc2, url, false);
                });
              });
            }
          }
        }
      };
      _proto2.tryUpgrade_ = function tryUpgrade_() {
        var _this9 = this;
        if (this.isInTemplate_) {
          return;
        }
        if (this.upgradeState_ != UpgradeState_Enum.NOT_UPGRADED) {
          return;
        }
        var Ctor = devAssert2(this.implClass_, "Implementation must not be a stub");
        var impl = new Ctor(this);
        this.upgradeState_ = UpgradeState_Enum.UPGRADE_IN_PROGRESS;
        var startTime = win.Date.now();
        var res = impl.upgradeCallback();
        if (!res) {
          this.completeUpgrade_(impl, startTime);
        } else if (typeof res.then == "function") {
          return res.then(function(upgrade) {
            _this9.completeUpgrade_(upgrade || impl, startTime);
          }).catch(function(reason) {
            _this9.upgradeState_ = UpgradeState_Enum.UPGRADE_FAILED;
            rethrowAsync(reason);
          });
        } else {
          this.completeUpgrade_(res, startTime);
        }
      };
      _proto2.disconnectedCallback = function disconnectedCallback() {
        this.disconnect(false);
      };
      _proto2.connected_ = function connected_() {
        if (this.built_) {
          this.impl_.attachedCallback();
        }
      };
      _proto2.disconnect = function disconnect(pretendDisconnected) {
        if (this.isInTemplate_ || !this.isConnected_) {
          return;
        }
        if (!pretendDisconnected && isConnectedNode(this)) {
          return;
        }
        if (pretendDisconnected) {
          this.classList.remove("i-amphtml-element");
        }
        this.isConnected_ = false;
        this.getResources().remove(this);
        if (this.impl_) {
          this.impl_.detachedCallback();
        }
        if (this.R1()) {
          this.unmount();
        }
        this.toggleLoading(false);
        this.disposeMediaAttrs_();
      };
      _proto2.dispatchCustomEventForTesting = function dispatchCustomEventForTesting(name, opt_data) {
        if (!getMode().test) {
          return;
        }
        dispatchCustomEvent(this, name, opt_data);
      };
      _proto2.prerenderAllowed = function prerenderAllowed() {
        if (this.hasAttribute("noprerender")) {
          return false;
        }
        return this.implClass_ ? this.implClass_.prerenderAllowed(this) : false;
      };
      _proto2.isBuildRenderBlocking = function isBuildRenderBlocking() {
        return this.impl_ ? this.impl_.isBuildRenderBlocking() : false;
      };
      _proto2.createPlaceholder = function createPlaceholder() {
        return this.impl_ ? this.impl_.createPlaceholderCallback() : null;
      };
      _proto2.createLoaderLogo = function createLoaderLogo() {
        return this.implClass_ ? this.implClass_.createLoaderLogoCallback(this) : {};
      };
      _proto2.renderOutsideViewport = function renderOutsideViewport() {
        return this.impl_ ? this.impl_.renderOutsideViewport() : false;
      };
      _proto2.idleRenderOutsideViewport = function idleRenderOutsideViewport() {
        return this.impl_ ? this.impl_.idleRenderOutsideViewport() : false;
      };
      _proto2.getLayoutBox = function getLayoutBox() {
        return this.getResource_().getLayoutBox();
      };
      _proto2.getLayoutSize = function getLayoutSize() {
        return this.getResource_().getLayoutSize();
      };
      _proto2.getOwner = function getOwner() {
        return this.getResource_().getOwner();
      };
      _proto2.getIntersectionChangeEntry = function getIntersectionChangeEntry2() {
        var box = this.impl_ ? this.impl_.getIntersectionElementLayoutBox() : this.getLayoutBox();
        var owner = this.getOwner();
        var viewport = Services.viewportForDoc(this.getAmpDoc());
        var viewportBox = viewport.getRect();
        var ownerBox = owner && owner.getLayoutBox();
        return getIntersectionChangeEntry(box, ownerBox, viewportBox);
      };
      _proto2.getResource_ = function getResource_() {
        return this.getResources().getResourceForElement(this);
      };
      _proto2.getResourceId = function getResourceId() {
        return this.getResource_().getId();
      };
      _proto2.isRelayoutNeeded = function isRelayoutNeeded() {
        return this.impl_ ? this.impl_.isRelayoutNeeded() : false;
      };
      _proto2.getImpl = function getImpl(waitForBuild) {
        var _this10 = this;
        if (waitForBuild === void 0) {
          waitForBuild = true;
        }
        var waitFor = waitForBuild ? this.build() : this.createImpl_();
        return waitFor.then(function() {
          return _this10.impl_;
        });
      };
      _proto2.createImpl_ = function createImpl_() {
        var _this11 = this;
        return this.signals_.whenSignal(CommonSignals_Enum.READY_TO_UPGRADE).then(function() {
          _this11.tryUpgrade_();
          return _this11.whenUpgraded();
        });
      };
      _proto2.getApi = function getApi() {
        return this.getImpl().then(function(impl) {
          return impl.getApi();
        });
      };
      _proto2.getLayout = function getLayout() {
        return this.layout_;
      };
      _proto2.layoutCallback = function layoutCallback(signal) {
        var _this12 = this;
        assertNotTemplate(this);
        devAssert2(this.isBuilt(), "Must be built to receive viewport events");
        if ((!getMode().test || signal) && signal.aborted) {
          return Promise.reject(cancellation());
        }
        this.dispatchCustomEventForTesting(AmpEvents_Enum.LOAD_START);
        var isLoadEvent = this.layoutCount_ == 0;
        this.signals_.reset(CommonSignals_Enum.UNLOAD);
        if (isLoadEvent) {
          this.signals_.signal(CommonSignals_Enum.LOAD_START);
        }
        this.toggleLoading(true);
        var promise = tryResolve(function() {
          return _this12.impl_.layoutCallback();
        });
        this.preconnect(true);
        this.classList.add("i-amphtml-layout");
        return promise.then(function() {
          if ((!getMode().test || signal) && signal.aborted) {
            throw cancellation();
          }
          if (isLoadEvent) {
            _this12.signals_.signal(CommonSignals_Enum.LOAD_END);
          }
          _this12.setReadyStateInternal(ReadyState_Enum.COMPLETE);
          _this12.layoutCount_++;
          _this12.toggleLoading(false);
          if (!_this12.isFirstLayoutCompleted_) {
            _this12.impl_.firstLayoutCompleted();
            _this12.isFirstLayoutCompleted_ = true;
            _this12.dispatchCustomEventForTesting(AmpEvents_Enum.LOAD_END);
          }
        }, function(reason) {
          if ((!getMode().test || signal) && signal.aborted) {
            throw cancellation();
          }
          if (isLoadEvent) {
            _this12.signals_.rejectSignal(CommonSignals_Enum.LOAD_END, reason);
          }
          _this12.setReadyStateInternal(ReadyState_Enum.ERROR, reason);
          _this12.layoutCount_++;
          _this12.toggleLoading(false);
          throw reason;
        });
      };
      _proto2.pause = function pause() {
        if (!this.isBuilt()) {
          return;
        }
        this.impl_.pauseCallback();
        if (!this.R1() && this.impl_.unlayoutOnPause()) {
          this.unlayout_();
        }
      };
      _proto2.resume = function resume() {
        if (!this.isBuilt()) {
          return;
        }
        this.impl_.resumeCallback();
      };
      _proto2.unlayoutCallback = function unlayoutCallback() {
        assertNotTemplate(this);
        if (!this.isBuilt()) {
          return false;
        }
        this.signals_.signal(CommonSignals_Enum.UNLOAD);
        var isReLayoutNeeded = this.impl_.unlayoutCallback();
        if (isReLayoutNeeded) {
          this.reset_();
        }
        this.dispatchCustomEventForTesting(AmpEvents_Enum.UNLOAD);
        return isReLayoutNeeded;
      };
      _proto2.unlayout_ = function unlayout_() {
        this.getResource_().unlayout();
        if (this.isConnected_ && this.resources_) {
          this.resources_.schedulePass();
        }
      };
      _proto2.reset_ = function reset_() {
        this.layoutCount_ = 0;
        this.isFirstLayoutCompleted_ = false;
        this.signals_.reset(CommonSignals_Enum.MOUNTED);
        this.signals_.reset(CommonSignals_Enum.RENDER_START);
        this.signals_.reset(CommonSignals_Enum.LOAD_START);
        this.signals_.reset(CommonSignals_Enum.LOAD_END);
        this.signals_.reset(CommonSignals_Enum.INI_LOAD);
      };
      _proto2.reconstructWhenReparented = function reconstructWhenReparented() {
        return this.impl_ ? this.impl_.reconstructWhenReparented() : false;
      };
      _proto2.collapse = function collapse() {
        if (this.impl_) {
          this.impl_.collapse();
        }
      };
      _proto2.collapsedCallback = function collapsedCallback(element) {
        if (this.impl_) {
          this.impl_.collapsedCallback(element);
        }
      };
      _proto2.expand = function expand() {
        if (this.impl_) {
          this.impl_.expand();
        }
      };
      _proto2.mutatedAttributesCallback = function mutatedAttributesCallback(mutations) {
        if (this.impl_) {
          this.impl_.mutatedAttributesCallback(mutations);
        }
      };
      _proto2.enqueAction = function enqueAction(invocation) {
        assertNotTemplate(this);
        if (!this.isBuilt()) {
          if (this.actionQueue_ === void 0) {
            this.actionQueue_ = [];
          }
          devAssert2(this.actionQueue_).push(invocation);
          this.build();
        } else {
          this.executionAction_(invocation, false);
        }
      };
      _proto2.dequeueActions_ = function dequeueActions_() {
        var _this13 = this;
        if (!this.actionQueue_) {
          return;
        }
        var actionQueue = devAssert2(this.actionQueue_);
        this.actionQueue_ = null;
        actionQueue.forEach(function(invocation) {
          _this13.executionAction_(invocation, true);
        });
      };
      _proto2.executionAction_ = function executionAction_(invocation, deferred) {
        try {
          this.impl_.executeAction(invocation, deferred);
        } catch (e) {
          rethrowAsync("Action execution failed:", e, invocation.node.tagName, invocation.method);
        }
      };
      _proto2.getConsentPolicy_ = function getConsentPolicy_() {
        var policyId = this.getAttribute("data-block-on-consent");
        if (policyId === null) {
          if (shouldBlockOnConsentByMeta(this)) {
            policyId = "default";
            this.setAttribute("data-block-on-consent", policyId);
          } else {
            return null;
          }
        }
        if (policyId == "" || policyId == "default") {
          return devAssert2(this.impl_).getConsentPolicy();
        }
        return policyId;
      };
      _proto2.getPurposesConsent_ = function getPurposesConsent_() {
        var _purposes$replace;
        var purposes = this.getAttribute("data-block-on-consent-purposes") || null;
        return purposes == null ? void 0 : (_purposes$replace = purposes.replace(/\s+/g, "")) == null ? void 0 : _purposes$replace.split(",");
      };
      _proto2.getPlaceholder = function getPlaceholder() {
        return lastChildElement(this, function(el) {
          return el.hasAttribute("placeholder") && !isInputPlaceholder(el);
        });
      };
      _proto2.togglePlaceholder = function togglePlaceholder(show) {
        assertNotTemplate(this);
        if (show) {
          var placeholder = this.getPlaceholder();
          if (placeholder) {
            dev().assertElement(placeholder).classList.remove("amp-hidden");
          }
        } else {
          var placeholders = childElementsByAttr(this, "placeholder");
          for (var i = 0; i < placeholders.length; i++) {
            if (isInputPlaceholder(placeholders[i])) {
              continue;
            }
            placeholders[i].classList.add("amp-hidden");
          }
        }
      };
      _proto2.getFallback = function getFallback() {
        return childElementByAttr(this, "fallback");
      };
      _proto2.toggleFallback = function toggleFallback(show) {
        assertNotTemplate(this);
        var resourceState = this.getResource_().getState();
        if (!this.R1() && show && (resourceState == ResourceState_Enum.NOT_BUILT || resourceState == ResourceState_Enum.NOT_LAID_OUT || resourceState == ResourceState_Enum.READY_FOR_LAYOUT)) {
          return;
        }
        this.classList.toggle("amp-notsupported", show);
        if (show == true) {
          var fallbackElement = this.getFallback();
          if (fallbackElement) {
            Services.ownersForDoc(this.getAmpDoc()).scheduleLayout(this, fallbackElement);
          }
        }
      };
      _proto2.renderStarted = function renderStarted() {
        this.signals_.signal(CommonSignals_Enum.RENDER_START);
        this.togglePlaceholder(false);
        this.toggleLoading(false);
      };
      _proto2.isLoadingEnabled_ = function isLoadingEnabled_(force) {
        var laidOut = this.layoutCount_ > 0 || this.signals_.get(CommonSignals_Enum.RENDER_START);
        if (this.layout_ == Layout_Enum.NODISPLAY || this.hasAttribute("noloading") || laidOut && !force || !isLoadingAllowed(this) || isInternalOrServiceNode(this)) {
          return false;
        }
        return true;
      };
      _proto2.toggleLoading = function toggleLoading(state, force) {
        if (force === void 0) {
          force = false;
        }
        if (!this.ownerDocument || !this.ownerDocument.defaultView) {
          return;
        }
        var loadingIndicator = Services.loadingIndicatorOrNull(this.getAmpDoc());
        if (loadingIndicator) {
          state = state && this.isLoadingEnabled_(force);
          if (state) {
            loadingIndicator.track(this);
          } else {
            loadingIndicator.untrack(this);
          }
        }
      };
      _proto2.getOverflowElement = function getOverflowElement() {
        if (this.overflowElement_ === void 0) {
          this.overflowElement_ = childElementByAttr(this, "overflow");
          if (this.overflowElement_) {
            if (!this.overflowElement_.hasAttribute("tabindex")) {
              this.overflowElement_.setAttribute("tabindex", "0");
            }
            if (!this.overflowElement_.hasAttribute("role")) {
              this.overflowElement_.setAttribute("role", "button");
            }
          }
        }
        return this.overflowElement_;
      };
      _proto2.overflowCallback = function overflowCallback(overflown, requestedHeight, requestedWidth) {
        var _this14 = this;
        this.getOverflowElement();
        if (!this.overflowElement_) {
          if (overflown && this.warnOnMissingOverflow) {
            user().warn(TAG4, "Cannot resize element and overflow is not available", this);
          }
        } else {
          this.overflowElement_.classList.toggle("amp-visible", overflown);
          if (overflown) {
            this.overflowElement_.onclick = function() {
              var mutator = Services.mutatorForDoc(_this14.getAmpDoc());
              mutator.forceChangeSize(_this14, requestedHeight, requestedWidth);
              mutator.mutateElement(_this14, function() {
                _this14.overflowCallback(false, requestedHeight, requestedWidth);
              });
            };
          } else {
            this.overflowElement_.onclick = null;
          }
        }
      };
      _proto2.mutateOrInvoke_ = function mutateOrInvoke_(mutator, opt_element, opt_skipRemeasure) {
        if (opt_skipRemeasure === void 0) {
          opt_skipRemeasure = false;
        }
        if (this.ampdoc_) {
          Services.mutatorForDoc(this.getAmpDoc()).mutateElement(opt_element || this, mutator, opt_skipRemeasure);
        } else {
          mutator();
        }
      };
      _createClass4(BaseCustomElement2, [{
        key: "readyState",
        get: function get() {
          return this.readyState_;
        }
      }]);
      return BaseCustomElement2;
    }(htmlElement);
    win.__AMP_BASE_CE_CLASS = BaseCustomElement;
    return win.__AMP_BASE_CE_CLASS;
  }
  function isInputPlaceholder(element) {
    return "placeholder" in element;
  }
  function assertNotTemplate(element) {
    devAssert2(!element.isInTemplate_, "Must never be called in template");
  }
  function markUnresolvedElements(opt_extension) {
    unresolvableExtensions.add(opt_extension || "*");
    for (var _iterator = _createForOfIteratorHelperLoose9(stubbedElements), _step; !(_step = _iterator()).done; ) {
      var el = _step.value;
      if (opt_extension == null || el.tagName.toLowerCase() === opt_extension) {
        el.markUnresolved();
      }
    }
  }

  // src/service/custom-element-registry.js
  var docInitializedMap = new WeakMap();
  function getExtendedElements(win) {
    if (!win.__AMP_EXTENDED_ELEMENTS) {
      win.__AMP_EXTENDED_ELEMENTS = {};
    }
    return win.__AMP_EXTENDED_ELEMENTS;
  }
  function upgradeOrRegisterElement(win, name, toClass) {
    var waitPromise = waitReadyForUpgrade(win, toClass);
    if (waitPromise) {
      waitPromise.then(function() {
        return upgradeOrRegisterElementReady(win, name, toClass);
      });
    } else {
      upgradeOrRegisterElementReady(win, name, toClass);
    }
  }
  function upgradeOrRegisterElementReady(win, name, toClass) {
    var knownElements = getExtendedElements(win);
    if (!knownElements[name]) {
      registerElement(win, name, toClass);
      return;
    }
    if (knownElements[name] == toClass) {
      return;
    }
    userAssert2(knownElements[name] == ElementStub, "%s is already registered. The script tag for %s is likely included twice in the page.", name, name);
    knownElements[name] = toClass;
    for (var i = 0; i < stubbedElements.length; i++) {
      var element = stubbedElements[i];
      if (element.tagName.toLowerCase() == name && element.ownerDocument.defaultView == win) {
        tryUpgradeElement(element, toClass);
        stubbedElements.splice(i--, 1);
      }
    }
  }
  function tryUpgradeElement(element, toClass) {
    try {
      element.upgrade(toClass);
    } catch (e) {
      reportError(e, element);
    }
  }
  function waitReadyForUpgrade(win, elementClass) {
    if (elementClass.requiresShadowDom() && !win.Element.prototype.attachShadow) {
      var extensions = Services.extensionsFor(win);
      return extensions.importUnwrapped(win, "amp-shadow-dom-polyfill");
    }
  }
  function stubElementsForDoc(ampdoc2) {
    var extensions = extensionScriptsInNode(ampdoc2.getHeadNode());
    extensions.forEach(function(_ref) {
      var extensionId = _ref.extensionId, extensionVersion = _ref.extensionVersion, script = _ref.script;
      ampdoc2.declareExtension(extensionId, extensionVersion);
      script.addEventListener("error", function() {
        return markUnresolvedElements(extensionId);
      });
      stubElementIfNotKnown(ampdoc2.win, extensionId);
    });
    if (ampdoc2.isBodyAvailable()) {
      ampdoc2.setExtensionsKnown();
    }
  }
  function stubElementIfNotKnown(win, name) {
    var knownElements = getExtendedElements(win);
    if (!knownElements[name]) {
      registerElement(win, name, ElementStub);
    }
  }
  function copyElementToChildWindow(parentWin, childWin, name) {
    var toClass = getExtendedElements(parentWin)[name];
    registerElement(childWin, name, toClass || ElementStub);
  }
  function registerElement(win, name, implementationClass) {
    var knownElements = getExtendedElements(win);
    knownElements[name] = implementationClass;
    var klass = createCustomElementClass(win, elementConnectedCallback);
    win["customElements"].define(name, klass);
  }
  function elementConnectedCallback(ampdoc2, element, implementationClass) {
    if (!docInitializedMap.has(ampdoc2)) {
      docInitializedMap.set(ampdoc2, true);
      stubElementsForDoc(ampdoc2);
    }
    var extensionId = element.localName;
    if (!implementationClass && !ampdoc2.declaresExtension(extensionId)) {
      Services.extensionsFor(ampdoc2.win).installExtensionForDoc(ampdoc2, extensionId, "0.1");
    }
  }

  // src/builtins/amp-img/amp-img.js
  function _inherits6(subClass2, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass2.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass2, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf6(subClass2, superClass);
  }
  function _setPrototypeOf6(o, p) {
    _setPrototypeOf6 = Object.setPrototypeOf || function _setPrototypeOf11(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf6(o, p);
  }
  function _createSuper6(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct6();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf6(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf6(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn6(this, result);
    };
  }
  function _possibleConstructorReturn6(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized6(self2);
  }
  function _assertThisInitialized6(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct6() {
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
  function _getPrototypeOf6(o) {
    _getPrototypeOf6 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf11(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf6(o);
  }
  var TAG5 = "amp-img";
  var ATTRIBUTES_TO_PROPAGATE = ["alt", "aria-describedby", "aria-label", "aria-labelledby", "crossorigin", "referrerpolicy", "title", "importance", "sizes", "srcset", "src"];
  var AmpImg = /* @__PURE__ */ function(_BaseElement) {
    _inherits6(AmpImg2, _BaseElement);
    var _super = _createSuper6(AmpImg2);
    AmpImg2.R1 = function R1() {
      return false;
    };
    AmpImg2.prerenderAllowed = function prerenderAllowed() {
      return true;
    };
    AmpImg2.usesLoading = function usesLoading() {
      return true;
    };
    AmpImg2.getPreconnects = function getPreconnects(element) {
      var src = element.getAttribute("src");
      if (src) {
        return [src];
      }
      var srcset = element.getAttribute("srcset");
      if (srcset) {
        var srcseturl = /\S+/.exec(srcset);
        if (srcseturl) {
          return [srcseturl[0]];
        }
      }
      return null;
    };
    function AmpImg2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.allowImgLoadFallback_ = true;
      _this.img_ = null;
      _this.unlistenLoad_ = null;
      _this.unlistenError_ = null;
      _this.sizesWidth_ = 0;
      return _this;
    }
    var _proto = AmpImg2.prototype;
    _proto.mutatedAttributesCallback = function mutatedAttributesCallback(mutations) {
      if (this.img_) {
        var attrs = ATTRIBUTES_TO_PROPAGATE.filter(function(value) {
          return mutations[value] !== void 0;
        });
        if (mutations["src"] && !mutations["srcset"] && this.element.hasAttribute("srcset")) {
          this.element.removeAttribute("srcset");
          attrs.push("srcset");
          this.user().warn(TAG5, "Removed [srcset] since [src] was mutated. Recommend adding a [srcset] binding to support responsive images.", this.element);
        }
        propagateAttributes(attrs, this.element, this.img_, true);
        this.propagateDataset(this.img_);
        if (!isEsm()) {
          guaranteeSrcForSrcsetUnsupportedBrowsers(this.img_);
        }
        if (AmpImg2.R1() && !this.img_.complete) {
          this.setReadyState(ReadyState_Enum.LOADING);
        }
      }
    };
    _proto.preconnectCallback = function preconnectCallback(onLayout) {
      var src = this.element.getAttribute("src");
      if (src) {
        Services.preconnectFor(this.win).url(this.getAmpDoc(), src, onLayout);
      } else {
        var srcset = this.element.getAttribute("srcset");
        if (!srcset) {
          return;
        }
        var srcseturl = /\S+/.exec(srcset);
        if (srcseturl) {
          Services.preconnectFor(this.win).url(this.getAmpDoc(), srcseturl[0], onLayout);
        }
      }
    };
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return isLayoutSizeDefined(layout);
    };
    _proto.initialize_ = function initialize_() {
      if (this.img_) {
        return this.img_;
      }
      this.allowImgLoadFallback_ = !this.element.hasAttribute("fallback");
      var serverRendered = isServerRendered(this.element);
      if (serverRendered) {
        this.img_ = scopedQuerySelector(this.element, "> img:not([placeholder])");
      }
      this.img_ = this.img_ || new Image();
      this.img_.setAttribute("decoding", "async");
      if (this.element.id) {
        this.img_.setAttribute("amp-img-id", this.element.id);
      }
      if (this.element.getAttribute("role") == "img") {
        this.element.removeAttribute("role");
        this.user().error(TAG5, "Setting role=img on amp-img elements breaks screen readers please just set alt or ARIA attributes, they will be correctly propagated for the underlying <img> element.");
      }
      this.maybeGenerateSizes_(true);
      propagateAttributes(ATTRIBUTES_TO_PROPAGATE, this.element, this.img_);
      this.propagateDataset(this.img_);
      if (!isEsm()) {
        guaranteeSrcForSrcsetUnsupportedBrowsers(this.img_);
      }
      applyFillContent(this.img_, true);
      propagateObjectFitStyles(this.element, this.img_);
      if (!serverRendered) {
        this.element.appendChild(this.img_);
      }
      return this.img_;
    };
    _proto.maybeGenerateSizes_ = function maybeGenerateSizes_(sync) {
      var _this2 = this;
      if (false) {
        return;
      }
      if (!this.img_) {
        return;
      }
      if (this.element.hasAttribute("i-amphtml-ssr")) {
        return;
      }
      var sizes = this.element.hasAttribute("sizes") || this.img_.hasAttribute("sizes");
      if (sizes) {
        return;
      }
      var srcset = this.element.getAttribute("srcset");
      if (!srcset || /[0-9]+x(?:,|$)/.test(srcset)) {
        return;
      }
      var _this$element$getLayo = this.element.getLayoutSize(), width = _this$element$getLayo.width;
      if (!this.shouldSetSizes_(width)) {
        return;
      }
      var viewportWidth = this.getViewport().getWidth();
      var entry = "(max-width: " + viewportWidth + "px) " + width + "px, ";
      var defaultSize = width + "px";
      if (this.getLayout() !== Layout_Enum.FIXED) {
        var ratio = Math.round(width * 100 / viewportWidth);
        defaultSize = Math.max(ratio, 100) + "vw";
      }
      var generatedSizes = entry + defaultSize;
      if (sync) {
        this.img_.setAttribute("sizes", generatedSizes);
      } else {
        this.mutateElement(function() {
          _this2.img_.setAttribute("sizes", generatedSizes);
        });
      }
      this.sizesWidth_ = width;
    };
    _proto.shouldSetSizes_ = function shouldSetSizes_(newWidth) {
      if (!this.img_.hasAttribute("sizes")) {
        return true;
      }
      return newWidth > this.sizesWidth_;
    };
    _proto.reconstructWhenReparented = function reconstructWhenReparented() {
      return false;
    };
    _proto.mountCallback = function mountCallback() {
      var _this3 = this;
      var initialized = !!this.img_;
      var img = this.initialize_();
      if (!initialized) {
        listen(img, "load", function() {
          _this3.setReadyState(ReadyState_Enum.COMPLETE);
          _this3.firstLayoutCompleted();
          _this3.hideFallbackImg_();
        });
        listen(img, "error", function(reason) {
          _this3.setReadyState(ReadyState_Enum.ERROR, reason);
          _this3.onImgLoadingError_();
        });
      }
      if (img.complete) {
        this.setReadyState(ReadyState_Enum.COMPLETE);
        this.firstLayoutCompleted();
        this.hideFallbackImg_();
      } else {
        this.setReadyState(ReadyState_Enum.LOADING);
      }
    };
    _proto.unmountCallback = function unmountCallback() {
      var img = this.img_;
      if (img && !img.complete) {
        img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=";
        removeElement(img);
        this.img_ = null;
      }
    };
    _proto.ensureLoaded = function ensureLoaded() {
      var img = dev().assertElement(this.img_);
      img.loading = "eager";
    };
    _proto.layoutCallback = function layoutCallback() {
      var _this4 = this;
      this.initialize_();
      var img = dev().assertElement(this.img_);
      this.unlistenLoad_ = listen(img, "load", function() {
        return _this4.hideFallbackImg_();
      });
      this.unlistenError_ = listen(img, "error", function() {
        return _this4.onImgLoadingError_();
      });
      var _this$element$getLayo2 = this.element.getLayoutSize(), width = _this$element$getLayo2.width;
      if (width <= 0) {
        return resolvedPromise();
      }
      return this.loadPromise(img);
    };
    _proto.unlayoutCallback = function unlayoutCallback() {
      if (AmpImg2.R1()) {
        return;
      }
      if (this.unlistenError_) {
        this.unlistenError_();
        this.unlistenError_ = null;
      }
      if (this.unlistenLoad_) {
        this.unlistenLoad_();
        this.unlistenLoad_ = null;
      }
      var img = this.img_;
      if (img && !img.complete) {
        img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=";
        removeElement(img);
        this.img_ = null;
      }
      return true;
    };
    _proto.firstLayoutCompleted = function firstLayoutCompleted() {
      var placeholder = this.getPlaceholder();
      if (placeholder && placeholder.classList.contains("i-amphtml-blurry-placeholder")) {
        setImportantStyles(placeholder, {
          "opacity": 0
        });
      } else {
        this.togglePlaceholder(false);
      }
    };
    _proto.hideFallbackImg_ = function hideFallbackImg_() {
      if (!this.allowImgLoadFallback_ && this.img_.classList.contains("i-amphtml-ghost")) {
        this.img_.classList.remove("i-amphtml-ghost");
        this.toggleFallback(false);
      }
    };
    _proto.onImgLoadingError_ = function onImgLoadingError_() {
      if (this.allowImgLoadFallback_) {
        this.img_.classList.add("i-amphtml-ghost");
        this.toggleFallback(true);
        this.togglePlaceholder(false);
        this.allowImgLoadFallback_ = false;
      }
    };
    _proto.propagateDataset = function propagateDataset(targetElement) {
      for (var key in targetElement.dataset) {
        if (!(key in this.element.dataset)) {
          delete targetElement.dataset[key];
        }
      }
      for (var _key in this.element.dataset) {
        if (_key.startsWith("ampBind") && _key !== "ampBind") {
          continue;
        }
        if (targetElement.dataset[_key] !== this.element.dataset[_key]) {
          targetElement.dataset[_key] = this.element.dataset[_key];
        }
      }
    };
    return AmpImg2;
  }(BaseElement);
  function installImg(win) {
    registerElement(win, TAG5, AmpImg);
  }

  // src/builtins/amp-layout/build-dom.js
  function buildDom(element) {
    if (isServerRendered(element)) {
      return;
    }
    var layout = getEffectiveLayout(element);
    if (layout == Layout_Enum.CONTAINER) {
      return;
    }
    var doc = element.ownerDocument;
    var container = doc.createElement("div");
    applyFillContent(container);
    realChildNodes(element).forEach(function(child) {
      container.appendChild(child);
    });
    element.appendChild(container);
  }

  // src/builtins/amp-layout/amp-layout.js
  function _inherits7(subClass2, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass2.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass2, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf7(subClass2, superClass);
  }
  function _setPrototypeOf7(o, p) {
    _setPrototypeOf7 = Object.setPrototypeOf || function _setPrototypeOf11(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf7(o, p);
  }
  function _createSuper7(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct7();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf7(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf7(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn7(this, result);
    };
  }
  function _possibleConstructorReturn7(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized7(self2);
  }
  function _assertThisInitialized7(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct7() {
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
  function _getPrototypeOf7(o) {
    _getPrototypeOf7 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf11(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf7(o);
  }
  var AmpLayout = /* @__PURE__ */ function(_BaseElement) {
    _inherits7(AmpLayout2, _BaseElement);
    var _super = _createSuper7(AmpLayout2);
    function AmpLayout2() {
      return _super.apply(this, arguments);
    }
    AmpLayout2.prerenderAllowed = function prerenderAllowed() {
      return true;
    };
    var _proto = AmpLayout2.prototype;
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return layout == Layout_Enum.CONTAINER || isLayoutSizeDefined(layout);
    };
    _proto.buildCallback = function buildCallback() {
      buildDom(this.element);
    };
    return AmpLayout2;
  }(BaseElement);
  function installLayout(win) {
    registerElement(win, "amp-layout", AmpLayout);
  }

  // src/pixel.js
  var TAG6 = "pixel";
  function createPixel(win, src, referrerPolicy) {
    if (referrerPolicy && referrerPolicy !== "no-referrer") {
      user().error(TAG6, "Unsupported referrerPolicy: %s", referrerPolicy);
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

  // src/builtins/amp-pixel/amp-pixel.js
  function _inherits8(subClass2, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass2.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass2, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf8(subClass2, superClass);
  }
  function _setPrototypeOf8(o, p) {
    _setPrototypeOf8 = Object.setPrototypeOf || function _setPrototypeOf11(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf8(o, p);
  }
  function _createSuper8(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct8();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf8(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf8(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn8(this, result);
    };
  }
  function _possibleConstructorReturn8(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized8(self2);
  }
  function _assertThisInitialized8(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct8() {
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
  function _getPrototypeOf8(o) {
    _getPrototypeOf8 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf11(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf8(o);
  }
  var TAG7 = "amp-pixel";
  var AmpPixel = /* @__PURE__ */ function(_BaseElement) {
    _inherits8(AmpPixel2, _BaseElement);
    var _super = _createSuper8(AmpPixel2);
    function AmpPixel2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.triggerPromise_ = null;
      return _this;
    }
    var _proto = AmpPixel2.prototype;
    _proto.isLayoutSupported = function isLayoutSupported(unusedLayout) {
      return true;
    };
    _proto.buildCallback = function buildCallback() {
      this.element.setAttribute("aria-hidden", "true");
      this.referrerPolicy_ = this.element.getAttribute("referrerpolicy");
      if (this.referrerPolicy_) {
        userAssert2(this.referrerPolicy_ == "no-referrer", TAG7 + ': invalid "referrerpolicy" value "' + this.referrerPolicy_ + '". Only "no-referrer" is supported');
      }
      if (this.element.hasAttribute("i-amphtml-ssr") && this.element.querySelector("img")) {
        dev().info(TAG7, "inabox img already present");
        return;
      }
      this.getAmpDoc().whenFirstVisible().then(this.trigger_.bind(this));
    };
    _proto.trigger_ = function trigger_() {
      var _this2 = this;
      if (this.triggerPromise_) {
        dev().error(TAG7, "duplicate pixel");
        return this.triggerPromise_;
      }
      this.triggerPromise_ = Services.timerFor(this.win).promise(1).then(function() {
        var src = _this2.element.getAttribute("src");
        if (!src) {
          return;
        }
        return Services.urlReplacementsForDoc(_this2.element).expandUrlAsync(_this2.assertSource_(src)).then(function(src2) {
          if (!_this2.win) {
            return;
          }
          var pixel = createPixel(_this2.win, src2, _this2.referrerPolicy_);
          dev().info(TAG7, "pixel triggered: ", src2);
          return pixel;
        });
      });
    };
    _proto.assertSource_ = function assertSource_(src) {
      userAssert2(/^(https\:\/\/|\/\/)/i.test(src), 'The <amp-pixel> src attribute must start with "https://" or "//". Invalid value: ' + src);
      return src;
    };
    return AmpPixel2;
  }(BaseElement);
  function installPixel(win) {
    registerElement(win, TAG7, AmpPixel);
  }

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

  // src/inabox/inabox-resources.js
  var TAG8 = "inabox-resources";
  var FOUR_FRAME_DELAY = 70;
  var InaboxResources = /* @__PURE__ */ function() {
    function InaboxResources2(ampdoc2) {
      var _this = this;
      this.ampdoc_ = ampdoc2;
      this.win = ampdoc2.win;
      this.resources_ = [];
      this.resourceIdCounter_ = 0;
      this.pass_ = new Pass(this.win, this.doPass_.bind(this), FOUR_FRAME_DELAY);
      this.passObservable_ = new Observable();
      this.firstPassDone_ = new Deferred();
      this.inViewportObserver_ = null;
      var input = Services.inputFor(this.win);
      input.setupInputModeClasses(ampdoc2);
      if (getMode(this.win).runtime != "inabox") {
        ampdoc2.onVisibilityChanged(function() {
          switch (ampdoc2.getVisibilityState()) {
            case VisibilityState_Enum.PAUSED:
              _this.resources_.forEach(function(r) {
                return r.pause();
              });
              break;
            case VisibilityState_Enum.VISIBLE:
              _this.resources_.forEach(function(r) {
                return r.resume();
              });
              _this.schedulePass();
              break;
          }
        });
      }
      this.pendingBuildResources_ = [];
      this.documentReady_ = false;
      this.ampdoc_.whenReady().then(function() {
        _this.documentReady_ = true;
        _this.buildReadyResources_();
        _this.schedulePass(1);
      });
    }
    var _proto = InaboxResources2.prototype;
    _proto.dispose = function dispose() {
      this.resources_.forEach(function(r) {
        return r.unload();
      });
      this.resources_.length = 0;
      if (this.inViewportObserver_) {
        this.inViewportObserver_.disconnect();
        this.inViewportObserver_ = null;
      }
    };
    _proto.get = function get() {
      return this.resources_.slice(0);
    };
    _proto.getAmpdoc = function getAmpdoc2() {
      return this.ampdoc_;
    };
    _proto.getResourceForElement = function getResourceForElement(element) {
      return Resource.forElement(element);
    };
    _proto.getResourceForElementOptional = function getResourceForElementOptional(element) {
      return Resource.forElementOptional(element);
    };
    _proto.getScrollDirection = function getScrollDirection() {
      return 1;
    };
    _proto.add = function add(element) {
      var resource = new Resource(++this.resourceIdCounter_, element, this);
      this.resources_.push(resource);
      dev().fine(TAG8, "resource added:", resource.debugid);
    };
    _proto.upgraded = function upgraded(element) {
      var resource = Resource.forElement(element);
      this.pendingBuildResources_.push(resource);
      this.buildReadyResources_();
    };
    _proto.remove = function remove2(element) {
      var resource = Resource.forElementOptional(element);
      if (!resource) {
        return;
      }
      if (this.inViewportObserver_) {
        this.inViewportObserver_.unobserve(element);
      }
      var index = this.resources_.indexOf(resource);
      if (index !== -1) {
        this.resources_.splice(index, 1);
      }
      dev().fine(TAG8, "element removed:", resource.debugid);
    };
    _proto.scheduleLayoutOrPreload = function scheduleLayoutOrPreload(unusedResource) {
      this.pass_.schedule();
    };
    _proto.schedulePass = function schedulePass(opt_delay) {
      return this.pass_.schedule(opt_delay);
    };
    _proto.updateOrEnqueueMutateTask = function updateOrEnqueueMutateTask(unusedResource, unusedNewRequest) {
    };
    _proto.schedulePassVsync = function schedulePassVsync() {
    };
    _proto.onNextPass = function onNextPass(callback) {
      this.passObservable_.add(callback);
    };
    _proto.ampInitComplete = function ampInitComplete() {
    };
    _proto.updateLayoutPriority = function updateLayoutPriority(unusedElement, unusedNewLayoutPriority) {
    };
    _proto.setRelayoutTop = function setRelayoutTop(unusedRelayoutTop) {
    };
    _proto.maybeHeightChanged = function maybeHeightChanged() {
    };
    _proto.whenFirstPass = function whenFirstPass() {
      return this.firstPassDone_.promise;
    };
    _proto.doPass_ = function doPass_() {
      var now = Date.now();
      dev().fine(TAG8, "doPass");
      this.resources_.forEach(function(resource) {
        if (!resource.isLayoutPending() || resource.element.R1()) {
          return;
        }
        resource.measure();
      });
      this.resources_.forEach(function(resource) {
        if (!resource.element.R1() && resource.getState() === ResourceState_Enum.READY_FOR_LAYOUT && resource.isDisplayed()) {
          resource.layoutScheduled(now);
          resource.startLayout();
        }
      });
      this.ampdoc_.signals().signal(READY_SCAN_SIGNAL);
      this.passObservable_.fire();
      this.firstPassDone_.resolve();
    };
    _proto.buildReadyResources_ = function buildReadyResources_() {
      var _this2 = this;
      for (var i = this.pendingBuildResources_.length - 1; i >= 0; i--) {
        var resource = this.pendingBuildResources_[i];
        if (this.documentReady_ || hasNextNodeInDocumentOrder(resource.element, this.ampdoc_.getRootNode())) {
          this.pendingBuildResources_.splice(i, 1);
          resource.build().then(function() {
            return _this2.schedulePass();
          });
          dev().fine(TAG8, "resource upgraded:", resource.debugid);
        }
      }
    };
    return InaboxResources2;
  }();
  function installInaboxResourcesServiceForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, "resources", InaboxResources);
  }

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
    var html2 = doc.documentElement;
    var isFormatType = formats.some(function(format) {
      return html2.hasAttribute(format);
    });
    return isFormatType;
  }
  function isAmp4Email(doc) {
    return isAmpFormatType(["\u26A14email", "amp4email"], doc);
  }

  // src/service/action-impl.js
  var TAG_ = "Action";
  var ACTION_MAP_ = "__AMP_ACTION_MAP__" + Math.random();
  var ACTION_QUEUE_ = "__AMP_ACTION_QUEUE__";
  var ACTION_HANDLER_ = "__AMP_ACTION_HANDLER__";
  var DEFAULT_DEBOUNCE_WAIT = 300;
  var DEFAULT_THROTTLE_INTERVAL = 100;
  var NON_AMP_ELEMENTS_ACTIONS_ = {
    "form": ["submit", "clear"]
  };
  var DEFAULT_EMAIL_ALLOWLIST = [{
    tagOrTarget: "AMP",
    method: "setState"
  }, {
    tagOrTarget: "*",
    method: "focus"
  }, {
    tagOrTarget: "*",
    method: "hide"
  }, {
    tagOrTarget: "*",
    method: "show"
  }, {
    tagOrTarget: "*",
    method: "toggleClass"
  }, {
    tagOrTarget: "*",
    method: "toggleChecked"
  }, {
    tagOrTarget: "*",
    method: "toggleVisibility"
  }];
  var TAPPABLE_ARIA_ROLES = {
    "button": true,
    "checkbox": true,
    "link": true,
    "listbox": true,
    "menuitem": true,
    "menuitemcheckbox": true,
    "menuitemradio": true,
    "option": true,
    "radio": true,
    "scrollbar": true,
    "slider": true,
    "spinbutton": true,
    "switch": true,
    "tab": true,
    "treeitem": true
  };
  var ActionInvocation = /* @__PURE__ */ function() {
    function ActionInvocation2(node, method, args, source, caller, event, trust, actionEventType, tagOrTarget, sequenceId) {
      if (actionEventType === void 0) {
        actionEventType = "?";
      }
      if (tagOrTarget === void 0) {
        tagOrTarget = null;
      }
      if (sequenceId === void 0) {
        sequenceId = Math.random();
      }
      this.node = node;
      this.method = method;
      this.args = args;
      this.source = source;
      this.caller = caller;
      this.event = event;
      this.trust = trust;
      this.actionEventType = actionEventType;
      this.tagOrTarget = tagOrTarget || node.tagName;
      this.sequenceId = sequenceId;
    }
    var _proto = ActionInvocation2.prototype;
    _proto.satisfiesTrust = function satisfiesTrust(minimumTrust) {
      if (!isFiniteNumber(this.trust)) {
        dev().error(TAG_, "Invalid trust for '" + this.method + "': " + this.trust);
        return false;
      }
      if (this.trust < minimumTrust) {
        var t = actionTrustToString(this.trust);
        user().error(TAG_, '"' + this.actionEventType + '" event with "' + t + '" trust is not allowed to ' + ('invoke "' + this.tagOrTarget.toLowerCase() + "." + this.method + '".'));
        return false;
      }
      return true;
    };
    return ActionInvocation2;
  }();
  var ActionService = /* @__PURE__ */ function() {
    function ActionService2(ampdoc2, opt_root) {
      this.ampdoc = ampdoc2;
      this.root_ = opt_root || ampdoc2.getRootNode();
      this.isEmail_ = this.ampdoc.isSingleDoc() && isAmp4Email(this.root_);
      this.allowlist_ = this.isEmail_ ? DEFAULT_EMAIL_ALLOWLIST : null;
      this.globalTargets_ = map();
      this.globalMethodHandlers_ = map();
      this.addEvent("tap");
      this.addEvent("submit");
      this.addEvent("change");
      this.addEvent("input-debounced");
      this.addEvent("input-throttled");
      this.addEvent("valid");
      this.addEvent("invalid");
    }
    var _proto2 = ActionService2.prototype;
    _proto2.addEvent = function addEvent(name) {
      var _this = this;
      if (name == "tap") {
        this.root_.addEventListener("click", function(event) {
          if (!event.defaultPrevented) {
            var element = dev().assertElement(event.target);
            _this.trigger(element, name, event, ActionTrust_Enum.HIGH);
          }
        });
        this.root_.addEventListener("keydown", function(event) {
          var key = event.key, target = event.target;
          var element = dev().assertElement(target);
          if (key == Keys_Enum.ENTER || key == Keys_Enum.SPACE) {
            var role = element.getAttribute("role");
            var isTapEventRole = role && hasOwn(TAPPABLE_ARIA_ROLES, role.toLowerCase());
            if (!event.defaultPrevented && isTapEventRole) {
              var hasAction = _this.trigger(element, name, event, ActionTrust_Enum.HIGH);
              if (hasAction) {
                event.preventDefault();
              }
            }
          }
        });
      } else if (name == "submit") {
        this.root_.addEventListener(name, function(event) {
          var element = dev().assertElement(event.target);
          _this.trigger(element, name, event, ActionTrust_Enum.HIGH);
        });
      } else if (name == "change") {
        this.root_.addEventListener(name, function(event) {
          var element = dev().assertElement(event.target);
          _this.addTargetPropertiesAsDetail_(event);
          _this.trigger(element, name, event, ActionTrust_Enum.HIGH);
        });
      } else if (name == "input-debounced") {
        var debouncedInput = debounce(this.ampdoc.win, function(event) {
          var target = dev().assertElement(event.target);
          _this.trigger(target, name, event, ActionTrust_Enum.HIGH);
        }, DEFAULT_DEBOUNCE_WAIT);
        this.root_.addEventListener("input", function(event) {
          var deferredEvent = new DeferredEvent(event);
          _this.addTargetPropertiesAsDetail_(deferredEvent);
          debouncedInput(deferredEvent);
        });
      } else if (name == "input-throttled") {
        var throttledInput = throttle(this.ampdoc.win, function(event) {
          var target = dev().assertElement(event.target);
          _this.trigger(target, name, event, ActionTrust_Enum.HIGH);
        }, DEFAULT_THROTTLE_INTERVAL);
        this.root_.addEventListener("input", function(event) {
          var deferredEvent = new DeferredEvent(event);
          _this.addTargetPropertiesAsDetail_(deferredEvent);
          throttledInput(deferredEvent);
        });
      } else if (name == "valid" || name == "invalid") {
        this.root_.addEventListener(name, function(event) {
          var element = dev().assertElement(event.target);
          _this.trigger(element, name, event, ActionTrust_Enum.HIGH);
        });
      }
    };
    _proto2.addGlobalTarget = function addGlobalTarget(name, handler) {
      this.globalTargets_[name] = handler;
    };
    _proto2.addGlobalMethodHandler = function addGlobalMethodHandler(name, handler, minTrust) {
      if (minTrust === void 0) {
        minTrust = ActionTrust_Enum.DEFAULT;
      }
      this.globalMethodHandlers_[name] = {
        handler: handler,
        minTrust: minTrust
      };
    };
    _proto2.trigger = function trigger(target, eventType, event, trust, opt_args) {
      return this.action_(target, eventType, event, trust, opt_args);
    };
    _proto2.execute = function execute(target, method, args, source, caller, event, trust) {
      var invocation = new ActionInvocation(target, method, args, source, caller, event, trust);
      this.invoke_(invocation);
    };
    _proto2.installActionHandler = function installActionHandler(target, handler) {
      var targetId = target.getAttribute("id") || "";
      devAssert2(isAmpTagName(targetId) || target.tagName.toLowerCase() in NON_AMP_ELEMENTS_ACTIONS_, "AMP or special element expected: %s", target.tagName + "#" + targetId);
      if (target[ACTION_HANDLER_]) {
        dev().error(TAG_, "Action handler already installed for " + target);
        return;
      }
      target[ACTION_HANDLER_] = handler;
      var queuedInvocations = target[ACTION_QUEUE_];
      if (isArray(queuedInvocations)) {
        Services.timerFor(getWin(target)).delay(function() {
          queuedInvocations.forEach(function(invocation) {
            try {
              handler(invocation);
            } catch (e) {
              dev().error(TAG_, "Action execution failed:", invocation, e);
            }
          });
          target[ACTION_QUEUE_].length = 0;
        }, 1);
      }
    };
    _proto2.hasAction = function hasAction(element, actionEventType, opt_stopAt) {
      return !!this.findAction_(element, actionEventType, opt_stopAt);
    };
    _proto2.hasResolvableAction = function hasResolvableAction(element, actionEventType, opt_stopAt) {
      var _this2 = this;
      var action = this.findAction_(element, actionEventType, opt_stopAt);
      if (!action) {
        return false;
      }
      return action.actionInfos.some(function(action2) {
        var target = action2.target;
        return !!_this2.getActionNode_(target);
      });
    };
    _proto2.hasResolvableActionForTarget = function hasResolvableActionForTarget(element, actionEventType, targetElement, opt_stopAt) {
      var _this3 = this;
      var action = this.findAction_(element, actionEventType, opt_stopAt);
      if (!action) {
        return false;
      }
      return action.actionInfos.some(function(actionInfo) {
        var target = actionInfo.target;
        return _this3.getActionNode_(target) == targetElement;
      });
    };
    _proto2.getActionNode_ = function getActionNode_(target) {
      return this.globalTargets_[target] ? this.root_ : this.root_.getElementById(target);
    };
    _proto2.setAllowlist = function setAllowlist(allowlist) {
      devAssert2(allowlist.every(function(v) {
        return v.tagOrTarget && v.method;
      }), "Action allowlist entries should be of shape { tagOrTarget: string, method: string }");
      this.allowlist_ = allowlist;
    };
    _proto2.addToAllowlist = function addToAllowlist(tagOrTarget, methods, opt_forFormat) {
      var _this4 = this;
      if (opt_forFormat && opt_forFormat.includes("email") !== this.isEmail_) {
        return;
      }
      if (!this.allowlist_) {
        this.allowlist_ = [];
      }
      if (!isArray(methods)) {
        methods = [methods];
      }
      methods.forEach(function(method) {
        if (_this4.allowlist_.some(function(v) {
          return v.tagOrTarget == tagOrTarget && v.method == method;
        })) {
          return;
        }
        _this4.allowlist_.push({
          tagOrTarget: tagOrTarget,
          method: method
        });
      });
    };
    _proto2.action_ = function action_(source, actionEventType, event, trust, opt_args) {
      var _this5 = this;
      var action = this.findAction_(source, actionEventType);
      if (!action) {
        return false;
      }
      var sequenceId = Math.random();
      var currentPromise = null;
      action.actionInfos.forEach(function(actionInfo) {
        var args = actionInfo.args, method = actionInfo.method, str = actionInfo.str, target = actionInfo.target;
        var dereferencedArgs = dereferenceArgsVariables(args, event, opt_args);
        var invokeAction = function invokeAction2() {
          var node = _this5.getActionNode_(target);
          if (!node) {
            _this5.error_('Target "' + target + '" not found for action [' + str + "].");
            return;
          }
          var invocation = new ActionInvocation(node, method, dereferencedArgs, source, action.node, event, trust, actionEventType, node.tagName || target, sequenceId);
          return _this5.invoke_(invocation);
        };
        currentPromise = currentPromise ? currentPromise.then(invokeAction) : invokeAction();
      });
      return action.actionInfos.length >= 1;
    };
    _proto2.error_ = function error_(message, opt_element) {
      if (opt_element) {
        var e = user().createError("[" + TAG_ + "] " + message);
        reportError(e, opt_element);
        throw e;
      } else {
        user().error(TAG_, message);
      }
    };
    _proto2.invoke_ = function invoke_(invocation) {
      var method = invocation.method, tagOrTarget = invocation.tagOrTarget;
      if (this.allowlist_) {
        if (!isActionAllowlisted(invocation, this.allowlist_)) {
          this.error_('"' + tagOrTarget + "." + method + '" is not allowlisted ' + JSON.stringify(this.allowlist_) + ".");
          return null;
        }
      }
      var globalTarget = this.globalTargets_[tagOrTarget];
      if (globalTarget) {
        return globalTarget(invocation);
      }
      var node = dev().assertElement(invocation.node);
      var globalMethod = this.globalMethodHandlers_[method];
      if (globalMethod && invocation.satisfiesTrust(globalMethod.minTrust)) {
        return globalMethod.handler(invocation);
      }
      var lowerTagName = node.tagName.toLowerCase();
      if (isAmpTagName(lowerTagName)) {
        if (node.enqueAction) {
          node.enqueAction(invocation);
        } else {
          this.error_('Unrecognized AMP element "' + lowerTagName + '".', node);
        }
        return null;
      }
      var nonAmpActions = NON_AMP_ELEMENTS_ACTIONS_[lowerTagName];
      var targetId = node.getAttribute("id") || "";
      if (isAmpTagName(targetId) || nonAmpActions && nonAmpActions.indexOf(method) > -1) {
        var handler = node[ACTION_HANDLER_];
        if (handler) {
          handler(invocation);
        } else {
          node[ACTION_QUEUE_] = node[ACTION_QUEUE_] || [];
          node[ACTION_QUEUE_].push(invocation);
        }
        return null;
      }
      this.error_("Target (" + tagOrTarget + ") doesn't support \"" + method + '" action.', invocation.caller);
      return null;
    };
    _proto2.findAction_ = function findAction_(target, actionEventType, opt_stopAt) {
      var n = target;
      while (n) {
        if (opt_stopAt && n == opt_stopAt) {
          return null;
        }
        var actionInfos = this.matchActionInfos_(n, actionEventType);
        if (actionInfos && isEnabled(n)) {
          return {
            node: n,
            actionInfos: devAssert2(actionInfos)
          };
        }
        n = n.parentElement;
      }
      return null;
    };
    _proto2.matchActionInfos_ = function matchActionInfos_(node, actionEventType) {
      var actionMap = this.getActionMap_(node, actionEventType);
      if (!actionMap) {
        return null;
      }
      return actionMap[actionEventType] || null;
    };
    _proto2.getActionMap_ = function getActionMap_(node, actionEventType) {
      var actionMap = node[ACTION_MAP_];
      if (actionMap === void 0) {
        actionMap = null;
        if (node.hasAttribute("on")) {
          var action = node.getAttribute("on");
          actionMap = parseActionMap(action, node);
          node[ACTION_MAP_] = actionMap;
        } else if (node.hasAttribute("execute")) {
          var _action = node.getAttribute("execute");
          actionMap = parseActionMap(actionEventType + ":" + _action, node);
          node[ACTION_MAP_] = actionMap;
        }
      }
      return actionMap;
    };
    _proto2.setActions = function setActions(node, actionsStr) {
      node.setAttribute("on", actionsStr);
      delete node[ACTION_MAP_];
    };
    _proto2.addTargetPropertiesAsDetail_ = function addTargetPropertiesAsDetail_(event) {
      var detail = map();
      var target = event.target;
      if (target.value !== void 0) {
        detail["value"] = target.value;
      }
      if (target.tagName == "INPUT") {
        detail["valueAsNumber"] = Number(target.value);
      }
      if (target.checked !== void 0) {
        detail["checked"] = target.checked;
      }
      if (target.min !== void 0 || target.max !== void 0) {
        detail["min"] = target.min;
        detail["max"] = target.max;
      }
      if (target.files) {
        detail["files"] = toArray(target.files).map(function(file) {
          return {
            "name": file.name,
            "size": file.size,
            "type": file.type
          };
        });
      }
      if (Object.keys(detail).length > 0) {
        try {
          event.detail = detail;
        } catch (_unused) {
        }
      }
    };
    return ActionService2;
  }();
  function isAmpTagName(lowercaseTagName) {
    return lowercaseTagName.substring(0, 4) === "amp-";
  }
  function isActionAllowlisted(invocation, allowlist) {
    var method = invocation.method;
    var node = invocation.node, tagOrTarget = invocation.tagOrTarget;
    if (method === DEFAULT_ACTION && typeof node.getDefaultActionAlias == "function") {
      method = node.getDefaultActionAlias();
    }
    var lcMethod = method.toLowerCase();
    var lcTagOrTarget = tagOrTarget.toLowerCase();
    return allowlist.some(function(w) {
      if (w.tagOrTarget.toLowerCase() === lcTagOrTarget || w.tagOrTarget === "*") {
        if (w.method.toLowerCase() === lcMethod) {
          return true;
        }
      }
      return false;
    });
  }
  var DeferredEvent = function DeferredEvent2(event) {
    this.detail = null;
    cloneWithoutFunctions(event, this);
  };
  function cloneWithoutFunctions(original, opt_dest) {
    var clone = opt_dest || map();
    for (var prop in original) {
      var value = original[prop];
      if (typeof value === "function") {
        clone[prop] = notImplemented;
      } else {
        clone[prop] = original[prop];
      }
    }
    return clone;
  }
  function notImplemented() {
    devAssert2(null, "Deferred events cannot access native event functions.");
  }
  function parseActionMap(action, context) {
    var assertAction = assertActionForParser.bind(null, action, context);
    var assertToken = assertTokenForParser.bind(null, action, context);
    var actionMap = null;
    var toks = new ParserTokenizer(action);
    var tok;
    var peek;
    do {
      tok = toks.next();
      if (tok.type == TokenType_Enum.EOF || tok.type == TokenType_Enum.SEPARATOR && tok.value == ";") {
      } else if (tok.type == TokenType_Enum.LITERAL || tok.type == TokenType_Enum.ID) {
        var event = tok.value;
        assertToken(toks.next(), [TokenType_Enum.SEPARATOR], ":");
        var actions = [];
        do {
          var target = assertToken(toks.next(), [TokenType_Enum.LITERAL, TokenType_Enum.ID]).value;
          var method = DEFAULT_ACTION;
          var args = null;
          peek = toks.peek();
          if (peek.type == TokenType_Enum.SEPARATOR && peek.value == ".") {
            toks.next();
            method = assertToken(toks.next(), [TokenType_Enum.LITERAL, TokenType_Enum.ID]).value || method;
            peek = toks.peek();
            if (peek.type == TokenType_Enum.SEPARATOR && peek.value == "(") {
              toks.next();
              args = tokenizeMethodArguments(toks, assertToken, assertAction);
            }
          }
          actions.push({
            event: event,
            target: target,
            method: method,
            args: args && getMode().test && Object.freeze ? Object.freeze(args) : args,
            str: action
          });
          peek = toks.peek();
        } while (peek.type == TokenType_Enum.SEPARATOR && peek.value == "," && toks.next());
        if (!actionMap) {
          actionMap = map();
        }
        actionMap[event] = actions;
      } else {
        assertAction(false, "; unexpected token [" + (tok.value || "") + "]");
      }
    } while (tok.type != TokenType_Enum.EOF);
    return actionMap;
  }
  function tokenizeMethodArguments(toks, assertToken, assertAction) {
    var peek = toks.peek();
    var tok;
    var args = null;
    if (peek.type == TokenType_Enum.OBJECT) {
      args = map();
      var _toks$next = toks.next(), value = _toks$next.value;
      args[RAW_OBJECT_ARGS_KEY] = value;
      assertToken(toks.next(), [TokenType_Enum.SEPARATOR], ")");
    } else {
      do {
        tok = toks.next();
        var _tok = tok, type = _tok.type, _value = _tok.value;
        if (type == TokenType_Enum.SEPARATOR && (_value == "," || _value == ")")) {
        } else if (type == TokenType_Enum.LITERAL || type == TokenType_Enum.ID) {
          assertToken(toks.next(), [TokenType_Enum.SEPARATOR], "=");
          tok = assertToken(toks.next(true), [TokenType_Enum.LITERAL, TokenType_Enum.ID]);
          var argValueTokens = [tok];
          if (tok.type == TokenType_Enum.ID) {
            for (peek = toks.peek(); peek.type == TokenType_Enum.SEPARATOR && peek.value == "."; peek = toks.peek()) {
              toks.next();
              tok = assertToken(toks.next(false), [TokenType_Enum.ID]);
              argValueTokens.push(tok);
            }
          }
          var argValue = argValueForTokens(argValueTokens);
          if (!args) {
            args = map();
          }
          args[_value] = argValue;
          peek = toks.peek();
          assertAction(peek.type == TokenType_Enum.SEPARATOR && (peek.value == "," || peek.value == ")"), "Expected either [,] or [)]");
        } else {
          assertAction(false, "; unexpected token [" + (tok.value || "") + "]");
        }
      } while (!(tok.type == TokenType_Enum.SEPARATOR && tok.value == ")"));
    }
    return args;
  }
  function argValueForTokens(tokens) {
    if (tokens.length == 0) {
      return null;
    } else if (tokens.length == 1) {
      return tokens[0].value;
    } else {
      var values2 = tokens.map(function(token) {
        return token.value;
      });
      var expression = values2.join(".");
      return {
        expression: expression
      };
    }
  }
  function dereferenceArgsVariables(args, event, opt_args) {
    if (!args) {
      return args;
    }
    var data = opt_args || dict({});
    if (event) {
      var detail = getDetail(event);
      if (detail) {
        data["event"] = detail;
      }
    }
    var applied = map();
    Object.keys(args).forEach(function(key) {
      var value = args[key];
      if (typeof value == "object" && value.expression) {
        var expr = value.expression;
        var exprValue = getValueForExpr(data, expr);
        value = exprValue === void 0 ? null : exprValue;
      }
      if (data[value]) {
        applied[key] = data[value];
      } else {
        applied[key] = value;
      }
    });
    return applied;
  }
  function assertActionForParser(s, context, condition, opt_message) {
    return userAssert2(condition, "Invalid action definition in %s: [%s] %s", context, s, opt_message || "");
  }
  function assertTokenForParser(s, context, tok, types, opt_value) {
    if (opt_value !== void 0) {
      assertActionForParser(s, context, types.includes(tok.type) && tok.value == opt_value, "; expected [" + opt_value + "]");
    } else {
      assertActionForParser(s, context, types.includes(tok.type));
    }
    return tok;
  }
  var TokenType_Enum = {
    INVALID: 0,
    EOF: 1,
    SEPARATOR: 2,
    LITERAL: 3,
    ID: 4,
    OBJECT: 5
  };
  var WHITESPACE_SET = " 	\n\r\f\v\xA0\u2028\u2029";
  var SEPARATOR_SET = ";:.()=,|!";
  var STRING_SET = "\"'";
  var OBJECT_SET = "{}";
  var SPECIAL_SET = WHITESPACE_SET + SEPARATOR_SET + STRING_SET + OBJECT_SET;
  var ParserTokenizer = /* @__PURE__ */ function() {
    function ParserTokenizer2(str) {
      this.str_ = str;
      this.index_ = -1;
    }
    var _proto3 = ParserTokenizer2.prototype;
    _proto3.next = function next(opt_convertValues) {
      var tok = this.next_(opt_convertValues || false);
      this.index_ = tok.index;
      return tok;
    };
    _proto3.peek = function peek(opt_convertValues) {
      return this.next_(opt_convertValues || false);
    };
    _proto3.next_ = function next_(convertValues) {
      var newIndex = this.index_ + 1;
      if (newIndex >= this.str_.length) {
        return {
          type: TokenType_Enum.EOF,
          index: this.index_
        };
      }
      var c = this.str_.charAt(newIndex);
      if (WHITESPACE_SET.indexOf(c) != -1) {
        newIndex++;
        for (; newIndex < this.str_.length; newIndex++) {
          if (WHITESPACE_SET.indexOf(this.str_.charAt(newIndex)) == -1) {
            break;
          }
        }
        if (newIndex >= this.str_.length) {
          return {
            type: TokenType_Enum.EOF,
            index: newIndex
          };
        }
        c = this.str_.charAt(newIndex);
      }
      if (convertValues && (isNum(c) || c == "." && newIndex + 1 < this.str_.length && isNum(this.str_[newIndex + 1]))) {
        var hasFraction = c == ".";
        var _end = newIndex + 1;
        for (; _end < this.str_.length; _end++) {
          var c2 = this.str_.charAt(_end);
          if (c2 == ".") {
            hasFraction = true;
            continue;
          }
          if (!isNum(c2)) {
            break;
          }
        }
        var _s = this.str_.substring(newIndex, _end);
        var value = hasFraction ? parseFloat(_s) : parseInt(_s, 10);
        newIndex = _end - 1;
        return {
          type: TokenType_Enum.LITERAL,
          value: value,
          index: newIndex
        };
      }
      if (SEPARATOR_SET.indexOf(c) != -1) {
        return {
          type: TokenType_Enum.SEPARATOR,
          value: c,
          index: newIndex
        };
      }
      if (STRING_SET.indexOf(c) != -1) {
        var _end2 = -1;
        for (var i = newIndex + 1; i < this.str_.length; i++) {
          if (this.str_.charAt(i) == c) {
            _end2 = i;
            break;
          }
        }
        if (_end2 == -1) {
          return {
            type: TokenType_Enum.INVALID,
            index: newIndex
          };
        }
        var _value2 = this.str_.substring(newIndex + 1, _end2);
        newIndex = _end2;
        return {
          type: TokenType_Enum.LITERAL,
          value: _value2,
          index: newIndex
        };
      }
      if (c == "{") {
        var numberOfBraces = 1;
        var _end3 = -1;
        for (var _i = newIndex + 1; _i < this.str_.length; _i++) {
          var char = this.str_[_i];
          if (char == "{") {
            numberOfBraces++;
          } else if (char == "}") {
            numberOfBraces--;
          }
          if (numberOfBraces <= 0) {
            _end3 = _i;
            break;
          }
        }
        if (_end3 == -1) {
          return {
            type: TokenType_Enum.INVALID,
            index: newIndex
          };
        }
        var _value3 = this.str_.substring(newIndex, _end3 + 1);
        newIndex = _end3;
        return {
          type: TokenType_Enum.OBJECT,
          value: _value3,
          index: newIndex
        };
      }
      var end = newIndex + 1;
      for (; end < this.str_.length; end++) {
        if (SPECIAL_SET.indexOf(this.str_.charAt(end)) != -1) {
          break;
        }
      }
      var s = this.str_.substring(newIndex, end);
      newIndex = end - 1;
      if (convertValues && (s == "true" || s == "false")) {
        var _value4 = s == "true";
        return {
          type: TokenType_Enum.LITERAL,
          value: _value4,
          index: newIndex
        };
      }
      if (!isNum(s.charAt(0))) {
        return {
          type: TokenType_Enum.ID,
          value: s,
          index: newIndex
        };
      }
      return {
        type: TokenType_Enum.LITERAL,
        value: s,
        index: newIndex
      };
    };
    return ParserTokenizer2;
  }();
  function isNum(c) {
    return c >= "0" && c <= "9";
  }
  function installActionServiceForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, "action", ActionService, true);
  }

  // src/form-data-wrapper.js
  function isFormDataWrapper(o) {
    return !!o && typeof o.getFormData == "function";
  }

  // src/utils/xhr-utils.js
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
  var allowedMethods_ = ["GET", "POST"];
  var allowedJsonBodyTypes_ = [isArray, isObject];
  function toStructuredCloneable(input, init) {
    var newInit = _extends4({}, init);
    if (isFormDataWrapper(init.body)) {
      var wrapper = init.body;
      newInit.headers["Content-Type"] = "multipart/form-data;charset=utf-8";
      newInit.body = fromIterator(wrapper.entries());
    }
    return {
      input: input,
      init: newInit
    };
  }
  function fromStructuredCloneable(response, responseType) {
    userAssert(isObject(response), "Object expected: %s", response);
    var isDocumentType = responseType == "document";
    if (!isDocumentType) {
      return new Response(response["body"], response["init"]);
    }
    var lowercasedHeaders = map();
    var data = {
      status: 200,
      statusText: "OK",
      getResponseHeader: function getResponseHeader(name) {
        return lowercasedHeaders[String(name).toLowerCase()] || null;
      }
    };
    if (response["init"]) {
      var init = response["init"];
      if (isArray(init.headers)) {
        init.headers.forEach(function(entry) {
          var headerName = entry[0];
          var headerValue = entry[1];
          lowercasedHeaders[String(headerName).toLowerCase()] = String(headerValue);
        });
      }
      if (init.status) {
        data.status = parseInt(init.status, 10);
      }
      if (init.statusText) {
        data.statusText = String(init.statusText);
      }
    }
    return new Response(response["body"] ? String(response["body"]) : "", data);
  }
  function getViewerInterceptResponse(win, ampdocSingle, input, init) {
    if (!ampdocSingle) {
      return resolvedPromise();
    }
    var whenUnblocked = init.prerenderSafe ? resolvedPromise() : ampdocSingle.whenFirstVisible();
    var viewer = Services.viewerForDoc(ampdocSingle);
    var urlIsProxy = isProxyOrigin(input);
    var viewerCanIntercept = viewer.hasCapability("xhrInterceptor");
    var interceptorDisabledForLocalDev = init.bypassInterceptorForDev && getMode(win).localDev;
    if (urlIsProxy || !viewerCanIntercept || interceptorDisabledForLocalDev) {
      return whenUnblocked;
    }
    var htmlElement = ampdocSingle.getRootNode().documentElement;
    var docOptedIn = htmlElement.hasAttribute("allow-xhr-interception");
    if (!docOptedIn) {
      return whenUnblocked;
    }
    return whenUnblocked.then(function() {
      return viewer.isTrustedViewer();
    }).then(function(viewerTrusted) {
      if (!(viewerTrusted || getMode(win).localDev || isExperimentOn(win, "untrusted-xhr-interception"))) {
        return;
      }
      var messagePayload = dict({
        "originalRequest": toStructuredCloneable(input, init)
      });
      return viewer.sendMessageAwaitResponse("xhr", messagePayload).then(function(response) {
        return fromStructuredCloneable(response, init.responseType);
      });
    });
  }
  function setupInput(win, input, init) {
    devAssert(typeof input == "string", "Only URL supported: %s", input);
    if (init.ampCors !== false) {
      input = getCorsUrl(win, input);
    }
    return input;
  }
  function setupInit(opt_init, opt_accept) {
    var init = opt_init || {};
    var creds = init.credentials;
    devAssert(creds === void 0 || creds == "include" || creds == "omit", "Only credentials=include|omit support: %s", creds);
    init.method = normalizeMethod_(init.method);
    init.headers = init.headers || dict({});
    if (opt_accept) {
      init.headers["Accept"] = opt_accept;
    }
    devAssert(init.body !== null, "fetch `body` can not be `null`");
    return init;
  }
  function setupAMPCors(win, input, init) {
    init = init || {};
    var currentOrigin = getWinOrigin(win);
    var targetOrigin = parseUrlDeprecated(input).origin;
    if (currentOrigin == targetOrigin) {
      init["headers"] = init["headers"] || {};
      init["headers"]["AMP-Same-Origin"] = "true";
    }
    return init;
  }
  function setupJsonFetchInit(init) {
    var fetchInit = setupInit(init, "application/json");
    if (fetchInit.method == "POST" && !isFormDataWrapper(fetchInit.body)) {
      devAssert(allowedJsonBodyTypes_.some(function(test) {
        return test(fetchInit.body);
      }), "body must be of type object or array. %s", fetchInit.body);
      fetchInit.headers["Content-Type"] = fetchInit.headers["Content-Type"] || "text/plain;charset=utf-8";
      var headerContentType = fetchInit.headers["Content-Type"];
      if (headerContentType === "application/x-www-form-urlencoded") {
        fetchInit.body = serializeQueryString(fetchInit.body);
      } else {
        fetchInit.body = JSON.stringify(fetchInit.body);
      }
    }
    return fetchInit;
  }
  function normalizeMethod_(method) {
    if (method === void 0) {
      return "GET";
    }
    method = method.toUpperCase();
    devAssert(allowedMethods_.includes(method), "Only one of %s is currently allowed. Got %s", allowedMethods_.join(", "), method);
    return method;
  }
  function isRetriable(status) {
    return status == 415 || status >= 500 && status < 600;
  }
  function assertSuccess(response) {
    return new Promise(function(resolve) {
      if (response.ok) {
        return resolve(response);
      }
      var status = response.status;
      var err = user().createError("HTTP error " + status);
      err["retriable"] = isRetriable(status);
      err["response"] = response;
      throw err;
    });
  }

  // src/service/xhr-impl.js
  var Xhr = /* @__PURE__ */ function() {
    function Xhr2(win) {
      this.win = win;
      var ampdocService2 = Services.ampdocServiceFor(win);
      this.ampdocSingle_ = ampdocService2.isSingleDoc() ? ampdocService2.getSingleDoc() : null;
    }
    var _proto = Xhr2.prototype;
    _proto.fetch_ = function fetch_(input, init) {
      var _arguments = arguments, _this = this;
      return getViewerInterceptResponse(this.win, this.ampdocSingle_, input, init).then(function(interceptorResponse) {
        if (interceptorResponse) {
          return interceptorResponse;
        }
        if (isFormDataWrapper(init.body)) {
          var formDataWrapper = init.body;
          init.body = formDataWrapper.getFormData();
        }
        return _this.win.fetch.apply(null, _arguments);
      });
    };
    _proto.fetchAmpCors_ = function fetchAmpCors_(input, init) {
      if (init === void 0) {
        init = {};
      }
      input = setupInput(this.win, input, init);
      init = setupAMPCors(this.win, input, init);
      return this.fetch_(input, init).then(function(response) {
        return response;
      }, function(reason) {
        var targetOrigin = parseUrlDeprecated(input).origin;
        throw user().createExpectedError("XHR", "Failed fetching (" + targetOrigin + "/...):", reason && reason.message);
      });
    };
    _proto.fetchJson = function fetchJson(input, opt_init) {
      return this.fetch(input, setupJsonFetchInit(opt_init));
    };
    _proto.fetchText = function fetchText(input, opt_init) {
      return this.fetch(input, setupInit(opt_init, "text/plain"));
    };
    _proto.xssiJson = function xssiJson(res, prefix) {
      if (!prefix) {
        return res.json();
      }
      return res.text().then(function(txt) {
        if (!txt.startsWith(dev().assertString(prefix))) {
          user().warn("XHR", 'Failed to strip missing prefix "' + prefix + '" in fetch response.');
          return parseJson(txt);
        }
        return parseJson(txt.slice(prefix.length));
      });
    };
    _proto.fetch = function fetch(input, opt_init) {
      var init = setupInit(opt_init);
      return this.fetchAmpCors_(input, init).then(function(response) {
        return assertSuccess(response);
      });
    };
    _proto.sendSignal = function sendSignal(input, opt_init) {
      return this.fetchAmpCors_(input, opt_init).then(function(response) {
        return assertSuccess(response);
      });
    };
    _proto.getCorsUrl = function getCorsUrl2(win, url) {
      return getCorsUrl(win, url);
    };
    return Xhr2;
  }();
  function installXhrService(window) {
    registerServiceBuilder(window, "xhr", Xhr);
  }

  // src/service/batched-xhr-impl.js
  function _inherits9(subClass2, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass2.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass2, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf9(subClass2, superClass);
  }
  function _setPrototypeOf9(o, p) {
    _setPrototypeOf9 = Object.setPrototypeOf || function _setPrototypeOf11(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf9(o, p);
  }
  function _createSuper9(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct9();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf9(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf9(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn9(this, result);
    };
  }
  function _possibleConstructorReturn9(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized9(self2);
  }
  function _assertThisInitialized9(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct9() {
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
  function _getPrototypeOf9(o) {
    _getPrototypeOf9 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf11(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf9(o);
  }
  var BatchedXhr = /* @__PURE__ */ function(_Xhr) {
    _inherits9(BatchedXhr2, _Xhr);
    var _super = _createSuper9(BatchedXhr2);
    function BatchedXhr2(win) {
      var _this;
      _this = _super.call(this, win);
      _this.fetchPromises_ = map();
      return _this;
    }
    var _proto = BatchedXhr2.prototype;
    _proto.fetch = function fetch(input, opt_init) {
      var _this2 = this;
      var accept = opt_init && opt_init.headers && opt_init.headers["Accept"] || "";
      var isBatchable = !opt_init || !opt_init.method || opt_init.method === "GET";
      var key = this.getMapKey_(input, accept);
      var isBatched = !!this.fetchPromises_[key];
      if (isBatchable && isBatched) {
        return this.fetchPromises_[key].then(function(response) {
          return response.clone();
        });
      }
      var fetchPromise = _Xhr.prototype.fetch.call(this, input, opt_init);
      if (isBatchable) {
        this.fetchPromises_[key] = fetchPromise.then(function(response) {
          delete _this2.fetchPromises_[key];
          return response.clone();
        }, function(err) {
          delete _this2.fetchPromises_[key];
          throw err;
        });
      }
      return fetchPromise;
    };
    _proto.getMapKey_ = function getMapKey_(input, responseType) {
      var absoluteUrl = resolveRelativeUrl(input, getSourceOrigin(this.win.location));
      return removeFragment(absoluteUrl) + responseType;
    };
    return BatchedXhr2;
  }(Xhr);
  function installBatchedXhrService(window) {
    registerServiceBuilder(window, "batched-xhr", BatchedXhr);
  }

  // src/core/types/string/base64.js
  var base64UrlEncodeSubs = {
    "+": "-",
    "/": "_",
    "=": "."
  };
  function base64UrlEncodeFromBytes(bytes) {
    var str = bytesToString(bytes);
    return btoa(str).replace(/[+/=]/g, function(ch) {
      return base64UrlEncodeSubs[ch];
    });
  }

  // src/service/cid-api.js
  var HOUR = 60 * 60 * 1e3;
  var DAY = 24 * HOUR;
  var YEAR = 365 * DAY;

  // src/service/cid-impl.js
  var ONE_DAY_MILLIS = 24 * 3600 * 1e3;
  var BASE_CID_MAX_AGE_MILLIS = 365 * ONE_DAY_MILLIS;
  function getEntropy(win) {
    var uint8array = getCryptoRandomBytesArray(win, 16);
    if (uint8array) {
      return uint8array;
    }
    return String(win.location.href + Date.now() + win.Math.random() + win.screen.width + win.screen.height);
  }
  function getRandomString64(win) {
    var entropy = getEntropy(win);
    if (typeof entropy == "string") {
      return Services.cryptoFor(win).sha384Base64(entropy);
    } else {
      var cast = entropy;
      return tryResolve(function() {
        return base64UrlEncodeFromBytes(cast).replace(/\.+$/, "");
      });
    }
  }

  // src/service/crypto-impl.js
  var TAG9 = "Crypto";
  var Crypto = /* @__PURE__ */ function() {
    function Crypto2(win) {
      this.win_ = win;
      var subtle = null;
      var isLegacyWebkit = false;
      if (win.crypto) {
        if (win.crypto.subtle) {
          subtle = win.crypto.subtle;
        } else if (win.crypto.webkitSubtle) {
          subtle = win.crypto.webkitSubtle;
          isLegacyWebkit = true;
        }
      }
      this.pkcsAlgo = {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-256"
        }
      };
      this.subtle = subtle;
      this.isLegacyWebkit_ = isLegacyWebkit;
      this.polyfillPromise_ = null;
    }
    var _proto = Crypto2.prototype;
    _proto.sha384 = function sha384(input) {
      var _this = this;
      if (typeof input === "string") {
        input = stringToBytes(input);
      }
      if (!this.subtle || this.polyfillPromise_) {
        return (this.polyfillPromise_ || this.loadPolyfill_()).then(function(polyfillSha384) {
          return polyfillSha384(input);
        });
      }
      try {
        return this.subtle.digest({
          name: "SHA-384"
        }, input).then(function(buffer) {
          return new Uint8Array(buffer);
        }, function(e) {
          if (e.message && e.message.indexOf("secure origin") < 0) {
            user().error(TAG9, "SubtleCrypto failed, fallback to closure lib.", e);
          }
          return _this.loadPolyfill_().then(function() {
            return _this.sha384(input);
          });
        });
      } catch (e) {
        dev().error(TAG9, "SubtleCrypto failed, fallback to closure lib.", e);
        return this.loadPolyfill_().then(function() {
          return _this.sha384(input);
        });
      }
    };
    _proto.sha384Base64 = function sha384Base64(input) {
      return this.sha384(input).then(function(buffer) {
        return base64UrlEncodeFromBytes(buffer);
      });
    };
    _proto.uniform = function uniform(input) {
      return this.sha384(input).then(function(buffer) {
        var result = 0;
        for (var i = 2; i >= 0; i--) {
          result = (result + buffer[i]) / 256;
        }
        return result;
      });
    };
    _proto.loadPolyfill_ = function loadPolyfill_() {
      var _this2 = this;
      if (this.polyfillPromise_) {
        return this.polyfillPromise_;
      }
      return this.polyfillPromise_ = Services.extensionsFor(this.win_).preloadExtension("amp-crypto-polyfill").then(function() {
        return getService(_this2.win_, "crypto-polyfill");
      });
    };
    _proto.isPkcsAvailable = function isPkcsAvailable() {
      return Boolean(this.subtle) && this.win_["isSecureContext"] !== false;
    };
    _proto.importPkcsKey = function importPkcsKey(jwk) {
      devAssert2(this.isPkcsAvailable());
      var keyData = this.isLegacyWebkit_ ? utf8Encode(JSON.stringify(jwk)) : jwk;
      return this.subtle.importKey("jwk", keyData, this.pkcsAlgo, true, ["verify"]);
    };
    _proto.verifyPkcs = function verifyPkcs(key, signature, data) {
      devAssert2(this.isPkcsAvailable());
      return this.subtle.verify(this.pkcsAlgo, key, signature, data);
    };
    return Crypto2;
  }();
  function installCryptoService(win) {
    return registerServiceBuilder(win, "crypto", Crypto);
  }

  // src/service/document-info-impl.js
  var filteredLinkRels = ["prefetch", "preload", "preconnect", "dns-prefetch"];
  function installDocumentInfoServiceForDoc(nodeOrDoc) {
    return registerServiceBuilderForDoc(nodeOrDoc, "documentInfo", DocInfo);
  }
  var DocInfo = /* @__PURE__ */ function() {
    function DocInfo2(ampdoc2) {
      this.ampdoc_ = ampdoc2;
      this.info_ = null;
      this.pageViewId64_ = null;
    }
    var _proto = DocInfo2.prototype;
    _proto.get = function get() {
      if (this.info_) {
        return this.info_;
      }
      var ampdoc2 = this.ampdoc_;
      var url = ampdoc2.getUrl();
      var sourceUrl = getSourceUrl(url);
      var rootNode = ampdoc2.getRootNode();
      var canonicalUrl = rootNode && rootNode.AMP && rootNode.AMP.canonicalUrl;
      if (!canonicalUrl) {
        var canonicalTag = rootNode.querySelector("link[rel=canonical]");
        canonicalUrl = canonicalTag ? parseUrlDeprecated(canonicalTag.href).href : sourceUrl;
      }
      var pageViewId = getPageViewId(ampdoc2.win);
      var linkRels = getLinkRels(ampdoc2.win.document);
      var viewport = getViewport(ampdoc2.win.document);
      var replaceParams = getReplaceParams(ampdoc2);
      return this.info_ = {
        get sourceUrl() {
          return getSourceUrl(ampdoc2.getUrl());
        },
        canonicalUrl: canonicalUrl,
        pageViewId: pageViewId,
        get pageViewId64() {
          if (!this.pageViewId64_) {
            this.pageViewId64_ = getRandomString64(ampdoc2.win);
          }
          return this.pageViewId64_;
        },
        linkRels: linkRels,
        viewport: viewport,
        replaceParams: replaceParams
      };
    };
    return DocInfo2;
  }();
  function getPageViewId(win) {
    return String(Math.floor(win.Math.random() * 1e4));
  }
  function getLinkRels(doc) {
    var linkRels = map();
    if (doc.head) {
      var links = doc.head.querySelectorAll("link[rel]");
      var _loop = function _loop2(i2) {
        var link = links[i2];
        var href = link.href;
        var rels = link.getAttribute("rel");
        if (!rels || !href) {
          return "continue";
        }
        rels.split(/\s+/).forEach(function(rel) {
          if (filteredLinkRels.indexOf(rel) != -1) {
            return;
          }
          var value = linkRels[rel];
          if (value) {
            if (!isArray(value)) {
              value = linkRels[rel] = [value];
            }
            value.push(href);
          } else {
            linkRels[rel] = href;
          }
        });
      };
      for (var i = 0; i < links.length; i++) {
        var _ret = _loop(i);
        if (_ret === "continue")
          continue;
      }
    }
    return linkRels;
  }
  function getViewport(doc) {
    var viewportEl = doc.head.querySelector('meta[name="viewport"]');
    return viewportEl ? viewportEl.getAttribute("content") : null;
  }
  function getReplaceParams(ampdoc2) {
    if (!ampdoc2.isSingleDoc() || getProxyServingType(ampdoc2.win.location.href) != "a") {
      return null;
    }
    var url = parseUrlDeprecated(ampdoc2.win.location.href);
    var replaceRaw = parseQueryString(url.search)["amp_r"];
    if (replaceRaw === void 0) {
      return null;
    }
    return parseQueryString(replaceRaw);
  }

  // src/service/hidden-observer-impl.js
  var OBSERVER_OPTIONS = {
    attributes: true,
    attributeFilter: ["hidden"],
    subtree: true
  };
  var HiddenObserver = /* @__PURE__ */ function() {
    function HiddenObserver2(ampdoc2) {
      this.root_ = ampdoc2.getRootNode();
      var doc = this.root_.ownerDocument || this.root_;
      this.win_ = devAssert2(doc.defaultView);
      this.mutationObserver_ = null;
      this.observable_ = null;
    }
    var _proto = HiddenObserver2.prototype;
    _proto.add = function add(handler) {
      var _this = this;
      this.init_();
      var remove2 = this.observable_.add(handler);
      return function() {
        remove2();
        if (_this.observable_.getHandlerCount() === 0) {
          _this.dispose();
        }
      };
    };
    _proto.init_ = function init_() {
      var _this2 = this;
      if (this.mutationObserver_) {
        return;
      }
      this.observable_ = new Observable();
      var mo = new this.win_.MutationObserver(function(mutations) {
        if (mutations) {
          _this2.observable_.fire(mutations);
        }
      });
      this.mutationObserver_ = mo;
      mo.observe(this.root_, OBSERVER_OPTIONS);
    };
    _proto.dispose = function dispose() {
      if (!this.mutationObserver_) {
        return;
      }
      this.mutationObserver_.disconnect();
      this.observable_.removeAll();
      this.mutationObserver_ = null;
      this.observable_ = null;
    };
    return HiddenObserver2;
  }();
  function installHiddenObserverForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, "hidden-observer", HiddenObserver);
  }

  // src/core/window/history.js
  function getHistoryState(history) {
    try {
      return history.state;
    } catch (e) {
      return null;
    }
  }

  // src/service/history-impl.js
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
  var TAG_2 = "History";
  var HISTORY_PROP_ = "AMP.History";
  var History = /* @__PURE__ */ function() {
    function History2(ampdoc2, binding) {
      this.ampdoc_ = ampdoc2;
      this.timer_ = Services.timerFor(ampdoc2.win);
      this.binding_ = binding;
      this.stackIndex_ = 0;
      this.stackOnPop_ = [];
      this.queue_ = [];
      this.binding_.setOnStateUpdated(this.onStateUpdated_.bind(this));
    }
    var _proto = History2.prototype;
    _proto.cleanup = function cleanup() {
      this.binding_.cleanup();
    };
    _proto.push = function push(opt_onPop, opt_stateUpdate) {
      var _this = this;
      return this.enque_(function() {
        return _this.binding_.push(opt_stateUpdate).then(function(historyState) {
          _this.onStateUpdated_(historyState);
          if (opt_onPop) {
            _this.stackOnPop_[historyState.stackIndex] = opt_onPop;
          }
          return historyState.stackIndex;
        });
      }, "push");
    };
    _proto.pop = function pop(stateId) {
      var _this2 = this;
      return this.enque_(function() {
        return _this2.binding_.pop(stateId).then(function(historyState) {
          _this2.onStateUpdated_(historyState);
        });
      }, "pop");
    };
    _proto.replace = function replace(opt_stateUpdate) {
      var _this3 = this;
      return this.enque_(function() {
        return _this3.binding_.replace(opt_stateUpdate);
      }, "replace");
    };
    _proto.get = function get() {
      var _this4 = this;
      return this.enque_(function() {
        return _this4.binding_.get();
      }, "get");
    };
    _proto.goBack = function goBack(navigate) {
      var _this5 = this;
      return this.enque_(function() {
        if (_this5.stackIndex_ <= 0 && !navigate) {
          return resolvedPromise();
        }
        return _this5.binding_.pop(_this5.stackIndex_).then(function(historyState) {
          _this5.onStateUpdated_(historyState);
        });
      }, "goBack");
    };
    _proto.replaceStateForTarget = function replaceStateForTarget(target) {
      var _this6 = this;
      devAssert2(target[0] == "#", "target should start with a #");
      var previousHash = this.ampdoc_.win.location.hash;
      return this.push(function() {
        _this6.ampdoc_.win.location.replace(previousHash || "#");
      }).then(function() {
        _this6.binding_.replaceStateForTarget(target);
      });
    };
    _proto.getFragment = function getFragment() {
      return this.binding_.getFragment();
    };
    _proto.updateFragment = function updateFragment(fragment) {
      if (fragment[0] == "#") {
        fragment = fragment.substr(1);
      }
      return this.binding_.updateFragment(fragment);
    };
    _proto.onStateUpdated_ = function onStateUpdated_(historyState) {
      this.stackIndex_ = historyState.stackIndex;
      this.doPop_(historyState);
    };
    _proto.doPop_ = function doPop_(historyState) {
      var _this7 = this;
      if (this.stackIndex_ >= this.stackOnPop_.length - 1) {
        return;
      }
      var toPop = [];
      for (var i = this.stackOnPop_.length - 1; i > this.stackIndex_; i--) {
        if (this.stackOnPop_[i]) {
          toPop.push(this.stackOnPop_[i]);
          this.stackOnPop_[i] = void 0;
        }
      }
      this.stackOnPop_.splice(this.stackIndex_ + 1);
      if (toPop.length > 0) {
        var _loop = function _loop2(_i2) {
          _this7.timer_.delay(function() {
            return toPop[_i2](historyState);
          }, 1);
        };
        for (var _i = 0; _i < toPop.length; _i++) {
          _loop(_i);
        }
      }
    };
    _proto.enque_ = function enque_(callback, name) {
      var deferred = new Deferred();
      var promise = deferred.promise, reject = deferred.reject, resolve = deferred.resolve;
      var trace = new Error("history trace for " + name + ": ");
      this.queue_.push({
        callback: callback,
        resolve: resolve,
        reject: reject,
        trace: trace
      });
      if (this.queue_.length == 1) {
        this.deque_();
      }
      return promise;
    };
    _proto.deque_ = function deque_() {
      var _this8 = this;
      if (this.queue_.length == 0) {
        return;
      }
      var task = this.queue_[0];
      var promise;
      try {
        promise = task.callback();
      } catch (e) {
        promise = Promise.reject(e);
      }
      promise.then(function(result) {
        task.resolve(result);
      }, function(reason) {
        dev().error(TAG_2, "failed to execute a task:", reason);
        if (task.trace) {
          task.trace.message += reason;
          dev().error(TAG_2, task.trace);
        }
        task.reject(reason);
      }).then(function() {
        _this8.queue_.splice(0, 1);
        _this8.deque_();
      });
    };
    return History2;
  }();
  var HistoryBindingNatural_ = /* @__PURE__ */ function() {
    function HistoryBindingNatural_2(win) {
      var _this9 = this;
      this.win = win;
      this.timer_ = Services.timerFor(win);
      var history = this.win.history;
      this.startIndex_ = history.length - 1;
      var state = getHistoryState(history);
      if (state && state[HISTORY_PROP_] !== void 0) {
        this.startIndex_ = Math.min(state[HISTORY_PROP_], this.startIndex_);
      }
      this.stackIndex_ = this.startIndex_;
      this.waitingState_;
      this.onStateUpdated_ = null;
      this.supportsState_ = "state" in history;
      this.unsupportedState_ = this.historyState_(this.stackIndex_);
      var pushState, replaceState;
      if (history.pushState && history.replaceState) {
        this.origPushState_ = history.originalPushState || history.pushState.bind(history);
        this.origReplaceState_ = history.originalReplaceState || history.replaceState.bind(history);
        pushState = function pushState2(state2, opt_title, opt_url) {
          _this9.unsupportedState_ = state2;
          _this9.origPushState_(state2, opt_title, opt_url || null);
        };
        replaceState = function replaceState2(state2, opt_title, opt_url) {
          _this9.unsupportedState_ = state2;
          if (opt_url !== void 0) {
            _this9.origReplaceState_(state2, opt_title, opt_url);
          } else {
            _this9.origReplaceState_(state2, opt_title);
          }
        };
        if (!history.originalPushState) {
          history.originalPushState = this.origPushState_;
        }
        if (!history.originalReplaceState) {
          history.originalReplaceState = this.origReplaceState_;
        }
      } else {
        pushState = function pushState2(state2, opt_title, opt_url) {
          _this9.unsupportedState_ = state2;
        };
        replaceState = function replaceState2(state2, opt_title, opt_url) {
          _this9.unsupportedState_ = state2;
        };
      }
      this.pushState_ = pushState;
      this.replaceState_ = replaceState;
      try {
        this.replaceState_(this.historyState_(this.stackIndex_, true));
      } catch (e) {
        dev().error(TAG_2, "Initial replaceState failed: " + e.message);
      }
      history.pushState = this.historyPushState_.bind(this);
      history.replaceState = this.historyReplaceState_.bind(this);
      this.popstateHandler_ = function(e) {
        var event = e;
        var state2 = event.state;
        dev().fine(TAG_2, "popstate event: " + _this9.win.history.length + ", " + JSON.stringify(state2));
        _this9.onHistoryEvent_();
      };
      this.win.addEventListener("popstate", this.popstateHandler_);
    }
    var _proto3 = HistoryBindingNatural_2.prototype;
    _proto3.cleanup = function cleanup() {
      if (this.origPushState_) {
        this.win.history.pushState = this.origPushState_;
      }
      if (this.origReplaceState_) {
        this.win.history.replaceState = this.origReplaceState_;
      }
      this.win.removeEventListener("popstate", this.popstateHandler_);
    };
    _proto3.historyState_ = function historyState_(stackIndex, opt_replace) {
      var state = map(opt_replace ? this.getState_() : void 0);
      state[HISTORY_PROP_] = stackIndex;
      return state;
    };
    _proto3.setOnStateUpdated = function setOnStateUpdated(callback) {
      this.onStateUpdated_ = callback;
    };
    _proto3.push = function push(opt_stateUpdate) {
      var _this10 = this;
      return this.whenReady_(function() {
        var newState = _this10.mergeStateUpdate_(_this10.getState_(), opt_stateUpdate || {});
        _this10.historyPushState_(newState, void 0, newState.fragment ? "#" + newState.fragment : void 0);
        return tryResolve(function() {
          return _this10.mergeStateUpdate_(newState, {
            stackIndex: _this10.stackIndex_
          });
        });
      });
    };
    _proto3.pop = function pop(stackIndex) {
      var _this11 = this;
      stackIndex = Math.max(stackIndex, this.startIndex_);
      return this.whenReady_(function() {
        return _this11.back_(_this11.stackIndex_ - stackIndex + 1);
      }).then(function(newStackIndex) {
        return _this11.mergeStateUpdate_(_this11.getState_(), {
          stackIndex: newStackIndex
        });
      });
    };
    _proto3.replace = function replace(opt_stateUpdate) {
      var _this12 = this;
      if (opt_stateUpdate === void 0) {
        opt_stateUpdate = {};
      }
      return this.whenReady_(function() {
        var newState = _this12.mergeStateUpdate_(_this12.getState_(), opt_stateUpdate || {});
        var url = (newState.url || "").replace(/#.*/, "");
        var fragment = newState.fragment ? "#" + newState.fragment : "";
        _this12.historyReplaceState_(newState, newState.title, url || fragment ? url + fragment : void 0);
        return tryResolve(function() {
          return _this12.mergeStateUpdate_(newState, {
            stackIndex: _this12.stackIndex_
          });
        });
      });
    };
    _proto3.get = function get() {
      var _this13 = this;
      return tryResolve(function() {
        return _this13.mergeStateUpdate_(_this13.getState_(), {
          stackIndex: _this13.stackIndex_
        });
      });
    };
    _proto3.backTo = function backTo(stackIndex) {
      var _this14 = this;
      stackIndex = Math.max(stackIndex, this.startIndex_);
      return this.whenReady_(function() {
        return _this14.back_(_this14.stackIndex_ - stackIndex);
      });
    };
    _proto3.onHistoryEvent_ = function onHistoryEvent_() {
      var state = this.getState_();
      dev().fine(TAG_2, "history event: " + this.win.history.length + ", " + JSON.stringify(state));
      var stackIndex = state ? state[HISTORY_PROP_] : void 0;
      var newStackIndex = this.stackIndex_;
      var waitingState = this.waitingState_;
      this.waitingState_ = void 0;
      if (newStackIndex > this.win.history.length - 2) {
        newStackIndex = this.win.history.length - 2;
        this.updateHistoryState_(this.mergeStateUpdate_(state, {
          stackIndex: newStackIndex
        }));
      }
      if (stackIndex == void 0) {
        newStackIndex = newStackIndex + 1;
      } else if (stackIndex < this.win.history.length) {
        newStackIndex = stackIndex;
      } else {
        newStackIndex = this.win.history.length - 1;
      }
      if (!state) {
        state = {};
      }
      state[HISTORY_PROP_] = newStackIndex;
      this.replaceState_(state, void 0, void 0);
      if (newStackIndex != this.stackIndex_) {
        this.updateHistoryState_(this.mergeStateUpdate_(state, {
          stackIndex: newStackIndex
        }));
      }
      if (newStackIndex < this.startIndex_) {
        this.startIndex_ = newStackIndex;
      }
      if (waitingState) {
        waitingState.resolve();
      }
    };
    _proto3.getState_ = function getState_() {
      if (this.supportsState_) {
        return getHistoryState(this.win.history);
      }
      return this.unsupportedState_;
    };
    _proto3.assertReady_ = function assertReady_() {
      devAssert2(!this.waitingState_, "The history must not be in the waiting state");
    };
    _proto3.whenReady_ = function whenReady_(callback) {
      if (!this.waitingState_) {
        return callback();
      }
      return this.waitingState_.promise.then(callback, callback);
    };
    _proto3.wait_ = function wait_() {
      this.assertReady_();
      var deferred = new Deferred();
      var reject = deferred.reject, resolve = deferred.resolve;
      var promise = this.timer_.timeoutPromise(500, deferred.promise);
      this.waitingState_ = {
        promise: promise,
        resolve: resolve,
        reject: reject
      };
      return promise;
    };
    _proto3.back_ = function back_(steps) {
      var _this15 = this;
      this.assertReady_();
      if (steps <= 0) {
        return Promise.resolve(this.stackIndex_);
      }
      this.unsupportedState_ = this.historyState_(this.stackIndex_ - steps);
      var promise = this.wait_();
      this.win.history.go(-steps);
      return promise.then(function() {
        return Promise.resolve(_this15.stackIndex_);
      });
    };
    _proto3.historyPushState_ = function historyPushState_(state, title, url) {
      this.assertReady_();
      if (!state) {
        state = {};
      }
      var stackIndex = this.stackIndex_ + 1;
      state[HISTORY_PROP_] = stackIndex;
      this.pushState_(state, title, url);
      if (stackIndex != this.win.history.length - 1) {
        stackIndex = this.win.history.length - 1;
        state[HISTORY_PROP_] = stackIndex;
        this.replaceState_(state);
      }
      var newState = this.mergeStateUpdate_(state, {
        stackIndex: stackIndex
      });
      this.updateHistoryState_(newState);
    };
    _proto3.replaceStateForTarget = function replaceStateForTarget(target) {
      var _this16 = this;
      devAssert2(target[0] == "#", "target should start with a #");
      this.whenReady_(function() {
        _this16.win.removeEventListener("popstate", _this16.popstateHandler_);
        try {
          _this16.win.location.replace(target);
        } finally {
          _this16.win.addEventListener("popstate", _this16.popstateHandler_);
        }
        _this16.historyReplaceState_();
        return resolvedPromise();
      });
    };
    _proto3.historyReplaceState_ = function historyReplaceState_(state, title, url) {
      this.assertReady_();
      if (!state) {
        state = {};
      }
      var stackIndex = Math.min(this.stackIndex_, this.win.history.length - 1);
      state[HISTORY_PROP_] = stackIndex;
      this.replaceState_(state, title, url);
      var newState = this.mergeStateUpdate_(state, {
        stackIndex: stackIndex
      });
      this.updateHistoryState_(newState);
    };
    _proto3.updateHistoryState_ = function updateHistoryState_(historyState) {
      this.assertReady_();
      historyState.stackIndex = Math.min(historyState.stackIndex, this.win.history.length - 1);
      if (this.stackIndex_ != historyState.stackIndex) {
        dev().fine(TAG_2, "stack index changed: " + this.stackIndex_ + " -> " + historyState.stackIndex);
        this.stackIndex_ = historyState.stackIndex;
        if (this.onStateUpdated_) {
          this.onStateUpdated_(historyState);
        }
      }
    };
    _proto3.getFragment = function getFragment() {
      var hash = this.win.location.hash;
      hash = hash.substr(1);
      return Promise.resolve(hash);
    };
    _proto3.updateFragment = function updateFragment(fragment) {
      return this.replace({
        fragment: fragment
      });
    };
    _proto3.mergeStateUpdate_ = function mergeStateUpdate_(state, update) {
      var mergedData = _extends5({}, state && state.data || {}, update.data || {});
      return _extends5({}, state || {}, update, {
        data: mergedData
      });
    };
    return HistoryBindingNatural_2;
  }();
  var HistoryBindingVirtual_ = /* @__PURE__ */ function() {
    function HistoryBindingVirtual_2(win, viewer) {
      var _this17 = this;
      this.win = win;
      this.viewer_ = viewer;
      this.stackIndex_ = 0;
      this.onStateUpdated_ = null;
      this.unlistenOnHistoryPopped_ = this.viewer_.onMessage("historyPopped", function(data) {
        return _this17.onHistoryPopped_(data);
      });
    }
    var _proto4 = HistoryBindingVirtual_2.prototype;
    _proto4.replaceStateForTarget = function replaceStateForTarget(target) {
      devAssert2(target[0] == "#", "target should start with a #");
      this.win.location.replace(target);
    };
    _proto4.cleanup = function cleanup() {
      this.unlistenOnHistoryPopped_();
    };
    _proto4.setOnStateUpdated = function setOnStateUpdated(callback) {
      this.onStateUpdated_ = callback;
    };
    _proto4.toHistoryState_ = function toHistoryState_(maybeHistoryState, fallbackState, debugId) {
      if (this.isHistoryState_(maybeHistoryState)) {
        return maybeHistoryState;
      } else {
        dev().warn(TAG_2, 'Ignored unexpected "%s" data:', debugId, maybeHistoryState);
      }
      return fallbackState;
    };
    _proto4.isHistoryState_ = function isHistoryState_(maybeHistoryState) {
      return !!maybeHistoryState && maybeHistoryState["stackIndex"] !== void 0;
    };
    _proto4.push = function push(opt_stateUpdate) {
      var _this18 = this;
      var message = _extends5({
        "stackIndex": this.stackIndex_ + 1
      }, opt_stateUpdate || {});
      var push2 = "pushHistory";
      return this.viewer_.sendMessageAwaitResponse(push2, message).then(function(response) {
        var fallbackState = message;
        var newState = _this18.toHistoryState_(response, fallbackState, push2);
        _this18.updateHistoryState_(newState);
        return newState;
      });
    };
    _proto4.pop = function pop(stackIndex) {
      var _this19 = this;
      if (stackIndex > this.stackIndex_) {
        return this.get();
      }
      var message = dict({
        "stackIndex": this.stackIndex_
      });
      var pop2 = "popHistory";
      return this.viewer_.sendMessageAwaitResponse(pop2, message).then(function(response) {
        var fallbackState = dict({
          "stackIndex": _this19.stackIndex_ - 1
        });
        var newState = _this19.toHistoryState_(response, fallbackState, pop2);
        _this19.updateHistoryState_(newState);
        return newState;
      });
    };
    _proto4.replace = function replace(opt_stateUpdate) {
      var _this20 = this;
      if (opt_stateUpdate && opt_stateUpdate.url) {
        if (!this.viewer_.hasCapability("fullReplaceHistory")) {
          var curState = dict({
            "stackIndex": this.stackIndex_
          });
          return Promise.resolve(curState);
        }
        var url = opt_stateUpdate.url.replace(/#.*/, "");
        opt_stateUpdate.url = url;
      }
      var message = _extends5({
        "stackIndex": this.stackIndex_
      }, opt_stateUpdate || {});
      var replace2 = "replaceHistory";
      return this.viewer_.sendMessageAwaitResponse(replace2, message, true).then(function(response) {
        var fallbackState = message;
        var newState = _this20.toHistoryState_(response, fallbackState, replace2);
        _this20.updateHistoryState_(newState);
        return newState;
      });
    };
    _proto4.get = function get() {
      return Promise.resolve({
        data: void 0,
        fragment: "",
        stackIndex: this.stackIndex_,
        title: ""
      });
    };
    _proto4.onHistoryPopped_ = function onHistoryPopped_(data) {
      if (data["newStackIndex"] !== void 0) {
        data["stackIndex"] = data["newStackIndex"];
      }
      if (this.isHistoryState_(data)) {
        this.updateHistoryState_(data);
      } else {
        dev().warn(TAG_2, 'Ignored unexpected "historyPopped" data:', data);
      }
    };
    _proto4.updateHistoryState_ = function updateHistoryState_(state) {
      var stackIndex = state.stackIndex;
      if (this.stackIndex_ != stackIndex) {
        dev().fine(TAG_2, "stackIndex: " + this.stackIndex_ + " -> " + stackIndex);
        this.stackIndex_ = stackIndex;
        if (this.onStateUpdated_) {
          this.onStateUpdated_(state);
        }
      }
    };
    _proto4.getFragment = function getFragment() {
      if (!this.viewer_.hasCapability("fragment")) {
        return Promise.resolve("");
      }
      return this.viewer_.sendMessageAwaitResponse("getFragment", void 0, true).then(function(data) {
        if (!data) {
          return "";
        }
        var hash = dev().assertString(data);
        if (hash[0] == "#") {
          hash = hash.substr(1);
        }
        return hash;
      });
    };
    _proto4.updateFragment = function updateFragment(fragment) {
      if (!this.viewer_.hasCapability("fragment")) {
        return resolvedPromise();
      }
      return this.viewer_.sendMessageAwaitResponse("replaceHistory", dict({
        "fragment": fragment
      }), true);
    };
    return HistoryBindingVirtual_2;
  }();
  function createHistory(ampdoc2) {
    var viewer = Services.viewerForDoc(ampdoc2);
    var binding;
    if (viewer.isOvertakeHistory() || getMode(ampdoc2.win).test || ampdoc2.win.__AMP_TEST_IFRAME) {
      binding = new HistoryBindingVirtual_(ampdoc2.win, viewer);
    } else {
      registerServiceBuilder(ampdoc2.win, "global-history-binding", HistoryBindingNatural_);
      binding = getService(ampdoc2.win, "global-history-binding");
    }
    return new History(ampdoc2, binding);
  }
  function installHistoryServiceForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, "history", createHistory);
  }

  // src/core/dom/layout/viewport-observer.js
  var viewportObservers = new WeakMap();
  var viewportCallbacks = new WeakMap();

  // src/service/mutator-impl.js
  var FOCUS_HISTORY_TIMEOUT_ = 1e3 * 60;

  // src/impression.js
  var trackImpressionPromise = null;
  var DEFAULT_APPEND_URL_PARAM = ["gclid", "gclsrc"];
  function getTrackImpressionPromise() {
    return userAssert2(trackImpressionPromise, "E#19457 trackImpressionPromise");
  }
  function doNotTrackImpression() {
    trackImpressionPromise = resolvedPromise();
  }
  function shouldAppendExtraParams(ampdoc2) {
    return ampdoc2.whenReady().then(function() {
      return !!ampdoc2.getBody().querySelector("amp-analytics[type=googleanalytics]");
    });
  }
  function getExtraParamsUrl(win, target) {
    var url = parseUrlDeprecated(WindowInterface.getLocation(win).href);
    var params = parseQueryString(url.search);
    var appendParams = [];
    for (var i = 0; i < DEFAULT_APPEND_URL_PARAM.length; i++) {
      var param = DEFAULT_APPEND_URL_PARAM[i];
      if (typeof params[param] !== "undefined") {
        appendParams.push(param);
      }
    }
    var additionalUrlParams = target.getAttribute("data-amp-addparams");
    var href = target.href;
    if (additionalUrlParams) {
      href = addParamsToUrl(href, parseQueryString(additionalUrlParams));
    }
    var loc = parseUrlDeprecated(href);
    var existParams = parseQueryString(loc.search);
    for (var _i = appendParams.length - 1; _i >= 0; _i--) {
      var _param = appendParams[_i];
      if (typeof existParams[_param] !== "undefined") {
        appendParams.splice(_i, 1);
      }
    }
    return getQueryParamUrl(appendParams);
  }
  function getQueryParamUrl(params) {
    var url = "";
    for (var i = 0; i < params.length; i++) {
      var param = params[i];
      url += i == 0 ? param + "=QUERY_PARAM(" + param + ")" : "&" + param + "=QUERY_PARAM(" + param + ")";
    }
    return url;
  }

  // src/open-window-dialog.js
  function openWindowDialog(win, url, target, opt_features) {
    var res;
    try {
      res = win.open(url, target, opt_features);
    } catch (e) {
      dev().error("DOM", "Failed to open url on target: ", target, e);
    }
    if (!res && target != "_top" && !includes2(opt_features || "", "noopener")) {
      res = win.open(url, "_top");
    }
    return res;
  }

  // src/service/navigation.js
  var TAG10 = "navigation";
  var EVENT_TYPE_CLICK = "click";
  var EVENT_TYPE_CONTEXT_MENU = "contextmenu";
  var VALID_TARGETS = ["_top", "_blank"];
  var ORIG_HREF_ATTRIBUTE = "data-a4a-orig-href";
  var AMP_CUSTOM_LINKER_TARGET = "__AMP_CUSTOM_LINKER_TARGET__";
  function installGlobalNavigationHandlerForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, TAG10, Navigation, true);
  }
  var Navigation = /* @__PURE__ */ function() {
    function Navigation2(ampdoc2) {
      var _this = this;
      this.ampdoc = ampdoc2;
      this.rootNode_ = ampdoc2.getRootNode();
      this.viewport_ = Services.viewportForDoc(this.ampdoc);
      this.viewer_ = Services.viewerForDoc(this.ampdoc);
      this.history_ = Services.historyForDoc(this.ampdoc);
      this.platform_ = Services.platformFor(this.ampdoc.win);
      this.isIosSafari_ = this.platform_.isIos() && this.platform_.isSafari();
      this.isIframed_ = isIframed(this.ampdoc.win) && this.viewer_.isOvertakeHistory();
      this.isEmbed_ = this.rootNode_ != this.ampdoc.getRootNode() || !!this.ampdoc.getParent();
      this.isInABox_ = getMode(this.ampdoc.win).runtime == "inabox";
      this.serviceContext_ = this.rootNode_.nodeType == Node.DOCUMENT_NODE ? this.rootNode_.documentElement : this.rootNode_;
      this.boundHandle_ = this.handle_.bind(this);
      this.rootNode_.addEventListener(EVENT_TYPE_CLICK, this.boundHandle_);
      this.rootNode_.addEventListener(EVENT_TYPE_CONTEXT_MENU, this.boundHandle_);
      this.appendExtraParams_ = false;
      shouldAppendExtraParams(this.ampdoc).then(function(res) {
        _this.appendExtraParams_ = res;
      });
      this.isTrustedViewer_ = false;
      this.isLocalViewer_ = false;
      Promise.all([this.viewer_.isTrustedViewer(), this.viewer_.getViewerOrigin()]).then(function(values2) {
        _this.isTrustedViewer_ = values2[0];
        _this.isLocalViewer_ = isLocalhostOrigin(values2[1]);
      });
      this.a2aFeatures_ = null;
      this.anchorMutators_ = new PriorityQueue();
      this.navigateToMutators_ = new PriorityQueue();
    }
    Navigation2.installAnchorClickInterceptor = function installAnchorClickInterceptor(ampdoc2, win) {
      win.document.documentElement.addEventListener("click", maybeExpandUrlParams.bind(null, ampdoc2), true);
    };
    var _proto = Navigation2.prototype;
    _proto.cleanup = function cleanup() {
      if (this.boundHandle_) {
        this.rootNode_.removeEventListener(EVENT_TYPE_CLICK, this.boundHandle_);
        this.rootNode_.removeEventListener(EVENT_TYPE_CONTEXT_MENU, this.boundHandle_);
      }
    };
    _proto.openWindow = function openWindow(win, url, target, opener) {
      var options = "";
      if ((this.platform_.isIos() || !this.platform_.isChrome()) && !opener) {
        options += "noopener";
      }
      var newWin = openWindowDialog(win, url, target, options);
      if (newWin && !opener) {
        newWin.opener = null;
      }
    };
    _proto.navigateTo = function navigateTo(win, url, opt_requestedBy, options) {
      if (options === void 0) {
        options = {};
      }
      var _options = options, _options$opener = _options.opener, opener = _options$opener === void 0 ? false : _options$opener, _options$target = _options.target, target = _options$target === void 0 ? "_top" : _options$target;
      url = this.applyNavigateToMutators_(url);
      var urlService = Services.urlForDoc(this.serviceContext_);
      if (!urlService.isProtocolValid(url)) {
        user().error(TAG10, "Cannot navigate to invalid protocol: " + url);
        return;
      }
      userAssert2(VALID_TARGETS.includes(target), "Target '" + target + "' not supported.");
      var sourceUrl = urlService.getSourceUrl(win.location);
      url = urlService.resolveRelativeUrl(url, sourceUrl);
      if (target == "_blank") {
        this.openWindow(win, url, target, opener);
        return;
      }
      if (opt_requestedBy) {
        if (!this.a2aFeatures_) {
          this.a2aFeatures_ = this.queryA2AFeatures_();
        }
        if (this.a2aFeatures_.includes(opt_requestedBy)) {
          if (this.navigateToAmpUrl(url, opt_requestedBy)) {
            return;
          }
        }
      }
      win.top.location.href = url;
    };
    _proto.navigateToAmpUrl = function navigateToAmpUrl(url, requestedBy) {
      if (this.viewer_.hasCapability("a2a")) {
        this.viewer_.sendMessage("a2aNavigate", dict({
          "url": url,
          "requestedBy": requestedBy
        }));
        return true;
      }
      return false;
    };
    _proto.queryA2AFeatures_ = function queryA2AFeatures_() {
      var meta = this.rootNode_.querySelector('meta[name="amp-to-amp-navigation"]');
      if (meta && meta.hasAttribute("content")) {
        return meta.getAttribute("content").split(",").map(function(s) {
          return s.trim();
        });
      }
      return [];
    };
    _proto.handle_ = function handle_(e) {
      if (e.defaultPrevented) {
        return;
      }
      var element = dev().assertElement(e[AMP_CUSTOM_LINKER_TARGET] || e.target);
      var target = closestAncestorElementBySelector(element, "A");
      if (!target || !target.href) {
        return;
      }
      if (e.type == EVENT_TYPE_CLICK) {
        this.handleClick_(target, e);
      } else if (e.type == EVENT_TYPE_CONTEXT_MENU) {
        this.handleContextMenuClick_(target, e);
      }
    };
    _proto.handleClick_ = function handleClick_(element, e) {
      this.expandVarsForAnchor_(element);
      var toLocation = this.parseUrl_(element.href);
      if (this.handleA2AClick_(e, element, toLocation)) {
        return;
      }
      if (this.handleCustomProtocolClick_(e, element, toLocation)) {
        return;
      }
      var fromLocation = this.getLocation_();
      if (getHrefMinusHash(toLocation) != getHrefMinusHash(fromLocation)) {
        this.applyAnchorMutators_(element, e);
        toLocation = this.parseUrl_(element.href);
      }
      this.handleNavigation_(e, element, toLocation, fromLocation);
    };
    _proto.handleContextMenuClick_ = function handleContextMenuClick_(element, e) {
      this.expandVarsForAnchor_(element);
      this.applyAnchorMutators_(element, e);
    };
    _proto.applyAnchorMutators_ = function applyAnchorMutators_(element, e) {
      this.anchorMutators_.forEach(function(anchorMutator) {
        anchorMutator(element, e);
      });
    };
    _proto.applyNavigateToMutators_ = function applyNavigateToMutators_(url) {
      this.navigateToMutators_.forEach(function(mutator) {
        url = mutator(url);
      });
      return url;
    };
    _proto.expandVarsForAnchor_ = function expandVarsForAnchor_(el) {
      var defaultExpandParamsUrl = null;
      if (this.appendExtraParams_ && !this.isEmbed_) {
        defaultExpandParamsUrl = getExtraParamsUrl(this.ampdoc.win, el);
      }
      var urlReplacements = Services.urlReplacementsForDoc(el);
      urlReplacements.maybeExpandLink(el, defaultExpandParamsUrl);
    };
    _proto.handleCustomProtocolClick_ = function handleCustomProtocolClick_(e, element, location) {
      if (!this.isIframed_) {
        return false;
      }
      var win = getWin(element);
      var url = element.href;
      var protocol = location.protocol;
      var isFTP = protocol == "ftp:";
      if (isFTP) {
        openWindowDialog(win, url, "_blank");
        e.preventDefault();
        return true;
      }
      var isNormalProtocol = /^(https?|mailto):$/.test(protocol);
      if (this.isIosSafari_ && !isNormalProtocol) {
        openWindowDialog(win, url, "_top");
        e.preventDefault();
        return true;
      }
      return false;
    };
    _proto.handleA2AClick_ = function handleA2AClick_(e, element, location) {
      if (!element.hasAttribute("rel")) {
        return false;
      }
      var relations = element.getAttribute("rel").split(" ").map(function(s) {
        return s.trim();
      });
      if (!relations.includes("amphtml")) {
        return false;
      }
      if (this.navigateToAmpUrl(location.href, "<a rel=amphtml>")) {
        e.preventDefault();
        return true;
      }
      return false;
    };
    _proto.handleNavigation_ = function handleNavigation_(e, element, toLocation, fromLocation) {
      var to = getHrefMinusHash(toLocation);
      var from = getHrefMinusHash(fromLocation);
      if (toLocation.hash && to == from) {
        this.handleHashNavigation_(e, toLocation, fromLocation);
      } else {
        var target = (element.getAttribute("target") || "").toLowerCase();
        if (this.isEmbed_ || this.isInABox_) {
          if (target != "_top" && target != "_blank") {
            target = "_blank";
            element.setAttribute("target", target);
          }
        }
        var win = this.ampdoc.win;
        var platform = Services.platformFor(win);
        var viewer = Services.viewerForDoc(element);
        if (fromLocation.search && platform.isSafari() && platform.getMajorVersion() >= 13 && viewer.isProxyOrigin() && viewer.isEmbedded()) {
          this.removeViewerQueryBeforeNavigation_(win, fromLocation, target);
        }
        if (this.viewerInterceptsNavigation(to, "intercept_click")) {
          e.preventDefault();
        }
      }
    };
    _proto.removeViewerQueryBeforeNavigation_ = function removeViewerQueryBeforeNavigation_(win, fromLocation, target) {
      dev().info(TAG10, "Removing iframe query string before navigation:", fromLocation.search);
      var original = fromLocation.href;
      var noQuery = "" + fromLocation.origin + fromLocation.pathname + fromLocation.hash;
      win.history.replaceState(null, "", noQuery);
      var restoreQuery = function restoreQuery2() {
        var currentHref = win.location.href;
        if (currentHref == noQuery) {
          dev().info(TAG10, "Restored iframe URL with query string:", original);
          win.history.replaceState(null, "", original);
        } else {
          dev().error(TAG10, "Unexpected iframe URL change:", currentHref, noQuery);
        }
      };
      if (target === "_blank") {
        win.setTimeout(restoreQuery, 0);
      } else {
        win.addEventListener("pageshow", function onPageShow(e) {
          if (e.persisted) {
            restoreQuery();
            win.removeEventListener("pageshow", onPageShow);
          }
        });
      }
    };
    _proto.handleHashNavigation_ = function handleHashNavigation_(e, toLocation, fromLocation) {
      var _this2 = this;
      e.preventDefault();
      if (this.isEmbed_) {
        return;
      }
      var hash = toLocation.hash.slice(1);
      var el = null;
      if (hash) {
        var escapedHash = escapeCssSelectorIdent(hash);
        el = this.rootNode_.getElementById(hash) || this.rootNode_.querySelector('a[name="' + escapedHash + '"]');
      }
      if (toLocation.hash != fromLocation.hash) {
        this.history_.replaceStateForTarget(toLocation.hash).then(function() {
          _this2.scrollToElement_(el, hash);
        });
      } else {
        this.scrollToElement_(el, hash);
      }
    };
    _proto.registerAnchorMutator = function registerAnchorMutator(callback, priority) {
      this.anchorMutators_.enqueue(callback, priority);
    };
    _proto.registerNavigateToMutator = function registerNavigateToMutator(callback, priority) {
      this.navigateToMutators_.enqueue(callback, priority);
    };
    _proto.scrollToElement_ = function scrollToElement_(elem, hash) {
      var _this3 = this;
      if (elem) {
        this.viewport_.scrollIntoView(elem);
        Services.timerFor(this.ampdoc.win).delay(function() {
          return _this3.viewport_.scrollIntoView(dev().assertElement(elem));
        }, 1);
      } else {
        dev().warn(TAG10, "failed to find element with id=" + hash + " or a[name=" + hash + "]");
      }
    };
    _proto.parseUrl_ = function parseUrl_(url) {
      return Services.urlForDoc(this.serviceContext_).parse(url);
    };
    _proto.getLocation_ = function getLocation_() {
      var baseHref = getMode().test && !this.isEmbed_ ? this.ampdoc.win.location.href : "";
      return this.parseUrl_(baseHref);
    };
    _proto.viewerInterceptsNavigation = function viewerInterceptsNavigation(url, requestedBy) {
      var viewerHasCapability = this.viewer_.hasCapability("interceptNavigation");
      var docOptedIn = this.ampdoc.isSingleDoc() && this.ampdoc.getRootNode().documentElement.hasAttribute("allow-navigation-interception");
      if (!viewerHasCapability || !docOptedIn || !(this.isTrustedViewer_ || this.isLocalViewer_)) {
        return false;
      }
      this.viewer_.sendMessage("navigateTo", dict({
        "url": url,
        "requestedBy": requestedBy
      }));
      return true;
    };
    return Navigation2;
  }();
  function maybeExpandUrlParams(ampdoc2, e) {
    var target = closestAncestorElementBySelector(dev().assertElement(e.target), "A");
    if (!target || !target.href) {
      return;
    }
    var hrefToExpand = target.getAttribute(ORIG_HREF_ATTRIBUTE) || target.getAttribute("href");
    if (!hrefToExpand) {
      return;
    }
    var vars = {
      "CLICK_X": function CLICK_X() {
        return e.pageX;
      },
      "CLICK_Y": function CLICK_Y() {
        return e.pageY;
      }
    };
    var newHref = Services.urlReplacementsForDoc(target).expandUrlSync(hrefToExpand, vars, {
      "CLICK_X": true,
      "CLICK_Y": true
    });
    if (newHref != hrefToExpand) {
      if (!target.getAttribute(ORIG_HREF_ATTRIBUTE)) {
        target.setAttribute(ORIG_HREF_ATTRIBUTE, hrefToExpand);
      }
      target.setAttribute("href", newHref);
    }
  }
  function getHrefMinusHash(location) {
    return "" + location.origin + location.pathname + location.search;
  }

  // src/service/owners-impl.js
  function _createForOfIteratorHelperLoose10(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray10(o)) || allowArrayLike && o && typeof o.length === "number") {
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
  function _unsupportedIterableToArray10(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray10(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray10(o, minLen);
  }
  function _arrayLikeToArray10(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function elements(elements2) {
    return isArray(elements2) ? elements2 : [elements2];
  }
  var OwnersImpl = /* @__PURE__ */ function() {
    function OwnersImpl2(ampdoc2) {
      this.resources_ = Services.resourcesForDoc(ampdoc2);
    }
    var _proto = OwnersImpl2.prototype;
    _proto.setOwner = function setOwner(element, owner) {
      Resource.setOwner(element, owner);
    };
    _proto.schedulePreload = function schedulePreload(parentElement, subElements) {
      this.scheduleLayoutOrPreloadForSubresources_(this.resources_.getResourceForElement(parentElement), false, elements(subElements));
    };
    _proto.scheduleLayout = function scheduleLayout(parentElement, subElements) {
      this.scheduleLayoutOrPreloadForSubresources_(this.resources_.getResourceForElement(parentElement), true, elements(subElements));
    };
    _proto.schedulePause = function schedulePause(parentElement, subElements) {
      var parentResource = this.resources_.getResourceForElement(parentElement);
      subElements = elements(subElements);
      this.findResourcesInElements_(parentResource, subElements, function(resource) {
        resource.pause();
      });
    };
    _proto.scheduleResume = function scheduleResume(parentElement, subElements) {
      var parentResource = this.resources_.getResourceForElement(parentElement);
      subElements = elements(subElements);
      this.findResourcesInElements_(parentResource, subElements, function(resource) {
        resource.resume();
      });
    };
    _proto.scheduleUnlayout = function scheduleUnlayout(parentElement, subElements) {
      var parentResource = this.resources_.getResourceForElement(parentElement);
      subElements = elements(subElements);
      this.findResourcesInElements_(parentResource, subElements, function(resource) {
        resource.unlayout();
      });
    };
    _proto.requireLayout = function requireLayout(element, opt_parentPriority) {
      var promises = [];
      this.discoverResourcesForElement_(element, function(resource) {
        promises.push(resource.element.ensureLoaded());
      });
      return Promise.all(promises);
    };
    _proto.findResourcesInElements_ = function findResourcesInElements_(parentResource, elements2, callback) {
      for (var _iterator = _createForOfIteratorHelperLoose10(elements2), _step; !(_step = _iterator()).done; ) {
        var element = _step.value;
        devAssert2(parentResource.element.contains(element));
        this.discoverResourcesForElement_(element, callback);
      }
    };
    _proto.discoverResourcesForElement_ = function discoverResourcesForElement_(element, callback) {
      if (element.classList.contains("i-amphtml-element")) {
        callback(this.resources_.getResourceForElement(element));
        var placeholder = element.getPlaceholder();
        if (placeholder) {
          this.discoverResourcesForElement_(placeholder, callback);
        }
      } else {
        var ampElements = element.getElementsByClassName("i-amphtml-element");
        var seen = [];
        for (var i = 0; i < ampElements.length; i++) {
          var ampElement = ampElements[i];
          var covered = false;
          for (var j = 0; j < seen.length; j++) {
            if (seen[j].contains(ampElement)) {
              covered = true;
              break;
            }
          }
          if (!covered) {
            seen.push(ampElement);
            callback(this.resources_.getResourceForElement(ampElement));
          }
        }
      }
    };
    _proto.scheduleLayoutOrPreloadForSubresources_ = function scheduleLayoutOrPreloadForSubresources_(parentResource, layout, subElements) {
      this.findResourcesInElements_(parentResource, subElements, function(resource) {
        resource.element.ensureLoaded(parentResource.getLayoutPriority());
      });
    };
    return OwnersImpl2;
  }();
  function installOwnersServiceForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, "owners", OwnersImpl);
  }

  // src/service/platform-impl.js
  var Platform = /* @__PURE__ */ function() {
    function Platform2(win) {
      this.navigator_ = win.navigator;
      this.win_ = win;
    }
    var _proto = Platform2.prototype;
    _proto.isAndroid = function isAndroid() {
      return /Android/i.test(this.navigator_.userAgent);
    };
    _proto.isIos = function isIos() {
      return /iPhone|iPad|iPod/i.test(this.navigator_.userAgent);
    };
    _proto.isSafari = function isSafari() {
      return /Safari/i.test(this.navigator_.userAgent) && !this.isChrome() && !this.isEdge() && !this.isFirefox() && !this.isOpera();
    };
    _proto.isChrome = function isChrome() {
      return /Chrome|CriOS/i.test(this.navigator_.userAgent) && !this.isEdge() && !this.isOpera();
    };
    _proto.isFirefox = function isFirefox() {
      return /Firefox|FxiOS/i.test(this.navigator_.userAgent) && !this.isEdge();
    };
    _proto.isOpera = function isOpera() {
      return /OPR\/|Opera|OPiOS/i.test(this.navigator_.userAgent);
    };
    _proto.isEdge = function isEdge() {
      return /Edge/i.test(this.navigator_.userAgent);
    };
    _proto.isWebKit = function isWebKit2() {
      return /WebKit/i.test(this.navigator_.userAgent) && !this.isEdge();
    };
    _proto.isWindows = function isWindows() {
      return /Windows/i.test(this.navigator_.userAgent);
    };
    _proto.isStandalone = function isStandalone() {
      return this.isIos() && this.navigator_.standalone || this.isChrome() && this.win_.matchMedia("(display-mode: standalone)").matches;
    };
    _proto.isBot = function isBot() {
      return /bot/i.test(this.navigator_.userAgent);
    };
    _proto.getMajorVersion = function getMajorVersion() {
      if (this.isSafari()) {
        return this.isIos() ? this.getIosMajorVersion() || 0 : this.evalMajorVersion_(/\sVersion\/(\d+)/, 1);
      }
      if (this.isChrome()) {
        return this.evalMajorVersion_(/(Chrome|CriOS)\/(\d+)/, 2);
      }
      if (this.isFirefox()) {
        return this.evalMajorVersion_(/(Firefox|FxiOS)\/(\d+)/, 2);
      }
      if (this.isOpera()) {
        return this.evalMajorVersion_(/(OPR|Opera|OPiOS)\/(\d+)/, 2);
      }
      if (this.isEdge()) {
        return this.evalMajorVersion_(/Edge\/(\d+)/, 1);
      }
      return 0;
    };
    _proto.evalMajorVersion_ = function evalMajorVersion_(expr, index) {
      if (!this.navigator_.userAgent) {
        return 0;
      }
      var res = this.navigator_.userAgent.match(expr);
      if (!res || index >= res.length) {
        return 0;
      }
      return parseInt(res[index], 10);
    };
    _proto.getIosVersionString = function getIosVersionString() {
      if (!this.navigator_.userAgent) {
        return "";
      }
      if (!this.isIos()) {
        return "";
      }
      var version2 = this.navigator_.userAgent.match(/OS ([0-9]+[_.][0-9]+([_.][0-9]+)?)\b/);
      if (!version2) {
        return "";
      }
      version2 = version2[1].replace(/_/g, ".");
      return version2;
    };
    _proto.getIosMajorVersion = function getIosMajorVersion() {
      var currentIosVersion = this.getIosVersionString();
      if (currentIosVersion == "") {
        return null;
      }
      return Number(currentIosVersion.split(".")[0]);
    };
    return Platform2;
  }();
  function installPlatformService(window) {
    registerServiceBuilder(window, "platform", Platform);
  }

  // src/service/resources-impl.js
  var FOCUS_HISTORY_TIMEOUT_2 = 1e3 * 60;

  // src/service/standard-actions-impl.js
  function isShowable(element) {
    return element.hasAttribute("hidden");
  }
  function getAutofocusElementForShowAction(element) {
    if (element.hasAttribute("autofocus")) {
      return element;
    }
    return element.querySelector("[autofocus]");
  }
  var TAG11 = "STANDARD-ACTIONS";
  var AMP_CSS_RE = /^i-amphtml-/;
  var StandardActions = /* @__PURE__ */ function() {
    function StandardActions2(ampdoc2) {
      this.ampdoc = ampdoc2;
      var context = ampdoc2.getHeadNode();
      this.mutator_ = Services.mutatorForDoc(ampdoc2);
      this.viewport_ = Services.viewportForDoc(ampdoc2);
      this.installActions_(Services.actionServiceForDoc(context));
    }
    var _proto = StandardActions2.prototype;
    _proto.installActions_ = function installActions_(actionService) {
      actionService.addGlobalTarget("AMP", this.handleAmpTarget_.bind(this));
      actionService.addGlobalMethodHandler("hide", this.handleHide_.bind(this));
      actionService.addGlobalMethodHandler("show", this.handleShow_.bind(this));
      actionService.addGlobalMethodHandler("toggleVisibility", this.handleToggle_.bind(this));
      actionService.addGlobalMethodHandler("scrollTo", this.handleScrollTo_.bind(this));
      actionService.addGlobalMethodHandler("focus", this.handleFocus_.bind(this));
      actionService.addGlobalMethodHandler("toggleClass", this.handleToggleClass_.bind(this));
      actionService.addGlobalMethodHandler("toggleChecked", this.handleToggleChecked_.bind(this));
    };
    _proto.handleAmpTarget_ = function handleAmpTarget_(invocation) {
      if (!invocation.satisfiesTrust(ActionTrust_Enum.DEFAULT)) {
        return null;
      }
      var args = invocation.args, method = invocation.method, node = invocation.node;
      var win = getWin(node);
      switch (method) {
        case "pushState":
        case "setState":
          var element = node.nodeType === Node.DOCUMENT_NODE ? node.documentElement : dev().assertElement(node);
          return Services.bindForDocOrNull(element).then(function(bind) {
            userAssert2(bind, "AMP-BIND is not installed.");
            return bind.invoke(invocation);
          });
        case "navigateTo":
          return this.handleNavigateTo_(invocation);
        case "closeOrNavigateTo":
          return this.handleCloseOrNavigateTo_(invocation);
        case "scrollTo":
          userAssert2(args["id"], "AMP.scrollTo must provide element ID");
          invocation.node = dev().assertElement(getAmpdoc(node).getElementById(args["id"]), "scrollTo element ID must exist on page");
          return this.handleScrollTo_(invocation);
        case "goBack":
          Services.historyForDoc(this.ampdoc).goBack(!!(args && args["navigate"] === true));
          return null;
        case "print":
          win.print();
          return null;
        case "optoutOfCid":
          return Services.cidForDoc(this.ampdoc).then(function(cid) {
            return cid.optOut();
          }).catch(function(reason) {
            dev().error(TAG11, "Failed to opt out of CID", reason);
          });
      }
      throw user().createError("Unknown AMP action ", method);
    };
    _proto.handleNavigateTo_ = function handleNavigateTo_(invocation) {
      var _this = this;
      var args = invocation.args, caller = invocation.caller, method = invocation.method, node = invocation.node;
      var win = getWin(node);
      var permission = resolvedPromise();
      if (caller.tagName.startsWith("AMP-")) {
        var ampElement = caller;
        permission = ampElement.getImpl().then(function(impl) {
          if (typeof impl.throwIfCannotNavigate == "function") {
            impl.throwIfCannotNavigate();
          }
        });
      }
      return permission.then(function() {
        Services.navigationForDoc(_this.ampdoc).navigateTo(win, args["url"], "AMP." + method, {
          target: args["target"],
          opener: args["opener"]
        });
      }, function(e) {
        user().error(TAG11, e);
      });
    };
    _proto.handleCloseOrNavigateTo_ = function handleCloseOrNavigateTo_(invocation) {
      var node = invocation.node;
      var win = getWin(node);
      var hasParent = win.parent != win;
      var canBeClosed = win.opener && this.ampdoc.isSingleDoc() && !hasParent;
      var wasClosed = false;
      if (canBeClosed) {
        win.close();
        wasClosed = win.closed;
      }
      if (!wasClosed) {
        return this.handleNavigateTo_(invocation);
      }
      return resolvedPromise();
    };
    _proto.handleScrollTo_ = function handleScrollTo_(invocation) {
      var node = dev().assertElement(invocation.node);
      var args = invocation.args;
      var posOrUndef = args && args["position"];
      var durationOrUndef = args && args["duration"];
      if (posOrUndef && !["top", "bottom", "center"].includes(posOrUndef)) {
        posOrUndef = void 0;
      }
      if (!isFiniteNumber(durationOrUndef)) {
        durationOrUndef = void 0;
      }
      return this.viewport_.animateScrollIntoView(node, posOrUndef, durationOrUndef);
    };
    _proto.handleFocus_ = function handleFocus_(invocation) {
      var node = dev().assertElement(invocation.node);
      tryFocus(node);
      return null;
    };
    _proto.handleHide_ = function handleHide_(invocation) {
      var target = dev().assertElement(invocation.node);
      if (target.classList.contains("i-amphtml-element")) {
        var ampElement = target;
        this.mutator_.mutateElement(ampElement, function() {
          return ampElement.collapse();
        }, true);
      } else {
        this.mutator_.mutateElement(target, function() {
          return toggle(target, false);
        });
      }
      return null;
    };
    _proto.handleShow_ = function handleShow_(invocation) {
      var _this2 = this;
      var node = invocation.node;
      var target = dev().assertElement(node);
      var ownerWindow = getWin(target);
      if (target.classList.contains(getLayoutClass(Layout_Enum.NODISPLAY))) {
        user().warn(TAG11, "Elements with layout=nodisplay cannot be dynamically shown.", target);
        return null;
      }
      this.mutator_.measureElement(function() {
        if (computedStyle(ownerWindow, target).display == "none" && !isShowable(target)) {
          user().warn(TAG11, 'Elements can only be dynamically shown when they have the "hidden" attribute set or when they were dynamically hidden.', target);
        }
      });
      var autofocusElOrNull = getAutofocusElementForShowAction(target);
      if (autofocusElOrNull && Services.platformFor(ownerWindow).isIos()) {
        this.handleShowSync_(target, autofocusElOrNull);
        this.mutator_.mutateElement(target, function() {
        });
      } else {
        this.mutator_.mutateElement(target, function() {
          _this2.handleShowSync_(target, autofocusElOrNull);
        });
      }
      return null;
    };
    _proto.handleShowSync_ = function handleShowSync_(target, autofocusElOrNull) {
      if (target.classList.contains("i-amphtml-element")) {
        var ampElement = target;
        ampElement.expand();
      } else {
        toggle(target, true);
      }
      if (autofocusElOrNull) {
        tryFocus(autofocusElOrNull);
      }
    };
    _proto.handleToggle_ = function handleToggle_(invocation) {
      if (isShowable(dev().assertElement(invocation.node))) {
        return this.handleShow_(invocation);
      }
      return this.handleHide_(invocation);
    };
    _proto.handleToggleClass_ = function handleToggleClass_(invocation) {
      var target = dev().assertElement(invocation.node);
      var args = invocation.args;
      var className = user().assertString(args["class"], "Argument 'class' must be a string.");
      if (AMP_CSS_RE.test(className)) {
        return null;
      }
      this.mutator_.mutateElement(target, function() {
        if (args["force"] !== void 0) {
          var shouldForce = user().assertBoolean(args["force"], "Optional argument 'force' must be a boolean.");
          target.classList.toggle(className, shouldForce);
        } else {
          target.classList.toggle(className);
        }
      });
      return null;
    };
    _proto.handleToggleChecked_ = function handleToggleChecked_(invocation) {
      var target = dev().assertElement(invocation.node);
      var args = invocation.args;
      this.mutator_.mutateElement(target, function() {
        if (args["force"] !== void 0) {
          var shouldForce = user().assertBoolean(args["force"], "Optional argument 'force' must be a boolean.");
          target.checked = shouldForce;
        } else {
          if (target.checked === true) {
            target.checked = false;
          } else {
            target.checked = true;
          }
        }
      });
      return null;
    };
    return StandardActions2;
  }();
  function installStandardActionsForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, "standard-actions", StandardActions, true);
  }

  // src/service/template-impl.js
  var PROP_ = "__AMP_IMPL_";
  var PROP_PROMISE_ = "__AMP_WAIT_";
  var EMPTY_FUNC = function EMPTY_FUNC2() {
  };
  var Templates = /* @__PURE__ */ function() {
    function Templates2(ampdoc2) {
      this.ampdoc_ = ampdoc2;
      this.templateClassMap_ = {};
      this.templateClassResolvers_ = {};
    }
    var _proto = Templates2.prototype;
    _proto.whenReady = function whenReady(templateElement) {
      return this.getImplementation_(templateElement).then(EMPTY_FUNC);
    };
    _proto.setHtmlForTemplate = function setHtmlForTemplate(templateElement, html2) {
      var _this = this;
      return this.getImplementation_(templateElement).then(function(impl) {
        return _this.setHtml_(impl, html2);
      });
    };
    _proto.renderTemplate = function renderTemplate(templateElement, data) {
      var _this2 = this;
      return this.getImplementation_(templateElement).then(function(impl) {
        return _this2.render_(impl, data);
      });
    };
    _proto.renderTemplateAsString = function renderTemplateAsString(templateElement, data) {
      return this.getImplementation_(templateElement).then(function(impl) {
        return impl.renderAsString(data);
      });
    };
    _proto.renderTemplateArray = function renderTemplateArray(templateElement, array) {
      var _this3 = this;
      if (array.length == 0) {
        return Promise.resolve([]);
      }
      return this.getImplementation_(templateElement).then(function(impl) {
        return array.map(function(item) {
          return _this3.render_(impl, item);
        });
      });
    };
    _proto.findAndRenderTemplate = function findAndRenderTemplate(parent, data, opt_querySelector) {
      return this.renderTemplate(this.findTemplate(parent, opt_querySelector), data);
    };
    _proto.findAndSetHtmlForTemplate = function findAndSetHtmlForTemplate(parent, html2, opt_querySelector) {
      return this.setHtmlForTemplate(this.findTemplate(parent, opt_querySelector), html2);
    };
    _proto.findAndRenderTemplateArray = function findAndRenderTemplateArray(parent, array, opt_querySelector) {
      return this.renderTemplateArray(this.findTemplate(parent, opt_querySelector), array);
    };
    _proto.hasTemplate = function hasTemplate(parent, opt_querySelector) {
      return !!this.maybeFindTemplate(parent, opt_querySelector);
    };
    _proto.findTemplate = function findTemplate(parent, opt_querySelector) {
      var templateElement = this.maybeFindTemplate(parent, opt_querySelector);
      userAssert2(templateElement, "Template not found for %s", parent);
      var templateTagName = templateElement.tagName;
      userAssert2(templateTagName == "TEMPLATE" || templateTagName == "SCRIPT" && templateElement.getAttribute("type") === "text/plain", 'Template must be defined in a <template> or <script type="text/plain"> tag');
      return templateElement;
    };
    _proto.maybeFindTemplate = function maybeFindTemplate(parent, opt_querySelector) {
      var templateId = parent.getAttribute("template");
      if (templateId) {
        var rootNode = rootNodeFor(parent);
        return rootNode.getElementById(templateId);
      } else if (opt_querySelector) {
        return scopedQuerySelector(parent, opt_querySelector);
      } else {
        return parent.querySelector('template[type], script[type="text/plain"]');
      }
    };
    _proto.getImplementation_ = function getImplementation_(element) {
      var _this4 = this;
      var impl = element[PROP_];
      if (impl) {
        return Promise.resolve(impl);
      }
      var type = "";
      var tagName = element.tagName;
      if (tagName == "TEMPLATE") {
        type = element.getAttribute("type");
      } else if (tagName == "SCRIPT") {
        type = element.getAttribute("template");
      }
      userAssert2(type, "Type must be specified: %s", element);
      var promise = element[PROP_PROMISE_];
      if (promise) {
        return promise;
      }
      promise = this.waitForTemplateClass_(element, type).then(function(templateClass) {
        var Constr = templateClass;
        var impl2 = element[PROP_] = new Constr(element, _this4.ampdoc_.win);
        delete element[PROP_PROMISE_];
        return impl2;
      });
      element[PROP_PROMISE_] = promise;
      return promise;
    };
    _proto.waitForTemplateClass_ = function waitForTemplateClass_(element, type) {
      if (this.templateClassMap_[type]) {
        return this.templateClassMap_[type];
      }
      var deferred = new Deferred();
      var promise = deferred.promise, resolve = deferred.resolve;
      this.templateClassMap_[type] = promise;
      this.templateClassResolvers_[type] = resolve;
      return promise;
    };
    _proto.registerTemplate_ = function registerTemplate_(type, templateClass) {
      if (!this.templateClassMap_[type]) {
        this.templateClassMap_[type] = Promise.resolve(templateClass);
      } else {
        var resolver = this.templateClassResolvers_[type];
        userAssert2(resolver, "Duplicate template type: %s", type);
        delete this.templateClassResolvers_[type];
        resolver(templateClass);
      }
    };
    _proto.render_ = function render_(impl, data) {
      return impl.render(data);
    };
    _proto.setHtml_ = function setHtml_(impl, html2) {
      return impl.setHtml(html2);
    };
    return Templates2;
  }();
  function installTemplatesServiceForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, "templates", Templates);
  }
  function registerExtendedTemplateForDoc(ampdoc2, type, templateClass) {
    var templatesService = getServiceForDoc(ampdoc2, "templates");
    return templatesService.registerTemplate_(type, templateClass);
  }

  // src/service/timer-impl.js
  var TAG12 = "timer";
  var timersForTesting;
  var Timer = /* @__PURE__ */ function() {
    function Timer2(win) {
      this.win = win;
      this.resolved_ = this.win.Promise.resolve();
      this.taskCount_ = 0;
      this.canceled_ = {};
      this.startTime_ = Date.now();
    }
    var _proto = Timer2.prototype;
    _proto.timeSinceStart = function timeSinceStart() {
      return Date.now() - this.startTime_;
    };
    _proto.delay = function delay(callback, opt_delay) {
      var _this = this;
      if (!opt_delay) {
        var id = "p" + this.taskCount_++;
        this.resolved_.then(function() {
          if (_this.canceled_[id]) {
            delete _this.canceled_[id];
            return;
          }
          callback();
        }).catch(reportError);
        return id;
      }
      var wrapped = function wrapped2() {
        try {
          callback();
        } catch (e) {
          reportError(e);
          throw e;
        }
      };
      var index = this.win.setTimeout(wrapped, opt_delay);
      if (getMode().test) {
        if (!timersForTesting) {
          timersForTesting = [];
        }
        timersForTesting.push(index);
      }
      return index;
    };
    _proto.cancel = function cancel(timeoutId) {
      if (typeof timeoutId == "string") {
        this.canceled_[timeoutId] = true;
        return;
      }
      this.win.clearTimeout(timeoutId);
    };
    _proto.promise = function promise(opt_delay) {
      var _this2 = this;
      return new this.win.Promise(function(resolve) {
        var timerKey = _this2.delay(resolve, opt_delay);
        if (timerKey == -1) {
          throw new Error("Failed to schedule timer.");
        }
      });
    };
    _proto.timeoutPromise = function timeoutPromise(delay, opt_racePromise, opt_message) {
      var _this3 = this;
      var timerKey;
      var delayPromise = new this.win.Promise(function(_resolve, reject) {
        timerKey = _this3.delay(function() {
          reject(user().createError(opt_message || "timeout"));
        }, delay);
        if (timerKey == -1) {
          throw new Error("Failed to schedule timer.");
        }
      });
      if (!opt_racePromise) {
        return delayPromise;
      }
      var cancel = function cancel2() {
        _this3.cancel(timerKey);
      };
      opt_racePromise.then(cancel, cancel);
      return this.win.Promise.race([delayPromise, opt_racePromise]);
    };
    _proto.poll = function poll(delay, predicate) {
      var _this4 = this;
      return new this.win.Promise(function(resolve) {
        var interval = _this4.win.setInterval(function() {
          if (predicate()) {
            _this4.win.clearInterval(interval);
            resolve();
          }
        }, delay);
      });
    };
    return Timer2;
  }();
  function installTimerService(window) {
    registerServiceBuilder(window, TAG12, Timer);
  }

  // src/service/url-impl.js
  var SERVICE = "url";
  var Url = /* @__PURE__ */ function() {
    function Url2(ampdoc2) {
      var root = ampdoc2.getRootNode();
      var doc = root.ownerDocument || root;
      this.anchor_ = doc.createElement("a");
      this.cache_ = isEsm() ? null : new LruCache(100);
    }
    var _proto = Url2.prototype;
    _proto.parse = function parse(url, opt_nocache) {
      return parseUrlWithA(this.anchor_, url, isEsm() || opt_nocache ? null : this.cache_);
    };
    _proto.parse_ = function parse_(url) {
      if (typeof url !== "string") {
        return url;
      }
      return this.parse(url);
    };
    _proto.isProtocolValid = function isProtocolValid2(url) {
      return isProtocolValid(url);
    };
    _proto.getSourceOrigin = function getSourceOrigin2(url) {
      return getSourceOrigin(this.parse_(url));
    };
    _proto.getSourceUrl = function getSourceUrl2(url) {
      return getSourceUrl(this.parse_(url));
    };
    _proto.resolveRelativeUrl = function resolveRelativeUrl2(relativeUrlString, baseUrl) {
      return resolveRelativeUrl(relativeUrlString, this.parse_(baseUrl));
    };
    _proto.assertHttpsUrl = function assertHttpsUrl2(urlString, elementContext, sourceName) {
      if (sourceName === void 0) {
        sourceName = "source";
      }
      return assertHttpsUrl(urlString, elementContext, sourceName);
    };
    _proto.assertAbsoluteHttpOrHttpsUrl = function assertAbsoluteHttpOrHttpsUrl2(urlString) {
      return assertAbsoluteHttpOrHttpsUrl(urlString);
    };
    _proto.isProxyOrigin = function isProxyOrigin2(url) {
      return isProxyOrigin(this.parse_(url));
    };
    _proto.isSecure = function isSecure(url) {
      return isSecureUrlDeprecated(this.parse_(url));
    };
    _proto.getWinOrigin = function getWinOrigin2(win) {
      return win.origin || this.parse_(win.location.href).origin;
    };
    _proto.getCdnUrlOnOrigin = function getCdnUrlOnOrigin(resourceUrl) {
      if (isProxyOrigin(resourceUrl)) {
        return resourceUrl;
      }
      var _this$parse_ = this.parse_(resourceUrl), hash = _this$parse_.hash, host = _this$parse_.host, pathname = _this$parse_.pathname, search = _this$parse_.search;
      var encodedHost = encodeURIComponent(host);
      return urls.cdn + "/c/" + encodedHost + pathname + search + hash;
    };
    return Url2;
  }();
  function installUrlForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, SERVICE, Url, true);
  }

  // src/service/url-expander/expander.js
  function _extends6() {
    _extends6 = Object.assign || function(target) {
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
    return _extends6.apply(this, arguments);
  }
  var PARSER_IGNORE_FLAG = "`";
  var TAG13 = "Expander";
  var Expander = /* @__PURE__ */ function() {
    function Expander2(variableSource, opt_bindings, opt_collectVars, opt_sync, opt_allowlist, opt_noEncode) {
      this.variableSource_ = variableSource;
      this.bindings_ = opt_bindings;
      this.collectVars_ = opt_collectVars;
      this.sync_ = opt_sync;
      this.allowlist_ = opt_allowlist;
      this.encode_ = !opt_noEncode;
    }
    var _proto = Expander2.prototype;
    _proto.expand = function expand(url) {
      if (!url.length) {
        return this.sync_ ? url : Promise.resolve(url);
      }
      var expr = this.variableSource_.getExpr(this.bindings_, this.allowlist_);
      var matches2 = this.findMatches_(url, expr);
      if (!matches2.length) {
        return this.sync_ ? url : Promise.resolve(url);
      }
      return this.parseUrlRecursively_(url, matches2);
    };
    _proto.getMacroNames = function getMacroNames(url) {
      var expr = this.variableSource_.getExpr(this.bindings_, this.allowlist_);
      var matches2 = url.match(expr);
      if (matches2) {
        return matches2;
      }
      return [];
    };
    _proto.findMatches_ = function findMatches_(url, expression) {
      var matches2 = [];
      url.replace(expression, function(match, name, startPosition) {
        var length = match.length;
        var stopPosition = length + startPosition - 1;
        var info = {
          start: startPosition,
          stop: stopPosition,
          name: name,
          length: length
        };
        matches2.push(info);
      });
      return matches2;
    };
    _proto.parseUrlRecursively_ = function parseUrlRecursively_(url, matches2) {
      var _this = this;
      var stack = [];
      var urlIndex = 0;
      var matchIndex = 0;
      var match = matches2[matchIndex];
      var numOfPendingCalls = 0;
      var ignoringChars = false;
      var evaluateNextLevel = function evaluateNextLevel2(encode) {
        var builder = "";
        var results = [];
        var args = [];
        while (urlIndex < url.length && matchIndex <= matches2.length) {
          var trimmedBuilder = builder.trim();
          if (match && urlIndex === match.start) {
            if (trimmedBuilder) {
              results.push(numOfPendingCalls ? trimStart(builder) : builder);
            }
            var binding = void 0;
            if (_this.bindings_ && hasOwn(_this.bindings_, match.name)) {
              binding = {
                name: match.name,
                prioritized: _this.bindings_[match.name],
                encode: encode
              };
            } else {
              binding = _extends6({}, _this.variableSource_.get(match.name), {
                name: match.name,
                encode: encode
              });
            }
            urlIndex = match.stop + 1;
            match = matches2[++matchIndex];
            if (url[urlIndex] === "(") {
              urlIndex++;
              numOfPendingCalls++;
              stack.push(binding);
              results.push(evaluateNextLevel2(false));
            } else {
              results.push(_this.evaluateBinding_(binding));
            }
            builder = "";
          } else if (url[urlIndex] === PARSER_IGNORE_FLAG) {
            if (!ignoringChars) {
              ignoringChars = true;
              if (trimmedBuilder) {
                results.push(trimmedBuilder);
              }
            } else {
              ignoringChars = false;
              if (builder.length) {
                results.push(builder);
              }
            }
            builder = "";
            urlIndex++;
          } else if (numOfPendingCalls && url[urlIndex] === "," && !ignoringChars) {
            if (trimmedBuilder) {
              results.push(trimmedBuilder);
            }
            args.push(results);
            results = [];
            if (url[urlIndex + 1] === ",") {
              args.push([""]);
              urlIndex++;
            }
            builder = "";
            urlIndex++;
          } else if (numOfPendingCalls && url[urlIndex] === ")" && !ignoringChars) {
            urlIndex++;
            numOfPendingCalls--;
            var _binding = stack.pop();
            if (trimmedBuilder) {
              results.push(trimmedBuilder);
            }
            args.push(results);
            var value = _this.evaluateBinding_(_binding, args);
            return value;
          } else {
            builder += url[urlIndex];
            urlIndex++;
          }
          if (urlIndex === url.length && builder.length) {
            results.push(builder);
          }
        }
        if (_this.sync_) {
          return results.join("");
        }
        return Promise.all(results).then(function(promiseArray) {
          return promiseArray.join("");
        }).catch(function(e) {
          rethrowAsync(e);
          return "";
        });
      };
      return evaluateNextLevel(this.encode_);
    };
    _proto.evaluateBinding_ = function evaluateBinding_(bindingInfo, opt_args) {
      var encode = bindingInfo.encode, name = bindingInfo.name;
      var binding;
      if (bindingInfo.prioritized != void 0) {
        binding = bindingInfo.prioritized;
      } else if (this.sync_ && bindingInfo.sync != void 0) {
        binding = bindingInfo.sync;
      } else if (this.sync_) {
        user().error(TAG13, "ignoring async replacement key: ", bindingInfo.name);
        binding = "";
      } else {
        binding = bindingInfo.async || bindingInfo.sync;
      }
      if (this.sync_) {
        var result = this.evaluateBindingSync_(binding, name, opt_args);
        return encode ? encodeURIComponent(result) : result;
      } else {
        return this.evaluateBindingAsync_(binding, name, opt_args).then(function(result2) {
          return encode ? encodeURIComponent(result2) : result2;
        });
      }
    };
    _proto.evaluateBindingAsync_ = function evaluateBindingAsync_(binding, name, opt_args) {
      var _this2 = this;
      var value;
      try {
        if (typeof binding === "function") {
          var bindingFunc = binding;
          if (opt_args) {
            value = this.processArgsAsync_(opt_args).then(function(args) {
              return bindingFunc.apply(null, args);
            });
          } else {
            value = tryResolve(bindingFunc);
          }
        } else {
          value = Promise.resolve(binding);
        }
        return value.then(function(val) {
          _this2.maybeCollectVars_(name, val, opt_args);
          var result;
          if (val == null) {
            result = "";
          } else {
            result = val;
          }
          return result;
        }).catch(function(e) {
          rethrowAsync(e);
          _this2.maybeCollectVars_(name, "", opt_args);
          return Promise.resolve("");
        });
      } catch (e) {
        rethrowAsync(e);
        this.maybeCollectVars_(name, "", opt_args);
        return Promise.resolve("");
      }
    };
    _proto.processArgsAsync_ = function processArgsAsync_(argsArray) {
      return Promise.all(argsArray.map(function(argArray) {
        return Promise.all(argArray).then(function(resolved3) {
          return resolved3.join("");
        });
      }));
    };
    _proto.evaluateBindingSync_ = function evaluateBindingSync_(binding, name, opt_args) {
      try {
        var value = binding;
        if (typeof binding === "function") {
          value = binding.apply(null, this.processArgsSync_(opt_args));
        }
        var result;
        if (value && typeof value.then == "function") {
          user().error(TAG13, "ignoring async macro resolution");
          result = "";
        } else if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
          this.maybeCollectVars_(name, value, opt_args);
          result = value.toString();
        } else {
          this.maybeCollectVars_(name, "", opt_args);
          result = "";
        }
        return result;
      } catch (e) {
        rethrowAsync(e);
        this.maybeCollectVars_(name, "", opt_args);
        return "";
      }
    };
    _proto.processArgsSync_ = function processArgsSync_(argsArray) {
      if (!argsArray) {
        return argsArray;
      }
      return argsArray.map(function(argArray) {
        return argArray.join("");
      });
    };
    _proto.maybeCollectVars_ = function maybeCollectVars_(name, value, opt_args) {
      if (!this.collectVars_) {
        return;
      }
      var args = "";
      if (opt_args) {
        var rawArgs = opt_args.filter(function(arg) {
          return arg !== "";
        }).join(",");
        args = "(" + rawArgs + ")";
      }
      this.collectVars_["" + name + args] = value || "";
    };
    return Expander2;
  }();

  // src/service/variable-source.js
  function _extends7() {
    _extends7 = Object.assign || function(target) {
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
    return _extends7.apply(this, arguments);
  }
  var WAITFOR_EVENTS_ENUM = {
    VIEWER_FIRST_VISIBLE: 1,
    DOCUMENT_COMPLETE: 2,
    LOAD: 3,
    LOAD_END: 4
  };
  var NAV_TIMING_WAITFOR_EVENTS = {
    "navigationStart": WAITFOR_EVENTS_ENUM.VIEWER_FIRST_VISIBLE,
    "redirectStart": WAITFOR_EVENTS_ENUM.VIEWER_FIRST_VISIBLE,
    "redirectEnd": WAITFOR_EVENTS_ENUM.VIEWER_FIRST_VISIBLE,
    "fetchStart": WAITFOR_EVENTS_ENUM.VIEWER_FIRST_VISIBLE,
    "domainLookupStart": WAITFOR_EVENTS_ENUM.VIEWER_FIRST_VISIBLE,
    "domainLookupEnd": WAITFOR_EVENTS_ENUM.VIEWER_FIRST_VISIBLE,
    "connectStart": WAITFOR_EVENTS_ENUM.VIEWER_FIRST_VISIBLE,
    "secureConnectionStart": WAITFOR_EVENTS_ENUM.VIEWER_FIRST_VISIBLE,
    "connectEnd": WAITFOR_EVENTS_ENUM.VIEWER_FIRST_VISIBLE,
    "requestStart": WAITFOR_EVENTS_ENUM.VIEWER_FIRST_VISIBLE,
    "responseStart": WAITFOR_EVENTS_ENUM.VIEWER_FIRST_VISIBLE,
    "responseEnd": WAITFOR_EVENTS_ENUM.VIEWER_FIRST_VISIBLE,
    "domLoading": WAITFOR_EVENTS_ENUM.DOCUMENT_COMPLETE,
    "domInteractive": WAITFOR_EVENTS_ENUM.DOCUMENT_COMPLETE,
    "domContentLoaded": WAITFOR_EVENTS_ENUM.DOCUMENT_COMPLETE,
    "domComplete": WAITFOR_EVENTS_ENUM.DOCUMENT_COMPLETE,
    "loadEventStart": WAITFOR_EVENTS_ENUM.LOAD,
    "loadEventEnd": WAITFOR_EVENTS_ENUM.LOAD_END
  };
  function getTimingDataAsync(win, startEvent, endEvent) {
    var startWaitForEvent = NAV_TIMING_WAITFOR_EVENTS[startEvent] || WAITFOR_EVENTS_ENUM.LOAD;
    var endWaitForEvent = endEvent ? NAV_TIMING_WAITFOR_EVENTS[endEvent] || WAITFOR_EVENTS_ENUM.LOAD : startWaitForEvent;
    var waitForEvent = Math.max(startWaitForEvent, endWaitForEvent);
    var readyPromise;
    if (waitForEvent === WAITFOR_EVENTS_ENUM.VIEWER_FIRST_VISIBLE) {
      readyPromise = resolvedPromise();
    } else if (waitForEvent === WAITFOR_EVENTS_ENUM.DOCUMENT_COMPLETE) {
      readyPromise = whenDocumentComplete(win.document);
    } else if (waitForEvent === WAITFOR_EVENTS_ENUM.LOAD) {
      readyPromise = loadPromise(win);
    } else if (waitForEvent === WAITFOR_EVENTS_ENUM.LOAD_END) {
      var timer2 = Services.timerFor(win);
      readyPromise = loadPromise(win).then(function() {
        return timer2.promise(1);
      });
    }
    devAssert2(readyPromise, "waitForEvent not supported " + waitForEvent);
    return readyPromise.then(function() {
      return getTimingDataSync(win, startEvent, endEvent);
    });
  }
  function getTimingDataSync(win, startEvent, endEvent) {
    var timingInfo = win["performance"] && win["performance"]["timing"];
    if (!timingInfo || timingInfo["navigationStart"] == 0) {
      return;
    }
    var metric = endEvent === void 0 ? timingInfo[startEvent] : timingInfo[endEvent] - timingInfo[startEvent];
    if (!isFiniteNumber(metric) || metric < 0) {
      return;
    } else {
      return metric;
    }
  }
  function getNavigationData(win, attribute) {
    var navigationInfo = win["performance"] && win["performance"]["navigation"];
    if (!navigationInfo || navigationInfo[attribute] === void 0) {
      return;
    }
    return navigationInfo[attribute];
  }
  var VariableSource = /* @__PURE__ */ function() {
    function VariableSource2(ampdoc2) {
      this.ampdoc = ampdoc2;
      this.replacements_ = Object.create(null);
      this.initialized_ = false;
      this.getUrlMacroAllowlist_();
    }
    var _proto = VariableSource2.prototype;
    _proto.initialize_ = function initialize_() {
      this.initialize();
      this.initialized_ = true;
    };
    _proto.initialize = function initialize() {
    };
    _proto.get = function get(name) {
      if (!this.initialized_) {
        this.initialize_();
      }
      return this.replacements_[name];
    };
    _proto.set = function set(varName, syncResolver) {
      devAssert2(varName.indexOf("RETURN") == -1);
      this.replacements_[varName] = this.replacements_[varName] || {
        sync: void 0,
        async: void 0
      };
      this.replacements_[varName].sync = syncResolver;
      return this;
    };
    _proto.setAsync = function setAsync(varName, asyncResolver) {
      devAssert2(varName.indexOf("RETURN") == -1);
      this.replacements_[varName] = this.replacements_[varName] || {
        sync: void 0,
        async: void 0
      };
      this.replacements_[varName].async = asyncResolver;
      return this;
    };
    _proto.setBoth = function setBoth(varName, syncResolver, asyncResolver) {
      return this.set(varName, syncResolver).setAsync(varName, asyncResolver);
    };
    _proto.getExpr = function getExpr(opt_bindings, opt_allowlist) {
      if (!this.initialized_) {
        this.initialize_();
      }
      var all = _extends7({}, this.replacements_, opt_bindings);
      return this.buildExpr_(Object.keys(all), opt_allowlist);
    };
    _proto.buildExpr_ = function buildExpr_(keys, opt_allowlist) {
      var _this = this;
      if (this.getUrlMacroAllowlist_()) {
        keys = keys.filter(function(key) {
          return _this.getUrlMacroAllowlist_().includes(key);
        });
      }
      if (opt_allowlist) {
        keys = keys.filter(function(key) {
          return opt_allowlist[key];
        });
      }
      if (keys.length === 0) {
        var regexThatMatchesNothing = /_^/g;
        return regexThatMatchesNothing;
      }
      keys.sort(function(s1, s2) {
        return s2.length - s1.length;
      });
      var escaped = keys.map(function(key) {
        if (key[0] === "$") {
          return "\\" + key;
        }
        return key;
      });
      var all = escaped.join("|");
      var regexStr = "\\$?(" + all + ")";
      return new RegExp(regexStr, "g");
    };
    _proto.getUrlMacroAllowlist_ = function getUrlMacroAllowlist_() {
      if (this.variableAllowlist_) {
        return this.variableAllowlist_;
      }
      if (this.ampdoc.isSingleDoc()) {
        var doc = this.ampdoc.getRootNode();
        if (isAmp4Email(doc)) {
          this.variableAllowlist_ = [""];
          return this.variableAllowlist_;
        }
      }
    };
    return VariableSource2;
  }();

  // src/service/url-replacements-impl.js
  function _inherits10(subClass2, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass2.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass2, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf10(subClass2, superClass);
  }
  function _setPrototypeOf10(o, p) {
    _setPrototypeOf10 = Object.setPrototypeOf || function _setPrototypeOf11(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf10(o, p);
  }
  function _createSuper10(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct10();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf10(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf10(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn10(this, result);
    };
  }
  function _possibleConstructorReturn10(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized10(self2);
  }
  function _assertThisInitialized10(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct10() {
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
  function _getPrototypeOf10(o) {
    _getPrototypeOf10 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf11(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf10(o);
  }
  var TAG14 = "UrlReplacements";
  var EXPERIMENT_DELIMITER = "!";
  var VARIANT_DELIMITER = ".";
  var GEO_DELIM = ",";
  var ORIGINAL_HREF_PROPERTY = "amp-original-href";
  var ORIGINAL_VALUE_PROPERTY = "amp-original-value";
  function dateMethod(method) {
    return function() {
      return new Date()[method]();
    };
  }
  function screenProperty(screen, property) {
    return function() {
      return screen[property];
    };
  }
  function geoData(geo, geoType) {
    if (geoType) {
      userAssert2(geoType === "ISOCountry", "The value passed to AMP_GEO() is not valid name:" + geoType);
      return geo && geo[geoType] || "unknown";
    }
    return (geo == null ? void 0 : geo.matchedISOCountryGroups.join(GEO_DELIM)) || "unknown";
  }
  var GlobalVariableSource = /* @__PURE__ */ function(_VariableSource) {
    _inherits10(GlobalVariableSource2, _VariableSource);
    var _super = _createSuper10(GlobalVariableSource2);
    function GlobalVariableSource2(ampdoc2) {
      var _this;
      _this = _super.call(this, ampdoc2);
      _this.cachedGeo_ = null;
      return _this;
    }
    var _proto = GlobalVariableSource2.prototype;
    _proto.setTimingResolver_ = function setTimingResolver_(varName, startEvent, endEvent) {
      var _this2 = this;
      return this.setBoth(varName, function() {
        return getTimingDataSync(_this2.ampdoc.win, startEvent, endEvent);
      }, function() {
        return getTimingDataAsync(_this2.ampdoc.win, startEvent, endEvent);
      });
    };
    _proto.initialize = function initialize() {
      var _this3 = this;
      var win = this.ampdoc.win;
      var element = this.ampdoc.getHeadNode();
      var viewport = Services.viewportForDoc(this.ampdoc);
      Services.geoForDocOrNull(this.ampdoc).then(function(geo) {
        _this3.cachedGeo_ = geo;
      });
      this.set("RANDOM", function() {
        return Math.random();
      });
      var counterStore = Object.create(null);
      this.set("COUNTER", function(scope) {
        return counterStore[scope] = (counterStore[scope] | 0) + 1;
      });
      this.set("CANONICAL_URL", function() {
        return _this3.getDocInfo_().canonicalUrl;
      });
      this.set("CANONICAL_HOST", function() {
        return parseUrlDeprecated(_this3.getDocInfo_().canonicalUrl).host;
      });
      this.set("CANONICAL_HOSTNAME", function() {
        return parseUrlDeprecated(_this3.getDocInfo_().canonicalUrl).hostname;
      });
      this.set("CANONICAL_PATH", function() {
        return parseUrlDeprecated(_this3.getDocInfo_().canonicalUrl).pathname;
      });
      this.setAsync("DOCUMENT_REFERRER", function() {
        return Services.viewerForDoc(_this3.ampdoc).getReferrerUrl();
      });
      this.setAsync("EXTERNAL_REFERRER", function() {
        return Services.viewerForDoc(_this3.ampdoc).getReferrerUrl().then(function(referrer) {
          if (!referrer) {
            return null;
          }
          var referrerHostname = parseUrlDeprecated(getSourceUrl(referrer)).hostname;
          var currentHostname = WindowInterface.getHostname(win);
          return referrerHostname === currentHostname ? null : referrer;
        });
      });
      this.set("TITLE", function() {
        var doc = win.document;
        return doc["originalTitle"] || doc.title;
      });
      this.set("AMPDOC_URL", function() {
        return removeFragment(_this3.addReplaceParamsIfMissing_(win.location.href));
      });
      this.set("AMPDOC_HOST", function() {
        var url = parseUrlDeprecated(win.location.href);
        return url && url.host;
      });
      this.set("AMPDOC_HOSTNAME", function() {
        var url = parseUrlDeprecated(win.location.href);
        return url && url.hostname;
      });
      var expandSourceUrl = function expandSourceUrl2() {
        var docInfo = _this3.getDocInfo_();
        return removeFragment(_this3.addReplaceParamsIfMissing_(docInfo.sourceUrl));
      };
      this.setBoth("SOURCE_URL", function() {
        return expandSourceUrl();
      }, function() {
        return getTrackImpressionPromise().then(function() {
          return expandSourceUrl();
        });
      });
      this.set("SOURCE_HOST", function() {
        return parseUrlDeprecated(_this3.getDocInfo_().sourceUrl).host;
      });
      this.set("SOURCE_HOSTNAME", function() {
        return parseUrlDeprecated(_this3.getDocInfo_().sourceUrl).hostname;
      });
      this.set("SOURCE_PATH", function() {
        return parseUrlDeprecated(_this3.getDocInfo_().sourceUrl).pathname;
      });
      this.set("PAGE_VIEW_ID", function() {
        return _this3.getDocInfo_().pageViewId;
      });
      this.setAsync("PAGE_VIEW_ID_64", function() {
        return _this3.getDocInfo_().pageViewId64;
      });
      this.setBoth("QUERY_PARAM", function(param, defaultValue) {
        if (defaultValue === void 0) {
          defaultValue = "";
        }
        return _this3.getQueryParamData_(param, defaultValue);
      }, function(param, defaultValue) {
        if (defaultValue === void 0) {
          defaultValue = "";
        }
        return getTrackImpressionPromise().then(function() {
          return _this3.getQueryParamData_(param, defaultValue);
        });
      });
      this.set("FRAGMENT_PARAM", function(param, defaultValue) {
        if (defaultValue === void 0) {
          defaultValue = "";
        }
        return _this3.getFragmentParamData_(param, defaultValue);
      });
      var clientIds = null;
      this.setBoth("CLIENT_ID", function(scope) {
        if (!clientIds) {
          return null;
        }
        return clientIds[scope];
      }, function(scope, opt_userNotificationId, opt_cookieName, opt_disableBackup) {
        userAssert2(scope, "The first argument to CLIENT_ID, the fallback Cookie name, is required");
        var consent = resolvedPromise();
        if (opt_userNotificationId) {
          consent = Services.userNotificationManagerForDoc(element).then(function(service) {
            return service.get(opt_userNotificationId);
          });
        }
        return Services.cidForDoc(_this3.ampdoc).then(function(cid) {
          opt_disableBackup = opt_disableBackup == "true" ? true : false;
          return cid.get({
            scope: scope,
            createCookieIfNotPresent: true,
            cookieName: opt_cookieName || void 0,
            disableBackup: opt_disableBackup
          }, consent);
        }).then(function(cid) {
          if (!clientIds) {
            clientIds = Object.create(null);
          }
          var cookieName = opt_cookieName || scope;
          if (cid && cookieName == "_ga") {
            if (typeof cid === "string") {
              cid = extractClientIdFromGaCookie(cid);
            } else {
              dev().error(TAG14, "non-string cid, what is it?", Object.keys(cid));
            }
          }
          clientIds[scope] = cid;
          return cid;
        });
      });
      this.setAsync("VARIANT", function(experiment) {
        return _this3.getVariantsValue_(function(variants) {
          var variant = variants[experiment];
          userAssert2(variant !== void 0, "The value passed to VARIANT() is not a valid experiment in <amp-experiment>:" + experiment);
          return variant === null ? "none" : variant;
        }, "VARIANT");
      });
      this.setAsync("VARIANTS", function() {
        return _this3.getVariantsValue_(function(variants) {
          var experiments = [];
          for (var experiment in variants) {
            var variant = variants[experiment];
            experiments.push(experiment + VARIANT_DELIMITER + (variant || "none"));
          }
          return experiments.join(EXPERIMENT_DELIMITER);
        }, "VARIANTS");
      });
      this.setBoth("AMP_GEO", function(geoType) {
        return geoData(_this3.cachedGeo_, geoType);
      }, function(geoType) {
        return _this3.getGeo_(function(geo) {
          return geoData(geo, geoType);
        }, "AMP_GEO");
      });
      this.set("TIMESTAMP", dateMethod("getTime"));
      this.set("TIMESTAMP_ISO", dateMethod("toISOString"));
      this.set("TIMEZONE", dateMethod("getTimezoneOffset"));
      this.set("SCROLL_HEIGHT", function() {
        return viewport.getScrollHeight();
      });
      this.set("SCROLL_WIDTH", function() {
        return viewport.getScrollWidth();
      });
      this.set("VIEWPORT_HEIGHT", function() {
        return viewport.getHeight();
      });
      this.set("VIEWPORT_WIDTH", function() {
        return viewport.getWidth();
      });
      var screen = win.screen;
      this.set("SCREEN_WIDTH", screenProperty(screen, "width"));
      this.set("SCREEN_HEIGHT", screenProperty(screen, "height"));
      this.set("AVAILABLE_SCREEN_HEIGHT", screenProperty(screen, "availHeight"));
      this.set("AVAILABLE_SCREEN_WIDTH", screenProperty(screen, "availWidth"));
      this.set("SCREEN_COLOR_DEPTH", screenProperty(screen, "colorDepth"));
      this.set("DOCUMENT_CHARSET", function() {
        var doc = win.document;
        return doc.characterSet || doc.charset;
      });
      this.set("BROWSER_LANGUAGE", function() {
        var nav = win.navigator;
        return (nav.language || nav["userLanguage"] || nav.browserLanguage || "").toLowerCase();
      });
      this.set("USER_AGENT", function() {
        return win.navigator.userAgent;
      });
      this.setAsync("UACH", function(variable) {
        var _win$navigator, _win$navigator$userAg, _win$navigator$userAg2;
        return ((_win$navigator = win.navigator) == null ? void 0 : (_win$navigator$userAg = _win$navigator.userAgentData) == null ? void 0 : (_win$navigator$userAg2 = _win$navigator$userAg.getHighEntropyValues([variable])) == null ? void 0 : _win$navigator$userAg2.then(function(values2) {
          return typeof values2[variable] !== "object" ? values2[variable] : JSON.stringify(values2[variable]);
        })) || Promise.resolve("");
      });
      this.setTimingResolver_("PAGE_LOAD_TIME", "navigationStart", "loadEventStart");
      this.setTimingResolver_("DOMAIN_LOOKUP_TIME", "domainLookupStart", "domainLookupEnd");
      this.setTimingResolver_("TCP_CONNECT_TIME", "connectStart", "connectEnd");
      this.setTimingResolver_("SERVER_RESPONSE_TIME", "requestStart", "responseStart");
      this.setTimingResolver_("PAGE_DOWNLOAD_TIME", "responseStart", "responseEnd");
      this.setTimingResolver_("REDIRECT_TIME", "navigationStart", "fetchStart");
      this.setTimingResolver_("DOM_INTERACTIVE_TIME", "navigationStart", "domInteractive");
      this.setTimingResolver_("CONTENT_LOAD_TIME", "navigationStart", "domContentLoadedEventStart");
      this.setAsync("ACCESS_READER_ID", function() {
        return _this3.getAccessValue_(function(accessService) {
          return accessService.getAccessReaderId();
        }, "ACCESS_READER_ID");
      });
      this.setAsync("AUTHDATA", function(field) {
        userAssert2(field, "The first argument to AUTHDATA, the field, is required");
        return _this3.getAccessValue_(function(accessService) {
          return accessService.getAuthdataField(field);
        }, "AUTHDATA");
      });
      this.setAsync("VIEWER", function() {
        return Services.viewerForDoc(_this3.ampdoc).getViewerOrigin().then(function(viewer) {
          return viewer == void 0 ? "" : viewer;
        });
      });
      this.setAsync("TOTAL_ENGAGED_TIME", function() {
        return Services.activityForDoc(element).then(function(activity) {
          return activity.getTotalEngagedTime();
        });
      });
      this.setAsync("INCREMENTAL_ENGAGED_TIME", function(name, reset) {
        return Services.activityForDoc(element).then(function(activity) {
          return activity.getIncrementalEngagedTime(name, reset !== "false");
        });
      });
      this.set("NAV_TIMING", function(startAttribute, endAttribute) {
        userAssert2(startAttribute, "The first argument to NAV_TIMING, the start attribute name, is required");
        return getTimingDataSync(win, startAttribute, endAttribute);
      });
      this.setAsync("NAV_TIMING", function(startAttribute, endAttribute) {
        userAssert2(startAttribute, "The first argument to NAV_TIMING, the start attribute name, is required");
        return getTimingDataAsync(win, startAttribute, endAttribute);
      });
      this.set("NAV_TYPE", function() {
        return getNavigationData(win, "type");
      });
      this.set("NAV_REDIRECT_COUNT", function() {
        return getNavigationData(win, "redirectCount");
      });
      this.set("AMP_VERSION", function() {
        return version();
      });
      this.set("BACKGROUND_STATE", function() {
        return _this3.ampdoc.isVisible() ? "0" : "1";
      });
      this.setAsync("VIDEO_STATE", function(id, property) {
        return Services.videoManagerForDoc(_this3.ampdoc).getVideoStateProperty(id, property);
      });
      this.setAsync("AMP_STATE", function(key) {
        var root = _this3.ampdoc.getRootNode();
        var element2 = root.documentElement || root;
        return Services.bindForDocOrNull(element2).then(function(bind) {
          if (!bind) {
            return "";
          }
          return bind.getStateValue(key) || "";
        });
      });
    };
    _proto.addReplaceParamsIfMissing_ = function addReplaceParamsIfMissing_(orig) {
      var _this$getDocInfo_ = this.getDocInfo_(), replaceParams = _this$getDocInfo_.replaceParams;
      if (!replaceParams) {
        return orig;
      }
      return addMissingParamsToUrl(removeAmpJsParamsFromUrl(orig), replaceParams);
    };
    _proto.getDocInfo_ = function getDocInfo_() {
      return Services.documentInfoForDoc(this.ampdoc);
    };
    _proto.getAccessValue_ = function getAccessValue_(getter, expr) {
      var element = this.ampdoc.getHeadNode();
      return Promise.all([Services.accessServiceForDocOrNull(element), Services.subscriptionsServiceForDocOrNull(element)]).then(function(services) {
        var accessService = services[0];
        var subscriptionService = services[1];
        var service = accessService || subscriptionService;
        if (!service) {
          user().error(TAG14, "Access or subsciptions service is not installed to access: ", expr);
          return null;
        }
        if (accessService && subscriptionService) {
          return getter(subscriptionService) || getter(accessService);
        }
        return getter(service);
      });
    };
    _proto.getQueryParamData_ = function getQueryParamData_(param, defaultValue) {
      userAssert2(param, "The first argument to QUERY_PARAM, the query string param is required");
      var url = parseUrlDeprecated(removeAmpJsParamsFromUrl(this.ampdoc.win.location.href));
      var params = parseQueryString(url.search);
      var _this$getDocInfo_2 = this.getDocInfo_(), replaceParams = _this$getDocInfo_2.replaceParams;
      if (typeof params[param] !== "undefined") {
        return params[param];
      }
      if (replaceParams && typeof replaceParams[param] !== "undefined") {
        return replaceParams[param];
      }
      return defaultValue;
    };
    _proto.getFragmentParamData_ = function getFragmentParamData_(param, defaultValue) {
      userAssert2(param, "The first argument to FRAGMENT_PARAM, the fragment string param is required");
      userAssert2(typeof param == "string", "param should be a string");
      var params = getHashParams(this.ampdoc.win);
      return params[param] === void 0 ? defaultValue : params[param];
    };
    _proto.getVariantsValue_ = function getVariantsValue_(getter, expr) {
      return Services.variantsForDocOrNull(this.ampdoc.getHeadNode()).then(function(variants) {
        userAssert2(variants, "To use variable %s, amp-experiment should be configured", expr);
        return variants.getVariants();
      }).then(function(variantsMap) {
        return getter(variantsMap);
      });
    };
    _proto.getGeo_ = function getGeo_(getter, expr) {
      var _this4 = this;
      if (this.cachedGeo_ !== null) {
        return getter(this.cachedGeo_);
      }
      return Services.geoForDocOrNull(this.ampdoc.getHeadNode()).then(function(geo) {
        userAssert2(geo, "To use variable %s, amp-geo should be configured", expr);
        _this4.cachedGeo_ = geo;
        return getter(geo);
      });
    };
    return GlobalVariableSource2;
  }(VariableSource);
  var UrlReplacements = /* @__PURE__ */ function() {
    function UrlReplacements2(ampdoc2, variableSource) {
      this.ampdoc = ampdoc2;
      this.variableSource_ = variableSource;
    }
    var _proto2 = UrlReplacements2.prototype;
    _proto2.expandStringSync = function expandStringSync(source, opt_bindings, opt_allowlist) {
      return new Expander(this.variableSource_, opt_bindings, void 0, true, opt_allowlist, true).expand(source);
    };
    _proto2.expandStringAsync = function expandStringAsync(source, opt_bindings, opt_allowlist) {
      return new Expander(this.variableSource_, opt_bindings, void 0, void 0, opt_allowlist, true).expand(source);
    };
    _proto2.expandUrlSync = function expandUrlSync(url, opt_bindings, opt_allowlist) {
      return this.ensureProtocolMatches_(url, new Expander(this.variableSource_, opt_bindings, void 0, true, opt_allowlist).expand(url));
    };
    _proto2.expandUrlAsync = function expandUrlAsync(url, opt_bindings, opt_allowlist, opt_noEncode) {
      var _this5 = this;
      return new Expander(this.variableSource_, opt_bindings, void 0, void 0, opt_allowlist, opt_noEncode).expand(url).then(function(replacement) {
        return _this5.ensureProtocolMatches_(url, replacement);
      });
    };
    _proto2.expandInputValueAsync = function expandInputValueAsync(element) {
      return this.expandInputValue_(element, false);
    };
    _proto2.expandInputValueSync = function expandInputValueSync(element) {
      return this.expandInputValue_(element, true);
    };
    _proto2.expandInputValue_ = function expandInputValue_(element, opt_sync) {
      devAssert2(element.tagName == "INPUT" && (element.getAttribute("type") || "").toLowerCase() == "hidden", "Input value expansion only works on hidden input fields: %s", element);
      var allowlist = this.getAllowlistForElement_(element);
      if (!allowlist) {
        return opt_sync ? element.value : Promise.resolve(element.value);
      }
      if (element[ORIGINAL_VALUE_PROPERTY] === void 0) {
        element[ORIGINAL_VALUE_PROPERTY] = element.value;
      }
      var result = new Expander(this.variableSource_, void 0, void 0, opt_sync, allowlist).expand(element[ORIGINAL_VALUE_PROPERTY] || element.value);
      if (opt_sync) {
        return element.value = result;
      }
      return result.then(function(newValue) {
        element.value = newValue;
        return newValue;
      });
    };
    _proto2.getAllowlistForElement_ = function getAllowlistForElement_(element, opt_supportedReplacement) {
      var allowlist = element.getAttribute("data-amp-replace");
      if (!allowlist) {
        return;
      }
      var requestedReplacements = {};
      allowlist.trim().split(/\s+/).forEach(function(replacement) {
        if (!opt_supportedReplacement || hasOwn(opt_supportedReplacement, replacement)) {
          requestedReplacements[replacement] = true;
        } else {
          user().warn("URL", "Ignoring unsupported replacement", replacement);
        }
      });
      return requestedReplacements;
    };
    _proto2.isAllowedOrigin_ = function isAllowedOrigin_(url) {
      var docInfo = Services.documentInfoForDoc(this.ampdoc);
      if (url.origin == parseUrlDeprecated(docInfo.canonicalUrl).origin || url.origin == parseUrlDeprecated(docInfo.sourceUrl).origin) {
        return true;
      }
      var meta = this.ampdoc.getMetaByName("amp-link-variable-allowed-origin");
      if (meta) {
        var allowlist = meta.trim().split(/\s+/);
        for (var i = 0; i < allowlist.length; i++) {
          if (url.origin == parseUrlDeprecated(allowlist[i]).origin) {
            return true;
          }
        }
      }
      return false;
    };
    _proto2.maybeExpandLink = function maybeExpandLink(element, defaultUrlParams) {
      devAssert2(element.tagName == "A");
      var aElement = element;
      var supportedReplacements = {
        "CLIENT_ID": true,
        "QUERY_PARAM": true,
        "PAGE_VIEW_ID": true,
        "PAGE_VIEW_ID_64": true,
        "NAV_TIMING": true
      };
      var additionalUrlParameters = aElement.getAttribute("data-amp-addparams") || "";
      var allowlist = this.getAllowlistForElement_(aElement, supportedReplacements);
      if (!allowlist && !additionalUrlParameters && !defaultUrlParams) {
        return;
      }
      var href = dev().assertString(aElement[ORIGINAL_HREF_PROPERTY] || aElement.getAttribute("href"));
      var url = parseUrlDeprecated(href);
      if (aElement[ORIGINAL_HREF_PROPERTY] == null) {
        aElement[ORIGINAL_HREF_PROPERTY] = href;
      }
      var isAllowedOrigin = this.isAllowedOrigin_(url);
      if (additionalUrlParameters) {
        additionalUrlParameters = isAllowedOrigin ? this.expandSyncIfAllowedList_(additionalUrlParameters, allowlist) : additionalUrlParameters;
        href = addParamsToUrl(href, parseQueryString(additionalUrlParameters));
      }
      if (!isAllowedOrigin) {
        if (allowlist) {
          user().warn("URL", "Ignoring link replacement %s because the link does not go to the document's source, canonical, or allowlisted origin.", href);
        }
        return aElement.href = href;
      }
      if (defaultUrlParams) {
        if (!allowlist || !allowlist["QUERY_PARAM"]) {
          var overrideAllowlist = {
            "QUERY_PARAM": true
          };
          defaultUrlParams = this.expandUrlSync(defaultUrlParams, void 0, overrideAllowlist);
        }
        href = addParamsToUrl(href, parseQueryString(defaultUrlParams));
      }
      href = this.expandSyncIfAllowedList_(href, allowlist);
      return aElement.href = href;
    };
    _proto2.expandSyncIfAllowedList_ = function expandSyncIfAllowedList_(href, allowlist) {
      return allowlist ? this.expandUrlSync(href, void 0, allowlist) : href;
    };
    _proto2.collectVars = function collectVars(url, opt_bindings) {
      var vars = Object.create(null);
      return new Expander(this.variableSource_, opt_bindings, vars).expand(url).then(function() {
        return vars;
      });
    };
    _proto2.collectDisallowedVarsSync = function collectDisallowedVarsSync(element) {
      var url = element.getAttribute("src");
      var macroNames = new Expander(this.variableSource_).getMacroNames(url);
      var allowlist = this.getAllowlistForElement_(element);
      if (allowlist) {
        return macroNames.filter(function(v) {
          return !allowlist[v];
        });
      } else {
        return macroNames;
      }
    };
    _proto2.ensureProtocolMatches_ = function ensureProtocolMatches_(url, replacement) {
      var newProtocol = parseUrlDeprecated(replacement, true).protocol;
      var oldProtocol = parseUrlDeprecated(url, true).protocol;
      if (newProtocol != oldProtocol) {
        user().error(TAG14, "Illegal replacement of the protocol: ", url);
        return url;
      }
      userAssert2(isProtocolValid(replacement), "The replacement url has invalid protocol: %s", replacement);
      return replacement;
    };
    _proto2.getVariableSource = function getVariableSource() {
      return this.variableSource_;
    };
    return UrlReplacements2;
  }();
  function extractClientIdFromGaCookie(gaCookie) {
    return gaCookie.replace(/^(GA1|1)\.[\d-]+\./, "");
  }
  function installUrlReplacementsServiceForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, "url-replace", function(doc) {
      return new UrlReplacements(doc, new GlobalVariableSource(doc));
    });
  }

  // src/core/data-structures/curve.js
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

  // src/service/vsync-impl.js
  var FRAME_TIME = 16;
  var Vsync = /* @__PURE__ */ function() {
    function Vsync2(win) {
      this.win = win;
      this.ampdocService_ = Services.ampdocServiceFor(this.win);
      this.raf_ = this.getRaf_();
      this.tasks_ = [];
      this.nextTasks_ = [];
      this.states_ = [];
      this.nextStates_ = [];
      this.scheduled_ = false;
      this.nextFramePromise_ = null;
      this.nextFrameResolver_ = null;
      this.boundRunScheduledTasks_ = this.runScheduledTasks_.bind(this);
      this.invisiblePass_ = new Pass(this.win, this.boundRunScheduledTasks_, FRAME_TIME);
      this.backupPass_ = new Pass(this.win, this.boundRunScheduledTasks_, FRAME_TIME * 2.5);
      this.boundOnVisibilityChanged_ = this.onVisibilityChanged_.bind(this);
      if (this.ampdocService_.isSingleDoc()) {
        this.ampdocService_.getSingleDoc().onVisibilityChanged(this.boundOnVisibilityChanged_);
      } else {
        addDocumentVisibilityChangeListener(this.win.document, this.boundOnVisibilityChanged_);
      }
    }
    var _proto = Vsync2.prototype;
    _proto.dispose = function dispose() {
      removeDocumentVisibilityChangeListener(this.win.document, this.boundOnVisibilityChanged_);
    };
    _proto.onVisibilityChanged_ = function onVisibilityChanged_() {
      if (this.scheduled_) {
        this.forceSchedule_();
      }
    };
    _proto.run = function run(task, opt_state) {
      this.tasks_.push(task);
      this.states_.push(opt_state || void 0);
      this.schedule_();
    };
    _proto.runPromise = function runPromise(task, opt_state) {
      this.run(task, opt_state);
      if (this.nextFramePromise_) {
        return this.nextFramePromise_;
      }
      var deferred = new Deferred();
      this.nextFrameResolver_ = deferred.resolve;
      return this.nextFramePromise_ = deferred.promise;
    };
    _proto.createTask = function createTask(task) {
      var _this = this;
      return function(opt_state) {
        _this.run(task, opt_state);
      };
    };
    _proto.mutate = function mutate(mutator) {
      this.run({
        measure: void 0,
        mutate: mutator
      });
    };
    _proto.mutatePromise = function mutatePromise(mutator) {
      return this.runPromise({
        measure: void 0,
        mutate: mutator
      });
    };
    _proto.measure = function measure(measurer) {
      this.run({
        measure: measurer,
        mutate: void 0
      });
    };
    _proto.measurePromise = function measurePromise(measurer) {
      var _this2 = this;
      return new Promise(function(resolve) {
        _this2.measure(function() {
          resolve(measurer());
        });
      });
    };
    _proto.canAnimate = function canAnimate(contextNode) {
      return this.canAnimate_(devAssert2(contextNode));
    };
    _proto.canAnimate_ = function canAnimate_(opt_contextNode) {
      if (isDocumentHidden(this.win.document)) {
        return false;
      }
      if (this.ampdocService_.isSingleDoc()) {
        return this.ampdocService_.getSingleDoc().isVisible();
      }
      if (opt_contextNode) {
        var ampdoc2 = this.ampdocService_.getAmpDocIfAvailable(opt_contextNode);
        return !ampdoc2 || ampdoc2.isVisible();
      }
      return true;
    };
    _proto.runAnim = function runAnim(contextNode, task, opt_state) {
      if (!this.canAnimate_(contextNode)) {
        dev().warn("VSYNC", "Did not schedule a vsync request, because document was invisible");
        return false;
      }
      this.run(task, opt_state);
      return true;
    };
    _proto.createAnimTask = function createAnimTask(contextNode, task) {
      var _this3 = this;
      return function(opt_state) {
        return _this3.runAnim(contextNode, task, opt_state);
      };
    };
    _proto.runAnimMutateSeries = function runAnimMutateSeries(contextNode, mutator, opt_timeout) {
      var _this4 = this;
      if (!this.canAnimate_(contextNode)) {
        return Promise.reject(cancellation());
      }
      return new Promise(function(resolve, reject) {
        var startTime = Date.now();
        var prevTime = 0;
        var task = _this4.createAnimTask(contextNode, {
          mutate: function mutate(state) {
            var timeSinceStart = Date.now() - startTime;
            var res = mutator(timeSinceStart, timeSinceStart - prevTime, state);
            if (!res) {
              resolve();
            } else if (opt_timeout && timeSinceStart > opt_timeout) {
              reject(new Error("timeout"));
            } else {
              prevTime = timeSinceStart;
              task(state);
            }
          }
        });
        task({});
      });
    };
    _proto.schedule_ = function schedule_() {
      if (this.scheduled_) {
        return;
      }
      this.scheduled_ = true;
      this.forceSchedule_();
    };
    _proto.forceSchedule_ = function forceSchedule_() {
      if (this.canAnimate_()) {
        this.raf_(this.boundRunScheduledTasks_);
        this.backupPass_.schedule();
      } else {
        this.invisiblePass_.schedule();
      }
    };
    _proto.runScheduledTasks_ = function runScheduledTasks_() {
      this.backupPass_.cancel();
      this.scheduled_ = false;
      var resolver = this.nextFrameResolver_, states = this.states_, tasks = this.tasks_;
      this.nextFrameResolver_ = null;
      this.nextFramePromise_ = null;
      this.tasks_ = this.nextTasks_;
      this.states_ = this.nextStates_;
      for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].measure) {
          if (!callTask_(tasks[i].measure, states[i])) {
            tasks[i].mutate = void 0;
          }
        }
      }
      for (var _i = 0; _i < tasks.length; _i++) {
        if (tasks[_i].mutate) {
          callTask_(tasks[_i].mutate, states[_i]);
        }
      }
      this.nextTasks_ = tasks;
      this.nextStates_ = states;
      this.nextTasks_.length = 0;
      this.nextStates_.length = 0;
      if (resolver) {
        resolver();
      }
    };
    _proto.getRaf_ = function getRaf_() {
      var _this5 = this;
      var raf = this.win.requestAnimationFrame || this.win.webkitRequestAnimationFrame;
      if (raf) {
        return raf.bind(this.win);
      }
      var lastTime = 0;
      return function(fn) {
        var now = Date.now();
        var timeToCall = Math.max(0, FRAME_TIME - (now - lastTime));
        lastTime = now + timeToCall;
        _this5.win.setTimeout(fn, timeToCall);
      };
    };
    return Vsync2;
  }();
  function callTask_(callback, state) {
    devAssert2(callback);
    try {
      var ret = callback(state);
      if (ret !== void 0) {
        dev().error("VSYNC", "callback returned a value but vsync cannot propogate it: %s", callback.toString());
      }
    } catch (e) {
      rethrowAsync(e);
      return false;
    }
    return true;
  }
  function installVsyncService(window) {
    installTimerService(window);
    registerServiceBuilder(window, "vsync", Vsync);
  }

  // src/document-submit.js
  function installGlobalSubmitListenerForDoc(ampdoc2) {
    return ampdoc2.whenExtensionsKnown().then(function() {
      if (ampdoc2.declaresExtension("amp-form")) {
        ampdoc2.getRootNode().addEventListener("submit", onDocumentFormSubmit_, true);
      }
    });
  }
  function onDocumentFormSubmit_(e) {
    if (e.defaultPrevented) {
      return;
    }
    var form = dev().assertElement(e.target);
    if (!form || form.tagName != "FORM") {
      return;
    }
    var isAmpFormMarked = form.classList.contains("i-amphtml-form");
    var shouldValidate;
    if (isAmpFormMarked) {
      shouldValidate = !form.hasAttribute("amp-novalidate");
    } else {
      shouldValidate = !form.hasAttribute("novalidate");
    }
    if (shouldValidate && form.checkValidity && !form.checkValidity()) {
      e.preventDefault();
    }
    var inputs = form.elements;
    for (var i = 0; i < inputs.length; i++) {
      userAssert2(!inputs[i].name || inputs[i].name != SOURCE_ORIGIN_PARAM, "Illegal input name, %s found: %s", SOURCE_ORIGIN_PARAM, inputs[i]);
    }
    var action = form.getAttribute("action");
    var actionXhr = form.getAttribute("action-xhr");
    var method = (form.getAttribute("method") || "GET").toUpperCase();
    if (actionXhr) {
      assertHttpsUrl(actionXhr, form, "action-xhr");
      userAssert2(!isProxyOrigin(actionXhr), "form action-xhr should not be on AMP CDN: %s", form);
      checkCorsUrl(actionXhr);
    }
    if (action) {
      assertHttpsUrl(action, form, "action");
      userAssert2(!isProxyOrigin(action), "form action should not be on AMP CDN: %s", form);
      checkCorsUrl(action);
    }
    if (method == "GET") {
      userAssert2(actionXhr || action, "form action-xhr or action attribute is required for method=GET: %s", form);
    } else if (method == "POST") {
      if (action) {
        var TAG20 = "form";
        user().error(TAG20, "action attribute is invalid for method=POST: %s", form);
      }
      if (!actionXhr) {
        e.preventDefault();
        userAssert2(false, "Only XHR based (via action-xhr attribute) submissions are support for POST requests. %s", form);
      }
    }
    var target = form.getAttribute("target");
    if (target) {
      userAssert2(target == "_blank" || target == "_top", "form target=%s is invalid can only be _blank or _top: %s", target, form);
    } else {
      form.setAttribute("target", "_top");
    }
    if (actionXhr) {
      e.preventDefault();
      e.stopImmediatePropagation();
      var actions = Services.actionServiceForDoc(form);
      actions.execute(form, "submit", null, form, form, e, ActionTrust_Enum.HIGH);
    }
  }

  // src/input.js
  var TAG_3 = "Input";
  var MAX_MOUSE_CONFIRM_ATTEMPS_ = 3;
  var CLICK_TIMEOUT_ = 300;
  var Input = /* @__PURE__ */ function() {
    function Input2(win) {
      this.win = win;
      this.boundOnKeyDown_ = this.onKeyDown_.bind(this);
      this.boundOnMouseDown_ = this.onMouseDown_.bind(this);
      this.boundOnMouseMove_ = null;
      this.boundMouseCanceled_ = null;
      this.boundMouseConfirmed_ = null;
      this.hasTouch_ = "ontouchstart" in win || win.navigator["maxTouchPoints"] !== void 0 && win.navigator["maxTouchPoints"] > 0 || win["DocumentTouch"] !== void 0;
      dev().fine(TAG_3, "touch detected:", this.hasTouch_);
      this.keyboardActive_ = false;
      this.win.document.addEventListener("keydown", this.boundOnKeyDown_);
      this.win.document.addEventListener("mousedown", this.boundOnMouseDown_);
      this.hasMouse_ = true;
      this.mouseConfirmAttemptCount_ = 0;
      this.touchDetectedObservable_ = new Observable();
      this.mouseDetectedObservable_ = new Observable();
      this.keyboardStateObservable_ = new Observable();
      if (this.hasTouch_) {
        this.hasMouse_ = !this.hasTouch_;
        this.boundOnMouseMove_ = this.onMouseMove_.bind(this);
        listenOnce(win.document, "mousemove", this.boundOnMouseMove_);
      }
    }
    var _proto = Input2.prototype;
    _proto.setupInputModeClasses = function setupInputModeClasses(ampdoc2) {
      var _this = this;
      this.onTouchDetected(function(detected) {
        _this.toggleInputClass_(ampdoc2, "amp-mode-touch", detected);
      }, true);
      this.onMouseDetected(function(detected) {
        _this.toggleInputClass_(ampdoc2, "amp-mode-mouse", detected);
      }, true);
      this.onKeyboardStateChanged(function(active) {
        _this.toggleInputClass_(ampdoc2, "amp-mode-keyboard-active", active);
      }, true);
    };
    _proto.isTouchDetected = function isTouchDetected() {
      return this.hasTouch_;
    };
    _proto.onTouchDetected = function onTouchDetected(handler, opt_fireImmediately) {
      if (opt_fireImmediately) {
        handler(this.isTouchDetected());
      }
      return this.touchDetectedObservable_.add(handler);
    };
    _proto.isMouseDetected = function isMouseDetected() {
      return this.hasMouse_;
    };
    _proto.onMouseDetected = function onMouseDetected(handler, opt_fireImmediately) {
      if (opt_fireImmediately) {
        handler(this.isMouseDetected());
      }
      return this.mouseDetectedObservable_.add(handler);
    };
    _proto.isKeyboardActive = function isKeyboardActive() {
      return this.keyboardActive_;
    };
    _proto.onKeyboardStateChanged = function onKeyboardStateChanged(handler, opt_fireImmediately) {
      if (opt_fireImmediately) {
        handler(this.isKeyboardActive());
      }
      return this.keyboardStateObservable_.add(handler);
    };
    _proto.toggleInputClass_ = function toggleInputClass_(ampdoc2, clazz, on) {
      var _this2 = this;
      ampdoc2.waitForBodyOpen().then(function(body) {
        var vsync = Services.vsyncFor(_this2.win);
        vsync.mutate(function() {
          body.classList.toggle(clazz, on);
        });
      });
    };
    _proto.onKeyDown_ = function onKeyDown_(e) {
      if (this.keyboardActive_) {
        return;
      }
      if (e.defaultPrevented) {
        return;
      }
      var target = e.target;
      if (target && (target.tagName == "INPUT" || target.tagName == "TEXTAREA" || target.tagName == "SELECT" || target.tagName == "OPTION" || target.hasAttribute("contenteditable"))) {
        return;
      }
      this.keyboardActive_ = true;
      this.keyboardStateObservable_.fire(true);
      dev().fine(TAG_3, "keyboard activated");
    };
    _proto.onMouseDown_ = function onMouseDown_() {
      if (!this.keyboardActive_) {
        return;
      }
      this.keyboardActive_ = false;
      this.keyboardStateObservable_.fire(false);
      dev().fine(TAG_3, "keyboard deactivated");
    };
    _proto.onMouseMove_ = function onMouseMove_(e) {
      var _this3 = this;
      if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) {
        this.mouseCanceled_();
        return void 0;
      }
      if (!this.boundMouseConfirmed_) {
        this.boundMouseConfirmed_ = this.mouseConfirmed_.bind(this);
        this.boundMouseCanceled_ = this.mouseCanceled_.bind(this);
      }
      var unlisten;
      var listenPromise = listenOncePromise(this.win.document, "click", void 0, function(unlistener) {
        unlisten = unlistener;
      });
      return Services.timerFor(this.win).timeoutPromise(CLICK_TIMEOUT_, listenPromise).then(this.boundMouseCanceled_, function() {
        if (unlisten) {
          unlisten();
        }
        _this3.boundMouseConfirmed_();
      });
    };
    _proto.mouseConfirmed_ = function mouseConfirmed_() {
      this.hasMouse_ = true;
      this.mouseDetectedObservable_.fire(true);
      dev().fine(TAG_3, "mouse detected");
    };
    _proto.mouseCanceled_ = function mouseCanceled_() {
      this.mouseConfirmAttemptCount_++;
      if (this.mouseConfirmAttemptCount_ <= MAX_MOUSE_CONFIRM_ATTEMPS_) {
        listenOnce(this.win.document, "mousemove", this.boundOnMouseMove_);
      } else {
        dev().fine(TAG_3, "mouse detection failed");
      }
    };
    return Input2;
  }();
  function installInputService(win) {
    registerServiceBuilder(win, "input", Input);
  }

  // src/preconnect.js
  var _templateObject2;
  function _taggedTemplateLiteralLoose2(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var ACTIVE_CONNECTION_TIMEOUT_MS = 180 * 1e3;
  var PRECONNECT_TIMEOUT_MS = 10 * 1e3;
  var preconnectFeatures = null;
  function getPreconnectFeatures(win) {
    if (!preconnectFeatures) {
      var linkTag = win.document.createElement("link");
      var tokenList = linkTag["relList"];
      linkTag.as = "invalid-value";
      if (!tokenList || !tokenList.supports) {
        return {};
      }
      preconnectFeatures = {
        preconnect: tokenList.supports("preconnect"),
        preload: tokenList.supports("preload"),
        onlyValidAs: linkTag.as != "invalid-value"
      };
    }
    return preconnectFeatures;
  }
  var PreconnectService = /* @__PURE__ */ function() {
    function PreconnectService2(win) {
      this.document_ = win.document;
      this.head_ = dev().assertElement(win.document.head);
      this.origins_ = {};
      this.urls_ = {};
      this.platform_ = Services.platformFor(win);
      this.origins_[parseUrlDeprecated(win.location.href).origin] = true;
      this.features_ = getPreconnectFeatures(win);
      this.timer_ = Services.timerFor(win);
    }
    var _proto = PreconnectService2.prototype;
    _proto.url = function url(ampdoc2, _url, opt_alsoConnecting) {
      var _this = this;
      ampdoc2.whenFirstVisible().then(function() {
        _this.url_(ampdoc2, _url, opt_alsoConnecting);
      });
    };
    _proto.url_ = function url_(ampdoc2, url, opt_alsoConnecting) {
      if (!this.isInterestingUrl_(url)) {
        return;
      }
      var _parseUrlDeprecated = parseUrlDeprecated(url), origin = _parseUrlDeprecated.origin;
      var now = Date.now();
      var lastPreconnectTimeout = this.origins_[origin];
      if (lastPreconnectTimeout && now < lastPreconnectTimeout) {
        if (opt_alsoConnecting) {
          this.origins_[origin] = now + ACTIVE_CONNECTION_TIMEOUT_MS;
        }
        return;
      }
      var timeout = opt_alsoConnecting ? ACTIVE_CONNECTION_TIMEOUT_MS : PRECONNECT_TIMEOUT_MS;
      this.origins_[origin] = now + timeout;
      var dns;
      if (!this.features_.preconnect) {
        dns = this.document_.createElement("link");
        dns.setAttribute("rel", "dns-prefetch");
        dns.setAttribute("href", origin);
        this.head_.appendChild(dns);
      }
      var preconnect = this.document_.createElement("link");
      preconnect.setAttribute("rel", "preconnect");
      preconnect.setAttribute("href", origin);
      preconnect.setAttribute("referrerpolicy", "origin");
      this.head_.appendChild(preconnect);
      this.timer_.delay(function() {
        if (dns && dns.parentNode) {
          dns.parentNode.removeChild(dns);
        }
        if (preconnect.parentNode) {
          preconnect.parentNode.removeChild(preconnect);
        }
      }, 1e4);
      this.preconnectPolyfill_(ampdoc2, origin);
    };
    _proto.preload = function preload(ampdoc2, url, opt_preloadAs) {
      var _this2 = this;
      if (!this.isInterestingUrl_(url)) {
        return;
      }
      if (this.urls_[url]) {
        return;
      }
      this.urls_[url] = true;
      this.url(ampdoc2, url, true);
      if (!this.features_.preload) {
        return;
      }
      if (opt_preloadAs == "document" && this.platform_.isSafari()) {
        return;
      }
      ampdoc2.whenFirstVisible().then(function() {
        _this2.performPreload_(url);
      });
    };
    _proto.performPreload_ = function performPreload_(url) {
      var preload = htmlFor(this.document_)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose2(['\n        <link rel="preload" referrerpolicy="origin" />'])));
      preload.setAttribute("href", url);
      if (this.features_.onlyValidAs) {
        preload.as = "fetch";
      } else {
        preload.as = "";
      }
      this.head_.appendChild(preload);
    };
    _proto.isInterestingUrl_ = function isInterestingUrl_(url) {
      if (url.startsWith("https:") || url.startsWith("http:")) {
        return true;
      }
      return false;
    };
    _proto.preconnectPolyfill_ = function preconnectPolyfill_(ampdoc2, origin) {
      if (this.features_.preconnect || !(this.platform_.isSafari() || this.platform_.isIos())) {
        return;
      }
      var now = Date.now();
      this.origins_[origin] = now + ACTIVE_CONNECTION_TIMEOUT_MS;
      var cacheBust = now - now % ACTIVE_CONNECTION_TIMEOUT_MS;
      var url = origin + "/robots.txt?_AMP_safari_preconnect_polyfill_cachebust=" + cacheBust;
      var xhr = new XMLHttpRequest();
      xhr.open("HEAD", url, true);
      xhr.withCredentials = true;
      xhr.send();
    };
    return PreconnectService2;
  }();
  function installPreconnectService(window) {
    registerServiceBuilder(window, "preconnect", PreconnectService);
  }

  // src/service/core-services.js
  function installBuiltinElements(win) {
    installImg(win);
    installPixel(win);
    installLayout(win);
  }
  function installRuntimeServices(global) {
    installCryptoService(global);
    installBatchedXhrService(global);
    installPlatformService(global);
    installTimerService(global);
    installVsyncService(global);
    installXhrService(global);
    installInputService(global);
    installPreconnectService(global);
  }

  // src/utils/story.js
  function isStoryDocument(ampdoc2) {
    return ampdoc2.waitForBodyOpen().then(function() {
      var body = ampdoc2.getBody();
      var childPromise = waitForChildPromise(body, function() {
        return !!body.firstElementChild;
      });
      return Services.timerFor(ampdoc2.win).timeoutPromise(2e3, childPromise).then(function() {
        return body.firstElementChild.tagName === "AMP-STORY";
      }, function() {
        return false;
      });
    });
  }

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
      var elements2 = resources.get().filter(function(r) {
        if (opt_prerenderableOnly && !r.prerenderAllowed()) {
          return false;
        }
        return !EXCLUDE_INI_LOAD.includes(r.element.tagName);
      }).map(function(r) {
        return r.element;
      });
      if (elements2.length === 0) {
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
        for (var i = 0; i < Math.min(elements2.length, 100); i++) {
          io.observe(elements2[i]);
        }
      }).then(function(elements3) {
        return Promise.all(elements3.map(function(element) {
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

  // src/service/performance-impl.js
  function _createForOfIteratorHelperLoose11(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray11(o)) || allowArrayLike && o && typeof o.length === "number") {
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
  function _unsupportedIterableToArray11(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray11(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray11(o, minLen);
  }
  function _arrayLikeToArray11(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  var QUEUE_LIMIT = 50;
  var CLS_SESSION_GAP = 1e3;
  var CLS_SESSION_MAX = 5e3;
  var TAG15 = "Performance";
  var ELEMENT_TYPE_ENUM = {
    other: 0,
    image: 1 << 0,
    video: 1 << 1,
    ad: 1 << 2,
    carousel: 1 << 3,
    bcarousel: 1 << 4,
    text: 1 << 5
  };
  function getElementType(node) {
    if (node == null) {
      return ELEMENT_TYPE_ENUM.other;
    }
    var outer = getOutermostAmpElement(node);
    var nodeName = outer.nodeName;
    if (nodeName === "IMG" || nodeName === "AMP-IMG") {
      return ELEMENT_TYPE_ENUM.image;
    }
    if (nodeName === "VIDEO" || nodeName === "AMP-VIDEO") {
      return ELEMENT_TYPE_ENUM.video;
    }
    if (nodeName === "AMP-CAROUSEL") {
      return ELEMENT_TYPE_ENUM.carousel;
    }
    if (nodeName === "AMP-BASE-CAROUSEL") {
      return ELEMENT_TYPE_ENUM.bcarousel;
    }
    if (nodeName === "AMP-AD") {
      return ELEMENT_TYPE_ENUM.ad;
    }
    if (!nodeName.startsWith("AMP-") && outer.textContent) {
      return ELEMENT_TYPE_ENUM.text;
    }
    return ELEMENT_TYPE_ENUM.other;
  }
  var Performance = /* @__PURE__ */ function() {
    function Performance2(win) {
      var _this = this;
      this.win = win;
      this.eventid_ = base64UrlEncodeFromBytes(getCryptoRandomBytesArray(win, 16));
      this.events_ = [];
      this.timeOrigin_ = win.performance.timeOrigin || win.performance.timing.navigationStart;
      this.ampdoc_ = null;
      this.viewer_ = null;
      this.resources_ = null;
      this.documentInfo_ = null;
      this.isMessagingReady_ = false;
      this.isPerformanceTrackingOn_ = false;
      this.enabledExperiments_ = map();
      this.ampexp_ = void 0;
      this.metrics_ = new Signals();
      this.shiftScoresTicked_ = 0;
      this.layoutShiftEntries_ = [];
      this.layoutShiftSum_ = 0;
      var supportedEntryTypes = this.win.PerformanceObserver && this.win.PerformanceObserver.supportedEntryTypes || [];
      if (!supportedEntryTypes.includes("paint")) {
        this.metrics_.rejectSignal(TickLabel_Enum.FIRST_CONTENTFUL_PAINT, dev().createExpectedError("First Contentful Paint not supported"));
      }
      this.supportsLayoutShift_ = supportedEntryTypes.includes("layout-shift");
      if (!this.supportsLayoutShift_) {
        var e = dev().createExpectedError("Cumulative Layout Shift not supported");
        this.metrics_.rejectSignal(TickLabel_Enum.CUMULATIVE_LAYOUT_SHIFT, e);
        this.metrics_.rejectSignal(TickLabel_Enum.CUMULATIVE_LAYOUT_SHIFT_1, e);
      }
      this.supportsEventTiming_ = supportedEntryTypes.includes("first-input");
      if (!this.supportsEventTiming_) {
        this.metrics_.rejectSignal(TickLabel_Enum.FIRST_INPUT_DELAY, dev().createExpectedError("First Input Delay not supported"));
      }
      this.supportsLargestContentfulPaint_ = supportedEntryTypes.includes("largest-contentful-paint");
      if (!this.supportsLargestContentfulPaint_) {
        this.metrics_.rejectSignal(TickLabel_Enum.LARGEST_CONTENTFUL_PAINT, dev().createExpectedError("Largest Contentful Paint not supported"));
      }
      this.supportsNavigation_ = supportedEntryTypes.includes("navigation");
      this.onAmpDocVisibilityChange_ = this.onAmpDocVisibilityChange_.bind(this);
      this.addEnabledExperiment("rtv-" + getMode(this.win).rtvVersion);
      whenDocumentReady(win.document).then(function() {
        _this.tick(TickLabel_Enum.DOCUMENT_READY);
        _this.flush();
      });
      whenDocumentComplete(win.document).then(function() {
        return _this.onload_();
      });
      this.registerPerformanceObserver_();
      this.googleFontExpRecorded_ = false;
      this.debouncedFlushLayoutShiftScore_ = debounce(win, function() {
        _this.flushLayoutShiftScore_();
      }, CLS_SESSION_MAX + 1e3);
    }
    var _proto = Performance2.prototype;
    _proto.coreServicesAvailable = function coreServicesAvailable() {
      var _this2 = this;
      var documentElement = this.win.document.documentElement;
      this.ampdoc_ = Services.ampdoc(documentElement);
      this.viewer_ = Services.viewerForDoc(documentElement);
      this.resources_ = Services.resourcesForDoc(documentElement);
      this.documentInfo_ = Services.documentInfoForDoc(this.ampdoc_);
      this.isPerformanceTrackingOn_ = this.viewer_.isEmbedded() && this.viewer_.getParam("csi") === "1";
      this.ampdoc_.onVisibilityChanged(this.flush.bind(this));
      this.measureUserPerceivedVisualCompletenessTime_();
      var channelPromise = this.viewer_.whenMessagingReady();
      this.ampdoc_.whenFirstVisible().then(function() {
        _this2.tick(TickLabel_Enum.ON_FIRST_VISIBLE);
        _this2.flush();
      });
      var registerVisibilityChangeListener = this.supportsLargestContentfulPaint_ || this.supportsLayoutShift_;
      if (registerVisibilityChangeListener) {
        this.ampdoc_.onVisibilityChanged(this.onAmpDocVisibilityChange_);
      }
      if (!channelPromise) {
        return resolvedPromise();
      }
      return channelPromise.then(function() {
        _this2.tickDelta(TickLabel_Enum.MESSAGING_READY, _this2.win.performance.now());
        _this2.tick(TickLabel_Enum.TIME_ORIGIN, void 0, _this2.timeOrigin_);
        var usqp = _this2.ampdoc_.getMetaByName("amp-usqp");
        if (usqp) {
          usqp.split(",").forEach(function(exp) {
            _this2.addEnabledExperiment("ssr-" + exp);
          });
        }
        return _this2.maybeAddStoryExperimentId_();
      }).then(function() {
        _this2.isMessagingReady_ = true;
        _this2.flushQueuedTicks_();
        _this2.flush();
      });
    };
    _proto.maybeAddStoryExperimentId_ = function maybeAddStoryExperimentId_() {
      var _this3 = this;
      var ampdoc2 = Services.ampdocServiceFor(this.win).getSingleDoc();
      return isStoryDocument(ampdoc2).then(function(isStory) {
        if (isStory) {
          _this3.addEnabledExperiment("story");
        }
      });
    };
    _proto.onload_ = function onload_() {
      this.tick(TickLabel_Enum.ON_LOAD);
      this.flush();
    };
    _proto.registerPerformanceObserver_ = function registerPerformanceObserver_() {
      var _this4 = this;
      if (getMode(this.win).runtime === "inabox") {
        return;
      }
      var recordedFirstPaint = false;
      var recordedFirstContentfulPaint = false;
      var recordedFirstInputDelay = false;
      var recordedNavigation = false;
      var processEntry = function processEntry2(entry) {
        if (entry.name == "first-paint" && !recordedFirstPaint) {
          _this4.tickDelta(TickLabel_Enum.FIRST_PAINT, entry.startTime + entry.duration);
          recordedFirstPaint = true;
        } else if (entry.name == "first-contentful-paint" && !recordedFirstContentfulPaint) {
          var value = entry.startTime + entry.duration;
          _this4.tickDelta(TickLabel_Enum.FIRST_CONTENTFUL_PAINT, value);
          _this4.tickSinceVisible(TickLabel_Enum.FIRST_CONTENTFUL_PAINT_VISIBLE, value);
          recordedFirstContentfulPaint = true;
        } else if (entry.entryType === "first-input" && !recordedFirstInputDelay) {
          var _value = entry.processingStart - entry.startTime;
          _this4.tickDelta(TickLabel_Enum.FIRST_INPUT_DELAY, _value);
          recordedFirstInputDelay = true;
        } else if (entry.entryType === "layout-shift") {
          if (!entry.hadRecentInput) {
            _this4.tickLayoutShiftScore_(entry);
            _this4.layoutShiftSum_ += entry.value;
          }
        } else if (entry.entryType === "largest-contentful-paint") {
          _this4.tickLargestContentfulPaint_(entry);
        } else if (entry.entryType == "navigation" && !recordedNavigation) {
          ["domComplete", "domContentLoadedEventEnd", "domContentLoadedEventStart", "domInteractive", "loadEventEnd", "loadEventStart", "requestStart", "responseStart"].forEach(function(label) {
            return _this4.tick(label, entry[label]);
          });
          recordedNavigation = true;
        }
      };
      var entryTypesToObserve = [];
      if (this.win.PerformancePaintTiming) {
        this.win.performance.getEntriesByType("paint").forEach(processEntry);
        entryTypesToObserve.push("paint");
      }
      if (this.supportsEventTiming_) {
        this.createPerformanceObserver_(processEntry, {
          type: "first-input",
          buffered: true
        });
      }
      if (this.supportsLayoutShift_) {
        this.createPerformanceObserver_(processEntry, {
          type: "layout-shift",
          buffered: true
        });
      }
      if (this.supportsLargestContentfulPaint_) {
        this.createPerformanceObserver_(processEntry, {
          type: "largest-contentful-paint",
          buffered: true
        });
      }
      if (this.supportsNavigation_) {
        this.createPerformanceObserver_(processEntry, {
          type: "navigation",
          buffered: true
        });
      }
      if (entryTypesToObserve.length > 0) {
        this.createPerformanceObserver_(processEntry, {
          entryTypes: entryTypesToObserve
        });
      }
    };
    _proto.createPerformanceObserver_ = function createPerformanceObserver_(processEntry, init) {
      var _this5 = this;
      try {
        var obs = new this.win.PerformanceObserver(function(list) {
          list.getEntries().forEach(processEntry);
          _this5.flush();
        });
        obs.observe(init);
      } catch (err) {
        dev().warn(TAG15, err);
      }
    };
    _proto.isVisibilityHidden_ = function isVisibilityHidden_() {
      var state = this.ampdoc_.getVisibilityState();
      return state === VisibilityState_Enum.INACTIVE || state === VisibilityState_Enum.HIDDEN;
    };
    _proto.onAmpDocVisibilityChange_ = function onAmpDocVisibilityChange_() {
      if (this.isVisibilityHidden_()) {
        this.tickCumulativeMetrics_();
        this.flushLayoutShiftScore_();
      }
    };
    _proto.recordGoogleFontExp_ = function recordGoogleFontExp_() {
      if (!this.googleFontExpRecorded_) {
        this.googleFontExpRecorded_ = true;
        var win = this.win;
        var googleFontExp = parseInt(computedStyle(win, win.document.body).getPropertyValue("--google-font-exp"), 10);
        if (googleFontExp >= 0) {
          this.addEnabledExperiment("google-font-exp=" + googleFontExp);
        }
      }
    };
    _proto.tickCumulativeMetrics_ = function tickCumulativeMetrics_() {
      if (this.supportsLayoutShift_) {
        this.recordGoogleFontExp_();
        this.tickCumulativeLayoutShiftScore_();
      }
    };
    _proto.tickLayoutShiftScore_ = function tickLayoutShiftScore_(entry) {
      if (!this.ampdoc_) {
        return;
      }
      if (this.isVisibilityHidden_()) {
        return;
      }
      var entries = this.layoutShiftEntries_;
      if (entries.length > 0) {
        var first = entries[0];
        var last = entries[entries.length - 1];
        if (entry.startTime - last.startTime < CLS_SESSION_GAP && entry.startTime - first.startTime < CLS_SESSION_MAX) {
          entries.push(entry);
          return;
        }
        this.flushLayoutShiftScore_();
      }
      entries.push(entry);
      this.debouncedFlushLayoutShiftScore_();
    };
    _proto.flushLayoutShiftScore_ = function flushLayoutShiftScore_() {
      var entries = this.layoutShiftEntries_;
      var old = this.metrics_.get(TickLabel_Enum.CUMULATIVE_LAYOUT_SHIFT);
      var union = 0;
      var sum = 0;
      for (var _iterator = _createForOfIteratorHelperLoose11(entries), _step; !(_step = _iterator()).done; ) {
        var entry = _step.value;
        if (entry.sources) {
          for (var _iterator2 = _createForOfIteratorHelperLoose11(entry.sources), _step2; !(_step2 = _iterator2()).done; ) {
            var source = _step2.value;
            union |= getElementType(source.node);
          }
        }
        sum += entry.value;
      }
      entries.length = 0;
      this.recordGoogleFontExp_();
      if (old == null || sum > old) {
        this.metrics_.reset(TickLabel_Enum.CUMULATIVE_LAYOUT_SHIFT);
        this.metrics_.reset(TickLabel_Enum.CUMULATIVE_LAYOUT_SHIFT_TYPE_UNION);
        this.tickDelta(TickLabel_Enum.CUMULATIVE_LAYOUT_SHIFT, sum);
        this.tickDelta(TickLabel_Enum.CUMULATIVE_LAYOUT_SHIFT_TYPE_UNION, union);
        this.flush();
      }
    };
    _proto.tickCumulativeLayoutShiftScore_ = function tickCumulativeLayoutShiftScore_() {
      if (this.shiftScoresTicked_ === 0) {
        this.tickDelta(TickLabel_Enum.CUMULATIVE_LAYOUT_SHIFT_1, this.layoutShiftSum_);
        this.flush();
        this.shiftScoresTicked_ = 1;
      } else if (this.shiftScoresTicked_ === 1) {
        this.tickDelta(TickLabel_Enum.CUMULATIVE_LAYOUT_SHIFT_2, this.layoutShiftSum_);
        this.flush();
        this.shiftScoresTicked_ = 2;
      }
    };
    _proto.tickLargestContentfulPaint_ = function tickLargestContentfulPaint_(entry) {
      var element = entry.element, startTime = entry.startTime;
      var type = getElementType(element);
      this.tickDelta(TickLabel_Enum.LARGEST_CONTENTFUL_PAINT_TYPE, type);
      this.tickDelta(TickLabel_Enum.LARGEST_CONTENTFUL_PAINT, startTime);
      this.tickSinceVisible(TickLabel_Enum.LARGEST_CONTENTFUL_PAINT_VISIBLE, startTime);
      this.flush();
    };
    _proto.measureUserPerceivedVisualCompletenessTime_ = function measureUserPerceivedVisualCompletenessTime_() {
      var _this6 = this;
      var didStartInPrerender = !this.ampdoc_.hasBeenVisible();
      var docVisibleTime = -1;
      this.ampdoc_.whenFirstVisible().then(function() {
        docVisibleTime = _this6.win.performance.now();
        _this6.mark("visible");
      });
      this.whenViewportLayoutComplete_().then(function() {
        if (didStartInPrerender) {
          var userPerceivedVisualCompletenesssTime = docVisibleTime > -1 ? _this6.win.performance.now() - docVisibleTime : 0;
          _this6.ampdoc_.whenFirstVisible().then(function() {
            _this6.tickDelta(TickLabel_Enum.FIRST_VIEWPORT_READY, userPerceivedVisualCompletenesssTime);
          });
          _this6.prerenderComplete_(userPerceivedVisualCompletenesssTime);
          _this6.mark(TickLabel_Enum.FIRST_VIEWPORT_READY);
        } else {
          _this6.tick(TickLabel_Enum.FIRST_VIEWPORT_READY);
          _this6.prerenderComplete_(_this6.win.performance.now() - docVisibleTime);
        }
        _this6.flush();
      });
    };
    _proto.whenViewportLayoutComplete_ = function whenViewportLayoutComplete_() {
      var _this7 = this;
      return this.resources_.whenFirstPass().then(function() {
        var documentElement = _this7.win.document.documentElement;
        var size = Services.viewportForDoc(documentElement).getSize();
        var rect = layoutRectLtwh(0, 0, size.width, size.height);
        return whenContentIniLoad(documentElement, _this7.win, rect, true);
      });
    };
    _proto.tick = function tick(label, opt_delta, opt_value) {
      devAssert2(opt_delta == void 0 || opt_value == void 0, "You may not set both opt_delta and opt_value.");
      var data = dict({
        "label": label
      });
      var delta;
      if (opt_delta != void 0) {
        data["delta"] = delta = Math.max(opt_delta, 0);
      } else if (opt_value != void 0) {
        data["value"] = opt_value;
      } else {
        this.mark(label);
        delta = this.win.performance.now();
        data["value"] = this.timeOrigin_ + delta;
      }
      this.win.dispatchEvent(createCustomEvent(this.win, "perf", {
        label: label,
        delta: delta
      }));
      if (this.isMessagingReady_ && this.isPerformanceTrackingOn_) {
        this.viewer_.sendMessage("tick", data);
      } else {
        this.queueTick_(data);
      }
      this.metrics_.signal(label, delta);
    };
    _proto.mark = function mark(label) {
      var _this$win$performance, _this$win$performance2;
      (_this$win$performance = (_this$win$performance2 = this.win.performance).mark) == null ? void 0 : _this$win$performance.call(_this$win$performance2, label);
    };
    _proto.tickDelta = function tickDelta(label, value) {
      this.tick(label, value);
    };
    _proto.tickSinceVisible = function tickSinceVisible(label, opt_delta) {
      var _this$viewer_, _this$ampdoc_;
      var delta = opt_delta == void 0 ? this.win.performance.now() : opt_delta;
      var end = this.timeOrigin_ + delta;
      var visibleTime = (_this$viewer_ = this.viewer_) != null && _this$viewer_.isEmbedded() ? (_this$ampdoc_ = this.ampdoc_) == null ? void 0 : _this$ampdoc_.getFirstVisibleTime() : this.timeOrigin_;
      var v = visibleTime ? Math.max(end - visibleTime, 0) : 0;
      this.tickDelta(label, v);
    };
    _proto.flush = function flush() {
      if (this.isMessagingReady_ && this.isPerformanceTrackingOn_) {
        if (this.ampexp_ == null) {
          this.ampexp_ = Object.keys(this.enabledExperiments_).join(",");
        }
        this.viewer_.sendMessage("sendCsi", dict({
          "ampexp": this.ampexp_,
          "canonicalUrl": this.documentInfo_.canonicalUrl,
          "eventid": this.eventid_
        }), true);
      }
    };
    _proto.addEnabledExperiment = function addEnabledExperiment(experimentId) {
      this.enabledExperiments_[experimentId] = true;
      this.ampexp_ = void 0;
    };
    _proto.queueTick_ = function queueTick_(data) {
      if (this.events_.length >= QUEUE_LIMIT) {
        this.events_.shift();
      }
      this.events_.push(data);
    };
    _proto.flushQueuedTicks_ = function flushQueuedTicks_() {
      var _this8 = this;
      if (!this.viewer_) {
        return;
      }
      if (!this.isPerformanceTrackingOn_) {
        this.events_.length = 0;
        return;
      }
      this.events_.forEach(function(tickEvent) {
        _this8.viewer_.sendMessage("tick", tickEvent);
      });
      this.events_.length = 0;
    };
    _proto.prerenderComplete_ = function prerenderComplete_(value) {
      if (this.viewer_) {
        this.viewer_.sendMessage("prerenderComplete", dict({
          "value": value
        }), true);
      }
    };
    _proto.isPerformanceTrackingOn = function isPerformanceTrackingOn() {
      return this.isPerformanceTrackingOn_;
    };
    _proto.getMetric = function getMetric(label) {
      return this.metrics_.whenSignal(label);
    };
    return Performance2;
  }();
  function getOutermostAmpElement(node) {
    var max = node;
    while ((node = node.parentNode) != null) {
      if (node.nodeName.startsWith("AMP-")) {
        max = node;
      }
    }
    return max;
  }
  function installPerformanceService(window) {
    registerServiceBuilder(window, "performance", Performance);
  }

  // src/inabox/inabox-cid.js
  var InaboxCid = /* @__PURE__ */ function() {
    function InaboxCid2() {
    }
    var _proto = InaboxCid2.prototype;
    _proto.get = function get() {
      return Promise.resolve(null);
    };
    _proto.optOut = function optOut() {
    };
    return InaboxCid2;
  }();
  function installInaboxCidService(ampdoc2) {
    return registerServiceBuilderForDoc(ampdoc2, "cid", InaboxCid);
  }

  // 3p/iframe-messaging-client.js
  var IframeMessagingClient = /* @__PURE__ */ function() {
    function IframeMessagingClient2(win, hostWindow) {
      this.win_ = win;
      this.rtvVersion_ = getMode().rtvVersion || null;
      this.hostWindow_ = hostWindow || null;
      this.sentinel_ = null;
      this.nextMessageId_ = 1;
      this.observableFor_ = map();
      this.setupEventListener_();
    }
    var _proto = IframeMessagingClient2.prototype;
    _proto.getData = function getData2(requestType, payload, callback) {
      var responseType = requestType + CONSTANTS.responseTypeSuffix;
      var messageId = this.nextMessageId_++;
      var unlisten = this.registerCallback(responseType, function(result) {
        if (result[CONSTANTS.messageIdFieldName] === messageId) {
          unlisten();
          callback(result[CONSTANTS.contentFieldName]);
        }
      });
      var data = dict();
      data[CONSTANTS.payloadFieldName] = payload;
      data[CONSTANTS.messageIdFieldName] = messageId;
      this.sendMessage(requestType, data);
    };
    _proto.makeRequest = function makeRequest(requestType, responseType, callback) {
      var unlisten = this.registerCallback(responseType, callback);
      this.sendMessage(requestType);
      return unlisten;
    };
    _proto.requestOnce = function requestOnce(requestType, responseType, callback) {
      var unlisten = this.registerCallback(responseType, function(event) {
        unlisten();
        callback(event);
      });
      this.sendMessage(requestType);
      return unlisten;
    };
    _proto.registerCallback = function registerCallback(messageType, callback) {
      return this.getOrCreateObservableFor_(messageType).add(callback);
    };
    _proto.sendMessage = function sendMessage(type, opt_payload) {
      var msg = serializeMessage(type, dev().assertString(this.sentinel_), opt_payload, this.rtvVersion_);
      if (!this.hostWindow_) {
        for (var j = 0, hostWin = this.win_; j < 10 && hostWin != this.win_.top; j++) {
          hostWin = hostWin.parent;
          this.sendMessageInternal_(hostWin, msg);
          j++;
        }
      } else {
        this.sendMessageInternal_(this.hostWindow_, msg);
      }
    };
    _proto.sendMessageInternal_ = function sendMessageInternal_(win, msg) {
      if (this.isMessageOptionsSupported_(win)) {
        this.postMessageWithUserActivation_(win, msg);
      } else {
        win.postMessage(msg, "*");
      }
    };
    _proto.postMessageWithUserActivation_ = function postMessageWithUserActivation_(win, msg) {
      win.postMessage(msg, dict({
        "targetOrigin": "*",
        "includeUserActivation": true
      }));
    };
    _proto.setupEventListener_ = function setupEventListener_() {
      var _this = this;
      listen2(this.win_, "message", function(event) {
        if (_this.hostWindow_ && event.source != _this.hostWindow_) {
          return;
        }
        var message = deserializeMessage(getData(event));
        if (!message || message["sentinel"] != _this.sentinel_) {
          return;
        }
        message["origin"] = event.origin;
        if (!_this.hostWindow_) {
          _this.hostWindow_ = event.source;
        }
        _this.fireObservable_(message["type"], message);
      });
    };
    _proto.setSentinel = function setSentinel(sentinel) {
      this.sentinel_ = sentinel;
    };
    _proto.getOrCreateObservableFor_ = function getOrCreateObservableFor_(messageType) {
      if (!(messageType in this.observableFor_)) {
        this.observableFor_[messageType] = new Observable();
      }
      return this.observableFor_[messageType];
    };
    _proto.fireObservable_ = function fireObservable_(messageType, message) {
      if (messageType in this.observableFor_) {
        this.observableFor_[messageType].fire(message);
      }
    };
    _proto.isMessageOptionsSupported_ = function isMessageOptionsSupported_(win) {
      return win.postMessage.length == 1;
    };
    return IframeMessagingClient2;
  }();

  // src/inabox/inabox-iframe-messaging-client.js
  function iframeMessagingClientFor(win) {
    return getExistingServiceOrNull(win, "iframeMessagingClient");
  }
  function installIframeMessagingClient(win) {
    if (!canInspectWindow(win.top)) {
      registerServiceBuilder(win, "iframeMessagingClient", createIframeMessagingClient.bind(null, win), true);
    }
  }
  function createIframeMessagingClient(win) {
    var iframeClient = new IframeMessagingClient(win);
    var dataObject = tryParseJson(win.name);
    var sentinel = null;
    if (dataObject && dataObject["_context"]) {
      sentinel = dataObject["_context"]["sentinel"];
    }
    iframeClient.setSentinel(sentinel || getRandom(win));
    return iframeClient;
  }
  function getRandom(win) {
    return String(win.Math.random()).substr(2);
  }

  // src/inabox/inabox-mutator.js
  var InaboxMutator = /* @__PURE__ */ function() {
    function InaboxMutator2(ampdoc2) {
      this.resources_ = Services.resourcesForDoc(ampdoc2);
      this.vsync_ = Services.vsyncFor(ampdoc2.win);
    }
    var _proto = InaboxMutator2.prototype;
    _proto.forceChangeSize = function forceChangeSize(element, newHeight, newWidth, opt_callback, opt_newMargins) {
      this.requestChangeSize(element, newHeight, newWidth, opt_newMargins).then(function() {
        if (opt_callback) {
          opt_callback();
        }
      });
    };
    _proto.requestChangeSize = function requestChangeSize(element, newHeight, newWidth, opt_newMargins) {
      var _this = this;
      return this.mutateElement(element, function() {
        _this.resources_.getResourceForElement(element).changeSize(newHeight, newWidth, opt_newMargins);
      });
    };
    _proto.expandElement = function expandElement(element) {
      var resource = this.resources_.getResourceForElement(element);
      resource.completeExpand();
      this.resources_.schedulePass();
    };
    _proto.attemptCollapse = function attemptCollapse(element) {
      var _this2 = this;
      return this.mutateElement(element, function() {
        _this2.resources_.getResourceForElement(element).completeCollapse();
      });
    };
    _proto.collapseElement = function collapseElement(element) {
      this.resources_.getResourceForElement(element).completeCollapse();
      this.resources_.schedulePass();
    };
    _proto.measureElement = function measureElement(measurer) {
      return this.vsync_.measurePromise(measurer);
    };
    _proto.mutateElement = function mutateElement(element, mutator) {
      return this.measureMutateElement(element, null, mutator);
    };
    _proto.measureMutateElement = function measureMutateElement(element, measurer, mutator) {
      var _this3 = this;
      return this.vsync_.runPromise({
        measure: function measure() {
          if (measurer) {
            measurer();
          }
        },
        mutate: function mutate() {
          mutator();
          _this3.resources_.schedulePass();
        }
      });
    };
    return InaboxMutator2;
  }();
  function installInaboxMutatorServiceForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, "mutator", InaboxMutator);
  }

  // src/inabox/inabox-viewer.js
  var InaboxViewer = /* @__PURE__ */ function() {
    function InaboxViewer2(ampdoc2) {
      this.ampdoc_ = ampdoc2;
    }
    var _proto = InaboxViewer2.prototype;
    _proto.getAmpDoc = function getAmpDoc() {
      return this.ampdoc_;
    };
    _proto.getParam = function getParam(name) {
      return this.ampdoc_.getParam(name);
    };
    _proto.hasCapability = function hasCapability() {
      return false;
    };
    _proto.isEmbedded = function isEmbedded() {
      return false;
    };
    _proto.isWebviewEmbedded = function isWebviewEmbedded() {
      return false;
    };
    _proto.isCctEmbedded = function isCctEmbedded() {
      return false;
    };
    _proto.isProxyOrigin = function isProxyOrigin2() {
      return false;
    };
    _proto.maybeUpdateFragmentForCct = function maybeUpdateFragmentForCct() {
    };
    _proto.isRuntimeOn = function isRuntimeOn() {
      return true;
    };
    _proto.toggleRuntime = function toggleRuntime() {
    };
    _proto.onRuntimeState = function onRuntimeState() {
      return function() {
      };
    };
    _proto.isOvertakeHistory = function isOvertakeHistory() {
      return false;
    };
    _proto.getResolvedViewerUrl = function getResolvedViewerUrl() {
      return this.ampdoc_.win.location.href;
    };
    _proto.maybeGetMessagingOrigin = function maybeGetMessagingOrigin() {
      return null;
    };
    _proto.getUnconfirmedReferrerUrl = function getUnconfirmedReferrerUrl() {
      return this.ampdoc_.win.document.referrer;
    };
    _proto.getReferrerUrl = function getReferrerUrl() {
      return Promise.resolve(this.getUnconfirmedReferrerUrl());
    };
    _proto.isTrustedViewer = function isTrustedViewer() {
      return Promise.resolve(false);
    };
    _proto.getViewerOrigin = function getViewerOrigin() {
      return Promise.resolve("");
    };
    _proto.onMessage = function onMessage() {
      return function() {
      };
    };
    _proto.onMessageRespond = function onMessageRespond() {
      return function() {
      };
    };
    _proto.receiveMessage = function receiveMessage() {
    };
    _proto.setMessageDeliverer = function setMessageDeliverer() {
    };
    _proto.maybeGetMessageDeliverer = function maybeGetMessageDeliverer() {
      return null;
    };
    _proto.sendMessage = function sendMessage() {
    };
    _proto.sendMessageAwaitResponse = function sendMessageAwaitResponse() {
      return resolvedPromise();
    };
    _proto.broadcast = function broadcast() {
      return Promise.resolve(false);
    };
    _proto.onBroadcast = function onBroadcast() {
      return function() {
      };
    };
    _proto.whenMessagingReady = function whenMessagingReady() {
      return null;
    };
    _proto.replaceUrl = function replaceUrl() {
    };
    return InaboxViewer2;
  }();
  function installInaboxViewerServiceForDoc(ampdoc2) {
    registerServiceBuilderForDoc(ampdoc2, "viewer", InaboxViewer, true);
  }

  // ads/inabox/full-overlay-frame-helper.js
  function centerFrameUnderVsyncMutate(iframe, iframeRect, viewportSize, transitionTimeMs) {
    var translateX = px(viewportSize.width / 2 - iframeRect.width / 2 - iframeRect.left);
    var translateY = px(viewportSize.height / 2 - iframeRect.height / 2 - iframeRect.top);
    setStyles(iframe, {
      "position": "fixed",
      "top": px(iframeRect.top),
      "right": px(viewportSize.width - (iframeRect.left + iframeRect.width)),
      "left": px(iframeRect.left),
      "bottom": px(viewportSize.height - (iframeRect.top + iframeRect.height)),
      "height": px(iframeRect.height),
      "width": px(iframeRect.width),
      "transition": "transform " + transitionTimeMs + "ms ease",
      "transform": translate(translateX, translateY),
      "margin": 0
    });
  }
  function expandFrameUnderVsyncMutate(iframe) {
    setStyles(iframe, {
      "position": "fixed",
      "z-index": 1e3,
      "left": 0,
      "right": 0,
      "top": 0,
      "bottom": 0,
      "width": "100vw",
      "height": "100vh",
      "transition": null,
      "transform": null,
      "margin": 0,
      "border": 0
    });
  }
  function collapseFrameUnderVsyncMutate(iframe) {
    resetStyles(iframe, ["position", "z-index", "left", "right", "top", "bottom", "width", "height", "margin", "border"]);
  }

  // ads/inabox/util.js
  function restrictedVsync(win, task, opt_state) {
    win.requestAnimationFrame(function() {
      if (task.measure) {
        task.measure(opt_state);
      }
      if (task.mutate) {
        task.mutate(opt_state);
      }
    });
  }
  function timer(callback, timeMs) {
    setTimeout(callback, timeMs);
  }

  // ads/inabox/frame-overlay-helper.js
  var CENTER_TRANSITION_TIME_MS = 150;
  var CENTER_TRANSITION_END_WAIT_TIME_MS = 50;
  var expandFrameImpl = function expandFrameImpl2(win, iframe, onFinish) {
    restrictedVsync(win, {
      measure: function measure(state) {
        state.viewportSize = {
          width: win.innerWidth,
          height: win.innerHeight
        };
        state.rect = layoutRectFromDomRect(iframe.getBoundingClientRect());
      },
      mutate: function mutate(state) {
        var _state$viewportSize = state.viewportSize, height = _state$viewportSize.height, width = _state$viewportSize.width;
        var expandedRect = layoutRectLtwh(0, 0, width, height);
        centerFrameUnderVsyncMutate(iframe, state.rect, state.viewportSize, CENTER_TRANSITION_TIME_MS);
        setImportantStyles(iframe, {
          "pointer-events": "none"
        });
        timer(function() {
          restrictedVsync(win, {
            mutate: function mutate2() {
              resetStyles(iframe, ["pointer-events"]);
              expandFrameUnderVsyncMutate(iframe);
              onFinish(state.rect, expandedRect);
            }
          });
        }, CENTER_TRANSITION_TIME_MS + CENTER_TRANSITION_END_WAIT_TIME_MS);
      }
    }, {});
  };
  var collapseFrameImpl = function collapseFrameImpl2(win, iframe, onFinish, onMeasure) {
    restrictedVsync(win, {
      mutate: function mutate() {
        collapseFrameUnderVsyncMutate(iframe);
        onFinish();
        restrictedVsync(win, {
          measure: function measure() {
            onMeasure(layoutRectFromDomRect(iframe.getBoundingClientRect()));
          }
        });
      }
    });
  };
  var expandFrame = expandFrameImpl;
  var collapseFrame = collapseFrameImpl;

  // ads/inabox/frame-overlay-manager.js
  var AMP_INABOX_FRAME_OVERLAY_MANAGER = "ampInaboxFrameOverlayManager";
  var FrameOverlayManager = /* @__PURE__ */ function() {
    function FrameOverlayManager2(win) {
      this.win_ = win;
      this.isExpanded_ = false;
      this.viewportChangedSinceExpand_ = false;
      this.collapsedRect_ = null;
      this.listenToViewportChanges_();
    }
    var _proto = FrameOverlayManager2.prototype;
    _proto.listenToViewportChanges_ = function listenToViewportChanges_() {
      var _this = this;
      this.win_.addEventListener("resize", function() {
        return _this.onWindowResize();
      });
    };
    _proto.onWindowResize = function onWindowResize() {
      if (this.isExpanded_) {
        this.viewportChangedSinceExpand_ = true;
      }
    };
    _proto.expandFrame = function expandFrame2(iframe, callback) {
      var _this2 = this;
      expandFrame(this.win_, iframe, function(collapsedRect, expandedRect) {
        _this2.isExpanded_ = true;
        _this2.viewportChangedSinceExpand_ = false;
        _this2.collapsedRect_ = collapsedRect;
        callback(expandedRect);
      });
    };
    _proto.collapseFrame = function collapseFrame2(iframe, callback) {
      var _this3 = this;
      collapseFrame(this.win_, iframe, function() {
        _this3.isExpanded_ = false;
        if (!_this3.viewportChangedSinceExpand_) {
          callback(_this3.collapsedRect_);
        }
      }, function(collapsedRect) {
        _this3.collapsedRect_ = collapsedRect;
        if (_this3.viewportChangedSinceExpand_) {
          callback(_this3.collapsedRect_);
        }
      });
    };
    return FrameOverlayManager2;
  }();
  function getFrameOverlayManager(win) {
    win[AMP_INABOX_FRAME_OVERLAY_MANAGER] = win[AMP_INABOX_FRAME_OVERLAY_MANAGER] || new FrameOverlayManager(win);
    return win[AMP_INABOX_FRAME_OVERLAY_MANAGER];
  }

  // ads/inabox/position-observer.js
  var MIN_EVENT_INTERVAL_IN_MS = 100;
  var AMP_INABOX_POSITION_OBSERVER = "ampInaboxPositionObserver";
  var PositionObserver = /* @__PURE__ */ function() {
    function PositionObserver2(win) {
      this.win_ = win;
      this.positionObservable_ = null;
      this.scrollingElement_ = getScrollingElement(this.win_);
      this.viewportRect_ = null;
    }
    var _proto = PositionObserver2.prototype;
    _proto.observe = function observe(element, callback) {
      var _this = this;
      if (!this.positionObservable_) {
        this.positionObservable_ = new Observable();
        var listener = throttle(this.win_, function() {
          _this.update_();
          _this.positionObservable_.fire();
        }, MIN_EVENT_INTERVAL_IN_MS);
        this.update_();
        this.win_.addEventListener("scroll", listener, true);
        this.win_.addEventListener("resize", listener, true);
      }
      callback(this.getPositionEntry_(element));
      return this.positionObservable_.add(function() {
        callback(_this.getPositionEntry_(element));
      });
    };
    _proto.update_ = function update_() {
      this.viewportRect_ = this.getViewportRect();
    };
    _proto.getPositionEntry_ = function getPositionEntry_(element) {
      return {
        "viewportRect": this.viewportRect_,
        "targetRect": this.getTargetRect(element)
      };
    };
    _proto.getViewportRect = function getViewportRect() {
      var scrollingElement = this.scrollingElement_, win = this.win_;
      var scrollLeft = scrollingElement.scrollLeft || win.pageXOffset;
      var scrollTop = scrollingElement.scrollTop || win.pageYOffset;
      return layoutRectLtwh(Math.round(scrollLeft), Math.round(scrollTop), win.innerWidth, win.innerHeight);
    };
    _proto.getTargetRect = function getTargetRect(element) {
      var targetRect = layoutRectFromDomRect(element.getBoundingClientRect());
      var parentWin = element.ownerDocument.defaultView;
      for (var j = 0, tempWin = parentWin; j < 10 && tempWin && tempWin != this.win_ && tempWin != this.win_.top; j++, tempWin = tempWin.parent) {
        var parentFrameRect = layoutRectFromDomRect(tempWin.frameElement.getBoundingClientRect());
        targetRect = moveLayoutRect(targetRect, parentFrameRect.left, parentFrameRect.top);
      }
      return targetRect;
    };
    return PositionObserver2;
  }();
  function getScrollingElement(win) {
    var doc = win.document;
    if (doc.scrollingElement) {
      return doc.scrollingElement;
    }
    if (doc.body && isWebKit(win.navigator.userAgent)) {
      return doc.body;
    }
    return doc.documentElement;
  }
  function isWebKit(ua) {
    return /WebKit/i.test(ua) && !/Edge/i.test(ua);
  }
  function getPositionObserver(win) {
    win[AMP_INABOX_POSITION_OBSERVER] = win[AMP_INABOX_POSITION_OBSERVER] || new PositionObserver(win);
    return win[AMP_INABOX_POSITION_OBSERVER];
  }

  // src/inabox/inabox-viewport.js
  var TAG16 = "inabox-viewport";
  var MIN_EVENT_INTERVAL = 100;
  function prepareBodyForOverlay(win, bodyElement) {
    return Services.vsyncFor(win).runPromise({
      measure: function measure(state) {
        state.width = win.innerWidth;
        state.height = win.innerHeight;
      },
      mutate: function mutate(state) {
        setImportantStyles(bodyElement, {
          "background": "transparent",
          "left": "50%",
          "top": "50%",
          "right": "auto",
          "bottom": "auto",
          "position": "absolute",
          "height": px(state.height),
          "width": px(state.width),
          "margin-top": px(-state.height / 2),
          "margin-left": px(-state.width / 2)
        });
      }
    }, {});
  }
  function resetBodyForOverlay(win, bodyElement) {
    return Services.vsyncFor(win).mutatePromise(function() {
      resetStyles(bodyElement, ["position", "left", "top", "right", "bottom", "width", "height", "margin-left", "margin-top"]);
    });
  }
  var InaboxViewportImpl = /* @__PURE__ */ function() {
    function InaboxViewportImpl2(ampdoc2, binding) {
      var win = ampdoc2.win;
      this.ampdoc = ampdoc2;
      this.binding_ = binding;
      this.rect_ = null;
      this.changeObservable_ = new Observable();
      this.scrollObservable_ = new Observable();
      this.resizeObservable_ = new Observable();
      this.binding_.onScroll(this.scroll_.bind(this));
      this.binding_.onResize(this.resize_.bind(this));
      this.visible_ = false;
      this.ampdoc.onVisibilityChanged(this.updateVisibility_.bind(this));
      this.updateVisibility_();
      this.boundDispose_ = this.dispose.bind(this);
      win.addEventListener("pagehide", this.boundDispose_);
      var docElement = win.document.documentElement;
      docElement.classList.add("i-amphtml-singledoc");
      docElement.classList.add("i-amphtml-standalone");
      if (isIframed(win)) {
        docElement.classList.add("i-amphtml-iframed");
      }
    }
    var _proto = InaboxViewportImpl2.prototype;
    _proto.dispose = function dispose() {
      this.binding_.disconnect();
      this.ampdoc.win.removeEventListener("pagehide", this.boundDispose_);
    };
    _proto.ensureReadyForElements = function ensureReadyForElements() {
    };
    _proto.getPaddingTop = function getPaddingTop() {
      return 0;
    };
    _proto.getScrollTop = function getScrollTop() {
      return this.binding_.getScrollTop();
    };
    _proto.getScrollLeft = function getScrollLeft() {
      return this.binding_.getScrollLeft();
    };
    _proto.setScrollTop = function setScrollTop(unusedScrollPos) {
    };
    _proto.updatePaddingBottom = function updatePaddingBottom(unusedPaddingBottom) {
    };
    _proto.getSize = function getSize() {
      return this.binding_.getSize();
    };
    _proto.getHeight = function getHeight() {
      return this.getSize().height;
    };
    _proto.getWidth = function getWidth() {
      return this.getSize().width;
    };
    _proto.getScrollWidth = function getScrollWidth() {
      return this.binding_.getScrollWidth();
    };
    _proto.getScrollHeight = function getScrollHeight() {
      return this.binding_.getScrollHeight();
    };
    _proto.getContentHeight = function getContentHeight() {
      return this.binding_.getContentHeight();
    };
    _proto.contentHeightChanged = function contentHeightChanged() {
    };
    _proto.getRect = function getRect() {
      if (this.rect_ == null) {
        var size = this.getSize();
        this.rect_ = layoutRectLtwh(this.getScrollLeft(), this.getScrollTop(), size.width, size.height);
      }
      return this.rect_;
    };
    _proto.getLayoutRect = function getLayoutRect(el) {
      return this.binding_.getLayoutRect(el);
    };
    _proto.getClientRectAsync = function getClientRectAsync(el) {
      var local = el.getBoundingClientRect();
      return this.binding_.getRootClientRectAsync().then(function(root) {
        if (!root) {
          return layoutRectFromDomRect(local);
        }
        return moveLayoutRect(local, root.left, root.top);
      });
    };
    _proto.supportsPositionFixed = function supportsPositionFixed() {
      return false;
    };
    _proto.isDeclaredFixed = function isDeclaredFixed(unusedElement) {
      return false;
    };
    _proto.scrollIntoView = function scrollIntoView(unusedElement) {
      return resolvedPromise();
    };
    _proto.animateScrollIntoView = function animateScrollIntoView(unusedElement, unusedPos, opt_duration, opt_curve) {
      return resolvedPromise();
    };
    _proto.animateScrollWithinParent = function animateScrollWithinParent(unusedElement, unusedParent, unusedPos, opt_duration, opt_curve) {
      return resolvedPromise();
    };
    _proto.getScrollingElement = function getScrollingElement2() {
      return this.binding_.getScrollingElement();
    };
    _proto.onChanged = function onChanged(handler) {
      return this.changeObservable_.add(handler);
    };
    _proto.onScroll = function onScroll(handler) {
      return this.scrollObservable_.add(handler);
    };
    _proto.onResize = function onResize(handler) {
      return this.resizeObservable_.add(handler);
    };
    _proto.enterLightboxMode = function enterLightboxMode(opt_requestingElement, opt_onComplete) {
      this.enterOverlayMode();
      return this.binding_.updateLightboxMode(true);
    };
    _proto.leaveLightboxMode = function leaveLightboxMode(opt_requestingElement) {
      this.leaveOverlayMode();
      return this.binding_.updateLightboxMode(false);
    };
    _proto.enterOverlayMode = function enterOverlayMode() {
      this.disableTouchZoom();
      this.disableScroll();
    };
    _proto.leaveOverlayMode = function leaveOverlayMode() {
      this.resetScroll();
      this.restoreOriginalTouchZoom();
    };
    _proto.disableScroll = function disableScroll() {
    };
    _proto.resetScroll = function resetScroll() {
    };
    _proto.resetTouchZoom = function resetTouchZoom() {
    };
    _proto.disableTouchZoom = function disableTouchZoom() {
      return false;
    };
    _proto.restoreOriginalTouchZoom = function restoreOriginalTouchZoom() {
      return false;
    };
    _proto.updateFixedLayer = function updateFixedLayer() {
      return resolvedPromise();
    };
    _proto.addToFixedLayer = function addToFixedLayer(unusedElement, opt_forceTransfer) {
      return resolvedPromise();
    };
    _proto.removeFromFixedLayer = function removeFromFixedLayer(unusedElement) {
    };
    _proto.createFixedLayer = function createFixedLayer(unusedConstructor) {
    };
    _proto.changed_ = function changed_() {
      var size = this.getSize();
      var scrollTop = this.getScrollTop();
      var scrollLeft = this.getScrollLeft();
      this.changeObservable_.fire({
        relayoutAll: false,
        top: scrollTop,
        left: scrollLeft,
        width: size.width,
        height: size.height,
        velocity: 0
      });
    };
    _proto.scroll_ = function scroll_() {
      this.rect_ = null;
      if (this.binding_.getScrollTop() < 0) {
        return;
      }
      this.changed_();
      this.scrollObservable_.fire();
    };
    _proto.resize_ = function resize_() {
      this.rect_ = null;
      var newSize = this.getSize();
      this.changed_();
      this.resizeObservable_.fire({
        relayoutAll: false,
        width: newSize.width,
        height: newSize.height
      });
    };
    _proto.updateVisibility_ = function updateVisibility_() {
      var visible = this.ampdoc.isVisible();
      if (visible != this.visible_) {
        this.visible_ = visible;
        if (visible) {
          this.binding_.connect();
          this.resize_();
        } else {
          this.binding_.disconnect();
        }
      }
    };
    return InaboxViewportImpl2;
  }();
  var ViewportBindingInabox = /* @__PURE__ */ function() {
    function ViewportBindingInabox2(win) {
      var _this = this;
      this.win = win;
      this.scrollObservable_ = new Observable();
      this.resizeObservable_ = new Observable();
      var boxWidth = win.innerWidth;
      var boxHeight = win.innerHeight;
      this.viewportRect_ = layoutRectLtwh(0, 0, boxWidth, boxHeight);
      this.boxRect_ = layoutRectLtwh(0, boxHeight + 1, boxWidth, boxHeight);
      this.iframeClient_ = iframeMessagingClientFor(win);
      this.requestPositionPromise_ = null;
      this.fireScrollThrottle_ = throttle(this.win, function() {
        _this.scrollObservable_.fire();
      }, MIN_EVENT_INTERVAL);
      this.isFriendlyIframed_ = canInspectWindow(this.win.top);
      this.topWindowPositionObserver_ = this.isFriendlyIframed_ ? getPositionObserver(this.win.top) : null;
      this.topWindowFrameOverlayManager_ = this.isFriendlyIframed_ ? getFrameOverlayManager(this.win.top) : null;
      this.unobserveFunction_ = null;
      dev().fine(TAG16, "initialized inabox viewport");
    }
    var _proto2 = ViewportBindingInabox2.prototype;
    _proto2.connect = function connect() {
      if (this.isFriendlyIframed_) {
        return this.listenForPositionSameDomain_();
      } else {
        return this.listenForPosition_();
      }
    };
    _proto2.listenForPosition_ = function listenForPosition_() {
      var _this2 = this;
      this.iframeClient_.makeRequest(MessageType_Enum.SEND_POSITIONS, MessageType_Enum.POSITION, function(data) {
        dev().fine(TAG16, "Position changed: ", data);
        _this2.updateLayoutRects_(data["viewportRect"], data["targetRect"]);
      });
      return resolvedPromise();
    };
    _proto2.listenForPositionSameDomain_ = function listenForPositionSameDomain_() {
      var _this3 = this;
      return Services.resourcesPromiseForDoc(this.win.document.documentElement).then(function() {
        _this3.unobserveFunction_ = _this3.unobserveFunction_ || _this3.topWindowPositionObserver_.observe(_this3.win.frameElement || _this3.getScrollingElement(), function(data) {
          _this3.updateLayoutRects_(data["viewportRect"], data["targetRect"]);
        });
      });
    };
    _proto2.updateLayoutRects_ = function updateLayoutRects_(viewportRect, targetRect) {
      var oldViewportRect = this.viewportRect_;
      this.viewportRect_ = viewportRect;
      this.updateBoxRect_(targetRect);
      if (isResized(this.viewportRect_, oldViewportRect)) {
        this.resizeObservable_.fire();
      }
      if (isMoved(this.viewportRect_, oldViewportRect)) {
        this.fireScrollThrottle_();
      }
    };
    _proto2.getLayoutRect = function getLayoutRect(el) {
      var b = el.getBoundingClientRect();
      var left = b.left, top = b.top;
      return layoutRectLtwh(Math.round(left + this.boxRect_.left), Math.round(top + this.boxRect_.top), Math.round(b.width), Math.round(b.height));
    };
    _proto2.onScroll = function onScroll(callback) {
      this.scrollObservable_.add(callback);
    };
    _proto2.onResize = function onResize(callback) {
      this.resizeObservable_.add(callback);
    };
    _proto2.getSize = function getSize() {
      return {
        width: this.viewportRect_.width,
        height: this.viewportRect_.height
      };
    };
    _proto2.getScrollTop = function getScrollTop() {
      return this.viewportRect_.top;
    };
    _proto2.getScrollLeft = function getScrollLeft() {
      return this.viewportRect_.left;
    };
    _proto2.getScrollingElement = function getScrollingElement2() {
      return this.getBodyElement();
    };
    _proto2.getScrollingElementScrollsLikeViewport = function getScrollingElementScrollsLikeViewport() {
      return true;
    };
    _proto2.supportsPositionFixed = function supportsPositionFixed() {
      return false;
    };
    _proto2.updateBoxRect_ = function updateBoxRect_(positionRect) {
      if (!positionRect) {
        return;
      }
      var boxRect = moveLayoutRect(positionRect, this.viewportRect_.left, this.viewportRect_.top);
      if (isChanged(boxRect, this.boxRect_)) {
        dev().fine(TAG16, "Updating viewport box rect: ", boxRect);
        this.boxRect_ = boxRect;
        this.remeasureAllElements_();
      }
    };
    _proto2.getChildResources = function getChildResources() {
      return Services.resourcesForDoc(this.win.document.documentElement).get();
    };
    _proto2.remeasureAllElements_ = function remeasureAllElements_() {
      this.getChildResources().forEach(function(resource) {
        return resource.measure();
      });
    };
    _proto2.updateLightboxMode = function updateLightboxMode(lightboxMode) {
      if (lightboxMode) {
        return this.tryToEnterOverlayMode_();
      }
      return this.leaveOverlayMode_();
    };
    _proto2.getRootClientRectAsync = function getRootClientRectAsync() {
      var _this4 = this;
      if (this.isFriendlyIframed_) {
        return this.listenForPositionSameDomain_().then(function() {
          return _this4.topWindowPositionObserver_.getTargetRect(_this4.win.frameElement || _this4.getScrollingElement());
        });
      }
      if (!this.requestPositionPromise_) {
        this.requestPositionPromise_ = new Promise(function(resolve) {
          _this4.iframeClient_.requestOnce(MessageType_Enum.SEND_POSITIONS, MessageType_Enum.POSITION, function(data) {
            _this4.requestPositionPromise_ = null;
            devAssert(data["targetRect"], "Host should send targetRect");
            resolve(data["targetRect"]);
          });
        });
      }
      return this.requestPositionPromise_;
    };
    _proto2.tryToEnterOverlayMode_ = function tryToEnterOverlayMode_() {
      var _this5 = this;
      return this.prepareBodyForOverlay_().then(function() {
        return _this5.requestFullOverlayFrame_();
      });
    };
    _proto2.leaveOverlayMode_ = function leaveOverlayMode_() {
      var _this6 = this;
      return this.requestCancelFullOverlayFrame_().then(function() {
        return _this6.resetBodyForOverlay_();
      });
    };
    _proto2.prepareBodyForOverlay_ = function prepareBodyForOverlay_() {
      return prepareBodyForOverlay(this.win, this.getBodyElement());
    };
    _proto2.resetBodyForOverlay_ = function resetBodyForOverlay_() {
      return resetBodyForOverlay(this.win, this.getBodyElement());
    };
    _proto2.requestFullOverlayFrame_ = function requestFullOverlayFrame_() {
      var _this7 = this;
      return new Promise(function(resolve, reject) {
        if (_this7.isFriendlyIframed_) {
          var iframe = _this7.win.frameElement;
          if (iframe) {
            _this7.topWindowFrameOverlayManager_.expandFrame(iframe, function(boxRect) {
              _this7.updateBoxRect_(boxRect);
              resolve();
            });
          } else {
            reject("Request to open lightbox failed; frame does not exist.");
          }
        } else {
          _this7.iframeClient_.requestOnce(MessageType_Enum.FULL_OVERLAY_FRAME, MessageType_Enum.FULL_OVERLAY_FRAME_RESPONSE, function(response) {
            if (response["success"]) {
              _this7.updateBoxRect_(response["boxRect"]);
              resolve();
            } else {
              reject("Request to open lightbox rejected by host document");
            }
          });
        }
      });
    };
    _proto2.requestCancelFullOverlayFrame_ = function requestCancelFullOverlayFrame_() {
      var _this8 = this;
      return new Promise(function(resolve, reject) {
        if (_this8.isFriendlyIframed_) {
          var iframe = _this8.win.frameElement;
          if (iframe) {
            _this8.topWindowFrameOverlayManager_.collapseFrame(iframe, function(boxRect) {
              _this8.updateBoxRect_(boxRect);
              resolve();
            });
          } else {
            reject("Request to open lightbox failed; frame does not exist.");
          }
        } else {
          _this8.iframeClient_.requestOnce(MessageType_Enum.CANCEL_FULL_OVERLAY_FRAME, MessageType_Enum.CANCEL_FULL_OVERLAY_FRAME_RESPONSE, function(response) {
            _this8.updateBoxRect_(response["boxRect"]);
            resolve();
          });
        }
      });
    };
    _proto2.getBodyElement = function getBodyElement() {
      return devAssertElement(this.win.document.body);
    };
    _proto2.disconnect = function disconnect() {
      if (this.unobserveFunction_) {
        this.unobserveFunction_();
        this.unobserveFunction_ = null;
      }
    };
    _proto2.getScrollWidth = function getScrollWidth() {
      return this.getScrollingElement().offsetWidth;
    };
    _proto2.getScrollHeight = function getScrollHeight() {
      return this.getScrollingElement().offsetHeight;
    };
    _proto2.getContentHeight = function getContentHeight() {
      return this.getScrollHeight();
    };
    _proto2.updatePaddingTop = function updatePaddingTop() {
    };
    _proto2.hideViewerHeader = function hideViewerHeader() {
    };
    _proto2.showViewerHeader = function showViewerHeader() {
    };
    _proto2.disableScroll = function disableScroll() {
    };
    _proto2.resetScroll = function resetScroll() {
    };
    _proto2.ensureReadyForElements = function ensureReadyForElements() {
    };
    _proto2.setScrollTop = function setScrollTop() {
    };
    _proto2.contentHeightChanged = function contentHeightChanged() {
    };
    _proto2.getBorderTop = function getBorderTop() {
      return 0;
    };
    _proto2.requiresFixedLayerTransfer = function requiresFixedLayerTransfer() {
      return false;
    };
    _proto2.overrideGlobalScrollTo = function overrideGlobalScrollTo() {
      return false;
    };
    return ViewportBindingInabox2;
  }();
  function installInaboxViewportService(ampdoc2) {
    var binding = new ViewportBindingInabox(ampdoc2.win);
    registerServiceBuilderForDoc(ampdoc2, "viewport", function() {
      return new InaboxViewportImpl(ampdoc2, binding);
    }, true);
  }
  function isChanged(newRect, oldRect) {
    return isMoved(newRect, oldRect) || isResized(newRect, oldRect);
  }
  function isMoved(newRect, oldRect) {
    return newRect.left != oldRect.left || newRect.top != oldRect.top;
  }
  function isResized(newRect, oldRect) {
    return newRect.width != oldRect.width || newRect.height != oldRect.height;
  }

  // src/inabox/inabox-services.js
  function installAmpdocServicesForInabox(ampdoc2) {
    installIframeMessagingClient(ampdoc2.win);
    installUrlForDoc(ampdoc2);
    installTemplatesServiceForDoc(ampdoc2);
    installDocumentInfoServiceForDoc(ampdoc2);
    installInaboxCidService(ampdoc2);
    installInaboxViewerServiceForDoc(ampdoc2);
    installInaboxViewportService(ampdoc2);
    installHiddenObserverForDoc(ampdoc2);
    installHistoryServiceForDoc(ampdoc2);
    installInaboxResourcesServiceForDoc(ampdoc2);
    installOwnersServiceForDoc(ampdoc2);
    installInaboxMutatorServiceForDoc(ampdoc2);
    installUrlReplacementsServiceForDoc(ampdoc2);
    installActionServiceForDoc(ampdoc2);
    installStandardActionsForDoc(ampdoc2);
    unsupportedService(ampdoc2, "storage");
    installGlobalNavigationHandlerForDoc(ampdoc2);
    installGlobalSubmitListenerForDoc(ampdoc2);
  }
  function unsupportedService(ampdoc2, name) {
    rejectServicePromiseForDoc(ampdoc2, name, new Error("Un-supported service: " + name));
  }

  // build/amp-story-auto-ads-inabox-0.1.css.js
  var CSS2 = "amp-story-cta-layer{display:block!important;position:absolute!important;top:80%!important;right:0!important;bottom:0!important;left:0!important;margin:0!important;z-index:2147483642!important}\n/*# sourceURL=/extensions/amp-story-auto-ads/0.1/amp-story-auto-ads-inabox.css*/";

  // build/amp-story-auto-ads-shared-0.1.css.js
  var CSS3 = ".i-amphtml-story-ad-link-root{all:initial!important;color:initial!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;-ms-flex-align:center!important;align-items:center!important}\n/*# sourceURL=/extensions/amp-story-auto-ads/0.1/amp-story-auto-ads-shared.css*/";

  // extensions/amp-story-auto-ads/0.1/story-ad-button-text-fitter.js
  var MAX_HEIGHT = 32;
  var FontSizes = {
    MIN: 12,
    MAX: 14
  };
  var ButtonTextFitter = /* @__PURE__ */ function() {
    function ButtonTextFitter2(ampdoc2) {
      var _this = this;
      this.mutator_ = Services.mutatorForDoc(ampdoc2);
      this.doc_ = ampdoc2.win.document;
      this.measurer_ = this.doc_.createElement("div");
      this.mutator_.mutateElement(this.measurer_, function() {
        _this.doc_.body.appendChild(_this.measurer_);
        setStyles(_this.measurer_, {
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          visibility: "hidden",
          "font-weight": "bold",
          "letter-spacing": "0.2px"
        });
      });
    }
    var _proto = ButtonTextFitter2.prototype;
    _proto.fit = function fit(pageElement, container, content) {
      var _this2 = this;
      var success = false;
      return this.mutator_.mutateElement(container, function() {
        _this2.measurer_.textContent = content;
        var fontSize = calculateFontSize(_this2.measurer_, MAX_HEIGHT, _this2.getMaxWidth_(pageElement), FontSizes.MIN, FontSizes.MAX);
        if (fontSize >= FontSizes.MIN) {
          _this2.updateFontSize_(container, fontSize);
          success = true;
        }
      }).then(function() {
        return success;
      });
    };
    _proto.getMaxWidth_ = function getMaxWidth_(pageElement) {
      return pageElement.offsetWidth - 84;
    };
    _proto.updateFontSize_ = function updateFontSize_(container, fontSize) {
      setStyle(container, "fontSize", px(fontSize));
    };
    return ButtonTextFitter2;
  }();
  function calculateFontSize(measurer, expectedHeight, expectedWidth, minFontSize, maxFontSize) {
    for (var fontSize = maxFontSize; fontSize >= minFontSize; fontSize--) {
      setStyle(measurer, "fontSize", px(fontSize));
      var height = measurer.offsetHeight;
      var width = measurer.offsetWidth;
      if (height < expectedHeight && width < expectedWidth) {
        return fontSize;
      }
    }
    return minFontSize - 1;
  }

  // src/experiments/story-ad-progress-segment.js
  var _BranchToTimeValues;
  var StoryAdSegmentExp = {
    ID: "story-ad-progress-segment",
    CONTROL: "31063379",
    NO_ADVANCE_BOTH: "31063380",
    NO_ADVANCE_AD: "31063381",
    TEN_SECONDS: "31063382",
    TWELVE_SECONDS: "31063383",
    FOURTEEN_SECONDS: "31063384"
  };
  var StoryAdSegmentTimes = {
    SENTINEL: "999999ms",
    TEN_SECONDS: "10000ms",
    TWELVE_SECONDS: "12000ms",
    FOURTEEN_SECONDS: "14000ms"
  };
  var BranchToTimeValues = (_BranchToTimeValues = {}, _BranchToTimeValues[StoryAdSegmentExp.TEN_SECONDS] = StoryAdSegmentTimes.TEN_SECONDS, _BranchToTimeValues[StoryAdSegmentExp.TWELVE_SECONDS] = StoryAdSegmentTimes.TWELVE_SECONDS, _BranchToTimeValues[StoryAdSegmentExp.FOURTEEN_SECONDS] = StoryAdSegmentTimes.FOURTEEN_SECONDS, _BranchToTimeValues);

  // build/amp-story-auto-ads-attribution-0.1.css.js
  var CSS4 = ".i-amphtml-story-ad-attribution{position:absolute;bottom:0!important;left:0!important;max-height:15px!important;z-index:4!important}.i-amphtml-story-ad-fullbleed.i-amphtml-story-ad-attribution{bottom:12.5vh!important;left:50%!important;transform:translateX(-22.5vh)!important}\n/*# sourceURL=/extensions/amp-story-auto-ads/0.1/amp-story-auto-ads-attribution.css*/";

  // build/amp-story-auto-ads-cta-button-0.1.css.js
  var CSS5 = ".i-amphtml-story-ad-link{background-color:#fff!important;border-radius:20px!important;box-sizing:border-box!important;bottom:32px!important;box-shadow:0px 2px 12px rgba(0,0,0,0.16)!important;color:#4285f4!important;font-family:Roboto,sans-serif!important;font-weight:700!important;height:36px!important;letter-spacing:0.2px!important;line-height:36px!important;overflow:hidden!important;opacity:0;padding:0 10px!important;position:absolute!important;text-align:center!important;text-decoration:none!important;min-width:120px!important;max-width:calc(100vw - 64px)}[cta-active].i-amphtml-story-ad-link{animation-delay:100ms!important;animation-duration:300ms!important;animation-timing-function:cubic-bezier(0.4,0,0.2,1)!important;animation-fill-mode:forwards!important;animation-name:ad-cta!important}@keyframes ad-cta{0%{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}\n/*# sourceURL=/extensions/amp-story-auto-ads/0.1/amp-story-auto-ads-cta-button.css*/";

  // extensions/amp-story/1.0/amp-story-store-service.js
  var _stateComparisonFunct;
  var StateProperty = {
    CAN_INSERT_AUTOMATIC_AD: "canInsertAutomaticAd",
    CAN_SHOW_AUDIO_UI: "canShowAudioUi",
    CAN_SHOW_NAVIGATION_OVERLAY_HINT: "canShowNavigationOverlayHint",
    CAN_SHOW_PAGINATION_BUTTONS: "canShowPaginationButtons",
    CAN_SHOW_PREVIOUS_PAGE_HELP: "canShowPreviousPageHelp",
    CAN_SHOW_SHARING_UIS: "canShowSharingUis",
    CAN_SHOW_STORY_URL_INFO: "canShowStoryUrlInfo",
    CAN_SHOW_SYSTEM_LAYER_BUTTONS: "canShowSystemLayerButtons",
    VIEWER_CUSTOM_CONTROLS: "viewerCustomControls",
    ACCESS_STATE: "accessState",
    AD_STATE: "adState",
    PAGE_ATTACHMENT_STATE: "pageAttachmentState",
    AFFILIATE_LINK_STATE: "affiliateLinkState",
    EDUCATION_STATE: "educationState",
    GYROSCOPE_PERMISSION_STATE: "gyroscopePermissionState",
    INFO_DIALOG_STATE: "infoDialogState",
    INTERACTIVE_COMPONENT_STATE: "interactiveEmbeddedComponentState",
    INTERACTIVE_REACT_STATE: "interactiveReactState",
    KEYBOARD_ACTIVE_STATE: "keyboardActiveState",
    MUTED_STATE: "mutedState",
    PAGE_HAS_AUDIO_STATE: "pageAudioState",
    PAGE_HAS_ELEMENTS_WITH_PLAYBACK_STATE: "pageHasElementsWithPlaybackState",
    PANNING_MEDIA_STATE: "panningMediaState",
    PAUSED_STATE: "pausedState",
    PREVIEW_STATE: "previewState",
    RTL_STATE: "rtlState",
    SHARE_MENU_STATE: "shareMenuState",
    SHOPPING_DATA: "shoppingData",
    STORY_HAS_AUDIO_STATE: "storyHasAudioState",
    STORY_HAS_BACKGROUND_AUDIO_STATE: "storyHasBackgroundAudioState",
    STORY_HAS_PLAYBACK_UI_STATE: "storyHasPlaybackUiState",
    SYSTEM_UI_IS_VISIBLE_STATE: "systemUiIsVisibleState",
    UI_STATE: "uiState",
    ACTIONS_ALLOWLIST: "actionsAllowlist",
    CONSENT_ID: "consentId",
    CURRENT_PAGE_ID: "currentPageId",
    CURRENT_PAGE_INDEX: "currentPageIndex",
    ADVANCEMENT_MODE: "advancementMode",
    NAVIGATION_PATH: "navigationPath",
    NEW_PAGE_AVAILABLE_ID: "newPageAvailableId",
    PAGE_IDS: "pageIds",
    PAGE_SIZE: "pageSize"
  };
  var stateComparisonFunctions = (_stateComparisonFunct = {}, _stateComparisonFunct[StateProperty.ACTIONS_ALLOWLIST] = function(old, curr) {
    return old.length !== curr.length;
  }, _stateComparisonFunct[StateProperty.INTERACTIVE_COMPONENT_STATE] = function(old, curr) {
    return old.element !== curr.element || old.state !== curr.state;
  }, _stateComparisonFunct[StateProperty.NAVIGATION_PATH] = function(old, curr) {
    return old.length !== curr.length;
  }, _stateComparisonFunct[StateProperty.PAGE_IDS] = function(old, curr) {
    return old.length !== curr.length;
  }, _stateComparisonFunct[StateProperty.PAGE_SIZE] = function(old, curr) {
    return old === null || curr === null || old.width !== curr.width || old.height !== curr.height;
  }, _stateComparisonFunct[StateProperty.PANNING_MEDIA_STATE] = function(old, curr) {
    return old === null || curr === null || !deepEquals(old, curr, 2);
  }, _stateComparisonFunct[StateProperty.SHOPPING_DATA] = function(old, curr) {
    return old === null || curr === null || !deepEquals(old, curr, 2);
  }, _stateComparisonFunct[StateProperty.INTERACTIVE_REACT_STATE] = function(old, curr) {
    return !deepEquals(old, curr, 3);
  }, _stateComparisonFunct);

  // src/core/dom/web-components.js
  var ShadowDomVersion_Enum = {
    NONE: "none",
    V0: "v0",
    V1: "v1"
  };
  var shadowDomSupportedVersion;
  var shadowCssSupported;
  function isShadowDomSupported() {
    return getShadowDomSupportedVersion() != ShadowDomVersion_Enum.NONE;
  }
  function isShadowCssSupported() {
    if (shadowCssSupported === void 0) {
      shadowCssSupported = isShadowDomSupported() && (isNative(Element.prototype.attachShadow) || isNative(Element.prototype.createShadowRoot));
    }
    return shadowCssSupported;
  }
  function isNative(func) {
    return !!func && func.toString().indexOf("[native code]") != -1;
  }
  function getShadowDomSupportedVersion(opt_elementClass) {
    if (shadowDomSupportedVersion === void 0) {
      shadowDomSupportedVersion = getShadowDomVersion(opt_elementClass || Element);
    }
    return shadowDomSupportedVersion;
  }
  function getShadowDomVersion(element) {
    if (!!element.prototype.attachShadow) {
      return ShadowDomVersion_Enum.V1;
    } else if (!!element.prototype.createShadowRoot) {
      return ShadowDomVersion_Enum.V0;
    }
    return ShadowDomVersion_Enum.NONE;
  }

  // third_party/webcomponentsjs/ShadowCSS.js
  var ShadowCSS = {
    strictStyling: false,
    scopeRules: function scopeRules(cssRules, scopeSelector2, opt_transformer) {
      var cssText3 = "";
      if (cssRules) {
        Array.prototype.forEach.call(cssRules, function(rule) {
          if (rule.selectorText && (rule.style && rule.style.cssText !== void 0)) {
            cssText3 += this.scopeSelector(rule.selectorText, scopeSelector2, this.strictStyling, opt_transformer) + " {\n	";
            cssText3 += this.propertiesFromRule(rule) + "\n}\n\n";
          } else if (rule.type === CSSRule.MEDIA_RULE) {
            cssText3 += "@media " + rule.media.mediaText + " {\n";
            cssText3 += this.scopeRules(rule.cssRules, scopeSelector2);
            cssText3 += "\n}\n\n";
          } else {
            try {
              if (rule.cssText) {
                cssText3 += rule.cssText + "\n\n";
              }
            } catch (x) {
              if (rule.type === CSSRule.KEYFRAMES_RULE && rule.cssRules) {
                cssText3 += this.ieSafeCssTextFromKeyFrameRule(rule);
              }
            }
          }
        }, this);
      }
      return cssText3;
    },
    ieSafeCssTextFromKeyFrameRule: function ieSafeCssTextFromKeyFrameRule(rule) {
      var cssText3 = "@keyframes " + rule.name + " {";
      Array.prototype.forEach.call(rule.cssRules, function(rule2) {
        cssText3 += " " + rule2.keyText + " {" + rule2.style.cssText + "}";
      });
      cssText3 += " }";
      return cssText3;
    },
    scopeSelector: function scopeSelector(selector, _scopeSelector, strict, opt_transformer) {
      var r = [], parts = selector.split(",");
      parts.forEach(function(p) {
        p = p.trim();
        if (opt_transformer) {
          p = opt_transformer(p);
        }
        if (this.selectorNeedsScoping(p, _scopeSelector)) {
          p = strict && !p.match(polyfillHostNoCombinator) ? this.applyStrictSelectorScope(p, _scopeSelector) : this.applySelectorScope(p, _scopeSelector);
        }
        r.push(p);
      }, this);
      return r.join(", ");
    },
    selectorNeedsScoping: function selectorNeedsScoping(selector, scopeSelector2) {
      if (Array.isArray(scopeSelector2)) {
        return true;
      }
      var re = this.makeScopeMatcher(scopeSelector2);
      return !selector.match(re);
    },
    makeScopeMatcher: function makeScopeMatcher(scopeSelector2) {
      scopeSelector2 = scopeSelector2.replace(/\[/g, "\\[").replace(/\]/g, "\\]");
      return new RegExp("^(" + scopeSelector2 + ")" + selectorReSuffix, "m");
    },
    applySelectorScope: function applySelectorScope(selector, selectorScope) {
      return Array.isArray(selectorScope) ? this.applySelectorScopeList(selector, selectorScope) : this.applySimpleSelectorScope(selector, selectorScope);
    },
    applySelectorScopeList: function applySelectorScopeList(selector, scopeSelectorList) {
      var r = [];
      for (var i = 0, s; s = scopeSelectorList[i]; i++) {
        r.push(this.applySimpleSelectorScope(selector, s));
      }
      return r.join(", ");
    },
    applySimpleSelectorScope: function applySimpleSelectorScope(selector, scopeSelector2) {
      if (selector.match(polyfillHostRe)) {
        selector = selector.replace(polyfillHostNoCombinator, scopeSelector2);
        return selector.replace(polyfillHostRe, scopeSelector2 + " ");
      } else {
        return scopeSelector2 + " " + selector;
      }
    },
    applyStrictSelectorScope: function applyStrictSelectorScope(selector, scopeSelector2) {
      scopeSelector2 = scopeSelector2.replace(/\[is=([^\]]*)\]/g, "$1");
      var splits = [" ", ">", "+", "~"], scoped = selector, attrName = "[" + scopeSelector2 + "]";
      splits.forEach(function(sep) {
        var parts = scoped.split(sep);
        scoped = parts.map(function(p) {
          var t = p.trim().replace(polyfillHostRe, "");
          if (t && splits.indexOf(t) < 0 && t.indexOf(attrName) < 0) {
            p = t.replace(/([^:]*)(:*)(.*)/, "$1" + attrName + "$2$3");
          }
          return p;
        }).join(sep);
      });
      return scoped;
    },
    propertiesFromRule: function propertiesFromRule(rule) {
      var cssText3 = rule.style.cssText;
      if (rule.style.content && !rule.style.content.match(/['"]+|attr/)) {
        cssText3 = cssText3.replace(/content:[^;]*;/g, "content: '" + rule.style.content + "';");
      }
      var style = rule.style;
      for (var i in style) {
        if (style[i] === "initial") {
          cssText3 += i + ": initial; ";
        }
      }
      return cssText3;
    }
  };
  var polyfillHost = "-shadowcsshost";
  var polyfillHostContext = "-shadowcsscontext";
  var parenSuffix = ")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)";
  var cssColonHostRe = new RegExp("(" + polyfillHost + parenSuffix, "gim");
  var cssColonHostContextRe = new RegExp("(" + polyfillHostContext + parenSuffix, "gim");
  var selectorReSuffix = "([>\\s~+[.,{:][\\s\\S]*)?$";
  var polyfillHostNoCombinator = polyfillHost + "-no-combinator";
  var polyfillHostRe = new RegExp(polyfillHost, "gim");
  var polyfillHostContextRe = new RegExp(polyfillHostContext, "gim");

  // src/shadow-embed.js
  var CSS_SELECTOR_BEG_REGEX = /[^\.\-\_0-9a-zA-Z]/;
  var CSS_SELECTOR_END_REGEX = /[^\-\_0-9a-zA-Z]/;
  function createShadowRoot(hostElement) {
    var win = getWin(hostElement);
    var existingRoot = hostElement.shadowRoot || hostElement.__AMP_SHADOW_ROOT;
    if (existingRoot) {
      existingRoot.innerHTML = "";
      return existingRoot;
    }
    var shadowRoot;
    var shadowDomSupported = getShadowDomSupportedVersion();
    if (shadowDomSupported == ShadowDomVersion_Enum.V1) {
      shadowRoot = hostElement.attachShadow({
        mode: "open"
      });
      if (!shadowRoot.styleSheets) {
        Object.defineProperty(shadowRoot, "styleSheets", {
          get: function get() {
            var items = [];
            iterateCursor(shadowRoot.childNodes, function(child) {
              if (child.tagName === "STYLE") {
                items.push(child.sheet);
              }
            });
            return items;
          }
        });
      }
    } else if (shadowDomSupported == ShadowDomVersion_Enum.V0) {
      shadowRoot = hostElement.createShadowRoot();
    } else {
      shadowRoot = createShadowRootPolyfill(hostElement);
    }
    if (!isShadowCssSupported()) {
      var rootId = "i-amphtml-sd-" + win.Math.floor(win.Math.random() * 1e4);
      shadowRoot["id"] = rootId;
      shadowRoot.host.classList.add(rootId);
      installCssTransformer(shadowRoot, function(css) {
        return transformShadowCss(shadowRoot, css);
      });
    }
    return shadowRoot;
  }
  function createShadowRootPolyfill(hostElement) {
    var doc = hostElement.ownerDocument;
    hostElement.classList.add("i-amphtml-shadow-host-polyfill");
    var hostStyle = doc.createElement("style");
    hostStyle.textContent = ".i-amphtml-shadow-host-polyfill>:not(i-amphtml-shadow-root){display:none!important}";
    hostElement.appendChild(hostStyle);
    var shadowRoot = doc.createElement("i-amphtml-shadow-root");
    hostElement.appendChild(shadowRoot);
    hostElement.__AMP_SHADOW_ROOT = shadowRoot;
    Object.defineProperty(hostElement, "shadowRoot", {
      enumerable: true,
      configurable: true,
      value: shadowRoot
    });
    shadowRoot.host = hostElement;
    shadowRoot.getElementById = function(id) {
      var escapedId = escapeCssSelectorIdent(id);
      return shadowRoot.querySelector("#" + escapedId);
    };
    Object.defineProperty(shadowRoot, "styleSheets", {
      get: function get() {
        if (!doc.styleSheets) {
          return [];
        }
        return toArray(doc.styleSheets).filter(function(styleSheet) {
          return shadowRoot.contains(styleSheet.ownerNode);
        });
      }
    });
    return shadowRoot;
  }
  function transformShadowCss(shadowRoot, css) {
    return scopeShadowCss(shadowRoot, css);
  }
  function scopeShadowCss(shadowRoot, css) {
    var id = devAssert2(shadowRoot["id"]);
    var doc = shadowRoot.ownerDocument;
    var rules = null;
    try {
      rules = getStylesheetRules(doc.implementation.createHTMLDocument(""), css);
    } catch (e) {
    }
    if (!rules) {
      try {
        rules = getStylesheetRules(doc, css);
      } catch (e) {
      }
    }
    if (!rules) {
      return css;
    }
    var scopeRules2 = ShadowCSS.scopeRules;
    return scopeRules2.call(ShadowCSS, rules, "." + id, transformRootSelectors);
  }
  function transformRootSelectors(selector) {
    return selector.replace(/(html|body)/g, rootSelectorPrefixer);
  }
  function rootSelectorPrefixer(match, name, pos, selector) {
    var prev = selector.charAt(pos - 1);
    var next = selector.charAt(pos + match.length);
    if ((!prev || CSS_SELECTOR_BEG_REGEX.test(prev)) && (!next || CSS_SELECTOR_END_REGEX.test(next))) {
      return "amp-" + match;
    }
    return match;
  }
  function getStylesheetRules(doc, css) {
    var style = doc.createElement("style");
    style.textContent = css;
    try {
      (doc.head || doc.documentElement).appendChild(style);
      if (style.sheet) {
        return style.sheet.cssRules;
      }
      return null;
    } finally {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    }
  }

  // extensions/amp-story/1.0/utils.js
  function createShadowRootWithStyle(container, element, css) {
    var style = self.document.createElement("style");
    style.textContent = css;
    var containerToUse = getMode().test ? container : createShadowRoot(container);
    containerToUse.appendChild(style);
    containerToUse.appendChild(element);
    return container;
  }
  var TEXT_BACKGROUND_COLOR_ATTRIBUTE_NAME = "data-text-background-color";
  var TEXT_BACKGROUND_COLOR_SELECTOR = "[" + TEXT_BACKGROUND_COLOR_ATTRIBUTE_NAME + "]";

  // extensions/amp-story-auto-ads/0.1/story-ad-ui.js
  function _createForOfIteratorHelperLoose12(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray12(o)) || allowArrayLike && o && typeof o.length === "number") {
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
  function _unsupportedIterableToArray12(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray12(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray12(o, minLen);
  }
  function _arrayLikeToArray12(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  var TAG17 = "amp-story-auto-ads:ui";
  var CTA_META_PREFIX = "amp-cta-";
  var A4A_VARS_META_PREFIX = "amp4ads-vars-";
  var START_CTA_ANIMATION_ATTR = "cta-active";
  var A4AVarNames = {
    ATTRIBUTION_ICON: "attribution-icon",
    ATTRIBUTION_URL: "attribution-url",
    CTA_TYPE: "cta-type",
    CTA_URL: "cta-url"
  };
  var PageOutlinkLayerVarNames = ["cta-accent-color", "cta-accent-element", "cta-image", "theme"];
  function getStoryAdMetaTags(doc) {
    var selector = "meta[name^=amp4ads-vars-],meta[name^=amp-cta-]";
    return doc.querySelectorAll(selector);
  }
  function getStoryAdMetadataFromDoc(doc) {
    var storyMetaTags = getStoryAdMetaTags(doc);
    var vars = map();
    iterateCursor(storyMetaTags, function(tag) {
      var content = tag.content, name = tag.name;
      if (name.startsWith(CTA_META_PREFIX)) {
        var key = name.split("amp-")[1];
        vars[key] = content;
      } else if (name.startsWith(A4A_VARS_META_PREFIX)) {
        var _key = name.split(A4A_VARS_META_PREFIX)[1];
        vars[_key] = content;
      }
    });
    return vars;
  }
  function validateCtaMetadata(metadata, opt_inabox) {
    if (!metadata[A4AVarNames.CTA_TYPE] || !metadata[A4AVarNames.CTA_URL]) {
      !opt_inabox && user().error(TAG17, "Both CTA Type & CTA Url are required in ad response.");
      return false;
    }
    return true;
  }
  function maybeCreateAttribution(win, metadata, container) {
    var doc = win.document;
    try {
      var href = metadata[A4AVarNames.ATTRIBUTION_URL];
      var src = metadata[A4AVarNames.ATTRIBUTION_ICON];
      if (!href || !src) {
        return null;
      }
      assertHttpsUrl(href, dev().assertElement(container), "amp-story-auto-ads attribution url");
      assertHttpsUrl(src, dev().assertElement(container), "amp-story-auto-ads attribution icon");
      var root = createElementWithAttributes(doc, "div", dict({
        "role": "button",
        "class": "i-amphtml-attribution-host"
      }));
      var adChoicesIcon = createElementWithAttributes(doc, "img", dict({
        "class": "i-amphtml-story-ad-attribution",
        "src": src
      }));
      adChoicesIcon.addEventListener("click", function(unusedEvent) {
        return handleAttributionClick(win, href);
      });
      createShadowRootWithStyle(root, adChoicesIcon, CSS4);
      container.appendChild(root);
      return adChoicesIcon;
    } catch (e) {
      return null;
    }
  }
  function handleAttributionClick(win, href) {
    openWindowDialog(win, href, "_blank");
  }
  function createPageOutlink_(doc, uiMetadata, container) {
    var pageOutlink = doc.createElement("amp-story-page-outlink");
    pageOutlink.setAttribute("layout", "nodisplay");
    var pageAnchorTag = createElementWithAttributes(doc, "a", dict({
      "class": "i-amphtml-story-ad-link",
      "target": "_top",
      "href": uiMetadata[A4AVarNames.CTA_URL]
    }));
    pageAnchorTag.textContent = uiMetadata[A4AVarNames.CTA_TYPE];
    pageOutlink.appendChild(pageAnchorTag);
    for (var _iterator = _createForOfIteratorHelperLoose12(PageOutlinkLayerVarNames), _step; !(_step = _iterator()).done; ) {
      var pageOutlinkLayerVarName = _step.value;
      if (uiMetadata[pageOutlinkLayerVarName]) {
        pageOutlink.setAttribute(pageOutlinkLayerVarName, uiMetadata[pageOutlinkLayerVarName]);
      }
    }
    pageOutlink.className = "i-amphtml-story-page-outlink-container";
    container.appendChild(pageOutlink);
    return pageAnchorTag;
  }
  function createCtaLayer_(a, doc, container) {
    var ctaLayer = doc.createElement("amp-story-cta-layer");
    ctaLayer.className = "i-amphtml-cta-container";
    var linkRoot = createElementWithAttributes(doc, "div", dict({
      "class": "i-amphtml-story-ad-link-root",
      "role": "button"
    }));
    createShadowRootWithStyle(linkRoot, a, CSS5);
    ctaLayer.appendChild(linkRoot);
    container.appendChild(ctaLayer);
    return a;
  }
  function createCta(doc, buttonFitter, container, uiMetadata) {
    var ctaUrl = uiMetadata[A4AVarNames.CTA_URL];
    var ctaText = uiMetadata[A4AVarNames.CTA_TYPE];
    var a = createElementWithAttributes(doc, "a", dict({
      "class": "i-amphtml-story-ad-link",
      "target": "_blank",
      "href": ctaUrl
    }));
    var fitPromise = buttonFitter.fit(dev().assertElement(container), a, ctaText);
    return fitPromise.then(function(success) {
      if (!success) {
        user().warn(TAG17, "CTA button text is too long. Ad was discarded.");
        return null;
      }
      a.href = ctaUrl;
      a.textContent = ctaText;
      if (a.protocol !== "https:" && a.protocol !== "http:") {
        user().warn(TAG17, "CTA url is not valid. Ad was discarded");
        return null;
      }
      var storyAdSegmentBranch = getExperimentBranch(doc.defaultView, StoryAdSegmentExp.ID);
      if (storyAdSegmentBranch && storyAdSegmentBranch !== StoryAdSegmentExp.CONTROL) {
        return createPageOutlink_(doc, uiMetadata, container);
      } else {
        return createCtaLayer_(a, doc, container);
      }
    });
  }

  // src/inabox/inabox-story-ad.js
  function maybeRenderInaboxAsStoryAd(ampdoc2) {
    var win = ampdoc2.win;
    var doc = win.document;
    var storyAdMetadata = getStoryAdMetadataFromDoc(doc);
    if (!validateCtaMetadata(storyAdMetadata, true)) {
      return;
    }
    installStylesForDoc(ampdoc2, CSS3 + CSS2, function() {
    });
    maybeCreateAttribution(win, storyAdMetadata, doc.body);
    var buttonFitter = new ButtonTextFitter(ampdoc2);
    var ctaContainer = doc.createElement("div");
    createCta(doc, buttonFitter, ctaContainer, storyAdMetadata).then(function(ctaAnchor) {
      return ctaAnchor && ctaAnchor.setAttribute(START_CTA_ANIMATION_ATTR, "");
    });
    doc.body.appendChild(ctaContainer);
    if (win.parent) {
      win.parent.postMessage("amp-story-ad-load", "*");
    }
  }

  // src/inabox/utils.js
  function registerIniLoadListener(ampdoc2) {
    var win = ampdoc2.win;
    var root = ampdoc2.getRootNode();
    whenContentIniLoadMeasure(ampdoc2, win, Services.viewportForDoc(ampdoc2).getLayoutRect(root.documentElement || root.body || root)).then(function() {
      win.dispatchEvent(createCustomEvent(win, "amp-ini-load", null, {
        bubbles: true
      }));
      if (win.parent) {
        win.parent.postMessage("amp-ini-load", "*");
      }
    });
  }
  function getA4AId(win) {
    var a4aIdMetaTag = win.document.head.querySelector('meta[name="amp4ads-id"]');
    if (a4aIdMetaTag) {
      return a4aIdMetaTag.getAttribute("content");
    }
    return null;
  }

  // build/ampshared.css.js
  var cssText = "[hidden]{display:none!important}.i-amphtml-element{display:inline-block}.i-amphtml-blurry-placeholder{transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;pointer-events:none}[layout=nodisplay]:not(.i-amphtml-element){display:none!important}.i-amphtml-layout-fixed,[layout=fixed][width][height]:not(.i-amphtml-layout-fixed){display:inline-block;position:relative}.i-amphtml-layout-responsive,[layout=responsive][width][height]:not(.i-amphtml-layout-responsive),[width][height][heights]:not([layout]):not(.i-amphtml-layout-responsive),[width][height][sizes]:not(img):not([layout]):not(.i-amphtml-layout-responsive){display:block;position:relative}.i-amphtml-layout-intrinsic,[layout=intrinsic][width][height]:not(.i-amphtml-layout-intrinsic){display:inline-block;position:relative;max-width:100%}.i-amphtml-layout-intrinsic .i-amphtml-sizer{max-width:100%}.i-amphtml-intrinsic-sizer{max-width:100%;display:block!important}.i-amphtml-layout-container,.i-amphtml-layout-fixed-height,[layout=container],[layout=fixed-height][height]:not(.i-amphtml-layout-fixed-height){display:block;position:relative}.i-amphtml-layout-fill,.i-amphtml-layout-fill.i-amphtml-notbuilt,[layout=fill]:not(.i-amphtml-layout-fill),body noscript>*{display:block;overflow:hidden!important;position:absolute;top:0;left:0;bottom:0;right:0}body noscript>*{position:absolute!important;width:100%;height:100%;z-index:2}body noscript{display:inline!important}.i-amphtml-layout-flex-item,[layout=flex-item]:not(.i-amphtml-layout-flex-item){display:block;position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.i-amphtml-layout-fluid{position:relative}.i-amphtml-layout-size-defined{overflow:hidden!important}.i-amphtml-layout-awaiting-size{position:absolute!important;top:auto!important;bottom:auto!important}i-amphtml-sizer{display:block!important}@supports (aspect-ratio:1/1){i-amphtml-sizer.i-amphtml-disable-ar{display:none!important}}.i-amphtml-blurry-placeholder,.i-amphtml-fill-content{display:block;height:0;max-height:100%;max-width:100%;min-height:100%;min-width:100%;width:0;margin:auto}.i-amphtml-layout-size-defined .i-amphtml-fill-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-replaced-content,.i-amphtml-screen-reader{padding:0!important;border:none!important}.i-amphtml-screen-reader{position:fixed!important;top:0px!important;left:0px!important;width:4px!important;height:4px!important;opacity:0!important;overflow:hidden!important;margin:0!important;display:block!important;visibility:visible!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:8px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:12px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:16px!important}.i-amphtml-unresolved{position:relative;overflow:hidden!important}.i-amphtml-select-disabled{-webkit-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.i-amphtml-notbuilt,[layout]:not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not(img):not([layout]):not(.i-amphtml-element){position:relative;overflow:hidden!important;color:transparent!important}.i-amphtml-notbuilt:not(.i-amphtml-layout-container)>*,[layout]:not([layout=container]):not(.i-amphtml-element)>*,[width][height][heights]:not([layout]):not(.i-amphtml-element)>*,[width][height][sizes]:not([layout]):not(.i-amphtml-element)>*{display:none}amp-img:not(.i-amphtml-element)[i-amphtml-ssr]>img.i-amphtml-fill-content{display:block}.i-amphtml-notbuilt:not(.i-amphtml-layout-container),[layout]:not([layout=container]):not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not(img):not([layout]):not(.i-amphtml-element){color:transparent!important;line-height:0!important}.i-amphtml-ghost{visibility:hidden!important}.i-amphtml-element>[placeholder],[layout]:not(.i-amphtml-element)>[placeholder],[width][height][heights]:not([layout]):not(.i-amphtml-element)>[placeholder],[width][height][sizes]:not([layout]):not(.i-amphtml-element)>[placeholder]{display:block;line-height:normal}.i-amphtml-element>[placeholder].amp-hidden,.i-amphtml-element>[placeholder].hidden{visibility:hidden}.i-amphtml-element:not(.amp-notsupported)>[fallback],.i-amphtml-layout-container>[placeholder].amp-hidden,.i-amphtml-layout-container>[placeholder].hidden{display:none}.i-amphtml-layout-size-defined>[fallback],.i-amphtml-layout-size-defined>[placeholder]{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:1}amp-img[i-amphtml-ssr]:not(.i-amphtml-element)>[placeholder]{z-index:auto}.i-amphtml-notbuilt>[placeholder]{display:block!important}.i-amphtml-hidden-by-media-query{display:none!important}.i-amphtml-element-error{background:red!important;color:#fff!important;position:relative!important}.i-amphtml-element-error:before{content:attr(error-message)}i-amp-scroll-container,i-amphtml-scroll-container{position:absolute;top:0;left:0;right:0;bottom:0;display:block}i-amp-scroll-container.amp-active,i-amphtml-scroll-container.amp-active{overflow:auto;-webkit-overflow-scrolling:touch}.i-amphtml-loading-container{display:block!important;pointer-events:none;z-index:1}.i-amphtml-notbuilt>.i-amphtml-loading-container{display:block!important}.i-amphtml-loading-container.amp-hidden{visibility:hidden}.i-amphtml-element>[overflow]{cursor:pointer;position:relative;z-index:2;visibility:hidden;display:initial;line-height:normal}.i-amphtml-layout-size-defined>[overflow]{position:absolute}.i-amphtml-element>[overflow].amp-visible{visibility:visible}template{display:none!important}.amp-border-box,.amp-border-box *,.amp-border-box :after,.amp-border-box :before{box-sizing:border-box}amp-pixel{display:none!important}amp-analytics,amp-auto-ads,amp-story-auto-ads{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}html.i-amphtml-fie>amp-analytics{position:initial!important}[visible-when-invalid]:not(.visible),form [submit-error],form [submit-success],form [submitting]{display:none}amp-accordion{display:block!important}@media (min-width:1px){:where(amp-accordion>section)>:first-child{margin:0;background-color:#efefef;padding-right:20px;border:1px solid #dfdfdf}:where(amp-accordion>section)>:last-child{margin:0}}amp-accordion>section{float:none!important}amp-accordion>section>*{float:none!important;display:block!important;overflow:hidden!important;position:relative!important}amp-accordion,amp-accordion>section{margin:0}amp-accordion:not(.i-amphtml-built)>section>:last-child{display:none!important}amp-accordion:not(.i-amphtml-built)>section[expanded]>:last-child{display:block!important}\n/*# sourceURL=/css/ampshared.css*/";

  // src/font-stylesheet-timeout.js
  function fontStylesheetTimeout(win) {
    onDocumentReady(win.document, function() {
      return maybeTimeoutFonts(win);
    });
  }
  function maybeTimeoutFonts(win) {
    var timeSinceNavigationStart = 1500;
    var perf = win.performance;
    if (perf && perf.timing && perf.timing.navigationStart) {
      timeSinceNavigationStart = Date.now() - perf.timing.navigationStart;
    }
    var timeout = Math.max(1, 2500 - 400 - timeSinceNavigationStart);
    win.setTimeout(function() {
      timeoutFontFaces(win);
      var styleSheets = win.document.styleSheets;
      if (!styleSheets) {
        return;
      }
      var styleLinkElements = win.document.querySelectorAll('link[rel~="stylesheet"]:not([href^="' + escapeCssSelectorIdent(urls.cdn) + '"])');
      var timedoutStyleSheets = [];
      for (var i = 0; i < styleLinkElements.length; i++) {
        var link = styleLinkElements[i];
        var found = false;
        for (var n = 0; n < styleSheets.length; n++) {
          if (styleSheets[n].ownerNode == link) {
            found = true;
            break;
          }
        }
        if (!found) {
          timedoutStyleSheets.push(link);
        }
      }
      var _loop = function _loop2(_i2) {
        var link2 = timedoutStyleSheets[_i2];
        var media = link2.media || "all";
        link2.media = "print";
        link2.onload = function() {
          link2.media = media;
          timeoutFontFaces(win);
        };
        link2.setAttribute("i-amphtml-timeout", timeout);
        link2.parentNode.insertBefore(link2, link2.nextSibling);
      };
      for (var _i = 0; _i < timedoutStyleSheets.length; _i++) {
        _loop(_i);
      }
    }, timeout);
  }
  function timeoutFontFaces(win) {
    var doc = win.document;
    if (!doc.fonts || !doc.fonts["values"]) {
      return;
    }
    var it = doc.fonts["values"]();
    var entry;
    while (entry = it.next()) {
      var fontFace = entry.value;
      if (!fontFace) {
        return;
      }
      if (fontFace.status != "loading") {
        continue;
      }
      if (!("display" in fontFace) || fontFace.display != "auto") {
        continue;
      }
      fontFace.display = "swap";
    }
  }

  // src/service/extensions-impl.js
  var LEGACY_ELEMENTS = ["amp-ad", "amp-embed", "amp-video"];
  var TAG18 = "extensions";
  var DEFAULT_VERSION = "0.1";
  var LATEST_VERSION2 = "latest";
  var UNKNOWN_EXTENSION = "_UNKNOWN_";
  var LOADER_PROP = "__AMP_EXT_LDR";
  var SCRIPT_LOADED_PROP = "__AMP_SCR_LOADED";
  function installExtensionsService(window) {
    registerServiceBuilder(window, "extensions", Extensions);
  }
  var Extensions = /* @__PURE__ */ function() {
    function Extensions2(win) {
      this.win = win;
      this.ampdocService_ = Services.ampdocServiceFor(win);
      this.extensions_ = {};
      this.currentExtensionId_ = null;
      this.currentExtensionVersion_ = null;
      this.currentExtensionLatest_ = null;
    }
    var _proto = Extensions2.prototype;
    _proto.registerExtension = function registerExtension(extensionId, version2, latest, factory, arg) {
      var _latestHolder$auto;
      var latestHolder = latest ? this.extensions_[extensionKey(extensionId, LATEST_VERSION2)] : null;
      var holder = this.getExtensionHolder_(extensionId, version2, (_latestHolder$auto = latestHolder == null ? void 0 : latestHolder.auto) != null ? _latestHolder$auto : true);
      holder.latest = latest;
      if (holder.loaded) {
        return;
      }
      if (latest) {
        this.extensions_[extensionKey(extensionId, LATEST_VERSION2)] = holder;
      }
      try {
        this.currentExtensionId_ = extensionId;
        this.currentExtensionVersion_ = version2;
        this.currentExtensionLatest_ = latest;
        factory(arg, arg["_"]);
        if (getMode(this.win).localDev || getMode(this.win).test) {
          if (Object.freeze) {
            var m = holder.extension;
            m.elements = Object.freeze(m.elements);
            holder.extension = Object.freeze(m);
          }
        }
        holder.loaded = true;
        holder.resolve == null ? void 0 : holder.resolve(holder.extension);
        latestHolder == null ? void 0 : latestHolder.resolve == null ? void 0 : latestHolder.resolve(holder.extension);
      } catch (e) {
        holder.error = e;
        holder.reject == null ? void 0 : holder.reject(e);
        latestHolder == null ? void 0 : latestHolder.reject == null ? void 0 : latestHolder.reject(e);
        throw e;
      } finally {
        this.currentExtensionId_ = null;
        this.currentExtensionVersion_ = null;
        this.currentExtensionLatest_ = null;
      }
    };
    _proto.waitForExtension = function waitForExtension(extensionId, version2) {
      var wait = this.waitFor_(this.getExtensionHolder_(extensionId, version2));
      return Services.timerFor(this.win).timeoutPromise(16e3, wait).catch(function(err) {
        if (!err.message.includes("timeout")) {
          throw err;
        }
        user().error(TAG18, "Waited over 16s to load extension " + extensionId + ".");
        return wait;
      });
    };
    _proto.preloadExtension = function preloadExtension(extensionId, version2) {
      if (version2 === void 0) {
        version2 = DEFAULT_VERSION;
      }
      if (extensionId == "amp-embed") {
        extensionId = "amp-ad";
      }
      var holder = this.getExtensionHolder_(extensionId, version2);
      this.insertExtensionScriptIfNeeded_(extensionId, version2, holder);
      return this.waitFor_(holder);
    };
    _proto.installExtensionForDoc = function installExtensionForDoc(ampdoc2, extensionId, version2) {
      var _this = this;
      if (version2 === void 0) {
        version2 = DEFAULT_VERSION;
      }
      var rootNode = ampdoc2.getRootNode();
      var extLoaders = rootNode[LOADER_PROP];
      if (!extLoaders) {
        extLoaders = rootNode[LOADER_PROP] = map();
      }
      if (extLoaders[extensionId]) {
        return extLoaders[extensionId];
      }
      ampdoc2.declareExtension(extensionId, version2);
      stubElementIfNotKnown(ampdoc2.win, extensionId);
      return extLoaders[extensionId] = this.preloadExtension(extensionId, version2).then(function() {
        return _this.installExtensionInDoc(ampdoc2, extensionId, version2);
      });
    };
    _proto.reloadExtension = function reloadExtension(extensionId, version2, latest) {
      var els = getExtensionScripts(this.win, extensionId, version2, latest, false);
      var holder = this.extensions_[extensionKey(extensionId, version2)];
      if (holder) {
        devAssert2(!holder.loaded && !holder.error);
        holder.scriptPresent = false;
      }
      els.forEach(function(el) {
        return el.setAttribute("i-amphtml-loaded-new-version", extensionId);
      });
      return this.preloadExtension(extensionId, version2);
    };
    _proto.importUnwrapped = function importUnwrapped(win, extensionId, version2, latest) {
      if (version2 === void 0) {
        version2 = DEFAULT_VERSION;
      }
      if (latest === void 0) {
        latest = true;
      }
      var scriptsInHead = getExtensionScripts(win, extensionId, version2, latest);
      var scriptElement = scriptsInHead.length > 0 ? scriptsInHead[0] : null;
      var promise;
      if (scriptElement) {
        promise = scriptElement[SCRIPT_LOADED_PROP];
      } else {
        scriptElement = createExtensionScript(this.win, extensionId, version2);
        promise = scriptElement[SCRIPT_LOADED_PROP] = new Promise(function(resolve, reject) {
          scriptElement.onload = resolve;
          scriptElement.onerror = reject;
        });
        win.document.head.appendChild(scriptElement);
      }
      return promise;
    };
    _proto.loadElementClass = function loadElementClass(elementName, version2) {
      if (version2 === void 0) {
        version2 = DEFAULT_VERSION;
      }
      return this.preloadExtension(elementName, version2).then(function(extension) {
        var element = devAssert2(extension.elements[elementName], "Element not found: %s", elementName);
        return element.implementationClass;
      });
    };
    _proto.addElement = function addElement(name, implementationClass, css) {
      var _this2 = this;
      var holder = this.getCurrentExtensionHolder_(name);
      holder.extension.elements[name] = {
        implementationClass: implementationClass,
        css: css
      };
      this.addDocFactory(function(ampdoc2) {
        _this2.installElement_(ampdoc2, name, implementationClass, css);
      });
    };
    _proto.addTemplate = function addTemplate(name, implementationClass) {
      this.addDocFactory(function(ampdoc2) {
        registerExtendedTemplateForDoc(ampdoc2, name, implementationClass);
      });
    };
    _proto.installElement_ = function installElement_(ampdoc2, name, implementationClass, css) {
      var _this3 = this;
      if (css) {
        installStylesForDoc(ampdoc2, css, function() {
          _this3.registerElementInWindow_(ampdoc2.win, name, implementationClass);
        }, false, name);
      } else {
        this.registerElementInWindow_(ampdoc2.win, name, implementationClass);
      }
    };
    _proto.registerElementInWindow_ = function registerElementInWindow_(win, name, implementationClass) {
      upgradeOrRegisterElement(win, name, implementationClass);
      registerServiceBuilder(win, name, emptyService);
    };
    _proto.addService = function addService(name, implementationClass) {
      var holder = this.getCurrentExtensionHolder_(name);
      holder.extension.services.push({
        serviceName: name,
        serviceClass: implementationClass
      });
      this.addDocFactory(function(ampdoc2) {
        registerServiceBuilderForDoc(ampdoc2, name, implementationClass, true);
      });
    };
    _proto.addDocFactory = function addDocFactory(factory, opt_forName) {
      var holder = this.getCurrentExtensionHolder_(opt_forName);
      holder.docFactories.push(factory);
      if (this.currentExtensionId_ && this.ampdocService_.isSingleDoc()) {
        var ampdoc2 = this.ampdocService_.getAmpDoc(this.win.document);
        var extensionId = dev().assertString(this.currentExtensionId_);
        var version2 = dev().assertString(this.currentExtensionVersion_);
        var latest = this.currentExtensionLatest_ || false;
        if (ampdoc2.declaresExtension(extensionId, version2) || latest && ampdoc2.declaresExtension(extensionId, LATEST_VERSION2) || holder.auto) {
          factory(ampdoc2);
        }
      }
    };
    _proto.preinstallEmbed = function preinstallEmbed(ampdoc2, extensions) {
      var topWin = this.win;
      var childWin = ampdoc2.win;
      copyBuiltinElementsToChildWindow(topWin, childWin);
      stubLegacyElements(childWin);
      extensions.forEach(function(_ref) {
        var extensionId = _ref.extensionId, extensionVersion = _ref.extensionVersion;
        ampdoc2.declareExtension(extensionId, extensionVersion);
        if (!LEGACY_ELEMENTS.includes(extensionId)) {
          stubElementIfNotKnown(childWin, extensionId);
        }
      });
    };
    _proto.installExtensionsInDoc = function installExtensionsInDoc(ampdoc2, extensions) {
      var _this4 = this;
      return Promise.all(extensions.map(function(_ref2) {
        var extensionId = _ref2.extensionId, extensionVersion = _ref2.extensionVersion;
        return _this4.installExtensionInDoc(ampdoc2, extensionId, extensionVersion);
      }));
    };
    _proto.installExtensionInDoc = function installExtensionInDoc(ampdoc2, extensionId, version2) {
      var _this5 = this;
      if (version2 === void 0) {
        version2 = DEFAULT_VERSION;
      }
      ampdoc2.declareExtension(extensionId, version2);
      return this.waitFor_(this.getExtensionHolder_(extensionId, version2)).then(function() {
        var holder = _this5.getExtensionHolder_(extensionId, version2);
        holder.docFactories.forEach(function(factory) {
          try {
            factory(ampdoc2);
          } catch (e) {
            rethrowAsync("Doc factory failed: ", e, extensionId);
          }
        });
      });
    };
    _proto.getExtensionHolder_ = function getExtensionHolder_(extensionId, version2, opt_auto) {
      var key = extensionKey(extensionId, version2);
      var holder = this.extensions_[key];
      if (!holder) {
        var extension = {
          elements: {},
          services: []
        };
        holder = {
          version: version2,
          latest: version2 == LATEST_VERSION2,
          extension: extension,
          auto: opt_auto || false,
          docFactories: [],
          promise: void 0,
          resolve: void 0,
          reject: void 0,
          loaded: void 0,
          error: void 0,
          scriptPresent: void 0
        };
        this.extensions_[key] = holder;
      }
      return holder;
    };
    _proto.getCurrentExtensionHolder_ = function getCurrentExtensionHolder_(opt_forName) {
      if (!this.currentExtensionId_ && !getMode(this.win).test) {
        dev().error(TAG18, "unknown extension for ", opt_forName);
      }
      return this.getExtensionHolder_(this.currentExtensionId_ || UNKNOWN_EXTENSION, this.currentExtensionVersion_ || "");
    };
    _proto.waitFor_ = function waitFor_(holder) {
      if (!holder.promise) {
        if (holder.loaded) {
          holder.promise = Promise.resolve(holder.extension);
        } else if (holder.error) {
          holder.promise = Promise.reject(holder.error);
        } else {
          var deferred = new Deferred();
          holder.promise = deferred.promise;
          holder.resolve = deferred.resolve;
          holder.reject = deferred.reject;
        }
      }
      return holder.promise;
    };
    _proto.insertExtensionScriptIfNeeded_ = function insertExtensionScriptIfNeeded_(extensionId, version2, holder) {
      if (this.isExtensionScriptRequired_(extensionId, version2, holder)) {
        var scriptElement = createExtensionScript(this.win, extensionId, version2);
        this.win.document.head.appendChild(scriptElement);
        holder.scriptPresent = true;
      }
    };
    _proto.isExtensionScriptRequired_ = function isExtensionScriptRequired_(extensionId, version2, holder) {
      if (holder.loaded || holder.error) {
        return false;
      }
      if (holder.scriptPresent === void 0) {
        var scriptsInHead = getExtensionScripts(this.win, extensionId, version2, holder.latest);
        holder.scriptPresent = scriptsInHead.length > 0;
      }
      return !holder.scriptPresent;
    };
    return Extensions2;
  }();
  function stubLegacyElements(win) {
    LEGACY_ELEMENTS.forEach(function(name) {
      stubElementIfNotKnown(win, name);
    });
  }
  function copyBuiltinElementsToChildWindow(parentWin, childWin) {
    copyElementToChildWindow(parentWin, childWin, "amp-img");
    copyElementToChildWindow(parentWin, childWin, "amp-pixel");
  }
  function emptyService() {
    return {};
  }
  function extensionKey(extensionId, version2) {
    return extensionId + ":" + version2;
  }

  // src/runtime.js
  initLogConstructor();
  setReportError(reportErrorForWin.bind(null, self));
  var TAG19 = "runtime";
  function adoptShared(global, callback) {
    if (global.__AMP_TAG) {
      return resolvedPromise();
    }
    global.__AMP_TAG = true;
    var preregisteredExtensions = global.AMP || [];
    installExtensionsService(global);
    var extensions = Services.extensionsFor(global);
    installRuntimeServices(global);
    stubLegacyElements(global);
    global.AMP = {
      win: global,
      "_": global.AMP ? global.AMP["_"] : void 0
    };
    if (!isMinified()) {
      global.AMP.extension = function(unusedName, unusedVersion, installer) {
        installer(global.AMP);
      };
    }
    global.AMP.config = config;
    global.AMP.BaseElement = BaseElement;
    global.AMP.registerElement = extensions.addElement.bind(extensions);
    global.AMP.registerTemplate = extensions.addTemplate.bind(extensions);
    global.AMP.registerServiceForDoc = extensions.addService.bind(extensions);
    global.AMP.isExperimentOn = isExperimentOn.bind(null, global);
    global.AMP.toggleExperiment = toggleExperiment.bind(null, global);
    global.AMP.setLogLevel = overrideLogLevel.bind(null);
    global.AMP.setTickFunction = function(unusedFn, opt_flush) {
    };
    var iniPromise = callback(global, extensions);
    function installExtension(fnOrStruct2) {
      var register = function register2() {
        iniPromise.then(function() {
          if (typeof fnOrStruct2 == "function") {
            fnOrStruct2(global.AMP, global.AMP._);
          } else {
            extensions.registerExtension(fnOrStruct2.n, fnOrStruct2.ev, fnOrStruct2.l, fnOrStruct2.f, global.AMP);
          }
        });
      };
      startRegisterOrChunk(global, fnOrStruct2, register);
    }
    for (var i = 0; i < preregisteredExtensions.length; i++) {
      var fnOrStruct = preregisteredExtensions[i];
      if (maybeLoadCorrectVersion(global, fnOrStruct)) {
        preregisteredExtensions.splice(i--, 1);
      } else if (typeof fnOrStruct == "function" || fnOrStruct.p == "high") {
        try {
          installExtension(fnOrStruct);
        } catch (e) {
          dev().error(TAG19, "Extension failed: ", e, fnOrStruct.n);
        }
        preregisteredExtensions.splice(i--, 1);
      }
    }
    maybePumpEarlyFrame(global, function() {
      global.AMP.push = function(fnOrStruct2) {
        if (maybeLoadCorrectVersion(global, fnOrStruct2)) {
          return;
        }
        installExtension(fnOrStruct2);
      };
      for (var _i = 0; _i < preregisteredExtensions.length; _i++) {
        var _fnOrStruct = preregisteredExtensions[_i];
        if (maybeLoadCorrectVersion(global, _fnOrStruct)) {
          continue;
        }
        try {
          installExtension(_fnOrStruct);
        } catch (e) {
          dev().error(TAG19, "Extension failed: ", e, _fnOrStruct.n);
        }
      }
      preregisteredExtensions.length = 0;
    });
    if (!global.AMP.push) {
      global.AMP.push = preregisteredExtensions.push.bind(preregisteredExtensions);
    }
    if (Services.platformFor(global).isIos()) {
      setStyle(global.document.documentElement, "cursor", "pointer");
    }
    var extensionsFor2 = Services.extensionsFor(global);
    if (shouldLoadPolyfill2(global)) {
      extensionsFor2.preloadExtension("amp-resize-observer-polyfill");
    }
    if (shouldLoadPolyfill(global)) {
      extensionsFor2.preloadExtension("amp-intersection-observer-polyfill");
    }
    return iniPromise;
  }
  function startRegisterOrChunk(global, fnOrStruct, register) {
    if (typeof fnOrStruct == "function" || fnOrStruct.p == "high") {
      resolvedPromise().then(register);
    } else {
      register.displayName = fnOrStruct.n;
      startupChunk(global.document, register);
    }
  }
  function adopt(global) {
    return adoptShared(global, function(global2) {
      adoptServicesAndResources(global2);
      return waitForBodyOpenPromise(global2.document).then(function() {
        stubElementsForDoc(global2.AMP.ampdoc);
      });
    });
  }
  function adoptServicesAndResources(global) {
    var documentElement = global.document.documentElement;
    var ampdocService2 = Services.ampdocServiceFor(global);
    var ampdoc2 = ampdocService2.getSingleDoc();
    global.AMP.ampdoc = ampdoc2;
    var viewer = Services.viewerForDoc(documentElement);
    global.AMP.viewer = viewer;
    if (getMode().development) {
      global.AMP.toggleRuntime = viewer.toggleRuntime.bind(viewer);
      global.AMP.resources = Services.resourcesForDoc(documentElement);
    }
    var viewport = Services.viewportForDoc(documentElement);
    global.AMP.viewport = {};
    global.AMP.viewport.getScrollLeft = viewport.getScrollLeft.bind(viewport);
    global.AMP.viewport.getScrollWidth = viewport.getScrollWidth.bind(viewport);
    global.AMP.viewport.getWidth = viewport.getWidth.bind(viewport);
  }
  function maybeLoadCorrectVersion(win, fnOrStruct) {
    if (getMode().localDev && isExperimentOn(win, "disable-version-locking")) {
      return false;
    }
    if (typeof fnOrStruct == "function") {
      return false;
    }
    if (isEsm()) {
      if (!fnOrStruct.m) {
        return true;
      }
    } else {
      if (fnOrStruct.m) {
        return true;
      }
    }
    var v = fnOrStruct.v;
    if (version() == v) {
      return false;
    }
    Services.extensionsFor(win).reloadExtension(fnOrStruct.n, fnOrStruct.ev, fnOrStruct.l);
    return true;
  }
  function maybePumpEarlyFrame(win, cb) {
    if (!win.document.body) {
      cb();
      return;
    }
    if (hasRenderDelayingServices(win)) {
      cb();
      return;
    }
    Services.timerFor(win).delay(cb, 1);
  }

  // src/validator-integration.js
  function maybeValidate(win) {
    var filename = win.location.href;
    if (filename.startsWith("about:")) {
      return;
    }
    var validator = false;
    var params = getHashParams(win);
    if (isModeDevelopment(win, params)) {
      validator = params["validate"] !== "0";
    }
    if (validator) {
      loadScript(win.document, urls.cdn + "/v0/validator_wasm.js").then(function() {
        amp.validator.validateUrlAndLog(filename, win.document);
      });
    }
  }
  function loadScript(doc, url) {
    var script = doc.createElement("script");
    script.src = url;
    var currentScript = doc.head.querySelector("script[nonce]");
    if (currentScript) {
      script.setAttribute("nonce", currentScript.getAttribute("nonce"));
    }
    var promise = loadPromise(script).then(function() {
      doc.head.removeChild(script);
    }, function() {
    });
    doc.head.appendChild(script);
    return promise;
  }

  // src/inabox/amp-inabox.js
  getMode(self).runtime = "inabox";
  getMode(self).a4aId = getA4AId(self);
  var ampdocService;
  try {
    installErrorReporting(self);
    installDocService(self, true);
    ampdocService = Services.ampdocServiceFor(self);
  } catch (e) {
    makeBodyVisibleRecovery(self.document);
    throw e;
  }
  allowLongTasksInChunking();
  startupChunk(self.document, function initial() {
    var ampdoc2 = ampdocService.getAmpDoc(self.document);
    installPlatformService(self);
    installPerformanceService(self);
    var perf = Services.performanceFor(self);
    perf.tick(TickLabel_Enum.INSTALL_STYLES);
    self.document.documentElement.classList.add("i-amphtml-inabox");
    installStylesForDoc(ampdoc2, cssText + "html.i-amphtml-inabox{width:100%!important;height:100%!important}", function() {
      startupChunk(self.document, function services() {
        installRuntimeServices(self);
        fontStylesheetTimeout(self);
        installAmpdocServicesForInabox(ampdoc2);
        perf.coreServicesAvailable();
        doNotTrackImpression();
        registerIniLoadListener(ampdoc2);
      });
      startupChunk(self.document, function builtins() {
        installBuiltinElements(self);
      });
      startupChunk(self.document, function adoptWindow() {
        adopt(self);
      });
      startupChunk(self.document, function stub() {
        stubElementsForDoc(ampdoc2);
      });
      startupChunk(self.document, function final() {
        Navigation.installAnchorClickInterceptor(ampdoc2, self);
        maybeRenderInaboxAsStoryAd(ampdoc2);
        maybeValidate(self);
        makeBodyVisible(self.document);
      }, true);
      startupChunk(self.document, function finalTick() {
        perf.tick(TickLabel_Enum.END_INSTALL_STYLES);
        Services.resourcesForDoc(ampdoc2).ampInitComplete();
        perf.flush();
      });
    }, true, "amp-runtime");
  });
  if (self.console) {
    (console.info || console.log).call(console, "Powered by AMP \u26A1 HTML \u2013 Version " + version(), self.location.href);
  }
  self.document.documentElement.setAttribute("amp-version", version());
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
/**
* @license
* Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
* Use of this source code is governed by a BSD-style
* license that can be found in the LICENSE file or at
* https://developers.google.com/open-source/licenses/bsd
*/
//# sourceMappingURL=amp-inabox.js.map
