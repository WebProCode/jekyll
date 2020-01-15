parcelRequire = (function(e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function(r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function(e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function(r, t) {
      e[r] = [
        function(e, r) {
          r.exports = t;
        },
        {}
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function() {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    nLdj: [
      function(require, module, exports) {
        "use strict";
        function e(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        function t(e) {
          return e.replace(/[.*+?^$|[\](){}\\-]/g, "\\$&");
        }
        function r(e) {
          var t = e.charAt(e.length - 1),
            r = parseInt(e, 10),
            s = new Date();
          switch (t) {
            case "Y":
              s.setFullYear(s.getFullYear() + r);
              break;
            case "M":
              s.setMonth(s.getMonth() + r);
              break;
            case "D":
              s.setDate(s.getDate() + r);
              break;
            case "h":
              s.setHours(s.getHours() + r);
              break;
            case "m":
              s.setMinutes(s.getMinutes() + r);
              break;
            case "s":
              s.setSeconds(s.getSeconds() + r);
              break;
            default:
              s = new Date(e);
          }
          return s;
        }
        function s(t) {
          var s = "";
          for (var a in t)
            if (e(t, a))
              if (/^expires$/i.test(a)) {
                var n = t[a];
                "object" != typeof n &&
                  (n = r((n += "number" == typeof n ? "D" : ""))),
                  (s += ";" + a + "=" + n.toUTCString());
              } else
                /^secure$/.test(a)
                  ? t[a] && (s += ";" + a)
                  : (s += ";" + a + "=" + t[a]);
          return e(t, "path") || (s += ";path=/"), s;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.hasOwn = e),
          (exports.escapeRe = t),
          (exports.computeExpires = r),
          (exports.convert = s);
      },
      {}
    ],
    WZRm: [
      function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.isCookieEnabled = exports.isEnabled = t),
          (exports.getCookie = exports.get = n),
          (exports.getAllCookies = exports.getAll = r),
          (exports.setCookie = exports.set = i),
          (exports.getRawCookie = exports.getRaw = c),
          (exports.setRawCookie = exports.setRaw = p),
          (exports.removeCookie = exports.remove = u);
        var e = require("./util");
        function o() {
          return (o =
            Object.assign ||
            function(e) {
              for (var o = 1; o < arguments.length; o++) {
                var t = arguments[o];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }
              return e;
            }).apply(this, arguments);
        }
        function t() {
          var e = new RegExp("(?:^|; )@key@=1(?:;|$)");
          document.cookie = "@key@=1";
          var o = e.test(document.cookie);
          return o && u("@key@"), o;
        }
        function n(o, t) {
          if (
            (void 0 === t && (t = decodeURIComponent),
            "string" != typeof o || !o)
          )
            return null;
          var n = new RegExp(
            "(?:^|; )" + (0, e.escapeRe)(o) + "(?:=([^;]*))?(?:;|$)"
          ).exec(document.cookie);
          return null === n ? null : "function" == typeof t ? t(n[1]) : n[1];
        }
        function r(e) {
          void 0 === e && (e = decodeURIComponent);
          for (
            var o, t = /(?:^|; )([^=]+?)(?:=([^;]*))?(?:;|$)/g, n = {};
            (o = t.exec(document.cookie));

          )
            (t.lastIndex = o.index + o.length - 1),
              (n[o[1]] = "function" == typeof e ? e(o[2]) : o[2]);
          return n;
        }
        function i(o, t, n, r) {
          void 0 === n && (n = encodeURIComponent),
            "object" == typeof n &&
              null !== n &&
              ((r = n), (n = encodeURIComponent));
          var i = (0, e.convert)(r || {}),
            u = o + "=" + ("function" == typeof n ? n(t) : t) + i;
          document.cookie = u;
        }
        function u(e, t) {
          var n = { expires: -1 };
          return t && (n = o({}, t, n)), i(e, "a", n);
        }
        function c(e) {
          return n(e, null);
        }
        function p(e, o, t) {
          return i(e, o, null, t);
        }
      },
      { "./util": "nLdj" }
    ],
    RI4g: [
      function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.getCookie = t),
          (exports.setCookie = o);
        var e = require("tiny-cookie");
        function t(t) {
          return (0, e.get)(t);
        }
        function o(t, o) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return (0, e.set)(t, o, r);
        }
      },
      { "tiny-cookie": "WZRm" }
    ],
    A2T1: [
      function(require, module, exports) {
        "use strict";
        var t = require("./util/cookie");
        if ("true" === (0, t.getCookie)("lunchr-connected-on-app"))
          for (
            var e = document.querySelectorAll(".hs-menu-item a"), s = 0;
            s < e.length;
            s++
          ) {
            var i = e[s];
            /\/signin$/.test(i) &&
              ((i.href = "https://app.lunchr.co"),
              (i.innerText = "Mon compte"));
          }
        var n = function() {
          function t() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 600,
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 750;
            return (
              /Mobi/i.test(navigator.userAgent) &&
              ((window.innerWidth < t &&
                window.matchMedia("(orientation: portrait)").matches) ||
                (window.innerWidth < e &&
                  window.matchMedia("(orientation: landscape)").matches))
            );
          }
          return {
            scrollHandler:
              ((n = 0),
              (a = !1),
              (o = document.querySelector(".header-website")),
              void (
                o &&
                window.addEventListener(
                  "scroll",
                  function() {
                    (n = window.scrollY),
                      a ||
                        (window.requestAnimationFrame(function() {
                          var t;
                          (t = n) > 60
                            ? (o.classList.add("is-scrolled"),
                              o.classList.remove("is-fixed"))
                            : t < 20 &&
                              o.classList.contains("is-scrolled") &&
                              (o.classList.add("is-fixed"),
                              o.classList.remove("is-scrolled")),
                            (a = !1);
                        }),
                        (a = !0));
                  },
                  !1
                )
              )),
            tabsHandler:
              ((s = document.querySelectorAll(".section-3--buttons button")),
              (i = document.querySelectorAll(".tabcontent")),
              void (
                s.length > 0 &&
                i.length > 0 &&
                (i.forEach(function(t, e) {
                  t.dataset.tabIndex = e;
                }),
                s.forEach(function(e, n) {
                  (e.dataset.buttonIndex = n),
                    e.addEventListener(
                      "click",
                      function() {
                        var e = document.querySelector(
                            ".section-3--buttons button.is-active"
                          ),
                          n = document.querySelector(".tabcontent.is-show");
                        i.forEach(
                          function(i) {
                            i.dataset.tabIndex === this.dataset.buttonIndex &&
                              (t()
                                ? this.classList.contains("is-active")
                                  ? s.forEach(function(t) {
                                      t.classList.contains("is-active") ||
                                        ("none" === t.style.display
                                          ? (t.style.display = "flex")
                                          : (t.style.display = "none"));
                                    })
                                  : (e && e.classList.remove("is-active"),
                                    n && n.classList.remove("is-show"),
                                    i.classList.add("is-show"),
                                    this.classList.add("is-active"),
                                    s.forEach(function(t) {
                                      t.classList.contains("is-active") ||
                                        (t.style.display = "none");
                                    }))
                                : this.classList.contains("is-active") ||
                                  (e && e.classList.remove("is-active"),
                                  n && n.classList.remove("is-show"),
                                  i.classList.add("is-show"),
                                  this.classList.add("is-active")));
                          }.bind(this)
                        );
                      }.bind(e),
                      !1
                    );
                }),
                s[0].click())
              )),
            videosHandler: void document
              .querySelectorAll(".btn-play")
              .forEach(function(t) {
                t.addEventListener(
                  "click",
                  function() {
                    var t = this.closest("div").querySelector("video");
                    t.paused
                      ? (t.play(), this.classList.remove("is-show"))
                      : (t.pause(), this.classList.add("is-show"));
                  }.bind(t),
                  !1
                ),
                  t.classList.add("is-show");
              }),
            mobileTrigger: (function() {
              
               
              
            })(),
            formsHandler:
              ((e = {
                modalOnSubmit: function() {
                  document.querySelectorAll(".modal-form").forEach(function(t) {
                    var e = (function(t, e) {
                      var s = document.createElement(t);
                      return e && s.setAttribute("class", e), s;
                    })("button", "modal-close");
                    t.append(e),
                      e.addEventListener(
                        "click",
                        function(t) {
                          t.target.closest(".submitted-message").style.display =
                            "none";
                        },
                        !1
                      );
                  });
                }
              }),
              void window.addEventListener(
                "message",
                function(t) {
                  "hsFormCallback" === t.data.type &&
                    "onFormSubmitted" === t.data.eventName &&
                    this.modalOnSubmit();
                }.bind(e),
                !1
              ))
          };
          var e, s, i, n, a, o;
        };
        (window.Cookies = { get: t.getCookie, set: t.setCookie }),
          "loading" === document.readyState
            ? document.addEventListener("DOMContentLoaded", n)
            : n(),
          $(document).ready(function() {
            $("img").removeAttr("title"),
              $(".globe_class")
                .addClass("ex-globe-class")
                .removeClass("globe_class"),
              $(".lang_switcher_class").click(function(t) {
                $(this)
                  .find(".lang_list_class")
                  .toggleClass("lang-drop"),
                  t.stopPropagation();
              }),
              $(document).on("click", function(t) {
                !1 === $(t.target).is(".lang_list_class") &&
                  $(".lang_list_class").removeClass("lang-drop");
              }),
              "en" === $(".lang_switcher_link").attr("data-language")
                ? $(".lang_switcher_class").attr("data-before", "English")
                : "fr-fr" === $(".lang_switcher_link").attr("data-language") &&
                  $(".lang_switcher_class").attr("data-before", "FranÃ§ais");
          });
      },
      { "./util/cookie": "RI4g" }
    ]
  },
  {},
  ["A2T1"],
  null
);
//# sourceMappingURL=https://res.cloudinary.com/hb395gw1l/raw/upload/js/app.js.map
