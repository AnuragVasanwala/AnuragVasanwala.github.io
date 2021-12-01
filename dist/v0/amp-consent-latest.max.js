(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-consent",ev:"0.1",l:true,f:(function(AMP,_){
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
  function tryResolve(fn) {
    return new Promise(function(resolve) {
      resolve(fn());
    });
  }

  // src/core/constants/consent-state.js
  var CONSENT_POLICY_STATE = {
    SUFFICIENT: 1,
    INSUFFICIENT: 2,
    UNKNOWN_NOT_REQUIRED: 3,
    UNKNOWN: 4
  };
  var CONSENT_STRING_TYPE = {
    TCF_V1: 1,
    TCF_V2: 2,
    US_PRIVACY_STRING: 3
  };

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
  function removeItem(array, item) {
    var index = array.indexOf(item);
    if (index == -1) {
      return false;
    }
    array.splice(index, 1);
    return true;
  }

  // src/core/types/object/json.js
  function parseJson(json) {
    return JSON.parse(json);
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

  // src/core/mode/prod.js
  function isProd() {
    return false;
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
  function deepMerge(target, source, depth) {
    if (depth === void 0) {
      depth = 10;
    }
    var seen = [];
    var queue = [];
    queue.push({
      t: target,
      s: source,
      d: 0
    });
    while (queue.length > 0) {
      var _queue$shift = queue.shift(), d = _queue$shift.d, s = _queue$shift.s, t = _queue$shift.t;
      if (seen.includes(s)) {
        throw new Error("Source object has a circular reference.");
      }
      seen.push(s);
      if (t === s) {
        continue;
      }
      if (d > depth) {
        Object.assign(t, s);
        continue;
      }
      for (var _i = 0, _Object$keys = Object.keys(s); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        var newValue = s[key];
        if (hasOwn(t, key)) {
          var oldValue = t[key];
          if (isObject(newValue) && isObject(oldValue)) {
            queue.push({
              t: oldValue,
              s: newValue,
              d: d + 1
            });
            continue;
          }
        }
        t[key] = newValue;
      }
    }
    return target;
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

  // extensions/amp-consent/0.1/consent-info.js
  var TAG = "amp-consent";
  var STORAGE_KEY = {
    STATE: "s",
    STRING: "r",
    IS_DIRTY: "d",
    METADATA: "m",
    PURPOSE_CONSENTS: "pc"
  };
  var METADATA_STORAGE_KEY = {
    CONSENT_STRING_TYPE: "cst",
    ADDITIONAL_CONSENT: "ac",
    GDPR_APPLIES: "ga",
    PURPOSE_ONE: "po"
  };
  var PURPOSE_CONSENT_STATE = {
    ACCEPTED: 1,
    REJECTED: 2
  };
  var CONSENT_ITEM_STATE = {
    ACCEPTED: 1,
    REJECTED: 2,
    DISMISSED: 3,
    NOT_REQUIRED: 4,
    UNKNOWN: 5
  };
  var TCF_POST_MESSAGE_API_COMMANDS = {
    GET_TC_DATA: "getTCData",
    PING: "ping",
    ADD_EVENT_LISTENER: "addEventListener",
    REMOVE_EVENT_LISTENER: "removeEventListener"
  };
  function getStoredConsentInfo(value) {
    if (value === void 0) {
      return constructConsentInfo(CONSENT_ITEM_STATE.UNKNOWN);
    }
    if (typeof value === "boolean") {
      return getLegacyStoredConsentInfo(value);
    }
    if (!isObject(value)) {
      throw dev().createError("Invalid stored consent value");
    }
    var consentState = convertValueToState(value[STORAGE_KEY.STATE]);
    return constructConsentInfo(consentState, value[STORAGE_KEY.STRING], convertStorageMetadata(value[STORAGE_KEY.METADATA]), value[STORAGE_KEY.PURPOSE_CONSENTS], value[STORAGE_KEY.IS_DIRTY] && value[STORAGE_KEY.IS_DIRTY] === 1);
  }
  function hasDirtyBit(consentInfo) {
    if (!consentInfo) {
      return false;
    }
    if (hasOwn(consentInfo, "isDirty") && consentInfo["isDirty"] == true) {
      return true;
    }
    return false;
  }
  function recalculateConsentStateValue(newState, previousState) {
    if (!isEnumValue(CONSENT_ITEM_STATE, newState)) {
      newState = CONSENT_ITEM_STATE.UNKNOWN;
    }
    if (newState == CONSENT_ITEM_STATE.DISMISSED) {
      return previousState || CONSENT_ITEM_STATE.UNKNOWN;
    }
    if (newState == CONSENT_ITEM_STATE.NOT_REQUIRED) {
      if (previousState && previousState != CONSENT_ITEM_STATE.UNKNOWN) {
        return previousState;
      }
    }
    return newState;
  }
  function composeStoreValue(consentInfo) {
    var obj = map();
    var consentState = consentInfo["consentState"];
    if (consentState == CONSENT_ITEM_STATE.ACCEPTED) {
      obj[STORAGE_KEY.STATE] = 1;
    } else if (consentState == CONSENT_ITEM_STATE.REJECTED) {
      obj[STORAGE_KEY.STATE] = 0;
    } else {
      return null;
    }
    if (consentInfo["consentString"]) {
      obj[STORAGE_KEY.STRING] = consentInfo["consentString"];
    }
    if (consentInfo["isDirty"] === true) {
      obj[STORAGE_KEY.IS_DIRTY] = 1;
    }
    if (consentInfo["consentMetadata"]) {
      obj[STORAGE_KEY.METADATA] = composeMetadataStoreValue(consentInfo["consentMetadata"]);
    }
    if (consentInfo["purposeConsents"]) {
      obj[STORAGE_KEY.PURPOSE_CONSENTS] = consentInfo["purposeConsents"];
    }
    if (Object.keys(obj) == 0) {
      return null;
    }
    return obj;
  }
  function calculateLegacyStateValue(consentState) {
    if (consentState == CONSENT_ITEM_STATE.ACCEPTED) {
      return true;
    }
    if (consentState == CONSENT_ITEM_STATE.REJECTED) {
      return false;
    }
    return null;
  }
  function isConsentInfoStoredValueSame(infoA, infoB, opt_isDirty) {
    if (!infoA && !infoB) {
      return true;
    }
    if (infoA && infoB) {
      var stateEqual = calculateLegacyStateValue(infoA["consentState"]) === calculateLegacyStateValue(infoB["consentState"]);
      var stringEqual = (infoA["consentString"] || "") === (infoB["consentString"] || "");
      var isDirtyEqual;
      if (opt_isDirty) {
        isDirtyEqual = !!infoA["isDirty"] === !!opt_isDirty;
      } else {
        isDirtyEqual = !!infoA["isDirty"] === !!infoB["isDirty"];
      }
      var metadataEqual = deepEquals(infoA["consentMetadata"], infoB["consentMetadata"]);
      var purposeConsentsEqual = deepEquals(infoA["purposeConsents"], infoB["purposeConsents"]);
      return stateEqual && stringEqual && metadataEqual && purposeConsentsEqual && isDirtyEqual;
    }
    return false;
  }
  function getLegacyStoredConsentInfo(value) {
    var state = convertValueToState(value);
    return constructConsentInfo(state);
  }
  function constructConsentInfo(consentState, opt_consentString, opt_consentMetadata, opt_purposeConsents, opt_isDirty) {
    return {
      "consentState": consentState,
      "consentString": opt_consentString,
      "consentMetadata": opt_consentMetadata,
      "purposeConsents": opt_purposeConsents,
      "isDirty": opt_isDirty
    };
  }
  function constructMetadata(opt_consentStringType, opt_additionalConsent, opt_gdprApplies, opt_purposeOne) {
    return {
      "consentStringType": opt_consentStringType,
      "additionalConsent": opt_additionalConsent,
      "gdprApplies": opt_gdprApplies,
      "purposeOne": opt_purposeOne
    };
  }
  function convertValueToState(value) {
    if (value === true || value === 1) {
      return CONSENT_ITEM_STATE.ACCEPTED;
    } else if (value === false || value === 0) {
      return CONSENT_ITEM_STATE.REJECTED;
    }
    return CONSENT_ITEM_STATE.UNKNOWN;
  }
  function convertEnumValueToState(value) {
    if (value === "accepted") {
      return CONSENT_ITEM_STATE.ACCEPTED;
    } else if (value === "rejected") {
      return CONSENT_ITEM_STATE.REJECTED;
    } else if (value === "unknown") {
      return CONSENT_ITEM_STATE.UNKNOWN;
    }
    return null;
  }
  function hasStoredValue(info) {
    if (info["consentString"]) {
      return true;
    }
    return info["consentState"] === CONSENT_ITEM_STATE.ACCEPTED || info["consentState"] === CONSENT_ITEM_STATE.REJECTED;
  }
  function getConsentStateValue(enumState) {
    if (enumState === CONSENT_ITEM_STATE.ACCEPTED) {
      return "accepted";
    }
    if (enumState === CONSENT_ITEM_STATE.REJECTED) {
      return "rejected";
    }
    return "unknown";
  }
  function composeMetadataStoreValue(consentInfoMetadata) {
    var storageMetadata = map();
    if (consentInfoMetadata["consentStringType"]) {
      storageMetadata[METADATA_STORAGE_KEY.CONSENT_STRING_TYPE] = consentInfoMetadata["consentStringType"];
    }
    if (consentInfoMetadata["additionalConsent"]) {
      storageMetadata[METADATA_STORAGE_KEY.ADDITIONAL_CONSENT] = consentInfoMetadata["additionalConsent"];
    }
    if (consentInfoMetadata["gdprApplies"] != void 0) {
      storageMetadata[METADATA_STORAGE_KEY.GDPR_APPLIES] = consentInfoMetadata["gdprApplies"];
    }
    if (consentInfoMetadata["purposeOne"] != void 0) {
      storageMetadata[METADATA_STORAGE_KEY.PURPOSE_ONE] = consentInfoMetadata["purposeOne"];
    }
    return storageMetadata;
  }
  function convertStorageMetadata(storageMetadata) {
    if (!storageMetadata) {
      return constructMetadata();
    }
    return constructMetadata(storageMetadata[METADATA_STORAGE_KEY.CONSENT_STRING_TYPE], storageMetadata[METADATA_STORAGE_KEY.ADDITIONAL_CONSENT], storageMetadata[METADATA_STORAGE_KEY.GDPR_APPLIES], storageMetadata[METADATA_STORAGE_KEY.PURPOSE_ONE]);
  }
  function assertMetadataValues(metadata) {
    var consentStringType = metadata["consentStringType"];
    var additionalConsent = metadata["additionalConsent"];
    var gdprApplies = metadata["gdprApplies"];
    var purposeOne = metadata["purposeOne"];
    var errorFields = [];
    if (consentStringType && !isEnumValue(CONSENT_STRING_TYPE, consentStringType)) {
      delete metadata["consentStringType"];
      errorFields.push("consentStringType");
    }
    if (additionalConsent && typeof additionalConsent != "string") {
      delete metadata["additionalConsent"];
      errorFields.push("additionalConsent");
    }
    if (gdprApplies && typeof gdprApplies != "boolean") {
      delete metadata["gdprApplies"];
      errorFields.push("gdprApplies");
    }
    if (purposeOne && typeof purposeOne != "boolean") {
      delete metadata["purposeOne"];
      errorFields.push("purposeOne");
    }
    for (var i = 0; i < errorFields.length; i++) {
      user().error(TAG, 'Consent metadata value "%s" is invalid.', errorFields[i]);
    }
  }

  // build/amp-consent-0.1.css.js
  var CSS2 = "amp-consent{position:fixed!important;bottom:0;left:0;overflow:hidden!important;background:hsla(0,0%,100%,0.7);width:100%;z-index:2147483645}amp-consent[i-amphtml-notbuilt]>*{display:none!important}amp-consent>*{max-height:100vh!important}amp-consent.amp-active{visibility:visible}amp-consent.amp-hidden{visibility:hidden}@keyframes amp-consent-ui-placeholder-spin{0%{transform:rotate(0deg)}to{transform:rotate(360deg)}}.i-amphtml-consent-ui-placeholder{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.i-amphtml-consent-ui-placeholder>svg{width:30px;height:30px;fill:none;stroke-width:1.5px;transform-origin:50% 50%;animation:amp-consent-ui-placeholder-spin 1000ms linear infinite}.i-amphtml-consent-alertdialog{overflow:hidden;position:absolute;height:1px;width:1px;top:auto;left:auto}.i-amphtml-consent-ui-fill{position:absolute;top:0;left:0;width:100%}iframe.i-amphtml-consent-ui-fill{border:none}amp-consent.i-amphtml-consent-ui-iframe-active{width:100%!important;height:100%!important;padding:0px!important;margin:0px!important;overflow:auto!important;transform:translate3d(0px,100vh,0px)!important}amp-consent.i-amphtml-consent-ui-iframe-active.i-amphtml-consent-ui-modal{box-sizing:border-box;top:0;right:0;animation:i-amphtml-modal-appear 0.5s;animation-fill-mode:forwards;height:var(--i-amphtml-modal-height)!important;width:90vw!important;margin:auto!important;max-width:760px}amp-consent.i-amphtml-consent-ui-border-enabled{border-top-left-radius:8px!important;border-top-right-radius:8px!important;box-shadow:0 0 5px 0 rgba(0,0,0,0.2)!important}amp-consent.i-amphtml-consent-ui-modal.i-amphtml-consent-ui-border-enabled{border-radius:8px!important;box-shadow:0 0 5px 0 rgba(0,0,0,0.2)!important}amp-consent.i-amphtml-consent-ui-iframe-active.i-amphtml-consent-ui-iframe-transform{transform:translate3d(0px,calc(100% - var(--i-amphtml-modal-height)),0px)!important}amp-consent.i-amphtml-consent-ui-iframe-active.i-amphtml-consent-ui-in{transition:transform 0.5s ease-out!important}amp-consent.i-amphtml-consent-ui-iframe-active.i-amphtml-consent-ui-in.i-amphtml-consent-ui-iframe-fullscreen{top:0px!important;transform:translateZ(0px)!important;border-top-left-radius:0px!important;border-top-right-radius:0px!important}amp-consent.i-amphtml-consent-ui-in.i-amphtml-consent-ui-iframe-fullscreen>.i-amphtml-consent-ui-fill{height:100%!important}@keyframes i-amphtml-consent-ui-mask{0%{opacity:0.0}to{opacity:0.2}}@keyframes i-amphtml-modal-appear{0%{transform:translateY(100vh);opacity:0}to{transform:translate(0);opacity:1}}.i-amphtml-consent-ui-mask{position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;opacity:0.2;animation:i-amphtml-consent-ui-mask 0.25s ease-in;background-image:none!important;background-color:#000;z-index:2147483644}\n/*# sourceURL=/extensions/amp-consent/0.1/amp-consent.css*/";

  // extensions/amp-consent/0.1/cmps.js
  var CMP_CONFIG = {};
  if (getMode().test || getMode().localDev) {
    CMP_CONFIG["_ping_"] = {
      "consentInstanceId": "_ping_",
      "checkConsentHref": "/get-consent-v1?cid=CLIENT_ID&pid=PAGE_VIEW_ID",
      "promptUISrc": "/examples/amp-consent/diy-consent.html?cid=CLIENT_ID&pid=PAGE_VIEW_ID&clientconfig=CONSENT_INFO(clientConfig)&cpid=CONSENT_PAGE_VIEW_ID_64"
    };
  }
  CMP_CONFIG["appconsent"] = {
    "consentInstanceId": "appconsent",
    "checkConsentHref": "https://collector.appconsent.io/amp/check-consent",
    "promptUISrc": "https://cdn.appconsent.io/loader.html"
  };
  CMP_CONFIG["ConsentManager"] = {
    "consentInstanceId": "ConsentManager",
    "checkConsentHref": "https://consentmanager.mgr.consensu.org/delivery/ampcheck.php",
    "promptUISrc": "https://consentmanager.mgr.consensu.org/delivery/ampui.php"
  };
  CMP_CONFIG["didomi"] = {
    "consentInstanceId": "didomi",
    "checkConsentHref": "https://api.privacy-center.org/amp/check-consent",
    "promptUISrc": "https://sdk-amp.privacy-center.org/loader.html"
  };
  CMP_CONFIG["iubenda"] = {
    "consentInstanceId": "iubenda",
    "checkConsentHref": "https://amp.iubenda.com/checkConsent",
    "promptUISrc": "https://www.iubenda.com/en/help/22135-cookie-solution-amp"
  };
  CMP_CONFIG["sirdata"] = {
    "consentInstanceId": "sirdata",
    "checkConsentHref": "https://sddan.mgr.consensu.org/api/v1/public/amp/check",
    "promptUISrc": "https://ui.sddan.mgr.consensu.org/amp.html"
  };
  CMP_CONFIG["Marfeel"] = {
    "consentInstanceId": "Marfeel",
    "checkConsentHref": "https://live.mrf.io/cmp/marfeel/amp/check-consent",
    "promptUISrc": "https://live.mrf.io/cmp/marfeel/amp/index.html"
  };
  CMP_CONFIG["Ogury"] = {
    "consentInstanceId": "Ogury",
    "checkConsentHref": "https://api.ogury.mgr.consensu.org/v1/check-for-consent",
    "promptUISrc": "https://www.ogury.mgr.consensu.org/amp.html"
  };
  CMP_CONFIG["onetrust"] = {
    "consentInstanceId": "onetrust",
    "checkConsentHref": "https://cdn.cookielaw.org/amp/consent/check",
    "promptUISrc": " https://amp.onetrust.mgr.consensu.org/"
  };
  CMP_CONFIG["opencmp"] = {
    "consentInstanceId": "opencmp",
    "checkConsentHref": "https://amp.opencmp.net/consent/check",
    "promptUISrc": "https://cdn.opencmp.net/tcf-v2/amp/cmp.html"
  };
  CMP_CONFIG["pubtech"] = {
    "consentInstanceId": "pubtech",
    "checkConsentHref": "https://amp.pubtech.it/cmp-amp-check-consent",
    "promptUISrc": "https://cdn.pubtech.ai/amp/index.html"
  };
  CMP_CONFIG["quantcast"] = {
    "consentInstanceId": "quantcast",
    "checkConsentHref": "https://apis.quantcast.mgr.consensu.org/amp/check-consent",
    "promptUISrc": "https://quantcast.mgr.consensu.org/tcfv2/amp.html"
  };
  CMP_CONFIG["SourcePoint"] = {
    "consentInstanceId": "SourcePoint",
    "checkConsentHref": "https://sourcepoint.mgr.consensu.org/consent/v2/amp",
    "promptUISrc": "https://amp.pm.sourcepoint.mgr.consensu.org/"
  };
  CMP_CONFIG["UniConsent"] = {
    "consentInstanceId": "UniConsent",
    "checkConsentHref": "https://edge.uniconsent.com/amp/check-consent",
    "promptUISrc": "https://cmp.uniconsent.com/amp/index.html"
  };
  CMP_CONFIG["Usercentrics"] = {
    "consentInstanceId": "Usercentrics",
    "checkConsentHref": "https://consents.usercentrics.eu/amp/checkConsent",
    "promptUISrc": "https://amp.usercentrics.eu/amp.html"
  };
  CMP_CONFIG["LiveRamp"] = {
    "consentInstanceId": "LiveRamp",
    "checkConsentHref": "https://api.privacymanager.io/amp/check-consent",
    "promptUISrc": "https://amp-consent-tool.privacymanager.io/1/index.html"
  };
  CMP_CONFIG["googlefc"] = {
    "consentInstanceId": "googlefc",
    "checkConsentHref": "https://fundingchoicesmessages.google.com/amp/consent/check?pvid=PAGE_VIEW_ID_64&anonid=CONSENT_PAGE_VIEW_ID_64&href=SOURCE_URL",
    "promptUISrc": "https://fundingchoicesmessages.google.com/amp/consent/message?pvid=PAGE_VIEW_ID_64&anonid=CONSENT_PAGE_VIEW_ID_64&href=SOURCE_URL&clientConfig=CONSENT_INFO(clientConfig)",
    "xssiPrefix": ")]}'",
    "uiConfig": {
      "overlay": true
    },
    "clearDirtyBitOnResponse_dontUseThisItMightBeRemoved": true
  };

  // extensions/amp-geo/0.1/amp-geo-in-group.js
  var GEO_IN_GROUP = {
    NOT_DEFINED: 1,
    IN: 2,
    NOT_IN: 3
  };

  // src/core/window/index.js
  function toWin(winOrNull) {
    return winOrNull;
  }
  function getWin(node) {
    return toWin((node.ownerDocument || node).defaultView);
  }

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
  function devAssertElement(shouldBeElement, opt_message) {
    if (isMinified()) {
      return shouldBeElement;
    }
    devAssertDceCheck();
    return assertElement(devAssert2, shouldBeElement, opt_message);
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
  function assertIsName(name) {
    devAssert2(/^[\w-]+$/.test(name), 'Expected "' + name + '" to be a CSS name composed of alphanumerics and hyphens.');
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
  function childElements(parent, callback) {
    var children = [];
    for (var child = parent.firstElementChild; child; child = child.nextElementSibling) {
      if (callback(child)) {
        children.push(child);
      }
    }
    return children;
  }
  function childElementByTag(parent, tagName) {
    assertIsName(tagName);
    return scopedQuerySelector(parent, "> " + tagName);
  }
  function childElementsByTag(parent, tagName) {
    assertIsName(tagName);
    return scopedQuerySelectorAll(parent, "> " + tagName);
  }
  function elementByTag(element, tagName) {
    assertIsName(tagName);
    return element.querySelector(tagName);
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
  function removeElement(element) {
    var _element$parentElemen;
    (_element$parentElemen = element.parentElement) == null ? void 0 : _element$parentElemen.removeChild(element);
  }
  function insertAtStart(root, element) {
    root.insertBefore(element, root.firstChild);
  }
  function isJsonScriptTag(element) {
    var _element$getAttribute;
    return element.tagName == "SCRIPT" && ((_element$getAttribute = element.getAttribute("type")) == null ? void 0 : _element$getAttribute.toUpperCase()) == "APPLICATION/JSON";
  }
  function tryFocus(element) {
    try {
      element.focus();
    } catch (e) {
    }
  }
  function getChildJsonConfig(element) {
    var scripts = childElementsByTag(element, "script");
    var length = scripts.length;
    if (length !== 1) {
      throw new Error("Found " + length + " <script> children. Expected 1.");
    }
    var script = scripts[0];
    if (!isJsonScriptTag(script)) {
      throw new Error('<script> child must have type="application/json"');
    }
    try {
      return parseJson(script.textContent);
    } catch (_unused) {
      throw new Error("Failed to parse <script> contents. Is it valid JSON?");
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
  function isSecureUrlDeprecated(url) {
    url = urlAsLocation(url);
    return url.protocol == "https:" || url.hostname == "localhost" || url.hostname == "127.0.0.1" || endsWith(url.hostname, ".localhost");
  }
  function assertHttpsUrl(urlString, elementContext, sourceName) {
    if (sourceName === void 0) {
      sourceName = "source";
    }
    userAssert(urlString != null, "%s %s must be available", elementContext, sourceName);
    userAssert(isSecureUrlDeprecated(urlString) || /^\/\//.test(urlString), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', elementContext, sourceName, urlString);
    return urlString;
  }
  function isProxyOrigin(url) {
    return urls.cdnProxyRegex.test(urlAsLocation(url).origin);
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
    userAssert(SERVING_TYPE_PREFIX.has(prefix), "Unknown path prefix in url %s", url.href);
    var domainOrHttpsSignal = path[2];
    var origin = domainOrHttpsSignal == "s" ? "https://" + decodeURIComponent(path[3]) : "http://" + decodeURIComponent(domainOrHttpsSignal);
    userAssert(origin.indexOf(".") > 0, "Expected a . in origin %s", origin);
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

  // src/core/types/string/bytes.js
  function utf8Decode(bytes) {
    if (typeof TextDecoder !== "undefined") {
      return new TextDecoder("utf-8").decode(bytes);
    }
    var asciiString = bytesToString(new Uint8Array(bytes.buffer || bytes));
    return decodeURIComponent(escape(asciiString));
  }
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
      devAssert2(charCode <= 255, "Characters must be in range [0,255]");
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

  // src/core/types/string/base64.js
  var base64UrlDecodeSubs = {
    "-": "+",
    "_": "/",
    ".": "="
  };
  var base64UrlEncodeSubs = {
    "+": "-",
    "/": "_",
    "=": "."
  };
  function base64UrlDecodeToBytes(str) {
    var encoded = atob(str.replace(/[-_.]/g, function(ch) {
      return base64UrlDecodeSubs[ch];
    }));
    return stringToBytes(encoded);
  }
  function base64UrlEncodeFromBytes(bytes) {
    var str = bytesToString(bytes);
    return btoa(str).replace(/[+/=]/g, function(ch) {
      return base64UrlEncodeSubs[ch];
    });
  }
  function base64UrlDecodeFromString(str) {
    var bytes = base64UrlDecodeToBytes(str);
    return utf8Decode(bytes);
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

  // src/cookies.js
  var TEST_COOKIE_NAME = "-test-amp-cookie-tmp";
  function getCookie(win, name) {
    var cookieString = tryGetDocumentCookie_(win);
    if (!cookieString) {
      return null;
    }
    var cookies = cookieString.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      var eq = cookie.indexOf("=");
      if (eq == -1) {
        continue;
      }
      if (tryDecodeUriComponent(cookie.substring(0, eq).trim()) == name) {
        var value = cookie.substring(eq + 1).trim();
        return tryDecodeUriComponent(value, value);
      }
    }
    return null;
  }
  function tryGetDocumentCookie_(win) {
    try {
      return win.document.cookie;
    } catch (e) {
      return "";
    }
  }
  function setCookie(win, name, value, expirationTime, options) {
    if (options === void 0) {
      options = {};
    }
    checkOriginForSettingCookie(win, options, name);
    var domain = void 0;
    if (options.domain) {
      domain = options.domain;
    } else if (options.highestAvailableDomain) {
      domain = getHighestAvailableDomain(win);
    }
    trySetCookie(win, name, value, expirationTime, domain, options.sameSite, options.secure);
  }
  function getHighestAvailableDomain(win) {
    var metaTag = win.document.head && win.document.head.querySelector("meta[name='amp-cookie-scope']");
    if (metaTag) {
      var cookieScope = metaTag.getAttribute("content") || "";
      var sourceOrigin = getSourceOrigin(win.location.href);
      if (endsWith(sourceOrigin, "." + cookieScope)) {
        return cookieScope;
      } else {
        return sourceOrigin.split("://")[1];
      }
    }
    if (!isProxyOrigin(win.location.href)) {
      var parts = win.location.hostname.split(".");
      var domain = parts[parts.length - 1];
      var testCookieName = getTempCookieName(win);
      for (var i = parts.length - 2; i >= 0; i--) {
        domain = parts[i] + "." + domain;
        trySetCookie(win, testCookieName, "delete", Date.now() + 1e3, domain);
        if (getCookie(win, testCookieName) == "delete") {
          trySetCookie(win, testCookieName, "delete", Date.now() - 1e3, domain);
          return domain;
        }
      }
    }
    return null;
  }
  function trySetCookie(win, name, value, expirationTime, domain, sameSite, secure) {
    if (domain == "ampproject.org") {
      value = "delete";
      expirationTime = 0;
    }
    var cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; path=/" + (domain ? "; domain=" + domain : "") + "; expires=" + new Date(expirationTime).toUTCString() + getSameSiteString(win, sameSite) + (secure ? "; Secure" : "");
    try {
      win.document.cookie = cookie;
    } catch (ignore) {
    }
  }
  function getSameSiteString(win, sameSite) {
    if (!sameSite) {
      return "";
    }
    return "; SameSite=" + sameSite;
  }
  function checkOriginForSettingCookie(win, options, name) {
    if (options.allowOnProxyOrigin) {
      userAssert(!options.highestAvailableDomain, "Could not support highestAvailable Domain on proxy origin, specify domain explicitly");
      return;
    }
    userAssert(!isProxyOrigin(win.location.href), "Should never attempt to set cookie on proxy origin: " + name);
    var current = parseUrlDeprecated(win.location.href).hostname.toLowerCase();
    var proxy = parseUrlDeprecated(urls.cdn).hostname.toLowerCase();
    userAssert(!(current == proxy || endsWith(current, "." + proxy)), "Should never attempt to set cookie on proxy origin. (in depth check): " + name);
  }
  function getTempCookieName(win) {
    var testCookieName = TEST_COOKIE_NAME;
    var counter = 0;
    while (getCookie(win, testCookieName)) {
      testCookieName = TEST_COOKIE_NAME + counter;
    }
    return testCookieName;
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

  // extensions/amp-consent/0.1/consent-state-manager.js
  var TAG2 = "CONSENT-STATE-MANAGER";
  function getConsentStateManager(element) {
    return getServicePromiseForDoc(element, "consentStateManager");
  }
  var ConsentStateManager = /* @__PURE__ */ function() {
    function ConsentStateManager2(ampdoc2) {
      var _this = this;
      this.ampdoc_ = ampdoc2;
      this.instanceId_ = null;
      this.instance_ = null;
      this.consentChangeHandler_ = null;
      this.consentReadyPromise_ = null;
      this.consentReadyResolver_ = null;
      this.purposeConsents_ = void 0;
      var allPurposeConsentsDeferred = new Deferred();
      this.hasAllPurposeConsentsResolver_ = allPurposeConsentsDeferred.resolve;
      this.hasAllPurposeConsentsPromise_ = allPurposeConsentsDeferred.promise;
      this.consentPageViewId64 = once(function() {
        return getRandomString64(_this.ampdoc_.win);
      });
    }
    var _proto = ConsentStateManager2.prototype;
    _proto.registerConsentInstance = function registerConsentInstance(instanceId, config) {
      if (this.instance_) {
        dev().error(TAG2, "Cannot register consent instance %s, instance %s has already been registered.", instanceId, this.instanceId_);
        return;
      }
      this.instanceId_ = instanceId;
      this.instance_ = new ConsentInstance(this.ampdoc_, instanceId, config);
      if (this.consentReadyResolver_) {
        this.consentReadyResolver_();
        this.consentReadyResolver_ = null;
      }
    };
    _proto.updateConsentInstanceState = function updateConsentInstanceState(state, consentStr, opt_consentMetadata) {
      if (!this.instance_) {
        dev().error(TAG2, "instance not registered");
        return;
      }
      this.instance_.update(state, consentStr, this.purposeConsents_, opt_consentMetadata, false);
      if (this.consentChangeHandler_) {
        this.consentChangeHandler_(constructConsentInfo(state, consentStr, opt_consentMetadata, this.purposeConsents_));
        this.hasAllPurposeConsents();
      }
    };
    _proto.updateConsentInstancePurposes = function updateConsentInstancePurposes(purposeMap, defaultsOnly) {
      var _this2 = this;
      if (defaultsOnly === void 0) {
        defaultsOnly = false;
      }
      if (!this.purposeConsents_) {
        this.purposeConsents_ = {};
      }
      var purposes = Object.keys(purposeMap);
      purposes.forEach(function(purpose) {
        if (defaultsOnly && hasOwn(_this2.purposeConsents_, purpose)) {
          return;
        }
        var value = !!purposeMap[purpose] ? PURPOSE_CONSENT_STATE.ACCEPTED : PURPOSE_CONSENT_STATE.REJECTED;
        _this2.purposeConsents_[purpose] = value;
      });
    };
    _proto.getLastConsentInstanceInfo = function getLastConsentInstanceInfo() {
      devAssert(this.instance_, "%s: cannot find the instance", TAG2);
      return this.instance_.get();
    };
    _proto.getConsentInstanceInfo = function getConsentInstanceInfo() {
      devAssert(this.instance_, "%s: cannot find the instance", TAG2);
      return this.instance_.get().then(function(info) {
        if (hasDirtyBit(info)) {
          return constructConsentInfo(CONSENT_ITEM_STATE.UNKNOWN);
        }
        return info;
      });
    };
    _proto.onConsentStateChange = function onConsentStateChange(handler) {
      devAssert(this.instance_, "%s: cannot find the instance", TAG2);
      devAssert(!this.consentChangeHandler_, "%s: Duplicate consent change handler, will be ignored", TAG2);
      this.consentChangeHandler_ = handler;
      this.getConsentInstanceInfo().then(function(info) {
        handler(info);
      });
    };
    _proto.setConsentInstanceSharedData = function setConsentInstanceSharedData(sharedDataPromise) {
      devAssert(this.instance_, "%s: cannot find the instance", TAG2);
      this.instance_.sharedDataPromise = sharedDataPromise;
    };
    _proto.hasAllPurposeConsents = function hasAllPurposeConsents() {
      this.hasAllPurposeConsentsResolver_();
    };
    _proto.whenHasAllPurposeConsents = function whenHasAllPurposeConsents() {
      return this.hasAllPurposeConsentsPromise_;
    };
    _proto.setDirtyBit = function setDirtyBit(dirty) {
      if (dirty === void 0) {
        dirty = true;
      }
      return this.instance_.setDirtyBit(dirty);
    };
    _proto.getConsentInstanceSharedData = function getConsentInstanceSharedData() {
      devAssert(this.instance_, "%s: cannot find the instance", TAG2);
      return this.instance_.sharedDataPromise;
    };
    _proto.whenConsentReady = function whenConsentReady() {
      if (this.instance_) {
        return resolvedPromise();
      }
      if (!this.consentReadyPromise_) {
        var deferred = new Deferred();
        this.consentReadyPromise_ = deferred.promise;
        this.consentReadyResolver_ = deferred.resolve;
      }
      return this.consentReadyPromise_;
    };
    _proto.getSavedInstanceForTesting = function getSavedInstanceForTesting() {
      return this.instance_.savedConsentInfo_;
    };
    return ConsentStateManager2;
  }();
  var ConsentInstance = /* @__PURE__ */ function() {
    function ConsentInstance2(ampdoc2, id, config) {
      this.ampdoc_ = ampdoc2;
      this.id_ = id;
      this.sharedDataPromise = null;
      this.storagePromise_ = Services.storageForTopLevelDoc(ampdoc2);
      this.localConsentInfo_ = null;
      this.savedConsentInfo_ = null;
      this.storageKey_ = "amp-consent:" + id;
      this.onUpdateHref_ = config["onUpdateHref"] || null;
      if (this.onUpdateHref_) {
        assertHttpsUrl(this.onUpdateHref_, "AMP-CONSENT");
      }
      this.hasDirtyBitNext_ = void 0;
    }
    var _proto2 = ConsentInstance2.prototype;
    _proto2.setDirtyBit = function setDirtyBit(dirty) {
      var _this3 = this;
      if (dirty === void 0) {
        dirty = true;
      }
      this.hasDirtyBitNext_ = dirty;
      return this.get().then(function(info) {
        if (hasDirtyBit(info) === dirty) {
          return;
        }
        _this3.update(info["consentState"], info["consentString"], info["purposeConsents"], info["consentMetadata"], dirty);
      });
    };
    _proto2.update = function update(state, consentString, purposeConsents, opt_consentMetadata, opt_systemUpdate) {
      var localState = this.localConsentInfo_ && this.localConsentInfo_["consentState"];
      var calculatedState = recalculateConsentStateValue(state, localState);
      if (state === CONSENT_ITEM_STATE.DISMISSED) {
        var _this$localConsentInf, _this$localConsentInf2, _this$localConsentInf3;
        this.localConsentInfo_ = constructConsentInfo(calculatedState, (_this$localConsentInf = this.localConsentInfo_) == null ? void 0 : _this$localConsentInf.consentString, (_this$localConsentInf2 = this.localConsentInfo_) == null ? void 0 : _this$localConsentInf2.consentMetadata, (_this$localConsentInf3 = this.localConsentInfo_) == null ? void 0 : _this$localConsentInf3.purposeConsents);
        return;
      }
      var oldValue = this.localConsentInfo_;
      if (opt_systemUpdate && hasDirtyBit(oldValue)) {
        this.localConsentInfo_ = constructConsentInfo(calculatedState, consentString, opt_consentMetadata, purposeConsents, true);
      } else {
        this.localConsentInfo_ = constructConsentInfo(calculatedState, consentString, opt_consentMetadata, purposeConsents);
      }
      var newConsentInfo = constructConsentInfo(calculatedState, consentString, opt_consentMetadata, purposeConsents, this.hasDirtyBitNext_);
      if (isConsentInfoStoredValueSame(newConsentInfo, this.savedConsentInfo_)) {
        return;
      }
      this.updateStoredValue_(newConsentInfo);
    };
    _proto2.updateStoredValue_ = function updateStoredValue_(consentInfo) {
      var _this4 = this;
      this.storagePromise_.then(function(storage) {
        if (!isConsentInfoStoredValueSame(consentInfo, _this4.localConsentInfo_, _this4.hasDirtyBitNext_)) {
          return;
        }
        if (consentInfo["consentState"] === CONSENT_ITEM_STATE.UNKNOWN) {
          storage.remove(_this4.storageKey_);
          return;
        }
        var value = composeStoreValue(consentInfo);
        if (value == null) {
          return;
        }
        _this4.savedConsentInfo_ = consentInfo;
        storage.setNonBoolean(_this4.storageKey_, value);
        _this4.sendUpdateHrefRequest_(consentInfo);
      });
    };
    _proto2.get = function get() {
      var _this5 = this;
      if (this.localConsentInfo_) {
        return Promise.resolve(this.localConsentInfo_);
      }
      var storage;
      return this.storagePromise_.then(function(s) {
        storage = s;
        return storage.get(_this5.storageKey_);
      }).then(function(storedValue) {
        if (_this5.localConsentInfo_) {
          return _this5.localConsentInfo_;
        }
        var consentInfo = getStoredConsentInfo(storedValue);
        _this5.savedConsentInfo_ = consentInfo;
        if (hasDirtyBit(consentInfo)) {
          _this5.sendUpdateHrefRequest_(constructConsentInfo(CONSENT_ITEM_STATE.UNKNOWN));
          storage.remove(_this5.storageKey_);
          _this5.savedConsentInfo_ = null;
        }
        _this5.localConsentInfo_ = consentInfo;
        return _this5.localConsentInfo_;
      }).catch(function(e) {
        dev().error(TAG2, "Failed to read storage", e);
        return constructConsentInfo(CONSENT_ITEM_STATE.UNKNOWN);
      });
    };
    _proto2.sendUpdateHrefRequest_ = function sendUpdateHrefRequest_(consentInfo) {
      var _this6 = this;
      if (!this.onUpdateHref_) {
        return;
      }
      if (hasDirtyBit(consentInfo)) {
        return;
      }
      var legacyConsentState = calculateLegacyStateValue(consentInfo["consentState"]);
      getConsentCID(this.ampdoc_).then(function(userId) {
        var request = {
          "consentInstanceId": _this6.id_,
          "ampUserId": userId
        };
        if (legacyConsentState != null) {
          request["consentState"] = legacyConsentState;
        }
        request["consentStateValue"] = getConsentStateValue(consentInfo["consentState"]);
        if (consentInfo["consentString"]) {
          request["consentString"] = consentInfo["consentString"];
        }
        if (consentInfo["consentMetadata"]) {
          request["consentMetadata"] = consentInfo["consentMetadata"];
        }
        if (consentInfo["purposeConsents"]) {
          request["purposeConsents"] = consentInfo["purposeConsents"];
        }
        var init = {
          credentials: "include",
          method: "POST",
          body: request,
          ampCors: false
        };
        _this6.ampdoc_.whenFirstVisible().then(function() {
          expandConsentEndpointUrl(_this6.ampdoc_.getHeadNode(), _this6.onUpdateHref_).then(function(expandedUpdateHref) {
            Services.xhrFor(_this6.ampdoc_.win).fetchJson(expandedUpdateHref, init);
          });
        });
      });
    };
    return ConsentInstance2;
  }();

  // extensions/amp-consent/0.1/consent-config.js
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
  var TAG3 = "amp-consent/consent-config";
  var AMP_STORY_CONSENT_TAG = "amp-story-consent";
  var ALLOWED_DEPR_CONSENTINSTANCE_ATTRS = {
    "promptUI": true,
    "checkConsentHref": true,
    "promptIfUnknownForGeoGroup": true,
    "onUpdateHref": true
  };
  var CONSENT_VARS_ALLOWED_LIST = {
    "PAGE_VIEW_ID": true,
    "PAGE_VIEW_ID_64": true,
    "SOURCE_URL": true
  };
  var CID_SCOPE = "AMP-CONSENT";
  var ConsentConfig = /* @__PURE__ */ function() {
    function ConsentConfig2(element) {
      this.element_ = element;
      this.matchedGeoGroup_ = null;
      this.configPromise_ = null;
    }
    var _proto = ConsentConfig2.prototype;
    _proto.getConsentConfigPromise = function getConsentConfigPromise() {
      if (!this.configPromise_) {
        this.configPromise_ = this.validateAndParseConfig_();
      }
      return this.configPromise_;
    };
    _proto.getMatchedGeoGroup = function getMatchedGeoGroup() {
      return this.matchedGeoGroup_;
    };
    _proto.convertInlineConfigFormat_ = function convertInlineConfigFormat_(config) {
      var consentsConfigDepr = config["consents"];
      if (!config["consents"]) {
        return config;
      }
      var keys = Object.keys(consentsConfigDepr);
      userAssert(keys.length <= 1, "%s: only single consent instance is supported", TAG3);
      if (keys.length > 0) {
        config["consentInstanceId"] = keys[0];
        var consentInstanceConfigDepr = config["consents"][keys[0]];
        var attrs = Object.keys(consentInstanceConfigDepr);
        for (var i = 0; i < attrs.length; i++) {
          var attr = attrs[i];
          if (!config[attr] && ALLOWED_DEPR_CONSENTINSTANCE_ATTRS[attr]) {
            config[attrs[i]] = consentInstanceConfigDepr[attrs[i]];
          }
        }
      }
      delete config["consents"];
      return config;
    };
    _proto.validateAndParseConfig_ = function validateAndParseConfig_() {
      var _this = this;
      var inlineConfig = this.convertInlineConfigFormat_(userAssert(this.getInlineConfig_(), "%s: Inline config not found"));
      var cmpConfig = this.getCMPConfig_();
      var config = deepMerge(cmpConfig || {}, inlineConfig || {}, 1);
      userAssert(config["consentInstanceId"], "%s: consentInstanceId to store consent info is required", TAG3);
      if (config["policy"]) {
        var keys = Object.keys(config["policy"]);
        for (var i = 0; i < keys.length; i++) {
          if (keys[i] != "default") {
            user().warn(TAG3, "policy %s is currently not supported and will be ignored", keys[i]);
            delete config["policy"][keys[i]];
          }
        }
      }
      var group = config["promptIfUnknownForGeoGroup"];
      if (typeof group === "string") {
        var _config$geoOverride;
        config["consentRequired"] = false;
        config["geoOverride"] = (_config$geoOverride = {}, _config$geoOverride[group] = {
          "consentRequired": true
        }, _config$geoOverride);
      } else if (config["consentRequired"] === void 0 && config["checkConsentHref"]) {
        config["consentRequired"] = "remote";
      }
      return this.mergeGeoOverride_(config).then(function(mergedConfig) {
        return _this.validateMergedGeoOverride_(mergedConfig);
      }).then(function(validatedConfig) {
        return _this.checkStoryConsent_(validatedConfig);
      });
    };
    _proto.mergeGeoOverride_ = function mergeGeoOverride_(config) {
      var _this2 = this;
      if (!config["geoOverride"]) {
        return Promise.resolve(config);
      }
      return Services.geoForDocOrNull(this.element_).then(function(geoService) {
        userAssert(geoService, "%s: requires <amp-geo> to use `geoOverride`", TAG3);
        var mergedConfig = map(config);
        var geoGroups = Object.keys(config["geoOverride"]);
        for (var i = 0; i < geoGroups.length; i++) {
          if (geoService.isInCountryGroup(geoGroups[i]) === GEO_IN_GROUP.IN) {
            var geoConfig = config["geoOverride"][geoGroups[i]];
            if (hasOwn(geoConfig, "consentInstanceId")) {
              user().error(TAG3, "consentInstanceId cannot be overriden in geoGroup:", geoGroups[i]);
              delete geoConfig["consentInstanceId"];
            }
            deepMerge(mergedConfig, geoConfig, 1);
            _this2.matchedGeoGroup_ = geoGroups[i];
            break;
          }
        }
        delete mergedConfig["geoOverride"];
        return mergedConfig;
      });
    };
    _proto.validateMergedGeoOverride_ = function validateMergedGeoOverride_(mergedConfig) {
      var consentRequired = mergedConfig["consentRequired"];
      userAssert(typeof consentRequired === "boolean" || consentRequired === "remote", "`consentRequired` is required", TAG3);
      if (consentRequired === "remote") {
        userAssert(mergedConfig["checkConsentHref"], "%s: `checkConsentHref` must be specified if `consentRequired` is remote", TAG3);
      }
      return mergedConfig;
    };
    _proto.checkStoryConsent_ = function checkStoryConsent_(config) {
      if (childElementByTag(this.element_, AMP_STORY_CONSENT_TAG)) {
        userAssert(!config["promptUISrc"], "%s: `promptUiSrc` cannot be specified while using %s.", TAG3, AMP_STORY_CONSENT_TAG);
      }
      return config;
    };
    _proto.getInlineConfig_ = function getInlineConfig_() {
      try {
        return getChildJsonConfig(this.element_);
      } catch (e) {
        throw user(this.element_).createError(TAG3, e);
      }
    };
    _proto.getCMPConfig_ = function getCMPConfig_() {
      var type = this.element_.getAttribute("type");
      if (!type) {
        return null;
      }
      userAssert(CMP_CONFIG[type], "%s: invalid CMP type %s", TAG3, type);
      var importConfig = CMP_CONFIG[type];
      this.validateCMPConfig_(importConfig);
      return importConfig;
    };
    _proto.validateCMPConfig_ = function validateCMPConfig_(config) {
      var assertValues = ["consentInstanceId", "checkConsentHref", "promptUISrc"];
      for (var i = 0; i < assertValues.length; i++) {
        var attribute = assertValues[i];
        devAssert(config[attribute], "CMP config must specify %s", attribute);
      }
    };
    return ConsentConfig2;
  }();
  function expandConsentEndpointUrl(element, url, opt_vars) {
    var vars = _extends({
      "CLIENT_ID": getConsentCID(element),
      "CONSENT_PAGE_VIEW_ID_64": function CONSENT_PAGE_VIEW_ID_64() {
        return getConsentStateManager(element).then(function(consentStateManager) {
          return consentStateManager.consentPageViewId64();
        });
      }
    }, opt_vars);
    return Services.urlReplacementsForDoc(element).expandUrlAsync(url, vars, _extends({}, vars, CONSENT_VARS_ALLOWED_LIST));
  }
  function getConsentCID(node) {
    return Services.cidForDoc(node).then(function(cid) {
      return cid.get({
        scope: CID_SCOPE,
        createCookieIfNotPresent: true
      }, resolvedPromise());
    });
  }
  function expandPolicyConfig(policyConfig, consentId) {
    var defaultWaitForItems = {};
    defaultWaitForItems[consentId] = void 0;
    var defaultPolicy = {
      "waitFor": defaultWaitForItems
    };
    var unblockOnAll = [CONSENT_POLICY_STATE.UNKNOWN, CONSENT_POLICY_STATE.SUFFICIENT, CONSENT_POLICY_STATE.INSUFFICIENT, CONSENT_POLICY_STATE.UNKNOWN_NOT_REQUIRED];
    var predefinedNone = {
      "waitFor": defaultWaitForItems,
      "unblockOn": unblockOnAll
    };
    var rejectAllOnZero = {
      "waitFor": defaultWaitForItems,
      "timeout": {
        "seconds": 0,
        "fallbackAction": "reject"
      },
      "unblockOn": unblockOnAll
    };
    policyConfig["_till_responded"] = predefinedNone;
    policyConfig["_till_accepted"] = defaultPolicy;
    policyConfig["_auto_reject"] = rejectAllOnZero;
    if (policyConfig && policyConfig["default"]) {
      return policyConfig;
    }
    policyConfig["default"] = defaultPolicy;
    return policyConfig;
  }

  // src/core/data-structures/observable.js
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
      for (var _iterator = _createForOfIteratorHelperLoose(this.handlers_), _step; !(_step = _iterator()).done; ) {
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

  // extensions/amp-consent/0.1/consent-policy-manager.js
  var CONSENT_STATE_MANAGER = "consentStateManager";
  var TAG4 = "consent-policy-manager";
  var ALLOWLIST_POLICY = {
    "default": true,
    "_till_responded": true,
    "_till_accepted": true,
    "_auto_reject": true
  };
  var ConsentPolicyManager = /* @__PURE__ */ function() {
    function ConsentPolicyManager2(ampdoc2) {
      this.ampdoc_ = ampdoc2;
      this.policyInstancesDeferred_ = map();
      this.instances_ = map();
      this.ConsentStateManagerPromise_ = getServicePromiseForDoc(this.ampdoc_, CONSENT_STATE_MANAGER);
      this.consentPromptInitiated_ = new Deferred();
      var consentValueInitiated = new Deferred();
      this.consentValueInitiatedPromise_ = consentValueInitiated.promise;
      this.consentValueInitiatedResolver_ = consentValueInitiated.resolve;
      this.consentStateChangeObservables_ = new Observable();
      this.consentInstanceIdDepr_ = null;
      this.consentState_ = null;
      this.consentString_ = null;
      this.consentMetadata_ = null;
      this.purposeConsents_ = null;
      this.tcfConsentChangeHandler_ = null;
    }
    var _proto = ConsentPolicyManager2.prototype;
    _proto.setLegacyConsentInstanceId = function setLegacyConsentInstanceId(consentInstanceId) {
      this.consentInstanceIdDepr_ = consentInstanceId;
      this.init_();
    };
    _proto.registerConsentPolicyInstance = function registerConsentPolicyInstance(policyId, config) {
      var _this = this;
      if (this.instances_[policyId]) {
        return;
      }
      var waitFor = Object.keys(config["waitFor"] || {});
      if (waitFor.length !== 1 || waitFor[0] !== this.consentInstanceIdDepr_) {
        user().error(TAG4, "invalid waitFor value, consent policy will never resolve");
        return;
      }
      var instance = new ConsentPolicyInstance(config);
      this.instances_[policyId] = instance;
      if (this.policyInstancesDeferred_[policyId]) {
        this.policyInstancesDeferred_[policyId].resolve();
        this.policyInstancesDeferred_[policyId] = null;
      }
      this.consentValueInitiatedPromise_.then(function() {
        if (_this.consentState_) {
          instance.evaluate(_this.consentState_);
        }
        _this.consentStateChangeObservables_.add(function(state) {
          instance.evaluate(state);
        });
        _this.consentPromptInitiated_.promise.then(function() {
          instance.startTimeout(_this.ampdoc_.win);
        });
      });
    };
    _proto.init_ = function init_() {
      var _this2 = this;
      this.ConsentStateManagerPromise_.then(function(manager) {
        manager.whenConsentReady().then(function() {
          manager.onConsentStateChange(function(info) {
            _this2.consentStateChangeHandler_(info);
            if (_this2.consentValueInitiatedResolver_) {
              _this2.consentValueInitiatedResolver_();
              _this2.consentValueInitiatedResolver_ = null;
            }
          });
        });
      });
    };
    _proto.enableTimeout = function enableTimeout() {
      this.consentPromptInitiated_.resolve();
    };
    _proto.consentStateChangeHandler_ = function consentStateChangeHandler_(info) {
      var state = info["consentState"];
      var consentStr = info["consentString"];
      var consentMetadata = info["consentMetadata"];
      var purposeConsents = info["purposeConsents"];
      var prevConsentMetadata = this.consentMetadata_, prevConsentStr = this.consentString_, prevPurposeConsents = this.purposeConsents_;
      this.consentString_ = consentStr;
      this.consentMetadata_ = consentMetadata;
      this.purposeConsents_ = purposeConsents;
      if (state === CONSENT_ITEM_STATE.UNKNOWN) {
        return;
      }
      if (state == CONSENT_ITEM_STATE.NOT_REQUIRED) {
        var shouldOverwrite = this.consentState_ != CONSENT_ITEM_STATE.ACCEPTED && this.consentState_ != CONSENT_ITEM_STATE.REJECTED;
        if (shouldOverwrite) {
          this.consentState_ = CONSENT_ITEM_STATE.NOT_REQUIRED;
        }
      } else if (state == CONSENT_ITEM_STATE.DISMISSED) {
        if (this.consentState_ === null) {
          this.consentState_ = CONSENT_ITEM_STATE.UNKNOWN;
        }
        this.consentString_ = prevConsentStr;
        this.consentMetadata_ = prevConsentMetadata;
        this.purposeConsents_ = prevPurposeConsents;
      } else {
        this.consentState_ = state;
      }
      this.consentStateChangeObservables_.fire(this.consentState_);
      if (this.tcfConsentChangeHandler_) {
        this.tcfConsentChangeHandler_();
      }
    };
    _proto.setOnPolicyChange = function setOnPolicyChange(callback) {
      if (!this.tcfConsentChangeHandler_) {
        this.tcfConsentChangeHandler_ = callback;
      }
    };
    _proto.whenPolicyResolved = function whenPolicyResolved(policyId) {
      var _this3 = this;
      if (!ALLOWLIST_POLICY[policyId]) {
        user().error(TAG4, "can not find policy %s, only predefined policies are supported", policyId);
        return Promise.resolve(CONSENT_POLICY_STATE.UNKNOWN);
      }
      return this.whenPolicyInstanceRegistered_(policyId).then(function() {
        return _this3.instances_[policyId].getReadyPromise().then(function() {
          return _this3.instances_[policyId].getCurrentPolicyStatus();
        });
      });
    };
    _proto.whenPolicyUnblock = function whenPolicyUnblock(policyId) {
      var _this4 = this;
      if (!ALLOWLIST_POLICY[policyId]) {
        user().error(TAG4, "can not find policy %s, only predefined policies are supported", policyId);
        return Promise.resolve(false);
      }
      return this.whenPolicyInstanceRegistered_(policyId).then(function() {
        return _this4.instances_[policyId].getReadyPromise().then(function() {
          return _this4.instances_[policyId].shouldUnblock();
        });
      });
    };
    _proto.getMergedSharedData = function getMergedSharedData(policyId) {
      var _this5 = this;
      return this.whenPolicyResolved(policyId).then(function() {
        return _this5.ConsentStateManagerPromise_;
      }).then(function(manager) {
        return manager.getConsentInstanceSharedData();
      });
    };
    _proto.getConsentStringInfo = function getConsentStringInfo(policyId) {
      var _this6 = this;
      return this.whenPolicyResolved(policyId).then(function() {
        return _this6.consentString_;
      });
    };
    _proto.getConsentMetadataInfo = function getConsentMetadataInfo(policyId) {
      var _this7 = this;
      return this.whenPolicyResolved(policyId).then(function() {
        return _this7.consentMetadata_;
      });
    };
    _proto.whenPurposesUnblock = function whenPurposesUnblock(purposes) {
      var _this8 = this;
      return this.ConsentStateManagerPromise_.then(function(manager) {
        return manager.whenHasAllPurposeConsents();
      }).then(function() {
        if (!_this8.purposeConsents_) {
          return false;
        }
        var shouldUnblock = function shouldUnblock2(purpose) {
          return hasOwn(_this8.purposeConsents_, purpose) && _this8.purposeConsents_[purpose] === PURPOSE_CONSENT_STATE.ACCEPTED;
        };
        return purposes.every(shouldUnblock);
      });
    };
    _proto.whenPolicyInstanceRegistered_ = function whenPolicyInstanceRegistered_(policyId) {
      if (this.instances_[policyId]) {
        return resolvedPromise();
      }
      if (!this.policyInstancesDeferred_[policyId]) {
        this.policyInstancesDeferred_[policyId] = new Deferred();
      }
      return this.policyInstancesDeferred_[policyId].promise;
    };
    return ConsentPolicyManager2;
  }();
  var ConsentPolicyInstance = /* @__PURE__ */ function() {
    function ConsentPolicyInstance2(config) {
      this.config_ = config;
      var readyDeferred = new Deferred();
      this.readyPromise_ = readyDeferred.promise;
      this.readyResolver_ = readyDeferred.resolve;
      this.status_ = CONSENT_POLICY_STATE.UNKNOWN;
      this.unblockStateLists_ = config["unblockOn"] || [CONSENT_POLICY_STATE.SUFFICIENT, CONSENT_POLICY_STATE.UNKNOWN_NOT_REQUIRED];
    }
    var _proto2 = ConsentPolicyInstance2.prototype;
    _proto2.startTimeout = function startTimeout(win) {
      var _this9 = this;
      var timeoutConfig = this.config_["timeout"];
      var timeoutSecond = null;
      var fallbackState;
      if (timeoutConfig != void 0) {
        if (isObject(timeoutConfig)) {
          if (timeoutConfig["fallbackAction"] && timeoutConfig["fallbackAction"] == "reject") {
            fallbackState = CONSENT_ITEM_STATE.REJECTED;
          } else if (timeoutConfig["fallbackAction"] && timeoutConfig["fallbackAction"] != "dismiss") {
            user().error(TAG4, "unsupported fallbackAction %s", timeoutConfig["fallbackAction"]);
          }
          timeoutSecond = timeoutConfig["seconds"];
        } else {
          timeoutSecond = timeoutConfig;
        }
        userAssert(isFiniteNumber(timeoutSecond), "invalid timeout value %s", timeoutSecond);
      }
      if (timeoutSecond != null) {
        win.setTimeout(function() {
          fallbackState = fallbackState || CONSENT_ITEM_STATE.UNKNOWN;
          _this9.evaluate(fallbackState, true);
        }, timeoutSecond * 1e3);
      }
    };
    _proto2.evaluate = function evaluate(state, isFallback) {
      if (isFallback === void 0) {
        isFallback = false;
      }
      if (!state) {
        return;
      }
      if (isFallback && !this.readyResolver_) {
        return;
      }
      if (state === CONSENT_ITEM_STATE.ACCEPTED) {
        this.status_ = CONSENT_POLICY_STATE.SUFFICIENT;
      } else if (state === CONSENT_ITEM_STATE.REJECTED) {
        this.status_ = CONSENT_POLICY_STATE.INSUFFICIENT;
      } else if (state === CONSENT_ITEM_STATE.NOT_REQUIRED) {
        this.status_ = CONSENT_POLICY_STATE.UNKNOWN_NOT_REQUIRED;
      } else {
        this.status_ = CONSENT_POLICY_STATE.UNKNOWN;
      }
      if (this.readyResolver_) {
        this.readyResolver_();
        this.readyResolver_ = null;
      }
    };
    _proto2.getReadyPromise = function getReadyPromise() {
      return this.readyPromise_;
    };
    _proto2.getCurrentPolicyStatus = function getCurrentPolicyStatus() {
      return this.status_;
    };
    _proto2.shouldUnblock = function shouldUnblock() {
      return this.unblockStateLists_.indexOf(this.status_) > -1;
    };
    return ConsentPolicyInstance2;
  }();

  // src/utils/event-helper.js
  function getData(event) {
    return event.data;
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
    devAssert2(strings.length === 1, "Improper html template tag usage.");
    container.innerHTML = strings[0];
    var el = container.firstElementChild;
    devAssert2(el, "No elements in template");
    devAssert2(!el.nextElementSibling, "Too many root elements in template");
    container.removeChild(el);
    return el;
  }

  // src/core/dom/amp-element-helpers.js
  var UPGRADE_TO_CUSTOMELEMENT_PROMISE = "__AMP_UPG_PRM";
  var UPGRADE_TO_CUSTOMELEMENT_RESOLVER = "__AMP_UPG_RES";
  function isAmpElement(element) {
    var tag = element.tagName;
    return tag.startsWith("AMP-") && !(tag == "AMP-STICKY-AD-TOP-PADDING" || tag == "AMP-BODY");
  }
  function whenUpgradedToCustomElement(element) {
    devAssert2(isAmpElement(element), "element is not AmpElement");
    if (element.createdCallback) {
      return Promise.resolve(element);
    }
    if (!element[UPGRADE_TO_CUSTOMELEMENT_PROMISE]) {
      var deferred = new Deferred();
      element[UPGRADE_TO_CUSTOMELEMENT_PROMISE] = deferred.promise;
      element[UPGRADE_TO_CUSTOMELEMENT_RESOLVER] = deferred.resolve;
    }
    return element[UPGRADE_TO_CUSTOMELEMENT_PROMISE];
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
  function isVar(property) {
    return property.startsWith("--");
  }

  // extensions/amp-consent/0.1/consent-ui.js
  var _templateObject;
  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var TAG5 = "amp-consent-ui";
  var MINIMUM_INITIAL_HEIGHT = 10;
  var DEFAULT_INITIAL_HEIGHT = 30;
  var MODAL_HEIGHT_ENABLED = 60;
  var MAX_INITIAL_HEIGHT = 80;
  var DEFAULT_ENABLE_BORDER = true;
  var FULLSCREEN_SUCCESS = "Entering fullscreen.";
  var FULLSCREEN_ERROR = "Could not enter fullscreen. Fullscreen is only supported when the iframe is visible as a bottom sheet and after user interaction.";
  var CONSENT_PROMPT_CAPTION = "User Consent Prompt";
  var BUTTON_ACTION_CAPTION = "Focus Prompt";
  var CANCEL_OVERLAY = "cancelFullOverlay";
  var REQUEST_OVERLAY = "requestFullOverlay";
  var IFRAME_RUNNING_TIMEOUT = 1e3;
  var actionState = {
    error: "error",
    success: "success"
  };
  var ampConsentMessageType = {
    response: "amp-consent-response"
  };
  var consentUiClasses = {
    iframeFullscreen: "i-amphtml-consent-ui-iframe-fullscreen",
    iframeActive: "i-amphtml-consent-ui-iframe-active",
    modal: "i-amphtml-consent-ui-modal",
    in: "i-amphtml-consent-ui-in",
    loading: "i-amphtml-consent-ui-loading",
    fill: "i-amphtml-consent-ui-fill",
    placeholder: "i-amphtml-consent-ui-placeholder",
    mask: "i-amphtml-consent-ui-mask",
    borderEnabled: "i-amphtml-consent-ui-border-enabled",
    screenReaderDialog: "i-amphtml-consent-alertdialog",
    iframeTransform: "i-amphtml-consent-ui-iframe-transform"
  };
  var ConsentUI = /* @__PURE__ */ function() {
    function ConsentUI2(baseInstance, config, opt_postPromptUI) {
      this.baseInstance_ = baseInstance;
      this.isCreatedIframe_ = false;
      this.isPostPrompt_ = false;
      this.isVisible_ = false;
      this.isIframeVisible_ = false;
      this.isFullscreen_ = false;
      this.ui_ = null;
      this.overlayEnabled_ = config["uiConfig"] && config["uiConfig"]["overlay"] === true;
      this.consentPromptCaption_ = config["captions"] && config["captions"]["consentPromptCaption"] || CONSENT_PROMPT_CAPTION;
      this.buttonActionCaption_ = config["captions"] && config["captions"]["buttonActionCaption"] || BUTTON_ACTION_CAPTION;
      this.srAlertShown_ = false;
      this.scrollEnabled_ = true;
      this.maskElement_ = null;
      this.srAlert_ = null;
      this.elementWithFocusBeforeShowing_ = null;
      this.ampdoc_ = baseInstance.getAmpDoc();
      this.viewport_ = Services.viewportForDoc(this.ampdoc_);
      this.viewer_ = Services.viewerForDoc(this.ampdoc_);
      this.parent_ = baseInstance.element;
      this.win_ = baseInstance.win;
      this.document_ = this.win_.document;
      this.iframeReady_ = null;
      this.removeIframe_ = false;
      this.clientConfig_ = null;
      this.placeholder_ = null;
      this.initialHeight_ = DEFAULT_INITIAL_HEIGHT + "vh";
      this.borderEnabled_ = DEFAULT_ENABLE_BORDER;
      this.modalEnabled_ = false;
      this.isActionPromptTrigger_ = false;
      this.boundHandleIframeMessages_ = this.handleIframeMessages_.bind(this);
      this.config_ = config;
      this.init_(config, opt_postPromptUI);
    }
    var _proto = ConsentUI2.prototype;
    _proto.init_ = function init_(config, opt_postPromptUI) {
      if (opt_postPromptUI) {
        var postPromptUI = this.ampdoc_.getElementById(opt_postPromptUI);
        if (!postPromptUI) {
          user().error(TAG5, "postPromptUI element with id=%s not found", opt_postPromptUI);
        }
        this.ui_ = dev().assertElement(postPromptUI);
        this.isPostPrompt_ = true;
        return;
      }
      var promptUI = config["promptUI"];
      var promptUISrc = config["promptUISrc"];
      if (promptUI) {
        var promptElement = this.ampdoc_.getElementById(promptUI);
        if (!promptElement || !this.parent_.contains(promptElement)) {
          user().error(TAG5, "child element of <amp-consent> with promptUI id %s not found", promptUI);
        }
        if (!isEsm() && promptElement.querySelector("amp-iframe")) {
          user().error(TAG5, "`promptUI` element contains an <amp-iframe>. This may cause content flashing when consent is not required. Consider using `promptUISrc` instead. See https://go.amp.dev/c/amp-analytics");
        }
        this.ui_ = dev().assertElement(promptElement);
      } else if (promptUISrc) {
        this.isCreatedIframe_ = true;
        assertHttpsUrl(promptUISrc, this.parent_);
        this.ui_ = this.createPromptIframe_(promptUISrc);
        this.placeholder_ = this.createPlaceholder_();
        this.clientConfig_ = config["clientConfig"] || null;
      }
    };
    _proto.show = function show(isActionPromptTrigger) {
      var _this = this;
      if (!this.ui_) {
        return;
      }
      if (this.isPostPrompt_ && !this.parent_.contains(this.ui_)) {
        toggle(this.ui_, true);
        return;
      }
      toggle(dev().assertElement(this.parent_), true);
      var classList = this.parent_.classList;
      classList.add("amp-active");
      classList.remove("amp-hidden");
      this.baseInstance_.getViewport().addToFixedLayer(this.parent_, true);
      if (this.isCreatedIframe_) {
        this.isActionPromptTrigger_ = isActionPromptTrigger;
        this.loadIframe_().then(function() {
          _this.baseInstance_.mutateElement(function() {
            if (!_this.isPostPrompt_) {
              _this.elementWithFocusBeforeShowing_ = _this.document_.activeElement;
            }
            _this.maybeShowOverlay_();
            _this.maybeShowSrAlert_();
            _this.showIframe_();
          });
        });
      } else {
        var show2 = function show3() {
          if (!_this.ui_) {
            return;
          }
          toggle(_this.ui_, true);
          if (!_this.isPostPrompt_) {
            _this.elementWithFocusBeforeShowing_ = _this.document_.activeElement;
            _this.maybeShowOverlay_();
            _this.resume();
            _this.ui_.focus();
          }
        };
        if (isAmpElement(this.ui_)) {
          whenUpgradedToCustomElement(this.ui_).then(function() {
            return _this.ui_.build();
          }).then(function() {
            return show2();
          });
        } else {
          show2();
        }
      }
      this.isVisible_ = true;
    };
    _proto.hide = function hide() {
      var _this2 = this;
      if (!this.ui_) {
        return;
      }
      this.pause();
      this.baseInstance_.mutateElement(function() {
        if (_this2.isCreatedIframe_) {
          _this2.resetIframe_();
        }
        if (!_this2.isPostPrompt_) {
          var classList = _this2.parent_.classList;
          classList.remove("amp-active");
          classList.add("amp-hidden");
        }
        _this2.maybeHideOverlay_();
        _this2.maybeRemoveSrAlert_();
        _this2.enableScroll_();
        _this2.resetAnimationStyles_();
        _this2.baseInstance_.getViewport().removeFromFixedLayer(_this2.parent_);
        toggle(dev().assertElement(_this2.ui_), false);
        _this2.isVisible_ = false;
        if (_this2.elementWithFocusBeforeShowing_) {
          _this2.elementWithFocusBeforeShowing_.focus();
          _this2.elementWithFocusBeforeShowing_ = null;
        } else if (_this2.win_.document.body.children.length > 0) {
          _this2.win_.document.body.children[0].focus();
        }
      });
    };
    _proto.pause = function pause() {
      if (this.ui_) {
        Services.ownersForDoc(this.baseInstance_.element).schedulePause(this.baseInstance_.element, this.ui_);
      }
    };
    _proto.resume = function resume() {
      if (this.ui_) {
        Services.ownersForDoc(this.baseInstance_.element).scheduleLayout(this.baseInstance_.element, this.ui_);
        Services.ownersForDoc(this.baseInstance_.element).scheduleResume(this.baseInstance_.element, this.ui_);
      }
    };
    _proto.handleReady_ = function handleReady_(data) {
      this.initialHeight_ = DEFAULT_INITIAL_HEIGHT + "vh";
      this.borderEnabled_ = DEFAULT_ENABLE_BORDER;
      this.modalEnabled_ = false;
      if (data["initialHeight"]) {
        if (typeof data["initialHeight"] === "string" && data["initialHeight"].indexOf("vh") >= 0) {
          var dataHeight = parseInt(data["initialHeight"], 10);
          this.initialHeight_ = dataHeight >= MAX_INITIAL_HEIGHT ? MAX_INITIAL_HEIGHT + "vh" : this.initialHeight_;
          if (dataHeight >= MINIMUM_INITIAL_HEIGHT && dataHeight <= MAX_INITIAL_HEIGHT) {
            this.initialHeight_ = dataHeight + "vh";
            this.modalEnabled_ = dataHeight > MODAL_HEIGHT_ENABLED;
            this.overlayEnabled_ = this.modalEnabled_ || this.overlayEnabled_;
          } else {
            user().error(TAG5, "Inavlid initial height: " + data["initialHeight"] + "." + ("Minimum: " + MINIMUM_INITIAL_HEIGHT + "vh. Maximum: " + MAX_INITIAL_HEIGHT + "vh."));
          }
        } else {
          user().error(TAG5, "Inavlid initial height: " + data["initialHeight"] + '.Must be a string in "vh" units.');
        }
      }
      if (data["border"] === false && !this.modalEnabled_) {
        this.borderEnabled_ = false;
      }
      this.iframeReady_.resolve();
    };
    _proto.enterFullscreen_ = function enterFullscreen_() {
      if (!this.ui_ || !this.isVisible_ || this.isFullscreen_) {
        return;
      }
      this.resetAnimationStyles_();
      this.sendViewerEvent_(REQUEST_OVERLAY);
      var classList = this.parent_.classList;
      classList.add(consentUiClasses.iframeFullscreen);
      this.disableScroll_();
      this.isFullscreen_ = true;
    };
    _proto.sendViewerEvent_ = function sendViewerEvent_(event) {
      this.viewer_.sendMessage(event, dict(), true);
    };
    _proto.createPromptIframe_ = function createPromptIframe_(promptUISrc) {
      var iframe = this.parent_.ownerDocument.createElement("iframe");
      var sandbox = ["allow-scripts", "allow-popups"];
      var allowSameOrigin = this.allowSameOrigin_(promptUISrc);
      if (allowSameOrigin) {
        sandbox.push("allow-same-origin");
      }
      iframe.setAttribute("sandbox", sandbox.join(" "));
      var classList = iframe.classList;
      classList.add(consentUiClasses.fill);
      return iframe;
    };
    _proto.allowSameOrigin_ = function allowSameOrigin_(src) {
      var urlService = Services.urlForDoc(this.parent_);
      var srcUrl = urlService.parse(src);
      var containerUrl = urlService.parse(this.ampdoc_.getUrl());
      return srcUrl.origin != containerUrl.origin;
    };
    _proto.createPlaceholder_ = function createPlaceholder_() {
      var placeholder = this.parent_.ownerDocument.createElement("placeholder");
      toggle(placeholder, false);
      placeholder.classList.add(consentUiClasses.placeholder);
      var loadingSpinner = htmlFor(placeholder)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(['\n      <svg viewBox="0 0 40 40">\n        <defs>\n          <linearGradient id="grad">\n            <stop stop-color="rgb(105, 105, 105)"></stop>\n            <stop offset="100%"\n            stop-color="rgb(105, 105, 105)"\n            stop-opacity="0"></stop>\n          </linearGradient>\n        </defs>\n        <path d="M11,4.4 A18,18, 0,1,0, 38,20" stroke="url(#grad)"></path>\n      </svg>'])));
      placeholder.appendChild(loadingSpinner);
      return placeholder;
    };
    _proto.getClientInfoPromise_ = function getClientInfoPromise_() {
      var _this3 = this;
      var consentStateManagerPromise = getConsentStateManager(this.ampdoc_);
      return consentStateManagerPromise.then(function(consentStateManager) {
        return consentStateManager.getLastConsentInstanceInfo().then(function(consentInfo) {
          return dict({
            "clientConfig": _this3.clientConfig_,
            "consentState": getConsentStateValue(consentInfo["consentState"]),
            "consentStateValue": getConsentStateValue(consentInfo["consentState"]),
            "consentMetadata": consentInfo["consentMetadata"],
            "consentString": consentInfo["consentString"],
            "promptTrigger": _this3.isActionPromptTrigger_ ? "action" : "load",
            "isDirty": !!consentInfo["isDirty"],
            "purposeConsents": consentInfo["purposeConsents"]
          });
        });
      });
    };
    _proto.loadIframe_ = function loadIframe_() {
      var _this4 = this;
      this.iframeReady_ = new Deferred();
      var classList = this.parent_.classList;
      if (!elementByTag(this.parent_, "placeholder")) {
        insertAtStart(this.parent_, dev().assertElement(this.placeholder_));
      }
      classList.add(consentUiClasses.loading);
      toggle(dev().assertElement(this.ui_), false);
      this.removeIframe_ = false;
      var iframePromise = this.getClientInfoPromise_().then(function(clientInfo) {
        return expandConsentEndpointUrl(_this4.parent_, _this4.config_["promptUISrc"], {
          "CONSENT_INFO": function CONSENT_INFO(property) {
            return JSON.stringify(clientInfo[property]);
          }
        }).then(function(expandedSrc) {
          _this4.ui_.src = expandedSrc;
          _this4.ui_.setAttribute("name", JSON.stringify(clientInfo));
          _this4.win_.addEventListener("message", _this4.boundHandleIframeMessages_);
          insertAtStart(_this4.parent_, dev().assertElement(_this4.ui_));
        });
      });
      return Promise.all([iframePromise, this.iframeReady_.promise, this.baseInstance_.mutateElement(function() {
        toggle(dev().assertElement(_this4.placeholder_), true);
      })]);
    };
    _proto.showIframe_ = function showIframe_() {
      var _this5 = this;
      var classList = this.parent_.classList;
      classList.add(consentUiClasses.iframeActive);
      toggle(dev().assertElement(this.placeholder_), false);
      toggle(dev().assertElement(this.ui_), true);
      if (this.modalEnabled_) {
        classList.add(consentUiClasses.modal);
        tryFocus(dev().assertElement(this.ui_));
      }
      this.resetAnimationStyles_();
      this.baseInstance_.mutateElement(function() {
        classList.remove(consentUiClasses.loading);
        _this5.baseInstance_.mutateElement(function() {
          classList.add(consentUiClasses.in);
          _this5.isIframeVisible_ = true;
          _this5.applyInitialStyles_();
        });
      });
    };
    _proto.resetIframe_ = function resetIframe_() {
      var _this6 = this;
      var classList = this.parent_.classList;
      classList.remove(consentUiClasses.iframeActive);
      classList.remove(consentUiClasses.modal);
      classList.remove(consentUiClasses.borderEnabled);
      this.win_.removeEventListener("message", this.boundHandleIframeMessages_);
      classList.remove(consentUiClasses.iframeFullscreen);
      if (this.isFullscreen_) {
        this.sendViewerEvent_(CANCEL_OVERLAY);
      } else if (this.modalEnabled_) {
        this.viewport_.leaveLightboxMode();
      }
      this.isFullscreen_ = false;
      classList.remove(consentUiClasses.in);
      this.isIframeVisible_ = false;
      this.ui_.removeAttribute("name");
      toggle(dev().assertElement(this.placeholder_), false);
      this.removeIframe_ = true;
      this.win_.setTimeout(function() {
        if (_this6.removeIframe_) {
          removeElement(dev().assertElement(_this6.ui_));
        }
      }, IFRAME_RUNNING_TIMEOUT);
    };
    _proto.maybeShowSrAlert_ = function maybeShowSrAlert_() {
      var _this7 = this;
      if (this.srAlertShown_ || this.modalEnabled_) {
        return;
      }
      var alertDialog = this.document_.createElement("div");
      var button = this.document_.createElement("button");
      var titleDiv = this.document_.createElement("div");
      alertDialog.setAttribute("role", "alertdialog");
      titleDiv.textContent = this.consentPromptCaption_;
      button.textContent = this.buttonActionCaption_;
      button.onclick = function() {
        tryFocus(dev().assertElement(_this7.ui_));
      };
      alertDialog.appendChild(titleDiv);
      alertDialog.appendChild(button);
      var classList = alertDialog.classList;
      classList.add(consentUiClasses.screenReaderDialog);
      this.baseInstance_.element.appendChild(alertDialog);
      tryFocus(button);
      this.srAlertShown_ = true;
      this.srAlert_ = alertDialog;
    };
    _proto.maybeRemoveSrAlert_ = function maybeRemoveSrAlert_() {
      if (this.srAlert_) {
        removeElement(this.srAlert_);
        delete this.srAlert_;
      }
    };
    _proto.resetAnimationStyles_ = function resetAnimationStyles_() {
      setStyles(this.parent_, {
        transform: "",
        transition: ""
      });
    };
    _proto.applyInitialStyles_ = function applyInitialStyles_() {
      var classList = this.parent_.classList;
      if (this.ui_) {
        setStyles(this.ui_, {
          height: this.initialHeight_
        });
      }
      setImportantStyles(this.parent_, {
        "--i-amphtml-modal-height": "" + this.initialHeight_
      });
      classList.add(consentUiClasses.iframeTransform);
      if (this.borderEnabled_ || this.modalEnabled_) {
        classList.add(consentUiClasses.borderEnabled);
      }
      if (this.modalEnabled_) {
        this.viewport_.enterLightboxMode();
      }
    };
    _proto.maybeShowOverlay_ = function maybeShowOverlay_() {
      if (!this.overlayEnabled_) {
        return;
      }
      if (!this.maskElement_) {
        var mask = this.win_.document.createElement("div");
        mask.classList.add(consentUiClasses.mask);
        this.parent_.ownerDocument.body.appendChild(mask);
        this.maskElement_ = mask;
      }
      toggle(this.maskElement_, true);
      this.disableScroll_();
    };
    _proto.maybeHideOverlay_ = function maybeHideOverlay_() {
      if (!this.overlayEnabled_) {
        return;
      }
      if (this.maskElement_) {
        toggle(this.maskElement_, false);
      }
      this.enableScroll_();
    };
    _proto.disableScroll_ = function disableScroll_() {
      if (this.scrollEnabled_) {
        this.viewport_.enterOverlayMode();
        this.scrollEnabled_ = false;
      }
    };
    _proto.enableScroll_ = function enableScroll_() {
      if (!this.scrollEnabled_) {
        this.viewport_.leaveOverlayMode();
        this.scrollEnabled_ = true;
      }
    };
    _proto.handleIframeMessages_ = function handleIframeMessages_(event) {
      var _this8 = this;
      if (this.ui_.contentWindow !== event.source) {
        return;
      }
      var data = getData(event);
      if (!data || data["type"] != "consent-ui") {
        return;
      }
      var requestAction = data["action"];
      var requestType = data["type"];
      if (requestAction === "ready") {
        this.handleReady_(data);
      }
      if (requestAction === "enter-fullscreen") {
        if (!this.isIframeVisible_ || this.modalEnabled_ || this.document_.activeElement !== this.ui_ && !this.isActionPromptTrigger_) {
          user().warn(TAG5, FULLSCREEN_ERROR);
          this.sendEnterFullscreenResponse_(requestType, requestAction, true);
          return;
        }
        this.sendEnterFullscreenResponse_(requestType, requestAction);
        this.baseInstance_.mutateElement(function() {
          _this8.enterFullscreen_();
        });
      }
    };
    _proto.sendEnterFullscreenResponse_ = function sendEnterFullscreenResponse_(requestType, requestAction, isError) {
      if (isError === void 0) {
        isError = false;
      }
      this.sendIframeMessage_(ampConsentMessageType.response, requestType, requestAction, isError ? actionState.error : actionState.success, isError ? FULLSCREEN_ERROR : FULLSCREEN_SUCCESS);
    };
    _proto.sendIframeMessage_ = function sendIframeMessage_(type, requestType, requestAction, state, info) {
      var iframeWindow = this.ui_.contentWindow;
      if (iframeWindow) {
        iframeWindow.postMessage({
          type: type,
          requestType: requestType,
          requestAction: requestAction,
          state: state,
          info: info
        }, "*");
      }
    };
    return ConsentUI2;
  }();

  // extensions/amp-consent/0.1/crc32.js
  var CRC32_KEY = 3988292384;
  var crcTable = null;
  function crc32(str) {
    if (!crcTable) {
      crcTable = makeCrcTable();
    }
    var bytes = utf8Encode(str);
    var crc = -1 >>> 0;
    for (var i = 0; i < bytes.length; i++) {
      var lookupIndex = (crc ^ bytes[i]) & 255;
      crc = crc >>> 8 ^ crcTable[lookupIndex];
    }
    return (crc ^ -1) >>> 0;
  }
  function makeCrcTable() {
    var crcTable2 = new Array(256);
    for (var i = 0; i < 256; i++) {
      var c = i;
      for (var j = 0; j < 8; j++) {
        if (c & 1) {
          c = c >>> 1 ^ CRC32_KEY;
        } else {
          c = c >>> 1;
        }
      }
      crcTable2[i] = c;
    }
    return crcTable2;
  }

  // extensions/amp-consent/0.1/linker.js
  var DELIMITER = "*";
  var KEY_VALIDATOR = /^[a-zA-Z0-9\-_.]+$/;
  var CHECKSUM_OFFSET_MAX_MIN = 1;
  var VALID_VERSION = 1;
  var TAG6 = "amp-analytics/linker";
  function parseLinker(value) {
    var linkerObj = parseLinkerParamValue(value);
    if (!linkerObj) {
      return null;
    }
    var checksum = linkerObj.checksum, serializedIds = linkerObj.serializedIds;
    if (!isCheckSumValid(serializedIds, checksum)) {
      user().error(TAG6, "LINKER_PARAM value checksum not valid");
      return null;
    }
    return deserialize(serializedIds);
  }
  function parseLinkerParamValue(value) {
    var parts = value.split(DELIMITER);
    var isEven = parts.length % 2 == 0;
    if (parts.length < 4 || !isEven) {
      user().error(TAG6, "Invalid linker_param value " + value);
      return null;
    }
    var version2 = Number(parts.shift());
    if (version2 !== VALID_VERSION) {
      user().error(TAG6, "Invalid version number " + version2);
      return null;
    }
    var checksum = parts.shift();
    var serializedIds = parts.join(DELIMITER);
    return {
      checksum: checksum,
      serializedIds: serializedIds
    };
  }
  function isCheckSumValid(serializedIds, checksum) {
    for (var i = 0; i <= CHECKSUM_OFFSET_MAX_MIN; i++) {
      var calculateCheckSum = getCheckSum(serializedIds, i);
      if (calculateCheckSum == checksum) {
        return true;
      }
    }
    return false;
  }
  function getCheckSum(serializedIds, opt_offsetMin) {
    var fingerprint = getFingerprint();
    var offset = opt_offsetMin || 0;
    var timestamp = getMinSinceEpoch() - offset;
    var crc = crc32([fingerprint, timestamp, serializedIds].join(DELIMITER));
    return crc.toString(36);
  }
  function getFingerprint() {
    var date = new Date();
    var timezone = date.getTimezoneOffset();
    var language = WindowInterface.getUserLanguage(window);
    return [WindowInterface.getUserAgent(window), timezone, language].join(DELIMITER);
  }
  function deserialize(serializedIds) {
    var keyValuePairs = {};
    var params = serializedIds.split(DELIMITER);
    for (var i = 0; i < params.length; i += 2) {
      var key = params[i];
      var valid = KEY_VALIDATOR.test(key);
      if (!valid) {
        user().error(TAG6, "Invalid linker key " + key + ", value ignored");
        continue;
      }
      var value = decode(params[i + 1]);
      keyValuePairs[key] = value;
    }
    return keyValuePairs;
  }
  function getMinSinceEpoch() {
    return Math.floor(Date.now() / 6e4);
  }
  function decode(value) {
    return base64UrlDecodeFromString(String(value));
  }

  // extensions/amp-consent/0.1/linker-reader.js
  var TAG7 = "amp-consent/linker-reader";
  var ConsentLinkerReader = /* @__PURE__ */ function() {
    function ConsentLinkerReader2(win) {
      this.win_ = win;
      this.linkerParams_ = {};
    }
    var _proto = ConsentLinkerReader2.prototype;
    _proto.get = function get(name, id) {
      if (!name || !id) {
        user().error(TAG7, "LINKER_PARAM requires two params, name and id");
        return null;
      }
      if (!hasOwn(this.linkerParams_, name)) {
        this.linkerParams_[name] = this.maybeParseQueryString_(name);
      }
      if (this.linkerParams_[name] && this.linkerParams_[name][id]) {
        return this.linkerParams_[name][id];
      }
      return null;
    };
    _proto.maybeParseQueryString_ = function maybeParseQueryString_(name) {
      var params = parseQueryString(this.win_.location.search);
      if (!hasOwn(params, name)) {
        return null;
      }
      var value = params[name];
      return parseLinker(value);
    };
    return ConsentLinkerReader2;
  }();

  // src/iframe-helper.js
  function isInFie(element) {
    return element.classList.contains("i-amphtml-fie") || !!closestAncestorElementBySelector(element, ".i-amphtml-fie");
  }

  // extensions/amp-consent/0.1/cookie-writer.js
  var TAG8 = "amp-consent/cookie-writer";
  var RESERVED_KEYS = {
    "referrerDomains": true,
    "enabled": true,
    "cookiePath": true,
    "cookieMaxAge": true,
    "cookieSecure": true,
    "cookieDomain": true
  };
  var CONSENT_COOKIE_WRITE_VARS_ALLOWED_LIST = {
    "LINKER_PARAM": true
  };
  var CookieWriter = /* @__PURE__ */ function() {
    function CookieWriter2(win, element, config) {
      this.win_ = win;
      this.element_ = element;
      this.writePromise_ = null;
      this.config_ = config;
      this.linkerReader_ = new ConsentLinkerReader(win);
    }
    var _proto = CookieWriter2.prototype;
    _proto.write = function write() {
      if (!this.writePromise_) {
        this.writePromise_ = this.init_();
      }
      return this.writePromise_;
    };
    _proto.init_ = function init_() {
      if (!this.isCookieAllowed_(this.win_, this.element_)) {
        return resolvedPromise();
      }
      if (!hasOwn(this.config_, "cookies")) {
        return resolvedPromise();
      }
      if (!isObject(this.config_["cookies"])) {
        user().error(TAG8, "cookies config must be an object");
        return resolvedPromise();
      }
      var inputConfig = this.config_["cookies"];
      if (inputConfig["enabled"] === false) {
        return resolvedPromise();
      }
      var cookieExpireDateMs = this.getCookieMaxAgeMs_(inputConfig);
      var ids = Object.keys(inputConfig);
      var promises = [];
      for (var i = 0; i < ids.length; i++) {
        var cookieName = ids[i];
        var cookieObj = inputConfig[cookieName];
        if (this.isValidCookieConfig_(cookieName, cookieObj)) {
          promises.push(this.expandAndWrite_(cookieName, cookieObj["value"], cookieExpireDateMs));
        }
      }
      return Promise.all(promises);
    };
    _proto.getCookieMaxAgeMs_ = function getCookieMaxAgeMs_(inputConfig) {
      if (!hasOwn(inputConfig, "cookieMaxAge")) {
        return BASE_CID_MAX_AGE_MILLIS;
      }
      var cookieMaxAge = Number(inputConfig["cookieMaxAge"]);
      if (!cookieMaxAge && cookieMaxAge !== 0) {
        user().error(TAG8, "invalid cookieMaxAge %s, falling back to default value (1 year)", inputConfig["cookieMaxAge"]);
        return BASE_CID_MAX_AGE_MILLIS;
      }
      if (cookieMaxAge <= 0) {
        user().warn(TAG8, "cookieMaxAge %s less than or equal to 0, cookie will immediately expire", inputConfig["cookieMaxAge"]);
      }
      return cookieMaxAge * 1e3;
    };
    _proto.isValidCookieConfig_ = function isValidCookieConfig_(cookieName, cookieConfig) {
      if (RESERVED_KEYS[cookieName]) {
        return false;
      }
      if (!isObject(cookieConfig)) {
        user().error(TAG8, "cookieValue must be configured in an object");
        return false;
      }
      if (!hasOwn(cookieConfig, "value")) {
        user().error(TAG8, "value is required in the cookieValue object");
        return false;
      }
      return true;
    };
    _proto.expandAndWrite_ = function expandAndWrite_(cookieName, cookieValue, cookieExpireDateMs) {
      var _this = this;
      return Services.urlReplacementsForDoc(this.element_).expandStringAsync(cookieValue, {
        "LINKER_PARAM": function LINKER_PARAM(name, id) {
          return _this.linkerReader_.get(name, id);
        }
      }, CONSENT_COOKIE_WRITE_VARS_ALLOWED_LIST).then(function(value) {
        if (value) {
          var expireDate = Date.now() + cookieExpireDateMs;
          setCookie(_this.win_, cookieName, value, expireDate, {
            highestAvailableDomain: true
          });
        }
      }).catch(function(e) {
        user().error(TAG8, "Error expanding cookie string", e);
      });
    };
    _proto.isCookieAllowed_ = function isCookieAllowed_() {
      return !isInFie(this.element_) && !isProxyOrigin(this.win_.location) && !(getMode(this.win_).runtime == "inabox");
    };
    return CookieWriter2;
  }();

  // src/service/notification-ui-manager.js
  var NOTIFICATION_UI_MANAGER = "notificationUIManager";
  var NotificationUiManager = /* @__PURE__ */ function() {
    function NotificationUiManager2() {
      this.queueSize_ = 0;
      this.queuePromise_ = resolvedPromise();
      this.queueEmptyHandler_ = function() {
      };
      this.queueNotEmptyHandler_ = function() {
      };
    }
    var _proto = NotificationUiManager2.prototype;
    _proto.onQueueEmpty = function onQueueEmpty(handler) {
      this.queueEmptyHandler_ = handler;
      if (this.queueSize_ == 0) {
        handler();
      }
    };
    _proto.onQueueNotEmpty = function onQueueNotEmpty(handler) {
      this.queueNotEmptyHandler_ = handler;
      if (this.queueSize_ > 0) {
        handler();
      }
    };
    _proto.registerUI = function registerUI(show) {
      var _this = this;
      if (this.queueSize_ == 0) {
        this.queueNotEmptyHandler_();
      }
      this.queueSize_++;
      var promise = this.queuePromise_.then(function() {
        return show().then(function() {
          _this.queueSize_--;
          if (_this.queueSize_ == 0) {
            _this.queueEmptyHandler_();
          }
        });
      });
      this.queuePromise_ = promise;
      return promise;
    };
    return NotificationUiManager2;
  }();

  // extensions/amp-consent/0.1/tcf-api-command-manager.js
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
  var TAG9 = "amp-consent";
  var TCF_POLICY_VERSION = 2;
  var CMP_STATUS = "loaded";
  var CMP_LOADED = true;
  var EVENT_STATUS = "tcloaded";
  var TcfApiCommandManager = /* @__PURE__ */ function() {
    function TcfApiCommandManager2(policyManager) {
      var _this = this;
      this.policyManager_ = policyManager;
      this.changeListeners_ = map();
      this.currentTcString_ = null;
      this.listenerId_ = 0;
      policyManager.setOnPolicyChange(function() {
        _this.handleTcDataChange_();
      });
    }
    var _proto = TcfApiCommandManager2.prototype;
    _proto.handleTcfCommand = function handleTcfCommand(data, win) {
      if (!this.isValidTcfApiCall_(data["__tcfapiCall"])) {
        return;
      }
      var payload = data["__tcfapiCall"];
      var command = payload.command;
      switch (command) {
        case TCF_POST_MESSAGE_API_COMMANDS.PING:
          this.handlePingEvent_(payload, win);
          break;
        case TCF_POST_MESSAGE_API_COMMANDS.GET_TC_DATA:
          this.handleGetTcData_(payload, win);
          break;
        case TCF_POST_MESSAGE_API_COMMANDS.ADD_EVENT_LISTENER:
          this.handleAddEventListner_(payload, win);
          break;
        case TCF_POST_MESSAGE_API_COMMANDS.REMOVE_EVENT_LISTENER:
          this.handleRemoveEventListner_(payload, win);
          break;
        default:
          return;
      }
    };
    _proto.handleAddEventListner_ = function handleAddEventListner_(payload, win) {
      if (this.changeListeners_[this.listenerId_]) {
        return;
      }
      this.changeListeners_[this.listenerId_] = {
        payload: payload,
        win: win
      };
      this.listenerId_++;
    };
    _proto.handleRemoveEventListner_ = function handleRemoveEventListner_(payload, win) {
      var callId = payload.callId, parameter = payload.parameter;
      var success = !!this.changeListeners_[parameter];
      if (success) {
        delete this.changeListeners_[parameter];
      }
      this.sendTcfApiReturn_(win, void 0, callId, success);
    };
    _proto.handleTcDataChange_ = function handleTcDataChange_() {
      var _this2 = this;
      if (!Object.keys(this.changeListeners_).length) {
        return;
      }
      this.getTcDataPromises_().then(function(consentPromises) {
        var newTcString = consentPromises[2];
        if (!newTcString || newTcString === _this2.currentTcString_) {
          return;
        }
        _this2.currentTcString_ = newTcString;
        var listenerIds = Object.keys(_this2.changeListeners_);
        for (var i = 0; i < listenerIds.length; i++) {
          var listenerId = Number(listenerIds[i]);
          if (!hasOwn(_this2.changeListeners_, listenerId)) {
            continue;
          }
          var _this2$changeListener = _this2.changeListeners_[listenerId], payload = _this2$changeListener.payload, win = _this2$changeListener.win;
          var callId = payload.callId;
          var returnValue = _this2.getMinimalTcData_(consentPromises[0], consentPromises[1], newTcString, listenerId);
          _this2.sendTcfApiReturn_(win, returnValue, callId, true);
        }
      });
    };
    _proto.getTcDataPromises_ = function getTcDataPromises_() {
      var consentStringInfoPromise = this.policyManager_.getConsentStringInfo("default");
      var metadataPromise = this.policyManager_.getConsentMetadataInfo("default");
      var sharedDataPromise = this.policyManager_.getMergedSharedData("default");
      return Promise.all([metadataPromise, sharedDataPromise, consentStringInfoPromise]);
    };
    _proto.handleGetTcData_ = function handleGetTcData_(payload, win) {
      var _this3 = this;
      this.getTcDataPromises_().then(function(arr) {
        var returnValue = _this3.getMinimalTcData_(arr[0], arr[1], arr[2]);
        var callId = payload.callId;
        _this3.sendTcfApiReturn_(win, returnValue, callId, true);
      });
    };
    _proto.getMinimalTcData_ = function getMinimalTcData_(metadata, sharedData, tcString, opt_listenerId) {
      var purposeOneTreatment = metadata ? metadata["purposeOne"] : void 0;
      var gdprApplies = metadata ? metadata["gdprApplies"] : void 0;
      var additionalConsent = metadata ? metadata["additionalConsent"] : void 0;
      var additionalData = _extends2({}, sharedData, {
        additionalConsent: additionalConsent
      });
      return {
        tcfPolicyVersion: TCF_POLICY_VERSION,
        gdprApplies: gdprApplies,
        tcString: tcString,
        listenerId: opt_listenerId,
        cmpStatus: CMP_STATUS,
        eventStatus: EVENT_STATUS,
        purposeOneTreatment: purposeOneTreatment,
        additionalData: additionalData
      };
    };
    _proto.handlePingEvent_ = function handlePingEvent_(payload, win) {
      var _this4 = this;
      this.policyManager_.getConsentMetadataInfo("default").then(function(metadata) {
        var returnValue = _this4.getMinimalPingReturn_(metadata);
        var callId = payload.callId;
        _this4.sendTcfApiReturn_(win, returnValue, callId);
      });
    };
    _proto.getMinimalPingReturn_ = function getMinimalPingReturn_(metadata) {
      var gdprApplies = metadata ? metadata["gdprApplies"] : void 0;
      return {
        gdprApplies: gdprApplies,
        cmpLoaded: CMP_LOADED,
        cmpStatus: CMP_STATUS,
        tcfPolicyVersion: TCF_POLICY_VERSION
      };
    };
    _proto.sendTcfApiReturn_ = function sendTcfApiReturn_(win, returnValue, callId, opt_success) {
      if (!win) {
        return;
      }
      var __tcfapiReturn = {
        returnValue: returnValue,
        callId: callId,
        success: opt_success
      };
      win.postMessage({
        __tcfapiReturn: __tcfapiReturn
      }, "*");
    };
    _proto.isValidTcfApiCall_ = function isValidTcfApiCall_(payload) {
      if (!isObject(payload)) {
        user().error(TAG9, '"tcfapiCall" is not an object: ' + payload);
        return false;
      }
      var command = payload.command, parameter = payload.parameter, version2 = payload.version;
      if (!isEnumValue(TCF_POST_MESSAGE_API_COMMANDS, command)) {
        user().error(TAG9, 'Unsupported command found in "tcfapiCall": ' + command);
        return false;
      }
      if (parameter && command != TCF_POST_MESSAGE_API_COMMANDS.REMOVE_EVENT_LISTENER) {
        user().error(TAG9, 'Unsupported parameter found in "tcfapiCall": ' + parameter);
        return false;
      }
      if (version2 !== 2) {
        user().error(TAG9, 'Found incorrect version in "tcfapiCall": ' + version2);
        return false;
      }
      return true;
    };
    _proto.getMinimalPingReturnForTesting = function getMinimalPingReturnForTesting(metadata) {
      return this.getMinimalPingReturn_(metadata);
    };
    _proto.getMinimalTcDataForTesting = function getMinimalTcDataForTesting(metadata, sharedData, tcString, listenerId) {
      return this.getMinimalTcData_(metadata, sharedData, tcString, listenerId);
    };
    return TcfApiCommandManager2;
  }();

  // extensions/amp-consent/0.1/amp-consent.js
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
  var CONSENT_STATE_MANAGER2 = "consentStateManager";
  var CONSENT_POLICY_MANAGER = "consentPolicyManager";
  var TCF_API_LOCATOR = "__tcfapiLocator";
  var TAG10 = "amp-consent";
  var ACTION_TYPE = {
    ACCEPT: "accept",
    REJECT: "reject",
    DISMISS: "dismiss"
  };
  var AmpConsent = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpConsent2, _AMP$BaseElement);
    var _super = _createSuper(AmpConsent2);
    function AmpConsent2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.consentStateManager_ = null;
      _this.consentPolicyManager_ = null;
      _this.tcfApiCommandManager_ = null;
      _this.notificationUiManager_ = null;
      _this.consentUI_ = null;
      _this.consentConfig_ = null;
      _this.policyConfig_ = null;
      _this.postPromptUI_ = null;
      _this.dialogResolver_ = null;
      _this.isPromptUiOn_ = false;
      _this.consentStateChangedViaPromptUI_ = false;
      _this.consentUIPending_ = false;
      _this.vsync_ = _this.getVsync();
      _this.remoteConfigPromise_ = null;
      _this.consentId_ = null;
      _this.matchedGeoGroup_ = null;
      _this.purposeConsentRequired_ = null;
      return _this;
    }
    var _proto = AmpConsent2.prototype;
    _proto.getConsentPolicy = function getConsentPolicy() {
      return null;
    };
    _proto.buildCallback = function buildCallback() {
      var _this2 = this;
      userAssert(this.element.getAttribute("id"), "amp-consent should have an id");
      var configManager = new ConsentConfig(this.element);
      return configManager.getConsentConfigPromise().then(function(validatedConfig) {
        _this2.matchedGeoGroup_ = configManager.getMatchedGeoGroup();
        _this2.initialize_(validatedConfig);
      });
    };
    _proto.pauseCallback = function pauseCallback() {
      if (this.consentUI_) {
        this.consentUI_.pause();
      }
    };
    _proto.resumeCallback = function resumeCallback() {
      if (this.consentUI_) {
        this.consentUI_.resume();
      }
    };
    _proto.initialize_ = function initialize_(validatedConfig) {
      var _this3 = this;
      this.consentConfig_ = validatedConfig;
      this.consentId_ = this.consentConfig_["consentInstanceId"];
      if (this.consentConfig_["postPromptUI"]) {
        this.postPromptUI_ = new ConsentUI(this, dict({}), this.consentConfig_["postPromptUI"]);
      }
      var policyConfig = this.consentConfig_["policy"] || dict({});
      this.policyConfig_ = expandPolicyConfig(policyConfig, this.consentId_);
      var children = realChildElements(this.element);
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        toggle(child, false);
        Services.ownersForDoc(this.element).setOwner(child, this.element);
      }
      var consentPolicyManagerPromise = getServicePromiseForDoc(this.getAmpDoc(), CONSENT_POLICY_MANAGER).then(function(manager) {
        _this3.consentPolicyManager_ = manager;
        _this3.consentPolicyManager_.setLegacyConsentInstanceId(_this3.consentId_);
        var policyKeys = Object.keys(_this3.policyConfig_);
        for (var _i = 0; _i < policyKeys.length; _i++) {
          _this3.consentPolicyManager_.registerConsentPolicyInstance(policyKeys[_i], _this3.policyConfig_[policyKeys[_i]]);
        }
      });
      var consentStateManagerPromise = getServicePromiseForDoc(this.getAmpDoc(), CONSENT_STATE_MANAGER2).then(function(manager) {
        manager.registerConsentInstance(_this3.consentId_, _this3.consentConfig_);
        _this3.consentStateManager_ = manager;
      });
      var notificationUiManagerPromise = getServicePromiseForDoc(this.getAmpDoc(), NOTIFICATION_UI_MANAGER).then(function(manager) {
        _this3.notificationUiManager_ = manager;
      });
      var cookieWriterPromise = this.consentConfig_["cookies"] ? new CookieWriter(this.win, this.element, this.consentConfig_).write() : resolvedPromise();
      Promise.all([consentStateManagerPromise, notificationUiManagerPromise, consentPolicyManagerPromise, cookieWriterPromise]).then(function() {
        _this3.init_();
      });
    };
    _proto.enableInteractions_ = function enableInteractions_() {
      var _this4 = this;
      this.registerAction("accept", function(invocation) {
        _this4.handleClosingUiAction_(ACTION_TYPE.ACCEPT, invocation);
      });
      this.registerAction("reject", function(invocation) {
        _this4.handleClosingUiAction_(ACTION_TYPE.REJECT, invocation);
      });
      this.registerAction("dismiss", function() {
        _this4.handleClosingUiAction_(ACTION_TYPE.DISMISS);
      });
      this.registerAction("setPurpose", function(invocation) {
        _this4.handleSetPurpose_(invocation);
      });
      this.registerAction("prompt", function(invocation) {
        return _this4.handleReprompt_(invocation);
      });
      this.enableExternalInteractions_();
    };
    _proto.handleClosingUiAction_ = function handleClosingUiAction_(action, opt_invocation) {
      var _this5 = this;
      if (!this.isReadyToHandleAction_()) {
        return;
      }
      this.maybeSetConsentPurposeDefaults_(action, opt_invocation).then(function() {
        _this5.handleAction_(action);
      });
    };
    _proto.enableExternalInteractions_ = function enableExternalInteractions_() {
      var _this6 = this;
      this.win.addEventListener("message", function(event) {
        if (!_this6.isPromptUiOn_) {
          return;
        }
        var consentString;
        var metadata;
        var data = getData(event);
        if (!data || data["type"] != "consent-response") {
          return;
        }
        if (!data["action"]) {
          user().error(TAG10, "consent-response message missing required info");
          return;
        }
        if (data["info"] !== void 0) {
          if (typeof data["info"] != "string") {
            user().error(TAG10, "consent-response info only supports string, %s, treated as undefined", data["info"]);
            data["info"] = void 0;
          }
          if (data["action"] === ACTION_TYPE.DISMISS) {
            if (data["info"]) {
              _this6.user().error(TAG10, "Consent string value %s not applicable on user dismiss, stored value will be kept and used", data["info"]);
            }
            data["info"] = void 0;
          }
          consentString = data["info"];
          metadata = _this6.validateMetadata_(data["consentMetadata"]);
        }
        var iframes = _this6.element.querySelectorAll("iframe");
        for (var i = 0; i < iframes.length; i++) {
          if (iframes[i].contentWindow === event.source) {
            var action = data.action, purposeConsents = data.purposeConsents;
            if (!isEnumValue(ACTION_TYPE, action) || !_this6.isReadyToHandleAction_()) {
              continue;
            }
            if (purposeConsents && Object.keys(purposeConsents).length && action !== ACTION_TYPE.DISMISS) {
              _this6.validatePurposeConsents_(purposeConsents);
              _this6.consentStateManager_.updateConsentInstancePurposes(purposeConsents);
            }
            _this6.handleAction_(action, consentString, metadata);
          }
        }
      });
    };
    _proto.scheduleDisplay_ = function scheduleDisplay_(isActionPromptTrigger) {
      if (!this.notificationUiManager_) {
        dev().error(TAG10, "notification ui manager not found");
      }
      if (this.consentUIPending_) {
        return;
      }
      if (!this.consentUI_) {
        return;
      }
      this.consentUIPending_ = true;
      this.notificationUiManager_.registerUI(this.show_.bind(this, isActionPromptTrigger));
    };
    _proto.show_ = function show_(isActionPromptTrigger) {
      var _this7 = this;
      if (this.isPromptUiOn_) {
        dev().error(TAG10, "Attempt to show an already displayed prompt UI");
      }
      this.vsync_.mutate(function() {
        _this7.consentUI_.show(isActionPromptTrigger);
        _this7.isPromptUiOn_ = true;
      });
      var deferred = new Deferred();
      this.dialogResolver_ = deferred.resolve;
      return deferred.promise;
    };
    _proto.hide_ = function hide_() {
      if (!this.isPromptUiOn_) {
        dev().error(TAG10, "%s no consent ui to hide");
      }
      this.consentUI_.hide();
      this.isPromptUiOn_ = false;
      if (this.dialogResolver_) {
        this.dialogResolver_();
        this.dialogResolver_ = null;
      }
      this.consentUIPending_ = false;
    };
    _proto.isReadyToHandleAction_ = function isReadyToHandleAction_() {
      if (!this.consentStateManager_) {
        dev().error(TAG10, "No consent state manager");
        return false;
      }
      return this.isPromptUiOn_;
    };
    _proto.handleAction_ = function handleAction_(action, consentString, opt_consentMetadata) {
      var _this8 = this;
      var setDirtyBitPromise = isEnumValue(ACTION_TYPE, action) && this.consentConfig_["clearDirtyBitOnResponse_dontUseThisItMightBeRemoved"] ? this.consentStateManager_.setDirtyBit(false) : resolvedPromise();
      setDirtyBitPromise.then(function() {
        _this8.handleActionAfterClearingDirtyBit_(action, consentString, opt_consentMetadata);
      });
    };
    _proto.handleActionAfterClearingDirtyBit_ = function handleActionAfterClearingDirtyBit_(action, consentString, opt_consentMetadata) {
      this.consentStateChangedViaPromptUI_ = true;
      if (action == ACTION_TYPE.ACCEPT) {
        this.consentStateManager_.updateConsentInstanceState(CONSENT_ITEM_STATE.ACCEPTED, consentString, opt_consentMetadata);
      } else if (action == ACTION_TYPE.REJECT) {
        this.consentStateManager_.updateConsentInstanceState(CONSENT_ITEM_STATE.REJECTED, consentString, opt_consentMetadata);
      } else if (action == ACTION_TYPE.DISMISS) {
        this.consentStateManager_.updateConsentInstanceState(CONSENT_ITEM_STATE.DISMISSED);
      }
      this.hide_();
    };
    _proto.maybeSetConsentPurposeDefaults_ = function maybeSetConsentPurposeDefaults_(action, opt_invocation) {
      var _opt_invocation$args, _this9 = this;
      if (typeof (opt_invocation == null ? void 0 : (_opt_invocation$args = opt_invocation.args) == null ? void 0 : _opt_invocation$args.purposeConsentDefault) !== "boolean") {
        return resolvedPromise();
      }
      if (action === ACTION_TYPE.DISMISS) {
        dev.warn(TAG10, "Dismiss cannot have a `purposeConsentDefault` parameter.");
        return resolvedPromise();
      }
      return this.getPurposeConsentRequired_().then(function(purposeConsentRequired) {
        if (!purposeConsentRequired || !purposeConsentRequired.length) {
          return;
        }
        var defaultPurposes = {};
        var purposeValue = opt_invocation["args"]["purposeConsentDefault"];
        purposeConsentRequired.forEach(function(purpose) {
          defaultPurposes[purpose] = purposeValue;
        });
        _this9.consentStateManager_.updateConsentInstancePurposes(defaultPurposes, true);
      });
    };
    _proto.handleReprompt_ = function handleReprompt_(invocation) {
      var _this10 = this;
      var args = invocation.args;
      var setDirtyBitPromise = (args == null ? void 0 : args["expireCache"]) === true ? this.consentStateManager_.setDirtyBit() : resolvedPromise();
      setDirtyBitPromise.then(function() {
        _this10.scheduleDisplay_(true);
      });
    };
    _proto.handleSetPurpose_ = function handleSetPurpose_(invocation) {
      if (!invocation || !invocation["args"] || !Object.keys(invocation["args"]).length) {
        dev().error(TAG10, "Must have arugments for `setPurpose`.");
        return;
      }
      var args = invocation.args;
      if (this.isReadyToHandleAction_()) {
        this.validatePurposeConsents_(args);
        this.consentStateManager_.updateConsentInstancePurposes(args);
      }
    };
    _proto.init_ = function init_() {
      var _this11 = this;
      this.passSharedData_();
      this.syncRemoteConsentState_();
      this.maybeSetUpTcfPostMessageProxy_();
      this.getConsentRequiredPromise_().then(function(isConsentRequired) {
        return _this11.initPromptUI_(isConsentRequired);
      }).then(function(isPostPromptUIRequired) {
        if (isPostPromptUIRequired) {
          _this11.handlePostPromptUI_();
        }
        _this11.consentPolicyManager_.enableTimeout();
      }).catch(function(unusedError) {
      });
      this.enableInteractions_();
    };
    _proto.getConsentRequiredPromise_ = function getConsentRequiredPromise_() {
      var _this12 = this;
      return this.consentStateManager_.getConsentInstanceInfo().then(function(storedInfo) {
        if (hasStoredValue(storedInfo)) {
          return Promise.resolve(true);
        }
        var consentRequired = _this12.consentConfig_["consentRequired"];
        if (typeof consentRequired === "boolean") {
          return Promise.resolve(consentRequired);
        }
        return _this12.getConsentRemote_().then(function(consentResponse) {
          if (!consentResponse) {
            return false;
          }
          return consentResponse["consentRequired"] !== void 0 ? !!consentResponse["consentRequired"] : !!consentResponse["promptIfUnknown"];
        });
      });
    };
    _proto.passSharedData_ = function passSharedData_() {
      var responsePromise = this.getConsentRemote_();
      var sharedDataPromise = responsePromise.then(function(response) {
        if (!response || response["sharedData"] === void 0) {
          return null;
        }
        return response["sharedData"];
      });
      this.consentStateManager_.setConsentInstanceSharedData(sharedDataPromise);
    };
    _proto.syncRemoteConsentState_ = function syncRemoteConsentState_() {
      var _this13 = this;
      this.getConsentRemote_().then(function(response) {
        if (!response) {
          return;
        }
        var expireCache = response["expireCache"] || response["forcePromptOnNext"];
        if (expireCache) {
          _this13.consentStateManager_.setDirtyBit();
        }
        if (!!response["consentRequired"] && !_this13.consentStateChangedViaPromptUI_) {
          _this13.updateCacheIfNotNull_(response["consentStateValue"], response["consentString"] || void 0, response["consentMetadata"], response["purposeConsents"]);
        }
      });
    };
    _proto.updateCacheIfNotNull_ = function updateCacheIfNotNull_(responseStateValue, responseConsentString, responseMetadata, responsePurposeConsents) {
      var consentStateValue = convertEnumValueToState(responseStateValue);
      if (consentStateValue !== null) {
        if (responsePurposeConsents && isObject(responsePurposeConsents) && Object.keys(responsePurposeConsents).length) {
          this.validatePurposeConsents_(responsePurposeConsents);
          this.consentStateManager_.updateConsentInstancePurposes(responsePurposeConsents);
        }
        this.consentStateManager_.updateConsentInstanceState(consentStateValue, responseConsentString, this.validateMetadata_(responseMetadata));
      }
    };
    _proto.getConsentRemote_ = function getConsentRemote_() {
      var _this14 = this;
      if (this.remoteConfigPromise_) {
        return this.remoteConfigPromise_;
      }
      var checkConsentHref = this.consentConfig_["checkConsentHref"];
      if (!checkConsentHref) {
        this.remoteConfigPromise_ = Promise.resolve(null);
      } else {
        var storeConsentPromise = this.consentStateManager_.getLastConsentInstanceInfo();
        this.remoteConfigPromise_ = storeConsentPromise.then(function(storedInfo) {
          var body = dict({
            "consentInstanceId": _this14.consentId_,
            "consentStateValue": getConsentStateValue(storedInfo["consentState"]),
            "consentMetadata": storedInfo["consentMetadata"],
            "consentString": storedInfo["consentString"],
            "isDirty": !!storedInfo["isDirty"],
            "matchedGeoGroup": _this14.matchedGeoGroup_,
            "purposeConsents": storedInfo["purposeConsents"],
            "clientConfig": _this14.consentConfig_["clientConfig"]
          });
          var init = {
            credentials: "include",
            method: "POST",
            body: body
          };
          assertHttpsUrl(checkConsentHref, _this14.element);
          var ampdoc2 = _this14.getAmpDoc();
          var sourceBase = getSourceUrl(ampdoc2.getUrl());
          var resolvedHref = resolveRelativeUrl(checkConsentHref, sourceBase);
          var xhrService = Services.xhrFor(_this14.win);
          return ampdoc2.whenFirstVisible().then(function() {
            return expandConsentEndpointUrl(_this14.element, resolvedHref).then(function(expandedHref) {
              return xhrService.fetchJson(expandedHref, init).then(function(res) {
                return xhrService.xssiJson(res, _this14.consentConfig_["xssiPrefix"]).catch(function(e) {
                  user().error(TAG10, "Could not parse the `checkConsentHref` response.", e);
                });
              });
            });
          });
        });
      }
      return this.remoteConfigPromise_;
    };
    _proto.checkGranularConsentRequired_ = function checkGranularConsentRequired_(consentInfo) {
      var _this15 = this;
      return this.getPurposeConsentRequired_().then(function(purposeConsentRequired) {
        if (!(purposeConsentRequired != null && purposeConsentRequired.length)) {
          _this15.consentStateManager_.hasAllPurposeConsents();
          return true;
        }
        var storedPurposeConsents = consentInfo["purposeConsents"];
        if (!storedPurposeConsents || Object.keys(storedPurposeConsents).length < purposeConsentRequired.length) {
          return false;
        }
        for (var i = 0; i < purposeConsentRequired.length; i++) {
          var purpose = purposeConsentRequired[i];
          if (!hasOwn(storedPurposeConsents, purpose)) {
            return false;
          }
        }
        _this15.consentStateManager_.hasAllPurposeConsents();
        return true;
      });
    };
    _proto.getPurposeConsentRequired_ = function getPurposeConsentRequired_() {
      if (this.purposeConsentRequired_) {
        return this.purposeConsentRequired_;
      }
      var inlinePurposes = this.consentConfig_["purposeConsentRequired"];
      if (isArray(inlinePurposes)) {
        this.purposeConsentRequired_ = Promise.resolve(inlinePurposes);
      } else {
        this.purposeConsentRequired_ = this.getConsentRemote_().then(function(response) {
          if (!response || !isArray(response["purposeConsentRequired"])) {
            return null;
          }
          return response["purposeConsentRequired"];
        });
      }
      return this.purposeConsentRequired_;
    };
    _proto.hasRequiredConsents_ = function hasRequiredConsents_() {
      var _this16 = this;
      return this.consentStateManager_.getConsentInstanceInfo().then(function(info) {
        if (hasStoredValue(info)) {
          return _this16.checkGranularConsentRequired_(info);
        }
        return Promise.resolve(false);
      });
    };
    _proto.initPromptUI_ = function initPromptUI_(isConsentRequired) {
      var _this17 = this;
      this.consentUI_ = new ConsentUI(this, devAssert(this.consentConfig_, "consent config not found"));
      return this.hasRequiredConsents_().then(function(hasConsents) {
        if (hasConsents) {
          return true;
        }
        if (!isConsentRequired) {
          _this17.consentStateManager_.updateConsentInstanceState(CONSENT_ITEM_STATE.NOT_REQUIRED);
          return false;
        }
        _this17.scheduleDisplay_(false);
        return true;
      });
    };
    _proto.handlePostPromptUI_ = function handlePostPromptUI_() {
      var _this18 = this;
      if (!this.postPromptUI_) {
        return;
      }
      this.notificationUiManager_.onQueueEmpty(function() {
        _this18.vsync_.mutate(function() {
          _this18.postPromptUI_.show(false);
        });
      });
      this.notificationUiManager_.onQueueNotEmpty(function() {
        _this18.vsync_.mutate(function() {
          _this18.postPromptUI_.hide();
        });
      });
    };
    _proto.getConsentStateManagerForTesting = function getConsentStateManagerForTesting() {
      return this.consentStateManager_;
    };
    _proto.getConsentRequiredPromiseForTesting = function getConsentRequiredPromiseForTesting() {
      return this.getConsentRequiredPromise_();
    };
    _proto.getIsPromptUiOnForTesting = function getIsPromptUiOnForTesting() {
      return this.isPromptUiOn_;
    };
    _proto.validatePurposeConsents_ = function validatePurposeConsents_(purposeObj) {
      var purposeKeys = Object.keys(purposeObj);
      purposeKeys.forEach(function(purposeKey) {
        dev().assertBoolean(purposeObj[purposeKey], "`setPurpose` values must be booleans.");
      });
    };
    _proto.validateMetadata_ = function validateMetadata_(opt_metadata) {
      if (!opt_metadata) {
        return;
      }
      if (!isObject(opt_metadata)) {
        user().error(TAG10, "CMP metadata is not an object.");
        return;
      }
      assertMetadataValues(opt_metadata);
      return constructMetadata(opt_metadata["consentStringType"], opt_metadata["additionalConsent"], opt_metadata["gdprApplies"], opt_metadata["purposeOne"]);
    };
    _proto.maybeSetUpTcfPostMessageProxy_ = function maybeSetUpTcfPostMessageProxy_() {
      var _this19 = this;
      if (!this.consentConfig_["exposesTcfApi"]) {
        return;
      }
      if (this.win.frames[TCF_API_LOCATOR]) {
        return;
      }
      this.tcfApiCommandManager_ = new TcfApiCommandManager(this.consentPolicyManager_);
      this.win.addEventListener("message", function(e) {
        return _this19.handleTcfMessage_(e);
      });
      var iframe = this.element.ownerDocument.createElement("iframe");
      iframe.setAttribute("name", TCF_API_LOCATOR);
      iframe.setAttribute("aria-hidden", "true");
      toggle(iframe, false);
      this.element.appendChild(dev().assertElement(iframe));
    };
    _proto.handleTcfMessage_ = function handleTcfMessage_(event) {
      var data = getData(event);
      if (!data || !data["__tcfapiCall"]) {
        return;
      }
      this.tcfApiCommandManager_.handleTcfCommand(data, event.source);
    };
    return AmpConsent2;
  }(AMP.BaseElement);
  AMP.registerElement("amp-consent", AmpConsent, CSS2);
  AMP.registerServiceForDoc(NOTIFICATION_UI_MANAGER, NotificationUiManager);
  AMP.registerServiceForDoc(CONSENT_STATE_MANAGER2, ConsentStateManager);
  AMP.registerServiceForDoc(CONSENT_POLICY_MANAGER, ConsentPolicyManager);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-consent-0.1.max.js.map
