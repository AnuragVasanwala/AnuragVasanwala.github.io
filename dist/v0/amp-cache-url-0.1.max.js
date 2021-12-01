(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-cache-url",ev:"0.1",l:true,f:(function(AMP,_){
(function() {
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

  // extensions/amp-cache-url/0.1/amp-cache-url.js
  var AmpCacheUrlService = /* @__PURE__ */ function() {
    function AmpCacheUrlService2() {
    }
    var _proto = AmpCacheUrlService2.prototype;
    _proto.createCacheUrl = function createCacheUrl(url, cacheDomain) {
      if (cacheDomain === void 0) {
        cacheDomain = urls.cdn;
      }
      return Z(cacheDomain.replace(/https?:\/\//, ""), url);
    };
    return AmpCacheUrlService2;
  }();
  AMP.registerServiceForDoc("cache-url", AmpCacheUrlService);
})();
})});
//# sourceMappingURL=amp-cache-url-0.1.max.js.map
