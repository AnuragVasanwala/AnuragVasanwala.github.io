(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-story-player",ev:"0.1",l:true,f:(function(AMP,_){
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

  // src/core/types/enum.js
  function isEnumValue(enumObj, val) {
    for (var k in enumObj) {
      if (enumObj[k] === val) {
        return true;
      }
    }
    return false;
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

  // build/amp-story-player.css.js
  var cssText = 'amp-story-player{position:relative;display:block}.i-amphtml-story-player-shadow-root-intermediary{width:100%;height:100%}amp-story-player a:first-of-type{width:100%;height:100%;background:var(--story-player-poster,#d3d3d3);background-size:100% 100%;display:block}amp-story-player.i-amphtml-story-player-loaded a{display:none}amp-story-player:after{content:" ";position:absolute;box-sizing:border-box;top:calc(50% - 32px);left:calc(50% - 32px);width:64px;height:64px;border-radius:50%;border-color:#fff transparent;border-style:solid;border-width:6px;filter:drop-shadow(0px 1px 3px rgba(0,0,0,0.25));animation-name:i-amphtml-story-player-spinner;animation-duration:4400ms;animation-timing-function:cubic-bezier(0.4,0,0.2,1);animation-iteration-count:infinite}@keyframes i-amphtml-story-player-spinner{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(1080deg)}}.i-amphtml-story-player-loaded:after{visibility:hidden}\n/*# sourceURL=/css/amp-story-player.css*/';

  // node_modules/@ampproject/toolbox-cache-url/dist/amp-toolbox-cache-url.esm.js
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
    var n2 = Object.prototype.toString.call(o).slice(8, -1);
    if (n2 === "Object" && o.constructor)
      n2 = o.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
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
  var l = "ase art bmp blp cd5 cit cpt cr2 cut dds dib djvu egt exif gif gpl grf icns ico iff jng jpeg jpg jfif jp2 jps lbm max miff mng msp nitf ota pbm pc1 pc2 pc3 pcf pcx pdn pgm PI1 PI2 PI3 pict pct pnm pns ppm psb psd pdd psp px pxm pxr qfx raw rle sct sgi rgb int bw tga tiff tif vtf xbm xcf xpm 3dv amf ai awg cgm cdr cmx dxf e2d egt eps fs gbr odg svg stl vrml x3d sxd v2d vnd wmf emf art xar png webp jxr hdp wdp cur ecw iff lbm liff nrrd pam pcx pgf sgi rgb rgba bw int inta sid ras sun tga".split(" ");
  var m = {
    isPathNameAnImage: function isPathNameAnImage(a) {
      return l.some(function(b) {
        return a.endsWith("." + b) ? true : false;
      });
    }
  };
  var n = "### #gf $on $tf 0b 8m 8u 12u 15u 64c 075 75 085 85 91 091 096 96 abf acfm acs afm afn afs all amfm apf asf aspf atm auf b30 bco bdf bepf bez bfn bmap bmf bx bzr cbtf cct cef cff cfn cga ch4 cha chm chr chx claf collection compositefont dfont dus dzk eft eot etx euf f00 f06 f08 f09 f3f f10 f11 f12 f13 f16 fd fdb ff ffil flf fli fn3 fnb fnn fnt fnta fo1 fo2 fog fon font fonts fot frf frs ftm fxr fyi gdr gf gft glf glif glyphs gsf gxf hbf ice intellifont lepf lft lwfn mcf mcf mfd mfm mft mgf mmm mrf mtf mvec nlq ntf odttf ofm okf otf pcf pcf pfa pfb pfm pft phf pk pkt prs pss qbf qfn r8? scr sfd sff sfi sfl sfn sfo sfp sfs sif snf spd spritefont sui suit svg sxs t1c t2 tb1 tb2 tdf tfm tmf tpf ttc tte ttf type ufm ufo usl usp us? vf vf1 vf3 vfb vfm vfont vlw vmf vnf w30 wfn wnf woff woff2 xfc xfn xfr xft zfi zsu _v".split(" ");
  var q = {
    isPathNameAFont: function isPathNameAFont(a) {
      return n.some(function(b) {
        return a.endsWith("." + b) ? true : false;
      });
    }
  };
  var r = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function t(a, b) {
    b = b.split(":")[0];
    a = +a;
    if (!a)
      return false;
    switch (b) {
      case "http":
      case "ws":
        return a !== 80;
      case "https":
      case "wss":
        return a !== 443;
      case "ftp":
        return a !== 21;
      case "gopher":
        return a !== 70;
      case "file":
        return false;
    }
    return a !== 0;
  }
  var u = Object.prototype.hasOwnProperty;
  function v(a) {
    try {
      return decodeURIComponent(a.replace(/\+/g, " "));
    } catch (b) {
      return null;
    }
  }
  var w = {
    stringify: function stringify(a, b) {
      b = b || "";
      var d = [], c;
      typeof b !== "string" && (b = "?");
      for (e in a) {
        if (u.call(a, e)) {
          (c = a[e]) || c !== null && c !== void 0 && !isNaN(c) || (c = "");
          var e = encodeURIComponent(e);
          c = encodeURIComponent(c);
          e !== null && c !== null && d.push(e + "=" + c);
        }
      }
      return d.length ? b + d.join("&") : "";
    },
    parse: function parse(a) {
      for (var b = /([^=?&]+)=?([^&]*)/g, d = {}, c; c = b.exec(a); ) {
        var e = v(c[1]);
        c = v(c[2]);
        e === null || c === null || e in d || (d[e] = c);
      }
      return d;
    }
  };
  var x = /^[A-Za-z][A-Za-z0-9+-.]*:[\\/]+/;
  var y = /^([a-z][a-z0-9.+-]*:)?([\\/]{1,})?([\S\s]*)/i;
  var z = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/;
  function A(a) {
    return (a ? a : "").toString().replace(z, "");
  }
  var B = [["#", "hash"], ["?", "query"], function(a) {
    return a.replace("\\", "/");
  }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d+)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]];
  var C = {
    hash: 1,
    query: 1
  };
  function D(a) {
    var b = (typeof window !== "undefined" ? window : typeof r !== "undefined" ? r : typeof self !== "undefined" ? self : {}).location || {};
    a = a || b;
    b = {};
    var d = typeof a, c;
    if (a.protocol === "blob:")
      b = new E(unescape(a.pathname), {});
    else if (d === "string")
      for (c in b = new E(a, {}), C) {
        delete b[c];
      }
    else if (d === "object") {
      for (c in a) {
        c in C || (b[c] = a[c]);
      }
      b.slashes === void 0 && (b.slashes = x.test(a.href));
    }
    return b;
  }
  function F(a) {
    a = A(a);
    a = y.exec(a);
    return {
      protocol: a[1] ? a[1].toLowerCase() : "",
      slashes: !!(a[2] && 2 <= a[2].length),
      rest: a[2] && a[2].length === 1 ? "/" + a[3] : a[3]
    };
  }
  function E(a, b, d) {
    a = A(a);
    if (!(this instanceof E))
      return new E(a, b, d);
    var c = B.slice();
    var e = typeof b;
    var k = 0;
    e !== "object" && e !== "string" && (d = b, b = null);
    d && typeof d !== "function" && (d = w.parse);
    b = D(b);
    var f = F(a || "");
    e = !f.protocol && !f.slashes;
    this.slashes = f.slashes || e && b.slashes;
    this.protocol = f.protocol || b.protocol || "";
    a = f.rest;
    for (f.slashes || (c[3] = [/(.*)/, "pathname"]); k < c.length; k++) {
      if (f = c[k], typeof f === "function")
        a = f(a);
      else {
        var h = f[0];
        var g = f[1];
        if (h !== h)
          this[g] = a;
        else if (typeof h === "string")
          ~(h = a.indexOf(h)) && (typeof f[2] === "number" ? (this[g] = a.slice(0, h), a = a.slice(h + f[2])) : (this[g] = a.slice(h), a = a.slice(0, h)));
        else if (h = h.exec(a))
          this[g] = h[1], a = a.slice(0, h.index);
        this[g] = this[g] || (e && f[3] ? b[g] || "" : "");
        f[4] && (this[g] = this[g].toLowerCase());
      }
    }
    d && (this.query = d(this.query));
    if (e && b.slashes && this.pathname.charAt(0) !== "/" && (this.pathname !== "" || b.pathname !== "")) {
      a = this.pathname;
      b = b.pathname;
      if (a !== "") {
        b = (b || "/").split("/").slice(0, -1).concat(a.split("/"));
        a = b.length;
        d = b[a - 1];
        c = false;
        for (k = 0; a--; ) {
          b[a] === "." ? b.splice(a, 1) : b[a] === ".." ? (b.splice(a, 1), k++) : k && (a === 0 && (c = true), b.splice(a, 1), k--);
        }
        c && b.unshift("");
        d !== "." && d !== ".." || b.push("");
        b = b.join("/");
      }
      this.pathname = b;
    }
    this.pathname.charAt(0) !== "/" && this.hostname && (this.pathname = "/" + this.pathname);
    t(this.port, this.protocol) || (this.host = this.hostname, this.port = "");
    this.username = this.password = "";
    this.auth && (f = this.auth.split(":"), this.username = f[0] || "", this.password = f[1] || "");
    this.origin = this.protocol && this.host && this.protocol !== "file:" ? this.protocol + "//" + this.host : "null";
    this.href = this.toString();
  }
  E.prototype = {
    set: function set(a, b, d) {
      switch (a) {
        case "query":
          typeof b === "string" && b.length && (b = (d || w.parse)(b));
          this[a] = b;
          break;
        case "port":
          this[a] = b;
          t(b, this.protocol) ? b && (this.host = this.hostname + ":" + b) : (this.host = this.hostname, this[a] = "");
          break;
        case "hostname":
          this[a] = b;
          this.port && (b += ":" + this.port);
          this.host = b;
          break;
        case "host":
          this[a] = b;
          /:\d+$/.test(b) ? (b = b.split(":"), this.port = b.pop(), this.hostname = b.join(":")) : (this.hostname = b, this.port = "");
          break;
        case "protocol":
          this.protocol = b.toLowerCase();
          this.slashes = !d;
          break;
        case "pathname":
        case "hash":
          b ? (d = a === "pathname" ? "/" : "#", this[a] = b.charAt(0) !== d ? d + b : b) : this[a] = b;
          break;
        default:
          this[a] = b;
      }
      for (a = 0; a < B.length; a++) {
        b = B[a], b[4] && (this[b[1]] = this[b[1]].toLowerCase());
      }
      this.origin = this.protocol && this.host && this.protocol !== "file:" ? this.protocol + "//" + this.host : "null";
      this.href = this.toString();
      return this;
    },
    toString: function toString(a) {
      a && typeof a === "function" || (a = w.stringify);
      var b = this.protocol;
      b && b.charAt(b.length - 1) !== ":" && (b += ":");
      b += this.slashes ? "//" : "";
      this.username && (b += this.username, this.password && (b += ":" + this.password), b += "@");
      b += this.host + this.pathname;
      (a = typeof this.query === "object" ? a(this.query) : this.query) && (b += a.charAt(0) !== "?" ? "?" + a : a);
      this.hash && (b += this.hash);
      return b;
    }
  };
  E.extractProtocol = F;
  E.location = D;
  E.trimLeft = A;
  E.qs = w;
  var G = E;
  var H = /^xn--/;
  var I = /[^\0-\x7E]/;
  var K = /[\x2E\u3002\uFF0E\uFF61]/g;
  var L = {
    overflow: "Overflow: input needs wider integers to process",
    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
    "invalid-input": "Invalid input"
  };
  var M = Math.floor;
  var N = String.fromCharCode;
  function O(a) {
    throw new RangeError(L[a]);
  }
  function P(a, b) {
    var d = a.split("@");
    var c = "";
    1 < d.length && (c = d[0] + "@", a = d[1]);
    a = a.replace(K, ".");
    {
      a = a.split(".");
      d = [];
      var _c = a.length;
      for (; _c--; ) {
        d[_c] = b(a[_c]);
      }
      b = d;
    }
    b = b.join(".");
    return c + b;
  }
  function Q(a) {
    var b = [], d = 0, c = a.length;
    for (; d < c; ) {
      var e = a.charCodeAt(d++);
      if (55296 <= e && 56319 >= e && d < c) {
        var _c2 = a.charCodeAt(d++);
        (_c2 & 64512) == 56320 ? b.push(((e & 1023) << 10) + (_c2 & 1023) + 65536) : (b.push(e), d--);
      } else
        b.push(e);
    }
    return b;
  }
  function R(a, b) {
    return a + 22 + 75 * (26 > a) - ((b != 0) << 5);
  }
  function S(a, b, d) {
    var c = 0;
    a = d ? M(a / 700) : a >> 1;
    for (a += M(a / b); 455 < a; c += 36) {
      a = M(a / 35);
    }
    return M(c + 36 * a / (a + 38));
  }
  function T(a) {
    var b = [], d = a.length;
    var c = 0, e = 128, k = 72;
    var f = a.lastIndexOf("-");
    0 > f && (f = 0);
    for (var h = 0; h < f; ++h) {
      128 <= a.charCodeAt(h) && O("not-basic"), b.push(a.charCodeAt(h));
    }
    for (f = 0 < f ? f + 1 : 0; f < d; ) {
      h = c;
      for (var _b = 1, _e = 36; ; _e += 36) {
        f >= d && O("invalid-input");
        var g = a.charCodeAt(f++);
        g = 10 > g - 48 ? g - 22 : 26 > g - 65 ? g - 65 : 26 > g - 97 ? g - 97 : 36;
        (36 <= g || g > M((2147483647 - c) / _b)) && O("overflow");
        c += g * _b;
        var _h = _e <= k ? 1 : _e >= k + 26 ? 26 : _e - k;
        if (g < _h)
          break;
        g = 36 - _h;
        _b > M(2147483647 / g) && O("overflow");
        _b *= g;
      }
      g = b.length + 1;
      k = S(c - h, g, h == 0);
      M(c / g) > 2147483647 - e && O("overflow");
      e += M(c / g);
      c %= g;
      b.splice(c++, 0, e);
    }
    return String.fromCodePoint.apply(String, b);
  }
  function U(a) {
    var b = [];
    a = Q(a);
    var d = a.length, c = 128, e = 0, k = 72;
    for (var _iterator = _createForOfIteratorHelperLoose(a), _step; !(_step = _iterator()).done; ) {
      var f = _step.value;
      128 > f && b.push(N(f));
    }
    var h = f = b.length;
    for (f && b.push("-"); h < d; ) {
      var g = 2147483647;
      for (var _iterator2 = _createForOfIteratorHelperLoose(a), _step2; !(_step2 = _iterator2()).done; ) {
        var _b2 = _step2.value;
        _b2 >= c && _b2 < g && (g = _b2);
      }
      var _d = h + 1;
      g - c > M((2147483647 - e) / _d) && O("overflow");
      e += (g - c) * _d;
      c = g;
      for (var _iterator3 = _createForOfIteratorHelperLoose(a), _step3; !(_step3 = _iterator3()).done; ) {
        var J = _step3.value;
        if (J < c && 2147483647 < ++e && O("overflow"), J == c) {
          var p = e;
          for (g = 36; ; g += 36) {
            var _a = g <= k ? 1 : g >= k + 26 ? 26 : g - k;
            if (p < _a)
              break;
            p -= _a;
            var _c3 = 36 - _a;
            b.push(N(R(_a + p % _c3, 0)));
            p = M(p / _c3);
          }
          b.push(N(R(p, 0)));
          k = S(e, _d, h == f);
          e = 0;
          ++h;
        }
      }
      ++e;
      ++c;
    }
    return b.join("");
  }
  var V = {
    version: "2.1.0",
    ucs2: {
      decode: Q,
      encode: function encode(a) {
        return String.fromCodePoint.apply(String, a);
      }
    },
    decode: T,
    encode: U,
    toASCII: function toASCII(a) {
      return P(a, function(a2) {
        return I.test(a2) ? "xn--" + U(a2) : a2;
      });
    },
    toUnicode: function toUnicode(a) {
      return P(a, function(a2) {
        return H.test(a2) ? T(a2.slice(4).toLowerCase()) : a2;
      });
    }
  };
  function aa(a) {
    a = new TextEncoder("utf-8").encode(a);
    return window.crypto.subtle.digest("SHA-256", a).then(function(a2) {
      var b = [];
      a2 = new DataView(a2);
      for (var c = 0; c < a2.byteLength; c += 4) {
        var d = ("00000000" + a2.getUint32(c).toString(16)).slice(-8);
        b.push(d);
      }
      return b = b.join("");
    });
  }
  var ba = /[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/;
  var ca = /[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]/;
  function W(a) {
    a = new G(a).hostname;
    if (X(a))
      var b = false;
    else
      b = V.toUnicode(a), b = 63 >= a.length && !(ba.test(b) && ca.test(b)) && a.indexOf(".") != -1;
    if (b) {
      b = V.toUnicode(a);
      b = b.split("-").join("--");
      b = b.split(".").join("-");
      b = V.toASCII(b).toLowerCase();
      if (63 < b.length)
        return Y(a);
      X(b) && (b = "0-".concat(b, "-0"));
      return Promise.resolve(b);
    }
    return Y(a);
  }
  function Y(a) {
    a = typeof window !== "undefined" ? aa(a) : void 0;
    return a.then(function(a2) {
      return da("ffffffffff" + a2 + "000000").substr(8, Math.ceil(4 * a2.length / 5));
    });
  }
  function da(a) {
    var b = [];
    a.match(/.{1,2}/g).forEach(function(a2, c2) {
      b[c2] = parseInt(a2, 16);
    });
    var d = b.length % 5, c = Math.floor(b.length / 5);
    a = [];
    if (d != 0) {
      for (var e = 0; e < 5 - d; e++) {
        b += "\0";
      }
      c += 1;
    }
    for (e = 0; e < c; e++) {
      a.push("abcdefghijklmnopqrstuvwxyz234567".charAt(b[5 * e] >> 3)), a.push("abcdefghijklmnopqrstuvwxyz234567".charAt((b[5 * e] & 7) << 2 | b[5 * e + 1] >> 6)), a.push("abcdefghijklmnopqrstuvwxyz234567".charAt((b[5 * e + 1] & 63) >> 1)), a.push("abcdefghijklmnopqrstuvwxyz234567".charAt((b[5 * e + 1] & 1) << 4 | b[5 * e + 2] >> 4)), a.push("abcdefghijklmnopqrstuvwxyz234567".charAt((b[5 * e + 2] & 15) << 1 | b[5 * e + 3] >> 7)), a.push("abcdefghijklmnopqrstuvwxyz234567".charAt((b[5 * e + 3] & 127) >> 2)), a.push("abcdefghijklmnopqrstuvwxyz234567".charAt((b[5 * e + 3] & 3) << 3 | b[5 * e + 4] >> 5)), a.push("abcdefghijklmnopqrstuvwxyz234567".charAt(b[5 * e + 4] & 31));
    }
    c = 0;
    d == 1 ? c = 6 : d == 2 ? c = 4 : d == 3 ? c = 3 : d == 4 && (c = 1);
    for (d = 0; d < c; d++) {
      a.pop();
    }
    for (d = 0; d < c; d++) {
      a.push("=");
    }
    return a.join("");
  }
  function X(a) {
    return a.slice(2, 4) == "--" && a.slice(0, 2) != "xn";
  }
  var ea = {
    CONTENT: "content",
    VIEWER: "viewer",
    WEB_PACKAGE: "web_package",
    CERTIFICATE: "certificate",
    IMAGE: "image"
  };
  function Z(a, b, d) {
    if (d === void 0) {
      d = null;
    }
    var c = new G(b), e = fa(c.pathname, d);
    e += c.protocol === "https:" ? "/s/" : "/";
    b.endsWith("/") || (c.pathname = c.pathname.replace(/\/$/, ""));
    return W(c.toString()).then(function(d2) {
      var f = new G(b);
      f.protocol = "https";
      d2 = d2 + "." + a;
      f.host = d2;
      f.hostname = d2;
      f.pathname = e + c.hostname + c.pathname;
      return f.toString();
    });
  }
  function fa(a, b) {
    if (b === void 0) {
      b = null;
    }
    return m.isPathNameAnImage(a) ? "/i" : q.isPathNameAFont(a) ? "/r" : b === ea.VIEWER ? "/v" : "/c";
  }

  // node_modules/@ampproject/viewer-messaging/messaging.js
  var TAG = "amp-viewer-messaging";
  var CHANNEL_OPEN_MSG = "channelOpen";
  var HANDSHAKE_POLL_MSG = "handshake-poll";
  var APP = "__AMPHTML__";
  var MessageType = {
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
      if (message.type === MessageType.REQUEST) {
        this.handleRequest_(message);
      } else if (message.type === MessageType.RESPONSE) {
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
        type: MessageType.REQUEST,
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
        type: MessageType.RESPONSE,
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
        type: MessageType.RESPONSE,
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

  // src/core/constants/visibility-state.js
  var VisibilityState_Enum = {
    PRERENDER: "prerender",
    VISIBLE: "visible",
    HIDDEN: "hidden",
    PAUSED: "paused",
    INACTIVE: "inactive"
  };

  // src/core/types/object/json.js
  function parseJson(json) {
    return JSON.parse(json);
  }

  // src/core/dom/index.js
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
  function resetStyles(element, properties) {
    for (var i = 0; i < properties.length; i++) {
      setStyle(element, properties[i], null);
    }
  }
  function isVar(property) {
    return property.startsWith("--");
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

  // src/core/types/function/index.js
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

  // src/utils/event-helper.js
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

  // src/amp-story-player/amp-story-player-viewport-observer.js
  var SCROLL_THROTTLE_MS = 500;
  var AmpStoryPlayerViewportObserver = /* @__PURE__ */ function() {
    function AmpStoryPlayerViewportObserver2(win, element, viewportCb) {
      this.win_ = win;
      this.element_ = element;
      this.cb_ = viewportCb;
      this.scrollHandler_ = null;
      this.initializeInObOrFallback_();
    }
    var _proto = AmpStoryPlayerViewportObserver2.prototype;
    _proto.initializeInObOrFallback_ = function initializeInObOrFallback_() {
      if (!this.win_.IntersectionObserver || this.win_ !== this.win_.parent) {
        this.createInObFallback_();
        return;
      }
      this.createInOb_();
    };
    _proto.createInOb_ = function createInOb_() {
      var _this = this;
      var inObCallback = function inObCallback2(entries) {
        entries.forEach(function(entry) {
          if (!entry.isIntersecting) {
            return;
          }
          _this.cb_();
          observer.unobserve(_this.element_);
        });
      };
      var observer = new this.win_.IntersectionObserver(inObCallback);
      observer.observe(this.element_);
    };
    _proto.createInObFallback_ = function createInObFallback_() {
      this.scrollHandler_ = throttle(this.win_, this.checkIfVisibleFallback_.bind(this), SCROLL_THROTTLE_MS);
      this.win_.addEventListener("scroll", this.scrollHandler_);
      this.checkIfVisibleFallback_(this.element_);
    };
    _proto.checkIfVisibleFallback_ = function checkIfVisibleFallback_() {
      var elTop = this.element_.getBoundingClientRect().top;
      var winInnerHeight = this.win_.innerHeight;
      if (winInnerHeight > elTop) {
        this.cb_();
        this.win_.removeEventListener("scroll", this.scrollHandler_);
      }
    };
    return AmpStoryPlayerViewportObserver2;
  }();

  // src/amp-story-player/page-scroller.js
  var PageScroller = /* @__PURE__ */ function() {
    function PageScroller2(win) {
      this.win_ = win;
      this.touchEventState_ = {
        startY: 0,
        lastDelta: 0,
        touchStartTimeMs: null,
        touchEndTimeMs: null,
        touchMoveTimeMs: null
      };
      this.scrollState_ = {
        startY: 0,
        isRunning: false,
        acceleration: 1,
        speedLimit: 0.3,
        startTimeMs: null,
        maxTimeBetweenSwipesMs: 250,
        moveTimeThresholdMs: 100,
        durationMs: null,
        meetsDeltaYThreshold: false,
        deltaYThresholdPx: 5,
        deltaY: null,
        offsetThresholdPx: 30,
        offsetPx: null,
        multiplier: 1
      };
    }
    var _proto = PageScroller2.prototype;
    _proto.onTouchStart = function onTouchStart(timeStamp, startY) {
      this.touchEventState_.startY = startY;
      this.touchEventState_.touchStartTimeMs = timeStamp;
      this.scrollState_.startY = this.win_.scrollY;
      if (this.scrollState_.isRunning && this.touchEventState_.touchEndTimeMs - this.touchEventState_.touchStartTimeMs < this.scrollState_.maxTimeBetweenSwipesMs) {
        this.scrollState_.multiplier += this.scrollState_.acceleration;
      } else {
        this.scrollState_.multiplier = 1;
      }
      this.scrollState_.isRunning = false;
    };
    _proto.onTouchMove = function onTouchMove(timeStamp, currentY) {
      this.scrollState_.acceleration = Math.abs(this.scrollState_.deltaY / (timeStamp - this.touchEventState_.touchMoveTimeMs));
      this.touchEventState_.touchMoveTimeMs = timeStamp;
      throttle(this.win_, this.thottledScroll_.bind(this, currentY), 50)();
    };
    _proto.thottledScroll_ = function thottledScroll_(currentY) {
      this.scrollState_.deltaY = currentY - this.touchEventState_.startY;
      this.scrollState_.meetsDeltaYThreshold = Math.abs(this.scrollState_.deltaY) > this.scrollState_.deltaYThresholdPx;
      if (!this.scrollState_.meetsDeltaYThreshold) {
        return;
      }
      this.win_.scrollBy(0, -this.scrollState_.deltaY);
    };
    _proto.onTouchEnd = function onTouchEnd(timeStamp) {
      var _this = this;
      this.touchEventState_.touchEndTimeMs = timeStamp;
      if (!this.scrollState_.meetsDeltaYThreshold) {
        return;
      }
      var timeFromLastTouchMove = this.touchEventState_.touchEndTimeMs - this.touchEventState_.touchMoveTimeMs;
      this.scrollState_.offsetPx = this.calculateOffset_();
      if (timeFromLastTouchMove < this.scrollState_.moveTimeThresholdMs && Math.abs(this.scrollState_.offsetPx) > this.scrollState_.offsetThresholdPx) {
        this.scrollState_.durationMs = this.win_.innerHeight * 1.2;
        this.scrollState_.isRunning = true;
        requestAnimationFrame(function(timestamp) {
          _this.scrollState_.startTimeMs = timestamp;
          _this.scrollState_.startY = _this.win_.scrollY;
          _this.scrollOnNextTick_(timestamp);
        });
      }
      this.scrollState_.multiplier = 1;
      this.touchEventState_.startY = 0;
      this.scrollState_.deltaY = 0;
    };
    _proto.calculateOffset_ = function calculateOffset_() {
      var maxOffset = this.win_.innerHeight * this.scrollState_.speedLimit;
      var offset = Math.pow(this.scrollState_.acceleration, 2) * this.win_.innerHeight;
      offset = Math.min(maxOffset, offset);
      offset *= this.scrollState_.deltaY > 0 ? -this.scrollState_.multiplier : this.scrollState_.multiplier;
      return offset;
    };
    _proto.scrollOnNextTick_ = function scrollOnNextTick_(timeStamp) {
      var runTime = timeStamp - this.scrollState_.startTimeMs;
      if (runTime > this.scrollState_.durationMs) {
        return;
      }
      var progress = this.easeOutQuartFn_(runTime / this.scrollState_.durationMs);
      var scrollDelta = progress * this.scrollState_.offsetPx;
      var scrollForThisTick = this.scrollState_.startY + scrollDelta;
      if (!this.scrollState_.isRunning) {
        cancelAnimationFrame(requestAnimationFrame(this.scrollOnNextTick_.bind(this)));
      } else {
        this.win_.scroll(0, scrollForThisTick);
        requestAnimationFrame(this.scrollOnNextTick_.bind(this));
      }
    };
    _proto.easeOutQuartFn_ = function easeOutQuartFn_(pTimeElapsed) {
      return 1 - --pTimeElapsed * pTimeElapsed * pTimeElapsed * pTimeElapsed;
    };
    return PageScroller2;
  }();

  // build/amp-story-player-shadow.css.js
  var cssText2 = ":host{all:initial;color:initial}.story-player-iframe{height:100%;width:100%;-ms-flex:0 0 100%;flex:0 0 100%;border:0;opacity:0;transition:opacity 500ms ease;position:absolute}.i-amphtml-story-player-main-container{height:100%;position:relative;overflow:hidden;transform-style:preserve-3d}.i-amphtml-story-player-loaded .story-player-iframe{opacity:1;transition:transform 200ms cubic-bezier(0.4,0,0.2,1)}.i-amphtml-story-player-no-navigation-transition .story-player-iframe{transition-duration:0.01s}.i-amphtml-story-player-main-container .story-player-iframe[i-amphtml-iframe-position=\"0\"],.i-amphtml-story-player-main-container iframe:first-of-type{transform:translateZ(1px)}.i-amphtml-story-player-main-container .story-player-iframe[i-amphtml-iframe-position=\"1\"],.i-amphtml-story-player-main-container iframe:nth-of-type(2),.i-amphtml-story-player-main-container iframe:nth-of-type(3){transform:translate3d(100%,0,0)}.i-amphtml-story-player-main-container .story-player-iframe[i-amphtml-iframe-position=\"-1\"]{transform:translate3d(-100%,0,0)}.amp-story-player-exit-control-button{position:absolute;height:48px;width:48px;background-repeat:no-repeat;background-position:50%;margin-top:7px;background-size:28px;border:0px;background-color:transparent;outline:transparent;cursor:pointer;z-index:1}.amp-story-player-close-button{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24' fill='%23FFF'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3C/svg%3E\")}.amp-story-player-back-button{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24' fill='%23FFF'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z'/%3E%3C/svg%3E\")}.amp-story-player-hide-button{display:none}.i-amphtml-story-player-panel{--i-amphtml-story-player-panel-ratio:69/116;--i-amphtml-story-player-panel-responsive-margin:max(74px,calc(var(--i-amphtml-story-player-height)*0.0825));--i-amphtml-story-player-panel-height:calc(var(--i-amphtml-story-player-height) - var(--i-amphtml-story-player-panel-responsive-margin)*2);--i-amphtml-story-player-panel-width:calc(var(--i-amphtml-story-player-panel-height)*var(--i-amphtml-story-player-panel-ratio));--i-amphtml-story-player-panel-button-margin:max(10px,calc(50vw - 145px - var(--i-amphtml-story-player-panel-width)/2))}.i-amphtml-story-player-panel.i-amphtml-story-player-panel-medium{--i-amphtml-story-player-panel-responsive-margin:0px;--i-amphtml-story-player-panel-width:calc(var(--i-amphtml-story-player-height)*var(--i-amphtml-story-player-panel-ratio))}.i-amphtml-story-player-panel.i-amphtml-story-player-panel-small{--i-amphtml-story-player-panel-ratio:36/53}.i-amphtml-story-player-panel-next,.i-amphtml-story-player-panel-prev{position:absolute;top:50%;transform:translateY(-50%);width:48px;height:48px;z-index:1;background-color:transparent;border:none;background-position:50%;background-repeat:no-repeat;cursor:pointer;transition:opacity 150ms}.i-amphtml-story-player-panel-next[disabled],.i-amphtml-story-player-panel-prev[disabled]{opacity:.1;cursor:initial}.i-amphtml-story-player-full-bleed-story .i-amphtml-story-player-panel-next,.i-amphtml-story-player-full-bleed-story .i-amphtml-story-player-panel-prev,:not(.i-amphtml-story-player-panel) .i-amphtml-story-player-panel-next,:not(.i-amphtml-story-player-panel) .i-amphtml-story-player-panel-prev{opacity:0;pointer-events:none}.i-amphtml-story-player-panel-prev{margin-inline-start:calc(var(--i-amphtml-story-player-panel-button-margin));background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.667 8 16 16V0L4.667 8zM0 16h2.667V0H0v16z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.667 8 16 16V0L4.667 8zM0 16h2.667V0H0v16z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-player-panel-next{margin-inline-end:var(--i-amphtml-story-player-panel-button-margin);background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.333 8 0 16V0l11.333 8zM16 16h-2.667V0H16v16z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.333 8 0 16V0l11.333 8zM16 16h-2.667V0H16v16z'/%3E%3C/svg%3E\")!important;right:0}[dir=rtl].i-amphtml-story-player-panel-prev{right:0}[dir=rtl].i-amphtml-story-player-panel-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.667 8 16 16V0L4.667 8zM0 16h2.667V0H0v16z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.667 8 16 16V0L4.667 8zM0 16h2.667V0H0v16z'/%3E%3C/svg%3E\")!important;left:0}\n/*# sourceURL=/css/amp-story-player-shadow.css*/";

  // src/core/3p-frame.js
  var getRequiredSandboxFlags = function getRequiredSandboxFlags2() {
    return [
      "allow-top-navigation-by-user-activation",
      "allow-popups-to-escape-sandbox"
    ];
  };
  var getOptionalSandboxFlags = function getOptionalSandboxFlags2() {
    return [
      "allow-forms",
      "allow-modals",
      "allow-pointer-lock",
      "allow-popups",
      "allow-same-origin",
      "allow-scripts"
    ];
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
      var v2 = params[k];
      if (v2 == null) {
        continue;
      }
      v2 = arrayOrSingleItemToArray(v2);
      for (var i = 0; i < v2.length; i++) {
        s.push(urlEncodeKeyValue(k, v2[i]));
      }
    }
    return s.join("&");
  }
  function removeFragment(url) {
    var index = url.indexOf("#");
    if (index == -1) {
      return url;
    }
    return url.substring(0, index);
  }
  function getFragment(url) {
    var index = url.indexOf("#");
    if (index == -1) {
      return "";
    }
    return url.substring(index);
  }
  function isProxyOrigin(url) {
    return urls.cdnProxyRegex.test(urlAsLocation(url).origin);
  }
  function removeSearch(url) {
    var index = url.indexOf("?");
    if (index == -1) {
      return url;
    }
    var fragment = getFragment(url);
    return url.substring(0, index) + fragment;
  }

  // src/3p-frame.js
  var TAG2 = "3p-frame";
  function applySandbox(iframe) {
    if (!iframe.sandbox || !iframe.sandbox.supports) {
      return;
    }
    var requiredFlags = getRequiredSandboxFlags();
    for (var i = 0; i < requiredFlags.length; i++) {
      var flag = requiredFlags[i];
      if (!iframe.sandbox.supports(flag)) {
        dev().info(TAG2, "Iframe doesn't support %s", flag);
        return;
      }
    }
    iframe.sandbox = requiredFlags.join(" ") + " " + getOptionalSandboxFlags().join(" ");
  }

  // src/amp-story-player/amp-story-player-impl.js
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
  var LOAD_STATE_CLASS_ENUM = {
    LOADING: "i-amphtml-story-player-loading",
    LOADED: "i-amphtml-story-player-loaded",
    ERROR: "i-amphtml-story-player-error"
  };
  var STORY_POSITION_ENUM = {
    PREVIOUS: -1,
    CURRENT: 0,
    NEXT: 1
  };
  var SUPPORTED_CACHES = ["cdn.ampproject.org", "www.bing-amp.com"];
  var SANDBOX_MIN_LIST = ["allow-top-navigation"];
  var SWIPING_STATE_ENUM = {
    NOT_SWIPING: 0,
    SWIPING_TO_LEFT: 1,
    SWIPING_TO_RIGHT: 2
  };
  var TOGGLE_THRESHOLD_PX = 50;
  var FETCH_STORIES_THRESHOLD = 2;
  var DEPRECATED_BUTTON_TYPES_ENUM = {
    BACK: "back-button",
    CLOSE: "close-button"
  };
  var DEPRECATED_BUTTON_CLASSES_ENUM = {
    BASE: "amp-story-player-exit-control-button",
    HIDDEN: "amp-story-player-hide-button",
    BACK: "amp-story-player-back-button",
    CLOSE: "amp-story-player-close-button"
  };
  var DEPRECATED_EVENT_NAMES_ENUM = {
    BACK: "amp-story-player-back",
    CLOSE: "amp-story-player-close"
  };
  var STORY_STATE_TYPE_ENUM = {
    PAGE_ATTACHMENT_STATE: "page-attachment"
  };
  var STORY_MESSAGE_STATE_TYPE_ENUM = {
    PAGE_ATTACHMENT_STATE: "PAGE_ATTACHMENT_STATE",
    UI_STATE: "UI_STATE",
    MUTED_STATE: "MUTED_STATE",
    CURRENT_PAGE_ID: "CURRENT_PAGE_ID",
    STORY_PROGRESS: "STORY_PROGRESS"
  };
  var AMP_STORY_PLAYER_EVENT = "AMP_STORY_PLAYER_EVENT";
  var CLASS_NO_NAVIGATION_TRANSITION = "i-amphtml-story-player-no-navigation-transition";
  var TAG3 = "amp-story-player";
  var LOG_TYPE_ENUM = {
    DEV: "amp-story-player-dev"
  };
  var PANEL_ASPECT_RATIO_THRESHOLD = 3 / 4;
  var AmpStoryPlayer = /* @__PURE__ */ function() {
    function AmpStoryPlayer2(win, element) {
      this.win_ = win;
      this.element_ = element;
      this.doc_ = win.document;
      this.cachedA_ = this.doc_.createElement("a");
      this.stories_ = [];
      this.rootEl_ = null;
      this.currentIdx_ = 0;
      this.swipingState_ = SWIPING_STATE_ENUM.NOT_SWIPING;
      this.playerConfig_ = null;
      this.isFetchingStoriesEnabled_ = null;
      this.isCircularWrappingEnabled_ = null;
      this.touchEventState_ = {
        startX: 0,
        startY: 0,
        lastX: 0,
        isSwipeX: null
      };
      this.currentStoryLoadDeferred_ = null;
      this.visibleDeferred_ = new Deferred();
      this.attachCallbacksToElement_();
      this.pageScroller_ = new PageScroller(win);
      this.playing_ = true;
      this.attribution_ = null;
      this.prevButton_ = null;
      this.nextButton_ = null;
      return this.element_;
    }
    var _proto = AmpStoryPlayer2.prototype;
    _proto.attachCallbacksToElement_ = function attachCallbacksToElement_() {
      this.element_.buildPlayer = this.buildPlayer.bind(this);
      this.element_.layoutPlayer = this.layoutPlayer.bind(this);
      this.element_.getElement = this.getElement.bind(this);
      this.element_.getStories = this.getStories.bind(this);
      this.element_.load = this.load.bind(this);
      this.element_.show = this.show.bind(this);
      this.element_.add = this.add.bind(this);
      this.element_.play = this.play.bind(this);
      this.element_.pause = this.pause.bind(this);
      this.element_.go = this.go.bind(this);
      this.element_.mute = this.mute.bind(this);
      this.element_.unmute = this.unmute.bind(this);
      this.element_.getStoryState = this.getStoryState.bind(this);
      this.element_.rewind = this.rewind.bind(this);
    };
    _proto.load = function load() {
      if (!this.element_.isConnected) {
        throw new Error("[" + TAG3 + "] element must be connected to the DOM before calling load().");
      }
      if (!!this.element_.isBuilt_) {
        throw new Error("[" + TAG3 + "] calling load() on an already loaded element.");
      }
      this.buildPlayer();
      this.layoutPlayer();
    };
    _proto.initializeAndAddStory_ = function initializeAndAddStory_(story) {
      story.idx = this.stories_.length;
      story.distance = story.idx - this.currentIdx_;
      story.connectedDeferred = new Deferred();
      this.stories_.push(story);
    };
    _proto.add = function add(newStories) {
      if (newStories.length <= 0) {
        return;
      }
      var isStoryDef = function isStoryDef2(story2) {
        return story2 && story2.href;
      };
      if (!Array.isArray(newStories) || !newStories.every(isStoryDef)) {
        throw new Error('"stories" parameter has the wrong structure');
      }
      var renderStartingIdx = this.stories_.length;
      for (var i = 0; i < newStories.length; i++) {
        var story = newStories[i];
        this.initializeAndAddStory_(story);
        this.buildIframeFor_(story);
      }
      this.render_(renderStartingIdx);
    };
    _proto.play = function play() {
      if (!this.element_.isLaidOut_) {
        this.layoutPlayer();
      }
      this.togglePaused_(false);
    };
    _proto.pause = function pause() {
      this.togglePaused_(true);
    };
    _proto.togglePaused_ = function togglePaused_(paused) {
      this.playing_ = !paused;
      var currentStory = this.stories_[this.currentIdx_];
      this.updateVisibilityState_(currentStory, paused ? VisibilityState_Enum.PAUSED : VisibilityState_Enum.VISIBLE);
    };
    _proto.getElement = function getElement() {
      return this.element_;
    };
    _proto.getStories = function getStories() {
      return this.stories_;
    };
    _proto.buildPlayer = function buildPlayer() {
      if (!!this.element_.isBuilt_) {
        return;
      }
      this.initializeAnchorElStories_();
      this.initializeShadowRoot_();
      this.buildStories_();
      this.initializeButton_();
      this.readPlayerConfig_();
      this.maybeFetchMoreStories_(this.stories_.length - this.currentIdx_ - 1);
      this.initializeAutoplay_();
      this.initializeAttribution_();
      this.initializePageScroll_();
      this.initializeCircularWrapping_();
      this.initializeDesktopStoryControlUI_();
      this.signalReady_();
      this.element_.isBuilt_ = true;
    };
    _proto.initializeAnchorElStories_ = function initializeAnchorElStories_() {
      var _this = this;
      var anchorEls = toArray(this.element_.querySelectorAll("a"));
      anchorEls.forEach(function(element) {
        var posterImgEl = element.querySelector("img[data-amp-story-player-poster-img]");
        var posterImgSrc = posterImgEl && posterImgEl.getAttribute("src");
        var story = {
          href: element.href,
          title: element.textContent && element.textContent.trim() || null,
          posterImage: element.getAttribute("data-poster-portrait-src") || posterImgSrc
        };
        _this.initializeAndAddStory_(story);
      });
    };
    _proto.signalReady_ = function signalReady_() {
      this.element_.dispatchEvent(createCustomEvent(this.win_, "ready", dict({})));
      this.element_.isReady = true;
    };
    _proto.buildStories_ = function buildStories_() {
      var _this2 = this;
      this.stories_.forEach(function(story) {
        _this2.buildIframeFor_(story);
      });
    };
    _proto.initializeShadowRoot_ = function initializeShadowRoot_() {
      this.rootEl_ = this.doc_.createElement("div");
      this.rootEl_.classList.add("i-amphtml-story-player-main-container");
      var shadowContainer = this.doc_.createElement("div");
      shadowContainer.classList.add("i-amphtml-fill-content", "i-amphtml-story-player-shadow-root-intermediary");
      this.element_.appendChild(shadowContainer);
      var containerToUse = getMode().test || !this.element_.attachShadow ? shadowContainer : shadowContainer.attachShadow({
        mode: "open"
      });
      var styleEl = this.doc_.createElement("style");
      styleEl.textContent = cssText2;
      containerToUse.appendChild(styleEl);
      containerToUse.insertBefore(this.rootEl_, containerToUse.firstElementChild);
    };
    _proto.initializeButton_ = function initializeButton_() {
      var _this3 = this;
      var option = this.element_.getAttribute("exit-control");
      if (!isEnumValue(DEPRECATED_BUTTON_TYPES_ENUM, option)) {
        return;
      }
      var button = this.doc_.createElement("button");
      this.rootEl_.appendChild(button);
      var isBack = option === DEPRECATED_BUTTON_TYPES_ENUM.BACK;
      button.classList.add(isBack ? DEPRECATED_BUTTON_CLASSES_ENUM.BACK : DEPRECATED_BUTTON_CLASSES_ENUM.CLOSE);
      button.classList.add(DEPRECATED_BUTTON_CLASSES_ENUM.BASE);
      button.addEventListener("click", function() {
        _this3.element_.dispatchEvent(createCustomEvent(_this3.win_, isBack ? DEPRECATED_EVENT_NAMES_ENUM.BACK : DEPRECATED_EVENT_NAMES_ENUM.CLOSE, dict({})));
      });
    };
    _proto.readPlayerConfig_ = function readPlayerConfig_() {
      if (this.playerConfig_) {
        return this.playerConfig_;
      }
      var ampCache = this.element_.getAttribute("amp-cache");
      if (ampCache && !SUPPORTED_CACHES.includes(ampCache)) {
        console.error("[" + TAG3 + "]", "Unsupported cache specified, use one of following: " + SUPPORTED_CACHES);
      }
      var scriptTag = this.element_.querySelector("script");
      if (!scriptTag) {
        return null;
      }
      if (!isJsonScriptTag(scriptTag)) {
        throw new Error('<script> child must have type="application/json"');
      }
      try {
        this.playerConfig_ = parseJson(scriptTag.textContent);
      } catch (reason) {
        console.error("[" + TAG3 + "] ", reason);
      }
      return this.playerConfig_;
    };
    _proto.buildIframeFor_ = function buildIframeFor_(story) {
      var iframeEl = this.doc_.createElement("iframe");
      if (story.posterImage) {
        setStyle(iframeEl, "backgroundImage", story.posterImage);
      }
      iframeEl.classList.add("story-player-iframe");
      iframeEl.setAttribute("allow", "autoplay");
      applySandbox(iframeEl);
      this.addSandboxFlags_(iframeEl);
      this.initializeLoadingListeners_(iframeEl);
      story.iframe = iframeEl;
    };
    _proto.addSandboxFlags_ = function addSandboxFlags_(iframe) {
      if (!iframe.sandbox || !iframe.sandbox.supports || iframe.sandbox.length <= 0) {
        return;
      }
      for (var i = 0; i < SANDBOX_MIN_LIST.length; i++) {
        var flag = SANDBOX_MIN_LIST[i];
        if (!iframe.sandbox.supports(flag)) {
          throw new Error("Iframe doesn't support: " + flag);
        }
        iframe.sandbox.add(flag);
      }
    };
    _proto.setUpMessagingForStory_ = function setUpMessagingForStory_(story) {
      var _this4 = this;
      var iframe = story.iframe;
      story.messagingPromise = new Promise(function(resolve) {
        _this4.initializeHandshake_(story, iframe).then(function(messaging) {
          messaging.setDefaultHandler(function() {
            return resolvedPromise();
          });
          messaging.registerHandler("touchstart", function(event, data) {
            _this4.onTouchStart_(data);
          });
          messaging.registerHandler("touchmove", function(event, data) {
            _this4.onTouchMove_(data);
          });
          messaging.registerHandler("touchend", function(event, data) {
            _this4.onTouchEnd_(data);
          });
          messaging.registerHandler("selectDocument", function(event, data) {
            _this4.onSelectDocument_(data);
          });
          messaging.sendRequest("onDocumentState", dict({
            "state": STORY_MESSAGE_STATE_TYPE_ENUM.PAGE_ATTACHMENT_STATE
          }), false);
          messaging.sendRequest("onDocumentState", dict({
            "state": STORY_MESSAGE_STATE_TYPE_ENUM.CURRENT_PAGE_ID
          }), false);
          messaging.sendRequest("onDocumentState", dict({
            "state": STORY_MESSAGE_STATE_TYPE_ENUM.MUTED_STATE
          }));
          messaging.sendRequest("onDocumentState", dict({
            "state": STORY_MESSAGE_STATE_TYPE_ENUM.UI_STATE
          }));
          messaging.registerHandler("documentStateUpdate", function(event, data) {
            _this4.onDocumentStateUpdate_(data, messaging);
          });
          if (_this4.playerConfig_ && _this4.playerConfig_.controls) {
            _this4.updateControlsStateForAllStories_(story.idx);
            messaging.sendRequest("customDocumentUI", dict({
              "controls": _this4.playerConfig_.controls
            }), false);
          }
          resolve(messaging);
        }, function(err) {
          console.error("[" + TAG3 + "]", err);
        });
      });
    };
    _proto.updateControlsStateForAllStories_ = function updateControlsStateForAllStories_(storyIdx) {
      if (storyIdx === this.stories_.length - 1) {
        var skipButtonIdx = findIndex(this.playerConfig_.controls, function(control) {
          return control.name === "skip-next" || control.name === "skip-to-next";
        });
        if (skipButtonIdx >= 0) {
          this.playerConfig_.controls[skipButtonIdx].state = "disabled";
        }
      }
    };
    _proto.initializeHandshake_ = function initializeHandshake_(story, iframeEl) {
      var _this5 = this;
      return this.maybeGetCacheUrl_(story.href).then(function(url) {
        return Messaging.waitForHandshakeFromDocument(_this5.win_, iframeEl.contentWindow, _this5.getEncodedLocation_(url).origin, null, urls.cdnProxyRegex);
      });
    };
    _proto.initializeLoadingListeners_ = function initializeLoadingListeners_(iframeEl) {
      var _this6 = this;
      this.rootEl_.classList.add(LOAD_STATE_CLASS_ENUM.LOADING);
      iframeEl.onload = function() {
        _this6.rootEl_.classList.remove(LOAD_STATE_CLASS_ENUM.LOADING);
        _this6.rootEl_.classList.add(LOAD_STATE_CLASS_ENUM.LOADED);
        _this6.element_.classList.add(LOAD_STATE_CLASS_ENUM.LOADED);
      };
      iframeEl.onerror = function() {
        _this6.rootEl_.classList.remove(LOAD_STATE_CLASS_ENUM.LOADING);
        _this6.rootEl_.classList.add(LOAD_STATE_CLASS_ENUM.ERROR);
        _this6.element_.classList.add(LOAD_STATE_CLASS_ENUM.ERROR);
      };
    };
    _proto.layoutPlayer = function layoutPlayer() {
      var _this7 = this;
      if (!!this.element_.isLaidOut_) {
        return;
      }
      new AmpStoryPlayerViewportObserver(this.win_, this.element_, function() {
        return _this7.visibleDeferred_.resolve();
      });
      if (this.win_.ResizeObserver) {
        new this.win_.ResizeObserver(function(e) {
          var _e$0$contentRect = e[0].contentRect, height2 = _e$0$contentRect.height, width2 = _e$0$contentRect.width;
          _this7.onPlayerResize_(height2, width2);
        }).observe(this.element_);
      } else {
        var _this$element_$getBou = this.element_.getBoundingClientRect(), height = _this$element_$getBou.height, width = _this$element_$getBou.width;
        this.onPlayerResize_(height, width);
      }
      this.render_();
      this.element_.isLaidOut_ = true;
    };
    _proto.initializeDesktopStoryControlUI_ = function initializeDesktopStoryControlUI_() {
      var _this8 = this;
      this.prevButton_ = this.doc_.createElement("button");
      this.prevButton_.classList.add("i-amphtml-story-player-panel-prev");
      this.prevButton_.addEventListener("click", function() {
        return _this8.previous_();
      });
      this.prevButton_.setAttribute("aria-label", "previous story");
      this.rootEl_.appendChild(this.prevButton_);
      this.nextButton_ = this.doc_.createElement("button");
      this.nextButton_.classList.add("i-amphtml-story-player-panel-next");
      this.nextButton_.addEventListener("click", function() {
        return _this8.next_();
      });
      this.nextButton_.setAttribute("aria-label", "next story");
      this.rootEl_.appendChild(this.nextButton_);
      this.checkButtonsDisabled_();
    };
    _proto.checkButtonsDisabled_ = function checkButtonsDisabled_() {
      this.prevButton_.toggleAttribute("disabled", this.isIndexOutofBounds_(this.currentIdx_ - 1) && !this.isCircularWrappingEnabled_);
      this.nextButton_.toggleAttribute("disabled", this.isIndexOutofBounds_(this.currentIdx_ + 1) && !this.isCircularWrappingEnabled_);
    };
    _proto.onPlayerResize_ = function onPlayerResize_(height, width) {
      var isPanel = width / height > PANEL_ASPECT_RATIO_THRESHOLD;
      this.rootEl_.classList.toggle("i-amphtml-story-player-panel", isPanel);
      if (isPanel) {
        setStyles(this.rootEl_, {
          "--i-amphtml-story-player-height": height + "px"
        });
        this.rootEl_.classList.toggle("i-amphtml-story-player-panel-medium", height < 756);
        this.rootEl_.classList.toggle("i-amphtml-story-player-panel-small", height < 538);
      }
    };
    _proto.fetchStories_ = function fetchStories_() {
      var endpoint = this.playerConfig_.behavior.endpoint;
      if (!endpoint) {
        this.isFetchingStoriesEnabled_ = false;
        return resolvedPromise();
      }
      var init = {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      };
      endpoint = endpoint.replace(/\${offset}/, this.stories_.length.toString());
      return fetch(endpoint, init).then(function(response) {
        return response.json();
      }).catch(function(reason) {
        console.error("[" + TAG3 + "]", reason);
      });
    };
    _proto.initStoryContentLoadedPromise_ = function initStoryContentLoadedPromise_(story) {
      var _this9 = this;
      this.currentStoryLoadDeferred_ = new Deferred();
      story.messagingPromise.then(function(messaging) {
        return messaging.registerHandler("storyContentLoaded", function() {
          story.storyContentLoaded = true;
          _this9.currentStoryLoadDeferred_.resolve();
        });
      });
    };
    _proto.show = function show(storyUrl, pageId, options) {
      var _this10 = this;
      if (pageId === void 0) {
        pageId = null;
      }
      if (options === void 0) {
        options = {};
      }
      var story = this.getStoryFromUrl_(storyUrl);
      var renderPromise = resolvedPromise();
      if (story.idx !== this.currentIdx_) {
        this.currentIdx_ = story.idx;
        renderPromise = this.render_();
        if (options.animate === false) {
          this.rootEl_.classList.toggle(CLASS_NO_NAVIGATION_TRANSITION, true);
          listenOnce(story.iframe, "transitionend", function() {
            _this10.rootEl_.classList.remove(CLASS_NO_NAVIGATION_TRANSITION);
          });
        }
        this.onNavigation_();
      }
      if (pageId != null) {
        return renderPromise.then(function() {
          return _this10.goToPageId_(pageId);
        });
      }
      return renderPromise;
    };
    _proto.mute = function mute() {
      var story = this.stories_[this.currentIdx_];
      this.updateMutedState_(story, true);
    };
    _proto.unmute = function unmute() {
      var story = this.stories_[this.currentIdx_];
      this.updateMutedState_(story, false);
    };
    _proto.getStoryState = function getStoryState(storyStateType) {
      switch (storyStateType) {
        case STORY_STATE_TYPE_ENUM.PAGE_ATTACHMENT_STATE:
          this.getPageAttachmentState_();
          break;
        default:
          break;
      }
    };
    _proto.signalNavigation_ = function signalNavigation_(data) {
      var event = createCustomEvent(this.win_, "navigation", data);
      this.element_.dispatchEvent(event);
    };
    _proto.onNavigation_ = function onNavigation_() {
      var _this11 = this;
      var index = this.currentIdx_;
      var remaining = this.stories_.length - this.currentIdx_ - 1;
      var navigation = {
        "index": index,
        "remaining": remaining
      };
      this.checkButtonsDisabled_();
      this.getUiState_().then(function(uiTypeNumber) {
        return _this11.onUiStateUpdate_(uiTypeNumber);
      });
      this.signalNavigation_(navigation);
      this.maybeFetchMoreStories_(remaining);
    };
    _proto.getUiState_ = function getUiState_() {
      var story = this.stories_[this.currentIdx_];
      return new Promise(function(resolve) {
        story.messagingPromise.then(function(messaging) {
          messaging.sendRequest("getDocumentState", {
            state: STORY_MESSAGE_STATE_TYPE_ENUM.UI_STATE
          }, true).then(function(event) {
            return resolve(event.value);
          });
        });
      });
    };
    _proto.onUiStateUpdate_ = function onUiStateUpdate_(uiTypeNumber) {
      var isFullbleed = uiTypeNumber === 2 || uiTypeNumber === 0;
      this.rootEl_.classList.toggle("i-amphtml-story-player-full-bleed-story", isFullbleed);
    };
    _proto.maybeFetchMoreStories_ = function maybeFetchMoreStories_(remaining) {
      var _this12 = this;
      if (this.playerConfig_ && this.playerConfig_.behavior && this.shouldFetchMoreStories_() && remaining <= FETCH_STORIES_THRESHOLD) {
        this.fetchStories_().then(function(stories) {
          if (!stories) {
            return;
          }
          _this12.add(stories);
        }).catch(function(reason) {
          console.error("[" + TAG3 + "]", reason);
        });
      }
    };
    _proto.validateBehaviorDef_ = function validateBehaviorDef_(behavior) {
      return behavior && behavior.on && behavior.action;
    };
    _proto.shouldFetchMoreStories_ = function shouldFetchMoreStories_() {
      if (this.isFetchingStoriesEnabled_ !== null) {
        return this.isFetchingStoriesEnabled_;
      }
      var behavior = this.playerConfig_.behavior;
      var hasEndFetchBehavior = function hasEndFetchBehavior2(behavior2) {
        return behavior2.on === "end" && behavior2.action === "fetch" && behavior2.endpoint;
      };
      this.isFetchingStoriesEnabled_ = this.validateBehaviorDef_(behavior) && hasEndFetchBehavior(behavior);
      return this.isFetchingStoriesEnabled_;
    };
    _proto.next_ = function next_() {
      if (!this.isCircularWrappingEnabled_ && this.isIndexOutofBounds_(this.currentIdx_ + 1)) {
        return;
      }
      if (this.isCircularWrappingEnabled_ && this.isIndexOutofBounds_(this.currentIdx_ + 1)) {
        this.go(1);
        return;
      }
      this.currentIdx_++;
      this.render_();
      this.onNavigation_();
    };
    _proto.previous_ = function previous_() {
      if (!this.isCircularWrappingEnabled_ && this.isIndexOutofBounds_(this.currentIdx_ - 1)) {
        return;
      }
      if (this.isCircularWrappingEnabled_ && this.isIndexOutofBounds_(this.currentIdx_ - 1)) {
        this.go(-1);
        return;
      }
      this.currentIdx_--;
      this.render_();
      this.onNavigation_();
    };
    _proto.go = function go(storyDelta, pageDelta, options) {
      var _this13 = this;
      if (pageDelta === void 0) {
        pageDelta = 0;
      }
      if (options === void 0) {
        options = {};
      }
      if (storyDelta === 0 && pageDelta === 0) {
        return;
      }
      if (!this.isCircularWrappingEnabled_ && this.isIndexOutofBounds_(this.currentIdx_ + storyDelta)) {
        throw new Error("Out of Story range.");
      }
      var newStoryIdx = this.currentIdx_ + storyDelta;
      var newStory = storyDelta > 0 ? this.stories_[newStoryIdx % this.stories_.length] : this.stories_[(newStoryIdx % this.stories_.length + this.stories_.length) % this.stories_.length];
      var showPromise = resolvedPromise();
      if (this.currentIdx_ !== newStory.idx) {
        showPromise = this.show(newStory.href, null, options);
      }
      showPromise.then(function() {
        _this13.selectPage_(pageDelta);
      });
    };
    _proto.updatePosition_ = function updatePosition_(story) {
      var position = story.distance === 0 ? STORY_POSITION_ENUM.CURRENT : story.idx > this.currentIdx_ ? STORY_POSITION_ENUM.NEXT : STORY_POSITION_ENUM.PREVIOUS;
      requestAnimationFrame(function() {
        var iframe = story.iframe;
        resetStyles(iframe, ["transform", "transition"]);
        iframe.setAttribute("i-amphtml-iframe-position", position);
      });
    };
    _proto.currentStoryPromise_ = function currentStoryPromise_(story) {
      if (this.stories_[this.currentIdx_].storyContentLoaded) {
        return resolvedPromise();
      }
      if (story.distance !== 0) {
        return this.currentStoryLoadDeferred_.promise;
      }
      if (this.currentStoryLoadDeferred_) {
        this.currentStoryLoadDeferred_.reject("[" + LOG_TYPE_ENUM.DEV + "] Cancelling previous story load promise.");
      }
      this.initStoryContentLoadedPromise_(story);
      return resolvedPromise();
    };
    _proto.render_ = function render_(startingIdx) {
      var _this14 = this;
      if (startingIdx === void 0) {
        startingIdx = this.currentIdx_;
      }
      var renderPromises = [];
      var _loop = function _loop2(i2) {
        var story = _this14.stories_[(i2 + startingIdx) % _this14.stories_.length];
        var oldDistance = story.distance;
        story.distance = Math.abs(_this14.currentIdx_ - story.idx);
        if (oldDistance <= 1 && story.distance > 1) {
          _this14.removeFromDom_(story);
        }
        if (story.distance <= 1 && !story.iframe.isConnected) {
          _this14.appendToDom_(story);
        }
        if (story.distance > 1) {
          return "continue";
        }
        renderPromises.push(_this14.currentStoryPromise_(story).then(function() {
          return _this14.maybeGetCacheUrl_(story.href);
        }).then(function(storyUrl) {
          if (!_this14.sanitizedUrlsAreEquals_(storyUrl, story.iframe.src)) {
            _this14.setSrc_(story, storyUrl);
          }
        }).then(function() {
          return _this14.visibleDeferred_.promise;
        }).then(function() {
          if (story.distance === 0 && _this14.playing_) {
            _this14.updateVisibilityState_(story, VisibilityState_Enum.VISIBLE);
          }
          if (oldDistance === 0 && story.distance === 1) {
            _this14.updateVisibilityState_(story, VisibilityState_Enum.INACTIVE);
          }
        }).then(function() {
          _this14.updatePosition_(story);
          if (story.distance === 0) {
            tryFocus(story.iframe);
          }
        }).catch(function(err) {
          if (err.includes(LOG_TYPE_ENUM.DEV)) {
            return;
          }
          console.error("[" + TAG3 + "]", err);
        }));
      };
      for (var i = 0; i < this.stories_.length; i++) {
        var _ret = _loop(i);
        if (_ret === "continue")
          continue;
      }
      return Promise.all(renderPromises);
    };
    _proto.appendToDom_ = function appendToDom_(story) {
      this.rootEl_.appendChild(story.iframe);
      this.setUpMessagingForStory_(story);
      story.connectedDeferred.resolve();
    };
    _proto.removeFromDom_ = function removeFromDom_(story) {
      story.storyContentLoaded = false;
      story.connectedDeferred = new Deferred();
      story.iframe.setAttribute("src", "");
      story.iframe.remove();
    };
    _proto.setSrc_ = function setSrc_(story, url) {
      var iframe = story.iframe;
      var _this$getEncodedLocat = this.getEncodedLocation_(url, VisibilityState_Enum.PRERENDER), href = _this$getEncodedLocat.href;
      iframe.setAttribute("src", href);
      if (story.title) {
        iframe.setAttribute("title", story.title);
      }
    };
    _proto.sanitizedUrlsAreEquals_ = function sanitizedUrlsAreEquals_(storyHref, iframeHref) {
      if (iframeHref.length <= 0) {
        return false;
      }
      var sanitizedIframeHref = removeFragment(removeSearch(iframeHref));
      var sanitizedStoryHref = removeFragment(removeSearch(storyHref));
      return sanitizedIframeHref === sanitizedStoryHref;
    };
    _proto.maybeGetCacheUrl_ = function maybeGetCacheUrl_(url) {
      var ampCache = this.element_.getAttribute("amp-cache");
      if (!ampCache || !SUPPORTED_CACHES.includes(ampCache)) {
        return Promise.resolve(url);
      }
      if (isProxyOrigin(url)) {
        var location = parseUrlDeprecated(url);
        if (location.pathname.startsWith("/c/")) {
          location.pathname = "/v/" + location.pathname.substr(3);
        }
        return Promise.resolve(location.toString());
      }
      return Z(ampCache, url, "viewer").then(function(cacheUrl) {
        return cacheUrl;
      });
    };
    _proto.getEncodedLocation_ = function getEncodedLocation_(href, visibilityState) {
      if (visibilityState === void 0) {
        visibilityState = VisibilityState_Enum.INACTIVE;
      }
      var playerFragmentParams = {
        "visibilityState": visibilityState,
        "origin": this.win_.origin,
        "showStoryUrlInfo": "0",
        "storyPlayer": "v0",
        "cap": "swipe"
      };
      if (this.attribution_ === "auto") {
        playerFragmentParams["attribution"] = "auto";
      }
      var originalFragmentString = getFragment(href);
      var originalFragments = parseQueryString(originalFragmentString);
      var fragmentParams = _extends({}, originalFragments, playerFragmentParams);
      var noFragmentUrl = removeFragment(href);
      if (isProxyOrigin(href)) {
        var ampJsQueryParam = dict({
          "amp_js_v": "0.1"
        });
        noFragmentUrl = addParamsToUrl(noFragmentUrl, ampJsQueryParam);
      }
      var inputUrl = noFragmentUrl + "#" + serializeQueryString(fragmentParams);
      return parseUrlWithA(this.cachedA_, inputUrl);
    };
    _proto.updateVisibilityState_ = function updateVisibilityState_(story, visibilityState) {
      story.messagingPromise.then(function(messaging) {
        return messaging.sendRequest("visibilitychange", {
          state: visibilityState
        }, true);
      });
    };
    _proto.updateStoryState_ = function updateStoryState_(story, state, value) {
      story.messagingPromise.then(function(messaging) {
        messaging.sendRequest("setDocumentState", {
          state: state,
          value: value
        });
      });
    };
    _proto.updateMutedState_ = function updateMutedState_(story, mutedValue) {
      this.updateStoryState_(story, STORY_MESSAGE_STATE_TYPE_ENUM.MUTED_STATE, mutedValue);
    };
    _proto.getPageAttachmentState_ = function getPageAttachmentState_() {
      var _this15 = this;
      var story = this.stories_[this.currentIdx_];
      story.messagingPromise.then(function(messaging) {
        messaging.sendRequest("getDocumentState", {
          state: STORY_MESSAGE_STATE_TYPE_ENUM.PAGE_ATTACHMENT_STATE
        }, true).then(function(event) {
          return _this15.dispatchPageAttachmentEvent_(event.value);
        });
      });
    };
    _proto.goToPageId_ = function goToPageId_(pageId) {
      var story = this.stories_[this.currentIdx_];
      story.messagingPromise.then(function(messaging) {
        return messaging.sendRequest("selectPage", {
          "id": pageId
        });
      });
    };
    _proto.getStoryFromUrl_ = function getStoryFromUrl_(storyUrl) {
      var storyIdx = storyUrl ? findIndex(this.stories_, function(_ref) {
        var href = _ref.href;
        return href === storyUrl;
      }) : this.currentIdx_;
      if (!this.stories_[storyIdx]) {
        throw new Error("Story URL not found in the player: " + storyUrl);
      }
      return this.stories_[storyIdx];
    };
    _proto.rewind = function rewind(storyUrl) {
      var story = this.getStoryFromUrl_(storyUrl);
      this.whenConnected_(story).then(function() {
        return story.messagingPromise;
      }).then(function(messaging) {
        return messaging.sendRequest("rewind", {});
      });
    };
    _proto.whenConnected_ = function whenConnected_(story) {
      if (story.iframe.isConnected) {
        return resolvedPromise();
      }
      return story.connectedDeferred.promise;
    };
    _proto.selectPage_ = function selectPage_(delta) {
      if (delta === 0) {
        return;
      }
      this.sendSelectPageDelta_(delta);
    };
    _proto.sendSelectPageDelta_ = function sendSelectPageDelta_(delta) {
      var story = this.stories_[this.currentIdx_];
      story.messagingPromise.then(function(messaging) {
        return messaging.sendRequest("selectPage", {
          delta: delta
        });
      });
    };
    _proto.onDocumentStateUpdate_ = function onDocumentStateUpdate_(data, messaging) {
      switch (data.state) {
        case STORY_MESSAGE_STATE_TYPE_ENUM.PAGE_ATTACHMENT_STATE:
          this.onPageAttachmentStateUpdate_(data.value);
          break;
        case STORY_MESSAGE_STATE_TYPE_ENUM.CURRENT_PAGE_ID:
          this.onCurrentPageIdUpdate_(data.value, messaging);
          break;
        case STORY_MESSAGE_STATE_TYPE_ENUM.MUTED_STATE:
          this.onMutedStateUpdate_(data.value);
          break;
        case STORY_MESSAGE_STATE_TYPE_ENUM.UI_STATE:
          this.onUiStateUpdate_(data.value);
          break;
        case AMP_STORY_PLAYER_EVENT:
          this.onPlayerEvent_(data.value);
          break;
        default:
          break;
      }
    };
    _proto.onPlayerEvent_ = function onPlayerEvent_(value) {
      switch (value) {
        case "amp-story-player-skip-next":
        case "amp-story-player-skip-to-next":
          this.next_();
          break;
        default:
          this.element_.dispatchEvent(createCustomEvent(this.win_, value, dict({})));
          break;
      }
    };
    _proto.onMutedStateUpdate_ = function onMutedStateUpdate_(muted) {
      this.element_.dispatchEvent(createCustomEvent(this.win_, "amp-story-muted-state", {
        muted: muted
      }));
    };
    _proto.onCurrentPageIdUpdate_ = function onCurrentPageIdUpdate_(pageId, messaging) {
      var _this16 = this;
      messaging.sendRequest("getDocumentState", dict({
        "state": STORY_MESSAGE_STATE_TYPE_ENUM.STORY_PROGRESS
      }), true).then(function(progress) {
        _this16.element_.dispatchEvent(createCustomEvent(_this16.win_, "storyNavigation", dict({
          "pageId": pageId,
          "progress": progress.value
        })));
      });
    };
    _proto.onPageAttachmentStateUpdate_ = function onPageAttachmentStateUpdate_(pageAttachmentOpen) {
      this.updateButtonVisibility_(!pageAttachmentOpen);
      this.dispatchPageAttachmentEvent_(pageAttachmentOpen);
    };
    _proto.updateButtonVisibility_ = function updateButtonVisibility_(isVisible) {
      var button = this.rootEl_.querySelector("button.amp-story-player-exit-control-button");
      if (!button) {
        return;
      }
      isVisible ? button.classList.remove(DEPRECATED_BUTTON_CLASSES_ENUM.HIDDEN) : button.classList.add(DEPRECATED_BUTTON_CLASSES_ENUM.HIDDEN);
    };
    _proto.dispatchPageAttachmentEvent_ = function dispatchPageAttachmentEvent_(isPageAttachmentOpen) {
      this.element_.dispatchEvent(createCustomEvent(this.win_, isPageAttachmentOpen ? "page-attachment-open" : "page-attachment-close", dict({})));
    };
    _proto.onSelectDocument_ = function onSelectDocument_(data) {
      this.dispatchEndOfStoriesEvent_(data);
      if (data.next) {
        this.next_();
      } else if (data.previous) {
        this.previous_();
      }
    };
    _proto.dispatchEndOfStoriesEvent_ = function dispatchEndOfStoriesEvent_(data) {
      if (this.isCircularWrappingEnabled_ || !data.next && !data.previous) {
        return;
      }
      var endOfStories, name;
      if (data.next) {
        endOfStories = this.currentIdx_ + 1 === this.stories_.length;
        name = "noNextStory";
      } else {
        endOfStories = this.currentIdx_ === 0;
        name = "noPreviousStory";
      }
      if (endOfStories) {
        this.element_.dispatchEvent(createCustomEvent(this.win_, name, dict({})));
      }
    };
    _proto.onTouchStart_ = function onTouchStart_(event) {
      var coordinates = this.getClientTouchCoordinates_(event);
      if (!coordinates) {
        return;
      }
      this.touchEventState_.startX = coordinates.screenX;
      this.touchEventState_.startY = coordinates.screenY;
      this.pageScroller_ && this.pageScroller_.onTouchStart(event.timeStamp, coordinates.clientY);
      this.element_.dispatchEvent(createCustomEvent(this.win_, "amp-story-player-touchstart", dict({
        "touches": event.touches
      })));
    };
    _proto.onTouchMove_ = function onTouchMove_(event) {
      var coordinates = this.getClientTouchCoordinates_(event);
      if (!coordinates) {
        return;
      }
      this.element_.dispatchEvent(createCustomEvent(this.win_, "amp-story-player-touchmove", dict({
        "touches": event.touches,
        "isNavigationalSwipe": this.touchEventState_.isSwipeX
      })));
      if (this.touchEventState_.isSwipeX === false) {
        this.pageScroller_ && this.pageScroller_.onTouchMove(event.timeStamp, coordinates.clientY);
        return;
      }
      var screenX = coordinates.screenX, screenY = coordinates.screenY;
      this.touchEventState_.lastX = screenX;
      if (this.touchEventState_.isSwipeX === null) {
        this.touchEventState_.isSwipeX = Math.abs(this.touchEventState_.startX - screenX) > Math.abs(this.touchEventState_.startY - screenY);
        if (!this.touchEventState_.isSwipeX) {
          return;
        }
      }
      this.onSwipeX_({
        deltaX: screenX - this.touchEventState_.startX,
        last: false
      });
    };
    _proto.onTouchEnd_ = function onTouchEnd_(event) {
      this.element_.dispatchEvent(createCustomEvent(this.win_, "amp-story-player-touchend", dict({
        "touches": event.touches,
        "isNavigationalSwipe": this.touchEventState_.isSwipeX
      })));
      if (this.touchEventState_.isSwipeX === true) {
        this.onSwipeX_({
          deltaX: this.touchEventState_.lastX - this.touchEventState_.startX,
          last: true
        });
      } else {
        this.pageScroller_ && this.pageScroller_.onTouchEnd(event.timeStamp);
      }
      this.touchEventState_.startX = 0;
      this.touchEventState_.startY = 0;
      this.touchEventState_.lastX = 0;
      this.touchEventState_.isSwipeX = null;
      this.swipingState_ = SWIPING_STATE_ENUM.NOT_SWIPING;
    };
    _proto.onSwipeX_ = function onSwipeX_(gesture) {
      if (this.stories_.length <= 1) {
        return;
      }
      var deltaX = gesture.deltaX;
      if (gesture.last === true) {
        var delta = Math.abs(deltaX);
        if (this.swipingState_ === SWIPING_STATE_ENUM.SWIPING_TO_LEFT) {
          delta > TOGGLE_THRESHOLD_PX && (this.getSecondaryStory_() || this.isCircularWrappingEnabled_) ? this.next_() : this.resetStoryStyles_();
        }
        if (this.swipingState_ === SWIPING_STATE_ENUM.SWIPING_TO_RIGHT) {
          delta > TOGGLE_THRESHOLD_PX && (this.getSecondaryStory_() || this.isCircularWrappingEnabled_) ? this.previous_() : this.resetStoryStyles_();
        }
        return;
      }
      this.drag_(deltaX);
    };
    _proto.resetStoryStyles_ = function resetStoryStyles_() {
      var currentIframe = this.stories_[this.currentIdx_].iframe;
      requestAnimationFrame(function() {
        resetStyles(devAssertElement(currentIframe), ["transform", "transition"]);
      });
      var secondaryStory = this.getSecondaryStory_();
      if (secondaryStory) {
        requestAnimationFrame(function() {
          resetStyles(devAssertElement(secondaryStory.iframe), ["transform", "transition"]);
        });
      }
    };
    _proto.getSecondaryStory_ = function getSecondaryStory_() {
      var nextStoryIdx = this.swipingState_ === SWIPING_STATE_ENUM.SWIPING_TO_LEFT ? this.currentIdx_ + 1 : this.currentIdx_ - 1;
      if (this.isIndexOutofBounds_(nextStoryIdx)) {
        return null;
      }
      return this.stories_[nextStoryIdx];
    };
    _proto.isIndexOutofBounds_ = function isIndexOutofBounds_(index) {
      return index >= this.stories_.length || index < 0;
    };
    _proto.initializeAutoplay_ = function initializeAutoplay_() {
      if (!this.playerConfig_) {
        return;
      }
      var behavior = this.playerConfig_.behavior;
      if (behavior && typeof behavior.autoplay === "boolean") {
        this.playing_ = behavior.autoplay;
      }
    };
    _proto.initializeAttribution_ = function initializeAttribution_() {
      if (!this.playerConfig_) {
        return;
      }
      var display = this.playerConfig_.display;
      if (display && display.attribution === "auto") {
        this.attribution_ = "auto";
      }
    };
    _proto.initializePageScroll_ = function initializePageScroll_() {
      if (!this.playerConfig_) {
        return;
      }
      var behavior = this.playerConfig_.behavior;
      if (behavior && behavior.pageScroll === false) {
        this.pageScroller_ = null;
      }
    };
    _proto.initializeCircularWrapping_ = function initializeCircularWrapping_() {
      if (this.isCircularWrappingEnabled_ !== null) {
        return this.isCircularWrappingEnabled_;
      }
      if (!this.playerConfig_) {
        this.isCircularWrappingEnabled_ = false;
        return false;
      }
      var behavior = this.playerConfig_.behavior;
      var hasCircularWrappingEnabled = function hasCircularWrappingEnabled2(behavior2) {
        return behavior2.on === "end" && behavior2.action === "circular-wrapping";
      };
      this.isCircularWrappingEnabled_ = this.validateBehaviorDef_(behavior) && hasCircularWrappingEnabled(behavior);
      return this.isCircularWrappingEnabled_;
    };
    _proto.drag_ = function drag_(deltaX) {
      var secondaryTranslate;
      if (deltaX < 0) {
        this.swipingState_ = SWIPING_STATE_ENUM.SWIPING_TO_LEFT;
        secondaryTranslate = "translate3d(calc(100% + " + deltaX + "px), 0, 0)";
      } else {
        this.swipingState_ = SWIPING_STATE_ENUM.SWIPING_TO_RIGHT;
        secondaryTranslate = "translate3d(calc(" + deltaX + "px - 100%), 0, 0)";
      }
      var story = this.stories_[this.currentIdx_];
      var iframe = story.iframe;
      var translate = "translate3d(" + deltaX + "px, 0, 0)";
      requestAnimationFrame(function() {
        setStyles(devAssertElement(iframe), {
          transform: translate,
          transition: "none"
        });
      });
      var secondaryStory = this.getSecondaryStory_();
      if (!secondaryStory) {
        return;
      }
      requestAnimationFrame(function() {
        setStyles(devAssertElement(secondaryStory.iframe), {
          transform: secondaryTranslate,
          transition: "none"
        });
      });
    };
    _proto.getClientTouchCoordinates_ = function getClientTouchCoordinates_(event) {
      var touches = event.touches;
      if (!touches || touches.length < 1) {
        return null;
      }
      var _touches$ = touches[0], clientX = _touches$.clientX, clientY = _touches$.clientY, screenX = _touches$.screenX, screenY = _touches$.screenY;
      return {
        screenX: screenX,
        screenY: screenY,
        clientX: clientX,
        clientY: clientY
      };
    };
    return AmpStoryPlayer2;
  }();

  // extensions/amp-story-player/0.1/amp-story-player.js
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
  var AmpStoryPlayerWrapper = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpStoryPlayerWrapper2, _AMP$BaseElement);
    var _super = _createSuper(AmpStoryPlayerWrapper2);
    AmpStoryPlayerWrapper2.prerenderAllowed = function prerenderAllowed() {
      return true;
    };
    function AmpStoryPlayerWrapper2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.player_ = new AmpStoryPlayer(_this.win, element);
      return _this;
    }
    var _proto = AmpStoryPlayerWrapper2.prototype;
    _proto.buildCallback = function buildCallback() {
      this.player_.buildPlayer();
    };
    _proto.layoutCallback = function layoutCallback() {
      this.player_.layoutPlayer();
      return resolvedPromise();
    };
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return isLayoutSizeDefined(layout);
    };
    return AmpStoryPlayerWrapper2;
  }(AMP.BaseElement);
  AMP.registerElement("amp-story-player", AmpStoryPlayerWrapper, cssText);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-story-player-0.1.max.js.map
