! function(e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {
            "exports": {},
            "id": i,
            "loaded": !1
        };
        return e[i].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var i = n(1),
        o = n(2);
    window.JSON || (window.JSON = n(21));
    var r = o.$_("index-content");
    r && new i["default"](r)
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var i = n(2),
        o = n(3),
        r = n(16),
        a = n(17),
        s = n(18),
        c = n(19),
        l = n(15),
        u = n(9),
        p = n(20),
        f = function() {
            function e(e) {
                var t = this;
                this.root = e, i.isDomesticUser(function(e) {
                    e ? t.init() : i.redirectForeignOfficial()
                })
            }
            return e.prototype.init = function() {
                var e = this.getWorkFlowClassByQuery();
                if (!e && u.os && u.os.family && u.name) {
                    var t = u.os.toString();
                    if (/^Windows /i.test(t)) e = this.getWorkFlowClassOfWindowsByBrowserName();
                    else if (/OS X/i.test(t) && u.os.version) {
                        if (!(i.compareVersion(u.os.version, "10.10") >= 0)) return void i.redirectToMacConnotInstall();
                        e = this.getWorkFlowClassOfOSXByBrowserName()
                    } else /(CentOS|Debian|Fedora|Gentoo|Kubuntu|Linux|Red Hat|SuSE|Ubuntu|Xubuntu|webOS)/i.test(t) && (e = this.getWorkFlowClassOfLinuxByBrowserName())
                }
                e || i.redirectToCompatibility()
            }, e.prototype.getWorkFlowClassByQuery = function() {
                var e = {
                        "activex": o["default"],
                        "ppapi": r["default"],
                        "npapi": a["default"],
                        "mac-ppapi": s["default"],
                        "mac-npapi": c["default"],
                        "linux": p["default"]
                    },
                    t = l.parse(location.search.toLocaleLowerCase());
                for (var n in e)
                    if (void 0 !== t[n]) return new e[n](this.root);
                return null
            }, e.prototype.getWorkFlowClassOfWindowsByBrowserName = function() {
                for (var e = [o["default"], r["default"], a["default"]], t = 0; t < e.length; t++) {
                    var n = e[t];
                    if (u.name && n.isValidByBrowserName(u.name)) return new n(this.root)
                }
                return null
            }, e.prototype.getWorkFlowClassOfOSXByBrowserName = function() {
                for (var e = [s["default"], c["default"]], t = 0; t < e.length; t++) {
                    var n = e[t];
                    if (u.name && n.isValidByBrowserName(u.name)) return new n(this.root)
                }
                return null
            }, e.prototype.getWorkFlowClassOfLinuxByBrowserName = function() {
                return new p["default"](this.root)
            }, e
        }();
    t["default"] = f
}, function(e, t) {
    "use strict";

    function n() {
        var e = t.$_("index-content");
        return !!e && "en" === e.className.replace(/^\s+|\s+$/g, "")
    }

    function i(e, t) {
        if (e === t) return 0;
        for (var n = e.split("."), i = t.split("."), o = Math.max(n.length, i.length), r = 0; r < o; r++) {
            var a = Number(n[r]);
            isNaN(a) && (a = 0);
            var s = Number(i[r]);
            if (isNaN(s) && (s = 0), a > s) return 1;
            if (s > a) return -1
        }
        return 0
    }

    function o(e) {
        var t = "_flash_is_domestic_user_",
            n = window[t],
            i = document.createElement("script");
        window[t] = function(o) {
            window[t] = n, setTimeout(function() {
                return document.body.removeChild(i)
            }), e(o && o.country)
        }, i.src = "//api.flash.cn/config/area?callback=" + t, document.body.appendChild(i)
    }

    function r() {
       t.redirect("https://get.adobe.com/flashplayer")
    }
    t.__esModule = !0, t.$_ = function(e) {
        return document.getElementById(e)
    }, t.on = function(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
    }, t.redirect = function(e) {
        var t = encodeURIComponent(e);
        //location.href = "/redirect?to=" + t
    }, t.redirectToCompatibility = function() {
        return location.replace("/?type=1")
    }, t.redirectToMacConnotInstall = function() {
        return location.replace("/?type=4")
    }, t.isEnglishVersion = n, t.compareVersion = i, t.isDomesticUser = o, t.redirectForeignOfficial = r
}, function(e, t, n) {
    "use strict";
    var i = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            "__proto__": []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function i() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
        }
    }();
    t.__esModule = !0;
    var o = n(2),
        r = n(4),
        a = n(9),
        s = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i(t, e), t.prototype.init = function() {
                this.isMustRedirectHelpX() || e.prototype.init.call(this)
            }, t.prototype.isMustRedirectHelpX = function() {
                var e = a.name,
                    t = "http://www.flash.cn/help/article/article.php?id=114",
                    n = "";
                if ("Microsoft Edge" === e) n = t;
                else {
                    var i = a.os.toString();
                    /^Windows 10/i.test(i) ? n = t : /^Windows 8/i.test(i) && (n = t)
                }
                return n && o.redirect(n), !!n
            }, t
        }(r["default"]("activex"));
    t["default"] = s
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return function() {
            function t(e) {
                this.root = e, this.init();
                var t = f.os.toString();
                /^Windows /i.test(t) && this.initLobby()
            }
            return t.prototype.init = function() {
                var e = this;
                this.version = r.$_("ic-version").getElementsByTagName("span")[0], this.download = r.$_("ic-download"), this.aTag = this.download.getElementsByTagName("a")[0], this.size = r.$_("ic-size").getElementsByTagName("span")[0], this.time = r.$_("ic-size").getElementsByTagName("span")[1], this.ptof = r.$_("ic-ptof"), this.checkbox = new o["default"](r.$_("ic-checkbox")), this.checkbox.on("changed", function() {
                    e.update()
                }), this.download.style.display = "block", this.ptof && (this.ptof.style.display = "block");
                var t = r.$_("ic-button"),
                    n = t.getElementsByTagName("span");
                if (n[0]) {
                    var i = new a["default"];
                    r.on(n[0], "click", function() {
                        i.show()
                    })
                }
                var c = u.parse(location.search.toLocaleLowerCase());
                if (void 0 !== c.activex || void 0 !== c.ppapi || void 0 !== c.npapi || void 0 !== c["mac-ppapi"] || void 0 !== c["mac-npapi"]) t.removeChild(n[1].parentNode);
                else {
                    var p = this.otherVersion = new s["default"](this.checkbox);
                    r.on(n[1], "click", function() {
                        p.show()
                    })
                }
                var f = r.$_("ic-popup").getElementsByTagName("a");
                this.popup = new l["default"];
                for (var d = function(t) {
                        var n = f[t],
                            i = n.href,
                            o = n.textContent,
                            a = n.innerText;
                        r.on(n, "click", function(t) {
                            e.popup.showOfModify(o || a, i);
                            var n = t || window.event;
                            return n.preventDefault ? n.preventDefault() : n.returnValue = !1, !1
                        })
                    }, h = 0; h < f.length; h++) d(h);
                this.update()
            }, t.prototype.update = function() {
                var e = this;
                this.getPackage(function(t) {
                    t && (e.aTag.href = t.downloadURL, e.size.innerHTML = t.size, e.time.innerHTML = t.date, e.version.innerHTML = t.version), e.checkbox.checked && t ? e.download.className = "" : e.download.className = "disable"
                })
            }, t.prototype.getPackage = function(t) {
                var n = u.parse(location.search.toLocaleLowerCase()),
                    i = c[e].info;
                "undefined" != typeof n[e] && "undefined" == typeof n.source ? i(null, t) : i("default", t)
            }, t.isValidByBrowserName = function(t) {
                return c[e].check(t)
            }, t.prototype.initLobby = function() {
                var e = this,
                    t = r.$_("ic-download-wrap");
                if (t) {
                    this.downloadWrap = t, this.downloadNew = r.$_("ic-new-download"), this.checkboxLobby = new o["default"](r.$_("ic-checkboxLobby")), this.officialA = this.downloadNew.getElementsByTagName("a")[0], this.lobbyA = this.downloadNew.getElementsByTagName("a")[1], this.learnLobby = r.$_("ic-learn-lobby"), this.ptlb = r.$_("ic-ptlb"), this.ptof = r.$_("ic-ptof"), this.checkboxLobby.on("changed", function() {
                        e.updateLobby()
                    });
                    for (var n = r.$_("ic-popup-lobby").getElementsByTagName("a"), i = this.popup, a = function(e) {
                            var t = n[e],
                                o = t.href,
                                a = t.textContent,
                                s = t.innerText;
                            r.on(t, "click", function(e) {
                                i.showOfModify(a || s, o);
                                var t = e || window.event;
                                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
                            })
                        }, s = 0; s < n.length; s++) a(s);
                    this.updateLobby()
                }
            }, t.prototype.updateLobby = function() {
                var t = this;
                this.downloadWrap.className = "showLobby", this.learnLobby.style.display = "inline", this.ptof.style.display = "none", this.ptlb.style.display = "inline", this.download.style.display = "none", p.getPackages(function(n) {
                    var i = "fc-" + e,
                        o = n[i];
                    o && (t.lobbyA.href = "//soft.flash.cn/flashcenter/index.html?" + e, t.lobbyA.target = "_blank"), t.checkboxLobby.checked && o ? t.downloadNew.className = "" : t.downloadNew.className = "disable"
                }), this.getPackage(function(e) {
                    e && (t.officialA.href = e.downloadURL, t.size.innerHTML = e.size, t.time.innerHTML = e.date, t.version.innerHTML = e.version)
                })
            }, t
        }()
    }
    t.__esModule = !0;
    var o = n(5),
        r = n(2),
        a = n(7),
        s = n(11),
        c = n(12),
        l = n(14),
        u = n(15),
        p = n(12),
        f = n(9);
    t["default"] = i
}, function(e, t, n) {
    "use strict";
    var i = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            "__proto__": []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function i() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
        }
    }();
    t.__esModule = !0;
    var o = n(2),
        r = n(6),
        a = function(e) {
            function t(t) {
                var n = e.call(this) || this;
                return n.element = t, n.checked = !1, n.input = t.getElementsByTagName("input")[0], /(\s*\b)(cur)(\b\s*)/.test(t.className) ? n.select() : n.unselect(), o.on(t, "click", function() {
                    var e = n.input;
                    e.checked ? n.unselect() : n.select()
                }), o.on(n.input, "click", function(e) {
                    var t = e || window.event;
                    return t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
                }), n
            }
            return i(t, e), t.prototype.select = function() {
                this.checked = !0, this.element.className = "cur", this.input.checked = !0, this.emit("changed")
            }, t.prototype.unselect = function() {
                this.checked = !1, this.element.className = "", this.input.checked = !1, this.emit("changed")
            }, t
        }(r.TinyEmitter);
    t["default"] = a
}, function(e, t) {
    function n() {}
    n.prototype = {
        "on": function(e, t, n) {
            var i = this.e || (this.e = {});
            return (i[e] || (i[e] = [])).push({
                "fn": t,
                "ctx": n
            }), this
        },
        "once": function(e, t, n) {
            function i() {
                o.off(e, i), t.apply(n, arguments)
            }
            var o = this;
            return i._ = t, this.on(e, i, n)
        },
        "emit": function(e) {
            var t = [].slice.call(arguments, 1),
                n = ((this.e || (this.e = {}))[e] || []).slice(),
                i = 0,
                o = n.length;
            for (i; i < o; i++) n[i].fn.apply(n[i].ctx, t);
            return this
        },
        "off": function(e, t) {
            var n = this.e || (this.e = {}),
                i = n[e],
                o = [];
            if (i && t)
                for (var r = 0, a = i.length; r < a; r++) i[r].fn !== t && i[r].fn._ !== t && o.push(i[r]);
            return o.length ? n[e] = o : delete n[e], this
        }
    }, e.exports = n, e.exports.TinyEmitter = n
}, function(e, t, n) {
    "use strict";
    var i = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            "__proto__": []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function i() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
        }
    }();
    t.__esModule = !0;
    var o = n(8),
        r = n(2),
        a = n(9),
        s = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i(t, e), t.prototype.getID = function() {
                return "system-requirement"
            }, t.prototype.create = function() {
                var t = e.prototype.create.call(this),
                    n = function() {
                        try {
                            return a.os.toString()
                        } catch (e) {
                            return "未知设备"
                        }
                    },
                    i = document.createElement("div");
                return r.isEnglishVersion() ? i.innerHTML = '\n                <div class="sr-title">System requirements</div>\n                <div class="sr-logo"></div>\n                <div class="sr-system">Microsoft<sup>®</sup> Windows<sup>®</sup></div>\n                <div class="sr-text">32-bit and 64-bit(unless noted): Microsoft® Windows® XP SP3(32-bit)<br>Windows Vista®(32-bit),Windows 7,Windows 8.1, and Windows 10<br>Latest versions of Microsoft Internet Explorer, Microsoft Edge, Mozilla Firefox, Google Chrome and Opera</div>\n                <div class="sr-system">Mac OS</div>\n                <div class="sr-text">Mac OS X v10.10 or later<br>Latest versions of Safari, Mozilla Firefox, Google Chrome, and Opera</div>\n                <div class="sr-system">Linux</div>\n                <div class="sr-text">TAR.GZ, RPM packages for NPAPI and PPAPI<br>Latest versions of Firefox or Google Chrome  </div>\n                <div class="sr-more"><a href="//www.adobe.com/sea/products/flashplayer/tech-specs.html" target="_blank">Check more system requirements</a></div>\n                <div class="sr-your">Your OS：<br>' + n() + "</div>\n            " : i.innerHTML = '\n                <div class="sr-title">系统要求</div>\n                <div class="sr-logo"></div>\n                <div class="sr-system">Microsoft<sup>®</sup> Windows<sup>®</sup></div>\n                <div class="sr-text">32 位和 64 位（除非另外说明）：Microsoft® Windows® XP SP3（32 位）、Windows Vista®（32 位）、Windows 7、Windows 8.1. 和 Windows 10 <br>最新版 Microsoft Internet Explorer、Microsoft Edge、Mozilla Firefox、Google Chrome 和 Opera</div>\n                <div class="sr-system">Mac OS</div>\n                <div class="sr-text">Mac OS X 10.10 版或更高版本<br>最新版本的 Safari、Mozilla Firefox、Google Chrome 和 Opera</div>\n                <div class="sr-system">Linux</div>                \n                <div class="sr-text">适用于 NPAPI 和 PPAPI 的 TAR.GZ、RPM 包<br>最新版本的 Firefox 或 Google Chrome</div>\n                <div class="sr-more"><a href="//www.adobe.com/cn/products/flashplayer/tech-specs.html" target="_blank">查看更多系统要求</a></div>\n                <div class="sr-your">您的系统：<br>' + n() + "</div>\n            ", r.$_(this.getID()).appendChild(i), t
            }, t
        }(o["default"]);
    t["default"] = s
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var i = n(2),
        o = function() {
            function e() {
                this.delay = 180
            }
            return e.prototype.create = function() {
                var e = this,
                    t = document.createElement("div"),
                    n = +new Date;
                t.innerHTML = '\n            <div class="popup-layer">\n                <div class="pl-cover"></div>\n                <div id="' + this.getID() + '" class="pl-content">\n                    <span class="pl-close" id="' + n + '"></span>\n                </div>\n            </div>\n        ';
                var o = this.element = t.getElementsByTagName("div")[0];
                document.body.appendChild(o);
                var r = i.$_(n);
                return r.removeAttribute("id"), i.on(r, "click", function() {
                    e.hide()
                }), o
            }, e.prototype.show = function() {
                var e = this.element;
                e || (e = this.create());
                var t = /constructor/i.test(window.HTMLElement);
                this.isSupportAnimation() && !t ? (this.animationend(e, function() {
                    e.className = "popup-layer"
                }, this.delay), e.className = "popup-layer in") : e.className = "popup-layer"
            }, e.prototype.hide = function() {
                var e = this.element;
                if (e) {
                    var t = /constructor/i.test(window.HTMLElement);
                    this.isSupportAnimation() && !t ? (this.animationend(e, function() {
                        e.className = "popup-layer hidden"
                    }, this.delay), e.className = "popup-layer out") : e.className = "popup-layer hidden"
                }
            }, e.prototype.animationend = function(e, t, n) {
                if (!this.availableEvents) {
                    var i = {
                            "animation": "animationend",
                            "WebkitAnimation": "webkitAnimationEnd",
                            "MozAnimation": "mozAnimationEnd",
                            "OAnimation": "oAnimationEnd",
                            "msAnimation": "MSAnimationEnd"
                        },
                        o = document.createElement("div"),
                        r = [];
                    for (var a in i) a in o.style && r.push(i[a]);
                    this.availableEvents = r
                }
                var s, c = this.availableEvents,
                    l = function() {
                        if (!s) {
                            s = !0;
                            for (var n = 0; n < c.length; n++) {
                                var i = c[n];
                                e.removeEventListener(i, l, !1)
                            }
                            t()
                        }
                    };
                if (c.length)
                    for (var u = 0; u < c.length; u++) {
                        var p = c[u];
                        e.addEventListener(p, l, !1)
                    } else setTimeout(function() {
                        return t()
                    }, n)
            }, e.prototype.isSupportAnimation = function() {
                if (void 0 !== this.isSupportAnimation_) return this.isSupportAnimation_;
                var e = function() {
                    var e = "animation-name -webkit-animation-name -moz-animation-name -ms-animation-name -o-animation-name".split(" "),
                        t = "animationName WebkitAnimationName MozAnimationName msAnimationName OAnimationName".split(" "),
                        n = document.createElement("div").style;
                    if ("CSS" in window && "supports" in CSS)
                        for (var i = 0; i < e.length; i++)
                            if (CSS.supports(e[i], "a")) return !0;
                    for (var i = 0; i < t.length; i++)
                        if (void 0 !== n[t[i]]) return !0;
                    return !1
                };
                return this.isSupportAnimation_ = e()
            }, e
        }();
    t["default"] = o
}, function(e, t, n) {
    var i;
    (function(e, o) {
        (function() {
            "use strict";

            function r(e) {
                return e = String(e), e.charAt(0).toUpperCase() + e.slice(1)
            }

            function a(e, t, n) {
                var i = {
                    "10.0": "10",
                    "6.4": "10 Technical Preview",
                    "6.3": "8.1",
                    "6.2": "8",
                    "6.1": "Server 2008 R2 / 7",
                    "6.0": "Server 2008 / Vista",
                    "5.2": "Server 2003 / XP 64-bit",
                    "5.1": "XP",
                    "5.01": "2000 SP1",
                    "5.0": "2000",
                    "4.0": "NT",
                    "4.90": "ME"
                };
                return t && n && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (i = i[/[\d.]+$/.exec(e)]) && (e = "Windows " + i), e = String(e), t && n && (e = e.replace(RegExp(t, "i"), n)), e = c(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
            }

            function s(e, t) {
                var n = -1,
                    i = e ? e.length : 0;
                if ("number" == typeof i && i > -1 && i <= x)
                    for (; ++n < i;) t(e[n], n, e);
                else l(e, t)
            }

            function c(e) {
                return e = h(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : r(e)
            }

            function l(e, t) {
                for (var n in e) O.call(e, n) && t(e[n], n, e)
            }

            function u(e) {
                return null == e ? r(e) : M.call(e).slice(8, -1)
            }

            function p(e, t) {
                var n = null != e ? typeof e[t] : "number";
                return !(/^(?:boolean|number|string|undefined)$/.test(n) || "object" == n && !e[t])
            }

            function f(e) {
                return String(e).replace(/([ -])(?!$)/g, "$1?")
            }

            function d(e, t) {
                var n = null;
                return s(e, function(i, o) {
                    n = t(n, i, o, e)
                }), n
            }

            function h(e) {
                return String(e).replace(/^ +| +$/g, "")
            }

            function b(e) {
                function t(t) {
                    return d(t, function(t, n) {
                        return t || RegExp("\\b" + (n.pattern || f(n)) + "\\b", "i").exec(e) && (n.label || n)
                    })
                }

                function n(t) {
                    return d(t, function(t, n, i) {
                        return t || (n[U] || n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(U)] || RegExp("\\b" + f(i) + "(?:\\b|\\w*\\d)", "i").exec(e)) && i
                    })
                }

                function i(t) {
                    return d(t, function(t, n) {
                        return t || RegExp("\\b" + (n.pattern || f(n)) + "\\b", "i").exec(e) && (n.label || n)
                    })
                }

                function o(t) {
                    return d(t, function(t, n) {
                        var i = n.pattern || f(n);
                        return !t && (t = RegExp("\\b" + i + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(e)) && (t = a(t, i, n.label || n)), t
                    })
                }

                function r(t) {
                    return d(t, function(t, n) {
                        var i = n.pattern || f(n);
                        return !t && (t = RegExp("\\b" + i + " *\\d+[.\\w_]*", "i").exec(e) || RegExp("\\b" + i + " *\\w+-[\\w]*", "i").exec(e) || RegExp("\\b" + i + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(e)) && ((t = String(n.label && !RegExp(i, "i").test(n.label) ? n.label : t).split("/"))[1] && !/[\d.]+/.test(t[0]) && (t[0] += " " + t[1]), n = n.label || n, t = c(t[0].replace(RegExp(i, "i"), n).replace(RegExp("; *(?:" + n + "[_-])?", "i"), " ").replace(RegExp("(" + n + ")[-_.]?(\\w)", "i"), "$1 $2"))), t
                    })
                }

                function s(t) {
                    return d(t, function(t, n) {
                        return t || (RegExp(n + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(e) || 0)[1] || null
                    })
                }

                function v() {
                    return this.description || ""
                }
                var y = m,
                    g = e && "object" == typeof e && "String" != u(e);
                g && (y = e, e = null);
                var w = y.navigator || {},
                    x = w.userAgent || "";
                e || (e = x);
                var S, O, P = g ? !!w.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(M.toString()),
                    N = "Object",
                    E = g ? N : "ScriptBridgingProxyObject",
                    A = g ? N : "Environment",
                    k = g && y.java ? "JavaPackage" : u(y.java),
                    C = g ? N : "RuntimeObject",
                    T = /\bJava/.test(k) && y.java,
                    I = T && u(y.environment) == A,
                    L = T ? "a" : "α",
                    B = T ? "b" : "β",
                    F = y.document || {},
                    W = y.operamini || y.opera,
                    R = _.test(R = g && W ? W["[[Class]]"] : u(W)) ? R : W = null,
                    $ = e,
                    j = [],
                    V = null,
                    H = e == x,
                    G = H && W && "function" == typeof W.version && W.version(),
                    z = t([{
                        "label": "EdgeHTML",
                        "pattern": "Edge"
                    }, "Trident", {
                        "label": "WebKit",
                        "pattern": "AppleWebKit"
                    }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
                    X = i(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                        "label": "Microsoft Edge",
                        "pattern": "Edge"
                    }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                        "label": "Samsung Internet",
                        "pattern": "SamsungBrowser"
                    }, "SeaMonkey", {
                        "label": "Silk",
                        "pattern": "(?:Cloud9|Silk-Accelerated)"
                    }, "Sleipnir", "SlimBrowser", {
                        "label": "SRWare Iron",
                        "pattern": "Iron"
                    }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                        "label": "Opera Mini",
                        "pattern": "OPiOS"
                    }, "Opera", {
                        "label": "Opera",
                        "pattern": "OPR"
                    }, "Chrome", {
                        "label": "Chrome Mobile",
                        "pattern": "(?:CriOS|CrMo)"
                    }, {
                        "label": "Firefox",
                        "pattern": "(?:Firefox|Minefield)"
                    }, {
                        "label": "Firefox for iOS",
                        "pattern": "FxiOS"
                    }, {
                        "label": "IE",
                        "pattern": "IEMobile"
                    }, {
                        "label": "IE",
                        "pattern": "MSIE"
                    }, "Safari"]),
                    U = r([{
                        "label": "BlackBerry",
                        "pattern": "BB10"
                    }, "BlackBerry", {
                        "label": "Galaxy S",
                        "pattern": "GT-I9000"
                    }, {
                        "label": "Galaxy S2",
                        "pattern": "GT-I9100"
                    }, {
                        "label": "Galaxy S3",
                        "pattern": "GT-I9300"
                    }, {
                        "label": "Galaxy S4",
                        "pattern": "GT-I9500"
                    }, {
                        "label": "Galaxy S5",
                        "pattern": "SM-G900"
                    }, {
                        "label": "Galaxy S6",
                        "pattern": "SM-G920"
                    }, {
                        "label": "Galaxy S6 Edge",
                        "pattern": "SM-G925"
                    }, {
                        "label": "Galaxy S7",
                        "pattern": "SM-G930"
                    }, {
                        "label": "Galaxy S7 Edge",
                        "pattern": "SM-G935"
                    }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                        "label": "Kindle Fire",
                        "pattern": "(?:Cloud9|Silk-Accelerated)"
                    }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                        "label": "Wii U",
                        "pattern": "WiiU"
                    }, "Wii", "Xbox One", {
                        "label": "Xbox 360",
                        "pattern": "Xbox"
                    }, "Xoom"]),
                    D = n({
                        "Apple": {
                            "iPad": 1,
                            "iPhone": 1,
                            "iPod": 1
                        },
                        "Archos": {},
                        "Amazon": {
                            "Kindle": 1,
                            "Kindle Fire": 1
                        },
                        "Asus": {
                            "Transformer": 1
                        },
                        "Barnes & Noble": {
                            "Nook": 1
                        },
                        "BlackBerry": {
                            "PlayBook": 1
                        },
                        "Google": {
                            "Google TV": 1,
                            "Nexus": 1
                        },
                        "HP": {
                            "TouchPad": 1
                        },
                        "HTC": {},
                        "LG": {},
                        "Microsoft": {
                            "Xbox": 1,
                            "Xbox One": 1
                        },
                        "Motorola": {
                            "Xoom": 1
                        },
                        "Nintendo": {
                            "Wii U": 1,
                            "Wii": 1
                        },
                        "Nokia": {
                            "Lumia": 1
                        },
                        "Samsung": {
                            "Galaxy S": 1,
                            "Galaxy S2": 1,
                            "Galaxy S3": 1,
                            "Galaxy S4": 1
                        },
                        "Sony": {
                            "PlayStation": 1,
                            "PlayStation Vita": 1
                        }
                    }),
                    J = o(["Windows Phone", "Android", "CentOS", {
                        "label": "Chrome OS",
                        "pattern": "CrOS"
                    }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);
                if (z && (z = [z]), D && !U && (U = r([D])), (S = /\bGoogle TV\b/.exec(U)) && (U = S[0]), /\bSimulator\b/i.test(e) && (U = (U ? U + " " : "") + "Simulator"), "Opera Mini" == X && /\bOPiOS\b/.test(e) && j.push("running in Turbo/Uncompressed mode"), "IE" == X && /\blike iPhone OS\b/.test(e) ? (S = b(e.replace(/like iPhone OS/, "")), D = S.manufacturer, U = S.product) : /^iP/.test(U) ? (X || (X = "Safari"), J = "iOS" + ((S = / OS ([\d_]+)/i.exec(e)) ? " " + S[1].replace(/_/g, ".") : "")) : "Konqueror" != X || /buntu/i.test(J) ? D && "Google" != D && (/Chrome/.test(X) && !/\bMobile Safari\b/i.test(e) || /\bVita\b/.test(U)) || /\bAndroid\b/.test(J) && /^Chrome/.test(X) && /\bVersion\//i.test(e) ? (X = "Android Browser", J = /\bAndroid\b/.test(J) ? J : "Android") : "Silk" == X ? (/\bMobi/i.test(e) || (J = "Android", j.unshift("desktop mode")), /Accelerated *= *true/i.test(e) && j.unshift("accelerated")) : "PaleMoon" == X && (S = /\bFirefox\/([\d.]+)\b/.exec(e)) ? j.push("identifying as Firefox " + S[1]) : "Firefox" == X && (S = /\b(Mobile|Tablet|TV)\b/i.exec(e)) ? (J || (J = "Firefox OS"), U || (U = S[1])) : !X || (S = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(X)) ? (X && !U && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(S + "/") + 8)) && (X = null), (S = U || D || J) && (U || D || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(J)) && (X = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(J) ? J : S) + " Browser")) : "Electron" == X && (S = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1]) && j.push("Chromium " + S) : J = "Kubuntu", G || (G = s(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", f(X), "(?:Firefox|Minefield|NetFront)"])), (S = "iCab" == z && parseFloat(G) > 3 && "WebKit" || /\bOpera\b/.test(X) && (/\bOPR\b/.test(e) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(e) && !/^(?:Trident|EdgeHTML)$/.test(z) && "WebKit" || !z && /\bMSIE\b/i.test(e) && ("Mac OS" == J ? "Tasman" : "Trident") || "WebKit" == z && /\bPlayStation\b(?! Vita\b)/i.test(X) && "NetFront") && (z = [S]), "IE" == X && (S = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1]) ? (X += " Mobile", J = "Windows Phone " + (/\+$/.test(S) ? S : S + ".x"), j.unshift("desktop mode")) : /\bWPDesktop\b/i.test(e) ? (X = "IE Mobile", J = "Windows Phone 8.x", j.unshift("desktop mode"), G || (G = (/\brv:([\d.]+)/.exec(e) || 0)[1])) : "IE" != X && "Trident" == z && (S = /\brv:([\d.]+)/.exec(e)) && (X && j.push("identifying as " + X + (G ? " " + G : "")), X = "IE", G = S[1]), H) {
                    if (p(y, "global"))
                        if (T && (S = T.lang.System, $ = S.getProperty("os.arch"), J = J || S.getProperty("os.name") + " " + S.getProperty("os.version")), I) {
                            try {
                                G = y.require("ringo/engine").version.join("."), X = "RingoJS"
                            } catch (K) {
                                (S = y.system) && S.global.system == y.system && (X = "Narwhal", J || (J = S[0].os || null))
                            }
                            X || (X = "Rhino")
                        } else "object" == typeof y.process && !y.process.browser && (S = y.process) && ("object" == typeof S.versions && ("string" == typeof S.versions.electron ? (j.push("Node " + S.versions.node), X = "Electron", G = S.versions.electron) : "string" == typeof S.versions.nw && (j.push("Chromium " + G, "Node " + S.versions.node), X = "NW.js", G = S.versions.nw)), X || (X = "Node.js", $ = S.arch, J = S.platform, G = /[\d.]+/.exec(S.version), G = G ? G[0] : null));
                    else u(S = y.runtime) == E ? (X = "Adobe AIR", J = S.flash.system.Capabilities.os) : u(S = y.phantom) == C ? (X = "PhantomJS", G = (S = S.version || null) && S.major + "." + S.minor + "." + S.patch) : "number" == typeof F.documentMode && (S = /\bTrident\/(\d+)/i.exec(e)) ? (G = [G, F.documentMode], (S = +S[1] + 4) != G[1] && (j.push("IE " + G[1] + " mode"), z && (z[1] = ""), G[1] = S), G = "IE" == X ? String(G[1].toFixed(1)) : G[0]) : "number" == typeof F.documentMode && /^(?:Chrome|Firefox)\b/.test(X) && (j.push("masking as " + X + " " + G), X = "IE", G = "11.0", z = ["Trident"], J = "Windows");
                    J = J && c(J)
                }
                if (G && (S = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(G) || /(?:alpha|beta)(?: ?\d)?/i.exec(e + ";" + (H && w.appMinorVersion)) || /\bMinefield\b/i.test(e) && "a") && (V = /b/i.test(S) ? "beta" : "alpha", G = G.replace(RegExp(S + "\\+?$"), "") + ("beta" == V ? B : L) + (/\d+\+?/.exec(S) || "")), "Fennec" == X || "Firefox" == X && /\b(?:Android|Firefox OS)\b/.test(J)) X = "Firefox Mobile";
                else if ("Maxthon" == X && G) G = G.replace(/\.[\d.]+/, ".x");
                else if (/\bXbox\b/i.test(U)) "Xbox 360" == U && (J = null), "Xbox 360" == U && /\bIEMobile\b/.test(e) && j.unshift("mobile mode");
                else if (!/^(?:Chrome|IE|Opera)$/.test(X) && (!X || U || /Browser|Mobi/.test(X)) || "Windows CE" != J && !/Mobi/i.test(e))
                    if ("IE" == X && H) try {
                        null === y.external && j.unshift("platform preview")
                    } catch (K) {
                        j.unshift("embedded")
                    } else(/\bBlackBerry\b/.test(U) || /\bBB10\b/.test(e)) && (S = (RegExp(U.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(e) || 0)[1] || G) ? (S = [S, /BB10/.test(e)], J = (S[1] ? (U = null, D = "BlackBerry") : "Device Software") + " " + S[0], G = null) : this != l && "Wii" != U && (H && W || /Opera/.test(X) && /\b(?:MSIE|Firefox)\b/i.test(e) || "Firefox" == X && /\bOS X (?:\d+\.){2,}/.test(J) || "IE" == X && (J && !/^Win/.test(J) && G > 5.5 || /\bWindows XP\b/.test(J) && G > 8 || 8 == G && !/\bTrident\b/.test(e))) && !_.test(S = b.call(l, e.replace(_, "") + ";")) && S.name && (S = "ing as " + S.name + ((S = S.version) ? " " + S : ""), _.test(X) ? (/\bIE\b/.test(S) && "Mac OS" == J && (J = null), S = "identify" + S) : (S = "mask" + S, X = R ? c(R.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(S) && (J = null), H || (G = null)), z = ["Presto"], j.push(S));
                    else X += " Mobile";
                    (S = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) && (S = [parseFloat(S.replace(/\.(\d)$/, ".0$1")), S], "Safari" == X && "+" == S[1].slice(-1) ? (X = "WebKit Nightly", V = "alpha", G = S[1].slice(0, -1)) : G != S[1] && G != (S[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1]) || (G = null), S[1] = (/\bChrome\/([\d.]+)/i.exec(e) || 0)[1], 537.36 == S[0] && 537.36 == S[2] && parseFloat(S[1]) >= 28 && "WebKit" == z && (z = ["Blink"]), H && (P || S[1]) ? (z && (z[1] = "like Chrome"), S = S[1] || (S = S[0], S < 530 ? 1 : S < 532 ? 2 : S < 532.05 ? 3 : S < 533 ? 4 : S < 534.03 ? 5 : S < 534.07 ? 6 : S < 534.1 ? 7 : S < 534.13 ? 8 : S < 534.16 ? 9 : S < 534.24 ? 10 : S < 534.3 ? 11 : S < 535.01 ? 12 : S < 535.02 ? "13+" : S < 535.07 ? 15 : S < 535.11 ? 16 : S < 535.19 ? 17 : S < 536.05 ? 18 : S < 536.1 ? 19 : S < 537.01 ? 20 : S < 537.11 ? "21+" : S < 537.13 ? 23 : S < 537.18 ? 24 : S < 537.24 ? 25 : S < 537.36 ? 26 : "Blink" != z ? "27" : "28")) : (z && (z[1] = "like Safari"), S = S[0], S = S < 400 ? 1 : S < 500 ? 2 : S < 526 ? 3 : S < 533 ? 4 : S < 534 ? "4+" : S < 535 ? 5 : S < 537 ? 6 : S < 538 ? 7 : S < 601 ? 8 : "8"), z && (z[1] += " " + (S += "number" == typeof S ? ".x" : /[.+]/.test(S) ? "" : "+")), "Safari" == X && (!G || parseInt(G) > 45) && (G = S)), "Opera" == X && (S = /\bzbov|zvav$/.exec(J)) ? (X += " ", j.unshift("desktop mode"), "zvav" == S ? (X += "Mini", G = null) : X += "Mobile", J = J.replace(RegExp(" *" + S + "$"), "")) : "Safari" == X && /\bChrome\b/.exec(z && z[1]) && (j.unshift("desktop mode"), X = "Chrome Mobile", G = null, /\bOS X\b/.test(J) ? (D = "Apple", J = "iOS 4.3+") : J = null), G && 0 == G.indexOf(S = /[\d.]+$/.exec(J)) && e.indexOf("/" + S + "-") > -1 && (J = h(J.replace(S, ""))), z && !/\b(?:Avant|Nook)\b/.test(X) && (/Browser|Lunascape|Maxthon/.test(X) || "Safari" != X && /^iOS/.test(J) && /\bSafari\b/.test(z[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(X) && z[1]) && (S = z[z.length - 1]) && j.push(S), j.length && (j = ["(" + j.join("; ") + ")"]), D && U && U.indexOf(D) < 0 && j.push("on " + D), U && j.push((/^on /.test(j[j.length - 1]) ? "" : "on ") + U), J && (S = / ([\d.+]+)$/.exec(J), O = S && "/" == J.charAt(J.length - S[0].length - 1), J = {
                    "architecture": 32,
                    "family": S && !O ? J.replace(S[0], "") : J,
                    "version": S ? S[1] : null,
                    "toString": function() {
                        var e = this.version;
                        return this.family + (e && !O ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
                    }
                }), (S = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec($)) && !/\bi686\b/i.test($) ? (J && (J.architecture = 64, J.family = J.family.replace(RegExp(" *" + S), "")), X && (/\bWOW64\b/i.test(e) || H && /\w(?:86|32)$/.test(w.cpuClass || w.platform) && !/\bWin64; x64\b/i.test(e)) && j.unshift("32-bit")) : J && /^OS X/.test(J.family) && "Chrome" == X && parseFloat(G) >= 39 && (J.architecture = 64), e || (e = null);
                var q = {};
                return q.description = e, q.layout = z && z[0], q.manufacturer = D, q.name = X, q.prerelease = V, q.product = U, q.ua = e, q.version = X && G, q.os = J || {
                    "architecture": null,
                    "family": null,
                    "version": null,
                    "toString": function() {
                        return "null"
                    }
                }, q.parse = b, q.toString = v, q.version && j.unshift(G), q.name && j.unshift(X), J && X && (J != String(J).split(" ")[0] || J != X.split(" ")[0] && !U) && j.push(U ? "(" + J + ")" : "on " + J), j.length && (q.description = j.join(" ")), q
            }
            var v = {
                    "function": !0,
                    "object": !0
                },
                m = v[typeof window] && window || this,
                y = v[typeof t] && t,
                g = v[typeof e] && e && !e.nodeType && e,
                w = y && g && "object" == typeof o && o;
            !w || w.global !== w && w.window !== w && w.self !== w || (m = w);
            var x = Math.pow(2, 53) - 1,
                _ = /\bOpera/,
                S = Object.prototype,
                O = S.hasOwnProperty,
                M = S.toString,
                P = b();
            m.platform = P, i = function() {
                return P
            }.call(t, n, t, e), !(void 0 !== i && (e.exports = i))
        }).call(this)
    }).call(t, n(10)(e), function() {
        return this
    }())
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
    }
}, function(e, t, n) {
    "use strict";
    var i = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            "__proto__": []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function i() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
        }
    }();
    t.__esModule = !0;
    var o = n(8),
        r = n(2),
        a = n(12),
        s = n(13),
        c = n(9),
        l = function(e, t) {
            var n = function(n) {
                    e.info("default", function(e) {
                        var i = e.version,
                            o = i.split(".");
                        n(null != o[0] ? t.replace(/\{MAIN_VERSION\}/g, o[0]) : "Unknown")
                    })
                },
                i = function(t) {
                    return e.info("default", t)
                };
            return {
                "text": n,
                "info": i
            }
        },
        u = {
            "activex": l(a.activex, "FP {MAIN_VERSION} for Internet Explorer - ActiveX"),
            "ppapi": l(a.ppapi, "FP {MAIN_VERSION} for Opera and Chromium - PPAPI"),
            "npapi": l(a.npapi, "FP {MAIN_VERSION} for Firefox - NPAPI")
        },
        p = [{
            "text": "Windows 10/Windows 8",
            "list": [u.ppapi, u.npapi]
        }, {
            "text": "Windows 7/Vista/XP",
            "list": [u.ppapi, u.activex, u.npapi]
        }, {
            "text": "Mac OS X 10.10 版或更高版本",
            "list": [l(a["mac_ppapi"], "FP {MAIN_VERSION} Mac for Opera and Chromium - PPAPI"), l(a["mac_npapi"], "FP {MAIN_VERSION} Mac for Safari and Firefox - NPAPI")]
        }, {
            "text": "Linux (64-bit)",
            "list": [l(a.linux.arch(64).type("tar-ppapi").get(), "FP {MAIN_VERSION} for Linux 64-bit (.tar.gz) - PPAPI"), l(a.linux.arch(64).type("tar-npapi").get(), "FP {MAIN_VERSION} for Linux 64-bit (.tar.gz) - NPAPI"), l(a.linux.arch(64).type("rpm-ppapi").get(), "FP {MAIN_VERSION} for Linux 64-bit (.rpm) - PPAPI"), l(a.linux.arch(64).type("rpm-npapi").get(), "FP {MAIN_VERSION} for Linux 64-bit (.rpm) - NPAPI")]
        }, {
            "text": "Linux (32-bit)",
            "list": [l(a.linux.arch(32).type("tar-ppapi").get(), "FP {MAIN_VERSION} for Linux 32-bit (.tar.gz) - PPAPI"), l(a.linux.arch(32).type("tar-npapi").get(), "FP {MAIN_VERSION} for Linux 32-bit (.tar.gz) - NPAPI"), l(a.linux.arch(32).type("rpm-ppapi").get(), "FP {MAIN_VERSION} for Linux 32-bit (.rpm) - PPAPI"), l(a.linux.arch(32).type("rpm-npapi").get(), "FP {MAIN_VERSION} for Linux 32-bit (.rpm) - NPAPI")]
        }],
        f = function(e) {
            function t(t) {
                var n = e.call(this) || this;
                return n.protocolCheckBox = t, n
            }
            return i(t, e), t.prototype.getID = function() {
                return "other-version"
            }, t.prototype.getConditionProvisionString = function(e, t) {
                void 0 === t && (t = !1);
                var n = "//wwwimages2.adobe.com/www.adobe.com/content/dam/acom/en/legal/licenses-terms/pdf/PlatformClients_PC_WWEULA-en_US-20150407_1357.pdf",
                    i = "//www.flash.cn/Flash_Helper_Service_Agreement.pdf",
                    o = "//wwwimages2.adobe.com/www.adobe.com/content/dam/acom/cn/legal/licenses-terms/pdf/PlatformClients_PC_WWEULA-zh_CN-20150407_1357.pdf",
                    r = "//www.flash.cn/Flash_Helper_Service_Agreement.pdf";
                return e ? t ? 'By clicking the“Install now”button, you acknowledge that you have read and agree to the <br><a href="' + n + '">Adobe Software Licensing Agreement*</a> and the <a href="' + i + '">Flash Helper Service Agreement and Privacy Policy</a>' : '通过单击“立即下载”按钮，您已经阅读并同意<a href="' + o + '">Adobe软件许可协议*</a> 和 <a href="' + r + '">Flash Helper Service使用协议</a>' : t ? 'By clicking the“Install now”button, you acknowledge that you have read and agree to the <br><a href="' + n + '">Adobe Software Licensing Agreement*</a>' : '通过单击“立即下载”按钮，您已经阅读并同意<a href="' + o + '">Adobe软件许可协议*</a>'
            }, t.prototype.create = function() {
                var n = this,
                    i = e.prototype.create.call(this),
                    o = document.createElement("div");
                r.isEnglishVersion() ? o.innerHTML = '\n                <div class="ov-title">Adobe Flash Player</div>\n                <ul class="ov-steps">\n                    <li>\n                        <p>Step 1: select OS</p>\n                        <div class="owner-select"></div>\n                    </li>\n                    <li>\n                        <p>Step 2: select version</p>\n                        <div class="owner-select"></div>\n                    </li>\n                </ul>\n                <div class="ov-text">Terms & conditions:<p id="ov-condition-provision"></p></div>\n                <div class="ov-download en">\n                    <div id="ov-start" class="disable">\n                        <a href="" target="_self"></a>\n                        <span></span>\n                    </div>\n                    <div id="ov-total">Total size:<i>0.00MB</i></div>\n                </div>\n            ' : o.innerHTML = '\n                <div class="ov-title">Adobe Flash Player</div>\n                <ul class="ov-steps">\n                    <li>\n                        <p>第 1 步：选择操作系统</p>\n                        <div class="owner-select"></div>\n                    </li>\n                    <li>\n                        <p>第 2 步：选择版本</p>\n                        <div class="owner-select"></div>\n                    </li>\n                </ul>\n                <div class="ov-text">条款与条件：<p id="ov-condition-provision"></p></div>\n                <div class="ov-download">\n                    <div id="ov-start" class="disable">\n                        <a href="" target="_self"></a>\n                        <span></span>\n                    </div>\n                    <div id="ov-total">总大小：<i>0.00MB</i></div>\n                </div>\n            ',
                    r.$_(this.getID()).appendChild(o), this.start = r.$_("ov-start"), this.startATag = this.start.getElementsByTagName("a")[0], this.total = r.$_("ov-total").getElementsByTagName("i")[0];
                var a = o.getElementsByTagName("li"),
                    c = a[1].getElementsByTagName("div")[0],
                    l = this.verCombo = new s["default"](c);
                l.on("changed", function() {
                    var e;
                    try {
                        e = t.strategies[p.selected].list[l.selected].info
                    } catch (i) {}
                    e && n.protocolCheckBox.checked && e(function(e) {
                        n.start.className = "", n.startATag.href = e.downloadURL, n.total.innerHTML = e.size
                    })
                });
                var u = a[0].getElementsByTagName("div")[0],
                    p = this.sysCombo = new s["default"](u);
                return p.on("changed", function(e) {
                    var i = t.strategies[e];
                    if (i) {
                        l.clean();
                        for (var o = 0; o < i.list.length; o++) i.list[o].text(function(e) {
                            return l.add(e)
                        });
                        n.start.className = "disable", n.startATag.removeAttribute("href"), n.total.innerHTML = "0.00MB";
                        var a = /(OS X|Linux)/i.test(i.text);
                        r.$_("ov-condition-provision").innerHTML = n.getConditionProvisionString(!a, r.isEnglishVersion())
                    }
                }), i
            }, t.prototype.show = function() {
                e.prototype.show.call(this);
                for (var n = [], i = 0; i < t.strategies.length; i++) n.push(t.strategies[i].text);
                this.sysCombo.add(n);
                var o = c.os && c.os.family && /OS X/i.test(c.os.toString());
                r.$_("ov-condition-provision").innerHTML = this.getConditionProvisionString(!o, r.isEnglishVersion())
            }, t.prototype.hide = function() {
                e.prototype.hide.call(this), this.start.className = "disable", this.startATag.removeAttribute("href"), this.total.innerHTML = "0.00MB", this.sysCombo.clean(), this.verCombo.clean(), r.$_("ov-condition-provision").innerHTML = ""
            }, t.strategies = p, t
        }(o["default"]);
    t["default"] = f
}, function(e, t) {
    "use strict";

    function n(e, t) {
        void 0 === t && (t = "");
        var n = e.version,
            i = e.size,
            o = e.downloadURL,
            r = e.downloadURLForNotSource,
            a = e.date;
        return t ? {
            "version": n,
            "size": i,
            "downloadURL": o,
            "date": a
        } : {
            "version": n,
            "size": i,
            "downloadURL": r,
            "date": a
        }
    }

    // function i() {
    //     var e = {
    //         "www.flash.cn": "api.flash.cn",
    //         "stage.flash.cn": "stage-api.flash.cn"
    //     };
    //     return e[location.host] ? "//" + e[location.host] + "/config/flashVersion" : "/config/flashVersion"
    // }

    // function o(e) {
    //     var t = "_flash_install_packages_",
    //         n = window[t],
    //         o = document.createElement("script");
    //     window[t] = function(i) {
    //         window[t] = n, setTimeout(function() {
    //             return document.body.removeChild(o)
    //         }), e(i)
    //     }, o.src = i(), document.body.appendChild(o)
    // }

    function r(e) {
        a ? e(a) : (c.push(e), s || (s = !0, o(function(e) {
            a = e;
            for (var t = 0; t < c.length; t++) c[t](e)
        })))
    }
    t.__esModule = !0, t.translate = n;
    var a, s, c = [];
    t.getPackages = r, t.activex = {
        "check": function(e) {
            return /(IE|Microsoft Edge)/i.test(e)
        },
        "info": function(e, t) {
            void 0 === e && (e = ""), r(function(i) {
                return t(n(i.activex, e))
            })
        }
    }, t.ppapi = {
        "check": function(e) {
            return /(Opera|Chrome)/i.test(e)
        },
        "info": function(e, t) {
            void 0 === e && (e = ""), r(function(i) {
                return t(n(i.ppapi, e))
            })
        }
    }, t.npapi = {
        "check": function(e) {
            return /(Firefox|Safari)/i.test(e)
        },
        "info": function(e, t) {
            void 0 === e && (e = ""), r(function(i) {
                return t(n(i.npapi, e))
            })
        }
    }, t.mac_ppapi = {
        "check": function(e) {
            return /(Opera|Chrome)/i.test(e)
        },
        "info": function(e, t) {
            void 0 === e && (e = ""), r(function(i) {
                return t(n(i["mac-ppapi"], e))
            })
        }
    }, t.mac_npapi = {
        "check": function(e) {
            return /(Firefox|Safari)/i.test(e)
        },
        "info": function(e, t) {
            void 0 === e && (e = ""), r(function(i) {
                return t(n(i["mac-npapi"], e))
            })
        }
    };
    var l = function() {
        function e() {}
        return e.prototype.arch = function(e) {
            return this._arch = e, this
        }, e.prototype.type = function(e) {
            return this._type = e, this
        }, e.prototype.get = function() {
            var e = this,
                t = e._arch,
                i = e._type,
                o = function(e, o) {
                    void 0 === e && (e = "");
                    var a = "linux-" + t + "-" + i;
                    r(function(t) {
                        return o(n(t[a], e))
                    })
                };
            return {
                "info": o
            }
        }, e
    }();
    t.linux = new l
}, function(e, t, n) {
    "use strict";
    var i = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            "__proto__": []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function i() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
        }
    }();
    t.__esModule = !0;
    var o = n(2),
        r = n(6),
        a = function(e) {
            function t(t) {
                var n = e.call(this) || this;
                return n.element = t, n.selected = -1, n.create(), n
            }
            return i(t, e), t.prototype.create = function() {
                var e = this,
                    t = this.element;
                t.innerHTML = "<i></i>", this.text = document.createElement("span"), t.appendChild(this.text);
                var n = this.list = document.createElement("ul");
                o.on(n, "click", function(t) {
                    for (var i = t || window.event, o = i.target || i.srcElement, r = n.getElementsByTagName("li"), a = 0, s = r.length; a < s; a++) {
                        var c = r[a];
                        if (o === c) {
                            e.selected !== a && (e.select(a), e.emit("changed", a));
                            break
                        }
                    }
                }), t.appendChild(n);
                var i;
                o.on(t, "click", function() {
                    var e = /\bcur\b/.test(t.className);
                    i = function() {
                        e ? t.className = "owner-select" : t.className = "owner-select cur"
                    }
                }), o.on(document, "click", function() {
                    t.className = "owner-select", i && (i(), i = null)
                })
            }, t.prototype.select = function(e) {
                var t = this.list,
                    n = t.getElementsByTagName("li"),
                    i = n[e];
                i && (this.selected = e, this.text.innerHTML = i.innerHTML)
            }, t.prototype.clean = function() {
                this.text.innerHTML = "", this.list.innerHTML = "", this.selected = -1
            }, t.prototype.add = function(e) {
                if (e instanceof Array) {
                    for (var t = document.createDocumentFragment(), n = 0; n < e.length; n++) {
                        var i = document.createElement("li");
                        i.innerHTML = e[n], t.appendChild(i)
                    }
                    this.list.appendChild(t)
                } else this.add([e])
            }, t
        }(r);
    t["default"] = a
}, function(e, t, n) {
    "use strict";
    var i = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            "__proto__": []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function i() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
        }
    }();
    t.__esModule = !0;
    var o = n(8),
        r = n(2),
        a = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i(t, e), t.prototype.getID = function() {
                return "user-protocol"
            }, t.prototype.showOfModify = function(e, t) {
                this.show(), this.content.innerHTML = '\n            <div class="up-title">' + e + '</div>\n            <div class="up-iframe">\n                <iframe frameborder="0" allowtransparency="true" src="' + t + '" />\n            </div>\n        '
            }, t.prototype.create = function() {
                var t = e.prototype.create.call(this);
                return r.$_(this.getID()).appendChild(this.content = document.createElement("div")), t
            }, t
        }(o["default"]);
    t["default"] = a
}, function(e, t) {
    "use strict";

    function n(e) {
        return decodeURIComponent(e.replace(/\+/g, " "))
    }

    function i(e) {
        for (var t, i = /([^=?&]+)=?([^&]*)/g, o = {}; t = i.exec(e);) {
            var r = n(t[1]),
                a = n(t[2]);
            r in o || (o[r] = a)
        }
        return o
    }

    function o(e, t) {
        t = t || "";
        var n, i, o = [];
        "string" != typeof t && (t = "?");
        for (i in e) a.call(e, i) && (n = e[i], n || null !== n && n !== r && !isNaN(n) || (n = ""), o.push(encodeURIComponent(i) + "=" + encodeURIComponent(n)));
        return o.length ? t + o.join("&") : ""
    }
    var r, a = Object.prototype.hasOwnProperty;
    t.stringify = o, t.parse = i
}, function(e, t, n) {
    "use strict";
    var i = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            "__proto__": []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function i() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
        }
    }();
    t.__esModule = !0;
    var o = n(4),
        r = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i(t, e), t
        }(o["default"]("ppapi"));
    t["default"] = r
}, function(e, t, n) {
    "use strict";
    var i = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            "__proto__": []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function i() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
        }
    }();
    t.__esModule = !0;
    var o = n(4),
        r = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i(t, e), t
        }(o["default"]("npapi"));
    t["default"] = r
}, function(e, t, n) {
    "use strict";
    var i = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            "__proto__": []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function i() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
        }
    }();
    t.__esModule = !0;
    var o = n(4),
        r = n(2),
        a = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i(t, e), t.prototype.init = function() {
                var t = r.$_("ic-popup"),
                    n = t.innerHTML.split("和");
                return t.innerHTML = n[0].replace(/\s+$/, ""), e.prototype.init.call(this)
            }, t
        }(o["default"]("mac_ppapi"));
    t["default"] = a
}, function(e, t, n) {
    "use strict";
    var i = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            "__proto__": []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function i() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
        }
    }();
    t.__esModule = !0;
    var o = n(4),
        r = n(2),
        a = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i(t, e), t.prototype.init = function() {
                var t = r.$_("ic-popup"),
                    n = t.innerHTML.split("和");
                return t.innerHTML = n[0].replace(/\s+$/, ""), e.prototype.init.call(this)
            }, t
        }(o["default"]("mac_npapi"));
    t["default"] = a
}, function(e, t, n) {
    "use strict";
    var i = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            "__proto__": []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function i() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
        }
    }();
    t.__esModule = !0;
    var o = n(4),
        r = n(2),
        a = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i(t, e), t.prototype.init = function() {
                e.prototype.init.call(this), this.otherVersion.show();
                var t = r.$_("ic-checkbox").parentNode;
                t.className = "ic-protocol hidden"
            }, t.prototype.update = function() {}, t.isValidByBrowserName = function() {
                return !0
            }, t
        }(o["default"]("linux"));
    t["default"] = a
}, function(module, exports) {
    var JSON = {};
    ! function() {
        "use strict";

        function f(e) {
            return e < 10 ? "0" + e : e
        }

        function quote(e) {
            return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
                var t = meta[e];
                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
        }

        function str(e, t) {
            var n, i, o, r, a, s = gap,
                c = t[e];
            switch (c && "object" == typeof c && "function" == typeof c.toJSON && (c = c.toJSON(e)), "function" == typeof rep && (c = rep.call(t, e, c)), typeof c) {
                case "string":
                    return quote(c);
                case "number":
                    return isFinite(c) ? String(c) : "null";
                case "boolean":
                case "null":
                    return String(c);
                case "object":
                    if (!c) return "null";
                    if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(c)) {
                        for (r = c.length, n = 0; n < r; n += 1) a[n] = str(n, c) || "null";
                        return o = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" : "[" + a.join(",") + "]", gap = s, o
                    }
                    if (rep && "object" == typeof rep)
                        for (r = rep.length, n = 0; n < r; n += 1) "string" == typeof rep[n] && (i = rep[n], o = str(i, c), o && a.push(quote(i) + (gap ? ": " : ":") + o));
                    else
                        for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (o = str(i, c), o && a.push(quote(i) + (gap ? ": " : ":") + o));
                    return o = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" : "{" + a.join(",") + "}", gap = s, o
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(e) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(e, t, n) {
            var i;
            if (gap = "", indent = "", "number" == typeof n)
                for (i = 0; i < n; i += 1) indent += " ";
            else "string" == typeof n && (indent = n);
            if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
            return str("", {
                "": e
            })
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(e, t) {
                var n, i, o = e[t];
                if (o && "object" == typeof o)
                    for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (i = walk(o, n), void 0 !== i ? o[n] = i : delete o[n]);
                return reviver.call(e, t, o)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
                    return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(), module.exports = JSON
}]);