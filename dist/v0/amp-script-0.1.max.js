(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-script",ev:"0.1",l:true,f:(function(AMP,_){
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

  // node_modules/@ampproject/worker-dom/dist/amp-production/main.mjs
  function _defineProperties(target, props) {
    for (var i3 = 0; i3 < props.length; i3++) {
      var descriptor = props[i3];
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
  var e = function e2(_e, t2, r3, n2, s2) {
    var o3 = s2.executorsAllowed.includes(8);
    return {
      execute: function execute(e3, n3, s3) {
        return o3 && s3 && (e3 = t2.getNode(e3[n3 + 1])) && (s3 = e3.transferControlToOffscreen(), r3.messageToWorker({
          12: 9,
          13: [e3._index_],
          38: s3
        }, [s3])), n3 + 2;
      }
    };
  };
  var t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  var r = function r2(e3, t2) {
    return Array.prototype.forEach.call(e3, t2);
  };
  var n = /* @__PURE__ */ function() {
    function n2(e3, t2) {
      var _this = this;
      this.nodes = this.count = this.stringContext = this.baseElement = void 0, this.createNodes = function(e4, t3) {
        var r3 = (e4 = new Uint16Array(e4)).length;
        for (var _s = 0; _s < r3; _s += 5) {
          var _n = void 0;
          if (e4[_s + 1] === 3)
            _n = document.createTextNode(_this.stringContext.get(e4[_s + 3]));
          else if (e4[_s + 1] === 8)
            _n = document.createComment(_this.stringContext.get(e4[_s + 3]));
          else if (e4[_s + 1] === 11)
            _n = document.createDocumentFragment();
          else if (_n = _this.stringContext.get(e4[_s + 2]), _n = e4[_s + 4] !== 0 ? document.createElementNS(_this.stringContext.get(e4[_s + 4]), _n) : document.createElement(_n), t3 && !t3.sanitize(_n))
            continue;
          _this.storeNode(_n, e4[_s]);
        }
      }, this.getNode = function(e4) {
        return (e4 = _this.nodes.get(e4)) && e4.nodeName === "BODY" ? _this.baseElement : e4;
      }, this.storeNodes = function(e4) {
        _this.storeNode(e4, ++_this.count), r(e4.childNodes, function(e5) {
          return _this.storeNodes(e5);
        });
      }, this.count = 2, this.stringContext = e3, this.nodes = new Map([[1, t2], [2, t2]]), this.baseElement = t2, t2._index_ = 2, r(t2.childNodes, function(e4) {
        return _this.storeNodes(e4);
      });
    }
    var _proto = n2.prototype;
    _proto.storeNode = function storeNode(e3, t2) {
      e3._index_ = t2, this.nodes.set(t2, e3);
    };
    return n2;
  }();
  var s = new Map();
  var o = function o2(e3, t2) {
    t2 && "value" in t2 && t2.oninput === null && (t2.oninput = function() {
      return a(e3, t2);
    });
  };
  var i = function i2(e3, t2) {
    t2 && "value" in t2 && !s.get(t2) && (new MutationObserver(function(t3) {
      return t3.map(function(t4) {
        return a(e3, t4.target);
      });
    }).observe(t2, {
      attributes: true
    }), s.set(t2, true));
  };
  var a = function a2(e3, t2) {
    return e3.messageToWorker({
      12: 4,
      40: {
        7: t2._index_,
        21: t2.value
      }
    });
  };
  var l = function l2(e3) {
    return Object.values(e3).map(function(e4) {
      return [e4.identifier, e4.screenX, e4.screenY, e4.clientX, e4.clientY, e4.pageX, e4.pageY, e4.target._index_];
    });
  };
  var u = function u2(e3, t2, r3, n2, s2) {
    var u3 = [], c3 = s2.executorsAllowed.includes(4);
    var d3 = [window.innerWidth, window.innerHeight];
    var h3 = function h4(e4, t3) {
      return function(n3) {
        t3 && n3.preventDefault();
        var s3 = n3.currentTarget;
        if (s3 && "value" in s3)
          a(r3, n3.currentTarget);
        else if (n3.type === "resize") {
          var _window = window, _e2 = _window.innerWidth, _t = _window.innerHeight;
          if (d3[0] === _e2 && d3[1] === _t)
            return;
          d3 = [window.innerWidth, window.innerHeight], r3.messageToWorker({
            12: 5,
            40: d3
          });
        }
        r3.messageToWorker({
          12: 1,
          39: {
            7: e4,
            25: n3.bubbles,
            26: n3.cancelable,
            27: n3.cancelBubble,
            28: [n3.currentTarget._index_ || 0],
            29: n3.defaultPrevented,
            30: n3.eventPhase,
            31: n3.isTrusted,
            32: n3.returnValue,
            13: [n3.target._index_ || 0],
            33: n3.timeStamp,
            12: n3.type,
            35: "keyCode" in n3 ? n3.keyCode : void 0,
            60: "pageX" in n3 ? n3.pageX : void 0,
            61: "pageY" in n3 ? n3.pageY : void 0,
            65: "offsetX" in n3 ? n3.offsetX : void 0,
            66: "offsetY" in n3 ? n3.offsetY : void 0,
            62: "touches" in n3 ? l(n3.touches) : void 0,
            63: "changedTouches" in n3 ? l(n3.changedTouches) : void 0
          }
        });
      };
    };
    return {
      execute: function execute(n3, s3, a3) {
        var l3 = n3[s3 + 2];
        var d4 = s3 + 4 + 2 * l3;
        if (l3 = s3 + 4 + 6 * n3[s3 + 3] + 2 * l3, c3 && a3 && (a3 = t2.getNode(n3[s3 + 1]))) {
          var _c = s3 + 4;
          for (; _c < l3; ) {
            var _l = _c <= d4;
            e: {
              s3 = a3;
              var g3 = _l, m3 = n3, f3 = _c;
              var _d = e3.get(m3[f3]), _p = m3[f3 + 1];
              if (s3 === t2.baseElement) {
                g3 ? addEventListener(_d, u3[_p] = h3(1, !!m3[f3 + 5])) : removeEventListener(_d, u3[_p]);
                break e;
              }
              var _w = s3.oninput !== null;
              var _x = _d === "change";
              g3 ? (_x && (_w = true, s3.onchange = null), s3.addEventListener(_d, u3[_p] = h3(s3._index_, !!m3[f3 + 5]))) : (_x && (_w = false), s3.removeEventListener(_d, u3[_p])), s3 && "value" in s3 && (_w || o(r3, s3), i(r3, s3));
            }
            _c += _l ? 2 : 6;
          }
        }
        return l3;
      }
    };
  };
  var c = function c2(e3, t2, r3, n2, s2) {
    var o3 = s2.executorsAllowed.includes(5);
    return {
      execute: function execute(e4, n3, s3) {
        return o3 && s3 && (e4 = t2.getNode(e4[n3 + 1])) && (s3 = e4.getBoundingClientRect(), r3.messageToWorker({
          12: 6,
          13: [e4._index_],
          38: [s3.top, s3.right, s3.bottom, s3.left, s3.width, s3.height]
        })), n3 + 2;
      }
    };
  };
  var d = function d2(e3, _ref2, r3, n2, s2) {
    var t2 = _ref2.getNode;
    var a3 = s2.executorsAllowed.includes(2);
    return {
      execute: function execute(e4, n3, s3) {
        var l3 = e4[n3 + 4], u3 = e4[n3 + 5];
        if (a3 && s3) {
          var _s2 = t2(e4[n3 + 1]);
          _s2 && (0 < u3 && e4.slice(n3 + 6 + l3, n3 + 6 + l3 + u3).forEach(function(e5) {
            (e5 = t2(e5)) && e5.remove();
          }), 0 < l3 && e4.slice(n3 + 6, n3 + 6 + l3).forEach(function(a4) {
            var l4 = e4[n3 + 2];
            (a4 = t2(a4)) && (_s2.insertBefore(a4, l4 && t2(l4) || null), o(r3, a4), i(r3, a4));
          }));
        }
        return n3 + 6 + l3 + u3;
      }
    };
  };
  var h = function h2(e3, t2, r3, n2, s2) {
    var o3 = s2.executorsAllowed.includes(0);
    return {
      execute: function execute(r4, n3, i3) {
        if (o3 && i3) {
          i3 = t2.getNode(r4[n3 + 1]);
          var _o = e3.get(r4[n3 + 2]);
          r4 = (r4 = r4[n3 + 4]) !== 0 ? e3.get(r4 - 1) : null, i3 && _o != null && (s2.sanitizer ? s2.sanitizer.setAttribute(i3, _o, r4) : r4 == null ? i3.removeAttribute(_o) : i3.setAttribute(_o, r4));
        }
        return n3 + 5;
      }
    };
  };
  var g = function g2(e3, t2, r3, n2, s2) {
    var o3 = s2.executorsAllowed.includes(1);
    return {
      execute: function execute(r4, n3, s3) {
        return o3 && s3 && (s3 = t2.getNode(r4[n3 + 1]), r4 = r4[n3 + 2], s3 && r4 && (s3.textContent = e3.get(r4))), n3 + 3;
      }
    };
  };
  var m = function m2(e3, t2, r3, n2, s2) {
    var o3 = s2.executorsAllowed.includes(3);
    return {
      execute: function execute(r4, n3, i3) {
        if (o3 && i3) {
          i3 = t2.getNode(r4[n3 + 1]);
          var _o2 = e3.get(r4[n3 + 2]);
          {
            var _t2 = r4[n3 + 4];
            r4 = r4[n3 + 3] === 1 ? _t2 === 1 : _t2 !== 0 ? e3.get(_t2) : null;
          }
          i3 && _o2 && r4 != null && (s2.sanitizer ? s2.sanitizer.setProperty(i3, _o2, String(r4)) : i3[_o2] = r4);
        }
        return n3 + 5;
      }
    };
  };
  var f = function f2(e3, t2, r3, n2, s2) {
    var o3 = s2.executorsAllowed.includes(6);
    var i3, a3 = 0;
    return {
      execute: function execute(e4, t3, r4) {
        if (o3 && r4 && s2.longTask)
          if (e4[t3] === 6) {
            if (a3++, !i3) {
              var _e3 = new Promise(function(e5) {
                return i3 = e5;
              });
              resolvedPromise().then(function() {
                return s2.longTask && s2.longTask(_e3);
              });
            }
          } else
            e4[t3] === 7 && (a3--, i3 && 0 >= a3 && (i3(), i3 = null, a3 = 0));
        return t3 + 2;
      },
      get active() {
        return i3 !== null;
      }
    };
  };
  var p = new Float32Array(1);
  var w = new Uint16Array(p.buffer);
  function x(e3, t2, r3, n2, s2, o3) {
    var i3 = [];
    for (var _l2 = 0; _l2 < r3; _l2++) {
      switch (e3[t2++]) {
        case 1:
          i3.push(e3[t2++]);
          break;
        case 2:
          w[0] = e3[t2++], w[1] = e3[t2++], i3.push(p[0]);
          break;
        case 3:
          i3.push(n2.get(e3[t2++]));
          break;
        case 4:
          var a3 = e3[t2++];
          t2 = x(e3, t2, a3, n2, s2, o3), i3.push(t2.args), t2 = t2.offset;
          break;
        case 5:
          if (!o3)
            throw Error("objectContext not provided.");
          i3.push(o3.get(e3[t2++]));
          break;
        case 6:
          a3 = s2.getNode(e3[t2++]), i3.push(a3.getContext("2d"));
          break;
        case 7:
          i3.push(s2.getNode(e3[t2++]));
          break;
        default:
          throw Error("Cannot deserialize argument.");
      }
    }
    return {
      args: i3,
      offset: t2
    };
  }
  var y = function y2(e3, t2, r3, n2, s2) {
    var o3 = s2.executorsAllowed.includes(9);
    return {
      execute: function execute(r4, s3, i3) {
        var _s3;
        var a3 = e3.get(r4[s3 + 1]), l3 = r4[s3 + 2], _x2 = x(r4, s3 + 3, 1, e3, t2, n2), u3 = _x2.offset, c3 = _x2.args;
        s3 = c3[0];
        var _x3 = x(r4, u3, l3, e3, t2, n2), d3 = _x3.offset, h3 = _x3.args;
        return o3 && i3 && (v(s3, a3) ? s3[a3] = h3[0] : (_s3 = s3)[a3].apply(_s3, h3)), d3;
      }
    };
  };
  function v(e3, t2) {
    if (!e3)
      throw Error("Property " + t2 + " does not exist on " + e3 + ".");
    var r3 = Object.getOwnPropertyDescriptor(e3, t2);
    return r3 !== void 0 ? "set" in r3 : v(Object.getPrototypeOf(e3), t2);
  }
  var b = function b2(e3, t2, r3, n2, s2) {
    var o3 = s2.executorsAllowed.includes(10);
    if (!n2)
      throw Error("objectContext is not defined.");
    return {
      execute: function execute(r4, s3, i3) {
        var _s4;
        var a3 = e3.get(r4[s3 + 1]), l3 = r4[s3 + 2], u3 = r4[s3 + 3], _x4 = x(r4, s3 + 4, 1, e3, t2, n2), c3 = _x4.offset, d3 = _x4.args;
        s3 = d3[0];
        var _x5 = x(r4, c3, u3, e3, t2, n2), h3 = _x5.offset, g3 = _x5.args;
        return o3 && i3 && a3 !== "new" && n2.store(l3, (_s4 = s3)[a3].apply(_s4, g3)), h3;
      }
    };
  };
  var k = function k2(e3, t2, r3, n2, s2) {
    var o3 = s2.executorsAllowed.includes(11);
    return {
      execute: function execute(e4, n3, s3) {
        return o3 && s3 && (s3 = t2.getNode(e4[n3 + 1])) && self.createImageBitmap(s3).then(function(t3) {
          r3.messageToWorker({
            12: 10,
            73: e4[n3 + 2],
            38: t3
          }, [t3]);
        }), n3 + 3;
      }
    };
  };
  var N = function N2(e3, t2, r3, n2, s2) {
    var o3 = s2.executorsAllowed.includes(12);
    return {
      execute: function execute(t3, n3, i3) {
        if (o3 && i3) {
          i3 = t3[n3 + 1];
          var a3 = t3[n3 + 2], l3 = t3[n3 + 3];
          var _o3 = t3[n3 + 4];
          if (t3 = 0 <= l3 ? e3.get(l3) : "", l3 = 0 <= _o3 ? e3.get(_o3) : null, i3 === 1)
            (function(e4, t4) {
              s2.sanitizer && e4 === 2 && s2.sanitizer.getStorage(e4, t4).then(function(n4) {
                r3.messageToWorker({
                  12: 11,
                  74: t4,
                  75: e4,
                  21: n4
                });
              });
            })(a3, t3);
          else if (i3 === 2)
            if (i3 = a3, a3 = t3, t3 = l3, s2.sanitizer)
              s2.sanitizer.setStorage(i3, a3, t3);
            else {
              var _e4;
              if (i3 === 0 ? _e4 = window.localStorage : i3 === 1 && (_e4 = window.sessionStorage), _e4)
                if (a3 == null) {
                  if (t3 != null)
                    throw Error("Unexpected storage operation.");
                  _e4.clear();
                } else
                  t3 == null ? _e4.removeItem(a3) : _e4.setItem(a3, t3);
            }
        }
        return n3 + 5;
      }
    };
  };
  var C = 0;
  var A = {};
  var O = function O2(e3, t2, r3, n2, s2) {
    var o3 = s2.executorsAllowed.includes(13);
    return {
      execute: function execute(t3, r4) {
        if (o3) {
          var _n2 = t3[r4 + 1], _s5 = t3[r4 + 2];
          t3 = t3[r4 + 3], t3 = e3.hasIndex(t3) ? JSON.parse(e3.get(t3)) : void 0, _n2 === 1 ? A[_s5].resolve(t3) : A[_s5].reject(t3), delete A[_s5];
        }
        return r4 + 4;
      }
    };
  };
  var E = function E2(e3, t2, r3, n2, s2) {
    var o3 = s2.executorsAllowed.includes(14);
    return {
      execute: function execute(e4, r4, n3) {
        return o3 && n3 && (e4 = t2.getNode(e4[r4 + 1])) && e4.scrollIntoView(), r4 + 2;
      }
    };
  };
  var M = /* @__PURE__ */ function() {
    function M2(t2, r3, n2, s2, o3) {
      var _this2 = this;
      this.nodeContext = this.stringContext = void 0, this.mutationQueue = [], this.pendingMutations = false, this.executors = this.sanitizer = this.mutationPumpFunction = void 0, this.syncFlush = function(e3) {
        if (e3 === void 0) {
          e3 = true;
        }
        var t3 = [];
        return _this2.mutationQueue.forEach(function(r4) {
          var n3 = r4.length, s3 = 0;
          for (; s3 < n3; ) {
            var _n3 = r4[s3];
            var o4;
            if (!(o4 = e3)) {
              e:
                switch (_n3) {
                  case 4:
                  case 5:
                  case 6:
                  case 7:
                  case 12:
                  case 8:
                  case 13:
                    o4 = false;
                    break e;
                  default:
                    o4 = true;
                }
              o4 = !o4;
            }
            o4 || t3.push(_n3), s3 = _this2.executors[_n3].execute(r4, s3, o4);
          }
        }), _this2.mutationQueue = [], _this2.pendingMutations = false, t3;
      }, this.stringContext = t2, this.nodeContext = r3, this.sanitizer = s2.sanitizer, this.mutationPumpFunction = s2.mutationPump, r3 = f.apply(null, t2 = [t2, r3, n2, o3, s2]), this.executors = {
        2: d.apply(null, t2),
        0: h.apply(null, t2),
        1: g.apply(null, t2),
        3: m.apply(null, t2),
        4: u.apply(null, t2),
        5: c.apply(null, t2),
        6: r3,
        7: r3,
        8: e.apply(null, t2),
        9: y.apply(null, t2),
        10: b.apply(null, t2),
        11: k.apply(null, t2),
        12: N.apply(null, t2),
        13: O.apply(null, t2),
        14: E.apply(null, t2)
      };
    }
    var _proto2 = M2.prototype;
    _proto2.mutate = function mutate(e3, t2, r3, n2) {
      this.stringContext.storeValues(r3), this.nodeContext.createNodes(t2, this.sanitizer), this.mutationQueue = this.mutationQueue.concat(n2), this.pendingMutations || (this.pendingMutations = true, this.mutationPumpFunction(this.syncFlush, e3));
    };
    return M2;
  }();
  var P = /* @__PURE__ */ function() {
    function P2() {
      this.strings = [];
    }
    var _proto3 = P2.prototype;
    _proto3.get = function get(e3) {
      return this.strings[e3] || "";
    };
    _proto3.hasIndex = function hasIndex(e3) {
      return this.strings[e3] !== void 0;
    };
    _proto3.store = function store(e3) {
      this.strings.push(e3);
    };
    _proto3.storeValues = function storeValues(e3) {
      var _this3 = this;
      e3.forEach(function(e4) {
        return _this3.store(e4);
      });
    };
    return P2;
  }();
  var T = [8, 3];
  function W(e3, t2, r3, n2) {
    var s2 = [].slice.call(e3.childNodes).filter(r3);
    return s2 = {
      7: e3._index_,
      11: 0,
      0: e3.nodeType,
      1: t2(e3.localName || e3.nodeName),
      4: s2.map(function(e4) {
        return W(e4, t2, r3, n2);
      }),
      2: [].map.call(e3.attributes || [], function(e4) {
        return [t2(e4.namespaceURI || "null"), t2(e4.name), t2(e4.value)];
      })
    }, e3.namespaceURI != null && (s2[6] = t2(e3.namespaceURI)), T.includes(e3.nodeType) && e3.textContent !== null && (s2[5] = t2(e3.textContent)), o(n2, e3), i(n2, e3), s2;
  }
  function _() {
    return (_ = Object.assign || function(e3) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var r3, n2 = arguments[t2];
        for (r3 in n2) {
          Object.prototype.hasOwnProperty.call(n2, r3) && (e3[r3] = n2[r3]);
        }
      }
      return e3;
    }).apply(this, arguments);
  }
  var L = /* @__PURE__ */ function() {
    function L2(e3, t2) {
      var _this4 = this;
      this.readyPromiseResolve = this.iframe = this.readyPromise = this.onmessageerror = this.onmessage = this.onerror = this.url = void 0, this.url = e3, this.iframe = window.document.createElement("iframe"), this.iframe.setAttribute("sandbox", "allow-scripts"), this.iframe.setAttribute("style", "display:none"), this.iframe.setAttribute("src", t2), this.url = e3, this.readyPromise = new Promise(function(e4) {
        _this4.readyPromiseResolve = e4;
      }), this.setupInit(), this.proxyFromWorker(), window.document.body.appendChild(this.iframe);
    }
    var _proto4 = L2.prototype;
    _proto4.setupInit = function setupInit() {
      var _this5 = this;
      var e3 = function e4(t2) {
        t2.source == _this5.iframe.contentWindow && fetch(_this5.url.toString()).then(function(e5) {
          return e5.text();
        }).then(function(r3) {
          var n2 = t2.data;
          n2.type == "iframe-ready" ? _this5.iframe.contentWindow.postMessage({
            type: "init-worker",
            code: r3
          }, "*") : n2.type === "worker-ready" && (_this5.readyPromiseResolve(), window.removeEventListener("message", e4));
        });
      };
      window.addEventListener("message", e3);
    };
    _proto4.proxyFromWorker = function proxyFromWorker() {
      var _this6 = this;
      window.addEventListener("message", function(e3) {
        if (e3.source == _this6.iframe.contentWindow) {
          var _e$data = e3.data, t2 = _e$data.type, r3 = _e$data.message;
          t2 == "onmessage" && _this6.onmessage ? _this6.onmessage(_({}, e3, {
            data: r3
          })) : t2 === "onerror" && _this6.onerror ? _this6.onerror(r3) : t2 === "onmessageerror" && _this6.onmessageerror && _this6.onmessageerror(_({}, e3, {
            data: r3
          }));
        }
      });
    };
    _proto4.postMessage = function postMessage(e3, t2) {
      var _this7 = this;
      var r3 = {
        type: "postMessage",
        message: e3
      };
      this.readyPromise.then(function() {
        _this7.iframe.contentWindow.postMessage(r3, "*", t2);
      });
    };
    _proto4.terminate = function terminate() {
      this.iframe.contentWindow.postMessage({
        type: "terminate"
      }, "*"), this.iframe.remove();
    };
    return L2;
  }();
  var S = /* @__PURE__ */ function() {
    function S2(e3, t2, r3, n2, s2) {
      this[55] = void 0, this.nodeContext = t2, this.config = s2;
      var _ref2 = function(e4, t3, r4) {
        t3 = t3.hydrateFilter || function() {
          return true;
        };
        var n3 = [], s3 = new Map();
        return {
          skeleton: W(e4, function(e5) {
            if (s3.has(e5))
              return s3.get(e5);
            var t4 = n3.length;
            return s3.set(e5, t4), n3.push(e5), t4;
          }, t3, r4),
          strings: n3
        };
      }(e3, s2, this), o3 = _ref2.skeleton, i3 = _ref2.strings;
      t2 = [];
      var a3 = [], l3 = U("localStorage"), u3 = U("sessionStorage");
      for (var _r in e3.style) {
        t2.push(_r);
      }
      for (var _t3 in e3) {
        _t3.startsWith("on") && a3.push(_t3);
      }
      r3 = "'use strict';(function(){" + r3 + "self['window']=self;var workerDOM=WorkerThread.workerDOM;WorkerThread.hydrate(workerDOM.document," + JSON.stringify(i3) + "," + JSON.stringify(o3) + "," + JSON.stringify(t2) + "," + JSON.stringify(a3) + ",[" + window.innerWidth + "," + window.innerHeight + "]," + JSON.stringify(l3) + "," + JSON.stringify(u3) + ");workerDOM.document[59](this);Object.assign(self,workerDOM);}).call(self);" + n2 + "//# sourceURL=" + encodeURI(s2.authorURL), this[55] = s2.sandbox ? new L(URL.createObjectURL(new Blob([r3])), s2.sandbox.iframeUrl) : new Worker(URL.createObjectURL(new Blob([r3]))), s2.onCreateWorker && s2.onCreateWorker(e3, i3, o3, t2);
    }
    var _proto5 = S2.prototype;
    _proto5.ready = function ready() {
      return this.worker.readyPromise || resolvedPromise();
    };
    _proto5.messageToWorker = function messageToWorker(e3, t2) {
      this.config.onSendMessage && this.config.onSendMessage(e3), this.worker.postMessage(e3, t2 || []);
    };
    _createClass(S2, [{
      key: "worker",
      get: function get() {
        return this[55];
      }
    }]);
    return S2;
  }();
  function U(e3, t2) {
    try {
      return t2 ? {
        storage: t2.getStorage(e3 == "localStorage" ? 0 : 1),
        errorMsg: null
      } : {
        storage: window[e3],
        errorMsg: null
      };
    } catch (e4) {
      return {
        errorMsg: e4.message,
        storage: null
      };
    }
  }
  var R = /* @__PURE__ */ function() {
    function R2() {
      this.objects = void 0, this.objects = new Map();
    }
    var _proto6 = R2.prototype;
    _proto6.store = function store(e3, t2) {
      this.objects.set(e3, t2);
    };
    _proto6.get = function get(e3) {
      var t2 = this.objects.get(e3);
      if (t2)
        return t2;
      throw Error("Object with id (" + e3 + ") does not exist.");
    };
    return R2;
  }();
  var j = /* @__PURE__ */ function() {
    function j2(e3, t2) {
      this.workerContext_ = e3, this.config = t2;
    }
    var _proto7 = j2.prototype;
    _proto7.callFunction = function callFunction(e3) {
      if (!this.config.executorsAllowed.includes(13))
        throw Error("[worker-dom]: Error calling " + e3 + ". You must enable the FUNCTION_CALL executor within the config.");
      var _ref3 = function() {
        var e4, t3, r4 = new Promise(function(r5, n4) {
          e4 = r5, t3 = n4;
        });
        C >= Number.MAX_VALUE && (C = 0);
        var n3 = C++;
        return A[n3] = {
          promise: r4,
          resolve: e4,
          reject: t3
        }, {
          promise: r4,
          index: n3
        };
      }(), r3 = _ref3.promise, n2 = _ref3.index;
      for (var _len = arguments.length, t2 = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        t2[_key - 1] = arguments[_key];
      }
      return e3 = {
        12: 12,
        77: e3,
        78: JSON.stringify(t2),
        7: n2
      }, this.workerContext_.messageToWorker(e3), r3;
    };
    _proto7.terminate = function terminate() {
      this.workerContext_.worker.terminate();
    };
    _createClass(j2, [{
      key: "onerror",
      set: function set(e3) {
        this.workerContext_.worker.onerror = e3;
      }
    }]);
    return j2;
  }();
  var z = [3, 2];
  function F(e3, r3, s2) {
    var o3 = new P(), i3 = new R(), a3 = new n(o3, r3), l3 = function(e4) {
      return Object.assign({}, {
        mutationPump: requestAnimationFrame.bind(null),
        executorsAllowed: t
      }, e4);
    }(s2);
    return e3.then(function(_ref4) {
      var e4 = _ref4[0], t2 = _ref4[1];
      if (e4 && t2 && s2.authorURL) {
        var _n4 = new S(r3, a3, e4, t2, l3), _u = new M(o3, a3, _n4, l3, i3);
        return _n4.worker.onmessage = function(e5) {
          var t3 = e5.data;
          z.includes(t3[12]) && (_u.mutate(t3[54], t3[37], t3[41], new Uint16Array(t3[36])), s2.onReceiveMessage) && s2.onReceiveMessage(e5);
        }, _n4.ready().then(function() {
          return new j(_n4, l3);
        });
      }
      return null;
    });
  }
  var $ = function $2(e3) {
    return e3.parentNode === null || (e3 = (e3.parentNode.localName || e3.parentNode.nodeName).toLowerCase(), !/amp-/.test(e3) || e3 === "amp-script");
  };
  function I(e3, t2, r3) {
    return r3.hydrateFilter = $, F(t2, e3, r3);
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
  function remove(array, shouldRemove) {
    var removed = [];
    var index = 0;
    for (var i3 = 0; i3 < array.length; i3++) {
      var item = array[i3];
      if (shouldRemove(item, i3, array)) {
        removed.push(item);
      } else {
        if (index < i3) {
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
    var i3 = 3;
    var splitMessage = opt_message.split("%s");
    var message = splitMessage.shift();
    var messageArray = [message];
    while (splitMessage.length) {
      var subValue = arguments[i3++];
      var nextConstant = splitMessage.shift();
      message += elementStringOrPassThru(subValue) + nextConstant;
      messageArray.push(subValue, nextConstant.trim());
    }
    var error = new Error(message);
    error.messageArray = remove(messageArray, function(x2) {
      return x2 !== "";
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

  // src/core/assert/user.js
  function userAssert(shouldBeTruthy, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    return assert(USER_ERROR_SENTINEL, shouldBeTruthy, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
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

  // src/core/dom/query.js
  function childElements(parent, callback) {
    var children = [];
    for (var child = parent.firstElementChild; child; child = child.nextElementSibling) {
      if (callback(child)) {
        children.push(child);
      }
    }
    return children;
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

  // src/core/types/object/json.js
  function parseJson(json) {
    return JSON.parse(json);
  }
  function tryParseJson(json, opt_onFailed) {
    try {
      return parseJson(json);
    } catch (e3) {
      opt_onFailed == null ? void 0 : opt_onFailed(e3);
      return null;
    }
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
    for (var i3 = 0; i3 < str.length; i3++) {
      var charCode = str.charCodeAt(i3);
      devAssert(charCode <= 255, "Characters must be in range [0,255]");
      bytes[i3] = charCode;
    }
    return bytes;
  }

  // node_modules/dompurify/dist/purify.es.js
  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i3 = 0, arr2 = Array(arr.length); i3 < arr.length; i3++) {
        arr2[i3] = arr[i3];
      }
      return arr2;
    } else {
      return Array.from(arr);
    }
  }
  var hasOwnProperty = Object.hasOwnProperty;
  var setPrototypeOf = Object.setPrototypeOf;
  var isFrozen = Object.isFrozen;
  var getPrototypeOf = Object.getPrototypeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var freeze = Object.freeze;
  var seal = Object.seal;
  var create = Object.create;
  var _ref = typeof Reflect !== "undefined" && Reflect;
  var apply = _ref.apply;
  var construct = _ref.construct;
  if (!apply) {
    apply = function apply2(fun, thisValue, args) {
      return fun.apply(thisValue, args);
    };
  }
  if (!freeze) {
    freeze = function freeze2(x2) {
      return x2;
    };
  }
  if (!seal) {
    seal = function seal2(x2) {
      return x2;
    };
  }
  if (!construct) {
    construct = function construct2(Func, args) {
      return new (Function.prototype.bind.apply(Func, [null].concat(_toConsumableArray(args))))();
    };
  }
  var arrayForEach = unapply(Array.prototype.forEach);
  var arrayPop = unapply(Array.prototype.pop);
  var arrayPush = unapply(Array.prototype.push);
  var stringToLowerCase = unapply(String.prototype.toLowerCase);
  var stringMatch = unapply(String.prototype.match);
  var stringReplace = unapply(String.prototype.replace);
  var stringIndexOf = unapply(String.prototype.indexOf);
  var stringTrim = unapply(String.prototype.trim);
  var regExpTest = unapply(RegExp.prototype.test);
  var typeErrorCreate = unconstruct(TypeError);
  function unapply(func) {
    return function(thisArg) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return apply(func, thisArg, args);
    };
  }
  function unconstruct(func) {
    return function() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return construct(func, args);
    };
  }
  function addToSet(set, array) {
    if (setPrototypeOf) {
      setPrototypeOf(set, null);
    }
    var l3 = array.length;
    while (l3--) {
      var element = array[l3];
      if (typeof element === "string") {
        var lcElement = stringToLowerCase(element);
        if (lcElement !== element) {
          if (!isFrozen(array)) {
            array[l3] = lcElement;
          }
          element = lcElement;
        }
      }
      set[element] = true;
    }
    return set;
  }
  function clone(object) {
    var newObject = create(null);
    var property = void 0;
    for (property in object) {
      if (apply(hasOwnProperty, object, [property])) {
        newObject[property] = object[property];
      }
    }
    return newObject;
  }
  function lookupGetter(object, prop) {
    while (object !== null) {
      var desc = getOwnPropertyDescriptor(object, prop);
      if (desc) {
        if (desc.get) {
          return unapply(desc.get);
        }
        if (typeof desc.value === "function") {
          return unapply(desc.value);
        }
      }
      object = getPrototypeOf(object);
    }
    function fallbackValue(element) {
      console.warn("fallback value for", element);
      return null;
    }
    return fallbackValue;
  }
  var html = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
  var svg = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
  var svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
  var svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "fedropshadow", "feimage", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
  var mathMl = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]);
  var mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
  var text = freeze(["#text"]);
  var html$1 = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]);
  var svg$1 = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
  var mathMl$1 = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
  var xml = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
  var MUSTACHE_EXPR = seal(/\{\{[\s\S]*|[\s\S]*\}\}/gm);
  var ERB_EXPR = seal(/<%[\s\S]*|[\s\S]*%>/gm);
  var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/);
  var ARIA_ATTR = seal(/^aria-[\-\w]+$/);
  var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
  var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
  var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  function _toConsumableArray$1(arr) {
    if (Array.isArray(arr)) {
      for (var i3 = 0, arr2 = Array(arr.length); i3 < arr.length; i3++) {
        arr2[i3] = arr[i3];
      }
      return arr2;
    } else {
      return Array.from(arr);
    }
  }
  var getGlobal = function getGlobal2() {
    return typeof window === "undefined" ? null : window;
  };
  var _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, document2) {
    if ((typeof trustedTypes === "undefined" ? "undefined" : _typeof(trustedTypes)) !== "object" || typeof trustedTypes.createPolicy !== "function") {
      return null;
    }
    var suffix = null;
    var ATTR_NAME = "data-tt-policy-suffix";
    if (document2.currentScript && document2.currentScript.hasAttribute(ATTR_NAME)) {
      suffix = document2.currentScript.getAttribute(ATTR_NAME);
    }
    var policyName = "dompurify" + (suffix ? "#" + suffix : "");
    try {
      return trustedTypes.createPolicy(policyName, {
        createHTML: function createHTML(html$$1) {
          return html$$1;
        }
      });
    } catch (_2) {
      console.warn("TrustedTypes policy " + policyName + " could not be created.");
      return null;
    }
  };
  function createDOMPurify() {
    var window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
    var DOMPurify = function DOMPurify2(root) {
      return createDOMPurify(root);
    };
    DOMPurify.version = "2.3.3";
    DOMPurify.removed = [];
    if (!window2 || !window2.document || window2.document.nodeType !== 9) {
      DOMPurify.isSupported = false;
      return DOMPurify;
    }
    var originalDocument = window2.document;
    var document2 = window2.document;
    var DocumentFragment = window2.DocumentFragment, HTMLTemplateElement = window2.HTMLTemplateElement, Node2 = window2.Node, Element = window2.Element, NodeFilter = window2.NodeFilter, _window$NamedNodeMap = window2.NamedNodeMap, NamedNodeMap = _window$NamedNodeMap === void 0 ? window2.NamedNodeMap || window2.MozNamedAttrMap : _window$NamedNodeMap, Text = window2.Text, Comment = window2.Comment, DOMParser = window2.DOMParser, trustedTypes = window2.trustedTypes;
    var ElementPrototype = Element.prototype;
    var cloneNode = lookupGetter(ElementPrototype, "cloneNode");
    var getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
    var getChildNodes = lookupGetter(ElementPrototype, "childNodes");
    var getParentNode = lookupGetter(ElementPrototype, "parentNode");
    if (typeof HTMLTemplateElement === "function") {
      var template = document2.createElement("template");
      if (template.content && template.content.ownerDocument) {
        document2 = template.content.ownerDocument;
      }
    }
    var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);
    var emptyHTML = trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML("") : "";
    var _document = document2, implementation = _document.implementation, createNodeIterator = _document.createNodeIterator, createDocumentFragment = _document.createDocumentFragment, getElementsByTagName = _document.getElementsByTagName;
    var importNode = originalDocument.importNode;
    var documentMode = {};
    try {
      documentMode = clone(document2).documentMode ? document2.documentMode : {};
    } catch (_2) {
    }
    var hooks = {};
    DOMPurify.isSupported = typeof getParentNode === "function" && implementation && typeof implementation.createHTMLDocument !== "undefined" && documentMode !== 9;
    var MUSTACHE_EXPR$$1 = MUSTACHE_EXPR, ERB_EXPR$$1 = ERB_EXPR, DATA_ATTR$$1 = DATA_ATTR, ARIA_ATTR$$1 = ARIA_ATTR, IS_SCRIPT_OR_DATA$$1 = IS_SCRIPT_OR_DATA, ATTR_WHITESPACE$$1 = ATTR_WHITESPACE;
    var IS_ALLOWED_URI$$1 = IS_ALLOWED_URI;
    var ALLOWED_TAGS = null;
    var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray$1(html), _toConsumableArray$1(svg), _toConsumableArray$1(svgFilters), _toConsumableArray$1(mathMl), _toConsumableArray$1(text)));
    var ALLOWED_ATTR = null;
    var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray$1(html$1), _toConsumableArray$1(svg$1), _toConsumableArray$1(mathMl$1), _toConsumableArray$1(xml)));
    var FORBID_TAGS = null;
    var FORBID_ATTR = null;
    var ALLOW_ARIA_ATTR = true;
    var ALLOW_DATA_ATTR = true;
    var ALLOW_UNKNOWN_PROTOCOLS = false;
    var SAFE_FOR_TEMPLATES = false;
    var WHOLE_DOCUMENT = false;
    var SET_CONFIG = false;
    var FORCE_BODY = false;
    var RETURN_DOM = false;
    var RETURN_DOM_FRAGMENT = false;
    var RETURN_DOM_IMPORT = true;
    var RETURN_TRUSTED_TYPE = false;
    var SANITIZE_DOM = true;
    var KEEP_CONTENT = true;
    var IN_PLACE = false;
    var USE_PROFILES = {};
    var FORBID_CONTENTS = null;
    var DEFAULT_FORBID_CONTENTS = addToSet({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
    var DATA_URI_TAGS = null;
    var DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
    var URI_SAFE_ATTRIBUTES = null;
    var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
    var MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
    var SVG_NAMESPACE = "http://www.w3.org/2000/svg";
    var HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
    var NAMESPACE = HTML_NAMESPACE;
    var IS_EMPTY_INPUT = false;
    var PARSER_MEDIA_TYPE = void 0;
    var SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
    var DEFAULT_PARSER_MEDIA_TYPE = "text/html";
    var transformCaseFunc = void 0;
    var CONFIG = null;
    var formElement = document2.createElement("form");
    var _parseConfig = function _parseConfig2(cfg) {
      if (CONFIG && CONFIG === cfg) {
        return;
      }
      if (!cfg || (typeof cfg === "undefined" ? "undefined" : _typeof(cfg)) !== "object") {
        cfg = {};
      }
      cfg = clone(cfg);
      ALLOWED_TAGS = "ALLOWED_TAGS" in cfg ? addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
      ALLOWED_ATTR = "ALLOWED_ATTR" in cfg ? addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
      URI_SAFE_ATTRIBUTES = "ADD_URI_SAFE_ATTR" in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR) : DEFAULT_URI_SAFE_ATTRIBUTES;
      DATA_URI_TAGS = "ADD_DATA_URI_TAGS" in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS) : DEFAULT_DATA_URI_TAGS;
      FORBID_CONTENTS = "FORBID_CONTENTS" in cfg ? addToSet({}, cfg.FORBID_CONTENTS) : DEFAULT_FORBID_CONTENTS;
      FORBID_TAGS = "FORBID_TAGS" in cfg ? addToSet({}, cfg.FORBID_TAGS) : {};
      FORBID_ATTR = "FORBID_ATTR" in cfg ? addToSet({}, cfg.FORBID_ATTR) : {};
      USE_PROFILES = "USE_PROFILES" in cfg ? cfg.USE_PROFILES : false;
      ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
      ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
      ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
      SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
      WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
      RETURN_DOM = cfg.RETURN_DOM || false;
      RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
      RETURN_DOM_IMPORT = cfg.RETURN_DOM_IMPORT !== false;
      RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
      FORCE_BODY = cfg.FORCE_BODY || false;
      SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
      KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
      IN_PLACE = cfg.IN_PLACE || false;
      IS_ALLOWED_URI$$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$$1;
      NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
      PARSER_MEDIA_TYPE = SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE;
      transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? function(x2) {
        return x2;
      } : stringToLowerCase;
      if (SAFE_FOR_TEMPLATES) {
        ALLOW_DATA_ATTR = false;
      }
      if (RETURN_DOM_FRAGMENT) {
        RETURN_DOM = true;
      }
      if (USE_PROFILES) {
        ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray$1(text)));
        ALLOWED_ATTR = [];
        if (USE_PROFILES.html === true) {
          addToSet(ALLOWED_TAGS, html);
          addToSet(ALLOWED_ATTR, html$1);
        }
        if (USE_PROFILES.svg === true) {
          addToSet(ALLOWED_TAGS, svg);
          addToSet(ALLOWED_ATTR, svg$1);
          addToSet(ALLOWED_ATTR, xml);
        }
        if (USE_PROFILES.svgFilters === true) {
          addToSet(ALLOWED_TAGS, svgFilters);
          addToSet(ALLOWED_ATTR, svg$1);
          addToSet(ALLOWED_ATTR, xml);
        }
        if (USE_PROFILES.mathMl === true) {
          addToSet(ALLOWED_TAGS, mathMl);
          addToSet(ALLOWED_ATTR, mathMl$1);
          addToSet(ALLOWED_ATTR, xml);
        }
      }
      if (cfg.ADD_TAGS) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone(ALLOWED_TAGS);
        }
        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
      }
      if (cfg.ADD_ATTR) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone(ALLOWED_ATTR);
        }
        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
      }
      if (cfg.ADD_URI_SAFE_ATTR) {
        addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
      }
      if (cfg.FORBID_CONTENTS) {
        if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
          FORBID_CONTENTS = clone(FORBID_CONTENTS);
        }
        addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS);
      }
      if (KEEP_CONTENT) {
        ALLOWED_TAGS["#text"] = true;
      }
      if (WHOLE_DOCUMENT) {
        addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
      }
      if (ALLOWED_TAGS.table) {
        addToSet(ALLOWED_TAGS, ["tbody"]);
        delete FORBID_TAGS.tbody;
      }
      if (freeze) {
        freeze(cfg);
      }
      CONFIG = cfg;
    };
    var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
    var HTML_INTEGRATION_POINTS = addToSet({}, ["foreignobject", "desc", "title", "annotation-xml"]);
    var ALL_SVG_TAGS = addToSet({}, svg);
    addToSet(ALL_SVG_TAGS, svgFilters);
    addToSet(ALL_SVG_TAGS, svgDisallowed);
    var ALL_MATHML_TAGS = addToSet({}, mathMl);
    addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
    var _checkValidNamespace = function _checkValidNamespace2(element) {
      var parent = getParentNode(element);
      if (!parent || !parent.tagName) {
        parent = {
          namespaceURI: HTML_NAMESPACE,
          tagName: "template"
        };
      }
      var tagName = stringToLowerCase(element.tagName);
      var parentTagName = stringToLowerCase(parent.tagName);
      if (element.namespaceURI === SVG_NAMESPACE) {
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === "svg";
        }
        if (parent.namespaceURI === MATHML_NAMESPACE) {
          return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
        }
        return Boolean(ALL_SVG_TAGS[tagName]);
      }
      if (element.namespaceURI === MATHML_NAMESPACE) {
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === "math";
        }
        if (parent.namespaceURI === SVG_NAMESPACE) {
          return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
        }
        return Boolean(ALL_MATHML_TAGS[tagName]);
      }
      if (element.namespaceURI === HTML_NAMESPACE) {
        if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }
        if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }
        var commonSvgAndHTMLElements = addToSet({}, ["title", "style", "font", "a", "script"]);
        return !ALL_MATHML_TAGS[tagName] && (commonSvgAndHTMLElements[tagName] || !ALL_SVG_TAGS[tagName]);
      }
      return false;
    };
    var _forceRemove = function _forceRemove2(node) {
      arrayPush(DOMPurify.removed, {
        element: node
      });
      try {
        node.parentNode.removeChild(node);
      } catch (_2) {
        try {
          node.outerHTML = emptyHTML;
        } catch (_3) {
          node.remove();
        }
      }
    };
    var _removeAttribute = function _removeAttribute2(name, node) {
      try {
        arrayPush(DOMPurify.removed, {
          attribute: node.getAttributeNode(name),
          from: node
        });
      } catch (_2) {
        arrayPush(DOMPurify.removed, {
          attribute: null,
          from: node
        });
      }
      node.removeAttribute(name);
      if (name === "is" && !ALLOWED_ATTR[name]) {
        if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
          try {
            _forceRemove(node);
          } catch (_2) {
          }
        } else {
          try {
            node.setAttribute(name, "");
          } catch (_2) {
          }
        }
      }
    };
    var _initDocument = function _initDocument2(dirty) {
      var doc = void 0;
      var leadingWhitespace = void 0;
      if (FORCE_BODY) {
        dirty = "<remove></remove>" + dirty;
      } else {
        var matches2 = stringMatch(dirty, /^[\r\n\t ]+/);
        leadingWhitespace = matches2 && matches2[0];
      }
      if (PARSER_MEDIA_TYPE === "application/xhtml+xml") {
        dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
      }
      var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
      if (NAMESPACE === HTML_NAMESPACE) {
        try {
          doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
        } catch (_2) {
        }
      }
      if (!doc || !doc.documentElement) {
        doc = implementation.createDocument(NAMESPACE, "template", null);
        try {
          doc.documentElement.innerHTML = IS_EMPTY_INPUT ? "" : dirtyPayload;
        } catch (_2) {
        }
      }
      var body = doc.body || doc.documentElement;
      if (dirty && leadingWhitespace) {
        body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
      }
      if (NAMESPACE === HTML_NAMESPACE) {
        return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
      }
      return WHOLE_DOCUMENT ? doc.documentElement : body;
    };
    var _createIterator = function _createIterator2(root) {
      return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, null, false);
    };
    var _isClobbered = function _isClobbered2(elm) {
      if (elm instanceof Text || elm instanceof Comment) {
        return false;
      }
      if (typeof elm.nodeName !== "string" || typeof elm.textContent !== "string" || typeof elm.removeChild !== "function" || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== "function" || typeof elm.setAttribute !== "function" || typeof elm.namespaceURI !== "string" || typeof elm.insertBefore !== "function") {
        return true;
      }
      return false;
    };
    var _isNode = function _isNode2(object) {
      return (typeof Node2 === "undefined" ? "undefined" : _typeof(Node2)) === "object" ? object instanceof Node2 : object && (typeof object === "undefined" ? "undefined" : _typeof(object)) === "object" && typeof object.nodeType === "number" && typeof object.nodeName === "string";
    };
    var _executeHook = function _executeHook2(entryPoint, currentNode, data) {
      if (!hooks[entryPoint]) {
        return;
      }
      arrayForEach(hooks[entryPoint], function(hook) {
        hook.call(DOMPurify, currentNode, data, CONFIG);
      });
    };
    var _sanitizeElements = function _sanitizeElements2(currentNode) {
      var content = void 0;
      _executeHook("beforeSanitizeElements", currentNode, null);
      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }
      if (stringMatch(currentNode.nodeName, /[\u0080-\uFFFF]/)) {
        _forceRemove(currentNode);
        return true;
      }
      var tagName = transformCaseFunc(currentNode.nodeName);
      _executeHook("uponSanitizeElement", currentNode, {
        tagName: tagName,
        allowedTags: ALLOWED_TAGS
      });
      if (!_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
        _forceRemove(currentNode);
        return true;
      }
      if (tagName === "select" && regExpTest(/<template/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);
        return true;
      }
      if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
        if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
          var parentNode = getParentNode(currentNode) || currentNode.parentNode;
          var childNodes = getChildNodes(currentNode) || currentNode.childNodes;
          if (childNodes && parentNode) {
            var childCount = childNodes.length;
            for (var i3 = childCount - 1; i3 >= 0; --i3) {
              parentNode.insertBefore(cloneNode(childNodes[i3], true), getNextSibling(currentNode));
            }
          }
        }
        _forceRemove(currentNode);
        return true;
      }
      if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }
      if ((tagName === "noscript" || tagName === "noembed") && regExpTest(/<\/no(script|embed)/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);
        return true;
      }
      if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
        content = currentNode.textContent;
        content = stringReplace(content, MUSTACHE_EXPR$$1, " ");
        content = stringReplace(content, ERB_EXPR$$1, " ");
        if (currentNode.textContent !== content) {
          arrayPush(DOMPurify.removed, {
            element: currentNode.cloneNode()
          });
          currentNode.textContent = content;
        }
      }
      _executeHook("afterSanitizeElements", currentNode, null);
      return false;
    };
    var _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
      if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) {
        return false;
      }
      if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR$$1, lcName))
        ;
      else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$$1, lcName))
        ;
      else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        return false;
      } else if (URI_SAFE_ATTRIBUTES[lcName])
        ;
      else if (regExpTest(IS_ALLOWED_URI$$1, stringReplace(value, ATTR_WHITESPACE$$1, "")))
        ;
      else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag])
        ;
      else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$$1, stringReplace(value, ATTR_WHITESPACE$$1, "")))
        ;
      else if (!value)
        ;
      else {
        return false;
      }
      return true;
    };
    var _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
      var attr = void 0;
      var value = void 0;
      var lcName = void 0;
      var l3 = void 0;
      _executeHook("beforeSanitizeAttributes", currentNode, null);
      var attributes = currentNode.attributes;
      if (!attributes) {
        return;
      }
      var hookEvent = {
        attrName: "",
        attrValue: "",
        keepAttr: true,
        allowedAttributes: ALLOWED_ATTR
      };
      l3 = attributes.length;
      while (l3--) {
        attr = attributes[l3];
        var _attr = attr, name = _attr.name, namespaceURI = _attr.namespaceURI;
        value = stringTrim(attr.value);
        lcName = transformCaseFunc(name);
        hookEvent.attrName = lcName;
        hookEvent.attrValue = value;
        hookEvent.keepAttr = true;
        hookEvent.forceKeepAttr = void 0;
        _executeHook("uponSanitizeAttribute", currentNode, hookEvent);
        value = hookEvent.attrValue;
        if (hookEvent.forceKeepAttr) {
          continue;
        }
        _removeAttribute(name, currentNode);
        if (!hookEvent.keepAttr) {
          continue;
        }
        if (regExpTest(/\/>/i, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }
        if (SAFE_FOR_TEMPLATES) {
          value = stringReplace(value, MUSTACHE_EXPR$$1, " ");
          value = stringReplace(value, ERB_EXPR$$1, " ");
        }
        var lcTag = transformCaseFunc(currentNode.nodeName);
        if (!_isValidAttribute(lcTag, lcName, value)) {
          continue;
        }
        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            currentNode.setAttribute(name, value);
          }
          arrayPop(DOMPurify.removed);
        } catch (_2) {
        }
      }
      _executeHook("afterSanitizeAttributes", currentNode, null);
    };
    var _sanitizeShadowDOM = function _sanitizeShadowDOM2(fragment) {
      var shadowNode = void 0;
      var shadowIterator = _createIterator(fragment);
      _executeHook("beforeSanitizeShadowDOM", fragment, null);
      while (shadowNode = shadowIterator.nextNode()) {
        _executeHook("uponSanitizeShadowNode", shadowNode, null);
        if (_sanitizeElements(shadowNode)) {
          continue;
        }
        if (shadowNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM2(shadowNode.content);
        }
        _sanitizeAttributes(shadowNode);
      }
      _executeHook("afterSanitizeShadowDOM", fragment, null);
    };
    DOMPurify.sanitize = function(dirty, cfg) {
      var body = void 0;
      var importedNode = void 0;
      var currentNode = void 0;
      var oldNode = void 0;
      var returnNode = void 0;
      IS_EMPTY_INPUT = !dirty;
      if (IS_EMPTY_INPUT) {
        dirty = "<!-->";
      }
      if (typeof dirty !== "string" && !_isNode(dirty)) {
        if (typeof dirty.toString !== "function") {
          throw typeErrorCreate("toString is not a function");
        } else {
          dirty = dirty.toString();
          if (typeof dirty !== "string") {
            throw typeErrorCreate("dirty is not a string, aborting");
          }
        }
      }
      if (!DOMPurify.isSupported) {
        if (_typeof(window2.toStaticHTML) === "object" || typeof window2.toStaticHTML === "function") {
          if (typeof dirty === "string") {
            return window2.toStaticHTML(dirty);
          }
          if (_isNode(dirty)) {
            return window2.toStaticHTML(dirty.outerHTML);
          }
        }
        return dirty;
      }
      if (!SET_CONFIG) {
        _parseConfig(cfg);
      }
      DOMPurify.removed = [];
      if (typeof dirty === "string") {
        IN_PLACE = false;
      }
      if (IN_PLACE)
        ;
      else if (dirty instanceof Node2) {
        body = _initDocument("<!---->");
        importedNode = body.ownerDocument.importNode(dirty, true);
        if (importedNode.nodeType === 1 && importedNode.nodeName === "BODY") {
          body = importedNode;
        } else if (importedNode.nodeName === "HTML") {
          body = importedNode;
        } else {
          body.appendChild(importedNode);
        }
      } else {
        if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && dirty.indexOf("<") === -1) {
          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
        }
        body = _initDocument(dirty);
        if (!body) {
          return RETURN_DOM ? null : emptyHTML;
        }
      }
      if (body && FORCE_BODY) {
        _forceRemove(body.firstChild);
      }
      var nodeIterator = _createIterator(IN_PLACE ? dirty : body);
      while (currentNode = nodeIterator.nextNode()) {
        if (currentNode.nodeType === 3 && currentNode === oldNode) {
          continue;
        }
        if (_sanitizeElements(currentNode)) {
          continue;
        }
        if (currentNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(currentNode.content);
        }
        _sanitizeAttributes(currentNode);
        oldNode = currentNode;
      }
      oldNode = null;
      if (IN_PLACE) {
        return dirty;
      }
      if (RETURN_DOM) {
        if (RETURN_DOM_FRAGMENT) {
          returnNode = createDocumentFragment.call(body.ownerDocument);
          while (body.firstChild) {
            returnNode.appendChild(body.firstChild);
          }
        } else {
          returnNode = body;
        }
        if (RETURN_DOM_IMPORT) {
          returnNode = importNode.call(originalDocument, returnNode, true);
        }
        return returnNode;
      }
      var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
      if (SAFE_FOR_TEMPLATES) {
        serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$$1, " ");
        serializedHTML = stringReplace(serializedHTML, ERB_EXPR$$1, " ");
      }
      return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };
    DOMPurify.setConfig = function(cfg) {
      _parseConfig(cfg);
      SET_CONFIG = true;
    };
    DOMPurify.clearConfig = function() {
      CONFIG = null;
      SET_CONFIG = false;
    };
    DOMPurify.isValidAttribute = function(tag, attr, value) {
      if (!CONFIG) {
        _parseConfig({});
      }
      var lcTag = transformCaseFunc(tag);
      var lcName = transformCaseFunc(attr);
      return _isValidAttribute(lcTag, lcName, value);
    };
    DOMPurify.addHook = function(entryPoint, hookFunction) {
      if (typeof hookFunction !== "function") {
        return;
      }
      hooks[entryPoint] = hooks[entryPoint] || [];
      arrayPush(hooks[entryPoint], hookFunction);
    };
    DOMPurify.removeHook = function(entryPoint) {
      if (hooks[entryPoint]) {
        arrayPop(hooks[entryPoint]);
      }
    };
    DOMPurify.removeHooks = function(entryPoint) {
      if (hooks[entryPoint]) {
        hooks[entryPoint] = [];
      }
    };
    DOMPurify.removeAllHooks = function() {
      hooks = {};
    };
    return DOMPurify;
  }
  var purify = createDOMPurify();
  var purify_es_default = purify;

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
  function getHashParams(opt_win) {
    var _ref2 = opt_win || self, location = _ref2.location;
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

  // src/core/dom/srcset.js
  var srcsetRegex = /(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;
  function parseSrcset(s2) {
    var sources = [];
    var match;
    while (match = srcsetRegex.exec(s2)) {
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
      userAssert(sources.length > 0, "Srcset must have at least one source");
      this.sources_ = sources;
      var hasWidth = false;
      var hasDpr = false;
      for (var i3 = 0; i3 < sources.length; i3++) {
        var source = sources[i3];
        hasWidth = hasWidth || !!source.width;
        hasDpr = hasDpr || !!source.dpr;
      }
      userAssert(!!(hasWidth ^ hasDpr), "Srcset must have width or dpr sources, but not both");
      sources.sort(hasWidth ? sortByWidth : sortByDpr);
      this.widthBased_ = hasWidth;
    }
    var _proto = Srcset2.prototype;
    _proto.select = function select(width, dpr) {
      devAssert(width, "width=%s", width);
      devAssert(dpr, "dpr=%s", dpr);
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
      for (var i3 = 0; i3 < sources.length; i3++) {
        var sWidth = sources[i3].width;
        var score = Math.abs(sWidth - width);
        if (score <= minScore * 1.1 || width / minWidth > 1.2) {
          minIndex = i3;
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
      for (var i3 = 0; i3 < sources.length; i3++) {
        var score = Math.abs(sources[i3].dpr - dpr);
        if (score <= minScore) {
          minIndex = i3;
          minScore = score;
        } else {
          break;
        }
      }
      return minIndex;
    };
    _proto.getUrls = function getUrls() {
      return this.sources_.map(function(s2) {
        return s2.url;
      });
    };
    _proto.stringify = function stringify(opt_mapper) {
      var res = [];
      var sources = this.sources_;
      for (var i3 = 0; i3 < sources.length; i3++) {
        var source = sources[i3];
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
    userAssert(s1.width != s2.width, "Duplicate width: %s", s1.width);
    return s1.width - s2.width;
  }
  function sortByDpr(s1, s2) {
    userAssert(s1.dpr != s2.dpr, "Duplicate dpr: %s", s1.dpr);
    return s1.dpr - s2.dpr;
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
  var SOURCE_ORIGIN_PARAM = "__amp_source_origin";
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
  function checkCorsUrl(url) {
    var parsedUrl = parseUrlDeprecated(url);
    var query = parseQueryString(parsedUrl.search);
    userAssert2(!(SOURCE_ORIGIN_PARAM in query), "Source origin is not allowed in %s", url);
  }

  // src/url-rewrite.js
  var TAG = "URL-REWRITE";
  function rewriteAttributeValue(tagName, attrName, attrValue) {
    if (isUrlAttribute(attrName)) {
      return resolveUrlAttr(tagName, attrName, attrValue, self.location);
    }
    return attrValue;
  }
  function isUrlAttribute(attrName) {
    return attrName == "src" || attrName == "href" || attrName == "xlink:href" || attrName == "srcset";
  }
  function resolveUrlAttr(tagName, attrName, attrValue, windowLocation) {
    checkCorsUrl(attrValue);
    var isProxyHost = isProxyOrigin(windowLocation);
    var baseUrl = parseUrlDeprecated(getSourceUrl(windowLocation));
    if (attrName == "href" && !attrValue.startsWith("#")) {
      return resolveRelativeUrl(attrValue, baseUrl);
    }
    if (attrName == "src") {
      if (tagName == "amp-img") {
        return resolveImageUrlAttr(attrValue, baseUrl, isProxyHost);
      }
      return resolveRelativeUrl(attrValue, baseUrl);
    }
    if (attrName == "srcset") {
      var srcset;
      try {
        srcset = parseSrcset(attrValue);
      } catch (e3) {
        user().error(TAG, "Failed to parse srcset: ", e3);
        return attrValue;
      }
      return srcset.stringify(function(url) {
        return resolveImageUrlAttr(url, baseUrl, isProxyHost);
      });
    }
    return attrValue;
  }
  function resolveImageUrlAttr(attrValue, baseUrl, isProxyHost) {
    var src = parseUrlDeprecated(resolveRelativeUrl(attrValue, baseUrl));
    if (src.protocol == "data:" || isProxyOrigin(src) || !isProxyHost) {
      return src.href;
    }
    return urls.cdn + "/i/" + (src.protocol == "https:" ? "s/" : "") + encodeURIComponent(src.host) + src.pathname + (src.search || "") + (src.hash || "");
  }

  // src/purifier/sanitation.js
  var BIND_PREFIX = "data-amp-bind-";
  var DIFF_KEY = "i-amphtml-key";
  var DIFF_IGNORE = "i-amphtml-ignore";
  var DIFFABLE_AMP_ELEMENTS = {
    "AMP-IMG": ["src", "srcset", "layout", "width", "height"]
  };
  function markElementForDiffing(element, generateKey) {
    var isAmpElement = element.tagName.startsWith("AMP-");
    var hasBinding = element.hasAttribute("i-amphtml-binding");
    if (!hasBinding && DIFFABLE_AMP_ELEMENTS[element.tagName]) {
      element.setAttribute(DIFF_IGNORE, "");
    } else if (hasBinding || isAmpElement) {
      if (!element.hasAttribute(DIFF_KEY)) {
        element.setAttribute(DIFF_KEY, generateKey());
      }
    }
  }
  var DENYLISTED_TAGS = {
    "applet": true,
    "audio": true,
    "base": true,
    "embed": true,
    "frame": true,
    "frameset": true,
    "iframe": true,
    "img": true,
    "link": true,
    "meta": true,
    "object": true,
    "style": true,
    "video": true
  };
  var EMAIL_ALLOWLISTED_AMP_TAGS = {
    "amp-accordion": true,
    "amp-anim": true,
    "amp-bind-macro": true,
    "amp-carousel": true,
    "amp-fit-text": true,
    "amp-img": true,
    "amp-layout": true,
    "amp-selector": true,
    "amp-sidebar": true,
    "amp-timeago": true
  };
  var TRIPLE_MUSTACHE_ALLOWLISTED_TAGS = ["a", "amp-img", "article", "aside", "b", "blockquote", "br", "caption", "code", "col", "colgroup", "dd", "del", "details", "div", "dl", "dt", "em", "figcaption", "figure", "footer", "h1", "h2", "h3", "header", "hr", "i", "ins", "li", "main", "mark", "nav", "ol", "p", "pre", "q", "s", "section", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "tfoot", "th", "thead", "time", "tr", "u", "ul"];
  var ALLOWLISTED_ATTRS = [
    "amp-fx",
    "fallback",
    "heights",
    "layout",
    "min-font-size",
    "max-font-size",
    "on",
    "option",
    "placeholder",
    "submitting",
    "submit-success",
    "submit-error",
    "validation-for",
    "verify-error",
    "visible-when-invalid",
    "href",
    "style",
    "text",
    "subscriptions-action",
    "subscriptions-actions",
    "subscriptions-decorate",
    "subscriptions-dialog",
    "subscriptions-display",
    "subscriptions-section",
    "subscriptions-service",
    "subscriptions-google-rtc",
    "amp-nested-submenu",
    "amp-nested-submenu-open",
    "amp-nested-submenu-close",
    "itemprop"
  ];
  var ALLOWLISTED_ATTRS_BY_TAGS = {
    "a": ["rel", "target"],
    "div": ["template"],
    "form": ["action-xhr", "verify-xhr", "custom-validation-reporting", "target"],
    "input": ["mask-output"],
    "template": ["type"],
    "textarea": ["autoexpand"]
  };
  var ALLOWLISTED_TARGETS = ["_top", "_blank"];
  var DENYLISTED_PROTOCOLS = /^(?:\w+script|data|blob):/i;
  var EXTENDED_DENYLISTED_PROTOCOLS = /^(?:blob):/i;
  var ATTR_WHITESPACE2 = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g;
  var DENYLISTED_TAG_SPECIFIC_ATTR_VALUES = Object.freeze(dict({
    "input": {
      "type": /(?:image|button)/i
    }
  }));
  var EMAIL_DENYLISTED_TAG_SPECIFIC_ATTR_VALUES = Object.freeze(dict({
    "input": {
      "type": /(?:button|file|image|password)/i
    }
  }));
  var DENYLISTED_FIELDS_ATTR = Object.freeze(["form", "formaction", "formmethod", "formtarget", "formnovalidate", "formenctype"]);
  var DENYLISTED_TAG_SPECIFIC_ATTRS = Object.freeze(dict({
    "input": DENYLISTED_FIELDS_ATTR,
    "textarea": DENYLISTED_FIELDS_ATTR,
    "select": DENYLISTED_FIELDS_ATTR
  }));
  var EMAIL_DENYLISTED_TAG_SPECIFIC_ATTRS = Object.freeze(dict({
    "amp-anim": ["controls"],
    "form": ["name"]
  }));
  var INVALID_INLINE_STYLE_REGEX = /!important|position\s*:\s*fixed|position\s*:\s*sticky/i;
  function isValidAttr(tagName, attrName, attrValue, doc, opt_purify) {
    if (opt_purify === void 0) {
      opt_purify = false;
    }
    var attrValueWithoutWhitespace = attrValue ? attrValue.replace(ATTR_WHITESPACE2, "") : "";
    if (!opt_purify) {
      if (attrName.startsWith("on") && attrName != "on") {
        return false;
      }
      var normalized = attrValueWithoutWhitespace.toLowerCase();
      if (normalized.indexOf("<script") >= 0 || normalized.indexOf("<\/script") >= 0) {
        return false;
      }
      if (DENYLISTED_PROTOCOLS.test(attrValueWithoutWhitespace)) {
        return false;
      }
    }
    if (EXTENDED_DENYLISTED_PROTOCOLS.test(attrValueWithoutWhitespace)) {
      return false;
    }
    if (attrName == "style") {
      return !INVALID_INLINE_STYLE_REGEX.test(attrValue);
    }
    if (attrName == "class" && attrValue && /(^|\W)i-amphtml-/i.test(attrValue)) {
      return false;
    }
    if (isUrlAttribute(attrName) && /__amp_source_origin/.test(attrValue)) {
      return false;
    }
    var isEmail = isAmp4Email(doc);
    var attrDenylist = Object.assign(map(), DENYLISTED_TAG_SPECIFIC_ATTRS, isEmail ? EMAIL_DENYLISTED_TAG_SPECIFIC_ATTRS : {})[tagName];
    if (attrDenylist && attrDenylist.indexOf(attrName) != -1) {
      return false;
    }
    var attrValueDenylist = Object.assign(map(), DENYLISTED_TAG_SPECIFIC_ATTR_VALUES, isEmail ? EMAIL_DENYLISTED_TAG_SPECIFIC_ATTR_VALUES : {})[tagName];
    if (attrValueDenylist) {
      var denylistedValuesRegex = attrValueDenylist[attrName];
      if (denylistedValuesRegex && attrValue.search(denylistedValuesRegex) != -1) {
        return false;
      }
    }
    return true;
  }

  // src/purifier/index.js
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i3 = 1; i3 < arguments.length; i3++) {
        var source = arguments[i3];
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
  var TAG2 = "purifier";
  var ALLOWLISTED_TAGS_BY_ATTRS = {
    "script": {
      "attribute": "type",
      "values": ["application/json", "application/ld+json"]
    }
  };
  var PURIFY_PROFILES = {
    USE_PROFILES: {
      html: true,
      svg: true,
      svgFilters: true
    }
  };
  var Purifier = /* @__PURE__ */ function() {
    function Purifier2(doc, opt_config, opt_attrRewrite) {
      this.doc_ = doc;
      this.keyCounter_ = 1;
      this.domPurify_ = purify_es_default(self);
      this.domPurifyTriple_ = purify_es_default(self);
      var config = Object.assign(opt_config || {}, standardPurifyConfig());
      this.domPurify_.setConfig(config);
      this.addPurifyHooks_(this.domPurify_, opt_attrRewrite);
      this.addPurifyHooksTripleMustache_(this.domPurifyTriple_);
    }
    var _proto = Purifier2.prototype;
    _proto.purifyHtml = function purifyHtml(dirty) {
      var body = this.domPurify_.sanitize(dirty);
      return body;
    };
    _proto.purifyTagsForTripleMustache = function purifyTagsForTripleMustache(dirty) {
      var fragment = this.domPurifyTriple_.sanitize(dirty, {
        "ALLOWED_TAGS": TRIPLE_MUSTACHE_ALLOWLISTED_TAGS,
        "FORCE_BODY": true,
        "RETURN_DOM_FRAGMENT": true
      });
      var div = this.doc_.createElement("div");
      div.appendChild(fragment);
      return div.innerHTML;
    };
    _proto.getAllowedTags = function getAllowedTags() {
      var allowedTags = {};
      this.domPurify_.addHook("uponSanitizeElement", function(node, data) {
        Object.assign(allowedTags, data.allowedTags);
      });
      var p2 = this.doc_.createElement("p");
      this.domPurify_.sanitize(p2);
      Object.keys(DENYLISTED_TAGS).forEach(function(tag) {
        allowedTags[tag] = false;
      });
      this.domPurify_.removeHook("uponSanitizeElement");
      return allowedTags;
    };
    _proto.validateAttributeChange = function validateAttributeChange(node, attr, value) {
      var tag = node.nodeName.toLowerCase();
      var allowlist = ALLOWLISTED_TAGS_BY_ATTRS[tag];
      if (allowlist) {
        var attribute = allowlist.attribute, values = allowlist.values;
        if (attribute === attr) {
          if (value == null || !values.includes(value)) {
            return false;
          }
        }
      }
      if (tag === "a" && attr === "target") {
        if (value == null || !ALLOWLISTED_TARGETS.includes(value)) {
          return false;
        }
      }
      if (value == null) {
        return true;
      }
      if (bindingTypeForAttr(attr) !== BindingType_Enum.NONE) {
        return false;
      }
      var pure = this.domPurify_.isValidAttribute(tag, attr, value);
      if (!pure) {
        var attrsByTags = ALLOWLISTED_ATTRS_BY_TAGS[tag];
        var allowlistedForTag = attrsByTags && attrsByTags.includes(attr);
        if (!allowlistedForTag && !tag.startsWith("amp-")) {
          return false;
        }
      }
      var doc = node.ownerDocument ? node.ownerDocument : node;
      if (value && !isValidAttr(tag, attr, value, doc, true)) {
        return false;
      }
      return true;
    };
    _proto.addPurifyHooks_ = function addPurifyHooks_(purifier, attrRewrite) {
      var _this = this;
      var isEmail = isAmp4Email(this.doc_);
      var allowedTags;
      var allowedTagsChanges = [];
      var allowedAttributes;
      var allowedAttributesChanges = [];
      var uponSanitizeElement = function uponSanitizeElement2(node, data) {
        var tagName = data.tagName;
        allowedTags = data.allowedTags;
        if (tagName.startsWith("amp-")) {
          allowedTags[tagName] = !isEmail || EMAIL_ALLOWLISTED_AMP_TAGS[tagName];
        }
        if (tagName === "a") {
          var element = devAssertElement(node);
          if (element.hasAttribute("href") && !element.hasAttribute("target")) {
            element.setAttribute("target", "_top");
          }
        }
        var allowlist = ALLOWLISTED_TAGS_BY_ATTRS[tagName];
        if (allowlist) {
          var attribute = allowlist.attribute, values = allowlist.values;
          var _element = devAssertElement(node);
          if (_element.hasAttribute(attribute) && values.includes(_element.getAttribute(attribute))) {
            allowedTags[tagName] = true;
            allowedTagsChanges.push(tagName);
          }
        }
      };
      var afterSanitizeElements = function afterSanitizeElements2(unusedNode) {
        allowedTagsChanges.forEach(function(tag) {
          delete allowedTags[tag];
        });
        allowedTagsChanges.length = 0;
      };
      var uponSanitizeAttribute = function uponSanitizeAttribute2(element, data) {
        var tagName = element.nodeName.toLowerCase();
        var attrName = data.attrName;
        var attrValue = data.attrValue;
        allowedAttributes = data.allowedAttributes;
        var allowAttribute = function allowAttribute2() {
          if (!allowedAttributes[attrName]) {
            allowedAttributes[attrName] = true;
            allowedAttributesChanges.push(attrName);
          }
        };
        var isAmpElement = tagName.startsWith("amp-");
        if (isAmpElement) {
          allowAttribute();
        } else {
          if (tagName == "a" && attrName == "target") {
            var lowercaseValue = attrValue.toLowerCase();
            if (!ALLOWLISTED_TARGETS.includes(lowercaseValue)) {
              attrValue = "_top";
            } else {
              attrValue = lowercaseValue;
            }
          }
          var attrsByTags = ALLOWLISTED_ATTRS_BY_TAGS[tagName];
          if (attrsByTags && attrsByTags.includes(attrName)) {
            allowAttribute();
          }
        }
        var bindingType = bindingTypeForAttr(attrName);
        if (bindingType === BindingType_Enum.CLASSIC) {
          var property = attrName.substring(1, attrName.length - 1);
          element.setAttribute("" + BIND_PREFIX + property, attrValue);
        }
        if (bindingType !== BindingType_Enum.NONE) {
          element.setAttribute("i-amphtml-binding", "");
        }
        if (isValidAttr(tagName, attrName, attrValue, _this.doc_, true)) {
          if (attrRewrite && attrValue && !attrName.startsWith(BIND_PREFIX)) {
            attrValue = attrRewrite(tagName, attrName, attrValue);
          }
        } else {
          data.keepAttr = false;
          user().error(TAG2, 'Removed invalid attribute %s[%s="%s"].', tagName, attrName, attrValue);
        }
        data.attrValue = attrValue;
      };
      var afterSanitizeAttributes = function afterSanitizeAttributes2(element) {
        markElementForDiffing(element, function() {
          return String(_this.keyCounter_++);
        });
        allowedAttributesChanges.forEach(function(attr) {
          delete allowedAttributes[attr];
        });
        allowedAttributesChanges.length = 0;
        var tagName = element.nodeName.toLowerCase();
        if (tagName === "use") {
          ["href", "xlink:href"].forEach(function(attr) {
            if (element.hasAttribute(attr) && !element.getAttribute(attr).startsWith("#")) {
              removeElement(element);
              user().error(TAG2, 'Removed invalid <use>. use[href] must start with "#".');
            }
          });
        }
      };
      purifier.addHook("uponSanitizeElement", uponSanitizeElement);
      purifier.addHook("afterSanitizeElements", afterSanitizeElements);
      purifier.addHook("uponSanitizeAttribute", uponSanitizeAttribute);
      purifier.addHook("afterSanitizeAttributes", afterSanitizeAttributes);
    };
    _proto.addPurifyHooksTripleMustache_ = function addPurifyHooksTripleMustache_(purifier) {
      var allowedTags;
      var uponSanitizeElement = function uponSanitizeElement2(node, data) {
        var tagName = data.tagName;
        allowedTags = data.allowedTags;
        if (tagName === "template") {
          var type = node.getAttribute("type");
          if (type && type.toLowerCase() === "amp-mustache") {
            allowedTags["template"] = true;
          }
        }
      };
      var afterSanitizeElements = function afterSanitizeElements2(unusedNode) {
        allowedTags["template"] = false;
      };
      purifier.addHook("uponSanitizeElement", uponSanitizeElement);
      purifier.addHook("afterSanitizeElements", afterSanitizeElements);
    };
    return Purifier2;
  }();
  function standardPurifyConfig() {
    var config = _extends({}, PURIFY_PROFILES, {
      ADD_ATTR: ALLOWLISTED_ATTRS,
      ADD_TAGS: ["use"],
      FORBID_TAGS: Object.keys(DENYLISTED_TAGS),
      FORCE_BODY: true,
      RETURN_DOM: true,
      ALLOW_UNKNOWN_PROTOCOLS: true
    });
    return config;
  }
  var BindingType_Enum = {
    NONE: 0,
    CLASSIC: 1,
    ALTERNATIVE: 2
  };
  function bindingTypeForAttr(attrName) {
    if (attrName[0] == "[" && attrName[attrName.length - 1] == "]") {
      return BindingType_Enum.CLASSIC;
    }
    if (attrName.startsWith(BIND_PREFIX)) {
      return BindingType_Enum.ALTERNATIVE;
    }
    return BindingType_Enum.NONE;
  }

  // src/service/extension-script.js
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
  function extensionScriptsInNode(head) {
    if (!head) {
      return [];
    }
    var list = head.querySelectorAll("script[custom-element],script[custom-template]");
    var scripts = [];
    for (var i3 = 0; i3 < list.length; i3++) {
      var script = list[i3];
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
    return extensionScriptsInNode(win.document.head).some(function(_ref2) {
      var extensionId = _ref2.extensionId, extensionVersion = _ref2.extensionVersion;
      return id == extensionId && version2 == extensionVersion;
    });
  }

  // src/service-helpers.js
  function registerServiceBuilder(win, id, constructor, opt_instantiate) {
    win = getTopWindow(win);
    registerServiceInternal(win, win, id, constructor);
    if (opt_instantiate) {
      getServiceInternal(win, id);
    }
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
    var s2 = services[id];
    if (!s2.obj) {
      devAssert2(s2.ctor, "Service " + id + " registered without ctor nor impl.");
      devAssert2(s2.context, "Service " + id + " registered without context.");
      s2.obj = new s2.ctor(s2.context);
      devAssert2(s2.obj, "Service " + id + " constructed to null.");
      s2.context = null;
      if (s2.resolve) {
        s2.resolve(s2.obj);
      }
    }
    return s2.obj;
  }
  function registerServiceInternal(holder, context, id, ctor, opt_override, opt_sharedInstance) {
    var services = getServices(holder);
    var s2 = services[id];
    if (!s2) {
      s2 = services[id] = {
        obj: null,
        promise: null,
        resolve: null,
        reject: null,
        context: null,
        ctor: null,
        sharedInstance: opt_sharedInstance || false
      };
    }
    if (!opt_override && s2.ctor) {
      return;
    }
    s2.ctor = ctor;
    s2.context = context;
    s2.sharedInstance = opt_sharedInstance || false;
    if (s2.resolve) {
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
  function getServicePromiseOrNullInternal(holder, id) {
    var services = getServices(holder);
    var s2 = services[id];
    if (s2) {
      if (s2.promise) {
        return s2.promise;
      } else {
        getServiceInternal(holder, id);
        return s2.promise = Promise.resolve(s2.obj);
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
    var s2 = getServicePromiseOrNull(win, id);
    if (s2) {
      return s2;
    }
    return getElementServicePromiseOrNull(win, id, extension, version2, opt_element);
  }
  function getElementServiceForDoc(element, id, extension, opt_element) {
    return getElementServiceIfAvailableForDoc(element, id, extension, opt_element).then(function(service) {
      return assertService(service, id, extension);
    });
  }
  function getElementServiceIfAvailableForDoc(element, id, extension, opt_element) {
    var s2 = getServicePromiseOrNullForDoc(element, id);
    if (s2) {
      return s2;
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
    var s2 = getServiceForDocOrNull(element, id);
    if (s2) {
      return Promise.resolve(s2);
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

  // extensions/amp-script/0.1/user-activation-tracker.js
  var ACTIVATION_TIMEOUT = 5e3;
  var ACTIVATION_EVENTS = ["change", "click", "dblclick", "input", "keypress", "submit", "keydown"];
  var UserActivationTracker = /* @__PURE__ */ function() {
    function UserActivationTracker2(root) {
      var _this = this;
      this.root_ = root;
      this.boundActivated_ = this.activated_.bind(this);
      this.lastActivationTime_ = 0;
      this.inLongTask_ = false;
      ACTIVATION_EVENTS.forEach(function(type) {
        _this.root_.addEventListener(type, _this.boundActivated_, true);
      });
    }
    var _proto = UserActivationTracker2.prototype;
    _proto.dispose = function dispose() {
      var _this2 = this;
      ACTIVATION_EVENTS.forEach(function(type) {
        _this2.root_.removeEventListener(type, _this2.boundActivated_, true);
      });
    };
    _proto.hasBeenActive = function hasBeenActive() {
      return this.lastActivationTime_ > 0;
    };
    _proto.isActive = function isActive() {
      return this.lastActivationTime_ > 0 && Date.now() - this.lastActivationTime_ <= ACTIVATION_TIMEOUT || this.inLongTask_;
    };
    _proto.getLastActivationTime = function getLastActivationTime() {
      return this.lastActivationTime_;
    };
    _proto.expandLongTask = function expandLongTask(promise) {
      var _this3 = this;
      if (!this.isActive()) {
        return;
      }
      devAssert2(!this.inLongTask_, "Should not expand while a longTask is already ongoing.");
      this.inLongTask_ = true;
      var longTaskComplete = function longTaskComplete2() {
        _this3.inLongTask_ = false;
        _this3.lastActivationTime_ = Date.now();
      };
      promise.then(longTaskComplete, longTaskComplete);
    };
    _proto.isInLongTask = function isInLongTask() {
      return this.inLongTask_;
    };
    _proto.activated_ = function activated_(event) {
      if (event.isTrusted) {
        this.lastActivationTime_ = Date.now();
      }
    };
    return UserActivationTracker2;
  }();

  // build/amp-script-0.1.css.js
  var CSS2 = "amp-script{opacity:0.7}amp-script.i-amphtml-hydrated{opacity:1}\n/*# sourceURL=/extensions/amp-script/0.1/amp-script.css*/";

  // src/error-reporting.js
  var CANCELLED = "CANCELLED";
  var accumulatedErrorMessages = self.__AMP_ERRORS || [];
  self.__AMP_ERRORS = accumulatedErrorMessages;
  function cancellation() {
    return new Error(CANCELLED);
  }

  // extensions/amp-script/0.1/amp-script.js
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o3, p2) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o4, p3) {
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
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o4) {
      return o4.__proto__ || Object.getPrototypeOf(o4);
    };
    return _getPrototypeOf(o3);
  }
  var TAG3 = "amp-script";
  var MAX_TOTAL_SCRIPT_SIZE = 15e4;
  var Phase = {
    INITIALIZING: 0,
    HYDRATING: 1,
    MUTATING: 2
  };
  var StorageLocation = {
    LOCAL: 0,
    SESSION: 1,
    AMP_STATE: 2
  };
  var upgradeForTest = null;
  function setUpgradeForTest(fn) {
    upgradeForTest = fn;
  }
  var AmpScript = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpScript2, _AMP$BaseElement);
    var _super = _createSuper(AmpScript2);
    function AmpScript2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.vsync_ = Services.vsyncFor(_this.win);
      _this.workerDom_ = null;
      _this.userActivation_ = null;
      _this.service_ = null;
      _this.debugId_ = "amp-script[unknown].js";
      _this.layoutCompleted_ = false;
      _this.reportedZeroSize_ = false;
      _this.initialize_ = new Deferred();
      _this.development_ = false;
      _this.nodom_ = false;
      _this.sandboxed_ = false;
      return _this;
    }
    var _proto = AmpScript2.prototype;
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return layout == Layout_Enum.CONTAINER || isLayoutSizeDefined(layout);
    };
    _proto.buildCallback = function buildCallback() {
      var _this2 = this;
      this.sandboxed_ = this.element.hasAttribute("sandboxed");
      this.nodom_ = this.sandboxed_ || this.element.hasAttribute("nodom");
      this.development_ = this.element.hasAttribute("data-ampdevmode") || this.element.ownerDocument.documentElement.hasAttribute("data-ampdevmode");
      if (this.development_) {
        user().warn(TAG3, "JavaScript size and script hash requirements are disabled in development mode.", this.element);
      }
      if (this.nodom_ && (this.element.hasAttribute("width") || this.element.hasAttribute("height") || this.element.hasAttribute("layout"))) {
        user().warn(TAG3, "Cannot set width, height, or layout of a nodom <amp-script>", this.element);
      }
      return getElementServiceForDoc(this.element, TAG3, TAG3).then(function(service) {
        _this2.setService(service);
      });
    };
    _proto.onLayoutMeasure = function onLayoutMeasure() {
      if (this.layoutCompleted_ || this.reportedZeroSize_) {
        return;
      }
      var _this$getLayoutSize = this.getLayoutSize(), height = _this$getLayoutSize.height, width = _this$getLayoutSize.width;
      if (width === 0 && height === 0) {
        this.reportedZeroSize_ = true;
        user().warn(TAG3, "Skipped initializing amp-script due to zero width and height.", this.element);
      }
    };
    _proto.setService = function setService(service) {
      this.service_ = service;
    };
    _proto.getUserActivation = function getUserActivation() {
      return this.userActivation_;
    };
    _proto.callFunction = function callFunction(unusedFnId, unusedFnArgs) {
      var _arguments = arguments, _this3 = this;
      return this.initialize_.promise.then(function() {
        return _this3.workerDom_.callFunction.apply(_this3.workerDom_, _arguments);
      });
    };
    _proto.layoutCallback = function layoutCallback() {
      var _this4 = this;
      this.layoutCompleted_ = true;
      var container;
      if (this.element.sizerElement) {
        container = this.win.document.createElement("div");
        applyFillContent(container, true);
        var realChildren = realChildElements(this.element);
        for (var i3 = 0; i3 < realChildren.length; i3++) {
          container.appendChild(realChildren[i3]);
        }
        this.element.appendChild(container);
      }
      this.userActivation_ = new UserActivationTracker(this.element);
      this.debugId_ = this.element.hasAttribute("src") ? 'amp-script[src="' + this.element.getAttribute("src") + '"].js' : 'amp-script[script="' + this.element.getAttribute("script") + '"].js';
      var authorScriptPromise = this.getAuthorScript_(this.debugId_);
      if (!authorScriptPromise) {
        user().error(TAG3, '"src" or "script" attribute is required.');
        return Promise.reject(cancellation());
      }
      var workerAndAuthorScripts = Promise.all([this.getWorkerScript_(), authorScriptPromise]).then(function(results) {
        var workerScript = results[0];
        var authorScript = results[1];
        if (!_this4.development_ && _this4.service_.sizeLimitExceeded(authorScript.length)) {
          user().error(TAG3, "Maximum total script size exceeded (%s). %s is disabled. See https://amp.dev/documentation/components/amp-script/#size-of-javascript-code.", MAX_TOTAL_SCRIPT_SIZE, _this4.debugId_);
          _this4.element.classList.add("i-amphtml-broken");
          return [];
        }
        return [workerScript, authorScript];
      });
      var sandbox = this.element.getAttribute("sandbox") || "";
      var sandboxTokens = sandbox.split(" ").map(function(s2) {
        return s2.trim();
      });
      var iframeUrl;
      if (getMode().localDev) {
        var folder = isMinified() ? "current-min" : "current";
        iframeUrl = "/dist.3p/" + folder + "/amp-script-proxy-iframe.html";
      } else {
        iframeUrl = urls.thirdParty + "/" + version() + "/amp-script-proxy-iframe.html";
      }
      var config = {
        authorURL: this.debugId_,
        mutationPump: this.mutationPump_.bind(this),
        longTask: function longTask(promise) {
          _this4.userActivation_.expandLongTask(promise);
        },
        sanitizer: new SanitizerImpl(this, sandboxTokens),
        onCreateWorker: function onCreateWorker(data) {
          dev().info(TAG3, "Create worker:", data);
        },
        onSendMessage: function onSendMessage(data) {
          dev().info(TAG3, "To worker:", data);
        },
        onReceiveMessage: function onReceiveMessage(data) {
          dev().info(TAG3, "From worker:", data);
        },
        sandbox: this.sandboxed_ && {
          iframeUrl: iframeUrl
        }
      };
      return (upgradeForTest || I)(container || this.element, workerAndAuthorScripts, config).then(function(workerDom) {
        _this4.workerDom_ = workerDom;
        _this4.initialize_.resolve();
        if (_this4.workerDom_) {
          _this4.workerDom_.onerror = function(errorEvent) {
            errorEvent.preventDefault();
            user().error(TAG3, errorEvent.message + "\n    at (" + errorEvent.filename + ":" + errorEvent.lineno + ")");
          };
        }
      });
    };
    _proto.getWorkerScript_ = function getWorkerScript_() {
      var location = getMode().test && this.win.testLocation ? this.win.testLocation : this.win.location;
      var useLocal = getMode().localDev || getMode().test;
      var workerUrl = calculateExtensionScriptUrl(location, this.nodom_ ? "amp-script-worker-nodom" : "amp-script-worker", "0.1", useLocal);
      var xhr = Services.xhrFor(this.win);
      return xhr.fetchText(workerUrl, {
        ampCors: false
      }).then(function(r3) {
        return r3.text();
      });
    };
    _proto.getAuthorScript_ = function getAuthorScript_(debugId) {
      var authorUrl = this.element.getAttribute("src");
      if (authorUrl) {
        return this.fetchAuthorScript_(authorUrl, debugId);
      } else {
        var id = this.element.getAttribute("script");
        if (id) {
          var local = this.getAmpDoc().getElementById(id);
          userAssert2(local, "[%s] %s could not find element with #%s.", TAG3, debugId, id);
          var target = local.getAttribute("target");
          userAssert2(target === "amp-script", '[%s] script#%s must have target="amp-script".', TAG3, id);
          var text2 = local.textContent;
          if (this.development_ || this.sandboxed_) {
            return Promise.resolve(text2);
          } else {
            return this.service_.checkSha384(text2, debugId).then(function() {
              return text2;
            });
          }
        }
      }
      return null;
    };
    _proto.fetchAuthorScript_ = function fetchAuthorScript_(authorUrl, debugId) {
      var _this5 = this;
      return Services.xhrFor(this.win).fetchText(authorUrl, {
        ampCors: false
      }).then(function(response) {
        if (response.url && _this5.sameOrigin_(response.url)) {
          var contentType = response.headers.get("Content-Type");
          if (!contentType || !(contentType.startsWith("application/javascript") || contentType.startsWith("text/javascript"))) {
            throw user().createError(TAG3, 'Same-origin "src" requires "Content-Type: text/javascript" or "Content-Type: application/javascript". ' + ("Fetched source for " + debugId + ' has "Content-Type: ' + contentType + '". ') + "See https://amp.dev/documentation/components/amp-script/#security-features.");
          }
          return response.text();
        } else {
          if (_this5.development_ || _this5.sandboxed_) {
            return response.text();
          } else {
            return response.text().then(function(text2) {
              return _this5.service_.checkSha384(text2, debugId).then(function() {
                return text2;
              });
            });
          }
        }
      });
    };
    _proto.sameOrigin_ = function sameOrigin_(url) {
      var urlService = Services.urlForDoc(this.element);
      var docOrigin = urlService.getSourceOrigin(this.getAmpDoc().getUrl());
      var scriptOrigin = urlService.parse(url).origin;
      return docOrigin === scriptOrigin;
    };
    _proto.isMutationAllowedByFixedSize = function isMutationAllowedByFixedSize() {
      return isLayoutSizeDefined(this.getLayout());
    };
    _proto.isMutationAllowedByUserGesture = function isMutationAllowedByUserGesture() {
      return this.userActivation_.isActive();
    };
    _proto.mutationPump_ = function mutationPump_(flush, phase) {
      var _this6 = this;
      if (phase == Phase.HYDRATING) {
        this.vsync_.mutate(function() {
          return _this6.element.classList.add("i-amphtml-hydrated");
        });
      }
      var allowMutation = this.isMutationAllowedByFixedSize() || this.isMutationAllowedByUserGesture();
      this.vsync_.mutate(function() {
        var disallowedTypes = flush(allowMutation);
        var errors = map();
        disallowedTypes.forEach(function(type) {
          errors[type] = errors[type] + 1 || 1;
        });
        Object.keys(errors).forEach(function(type) {
          var count = errors[type];
          user().error(TAG3, _this6.mutationTypeToErrorMessage_(type, count));
        });
        if (disallowedTypes.length > 0 && phase === Phase.MUTATING) {
          _this6.workerDom_.terminate();
          _this6.element.classList.remove("i-amphtml-hydrated");
          _this6.element.classList.add("i-amphtml-broken");
          user().error(TAG3, "%s was terminated due to illegal mutation.", _this6.debugId_);
        }
      });
    };
    _proto.mutationTypeToErrorMessage_ = function mutationTypeToErrorMessage_(type, count) {
      var target;
      switch (type) {
        case "0":
        case "3":
          target = "DOM element attributes or styles";
          break;
        case "1":
          target = "textContent or the like";
          break;
        case "2":
          target = "DOM element children, innerHTML, or the like";
          break;
        default:
          target = "the DOM";
          break;
      }
      return "Blocked " + count + " attempts to modify " + target + ". For variable-sized <amp-script> containers, a user action has to happen first.";
    };
    return AmpScript2;
  }(AMP.BaseElement);
  var AmpScriptService = /* @__PURE__ */ function() {
    function AmpScriptService2(ampdoc2) {
      this.ampdoc_ = ampdoc2;
      this.cumulativeSize_ = 0;
      this.sources_ = [];
      var allowedHashes = ampdoc2.getMetaByName("amp-script-src");
      if (allowedHashes) {
        this.sources_ = allowedHashes.split(/\s+/).filter(Boolean);
      }
      this.crypto_ = Services.cryptoFor(ampdoc2.win);
    }
    var _proto2 = AmpScriptService2.prototype;
    _proto2.checkSha384 = function checkSha384(script, debugId) {
      var _this7 = this;
      var bytes = utf8Encode(script);
      return this.crypto_.sha384Base64(bytes).then(function(hash) {
        if (!hash || !_this7.sources_.includes("sha384-" + hash)) {
          throw user().createError(TAG3, "Script hash not found or incorrect for " + debugId + '. You must include <meta name="amp-script-src" content="sha384-' + hash + '">. ' + ('During development, you can disable this check by adding the "data-ampdevmode" attribute to ' + debugId + ", or the root html node") + "See https://amp.dev/documentation/components/amp-script/#script-hash.");
        }
      });
    };
    _proto2.sizeLimitExceeded = function sizeLimitExceeded(size) {
      this.cumulativeSize_ += size;
      return this.cumulativeSize_ > MAX_TOTAL_SCRIPT_SIZE;
    };
    _proto2.fetch = function fetch2(uri, unusedArgs) {
      var uriParts = uri.slice("amp-script:".length).split(".");
      userAssert2(uriParts.length === 2 && uriParts[0].length > 0 && uriParts[1].length > 0, "[" + TAG3 + ']: "amp-script" URIs must be of the format "scriptId.functionIdentifier".');
      var ampScriptId = uriParts[0];
      var fnIdentifier = uriParts[1];
      var ampScriptEl = this.ampdoc_.getElementById(ampScriptId);
      userAssert2(ampScriptEl && ampScriptEl.tagName === "AMP-SCRIPT", "[" + TAG3 + "]: could not find <amp-script> with script set to " + ampScriptId);
      var args = Array.prototype.slice.call(arguments, 1);
      return ampScriptEl.getImpl().then(function(impl) {
        return impl.callFunction.apply(impl, [fnIdentifier].concat(args));
      });
    };
    return AmpScriptService2;
  }();
  var FORM_ELEMENTS = ["form", "button", "fieldset", "input", "object", "output", "select", "textarea"];
  var SanitizerImpl = /* @__PURE__ */ function() {
    function SanitizerImpl2(ampScript, sandboxTokens) {
      var _this8 = this;
      this.win_ = ampScript.win;
      this.element_ = ampScript.element;
      registerServiceBuilder(this.win_, "purifier-inplace", function() {
        return new Purifier(ampScript.win.document, dict({
          "IN_PLACE": true
        }), rewriteAttributeValue);
      });
      this.purifier_ = getService(this.win_, "purifier-inplace");
      this.allowedTags_ = this.purifier_.getAllowedTags();
      this.allowFullEval_ = function() {
        return ampScript.isMutationAllowedByUserGesture();
      };
      this.shouldConstrainEval_ = function() {
        return !_this8.allowFullEval_() && ampScript.isMutationAllowedByFixedSize();
      };
      this.allowedTags_["amp-img"] = true;
      this.allowedTags_["amp-layout"] = true;
      this.allowedTags_["amp-pixel"] = false;
      this.allowForms_ = sandboxTokens.includes("allow-forms");
      FORM_ELEMENTS.forEach(function(fe) {
        _this8.allowedTags_[fe] = _this8.allowForms_;
      });
    }
    var _proto3 = SanitizerImpl2.prototype;
    _proto3.sanitize = function sanitize(node) {
      var tag = node.nodeName.toLowerCase();
      var clean = this.allowedTags_[tag];
      if (!clean) {
        if (!this.warnIfFormsAreDisallowed_(tag)) {
          user().warn(TAG3, "Sanitized node:", node);
        }
      }
      return clean;
    };
    _proto3.setAttribute = function setAttribute(node, attribute, value) {
      var tag = node.nodeName.toLowerCase();
      if (this.allowedTags_[tag]) {
        var attr = attribute.toLowerCase();
        if (this.purifier_.validateAttributeChange(node, attr, value)) {
          if (value == null) {
            node.removeAttribute(attr);
          } else {
            var newValue = rewriteAttributeValue(tag, attr, value);
            node.setAttribute(attr, newValue);
          }
          if (tag === "a") {
            if (node.hasAttribute("href") && !node.hasAttribute("target")) {
              node.setAttribute("target", "_top");
            }
          }
          return true;
        }
      }
      if (!this.warnIfFormsAreDisallowed_(tag)) {
        user().warn(TAG3, 'Sanitized [%s]="%s":', attribute, value, node);
      }
      return false;
    };
    _proto3.warnIfFormsAreDisallowed_ = function warnIfFormsAreDisallowed_(tag) {
      if (!this.allowForms_ && FORM_ELEMENTS.includes(tag)) {
        user().warn(TAG3, 'Form elements (%s) cannot be mutated unless your <amp-script> includes the attribute sandbox="allow-forms".', tag);
        return true;
      }
      return false;
    };
    _proto3.setProperty = function setProperty(node, property, value) {
      var prop = property.toLowerCase();
      if (this.purifier_.validateAttributeChange(node, prop, value)) {
        node[property] = value;
        return true;
      }
      return false;
    };
    _proto3.getStorage = function getStorage(location, opt_key) {
      if (location === StorageLocation.AMP_STATE) {
        return Services.bindForDocOrNull(this.element_).then(function(bind) {
          if (bind) {
            return bind.getStateValue(opt_key || ".");
          }
        });
      }
      var storage = this.storageFor_(location);
      var output = {};
      for (var i3 = 0; i3 < storage.length; i3++) {
        var key = storage.key(i3);
        if (key && !key.startsWith("amp-")) {
          output[key] = storage.getItem(key);
        }
      }
      return output;
    };
    _proto3.setStorage = function setStorage(location, key, value) {
      var _this9 = this;
      if (location === StorageLocation.AMP_STATE) {
        return Services.bindForDocOrNull(this.element_).then(function(bind) {
          if (bind) {
            var state = tryParseJson(value, function() {
              dev().error(TAG3, "Invalid AMP.setState() argument: %s", value);
            });
            if (state) {
              var fullEval = _this9.allowFullEval_();
              var constrain = _this9.shouldConstrainEval_() ? [_this9.element_] : void 0;
              if (!fullEval && !constrain) {
                user().warn(TAG3, "AMP.setState only updated page state and did not reevaluate bindings due to lack of recent user interaction.");
              }
              bind.setState(state, {
                skipEval: !fullEval && !constrain,
                skipAmpState: false,
                constrain: constrain
              });
            }
          }
        });
      }
      var storage = this.storageFor_(location);
      if (key === null) {
        if (value === null) {
          user().error(TAG3, "Storage.clear() is not supported in amp-script.");
        }
      } else {
        if (key.startsWith("amp-")) {
          user().error(TAG3, 'Invalid "amp-" prefix for storage key: %s', key);
        } else {
          if (value === null) {
            storage.removeItem(key);
          } else {
            storage.setItem(key, value);
          }
        }
      }
      return resolvedPromise();
    };
    _proto3.storageFor_ = function storageFor_(location) {
      if (location === StorageLocation.LOCAL) {
        return this.win_.localStorage;
      } else if (location === StorageLocation.SESSION) {
        return this.win_.sessionStorage;
      }
      return null;
    };
    return SanitizerImpl2;
  }();
  AMP.registerServiceForDoc(TAG3, AmpScriptService);
  AMP.registerElement(TAG3, AmpScript, CSS2);
})();
/*! @license DOMPurify 2.3.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.3/LICENSE */
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-script-0.1.max.js.map
