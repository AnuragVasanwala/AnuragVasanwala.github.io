(function() {
  // src/core/mode/prod.js
  function isProd() {
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

  // src/polyfills/custom-elements.js
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
      for (var _iterator = _createForOfIteratorHelperLoose2(this.roots_), _step; !(_step = _iterator()).done; ) {
        var tree = _step.value;
        this.upgrade(tree, name);
      }
    };
    _proto2.upgrade = function upgrade(root, opt_query) {
      var newlyDefined = !!opt_query;
      var query = opt_query || this.query_;
      var upgradeCandidates = this.queryAll_(root, query);
      for (var _iterator2 = _createForOfIteratorHelperLoose2(upgradeCandidates), _step2; !(_step2 = _iterator2()).done; ) {
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
    _proto2.queryAll_ = function queryAll_(root, query) {
      if (!query || !root.querySelectorAll) {
        return [];
      }
      return root.querySelectorAll(query);
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
      for (var _iterator3 = _createForOfIteratorHelperLoose2(this.roots_), _step3; !(_step3 = _iterator3()).done; ) {
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
      for (var _iterator4 = _createForOfIteratorHelperLoose2(records), _step4; !(_step4 = _iterator4()).done; ) {
        var record = _step4.value;
        if (!record) {
          continue;
        }
        var addedNodes = record.addedNodes, removedNodes = record.removedNodes;
        for (var _iterator5 = _createForOfIteratorHelperLoose2(addedNodes), _step5; !(_step5 = _iterator5()).done; ) {
          var node = _step5.value;
          var connectedCandidates = this.queryAll_(node, this.query_);
          this.connectedCallback_(node);
          for (var _iterator7 = _createForOfIteratorHelperLoose2(connectedCandidates), _step7; !(_step7 = _iterator7()).done; ) {
            var candidate = _step7.value;
            this.connectedCallback_(candidate);
          }
        }
        for (var _iterator6 = _createForOfIteratorHelperLoose2(removedNodes), _step6; !(_step6 = _iterator6()).done; ) {
          var _node = _step6.value;
          var disconnectedCandidates = this.queryAll_(_node, this.query_);
          this.disconnectedCallback_(_node);
          for (var _iterator8 = _createForOfIteratorHelperLoose2(disconnectedCandidates), _step8; !(_step8 = _iterator8()).done; ) {
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
    var Document = win.Document, Element = win.Element, Node = win.Node, document = win.document;
    var docProto = Document.prototype;
    var elProto = Element.prototype;
    var nodeProto = Node.prototype;
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
      innerHTMLDesc.set = function(html) {
        innerHTMLSetter.call(this, html);
        registry.upgrade(this);
      };
      Object.defineProperty(innerHTMLProto, "innerHTML", innerHTMLDesc);
    }
  }
  function polyfill(win) {
    var Element = win.Element, HTMLElement = win.HTMLElement, document = win.document;
    var createElement = document.createElement;
    var registry = new Registry(win);
    var customElements = new CustomElementRegistry(win, registry);
    Object.defineProperty(win, "customElements", {
      enumerable: true,
      configurable: true,
      value: customElements
    });
    var elProto = Element.prototype;
    var attachShadow = elProto.attachShadow, createShadowRoot = elProto.createShadowRoot;
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
    if (createShadowRoot) {
      elProto.createShadowRoot = function() {
        var shadow = createShadowRoot.apply(this, arguments);
        registry.observe(shadow);
        return shadow;
      };
      elProto.createShadowRoot.toString = function() {
        return createShadowRoot.toString();
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
    var HTMLElement = win.HTMLElement, Reflect = win.Reflect;
    function HTMLElementWrapper() {
      var ctor = this.constructor;
      return Reflect.construct(HTMLElement, [], ctor);
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
      for (var _iterator9 = _createForOfIteratorHelperLoose2(Object.getOwnPropertyNames(current)), _step9; !(_step9 = _iterator9()).done; ) {
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
  function install(win, ctor) {
    var shouldInstall = win.document;
    var hasCE = hasCustomElements(win);
    if (!shouldInstall || hasCE && isPatched(win)) {
      return;
    }
    var install2 = true;
    var installWrapper = false;
    if (ctor && hasCE) {
      try {
        var _Reflect = win.Reflect;
        var instance = Object.create(ctor.prototype);
        Function.call.call(ctor, instance);
        installWrapper = !!(_Reflect != null && _Reflect.construct);
      } catch (e) {
        install2 = false;
      }
    }
    if (installWrapper) {
      wrapHTMLElement(win);
    } else if (install2) {
      polyfill(win);
    }
  }

  // src/bento.js
  if (!isEsm()) {
    install(self, /* @__PURE__ */ function() {
      function _class() {
      }
      return _class;
    }());
  }
  var waiting = self.BENTO || [];
  var push = function push2(fn) {
    return fn();
  };
  self.BENTO = {
    push: push
  };
  for (i = 0; i < waiting.length; i++) {
    push(waiting[i]);
  }
  var i;
})();
//# sourceMappingURL=bento.max.js.map
