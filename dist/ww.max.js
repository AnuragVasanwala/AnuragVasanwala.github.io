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
  function install(win) {
    if (!win.Array.prototype.includes) {
      win.Object.defineProperty(win.Array.prototype, "includes", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: includes
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
  function install2(win) {
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
  function install3(win) {
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
  function install4(win) {
    if (!win.Object.values) {
      win.Object.defineProperty(win.Object, "values", {
        configurable: true,
        writable: true,
        value: values
      });
    }
  }

  // src/polyfills/string-starts-with.js
  function startsWith(search, rawPos) {
    var pos = rawPos > 0 ? rawPos | 0 : 0;
    return this.substr(pos, search.length) === search;
  }
  function install5(win) {
    if (!win.String.prototype.startsWith) {
      win.Object.defineProperty(win.String.prototype, "startsWith", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: startsWith
      });
    }
  }

  // src/web-worker/web-worker-polyfills.js
  if (!isEsm()) {
    install(self);
    install3(self);
    install4(self);
    install2(self);
    install5(self);
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

  // src/core/types/string/index.js
  function isString(s) {
    return typeof s == "string";
  }

  // src/core/types/object/index.js
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
  function ownProperty(obj, key) {
    if (hasOwn(obj, key)) {
      return obj[key];
    } else {
      return void 0;
    }
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
  function isUserErrorMessage(message) {
    return message.indexOf(USER_ERROR_SENTINEL) >= 0;
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
  function createExpectedError(var_args) {
    var error = createError.apply(null, arguments);
    error.expected = true;
    return error;
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
  function devAssert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
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

  // extensions/amp-bind/0.1/bind-expr-defines.js
  var AstNode = function AstNode2(type, args, opt_value) {
    this.type = type;
    this.args = args;
    this.value = opt_value;
  };
  var AstNodeType = {
    EXPRESSION: 0,
    INVOCATION: 1,
    ARGS: 2,
    MEMBER_ACCESS: 3,
    MEMBER: 4,
    VARIABLE: 5,
    LITERAL: 6,
    ARRAY_LITERAL: 7,
    ARRAY: 8,
    OBJECT_LITERAL: 9,
    OBJECT: 10,
    KEY_VALUE: 11,
    NOT: 12,
    UNARY_MINUS: 13,
    UNARY_PLUS: 14,
    PLUS: 15,
    MINUS: 16,
    MULTIPLY: 17,
    DIVIDE: 18,
    MODULO: 19,
    LOGICAL_AND: 20,
    LOGICAL_OR: 21,
    LESS_OR_EQUAL: 22,
    LESS: 23,
    GREATER_OR_EQUAL: 24,
    GREATER: 25,
    NOT_EQUAL: 26,
    EQUAL: 27,
    TERNARY: 28,
    ARROW_FUNCTION: 29
  };

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

  // build/parsers/bind-expr-impl.js
  var parser = function() {
    var o = function o2(k, v, _o, l) {
      for (_o = _o || {}, l = k.length; l--; _o[k[l]] = v) {
        ;
      }
      return _o;
    }, $V0 = [1, 7], $V1 = [1, 10], $V2 = [1, 11], $V3 = [1, 12], $V4 = [1, 13], $V5 = [1, 23], $V6 = [1, 17], $V7 = [1, 18], $V8 = [1, 19], $V9 = [1, 20], $Va = [1, 21], $Vb = [1, 22], $Vc = [1, 26], $Vd = [1, 25], $Ve = [1, 27], $Vf = [1, 28], $Vg = [1, 29], $Vh = [1, 30], $Vi = [1, 31], $Vj = [1, 32], $Vk = [1, 33], $Vl = [1, 34], $Vm = [1, 35], $Vn = [1, 36], $Vo = [1, 37], $Vp = [1, 38], $Vq = [1, 39], $Vr = [1, 41], $Vs = [5, 10, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 31, 33, 38, 39, 49], $Vt = [2, 40], $Vu = [1, 47], $Vv = [1, 52], $Vw = [1, 54], $Vx = [5, 10, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 33, 39, 49], $Vy = [1, 75], $Vz = [33, 49], $VA = [10, 33, 39], $VB = [5, 10, 14, 15, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 33, 39, 49], $VC = [5, 10, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 33, 39, 49], $VD = [5, 10, 19, 20, 25, 26, 27, 28, 33, 39, 49], $VE = [10, 33];
    var parser2 = {
      trace: function trace() {
      },
      yy: {},
      symbols_: {
        "error": 2,
        "result": 3,
        "expr": 4,
        "EOF": 5,
        "operation": 6,
        "invocation": 7,
        "member_access": 8,
        "(": 9,
        ")": 10,
        "variable": 11,
        "literal": 12,
        "!": 13,
        "-": 14,
        "+": 15,
        "*": 16,
        "/": 17,
        "%": 18,
        "&&": 19,
        "||": 20,
        "<=": 21,
        "<": 22,
        ">=": 23,
        ">": 24,
        "!=": 25,
        "==": 26,
        "?": 27,
        ":": 28,
        "NAME": 29,
        "args": 30,
        ".": 31,
        "arrow_function": 32,
        ",": 33,
        "=>": 34,
        "params": 35,
        "array": 36,
        "member": 37,
        "[": 38,
        "]": 39,
        "primitive": 40,
        "object_literal": 41,
        "array_literal": 42,
        "STRING": 43,
        "NUMBER": 44,
        "TRUE": 45,
        "FALSE": 46,
        "NULL": 47,
        "{": 48,
        "}": 49,
        "object": 50,
        "key_value": 51,
        "key": 52,
        "$accept": 0,
        "$end": 1
      },
      terminals_: {
        2: "error",
        5: "EOF",
        9: "(",
        10: ")",
        13: "!",
        14: "-",
        15: "+",
        16: "*",
        17: "/",
        18: "%",
        19: "&&",
        20: "||",
        21: "<=",
        22: "<",
        23: ">=",
        24: ">",
        25: "!=",
        26: "==",
        27: "?",
        28: ":",
        29: "NAME",
        31: ".",
        33: ",",
        34: "=>",
        38: "[",
        39: "]",
        43: "STRING",
        44: "NUMBER",
        45: "TRUE",
        46: "FALSE",
        47: "NULL",
        48: "{",
        49: "}"
      },
      productions_: [0, [3, 2], [3, 1], [4, 1], [4, 1], [4, 1], [4, 3], [4, 1], [4, 1], [6, 2], [6, 2], [6, 2], [6, 3], [6, 3], [6, 3], [6, 3], [6, 3], [6, 3], [6, 3], [6, 3], [6, 3], [6, 3], [6, 3], [6, 3], [6, 3], [6, 5], [7, 2], [7, 4], [7, 6], [7, 8], [32, 4], [32, 3], [32, 5], [35, 3], [35, 3], [30, 2], [30, 3], [8, 2], [37, 2], [37, 3], [11, 1], [12, 1], [12, 1], [12, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [42, 2], [42, 3], [42, 4], [36, 1], [36, 3], [41, 2], [41, 3], [41, 4], [50, 1], [50, 3], [51, 3], [52, 1], [52, 1], [52, 3]],
      performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
        var $0 = $$.length - 1;
        switch (yystate) {
          case 1:
            return $$[$0 - 1];
            break;
          case 2:
            return "";
            break;
          case 3:
          case 4:
          case 5:
          case 7:
          case 8:
            this.$ = $$[$0];
            break;
          case 6:
            this.$ = $$[$0 - 1];
            break;
          case 9:
            this.$ = new AstNode(AstNodeType.NOT, [$$[$0]]);
            break;
          case 10:
            this.$ = new AstNode(AstNodeType.UNARY_MINUS, [$$[$0]]);
            break;
          case 11:
            this.$ = new AstNode(AstNodeType.UNARY_PLUS, [$$[$0]]);
            break;
          case 12:
            this.$ = new AstNode(AstNodeType.PLUS, [$$[$0 - 2], $$[$0]]);
            break;
          case 13:
            this.$ = new AstNode(AstNodeType.MINUS, [$$[$0 - 2], $$[$0]]);
            break;
          case 14:
            this.$ = new AstNode(AstNodeType.MULTIPLY, [$$[$0 - 2], $$[$0]]);
            break;
          case 15:
            this.$ = new AstNode(AstNodeType.DIVIDE, [$$[$0 - 2], $$[$0]]);
            break;
          case 16:
            this.$ = new AstNode(AstNodeType.MODULO, [$$[$0 - 2], $$[$0]]);
            break;
          case 17:
            this.$ = new AstNode(AstNodeType.LOGICAL_AND, [$$[$0 - 2], $$[$0]]);
            break;
          case 18:
            this.$ = new AstNode(AstNodeType.LOGICAL_OR, [$$[$0 - 2], $$[$0]]);
            break;
          case 19:
            this.$ = new AstNode(AstNodeType.LESS_OR_EQUAL, [$$[$0 - 2], $$[$0]]);
            break;
          case 20:
            this.$ = new AstNode(AstNodeType.LESS, [$$[$0 - 2], $$[$0]]);
            break;
          case 21:
            this.$ = new AstNode(AstNodeType.GREATER_OR_EQUAL, [$$[$0 - 2], $$[$0]]);
            break;
          case 22:
            this.$ = new AstNode(AstNodeType.GREATER, [$$[$0 - 2], $$[$0]]);
            break;
          case 23:
            this.$ = new AstNode(AstNodeType.NOT_EQUAL, [$$[$0 - 2], $$[$0]]);
            break;
          case 24:
            this.$ = new AstNode(AstNodeType.EQUAL, [$$[$0 - 2], $$[$0]]);
            break;
          case 25:
            this.$ = new AstNode(AstNodeType.TERNARY, [$$[$0 - 4], $$[$0 - 2], $$[$0]]);
            break;
          case 26:
            this.$ = new AstNode(AstNodeType.INVOCATION, [void 0, $$[$0]], $$[$0 - 1]);
            break;
          case 27:
            this.$ = new AstNode(AstNodeType.INVOCATION, [$$[$0 - 3], $$[$0]], $$[$0 - 1]);
            break;
          case 28:
            {
              var array = new AstNode(AstNodeType.ARRAY, [$$[$0 - 1]]);
              this.$ = new AstNode(AstNodeType.INVOCATION, [$$[$0 - 5], array], $$[$0 - 3]);
            }
            break;
          case 29:
            {
              var _array = new AstNode(AstNodeType.ARRAY, [$$[$0 - 3], $$[$0 - 1]]);
              this.$ = new AstNode(AstNodeType.INVOCATION, [$$[$0 - 7], _array], $$[$0 - 5]);
            }
            break;
          case 30:
            this.$ = new AstNode(AstNodeType.ARROW_FUNCTION, [void 0, $$[$0]]);
            break;
          case 31:
            var param = new AstNode(AstNodeType.LITERAL, null, [$$[$0 - 2]]);
            this.$ = new AstNode(AstNodeType.ARROW_FUNCTION, [param, $$[$0]]);
            break;
          case 32:
            this.$ = new AstNode(AstNodeType.ARROW_FUNCTION, [$$[$0 - 3], $$[$0]]);
            break;
          case 33:
            this.$ = new AstNode(AstNodeType.LITERAL, null, [$$[$0 - 2], $$[$0]]);
            break;
          case 34:
            this.$ = $$[$0 - 2];
            this.$.value.push($$[$0]);
            break;
          case 35:
            this.$ = new AstNode(AstNodeType.ARGS, []);
            break;
          case 36:
            this.$ = new AstNode(AstNodeType.ARGS, [$$[$0 - 1]]);
            break;
          case 37:
            this.$ = new AstNode(AstNodeType.MEMBER_ACCESS, [$$[$0 - 1], $$[$0]]);
            break;
          case 38:
            this.$ = new AstNode(AstNodeType.MEMBER, null, $$[$0]);
            break;
          case 39:
            this.$ = new AstNode(AstNodeType.MEMBER, [$$[$0 - 1]]);
            break;
          case 40:
            this.$ = new AstNode(AstNodeType.VARIABLE, null, $$[$0]);
            break;
          case 41:
          case 42:
          case 43:
          case 61:
            this.$ = $$[$0];
            break;
          case 44:
            var raw = yytext.substr(1, yyleng - 2);
            var unescaped = raw.replace(/\\('|")/g, "$1");
            var parsed = tryParseJson('"' + unescaped.replace(/"/g, '\\"') + '"');
            this.$ = new AstNode(AstNodeType.LITERAL, null, parsed || unescaped);
            break;
          case 45:
            this.$ = new AstNode(AstNodeType.LITERAL, null, Number(yytext));
            break;
          case 46:
            this.$ = new AstNode(AstNodeType.LITERAL, null, true);
            break;
          case 47:
            this.$ = new AstNode(AstNodeType.LITERAL, null, false);
            break;
          case 48:
            this.$ = new AstNode(AstNodeType.LITERAL, null, null);
            break;
          case 49:
            this.$ = new AstNode(AstNodeType.ARRAY_LITERAL, []);
            break;
          case 50:
            this.$ = new AstNode(AstNodeType.ARRAY_LITERAL, [$$[$0 - 1]]);
            break;
          case 51:
            this.$ = new AstNode(AstNodeType.ARRAY_LITERAL, [$$[$0 - 2]]);
            break;
          case 52:
            this.$ = new AstNode(AstNodeType.ARRAY, [$$[$0]]);
            break;
          case 53:
          case 58:
            this.$ = $$[$0 - 2];
            this.$.args.push($$[$0]);
            break;
          case 54:
            this.$ = new AstNode(AstNodeType.OBJECT_LITERAL, []);
            break;
          case 55:
            this.$ = new AstNode(AstNodeType.OBJECT_LITERAL, [$$[$0 - 1]]);
            break;
          case 56:
            this.$ = new AstNode(AstNodeType.OBJECT_LITERAL, [$$[$0 - 2]]);
            break;
          case 57:
            this.$ = new AstNode(AstNodeType.OBJECT, [$$[$0]]);
            break;
          case 59:
            this.$ = new AstNode(AstNodeType.KEY_VALUE, [$$[$0 - 2], $$[$0]]);
            break;
          case 60:
            this.$ = new AstNode(AstNodeType.LITERAL, null, $$[$0]);
            break;
          case 62:
            this.$ = $$[$0 - 1];
            break;
        }
      },
      table: [{
        3: 1,
        4: 2,
        5: [1, 3],
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, {
        1: [3]
      }, {
        5: [1, 24],
        14: $Vc,
        15: $Vd,
        16: $Ve,
        17: $Vf,
        18: $Vg,
        19: $Vh,
        20: $Vi,
        21: $Vj,
        22: $Vk,
        23: $Vl,
        24: $Vm,
        25: $Vn,
        26: $Vo,
        27: $Vp,
        31: $Vq,
        37: 40,
        38: $Vr
      }, {
        1: [2, 2]
      }, o($Vs, [2, 3]), o($Vs, [2, 4]), o($Vs, [2, 5]), {
        4: 42,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, o($Vs, [2, 7]), o($Vs, [2, 8]), {
        4: 43,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, {
        4: 44,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, {
        4: 45,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, o($Vs, $Vt, {
        30: 46,
        9: $Vu
      }), o($Vs, [2, 41]), o($Vs, [2, 42]), o($Vs, [2, 43]), o($Vs, [2, 44]), o($Vs, [2, 45]), o($Vs, [2, 46]), o($Vs, [2, 47]), o($Vs, [2, 48]), {
        29: $Vv,
        38: $Vw,
        40: 53,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        49: [1, 48],
        50: 49,
        51: 50,
        52: 51
      }, {
        4: 57,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        36: 56,
        38: $V5,
        39: [1, 55],
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, {
        1: [2, 1]
      }, {
        4: 58,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, {
        4: 59,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, {
        4: 60,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, {
        4: 61,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, {
        4: 62,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, {
        4: 63,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, {
        4: 64,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, {
        4: 65,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, {
        4: 66,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, {
        4: 67,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, {
        4: 68,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, {
        4: 69,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, {
        4: 70,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, {
        4: 71,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, {
        29: [1, 72]
      }, o($Vs, [2, 37]), {
        4: 73,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, {
        10: [1, 74],
        14: $Vc,
        15: $Vd,
        16: $Ve,
        17: $Vf,
        18: $Vg,
        19: $Vh,
        20: $Vi,
        21: $Vj,
        22: $Vk,
        23: $Vl,
        24: $Vm,
        25: $Vn,
        26: $Vo,
        27: $Vp,
        31: $Vq,
        37: 40,
        38: $Vr
      }, o($Vx, [2, 9], {
        37: 40,
        31: $Vq,
        38: $Vr
      }), o($Vx, [2, 10], {
        37: 40,
        31: $Vq,
        38: $Vr
      }), o($Vx, [2, 11], {
        37: 40,
        31: $Vq,
        38: $Vr
      }), o($Vs, [2, 26]), {
        4: 57,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        10: $Vy,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        36: 76,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, o($Vs, [2, 54]), {
        33: [1, 78],
        49: [1, 77]
      }, o($Vz, [2, 57]), {
        28: [1, 79]
      }, {
        28: [2, 60]
      }, {
        28: [2, 61]
      }, {
        4: 80,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, o($Vs, [2, 49]), {
        33: [1, 82],
        39: [1, 81]
      }, o($VA, [2, 52], {
        37: 40,
        14: $Vc,
        15: $Vd,
        16: $Ve,
        17: $Vf,
        18: $Vg,
        19: $Vh,
        20: $Vi,
        21: $Vj,
        22: $Vk,
        23: $Vl,
        24: $Vm,
        25: $Vn,
        26: $Vo,
        27: $Vp,
        31: $Vq,
        38: $Vr
      }), o($VB, [2, 12], {
        37: 40,
        16: $Ve,
        17: $Vf,
        18: $Vg,
        31: $Vq,
        38: $Vr
      }), o($VB, [2, 13], {
        37: 40,
        16: $Ve,
        17: $Vf,
        18: $Vg,
        31: $Vq,
        38: $Vr
      }), o($Vx, [2, 14], {
        37: 40,
        31: $Vq,
        38: $Vr
      }), o($Vx, [2, 15], {
        37: 40,
        31: $Vq,
        38: $Vr
      }), o($Vx, [2, 16], {
        37: 40,
        31: $Vq,
        38: $Vr
      }), o([5, 10, 19, 20, 27, 28, 33, 39, 49], [2, 17], {
        37: 40,
        14: $Vc,
        15: $Vd,
        16: $Ve,
        17: $Vf,
        18: $Vg,
        21: $Vj,
        22: $Vk,
        23: $Vl,
        24: $Vm,
        25: $Vn,
        26: $Vo,
        31: $Vq,
        38: $Vr
      }), o([5, 10, 20, 27, 28, 33, 39, 49], [2, 18], {
        37: 40,
        14: $Vc,
        15: $Vd,
        16: $Ve,
        17: $Vf,
        18: $Vg,
        19: $Vh,
        21: $Vj,
        22: $Vk,
        23: $Vl,
        24: $Vm,
        25: $Vn,
        26: $Vo,
        31: $Vq,
        38: $Vr
      }), o($VC, [2, 19], {
        37: 40,
        14: $Vc,
        15: $Vd,
        16: $Ve,
        17: $Vf,
        18: $Vg,
        31: $Vq,
        38: $Vr
      }), o($VC, [2, 20], {
        37: 40,
        14: $Vc,
        15: $Vd,
        16: $Ve,
        17: $Vf,
        18: $Vg,
        31: $Vq,
        38: $Vr
      }), o($VC, [2, 21], {
        37: 40,
        14: $Vc,
        15: $Vd,
        16: $Ve,
        17: $Vf,
        18: $Vg,
        31: $Vq,
        38: $Vr
      }), o($VC, [2, 22], {
        37: 40,
        14: $Vc,
        15: $Vd,
        16: $Ve,
        17: $Vf,
        18: $Vg,
        31: $Vq,
        38: $Vr
      }), o($VD, [2, 23], {
        37: 40,
        14: $Vc,
        15: $Vd,
        16: $Ve,
        17: $Vf,
        18: $Vg,
        21: $Vj,
        22: $Vk,
        23: $Vl,
        24: $Vm,
        31: $Vq,
        38: $Vr
      }), o($VD, [2, 24], {
        37: 40,
        14: $Vc,
        15: $Vd,
        16: $Ve,
        17: $Vf,
        18: $Vg,
        21: $Vj,
        22: $Vk,
        23: $Vl,
        24: $Vm,
        31: $Vq,
        38: $Vr
      }), {
        14: $Vc,
        15: $Vd,
        16: $Ve,
        17: $Vf,
        18: $Vg,
        19: $Vh,
        20: $Vi,
        21: $Vj,
        22: $Vk,
        23: $Vl,
        24: $Vm,
        25: $Vn,
        26: $Vo,
        27: $Vp,
        28: [1, 83],
        31: $Vq,
        37: 40,
        38: $Vr
      }, o($Vs, [2, 38], {
        30: 84,
        9: [1, 85]
      }), {
        14: $Vc,
        15: $Vd,
        16: $Ve,
        17: $Vf,
        18: $Vg,
        19: $Vh,
        20: $Vi,
        21: $Vj,
        22: $Vk,
        23: $Vl,
        24: $Vm,
        25: $Vn,
        26: $Vo,
        27: $Vp,
        31: $Vq,
        37: 40,
        38: $Vr,
        39: [1, 86]
      }, o($Vs, [2, 6]), o($Vs, [2, 35]), {
        10: [1, 87],
        33: [1, 88]
      }, o($Vs, [2, 55]), {
        29: $Vv,
        38: $Vw,
        40: 53,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        49: [1, 89],
        51: 90,
        52: 51
      }, {
        4: 91,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, {
        14: $Vc,
        15: $Vd,
        16: $Ve,
        17: $Vf,
        18: $Vg,
        19: $Vh,
        20: $Vi,
        21: $Vj,
        22: $Vk,
        23: $Vl,
        24: $Vm,
        25: $Vn,
        26: $Vo,
        27: $Vp,
        31: $Vq,
        37: 40,
        38: $Vr,
        39: [1, 92]
      }, o($Vs, [2, 50]), {
        4: 94,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        39: [1, 93],
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, {
        4: 95,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, o($Vs, [2, 27]), {
        4: 57,
        6: 4,
        7: 5,
        8: 6,
        9: [1, 97],
        10: $Vy,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: [1, 98],
        32: 96,
        36: 76,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, o($Vs, [2, 39]), o($Vs, [2, 36]), {
        4: 94,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, o($Vs, [2, 56]), o($Vz, [2, 58]), o($Vz, [2, 59], {
        37: 40,
        14: $Vc,
        15: $Vd,
        16: $Ve,
        17: $Vf,
        18: $Vg,
        19: $Vh,
        20: $Vi,
        21: $Vj,
        22: $Vk,
        23: $Vl,
        24: $Vm,
        25: $Vn,
        26: $Vo,
        27: $Vp,
        31: $Vq,
        38: $Vr
      }), {
        28: [2, 62]
      }, o($Vs, [2, 51]), o($VA, [2, 53], {
        37: 40,
        14: $Vc,
        15: $Vd,
        16: $Ve,
        17: $Vf,
        18: $Vg,
        19: $Vh,
        20: $Vi,
        21: $Vj,
        22: $Vk,
        23: $Vl,
        24: $Vm,
        25: $Vn,
        26: $Vo,
        27: $Vp,
        31: $Vq,
        38: $Vr
      }), o([5, 10, 28, 33, 39, 49], [2, 25], {
        37: 40,
        14: $Vc,
        15: $Vd,
        16: $Ve,
        17: $Vf,
        18: $Vg,
        19: $Vh,
        20: $Vi,
        21: $Vj,
        22: $Vk,
        23: $Vl,
        24: $Vm,
        25: $Vn,
        26: $Vo,
        27: $Vp,
        31: $Vq,
        38: $Vr
      }), {
        10: [1, 99],
        33: [1, 100]
      }, {
        4: 42,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        10: [1, 101],
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: [1, 103],
        35: 102,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, o([10, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 31, 33, 38], $Vt, {
        30: 46,
        9: $Vu,
        34: [1, 104]
      }), o($Vs, [2, 28]), {
        4: 105,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, {
        34: [1, 106]
      }, {
        10: [1, 107],
        33: [1, 108]
      }, o([10, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 31, 38], $Vt, {
        30: 46,
        9: $Vu,
        33: [1, 109]
      }), {
        4: 110,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, {
        10: [1, 111],
        14: $Vc,
        15: $Vd,
        16: $Ve,
        17: $Vf,
        18: $Vg,
        19: $Vh,
        20: $Vi,
        21: $Vj,
        22: $Vk,
        23: $Vl,
        24: $Vm,
        25: $Vn,
        26: $Vo,
        27: $Vp,
        31: $Vq,
        37: 40,
        38: $Vr
      }, {
        4: 112,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, {
        34: [1, 113]
      }, {
        29: [1, 114]
      }, {
        29: [1, 115]
      }, o($VE, [2, 31], {
        37: 40,
        14: $Vc,
        15: $Vd,
        16: $Ve,
        17: $Vf,
        18: $Vg,
        19: $Vh,
        20: $Vi,
        21: $Vj,
        22: $Vk,
        23: $Vl,
        24: $Vm,
        25: $Vn,
        26: $Vo,
        27: $Vp,
        31: $Vq,
        38: $Vr
      }), o($Vs, [2, 29]), o($VE, [2, 30], {
        37: 40,
        14: $Vc,
        15: $Vd,
        16: $Ve,
        17: $Vf,
        18: $Vg,
        19: $Vh,
        20: $Vi,
        21: $Vj,
        22: $Vk,
        23: $Vl,
        24: $Vm,
        25: $Vn,
        26: $Vo,
        27: $Vp,
        31: $Vq,
        38: $Vr
      }), {
        4: 116,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        11: 8,
        12: 9,
        13: $V1,
        14: $V2,
        15: $V3,
        29: $V4,
        38: $V5,
        40: 14,
        41: 15,
        42: 16,
        43: $V6,
        44: $V7,
        45: $V8,
        46: $V9,
        47: $Va,
        48: $Vb
      }, o($VE, [2, 34]), o($VE, [2, 33]), o($VE, [2, 32], {
        37: 40,
        14: $Vc,
        15: $Vd,
        16: $Ve,
        17: $Vf,
        18: $Vg,
        19: $Vh,
        20: $Vi,
        21: $Vj,
        22: $Vk,
        23: $Vl,
        24: $Vm,
        25: $Vn,
        26: $Vo,
        27: $Vp,
        31: $Vq,
        38: $Vr
      })],
      defaultActions: {
        3: [2, 2],
        24: [2, 1],
        52: [2, 60],
        53: [2, 61],
        92: [2, 62]
      },
      parseError: function parseError(str, hash) {
        if (hash.recoverable) {
          this.trace(str);
        } else {
          var error = new Error(str);
          error.hash = hash;
          throw error;
        }
      },
      parse: function parse(input) {
        var self2 = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
        var args = lstack.slice.call(arguments, 1);
        var lexer2 = Object.create(this.lexer);
        var sharedState = {
          yy: {}
        };
        for (var k in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
          }
        }
        lexer2.setInput(input, sharedState.yy);
        sharedState.yy.lexer = lexer2;
        sharedState.yy.parser = this;
        if (typeof lexer2.yylloc == "undefined") {
          lexer2.yylloc = {};
        }
        var yyloc = lexer2.yylloc;
        lstack.push(yyloc);
        var ranges = lexer2.options && lexer2.options.ranges;
        if (typeof sharedState.yy.parseError === "function") {
          this.parseError = sharedState.yy.parseError;
        } else {
          this.parseError = Object.getPrototypeOf(this).parseError;
        }
        function popStack(n) {
          stack.length = stack.length - 2 * n;
          vstack.length = vstack.length - n;
          lstack.length = lstack.length - n;
        }
        var lex = function lex2() {
          var token;
          token = lexer2.lex() || EOF;
          if (typeof token !== "number") {
            token = self2.symbols_[token] || token;
          }
          return token;
        };
        var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
        while (true) {
          state = stack[stack.length - 1];
          if (this.defaultActions[state]) {
            action = this.defaultActions[state];
          } else {
            if (symbol === null || typeof symbol == "undefined") {
              symbol = lex();
            }
            action = table[state] && table[state][symbol];
          }
          if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            expected = [];
            for (p in table[state]) {
              if (this.terminals_[p] && p > TERROR) {
                expected.push("'" + this.terminals_[p] + "'");
              }
            }
            if (lexer2.showPosition) {
              errStr = "Parse error on line " + (yylineno + 1) + ":\n" + lexer2.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
            } else {
              errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == EOF ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
            }
            this.parseError(errStr, {
              text: lexer2.match,
              token: this.terminals_[symbol] || symbol,
              line: lexer2.yylineno,
              loc: yyloc,
              expected: expected
            });
          }
          if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
          }
          switch (action[0]) {
            case 1:
              stack.push(symbol);
              vstack.push(lexer2.yytext);
              lstack.push(lexer2.yylloc);
              stack.push(action[1]);
              symbol = null;
              if (!preErrorSymbol) {
                yyleng = lexer2.yyleng;
                yytext = lexer2.yytext;
                yylineno = lexer2.yylineno;
                yyloc = lexer2.yylloc;
                if (recovering > 0) {
                  recovering--;
                }
              } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
              }
              break;
            case 2:
              len = this.productions_[action[1]][1];
              yyval.$ = vstack[vstack.length - len];
              yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
              };
              if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
              }
              r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));
              if (typeof r !== "undefined") {
                return r;
              }
              if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
              }
              stack.push(this.productions_[action[1]][0]);
              vstack.push(yyval.$);
              lstack.push(yyval._$);
              newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
              stack.push(newState);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }
    };
    var lexer = function() {
      var lexer2 = {
        EOF: 1,
        parseError: function parseError(str, hash) {
          if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
          } else {
            throw new Error(str);
          }
        },
        setInput: function setInput(input, yy) {
          this.yy = yy || this.yy || {};
          this._input = input;
          this._more = this._backtrack = this.done = false;
          this.yylineno = this.yyleng = 0;
          this.yytext = this.matched = this.match = "";
          this.conditionStack = ["INITIAL"];
          this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          };
          if (this.options.ranges) {
            this.yylloc.range = [0, 0];
          }
          this.offset = 0;
          return this;
        },
        input: function input() {
          var ch = this._input[0];
          this.yytext += ch;
          this.yyleng++;
          this.offset++;
          this.match += ch;
          this.matched += ch;
          var lines = ch.match(/(?:\r\n?|\n).*/g);
          if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
          } else {
            this.yylloc.last_column++;
          }
          if (this.options.ranges) {
            this.yylloc.range[1]++;
          }
          this._input = this._input.slice(1);
          return ch;
        },
        unput: function unput(ch) {
          var len = ch.length;
          var lines = ch.split(/(?:\r\n?|\n)/g);
          this._input = ch + this._input;
          this.yytext = this.yytext.substr(0, this.yytext.length - len);
          this.offset -= len;
          var oldLines = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
          }
          var r = this.yylloc.range;
          this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
          };
          if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
          }
          this.yyleng = this.yytext.length;
          return this;
        },
        more: function more() {
          this._more = true;
          return this;
        },
        reject: function reject() {
          if (this.options.backtrack_lexer) {
            this._backtrack = true;
          } else {
            return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
              text: "",
              token: null,
              line: this.yylineno
            });
          }
          return this;
        },
        less: function less(n) {
          this.unput(this.match.slice(n));
        },
        pastInput: function pastInput() {
          var past = this.matched.substr(0, this.matched.length - this.match.length);
          return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
        },
        upcomingInput: function upcomingInput() {
          var next = this.match;
          if (next.length < 20) {
            next += this._input.substr(0, 20 - next.length);
          }
          return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
        },
        showPosition: function showPosition() {
          var pre = this.pastInput();
          var c = new Array(pre.length + 1).join("-");
          return pre + this.upcomingInput() + "\n" + c + "^";
        },
        test_match: function test_match(match, indexed_rule) {
          var token, lines, backup;
          if (this.options.backtrack_lexer) {
            backup = {
              yylineno: this.yylineno,
              yylloc: {
                first_line: this.yylloc.first_line,
                last_line: this.last_line,
                first_column: this.yylloc.first_column,
                last_column: this.yylloc.last_column
              },
              yytext: this.yytext,
              match: this.match,
              matches: this.matches,
              matched: this.matched,
              yyleng: this.yyleng,
              offset: this.offset,
              _more: this._more,
              _input: this._input,
              yy: this.yy,
              conditionStack: this.conditionStack.slice(0),
              done: this.done
            };
            if (this.options.ranges) {
              backup.yylloc.range = this.yylloc.range.slice(0);
            }
          }
          lines = match[0].match(/(?:\r\n?|\n).*/g);
          if (lines) {
            this.yylineno += lines.length;
          }
          this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
          };
          this.yytext += match[0];
          this.match += match[0];
          this.matches = match;
          this.yyleng = this.yytext.length;
          if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
          }
          this._more = false;
          this._backtrack = false;
          this._input = this._input.slice(match[0].length);
          this.matched += match[0];
          token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
          if (this.done && this._input) {
            this.done = false;
          }
          if (token) {
            return token;
          } else if (this._backtrack) {
            for (var k in backup) {
              this[k] = backup[k];
            }
            return false;
          }
          return false;
        },
        next: function next() {
          if (this.done) {
            return this.EOF;
          }
          if (!this._input) {
            this.done = true;
          }
          var token, match, tempMatch, index;
          if (!this._more) {
            this.yytext = "";
            this.match = "";
          }
          var rules = this._currentRules();
          for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
              match = tempMatch;
              index = i;
              if (this.options.backtrack_lexer) {
                token = this.test_match(tempMatch, rules[i]);
                if (token !== false) {
                  return token;
                } else if (this._backtrack) {
                  match = false;
                  continue;
                } else {
                  return false;
                }
              } else if (!this.options.flex) {
                break;
              }
            }
          }
          if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
              return token;
            }
            return false;
          }
          if (this._input === "") {
            return this.EOF;
          } else {
            return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
              text: "",
              token: null,
              line: this.yylineno
            });
          }
        },
        lex: function lex() {
          var r = this.next();
          if (r) {
            return r;
          } else {
            return this.lex();
          }
        },
        begin: function begin(condition) {
          this.conditionStack.push(condition);
        },
        popState: function popState() {
          var n = this.conditionStack.length - 1;
          if (n > 0) {
            return this.conditionStack.pop();
          } else {
            return this.conditionStack[0];
          }
        },
        _currentRules: function _currentRules() {
          if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
          } else {
            return this.conditions["INITIAL"].rules;
          }
        },
        topState: function topState(n) {
          n = this.conditionStack.length - 1 - Math.abs(n || 0);
          if (n >= 0) {
            return this.conditionStack[n];
          } else {
            return "INITIAL";
          }
        },
        pushState: function pushState(condition) {
          this.begin(condition);
        },
        stateStackSize: function stateStackSize() {
          return this.conditionStack.length;
        },
        options: {},
        performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
          var YYSTATE = YY_START;
          switch ($avoiding_name_collisions) {
            case 0:
              break;
            case 1:
              return 47;
              break;
            case 2:
              return 45;
              break;
            case 3:
              return 46;
              break;
            case 4:
              return 44;
              break;
            case 5:
              return 29;
              break;
            case 6:
              return 43;
              break;
            case 7:
              return 43;
              break;
            case 8:
              return 34;
              break;
            case 9:
              return 15;
              break;
            case 10:
              return 14;
              break;
            case 11:
              return 16;
              break;
            case 12:
              return 17;
              break;
            case 13:
              return 19;
              break;
            case 14:
              return 20;
              break;
            case 15:
              return 25;
              break;
            case 16:
              return 26;
              break;
            case 17:
              return 21;
              break;
            case 18:
              return 22;
              break;
            case 19:
              return 23;
              break;
            case 20:
              return 24;
              break;
            case 21:
              return 13;
              break;
            case 22:
              return 27;
              break;
            case 23:
              return 28;
              break;
            case 24:
              return 18;
              break;
            case 25:
              return 38;
              break;
            case 26:
              return 39;
              break;
            case 27:
              return 48;
              break;
            case 28:
              return 49;
              break;
            case 29:
              return 9;
              break;
            case 30:
              return 10;
              break;
            case 31:
              return 33;
              break;
            case 32:
              return 31;
              break;
            case 33:
              return "INVALID";
              break;
            case 34:
              return 5;
              break;
          }
        },
        rules: [/^(?:\s+)/, /^(?:null\b)/, /^(?:true\b)/, /^(?:false\b)/, /^(?:[0-9]+(\.[0-9]+)?\b)/, /^(?:[a-zA-Z_][a-zA-Z0-9_]*)/, /^(?:'([^\'\\]|\\.)*')/, /^(?:"([^\"\\]|\\.)*")/, /^(?:=>)/, /^(?:\+)/, /^(?:-)/, /^(?:\*)/, /^(?:\/)/, /^(?:&&)/, /^(?:\|\|)/, /^(?:!=)/, /^(?:==)/, /^(?:<=)/, /^(?:<)/, /^(?:>=)/, /^(?:>)/, /^(?:!)/, /^(?:\?)/, /^(?::)/, /^(?:%)/, /^(?:\[)/, /^(?:\])/, /^(?:\{)/, /^(?:\})/, /^(?:\()/, /^(?:\))/, /^(?:,)/, /^(?:\.)/, /^(?:.)/, /^(?:$)/],
        conditions: {
          "INITIAL": {
            "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
            "inclusive": true
          }
        }
      };
      return lexer2;
    }();
    parser2.lexer = lexer;
    function Parser() {
      this.yy = {};
    }
    Parser.prototype = parser2;
    parser2.Parser = Parser;
    return new Parser();
  }();
  var bindParser = parser;

  // extensions/amp-bind/0.1/bind-expression.js
  var TAG = "amp-bind";
  var MAX_AST_SIZE = 250;
  var CUSTOM_FUNCTIONS = "custom-functions";
  var FUNCTION_ALLOWLIST;
  function generateFunctionAllowlist() {
    function splice(array, unusedStart, unusedDeleteCount, unusedItems) {
      if (!isArray(array)) {
        throw new Error("splice: " + array + " is not an array.");
      }
      var copy = Array.prototype.slice.call(array);
      var args = Array.prototype.slice.call(arguments, 1);
      Array.prototype.splice.apply(copy, args);
      return copy;
    }
    function instanceSplice() {
      function splice2(unusedStart, unusedDeleteCount, unusedItems) {
        var copy = Array.prototype.slice.call(this);
        Array.prototype.splice.apply(copy, arguments);
        return copy;
      }
      return splice2;
    }
    function sort(array) {
      if (!isArray(array)) {
        throw new Error("sort: " + array + " is not an array.");
      }
      var copy = Array.prototype.slice.call(array);
      Array.prototype.sort.call(copy);
      return copy;
    }
    function instanceSort() {
      function sort2(compareFunction) {
        var copy = Array.prototype.slice.call(this);
        Array.prototype.sort.call(copy, compareFunction);
        return copy;
      }
      return sort2;
    }
    var allowlist = dict({
      "[object Array]": {
        "concat": Array.prototype.concat,
        "filter": Array.prototype.filter,
        "indexOf": Array.prototype.indexOf,
        "join": Array.prototype.join,
        "lastIndexOf": Array.prototype.lastIndexOf,
        "map": Array.prototype.map,
        "reduce": Array.prototype.reduce,
        "slice": Array.prototype.slice,
        "some": Array.prototype.some,
        "sort": instanceSort(),
        "splice": instanceSplice(),
        "includes": Array.prototype.includes
      },
      "[object Number]": {
        "toExponential": Number.prototype.toExponential,
        "toFixed": Number.prototype.toFixed,
        "toPrecision": Number.prototype.toPrecision,
        "toString": Number.prototype.toString
      },
      "[object String]": {
        "charAt": String.prototype.charAt,
        "charCodeAt": String.prototype.charCodeAt,
        "concat": String.prototype.concat,
        "indexOf": String.prototype.indexOf,
        "lastIndexOf": String.prototype.lastIndexOf,
        "replace": String.prototype.replace,
        "slice": String.prototype.slice,
        "split": String.prototype.split,
        "substr": String.prototype.substr,
        "substring": String.prototype.substring,
        "toLowerCase": String.prototype.toLowerCase,
        "toUpperCase": String.prototype.toUpperCase
      }
    });
    allowlist[CUSTOM_FUNCTIONS] = {
      "encodeURI": encodeURI,
      "encodeURIComponent": encodeURIComponent,
      "abs": Math.abs,
      "ceil": Math.ceil,
      "floor": Math.floor,
      "sqrt": Math.sqrt,
      "log": Math.log,
      "max": Math.max,
      "min": Math.min,
      "pow": Math.pow,
      "random": Math.random,
      "round": Math.round,
      "sign": Math.sign,
      "keys": Object.keys,
      "values": Object.values
    };
    var out = map();
    Object.keys(allowlist).forEach(function(type) {
      out[type] = map();
      var functionsForType = allowlist[type];
      Object.keys(functionsForType).forEach(function(name) {
        var func = functionsForType[name];
        if (func) {
          devAssert(!func.name || func.name.startsWith(name), "Listed function name " + ('"' + name + '" doesn\'t match name property "' + func.name + '".'));
          out[type][name] = func;
        } else {
          throw new Error("Unsupported function: " + type + "." + name);
        }
      });
    });
    out[CUSTOM_FUNCTIONS]["copyAndSplice"] = splice;
    out[CUSTOM_FUNCTIONS]["sort"] = sort;
    out[CUSTOM_FUNCTIONS]["splice"] = splice;
    return out;
  }
  var BindExpression = /* @__PURE__ */ function() {
    function BindExpression2(expressionString, macros, opt_maxAstSize) {
      if (!FUNCTION_ALLOWLIST) {
        FUNCTION_ALLOWLIST = generateFunctionAllowlist();
      }
      this.expressionString = expressionString;
      this.macros_ = macros;
      this.ast_ = bindParser.parse(this.expressionString);
      this.expressionSize = this.numberOfNodesInAst_(this.ast_);
      var maxSize = opt_maxAstSize || MAX_AST_SIZE;
      var skipConstraint = getMode().localDev && !getMode().test;
      if (this.expressionSize > maxSize && !skipConstraint) {
        throw new Error("Expression size (" + this.expressionSize + ") exceeds max " + ("(" + maxSize + "). Please reduce number of operands."));
      }
    }
    var _proto = BindExpression2.prototype;
    _proto.evaluate = function evaluate(scope) {
      return this.eval_(this.ast_, scope);
    };
    _proto.numberOfNodesInAst_ = function numberOfNodesInAst_(ast) {
      var _this = this;
      if (this.isMacroInvocationNode_(ast)) {
        var macro = this.macros_[String(ast.value)];
        var nodes = macro.getExpressionSize();
        this.argumentsForInvocation_(ast).forEach(function(arg) {
          if (arg) {
            nodes += _this.numberOfNodesInAst_(arg) - 1;
          }
        });
        return nodes;
      } else {
        var _nodes = 1;
        if (ast.args) {
          ast.args.forEach(function(arg) {
            if (arg) {
              _nodes += _this.numberOfNodesInAst_(arg);
            }
          });
        }
        return _nodes;
      }
    };
    _proto.isMacroInvocationNode_ = function isMacroInvocationNode_(ast) {
      var isInvocationWithNoCaller = ast.type === AstNodeType.INVOCATION && !ast.args[0];
      if (isInvocationWithNoCaller) {
        var macroExistsWithValue = this.macros_[String(ast.value)] != null;
        return macroExistsWithValue;
      }
      return false;
    };
    _proto.argumentsForInvocation_ = function argumentsForInvocation_(ast) {
      var argsNode = ast.args.length === 2 && ast.args[1].type === AstNodeType.ARGS ? ast.args[1] : null;
      if (argsNode) {
        var args = argsNode.args;
        if (args.length === 0) {
          return [];
        } else if (args.length === 1 && args[0].type === AstNodeType.ARRAY) {
          var arrayNode = args[0];
          return arrayNode.args || [];
        }
      }
      return ast.args || [];
    };
    _proto.eval_ = function eval_(node, scope) {
      var _this2 = this;
      if (!node) {
        return null;
      }
      var args = node.args, type = node.type, value = node.value;
      if (type === AstNodeType.LITERAL && value !== void 0) {
        return value;
      }
      switch (type) {
        case AstNodeType.EXPRESSION:
          return this.eval_(args[0], scope);
        case AstNodeType.INVOCATION:
          var isBuiltInOrMacro = args[0] === void 0;
          var caller = this.eval_(args[0], scope);
          var params = this.eval_(args[1], scope);
          var method = String(value);
          var validFunction;
          var unsupportedError;
          if (isBuiltInOrMacro) {
            var macro = this.macros_[method];
            if (macro) {
              validFunction = function validFunction2() {
                return macro.evaluate(scope, Array.prototype.slice.call(arguments));
              };
            } else {
              validFunction = FUNCTION_ALLOWLIST[CUSTOM_FUNCTIONS][method];
            }
            if (!validFunction) {
              unsupportedError = method + " is not a supported function.";
            }
          } else {
            if (caller === null) {
              user().warn(TAG, "Cannot invoke method " + method + " on null; returning null.");
              return null;
            }
            var callerType = Object.prototype.toString.call(caller);
            var allowlist = FUNCTION_ALLOWLIST[callerType];
            if (allowlist) {
              var f = caller[method];
              if (f && f === allowlist[method]) {
                validFunction = f;
              } else if (this.isCustomInstanceFunction_(method)) {
                validFunction = allowlist[method];
              }
            }
            if (!validFunction) {
              unsupportedError = callerType + "." + method + " is not a supported function.";
            }
          }
          if (validFunction) {
            if (Array.isArray(params)) {
              if (this.containsInvalidArgument_(method, params)) {
                throw new Error("Unexpected argument type in " + method + "().");
              }
              return validFunction.apply(caller, params);
            }
          }
          throw new Error(unsupportedError);
        case AstNodeType.MEMBER_ACCESS:
          var target = this.eval_(args[0], scope);
          var member = this.eval_(args[1], scope);
          if (target === null || member === null) {
            return null;
          }
          var targetType = typeof target;
          if (targetType !== "string" && targetType !== "object") {
            return null;
          }
          var memberType = typeof member;
          if (memberType !== "string" && memberType !== "number") {
            return null;
          }
          if (hasOwn(target, String(member))) {
            return target[member];
          }
          return null;
        case AstNodeType.MEMBER:
          return value || this.eval_(args[0], scope);
        case AstNodeType.VARIABLE:
          var variable = value;
          if (hasOwn(scope, String(variable))) {
            return scope[variable];
          }
          return null;
        case AstNodeType.ARGS:
        case AstNodeType.ARRAY_LITERAL:
          return args.length > 0 ? this.eval_(args[0], scope) : [];
        case AstNodeType.ARRAY:
          return args.map(function(element) {
            return _this2.eval_(element, scope);
          });
        case AstNodeType.OBJECT_LITERAL:
          return args.length > 0 ? this.eval_(args[0], scope) : map();
        case AstNodeType.OBJECT:
          var object = map();
          args.forEach(function(keyValue) {
            var _this2$eval_ = _this2.eval_(keyValue, scope), k = _this2$eval_.k, v = _this2$eval_.v;
            object[k] = v;
          });
          return object;
        case AstNodeType.KEY_VALUE:
          return {
            k: this.eval_(args[0], scope),
            v: this.eval_(args[1], scope)
          };
        case AstNodeType.NOT:
          return !this.eval_(args[0], scope);
        case AstNodeType.UNARY_MINUS:
          return -Number(this.eval_(args[0], scope));
        case AstNodeType.UNARY_PLUS:
          return +Number(this.eval_(args[0], scope));
        case AstNodeType.PLUS:
          return this.eval_(args[0], scope) + this.eval_(args[1], scope);
        case AstNodeType.MINUS:
          return Number(this.eval_(args[0], scope)) - Number(this.eval_(args[1], scope));
        case AstNodeType.MULTIPLY:
          return Number(this.eval_(args[0], scope)) * Number(this.eval_(args[1], scope));
        case AstNodeType.DIVIDE:
          return Number(this.eval_(args[0], scope)) / Number(this.eval_(args[1], scope));
        case AstNodeType.MODULO:
          return Number(this.eval_(args[0], scope)) % Number(this.eval_(args[1], scope));
        case AstNodeType.LOGICAL_AND:
          return this.eval_(args[0], scope) && this.eval_(args[1], scope);
        case AstNodeType.LOGICAL_OR:
          return this.eval_(args[0], scope) || this.eval_(args[1], scope);
        case AstNodeType.LESS_OR_EQUAL:
          return this.eval_(args[0], scope) <= this.eval_(args[1], scope);
        case AstNodeType.LESS:
          return this.eval_(args[0], scope) < this.eval_(args[1], scope);
        case AstNodeType.GREATER_OR_EQUAL:
          return this.eval_(args[0], scope) >= this.eval_(args[1], scope);
        case AstNodeType.GREATER:
          return this.eval_(args[0], scope) > this.eval_(args[1], scope);
        case AstNodeType.NOT_EQUAL:
          return this.eval_(args[0], scope) != this.eval_(args[1], scope);
        case AstNodeType.EQUAL:
          return this.eval_(args[0], scope) == this.eval_(args[1], scope);
        case AstNodeType.TERNARY:
          return this.eval_(args[0], scope) ? this.eval_(args[1], scope) : this.eval_(args[2], scope);
        case AstNodeType.ARROW_FUNCTION:
          var functionScope = map(scope);
          return function() {
            for (var _len = arguments.length, values2 = new Array(_len), _key = 0; _key < _len; _key++) {
              values2[_key] = arguments[_key];
            }
            var names = _this2.eval_(args[0], scope);
            if (names) {
              names.forEach(function(name, i) {
                functionScope[name] = values2[i];
              });
            }
            return _this2.eval_(args[1], functionScope);
          };
        default:
          throw new Error("Unexpected AstNodeType: " + type + ".");
      }
    };
    _proto.isCustomInstanceFunction_ = function isCustomInstanceFunction_(method) {
      return method === "sort" || method === "splice";
    };
    _proto.containsInvalidArgument_ = function containsInvalidArgument_(method, params) {
      if (method == "keys" || method == "values" || method == "splice") {
        return false;
      }
      return this.containsObject_(params);
    };
    _proto.containsObject_ = function containsObject_(array) {
      for (var i = 0; i < array.length; i++) {
        if (isObject(array[i])) {
          return true;
        }
      }
      return false;
    };
    return BindExpression2;
  }();

  // extensions/amp-bind/0.1/bind-macro.js
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
  var BindMacro = /* @__PURE__ */ function() {
    function BindMacro2(data, referableMacros) {
      this.argumentNames_ = data.argumentNames || [];
      this.expression_ = new BindExpression(data.expressionString, referableMacros);
    }
    var _proto = BindMacro2.prototype;
    _proto.evaluate = function evaluate(scope, args) {
      var copy = _extends({}, scope);
      for (var i = 0; i < this.argumentNames_.length; i++) {
        copy[this.argumentNames_[i]] = args[i];
      }
      return this.expression_.evaluate(copy);
    };
    _proto.getExpressionSize = function getExpressionSize() {
      return this.expression_.expressionSize;
    };
    return BindMacro2;
  }();

  // src/core/assert/dev.js
  function devAssertDceCheck() {
    if (self.__AMP_ASSERTION_CHECK) {
      console.log("__devAssert_sentinel__");
    }
  }
  function devAssert2(shouldBeTruthy, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    if (isMinified()) {
      return shouldBeTruthy;
    }
    devAssertDceCheck();
    return assert("", shouldBeTruthy, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
  }

  // src/core/assert/user.js
  function userAssert2(shouldBeTruthy, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    return assert(USER_ERROR_SENTINEL, shouldBeTruthy, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
  }

  // src/core/dom/srcset.js
  var srcsetRegex = /(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;
  function parseSrcset(s) {
    var sources = [];
    var match;
    while (match = srcsetRegex.exec(s)) {
      var url = match[1];
      var width = void 0, dpr = void 0;
      if (match[2]) {
        var type = match[3].toLowerCase();
        if (type == "w") {
          width = parseInt(match[2], 10);
        } else if (type == "x") {
          dpr = parseFloat(match[2]);
        } else {
          continue;
        }
      } else {
        dpr = 1;
      }
      sources.push({
        url: url,
        width: width,
        dpr: dpr
      });
    }
    return new Srcset(sources);
  }
  var Srcset = /* @__PURE__ */ function() {
    function Srcset2(sources) {
      userAssert2(sources.length > 0, "Srcset must have at least one source");
      this.sources_ = sources;
      var hasWidth = false;
      var hasDpr = false;
      for (var i = 0; i < sources.length; i++) {
        var source = sources[i];
        hasWidth = hasWidth || !!source.width;
        hasDpr = hasDpr || !!source.dpr;
      }
      userAssert2(!!(hasWidth ^ hasDpr), "Srcset must have width or dpr sources, but not both");
      sources.sort(hasWidth ? sortByWidth : sortByDpr);
      this.widthBased_ = hasWidth;
    }
    var _proto = Srcset2.prototype;
    _proto.select = function select(width, dpr) {
      devAssert2(width, "width=%s", width);
      devAssert2(dpr, "dpr=%s", dpr);
      var index = 0;
      if (this.widthBased_) {
        index = this.selectByWidth_(width * dpr);
      } else {
        index = this.selectByDpr_(dpr);
      }
      return this.sources_[index].url;
    };
    _proto.selectByWidth_ = function selectByWidth_(width) {
      var sources = this.sources_;
      var minIndex = 0;
      var minScore = Infinity;
      var minWidth = Infinity;
      for (var i = 0; i < sources.length; i++) {
        var sWidth = sources[i].width;
        var score = Math.abs(sWidth - width);
        if (score <= minScore * 1.1 || width / minWidth > 1.2) {
          minIndex = i;
          minScore = score;
          minWidth = sWidth;
        } else {
          break;
        }
      }
      return minIndex;
    };
    _proto.selectByDpr_ = function selectByDpr_(dpr) {
      var sources = this.sources_;
      var minIndex = 0;
      var minScore = Infinity;
      for (var i = 0; i < sources.length; i++) {
        var score = Math.abs(sources[i].dpr - dpr);
        if (score <= minScore) {
          minIndex = i;
          minScore = score;
        } else {
          break;
        }
      }
      return minIndex;
    };
    _proto.getUrls = function getUrls() {
      return this.sources_.map(function(s) {
        return s.url;
      });
    };
    _proto.stringify = function stringify(opt_mapper) {
      var res = [];
      var sources = this.sources_;
      for (var i = 0; i < sources.length; i++) {
        var source = sources[i];
        var src = source.url;
        if (opt_mapper) {
          src = opt_mapper(src);
        }
        if (this.widthBased_) {
          src += " " + source.width + "w";
        } else {
          src += " " + source.dpr + "x";
        }
        res.push(src);
      }
      return res.join(", ");
    };
    return Srcset2;
  }();
  function sortByWidth(s1, s2) {
    userAssert2(s1.width != s2.width, "Duplicate width: %s", s1.width);
    return s1.width - s2.width;
  }
  function sortByDpr(s1, s2) {
    userAssert2(s1.dpr != s2.dpr, "Duplicate dpr: %s", s1.dpr);
    return s1.dpr - s2.dpr;
  }

  // extensions/amp-bind/0.1/bind-validator.js
  var TAG2 = "amp-bind";
  var GLOBAL_PROPERTY_RULES = {
    "class": {
      denylistedValueRegex: "(^|\\W)i-amphtml-"
    },
    "hidden": null,
    "text": null
  };
  var AMP_PROPERTY_RULES = {
    "width": null,
    "height": null
  };
  var ELEMENT_RULES = createElementRules_();
  var URL_PROPERTIES = {
    "src": true,
    "srcset": true,
    "href": true,
    "xlink:href": true
  };
  var BindValidator = /* @__PURE__ */ function() {
    function BindValidator2(allowUrlBindings) {
      this.allowUrlBindings_ = allowUrlBindings;
    }
    var _proto = BindValidator2.prototype;
    _proto.canBind = function canBind(tag, property) {
      return this.rulesForTagAndProperty_(tag, property) !== void 0;
    };
    _proto.isResultValid = function isResultValid(tag, property, value) {
      var rules = this.rulesForTagAndProperty_(tag, property);
      if (rules && rules.alternativeName) {
        rules = this.rulesForTagAndProperty_(tag, rules.alternativeName);
      }
      if (rules === void 0) {
        return false;
      }
      if (rules === null) {
        return true;
      }
      if (value && ownProperty(URL_PROPERTIES, property)) {
        var urls2;
        if (property === "srcset") {
          var srcset;
          try {
            srcset = parseSrcset(value);
          } catch (e) {
            user().error(TAG2, "Failed to parse srcset: ", e);
            return false;
          }
          urls2 = srcset.getUrls();
        } else {
          urls2 = [value];
        }
        for (var i = 0; i < urls2.length; i++) {
          if (!this.isUrlValid_(urls2[i], rules)) {
            return false;
          }
        }
      }
      var _rules = rules, denylistedValueRegex = _rules.denylistedValueRegex;
      if (value && denylistedValueRegex) {
        var re = new RegExp(denylistedValueRegex, "i");
        if (re.test(value)) {
          return false;
        }
      }
      return true;
    };
    _proto.isUrlValid_ = function isUrlValid_(url, rules) {
      if (url) {
        if (/__amp_source_origin/.test(url)) {
          return false;
        }
        var allowedProtocols = rules.allowedProtocols;
        if (allowedProtocols) {
          var re = /^([^:\/?#.]+):[\s\S]*$/;
          var match = re.exec(url);
          if (match !== null) {
            var protocol = match[1].toLowerCase().trim();
            if (!hasOwn(allowedProtocols, protocol)) {
              return false;
            }
          }
        }
      }
      return true;
    };
    _proto.rulesForTagAndProperty_ = function rulesForTagAndProperty_(tag, property) {
      if (property.startsWith("aria-")) {
        return null;
      }
      if (ownProperty(URL_PROPERTIES, property) && !this.allowUrlBindings_) {
        return void 0;
      }
      var globalRules = ownProperty(GLOBAL_PROPERTY_RULES, property);
      if (globalRules !== void 0) {
        return globalRules;
      }
      var ampPropertyRules = ownProperty(AMP_PROPERTY_RULES, property);
      if (tag.startsWith("AMP-") && ampPropertyRules !== void 0) {
        return ampPropertyRules;
      }
      var tagRules = ownProperty(ELEMENT_RULES, tag);
      if (tagRules) {
        return tagRules[property];
      }
      return void 0;
    };
    return BindValidator2;
  }();
  function createElementRules_() {
    var rules = {
      "AMP-AUDIO": {
        "album": null,
        "artist": null,
        "artwork": null,
        "controlsList": null,
        "loop": null,
        "src": {
          "allowedProtocols": {
            "https": true
          }
        },
        "title": null
      },
      "AMP-AUTOCOMPLETE": {
        "src": {
          "allowedProtocols": {
            "https": true
          }
        }
      },
      "AMP-BASE-CAROUSEL": {
        "advance-count": null,
        "auto-advance-count": null,
        "auto-advance-interval": null,
        "auto-advance-loops": null,
        "auto-advance": null,
        "horizontal": null,
        "initial-index": null,
        "loop": null,
        "mixed-length": null,
        "side-slide-count": null,
        "slide": null,
        "snap-align": null,
        "snap-by": null,
        "snap": null,
        "visible-count": null
      },
      "AMP-BRIGHTCOVE": {
        "data-account": null,
        "data-embed": null,
        "data-player": null,
        "data-player-id": null,
        "data-playlist-id": null,
        "data-video-id": null
      },
      "AMP-CAROUSEL": {
        "slide": null
      },
      "AMP-DATE-PICKER": {
        "max": null,
        "min": null,
        "src": {
          "allowedProtocols": {
            "https": true
          }
        }
      },
      "AMP-GOOGLE-DOCUMENT-EMBED": {
        "src": null,
        "title": null
      },
      "AMP-IFRAME": {
        "src": null,
        "title": null
      },
      "AMP-IMG": {
        "alt": null,
        "attribution": null,
        "src": {
          "allowedProtocols": {
            "data": true,
            "http": true,
            "https": true
          }
        },
        "srcset": {
          "alternativeName": "src"
        }
      },
      "AMP-LIGHTBOX": {
        "open": null
      },
      "AMP-LIST": {
        "src": {
          "allowedProtocols": {
            "https": true
          }
        },
        "state": null,
        "is-layout-container": null
      },
      "AMP-RENDER": {
        "src": {
          "allowedProtocols": {
            "https": true
          }
        }
      },
      "AMP-SELECTOR": {
        "disabled": null,
        "selected": null
      },
      "AMP-STATE": {
        "src": {
          "allowedProtocols": {
            "https": true
          }
        }
      },
      "AMP-TIMEAGO": {
        "datetime": null,
        "title": null
      },
      "AMP-TWITTER": {
        "data-tweetid": null
      },
      "AMP-VIDEO": {
        "album": null,
        "alt": null,
        "artist": null,
        "artwork": null,
        "attribution": null,
        "controls": null,
        "controlslist": null,
        "loop": null,
        "poster": null,
        "preload": null,
        "src": {
          "allowedProtocols": {
            "https": true
          }
        },
        "title": null
      },
      "AMP-YOUTUBE": {
        "data-videoid": null
      },
      "A": {
        "href": {
          "allowedProtocols": {
            "ftp": true,
            "geo": true,
            "http": true,
            "https": true,
            "mailto": true,
            "maps": true,
            "bip": true,
            "bbmi": true,
            "chrome": true,
            "itms-services": true,
            "facetime": true,
            "fb-me": true,
            "fb-messenger": true,
            "intent": true,
            "line": true,
            "skype": true,
            "sms": true,
            "snapchat": true,
            "tel": true,
            "tg": true,
            "threema": true,
            "twitter": true,
            "viber": true,
            "webcal": true,
            "web+mastodon": true,
            "wh": true,
            "whatsapp": true
          }
        }
      },
      "BUTTON": {
        "disabled": null,
        "type": null,
        "value": null
      },
      "DETAILS": {
        "open": null
      },
      "FIELDSET": {
        "disabled": null
      },
      "IMAGE": {
        "xlink:href": {
          "allowedProtocols": {
            "http": true,
            "https": true
          }
        }
      },
      "INPUT": {
        "accept": null,
        "accesskey": null,
        "autocomplete": null,
        "checked": null,
        "disabled": null,
        "height": null,
        "inputmode": null,
        "max": null,
        "maxlength": null,
        "min": null,
        "minlength": null,
        "multiple": null,
        "pattern": null,
        "placeholder": null,
        "readonly": null,
        "required": null,
        "selectiondirection": null,
        "size": null,
        "spellcheck": null,
        "step": null,
        "type": {
          denylistedValueRegex: "(^|\\s)(button|image|)(\\s|$)"
        },
        "value": null,
        "width": null
      },
      "OPTION": {
        "disabled": null,
        "label": null,
        "selected": null,
        "value": null
      },
      "OPTGROUP": {
        "disabled": null,
        "label": null
      },
      "SECTION": {
        "data-expand": null,
        "expanded": null
      },
      "SELECT": {
        "autofocus": null,
        "disabled": null,
        "multiple": null,
        "required": null,
        "size": null
      },
      "SOURCE": {
        "src": {
          "allowedProtocols": {
            "https": true
          }
        },
        "type": null
      },
      "TRACK": {
        "label": null,
        "src": {
          "allowedProtocols": {
            "https": true
          }
        },
        "srclang": null
      },
      "TEXTAREA": {
        "autocomplete": null,
        "autofocus": null,
        "cols": null,
        "disabled": null,
        "maxlength": null,
        "minlength": null,
        "pattern": null,
        "placeholder": null,
        "readonly": null,
        "required": null,
        "rows": null,
        "selectiondirection": null,
        "selectionend": null,
        "selectionstart": null,
        "spellcheck": null,
        "wrap": null,
        "defaulttext": null
      }
    };
    return rules;
  }

  // extensions/amp-bind/0.1/bind-evaluator.js
  var BindEvaluator = /* @__PURE__ */ function() {
    function BindEvaluator2(allowUrlProperties) {
      this.bindings_ = [];
      this.macros_ = Object.create(null);
      this.validator_ = new BindValidator(allowUrlProperties);
      this.expressions_ = Object.create(null);
    }
    var _proto = BindEvaluator2.prototype;
    _proto.addBindings = function addBindings(bindings) {
      var _this = this;
      var errors = Object.create(null);
      bindings.forEach(function(binding) {
        var parsed = _this.parse_(binding.expressionString);
        if (parsed.error) {
          errors[binding.expressionString] = parsed.error;
        } else {
          _this.bindings_.push(binding);
        }
      });
      return errors;
    };
    _proto.removeBindingsWithExpressionStrings = function removeBindingsWithExpressionStrings(expressionStrings) {
      var _this2 = this;
      var expressionsToRemove = Object.create(null);
      expressionStrings.forEach(function(expressionString) {
        delete _this2.expressions_[expressionString];
        expressionsToRemove[expressionString] = true;
      });
      remove(this.bindings_, function(binding) {
        return !!expressionsToRemove[binding.expressionString];
      });
    };
    _proto.addMacros = function addMacros(macros) {
      var _this3 = this;
      var errors = [];
      macros.forEach(function(macro, index) {
        var referableMacros = Object.assign(Object.create(null), _this3.macros_);
        try {
          _this3.macros_[macro.id] = new BindMacro(macro, referableMacros);
        } catch (e) {
          errors[index] = {
            message: e.message,
            stack: e.stack
          };
        }
      });
      return errors;
    };
    _proto.evaluateBindings = function evaluateBindings(scope) {
      var _this4 = this;
      var cache = Object.create(null);
      var errors = Object.create(null);
      this.setGlobals_(scope);
      this.bindings_.forEach(function(binding) {
        var expressionString = binding.expressionString;
        if (cache[expressionString] !== void 0 || errors[expressionString]) {
          return;
        }
        var expression = _this4.expressions_[expressionString];
        if (!expression) {
          var _error = new Error('Expression "' + expressionString + '"" is not cached.');
          errors[expressionString] = {
            message: _error.message,
            stack: _error.stack
          };
          return;
        }
        var _this4$evaluate_ = _this4.evaluate_(expression, scope), error = _this4$evaluate_.error, result = _this4$evaluate_.result;
        if (error) {
          errors[expressionString] = error;
          return;
        }
        cache[expressionString] = result;
      });
      this.bindings_.forEach(function(binding) {
        var expressionString = binding.expressionString, property = binding.property, tagName = binding.tagName;
        var result = cache[expressionString];
        if (result === void 0) {
          return;
        }
        if (result !== null && typeof result === "object") {
          return;
        }
        var resultString = _this4.stringValueOf_(property, result);
        if (!_this4.validator_.isResultValid(tagName, property, resultString)) {
          delete cache[expressionString];
          var error = new Error('"' + result + '" is not a valid result for [' + property + "].");
          errors[expressionString] = {
            message: error.message,
            stack: error.stack
          };
        }
      });
      return {
        results: cache,
        errors: errors
      };
    };
    _proto.evaluateExpression = function evaluateExpression(expressionString, scope) {
      var parsed = this.parse_(expressionString);
      if (!parsed.expression) {
        return {
          result: null,
          error: parsed.error
        };
      }
      this.setGlobals_(scope);
      var evaluated = this.evaluate_(parsed.expression, scope);
      if (!evaluated.result) {
        return {
          result: null,
          error: evaluated.error
        };
      }
      return {
        result: evaluated.result,
        error: null
      };
    };
    _proto.setGlobals_ = function setGlobals_(scope) {
      if (!("global" in scope)) {
        scope["global"] = scope;
      }
    };
    _proto.parse_ = function parse_(expressionString) {
      var expression = this.expressions_[expressionString];
      var error = null;
      if (!expression) {
        try {
          expression = new BindExpression(expressionString, this.macros_);
          this.expressions_[expressionString] = expression;
        } catch (e) {
          error = {
            message: e.message,
            stack: e.stack
          };
        }
      }
      return {
        expression: expression,
        error: error
      };
    };
    _proto.evaluate_ = function evaluate_(expression, scope) {
      var result = null;
      var error = null;
      try {
        result = expression.evaluate(scope);
      } catch (e) {
        error = {
          message: e.message,
          stack: e.stack
        };
      }
      return {
        result: result,
        error: error
      };
    };
    _proto.bindingsForTesting = function bindingsForTesting() {
      return this.bindings_;
    };
    _proto.expressionsForTesting = function expressionsForTesting() {
      return this.expressions_;
    };
    _proto.stringValueOf_ = function stringValueOf_(property, result) {
      if (result === null) {
        return null;
      }
      switch (property) {
        case "text":
          break;
        case "class":
          if (Array.isArray(result)) {
            return result.join(" ");
          }
          break;
        default:
          if (typeof result === "boolean") {
            return result ? "" : null;
          }
          break;
      }
      return String(result);
    };
    return BindEvaluator2;
  }();

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
  var TOGGLES_WINDOW_PROPERTY = "__AMP__EXPERIMENT_TOGGLES";
  function isCanary(win) {
    var _win$AMP_CONFIG;
    return !!((_win$AMP_CONFIG = win.AMP_CONFIG) != null && _win$AMP_CONFIG.canary);
  }
  function getBinaryType(win) {
    var _win$AMP_CONFIG2;
    return ((_win$AMP_CONFIG2 = win.AMP_CONFIG) == null ? void 0 : _win$AMP_CONFIG2.type) || "unknown";
  }
  function experimentTogglesOrNull(win) {
    return win[TOGGLES_WINDOW_PROPERTY] || null;
  }

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

  // src/utils/event-helper.js
  var LOAD_FAILURE_PREFIX = "Failed to load:";
  function isLoadErrorMessage(message) {
    return message.indexOf(LOAD_FAILURE_PREFIX) != -1;
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

  // src/style-installer.js
  var bodyMadeVisible = false;
  function makeBodyVisibleRecovery(doc) {
    devAssert(doc.defaultView, "Passed in document must have a defaultView");
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
  var urlAsLocation = function urlAsLocation2(url) {
    return typeof url == "string" ? parseUrlDeprecated(url) : url;
  };
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
  function isProxyOrigin(url) {
    return urls.cdnProxyRegex.test(urlAsLocation(url).origin);
  }

  // src/error-reporting.js
  var CANCELLED = "CANCELLED";
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
    var ampdocService = Services.ampdocServiceFor(win);
    if (!ampdocService.isSingleDoc()) {
      return Promise.resolve(false);
    }
    var ampdocSingle = ampdocService.getSingleDoc();
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

  // src/web-worker/web-worker.js
  initLogConstructor();
  setReportError(reportError);
  var TAG3 = "web-worker";
  var backoff_ = exponentialBackoff(1.5);
  function errorHandler_(event) {
    backoff_(function() {
      return report_(event.reason);
    });
  }
  var evaluators_ = [];
  self.addEventListener("unhandledrejection", errorHandler_);
  self.addEventListener("error", errorHandler_);
  self.addEventListener("message", function(event) {
    var messageEvent = event;
    var _messageEvent$data = messageEvent.data, args = _messageEvent$data.args, id = _messageEvent$data.id, method = _messageEvent$data.method, scope = _messageEvent$data.scope;
    var returnValue;
    if (method !== "bind.init" && !evaluators_[scope]) {
      dev().error(TAG3, "Missing evaluator for scope: %s", scope);
      evaluators_[scope] = new BindEvaluator(true);
    }
    var evaluator = evaluators_[scope];
    switch (method) {
      case "bind.init":
        if (evaluator) {
          dev().warn(TAG3, "Overwriting existing evaluator for scope:", scope);
        }
        var allowUrlProperties = args[0];
        evaluators_[scope] = new BindEvaluator(allowUrlProperties);
        returnValue = true;
        break;
      case "bind.addBindings":
        returnValue = evaluator.addBindings.apply(evaluator, args);
        break;
      case "bind.removeBindingsWithExpressionStrings":
        var removeBindings = evaluator.removeBindingsWithExpressionStrings;
        returnValue = removeBindings.apply(evaluator, args);
        break;
      case "bind.addMacros":
        returnValue = evaluator.addMacros.apply(evaluator, args);
        break;
      case "bind.evaluateBindings":
        returnValue = evaluator.evaluateBindings.apply(evaluator, args);
        break;
      case "bind.evaluateExpression":
        returnValue = evaluator.evaluateExpression.apply(evaluator, args);
        break;
      default:
        dev().error(TAG3, "Unrecognized method: %s", method);
    }
    var message = {
      method: method,
      returnValue: returnValue,
      id: id
    };
    self.postMessage(message);
  });
  function report_(e) {
    if (urls.localhostRegex.test(self.location.origin)) {
      return;
    }
    if (!(e instanceof Error)) {
      e = new Error(e);
    }
    var config = self.AMP_CONFIG || {};
    var url = urls.errorReporting + "?ww=1&v=" + encodeURIComponent(config.v) + "&m=" + encodeURIComponent(e.message) + "&ca=" + (config.canary ? 1 : 0) + "&s=" + encodeURIComponent(e.stack || "");
    fetch(url, {
      mode: "no-cors"
    }).catch(function(reason) {
      console.error(reason);
    });
  }
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
//# sourceMappingURL=ww.max.js.map
