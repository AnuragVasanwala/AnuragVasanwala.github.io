(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-addthis",ev:"0.1",l:true,f:(function(AMP,_){
(function() {
  // extensions/amp-addthis/0.1/constants.js
  var CONFIGURATION_EVENT = "addthis.amp.configuration";
  var SHARE_EVENT = "addthis.share";
  var ORIGIN = "https://s7.addthis.com";
  var API_SERVER = "https://m.addthis.com";
  var COOKIELESS_API_SERVER = "https://m.addthisedge.com";
  var SHARECOUNTER_SERVER = "https://api-public.addthis.com";
  var ICON_SIZE = "32";
  var ALT_TEXT = "AddThis Website Tools";
  var SHARE_CONFIG_KEYS = ["url", "title", "media", "description", "email_template", "email_vars", "passthrough", "url_transforms"];
  var AT_CONFIG_KEYS = ["services_exclude", "services_compact", "services_expanded", "services_custom", "ui_click", "ui_disable", "ui_delay", "ui_hover_direction", "ui_language", "ui_offset_top", "ui_offset_left", "ui_tabindex", "track_addressbar", "track_clickback", "ga_property", "ga_social"];
  var RE_ALPHA = /[A-Z]/gi;
  var RE_NONALPHA = /[^a-zA-Z]/g;
  var RE_WHITESPACE = /\s/g;

  // extensions/amp-addthis/0.1/addthis-utils/monitors/active-tools-monitor.js
  var RE_NUMDASH = /[0-9\-].*/;
  var ActiveToolsMonitor = /* @__PURE__ */ function() {
    function ActiveToolsMonitor2() {
      this.activePcos_ = {};
    }
    var _proto = ActiveToolsMonitor2.prototype;
    _proto.record = function record(widget) {
      var pco = (widget.id || widget.pco || "").replace(RE_NUMDASH, "");
      if (!pco || this.activePcos_[pco] || !RE_ALPHA.test(pco)) {
        return;
      }
      this.activePcos_[pco] = pco;
    };
    _proto.recordProductCode = function recordProductCode(productCode) {
      var pco = productCode;
      if (!pco || this.activePcos_[pco] || !RE_ALPHA.test(pco)) {
        return;
      }
      this.activePcos_[pco] = pco;
    };
    _proto.getActivePcos = function getActivePcos() {
      return Object.keys(this.activePcos_);
    };
    return ActiveToolsMonitor2;
  }();

  // build/amp-addthis-0.1.css.js
  var CSS2 = 'amp-addthis[data-widget-type=messages]{position:fixed!important;width:100%!important;top:0}amp-addthis .i-amphtml-addthis-close{right:10px!important;top:10px!important;width:32px!important;height:32px!important;opacity:0.5!important;float:right!important;cursor:pointer!important;position:relative!important;z-index:1!important;background-color:transparent!important;border:none!important}amp-addthis .i-amphtml-addthis-close:hover{opacity:1!important}.i-amphtml-addthis-close:after,amp-addthis .i-amphtml-addthis-close:before{position:absolute;content:" ";height:20px;width:2px;background-color:#fff}amp-addthis .i-amphtml-addthis-close:before{transform:rotate(45deg)}amp-addthis .i-amphtml-addthis-close:after{transform:rotate(-45deg)}@media only screen and (max-width:979px){amp-addthis[data-widget-type=floating]{position:fixed!important;width:100%!important;height:50px;bottom:0}}@media only screen and (min-width:979px){amp-addthis[data-widget-type=floating]{position:fixed!important;width:70px!important;height:320px!important;top:200px}}\n/*# sourceURL=/extensions/amp-addthis/0.1/amp-addthis.css*/';

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
  function toArray(arrayLike) {
    return arrayLike ? Array.prototype.slice.call(arrayLike) : [];
  }
  var isArray = Array.isArray;
  function arrayOrSingleItemToArray(arrayOrSingleItem) {
    return isArray(arrayOrSingleItem) ? arrayOrSingleItem : [
      arrayOrSingleItem
    ];
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

  // src/core/error/message-helpers.js
  var USER_ERROR_SENTINEL = "\u200B\u200B\u200B";
  var USER_ERROR_EMBED_SENTINEL = "\u200B\u200B\u200B\u200B";

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
  function listen(element, eventType, listener, opt_evtListenerOpts) {
    return internalListenImplementation(element, eventType, listener, opt_evtListenerOpts);
  }
  function getData(event) {
    return event.data;
  }

  // extensions/amp-addthis/0.1/addthis-utils/monitors/click-monitor.js
  var ClickMonitor = /* @__PURE__ */ function() {
    function ClickMonitor2() {
      this.iframeClickMap_ = {};
      this.pageClicks_ = 0;
      this.lastSelection_ = null;
      this.win_ = null;
    }
    var _proto = ClickMonitor2.prototype;
    _proto.startForDoc = function startForDoc(ampDoc) {
      this.win_ = ampDoc.win;
      this.lastSelection_ = this.win_.document.activeElement;
      listen(this.win_, "blur", this.checkSelection_.bind(this));
      listen(this.win_, "click", this.onPageClick_.bind(this));
    };
    _proto.checkSelection_ = function checkSelection_() {
      var activeElement = this.win_.document.activeElement;
      if (!activeElement) {
        return;
      }
      var changeOccurred = activeElement !== this.lastSelection_;
      if (activeElement.tagName === "IFRAME" && changeOccurred) {
        this.incrementFrameClick_(activeElement);
      }
      this.lastSelection_ = activeElement;
    };
    _proto.onPageClick_ = function onPageClick_() {
      this.pageClicks_++;
      this.lastSelection_ = this.win_.document.activeElement;
    };
    _proto.incrementFrameClick_ = function incrementFrameClick_(activeElement) {
      var trimSrc = activeElement.src.split("://").pop();
      if (!this.iframeClickMap_[trimSrc]) {
        this.iframeClickMap_[trimSrc] = 1;
      } else {
        this.iframeClickMap_[trimSrc]++;
      }
    };
    _proto.getPageClicks = function getPageClicks() {
      return this.pageClicks_;
    };
    _proto.getIframeClickString = function getIframeClickString() {
      var _this = this;
      return Object.keys(this.iframeClickMap_).map(function(key) {
        return key + "|" + _this.iframeClickMap_[key];
      }).join(",");
    };
    return ClickMonitor2;
  }();

  // extensions/amp-addthis/0.1/addthis-utils/mode.js
  function getAddThisMode(_) {
    var _getAddThisModeObject = getAddThisModeObject(_), hasProductCode = _getAddThisModeObject.hasProductCode, hasPubId = _getAddThisModeObject.hasPubId, hasWidgetId = _getAddThisModeObject.hasWidgetId;
    if (hasPubId) {
      if (hasWidgetId && !hasProductCode) {
        return 1;
      } else if (!hasWidgetId && hasProductCode) {
        return 2;
      }
    } else if (!hasWidgetId && hasProductCode) {
      return 3;
    }
    return -1;
  }
  function getAddThisModeObject(mode10) {
    var productCode = mode10.productCode, pubId = mode10.pubId, widgetId = mode10.widgetId;
    var hasPubId = isPubId(pubId);
    var hasWidgetId = isWidgetId(widgetId);
    var hasProductCode = typeof productCode === "string" && (productCode === "shin" || productCode === "shfs");
    return {
      hasPubId: hasPubId,
      hasWidgetId: hasWidgetId,
      hasProductCode: hasProductCode
    };
  }
  function isPubId(candidate) {
    return typeof candidate === "string" && candidate.length > 0;
  }
  function isWidgetId(candidate) {
    return typeof candidate === "string" && candidate.length === 4;
  }
  function isProductCode(candidate) {
    return candidate === "shin" || candidate === "shfs";
  }

  // extensions/amp-addthis/0.1/config-manager.js
  var RequestStatus = {
    NOT_REQUESTED: 0,
    REQUESTED: 1,
    COMPLETED: 2
  };
  var ConfigManager = /* @__PURE__ */ function() {
    function ConfigManager2() {
      this.dataForPubId_ = {};
      this.configProviderIframes_ = [];
      this.activeToolsMonitor_ = null;
    }
    var _proto = ConfigManager2.prototype;
    _proto.receiveConfiguration = function receiveConfiguration(data) {
      var _this = this;
      var config = data["config"];
      var pubId = data["pubId"];
      var source = data["source"];
      var isProviderIframe = this.configProviderIframes_.some(function(iframe) {
        return iframe.contentWindow === source;
      });
      if (!isProviderIframe) {
        return;
      }
      var pubData = this.dataForPubId_[pubId];
      pubData.config = config;
      pubData.requestStatus = RequestStatus.COMPLETED;
      var iframeData = pubData.iframeData;
      iframeData.forEach(function(iframeDatum) {
        var atConfig = iframeDatum.atConfig, containerClassName = iframeDatum.containerClassName, iframe = iframeDatum.iframe, productCode = iframeDatum.productCode, shareConfig = iframeDatum.shareConfig, widgetId = iframeDatum.widgetId;
        _this.sendConfiguration_({
          iframe: iframe,
          widgetId: widgetId,
          pubId: pubId,
          shareConfig: shareConfig,
          atConfig: atConfig,
          productCode: productCode,
          containerClassName: containerClassName
        });
      });
    };
    _proto.sendConfiguration_ = function sendConfiguration_(input) {
      var atConfig = input.atConfig, containerClassName = input.containerClassName, iframe = input.iframe, productCode = input.productCode, pubId = input.pubId, shareConfig = input.shareConfig, widgetId = input.widgetId;
      var pubData = this.dataForPubId_[pubId];
      var dashboardConfig = pubData.config, configRequestStatus = pubData.requestStatus;
      var jsonToSend = dict({
        "event": CONFIGURATION_EVENT,
        "shareConfig": shareConfig,
        "atConfig": atConfig,
        "pubId": pubId,
        "widgetId": widgetId,
        "productCode": productCode,
        "containerClassName": containerClassName,
        "configRequestStatus": configRequestStatus,
        "dashboardConfig": dashboardConfig
      });
      if (dashboardConfig && dashboardConfig.widgets && Object.keys(dashboardConfig.widgets).length > 0) {
        var mode10 = getAddThisMode({
          pubId: pubId,
          widgetId: widgetId,
          productCode: productCode
        });
        switch (mode10) {
          case 1:
            if (widgetId && dashboardConfig.widgets[widgetId]) {
              this.activeToolsMonitor_.record(dashboardConfig.widgets[widgetId]);
            }
            break;
          case 2:
            if (productCode) {
              this.activeToolsMonitor_.recordProductCode(productCode);
            }
            break;
          case 3:
            if (productCode) {
              this.activeToolsMonitor_.recordProductCode(productCode);
            }
            return;
          default:
            return;
        }
      }
      iframe.contentWindow.postMessage(JSON.stringify(jsonToSend), ORIGIN);
      if (configRequestStatus === RequestStatus.NOT_REQUESTED) {
        this.configProviderIframes_.push(iframe);
        pubData.requestStatus = RequestStatus.REQUESTED;
      }
    };
    _proto.register = function register(config) {
      var _this2 = this;
      var activeToolsMonitor2 = config.activeToolsMonitor, atConfig = config.atConfig, containerClassName = config.containerClassName, iframe = config.iframe, iframeLoadPromise = config.iframeLoadPromise, productCode = config.productCode, pubId = config.pubId, shareConfig = config.shareConfig, widgetId = config.widgetId;
      if (!this.activeToolsMonitor_) {
        this.activeToolsMonitor_ = activeToolsMonitor2;
      }
      if (!this.dataForPubId_[pubId]) {
        this.dataForPubId_[pubId] = {};
      }
      var pubData = this.dataForPubId_[pubId];
      if (!pubData.requestStatus) {
        pubData.requestStatus = RequestStatus.NOT_REQUESTED;
      }
      if (!pubData.iframeData) {
        pubData.iframeData = [];
      }
      pubData.iframeData.push({
        iframe: iframe,
        shareConfig: shareConfig,
        atConfig: atConfig,
        widgetId: widgetId,
        productCode: productCode,
        containerClassName: containerClassName
      });
      iframeLoadPromise.then(function() {
        return _this2.sendConfiguration_({
          iframe: iframe,
          pubId: pubId,
          widgetId: widgetId,
          shareConfig: shareConfig,
          atConfig: atConfig,
          productCode: productCode,
          containerClassName: containerClassName
        });
      });
    };
    _proto.unregister = function unregister(param) {
      var iframe = param.iframe, pubId = param.pubId;
      this.configProviderIframes_ = this.configProviderIframes_.filter(function(providerFrame) {
        return providerFrame !== iframe;
      });
      var pubData = this.dataForPubId_[pubId] || {};
      if (pubData.iframeData) {
        pubData.iframeData = pubData.iframeData.filter(function(iframeDatum) {
          return iframeDatum.iframe !== iframe;
        });
      }
    };
    return ConfigManager2;
  }();
  ConfigManager.PubIdData;
  ConfigManager.IframeDatum;

  // extensions/amp-addthis/0.1/addthis-utils/monitors/dwell-monitor.js
  var DwellMonitor = /* @__PURE__ */ function() {
    function DwellMonitor2() {
      this.dwellTime_ = 0;
      this.ampdoc_ = null;
    }
    var _proto = DwellMonitor2.prototype;
    _proto.startForDoc = function startForDoc(ampDoc) {
      this.ampdoc_ = ampDoc;
      this.ampdoc_.onVisibilityChanged(this.listener.bind(this));
    };
    _proto.listener = function listener() {
      if (!this.ampdoc_.isVisible()) {
        var lastVisibleTime = this.ampdoc_.getLastVisibleTime() || 0;
        this.dwellTime_ += Date.now() - lastVisibleTime;
      }
    };
    _proto.getDwellTime = function getDwellTime() {
      return this.dwellTime_;
    };
    return DwellMonitor2;
  }();

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

  // extensions/amp-addthis/0.1/post-message-dispatcher.js
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
  var PostMessageDispatcher = /* @__PURE__ */ function() {
    function PostMessageDispatcher2() {
      this.listeners_ = {};
    }
    var _proto = PostMessageDispatcher2.prototype;
    _proto.on = function on(eventType, listener) {
      if (!this.listeners_[eventType]) {
        this.listeners_[eventType] = [];
      }
      this.listeners_[eventType].push(listener);
    };
    _proto.emit_ = function emit_(eventType, eventData) {
      if (!this.listeners_[eventType]) {
        return;
      }
      this.listeners_[eventType].forEach(function(listener) {
        return listener(eventData);
      });
    };
    _proto.getMessageData_ = function getMessageData_(event) {
      var data = getData(event);
      if (isObject(data)) {
        return data;
      }
      if (typeof data === "string" && data.startsWith("{")) {
        return tryParseJson(data);
      }
      return void 0;
    };
    _proto.handleAddThisMessage = function handleAddThisMessage(event) {
      if (event.origin !== ORIGIN || !getData(event)) {
        return;
      }
      var data = this.getMessageData_(event) || {};
      switch (data["event"]) {
        case CONFIGURATION_EVENT: {
          this.emit_(CONFIGURATION_EVENT, _extends({}, data, {
            "source": event.source
          }));
          break;
        }
        case SHARE_EVENT: {
          this.emit_(SHARE_EVENT, data);
          break;
        }
      }
    };
    return PostMessageDispatcher2;
  }();

  // src/core/window/index.js
  function toWin(winOrNull) {
    return winOrNull;
  }
  function getWin(node) {
    return toWin((node.ownerDocument || node).defaultView);
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

  // src/core/data-structures/promise.js
  var Deferred = function Deferred2() {
    var _this = this;
    this.promise = new Promise(function(res, rej) {
      _this.resolve = res;
      _this.reject = rej;
    });
  };

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

  // extensions/amp-addthis/0.1/addthis-utils/monitors/scroll-monitor.js
  var ScrollMonitor = /* @__PURE__ */ function() {
    function ScrollMonitor2() {
      this.viewport_ = null;
      this.initialViewHeight_ = 0;
      this.maxScrollTop_ = 0;
      this.maxScrollPlusHeight_ = 0;
    }
    var _proto = ScrollMonitor2.prototype;
    _proto.startForDoc = function startForDoc(ampDoc) {
      this.viewport_ = Services.viewportForDoc(ampDoc);
      this.initialViewHeight_ = this.viewport_.getHeight() || 0;
      this.maxScrollTop_ = this.viewport_.getScrollTop() || 0;
      this.maxScrollPlusHeight_ = this.maxScrollTop_ + this.initialViewHeight_;
      this.viewport_.onScroll(this.listener.bind(this));
    };
    _proto.listener = function listener() {
      var scrollTop = this.viewport_.getScrollTop() || 0;
      this.maxScrollTop_ = Math.max(this.maxScrollTop_, scrollTop);
      this.maxScrollPlusHeight_ = Math.max(this.maxScrollPlusHeight_, (this.viewport_.getHeight() || 0) + scrollTop);
    };
    _proto.getInitialViewHeight = function getInitialViewHeight() {
      return this.initialViewHeight_;
    };
    _proto.getScrollHeight = function getScrollHeight() {
      return this.maxScrollPlusHeight_ - this.maxScrollTop_;
    };
    return ScrollMonitor2;
  }();

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
  function addParamsToUrl(url, params) {
    return appendEncodedParamStringToUrl(url, serializeQueryString(params));
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

  // extensions/amp-addthis/0.1/addthis-utils/cuid.js
  var RE_CUID = /^[0-9a-f]{16}$/;
  var MAX_HEX = 4294967295;
  var CUID_SESSION_TIME = Date.now();
  var getDateFromCuid = function getDateFromCuid2(cuid) {
    var date = new Date();
    try {
      date = new Date(parseInt(cuid.substr(0, 8), 16) * 1e3);
    } catch (e) {
    }
    return date;
  };
  var isCuidInFuture = function isCuidInFuture2(cuid) {
    var date = getDateFromCuid(cuid);
    date.setDate(date.getDate() - 1);
    return isDateInFuture(date);
  };
  var isDateInFuture = function isDateInFuture2(date) {
    var now = new Date();
    if (date.getFullYear() < now.getFullYear()) {
      return false;
    }
    var yearIsLater = date.getFullYear() > now.getFullYear();
    var yearIsSame = date.getFullYear() === now.getFullYear();
    var monthIsLater = date.getMonth() > now.getMonth();
    var monthIsSame = date.getMonth() === now.getMonth();
    var dateIsLater = date.getDate() > now.getDate();
    return yearIsLater || yearIsSame && monthIsLater || yearIsSame && monthIsSame && dateIsLater;
  };
  var isValidCUID = function isValidCUID2(cuid) {
    return Boolean(cuid && cuid.match(RE_CUID) && !isCuidInFuture(cuid));
  };
  var createCUID = function createCUID2() {
    return (CUID_SESSION_TIME / 1e3 & MAX_HEX).toString(16) + ("00000000" + Math.floor(Math.random() * (MAX_HEX + 1)).toString(16)).slice(-8);
  };

  // extensions/amp-addthis/0.1/addthis-utils/session.js
  var sessionId = createCUID();
  var getSessionId = function getSessionId2() {
    return sessionId;
  };

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

  // extensions/amp-addthis/0.1/addthis-utils/pixel.js
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
  var RE_IFRAME = /#iframe$/;
  var pixelatorFrameTitle = "Pxltr Frame";
  var groupPixelsByTime = function groupPixelsByTime2(pixelList) {
    var cleanedPixels = pixelList.map(function(pixel) {
      var delay = pixel.delay;
      return _extends2({}, pixel, {
        delay: Array.isArray(delay) && delay.length ? delay : [0]
      });
    });
    var delayMap = cleanedPixels.map(function(pixel) {
      var delays = pixel.delay;
      return delays.map(function(delay) {
        return {
          delay: delay,
          pixels: [pixel]
        };
      });
    }).reduce(function(a, b) {
      return a.concat(b);
    }, []).reduce(function(currentDelayMap, curDelay) {
      var delay = curDelay.delay, pixels = curDelay.pixels;
      if (!currentDelayMap[delay]) {
        currentDelayMap[delay] = [];
      }
      currentDelayMap[delay] = currentDelayMap[delay].concat(pixels);
      return currentDelayMap;
    }, {});
    return Object.keys(delayMap).map(function(delay) {
      return {
        delay: Number(delay),
        pixels: delayMap[delay]
      };
    });
  };
  var pixelDrop = function pixelDrop2(url, ampDoc) {
    var doc = ampDoc.win.document;
    var ampPixel = createElementWithAttributes(doc, "amp-pixel", dict({
      "layout": "nodisplay",
      "referrerpolicy": "no-referrer",
      "src": url
    }));
    doc.body.appendChild(ampPixel);
  };
  var getIframeName = function getIframeName2(url) {
    return parseUrlDeprecated(url).host.split(".").concat(pixelatorFrameTitle.toLowerCase().replace(/\s/, "_"));
  };
  var iframeDrop = function iframeDrop2(url, ampDoc, data) {
    var name = data.name, title = data.title;
    var doc = ampDoc.win.document;
    var iframe = createElementWithAttributes(doc, "iframe", dict({
      "frameborder": 0,
      "width": 0,
      "height": 0,
      "name": name,
      "title": title,
      "src": url
    }));
    toggle(iframe, false);
    setStyles(iframe, {
      position: "absolute",
      clip: "rect(0px 0px 0px 0px)"
    });
    doc.body.appendChild(iframe);
  };
  var dropPixelatorPixel = function dropPixelatorPixel2(url, ampDoc) {
    var requiresIframe = RE_IFRAME.test(url);
    if (url.indexOf("//") === -1) {
      return;
    }
    if (requiresIframe) {
      var name = getIframeName(url);
      return iframeDrop(url, ampDoc, {
        name: name,
        title: pixelatorFrameTitle
      });
    }
    return pixelDrop(url, ampDoc);
  };
  var dropPixelGroups = function dropPixelGroups2(pixels, options) {
    var ampDoc = options.ampDoc, sid = options.sid;
    var pixelGroups = groupPixelsByTime(pixels);
    pixelGroups.forEach(function(pixelGroup) {
      var delay = pixelGroup.delay, pixels2 = pixelGroup.pixels;
      setTimeout(function() {
        var pids = pixels2.map(function(pixel) {
          dropPixelatorPixel(pixel.url, ampDoc);
          return pixel.id;
        });
        var data = dict({
          "delay": "" + delay,
          "ids": pids.join("-"),
          "sid": sid
        });
        var url = addParamsToUrl(COOKIELESS_API_SERVER + "/live/prender", data);
        if (ampDoc.win.navigator.sendBeacon) {
          ampDoc.win.navigator.sendBeacon(url, "{}");
        } else {
          pixelDrop(url, ampDoc);
        }
      }, delay * 1e3);
    });
  };
  function getJsonObject_(object) {
    var params = dict();
    if (object === void 0 || object === null) {
      return params;
    }
    var stringifiedObject = typeof object === "string" ? object : JSON.stringify(object);
    try {
      var parsedObject = parseJson(stringifiedObject);
      if (isObject(parsedObject)) {
        for (var key in parsedObject) {
          params[key] = parsedObject[key];
        }
      }
    } catch (error) {
    }
    return params;
  }
  var callPixelEndpoint = function callPixelEndpoint2(event) {
    var ampDoc = event.ampDoc, endpoint = event.endpoint;
    var eventData = getJsonObject_(getData(event));
    var url = addParamsToUrl(endpoint, eventData);
    Services.xhrFor(ampDoc.win).fetchJson(url, {
      mode: "cors",
      method: "GET",
      ampCors: false,
      credentials: "include"
    }).then(function(res) {
      return res.json();
    }).then(function(json) {
      var _json$pixels = json.pixels, pixels = _json$pixels === void 0 ? [] : _json$pixels;
      if (pixels.length > 0) {
        dropPixelGroups(pixels, {
          sid: eventData["sid"],
          ampDoc: ampDoc
        });
      }
    }, function() {
    });
  };

  // extensions/amp-addthis/0.1/addthis-utils/eng.js
  var getEngData = function getEngData2(params) {
    var ampDoc = params.ampDoc, loc = params.loc, monitors = params.monitors, pubId = params.pubId;
    var activeToolsMonitor2 = monitors.activeToolsMonitor, clickMonitor2 = monitors.clickMonitor, dwellMonitor2 = monitors.dwellMonitor, scrollMonitor2 = monitors.scrollMonitor;
    var hash = loc.hash, host = loc.host, pathname = loc.pathname;
    var viewport = Services.viewportForDoc(ampDoc);
    return {
      al: activeToolsMonitor2.getActivePcos().join(",") || void 0,
      amp: 1,
      dc: 1,
      dp: host,
      dt: dwellMonitor2.getDwellTime(),
      fp: pathname.replace(hash, ""),
      ict: clickMonitor2.getIframeClickString(),
      ivh: scrollMonitor2.getInitialViewHeight(),
      pct: clickMonitor2.getPageClicks(),
      pfm: ampDoc.win.navigator.sendBeacon ? 0 : 1,
      ph: viewport.getHeight(),
      pub: pubId,
      sh: scrollMonitor2.getScrollHeight(),
      sid: getSessionId()
    };
  };
  var callEng = function callEng2(props) {
    var object = getEngData(props);
    var data = dict({
      "al": object.al,
      "amp": object.amp,
      "dc": object.dc,
      "dp": object.dp,
      "dt": object.dt,
      "fp": object.fp,
      "ict": object.ict,
      "ivh": object.ivh,
      "pct": object.pct,
      "pfm": object.pfm,
      "ph": object.ph,
      "pub": object.pub,
      "sh": object.sh,
      "sid": object.sid
    });
    var url = addParamsToUrl(API_SERVER + "/live/red_lojson/100eng.json", data);
    var ampDoc = props.ampDoc;
    if (ampDoc.win.navigator.sendBeacon) {
      ampDoc.win.navigator.sendBeacon(url, "{}");
    } else {
      pixelDrop(url, ampDoc);
    }
  };

  // extensions/amp-addthis/0.1/addthis-utils/meta.js
  var getMetaElements = function getMetaElements2(doc) {
    return doc.head.querySelectorAll("meta");
  };
  var getDetailsForMeta = function getDetailsForMeta2(meta) {
    var name = meta.getAttribute("property") || meta.name || "";
    var lowerName = name.toLowerCase();
    var content = meta.content || "";
    return {
      name: lowerName,
      content: content
    };
  };
  var getOgImage = function getOgImage2(doc) {
    var ogImage = doc.head.querySelector('meta[property="og:image"]');
    if (ogImage) {
      return ogImage.content;
    }
    return "";
  };

  // extensions/amp-addthis/0.1/addthis-utils/rot13.js
  var CHAR_Z_LOWER = 122;
  var CHAR_Z_UPPER = 90;
  var rot13 = function rot132(input) {
    return input.replace(RE_ALPHA, function(match) {
      var code = match.charCodeAt(0);
      var zChar = code <= CHAR_Z_UPPER ? CHAR_Z_UPPER : CHAR_Z_LOWER;
      return String.fromCharCode(zChar >= code + 13 ? code + 13 : code - 13);
    });
  };
  var rot13Array = function rot13Array2(input) {
    return input.reduce(function(rot13Map, str) {
      rot13Map[rot13(str)] = 1;
      return rot13Map;
    }, {});
  };

  // extensions/amp-addthis/0.1/addthis-utils/classify.js
  var MAX_KEYWORD_LENGTH = 200;
  var PORN_BIT = 1;
  var REFERRER_BITS = {
    DIRECT: 0,
    SEARCH: 1,
    ON_DOMAIN: 2,
    OFF_DOMAIN: 4
  };
  var RE_SEARCH_TERMS = /^(?:q|search|bs|wd|p|kw|keyword|query|qry|querytext|text|searchcriteria|searchstring|searchtext|sp_q)=(.*)/i;
  var RE_SEARCH_REFERRER = /ws\/results\/(web|images|video|news)/;
  var RE_SEARCH_GOOGLE = /google.*\/(search|url|aclk|m\?)/;
  var RE_SEARCH_AOL = /aol.*\/aol/;
  var com = ".com/";
  var org = ".org/";
  var pornHash = rot13Array(["cbea", "cbeab", "kkk", "zvys", "gvgf", "shpxf", "chfflyvcf", "pernzcvr", "svfgvat", "wvmm", "fcybbtr", "flovna"]);
  var strictPornHash = rot13Array(["phz"]);
  var classifyString = function classifyString2(keywordString, nonStrictMatch) {
    if (keywordString === void 0) {
      keywordString = "";
    }
    if (nonStrictMatch === void 0) {
      nonStrictMatch = false;
    }
    var classification = 0;
    var keywords = keywordString.toLowerCase().split(RE_NONALPHA);
    for (var i = 0; i < keywords.length; i++) {
      var keyword = keywords[i];
      if (pornHash[keyword] || !nonStrictMatch && strictPornHash[keyword]) {
        classification |= PORN_BIT;
        break;
      }
    }
    return classification;
  };
  var classifyRating = function classifyRating2(rating) {
    if (rating === void 0) {
      rating = "";
    }
    var classification = 0;
    rating = rating.toLowerCase().replace(RE_WHITESPACE, "");
    if (rating === "mature" || rating === "adult" || rating === "rta-5042-1996-1400-1577-rta") {
      classification |= PORN_BIT;
    }
    return classification;
  };
  var extractKeywordsFromContent = function extractKeywordsFromContent2(content) {
    var keywords = [];
    var contentSplit = content.split(",");
    var keywordsSize = 0;
    for (var i = 0; i < contentSplit.length; i++) {
      var keyword = (contentSplit[i] || "").trim();
      if (!keyword) {
        continue;
      }
      if (keyword.length + keywordsSize + 1 >= MAX_KEYWORD_LENGTH) {
        break;
      }
      keywords.push(keyword);
      keywordsSize += keyword.length + 1;
    }
    return keywords;
  };
  var getSearchString = function getSearchString2(url) {
    var terms = url.split("?").pop().toLowerCase().split("&");
    var matches2;
    for (var i = 0; i < terms.length; i++) {
      matches2 = RE_SEARCH_TERMS.exec(terms[i]);
      if (matches2) {
        return matches2[1];
      }
    }
    return void 0;
  };
  var isSearchUrl = function isSearchUrl2(url) {
    if (url === void 0) {
      url = "";
    }
    var lowerUrl = url.toLowerCase();
    if (lowerUrl.match(RE_SEARCH_REFERRER)) {
      return true;
    }
    if (getSearchString(url) === void 0) {
      return false;
    }
    return lowerUrl.indexOf("addthis") === -1 && (RE_SEARCH_GOOGLE.test(lowerUrl) || RE_SEARCH_AOL.test(lowerUrl) || lowerUrl.indexOf("/pagead/aclk?") > -1 || lowerUrl.indexOf(com + "url") > -1 || lowerUrl.indexOf(com + "l.php") > -1 || lowerUrl.indexOf("/search?") > -1 || lowerUrl.indexOf("/search/?") > -1 || lowerUrl.indexOf("search?") > -1 || lowerUrl.indexOf("yandex.ru/clck/jsredir?") > -1 || lowerUrl.indexOf(com + "search") > -1 || lowerUrl.indexOf(org + "search") > -1 || lowerUrl.indexOf("/search.html?") > -1 || lowerUrl.indexOf("search/results.") > -1 || lowerUrl.indexOf(com + "s?bs") > -1 || lowerUrl.indexOf(com + "s?wd") > -1 || lowerUrl.indexOf(com + "mb?search") > -1 || lowerUrl.indexOf(com + "mvc/search") > -1 || lowerUrl.indexOf(com + "web") > -1 || lowerUrl.indexOf("hotbot" + com) > -1);
  };
  var classifyPage = function classifyPage2(pageInfo, metaElements) {
    var bitmask = classifyString(pageInfo.title) | classifyString(pageInfo.hostname, true);
    metaElements.forEach(function(metaElement) {
      var _getDetailsForMeta = getDetailsForMeta(metaElement), content = _getDetailsForMeta.content, name = _getDetailsForMeta.name;
      if (name === "description" || name === "keywords") {
        bitmask |= classifyString(content);
      }
      if (name === "rating") {
        bitmask |= classifyRating(content);
      }
    });
    return bitmask;
  };
  var classifyReferrer = function classifyReferrer2(referrerString, parsedReferrer, parsedHref) {
    var bitmask = REFERRER_BITS.DIRECT;
    if (referrerString && parsedReferrer) {
      if (parsedReferrer.host === parsedHref.host) {
        bitmask |= REFERRER_BITS.ON_DOMAIN;
      } else {
        bitmask |= REFERRER_BITS.OFF_DOMAIN;
      }
      if (isSearchUrl(referrerString)) {
        bitmask |= REFERRER_BITS.SEARCH;
      }
    }
    return bitmask;
  };
  var isProductPage = function isProductPage2(doc, metaElements) {
    if (doc.getElementById("product") || (doc.getElementsByClassName("product") || []).length > 0 || doc.getElementById("productDescription") || doc.getElementById("page-product") || doc.getElementById("vm_cart_products") || window["Virtuemart"]) {
      return true;
    }
    var ogTags = metaElements.reduce(function(tags, metaElement) {
      var _getDetailsForMeta2 = getDetailsForMeta(metaElement), content = _getDetailsForMeta2.content, name = _getDetailsForMeta2.name;
      if (name.startsWith("og:")) {
        var ogProperty = name.split(":").pop();
        tags[ogProperty] = content;
      }
      return tags;
    }, {});
    return ogTags.type === "product";
  };
  var getKeywordsString = function getKeywordsString2(metaElements) {
    var keywords = metaElements.filter(function(meta) {
      return getDetailsForMeta(meta).name.toLowerCase() === "keywords";
    }).map(function(meta) {
      return extractKeywordsFromContent(getDetailsForMeta(meta).content);
    }).reduce(function(kws, subKeywords) {
      return kws.concat(subKeywords);
    }, []);
    return keywords.join(",");
  };

  // extensions/amp-addthis/0.1/addthis-utils/fragment.js
  var RE_ADDTHIS_FRAGMENT = /^\.[a-z0-9\-_]{11}(\.[a-z0-9_]+)?$/i;
  var getModernFragment = function getModernFragment2(url) {
    var frag = url.split("#").pop();
    frag = frag.split(";").shift();
    if (RE_ADDTHIS_FRAGMENT.test(frag)) {
      return frag;
    } else {
      return void 0;
    }
  };
  var isAddthisFragment = function isAddthisFragment2(url) {
    if (getModernFragment(url)) {
      return true;
    } else {
      var frag = url.split("#").pop();
      if (isValidCUID(frag) || url.indexOf("#at_pco=") > -1) {
        return true;
      }
    }
    return false;
  };
  var clearOurFragment = function clearOurFragment2(url) {
    if (isAddthisFragment(url)) {
      return url.split("#").shift();
    }
    return url;
  };
  var getFragmentId = function getFragmentId2(url) {
    var fragment = getModernFragment(url);
    if (fragment) {
      return fragment.split(".").slice(1).shift();
    } else {
      return void 0;
    }
  };
  var getServiceFromUrlFragment = function getServiceFromUrlFragment2(url) {
    var fragment = getModernFragment(url);
    if (fragment) {
      return fragment.split(".").slice(2).shift();
    } else {
      return void 0;
    }
  };

  // extensions/amp-addthis/0.1/addthis-utils/lojson.js
  var VIEW_EVENT_CHANNEL = 100;
  var nonTrackedDomainMatcher = /\.gov|\.mil/;
  function getLojsonData(jsonData) {
    var ampDoc = jsonData.ampDoc, atConfig = jsonData.atConfig, loc = jsonData.loc, pubId = jsonData.pubId, referrer = jsonData.referrer, title = jsonData.title;
    var hash = loc.hash, host = loc.host, hostname = loc.hostname, href = loc.href, pathname = loc.pathname, port = loc.port, protocol = loc.protocol, search = loc.search;
    var pageInfo = {
      du: href.split("#").shift(),
      hostname: hostname,
      href: href,
      referrer: referrer,
      search: search,
      pathname: pathname,
      title: title,
      hash: hash,
      protocol: protocol,
      port: port
    };
    var parsedReferrer = referrer ? parseUrlDeprecated(referrer) : {};
    var langParts = atConfig["ui_language"].split("-");
    var langWithoutLocale = langParts[0];
    var locale = langParts.slice(1);
    var service = getServiceFromUrlFragment(pageInfo.du);
    var win = ampDoc.win;
    var metaElements = toArray(getMetaElements(win.document));
    var isDNTEnabled = win.navigator.doNotTrack && win.navigator.doNotTrack !== "unspecified" && win.navigator.doNotTrack !== "no" && win.navigator.doNotTrack !== "0";
    return dict({
      "amp": 1,
      "bl": 0 | (atConfig["use_cookies"] !== false ? 1 : 0) | (atConfig["track_textcopy"] === true ? 2 : 0) | (atConfig["track_addressbar"] === true ? 4 : 0),
      "cb": classifyPage(pageInfo, metaElements),
      "colc": Date.now(),
      "ct": atConfig["track_clickback"] !== false && atConfig["track_linkback"] !== false ? 1 : 0,
      "dc": 1,
      "dp": host,
      "dr": host === parsedReferrer.host ? void 0 : parsedReferrer.host,
      "fcu": service ? "" : getFragmentId(pageInfo.du),
      "fp": parseUrlDeprecated(clearOurFragment(pageInfo.du)).pathname,
      "fr": parsedReferrer.pathname || "",
      "gen": VIEW_EVENT_CHANNEL,
      "ln": langWithoutLocale,
      "lnlc": locale,
      "mk": getKeywordsString(metaElements),
      "of": isDNTEnabled ? 4 : nonTrackedDomainMatcher.test(hostname) ? 1 : 0,
      "pd": isProductPage(win.document, metaElements) ? 1 : 0,
      "pub": pubId,
      "rb": classifyReferrer(referrer, parsedReferrer, parseUrlDeprecated(pageInfo.du)),
      "sid": getSessionId(),
      "skipb": 1,
      "sr": service
    });
  }
  function callLojson(props) {
    var data = getLojsonData(props);
    var endpoint = API_SERVER + "/live/red_lojson/300lo.json";
    callPixelEndpoint({
      ampDoc: props.ampDoc,
      endpoint: endpoint,
      data: data
    });
  }

  // extensions/amp-addthis/0.1/addthis-utils/pjson.js
  var SHARE = 300;
  var getPjsonData = function getPjsonData2(pjson) {
    var ampDoc = pjson.ampDoc, data = pjson.data, loc = pjson.loc, pubId = pjson.pubId, referrer = pjson.referrer, title = pjson.title;
    var hash = loc.hash, hostname = loc.hostname, href = loc.href, pathname = loc.pathname, port = loc.port, protocol = loc.protocol, search = loc.search;
    var pageInfo = {
      du: href.split("#").shift(),
      hostname: hostname,
      href: href,
      referrer: referrer,
      search: search,
      pathname: pathname,
      title: title,
      hash: hash,
      protocol: protocol,
      port: port
    };
    var parsedReferrer = referrer ? parseUrlDeprecated(referrer) : {};
    var win = ampDoc.win;
    var metaElements = toArray(getMetaElements(win.document));
    return {
      amp: 1,
      cb: classifyPage(pageInfo, metaElements),
      dc: 1,
      dest: data.service,
      gen: SHARE,
      mk: getKeywordsString(metaElements),
      pub: pubId,
      rb: classifyReferrer(referrer, parsedReferrer, parseUrlDeprecated(pageInfo.du)),
      sid: getSessionId(),
      url: data.url
    };
  };
  var callPjson = function callPjson2(props) {
    var data = getPjsonData(props);
    var endpoint = API_SERVER + "/live/red_pjson";
    callPixelEndpoint({
      ampDoc: props.ampDoc,
      endpoint: endpoint,
      data: data
    });
  };

  // extensions/amp-addthis/0.1/addthis-utils/get-widget-id-overloaded-with-json-for-anonymous-mode.js
  var overrideKeys = ["backgroundColor", "borderRadius", "counterColor", "counts", "countsFontSize", "desktopPosition", "elements", "hideDevice", "hideEmailSharingConfirmation", "hideLabel", "iconColor", "label", "mobilePosition", "numPreferredServices", "offset", "originalServices", "postShareFollowMsg", "postShareRecommendedMsg", "postShareTitle", "responsive", "shareCountThreshold", "size", "style", "textColor", "thankyou", "titleFontSize", "__hideOnHomepage", "originalServices", "services"];
  function getWidgetOverload(self2) {
    var override = dict({});
    overrideKeys.forEach(function(item) {
      var data = self2.element.getAttribute("data-attr-" + item);
      if (typeof data === "string" || typeof data === "number" || typeof data === "boolean") {
        override[String(item)] = data;
      }
    });
    var overrideString = JSON.stringify(override);
    return overrideString === "{}" ? "" : overrideString;
  }

  // extensions/amp-addthis/0.1/amp-addthis.js
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
  var configManager = new ConfigManager();
  var scrollMonitor = new ScrollMonitor();
  var dwellMonitor = new DwellMonitor();
  var clickMonitor = new ClickMonitor();
  var activeToolsMonitor = new ActiveToolsMonitor();
  var shouldRegisterView = true;
  function getConfigManager() {
    return configManager;
  }
  var AmpAddThis = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpAddThis2, _AMP$BaseElement);
    var _super = _createSuper(AmpAddThis2);
    function AmpAddThis2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.iframe_ = null;
      _this.pubId_ = "";
      _this.widgetId_ = "";
      _this.productCode_ = "";
      _this.canonicalUrl_ = "";
      _this.canonicalTitle_ = "";
      _this.referrer_ = "";
      _this.shareConfig_ = null;
      _this.atConfig_ = null;
      _this.widgetType_ = "";
      _this.mode_ = -1;
      _this.containerClassName_ = "";
      return _this;
    }
    var _proto = AmpAddThis2.prototype;
    _proto.buildCallback = function buildCallback() {
      var _this2 = this;
      var pubId = this.element.getAttribute("data-pub-id") || "";
      var widgetId = this.element.getAttribute("data-widget-id") || "";
      var productCode = this.element.getAttribute("data-product-code") || "";
      this.mode_ = getAddThisMode({
        pubId: pubId,
        widgetId: widgetId,
        productCode: productCode
      });
      if (this.mode_ === -1) {
        if (isPubId(pubId)) {
          if (!isProductCode(productCode) && !isWidgetId(widgetId)) {
            userAssert(widgetId, "Widget id or product code is required for <amp-addthis> %s", this.element);
          } else if (isProductCode(productCode) && isWidgetId(widgetId)) {
            userAssert(productCode, "Only widget id or product code is required <amp-addthis> %s", this.element);
          }
        } else {
          userAssert(pubId, "The data-pub-id attribute is required for <amp-addthis> %s", this.element);
        }
      }
      this.containerClassName_ = this.element.getAttribute("data-class-name") || "";
      this.pubId_ = pubId;
      this.widgetId_ = this.mode_ === 3 ? getWidgetOverload(this) : widgetId;
      this.productCode_ = productCode;
      if (this.productCode_ === "shfs") {
        this.element.setAttribute("data-widget-type", "floating");
      }
      var ampDoc = this.getAmpDoc();
      this.canonicalUrl_ = this.element.getAttribute("data-canonical-url") || Services.documentInfoForDoc(this.element).canonicalUrl || ampDoc.getUrl();
      this.canonicalTitle_ = this.element.getAttribute("data-canonical-title") || ampDoc.win.document.title;
      this.widgetType_ = this.element.getAttribute("data-widget-type");
      this.shareConfig_ = this.getShareConfigAsJsonObject_();
      this.atConfig_ = this.getATConfig_(ampDoc);
      if (shouldRegisterView) {
        shouldRegisterView = false;
        var viewer = Services.viewerForDoc(ampDoc);
        var loc = parseUrlDeprecated(this.canonicalUrl_);
        ampDoc.whenFirstVisible().then(function() {
          return viewer.getReferrerUrl();
        }).then(function(referrer) {
          _this2.referrer_ = referrer;
          callLojson({
            loc: loc,
            title: _this2.canonicalTitle_,
            pubId: _this2.pubId_,
            atConfig: _this2.atConfig_,
            referrer: referrer,
            ampDoc: ampDoc
          });
          dwellMonitor.startForDoc(ampDoc);
          scrollMonitor.startForDoc(ampDoc);
          clickMonitor.startForDoc(ampDoc);
        });
        this.setupListeners_({
          ampDoc: ampDoc,
          loc: loc,
          pubId: this.pubId_
        });
        if (this.element.getAttribute("data-widget-type") === "messages") {
          var closeButton = createElementWithAttributes(this.win.document, "button", dict({
            "class": "i-amphtml-addthis-close"
          }));
          closeButton.onclick = function() {
            return removeElement(_this2.element);
          };
          this.element.appendChild(closeButton);
        }
      }
    };
    _proto.preconnectCallback = function preconnectCallback(opt_onLayout) {
      var preconnect = Services.preconnectFor(this.win);
      var ampdoc2 = this.getAmpDoc();
      preconnect.url(ampdoc2, ORIGIN, opt_onLayout);
      preconnect.url(ampdoc2, API_SERVER, opt_onLayout);
      preconnect.url(ampdoc2, COOKIELESS_API_SERVER, opt_onLayout);
      preconnect.url(ampdoc2, SHARECOUNTER_SERVER, opt_onLayout);
      preconnect.url(ampdoc2, "https://cache.addthiscdn.com", opt_onLayout);
      preconnect.url(ampdoc2, "https://su.addthis.com", opt_onLayout);
    };
    _proto.isAlwaysFixed = function isAlwaysFixed() {
      return this.widgetType_ === "floating";
    };
    _proto.createPlaceholderCallback = function createPlaceholderCallback() {
      var placeholder = createElementWithAttributes(this.win.document, "div", dict({
        "placeholder": ""
      }));
      setStyle(placeholder, "background-color", "#fff");
      var image = createElementWithAttributes(this.win.document, "amp-img", dict({
        "src": "https://cache.addthiscdn.com/icons/v3/thumbs/" + ICON_SIZE + "x" + ICON_SIZE + "/addthis.png",
        "layout": "fixed",
        "width": ICON_SIZE,
        "height": ICON_SIZE,
        "referrerpolicy": "origin",
        "alt": ALT_TEXT
      }));
      placeholder.appendChild(image);
      return placeholder;
    };
    _proto.layoutCallback = function layoutCallback() {
      var iframe = createElementWithAttributes(this.element.ownerDocument, "iframe", dict({
        "frameborder": 0,
        "title": ALT_TEXT,
        "src": ORIGIN + "/dc/amp-addthis.html?_amp_=" + version(),
        "id": this.widgetId_,
        "pco": this.productCode_,
        "containerClassName": this.containerClassName_
      }));
      var iframeLoadPromise = this.loadPromise(iframe);
      applyFillContent(iframe);
      this.element.appendChild(iframe);
      this.iframe_ = iframe;
      configManager.register({
        pubId: this.pubId_,
        widgetId: this.widgetId_,
        productCode: this.productCode_,
        shareConfig: this.shareConfig_,
        atConfig: this.atConfig_,
        containerClassName: this.containerClassName_,
        iframe: iframe,
        iframeLoadPromise: iframeLoadPromise,
        activeToolsMonitor: activeToolsMonitor
      });
      return iframeLoadPromise;
    };
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return isLayoutSizeDefined(layout);
    };
    _proto.unlayoutCallback = function unlayoutCallback() {
      if (this.iframe_) {
        removeElement(this.iframe_);
        configManager.unregister({
          pubId: this.pubId_,
          iframe: this.iframe_
        });
        this.iframe_ = null;
      }
      return true;
    };
    _proto.getShareConfigAsJsonObject_ = function getShareConfigAsJsonObject_() {
      var _this3 = this;
      var params = dict();
      SHARE_CONFIG_KEYS.map(function(key) {
        var value = _this3.element.getAttribute("data-" + key);
        if (value) {
          params[key] = value;
        } else {
          if (key === "url") {
            params[key] = _this3.getAmpDoc().getUrl();
          } else if (key === "title") {
            params[key] = _this3.getAmpDoc().win.document.title;
          } else if (key === "media") {
            params[key] = getOgImage(_this3.getAmpDoc().win.document);
          }
        }
      });
      return params;
    };
    _proto.getATConfig_ = function getATConfig_(ampDoc) {
      var _this4 = this;
      return AT_CONFIG_KEYS.reduce(function(config, key) {
        var value = _this4.element.getAttribute("data-" + key);
        if (value) {
          config[key] = value;
        } else {
          var win = ampDoc.win;
          if (key === "ui_language") {
            config[key] = win.document.documentElement.lang || win.navigator.language || win.navigator.userLanguage || "en";
          }
        }
        return config;
      }, {});
    };
    _proto.setupListeners_ = function setupListeners_(input) {
      var _this5 = this;
      var ampDoc = input.ampDoc, loc = input.loc, pubId = input.pubId;
      listen(ampDoc.win, "pagehide", function() {
        return callEng({
          monitors: {
            dwellMonitor: dwellMonitor,
            scrollMonitor: scrollMonitor,
            clickMonitor: clickMonitor,
            activeToolsMonitor: activeToolsMonitor
          },
          ampDoc: ampDoc,
          loc: loc,
          pubId: pubId
        });
      });
      var postMessageDispatcher = new PostMessageDispatcher();
      var pmHandler = postMessageDispatcher.handleAddThisMessage.bind(postMessageDispatcher);
      listen(ampDoc.win, "message", pmHandler);
      postMessageDispatcher.on(SHARE_EVENT, function(data) {
        return callPjson({
          data: data,
          loc: loc,
          pubId: pubId,
          ampDoc: ampDoc,
          title: _this5.canonicalTitle_,
          atConfig: _this5.atConfig_,
          referrer: _this5.referrer_
        });
      });
      postMessageDispatcher.on(CONFIGURATION_EVENT, configManager.receiveConfiguration.bind(configManager));
    };
    return AmpAddThis2;
  }(AMP.BaseElement);
  AMP.registerElement("amp-addthis", AmpAddThis, CSS2);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-addthis-0.1.max.js.map
