(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-recaptcha-input",ev:"0.1",l:true,f:(function(AMP,_){
(function() {
  // third_party/amp-toolbox-cache-url/dist/amp-toolbox-cache-url.esm.js
  "use strict";
  var n = "ase art bmp blp cd5 cit cpt cr2 cut dds dib djvu egt exif gif gpl grf icns ico iff jng jpeg jpg jfif jp2 jps lbm max miff mng msp nitf ota pbm pc1 pc2 pc3 pcf pcx pdn pgm PI1 PI2 PI3 pict pct pnm pns ppm psb psd pdd psp px pxm pxr qfx raw rle sct sgi rgb int bw tga tiff tif vtf xbm xcf xpm 3dv amf ai awg cgm cdr cmx dxf e2d egt eps fs gbr odg svg stl vrml x3d sxd v2d vnd wmf emf art xar png webp jxr hdp wdp cur ecw iff lbm liff nrrd pam pcx pgf sgi rgb rgba bw int inta sid ras sun tga".split(" ");
  var p = {
    isPathNameAnImage: function isPathNameAnImage(b) {
      return n.some(function(a) {
        return b.endsWith(a) ? true : false;
      });
    }
  };
  var q = "### #gf $on $tf 0b 8m 8u 12u 15u 64c 075 75 085 85 91 091 096 96 abf acfm acs afm afn afs all amfm apf asf aspf atm auf b30 bco bdf bepf bez bfn bmap bmf bx bzr cbtf cct cef cff cfn cga ch4 cha chm chr chx claf collection compositefont dfont dus dzk eft eot etx euf f00 f06 f08 f09 f3f f10 f11 f12 f13 f16 fd fdb ff ffil flf fli fn3 fnb fnn fnt fnta fo1 fo2 fog fon font fonts fot frf frs ftm fxr fyi gdr gf gft glf glif glyphs gsf gxf hbf ice intellifont lepf lft lwfn mcf mcf mfd mfm mft mgf mmm mrf mtf mvec nlq ntf odttf ofm okf otf pcf pcf pfa pfb pfm pft phf pk pkt prs pss qbf qfn r8? scr sfd sff sfi sfl sfn sfo sfp sfs sif snf spd spritefont sui suit svg sxs t1c t2 tb1 tb2 tdf tfm tmf tpf ttc tte ttf type ufm ufo usl usp us? vf vf1 vf3 vfb vfm vfont vlw vmf vnf w30 wfn wnf woff woff2 xfc xfn xfr xft zfi zsu _v".split(" ");
  var u = {
    isPathNameAFont: function isPathNameAFont(b) {
      return q.some(function(a) {
        return b.endsWith(a) ? true : false;
      });
    }
  };
  var v = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function w(b, a) {
    a = a.split(":")[0];
    b = +b;
    if (!b)
      return false;
    switch (a) {
      case "http":
      case "ws":
        return b !== 80;
      case "https":
      case "wss":
        return b !== 443;
      case "ftp":
        return b !== 21;
      case "gopher":
        return b !== 70;
      case "file":
        return false;
    }
    return b !== 0;
  }
  var x = Object.prototype.hasOwnProperty;
  var y = {
    stringify: function stringify(b, a) {
      a = a || "";
      var c = [];
      typeof a !== "string" && (a = "?");
      for (var e in b) {
        x.call(b, e) && c.push(encodeURIComponent(e) + "=" + encodeURIComponent(b[e]));
      }
      return c.length ? a + c.join("&") : "";
    },
    parse: function parse(b) {
      for (var a = /([^=?&]+)=?([^&]*)/g, c = {}, e; e = a.exec(b); ) {
        var d = decodeURIComponent(e[1].replace(/\+/g, " "));
        e = decodeURIComponent(e[2].replace(/\+/g, " "));
        d in c || (c[d] = e);
      }
      return c;
    }
  };
  var z = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i;
  var A = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;
  var B = [["#", "hash"], ["?", "query"], function(b) {
    return b.replace("\\", "/");
  }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d+)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]];
  var C = {
    hash: 1,
    query: 1
  };
  function D(b, a, c) {
    if (!(this instanceof D))
      return new D(b, a, c);
    var e = B.slice();
    var d = typeof a;
    var k = 0;
    d !== "object" && d !== "string" && (c = a, a = null);
    c && typeof c !== "function" && (c = y.parse);
    d = v && v.location || {};
    a = a || d;
    d = {};
    var f = typeof a;
    if (a.protocol === "blob:")
      d = new D(unescape(a.pathname), {});
    else if (f === "string")
      for (g in d = new D(a, {}), C) {
        delete d[g];
      }
    else if (f === "object") {
      for (g in a) {
        g in C || (d[g] = a[g]);
      }
      d.slashes === void 0 && (d.slashes = A.test(a.href));
    }
    a = d;
    var g = z.exec(b || "");
    b = g[1] ? g[1].toLowerCase() : "";
    d = !!g[2];
    f = g[3];
    g = !b && !d;
    this.slashes = d || g && a.slashes;
    this.protocol = b || a.protocol || "";
    b = f;
    for (d || (e[3] = [/(.*)/, "pathname"]); k < e.length; k++) {
      if (d = e[k], typeof d === "function")
        b = d(b);
      else {
        var h = d[0];
        f = d[1];
        if (h !== h)
          this[f] = b;
        else if (typeof h === "string")
          ~(h = b.indexOf(h)) && (typeof d[2] === "number" ? (this[f] = b.slice(0, h), b = b.slice(h + d[2])) : (this[f] = b.slice(h), b = b.slice(0, h)));
        else if (h = h.exec(b))
          this[f] = h[1], b = b.slice(0, h.index);
        this[f] = this[f] || (g && d[3] ? a[f] || "" : "");
        d[4] && (this[f] = this[f].toLowerCase());
      }
    }
    c && (this.query = c(this.query));
    if (g && a.slashes && this.pathname.charAt(0) !== "/" && (this.pathname !== "" || a.pathname !== "")) {
      c = this.pathname;
      c = (a.pathname || "/").split("/").slice(0, -1).concat(c.split("/"));
      e = c.length;
      k = c[e - 1];
      a = false;
      for (b = 0; e--; ) {
        c[e] === "." ? c.splice(e, 1) : c[e] === ".." ? (c.splice(e, 1), b++) : b && (e === 0 && (a = true), c.splice(e, 1), b--);
      }
      a && c.unshift("");
      k !== "." && k !== ".." || c.push("");
      this.pathname = c.join("/");
    }
    w(this.port, this.protocol) || (this.host = this.hostname, this.port = "");
    this.username = this.password = "";
    this.auth && (d = this.auth.split(":"), this.username = d[0] || "", this.password = d[1] || "");
    this.origin = this.protocol && this.host && this.protocol !== "file:" ? this.protocol + "//" + this.host : "null";
    this.href = this.toString();
  }
  D.prototype = {
    set: function set(b, a, c) {
      switch (b) {
        case "query":
          typeof a === "string" && a.length && (a = (c || y.parse)(a));
          this[b] = a;
          break;
        case "port":
          this[b] = a;
          w(a, this.protocol) ? a && (this.host = this.hostname + ":" + a) : (this.host = this.hostname, this[b] = "");
          break;
        case "hostname":
          this[b] = a;
          this.port && (a += ":" + this.port);
          this.host = a;
          break;
        case "host":
          this[b] = a;
          /:\d+$/.test(a) ? (a = a.split(":"), this.port = a.pop(), this.hostname = a.join(":")) : (this.hostname = a, this.port = "");
          break;
        case "protocol":
          this.protocol = a.toLowerCase();
          this.slashes = !c;
          break;
        case "pathname":
        case "hash":
          a ? (c = b === "pathname" ? "/" : "#", this[b] = a.charAt(0) !== c ? c + a : a) : this[b] = a;
          break;
        default:
          this[b] = a;
      }
      for (b = 0; b < B.length; b++) {
        a = B[b], a[4] && (this[a[1]] = this[a[1]].toLowerCase());
      }
      this.origin = this.protocol && this.host && this.protocol !== "file:" ? this.protocol + "//" + this.host : "null";
      this.href = this.toString();
      return this;
    },
    toString: function toString(b) {
      b && typeof b === "function" || (b = y.stringify);
      var a = this.protocol;
      a && a.charAt(a.length - 1) !== ":" && (a += ":");
      a += this.slashes ? "//" : "";
      this.username && (a += this.username, this.password && (a += ":" + this.password), a += "@");
      a += this.host + this.pathname;
      (b = typeof this.query === "object" ? b(this.query) : this.query) && (a += b.charAt(0) !== "?" ? "?" + b : b);
      this.hash && (a += this.hash);
      return a;
    }
  };
  D.extractProtocol = null;
  D.location = null;
  D.qs = null;
  var E = /^xn--/;
  var F = /[^\x20-\x7E]/;
  var G = /[\x2E\u3002\uFF0E\uFF61]/g;
  var H = {
    overflow: "Overflow: input needs wider integers to process",
    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
    "invalid-input": "Invalid input"
  };
  var I = Math.floor;
  var J = String.fromCharCode;
  function L(b) {
    throw new RangeError(H[b]);
  }
  function M(b, a) {
    for (var c = b.length, e = []; c--; ) {
      e[c] = a(b[c]);
    }
    return e;
  }
  function N(b, a) {
    var c = b.split("@"), e = "";
    1 < c.length && (e = c[0] + "@", b = c[1]);
    b = b.replace(G, ".");
    b = b.split(".");
    a = M(b, a).join(".");
    return e + a;
  }
  function O(b) {
    for (var a = [], c = 0, e = b.length, d, k; c < e; ) {
      d = b.charCodeAt(c++), 55296 <= d && 56319 >= d && c < e ? (k = b.charCodeAt(c++), (k & 64512) == 56320 ? a.push(((d & 1023) << 10) + (k & 1023) + 65536) : (a.push(d), c--)) : a.push(d);
    }
    return a;
  }
  function P(b) {
    return M(b, function(a) {
      var b2 = "";
      65535 < a && (a -= 65536, b2 += J(a >>> 10 & 1023 | 55296), a = 56320 | a & 1023);
      return b2 += J(a);
    }).join("");
  }
  function Q(b, a) {
    return b + 22 + 75 * (26 > b) - ((a != 0) << 5);
  }
  function R(b, a, c) {
    var e = 0;
    b = c ? I(b / 700) : b >> 1;
    for (b += I(b / a); 455 < b; e += 36) {
      b = I(b / 35);
    }
    return I(e + 36 * b / (b + 38));
  }
  function S(b) {
    var a = [], c = b.length, e = 0, d = 128, k = 72, f, g;
    var h = b.lastIndexOf("-");
    0 > h && (h = 0);
    for (f = 0; f < h; ++f) {
      128 <= b.charCodeAt(f) && L("not-basic"), a.push(b.charCodeAt(f));
    }
    for (h = 0 < h ? h + 1 : 0; h < c; ) {
      f = e;
      var m = 1;
      for (g = 36; ; g += 36) {
        h >= c && L("invalid-input");
        var l = b.charCodeAt(h++);
        l = 10 > l - 48 ? l - 22 : 26 > l - 65 ? l - 65 : 26 > l - 97 ? l - 97 : 36;
        (36 <= l || l > I((2147483647 - e) / m)) && L("overflow");
        e += l * m;
        var t = g <= k ? 1 : g >= k + 26 ? 26 : g - k;
        if (l < t)
          break;
        l = 36 - t;
        m > I(2147483647 / l) && L("overflow");
        m *= l;
      }
      m = a.length + 1;
      k = R(e - f, m, f == 0);
      I(e / m) > 2147483647 - d && L("overflow");
      d += I(e / m);
      e %= m;
      a.splice(e++, 0, d);
    }
    return P(a);
  }
  function T(b) {
    var a, c, e, d = [];
    b = O(b);
    var k = b.length;
    var f = 128;
    var g = 0;
    var h = 72;
    for (e = 0; e < k; ++e) {
      var m = b[e];
      128 > m && d.push(J(m));
    }
    for ((a = c = d.length) && d.push("-"); a < k; ) {
      var l = 2147483647;
      for (e = 0; e < k; ++e) {
        m = b[e], m >= f && m < l && (l = m);
      }
      var t = a + 1;
      l - f > I((2147483647 - g) / t) && L("overflow");
      g += (l - f) * t;
      f = l;
      for (e = 0; e < k; ++e) {
        if (m = b[e], m < f && 2147483647 < ++g && L("overflow"), m == f) {
          var r = g;
          for (l = 36; ; l += 36) {
            m = l <= h ? 1 : l >= h + 26 ? 26 : l - h;
            if (r < m)
              break;
            var K = r - m;
            r = 36 - m;
            d.push(J(Q(m + K % r, 0)));
            r = I(K / r);
          }
          d.push(J(Q(r, 0)));
          h = R(g, t, a == c);
          g = 0;
          ++a;
        }
      }
      ++g;
      ++f;
    }
    return d.join("");
  }
  var U = {
    version: "1.4.1",
    ucs2: {
      decode: O,
      encode: P
    },
    toASCII: function toASCII(b) {
      return N(b, function(a) {
        return F.test(a) ? "xn--" + T(a) : a;
      });
    },
    toUnicode: function toUnicode(b) {
      return N(b, function(a) {
        return E.test(a) ? S(a.slice(4).toLowerCase()) : a;
      });
    },
    encode: T,
    decode: S
  };
  var V = /[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/;
  var W = /[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]/;
  function X(b) {
    b = new D(b).hostname;
    var a = U.toUnicode(b);
    return (a = 63 >= b.length && !(V.test(a) && W.test(a)) && b.indexOf(".") != -1) ? (a = U.toUnicode(b), a = a.split("-").join("--"), a = a.split(".").join("-"), a = U.toASCII(a).toLowerCase(), 63 < a.length ? Y(b) : Promise.resolve(a)) : Y(b);
  }
  function Y(b) {
    return aa(b).then(function(a) {
      return ba("ffffffffff" + a + "000000").substr(8, Math.ceil(4 * a.length / 5));
    });
  }
  function aa(b) {
    if (typeof window !== "undefined")
      return b = new TextEncoder("utf-8").encode(b), crypto.subtle.digest("SHA-256", b).then(function(a2) {
        var b2 = [];
        a2 = new DataView(a2);
        for (var c2 = 0; c2 < a2.byteLength; c2 += 4) {
          var d = ("00000000" + a2.getUint32(c2).toString(16)).slice(-8);
          b2.push(d);
        }
        return b2 = b2.join("");
      });
    {
      var a = Buffer.from(b, "utf-8"), c = {};
      return new Promise(function(b2) {
        var d = c.createHash("sha256").update(a).digest("hex");
        b2(d);
      });
    }
  }
  function ba(b) {
    var a = [];
    b.match(/.{1,2}/g).forEach(function(b2, c2) {
      a[c2] = parseInt(b2, 16);
    });
    var c = a.length % 5, e = Math.floor(a.length / 5);
    b = [];
    if (c != 0) {
      for (var d = 0; d < 5 - c; d++) {
        a += "\0";
      }
      e += 1;
    }
    for (d = 0; d < e; d++) {
      b.push("abcdefghijklmnopqrstuvwxyz234567".charAt(a[5 * d] >> 3)), b.push("abcdefghijklmnopqrstuvwxyz234567".charAt((a[5 * d] & 7) << 2 | a[5 * d + 1] >> 6)), b.push("abcdefghijklmnopqrstuvwxyz234567".charAt((a[5 * d + 1] & 63) >> 1)), b.push("abcdefghijklmnopqrstuvwxyz234567".charAt((a[5 * d + 1] & 1) << 4 | a[5 * d + 2] >> 4)), b.push("abcdefghijklmnopqrstuvwxyz234567".charAt((a[5 * d + 2] & 15) << 1 | a[5 * d + 3] >> 7)), b.push("abcdefghijklmnopqrstuvwxyz234567".charAt((a[5 * d + 3] & 127) >> 2)), b.push("abcdefghijklmnopqrstuvwxyz234567".charAt((a[5 * d + 3] & 3) << 3 | a[5 * d + 4] >> 5)), b.push("abcdefghijklmnopqrstuvwxyz234567".charAt(a[5 * d + 4] & 31));
    }
    e = 0;
    c == 1 ? e = 6 : c == 2 ? e = 4 : c == 3 ? e = 3 : c == 4 && (e = 1);
    for (c = 0; c < e; c++) {
      b.pop();
    }
    for (c = 0; c < e; c++) {
      b.push("=");
    }
    return b.join("");
  }
  function Z(b, a) {
    var c = new D(a);
    var e = ca(c.pathname);
    e += c.protocol === "https:" ? "/s/" : "/";
    return X(c.toString()).then(function(d) {
      var k = new D(a);
      k.protocol = "https";
      d = d + "." + b;
      k.host = d;
      k.hostname = d;
      k.pathname = e + c.hostname + c.pathname;
      return k.toString();
    });
  }
  function ca(b) {
    return p.isPathNameAnImage(b) ? "/i" : u.isPathNameAFont(b) ? "/r" : "/c";
  }
  var amp_toolbox_cache_url_esm_default = {
    createCacheUrl: Z,
    createCurlsSubdomain: X
  };

  // src/core/data-structures/promise.js
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

  // src/core/window/index.js
  function toWin(winOrNull) {
    return winOrNull;
  }
  function getWin(node) {
    return toWin((node.ownerDocument || node).defaultView);
  }

  // src/core/types/string/index.js
  function isString(s) {
    return typeof s == "string";
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
  function assertString(assertFn, shouldBeString, opt_message) {
    return assertType_(assertFn, shouldBeString, isString(shouldBeString), "String expected", opt_message);
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
  function devAssertString(shouldBeString, opt_message) {
    if (isMinified()) {
      return shouldBeString;
    }
    devAssertDceCheck();
    return assertString(devAssert, shouldBeString, opt_message);
  }

  // src/core/dom/query.js
  function lastChildElement(parent, callback) {
    for (var child = parent.lastElementChild; child; child = child.previousElementSibling) {
      if (callback(child)) {
        return child;
      }
    }
    return null;
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

  // src/core/3p-frame-messaging.js
  var AMP_MESSAGE_PREFIX = "amp-";
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

  // src/utils/event-helper.js
  var LOAD_FAILURE_PREFIX = "Failed to load:";
  var MEDIA_LOAD_FAILURE_SRC_PROPERTY = "__AMP_MEDIA_LOAD_FAILURE_SRC";
  function getData(event) {
    return event.data;
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

  // src/iframe-helper.js
  var UNLISTEN_SENTINEL = "unlisten";
  function getListenFors(parentWin, opt_create) {
    var listeningFors = parentWin.listeningFors;
    if (!listeningFors && opt_create) {
      listeningFors = parentWin.listeningFors = Object.create(null);
    }
    return listeningFors || null;
  }
  function getListenForSentinel(parentWin, sentinel, opt_create) {
    var listeningFors = getListenFors(parentWin, opt_create);
    if (!listeningFors) {
      return listeningFors;
    }
    var listenSentinel = listeningFors[sentinel];
    if (!listenSentinel && opt_create) {
      listenSentinel = listeningFors[sentinel] = [];
    }
    return listenSentinel || null;
  }
  function getOrCreateListenForEvents(parentWin, iframe, opt_is3P) {
    var sentinel = getSentinel_(iframe, opt_is3P);
    var listenSentinel = getListenForSentinel(parentWin, sentinel, true);
    var windowEvents;
    for (var i = 0; i < listenSentinel.length; i++) {
      var we = listenSentinel[i];
      if (we.frame === iframe) {
        windowEvents = we;
        break;
      }
    }
    if (!windowEvents) {
      windowEvents = {
        frame: iframe,
        events: Object.create(null)
      };
      listenSentinel.push(windowEvents);
    }
    return windowEvents.events;
  }
  function getListenForEvents(parentWin, sentinel, origin, triggerWin) {
    var listenSentinel = getListenForSentinel(parentWin, sentinel);
    if (!listenSentinel) {
      return listenSentinel;
    }
    var windowEvents;
    for (var i = 0; i < listenSentinel.length; i++) {
      var we = listenSentinel[i];
      var contentWindow = we.frame.contentWindow;
      if (!contentWindow) {
        setTimeout(dropListenSentinel, 0, listenSentinel);
      } else if (triggerWin == contentWindow || isDescendantWindow(contentWindow, triggerWin)) {
        windowEvents = we;
        break;
      }
    }
    return windowEvents ? windowEvents.events : null;
  }
  function isDescendantWindow(ancestor, descendant) {
    for (var win = descendant; win && win != win.parent; win = win.parent) {
      if (win == ancestor) {
        return true;
      }
    }
    return false;
  }
  function dropListenSentinel(listenSentinel) {
    var noopData = dict({
      "sentinel": UNLISTEN_SENTINEL
    });
    for (var i = listenSentinel.length - 1; i >= 0; i--) {
      var windowEvents = listenSentinel[i];
      if (!windowEvents.frame.contentWindow) {
        listenSentinel.splice(i, 1);
        var events = windowEvents.events;
        for (var name in events) {
          events[name].splice(0, Infinity).forEach(function(event) {
            event(noopData);
          });
        }
      }
    }
  }
  function registerGlobalListenerIfNeeded(parentWin) {
    if (parentWin.listeningFors) {
      return;
    }
    var listenForListener = function listenForListener2(event) {
      if (!getData(event)) {
        return;
      }
      var data = parseIfNeeded(getData(event));
      if (!data || !data["sentinel"]) {
        return;
      }
      var listenForEvents = getListenForEvents(parentWin, data["sentinel"], event.origin, event.source);
      if (!listenForEvents) {
        return;
      }
      var listeners = listenForEvents[data["type"]];
      if (!listeners) {
        return;
      }
      listeners = listeners.slice();
      for (var i = 0; i < listeners.length; i++) {
        var listener = listeners[i];
        listener(data, event.source, event.origin, event);
      }
    };
    parentWin.addEventListener("message", listenForListener);
  }
  function listenFor(iframe, typeOfMessage, callback, opt_is3P, opt_includingNestedWindows, opt_allowOpaqueOrigin) {
    devAssert2(iframe.src, "only iframes with src supported");
    devAssert2(!iframe.parentNode, "cannot register events on an attached iframe. It will cause hair-pulling bugs like #2942");
    devAssert2(callback);
    var parentWin = iframe.ownerDocument.defaultView;
    registerGlobalListenerIfNeeded(parentWin);
    var listenForEvents = getOrCreateListenForEvents(parentWin, iframe, opt_is3P);
    var iframeOrigin = parseUrlDeprecated(iframe.src).origin;
    var events = listenForEvents[typeOfMessage] || (listenForEvents[typeOfMessage] = []);
    var unlisten;
    var listener = function listener2(data, source, origin, event) {
      var sentinel = data["sentinel"];
      if (sentinel == "amp") {
        if (source != iframe.contentWindow) {
          return;
        }
        var isOpaqueAndAllowed = origin == "null" && opt_allowOpaqueOrigin;
        if (iframeOrigin != origin && !isOpaqueAndAllowed) {
          return;
        }
      }
      if (!opt_includingNestedWindows && source != iframe.contentWindow) {
        return;
      }
      if (data.sentinel == UNLISTEN_SENTINEL) {
        unlisten();
        return;
      }
      callback(data, source, origin, event);
    };
    events.push(listener);
    return unlisten = function unlisten2() {
      if (listener) {
        var index = events.indexOf(listener);
        if (index > -1) {
          events.splice(index, 1);
        }
        listener = null;
        events = null;
        callback = null;
      }
    };
  }
  function postMessage(iframe, type, object, targetOrigin, opt_is3P) {
    postMessageToWindows(iframe, [{
      win: iframe.contentWindow,
      origin: targetOrigin
    }], type, object, opt_is3P);
  }
  function postMessageToWindows(iframe, targets, type, object, opt_is3P) {
    if (!iframe.contentWindow) {
      return;
    }
    object["type"] = type;
    object["sentinel"] = getSentinel_(iframe, opt_is3P);
    var payload = object;
    if (opt_is3P) {
      payload = "amp-" + JSON.stringify(object);
    }
    for (var i = 0; i < targets.length; i++) {
      var target = targets[i];
      target.win.postMessage(payload, target.origin);
    }
  }
  function getSentinel_(iframe, opt_is3P) {
    return opt_is3P ? iframe.getAttribute("data-amp-3p-sentinel") : "amp";
  }
  function parseIfNeeded(data) {
    if (typeof data == "string") {
      if (data.charAt(0) == "{") {
        data = tryParseJson(data, function(e) {
          dev().warn("IFRAME-HELPER", "Postmessage could not be parsed. Is it in a valid JSON format?", e);
        }) || null;
      } else if (isAmpMessage(data)) {
        data = deserializeMessage(data);
      } else {
        data = null;
      }
    }
    return data;
  }

  // extensions/amp-recaptcha-input/0.1/amp-recaptcha-service.js
  var AmpRecaptchaService = /* @__PURE__ */ function() {
    function AmpRecaptchaService2(ampdoc2) {
      this.ampdoc_ = ampdoc2;
      this.win_ = this.ampdoc_.win;
      this.sitekey_ = null;
      this.iframe_ = null;
      this.iframeLoadPromise_ = null;
      this.registeredElementCount_ = 0;
      this.recaptchaFrameOrigin_ = null;
      this.recaptchaApiReady_ = new Deferred();
      this.unlisteners_ = [];
      this.executeMap_ = {};
      this.global_;
    }
    var _proto = AmpRecaptchaService2.prototype;
    _proto.register = function register(sitekey, global2) {
      if (global2 === void 0) {
        global2 = false;
      }
      if (!this.sitekey_) {
        this.sitekey_ = sitekey;
      } else if (this.sitekey_ !== sitekey) {
        return Promise.reject(new Error("You must supply the same sitekey to all amp-recaptcha-input elements."));
      }
      if (this.global_ === void 0) {
        this.global_ = global2;
      } else if (this.global_ !== global2) {
        return Promise.reject(new Error("You must supply the data-global attribute to all or none of the amp-recaptcha-input elements."));
      }
      this.registeredElementCount_++;
      if (!this.iframeLoadPromise_) {
        this.iframeLoadPromise_ = this.initialize_();
      }
      return this.iframeLoadPromise_;
    };
    _proto.unregister = function unregister() {
      this.registeredElementCount_--;
      if (this.registeredElementCount_ <= 0) {
        this.dispose_();
      }
    };
    _proto.execute = function execute(resourceId, action) {
      var _this = this;
      if (!this.iframe_) {
        return Promise.reject(new Error("An iframe is not created. You must register before executing"));
      }
      var executePromise = new Deferred();
      var messageId = resourceId;
      this.executeMap_[messageId] = {
        resolve: executePromise.resolve,
        reject: executePromise.reject
      };
      this.recaptchaApiReady_.promise.then(function() {
        var message = dict({
          "id": messageId,
          "action": "amp_" + action
        });
        _this.postMessageToIframe_(devAssert2(_this.recaptchaFrameOrigin_), message);
      });
      return executePromise.promise;
    };
    _proto.initialize_ = function initialize_() {
      var _this2 = this;
      return this.createRecaptchaFrame_().then(function(iframe) {
        _this2.iframe_ = iframe;
        _this2.unlisteners_ = [_this2.listenIframe_("amp-recaptcha-ready", function() {
          return _this2.recaptchaApiReady_.resolve();
        }), _this2.listenIframe_("amp-recaptcha-token", _this2.tokenMessageHandler_.bind(_this2)), _this2.listenIframe_("amp-recaptcha-error", _this2.errorMessageHandler_.bind(_this2))];
        _this2.executeMap_ = {};
        _this2.win_.document.body.appendChild(_this2.iframe_);
        return loadPromise(_this2.iframe_);
      });
    };
    _proto.dispose_ = function dispose_() {
      if (this.iframe_) {
        removeElement(this.iframe_);
        this.unlisteners_.forEach(function(unlistener) {
          return unlistener();
        });
        this.iframe_ = null;
        this.iframeLoadPromise_ = null;
        this.recaptchaApiReady_ = new Deferred();
        this.unlisteners_ = [];
        this.executeMap_ = {};
      }
    };
    _proto.createRecaptchaFrame_ = function createRecaptchaFrame_() {
      var _this3 = this;
      var iframe = this.win_.document.createElement("iframe");
      return this.getRecaptchaFrameSrc_().then(function(recaptchaFrameSrc) {
        _this3.recaptchaFrameOrigin_ = getSourceOrigin(recaptchaFrameSrc);
        iframe.src = recaptchaFrameSrc;
        iframe.setAttribute("scrolling", "no");
        iframe.setAttribute("data-amp-3p-sentinel", "amp-recaptcha");
        iframe.setAttribute("name", JSON.stringify(dict({
          "sitekey": _this3.sitekey_,
          "sentinel": "amp-recaptcha",
          "global": _this3.global_
        })));
        iframe.classList.add("i-amphtml-recaptcha-iframe");
        setStyle(iframe, "border", "none");
        iframe.onload = function() {
          this.readyState = "complete";
        };
        return iframe;
      });
    };
    _proto.getRecaptchaFrameSrc_ = function getRecaptchaFrameSrc_() {
      var _this4 = this;
      if (getMode().localDev || getMode().test) {
        var winLocation = this.win_.location;
        if (this.win_.testLocation) {
          winLocation = this.win_.testLocation;
        }
        return amp_toolbox_cache_url_esm_default.createCurlsSubdomain(winLocation.href).then(function(curlsSubdomain) {
          return "//" + curlsSubdomain + ".recaptcha." + winLocation.host + "/dist.3p/" + (isMinified() ? version() + "/recaptcha" : "current/recaptcha.max") + ".html";
        });
      }
      var curlsSubdomainPromise = void 0;
      var isProxyOrigin2 = Services.urlForDoc(this.ampdoc_.getHeadNode()).isProxyOrigin(this.win_.location.href);
      if (isProxyOrigin2) {
        curlsSubdomainPromise = tryResolve(function() {
          return _this4.win_.location.hostname.split(".")[0];
        });
      } else {
        curlsSubdomainPromise = amp_toolbox_cache_url_esm_default.createCurlsSubdomain(this.win_.location.href);
      }
      return curlsSubdomainPromise.then(function(curlsSubdomain) {
        var recaptchaFrameSrc = "https://" + curlsSubdomain + (".recaptcha." + urls.thirdPartyFrameHost + "/" + version() + "/") + "recaptcha.html";
        return recaptchaFrameSrc;
      });
    };
    _proto.listenIframe_ = function listenIframe_(evName, cb) {
      var _this5 = this;
      var checkOriginWrappedCallback = function checkOriginWrappedCallback2(data, source, origin) {
        if (_this5.recaptchaFrameOrigin_ === origin) {
          cb(data, source, origin);
        }
      };
      return listenFor(dev().assertElement(this.iframe_), evName, checkOriginWrappedCallback, true);
    };
    _proto.postMessageToIframe_ = function postMessageToIframe_(origin, message) {
      postMessage(dev().assertElement(this.iframe_), "amp-recaptcha-action", message, origin, true);
    };
    _proto.tokenMessageHandler_ = function tokenMessageHandler_(data) {
      var id = data["id"];
      var token = data["token"];
      this.executeMap_[id].resolve(token);
      delete this.executeMap_[id];
    };
    _proto.errorMessageHandler_ = function errorMessageHandler_(data) {
      var id = data["id"];
      var error = data["error"];
      this.executeMap_[id].reject(new Error(error));
      delete this.executeMap_[id];
    };
    return AmpRecaptchaService2;
  }();
  function recaptchaServiceForDoc(element) {
    return getServicePromiseForDoc(element, "amp-recaptcha");
  }

  // src/core/constants/async-input.js
  var AsyncInputAttributes_Enum = {
    NAME: "name"
  };
  var AsyncInputClasses_Enum = {
    ASYNC_INPUT: "i-amphtml-async-input",
    ASYNC_REQUIRED_ACTION: "i-async-require-action"
  };

  // build/amp-recaptcha-input-0.1.css.js
  var CSS2 = ".i-amphtml-recaptcha-iframe{position:fixed!important;top:0px!important;left:0px!important;height:1px!important;width:1px!important;overflow:hidden!important;visibility:hidden!important}\n/*# sourceURL=/extensions/amp-recaptcha-input/0.1/amp-recaptcha-input.css*/";

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

  // extensions/amp-recaptcha-input/0.1/amp-recaptcha-input.js
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p2) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
      o2.__proto__ = p3;
      return o2;
    };
    return _setPrototypeOf(o, p2);
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
  var TAG = "amp-recaptcha-input";
  var AmpRecaptchaInput = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpRecaptchaInput2, _AMP$BaseElement);
    var _super = _createSuper(AmpRecaptchaInput2);
    function AmpRecaptchaInput2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.sitekey_ = null;
      _this.action_ = null;
      _this.recaptchaService_ = null;
      _this.registerPromise_ = null;
      _this.global_ = false;
      return _this;
    }
    var _proto = AmpRecaptchaInput2.prototype;
    _proto.buildCallback = function buildCallback() {
      var _this2 = this;
      this.sitekey_ = userAssert(this.element.getAttribute("data-sitekey"), "The data-sitekey attribute is required for <amp-recaptcha-input> %s", this.element);
      this.action_ = userAssert(this.element.getAttribute("data-action"), "The data-action attribute is required for <amp-recaptcha-input> %s", this.element);
      userAssert(this.element.getAttribute(AsyncInputAttributes_Enum.NAME), "The %s attribute is required for <amp-recaptcha-input> %s", AsyncInputAttributes_Enum.NAME, this.element);
      this.global_ = this.element.hasAttribute("data-global");
      return recaptchaServiceForDoc(this.element).then(function(service) {
        _this2.recaptchaService_ = service;
        return _this2.mutateElement(function() {
          toggle(_this2.element);
          _this2.element.classList.add(AsyncInputClasses_Enum.ASYNC_INPUT);
          setStyles(_this2.element, {
            "position": "absolute",
            "width": "1px",
            "height": "1px",
            "overflow": "hidden",
            "visibility": "hidden"
          });
        });
      });
    };
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return layout == Layout_Enum.NODISPLAY;
    };
    _proto.layoutCallback = function layoutCallback() {
      if (!this.registerPromise_ && this.sitekey_) {
        this.registerPromise_ = this.recaptchaService_.register(this.sitekey_, this.global_);
      }
      return this.registerPromise_;
    };
    _proto.unlayoutCallback = function unlayoutCallback() {
      if (this.registerPromise_) {
        this.recaptchaService_.unregister();
        this.registerPromise_ = null;
      }
      return true;
    };
    _proto.getValue = function getValue() {
      if (this.sitekey_ && this.action_) {
        return this.recaptchaService_.execute(this.element.getResourceId(), this.action_);
      }
      return Promise.reject(new Error("amp-recaptcha-input requires both the data-sitekey, and data-action attribute"));
    };
    return AmpRecaptchaInput2;
  }(AMP.BaseElement);
  AMP.registerServiceForDoc("amp-recaptcha", AmpRecaptchaService);
  AMP.registerElement(TAG, AmpRecaptchaInput, CSS2);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-recaptcha-input-0.1.max.js.map
