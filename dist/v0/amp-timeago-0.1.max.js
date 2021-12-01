(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-timeago",ev:"0.1",l:true,f:(function(AMP,_){
(function() {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = function(target) {
    return __defProp(target, "__esModule", { value: true });
  };
  var __commonJS = function(cb, mod) {
    return function __require() {
      return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
  };
  var __reExport = function(target, module, desc) {
    if (module && typeof module === "object" || typeof module === "function")
      for (var keys = __getOwnPropNames(module), i = 0, n = keys.length, key; i < n; i++) {
        key = keys[i];
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: function(k) {
            return module[k];
          }.bind(null, key), enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
      }
    return target;
  };
  var __toModule = function(module) {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: function() {
      return module.default;
    }, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/timeago.js/dist/timeago.full.min.js
  var require_timeago_full_min = __commonJS({
    "node_modules/timeago.js/dist/timeago.full.min.js": function(exports, module) {
      !function(s, n) {
        typeof exports == "object" && typeof module != "undefined" ? n(exports) : typeof define == "function" && define.amd ? define(["exports"], n) : n((s = s || self).timeago = {});
      }(exports, function(s) {
        "use strict";
        var a = ["second", "minute", "hour", "day", "week", "month", "year"];
        function n(s2, n2) {
          if (n2 === 0)
            return ["just now", "right now"];
          var e2 = a[Math.floor(n2 / 2)];
          return 1 < s2 && (e2 += "s"), [s2 + " " + e2 + " ago", "in " + s2 + " " + e2];
        }
        var t = ["\u79D2", "\u5206\u949F", "\u5C0F\u65F6", "\u5929", "\u5468", "\u4E2A\u6708", "\u5E74"];
        function e(s2, n2) {
          if (n2 === 0)
            return ["\u521A\u521A", "\u7247\u523B\u540E"];
          var e2 = t[~~(n2 / 2)];
          return [s2 + " " + e2 + "\u524D", s2 + " " + e2 + "\u540E"];
        }
        function u(s2, n2) {
          i[s2] = n2;
        }
        function r(s2) {
          return i[s2] || i.en_US;
        }
        var i = {}, m = [60, 60, 24, 7, 365 / 7 / 12, 12];
        function o(s2) {
          return s2 instanceof Date ? s2 : !isNaN(s2) || /^\d+$/.test(s2) ? new Date(parseInt(s2)) : (s2 = (s2 || "").trim().replace(/\.\d+/, "").replace(/-/, "/").replace(/-/, "/").replace(/(\d)T(\d)/, "$1 $2").replace(/Z/, " UTC").replace(/([+-]\d\d):?(\d\d)/, " $1$2"), new Date(s2));
        }
        function d(s2, n2) {
          for (var e2 = s2 < 0 ? 1 : 0, a2 = s2 = Math.abs(s2), t2 = 0; s2 >= m[t2] && t2 < m.length; t2++) {
            s2 /= m[t2];
          }
          return ((t2 *= 2) === 0 ? 9 : 1) < (s2 = Math.floor(s2)) && (t2 += 1), n2(s2, t2, a2)[e2].replace("%s", s2.toString());
        }
        function c(s2, n2) {
          return ((n2 ? o(n2) : new Date()) - o(s2)) / 1e3;
        }
        var l = "timeago-id";
        function h(s2) {
          return parseInt(s2.getAttribute(l));
        }
        var g = {}, f = function f2(s2) {
          clearTimeout(s2), delete g[s2];
        };
        function p(s2, n2, e2, a2) {
          f(h(s2));
          var t2 = a2.relativeDate, u2 = a2.minInterval, r2 = c(n2, t2);
          s2.innerText = d(r2, e2);
          var i2, o2 = setTimeout(function() {
            p(s2, n2, e2, a2);
          }, Math.min(1e3 * Math.max(function(s3) {
            for (var n3 = 1, e3 = 0, a3 = Math.abs(s3); s3 >= m[e3] && e3 < m.length; e3++) {
              s3 /= m[e3], n3 *= m[e3];
            }
            return a3 = (a3 %= n3) ? n3 - a3 : n3, Math.ceil(a3);
          }(r2), u2 || 1), 2147483647));
          g[o2] = 0, i2 = o2, s2.setAttribute(l, i2);
        }
        u("en_US", n), u("zh_CN", e);
        var b = [["\u062B\u0627\u0646\u064A\u0629", "\u062B\u0627\u0646\u064A\u062A\u064A\u0646", "%s \u062B\u0648\u0627\u0646", "%s \u062B\u0627\u0646\u064A\u0629"], ["\u062F\u0642\u064A\u0642\u0629", "\u062F\u0642\u064A\u0642\u062A\u064A\u0646", "%s \u062F\u0642\u0627\u0626\u0642", "%s \u062F\u0642\u064A\u0642\u0629"], ["\u0633\u0627\u0639\u0629", "\u0633\u0627\u0639\u062A\u064A\u0646", "%s \u0633\u0627\u0639\u0627\u062A", "%s \u0633\u0627\u0639\u0629"], ["\u064A\u0648\u0645", "\u064A\u0648\u0645\u064A\u0646", "%s \u0623\u064A\u0627\u0645", "%s \u064A\u0648\u0645\u0627\u064B"], ["\u0623\u0633\u0628\u0648\u0639", "\u0623\u0633\u0628\u0648\u0639\u064A\u0646", "%s \u0623\u0633\u0627\u0628\u064A\u0639", "%s \u0623\u0633\u0628\u0648\u0639\u0627\u064B"], ["\u0634\u0647\u0631", "\u0634\u0647\u0631\u064A\u0646", "%s \u0623\u0634\u0647\u0631", "%s \u0634\u0647\u0631\u0627\u064B"], ["\u0639\u0627\u0645", "\u0639\u0627\u0645\u064A\u0646", "%s \u0623\u0639\u0648\u0627\u0645", "%s \u0639\u0627\u0645\u0627\u064B"]];
        function v(s2, n2, e2, a2, t2) {
          var u2 = t2 % 10, r2 = a2;
          return t2 === 1 ? r2 = s2 : u2 == 1 && 20 < t2 ? r2 = n2 : 1 < u2 && u2 < 5 && (20 < t2 || t2 < 10) && (r2 = e2), r2;
        }
        var y = v.bind(null, "\u0441\u0435\u043A\u0443\u043D\u0434\u0443", "%s \u0441\u0435\u043A\u0443\u043D\u0434\u0443", "%s \u0441\u0435\u043A\u0443\u043D\u0434\u044B", "%s \u0441\u0435\u043A\u0443\u043D\u0434"), k = v.bind(null, "\u0445\u0432\u0456\u043B\u0456\u043D\u0443", "%s \u0445\u0432\u0456\u043B\u0456\u043D\u0443", "%s \u0445\u0432\u0456\u043B\u0456\u043D\u044B", "%s \u0445\u0432\u0456\u043B\u0456\u043D"), j = v.bind(null, "\u0433\u0430\u0434\u0437\u0456\u043D\u0443", "%s \u0433\u0430\u0434\u0437\u0456\u043D\u0443", "%s \u0433\u0430\u0434\u0437\u0456\u043D\u044B", "%s \u0433\u0430\u0434\u0437\u0456\u043D"), z = v.bind(null, "\u0434\u0437\u0435\u043D\u044C", "%s \u0434\u0437\u0435\u043D\u044C", "%s \u0434\u043D\u0456", "%s \u0434\u0437\u0451\u043D"), w = v.bind(null, "\u0442\u044B\u0434\u0437\u0435\u043D\u044C", "%s \u0442\u044B\u0434\u0437\u0435\u043D\u044C", "%s \u0442\u044B\u0434\u043D\u0456", "%s \u0442\u044B\u0434\u043D\u044F\u045E"), _ = v.bind(null, "\u043C\u0435\u0441\u044F\u0446", "%s \u043C\u0435\u0441\u044F\u0446", "%s \u043C\u0435\u0441\u044F\u0446\u044B", "%s \u043C\u0435\u0441\u044F\u0446\u0430\u045E"), M = v.bind(null, "\u0433\u043E\u0434", "%s \u0433\u043E\u0434", "%s \u0433\u0430\u0434\u044B", "%s \u0433\u0430\u0434\u043E\u045E");
        function q(s2) {
          var n2 = ["\u06F0", "\u06F1", "\u06F2", "\u06F3", "\u06F4", "\u06F5", "\u06F6", "\u06F7", "\u06F8", "\u06F9"];
          return s2.toString().replace(/\d/g, function(s3) {
            return n2[s3];
          });
        }
        var S = [["w tej chwili", "za chwil\u0119"], ["%s sekund temu", "za %s sekund"], ["1 minut\u0119 temu", "za 1 minut\u0119"], ["%s minut temu", "za %s minut"], ["1 godzin\u0119 temu", "za 1 godzin\u0119"], ["%s godzin temu", "za %s godzin"], ["1 dzie\u0144 temu", "za 1 dzie\u0144"], ["%s dni temu", "za %s dni"], ["1 tydzie\u0144 temu", "za 1 tydzie\u0144"], ["%s tygodni temu", "za %s tygodni"], ["1 miesi\u0105c temu", "za 1 miesi\u0105c"], ["%s miesi\u0119cy temu", "za %s miesi\u0119cy"], ["1 rok temu", "za 1 rok"], ["%s lat temu", "za %s lat"], ["%s sekundy temu", "za %s sekundy"], ["%s minuty temu", "za %s minuty"], ["%s godziny temu", "za %s godziny"], ["%s dni temu", "za %s dni"], ["%s tygodnie temu", "za %s tygodnie"], ["%s miesi\u0105ce temu", "za %s miesi\u0105ce"], ["%s lata temu", "za %s lata"]];
        function T(s2, n2, e2, a2, t2) {
          var u2 = t2 % 10, r2 = a2;
          return t2 === 1 ? r2 = s2 : u2 == 1 && 20 < t2 ? r2 = n2 : 1 < u2 && u2 < 5 && (20 < t2 || t2 < 10) && (r2 = e2), r2;
        }
        var N = T.bind(null, "\u0441\u0435\u043A\u0443\u043D\u0434\u0443", "%s \u0441\u0435\u043A\u0443\u043D\u0434\u0443", "%s \u0441\u0435\u043A\u0443\u043D\u0434\u044B", "%s \u0441\u0435\u043A\u0443\u043D\u0434"), x = T.bind(null, "\u043C\u0438\u043D\u0443\u0442\u0443", "%s \u043C\u0438\u043D\u0443\u0442\u0443", "%s \u043C\u0438\u043D\u0443\u0442\u044B", "%s \u043C\u0438\u043D\u0443\u0442"), D = T.bind(null, "\u0447\u0430\u0441", "%s \u0447\u0430\u0441", "%s \u0447\u0430\u0441\u0430", "%s \u0447\u0430\u0441\u043E\u0432"), I = T.bind(null, "\u0434\u0435\u043D\u044C", "%s \u0434\u0435\u043D\u044C", "%s \u0434\u043D\u044F", "%s \u0434\u043D\u0435\u0439"), O = T.bind(null, "\u043D\u0435\u0434\u0435\u043B\u044E", "%s \u043D\u0435\u0434\u0435\u043B\u044E", "%s \u043D\u0435\u0434\u0435\u043B\u0438", "%s \u043D\u0435\u0434\u0435\u043B\u044C"), W = T.bind(null, "\u043C\u0435\u0441\u044F\u0446", "%s \u043C\u0435\u0441\u044F\u0446", "%s \u043C\u0435\u0441\u044F\u0446\u0430", "%s \u043C\u0435\u0441\u044F\u0446\u0435\u0432"), $ = T.bind(null, "\u0433\u043E\u0434", "%s \u0433\u043E\u0434", "%s \u0433\u043E\u0434\u0430", "%s \u043B\u0435\u0442");
        function J(s2, n2, e2, a2, t2) {
          var u2 = t2 % 10, r2 = t2 % 100;
          return t2 == 1 ? s2 : u2 == 1 && r2 != 11 ? n2 : 2 <= u2 && u2 <= 4 && !(12 <= r2 && r2 <= 14) ? e2 : a2;
        }
        var U = J.bind(null, "1 \u0441\u0435\u043A\u0443\u043D\u0434", "%s \u0441\u0435\u043A\u0443\u043D\u0434", "%s \u0441\u0435\u043A\u0443\u043D\u0434\u0435", "%s \u0441\u0435\u043A\u0443\u043D\u0434\u0438"), A = J.bind(null, "1 \u043C\u0438\u043D\u0443\u0442", "%s \u043C\u0438\u043D\u0443\u0442", "%s \u043C\u0438\u043D\u0443\u0442\u0435", "%s \u043C\u0438\u043D\u0443\u0442\u0430"), C = J.bind(null, "\u0441\u0430\u0442 \u0432\u0440\u0435\u043C\u0435\u043D\u0430", "%s \u0441\u0430\u0442", "%s \u0441\u0430\u0442\u0430", "%s \u0441\u0430\u0442\u0438"), E = J.bind(null, "1 \u0434\u0430\u043D", "%s \u0434\u0430\u043D", "%s \u0434\u0430\u043D\u0430", "%s \u0434\u0430\u043D\u0430"), B = J.bind(null, "\u043D\u0435\u0434\u0435\u0459\u0443 \u0434\u0430\u043D\u0430", "%s \u043D\u0435\u0434\u0435\u0459\u0443", "%s \u043D\u0435\u0434\u0435\u0459\u0435", "%s \u043D\u0435\u0434\u0435\u0459\u0430"), P = J.bind(null, "\u043C\u0435\u0441\u0435\u0446 \u0434\u0430\u043D\u0430", "%s \u043C\u0435\u0441\u0435\u0446", "%s \u043C\u0435\u0441\u0435\u0446\u0430", "%s \u043C\u0435\u0441\u0435\u0446\u0438"), R = J.bind(null, "\u0433\u043E\u0434\u0438\u043D\u0443 \u0434\u0430\u043D\u0430", "%s \u0433\u043E\u0434\u0438\u043D\u0443", "%s \u0433\u043E\u0434\u0438\u043D\u0435", "%s \u0433\u043E\u0434\u0438\u043D\u0430");
        function Z(s2, n2, e2, a2, t2) {
          var u2 = t2 % 10, r2 = a2;
          return t2 === 1 ? r2 = s2 : u2 == 1 && 20 < t2 ? r2 = n2 : 1 < u2 && u2 < 5 && (20 < t2 || t2 < 10) && (r2 = e2), r2;
        }
        var F = Z.bind(null, "\u0441\u0435\u043A\u0443\u043D\u0434\u0443", "%s \u0441\u0435\u043A\u0443\u043D\u0434\u0443", "%s \u0441\u0435\u043A\u0443\u043D\u0434\u0438", "%s \u0441\u0435\u043A\u0443\u043D\u0434"), G = Z.bind(null, "\u0445\u0432\u0438\u043B\u0438\u043D\u0443", "%s \u0445\u0432\u0438\u043B\u0438\u043D\u0443", "%s \u0445\u0432\u0438\u043B\u0438\u043D\u0438", "%s \u0445\u0432\u0438\u043B\u0438\u043D"), H = Z.bind(null, "\u0433\u043E\u0434\u0438\u043D\u0443", "%s \u0433\u043E\u0434\u0438\u043D\u0443", "%s \u0433\u043E\u0434\u0438\u043D\u0438", "%s \u0433\u043E\u0434\u0438\u043D"), K = Z.bind(null, "\u0434\u0435\u043D\u044C", "%s \u0434\u0435\u043D\u044C", "%s \u0434\u043D\u0456", "%s \u0434\u043D\u0456\u0432"), L = Z.bind(null, "\u0442\u0438\u0436\u0434\u0435\u043D\u044C", "%s \u0442\u0438\u0436\u0434\u0435\u043D\u044C", "%s \u0442\u0438\u0436\u0434\u043D\u0456", "%s \u0442\u0438\u0436\u0434\u043D\u0456\u0432"), Q = Z.bind(null, "\u043C\u0456\u0441\u044F\u0446\u044C", "%s \u043C\u0456\u0441\u044F\u0446\u044C", "%s \u043C\u0456\u0441\u044F\u0446\u0456", "%s \u043C\u0456\u0441\u044F\u0446\u0456\u0432"), V = Z.bind(null, "\u0440\u0456\u043A", "%s \u0440\u0456\u043A", "%s \u0440\u043E\u043A\u0438", "%s \u0440\u043E\u043A\u0456\u0432");
        var X = Object.freeze({
          __proto__: null,
          ar: function ar(s2, n2) {
            if (n2 === 0)
              return ["\u0645\u0646\u0630 \u0644\u062D\u0638\u0627\u062A", "\u0628\u0639\u062F \u0644\u062D\u0638\u0627\u062A"];
            var e2, a2, t2 = (e2 = Math.floor(n2 / 2), (a2 = s2) < 3 ? b[e2][a2 - 1] : 3 <= a2 && a2 <= 10 ? b[e2][2] : b[e2][3]);
            return ["\u0645\u0646\u0630 " + t2, "\u0628\u0639\u062F " + t2];
          },
          be: function be(s2, n2) {
            switch (n2) {
              case 0:
                return ["\u0442\u043E\u043B\u044C\u043A\u0456 \u0448\u0442\u043E", "\u043F\u0440\u0430\u0437 \u043D\u0435\u043A\u0430\u043B\u044C\u043A\u0456 \u0441\u0435\u043A\u0443\u043D\u0434"];
              case 1:
                return [y(s2) + " \u0442\u0430\u043C\u0443", "\u043F\u0440\u0430\u0437 " + y(s2)];
              case 2:
              case 3:
                return [k(s2) + " \u0442\u0430\u043C\u0443", "\u043F\u0440\u0430\u0437 " + k(s2)];
              case 4:
              case 5:
                return [j(s2) + " \u0442\u0430\u043C\u0443", "\u043F\u0440\u0430\u0437 " + j(s2)];
              case 6:
              case 7:
                return [z(s2) + " \u0442\u0430\u043C\u0443", "\u043F\u0440\u0430\u0437 " + z(s2)];
              case 8:
              case 9:
                return [w(s2) + " \u0442\u0430\u043C\u0443", "\u043F\u0440\u0430\u0437 " + w(s2)];
              case 10:
              case 11:
                return [_(s2) + " \u0442\u0430\u043C\u0443", "\u043F\u0440\u0430\u0437 " + _(s2)];
              case 12:
              case 13:
                return [M(s2) + " \u0442\u0430\u043C\u0443", "\u043F\u0440\u0430\u0437 " + M(s2)];
              default:
                return ["", ""];
            }
          },
          bg: function bg(s2, n2) {
            return [["\u0442\u043E\u043A\u0443 \u0449\u043E", "\u0441\u044A\u0432\u0441\u0435\u043C \u0441\u043A\u043E\u0440\u043E"], ["\u043F\u0440\u0435\u0434\u0438 %s \u0441\u0435\u043A\u0443\u043D\u0434\u0438", "\u0441\u043B\u0435\u0434 %s \u0441\u0435\u043A\u0443\u043D\u0434\u0438"], ["\u043F\u0440\u0435\u0434\u0438 1 \u043C\u0438\u043D\u0443\u0442\u0430", "\u0441\u043B\u0435\u0434 1 \u043C\u0438\u043D\u0443\u0442\u0430"], ["\u043F\u0440\u0435\u0434\u0438 %s \u043C\u0438\u043D\u0443\u0442\u0438", "\u0441\u043B\u0435\u0434 %s \u043C\u0438\u043D\u0443\u0442\u0438"], ["\u043F\u0440\u0435\u0434\u0438 1 \u0447\u0430\u0441", "\u0441\u043B\u0435\u0434 1 \u0447\u0430\u0441"], ["\u043F\u0440\u0435\u0434\u0438 %s \u0447\u0430\u0441\u0430", "\u0441\u043B\u0435\u0434 %s \u0447\u0430\u0441\u0430"], ["\u043F\u0440\u0435\u0434\u0438 1 \u0434\u0435\u043D", "\u0441\u043B\u0435\u0434 1 \u0434\u0435\u043D"], ["\u043F\u0440\u0435\u0434\u0438 %s \u0434\u043D\u0438", "\u0441\u043B\u0435\u0434 %s \u0434\u043D\u0438"], ["\u043F\u0440\u0435\u0434\u0438 1 \u0441\u0435\u0434\u043C\u0438\u0446\u0430", "\u0441\u043B\u0435\u0434 1 \u0441\u0435\u0434\u043C\u0438\u0446\u0430"], ["\u043F\u0440\u0435\u0434\u0438 %s \u0441\u0435\u0434\u043C\u0438\u0446\u0438", "\u0441\u043B\u0435\u0434 %s \u0441\u0435\u0434\u043C\u0438\u0446\u0438"], ["\u043F\u0440\u0435\u0434\u0438 1 \u043C\u0435\u0441\u0435\u0446", "\u0441\u043B\u0435\u0434 1 \u043C\u0435\u0441\u0435\u0446"], ["\u043F\u0440\u0435\u0434\u0438 %s \u043C\u0435\u0441\u0435\u0446\u0430", "\u0441\u043B\u0435\u0434 %s \u043C\u0435\u0441\u0435\u0446\u0430"], ["\u043F\u0440\u0435\u0434\u0438 1 \u0433\u043E\u0434\u0438\u043D\u0430", "\u0441\u043B\u0435\u0434 1 \u0433\u043E\u0434\u0438\u043D\u0430"], ["\u043F\u0440\u0435\u0434\u0438 %s \u0433\u043E\u0434\u0438\u043D\u0438", "\u0441\u043B\u0435\u0434 %s \u0433\u043E\u0434\u0438\u043D\u0438"]][n2];
          },
          bn_IN: function bn_IN(s2, n2) {
            return [["\u098F\u0987\u09AE\u09BE\u09A4\u09CD\u09B0", "\u098F\u0995\u099F\u09BE \u09B8\u09AE\u09AF\u09BC"], ["%s \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1 \u0986\u0997\u09C7", "%s \u098F\u09B0 \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7"], ["1 \u09AE\u09BF\u09A8\u09BF\u099F \u0986\u0997\u09C7", "1 \u09AE\u09BF\u09A8\u09BF\u099F\u09C7"], ["%s \u098F\u09B0 \u09AE\u09BF\u09A8\u09BF\u099F \u0986\u0997\u09C7", "%s \u098F\u09B0 \u09AE\u09BF\u09A8\u09BF\u099F\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7"], ["1 \u0998\u09A8\u09CD\u099F\u09BE \u0986\u0997\u09C7", "1 \u0998\u09A8\u09CD\u099F\u09BE"], ["%s \u0998\u09A3\u09CD\u099F\u09BE \u0986\u0997\u09C7", "%s \u098F\u09B0 \u0998\u09A8\u09CD\u099F\u09BE\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7"], ["1 \u09A6\u09BF\u09A8 \u0986\u0997\u09C7", "1 \u09A6\u09BF\u09A8\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7"], ["%s \u098F\u09B0 \u09A6\u09BF\u09A8 \u0986\u0997\u09C7", "%s \u098F\u09B0 \u09A6\u09BF\u09A8"], ["1 \u09B8\u09AA\u09CD\u09A4\u09BE\u09B9 \u0986\u0997\u09C7", "1 \u09B8\u09AA\u09CD\u09A4\u09BE\u09B9\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7"], ["%s \u098F\u09B0 \u09B8\u09AA\u09CD\u09A4\u09BE\u09B9 \u0986\u0997\u09C7", "%s \u09B8\u09AA\u09CD\u09A4\u09BE\u09B9\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7"], ["1 \u09AE\u09BE\u09B8 \u0986\u0997\u09C7", "1 \u09AE\u09BE\u09B8\u09C7"], ["%s \u09AE\u09BE\u09B8 \u0986\u0997\u09C7", "%s \u09AE\u09BE\u09B8\u09C7"], ["1 \u09AC\u099B\u09B0 \u0986\u0997\u09C7", "1 \u09AC\u099B\u09B0\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7"], ["%s \u09AC\u099B\u09B0 \u0986\u0997\u09C7", "%s \u09AC\u099B\u09B0\u09C7"]][n2];
          },
          ca: function ca(s2, n2) {
            return [["fa un moment", "d'aqu\xED un moment"], ["fa %s segons", "d'aqu\xED %s segons"], ["fa 1 minut", "d'aqu\xED 1 minut"], ["fa %s minuts", "d'aqu\xED %s minuts"], ["fa 1 hora", "d'aqu\xED 1 hora"], ["fa %s hores", "d'aqu\xED %s hores"], ["fa 1 dia", "d'aqu\xED 1 dia"], ["fa %s dies", "d'aqu\xED %s dies"], ["fa 1 setmana", "d'aqu\xED 1 setmana"], ["fa %s setmanes", "d'aqu\xED %s setmanes"], ["fa 1 mes", "d'aqu\xED 1 mes"], ["fa %s mesos", "d'aqu\xED %s mesos"], ["fa 1 any", "d'aqu\xED 1 any"], ["fa %s anys", "d'aqu\xED %s anys"]][n2];
          },
          de: function de(s2, n2) {
            return [["gerade eben", "vor einer Weile"], ["vor %s Sekunden", "in %s Sekunden"], ["vor 1 Minute", "in 1 Minute"], ["vor %s Minuten", "in %s Minuten"], ["vor 1 Stunde", "in 1 Stunde"], ["vor %s Stunden", "in %s Stunden"], ["vor 1 Tag", "in 1 Tag"], ["vor %s Tagen", "in %s Tagen"], ["vor 1 Woche", "in 1 Woche"], ["vor %s Wochen", "in %s Wochen"], ["vor 1 Monat", "in 1 Monat"], ["vor %s Monaten", "in %s Monaten"], ["vor 1 Jahr", "in 1 Jahr"], ["vor %s Jahren", "in %s Jahren"]][n2];
          },
          el: function el(s2, n2) {
            return [["\u03BC\u03CC\u03BB\u03B9\u03C2 \u03C4\u03CE\u03C1\u03B1", "\u03C3\u03B5 \u03BB\u03AF\u03B3\u03BF"], ["%s \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1 \u03C0\u03C1\u03B9\u03BD", "\u03C3\u03B5 %s \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1"], ["1 \u03BB\u03B5\u03C0\u03C4\u03CC \u03C0\u03C1\u03B9\u03BD", "\u03C3\u03B5 1 \u03BB\u03B5\u03C0\u03C4\u03CC"], ["%s \u03BB\u03B5\u03C0\u03C4\u03AC \u03C0\u03C1\u03B9\u03BD", "\u03C3\u03B5 %s \u03BB\u03B5\u03C0\u03C4\u03AC"], ["1 \u03CE\u03C1\u03B1 \u03C0\u03C1\u03B9\u03BD", "\u03C3\u03B5 1 \u03CE\u03C1\u03B1"], ["%s \u03CE\u03C1\u03B5\u03C2 \u03C0\u03C1\u03B9\u03BD", "\u03C3\u03B5 %s \u03CE\u03C1\u03B5\u03C2"], ["1 \u03BC\u03AD\u03C1\u03B1 \u03C0\u03C1\u03B9\u03BD", "\u03C3\u03B5 1 \u03BC\u03AD\u03C1\u03B1"], ["%s \u03BC\u03AD\u03C1\u03B5\u03C2 \u03C0\u03C1\u03B9\u03BD", "\u03C3\u03B5 %s \u03BC\u03AD\u03C1\u03B5\u03C2"], ["1 \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1 \u03C0\u03C1\u03B9\u03BD", "\u03C3\u03B5 1 \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1"], ["%s \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B5\u03C2 \u03C0\u03C1\u03B9\u03BD", "\u03C3\u03B5 %s \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B5\u03C2"], ["1 \u03BC\u03AE\u03BD\u03B1 \u03C0\u03C1\u03B9\u03BD", "\u03C3\u03B5 1 \u03BC\u03AE\u03BD\u03B1"], ["%s \u03BC\u03AE\u03BD\u03B5\u03C2 \u03C0\u03C1\u03B9\u03BD", "\u03C3\u03B5 %s \u03BC\u03AE\u03BD\u03B5\u03C2"], ["1 \u03C7\u03C1\u03CC\u03BD\u03BF \u03C0\u03C1\u03B9\u03BD", "\u03C3\u03B5 1 \u03C7\u03C1\u03CC\u03BD\u03BF"], ["%s \u03C7\u03C1\u03CC\u03BD\u03B9\u03B1 \u03C0\u03C1\u03B9\u03BD", "\u03C3\u03B5 %s \u03C7\u03C1\u03CC\u03BD\u03B9\u03B1"]][n2];
          },
          en_short: function en_short(s2, n2) {
            return [["just now", "right now"], ["%ss ago", "in %ss"], ["1m ago", "in 1m"], ["%sm ago", "in %sm"], ["1h ago", "in 1h"], ["%sh ago", "in %sh"], ["1d ago", "in 1d"], ["%sd ago", "in %sd"], ["1w ago", "in 1w"], ["%sw ago", "in %sw"], ["1mo ago", "in 1mo"], ["%smo ago", "in %smo"], ["1yr ago", "in 1yr"], ["%syr ago", "in %syr"]][n2];
          },
          en_US: n,
          es: function es(s2, n2) {
            return [["justo ahora", "en un rato"], ["hace %s segundos", "en %s segundos"], ["hace 1 minuto", "en 1 minuto"], ["hace %s minutos", "en %s minutos"], ["hace 1 hora", "en 1 hora"], ["hace %s horas", "en %s horas"], ["hace 1 d\xEDa", "en 1 d\xEDa"], ["hace %s d\xEDas", "en %s d\xEDas"], ["hace 1 semana", "en 1 semana"], ["hace %s semanas", "en %s semanas"], ["hace 1 mes", "en 1 mes"], ["hace %s meses", "en %s meses"], ["hace 1 a\xF1o", "en 1 a\xF1o"], ["hace %s a\xF1os", "en %s a\xF1os"]][n2];
          },
          eu: function eu(s2, n2) {
            return [["orain", "denbora bat barru"], ["duela %s segundu", "%s segundu barru"], ["duela minutu 1", "minutu 1 barru"], ["duela %s minutu", "%s minutu barru"], ["duela ordu 1", "ordu 1 barru"], ["duela %s ordu", "%s ordu barru"], ["duela egun 1", "egun 1 barru"], ["duela %s egun", "%s egun barru"], ["duela aste 1", "aste 1 barru"], ["duela %s aste", "%s aste barru"], ["duela hillabete 1", "hillabete 1 barru"], ["duela %s hillabete", "%s hillabete barru"], ["duela urte 1", "urte 1 barru"], ["duela %s urte", "%s urte barru"]][n2];
          },
          fa: function fa(s2, n2) {
            var e2 = [["\u0644\u062D\u0638\u0627\u062A\u06CC \u067E\u06CC\u0634", "\u0647\u0645\u06CC\u0646 \u062D\u0627\u0644\u0627"], ["%s \u062B\u0627\u0646\u06CC\u0647 \u067E\u06CC\u0634", "%s \u062B\u0627\u0646\u06CC\u0647 \u062F\u06CC\u06AF\u0631"], ["\u06F1 \u062F\u0642\u06CC\u0642\u0647 \u067E\u06CC\u0634", "\u06F1 \u062F\u0642\u06CC\u0642\u0647 \u062F\u06CC\u06AF\u0631"], ["%s \u062F\u0642\u06CC\u0642\u0647 \u067E\u06CC\u0634", "%s \u062F\u0642\u06CC\u0642\u0647 \u062F\u06CC\u06AF\u0631"], ["\u06F1 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634", "\u06F1 \u0633\u0627\u0639\u062A \u062F\u06CC\u06AF\u0631"], ["%s \u0633\u0627\u0639\u062A \u067E\u06CC\u0634", "%s \u0633\u0627\u0639\u062A \u062F\u06CC\u06AF\u0631"], ["\u06F1 \u0631\u0648\u0632 \u067E\u06CC\u0634", "\u06F1 \u0631\u0648\u0632 \u062F\u06CC\u06AF\u0631"], ["%s \u0631\u0648\u0632 \u067E\u06CC\u0634", "%s \u0631\u0648\u0632 \u062F\u06CC\u06AF\u0631"], ["\u06F1 \u0647\u0641\u062A\u0647 \u067E\u06CC\u0634", "\u06F1 \u0647\u0641\u062A\u0647 \u062F\u06CC\u06AF\u0631"], ["%s \u0647\u0641\u062A\u0647 \u067E\u06CC\u0634", "%s \u0647\u0641\u062A\u0647 \u062F\u06CC\u06AF\u0631"], ["\u06F1 \u0645\u0627\u0647 \u067E\u06CC\u0634", "\u06F1 \u0645\u0627\u0647 \u062F\u06CC\u06AF\u0631"], ["%s \u0645\u0627\u0647 \u067E\u06CC\u0634", "%s \u0645\u0627\u0647 \u062F\u06CC\u06AF\u0631"], ["\u06F1 \u0633\u0627\u0644 \u067E\u06CC\u0634", "\u06F1 \u0633\u0627\u0644 \u062F\u06CC\u06AF\u0631"], ["%s \u0633\u0627\u0644 \u067E\u06CC\u0634", "%s \u0633\u0627\u0644 \u062F\u06CC\u06AF\u0631"]][n2];
            return [e2[0].replace("%s", q(s2)), e2[1].replace("%s", q(s2))];
          },
          fi: function fi(s2, n2) {
            return [["juuri \xE4sken", "juuri nyt"], ["%s sekuntia sitten", "%s sekunnin p\xE4\xE4st\xE4"], ["minuutti sitten", "minuutin p\xE4\xE4st\xE4"], ["%s minuuttia sitten", "%s minuutin p\xE4\xE4st\xE4"], ["tunti sitten", "tunnin p\xE4\xE4st\xE4"], ["%s tuntia sitten", "%s tunnin p\xE4\xE4st\xE4"], ["p\xE4iv\xE4 sitten", "p\xE4iv\xE4n p\xE4\xE4st\xE4"], ["%s p\xE4iv\xE4\xE4 sitten", "%s p\xE4iv\xE4n p\xE4\xE4st\xE4"], ["viikko sitten", "viikon p\xE4\xE4st\xE4"], ["%s viikkoa sitten", "%s viikon p\xE4\xE4st\xE4"], ["kuukausi sitten", "kuukauden p\xE4\xE4st\xE4"], ["%s kuukautta sitten", "%s kuukauden p\xE4\xE4st\xE4"], ["vuosi sitten", "vuoden p\xE4\xE4st\xE4"], ["%s vuotta sitten", "%s vuoden p\xE4\xE4st\xE4"]][n2];
          },
          fr: function fr(s2, n2) {
            return [["\xE0 l'instant", "dans un instant"], ["il y a %s secondes", "dans %s secondes"], ["il y a 1 minute", "dans 1 minute"], ["il y a %s minutes", "dans %s minutes"], ["il y a 1 heure", "dans 1 heure"], ["il y a %s heures", "dans %s heures"], ["il y a 1 jour", "dans 1 jour"], ["il y a %s jours", "dans %s jours"], ["il y a 1 semaine", "dans 1 semaine"], ["il y a %s semaines", "dans %s semaines"], ["il y a 1 mois", "dans 1 mois"], ["il y a %s mois", "dans %s mois"], ["il y a 1 an", "dans 1 an"], ["il y a %s ans", "dans %s ans"]][n2];
          },
          gl: function gl(s2, n2) {
            return [["xusto agora", "daqu\xED a un pouco"], ["hai %s segundos", "en %s segundos"], ["hai 1 minuto", "nun minuto"], ["hai %s minutos", "en %s minutos"], ["hai 1 hora", "nunha hora"], ["hai %s horas", "en %s horas"], ["hai 1 d\xEDa", "nun d\xEDa"], ["hai %s d\xEDas", "en %s d\xEDas"], ["hai 1 semana", "nunha semana"], ["hai %s semanas", "en %s semanas"], ["hai 1 mes", "nun mes"], ["hai %s meses", "en %s meses"], ["hai 1 ano", "nun ano"], ["hai %s anos", "en %s anos"]][n2];
          },
          he: function he(s2, n2) {
            return [["\u05D6\u05D4 \u05E2\u05EA\u05D4", "\u05E2\u05DB\u05E9\u05D9\u05D5"], ["\u05DC\u05E4\u05E0\u05D9 %s \u05E9\u05E0\u05D9\u05D5\u05EA", "\u05D1\u05E2\u05D5\u05D3 %s \u05E9\u05E0\u05D9\u05D5\u05EA"], ["\u05DC\u05E4\u05E0\u05D9 \u05D3\u05E7\u05D4", "\u05D1\u05E2\u05D5\u05D3 \u05D3\u05E7\u05D4"], ["\u05DC\u05E4\u05E0\u05D9 %s \u05D3\u05E7\u05D5\u05EA", "\u05D1\u05E2\u05D5\u05D3 %s \u05D3\u05E7\u05D5\u05EA"], ["\u05DC\u05E4\u05E0\u05D9 \u05E9\u05E2\u05D4", "\u05D1\u05E2\u05D5\u05D3 \u05E9\u05E2\u05D4"], s2 === 2 ? ["\u05DC\u05E4\u05E0\u05D9 \u05E9\u05E2\u05EA\u05D9\u05D9\u05DD", "\u05D1\u05E2\u05D5\u05D3 \u05E9\u05E2\u05EA\u05D9\u05D9\u05DD"] : ["\u05DC\u05E4\u05E0\u05D9 %s \u05E9\u05E2\u05D5\u05EA", "\u05D1\u05E2\u05D5\u05D3 %s \u05E9\u05E2\u05D5\u05EA"], ["\u05D0\u05EA\u05DE\u05D5\u05DC", "\u05DE\u05D7\u05E8"], s2 === 2 ? ["\u05DC\u05E4\u05E0\u05D9 \u05D9\u05D5\u05DE\u05D9\u05D9\u05DD", "\u05D1\u05E2\u05D5\u05D3 \u05D9\u05D5\u05DE\u05D9\u05D9\u05DD"] : ["\u05DC\u05E4\u05E0\u05D9 %s \u05D9\u05DE\u05D9\u05DD", "\u05D1\u05E2\u05D5\u05D3 %s \u05D9\u05DE\u05D9\u05DD"], ["\u05DC\u05E4\u05E0\u05D9 \u05E9\u05D1\u05D5\u05E2", "\u05D1\u05E2\u05D5\u05D3 \u05E9\u05D1\u05D5\u05E2"], s2 === 2 ? ["\u05DC\u05E4\u05E0\u05D9 \u05E9\u05D1\u05D5\u05E2\u05D9\u05D9\u05DD", "\u05D1\u05E2\u05D5\u05D3 \u05E9\u05D1\u05D5\u05E2\u05D9\u05D9\u05DD"] : ["\u05DC\u05E4\u05E0\u05D9 %s \u05E9\u05D1\u05D5\u05E2\u05D5\u05EA", "\u05D1\u05E2\u05D5\u05D3 %s \u05E9\u05D1\u05D5\u05E2\u05D5\u05EA"], ["\u05DC\u05E4\u05E0\u05D9 \u05D7\u05D5\u05D3\u05E9", "\u05D1\u05E2\u05D5\u05D3 \u05D7\u05D5\u05D3\u05E9"], s2 === 2 ? ["\u05DC\u05E4\u05E0\u05D9 \u05D7\u05D5\u05D3\u05E9\u05D9\u05D9\u05DD", "\u05D1\u05E2\u05D5\u05D3 \u05D7\u05D5\u05D3\u05E9\u05D9\u05D9\u05DD"] : ["\u05DC\u05E4\u05E0\u05D9 %s \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD", "\u05D1\u05E2\u05D5\u05D3 %s \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD"], ["\u05DC\u05E4\u05E0\u05D9 \u05E9\u05E0\u05D4", "\u05D1\u05E2\u05D5\u05D3 \u05E9\u05E0\u05D4"], s2 === 2 ? ["\u05DC\u05E4\u05E0\u05D9 \u05E9\u05E0\u05EA\u05D9\u05D9\u05DD", "\u05D1\u05E2\u05D5\u05D3 \u05E9\u05E0\u05EA\u05D9\u05D9\u05DD"] : ["\u05DC\u05E4\u05E0\u05D9 %s \u05E9\u05E0\u05D9\u05DD", "\u05D1\u05E2\u05D5\u05D3 %s \u05E9\u05E0\u05D9\u05DD"]][n2];
          },
          hi_IN: function hi_IN(s2, n2) {
            return [["\u0905\u092D\u0940", "\u0915\u0941\u091B \u0938\u092E\u092F"], ["%s \u0938\u0947\u0915\u0902\u0921 \u092A\u0939\u0932\u0947", "%s \u0938\u0947\u0915\u0902\u0921 \u092E\u0947\u0902"], ["1 \u092E\u093F\u0928\u091F \u092A\u0939\u0932\u0947", "1 \u092E\u093F\u0928\u091F \u092E\u0947\u0902"], ["%s \u092E\u093F\u0928\u091F \u092A\u0939\u0932\u0947", "%s \u092E\u093F\u0928\u091F \u092E\u0947\u0902"], ["1 \u0918\u0902\u091F\u0947 \u092A\u0939\u0932\u0947", "1 \u0918\u0902\u091F\u0947 \u092E\u0947\u0902"], ["%s \u0918\u0902\u091F\u0947 \u092A\u0939\u0932\u0947", "%s \u0918\u0902\u091F\u0947 \u092E\u0947\u0902"], ["1 \u0926\u093F\u0928 \u092A\u0939\u0932\u0947", "1 \u0926\u093F\u0928 \u092E\u0947\u0902"], ["%s \u0926\u093F\u0928 \u092A\u0939\u0932\u0947", "%s \u0926\u093F\u0928\u094B\u0902 \u092E\u0947\u0902"], ["1 \u0938\u092A\u094D\u0924\u093E\u0939 \u092A\u0939\u0932\u0947", "1 \u0938\u092A\u094D\u0924\u093E\u0939 \u092E\u0947\u0902"], ["%s \u0939\u092B\u094D\u0924\u0947 \u092A\u0939\u0932\u0947", "%s \u0939\u092B\u094D\u0924\u094B\u0902 \u092E\u0947\u0902"], ["1 \u092E\u0939\u0940\u0928\u0947 \u092A\u0939\u0932\u0947", "1 \u092E\u0939\u0940\u0928\u0947 \u092E\u0947\u0902"], ["%s \u092E\u0939\u0940\u0928\u0947 \u092A\u0939\u0932\u0947", "%s \u092E\u0939\u0940\u0928\u094B\u0902 \u092E\u0947\u0902"], ["1 \u0938\u093E\u0932 \u092A\u0939\u0932\u0947", "1 \u0938\u093E\u0932 \u092E\u0947\u0902"], ["%s \u0938\u093E\u0932 \u092A\u0939\u0932\u0947", "%s \u0938\u093E\u0932 \u092E\u0947\u0902"]][n2];
          },
          hu: function hu(s2, n2) {
            return [["\xE9ppen most", "\xE9ppen most"], ["%s m\xE1sodperce", "%s m\xE1sodpercen bel\xFCl"], ["1 perce", "1 percen bel\xFCl"], ["%s perce", "%s percen bel\xFCl"], ["1 \xF3r\xE1ja", "1 \xF3r\xE1n bel\xFCl"], ["%s \xF3r\xE1ja", "%s \xF3r\xE1n bel\xFCl"], ["1 napja", "1 napon bel\xFCl"], ["%s napja", "%s napon bel\xFCl"], ["1 hete", "1 h\xE9ten bel\xFCl"], ["%s hete", "%s h\xE9ten bel\xFCl"], ["1 h\xF3napja", "1 h\xF3napon bel\xFCl"], ["%s h\xF3napja", "%s h\xF3napon bel\xFCl"], ["1 \xE9ve", "1 \xE9ven bel\xFCl"], ["%s \xE9ve", "%s \xE9ven bel\xFCl"]][n2];
          },
          id_ID: function id_ID(s2, n2) {
            return [["baru saja", "sebentar"], ["%s detik yang lalu", "dalam %s detik"], ["1 menit yang lalu", "dalam 1 menit"], ["%s menit yang lalu", "dalam %s menit"], ["1 jam yang lalu", "dalam 1 jam"], ["%s jam yang lalu", "dalam %s jam"], ["1 hari yang lalu", "dalam 1 hari"], ["%s hari yang lalu", "dalam %s hari"], ["1 minggu yang lalu", "dalam 1 minggu"], ["%s minggu yang lalu", "dalam %s minggu"], ["1 bulan yang lalu", "dalam 1 bulan"], ["%s bulan yang lalu", "dalam %s bulan"], ["1 tahun yang lalu", "dalam 1 tahun"], ["%s tahun yang lalu", "dalam %s tahun"]][n2];
          },
          it: function it(s2, n2) {
            return [["poco fa", "fra poco"], ["%s secondi fa", "fra %s secondi"], ["un minuto fa", "fra un minuto"], ["%s minuti fa", "fra %s minuti"], ["un'ora fa", "fra un'ora"], ["%s ore fa", "fra %s ore"], ["un giorno fa", "fra un giorno"], ["%s giorni fa", "fra %s giorni"], ["una settimana fa", "fra una settimana"], ["%s settimane fa", "fra %s settimane"], ["un mese fa", "fra un mese"], ["%s mesi fa", "fra %s mesi"], ["un anno fa", "fra un anno"], ["%s anni fa", "fra %s anni"]][n2];
          },
          ja: function ja(s2, n2) {
            return [["\u3059\u3053\u3057\u524D", "\u3059\u3050\u306B"], ["%s\u79D2\u524D", "%s\u79D2\u4EE5\u5185"], ["1\u5206\u524D", "1\u5206\u4EE5\u5185"], ["%s\u5206\u524D", "%s\u5206\u4EE5\u5185"], ["1\u6642\u9593\u524D", "1\u6642\u9593\u4EE5\u5185"], ["%s\u6642\u9593\u524D", "%s\u6642\u9593\u4EE5\u5185"], ["1\u65E5\u524D", "1\u65E5\u4EE5\u5185"], ["%s\u65E5\u524D", "%s\u65E5\u4EE5\u5185"], ["1\u9031\u9593\u524D", "1\u9031\u9593\u4EE5\u5185"], ["%s\u9031\u9593\u524D", "%s\u9031\u9593\u4EE5\u5185"], ["1\u30F6\u6708\u524D", "1\u30F6\u6708\u4EE5\u5185"], ["%s\u30F6\u6708\u524D", "%s\u30F6\u6708\u4EE5\u5185"], ["1\u5E74\u524D", "1\u5E74\u4EE5\u5185"], ["%s\u5E74\u524D", "%s\u5E74\u4EE5\u5185"]][n2];
          },
          ko: function ko(s2, n2) {
            return [["\uBC29\uAE08", "\uACE7"], ["%s\uCD08 \uC804", "%s\uCD08 \uD6C4"], ["1\uBD84 \uC804", "1\uBD84 \uD6C4"], ["%s\uBD84 \uC804", "%s\uBD84 \uD6C4"], ["1\uC2DC\uAC04 \uC804", "1\uC2DC\uAC04 \uD6C4"], ["%s\uC2DC\uAC04 \uC804", "%s\uC2DC\uAC04 \uD6C4"], ["1\uC77C \uC804", "1\uC77C \uD6C4"], ["%s\uC77C \uC804", "%s\uC77C \uD6C4"], ["1\uC8FC\uC77C \uC804", "1\uC8FC\uC77C \uD6C4"], ["%s\uC8FC\uC77C \uC804", "%s\uC8FC\uC77C \uD6C4"], ["1\uAC1C\uC6D4 \uC804", "1\uAC1C\uC6D4 \uD6C4"], ["%s\uAC1C\uC6D4 \uC804", "%s\uAC1C\uC6D4 \uD6C4"], ["1\uB144 \uC804", "1\uB144 \uD6C4"], ["%s\uB144 \uC804", "%s\uB144 \uD6C4"]][n2];
          },
          ml: function ml(s2, n2) {
            return [["\u0D07\u0D2A\u0D4D\u0D2A\u0D4B\u0D33\u0D4D\u200D", "\u0D15\u0D41\u0D31\u0D1A\u0D4D\u0D1A\u0D41 \u0D2E\u0D41\u0D28\u0D4D\u200D\u0D2A\u0D4D"], ["%s \u0D38\u0D46\u0D15\u0D4D\u0D15\u0D28\u0D4D\u0D31\u0D4D\u200C\u0D15\u0D33\u0D4D\u200D\u0D15\u0D4D\u0D15\u0D4D \u0D2E\u0D41\u0D28\u0D4D\u200D\u0D2A\u0D4D", "%s \u0D38\u0D46\u0D15\u0D4D\u0D15\u0D28\u0D4D\u0D31\u0D3F\u0D32\u0D4D\u200D"], ["1 \u0D2E\u0D3F\u0D28\u0D3F\u0D31\u0D4D\u0D31\u0D3F\u0D28\u0D41 \u0D2E\u0D41\u0D28\u0D4D\u200D\u0D2A\u0D4D", "1 \u0D2E\u0D3F\u0D28\u0D3F\u0D31\u0D4D\u0D31\u0D3F\u0D32\u0D4D\u200D"], ["%s \u0D2E\u0D3F\u0D28\u0D3F\u0D31\u0D4D\u0D31\u0D41\u0D15\u0D33\u0D4D\u200D\u0D15\u0D4D\u0D15\u0D4D \u0D2E\u0D41\u0D28\u0D4D\u200D\u0D2A", "%s \u0D2E\u0D3F\u0D28\u0D3F\u0D31\u0D4D\u0D31\u0D3F\u0D32\u0D4D\u200D"], ["1 \u0D2E\u0D23\u0D3F\u0D15\u0D4D\u0D15\u0D42\u0D31\u0D3F\u0D28\u0D41 \u0D2E\u0D41\u0D28\u0D4D\u200D\u0D2A\u0D4D", "1 \u0D2E\u0D23\u0D3F\u0D15\u0D4D\u0D15\u0D42\u0D31\u0D3F\u0D32\u0D4D\u200D"], ["%s \u0D2E\u0D23\u0D3F\u0D15\u0D4D\u0D15\u0D42\u0D31\u0D41\u0D15\u0D33\u0D4D\u200D\u0D15\u0D4D\u0D15\u0D41 \u0D2E\u0D41\u0D28\u0D4D\u200D\u0D2A\u0D4D", "%s \u0D2E\u0D23\u0D3F\u0D15\u0D4D\u0D15\u0D42\u0D31\u0D3F\u0D32\u0D4D\u200D"], ["1 \u0D12\u0D30\u0D41 \u0D26\u0D3F\u0D35\u0D38\u0D02 \u0D2E\u0D41\u0D28\u0D4D\u200D\u0D2A\u0D4D", "1 \u0D26\u0D3F\u0D35\u0D38\u0D24\u0D4D\u0D24\u0D3F\u0D32\u0D4D\u200D"], ["%s \u0D26\u0D3F\u0D35\u0D38\u0D19\u0D4D\u0D19\u0D33\u0D4D\u200D\u0D15\u0D4D \u0D2E\u0D41\u0D28\u0D4D\u200D\u0D2A\u0D4D", "%s \u0D26\u0D3F\u0D35\u0D38\u0D19\u0D4D\u0D19\u0D33\u0D4D\u200D\u0D15\u0D4D\u0D15\u0D41\u0D33\u0D4D\u0D33\u0D3F\u0D32\u0D4D\u200D"], ["1 \u0D06\u0D34\u0D4D\u0D1A \u0D2E\u0D41\u0D28\u0D4D\u200D\u0D2A\u0D4D", "1 \u0D06\u0D34\u0D4D\u0D1A\u0D2F\u0D3F\u0D32\u0D4D\u200D"], ["%s \u0D06\u0D34\u0D4D\u0D1A\u0D15\u0D33\u0D4D\u200D\u0D15\u0D4D\u0D15\u0D4D \u0D2E\u0D41\u0D28\u0D4D\u200D\u0D2A\u0D4D", "%s \u0D06\u0D34\u0D4D\u0D1A\u0D15\u0D33\u0D4D\u200D\u0D15\u0D4D\u0D15\u0D41\u0D33\u0D4D\u0D33\u0D3F\u0D32\u0D4D\u200D"], ["1 \u0D2E\u0D3E\u0D38\u0D24\u0D4D\u0D24\u0D3F\u0D28\u0D41 \u0D2E\u0D41\u0D28\u0D4D\u200D\u0D2A\u0D4D", "1 \u0D2E\u0D3E\u0D38\u0D24\u0D4D\u0D24\u0D3F\u0D28\u0D41\u0D33\u0D4D\u0D33\u0D3F\u0D32\u0D4D\u200D"], ["%s \u0D2E\u0D3E\u0D38\u0D19\u0D4D\u0D19\u0D33\u0D4D\u200D\u0D15\u0D4D\u0D15\u0D4D \u0D2E\u0D41\u0D28\u0D4D\u200D\u0D2A\u0D4D", "%s \u0D2E\u0D3E\u0D38\u0D19\u0D4D\u0D19\u0D33\u0D4D\u200D\u0D15\u0D4D\u0D15\u0D41\u0D33\u0D4D\u0D33\u0D3F\u0D32\u0D4D\u200D"], ["1 \u0D35\u0D30\u0D4D\u200D\u0D37\u0D24\u0D4D\u0D24\u0D3F\u0D28\u0D41  \u0D2E\u0D41\u0D28\u0D4D\u200D\u0D2A\u0D4D", "1 \u0D35\u0D30\u0D4D\u200D\u0D37\u0D24\u0D4D\u0D24\u0D3F\u0D28\u0D41\u0D33\u0D4D\u0D33\u0D3F\u0D32\u0D4D\u200D"], ["%s \u0D35\u0D30\u0D4D\u200D\u0D37\u0D19\u0D4D\u0D19\u0D33\u0D4D\u200D\u0D15\u0D4D\u0D15\u0D41 \u0D2E\u0D41\u0D28\u0D4D\u200D\u0D2A\u0D4D", "%s \u0D35\u0D30\u0D4D\u200D\u0D37\u0D19\u0D4D\u0D19\u0D33\u0D4D\u200D\u0D15\u0D4D\u0D15\u0D41\u0D32\u0D4D\u0D32\u0D4D\u0D33\u0D3F\u0D32\u0D4D\u200D"]][n2];
          },
          my: function my(s2, n2) {
            return [["\u101A\u1001\u102F\u1021\u1010\u103D\u1004\u103A\u1038", "\u101A\u1001\u102F"], ["%s \u1005\u1000\u1039\u1000\u1014\u1037\u103A \u1021\u1000\u103C\u102C\u1000", "%s \u1005\u1000\u1039\u1000\u1014\u1037\u103A\u1021\u1010\u103D\u1004\u103A\u1038"], ["1 \u1019\u102D\u1014\u1005\u103A \u1021\u1000\u103C\u102C\u1000", "1 \u1019\u102D\u1014\u1005\u103A\u1021\u1010\u103D\u1004\u103A\u1038"], ["%s \u1019\u102D\u1014\u1005\u103A \u1021\u1000\u103C\u102C\u1000", "%s \u1019\u102D\u1014\u1005\u103A\u1021\u1010\u103D\u1004\u103A\u1038"], ["1 \u1014\u102C\u101B\u102E \u1021\u1000\u103C\u102C\u1000", "1 \u1014\u102C\u101B\u102E\u1021\u1010\u103D\u1004\u103A\u1038"], ["%s \u1014\u102C\u101B\u102E \u1021\u1000\u103C\u102C\u1000", "%s \u1014\u102C\u101B\u102E\u1021\u1010\u103D\u1004\u103A\u1038"], ["1 \u101B\u1000\u103A \u1021\u1000\u103C\u102C\u1000", "1 \u101B\u1000\u103A\u1021\u1010\u103D\u1004\u103A\u1038"], ["%s \u101B\u1000\u103A \u1021\u1000\u103C\u102C\u1000", "%s \u101B\u1000\u103A\u1021\u1010\u103D\u1004\u103A\u1038"], ["1 \u1015\u1010\u103A \u1021\u1000\u103C\u102C\u1000", "1 \u1015\u1010\u103A\u1021\u1010\u103D\u1004\u103A\u1038"], ["%s \u1015\u1010\u103A \u1021\u1000\u103C\u102C\u1000", "%s \u1015\u1010\u103A\u1021\u1010\u103D\u1004\u103A\u1038"], ["1 \u101C \u1021\u1000\u103C\u102C\u1000", "1 \u101C\u1021\u1010\u103D\u1004\u103A\u1038"], ["%s \u101C \u1021\u1000\u103C\u102C\u1000", "%s \u101C\u1021\u1010\u103D\u1004\u103A\u1038"], ["1 \u1014\u103E\u1005\u103A \u1021\u1000\u103C\u102C\u1000", "1 \u1014\u103E\u1005\u103A\u1021\u1010\u103D\u1004\u103A\u1038"], ["%s \u1014\u103E\u1005\u103A \u1021\u1000\u103C\u102C\u1000", "%s \u1014\u103E\u1005\u103A\u1021\u1010\u103D\u1004\u103A\u1038"]][n2];
          },
          nb_NO: function nb_NO(s2, n2) {
            return [["akkurat n\xE5", "om litt"], ["%s sekunder siden", "om %s sekunder"], ["1 minutt siden", "om 1 minutt"], ["%s minutter siden", "om %s minutter"], ["1 time siden", "om 1 time"], ["%s timer siden", "om %s timer"], ["1 dag siden", "om 1 dag"], ["%s dager siden", "om %s dager"], ["1 uke siden", "om 1 uke"], ["%s uker siden", "om %s uker"], ["1 m\xE5ned siden", "om 1 m\xE5ned"], ["%s m\xE5neder siden", "om %s m\xE5neder"], ["1 \xE5r siden", "om 1 \xE5r"], ["%s \xE5r siden", "om %s \xE5r"]][n2];
          },
          nl: function nl(s2, n2) {
            return [["recent", "binnenkort"], ["%s seconden geleden", "binnen %s seconden"], ["1 minuut geleden", "binnen 1 minuut"], ["%s minuten geleden", "binnen %s minuten"], ["1 uur geleden", "binnen 1 uur"], ["%s uur geleden", "binnen %s uur"], ["1 dag geleden", "binnen 1 dag"], ["%s dagen geleden", "binnen %s dagen"], ["1 week geleden", "binnen 1 week"], ["%s weken geleden", "binnen %s weken"], ["1 maand geleden", "binnen 1 maand"], ["%s maanden geleden", "binnen %s maanden"], ["1 jaar geleden", "binnen 1 jaar"], ["%s jaar geleden", "binnen %s jaar"]][n2];
          },
          nn_NO: function nn_NO(s2, n2) {
            return [["nett no", "om litt"], ["%s sekund sidan", "om %s sekund"], ["1 minutt sidan", "om 1 minutt"], ["%s minutt sidan", "om %s minutt"], ["1 time sidan", "om 1 time"], ["%s timar sidan", "om %s timar"], ["1 dag sidan", "om 1 dag"], ["%s dagar sidan", "om %s dagar"], ["1 veke sidan", "om 1 veke"], ["%s veker sidan", "om %s veker"], ["1 m\xE5nad sidan", "om 1 m\xE5nad"], ["%s m\xE5nadar sidan", "om %s m\xE5nadar"], ["1 \xE5r sidan", "om 1 \xE5r"], ["%s \xE5r sidan", "om %s \xE5r"]][n2];
          },
          pl: function pl(s2, n2) {
            return S[1 & n2 ? 4 < s2 % 10 || s2 % 10 < 2 || ~~(s2 / 10) % 10 == 1 ? n2 : ++n2 / 2 + 13 : n2];
          },
          pt_BR: function pt_BR(s2, n2) {
            return [["agora mesmo", "agora"], ["h\xE1 %s segundos", "em %s segundos"], ["h\xE1 um minuto", "em um minuto"], ["h\xE1 %s minutos", "em %s minutos"], ["h\xE1 uma hora", "em uma hora"], ["h\xE1 %s horas", "em %s horas"], ["h\xE1 um dia", "em um dia"], ["h\xE1 %s dias", "em %s dias"], ["h\xE1 uma semana", "em uma semana"], ["h\xE1 %s semanas", "em %s semanas"], ["h\xE1 um m\xEAs", "em um m\xEAs"], ["h\xE1 %s meses", "em %s meses"], ["h\xE1 um ano", "em um ano"], ["h\xE1 %s anos", "em %s anos"]][n2];
          },
          ro: function ro(s2, n2) {
            var e2 = [["chiar acum", "chiar acum"], ["acum %s secunde", "peste %s secunde"], ["acum un minut", "peste un minut"], ["acum %s minute", "peste %s minute"], ["acum o or\u0103", "peste o or\u0103"], ["acum %s ore", "peste %s ore"], ["acum o zi", "peste o zi"], ["acum %s zile", "peste %s zile"], ["acum o s\u0103pt\u0103m\xE2n\u0103", "peste o s\u0103pt\u0103m\xE2n\u0103"], ["acum %s s\u0103pt\u0103m\xE2ni", "peste %s s\u0103pt\u0103m\xE2ni"], ["acum o lun\u0103", "peste o lun\u0103"], ["acum %s luni", "peste %s luni"], ["acum un an", "peste un an"], ["acum %s ani", "peste %s ani"]];
            return s2 < 20 ? e2[n2] : [e2[n2][0].replace("%s", "%s de"), e2[n2][1].replace("%s", "%s de")];
          },
          ru: function ru(s2, n2) {
            switch (n2) {
              case 0:
                return ["\u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E", "\u0447\u0435\u0440\u0435\u0437 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434"];
              case 1:
                return [N(s2) + " \u043D\u0430\u0437\u0430\u0434", "\u0447\u0435\u0440\u0435\u0437 " + N(s2)];
              case 2:
              case 3:
                return [x(s2) + " \u043D\u0430\u0437\u0430\u0434", "\u0447\u0435\u0440\u0435\u0437 " + x(s2)];
              case 4:
              case 5:
                return [D(s2) + " \u043D\u0430\u0437\u0430\u0434", "\u0447\u0435\u0440\u0435\u0437 " + D(s2)];
              case 6:
                return ["\u0432\u0447\u0435\u0440\u0430", "\u0437\u0430\u0432\u0442\u0440\u0430"];
              case 7:
                return [I(s2) + " \u043D\u0430\u0437\u0430\u0434", "\u0447\u0435\u0440\u0435\u0437 " + I(s2)];
              case 8:
              case 9:
                return [O(s2) + " \u043D\u0430\u0437\u0430\u0434", "\u0447\u0435\u0440\u0435\u0437 " + O(s2)];
              case 10:
              case 11:
                return [W(s2) + " \u043D\u0430\u0437\u0430\u0434", "\u0447\u0435\u0440\u0435\u0437 " + W(s2)];
              case 12:
              case 13:
                return [$(s2) + " \u043D\u0430\u0437\u0430\u0434", "\u0447\u0435\u0440\u0435\u0437 " + $(s2)];
              default:
                return ["", ""];
            }
          },
          sq: function sq(s2, n2) {
            return [["pak m\xEB par\xEB", "pas pak"], ["para %s sekondash", "pas %s sekondash"], ["para nj\xEB minute", "pas nj\xEB minute"], ["para %s minutash", "pas %s minutash"], ["para nj\xEB ore", "pas nj\xEB ore"], ["para %s or\xEBsh", "pas %s or\xEBsh"], ["dje", "nes\xEBr"], ["para %s dit\xEBsh", "pas %s dit\xEBsh"], ["para nj\xEB jave", "pas nj\xEB jave"], ["para %s jav\xEBsh", "pas %s jav\xEBsh"], ["para nj\xEB muaji", "pas nj\xEB muaji"], ["para %s muajsh", "pas %s muajsh"], ["para nj\xEB viti", "pas nj\xEB viti"], ["para %s vjet\xEBsh", "pas %s vjet\xEBsh"]][n2];
          },
          sr: function sr(s2, n2) {
            switch (n2) {
              case 0:
                return ["\u043C\u0430\u043B\u043E\u043F\u0440\u0435", "\u0443\u043F\u0440\u0430\u0432\u043E \u0441\u0430\u0434"];
              case 1:
                return ["\u043F\u0440\u0435 " + U(s2), "\u0437\u0430 " + U(s2)];
              case 2:
              case 3:
                return ["\u043F\u0440\u0435 " + A(s2), "\u0437\u0430 " + A(s2)];
              case 4:
              case 5:
                return ["\u043F\u0440\u0435 " + C(s2), "\u0437\u0430 " + C(s2)];
              case 6:
              case 7:
                return ["\u043F\u0440\u0435 " + E(s2), "\u0437\u0430 " + E(s2)];
              case 8:
              case 9:
                return ["\u043F\u0440\u0435 " + B(s2), "\u0437\u0430 " + B(s2)];
              case 10:
              case 11:
                return ["\u043F\u0440\u0435 " + P(s2), "\u0437\u0430 " + P(s2)];
              case 12:
              case 13:
                return ["\u043F\u0440\u0435 " + R(s2), "\u0437\u0430 " + R(s2)];
              default:
                return ["", ""];
            }
          },
          sv: function sv(s2, n2) {
            return [["just nu", "om en stund"], ["%s sekunder sedan", "om %s sekunder"], ["1 minut sedan", "om 1 minut"], ["%s minuter sedan", "om %s minuter"], ["1 timme sedan", "om 1 timme"], ["%s timmar sedan", "om %s timmar"], ["1 dag sedan", "om 1 dag"], ["%s dagar sedan", "om %s dagar"], ["1 vecka sedan", "om 1 vecka"], ["%s veckor sedan", "om %s veckor"], ["1 m\xE5nad sedan", "om 1 m\xE5nad"], ["%s m\xE5nader sedan", "om %s m\xE5nader"], ["1 \xE5r sedan", "om 1 \xE5r"], ["%s \xE5r sedan", "om %s \xE5r"]][n2];
          },
          ta: function ta(s2, n2) {
            return [["\u0B87\u0BAA\u0BCD\u0BAA\u0BC7\u0BBE\u0BA4\u0BC1", "\u0B9A\u0BB1\u0BCD\u0BB1\u0BC1 \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"], ["%s \u0BA8\u0BCA\u0B9F\u0BBF\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "%s \u0BA8\u0BCA\u0B9F\u0BBF\u0B95\u0BB3\u0BBF\u0BB2\u0BCD"], ["1 \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "1 \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD"], ["%s \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "%s \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0B99\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD"], ["1 \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "1 \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1\u0BB3\u0BCD"], ["%s \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "%s \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1\u0BB3\u0BCD"], ["1 \u0BA8\u0BBE\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "1 \u0BA8\u0BBE\u0BB3\u0BBF\u0BB2\u0BCD"], ["%s \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "%s \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD"], ["1 \u0BB5\u0BBE\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "1 \u0BB5\u0BBE\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD"], ["%s \u0BB5\u0BBE\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "%s \u0BB5\u0BBE\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD"], ["1 \u0BAE\u0BBE\u0BA4\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "1 \u0BAE\u0BBE\u0BA4\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD"], ["%s \u0BAE\u0BBE\u0BA4\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "%s \u0BAE\u0BBE\u0BA4\u0B99\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD"], ["1 \u0BB5\u0BB0\u0BC1\u0B9F\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "1 \u0BB5\u0BB0\u0BC1\u0B9F\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD"], ["%s \u0BB5\u0BB0\u0BC1\u0B9F\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "%s \u0BB5\u0BB0\u0BC1\u0B9F\u0B99\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD"]][n2];
          },
          th: function th(s2, n2) {
            return [["\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2A\u0E31\u0E01\u0E04\u0E23\u0E39\u0E48\u0E19\u0E35\u0E49", "\u0E2D\u0E35\u0E01\u0E2A\u0E31\u0E01\u0E04\u0E23\u0E39\u0E48"], ["%s \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27", "\u0E43\u0E19 %s \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35"], ["1 \u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27", "\u0E43\u0E19 1 \u0E19\u0E32\u0E17\u0E35"], ["%s \u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27", "\u0E43\u0E19 %s \u0E19\u0E32\u0E17\u0E35"], ["1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27", "\u0E43\u0E19 1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07"], ["%s \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27", "\u0E43\u0E19 %s \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07"], ["1 \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27", "\u0E43\u0E19 1 \u0E27\u0E31\u0E19"], ["%s \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27", "\u0E43\u0E19 %s \u0E27\u0E31\u0E19"], ["1 \u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27", "\u0E43\u0E19 1 \u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C"], ["%s \u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27", "\u0E43\u0E19 %s \u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C"], ["1 \u0E40\u0E14\u0E37\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27", "\u0E43\u0E19 1 \u0E40\u0E14\u0E37\u0E2D\u0E19"], ["%s \u0E40\u0E14\u0E37\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27", "\u0E43\u0E19 %s \u0E40\u0E14\u0E37\u0E2D\u0E19"], ["1 \u0E1B\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27", "\u0E43\u0E19 1 \u0E1B\u0E35"], ["%s \u0E1B\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27", "\u0E43\u0E19 %s \u0E1B\u0E35"]][n2];
          },
          tr: function tr(s2, n2) {
            return [["az \xF6nce", "\u015Fimdi"], ["%s saniye \xF6nce", "%s saniye i\xE7inde"], ["1 dakika \xF6nce", "1 dakika i\xE7inde"], ["%s dakika \xF6nce", "%s dakika i\xE7inde"], ["1 saat \xF6nce", "1 saat i\xE7inde"], ["%s saat \xF6nce", "%s saat i\xE7inde"], ["1 g\xFCn \xF6nce", "1 g\xFCn i\xE7inde"], ["%s g\xFCn \xF6nce", "%s g\xFCn i\xE7inde"], ["1 hafta \xF6nce", "1 hafta i\xE7inde"], ["%s hafta \xF6nce", "%s hafta i\xE7inde"], ["1 ay \xF6nce", "1 ay i\xE7inde"], ["%s ay \xF6nce", "%s ay i\xE7inde"], ["1 y\u0131l \xF6nce", "1 y\u0131l i\xE7inde"], ["%s y\u0131l \xF6nce", "%s y\u0131l i\xE7inde"]][n2];
          },
          uk: function uk(s2, n2) {
            switch (n2) {
              case 0:
                return ["\u0449\u043E\u0439\u043D\u043E", "\u0447\u0435\u0440\u0435\u0437 \u0434\u0435\u043A\u0456\u043B\u044C\u043A\u0430 \u0441\u0435\u043A\u0443\u043D\u0434"];
              case 1:
                return [F(s2) + " \u0442\u043E\u043C\u0443", "\u0447\u0435\u0440\u0435\u0437 " + F(s2)];
              case 2:
              case 3:
                return [G(s2) + " \u0442\u043E\u043C\u0443", "\u0447\u0435\u0440\u0435\u0437 " + G(s2)];
              case 4:
              case 5:
                return [H(s2) + " \u0442\u043E\u043C\u0443", "\u0447\u0435\u0440\u0435\u0437 " + H(s2)];
              case 6:
              case 7:
                return [K(s2) + " \u0442\u043E\u043C\u0443", "\u0447\u0435\u0440\u0435\u0437 " + K(s2)];
              case 8:
              case 9:
                return [L(s2) + " \u0442\u043E\u043C\u0443", "\u0447\u0435\u0440\u0435\u0437 " + L(s2)];
              case 10:
              case 11:
                return [Q(s2) + " \u0442\u043E\u043C\u0443", "\u0447\u0435\u0440\u0435\u0437 " + Q(s2)];
              case 12:
              case 13:
                return [V(s2) + " \u0442\u043E\u043C\u0443", "\u0447\u0435\u0440\u0435\u0437 " + V(s2)];
              default:
                return ["", ""];
            }
          },
          vi: function vi(s2, n2) {
            return [["v\u1EEBa xong", "m\u1ED9t l\xFAc"], ["%s gi\xE2y tr\u01B0\u1EDBc", "trong %s gi\xE2y"], ["1 ph\xFAt tr\u01B0\u1EDBc", "trong 1 ph\xFAt"], ["%s ph\xFAt tr\u01B0\u1EDBc", "trong %s ph\xFAt"], ["1 gi\u1EDD tr\u01B0\u1EDBc", "trong 1 gi\u1EDD"], ["%s gi\u1EDD tr\u01B0\u1EDBc", "trong %s gi\u1EDD"], ["1 ng\xE0y tr\u01B0\u1EDBc", "trong 1 ng\xE0y"], ["%s ng\xE0y tr\u01B0\u1EDBc", "trong %s ng\xE0y"], ["1 tu\u1EA7n tr\u01B0\u1EDBc", "trong 1 tu\u1EA7n"], ["%s tu\u1EA7n tr\u01B0\u1EDBc", "trong %s tu\u1EA7n"], ["1 th\xE1ng tr\u01B0\u1EDBc", "trong 1 th\xE1ng"], ["%s th\xE1ng tr\u01B0\u1EDBc", "trong %s th\xE1ng"], ["1 n\u0103m tr\u01B0\u1EDBc", "trong 1 n\u0103m"], ["%s n\u0103m tr\u01B0\u1EDBc", "trong %s n\u0103m"]][n2];
          },
          zh_CN: e,
          zh_TW: function zh_TW(s2, n2) {
            return [["\u525B\u525B", "\u7247\u523B\u5F8C"], ["%s \u79D2\u524D", "%s \u79D2\u5F8C"], ["1 \u5206\u9418\u524D", "1 \u5206\u9418\u5F8C"], ["%s \u5206\u9418\u524D", "%s \u5206\u9418\u5F8C"], ["1 \u5C0F\u6642\u524D", "1 \u5C0F\u6642\u5F8C"], ["%s \u5C0F\u6642\u524D", "%s \u5C0F\u6642\u5F8C"], ["1 \u5929\u524D", "1 \u5929\u5F8C"], ["%s \u5929\u524D", "%s \u5929\u5F8C"], ["1 \u9031\u524D", "1 \u9031\u5F8C"], ["%s \u9031\u524D", "%s \u9031\u5F8C"], ["1 \u500B\u6708\u524D", "1 \u500B\u6708\u5F8C"], ["%s \u500B\u6708\u524D", "%s \u500B\u6708\u5F8C"], ["1 \u5E74\u524D", "1 \u5E74\u5F8C"], ["%s \u5E74\u524D", "%s \u5E74\u5F8C"]][n2];
          }
        });
        Object.keys(X).forEach(function(s2) {
          u(s2, X[s2]);
        }), s.cancel = function(s2) {
          s2 ? f(h(s2)) : Object.keys(g).forEach(f);
        }, s.format = function(s2, n2, e2) {
          return d(c(s2, e2 && e2.relativeDate), r(n2));
        }, s.register = u, s.render = function(s2, n2, e2) {
          var a2 = s2.length ? s2 : [s2];
          return a2.forEach(function(s3) {
            p(s3, s3.getAttribute("datetime"), r(n2), e2 || {});
          }), a2;
        }, Object.defineProperty(s, "__esModule", {
          value: true
        });
      });
    }
  });

  // src/core/data-structures/promise.js
  var resolved;
  function resolvedPromise() {
    if (resolved) {
      return resolved;
    }
    resolved = Promise.resolve(void 0);
    return resolved;
  }

  // src/core/types/array.js
  var isArray = Array.isArray;
  function removeItem(array, item) {
    var index = array.indexOf(item);
    if (index == -1) {
      return false;
    }
    array.splice(index, 1);
    return true;
  }

  // src/core/types/object/index.js
  var _Object$prototype = Object.prototype;
  var hasOwn_ = _Object$prototype.hasOwnProperty;
  var toString_ = _Object$prototype.toString;

  // src/core/error/message-helpers.js
  var USER_ERROR_SENTINEL = "\u200B\u200B\u200B";
  var USER_ERROR_EMBED_SENTINEL = "\u200B\u200B\u200B\u200B";

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

  // src/core/window/index.js
  function toWin(winOrNull) {
    return winOrNull;
  }
  function getWin(node) {
    return toWin((node.ownerDocument || node).defaultView);
  }

  // src/core/dom/index.js
  function isIframed(win) {
    return win.parent && win.parent != win;
  }

  // src/core/dom/layout/viewport-observer.js
  function createViewportObserver(ioCallback2, win, opts) {
    if (opts === void 0) {
      opts = {};
    }
    var _opts = opts, needsRootBounds = _opts.needsRootBounds, threshold = _opts.threshold;
    var root = isIframed(win) && needsRootBounds ? win.document : void 0;
    return new win.IntersectionObserver(ioCallback2, {
      threshold: threshold,
      root: root
    });
  }
  var viewportObservers = new WeakMap();
  var viewportCallbacks = new WeakMap();
  function observeIntersections(element, callback) {
    var win = getWin(element);
    var viewportObserver = viewportObservers.get(win);
    if (!viewportObserver) {
      viewportObservers.set(win, viewportObserver = createViewportObserver(ioCallback, win));
    }
    var callbacks = viewportCallbacks.get(element);
    if (!callbacks) {
      callbacks = [];
      viewportCallbacks.set(element, callbacks);
    }
    callbacks.push(callback);
    viewportObserver.observe(element);
    return function() {
      unobserveIntersections(element, callback);
    };
  }
  function unobserveIntersections(element, callback) {
    var callbacks = viewportCallbacks.get(element);
    if (!callbacks) {
      return;
    }
    if (!removeItem(callbacks, callback)) {
      return;
    }
    if (callbacks.length) {
      return;
    }
    var win = getWin(element);
    var viewportObserver = viewportObservers.get(win);
    viewportObserver == null ? void 0 : viewportObserver.unobserve(element);
    viewportCallbacks.delete(element);
  }
  function ioCallback(entries) {
    var seen = new Set();
    for (var i = entries.length - 1; i >= 0; i--) {
      var entry = entries[i];
      var target = entry.target;
      if (seen.has(target)) {
        continue;
      }
      seen.add(target);
      var callbacks = viewportCallbacks.get(target);
      if (!callbacks) {
        continue;
      }
      for (var k = 0; k < callbacks.length; k++) {
        var callback = callbacks[k];
        callback(entry);
      }
    }
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
  function isFromEmbed(win, opt_element) {
    return opt_element && opt_element.ownerDocument.defaultView != win;
  }
  function userAssert2(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    return user().assert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
  }

  // extensions/amp-timeago/0.1/locales.js
  var timeago = __toModule(require_timeago_full_min());

  // node_modules/timeago.js/esm/lang/cs.js
  function cs_default(number, index) {
    var inflectionIndex = 0;
    var isInflectionNeeded = index == 1 || index == 3 || index == 5 || index == 7 || index == 9 || index == 11 || index == 13;
    if (isInflectionNeeded && number >= 5) {
      inflectionIndex = 1;
    }
    return [[["pr\xE1v\u011B te\u010F", "pr\xE1v\u011B te\u010F"]], [["p\u0159ed %s vte\u0159inami", "za %s vte\u0159iny"], ["p\u0159ed %s vte\u0159inami", "za %s vte\u0159in"]], [["p\u0159ed minutou", "za minutu"]], [["p\u0159ed %s minutami", "za %s minuty"], ["p\u0159ed %s minutami", "za %s minut"]], [["p\u0159ed hodinou", "za hodinu"]], [["p\u0159ed %s hodinami", "za %s hodiny"], ["p\u0159ed %s hodinami", "za %s hodin"]], [["v\u010Dera", "z\xEDtra"]], [["p\u0159ed %s dny", "za %s dny"], ["p\u0159ed %s dny", "za %s dn\u016F"]], [["minul\xFD t\xFDden", "p\u0159\xED\u0161t\xED t\xFDden"]], [["p\u0159ed %s t\xFDdny", "za %s t\xFDdny"], ["p\u0159ed %s t\xFDdny", "za %s t\xFDdn\u016F"]], [["minul\xFD m\u011Bs\xEDc", "p\u0159\xEDst\xED m\u011Bs\xEDc"]], [["p\u0159ed %s m\u011Bs\xEDci", "za %s m\u011Bs\xEDce"], ["p\u0159ed %s m\u011Bs\xEDci", "za %s m\u011Bs\xEDc\u016F"]], [["p\u0159ed rokem", "p\u0159\xEDst\xED rok"]], [["p\u0159ed %s lety", "za %s roky"], ["p\u0159ed %s lety", "za %s let"]]][index][inflectionIndex];
  }

  // node_modules/timeago.js/esm/lang/da.js
  function da_default(number, index) {
    return [["for et \xF8jeblik siden", "om et \xF8jeblik"], ["for %s sekunder siden", "om %s sekunder"], ["for 1 minut siden", "om 1 minut"], ["for %s minutter siden", "om %s minutter"], ["for 1 time siden", "om 1 time"], ["for %s timer siden", "om %s timer"], ["for 1 dag siden", "om 1 dag"], ["for %s dage siden", "om %s dage"], ["for 1 uge siden", "om 1 uge"], ["for %s uger siden", "om %s uger"], ["for 1 m\xE5ned siden", "om 1 m\xE5ned"], ["for %s m\xE5neder siden", "om %s m\xE5neder"], ["for 1 \xE5r siden", "om 1 \xE5r"], ["for %s \xE5r siden", "om %s \xE5r"]][index];
  }

  // node_modules/timeago.js/esm/lang/ka.js
  function ka_default(number, index) {
    return [["\u10D0\u10DB \u10EC\u10D0\u10DB\u10E1", "\u10D0\u10EE\u10DA\u10D0"], ["%s \u10EC\u10D0\u10DB\u10D8\u10E1 \u10EC\u10D8\u10DC", "%s \u10EC\u10D0\u10DB\u10E8\u10D8"], ["1 \u10EC\u10E3\u10D7\u10D8\u10E1 \u10EC\u10D8\u10DC", "1 \u10EC\u10E3\u10D7\u10E8\u10D8"], ["%s \u10EC\u10E3\u10D7\u10D8\u10E1 \u10EC\u10D8\u10DC", "%s \u10EC\u10E3\u10D7\u10E8\u10D8"], ["1 \u10E1\u10D0\u10D0\u10D7\u10D8\u10E1 \u10EC\u10D8\u10DC", "1 \u10E1\u10D0\u10D0\u10D7\u10E8\u10D8"], ["%s \u10E1\u10D0\u10D0\u10D7\u10D8\u10E1 \u10EC\u10D8\u10DC", "%s \u10E1\u10D0\u10D0\u10D7\u10E8\u10D8"], ["1 \u10D3\u10E6\u10D8\u10E1 \u10EC\u10D8\u10DC", "1 \u10D3\u10E6\u10D4\u10E8\u10D8"], ["%s \u10D3\u10E6\u10D8\u10E1 \u10EC\u10D8\u10DC", "%s \u10D3\u10E6\u10D4\u10E8\u10D8"], ["1 \u10D9\u10D5\u10D8\u10E0\u10D8\u10E1 \u10EC\u10D8\u10DC", "1 \u10D9\u10D5\u10D8\u10E0\u10D0\u10E8\u10D8"], ["%s \u10D9\u10D5\u10D8\u10E0\u10D8\u10E1 \u10EC\u10D8\u10DC", "%s \u10D9\u10D5\u10D8\u10E0\u10D0\u10E8\u10D8"], ["1 \u10D7\u10D5\u10D8\u10E1 \u10EC\u10D8\u10DC", "1 \u10D7\u10D5\u10D4\u10E8\u10D8"], ["%s \u10D7\u10D5\u10D8\u10E1 \u10EC\u10D8\u10DC", "%s \u10D7\u10D5\u10D4\u10E8\u10D8"], ["1 \u10EC\u10DA\u10D8\u10E1 \u10EC\u10D8\u10DC", "1 \u10EC\u10D4\u10DA\u10D8\u10EC\u10D0\u10D3\u10E8\u10D8"], ["%s \u10EC\u10DA\u10D8\u10E1 \u10EC\u10D8\u10DC", "%s \u10EC\u10D4\u10DA\u10D8\u10EC\u10D0\u10D3\u10E8\u10D8"]][index];
  }

  // node_modules/timeago.js/esm/lang/oc.js
  function oc_default(number, index) {
    return [["fa un moment", "d'aqu\xED un moment"], ["fa %s segondas", "d'aqu\xED %s segondas"], ["fa 1 minuta", "d'aqu\xED 1 minuta"], ["fa %s minutas", "d'aqu\xED %s minutas"], ["fa 1 ora", "d'aqu\xED 1 ora"], ["fa %s oras", "d'aqu\xED %s oras"], ["fa 1 jorn", "d'aqu\xED 1 jorn"], ["fa %s jorns", "d'aqu\xED %s jorns"], ["fa 1 setmana", "d'aqu\xED 1 setmana"], ["fa %s setmanas", "d'aqu\xED %s setmanas"], ["fa 1 mes", "d'aqu\xED 1 mes"], ["fa %s meses", "d'aqu\xED %s meses"], ["fa 1 an", "d'aqu\xED 1 an"], ["fa %s ans", "d'aqu\xED %s ans"]][index];
  }

  // extensions/amp-timeago/0.1/locales.js
  var _ref = timeago.default || timeago;
  var format = _ref.format;
  var register = _ref.register;
  register("cs", cs_default);
  register("da", da_default);
  register("ka", ka_default);
  register("oc", oc_default);
  function getLocale(locale) {
    locale = locale.toLowerCase();
    if (nonStandardReplacements[locale]) {
      return nonStandardReplacements[locale];
    }
    if (locale.length === 4 || locale.length === 5) {
      return locale.slice(0, 2) + "_" + locale.slice(-2).toUpperCase();
    }
    return locale;
  }
  var nonStandardReplacements = {
    "en": "en_US",
    "enshort": "en_short",
    "en-short": "en_short",
    "inbg": "bn_IN",
    "inid": "id_ID",
    "inhi": "hi_IN"
  };

  // extensions/amp-timeago/0.1/amp-timeago.js
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
  var AmpTimeAgo = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpTimeAgo2, _AMP$BaseElement);
    var _super = _createSuper(AmpTimeAgo2);
    function AmpTimeAgo2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.datetime_ = "";
      _this.locale_ = "";
      _this.title_ = "";
      _this.timeElement_ = null;
      _this.cutOffReached_ = false;
      _this.unobserveIntersections_ = null;
      return _this;
    }
    var _proto = AmpTimeAgo2.prototype;
    _proto.buildCallback = function buildCallback() {
      userAssert2(this.element.textContent.length > 0, "Content cannot be empty. Found in: %s", this.element);
      this.datetime_ = this.element.getAttribute("datetime");
      this.locale_ = getLocale(this.element.getAttribute("locale") || this.win.document.documentElement.lang);
      this.title_ = this.element.textContent.trim();
      this.element.textContent = "";
      if (!this.element.hasAttribute("role")) {
        this.element.setAttribute("role", "text");
      }
      this.timeElement_ = document.createElement("time");
      this.timeElement_.setAttribute("datetime", this.datetime_);
      this.setFuzzyTimestampValue_();
      this.element.appendChild(this.timeElement_);
    };
    _proto.viewportCallback_ = function viewportCallback_(inViewport) {
      if (inViewport && !this.cutOffReached_) {
        this.setFuzzyTimestampValue_();
      }
    };
    _proto.layoutCallback = function layoutCallback() {
      var _this2 = this;
      this.unobserveIntersections_ = observeIntersections(this.element, function(_ref2) {
        var isIntersecting = _ref2.isIntersecting;
        return _this2.viewportCallback_(isIntersecting);
      });
      return resolvedPromise();
    };
    _proto.unlayoutCallback = function unlayoutCallback() {
      var _this$unobserveInters;
      (_this$unobserveInters = this.unobserveIntersections_) == null ? void 0 : _this$unobserveInters.call(this);
      this.unobserveIntersections_ = null;
      return false;
    };
    _proto.mutatedAttributesCallback = function mutatedAttributesCallback(mutations) {
      var datetime = mutations["datetime"];
      if (datetime !== void 0) {
        this.datetime_ = datetime;
        this.setFuzzyTimestampValue_();
      }
    };
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return isLayoutSizeDefined(layout);
    };
    _proto.setFuzzyTimestampValue_ = function setFuzzyTimestampValue_() {
      if (this.element.hasAttribute("cutoff")) {
        var cutoff = parseInt(this.element.getAttribute("cutoff"), 10);
        var elDate = new Date(this.datetime_);
        var secondsAgo = Math.floor((Date.now() - elDate.getTime()) / 1e3);
        if (secondsAgo > cutoff) {
          this.timeElement_.textContent = this.title_;
          this.cutOffReached_ = true;
        } else {
          this.timeElement_.textContent = format(this.datetime_, this.locale_);
        }
      } else {
        this.timeElement_.textContent = format(this.datetime_, this.locale_);
      }
    };
    return AmpTimeAgo2;
  }(AMP.BaseElement);
  AMP.registerElement("amp-timeago", AmpTimeAgo);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-timeago-0.1.max.js.map
