(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-subscriptions-google",ev:"0.1",l:true,f:(function(AMP,_){
(function() {
  var __esm = function(fn, res) {
    return function __init() {
      return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
    };
  };
  var __commonJS = function(cb, mod) {
    return function __require() {
      return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
  };

  // src/core/data-structures/promise.js
  function resolvedPromise() {
    if (resolved) {
      return resolved;
    }
    resolved = Promise.resolve(void 0);
    return resolved;
  }
  var resolved, Deferred;
  var init_promise = __esm({
    "src/core/data-structures/promise.js": function() {
      Deferred = function Deferred2() {
        var _this = this;
        this.promise = new Promise(function(res, rej) {
          _this.resolve = res;
          _this.reject = rej;
        });
      };
    }
  });

  // node_modules/web-activities/activity-ports.js
  var require_activity_ports = __commonJS({
    "node_modules/web-activities/activity-ports.js": function(exports, module) {
      init_promise();
      init_promise();
      "use strict";
      var ActivityMode = {
        IFRAME: "iframe",
        POPUP: "popup",
        REDIRECT: "redirect"
      };
      var ActivityResultCode = {
        OK: "ok",
        CANCELED: "canceled",
        FAILED: "failed"
      };
      var ActivityResult = function ActivityResult2(code, data, mode9, origin, originVerified, secureChannel) {
        this.code = code;
        this.data = code == ActivityResultCode.OK ? data : null;
        this.mode = mode9;
        this.origin = origin;
        this.originVerified = originVerified;
        this.secureChannel = secureChannel;
        this.ok = code == ActivityResultCode.OK;
        this.error = code == ActivityResultCode.FAILED ? new Error(String(data) || "") : null;
      };
      var ActivityRequest;
      var ActivityOpenOptions;
      var ActivityPort2 = /* @__PURE__ */ function() {
        function ActivityPort3() {
        }
        var _proto = ActivityPort3.prototype;
        _proto.getMode = function getMode2() {
        };
        _proto.acceptResult = function acceptResult() {
        };
        return ActivityPort3;
      }();
      var ActivityMessagingPort = /* @__PURE__ */ function() {
        function ActivityMessagingPort2() {
        }
        var _proto2 = ActivityMessagingPort2.prototype;
        _proto2.getTargetWin = function getTargetWin() {
        };
        _proto2.message = function message(payload) {
        };
        _proto2.onMessage = function onMessage(callback) {
        };
        _proto2.messageChannel = function messageChannel(opt_name) {
        };
        return ActivityMessagingPort2;
      }();
      var ABORT_ERR_NAME = "AbortError";
      var ABORT_ERR_CODE = 20;
      var aResolver;
      function parseUrl3(urlString) {
        if (!aResolver) {
          aResolver = document.createElement("a");
        }
        aResolver.href = urlString;
        return aResolver;
      }
      function getOrigin(loc) {
        if (loc.origin) {
          return loc.origin;
        }
        var protocol = loc.protocol;
        var host = loc.host;
        if (protocol == "https:" && host.indexOf(":443") == host.length - 4) {
          host = host.replace(":443", "");
        } else if (protocol == "http:" && host.indexOf(":80") == host.length - 3) {
          host = host.replace(":80", "");
        }
        return protocol + "//" + host;
      }
      function getOriginFromUrl(urlString) {
        return getOrigin(parseUrl3(urlString));
      }
      function removeFragment(urlString) {
        var index = urlString.indexOf("#");
        if (index == -1) {
          return urlString;
        }
        return urlString.substring(0, index);
      }
      function parseQueryString4(query) {
        if (!query) {
          return {};
        }
        return (/^[?#]/.test(query) ? query.slice(1) : query).split("&").reduce(function(params, param) {
          var item = param.split("=");
          var key = decodeURIComponent(item[0] || "");
          var value = decodeURIComponent(item[1] || "");
          if (key) {
            params[key] = value;
          }
          return params;
        }, {});
      }
      function getQueryParam(queryString, param) {
        return parseQueryString4(queryString)[param];
      }
      function addFragmentParam(url, param, value) {
        return url + (url.indexOf("#") == -1 ? "#" : "&") + encodeURIComponent(param) + "=" + encodeURIComponent(value);
      }
      function removeQueryParam(queryString, param) {
        if (!queryString) {
          return queryString;
        }
        var search = encodeURIComponent(param) + "=";
        var index = -1;
        do {
          index = queryString.indexOf(search, index);
          if (index != -1) {
            var prev = index > 0 ? queryString.substring(index - 1, index) : "";
            if (prev == "" || prev == "?" || prev == "#" || prev == "&") {
              var end = queryString.indexOf("&", index + 1);
              if (end == -1) {
                end = queryString.length;
              }
              queryString = queryString.substring(0, index) + queryString.substring(end + 1);
            } else {
              index++;
            }
          }
        } while (index != -1 && index < queryString.length);
        return queryString;
      }
      function serializeRequest(request) {
        var map4 = {
          "requestId": request.requestId,
          "returnUrl": request.returnUrl,
          "args": request.args
        };
        if (request.origin !== void 0) {
          map4["origin"] = request.origin;
        }
        if (request.originVerified !== void 0) {
          map4["originVerified"] = request.originVerified;
        }
        return JSON.stringify(map4);
      }
      function isAbortError2(error) {
        if (!error || typeof error != "object") {
          return false;
        }
        return error["name"] === ABORT_ERR_NAME;
      }
      function createAbortError2(win, opt_message) {
        var message = "AbortError" + (opt_message ? ": " + opt_message : "");
        var error = null;
        if (typeof win["DOMException"] == "function") {
          var constr = win["DOMException"];
          try {
            error = new constr(message, ABORT_ERR_NAME);
          } catch (e) {
          }
        }
        if (!error) {
          var _constr = Error;
          error = new _constr(message);
          error.name = ABORT_ERR_NAME;
          error.code = ABORT_ERR_CODE;
        }
        return error;
      }
      function resolveResult(win, result, resolver) {
        if (result.ok) {
          resolver(result);
        } else {
          var error = result.error || createAbortError2(win);
          error.activityResult = result;
          resolver(Promise.reject(error));
        }
      }
      function isIeBrowser(win) {
        var nav = win.navigator;
        return /Trident|MSIE|IEMobile/i.test(nav && nav.userAgent);
      }
      function isEdgeBrowser(win) {
        var nav = win.navigator;
        return /Edge/i.test(nav && nav.userAgent);
      }
      function throwAsync(e) {
        setTimeout(function() {
          throw e;
        });
      }
      function isNodeConnected(node) {
        if ("isConnected" in node) {
          return node["isConnected"];
        }
        var root = node.ownerDocument && node.ownerDocument.documentElement;
        return root && root.contains(node) || false;
      }
      var SENTINEL = "__ACTIVITIES__";
      var Messenger = /* @__PURE__ */ function() {
        function Messenger2(win, targetOrCallback, targetOrigin, requireTarget) {
          this.win_ = win;
          this.targetOrCallback_ = targetOrCallback;
          this.targetOrigin_ = targetOrigin;
          this.requireTarget_ = requireTarget;
          this.target_ = null;
          this.acceptsChannel_ = false;
          this.port_ = null;
          this.onCommand_ = null;
          this.onCustomMessage_ = null;
          this.channels_ = null;
          this.boundHandleEvent_ = this.handleEvent_.bind(this);
        }
        var _proto3 = Messenger2.prototype;
        _proto3.connect = function connect(onCommand) {
          if (this.onCommand_) {
            throw new Error("already connected");
          }
          this.onCommand_ = onCommand;
          this.win_.addEventListener("message", this.boundHandleEvent_);
        };
        _proto3.disconnect = function disconnect() {
          if (this.onCommand_) {
            this.onCommand_ = null;
            if (this.port_) {
              closePort(this.port_);
              this.port_ = null;
            }
            this.win_.removeEventListener("message", this.boundHandleEvent_);
            if (this.channels_) {
              for (var k in this.channels_) {
                var channelObj = this.channels_[k];
                if (channelObj.port1) {
                  closePort(channelObj.port1);
                }
                if (channelObj.port2) {
                  closePort(channelObj.port2);
                }
              }
              this.channels_ = null;
            }
          }
        };
        _proto3.isConnected = function isConnected() {
          return this.targetOrigin_ != null;
        };
        _proto3.getTarget = function getTarget() {
          var target = this.getOptionalTarget_();
          if (!target) {
            throw new Error("not connected");
          }
          return target;
        };
        _proto3.getOptionalTarget_ = function getOptionalTarget_() {
          if (this.onCommand_ && !this.target_) {
            if (typeof this.targetOrCallback_ == "function") {
              this.target_ = this.targetOrCallback_();
            } else {
              this.target_ = this.targetOrCallback_;
            }
          }
          return this.target_;
        };
        _proto3.getTargetOrigin = function getTargetOrigin() {
          if (this.targetOrigin_ == null) {
            throw new Error("not connected");
          }
          return this.targetOrigin_;
        };
        _proto3.sendConnectCommand = function sendConnectCommand() {
          var acceptsChannel = isIeBrowser(this.win_) || isEdgeBrowser(this.win_);
          this.sendCommand("connect", {
            "acceptsChannel": acceptsChannel
          });
        };
        _proto3.sendStartCommand = function sendStartCommand(args) {
          var channel = null;
          if (this.acceptsChannel_ && typeof this.win_.MessageChannel == "function") {
            channel = new this.win_.MessageChannel();
          }
          if (channel) {
            this.sendCommand("start", args, [channel.port2]);
            this.switchToChannel_(channel.port1);
          } else {
            this.sendCommand("start", args);
          }
        };
        _proto3.sendCommand = function sendCommand(cmd, opt_payload, opt_transfer) {
          var data = {
            "sentinel": SENTINEL,
            "cmd": cmd,
            "payload": opt_payload || null
          };
          if (this.port_) {
            this.port_.postMessage(data, opt_transfer || void 0);
          } else {
            var target = this.getTarget();
            var targetOrigin = cmd == "connect" ? this.targetOrigin_ != null ? this.targetOrigin_ : "*" : this.getTargetOrigin();
            target.postMessage(data, targetOrigin, opt_transfer || void 0);
          }
        };
        _proto3.customMessage = function customMessage(payload) {
          this.sendCommand("msg", payload);
        };
        _proto3.onCustomMessage = function onCustomMessage(callback) {
          this.onCustomMessage_ = callback;
        };
        _proto3.startChannel = function startChannel(opt_name) {
          var name = opt_name || "";
          var channelObj = this.getChannelObj_(name);
          if (!channelObj.port1) {
            var channel = new this.win_.MessageChannel();
            channelObj.port1 = channel.port1;
            channelObj.port2 = channel.port2;
            channelObj.resolver(channelObj.port1);
          }
          if (channelObj.port2) {
            this.sendCommand("cnset", {
              "name": name
            }, [channelObj.port2]);
            channelObj.port2 = null;
          }
          return channelObj.promise;
        };
        _proto3.askChannel = function askChannel(opt_name) {
          var name = opt_name || "";
          var channelObj = this.getChannelObj_(name);
          if (!channelObj.port1) {
            this.sendCommand("cnget", {
              "name": name
            });
          }
          return channelObj.promise;
        };
        _proto3.receiveChannel_ = function receiveChannel_(name, port) {
          var channelObj = this.getChannelObj_(name);
          channelObj.port1 = port;
          channelObj.resolver(port);
        };
        _proto3.getChannelObj_ = function getChannelObj_(name) {
          if (!this.channels_) {
            this.channels_ = {};
          }
          var channelObj = this.channels_[name];
          if (!channelObj) {
            var resolver;
            var promise = new Promise(function(resolve) {
              resolver = resolve;
            });
            channelObj = {
              port1: null,
              port2: null,
              resolver: resolver,
              promise: promise
            };
            this.channels_[name] = channelObj;
          }
          return channelObj;
        };
        _proto3.switchToChannel_ = function switchToChannel_(port) {
          var _this = this;
          if (this.port_) {
            closePort(this.port_);
          }
          this.port_ = port;
          this.port_.onmessage = function(event) {
            var data = event.data;
            var cmd = data && data["cmd"];
            var payload = data && data["payload"] || null;
            if (cmd) {
              _this.handleCommand_(cmd, payload, event);
            }
          };
        };
        _proto3.handleEvent_ = function handleEvent_(event) {
          if (this.requireTarget_ && this.getOptionalTarget_() != event.source) {
            return;
          }
          var data = event.data;
          if (!data || data["sentinel"] != SENTINEL) {
            return;
          }
          var cmd = data["cmd"];
          if (this.port_ && cmd != "connect" && cmd != "start") {
            return;
          }
          var origin = event.origin;
          var payload = data["payload"] || null;
          if (this.targetOrigin_ == null && cmd == "start") {
            this.targetOrigin_ = origin;
          }
          if (this.targetOrigin_ == null && event.source) {
            if (this.getOptionalTarget_() == event.source) {
              this.targetOrigin_ = origin;
            }
          }
          if (origin != this.targetOrigin_) {
            return;
          }
          this.handleCommand_(cmd, payload, event);
        };
        _proto3.handleCommand_ = function handleCommand_(cmd, payload, event) {
          if (cmd == "connect") {
            if (this.port_) {
              closePort(this.port_);
              this.port_ = null;
            }
            this.acceptsChannel_ = payload && payload["acceptsChannel"] || false;
            this.onCommand_(cmd, payload);
          } else if (cmd == "start") {
            var port = event.ports && event.ports[0];
            if (port) {
              this.switchToChannel_(port);
            }
            this.onCommand_(cmd, payload);
          } else if (cmd == "msg") {
            if (this.onCustomMessage_ != null && payload != null) {
              this.onCustomMessage_(payload);
            }
          } else if (cmd == "cnget") {
            var name = payload["name"];
            this.startChannel(name);
          } else if (cmd == "cnset") {
            var _name = payload["name"];
            var _port = event.ports[0];
            this.receiveChannel_(_name, _port);
          } else {
            this.onCommand_(cmd, payload);
          }
        };
        return Messenger2;
      }();
      function closePort(port) {
        try {
          port.close();
        } catch (e) {
        }
      }
      var ActivityIframePort2 = /* @__PURE__ */ function() {
        function ActivityIframePort3(iframe2, url, opt_args) {
          var _this2 = this;
          this.iframe_ = iframe2;
          this.url_ = url;
          this.args_ = opt_args || null;
          this.win_ = this.iframe_.ownerDocument.defaultView;
          this.targetOrigin_ = getOriginFromUrl(url);
          this.connected_ = false;
          this.connectedResolver_ = null;
          this.connectedPromise_ = new Promise(function(resolve) {
            _this2.connectedResolver_ = resolve;
          });
          this.readyResolver_ = null;
          this.readyPromise_ = new Promise(function(resolve) {
            _this2.readyResolver_ = resolve;
          });
          this.resultResolver_ = null;
          this.resultPromise_ = new Promise(function(resolve) {
            _this2.resultResolver_ = resolve;
          });
          this.onResizeRequest_ = null;
          this.requestedHeight_ = null;
          this.messenger_ = new Messenger(this.win_, function() {
            return _this2.iframe_.contentWindow;
          }, this.targetOrigin_, true);
        }
        var _proto4 = ActivityIframePort3.prototype;
        _proto4.getMode = function getMode2() {
          return ActivityMode.IFRAME;
        };
        _proto4.connect = function connect() {
          if (!isNodeConnected(this.iframe_)) {
            throw new Error("iframe must be in DOM");
          }
          this.messenger_.connect(this.handleCommand_.bind(this));
          this.iframe_.src = this.url_;
          return this.connectedPromise_;
        };
        _proto4.disconnect = function disconnect() {
          this.connected_ = false;
          this.messenger_.disconnect();
        };
        _proto4.acceptResult = function acceptResult() {
          return this.resultPromise_;
        };
        _proto4.getTargetWin = function getTargetWin() {
          return this.iframe_.contentWindow || null;
        };
        _proto4.message = function message(payload) {
          this.messenger_.customMessage(payload);
        };
        _proto4.onMessage = function onMessage(callback) {
          this.messenger_.onCustomMessage(callback);
        };
        _proto4.messageChannel = function messageChannel(opt_name) {
          return this.messenger_.askChannel(opt_name);
        };
        _proto4.whenReady = function whenReady() {
          return this.readyPromise_;
        };
        _proto4.onResizeRequest = function onResizeRequest(callback) {
          var _this3 = this;
          this.onResizeRequest_ = callback;
          resolvedPromise().then(function() {
            if (_this3.requestedHeight_ != null) {
              callback(_this3.requestedHeight_);
            }
          });
        };
        _proto4.resized = function resized() {
          if (!this.connected_) {
            return;
          }
          var height = this.iframe_.offsetHeight;
          this.messenger_.sendCommand("resized", {
            "height": height
          });
        };
        _proto4.handleCommand_ = function handleCommand_(cmd, payload) {
          if (cmd == "connect") {
            this.connected_ = true;
            this.messenger_.sendStartCommand(this.args_);
            this.connectedResolver_();
          } else if (cmd == "result") {
            if (this.resultResolver_) {
              var code = payload["code"];
              var data = code == ActivityResultCode.FAILED ? new Error(payload["data"] || "") : payload["data"];
              var result = new ActivityResult(code, data, ActivityMode.IFRAME, this.messenger_.getTargetOrigin(), true, true);
              resolveResult(this.win_, result, this.resultResolver_);
              this.resultResolver_ = null;
              this.messenger_.sendCommand("close");
              this.disconnect();
            }
          } else if (cmd == "ready") {
            if (this.readyResolver_) {
              this.readyResolver_();
              this.readyResolver_ = null;
            }
          } else if (cmd == "resize") {
            this.requestedHeight_ = payload["height"];
            if (this.onResizeRequest_) {
              this.onResizeRequest_(this.requestedHeight_);
            }
          }
        };
        return ActivityIframePort3;
      }();
      var ActivityWindowPort = /* @__PURE__ */ function() {
        function ActivityWindowPort2(win, requestId, url, target, opt_args, opt_options) {
          var _this4 = this;
          var isValidTarget = target && (target == "_blank" || target == "_top" || target[0] != "_");
          if (!isValidTarget) {
            throw new Error('The only allowed targets are "_blank", "_top" and name targets');
          }
          this.win_ = win;
          this.requestId_ = requestId;
          this.url_ = url;
          this.openTarget_ = target;
          this.args_ = opt_args || null;
          this.options_ = opt_options || {};
          this.connectedResolver_ = null;
          this.connectedPromise_ = new Promise(function(resolve) {
            _this4.connectedResolver_ = resolve;
          });
          this.resultResolver_ = null;
          this.resultPromise_ = new Promise(function(resolve) {
            _this4.resultResolver_ = resolve;
          });
          this.targetWin_ = null;
          this.heartbeatInterval_ = null;
          this.messenger_ = null;
        }
        var _proto5 = ActivityWindowPort2.prototype;
        _proto5.getMode = function getMode2() {
          return this.openTarget_ == "_top" ? ActivityMode.REDIRECT : ActivityMode.POPUP;
        };
        _proto5.open = function open() {
          return this.openInternal_();
        };
        _proto5.whenConnected = function whenConnected() {
          return this.connectedPromise_;
        };
        _proto5.disconnect = function disconnect() {
          if (this.heartbeatInterval_) {
            this.win_.clearInterval(this.heartbeatInterval_);
            this.heartbeatInterval_ = null;
          }
          if (this.messenger_) {
            this.messenger_.disconnect();
            this.messenger_ = null;
          }
          if (this.targetWin_) {
            try {
              this.targetWin_.close();
            } catch (e) {
            }
            this.targetWin_ = null;
          }
          this.resultResolver_ = null;
        };
        _proto5.getTargetWin = function getTargetWin() {
          return this.targetWin_;
        };
        _proto5.acceptResult = function acceptResult() {
          return this.resultPromise_;
        };
        _proto5.message = function message(payload) {
          this.messenger_.customMessage(payload);
        };
        _proto5.onMessage = function onMessage(callback) {
          this.messenger_.onCustomMessage(callback);
        };
        _proto5.messageChannel = function messageChannel(opt_name) {
          return this.messenger_.askChannel(opt_name);
        };
        _proto5.openInternal_ = function openInternal_() {
          var featuresStr = this.buildFeatures_();
          var url = this.url_;
          if (!this.options_.skipRequestInUrl) {
            var returnUrl = this.options_.returnUrl || removeFragment(this.win_.location.href);
            var requestString = serializeRequest({
              requestId: this.requestId_,
              returnUrl: returnUrl,
              args: this.args_
            });
            url = addFragmentParam(url, "__WA__", requestString);
          }
          var targetWin;
          var openTarget = this.openTarget_;
          if (openTarget != "_top") {
            if (isIeBrowser(this.win_)) {
              openTarget = "_top";
            }
          }
          try {
            targetWin = this.win_.open(url, openTarget, featuresStr);
          } catch (e) {
          }
          if (!targetWin && openTarget != "_top" && !this.options_.disableRedirectFallback) {
            openTarget = "_top";
            try {
              targetWin = this.win_.open(url, openTarget);
            } catch (e) {
            }
          }
          if (targetWin) {
            this.targetWin_ = targetWin;
            if (openTarget != "_top") {
              this.setupPopup_();
            }
          } else {
            this.disconnectWithError_(new Error("failed to open window"));
          }
          return this.resultPromise_.catch(function() {
          });
        };
        _proto5.buildFeatures_ = function buildFeatures_() {
          var screen = this.win_.screen;
          var availWidth = screen.availWidth || screen.width;
          var availHeight = screen.availHeight || screen.height;
          var isTop = this.isTopWindow_();
          var isEdge = isEdgeBrowser(this.win_);
          var controlsWidth = isTop && this.win_.outerWidth > this.win_.innerWidth ? Math.min(100, this.win_.outerWidth - this.win_.innerWidth) : isEdge ? 100 : 0;
          var controlsHeight = isTop && this.win_.outerHeight > this.win_.innerHeight ? Math.min(100, this.win_.outerHeight - this.win_.innerHeight) : isEdge ? 100 : 0;
          var maxWidth = Math.max(availWidth - controlsWidth, availWidth * 0.5);
          var maxHeight = Math.max(availHeight - controlsHeight, availHeight * 0.5);
          var w = Math.floor(Math.min(600, maxWidth * 0.9));
          var h = Math.floor(Math.min(600, maxHeight * 0.9));
          if (this.options_.width) {
            w = Math.min(this.options_.width, maxWidth);
          }
          if (this.options_.height) {
            h = Math.min(this.options_.height, maxHeight);
          }
          var x = Math.floor((screen.width - w) / 2);
          var y = Math.floor((screen.height - h) / 2);
          var features = {
            "height": h,
            "width": w,
            "resizable": "yes",
            "scrollbars": "yes"
          };
          if (!isEdge) {
            features["left"] = x;
            features["top"] = y;
          }
          var featuresStr = "";
          for (var f in features) {
            if (featuresStr) {
              featuresStr += ",";
            }
            featuresStr += f + "=" + features[f];
          }
          return featuresStr;
        };
        _proto5.isTopWindow_ = function isTopWindow_() {
          return this.win_ == this.win_.top;
        };
        _proto5.setupPopup_ = function setupPopup_() {
          var _this5 = this;
          this.heartbeatInterval_ = this.win_.setInterval(function() {
            _this5.check_(true);
          }, 500);
          this.messenger_ = new Messenger(this.win_, this.targetWin_, null, true);
          this.messenger_.connect(this.handleCommand_.bind(this));
        };
        _proto5.check_ = function check_(opt_delayCancel) {
          var _this6 = this;
          if (!this.targetWin_ || this.targetWin_.closed) {
            if (this.heartbeatInterval_) {
              this.win_.clearInterval(this.heartbeatInterval_);
              this.heartbeatInterval_ = null;
            }
            this.win_.setTimeout(function() {
              try {
                _this6.result_(ActivityResultCode.CANCELED, null);
              } catch (e) {
                _this6.disconnectWithError_(e);
              }
            }, opt_delayCancel ? 3e3 : 0);
          }
        };
        _proto5.disconnectWithError_ = function disconnectWithError_(reason) {
          if (this.resultResolver_) {
            this.resultResolver_(Promise.reject(reason));
          }
          this.disconnect();
        };
        _proto5.result_ = function result_(code, data) {
          if (this.resultResolver_) {
            var isConnected = this.messenger_.isConnected();
            var result = new ActivityResult(code, data, ActivityMode.POPUP, isConnected ? this.messenger_.getTargetOrigin() : getOriginFromUrl(this.url_), isConnected, isConnected);
            resolveResult(this.win_, result, this.resultResolver_);
            this.resultResolver_ = null;
          }
          if (this.messenger_) {
            this.messenger_.sendCommand("close");
          }
          this.disconnect();
        };
        _proto5.handleCommand_ = function handleCommand_(cmd, payload) {
          var _this7 = this;
          if (cmd == "connect") {
            this.messenger_.sendStartCommand(this.args_);
            this.connectedResolver_();
          } else if (cmd == "result") {
            var code = payload["code"];
            var data = code == ActivityResultCode.FAILED ? new Error(payload["data"] || "") : payload["data"];
            this.result_(code, data);
          } else if (cmd == "check") {
            this.win_.setTimeout(function() {
              return _this7.check_();
            }, 200);
          }
        };
        return ActivityWindowPort2;
      }();
      function discoverRedirectPort(win, fragment, requestId) {
        var paramName = "__WA_RES__";
        var fragmentParam = getQueryParam(fragment, paramName);
        if (!fragmentParam) {
          return null;
        }
        var response = JSON.parse(fragmentParam);
        if (!response || response["requestId"] != requestId) {
          return null;
        }
        var cleanFragment = removeQueryParam(win.location.hash, paramName) || "";
        if (cleanFragment != win.location.hash) {
          if (win.history && win.history.replaceState) {
            try {
              win.history.replaceState(win.history.state, "", cleanFragment);
            } catch (e) {
            }
          }
        }
        var code = response["code"];
        var data = response["data"];
        var origin = response["origin"];
        var referrerOrigin = win.document.referrer && getOriginFromUrl(win.document.referrer);
        var originVerified = origin == referrerOrigin;
        return new ActivityWindowRedirectPort(win, code, data, origin, originVerified);
      }
      var ActivityWindowRedirectPort = /* @__PURE__ */ function() {
        function ActivityWindowRedirectPort2(win, code, data, targetOrigin, targetOriginVerified) {
          this.win_ = win;
          this.code_ = code;
          this.data_ = data;
          this.targetOrigin_ = targetOrigin;
          this.targetOriginVerified_ = targetOriginVerified;
        }
        var _proto6 = ActivityWindowRedirectPort2.prototype;
        _proto6.getMode = function getMode2() {
          return ActivityMode.REDIRECT;
        };
        _proto6.acceptResult = function acceptResult() {
          var _this8 = this;
          var result = new ActivityResult(this.code_, this.data_, ActivityMode.REDIRECT, this.targetOrigin_, this.targetOriginVerified_, false);
          return new Promise(function(resolve) {
            resolveResult(_this8.win_, result, resolve);
          });
        };
        return ActivityWindowRedirectPort2;
      }();
      var ActivityPorts2 = /* @__PURE__ */ function() {
        function ActivityPorts3(win) {
          var _this9 = this;
          this.version = "1.24";
          this.win_ = win;
          this.fragment_ = win.location.hash;
          this.requestHandlers_ = {};
          this.resultBuffer_ = {};
          this.redirectErrorResolver_ = null;
          this.redirectErrorPromise_ = new Promise(function(resolve) {
            _this9.redirectErrorResolver_ = resolve;
          });
        }
        var _proto7 = ActivityPorts3.prototype;
        _proto7.openIframe = function openIframe(iframe2, url, opt_args) {
          var port = new ActivityIframePort2(iframe2, url, opt_args);
          return port.connect().then(function() {
            return port;
          });
        };
        _proto7.open = function open(requestId, url, target, opt_args, opt_options) {
          var port = this.openWin_(requestId, url, target, opt_args, opt_options);
          return {
            targetWin: port.getTargetWin()
          };
        };
        _proto7.openWithMessaging = function openWithMessaging(requestId, url, target, opt_args, opt_options) {
          var port = this.openWin_(requestId, url, target, opt_args, opt_options);
          return port.whenConnected().then(function() {
            return port;
          });
        };
        _proto7.onResult = function onResult(requestId, callback) {
          var handlers = this.requestHandlers_[requestId];
          if (!handlers) {
            handlers = [];
            this.requestHandlers_[requestId] = handlers;
          }
          handlers.push(callback);
          var availableResult = this.discoverResult_(requestId);
          if (availableResult) {
            this.consumeResult_(availableResult, callback);
          }
        };
        _proto7.onRedirectError = function onRedirectError(handler) {
          this.redirectErrorPromise_.then(handler);
        };
        _proto7.openWin_ = function openWin_(requestId, url, target, opt_args, opt_options) {
          var _this10 = this;
          var port = new ActivityWindowPort(this.win_, requestId, url, target, opt_args, opt_options);
          port.open().then(function() {
            _this10.consumeResultAll_(requestId, port);
          });
          return port;
        };
        _proto7.discoverResult_ = function discoverResult_(requestId) {
          var port = this.resultBuffer_[requestId];
          if (!port && this.fragment_) {
            try {
              port = discoverRedirectPort(this.win_, this.fragment_, requestId);
            } catch (e) {
              throwAsync(e);
              this.redirectErrorResolver_(e);
            }
            if (port) {
              this.resultBuffer_[requestId] = port;
            }
          }
          return port;
        };
        _proto7.consumeResult_ = function consumeResult_(port, callback) {
          resolvedPromise().then(function() {
            callback(port);
          });
        };
        _proto7.consumeResultAll_ = function consumeResultAll_(requestId, port) {
          var _this11 = this;
          var handlers = this.requestHandlers_[requestId];
          if (handlers) {
            handlers.forEach(function(handler) {
              _this11.consumeResult_(port, handler);
            });
          }
          this.resultBuffer_[requestId] = port;
        };
        return ActivityPorts3;
      }();
      module.exports = {
        ActivityPorts: ActivityPorts2,
        ActivityIframePort: ActivityIframePort2,
        ActivityMessagingPort: ActivityMessagingPort,
        ActivityMode: ActivityMode,
        ActivityOpenOptions: ActivityOpenOptions,
        ActivityPort: ActivityPort2,
        ActivityRequest: ActivityRequest,
        ActivityResult: ActivityResult,
        ActivityResultCode: ActivityResultCode,
        ActivityWindowPort: ActivityWindowPort,
        createAbortError: createAbortError2,
        isAbortError: isAbortError2
      };
    }
  });

  // extensions/amp-subscriptions-google/0.1/amp-subscriptions-google.js
  init_promise();

  // src/core/types/object/index.js
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
  function getValueForExpr(obj, expr) {
    if (expr == ".") {
      return obj;
    }
    var parts = expr.split(".");
    var value = obj;
    for (var _iterator = _createForOfIteratorHelperLoose(parts), _step; !(_step = _iterator()).done; ) {
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

  // src/core/types/array.js
  var isArray = Array.isArray;

  // src/core/mode/prod.js
  function isProd() {
    return false;
  }

  // src/core/types/string/index.js
  function endsWith(string, suffix) {
    var index = string.length - suffix.length;
    return index >= 0 && string.indexOf(suffix, index) == index;
  }

  // src/core/types/object/json.js
  function parseJson(json) {
    return JSON.parse(json);
  }

  // src/core/error/message-helpers.js
  var USER_ERROR_SENTINEL = "\u200B\u200B\u200B";
  var USER_ERROR_EMBED_SENTINEL = "\u200B\u200B\u200B\u200B";

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

  // src/service-helpers.js
  init_promise();

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
  var TAG = "EXPERIMENTS";
  var LOCAL_STORAGE_KEY = "amp-experiment-toggles";
  var TOGGLES_WINDOW_PROPERTY = "__AMP__EXPERIMENT_TOGGLES";
  function isExperimentOn(win, experimentId) {
    var toggles = experimentToggles(win);
    return !!toggles[experimentId];
  }
  function experimentToggles(win) {
    var _win$AMP_CONFIG3, _win$AMP_EXP, _win$__AMP_EXP, _win$AMP_CONFIG4, _win$AMP_CONFIG5;
    if (win[TOGGLES_WINDOW_PROPERTY]) {
      return win[TOGGLES_WINDOW_PROPERTY];
    }
    win[TOGGLES_WINDOW_PROPERTY] = map();
    var toggles = win[TOGGLES_WINDOW_PROPERTY];
    var buildExperimentConfigs = _extends({}, (_win$AMP_CONFIG3 = win.AMP_CONFIG) != null ? _win$AMP_CONFIG3 : {}, (_win$AMP_EXP = win.AMP_EXP) != null ? _win$AMP_EXP : parseJson(((_win$__AMP_EXP = win.__AMP_EXP) == null ? void 0 : _win$__AMP_EXP.textContent) || "{}"));
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
        for (var _iterator = _createForOfIteratorHelperLoose2(optedInExperiments), _step; !(_step = _iterator()).done; ) {
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
      var hash2 = win.location["originalHash"] || win.location.hash;
      var params = parseQueryString(hash2);
      for (var _iterator2 = _createForOfIteratorHelperLoose2(allowedUrlOptIn), _step2; !(_step2 = _iterator2()).done; ) {
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
  function getExperimentToggles(win) {
    var _experimentsString;
    var experimentsString2 = "";
    try {
      if ("localStorage" in win) {
        experimentsString2 = win.localStorage.getItem(LOCAL_STORAGE_KEY);
      }
    } catch (_unused) {
      dev().warn(TAG, "Failed to retrieve experiments from localStorage.");
    }
    var tokens = ((_experimentsString = experimentsString2) == null ? void 0 : _experimentsString.split(/\s*,\s*/g)) || [];
    var toggles = map();
    for (var _iterator3 = _createForOfIteratorHelperLoose2(tokens), _step3; !(_step3 = _iterator3()).done; ) {
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

  // src/utils/event-helper.js
  function getData(event) {
    return event.data;
  }

  // third_party/subscriptions-project/swg.js
  init_promise();
  init_promise();
  init_promise();
  init_promise();
  init_promise();
  init_promise();
  init_promise();
  init_promise();
  init_promise();
  init_promise();
  init_promise();
  init_promise();
  init_promise();
  init_promise();
  init_promise();
  init_promise();
  init_promise();
  init_promise();
  init_promise();
  init_promise();
  init_promise();
  init_promise();
  init_promise();
  init_promise();
  init_promise();
  var _PublisherEventToAnal;
  var _AnalyticsEventToPubl;
  var _ShowcaseEvents;
  var _AnalyticsEventToEnti;
  var _AnalyticsEventToGoog;
  var _SubscriptionSpecific;
  var _ContributionSpecific;
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
  var AnalyticsEvent = {
    UNKNOWN: 0,
    IMPRESSION_PAYWALL: 1,
    IMPRESSION_AD: 2,
    IMPRESSION_OFFERS: 3,
    IMPRESSION_SUBSCRIBE_BUTTON: 4,
    IMPRESSION_SMARTBOX: 5,
    IMPRESSION_SWG_BUTTON: 6,
    IMPRESSION_CLICK_TO_SHOW_OFFERS: 7,
    IMPRESSION_CLICK_TO_SHOW_OFFERS_OR_ALREADY_SUBSCRIBED: 8,
    IMPRESSION_SUBSCRIPTION_COMPLETE: 9,
    IMPRESSION_ACCOUNT_CHANGED: 10,
    IMPRESSION_PAGE_LOAD: 11,
    IMPRESSION_LINK: 12,
    IMPRESSION_SAVE_SUBSCR_TO_GOOGLE: 13,
    IMPRESSION_GOOGLE_UPDATED: 14,
    IMPRESSION_SHOW_OFFERS_SMARTBOX: 15,
    IMPRESSION_SHOW_OFFERS_SWG_BUTTON: 16,
    IMPRESSION_SELECT_OFFER_SMARTBOX: 17,
    IMPRESSION_SELECT_OFFER_SWG_BUTTON: 18,
    IMPRESSION_SHOW_CONTRIBUTIONS_SWG_BUTTON: 19,
    IMPRESSION_SELECT_CONTRIBUTION_SWG_BUTTON: 20,
    IMPRESSION_METER_TOAST: 21,
    IMPRESSION_REGWALL: 22,
    IMPRESSION_SHOWCASE_REGWALL: 23,
    IMPRESSION_SWG_SUBSCRIPTION_MINI_PROMPT: 24,
    IMPRESSION_SWG_CONTRIBUTION_MINI_PROMPT: 25,
    IMPRESSION_CONTRIBUTION_OFFERS: 26,
    IMPRESSION_TWG_COUNTER: 27,
    IMPRESSION_TWG_SITE_SUPPORTER_WALL: 28,
    IMPRESSION_TWG_PUBLICATION: 29,
    IMPRESSION_TWG_STATIC_BUTTON: 30,
    IMPRESSION_TWG_DYNAMIC_BUTTON: 31,
    IMPRESSION_TWG_STICKER_SELECTION_SCREEN: 32,
    ACTION_SUBSCRIBE: 1e3,
    ACTION_PAYMENT_COMPLETE: 1001,
    ACTION_ACCOUNT_CREATED: 1002,
    ACTION_ACCOUNT_ACKNOWLEDGED: 1003,
    ACTION_SUBSCRIPTIONS_LANDING_PAGE: 1004,
    ACTION_PAYMENT_FLOW_STARTED: 1005,
    ACTION_OFFER_SELECTED: 1006,
    ACTION_SWG_BUTTON_CLICK: 1007,
    ACTION_VIEW_OFFERS: 1008,
    ACTION_ALREADY_SUBSCRIBED: 1009,
    ACTION_NEW_DEFERRED_ACCOUNT: 1010,
    ACTION_LINK_CONTINUE: 1011,
    ACTION_LINK_CANCEL: 1012,
    ACTION_GOOGLE_UPDATED_CLOSE: 1013,
    ACTION_USER_CANCELED_PAYFLOW: 1014,
    ACTION_SAVE_SUBSCR_TO_GOOGLE_CONTINUE: 1015,
    ACTION_SAVE_SUBSCR_TO_GOOGLE_CANCEL: 1016,
    ACTION_SWG_BUTTON_SHOW_OFFERS_CLICK: 1017,
    ACTION_SWG_BUTTON_SELECT_OFFER_CLICK: 1018,
    ACTION_SWG_BUTTON_SHOW_CONTRIBUTIONS_CLICK: 1019,
    ACTION_SWG_BUTTON_SELECT_CONTRIBUTION_CLICK: 1020,
    ACTION_USER_CONSENT_DEFERRED_ACCOUNT: 1021,
    ACTION_USER_DENY_DEFERRED_ACCOUNT: 1022,
    ACTION_DEFERRED_ACCOUNT_REDIRECT: 1023,
    ACTION_GET_ENTITLEMENTS: 1024,
    ACTION_METER_TOAST_SUBSCRIBE_CLICK: 1025,
    ACTION_METER_TOAST_EXPANDED: 1026,
    ACTION_METER_TOAST_CLOSED_BY_ARTICLE_INTERACTION: 1027,
    ACTION_METER_TOAST_CLOSED_BY_SWIPE_DOWN: 1028,
    ACTION_METER_TOAST_CLOSED_BY_X_CLICKED: 1029,
    ACTION_SWG_SUBSCRIPTION_MINI_PROMPT_CLICK: 1030,
    ACTION_SWG_CONTRIBUTION_MINI_PROMPT_CLICK: 1031,
    ACTION_SWG_SUBSCRIPTION_MINI_PROMPT_CLOSE: 1032,
    ACTION_SWG_CONTRIBUTION_MINI_PROMPT_CLOSE: 1033,
    ACTION_CONTRIBUTION_OFFER_SELECTED: 1034,
    ACTION_SHOWCASE_REGWALL_GSI_CLICK: 1035,
    ACTION_SHOWCASE_REGWALL_EXISTING_ACCOUNT_CLICK: 1036,
    ACTION_SUBSCRIPTION_OFFERS_CLOSED: 1037,
    ACTION_CONTRIBUTION_OFFERS_CLOSED: 1038,
    ACTION_TWG_STATIC_CTA_CLICK: 1039,
    ACTION_TWG_DYNAMIC_CTA_CLICK: 1040,
    ACTION_TWG_SITE_LEVEL_SUPPORTER_WALL_CTA_CLICK: 1041,
    ACTION_TWG_DIALOG_SUPPORTER_WALL_CTA_CLICK: 1042,
    ACTION_TWG_COUNTER_CLICK: 1043,
    ACTION_TWG_SITE_SUPPORTER_WALL_ALL_THANKS_CLICK: 1044,
    ACTION_TWG_PAID_STICKER_SELECTED_SCREEN_CLOSE_CLICK: 1045,
    ACTION_TWG_PAID_STICKER_SELECTION_CLICK: 1046,
    ACTION_TWG_FREE_STICKER_SELECTION_CLICK: 1047,
    ACTION_TWG_MINI_SUPPORTER_WALL_CLICK: 1048,
    ACTION_TWG_CREATOR_BENEFIT_CLICK: 1049,
    ACTION_TWG_FREE_TRANSACTION_START_NEXT_BUTTON_CLICK: 1050,
    ACTION_TWG_PAID_TRANSACTION_START_NEXT_BUTTON_CLICK: 1051,
    ACTION_TWG_STICKER_SELECTION_SCREEN_CLOSE_CLICK: 1052,
    EVENT_PAYMENT_FAILED: 2e3,
    EVENT_CUSTOM: 3e3,
    EVENT_CONFIRM_TX_ID: 3001,
    EVENT_CHANGED_TX_ID: 3002,
    EVENT_GPAY_NO_TX_ID: 3003,
    EVENT_GPAY_CANNOT_CONFIRM_TX_ID: 3004,
    EVENT_GOOGLE_UPDATED: 3005,
    EVENT_NEW_TX_ID: 3006,
    EVENT_UNLOCKED_BY_SUBSCRIPTION: 3007,
    EVENT_UNLOCKED_BY_METER: 3008,
    EVENT_NO_ENTITLEMENTS: 3009,
    EVENT_HAS_METERING_ENTITLEMENTS: 3010,
    EVENT_OFFERED_METER: 3011,
    EVENT_UNLOCKED_FREE_PAGE: 3012,
    EVENT_INELIGIBLE_PAYWALL: 3013,
    EVENT_UNLOCKED_FOR_CRAWLER: 3014,
    EVENT_TWG_COUNTER_VIEW: 3015,
    EVENT_TWG_SITE_SUPPORTER_WALL_VIEW: 3016,
    EVENT_TWG_STATIC_BUTTON_VIEW: 3017,
    EVENT_TWG_DYNAMIC_BUTTON_VIEW: 3018,
    EVENT_TWG_PRE_TRANSACTION_PRIVACY_SETTING_PRIVATE: 3019,
    EVENT_TWG_POST_TRANSACTION_SETTING_PRIVATE: 3020,
    EVENT_TWG_PRE_TRANSACTION_PRIVACY_SETTING_PUBLIC: 3021,
    EVENT_TWG_POST_TRANSACTION_SETTING_PUBLIC: 3022,
    EVENT_SUBSCRIPTION_STATE: 4e3
  };
  var EntitlementResult = {
    UNKNOWN_ENTITLEMENT_RESULT: 0,
    UNLOCKED_SUBSCRIBER: 1001,
    UNLOCKED_FREE: 1002,
    UNLOCKED_METER: 1003,
    LOCKED_REGWALL: 2001,
    LOCKED_PAYWALL: 2002,
    INELIGIBLE_PAYWALL: 2003
  };
  var EntitlementSource = {
    UNKNOWN_ENTITLEMENT_SOURCE: 0,
    GOOGLE_SUBSCRIBER_ENTITLEMENT: 1001,
    GOOGLE_SHOWCASE_METERING_SERVICE: 2001,
    PUBLISHER_ENTITLEMENT: 3001
  };
  var EventOriginator = {
    UNKNOWN_CLIENT: 0,
    SWG_CLIENT: 1,
    AMP_CLIENT: 2,
    PROPENSITY_CLIENT: 3,
    SWG_SERVER: 4,
    PUBLISHER_CLIENT: 5,
    SHOWCASE_CLIENT: 6
  };
  var AccountCreationRequest = /* @__PURE__ */ function() {
    function AccountCreationRequest2(data, includesLabel) {
      if (data === void 0) {
        data = [];
      }
      if (includesLabel === void 0) {
        includesLabel = true;
      }
      var base = includesLabel ? 1 : 0;
      this.complete_ = data[base] == null ? null : data[base];
    }
    var _proto = AccountCreationRequest2.prototype;
    _proto.getComplete = function getComplete() {
      return this.complete_;
    };
    _proto.setComplete = function setComplete(value) {
      this.complete_ = value;
    };
    _proto.toArray = function toArray(includeLabel) {
      if (includeLabel === void 0) {
        includeLabel = true;
      }
      var arr = [
        this.complete_
      ];
      if (includeLabel) {
        arr.unshift(this.label());
      }
      return arr;
    };
    _proto.label = function label() {
      return "AccountCreationRequest";
    };
    return AccountCreationRequest2;
  }();
  var ActionRequest = /* @__PURE__ */ function() {
    function ActionRequest2(data, includesLabel) {
      if (data === void 0) {
        data = [];
      }
      if (includesLabel === void 0) {
        includesLabel = true;
      }
      var base = includesLabel ? 1 : 0;
      this.action_ = data[base] == null ? null : data[base];
    }
    var _proto2 = ActionRequest2.prototype;
    _proto2.getAction = function getAction() {
      return this.action_;
    };
    _proto2.setAction = function setAction(value) {
      this.action_ = value;
    };
    _proto2.toArray = function toArray(includeLabel) {
      if (includeLabel === void 0) {
        includeLabel = true;
      }
      var arr = [
        this.action_
      ];
      if (includeLabel) {
        arr.unshift(this.label());
      }
      return arr;
    };
    _proto2.label = function label() {
      return "ActionRequest";
    };
    return ActionRequest2;
  }();
  var AlreadySubscribedResponse = /* @__PURE__ */ function() {
    function AlreadySubscribedResponse2(data, includesLabel) {
      if (data === void 0) {
        data = [];
      }
      if (includesLabel === void 0) {
        includesLabel = true;
      }
      var base = includesLabel ? 1 : 0;
      this.subscriberOrMember_ = data[base] == null ? null : data[base];
      this.linkRequested_ = data[1 + base] == null ? null : data[1 + base];
    }
    var _proto3 = AlreadySubscribedResponse2.prototype;
    _proto3.getSubscriberOrMember = function getSubscriberOrMember() {
      return this.subscriberOrMember_;
    };
    _proto3.setSubscriberOrMember = function setSubscriberOrMember(value) {
      this.subscriberOrMember_ = value;
    };
    _proto3.getLinkRequested = function getLinkRequested() {
      return this.linkRequested_;
    };
    _proto3.setLinkRequested = function setLinkRequested(value) {
      this.linkRequested_ = value;
    };
    _proto3.toArray = function toArray(includeLabel) {
      if (includeLabel === void 0) {
        includeLabel = true;
      }
      var arr = [
        this.subscriberOrMember_,
        this.linkRequested_
      ];
      if (includeLabel) {
        arr.unshift(this.label());
      }
      return arr;
    };
    _proto3.label = function label() {
      return "AlreadySubscribedResponse";
    };
    return AlreadySubscribedResponse2;
  }();
  var AnalyticsContext = /* @__PURE__ */ function() {
    function AnalyticsContext2(data, includesLabel) {
      if (data === void 0) {
        data = [];
      }
      if (includesLabel === void 0) {
        includesLabel = true;
      }
      var base = includesLabel ? 1 : 0;
      this.embedderOrigin_ = data[base] == null ? null : data[base];
      this.transactionId_ = data[1 + base] == null ? null : data[1 + base];
      this.referringOrigin_ = data[2 + base] == null ? null : data[2 + base];
      this.utmSource_ = data[3 + base] == null ? null : data[3 + base];
      this.utmCampaign_ = data[4 + base] == null ? null : data[4 + base];
      this.utmMedium_ = data[5 + base] == null ? null : data[5 + base];
      this.sku_ = data[6 + base] == null ? null : data[6 + base];
      this.readyToPay_ = data[7 + base] == null ? null : data[7 + base];
      this.label_ = data[8 + base] || [];
      this.clientVersion_ = data[9 + base] == null ? null : data[9 + base];
      this.url_ = data[10 + base] == null ? null : data[10 + base];
      this.clientTimestamp_ = data[11 + base] == null || data[11 + base] == void 0 ? null : new Timestamp(data[11 + base], includesLabel);
    }
    var _proto4 = AnalyticsContext2.prototype;
    _proto4.getEmbedderOrigin = function getEmbedderOrigin() {
      return this.embedderOrigin_;
    };
    _proto4.setEmbedderOrigin = function setEmbedderOrigin(value) {
      this.embedderOrigin_ = value;
    };
    _proto4.getTransactionId = function getTransactionId() {
      return this.transactionId_;
    };
    _proto4.setTransactionId = function setTransactionId(value) {
      this.transactionId_ = value;
    };
    _proto4.getReferringOrigin = function getReferringOrigin() {
      return this.referringOrigin_;
    };
    _proto4.setReferringOrigin = function setReferringOrigin(value) {
      this.referringOrigin_ = value;
    };
    _proto4.getUtmSource = function getUtmSource() {
      return this.utmSource_;
    };
    _proto4.setUtmSource = function setUtmSource(value) {
      this.utmSource_ = value;
    };
    _proto4.getUtmCampaign = function getUtmCampaign() {
      return this.utmCampaign_;
    };
    _proto4.setUtmCampaign = function setUtmCampaign(value) {
      this.utmCampaign_ = value;
    };
    _proto4.getUtmMedium = function getUtmMedium() {
      return this.utmMedium_;
    };
    _proto4.setUtmMedium = function setUtmMedium(value) {
      this.utmMedium_ = value;
    };
    _proto4.getSku = function getSku() {
      return this.sku_;
    };
    _proto4.setSku = function setSku(value) {
      this.sku_ = value;
    };
    _proto4.getReadyToPay = function getReadyToPay() {
      return this.readyToPay_;
    };
    _proto4.setReadyToPay = function setReadyToPay(value) {
      this.readyToPay_ = value;
    };
    _proto4.getLabelList = function getLabelList() {
      return this.label_;
    };
    _proto4.setLabelList = function setLabelList(value) {
      this.label_ = value;
    };
    _proto4.getClientVersion = function getClientVersion() {
      return this.clientVersion_;
    };
    _proto4.setClientVersion = function setClientVersion(value) {
      this.clientVersion_ = value;
    };
    _proto4.getUrl = function getUrl() {
      return this.url_;
    };
    _proto4.setUrl = function setUrl(value) {
      this.url_ = value;
    };
    _proto4.getClientTimestamp = function getClientTimestamp() {
      return this.clientTimestamp_;
    };
    _proto4.setClientTimestamp = function setClientTimestamp(value) {
      this.clientTimestamp_ = value;
    };
    _proto4.toArray = function toArray(includeLabel) {
      if (includeLabel === void 0) {
        includeLabel = true;
      }
      var arr = [
        this.embedderOrigin_,
        this.transactionId_,
        this.referringOrigin_,
        this.utmSource_,
        this.utmCampaign_,
        this.utmMedium_,
        this.sku_,
        this.readyToPay_,
        this.label_,
        this.clientVersion_,
        this.url_,
        this.clientTimestamp_ ? this.clientTimestamp_.toArray(includeLabel) : []
      ];
      if (includeLabel) {
        arr.unshift(this.label());
      }
      return arr;
    };
    _proto4.label = function label() {
      return "AnalyticsContext";
    };
    return AnalyticsContext2;
  }();
  var AnalyticsEventMeta = /* @__PURE__ */ function() {
    function AnalyticsEventMeta2(data, includesLabel) {
      if (data === void 0) {
        data = [];
      }
      if (includesLabel === void 0) {
        includesLabel = true;
      }
      var base = includesLabel ? 1 : 0;
      this.eventOriginator_ = data[base] == null ? null : data[base];
      this.isFromUserAction_ = data[1 + base] == null ? null : data[1 + base];
    }
    var _proto5 = AnalyticsEventMeta2.prototype;
    _proto5.getEventOriginator = function getEventOriginator() {
      return this.eventOriginator_;
    };
    _proto5.setEventOriginator = function setEventOriginator(value) {
      this.eventOriginator_ = value;
    };
    _proto5.getIsFromUserAction = function getIsFromUserAction() {
      return this.isFromUserAction_;
    };
    _proto5.setIsFromUserAction = function setIsFromUserAction(value) {
      this.isFromUserAction_ = value;
    };
    _proto5.toArray = function toArray(includeLabel) {
      if (includeLabel === void 0) {
        includeLabel = true;
      }
      var arr = [
        this.eventOriginator_,
        this.isFromUserAction_
      ];
      if (includeLabel) {
        arr.unshift(this.label());
      }
      return arr;
    };
    _proto5.label = function label() {
      return "AnalyticsEventMeta";
    };
    return AnalyticsEventMeta2;
  }();
  var AnalyticsRequest = /* @__PURE__ */ function() {
    function AnalyticsRequest2(data, includesLabel) {
      if (data === void 0) {
        data = [];
      }
      if (includesLabel === void 0) {
        includesLabel = true;
      }
      var base = includesLabel ? 1 : 0;
      this.context_ = data[base] == null || data[base] == void 0 ? null : new AnalyticsContext(data[base], includesLabel);
      this.event_ = data[1 + base] == null ? null : data[1 + base];
      this.meta_ = data[2 + base] == null || data[2 + base] == void 0 ? null : new AnalyticsEventMeta(data[2 + base], includesLabel);
      this.params_ = data[3 + base] == null || data[3 + base] == void 0 ? null : new EventParams(data[3 + base], includesLabel);
    }
    var _proto6 = AnalyticsRequest2.prototype;
    _proto6.getContext = function getContext() {
      return this.context_;
    };
    _proto6.setContext = function setContext(value) {
      this.context_ = value;
    };
    _proto6.getEvent = function getEvent() {
      return this.event_;
    };
    _proto6.setEvent = function setEvent(value) {
      this.event_ = value;
    };
    _proto6.getMeta = function getMeta() {
      return this.meta_;
    };
    _proto6.setMeta = function setMeta(value) {
      this.meta_ = value;
    };
    _proto6.getParams = function getParams() {
      return this.params_;
    };
    _proto6.setParams = function setParams(value) {
      this.params_ = value;
    };
    _proto6.toArray = function toArray(includeLabel) {
      if (includeLabel === void 0) {
        includeLabel = true;
      }
      var arr = [
        this.context_ ? this.context_.toArray(includeLabel) : [],
        this.event_,
        this.meta_ ? this.meta_.toArray(includeLabel) : [],
        this.params_ ? this.params_.toArray(includeLabel) : []
      ];
      if (includeLabel) {
        arr.unshift(this.label());
      }
      return arr;
    };
    _proto6.label = function label() {
      return "AnalyticsRequest";
    };
    return AnalyticsRequest2;
  }();
  var EntitlementJwt = /* @__PURE__ */ function() {
    function EntitlementJwt2(data, includesLabel) {
      if (data === void 0) {
        data = [];
      }
      if (includesLabel === void 0) {
        includesLabel = true;
      }
      var base = includesLabel ? 1 : 0;
      this.jwt_ = data[base] == null ? null : data[base];
      this.source_ = data[1 + base] == null ? null : data[1 + base];
    }
    var _proto7 = EntitlementJwt2.prototype;
    _proto7.getJwt = function getJwt() {
      return this.jwt_;
    };
    _proto7.setJwt = function setJwt(value) {
      this.jwt_ = value;
    };
    _proto7.getSource = function getSource() {
      return this.source_;
    };
    _proto7.setSource = function setSource(value) {
      this.source_ = value;
    };
    _proto7.toArray = function toArray(includeLabel) {
      if (includeLabel === void 0) {
        includeLabel = true;
      }
      var arr = [
        this.jwt_,
        this.source_
      ];
      if (includeLabel) {
        arr.unshift(this.label());
      }
      return arr;
    };
    _proto7.label = function label() {
      return "EntitlementJwt";
    };
    return EntitlementJwt2;
  }();
  var EntitlementsRequest = /* @__PURE__ */ function() {
    function EntitlementsRequest2(data, includesLabel) {
      if (data === void 0) {
        data = [];
      }
      if (includesLabel === void 0) {
        includesLabel = true;
      }
      var base = includesLabel ? 1 : 0;
      this.usedEntitlement_ = data[base] == null || data[base] == void 0 ? null : new EntitlementJwt(data[base], includesLabel);
      this.clientEventTime_ = data[1 + base] == null || data[1 + base] == void 0 ? null : new Timestamp(data[1 + base], includesLabel);
      this.entitlementSource_ = data[2 + base] == null ? null : data[2 + base];
      this.entitlementResult_ = data[3 + base] == null ? null : data[3 + base];
      this.token_ = data[4 + base] == null ? null : data[4 + base];
      this.isUserRegistered_ = data[5 + base] == null ? null : data[5 + base];
    }
    var _proto8 = EntitlementsRequest2.prototype;
    _proto8.getUsedEntitlement = function getUsedEntitlement() {
      return this.usedEntitlement_;
    };
    _proto8.setUsedEntitlement = function setUsedEntitlement(value) {
      this.usedEntitlement_ = value;
    };
    _proto8.getClientEventTime = function getClientEventTime() {
      return this.clientEventTime_;
    };
    _proto8.setClientEventTime = function setClientEventTime(value) {
      this.clientEventTime_ = value;
    };
    _proto8.getEntitlementSource = function getEntitlementSource() {
      return this.entitlementSource_;
    };
    _proto8.setEntitlementSource = function setEntitlementSource(value) {
      this.entitlementSource_ = value;
    };
    _proto8.getEntitlementResult = function getEntitlementResult() {
      return this.entitlementResult_;
    };
    _proto8.setEntitlementResult = function setEntitlementResult(value) {
      this.entitlementResult_ = value;
    };
    _proto8.getToken = function getToken() {
      return this.token_;
    };
    _proto8.setToken = function setToken(value) {
      this.token_ = value;
    };
    _proto8.getIsUserRegistered = function getIsUserRegistered() {
      return this.isUserRegistered_;
    };
    _proto8.setIsUserRegistered = function setIsUserRegistered(value) {
      this.isUserRegistered_ = value;
    };
    _proto8.toArray = function toArray(includeLabel) {
      if (includeLabel === void 0) {
        includeLabel = true;
      }
      var arr = [
        this.usedEntitlement_ ? this.usedEntitlement_.toArray(includeLabel) : [],
        this.clientEventTime_ ? this.clientEventTime_.toArray(includeLabel) : [],
        this.entitlementSource_,
        this.entitlementResult_,
        this.token_,
        this.isUserRegistered_
      ];
      if (includeLabel) {
        arr.unshift(this.label());
      }
      return arr;
    };
    _proto8.label = function label() {
      return "EntitlementsRequest";
    };
    return EntitlementsRequest2;
  }();
  var EntitlementsResponse = /* @__PURE__ */ function() {
    function EntitlementsResponse2(data, includesLabel) {
      if (data === void 0) {
        data = [];
      }
      if (includesLabel === void 0) {
        includesLabel = true;
      }
      var base = includesLabel ? 1 : 0;
      this.jwt_ = data[base] == null ? null : data[base];
      this.swgUserToken_ = data[1 + base] == null ? null : data[1 + base];
    }
    var _proto9 = EntitlementsResponse2.prototype;
    _proto9.getJwt = function getJwt() {
      return this.jwt_;
    };
    _proto9.setJwt = function setJwt(value) {
      this.jwt_ = value;
    };
    _proto9.getSwgUserToken = function getSwgUserToken() {
      return this.swgUserToken_;
    };
    _proto9.setSwgUserToken = function setSwgUserToken(value) {
      this.swgUserToken_ = value;
    };
    _proto9.toArray = function toArray(includeLabel) {
      if (includeLabel === void 0) {
        includeLabel = true;
      }
      var arr = [
        this.jwt_,
        this.swgUserToken_
      ];
      if (includeLabel) {
        arr.unshift(this.label());
      }
      return arr;
    };
    _proto9.label = function label() {
      return "EntitlementsResponse";
    };
    return EntitlementsResponse2;
  }();
  var EventParams = /* @__PURE__ */ function() {
    function EventParams2(data, includesLabel) {
      if (data === void 0) {
        data = [];
      }
      if (includesLabel === void 0) {
        includesLabel = true;
      }
      var base = includesLabel ? 1 : 0;
      this.smartboxMessage_ = data[base] == null ? null : data[base];
      this.gpayTransactionId_ = data[1 + base] == null ? null : data[1 + base];
      this.hadLogged_ = data[2 + base] == null ? null : data[2 + base];
      this.sku_ = data[3 + base] == null ? null : data[3 + base];
      this.oldTransactionId_ = data[4 + base] == null ? null : data[4 + base];
      this.isUserRegistered_ = data[5 + base] == null ? null : data[5 + base];
      this.subscriptionFlow_ = data[6 + base] == null ? null : data[6 + base];
    }
    var _proto10 = EventParams2.prototype;
    _proto10.getSmartboxMessage = function getSmartboxMessage() {
      return this.smartboxMessage_;
    };
    _proto10.setSmartboxMessage = function setSmartboxMessage(value) {
      this.smartboxMessage_ = value;
    };
    _proto10.getGpayTransactionId = function getGpayTransactionId() {
      return this.gpayTransactionId_;
    };
    _proto10.setGpayTransactionId = function setGpayTransactionId(value) {
      this.gpayTransactionId_ = value;
    };
    _proto10.getHadLogged = function getHadLogged() {
      return this.hadLogged_;
    };
    _proto10.setHadLogged = function setHadLogged(value) {
      this.hadLogged_ = value;
    };
    _proto10.getSku = function getSku() {
      return this.sku_;
    };
    _proto10.setSku = function setSku(value) {
      this.sku_ = value;
    };
    _proto10.getOldTransactionId = function getOldTransactionId() {
      return this.oldTransactionId_;
    };
    _proto10.setOldTransactionId = function setOldTransactionId(value) {
      this.oldTransactionId_ = value;
    };
    _proto10.getIsUserRegistered = function getIsUserRegistered() {
      return this.isUserRegistered_;
    };
    _proto10.setIsUserRegistered = function setIsUserRegistered(value) {
      this.isUserRegistered_ = value;
    };
    _proto10.getSubscriptionFlow = function getSubscriptionFlow() {
      return this.subscriptionFlow_;
    };
    _proto10.setSubscriptionFlow = function setSubscriptionFlow(value) {
      this.subscriptionFlow_ = value;
    };
    _proto10.toArray = function toArray(includeLabel) {
      if (includeLabel === void 0) {
        includeLabel = true;
      }
      var arr = [
        this.smartboxMessage_,
        this.gpayTransactionId_,
        this.hadLogged_,
        this.sku_,
        this.oldTransactionId_,
        this.isUserRegistered_,
        this.subscriptionFlow_
      ];
      if (includeLabel) {
        arr.unshift(this.label());
      }
      return arr;
    };
    _proto10.label = function label() {
      return "EventParams";
    };
    return EventParams2;
  }();
  var FinishedLoggingResponse = /* @__PURE__ */ function() {
    function FinishedLoggingResponse2(data, includesLabel) {
      if (data === void 0) {
        data = [];
      }
      if (includesLabel === void 0) {
        includesLabel = true;
      }
      var base = includesLabel ? 1 : 0;
      this.complete_ = data[base] == null ? null : data[base];
      this.error_ = data[1 + base] == null ? null : data[1 + base];
    }
    var _proto11 = FinishedLoggingResponse2.prototype;
    _proto11.getComplete = function getComplete() {
      return this.complete_;
    };
    _proto11.setComplete = function setComplete(value) {
      this.complete_ = value;
    };
    _proto11.getError = function getError() {
      return this.error_;
    };
    _proto11.setError = function setError(value) {
      this.error_ = value;
    };
    _proto11.toArray = function toArray(includeLabel) {
      if (includeLabel === void 0) {
        includeLabel = true;
      }
      var arr = [
        this.complete_,
        this.error_
      ];
      if (includeLabel) {
        arr.unshift(this.label());
      }
      return arr;
    };
    _proto11.label = function label() {
      return "FinishedLoggingResponse";
    };
    return FinishedLoggingResponse2;
  }();
  var LinkSaveTokenRequest = /* @__PURE__ */ function() {
    function LinkSaveTokenRequest2(data, includesLabel) {
      if (data === void 0) {
        data = [];
      }
      if (includesLabel === void 0) {
        includesLabel = true;
      }
      var base = includesLabel ? 1 : 0;
      this.authCode_ = data[base] == null ? null : data[base];
      this.token_ = data[1 + base] == null ? null : data[1 + base];
    }
    var _proto12 = LinkSaveTokenRequest2.prototype;
    _proto12.getAuthCode = function getAuthCode() {
      return this.authCode_;
    };
    _proto12.setAuthCode = function setAuthCode(value) {
      this.authCode_ = value;
    };
    _proto12.getToken = function getToken() {
      return this.token_;
    };
    _proto12.setToken = function setToken(value) {
      this.token_ = value;
    };
    _proto12.toArray = function toArray(includeLabel) {
      if (includeLabel === void 0) {
        includeLabel = true;
      }
      var arr = [
        this.authCode_,
        this.token_
      ];
      if (includeLabel) {
        arr.unshift(this.label());
      }
      return arr;
    };
    _proto12.label = function label() {
      return "LinkSaveTokenRequest";
    };
    return LinkSaveTokenRequest2;
  }();
  var LinkingInfoResponse = /* @__PURE__ */ function() {
    function LinkingInfoResponse2(data, includesLabel) {
      if (data === void 0) {
        data = [];
      }
      if (includesLabel === void 0) {
        includesLabel = true;
      }
      var base = includesLabel ? 1 : 0;
      this.requested_ = data[base] == null ? null : data[base];
    }
    var _proto13 = LinkingInfoResponse2.prototype;
    _proto13.getRequested = function getRequested() {
      return this.requested_;
    };
    _proto13.setRequested = function setRequested(value) {
      this.requested_ = value;
    };
    _proto13.toArray = function toArray(includeLabel) {
      if (includeLabel === void 0) {
        includeLabel = true;
      }
      var arr = [
        this.requested_
      ];
      if (includeLabel) {
        arr.unshift(this.label());
      }
      return arr;
    };
    _proto13.label = function label() {
      return "LinkingInfoResponse";
    };
    return LinkingInfoResponse2;
  }();
  var OpenDialogRequest = /* @__PURE__ */ function() {
    function OpenDialogRequest2(data, includesLabel) {
      if (data === void 0) {
        data = [];
      }
      if (includesLabel === void 0) {
        includesLabel = true;
      }
      var base = includesLabel ? 1 : 0;
      this.urlPath_ = data[base] == null ? null : data[base];
    }
    var _proto14 = OpenDialogRequest2.prototype;
    _proto14.getUrlPath = function getUrlPath() {
      return this.urlPath_;
    };
    _proto14.setUrlPath = function setUrlPath(value) {
      this.urlPath_ = value;
    };
    _proto14.toArray = function toArray(includeLabel) {
      if (includeLabel === void 0) {
        includeLabel = true;
      }
      var arr = [
        this.urlPath_
      ];
      if (includeLabel) {
        arr.unshift(this.label());
      }
      return arr;
    };
    _proto14.label = function label() {
      return "OpenDialogRequest";
    };
    return OpenDialogRequest2;
  }();
  var SkuSelectedResponse = /* @__PURE__ */ function() {
    function SkuSelectedResponse2(data, includesLabel) {
      if (data === void 0) {
        data = [];
      }
      if (includesLabel === void 0) {
        includesLabel = true;
      }
      var base = includesLabel ? 1 : 0;
      this.sku_ = data[base] == null ? null : data[base];
      this.oldSku_ = data[1 + base] == null ? null : data[1 + base];
      this.oneTime_ = data[2 + base] == null ? null : data[2 + base];
      this.playOffer_ = data[3 + base] == null ? null : data[3 + base];
      this.oldPlayOffer_ = data[4 + base] == null ? null : data[4 + base];
      this.customMessage_ = data[5 + base] == null ? null : data[5 + base];
      this.anonymous_ = data[6 + base] == null ? null : data[6 + base];
    }
    var _proto15 = SkuSelectedResponse2.prototype;
    _proto15.getSku = function getSku() {
      return this.sku_;
    };
    _proto15.setSku = function setSku(value) {
      this.sku_ = value;
    };
    _proto15.getOldSku = function getOldSku() {
      return this.oldSku_;
    };
    _proto15.setOldSku = function setOldSku(value) {
      this.oldSku_ = value;
    };
    _proto15.getOneTime = function getOneTime() {
      return this.oneTime_;
    };
    _proto15.setOneTime = function setOneTime(value) {
      this.oneTime_ = value;
    };
    _proto15.getPlayOffer = function getPlayOffer() {
      return this.playOffer_;
    };
    _proto15.setPlayOffer = function setPlayOffer(value) {
      this.playOffer_ = value;
    };
    _proto15.getOldPlayOffer = function getOldPlayOffer() {
      return this.oldPlayOffer_;
    };
    _proto15.setOldPlayOffer = function setOldPlayOffer(value) {
      this.oldPlayOffer_ = value;
    };
    _proto15.getCustomMessage = function getCustomMessage() {
      return this.customMessage_;
    };
    _proto15.setCustomMessage = function setCustomMessage(value) {
      this.customMessage_ = value;
    };
    _proto15.getAnonymous = function getAnonymous() {
      return this.anonymous_;
    };
    _proto15.setAnonymous = function setAnonymous(value) {
      this.anonymous_ = value;
    };
    _proto15.toArray = function toArray(includeLabel) {
      if (includeLabel === void 0) {
        includeLabel = true;
      }
      var arr = [
        this.sku_,
        this.oldSku_,
        this.oneTime_,
        this.playOffer_,
        this.oldPlayOffer_,
        this.customMessage_,
        this.anonymous_
      ];
      if (includeLabel) {
        arr.unshift(this.label());
      }
      return arr;
    };
    _proto15.label = function label() {
      return "SkuSelectedResponse";
    };
    return SkuSelectedResponse2;
  }();
  var SmartBoxMessage = /* @__PURE__ */ function() {
    function SmartBoxMessage2(data, includesLabel) {
      if (data === void 0) {
        data = [];
      }
      if (includesLabel === void 0) {
        includesLabel = true;
      }
      var base = includesLabel ? 1 : 0;
      this.isClicked_ = data[base] == null ? null : data[base];
    }
    var _proto16 = SmartBoxMessage2.prototype;
    _proto16.getIsClicked = function getIsClicked() {
      return this.isClicked_;
    };
    _proto16.setIsClicked = function setIsClicked(value) {
      this.isClicked_ = value;
    };
    _proto16.toArray = function toArray(includeLabel) {
      if (includeLabel === void 0) {
        includeLabel = true;
      }
      var arr = [
        this.isClicked_
      ];
      if (includeLabel) {
        arr.unshift(this.label());
      }
      return arr;
    };
    _proto16.label = function label() {
      return "SmartBoxMessage";
    };
    return SmartBoxMessage2;
  }();
  var SubscribeResponse$1 = /* @__PURE__ */ function() {
    function SubscribeResponse$12(data, includesLabel) {
      if (data === void 0) {
        data = [];
      }
      if (includesLabel === void 0) {
        includesLabel = true;
      }
      var base = includesLabel ? 1 : 0;
      this.subscribe_ = data[base] == null ? null : data[base];
    }
    var _proto17 = SubscribeResponse$12.prototype;
    _proto17.getSubscribe = function getSubscribe() {
      return this.subscribe_;
    };
    _proto17.setSubscribe = function setSubscribe(value) {
      this.subscribe_ = value;
    };
    _proto17.toArray = function toArray(includeLabel) {
      if (includeLabel === void 0) {
        includeLabel = true;
      }
      var arr = [
        this.subscribe_
      ];
      if (includeLabel) {
        arr.unshift(this.label());
      }
      return arr;
    };
    _proto17.label = function label() {
      return "SubscribeResponse";
    };
    return SubscribeResponse$12;
  }();
  var Timestamp = /* @__PURE__ */ function() {
    function Timestamp2(data, includesLabel) {
      if (data === void 0) {
        data = [];
      }
      if (includesLabel === void 0) {
        includesLabel = true;
      }
      var base = includesLabel ? 1 : 0;
      this.seconds_ = data[base] == null ? null : data[base];
      this.nanos_ = data[1 + base] == null ? null : data[1 + base];
    }
    var _proto18 = Timestamp2.prototype;
    _proto18.getSeconds = function getSeconds() {
      return this.seconds_;
    };
    _proto18.setSeconds = function setSeconds(value) {
      this.seconds_ = value;
    };
    _proto18.getNanos = function getNanos() {
      return this.nanos_;
    };
    _proto18.setNanos = function setNanos(value) {
      this.nanos_ = value;
    };
    _proto18.toArray = function toArray(includeLabel) {
      if (includeLabel === void 0) {
        includeLabel = true;
      }
      var arr = [
        this.seconds_,
        this.nanos_
      ];
      if (includeLabel) {
        arr.unshift(this.label());
      }
      return arr;
    };
    _proto18.label = function label() {
      return "Timestamp";
    };
    return Timestamp2;
  }();
  var ToastCloseRequest = /* @__PURE__ */ function() {
    function ToastCloseRequest2(data, includesLabel) {
      if (data === void 0) {
        data = [];
      }
      if (includesLabel === void 0) {
        includesLabel = true;
      }
      var base = includesLabel ? 1 : 0;
      this.close_ = data[base] == null ? null : data[base];
    }
    var _proto19 = ToastCloseRequest2.prototype;
    _proto19.getClose = function getClose() {
      return this.close_;
    };
    _proto19.setClose = function setClose(value) {
      this.close_ = value;
    };
    _proto19.toArray = function toArray(includeLabel) {
      if (includeLabel === void 0) {
        includeLabel = true;
      }
      var arr = [
        this.close_
      ];
      if (includeLabel) {
        arr.unshift(this.label());
      }
      return arr;
    };
    _proto19.label = function label() {
      return "ToastCloseRequest";
    };
    return ToastCloseRequest2;
  }();
  var ViewSubscriptionsResponse = /* @__PURE__ */ function() {
    function ViewSubscriptionsResponse2(data, includesLabel) {
      if (data === void 0) {
        data = [];
      }
      if (includesLabel === void 0) {
        includesLabel = true;
      }
      var base = includesLabel ? 1 : 0;
      this.native_ = data[base] == null ? null : data[base];
    }
    var _proto20 = ViewSubscriptionsResponse2.prototype;
    _proto20.getNative = function getNative() {
      return this.native_;
    };
    _proto20.setNative = function setNative(value) {
      this.native_ = value;
    };
    _proto20.toArray = function toArray(includeLabel) {
      if (includeLabel === void 0) {
        includeLabel = true;
      }
      var arr = [
        this.native_
      ];
      if (includeLabel) {
        arr.unshift(this.label());
      }
      return arr;
    };
    _proto20.label = function label() {
      return "ViewSubscriptionsResponse";
    };
    return ViewSubscriptionsResponse2;
  }();
  var PROTO_MAP = {
    "AccountCreationRequest": AccountCreationRequest,
    "ActionRequest": ActionRequest,
    "AlreadySubscribedResponse": AlreadySubscribedResponse,
    "AnalyticsContext": AnalyticsContext,
    "AnalyticsEventMeta": AnalyticsEventMeta,
    "AnalyticsRequest": AnalyticsRequest,
    "EntitlementJwt": EntitlementJwt,
    "EntitlementsRequest": EntitlementsRequest,
    "EntitlementsResponse": EntitlementsResponse,
    "EventParams": EventParams,
    "FinishedLoggingResponse": FinishedLoggingResponse,
    "LinkSaveTokenRequest": LinkSaveTokenRequest,
    "LinkingInfoResponse": LinkingInfoResponse,
    "OpenDialogRequest": OpenDialogRequest,
    "SkuSelectedResponse": SkuSelectedResponse,
    "SmartBoxMessage": SmartBoxMessage,
    "SubscribeResponse": SubscribeResponse$1,
    "Timestamp": Timestamp,
    "ToastCloseRequest": ToastCloseRequest,
    "ViewSubscriptionsResponse": ViewSubscriptionsResponse
  };
  function deserialize(data) {
    var key = data ? data[0] : null;
    if (key) {
      var ctor = PROTO_MAP[key];
      if (ctor) {
        return new ctor(data);
      }
    }
    throw new Error("Deserialization failed for " + data);
  }
  function getLabel(messageType) {
    var message = new messageType();
    return message.label();
  }
  var FilterResult = {
    PROCESS_EVENT: 0,
    CANCEL_EVENT: 1
  };
  var View = /* @__PURE__ */ function() {
    function View2() {
    }
    var _proto22 = View2.prototype;
    _proto22.getElement = function getElement() {
    };
    _proto22.init = function init(unusedDialog) {
    };
    _proto22.resized = function resized() {
    };
    _proto22.whenComplete = function whenComplete() {
    };
    _proto22.shouldFadeBody = function shouldFadeBody() {
    };
    _proto22.hasLoadingIndicator = function hasLoadingIndicator() {
    };
    return View2;
  }();
  function acceptPortResultData(port, requireOrigin, requireOriginVerified, requireSecureChannel) {
    return port.acceptResult().then(function(result) {
      if (result.origin != requireOrigin || requireOriginVerified && !result.originVerified || requireSecureChannel && !result.secureChannel) {
        throw new Error("channel mismatch");
      }
      return result.data;
    });
  }
  function debugLog(var_args) {
    if (/swg.debug=1/.test(self.location.hash)) {
      var logArgs = Array.prototype.slice.call(arguments, 0);
      logArgs.unshift("[Subscriptions]");
      log.apply(log, logArgs);
    }
  }
  function log(var_args) {
    console.log.apply(console, arguments);
  }
  function warn(var_args) {
    console.warn.apply(console, arguments);
  }
  function assert2(shouldBeTrueish, message, var_args) {
    var firstElement;
    if (!shouldBeTrueish) {
      message = message || "Assertion failed";
      var splitMessage = message.split("%s");
      var first = splitMessage.shift();
      var formatted = first;
      var messageArray = [];
      pushIfNonEmpty(messageArray, first);
      for (var i = 2; i < arguments.length; i++) {
        var val = arguments[i];
        if (val && val.tagName) {
          firstElement = val;
        }
        var nextConstant = splitMessage.shift();
        messageArray.push(val);
        pushIfNonEmpty(messageArray, nextConstant.trim());
        formatted += toString(val) + nextConstant;
      }
      var e = new Error(formatted);
      e.fromAssert = true;
      e.associatedElement = firstElement;
      e.messageArray = messageArray;
      throw e;
    }
    return shouldBeTrueish;
  }
  function pushIfNonEmpty(array, val) {
    if (val != "") {
      array.push(val);
    }
  }
  function toString(val) {
    if (val && val.nodeType == 1) {
      return val.tagName.toLowerCase() + (val.id ? "#" + val.id : "");
    }
    return val;
  }
  function map2(initial) {
    var obj = Object.create(null);
    if (initial) {
      Object.assign(obj, initial);
    }
    return obj;
  }
  function findInArray(array, predicate) {
    if (!array) {
      return null;
    }
    var len = array.length || 0;
    if (len > 0) {
      for (var i = 0; i < len; i++) {
        var other = array[i];
        if (predicate(other, i, array)) {
          return other;
        }
      }
    }
    return null;
  }
  function getRandomInts(numInts, maxVal) {
    var arr = maxVal < 256 ? new Uint8Array(numInts) : maxVal < 32768 ? new Uint16Array(numInts) : new Uint32Array(numInts);
    var isIE = !!self["msCrypto"];
    var localCrypto = isIE ? self["msCrypto"] : self.crypto;
    if (localCrypto && localCrypto.getRandomValues) {
      localCrypto.getRandomValues(arr);
      for (var i = arr.length - 1; i > -1; i--) {
        arr[i] = arr[i] % maxVal;
      }
    } else {
      for (var _i = arr.length - 1; _i > -1; _i--) {
        arr[_i] = Math.floor(Math.random() * maxVal);
      }
    }
    return arr;
  }
  var base64UrlDecodeSubs = {
    "-": "+",
    "_": "/"
  };
  var base64UrlEncodeSubs = {
    "+": "-",
    "/": "_",
    "=": ""
  };
  function stringToBytes(str) {
    var bytes = new Uint8Array(str.length);
    for (var i = 0; i < str.length; i++) {
      var charCode = str.charCodeAt(i);
      assert2(charCode <= 255, "Characters must be in range [0,255]");
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
  function utf8DecodeSync(bytes) {
    if (typeof TextDecoder !== "undefined") {
      return new TextDecoder("utf-8").decode(bytes);
    }
    var asciiString = bytesToString(new Uint8Array(bytes));
    return decodeURIComponent(escape(asciiString));
  }
  function utf8EncodeSync(string) {
    if (typeof TextEncoder !== "undefined") {
      return new TextEncoder("utf-8").encode(string);
    }
    return stringToBytes(unescape(encodeURIComponent(string)));
  }
  function base64UrlDecodeToBytes(str) {
    var encoded = atob(str.replace(/[-_]/g, function(ch) {
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
  var CHARS$1 = "0123456789ABCDEF";
  function startsWith(string, prefix) {
    if (prefix.length > string.length) {
      return false;
    }
    return string.lastIndexOf(prefix, 0) == 0;
  }
  function getChar19(v) {
    return CHARS$1[v & 3 | 8];
  }
  function getMonthlyTimeIdentifier() {
    var hexTime = Date.now().toString(16);
    return hexTime.substring(hexTime.length - 8).toUpperCase();
  }
  function getUuid() {
    var uuid = getMonthlyTimeIdentifier() + "-";
    var rIndex = 0;
    var rands = getRandomInts(23, 16);
    for (var i = 9; i < 36; i++) {
      switch (i) {
        case 13:
        case 18:
        case 23:
          uuid += "-";
          break;
        case 14:
          uuid += "4";
          break;
        case 19:
          uuid += getChar19(rands[rIndex++]);
          break;
        default:
          uuid += CHARS$1[rands[rIndex++]];
          break;
      }
    }
    return uuid;
  }
  function getSwgTransactionId() {
    return getUuid() + ".swg";
  }
  function padString(str, format) {
    return (format + str).slice(-format.length);
  }
  var PADDING = "00000000";
  function toHex(buffer2) {
    var hexCodes = [];
    var view = new DataView(buffer2);
    for (var i = 0; i < view.byteLength; i += 4) {
      var stringValue = view.getUint32(i).toString(16);
      hexCodes.push(padString(stringValue, PADDING));
    }
    return hexCodes.join("");
  }
  function hash(stringToHash) {
    var crypto = self.crypto || self.msCrypto;
    var subtle = crypto == null ? void 0 : crypto.subtle;
    if (!subtle) {
      var message = "Swgjs only works on secure (HTTPS or localhost) pages.";
      warn(message);
      return Promise.reject(message);
    }
    return subtle.digest("SHA-512", utf8EncodeSync(stringToHash)).then(function(digest) {
      return toHex(digest);
    });
  }
  var propertyNameCache;
  var vendorPrefixes = ["Webkit", "webkit", "Moz", "moz", "ms", "O", "o"];
  var defaultStyles = {
    "align-content": "normal",
    "animation": "none",
    "align-items": "normal",
    "align-self": "auto",
    "alignment-baseline": "auto",
    "backface-visibility": "hidden",
    "background-clip": "border-box",
    "background-image": "none",
    "baseline-shift": "0",
    "block-size": "auto",
    "border": "none",
    "border-collapse": "separate",
    "bottom": "0",
    "box-sizing": "border-box",
    "break-after": "auto",
    "break-before": "auto",
    "break-inside": "auto",
    "buffered-rendering": "auto",
    "caption-side": "top",
    "caret-color": "rgb(51, 51, 51)",
    "clear": "none",
    "color": "rgb(51, 51, 51)",
    "color-rendering": "auto",
    "column-count": "auto",
    "column-fill": "balance",
    "column-gap": "normal",
    "column-rule-color": "rgb(51, 51, 51)",
    "column-rule-style": "none",
    "column-rule-width": "0",
    "column-span": "none",
    "column-width": "auto",
    "contain": "none",
    "counter-increment": "none",
    "counter-reset": "none",
    "cursor": "auto",
    "direction": "inherit",
    "display": "block",
    "empty-cells": "show",
    "filter": "none",
    "flex": "none",
    "flex-flow": "row nowrap",
    "float": "none",
    "flood-color": "rgb(0, 0, 0)",
    "flood-opacity": "1",
    "font": "none",
    "font-size": "medium",
    "font-family": "",
    "height": "auto",
    "hyphens": "manual",
    "image-rendering": "auto",
    "inline-size": "",
    "isolation": "auto",
    "justify-content": "normal",
    "justify-items": "normal",
    "justify-self": "auto",
    "letter-spacing": "normal",
    "lighting-color": "rgb(255, 255, 255)",
    "line-break": "auto",
    "line-height": "normal",
    "margin-bottom": "0",
    "mask": "none",
    "max-block-size": "none",
    "max-height": "none",
    "max-inline-size": "none",
    "max-width": "none",
    "min-block-size": "none",
    "min-height": "0",
    "min-inline-size": "0",
    "min-width": "0",
    "mix-blend-mode": "normal",
    "object-fit": "fill",
    "offset-distance": "none",
    "offset-path": "none",
    "offset-rotate": "auto 0deg",
    "opacity": "1",
    "order": "0",
    "orphans": "2",
    "outline": "none",
    "overflow-anchor": "auto",
    "overflow-wrap": "normal",
    "overflow": "visible",
    "padding": "0",
    "page": "",
    "perspective": "none",
    "pointer-events": "auto",
    "position": "static",
    "quotes": "",
    "resize": "none",
    "right": "0",
    "scroll-behavior": "auto",
    "tab-size": "8",
    "table-layout": "auto",
    "text-align": "start",
    "text-align-last": "auto",
    "text-anchor": "start",
    "text-combine-upright": "none",
    "text-decoration": "none",
    "text-indent": "0",
    "text-orientation": "mixed",
    "text-overflow": "clip",
    "text-rendering": "auto",
    "text-shadow": "none",
    "text-size-adjust": "auto",
    "text-transform": "none",
    "text-underline-position": "auto",
    "top": "auto",
    "touch-action": "auto",
    "transform": "none",
    "transition": "none 0s ease 0s",
    "unicode-bidi": "normal",
    "user-select": "auto",
    "vector-effect": "none",
    "vertical-align": "baseline",
    "visibility": "visible",
    "white-space": "normal",
    "widows": "2",
    "word-break": "normal",
    "word-spacing": "0",
    "word-wrap": "normal",
    "writing-mode": "horizontal-tb",
    "zoom": "1",
    "z-index": "auto"
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
  function getVendorJsPropertyName(style, camelCase, bypassCache) {
    if (startsWith(camelCase, "--")) {
      return camelCase;
    }
    if (!propertyNameCache) {
      propertyNameCache = map2();
    }
    var propertyName = propertyNameCache[camelCase];
    if (!propertyName || bypassCache) {
      propertyName = camelCase;
      if (style[camelCase] === void 0) {
        var titleCase = camelCaseToTitleCase(camelCase);
        var prefixedPropertyName = getVendorJsPropertyName_(style, titleCase);
        if (style[prefixedPropertyName] !== void 0) {
          propertyName = prefixedPropertyName;
        }
      }
      if (!bypassCache) {
        propertyNameCache[camelCase] = propertyName;
      }
    }
    return propertyName;
  }
  function setImportantStyles$1(element, styles) {
    for (var k in styles) {
      element.style.setProperty(getVendorJsPropertyName(styles, k), styles[k].toString(), "important");
    }
  }
  function setStyle(element, property, value, units, bypassCache) {
    var propertyName = getVendorJsPropertyName(element.style, property, bypassCache);
    if (propertyName) {
      element.style[propertyName] = units ? value + units : value;
    }
  }
  function setStyles(element, styles) {
    for (var k in styles) {
      setStyle(element, k, styles[k]);
    }
  }
  function resetStyles(element, properties) {
    var styleObj = {};
    properties.forEach(function(prop) {
      styleObj[prop] = null;
    });
    setStyles(element, styleObj);
  }
  function resetAllStyles(element) {
    setImportantStyles$1(element, defaultStyles);
  }
  var styleType = "text/css";
  function addAttributesToElement(element, attributes) {
    for (var attr in attributes) {
      if (attr == "style") {
        setStyles(element, attributes[attr]);
      } else {
        element.setAttribute(attr, attributes[attr]);
      }
    }
    return element;
  }
  function createElement(doc, tagName, attributes, content) {
    var element = doc.createElement(tagName);
    addAttributesToElement(element, attributes);
    if (content != null) {
      if (typeof content == "string") {
        element.textContent = content;
      } else if (content.nodeType) {
        element.appendChild(content);
      } else if ("length" in content) {
        for (var i = 0; i < content.length; i++) {
          element.appendChild(content[i]);
        }
      } else {
        assert2(false, "Unsupported content: %s", content);
      }
    }
    return element;
  }
  function removeElement(element) {
    if (element.parentElement) {
      element.parentElement.removeChild(element);
    }
  }
  function removeChildren(parent) {
    parent.textContent = "";
  }
  function injectStyleSheet(doc, styleText) {
    var styleElement = createElement(doc.getWin().document, "style", {
      "type": styleType
    });
    styleElement.textContent = styleText;
    doc.getHead().appendChild(styleElement);
    return styleElement;
  }
  function _isConnected(node) {
    if ("isConnected" in node) {
      return node["isConnected"];
    }
    var root = node.ownerDocument && node.ownerDocument.documentElement;
    return root && root.contains(node) || false;
  }
  function isLegacyEdgeBrowser(win) {
    var nav = win.navigator;
    return /Edge/i.test(nav && nav.userAgent);
  }
  var _require = require_activity_ports();
  var createAbortError = _require.createAbortError;
  var isAbortError = _require.isAbortError;
  function isCancelError(error) {
    return isAbortError(error);
  }
  function createCancelError(win, message) {
    return createAbortError(win, message);
  }
  var ErrorUtils = /* @__PURE__ */ function() {
    function ErrorUtils2() {
    }
    ErrorUtils2.throwAsync = function throwAsync(error) {
      setTimeout(function() {
        throw error;
      });
    };
    return ErrorUtils2;
  }();
  var iframeAttributes$2 = {
    "frameborder": "0",
    "scrolling": "no"
  };
  var ActivityIframeView = /* @__PURE__ */ function(_View) {
    _inherits(ActivityIframeView2, _View);
    var _super = _createSuper(ActivityIframeView2);
    function ActivityIframeView2(win, activityPorts, src, args, shouldFadeBody, hasLoadingIndicator) {
      var _this;
      if (shouldFadeBody === void 0) {
        shouldFadeBody = false;
      }
      if (hasLoadingIndicator === void 0) {
        hasLoadingIndicator = false;
      }
      _this = _super.call(this);
      _this.win_ = win;
      _this.doc_ = _this.win_.document;
      _this.iframe_ = createElement(_this.doc_, "iframe", iframeAttributes$2);
      _this.activityPorts_ = activityPorts;
      _this.src_ = src;
      _this.args_ = args || {};
      _this.shouldFadeBody_ = shouldFadeBody;
      _this.hasLoadingIndicator_ = hasLoadingIndicator;
      _this.port_ = null;
      _this.portResolver_ = null;
      _this.portPromise_ = new Promise(function(resolve) {
        _this.portResolver_ = resolve;
      });
      return _this;
    }
    var _proto23 = ActivityIframeView2.prototype;
    _proto23.getElement = function getElement() {
      return this.iframe_;
    };
    _proto23.init = function init(dialog) {
      var _this2 = this;
      return this.activityPorts_.openIframe(this.iframe_, this.src_, this.args_).then(function(port) {
        return _this2.onOpenIframeResponse_(port, dialog);
      });
    };
    _proto23.shouldFadeBody = function shouldFadeBody() {
      return this.shouldFadeBody_;
    };
    _proto23.hasLoadingIndicator = function hasLoadingIndicator() {
      return this.hasLoadingIndicator_;
    };
    _proto23.onOpenIframeResponse_ = function onOpenIframeResponse_(port, dialog) {
      var _this3 = this;
      this.port_ = port;
      this.portResolver_(port);
      this.port_.onResizeRequest(function(height) {
        dialog.resizeView(_this3, height);
      });
      return this.port_.whenReady();
    };
    _proto23.getPortPromise_ = function getPortPromise_() {
      return this.portPromise_;
    };
    _proto23.on = function on(message, callback) {
      this.getPortPromise_().then(function(port) {
        port.on(message, callback);
      });
    };
    _proto23.execute = function execute(request) {
      this.getPortPromise_().then(function(port) {
        port.execute(request);
      });
    };
    _proto23.acceptResult = function acceptResult() {
      return this.getPortPromise_().then(function(port) {
        return port.acceptResult();
      });
    };
    _proto23.acceptResultAndVerify = function acceptResultAndVerify(requireOrigin, requireOriginVerified, requireSecureChannel) {
      return this.getPortPromise_().then(function(port) {
        return acceptPortResultData(port, requireOrigin, requireOriginVerified, requireSecureChannel);
      });
    };
    _proto23.whenComplete = function whenComplete() {
      return this.acceptResult();
    };
    _proto23.onCancel = function onCancel(callback) {
      this.acceptResult().catch(function(reason) {
        if (isCancelError(reason)) {
          callback();
        }
        throw reason;
      });
    };
    _proto23.resized = function resized() {
      if (this.port_) {
        this.port_.resized();
      }
    };
    return ActivityIframeView2;
  }(View);
  var Constants$1 = {};
  Constants$1.USER_TOKEN = "USER_TOKEN";
  function parseJson2(json) {
    return JSON.parse(json);
  }
  function tryParseJson(json, onFailed) {
    try {
      return parseJson2(json);
    } catch (e) {
      if (onFailed) {
        onFailed(e);
      }
      return void 0;
    }
  }
  function getPropertyFromJsonString(jsonString, propertyName) {
    var json = tryParseJson(jsonString);
    return json && json[propertyName] || null;
  }
  var JwtHelper = /* @__PURE__ */ function() {
    function JwtHelper2() {
    }
    var _proto24 = JwtHelper2.prototype;
    _proto24.decode = function decode(encodedToken) {
      return this.decodeInternal_(encodedToken).payload;
    };
    _proto24.decodeInternal_ = function decodeInternal_(encodedToken) {
      function invalidToken() {
        throw new Error('Invalid token: "' + encodedToken + '"');
      }
      var parts = encodedToken.split(".");
      if (parts.length != 3) {
        invalidToken();
      }
      var headerUtf8Bytes = base64UrlDecodeToBytes(parts[0]);
      var payloadUtf8Bytes = base64UrlDecodeToBytes(parts[1]);
      return {
        header: tryParseJson(utf8DecodeSync(headerUtf8Bytes), invalidToken),
        payload: tryParseJson(utf8DecodeSync(payloadUtf8Bytes), invalidToken),
        verifiable: parts[0] + "." + parts[1],
        sig: parts[2]
      };
    };
    return JwtHelper2;
  }();
  var GOOGLE_METERING_SOURCE = "google:metering";
  var PRIVILEGED_SOURCE = "privileged";
  var DEV_MODE_TOKEN = "GOOGLE_DEV_MODE_TOKEN";
  var Entitlements = /* @__PURE__ */ function() {
    function Entitlements2(service, raw, entitlements, currentProduct, ackHandler, consumeHandler, isReadyToPay, decryptedDocumentKey) {
      this.service = service;
      this.raw = raw;
      this.entitlements = entitlements;
      this.isReadyToPay = isReadyToPay || false;
      this.decryptedDocumentKey = decryptedDocumentKey || null;
      this.product_ = currentProduct;
      this.ackHandler_ = ackHandler;
      this.consumeHandler_ = consumeHandler;
    }
    var _proto25 = Entitlements2.prototype;
    _proto25.clone = function clone() {
      return new Entitlements2(this.service, this.raw, this.entitlements.map(function(ent) {
        return ent.clone();
      }), this.product_, this.ackHandler_, this.consumeHandler_, this.isReadyToPay, this.decryptedDocumentKey);
    };
    _proto25.json = function json() {
      return {
        "service": this.service,
        "entitlements": this.entitlements.map(function(item) {
          return item.json();
        }),
        "isReadyToPay": this.isReadyToPay
      };
    };
    _proto25.enablesThisWithCacheableEntitlements = function enablesThisWithCacheableEntitlements() {
      var entitlement = this.getEntitlementForThis();
      return !!entitlement && entitlement.source !== GOOGLE_METERING_SOURCE && entitlement.subscriptionToken !== DEV_MODE_TOKEN;
    };
    _proto25.enablesThisWithGoogleMetering = function enablesThisWithGoogleMetering() {
      var entitlement = this.getEntitlementForThis();
      return !!entitlement && entitlement.source === GOOGLE_METERING_SOURCE;
    };
    _proto25.enablesThis = function enablesThis(source) {
      return this.enables(this.product_, source);
    };
    _proto25.enablesAny = function enablesAny(source) {
      for (var i = 0; i < this.entitlements.length; i++) {
        if (this.entitlements[i].products.length > 0 && (!source || source == this.entitlements[i].source)) {
          return true;
        }
      }
      return false;
    };
    _proto25.enables = function enables(product, source) {
      if (!product) {
        return false;
      }
      return !!this.getEntitlementFor(product, source);
    };
    _proto25.getEntitlementForThis = function getEntitlementForThis(source) {
      return this.getEntitlementFor(this.product_, source);
    };
    _proto25.getEntitlementFor = function getEntitlementFor(product, source) {
      if (!product) {
        warn("SwG needs this article to define a product ID (e.g. example.com:premium). Articles can define a product ID using JSON+LD. SwG can check entitlements after this article defines a product ID.");
        return null;
      }
      var entitlementsThatUnlockArticle = this.entitlements.filter(function(entitlement) {
        return entitlement.enables(product) && (!source || source === entitlement.source);
      });
      var subscriptionEntitlement = findInArray(entitlementsThatUnlockArticle, function(entitlement) {
        return entitlement.source !== GOOGLE_METERING_SOURCE;
      });
      var meteringEntitlement = findInArray(entitlementsThatUnlockArticle, function(entitlement) {
        return entitlement.source === GOOGLE_METERING_SOURCE;
      });
      return subscriptionEntitlement || meteringEntitlement || null;
    };
    _proto25.getEntitlementForSource = function getEntitlementForSource(source) {
      if (this.entitlements.length > 0) {
        for (var i = 0; i < this.entitlements.length; i++) {
          if (this.entitlements[i].subscriptionToken && source == this.entitlements[i].source) {
            return this.entitlements[i];
          }
        }
      }
      return null;
    };
    _proto25.ack = function ack() {
      this.ackHandler_(this);
    };
    _proto25.consume = function consume(onCloseDialog) {
      this.consumeHandler_(this, onCloseDialog);
    };
    return Entitlements2;
  }();
  var Entitlement = /* @__PURE__ */ function() {
    function Entitlement3(source, products, subscriptionToken) {
      this.source = source;
      this.products = products;
      this.subscriptionToken = subscriptionToken;
    }
    var _proto26 = Entitlement3.prototype;
    _proto26.clone = function clone() {
      return new Entitlement3(this.source, this.products.slice(0), this.subscriptionToken);
    };
    _proto26.json = function json() {
      return {
        "source": this.source,
        "products": this.products,
        "subscriptionToken": this.subscriptionToken
      };
    };
    _proto26.enables = function enables(product) {
      if (!product) {
        return false;
      }
      var eq = product.indexOf(":");
      if (eq != -1) {
        var publication = product.substring(0, eq + 1);
        if (publication + "*" == product && this.products.filter(function(candidate) {
          return candidate.substring(0, eq + 1) == publication;
        }).length >= 1) {
          debugLog("enabled with wildcard productId");
          return true;
        }
        if (this.products.includes(publication + "*")) {
          debugLog("enabled with wildcard entitlement");
          return true;
        }
      }
      return this.products.includes(product);
    };
    Entitlement3.parseFromJson = function parseFromJson(json) {
      if (!json) {
        json = {};
      }
      var source = json["source"] || "";
      var products = json["products"] || [];
      var subscriptionToken = json["subscriptionToken"];
      return new Entitlement3(source, products, subscriptionToken);
    };
    Entitlement3.parseListFromJson = function parseListFromJson(json) {
      var jsonList = Array.isArray(json) ? json : [json];
      return jsonList.map(function(json2) {
        return Entitlement3.parseFromJson(json2);
      });
    };
    _proto26.getSku = function getSku() {
      if (this.source !== "google") {
        return null;
      }
      var sku = getPropertyFromJsonString(this.subscriptionToken, "productId") || null;
      if (!sku) {
        warn("Unable to retrieve SKU from SwG subscription token");
      }
      return sku;
    };
    return Entitlement3;
  }();
  var UserData = /* @__PURE__ */ function() {
    function UserData2(idToken, data) {
      this.idToken = idToken;
      this.data = data;
      this.id = data["sub"];
      this.email = data["email"];
      this.emailVerified = data["email_verified"];
      this.name = data["name"];
      this.givenName = data["given_name"];
      this.familyName = data["family_name"];
      this.pictureUrl = data["picture"];
    }
    var _proto27 = UserData2.prototype;
    _proto27.clone = function clone() {
      return new UserData2(this.idToken, this.data);
    };
    _proto27.json = function json() {
      return {
        "id": this.id,
        "email": this.email,
        "emailVerified": this.emailVerified,
        "name": this.name,
        "givenName": this.givenName,
        "familyName": this.familyName,
        "pictureUrl": this.pictureUrl
      };
    };
    return UserData2;
  }();
  var SubscribeResponse = /* @__PURE__ */ function() {
    function SubscribeResponse2(raw, purchaseData, userData, entitlements, productType, completeHandler, oldSku, swgUserToken, paymentRecurrence, requestMetadata) {
      if (oldSku === void 0) {
        oldSku = null;
      }
      if (swgUserToken === void 0) {
        swgUserToken = null;
      }
      if (paymentRecurrence === void 0) {
        paymentRecurrence = null;
      }
      if (requestMetadata === void 0) {
        requestMetadata = null;
      }
      this.raw = raw;
      this.purchaseData = purchaseData;
      this.userData = userData;
      this.entitlements = entitlements;
      this.productType = productType;
      this.completeHandler_ = completeHandler;
      this.oldSku = oldSku;
      this.swgUserToken = swgUserToken;
      this.paymentRecurrence = paymentRecurrence;
      this.requestMetadata = requestMetadata;
    }
    var _proto28 = SubscribeResponse2.prototype;
    _proto28.clone = function clone() {
      return new SubscribeResponse2(this.raw, this.purchaseData, this.userData, this.entitlements, this.productType, this.completeHandler_, this.oldSku, this.swgUserToken);
    };
    _proto28.json = function json() {
      return {
        "purchaseData": this.purchaseData.json(),
        "userData": this.userData ? this.userData.json() : null,
        "entitlements": this.entitlements ? this.entitlements.json() : null,
        "oldSku": this.oldSku,
        "productType": this.productType,
        "swgUserToken": this.swgUserToken
      };
    };
    _proto28.complete = function complete() {
      return this.completeHandler_();
    };
    return SubscribeResponse2;
  }();
  var PurchaseData = /* @__PURE__ */ function() {
    function PurchaseData2(raw, signature) {
      this.raw = raw;
      this.data = raw;
      this.signature = signature;
    }
    var _proto29 = PurchaseData2.prototype;
    _proto29.clone = function clone() {
      return new PurchaseData2(this.raw, this.signature);
    };
    _proto29.json = function json() {
      return {
        "data": this.raw,
        "signature": this.signature
      };
    };
    return PurchaseData2;
  }();
  var DeferredAccountCreationResponse = /* @__PURE__ */ function() {
    function DeferredAccountCreationResponse2(entitlements, userData, purchaseDataList, completeHandler) {
      this.entitlements = entitlements;
      this.userData = userData;
      this.purchaseDataList = purchaseDataList;
      this.purchaseData = purchaseDataList[0];
      this.completeHandler_ = completeHandler;
    }
    var _proto30 = DeferredAccountCreationResponse2.prototype;
    _proto30.clone = function clone() {
      return new DeferredAccountCreationResponse2(this.entitlements, this.userData, this.purchaseDataList, this.completeHandler_);
    };
    _proto30.json = function json() {
      return {
        "entitlements": this.entitlements.json(),
        "userData": this.userData.json(),
        "purchaseDataList": this.purchaseDataList.map(function(pd) {
          return pd.json();
        }),
        "purchaseData": this.purchaseData.json()
      };
    };
    _proto30.complete = function complete() {
      return this.completeHandler_();
    };
    return DeferredAccountCreationResponse2;
  }();
  var SubscriptionState = {
    UNKNOWN: "unknown",
    NON_SUBSCRIBER: "non_subscriber",
    SUBSCRIBER: "subscriber",
    PAST_SUBSCRIBER: "past_subscriber"
  };
  var Event = {
    IMPRESSION_PAYWALL: "paywall",
    IMPRESSION_AD: "ad_shown",
    IMPRESSION_OFFERS: "offers_shown",
    ACTION_SUBSCRIPTIONS_LANDING_PAGE: "subscriptions_landing_page",
    ACTION_OFFER_SELECTED: "offer_selected",
    ACTION_PAYMENT_FLOW_STARTED: "payment_flow_start",
    ACTION_PAYMENT_COMPLETED: "payment_complete",
    EVENT_CUSTOM: "custom"
  };
  var PropensityType = {
    GENERAL: "general",
    PAYWALL: "paywall"
  };
  var ShowcaseEvent = {
    EVENT_SHOWCASE_METER_OFFERED: "EVENT_SHOWCASE_METER_OFFERED",
    EVENT_SHOWCASE_UNLOCKED_BY_SUBSCRIPTION: "EVENT_SHOWCASE_UNLOCKED_BY_SUBSCRIPTION",
    EVENT_SHOWCASE_UNLOCKED_BY_METER: "EVENT_SHOWCASE_UNLOCKED_BY_METER",
    EVENT_SHOWCASE_UNLOCKED_FREE_PAGE: "EVENT_SHOWCASE_UNLOCKED_FREE_PAGE",
    EVENT_SHOWCASE_NO_ENTITLEMENTS_REGWALL: "EVENT_SHOWCASE_NO_ENTITLEMENTS_REGWALL",
    EVENT_SHOWCASE_INELIGIBLE_PAYWALL: "EVENT_SHOWCASE_INELIGIBLE_PAYWALL",
    EVENT_SHOWCASE_NO_ENTITLEMENTS_PAYWALL: "EVENT_SHOWCASE_NO_ENTITLEMENTS_PAYWALL"
  };
  var SubscriptionFlows = {
    SHOW_OFFERS: "showOffers",
    SHOW_SUBSCRIBE_OPTION: "showSubscribeOption",
    SHOW_ABBRV_OFFER: "showAbbrvOffer",
    SHOW_CONTRIBUTION_OPTIONS: "showContributionOptions",
    SUBSCRIBE: "subscribe",
    CONTRIBUTE: "contribute",
    COMPLETE_DEFERRED_ACCOUNT_CREATION: "completeDeferredAccountCreation",
    LINK_ACCOUNT: "linkAccount",
    SHOW_LOGIN_PROMPT: "showLoginPrompt",
    SHOW_LOGIN_NOTIFICATION: "showLoginNotification",
    SHOW_METER_TOAST: "showMeterToast"
  };
  var AnalyticsMode = {
    DEFAULT: 0,
    IMPRESSIONS: 1
  };
  var WindowOpenMode = {
    AUTO: "auto",
    REDIRECT: "redirect"
  };
  var ProductType = {
    SUBSCRIPTION: "SUBSCRIPTION",
    UI_CONTRIBUTION: "UI_CONTRIBUTION",
    VIRTUAL_GIFT: "VIRTUAL_GIFT"
  };
  function defaultConfig() {
    return {
      windowOpenMode: WindowOpenMode.AUTO,
      analyticsMode: AnalyticsMode.DEFAULT,
      enableSwgAnalytics: false,
      enablePropensity: false
    };
  }
  var GOOGLE_DOMAIN_RE = /(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/;
  var a;
  var cache;
  function parseUrl(url) {
    if (!a) {
      a = self.document.createElement("a");
      cache = self.UrlCache || (self.UrlCache = Object.create(null));
    }
    var fromCache = cache[url];
    if (fromCache) {
      return fromCache;
    }
    var info = parseUrlWithA(a, url);
    return cache[url] = info;
  }
  function parseUrlWithA(a3, url) {
    a3.href = url;
    if (!a3.protocol) {
      a3.href = a3.href;
    }
    var info = {
      href: a3.href,
      protocol: a3.protocol,
      host: a3.host,
      hostname: a3.hostname,
      port: a3.port == "0" ? "" : a3.port,
      pathname: a3.pathname,
      search: a3.search,
      hash: a3.hash,
      origin: ""
    };
    if (info.pathname[0] !== "/") {
      info.pathname = "/" + info.pathname;
    }
    if (info.protocol == "http:" && info.port == 80 || info.protocol == "https:" && info.port == 443) {
      info.port = "";
      info.host = info.hostname;
    }
    if (a3.origin && a3.origin != "null") {
      info.origin = a3.origin;
    } else if (info.protocol == "data:" || !info.host) {
      info.origin = info.href;
    } else {
      info.origin = info.protocol + "//" + info.host;
    }
    return info;
  }
  function parseQueryString2(query) {
    if (!query) {
      return {};
    }
    return (/^[?#]/.test(query) ? query.slice(1) : query).split("&").reduce(function(params, param) {
      var item = param.split("=");
      try {
        var key = decodeURIComponent(item[0] || "");
        var value = decodeURIComponent(item[1] || "");
        if (key) {
          params[key] = value;
        }
      } catch (err) {
        warn("SwG could not parse a URL query param: " + item[0]);
      }
      return params;
    }, {});
  }
  function addQueryParam(url, param, value) {
    var queryIndex = url.indexOf("?");
    var fragmentIndex = url.indexOf("#");
    var fragment = "";
    if (fragmentIndex != -1) {
      fragment = url.substring(fragmentIndex);
      url = url.substring(0, fragmentIndex);
    }
    if (queryIndex == -1) {
      url += "?";
    } else if (queryIndex < url.length - 1) {
      url += "&";
    }
    url += encodeURIComponent(param) + "=" + encodeURIComponent(value);
    return url + fragment;
  }
  function serializeProtoMessageForUrl(message) {
    return JSON.stringify(message.toArray(false));
  }
  function getCanonicalUrl(doc) {
    var node = doc.getRootNode().querySelector("link[rel='canonical']");
    return node && node.href || "";
  }
  var PARSED_URL = parseUrl(self.window.location.href);
  var PARSED_REFERRER = parseUrl(self.document.referrer);
  function isGoogleDomain(parsedUrl) {
    parsedUrl = parsedUrl || PARSED_URL;
    return GOOGLE_DOMAIN_RE.test(parsedUrl.hostname);
  }
  function isSecure(parsedUrl) {
    parsedUrl = parsedUrl || PARSED_URL;
    return parsedUrl.protocol === "https" || parsedUrl.protocol === "https:";
  }
  function wasReferredByGoogle(parsedReferrer) {
    parsedReferrer = parsedReferrer || PARSED_REFERRER;
    return isSecure(parsedReferrer) && isGoogleDomain(parsedReferrer);
  }
  var CACHE_KEYS = {
    "zero": 0,
    "nocache": 1,
    "hr1": 36e5,
    "hr12": 432e5
  };
  var DEFAULT = {
    frontEnd: "https://news.google.com",
    payEnv: "PRODUCTION",
    playEnv: "PROD",
    feCache: "hr1"
  };
  var PROD = {
    frontEnd: "https://news.google.com",
    payEnv: "PRODUCTION",
    playEnv: "PROD",
    feCache: CACHE_KEYS.hr1
  };
  var AUTOPUSH = {
    frontEnd: "https://subscribe-autopush.sandbox.google.com",
    payEnv: "PRODUCTION",
    playEnv: "AUTOPUSH",
    feCache: CACHE_KEYS.nocache
  };
  var QUAL = {
    frontEnd: "https://subscribe-qual.sandbox.google.com",
    payEnv: "SANDBOX",
    playEnv: "STAGING",
    feCache: CACHE_KEYS.hr1
  };
  var MODES = {
    "default": DEFAULT,
    "prod": PROD,
    "autopush": AUTOPUSH,
    "qual": QUAL
  };
  function getSwgMode() {
    var query = parseQueryString2(self.location.hash);
    var swgMode = query["swg.mode"];
    if (swgMode && MODES[swgMode]) {
      return MODES[swgMode];
    }
    return MODES["default"];
  }
  function feOrigin() {
    return parseUrl(getSwgMode().frontEnd).origin;
  }
  function serviceUrl(url) {
    return getSwgMode().frontEnd + "/swg/_/api/v1" + url;
  }
  function adsUrl(url) {
    return "https://pubads.g.doubleclick.net" + url;
  }
  function feUrl(url, params, usePrefixedHostPath, prefix) {
    if (params === void 0) {
      params = {};
    }
    if (usePrefixedHostPath === void 0) {
      usePrefixedHostPath = false;
    }
    if (prefix === void 0) {
      prefix = "";
    }
    var prefixed = prefix ? usePrefixedHostPath ? "swg/" + prefix : prefix + "/swg" : "swg";
    url = feCached(getSwgMode().frontEnd + "/" + prefixed + "/_/ui/v1" + url);
    var query = parseQueryString2(self.location.hash);
    var boqJsMode = query["swg.boqjsmode"];
    if (boqJsMode !== void 0) {
      url = addQueryParam(url, "jsmode", boqJsMode);
    }
    for (var param in params) {
      url = addQueryParam(url, param, params[param]);
    }
    return url;
  }
  function feCached(url) {
    return addQueryParam(url, "_", cacheParam(getSwgMode().feCache));
  }
  function feArgs(args) {
    return Object.assign(args, {
      "_client": "SwG 0.1.22.194"
    });
  }
  function cacheParam(cacheKey) {
    var period = CACHE_KEYS[cacheKey];
    if (period == null) {
      period = 1;
    }
    if (period === 0) {
      return "_";
    }
    var now = Date.now();
    return String(period <= 1 ? now : Math.floor(now / period));
  }
  var ReplaceSkuProrationModeMapping = {
    "IMMEDIATE_WITH_TIME_PRORATION": 1
  };
  var RecurrenceMapping = {
    "AUTO": 1,
    "ONE_TIME": 2
  };
  function getEventParams$1(sku, subscriptionFlow) {
    if (subscriptionFlow === void 0) {
      subscriptionFlow = null;
    }
    return new EventParams([, , , , sku, , , subscriptionFlow]);
  }
  var PayStartFlow = /* @__PURE__ */ function() {
    function PayStartFlow2(deps, subscriptionRequest, productType) {
      if (productType === void 0) {
        productType = ProductType.SUBSCRIPTION;
      }
      this.deps_ = deps;
      this.payClient_ = deps.payClient();
      this.pageConfig_ = deps.pageConfig();
      this.dialogManager_ = deps.dialogManager();
      this.subscriptionRequest_ = subscriptionRequest;
      this.productType_ = productType;
      this.analyticsService_ = deps.analytics();
      this.eventManager_ = deps.eventManager();
      this.clientConfigManager_ = deps.clientConfigManager();
    }
    var _proto31 = PayStartFlow2.prototype;
    _proto31.start = function start() {
      var _this4 = this;
      var promise = this.clientConfigManager_.getClientConfig();
      return promise.then(function(clientConfig) {
        _this4.start_(clientConfig.paySwgVersion);
      });
    };
    _proto31.start_ = function start_(paySwgVersion) {
      var swgPaymentRequest = {
        "skuId": this.subscriptionRequest_["skuId"],
        "publicationId": this.pageConfig_.getPublicationId()
      };
      if (paySwgVersion) {
        swgPaymentRequest["swgVersion"] = paySwgVersion;
      }
      if (this.subscriptionRequest_["oldSku"]) {
        swgPaymentRequest["oldSku"] = this.subscriptionRequest_["oldSku"];
        var prorationMode = this.subscriptionRequest_["replaceSkuProrationMode"];
        if (prorationMode) {
          swgPaymentRequest["replaceSkuProrationMode"] = ReplaceSkuProrationModeMapping[prorationMode];
        } else {
          swgPaymentRequest["replaceSkuProrationMode"] = ReplaceSkuProrationModeMapping["IMMEDIATE_WITH_TIME_PRORATION"];
        }
        this.analyticsService_.setSku(swgPaymentRequest["oldSku"]);
      }
      if (this.subscriptionRequest_["oneTime"]) {
        swgPaymentRequest["paymentRecurrence"] = RecurrenceMapping["ONE_TIME"];
      }
      if (this.subscriptionRequest_["metadata"]) {
        swgPaymentRequest["metadata"] = this.subscriptionRequest_["metadata"];
      }
      var flow = this.productType_ == ProductType.UI_CONTRIBUTION ? SubscriptionFlows.CONTRIBUTE : SubscriptionFlows.SUBSCRIBE;
      this.deps_.callbacks().triggerFlowStarted(flow, this.subscriptionRequest_);
      this.eventManager_.logSwgEvent(AnalyticsEvent.ACTION_PAYMENT_FLOW_STARTED, true, getEventParams$1(swgPaymentRequest["skuId"]));
      PayCompleteFlow.waitingForPayClient_ = true;
      this.payClient_.start({
        "apiVersion": 1,
        "allowedPaymentMethods": ["CARD"],
        "environment": getSwgMode().payEnv,
        "playEnvironment": getSwgMode().playEnv,
        "swg": swgPaymentRequest,
        "i": {
          "startTimeMs": Date.now(),
          "productType": this.productType_
        }
      }, {
        forceRedirect: this.deps_.config().windowOpenMode == WindowOpenMode.REDIRECT,
        forceDisableNative: paySwgVersion == "2"
      });
      return resolvedPromise();
    };
    return PayStartFlow2;
  }();
  var PayCompleteFlow = /* @__PURE__ */ function() {
    PayCompleteFlow2.configurePending = function configurePending(deps) {
      var eventManager = deps.eventManager();
      deps.payClient().onResponse(function(payPromise) {
        deps.entitlementsManager().blockNextNotification();
        var flow = new PayCompleteFlow2(deps);
        var promise = validatePayResponse(deps, payPromise, flow.complete.bind(flow));
        deps.callbacks().triggerPaymentResponse(promise);
        return promise.then(function(response) {
          var sku = parseSkuFromPurchaseDataSafe(response.purchaseData);
          deps.analytics().setSku(sku || "");
          eventManager.logSwgEvent(AnalyticsEvent.ACTION_PAYMENT_COMPLETE, true, getEventParams$1(sku || "", response.productType == ProductType.UI_CONTRIBUTION ? SubscriptionFlows.CONTRIBUTE : SubscriptionFlows.SUBSCRIBE));
          flow.start(response);
        }, function(reason) {
          if (isCancelError(reason)) {
            var productType = reason["productType"];
            var _flow = productType == ProductType.UI_CONTRIBUTION ? SubscriptionFlows.CONTRIBUTE : SubscriptionFlows.SUBSCRIBE;
            deps.callbacks().triggerFlowCanceled(_flow);
            deps.eventManager().logSwgEvent(AnalyticsEvent.ACTION_USER_CANCELED_PAYFLOW, true);
          } else {
            deps.eventManager().logSwgEvent(AnalyticsEvent.EVENT_PAYMENT_FAILED, false);
            deps.jserror().error("Pay failed", reason);
            throw reason;
          }
        });
      });
    };
    function PayCompleteFlow2(deps) {
      this.win_ = deps.win();
      this.deps_ = deps;
      this.activityPorts_ = deps.activities();
      this.dialogManager_ = deps.dialogManager();
      this.activityIframeViewPromise_ = null;
      this.readyPromise_ = null;
      this.analyticsService_ = deps.analytics();
      this.eventManager_ = deps.eventManager();
      this.clientConfigManager_ = deps.clientConfigManager();
      this.sku_ = null;
    }
    var _proto32 = PayCompleteFlow2.prototype;
    _proto32.start = function start(response) {
      var _this5 = this;
      this.sku_ = parseSkuFromPurchaseDataSafe(response.purchaseData);
      this.eventManager_.logSwgEvent(AnalyticsEvent.IMPRESSION_ACCOUNT_CHANGED, true, getEventParams$1(this.sku_ || ""));
      this.deps_.entitlementsManager().reset(true);
      var args = {
        "publicationId": this.deps_.pageConfig().getPublicationId(),
        "productType": response["productType"],
        "isSubscriptionUpdate": !!response["oldSku"],
        "isOneTime": !!response["paymentRecurrence"]
      };
      if (response.userData && response.entitlements) {
        args["idToken"] = response.userData.idToken;
        this.deps_.entitlementsManager().pushNextEntitlements(response.entitlements.raw);
        if (response.swgUserToken) {
          this.deps_.storage().set(Constants$1.USER_TOKEN, response.swgUserToken, true);
        }
      } else {
        args["loginHint"] = response.userData && response.userData.email;
      }
      var urlParams = {};
      if (args.productType === ProductType.VIRTUAL_GIFT) {
        Object.assign(urlParams, {
          productType: args.productType,
          publicationId: args.publicationId,
          offerId: this.sku_,
          origin: parseUrl(this.win_.location.href).origin
        });
        if (response.requestMetadata) {
          urlParams.canonicalUrl = response.requestMetadata.contentId;
          urlParams.isAnonymous = response.requestMetadata.anonymous;
        }
        if (response.swgUserToken) {
          args.swgUserToken = response.swgUserToken;
        }
        var orderId = parseOrderIdFromPurchaseDataSafe(response.purchaseData);
        if (orderId) {
          args.orderId = orderId;
        }
      }
      if (this.clientConfigManager_.shouldForceLangInIframes()) {
        urlParams.hl = this.clientConfigManager_.getLanguage();
      }
      var confirmFeUrl = feUrl("/payconfirmiframe", urlParams);
      return this.activityIframeViewPromise_ = this.clientConfigManager_.getClientConfig().then(function(clientConfig) {
        args["useUpdatedConfirmUi"] = clientConfig.useUpdatedOfferFlows;
        return new ActivityIframeView(_this5.win_, _this5.activityPorts_, confirmFeUrl, feArgs(args), true);
      }).then(function(activityIframeView) {
        activityIframeView.on(EntitlementsResponse, _this5.handleEntitlementsResponse_.bind(_this5));
        activityIframeView.acceptResult().then(function() {
          _this5.dialogManager_.completeView(activityIframeView);
        });
        _this5.readyPromise_ = _this5.dialogManager_.openView(activityIframeView);
        return activityIframeView;
      });
    };
    _proto32.handleEntitlementsResponse_ = function handleEntitlementsResponse_(response) {
      var jwt = response.getJwt();
      if (jwt) {
        this.deps_.entitlementsManager().pushNextEntitlements(jwt);
      }
    };
    _proto32.complete = function complete() {
      var _this6 = this;
      this.eventManager_.logSwgEvent(AnalyticsEvent.ACTION_ACCOUNT_CREATED, true, getEventParams$1(this.sku_ || ""));
      this.deps_.entitlementsManager().unblockNextNotification();
      return Promise.all([this.activityIframeViewPromise_, this.readyPromise_]).then(function(values) {
        var activityIframeView = values[0];
        var accountCompletionRequest = new AccountCreationRequest();
        accountCompletionRequest.setComplete(true);
        activityIframeView.execute(accountCompletionRequest);
        return activityIframeView.acceptResult().catch(function() {
        }).then(function() {
          _this6.eventManager_.logSwgEvent(AnalyticsEvent.ACTION_ACCOUNT_ACKNOWLEDGED, true, getEventParams$1(_this6.sku_ || ""));
          _this6.deps_.entitlementsManager().setToastShown(true);
        });
      });
    };
    return PayCompleteFlow2;
  }();
  PayCompleteFlow.waitingForPayClient_ = false;
  function validatePayResponse(deps, payPromise, completeHandler) {
    var wasRedirect = !PayCompleteFlow.waitingForPayClient_;
    PayCompleteFlow.waitingForPayClient_ = false;
    return payPromise.then(function(data) {
      var eventType = AnalyticsEvent.UNKNOWN;
      var eventParams = void 0;
      if (typeof data !== "object" || !data["googleTransactionId"]) {
        eventParams = new EventParams();
        eventParams.setHadLogged(!wasRedirect);
        eventType = AnalyticsEvent.EVENT_GPAY_NO_TX_ID;
      } else {
        var oldTxId = deps.analytics().getTransactionId();
        var newTxId = data["googleTransactionId"];
        if (wasRedirect) {
          deps.analytics().setTransactionId(newTxId);
          eventType = AnalyticsEvent.EVENT_GPAY_CANNOT_CONFIRM_TX_ID;
        } else {
          if (oldTxId === newTxId) {
            eventType = AnalyticsEvent.EVENT_CONFIRM_TX_ID;
          } else {
            eventParams = new EventParams();
            eventParams.setGpayTransactionId(newTxId);
            eventType = AnalyticsEvent.EVENT_CHANGED_TX_ID;
          }
        }
      }
      deps.eventManager().logSwgEvent(eventType, true, eventParams);
      return parseSubscriptionResponse(deps, data, completeHandler);
    });
  }
  function parseSubscriptionResponse(deps, data, completeHandler) {
    var swgData = null;
    var raw = null;
    var productType = ProductType.SUBSCRIPTION;
    var oldSku = null;
    var paymentRecurrence = null;
    var requestMetadata = null;
    if (data) {
      if (typeof data == "string") {
        raw = data;
      } else {
        var json = data;
        if ("swgCallbackData" in json) {
          swgData = json["swgCallbackData"];
        } else if ("integratorClientCallbackData" in json) {
          raw = json["integratorClientCallbackData"];
        }
        if ("paymentRequest" in data) {
          var swgObj = data["paymentRequest"]["swg"] || {};
          oldSku = swgObj["oldSku"];
          paymentRecurrence = swgObj["paymentRecurrence"];
          requestMetadata = swgObj["metadata"];
          productType = (data["paymentRequest"]["i"] || {})["productType"] || ProductType.SUBSCRIPTION;
        }
      }
    }
    if (raw && !swgData) {
      raw = atob(raw);
      if (raw) {
        var parsed = parseJson2(raw);
        swgData = parsed["swgCallbackData"];
      }
    }
    if (!swgData) {
      throw new Error("unexpected payment response");
    }
    raw = JSON.stringify(swgData);
    return new SubscribeResponse(raw, parsePurchaseData(swgData), parseUserData(swgData), parseEntitlements(deps, swgData), productType, completeHandler, oldSku, swgData["swgUserToken"], paymentRecurrence, requestMetadata);
  }
  function parsePurchaseData(swgData) {
    var raw = swgData["purchaseData"];
    var signature = swgData["purchaseDataSignature"];
    return new PurchaseData(raw, signature);
  }
  function parseUserData(swgData) {
    var idToken = swgData["idToken"];
    if (!idToken) {
      return null;
    }
    var jwt = new JwtHelper().decode(idToken);
    return new UserData(idToken, jwt);
  }
  function parseEntitlements(deps, swgData) {
    if (swgData["signedEntitlements"]) {
      return deps.entitlementsManager().parseEntitlements(swgData);
    }
    return null;
  }
  function parseSkuFromPurchaseDataSafe(purchaseData) {
    return getPropertyFromJsonString(purchaseData.raw, "productId") || null;
  }
  function parseOrderIdFromPurchaseDataSafe(purchaseData) {
    return getPropertyFromJsonString(purchaseData.raw, "orderId") || null;
  }
  function getEventParams(sku) {
    return new EventParams([, , , , sku]);
  }
  var OFFERS_VIEW_CLOSABLE = true;
  var ALL_SKUS = "*";
  var OffersFlow = /* @__PURE__ */ function() {
    function OffersFlow2(deps, options) {
      var _options$isClosable, _this7 = this;
      this.deps_ = deps;
      this.win_ = deps.win();
      this.activityPorts_ = deps.activities();
      this.dialogManager_ = deps.dialogManager();
      this.eventManager_ = deps.eventManager();
      this.clientConfigManager_ = deps.clientConfigManager();
      this.activityIframeView_ = null;
      var isClosable = (_options$isClosable = options == null ? void 0 : options.isClosable) != null ? _options$isClosable : false;
      var feArgsObj = deps.activities().addDefaultArguments({
        "showNative": deps.callbacks().hasSubscribeRequestCallback(),
        "productType": ProductType.SUBSCRIPTION,
        "list": options && options.list || "default",
        "skus": options && options.skus || null,
        "isClosable": isClosable
      });
      if (options && options.oldSku) {
        feArgsObj["oldSku"] = options.oldSku;
        assert2(feArgsObj["skus"], "Need a sku list if old sku is provided!");
        var skuList = feArgsObj["skus"];
        var oldSku = feArgsObj["oldSku"];
        skuList = skuList.filter(function(sku2) {
          return sku2 !== oldSku;
        });
        assert2(skuList.length > 0, "Sku list only contained offer user already has");
        feArgsObj["skus"] = skuList;
      }
      if (feArgsObj["skus"] && feArgsObj["skus"].length === 1) {
        var sku = feArgsObj["skus"][0];
        var _oldSku = feArgsObj["oldSku"];
        if (_oldSku) {
          var skuSelectedResponse = new SkuSelectedResponse();
          skuSelectedResponse.setSku(sku);
          skuSelectedResponse.setOldSku(_oldSku);
          this.startPayFlow_(skuSelectedResponse);
          return;
        }
      }
      this.skus_ = feArgsObj["skus"] || [ALL_SKUS];
      this.clientConfig_ = this.clientConfigManager_.getClientConfig();
      this.activityIframeViewPromise_ = this.clientConfig_.then(function(clientConfig) {
        return _this7.shouldShow_(clientConfig) ? new ActivityIframeView(_this7.win_, _this7.activityPorts_, _this7.getUrl_(clientConfig), feArgsObj, true) : null;
      });
    }
    var _proto33 = OffersFlow2.prototype;
    _proto33.startPayFlow_ = function startPayFlow_(response) {
      var sku = response.getSku();
      if (sku) {
        var subscriptionRequest = {
          "skuId": sku
        };
        var oldSku = response.getOldSku();
        if (oldSku) {
          subscriptionRequest["oldSku"] = oldSku;
          this.deps_.analytics().setSku(oldSku);
        }
        this.eventManager_.logSwgEvent(AnalyticsEvent.ACTION_OFFER_SELECTED, true, getEventParams(sku));
        new PayStartFlow(this.deps_, subscriptionRequest).start();
      }
    };
    _proto33.handleLinkRequest_ = function handleLinkRequest_(response) {
      if (response.getSubscriberOrMember()) {
        this.eventManager_.logSwgEvent(AnalyticsEvent.ACTION_ALREADY_SUBSCRIBED, true);
        this.deps_.callbacks().triggerLoginRequest({
          linkRequested: !!response.getLinkRequested()
        });
      }
    };
    _proto33.startNativeFlow_ = function startNativeFlow_(response) {
      if (response.getNative()) {
        this.deps_.callbacks().triggerSubscribeRequest();
      }
    };
    _proto33.start = function start() {
      var _this8 = this;
      if (this.activityIframeViewPromise_) {
        return this.activityIframeViewPromise_.then(function(activityIframeView) {
          if (!activityIframeView) {
            return resolvedPromise();
          }
          _this8.deps_.callbacks().triggerFlowStarted(SubscriptionFlows.SHOW_OFFERS, {
            skus: _this8.skus_,
            source: "SwG"
          });
          activityIframeView.onCancel(function() {
            _this8.deps_.callbacks().triggerFlowCanceled(SubscriptionFlows.SHOW_OFFERS);
          });
          activityIframeView.on(SkuSelectedResponse, _this8.startPayFlow_.bind(_this8));
          activityIframeView.on(AlreadySubscribedResponse, _this8.handleLinkRequest_.bind(_this8));
          activityIframeView.on(ViewSubscriptionsResponse, _this8.startNativeFlow_.bind(_this8));
          _this8.activityIframeView_ = activityIframeView;
          return _this8.clientConfig_.then(function(clientConfig) {
            if (!_this8.activityIframeView_) {
              return;
            }
            return _this8.dialogManager_.openView(_this8.activityIframeView_, false, _this8.getDialogConfig_(clientConfig));
          });
        });
      }
      return resolvedPromise();
    };
    _proto33.shouldShow_ = function shouldShow_(clientConfig) {
      var _clientConfig$uiPredi;
      return ((_clientConfig$uiPredi = clientConfig.uiPredicates) == null ? void 0 : _clientConfig$uiPredi.canDisplayAutoPrompt) !== false;
    };
    _proto33.getDialogConfig_ = function getDialogConfig_(clientConfig) {
      return clientConfig.useUpdatedOfferFlows ? {
        desktopConfig: {
          isCenterPositioned: true,
          supportsWideScreen: true
        }
      } : {};
    };
    _proto33.getUrl_ = function getUrl_(clientConfig) {
      if (!clientConfig.useUpdatedOfferFlows) {
        return feUrl("/offersiframe");
      }
      if (this.clientConfigManager_.shouldForceLangInIframes()) {
        return feUrl("/subscriptionoffersiframe", {
          "hl": this.clientConfigManager_.getLanguage()
        });
      }
      return feUrl("/subscriptionoffersiframe");
    };
    _proto33.showNoEntitlementFoundToast = function showNoEntitlementFoundToast() {
      if (this.activityIframeView_) {
        this.activityIframeView_.execute(new EntitlementsResponse());
      }
    };
    return OffersFlow2;
  }();
  var SubscribeOptionFlow = /* @__PURE__ */ function() {
    function SubscribeOptionFlow2(deps, options) {
      this.deps_ = deps;
      this.options_ = options;
      this.activityPorts_ = deps.activities();
      this.dialogManager_ = deps.dialogManager();
      this.eventManager_ = deps.eventManager();
      this.activityIframeView_ = new ActivityIframeView(deps.win(), this.activityPorts_, feUrl("/optionsiframe"), feArgs({
        "publicationId": deps.pageConfig().getPublicationId(),
        "productId": deps.pageConfig().getProductId(),
        "list": options && options.list || "default",
        "skus": options && options.skus || null,
        "isClosable": true
      }), false);
    }
    var _proto34 = SubscribeOptionFlow2.prototype;
    _proto34.start = function start() {
      var _this9 = this;
      this.deps_.callbacks().triggerFlowStarted(SubscriptionFlows.SHOW_SUBSCRIBE_OPTION);
      this.activityIframeView_.onCancel(function() {
        _this9.deps_.callbacks().triggerFlowCanceled(SubscriptionFlows.SHOW_SUBSCRIBE_OPTION);
      });
      this.activityIframeView_.on(SubscribeResponse$1, this.maybeOpenOffersFlow_.bind(this));
      this.activityIframeView_.acceptResult().then(function(result) {
        var data = result.data;
        var response = new SubscribeResponse$1();
        if (data["subscribe"]) {
          response.setSubscribe(true);
        }
        _this9.maybeOpenOffersFlow_(response);
      }, function(reason) {
        _this9.dialogManager_.completeView(_this9.activityIframeView_);
        throw reason;
      });
      this.eventManager_.logSwgEvent(AnalyticsEvent.IMPRESSION_CLICK_TO_SHOW_OFFERS);
      return this.dialogManager_.openView(this.activityIframeView_);
    };
    _proto34.maybeOpenOffersFlow_ = function maybeOpenOffersFlow_(response) {
      if (response.getSubscribe()) {
        var options = this.options_ || {};
        if (options.isClosable == void 0) {
          options.isClosable = OFFERS_VIEW_CLOSABLE;
        }
        this.eventManager_.logSwgEvent(AnalyticsEvent.ACTION_VIEW_OFFERS, true);
        new OffersFlow(this.deps_, options).start();
      }
    };
    return SubscribeOptionFlow2;
  }();
  var AbbrvOfferFlow = /* @__PURE__ */ function() {
    function AbbrvOfferFlow2(deps, options) {
      if (options === void 0) {
        options = {};
      }
      this.deps_ = deps;
      this.options_ = options;
      this.win_ = deps.win();
      this.activityPorts_ = deps.activities();
      this.dialogManager_ = deps.dialogManager();
      this.eventManager_ = deps.eventManager();
      this.activityIframeView_ = new ActivityIframeView(this.win_, this.activityPorts_, feUrl("/abbrvofferiframe"), feArgs({
        "publicationId": deps.pageConfig().getPublicationId(),
        "productId": deps.pageConfig().getProductId(),
        "showNative": deps.callbacks().hasSubscribeRequestCallback(),
        "list": options && options.list || "default",
        "skus": options && options.skus || null,
        "isClosable": true
      }), false);
    }
    var _proto35 = AbbrvOfferFlow2.prototype;
    _proto35.handleLinkRequest_ = function handleLinkRequest_(response) {
      if (response.getSubscriberOrMember()) {
        this.eventManager_.logSwgEvent(AnalyticsEvent.ACTION_ALREADY_SUBSCRIBED, true);
        this.deps_.callbacks().triggerLoginRequest({
          linkRequested: !!response.getLinkRequested()
        });
      }
    };
    _proto35.start = function start() {
      var _this10 = this;
      this.deps_.callbacks().triggerFlowStarted(SubscriptionFlows.SHOW_ABBRV_OFFER);
      this.activityIframeView_.onCancel(function() {
        _this10.deps_.callbacks().triggerFlowCanceled(SubscriptionFlows.SHOW_ABBRV_OFFER);
      });
      this.activityIframeView_.on(AlreadySubscribedResponse, this.handleLinkRequest_.bind(this));
      this.activityIframeView_.acceptResult().then(function(result) {
        if (result.data["viewOffers"]) {
          var options = _this10.options_ || {};
          if (options.isClosable == void 0) {
            options.isClosable = OFFERS_VIEW_CLOSABLE;
          }
          _this10.eventManager_.logSwgEvent(AnalyticsEvent.ACTION_VIEW_OFFERS, true);
          new OffersFlow(_this10.deps_, options).start();
          return;
        }
        if (result.data["native"]) {
          _this10.deps_.callbacks().triggerSubscribeRequest();
          _this10.dialogManager_.completeView(_this10.activityIframeView_);
          return;
        }
      });
      this.eventManager_.logSwgEvent(AnalyticsEvent.IMPRESSION_CLICK_TO_SHOW_OFFERS_OR_ALREADY_SUBSCRIBED);
      return this.dialogManager_.openView(this.activityIframeView_);
    };
    return AbbrvOfferFlow2;
  }();
  var _require2 = require_activity_ports();
  var WebActivityIframePort = _require2.ActivityIframePort;
  var WebActivityPorts = _require2.ActivityPorts;
  var ActivityPortDeprecated = /* @__PURE__ */ function() {
    function ActivityPortDeprecated2(port) {
      this.port_ = port;
    }
    var _proto36 = ActivityPortDeprecated2.prototype;
    _proto36.acceptResult = function acceptResult() {
      return this.port_.acceptResult();
    };
    return ActivityPortDeprecated2;
  }();
  var ActivityIframePort$1 = /* @__PURE__ */ function() {
    function ActivityIframePort$12(iframe2, url, deps, args) {
      this.iframePort_ = new WebActivityIframePort(iframe2, url, args);
      this.callbackMap_ = {};
      this.deps_ = deps;
    }
    var _proto37 = ActivityIframePort$12.prototype;
    _proto37.whenReady = function whenReady() {
      return this.iframePort_.whenReady();
    };
    _proto37.connect = function connect() {
      var _this11 = this;
      return this.iframePort_.connect().then(function() {
        _this11.iframePort_.onMessage(function(data) {
          var response = data && data["RESPONSE"];
          if (!response) {
            return;
          }
          var cb = _this11.callbackMap_[response[0]];
          if (cb) {
            cb(deserialize(response));
          }
        });
        if (_this11.deps_ && _this11.deps_.eventManager()) {
          _this11.on(AnalyticsRequest, function(request) {
            var analyticsRequest = request;
            _this11.deps_.eventManager().logEvent({
              eventType: analyticsRequest.getEvent(),
              eventOriginator: EventOriginator.SWG_SERVER,
              isFromUserAction: analyticsRequest.getMeta().getIsFromUserAction(),
              additionalParameters: analyticsRequest.getParams()
            });
          });
        }
      });
    };
    _proto37.disconnect = function disconnect() {
      this.iframePort_.disconnect();
    };
    _proto37.getMode = function getMode2() {
      return this.iframePort_.getMode();
    };
    _proto37.acceptResult = function acceptResult() {
      return this.iframePort_.acceptResult();
    };
    _proto37.onResizeRequest = function onResizeRequest(callback) {
      return this.iframePort_.onResizeRequest(callback);
    };
    _proto37.execute = function execute(request) {
      this.iframePort_.message({
        "REQUEST": request.toArray()
      });
    };
    _proto37.on = function on(message, callback) {
      var label = null;
      try {
        label = getLabel(message);
      } catch (ex) {
        label = null;
      }
      if (!label) {
        throw new Error("Invalid data type");
      } else if (this.callbackMap_[label]) {
        throw new Error("Invalid type or duplicate callback for ", label);
      }
      this.callbackMap_[label] = callback;
    };
    _proto37.resized = function resized() {
      this.iframePort_.resized();
    };
    return ActivityIframePort$12;
  }();
  var ActivityPorts$1 = /* @__PURE__ */ function() {
    function ActivityPorts$12(deps) {
      this.deps_ = deps;
      this.activityPorts_ = new WebActivityPorts(deps.win());
    }
    var _proto38 = ActivityPorts$12.prototype;
    _proto38.addDefaultArguments = function addDefaultArguments(args) {
      var deps = this.deps_;
      var pageConfig = deps.pageConfig();
      var context = deps.analytics().getContext();
      return Object.assign({
        "analyticsContext": context.toArray(),
        "publicationId": pageConfig.getPublicationId(),
        "productId": pageConfig.getProductId(),
        "_client": "SwG 0.1.22.194",
        "supportsEventManager": true
      }, args || {});
    };
    _proto38.openActivityIframePort_ = function openActivityIframePort_(iframe2, url, args) {
      var activityPort = new ActivityIframePort$1(iframe2, url, this.deps_, args);
      return activityPort.connect().then(function() {
        return activityPort;
      });
    };
    _proto38.openIframe = function openIframe(iframe2, url, args, addDefaultArguments) {
      if (addDefaultArguments === void 0) {
        addDefaultArguments = false;
      }
      if (addDefaultArguments) {
        args = this.addDefaultArguments(args);
      }
      return this.openActivityIframePort_(iframe2, url, args);
    };
    _proto38.open = function open(requestId, url, target, args, options, addDefaultArguments) {
      if (addDefaultArguments === void 0) {
        addDefaultArguments = false;
      }
      if (addDefaultArguments) {
        args = this.addDefaultArguments(args);
      }
      return this.activityPorts_.open(requestId, url, target, args, options);
    };
    _proto38.onResult = function onResult(requestId, callback) {
      this.activityPorts_.onResult(requestId, function(port) {
        callback(new ActivityPortDeprecated(port));
      });
    };
    _proto38.onRedirectError = function onRedirectError(handler) {
      this.activityPorts_.onRedirectError(handler);
    };
    _proto38.getOriginalWebActivityPorts = function getOriginalWebActivityPorts() {
      return this.activityPorts_;
    };
    return ActivityPorts$12;
  }();
  function isObject2(value) {
    var str = Object.prototype.toString.call(value);
    return str === "[object Object]";
  }
  function isEnumValue2(enumObj, s) {
    for (var k in enumObj) {
      if (enumObj[k] === s) {
        return true;
      }
    }
    return false;
  }
  function isFunction(value) {
    return typeof value === "function";
  }
  function isBoolean(value) {
    return typeof value === "boolean";
  }
  function createEventErrorMessage(valueName, value) {
    return "Event has an invalid " + valueName + "(" + value + ")";
  }
  function validateEvent(event) {
    if (!isObject2(event)) {
      throw new Error("Event must be a valid object");
    }
    if (!isEnumValue2(AnalyticsEvent, event.eventType)) {
      throw new Error(createEventErrorMessage("eventType", event.eventType));
    }
    if (!isEnumValue2(EventOriginator, event.eventOriginator)) {
      throw new Error(createEventErrorMessage("eventOriginator", event.eventOriginator));
    }
    if (!isObject2(event.additionalParameters) && event.additionalParameters != null) {
      throw new Error(createEventErrorMessage("additionalParameters", event.additionalParameters));
    }
    if (event.isFromUserAction != null && !isBoolean(event.isFromUserAction)) {
      throw new Error(createEventErrorMessage("isFromUserAction", event.isFromUserAction));
    }
  }
  var ClientEventManager = /* @__PURE__ */ function() {
    ClientEventManager2.isPublisherEvent = function isPublisherEvent(event) {
      return event.eventOriginator === EventOriginator.PROPENSITY_CLIENT || event.eventOriginator === EventOriginator.PUBLISHER_CLIENT || event.eventOriginator === EventOriginator.AMP_CLIENT;
    };
    function ClientEventManager2(configuredPromise) {
      this.listeners_ = [];
      this.filterers_ = [];
      this.lastAction_ = null;
      this.isReadyPromise_ = configuredPromise;
    }
    var _proto39 = ClientEventManager2.prototype;
    _proto39.registerEventListener = function registerEventListener(listener) {
      if (!isFunction(listener)) {
        throw new Error("Event manager listeners must be a function");
      }
      this.listeners_.push(listener);
    };
    _proto39.registerEventFilterer = function registerEventFilterer(filterer) {
      if (!isFunction(filterer)) {
        throw new Error("Event manager filterers must be a function");
      }
      this.filterers_.push(filterer);
    };
    _proto39.logEvent = function logEvent2(event) {
      var _this12 = this;
      validateEvent(event);
      this.lastAction_ = this.isReadyPromise_.then(function() {
        for (var filterer = 0; filterer < _this12.filterers_.length; filterer++) {
          try {
            if (_this12.filterers_[filterer](event) === FilterResult.CANCEL_EVENT) {
              return resolvedPromise();
            }
          } catch (e) {
            log(e);
          }
        }
        for (var listener = 0; listener < _this12.listeners_.length; listener++) {
          try {
            _this12.listeners_[listener](event);
          } catch (e) {
            log(e);
          }
        }
        return resolvedPromise();
      });
    };
    _proto39.logSwgEvent = function logSwgEvent(eventType, isFromUserAction, eventParams) {
      if (isFromUserAction === void 0) {
        isFromUserAction = false;
      }
      if (eventParams === void 0) {
        eventParams = null;
      }
      this.logEvent({
        eventType: eventType,
        eventOriginator: EventOriginator.SWG_CLIENT,
        isFromUserAction: isFromUserAction,
        additionalParameters: eventParams
      });
    };
    _proto39.getReadyPromise = function getReadyPromise() {
      return this.isReadyPromise_;
    };
    return ClientEventManager2;
  }();
  var ExperimentFlags = {
    REPLACE_SUBSCRIPTION: "replace-subscription",
    CONTRIBUTIONS: "contributions",
    PROPENSITY: "propensity",
    SMARTBOX: "smartbox",
    HEJIRA: "hejira",
    LOGGING_BEACON: "logging-beacon",
    UPDATE_GOOGLE_TRANSACTION_ID: "update-google-transaction-id",
    PAY_CLIENT_REDIRECT: "pay-client-redirect"
  };
  var Selection = {
    EXPERIMENT: "e",
    CONTROL: "c"
  };
  var experimentsString = "";
  var experimentMap = null;
  function getExperiments(win) {
    if (!experimentMap) {
      experimentMap = {};
      var combinedExperimentString = experimentsString;
      try {
        var query = parseQueryString2(win.location.hash);
        var experimentStringFromHash = query["swg.experiments"];
        if (experimentStringFromHash) {
          combinedExperimentString += "," + experimentStringFromHash;
        }
      } catch (e) {
        ErrorUtils.throwAsync(e);
      }
      combinedExperimentString.split(",").forEach(function(s) {
        s = s.trim();
        if (!s) {
          return;
        }
        try {
          parseSetExperiment(win, experimentMap, s);
        } catch (e) {
          ErrorUtils.throwAsync(e);
        }
      });
    }
    return experimentMap;
  }
  function parseSetExperiment(win, experimentMap2, spec) {
    var experimentId;
    var fraction;
    var control = false;
    var eq = spec.indexOf(":");
    if (eq == -1) {
      experimentId = spec;
      fraction = 100;
      control = false;
    } else {
      experimentId = spec.substring(0, eq).trim();
      spec = spec.substring(eq + 1);
      if (spec.substring(spec.length - 1) == Selection.CONTROL) {
        control = true;
        spec = spec.substring(0, spec.length - 1);
      }
      fraction = parseInt(spec, 10);
    }
    if (isNaN(fraction)) {
      throw new Error("invalid fraction");
    }
    var on;
    if (fraction > 99) {
      on = true;
    } else if (fraction < 1) {
      on = false;
    } else if (win.sessionStorage) {
      control = control && fraction <= 20;
      try {
        var _storageKey = "subscribe.google.com:e:" + experimentId + ":" + fraction + (control ? "c" : "");
        var selection = parseSelection(win.sessionStorage.getItem(_storageKey));
        if (!selection) {
          if (win.Math.random() * 100 <= fraction * (control ? 2 : 1)) {
            var inExperiment = control ? win.Math.random() <= 0.5 : true;
            selection = inExperiment ? Selection.EXPERIMENT : Selection.CONTROL;
            win.sessionStorage.setItem(_storageKey, selection);
          }
        }
        on = !!selection;
        if (selection == Selection.CONTROL) {
          experimentId = "c-" + experimentId;
        }
      } catch (e) {
        on = false;
        ErrorUtils.throwAsync(e);
      }
    } else {
      on = false;
    }
    experimentMap2[experimentId] = on;
  }
  function parseSelection(s) {
    return s == Selection.EXPERIMENT ? Selection.EXPERIMENT : s == Selection.CONTROL ? Selection.CONTROL : null;
  }
  function isExperimentOn2(win, experimentId) {
    return getExperiments(win)[experimentId] || false;
  }
  function setExperiment(win, experimentId, on) {
    getExperiments(win)[experimentId] = on;
  }
  function getOnExperiments(win) {
    var experimentMap2 = getExperiments(win);
    var experiments = [];
    for (var experiment in experimentMap2) {
      if (experimentMap2[experiment]) {
        experiments.push(experiment);
      }
    }
    return experiments;
  }
  function toTimestamp(millis) {
    return new Timestamp([Math.floor(millis / 1e3), millis % 1e3 * 1e6], false);
  }
  var iframeStyles = {
    opacity: "0",
    position: "absolute",
    top: "-10px",
    left: "-10px",
    height: "1px",
    width: "1px"
  };
  var MAX_FIRST_WAIT = 500;
  var MAX_WAIT = 200;
  var TIMEOUT_ERROR = "AnalyticsService timed out waiting for a response";
  function createErrorResponse(error) {
    var response = new FinishedLoggingResponse();
    response.setComplete(false);
    response.setError(error);
    return response;
  }
  var AnalyticsService = /* @__PURE__ */ function() {
    function AnalyticsService2(deps, fetcher) {
      this.fetcher_ = fetcher;
      this.doc_ = deps.doc();
      this.deps_ = deps;
      this.activityPorts_ = deps.activities();
      this.iframe_ = createElement(this.doc_.getWin().document, "iframe", {});
      setImportantStyles$1(this.iframe_, iframeStyles);
      this.doc_.getBody().appendChild(this.getElement());
      this.everFinishedLog_ = false;
      this.context_ = new AnalyticsContext();
      this.setStaticContext_();
      this.serviceReady_ = null;
      this.lastAction_ = null;
      this.eventManager_ = deps.eventManager();
      this.eventManager_.registerEventListener(this.handleClientEvent_.bind(this));
      this.unfinishedLogs_ = 0;
      this.loggingResolver_ = null;
      this.promiseToLog_ = null;
      this.loggingBroken_ = false;
      this.timeout_ = null;
      this.getTimestamp_ = function() {
        return toTimestamp(Date.now());
      };
    }
    var _proto40 = AnalyticsService2.prototype;
    _proto40.setTransactionId = function setTransactionId(transactionId) {
      var oldTransactionId = this.context_.getTransactionId();
      this.context_.setTransactionId(transactionId);
      if (oldTransactionId != null && oldTransactionId != transactionId) {
        var eventType = AnalyticsEvent.EVENT_NEW_TX_ID;
        var eventParams = new EventParams();
        eventParams.setOldTransactionId(oldTransactionId);
        this.eventManager_.logSwgEvent(eventType, true, eventParams);
      }
    };
    _proto40.getTransactionId = function getTransactionId() {
      return this.context_.getTransactionId();
    };
    _proto40.getSku = function getSku() {
      return this.context_.getSku();
    };
    _proto40.setSku = function setSku(sku) {
      this.context_.setSku(sku);
    };
    _proto40.setUrl = function setUrl(url) {
      this.context_.setUrl(url);
    };
    _proto40.addLabels = function addLabels(labels) {
      if (labels && labels.length > 0) {
        var newLabels = [].concat(this.context_.getLabelList());
        labels.forEach(function(label) {
          if (newLabels.indexOf(label) == -1) {
            newLabels.push(label);
          }
        });
        this.context_.setLabelList(newLabels);
      }
    };
    _proto40.getElement = function getElement() {
      return this.iframe_;
    };
    _proto40.getQueryString_ = function getQueryString_() {
      return this.doc_.getWin().location.search;
    };
    _proto40.getReferrer_ = function getReferrer_() {
      return this.doc_.getWin().document.referrer;
    };
    _proto40.setStaticContext_ = function setStaticContext_() {
      var context = this.context_;
      if (isExperimentOn2(this.doc_.getWin(), ExperimentFlags.UPDATE_GOOGLE_TRANSACTION_ID)) {
        context.setTransactionId(getSwgTransactionId());
      } else {
        context.setTransactionId(getUuid());
      }
      context.setReferringOrigin(parseUrl(this.getReferrer_()).origin);
      context.setClientVersion("SwG 0.1.22.194");
      context.setUrl(getCanonicalUrl(this.doc_));
      var utmParams = parseQueryString2(this.getQueryString_());
      var campaign = utmParams["utm_campaign"];
      var medium = utmParams["utm_medium"];
      var source = utmParams["utm_source"];
      if (campaign) {
        context.setUtmCampaign(campaign);
      }
      if (medium) {
        context.setUtmMedium(medium);
      }
      if (source) {
        context.setUtmSource(source);
      }
    };
    _proto40.start = function start() {
      var _this13 = this;
      if (!this.serviceReady_) {
        this.addLabels(getOnExperiments(this.doc_.getWin()));
        this.serviceReady_ = this.activityPorts_.openIframe(this.iframe_, feUrl("/serviceiframe"), null, true).then(function(port) {
          port.on(FinishedLoggingResponse, _this13.afterLogging_.bind(_this13));
          return port.whenReady().then(function() {
            _this13.addLabels(getOnExperiments(_this13.doc_.getWin()));
            return port;
          });
        }, function(message) {
          _this13.loggingBroken_ = true;
          _this13.afterLogging_(createErrorResponse("Could not connect [" + message + "]"));
        });
      }
      return this.serviceReady_;
    };
    _proto40.setReadyToPay = function setReadyToPay(isReadyToPay) {
      this.context_.setReadyToPay(isReadyToPay);
    };
    _proto40.close = function close() {
      this.doc_.getBody().removeChild(this.getElement());
    };
    _proto40.getContext = function getContext() {
      return this.context_;
    };
    _proto40.createLogRequest_ = function createLogRequest_(event) {
      var meta = new AnalyticsEventMeta();
      meta.setEventOriginator(event.eventOriginator);
      meta.setIsFromUserAction(!!event.isFromUserAction);
      this.context_.setClientTimestamp(this.getTimestamp_());
      var request = new AnalyticsRequest();
      request.setEvent(event.eventType);
      request.setContext(this.context_);
      request.setMeta(meta);
      if (event.additionalParameters instanceof EventParams) {
        request.setParams(event.additionalParameters);
      }
      return request;
    };
    _proto40.shouldLogPublisherEvents_ = function shouldLogPublisherEvents_() {
      return this.deps_.config().enableSwgAnalytics === true;
    };
    _proto40.shouldAlwaysLogEvent_ = function shouldAlwaysLogEvent_(event) {
      return event.eventType === AnalyticsEvent.IMPRESSION_PAGE_LOAD && event.eventOriginator === EventOriginator.AMP_CLIENT;
    };
    _proto40.handleClientEvent_ = function handleClientEvent_(event) {
      var _this14 = this;
      if (event.eventType === AnalyticsEvent.EVENT_SUBSCRIPTION_STATE) {
        return;
      }
      if (event.eventOriginator === EventOriginator.SHOWCASE_CLIENT) {
        return;
      }
      if (ClientEventManager.isPublisherEvent(event) && !this.shouldLogPublisherEvents_() && !this.shouldAlwaysLogEvent_(event)) {
        return;
      }
      this.unfinishedLogs_++;
      this.lastAction_ = this.start().then(function(port) {
        var analyticsRequest = _this14.createLogRequest_(event);
        port.execute(analyticsRequest);
        if (isExperimentOn2(_this14.doc_.getWin(), ExperimentFlags.LOGGING_BEACON)) {
          _this14.sendBeacon_(analyticsRequest);
        }
      });
    };
    _proto40.afterLogging_ = function afterLogging_(message) {
      var response = message;
      var success = response && response.getComplete() || false;
      var error = response && response.getError() || "Unknown logging Error";
      var isTimeout = error === TIMEOUT_ERROR;
      if (!success) {
        log("Error when logging: " + error);
      }
      this.unfinishedLogs_--;
      if (!isTimeout) {
        this.everFinishedLog_ = true;
      }
      if (this.loggingResolver_ === null) {
        return;
      }
      if (this.unfinishedLogs_ === 0 || this.loggingBroken_ || isTimeout) {
        if (this.timeout_ !== null) {
          clearTimeout(this.timeout_);
          this.timeout_ = null;
        }
        this.loggingResolver_(success);
        this.promiseToLog_ = null;
        this.loggingResolver_ = null;
      }
    };
    _proto40.getLoggingPromise = function getLoggingPromise() {
      var _this15 = this;
      if (this.unfinishedLogs_ === 0 || this.loggingBroken_) {
        return Promise.resolve(true);
      }
      if (this.promiseToLog_ === null) {
        this.promiseToLog_ = new Promise(function(resolve) {
          _this15.loggingResolver_ = resolve;
        });
        var whenDone = this.afterLogging_.bind(this);
        this.timeout_ = setTimeout(function() {
          _this15.timeout_ = null;
          whenDone(createErrorResponse(TIMEOUT_ERROR));
        }, this.everFinishedLog_ ? MAX_WAIT : MAX_FIRST_WAIT);
      }
      return this.promiseToLog_;
    };
    _proto40.sendBeacon_ = function sendBeacon_(analyticsRequest) {
      var pubId = encodeURIComponent(this.deps_.pageConfig().getPublicationId());
      var url = serviceUrl("/publication/" + pubId + "/clientlogs");
      this.fetcher_.sendBeacon(url, analyticsRequest);
    };
    return AnalyticsService2;
  }();
  var SWG_I18N_STRINGS = {
    "SUBSCRIPTION_TITLE_LANG_MAP": {
      "en": "Subscribe with Google",
      "ar": "Google \u0627\u0634\u062A\u0631\u0643\xA0\u0645\u0639",
      "de": "Abonnieren mit Google",
      "en-au": "Subscribe with Google",
      "en-ca": "Subscribe with Google",
      "en-gb": "Subscribe with Google",
      "en-us": "Subscribe with Google",
      "es": "Suscr\xEDbete con Google",
      "es-419": "Suscr\xEDbete con Google",
      "es-latam": "Suscr\xEDbete con Google",
      "es-latn": "Suscr\xEDbete con Google",
      "fr": "S'abonner avec Google",
      "fr-ca": "S'abonner avec Google",
      "hi": "Google \u0915\u0947 \u095B\u0930\u093F\u092F\u0947 \u0938\u0926\u0938\u094D\u092F\u0924\u093E",
      "id": "Berlangganan dengan Google",
      "it": "Abbonati con Google",
      "jp": "Google \u3067\u8CFC\u8AAD",
      "ko": "Google \uC744 \uD1B5\uD55C\uAD6C\uB3C5",
      "ms": "Langgan dengan Google",
      "nl": "Abonneren via Google",
      "no": "Abonner med Google",
      "pl": "Subskrybuj z Google",
      "pt": "Subscrever com o Google",
      "pt-br": "Assine com o Google",
      "ru": "\u041F\u043E\u0434\u043F\u0438c\u043A\u0430 \u0447\u0435\u0440\u0435\u0437 Google",
      "se": "Prenumerera med Google",
      "th": "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E1F\u0E32\u0E19 Google",
      "tr": "Google ile Abone Ol",
      "uk": "\u041F\u0456\u0434\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F \u0447\u0435\u0440\u0435\u0437 Google",
      "zh-tw": "\u900F\u904E Google \u8A02\u95B1"
    },
    "CONTRIBUTION_TITLE_LANG_MAP": {
      "en": "Contribute with Google",
      "ar": "\u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0629 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 Google",
      "de": "Mit Google beitragen",
      "en-au": "Contribute with Google",
      "en-ca": "Contribute with Google",
      "en-gb": "Contribute with Google",
      "en-us": "Contribute with Google",
      "es": "	Contribuye con Google",
      "es-419": "Contribuir con Google",
      "es-latam": "Contribuir con Google",
      "es-latn": "Contribuye con Google",
      "fr": "Contribuer avec Google",
      "fr-ca": "Contribuer avec Google",
      "hi": "Google \u0916\u093E\u0924\u0947 \u0915\u0940 \u092E\u0926\u0926 \u0938\u0947 \u092F\u094B\u0917\u0926\u093E\u0928 \u0915\u0930\u0947\u0902",
      "id": "Berkontribusi dengan Google",
      "it": "Contribuisci con Google",
      "jp": "Google \u3067\u5BC4\u4ED8",
      "ko": "Google\uC744 \uD1B5\uD574 \uCC38\uC5EC\uD558\uAE30",
      "ms": "Sumbangkan dengan Google",
      "nl": "Bijdragen met Google",
      "no": "Bidra med Google",
      "pl": "Wesprzyj publikacj\u0119 przez Google",
      "pt": "Contribuir com o Google",
      "pt-br": "Contribua com o Google",
      "ru": "\u0412\u043D\u0435\u0441\u0442\u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0447\u0435\u0440\u0435\u0437 Google",
      "se": "Bidra med Google",
      "th": "\u0E21\u0E35\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E48\u0E27\u0E21\u0E1C\u0E48\u0E32\u0E19 Google",
      "tr": "Google ile Katk\u0131da Bulun",
      "uk": "\u0417\u0440\u043E\u0431\u0438\u0442\u0438 \u0432\u043D\u0435\u0441\u043E\u043A \u0447\u0435\u0440\u0435\u0437 Google",
      "zh-tw": "\u900F\u904E Google \u6350\u6B3E"
    }
  };
  var iframeAttributes$1 = {
    "frameborder": "0",
    "scrolling": "no"
  };
  var Theme = {
    LIGHT: "light",
    DARK: "dark"
  };
  var SmartSubscriptionButtonApi = /* @__PURE__ */ function() {
    function SmartSubscriptionButtonApi2(deps, button, options, callback) {
      this.deps_ = deps;
      this.win_ = deps.win();
      this.doc_ = this.win_.document;
      this.activityPorts_ = deps.activities();
      this.iframe_ = createElement(this.doc_, "iframe", iframeAttributes$1);
      this.button_ = button;
      this.options_ = options;
      this.callback_ = callback;
      this.src_ = feUrl("/smartboxiframe");
      var frontendArguments = {
        "productId": this.deps_.pageConfig().getProductId(),
        "publicationId": this.deps_.pageConfig().getPublicationId(),
        "theme": this.options_ && this.options_.theme || "light",
        "lang": this.options_ && this.options_.lang || "en"
      };
      var messageTextColor = this.options_ && this.options_.messageTextColor;
      if (messageTextColor) {
        frontendArguments["messageTextColor"] = messageTextColor;
      }
      this.args_ = feArgs(frontendArguments);
    }
    var _proto41 = SmartSubscriptionButtonApi2.prototype;
    _proto41.handleSmartBoxClick_ = function handleSmartBoxClick_(smartBoxMessage) {
      if (smartBoxMessage && smartBoxMessage.getIsClicked()) {
        if (!this.callback_) {
          throw new Error("No callback!");
        }
        this.callback_();
        return;
      }
    };
    _proto41.start = function start() {
      var _this16 = this;
      setImportantStyles$1(this.iframe_, {
        "opacity": 1,
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "height": "100%",
        "right": 0,
        "width": "100%"
      });
      this.button_.appendChild(this.iframe_);
      var args = this.activityPorts_.addDefaultArguments(this.args_);
      this.activityPorts_.openIframe(this.iframe_, this.src_, args).then(function(port) {
        port.on(SmartBoxMessage, _this16.handleSmartBoxClick_.bind(_this16));
      });
      return this.iframe_;
    };
    return SmartSubscriptionButtonApi2;
  }();
  var DEFAULT_LANGUAGE_CODE = "en";
  function msg(map4, languageCodeOrElement) {
    var defaultMsg = map4[DEFAULT_LANGUAGE_CODE];
    if (typeof map4 !== "object" || !languageCodeOrElement) {
      return defaultMsg;
    }
    var languageCode = typeof languageCodeOrElement === "string" ? languageCodeOrElement : getLanguageCodeFromElement(languageCodeOrElement);
    languageCode = languageCode.toLowerCase();
    languageCode = languageCode.replace(/_/g, "-");
    var languageCodeSegments = languageCode.split("-");
    while (languageCodeSegments.length) {
      var key = languageCodeSegments.join("-");
      if (key in map4) {
        return map4[key];
      }
      languageCodeSegments.pop();
    }
    return defaultMsg;
  }
  function getLanguageCodeFromElement(element) {
    if (element.lang) {
      return element.lang;
    }
    if (element.ownerDocument && element.ownerDocument.documentElement.lang) {
      return element.ownerDocument.documentElement.lang;
    }
    return DEFAULT_LANGUAGE_CODE;
  }
  var ButtonAttributeValues = {
    SUBSCRIPTION: "subscription",
    CONTRIBUTION: "contribution"
  };
  var BUTTON_INNER_HTML = '<div class="swg-button-v2-icon-$theme$"></div>$textContent$';
  var ButtonApi = /* @__PURE__ */ function() {
    function ButtonApi2(doc, configuredRuntimePromise) {
      this.doc_ = doc;
      this.configuredRuntimePromise_ = configuredRuntimePromise;
    }
    var _proto42 = ButtonApi2.prototype;
    _proto42.init = function init() {
      var head = this.doc_.getHead();
      if (!head) {
        return;
      }
      var url = "https://news.google.com/swg/js/v1/swg-button.css";
      var existing = head.querySelector('link[href="' + url + '"]');
      if (existing) {
        return;
      }
      head.appendChild(createElement(this.doc_.getWin().document, "link", {
        "rel": "stylesheet",
        "type": "text/css",
        "href": url
      }));
    };
    _proto42.create = function create(optionsOrCallback, callback) {
      var button = createElement(this.doc_.getWin().document, "button", {});
      return this.attach(button, optionsOrCallback, callback);
    };
    _proto42.attach = function attach(button, optionsOrCallback, callback) {
      var options = this.setupButtonAndGetParams_(button, AnalyticsEvent.ACTION_SWG_BUTTON_CLICK, optionsOrCallback, callback).options;
      var theme = options["theme"];
      button.classList.add("swg-button-" + theme);
      button.setAttribute("role", "button");
      if (options["lang"]) {
        button.setAttribute("lang", options["lang"]);
      }
      button.setAttribute("title", msg(SWG_I18N_STRINGS.SUBSCRIPTION_TITLE_LANG_MAP, button) || "");
      this.logSwgEvent_(AnalyticsEvent.IMPRESSION_SWG_BUTTON);
      return button;
    };
    _proto42.attachSubscribeButton = function attachSubscribeButton(button, optionsOrCallback, callback) {
      var options = this.setupButtonAndGetParams_(button, AnalyticsEvent.ACTION_SWG_BUTTON_SHOW_OFFERS_CLICK, optionsOrCallback, callback).options;
      var theme = options["theme"];
      button.classList.add("swg-button-v2-" + theme);
      button.setAttribute("role", "button");
      if (options["lang"]) {
        button.setAttribute("lang", options["lang"]);
      }
      if (!options["enable"]) {
        button.setAttribute("disabled", "disabled");
      }
      button.innerHTML = BUTTON_INNER_HTML.replace("$theme$", theme).replace("$textContent$", msg(SWG_I18N_STRINGS.SUBSCRIPTION_TITLE_LANG_MAP, button) || "");
      this.logSwgEvent_(AnalyticsEvent.IMPRESSION_SHOW_OFFERS_SWG_BUTTON);
      return button;
    };
    _proto42.attachContributeButton = function attachContributeButton(button, optionsOrCallback, callback) {
      var options = this.setupButtonAndGetParams_(button, AnalyticsEvent.ACTION_SWG_BUTTON_SHOW_CONTRIBUTIONS_CLICK, optionsOrCallback, callback).options;
      var theme = options["theme"];
      button.classList.add("swg-button-v2-" + theme);
      button.setAttribute("role", "button");
      if (options["lang"]) {
        button.setAttribute("lang", options["lang"]);
      }
      if (!options["enable"]) {
        button.setAttribute("disabled", "disabled");
      }
      button.innerHTML = BUTTON_INNER_HTML.replace("$theme$", theme).replace("$textContent$", msg(SWG_I18N_STRINGS.CONTRIBUTION_TITLE_LANG_MAP, button) || "");
      this.logSwgEvent_(AnalyticsEvent.IMPRESSION_SHOW_CONTRIBUTIONS_SWG_BUTTON);
      return button;
    };
    _proto42.attachButtonsWithAttribute = function attachButtonsWithAttribute(attribute, attributeValues, options, attributeValueToCallback) {
      var _this17 = this;
      attributeValues.forEach(function(attributeValue) {
        var elements = _this17.doc_.getRootNode().querySelectorAll("[" + attribute + '="' + attributeValue + '"]');
        for (var i = 0; i < elements.length; i++) {
          if (attributeValue === ButtonAttributeValues.SUBSCRIPTION) {
            _this17.attachSubscribeButton(elements[i], options, attributeValueToCallback[attributeValue]);
          } else if (attributeValue === ButtonAttributeValues.CONTRIBUTION) {
            _this17.attachContributeButton(elements[i], options, attributeValueToCallback[attributeValue]);
          }
        }
      });
    };
    _proto42.logSwgEvent_ = function logSwgEvent_(eventType, isFromUserAction) {
      this.configuredRuntimePromise_.then(function(configuredRuntime) {
        configuredRuntime.eventManager().logSwgEvent(eventType, isFromUserAction);
      });
    };
    _proto42.getOptions_ = function getOptions_(optionsOrCallback) {
      var options = optionsOrCallback && typeof optionsOrCallback != "function" ? optionsOrCallback : {
        "theme": Theme.LIGHT
      };
      var theme = options["theme"];
      if (theme !== Theme.LIGHT && theme !== Theme.DARK) {
        options["theme"] = Theme.LIGHT;
      }
      return options;
    };
    _proto42.getCallback_ = function getCallback_(optionsOrCallback, callback) {
      return (typeof optionsOrCallback == "function" ? optionsOrCallback : null) || callback;
    };
    _proto42.setupButtonAndGetParams_ = function setupButtonAndGetParams_(button, clickEvent, optionsOrCallback, callbackFun) {
      var _this18 = this;
      var options = this.getOptions_(optionsOrCallback);
      var callback = this.getCallback_(optionsOrCallback, callbackFun);
      var clickFun = function clickFun2(event) {
        _this18.logSwgEvent_(clickEvent, true);
        if (typeof callback === "function") {
          callback(event);
        }
      };
      button.addEventListener("click", clickFun);
      return {
        options: options,
        clickFun: clickFun
      };
    };
    _proto42.attachSmartButton = function attachSmartButton(deps, button, optionsOrCallback, callback) {
      var params = this.setupButtonAndGetParams_(button, AnalyticsEvent.ACTION_SWG_BUTTON_CLICK, optionsOrCallback, callback);
      button.classList.add("swg-smart-button");
      return new SmartSubscriptionButtonApi(deps, button, params.options, params.clickFun).start();
    };
    return ButtonApi2;
  }();
  var CallbackId = {
    ENTITLEMENTS: 1,
    SUBSCRIBE_REQUEST: 2,
    PAYMENT_RESPONSE: 3,
    LOGIN_REQUEST: 4,
    LINK_PROGRESS: 5,
    LINK_COMPLETE: 6,
    FLOW_STARTED: 7,
    FLOW_CANCELED: 8
  };
  var Callbacks = /* @__PURE__ */ function() {
    function Callbacks2() {
      this.callbacks_ = {};
      this.resultBuffer_ = {};
      this.paymentResponsePromise_ = null;
    }
    var _proto43 = Callbacks2.prototype;
    _proto43.setOnEntitlementsResponse = function setOnEntitlementsResponse(callback) {
      this.setCallback_(CallbackId.ENTITLEMENTS, callback);
    };
    _proto43.triggerEntitlementsResponse = function triggerEntitlementsResponse(promise) {
      return this.trigger_(CallbackId.ENTITLEMENTS, promise.then(function(res) {
        return res.clone();
      }));
    };
    _proto43.hasEntitlementsResponsePending = function hasEntitlementsResponsePending() {
      return !!this.resultBuffer_[CallbackId.ENTITLEMENTS];
    };
    _proto43.setOnLoginRequest = function setOnLoginRequest(callback) {
      this.setCallback_(CallbackId.LOGIN_REQUEST, callback);
    };
    _proto43.triggerLoginRequest = function triggerLoginRequest(request) {
      return this.trigger_(CallbackId.LOGIN_REQUEST, request);
    };
    _proto43.setOnLinkProgress = function setOnLinkProgress(callback) {
      this.setCallback_(CallbackId.LINK_PROGRESS, callback);
    };
    _proto43.triggerLinkProgress = function triggerLinkProgress() {
      return this.trigger_(CallbackId.LINK_PROGRESS, true);
    };
    _proto43.resetLinkProgress = function resetLinkProgress() {
      this.resetCallback_(CallbackId.LINK_PROGRESS);
    };
    _proto43.setOnLinkComplete = function setOnLinkComplete(callback) {
      this.setCallback_(CallbackId.LINK_COMPLETE, callback);
    };
    _proto43.triggerLinkComplete = function triggerLinkComplete() {
      return this.trigger_(CallbackId.LINK_COMPLETE, true);
    };
    _proto43.hasLinkCompletePending = function hasLinkCompletePending() {
      return !!this.resultBuffer_[CallbackId.LINK_COMPLETE];
    };
    _proto43.setOnSubscribeRequest = function setOnSubscribeRequest(callback) {
      this.setCallback_(CallbackId.SUBSCRIBE_REQUEST, callback);
    };
    _proto43.triggerSubscribeRequest = function triggerSubscribeRequest() {
      return this.trigger_(CallbackId.SUBSCRIBE_REQUEST, true);
    };
    _proto43.hasSubscribeRequestCallback = function hasSubscribeRequestCallback() {
      return !!this.callbacks_[CallbackId.SUBSCRIBE_REQUEST];
    };
    _proto43.setOnSubscribeResponse = function setOnSubscribeResponse(callback) {
      warn("[swg.js:setOnSubscribeResponse]: This method has been deprecated, please switch usages to 'setOnPaymentResponse'");
      this.setCallback_(CallbackId.PAYMENT_RESPONSE, callback);
    };
    _proto43.setOnContributionResponse = function setOnContributionResponse(callback) {
      warn("[swg.js:setOnContributionResponse]: This method has been deprecated, please switch usages to 'setOnPaymentResponse'");
      this.setCallback_(CallbackId.PAYMENT_RESPONSE, callback);
    };
    _proto43.setOnPaymentResponse = function setOnPaymentResponse(callback) {
      this.setCallback_(CallbackId.PAYMENT_RESPONSE, callback);
    };
    _proto43.triggerPaymentResponse = function triggerPaymentResponse(responsePromise) {
      var _this19 = this;
      this.paymentResponsePromise_ = responsePromise.then(function(res) {
        _this19.trigger_(CallbackId.PAYMENT_RESPONSE, Promise.resolve(res.clone()));
      }, function(reason) {
        if (isCancelError(reason)) {
          return;
        }
        throw reason;
      });
      return !!this.callbacks_[CallbackId.PAYMENT_RESPONSE];
    };
    _proto43.hasPaymentResponsePending = function hasPaymentResponsePending() {
      return !!this.resultBuffer_[CallbackId.PAYMENT_RESPONSE];
    };
    _proto43.setOnFlowStarted = function setOnFlowStarted(callback) {
      this.setCallback_(CallbackId.FLOW_STARTED, callback);
    };
    _proto43.triggerFlowStarted = function triggerFlowStarted(flow, data) {
      if (data === void 0) {
        data = {};
      }
      return this.trigger_(CallbackId.FLOW_STARTED, {
        flow: flow,
        data: data
      });
    };
    _proto43.setOnFlowCanceled = function setOnFlowCanceled(callback) {
      this.setCallback_(CallbackId.FLOW_CANCELED, callback);
    };
    _proto43.triggerFlowCanceled = function triggerFlowCanceled(flow, data) {
      if (data === void 0) {
        data = {};
      }
      return this.trigger_(CallbackId.FLOW_CANCELED, {
        flow: flow,
        data: data
      });
    };
    _proto43.setCallback_ = function setCallback_(id, callback) {
      if (this.callbacks_[id]) {
        warn("[swg.js]: You have registered multiple callbacks for the same response.");
      }
      this.callbacks_[id] = callback;
      if (id in this.resultBuffer_) {
        this.executeCallback_(id, callback, this.resultBuffer_[id]);
      }
    };
    _proto43.trigger_ = function trigger_(id, data) {
      this.resultBuffer_[id] = data;
      var callback = this.callbacks_[id];
      if (callback) {
        this.executeCallback_(id, callback, data);
      }
      return !!callback;
    };
    _proto43.resetCallback_ = function resetCallback_(id) {
      if (id in this.resultBuffer_) {
        delete this.resultBuffer_[id];
      }
    };
    _proto43.executeCallback_ = function executeCallback_(id, callback, data) {
      var _this20 = this;
      resolvedPromise().then(function() {
        callback(data);
        _this20.resetCallback_(id);
      });
    };
    return Callbacks2;
  }();
  var AttributionParams = function AttributionParams2(displayName, avatarUrl) {
    this.displayName = displayName;
    this.avatarUrl = avatarUrl;
  };
  var AutoPromptConfig = function AutoPromptConfig2(maxImpressionsPerWeek, displayDelaySeconds, backoffSeconds, maxDismissalsPerWeek, maxDismissalsResultingHideSeconds) {
    this.maxImpressionsPerWeek = maxImpressionsPerWeek;
    this.clientDisplayTrigger = new ClientDisplayTrigger(displayDelaySeconds);
    this.explicitDismissalConfig = new ExplicitDismissalConfig(backoffSeconds, maxDismissalsPerWeek, maxDismissalsResultingHideSeconds);
  };
  var ClientDisplayTrigger = function ClientDisplayTrigger2(displayDelaySeconds) {
    this.displayDelaySeconds = displayDelaySeconds;
  };
  var ExplicitDismissalConfig = function ExplicitDismissalConfig2(backoffSeconds, maxDismissalsPerWeek, maxDismissalsResultingHideSeconds) {
    this.backoffSeconds = backoffSeconds;
    this.maxDismissalsPerWeek = maxDismissalsPerWeek;
    this.maxDismissalsResultingHideSeconds = maxDismissalsResultingHideSeconds;
  };
  var UiPredicates = function UiPredicates2(canDisplayAutoPrompt, canDisplayButton) {
    this.canDisplayAutoPrompt = canDisplayAutoPrompt;
    this.canDisplayButton = canDisplayButton;
  };
  var ClientConfig = function ClientConfig2(_temp) {
    var _ref = _temp === void 0 ? {} : _temp, attributionParams = _ref.attributionParams, autoPromptConfig = _ref.autoPromptConfig, paySwgVersion = _ref.paySwgVersion, uiPredicates = _ref.uiPredicates, usePrefixedHostPath = _ref.usePrefixedHostPath, useUpdatedOfferFlows = _ref.useUpdatedOfferFlows;
    this.autoPromptConfig = autoPromptConfig;
    this.paySwgVersion = paySwgVersion;
    this.usePrefixedHostPath = usePrefixedHostPath || false;
    this.useUpdatedOfferFlows = useUpdatedOfferFlows || false;
    this.uiPredicates = uiPredicates;
    this.attributionParams = attributionParams;
  };
  var ClientTheme = {
    LIGHT: "light",
    DARK: "dark"
  };
  var ClientConfigManager = /* @__PURE__ */ function() {
    function ClientConfigManager2(publicationId, fetcher, clientOptions) {
      this.clientOptions_ = clientOptions || {};
      this.publicationId_ = publicationId;
      this.fetcher_ = fetcher;
      this.responsePromise_ = null;
    }
    var _proto44 = ClientConfigManager2.prototype;
    _proto44.fetchClientConfig = function fetchClientConfig() {
      if (!this.publicationId_) {
        throw new Error("fetchClientConfig requires publicationId");
      }
      if (!this.responsePromise_) {
        this.responsePromise_ = this.fetch_();
      }
      return this.responsePromise_;
    };
    _proto44.getClientConfig = function getClientConfig() {
      return this.responsePromise_ || Promise.resolve(new ClientConfig());
    };
    _proto44.getAutoPromptConfig = function getAutoPromptConfig() {
      if (!this.responsePromise_) {
        this.fetchClientConfig();
      }
      return this.responsePromise_.then(function(clientConfig) {
        return clientConfig.autoPromptConfig;
      });
    };
    _proto44.getLanguage = function getLanguage() {
      return this.clientOptions_.lang || "en";
    };
    _proto44.getTheme = function getTheme() {
      return this.clientOptions_.theme || ClientTheme.LIGHT;
    };
    _proto44.shouldForceLangInIframes = function shouldForceLangInIframes() {
      return !!this.clientOptions_.forceLangInIframes && !!this.clientOptions_.lang;
    };
    _proto44.shouldEnableButton = function shouldEnableButton() {
      if (this.clientOptions_.disableButton) {
        return Promise.resolve(false);
      }
      if (!this.responsePromise_) {
        this.fetchClientConfig();
      }
      return this.responsePromise_.then(function(clientConfig) {
        var _clientConfig$uiPredi2;
        if ((_clientConfig$uiPredi2 = clientConfig.uiPredicates) != null && _clientConfig$uiPredi2.canDisplayButton) {
          return true;
        } else {
          return false;
        }
      });
    };
    _proto44.fetch_ = function fetch_() {
      var _this21 = this;
      var url = serviceUrl("/publication/" + encodeURIComponent(this.publicationId_) + "/clientconfiguration");
      return this.fetcher_.fetchCredentialedJson(url).then(function(json) {
        if (json.errorMessages && json.errorMessages.length > 0) {
          json.errorMessages.forEach(function(errorMessage) {
            warn("SwG ClientConfigManager: " + errorMessage);
          });
        }
        return _this21.parseClientConfig_(json);
      });
    };
    _proto44.parseClientConfig_ = function parseClientConfig_(json) {
      var paySwgVersion = json["paySwgVersion"];
      var autoPromptConfigJson = json["autoPromptConfig"];
      var autoPromptConfig = void 0;
      if (autoPromptConfigJson) {
        var _autoPromptConfigJson, _autoPromptConfigJson2, _autoPromptConfigJson3, _autoPromptConfigJson4;
        autoPromptConfig = new AutoPromptConfig(autoPromptConfigJson.maxImpressionsPerWeek, (_autoPromptConfigJson = autoPromptConfigJson.clientDisplayTrigger) == null ? void 0 : _autoPromptConfigJson.displayDelaySeconds, (_autoPromptConfigJson2 = autoPromptConfigJson.explicitDismissalConfig) == null ? void 0 : _autoPromptConfigJson2.backoffSeconds, (_autoPromptConfigJson3 = autoPromptConfigJson.explicitDismissalConfig) == null ? void 0 : _autoPromptConfigJson3.maxDismissalsPerWeek, (_autoPromptConfigJson4 = autoPromptConfigJson.explicitDismissalConfig) == null ? void 0 : _autoPromptConfigJson4.maxDismissalsResultingHideSeconds);
      }
      var uiPredicatesJson = json["uiPredicates"];
      var uiPredicates = void 0;
      if (uiPredicatesJson) {
        uiPredicates = new UiPredicates(uiPredicatesJson.canDisplayAutoPrompt, uiPredicatesJson.canDisplayButton);
      }
      var attributionParamsJson = json["attributionParams"];
      var attributionParams;
      if (attributionParamsJson) {
        attributionParams = new AttributionParams(attributionParamsJson.displayName, attributionParamsJson.avatarUrl);
      }
      return new ClientConfig({
        autoPromptConfig: autoPromptConfig,
        paySwgVersion: paySwgVersion,
        usePrefixedHostPath: json["usePrefixedHostPath"],
        useUpdatedOfferFlows: json["useUpdatedOfferFlows"],
        uiPredicates: uiPredicates,
        attributionParams: attributionParams
      });
    };
    return ClientConfigManager2;
  }();
  var ContributionsFlow = /* @__PURE__ */ function() {
    function ContributionsFlow2(deps, options) {
      var _options$isClosable2, _this22 = this;
      this.deps_ = deps;
      this.options_ = options;
      this.win_ = deps.win();
      this.clientConfigManager_ = deps.clientConfigManager();
      this.activityPorts_ = deps.activities();
      this.dialogManager_ = deps.dialogManager();
      this.activityIframeView_ = null;
      var isClosable = (_options$isClosable2 = options == null ? void 0 : options.isClosable) != null ? _options$isClosable2 : true;
      this.activityIframeViewPromise_ = this.clientConfigManager_.getClientConfig().then(function(clientConfig) {
        return _this22.shouldShow_(clientConfig) ? new ActivityIframeView(_this22.win_, _this22.activityPorts_, _this22.getUrl_(clientConfig), feArgs({
          "productId": deps.pageConfig().getProductId(),
          "publicationId": deps.pageConfig().getPublicationId(),
          "productType": ProductType.UI_CONTRIBUTION,
          "list": options && options.list || "default",
          "skus": options && options.skus || null,
          "isClosable": isClosable,
          "supportsEventManager": true
        }), true) : null;
      });
    }
    var _proto45 = ContributionsFlow2.prototype;
    _proto45.handleLinkRequest_ = function handleLinkRequest_(response) {
      if (response.getSubscriberOrMember()) {
        this.deps_.callbacks().triggerLoginRequest({
          linkRequested: !!response.getLinkRequested()
        });
      }
    };
    _proto45.startPayFlow_ = function startPayFlow_(response) {
      var sku = response.getSku();
      var isOneTime = response.getOneTime();
      if (sku) {
        var contributionRequest = {
          "skuId": sku
        };
        if (isOneTime) {
          contributionRequest["oneTime"] = isOneTime;
        }
        new PayStartFlow(this.deps_, contributionRequest, ProductType.UI_CONTRIBUTION).start();
      }
    };
    _proto45.start = function start() {
      var _this23 = this;
      return this.activityIframeViewPromise_.then(function(activityIframeView) {
        if (!activityIframeView) {
          return resolvedPromise();
        }
        _this23.deps_.callbacks().triggerFlowStarted(SubscriptionFlows.SHOW_CONTRIBUTION_OPTIONS);
        activityIframeView.onCancel(function() {
          _this23.deps_.callbacks().triggerFlowCanceled(SubscriptionFlows.SHOW_CONTRIBUTION_OPTIONS);
        });
        activityIframeView.on(AlreadySubscribedResponse, _this23.handleLinkRequest_.bind(_this23));
        activityIframeView.on(SkuSelectedResponse, _this23.startPayFlow_.bind(_this23));
        _this23.activityIframeView_ = activityIframeView;
        return _this23.dialogManager_.openView(_this23.activityIframeView_);
      });
    };
    _proto45.shouldShow_ = function shouldShow_(clientConfig) {
      var _clientConfig$uiPredi3;
      return ((_clientConfig$uiPredi3 = clientConfig.uiPredicates) == null ? void 0 : _clientConfig$uiPredi3.canDisplayAutoPrompt) !== false;
    };
    _proto45.getUrl_ = function getUrl_(clientConfig) {
      if (!clientConfig.useUpdatedOfferFlows) {
        return feUrl("/contributionsiframe");
      }
      if (this.clientConfigManager_.shouldForceLangInIframes()) {
        return feUrl("/contributionoffersiframe", {
          "hl": this.clientConfigManager_.getLanguage()
        });
      }
      return feUrl("/contributionoffersiframe");
    };
    _proto45.showNoEntitlementFoundToast = function showNoEntitlementFoundToast() {
      if (this.activityIframeView_) {
        this.activityIframeView_.execute(new EntitlementsResponse());
      }
    };
    return ContributionsFlow2;
  }();
  var DeferredAccountFlow = /* @__PURE__ */ function() {
    function DeferredAccountFlow2(deps, options) {
      this.deps_ = deps;
      this.win_ = deps.win();
      this.activityPorts_ = deps.activities();
      this.dialogManager_ = deps.dialogManager();
      this.activityIframeView_ = null;
      this.openPromise_ = null;
      var defaultOptions = {
        entitlements: null,
        consent: true
      };
      this.options_ = Object.assign(defaultOptions, options || {});
    }
    var _proto46 = DeferredAccountFlow2.prototype;
    _proto46.start = function start() {
      var _this24 = this;
      var entitlements = this.options_.entitlements;
      if (!entitlements || !entitlements.getEntitlementForSource("google")) {
        throw new Error('No entitlements with "google" source');
      }
      this.deps_.callbacks().triggerFlowStarted(SubscriptionFlows.COMPLETE_DEFERRED_ACCOUNT_CREATION);
      this.activityIframeView_ = new ActivityIframeView(this.win_, this.activityPorts_, feUrl("/recoveriframe"), feArgs({
        "publicationId": this.deps_.pageConfig().getPublicationId(),
        "productId": this.deps_.pageConfig().getProductId(),
        "entitlements": entitlements && entitlements.raw || null,
        "consent": this.options_.consent
      }), true);
      this.openPromise_ = this.dialogManager_.openView(this.activityIframeView_);
      return this.activityIframeView_.acceptResult().then(function(result) {
        return _this24.handleConsentResponse_(result.data);
      }, function(reason) {
        if (isCancelError(reason)) {
          _this24.deps_.callbacks().triggerFlowCanceled(SubscriptionFlows.COMPLETE_DEFERRED_ACCOUNT_CREATION);
        } else {
          _this24.dialogManager_.completeView(_this24.activityIframeView_);
        }
        throw reason;
      });
    };
    _proto46.handleConsentResponse_ = function handleConsentResponse_(data) {
      this.deps_.entitlementsManager().blockNextNotification();
      var entitlementsJwt = data["entitlements"];
      var idToken = data["idToken"];
      var productType = data["productType"];
      var entitlements = this.deps_.entitlementsManager().parseEntitlements({
        "signedEntitlements": entitlementsJwt
      });
      var userData = new UserData(idToken, new JwtHelper().decode(idToken));
      var purchaseDataList = data["purchaseDataList"] ? data["purchaseDataList"].map(function(pd) {
        return new PurchaseData(pd["data"], pd["signature"]);
      }) : [
        new PurchaseData(data["purchaseData"]["data"], data["purchaseData"]["signature"])
      ];
      var creatingFlow = new PayCompleteFlow(this.deps_);
      var completeHandler = creatingFlow.complete.bind(creatingFlow);
      var response = new DeferredAccountCreationResponse(entitlements, userData, purchaseDataList, completeHandler);
      this.deps_.eventManager().logSwgEvent(AnalyticsEvent.ACTION_NEW_DEFERRED_ACCOUNT, true);
      creatingFlow.start(new SubscribeResponse("", purchaseDataList[0], userData, entitlements, productType, function() {
        return resolvedPromise();
      }));
      return response;
    };
    return DeferredAccountFlow2;
  }();
  var CSS$1 = "body{margin:0;padding:0}swg-container,swg-loading,swg-loading-animate,swg-loading-image{display:block}swg-loading-container{-ms-flex-align:center!important;-ms-flex-pack:center!important;align-items:center!important;bottom:0!important;display:-ms-flexbox!important;display:flex!important;height:100%!important;justify-content:center!important;margin-top:5px!important;min-height:148px!important;width:100%!important;z-index:2147483647!important}@media (min-height:630px),(min-width:630px){swg-loading-container{background-color:#fff!important;border-top-left-radius:8px!important;border-top-right-radius:8px!important;box-shadow:0 1px 1px rgba(60,64,67,.3),0 1px 4px 1px rgba(60,64,67,.15)!important;margin-left:auto!important;margin-right:auto!important;width:560px!important}swg-loading-container.centered-on-desktop{border-radius:8px!important;height:120px!important;min-height:120px!important}}swg-loading{animation:mspin-rotate 1568.63ms linear infinite;height:36px;overflow:hidden;width:36px;z-index:2147483647!important}swg-loading-animate{animation:mspin-revrot 5332ms steps(4) infinite}swg-loading-image{animation:swg-loading-film 5332ms steps(324) infinite;background-image:url(https://news.google.com/swg/js/v1/loader.svg);background-size:100%;height:36px;width:11664px}@keyframes swg-loading-film{0%{transform:translateX(0)}to{transform:translateX(-11664px)}}@keyframes mspin-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes mspin-revrot{0%{transform:rotate(0deg)}to{transform:rotate(-1turn)}}\n/*# sourceURL=/./src/ui/ui.css*/";
  var friendlyIframeAttributes = {
    "frameborder": 0,
    "scrolling": "no",
    "src": "about:blank"
  };
  var FriendlyIframe = /* @__PURE__ */ function() {
    function FriendlyIframe2(doc, attrs) {
      var _this25 = this;
      if (attrs === void 0) {
        attrs = {};
      }
      var mergedAttrs = Object.assign({}, friendlyIframeAttributes, attrs);
      this.iframe_ = createElement(doc, "iframe", mergedAttrs);
      resetAllStyles(this.iframe_);
      this.ready_ = new Promise(function(resolve) {
        _this25.iframe_.onload = resolve;
      });
    }
    var _proto47 = FriendlyIframe2.prototype;
    _proto47.whenReady = function whenReady() {
      return this.ready_;
    };
    _proto47.getElement = function getElement() {
      return this.iframe_;
    };
    _proto47.getDocument = function getDocument() {
      var doc = this.getElement().contentDocument || this.getElement().contentWindow && this.getElement().contentWindow.document;
      if (!doc) {
        throw new Error("not loaded");
      }
      return doc;
    };
    _proto47.getBody = function getBody() {
      return this.getDocument().body;
    };
    _proto47.isConnected = function isConnected() {
      return _isConnected(this.getElement());
    };
    return FriendlyIframe2;
  }();
  function transition$1(el, props, durationMillis, curve) {
    var win = el.ownerDocument.defaultView;
    var previousTransitionValue = el.style.transition || "";
    return new Promise(function(resolve) {
      win.setTimeout(function() {
        win.setTimeout(resolve, durationMillis);
        var tr = durationMillis + "ms " + curve;
        setImportantStyles$1(el, Object.assign({
          "transition": "transform " + tr + ", opacity " + tr
        }, props));
      });
    }).then(function() {
      setImportantStyles$1(el, {
        "transition": previousTransitionValue
      });
    });
  }
  var Graypane$1 = /* @__PURE__ */ function() {
    function Graypane$12(doc, zIndex) {
      this.doc_ = doc;
      this.fadeBackground_ = this.doc_.getWin().document.createElement("swg-popup-background");
      setImportantStyles$1(this.fadeBackground_, {
        "z-index": zIndex,
        "display": "none",
        "pointer-events": "none",
        "position": "fixed",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "background-color": "rgba(32, 33, 36, .6)"
      });
    }
    var _proto48 = Graypane$12.prototype;
    _proto48.getElement = function getElement() {
      return this.fadeBackground_;
    };
    _proto48.isAttached = function isAttached() {
      return !!this.fadeBackground_.parentNode;
    };
    _proto48.attach = function attach() {
      this.doc_.getBody().appendChild(this.fadeBackground_);
    };
    _proto48.destroy = function destroy() {
      this.doc_.getBody().removeChild(this.fadeBackground_);
    };
    _proto48.show = function show(animated) {
      if (animated === void 0) {
        animated = true;
      }
      setImportantStyles$1(this.fadeBackground_, {
        "display": "block",
        "opacity": animated ? 0 : 1
      });
      if (animated) {
        return transition$1(this.fadeBackground_, {
          "opacity": 1
        }, 300, "ease-out");
      }
    };
    _proto48.hide = function hide(animated) {
      var _this26 = this;
      if (animated === void 0) {
        animated = true;
      }
      if (animated) {
        return transition$1(this.fadeBackground_, {
          "opacity": 0
        }, 300, "ease-out").then(function() {
          setImportantStyles$1(_this26.fadeBackground_, {
            "display": "none"
          });
        });
      }
      setImportantStyles$1(this.fadeBackground_, {
        "display": "none"
      });
    };
    return Graypane$12;
  }();
  var LoadingView = /* @__PURE__ */ function() {
    function LoadingView2(doc, config) {
      var _this27 = this;
      if (config === void 0) {
        config = {};
      }
      this.doc_ = doc;
      this.loadingContainer_ = createElement(this.doc_, "swg-loading-container", {});
      if (config.additionalClasses) {
        config.additionalClasses.forEach(function(additionalClass) {
          _this27.loadingContainer_.classList.add(additionalClass);
        });
      }
      this.loading_ = createElement(this.doc_, "swg-loading", {});
      this.loadingContainer_.appendChild(this.loading_);
      this.loadingContainer_.style.setProperty("display", "none", "important");
      this.buildLoadingIndicator_();
    }
    var _proto49 = LoadingView2.prototype;
    _proto49.getElement = function getElement() {
      return this.loadingContainer_;
    };
    _proto49.show = function show() {
      this.loadingContainer_.style.removeProperty("display");
    };
    _proto49.hide = function hide() {
      this.loadingContainer_.style.setProperty("display", "none", "important");
    };
    _proto49.buildLoadingIndicator_ = function buildLoadingIndicator_() {
      var loadingContainer = this.loading_;
      var loadingIndicatorTopContainer = createElement(this.doc_, "swg-loading-animate", {});
      loadingContainer.appendChild(loadingIndicatorTopContainer);
      var loadingIndicatorChildContainer = createElement(this.doc_, "swg-loading-image", {});
      loadingIndicatorTopContainer.appendChild(loadingIndicatorChildContainer);
    };
    return LoadingView2;
  }();
  function getReadyState(doc) {
    return doc["readyState"];
  }
  function isDocumentReady(doc) {
    var readyState = getReadyState(doc);
    return readyState != "loading" && readyState != "uninitialized";
  }
  function onDocumentReady(doc, callback) {
    onDocumentState(doc, isDocumentReady, callback);
  }
  function onDocumentState(doc, condition, callback) {
    if (condition(doc)) {
      callback(doc);
      return;
    }
    var callbackHasExecuted = false;
    var readyListener = function readyListener2() {
      if (condition(doc) && !callbackHasExecuted) {
        callback(doc);
        callbackHasExecuted = true;
        doc.removeEventListener("readystatechange", readyListener2);
      }
    };
    doc.addEventListener("readystatechange", readyListener);
  }
  function whenDocumentReady(doc) {
    return new Promise(function(resolve) {
      onDocumentReady(doc, resolve);
    });
  }
  var GlobalDoc = /* @__PURE__ */ function() {
    function GlobalDoc2(winOrDoc) {
      var isWin = !!winOrDoc.document;
      this.win_ = isWin ? winOrDoc : winOrDoc.defaultView;
      this.doc_ = isWin ? winOrDoc.document : winOrDoc;
    }
    var _proto50 = GlobalDoc2.prototype;
    _proto50.getWin = function getWin2() {
      return this.win_;
    };
    _proto50.getRootNode = function getRootNode() {
      return this.doc_;
    };
    _proto50.getRootElement = function getRootElement() {
      return this.doc_.documentElement;
    };
    _proto50.getHead = function getHead() {
      return this.doc_.head;
    };
    _proto50.getBody = function getBody() {
      return this.doc_.body;
    };
    _proto50.isReady = function isReady() {
      return isDocumentReady(this.doc_);
    };
    _proto50.whenReady = function whenReady() {
      return whenDocumentReady(this.doc_);
    };
    _proto50.addToFixedLayer = function addToFixedLayer(unusedElement) {
      return resolvedPromise();
    };
    return GlobalDoc2;
  }();
  function resolveDoc(input) {
    if (input.nodeType === 9) {
      return new GlobalDoc(input);
    }
    if (input.document) {
      return new GlobalDoc(input);
    }
    return input;
  }
  var Z_INDEX = 2147483647;
  var rootElementImportantStyles = {
    "min-height": "50px",
    "border": "none",
    "display": "block",
    "position": "fixed",
    "z-index": Z_INDEX,
    "box-sizing": "border-box"
  };
  var resetViewStyles = {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "right": "0",
    "bottom": "0",
    "opacity": 0,
    "height": 0,
    "max-height": "100%",
    "max-width": "100%",
    "min-height": "100%",
    "min-width": "100%",
    "width": 0
  };
  var Dialog = /* @__PURE__ */ function() {
    function Dialog2(doc, importantStyles, styles, dialogConfig) {
      if (importantStyles === void 0) {
        importantStyles = {};
      }
      if (styles === void 0) {
        styles = {};
      }
      if (dialogConfig === void 0) {
        dialogConfig = {};
      }
      this.doc_ = doc;
      var desktopDialogConfig = dialogConfig.desktopConfig || {};
      var supportsWideScreen = !!desktopDialogConfig.supportsWideScreen;
      var defaultIframeCssClass = "swg-dialog " + (supportsWideScreen ? "swg-wide-dialog" : "");
      var iframeCssClass = dialogConfig.iframeCssClassOverride || defaultIframeCssClass;
      this.iframe_ = new FriendlyIframe(doc.getWin().document, {
        "class": iframeCssClass
      });
      this.graypane_ = new Graypane$1(doc, Z_INDEX - 1);
      var modifiedImportantStyles = Object.assign({}, rootElementImportantStyles, importantStyles);
      setImportantStyles$1(this.iframe_.getElement(), modifiedImportantStyles);
      setStyles(this.iframe_.getElement(), styles);
      this.loadingView_ = null;
      this.container_ = null;
      this.view_ = null;
      this.animating_ = null;
      this.animationNumber_ = 0;
      this.hidden_ = false;
      this.previousProgressView_ = null;
      this.maxAllowedHeightRatio_ = dialogConfig.maxAllowedHeightRatio !== void 0 ? dialogConfig.maxAllowedHeightRatio : 0.9;
      this.positionCenterOnDesktop_ = !!desktopDialogConfig.isCenterPositioned;
      this.desktopMediaQuery_ = this.doc_.getWin().matchMedia("(min-width: 641px)");
      this.desktopMediaQueryListener_ = null;
    }
    var _proto51 = Dialog2.prototype;
    _proto51.open = function open(hidden) {
      var _this28 = this;
      if (hidden === void 0) {
        hidden = false;
      }
      var iframe2 = this.iframe_;
      if (iframe2.isConnected()) {
        throw new Error("already opened");
      }
      this.doc_.getBody().appendChild(iframe2.getElement());
      this.graypane_.attach();
      if (hidden) {
        setImportantStyles$1(iframe2.getElement(), {
          "visibility": "hidden",
          "opacity": 0
        });
        this.hidden_ = hidden;
      } else {
        this.show_();
      }
      return iframe2.whenReady().then(function() {
        _this28.buildIframe_();
        return _this28;
      });
    };
    _proto51.openInContainer = function openInContainer(containerEl) {
      var _this29 = this;
      var iframe2 = this.iframe_;
      if (iframe2.isConnected()) {
        throw new Error("already opened");
      }
      containerEl.appendChild(iframe2.getElement());
      return iframe2.whenReady().then(function() {
        _this29.buildIframe_();
        return _this29;
      });
    };
    _proto51.buildIframe_ = function buildIframe_() {
      var _this30 = this;
      var iframe2 = this.iframe_;
      var iframeBody = iframe2.getBody();
      var iframeDoc = this.iframe_.getDocument();
      injectStyleSheet(resolveDoc(iframeDoc), CSS$1);
      var loadingViewClasses = [];
      if (this.isPositionCenterOnDesktop()) {
        loadingViewClasses.push("centered-on-desktop");
      }
      this.loadingView_ = new LoadingView(iframeDoc, {
        additionalClasses: loadingViewClasses
      });
      iframeBody.appendChild(this.loadingView_.getElement());
      this.container_ = createElement(iframeDoc, "swg-container", {});
      iframeBody.appendChild(this.container_);
      this.setPosition_();
      if (this.positionCenterOnDesktop_) {
        this.desktopMediaQueryListener_ = function() {
          _this30.setPosition_();
        };
        this.desktopMediaQuery_.addListener(this.desktopMediaQueryListener_);
      }
    };
    _proto51.close = function close(animated) {
      var _this31 = this;
      if (animated === void 0) {
        animated = true;
      }
      var animating;
      if (animated) {
        animating = this.animate_(function() {
          _this31.graypane_.hide(true);
          return transition$1(_this31.getElement(), {
            "transform": "translateY(100%)"
          }, 300, "ease-out");
        });
      } else {
        animating = resolvedPromise();
      }
      return animating.then(function() {
        var iframeEl = _this31.iframe_.getElement();
        iframeEl.parentNode.removeChild(iframeEl);
        _this31.removePaddingToHtml_();
        _this31.graypane_.destroy();
        if (_this31.desktopMediaQueryListener_) {
          _this31.desktopMediaQuery_.removeListener(_this31.desktopMediaQueryListener_);
        }
      });
    };
    _proto51.getContainer = function getContainer() {
      if (!this.container_) {
        throw new Error("not opened yet");
      }
      return this.container_;
    };
    _proto51.getIframe = function getIframe() {
      return this.iframe_;
    };
    _proto51.getElement = function getElement() {
      return this.iframe_.getElement();
    };
    _proto51.getLoadingView = function getLoadingView() {
      return this.loadingView_;
    };
    _proto51.getMaxAllowedHeightRatio = function getMaxAllowedHeightRatio() {
      return this.maxAllowedHeightRatio_;
    };
    _proto51.isPositionCenterOnDesktop = function isPositionCenterOnDesktop() {
      return this.positionCenterOnDesktop_;
    };
    _proto51.entryTransitionToNextView_ = function entryTransitionToNextView_() {
      if (this.view_ && this.view_.hasLoadingIndicator()) {
        this.previousProgressView_ = this.view_;
      } else {
        removeChildren(this.getContainer());
        this.loadingView_.show();
      }
    };
    _proto51.exitTransitionFromOldView_ = function exitTransitionFromOldView_() {
      if (this.previousProgressView_) {
        removeElement(this.previousProgressView_.getElement());
        this.previousProgressView_ = null;
      } else {
        this.loadingView_.hide();
      }
    };
    _proto51.getCurrentView = function getCurrentView() {
      return this.view_;
    };
    _proto51.openView = function openView(view) {
      var _this32 = this;
      setImportantStyles$1(view.getElement(), resetViewStyles);
      this.entryTransitionToNextView_();
      this.view_ = view;
      this.getContainer().appendChild(view.getElement());
      if (view.shouldFadeBody() && !this.hidden_) {
        this.graypane_.show(true);
      }
      return view.init(this).then(function() {
        setImportantStyles$1(view.getElement(), {
          "opacity": 1
        });
        if (_this32.hidden_) {
          if (view.shouldFadeBody()) {
            _this32.graypane_.show(true);
          }
          _this32.show_();
        }
        _this32.exitTransitionFromOldView_();
      });
    };
    _proto51.show_ = function show_() {
      var _this33 = this;
      this.animate_(function() {
        setImportantStyles$1(_this33.getElement(), {
          "transform": "translateY(100%)",
          "opactiy": 1,
          "visibility": "visible"
        });
        return transition$1(_this33.getElement(), {
          "transform": _this33.getDefaultTranslateY_(),
          "opacity": 1,
          "visibility": "visible"
        }, 300, "ease-out").then(function() {
          _this33.getElement().focus();
        });
      });
      this.hidden_ = false;
    };
    _proto51.resizeView = function resizeView(view, height, animated) {
      var _this34 = this;
      if (animated === void 0) {
        animated = true;
      }
      if (this.view_ != view) {
        return null;
      }
      var newHeight = this.getMaxAllowedHeight_(height);
      var animationNumber = ++this.animationNumber_;
      var isStale = function isStale2() {
        return animationNumber !== _this34.animationNumber_;
      };
      var animating;
      if (animated) {
        var oldHeight = this.getElement().offsetHeight;
        if (newHeight >= oldHeight) {
          animating = this.animate_(function() {
            if (isStale()) {
              return resolvedPromise();
            }
            var immediateStyles = {
              "height": newHeight + "px"
            };
            if (!_this34.shouldPositionCenter_()) {
              immediateStyles["transform"] = "translateY(" + (newHeight - oldHeight) + "px)";
            }
            setImportantStyles$1(_this34.getElement(), immediateStyles);
            return transition$1(_this34.getElement(), {
              "transform": _this34.getDefaultTranslateY_()
            }, 300, "ease-out");
          });
        } else {
          animating = this.animate_(function() {
            var transitionPromise = isStale() ? resolvedPromise() : transition$1(_this34.getElement(), {
              "transform": _this34.shouldPositionCenter_() ? _this34.getDefaultTranslateY_() : "translateY(" + (oldHeight - newHeight) + "px)"
            }, 300, "ease-out");
            return transitionPromise.then(function() {
              if (isStale()) {
                return;
              }
              setImportantStyles$1(_this34.getElement(), {
                "height": newHeight + "px",
                "transform": _this34.getDefaultTranslateY_()
              });
            });
          });
        }
      } else {
        setImportantStyles$1(this.getElement(), {
          "height": newHeight + "px"
        });
        animating = resolvedPromise();
      }
      return animating.then(function() {
        if (isStale()) {
          return;
        }
        _this34.updatePaddingToHtml_(height);
        view.resized();
      });
    };
    _proto51.animate_ = function animate_(callback) {
      var _this35 = this;
      var wait = this.animating_ || resolvedPromise();
      return this.animating_ = wait.then(function() {
        return callback();
      }, function() {
      }).then(function() {
        _this35.animating_ = null;
      });
    };
    _proto51.getMaxAllowedHeight_ = function getMaxAllowedHeight_(height) {
      return Math.min(height, this.doc_.getWin().innerHeight * this.maxAllowedHeightRatio_);
    };
    _proto51.updatePaddingToHtml_ = function updatePaddingToHtml_(newHeight) {
      if (this.shouldPositionCenter_()) {
        this.removePaddingToHtml_();
        return;
      }
      var bottomPadding = newHeight + 20;
      var htmlElement = this.doc_.getRootElement();
      setImportantStyles$1(htmlElement, {
        "padding-bottom": bottomPadding + "px"
      });
    };
    _proto51.removePaddingToHtml_ = function removePaddingToHtml_() {
      this.doc_.getRootElement().style.removeProperty("padding-bottom");
    };
    _proto51.setPosition_ = function setPosition_() {
      setImportantStyles$1(this.getElement(), this.getPositionStyle_());
    };
    _proto51.shouldPositionCenter_ = function shouldPositionCenter_() {
      return this.positionCenterOnDesktop_ && this.desktopMediaQuery_.matches;
    };
    _proto51.getPositionStyle_ = function getPositionStyle_() {
      if (this.shouldPositionCenter_()) {
        return {
          "top": "50%",
          "bottom": 0,
          "transform": this.getDefaultTranslateY_()
        };
      }
      return {
        "top": "auto",
        "bottom": 0,
        "transform": this.getDefaultTranslateY_()
      };
    };
    _proto51.getDefaultTranslateY_ = function getDefaultTranslateY_() {
      if (this.shouldPositionCenter_()) {
        return "translateY(-50%)";
      }
      return "translateY(0px)";
    };
    return Dialog2;
  }();
  var POPUP_Z_INDEX = 2147483647;
  var DialogManager = /* @__PURE__ */ function() {
    function DialogManager2(doc) {
      var _this36 = this;
      this.doc_ = doc;
      this.dialog_ = null;
      this.openPromise_ = null;
      this.popupGraypane_ = new Graypane$1(doc, POPUP_Z_INDEX);
      this.popupWin_ = null;
      this.popupGraypane_.getElement().addEventListener("click", function() {
        if (_this36.popupWin_) {
          try {
            _this36.popupWin_.focus();
          } catch (e) {
          }
        }
      });
    }
    var _proto52 = DialogManager2.prototype;
    _proto52.openDialog = function openDialog(hidden, dialogConfig) {
      if (hidden === void 0) {
        hidden = false;
      }
      if (dialogConfig === void 0) {
        dialogConfig = {};
      }
      if (!this.openPromise_) {
        this.dialog_ = new Dialog(this.doc_, {}, {}, dialogConfig);
        this.openPromise_ = this.dialog_.open(hidden);
      }
      return this.openPromise_;
    };
    _proto52.openView = function openView(view, hidden, dialogConfig) {
      if (hidden === void 0) {
        hidden = false;
      }
      if (dialogConfig === void 0) {
        dialogConfig = {};
      }
      this.handleCancellations(view);
      return this.openDialog(hidden, dialogConfig).then(function(dialog) {
        return dialog.openView(view);
      });
    };
    _proto52.handleCancellations = function handleCancellations(view) {
      var _this37 = this;
      return view.whenComplete().catch(function(reason) {
        if (isCancelError(reason)) {
          _this37.completeView(view);
        }
        throw reason;
      });
    };
    _proto52.completeView = function completeView(view) {
      var _this38 = this;
      setTimeout(function() {
        if (_this38.dialog_ && _this38.dialog_.getCurrentView() == view) {
          _this38.close_();
        }
      }, 100);
    };
    _proto52.completeAll = function completeAll() {
      if (this.dialog_) {
        this.close_();
      }
      if (this.popupGraypane_.isAttached()) {
        this.popupGraypane_.destroy();
      }
    };
    _proto52.getDialog = function getDialog() {
      return this.dialog_;
    };
    _proto52.close_ = function close_() {
      this.dialog_.close();
      this.dialog_ = null;
      this.openPromise_ = null;
    };
    _proto52.popupOpened = function popupOpened(targetWin) {
      this.popupWin_ = targetWin || null;
      if (!this.popupGraypane_.isAttached()) {
        this.popupGraypane_.attach();
      }
      this.popupGraypane_.show();
    };
    _proto52.popupClosed = function popupClosed() {
      this.popupWin_ = null;
      try {
        this.popupGraypane_.hide();
      } catch (e) {
      }
    };
    return DialogManager2;
  }();
  var MeterClientTypes = {
    LICENSED_BY_GOOGLE: 1
  };
  var IFRAME_BOX_SHADOW = "rgba(60, 64, 67, 0.3) 0px -2px 5px, rgba(60, 64, 67, 0.15) 0px -5px 5px";
  var MINIMIZED_IFRAME_SIZE = "420px";
  var MeterToastApi = /* @__PURE__ */ function() {
    function MeterToastApi2(deps) {
      var _this39 = this;
      this.deps_ = deps;
      this.win_ = deps.win();
      this.activityPorts_ = deps.activities();
      this.dialogManager_ = deps.dialogManager();
      var iframeArgs = this.activityPorts_.addDefaultArguments({
        isClosable: true,
        hasSubscriptionCallback: deps.callbacks().hasSubscribeRequestCallback()
      });
      this.activityIframeView_ = new ActivityIframeView(this.win_, this.activityPorts_, feUrl("/metertoastiframe"), iframeArgs, false);
      this.onConsumeCallback_ = null;
      this.onConsumeCallbackHandled_ = false;
      this.sendCloseRequestFunction_ = function() {
        var closeRequest = new ToastCloseRequest();
        closeRequest.setClose(true);
        _this39.activityIframeView_.execute(closeRequest);
        _this39.removeCloseEventListener();
        _this39.deps_.eventManager().logSwgEvent(AnalyticsEvent.ACTION_METER_TOAST_CLOSED_BY_ARTICLE_INTERACTION, true);
        if (_this39.onConsumeCallback_ && !_this39.onConsumeCallbackHandled_) {
          _this39.onConsumeCallbackHandled_ = true;
          _this39.onConsumeCallback_();
        }
      };
      this.scrollEventListener_ = null;
    }
    var _proto53 = MeterToastApi2.prototype;
    _proto53.start = function start() {
      var _this40 = this;
      this.deps_.callbacks().triggerFlowStarted(SubscriptionFlows.SHOW_METER_TOAST);
      this.activityIframeView_.on(ViewSubscriptionsResponse, this.startNativeFlow_.bind(this));
      if (!this.deps_.callbacks().hasSubscribeRequestCallback()) {
        var errorMessage = "[swg.js]: `setOnNativeSubscribeRequest` has not been set before starting the metering flow, so users will not be able to subscribe from the metering dialog directly. Please call `setOnNativeSubscribeRequest` with a subscription flow callback before starting metering.";
        warn(errorMessage);
      }
      this.dialogManager_.handleCancellations(this.activityIframeView_).catch(function(reason) {
        if (_this40.onConsumeCallback_ && !_this40.onConsumeCallbackHandled_) {
          _this40.onConsumeCallbackHandled_ = true;
          _this40.onConsumeCallback_();
        }
        if (!isCancelError(reason)) {
          console.error("[swg.js]: Error occurred during meter toast handling: " + reason);
          throw reason;
        }
      });
      return this.dialogManager_.openDialog().then(function(dialog) {
        _this40.setDialogBoxShadow_();
        _this40.setLoadingViewWidth_();
        return dialog.openView(_this40.activityIframeView_).then(function() {
          _this40.win_.addEventListener("click", _this40.sendCloseRequestFunction_);
          _this40.win_.addEventListener("touchstart", _this40.sendCloseRequestFunction_);
          _this40.win_.addEventListener("mousedown", _this40.sendCloseRequestFunction_);
          if (_this40.isMobile_()) {
            var $body = _this40.win_.document.body;
            setStyle($body, "overflow", "hidden");
          } else {
            var start2, scrollTimeout;
            _this40.scrollEventListener_ = function() {
              start2 = start2 || _this40.win_.pageYOffset;
              _this40.win_.clearTimeout(scrollTimeout);
              scrollTimeout = _this40.win_.setTimeout(function() {
                if (Math.abs(_this40.win_.pageYOffset - start2) > 100) {
                  _this40.sendCloseRequestFunction_();
                }
              }, 100);
            };
            _this40.win_.addEventListener("scroll", _this40.scrollEventListener_);
          }
          _this40.deps_.eventManager().logSwgEvent(AnalyticsEvent.IMPRESSION_METER_TOAST);
          _this40.deps_.eventManager().logSwgEvent(AnalyticsEvent.EVENT_OFFERED_METER);
        });
      });
    };
    _proto53.setOnConsumeCallback = function setOnConsumeCallback(onConsumeCallback) {
      this.onConsumeCallback_ = onConsumeCallback;
    };
    _proto53.removeCloseEventListener = function removeCloseEventListener() {
      this.win_.removeEventListener("click", this.sendCloseRequestFunction_);
      this.win_.removeEventListener("touchstart", this.sendCloseRequestFunction_);
      this.win_.removeEventListener("mousedown", this.sendCloseRequestFunction_);
      if (this.isMobile_()) {
        var $body = this.win_.document.body;
        setStyle($body, "overflow", "visible");
      } else {
        this.win_.removeEventListener("scroll", this.scrollEventListener_);
      }
    };
    _proto53.setDialogBoxShadow_ = function setDialogBoxShadow_() {
      var mobileMediaQuery = this.win_.matchMedia("(max-width: 640px), (max-height: 640px)");
      var element = this.dialogManager_.getDialog().getElement();
      if (mobileMediaQuery.matches) {
        setImportantStyles$1(element, {
          "box-shadow": IFRAME_BOX_SHADOW
        });
      }
      mobileMediaQuery.addListener(function(changed) {
        if (changed.matches) {
          setImportantStyles$1(element, {
            "box-shadow": IFRAME_BOX_SHADOW
          });
        } else {
          setImportantStyles$1(element, {
            "box-shadow": ""
          });
        }
      });
    };
    _proto53.setLoadingViewWidth_ = function setLoadingViewWidth_() {
      var desktopMediaQuery = this.win_.matchMedia("(min-width: 640px) and (min-height: 640px)");
      if (desktopMediaQuery.matches) {
        var element = this.dialogManager_.getDialog().getLoadingView().getElement();
        setImportantStyles$1(element, {
          "width": MINIMIZED_IFRAME_SIZE,
          "margin": "auto"
        });
      }
    };
    _proto53.startNativeFlow_ = function startNativeFlow_(response) {
      if (response.getNative()) {
        this.removeCloseEventListener();
        this.onConsumeCallbackHandled_ = true;
        this.deps_.callbacks().triggerSubscribeRequest();
      }
    };
    _proto53.isMobile_ = function isMobile_() {
      return !!this.win_.navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile/i);
    };
    return MeterToastApi2;
  }();
  var toastImportantStyles = {
    "height": 0
  };
  var iframeAttributes = {
    "frameborder": "0",
    "scrolling": "no",
    "class": "swg-toast"
  };
  var Toast = /* @__PURE__ */ function() {
    function Toast2(deps, src, args) {
      var _this41 = this;
      this.doc_ = deps.doc();
      this.activityPorts_ = deps.activities();
      this.src_ = src;
      this.args_ = args || {};
      this.animating_ = null;
      this.iframe_ = createElement(this.doc_.getWin().document, "iframe", iframeAttributes);
      setImportantStyles$1(this.iframe_, toastImportantStyles);
      this.ready_ = new Promise(function(resolve) {
        _this41.iframe_.onload = resolve;
      });
    }
    var _proto54 = Toast2.prototype;
    _proto54.getElement = function getElement() {
      return this.iframe_;
    };
    _proto54.open = function open() {
      this.doc_.getBody().appendChild(this.iframe_);
      return this.buildToast_();
    };
    _proto54.buildToast_ = function buildToast_() {
      var _this42 = this;
      var toastDurationSeconds = 7;
      return this.activityPorts_.openIframe(this.iframe_, this.src_, this.args_).then(function(port) {
        return port.whenReady();
      }).then(function() {
        resetStyles(_this42.iframe_, ["height"]);
        _this42.animate_(function() {
          setImportantStyles$1(_this42.iframe_, {
            "transform": "translateY(100%)",
            "opactiy": 1,
            "visibility": "visible"
          });
          return transition$1(_this42.iframe_, {
            "transform": "translateY(0)",
            "opacity": 1,
            "visibility": "visible"
          }, 400, "ease-out");
        });
        _this42.doc_.getWin().setTimeout(function() {
          _this42.close();
        }, (toastDurationSeconds + 1) * 1e3);
      });
    };
    _proto54.animate_ = function animate_(callback) {
      var _this43 = this;
      var wait = this.animating_ || resolvedPromise();
      return this.animating_ = wait.then(function() {
        return callback();
      }).catch(function() {
      }).then(function() {
        _this43.animating_ = null;
      });
    };
    _proto54.close = function close() {
      var _this44 = this;
      return this.animate_(function() {
        _this44.doc_.getWin().setTimeout(function() {
          _this44.doc_.getBody().removeChild(_this44.iframe_);
          return resolvedPromise();
        }, 500);
        return transition$1(_this44.iframe_, {
          "transform": "translateY(100%)",
          "opacity": 1,
          "visibility": "visible"
        }, 400, "ease-out");
      });
    };
    return Toast2;
  }();
  var PublisherEventToAnalyticsEvent = (_PublisherEventToAnal = {}, _PublisherEventToAnal[Event.IMPRESSION_PAYWALL] = AnalyticsEvent.IMPRESSION_PAYWALL, _PublisherEventToAnal[Event.IMPRESSION_AD] = AnalyticsEvent.IMPRESSION_AD, _PublisherEventToAnal[Event.IMPRESSION_OFFERS] = AnalyticsEvent.IMPRESSION_OFFERS, _PublisherEventToAnal[Event.ACTION_SUBSCRIPTIONS_LANDING_PAGE] = AnalyticsEvent.ACTION_SUBSCRIPTIONS_LANDING_PAGE, _PublisherEventToAnal[Event.ACTION_OFFER_SELECTED] = AnalyticsEvent.ACTION_OFFER_SELECTED, _PublisherEventToAnal[Event.ACTION_PAYMENT_FLOW_STARTED] = AnalyticsEvent.ACTION_PAYMENT_FLOW_STARTED, _PublisherEventToAnal[Event.ACTION_PAYMENT_COMPLETED] = AnalyticsEvent.ACTION_PAYMENT_COMPLETE, _PublisherEventToAnal[Event.EVENT_CUSTOM] = AnalyticsEvent.EVENT_CUSTOM, _PublisherEventToAnal);
  var AnalyticsEventToPublisherEvent = (_AnalyticsEventToPubl = {}, _AnalyticsEventToPubl[AnalyticsEvent.UNKNOWN] = null, _AnalyticsEventToPubl[AnalyticsEvent.IMPRESSION_PAYWALL] = Event.IMPRESSION_PAYWALL, _AnalyticsEventToPubl[AnalyticsEvent.IMPRESSION_AD] = Event.IMPRESSION_AD, _AnalyticsEventToPubl[AnalyticsEvent.IMPRESSION_OFFERS] = Event.IMPRESSION_OFFERS, _AnalyticsEventToPubl[AnalyticsEvent.IMPRESSION_SUBSCRIBE_BUTTON] = null, _AnalyticsEventToPubl[AnalyticsEvent.IMPRESSION_SMARTBOX] = null, _AnalyticsEventToPubl[AnalyticsEvent.ACTION_SUBSCRIBE] = null, _AnalyticsEventToPubl[AnalyticsEvent.ACTION_PAYMENT_COMPLETE] = Event.ACTION_PAYMENT_COMPLETED, _AnalyticsEventToPubl[AnalyticsEvent.ACTION_ACCOUNT_CREATED] = null, _AnalyticsEventToPubl[AnalyticsEvent.ACTION_ACCOUNT_ACKNOWLEDGED] = null, _AnalyticsEventToPubl[AnalyticsEvent.ACTION_SUBSCRIPTIONS_LANDING_PAGE] = Event.ACTION_SUBSCRIPTIONS_LANDING_PAGE, _AnalyticsEventToPubl[AnalyticsEvent.ACTION_PAYMENT_FLOW_STARTED] = Event.ACTION_PAYMENT_FLOW_STARTED, _AnalyticsEventToPubl[AnalyticsEvent.ACTION_OFFER_SELECTED] = Event.ACTION_OFFER_SELECTED, _AnalyticsEventToPubl[AnalyticsEvent.EVENT_PAYMENT_FAILED] = null, _AnalyticsEventToPubl[AnalyticsEvent.EVENT_CUSTOM] = Event.EVENT_CUSTOM, _AnalyticsEventToPubl);
  var ShowcaseEvents = (_ShowcaseEvents = {}, _ShowcaseEvents[ShowcaseEvent.EVENT_SHOWCASE_METER_OFFERED] = [AnalyticsEvent.EVENT_HAS_METERING_ENTITLEMENTS, AnalyticsEvent.EVENT_OFFERED_METER], _ShowcaseEvents[ShowcaseEvent.EVENT_SHOWCASE_UNLOCKED_BY_SUBSCRIPTION] = [AnalyticsEvent.EVENT_UNLOCKED_BY_SUBSCRIPTION], _ShowcaseEvents[ShowcaseEvent.EVENT_SHOWCASE_UNLOCKED_BY_METER] = [AnalyticsEvent.EVENT_HAS_METERING_ENTITLEMENTS, AnalyticsEvent.EVENT_UNLOCKED_BY_METER], _ShowcaseEvents[ShowcaseEvent.EVENT_SHOWCASE_UNLOCKED_FREE_PAGE] = [AnalyticsEvent.EVENT_UNLOCKED_FREE_PAGE], _ShowcaseEvents[ShowcaseEvent.EVENT_SHOWCASE_NO_ENTITLEMENTS_REGWALL] = [AnalyticsEvent.EVENT_NO_ENTITLEMENTS, AnalyticsEvent.IMPRESSION_REGWALL, AnalyticsEvent.IMPRESSION_SHOWCASE_REGWALL], _ShowcaseEvents[ShowcaseEvent.EVENT_SHOWCASE_NO_ENTITLEMENTS_PAYWALL] = [AnalyticsEvent.EVENT_NO_ENTITLEMENTS, AnalyticsEvent.IMPRESSION_PAYWALL], _ShowcaseEvents[ShowcaseEvent.EVENT_SHOWCASE_INELIGIBLE_PAYWALL] = [AnalyticsEvent.EVENT_INELIGIBLE_PAYWALL, AnalyticsEvent.EVENT_NO_ENTITLEMENTS], _ShowcaseEvents);
  var AnalyticsEventToEntitlementResult = (_AnalyticsEventToEnti = {}, _AnalyticsEventToEnti[AnalyticsEvent.IMPRESSION_REGWALL] = EntitlementResult.LOCKED_REGWALL, _AnalyticsEventToEnti[AnalyticsEvent.EVENT_UNLOCKED_BY_METER] = EntitlementResult.UNLOCKED_METER, _AnalyticsEventToEnti[AnalyticsEvent.EVENT_UNLOCKED_BY_SUBSCRIPTION] = EntitlementResult.UNLOCKED_SUBSCRIBER, _AnalyticsEventToEnti[AnalyticsEvent.EVENT_UNLOCKED_FREE_PAGE] = EntitlementResult.UNLOCKED_FREE, _AnalyticsEventToEnti[AnalyticsEvent.IMPRESSION_PAYWALL] = EntitlementResult.LOCKED_PAYWALL, _AnalyticsEventToEnti[AnalyticsEvent.EVENT_INELIGIBLE_PAYWALL] = EntitlementResult.INELIGIBLE_PAYWALL, _AnalyticsEventToEnti);
  var createGoogleAnalyticsEvent = function createGoogleAnalyticsEvent2(eventCategory, eventAction, eventLabel, nonInteraction) {
    return {
      eventCategory: eventCategory,
      eventAction: eventAction,
      eventLabel: eventLabel,
      nonInteraction: nonInteraction
    };
  };
  var AnalyticsEventToGoogleAnalyticsEvent = (_AnalyticsEventToGoog = {}, _AnalyticsEventToGoog[AnalyticsEvent.IMPRESSION_OFFERS] = createGoogleAnalyticsEvent("NTG paywall", "paywall modal impression", "", true), _AnalyticsEventToGoog[AnalyticsEvent.IMPRESSION_CONTRIBUTION_OFFERS] = createGoogleAnalyticsEvent("NTG membership", "offer impressions", "", true), _AnalyticsEventToGoog[AnalyticsEvent.ACTION_OFFER_SELECTED] = createGoogleAnalyticsEvent("NTG paywall", "click", "", false), _AnalyticsEventToGoog[AnalyticsEvent.ACTION_SWG_SUBSCRIPTION_MINI_PROMPT_CLICK] = createGoogleAnalyticsEvent("NTG subscription", "marketing modal click", "", false), _AnalyticsEventToGoog[AnalyticsEvent.IMPRESSION_SWG_SUBSCRIPTION_MINI_PROMPT] = createGoogleAnalyticsEvent("NTG subscription", "marketing modal impression", "", true), _AnalyticsEventToGoog[AnalyticsEvent.ACTION_SWG_CONTRIBUTION_MINI_PROMPT_CLICK] = createGoogleAnalyticsEvent("NTG membership", "marketing modal click", "", false), _AnalyticsEventToGoog[AnalyticsEvent.IMPRESSION_SWG_CONTRIBUTION_MINI_PROMPT] = createGoogleAnalyticsEvent("NTG membership", "membership modal impression", "", true), _AnalyticsEventToGoog);
  var SubscriptionSpecificAnalyticsEventToGoogleAnalyticsEvent = (_SubscriptionSpecific = {}, _SubscriptionSpecific[AnalyticsEvent.ACTION_PAYMENT_COMPLETE] = createGoogleAnalyticsEvent("NTG subscription", "submit", "success", false), _SubscriptionSpecific);
  var ContributionSpecificAnalyticsEventToGoogleAnalyticsEvent = (_ContributionSpecific = {}, _ContributionSpecific[AnalyticsEvent.ACTION_PAYMENT_COMPLETE] = createGoogleAnalyticsEvent("NTG membership", "submit", "success", false), _ContributionSpecific);
  function publisherEventToAnalyticsEvent(propensityEvent) {
    return PublisherEventToAnalyticsEvent[propensityEvent];
  }
  function analyticsEventToPublisherEvent(analyticsEvent) {
    return AnalyticsEventToPublisherEvent[analyticsEvent];
  }
  function showcaseEventToAnalyticsEvents(event) {
    return ShowcaseEvents[event] || [];
  }
  function analyticsEventToEntitlementResult(event) {
    return AnalyticsEventToEntitlementResult[event];
  }
  function analyticsEventToGoogleAnalyticsEvent(event, subscriptionFlow) {
    var gaEvent = null;
    if (subscriptionFlow) {
      if (subscriptionFlow == SubscriptionFlows.SUBSCRIBE) {
        gaEvent = SubscriptionSpecificAnalyticsEventToGoogleAnalyticsEvent[event];
      } else if (subscriptionFlow == SubscriptionFlows.CONTRIBUTE) {
        gaEvent = ContributionSpecificAnalyticsEventToGoogleAnalyticsEvent[event];
      }
    }
    return gaEvent || AnalyticsEventToGoogleAnalyticsEvent[event];
  }
  function queryStringHasFreshGaaParams(queryString, allowAllAccessTypes) {
    if (allowAllAccessTypes === void 0) {
      allowAllAccessTypes = false;
    }
    var params = parseQueryString2(queryString);
    if (!params["gaa_at"] || !params["gaa_n"] || !params["gaa_sig"] || !params["gaa_ts"]) {
      return false;
    }
    if (!allowAllAccessTypes) {
      var noAccess = params["gaa_at"] === "na";
      if (noAccess) {
        return false;
      }
    }
    var expirationTimestamp = parseInt(params["gaa_ts"], 16);
    var currentTimestamp = Date.now() / 1e3;
    if (expirationTimestamp < currentTimestamp) {
      return false;
    }
    return true;
  }
  var SERVICE_ID = "subscribe.google.com";
  var TOAST_STORAGE_KEY = "toast";
  var ENTS_STORAGE_KEY = "ents";
  var IS_READY_TO_PAY_STORAGE_KEY = "isreadytopay";
  var EntitlementsManager = /* @__PURE__ */ function() {
    function EntitlementsManager2(win, pageConfig, fetcher, deps) {
      this.win_ = win;
      this.pageConfig_ = pageConfig;
      this.publicationId_ = this.pageConfig_.getPublicationId();
      this.fetcher_ = fetcher;
      this.deps_ = deps;
      this.jwtHelper_ = new JwtHelper();
      this.responsePromise_ = null;
      this.positiveRetries_ = 0;
      this.blockNextNotification_ = false;
      this.blockNextToast_ = false;
      this.encodedParams_ = null;
      this.storage_ = deps.storage();
      this.analyticsService_ = deps.analytics();
      this.config_ = deps.config();
      this.entitlementsPostPromise = null;
      this.deps_.eventManager().registerEventListener(this.possiblyPingbackOnClientEvent_.bind(this));
    }
    var _proto55 = EntitlementsManager2.prototype;
    _proto55.reset = function reset(expectPositive) {
      this.responsePromise_ = null;
      this.positiveRetries_ = Math.max(this.positiveRetries_, expectPositive ? 3 : 0);
      if (expectPositive) {
        this.storage_.remove(ENTS_STORAGE_KEY);
        this.storage_.remove(IS_READY_TO_PAY_STORAGE_KEY);
      }
    };
    _proto55.clear = function clear() {
      this.responsePromise_ = null;
      this.positiveRetries_ = 0;
      this.unblockNextNotification();
      this.storage_.remove(ENTS_STORAGE_KEY);
      this.storage_.remove(TOAST_STORAGE_KEY);
      this.storage_.remove(IS_READY_TO_PAY_STORAGE_KEY);
    };
    _proto55.getEntitlements = function getEntitlements(params) {
      var _this45 = this;
      if (typeof params === "string") {
        if (Date.now() > 1600289016959) {
          warn("[swg.js:getEntitlements]: If present, the first param of getEntitlements() should be an object of type GetEntitlementsParamsExternalDef.");
        }
        params = {
          encryption: {
            encryptedDocumentKey: params
          }
        };
      }
      if (!this.responsePromise_) {
        this.responsePromise_ = this.getEntitlementsFlow_(params);
      }
      return this.responsePromise_.then(function(response) {
        if (response.isReadyToPay != null) {
          _this45.analyticsService_.setReadyToPay(response.isReadyToPay);
        }
        return response;
      });
    };
    _proto55.pushNextEntitlements = function pushNextEntitlements(raw, isReadyToPay) {
      var entitlements = this.getValidJwtEntitlements_(raw, true, isReadyToPay);
      if (entitlements && entitlements.enablesThis()) {
        this.storage_.set(ENTS_STORAGE_KEY, raw);
        return true;
      }
      return false;
    };
    _proto55.getGaaToken_ = function getGaaToken_() {
      return parseQueryString2(this.win_.location.search)["gaa_n"];
    };
    _proto55.consumeMeter_ = function consumeMeter_(entitlements) {
      var entitlement = entitlements.getEntitlementForThis();
      if (!entitlement || entitlement.source !== GOOGLE_METERING_SOURCE) {
        return;
      }
      if (!queryStringHasFreshGaaParams(this.win_.location.search)) {
        return;
      }
      this.deps_.eventManager().logSwgEvent(AnalyticsEvent.EVENT_UNLOCKED_BY_METER, false);
      var token = this.getGaaToken_();
      var jwt = new EntitlementJwt();
      jwt.setSource(entitlement.source);
      jwt.setJwt(entitlement.subscriptionToken);
      return this.postEntitlementsRequest_(jwt, EntitlementResult.UNLOCKED_METER, EntitlementSource.GOOGLE_SHOWCASE_METERING_SERVICE, token);
    };
    _proto55.possiblyPingbackOnClientEvent_ = function possiblyPingbackOnClientEvent_(event) {
      var _event$additionalPara;
      if (!queryStringHasFreshGaaParams(this.win_.location.search, true)) {
        return;
      }
      var result = analyticsEventToEntitlementResult(event.eventType);
      if (!result) {
        return;
      }
      var source = null;
      switch (event.eventOriginator) {
        case EventOriginator.SHOWCASE_CLIENT:
          source = EntitlementSource.PUBLISHER_ENTITLEMENT;
          break;
        case EventOriginator.SWG_CLIENT:
          if (result == EntitlementResult.UNLOCKED_METER) {
            return;
          }
          source = EntitlementSource.GOOGLE_SUBSCRIBER_ENTITLEMENT;
          break;
        default:
          return;
      }
      var token = this.getGaaToken_();
      var isUserRegistered = event == null ? void 0 : (_event$additionalPara = event.additionalParameters) == null ? void 0 : _event$additionalPara.getIsUserRegistered == null ? void 0 : _event$additionalPara.getIsUserRegistered();
      this.postEntitlementsRequest_(new EntitlementJwt(), result, source, token, isUserRegistered);
    };
    _proto55.postEntitlementsRequest_ = function postEntitlementsRequest_(usedEntitlement, entitlementResult, entitlementSource, optionalToken, optionalIsUserRegistered) {
      var _this46 = this;
      if (optionalToken === void 0) {
        optionalToken = "";
      }
      if (optionalIsUserRegistered === void 0) {
        optionalIsUserRegistered = null;
      }
      var message = new EntitlementsRequest();
      message.setUsedEntitlement(usedEntitlement);
      message.setClientEventTime(toTimestamp(Date.now()));
      message.setEntitlementResult(entitlementResult);
      message.setEntitlementSource(entitlementSource);
      message.setToken(optionalToken);
      if (typeof optionalIsUserRegistered === "boolean") {
        message.setIsUserRegistered(optionalIsUserRegistered);
      }
      var url = "/publication/" + encodeURIComponent(this.publicationId_) + "/entitlements";
      url = addDevModeParamsToUrl(this.win_.location, url);
      var encodedParamsPromise = this.encodedParams_ ? resolvedPromise() : hash(getCanonicalUrl(this.deps_.doc())).then(function(hashedCanonicalUrl) {
        var encodableParams = {
          metering: {
            resource: {
              hashedCanonicalUrl: hashedCanonicalUrl
            }
          }
        };
        _this46.encodedParams_ = base64UrlEncodeFromBytes(utf8EncodeSync(JSON.stringify(encodableParams)));
      });
      this.entitlementsPostPromise = encodedParamsPromise.then(function() {
        url = addQueryParam(url, "encodedParams", _this46.encodedParams_);
        return _this46.fetcher_.sendPost(serviceUrl(url), message);
      });
    };
    _proto55.getEntitlementsFlow_ = function getEntitlementsFlow_(params) {
      var _this47 = this;
      return this.fetchEntitlementsWithCaching_(params).then(function(entitlements) {
        _this47.onEntitlementsFetched_(entitlements);
        return entitlements;
      });
    };
    _proto55.fetchEntitlementsWithCaching_ = function fetchEntitlementsWithCaching_(params) {
      var _this48 = this;
      return Promise.all([this.storage_.get(ENTS_STORAGE_KEY), this.storage_.get(IS_READY_TO_PAY_STORAGE_KEY)]).then(function(cachedValues) {
        var raw = cachedValues[0];
        var irtp = cachedValues[1];
        var needsDecryption = !!(params && params.encryption);
        if (raw && !needsDecryption) {
          var cached = _this48.getValidJwtEntitlements_(raw, true, irtpStringToBoolean(irtp));
          if (cached && cached.enablesThis()) {
            _this48.positiveRetries_ = 0;
            return cached;
          }
        }
        return _this48.fetchEntitlements_(params).then(function(ents) {
          if (ents && ents.enablesThisWithCacheableEntitlements() && ents.raw) {
            _this48.storage_.set(ENTS_STORAGE_KEY, ents.raw);
          }
          return ents;
        });
      });
    };
    _proto55.fetchEntitlements_ = function fetchEntitlements_(params) {
      var _this49 = this;
      var positiveRetries = this.positiveRetries_;
      this.positiveRetries_ = 0;
      var attempt = function attempt2() {
        positiveRetries--;
        return _this49.fetch_(params).then(function(entitlements) {
          if (entitlements.enablesThis() || positiveRetries <= 0) {
            return entitlements;
          }
          return new Promise(function(resolve) {
            _this49.win_.setTimeout(function() {
              resolve(attempt2());
            }, 550);
          });
        });
      };
      return attempt();
    };
    _proto55.setToastShown = function setToastShown(value) {
      this.storage_.set(TOAST_STORAGE_KEY, value ? "1" : "0");
    };
    _proto55.blockNextNotification = function blockNextNotification() {
      this.blockNextNotification_ = true;
    };
    _proto55.blockNextToast = function blockNextToast() {
      this.blockNextToast_ = true;
    };
    _proto55.unblockNextNotification = function unblockNextNotification() {
      this.blockNextNotification_ = false;
    };
    _proto55.parseEntitlements = function parseEntitlements2(json) {
      var isReadyToPay = json["isReadyToPay"];
      if (isReadyToPay == null) {
        this.storage_.remove(IS_READY_TO_PAY_STORAGE_KEY);
      } else {
        this.storage_.set(IS_READY_TO_PAY_STORAGE_KEY, String(isReadyToPay));
      }
      var signedData = json["signedEntitlements"];
      var decryptedDocumentKey = json["decryptedDocumentKey"];
      var swgUserToken = json["swgUserToken"];
      if (signedData) {
        var entitlements = this.getValidJwtEntitlements_(signedData, false, isReadyToPay, decryptedDocumentKey);
        if (entitlements) {
          this.saveSwgUserToken_(swgUserToken);
          return entitlements;
        }
      } else {
        var plainEntitlements = json["entitlements"];
        if (plainEntitlements) {
          this.saveSwgUserToken_(swgUserToken);
          return this.createEntitlements_("", plainEntitlements, isReadyToPay, decryptedDocumentKey);
        }
      }
      return this.createEntitlements_("", [], isReadyToPay);
    };
    _proto55.saveSwgUserToken_ = function saveSwgUserToken_(swgUserToken) {
      if (swgUserToken) {
        this.storage_.set(Constants$1.USER_TOKEN, swgUserToken, true);
      }
    };
    _proto55.getValidJwtEntitlements_ = function getValidJwtEntitlements_(raw, requireNonExpired, isReadyToPay, decryptedDocumentKey) {
      try {
        var jwt = this.jwtHelper_.decode(raw);
        if (requireNonExpired) {
          var now = Date.now();
          var exp = jwt["exp"];
          if (parseFloat(exp) * 1e3 < now) {
            return null;
          }
        }
        var entitlementsClaim = jwt["entitlements"];
        return entitlementsClaim && this.createEntitlements_(raw, entitlementsClaim, isReadyToPay, decryptedDocumentKey) || null;
      } catch (e) {
        this.win_.setTimeout(function() {
          throw e;
        });
      }
      return null;
    };
    _proto55.createEntitlements_ = function createEntitlements_(raw, json, isReadyToPay, decryptedDocumentKey) {
      return new Entitlements(SERVICE_ID, raw, Entitlement.parseListFromJson(json), this.pageConfig_.getProductId(), this.ack_.bind(this), this.consume_.bind(this), isReadyToPay, decryptedDocumentKey);
    };
    _proto55.onEntitlementsFetched_ = function onEntitlementsFetched_(entitlements) {
      var blockNotification = this.blockNextNotification_;
      this.blockNextNotification_ = false;
      var blockToast = this.blockNextToast_;
      this.blockNextToast_ = false;
      if (blockNotification) {
        return;
      }
      this.deps_.callbacks().triggerEntitlementsResponse(Promise.resolve(entitlements));
      var entitlement = entitlements.getEntitlementForThis();
      if (!entitlement) {
        this.deps_.eventManager().logSwgEvent(AnalyticsEvent.EVENT_NO_ENTITLEMENTS, false);
        return;
      }
      if (blockToast) {
        return;
      }
      this.maybeShowToast_(entitlement);
    };
    _proto55.maybeShowToast_ = function maybeShowToast_(entitlement) {
      var _this50 = this;
      if (entitlement.source === GOOGLE_METERING_SOURCE) {
        this.deps_.eventManager().logSwgEvent(AnalyticsEvent.EVENT_HAS_METERING_ENTITLEMENTS, false);
        return resolvedPromise();
      }
      var params = new EventParams();
      params.setIsUserRegistered(true);
      var eventType = entitlement.source === PRIVILEGED_SOURCE ? AnalyticsEvent.EVENT_UNLOCKED_FOR_CRAWLER : AnalyticsEvent.EVENT_UNLOCKED_BY_SUBSCRIPTION;
      this.deps_.eventManager().logSwgEvent(eventType, false, params);
      return this.storage_.get(TOAST_STORAGE_KEY).then(function(value) {
        var toastWasShown = value === "1";
        if (toastWasShown) {
          return;
        }
        var source = entitlement.source || GOOGLE_METERING_SOURCE;
        return new Toast(_this50.deps_, feUrl("/toastiframe"), feArgs({
          "publicationId": _this50.publicationId_,
          "source": source
        })).open();
      });
    };
    _proto55.ack_ = function ack_(entitlements) {
      if (entitlements.getEntitlementForThis()) {
        this.setToastShown(true);
      }
    };
    _proto55.consume_ = function consume_(entitlements, onCloseDialog) {
      var _this51 = this;
      if (entitlements.enablesThisWithGoogleMetering()) {
        var onConsumeCallback = function onConsumeCallback2() {
          if (onCloseDialog) {
            onCloseDialog();
          }
          _this51.consumeMeter_(entitlements);
        };
        var showToast = this.getShowToastFromEntitlements_(entitlements);
        if (showToast === false) {
          return onConsumeCallback();
        }
        var meterToastApi = new MeterToastApi(this.deps_);
        meterToastApi.setOnConsumeCallback(onConsumeCallback);
        return meterToastApi.start();
      }
    };
    _proto55.getShowToastFromEntitlements_ = function getShowToastFromEntitlements_(entitlements) {
      var entitlement = entitlements.getEntitlementForThis();
      if (!entitlement || entitlement.source !== GOOGLE_METERING_SOURCE) {
        return;
      }
      try {
        var meteringJwt = this.jwtHelper_.decode(entitlement.subscriptionToken);
        return meteringJwt["metering"] && meteringJwt["metering"]["showToast"];
      } catch (e) {
        return;
      }
    };
    _proto55.fetch_ = function fetch_(params) {
      var _params$encryption, _this52 = this;
      var swgUserTokenParam = params == null ? void 0 : (_params$encryption = params.encryption) == null ? void 0 : _params$encryption.swgUserToken;
      var swgUserTokenPromise = swgUserTokenParam ? Promise.resolve(swgUserTokenParam) : this.storage_.get(Constants$1.USER_TOKEN, true);
      var url = "/publication/" + encodeURIComponent(this.publicationId_) + "/entitlements";
      return Promise.all([hash(getCanonicalUrl(this.deps_.doc())), swgUserTokenPromise]).then(function(values) {
        var _params$metering;
        var hashedCanonicalUrl = values[0];
        var swgUserToken = values[1];
        url = addDevModeParamsToUrl(_this52.win_.location, url);
        if (params != null && params.encryption) {
          url = addQueryParam(url, "crypt", params.encryption.encryptedDocumentKey);
        }
        if (swgUserToken) {
          url = addQueryParam(url, "sut", swgUserToken);
        }
        if (_this52.publicationId_ && params != null && (_params$metering = params.metering) != null && _params$metering.state && queryStringHasFreshGaaParams(_this52.win_.location.search)) {
          var meteringStateId = params.metering.state.id;
          if (typeof meteringStateId === "string" && meteringStateId.length > 0) {
            var collectAttributes = function collectAttributes2(_ref2) {
              var attributes = _ref2.attributes, category = _ref2.category;
              if (!attributes) {
                return;
              }
              var attributeNames = Object.keys(attributes);
              attributeNames.forEach(function(attributeName) {
                var name = category + "_" + attributeName;
                var timestamp = Number(attributes[attributeName].timestamp);
                var timestampIsTooFarInTheFuture = timestamp > Date.now() / 1e3 * 2;
                if (!timestamp || timestampIsTooFarInTheFuture) {
                  warn('SwG Entitlements: Please specify a Unix timestamp, in seconds, for the "' + attributeName + '" ' + category + " attribute. The timestamp you passed (" + attributes[attributeName].timestamp + ") looks invalid.");
                }
                encodableParams.metering.state.attributes.push({
                  name: name,
                  timestamp: timestamp
                });
              });
            };
            var encodableParams = {
              metering: {
                clientTypes: [MeterClientTypes.LICENSED_BY_GOOGLE],
                owner: _this52.publicationId_,
                resource: {
                  hashedCanonicalUrl: hashedCanonicalUrl
                },
                state: {
                  id: meteringStateId,
                  attributes: []
                },
                token: _this52.getGaaToken_()
              }
            };
            collectAttributes({
              attributes: params.metering.state.standardAttributes,
              category: "standard"
            });
            collectAttributes({
              attributes: params.metering.state.customAttributes,
              category: "custom"
            });
            _this52.encodedParams_ = base64UrlEncodeFromBytes(utf8EncodeSync(JSON.stringify(encodableParams)));
            url = addQueryParam(url, "encodedParams", _this52.encodedParams_);
          } else {
            warn("SwG Entitlements: Please specify a metering state ID string, ideally a hash to avoid PII.");
          }
        }
        return serviceUrl(url);
      }).then(function(url2) {
        _this52.deps_.eventManager().logSwgEvent(AnalyticsEvent.ACTION_GET_ENTITLEMENTS, false);
        return _this52.fetcher_.fetchCredentialedJson(url2);
      }).then(function(json) {
        if (json.errorMessages && json.errorMessages.length > 0) {
          json.errorMessages.forEach(function(errorMessage) {
            warn("SwG Entitlements: " + errorMessage);
          });
        }
        return _this52.parseEntitlements(json);
      });
    };
    return EntitlementsManager2;
  }();
  function addDevModeParamsToUrl(location, url) {
    var hashParams = parseQueryString2(location.hash);
    var devModeScenario = hashParams["swg.deventitlement"];
    if (devModeScenario === void 0) {
      return url;
    }
    return addQueryParam(url, "devEnt", devModeScenario);
  }
  function irtpStringToBoolean(value) {
    switch (value) {
      case "true":
        return true;
      case "false":
        return false;
      default:
        return void 0;
    }
  }
  var allowedMethods_ = ["GET", "POST"];
  var allowedFetchTypes_ = {
    document: 1,
    text: 2
  };
  var Xhr = /* @__PURE__ */ function() {
    function Xhr2(win) {
      this.win = win;
    }
    var _proto56 = Xhr2.prototype;
    _proto56.fetch_ = function fetch_(input, init) {
      assert2(typeof input == "string", "Only URL supported: %s", input);
      var creds = init.credentials;
      assert2(creds === void 0 || creds == "include" || creds == "omit", "Only credentials=include|omit support: %s", creds);
      if (init.responseType == "document") {
        return fetchPolyfill(input, init);
      }
      return (this.win.fetch || fetchPolyfill).apply(null, arguments);
    };
    _proto56.fetch = function fetch(input, init) {
      init = setupInit(init);
      return this.fetch_(input, init).catch(function(reason) {
        var targetOrigin = parseUrl(input).origin;
        throw new Error("XHR Failed fetching (" + targetOrigin + "/...): (Note: a CORS error above may indicate that this domain is not configured for Subscribe with Google)", reason && reason.message);
      }).then(function(response) {
        return assertSuccess(response);
      });
    };
    return Xhr2;
  }();
  function normalizeMethod_(method) {
    if (method === void 0) {
      return "GET";
    }
    method = method.toUpperCase();
    assert2(allowedMethods_.includes(method), "Only one of %s is currently allowed. Got %s", allowedMethods_.join(", "), method);
    return method;
  }
  function setupInit(init, accept) {
    init = init || {};
    init.method = normalizeMethod_(init.method);
    init.headers = init.headers || {};
    if (accept) {
      init.headers["Accept"] = accept;
    }
    return init;
  }
  function fetchPolyfill(input, init) {
    return new Promise(function(resolve, reject) {
      var xhr = createXhrRequest(init.method || "GET", input);
      if (init.credentials == "include") {
        xhr.withCredentials = true;
      }
      if (init.responseType in allowedFetchTypes_) {
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
          reject(new Error("Unknown HTTP status " + xhr.status));
          return;
        }
        if (xhr.readyState == 4) {
          resolve(new FetchResponse(xhr));
        }
      };
      xhr.onerror = function() {
        reject(new Error("Network failure"));
      };
      xhr.onabort = function() {
        reject(new Error("Request aborted"));
      };
      if (init.method == "POST") {
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
      throw new Error("CORS is not supported");
    }
    return xhr;
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
      var err = new Error("HTTP error " + status);
      err.retriable = isRetriable(status);
      err.response = response;
      throw err;
    });
  }
  var FetchResponse = /* @__PURE__ */ function() {
    function FetchResponse2(xhr) {
      this.xhr_ = xhr;
      this.status = this.xhr_.status;
      this.ok = this.status >= 200 && this.status < 300;
      this.headers = new FetchResponseHeaders(xhr);
      this.bodyUsed = false;
      this.body = null;
    }
    var _proto57 = FetchResponse2.prototype;
    _proto57.clone = function clone() {
      assert2(!this.bodyUsed, "Body already used");
      return new FetchResponse2(this.xhr_);
    };
    _proto57.drainText_ = function drainText_() {
      assert2(!this.bodyUsed, "Body already used");
      this.bodyUsed = true;
      return Promise.resolve(this.xhr_.responseText);
    };
    _proto57.text = function text() {
      return this.drainText_();
    };
    _proto57.json = function json() {
      return this.drainText_().then(parseJson2);
    };
    _proto57.arrayBuffer = function arrayBuffer() {
      return this.drainText_().then(utf8EncodeSync);
    };
    return FetchResponse2;
  }();
  var FetchResponseHeaders = /* @__PURE__ */ function() {
    function FetchResponseHeaders2(xhr) {
      this.xhr_ = xhr;
    }
    var _proto58 = FetchResponseHeaders2.prototype;
    _proto58.get = function get(name) {
      return this.xhr_.getResponseHeader(name);
    };
    _proto58.has = function has(name) {
      return this.xhr_.getResponseHeader(name) != null;
    };
    return FetchResponseHeaders2;
  }();
  var XhrFetcher = /* @__PURE__ */ function() {
    function XhrFetcher2(win) {
      this.xhr_ = new Xhr(win);
    }
    var _proto60 = XhrFetcher2.prototype;
    _proto60.fetchCredentialedJson = function fetchCredentialedJson(url) {
      var init = {
        method: "GET",
        headers: {
          "Accept": "text/plain, application/json"
        },
        credentials: "include"
      };
      return this.fetch(url, init).then(function(response) {
        return response.text().then(function(text) {
          var cleanedText = text.replace(/^(\)\]\}'\n)/, "");
          return parseJson2(cleanedText);
        });
      });
    };
    _proto60.sendPost = function sendPost(url, message) {
      var init = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        credentials: "include",
        body: "f.req=" + serializeProtoMessageForUrl(message)
      };
      return this.fetch(url, init).then(function(response) {
        return response && response.json() || {};
      });
    };
    _proto60.fetch = function fetch(url, init) {
      return this.xhr_.fetch(url, init);
    };
    _proto60.sendBeacon = function sendBeacon(url, data) {
      if (navigator.sendBeacon) {
        var headers = {
          type: "application/x-www-form-urlencoded;charset=UTF-8"
        };
        var blob = new Blob(["f.req=" + serializeProtoMessageForUrl(data)], headers);
        navigator.sendBeacon(url, blob);
        return;
      }
      this.sendPost(url, data);
    };
    return XhrFetcher2;
  }();
  var GoogleAnalyticsEventListener = /* @__PURE__ */ function() {
    function GoogleAnalyticsEventListener2(deps) {
      this.win_ = deps.win();
      this.eventManager_ = deps.eventManager();
    }
    var _proto61 = GoogleAnalyticsEventListener2.prototype;
    _proto61.start = function start() {
      this.eventManager_.registerEventListener(this.handleClientEvent_.bind(this));
    };
    _proto61.handleClientEvent_ = function handleClientEvent_(event) {
      if (typeof this.win_.ga != "function") {
        return;
      }
      var subscriptionFlow = "";
      if (event.additionalParameters) {
        subscriptionFlow = event.additionalParameters.subscriptionFlow || event.additionalParameters.getSubscriptionFlow();
      }
      var gaEvent = analyticsEventToGoogleAnalyticsEvent(event.eventType, subscriptionFlow);
      if (gaEvent) {
        this.win_.ga("send", "event", gaEvent);
      }
    };
    return GoogleAnalyticsEventListener2;
  }();
  var JsError = /* @__PURE__ */ function() {
    function JsError2(doc) {
      this.doc_ = doc;
      this.microTask_ = resolvedPromise();
    }
    var _proto62 = JsError2.prototype;
    _proto62.error = function error(var_args) {
      var _this53 = this;
      var args = Array.prototype.slice.call(arguments, 0);
      return this.microTask_.then(function() {
        var error2 = createErrorVargs.apply(null, args);
        if (error2.reported) {
          return;
        }
        var img = _this53.doc_.getWin().document.createElement("img");
        img.src = "https://news.google.com/_/SubscribewithgoogleClientUi/jserror?error=" + encodeURIComponent(String(error2)) + "&script=" + encodeURIComponent("https://news.google.com/swg/js/v1/swg.js") + "&line=" + (error2.lineNumber || 1) + "&trace=" + encodeURIComponent(error2.stack);
        error2.reported = true;
      });
    };
    return JsError2;
  }();
  function createErrorVargs(var_args) {
    var error = null;
    var message = "";
    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (arg instanceof Error && !error) {
        error = duplicateErrorIfNecessary2(arg);
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
  function duplicateErrorIfNecessary2(error) {
    var messageProperty = Object.getOwnPropertyDescriptor(error, "message");
    if (messageProperty && messageProperty.writable) {
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
  var LINK_REQUEST_ID = "swg-link";
  var LinkbackFlow = /* @__PURE__ */ function() {
    function LinkbackFlow2(deps) {
      this.deps_ = deps;
      this.activityPorts_ = deps.activities();
      this.pageConfig_ = deps.pageConfig();
      this.dialogManager_ = deps.dialogManager();
    }
    var _proto63 = LinkbackFlow2.prototype;
    _proto63.start = function start(params) {
      if (params === void 0) {
        params = {};
      }
      this.deps_.callbacks().triggerFlowStarted(SubscriptionFlows.LINK_ACCOUNT);
      var forceRedirect = this.deps_.config().windowOpenMode == WindowOpenMode.REDIRECT;
      var args = params.ampReaderId ? feArgs({
        "publicationId": this.pageConfig_.getPublicationId(),
        "ampReaderId": params.ampReaderId
      }) : feArgs({
        "publicationId": this.pageConfig_.getPublicationId()
      });
      var opener = this.activityPorts_.open(LINK_REQUEST_ID, feUrl("/linkbackstart"), forceRedirect ? "_top" : "_blank", args, {});
      this.deps_.eventManager().logSwgEvent(AnalyticsEvent.IMPRESSION_LINK);
      this.dialogManager_.popupOpened(opener && opener.targetWin);
      return resolvedPromise();
    };
    return LinkbackFlow2;
  }();
  var LinkCompleteFlow = /* @__PURE__ */ function() {
    LinkCompleteFlow2.configurePending = function configurePending(deps) {
      function handler(port) {
        deps.entitlementsManager().blockNextNotification();
        deps.callbacks().triggerLinkProgress();
        deps.dialogManager().popupClosed();
        var promise = acceptPortResultData(port, feOrigin(), false, false);
        return promise.then(function(response) {
          deps.eventManager().logSwgEvent(AnalyticsEvent.ACTION_LINK_CONTINUE, true);
          var flow = new LinkCompleteFlow2(deps, response);
          flow.start();
        }, function(reason) {
          if (isCancelError(reason)) {
            deps.eventManager().logSwgEvent(AnalyticsEvent.ACTION_LINK_CANCEL, true);
            deps.callbacks().triggerFlowCanceled(SubscriptionFlows.LINK_ACCOUNT);
          } else {
            deps.eventManager().logSwgEvent(AnalyticsEvent.ACTION_LINK_CONTINUE, true);
          }
        });
      }
      deps.activities().onResult(LINK_REQUEST_ID, handler);
    };
    function LinkCompleteFlow2(deps, response) {
      var _this54 = this;
      this.deps_ = deps;
      this.win_ = deps.win();
      this.clientConfigManager_ = deps.clientConfigManager();
      this.activityPorts_ = deps.activities();
      this.dialogManager_ = deps.dialogManager();
      this.entitlementsManager_ = deps.entitlementsManager();
      this.callbacks_ = deps.callbacks();
      var index = response && response["index"] || "0";
      this.activityIframeView_ = null;
      this.activityIframeViewPromise_ = this.clientConfigManager_.getClientConfig().then(function(clientConfig) {
        return new ActivityIframeView(_this54.win_, _this54.activityPorts_, feUrl("/linkconfirmiframe", {}, clientConfig.usePrefixedHostPath, "u/" + index), feArgs({
          "productId": deps.pageConfig().getProductId(),
          "publicationId": deps.pageConfig().getPublicationId()
        }), true);
      });
      this.completeResolver_ = null;
      this.completePromise_ = new Promise(function(resolve) {
        _this54.completeResolver_ = resolve;
      });
    }
    var _proto64 = LinkCompleteFlow2.prototype;
    _proto64.start = function start() {
      var _this55 = this;
      return this.activityIframeViewPromise_.then(function(activityIframeView) {
        _this55.activityIframeView_ = activityIframeView;
        var promise = _this55.activityIframeView_.acceptResultAndVerify(feOrigin(), true, true);
        promise.then(function(response) {
          _this55.complete_(response);
        }).catch(function(reason) {
          setTimeout(function() {
            throw reason;
          });
        }).then(function() {
          _this55.dialogManager_.completeView(_this55.activityIframeView_);
        });
        _this55.deps_.eventManager().logSwgEvent(AnalyticsEvent.EVENT_GOOGLE_UPDATED, true);
        _this55.deps_.eventManager().logSwgEvent(AnalyticsEvent.IMPRESSION_GOOGLE_UPDATED, true);
        return _this55.dialogManager_.openView(_this55.activityIframeView_);
      });
    };
    _proto64.complete_ = function complete_(response) {
      this.deps_.eventManager().logSwgEvent(AnalyticsEvent.ACTION_GOOGLE_UPDATED_CLOSE, true);
      this.callbacks_.triggerLinkComplete();
      this.callbacks_.resetLinkProgress();
      this.entitlementsManager_.setToastShown(true);
      this.entitlementsManager_.unblockNextNotification();
      this.entitlementsManager_.reset(response && response["success"] || false);
      if (response && response["entitlements"]) {
        this.entitlementsManager_.pushNextEntitlements(response["entitlements"]);
      }
      this.completeResolver_();
    };
    _proto64.whenComplete = function whenComplete() {
      return this.completePromise_;
    };
    return LinkCompleteFlow2;
  }();
  var LinkSaveFlow = /* @__PURE__ */ function() {
    function LinkSaveFlow2(deps, callback) {
      this.win_ = deps.win();
      this.deps_ = deps;
      this.activityPorts_ = deps.activities();
      this.dialogManager_ = deps.dialogManager();
      this.callback_ = callback;
      this.requestPromise_ = null;
      this.openPromise_ = null;
      this.activityIframeView_ = null;
    }
    var _proto65 = LinkSaveFlow2.prototype;
    _proto65.getRequestPromise = function getRequestPromise() {
      return this.requestPromise_;
    };
    _proto65.complete_ = function complete_() {
      this.dialogManager_.completeView(this.activityIframeView_);
    };
    _proto65.handleLinkSaveResponse_ = function handleLinkSaveResponse_(result) {
      var _this56 = this;
      this.complete_();
      var startPromise;
      var linkConfirm = null;
      if (result["linked"]) {
        this.dialogManager_.popupClosed();
        this.deps_.callbacks().triggerFlowStarted(SubscriptionFlows.LINK_ACCOUNT);
        linkConfirm = new LinkCompleteFlow(this.deps_, result);
        startPromise = linkConfirm.start();
      } else {
        startPromise = Promise.reject(createCancelError(this.win_, "not linked"));
      }
      var completePromise = startPromise.then(function() {
        _this56.deps_.callbacks().triggerLinkProgress();
        return linkConfirm.whenComplete();
      });
      return completePromise.then(function() {
        return true;
      });
    };
    _proto65.sendLinkSaveToken_ = function sendLinkSaveToken_(response) {
      var _this57 = this;
      if (!response || !response.getRequested()) {
        return;
      }
      this.requestPromise_ = new Promise(function(resolve) {
        return resolve(_this57.callback_());
      }).then(function(request) {
        var saveRequest = new LinkSaveTokenRequest();
        if (request && request.token) {
          if (request.authCode) {
            throw new Error("Both authCode and token are available");
          } else {
            saveRequest.setToken(request.token);
          }
        } else if (request && request.authCode) {
          saveRequest.setAuthCode(request.authCode);
        } else {
          throw new Error("Neither token or authCode is available");
        }
        _this57.activityIframeView_.execute(saveRequest);
        return request;
      }).catch(function(reason) {
        _this57.complete_();
        throw reason;
      });
    };
    _proto65.start = function start() {
      var _this58 = this;
      var iframeArgs = this.activityPorts_.addDefaultArguments({
        "isClosable": true
      });
      this.activityIframeView_ = new ActivityIframeView(this.win_, this.activityPorts_, feUrl("/linksaveiframe"), iframeArgs, false, true);
      this.activityIframeView_.on(LinkingInfoResponse, this.sendLinkSaveToken_.bind(this));
      this.openPromise_ = this.dialogManager_.openView(this.activityIframeView_, true);
      this.deps_.eventManager().logSwgEvent(AnalyticsEvent.IMPRESSION_SAVE_SUBSCR_TO_GOOGLE);
      return this.activityIframeView_.acceptResultAndVerify(feOrigin(), true, true).then(function(result) {
        return _this58.handleLinkSaveResponse_(result);
      }).catch(function(reason) {
        _this58.complete_();
        if (isCancelError(reason)) {
          _this58.deps_.eventManager().logSwgEvent(AnalyticsEvent.ACTION_SAVE_SUBSCR_TO_GOOGLE_CANCEL, true);
          _this58.deps_.callbacks().triggerFlowCanceled(SubscriptionFlows.LINK_ACCOUNT);
          return false;
        }
        throw reason;
      });
    };
    return LinkSaveFlow2;
  }();
  var Logger = /* @__PURE__ */ function() {
    function Logger2(deps) {
      this.eventManager_ = deps.eventManager();
    }
    var _proto66 = Logger2.prototype;
    _proto66.sendSubscriptionState = function sendSubscriptionState(state, jsonProducts) {
      if (!isEnumValue2(SubscriptionState, state)) {
        throw new Error("Invalid subscription state provided");
      }
      if ((SubscriptionState.SUBSCRIBER == state || SubscriptionState.PAST_SUBSCRIBER == state) && !jsonProducts) {
        throw new Error("Entitlements must be provided for users with active or expired subscriptions");
      }
      if (jsonProducts && !isObject2(jsonProducts)) {
        throw new Error("Entitlements must be an Object");
      }
      var productsOrSkus = null;
      if (jsonProducts) {
        productsOrSkus = JSON.stringify(jsonProducts);
      }
      this.eventManager_.logEvent({
        eventType: AnalyticsEvent.EVENT_SUBSCRIPTION_STATE,
        eventOriginator: EventOriginator.PUBLISHER_CLIENT,
        isFromUserAction: null,
        additionalParameters: {
          state: state,
          productsOrSkus: productsOrSkus
        }
      });
    };
    _proto66.sendEvent = function sendEvent(userEvent) {
      var data = null;
      if (!isEnumValue2(Event, userEvent.name) || !publisherEventToAnalyticsEvent(userEvent.name)) {
        throw new Error("Invalid user event provided(" + userEvent.name + ")");
      }
      if (userEvent.data) {
        if (!isObject2(userEvent.data)) {
          throw new Error("Event data must be an Object(" + userEvent.data + ")");
        } else {
          data = Object.assign({}, data, userEvent.data);
        }
      }
      if (isBoolean(userEvent.active)) {
        if (!data) {
          data = {};
        }
        Object.assign(data, {
          "is_active": userEvent.active
        });
      } else if (userEvent.active != null) {
        throw new Error("Event active must be a boolean");
      }
      this.eventManager_.logEvent({
        eventType: publisherEventToAnalyticsEvent(userEvent.name),
        eventOriginator: EventOriginator.PUBLISHER_CLIENT,
        isFromUserAction: userEvent.active,
        additionalParameters: data
      });
    };
    return Logger2;
  }();
  var LoginNotificationApi = /* @__PURE__ */ function() {
    function LoginNotificationApi2(deps) {
      this.deps_ = deps;
      this.win_ = deps.win();
      this.activityPorts_ = deps.activities();
      this.dialogManager_ = deps.dialogManager();
      this.openViewPromise_ = null;
      this.activityIframeView_ = new ActivityIframeView(this.win_, this.activityPorts_, feUrl("/loginiframe"), feArgs({
        publicationId: deps.pageConfig().getPublicationId(),
        productId: deps.pageConfig().getProductId(),
        userConsent: false
      }), true);
    }
    var _proto67 = LoginNotificationApi2.prototype;
    _proto67.start = function start() {
      var _this59 = this;
      this.deps_.callbacks().triggerFlowStarted(SubscriptionFlows.SHOW_LOGIN_NOTIFICATION);
      this.openViewPromise_ = this.dialogManager_.openView(this.activityIframeView_);
      return this.activityIframeView_.acceptResult().then(function() {
        _this59.dialogManager_.completeView(_this59.activityIframeView_);
      }, function(reason) {
        _this59.dialogManager_.completeView(_this59.activityIframeView_);
        throw reason;
      });
    };
    return LoginNotificationApi2;
  }();
  var LoginPromptApi = /* @__PURE__ */ function() {
    function LoginPromptApi2(deps) {
      this.deps_ = deps;
      this.win_ = deps.win();
      this.activityPorts_ = deps.activities();
      this.dialogManager_ = deps.dialogManager();
      this.openViewPromise_ = null;
      this.activityIframeView_ = new ActivityIframeView(this.win_, this.activityPorts_, feUrl("/loginiframe"), feArgs({
        publicationId: deps.pageConfig().getPublicationId(),
        productId: deps.pageConfig().getProductId(),
        userConsent: true
      }), true);
    }
    var _proto68 = LoginPromptApi2.prototype;
    _proto68.start = function start() {
      var _this60 = this;
      this.deps_.callbacks().triggerFlowStarted(SubscriptionFlows.SHOW_LOGIN_PROMPT);
      this.openViewPromise_ = this.dialogManager_.openView(this.activityIframeView_);
      return this.activityIframeView_.acceptResult().then(function() {
        _this60.dialogManager_.completeView(_this60.activityIframeView_);
      }, function(reason) {
        if (isCancelError(reason)) {
          _this60.deps_.callbacks().triggerFlowCanceled(SubscriptionFlows.SHOW_LOGIN_PROMPT);
        } else {
          _this60.dialogManager_.completeView(_this60.activityIframeView_);
        }
        throw reason;
      });
    };
    return LoginPromptApi2;
  }();
  var OffersApi = /* @__PURE__ */ function() {
    function OffersApi2(config, fetcher) {
      this.config_ = config;
      this.fetcher_ = fetcher;
    }
    var _proto69 = OffersApi2.prototype;
    _proto69.getOffers = function getOffers(productId) {
      if (productId === void 0) {
        productId = this.config_.getProductId();
      }
      if (!productId) {
        throw new Error("getOffers requires productId in config or arguments");
      }
      return this.fetch_(productId);
    };
    _proto69.fetch_ = function fetch_(productId) {
      var url = serviceUrl("/publication/" + encodeURIComponent(this.config_.getPublicationId()) + "/offers?label=" + encodeURIComponent(productId));
      return this.fetcher_.fetchCredentialedJson(url).then(function(json) {
        return json["offers"] || [];
      });
    };
    return OffersApi2;
  }();
  var MAX_Z_INDEX$1 = 2147483647;
  var Constants = {};
  Constants.Environment = {
    LOCAL: "LOCAL",
    PREPROD: "PREPROD",
    PRODUCTION: "PRODUCTION",
    SANDBOX: "SANDBOX",
    TEST: "TEST",
    TIN: "TIN"
  };
  Constants.PaymentMethod = {
    CARD: "CARD",
    TOKENIZED_CARD: "TOKENIZED_CARD",
    UPI: "UPI"
  };
  Constants.AuthMethod = {
    CRYPTOGRAM_3DS: "CRYPTOGRAM_3DS",
    PAN_ONLY: "PAN_ONLY"
  };
  Constants.ResponseStatus = {
    CANCELED: "CANCELED",
    DEVELOPER_ERROR: "DEVELOPER_ERROR"
  };
  Constants.TotalPriceStatus = {
    ESTIMATED: "ESTIMATED",
    FINAL: "FINAL",
    NOT_CURRENTLY_KNOWN: "NOT_CURRENTLY_KNOWN"
  };
  Constants.ButtonType = {
    SHORT: "short",
    LONG: "long"
  };
  Constants.ButtonColor = {
    DEFAULT: "default",
    BLACK: "black",
    WHITE: "white"
  };
  Constants.Id = {
    POPUP_WINDOW_CONTAINER: "popup-window-container"
  };
  Constants.STORAGE_KEY_PREFIX = "google.payments.api.storage";
  Constants.IS_READY_TO_PAY_RESULT_KEY = Constants.STORAGE_KEY_PREFIX + ".isreadytopay.result";
  Constants.UPI_CAN_MAKE_PAYMENT_CACHE_KEY = Constants.STORAGE_KEY_PREFIX + ".upi.canMakePaymentCache";
  Constants.CLASS_PREFIX = "google-payments-";
  Constants.IFRAME_ACTIVE_CONTAINER_CLASS = Constants.CLASS_PREFIX + "activeContainer";
  Constants.IFRAME_CONTAINER_CLASS = Constants.CLASS_PREFIX + "dialogContainer";
  Constants.IFRAME_STYLE_CENTER_CLASS = Constants.CLASS_PREFIX + "dialogCenter";
  Constants.IFRAME_STYLE_CLASS = Constants.CLASS_PREFIX + "dialog";
  Constants.IFRAME_STYLE = "\n." + Constants.IFRAME_STYLE_CLASS + " {\n    animation: none 0s ease 0s 1 normal none running;\n    background: none 0 0 / auto repeat scroll padding-box border-box #fff;\n    background-blend-mode: normal;\n    border: 0 none #333;\n    border-radius: 8px 8px 0 0;\n    border-collapse: separate;\n    bottom: 0;\n    box-shadow: #808080 0 3px 0 0, #808080 0 0 22px;\n    box-sizing: border-box;\n    letter-spacing: normal;\n    max-height: 100%;\n    overflow: visible;\n    position: fixed;\n    width: 100%;\n    z-index: " + MAX_Z_INDEX$1 + ";\n    -webkit-appearance: none;\n    left: 0;\n}\n@media (min-width: 480px) {\n  ." + Constants.IFRAME_STYLE_CLASS + " {\n    width: 480px !important;\n    left: -240px !important;\n    margin-left: calc(100vw - 100vw / 2) !important;\n  }\n}\n." + Constants.IFRAME_CONTAINER_CLASS + " {\n  background-color: rgba(0,0,0,0.26);\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  right: 0;\n}\n.iframeContainer {\n  -webkit-overflow-scrolling: touch;\n}\n";
  Constants.IFRAME_STYLE_CENTER = "\n." + Constants.IFRAME_STYLE_CENTER_CLASS + " {\n  animation: none 0s ease 0s 1 normal none running;\n  background-blend-mode: normal;\n  background: none 0 0 / auto repeat scroll padding-box border-box #fff;\n  border-collapse: separate;\n  border-radius: 8px;\n  border: 0px none #333;\n  bottom: auto;\n  box-shadow: #808080 0 0 22px;\n  box-sizing: border-box;\n  left: -240px;\n  letter-spacing: normal;\n  margin-left: calc(100vw - 100vw / 2) !important;\n  max-height: 90%;\n  overflow: visible;\n  position: absolute;\n  top: 100%;\n  transform: scale(0.8);\n  width: 480px;\n  z-index: " + MAX_Z_INDEX$1 + ";\n  -webkit-appearance: none;\n}\n@media (min-height: 667px) {\n  ." + Constants.IFRAME_STYLE_CENTER_CLASS + " {\n    max-height: 600px;\n  }\n}\n." + Constants.IFRAME_ACTIVE_CONTAINER_CLASS + " {\n  top: 50%;\n  transform: scale(1.0) translateY(-50%);\n}\n";
  Constants.GPAY_BUTTON_WITH_CARD_INFO_IMAGE = "background-image: url(https://pay.google.com/gp/p/generate_gpay_btn_img);";
  Constants.BUTTON_LOCALE_TO_MIN_WIDTH = {
    "en": 152,
    "bg": 163,
    "cs": 192,
    "de": 183,
    "es": 183,
    "fr": 183,
    "hr": 157,
    "id": 186,
    "ja": 148,
    "ko": 137,
    "ms": 186,
    "nl": 167,
    "pl": 182,
    "pt": 193,
    "ru": 206,
    "sk": 157,
    "sl": 211,
    "sr": 146,
    "tr": 161,
    "uk": 207,
    "zh": 156
  };
  Constants.GPAY_GRAYPANE = "gpay-graypane";
  Constants.GPAY_BUTTON_CLASS = "gpay-button";
  Constants.BUTTON_STYLE = "\n." + Constants.GPAY_BUTTON_CLASS + " {\n  background-origin: content-box;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  border: 0px;\n  border-radius: 4px;\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 1px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n  cursor: pointer;\n  height: 40px;\n  min-height: 40px;\n  padding: 11px 24px;\n}\n\n." + Constants.GPAY_BUTTON_CLASS + ".black {\n  background-color: #000;\n  box-shadow: none;\n  padding: 12px 24px 10px;\n}\n\n." + Constants.GPAY_BUTTON_CLASS + ".white {\n  background-color: #fff;\n}\n\n." + Constants.GPAY_BUTTON_CLASS + ".short {\n  min-width: 90px;\n  width: 160px;\n}\n\n." + Constants.GPAY_BUTTON_CLASS + ".black.short {\n  background-image: url(https://www.gstatic.com/instantbuy/svg/dark_gpay.svg);\n}\n\n." + Constants.GPAY_BUTTON_CLASS + ".white.short {\n  background-image: url(https://www.gstatic.com/instantbuy/svg/light_gpay.svg);\n}\n\n." + Constants.GPAY_BUTTON_CLASS + ".black.active {\n  background-color: #5f6368;\n}\n\n." + Constants.GPAY_BUTTON_CLASS + ".black.hover {\n  background-color: #3c4043;\n}\n\n." + Constants.GPAY_BUTTON_CLASS + ".white.active {\n  background-color: #fff;\n}\n\n." + Constants.GPAY_BUTTON_CLASS + ".white.focus {\n  box-shadow: #e8e8e8 0 1px 1px 0, #e8e8e8 0 1px 3px;\n}\n\n." + Constants.GPAY_BUTTON_CLASS + ".white.hover {\n  background-color: #f8f8f8;\n}\n";
  Constants.GPAY_BUTTON_WITH_OFFER_ICON_ADDITIONAL_STYLE = "position: relative;";
  Constants.GPAY_OFFER_ICON_CLASS = "gpay-offer-icon";
  Constants.GPAY_OFFER_ICON_SVG = '<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="gpay-offer-icon"><defs><path d="M19.41,9.58 L10.41,0.58 C10.05,0.22 9.55,0 9,0 L2,0 C0.9,0 0,0.9 0,2 L0,9 C0,9.55 0.22,10.05 0.59,10.42 L9.59,19.42 C9.95,19.78 10.45,20 11,20 C11.55,20 12.05,19.78 12.41,19.41 L19.41,12.41 C19.78,12.05 20,11.55 20,11 C20,10.45 19.77,9.94 19.41,9.58 Z" id="path-1"></path></defs><g id="buttons_10.05" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Artboard" transform="translate(-40.000000, -43.000000)"><g id="Group-3" transform="translate(40.000000, 43.000000)"><g id="Group-2-Copy-2"><g id="Group-Copy"><g id="ic_loyalty_24px"><mask id="mask-2" fill="white"><use xlink:href="#path-1"></use></mask><use id="gpay-Shape" fill="#FF6100" fill-rule="nonzero" xlink:href="#path-1"></use><path d="M3.5,5 C2.67,5 2,4.33 2,3.5 C2,2.67 2.67,2 3.5,2 C4.33,2 5,2.67 5,3.5 C5,4.33 4.33,5 3.5,5 Z" id="Path" fill="#FFFFFF" fill-rule="nonzero" mask="url(#mask-2)"></path></g></g></g><g id="Group-13-Copy-7" transform="translate(6.000000, 6.000000)" fill="#FFFFFF" fill-rule="nonzero"><g id="Group-13-Copy-2"><path d="M2.15217391,4.55172414 C0.963561082,4.55172414 1.99840144e-14,3.53278598 1.99840144e-14,2.27586207 C1.99840144e-14,1.01893816 0.963561082,6.30606678e-14 2.15217391,6.30606678e-14 C3.34078674,6.30606678e-14 4.30434783,1.01893816 4.30434783,2.27586207 C4.30434783,3.53278598 3.34078674,4.55172414 2.15217391,4.55172414 Z M2.15217391,3.31034483 C2.69245247,3.31034483 3.13043478,2.84719112 3.13043478,2.27586207 C3.13043478,1.70453302 2.69245247,1.24137931 2.15217391,1.24137931 C1.61189535,1.24137931 1.17391304,1.70453302 1.17391304,2.27586207 C1.17391304,2.84719112 1.61189535,3.31034483 2.15217391,3.31034483 Z" id="Combined-Shape"></path><path d="M6.84782609,9 C5.65921326,9 4.69565217,7.98106184 4.69565217,6.72413793 C4.69565217,5.46721402 5.65921326,4.44827586 6.84782609,4.44827586 C8.03643892,4.44827586 9,5.46721402 9,6.72413793 C9,7.98106184 8.03643892,9 6.84782609,9 Z M6.84782609,7.75862069 C7.38810465,7.75862069 7.82608696,7.29546698 7.82608696,6.72413793 C7.82608696,6.15280888 7.38810465,5.68965517 6.84782609,5.68965517 C6.30754753,5.68965517 5.86956522,6.15280888 5.86956522,6.72413793 C5.86956522,7.29546698 6.30754753,7.75862069 6.84782609,7.75862069 Z" id="Combined-Shape"></path><polygon id="Rectangle" transform="translate(4.497720, 4.541938) rotate(34.000000) translate(-4.497720, -4.541938) " points="3.77901778 -0.202295978 4.9740273 -0.171019161 5.21642263 9.28617278 4.02141311 9.25489596"></polygon></g></g></g></g></g></svg>';
  Constants.GPAY_OFFER_ICON_STYLE = "\n." + Constants.GPAY_OFFER_ICON_CLASS + " {\n  position: absolute;\n  right: -5px;\n  top: -5px;\n}\n\n#ic_loyalty_24px use.hover {\n  fill: #FC853B;\n}\n";
  Constants.GPAY_OFFER_DESCRIPTION_CLASS = "gpay-offer-description";
  Constants.GPAY_OFFER_DESCRIPTION_STYLE = "\n@import url(//fonts.googleapis.com/css?family=Google+Sans:500);\n." + Constants.GPAY_OFFER_DESCRIPTION_CLASS + " {\n  text-align: center;\n  font: 10px 'Google Sans';\n  margin-top: 2px;\n  margin-bottom: 0px;\n}\n\n." + Constants.GPAY_OFFER_DESCRIPTION_CLASS + ".gpay-btn-clicked {\n  color: #3C4043;\n}\n\n." + Constants.GPAY_OFFER_DESCRIPTION_CLASS + ".short {\n  min-width: 90px;\n  width: 160px;\n}\n\n." + Constants.GPAY_OFFER_DESCRIPTION_CLASS + ".long {\n  min-width: 152px;\n  width: 240px;\n}\n";
  Constants.GPAY_BUTTON_CARD_INFO_CLASS = "gpay-card-info-btn";
  Constants.GPAY_BUTTON_CARD_INFO_BUTTON_STYLE = "\n  ." + Constants.GPAY_BUTTON_CARD_INFO_CLASS + " {\n    background-origin: content-box;\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: contain;\n    border: 0px;\n    border-radius: 4px;\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 1px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n    cursor: pointer;\n    height: 40px;\n    min-height: 40px;\n    padding: 11px 24px;\n    background-color: #000;\n    box-shadow: none;\n    padding: 9px 24px 10px;\n    min-width: 190px;\n    width: 240px;\n  }\n\n  ." + Constants.GPAY_BUTTON_CARD_INFO_CLASS + ".active {\n    background-color: #5f6368;\n  }\n\n  ." + Constants.GPAY_BUTTON_CARD_INFO_CLASS + ".hover {\n    background-color: #3c4043;\n  }\n  ";
  Constants.TRUSTED_DOMAIN = ".google.com";
  var PostMessageService = /* @__PURE__ */ function() {
    function PostMessageService2(window2) {
      this.window_ = window2;
    }
    var _proto70 = PostMessageService2.prototype;
    _proto70.postMessage = function postMessage(message, targetOrigin) {
      this.window_.postMessage(message, targetOrigin);
    };
    return PostMessageService2;
  }();
  var PostMessageEventType = {
    IS_READY_TO_PAY: 6,
    LOG_BUTTON_CLICK: 5,
    LOG_IS_READY_TO_PAY_API: 0,
    LOG_LOAD_PAYMENT_DATA_API: 1,
    LOG_RENDER_BUTTON: 2,
    LOG_INITIALIZE_PAYMENTS_CLIENT: 9,
    LOG_PAY_FRAME_REQUESTED: 15,
    LOG_PAY_FRAME_LOADED: 16,
    LOG_PAY_FRAME_LOADED_WITH_ALL_JS: 17,
    LOG_INLINE_PAYMENT_WIDGET_INITIALIZE: 4,
    LOG_INLINE_PAYMENT_WIDGET_SUBMIT: 3,
    LOG_INLINE_PAYMENT_WIDGET_DISPLAYED: 7,
    LOG_INLINE_PAYMENT_WIDGET_HIDDEN: 8
  };
  var BuyFlowActivityMode = {
    UNKNOWN_MODE: 0,
    IFRAME: 1,
    POPUP: 2,
    REDIRECT: 3,
    ANDROID_NATIVE: 4,
    PAYMENT_HANDLER: 5
  };
  var PublicErrorCode = {
    UNKNOWN_ERROR_TYPE: 0,
    INTERNAL_ERROR: 1,
    DEVELOPER_ERROR: 2,
    BUYER_ACCOUNT_ERROR: 3,
    MERCHANT_ACCOUNT_ERROR: 4,
    UNSUPPORTED_API_VERSION: 5,
    BUYER_CANCEL: 6
  };
  var BuyFlowMode = {
    PAY_WITH_GOOGLE: 5,
    SUBSCRIBE_WITH_GOOGLE: 6
  };
  var iframe = null;
  var postMessageService = null;
  var environment = null;
  var googleTransactionId = null;
  var originTimeMs = Date.now();
  var buyFlowActivityMode = null;
  var _iframeLoaded = false;
  var buffer = [];
  var PayFrameHelper = /* @__PURE__ */ function() {
    function PayFrameHelper2() {
    }
    PayFrameHelper2.load = function load() {
      if (iframe) {
        return;
      }
      var initOptions = window["gpayInitParams"] || {};
      environment = initOptions.environment || Constants.Environment.PRODUCTION;
      iframe = document.createElement("iframe");
      iframe.src = PayFrameHelper2.getIframeUrl_(window.location.origin, initOptions.merchantInfo && initOptions.merchantInfo.merchantId);
      PayFrameHelper2.postMessage({
        "eventType": PostMessageEventType.LOG_PAY_FRAME_REQUESTED,
        "clientLatencyStartMs": Date.now()
      });
      iframe.height = "0";
      iframe.width = "0";
      iframe.style.display = "none";
      iframe.style.visibility = "hidden";
      iframe.onload = function() {
        PayFrameHelper2.postMessage({
          "eventType": PostMessageEventType.LOG_PAY_FRAME_LOADED_WITH_ALL_JS,
          "clientLatencyStartMs": Date.now()
        });
        PayFrameHelper2.iframeLoaded();
      };
      if (document.body) {
        PayFrameHelper2.initialize_();
      } else {
        document.addEventListener("DOMContentLoaded", function() {
          return PayFrameHelper2.initialize_();
        });
      }
    };
    PayFrameHelper2.initialize_ = function initialize_() {
      document.body.appendChild(iframe);
      postMessageService = new PostMessageService(iframe.contentWindow);
    };
    PayFrameHelper2.sendAndWaitForResponse = function sendAndWaitForResponse(data, eventType, responseType, responseHandler) {
      function callback(event) {
        if (event.data[responseType]) {
          responseHandler(event);
          PayFrameHelper2.removeMessageEventListener_(callback);
        }
      }
      PayFrameHelper2.addMessageEventListener_(callback);
      var postMessageData = Object.assign({
        "eventType": eventType
      }, data);
      PayFrameHelper2.postMessage(postMessageData);
    };
    PayFrameHelper2.addMessageEventListener_ = function addMessageEventListener_(callback) {
      window.addEventListener("message", callback);
    };
    PayFrameHelper2.removeMessageEventListener_ = function removeMessageEventListener_(callback) {
      window.removeEventListener("message", callback);
    };
    PayFrameHelper2.postMessage = function postMessage(data) {
      if (!_iframeLoaded) {
        buffer.push(data);
        return;
      }
      var postMessageData = Object.assign({
        "buyFlowActivityMode": buyFlowActivityMode,
        "googleTransactionId": googleTransactionId,
        "originTimeMs": originTimeMs
      }, data);
      postMessageService.postMessage(postMessageData, PayFrameHelper2.getIframeOrigin_());
    };
    PayFrameHelper2.setBuyFlowActivityMode = function setBuyFlowActivityMode(mode9) {
      buyFlowActivityMode = mode9;
    };
    PayFrameHelper2.setGoogleTransactionId = function setGoogleTransactionId(txnId) {
      googleTransactionId = txnId;
    };
    PayFrameHelper2.setOriginTimeMs = function setOriginTimeMs(originTimeMsTemp) {
      originTimeMs = originTimeMsTemp;
    };
    PayFrameHelper2.setPostMessageService = function setPostMessageService(messageService) {
      postMessageService = messageService;
    };
    PayFrameHelper2.reset = function reset() {
      iframe = null;
      buffer.length = 0;
      _iframeLoaded = false;
      buyFlowActivityMode = null;
    };
    PayFrameHelper2.setIframeLoaded = function setIframeLoaded(loaded) {
      _iframeLoaded = loaded;
    };
    PayFrameHelper2.iframeLoaded = function iframeLoaded() {
      _iframeLoaded = true;
      buffer.forEach(function(data) {
        PayFrameHelper2.postMessage(data);
      });
      buffer.length = 0;
    };
    PayFrameHelper2.getBuffer = function getBuffer() {
      return buffer;
    };
    PayFrameHelper2.injectIframeForTesting = function injectIframeForTesting() {
      PayFrameHelper2.reset();
      iframe = document.createElement("p");
      PayFrameHelper2.iframeLoaded();
    };
    PayFrameHelper2.getIframeOrigin_ = function getIframeOrigin_() {
      var iframeUrl = "https://pay";
      if (environment == Constants.Environment.SANDBOX) {
        iframeUrl += ".sandbox";
      } else if (environment == Constants.Environment.PREPROD) {
        iframeUrl += "-preprod.sandbox";
      }
      return iframeUrl + ".google.com";
    };
    PayFrameHelper2.getIframeUrl_ = function getIframeUrl_(origin, merchantId) {
      var iframeUrl = "https://pay" + (environment == Constants.Environment.PREPROD ? "-preprod.sandbox" : environment == Constants.Environment.SANDBOX ? ".sandbox" : "") + ".google.com/gp/p/ui/payframe?origin=" + origin + "&mid=%{merchantId}";
      return iframeUrl;
    };
    return PayFrameHelper2;
  }();
  var PaymentsRequestDelegate = /* @__PURE__ */ function() {
    function PaymentsRequestDelegate2(environment2) {
      this.environment_ = environment2;
      this.callback_ = null;
    }
    var _proto71 = PaymentsRequestDelegate2.prototype;
    _proto71.onResult = function onResult(callback) {
      this.callback_ = callback;
    };
    _proto71.isReadyToPay = function isReadyToPay(isReadyToPayRequest) {
      var paymentRequest = this.createPaymentRequest_(isReadyToPayRequest);
      return new Promise(function(resolve, reject) {
        paymentRequest.canMakePayment().then(function(result) {
          window.sessionStorage.setItem(Constants.IS_READY_TO_PAY_RESULT_KEY, result.toString());
          var response = {
            "result": result
          };
          if (isReadyToPayRequest.apiVersion >= 2 && isReadyToPayRequest.existingPaymentMethodRequired) {
            response["paymentMethodPresent"] = result;
          }
          resolve(response);
        }).catch(function(err) {
          if (window.sessionStorage.getItem(Constants.IS_READY_TO_PAY_RESULT_KEY)) {
            resolve({
              "result": window.sessionStorage.getItem(Constants.IS_READY_TO_PAY_RESULT_KEY) == "true"
            });
          } else {
            resolve({
              "result": false
            });
          }
        });
      });
    };
    _proto71.prefetchPaymentData = function prefetchPaymentData(paymentDataRequest) {
      this.createPaymentRequest_(paymentDataRequest, this.environment_, paymentDataRequest.transactionInfo.currencyCode, paymentDataRequest.transactionInfo.totalPrice);
    };
    _proto71.loadPaymentData = function loadPaymentData(paymentDataRequest) {
      this.loadPaymentDataThroughPaymentRequest_(paymentDataRequest);
    };
    _proto71.createPaymentRequest_ = function createPaymentRequest_(request, environment2, currencyCode, totalPrice) {
      var data = {};
      if (request) {
        data = JSON.parse(JSON.stringify(request));
      }
      if (!data["apiVersion"]) {
        data["apiVersion"] = 1;
      }
      if (data["swg"]) {
        data["allowedPaymentMethods"] = [Constants.PaymentMethod.CARD];
      }
      if (environment2 && environment2 == Constants.Environment.TEST) {
        data["environment"] = environment2;
      }
      var supportedInstruments = [{
        "supportedMethods": ["https://google.com/pay"],
        "data": data
      }];
      var details = {
        "total": {
          "label": "Estimated Total Price",
          "amount": {
            "currency": currencyCode || "USD",
            "value": totalPrice || "0"
          }
        }
      };
      return new PaymentRequest(supportedInstruments, details);
    };
    _proto71.loadPaymentDataThroughPaymentRequest_ = function loadPaymentDataThroughPaymentRequest_(paymentDataRequest) {
      var currencyCode = paymentDataRequest.transactionInfo && paymentDataRequest.transactionInfo.currencyCode || void 0;
      var totalPrice = paymentDataRequest.transactionInfo && paymentDataRequest.transactionInfo.totalPrice || void 0;
      var paymentRequest = this.createPaymentRequest_(paymentDataRequest, this.environment_, currencyCode, totalPrice);
      this.callback_(paymentRequest.show().then(function(paymentResponse) {
        paymentResponse.complete("success");
        return paymentResponse.details;
      }).catch(function(err) {
        err["statusCode"] = Constants.ResponseStatus.CANCELED;
        throw err;
      }));
    };
    return PaymentsRequestDelegate2;
  }();
  var MAX_Z_INDEX = 2147483647;
  var Graypane = /* @__PURE__ */ function() {
    function Graypane2(doc) {
      var _this61 = this;
      this.doc_ = doc;
      this.element_ = doc.createElement(Constants.GPAY_GRAYPANE);
      setImportantStyles(this.element_, {
        "z-index": MAX_Z_INDEX,
        "display": "none",
        "position": "fixed",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "background-color": "rgba(32, 33, 36, .6)"
      });
      this.popupWindow_ = null;
      this.element_.addEventListener("click", function() {
        if (_this61.popupWindow_) {
          try {
            _this61.popupWindow_.focus();
          } catch (e) {
          }
        }
      });
    }
    var _proto72 = Graypane2.prototype;
    _proto72.show = function show(popupWindow) {
      this.popupWindow_ = popupWindow || null;
      this.doc_.body.appendChild(this.element_);
      setImportantStyles(this.element_, {
        "display": "block",
        "opacity": 0
      });
      return transition(this.element_, {
        "opacity": 1
      }, 300, "ease-out");
    };
    _proto72.hide = function hide() {
      var _this62 = this;
      this.popupWindow_ = null;
      if (!this.element_.parentElement) {
        return;
      }
      return transition(this.element_, {
        "opacity": 0
      }, 300, "ease-out").then(function() {
        setImportantStyles(_this62.element_, {
          "display": "none"
        });
        _this62.doc_.body.removeChild(_this62.element_);
      });
    };
    return Graypane2;
  }();
  function setImportantStyles(element, styles) {
    for (var k in styles) {
      element.style.setProperty(k, styles[k].toString(), "important");
    }
  }
  function transition(el, props, durationMillis, curve) {
    var win = el.ownerDocument.defaultView;
    var previousTransitionValue = el.style.transition || "";
    return new Promise(function(resolve) {
      win.setTimeout(function() {
        win.setTimeout(resolve, durationMillis);
        var tr = durationMillis + "ms " + curve;
        setImportantStyles(el, Object.assign({
          "transition": "transform " + tr + ", opacity " + tr
        }, props));
      });
    }).then(function() {
      setImportantStyles(el, Object.assign({
        "transition": previousTransitionValue
      }, props));
    });
  }
  function chromeSupportsPaymentHandler() {
    if (typeof google == "undefined" || true) {
      return false;
    }
    var mobilePlatform = window.navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile/i);
    if (mobilePlatform != null) {
      return false;
    }
    var chromeVersion = window.navigator.userAgent.match(/Chrome\/([0-9]+)\./i);
    return "PaymentRequest" in window && chromeVersion != null && Number(chromeVersion[1]) >= 68 && window.navigator.vendor == "Google Inc.";
  }
  function chromeSupportsPaymentRequest() {
    var isOpera = window.navigator.userAgent.indexOf("OPR/") != -1;
    if (isOpera) {
      return false;
    }
    if (chromeSupportsPaymentHandler()) {
      return true;
    }
    var androidPlatform = window.navigator.userAgent.match(/Android/i);
    var chromeVersion = window.navigator.userAgent.match(/Chrome\/([0-9]+)\./i);
    return androidPlatform != null && "PaymentRequest" in window && window.navigator.vendor == "Google Inc." && chromeVersion != null && Number(chromeVersion[1]) >= 59;
  }
  function doesMerchantSupportOnlyTokenizedCards(isReadyToPayRequest) {
    if (isReadyToPayRequest.apiVersion >= 2) {
      var allowedAuthMethods = extractAllowedAuthMethodsForCards_(isReadyToPayRequest);
      if (allowedAuthMethods && allowedAuthMethods.length == 1 && allowedAuthMethods[0] == Constants.AuthMethod.CRYPTOGRAM_3DS) {
        return true;
      }
    }
    return isReadyToPayRequest.allowedPaymentMethods.length == 1 && isReadyToPayRequest.allowedPaymentMethods[0] == Constants.PaymentMethod.TOKENIZED_CARD;
  }
  function apiV2DoesMerchantSupportSpecifiedCardType(isReadyToPayRequest, apiV2AuthMethod) {
    if (isReadyToPayRequest.apiVersion >= 2) {
      var allowedAuthMethods = extractAllowedAuthMethodsForCards_(isReadyToPayRequest);
      if (allowedAuthMethods && allowedAuthMethods.includes(apiV2AuthMethod)) {
        return true;
      }
      return false;
    }
    return false;
  }
  function validateSecureContext() {
    if (window.location.hostname.endsWith(Constants.TRUSTED_DOMAIN)) {
      return null;
    }
    if (window.isSecureContext === void 0) {
      return null;
    }
    return window.isSecureContext ? null : "Google Pay APIs should be called in secure context!";
  }
  function validatePaymentOptions(paymentOptions) {
    if (paymentOptions.environment && !Object.values(Constants.Environment).includes(paymentOptions.environment)) {
      throw new Error("Parameter environment in PaymentOptions can optionally be set to PRODUCTION, otherwise it defaults to TEST. " + paymentOptions.environment);
    }
  }
  function validateIsReadyToPayRequest(isReadyToPayRequest) {
    if (!isReadyToPayRequest) {
      return "isReadyToPayRequest must be set!";
    } else if (isReadyToPayRequest.apiVersion >= 2) {
      if (!("apiVersionMinor" in isReadyToPayRequest)) {
        return "apiVersionMinor must be set!";
      }
      if (!isReadyToPayRequest.allowedPaymentMethods || !Array.isArray(isReadyToPayRequest.allowedPaymentMethods) || isReadyToPayRequest.allowedPaymentMethods.length == 0) {
        return "for v2 allowedPaymentMethods must be set to an array containing a list of accepted payment methods";
      }
      for (var i = 0; i < isReadyToPayRequest.allowedPaymentMethods.length; i++) {
        var allowedPaymentMethod = isReadyToPayRequest.allowedPaymentMethods[i];
        if (allowedPaymentMethod["type"] == Constants.PaymentMethod.CARD) {
          if (!allowedPaymentMethod["parameters"]) {
            return "Field parameters must be setup in each allowedPaymentMethod";
          }
          var allowedCardNetworks = allowedPaymentMethod["parameters"]["allowedCardNetworks"];
          if (!allowedCardNetworks || !Array.isArray(allowedCardNetworks) || allowedCardNetworks.length == 0) {
            return "allowedCardNetworks must be setup in parameters for type CARD";
          }
          var allowedAuthMethods = allowedPaymentMethod["parameters"]["allowedAuthMethods"];
          if (!allowedAuthMethods || !Array.isArray(allowedAuthMethods) || allowedAuthMethods.length == 0 || !allowedAuthMethods.every(isAuthMethodValid)) {
            return "allowedAuthMethods must be setup in parameters for type 'CARD'  and must contain 'CRYPTOGRAM_3DS' and/or 'PAN_ONLY'";
          }
        }
      }
      return null;
    } else if (!isReadyToPayRequest.allowedPaymentMethods || !Array.isArray(isReadyToPayRequest.allowedPaymentMethods) || isReadyToPayRequest.allowedPaymentMethods.length == 0 || !isReadyToPayRequest.allowedPaymentMethods.every(isPaymentMethodValid)) {
      return "allowedPaymentMethods must be set to an array containing 'CARD' and/or 'TOKENIZED_CARD'!";
    }
    return null;
  }
  function isPaymentMethodValid(paymentMethod) {
    return Object.values(Constants.PaymentMethod).includes(paymentMethod);
  }
  function isAuthMethodValid(authMethod) {
    return Object.values(Constants.AuthMethod).includes(authMethod);
  }
  function validatePaymentDataRequest(paymentDataRequest) {
    if (!paymentDataRequest) {
      return "paymentDataRequest must be set!";
    }
    if (paymentDataRequest.swg) {
      return validatePaymentDataRequestForSwg(paymentDataRequest.swg);
    } else if (!paymentDataRequest.transactionInfo) {
      return "transactionInfo must be set!";
    } else if (!paymentDataRequest.transactionInfo.currencyCode) {
      return "currencyCode in transactionInfo must be set!";
    } else if (!paymentDataRequest.transactionInfo.totalPriceStatus || !Object.values(Constants.TotalPriceStatus).includes(paymentDataRequest.transactionInfo.totalPriceStatus)) {
      return "totalPriceStatus in transactionInfo must be set to one of NOT_CURRENTLY_KNOWN, ESTIMATED or FINAL!";
    } else if (paymentDataRequest.transactionInfo.totalPriceStatus !== "NOT_CURRENTLY_KNOWN" && !paymentDataRequest.transactionInfo.totalPrice) {
      return "totalPrice in transactionInfo must be set when totalPriceStatus is ESTIMATED or FINAL!";
    }
    var allowedPaymentMethod = getUpiPaymentMethod(paymentDataRequest);
    if (allowedPaymentMethod) {
      if (!allowedPaymentMethod["parameters"]) {
        return "parameters must be set in allowedPaymentMethod!";
      }
      var parameters = allowedPaymentMethod["parameters"];
      if (!parameters["payeeVpa"]) {
        return "payeeVpa in allowedPaymentMethod parameters must be set!";
      } else if (!parameters["payeeName"]) {
        return "payeeName in allowedPaymentMethod parameters must be set!";
      } else if (!parameters["referenceUrl"]) {
        return "referenceUrl in allowedPaymentMethod parameters must be set!";
      } else if (!parameters["mcc"]) {
        return "mcc in allowedPaymentMethod parameters must be set!";
      } else if (!parameters["transactionReferenceId"]) {
        return "transactionReferenceId in allowedPaymentMethod parameters must be set!";
      }
      if (paymentDataRequest["transactionInfo"]["currencyCode"] !== "INR") {
        return "currencyCode in transactionInfo must be set to INR!";
      } else if (paymentDataRequest["transactionInfo"]["totalPriceStatus"] !== "FINAL") {
        return "totalPriceStatus in transactionInfo must be set to FINAL!";
      } else if (!paymentDataRequest["transactionInfo"]["transactionNote"]) {
        return "transactionNote in transactionInfo must be set!";
      }
    }
    return null;
  }
  function getUpiPaymentMethod(request) {
    if (!chromeSupportsPaymentRequest() || request.apiVersion < 2 || !request.allowedPaymentMethods) {
      return null;
    }
    return getAllowedPaymentMethodForType_(request, Constants.PaymentMethod.UPI);
  }
  function validatePaymentDataRequestForSwg(swgParameters) {
    if (!swgParameters) {
      return "Swg parameters must be provided";
    }
    if (!swgParameters.skuId || !swgParameters.publicationId) {
      return "Both skuId and publicationId must be provided";
    }
    return null;
  }
  function extractAllowedAuthMethodsForCards_(isReadyToPayRequest) {
    if (isReadyToPayRequest.allowedPaymentMethods) {
      var allowedPaymentMethod = getAllowedPaymentMethodForType_(isReadyToPayRequest, Constants.PaymentMethod.CARD);
      if (allowedPaymentMethod && allowedPaymentMethod.parameters) {
        return allowedPaymentMethod.parameters["allowedAuthMethods"];
      }
    }
    return null;
  }
  function getAllowedPaymentMethodForType_(isReadyToPayRequest, paymentMethodType) {
    for (var i = 0; i < isReadyToPayRequest.allowedPaymentMethods.length; i++) {
      var allowedPaymentMethod = isReadyToPayRequest.allowedPaymentMethods[i];
      if (allowedPaymentMethod.type == paymentMethodType) {
        return allowedPaymentMethod;
      }
    }
    return null;
  }
  function injectIframe(iframeClassName) {
    var container = document.createElement("div");
    container.classList.add(Constants.IFRAME_CONTAINER_CLASS);
    var iframeContainer = document.createElement("div");
    iframeContainer.classList.add("iframeContainer");
    var iframe2 = document.createElement("iframe");
    iframe2.classList.add(iframeClassName);
    iframe2.setAttribute("frameborder", "0");
    iframe2.setAttribute("scrolling", "no");
    iframeContainer.appendChild(iframe2);
    container.appendChild(iframeContainer);
    document.body.appendChild(container);
    return {
      "container": container,
      "iframe": iframe2
    };
  }
  var _require3 = require_activity_ports();
  var ActivityPort = _require3.ActivityPort;
  var ActivityPorts = _require3.ActivityPorts;
  var ActivityIframePort = _require3.ActivityIframePort;
  var GPAY_ACTIVITY_REQUEST = "GPAY";
  var IFRAME_CLOSE_DURATION_IN_MS = 250;
  var IFRAME_SHOW_UP_DURATION_IN_MS = 250;
  var IFRAME_SMOOTH_HEIGHT_TRANSITION = "height " + IFRAME_SHOW_UP_DURATION_IN_MS + "ms";
  var ERROR_PREFIX = "Error: ";
  var BrowserUserAgent = {
    CHROME: "Chrome",
    FIREFOX: "Firefox",
    SAFARI: "Safari"
  };
  var PaymentsWebActivityDelegate = /* @__PURE__ */ function() {
    function PaymentsWebActivityDelegate2(environment2, googleTransactionId2, useIframe, activities, redirectKey) {
      this.environment_ = environment2;
      this.activities = activities || new ActivityPorts(window);
      this.graypane_ = new Graypane(window.document);
      this.callback_ = null;
      this.prefetchedObjects_ = null;
      this.shouldHandleResizing_ = false;
      this.port_ = null;
      this.dismissPromiseResolver_ = null;
      this.googleTransactionId_ = googleTransactionId2;
      this.redirectKey_ = redirectKey || null;
      this.savedResizePayload_ = null;
    }
    var _proto73 = PaymentsWebActivityDelegate2.prototype;
    _proto73.onResult = function onResult(callback) {
      if (this.callback_) {
        return;
      }
      this.callback_ = callback;
      this.activities.onResult(GPAY_ACTIVITY_REQUEST, this.onActivityResult_.bind(this));
    };
    _proto73.onActivityResult_ = function onActivityResult_(port) {
      var _this63 = this;
      this.graypane_.hide();
      this.callback_(port.acceptResult().then(function(result) {
        if (result.origin != _this63.getOrigin_()) {
          throw new Error("channel mismatch");
        }
        var data = result.data;
        if (data["redirectEncryptedCallbackData"]) {
          PayFrameHelper.setBuyFlowActivityMode(BuyFlowActivityMode.REDIRECT);
          return _this63.fetchRedirectResponse_(data["redirectEncryptedCallbackData"]).then(function(decrypedJson) {
            var clone = Object.assign({}, data);
            delete clone["redirectEncryptedCallbackData"];
            return Object.assign(clone, decrypedJson);
          });
        }
        if (!result.originVerified || !result.secureChannel) {
          throw new Error("channel mismatch");
        }
        return data;
      }, function(error) {
        var originalError = error["message"];
        var inferredError = error["message"];
        try {
          inferredError = JSON.parse(originalError.substring(ERROR_PREFIX.length));
        } catch (e) {
        }
        if (inferredError["statusCode"] && ["DEVELOPER_ERROR", "MERCHANT_ACCOUNT_ERROR"].indexOf(inferredError["statusCode"]) == -1) {
          inferredError = {
            "statusCode": "CANCELED"
          };
        }
        if (inferredError == "AbortError") {
          inferredError = {
            "statusCode": "CANCELED"
          };
        }
        return Promise.reject(inferredError);
      }));
    };
    _proto73.fetchRedirectResponse_ = function fetchRedirectResponse_(redirectEncryptedCallbackData) {
      var _this64 = this;
      return new Promise(function(resolve, reject) {
        var url = _this64.getDecryptionUrl_();
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        if ("withCredentials" in xhr) {
          xhr.withCredentials = true;
        }
        xhr.onreadystatechange = function() {
          if (xhr.readyState < 2) {
            return;
          }
          if (xhr.status < 100 || xhr.status > 599) {
            xhr.onreadystatechange = null;
            reject(new Error("Unknown HTTP status " + xhr.status));
            return;
          }
          if (xhr.readyState == 4) {
            try {
              resolve(JSON.parse(xhr.responseText));
            } catch (e) {
              reject(e);
            }
          }
        };
        xhr.onerror = function() {
          reject(new Error("Network failure"));
        };
        xhr.onabort = function() {
          reject(new Error("Request aborted"));
        };
        xhr.send(redirectEncryptedCallbackData);
      });
    };
    _proto73.isReadyToPay = function isReadyToPay(isReadyToPayRequest) {
      var _this65 = this;
      return new Promise(function(resolve, reject) {
        if (doesMerchantSupportOnlyTokenizedCards(isReadyToPayRequest)) {
          resolve({
            "result": false
          });
          return;
        }
        var userAgent = window.navigator.userAgent;
        var isIosGsa = userAgent.indexOf("GSA/") > 0 && userAgent.indexOf(BrowserUserAgent.SAFARI) > 0;
        if (isIosGsa && true) {
          resolve({
            "result": false
          });
          return;
        }
        var isFirefoxIos = userAgent.indexOf("FxiOS") > 0;
        if (isFirefoxIos) {
          resolve({
            "result": false
          });
          return;
        }
        var isSupported = userAgent.indexOf(BrowserUserAgent.CHROME) > 0 || userAgent.indexOf(BrowserUserAgent.FIREFOX) > 0 || userAgent.indexOf(BrowserUserAgent.SAFARI) > 0;
        if (isSupported && isReadyToPayRequest.apiVersion >= 2 && isReadyToPayRequest.existingPaymentMethodRequired) {
          isReadyToPayRequest.environment = _this65.environment_;
          PayFrameHelper.sendAndWaitForResponse(isReadyToPayRequest, PostMessageEventType.IS_READY_TO_PAY, "isReadyToPayResponse", function(event) {
            var response = {
              "result": isSupported
            };
            if (isReadyToPayRequest.existingPaymentMethodRequired) {
              response["paymentMethodPresent"] = event.data["isReadyToPayResponse"] == "READY_TO_PAY";
            }
            resolve(response);
          });
        } else {
          resolve({
            "result": isSupported
          });
        }
      });
    };
    _proto73.prefetchPaymentData = function prefetchPaymentData(paymentDataRequest) {
      {
        return;
      }
    };
    _proto73.loadPaymentData = function loadPaymentData(paymentDataRequest) {
      if (!paymentDataRequest.swg) {
        if (!paymentDataRequest.apiVersion) {
          paymentDataRequest.apiVersion = 1;
        }
      }
      paymentDataRequest.environment = this.environment_;
      PayFrameHelper.setBuyFlowActivityMode(paymentDataRequest["forceRedirect"] ? BuyFlowActivityMode.REDIRECT : BuyFlowActivityMode.POPUP);
      var opener = this.activities.open(GPAY_ACTIVITY_REQUEST, this.getHostingPageUrl_(), this.getRenderMode_(paymentDataRequest), paymentDataRequest, {
        "width": 600,
        "height": 600
      });
      this.graypane_.show(opener && opener.targetWin);
    };
    _proto73.getRenderMode_ = function getRenderMode_(paymentDataRequest) {
      return paymentDataRequest["forceRedirect"] ? "_top" : "gp-js-popup";
    };
    _proto73.getOrigin_ = function getOrigin_() {
      if (this.environment_ == Constants.Environment.LOCAL) {
        return "";
      }
      var baseDomain;
      if (this.environment_ == Constants.Environment.PREPROD) {
        baseDomain = "pay-preprod.sandbox";
      } else if (this.environment_ == Constants.Environment.SANDBOX) {
        baseDomain = "pay.sandbox";
      } else {
        baseDomain = "pay";
      }
      return "https://" + baseDomain + ".google.com";
    };
    _proto73.getBasePath_ = function getBasePath_() {
      return this.getOrigin_() + "/gp/p";
    };
    _proto73.getDecryptionUrl_ = function getDecryptionUrl_() {
      var url = this.getBasePath_() + "/apis/buyflow/process";
      if (this.redirectKey_) {
        url += "?rk=" + encodeURIComponent(this.redirectKey_);
      }
      return url;
    };
    _proto73.getHostingPageUrl_ = function getHostingPageUrl_() {
      if (this.environment_ == Constants.Environment.TIN) {
        return "/ui/pay";
      }
      return this.getBasePath_() + "/ui/pay";
    };
    _proto73.getIframeUrl = function getIframeUrl(environment2, origin) {
      var iframeUrl = "https://pay.google.com/gp/p/ui/pay?origin=" + origin;
      if (environment2 == Constants.Environment.SANDBOX || environment2 == Constants.Environment.PREPROD) {
        iframeUrl = "https://pay'+  (environment == Constants.Environment.PREPROD ? '-preprod' : '')+  '.sandbox.google.com/gp/p/ui/pay?origin=" + origin;
      }
      return iframeUrl;
    };
    _proto73.removeIframeAndContainer_ = function removeIframeAndContainer_(container, iframe2) {
      var transitionStyle = "all " + IFRAME_CLOSE_DURATION_IN_MS + "ms ease 0s";
      this.setTransition_(iframe2, transitionStyle);
      iframe2.height = "0px";
      setTimeout(function() {
        if (container.parentNode) {
          container.parentNode.removeChild(container);
        }
      }, IFRAME_CLOSE_DURATION_IN_MS);
    };
    _proto73.injectIframe_ = function injectIframe_(paymentDataRequest) {
      var containerAndFrame = injectIframe(this.isVerticalCenterExperimentEnabled_(paymentDataRequest) ? Constants.IFRAME_STYLE_CENTER_CLASS : Constants.IFRAME_STYLE_CLASS);
      var iframe2 = containerAndFrame["iframe"];
      var container = containerAndFrame["container"];
      container.addEventListener("click", this.closeActionHandler_.bind(this, containerAndFrame));
      container.style.display = "none";
      iframe2.style.display = "none";
      iframe2.height = "0px";
      var transitionStyle = "all " + IFRAME_SHOW_UP_DURATION_IN_MS + "ms ease 0s";
      this.setTransition_(iframe2, transitionStyle);
      this.shouldHandleResizing_ = false;
      return containerAndFrame;
    };
    _proto73.backButtonHandler_ = function backButtonHandler_(containerAndFrame) {
      this.dismissIframe_(containerAndFrame);
    };
    _proto73.closeActionHandler_ = function closeActionHandler_(containerAndFrame) {
      if (containerAndFrame["container"].parentNode) {
        history.back();
      }
    };
    _proto73.dismissIframe_ = function dismissIframe_(containerAndFrame) {
      if (containerAndFrame["container"].parentNode) {
        this.dismissPromiseResolver_(Promise.reject({
          "errorCode": "CANCELED"
        }));
        this.removeIframeAndContainer_(containerAndFrame["container"], containerAndFrame["iframe"]);
        this.port_ && this.port_.disconnect();
      }
    };
    _proto73.isVerticalCenterExperimentEnabled_ = function isVerticalCenterExperimentEnabled_(paymentDataRequest) {
      return null;
    };
    _proto73.showContainerAndIframeWithAnimation_ = function showContainerAndIframeWithAnimation_(container, iframe2, paymentDataRequest) {
      var _this66 = this;
      container.style.display = "block";
      iframe2.style.display = "block";
      setTimeout(function() {
        iframe2.height = "280px";
        if (_this66.isVerticalCenterExperimentEnabled_(paymentDataRequest)) {
          iframe2.classList.add(Constants.IFRAME_ACTIVE_CONTAINER_CLASS);
        }
        setTimeout(function() {
          _this66.shouldHandleResizing_ = true;
          if (_this66.savedResizePayload_) {
            _this66.setTransition_(iframe2, _this66.savedResizePayload_["transition"]);
            iframe2.height = _this66.savedResizePayload_["height"];
            _this66.savedResizePayload_ = null;
          }
        }, IFRAME_SHOW_UP_DURATION_IN_MS);
      }, 1);
    };
    _proto73.setTransition_ = function setTransition_(iframe2, transitionStyle) {
      iframe2.style.setProperty("transition", transitionStyle);
      iframe2.style.setProperty("-webkit-transition", transitionStyle);
    };
    _proto73.openIframe_ = function openIframe_(container, iframe2, paymentDataRequest) {
      var _this67 = this;
      if (!paymentDataRequest.swg) {
        if (!paymentDataRequest.apiVersion) {
          paymentDataRequest.apiVersion = 1;
        }
      }
      paymentDataRequest.environment = this.environment_;
      var iframeLoadStartTime;
      var trustedUrl = this.getIframeUrl(this.environment_, window.location.origin);
      return this.activities.openIframe(iframe2, trustedUrl, paymentDataRequest).then(function(port) {
        _this67.port_ = port;
        port.onMessage(function(payload) {
          if (payload["type"] !== "resize" || !_this67.shouldHandleResizing_) {
            _this67.savedResizePayload_ = {
              "height": payload["height"],
              "transition": payload["transition"]
            };
            return;
          }
          if (!iframeLoadStartTime) {
            iframeLoadStartTime = Date.now();
          }
          if (Date.now() < iframeLoadStartTime + IFRAME_SHOW_UP_DURATION_IN_MS) {
            _this67.setTransition_(iframe2, payload["transition"] + ", " + IFRAME_SMOOTH_HEIGHT_TRANSITION);
          } else {
            _this67.setTransition_(iframe2, payload["transition"]);
          }
          iframe2.height = payload["height"];
        });
        return port.acceptResult();
      }).then(function(result) {
        _this67.removeIframeAndContainer_(container, iframe2);
        history.back();
        var data = result["data"];
        return data;
      }, function(error) {
        _this67.removeIframeAndContainer_(container, iframe2);
        history.back();
        return Promise.reject(error);
      });
    };
    return PaymentsWebActivityDelegate2;
  }();
  var UpiHandler = /* @__PURE__ */ function() {
    function UpiHandler2() {
    }
    var _proto74 = UpiHandler2.prototype;
    _proto74.isUpiRequest = function isUpiRequest(request) {
      return !!getUpiPaymentMethod(request);
    };
    _proto74.isReadyToPay = function isReadyToPay(request) {
      if (getUpiPaymentMethod(request)) {
        if (request.existingPaymentMethodRequired) {
          return Promise.resolve({
            "result": true,
            "paymentMethodPresent": true
          });
        } else {
          return Promise.resolve({
            "result": true
          });
        }
      }
      throw new Error("No Upi payment method found in handler");
    };
    _proto74.loadPaymentData = function loadPaymentData(paymentDataRequest, upiPaymentMethod, onResultCallback) {
      var _this68 = this;
      var parameters = upiPaymentMethod["parameters"];
      var transactionInfo = paymentDataRequest["transactionInfo"];
      var supportedInstruments = [{
        "supportedMethods": ["https://tez.google.com/pay"],
        "data": {
          "pa": parameters["payeeVpa"],
          "pn": parameters["payeeName"],
          "tr": parameters["transactionReferenceId"],
          "url": parameters["referenceUrl"],
          "mc": parameters["mcc"],
          "tn": transactionInfo["transactionNote"]
        }
      }];
      if (parameters["transactionId"]) {
        supportedInstruments[0]["data"]["tid"] = parameters["transactionId"];
      }
      var details = {
        "total": {
          "label": "Total",
          "amount": {
            "currency": transactionInfo["currencyCode"],
            "value": transactionInfo["totalPrice"]
          }
        },
        "displayItems": [{
          "label": "Original Amount",
          "amount": {
            "currency": transactionInfo["currencyCode"],
            "value": transactionInfo["totalPrice"]
          }
        }]
      };
      var request = new PaymentRequest(supportedInstruments, details);
      onResultCallback(this.checkCanMakePayment_(request).then(function(result) {
        if (result) {
          return _this68.showUi_(request);
        } else {
          return _this68.redirectToGooglePlay_();
        }
      }).then(function(paymentData) {
        return _this68.processData_(paymentData, paymentDataRequest, upiPaymentMethod);
      }).catch(function(error) {
        error["statusCode"] = Constants.ResponseStatus.CANCELED;
        return Promise.reject(error);
      }));
    };
    _proto74.showUi_ = function showUi_(request) {
      return request.show().then(function(paymentResponse) {
        paymentResponse.complete("success");
        return paymentResponse.details;
      });
    };
    _proto74.checkCanMakePayment_ = function checkCanMakePayment_(request) {
      var cacheResult = window.sessionStorage.getItem(Constants.UPI_CAN_MAKE_PAYMENT_CACHE_KEY);
      if (cacheResult) {
        return Promise.resolve(cacheResult === "true");
      }
      if (!request.canMakePayment) {
        return Promise.resolve(true);
      }
      var canMakePaymentPromise = request.canMakePayment();
      return canMakePaymentPromise.then(function(result) {
        if (result) {
          window.sessionStorage.setItem(Constants.UPI_CAN_MAKE_PAYMENT_CACHE_KEY, result.toString());
        }
        return result;
      });
    };
    _proto74.redirectToGooglePlay_ = function redirectToGooglePlay_() {
      window.location.replace("https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user");
      return Promise.reject({
        "errorMessage": "Cannot redirect to Tez page in Google Play."
      });
    };
    _proto74.processData_ = function processData_(tezPaymentData, paymentDataRequest, upiPaymentMethod) {
      var tezResponse = JSON.parse(tezPaymentData["tezResponse"]);
      if (tezResponse["Status"] === "FAILURE") {
        var error;
        switch (tezResponse["responseCode"]) {
          case "ZM":
            error = {
              "errorCode": PublicErrorCode.BUYER_ACCOUNT_ERROR,
              "errorMessage": "Payment failure due to invalid MPIN."
            };
            break;
          case "Z9":
            error = {
              "errorCode": PublicErrorCode.BUYER_ACCOUNT_ERROR,
              "errorMessage": "Payment failure due to insufficient funds."
            };
            break;
          case "91":
            error = {
              "errorCode": PublicErrorCode.INTERNAL_ERROR,
              "errorMessage": "Payment failure due to transaction timeout or connection issue."
            };
            break;
          default:
            error = {
              "errorMessage": "Payment cancelled."
            };
        }
        return Promise.reject(error);
      }
      var signedMessage = {
        "paymentMethodType": "UPI",
        "payeeVpa": upiPaymentMethod["parameters"]["payeeVpa"],
        "status": tezResponse["Status"],
        "transactionReferenceId": upiPaymentMethod["parameters"]["transactionReferenceId"],
        "transactionId": upiPaymentMethod["parameters"]["transactionId"] ? upiPaymentMethod["parameters"]["transactionId"] : tezResponse["txnId"],
        "transactionInfo": paymentDataRequest["transactionInfo"]
      };
      var paymentData = {
        "apiVersion": paymentDataRequest["apiVersion"],
        "apiVersionMinor": paymentDataRequest["apiVersionMinor"],
        "paymentMethodData": {
          "type": upiPaymentMethod["type"],
          "tokenizationData": {
            "type": "DIRECT",
            "token": {
              "protocolVersion": "ECv1",
              "signature": "",
              "signedMessage": signedMessage
            }
          }
        }
      };
      return Promise.resolve(paymentData);
    };
    return UpiHandler2;
  }();
  var Random_uuid = function Random_uuid2() {
  };
  var CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  Random_uuid.uuid = function(len, radix) {
    var chars = CHARS, uuid = [], i;
    radix = radix || chars.length;
    if (len) {
      for (i = 0; i < len; i++) {
        uuid[i] = chars[0 | Math.random() * radix];
      }
    } else {
      var r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[i == 19 ? r & 3 | 8 : r];
        }
      }
    }
    return uuid.join("");
  };
  Random_uuid.uuidFast = function() {
    var chars = CHARS, uuid = new Array(36), rnd = 0, r;
    for (var i = 0; i < 36; i++) {
      if (i == 8 || i == 13 || i == 18 || i == 23) {
        uuid[i] = "-";
      } else if (i == 14) {
        uuid[i] = "4";
      } else {
        if (rnd <= 2)
          rnd = 33554432 + Math.random() * 16777216 | 0;
        r = rnd & 15;
        rnd = rnd >> 4;
        uuid[i] = chars[i == 19 ? r & 3 | 8 : r];
      }
    }
    return uuid.join("");
  };
  Random_uuid.uuidCompact = function() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == "x" ? r : r & 3 | 8;
      return v.toString(16);
    });
  };
  function createGoogleTransactionId(environment2) {
    return Random_uuid.uuidFast() + "." + environment2;
  }
  require_activity_ports();
  var TRUSTED_DOMAINS = ["actions.google.com", "amp-actions.sandbox.google.com", "amp-actions-staging.sandbox.google.com", "amp-actions-autopush.sandbox.google.com", "payments.developers.google.com", "payments.google.com"];
  var PaymentsAsyncClient = /* @__PURE__ */ function() {
    function PaymentsAsyncClient2(paymentOptions, onPaymentResponse, useIframe, activities) {
      var _this69 = this;
      this.onPaymentResponse_ = onPaymentResponse;
      validatePaymentOptions(paymentOptions);
      this.loadPaymentDataApiStartTimeMs_ = null;
      this.environment_ = paymentOptions.environment || Constants.Environment.TEST;
      if (!PaymentsAsyncClient2.googleTransactionId_) {
        PaymentsAsyncClient2.googleTransactionId_ = this.isInTrustedDomain_() && paymentOptions["i"] && paymentOptions["i"]["googleTransactionId"] ? paymentOptions["i"]["googleTransactionId"] : createGoogleTransactionId(this.environment_);
      }
      this.paymentOptions_ = paymentOptions;
      this.webActivityDelegate_ = new PaymentsWebActivityDelegate(this.environment_, PaymentsAsyncClient2.googleTransactionId_, useIframe, activities, paymentOptions["i"] && paymentOptions["i"]["redirectKey"]);
      this.buyFlowMode_ = BuyFlowMode.PAY_WITH_GOOGLE;
      var paymentRequestSupported = chromeSupportsPaymentRequest();
      this.delegate_ = paymentRequestSupported && !useIframe ? new PaymentsRequestDelegate(this.environment_) : this.webActivityDelegate_;
      this.upiHandler_ = new UpiHandler();
      this.webActivityDelegate_.onResult(this.onResult_.bind(this));
      this.delegate_.onResult(this.onResult_.bind(this));
      PayFrameHelper.load();
      if (chromeSupportsPaymentHandler()) {
        PayFrameHelper.setBuyFlowActivityMode(BuyFlowActivityMode.PAYMENT_HANDLER);
      } else if (paymentRequestSupported) {
        PayFrameHelper.setBuyFlowActivityMode(BuyFlowActivityMode.ANDROID_NATIVE);
      }
      PayFrameHelper.setGoogleTransactionId(PaymentsAsyncClient2.googleTransactionId_);
      PayFrameHelper.postMessage({
        "eventType": PostMessageEventType.LOG_INITIALIZE_PAYMENTS_CLIENT,
        "clientLatencyStartMs": Date.now()
      });
      window.addEventListener("message", function(event) {
        return _this69.handleMessageEvent_(event);
      });
    }
    var _proto75 = PaymentsAsyncClient2.prototype;
    _proto75.isReadyToPay = function isReadyToPay(isReadyToPayRequest) {
      if (isReadyToPayRequest) {
        isReadyToPayRequest = Object.assign({}, this.paymentOptions_, isReadyToPayRequest);
      }
      var startTimeMs = Date.now();
      var errorMessage = validateSecureContext() || validateIsReadyToPayRequest(isReadyToPayRequest);
      if (errorMessage) {
        return new Promise(function(resolve, reject) {
          PaymentsAsyncClient2.logDevErrorToConsole_("isReadyToPay", errorMessage);
          PayFrameHelper.postMessage({
            "eventType": PostMessageEventType.LOG_IS_READY_TO_PAY_API,
            "error": PublicErrorCode.DEVELOPER_ERROR
          });
          reject({
            "statusCode": Constants.ResponseStatus.DEVELOPER_ERROR,
            "statusMessage": errorMessage
          });
        });
      }
      var isReadyToPayPromise = this.isReadyToPay_(isReadyToPayRequest);
      isReadyToPayPromise.then(function(response) {
        PayFrameHelper.postMessage({
          "eventType": PostMessageEventType.LOG_IS_READY_TO_PAY_API,
          "clientLatencyStartMs": startTimeMs,
          "isReadyToPayApiResponse": response
        });
        return response;
      });
      return isReadyToPayPromise;
    };
    _proto75.isReadyToPay_ = function isReadyToPay_(isReadyToPayRequest) {
      if (this.upiHandler_.isUpiRequest(isReadyToPayRequest)) {
        return this.upiHandler_.isReadyToPay(isReadyToPayRequest);
      }
      if (chromeSupportsPaymentRequest() && !isNativeDisabledInRequest(isReadyToPayRequest)) {
        if (isReadyToPayRequest.apiVersion >= 2) {
          return this.isReadyToPayApiV2ForChromePaymentRequest_(isReadyToPayRequest);
        } else {
          var _webPromise = this.webActivityDelegate_.isReadyToPay(isReadyToPayRequest);
          var nativePromise = this.delegate_.isReadyToPay(isReadyToPayRequest);
          if (doesMerchantSupportOnlyTokenizedCards(isReadyToPayRequest) && !chromeSupportsPaymentHandler()) {
            return nativePromise;
          }
          return nativePromise.then(function() {
            return _webPromise;
          });
        }
      }
      var webPromise = this.webActivityDelegate_.isReadyToPay(isReadyToPayRequest);
      return webPromise;
    };
    _proto75.isReadyToPayApiV2ForChromePaymentRequest_ = function isReadyToPayApiV2ForChromePaymentRequest_(isReadyToPayRequest) {
      var defaultPromise = Promise.resolve({
        "result": false
      });
      if (isReadyToPayRequest.existingPaymentMethodRequired) {
        defaultPromise = Promise.resolve({
          "result": false,
          "paymentMethodPresent": false
        });
      }
      var nativePromise = defaultPromise;
      if (apiV2DoesMerchantSupportSpecifiedCardType(isReadyToPayRequest, Constants.AuthMethod.CRYPTOGRAM_3DS)) {
        var nativeRtpRequest = JSON.parse(JSON.stringify(isReadyToPayRequest));
        for (var i = 0; i < nativeRtpRequest.allowedPaymentMethods.length; i++) {
          if (nativeRtpRequest.allowedPaymentMethods[i].type == Constants.PaymentMethod.CARD) {
            nativeRtpRequest.allowedPaymentMethods[i].parameters["allowedAuthMethods"] = [Constants.AuthMethod.CRYPTOGRAM_3DS];
          }
        }
        nativePromise = this.delegate_.isReadyToPay(nativeRtpRequest);
      }
      var webPromise = defaultPromise;
      if (apiV2DoesMerchantSupportSpecifiedCardType(isReadyToPayRequest, Constants.AuthMethod.PAN_ONLY)) {
        webPromise = this.webActivityDelegate_.isReadyToPay(isReadyToPayRequest);
      }
      if (chromeSupportsPaymentHandler()) {
        return nativePromise.then(function() {
          return webPromise;
        });
      }
      return nativePromise.then(function(nativeResult) {
        if ((nativeResult && nativeResult["result"]) == true) {
          return nativeResult;
        }
        return webPromise;
      });
    };
    _proto75.prefetchPaymentData = function prefetchPaymentData(paymentDataRequest) {
      var errorMessage = validateSecureContext() || validatePaymentDataRequest(paymentDataRequest);
      if (errorMessage) {
        PaymentsAsyncClient2.logDevErrorToConsole_("prefetchPaymentData", errorMessage);
        return;
      }
      this.assignInternalParams_(paymentDataRequest);
      if (chromeSupportsPaymentRequest() && !isNativeDisabledInRequest(paymentDataRequest)) {
        this.delegate_.prefetchPaymentData(paymentDataRequest);
      } else {
        this.webActivityDelegate_.prefetchPaymentData(paymentDataRequest);
      }
    };
    _proto75.loadPaymentData = function loadPaymentData(paymentDataRequest) {
      var _this70 = this;
      PayFrameHelper.postMessage({
        "eventType": PostMessageEventType.LOG_BUTTON_CLICK
      });
      var errorMessage = validateSecureContext() || validatePaymentDataRequest(paymentDataRequest);
      this.buyFlowMode_ = paymentDataRequest && paymentDataRequest.swg ? BuyFlowMode.SUBSCRIBE_WITH_GOOGLE : BuyFlowMode.PAY_WITH_GOOGLE;
      if (errorMessage) {
        this.onPaymentResponse_(new Promise(function(resolve, reject) {
          PayFrameHelper.postMessage({
            "eventType": PostMessageEventType.LOG_LOAD_PAYMENT_DATA_API,
            "error": PublicErrorCode.DEVELOPER_ERROR,
            "buyFlowMode": _this70.buyFlowMode_
          });
          PaymentsAsyncClient2.logDevErrorToConsole_("loadPaymentData", errorMessage);
          reject({
            "statusCode": Constants.ResponseStatus.DEVELOPER_ERROR,
            "statusMessage": errorMessage
          });
        }));
        return;
      }
      var upiPaymentMethod = getUpiPaymentMethod(paymentDataRequest);
      if (upiPaymentMethod) {
        this.upiHandler_.loadPaymentData(paymentDataRequest, upiPaymentMethod, this.onResult_.bind(this));
        return;
      }
      this.loadPaymentDataApiStartTimeMs_ = Date.now();
      this.assignInternalParams_(paymentDataRequest);
      if (chromeSupportsPaymentHandler() || isNativeDisabledInRequest(paymentDataRequest)) {
        this.webActivityDelegate_.loadPaymentData(paymentDataRequest);
      } else {
        this.delegate_.loadPaymentData(paymentDataRequest);
      }
    };
    PaymentsAsyncClient2.logDevErrorToConsole_ = function logDevErrorToConsole_(apiName, errorMessage) {
      console.error("DEVELOPER_ERROR in " + apiName + " : " + errorMessage);
    };
    _proto75.createButton = function createButton(options) {
      if (options === void 0) {
        options = {};
      }
      var button = null;
      var startTimeMs = Date.now();
      PayFrameHelper.postMessage({
        "eventType": PostMessageEventType.LOG_RENDER_BUTTON,
        "clientLatencyStartMs": startTimeMs
      });
      return button;
    };
    _proto75.handleMessageEvent_ = function handleMessageEvent_(e) {
      if (this.isInTrustedDomain_()) {
        if (e.data["name"] === "logPaymentData") {
          PayFrameHelper.postMessage(e.data["data"]);
        }
      }
    };
    _proto75.isInTrustedDomain_ = function isInTrustedDomain_() {
      return TRUSTED_DOMAINS.indexOf(window.location.hostname) != -1;
    };
    _proto75.onResult_ = function onResult_(response) {
      var _this71 = this;
      response.then(function(result) {
        PayFrameHelper.postMessage({
          "eventType": PostMessageEventType.LOG_LOAD_PAYMENT_DATA_API,
          "clientLatencyStartMs": _this71.loadPaymentDataApiStartTimeMs_,
          "buyFlowMode": _this71.buyFlowMode_
        });
      }).catch(function(result) {
        if (result["errorCode"]) {
          PayFrameHelper.postMessage({
            "eventType": PostMessageEventType.LOG_LOAD_PAYMENT_DATA_API,
            "error": result["errorCode"],
            "buyFlowMode": _this71.buyFlowMode_
          });
        } else {
          PayFrameHelper.postMessage({
            "eventType": PostMessageEventType.LOG_LOAD_PAYMENT_DATA_API,
            "error": PublicErrorCode.BUYER_CANCEL,
            "buyFlowMode": _this71.buyFlowMode_
          });
        }
      });
      this.onPaymentResponse_(response);
    };
    _proto75.assignInternalParams_ = function assignInternalParams_(paymentDataRequest) {
      var internalParam = {
        "startTimeMs": Date.now(),
        "googleTransactionId": PaymentsAsyncClient2.googleTransactionId_
      };
      paymentDataRequest["i"] = paymentDataRequest["i"] ? Object.assign(internalParam, paymentDataRequest["i"]) : internalParam;
      return paymentDataRequest;
    };
    return PaymentsAsyncClient2;
  }();
  function isNativeDisabledInRequest(request) {
    return (request["i"] && request["i"]["disableNative"]) === true;
  }
  var Preconnect = /* @__PURE__ */ function() {
    function Preconnect2(doc) {
      this.doc_ = doc;
    }
    var _proto76 = Preconnect2.prototype;
    _proto76.preconnect = function preconnect(url) {
      this.pre_(url, "preconnect");
    };
    _proto76.dnsPrefetch = function dnsPrefetch(url) {
      this.pre_(url, "dns-prefetch");
    };
    _proto76.prefetch = function prefetch(url) {
      this.pre_(url, "preconnect prefetch");
    };
    _proto76.preload = function preload(url, as) {
      this.pre_(url, "preconnect preload", as);
    };
    _proto76.pre_ = function pre_(url, rel, as) {
      var linkEl = createElement(this.doc_, "link", {
        "rel": rel,
        "href": url
      });
      if (as) {
        linkEl.setAttribute("as", as);
      }
      this.doc_.head.appendChild(linkEl);
    };
    return Preconnect2;
  }();
  var REDIRECT_STORAGE_KEY = "subscribe.google.com:rk";
  var PAY_ORIGIN = {
    "PRODUCTION": "https://pay.google.com",
    "SANDBOX": "https://pay.sandbox.google.com"
  };
  function payUrl() {
    return feCached(PAY_ORIGIN[getSwgMode().payEnv] + "/gp/p/ui/pay");
  }
  var PayClient = /* @__PURE__ */ function() {
    function PayClient2(deps) {
      this.win_ = deps.win();
      this.activityPorts_ = deps.activities();
      this.responseCallback_ = null;
      this.request_ = null;
      this.response_ = null;
      this.analytics_ = deps.analytics();
      this.redirectVerifierHelper_ = new RedirectVerifierHelper(this.win_);
      this.client_ = null;
      this.preconnect_ = new Preconnect(this.win_.document);
      if (isExperimentOn2(this.win_, ExperimentFlags.PAY_CLIENT_REDIRECT) && this.pageIsInitializedFromPayRedirect_()) {
        this.preconnect(this.preconnect_);
        this.initializePaymentsClient_();
      }
      this.redirectVerifierHelper_.prepare();
      this.eventManager_ = deps.eventManager();
    }
    var _proto77 = PayClient2.prototype;
    _proto77.createClient_ = function createClient_(options, googleTransactionId2, handler) {
      PaymentsAsyncClient.googleTransactionId_ = googleTransactionId2;
      return new PaymentsAsyncClient(options, handler, false, this.activityPorts_.getOriginalWebActivityPorts());
    };
    _proto77.preconnect = function preconnect(pre) {
      pre.prefetch(payUrl());
      pre.prefetch("https://payments.google.com/payments/v4/js/integrator.js?ss=md");
      pre.prefetch("https://clients2.google.com/gr/gr_full_2.0.6.js");
    };
    _proto77.initializePaymentsClient_ = function initializePaymentsClient_() {
      this.client_ = this.createClient_({
        environment: getSwgMode().payEnv,
        "i": {
          "redirectKey": this.redirectVerifierHelper_.restoreKey()
        }
      }, this.analytics_.getTransactionId(), this.handleResponse_.bind(this));
    };
    _proto77.pageIsInitializedFromPayRedirect_ = function pageIsInitializedFromPayRedirect_() {
      var hash2 = this.win_.location.hash;
      var hasRedirectEncryptedCallbackData = /redirectEncryptedCallbackData/.test(hash2);
      var hasSwgRequest = /swgRequest/.test(hash2);
      return hasRedirectEncryptedCallbackData && hasSwgRequest;
    };
    _proto77.getType = function getType() {
      return "PAYJS";
    };
    _proto77.start = function start(paymentRequest, options) {
      var _this72 = this;
      if (options === void 0) {
        options = {};
      }
      this.request_ = paymentRequest;
      if (!this.client_) {
        this.preconnect(this.preconnect_);
        this.initializePaymentsClient_();
      }
      if (options.forceRedirect) {
        paymentRequest = Object.assign(paymentRequest, {
          "forceRedirect": options.forceRedirect || false
        });
      }
      setInternalParam(paymentRequest, "disableNative", options.forceDisableNative || this.win_ != this.top_());
      var resolver = null;
      var promise = new Promise(function(resolve) {
        return resolver = resolve;
      });
      this.redirectVerifierHelper_.useVerifier(function(verifier) {
        if (verifier) {
          setInternalParam(paymentRequest, "redirectVerifier", verifier);
        }
        if (options.forceRedirect) {
          var client = _this72.client_;
          _this72.eventManager_.getReadyPromise().then(function() {
            _this72.analytics_.getLoggingPromise().then(function() {
              client.loadPaymentData(paymentRequest);
              resolver(true);
            });
          });
        } else {
          _this72.client_.loadPaymentData(paymentRequest);
          resolver(true);
        }
      });
      return promise;
    };
    _proto77.onResponse = function onResponse(callback) {
      var _this73 = this;
      this.responseCallback_ = callback;
      var response = this.response_;
      if (response) {
        resolvedPromise().then(function() {
          if (response) {
            callback(_this73.convertResponse_(response, _this73.request_));
          }
        });
      }
    };
    _proto77.handleResponse_ = function handleResponse_(responsePromise) {
      this.response_ = responsePromise;
      if (this.responseCallback_) {
        this.responseCallback_(this.convertResponse_(this.response_, this.request_));
      }
    };
    _proto77.convertResponse_ = function convertResponse_(response, request) {
      var _this74 = this;
      return response.then(function(res) {
        if (request) {
          res["paymentRequest"] = request;
        }
        return res;
      }).catch(function(reason) {
        if (typeof reason == "object" && reason["statusCode"] == "CANCELED") {
          var error = createCancelError(_this74.win_);
          if (request) {
            error["productType"] = request["i"]["productType"];
          } else {
            error["productType"] = null;
          }
          return Promise.reject(error);
        }
        return Promise.reject(reason);
      });
    };
    _proto77.top_ = function top_() {
      return this.win_.top;
    };
    return PayClient2;
  }();
  var RedirectVerifierHelper = /* @__PURE__ */ function() {
    function RedirectVerifierHelper2(win) {
      this.win_ = win;
      this.pairCreated_ = false;
      this.pair_ = null;
      this.pairPromise_ = null;
    }
    var _proto78 = RedirectVerifierHelper2.prototype;
    _proto78.prepare = function prepare() {
      return this.getOrCreatePair_(function() {
      });
    };
    _proto78.useVerifier = function useVerifier(callback) {
      var _this75 = this;
      this.getOrCreatePair_(function(pair) {
        if (pair) {
          try {
            _this75.win_.localStorage.setItem(REDIRECT_STORAGE_KEY, pair.key);
          } catch (e) {
            pair = null;
          }
        }
        callback(pair && pair.verifier || null);
      });
    };
    _proto78.restoreKey = function restoreKey() {
      try {
        return this.win_.localStorage && this.win_.localStorage.getItem(REDIRECT_STORAGE_KEY) || null;
      } catch (e) {
        return null;
      }
    };
    _proto78.getOrCreatePair_ = function getOrCreatePair_(callback) {
      this.createPair_();
      if (this.pairCreated_) {
        callback(this.pair_);
      } else if (this.pairPromise_) {
        this.pairPromise_.then(function(pair) {
          return callback(pair);
        });
      }
      return this.pairPromise_;
    };
    _proto78.createPair_ = function createPair_() {
      var _this76 = this;
      if (this.pairCreated_ || this.pairPromise_) {
        return;
      }
      var supportsLocalStorage;
      try {
        supportsLocalStorage = !!this.win_.localStorage;
      } catch (e) {
        supportsLocalStorage = false;
      }
      var crypto = this.win_.crypto;
      if (supportsLocalStorage && crypto && crypto.getRandomValues && crypto.subtle && crypto.subtle.digest) {
        this.pairPromise_ = new Promise(function(resolve, reject) {
          var keyBytes = new Uint8Array(16);
          crypto.getRandomValues(keyBytes);
          var key = btoa(bytesToString(keyBytes));
          crypto.subtle.digest({
            name: "SHA-384"
          }, stringToBytes(key)).then(function(buffer2) {
            var verifier = btoa(bytesToString(new Uint8Array(buffer2)));
            resolve({
              key: key,
              verifier: verifier
            });
          }, function(reason) {
            reject(reason);
          });
        }).catch(function() {
          return null;
        }).then(function(pair) {
          _this76.pairCreated_ = true;
          _this76.pair_ = pair;
          return pair;
        });
      } else {
        this.pairCreated_ = true;
        this.pair_ = null;
      }
    };
    return RedirectVerifierHelper2;
  }();
  function setInternalParam(paymentRequest, param, value) {
    var _Object$assign;
    paymentRequest["i"] = Object.assign(paymentRequest["i"] || {}, (_Object$assign = {}, _Object$assign[param] = value, _Object$assign));
  }
  var PropensityServer = /* @__PURE__ */ function() {
    function PropensityServer2(win, deps, fetcher) {
      this.win_ = win;
      this.deps_ = deps;
      this.publicationId_ = this.deps_.pageConfig().getPublicationId();
      this.clientId_ = null;
      this.fetcher_ = fetcher;
      this.version_ = 1;
      this.deps_.eventManager().registerEventListener(this.handleClientEvent_.bind(this));
    }
    var _proto79 = PropensityServer2.prototype;
    _proto79.getDocumentCookie_ = function getDocumentCookie_() {
      return this.win_.document.cookie;
    };
    _proto79.getClientId_ = function getClientId_() {
      if (!this.clientId_) {
        var gadsmatch = this.getDocumentCookie_().match("(^|;)\\s*__gads\\s*=\\s*([^;]+)");
        this.clientId_ = gadsmatch && encodeURIComponent(gadsmatch.pop());
      }
      return this.clientId_;
    };
    _proto79.propensityUrl_ = function propensityUrl_(url) {
      url = addQueryParam(url, "u_tz", "240");
      url = addQueryParam(url, "v", String(this.version_));
      var clientId = this.getClientId_();
      if (clientId) {
        url = addQueryParam(url, "cookie", clientId);
      }
      url = addQueryParam(url, "cdm", this.win_.location.hostname);
      return url;
    };
    _proto79.sendSubscriptionState = function sendSubscriptionState(state, productsOrSkus) {
      var init = {
        method: "GET",
        credentials: "include"
      };
      var url = adsUrl("/subopt/data");
      url = addQueryParam(url, "states", this.publicationId_ + ":" + state);
      if (productsOrSkus) {
        url = addQueryParam(url, "extrainfo", productsOrSkus);
      }
      return this.fetcher_.fetch(this.propensityUrl_(url), init);
    };
    _proto79.sendEvent_ = function sendEvent_(event, context) {
      var init = {
        method: "GET",
        credentials: "include"
      };
      var url = adsUrl("/subopt/data");
      url = addQueryParam(url, "events", this.publicationId_ + ":" + event);
      if (context) {
        url = addQueryParam(url, "extrainfo", context);
      }
      return this.fetcher_.fetch(this.propensityUrl_(url), init);
    };
    _proto79.handleClientEvent_ = function handleClientEvent_(event) {
      if (event.eventOriginator === EventOriginator.SHOWCASE_CLIENT) {
        return;
      }
      if (!this.deps_.config().enablePropensity && event.eventOriginator !== EventOriginator.PROPENSITY_CLIENT) {
        return;
      }
      if (event.eventType === AnalyticsEvent.EVENT_SUBSCRIPTION_STATE) {
        this.sendSubscriptionState(event.additionalParameters["state"], event.additionalParameters["productsOrSkus"]);
        return;
      }
      var propEvent = analyticsEventToPublisherEvent(event.eventType);
      if (propEvent == null) {
        return;
      }
      var additionalParameters = event.additionalParameters;
      if (additionalParameters instanceof EventParams) {
        additionalParameters = void 0;
      }
      if (isBoolean(event.isFromUserAction)) {
        if (!isObject2(additionalParameters)) {
          additionalParameters = {};
        }
        additionalParameters["is_active"] = event.isFromUserAction;
      }
      this.sendEvent_(propEvent, JSON.stringify(additionalParameters));
    };
    _proto79.parsePropensityResponse_ = function parsePropensityResponse_(response) {
      var defaultScore = {};
      if (!response["header"]) {
        defaultScore = {
          header: {
            ok: false
          },
          body: {
            error: "No valid response"
          }
        };
        return defaultScore;
      }
      var status = response["header"];
      var scoreDetails = void 0;
      if (status["ok"]) {
        var scores = response["scores"];
        scoreDetails = [];
        for (var i = 0; i < scores.length; i++) {
          var result = scores[i];
          var scoreStatus = !!result["score"];
          var scoreDetail = void 0;
          if (scoreStatus) {
            var value = {
              value: result["score"],
              bucketed: result["score_type"] == 2
            };
            scoreDetail = {
              product: result["product"],
              score: value
            };
          } else {
            scoreDetail = {
              product: result["product"],
              error: result["error_message"]
            };
          }
          scoreDetails.push(scoreDetail);
        }
        if (scoreDetails) {
          defaultScore = {
            header: {
              ok: true
            },
            body: {
              scores: scoreDetails
            }
          };
        }
        return defaultScore;
      }
      defaultScore = {
        header: {
          ok: false
        },
        body: {
          error: response["error"]
        }
      };
      return defaultScore;
    };
    _proto79.getPropensity = function getPropensity(referrer, type) {
      var _this77 = this;
      var init = {
        method: "GET",
        credentials: "include"
      };
      var url = adsUrl("/subopt/pts?products=") + this.publicationId_ + "&type=" + type + "&ref=" + referrer;
      return this.fetcher_.fetch(this.propensityUrl_(url), init).then(function(result) {
        return result.json();
      }).then(function(response) {
        return _this77.parsePropensityResponse_(response);
      });
    };
    return PropensityServer2;
  }();
  var Propensity = /* @__PURE__ */ function() {
    function Propensity2(win, deps, fetcher) {
      this.win_ = win;
      this.propensityServer_ = new PropensityServer(win, deps, fetcher);
      this.eventManager_ = deps.eventManager();
    }
    var _proto80 = Propensity2.prototype;
    _proto80.sendSubscriptionState = function sendSubscriptionState(state, jsonProducts) {
      if (!Object.values(SubscriptionState).includes(state)) {
        throw new Error("Invalid subscription state provided");
      }
      if ((SubscriptionState.SUBSCRIBER == state || SubscriptionState.PAST_SUBSCRIBER == state) && !jsonProducts) {
        throw new Error("Entitlements must be provided for users with active or expired subscriptions");
      }
      if (jsonProducts && !isObject2(jsonProducts)) {
        throw new Error("Entitlements must be an Object");
      }
      var productsOrSkus = null;
      if (jsonProducts) {
        productsOrSkus = JSON.stringify(jsonProducts);
      }
      this.propensityServer_.sendSubscriptionState(state, productsOrSkus);
    };
    _proto80.getPropensity = function getPropensity(type) {
      if (type && !Object.values(PropensityType).includes(type)) {
        throw new Error("Invalid propensity type requested");
      }
      if (!type) {
        type = PropensityType.GENERAL;
      }
      return this.propensityServer_.getPropensity(this.win_.document.referrer, type);
    };
    _proto80.sendEvent = function sendEvent(userEvent) {
      var analyticsEvent = publisherEventToAnalyticsEvent(userEvent.name);
      var data = null;
      if (!isEnumValue2(Event, userEvent.name) || !analyticsEvent) {
        throw new Error("Invalid user event provided(" + userEvent.name + ")");
      }
      if (userEvent.data) {
        if (!isObject2(userEvent.data)) {
          throw new Error("Event data must be an Object(" + userEvent.data + ")");
        } else {
          data = {};
          Object.assign(data, userEvent.data);
        }
      }
      if (isBoolean(userEvent.active)) {
        if (!data) {
          data = {};
        }
        Object.assign(data, {
          "is_active": userEvent.active
        });
      } else if (userEvent.active != null) {
        throw new Error("Event active must be a boolean");
      }
      this.eventManager_.logEvent({
        eventType: analyticsEvent,
        eventOriginator: EventOriginator.PROPENSITY_CLIENT,
        isFromUserAction: userEvent.active,
        additionalParameters: data
      });
    };
    return Propensity2;
  }();
  var CSS2 = ".swg-dialog,.swg-toast{background-color:#fff!important;box-sizing:border-box}.swg-toast{border:none!important;bottom:0!important;max-height:46px!important;position:fixed!important;z-index:2147483647!important}@media (min-width:871px) and (min-height:641px){.swg-dialog.swg-wide-dialog{left:-435px!important;width:870px!important}}@media (max-height:640px),(max-width:640px){.swg-dialog,.swg-toast{border-top-left-radius:8px!important;border-top-right-radius:8px!important;box-shadow:0 1px 1px rgba(60,64,67,.3),0 1px 4px 1px rgba(60,64,67,.15)!important;left:-240px!important;margin-left:50vw!important;width:480px!important}}@media (min-width:641px) and (min-height:641px){.swg-dialog{background-color:transparent!important;border:none!important;left:-315px!important;margin-left:50vw!important;width:630px!important}.swg-toast{border-radius:4px!important;bottom:8px!important;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)!important;left:8px!important}}@media (max-width:480px){.swg-dialog,.swg-toast{left:0!important;margin-left:0!important;right:0!important;width:100%!important}}\n/*# sourceURL=/./src/components/dialog.css*/";
  var PREFIX = "subscribe.google.com";
  var Storage = /* @__PURE__ */ function() {
    function Storage2(win) {
      this.win_ = win;
      this.values_ = {};
    }
    var _proto81 = Storage2.prototype;
    _proto81.get = function get(key, useLocalStorage) {
      var _this78 = this;
      if (useLocalStorage === void 0) {
        useLocalStorage = false;
      }
      if (!this.values_[key]) {
        this.values_[key] = new Promise(function(resolve) {
          var storage = useLocalStorage ? _this78.win_.localStorage : _this78.win_.sessionStorage;
          if (storage) {
            try {
              resolve(storage.getItem(storageKey(key)));
            } catch (e) {
              resolve(null);
            }
          } else {
            resolve(null);
          }
        });
      }
      return this.values_[key];
    };
    _proto81.set = function set(key, value, useLocalStorage) {
      var _this79 = this;
      if (useLocalStorage === void 0) {
        useLocalStorage = false;
      }
      this.values_[key] = Promise.resolve(value);
      return new Promise(function(resolve) {
        var storage = useLocalStorage ? _this79.win_.localStorage : _this79.win_.sessionStorage;
        if (storage) {
          try {
            storage.setItem(storageKey(key), value);
          } catch (e) {
          }
        }
        resolve();
      });
    };
    _proto81.remove = function remove2(key, useLocalStorage) {
      var _this80 = this;
      if (useLocalStorage === void 0) {
        useLocalStorage = false;
      }
      delete this.values_[key];
      return new Promise(function(resolve) {
        var storage = useLocalStorage ? _this80.win_.localStorage : _this80.win_.sessionStorage;
        if (storage) {
          try {
            storage.removeItem(storageKey(key));
          } catch (e) {
          }
        }
        resolve();
      });
    };
    return Storage2;
  }();
  function storageKey(key) {
    return PREFIX + ":" + key;
  }
  var NO_PROMISE_ERR = "No account promise provided";
  var WaitForSubscriptionLookupApi = /* @__PURE__ */ function() {
    function WaitForSubscriptionLookupApi2(deps, accountPromise) {
      this.deps_ = deps;
      this.win_ = deps.win();
      this.activityPorts_ = deps.activities();
      this.dialogManager_ = deps.dialogManager();
      this.openViewPromise_ = null;
      this.accountPromise_ = accountPromise || Promise.reject(NO_PROMISE_ERR);
      this.activityIframeView_ = new ActivityIframeView(this.win_, this.activityPorts_, feUrl("/waitforsubscriptionlookupiframe"), feArgs({
        publicationId: deps.pageConfig().getPublicationId(),
        productId: deps.pageConfig().getProductId()
      }), true, true);
    }
    var _proto82 = WaitForSubscriptionLookupApi2.prototype;
    _proto82.start = function start() {
      var _this81 = this;
      this.openViewPromise_ = this.dialogManager_.openView(this.activityIframeView_);
      return this.accountPromise_.then(function(account) {
        _this81.dialogManager_.completeView(_this81.activityIframeView_);
        return account;
      }, function(reason) {
        _this81.dialogManager_.completeView(_this81.activityIframeView_);
        throw reason;
      });
    };
    return WaitForSubscriptionLookupApi2;
  }();
  var ConfiguredRuntime = /* @__PURE__ */ function() {
    function ConfiguredRuntime2(winOrDoc, pageConfig, integr, config, clientOptions) {
      var _this82 = this;
      integr = integr || {};
      integr.configPromise = integr.configPromise || resolvedPromise();
      this.eventManager_ = new ClientEventManager(integr.configPromise);
      this.doc_ = resolveDoc(winOrDoc);
      this.win_ = this.doc_.getWin();
      this.config_ = defaultConfig();
      if (isLegacyEdgeBrowser(this.win_)) {
        this.config_.windowOpenMode = WindowOpenMode.REDIRECT;
      }
      if (config) {
        this.configure_(config);
      }
      this.pageConfig_ = pageConfig;
      this.documentParsed_ = this.doc_.whenReady();
      this.jserror_ = new JsError(this.doc_);
      this.fetcher_ = integr.fetcher || new XhrFetcher(this.win_);
      this.storage_ = new Storage(this.win_);
      this.dialogManager_ = new DialogManager(this.doc_);
      this.callbacks_ = new Callbacks();
      this.lastOffersFlow_ = null;
      this.lastContributionsFlow_ = null;
      if (integr.enableGoogleAnalytics) {
        this.googleAnalyticsEventListener_ = new GoogleAnalyticsEventListener(this);
        this.googleAnalyticsEventListener_.start();
      }
      this.activityPorts_ = new ActivityPorts$1(this);
      this.analyticsService_ = new AnalyticsService(this, this.fetcher_);
      this.analyticsService_.start();
      this.payClient_ = new PayClient(this);
      this.logger_ = new Logger(this);
      this.entitlementsManager_ = new EntitlementsManager(this.win_, this.pageConfig_, this.fetcher_, this);
      this.clientConfigManager_ = new ClientConfigManager(pageConfig.getPublicationId(), this.fetcher_, clientOptions);
      this.propensityModule_ = new Propensity(this.win_, this, this.fetcher_);
      this.eventManager_.logSwgEvent(AnalyticsEvent.IMPRESSION_PAGE_LOAD, false);
      this.offersApi_ = new OffersApi(this.pageConfig_, this.fetcher_);
      this.buttonApi_ = new ButtonApi(this.doc_, Promise.resolve(this));
      var preconnect = new Preconnect(this.win_.document);
      preconnect.prefetch("https://news.google.com/swg/js/v1/loader.svg");
      preconnect.preconnect("https://www.gstatic.com/");
      preconnect.preconnect("https://fonts.googleapis.com/");
      preconnect.preconnect("https://www.google.com/");
      LinkCompleteFlow.configurePending(this);
      PayCompleteFlow.configurePending(this);
      injectStyleSheet(this.doc_, CSS2);
      this.activityPorts_.onRedirectError(function(error) {
        _this82.analyticsService_.addLabels(["redirect"]);
        _this82.eventManager_.logSwgEvent(AnalyticsEvent.EVENT_PAYMENT_FAILED, false);
        _this82.jserror_.error("Redirect error", error);
      });
    }
    var _proto83 = ConfiguredRuntime2.prototype;
    _proto83.doc = function doc() {
      return this.doc_;
    };
    _proto83.win = function win() {
      return this.win_;
    };
    _proto83.pageConfig = function pageConfig() {
      return this.pageConfig_;
    };
    _proto83.jserror = function jserror() {
      return this.jserror_;
    };
    _proto83.activities = function activities() {
      return this.activityPorts_;
    };
    _proto83.payClient = function payClient() {
      return this.payClient_;
    };
    _proto83.dialogManager = function dialogManager() {
      return this.dialogManager_;
    };
    _proto83.entitlementsManager = function entitlementsManager() {
      return this.entitlementsManager_;
    };
    _proto83.callbacks = function callbacks() {
      return this.callbacks_;
    };
    _proto83.storage = function storage() {
      return this.storage_;
    };
    _proto83.clientConfigManager = function clientConfigManager() {
      return this.clientConfigManager_;
    };
    _proto83.analytics = function analytics() {
      return this.analyticsService_;
    };
    _proto83.init = function init() {
    };
    _proto83.configure = function configure(config) {
      this.configure_(config);
    };
    _proto83.configure_ = function configure_(config) {
      var _this83 = this;
      var error = "";
      for (var k in config) {
        var v = config[k];
        switch (k) {
          case "windowOpenMode":
            if (v != WindowOpenMode.AUTO && v != WindowOpenMode.REDIRECT) {
              error = "Unknown windowOpenMode: " + v;
            }
            break;
          case "experiments":
            v.forEach(function(experiment) {
              return setExperiment(_this83.win_, experiment, true);
            });
            if (this.analytics()) {
              this.analytics().addLabels(v);
            }
            break;
          case "analyticsMode":
            if (v != AnalyticsMode.DEFAULT && v != AnalyticsMode.IMPRESSIONS) {
              error = "Unknown analytics mode: " + v;
            }
            break;
          case "enableSwgAnalytics":
            if (!isBoolean(v)) {
              error = "Unknown enableSwgAnalytics value: " + v;
            }
            break;
          case "enablePropensity":
            if (!isBoolean(v)) {
              error = "Unknown enablePropensity value: " + v;
            }
            break;
          default:
            error = "Unknown config property: " + k;
        }
      }
      assert2(!error, error || void 0);
      Object.assign(this.config_, config);
    };
    _proto83.config = function config() {
      return this.config_;
    };
    _proto83.reset = function reset() {
      this.entitlementsManager_.reset();
      this.closeDialog();
    };
    _proto83.clear = function clear() {
      this.entitlementsManager_.clear();
      this.closeDialog();
    };
    _proto83.closeDialog = function closeDialog() {
      this.dialogManager_.completeAll();
    };
    _proto83.start = function start() {
      if (!this.pageConfig_.getProductId() || !this.pageConfig_.isLocked()) {
        return resolvedPromise();
      }
      this.getEntitlements();
    };
    _proto83.getEntitlements = function getEntitlements(params) {
      var _this84 = this;
      return this.entitlementsManager_.getEntitlements(params).then(function(entitlements) {
        if (entitlements) {
          try {
            var skus = entitlements.entitlements.map(function(entitlement) {
              return entitlement.getSku() || "unknown subscriptionToken";
            });
            if (skus.length > 0) {
              _this84.analyticsService_.setSku(skus.join(","));
            }
          } catch (ex) {
          }
        }
        return entitlements.clone();
      });
    };
    _proto83.setOnEntitlementsResponse = function setOnEntitlementsResponse(callback) {
      this.callbacks_.setOnEntitlementsResponse(callback);
    };
    _proto83.getOffers = function getOffers(options) {
      return this.offersApi_.getOffers(options && options.productId);
    };
    _proto83.showOffers = function showOffers(options) {
      var _this85 = this;
      return this.documentParsed_.then(function() {
        var errorMessage = "The showOffers() method cannot be used to update a subscription. Use the showUpdateOffers() method instead.";
        assert2(options ? !options["oldSku"] : true, errorMessage);
        _this85.lastOffersFlow_ = new OffersFlow(_this85, options);
        return _this85.lastOffersFlow_.start();
      });
    };
    _proto83.showUpdateOffers = function showUpdateOffers(options) {
      var _this86 = this;
      assert2(isExperimentOn2(this.win_, ExperimentFlags.REPLACE_SUBSCRIPTION), "Not yet launched!");
      return this.documentParsed_.then(function() {
        var errorMessage = "The showUpdateOffers() method cannot be used for new subscribers. Use the showOffers() method instead.";
        assert2(options ? !!options["oldSku"] : false, errorMessage);
        var flow = new OffersFlow(_this86, options);
        return flow.start();
      });
    };
    _proto83.showSubscribeOption = function showSubscribeOption(options) {
      var _this87 = this;
      return this.documentParsed_.then(function() {
        var flow = new SubscribeOptionFlow(_this87, options);
        return flow.start();
      });
    };
    _proto83.showAbbrvOffer = function showAbbrvOffer(options) {
      var _this88 = this;
      return this.documentParsed_.then(function() {
        var flow = new AbbrvOfferFlow(_this88, options);
        return flow.start();
      });
    };
    _proto83.showContributionOptions = function showContributionOptions(options) {
      var _this89 = this;
      return this.documentParsed_.then(function() {
        _this89.lastContributionsFlow_ = new ContributionsFlow(_this89, options);
        return _this89.lastContributionsFlow_.start();
      });
    };
    _proto83.getLastContributionsFlow = function getLastContributionsFlow() {
      return this.lastContributionsFlow_;
    };
    _proto83.waitForSubscriptionLookup = function waitForSubscriptionLookup(accountPromise) {
      var _this90 = this;
      return this.documentParsed_.then(function() {
        var wait = new WaitForSubscriptionLookupApi(_this90, accountPromise);
        return wait.start();
      });
    };
    _proto83.setOnLoginRequest = function setOnLoginRequest(callback) {
      this.callbacks_.setOnLoginRequest(callback);
    };
    _proto83.triggerLoginRequest = function triggerLoginRequest(request) {
      this.callbacks_.triggerLoginRequest(request);
    };
    _proto83.setOnLinkComplete = function setOnLinkComplete(callback) {
      this.callbacks_.setOnLinkComplete(callback);
    };
    _proto83.linkAccount = function linkAccount(params) {
      var _this91 = this;
      if (params === void 0) {
        params = {};
      }
      return this.documentParsed_.then(function() {
        return new LinkbackFlow(_this91).start(params);
      });
    };
    _proto83.saveSubscription = function saveSubscription(saveSubscriptionRequestCallback) {
      var _this92 = this;
      return this.documentParsed_.then(function() {
        return new LinkSaveFlow(_this92, saveSubscriptionRequestCallback).start();
      });
    };
    _proto83.showLoginPrompt = function showLoginPrompt() {
      var _this93 = this;
      return this.documentParsed_.then(function() {
        return new LoginPromptApi(_this93).start();
      });
    };
    _proto83.showLoginNotification = function showLoginNotification() {
      var _this94 = this;
      return this.documentParsed_.then(function() {
        return new LoginNotificationApi(_this94).start();
      });
    };
    _proto83.setOnNativeSubscribeRequest = function setOnNativeSubscribeRequest(callback) {
      this.callbacks_.setOnSubscribeRequest(callback);
    };
    _proto83.setOnSubscribeResponse = function setOnSubscribeResponse(callback) {
      this.callbacks_.setOnSubscribeResponse(callback);
    };
    _proto83.setOnPaymentResponse = function setOnPaymentResponse(callback) {
      this.callbacks_.setOnPaymentResponse(callback);
    };
    _proto83.subscribe = function subscribe(sku) {
      var _this95 = this;
      var errorMessage = "The subscribe() method can only take a sku as its parameter; for subscription updates please use the updateSubscription() method";
      assert2(typeof sku === "string", errorMessage);
      return this.documentParsed_.then(function() {
        return new PayStartFlow(_this95, {
          "skuId": sku
        }).start();
      });
    };
    _proto83.updateSubscription = function updateSubscription(subscriptionRequest) {
      var _this96 = this;
      assert2(isExperimentOn2(this.win_, ExperimentFlags.REPLACE_SUBSCRIPTION), "Not yet launched!");
      var errorMessage = "The updateSubscription() method should be used for subscription updates; for new subscriptions please use the subscribe() method";
      assert2(subscriptionRequest ? subscriptionRequest["oldSku"] : false, errorMessage);
      return this.documentParsed_.then(function() {
        return new PayStartFlow(_this96, subscriptionRequest).start();
      });
    };
    _proto83.setOnContributionResponse = function setOnContributionResponse(callback) {
      this.callbacks_.setOnContributionResponse(callback);
    };
    _proto83.contribute = function contribute(skuOrSubscriptionRequest) {
      var _this97 = this;
      var request = typeof skuOrSubscriptionRequest == "string" ? {
        "skuId": skuOrSubscriptionRequest
      } : skuOrSubscriptionRequest;
      return this.documentParsed_.then(function() {
        return new PayStartFlow(_this97, request, ProductType.UI_CONTRIBUTION).start();
      });
    };
    _proto83.completeDeferredAccountCreation = function completeDeferredAccountCreation(options) {
      var _this98 = this;
      return this.documentParsed_.then(function() {
        return new DeferredAccountFlow(_this98, options || null).start();
      });
    };
    _proto83.setOnFlowStarted = function setOnFlowStarted(callback) {
      this.callbacks_.setOnFlowStarted(callback);
    };
    _proto83.setOnFlowCanceled = function setOnFlowCanceled(callback) {
      this.callbacks_.setOnFlowCanceled(callback);
    };
    _proto83.createButton = function createButton(optionsOrCallback, callback) {
      return this.buttonApi_.create(optionsOrCallback, callback);
    };
    _proto83.attachButton = function attachButton(button, optionsOrCallback, callback) {
      this.buttonApi_.attach(button, optionsOrCallback, callback);
    };
    _proto83.attachSmartButton = function attachSmartButton(button, optionsOrCallback, callback) {
      assert2(isExperimentOn2(this.win_, ExperimentFlags.SMARTBOX), "Not yet launched!");
      this.buttonApi_.attachSmartButton(this, button, optionsOrCallback, callback);
    };
    _proto83.getPropensityModule = function getPropensityModule() {
      return Promise.resolve(this.propensityModule_);
    };
    _proto83.eventManager = function eventManager() {
      return this.eventManager_;
    };
    _proto83.getLastOffersFlow = function getLastOffersFlow() {
      return this.lastOffersFlow_;
    };
    _proto83.getEventManager = function getEventManager() {
      return Promise.resolve(this.eventManager_);
    };
    _proto83.getLogger = function getLogger() {
      return Promise.resolve(this.logger_);
    };
    _proto83.setShowcaseEntitlement = function setShowcaseEntitlement(entitlement) {
      if (!entitlement || !isSecure(this.win().location) || !wasReferredByGoogle(parseUrl(this.win().document.referrer)) || !queryStringHasFreshGaaParams(this.win().location.search, true)) {
        return resolvedPromise();
      }
      var eventsToLog = showcaseEventToAnalyticsEvents(entitlement.entitlement) || [];
      var params = new EventParams();
      params.setIsUserRegistered(entitlement.isUserRegistered);
      for (var i = 0; i < eventsToLog.length; i++) {
        this.eventManager().logEvent({
          eventType: eventsToLog[i],
          eventOriginator: EventOriginator.SHOWCASE_CLIENT,
          isFromUserAction: false,
          additionalParameters: params
        });
      }
      return resolvedPromise();
    };
    _proto83.consumeShowcaseEntitlementJwt = function consumeShowcaseEntitlementJwt(showcaseEntitlementJwt, onCloseDialog) {
      var entitlements = this.entitlementsManager().parseEntitlements({
        signedEntitlements: showcaseEntitlementJwt
      });
      entitlements.consume(onCloseDialog);
    };
    _proto83.showBestAudienceAction = function showBestAudienceAction() {
      warn("Not implemented yet");
    };
    return ConfiguredRuntime2;
  }();

  // third_party/subscriptions-project/swg-gaa.js
  var _ShowcaseEvents2;
  var I18N_STRINGS = {
    "SHOWCASE_REGWALL_TITLE": {
      "bn": "Google-\u098F \u0986\u09B0\u0993 \u0985\u09A8\u09C7\u0995 \u0995\u09BF\u099B\u09C1\u09B0 \u09B8\u09C1\u09AC\u09BF\u09A7\u09BE \u09AA\u09BE\u09A8",
      "cs": "Z\xEDskejte s&nbsp;Googlem v\xEDc",
      "de": "Immer gut informiert mit Google",
      "en": "Get more with Google",
      "es": "Disfruta de m\xE1s art\xEDculos con Google",
      "es-ar": "Disfruta m\xE1s art\xEDculos con Google",
      "fr": "Plus de contenus avec Google",
      "fr-ca": "Aller plus loin avec Google",
      "hi": "Google \u0915\u0940 \u092E\u0926\u0926 \u0938\u0947 \u095B\u094D\u092F\u093E\u0926\u093E \u092E\u0941\u092B\u093C\u094D\u0924 \u0932\u0947\u0916 \u092A\u093E\u090F\u0902",
      "it": "Con Google puoi avere di pi\xF9",
      "ja": "Google \u304B\u3089\u306E\u30D7\u30EC\u30BC\u30F3\u30C8",
      "kn": "Google \u0CA8\u0CBF\u0C82\u0CA6 \u0CB9\u0CC6\u0C9A\u0CCD\u0C9A\u0CBF\u0CA8 \u0CAA\u0CCD\u0CB0\u0CAF\u0CCB\u0C9C\u0CA8 \u0CAA\u0CA1\u0CC6\u0CAF\u0CBF\u0CB0\u0CBF",
      "ml": "Google \u0D09\u0D2A\u0D2F\u0D47\u0D3E\u0D17\u0D3F\u0D1A\u0D4D\u0D1A\u0D4D \u0D15\u0D42\u0D1F\u0D41\u0D24\u0D7D \u0D2A\u0D4D\u0D30\u0D2F\u0D47\u0D3E\u0D1C\u0D28\u0D19\u0D4D\u0D19\u0D7E \u0D28\u0D47\u0D1F\u0D42",
      "mr": "Google \u0935\u093E\u092A\u0930\u0942\u0928 \u092C\u0930\u0947\u091A \u0915\u093E\u0939\u0940 \u092E\u093F\u0933\u0935\u093E",
      "nl": "Krijg meer met Google",
      "pt-br": "Veja mais com o Google",
      "pt-pt": "Obtenha mais com a Google",
      "ta": "Google \u0BAE\u0BC2\u0BB2\u0BAE\u0BCD \u0BAE\u0BC7\u0BB2\u0BC1\u0BAE\u0BCD \u0BAA\u0BB2 \u0B95\u0B9F\u0BCD\u0B9F\u0BC1\u0BB0\u0BC8\u0B95\u0BB3\u0BC8\u0BAA\u0BCD \u0BAA\u0B9F\u0BBF\u0BAF\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
      "te": "Google\u0C24\u0C4B \u0C2E\u0C30\u0C3F\u0C28\u0C4D\u0C28\u0C3F \u0C2A\u0C4D\u0C30\u0C2F\u0C4B\u0C1C\u0C28\u0C3E\u0C32\u0C28\u0C41 \u0C2A\u0C4A\u0C02\u0C26\u0C02\u0C21\u0C3F"
    },
    "SHOWCASE_REGWALL_DESCRIPTION": {
      "bn": '<strong></strong>\u098F\u0987 \u0995\u09A8\u09CD\u099F\u09C7\u09A8\u09CD\u099F \u0985\u09CD\u09AF\u09BE\u0995\u09CD\u09B8\u09C7\u09B8 \u0995\u09B0\u09BE\u09B0 \u099C\u09A8\u09CD\u09AF \u09B8\u09BE\u09A7\u09BE\u09B0\u09A3\u09A4 \u09AA\u09C7\u09AE\u09C7\u09A8\u09CD\u099F \u0995\u09B0\u09A4\u09C7 \u09B9\u09DF \u0995\u09BF\u09A8\u09CD\u09A4\u09C1 Google \u0986\u09AA\u09A8\u09BE\u0995\u09C7 \u098F\u0987 \u09A8\u09BF\u09AC\u09A8\u09CD\u09A7 \u09AB\u09CD\u09B0\u09BF\u09A4\u09C7 \u0985\u09CD\u09AF\u09BE\u0995\u09CD\u09B8\u09C7\u09B8 \u0995\u09B0\u09A4\u09C7 \u098F\u09AC\u0982 \u09B8\u09C7\u0987\u09B8\u09BE\u09A5\u09C7 \u0985\u09A8\u09C7\u0995 \u0995\u09BF\u099B\u09C1 \u09AA\u09C7\u09A4\u09C7 \u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF \u0995\u09B0\u099B\u09C7\u0964 \u098F\u0987 \u09B8\u09C1\u09AC\u09BF\u09A7\u09BE \u09AA\u09BE\u0993\u09DF\u09BE\u09B0 \u099C\u09A8\u09CD\u09AF Google \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09C7 \u0986\u09AA\u09A8\u09BE\u0995\u09C7 <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>-\u098F \u09B0\u09C7\u099C\u09BF\u09B8\u09CD\u099F\u09BE\u09B0 \u0995\u09B0\u09A4\u09C7 \u09B9\u09AC\u09C7\u0964',
      "cs": '<strong></strong>Tento obsah je obvykle zpoplatn\u011Bn, ale pokud se do publikace <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> zaregistrujete pomoc\xED \xFA\u010Dtu Google, z\xEDsk\xE1te od Googlu p\u0159\xEDstup zdarma.',
      "de": '<strong></strong>Dieser Inhalt ist normalerweise kostenpflichtig. Google gew\xE4hrt dir jedoch kostenlos Zugriff auf diesen Artikel und andere Inhalte, wenn du dich mit deinem Google-Konto bei <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> registrierst.',
      "en": '<strong></strong>This content usually requires payment, but Google is giving you free access to this article and more when you register with <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> using your Google Account.',
      "es": '<strong></strong>Normalmente, es necesario pagar para ver este contenido, pero Google te ofrece acceso gratuito a este y otros art\xEDculos si te registras en <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> con tu cuenta de Google.',
      "es-ar": '<strong></strong>Normalmente, es necesario pagar para ver este contenido, pero Google te ofrece acceso gratuito a este y otros art\xEDculos si te registras en <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> con tu Cuenta&nbsp;de&nbsp;Google.',
      "fr": '<strong></strong>Ce contenu est g\xE9n\xE9ralement payant, mais vous pouvez lire cet article et d\'autres contenus gratuitement gr\xE2ce \xE0 Google en vous inscrivant sur <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> avec votre compte Google.',
      "fr-ca": "<strong></strong>Ce contenu est g\xE9n\xE9ralement payant, mais Google vous offre un acc\xE8s gratuit \xE0 cet article et \xE0 d'autres si vous vous inscrivez \xE0 <ph name=\"PUBLICATION\"><ex>AP News</ex>{publication}</ph> \xE0 l'aide de votre compte Google.",
      "hi": '<strong></strong>\u0907\u0938 \u0915\u0949\u0928\u094D\u091F\u0947\u0902\u091F \u0915\u094B \u092A\u0922\u093C\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u092A\u0948\u0938\u0947 \u091A\u0941\u0915\u093E\u0928\u0947 \u092A\u0921\u093C\u0924\u0947 \u0939\u0948\u0902, \u0932\u0947\u0915\u093F\u0928 \u0906\u092A Google \u0915\u0940 \u092E\u0926\u0926 \u0938\u0947 \u0907\u0938 \u0932\u0947\u0916 \u0914\u0930 \u0905\u0928\u094D\u092F \u0915\u0949\u0928\u094D\u091F\u0947\u0902\u091F \u0915\u094B \u092E\u0941\u092B\u094D\u093C\u0924 \u092E\u0947\u0902 \u092A\u0922\u093C \u0938\u0915\u0924\u0947 \u0939\u0948\u0902. \u0907\u0938\u0915\u0947 \u0932\u093F\u090F, \u0906\u092A\u0915\u094B Google \u0916\u093E\u0924\u0947 \u0915\u093E \u0907\u0938\u094D\u0924\u0947\u092E\u093E\u0932 \u0915\u0930\u0915\u0947, <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> \u092E\u0947\u0902 \u0930\u091C\u093F\u0938\u094D\u091F\u0930 \u0915\u0930\u0928\u093E \u0939\u094B\u0917\u093E.',
      "it": '<strong></strong>Generalmente questi contenuti sono a pagamento, ma Google ti offre accesso gratuito a questo articolo e ad altri articoli se ti registri a <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> usando il tuo Account Google.',
      "ja": '<strong></strong>\u901A\u5E38\u3001\u3053\u306E\u8A18\u4E8B\u3092\u304A\u8AAD\u307F\u3044\u305F\u3060\u304F\u306B\u306F\u304A\u652F\u6255\u3044\u304C\u5FC5\u8981\u3067\u3059\u304C\u3001\u304A\u4F7F\u3044\u306E Google \u30A2\u30AB\u30A6\u30F3\u30C8\u3067 <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> \u306B\u767B\u9332\u3059\u308B\u3068\u3001\u3053\u306E\u8A18\u4E8B\u3092\u7121\u6599\u3067\u304A\u8AAD\u307F\u3044\u305F\u3060\u3051\u307E\u3059\u3002',
      "kn": '<strong></strong>\u0CB8\u0CBE\u0CAE\u0CBE\u0CA8\u0CCD\u0CAF\u0CB5\u0CBE\u0C97\u0CBF \u0C88 \u0CB5\u0CBF\u0CB7\u0CAF\u0C95\u0CCD\u0C95\u0CBE\u0C97\u0CBF \u0CB9\u0CA3 \u0CAA\u0CBE\u0CB5\u0CA4\u0CBF\u0CB8\u0CAC\u0CC7\u0C95\u0CBE\u0C97\u0CC1\u0CA4\u0CCD\u0CA4\u0CA6\u0CC6, \u0C86\u0CA6\u0CB0\u0CC6 \u0CA8\u0CC0\u0CB5\u0CC1 <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> \u0C97\u0CC6 \u0CA8\u0CBF\u0CAE\u0CCD\u0CAE Google \u0C96\u0CBE\u0CA4\u0CC6\u0CAF \u0CAE\u0CC2\u0CB2\u0C95 \u0CA8\u0CCB\u0C82\u0CA6\u0CBE\u0CAF\u0CBF\u0CB8\u0CBF\u0C95\u0CCA\u0C82\u0CA1\u0CBE\u0C97 Google \u0C88 \u0CB2\u0CC7\u0C96\u0CA8 \u0CAE\u0CA4\u0CCD\u0CA4\u0CC1 \u0C87\u0CA8\u0CCD\u0CA8\u0CB7\u0CCD\u0C9F\u0CC1 \u0CB5\u0CBF\u0CB7\u0CAF\u0C97\u0CB3\u0CBF\u0C97\u0CC6 \u0CA8\u0CBF\u0CAE\u0C97\u0CC6 \u0C89\u0C9A\u0CBF\u0CA4\u0CB5\u0CBE\u0CA6 \u0CAA\u0CCD\u0CB0\u0CB5\u0CC7\u0CB6\u0CB5\u0CA8\u0CCD\u0CA8\u0CC1 \u0CA8\u0CC0\u0CA1\u0CC1\u0CA4\u0CCD\u0CA4\u0CA6\u0CC6.',
      "ml": '<strong></strong>\u0D38\u0D3E\u0D27\u0D3E\u0D30\u0D23 \u0D08 \u0D09\u0D33\u0D4D\u0D33\u0D1F\u0D15\u0D4D\u0D15\u0D24\u0D4D\u0D24\u0D3F\u0D28\u0D4D \u0D2A\u0D23\u0D02 \u0D28\u0D7D\u0D15\u0D47\u0D23\u0D4D\u0D1F\u0D24\u0D41\u0D23\u0D4D\u0D1F\u0D4D, \u0D0E\u0D28\u0D4D\u0D28\u0D3E\u0D7D Google \u0D05\u0D15\u0D4D\u0D15\u0D57\u0D23\u0D4D\u0D1F\u0D4D \u0D09\u0D2A\u0D2F\u0D47\u0D3E\u0D17\u0D3F\u0D1A\u0D4D\u0D1A\u0D4D <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> \u0D0E\u0D28\u0D4D\u0D28\u0D24\u0D3F\u0D7D \u0D30\u0D1C\u0D3F\u0D38\u0D4D\u200C\u0D31\u0D4D\u0D31\u0D7C \u0D1A\u0D46\u0D2F\u0D4D\u0D2F\u0D41\u0D2E\u0D4D\u0D2A\u0D47\u0D3E\u0D7E, \u0D08 \u0D32\u0D47\u0D16\u0D28\u0D24\u0D4D\u0D24\u0D3F\u0D32\u0D47\u0D15\u0D4D\u0D15\u0D41\u0D02 \u0D2E\u0D31\u0D4D\u0D31\u0D41\u0D02 Google \u0D28\u0D3F\u0D19\u0D4D\u0D19\u0D7E\u0D15\u0D4D\u0D15\u0D4D \u0D38\u0D57\u0D1C\u0D28\u0D4D\u0D2F \u0D06\u0D15\u0D4D\u200C\u0D38\u0D38\u0D4D \u0D28\u0D7D\u0D15\u0D41\u0D28\u0D4D\u0D28\u0D41.',
      "mr": '<strong></strong>\u092F\u093E \u0906\u0936\u092F\u093E\u0938\u093E\u0920\u0940 \u0938\u093E\u092E\u093E\u0928\u094D\u092F\u0924\u0903 \u092A\u0947\u092E\u0947\u0902\u091F \u0906\u0935\u0936\u094D\u092F\u0915 \u0905\u0938\u0924\u0947 \u092A\u0923 \u0924\u0941\u092E\u094D\u0939\u0940 \u0924\u0941\u092E\u091A\u0947 Google \u0916\u093E\u0924\u0947 \u0935\u093E\u092A\u0930\u0942\u0928 <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> \u092E\u0927\u094D\u092F\u0947 \u0928\u094B\u0902\u0926\u0923\u0940 \u0915\u0930\u0924\u093E \u0924\u0947\u0935\u094D\u0939\u093E, Google \u0924\u0941\u092E\u094D\u0939\u093E\u0932\u093E \u092F\u093E \u0932\u0947\u0916\u093E\u091A\u093E \u0906\u0923\u093F \u0906\u0923\u0916\u0940 \u092C\u0931\u094D\u092F\u093E\u091A \u0906\u0936\u092F\u093E\u091A\u093E \u0935\u093F\u0928\u093E\u092E\u0942\u0932\u094D\u092F \u0972\u0915\u094D\u0938\u0947\u0938 \u0926\u0947\u0924\u0947.',
      "nl": '<strong></strong>Voor deze content moet je eigenlijk betalen. Maar Google geeft je kosteloos toegang tot dit artikel en andere content als je je registreert bij <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> via je Google-account.',
      "pt-br": '<strong></strong>Normalmente, \xE9 preciso pagar por este conte\xFAdo. Por\xE9m, basta voc\xEA se registrar na publica\xE7\xE3o <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> usando sua Conta do Google para ter acesso gratuito a esta mat\xE9ria e muito mais.',
      "pt-pt": '<strong></strong>Geralmente, este conte\xFAdo requer um pagamento, mas a Google concede-lhe acesso gratuito a este artigo e muito mais ao registar-se na publica\xE7\xE3o <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> com a sua Conta Google.',
      "ta": '<strong></strong>\u0BB5\u0BB4\u0B95\u0BCD\u0B95\u0BAE\u0BBE\u0B95 \u0B87\u0BA8\u0BCD\u0BA4 \u0B89\u0BB3\u0BCD\u0BB3\u0B9F\u0B95\u0BCD\u0B95\u0BA4\u0BCD\u0BA4\u0BC8 \u0BB5\u0BBE\u0B9A\u0BBF\u0B95\u0BCD\u0B95 \u0B95\u0B9F\u0BCD\u0B9F\u0BA3\u0BAE\u0BCD \u0B9A\u0BC6\u0BB2\u0BC1\u0BA4\u0BCD\u0BA4 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BBF\u0BAF\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD. \u0B86\u0BA9\u0BBE\u0BB2\u0BCD <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> \u0B87\u0BB2\u0BCD \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD Google \u0B95\u0BA3\u0B95\u0BCD\u0B95\u0BC8\u0BAA\u0BCD \u0BAA\u0BAF\u0BA9\u0BCD\u0BAA\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BBF\u0BAA\u0BCD \u0BAA\u0BA4\u0BBF\u0BB5\u0BC1\u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BC1\u0BAE\u0BCD\u0BAA\u0BCB\u0BA4\u0BC1 \u0B87\u0BA8\u0BCD\u0BA4\u0B95\u0BCD \u0B95\u0B9F\u0BCD\u0B9F\u0BC1\u0BB0\u0BC8\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD \u0BAE\u0BC7\u0BB2\u0BC1\u0BAE\u0BCD \u0BAA\u0BB2\u0BB5\u0BB1\u0BCD\u0BB1\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD Google \u0B87\u0BB2\u0BB5\u0B9A \u0B85\u0BA3\u0BC1\u0B95\u0BB2\u0BC8 \u0BB5\u0BB4\u0B99\u0BCD\u0B95\u0BC1\u0B95\u0BBF\u0BB1\u0BA4\u0BC1.',
      "te": '<strong></strong>\u0C08 \u0C15\u0C02\u0C1F\u0C46\u0C02\u0C1F\u0C4D\u200C\u0C15\u0C41 \u0C2E\u0C40\u0C30\u0C41 \u0C38\u0C3E\u0C27\u0C3E\u0C30\u0C23\u0C02\u0C17\u0C3E \u0C2A\u0C47\u0C2E\u0C46\u0C02\u0C1F\u0C4D \u0C1A\u0C47\u0C2F\u0C3E\u0C32\u0C4D\u0C38\u0C3F \u0C09\u0C02\u0C1F\u0C41\u0C02\u0C26\u0C3F, \u0C15\u0C3E\u0C28\u0C40 \u0C2E\u0C40\u0C30\u0C41 Google \u0C16\u0C3E\u0C24\u0C3E\u0C28\u0C41 \u0C09\u0C2A\u0C2F\u0C4B\u0C17\u0C3F\u0C02\u0C1A\u0C3F <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>\u0C24\u0C4B \u0C30\u0C3F\u0C1C\u0C3F\u0C38\u0C4D\u0C1F\u0C30\u0C4D \u0C1A\u0C47\u0C38\u0C41\u0C15\u0C41\u0C28\u0C4D\u0C28\u0C2A\u0C4D\u0C2A\u0C41\u0C21\u0C41, \u0C08 \u0C35\u0C3E\u0C30\u0C4D\u0C24\u0C3E \u0C15\u0C25\u0C28\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u0C07\u0C02\u0C15\u0C3E \u0C2E\u0C30\u0C46\u0C28\u0C4D\u0C28\u0C4B \u0C35\u0C3E\u0C1F\u0C3F\u0C15\u0C3F Google, \u0C09\u0C1A\u0C3F\u0C24 \u0C2F\u0C3E\u0C15\u0C4D\u0C38\u0C46\u0C38\u0C4D\u200C\u0C28\u0C41 \u0C07\u0C38\u0C4D\u0C24\u0C41\u0C02\u0C26\u0C3F.'
    },
    "SHOWCASE_REGWALL_PUBLISHER_SIGN_IN_BUTTON": {
      "bn": "\u0986\u09AA\u09A8\u09BE\u09B0 \u0995\u09BF \u0986\u0997\u09C7 \u09A5\u09C7\u0995\u09C7\u0987 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u0986\u099B\u09C7?",
      "cs": "U\u017E m\xE1te \xFA\u010Det?",
      "de": "Du hast bereits ein Konto?",
      "en": "Already have an account?",
      "es": "\xBFYa tienes una cuenta?",
      "es-ar": "\xBFYa tienes una cuenta?",
      "fr": "Vous avez d\xE9j\xE0 un compte&nbsp;?",
      "fr-ca": "Vous avez d\xE9j\xE0 un compte?",
      "hi": "\u0915\u094D\u092F\u093E \u0906\u092A\u0915\u0947 \u092A\u093E\u0938 \u092A\u0939\u0932\u0947 \u0938\u0947 \u0915\u094B\u0908 \u092A\u094D\u0930\u0915\u093E\u0936\u0915 \u0916\u093E\u0924\u093E \u0939\u0948?",
      "it": "Hai gi\xE0 un account?",
      "ja": "\u3059\u3067\u306B\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u304A\u6301\u3061\u3067\u3059\u304B\uFF1F",
      "kn": "\u0C88\u0C97\u0CBE\u0C97\u0CB2\u0CC7 \u0C96\u0CBE\u0CA4\u0CC6\u0CAF\u0CCA\u0C82\u0CA6\u0CA8\u0CCD\u0CA8\u0CC1 \u0CB9\u0CCA\u0C82\u0CA6\u0CBF\u0CA6\u0CCD\u0CA6\u0CC0\u0CB0\u0CBE?",
      "ml": "\u0D2E\u0D41\u0D2E\u0D4D\u0D2A\u0D47 \u0D05\u0D15\u0D4D\u0D15\u0D57\u0D23\u0D4D\u0D1F\u0D41\u0D23\u0D4D\u0D1F\u0D4B?",
      "mr": "\u0906\u0927\u0940\u092A\u093E\u0938\u0942\u0928 \u0916\u093E\u0924\u0947 \u0906\u0939\u0947?",
      "nl": "Heb je al een account?",
      "pt-br": "J\xE1 tem uma conta?",
      "pt-pt": "J\xE1 tem uma conta?",
      "ta": "\u0B8F\u0BB1\u0BCD\u0B95\u0BC6\u0BA9\u0BB5\u0BC7 \u0B95\u0BA3\u0B95\u0BCD\u0B95\u0BC1 \u0B89\u0BB3\u0BCD\u0BB3\u0BA4\u0BBE?",
      "te": "\u0C07\u0C2A\u0C4D\u0C2A\u0C1F\u0C3F\u0C15\u0C47 \u0C16\u0C3E\u0C24\u0C3E \u0C09\u0C02\u0C26\u0C3E?"
    },
    "SHOWCASE_REGWALL_GOOGLE_SIGN_IN_BUTTON": {
      "bn": "Google \u09A6\u09BF\u09DF\u09C7 \u09B8\u09BE\u0987\u09A8-\u0987\u09A8 \u0995\u09B0\u09C1\u09A8",
      "cs": "P\u0159ihl\xE1sit se p\u0159es Google",
      "de": "\xDCber Google anmelden",
      "en": "Sign in with Google",
      "es": "Iniciar sesi\xF3n con Google",
      "es-ar": "Acceder con Google",
      "fr": "Se connecter avec Google",
      "fr-ca": "Se connecter avec Google",
      "hi": "Google \u0938\u0947 \u0938\u093E\u0907\u0928 \u0907\u0928 \u0915\u0930\u0947\u0902",
      "it": "Accedi con Google",
      "ja": "Google \u3067\u30ED\u30B0\u30A4\u30F3",
      "kn": "Google \u0C96\u0CBE\u0CA4\u0CC6 \u0CAC\u0CB3\u0CB8\u0CBF\u0C95\u0CCA\u0C82\u0CA1\u0CC1 \u0CB8\u0CC8\u0CA8\u0CCD \u0C87\u0CA8\u0CCD \u0CAE\u0CBE\u0CA1\u0CBF",
      "ml": "Google \u0D09\u0D2A\u0D2F\u0D4B\u0D17\u0D3F\u0D1A\u0D4D\u0D1A\u0D4D \u0D38\u0D48\u0D7B \u0D07\u0D7B \u0D1A\u0D46\u0D2F\u0D4D\u0D2F\u0D41\u0D15",
      "mr": "Google \u0935\u093E\u092A\u0930\u0942\u0928 \u0938\u093E\u0907\u0928 \u0907\u0928 \u0915\u0930\u093E",
      "nl": "Inloggen met Google",
      "pt-br": "Fazer login com o Google",
      "pt-pt": "Iniciar sess\xE3o com o Google",
      "ta": "Google \u0BAE\u0BC2\u0BB2\u0BAE\u0BCD \u0B89\u0BB3\u0BCD\u0BA8\u0BC1\u0BB4\u0BC8\u0B95",
      "te": "Google\u0C24\u0C4B \u0C38\u0C48\u0C28\u0C4D \u0C07\u0C28\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F"
    },
    "SHOWCASE_REGWALL_CASL": {
      "bn": 'Review <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>\'s <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>CASL terms<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph>',
      "cs": 'Prostudujte si <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>podm\xEDnky CASL<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> publikace <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>',
      "de": '<ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>CASL-Bedingungen<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> von <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> ansehen',
      "en": 'Review <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>\'s <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>CASL terms<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph>',
      "es": 'Review <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>\'s <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>CASL terms<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph>',
      "fr": 'Consultez les <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>Conditions d\'utilisation LCAP (Loi canadienne anti-pourriel)<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> de <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>',
      "fr-ca": 'Consulter les <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>conditions d\'utilisation relatives \xE0 la Loi canadienne antipourriel (LCAP)<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> de la publication <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>',
      "hi": '<ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> \u0915\u0940 <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>\u0938\u0940\u090F\u090F\u0938\u090F\u0932 (\u0915\u0948\u0928\u0947\u0921\u093F\u092F\u0928 \u090F\u0902\u091F\u0940-\u0938\u094D\u092A\u0948\u092E \u0932\u0947\u091C\u093F\u0938\u094D\u0932\u0947\u0936\u0928) \u0938\u0947 \u091C\u0941\u095C\u0940 \u0936\u0930\u094D\u0924\u094B\u0902<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> \u0915\u0947 \u092C\u093E\u0930\u0947 \u092E\u0947\u0902 \u092A\u0922\u093C\u0947\u0902',
      "it": 'Rileggi i <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>termini della legge CASL<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> di <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>',
      "ja": '<ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> \u306E <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>CASL \u898F\u7D04<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph>\u3092\u898B\u308B',
      "kn": 'Review <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>\'s <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>CASL terms<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph>',
      "ml": 'Review <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>\'s <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>CASL terms<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph>',
      "mr": 'Review <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>\'s <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>CASL terms<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph>',
      "nl": 'Bekijk de <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>CASL-voorwaarden<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> van <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>',
      "pt-br": 'Confira os <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>termos da CASL<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> da publica\xE7\xE3o <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>',
      "pt-pt": 'Analise os <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>termos da CASL<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> da publica\xE7\xE3o <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>',
      "ta": '<ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> \u0B87\u0BA9\u0BCD <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>CASL \u0BB5\u0BBF\u0BA4\u0BBF\u0BAE\u0BC1\u0BB1\u0BC8\u0B95\u0BB3\u0BC8\u0BAA\u0BCD<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> \u0BAA\u0BBE\u0BB0\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD',
      "te": 'Review <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>\'s <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>CASL terms<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph>'
    }
  };
  function warn2(var_args) {
    console.warn.apply(console, arguments);
  }
  function parseJson3(json) {
    return JSON.parse(json);
  }
  var AnalyticsEvent2 = {
    UNKNOWN: 0,
    IMPRESSION_PAYWALL: 1,
    IMPRESSION_AD: 2,
    IMPRESSION_OFFERS: 3,
    IMPRESSION_SUBSCRIBE_BUTTON: 4,
    IMPRESSION_SMARTBOX: 5,
    IMPRESSION_SWG_BUTTON: 6,
    IMPRESSION_CLICK_TO_SHOW_OFFERS: 7,
    IMPRESSION_CLICK_TO_SHOW_OFFERS_OR_ALREADY_SUBSCRIBED: 8,
    IMPRESSION_SUBSCRIPTION_COMPLETE: 9,
    IMPRESSION_ACCOUNT_CHANGED: 10,
    IMPRESSION_PAGE_LOAD: 11,
    IMPRESSION_LINK: 12,
    IMPRESSION_SAVE_SUBSCR_TO_GOOGLE: 13,
    IMPRESSION_GOOGLE_UPDATED: 14,
    IMPRESSION_SHOW_OFFERS_SMARTBOX: 15,
    IMPRESSION_SHOW_OFFERS_SWG_BUTTON: 16,
    IMPRESSION_SELECT_OFFER_SMARTBOX: 17,
    IMPRESSION_SELECT_OFFER_SWG_BUTTON: 18,
    IMPRESSION_SHOW_CONTRIBUTIONS_SWG_BUTTON: 19,
    IMPRESSION_SELECT_CONTRIBUTION_SWG_BUTTON: 20,
    IMPRESSION_METER_TOAST: 21,
    IMPRESSION_REGWALL: 22,
    IMPRESSION_SHOWCASE_REGWALL: 23,
    IMPRESSION_SWG_SUBSCRIPTION_MINI_PROMPT: 24,
    IMPRESSION_SWG_CONTRIBUTION_MINI_PROMPT: 25,
    IMPRESSION_CONTRIBUTION_OFFERS: 26,
    IMPRESSION_TWG_COUNTER: 27,
    IMPRESSION_TWG_SITE_SUPPORTER_WALL: 28,
    IMPRESSION_TWG_PUBLICATION: 29,
    IMPRESSION_TWG_STATIC_BUTTON: 30,
    IMPRESSION_TWG_DYNAMIC_BUTTON: 31,
    IMPRESSION_TWG_STICKER_SELECTION_SCREEN: 32,
    ACTION_SUBSCRIBE: 1e3,
    ACTION_PAYMENT_COMPLETE: 1001,
    ACTION_ACCOUNT_CREATED: 1002,
    ACTION_ACCOUNT_ACKNOWLEDGED: 1003,
    ACTION_SUBSCRIPTIONS_LANDING_PAGE: 1004,
    ACTION_PAYMENT_FLOW_STARTED: 1005,
    ACTION_OFFER_SELECTED: 1006,
    ACTION_SWG_BUTTON_CLICK: 1007,
    ACTION_VIEW_OFFERS: 1008,
    ACTION_ALREADY_SUBSCRIBED: 1009,
    ACTION_NEW_DEFERRED_ACCOUNT: 1010,
    ACTION_LINK_CONTINUE: 1011,
    ACTION_LINK_CANCEL: 1012,
    ACTION_GOOGLE_UPDATED_CLOSE: 1013,
    ACTION_USER_CANCELED_PAYFLOW: 1014,
    ACTION_SAVE_SUBSCR_TO_GOOGLE_CONTINUE: 1015,
    ACTION_SAVE_SUBSCR_TO_GOOGLE_CANCEL: 1016,
    ACTION_SWG_BUTTON_SHOW_OFFERS_CLICK: 1017,
    ACTION_SWG_BUTTON_SELECT_OFFER_CLICK: 1018,
    ACTION_SWG_BUTTON_SHOW_CONTRIBUTIONS_CLICK: 1019,
    ACTION_SWG_BUTTON_SELECT_CONTRIBUTION_CLICK: 1020,
    ACTION_USER_CONSENT_DEFERRED_ACCOUNT: 1021,
    ACTION_USER_DENY_DEFERRED_ACCOUNT: 1022,
    ACTION_DEFERRED_ACCOUNT_REDIRECT: 1023,
    ACTION_GET_ENTITLEMENTS: 1024,
    ACTION_METER_TOAST_SUBSCRIBE_CLICK: 1025,
    ACTION_METER_TOAST_EXPANDED: 1026,
    ACTION_METER_TOAST_CLOSED_BY_ARTICLE_INTERACTION: 1027,
    ACTION_METER_TOAST_CLOSED_BY_SWIPE_DOWN: 1028,
    ACTION_METER_TOAST_CLOSED_BY_X_CLICKED: 1029,
    ACTION_SWG_SUBSCRIPTION_MINI_PROMPT_CLICK: 1030,
    ACTION_SWG_CONTRIBUTION_MINI_PROMPT_CLICK: 1031,
    ACTION_SWG_SUBSCRIPTION_MINI_PROMPT_CLOSE: 1032,
    ACTION_SWG_CONTRIBUTION_MINI_PROMPT_CLOSE: 1033,
    ACTION_CONTRIBUTION_OFFER_SELECTED: 1034,
    ACTION_SHOWCASE_REGWALL_GSI_CLICK: 1035,
    ACTION_SHOWCASE_REGWALL_EXISTING_ACCOUNT_CLICK: 1036,
    ACTION_SUBSCRIPTION_OFFERS_CLOSED: 1037,
    ACTION_CONTRIBUTION_OFFERS_CLOSED: 1038,
    ACTION_TWG_STATIC_CTA_CLICK: 1039,
    ACTION_TWG_DYNAMIC_CTA_CLICK: 1040,
    ACTION_TWG_SITE_LEVEL_SUPPORTER_WALL_CTA_CLICK: 1041,
    ACTION_TWG_DIALOG_SUPPORTER_WALL_CTA_CLICK: 1042,
    ACTION_TWG_COUNTER_CLICK: 1043,
    ACTION_TWG_SITE_SUPPORTER_WALL_ALL_THANKS_CLICK: 1044,
    ACTION_TWG_PAID_STICKER_SELECTED_SCREEN_CLOSE_CLICK: 1045,
    ACTION_TWG_PAID_STICKER_SELECTION_CLICK: 1046,
    ACTION_TWG_FREE_STICKER_SELECTION_CLICK: 1047,
    ACTION_TWG_MINI_SUPPORTER_WALL_CLICK: 1048,
    ACTION_TWG_CREATOR_BENEFIT_CLICK: 1049,
    ACTION_TWG_FREE_TRANSACTION_START_NEXT_BUTTON_CLICK: 1050,
    ACTION_TWG_PAID_TRANSACTION_START_NEXT_BUTTON_CLICK: 1051,
    ACTION_TWG_STICKER_SELECTION_SCREEN_CLOSE_CLICK: 1052,
    EVENT_PAYMENT_FAILED: 2e3,
    EVENT_CUSTOM: 3e3,
    EVENT_CONFIRM_TX_ID: 3001,
    EVENT_CHANGED_TX_ID: 3002,
    EVENT_GPAY_NO_TX_ID: 3003,
    EVENT_GPAY_CANNOT_CONFIRM_TX_ID: 3004,
    EVENT_GOOGLE_UPDATED: 3005,
    EVENT_NEW_TX_ID: 3006,
    EVENT_UNLOCKED_BY_SUBSCRIPTION: 3007,
    EVENT_UNLOCKED_BY_METER: 3008,
    EVENT_NO_ENTITLEMENTS: 3009,
    EVENT_HAS_METERING_ENTITLEMENTS: 3010,
    EVENT_OFFERED_METER: 3011,
    EVENT_UNLOCKED_FREE_PAGE: 3012,
    EVENT_INELIGIBLE_PAYWALL: 3013,
    EVENT_UNLOCKED_FOR_CRAWLER: 3014,
    EVENT_TWG_COUNTER_VIEW: 3015,
    EVENT_TWG_SITE_SUPPORTER_WALL_VIEW: 3016,
    EVENT_TWG_STATIC_BUTTON_VIEW: 3017,
    EVENT_TWG_DYNAMIC_BUTTON_VIEW: 3018,
    EVENT_TWG_PRE_TRANSACTION_PRIVACY_SETTING_PRIVATE: 3019,
    EVENT_TWG_POST_TRANSACTION_SETTING_PRIVATE: 3020,
    EVENT_TWG_PRE_TRANSACTION_PRIVACY_SETTING_PUBLIC: 3021,
    EVENT_TWG_POST_TRANSACTION_SETTING_PUBLIC: 3022,
    EVENT_SUBSCRIPTION_STATE: 4e3
  };
  var EventOriginator2 = {
    UNKNOWN_CLIENT: 0,
    SWG_CLIENT: 1,
    AMP_CLIENT: 2,
    PROPENSITY_CLIENT: 3,
    SWG_SERVER: 4,
    PUBLISHER_CLIENT: 5,
    SHOWCASE_CLIENT: 6
  };
  function map3(initial) {
    var obj = Object.create(null);
    if (initial) {
      Object.assign(obj, initial);
    }
    return obj;
  }
  function findInArray2(array, predicate) {
    if (!array) {
      return null;
    }
    var len = array.length || 0;
    if (len > 0) {
      for (var i = 0; i < len; i++) {
        var other = array[i];
        if (predicate(other, i, array)) {
          return other;
        }
      }
    }
    return null;
  }
  var ShowcaseEvent2 = {
    EVENT_SHOWCASE_METER_OFFERED: "EVENT_SHOWCASE_METER_OFFERED",
    EVENT_SHOWCASE_UNLOCKED_BY_SUBSCRIPTION: "EVENT_SHOWCASE_UNLOCKED_BY_SUBSCRIPTION",
    EVENT_SHOWCASE_UNLOCKED_BY_METER: "EVENT_SHOWCASE_UNLOCKED_BY_METER",
    EVENT_SHOWCASE_UNLOCKED_FREE_PAGE: "EVENT_SHOWCASE_UNLOCKED_FREE_PAGE",
    EVENT_SHOWCASE_NO_ENTITLEMENTS_REGWALL: "EVENT_SHOWCASE_NO_ENTITLEMENTS_REGWALL",
    EVENT_SHOWCASE_INELIGIBLE_PAYWALL: "EVENT_SHOWCASE_INELIGIBLE_PAYWALL",
    EVENT_SHOWCASE_NO_ENTITLEMENTS_PAYWALL: "EVENT_SHOWCASE_NO_ENTITLEMENTS_PAYWALL"
  };
  var a2;
  var cache2;
  function parseUrl2(url) {
    if (!a2) {
      a2 = self.document.createElement("a");
      cache2 = self.UrlCache || (self.UrlCache = Object.create(null));
    }
    var fromCache = cache2[url];
    if (fromCache) {
      return fromCache;
    }
    var info = parseUrlWithA2(a2, url);
    return cache2[url] = info;
  }
  function parseUrlWithA2(a3, url) {
    a3.href = url;
    if (!a3.protocol) {
      a3.href = a3.href;
    }
    var info = {
      href: a3.href,
      protocol: a3.protocol,
      host: a3.host,
      hostname: a3.hostname,
      port: a3.port == "0" ? "" : a3.port,
      pathname: a3.pathname,
      search: a3.search,
      hash: a3.hash,
      origin: ""
    };
    if (info.pathname[0] !== "/") {
      info.pathname = "/" + info.pathname;
    }
    if (info.protocol == "http:" && info.port == 80 || info.protocol == "https:" && info.port == 443) {
      info.port = "";
      info.host = info.hostname;
    }
    if (a3.origin && a3.origin != "null") {
      info.origin = a3.origin;
    } else if (info.protocol == "data:" || !info.host) {
      info.origin = info.href;
    } else {
      info.origin = info.protocol + "//" + info.host;
    }
    return info;
  }
  function parseQueryString3(query) {
    if (!query) {
      return {};
    }
    return (/^[?#]/.test(query) ? query.slice(1) : query).split("&").reduce(function(params, param) {
      var item = param.split("=");
      try {
        var key = decodeURIComponent(item[0] || "");
        var value = decodeURIComponent(item[1] || "");
        if (key) {
          params[key] = value;
        }
      } catch (err) {
        warn2("SwG could not parse a URL query param: " + item[0]);
      }
      return params;
    }, {});
  }
  function addQueryParam2(url, param, value) {
    var queryIndex = url.indexOf("?");
    var fragmentIndex = url.indexOf("#");
    var fragment = "";
    if (fragmentIndex != -1) {
      fragment = url.substring(fragmentIndex);
      url = url.substring(0, fragmentIndex);
    }
    if (queryIndex == -1) {
      url += "?";
    } else if (queryIndex < url.length - 1) {
      url += "&";
    }
    url += encodeURIComponent(param) + "=" + encodeURIComponent(value);
    return url + fragment;
  }
  parseUrl2(self.window.location.href);
  parseUrl2(self.document.referrer);
  var DEFAULT_LANGUAGE_CODE2 = "en";
  function msg2(map4, languageCodeOrElement) {
    var defaultMsg = map4[DEFAULT_LANGUAGE_CODE2];
    if (typeof map4 !== "object" || !languageCodeOrElement) {
      return defaultMsg;
    }
    var languageCode = typeof languageCodeOrElement === "string" ? languageCodeOrElement : getLanguageCodeFromElement2(languageCodeOrElement);
    languageCode = languageCode.toLowerCase();
    languageCode = languageCode.replace(/_/g, "-");
    var languageCodeSegments = languageCode.split("-");
    while (languageCodeSegments.length) {
      var key = languageCodeSegments.join("-");
      if (key in map4) {
        return map4[key];
      }
      languageCodeSegments.pop();
    }
    return defaultMsg;
  }
  function getLanguageCodeFromElement2(element) {
    if (element.lang) {
      return element.lang;
    }
    if (element.ownerDocument && element.ownerDocument.documentElement.lang) {
      return element.ownerDocument.documentElement.lang;
    }
    return DEFAULT_LANGUAGE_CODE2;
  }
  function startsWith2(string, prefix) {
    if (prefix.length > string.length) {
      return false;
    }
    return string.lastIndexOf(prefix, 0) == 0;
  }
  var propertyNameCache2;
  var vendorPrefixes2 = ["Webkit", "webkit", "Moz", "moz", "ms", "O", "o"];
  function camelCaseToTitleCase2(camelCase) {
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
  }
  function getVendorJsPropertyName_2(style, titleCase) {
    for (var i = 0; i < vendorPrefixes2.length; i++) {
      var propertyName = vendorPrefixes2[i] + titleCase;
      if (style[propertyName] !== void 0) {
        return propertyName;
      }
    }
    return "";
  }
  function getVendorJsPropertyName2(style, camelCase, bypassCache) {
    if (startsWith2(camelCase, "--")) {
      return camelCase;
    }
    if (!propertyNameCache2) {
      propertyNameCache2 = map3();
    }
    var propertyName = propertyNameCache2[camelCase];
    if (!propertyName || bypassCache) {
      propertyName = camelCase;
      if (style[camelCase] === void 0) {
        var titleCase = camelCaseToTitleCase2(camelCase);
        var prefixedPropertyName = getVendorJsPropertyName_2(style, titleCase);
        if (style[prefixedPropertyName] !== void 0) {
          propertyName = prefixedPropertyName;
        }
      }
      if (!bypassCache) {
        propertyNameCache2[camelCase] = propertyName;
      }
    }
    return propertyName;
  }
  function setImportantStyles2(element, styles) {
    for (var k in styles) {
      element.style.setProperty(getVendorJsPropertyName2(styles, k), styles[k].toString(), "important");
    }
  }
  var ShowcaseEvents2 = (_ShowcaseEvents2 = {}, _ShowcaseEvents2[ShowcaseEvent2.EVENT_SHOWCASE_METER_OFFERED] = [AnalyticsEvent2.EVENT_HAS_METERING_ENTITLEMENTS, AnalyticsEvent2.EVENT_OFFERED_METER], _ShowcaseEvents2[ShowcaseEvent2.EVENT_SHOWCASE_UNLOCKED_BY_SUBSCRIPTION] = [AnalyticsEvent2.EVENT_UNLOCKED_BY_SUBSCRIPTION], _ShowcaseEvents2[ShowcaseEvent2.EVENT_SHOWCASE_UNLOCKED_BY_METER] = [AnalyticsEvent2.EVENT_HAS_METERING_ENTITLEMENTS, AnalyticsEvent2.EVENT_UNLOCKED_BY_METER], _ShowcaseEvents2[ShowcaseEvent2.EVENT_SHOWCASE_UNLOCKED_FREE_PAGE] = [AnalyticsEvent2.EVENT_UNLOCKED_FREE_PAGE], _ShowcaseEvents2[ShowcaseEvent2.EVENT_SHOWCASE_NO_ENTITLEMENTS_REGWALL] = [AnalyticsEvent2.EVENT_NO_ENTITLEMENTS, AnalyticsEvent2.IMPRESSION_REGWALL, AnalyticsEvent2.IMPRESSION_SHOWCASE_REGWALL], _ShowcaseEvents2[ShowcaseEvent2.EVENT_SHOWCASE_NO_ENTITLEMENTS_PAYWALL] = [AnalyticsEvent2.EVENT_NO_ENTITLEMENTS, AnalyticsEvent2.IMPRESSION_PAYWALL], _ShowcaseEvents2[ShowcaseEvent2.EVENT_SHOWCASE_INELIGIBLE_PAYWALL] = [AnalyticsEvent2.EVENT_INELIGIBLE_PAYWALL, AnalyticsEvent2.EVENT_NO_ENTITLEMENTS], _ShowcaseEvents2);
  function showcaseEventToAnalyticsEvents2(event) {
    return ShowcaseEvents2[event] || [];
  }
  var POST_MESSAGE_STAMP = "swg-gaa-post-message-stamp";
  var POST_MESSAGE_COMMAND_INTRODUCTION = "introduction";
  var POST_MESSAGE_COMMAND_USER = "user";
  var POST_MESSAGE_COMMAND_ERROR = "error";
  var POST_MESSAGE_COMMAND_BUTTON_CLICK = "button-click";
  var GOOGLE_SIGN_IN_IFRAME_ID = "swg-google-sign-in-iframe";
  var GOOGLE_SIGN_IN_BUTTON_ID = "swg-google-sign-in-button";
  var GOOGLE_3P_SIGN_IN_BUTTON_ID = "swg-google-3p-sign-in-button";
  var SIGN_IN_WITH_GOOGLE_BUTTON_ID = "swg-sign-in-with-google-button";
  var PUBLISHER_SIGN_IN_BUTTON_ID = "swg-publisher-sign-in-button";
  var REGWALL_CONTAINER_ID = "swg-regwall-container";
  var REGWALL_DIALOG_ID = "swg-regwall-dialog";
  var REGWALL_TITLE_ID = "swg-regwall-title";
  var REGWALL_HTML = '\n<style>\n  .gaa-metering-regwall--dialog-spacer,\n  .gaa-metering-regwall--dialog,\n  .gaa-metering-regwall--logo,\n  .gaa-metering-regwall--title,\n  .gaa-metering-regwall--description,\n  .gaa-metering-regwall--description strong,\n  .gaa-metering-regwall--iframe,\n  .gaa-metering-regwall--casl {\n    all: initial !important;\n    box-sizing: border-box !important;\n    font-family: Roboto, arial, sans-serif !important;\n  }\n\n  .gaa-metering-regwall--dialog-spacer {\n    background: linear-gradient(0, #808080, transparent) !important;\n    bottom: 0 !important;\n    display: block !important;\n    position: fixed !important;\n    width: 100% !important;\n  }\n\n  @keyframes slideUp {\n    from {transform: translate(0, 200px) !important;}\n    to {transform: translate(0, 0) !important;}\n  }\n\n  .gaa-metering-regwall--dialog {\n    animation: slideUp 0.5s !important;\n    background: white !important;\n    border-radius: 12px 12px 0 0 !important;\n    box-shadow: 0px -2px 6px rgba(0, 0, 0, 0.3) !important;\n    display: block !important;\n    margin: 0 auto !important;\n    max-width: 100% !important;\n    padding: 24px 20px !important;\n    pointer-events: auto !important;\n    width: 410px !important;\n  }\n\n  .gaa-metering-regwall--logo {\n    display: block !important;\n    margin: 0 auto 24px !important;\n  }\n\n  .gaa-metering-regwall--title {\n    color: #000 !important;\n    display: block !important;\n    font-size: 16px !important;\n    margin: 0 0 8px !important;\n    outline: none !important !important;\n  }\n\n  .gaa-metering-regwall--description {\n    color: #646464 !important;\n    display: block !important;\n    font-size: 14px !important;\n    line-height: 19px !important;\n    margin: 0 0 30px !important;\n  }\n\n  .gaa-metering-regwall--description strong {\n    color: #646464 !important;\n    font-size: 14px !important;\n    line-height: 19px !important;\n    font-weight: bold !important;\n  }\n\n  .gaa-metering-regwall--iframe {\n    border: none !important;\n    display: block !important;\n    height: 36px !important;\n    margin: 0 0 30px !important;\n    width: 100% !important;\n  }\n\n  .gaa-metering-regwall--casl {\n    color: #646464 !important;\n    display: block !important;\n    font-size: 12px !important;\n    text-align: center !important;\n    margin: -16px auto 32px !important;\n  }\n\n  .gaa-metering-regwall--casl a {\n    color: #1967d2 !important;\n  }\n\n  .gaa-metering-regwall--line {\n    background-color: #ddd !important;\n    display: block !important;\n    height: 1px !important;\n    margin: 0 0 24px !important;\n  }\n\n  .gaa-metering-regwall--publisher-sign-in-button {\n    color: #1967d2 !important;\n    cursor: pointer !important;\n    display: block !important;\n    font-size: 12px !important;\n    text-decoration: underline !important;\n  }\n\n  .gaa-metering-regwall--google-sign-in-button {\n    height: 36px !important;\n    margin: 0 auto 30px !important;\n  }\n\n  .gaa-metering-regwall--google-sign-in-button > div {\n    animation: swgGoogleSignInButtonfadeIn 0.32s !important;\n  }\n\n  @keyframes swgGoogleSignInButtonfadeIn {\n    from {\n      opacity: 0 !important;\n    }\n    to {\n      opacity: 1 !important;\n    }\n  }\n</style>\n\n<div class="gaa-metering-regwall--dialog-spacer">\n  <div role="dialog" aria-modal="true" class="gaa-metering-regwall--dialog" id="' + REGWALL_DIALOG_ID + '" aria-labelledby="' + REGWALL_TITLE_ID + '">\n    <img alt="Google" class="gaa-metering-regwall--logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDc0IDI0Ij48cGF0aCBmaWxsPSIjNDI4NUY0IiBkPSJNOS4yNCA4LjE5djIuNDZoNS44OGMtLjE4IDEuMzgtLjY0IDIuMzktMS4zNCAzLjEtLjg2Ljg2LTIuMiAxLjgtNC41NCAxLjgtMy42MiAwLTYuNDUtMi45Mi02LjQ1LTYuNTRzMi44My02LjU0IDYuNDUtNi41NGMxLjk1IDAgMy4zOC43NyA0LjQzIDEuNzZMMTUuNCAyLjVDMTMuOTQgMS4wOCAxMS45OCAwIDkuMjQgMCA0LjI4IDAgLjExIDQuMDQuMTEgOXM0LjE3IDkgOS4xMyA5YzIuNjggMCA0LjctLjg4IDYuMjgtMi41MiAxLjYyLTEuNjIgMi4xMy0zLjkxIDIuMTMtNS43NSAwLS41Ny0uMDQtMS4xLS4xMy0xLjU0SDkuMjR6Ii8+PHBhdGggZmlsbD0iI0VBNDMzNSIgZD0iTTI1IDYuMTljLTMuMjEgMC01LjgzIDIuNDQtNS44MyA1LjgxIDAgMy4zNCAyLjYyIDUuODEgNS44MyA1LjgxczUuODMtMi40NiA1LjgzLTUuODFjMC0zLjM3LTIuNjItNS44MS01LjgzLTUuODF6bTAgOS4zM2MtMS43NiAwLTMuMjgtMS40NS0zLjI4LTMuNTIgMC0yLjA5IDEuNTItMy41MiAzLjI4LTMuNTJzMy4yOCAxLjQzIDMuMjggMy41MmMwIDIuMDctMS41MiAzLjUyLTMuMjggMy41MnoiLz48cGF0aCBmaWxsPSIjNDI4NUY0IiBkPSJNNTMuNTggNy40OWgtLjA5Yy0uNTctLjY4LTEuNjctMS4zLTMuMDYtMS4zQzQ3LjUzIDYuMTkgNDUgOC43MiA0NSAxMmMwIDMuMjYgMi41MyA1LjgxIDUuNDMgNS44MSAxLjM5IDAgMi40OS0uNjIgMy4wNi0xLjMyaC4wOXYuODFjMCAyLjIyLTEuMTkgMy40MS0zLjEgMy40MS0xLjU2IDAtMi41My0xLjEyLTIuOTMtMi4wN2wtMi4yMi45MmMuNjQgMS41NCAyLjMzIDMuNDMgNS4xNSAzLjQzIDIuOTkgMCA1LjUyLTEuNzYgNS41Mi02LjA1VjYuNDloLTIuNDJ2MXptLTIuOTMgOC4wM2MtMS43NiAwLTMuMS0xLjUtMy4xLTMuNTIgMC0yLjA1IDEuMzQtMy41MiAzLjEtMy41MiAxLjc0IDAgMy4xIDEuNSAzLjEgMy41NC4wMSAyLjAzLTEuMzYgMy41LTMuMSAzLjV6Ii8+PHBhdGggZmlsbD0iI0ZCQkMwNSIgZD0iTTM4IDYuMTljLTMuMjEgMC01LjgzIDIuNDQtNS44MyA1LjgxIDAgMy4zNCAyLjYyIDUuODEgNS44MyA1LjgxczUuODMtMi40NiA1LjgzLTUuODFjMC0zLjM3LTIuNjItNS44MS01LjgzLTUuODF6bTAgOS4zM2MtMS43NiAwLTMuMjgtMS40NS0zLjI4LTMuNTIgMC0yLjA5IDEuNTItMy41MiAzLjI4LTMuNTJzMy4yOCAxLjQzIDMuMjggMy41MmMwIDIuMDctMS41MiAzLjUyLTMuMjggMy41MnoiLz48cGF0aCBmaWxsPSIjMzRBODUzIiBkPSJNNTggLjI0aDIuNTF2MTcuNTdINTh6Ii8+PHBhdGggZmlsbD0iI0VBNDMzNSIgZD0iTTY4LjI2IDE1LjUyYy0xLjMgMC0yLjIyLS41OS0yLjgyLTEuNzZsNy43Ny0zLjIxLS4yNi0uNjZjLS40OC0xLjMtMS45Ni0zLjctNC45Ny0zLjctMi45OSAwLTUuNDggMi4zNS01LjQ4IDUuODEgMCAzLjI2IDIuNDYgNS44MSA1Ljc2IDUuODEgMi42NiAwIDQuMi0xLjYzIDQuODQtMi41N2wtMS45OC0xLjMyYy0uNjYuOTYtMS41NiAxLjYtMi44NiAxLjZ6bS0uMTgtNy4xNWMxLjAzIDAgMS45MS41MyAyLjIgMS4yOGwtNS4yNSAyLjE3YzAtMi40NCAxLjczLTMuNDUgMy4wNS0zLjQ1eiIvPjwvc3ZnPg==" />\n\n    <div class="gaa-metering-regwall--title" id="' + REGWALL_TITLE_ID + '" tabindex="0">$SHOWCASE_REGWALL_TITLE$</div>\n\n    <div class="gaa-metering-regwall--description">\n      $SHOWCASE_REGWALL_DESCRIPTION$\n    </div>\n\n    <iframe\n        id="' + GOOGLE_SIGN_IN_IFRAME_ID + '"\n        class="gaa-metering-regwall--iframe"\n        src="$iframeUrl$">\n    </iframe>\n\n    $SHOWCASE_REGWALL_CASL$\n\n    <div class="gaa-metering-regwall--line"></div>\n\n    <a\n        id="' + PUBLISHER_SIGN_IN_BUTTON_ID + '"\n        class="gaa-metering-regwall--publisher-sign-in-button"\n        tabindex="0"\n        href="#">\n      $SHOWCASE_REGWALL_PUBLISHER_SIGN_IN_BUTTON$\n    </a>\n  </div>\n</div>\n';
  var CASL_HTML = '\n<div class="gaa-metering-regwall--casl">\n  $SHOWCASE_REGWALL_CASL$\n</div>\n';
  var GOOGLE_SIGN_IN_IFRAME_STYLES = "\n  body {\n    margin: 0;\n    overflow: hidden;\n  }\n  #" + GOOGLE_3P_SIGN_IN_BUTTON_ID + ",\n  #" + SIGN_IN_WITH_GOOGLE_BUTTON_ID + ",\n  #" + GOOGLE_SIGN_IN_BUTTON_ID + " {\n    margin: 0 auto;\n  }\n  #" + GOOGLE_3P_SIGN_IN_BUTTON_ID + " > div,\n  #" + SIGN_IN_WITH_GOOGLE_BUTTON_ID + " > div,\n  #" + GOOGLE_SIGN_IN_BUTTON_ID + " > div {\n    animation: fadeIn 0.32s;\n  }\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n  #" + GOOGLE_3P_SIGN_IN_BUTTON_ID + " .abcRioButton.abcRioButtonBlue,\n  #" + SIGN_IN_WITH_GOOGLE_BUTTON_ID + " .abcRioButton.abcRioButtonBlue,\n  #" + GOOGLE_SIGN_IN_BUTTON_ID + " .abcRioButton.abcRioButtonBlue {\n    background-color: #1A73E8;\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    border-radius: 4px;\n    width: 100% !important;\n  }\n  #" + GOOGLE_3P_SIGN_IN_BUTTON_ID + " .abcRioButton.abcRioButtonBlue .abcRioButtonIcon,\n  #" + SIGN_IN_WITH_GOOGLE_BUTTON_ID + " .abcRioButton.abcRioButtonBlue .abcRioButtonIcon,\n  #" + GOOGLE_SIGN_IN_BUTTON_ID + ' .abcRioButton.abcRioButtonBlue .abcRioButtonIcon {\n    display: none;\n  }\n  /** Hides default "Sign in with Google" text. */\n  #' + GOOGLE_3P_SIGN_IN_BUTTON_ID + "  .abcRioButton.abcRioButtonBlue .abcRioButtonContents span[id^=not_signed_],\n  #" + SIGN_IN_WITH_GOOGLE_BUTTON_ID + "  .abcRioButton.abcRioButtonBlue .abcRioButtonContents span[id^=not_signed_],\n  #" + GOOGLE_SIGN_IN_BUTTON_ID + ' .abcRioButton.abcRioButtonBlue .abcRioButtonContents span[id^=not_signed_] {\n    font-size: 0 !important;\n  }\n  /** Renders localized "Sign in with Google" text instead. */\n  #' + GOOGLE_3P_SIGN_IN_BUTTON_ID + " .abcRioButton.abcRioButtonBlue .abcRioButtonContents span[id^=not_signed_]::before,\n  #" + SIGN_IN_WITH_GOOGLE_BUTTON_ID + " .abcRioButton.abcRioButtonBlue .abcRioButtonContents span[id^=not_signed_]::before,\n  #" + GOOGLE_SIGN_IN_BUTTON_ID + " .abcRioButton.abcRioButtonBlue .abcRioButtonContents span[id^=not_signed_]::before {\n    content: '$SHOWCASE_REGWALL_GOOGLE_SIGN_IN_BUTTON$';\n    font-size: 15px;\n  }";
  function queryStringHasFreshGaaParams2(queryString, allowAllAccessTypes) {
    if (allowAllAccessTypes === void 0) {
      allowAllAccessTypes = false;
    }
    var params = parseQueryString3(queryString);
    if (!params["gaa_at"] || !params["gaa_n"] || !params["gaa_sig"] || !params["gaa_ts"]) {
      return false;
    }
    if (!allowAllAccessTypes) {
      var noAccess = params["gaa_at"] === "na";
      if (noAccess) {
        return false;
      }
    }
    var expirationTimestamp = parseInt(params["gaa_ts"], 16);
    var currentTimestamp = Date.now() / 1e3;
    if (expirationTimestamp < currentTimestamp) {
      return false;
    }
    return true;
  }
  var GaaMeteringRegwall = /* @__PURE__ */ function() {
    function GaaMeteringRegwall2() {
    }
    GaaMeteringRegwall2.show = function show(_ref) {
      var iframeUrl = _ref.iframeUrl, caslUrl = _ref.caslUrl;
      var queryString = GaaUtils.getQueryString();
      if (!queryStringHasFreshGaaParams2(queryString)) {
        var errorMessage = "[swg-gaa.js:GaaMeteringRegwall.show]: URL needs fresh GAA params.";
        warn2(errorMessage);
        return Promise.reject(errorMessage);
      }
      logEvent({
        showcaseEvent: ShowcaseEvent2.EVENT_SHOWCASE_NO_ENTITLEMENTS_REGWALL,
        isFromUserAction: false
      });
      GaaMeteringRegwall2.render_({
        iframeUrl: iframeUrl,
        caslUrl: caslUrl
      });
      GaaMeteringRegwall2.sendIntroMessageToGsiIframe_({
        iframeUrl: iframeUrl
      });
      GaaMeteringRegwall2.logButtonClickEvents_();
      return GaaMeteringRegwall2.getGaaUser_().then(function(gaaUser) {
        GaaMeteringRegwall2.remove();
        return gaaUser;
      }).catch(function(err) {
        GaaMeteringRegwall2.remove();
        throw err;
      });
    };
    GaaMeteringRegwall2.remove = function remove2() {
      var regwallContainer = self.document.getElementById(REGWALL_CONTAINER_ID);
      if (regwallContainer) {
        regwallContainer.remove();
      }
    };
    GaaMeteringRegwall2.signOut = function signOut() {
      return configureGoogleSignIn().then(function() {
        return self.gapi.auth2.getAuthInstance().signOut();
      });
    };
    GaaMeteringRegwall2.render_ = function render_(_ref2) {
      var iframeUrl = _ref2.iframeUrl, caslUrl = _ref2.caslUrl;
      var languageCode = getLanguageCodeFromElement2(self.document.body);
      var publisherName = GaaMeteringRegwall2.getPublisherNameFromPageConfig_();
      var placeholderPatternForPublication = /<ph name="PUBLICATION".+?\/ph>/g;
      var placeholderPatternForLinkStart = /<ph name="LINK_START".+?\/ph>/g;
      var placeholderPatternForLinkEnd = /<ph name="LINK_END".+?\/ph>/g;
      iframeUrl = addQueryParam2(iframeUrl, "lang", languageCode);
      var containerEl = self.document.createElement("div");
      containerEl.id = REGWALL_CONTAINER_ID;
      setImportantStyles2(containerEl, {
        "all": "unset",
        "background-color": "rgba(32, 33, 36, 0.6)",
        "border": "none",
        "bottom": "0",
        "height": "100%",
        "left": "0",
        "opacity": "0",
        "pointer-events": "none",
        "position": "fixed",
        "right": "0",
        "transition": "opacity 0.5s",
        "top": "0",
        "width": "100%",
        "z-index": 2147483646
      });
      var caslHtml = "";
      if (caslUrl) {
        caslHtml = CASL_HTML.replace("$SHOWCASE_REGWALL_CASL$", msg2(I18N_STRINGS["SHOWCASE_REGWALL_CASL"], languageCode)).replace(placeholderPatternForLinkStart, '<a href="' + encodeURI(caslUrl) + '" target="_blank">').replace(placeholderPatternForLinkEnd, "</a>").replace(placeholderPatternForPublication, "<strong>" + publisherName + "</strong>");
      }
      containerEl.innerHTML = REGWALL_HTML.replace("$iframeUrl$", iframeUrl).replace("$SHOWCASE_REGWALL_TITLE$", msg2(I18N_STRINGS["SHOWCASE_REGWALL_TITLE"], languageCode)).replace("$SHOWCASE_REGWALL_DESCRIPTION$", msg2(I18N_STRINGS["SHOWCASE_REGWALL_DESCRIPTION"], languageCode).replace(placeholderPatternForPublication, publisherName)).replace("$SHOWCASE_REGWALL_PUBLISHER_SIGN_IN_BUTTON$", msg2(I18N_STRINGS["SHOWCASE_REGWALL_PUBLISHER_SIGN_IN_BUTTON"], languageCode)).replace("$SHOWCASE_REGWALL_CASL$", caslHtml);
      self.document.body.appendChild(containerEl);
      containerEl.offsetHeight;
      setImportantStyles2(containerEl, {
        "opacity": 1
      });
      GaaMeteringRegwall2.addClickListenerOnPublisherSignInButton_();
      var dialogEl = self.document.getElementById(REGWALL_DIALOG_ID);
      dialogEl.addEventListener("animationend", function() {
        var titleEl = self.document.getElementById(REGWALL_TITLE_ID);
        titleEl.focus();
      });
    };
    GaaMeteringRegwall2.getPublisherNameFromPageConfig_ = function getPublisherNameFromPageConfig_() {
      var jsonLdPageConfig = GaaMeteringRegwall2.getPublisherNameFromJsonLdPageConfig_();
      if (jsonLdPageConfig) {
        return jsonLdPageConfig;
      }
      var microdataPageConfig = GaaMeteringRegwall2.getPublisherNameFromMicrodataPageConfig_();
      if (microdataPageConfig) {
        return microdataPageConfig;
      }
      throw new Error("Showcase articles must define a publisher name with either JSON-LD or Microdata.");
    };
    GaaMeteringRegwall2.getPublisherNameFromJsonLdPageConfig_ = function getPublisherNameFromJsonLdPageConfig_() {
      var ldJsonElements = self.document.querySelectorAll('script[type="application/ld+json"]');
      for (var i = 0; i < ldJsonElements.length; i++) {
        var _findInArray;
        var ldJsonElement = ldJsonElements[i];
        var ldJson = parseJson3(ldJsonElement.textContent);
        if (!Array.isArray(ldJson)) {
          ldJson = [ldJson];
        }
        var publisherName = (_findInArray = findInArray2(ldJson, function(entry) {
          var _entry$publisher;
          return entry == null ? void 0 : (_entry$publisher = entry.publisher) == null ? void 0 : _entry$publisher.name;
        })) == null ? void 0 : _findInArray.publisher.name;
        if (publisherName) {
          return publisherName;
        }
      }
    };
    GaaMeteringRegwall2.getPublisherNameFromMicrodataPageConfig_ = function getPublisherNameFromMicrodataPageConfig_() {
      var publisherNameElements = self.document.querySelectorAll('[itemscope][itemtype][itemprop="publisher"] [itemprop="name"]');
      for (var i = 0; i < publisherNameElements.length; i++) {
        var publisherNameElement = publisherNameElements[i];
        var publisherName = publisherNameElement.content;
        if (publisherName) {
          return publisherName;
        }
      }
    };
    GaaMeteringRegwall2.addClickListenerOnPublisherSignInButton_ = function addClickListenerOnPublisherSignInButton_() {
      self.document.getElementById(PUBLISHER_SIGN_IN_BUTTON_ID).addEventListener("click", function(e) {
        e.preventDefault();
        logEvent({
          analyticsEvent: AnalyticsEvent2.ACTION_SHOWCASE_REGWALL_EXISTING_ACCOUNT_CLICK,
          isFromUserAction: true
        });
        callSwg(function(swg) {
          return swg.triggerLoginRequest({
            linkRequested: false
          });
        });
      });
    };
    GaaMeteringRegwall2.getGaaUser_ = function getGaaUser_() {
      return new Promise(function(resolve, reject) {
        self.addEventListener("message", function(e) {
          if (e.data.stamp === POST_MESSAGE_STAMP) {
            if (e.data.command === POST_MESSAGE_COMMAND_USER) {
              resolve(e.data.gaaUser || e.data.jwtPayload);
            }
            if (e.data.command === POST_MESSAGE_COMMAND_ERROR) {
              reject("Google Sign-In could not render");
            }
          }
        });
      });
    };
    GaaMeteringRegwall2.logButtonClickEvents_ = function logButtonClickEvents_() {
      self.addEventListener("message", function(e) {
        if (e.data.stamp === POST_MESSAGE_STAMP && e.data.command === POST_MESSAGE_COMMAND_BUTTON_CLICK) {
          logEvent({
            analyticsEvent: AnalyticsEvent2.ACTION_SHOWCASE_REGWALL_GSI_CLICK,
            isFromUserAction: true
          });
        }
      });
    };
    GaaMeteringRegwall2.sendIntroMessageToGsiIframe_ = function sendIntroMessageToGsiIframe_(_ref3) {
      var iframeUrl = _ref3.iframeUrl;
      var googleSignInIframe = self.document.getElementById(GOOGLE_SIGN_IN_IFRAME_ID);
      googleSignInIframe.onload = function() {
        googleSignInIframe.contentWindow.postMessage({
          stamp: POST_MESSAGE_STAMP,
          command: POST_MESSAGE_COMMAND_INTRODUCTION
        }, new URL(iframeUrl).origin);
      };
    };
    return GaaMeteringRegwall2;
  }();
  function configureGoogleSignIn() {
    return new Promise(function(resolve) {
      var apiCheckInterval = setInterval(function() {
        if (!!self.gapi) {
          clearInterval(apiCheckInterval);
          resolve();
        }
      }, 50);
    }).then(function() {
      return new Promise(function(resolve) {
        return self.gapi.load("auth2", resolve);
      });
    }).then(function() {
      return self.gapi.auth2.getAuthInstance() || self.gapi.auth2.init();
    });
  }
  function callSwg(callback) {
    (self.SWG = self.SWG || []).push(callback);
  }
  var GOOGLE_3P_SIGN_IN_IFRAME_STYLES = GOOGLE_SIGN_IN_IFRAME_STYLES + ("\n  #" + GOOGLE_3P_SIGN_IN_BUTTON_ID + " .abcRioButtonContents {\n    font-family: Roboto,arial,sans-serif;\n    font-size: 14px;\n    font-weight: 500;\n    letter-spacing: .21px;\n    margin-left: 6px;\n    margin-right: 6px;\n    vertical-align: top;\n  }\n  #" + GOOGLE_3P_SIGN_IN_BUTTON_ID + " .abcRioButton {\n    border-radius: 1px;\n    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 25%);\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-transition: background-color .218s,border-color .218s,box-shadow .218s;\n    transition: background-color .218s,border-color .218s,box-shadow .218s;\n    -webkit-user-select: none;\n    -webkit-appearance: none;\n    background-color: #fff;\n    background-image: none;\n    color: #262626;\n    cursor: pointer;\n    outline: none;\n    overflow: hidden;\n    position: relative;\n    text-align: center;\n    vertical-align: middle;\n    white-space: nowrap;\n    width: auto;\n  }\n  #" + GOOGLE_3P_SIGN_IN_BUTTON_ID + " .abcRioButtonBlue {\n    border: none;\n    color: #fff;\n  }\n  ");
  function logEvent(_temp) {
    var _ref6 = _temp === void 0 ? {} : _temp, analyticsEvent = _ref6.analyticsEvent, showcaseEvent = _ref6.showcaseEvent, isFromUserAction = _ref6.isFromUserAction;
    callSwg(function(swg) {
      swg.getEventManager().then(function(eventManager) {
        var eventTypes = showcaseEvent ? showcaseEventToAnalyticsEvents2(showcaseEvent) : [analyticsEvent];
        eventTypes.forEach(function(eventType) {
          eventManager.logEvent({
            eventType: eventType,
            eventOriginator: EventOriginator2.SWG_CLIENT,
            isFromUserAction: isFromUserAction,
            additionalParameters: null
          });
        });
      });
    });
  }
  var GaaUtils = /* @__PURE__ */ function() {
    function GaaUtils2() {
    }
    GaaUtils2.getQueryString = function getQueryString() {
      return self.location.search;
    };
    return GaaUtils2;
  }();

  // build/amp-subscriptions-google-0.1.css.js
  var CSS3 = ".swg-button,.swg-button-dark,.swg-button-light{border:0;border-radius:4px;box-sizing:border-box;outline:0;padding:11px 8px;width:240px;min-width:150px;height:40px;min-height:40px}.swg-button-dark:after,.swg-button-light:after,.swg-button:after{display:block;max-width:200px;max-height:40px;width:100%;height:100%;margin:auto;content:\"\";border:0;background-origin:content-box;background-position:50%;background-repeat:no-repeat;background-size:contain}.swg-button,.swg-button-light{background-color:#fff;box-shadow:0 1px 1px 0 rgba(60,64,67,0.3),0 1px 3px 1px rgba(60,64,67,0.15)}.swg-button-light:after,.swg-button:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='235' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M169.367 19c-5.09 0-9.367-4.265-9.367-9.5s4.277-9.5 9.367-9.5c2.818 0 4.823 1.133 6.33 2.622l-1.775 1.827c-1.082-1.04-2.55-1.857-4.555-1.857-3.72 0-6.628 3.081-6.628 6.908 0 3.827 2.907 6.908 6.628 6.908 2.411 0 3.78-1 4.664-1.898.724-.745 1.19-1.806 1.37-3.265h-6.034V8.643h8.494c.09.459.139 1.02.139 1.622 0 1.95-.516 4.357-2.183 6.072-1.627 1.734-3.691 2.663-6.45 2.663z' fill='%234285F4' fill-rule='nonzero'/%3E%3Cpath d='M192 13c0 3.456-2.69 6-6 6s-6-2.544-6-6c0-3.476 2.69-6 6-6s6 2.524 6 6zm-2.63 0c0-2.164-1.563-3.636-3.37-3.636-1.807 0-3.37 1.482-3.37 3.636 0 2.134 1.563 3.636 3.37 3.636 1.807 0 3.37-1.492 3.37-3.636z' fill='%23E94235' fill-rule='nonzero'/%3E%3Cpath d='M205 13c0 3.456-2.69 6-6 6-3.3 0-6-2.544-6-6 0-3.476 2.69-6 6-6s6 2.524 6 6zm-2.62 0c0-2.164-1.563-3.636-3.37-3.636-1.807 0-3.37 1.482-3.37 3.636 0 2.134 1.563 3.636 3.37 3.636 1.807.01 3.37-1.492 3.37-3.636z' fill='%23FABB05' fill-rule='nonzero'/%3E%3Cpath d='M217 7.362v10.53c0 4.337-2.499 6.108-5.457 6.108-2.786 0-4.452-1.908-5.083-3.465l2.192-.93c.392.96 1.35 2.085 2.891 2.085 1.896 0 3.064-1.204 3.064-3.445v-.841h-.087c-.564.714-1.656 1.33-3.025 1.33-2.872 0-5.495-2.554-5.495-5.842C206 9.584 208.633 7 211.495 7c1.37 0 2.46.626 3.025 1.311h.087v-.949H217zm-2.221 5.54c0-2.066-1.35-3.582-3.064-3.582-1.742 0-3.197 1.507-3.197 3.582 0 2.045 1.455 3.533 3.197 3.533 1.714 0 3.064-1.488 3.064-3.533z' fill='%234285F4' fill-rule='nonzero'/%3E%3Cpath fill='%2334A853' fill-rule='nonzero' d='M223 1v18h-3V1z'/%3E%3Cpath d='m232.844 14.973 2.046 1.363c-.662.981-2.256 2.664-5.014 2.664-3.42 0-5.876-2.634-5.876-6 0-3.566 2.487-6 5.585-6 3.119 0 4.643 2.474 5.144 3.816l.271.681-8.032 3.326c.612 1.202 1.574 1.823 2.918 1.823s2.276-.671 2.958-1.673zm-6.307-2.163 5.375-2.224c-.301-.751-1.184-1.272-2.237-1.272-1.343 0-3.208 1.182-3.138 3.496z' fill='%23E94235' fill-rule='nonzero'/%3E%3Cpath d='M6.576 19.384c-1.248 0-2.468-.408-3.66-1.224-1.192-.816-1.972-1.96-2.34-3.432l2.016-.816c.24.944.732 1.74 1.476 2.388.744.648 1.58.972 2.508.972.96 0 1.78-.252 2.46-.756.68-.504 1.02-1.188 1.02-2.052 0-.96-.34-1.7-1.02-2.22-.68-.52-1.756-1.004-3.228-1.452-1.52-.48-2.672-1.1-3.456-1.86-.784-.76-1.176-1.732-1.176-2.916 0-1.232.488-2.304 1.464-3.216.976-.912 2.248-1.368 3.816-1.368 1.456 0 2.64.364 3.552 1.092.912.728 1.504 1.524 1.776 2.388l-2.016.84c-.144-.544-.5-1.048-1.068-1.512-.568-.464-1.3-.696-2.196-.696-.848 0-1.572.236-2.172.708-.6.472-.9 1.06-.9 1.764 0 .64.276 1.18.828 1.62.552.44 1.364.836 2.436 1.188.848.272 1.556.536 2.124.792a9.842 9.842 0 0 1 1.728 1.02 4.065 4.065 0 0 1 1.32 1.584c.296.632.444 1.364.444 2.196 0 .832-.172 1.576-.516 2.232a4.19 4.19 0 0 1-1.368 1.56 6.875 6.875 0 0 1-3.852 1.176zM24.936 19h-2.112v-1.632h-.096c-.336.56-.848 1.036-1.536 1.428a4.345 4.345 0 0 1-2.184.588c-1.472 0-2.588-.448-3.348-1.344-.76-.896-1.14-2.096-1.14-3.6v-7.2h2.208v6.84c0 2.192.968 3.288 2.904 3.288.912 0 1.656-.368 2.232-1.104.576-.736.864-1.584.864-2.544V7.24h2.208V19zm8.904.384c-.896 0-1.7-.192-2.412-.576-.712-.384-1.244-.864-1.596-1.44h-.096V19h-2.112V1.816h2.208V7.24l-.096 1.632h.096c.352-.576.884-1.056 1.596-1.44.712-.384 1.516-.576 2.412-.576 1.52 0 2.832.6 3.936 1.8 1.104 1.2 1.656 2.688 1.656 4.464 0 1.776-.552 3.264-1.656 4.464-1.104 1.2-2.416 1.8-3.936 1.8zm-.36-2.016c1.024 0 1.904-.388 2.64-1.164.736-.776 1.104-1.804 1.104-3.084s-.368-2.308-1.104-3.084c-.736-.776-1.616-1.164-2.64-1.164-1.04 0-1.924.384-2.652 1.152-.728.768-1.092 1.8-1.092 3.096s.364 2.328 1.092 3.096c.728.768 1.612 1.152 2.652 1.152zm12.336 2.016c-1.312 0-2.396-.32-3.252-.96a5.682 5.682 0 0 1-1.884-2.4l1.968-.816c.624 1.472 1.688 2.208 3.192 2.208.688 0 1.252-.152 1.692-.456.44-.304.66-.704.66-1.2 0-.768-.536-1.288-1.608-1.56l-2.376-.576c-.752-.192-1.464-.556-2.136-1.092-.672-.536-1.008-1.26-1.008-2.172 0-1.04.46-1.884 1.38-2.532.92-.648 2.012-.972 3.276-.972 1.04 0 1.968.236 2.784.708a3.99 3.99 0 0 1 1.752 2.028l-1.92.792c-.432-1.04-1.328-1.56-2.688-1.56-.656 0-1.208.136-1.656.408-.448.272-.672.64-.672 1.104 0 .672.52 1.128 1.56 1.368l2.328.552c1.104.256 1.92.696 2.448 1.32.528.624.792 1.328.792 2.112 0 1.056-.432 1.936-1.296 2.64-.864.704-1.976 1.056-3.336 1.056zm11.928 0c-1.76 0-3.208-.596-4.344-1.788-1.136-1.192-1.704-2.684-1.704-4.476 0-1.792.568-3.284 1.704-4.476 1.136-1.192 2.584-1.788 4.344-1.788 1.312 0 2.4.32 3.264.96a5.621 5.621 0 0 1 1.896 2.424l-2.016.84c-.608-1.472-1.704-2.208-3.288-2.208-.976 0-1.836.4-2.58 1.2-.744.8-1.116 1.816-1.116 3.048s.372 2.248 1.116 3.048c.744.8 1.604 1.2 2.58 1.2 1.648 0 2.784-.736 3.408-2.208l1.968.84c-.4.96-1.044 1.764-1.932 2.412-.888.648-1.988.972-3.3.972zm9.36-.384h-2.208V7.24h2.112v1.92h.096c.224-.64.684-1.168 1.38-1.584.696-.416 1.372-.624 2.028-.624.656 0 1.208.096 1.656.288l-.84 2.064c-.288-.112-.68-.168-1.176-.168-.8 0-1.508.316-2.124.948-.616.632-.924 1.46-.924 2.484V19zm8.904-14.712a1.504 1.504 0 0 1-1.104.456c-.432 0-.8-.152-1.104-.456a1.504 1.504 0 0 1-.456-1.104c0-.432.152-.8.456-1.104a1.504 1.504 0 0 1 1.104-.456c.432 0 .8.152 1.104.456.304.304.456.672.456 1.104 0 .432-.152.8-.456 1.104zm0 14.712H73.8V7.24h2.208V19zm9.096.384c-.896 0-1.7-.192-2.412-.576-.712-.384-1.244-.864-1.596-1.44H81V19h-2.112V1.816h2.208V7.24L81 8.872h.096c.352-.576.884-1.056 1.596-1.44.712-.384 1.516-.576 2.412-.576 1.52 0 2.832.6 3.936 1.8 1.104 1.2 1.656 2.688 1.656 4.464 0 1.776-.552 3.264-1.656 4.464-1.104 1.2-2.416 1.8-3.936 1.8zm-.36-2.016c1.024 0 1.904-.388 2.64-1.164.736-.776 1.104-1.804 1.104-3.084s-.368-2.308-1.104-3.084c-.736-.776-1.616-1.164-2.64-1.164-1.04 0-1.924.384-2.652 1.152-.728.768-1.092 1.8-1.092 3.096s.364 2.328 1.092 3.096c.728.768 1.612 1.152 2.652 1.152zm13.296 2.016c-1.776 0-3.22-.592-4.332-1.776-1.112-1.184-1.668-2.68-1.668-4.488 0-1.712.54-3.184 1.62-4.416 1.08-1.232 2.46-1.848 4.14-1.848 1.744 0 3.14.568 4.188 1.704 1.048 1.136 1.572 2.656 1.572 4.56l-.024.408h-9.288c.064 1.184.46 2.12 1.188 2.808.728.688 1.58 1.032 2.556 1.032 1.584 0 2.656-.672 3.216-2.016l1.968.816c-.384.912-1.016 1.676-1.896 2.292-.88.616-1.96.924-3.24.924zm3.168-7.68c-.048-.672-.356-1.312-.924-1.92-.568-.608-1.412-.912-2.532-.912-.816 0-1.524.256-2.124.768-.6.512-1.012 1.2-1.236 2.064h6.816zM123.72 19h-2.256l-2.928-9.024L115.632 19H113.4l-3.792-11.76h2.304l2.616 8.88h.024l2.904-8.88h2.28l2.904 8.88h.024l2.592-8.88h2.256L123.72 19zm7.632-14.712a1.504 1.504 0 0 1-1.104.456c-.432 0-.8-.152-1.104-.456a1.504 1.504 0 0 1-.456-1.104c0-.432.152-.8.456-1.104a1.504 1.504 0 0 1 1.104-.456c.432 0 .8.152 1.104.456.304.304.456.672.456 1.104 0 .432-.152.8-.456 1.104zm0 14.712h-2.208V7.24h2.208V19zm7.968.192c-1.232 0-2.172-.328-2.82-.984-.648-.656-.972-1.584-.972-2.784V9.256h-2.064V7.24h2.064v-3.6h2.208v3.6h2.88v2.016h-2.88v6c0 1.28.528 1.92 1.584 1.92.4 0 .736-.064 1.008-.192l.768 1.896c-.48.208-1.072.312-1.776.312zm5.616-17.376V7.24l-.096 1.632h.096c.32-.56.824-1.036 1.512-1.428a4.389 4.389 0 0 1 2.208-.588c1.456 0 2.568.448 3.336 1.344.768.896 1.152 2.096 1.152 3.6V19h-2.208v-6.864c0-2.176-.968-3.264-2.904-3.264-.912 0-1.656.364-2.232 1.092-.576.728-.864 1.572-.864 2.532V19h-2.208V1.816h2.208z' fill='%235F6368'/%3E%3C/g%3E%3C/svg%3E\")}.swg-button-dark{background-color:#000}.swg-button-dark:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='231' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFF' fill-rule='evenodd'%3E%3Cpath d='M6.302 19.368c-1.196 0-2.365-.391-3.507-1.173-1.143-.782-1.89-1.878-2.243-3.289l1.932-.782c.23.905.701 1.667 1.414 2.289.714.62 1.515.931 2.404.931.92 0 1.706-.241 2.357-.725.652-.483.978-1.138.978-1.966 0-.92-.326-1.63-.978-2.128-.651-.498-1.682-.962-3.093-1.391-1.457-.46-2.56-1.054-3.312-1.783-.751-.728-1.127-1.66-1.127-2.794 0-1.18.468-2.208 1.403-3.082.935-.874 2.154-1.311 3.657-1.311 1.395 0 2.53.349 3.404 1.046.874.698 1.441 1.461 1.702 2.289l-1.932.805c-.138-.521-.48-1.004-1.024-1.449-.544-.445-1.245-.667-2.104-.667-.813 0-1.506.226-2.081.679-.576.452-.863 1.015-.863 1.69 0 .613.264 1.13.793 1.553.53.421 1.308.8 2.335 1.138.813.26 1.491.514 2.036.759a9.431 9.431 0 0 1 1.655.978c.56.406.982.912 1.265 1.518.284.605.426 1.307.426 2.104 0 .797-.165 1.51-.494 2.139a4.015 4.015 0 0 1-1.312 1.495 6.589 6.589 0 0 1-3.691 1.127zM23.696 19h-2.024v-1.564h-.092c-.322.537-.813.993-1.472 1.369a4.164 4.164 0 0 1-2.093.563c-1.41 0-2.48-.43-3.209-1.288-.728-.859-1.092-2.009-1.092-3.45v-6.9h2.116v6.555c0 2.1.927 3.151 2.783 3.151.874 0 1.587-.353 2.139-1.058a3.845 3.845 0 0 0 .828-2.438V7.73h2.116V19zm8.677.368c-.86 0-1.63-.184-2.312-.552-.682-.368-1.192-.828-1.53-1.38h-.091V19h-2.024V2.532h2.116V7.73l-.093 1.564h.093c.337-.552.847-1.012 1.529-1.38.682-.368 1.453-.552 2.312-.552 1.456 0 2.713.575 3.772 1.725 1.058 1.15 1.586 2.576 1.586 4.278 0 1.702-.528 3.128-1.587 4.278-1.058 1.15-2.315 1.725-3.771 1.725zm-.345-1.932c.98 0 1.824-.372 2.53-1.116.705-.743 1.057-1.728 1.057-2.955s-.352-2.212-1.058-2.956c-.705-.743-1.548-1.115-2.53-1.115-.996 0-1.843.368-2.541 1.104-.698.736-1.047 1.725-1.047 2.967s.35 2.231 1.047 2.967c.698.736 1.545 1.104 2.542 1.104zm11.85 1.932c-1.257 0-2.296-.307-3.116-.92a5.446 5.446 0 0 1-1.806-2.3l1.886-.782c.598 1.41 1.618 2.116 3.06 2.116.659 0 1.2-.146 1.62-.437.422-.291.633-.675.633-1.15 0-.736-.513-1.234-1.54-1.495l-2.278-.552c-.72-.184-1.403-.533-2.047-1.046-.644-.514-.966-1.208-.966-2.082 0-.997.441-1.805 1.323-2.427.881-.62 1.928-.931 3.14-.931.996 0 1.885.226 2.667.678a3.824 3.824 0 0 1 1.68 1.944l-1.84.759c-.415-.997-1.273-1.495-2.577-1.495-.628 0-1.157.13-1.587.391-.43.26-.644.613-.644 1.058 0 .644.499 1.081 1.495 1.311l2.231.529c1.058.245 1.84.667 2.346 1.265.506.598.76 1.273.76 2.024 0 1.012-.415 1.855-1.243 2.53-.828.675-1.893 1.012-3.197 1.012zm11.69 0c-1.687 0-3.074-.571-4.163-1.713-1.089-1.143-1.633-2.573-1.633-4.29s.544-3.147 1.633-4.29c1.089-1.142 2.476-1.713 4.163-1.713 1.257 0 2.3.307 3.128.92a5.387 5.387 0 0 1 1.817 2.323l-1.932.805c-.583-1.41-1.633-2.116-3.151-2.116-.935 0-1.76.383-2.472 1.15-.714.767-1.07 1.74-1.07 2.921 0 1.18.356 2.154 1.07 2.921.713.767 1.537 1.15 2.472 1.15 1.58 0 2.668-.705 3.266-2.116l1.886.805c-.383.92-1 1.69-1.852 2.311-.85.622-1.905.932-3.162.932zM64.567 19H62.45V7.73h2.024v1.84h.092c.214-.613.655-1.12 1.322-1.518.667-.399 1.315-.598 1.944-.598.628 0 1.157.092 1.587.276l-.805 1.978c-.276-.107-.652-.161-1.127-.161-.767 0-1.445.303-2.036.909-.59.605-.885 1.399-.885 2.38V19zm8.677-14.099a1.441 1.441 0 0 1-1.058.437c-.415 0-.767-.146-1.059-.437a1.441 1.441 0 0 1-.436-1.058c0-.414.145-.767.436-1.058a1.441 1.441 0 0 1 1.059-.437c.414 0 .766.146 1.057.437.292.291.438.644.438 1.058 0 .414-.146.767-.438 1.058zm0 14.099h-2.117V7.73h2.117V19zm8.86.368c-.858 0-1.629-.184-2.311-.552-.683-.368-1.192-.828-1.53-1.38h-.092V19h-2.024V2.532h2.116V7.73l-.092 1.564h.092c.338-.552.847-1.012 1.53-1.38.682-.368 1.453-.552 2.311-.552 1.457 0 2.714.575 3.772 1.725 1.058 1.15 1.587 2.576 1.587 4.278 0 1.702-.529 3.128-1.587 4.278-1.058 1.15-2.315 1.725-3.772 1.725zm-.345-1.932c.982 0 1.825-.372 2.53-1.116.706-.743 1.058-1.728 1.058-2.955s-.352-2.212-1.058-2.956c-.705-.743-1.548-1.115-2.53-1.115-.996 0-1.844.368-2.541 1.104-.698.736-1.047 1.725-1.047 2.967s.35 2.231 1.047 2.967c.697.736 1.545 1.104 2.541 1.104zm12.886 1.932c-1.702 0-3.086-.567-4.151-1.702-1.066-1.135-1.599-2.568-1.599-4.301 0-1.64.517-3.051 1.553-4.232 1.035-1.18 2.357-1.771 3.967-1.771 1.671 0 3.01.544 4.013 1.633 1.005 1.089 1.507 2.545 1.507 4.37l-.023.391h-8.901c.061 1.135.44 2.032 1.139 2.691.697.66 1.514.989 2.449.989 1.518 0 2.545-.644 3.082-1.932l1.886.782c-.368.874-.974 1.606-1.817 2.197-.843.59-1.878.885-3.105.885zm3.036-7.36c-.046-.644-.341-1.257-.885-1.84-.545-.583-1.354-.874-2.427-.874-.782 0-1.46.245-2.035.736-.576.49-.97 1.15-1.185 1.978h6.532zM119.543 19h-2.163l-2.805-8.648L111.79 19h-2.138l-3.635-11.27h2.209l2.507 8.51h.023l2.782-8.51h2.186l2.782 8.51h.023l2.484-8.51h2.163L119.541 19zM127 4.901a1.441 1.441 0 0 1-1.058.437c-.414 0-.766-.146-1.058-.437a1.441 1.441 0 0 1-.437-1.058c0-.414.146-.767.437-1.058a1.441 1.441 0 0 1 1.058-.437c.414 0 .767.146 1.058.437.292.291.437.644.437 1.058 0 .414-.145.767-.437 1.058zM127 19h-2.116V7.73H127V19zm7.665.184c-1.18 0-2.081-.314-2.702-.943-.622-.629-.932-1.518-.932-2.668V9.662h-1.978V7.73h1.978V4.28h2.116v3.45h2.76v1.932h-2.76v5.75c0 1.227.506 1.84 1.518 1.84.383 0 .705-.061.966-.184l.736 1.817c-.46.2-1.027.299-1.702.299zm5.64-16.652V7.73l-.091 1.564h.092c.306-.537.79-.993 1.449-1.369a4.206 4.206 0 0 1 2.116-.563c1.395 0 2.46.43 3.197 1.288.736.859 1.104 2.009 1.104 3.45V19h-2.116v-6.578c0-2.085-.928-3.128-2.783-3.128-.874 0-1.587.349-2.14 1.046-.551.698-.827 1.507-.827 2.427V19h-2.116V2.532h2.116z'/%3E%3Cg fill-rule='nonzero'%3E%3Cpath d='M165.367 19c-5.09 0-9.367-4.265-9.367-9.5s4.277-9.5 9.367-9.5c2.818 0 4.823 1.133 6.33 2.622l-1.775 1.827c-1.082-1.04-2.55-1.857-4.555-1.857-3.72 0-6.628 3.081-6.628 6.908 0 3.827 2.907 6.908 6.628 6.908 2.411 0 3.78-1 4.664-1.898.724-.745 1.19-1.806 1.37-3.265h-6.034V8.643h8.494c.09.459.139 1.02.139 1.622 0 1.95-.516 4.357-2.183 6.072-1.627 1.734-3.691 2.663-6.45 2.663zM188 13c0 3.456-2.69 6-6 6s-6-2.544-6-6c0-3.476 2.69-6 6-6s6 2.524 6 6zm-2.63 0c0-2.164-1.563-3.636-3.37-3.636-1.807 0-3.37 1.482-3.37 3.636 0 2.134 1.563 3.636 3.37 3.636 1.807 0 3.37-1.492 3.37-3.636zM201 13c0 3.456-2.69 6-6 6-3.3 0-6-2.544-6-6 0-3.476 2.69-6 6-6s6 2.524 6 6zm-2.62 0c0-2.164-1.563-3.636-3.37-3.636-1.807 0-3.37 1.482-3.37 3.636 0 2.134 1.563 3.636 3.37 3.636 1.807.01 3.37-1.492 3.37-3.636zM213 7.362v10.53c0 4.337-2.499 6.108-5.457 6.108-2.786 0-4.452-1.908-5.083-3.465l2.192-.93c.392.96 1.35 2.085 2.891 2.085 1.896 0 3.064-1.204 3.064-3.445v-.841h-.087c-.564.714-1.656 1.33-3.025 1.33-2.872 0-5.495-2.554-5.495-5.842C202 9.584 204.633 7 207.495 7c1.37 0 2.46.626 3.025 1.311h.087v-.949H213zm-2.221 5.54c0-2.066-1.35-3.582-3.064-3.582-1.742 0-3.197 1.507-3.197 3.582 0 2.045 1.455 3.533 3.197 3.533 1.714 0 3.064-1.488 3.064-3.533zM219 1v18h-3V1zM228.844 14.973l2.046 1.363c-.662.981-2.256 2.664-5.014 2.664-3.42 0-5.876-2.634-5.876-6 0-3.566 2.487-6 5.585-6 3.119 0 4.643 2.474 5.144 3.816l.271.681-8.032 3.326c.612 1.202 1.574 1.823 2.918 1.823s2.276-.671 2.958-1.673zm-6.307-2.163 5.375-2.224c-.301-.751-1.184-1.272-2.237-1.272-1.343 0-3.208 1.182-3.138 3.496z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}.swg-button-light:hover,.swg-button:hover{background-color:#f8f8f8}.swg-button-light:focus,.swg-button:focus{box-shadow:#e8e8e8}.swg-button-light:active,.swg-button:active{background-color:#fff}.swg-button-dark:hover{background-color:#3c4043}.swg-button-dark:focus{box-shadow:#202124}.swg-button-dark:active{background-color:#5f6368}.swg-smart-button{border:none;padding:0;background:transparent;min-height:126px;position:relative;min-width:300px;width:300px;border-radius:0;overflow:hidden}.swg-smart-button:focus{outline:none}.swg-button-light:lang(ar):after,.swg-button:lang(ar):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-ar-lt.svg)}.swg-button-dark:lang(ar):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-ar-dk.svg)}.swg-button-light:lang(de):after,.swg-button:lang(de):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-de-lt.svg)}.swg-button-dark:lang(de):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-de-dk.svg)}.swg-button-light:lang(es):after,.swg-button:lang(es):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-es-lt.svg)}.swg-button-dark:lang(es):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-es-dk.svg)}.swg-button-light:lang(es-latam):after,.swg-button:lang(es-latam):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-es-latam-lt.svg)}.swg-button-dark:lang(es-latam):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-es-latam-dk.svg)}.swg-button-light:lang(es-latn):after,.swg-button:lang(es-latn):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-es-latam-lt.svg)}.swg-button-dark:lang(es-latn):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-es-latam-dk.svg)}.swg-button-light:lang(fr):after,.swg-button:lang(fr):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-fr-lt.svg)}.swg-button-dark:lang(fr):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-fr-dk.svg)}.swg-button-light:lang(hi):after,.swg-button:lang(hi):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-hi-lt.svg)}.swg-button-dark:lang(hi):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-hi-dk.svg)}.swg-button-light:lang(id):after,.swg-button:lang(id):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-id-lt.svg)}.swg-button-dark:lang(id):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-id-dk.svg)}.swg-button-light:lang(it):after,.swg-button:lang(it):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-it-lt.svg)}.swg-button-dark:lang(it):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-it-dk.svg)}.swg-button-light:lang(jp):after,.swg-button:lang(jp):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-jp-lt.svg)}.swg-button-dark:lang(jp):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-jp-dk.svg)}.swg-button-light:lang(ko):after,.swg-button:lang(ko):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-ko-lt.svg)}.swg-button-dark:lang(ko):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-ko-dk.svg)}.swg-button-light:lang(ms):after,.swg-button:lang(ms):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-ms-lt.svg)}.swg-button-dark:lang(ms):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-ms-dk.svg)}.swg-button-light:lang(nl):after,.swg-button:lang(nl):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-nl-lt.svg)}.swg-button-dark:lang(nl):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-nl-dk.svg)}.swg-button-light:lang(no):after,.swg-button:lang(no):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-no-lt.svg)}.swg-button-dark:lang(no):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-no-dk.svg)}.swg-button-light:lang(pl):after,.swg-button:lang(pl):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-pl-lt.svg)}.swg-button-dark:lang(pl):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-pl-dk.svg)}.swg-button-light:lang(pt):after,.swg-button:lang(pt):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-pt-lt.svg)}.swg-button-dark:lang(pt):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-pt-dk.svg)}.swg-button-light:lang(pt-br):after,.swg-button:lang(pt-br):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-pt-br-lt.svg)}.swg-button-dark:lang(pt-br):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-pt-br-dk.svg)}.swg-button-light:lang(ru):after,.swg-button:lang(ru):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-ru-lt.svg)}.swg-button-dark:lang(ru):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-ru-dk.svg)}.swg-button-light:lang(se):after,.swg-button:lang(se):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-se-lt.svg)}.swg-button-dark:lang(se):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-se-dk.svg)}.swg-button-light:lang(th):after,.swg-button:lang(th):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-th-lt.svg)}.swg-button-dark:lang(th):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-th-dk.svg)}.swg-button-light:lang(tr):after,.swg-button:lang(tr):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-tr-lt.svg)}.swg-button-dark:lang(tr):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-tr-dk.svg)}.swg-button-light:lang(uk):after,.swg-button:lang(uk):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-uk-lt.svg)}.swg-button-dark:lang(uk):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-uk-dk.svg)}.swg-button-light:lang(zh-tw):after,.swg-button:lang(zh-tw):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-zh-tw-lt.svg)}.swg-button-dark:lang(zh-tw):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-zh-tw-dk.svg)}.swg-button-v2-dark,.swg-button-v2-light{border:0;border-radius:4px;outline:0;width:237px;min-width:237px;height:44px;min-height:44px;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;box-sizing:border-box;font-family:Google Sans,Roboto-Regular,sans-serif,arial;font-weight:500;font-size:14px;letter-spacing:0.001em;cursor:pointer}.swg-button-v2-light{color:#1a73e8;background-color:#fff;border:1px solid #dadce0}.swg-button-v2-light[disabled]{pointer-events:none;color:rgba(60,64,67,0.38);border:1px solid rgba(60,64,67,0.12)}.swg-button-v2-light:hover{box-shadow:0px 1px 2px rgba(60,64,67,0.3),0px 1px 3px 1px rgba(60,64,67,0.15);background:linear-gradient(0deg,rgba(26,115,232,0.04),rgba(26,115,232,0.04)),#fff;border:none}.swg-button-v2-light:focus{box-shadow:0px 1px 2px rgba(60,64,67,0.3),0px 2px 6px 2px rgba(60,64,67,0.15);background:linear-gradient(0deg,rgba(26,115,232,0.08),rgba(26,115,232,0.08)),#fff;border:none}.swg-button-v2-light:active{background-color:#fff;box-shadow:0px 6px 10px 4px rgba(60,64,67,0.15),0px 2px 3px rgba(60,64,67,0.3);border:none}.swg-button-v2-dark{color:#fff;background-color:#3c4043}.swg-button-v2-dark[disabled]{color:hsla(0,0%,100%,0.38);pointer-events:none}.swg-button-v2-dark:active,.swg-button-v2-dark:hover{box-shadow:0px 2px 6px 2px rgba(0,0,0,0.15),0px 1px 2px rgba(0,0,0,0.3);background-color:#202124}.swg-button-v2-dark:focus{box-shadow:0px 6px 10px 4px rgba(0,0,0,0.15),0px 2px 3px rgba(0,0,0,0.3);background-color:#202124}.swg-button-v2-icon-dark,.swg-button-v2-icon-light{background-size:contain;width:18px;height:18px;margin-left:16px;margin-right:8px}.swg-button-v2-icon-light{background-image:url(https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg)}.swg-button-v2-light[disabled] .swg-button-v2-icon-light{background-image:url(https://fonts.gstatic.com/s/i/googlematerialicons/google/v20/gm_grey-24dp/2x/gm_google_gm_grey_24dp.png);opacity:0.38}.swg-button-v2-icon-dark{background-image:url(https://fonts.gstatic.com/s/i/googlematerialicons/google/v13/white-24dp/2x/gm_google_white_24dp.png)}.swg-button-v2-dark[disabled] .swg-button-v2-icon-dark{background-image:url(https://fonts.gstatic.com/s/i/googlematerialicons/google/v20/gm_grey-24dp/2x/gm_google_gm_grey_24dp.png)}[subscriptions-action][subscriptions-google-rtc]{opacity:0.5;cursor:not-allowed}\n/*# sourceURL=/extensions/amp-subscriptions-google/0.1/amp-subscriptions-google.css*/";

  // src/style-installer.js
  var TRANSFORMER_PROP = "__AMP_CSS_TR";
  var STYLE_MAP_PROP = "__AMP_CSS_SM";
  function installStylesForDoc(ampdoc2, cssText, cb, opt_isRuntimeCss, opt_ext) {
    var cssRoot = ampdoc2.getHeadNode();
    var style = insertStyleElement(cssRoot, maybeTransform(cssRoot, cssText), opt_isRuntimeCss || false, opt_ext || null);
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
  function insertStyleElement(cssRoot, cssText, isRuntimeCss, ext) {
    var styleMap = cssRoot[STYLE_MAP_PROP];
    if (!styleMap) {
      styleMap = cssRoot[STYLE_MAP_PROP] = map();
    }
    var isExtCss = !isRuntimeCss && ext && ext != "amp-custom" && ext != "amp-keyframes";
    var key = isRuntimeCss ? "amp-runtime" : isExtCss ? "amp-extension=" + ext : null;
    if (key) {
      var existing = getExistingStyleElement(cssRoot, styleMap, key);
      if (existing) {
        if (existing.tagName == "STYLE" && existing.textContent !== cssText) {
          existing.textContent = cssText;
        }
        return existing;
      }
    }
    var doc = cssRoot.ownerDocument || cssRoot;
    var style = doc.createElement("style");
    style.textContent = cssText;
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
  function maybeTransform(cssRoot, cssText) {
    var transformer = cssRoot[TRANSFORMER_PROP];
    return transformer ? transformer(cssText) : cssText;
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
      var cache3 = this.cache_;
      var oldest = this.access_ + 1;
      var oldestKey;
      for (var key in cache3) {
        var access = cache3[key].access;
        if (access < oldest) {
          oldest = access;
          oldestKey = key;
        }
      }
      if (oldestKey !== void 0) {
        delete cache3[oldestKey];
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
    return parseUrlWithA3(cachedAnchorEl, url, isEsm() || opt_nocache ? null : urlCache);
  }
  function parseUrlWithA3(anchorEl, url, opt_cache) {
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

  // extensions/amp-subscriptions/0.1/analytics.js
  var SubscriptionAnalyticsEvents = {
    PLATFORM_ACTIVATED: "subscriptions-service-activated",
    PLATFORM_ACTIVATED_DEPRECATED: "subscriptions-platform-activated",
    PAYWALL_ACTIVATED: "subscriptions-paywall-activated",
    PLATFORM_REGISTERED: "subscriptions-service-registered",
    PLATFORM_REGISTERED_DEPRECATED: "subscriptions-platform-registered",
    PLATFORM_REAUTHORIZED: "subscriptions-service-re-authorized",
    PLATFORM_REAUTHORIZED_DEPRECATED: "subscriptions-platform-re-authorized",
    ACTION_DELEGATED: "subscriptions-action-delegated",
    ENTITLEMENT_RESOLVED: "subscriptions-entitlement-resolved",
    STARTED: "subscriptions-started",
    ACCESS_GRANTED: "subscriptions-access-granted",
    ACCESS_DENIED: "subscriptions-access-denied",
    LINK_REQUESTED: "subscriptions-link-requested",
    LINK_COMPLETE: "subscriptions-link-complete",
    LINK_CANCELED: "subscriptions-link-canceled",
    SUBSCRIPTIONS_ACTION: "subscriptions-action"
  };
  var Action = {
    LOGIN: "login",
    LOGOUT: "logout",
    LINK: "link",
    SUBSCRIBE: "subscribe",
    CONTRIBUTE: "contribute",
    SHOW_CONTRIBUTION_OPTIONS: "showContributionOptions",
    SHOW_OFFERS: "showOffers"
  };
  var ActionStatus = {
    STARTED: "started",
    REJECTED: "rejected",
    FAILED: "failed",
    SUCCESS: "success"
  };

  // extensions/amp-subscriptions/0.1/constants.js
  var SubscriptionsScoreFactor = {
    IS_READY_TO_PAY: "isReadyToPay",
    SUPPORTS_VIEWER: "supportsViewer"
  };

  // third_party/subscriptions-project/config.js
  init_promise();
  init_promise();
  var AMP_USER_ERROR_SENTINEL = "\u200B\u200B\u200B";
  function duplicateErrorIfNecessary3(error) {
    var messageProperty = Object.getOwnPropertyDescriptor(error, "message");
    if (messageProperty && messageProperty.writable) {
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
  function createErrorVargs2(var_args) {
    var error = null;
    var message = "";
    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (arg instanceof Error && !error) {
        error = duplicateErrorIfNecessary3(arg);
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
  var ErrorLogger = /* @__PURE__ */ function() {
    function ErrorLogger2(opt_suffix) {
      if (opt_suffix === void 0) {
        opt_suffix = "";
      }
      this.suffix_ = opt_suffix;
    }
    var _proto4 = ErrorLogger2.prototype;
    _proto4.prepareError_ = function prepareError_(error) {
      if (this.suffix_) {
        if (!error.message) {
          error.message = this.suffix_;
        } else if (error.message.indexOf(this.suffix_) === -1) {
          error.message = this.suffix_;
        }
      }
    };
    _proto4.createError = function createError2(var_args) {
      var error = createErrorVargs2.apply(null, Array.prototype.slice.call(arguments));
      this.prepareError_(error);
      return error;
    };
    _proto4.createExpectedError = function createExpectedError2(var_args) {
      var error = createErrorVargs2.apply(null, Array.prototype.slice.call(arguments));
      this.prepareError_(error);
      error.expected = true;
      return error;
    };
    _proto4.error = function error(var_args) {
      throw this.createError.apply(this, arguments);
    };
    _proto4.expectedError = function expectedError(var_args) {
      throw this.createExpectedError.apply(this, arguments);
    };
    return ErrorLogger2;
  }();
  var userLogger = new ErrorLogger(self.__AMP_TOP ? AMP_USER_ERROR_SENTINEL : "");
  new ErrorLogger();
  var ALLOWED_TYPES = ["CreativeWork", "Article", "NewsArticle", "Blog", "Comment", "Course", "HowTo", "Message", "Review", "WebPage"];
  var RE_ALLOWED_TYPES = new RegExp(ALLOWED_TYPES.join("|"));

  // extensions/amp-subscriptions/0.1/doc-impl.js
  var DocImpl = /* @__PURE__ */ function() {
    function DocImpl2(ampdoc2) {
      this.ampdoc_ = ampdoc2;
      this.viewport_ = Services.viewportForDoc(this.ampdoc_);
    }
    var _proto = DocImpl2.prototype;
    _proto.getWin = function getWin2() {
      return this.ampdoc_.win;
    };
    _proto.getRootNode = function getRootNode() {
      return this.ampdoc_.getRootNode();
    };
    _proto.getRootElement = function getRootElement() {
      var root = this.ampdoc_.getRootNode();
      return dev().assertElement(root.documentElement || root.body || root);
    };
    _proto.getHead = function getHead() {
      return dev().assertElement(this.ampdoc_.getHeadNode());
    };
    _proto.getBody = function getBody() {
      return this.ampdoc_.isBodyAvailable() ? this.ampdoc_.getBody() : null;
    };
    _proto.isReady = function isReady() {
      return this.ampdoc_.isReady();
    };
    _proto.whenReady = function whenReady() {
      return this.ampdoc_.whenReady();
    };
    _proto.addToFixedLayer = function addToFixedLayer(element) {
      return this.viewport_.addToFixedLayer(element, true);
    };
    return DocImpl2;
  }();

  // extensions/amp-subscriptions/0.1/entitlement.js
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
  var GrantReason = {
    "SUBSCRIBER": "SUBSCRIBER",
    "METERING": "METERING",
    "FREE": "UNLOCKED",
    "LAA": "LAA"
  };
  var Entitlement2 = /* @__PURE__ */ function() {
    Entitlement3.empty = function empty(service) {
      return new Entitlement3({
        source: "",
        raw: "",
        service: service,
        granted: false
      });
    };
    function Entitlement3(input) {
      var dataObject = input.dataObject, decryptedDocumentKey = input.decryptedDocumentKey, _input$grantReason = input.grantReason, grantReason = _input$grantReason === void 0 ? "" : _input$grantReason, _input$granted = input.granted, granted = _input$granted === void 0 ? false : _input$granted, _input$raw = input.raw, raw = _input$raw === void 0 ? "" : _input$raw, service = input.service, source = input.source;
      this.raw = raw;
      this.source = source;
      this.service = service;
      this.granted = granted;
      this.grantReason = grantReason;
      this.data = dataObject;
      this.decryptedDocumentKey = decryptedDocumentKey;
    }
    var _proto = Entitlement3.prototype;
    _proto.json = function json() {
      var entitlementJson = dict({
        "source": this.source,
        "service": this.service,
        "granted": this.granted,
        "grantReason": this.grantReason,
        "data": this.data
      });
      return entitlementJson;
    };
    _proto.jsonForPingback = function jsonForPingback() {
      return _extends2({
        "raw": this.raw
      }, this.json());
    };
    Entitlement3.parseFromJson = function parseFromJson(json, rawData) {
      if (rawData === void 0) {
        rawData = null;
      }
      if (!json) {
        json = dict();
      }
      var raw = rawData || JSON.stringify(json);
      var source = json["source"] || "";
      var granted = json["granted"] || false;
      var grantReason = json["grantReason"];
      var dataObject = json["data"] || null;
      var decryptedDocumentKey = json["decryptedDocumentKey"] || null;
      return new Entitlement3({
        source: source,
        raw: raw,
        service: "",
        granted: granted,
        grantReason: grantReason,
        dataObject: dataObject,
        decryptedDocumentKey: decryptedDocumentKey
      });
    };
    _proto.isSubscriber = function isSubscriber() {
      return this.granted && this.grantReason === GrantReason.SUBSCRIBER;
    };
    _proto.isFree = function isFree() {
      return this.granted && this.grantReason === GrantReason.FREE;
    };
    return Entitlement3;
  }();

  // extensions/amp-subscriptions/0.1/url-builder.js
  var UrlBuilder = /* @__PURE__ */ function() {
    function UrlBuilder2(ampdoc2, readerIdPromise) {
      var headNode = ampdoc2.getHeadNode();
      this.urlReplacements_ = Services.urlReplacementsForDoc(headNode);
      this.readerIdPromise_ = readerIdPromise;
      this.authResponse_ = null;
    }
    var _proto = UrlBuilder2.prototype;
    _proto.setAuthResponse = function setAuthResponse(authResponse) {
      this.authResponse_ = authResponse;
    };
    _proto.buildUrl = function buildUrl(url, useAuthData) {
      var _this = this;
      return this.prepareUrlVars_(useAuthData).then(function(vars) {
        return _this.urlReplacements_.expandUrlAsync(url, vars);
      });
    };
    _proto.collectUrlVars = function collectUrlVars(url, useAuthData) {
      var _this2 = this;
      return this.prepareUrlVars_(useAuthData).then(function(vars) {
        return _this2.urlReplacements_.collectVars(url, vars);
      });
    };
    _proto.prepareUrlVars_ = function prepareUrlVars_(useAuthData) {
      var _this3 = this;
      return this.readerIdPromise_.then(function(readerId) {
        var vars = {
          "READER_ID": readerId,
          "ACCESS_READER_ID": readerId
        };
        if (useAuthData) {
          vars["AUTHDATA"] = function(field) {
            if (_this3.authResponse_) {
              return getValueForExpr(_this3.authResponse_, field);
            }
            return void 0;
          };
        }
        return vars;
      });
    };
    return UrlBuilder2;
  }();

  // extensions/amp-subscriptions-google/0.1/amp-subscriptions-google.js
  var _SWG_EVENTS_TO_SUPPRE;
  var _AMP_EVENT_TO_SWG_EVE;
  var _Action$SHOW_OFFERS;
  var _AMP_ACTION_TO_SWG_EV;
  var TAG2 = "amp-subscriptions-google";
  var PLATFORM_KEY = "subscribe.google.com";
  var GOOGLE_DOMAIN_RE2 = /(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/;
  var ShowcaseStrategy = {
    NONE: 1,
    LEAD_ARTICLE: 2,
    EXTENDED_ACCESS: 3
  };
  var SERVICE_TIMEOUT = 3e3;
  var SWG_EVENTS_TO_SUPPRESS = (_SWG_EVENTS_TO_SUPPRE = {}, _SWG_EVENTS_TO_SUPPRE[AnalyticsEvent.IMPRESSION_PAYWALL] = true, _SWG_EVENTS_TO_SUPPRE[AnalyticsEvent.IMPRESSION_PAGE_LOAD] = true, _SWG_EVENTS_TO_SUPPRE);
  var AMP_EVENT_TO_SWG_EVENT = (_AMP_EVENT_TO_SWG_EVE = {}, _AMP_EVENT_TO_SWG_EVE[SubscriptionAnalyticsEvents.PAYWALL_ACTIVATED] = AnalyticsEvent.IMPRESSION_PAYWALL, _AMP_EVENT_TO_SWG_EVE);
  var AMP_ACTION_TO_SWG_EVENT = (_AMP_ACTION_TO_SWG_EV = {}, _AMP_ACTION_TO_SWG_EV[Action.SHOW_OFFERS] = (_Action$SHOW_OFFERS = {}, _Action$SHOW_OFFERS[ActionStatus.STARTED] = null, _Action$SHOW_OFFERS), _AMP_ACTION_TO_SWG_EV);
  var GoogleSubscriptionsPlatformService = /* @__PURE__ */ function() {
    function GoogleSubscriptionsPlatformService2(ampdoc2) {
      this.ampdoc_ = ampdoc2;
    }
    var _proto = GoogleSubscriptionsPlatformService2.prototype;
    _proto.createPlatform = function createPlatform(platformConfig, serviceAdapter) {
      return new GoogleSubscriptionsPlatform(this.ampdoc_, platformConfig, serviceAdapter);
    };
    return GoogleSubscriptionsPlatformService2;
  }();
  var GoogleSubscriptionsPlatform = /* @__PURE__ */ function() {
    function GoogleSubscriptionsPlatform2(ampdoc2, platformConfig, serviceAdapter) {
      var _this = this;
      this.serviceAdapter_ = serviceAdapter;
      this.ampdoc_ = ampdoc2;
      this.vsync_ = Services.vsyncFor(ampdoc2.win);
      this.isDev_ = getMode().development || getMode().localDev;
      this.subscriptionAnalytics_ = serviceAdapter.getAnalytics();
      this.subscriptionAnalytics_.registerEventListener(this.handleAnalyticsEvent_.bind(this));
      this.urlBuilder_ = new UrlBuilder(this.ampdoc_, this.serviceAdapter_.getReaderId("local"));
      this.timer_ = Services.timerFor(this.ampdoc_.win);
      this.fetcher_ = new AmpFetcher(ampdoc2.win);
      var ampExperimentsForSwg = Object.keys(experimentToggles(ampdoc2.win)).filter(function(exp) {
        return exp.startsWith("swg-") && isExperimentOn(ampdoc2.win, exp);
      }).map(function(exp) {
        return exp.substring(4);
      });
      var swgConfig = {
        "experiments": ampExperimentsForSwg
      };
      var resolver = null;
      this.runtime_ = new ConfiguredRuntime(new DocImpl(ampdoc2), serviceAdapter.getPageConfig(), {
        fetcher: new AmpFetcher(ampdoc2.win),
        configPromise: new Promise(function(resolve) {
          return resolver = resolve;
        })
      }, swgConfig);
      this.eventManager_ = this.runtime_.eventManager();
      this.eventManager_.registerEventFilterer(GoogleSubscriptionsPlatform2.filterSwgEvent_);
      this.eventManager_.logEvent({
        eventType: AnalyticsEvent.IMPRESSION_PAGE_LOAD,
        eventOriginator: EventOriginator.AMP_CLIENT,
        isFromUserAction: false,
        additionalParameters: null
      });
      this.runtime_.analytics().setUrl(ampdoc2.getUrl());
      resolver();
      this.runtime_.setOnLoginRequest(function(request) {
        _this.onLoginRequest_(request && request.linkRequested);
      });
      this.runtime_.setOnLinkComplete(function() {
        _this.onLinkComplete_();
        _this.subscriptionAnalytics_.actionEvent(_this.getPlatformKey(), Action.LINK, ActionStatus.SUCCESS);
        _this.subscriptionAnalytics_.serviceEvent(SubscriptionAnalyticsEvents.LINK_COMPLETE, _this.getPlatformKey());
      });
      this.runtime_.setOnFlowStarted(function(e) {
        var params = {};
        var data = getData(e) || {};
        switch (e.flow) {
          case Action.SUBSCRIBE:
            params["product"] = data["skuId"] || data["product"] || "unknown productId";
            params["active"] = true;
            break;
          case Action.SHOW_OFFERS:
            params["skus"] = data["skus"] || "*";
            params["source"] = data["source"] || "unknown triggering source";
            params["active"] = data["active"] || null;
            break;
        }
        if (e.flow == Action.SUBSCRIBE || e.flow == Action.CONTRIBUTE || e.flow == Action.SHOW_CONTRIBUTION_OPTIONS || e.flow == Action.SHOW_OFFERS) {
          _this.subscriptionAnalytics_.actionEvent(_this.getPlatformKey(), e.flow, ActionStatus.STARTED, params);
        }
      });
      this.runtime_.setOnFlowCanceled(function(e) {
        if (e.flow == "linkAccount") {
          _this.onLinkComplete_();
          _this.subscriptionAnalytics_.actionEvent(_this.getPlatformKey(), Action.LINK, ActionStatus.REJECTED);
          _this.subscriptionAnalytics_.serviceEvent(SubscriptionAnalyticsEvents.LINK_CANCELED, _this.getPlatformKey());
        } else if (e.flow == Action.SUBSCRIBE || e.flow == Action.CONTRIBUTE || e.flow == Action.SHOW_CONTRIBUTION_OPTIONS || e.flow == Action.SHOW_OFFERS) {
          _this.subscriptionAnalytics_.actionEvent(_this.getPlatformKey(), e.flow, ActionStatus.REJECTED);
        }
      });
      this.runtime_.setOnNativeSubscribeRequest(function() {
        _this.onNativeSubscribeRequest_();
      });
      this.runtime_.setOnPaymentResponse(function(promise) {
        promise.then(function(response) {
          _this.onSubscribeResponse_(response, response.productType === "CONTRIBUTION" ? Action.CONTRIBUTE : Action.SUBSCRIBE);
        });
      });
      this.serviceConfig_ = platformConfig;
      this.viewerPromise_ = Services.viewerForDoc(ampdoc2);
      this.isGoogleViewer_ = false;
      this.resolveGoogleViewer_(this.viewerPromise_);
      this.isReadyToPay_ = false;
      installStylesForDoc(ampdoc2, CSS3, function() {
      }, false, TAG2);
      this.enableMetering_ = !!this.serviceConfig_["enableMetering"];
      this.enableLAA_ = !!this.serviceConfig_["enableLAA"];
      this.enableEntitlements_ = this.serviceConfig_["enableEntitlements"] === false ? false : true;
      userAssert(!(this.enableLAA_ && this.enableMetering_), "enableLAA and enableMetering are mutually exclusive.");
      this.skuMapUrl_ = this.serviceConfig_["skuMapUrl"] || null;
      this.skuMap_ = {};
      this.rtcPromise_ = this.maybeFetchRealTimeConfig();
    }
    GoogleSubscriptionsPlatform2.filterSwgEvent_ = function filterSwgEvent_(event) {
      if (event.eventOriginator !== EventOriginator.SWG_CLIENT) {
        return FilterResult.PROCESS_EVENT;
      }
      return SWG_EVENTS_TO_SUPPRESS[event.eventType] ? FilterResult.CANCEL_EVENT : FilterResult.PROCESS_EVENT;
    };
    var _proto2 = GoogleSubscriptionsPlatform2.prototype;
    _proto2.handleAnalyticsEvent_ = function handleAnalyticsEvent_(event, optVarsUnused, internalVars) {
      var eventType = null;
      var action = internalVars["action"];
      var status = internalVars["status"];
      if (AMP_EVENT_TO_SWG_EVENT[event]) {
        eventType = AMP_EVENT_TO_SWG_EVENT[event];
      } else if (action && AMP_ACTION_TO_SWG_EVENT[action]) {
        eventType = AMP_ACTION_TO_SWG_EVENT[action][status];
      }
      if (!eventType) {
        return;
      }
      this.eventManager_.logEvent({
        eventType: eventType,
        eventOriginator: EventOriginator.AMP_CLIENT,
        isFromUserAction: null,
        additionalParameters: null
      });
    };
    _proto2.onLoginRequest_ = function onLoginRequest_(linkRequested) {
      if (linkRequested && this.isGoogleViewer_) {
        this.loginWithAmpReaderId_();
        this.subscriptionAnalytics_.actionEvent(this.getPlatformKey(), Action.LINK, ActionStatus.STARTED);
        this.subscriptionAnalytics_.serviceEvent(SubscriptionAnalyticsEvents.LINK_REQUESTED, this.getPlatformKey());
      } else {
        this.maybeComplete_(this.serviceAdapter_.delegateActionToLocal("login", null));
      }
    };
    _proto2.loginWithAmpReaderId_ = function loginWithAmpReaderId_() {
      var _this2 = this;
      this.serviceAdapter_.getReaderId("local").then(function(ampReaderId) {
        _this2.runtime_.linkAccount({
          ampReaderId: ampReaderId
        });
      });
    };
    _proto2.onLinkComplete_ = function onLinkComplete_() {
      this.serviceAdapter_.resetPlatforms();
    };
    _proto2.onNativeSubscribeRequest_ = function onNativeSubscribeRequest_() {
      this.maybeComplete_(this.serviceAdapter_.delegateActionToLocal(Action.SUBSCRIBE, null));
    };
    _proto2.maybeComplete_ = function maybeComplete_(promise) {
      var _this3 = this;
      promise.then(function(result) {
        if (result) {
          _this3.runtime_.reset();
        }
      });
    };
    _proto2.maybeFetchRealTimeConfig = function maybeFetchRealTimeConfig() {
      var _this4 = this;
      var timeout = SERVICE_TIMEOUT;
      if (this.isDev_) {
        timeout = SERVICE_TIMEOUT * 2;
      }
      if (!this.skuMapUrl_) {
        return resolvedPromise();
      }
      assertHttpsUrl(this.skuMapUrl_, "skuMapUrl must be valid https Url");
      return this.ampdoc_.whenFirstVisible().then(function() {
        return _this4.urlBuilder_.buildUrl(_this4.skuMapUrl_, false);
      }).then(function(url) {
        return _this4.timer_.timeoutPromise(timeout, _this4.fetcher_.fetchCredentialedJson(url));
      }).then(function(resJson) {
        userAssert(resJson["subscribe.google.com"], "skuMap does not contain subscribe.google.com section");
        _this4.skuMap_ = resJson["subscribe.google.com"];
      }).catch(function(reason) {
        throw user().createError("fetch skuMap failed for " + PLATFORM_KEY, reason);
      });
    };
    _proto2.onSubscribeResponse_ = function onSubscribeResponse_(response, eventType) {
      var _this5 = this;
      response.complete().then(function() {
        _this5.serviceAdapter_.resetPlatforms();
      });
      var product;
      try {
        var entitlement = response.entitlements && response.entitlements.getEntitlementForThis();
        if (entitlement) {
          product = entitlement.getSku();
        }
      } catch (ex) {
      }
      var params = {
        "active": true,
        "product": product || "unknown subscriptionToken"
      };
      this.subscriptionAnalytics_.actionEvent(this.getPlatformKey(), eventType, ActionStatus.SUCCESS, params);
    };
    _proto2.getUrlParams_ = function getUrlParams_() {
      return parseQueryString(this.ampdoc_.win.location.search);
    };
    _proto2.maybeGetLAAEntitlement_ = function maybeGetLAAEntitlement_() {
      return this.getShowcaseStrategy_().then(function(strategy) {
        if (strategy !== ShowcaseStrategy.LEAD_ARTICLE) {
          return null;
        }
        return new Entitlement2({
          source: "google:laa",
          raw: "",
          service: PLATFORM_KEY,
          granted: true,
          grantReason: GrantReason.LAA,
          dataObject: {},
          decryptedDocumentKey: null
        });
      });
    };
    _proto2.getShowcaseStrategy_ = function getShowcaseStrategy_() {
      var _this6 = this;
      if (!this.enableLAA_ && !this.enableMetering_) {
        return Promise.resolve(ShowcaseStrategy.NONE);
      }
      return this.viewerPromise_.getReferrerUrl().then(function(referrer) {
        var parsedReferrer = parseUrlDeprecated(referrer);
        if ((parsedReferrer.protocol !== "https:" || !GOOGLE_DOMAIN_RE2.test(parsedReferrer.hostname)) && !getMode(_this6.ampdoc_.win).localDev) {
          return ShowcaseStrategy.NONE;
        }
        var urlParams = _this6.getUrlParams_();
        if (parseInt(urlParams["gaa_ts"], 16) < Date.now() / 1e3) {
          return ShowcaseStrategy.NONE;
        }
        if (!urlParams["gaa_n"] || !urlParams["gaa_sig"]) {
          return ShowcaseStrategy.NONE;
        }
        if (urlParams["gaa_at"] === "la" && _this6.enableLAA_) {
          return ShowcaseStrategy.LEAD_ARTICLE;
        } else if ((urlParams["gaa_at"] === "la" || urlParams["gaa_at"] === "g") && _this6.enableMetering_) {
          return ShowcaseStrategy.EXTENDED_ACCESS;
        } else {
          return ShowcaseStrategy.NONE;
        }
      });
    };
    _proto2.isPrerenderSafe = function isPrerenderSafe() {
      return this.isGoogleViewer_ && !this.enableMetering_;
    };
    _proto2.getEntitlements = function getEntitlements() {
      var _this7 = this;
      var encryptedDocumentKey = this.serviceAdapter_.getEncryptedDocumentKey("google.com");
      userAssert(!(this.enableLAA_ && encryptedDocumentKey), "enableLAA cannot be used when the document is encrypted");
      return this.maybeGetLAAEntitlement_().then(function(laaEntitlement) {
        if (laaEntitlement) {
          return laaEntitlement;
        }
        if (!_this7.enableEntitlements_) {
          return null;
        }
        var showcaseStrategyPromise = _this7.getShowcaseStrategy_();
        var meteringStatePromise = _this7.serviceAdapter_.loadMeteringState();
        var promises = Promise.all([showcaseStrategyPromise, meteringStatePromise]);
        return promises.then(function(results) {
          var showcaseStrategy = results[0];
          var meteringState = results[1];
          var entitlementsParams = {};
          if (encryptedDocumentKey) {
            entitlementsParams.encryption = {
              encryptedDocumentKey: encryptedDocumentKey
            };
          }
          if (showcaseStrategy === ShowcaseStrategy.EXTENDED_ACCESS && meteringState) {
            _this7.runtime_.clear();
            entitlementsParams.metering = {
              state: meteringState
            };
            _this7.serviceAdapter_.rememberMeteringEntitlementsWereFetched();
          }
          return _this7.runtime_.getEntitlements(entitlementsParams).then(function(swgEntitlements) {
            return _this7.createAmpEntitlement(swgEntitlements);
          });
        });
      });
    };
    _proto2.createAmpEntitlement = function createAmpEntitlement(swgEntitlements) {
      if (swgEntitlements.isReadyToPay) {
        this.isReadyToPay_ = true;
      }
      var swgEntitlement = swgEntitlements.getEntitlementForThis();
      var granted = false;
      if (swgEntitlement && swgEntitlement.source) {
        granted = true;
      } else if (swgEntitlements.entitlements.length && swgEntitlements.entitlements[0].products.length) {
        swgEntitlement = swgEntitlements.entitlements[0];
      } else {
        return null;
      }
      swgEntitlements.ack();
      var grantReason;
      if (granted) {
        if (swgEntitlement.source === "google:metering") {
          grantReason = GrantReason.METERING;
        } else {
          grantReason = GrantReason.SUBSCRIBER;
        }
      } else {
        grantReason = null;
      }
      return new Entitlement2({
        source: swgEntitlement.source,
        raw: swgEntitlements.raw,
        service: PLATFORM_KEY,
        granted: granted,
        grantReason: grantReason,
        dataObject: swgEntitlement.json(),
        decryptedDocumentKey: swgEntitlements.decryptedDocumentKey
      });
    };
    _proto2.getPlatformKey = function getPlatformKey() {
      return PLATFORM_KEY;
    };
    _proto2.activate = function activate(entitlement, grantEntitlement, continueAuthorizationFlow) {
      var _this8 = this;
      var best = grantEntitlement || entitlement;
      var showcaseStrategyPromise = this.getShowcaseStrategy_();
      var meteringStatePromise = this.serviceAdapter_.loadMeteringState();
      var promises = Promise.all([showcaseStrategyPromise, meteringStatePromise]);
      promises.then(function(results) {
        var showcaseStrategy = results[0];
        var meteringState = results[1];
        if (showcaseStrategy === ShowcaseStrategy.EXTENDED_ACCESS) {
          if (!best.granted && !meteringState) {
            _this8.showMeteringRegwall_().then(continueAuthorizationFlow);
            return;
          }
          if (best.granted && !best.isSubscriber()) {
            _this8.runtime_.consumeShowcaseEntitlementJwt(best.raw, continueAuthorizationFlow);
            return;
          }
        }
        if (!best.granted) {
          _this8.runtime_.showOffers({
            list: "amp"
          });
        } else if (!best.isSubscriber()) {
          _this8.runtime_.showAbbrvOffer({
            list: "amp"
          });
        }
      });
    };
    _proto2.showMeteringRegwall_ = function showMeteringRegwall_() {
      var _this9 = this;
      var googleSignInDetailsPromise = GaaMeteringRegwall.show({
        iframeUrl: this.serviceConfig_["googleSignInHelperUrl"]
      });
      var ampReaderIdPromise = this.serviceAdapter_.getReaderId("local");
      var registerUserPromise = Promise.all([googleSignInDetailsPromise, ampReaderIdPromise]).then(function(results) {
        var googleSignInDetails = results[0];
        var ampReaderId = results[1];
        var url = _this9.serviceConfig_["extendedAccessRegistrationUrl"];
        var postBody = {
          googleSignInDetails: googleSignInDetails,
          ampReaderId: ampReaderId
        };
        return _this9.fetcher_.sendPostToPublisher(url, postBody);
      });
      var saveMeteringStatePromise = registerUserPromise.then(function(publisherResponse) {
        var meteringState = publisherResponse && publisherResponse["metering"] && publisherResponse["metering"]["state"];
        return _this9.serviceAdapter_.saveMeteringState(meteringState);
      });
      return saveMeteringStatePromise;
    };
    _proto2.reset = function reset() {
      this.runtime_.reset();
    };
    _proto2.isPingbackEnabled = function isPingbackEnabled() {
      return false;
    };
    _proto2.pingbackReturnsAllEntitlements = function pingbackReturnsAllEntitlements() {
      return false;
    };
    _proto2.pingback = function pingback() {
    };
    _proto2.getSupportedScoreFactor = function getSupportedScoreFactor(factorName) {
      switch (factorName) {
        case SubscriptionsScoreFactor.SUPPORTS_VIEWER:
          return this.isGoogleViewer_ ? 1 : 0;
        case SubscriptionsScoreFactor.IS_READY_TO_PAY:
          return this.isReadyToPay_ ? 1 : 0;
        default:
          return 0;
      }
    };
    _proto2.resolveGoogleViewer_ = function resolveGoogleViewer_(viewer) {
      var _this10 = this;
      var viewerUrl = viewer.getParam("viewerUrl");
      if (viewerUrl) {
        this.isGoogleViewer_ = GOOGLE_DOMAIN_RE2.test(parseUrlDeprecated(viewerUrl).hostname);
      } else {
        viewer.getViewerOrigin().then(function(origin) {
          if (origin) {
            _this10.isGoogleViewer_ = GOOGLE_DOMAIN_RE2.test(parseUrlDeprecated(origin).hostname);
          }
        });
      }
    };
    _proto2.getBaseScore = function getBaseScore() {
      return this.serviceConfig_["baseScore"] || 0;
    };
    _proto2.executeAction = function executeAction(action, sourceId) {
      var mappedSku, carouselOptions;
      var rtcPending = sourceId ? this.ampdoc_.getElementById(sourceId).hasAttribute("subscriptions-google-rtc") : false;
      if (rtcPending) {
        return;
      }
      if (sourceId && this.skuMap_) {
        mappedSku = getValueForExpr(this.skuMap_, sourceId + ".sku");
        carouselOptions = getValueForExpr(this.skuMap_, sourceId + ".carouselOptions");
      }
      if (action == Action.SUBSCRIBE) {
        if (mappedSku) {
          this.runtime_.subscribe(mappedSku);
        } else if (carouselOptions) {
          carouselOptions.isClosable = true;
          this.runtime_.showOffers(carouselOptions);
        } else {
          this.runtime_.showOffers({
            list: "amp",
            isClosable: true
          });
        }
        return Promise.resolve(true);
      }
      if (action == Action.CONTRIBUTE) {
        if (mappedSku) {
          this.runtime_.contribute(mappedSku);
        } else if (carouselOptions) {
          carouselOptions.isClosable = true;
          this.runtime_.showContributionOptions(carouselOptions);
        } else {
          this.runtime_.showContributionOptions({
            list: "amp",
            isClosable: true
          });
        }
        return Promise.resolve(true);
      }
      if (action == Action.LOGIN) {
        this.loginWithAmpReaderId_();
        return Promise.resolve(true);
      }
      return Promise.resolve(false);
    };
    _proto2.decorateUI = function decorateUI(element, action, options) {
      var _this11 = this;
      var opts = options ? options : {};
      switch (action) {
        case Action.SUBSCRIBE:
          element.textContent = "";
          this.runtime_.attachButton(element, options, function() {
          });
          break;
        case "subscribe-smartbutton":
        case "subscribe-smartbutton-light":
        case "subscribe-smartbutton-dark":
          element.textContent = "";
          opts.theme = action === "subscribe-smartbutton-dark" ? "dark" : "light";
          opts.lang = userAssert(element.getAttribute("subscriptions-lang"), "subscribe-smartbutton must have a language attribute");
          var messageTextColor = element.getAttribute("subscriptions-message-text-color");
          if (messageTextColor) {
            opts.messageTextColor = messageTextColor;
          }
          var messageNumber = element.getAttribute("subscriptions-message-number");
          if (messageNumber) {
            opts.messageNumber = messageNumber;
          }
          this.runtime_.attachSmartButton(element, opts, function() {
          });
          break;
        default:
      }
      this.rtcPromise_.then(function() {
        _this11.vsync_.mutate(function() {
          return Object.keys(_this11.skuMap_).forEach(function(elementId) {
            var element2 = _this11.ampdoc_.getElementById(elementId);
            if (element2) {
              devAssert(element2.hasAttribute("subscriptions-google-rtc"), "Trying to set real time config on element '" + elementId + "' with missing 'subscriptions-google-rtc' attrbute");
              element2.setAttribute("subscriptions-google-rtc-set", "");
              element2.removeAttribute("subscriptions-google-rtc");
            } else {
              user().warn(TAG2, 'Element "{elemendId}" in real time config not found');
            }
          });
        });
      });
    };
    return GoogleSubscriptionsPlatform2;
  }();
  var AmpFetcher = /* @__PURE__ */ function() {
    function AmpFetcher2(win) {
      this.xhr_ = Services.xhrFor(win);
      this.win_ = win;
    }
    var _proto3 = AmpFetcher2.prototype;
    _proto3.fetchCredentialedJson = function fetchCredentialedJson(url) {
      return this.xhr_.fetchJson(url, {
        credentials: "include",
        prerenderSafe: true
      }).then(function(response) {
        return response.json();
      });
    };
    _proto3.fetch = function fetch(input, opt_init) {
      return this.xhr_.fetch(input, opt_init);
    };
    _proto3.sendPost = function sendPost(url, message) {
      var init = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        credentials: "include",
        body: "f.req=" + JSON.stringify(message.toArray(false))
      };
      return this.fetch(url, init).then(function(response) {
        return response && response.json() || {};
      });
    };
    _proto3.sendBeacon = function sendBeacon(url, data) {
      var contentType = "application/x-www-form-urlencoded;charset=UTF-8";
      var body = "f.req=" + JSON.stringify(data.toArray(false));
      var sendBeacon2 = WindowInterface.getSendBeacon(this.win_);
      if (sendBeacon2) {
        var blob = new Blob([body], {
          type: contentType
        });
        sendBeacon2(url, blob);
        return;
      }
      var init = {
        method: "POST",
        headers: {
          "Content-Type": contentType
        },
        credentials: "include",
        body: body
      };
      this.fetch(url, init);
    };
    _proto3.sendPostToPublisher = function sendPostToPublisher(url, payload) {
      var init = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        ampCors: true,
        credentials: "include",
        body: JSON.stringify(payload)
      };
      var fetchPromise = this.fetch(url, init);
      var responsePromise = fetchPromise.then(function(response) {
        return response && response.json() || {};
      });
      return responsePromise;
    };
    return AmpFetcher2;
  }();
  AMP.registerServiceForDoc("subscriptions-google", function(ampdoc2) {
    var platformService = new GoogleSubscriptionsPlatformService(ampdoc2);
    var element = ampdoc2.getHeadNode();
    Services.subscriptionsServiceForDoc(element).then(function(service) {
      service.registerPlatform(PLATFORM_KEY, function(platformConfig, serviceAdapter) {
        return platformService.createPlatform(platformConfig, serviceAdapter);
      });
    });
    return platformService;
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
/**
 * @license
 * Copyright 2017 The Web Activities Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** @license
Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
})});
//# sourceMappingURL=amp-subscriptions-google-0.1.max.js.map
