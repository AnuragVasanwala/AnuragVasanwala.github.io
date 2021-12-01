(self.BENTO=self.BENTO||[]).push(function(){
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
  function arrayOrSingleItemToArray(arrayOrSingleItem) {
    return isArray(arrayOrSingleItem) ? arrayOrSingleItem : [
      arrayOrSingleItem
    ];
  }
  function remove(array, shouldRemove) {
    var removed = [];
    var index = 0;
    for (var i4 = 0; i4 < array.length; i4++) {
      var item = array[i4];
      if (shouldRemove(item, i4, array)) {
        removed.push(item);
      } else {
        if (index < i4) {
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
  function pushIfNotExist(array, item) {
    if (array.indexOf(item) < 0) {
      array.push(item);
      return true;
    }
    return false;
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
  function includes(string, substring, start) {
    if (typeof start !== "number") {
      start = 0;
    }
    if (start + substring.length > string.length) {
      return false;
    }
    return string.indexOf(substring, start) !== -1;
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
  function hasOwn(obj, key) {
    return hasOwn_.call(obj, key);
  }
  function objectsEqualShallow(o1, o22) {
    if (o1 == null || o22 == null) {
      return o1 === o22;
    }
    for (var k3 in o1) {
      if (o1[k3] !== o22[k3]) {
        return false;
      }
    }
    for (var _k in o22) {
      if (o22[_k] !== o1[_k]) {
        return false;
      }
    }
    return true;
  }

  // src/core/types/index.js
  function isElement(value) {
    return (value == null ? void 0 : value.nodeType) == 1;
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
    var i4 = 3;
    var splitMessage = opt_message.split("%s");
    var message = splitMessage.shift();
    var messageArray = [message];
    while (splitMessage.length) {
      var subValue = arguments[i4++];
      var nextConstant = splitMessage.shift();
      message += elementStringOrPassThru(subValue) + nextConstant;
      messageArray.push(subValue, nextConstant.trim());
    }
    var error = new Error(message);
    error.messageArray = remove(messageArray, function(x3) {
      return x3 !== "";
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

  // src/core/constants/loading-instructions.js
  var _MAP;
  var Loading_Enum = {
    AUTO: "auto",
    LAZY: "lazy",
    EAGER: "eager",
    UNLOAD: "unload"
  };
  var ORDER = [Loading_Enum.AUTO, Loading_Enum.LAZY, Loading_Enum.EAGER, Loading_Enum.UNLOAD];
  var MAP = (_MAP = {}, _MAP[Loading_Enum.AUTO] = 0, _MAP[Loading_Enum.LAZY] = 1, _MAP[Loading_Enum.EAGER] = 2, _MAP[Loading_Enum.UNLOAD] = 3, _MAP);
  function reducer(v1, v22) {
    var ordinal1 = MAP[v1] || 0;
    var ordinal2 = MAP[v22] || 0;
    var ordinal = Math.max(ordinal1, ordinal2);
    return ORDER[ordinal];
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

  // src/core/context/prop.type.js
  function ContextPropDef() {
  }
  ContextPropDef.prototype.key;
  ContextPropDef.prototype.type;
  ContextPropDef.prototype.deps;
  ContextPropDef.prototype.recursive;
  ContextPropDef.prototype.compute;
  ContextPropDef.prototype.defaultValue;

  // src/core/context/scheduler.js
  function throttleTail(handler, defaultScheduler) {
    if (defaultScheduler === void 0) {
      defaultScheduler = null;
    }
    var scheduled = false;
    var handleAndUnschedule = function handleAndUnschedule2() {
      scheduled = false;
      handler();
    };
    var scheduleIfNotScheduled = function scheduleIfNotScheduled2(opt_scheduler) {
      if (!scheduled) {
        scheduled = true;
        var scheduler = opt_scheduler || defaultScheduler;
        scheduler(handleAndUnschedule);
      }
    };
    return scheduleIfNotScheduled;
  }

  // src/core/error/index.js
  function _createForOfIteratorHelperLoose(o3, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o3[Symbol.iterator] || o3["@@iterator"];
    if (it)
      return (it = it.call(o3)).next.bind(it);
    if (Array.isArray(o3) || (it = _unsupportedIterableToArray(o3)) || allowArrayLike && o3 && typeof o3.length === "number") {
      if (it)
        o3 = it;
      var i4 = 0;
      return function() {
        if (i4 >= o3.length)
          return { done: true };
        return { done: false, value: o3[i4++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o3, minLen) {
    if (!o3)
      return;
    if (typeof o3 === "string")
      return _arrayLikeToArray(o3, minLen);
    var n2 = Object.prototype.toString.call(o3).slice(8, -1);
    if (n2 === "Object" && o3.constructor)
      n2 = o3.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o3);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray(o3, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++) {
      arr2[i4] = arr[i4];
    }
    return arr2;
  }
  function duplicateErrorIfNecessary(error) {
    var messageProperty = Object.getOwnPropertyDescriptor(error, "message");
    if (messageProperty != null && messageProperty.writable) {
      return error;
    }
    var message = error.message, stack = error.stack;
    var e3 = new Error(message);
    for (var prop in error) {
      e3[prop] = error[prop];
    }
    e3.stack = stack;
    return e3;
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
    } catch (e3) {
      rethrowAsync(e3);
    }
  }

  // src/core/context/scan.js
  function _createForOfIteratorHelperLoose2(o3, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o3[Symbol.iterator] || o3["@@iterator"];
    if (it)
      return (it = it.call(o3)).next.bind(it);
    if (Array.isArray(o3) || (it = _unsupportedIterableToArray2(o3)) || allowArrayLike && o3 && typeof o3.length === "number") {
      if (it)
        o3 = it;
      var i4 = 0;
      return function() {
        if (i4 >= o3.length)
          return { done: true };
        return { done: false, value: o3[i4++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray2(o3, minLen) {
    if (!o3)
      return;
    if (typeof o3 === "string")
      return _arrayLikeToArray2(o3, minLen);
    var n2 = Object.prototype.toString.call(o3).slice(8, -1);
    if (n2 === "Object" && o3.constructor)
      n2 = o3.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o3);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray2(o3, minLen);
  }
  function _arrayLikeToArray2(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++) {
      arr2[i4] = arr[i4];
    }
    return arr2;
  }
  function findParent(startNode, predicate, arg, includeSelf) {
    if (arg === void 0) {
      arg = void 0;
    }
    if (includeSelf === void 0) {
      includeSelf = true;
    }
    for (var n2 = includeSelf ? startNode : startNode.parent; n2; n2 = n2.parent) {
      if (predicate(n2, arg)) {
        return n2;
      }
    }
    return null;
  }
  function deepScan(startNode, callback, arg, state, includeSelf) {
    if (arg === void 0) {
      arg = void 0;
    }
    if (state === void 0) {
      state = true;
    }
    if (includeSelf === void 0) {
      includeSelf = true;
    }
    if (includeSelf) {
      var newState = callback(startNode, arg, state);
      if (newState) {
        deepScan(startNode, callback, arg, newState, false);
      }
    } else if (startNode.children) {
      for (var _iterator = _createForOfIteratorHelperLoose2(startNode.children), _step; !(_step = _iterator()).done; ) {
        var node = _step.value;
        deepScan(node, callback, arg, state, true);
      }
    }
  }

  // src/core/context/values.js
  function _createForOfIteratorHelperLoose3(o3, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o3[Symbol.iterator] || o3["@@iterator"];
    if (it)
      return (it = it.call(o3)).next.bind(it);
    if (Array.isArray(o3) || (it = _unsupportedIterableToArray3(o3)) || allowArrayLike && o3 && typeof o3.length === "number") {
      if (it)
        o3 = it;
      var i4 = 0;
      return function() {
        if (i4 >= o3.length)
          return { done: true };
        return { done: false, value: o3[i4++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray3(o3, minLen) {
    if (!o3)
      return;
    if (typeof o3 === "string")
      return _arrayLikeToArray3(o3, minLen);
    var n2 = Object.prototype.toString.call(o3).slice(8, -1);
    if (n2 === "Object" && o3.constructor)
      n2 = o3.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o3);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray3(o3, minLen);
  }
  function _arrayLikeToArray3(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++) {
      arr2[i4] = arr[i4];
    }
    return arr2;
  }
  var EMPTY_ARRAY = [];
  var EMPTY_FUNC = function EMPTY_FUNC2() {
  };
  var Pending_Enum = {
    NOT_PENDING: 0,
    PENDING: 1,
    PENDING_REFRESH_PARENT: 2
  };
  function InputDef() {
  }
  InputDef.prototype.values;
  InputDef.prototype.setters;
  function UsedDef() {
  }
  UsedDef.prototype.prop;
  UsedDef.prototype.subscribers;
  UsedDef.prototype.value;
  UsedDef.prototype.pending;
  UsedDef.prototype.counter;
  UsedDef.prototype.depValues;
  UsedDef.prototype.parentValue;
  UsedDef.prototype.parentContextNode;
  UsedDef.prototype.ping;
  UsedDef.prototype.pingDep;
  UsedDef.prototype.pingParent;
  var Values = /* @__PURE__ */ function() {
    function Values2(contextNode) {
      this.contextNode_ = contextNode;
      this.inputsByKey_ = null;
      this.usedByKey_ = null;
      this.checkUpdates_ = throttleTail(this.checkUpdates_.bind(this), setTimeout);
    }
    var _proto = Values2.prototype;
    _proto.set = function set(prop, setter, value) {
      devAssert(setter);
      devAssert(value !== void 0);
      var key = prop.key;
      var inputsByKey = this.inputsByKey_ || (this.inputsByKey_ = new Map());
      var inputs = inputsByKey.get(key);
      if (!inputs) {
        inputs = {
          values: [],
          setters: []
        };
        inputsByKey.set(key, inputs);
      }
      var index = inputs.setters.indexOf(setter);
      var changed = index == -1 || inputs.values[index] !== value;
      if (index == -1) {
        inputs.setters.push(setter);
        inputs.values.push(value);
      } else if (changed) {
        inputs.values[index] = value;
      }
      if (changed) {
        this.ping(prop, false);
        if (isRecursive(prop)) {
          deepScan(this.contextNode_, scan, prop, true, false);
        }
      }
    };
    _proto.remove = function remove2(prop, setter) {
      devAssert(setter);
      var key = prop.key;
      var inputsByKey = this.inputsByKey_;
      var inputs = inputsByKey == null ? void 0 : inputsByKey.get(key);
      if (inputs) {
        var index = inputs.setters.indexOf(setter);
        if (index != -1) {
          inputs.setters.splice(index, 1);
          inputs.values.splice(index, 1);
          if (inputs.setters.length == 0) {
            inputsByKey.delete(key);
          }
          deepScan(this.contextNode_, scan, prop);
        }
      }
    };
    _proto.has = function has(prop) {
      var _this$inputsByKey_;
      return !!((_this$inputsByKey_ = this.inputsByKey_) != null && _this$inputsByKey_.has(prop.key));
    };
    _proto.subscribe = function subscribe2(prop, handler) {
      var used = this.startUsed_(prop);
      if (!pushIfNotExist(used.subscribers, handler)) {
        return;
      }
      var existingValue = used.value;
      if (isDefined(existingValue) && this.isConnected_()) {
        handler(existingValue);
      }
    };
    _proto.unsubscribe = function unsubscribe2(prop, handler) {
      var _this$usedByKey_;
      var used = (_this$usedByKey_ = this.usedByKey_) == null ? void 0 : _this$usedByKey_.get(prop.key);
      if (!used || !removeItem(used.subscribers, handler)) {
        return;
      }
      this.stopUsed_(used);
    };
    _proto.ping = function ping(prop, refreshParent) {
      var _this$usedByKey_2, _this$usedByKey_2$get;
      (_this$usedByKey_2 = this.usedByKey_) == null ? void 0 : (_this$usedByKey_2$get = _this$usedByKey_2.get(prop.key)) == null ? void 0 : _this$usedByKey_2$get.ping(refreshParent);
    };
    _proto.parentUpdated = function parentUpdated() {
      if (this.isConnected_()) {
        deepScan(this.contextNode_, scanAll, void 0, EMPTY_ARRAY);
      }
    };
    _proto.rootUpdated = function rootUpdated() {
      var _this = this;
      var usedByKey = this.usedByKey_;
      if (!usedByKey) {
        return;
      }
      if (this.isConnected_()) {
        usedByKey.forEach(function(used) {
          var prop = used.prop;
          _this.ping(prop, true);
        });
      } else {
        usedByKey.forEach(function(used) {
          var prop = used.prop;
          if (isRecursive(prop)) {
            _this.updateParentContextNode_(used, null);
          }
        });
      }
    };
    _proto.scan = function scan2(prop) {
      this.ping(prop, true);
      if (!isRecursive(prop)) {
        return false;
      }
      if (this.has(prop)) {
        return false;
      }
      return true;
    };
    _proto.scanAll = function scanAll2(scheduled) {
      var _this2 = this;
      var newScheduled = null;
      var usedByKey = this.usedByKey_;
      if (usedByKey) {
        usedByKey.forEach(function(used) {
          var prop = used.prop;
          var key = prop.key;
          if ((newScheduled || scheduled).indexOf(key) == -1) {
            _this2.ping(prop, true);
            if (_this2.contextNode_.children && _this2.has(prop)) {
              if (!newScheduled) {
                newScheduled = scheduled.slice(0);
              }
              newScheduled.push(key);
            }
          }
        });
      }
      return newScheduled || scheduled;
    };
    _proto.isConnected_ = function isConnected_() {
      return !!this.contextNode_.root;
    };
    _proto.startUsed_ = function startUsed_(prop) {
      var _this3 = this;
      var deps = prop.deps, key = prop.key;
      var usedByKey = this.usedByKey_ || (this.usedByKey_ = new Map());
      var used = usedByKey.get(key);
      if (!used) {
        used = {
          prop: prop,
          subscribers: [],
          value: void 0,
          pending: Pending_Enum.NOT_PENDING,
          counter: 0,
          depValues: deps.length > 0 ? deps.map(EMPTY_FUNC) : EMPTY_ARRAY,
          parentValue: void 0,
          parentContextNode: null,
          ping: function ping(refreshParent) {
            if (_this3.isConnected_()) {
              var pending = refreshParent ? Pending_Enum.PENDING_REFRESH_PARENT : Pending_Enum.PENDING;
              used.pending = Math.max(used.pending, pending);
              _this3.checkUpdates_();
            }
          },
          pingDep: deps.length > 0 ? deps.map(function(dep, index) {
            return function(value) {
              used.depValues[index] = value;
              used.ping();
            };
          }) : EMPTY_ARRAY,
          pingParent: isRecursive(prop) ? function(parentValue) {
            used.parentValue = parentValue;
            used.ping();
          } : null
        };
        usedByKey.set(key, used);
        deps.forEach(function(dep, index) {
          return _this3.subscribe(dep, used.pingDep[index]);
        });
        used.ping(false);
      }
      return used;
    };
    _proto.stopUsed_ = function stopUsed_(used) {
      var _this4 = this;
      if (used.subscribers.length > 0) {
        return;
      }
      var pingDep = used.pingDep, prop = used.prop;
      var deps = prop.deps, key = prop.key;
      this.usedByKey_.delete(key);
      this.updateParentContextNode_(used, null);
      if (deps.length > 0) {
        deps.forEach(function(dep, index) {
          _this4.unsubscribe(dep, pingDep[index]);
        });
      }
    };
    _proto.checkUpdates_ = function checkUpdates_() {
      var _this5 = this;
      if (!this.isConnected_()) {
        return;
      }
      var usedByKey = this.usedByKey_;
      if (!usedByKey) {
        return;
      }
      usedByKey.forEach(function(used) {
        used.counter = 0;
      });
      var updated;
      do {
        updated = 0;
        usedByKey.forEach(function(used) {
          if (used.pending != Pending_Enum.NOT_PENDING) {
            var key = used.prop.key;
            used.counter++;
            if (used.counter > 5) {
              rethrowAsync("cyclical prop: " + key);
              used.pending = Pending_Enum.NOT_PENDING;
              return;
            }
            updated++;
            _this5.tryUpdate_(used);
          }
        });
      } while (updated > 0);
    };
    _proto.tryUpdate_ = function tryUpdate_(used) {
      var refreshParent = used.pending == Pending_Enum.PENDING_REFRESH_PARENT;
      var newValue;
      try {
        newValue = this.calc_(used, refreshParent);
      } catch (e3) {
        rethrowAsync(e3);
      }
      used.pending = Pending_Enum.NOT_PENDING;
      this.maybeUpdated_(used, newValue);
    };
    _proto.maybeUpdated_ = function maybeUpdated_(used, value) {
      var prop = used.prop, oldValue = used.value;
      var key = prop.key;
      var usedByKey = this.usedByKey_;
      if (oldValue === value || used !== (usedByKey == null ? void 0 : usedByKey.get(key)) || !this.isConnected_()) {
        return;
      }
      used.value = value;
      var subscribers = used.subscribers;
      for (var _iterator = _createForOfIteratorHelperLoose3(subscribers), _step; !(_step = _iterator()).done; ) {
        var handler = _step.value;
        handler(value);
      }
    };
    _proto.calc_ = function calc_(used, refreshParent) {
      var _this$inputsByKey_2, _this$inputsByKey_2$g;
      devAssert(this.isConnected_());
      var depValues = used.depValues, prop = used.prop;
      var compute4 = prop.compute, defaultValue = prop.defaultValue, key = prop.key;
      var inputValues = (_this$inputsByKey_2 = this.inputsByKey_) == null ? void 0 : (_this$inputsByKey_2$g = _this$inputsByKey_2.get(key)) == null ? void 0 : _this$inputsByKey_2$g.values;
      var recursive3 = calcRecursive(prop, inputValues);
      if (refreshParent || recursive3 != Boolean(used.parentContextNode)) {
        var newParentContextNode = recursive3 ? findParent(this.contextNode_, hasInput, prop, false) : null;
        this.updateParentContextNode_(used, newParentContextNode);
      }
      var parentValue = isDefined(used.parentValue) ? used.parentValue : recursive3 && !used.parentContextNode ? defaultValue : void 0;
      var newValue = void 0;
      var ready = depValues.every(isDefined) && (!recursive3 || isDefined(parentValue));
      if (ready) {
        var node = this.contextNode_.node;
        if (inputValues && !compute4) {
          newValue = inputValues[0];
        } else if (isRecursive(prop)) {
          if (inputValues || depValues.length > 0) {
            newValue = callRecursiveCompute(compute4, node, inputValues || EMPTY_ARRAY, parentValue, depValues);
          } else if (isDefined(parentValue)) {
            newValue = parentValue;
          }
        } else if (compute4) {
          newValue = callCompute(compute4, node, inputValues || EMPTY_ARRAY, depValues);
        }
      }
      return newValue;
    };
    _proto.updateParentContextNode_ = function updateParentContextNode_(used, newParentContextNode) {
      var oldParentContextNode = used.parentContextNode, pingParent = used.pingParent, prop = used.prop;
      if (newParentContextNode != oldParentContextNode) {
        used.parentContextNode = newParentContextNode;
        used.parentValue = void 0;
        if (oldParentContextNode) {
          oldParentContextNode.values.unsubscribe(prop, devAssert(pingParent));
        }
        if (newParentContextNode) {
          newParentContextNode.values.subscribe(prop, devAssert(pingParent));
        }
      }
    };
    return Values2;
  }();
  function scan(contextNode, prop) {
    return contextNode.values.scan(prop);
  }
  function scanAll(contextNode, unusedArg, state) {
    return contextNode.values.scanAll(state);
  }
  function hasInput(contextNode, prop) {
    return contextNode.values.has(prop);
  }
  function isRecursive(prop) {
    return !!prop.recursive;
  }
  function calcRecursive(prop, inputs) {
    var compute4 = prop.compute, recursive3 = prop.recursive;
    if (typeof recursive3 == "function") {
      return inputs ? recursive3(inputs) : true;
    }
    if (recursive3 && inputs && !compute4) {
      return false;
    }
    return recursive3;
  }
  function callCompute(compute4, node, inputValues, deps) {
    switch (deps.length) {
      case 0:
        return compute4(node, inputValues);
      case 1:
        return compute4(node, inputValues, deps[0]);
      case 2:
        return compute4(node, inputValues, deps[0], deps[1]);
      case 3:
        return compute4(node, inputValues, deps[0], deps[1], deps[2]);
      default:
        return compute4.apply(null, [node, inputValues].concat(deps));
    }
  }
  function callRecursiveCompute(compute4, node, inputValues, parentValue, deps) {
    switch (deps.length) {
      case 0:
        return compute4(node, inputValues, parentValue);
      case 1:
        return compute4(node, inputValues, parentValue, deps[0]);
      case 2:
        return compute4(node, inputValues, parentValue, deps[0], deps[1]);
      case 3:
        return compute4(node, inputValues, parentValue, deps[0], deps[1], deps[2]);
      default:
        return compute4.apply(null, [node, inputValues, parentValue].concat(deps));
    }
  }
  function isDefined(v3) {
    return v3 !== void 0;
  }

  // src/core/context/node.js
  function _createForOfIteratorHelperLoose4(o3, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o3[Symbol.iterator] || o3["@@iterator"];
    if (it)
      return (it = it.call(o3)).next.bind(it);
    if (Array.isArray(o3) || (it = _unsupportedIterableToArray4(o3)) || allowArrayLike && o3 && typeof o3.length === "number") {
      if (it)
        o3 = it;
      var i4 = 0;
      return function() {
        if (i4 >= o3.length)
          return { done: true };
        return { done: false, value: o3[i4++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray4(o3, minLen) {
    if (!o3)
      return;
    if (typeof o3 === "string")
      return _arrayLikeToArray4(o3, minLen);
    var n2 = Object.prototype.toString.call(o3).slice(8, -1);
    if (n2 === "Object" && o3.constructor)
      n2 = o3.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o3);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray4(o3, minLen);
  }
  function _arrayLikeToArray4(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++) {
      arr2[i4] = arr[i4];
    }
    return arr2;
  }
  var NODE_PROP = "__AMP_NODE";
  var ASSIGNED_SLOT_PROP = "__AMP_ASSIGNED_SLOT";
  var AMP_PREFIX = "AMP-";
  var ELEMENT_NODE = 1;
  var DOCUMENT_NODE = 9;
  var FRAGMENT_NODE = 11;
  var ContextNode = /* @__PURE__ */ function() {
    ContextNode2.get = function get(node) {
      var contextNode = node[NODE_PROP];
      if (!contextNode) {
        contextNode = new ContextNode2(node, null);
        if (isLocalDev() || isTest()) {
          Object.defineProperty(node, NODE_PROP, {
            value: contextNode,
            writable: false,
            enumerable: false,
            configurable: false
          });
        } else {
          node[NODE_PROP] = contextNode;
        }
      }
      return contextNode;
    };
    ContextNode2.closest = function closest(node, includeSelf) {
      if (includeSelf === void 0) {
        includeSelf = true;
      }
      var n2 = node;
      while (n2) {
        if (n2 != node || includeSelf) {
          if (n2[NODE_PROP]) {
            return n2[NODE_PROP];
          }
          var _n = n2, nodeType = _n.nodeType;
          if (nodeType == DOCUMENT_NODE || nodeType == FRAGMENT_NODE || nodeType == ELEMENT_NODE && devAssertElement(n2).tagName.startsWith(AMP_PREFIX)) {
            return ContextNode2.get(n2);
          }
        }
        var assignedSlot = n2[ASSIGNED_SLOT_PROP] || n2.assignedSlot;
        if (assignedSlot) {
          n2 = assignedSlot;
        } else {
          n2 = n2.parentNode;
        }
      }
      return null;
    };
    ContextNode2.assignSlot = function assignSlot(node, slot) {
      if (node[ASSIGNED_SLOT_PROP] == slot) {
        return;
      }
      node[ASSIGNED_SLOT_PROP] = slot;
      discoverContained(node);
    };
    ContextNode2.unassignSlot = function unassignSlot(node, slot) {
      if (node[ASSIGNED_SLOT_PROP] != slot) {
        return;
      }
      node[ASSIGNED_SLOT_PROP] = void 0;
      discoverContained(node);
    };
    ContextNode2.rediscoverChildren = function rediscoverChildren2(node) {
      var _contextNode$children;
      var contextNode = node[NODE_PROP];
      contextNode == null ? void 0 : (_contextNode$children = contextNode.children) == null ? void 0 : _contextNode$children.forEach(discoverContextNode);
    };
    function ContextNode2(node, name) {
      this.node = node;
      this.name = name;
      this.isRoot = node.nodeType == DOCUMENT_NODE;
      this.root = this.isRoot ? this : null;
      this.parent = null;
      this.children = null;
      this.groups = null;
      this.values = new Values(this);
      this.subscribers_ = null;
      this.parentOverridden_ = false;
      this.scheduleDiscover_ = throttleTail(this.discover_.bind(this), setTimeout);
      if (node.nodeType == FRAGMENT_NODE) {
        node.addEventListener("slotchange", function(e3) {
          var _ContextNode$closest, _ContextNode$closest$;
          var slot = e3.target;
          slot.assignedNodes().forEach(discoverContained);
          (_ContextNode$closest = ContextNode2.closest(slot)) == null ? void 0 : (_ContextNode$closest$ = _ContextNode$closest.children) == null ? void 0 : _ContextNode$closest$.forEach(discoverContextNode);
        });
      }
      this.discover();
    }
    var _proto = ContextNode2.prototype;
    _proto.discover = function discover2() {
      if (this.isDiscoverable()) {
        this.scheduleDiscover_();
      } else if (this.name && this.children) {
        this.children.forEach(discoverContextNode);
      }
    };
    _proto.isDiscoverable = function isDiscoverable() {
      return !this.isRoot && !this.parentOverridden_;
    };
    _proto.setParent = function setParent2(parent) {
      var parentContext = parent != null && parent.nodeType ? ContextNode2.get(parent) : parent;
      this.updateTree_(parentContext, parent != null);
    };
    _proto.setIsRoot = function setIsRoot(isRoot) {
      var _this$parent$root, _this$parent;
      this.isRoot = isRoot;
      var newRoot = isRoot ? this : (_this$parent$root = (_this$parent = this.parent) == null ? void 0 : _this$parent.root) != null ? _this$parent$root : null;
      this.updateRoot(newRoot);
    };
    _proto.updateRoot = function updateRoot(root) {
      devAssert(!root || root.isRoot);
      var oldRoot = this.root;
      if (root != oldRoot) {
        var _this$subscribers_, _this$children;
        this.root = root;
        this.values.rootUpdated();
        (_this$subscribers_ = this.subscribers_) == null ? void 0 : _this$subscribers_.forEach(function(comp) {
          return comp.rootUpdated();
        });
        (_this$children = this.children) == null ? void 0 : _this$children.forEach(function(child) {
          return child.updateRoot(root);
        });
      }
    };
    _proto.addGroup = function addGroup2(name, match, weight) {
      var groups = this.groups || (this.groups = new Map());
      var children = this.children, node = this.node;
      var cn = new ContextNode2(node, name);
      groups.set(name, {
        cn: cn,
        match: match,
        weight: weight
      });
      cn.setParent(this);
      children == null ? void 0 : children.forEach(discoverContextNode);
      return cn;
    };
    _proto.group = function group(name) {
      var _this$groups, _this$groups$get;
      return ((_this$groups = this.groups) == null ? void 0 : (_this$groups$get = _this$groups.get(name)) == null ? void 0 : _this$groups$get.cn) || null;
    };
    _proto.findGroup = function findGroup(node) {
      var _this = this;
      var groups = this.groups;
      if (!groups) {
        return null;
      }
      var found = null;
      var maxWeight = Number.NEGATIVE_INFINITY;
      groups.forEach(function(_ref) {
        var cn = _ref.cn, match = _ref.match, weight = _ref.weight;
        if (match(node, _this.node) && weight > maxWeight) {
          found = cn;
          maxWeight = weight;
        }
      });
      return found;
    };
    _proto.subscribe = function subscribe2(id, Ctor, func, deps) {
      var subscribers = this.subscribers_ || (this.subscribers_ = new Map());
      var subscriber = subscribers.get(id);
      if (!subscriber) {
        subscriber = new Ctor(this, func, deps);
        subscribers.set(id, subscriber);
      }
    };
    _proto.unsubscribe = function unsubscribe2(id) {
      var subscribers = this.subscribers_;
      var subscriber = subscribers == null ? void 0 : subscribers.get(id);
      if (subscriber) {
        subscriber.dispose();
        subscribers.delete(id);
      }
    };
    _proto.discover_ = function discover_() {
      if (!this.isDiscoverable()) {
        return;
      }
      var closestNode = ContextNode2.closest(this.node, false);
      var parent = (closestNode == null ? void 0 : closestNode.findGroup(this.node)) || closestNode;
      this.updateTree_(parent, false);
    };
    _proto.updateTree_ = function updateTree_(parent, parentOverridden) {
      var _parent$root;
      this.parentOverridden_ = parentOverridden;
      var oldParent = this.parent;
      if (parent != oldParent) {
        this.parent = parent;
        if (oldParent != null && oldParent.children) {
          removeItem(devAssert(oldParent.children), this);
        }
        if (parent) {
          var parentChildren = parent.children || (parent.children = []);
          pushIfNotExist(parentChildren, this);
          for (var _iterator = _createForOfIteratorHelperLoose4(parentChildren), _step; !(_step = _iterator()).done; ) {
            var child = _step.value;
            if (child != this && child.isDiscoverable()) {
              child.discover();
            }
          }
        }
        this.values.parentUpdated();
      }
      this.updateRoot((_parent$root = parent == null ? void 0 : parent.root) != null ? _parent$root : null);
    };
    return ContextNode2;
  }();
  function forEachContained(node, callback, includeSelf) {
    if (includeSelf === void 0) {
      includeSelf = true;
    }
    var closest = ContextNode.closest(node, includeSelf);
    if (!closest) {
      return;
    }
    if (closest.node == node) {
      callback(closest);
    } else if (closest.children) {
      for (var _iterator2 = _createForOfIteratorHelperLoose4(closest.children), _step2; !(_step2 = _iterator2()).done; ) {
        var child = _step2.value;
        if (node.contains(child.node)) {
          callback(child);
        }
      }
    }
  }
  function discoverContained(node) {
    forEachContained(node, discoverContextNode);
  }
  function discoverContextNode(cn) {
    cn.discover();
  }

  // src/core/context/prop.js
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i4 = 1; i4 < arguments.length; i4++) {
        var source = arguments[i4];
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
  var EMPTY_DEPS = [];
  function contextProp(key, opt_spec) {
    var prop = _extends({
      key: key,
      type: null,
      deps: EMPTY_DEPS,
      recursive: false,
      compute: null,
      defaultValue: void 0
    }, opt_spec);
    devAssert(prop.deps.length == 0 || prop.compute);
    return prop;
  }

  // src/core/context/subscriber.js
  var EMPTY_ARRAY2 = [];
  var EMPTY_FUNC3 = function EMPTY_FUNC4() {
  };
  function subscribe(node, deps, callback) {
    deps = arrayOrSingleItemToArray(deps);
    var id = callback;
    var contextNode = ContextNode.get(node);
    contextNode.subscribe(id, Subscriber, callback, deps);
  }
  var Subscriber = /* @__PURE__ */ function() {
    function Subscriber2(contextNode, func, deps) {
      var _this = this;
      this.contextNode = contextNode;
      this.func_ = func;
      this.deps_ = deps;
      this.depValues_ = deps.length > 0 ? deps.map(EMPTY_FUNC3) : EMPTY_ARRAY2;
      this.depSubscribers_ = deps.length > 0 ? deps.map(function(unusedDep, index) {
        return function(value) {
          _this.depValues_[index] = value;
          _this.update_();
        };
      }) : EMPTY_ARRAY2;
      this.running_ = false;
      this.runCleanup_ = null;
      this.update_ = throttleTail(this.update_.bind(this), setTimeout);
      if (deps.length > 0) {
        var values = this.contextNode.values;
        deps.forEach(function(dep, index) {
          return values.subscribe(dep, _this.depSubscribers_[index]);
        });
      }
      if (this.isConnected_()) {
        this.update_();
      }
    }
    var _proto = Subscriber2.prototype;
    _proto.dispose = function dispose() {
      var _this2 = this;
      if (this.deps_.length > 0) {
        var values = this.contextNode.values;
        this.deps_.forEach(function(dep, index) {
          return values.unsubscribe(dep, _this2.depSubscribers_[index]);
        });
      }
      this.cleanup_();
    };
    _proto.rootUpdated = function rootUpdated() {
      var isConnected = this.isConnected_();
      this.cleanup_();
      if (isConnected) {
        this.update_();
      }
    };
    _proto.isConnected_ = function isConnected_() {
      return !!this.contextNode.root;
    };
    _proto.update_ = function update_() {
      if (!this.isConnected_()) {
        return;
      }
      var running = this.depValues_.every(isDefined2);
      if (running) {
        this.running_ = true;
        this.run_();
      } else if (this.running_) {
        this.running_ = false;
        this.cleanup_();
      }
    };
    _proto.run_ = function run_() {
      if (this.runCleanup_) {
        tryCallback(this.runCleanup_);
        this.runCleanup_ = null;
      }
      var func = this.func_;
      this.runCleanup_ = callHandler(func, this.depValues_);
    };
    _proto.cleanup_ = function cleanup_() {
      if (this.runCleanup_) {
        tryCallback(this.runCleanup_);
        this.runCleanup_ = null;
      }
    };
    return Subscriber2;
  }();
  function isDefined2(v3) {
    return v3 !== void 0;
  }
  function callHandler(callback, deps) {
    switch (deps.length) {
      case 0:
        return callback();
      case 1:
        return callback(deps[0]);
      case 2:
        return callback(deps[0], deps[1]);
      case 3:
        return callback(deps[0], deps[1], deps[2]);
      default:
        return callback.apply(null, deps);
    }
  }

  // src/core/context/index.js
  function setParent(node, parent) {
    ContextNode.get(node).setParent(parent);
  }
  function discover(node) {
    ContextNode.get(node).discover();
  }
  function rediscoverChildren(node) {
    ContextNode.rediscoverChildren(node);
  }
  function setProp(node, prop, setter, value) {
    ContextNode.get(node).values.set(prop, setter, value);
  }
  function removeProp(node, prop, setter) {
    ContextNode.get(node).values.remove(prop, setter);
  }
  function addGroup(node, name, match, weight) {
    if (weight === void 0) {
      weight = 0;
    }
    ContextNode.get(node).addGroup(name, match, weight);
  }
  function setGroupProp(node, groupName, prop, setter, value) {
    ContextNode.get(node).group(groupName).values.set(prop, setter, value);
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

  // src/core/window/index.js
  function toWin(winOrNull) {
    return winOrNull;
  }
  function getWin(node) {
    return toWin((node.ownerDocument || node).defaultView);
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
    } catch (e3) {
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
  function childElementByTag(parent, tagName) {
    assertIsName(tagName);
    return scopedQuerySelector(parent, "> " + tagName);
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
  function parseBooleanAttribute(s3) {
    return s3 == null ? void 0 : s3 !== "false";
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
  function isLayoutSizeDefined(layout) {
    return layout == Layout_Enum.FIXED || layout == Layout_Enum.FIXED_HEIGHT || layout == Layout_Enum.RESPONSIVE || layout == Layout_Enum.FILL || layout == Layout_Enum.FLEX_ITEM || layout == Layout_Enum.FLUID || layout == Layout_Enum.INTRINSIC;
  }
  function applyFillContent(element, opt_replacedContent) {
    element.classList.add("i-amphtml-fill-content");
    if (opt_replacedContent) {
      element.classList.add("i-amphtml-replaced-content");
    }
  }

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
      for (var k3 in this.prevExprMap_) {
        if (!(k3 in this.exprMap_)) {
          toggleOnChange(this.prevExprMap_[k3], this.callback_, false);
        }
      }
      this.prevExprMap_ = null;
    };
    _proto.dispose = function dispose() {
      for (var k3 in this.exprMap_) {
        toggleOnChange(this.exprMap_[k3], this.callback_, false);
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
    var query = win.matchMedia(queryString);
    return [{
      query: query,
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
          var c3 = part.charAt(div);
          if (c3 == "(") {
            parens--;
          } else if (c3 == ")") {
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
      var query = queryString ? win.matchMedia(queryString) : null;
      return {
        query: query,
        value: value
      };
    }).filter(Boolean);
  }
  function resolveMediaQueryListExpr(expr) {
    for (var i4 = 0; i4 < expr.length; i4++) {
      var _expr$i = expr[i4], query = _expr$i.query, value = _expr$i.value;
      if (!query || query.matches) {
        return value;
      }
    }
    return "";
  }
  function toggleOnChange(expr, callback, on) {
    for (var i4 = 0; i4 < expr.length; i4++) {
      var query = expr[i4].query;
      if (query) {
        if (query.onchange !== void 0) {
          query.onchange = on ? callback : null;
        } else {
          if (on) {
            query.addListener(callback);
          } else {
            query.removeListener(callback);
          }
        }
      }
    }
  }

  // src/core/dom/style.js
  var EMPTY_CSS_DECLARATION = {
    "getPropertyPriority": function getPropertyPriority() {
      return "";
    },
    "getPropertyValue": function getPropertyValue() {
      return "";
    }
  };
  function computedStyle(win, el) {
    var style = win.getComputedStyle(el);
    return style || EMPTY_CSS_DECLARATION;
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
  function observeBorderBoxSize(element, callback) {
    observeSize(element, Type_Enum.BORDER_BOX, callback);
  }
  function unobserveBorderBoxSize(element, callback) {
    unobserveSize(element, Type_Enum.BORDER_BOX, callback);
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
    for (var i4 = entries.length - 1; i4 >= 0; i4--) {
      var entry = entries[i4];
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
      for (var k3 = 0; k3 < callbacks.length; k3++) {
        var _callbacks$k = callbacks[k3], callback = _callbacks$k.callback, type = _callbacks$k.type;
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

  // src/core/dom/video/pause-helper.js
  var PauseHelper = /* @__PURE__ */ function() {
    function PauseHelper2(element) {
      this.element_ = element;
      this.isPlaying_ = false;
      this.hasSize_ = false;
      this.pauseWhenNoSize_ = this.pauseWhenNoSize_.bind(this);
    }
    var _proto = PauseHelper2.prototype;
    _proto.updatePlaying = function updatePlaying(isPlaying) {
      if (isPlaying === this.isPlaying_) {
        return;
      }
      this.isPlaying_ = isPlaying;
      if (isPlaying) {
        this.hasSize_ = false;
        observeBorderBoxSize(this.element_, this.pauseWhenNoSize_);
      } else {
        unobserveBorderBoxSize(this.element_, this.pauseWhenNoSize_);
      }
    };
    _proto.pauseWhenNoSize_ = function pauseWhenNoSize_(_ref) {
      var blockSize = _ref.blockSize, inlineSize = _ref.inlineSize;
      var hasSize = inlineSize > 0 && blockSize > 0;
      if (hasSize === this.hasSize_) {
        return;
      }
      this.hasSize_ = hasSize;
      var element = this.element_;
      if (!hasSize) {
        element.pause();
      }
    };
    return PauseHelper2;
  }();

  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var i;
  var t;
  var r;
  var o;
  var f;
  var e = {};
  var c = [];
  var s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function a(n2, l3) {
    for (var u3 in l3) {
      n2[u3] = l3[u3];
    }
    return n2;
  }
  function h(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function v(l3, u3, i4) {
    var t3, r3, o3, f3 = {};
    for (o3 in u3) {
      o3 == "key" ? t3 = u3[o3] : o3 == "ref" ? r3 = u3[o3] : f3[o3] = u3[o3];
    }
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i4), typeof l3 == "function" && l3.defaultProps != null)
      for (o3 in l3.defaultProps) {
        f3[o3] === void 0 && (f3[o3] = l3.defaultProps[o3]);
      }
    return y(l3, f3, t3, r3, null);
  }
  function y(n2, i4, t3, r3, o3) {
    var f3 = {
      type: n2,
      props: i4,
      key: t3,
      ref: r3,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: o3 == null ? ++u : o3
    };
    return o3 == null && l.vnode != null && l.vnode(f3), f3;
  }
  function d(n2) {
    return n2.children;
  }
  function _(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function k(n2, l3) {
    if (l3 == null)
      return n2.__ ? k(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++) {
      if ((u3 = n2.__k[l3]) != null && u3.__e != null)
        return u3.__e;
    }
    return typeof n2.type == "function" ? k(n2) : null;
  }
  function b(n2) {
    var l3, u3;
    if ((n2 = n2.__) != null && n2.__c != null) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++) {
        if ((u3 = n2.__k[l3]) != null && u3.__e != null) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      }
      return b(n2);
    }
  }
  function m(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(g);
  }
  function g() {
    for (var n2; g.__r = t.length; ) {
      n2 = t.sort(function(n3, l3) {
        return n3.__v.__b - l3.__v.__b;
      }), t = [], n2.some(function(n3) {
        var l3, u3, i4, t3, r3, o3;
        n3.__d && (r3 = (t3 = (l3 = n3).__v).__e, (o3 = l3.__P) && (u3 = [], (i4 = a({}, t3)).__v = t3.__v + 1, j(o3, t3, i4, l3.__n, o3.ownerSVGElement !== void 0, t3.__h != null ? [r3] : null, u3, r3 == null ? k(t3) : r3, t3.__h), z(u3, t3), t3.__e != r3 && b(t3)));
      });
    }
  }
  function w(n2, l3, u3, i4, t3, r3, o3, f3, s3, a3) {
    var h3, v3, p2, _3, b3, m3, g3, w2 = i4 && i4.__k || c, A3 = w2.length;
    for (u3.__k = [], h3 = 0; h3 < l3.length; h3++) {
      if ((_3 = u3.__k[h3] = (_3 = l3[h3]) == null || typeof _3 == "boolean" ? null : typeof _3 == "string" || typeof _3 == "number" || typeof _3 == "bigint" ? y(null, _3, null, null, _3) : Array.isArray(_3) ? y(d, {
        children: _3
      }, null, null, null) : _3.__b > 0 ? y(_3.type, _3.props, _3.key, null, _3.__v) : _3) != null) {
        if (_3.__ = u3, _3.__b = u3.__b + 1, (p2 = w2[h3]) === null || p2 && _3.key == p2.key && _3.type === p2.type)
          w2[h3] = void 0;
        else
          for (v3 = 0; v3 < A3; v3++) {
            if ((p2 = w2[v3]) && _3.key == p2.key && _3.type === p2.type) {
              w2[v3] = void 0;
              break;
            }
            p2 = null;
          }
        j(n2, _3, p2 = p2 || e, t3, r3, o3, f3, s3, a3), b3 = _3.__e, (v3 = _3.ref) && p2.ref != v3 && (g3 || (g3 = []), p2.ref && g3.push(p2.ref, null, _3), g3.push(v3, _3.__c || b3, _3)), b3 != null ? (m3 == null && (m3 = b3), typeof _3.type == "function" && _3.__k === p2.__k ? _3.__d = s3 = x(_3, s3, n2) : s3 = P(n2, _3, p2, w2, b3, s3), typeof u3.type == "function" && (u3.__d = s3)) : s3 && p2.__e == s3 && s3.parentNode != n2 && (s3 = k(p2));
      }
    }
    for (u3.__e = m3, h3 = A3; h3--; ) {
      w2[h3] != null && (typeof u3.type == "function" && w2[h3].__e != null && w2[h3].__e == u3.__d && (u3.__d = k(i4, h3 + 1)), N(w2[h3], w2[h3]));
    }
    if (g3)
      for (h3 = 0; h3 < g3.length; h3++) {
        M(g3[h3], g3[++h3], g3[++h3]);
      }
  }
  function x(n2, l3, u3) {
    for (var i4, t3 = n2.__k, r3 = 0; t3 && r3 < t3.length; r3++) {
      (i4 = t3[r3]) && (i4.__ = n2, l3 = typeof i4.type == "function" ? x(i4, l3, u3) : P(u3, i4, i4, t3, i4.__e, l3));
    }
    return l3;
  }
  function P(n2, l3, u3, i4, t3, r3) {
    var o3, f3, e3;
    if (l3.__d !== void 0)
      o3 = l3.__d, l3.__d = void 0;
    else if (u3 == null || t3 != r3 || t3.parentNode == null)
      n:
        if (r3 == null || r3.parentNode !== n2)
          n2.appendChild(t3), o3 = null;
        else {
          for (f3 = r3, e3 = 0; (f3 = f3.nextSibling) && e3 < i4.length; e3 += 2) {
            if (f3 == t3)
              break n;
          }
          n2.insertBefore(t3, r3), o3 = r3;
        }
    return o3 !== void 0 ? o3 : t3.nextSibling;
  }
  function C(n2, l3, u3, i4, t3) {
    var r3;
    for (r3 in u3) {
      r3 === "children" || r3 === "key" || r3 in l3 || H(n2, r3, null, u3[r3], i4);
    }
    for (r3 in l3) {
      t3 && typeof l3[r3] != "function" || r3 === "children" || r3 === "key" || r3 === "value" || r3 === "checked" || u3[r3] === l3[r3] || H(n2, r3, l3[r3], u3[r3], i4);
    }
  }
  function $(n2, l3, u3) {
    l3[0] === "-" ? n2.setProperty(l3, u3) : n2[l3] = u3 == null ? "" : typeof u3 != "number" || s.test(l3) ? u3 : u3 + "px";
  }
  function H(n2, l3, u3, i4, t3) {
    var r3;
    n:
      if (l3 === "style") {
        if (typeof u3 == "string")
          n2.style.cssText = u3;
        else {
          if (typeof i4 == "string" && (n2.style.cssText = i4 = ""), i4)
            for (l3 in i4) {
              u3 && l3 in u3 || $(n2.style, l3, "");
            }
          if (u3)
            for (l3 in u3) {
              i4 && u3[l3] === i4[l3] || $(n2.style, l3, u3[l3]);
            }
        }
      } else if (l3[0] === "o" && l3[1] === "n")
        r3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + r3] = u3, u3 ? i4 || n2.addEventListener(l3, r3 ? T : I, r3) : n2.removeEventListener(l3, r3 ? T : I, r3);
      else if (l3 !== "dangerouslySetInnerHTML") {
        if (t3)
          l3 = l3.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if (l3 !== "href" && l3 !== "list" && l3 !== "form" && l3 !== "tabIndex" && l3 !== "download" && l3 in n2)
          try {
            n2[l3] = u3 == null ? "" : u3;
            break n;
          } catch (n3) {
          }
        typeof u3 == "function" || (u3 != null && (u3 !== false || l3[0] === "a" && l3[1] === "r") ? n2.setAttribute(l3, u3) : n2.removeAttribute(l3));
      }
  }
  function I(n2) {
    this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function T(n2) {
    this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function j(n2, u3, i4, t3, r3, o3, f3, e3, c3) {
    var s3, h3, v3, y3, p2, k3, b3, m3, g3, x3, A3, P2 = u3.type;
    if (u3.constructor !== void 0)
      return null;
    i4.__h != null && (c3 = i4.__h, e3 = u3.__e = i4.__e, u3.__h = null, o3 = [e3]), (s3 = l.__b) && s3(u3);
    try {
      n:
        if (typeof P2 == "function") {
          if (m3 = u3.props, g3 = (s3 = P2.contextType) && t3[s3.__c], x3 = s3 ? g3 ? g3.props.value : s3.__ : t3, i4.__c ? b3 = (h3 = u3.__c = i4.__c).__ = h3.__E : ("prototype" in P2 && P2.prototype.render ? u3.__c = h3 = new P2(m3, x3) : (u3.__c = h3 = new _(m3, x3), h3.constructor = P2, h3.render = O), g3 && g3.sub(h3), h3.props = m3, h3.state || (h3.state = {}), h3.context = x3, h3.__n = t3, v3 = h3.__d = true, h3.__h = []), h3.__s == null && (h3.__s = h3.state), P2.getDerivedStateFromProps != null && (h3.__s == h3.state && (h3.__s = a({}, h3.__s)), a(h3.__s, P2.getDerivedStateFromProps(m3, h3.__s))), y3 = h3.props, p2 = h3.state, v3)
            P2.getDerivedStateFromProps == null && h3.componentWillMount != null && h3.componentWillMount(), h3.componentDidMount != null && h3.__h.push(h3.componentDidMount);
          else {
            if (P2.getDerivedStateFromProps == null && m3 !== y3 && h3.componentWillReceiveProps != null && h3.componentWillReceiveProps(m3, x3), !h3.__e && h3.shouldComponentUpdate != null && h3.shouldComponentUpdate(m3, h3.__s, x3) === false || u3.__v === i4.__v) {
              h3.props = m3, h3.state = h3.__s, u3.__v !== i4.__v && (h3.__d = false), h3.__v = u3, u3.__e = i4.__e, u3.__k = i4.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), h3.__h.length && f3.push(h3);
              break n;
            }
            h3.componentWillUpdate != null && h3.componentWillUpdate(m3, h3.__s, x3), h3.componentDidUpdate != null && h3.__h.push(function() {
              h3.componentDidUpdate(y3, p2, k3);
            });
          }
          h3.context = x3, h3.props = m3, h3.state = h3.__s, (s3 = l.__r) && s3(u3), h3.__d = false, h3.__v = u3, h3.__P = n2, s3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s, h3.getChildContext != null && (t3 = a(a({}, t3), h3.getChildContext())), v3 || h3.getSnapshotBeforeUpdate == null || (k3 = h3.getSnapshotBeforeUpdate(y3, p2)), A3 = s3 != null && s3.type === d && s3.key == null ? s3.props.children : s3, w(n2, Array.isArray(A3) ? A3 : [A3], u3, i4, t3, r3, o3, f3, e3, c3), h3.base = u3.__e, u3.__h = null, h3.__h.length && f3.push(h3), b3 && (h3.__E = h3.__ = null), h3.__e = false;
        } else
          o3 == null && u3.__v === i4.__v ? (u3.__k = i4.__k, u3.__e = i4.__e) : u3.__e = L(i4.__e, u3, i4, t3, r3, o3, f3, c3);
      (s3 = l.diffed) && s3(u3);
    } catch (n3) {
      u3.__v = null, (c3 || o3 != null) && (u3.__e = e3, u3.__h = !!c3, o3[o3.indexOf(e3)] = null), l.__e(n3, u3, i4);
    }
  }
  function z(n2, u3) {
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function L(l3, u3, i4, t3, r3, o3, f3, c3) {
    var s3, a3, v3, y3 = i4.props, p2 = u3.props, d2 = u3.type, _3 = 0;
    if (d2 === "svg" && (r3 = true), o3 != null)
      for (; _3 < o3.length; _3++) {
        if ((s3 = o3[_3]) && (s3 === l3 || (d2 ? s3.localName == d2 : s3.nodeType == 3))) {
          l3 = s3, o3[_3] = null;
          break;
        }
      }
    if (l3 == null) {
      if (d2 === null)
        return document.createTextNode(p2);
      l3 = r3 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), o3 = null, c3 = false;
    }
    if (d2 === null)
      y3 === p2 || c3 && l3.data === p2 || (l3.data = p2);
    else {
      if (o3 = o3 && n.call(l3.childNodes), a3 = (y3 = i4.props || e).dangerouslySetInnerHTML, v3 = p2.dangerouslySetInnerHTML, !c3) {
        if (o3 != null)
          for (y3 = {}, _3 = 0; _3 < l3.attributes.length; _3++) {
            y3[l3.attributes[_3].name] = l3.attributes[_3].value;
          }
        (v3 || a3) && (v3 && (a3 && v3.__html == a3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
      }
      if (C(l3, p2, y3, r3, c3), v3)
        u3.__k = [];
      else if (_3 = u3.props.children, w(l3, Array.isArray(_3) ? _3 : [_3], u3, i4, t3, r3 && d2 !== "foreignObject", o3, f3, o3 ? o3[0] : i4.__k && k(i4, 0), c3), o3 != null)
        for (_3 = o3.length; _3--; ) {
          o3[_3] != null && h(o3[_3]);
        }
      c3 || ("value" in p2 && (_3 = p2.value) !== void 0 && (_3 !== l3.value || d2 === "progress" && !_3) && H(l3, "value", _3, y3.value, false), "checked" in p2 && (_3 = p2.checked) !== void 0 && _3 !== l3.checked && H(l3, "checked", _3, y3.checked, false));
    }
    return l3;
  }
  function M(n2, u3, i4) {
    try {
      typeof n2 == "function" ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, i4);
    }
  }
  function N(n2, u3, i4) {
    var t3, r3;
    if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || M(t3, null, u3)), (t3 = n2.__c) != null) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t3.base = t3.__P = null;
    }
    if (t3 = n2.__k)
      for (r3 = 0; r3 < t3.length; r3++) {
        t3[r3] && N(t3[r3], u3, typeof n2.type != "function");
      }
    i4 || n2.__e == null || h(n2.__e), n2.__e = n2.__d = void 0;
  }
  function O(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function S(u3, i4, t3) {
    var r3, o3, f3;
    l.__ && l.__(u3, i4), o3 = (r3 = typeof t3 == "function") ? null : t3 && t3.__k || i4.__k, f3 = [], j(i4, u3 = (!r3 && t3 || i4).__k = v(d, null, [u3]), o3 || e, e, i4.ownerSVGElement !== void 0, !r3 && t3 ? [t3] : o3 ? null : i4.firstChild ? n.call(i4.childNodes) : null, f3, !r3 && t3 ? t3 : o3 ? o3.__e : i4.firstChild, r3), z(f3, u3);
  }
  function q(n2, l3) {
    S(n2, l3, q);
  }
  function D(n2, l3) {
    var u3 = {
      __c: l3 = "__cC" + f++,
      __: n2,
      Consumer: function Consumer(n3, l4) {
        return n3.children(l4);
      },
      Provider: function Provider(n3) {
        var u4, i4;
        return this.getChildContext || (u4 = [], (i4 = {})[l3] = this, this.getChildContext = function() {
          return i4;
        }, this.shouldComponentUpdate = function(n4) {
          this.props.value !== n4.value && u4.some(m);
        }, this.sub = function(n4) {
          u4.push(n4);
          var l4 = n4.componentWillUnmount;
          n4.componentWillUnmount = function() {
            u4.splice(u4.indexOf(n4), 1), l4 && l4.call(n4);
          };
        }), n3.children;
      }
    };
    return u3.Provider.__ = u3.Consumer.contextType = u3;
  }
  n = c.slice, l = {
    __e: function __e(n2, l3) {
      for (var u3, i4, t3; l3 = l3.__; ) {
        if ((u3 = l3.__c) && !u3.__)
          try {
            if ((i4 = u3.constructor) && i4.getDerivedStateFromError != null && (u3.setState(i4.getDerivedStateFromError(n2)), t3 = u3.__d), u3.componentDidCatch != null && (u3.componentDidCatch(n2), t3 = u3.__d), t3)
              return u3.__E = u3;
          } catch (l4) {
            n2 = l4;
          }
      }
      throw n2;
    }
  }, u = 0, i = function i2(n2) {
    return n2 != null && n2.constructor === void 0;
  }, _.prototype.setState = function(n2, l3) {
    var u3;
    u3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), typeof n2 == "function" && (n2 = n2(a({}, u3), this.props)), n2 && a(u3, n2), n2 != null && this.__v && (l3 && this.__h.push(l3), m(this));
  }, _.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), m(this));
  }, _.prototype.render = d, t = [], r = typeof Promise == "function" ? Promise.prototype.then.bind(resolvedPromise()) : setTimeout, g.__r = 0, f = 0;

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var u2;
  var r2;
  var o2 = 0;
  var i3 = [];
  var c2 = l.__b;
  var f2 = l.__r;
  var e2 = l.diffed;
  var a2 = l.__c;
  var v2 = l.unmount;
  function m2(t3, r3) {
    l.__h && l.__h(u2, t3, o2 || r3), o2 = 0;
    var i4 = u2.__H || (u2.__H = {
      __: [],
      __h: []
    });
    return t3 >= i4.__.length && i4.__.push({}), i4.__[t3];
  }
  function y2(r3, o3) {
    var i4 = m2(t2++, 3);
    !l.__s && k2(i4.__H, o3) && (i4.__ = r3, i4.__H = o3, u2.__H.__h.push(i4));
  }
  function h2(r3, o3) {
    var i4 = m2(t2++, 4);
    !l.__s && k2(i4.__H, o3) && (i4.__ = r3, i4.__H = o3, u2.__h.push(i4));
  }
  function s2(n2) {
    return o2 = 5, A(function() {
      return {
        current: n2
      };
    }, []);
  }
  function A(n2, u3) {
    var r3 = m2(t2++, 7);
    return k2(r3.__H, u3) && (r3.__ = n2(), r3.__H = u3, r3.__h = n2), r3.__;
  }
  function T2(n2) {
    var r3 = u2.context[n2.__c], o3 = m2(t2++, 9);
    return o3.c = n2, r3 ? (o3.__ == null && (o3.__ = true, r3.sub(u2)), r3.props.value) : n2.__;
  }
  function x2() {
    i3.forEach(function(t3) {
      if (t3.__P)
        try {
          t3.__H.__h.forEach(g2), t3.__H.__h.forEach(j2), t3.__H.__h = [];
        } catch (u3) {
          t3.__H.__h = [], l.__e(u3, t3.__v);
        }
    }), i3 = [];
  }
  l.__b = function(n2) {
    u2 = null, c2 && c2(n2);
  }, l.__r = function(n2) {
    f2 && f2(n2), t2 = 0;
    var r3 = (u2 = n2.__c).__H;
    r3 && (r3.__h.forEach(g2), r3.__h.forEach(j2), r3.__h = []);
  }, l.diffed = function(t3) {
    e2 && e2(t3);
    var o3 = t3.__c;
    o3 && o3.__H && o3.__H.__h.length && (i3.push(o3) !== 1 && r2 === l.requestAnimationFrame || ((r2 = l.requestAnimationFrame) || function(n2) {
      var t4, u3 = function u4() {
        clearTimeout(r3), b2 && cancelAnimationFrame(t4), setTimeout(n2);
      }, r3 = setTimeout(u3, 100);
      b2 && (t4 = requestAnimationFrame(u3));
    })(x2)), u2 = null;
  }, l.__c = function(t3, u3) {
    u3.some(function(t4) {
      try {
        t4.__h.forEach(g2), t4.__h = t4.__h.filter(function(n2) {
          return !n2.__ || j2(n2);
        });
      } catch (r3) {
        u3.some(function(n2) {
          n2.__h && (n2.__h = []);
        }), u3 = [], l.__e(r3, t4.__v);
      }
    }), a2 && a2(t3, u3);
  }, l.unmount = function(t3) {
    v2 && v2(t3);
    var u3 = t3.__c;
    if (u3 && u3.__H)
      try {
        u3.__H.__.forEach(g2);
      } catch (t4) {
        l.__e(t4, u3.__v);
      }
  };
  var b2 = typeof requestAnimationFrame == "function";
  function g2(n2) {
    var t3 = u2;
    typeof n2.__c == "function" && n2.__c(), u2 = t3;
  }
  function j2(n2) {
    var t3 = u2;
    n2.__c = n2.__(), u2 = t3;
  }
  function k2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, u3) {
      return t4 !== n2[u3];
    });
  }

  // src/preact/index.js
  function createElement(unusedType, unusedProps, var_args) {
    return v.apply(void 0, arguments);
  }
  function render(vnode, container, opt_replaceNode) {
    S(vnode, container, opt_replaceNode);
  }
  function hydrate(vnode, container) {
    q(vnode, container);
  }
  function createContext(value) {
    return D(value, void 0);
  }
  function useRef(initial) {
    return s2(initial);
  }
  function useEffect(effect, opt_deps) {
    y2(effect, opt_deps);
  }
  function useLayoutEffect(effect, opt_deps) {
    h2(effect, opt_deps);
  }
  function useContext(context2) {
    return T2(context2);
  }
  function useMemo(cb, opt_deps) {
    return A(cb, opt_deps);
  }

  // src/preact/bento-ce.js
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o3, p2) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf4(o4, p3) {
      o4.__proto__ = p3;
      return o4;
    };
    return _setPrototypeOf(o3, p2);
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
    } catch (e3) {
      return false;
    }
  }
  function _getPrototypeOf(o3) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf4(o4) {
      return o4.__proto__ || Object.getPrototypeOf(o4);
    };
    return _getPrototypeOf(o3);
  }
  function maybeWrapNativeSuper(klass) {
    if (isEsm() || typeof Reflect !== "object" || !Reflect.construct) {
      return klass;
    }
    function Wrapper2() {
      return Reflect.construct(klass, arguments, this.constructor);
    }
    Wrapper2.prototype = Object.create(klass.prototype, {
      constructor: {
        value: Wrapper2,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return Object.setPrototypeOf(Wrapper2, klass);
  }
  var BaseElement;
  if (typeof AMP !== "undefined" && AMP.BaseElement) {
    BaseElement = AMP.BaseElement;
  } else {
    ExtendableHTMLElement = maybeWrapNativeSuper(HTMLElement);
    CeBaseElement = /* @__PURE__ */ function() {
      function CeBaseElement2(element) {
        this.element = element;
        this.win = getWin(element);
      }
      CeBaseElement2["CustomElement"] = function CustomElement(BaseElement3) {
        return /* @__PURE__ */ function(_ExtendableHTMLElemen) {
          _inherits(CustomElement2, _ExtendableHTMLElemen);
          var _super = _createSuper(CustomElement2);
          function CustomElement2() {
            var _this;
            _this = _super.call(this);
            _this.implementation = new BaseElement3(_assertThisInitialized(_this));
            return _this;
          }
          var _proto2 = CustomElement2.prototype;
          _proto2.connectedCallback = function connectedCallback() {
            this.classList.add("i-amphtml-built");
            this.implementation.mountCallback();
            this.implementation.buildCallback();
          };
          _proto2.disconnectedCallback = function disconnectedCallback() {
            this.implementation.unmountCallback();
          };
          _proto2.getApi = function getApi() {
            return this.implementation.getApi();
          };
          return CustomElement2;
        }(ExtendableHTMLElement);
      };
      var _proto = CeBaseElement2.prototype;
      _proto.mutateElement = function mutateElement(cb) {
        resolvedPromise().then(cb);
      };
      _proto.isLayoutSupported = function isLayoutSupported() {
        return true;
      };
      _proto.mountCallback = function mountCallback() {
      };
      _proto.unmountCallback = function unmountCallback() {
      };
      _proto.buildCallback = function buildCallback() {
      };
      return CeBaseElement2;
    }();
    BaseElement = CeBaseElement;
  }
  var ExtendableHTMLElement;
  var CeBaseElement;

  // src/preact/context.js
  var context;
  function getAmpContext() {
    return context || (context = createContext({
      renderable: true,
      playable: true,
      loading: Loading_Enum.AUTO
    }));
  }
  function WithAmpContext(_ref) {
    var children = _ref.children, _ref$loading = _ref.loading, loadingProp = _ref$loading === void 0 ? "auto" : _ref$loading, notifyProp = _ref.notify, _ref$playable = _ref.playable, playableProp = _ref$playable === void 0 ? true : _ref$playable, _ref$renderable = _ref.renderable, renderableProp = _ref$renderable === void 0 ? true : _ref$renderable;
    var parent = useAmpContext();
    var renderable = renderableProp && parent.renderable;
    var playable = renderable && playableProp && parent.playable;
    var loading = reducer(renderable ? Loading_Enum.AUTO : Loading_Enum.LAZY, reducer(loadingProp, parent.loading));
    var notify = notifyProp || parent.notify;
    var current = useMemo(function() {
      return {
        renderable: renderable,
        playable: playable,
        loading: loading,
        notify: notify
      };
    }, [renderable, playable, loading, notify]);
    var AmpContext = getAmpContext();
    return createElement(AmpContext.Provider, {
      children: children,
      value: current
    });
  }
  function useAmpContext() {
    var AmpContext = getAmpContext();
    return useContext(AmpContext);
  }

  // src/preact/contextprops.js
  var CanRender = contextProp("CanRender", {
    defaultValue: true,
    recursive: function recursive(inputs) {
      return inputs.reduce(andReducer);
    },
    compute: function compute(contextNode, inputs, parentValue) {
      return parentValue && inputs.reduce(andReducer, true) || false;
    }
  });
  var CanPlay = contextProp("CanPlay", {
    defaultValue: true,
    recursive: function recursive2(inputs) {
      return inputs.reduce(andReducer);
    },
    deps: [CanRender],
    compute: function compute2(contextNode, inputs, parentValue, canRender) {
      return canRender && parentValue && inputs.reduce(andReducer, true) || false;
    }
  });
  var LoadingProp = contextProp("Loading", {
    defaultValue: Loading_Enum.AUTO,
    recursive: true,
    deps: [CanRender],
    compute: function compute3(contextNode, inputs, parentValue, canRender) {
      return reducer(canRender ? Loading_Enum.AUTO : Loading_Enum.LAZY, reducer(parentValue || Loading_Enum.AUTO, inputs.reduce(reducer, Loading_Enum.AUTO)));
    }
  });
  var andReducer = function andReducer2(acc, value) {
    return acc && value;
  };

  // src/core/data-structures/id-generator.js
  function sequentialIdGenerator() {
    var counter = 0;
    return function() {
      return String(++counter);
    };
  }

  // src/core/dom/resource-container-helper.js
  var AMP_CLASS = "i-amphtml-element";
  var DEEP = true;
  var ensureLoaded = function ensureLoaded2(element) {
    return element.ensureLoaded();
  };
  var pause = function pause2(element) {
    return element.pause();
  };
  var unmount = function unmount2(element) {
    return element.unmount();
  };
  function loadAll(containerOrContainers, includeSelf) {
    if (includeSelf === void 0) {
      includeSelf = true;
    }
    forAllWithin(containerOrContainers, includeSelf, !DEEP, ensureLoaded);
  }
  function pauseAll(containerOrContainers, includeSelf) {
    if (includeSelf === void 0) {
      includeSelf = true;
    }
    forAllWithin(containerOrContainers, includeSelf, DEEP, pause);
  }
  function unmountAll(containerOrContainers, includeSelf) {
    if (includeSelf === void 0) {
      includeSelf = true;
    }
    forAllWithin(containerOrContainers, includeSelf, DEEP, unmount);
  }
  function forAllWithin(containerOrContainers, includeSelf, deep, callback) {
    var containers = arrayOrSingleItemToArray(containerOrContainers);
    for (var i4 = 0; i4 < containers.length; i4++) {
      forAllWithinInternal(containers[i4], includeSelf, deep, callback);
    }
  }
  function forAllWithinInternal(container, includeSelf, deep, callback) {
    if (includeSelf && container.classList.contains(AMP_CLASS)) {
      var ampContainer = container;
      tryCallback(callback, ampContainer);
      if (!deep) {
        var placeholder = ampContainer.getPlaceholder();
        if (placeholder) {
          forAllWithinInternal(placeholder, true, !DEEP, callback);
        }
        return;
      }
    }
    var descendants = container.getElementsByClassName(AMP_CLASS);
    var seen = null;
    for (var i4 = 0; i4 < descendants.length; i4++) {
      var descendant = descendants[i4];
      if (deep) {
        tryCallback(callback, descendant);
      } else {
        seen = seen || [];
        var covered = false;
        for (var j3 = 0; j3 < seen.length; j3++) {
          if (seen[j3].contains(descendant)) {
            covered = true;
            break;
          }
        }
        if (!covered) {
          seen.push(descendant);
          tryCallback(callback, descendant);
        }
      }
    }
  }

  // src/preact/slot.js
  function _extends2() {
    _extends2 = Object.assign || function(target) {
      for (var i4 = 1; i4 < arguments.length; i4++) {
        var source = arguments[i4];
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
  var EMPTY = {};
  var cache = new WeakMap();
  function createSlot(element, name, defaultProps, as) {
    if (as === void 0) {
      as = false;
    }
    element.setAttribute("slot", name);
    if (!as) {
      return createElement(Slot, _extends2({}, defaultProps || EMPTY, {
        name: name
      }));
    }
    var cached = cache.get(element);
    if (cached && objectsEqualShallow(cached.oldProps, defaultProps)) {
      return cached.component;
    }
    function SlotWithProps(props) {
      return createElement(Slot, _extends2({}, defaultProps || EMPTY, {
        name: name
      }, props));
    }
    cache.set(element, {
      oldProps: defaultProps,
      component: SlotWithProps
    });
    return SlotWithProps;
  }
  function Slot(props) {
    var ref = useRef(null);
    useSlotContext(ref, props);
    useEffect(function() {
      if (props["postRender"]) {
        props["postRender"]();
      }
    });
    return createElement("slot", _extends2({}, props, {
      ref: ref
    }));
  }
  function useSlotContext(ref, opt_props) {
    var _ref = opt_props || EMPTY, loading = _ref["loading"];
    var context2 = useAmpContext();
    useLayoutEffect(function() {
      var slot = ref.current;
      devAssert(isElement(slot), "Element expected");
      setProp(slot, CanRender, Slot, context2.renderable);
      setProp(slot, CanPlay, Slot, context2.playable);
      setProp(slot, LoadingProp, Slot, context2.loading);
      if (!context2.playable) {
        execute(slot, pauseAll, true);
      }
      return function() {
        removeProp(slot, CanRender, Slot);
        removeProp(slot, CanPlay, Slot);
        removeProp(slot, LoadingProp, Slot);
        rediscoverChildren(slot);
      };
    }, [ref, context2]);
    useLayoutEffect(function() {
      var slot = ref.current;
      devAssert(isElement(slot), "Element expected");
      if (loading != Loading_Enum.LAZY) {
        execute(slot, loadAll, true);
      }
      return function() {
        execute(slot, unmountAll, false);
      };
    }, [ref, loading]);
  }
  function execute(slot, action, schedule) {
    var assignedElements = slot.assignedElements ? slot.assignedElements() : slot;
    if (Array.isArray(assignedElements) && assignedElements.length == 0) {
      return;
    }
    if (!schedule) {
      action(assignedElements);
      return;
    }
    var win = slot.ownerDocument.defaultView;
    if (!win) {
      return;
    }
    var scheduler = win.requestIdleCallback || win.setTimeout;
    scheduler(function() {
      return action(assignedElements);
    });
  }

  // src/preact/parse-props.js
  function _extends3() {
    _extends3 = Object.assign || function(target) {
      for (var i4 = 1; i4 < arguments.length; i4++) {
        var source = arguments[i4];
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
  var RENDERED_ATTR = "i-amphtml-rendered";
  var SIZE_DEFINED_STYLE = {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "width": "100%",
    "height": "100%"
  };
  var FILL_CONTENT_CLASS = "i-amphtml-fill-content";
  var RENDERED_PROP = "__AMP_RENDERED";
  var childIdGenerator = sequentialIdGenerator();
  var ONE_OF_ERROR_MESSAGE = 'Only one of "attr", "attrs", "attrMatches", "passthrough", "passthroughNonEmpty", or "selector" must be given';
  function checkPropsFor(propDefs, cb) {
    return Object.values(propDefs).some(cb);
  }
  var HAS_SELECTOR = function HAS_SELECTOR2(def) {
    return typeof def === "string" || !!def.selector;
  };
  var IS_EMPTY_TEXT_NODE = function IS_EMPTY_TEXT_NODE2(node) {
    return node.nodeType === 3 && node.nodeValue.trim().length === 0;
  };
  function collectProps(Ctor, element, ref, defaultProps, mediaQueryProps) {
    var layoutSizeDefined = Ctor["layoutSizeDefined"], lightDomTag = Ctor["lightDomTag"], propDefs = Ctor["props"];
    if (mediaQueryProps) {
      mediaQueryProps.start();
    }
    var props = _extends3({}, defaultProps, {
      ref: ref
    });
    if (lightDomTag) {
      props[RENDERED_ATTR] = true;
      props[RENDERED_PROP] = true;
      props["as"] = lightDomTag;
    }
    if (layoutSizeDefined) {
      if (Ctor["usesShadowDom"]) {
        props["style"] = SIZE_DEFINED_STYLE;
      } else {
        props["class"] = FILL_CONTENT_CLASS;
      }
    }
    parsePropDefs(Ctor, props, propDefs, element, mediaQueryProps);
    if (mediaQueryProps) {
      mediaQueryProps.complete();
    }
    return props;
  }
  function parsePropDefs(Ctor, props, propDefs, element, mediaQueryProps) {
    if (checkPropsFor(propDefs, HAS_SELECTOR)) {
      var nodes = realChildNodes(element);
      for (var i4 = 0; i4 < nodes.length; i4++) {
        var childElement = nodes[i4];
        var match = matchChild(childElement, propDefs);
        if (!match) {
          continue;
        }
        var def = propDefs[match];
        var _def$as = def.as, as = _def$as === void 0 ? false : _def$as, single = def.single, _def$name = def.name, name = _def$name === void 0 ? match : _def$name, clone = def.clone, _def$props = def.props, slotProps = _def$props === void 0 ? {} : _def$props;
        devAssert(clone || Ctor["usesShadowDom"]);
        var parsedSlotProps = {};
        parsePropDefs(Ctor, parsedSlotProps, slotProps, childElement, mediaQueryProps);
        if (single) {
          props[name] = createSlot(childElement, childElement.getAttribute("slot") || "i-amphtml-" + name, parsedSlotProps, as);
        } else {
          var list = props[name] || (props[name] = []);
          devAssert(!as);
          list.push(clone ? createShallowVNodeCopy(childElement) : createSlot(childElement, childElement.getAttribute("slot") || "i-amphtml-" + name + "-" + childIdGenerator(), parsedSlotProps));
        }
      }
    }
    for (var _name in propDefs) {
      var _def = propDefs[_name];
      devAssert(!!_def.attr + !!_def.attrs + !!_def.attrMatches + !!_def.selector + !!_def.passthrough + !!_def.passthroughNonEmpty <= 1, ONE_OF_ERROR_MESSAGE);
      var value = void 0;
      if (_def.passthrough) {
        devAssert(Ctor["usesShadowDom"]);
        value = [createElement(Slot, {
          loading: Loading_Enum.LAZY
        })];
      } else if (_def.passthroughNonEmpty) {
        devAssert(Ctor["usesShadowDom"]);
        value = realChildNodes(element).every(IS_EMPTY_TEXT_NODE) ? null : [createElement(Slot, {
          loading: Loading_Enum.LAZY
        })];
      } else if (_def.attr) {
        value = element.getAttribute(_def.attr);
        if (_def.media && value != null) {
          value = mediaQueryProps.resolveListQuery(String(value));
        }
      } else if (_def.parseAttrs) {
        devAssert(_def.attrs || _def.attrMatches);
        value = _def.parseAttrs(element);
      }
      if (value == null) {
        if (_def.default != null) {
          props[_name] = _def.default;
        }
      } else {
        var v3 = _def.type == "number" ? parseFloat(value) : _def.type == "boolean" ? parseBooleanAttribute(value) : value;
        props[_name] = v3;
      }
    }
  }
  function createShallowVNodeCopy(element) {
    var props = {
      "key": element
    };
    var attributes = element.attributes, localName = element.localName;
    var length = attributes.length;
    for (var i4 = 0; i4 < length; i4++) {
      var _attributes$i = attributes[i4], name = _attributes$i.name, value = _attributes$i.value;
      props[name] = value;
    }
    return createElement(localName, props);
  }
  function matchChild(element, defs) {
    for (var match in defs) {
      var def = defs[match];
      var selector = typeof def == "string" ? def : def.selector;
      if (matches(element, selector)) {
        return match;
      }
    }
    return null;
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

  // src/core/types/string/url.js
  var QUERY_STRING_REGEX = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
  function tryDecodeUriComponent(component, fallback) {
    if (fallback === void 0) {
      fallback = "";
    }
    try {
      return decodeURIComponent(component);
    } catch (e3) {
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

  // third_party/webcomponentsjs/ShadowCSS.js
  var polyfillHost = "-shadowcsshost";
  var polyfillHostContext = "-shadowcsscontext";
  var parenSuffix = ")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)";
  var cssColonHostRe = new RegExp("(" + polyfillHost + parenSuffix, "gim");
  var cssColonHostContextRe = new RegExp("(" + polyfillHostContext + parenSuffix, "gim");
  var polyfillHostNoCombinator = polyfillHost + "-no-combinator";
  var polyfillHostRe = new RegExp(polyfillHost, "gim");
  var polyfillHostContextRe = new RegExp(polyfillHostContext, "gim");

  // src/shadow-embed.js
  var SHADOW_CSS_CACHE = "__AMP_SHADOW_CSS";
  function installShadowStyle(shadowRoot, name, cssText) {
    var doc = shadowRoot.ownerDocument;
    var win = toWin(doc.defaultView);
    if (shadowRoot.adoptedStyleSheets !== void 0 && win.CSSStyleSheet.prototype.replaceSync !== void 0) {
      var cache2 = win[SHADOW_CSS_CACHE] || (win[SHADOW_CSS_CACHE] = {});
      var styleSheet = cache2[name];
      if (!styleSheet) {
        styleSheet = new win.CSSStyleSheet();
        styleSheet.replaceSync(cssText);
        cache2[name] = styleSheet;
      }
      shadowRoot.adoptedStyleSheets = shadowRoot.adoptedStyleSheets.concat(styleSheet);
    } else {
      var styleEl = doc.createElement("style");
      styleEl.setAttribute("data-name", name);
      styleEl.textContent = cssText;
      shadowRoot.appendChild(styleEl);
    }
  }

  // src/preact/base-element.js
  function _extends4() {
    _extends4 = Object.assign || function(target) {
      for (var i4 = 1; i4 < arguments.length; i4++) {
        var source = arguments[i4];
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
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf2(subClass, superClass);
  }
  function _setPrototypeOf2(o3, p2) {
    _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf4(o4, p3) {
      o4.__proto__ = p3;
      return o4;
    };
    return _setPrototypeOf2(o3, p2);
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
    } catch (e3) {
      return false;
    }
  }
  function _getPrototypeOf2(o3) {
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf4(o4) {
      return o4.__proto__ || Object.getPrototypeOf(o4);
    };
    return _getPrototypeOf2(o3);
  }
  var CHILDREN_MUTATION_INIT = {
    childList: true
  };
  var PASSTHROUGH_MUTATION_INIT = {
    childList: true,
    characterData: true
  };
  var TEMPLATES_MUTATION_INIT = {
    childList: true
  };
  var SHADOW_CONTAINER_ATTRS = dict({
    "style": "display: contents; background: inherit;",
    "part": "c"
  });
  var SERVICE_SLOT_NAME = "i-amphtml-svc";
  var SERVICE_SLOT_ATTRS = dict({
    "name": SERVICE_SLOT_NAME
  });
  var RENDERED_ATTR2 = "i-amphtml-rendered";
  var RENDERED_ATTRS = dict({
    "i-amphtml-rendered": ""
  });
  var RENDERED_PROP2 = "__AMP_RENDERED";
  var UNSLOTTED_GROUP = "unslotted";
  var MATCH_ANY = function MATCH_ANY2() {
    return true;
  };
  var HAS_MEDIA = function HAS_MEDIA2(def) {
    return !!def.media;
  };
  var HAS_PASSTHROUGH = function HAS_PASSTHROUGH2(def) {
    return !!(def.passthrough || def.passthroughNonEmpty);
  };
  var PreactBaseElement = /* @__PURE__ */ function(_BaseElement) {
    _inherits2(PreactBaseElement2, _BaseElement);
    var _super = _createSuper2(PreactBaseElement2);
    PreactBaseElement2.R1 = function R1() {
      return true;
    };
    PreactBaseElement2.requiresShadowDom = function requiresShadowDom() {
      return this["usesShadowDom"];
    };
    PreactBaseElement2.usesLoading = function usesLoading() {
      return this["loadable"];
    };
    PreactBaseElement2.prerenderAllowed = function prerenderAllowed() {
      return !this.usesLoading();
    };
    function PreactBaseElement2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.defaultProps_ = dict({
        "loading": Loading_Enum.AUTO,
        "onReadyState": function onReadyState(state, opt_failure) {
          _this.onReadyState_(state, opt_failure);
        },
        "onPlayingState": function onPlayingState(isPlaying) {
          _this.updateIsPlaying_(isPlaying);
        },
        "onLoading": function onLoading() {
          _this.handleOnLoading();
        },
        "onLoad": function onLoad() {
          _this.handleOnLoad();
        },
        "onError": function onError() {
          _this.handleOnError();
        }
      });
      _this.context_ = {
        renderable: false,
        playable: true,
        loading: Loading_Enum.AUTO,
        notify: function notify() {
          return _this.mutateElement(function() {
          });
        }
      };
      _this.resetLoading_ = false;
      _this.apiWrapper_ = null;
      _this.currentRef_ = null;
      _this.refSetter_ = function(current) {
        if (current !== null) {
          if (_this.apiWrapper_) {
            _this.checkApiWrapper_(current);
          } else {
            _this.initApiWrapper_(current);
          }
        }
        _this.currentRef_ = current;
        _this.maybeUpdateReadyState_();
      };
      _this.deferredApi_ = null;
      _this.contextValues_ = null;
      _this.container_ = null;
      _this.scheduledRender_ = false;
      _this.renderDeferred_ = null;
      _this.boundRerender_ = function() {
        _this.scheduledRender_ = false;
        _this.rerender_();
      };
      _this.hydrationPending_ = false;
      _this.mounted_ = false;
      _this.observer = null;
      _this.pauseHelper_ = new PauseHelper(element);
      _this.mediaQueryProps_ = null;
      return _this;
    }
    var _proto = PreactBaseElement2.prototype;
    _proto.init = function init() {
    };
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      var Ctor = this.constructor;
      if (Ctor["layoutSizeDefined"]) {
        return isLayoutSizeDefined(layout) || layout == Layout_Enum.CONTAINER;
      }
      return _BaseElement.prototype.isLayoutSupported.call(this, layout);
    };
    _proto.buildCallback = function buildCallback() {
      var _this2 = this;
      var Ctor = this.constructor;
      this.observer = new MutationObserver(function(rs) {
        return _this2.checkMutations_(rs);
      });
      var props = Ctor["props"];
      var childrenInit = checkPropsFor(props, HAS_SELECTOR) ? CHILDREN_MUTATION_INIT : null;
      var passthroughInit = checkPropsFor(props, HAS_PASSTHROUGH) ? PASSTHROUGH_MUTATION_INIT : null;
      var templatesInit = Ctor["usesTemplate"] ? TEMPLATES_MUTATION_INIT : null;
      this.observer.observe(this.element, _extends4({
        attributes: true
      }, childrenInit, passthroughInit, templatesInit));
      this.mediaQueryProps_ = checkPropsFor(props, HAS_MEDIA) ? new MediaQueryProps(this.win, function() {
        return _this2.scheduleRender_();
      }) : null;
      var staticProps = Ctor["staticProps"];
      var initProps = this.init();
      Object.assign(this.defaultProps_, staticProps, initProps);
      this.checkPropsPostMutations();
      subscribe(this.element, [], function() {
        return function() {
          _this2.mounted_ = false;
          if (_this2.container_) {
            render(null, _this2.container_);
          }
        };
      });
      subscribe(this.element, [CanRender, CanPlay, LoadingProp], function(canRender, canPlay, loading) {
        _this2.context_.renderable = canRender;
        _this2.context_.playable = canPlay;
        _this2.context_.loading = loading;
        _this2.mounted_ = true;
        _this2.scheduleRender_();
      });
      var useContexts = Ctor["useContexts"];
      if (useContexts.length != 0) {
        subscribe(this.element, useContexts, function() {
          for (var _len = arguments.length, contexts = new Array(_len), _key = 0; _key < _len; _key++) {
            contexts[_key] = arguments[_key];
          }
          _this2.contextValues_ = contexts;
          _this2.scheduleRender_();
        });
      }
      this.renderDeferred_ = new Deferred();
      this.scheduleRender_();
      if (Ctor["loadable"]) {
        var _this$setReadyState;
        (_this$setReadyState = this.setReadyState) == null ? void 0 : _this$setReadyState.call(this, ReadyState_Enum.LOADING);
      }
      this.maybeUpdateReadyState_();
      return this.renderDeferred_.promise;
    };
    _proto.ensureLoaded = function ensureLoaded3() {
      var Ctor = this.constructor;
      if (!Ctor["loadable"]) {
        return;
      }
      this.mutateProps(dict({
        "loading": Loading_Enum.EAGER
      }));
      this.resetLoading_ = true;
    };
    _proto.mountCallback = function mountCallback() {
      discover(this.element);
      var Ctor = this.constructor;
      if (Ctor["loadable"] && this.getProp("loading") != Loading_Enum.AUTO) {
        this.mutateProps({
          "loading": Loading_Enum.AUTO
        });
        this.resetLoading_ = false;
      }
    };
    _proto.unmountCallback = function unmountCallback() {
      var _this$mediaQueryProps;
      discover(this.element);
      var Ctor = this.constructor;
      if (Ctor["loadable"]) {
        this.mutateProps({
          "loading": Loading_Enum.UNLOAD
        });
      }
      this.updateIsPlaying_(false);
      (_this$mediaQueryProps = this.mediaQueryProps_) == null ? void 0 : _this$mediaQueryProps.dispose();
    };
    _proto.mutatedAttributesCallback = function mutatedAttributesCallback() {
      if (this.container_) {
        this.scheduleRender_();
      }
    };
    _proto.attemptChangeHeight = function attemptChangeHeight(newHeight) {
      var _this3 = this;
      return _BaseElement.prototype.attemptChangeHeight.call(this, newHeight).catch(function(e3) {
        if (_this3.getOverflowElement && !_this3.getOverflowElement()) {
          console.warn("[overflow] element not found. Provide one to enable resizing to full contents.", _this3.element);
        }
        throw e3;
      });
    };
    _proto.mutateProps = function mutateProps(props) {
      Object.assign(this.defaultProps_, props);
      this.scheduleRender_();
    };
    _proto.api = function api() {
      return devAssert(this.currentRef_);
    };
    _proto.registerApiAction = function registerApiAction(alias, handler, minTrust) {
      var _this$registerAction, _this4 = this;
      if (minTrust === void 0) {
        minTrust = ActionTrust_Enum.DEFAULT;
      }
      (_this$registerAction = this.registerAction) == null ? void 0 : _this$registerAction.call(this, alias, function(invocation) {
        return handler(_this4.api(), invocation);
      }, minTrust);
    };
    _proto.mutationObserverCallback = function mutationObserverCallback(unusedRecords) {
    };
    _proto.checkPropsPostMutations = function checkPropsPostMutations() {
    };
    _proto.updatePropsForRendering = function updatePropsForRendering(unusedProps) {
    };
    _proto.isReady = function isReady(unusedProps) {
      return true;
    };
    _proto.checkMutations_ = function checkMutations_(records) {
      var Ctor = this.constructor;
      this.mutationObserverCallback(records);
      var rerender = records.some(function(m3) {
        return shouldMutationBeRerendered(Ctor, m3);
      });
      if (rerender) {
        this.checkPropsPostMutations();
        this.scheduleRender_();
      }
    };
    _proto.scheduleRender_ = function scheduleRender_() {
      if (!this.scheduledRender_) {
        this.scheduledRender_ = true;
        this.mutateElement(this.boundRerender_);
      }
    };
    _proto.maybeUpdateReadyState_ = function maybeUpdateReadyState_() {
      var api = this.currentRef_;
      var apiReadyState = api == null ? void 0 : api["readyState"];
      if (apiReadyState && apiReadyState !== this.element.readyState) {
        this.onReadyState_(apiReadyState);
      }
    };
    _proto.onReadyState_ = function onReadyState_(state, opt_failure) {
      var _this$setReadyState2;
      (_this$setReadyState2 = this.setReadyState) == null ? void 0 : _this$setReadyState2.call(this, state, opt_failure);
      var Ctor = this.constructor;
      if (Ctor["unloadOnPause"]) {
        this.updateIsPlaying_(state == ReadyState_Enum.COMPLETE);
      }
      if (this.resetLoading_) {
        this.resetLoading_ = false;
        this.mutateProps({
          "loading": Loading_Enum.AUTO
        });
      }
    };
    _proto.handleOnLoad = function handleOnLoad() {
      var _this$toggleLoading, _this$toggleFallback, _this$togglePlacehold;
      (_this$toggleLoading = this.toggleLoading) == null ? void 0 : _this$toggleLoading.call(this, false);
      (_this$toggleFallback = this.toggleFallback) == null ? void 0 : _this$toggleFallback.call(this, false);
      (_this$togglePlacehold = this.togglePlaceholder) == null ? void 0 : _this$togglePlacehold.call(this, false);
    };
    _proto.handleOnLoading = function handleOnLoading() {
      var _this$toggleLoading2;
      (_this$toggleLoading2 = this.toggleLoading) == null ? void 0 : _this$toggleLoading2.call(this, true);
    };
    _proto.handleOnError = function handleOnError() {
      var _this$toggleLoading3, _this$getFallback;
      (_this$toggleLoading3 = this.toggleLoading) == null ? void 0 : _this$toggleLoading3.call(this, false);
      if ((_this$getFallback = this.getFallback) != null && _this$getFallback.call(this)) {
        var _this$toggleFallback2, _this$togglePlacehold2;
        (_this$toggleFallback2 = this.toggleFallback) == null ? void 0 : _this$toggleFallback2.call(this, true);
        (_this$togglePlacehold2 = this.togglePlaceholder) == null ? void 0 : _this$togglePlacehold2.call(this, false);
      } else {
        var _this$togglePlacehold3;
        (_this$togglePlacehold3 = this.togglePlaceholder) == null ? void 0 : _this$togglePlacehold3.call(this, true);
      }
    };
    _proto.rerender_ = function rerender_() {
      var _this5 = this;
      if (!this.mounted_) {
        return;
      }
      var Ctor = this.constructor;
      var isShadow = Ctor["usesShadowDom"];
      var lightDomTag = isShadow ? null : Ctor["lightDomTag"];
      var isDetached = Ctor["detached"];
      if (!this.container_) {
        var doc = this.win.document;
        if (isShadow) {
          devAssert(!isDetached, 'The AMP element cannot be rendered in detached mode when "props" are configured with "children" property.');
          var shadowRoot = this.element.shadowRoot;
          var container = shadowRoot && childElementByTag(shadowRoot, "c");
          if (container) {
            this.hydrationPending_ = true;
          } else {
            var _this$getPlaceholder, _this$getPlaceholder$, _this$getFallback2, _this$getFallback2$ca, _this$getOverflowElem, _this$getOverflowElem2;
            shadowRoot = this.element.attachShadow({
              mode: "open",
              delegatesFocus: Ctor["delegatesFocus"]
            });
            var shadowCss = Ctor["shadowCss"];
            if (shadowCss) {
              installShadowStyle(shadowRoot, this.element.tagName, shadowCss);
            }
            container = createElementWithAttributes(doc, "c", SHADOW_CONTAINER_ATTRS);
            shadowRoot.appendChild(container);
            var serviceSlot = createElementWithAttributes(doc, "slot", SERVICE_SLOT_ATTRS);
            shadowRoot.appendChild(serviceSlot);
            (_this$getPlaceholder = this.getPlaceholder) == null ? void 0 : (_this$getPlaceholder$ = _this$getPlaceholder.call(this)) == null ? void 0 : _this$getPlaceholder$.setAttribute("slot", SERVICE_SLOT_NAME);
            (_this$getFallback2 = this.getFallback) == null ? void 0 : (_this$getFallback2$ca = _this$getFallback2.call(this)) == null ? void 0 : _this$getFallback2$ca.setAttribute("slot", SERVICE_SLOT_NAME);
            (_this$getOverflowElem = this.getOverflowElement) == null ? void 0 : (_this$getOverflowElem2 = _this$getOverflowElem.call(this)) == null ? void 0 : _this$getOverflowElem2.setAttribute("slot", SERVICE_SLOT_NAME);
          }
          this.container_ = container;
          setParent(shadowRoot, this.element);
          addGroup(this.element, UNSLOTTED_GROUP, MATCH_ANY, -1);
          setGroupProp(this.element, UNSLOTTED_GROUP, CanRender, this, false);
        } else if (lightDomTag) {
          this.container_ = this.element;
          var replacement = childElementByAttr(this.container_, RENDERED_ATTR2) || createElementWithAttributes(doc, lightDomTag, RENDERED_ATTRS);
          replacement[RENDERED_PROP2] = true;
          if (Ctor["layoutSizeDefined"]) {
            replacement.classList.add("i-amphtml-fill-content");
          }
          this.container_.appendChild(replacement);
        } else {
          var _container = doc.createElement("i-amphtml-c");
          this.container_ = _container;
          applyFillContent(_container);
          if (!isDetached) {
            this.element.appendChild(_container);
          }
        }
      }
      var useContexts = Ctor["useContexts"];
      var contextValues = this.contextValues_;
      var isContextReady = useContexts.length == 0 || contextValues != null;
      if (!isContextReady) {
        return;
      }
      var props = collectProps(Ctor, this.element, this.refSetter_, this.defaultProps_, this.mediaQueryProps_);
      this.updatePropsForRendering(props);
      if (!this.isReady(props)) {
        return;
      }
      var comp = createElement(Ctor["Component"], props);
      for (var i4 = 0; i4 < useContexts.length; i4++) {
        var Context = useContexts[i4].type;
        var value = contextValues[i4];
        if (value) {
          comp = createElement(Context.Provider, {
            value: value
          }, comp);
        }
      }
      var v3 = createElement(WithAmpContext, _extends4({}, this.context_), comp);
      if (this.hydrationPending_) {
        this.hydrationPending_ = false;
        hydrate(v3, this.container_);
      } else {
        var _replacement = lightDomTag ? childElementByAttr(this.container_, RENDERED_ATTR2) : null;
        if (_replacement) {
          _replacement[RENDERED_PROP2] = true;
        }
        render(v3, this.container_, _replacement);
      }
      if (!isShadow && !isDetached) {
        this.mutateElement(function() {
          return dispatchCustomEvent(_this5.element, AmpEvents_Enum.DOM_UPDATE, null);
        });
      }
      if (this.renderDeferred_) {
        this.renderDeferred_.resolve();
        this.renderDeferred_ = null;
      }
    };
    _proto.getProp = function getProp(prop, opt_fallback) {
      if (!hasOwn(this.defaultProps_, prop)) {
        return opt_fallback;
      }
      return this.defaultProps_[prop];
    };
    _proto.getApi = function getApi() {
      var api = this.apiWrapper_;
      if (api) {
        return Promise.resolve(api);
      }
      if (!this.deferredApi_) {
        this.deferredApi_ = new Deferred();
      }
      return this.deferredApi_.promise;
    };
    _proto.initApiWrapper_ = function initApiWrapper_(current) {
      var api = map();
      var keys = Object.keys(current);
      for (var i4 = 0; i4 < keys.length; i4++) {
        var key = keys[i4];
        wrapRefProperty(this, api, key);
      }
      this.apiWrapper_ = api;
      if (this.deferredApi_) {
        this.deferredApi_.resolve(api);
        this.deferredApi_ = null;
      }
    };
    _proto.checkApiWrapper_ = function checkApiWrapper_(current) {
      if (!isLocalDev()) {
        return;
      }
      if (current.constructor && current.constructor.name !== "Object") {
        return;
      }
      var api = this.apiWrapper_;
      var newKeys = Object.keys(current);
      for (var i4 = 0; i4 < newKeys.length; i4++) {
        var key = newKeys[i4];
        devAssert(hasOwn(api, key), 'Inconsistent Bento API shape: imperative API gained a "%s" key for %s', key, this.element);
      }
      var oldKeys = Object.keys(api);
      for (var _i = 0; _i < oldKeys.length; _i++) {
        var _key2 = oldKeys[_i];
        devAssert(hasOwn(current, _key2), 'Inconsistent Bento API shape: imperative API lost a "%s" key for %s', _key2, this.element);
      }
    };
    _proto.triggerEvent = function triggerEvent(element, eventName, detail) {
      dispatchCustomEvent(element, eventName, detail);
    };
    _proto.pauseCallback = function pauseCallback() {
      var Ctor = this.constructor;
      if (Ctor["unloadOnPause"]) {
        this.mutateProps(dict({
          "loading": Loading_Enum.UNLOAD
        }));
        this.resetLoading_ = true;
      } else {
        var _api$pause;
        var api = this.currentRef_;
        api == null ? void 0 : (_api$pause = api["pause"]) == null ? void 0 : _api$pause.call(api);
      }
    };
    _proto.updateIsPlaying_ = function updateIsPlaying_(isPlaying) {
      this.pauseHelper_.updatePlaying(isPlaying);
    };
    return PreactBaseElement2;
  }(BaseElement);
  function wrapRefProperty(baseElement, api, key) {
    Object.defineProperty(api, key, {
      configurable: true,
      get: function get() {
        return baseElement.currentRef_[key];
      },
      set: function set(v3) {
        baseElement.currentRef_[key] = v3;
      }
    });
  }
  PreactBaseElement["Component"] = function() {
    devAssert(false, "Must provide Component");
  };
  PreactBaseElement["staticProps"] = void 0;
  PreactBaseElement["useContexts"] = isLocalDev() ? Object.freeze([]) : [];
  PreactBaseElement["loadable"] = false;
  PreactBaseElement["unloadOnPause"] = false;
  PreactBaseElement["layoutSizeDefined"] = false;
  PreactBaseElement["lightDomTag"] = "";
  PreactBaseElement["usesTemplate"] = false;
  PreactBaseElement["shadowCss"] = null;
  PreactBaseElement["usesShadowDom"] = false;
  PreactBaseElement["detached"] = false;
  PreactBaseElement["delegatesFocus"] = false;
  PreactBaseElement["props"] = {};
  function shouldMutationForNodeListBeRerendered(nodeList) {
    for (var i4 = 0; i4 < nodeList.length; i4++) {
      var node = nodeList[i4];
      if (isElement(node)) {
        if (node[RENDERED_PROP2] || node.tagName.startsWith("I-") || node.getAttribute("slot") == "i-amphtml-svc") {
          continue;
        }
        return true;
      }
      if (node.nodeType == 3) {
        return true;
      }
    }
    return false;
  }
  function shouldMutationBeRerendered(Ctor, m3) {
    var type = m3.type;
    if (type == "attributes") {
      if (Ctor["usesTemplate"] && m3.attributeName == "template") {
        return true;
      }
      var props = Ctor["props"];
      for (var name in props) {
        var def = props[name];
        if (m3.attributeName == def.attr || def.attrs && def.attrs.includes(devAssert(m3.attributeName)) || def.attrMatches != null && def.attrMatches(m3.attributeName)) {
          return true;
        }
      }
      return false;
    }
    if (type == "childList") {
      return shouldMutationForNodeListBeRerendered(m3.addedNodes) || shouldMutationForNodeListBeRerendered(m3.removedNodes);
    }
    return false;
  }

  // extensions/amp-social-share/1.0/component.jss.js
  var $button = "button-40baa13";
  var CSS2 = ".button-40baa13{cursor:pointer;position:relative;text-decoration:none}.button-40baa13:focus{outline:2px solid #0389ff;outline-offset:2px}";

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

  // src/preact/compat.js
  var _excluded = ["ref"];
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i4;
    for (i4 = 0; i4 < sourceKeys.length; i4++) {
      key = sourceKeys[i4];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  var REACT_FORWARD_SYMBOL = typeof Symbol !== "undefined" && (Symbol.for == null ? void 0 : Symbol.for("react.forward_ref")) || 3911;
  var oldDiff = l["__b"];
  l["__b"] = newDiff;
  function newDiff(vnode) {
    var _vnode$type;
    if ((_vnode$type = vnode["type"]) != null && _vnode$type.forwardRef_ && vnode["ref"]) {
      vnode["props"]["ref"] = vnode["ref"];
      vnode["ref"] = null;
    }
    oldDiff == null ? void 0 : oldDiff(vnode);
  }
  function forwardRef(Component) {
    function Forward(props) {
      var ref = props.ref, clone = _objectWithoutPropertiesLoose(props, _excluded);
      return Component(clone, ref);
    }
    Forward.$$typeof = REACT_FORWARD_SYMBOL;
    Forward.render = Forward;
    Forward.prototype.isReactComponent = true;
    Forward.forwardRef_ = true;
    if (!isProd()) {
      Forward.displayName = "ForwardRef(" + (Component.displayName || Component.name) + ")";
    }
    return Forward;
  }

  // src/preact/utils.js
  function useResourcesNotify() {
    var _useAmpContext = useAmpContext(), notify = _useAmpContext.notify;
    useLayoutEffect(function() {
      if (notify) {
        notify();
      }
    });
  }
  function propName(name) {
    return name;
  }

  // src/preact/component/contain.js
  function _extends5() {
    _extends5 = Object.assign || function(target) {
      for (var i4 = 1; i4 < arguments.length; i4++) {
        var source = arguments[i4];
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
  function _objectWithoutPropertiesLoose2(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i4;
    for (i4 = 0; i4 < sourceKeys.length; i4++) {
      key = sourceKeys[i4];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  var CONTAIN = [
    null,
    "paint",
    "layout",
    "content",
    "size",
    "size paint",
    "size layout",
    "strict"
  ];
  var SIZE_CONTENT_STYLE = {
    "position": "relative",
    "width": "100%",
    "height": "100%"
  };
  function ContainWrapperWithRef(_ref, ref) {
    var _propName = propName("class"), _ref$as = _ref.as, Comp = _ref$as === void 0 ? "div" : _ref$as, children = _ref.children, _ref$contentAs = _ref.contentAs, ContentComp = _ref$contentAs === void 0 ? "div" : _ref$contentAs, contentClassName = _ref.contentClassName, contentProps = _ref.contentProps, contentRef = _ref.contentRef, contentStyle = _ref.contentStyle, _ref$layout = _ref.layout, layout = _ref$layout === void 0 ? false : _ref$layout, _ref$paint = _ref.paint, paint = _ref$paint === void 0 ? false : _ref$paint, _ref$size = _ref.size, size = _ref$size === void 0 ? false : _ref$size, style = _ref["style"], wrapperClassName = _ref.wrapperClassName, wrapperStyle = _ref.wrapperStyle, className = _ref[_propName], rest = _objectWithoutPropertiesLoose2(_ref, ["as", "children", "contentAs", "contentClassName", "contentProps", "contentRef", "contentStyle", "layout", "paint", "size", "style", "wrapperClassName", "wrapperStyle", _propName].map(_toPropertyKey));
    var containIndex = (size ? 4 : 0) + (layout ? 2 : 0) + (paint ? 1 : 0);
    return createElement(Comp, _extends5({}, rest, {
      ref: ref,
      class: ((className || "") + " " + (wrapperClassName || "")).trim() || null,
      style: _extends5({}, style, wrapperStyle, {
        contain: CONTAIN[containIndex]
      })
    }), createElement(ContentComp, _extends5({}, contentProps, {
      ref: contentRef,
      class: contentClassName,
      style: _extends5({}, size && SIZE_CONTENT_STYLE, {
        "overflow": paint ? "hidden" : "visible"
      }, contentStyle)
    }), children));
  }
  var ContainWrapper = forwardRef(ContainWrapperWithRef);

  // src/preact/component/wrapper.js
  function _extends6() {
    _extends6 = Object.assign || function(target) {
      for (var i4 = 1; i4 < arguments.length; i4++) {
        var source = arguments[i4];
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
  function _objectWithoutPropertiesLoose3(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i4;
    for (i4 = 0; i4 < sourceKeys.length; i4++) {
      key = sourceKeys[i4];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  function _toPropertyKey2(arg) {
    var key = _toPrimitive2(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
  function _toPrimitive2(input, hint) {
    if (typeof input !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function WrapperWithRef(_ref, ref) {
    var _propName = propName("class"), _ref$as = _ref.as, Comp = _ref$as === void 0 ? "div" : _ref$as, children = _ref.children, style = _ref["style"], wrapperClassName = _ref.wrapperClassName, wrapperStyle = _ref.wrapperStyle, className = _ref[_propName], rest = _objectWithoutPropertiesLoose3(_ref, ["as", "children", "style", "wrapperClassName", "wrapperStyle", _propName].map(_toPropertyKey2));
    return createElement(Comp, _extends6({}, rest, {
      ref: ref,
      class: ((className || "") + " " + (wrapperClassName || "")).trim() || null,
      style: _extends6({}, style, wrapperStyle)
    }), children);
  }
  var Wrapper = forwardRef(WrapperWithRef);

  // src/core/dom/layout/viewport-observer.js
  var viewportObservers = new WeakMap();
  var viewportCallbacks = new WeakMap();

  // extensions/amp-social-share/1.0/social-share-config.js
  function getSocialConfig(type) {
    return BUILTINS[type];
  }
  var BUILTINS = {
    "twitter": {
      shareEndpoint: "https://twitter.com/intent/tweet",
      defaultParams: dict({
        "text": "TITLE",
        "url": "CANONICAL_URL"
      }),
      defaultColor: "ffffff",
      defaultBackgroundColor: "1da1f2"
    },
    "facebook": {
      shareEndpoint: "https://www.facebook.com/dialog/share",
      defaultParams: dict({
        "href": "CANONICAL_URL"
      }),
      defaultColor: "1877f2",
      defaultBackgroundColor: "ffffff"
    },
    "pinterest": {
      shareEndpoint: "https://www.pinterest.com/pin/create/button/",
      defaultParams: dict({
        "url": "CANONICAL_URL",
        "description": "TITLE"
      }),
      defaultColor: "e60023",
      defaultBackgroundColor: "ffffff"
    },
    "linkedin": {
      shareEndpoint: "https://www.linkedin.com/shareArticle",
      defaultParams: dict({
        "url": "CANONICAL_URL",
        "mini": "true"
      }),
      "defaultColor": "ffffff",
      "defaultBackgroundColor": "0a66c2"
    },
    "email": {
      shareEndpoint: "mailto:RECIPIENT",
      defaultParams: dict({
        "subject": "TITLE",
        "body": "CANONICAL_URL",
        "recipient": ""
      }),
      defaultColor: "ffffff",
      defaultBackgroundColor: "000000",
      bindings: ["recipient"]
    },
    "tumblr": {
      shareEndpoint: "https://www.tumblr.com/share/link",
      defaultParams: dict({
        "name": "TITLE",
        "url": "CANONICAL_URL"
      }),
      defaultColor: "ffffff",
      defaultBackgroundColor: "001935"
    },
    "whatsapp": {
      shareEndpoint: "https://api.whatsapp.com/send",
      defaultParams: dict({
        "text": "TITLE - CANONICAL_URL"
      }),
      defaultColor: "ffffff",
      defaultBackgroundColor: "25d366"
    },
    "line": {
      shareEndpoint: "https://social-plugins.line.me/lineit/share",
      defaultParams: dict({
        "text": "TITLE",
        "url": "CANONICAL_URL"
      }),
      defaultColor: "ffffff",
      defaultBackgroundColor: "00b900"
    },
    "sms": {
      shareEndpoint: "sms:",
      defaultParams: dict({
        "body": "TITLE - CANONICAL_URL"
      }),
      defaultColor: "ffffff",
      defaultBackgroundColor: "000000"
    },
    "system": {
      shareEndpoint: "navigator-share:",
      defaultParams: dict({
        "text": "TITLE",
        "url": "CANONICAL_URL"
      }),
      defaultColor: "ffffff",
      defaultBackgroundColor: "000000"
    }
  };

  // extensions/amp-social-share/1.0/social-share-svgs.js
  function BentoSocialShareIcon(_ref) {
    var style = _ref.style, type = _ref.type;
    switch (type) {
      case "FACEBOOK":
        return createElement("svg", {
          style: style,
          "data-type": type,
          viewBox: "0 0 44 44"
        }, createElement("path", {
          fill: "currentColor",
          d: "M44 22.134C44 9.90843 34.1516 0 22 0C9.84844 0 0 9.90843 0 22.134C0 33.1837 8.04375 42.34 18.5625 44V28.5321H12.9766V22.134H18.5625V17.2576C18.5625 11.7111 21.8453 8.6461 26.8727 8.6461C29.2789 8.6461 31.7969 9.0784 31.7969 9.0784V14.5254H29.0211C26.2883 14.5254 25.4375 16.2331 25.4375 17.9839V22.134H31.5391L30.5637 28.5321H25.4375V44C35.9562 42.34 44 33.1837 44 22.134Z"
        }));
      case "PINTEREST":
        return createElement("svg", {
          style: style,
          "data-type": type,
          viewBox: "0 0 44 44"
        }, createElement("path", {
          fill: "currentColor",
          d: "M22.0181 0C9.8583 0 0 9.8421 0 21.9819C0 31.2993 5.799 39.2599 13.9901 42.4622C13.7907 40.7253 13.6276 38.0477 14.0626 36.148C14.4613 34.4293 16.6359 25.2204 16.6359 25.2204C16.6359 25.2204 15.9835 23.8997 15.9835 21.9638C15.9835 18.9062 17.7594 16.6266 19.9703 16.6266C21.855 16.6266 22.7611 18.0378 22.7611 19.7204C22.7611 21.602 21.565 24.4243 20.9308 27.0477C20.4052 29.2368 22.0362 31.028 24.1927 31.028C28.107 31.028 31.1153 26.903 31.1153 20.9688C31.1153 15.7039 27.3278 12.0312 21.9093 12.0312C15.6392 12.0313 11.9604 16.7171 11.9604 21.5658C11.9604 23.4474 12.6853 25.4737 13.5914 26.5773C13.7726 26.7944 13.7907 26.9934 13.7364 27.2105C13.5733 27.898 13.1927 29.3997 13.1202 29.7072C13.0296 30.1053 12.794 30.1957 12.3772 29.9967C9.62271 28.7122 7.90114 24.7138 7.90114 21.4753C7.90114 14.5461 12.939 8.17763 22.453 8.17763C30.0823 8.17763 36.0263 13.6053 36.0263 20.8783C36.0263 28.4589 31.2421 34.5559 24.6095 34.5559C22.3805 34.5559 20.2784 33.398 19.5716 32.023C19.5716 32.023 18.4662 36.2204 18.1944 37.2516C17.7051 39.1694 16.364 41.5576 15.458 43.023C17.5238 43.6562 19.6985 44 21.9818 44C34.1416 44 43.9999 34.1579 43.9999 22.0181C44.0361 9.8421 34.1778 0 22.0181 0Z"
        }));
      case "LINKEDIN":
        return createElement("svg", {
          style: style,
          "data-type": type,
          viewBox: "0 0 44 44"
        }, createElement("path", {
          fill: "currentColor",
          d: "M15.1765 33H10.4706V15.7044H15.1765V33ZM12.8235 13.6604C11.2549 13.6604 10 12.4025 10 10.8302C10 9.25786 11.2549 8 12.8235 8C14.3922 8 15.4902 9.41509 15.4902 10.9874C15.4902 12.5597 14.3922 13.6604 12.8235 13.6604ZM34 33H29.2941V24.195C29.2941 18.8491 23.0196 19.3208 23.0196 24.195V33H18.3137V15.7044H23.0196V18.5346C25.2157 14.4465 34 14.1321 34 22.4654V33Z"
        }));
      case "EMAIL":
        return createElement("svg", {
          style: style,
          "data-type": type,
          viewBox: "0 0 44 44"
        }, createElement("path", {
          fill: "currentColor",
          d: "M31.6 12H12.4C11.08 12 10 13.08 10 14.4V28.8C10 30.12 11.08 31.2 12.4 31.2H31.6C32.92 31.2 34 30.12 34 28.8V14.4C34 13.08 32.92 12 31.6 12ZM30.64 14.4L22 20.16L13.36 14.4H30.64ZM12.4 28.8V16.644L22 23.04L31.6 16.644V28.8H12.4Z"
        }));
      case "TWITTER":
        return createElement("svg", {
          style: style,
          "data-type": type,
          viewBox: "0 0 44 44"
        }, createElement("path", {
          fill: "currentColor",
          d: "M16.974 32.605C26.731 32.605 32.066 24.52 32.066 17.513C32.066 17.282 32.066 17.051 32.055 16.831C33.089 16.083 33.991 15.148 34.706 14.081C33.76 14.499 32.737 14.785 31.659 14.917C32.759 14.257 33.595 13.223 33.991 11.98C32.968 12.585 31.835 13.025 30.625 13.267C29.657 12.233 28.282 11.595 26.753 11.595C23.827 11.595 21.451 13.971 21.451 16.897C21.451 17.315 21.495 17.722 21.594 18.107C17.183 17.887 13.278 15.775 10.66 12.563C10.209 13.344 9.945 14.257 9.945 15.225C9.945 17.062 10.88 18.69 12.31 19.636C11.441 19.614 10.627 19.372 9.912 18.976C9.912 18.998 9.912 19.02 9.912 19.042C9.912 21.616 11.738 23.75 14.169 24.245C13.729 24.366 13.256 24.432 12.772 24.432C12.431 24.432 12.101 24.399 11.771 24.333C12.442 26.445 14.4 27.974 16.721 28.018C14.906 29.437 12.618 30.284 10.132 30.284C9.703 30.284 9.285 30.262 8.867 30.207C11.188 31.725 13.982 32.605 16.974 32.605Z"
        }));
      case "TUMBLR":
        return createElement("svg", {
          style: style,
          "data-type": type,
          viewBox: "0 0 44 44"
        }, createElement("path", {
          fill: "currentColor",
          d: "M23.7527 26.9388C23.7527 28.9311 24.7623 29.6046 26.3327 29.6046H28.6042V34.6556H24.3136C20.4716 34.6556 17.5832 32.6632 17.5832 27.9209V20.3163H14.0778V16.2194C17.9477 15.2092 19.5462 11.8979 19.7425 9.00763H23.7527V15.5459H28.4079V20.3163H23.7527V26.9388Z"
        }));
      case "WHATSAPP":
        return createElement("svg", {
          style: style,
          "data-type": type,
          viewBox: "0 0 44 44"
        }, createElement("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M31.9103 12.0713C29.284 9.44357 25.7823 8 22.0535 8C14.3752 8 8.12029 14.2267 8.1136 21.8703C8.1136 24.3184 8.75513 26.6999 9.97136 28.8087L8 36L15.3909 34.0708C17.4291 35.1751 19.7212 35.7605 22.0535 35.7605H22.0601C29.7384 35.7605 35.9933 29.5339 36 21.8836C35.9933 18.1782 34.5432 14.6923 31.9103 12.0713ZM22.0535 33.4122C19.9685 33.4122 17.9303 32.8534 16.1527 31.8023L15.7317 31.5495L11.348 32.6938L12.5174 28.4362L12.2434 27.9972C11.0807 26.1611 10.4726 24.039 10.4726 21.8636C10.4726 15.5172 15.6716 10.3416 22.0601 10.3416C25.1542 10.3416 28.0611 11.5457 30.253 13.7211C32.4382 15.9031 33.6411 18.7969 33.6411 21.8769C33.6344 28.2433 28.4353 33.4122 22.0535 33.4122ZM28.4086 24.7774C28.0611 24.6044 26.3504 23.7662 26.0296 23.6465C25.7088 23.5334 25.4749 23.4735 25.2477 23.8194C25.0138 24.1654 24.3456 24.9503 24.1451 25.1765C23.9446 25.4094 23.7375 25.436 23.39 25.263C23.0425 25.09 21.9198 24.7242 20.59 23.54C19.5542 22.622 18.8592 21.4844 18.652 21.1385C18.4516 20.7926 18.632 20.6063 18.8057 20.4334C18.9594 20.2804 19.1532 20.0276 19.327 19.828C19.5007 19.6284 19.5609 19.4821 19.6745 19.2492C19.7881 19.0164 19.7346 18.8168 19.6477 18.6439C19.5609 18.4709 18.8659 16.7612 18.5718 16.0694C18.2912 15.3908 18.0038 15.484 17.79 15.4773C17.5895 15.464 17.3556 15.464 17.1217 15.464C16.8878 15.464 16.5136 15.5505 16.1928 15.8964C15.8721 16.2423 14.9766 17.0805 14.9766 18.7902C14.9766 20.4999 16.2263 22.143 16.4 22.3759C16.5737 22.6087 18.8525 26.1079 22.3475 27.6113C23.1761 27.9705 23.8243 28.1834 24.3322 28.3431C25.1675 28.6092 25.9227 28.5693 26.5241 28.4828C27.1924 28.383 28.5823 27.6446 28.8764 26.833C29.1637 26.0214 29.1637 25.3295 29.0768 25.1832C28.99 25.0368 28.7561 24.9503 28.4086 24.7774Z",
          fill: "currentColor"
        }));
      case "LINE":
        return createElement("svg", {
          style: style,
          "data-type": type,
          viewBox: "0 0 44 44"
        }, createElement("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M22.0233 7C30.86 7 38.0467 12.83 38.0467 20.0167C38.0467 22.8767 36.9467 25.48 34.5633 28.0467C31.2267 31.9333 23.71 36.6267 21.9867 37.36C20.3059 38.0395 20.5085 36.9401 20.5876 36.5112C20.5896 36.5004 20.5915 36.49 20.5933 36.48C20.63 36.26 20.8133 35.1233 20.8133 35.1233C20.8867 34.6833 20.9233 34.06 20.7767 33.6567C20.63 33.18 19.8967 32.96 19.3833 32.85C11.6833 31.8233 6 26.4333 6 20.0167C6 12.83 13.1867 7 22.0233 7ZM32.5967 18.3333C32.78 18.3333 32.89 18.1867 32.89 18.0033V16.8667C32.89 16.6833 32.7433 16.5367 32.5967 16.5367H28.1233C28.05 16.5367 27.9767 16.5733 27.9033 16.61C27.8667 16.6833 27.83 16.7567 27.83 16.83V23.7967C27.83 23.87 27.8667 23.9433 27.9033 24.0167C27.9767 24.0533 28.05 24.09 28.1233 24.09H32.5967C32.78 24.09 32.89 23.9433 32.89 23.76V22.6233C32.89 22.44 32.7433 22.2933 32.5967 22.2933H29.5533V21.2667H32.5967C32.78 21.2667 32.89 21.12 32.89 20.9367V19.8C32.89 19.6167 32.7433 19.47 32.5967 19.47H29.5533V18.3333H32.5967ZM12.9067 22.44H15.95C16.1333 22.44 16.28 22.5867 16.17 22.6967V23.8333C16.17 24.0167 16.06 24.1633 15.8767 24.1633H11.4033C11.33 24.1633 11.2567 24.1267 11.1834 24.09L11.1833 24.09C11.1467 24.0167 11.11 23.9433 11.11 23.87V16.9033C11.11 16.72 11.2567 16.5733 11.44 16.5733H12.5767C12.76 16.5733 12.9067 16.72 12.9067 16.9033V22.44ZM18.6633 16.61H17.5267C17.3433 16.61 17.1967 16.7567 17.1967 16.9033V23.87C17.1967 24.0533 17.3433 24.1633 17.5267 24.1633H18.6633C18.8467 24.1633 18.9933 24.0166 18.9933 23.87V16.9033C18.9933 16.7567 18.8467 16.61 18.6633 16.61ZM26.4 16.61H25.3C25.1167 16.61 24.97 16.7567 24.97 16.9033V21.0467L21.78 16.72C21.78 16.72 21.78 16.6833 21.7433 16.6833L21.7067 16.6467H21.67H20.5333C20.35 16.6467 20.2033 16.7933 20.2033 16.94V23.9067C20.2033 24.09 20.35 24.2 20.5333 24.2H21.67C21.8533 24.2 22 24.0533 22 23.9067V19.7633L25.19 24.09C25.204 24.104 25.2127 24.118 25.2201 24.13C25.232 24.1493 25.2407 24.1633 25.2633 24.1633H25.3H25.3367H25.41H26.4C26.5833 24.1633 26.73 24.0167 26.73 23.87V16.9033C26.73 16.7567 26.5833 16.61 26.4 16.61Z",
          fill: "currentColor"
        }));
      case "SMS":
        return createElement("svg", {
          style: style,
          "data-type": type,
          viewBox: "0 0 44 44"
        }, createElement("path", {
          fill: "currentColor",
          d: "M30.8 12H13.2C11.99 12 11 12.99 11 14.2V34L15.4 29.6H30.8C32.01 29.6 33 28.61 33 27.4V14.2C33 12.99 32.01 12 30.8 12ZM30.8 27.4H13.2V14.2H30.8V27.4Z"
        }));
      case "SYSTEM":
        return createElement("svg", {
          style: style,
          "data-type": type,
          viewBox: "0 0 44 44"
        }, createElement("path", {
          fill: "currentColor",
          d: "M27.6667 26.5556C26.7889 26.5556 26 26.9 25.4111 27.4556L17.5667 22.8889C17.6222 22.6333 17.6667 22.3778 17.6667 22.1111C17.6667 21.8444 17.6222 21.5889 17.5667 21.3333L25.4 16.7667C25.9889 17.3222 26.7889 17.6667 27.6667 17.6667C29.5111 17.6667 31 16.1778 31 14.3333C31 12.4889 29.5111 11 27.6667 11C25.8222 11 24.3333 12.4889 24.3333 14.3333C24.3333 14.6 24.3778 14.8667 24.4333 15.1111L16.6 19.6778C16 19.1222 15.2111 18.7778 14.3333 18.7778C12.4889 18.7778 11 20.2667 11 22.1111C11 23.9556 12.4889 25.4444 14.3333 25.4444C15.2111 25.4444 16 25.1 16.6 24.5444L24.4333 29.1222C24.3778 29.3667 24.3333 29.6222 24.3333 29.8889C24.3333 31.7333 25.8222 33.2222 27.6667 33.2222C29.5111 33.2222 31 31.7333 31 29.8889C31 28.0444 29.5111 26.5556 27.6667 26.5556ZM27.6667 13.2222C28.2778 13.2222 28.7778 13.7222 28.7778 14.3333C28.7778 14.9444 28.2778 15.4444 27.6667 15.4444C27.0556 15.4444 26.5556 14.9444 26.5556 14.3333C26.5556 13.7222 27.0556 13.2222 27.6667 13.2222ZM14.3333 23.2222C13.7222 23.2222 13.2222 22.7222 13.2222 22.1111C13.2222 21.5 13.7222 21 14.3333 21C14.9444 21 15.4444 21.5 15.4444 22.1111C15.4444 22.7222 14.9444 23.2222 14.3333 23.2222ZM27.6667 31C27.0556 31 26.5556 30.5 26.5556 29.8889C26.5556 29.2778 27.0556 28.7778 27.6667 28.7778C28.2778 28.7778 28.7778 29.2778 28.7778 29.8889C28.7778 30.5 28.2778 31 27.6667 31Z"
        }));
      default:
        return createElement("svg", {
          style: style,
          "data-type": type
        });
    }
  }

  // src/open-window-dialog.js
  function openWindowDialog(win, url, target, opt_features) {
    var res;
    try {
      res = win.open(url, target, opt_features);
    } catch (e3) {
      dev().error("DOM", "Failed to open url on target: ", target, e3);
    }
    if (!res && target != "_top" && !includes(opt_features || "", "noopener")) {
      res = win.open(url, "_top");
    }
    return res;
  }

  // src/url.js
  var SERVING_TYPE_PREFIX = new Set([
    "c",
    "v",
    "a",
    "ad"
  ]);
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
  function addParamsToUrl(url, params) {
    return appendEncodedParamStringToUrl(url, serializeQueryString(params));
  }
  function serializeQueryString(params) {
    var s3 = [];
    for (var k3 in params) {
      var v3 = params[k3];
      if (v3 == null) {
        continue;
      }
      v3 = arrayOrSingleItemToArray(v3);
      for (var i4 = 0; i4 < v3.length; i4++) {
        s3.push(urlEncodeKeyValue(k3, v3[i4]));
      }
    }
    return s3.join("&");
  }

  // extensions/amp-social-share/1.0/component.js
  function _extends7() {
    _extends7 = Object.assign || function(target) {
      for (var i4 = 1; i4 < arguments.length; i4++) {
        var source = arguments[i4];
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
  function _objectWithoutPropertiesLoose4(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i4;
    for (i4 = 0; i4 < sourceKeys.length; i4++) {
      key = sourceKeys[i4];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  function _toPropertyKey3(arg) {
    var key = _toPrimitive3(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
  function _toPrimitive3(input, hint) {
    if (typeof input !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  var NAME = "BentoSocialShare";
  var DEFAULT_WIDTH = 60;
  var DEFAULT_HEIGHT = 44;
  var DEFAULT_TARGET = "_blank";
  var WINDOW_FEATURES = "resizable,scrollbars,width=640,height=480";
  function BentoSocialShare(_ref) {
    var _propName = propName("tabIndex"), background = _ref.background, children = _ref.children, color = _ref.color, endpoint = _ref.endpoint, height = _ref.height, params = _ref.params, style = _ref.style, target = _ref.target, type = _ref.type, width = _ref.width, _ref$_propName = _ref[_propName], tabIndex = _ref$_propName === void 0 ? 0 : _ref$_propName, rest = _objectWithoutPropertiesLoose4(_ref, ["background", "children", "color", "endpoint", "height", "params", "style", "target", "type", "width", _propName].map(_toPropertyKey3));
    useResourcesNotify();
    var checkPropsReturnValue = checkProps(type, endpoint, target, width, height, params);
    if (!checkPropsReturnValue) {
      return null;
    }
    var checkedHeight = checkPropsReturnValue.checkedHeight, checkedTarget = checkPropsReturnValue.checkedTarget, checkedWidth = checkPropsReturnValue.checkedWidth, finalEndpoint = checkPropsReturnValue.finalEndpoint;
    return createElement(Wrapper, _extends7({}, rest, {
      role: "button",
      tabIndex: tabIndex,
      onKeyDown: function onKeyDown(e3) {
        return handleKeyPress(e3, finalEndpoint, checkedTarget);
      },
      onClick: function onClick() {
        return handleActivation(finalEndpoint, checkedTarget);
      },
      wrapperStyle: _extends7({
        width: checkedWidth,
        height: checkedHeight
      }, style),
      part: "button",
      wrapperClassName: $button
    }), processChildren(type, children, color, background));
  }
  function processChildren(type, children, color, background) {
    if (children) {
      return children;
    } else {
      var typeConfig = getSocialConfig(type) || {};
      var iconStyle = dict({
        "color": color || typeConfig.defaultColor,
        "backgroundColor": background || typeConfig.defaultBackgroundColor
      });
      return createElement(BentoSocialShareIcon, {
        style: _extends7({}, iconStyle, {
          width: "100%",
          height: "100%"
        }),
        type: type.toUpperCase()
      });
    }
  }
  function checkProps(type, endpoint, target, width, height, params) {
    var typeConfig = getSocialConfig(type) || {};
    var baseEndpoint = endpoint || typeConfig.shareEndpoint;
    if (baseEndpoint === void 0) {
      displayWarning("An endpoint is required if not using a pre-configured type. " + NAME);
      return null;
    }
    var currentParams = Object.entries(typeConfig.defaultParams || {}).reduce(function(newParams, _ref2) {
      var _document$querySelect, _extends22;
      var key = _ref2[0], value = _ref2[1];
      if (newParams[key]) {
        return newParams;
      }
      return _extends7({}, newParams, (_extends22 = {}, _extends22[key] = value.replace("TITLE", document.title).replace("CANONICAL_URL", ((_document$querySelect = document.querySelector("link[rel='canonical']")) == null ? void 0 : _document$querySelect.href) || location.href), _extends22));
    }, params || {});
    if (type === "email" && !endpoint) {
      baseEndpoint = "mailto:" + (currentParams["recipient"] || "");
    }
    var finalEndpoint = addParamsToUrl(baseEndpoint, currentParams);
    var checkedWidth = width || DEFAULT_WIDTH;
    var checkedHeight = height || DEFAULT_HEIGHT;
    var checkedTarget = target || DEFAULT_TARGET;
    return {
      finalEndpoint: finalEndpoint,
      checkedWidth: checkedWidth,
      checkedHeight: checkedHeight,
      checkedTarget: checkedTarget
    };
  }
  function displayWarning(message) {
    console.warn(message);
  }
  function handleActivation(finalEndpoint, target) {
    var protocol = finalEndpoint.split(":", 1)[0];
    if (protocol === "navigator-share") {
      if (window && window.navigator && window.navigator.share) {
        var data = parseQueryString(getQueryString(finalEndpoint));
        window.navigator.share(data).catch(function(e3) {
          displayWarning(e3.message + ". " + NAME);
        });
      } else {
        displayWarning("Could not complete system share.  Navigator unavailable. " + NAME);
      }
    } else if (protocol === "sms" || protocol === "mailto") {
      openWindowDialog(window, protocol === "sms" ? finalEndpoint.replace("?", "?&") : finalEndpoint, isIos() ? "_top" : target, WINDOW_FEATURES);
    } else {
      openWindowDialog(window, finalEndpoint, target, WINDOW_FEATURES);
    }
  }
  function getQueryString(endpoint) {
    var q2 = endpoint.indexOf("?");
    var h3 = endpoint.indexOf("#");
    q2 = q2 === -1 ? endpoint.length : q2;
    h3 = h3 === -1 ? endpoint.length : h3;
    return endpoint.slice(q2, h3);
  }
  function isIos() {
    return window && window.navigator && window.navigator.userAgent && window.navigator.userAgent.search(/iPhone|iPad|iPod/i) >= 0;
  }
  function handleKeyPress(event, finalEndpoint, target) {
    var key = event.key;
    if (key == Keys_Enum.SPACE || key == Keys_Enum.ENTER) {
      event.preventDefault();
      handleActivation(finalEndpoint, target);
    }
  }

  // extensions/amp-social-share/1.0/base-element.js
  function _inherits3(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf3(subClass, superClass);
  }
  function _setPrototypeOf3(o3, p2) {
    _setPrototypeOf3 = Object.setPrototypeOf || function _setPrototypeOf4(o4, p3) {
      o4.__proto__ = p3;
      return o4;
    };
    return _setPrototypeOf3(o3, p2);
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
    } catch (e3) {
      return false;
    }
  }
  function _getPrototypeOf3(o3) {
    _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf4(o4) {
      return o4.__proto__ || Object.getPrototypeOf(o4);
    };
    return _getPrototypeOf3(o3);
  }
  var BaseElement2 = /* @__PURE__ */ function(_PreactBaseElement) {
    _inherits3(BaseElement3, _PreactBaseElement);
    var _super = _createSuper3(BaseElement3);
    function BaseElement3() {
      return _super.apply(this, arguments);
    }
    return BaseElement3;
  }(PreactBaseElement);
  BaseElement2["Component"] = BentoSocialShare;
  BaseElement2["layoutSizeDefined"] = true;
  BaseElement2["delegatesFocus"] = true;
  BaseElement2["props"] = {
    "children": {
      passthroughNonEmpty: true
    },
    "height": {
      attr: "height"
    },
    "tabIndex": {
      attr: "tabindex"
    },
    "type": {
      attr: "type"
    },
    "width": {
      attr: "width"
    }
  };
  BaseElement2["staticProps"] = {
    "color": "currentColor",
    "background": "inherit"
  };
  BaseElement2["usesShadowDom"] = true;
  BaseElement2["shadowCss"] = CSS2;

  // extensions/amp-social-share/1.0/build/bento-social-share.js
  function defineElement() {
    customElements.define("bento-social-share", BaseElement2.CustomElement(BaseElement2));
  }
  defineElement();
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
/**
* @license
* Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
* Use of this source code is governed by a BSD-style
* license that can be found in the LICENSE file or at
* https://developers.google.com/open-source/licenses/bsd
*/
})
//# sourceMappingURL=bento-social-share-1.0.max.js.map
