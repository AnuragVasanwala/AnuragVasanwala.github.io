(function() {
  // extensions/amp-viewer-integration/0.1/messaging/messaging.js
  var TAG = "amp-viewer-messaging";
  var CHANNEL_OPEN_MSG = "channelOpen";
  var HANDSHAKE_POLL_MSG = "handshake-poll";
  var APP = "__AMPHTML__";
  var MessageType_Enum = {
    REQUEST: "q",
    RESPONSE: "s"
  };
  function parseMessage(message) {
    if (typeof message != "string") {
      return message;
    }
    if (message.charAt(0) != "{") {
      return null;
    }
    try {
      return JSON.parse(message);
    } catch (e) {
      return null;
    }
  }
  var WindowPortEmulator = /* @__PURE__ */ function() {
    function WindowPortEmulator2(win, origin, target) {
      this.win_ = win;
      this.origin_ = origin;
      this.target_ = target;
    }
    var _proto = WindowPortEmulator2.prototype;
    _proto.addEventListener = function addEventListener(eventType, handler) {
      var _this = this;
      this.win_.addEventListener("message", function(event) {
        if (event.origin == _this.origin_ && event.source == _this.target_) {
          handler(event);
        }
      });
    };
    _proto.postMessage = function postMessage(data) {
      var targetOrigin = this.origin_ === "null" ? "*" : this.origin_;
      this.target_.postMessage(data, targetOrigin);
    };
    _proto.start = function start() {
    };
    return WindowPortEmulator2;
  }();
  var Messaging = /* @__PURE__ */ function() {
    Messaging2.initiateHandshakeWithDocument = function initiateHandshakeWithDocument(target, opt_token) {
      return new Promise(function(resolve) {
        var intervalRef = setInterval(function() {
          var channel = new MessageChannel();
          var pollMessage = {
            app: APP,
            name: HANDSHAKE_POLL_MSG
          };
          target.postMessage(pollMessage, "*", [channel.port2]);
          var port = channel.port1;
          var listener = function listener2(event) {
            var message = parseMessage(event.data);
            if (!message) {
              return;
            }
            if (message.app === APP && message.name === CHANNEL_OPEN_MSG) {
              clearInterval(intervalRef);
              port.removeEventListener("message", listener2);
              var messaging = new Messaging2(null, port, false, opt_token, true);
              messaging.sendResponse_(message.requestid, CHANNEL_OPEN_MSG, null);
              resolve(messaging);
            }
          };
          port.addEventListener("message", listener);
          port.start();
        }, 1e3);
      });
    };
    Messaging2.waitForHandshakeFromDocument = function waitForHandshakeFromDocument(source, target, origin, opt_token, opt_cdnProxyRegex) {
      return new Promise(function(resolve) {
        var listener = function listener2(event) {
          var message = parseMessage(event.data);
          if (!message) {
            return;
          }
          if ((event.origin == origin || opt_cdnProxyRegex && opt_cdnProxyRegex.test(event.origin)) && (!event.source || event.source == target) && message.app === APP && message.name === CHANNEL_OPEN_MSG) {
            source.removeEventListener("message", listener2);
            var port = new WindowPortEmulator(source, event.origin, target);
            var messaging = new Messaging2(null, port, false, opt_token, true);
            messaging.sendResponse_(message.requestid, CHANNEL_OPEN_MSG, null);
            resolve(messaging);
          }
        };
        source.addEventListener("message", listener);
      });
    };
    function Messaging2(win, port, opt_isWebview, opt_token, opt_verifyToken) {
      this.win_ = win;
      this.port_ = port;
      this.isWebview_ = !!opt_isWebview;
      this.token_ = opt_token || null;
      this.verifyToken_ = !!opt_verifyToken;
      this.requestIdCounter_ = 0;
      this.waitingForResponse_ = {};
      this.messageHandlers_ = {};
      this.defaultHandler_ = null;
      this.port_.addEventListener("message", this.handleMessage_.bind(this));
      this.port_.start();
    }
    var _proto2 = Messaging2.prototype;
    _proto2.registerHandler = function registerHandler(messageName, requestHandler) {
      this.messageHandlers_[messageName] = requestHandler;
    };
    _proto2.unregisterHandler = function unregisterHandler(messageName) {
      delete this.messageHandlers_[messageName];
    };
    _proto2.setDefaultHandler = function setDefaultHandler(requestHandler) {
      this.defaultHandler_ = requestHandler;
    };
    _proto2.handleMessage_ = function handleMessage_(event) {
      var message = parseMessage(event.data);
      if (!message || message.app !== APP) {
        return;
      }
      if (this.token_ && this.verifyToken_ && message.messagingToken !== this.token_) {
        this.logError_(TAG + ": handleMessage_ error: ", "invalid token");
        return;
      }
      if (message.type === MessageType_Enum.REQUEST) {
        this.handleRequest_(message);
      } else if (message.type === MessageType_Enum.RESPONSE) {
        this.handleResponse_(message);
      }
    };
    _proto2.sendRequest = function sendRequest(messageName, messageData, awaitResponse) {
      var _this2 = this;
      var requestId = ++this.requestIdCounter_;
      var promise = void 0;
      if (awaitResponse) {
        promise = new Promise(function(resolve, reject) {
          _this2.waitingForResponse_[requestId] = {
            resolve: resolve,
            reject: reject
          };
        });
      }
      this.sendMessage_({
        app: APP,
        requestid: requestId,
        type: MessageType_Enum.REQUEST,
        name: messageName,
        data: messageData,
        rsvp: awaitResponse
      });
      return promise;
    };
    _proto2.sendResponse_ = function sendResponse_(requestId, messageName, messageData) {
      this.sendMessage_({
        app: APP,
        requestid: requestId,
        type: MessageType_Enum.RESPONSE,
        name: messageName,
        data: messageData
      });
    };
    _proto2.sendResponseError_ = function sendResponseError_(requestId, messageName, reason) {
      var errString = this.errorToString_(reason);
      this.logError_(TAG + ": sendResponseError_, message name: " + messageName, errString);
      this.sendMessage_({
        app: APP,
        requestid: requestId,
        type: MessageType_Enum.RESPONSE,
        name: messageName,
        data: null,
        error: errString
      });
    };
    _proto2.sendMessage_ = function sendMessage_(message) {
      var finalMessage = Object.assign(message, {});
      if (this.token_ && !this.verifyToken_) {
        finalMessage.messagingToken = this.token_;
      }
      this.port_.postMessage(this.isWebview_ ? JSON.stringify(finalMessage) : finalMessage);
    };
    _proto2.handleRequest_ = function handleRequest_(message) {
      var _this3 = this;
      var handler = this.messageHandlers_[message.name];
      if (!handler) {
        handler = this.defaultHandler_;
      }
      if (!handler) {
        var error = new Error("Cannot handle request because no default handler is set!");
        error.args = message.name;
        throw error;
      }
      var promise = handler(message.name, message.data, !!message.rsvp);
      if (message.rsvp) {
        var requestId = message.requestid;
        if (!promise) {
          this.sendResponseError_(requestId, message.name, new Error("no response"));
          throw new Error("expected response but none given: " + message.name);
        }
        promise.then(function(data) {
          _this3.sendResponse_(requestId, message.name, data);
        }, function(reason) {
          _this3.sendResponseError_(requestId, message.name, reason);
        });
      }
    };
    _proto2.handleResponse_ = function handleResponse_(message) {
      var requestId = message.requestid;
      var pending = this.waitingForResponse_[requestId];
      if (pending) {
        delete this.waitingForResponse_[requestId];
        if (message.error) {
          this.logError_(TAG + ": handleResponse_ error: ", message.error);
          pending.reject(new Error("Request " + message.name + " failed: " + message.error));
        } else {
          pending.resolve(message.data);
        }
      }
    };
    _proto2.logError_ = function logError_(state, opt_data) {
      if (!this.win_) {
        return;
      }
      var stateStr = "amp-messaging-error-logger: " + state;
      var dataStr = " data: " + this.errorToString_(opt_data);
      stateStr += dataStr;
      this.win_["viewerState"] = stateStr;
    };
    _proto2.errorToString_ = function errorToString_(err) {
      return err ? err.message ? err.message : String(err) : "unknown error";
    };
    return Messaging2;
  }();

  // extensions/amp-viewer-integration/0.1/examples/amp-viewer-host.js
  var AmpViewerHost = /* @__PURE__ */ function() {
    function AmpViewerHost2(win, ampIframe, frameOrigin, messageHandler, opt_logsId, opt_isWebview, opt_isHandshakePoll) {
      var _this = this;
      this.win = win;
      this.ampIframe_ = ampIframe;
      this.messageHandler_ = messageHandler;
      this.isWebview_ = !!opt_isWebview;
      this.logsId = opt_logsId;
      var target = this.ampIframe_.contentWindow;
      if (this.isWebview_ || opt_isHandshakePoll) {
        Messaging.initiateHandshakeWithDocument(target).then(function(messaging) {
          _this.messaging_ = messaging;
          _this.completeHandshake_();
        });
      } else {
        Messaging.waitForHandshakeFromDocument(this.win, target, frameOrigin).then(function(messaging) {
          _this.messaging_ = messaging;
          _this.completeHandshake_();
        });
      }
    }
    var _proto = AmpViewerHost2.prototype;
    _proto.completeHandshake_ = function completeHandshake_() {
      this.messaging_.setDefaultHandler(this.messageHandler_);
      this.sendRequest("visibilitychange", {
        state: this.visibilityState_,
        prerenderSize: this.prerenderSize
      }, true);
    };
    _proto.sendRequest = function sendRequest(type, data, awaitResponse) {
      this.log("sendRequest");
      if (!this.messaging_) {
        return;
      }
      return this.messaging_.sendRequest(type, data, awaitResponse);
    };
    _proto.log = function log() {
      var var_args = Array.prototype.slice.call(arguments, 0);
      var_args.unshift("[ViewerHost " + this.logsId + "]");
      console.log.apply(console, var_args);
    };
    return AmpViewerHost2;
  }();
  self.AmpViewerHost = AmpViewerHost;
})();
//# sourceMappingURL=amp-viewer-host.max.js.map
