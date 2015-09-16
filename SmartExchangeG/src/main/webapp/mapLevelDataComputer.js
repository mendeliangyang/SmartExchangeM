

function mapLevelDataComputer() {
    baiduAPI();
    return BMap;
}
function baiduAPI() {
    var window = {};
    window.VTC = {
        "ditu": {
            "normal": {"version": "087", "updateDate": "20150915"},
            "satellite": {"version": "009", "updateDate": "20150601"},
            "normalTraffic": {"version": "081", "updateDate": "20150815"},
            "satelliteTraffic": {"version": "083", "updateDate": "20150815"},
            "mapJS": {"version": "104", "updateDate": "20150915"},
            "satelliteStreet": {"version": "083", "updateDate": "20150815"},
            "panoClick": {"version": "1033", "updateDate": "201400823"},
            "panoUdt": {"version": "20150909", "updateDate": "20150909"},
            "panoSwfAPI": {"version": "20150123", "updateDate": "20150123"},
            "panoSwfPlace": {"version": "20141112", "updateDate": "20141112"},
            "earthVector": {"version": "001", "updateDate": "20150826"}
        },
        "webapp": {
            "high_normal": {"version": "001", "updateDate": "20141209"},
            "lower_normal": {"version": "002", "updateDate": "20150529"}
        },
        "api_for_mobile": {
            "vector": {"version": "002", "updateDate": "20150529"},
            "vectorIcon": {"version": "002", "updateDate": "20150529"}
        }
    };
    window.BMAP_AUTHENTIC_KEY = "oav3eqd5GKqVKjiginSVM6kd";
    (function () {
        function aa(a) {
            throw a;
        }

        var j = void 0, o = !0, p = null, q = !1;

        function s() {
            return function () {
            }
        }

        function ba(a) {
            return function (b) {
                this[a] = b
            }
        }

        function u(a) {
            return function () {
                return this[a]
            }
        }

        function da(a) {
            return function () {
                return a
            }
        }

        var ea, fa = [];

        function ga(a) {
            return function () {
                return fa[a].apply(this, arguments)
            }
        }

        function ha(a, b) {
            return fa[a] = b
        }

        var ia, w = ia = w || {version: "1.3.4"};
        w.Q = "$BAIDU$";
        window[w.Q] = window[w.Q] || {};
        w.object = w.object || {};
        w.extend = w.object.extend = function (a, b) {
            for (var c in b)
                b.hasOwnProperty(c) && (a[c] = b[c]);
            return a
        };
        w.B = w.B || {};
        w.B.N = function (a) {
            return "string" == typeof a || a instanceof String ? document.getElementById(a) : a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType) ? a : p
        };
        w.N = w.rc = w.B.N;
        w.B.J = function (a) {
            a = w.B.N(a);
            if (a === p)
                return a;
            a.style.display = "none";
            return a
        };
        w.J = w.B.J;
        w.lang = w.lang || {};
        w.lang.ig = function (a) {
            return "[object String]" == Object.prototype.toString.call(a)
        };
        w.ig = w.lang.ig;
        w.B.zj = function (a) {
            return w.lang.ig(a) ? document.getElementById(a) : a
        };
        w.zj = w.B.zj;
        w.B.getElementsByClassName = function (a, b) {
            var c;
            if (a.getElementsByClassName)
                c = a.getElementsByClassName(b);
            else {
                var d = a;
                d == p && (d = document);
                c = [];
                var d = d.getElementsByTagName("*"), e = d.length, f = RegExp("(^|\\s)" + b + "(\\s|$)"), g, i;
                for (i = g = 0; g < e; g++)
                    f.test(d[g].className) && (c[i] = d[g], i++)
            }
            return c
        };
        w.getElementsByClassName = w.B.getElementsByClassName;
        w.B.contains = function (a, b) {
            var c = w.B.zj, a = c(a), b = c(b);
            return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
        };
        w.S = w.S || {};
        /msie (\d+\.\d)/i.test(navigator.userAgent) && (w.S.ba = w.ba = document.documentMode || +RegExp.$1);
        var la = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            rowspan: "rowSpan",
            valign: "vAlign",
            usemap: "useMap",
            frameborder: "frameBorder"
        };
        8 > w.S.ba ? (la["for"] = "htmlFor", la["class"] = "className") : (la.htmlFor = "for", la.className = "class");
        w.B.LF = la;
        w.B.CE = function (a, b, c) {
            a = w.B.N(a);
            if (a === p)
                return a;
            if ("style" == b)
                a.style.cssText = c;
            else {
                b = w.B.LF[b] || b;
                a.setAttribute(b, c)
            }
            return a
        };
        w.CE = w.B.CE;
        w.B.DE = function (a, b) {
            a = w.B.N(a);
            if (a === p)
                return a;
            for (var c in b)
                w.B.CE(a, c, b[c]);
            return a
        };
        w.DE = w.B.DE;
        w.xk = w.xk || {};
        (function () {
            var a = RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
            w.xk.trim = function (b) {
                return ("" + b).replace(a, "")
            }
        })();
        w.trim = w.xk.trim;
        w.xk.so = function (a, b) {
            var a = "" + a, c = Array.prototype.slice.call(arguments, 1), d = Object.prototype.toString;
            if (c.length) {
                c = c.length == 1 ? b !== p && /\[object Array\]|\[object Object\]/.test(d.call(b)) ? b : c : c;
                return a.replace(/#\{(.+?)\}/g, function (a, b) {
                    var g = c[b];
                    "[object Function]" == d.call(g) && (g = g(b));
                    return "undefined" == typeof g ? "" : g
                })
            }
            return a
        };
        w.so = w.xk.so;
        w.B.Ob = function (a, b) {
            a = w.B.N(a);
            if (a === p)
                return a;
            for (var c = a.className.split(/\s+/), d = b.split(/\s+/), e, f = d.length, g, i = 0; i < f; ++i) {
                g = 0;
                for (e = c.length; g < e; ++g)
                    if (c[g] == d[i]) {
                        c.splice(g, 1);
                        break
                    }
            }
            a.className = c.join(" ");
            return a
        };
        w.Ob = w.B.Ob;
        w.B.Zw = function (a, b, c) {
            a = w.B.N(a);
            if (a === p)
                return a;
            var d;
            if (a.insertAdjacentHTML)
                a.insertAdjacentHTML(b, c);
            else {
                d = a.ownerDocument.createRange();
                b = b.toUpperCase();
                if (b == "AFTERBEGIN" || b == "BEFOREEND") {
                    d.selectNodeContents(a);
                    d.collapse(b == "AFTERBEGIN")
                } else {
                    b = b == "BEFOREBEGIN";
                    d[b ? "setStartBefore" : "setEndAfter"](a);
                    d.collapse(b)
                }
                d.insertNode(d.createContextualFragment(c))
            }
            return a
        };
        w.Zw = w.B.Zw;
        w.B.show = function (a) {
            a = w.B.N(a);
            if (a === p)
                return a;
            a.style.display = "";
            return a
        };
        w.show = w.B.show;
        w.B.ZC = function (a) {
            a = w.B.N(a);
            return a === p ? a : a.nodeType == 9 ? a : a.ownerDocument || a.document
        };
        w.B.Oa = function (a, b) {
            a = w.B.N(a);
            if (a === p)
                return a;
            for (var c = b.split(/\s+/), d = a.className, e = " " + d + " ", f = 0, g = c.length; f < g; f++)
                e.indexOf(" " + c[f] + " ") < 0 && (d = d + (" " + c[f]));
            a.className = d;
            return a
        };
        w.Oa = w.B.Oa;
        w.B.XA = w.B.XA || {};
        w.B.ol = w.B.ol || [];
        w.B.ol.filter = function (a, b, c) {
            for (var d = 0, e = w.B.ol, f; f = e[d]; d++)
                if (f = f[c])
                    b = f(a, b);
            return b
        };
        w.xk.lN = function (a) {
            return a.indexOf("-") < 0 && a.indexOf("_") < 0 ? a : a.replace(/[-_][^-_]/g, function (a) {
                return a.charAt(1).toUpperCase()
            })
        };
        w.B.nZ = function (a) {
            w.B.ys(a, "expand") ? w.B.Ob(a, "expand") : w.B.Oa(a, "expand")
        };
        w.B.ys = function (a) {
            if (arguments.length <= 0 || typeof a === "function")
                return this;
            if (this.size() <= 0)
                return q;
            var a = a.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " "), b = a.split(" "), c;
            w.forEach(this, function (a) {
                for (var a = a.className, e = 0; e < b.length; e++)
                    if (!~(" " + a + " ").indexOf(" " + b[e] + " ")) {
                        c = q;
                        return
                    }
                c !== q && (c = o)
            });
            return c
        };
        w.B.fj = function (a, b) {
            var c = w.B, a = c.N(a);
            if (a === p)
                return a;
            var b = w.xk.lN(b), d = a.style[b];
            if (!d)
                var e = c.XA[b], d = a.currentStyle || (w.S.ba ? a.style : getComputedStyle(a, p)), d = e && e.get ? e.get(a, d) : d[e || b];
            if (e = c.ol)
                d = e.filter(b, d, "get");
            return d
        };
        w.fj = w.B.fj;
        /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (w.S.opera = +RegExp.$1);
        w.S.jL = /webkit/i.test(navigator.userAgent);
        w.S.VW = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
        w.S.KD = "CSS1Compat" == document.compatMode;
        w.B.V = function (a) {
            a = w.B.N(a);
            if (a === p)
                return a;
            var b = w.B.ZC(a), c = w.S, d = w.B.fj;
            c.VW > 0 && b.getBoxObjectFor && d(a, "position");
            var e = {left: 0, top: 0}, f;
            if (a == (c.ba && !c.KD ? b.body : b.documentElement))
                return e;
            if (a.getBoundingClientRect) {
                a = a.getBoundingClientRect();
                e.left = Math.floor(a.left) + Math.max(b.documentElement.scrollLeft, b.body.scrollLeft);
                e.top = Math.floor(a.top) + Math.max(b.documentElement.scrollTop, b.body.scrollTop);
                e.left = e.left - b.documentElement.clientLeft;
                e.top = e.top - b.documentElement.clientTop;
                a = b.body;
                b = parseInt(d(a, "borderLeftWidth"));
                d = parseInt(d(a, "borderTopWidth"));
                if (c.ba && !c.KD) {
                    e.left = e.left - (isNaN(b) ? 2 : b);
                    e.top = e.top - (isNaN(d) ? 2 : d)
                }
            } else {
                f = a;
                do {
                    e.left = e.left + f.offsetLeft;
                    e.top = e.top + f.offsetTop;
                    if (c.jL > 0 && d(f, "position") == "fixed") {
                        e.left = e.left + b.body.scrollLeft;
                        e.top = e.top + b.body.scrollTop;
                        break
                    }
                    f = f.offsetParent
                } while (f && f != a);
                if (c.opera > 0 || c.jL > 0 && d(a, "position") == "absolute")
                    e.top = e.top - b.body.offsetTop;
                for (f = a.offsetParent; f && f != b.body; ) {
                    e.left = e.left - f.scrollLeft;
                    if (!c.opera || f.tagName != "TR")
                        e.top = e.top - f.scrollTop;
                    f = f.offsetParent
                }
            }
            return e
        };
        /firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (w.S.fg = +RegExp.$1);
        /BIDUBrowser/i.test(navigator.userAgent) && (w.S.V_ = o);
        var ma = navigator.userAgent;
        /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(ma) && !/chrome/i.test(ma) && (w.S.GM = +(RegExp.$1 || RegExp.$2));
        /chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (w.S.iJ = +RegExp.$1);
        w.Yb = w.Yb || {};
        w.Yb.qb = function (a, b) {
            var c, d, e = a.length;
            if ("function" == typeof b)
                for (d = 0; d < e; d++) {
                    c = a[d];
                    c = b.call(a, c, d);
                    if (c === q)
                        break
                }
            return a
        };
        w.qb = w.Yb.qb;
        w.lang.Q = function () {
            return "TANGRAM__" + (window[w.Q]._counter++).toString(36)
        };
        window[w.Q]._counter = window[w.Q]._counter || 1;
        window[w.Q]._instances = window[w.Q]._instances || {};
        w.lang.Gs = function (a) {
            return "[object Function]" == Object.prototype.toString.call(a)
        };
        w.lang.qa = function (a) {
            this.Q = a || w.lang.Q();
            window[w.Q]._instances[this.Q] = this
        };
        window[w.Q]._instances = window[w.Q]._instances || {};
        w.lang.qa.prototype.Qh = ga(0);
        w.lang.qa.prototype.toString = function () {
            return "[object " + (this.nP || "Object") + "]"
        };
        w.lang.ty = function (a, b) {
            this.type = a;
            this.returnValue = o;
            this.target = b || p;
            this.currentTarget = p
        };
        w.lang.qa.prototype.addEventListener = function (a, b, c) {
            if (w.lang.Gs(b)) {
                !this.ti && (this.ti = {});
                var d = this.ti, e;
                if (typeof c == "string" && c) {
                    /[^\w\-]/.test(c) && aa("nonstandard key:" + c);
                    e = b.LK = c
                }
                a.indexOf("on") != 0 && (a = "on" + a);
                typeof d[a] != "object" && (d[a] = {});
                e = e || w.lang.Q();
                b.LK = e;
                d[a][e] = b
            }
        };
        w.lang.qa.prototype.removeEventListener = function (a, b) {
            if (w.lang.Gs(b))
                b = b.LK;
            else if (!w.lang.ig(b))
                return;
            !this.ti && (this.ti = {});
            a.indexOf("on") != 0 && (a = "on" + a);
            var c = this.ti;
            c[a] && c[a][b] && delete c[a][b]
        };
        w.lang.qa.prototype.dispatchEvent = function (a, b) {
            w.lang.ig(a) && (a = new w.lang.ty(a));
            !this.ti && (this.ti = {});
            var b = b || {}, c;
            for (c in b)
                a[c] = b[c];
            var d = this.ti, e = a.type;
            a.target = a.target || this;
            a.currentTarget = this;
            e.indexOf("on") != 0 && (e = "on" + e);
            w.lang.Gs(this[e]) && this[e].apply(this, arguments);
            if (typeof d[e] == "object")
                for (c in d[e])
                    d[e][c].apply(this, arguments);
            return a.returnValue
        };
        w.lang.ia = function (a, b, c) {
            var d, e, f = a.prototype;
            e = new Function;
            e.prototype = b.prototype;
            e = a.prototype = new e;
            for (d in f)
                e[d] = f[d];
            a.prototype.constructor = a;
            a.dZ = b.prototype;
            if ("string" == typeof c)
                e.nP = c
        };
        w.ia = w.lang.ia;
        w.lang.Od = function (a) {
            return window[w.Q]._instances[a] || p
        };
        w.platform = w.platform || {};
        w.platform.cL = /macintosh/i.test(navigator.userAgent);
        w.platform.t1 = /MicroMessenger/i.test(navigator.userAgent);
        w.platform.kL = /windows/i.test(navigator.userAgent);
        w.platform.cX = /x11/i.test(navigator.userAgent);
        w.platform.km = /android/i.test(navigator.userAgent);
        /android (\d+\.\d)/i.test(navigator.userAgent) && (w.platform.UI = w.UI = RegExp.$1);
        w.platform.XW = /ipad/i.test(navigator.userAgent);
        w.platform.FD = /iphone/i.test(navigator.userAgent);
        function na(a, b) {
            a.domEvent = b = window.event || b;
            a.clientX = b.clientX || b.pageX;
            a.clientY = b.clientY || b.pageY;
            a.offsetX = b.offsetX || b.layerX;
            a.offsetY = b.offsetY || b.layerY;
            a.screenX = b.screenX;
            a.screenY = b.screenY;
            a.ctrlKey = b.ctrlKey || b.metaKey;
            a.shiftKey = b.shiftKey;
            a.altKey = b.altKey;
            if (b.touches) {
                a.touches = [];
                for (var c = 0; c < b.touches.length; c++)
                    a.touches.push({
                        clientX: b.touches[c].clientX,
                        clientY: b.touches[c].clientY,
                        screenX: b.touches[c].screenX,
                        screenY: b.touches[c].screenY,
                        pageX: b.touches[c].pageX,
                        pageY: b.touches[c].pageY,
                        target: b.touches[c].target,
                        identifier: b.touches[c].identifier
                    })
            }
            if (b.changedTouches) {
                a.changedTouches = [];
                for (c = 0; c < b.changedTouches.length; c++)
                    a.changedTouches.push({
                        clientX: b.changedTouches[c].clientX,
                        clientY: b.changedTouches[c].clientY,
                        screenX: b.changedTouches[c].screenX,
                        screenY: b.changedTouches[c].screenY,
                        pageX: b.changedTouches[c].pageX,
                        pageY: b.changedTouches[c].pageY,
                        target: b.changedTouches[c].target,
                        identifier: b.changedTouches[c].identifier
                    })
            }
            if (b.targetTouches) {
                a.targetTouches = [];
                for (c = 0; c < b.targetTouches.length; c++)
                    a.targetTouches.push({
                        clientX: b.targetTouches[c].clientX,
                        clientY: b.targetTouches[c].clientY,
                        screenX: b.targetTouches[c].screenX,
                        screenY: b.targetTouches[c].screenY,
                        pageX: b.targetTouches[c].pageX,
                        pageY: b.targetTouches[c].pageY,
                        target: b.targetTouches[c].target,
                        identifier: b.targetTouches[c].identifier
                    })
            }
            a.rotation = b.rotation;
            a.scale = b.scale;
            return a
        }

        w.lang.mw = function (a) {
            var b = window[w.Q];
            b.uR && delete b.uR[a]
        };
        w.event = {};
        w.F = w.event.F = function (a, b, c) {
            if (!(a = w.N(a)))
                return a;
            b = b.replace(/^on/, "");
            a.addEventListener ? a.addEventListener(b, c, q) : a.attachEvent && a.attachEvent("on" + b, c);
            return a
        };
        w.ke = w.event.ke = function (a, b, c) {
            if (!(a = w.N(a)))
                return a;
            b = b.replace(/^on/, "");
            a.removeEventListener ? a.removeEventListener(b, c, q) : a.detachEvent && a.detachEvent("on" + b, c);
            return a
        };
        w.B.ys = function (a, b) {
            if (!a || !a.className || typeof a.className != "string")
                return q;
            var c = -1;
            try {
                c = a.className == b || a.className.search(RegExp("(\\s|^)" + b + "(\\s|$)"))
            } catch (d) {
                return q
            }
            return c > -1
        };
        w.TJ = function () {
            function a(a) {
                document.addEventListener && (this.element = a, this.WJ = this.gk ? "touchstart" : "mousedown", this.HC = this.gk ? "touchmove" : "mousemove", this.GC = this.gk ? "touchend" : "mouseup", this.Zg = q, this.At = this.zt = 0, this.element.addEventListener(this.WJ, this, q), ia.F(this.element, "mousedown", s()), this.handleEvent(p))
            }

            a.prototype = {
                gk: "ontouchstart"in window || "createTouch"in document, start: function (a) {
                    oa(a);
                    this.Zg = q;
                    this.zt = this.gk ? a.touches[0].clientX : a.clientX;
                    this.At = this.gk ? a.touches[0].clientY : a.clientY;
                    this.element.addEventListener(this.HC, this, q);
                    this.element.addEventListener(this.GC, this, q)
                }, move: function (a) {
                    pa(a);
                    var c = this.gk ? a.touches[0].clientY : a.clientY;
                    if (10 < Math.abs((this.gk ? a.touches[0].clientX : a.clientX) - this.zt) || 10 < Math.abs(c - this.At))
                        this.Zg = o
                }, end: function (a) {
                    pa(a);
                    this.Zg || (a = document.createEvent("Event"), a.initEvent("tap", q, o), this.element.dispatchEvent(a));
                    this.element.removeEventListener(this.HC, this, q);
                    this.element.removeEventListener(this.GC, this, q)
                }, handleEvent: function (a) {
                    if (a)
                        switch (a.type) {
                            case this.WJ:
                                this.start(a);
                                break;
                            case this.HC:
                                this.move(a);
                                break;
                            case this.GC:
                                this.end(a)
                        }
                }
            };
            return function (b) {
                return new a(b)
            }
        }();
        var z = window.BMap || {};
        z.version = "2.0";
        z.DI = 0.34 > Math.random();
        0 <= z.version.indexOf("#") && (z.version = "2.0");
        z.Zq = [];
        z.Ge = function (a) {
            this.Zq.push(a)
        };
        z.Pq = [];
        z.xm = function (a) {
            this.Pq.push(a)
        };
        z.HT = z.apiLoad || s();
        var qa = window.BMAP_AUTHENTIC_KEY;
        window.BMAP_AUTHENTIC_KEY = p;
        var ra = window.BMap_loadScriptTime, sa = (new Date).getTime(), ta = p, ua = o, va = p, wa = 5042, xa = 5002, za = 5003, Aa = "load_mapclick", Ba = 5038, Da = 5041, Ea = 5047, Fa = 5036, Ga = 5039, Ha = 5037, Ia = 5040, Ja = 5011, Ka = 7E3;

        function La(a, b) {
            if (a = w.N(a)) {
                var c = this;
                w.lang.qa.call(c);
                b = b || {};
                c.D = {
                    CB: 200,
                    Sb: o,
                    vw: q,
                    zC: o,
                    po: o,
                    qo: o,
                    RJ: o,
                    BC: o,
                    as: o,
                    tw: o,
                    Rl: o,
                    no: b.enable3DBuilding || q,
                    wc: 25,
                    YZ: 240,
                    vT: 450,
                    Jb: F.Jb,
                    od: F.od,
                    bx: !!b.bx,
                    Ub: Math.round(b.minZoom) || 1,
                    Mb: Math.round(b.maxZoom) || 19,
                    ub: b.mapType || Ma,
                    h2: q,
                    uw: o,
                    rw: 500,
                    eV: b.enableHighResolution !== q,
                    Yi: b.enableMapClick !== q,
                    devicePixelRatio: b.devicePixelRatio || window.devicePixelRatio || 1,
                    aF: b.vectorMapLevel || (G() ? 3 : 99),
                    ge: b.mapStyle || p,
                    lX: b.logoControl === q ? q : o,
                    PT: [],
                    Sv: b.beforeClickIcon || p
                };
                c.D.ge && (this.MW(c.D.ge.controls), this.XK(c.D.ge.geotableId));
                c.D.ge && c.D.ge.styleId && c.d1(c.D.ge.styleId);
                c.D.Jl = {
                    dark: {backColor: "#2D2D2D", textColor: "#bfbfbf", iconUrl: "dicons"},
                    normal: {backColor: "#F3F1EC", textColor: "#c61b1b", iconUrl: "icons"},
                    light: {backColor: "#EBF8FC", textColor: "#017fb4", iconUrl: "licons"}
                };
                b.enableAutoResize && (c.D.tw = b.enableAutoResize);
                b.enableStreetEntrance === q && (c.D.Rl = b.enableStreetEntrance);
                b.enableDeepZoom === q && (c.D.RJ = b.enableDeepZoom);
                var d = c.D.PT;
                if (G())
                    for (var e = 0, f = d.length; e < f; e++)
                        if (w.S[d[e]]) {
                            c.D.devicePixelRatio = 1;
                            break
                        }
                d = -1 < navigator.userAgent.toLowerCase().indexOf("android");
                e = -1 < navigator.userAgent.toLowerCase().indexOf("mqqbrowser");
                if (-1 < navigator.userAgent.toLowerCase().indexOf("UCBrowser") || d && e)
                    c.D.aF = 99;
                c.Ja = a;
                c.QA(a);
                a.unselectable = "on";
                a.innerHTML = "";
                a.appendChild(c.ja());
                b.size && this.vd(b.size);
                d = c.Lb();
                c.width = d.width;
                c.height = d.height;
                c.offsetX = 0;
                c.offsetY = 0;
                c.platform = a.firstChild;
                c.he = c.platform.firstChild;
                c.he.style.width = c.width + "px";
                c.he.style.height = c.height + "px";
                c.Zd = {};
                c.Se = new H(0, 0);
                c.jc = new H(0, 0);
                c.wa = 3;
                c.xc = 0;
                c.VB = p;
                c.UB = p;
                c.Ib = "";
                c.Xv = "";
                c.xh = {};
                c.xh.custom = {};
                c.Ia = 0;
                c.G = new Na(a, {zf: "api", zR: o});
                c.G.J();
                c.G.FE(c);
                b = b || {};
                d = c.ub = c.D.ub;
                c.je = d.Do();
                d === Oa && Pa(xa);
                d === Qa && Pa(za);
                d = c.D;
                d.EN = Math.round(b.minZoom);
                d.DN = Math.round(b.maxZoom);
                c.qu();
                c.H = {yc: q, Zb: 0, Ks: 0, pL: 0, x1: 0, vB: q, pE: -1, Ae: []};
                c.platform.style.cursor = c.D.Jb;
                for (e = 0; e < z.Zq.length; e++)
                    z.Zq[e](c);
                c.H.pE = e;
                c.P();
                J.load("map", function () {
                    c.rb()
                });
                c.D.Yi && (setTimeout(function () {
                    Pa(Aa)
                }, 1E3), J.load("mapclick", function () {
                    window.MPC_Mgr = window.MPC_Mgr || {};
                    window.MPC_Mgr[c.Q] = new Ra(c)
                }, o));
                Sa() && J.load("oppc", function () {
                    c.Jy()
                });
                G() && J.load("opmb", function () {
                    c.Jy()
                });
                a = p;
                c.dB = []
            }
        }

        w.lang.ia(La, w.lang.qa, "Map");
        w.extend(La.prototype, {
            ja: function () {
                var a = K("div"), b = a.style;
                b.overflow = "visible";
                b.position = "absolute";
                b.zIndex = "0";
                b.top = b.left = "0px";
                var b = K("div", {"class": "BMap_mask"}), c = b.style;
                c.position = "absolute";
                c.top = c.left = "0px";
                c.zIndex = "9";
                c.overflow = "hidden";
                c.WebkitUserSelect = "none";
                a.appendChild(b);
                return a
            }, QA: function (a) {
                var b = a.style;
                b.overflow = "hidden";
                "absolute" !== Ta(a).position && (b.position = "relative", b.zIndex = 0);
                b.backgroundColor = "#F3F1EC";
                b.color = "#000";
                b.textAlign = "left"
            }, P: function () {
                var a = this;
                a.vr = function () {
                    var b = a.Lb();
                    if (a.width !== b.width || a.height !== b.height) {
                        var c = new L(a.width, a.height), d = new M("onbeforeresize");
                        d.size = c;
                        a.dispatchEvent(d);
                        a.Pj((b.width - a.width) / 2, (b.height - a.height) / 2);
                        a.he.style.width = (a.width = b.width) + "px";
                        a.he.style.height = (a.height = b.height) + "px";
                        c = new M("onresize");
                        c.size = b;
                        a.dispatchEvent(c)
                    }
                };
                a.D.tw && (a.H.zr = setInterval(a.vr, 80))
            }, Pj: function (a, b, c, d) {
                var e = this.la().Bc(this.U()), f = this.je, g = o;
                c && H.bL(c) && (this.Se = new H(c.lng, c.lat), g = q);
                if (c = c && d ? f.om(c, this.Ib) : this.jc)
                    if (this.jc = new H(c.lng + a * e, c.lat - b * e), (a = f.Yg(this.jc, this.Ib)) && g)
                        this.Se = a
            }, sg: function (a, b) {
                if (Ua(a) && (this.qu(), this.dispatchEvent(new M("onzoomstart")), a = this.wn(a).zoom, a !== this.wa)) {
                    this.xc = this.wa;
                    this.wa = a;
                    var c;
                    b ? c = b : this.Rg() && (c = this.Rg().V());
                    c && (c = this.Vb(c, this.xc), this.Pj(this.width / 2 - c.x, this.height / 2 - c.y, this.mb(c, this.xc), o));
                    this.dispatchEvent(new M("onzoomstartcode"))
                }
            }, Cc: function (a) {
                this.sg(a)
            }, eF: function (a) {
                this.sg(this.wa + 1, a)
            }, fF: function (a) {
                this.sg(this.wa - 1, a)
            }, di: function (a) {
                a instanceof H && (this.jc = this.je.om(a, this.Ib), this.Se = H.bL(a) ? new H(a.lng, a.lat) : this.je.Yg(this.jc, this.Ib))
            }, mg: function (a, b) {
                a = Math.round(a) || 0;
                b = Math.round(b) || 0;
                this.Pj(-a, -b)
            }, Iv: function (a) {
                a && Va(a.Ne) && (a.Ne(this), this.dispatchEvent(new M("onaddcontrol", a)))
            }, uM: function (a) {
                a && Va(a.remove) && (a.remove(), this.dispatchEvent(new M("onremovecontrol", a)))
            }, Un: function (a) {
                a && Va(a.fa) && (a.fa(this), this.dispatchEvent(new M("onaddcontextmenu", a)))
            }, Zo: function (a) {
                a && Va(a.remove) && (this.dispatchEvent(new M("onremovecontextmenu", a)), a.remove())
            }, ya: function (a) {
                a && Va(a.Ne) && (a.Ne(this), this.dispatchEvent(new M("onaddoverlay", a)))
            }, Gb: function (a) {
                a && Va(a.remove) && (a.remove(), this.dispatchEvent(new M("onremoveoverlay", a)))
            }, lJ: function () {
                this.dispatchEvent(new M("onclearoverlays"))
            }, Ig: function (a) {
                a && this.dispatchEvent(new M("onaddtilelayer", a))
            }, hh: function (a) {
                a && this.dispatchEvent(new M("onremovetilelayer", a))
            }, og: function (a) {
                if (this.ub !== a) {
                    var b = new M("onsetmaptype");
                    b.Y1 = this.ub;
                    this.ub = this.D.ub = a;
                    this.je = this.ub.Do();
                    this.Pj(0, 0, this.Aa(), o);
                    this.qu();
                    var c = this.wn(this.U()).zoom;
                    this.sg(c);
                    this.dispatchEvent(b);
                    b = new M("onmaptypechange");
                    b.wa = c;
                    b.ub = a;
                    this.dispatchEvent(b);
                    (a === Wa || a === Qa) && Pa(za)
                }
            }, Hf: function (a) {
                var b = this;
                if (a instanceof H)
                    b.di(a, {noAnimation: o});
                else if (Xa(a))
                    if (b.ub === Oa) {
                        var c = F.yB[a];
                        c && (pt = c.m, b.Hf(pt))
                    } else {
                        var d = this.QG();
                        d.IE(function (c) {
                            0 === d.$l() && 2 === d.ta.result.type && (b.Hf(c.ek(0).point), Oa.$j(a) && b.EE(a))
                        });
                        d.search(a, {log: "center"})
                    }
            }, ae: function (a, b) {
                "[object Undefined]" !== Object.prototype.toString.call(b) && (b = parseInt(b));
                va = G() ? Ya.qi.Vj(z.DI ? 102 : 101) : Ya.qi.Vj(1);
                va.Bt();
                va.Ey = +new Date;
                va.bc("script_loaded", sa - ra);
                va.bc("centerAndZoom");
                var c = this;
                if (Xa(a))
                    if (c.ub === Oa) {
                        var d = F.yB[a];
                        d && (pt = d.m, c.ae(pt, b))
                    } else {
                        var e = c.QG();
                        e.IE(function (d) {
                            if (0 === e.$l() && (2 === e.ta.result.type || 11 === e.ta.result.type)) {
                                var d = d.ek(0).point, f = b || O.UC(e.ta.content.level, c);
                                c.ae(d, f);
                                Oa.$j(a) && c.EE(a)
                            }
                        });
                        e.search(a, {log: "center"})
                    }
                else if (a instanceof H && b) {
                    b = c.wn(b).zoom;
                    c.xc = c.wa || b;
                    c.wa = b;
                    d = c.Se;
                    c.Se = new H(a.lng, a.lat);
                    c.jc = c.je.om(c.Se, c.Ib);
                    c.VB = c.VB || c.wa;
                    c.UB = c.UB || c.Se;
                    var f = new M("onload"), g = new M("onloadcode");
                    f.point = new H(a.lng, a.lat);
                    f.pixel = c.Vb(c.Se, c.wa);
                    f.zoom = b;
                    c.loaded || (c.loaded = o, c.dispatchEvent(f), ta || (ta = Za()));
                    c.dispatchEvent(g);
                    f = new M("onmoveend");
                    f.sG = "centerAndZoom";
                    d.$a(c.Se) || c.dispatchEvent(f);
                    c.dispatchEvent(new M("onmoveend"));
                    c.xc !== c.wa && (d = new M("onzoomend"), d.sG = "centerAndZoom", c.dispatchEvent(d));
                    c.D.no && c.no()
                }
            }, QG: function () {
                this.H.vL || (this.H.vL = new $a(1));
                return this.H.vL
            }, reset: function () {
                this.ae(this.UB, this.VB, o)
            }, enableDragging: function () {
                this.D.Sb = o
            }, disableDragging: function () {
                this.D.Sb = q
            }, enableInertialDragging: function () {
                this.D.uw = o
            }, disableInertialDragging: function () {
                this.D.uw = q
            }, enableScrollWheelZoom: function () {
                this.D.qo = o
            }, disableScrollWheelZoom: function () {
                this.D.qo = q
            }, enableContinuousZoom: function () {
                this.D.po = o
            }, disableContinuousZoom: function () {
                this.D.po = q
            }, enableDoubleClickZoom: function () {
                this.D.zC = o
            }, disableDoubleClickZoom: function () {
                this.D.zC = q
            }, enableKeyboard: function () {
                this.D.vw = o
            }, disableKeyboard: function () {
                this.D.vw = q
            }, enablePinchToZoom: function () {
                this.D.as = o
            }, disablePinchToZoom: function () {
                this.D.as = q
            }, enableAutoResize: function () {
                this.D.tw = o;
                this.vr();
                this.H.zr || (this.H.zr = setInterval(this.vr, 80))
            }, disableAutoResize: function () {
                this.D.tw = q;
                this.H.zr && (clearInterval(this.H.zr), this.H.zr = p)
            }, no: function () {
                this.D.no = o;
                this.hn || (this.hn = new bb({$J: o}), this.Ig(this.hn))
            }, PU: function () {
                this.D.no = q;
                this.hn && (this.hh(this.hn), this.hn = p, delete this.hn)
            }, Lb: function () {
                return this.Mr && this.Mr instanceof L ? new L(this.Mr.width, this.Mr.height) : new L(this.Ja.clientWidth, this.Ja.clientHeight)
            }, vd: function (a) {
                a && a instanceof L ? (this.Mr = a, this.Ja.style.width = a.width + "px", this.Ja.style.height = a.height + "px") : this.Mr = p
            }, Aa: u("Se"), U: u("wa"), gU: function () {
                this.vr()
            }, wn: function (a) {
                var b = this.D.Ub, c = this.D.Mb, d = q, a = Math.round(a);
                a < b && (d = o, a = b);
                a > c && (d = o, a = c);
                return {zoom: a, IC: d}
            }, Fa: u("Ja"), Vb: function (a, b) {
                b = b || this.U();
                return this.je.Vb(a, b, this.jc, this.Lb(), this.Ib)
            }, mb: function (a, b) {
                b = b || this.U();
                return this.je.mb(a, b, this.jc, this.Lb(), this.Ib)
            }, Fe: function (a, b) {
                if (a) {
                    var c = this.Vb(new H(a.lng, a.lat), b);
                    c.x -= this.offsetX;
                    c.y -= this.offsetY;
                    return c
                }
            }, jM: function (a, b) {
                if (a) {
                    var c = new P(a.x, a.y);
                    c.x += this.offsetX;
                    c.y += this.offsetY;
                    return this.mb(c, b)
                }
            }, pointToPixelFor3D: function (a, b) {
                var c = map.Ib;
                this.ub === Oa && c && cb.rJ(a, this, b)
            }, T1: function (a, b) {
                var c = map.Ib;
                this.ub === Oa && c && cb.qJ(a, this, b)
            }, U1: function (a, b) {
                var c = this, d = map.Ib;
                c.ub === Oa && d && cb.rJ(a, c, function (a) {
                    a.x -= c.offsetX;
                    a.y -= c.offsetY;
                    b && b(a)
                })
            }, S1: function (a, b) {
                var c = map.Ib;
                this.ub === Oa && c && (a.x += this.offsetX, a.y += this.offsetY, cb.qJ(a, this, b))
            }, Nd: function (a) {
                if (!this.ax())
                    return new db;
                var b = a || {}, a = b.margins || [0, 0, 0, 0], c = b.zoom || p, b = this.mb({
                    x: a[3],
                    y: this.height - a[2]
                }, c), a = this.mb({x: this.width - a[1], y: a[0]}, c);
                return new db(b, a)
            }, ax: function () {
                return !!this.loaded
            }, CQ: function (a, b) {
                for (var c = this.la(), d = b.margins || [10, 10, 10, 10], e = b.zoomFactor || 0, f = d[1] + d[3], d = d[0] + d[2], g = c.yo(), i = c = c.Wl(); i >= g; i--) {
                    var k = this.la().Bc(i);
                    if (a.VE().lng / k < this.width - f && a.VE().lat / k < this.height - d)
                        break
                }
                i += e;
                i < g && (i = g);
                i > c && (i = c);
                return i
            }, xs: function (a, b) {
                var c = {center: this.Aa(), zoom: this.U()};
                if (!a || !a instanceof db && 0 === a.length || a instanceof db && a.kj())
                    return c;
                var d = [];
                a instanceof db ? (d.push(a.Af()), d.push(a.De())) : d = a.slice(0);
                for (var b = b || {}, e = [], f = 0, g = d.length; f < g; f++)
                    e.push(this.je.om(d[f], this.Ib));
                d = new db;
                for (f = e.length - 1; 0 <= f; f--)
                    d.extend(e[f]);
                if (d.kj())
                    return c;
                c = d.Aa();
                e = this.CQ(d, b);
                b.margins && (d = b.margins, f = (d[1] - d[3]) / 2, d = (d[0] - d[2]) / 2, g = this.la().Bc(e), b.offset && (f = b.offset.width, d = b.offset.height), c.lng += g * f, c.lat += g * d);
                c = this.je.Yg(c, this.Ib);
                return {center: c, zoom: e}
            }, jh: function (a, b) {
                var c;
                c = a && a.center ? a : this.xs(a, b);
                var b = b || {}, d = b.delay || 200;
                if (c.zoom === this.wa && b.enableAnimation !== q) {
                    var e = this;
                    setTimeout(function () {
                        e.di(c.center, {duration: 210})
                    }, d)
                } else
                    this.ae(c.center, c.zoom)
            }, Cf: u("Zd"), Rg: function () {
                return this.H.ab && this.H.ab.Ka() ? this.H.ab : p
            }, getDistance: function (a, b) {
                if (a && b) {
                    if (a.$a(b))
                        return 0;
                    var c = 0, c = Q.wo(a, b);
                    if (c === p || c === j)
                        c = 0;
                    return c
                }
            }, Lw: function () {
                var a = [], b = this.ka, c = this.me;
                if (b)
                    for (var d in b)
                        b[d]instanceof eb && a.push(b[d]);
                if (c) {
                    d = 0;
                    for (b = c.length; d < b; d++)
                        a.push(c[d])
                }
                return a
            }, la: u("ub"), Jy: function () {
                for (var a = this.H.pE; a < z.Zq.length; a++)
                    z.Zq[a](this);
                this.H.pE = a
            }, EE: function (a) {
                this.Ib = Oa.$j(a);
                this.Xv = Oa.lK(this.Ib);
                this.ub === Oa && this.je instanceof fb && (this.je.OB = this.Ib)
            }, setDefaultCursor: function (a) {
                this.D.Jb = a;
                this.platform && (this.platform.style.cursor = this.D.Jb)
            }, getDefaultCursor: function () {
                return this.D.Jb
            }, setDraggingCursor: function (a) {
                this.D.od = a
            }, getDraggingCursor: function () {
                return this.D.od
            }, NK: function () {
                return this.D.eV && 1.5 <= this.D.devicePixelRatio
            }, Kv: function (a, b) {
                b ? this.xh[b] || (this.xh[b] = {}) : b = "custom";
                a.tag = b;
                a instanceof gb && (this.xh[b][a.Q] = a, a.fa(this));
                var c = this;
                J.load("hotspot", function () {
                    c.Jy()
                }, o)
            }, YX: function (a, b) {
                b || (b = "custom");
                this.xh[b][a.Q] && delete this.xh[b][a.Q]
            }, Hl: function (a) {
                a || (a = "custom");
                this.xh[a] = {}
            }, qu: function () {
                var a = this.ub.yo(), b = this.ub.Wl(), c = this.D;
                c.Ub = c.EN || a;
                c.Mb = c.DN || b;
                c.Ub < a && (c.Ub = a);
                c.Mb > b && (c.Mb = b)
            }, setMinZoom: function (a) {
                a = Math.round(a);
                a > this.D.Mb && (a = this.D.Mb);
                this.D.EN = a;
                this.uI()
            }, setMaxZoom: function (a) {
                a = Math.round(a);
                a < this.D.Ub && (a = this.D.Ub);
                this.D.DN = a;
                this.uI()
            }, uI: function () {
                this.qu();
                var a = this.D;
                this.wa < a.Ub ? this.Cc(a.Ub) : this.wa > a.Mb && this.Cc(a.Mb);
                var b = new M("onzoomspanchange");
                b.Ub = a.Ub;
                b.Mb = a.Mb;
                this.dispatchEvent(b)
            }, f1: u("dB"), getKey: function () {
                return qa
            }, gt: function (a) {
                var b = this;
                window.MPC_Mgr && window.MPC_Mgr[b.Q] && window.MPC_Mgr[b.Q].close();
                b.D.Yi = q;
                if (a) {
                    b = this;
                    a.styleJson && (a.styleStr = b.aZ(a.styleJson));
                    G() && w.S.GM ? setTimeout(function () {
                        b.D.ge = a;
                        b.dispatchEvent(new M("onsetcustomstyles", a))
                    }, 50) : (this.D.ge = a, this.dispatchEvent(new M("onsetcustomstyles", a)), this.XK(b.D.ge.geotableId));
                    var c = {style: a.style};
                    a.features && 0 < a.features.length && (c.features = o);
                    a.styleJson && 0 < a.styleJson.length && (c.styleJson = o);
                    Pa(5050, c);
                    a.style && (c = b.D.Jl[a.style] ? b.D.Jl[a.style].backColor : b.D.Jl.normal.backColor) && (this.Fa().style.backgroundColor = c)
                }
            }, MW: function (a) {
                this.controls || (this.controls = {
                    navigationControl: new hb,
                    scaleControl: new jb,
                    overviewMapControl: new kb,
                    mapTypeControl: new lb
                });
                var b = this, c;
                for (c in this.controls)
                    b.uM(b.controls[c]);
                a = a || [];
                w.Yb.qb(a, function (a) {
                    b.Iv(b.controls[a])
                })
            }, XK: function (a) {
                a ? this.Kr && this.Kr.Qf === a || (this.hh(this.Kr), this.Kr = new mb({geotableId: a}), this.Ig(this.Kr)) : this.hh(this.Kr)
            }, Hb: function () {
                var a = this.U() >= this.D.aF && this.la() === Ma && 18 >= this.U(), b = q;
                try {
                    document.createElement("canvas").getContext("2d"), b = o
                } catch (c) {
                    b = q
                }
                return a && b
            }, getCurrentCity: function () {
                return {name: this.eo, code: this.sB}
            }, Xl: function () {
                this.G.Bn();
                return this.G
            }, setPanorama: function (a) {
                this.G = a;
                this.G.FE(this)
            }, aZ: function (a) {
                for (var b = {
                    featureType: "t",
                    elementType: "e",
                    visibility: "v",
                    color: "c",
                    lightness: "l",
                    saturation: "s",
                    weight: "w",
                    zoom: "z",
                    hue: "h"
                }, c = {
                    all: "all",
                    geometry: "g",
                    "geometry.fill": "g.f",
                    "geometry.stroke": "g.s",
                    labels: "l",
                    "labels.text.fill": "l.t.f",
                    "labels.text.stroke": "l.t.s",
                    "lables.text": "l.t",
                    "labels.icon": "l.i"
                }, d = [], e = 0, f; f = a[e]; e++) {
                    var g = f.stylers;
                    delete f.stylers;
                    w.extend(f, g);
                    var g = [], i;
                    for (i in b)
                        f[i] && ("elementType" === i ? g.push(b[i] + ":" + c[f[i]]) : g.push(b[i] + ":" + f[i]));
                    2 < g.length && d.push(g.join("|"))
                }
                return d.join(",")
            }
        });
        function Pa(a, b) {
            if (a) {
                var b = b || {}, c = "", d;
                for (d in b)
                    c = c + "&" + d + "=" + encodeURIComponent(b[d]);
                var e = function (a) {
                    a && (nb = o, setTimeout(function () {
                        ob.src = z.vc + "images/blank.gif?" + a.src
                    }, 50))
                }, f = function () {
                    var a = qb.shift();
                    a && e(a)
                };
                d = (1E8 * Math.random()).toFixed(0);
                nb ? qb.push({src: "product=jsapi&sub_product=jsapi&v=" + z.version + "&sub_product_v=" + z.version + "&t=" + d + "&code=" + a + "&da_src=" + a + c}) : e({src: "product=jsapi&sub_product=jsapi&v=" + z.version + "&sub_product_v=" + z.version + "&t=" + d + "&code=" + a + "&da_src=" + a + c});
                rb || (w.F(ob, "load", function () {
                    nb = q;
                    f()
                }), w.F(ob, "error", function () {
                    nb = q;
                    f()
                }), rb = o)
            }
        }

        var nb, rb, qb = [], ob = new Image;
        Pa(5E3, {device_pixel_ratio: window.devicePixelRatio, platform: navigator.platform});
        z.RK = {
            TILE_BASE_URLS: ["ss0.baidu.com/5bwHcj7lABFU8t_jkk_Z1zRvfdw6buu", "ss0.baidu.com/5bwHcj7lABFV8t_jkk_Z1zRvfdw6buu", "ss0.baidu.com/5bwHcj7lABFS8t_jkk_Z1zRvfdw6buu", "ss0.bdstatic.com/5bwHcj7lABFT8t_jkk_Z1zRvfdw6buu", "ss0.bdstatic.com/5bwHcj7lABFY8t_jkk_Z1zRvfdw6buu"],
            TILE_ONLINE_URLS: ["ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv", "ss0.bdstatic.com/8bo_dTSlRMgBo1vgoIiO_jowehsv", "ss0.bdstatic.com/8bo_dTSlRcgBo1vgoIiO_jowehsv", "ss0.bdstatic.com/8bo_dTSlRsgBo1vgoIiO_jowehsv", "ss0.bdstatic.com/8bo_dTSlQ1gBo1vgoIiO_jowehsv"],
            TIlE_PERSPECT_URLS: ["ss0.bdstatic.com/-OR1cTe9KgQFm2e88IuM_a", "ss0.bdstatic.com/-ON1cTe9KgQFm2e88IuM_a", "ss0.bdstatic.com/-OZ1cTe9KgQFm2e88IuM_a", "ss0.bdstatic.com/-OV1cTe9KgQFm2e88IuM_a"],
            geolocControl: "sp2.baidu.com/8LkJsjOpB1gCo2Kml5_Y_D3",
            TILES_YUN_HOST: ["sp0.baidu.com/-eR1bSahKgkFkRGko9WTAnF6hhy", "sp0.baidu.com/-eN1bSahKgkFkRGko9WTAnF6hhy", "sp0.baidu.com/-eZ1bSahKgkFkRGko9WTAnF6hhy", "sp0.baidu.com/-eV1bSahKgkFkRGko9WTAnF6hhy"],
            traffic: "sp0.baidu.com/7_AZsjOpB1gCo2Kml5_Y_D3",
            iw_pano: "ss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_",
            message: "sp0.baidu.com/7vo0bSba2gU2pMbgoY3K",
            baidumap: "sp0.baidu.com/80MWsjip0QIZ8tyhnq",
            wuxian: "sp0.baidu.com/6a1OdTeaKgQFm2e88IuM_a",
            pano: ["ss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_", "ss0.bdstatic.com/5LUZemfa_QUU8t7mm9GUKT-xh_", "ss0.bdstatic.com/5LUZemja_QUU8t7mm9GUKT-xh_"],
            main_domain_nocdn: {baidu: "sp0.baidu.com/9_Q4sjOpB1gCo2Kml5_Y_D3", other: "sapi.map.baidu.com"},
            main_domain_cdn: {
                baidu: ["ss0.bdstatic.com/9_Q4vHSd2RZ3otebn9fN2DJv", "ss0.baidu.com/9_Q4vXSd2RZ3otebn9fN2DJv", "ss0.bdstatic.com/9_Q4vnSd2RZ3otebn9fN2DJv"],
                other: ["sapi.map.baidu.com"],
                webmap: ["ss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv"]
            },
            map_click: "sp0.baidu.com/80MWbzKh2wt3n2qy8IqW0jdnxx1xbK",
            vector_traffic: "ss0.bdstatic.com/8aZ1cTe9KgQIm2_p8IuM_a"
        };
        z.IW = {
            TILE_BASE_URLS: ["shangetu0.map.bdimg.com", "shangetu1.map.bdimg.com", "shangetu2.map.bdimg.com", "shangetu3.map.bdimg.com", "shangetu4.map.bdimg.com"],
            TILE_ONLINE_URLS: ["online0.map.bdimg.com", "online1.map.bdimg.com", "online2.map.bdimg.com", "online3.map.bdimg.com", "online4.map.bdimg.com"],
            TIlE_PERSPECT_URLS: ["d0.map.baidu.com", "d1.map.baidu.com", "d2.map.baidu.com", "d3.map.baidu.com"],
            geolocControl: "loc.map.baidu.com",
            TILES_YUN_HOST: ["g0.api.map.baidu.com", "g1.api.map.baidu.com", "g2.api.map.baidu.com", "g3.api.map.baidu.com"],
            traffic: "its.map.baidu.com",
            iw_pano: "pcsv0.map.bdimg.com",
            message: "j.map.baidu.com",
            baidumap: "map.baidu.com",
            wuxian: "wuxian.baidu.com",
            pano: ["pcsv0.map.bdimg.com", "pcsv1.map.bdimg.com", "pcsv2.map.bdimg.com"],
            main_domain_nocdn: {baidu: "api.map.baidu.com"},
            main_domain_cdn: {
                baidu: ["api0.map.bdimg.com", "api1.map.bdimg.com", "api2.map.bdimg.com"],
                webmap: ["webmap0.map.bdimg.com"]
            },
            map_click: "mapclick.map.baidu.com",
            vector_traffic: "or.map.bdimg.com"
        };
        z.EZ = {
            "0": {proto: "http://", domain: z.IW},
            1: {proto: "https://", domain: z.RK},
            2: {proto: "https://", domain: z.RK}
        };
        z.gy = window.HOST_TYPE || "0";
        z.url = z.EZ[z.gy];
        z.Ro = z.url.proto + z.url.domain.baidumap + "/";
        z.vc = z.url.proto + ("2" == z.gy ? z.url.domain.main_domain_nocdn.other : z.url.domain.main_domain_nocdn.baidu) + "/";
        z.ca = z.url.proto + ("2" == z.gy ? z.url.domain.main_domain_cdn.other[0] : z.url.domain.main_domain_cdn.baidu[0]) + "/";
        z.Bl = z.url.proto + z.url.domain.main_domain_cdn.webmap[0] + "/";
        z.hg = function (a, b) {
            var c, d, b = b || "";
            switch (a) {
                case "main_domain_nocdn":
                    c = z.vc + b;
                    break;
                case "main_domain_cdn":
                    c = z.ca + b;
                    break;
                default:
                    d = z.url.domain[a], "[object Array]" == Object.prototype.toString.call(d) ? (c = [], w.Yb.qb(d, function (a, d) {
                        c[d] = z.url.proto + a + "/" + b
                    })) : c = z.url.proto + z.url.domain[a] + "/" + b
            }
            return c
        };
        function sb(a) {
            var b = {duration: 1E3, wc: 30, jo: 0, Xb: tb.tL, Rs: s()};
            this.Mf = [];
            if (a)
                for (var c in a)
                    b[c] = a[c];
            this.k = b;
            if (Ua(b.jo)) {
                var d = this;
                setTimeout(function () {
                    d.start()
                }, b.jo)
            } else
                b.jo != ub && this.start()
        }

        var ub = "INFINITE";
        sb.prototype.start = function () {
            this.ju = Za();
            this.pz = this.ju + this.k.duration;
            wb(this)
        };
        sb.prototype.add = function (a) {
            this.Mf.push(a)
        };
        function wb(a) {
            var b = Za();
            b >= a.pz ? (Va(a.k.ja) && a.k.ja(a.k.Xb(1)), Va(a.k.finish) && a.k.finish(), 0 < a.Mf.length && (b = a.Mf[0], b.Mf = [].concat(a.Mf.slice(1)), b.start())) : (a.Mx = a.k.Xb((b - a.ju) / a.k.duration), Va(a.k.ja) && a.k.ja(a.Mx), a.RE || (a.qr = setTimeout(function () {
                wb(a)
            }, 1E3 / a.k.wc)))
        }

        sb.prototype.stop = function (a) {
            this.RE = o;
            for (var b = 0; b < this.Mf.length; b++)
                this.Mf[b].stop(), this.Mf[b] = p;
            this.Mf.length = 0;
            this.qr && (clearTimeout(this.qr), this.qr = p);
            this.k.Rs(this.Mx);
            a && (this.pz = this.ju, wb(this))
        };
        sb.prototype.cancel = ga(1);
        var tb = {
            tL: function (a) {
                return a
            }, reverse: function (a) {
                return 1 - a
            }, uC: function (a) {
                return a * a
            }, tC: function (a) {
                return Math.pow(a, 3)
            }, Zr: function (a) {
                return -(a * (a - 2))
            }, PJ: function (a) {
                return Math.pow(a - 1, 3) + 1
            }, OJ: function (a) {
                return 0.5 > a ? 2 * a * a : -2 * (a - 2) * a - 1
            }, s0: function (a) {
                return 0.5 > a ? 4 * Math.pow(a, 3) : 4 * Math.pow(a - 1, 3) + 1
            }, t0: function (a) {
                return (1 - Math.cos(Math.PI * a)) / 2
            }
        };
        tb["ease-in"] = tb.uC;
        tb["ease-out"] = tb.Zr;
        var F = {
            iF: 34,
            jF: 21,
            kF: new L(21, 32),
            UN: new L(10, 32),
            TN: new L(24, 36),
            SN: new L(12, 36),
            gF: new L(13, 1),
            ea: z.ca + "images/",
            o1: "http://api0.map.bdimg.com/images/",
            hF: z.ca + "images/markers_new.png",
            QN: 24,
            RN: 73,
            yB: {
                "\u5317\u4eac": {Cx: "bj", m: new H(116.403874, 39.914889)},
                "\u4e0a\u6d77": {Cx: "sh", m: new H(121.487899, 31.249162)},
                "\u6df1\u5733": {Cx: "sz", m: new H(114.025974, 22.546054)},
                "\u5e7f\u5dde": {Cx: "gz", m: new H(113.30765, 23.120049)}
            },
            fontFamily: "arial,sans-serif"
        };
        w.S.fg ? (w.extend(F, {
            EJ: "url(" + F.ea + "ruler.cur),crosshair",
            Jb: "-moz-grab",
            od: "-moz-grabbing"
        }), w.platform.kL && (F.fontFamily = "arial,simsun,sans-serif")) : w.S.iJ || w.S.GM ? w.extend(F, {
            EJ: "url(" + F.ea + "ruler.cur) 2 6,crosshair",
            Jb: "url(" + F.ea + "openhand.cur) 8 8,default",
            od: "url(" + F.ea + "closedhand.cur) 8 8,move"
        }) : w.extend(F, {
            EJ: "url(" + F.ea + "ruler.cur),crosshair",
            Jb: "url(" + F.ea + "openhand.cur),default",
            od: "url(" + F.ea + "closedhand.cur),move"
        });
        function xb(a, b) {
            var c = a.style;
            c.left = b[0] + "px";
            c.top = b[1] + "px"
        }

        function yb(a) {
            0 < w.S.ba ? a.unselectable = "on" : a.style.MozUserSelect = "none"
        }

        function zb(a) {
            return a && a.parentNode && 11 != a.parentNode.nodeType
        }

        function Ab(a, b) {
            w.B.Zw(a, "beforeEnd", b);
            return a.lastChild
        }

        function Bb(a) {
            for (var b = {
                left: 0,
                top: 0
            }; a && a.offsetParent; )
                b.left += a.offsetLeft, b.top += a.offsetTop, a = a.offsetParent;
            return b
        }

        function oa(a) {
            a = window.event || a;
            a.stopPropagation ? a.stopPropagation() : a.cancelBubble = o
        }

        function Cb(a) {
            a = window.event || a;
            a.preventDefault ? a.preventDefault() : a.returnValue = q;
            return q
        }

        function pa(a) {
            oa(a);
            return Cb(a)
        }

        function Db() {
            var a = document.documentElement, b = document.body;
            return a && (a.scrollTop || a.scrollLeft) ? [a.scrollTop, a.scrollLeft] : b ? [b.scrollTop, b.scrollLeft] : [0, 0]
        }

        function Eb(a, b) {
            if (a && b)
                return Math.round(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)))
        }

        function Fb(a, b) {
            var c = [], b = b || function (a) {
                return a
            }, d;
            for (d in a)
                c.push(d + "=" + b(a[d]));
            return c.join("&")
        }

        function K(a, b, c) {
            var d = document.createElement(a);
            c && (d = document.createElementNS(c, a));
            return w.B.DE(d, b || {})
        }

        function Ta(a) {
            if (a.currentStyle)
                return a.currentStyle;
            if (a.ownerDocument && a.ownerDocument.defaultView)
                return a.ownerDocument.defaultView.getComputedStyle(a, p)
        }

        function Va(a) {
            return "function" == typeof a
        }

        function Ua(a) {
            return "number" == typeof a
        }

        function Xa(a) {
            return "string" == typeof a
        }

        function Gb(a) {
            return "undefined" != typeof a
        }

        function Hb(a) {
            return "object" == typeof a
        }

        var Ib = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

        function Jb(a) {
            var b = "", c, d, e = "", f, g = "", i = 0;
            f = /[^A-Za-z0-9\+\/\=]/g;
            if (!a || f.exec(a))
                return a;
            a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            do
                c = Ib.indexOf(a.charAt(i++)), d = Ib.indexOf(a.charAt(i++)), f = Ib.indexOf(a.charAt(i++)), g = Ib.indexOf(a.charAt(i++)), c = c << 2 | d >> 4, d = (d & 15) << 4 | f >> 2, e = (f & 3) << 6 | g, b += String.fromCharCode(c), 64 != f && (b += String.fromCharCode(d)), 64 != g && (b += String.fromCharCode(e));
            while (i < a.length);
            return b
        }

        var M = w.lang.ty;

        function G() {
            return !(!w.platform.FD && !w.platform.XW && !w.platform.km)
        }

        function Sa() {
            return !(!w.platform.kL && !w.platform.cL && !w.platform.cX)
        }

        function Za() {
            return (new Date).getTime()
        }

        function Kb() {
            var a = document.body.appendChild(K("div"));
            a.innerHTML = '<v:shape id="vml_tester1" adj="1" />';
            var b = a.firstChild;
            if (!b.style)
                return q;
            b.style.behavior = "url(#default#VML)";
            b = b ? "object" == typeof b.adj : o;
            a.parentNode.removeChild(a);
            return b
        }

        function Lb() {
            return !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.1")
        }

        function Mb() {
            return !!K("canvas").getContext
        }

        function Nb(a) {
            return a * Math.PI / 180
        }

        z.kX = function () {
            var a = o, b = o, c = o, d = o, e = 0, f = 0, g = 0, i = 0;
            return {
                yP: function () {
                    e += 1;
                    a && (a = q, setTimeout(function () {
                        Pa(5054, {pic: e});
                        a = o;
                        e = 0
                    }, 1E4))
                }, j_: function () {
                    f += 1;
                    b && (b = q, setTimeout(function () {
                        Pa(5055, {move: f});
                        b = o;
                        f = 0
                    }, 1E4))
                }, l_: function () {
                    g += 1;
                    c && (c = q, setTimeout(function () {
                        Pa(5056, {zoom: g});
                        c = o;
                        g = 0
                    }, 1E4))
                }, k_: function (a) {
                    i += a;
                    d && (d = q, setTimeout(function () {
                        Pa(5057, {tile: i});
                        d = o;
                        i = 0
                    }, 5E3))
                }
            }
        }();
        var Ya;
        (function () {
            function a(a) {
                this.IT = a;
                this.timing = {};
                this.start = +new Date
            }

            function b(a, b) {
                if (a.length === +a.length)
                    for (var c = 0, d = a.length; c < d && b.call(j, c, a[c], a) !== q; c++)
                        ;
                else
                    for (c in a)
                        if (a.hasOwnProperty(c) && b.call(j, c, a[c], a) === q)
                            break
            }

            var c = [], d = {
                push: function (a) {
                    c.push(a);
                    if (window.localStorage && window.JSON)
                        try {
                            localStorage.setItem("WPO_NR", JSON.stringify(c))
                        } catch (b) {
                        }
                }, get: function (a) {
                    var b = [];
                    if (window.localStorage)
                        try {
                            a && localStorage.removeItem("WPO_NR")
                        } catch (d) {
                        }
                    b = c;
                    a && (c = []);
                    return b
                }
            }, e, f, g, i, k = {};
            (!window.localStorage || !window.JSON) && document.attachEvent && window.attachEvent("onbeforeunload", function () {
                l.send()
            });
            var l = {
                send: function (a) {
                    var c = [], e = [], f = a || d.get(o), g;
                    0 < f.length && (b(f, function (d, e) {
                        var f = [];
                        b(e.timing, function (a, b) {
                            f.push('"' + a + '":' + b)
                        });
                        c.push('{"t":{' + f.join(",") + '},"a":' + e.IT + "}");
                        !g && (a && e.start) && (g = e.start)
                    }), b(k, function (a, b) {
                        e.push(a + "=" + b)
                    }), e.push("d=[" + c.join(",") + "]"), g ? e.push("_st=" + g) : e.push("_t=" + +new Date), f = new Image, f.src = "http://static.tieba.baidu.com/tb/pms/img/st.gif?" + e.join("&"), window["___pms_img_" + 1 * new Date] = f)
                }
            };
            a.prototype = {
                bc: function (a, b) {
                    this.timing[a] = 0 <= b ? b : new Date - this.start
                }, Bt: function () {
                    this.start = +new Date
                }, tN: function () {
                    this.bc("tt")
                }, hy: function () {
                    this.bc("vt")
                }, Bm: function () {
                    f && (d.push(this), d.get().length >= g && l.send())
                }, error: s()
            };
            Ya = {
                qi: {
                    xD: function (a) {
                        var b = navigator.g0 || navigator.H1 || navigator.V2 || {type: 0};
                        f = Math.random() <= (a.hY || 0.01);
                        g = a.max || 5;
                        i = a.G1 || b.type;
                        k = {p: a.UX, mnt: i, b: 50};
                        window.localStorage && (window.JSON && window.addEventListener) && (e = d.get(o), window.addEventListener("load", function () {
                            l.send(e)
                        }, q))
                    }, Vj: function (b) {
                        return new a(b)
                    }
                }
            }
        })();
        Ya.qi.xD({UX: 18, hY: 0.1, max: 1});
        z.Fp = {wF: "#83a1ff", Hp: "#808080"};
        function Ob(a, b, c) {
            b.rm || (b.rm = [], b.handle = {});
            b.rm.push({filter: c, Sl: a});
            b.addEventListener || (b.addEventListener = function (a, c) {
                b.attachEvent("on" + a, c)
            });
            b.handle.click || (b.addEventListener("click", function (a) {
                for (var c = a.target || a.srcElement; c != b; ) {
                    Pb(b.rm, function (b, g) {
                        RegExp(g.filter).test(c.getAttribute("filter")) && g.Sl.call(c, a, c.getAttribute("filter"))
                    });
                    c = c.parentNode
                }
            }, q), b.handle.click = o)
        }

        function Pb(a, b) {
            for (var c = 0, d = a.length; c < d; c++)
                b(c, a[c])
        }
        ;
        function Qb(a, b) {
            if (b) {
                var c = (1E5 * Math.random()).toFixed(0);
                z._rd["_cbk" + c] = function (a) {
                    b && b(a);
                    delete z._rd["_cbk" + c]
                };
                a += "&callback=BMap._rd._cbk" + c
            }
            var d = K("script", {type: "text/javascript"});
            d.charset = "utf-8";
            d.src = a;
            d.addEventListener ? d.addEventListener("load", function (a) {
                a = a.target;
                a.parentNode.removeChild(a)
            }, q) : d.attachEvent && d.attachEvent("onreadystatechange", function () {
                var a = window.event.srcElement;
                a && ("loaded" == a.readyState || "complete" == a.readyState) && a.parentNode.removeChild(a)
            });
            setTimeout(function () {
                document.getElementsByTagName("head")[0].appendChild(d);
                d = p
            }, 1)
        }
        ;
        var Rb = {
            map: "catk2u",
            common: "sqvoet",
            style: "ncf1c0",
            tile: "qhli20",
            vectordrawlib: "ej4ndv",
            newvectordrawlib: "sa1ti1",
            groundoverlay: "bnkved",
            pointcollection: "wjyfiz",
            marker: "egs1ms",
            symbol: "zriptb",
            canvablepath: "i442tc",
            vmlcontext: "mxzgzi",
            markeranimation: "ibim05",
            poly: "u5f2ed",
            draw: "hyvmlz",
            drawbysvg: "pfxqz0",
            drawbyvml: "ks1m1l",
            drawbycanvas: "mprbep",
            infowindow: "entff4",
            oppc: "wh0zip",
            opmb: "rff40y",
            menu: "uu5o3f",
            control: "rukgrt",
            navictrl: "ghpo5n",
            geoctrl: "pzuq0r",
            copyrightctrl: "wubqzs",
            scommon: "plieif",
            local: "ymift5",
            route: "awwcyf",
            othersearch: "ezoube",
            mapclick: "bw3bnk",
            buslinesearch: "5yi0wt",
            hotspot: "bjv5qv",
            autocomplete: "qk2gdu",
            coordtrans: "pir3tg",
            coordtransutils: "fy20lo",
            convertor: "r5q4ks",
            clayer: "0xug1x",
            pservice: "l4gheo",
            pcommon: "ar1jki",
            panorama: "4gbd2d",
            panoramaflash: "ssfjqo",
            vector: "xfely5"
        };
        w.$x = function () {
            function a(a) {
                return d && !!c[b + a + "_" + Rb[a]]
            }

            var b = "BMap_", c = window.localStorage, d = "localStorage"in window && c !== p && c !== j;
            return {
                ZW: d, set: function (a, f) {
                    if (d) {
                        for (var g = b + a + "_", i = c.length, k; i--; )
                            k = c.key(i), -1 < k.indexOf(g) && c.removeItem(k);
                        try {
                            c.setItem(b + a + "_" + Rb[a], f)
                        } catch (l) {
                            c.clear()
                        }
                    }
                }, get: function (e) {
                    return d && a(e) ? c.getItem(b + e + "_" + Rb[e]) : q
                }, gJ: a
            }
        }();
        function J() {
        }

        w.object.extend(J, {
            rj: {yF: -1, zO: 0, Ap: 1},
            pK: function () {
                var a = "drawbysvg", b = "canvablepath", c = z.DI ? "newvectordrawlib" : "vectordrawlib";
                G() && Mb() ? a = "drawbycanvas" : Lb() ? a = "drawbysvg" : Kb() ? (a = "drawbyvml", b = "vmlcontext") : Mb() && (a = "drawbycanvas");
                return {
                    tile: [c, "style"],
                    control: [],
                    marker: ["symbol"],
                    symbol: ["canvablepath", "common"],
                    canvablepath: "canvablepath" === b ? [] : [b],
                    vmlcontext: [],
                    style: [],
                    poly: ["marker", a],
                    drawbysvg: ["draw"],
                    drawbyvml: ["draw"],
                    drawbycanvas: ["draw"],
                    infowindow: ["common", "marker"],
                    menu: [],
                    oppc: [],
                    opmb: [],
                    scommon: [],
                    local: ["scommon"],
                    route: ["scommon"],
                    othersearch: ["scommon"],
                    autocomplete: ["scommon"],
                    mapclick: ["scommon"],
                    buslinesearch: ["route"],
                    hotspot: [],
                    coordtransutils: ["coordtrans"],
                    convertor: [],
                    clayer: ["tile"],
                    pservice: [],
                    pcommon: ["style", "pservice"],
                    panorama: ["pcommon"],
                    panoramaflash: ["pcommon"]
                }
            },
            X1: {},
            qF: {QO: z.ca + "getmodules?v=2.0&t=20140707", mT: 5E3},
            WB: q,
            Ad: {Wk: {}, $m: [], nv: []},
            load: function (a, b, c) {
                var d = this.Va(a);
                if (d.md == this.rj.Ap)
                    c && b();
                else {
                    if (d.md == this.rj.yF) {
                        this.nJ(a);
                        this.rM(a);
                        var e = this;
                        e.WB == q && (e.WB = o, setTimeout(function () {
                            for (var a = [], b = 0, c = e.Ad.$m.length; b < c; b++) {
                                var d = e.Ad.$m[b], l = "";
                                ia.$x.gJ(d) ? l = ia.$x.get(d) : (l = "", a.push(d + "_" + Rb[d]));
                                e.Ad.nv.push({ML: d, ZD: l})
                            }
                            e.WB = q;
                            e.Ad.$m.length = 0;
                            0 == a.length ? e.VJ() : Qb(e.qF.QO + "&mod=" + a.join(","))
                        }, 1));
                        d.md = this.rj.zO
                    }
                    d.nu.push(b)
                }
            },
            nJ: function (a) {
                if (a && this.pK()[a])
                    for (var a = this.pK()[a], b = 0; b < a.length; b++)
                        this.nJ(a[b]), this.Ad.Wk[a[b]] || this.rM(a[b])
            },
            rM: function (a) {
                for (var b = 0; b < this.Ad.$m.length; b++)
                    if (this.Ad.$m[b] == a)
                        return;
                this.Ad.$m.push(a)
            },
            gY: function (a, b) {
                var c = this.Va(a);
                try {
                    eval(b)
                } catch (d) {
                    return
                }
                c.md = this.rj.Ap;
                for (var e = 0, f = c.nu.length; e < f; e++)
                    c.nu[e]();
                c.nu.length = 0
            },
            gJ: function (a, b) {
                var c = this;
                c.timeout = setTimeout(function () {
                    c.Ad.Wk[a].md != c.rj.Ap ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
                }, c.qF.mT)
            },
            Va: function (a) {
                this.Ad.Wk[a] || (this.Ad.Wk[a] = {}, this.Ad.Wk[a].md = this.rj.yF, this.Ad.Wk[a].nu = []);
                return this.Ad.Wk[a]
            },
            remove: function (a) {
                delete this.Va(a)
            },
            dU: function (a, b) {
                for (var c = this.Ad.nv, d = o, e = 0, f = c.length; e < f; e++)
                    "" == c[e].ZD && (c[e].ML == a ? c[e].ZD = b : d = q);
                d && this.VJ()
            },
            VJ: function () {
                for (var a = this.Ad.nv, b = 0, c = a.length; b < c; b++)
                    this.gY(a[b].ML, a[b].ZD);
                this.Ad.nv.length = 0
            }
        });
        function P(a, b) {
            this.x = a || 0;
            this.y = b || 0;
            this.x = this.x;
            this.y = this.y
        }

        P.prototype.$a = function (a) {
            return a && a.x == this.x && a.y == this.y
        };
        function L(a, b) {
            this.width = a || 0;
            this.height = b || 0
        }

        L.prototype.$a = function (a) {
            return a && this.width == a.width && this.height == a.height
        };
        function gb(a, b) {
            a && (this.xb = a, this.Q = "spot" + gb.Q++, b = b || {}, this.Fg = b.text || "", this.Uu = b.offsets ? b.offsets.slice(0) : [5, 5, 5, 5], this.wI = b.userData || p, this.Ah = b.minZoom || p, this.mf = b.maxZoom || p)
        }

        gb.Q = 0;
        w.extend(gb.prototype, {
            fa: function (a) {
                this.Ah == p && (this.Ah = a.D.Ub);
                this.mf == p && (this.mf = a.D.Mb)
            }, ha: function (a) {
                a instanceof H && (this.xb = a)
            }, V: u("xb"), kt: ba("Fg"), mD: u("Fg"), setUserData: ba("wI"), getUserData: u("wI")
        });
        function Sb() {
            this.C = p;
            this.yb = "control";
            this.Ea = this.aJ = o
        }

        w.lang.ia(Sb, w.lang.qa, "Control");
        w.extend(Sb.prototype, {
            initialize: function (a) {
                this.C = a;
                if (this.A)
                    return a.Ja.appendChild(this.A), this.A
            }, Ne: function (a) {
                !this.A && (this.initialize && Va(this.initialize)) && (this.A = this.initialize(a));
                this.k = this.k || {eh: q};
                this.QA();
                this.gv();
                this.A && (this.A.Gq = this)
            }, QA: function () {
                var a = this.A;
                if (a) {
                    var b = a.style;
                    b.position = "absolute";
                    b.zIndex = this.Ny || "10";
                    b.MozUserSelect = "none";
                    b.WebkitTextSizeAdjust = "none";
                    this.k.eh || w.B.Oa(a, "BMap_noprint");
                    G() || w.F(a, "contextmenu", pa)
                }
            }, remove: function () {
                this.C = p;
                this.A && (this.A.parentNode && this.A.parentNode.removeChild(this.A), this.A = this.A.Gq = p)
            }, ra: function () {
                this.A = Ab(this.C.Ja, "<div unselectable='on'></div>");
                this.Ea == q && w.B.J(this.A);
                return this.A
            }, gv: function () {
                this.mc(this.k.anchor)
            }, mc: function (a) {
                if (this.R_ || !Ua(a) || isNaN(a) || a < Tb || 3 < a)
                    a = this.defaultAnchor;
                this.k = this.k || {eh: q};
                this.k.pa = this.k.pa || this.defaultOffset;
                var b = this.k.anchor;
                this.k.anchor = a;
                if (this.A) {
                    var c = this.A, d = this.k.pa.width, e = this.k.pa.height;
                    c.style.left = c.style.top = c.style.right = c.style.bottom = "auto";
                    switch (a) {
                        case Tb:
                            c.style.top = e + "px";
                            c.style.left = d + "px";
                            break;
                        case Ub:
                            c.style.top = e + "px";
                            c.style.right = d + "px";
                            break;
                        case Vb:
                            c.style.bottom = e + "px";
                            c.style.left = d + "px";
                            break;
                        case 3:
                            c.style.bottom = e + "px", c.style.right = d + "px"
                    }
                    c = ["TL", "TR", "BL", "BR"];
                    w.B.Ob(this.A, "anchor" + c[b]);
                    w.B.Oa(this.A, "anchor" + c[a])
                }
            }, RC: function () {
                return this.k.anchor
            }, He: function (a) {
                a instanceof L && (this.k = this.k || {eh: q}, this.k.pa = new L(a.width, a.height), this.A && this.mc(this.k.anchor))
            }, Bf: function () {
                return this.k.pa
            }, rd: u("A"), show: function () {
                this.Ea != o && (this.Ea = o, this.A && w.B.show(this.A))
            }, J: function () {
                this.Ea != q && (this.Ea = q, this.A && w.B.J(this.A))
            }, isPrintable: function () {
                return !!this.k.eh
            }, Ug: function () {
                return !this.A && !this.C ? q : !!this.Ea
            }
        });
        var Tb = 0, Ub = 1, Vb = 2;

        function hb(a) {
            Sb.call(this);
            a = a || {};
            this.k = {
                eh: q,
                NE: a.showZoomInfo || o,
                anchor: a.anchor,
                pa: a.offset,
                type: a.type,
                dV: a.enableGeolocation || q
            };
            this.defaultAnchor = G() ? 3 : Tb;
            this.defaultOffset = new L(10, 10);
            this.mc(a.anchor);
            this.Km(a.type);
            this.ff()
        }

        w.lang.ia(hb, Sb, "NavigationControl");
        w.extend(hb.prototype, {
            initialize: function (a) {
                this.C = a;
                return this.A
            }, Km: function (a) {
                this.k.type = Ua(a) && 0 <= a && 3 >= a ? a : 0
            }, Ho: function () {
                return this.k.type
            }, ff: function () {
                var a = this;
                J.load("navictrl", function () {
                    a.ug()
                })
            }
        });
        function Wb(a) {
            Sb.call(this);
            a = a || {};
            this.k = {
                anchor: a.anchor || Vb,
                pa: a.offset || new L(10, 30),
                v2: a.showAddressBar || q,
                v0: a.enableAutoLocation || q,
                AL: a.locationIcon || p
            };
            var b = this;
            this.Ny = 1200;
            b.GZ = [];
            this.$d = [];
            J.load("geoctrl", function () {
                (function d() {
                    if (0 !== b.$d.length) {
                        var a = b.$d.shift();
                        b[a.method].apply(b, a.arguments);
                        d()
                    }
                })();
                b.PO()
            });
            Pa(Ka)
        }

        w.lang.ia(Wb, Sb, "GeolocationControl");
        w.extend(Wb.prototype, {
            location: function () {
                this.$d.push({method: "location", arguments: arguments})
            }, getAddressComponent: da(p)
        });
        function Xb(a) {
            Sb.call(this);
            a = a || {};
            this.k = {eh: q, anchor: a.anchor, pa: a.offset};
            this.Rb = [];
            this.defaultAnchor = Vb;
            this.defaultOffset = new L(5, 2);
            this.mc(a.anchor);
            this.aJ = q;
            this.ff()
        }

        w.lang.ia(Xb, Sb, "CopyrightControl");
        w.object.extend(Xb.prototype, {
            initialize: function (a) {
                this.C = a;
                return this.A
            }, Jv: function (a) {
                if (a && Ua(a.id) && !isNaN(a.id)) {
                    var b = {bounds: p, content: ""}, c;
                    for (c in a)
                        b[c] = a[c];
                    if (a = this.Ul(a.id))
                        for (var d in b)
                            a[d] = b[d];
                    else
                        this.Rb.push(b)
                }
            }, Ul: function (a) {
                for (var b = 0, c = this.Rb.length; b < c; b++)
                    if (this.Rb[b].id == a)
                        return this.Rb[b]
            }, YC: u("Rb"), qE: function (a) {
                for (var b = 0, c = this.Rb.length; b < c; b++)
                    this.Rb[b].id == a && (r = this.Rb.splice(b, 1), b--, c = this.Rb.length)
            }, ff: function () {
                var a = this;
                J.load("copyrightctrl", function () {
                    a.ug()
                })
            }
        });
        function kb(a) {
            Sb.call(this);
            a = a || {};
            this.k = {
                eh: q,
                size: a.size || new L(150, 150),
                padding: 5,
                Ka: a.isOpen === o ? o : q,
                WZ: 4,
                pa: a.offset,
                anchor: a.anchor
            };
            this.defaultAnchor = 3;
            this.defaultOffset = new L(0, 0);
            this.Wp = this.Xp = 13;
            this.mc(a.anchor);
            this.vd(this.k.size);
            this.ff()
        }

        w.lang.ia(kb, Sb, "OverviewMapControl");
        w.extend(kb.prototype, {
            initialize: function (a) {
                this.C = a;
                return this.A
            }, mc: function (a) {
                Sb.prototype.mc.call(this, a)
            }, be: function () {
                this.be.Jn = o;
                this.k.Ka = !this.k.Ka;
                this.A || (this.be.Jn = q)
            }, vd: function (a) {
                a instanceof L || (a = new L(150, 150));
                a.width = 0 < a.width ? a.width : 150;
                a.height = 0 < a.height ? a.height : 150;
                this.k.size = a
            }, Lb: function () {
                return this.k.size
            }, Ka: function () {
                return this.k.Ka
            }, ff: function () {
                var a = this;
                J.load("control", function () {
                    a.ug()
                })
            }
        });
        function jb(a) {
            Sb.call(this);
            a = a || {};
            this.k = {eh: q, color: "black", Rc: "metric", pa: a.offset};
            this.defaultAnchor = Vb;
            this.defaultOffset = new L(81, 18);
            this.mc(a.anchor);
            this.Jh = {
                metric: {name: "metric", pJ: 1, WK: 1E3, xN: "\u7c73", yN: "\u516c\u91cc"},
                us: {name: "us", pJ: 3.2808, WK: 5280, xN: "\u82f1\u5c3a", yN: "\u82f1\u91cc"}
            };
            this.Jh[this.k.Rc] || (this.k.Rc = "metric");
            this.VH = p;
            this.vH = {};
            this.ff()
        }

        w.lang.ia(jb, Sb, "ScaleControl");
        w.object.extend(jb.prototype, {
            initialize: function (a) {
                this.C = a;
                return this.A
            }, qk: function (a) {
                this.k.color = a + ""
            }, H0: function () {
                return this.k.color
            }, KE: function (a) {
                this.k.Rc = this.Jh[a] && this.Jh[a].name || this.k.Rc
            }, vW: function () {
                return this.k.Rc
            }, ff: function () {
                var a = this;
                J.load("control", function () {
                    a.ug()
                })
            }
        });
        var Yb = 0;

        function lb(a) {
            Sb.call(this);
            a = a || {};
            this.defaultAnchor = Ub;
            this.defaultOffset = new L(10, 10);
            this.k = {
                eh: q,
                Xg: [Ma, Wa, Qa, Oa],
                IU: ["B_DIMENSIONAL_MAP", "B_SATELLITE_MAP", "B_NORMAL_MAP"],
                type: a.type || Yb,
                pa: a.offset || this.defaultOffset,
                hV: o
            };
            this.mc(a.anchor);
            "[object Array]" == Object.prototype.toString.call(a.mapTypes) && (this.k.Xg = a.mapTypes.slice(0));
            this.ff()
        }

        w.lang.ia(lb, Sb, "MapTypeControl");
        w.object.extend(lb.prototype, {
            initialize: function (a) {
                this.C = a;
                return this.A
            }, ay: function (a) {
                this.C.zn = a
            }, ff: function () {
                var a = this;
                J.load("control", function () {
                    a.ug()
                }, o)
            }
        });
        function Zb(a) {
            Sb.call(this);
            a = a || {};
            this.k = {eh: q, pa: a.offset, anchor: a.anchor};
            this.Ei = q;
            this.rv = p;
            this.EH = new $b({zf: "api"});
            this.FH = new ac(p, {zf: "api"});
            this.defaultAnchor = Ub;
            this.defaultOffset = new L(10, 10);
            this.mc(a.anchor);
            this.ff();
            Pa(wa)
        }

        w.lang.ia(Zb, Sb, "PanoramaControl");
        w.extend(Zb.prototype, {
            initialize: function (a) {
                this.C = a;
                return this.A
            }, ff: function () {
                var a = this;
                J.load("control", function () {
                    a.ug()
                })
            }
        });
        function bc(a) {
            w.lang.qa.call(this);
            this.k = {Ja: p, cursor: "default"};
            this.k = w.extend(this.k, a);
            this.yb = "contextmenu";
            this.C = p;
            this.na = [];
            this.pf = [];
            this.ne = [];
            this.kw = this.Hr = p;
            this.zh = q;
            var b = this;
            J.load("menu", function () {
                b.rb()
            })
        }

        w.lang.ia(bc, w.lang.qa, "ContextMenu");
        w.object.extend(bc.prototype, {
            fa: function (a, b) {
                this.C = a;
                this.al = b || p
            }, remove: function () {
                this.C = this.al = p
            }, Lv: function (a) {
                if (a && !("menuitem" != a.yb || "" == a.Fg || 0 >= a.Ni)) {
                    for (var b = 0, c = this.na.length; b < c; b++)
                        if (this.na[b] === a)
                            return;
                    this.na.push(a);
                    this.pf.push(a)
                }
            }, removeItem: function (a) {
                if (a && "menuitem" == a.yb) {
                    for (var b = 0, c = this.na.length; b < c; b++)
                        this.na[b] === a && (this.na[b].remove(), this.na.splice(b, 1), c--);
                    b = 0;
                    for (c = this.pf.length; b < c; b++)
                        this.pf[b] === a && (this.pf[b].remove(), this.pf.splice(b, 1), c--)
                }
            }, jB: function () {
                this.na.push({yb: "divider", xj: this.ne.length});
                this.ne.push({B: p})
            }, sE: function (a) {
                if (this.ne[a]) {
                    for (var b = 0, c = this.na.length; b < c; b++)
                        this.na[b] && ("divider" == this.na[b].yb && this.na[b].xj == a) && (this.na.splice(b, 1), c--), this.na[b] && ("divider" == this.na[b].yb && this.na[b].xj > a) && this.na[b].xj--;
                    this.ne.splice(a, 1)
                }
            }, rd: u("A"), show: function () {
                this.zh != o && (this.zh = o)
            }, J: function () {
                this.zh != q && (this.zh = q)
            }, wY: function (a) {
                a && (this.k.cursor = a)
            }, getItem: function (a) {
                return this.pf[a]
            }
        });
        var cc = F.ea + "menu_zoom_in.png", dc = F.ea + "menu_zoom_out.png";

        function ec(a, b, c) {
            if (a && Va(b)) {
                w.lang.qa.call(this);
                this.k = {width: 100, id: "", gm: ""};
                c = c || {};
                this.k.width = 1 * c.width ? c.width : 100;
                this.k.id = c.id ? c.id : "";
                this.k.gm = c.iconUrl ? c.iconUrl : "";
                this.Fg = a + "";
                this.Qy = b;
                this.C = p;
                this.yb = "menuitem";
                this.or = this.Ju = this.A = this.ph = p;
                this.uh = o;
                var d = this;
                J.load("menu", function () {
                    d.rb()
                })
            }
        }

        w.lang.ia(ec, w.lang.qa, "MenuItem");
        w.object.extend(ec.prototype, {
            fa: function (a, b) {
                this.C = a;
                this.ph = b
            }, remove: function () {
                this.C = this.ph = p
            }, kt: function (a) {
                a && (this.Fg = a + "")
            }, Pb: function (a) {
                a && (this.k.gm = a)
            }, rd: u("A"), enable: function () {
                this.uh = o
            }, disable: function () {
                this.uh = q
            }
        });
        function db(a, b) {
            a && !b && (b = a);
            this.re = this.qe = this.we = this.ve = this.pl = this.Zk = p;
            a && (this.pl = new H(a.lng, a.lat), this.Zk = new H(b.lng, b.lat), this.we = a.lng, this.ve = a.lat, this.re = b.lng, this.qe = b.lat)
        }

        w.object.extend(db.prototype, {
            kj: function () {
                return !this.pl || !this.Zk
            }, $a: function (a) {
                return !(a instanceof db) || this.kj() ? q : this.De().$a(a.De()) && this.Af().$a(a.Af())
            }, De: u("pl"), Af: u("Zk"), rU: function (a) {
                return !(a instanceof db) || this.kj() || a.kj() ? q : a.we > this.we && a.re < this.re && a.ve > this.ve && a.qe < this.qe
            }, Aa: function () {
                return this.kj() ? p : new H((this.we + this.re) / 2, (this.ve + this.qe) / 2)
            }, Ds: function (a) {
                if (!(a instanceof db) || Math.max(a.we, a.re) < Math.min(this.we, this.re) || Math.min(a.we, a.re) > Math.max(this.we, this.re) || Math.max(a.ve, a.qe) < Math.min(this.ve, this.qe) || Math.min(a.ve, a.qe) > Math.max(this.ve, this.qe))
                    return p;
                var b = Math.max(this.we, a.we), c = Math.min(this.re, a.re), d = Math.max(this.ve, a.ve), a = Math.min(this.qe, a.qe);
                return new db(new H(b, d), new H(c, a))
            }, Cr: function (a) {
                return !(a instanceof H) || this.kj() ? q : a.lng >= this.we && a.lng <= this.re && a.lat >= this.ve && a.lat <= this.qe
            }, extend: function (a) {
                if (a instanceof H) {
                    var b = a.lng, a = a.lat;
                    this.pl || (this.pl = new H(0, 0));
                    this.Zk || (this.Zk = new H(0, 0));
                    if (!this.we || this.we > b)
                        this.pl.lng = this.we = b;
                    if (!this.re || this.re < b)
                        this.Zk.lng = this.re = b;
                    if (!this.ve || this.ve > a)
                        this.pl.lat = this.ve = a;
                    if (!this.qe || this.qe < a)
                        this.Zk.lat = this.qe = a
                }
            }, VE: function () {
                return this.kj() ? new H(0, 0) : new H(Math.abs(this.re - this.we), Math.abs(this.qe - this.ve))
            }
        });
        function H(a, b) {
            isNaN(a) && (a = Jb(a), a = isNaN(a) ? 0 : a);
            Xa(a) && (a = parseFloat(a));
            isNaN(b) && (b = Jb(b), b = isNaN(b) ? 0 : b);
            Xa(b) && (b = parseFloat(b));
            this.lng = a;
            this.lat = b
        }

        H.bL = function (a) {
            return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
        };
        H.prototype.$a = function (a) {
            return a && this.lat == a.lat && this.lng == a.lng
        };
        function fc() {
        }

        fc.prototype.Vg = function () {
            aa("lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0")
        };
        fc.prototype.fi = function () {
            aa("pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0")
        };
        function gc() {
        }
        ;
        var cb = {
            rJ: function (a, b, c) {
                J.load("coordtransutils", function () {
                    cb.NT(a, b, c)
                }, o)
            }, qJ: function (a, b, c) {
                J.load("coordtransutils", function () {
                    cb.MT(a, b, c)
                }, o)
            }
        };

        function hc() {
            this.Da = [];
            var a = this;
            J.load("convertor", function () {
                a.NO()
            })
        }

        w.ia(hc, w.lang.qa, "Convertor");
        w.extend(hc.prototype, {
            translate: function (a, b, c, d) {
                this.Da.push({method: "translate", arguments: [a, b, c, d]})
            }
        });
        R(hc.prototype, {translate: hc.prototype.translate});
        function Q() {
        }

        Q.prototype = new fc;
        w.extend(Q, {
            dO: 6370996.81,
            CF: [1.289059486E7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
            Yt: [75, 60, 45, 30, 15, 0],
            jO: [[1.410526172116255E-8, 8.98305509648872E-6, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.73379812E7], [-7.435856389565537E-9, 8.983055097726239E-6, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486E7], [-3.030883460898826E-8, 8.98305509983578E-6, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37], [-1.981981304930552E-8, 8.983055099779535E-6, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06], [3.09191371068437E-9, 8.983055096812155E-6, 6.995724062E-5, 23.10934304144901, -2.3663490511E-4, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4], [2.890871144776878E-9, 8.983055095805407E-6, -3.068298E-8, 7.47137025468032, -3.53937994E-6, -0.02145144861037, -1.234426596E-5, 1.0322952773E-4, -3.23890364E-6, 826088.5]],
            zF: [[-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5], [8.277824516172526E-4, 111320.7020463578, 6.477955746671607E8, -4.082003173641316E9, 1.077490566351142E10, -1.517187553151559E10, 1.205306533862167E10, -5.124939663577472E9, 9.133119359512032E8, 67.5], [0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662E7, 7.968221547186455E7, -1.159649932797253E8, 9.723671115602145E7, -4.366194633752821E7, 8477230.501135234, 52.5], [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5], [-3.441963504368392E-4, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [-3.218135878613132E-4, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]],
            M0: function (a, b) {
                if (!a || !b)
                    return 0;
                var c, d, a = this.sb(a);
                if (!a)
                    return 0;
                c = this.yk(a.lng);
                d = this.yk(a.lat);
                b = this.sb(b);
                return !b ? 0 : this.Ce(c, this.yk(b.lng), d, this.yk(b.lat))
            },
            wo: function (a, b) {
                if (!a || !b)
                    return 0;
                a.lng = this.fD(a.lng, -180, 180);
                a.lat = this.jD(a.lat, -74, 74);
                b.lng = this.fD(b.lng, -180, 180);
                b.lat = this.jD(b.lat, -74, 74);
                return this.Ce(this.yk(a.lng), this.yk(b.lng), this.yk(a.lat), this.yk(b.lat))
            },
            sb: function (a) {
                if (a === p || a === j)
                    return new H(0, 0);
                var b, c;
                b = new H(Math.abs(a.lng), Math.abs(a.lat));
                for (var d = 0; d < this.CF.length; d++)
                    if (b.lat >= this.CF[d]) {
                        c = this.jO[d];
                        break
                    }
                a = this.sJ(a, c);
                return a = new H(a.lng.toFixed(6), a.lat.toFixed(6))
            },
            Fb: function (a) {
                if (a === p || a === j || 180 < a.lng || -180 > a.lng || 90 < a.lat || -90 > a.lat)
                    return new H(0, 0);
                var b, c;
                a.lng = this.fD(a.lng, -180, 180);
                a.lat = this.jD(a.lat, -74, 74);
                b = new H(a.lng, a.lat);
                for (var d = 0; d < this.Yt.length; d++)
                    if (b.lat >= this.Yt[d]) {
                        c = this.zF[d];
                        break
                    }
                if (!c)
                    for (d = this.Yt.length - 1; 0 <= d; d--)
                        if (b.lat <= -this.Yt[d]) {
                            c = this.zF[d];
                            break
                        }
                a = this.sJ(a, c);
                return a = new H(a.lng.toFixed(2), a.lat.toFixed(2))
            },
            sJ: function (a, b) {
                if (a && b) {
                    var c = b[0] + b[1] * Math.abs(a.lng), d = Math.abs(a.lat) / b[9], d = b[2] + b[3] * d + b[4] * d * d + b[5] * d * d * d + b[6] * d * d * d * d + b[7] * d * d * d * d * d + b[8] * d * d * d * d * d * d, c = c * (0 > a.lng ? -1 : 1), d = d * (0 > a.lat ? -1 : 1);
                    return new H(c, d)
                }
            },
            Ce: function (a, b, c, d) {
                return this.dO * Math.acos(Math.sin(c) * Math.sin(d) + Math.cos(c) * Math.cos(d) * Math.cos(b - a))
            },
            yk: function (a) {
                return Math.PI * a / 180
            },
            D2: function (a) {
                return 180 * a / Math.PI
            },
            jD: function (a, b, c) {
                b != p && (a = Math.max(a, b));
                c != p && (a = Math.min(a, c));
                return a
            },
            fD: function (a, b, c) {
                for (; a > c; )
                    a -= c - b;
                for (; a < b; )
                    a += c - b;
                return a
            }
        });
        w.extend(Q.prototype, {
            om: function (a) {
                return Q.Fb(a)
            }, Vg: function (a) {
                a = Q.Fb(a);
                return new P(a.lng, a.lat)
            }, Yg: function (a) {
                return Q.sb(a)
            }, fi: function (a) {
                a = new H(a.x, a.y);
                return Q.sb(a)
            }, Vb: function (a, b, c, d, e) {
                if (a)
                    return a = this.om(a, e), b = this.Bc(b), new P(Math.round((a.lng - c.lng) / b + d.width / 2), Math.round((c.lat - a.lat) / b + d.height / 2))
            }, mb: function (a, b, c, d, e) {
                if (a)
                    return b = this.Bc(b), this.Yg(new H(c.lng + b * (a.x - d.width / 2), c.lat - b * (a.y - d.height / 2)), e)
            }, Bc: function (a) {
                return Math.pow(2, 18 - a)
            }
        });
        function fb() {
            this.OB = "bj"
        }

        fb.prototype = new Q;
        w.extend(fb.prototype, {
            om: function (a, b) {
                return this.vP(b, Q.Fb(a))
            }, Yg: function (a, b) {
                return Q.sb(this.wP(b, a))
            }, lngLatToPointFor3D: function (a, b) {
                var c = this, d = Q.Fb(a);
                J.load("coordtrans", function () {
                    var a = gc.hD(c.OB || "bj", d), a = new P(a.x, a.y);
                    b && b(a)
                }, o)
            }, pointToLngLatFor3D: function (a, b) {
                var c = this, d = new H(a.x, a.y);
                J.load("coordtrans", function () {
                    var a = gc.gD(c.OB || "bj", d), a = new H(a.lng, a.lat), a = Q.sb(a);
                    b && b(a)
                }, o)
            }, vP: function (a, b) {
                if (J.Va("coordtrans").md == J.rj.Ap) {
                    var c = gc.hD(a || "bj", b);
                    return new H(c.x, c.y)
                }
                J.load("coordtrans", s());
                return new H(0, 0)
            }, wP: function (a, b) {
                if (J.Va("coordtrans").md == J.rj.Ap) {
                    var c = gc.gD(a || "bj", b);
                    return new H(c.lng, c.lat)
                }
                J.load("coordtrans", s());
                return new H(0, 0)
            }, Bc: function (a) {
                return Math.pow(2, 20 - a)
            }
        });
        function ic() {
            this.yb = "overlay"
        }

        w.lang.ia(ic, w.lang.qa, "Overlay");
        ic.cm = function (a) {
            a *= 1;
            return !a ? 0 : -1E5 * a << 1
        };
        w.extend(ic.prototype, {
            Ne: function (a) {
                if (!this.K && Va(this.initialize) && (this.K = this.initialize(a)))
                    this.K.style.WebkitUserSelect = "none";
                this.draw()
            }, initialize: function () {
                aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
            }, draw: function () {
                aa("draw\u65b9\u6cd5\u672a\u5b9e\u73b0")
            }, remove: function () {
                this.K && this.K.parentNode && this.K.parentNode.removeChild(this.K);
                this.K = p;
                this.dispatchEvent(new M("onremove"))
            }, J: function () {
                this.K && w.B.J(this.K)
            }, show: function () {
                this.K && w.B.show(this.K)
            }, Ug: function () {
                return !this.K || "none" == this.K.style.display || "hidden" == this.K.style.visibility ? q : o
            }
        });
        z.Ge(function (a) {
            function b(a, b) {
                var c = K("div"), g = c.style;
                g.position = "absolute";
                g.top = g.left = g.width = g.height = "0";
                g.zIndex = b;
                a.appendChild(c);
                return c
            }

            var c = a.H;
            c.ad = a.ad = b(a.platform, 200);
            a.Zd.LC = b(c.ad, 800);
            a.Zd.VD = b(c.ad, 700);
            a.Zd.bK = b(c.ad, 600);
            a.Zd.OD = b(c.ad, 500);
            a.Zd.EL = b(c.ad, 400);
            a.Zd.FL = b(c.ad, 300);
            a.Zd.NZ = b(c.ad, 201);
            a.Zd.Ms = b(c.ad, 200)
        });
        function eb() {
            w.lang.qa.call(this);
            ic.call(this);
            this.map = p;
            this.Ea = o;
            this.kb = p;
            this.nG = 0
        }

        w.lang.ia(eb, ic, "OverlayInternal");
        w.extend(eb.prototype, {
            initialize: function (a) {
                this.map = a;
                w.lang.qa.call(this, this.Q);
                return p
            }, Gw: u("map"), draw: s(), remove: function () {
                this.map = p;
                w.lang.mw(this.Q);
                ic.prototype.remove.call(this)
            }, J: function () {
                this.Ea != q && (this.Ea = q)
            }, show: function () {
                this.Ea != o && (this.Ea = o)
            }, Ug: function () {
                return !this.K ? q : !!this.Ea
            }, Fa: u("K"), KM: function (a) {
                var a = a || {}, b;
                for (b in a)
                    this.z[b] = a[b]
            }, lt: ba("zIndex"), Zi: function () {
                this.z.Zi = o
            }, RU: function () {
                this.z.Zi = q
            }, Un: ba("Vf"), Zo: function () {
                this.Vf = p
            }
        });
        function jc() {
            this.map = p;
            this.ka = {};
            this.me = []
        }

        z.Ge(function (a) {
            var b = new jc;
            b.map = a;
            a.ka = b.ka;
            a.me = b.me;
            a.addEventListener("load", function (a) {
                b.draw(a)
            });
            a.addEventListener("moveend", function (a) {
                b.draw(a)
            });
            w.S.ba && 8 > w.S.ba || "BackCompat" == document.compatMode ? a.addEventListener("zoomend", function (a) {
                setTimeout(function () {
                    b.draw(a)
                }, 20)
            }) : a.addEventListener("zoomend", function (a) {
                b.draw(a)
            });
            a.addEventListener("maptypechange", function (a) {
                b.draw(a)
            });
            a.addEventListener("addoverlay", function (a) {
                a = a.target;
                if (a instanceof eb)
                    b.ka[a.Q] || (b.ka[a.Q] = a);
                else {
                    for (var d = q, e = 0, f = b.me.length; e < f; e++)
                        if (b.me[e] === a) {
                            d = o;
                            break
                        }
                    d || b.me.push(a)
                }
            });
            a.addEventListener("removeoverlay", function (a) {
                a = a.target;
                if (a instanceof eb)
                    delete b.ka[a.Q];
                else
                    for (var d = 0, e = b.me.length; d < e; d++)
                        if (b.me[d] === a) {
                            b.me.splice(d, 1);
                            break
                        }
            });
            a.addEventListener("clearoverlays", function () {
                this.Lc();
                for (var a in b.ka)
                    b.ka[a].z.Zi && (b.ka[a].remove(), delete b.ka[a]);
                a = 0;
                for (var d = b.me.length; a < d; a++)
                    b.me[a].Zi != q && (b.me[a].remove(), b.me[a] = p, b.me.splice(a, 1), a--, d--)
            });
            a.addEventListener("infowindowopen", function () {
                var a = this.kb;
                a && (w.B.J(a.kc), w.B.J(a.Qb))
            });
            a.addEventListener("movestart", function () {
                this.Rg() && this.Rg().aI()
            });
            a.addEventListener("moveend", function () {
                this.Rg() && this.Rg().RH()
            })
        });
        jc.prototype.draw = function (a) {
            if (z.Ep) {
                var b = z.Ep.is(this.map);
                "canvas" == b.yb && b.canvas && b.qP(b.canvas.getContext("2d"))
            }
            for (var c in this.ka)
                this.ka[c].draw(a);
            w.Yb.qb(this.me, function (a) {
                a.draw()
            });
            this.map.H.ab && this.map.H.ab.ha();
            z.Ep && b.HE()
        };
        function kc(a) {
            eb.call(this);
            a = a || {};
            this.z = {
                strokeColor: a.strokeColor || "#3a6bdb",
                $b: a.strokeWeight || 5,
                cd: a.strokeOpacity || 0.65,
                strokeStyle: a.strokeStyle || "solid",
                Zi: a.enableMassClear === q ? q : o,
                dk: p,
                Yl: p,
                yf: a.enableEditing === o ? o : q,
                NL: 5,
                FZ: q,
                Te: a.enableClicking === q ? q : o,
                Xh: a.icons && 0 < a.icons.length ? a.icons : p
            };
            0 >= this.z.$b && (this.z.$b = 5);
            if (0 > this.z.cd || 1 < this.z.cd)
                this.z.cd = 0.65;
            if (0 > this.z.eg || 1 < this.z.eg)
                this.z.eg = 0.65;
            "solid" != this.z.strokeStyle && "dashed" != this.z.strokeStyle && (this.z.strokeStyle = "solid");
            this.K = p;
            this.ku = new db(0, 0);
            this.Qe = [];
            this.ac = [];
            this.Ga = {}
        }

        w.lang.ia(kc, eb, "Graph");
        kc.Cw = function (a) {
            var b = [];
            if (!a)
                return b;
            Xa(a) && w.Yb.qb(a.split(";"), function (a) {
                a = a.split(",");
                b.push(new H(a[0], a[1]))
            });
            "[object Array]" == Object.prototype.toString.apply(a) && 0 < a.length && (b = a);
            return b
        };
        kc.eE = [0.09, 0.0050, 1.0E-4, 1.0E-5];
        w.extend(kc.prototype, {
            initialize: function (a) {
                this.map = a;
                return p
            }, draw: s(), ir: function (a) {
                this.Qe.length = 0;
                this.W = kc.Cw(a).slice(0);
                this.mh()
            }, Vd: function (a) {
                this.ir(a)
            }, mh: function () {
                if (this.W) {
                    var a = this;
                    a.ku = new db;
                    w.Yb.qb(this.W, function (b) {
                        a.ku.extend(b)
                    })
                }
            }, ee: u("W"), Jm: function (a, b) {
                b && this.W[a] && (this.Qe.length = 0, this.W[a] = new H(b.lng, b.lat), this.mh())
            }, setStrokeColor: function (a) {
                this.z.strokeColor = a
            }, lW: function () {
                return this.z.strokeColor
            }, pp: function (a) {
                0 < a && (this.z.$b = a)
            }, CK: function () {
                return this.z.$b
            }, np: function (a) {
                a == j || (1 < a || 0 > a) || (this.z.cd = a)
            }, mW: function () {
                return this.z.cd
            }, dt: function (a) {
                1 < a || 0 > a || (this.z.eg = a)
            }, JV: function () {
                return this.z.eg
            }, op: function (a) {
                "solid" != a && "dashed" != a || (this.z.strokeStyle = a)
            }, BK: function () {
                return this.z.strokeStyle
            }, setFillColor: function (a) {
                this.z.fillColor = a || ""
            }, IV: function () {
                return this.z.fillColor
            }, Nd: u("ku"), remove: function () {
                this.map && this.map.removeEventListener("onmousemove", this.Gu);
                eb.prototype.remove.call(this);
                this.Qe.length = 0
            }, yf: function () {
                if (!(2 > this.W.length)) {
                    this.z.yf = o;
                    var a = this;
                    J.load("poly", function () {
                        a.vl()
                    }, o)
                }
            }, QU: function () {
                this.z.yf = q;
                var a = this;
                J.load("poly", function () {
                    a.Tj()
                }, o)
            }
        });
        function lc(a) {
            eb.call(this);
            this.K = this.map = p;
            this.z = {
                width: 0,
                height: 0,
                pa: new L(0, 0),
                opacity: 1,
                background: "transparent",
                ix: 1,
                rL: "#000",
                iX: "solid",
                point: p
            };
            this.KM(a);
            this.point = this.z.point
        }

        w.lang.ia(lc, eb, "Division");
        w.extend(lc.prototype, {
            Fk: function () {
                var a = this.z, b = this.content, c = ['<div class="BMap_Division" style="position:absolute;'];
                c.push("width:" + a.width + "px;display:block;");
                c.push("overflow:hidden;");
                "none" != a.borderColor && c.push("border:" + a.ix + "px " + a.iX + " " + a.rL + ";");
                c.push("opacity:" + a.opacity + "; filter:(opacity=" + 100 * a.opacity + ")");
                c.push("background:" + a.background + ";");
                c.push('z-index:60;">');
                c.push(b);
                c.push("</div>");
                this.K = Ab(this.map.Cf().VD, c.join(""))
            }, initialize: function (a) {
                this.map = a;
                this.Fk();
                this.K && w.F(this.K, G() ? "touchstart" : "mousedown", function (a) {
                    oa(a)
                });
                return this.K
            }, draw: function () {
                var a = this.map.Fe(this.z.point);
                this.z.pa = new L(-Math.round(this.z.width / 2) - Math.round(this.z.ix), -Math.round(this.z.height / 2) - Math.round(this.z.ix));
                this.K.style.left = a.x + this.z.pa.width + "px";
                this.K.style.top = a.y + this.z.pa.height + "px"
            }, V: function () {
                return this.z.point
            }, x_: function () {
                return this.map.Vb(this.V())
            }, ha: function (a) {
                this.z.point = a;
                this.draw()
            }, xY: function (a, b) {
                this.z.width = Math.round(a);
                this.z.height = Math.round(b);
                this.K && (this.K.style.width = this.z.width + "px", this.K.style.height = this.z.height + "px", this.draw())
            }
        });
        function mc(a, b, c) {
            a && b && (this.imageUrl = a, this.size = b, a = new L(Math.floor(b.width / 2), Math.floor(b.height / 2)), c = c || {}, a = c.anchor || a, b = c.imageOffset || new L(0, 0), this.imageSize = c.imageSize, this.anchor = a, this.imageOffset = b, this.infoWindowAnchor = c.infoWindowAnchor || this.anchor, this.printImageUrl = c.printImageUrl || "")
        }

        w.extend(mc.prototype, {
            DY: function (a) {
                a && (this.imageUrl = a)
            }, OY: function (a) {
                a && (this.printImageUrl = a)
            }, vd: function (a) {
                a && (this.size = new L(a.width, a.height))
            }, mc: function (a) {
                a && (this.anchor = new L(a.width, a.height))
            }, ft: function (a) {
                a && (this.imageOffset = new L(a.width, a.height))
            }, FY: function (a) {
                a && (this.infoWindowAnchor = new L(a.width, a.height))
            }, BY: function (a) {
                a && (this.imageSize = new L(a.width, a.height))
            }, toString: da("Icon")
        });
        function nc(a, b) {
            if (a) {
                b = b || {};
                this.style = {
                    anchor: b.anchor || new L(0, 0),
                    fillColor: b.fillColor || "#000",
                    eg: b.fillOpacity || 0,
                    scale: b.scale || 1,
                    rotation: b.rotation || 0,
                    strokeColor: b.strokeColor || "#000",
                    cd: b.strokeOpacity || 1,
                    $b: b.strokeWeight
                };
                this.yb = "number" === typeof a ? a : "UserDefined";
                this.ui = this.style.anchor;
                this.Mq = new L(0, 0);
                this.anchor = p;
                this.DA = a;
                var c = this;
                J.load("symbol", function () {
                    c.gn()
                }, o)
            }
        }

        w.extend(nc.prototype, {
            setPath: ba("DA"), setAnchor: function (a) {
                this.ui = this.style.anchor = a
            }, setRotation: function (a) {
                this.style.rotation = a
            }, setScale: function (a) {
                this.style.scale = a
            }, setStrokeWeight: function (a) {
                this.style.$b = a
            }, setStrokeColor: function (a) {
                a = w.Br.JB(a, this.style.cd);
                this.style.strokeColor = a
            }, setStrokeOpacity: function (a) {
                this.style.cd = a
            }, setFillOpacity: function (a) {
                this.style.eg = a
            }, setFillColor: function (a) {
                this.style.fillColor = a
            }
        });
        function oc(a, b, c, d) {
            a && (this.Zu = {}, this.aK = d ? !!d : q, this.Jc = [], this.eZ = a instanceof nc ? a : p, this.KH = b === j ? o : !!(b.indexOf("%") + 1), this.Ij = isNaN(parseFloat(b)) ? 1 : this.KH ? parseFloat(b) / 100 : parseFloat(b), this.LH = !!(c.indexOf("%") + 1), this.repeat = c != j ? this.LH ? parseFloat(c) / 100 : parseFloat(c) : 0)
        }
        ;
        function pc(a, b) {
            w.lang.qa.call(this);
            this.content = a;
            this.map = p;
            b = b || {};
            this.z = {
                width: b.width || 0,
                height: b.height || 0,
                maxWidth: b.maxWidth || 730,
                pa: b.offset || new L(0, 0),
                title: b.title || "",
                WD: b.maxContent || "",
                Mg: b.enableMaximize || q,
                $r: b.enableAutoPan === q ? q : o,
                xC: b.enableCloseOnClick === q ? q : o,
                margin: b.margin || [10, 10, 40, 10],
                EB: b.collisions || [[10, 10], [10, 10], [10, 10], [10, 10]],
                JW: q,
                DX: b.onClosing || da(o),
                SJ: q,
                CC: b.enableParano === o ? o : q,
                message: b.message,
                EC: b.enableSearchTool === o ? o : q,
                Tw: b.headerContent || "",
                yC: b.enableContentScroll || q
            };
            if (0 != this.z.width && (220 > this.z.width && (this.z.width = 220), 730 < this.z.width))
                this.z.width = 730;
            if (0 != this.z.height && (60 > this.z.height && (this.z.height = 60), 650 < this.z.height))
                this.z.height = 650;
            if (0 != this.z.maxWidth && (220 > this.z.maxWidth && (this.z.maxWidth = 220), 730 < this.z.maxWidth))
                this.z.maxWidth = 730;
            this.Pd = q;
            this.pi = F.ea;
            this.Qa = p;
            var c = this;
            J.load("infowindow", function () {
                c.rb()
            })
        }

        w.lang.ia(pc, w.lang.qa, "InfoWindow");
        w.extend(pc.prototype, {
            setWidth: function (a) {
                !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.z.width = a)
            }, setHeight: function (a) {
                !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (60 > a && (a = 60), 650 < a && (a = 650)), this.z.height = a)
            }, NM: function (a) {
                !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.z.maxWidth = a)
            }, qc: function (a) {
                this.z.title = a
            }, getTitle: function () {
                return this.z.title
            }, Qc: ba("content"), bk: u("content"), ht: function (a) {
                this.z.WD = a + ""
            }, Ud: s(), $r: function () {
                this.z.$r = o
            }, disableAutoPan: function () {
                this.z.$r = q
            }, enableCloseOnClick: function () {
                this.z.xC = o
            }, disableCloseOnClick: function () {
                this.z.xC = q
            }, Mg: function () {
                this.z.Mg = o
            }, qw: function () {
                this.z.Mg = q
            }, show: function () {
                this.Ea = o
            }, J: function () {
                this.Ea = q
            }, close: function () {
                this.J()
            }, mx: function () {
                this.Pd = o
            }, restore: function () {
                this.Pd = q
            }, Ug: function () {
                return this.Ka()
            }, Ka: da(q), V: function () {
                if (this.Qa && this.Qa.V)
                    return this.Qa.V()
            }, Bf: function () {
                return this.z.pa
            }
        });
        La.prototype.zb = function (a, b) {
            if (a instanceof pc && b instanceof H) {
                var c = this.H;
                c.qm ? c.qm.ha(b) : (c.qm = new S(b, {
                    icon: new mc(F.ea + "blank.gif", {width: 1, height: 1}),
                    offset: new L(0, 0),
                    clickable: q
                }), c.qm.tQ = 1);
                this.ya(c.qm);
                c.qm.zb(a)
            }
        };
        La.prototype.Lc = function () {
            var a = this.H.ab || this.H.Qk;
            a && a.Qa && a.Qa.Lc()
        };
        eb.prototype.zb = function (a) {
            this.map && (this.map.Lc(), a.Ea = o, this.map.H.Qk = a, a.Qa = this, w.lang.qa.call(a, a.Q))
        };
        eb.prototype.Lc = function () {
            this.map && this.map.H.Qk && (this.map.H.Qk.Ea = q, w.lang.mw(this.map.H.Qk.Q), this.map.H.Qk = p)
        };
        function qc(a, b) {
            eb.call(this);
            this.content = a;
            this.K = this.map = p;
            b = b || {};
            this.z = {
                width: 0,
                pa: b.offset || new L(0, 0),
                rp: {
                    backgroundColor: "#fff",
                    border: "1px solid #f00",
                    padding: "1px",
                    whiteSpace: "nowrap",
                    font: "12px " + F.fontFamily,
                    zIndex: "80",
                    MozUserSelect: "none"
                },
                position: b.position || p,
                Zi: b.enableMassClear === q ? q : o,
                Te: o
            };
            0 > this.z.width && (this.z.width = 0);
            Gb(b.enableClicking) && (this.z.Te = b.enableClicking);
            this.point = this.z.position;
            var c = this;
            J.load("marker", function () {
                c.rb()
            })
        }

        w.lang.ia(qc, eb, "Label");
        w.extend(qc.prototype, {
            V: function () {
                return this.Ou ? this.Ou.V() : this.point
            }, ha: function (a) {
                a instanceof H && !this.Hw() && (this.point = this.z.position = new H(a.lng, a.lat))
            }, Qc: ba("content"), GE: function (a) {
                0 <= a && 1 >= a && (this.z.opacity = a)
            }, He: function (a) {
                a instanceof L && (this.z.pa = new L(a.width, a.height))
            }, Bf: function () {
                return this.z.pa
            }, xd: function (a) {
                a = a || {};
                this.z.rp = w.extend(this.z.rp, a)
            }, hi: function (a) {
                return this.xd(a)
            }, qc: function (a) {
                this.z.title = a || ""
            }, getTitle: function () {
                return this.z.title
            }, MM: function (a) {
                this.point = (this.Ou = a) ? this.z.position = a.V() : this.z.position = p
            }, Hw: function () {
                return this.Ou || p
            }, bk: u("content")
        });
        function rc(a, b) {
            if (0 !== arguments.length) {
                eb.apply(this, arguments);
                b = b || {};
                this.z = {
                    Ua: a,
                    opacity: b.opacity || 1,
                    im: b.im || "",
                    Qr: b.displayOnMinLevel || 1,
                    Pr: b.displayOnMaxLevel || 19,
                    ZY: b.stretch || q
                };
                var c = this;
                J.load("groundoverlay", function () {
                    c.rb()
                })
            }
        }

        w.lang.ia(rc, eb, "GroundOverlay");
        w.extend(rc.prototype, {
            setBounds: function (a) {
                this.z.Ua = a
            }, getBounds: function () {
                return this.z.Ua
            }, setOpacity: function (a) {
                this.z.opacity = a
            }, getOpacity: function () {
                return this.z.opacity
            }, setImageURL: function (a) {
                this.z.im = a
            }, getImageURL: function () {
                return this.z.im
            }, setDisplayOnMinLevel: function (a) {
                this.z.Qr = a
            }, getDisplayOnMinLevel: function () {
                return this.z.Qr
            }, setDisplayOnMaxLevel: function (a) {
                this.z.Pr = a
            }, getDisplayOnMaxLevel: function () {
                return this.z.Pr
            }
        });
        var sc = 3, tc = 4;

        function uc() {
            var a = document.createElement("canvas");
            return !(!a.getContext || !a.getContext("2d"))
        }

        function vc(a, b) {
            var c = this;
            uc() && (a === j && aa(Error("\u6ca1\u6709\u4f20\u5165points\u6570\u636e")), "[object Array]" !== Object.prototype.toString.call(a) && aa(Error("points\u6570\u636e\u4e0d\u662f\u6570\u7ec4")), b = b || {}, eb.apply(c, arguments), c.R = {W: a}, c.z = {
                shape: b.shape || sc,
                size: b.size || tc,
                color: b.color || "#fa937e",
                Zi: o
            }, this.AA = [], this.$d = [], J.load("pointcollection", function () {
                for (var a = 0, b; b = c.AA[a]; a++)
                    c[b.method].apply(c, b.arguments);
                for (a = 0; b = c.$d[a]; a++)
                    c[b.method].apply(c, b.arguments)
            }))
        }

        w.lang.ia(vc, eb, "PointCollection");
        w.extend(vc.prototype, {
            initialize: function (a) {
                this.AA && this.AA.push({method: "initialize", arguments: arguments})
            }, setPoints: function (a) {
                this.$d && this.$d.push({method: "setPoints", arguments: arguments})
            }, setStyles: function (a) {
                this.$d && this.$d.push({method: "setStyles", arguments: arguments})
            }, clear: function () {
                this.$d && this.$d.push({method: "clear", arguments: arguments})
            }, remove: function () {
                this.$d && this.$d.push({method: "remove", arguments: arguments})
            }
        });
        var wc = new mc(F.ea + "marker_red_sprite.png", new L(19, 25), {
            anchor: new L(10, 25),
            infoWindowAnchor: new L(10, 0)
        }), xc = new mc(F.ea + "marker_red_sprite.png", new L(20, 11), {
            anchor: new L(6, 11),
            imageOffset: new L(-19, -13)
        });

        function S(a, b) {
            eb.call(this);
            b = b || {};
            this.point = a;
            this.Sp = this.map = p;
            this.z = {
                pa: b.offset || new L(0, 0),
                hj: b.icon || wc,
                sk: xc,
                title: b.title || "",
                label: p,
                $I: b.baseZIndex || 0,
                Te: o,
                Y2: q,
                LD: q,
                Zi: b.enableMassClear === q ? q : o,
                Sb: q,
                tM: b.raiseOnDrag === o ? o : q,
                AM: q,
                od: b.draggingCursor || F.od,
                rotation: b.rotation || 0
            };
            b.icon && !b.shadow && (this.z.sk = p);
            b.enableDragging && (this.z.Sb = b.enableDragging);
            Gb(b.enableClicking) && (this.z.Te = b.enableClicking);
            var c = this;
            J.load("marker", function () {
                c.rb()
            })
        }

        S.cu = ic.cm(-90) + 1E6;
        S.uF = S.cu + 1E6;
        w.lang.ia(S, eb, "Marker");
        w.extend(S.prototype, {
            Pb: function (a) {
                if (a instanceof mc || a instanceof nc)
                    this.z.hj = a
            }, xo: function () {
                return this.z.hj
            }, Rx: function (a) {
                a instanceof mc && (this.z.sk = a)
            }, getShadow: function () {
                return this.z.sk
            }, Hm: function (a) {
                this.z.label = a || p
            }, dD: function () {
                return this.z.label
            }, Sb: function () {
                this.z.Sb = o
            }, cC: function () {
                this.z.Sb = q
            }, V: u("point"), ha: function (a) {
                a instanceof H && (this.point = new H(a.lng, a.lat))
            }, ii: function (a, b) {
                this.z.LD = !!a;
                a && (this.RF = b || 0)
            }, qc: function (a) {
                this.z.title = a + ""
            }, getTitle: function () {
                return this.z.title
            }, He: function (a) {
                a instanceof L && (this.z.pa = a)
            }, Bf: function () {
                return this.z.pa
            }, Gm: ba("Sp"), mp: function (a) {
                this.z.rotation = a
            }, zK: function () {
                return this.z.rotation
            }
        });
        function yc(a, b) {
            kc.call(this, b);
            b = b || {};
            this.z.eg = b.fillOpacity ? b.fillOpacity : 0.65;
            this.z.fillColor = "" == b.fillColor ? "" : b.fillColor ? b.fillColor : "#fff";
            this.Vd(a);
            var c = this;
            J.load("poly", function () {
                c.rb()
            })
        }

        w.lang.ia(yc, kc, "Polygon");
        w.extend(yc.prototype, {
            Vd: function (a, b) {
                this.Rn = kc.Cw(a).slice(0);
                var c = kc.Cw(a).slice(0);
                1 < c.length && c.push(new H(c[0].lng, c[0].lat));
                kc.prototype.Vd.call(this, c, b)
            }, Jm: function (a, b) {
                this.Rn[a] && (this.Rn[a] = new H(b.lng, b.lat), this.W[a] = new H(b.lng, b.lat), 0 == a && !this.W[0].$a(this.W[this.W.length - 1]) && (this.W[this.W.length - 1] = new H(b.lng, b.lat)), this.mh())
            }, ee: function () {
                var a = this.Rn;
                0 == a.length && (a = this.W);
                return a
            }
        });
        function zc(a, b) {
            kc.call(this, b);
            this.ir(a);
            var c = this;
            J.load("poly", function () {
                c.rb()
            })
        }

        w.lang.ia(zc, kc, "Polyline");
        function Ac(a, b, c) {
            this.point = a;
            this.ma = Math.abs(b);
            yc.call(this, [], c)
        }

        Ac.eE = [0.01, 1.0E-4, 1.0E-5, 4.0E-6];
        w.lang.ia(Ac, yc, "Circle");
        w.extend(Ac.prototype, {
            initialize: function (a) {
                this.map = a;
                this.W = this.Cu(this.point, this.ma);
                this.mh();
                return p
            }, Aa: u("point"), Hf: function (a) {
                a && (this.point = a)
            }, xK: u("ma"), cf: function (a) {
                this.ma = Math.abs(a)
            }, Cu: function (a, b) {
                if (!a || !b || !this.map)
                    return [];
                for (var c = [], d = b / 6378800, e = Math.PI / 180 * a.lat, f = Math.PI / 180 * a.lng, g = 0; 360 > g; g += 9) {
                    var i = Math.PI / 180 * g, k = Math.asin(Math.sin(e) * Math.cos(d) + Math.cos(e) * Math.sin(d) * Math.cos(i)), i = new H(((f - Math.atan2(Math.sin(i) * Math.sin(d) * Math.cos(e), Math.cos(d) - Math.sin(e) * Math.sin(k)) + Math.PI) % (2 * Math.PI) - Math.PI) * (180 / Math.PI), k * (180 / Math.PI));
                    c.push(i)
                }
                d = c[0];
                c.push(new H(d.lng, d.lat));
                return c
            }
        });
        var Bc = {};

        function Cc(a) {
            this.map = a;
            this.pm = [];
            this.If = [];
            this.rg = [];
            this.$T = 300;
            this.oE = 0;
            this.kg = {};
            this.Ri = {};
            this.$g = 0;
            this.ED = o;
            this.yJ = {};
            this.Cn = this.kn(1);
            this.Yc = this.kn(2);
            this.$k = this.kn(3);
            a.platform.appendChild(this.Cn);
            a.platform.appendChild(this.Yc);
            a.platform.appendChild(this.$k)
        }

        z.Ge(function (a) {
            var b = new Cc(a);
            b.fa();
            a.ib = b
        });
        w.extend(Cc.prototype, {
            fa: function () {
                var a = this, b = a.map;
                b.addEventListener("loadcode", function () {
                    a.jx()
                });
                b.addEventListener("addtilelayer", function (b) {
                    a.Ig(b)
                });
                b.addEventListener("removetilelayer", function (b) {
                    a.hh(b)
                });
                b.addEventListener("setmaptype", function (b) {
                    a.og(b)
                });
                b.addEventListener("zoomstartcode", function (b) {
                    a.Ac(b)
                });
                b.addEventListener("setcustomstyles", function (b) {
                    a.gt(b.target);
                    a.Ff(o)
                })
            }, jx: function () {
                var a = this;
                if (w.S.ba)
                    try {
                        document.execCommand("BackgroundImageCache", q, o)
                    } catch (b) {
                    }
                this.loaded || a.Yw();
                a.Ff();
                this.loaded || (this.loaded = o, J.load("tile", function () {
                    a.OO()
                }))
            }, Yw: function () {
                for (var a = this.map.la().Hq, b = 0; b < a.length; b++) {
                    var c = new Dc;
                    w.extend(c, a[b]);
                    this.pm.push(c);
                    c.fa(this.map, this.Cn)
                }
                this.gt()
            }, kn: function (a) {
                var b = K("div");
                b.style.position = "absolute";
                b.style.overflow = "visible";
                b.style.left = b.style.top = "0";
                b.style.zIndex = a;
                return b
            }, gf: function () {
                this.$g--;
                var a = this;
                this.ED && (this.map.dispatchEvent(new M("onfirsttileloaded")), this.ED = q);
                0 == this.$g && (this.yi && (clearTimeout(this.yi), this.yi = p), this.yi = setTimeout(function () {
                    if (a.$g == 0) {
                        a.map.dispatchEvent(new M("ontilesloaded"));
                        a.ED = o
                    }
                    a.yi = p
                }, 80))
            }, nD: function (a, b) {
                return "TILE-" + b.Q + "-" + a[0] + "-" + a[1] + "-" + a[2]
            }, Ww: function (a) {
                var b = a.tb;
                b && zb(b) && b.parentNode.removeChild(b);
                delete this.kg[a.name];
                a.loaded || (Ec(a), a.tb = p, a.sm = p)
            }, bm: function (a, b, c) {
                var d = this.map, e = d.la(), f = d.wa, g = d.jc, i = e.Bc(f), k = this.nK(), l = k[0], m = k[1], n = k[2], t = k[3], v = k[4], c = "undefined" != typeof c ? c : 0, e = e.k.Cb, k = d.Q.replace(/^TANGRAM_/, "");
                for (this.Fc ? this.Fc.length = 0 : this.Fc = []; l < n; l++)
                    for (var x = m; x < t; x++) {
                        var y = l, B = x;
                        this.Fc.push([y, B]);
                        y = k + "_" + b + "_" + y + "_" + B + "_" + f;
                        this.yJ[y] = y
                    }
                this.Fc.sort(function (a) {
                    return function (b, c) {
                        return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                    }
                }([v[0] - 1, v[1] - 1]));
                g = [Math.round(-g.lng / i), Math.round(g.lat / i)];
                l = -d.offsetY + d.height / 2;
                a.style.left = -d.offsetX + d.width / 2 + "px";
                a.style.top = l + "px";
                this.xe ? this.xe.length = 0 : this.xe = [];
                l = 0;
                for (d = a.childNodes.length; l < d; l++)
                    x = a.childNodes[l], x.Dq = q, this.xe.push(x);
                if (l = this.vm)
                    for (var A in l)
                        delete l[A];
                else
                    this.vm = {};
                this.ye ? this.ye.length = 0 : this.ye = [];
                l = 0;
                for (d = this.Fc.length; l < d; l++) {
                    A = this.Fc[l][0];
                    i = this.Fc[l][1];
                    x = 0;
                    for (m = this.xe.length; x < m; x++)
                        if (n = this.xe[x], n.id == k + "_" + b + "_" + A + "_" + i + "_" + f) {
                            n.Dq = o;
                            this.vm[n.id] = n;
                            break
                        }
                }
                l = 0;
                for (d = this.xe.length; l < d; l++)
                    n = this.xe[l], n.Dq || this.ye.push(n);
                this.Om = [];
                x = (e + c) * this.map.D.devicePixelRatio;
                l = 0;
                for (d = this.Fc.length; l < d; l++)
                    A = this.Fc[l][0], i = this.Fc[l][1], t = A * e + g[0] - c / 2, v = (-1 - i) * e + g[1] - c / 2, y = k + "_" + b + "_" + A + "_" + i + "_" + f, m = this.vm[y], n = p, m ? (n = m.style, n.left = t + "px", n.top = v + "px", m.Le || this.Om.push([A, i, m])) : (0 < this.ye.length ? (m = this.ye.shift(), m.getContext("2d").clearRect(-c / 2, -c / 2, x, x), n = m.style) : (m = document.createElement("canvas"), n = m.style, n.position = "absolute", n.width = e + c + "px", n.height = e + c + "px", this.dx() && (n.WebkitTransform = "scale(1.001)"), m.setAttribute("width", x), m.setAttribute("height", x), a.appendChild(m)), m.id = y, n.left = t + "px", n.top = v + "px", -1 < y.indexOf("bg") && (t = "#F3F1EC", this.map.D.Zn && (t = this.map.D.Zn), n.background = t ? t : ""), this.Om.push([A, i, m])), m.style.visibility = "";
                l = 0;
                for (d = this.ye.length; l < d; l++)
                    this.ye[l].style.visibility = "hidden";
                return this.Om
            }, dx: function () {
                return /M040/i.test(navigator.userAgent)
            }, nK: function () {
                var a = this.map, b = a.la(), c = b.sD(a.wa), d = a.jc, e = Math.ceil(d.lng / c), f = Math.ceil(d.lat / c), b = b.k.Cb, c = [e, f, (d.lng - e * c) / c * b, (d.lat - f * c) / c * b];
                return [c[0] - Math.ceil((a.width / 2 - c[2]) / b), c[1] - Math.ceil((a.height / 2 - c[3]) / b), c[0] + Math.ceil((a.width / 2 + c[2]) / b), c[1] + Math.ceil((a.height / 2 + c[3]) / b), c]
            }, UY: function (a, b, c, d) {
                var e = this;
                e.b0 = b;
                var f = this.map.la(), g = e.nD(a, c), i = f.k.Cb, b = [a[0] * i + b[0], (-1 - a[1]) * i + b[1]], k = this.kg[g];
                k && k.tb ? (xb(k.tb, b), d && (d = new P(a[0], a[1]), f = this.map.D.ge ? this.map.D.ge.style : "normal", d = c.getTilesUrl(d, a[2], f), k.loaded = q, Fc(k, d)), k.loaded ? this.gf() : Gc(k, function () {
                    e.gf()
                })) : (k = this.Ri[g]) && k.tb ? (c.Db.insertBefore(k.tb, c.Db.lastChild), this.kg[g] = k, xb(k.tb, b), d && (d = new P(a[0], a[1]), f = this.map.D.ge ? this.map.D.ge.style : "normal", d = c.getTilesUrl(d, a[2], f), k.loaded = q, Fc(k, d)), k.loaded ? this.gf() : Gc(k, function () {
                    e.gf()
                })) : (k = i * Math.pow(2, f.Wl() - a[2]), new H(a[0] * k, a[1] * k), d = new P(a[0], a[1]), f = this.map.D.ge ? this.map.D.ge.style : "normal", d = c.getTilesUrl(d, a[2], f), k = new Hc(this, d, b, a, c), Gc(k, function () {
                    e.gf()
                }), k.Bn(), this.kg[g] = k)
            }, gf: function () {
                this.$g--;
                var a = this;
                0 == this.$g && (this.yi && (clearTimeout(this.yi), this.yi = p), this.yi = setTimeout(function () {
                    if (a.$g == 0) {
                        a.map.dispatchEvent(new M("ontilesloaded"));
                        if (ua) {
                            if (ra && sa && ta) {
                                var b = Za(), c = a.map.Lb();
                                setTimeout(function () {
                                    Pa(5030, {
                                        load_script_time: sa - ra,
                                        load_tiles_time: b - ta,
                                        map_width: c.width,
                                        map_height: c.height,
                                        map_size: c.width * c.height
                                    })
                                }, 1E4);
                                va.bc("img_fisrt_loaded");
                                va.bc("map_width", c.width);
                                va.bc("map_height", c.height);
                                va.bc("map_size", c.width * c.height);
                                va.Bm()
                            }
                            ua = q
                        }
                    }
                    a.yi = p
                }, 80))
            }, nD: function (a, b) {
                return this.map.la() === Oa ? "TILE-" + b.Q + "-" + this.map.Xv + "-" + a[0] + "-" + a[1] + "-" + a[2] : "TILE-" + b.Q + "-" + a[0] + "-" + a[1] + "-" + a[2]
            }, Ww: function (a) {
                var b = a.tb;
                b && (Ic(b), zb(b) && b.parentNode.removeChild(b));
                delete this.kg[a.name];
                a.loaded || (Ic(b), Ec(a), a.tb = p, a.sm = p)
            }, Ff: function (a) {
                var b = this;
                if (b.map.la() == Oa)
                    J.load("coordtrans", function () {
                        b.map.Ib || (b.map.Ib = Oa.$j(b.map.eo), b.map.Xv = Oa.lK(b.map.Ib));
                        b.rH()
                    }, o);
                else {
                    if (a && a)
                        for (var c in this.Ri)
                            delete this.Ri[c];
                    b.rH(a)
                }
            }, rH: function (a) {
                for (var b = this.pm.concat(this.If), c = b.length, d = 0; d < c; d++) {
                    var e = b[d];
                    if (e.Ub && l.wa < e.Ub)
                        break;
                    if (e.Rv) {
                        var f = this.Db = e.Db;
                        if (a) {
                            var g = f;
                            if (g && g.childNodes)
                                for (var i = g.childNodes.length, k = i - 1; 0 <= k; k--)
                                    i = g.childNodes[k], g.removeChild(i), i = p
                        }
                        if (this.map.Hb()) {
                            this.Yc.style.display = "block";
                            f.style.display = "none";
                            this.map.dispatchEvent(new M("vectorchanged"), {isvector: o});
                            continue
                        } else
                            f.style.display = "block", this.Yc.style.display = "none", this.map.dispatchEvent(new M("vectorchanged"), {isvector: q})
                    }
                    if (!e.iH && !(e.Oo && !this.map.Hb() || e.iL && this.map.Hb())) {
                        var l = this.map, m = l.la(), f = m.Do(), i = l.wa, n = l.jc;
                        m == Oa && n.$a(new H(0, 0)) && (n = l.jc = f.om(l.Se, l.Ib));
                        var t = m.Bc(i), i = m.sD(i), f = Math.ceil(n.lng / i), g = Math.ceil(n.lat / i), v = m.k.Cb, i = [f, g, (n.lng - f * i) / i * v, (n.lat - g * i) / i * v], k = i[0] - Math.ceil((l.width / 2 - i[2]) / v), f = i[1] - Math.ceil((l.height / 2 - i[3]) / v), g = i[0] + Math.ceil((l.width / 2 + i[2]) / v), x = 0;
                        m === Oa && 15 == l.U() && (x = 1);
                        m = i[1] + Math.ceil((l.height / 2 + i[3]) / v) + x;
                        this.XI = new H(n.lng, n.lat);
                        var y = this.kg, v = -this.XI.lng / t, x = this.XI.lat / t, t = [Math.ceil(v), Math.ceil(x)], n = l.U(), B;
                        for (B in y) {
                            var A = y[B], D = A.info;
                            (D[2] != n || D[2] == n && (k > D[0] || g <= D[0] || f > D[1] || m <= D[1])) && this.Ww(A)
                        }
                        y = -l.offsetX + l.width / 2;
                        A = -l.offsetY + l.height / 2;
                        e.Db && (e.Db.style.left = Math.ceil(v + y) - t[0] + "px", e.Db.style.top = Math.ceil(x + A) - t[1] + "px", e.Db.style.WebkitTransform = "translate3d(0,0,0)");
                        v = [];
                        for (l.dB = []; k < g; k++)
                            for (x = f; x < m; x++)
                                v.push([k, x]), l.dB.push({x: k, y: x});
                        v.sort(function (a) {
                            return function (b, c) {
                                return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                            }
                        }([i[0] - 1, i[1] - 1]));
                        i = v.length;
                        this.$g += i;
                        for (k = 0; k < i; k++)
                            this.UY([v[k][0], v[k][1], n], t, e, a)
                    }
                }
            }, Ig: function (a) {
                var b = this, c = a.target, a = b.map.Hb();
                if (c instanceof bb)
                    a && !c.jm && (c.fa(this.map, this.Yc), c.jm = o);
                else if (c.Jf && this.map.Ig(c.Jf), c.Oo) {
                    for (a = 0; a < b.rg.length; a++)
                        if (b.rg[a] == c)
                            return;
                    J.load("vector", function () {
                        c.fa(b.map, b.Yc);
                        b.rg.push(c)
                    }, o)
                } else {
                    for (a = 0; a < b.If.length; a++)
                        if (b.If[a] == c)
                            return;
                    c.fa(this.map, this.$k);
                    b.If.push(c)
                }
            }, hh: function (a) {
                var a = a.target, b = this.map.Hb();
                if (a instanceof bb)
                    b && a.jm && (a.remove(), a.jm = q);
                else {
                    a.Jf && this.map.hh(a.Jf);
                    if (a.Oo)
                        for (var b = 0, c = this.rg.length; b < c; b++)
                            a == this.rg[b] && this.rg.splice(b, 1);
                    else {
                        b = 0;
                        for (c = this.If.length; b < c; b++)
                            a == this.If[b] && this.If.splice(b, 1)
                    }
                    a.remove()
                }
            }, og: function () {
                for (var a = this.pm, b = 0, c = a.length; b < c; b++)
                    a[b].remove();
                delete this.Db;
                this.pm = [];
                this.Ri = this.kg = {};
                this.Yw();
                this.Ff()
            }, Ac: function () {
                var a = this;
                a.ed && w.B.J(a.ed);
                setTimeout(function () {
                    a.Ff();
                    a.map.dispatchEvent(new M("onzoomend"))
                }, 10)
            }, N2: s(), gt: function (a) {
                var b = this.map.la();
                if (!this.map.Hb() && (a ? this.map.D.bZ = a : a = this.map.D.bZ, a))
                    for (var c = p, c = "2" == z.gy ? [z.url.proto + z.url.domain.main_domain_cdn.other[0] + "/"] : [z.url.proto + z.url.domain.main_domain_cdn.baidu[0] + "/", z.url.proto + z.url.domain.main_domain_cdn.baidu[1] + "/", z.url.proto + z.url.domain.main_domain_cdn.baidu[2] + "/"], d = 0, e; e = this.pm[d]; d++)
                        if (e.QY == o) {
                            b.k.Mb = 18;
                            e.getTilesUrl = function (b, d) {
                                var e = b.x, k = b.y, l = "customimage/tile?&x=" + e + "&y=" + k + "&z=" + d + "&udt=20150601", l = a.styleStr ? l + ("&styles=" + encodeURIComponent(a.styleStr)) : l + ("&customid=" + a.style);
                                return c[Math.abs(e + k) % c.length] + l
                            };
                            break
                        }
            }
        });
        function Hc(a, b, c, d, e) {
            this.sm = a;
            this.position = c;
            this.ou = [];
            this.name = a.nD(d, e);
            this.info = d;
            this.tI = e.Js();
            d = K("img");
            yb(d);
            d.dK = q;
            var f = d.style, a = a.map.la();
            f.position = "absolute";
            f.border = "none";
            f.width = a.k.Cb + "px";
            f.height = a.k.Cb + "px";
            f.left = c[0] + "px";
            f.top = c[1] + "px";
            f.maxWidth = "none";
            this.tb = d;
            this.src = b;
            Jc && (this.tb.style.opacity = 0);
            var g = this;
            this.tb.onload = function () {
                z.kX.yP();
                g.loaded = o;
                if (g.sm) {
                    var a = g.sm, b = a.Ri;
                    if (!b[g.name]) {
                        a.oE++;
                        b[g.name] = g
                    }
                    if (g.tb && !zb(g.tb) && e.Db) {
                        e.Db.appendChild(g.tb);
                        if (w.S.ba <= 6 && w.S.ba > 0 && g.tI)
                            g.tb.style.cssText = g.tb.style.cssText + (';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + g.src + '",sizingMethod=scale);')
                    }
                    var c = a.oE - a.$T, d;
                    for (d in b) {
                        if (c <= 0)
                            break;
                        if (!a.kg[d]) {
                            b[d].sm = p;
                            var f = b[d].tb;
                            if (f && f.parentNode) {
                                f.parentNode.removeChild(f);
                                Ic(f)
                            }
                            f = p;
                            b[d].tb = p;
                            delete b[d];
                            a.oE--;
                            c--
                        }
                    }
                    Jc && new sb({
                        wc: 20, duration: 200, ja: function (a) {
                            if (g.tb && g.tb.style)
                                g.tb.style.opacity = a * 1
                        }, finish: function () {
                            g.tb && g.tb.style && delete g.tb.style.opacity
                        }
                    });
                    Ec(g)
                }
            };
            this.tb.onerror = function () {
                Ec(g);
                if (g.sm) {
                    var a = g.sm.map.la();
                    if (a.k.FC) {
                        g.error = o;
                        g.tb.src = a.k.FC;
                        g.tb && !zb(g.tb) && e.Db.appendChild(g.tb)
                    }
                }
            };
            d = p
        }

        function Gc(a, b) {
            a.ou.push(b)
        }

        Hc.prototype.Bn = function () {
            this.tb.src = 0 < w.S.ba && 6 >= w.S.ba && this.tI ? F.ea + "blank.gif" : "" !== this.src && this.tb.src == this.src ? this.src + "&t = " + Date.now() : this.src
        };
        function Ec(a) {
            for (var b = 0; b < a.ou.length; b++)
                a.ou[b]();
            a.ou.length = 0
        }

        function Ic(a) {
            if (a) {
                a.onload = a.onerror = p;
                var b = a.attributes, c, d, e;
                if (b) {
                    d = b.length;
                    for (c = 0; c < d; c += 1)
                        e = b[c].name, Va(a[e]) && (a[e] = p)
                }
                if (b = a.children) {
                    d = b.length;
                    for (c = 0; c < d; c += 1)
                        Ic(a.children[c])
                }
            }
        }

        function Fc(a, b) {
            a.src = b;
            a.Bn()
        }

        var Jc = !w.S.ba || 8 < w.S.ba;

        function Dc(a) {
            this.ah = a || {};
            this.tU = this.ah.copyright || p;
            this.BZ = this.ah.transparentPng || q;
            this.Rv = this.ah.baseLayer || q;
            this.zIndex = this.ah.zIndex || 0;
            this.Q = Dc.iR++
        }

        Dc.iR = 0;
        w.lang.ia(Dc, w.lang.qa, "TileLayer");
        w.extend(Dc.prototype, {
            fa: function (a, b) {
                this.Rv && (this.zIndex = -100);
                this.map = a;
                if (!this.Db) {
                    var c = K("div"), d = c.style;
                    d.position = "absolute";
                    d.overflow = "visible";
                    d.zIndex = this.zIndex;
                    d.left = Math.ceil(-a.offsetX + a.width / 2) + "px";
                    d.top = Math.ceil(-a.offsetY + a.height / 2) + "px";
                    b.appendChild(c);
                    this.Db = c
                }
            }, remove: function () {
                this.Db && this.Db.parentNode && (this.Db.innerHTML = "", this.Db.parentNode.removeChild(this.Db));
                delete this.Db
            }, Js: u("BZ"), getTilesUrl: function (a, b) {
                var c = "";
                this.ah.tileUrlTemplate && (c = this.ah.tileUrlTemplate.replace(/\{X\}/, a.x), c = c.replace(/\{Y\}/, a.y), c = c.replace(/\{Z\}/, b));
                return c
            }, Ul: u("tU"), la: function () {
                return this.ub || Ma
            }
        });
        function Kc(a, b) {
            Hb(a) ? b = a || {} : (b = b || {}, b.databoxId = a);
            this.k = {
                zJ: b.databoxId,
                Og: b.geotableId,
                Ex: b.q || "",
                Dt: b.tags || "",
                filter: b.filter || "",
                Yx: b.sortby || "",
                $Y: b.styleId || "",
                wl: b.ak || qa,
                Ov: b.age || 36E5,
                zIndex: 11,
                fX: "VectorCloudLayer",
                ik: b.hotspotName || "vector_md_" + (1E5 * Math.random()).toFixed(0),
                GT: "LBS\u4e91\u9ebb\u70b9\u5c42"
            };
            this.Oo = o;
            Dc.call(this, this.k);
            this.LU = z.vc + "geosearch/detail/";
            this.MU = z.vc + "geosearch/v2/detail/";
            this.Ko = {}
        }

        w.ia(Kc, Dc, "VectorCloudLayer");
        function Lc(a) {
            a = a || {};
            this.k = w.extend(a, {zIndex: 1, fX: "VectorTrafficLayer", GT: "\u77e2\u91cf\u8def\u51b5\u5c42"});
            this.Oo = o;
            Dc.call(this, this.k);
            this.xZ = z.url.proto + z.url.domain.vector_traffic + "/gvd/?qt=lgvd&styles=pl&layers=tf";
            this.pb = {
                "0": [2, 1354709503, 2, 2, 0, [], 0, 0],
                1: [2, 1354709503, 3, 2, 0, [], 0, 0],
                10: [2, -231722753, 2, 2, 0, [], 0, 0],
                11: [2, -231722753, 3, 2, 0, [], 0, 0],
                12: [2, -231722753, 4, 2, 0, [], 0, 0],
                13: [2, -231722753, 5, 2, 0, [], 0, 0],
                14: [2, -231722753, 6, 2, 0, [], 0, 0],
                15: [2, -1, 4, 0, 0, [], 0, 0],
                16: [2, -1, 5.5, 0, 0, [], 0, 0],
                17: [2, -1, 7, 0, 0, [], 0, 0],
                18: [2, -1, 8.5, 0, 0, [], 0, 0],
                19: [2, -1, 10, 0, 0, [], 0, 0],
                2: [2, 1354709503, 4, 2, 0, [], 0, 0],
                3: [2, 1354709503, 5, 2, 0, [], 0, 0],
                4: [2, 1354709503, 6, 2, 0, [], 0, 0],
                5: [2, -6350337, 2, 2, 0, [], 0, 0],
                6: [2, -6350337, 3, 2, 0, [], 0, 0],
                7: [2, -6350337, 4, 2, 0, [], 0, 0],
                8: [2, -6350337, 5, 2, 0, [], 0, 0],
                9: [2, -6350337, 6, 2, 0, [], 0, 0]
            }
        }

        w.ia(Lc, Dc, "VectorTrafficLayer");
        function bb(a) {
            this.aU = [z.url.proto + z.url.domain.TILE_ONLINE_URLS[1] + "/gvd/?", z.url.proto + z.url.domain.TILE_ONLINE_URLS[2] + "/gvd/?", z.url.proto + z.url.domain.TILE_ONLINE_URLS[3] + "/gvd/?", z.url.proto + z.url.domain.TILE_ONLINE_URLS[4] + "/gvd/?"];
            this.k = {$J: q};
            for (var b in a)
                this.k[b] = a[b];
            this.Ih = this.qh = this.La = this.A = this.C = p;
            this.oL = 0;
            var c = this;
            J.load("vector", function () {
                c.ff()
            })
        }

        w.extend(bb.prototype, {
            fa: function (a, b) {
                this.C = a;
                this.A = b
            }, remove: function () {
                this.A = this.C = p
            }
        });
        function Mc(a) {
            Dc.call(this, a);
            this.k = a || {};
            this.iL = o;
            this.Jf = new Lc;
            this.Jf.ey = this;
            if (this.k.predictDate) {
                if (1 > this.k.predictDate.weekday || 7 < this.k.predictDate.weekday)
                    this.k.predictDate = 1;
                if (0 > this.k.predictDate.hour || 23 < this.k.predictDate.hour)
                    this.k.predictDate.hour = 0
            }
            this.lT = z.url.proto + z.url.domain.traffic + ":8002/traffic/"
        }

        Mc.prototype = new Dc;
        Mc.prototype.fa = function (a, b) {
            Dc.prototype.fa.call(this, a, b);
            this.C = a
        };
        Mc.prototype.Js = da(o);
        Mc.prototype.getTilesUrl = function (a, b) {
            var c = "";
            this.k.predictDate ? c = "HistoryService?day=" + (this.k.predictDate.weekday - 1) + "&hour=" + this.k.predictDate.hour + "&t=" + (new Date).getTime() + "&" : (c = "TrafficTileService?time=" + (new Date).getTime() + "&", c += "label=web2D&v=016&");
            return (this.lT + c + "level=" + b + "&x=" + a.x + "&y=" + a.y).replace(/-(\d+)/gi, "M$1")
        };
        var Nc = [z.url.proto + z.url.domain.TILES_YUN_HOST[0] + "/georender/gss", z.url.proto + z.url.domain.TILES_YUN_HOST[1] + "/georender/gss", z.url.proto + z.url.domain.TILES_YUN_HOST[2] + "/georender/gss", z.url.proto + z.url.domain.TILES_YUN_HOST[3] + "/georender/gss"], Oc = 100;

        function mb(a, b) {
            Dc.call(this);
            var c = this;
            this.iL = o;
            var d = q;
            try {
                document.createElement("canvas").getContext("2d"), d = o
            } catch (e) {
                d = q
            }
            d && (this.Jf = new Kc(a, b), this.Jf.ey = this);
            Hb(a) ? b = a || {} : (c.fq = a, b = b || {});
            b.geotableId && (c.Qf = b.geotableId);
            b.databoxId && (c.fq = b.databoxId);
            d = z.vc + "geosearch";
            c.pc = {
                pM: b.pointDensity || Oc,
                GW: d + "/detail/",
                HW: d + "/v2/detail/",
                Ov: b.age || 36E5,
                Ex: b.q || "",
                kZ: "png",
                m1: [5, 5, 5, 5],
                eX: {backgroundColor: "#FFFFD5", borderColor: "#808080"},
                wl: b.ak || qa,
                Dt: b.tags || "",
                filter: b.filter || "",
                Yx: b.sortby || "",
                ik: b.hotspotName || "tile_md_" + (1E5 * Math.random()).toFixed(0)
            };
            J.load("clayer", function () {
                c.Bd()
            })
        }

        mb.prototype = new Dc;
        mb.prototype.fa = function (a, b) {
            Dc.prototype.fa.call(this, a, b);
            this.C = a
        };
        mb.prototype.getTilesUrl = function (a, b) {
            var c = a.x, d = a.y, e = this.pc, c = Nc[Math.abs(c + d) % Nc.length] + "/image?grids=" + c + "_" + d + "_" + b + "&q=" + e.Ex + "&tags=" + e.Dt + "&filter=" + e.filter + "&sortby=" + e.Yx + "&ak=" + this.pc.wl + "&age=" + e.Ov + "&page_size=" + e.pM + "&format=" + e.kZ;
            this.Qf ? c += "&geotable_id=" + this.Qf : this.fq && (c += "&databox_id=" + this.fq);
            return c
        };
        mb.JS = /^point\(|\)$/ig;
        mb.KS = /\s+/;
        mb.MS = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        function Pc(a, b, c) {
            this.Oe = a;
            this.Hq = b instanceof Dc ? [b] : b.slice(0);
            c = c || {};
            this.k = {
                lZ: c.tips || "",
                PD: "",
                Ub: c.minZoom || 3,
                Mb: c.maxZoom || 18,
                l1: c.minZoom || 3,
                k1: c.maxZoom || 18,
                Cb: 256,
                jZ: c.textColor || "black",
                FC: c.errorImageUrl || "",
                je: c.projection || new Q
            };
            1 <= this.Hq.length && (this.Hq[0].Rv = o);
            w.extend(this.k, c)
        }

        w.extend(Pc.prototype, {
            getName: u("Oe"), ws: function () {
                return this.k.lZ
            }, S0: function () {
                return this.k.PD
            }, rW: function () {
                return this.Hq[0]
            }, e1: u("Hq"), sW: function () {
                return this.k.Cb
            }, yo: function () {
                return this.k.Ub
            }, Wl: function () {
                return this.k.Mb
            }, setMaxZoom: function (a) {
                this.k.Mb = a
            }, vs: function () {
                return this.k.jZ
            }, Do: function () {
                return this.k.je
            }, N0: function () {
                return this.k.FC
            }, sW: function () {
                return this.k.Cb
            }, Bc: function (a) {
                return Math.pow(2, 18 - a)
            }, sD: function (a) {
                return this.Bc(a) * this.k.Cb
            }
        });
        var Qc = [z.url.proto + z.url.domain.TILE_BASE_URLS[0] + "/it/", z.url.proto + z.url.domain.TILE_BASE_URLS[1] + "/it/", z.url.proto + z.url.domain.TILE_BASE_URLS[2] + "/it/", z.url.proto + z.url.domain.TILE_BASE_URLS[3] + "/it/", z.url.proto + z.url.domain.TILE_BASE_URLS[4] + "/it/"], Rc = [z.url.proto + z.url.domain.TILE_ONLINE_URLS[0] + "/tile/", z.url.proto + z.url.domain.TILE_ONLINE_URLS[1] + "/tile/", z.url.proto + z.url.domain.TILE_ONLINE_URLS[2] + "/tile/", z.url.proto + z.url.domain.TILE_ONLINE_URLS[3] + "/tile/", z.url.proto + z.url.domain.TILE_ONLINE_URLS[4] + "/tile/"], Sc = {
            dark: "dl",
            light: "ll",
            normal: "pl"
        }, Tc = new Dc;
        Tc.QY = o;
        Tc.getTilesUrl = function (a, b, c) {
            var d = a.x, a = a.y, e = 1, c = Sc[c];
            this.map.NK() && (e = 2);
            return (Rc[Math.abs(d + a) % Rc.length] + "?qt=tile&x=" + (d + "").replace(/-/gi, "M") + "&y=" + (a + "").replace(/-/gi, "M") + "&z=" + b + "&styles=" + c + "&scaler=" + e + (6 == w.S.ba ? "&color_dep=32&colors=50" : "") + "&udt=20150528").replace(/-(\d+)/gi, "M$1")
        };
        var Ma = new Pc("\u5730\u56fe", Tc, {tips: "\u663e\u793a\u666e\u901a\u5730\u56fe", maxZoom: 19}), Uc = new Dc;
        Uc.iN = [z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[0] + "/resource/mappic/", z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[1] + "/resource/mappic/", z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[2] + "/resource/mappic/", z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[3] + "/resource/mappic/"];
        Uc.getTilesUrl = function (a, b) {
            var c = a.x, d = a.y, e = 256 * Math.pow(2, 20 - b), d = Math.round((9998336 - e * d) / e) - 1;
            return url = this.iN[Math.abs(c + d) % this.iN.length] + this.map.Ib + "/" + this.map.Xv + "/3/lv" + (21 - b) + "/" + c + "," + d + ".jpg"
        };
        var Oa = new Pc("\u4e09\u7ef4", Uc, {
            tips: "\u663e\u793a\u4e09\u7ef4\u5730\u56fe",
            minZoom: 15,
            maxZoom: 20,
            textColor: "white",
            projection: new fb
        });
        Oa.Bc = function (a) {
            return Math.pow(2, 20 - a)
        };
        Oa.$j = function (a) {
            if (!a)
                return "";
            var b = F.yB, c;
            for (c in b)
                if (-1 < a.search(c))
                    return b[c].Cx;
            return ""
        };
        Oa.lK = function (a) {
            return {bj: 2, gz: 1, sz: 14, sh: 4}[a]
        };
        var Vc = new Dc({Rv: o});
        Vc.getTilesUrl = function (a, b) {
            var c = a.x, d = a.y;
            return (Qc[Math.abs(c + d) % Qc.length] + "u=x=" + c + ";y=" + d + ";z=" + b + ";v=009;type=sate&fm=46&udt=20141015").replace(/-(\d+)/gi, "M$1")
        };
        var Wa = new Pc("\u536b\u661f", Vc, {
            tips: "\u663e\u793a\u536b\u661f\u5f71\u50cf",
            minZoom: 1,
            maxZoom: 19,
            textColor: "white"
        }), Wc = new Dc({transparentPng: o});
        Wc.getTilesUrl = function (a, b) {
            var c = a.x, d = a.y;
            return (Rc[Math.abs(c + d) % Rc.length] + "?qt=tile&x=" + (c + "").replace(/-/gi, "M") + "&y=" + (d + "").replace(/-/gi, "M") + "&z=" + b + "&styles=sl" + (6 == w.S.ba ? "&color_dep=32&colors=50" : "") + "&udt=20141015").replace(/-(\d+)/gi, "M$1")
        };
        var Qa = new Pc("\u6df7\u5408", [Vc, Wc], {
            tips: "\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf",
            labelText: "\u8def\u7f51",
            minZoom: 1,
            maxZoom: 19,
            textColor: "white"
        });
        var Xc = 1, T = {};
        window.ZZ = T;
        function U(a, b) {
            w.lang.qa.call(this);
            this.kd = {};
            this.Im(a);
            b = b || {};
            b.aa = b.renderOptions || {};
            this.k = {
                aa: {
                    va: b.aa.panel || p,
                    map: b.aa.map || p,
                    Jg: b.aa.autoViewport || o,
                    at: b.aa.selectFirstResult,
                    As: b.aa.highlightMode,
                    Sb: b.aa.enableDragging || q
                },
                vx: b.onSearchComplete || s(),
                bM: b.onMarkersSet || s(),
                aM: b.onInfoHtmlSet || s(),
                dM: b.onResultsHtmlSet || s(),
                $L: b.onGetBusListComplete || s(),
                ZL: b.onGetBusLineComplete || s(),
                XL: b.onBusListHtmlSet || s(),
                WL: b.onBusLineHtmlSet || s(),
                bE: b.onPolylinesSet || s(),
                $o: b.reqFrom || ""
            };
            this.k.aa.Jg = "undefined" != typeof b && "undefined" != typeof b.renderOptions && "undefined" != typeof b.renderOptions.autoViewport ? b.renderOptions.autoViewport : o;
            this.k.aa.va = w.rc(this.k.aa.va)
        }

        w.ia(U, w.lang.qa);
        w.extend(U.prototype, {
            getResults: function () {
                return this.uc ? this.vi : this.$
            }, enableAutoViewport: function () {
                this.k.aa.Jg = o
            }, disableAutoViewport: function () {
                this.k.aa.Jg = q
            }, Im: function (a) {
                a && (this.kd.src = a)
            }, IE: function (a) {
                this.k.vx = a || s()
            }, setMarkersSetCallback: function (a) {
                this.k.bM = a || s()
            }, setPolylinesSetCallback: function (a) {
                this.k.bE = a || s()
            }, setInfoHtmlSetCallback: function (a) {
                this.k.aM = a || s()
            }, setResultsHtmlSetCallback: function (a) {
                this.k.dM = a || s()
            }, $l: u("md")
        });
        var Yc = {
            EF: z.vc, fb: function (a, b, c, d, e) {
                var f = (1E5 * Math.random()).toFixed(0);
                z._rd["_cbk" + f] = function (b) {
                    c = c || {};
                    a && a(b, c);
                    delete z._rd["_cbk" + f]
                };
                d = d || "";
                b = c && c.BN ? Fb(b, encodeURI) : Fb(b, encodeURIComponent);
                this.EF = c && c.bs ? c.zM ? c.zM : z.Ro : z.vc;
                d = this.EF + d + "?" + b + "&ie=utf-8&oue=1&fromproduct=jsapi";
                e || (d += "&res=api");
                Qb(d + ("&callback=BMap._rd._cbk" + f))
            }
        };
        window.f_ = Yc;
        z._rd = {};
        var O = {};
        window.e_ = O;
        O.vM = function (a) {
            a = a.replace(/<\/?[^>]*>/g, "");
            return a = a.replace(/[ | ]* /g, " ")
        };
        O.LX = function (a) {
            return a.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;")
        };
        O.MX = function (a, b) {
            return a.replace(RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + b + "}", "ig"), "$1")
        };
        var Zc = 2, $c = 3, ad = 0, bd = "bt", cd = "nav", dd = "walk", ed = "bl", fd = "bsl", gd = 14, hd = 15, id = 18, jd = 20, kd = 31;
        z.I = window.Instance = w.lang.Od;
        function ld(a, b, c) {
            w.lang.qa.call(this);
            if (a) {
                this.Ja = "object" == typeof a ? a : w.rc(a);
                this.page = 1;
                this.sd = 100;
                this.YI = "pg";
                this.Gf = 4;
                this.cJ = b;
                this.update = o;
                a = {page: 1, Ie: 100, sd: 100, Gf: 4, YI: "pg", update: o};
                c || (c = a);
                for (var d in c)
                    "undefined" != typeof c[d] && (this[d] = c[d]);
                this.ja()
            }
        }

        w.extend(ld.prototype, {
            ja: function () {
                this.fa()
            }, fa: function () {
                this.fU();
                this.Ja.innerHTML = this.BU()
            }, fU: function () {
                isNaN(parseInt(this.page)) && (this.page = 1);
                isNaN(parseInt(this.sd)) && (this.sd = 1);
                1 > this.page && (this.page = 1);
                1 > this.sd && (this.sd = 1);
                this.page > this.sd && (this.page = this.sd);
                this.page = parseInt(this.page);
                this.sd = parseInt(this.sd)
            }, W0: function () {
                location.search.match(RegExp("[?&]?" + this.YI + "=([^&]*)[&$]?", "gi"));
                this.page = RegExp.$1
            }, BU: function () {
                var a = [], b = this.page - 1, c = this.page + 1;
                a.push('<p style="margin:0;padding:0;white-space:nowrap">');
                if (!(1 > b)) {
                    if (this.page >= this.Gf) {
                        var d;
                        a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">\u9996\u9875</a></span>'.replace("{temp1}", "BMap.I('" + this.Q + "').toPage(1);"))
                    }
                    a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">\u4e0a\u4e00\u9875</a></span>'.replace("{temp2}", "BMap.I('" + this.Q + "').toPage(" + b + ");"))
                }
                if (this.page < this.Gf)
                    d = 0 == this.page % this.Gf ? this.page - this.Gf - 1 : this.page - this.page % this.Gf + 1, b = d + this.Gf - 1;
                else {
                    d = Math.floor(this.Gf / 2);
                    var e = this.Gf % 2 - 1, b = this.sd > this.page + d ? this.page + d : this.sd;
                    d = this.page - d - e
                }
                this.page > this.sd - this.Gf && this.page >= this.Gf && (d = this.sd - this.Gf + 1, b = this.sd);
                for (e = d; e <= b; e++)
                    0 < e && (e == this.page ? a.push('<span style="margin-right:3px">' + e + "</span>") : 1 <= e && e <= this.sd && (d = '<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[' + e + "]</a></span>", a.push(d.replace("{temp3}", "BMap.I('" + this.Q + "').toPage(" + e + ");"))));
                c > this.sd || a.push('<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">\u4e0b\u4e00\u9875</a></span>'.replace("{temp4}", "BMap.I('" + this.Q + "').toPage(" + c + ");"));
                a.push("</p>");
                return a.join("")
            }, toPage: function (a) {
                a = a ? a : 1;
                "function" == typeof this.cJ && (this.cJ(a), this.page = a);
                this.update && this.ja()
            }
        });
        function $a(a, b) {
            U.call(this, a, b);
            b = b || {};
            b.renderOptions = b.renderOptions || {};
            this.lp(b.pageCapacity);
            "undefined" != typeof b.renderOptions.selectFirstResult && !b.renderOptions.selectFirstResult ? this.dC() : this.AC();
            this.ka = [];
            this.ef = [];
            this.Xa = -1;
            this.Da = [];
            var c = this;
            J.load("local", function () {
                c.Uy()
            }, o)
        }

        w.ia($a, U, "LocalSearch");
        $a.Cp = 10;
        $a.c_ = 1;
        $a.Ym = 100;
        $a.tF = 2E3;
        $a.BF = 1E5;
        w.extend($a.prototype, {
            search: function (a, b) {
                this.Da.push({method: "search", arguments: [a, b]})
            }, Fm: function (a, b, c) {
                this.Da.push({method: "searchInBounds", arguments: [a, b, c]})
            }, gp: function (a, b, c, d) {
                this.Da.push({method: "searchNearby", arguments: [a, b, c, d]})
            }, ze: function () {
                delete this.ta;
                delete this.md;
                delete this.$;
                delete this.T;
                this.Xa = -1;
                this.gb();
                this.k.aa.va && (this.k.aa.va.innerHTML = "")
            }, dm: s(), AC: function () {
                this.k.aa.at = o
            }, dC: function () {
                this.k.aa.at = q
            }, lp: function (a) {
                this.k.mk = "number" == typeof a && !isNaN(a) ? 1 > a ? $a.Cp : a > $a.Ym ? $a.Cp : a : $a.Cp
            }, Xe: function () {
                return this.k.mk
            }, toString: da("LocalSearch")
        });
        var md = $a.prototype;
        R(md, {
            clearResults: md.ze,
            setPageCapacity: md.lp,
            getPageCapacity: md.Xe,
            gotoPage: md.dm,
            searchNearby: md.gp,
            searchInBounds: md.Fm,
            search: md.search,
            enableFirstResultSelection: md.AC,
            disableFirstResultSelection: md.dC
        });
        function nd(a, b) {
            U.call(this, a, b)
        }

        w.ia(nd, U, "BaseRoute");
        w.extend(nd.prototype, {ze: s()});
        function od(a, b) {
            U.call(this, a, b);
            b = b || {};
            this.jt(b.policy);
            this.lp(b.pageCapacity);
            this.fd = bd;
            this.Zt = gd;
            this.$t = Xc;
            this.ka = [];
            this.Xa = -1;
            this.k.Tc = b.enableTraffic || q;
            this.Da = [];
            var c = this;
            J.load("route", function () {
                c.Bd()
            })
        }

        od.Ym = 100;
        od.fO = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
        w.ia(od, nd, "TransitRoute");
        w.extend(od.prototype, {
            jt: function (a) {
                this.k.Pc = 0 <= a && 4 >= a ? a : 0
            }, Wz: function (a, b) {
                this.Da.push({method: "_internalSearch", arguments: [a, b]})
            }, search: function (a, b) {
                this.Da.push({method: "search", arguments: [a, b]})
            }, lp: function (a) {
                if ("string" === typeof a && (a = parseInt(a, 10), isNaN(a))) {
                    this.k.mk = od.Ym;
                    return
                }
                this.k.mk = "number" !== typeof a ? od.Ym : 1 <= a && a <= od.Ym ? Math.round(a) : od.Ym
            }, toString: da("TransitRoute"), YS: function (a) {
                return a.replace(/\(.*\)/, "")
            }
        });
        var pd = od.prototype;
        R(pd, {_internalSearch: pd.Wz});
        function qd(a, b) {
            U.call(this, a, b);
            this.ka = [];
            this.Xa = -1;
            this.Da = [];
            var c = this, d = this.k.aa;
            1 !== d.As && 2 !== d.As && (d.As = 1);
            this.oz = this.k.aa.Sb ? o : q;
            J.load("route", function () {
                c.Bd()
            });
            this.BD && this.BD()
        }

        qd.sO = " \u73af\u5c9b \u65e0\u5c5e\u6027\u9053\u8def \u4e3b\u8def \u9ad8\u901f\u8fde\u63a5\u8def \u4ea4\u53c9\u70b9\u5185\u8def\u6bb5 \u8fde\u63a5\u9053\u8def \u505c\u8f66\u573a\u5185\u90e8\u9053\u8def \u670d\u52a1\u533a\u5185\u90e8\u9053\u8def \u6865 \u6b65\u884c\u8857 \u8f85\u8def \u531d\u9053 \u5168\u5c01\u95ed\u9053\u8def \u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df POI\u8fde\u63a5\u8def \u96a7\u9053 \u6b65\u884c\u9053 \u516c\u4ea4\u4e13\u7528\u9053 \u63d0\u524d\u53f3\u8f6c\u9053".split(" ");
        w.ia(qd, nd, "DWRoute");
        w.extend(qd.prototype, {
            search: function (a, b, c) {
                this.Da.push({method: "search", arguments: [a, b, c]})
            }
        });
        function rd(a, b) {
            qd.call(this, a, b);
            b = b || {};
            this.k.Tc = b.enableTraffic || q;
            this.jt(b.policy);
            this.fd = cd;
            this.Zt = jd;
            this.$t = $c
        }

        w.ia(rd, qd, "DrivingRoute");
        rd.prototype.jt = function (a) {
            this.k.Pc = 0 <= a && 2 >= a ? a : 0
        };
        function sd(a, b) {
            qd.call(this, a, b);
            this.fd = dd;
            this.Zt = kd;
            this.$t = Zc;
            this.oz = q
        }

        w.ia(sd, qd, "WalkingRoute");
        function ud(a, b) {
            w.lang.qa.call(this);
            this.Ef = [];
            this.ym = [];
            this.k = b;
            this.Tb = a;
            this.map = this.k.aa.map || p;
            this.Lx = this.k.Lx;
            this.kb = p;
            this.Si = 0;
            this.Zx = "";
            this.Md = 1;
            this.ww = "";
            this.ap = [0, 0, 0, 0, 0, 0, 0];
            this.RD = [];
            this.Gr = [1, 1, 1, 1, 1, 1, 1];
            this.qN = [1, 1, 1, 1, 1, 1, 1];
            this.Zs = [0, 0, 0, 0, 0, 0, 0];
            this.bp = [0, 0, 0, 0, 0, 0, 0];
            this.Ca = [{o: "", wf: 0, Qm: 0, x: 0, y: 0, oc: -1}, {o: "", wf: 0, Qm: 0, x: 0, y: 0, oc: -1}, {
                    o: "",
                    wf: 0,
                    Qm: 0,
                    x: 0,
                    y: 0,
                    oc: -1
                }, {o: "", wf: 0, Qm: 0, x: 0, y: 0, oc: -1}, {o: "", wf: 0, Qm: 0, x: 0, y: 0, oc: -1}, {
                    o: "",
                    wf: 0,
                    Qm: 0,
                    x: 0,
                    y: 0,
                    oc: -1
                }, {o: "", wf: 0, Qm: 0, x: 0, y: 0, oc: -1}];
            this.Ph = -1;
            this.Ft = [];
            this.Gt = [];
            J.load("route", s())
        }

        w.lang.ia(ud, w.lang.qa, "RouteAddr");
        var vd = navigator.userAgent;
        /ipad|iphone|ipod|iph/i.test(vd);
        var wd = /android/i.test(vd);

        function xd(a) {
            this.ah = a || {}
        }

        w.extend(xd.prototype, {
            FM: function (a, b, c) {
                var d = this;
                J.load("route", function () {
                    d.Bd(a, b, c)
                })
            }
        });
        function yd(a) {
            this.k = {};
            w.extend(this.k, a);
            this.Da = [];
            var b = this;
            J.load("othersearch", function () {
                b.Bd()
            })
        }

        w.ia(yd, w.lang.qa, "Geocoder");
        w.extend(yd.prototype, {
            Zl: function (a, b, c) {
                this.Da.push({method: "getPoint", arguments: [a, b, c]})
            }, ls: function (a, b, c) {
                this.Da.push({method: "getLocation", arguments: [a, b, c]})
            }, toString: da("Geocoder")
        });
        var zd = yd.prototype;
        R(zd, {getPoint: zd.Zl, getLocation: zd.ls});
        function Geolocation(a) {
            a = a || {};
            this.D = {timeout: a.timeout || 1E4, maximumAge: a.maximumAge || 6E5};
            this.$d = [];
            var b = this;
            J.load("othersearch", function () {
                for (var a = 0, d; d = b.$d[a]; a++)
                    b[d.method].apply(b, d.arguments)
            })
        }

        w.extend(Geolocation.prototype, {
            getCurrentPosition: function (a, b) {
                this.$d.push({method: "getCurrentPosition", arguments: arguments})
            }, getStatus: da(2)
        });
        function Ad(a) {
            a = a || {};
            a.aa = a.renderOptions || {};
            this.k = {aa: {map: a.aa.map || p}};
            this.Da = [];
            var b = this;
            J.load("othersearch", function () {
                b.Bd()
            })
        }

        w.ia(Ad, w.lang.qa, "LocalCity");
        w.extend(Ad.prototype, {
            get: function (a) {
                this.Da.push({method: "get", arguments: [a]})
            }, toString: da("LocalCity")
        });
        function Bd() {
            this.Da = [];
            var a = this;
            J.load("othersearch", function () {
                a.Bd()
            })
        }

        w.ia(Bd, w.lang.qa, "Boundary");
        w.extend(Bd.prototype, {
            get: function (a, b) {
                this.Da.push({method: "get", arguments: [a, b]})
            }, toString: da("Boundary")
        });
        function Cd(a, b) {
            U.call(this, a, b);
            this.pO = ed;
            this.rO = hd;
            this.oO = fd;
            this.qO = id;
            this.Da = [];
            var c = this;
            J.load("buslinesearch", function () {
                c.Bd()
            })
        }

        Cd.Ku = F.ea + "iw_plus.gif";
        Cd.oR = F.ea + "iw_minus.gif";
        Cd.hT = F.ea + "stop_icon.png";
        w.ia(Cd, U);
        w.extend(Cd.prototype, {
            getBusList: function (a) {
                this.Da.push({method: "getBusList", arguments: [a]})
            }, getBusLine: function (a) {
                this.Da.push({method: "getBusLine", arguments: [a]})
            }, setGetBusListCompleteCallback: function (a) {
                this.k.$L = a || s()
            }, setGetBusLineCompleteCallback: function (a) {
                this.k.ZL = a || s()
            }, setBusListHtmlSetCallback: function (a) {
                this.k.XL = a || s()
            }, setBusLineHtmlSetCallback: function (a) {
                this.k.WL = a || s()
            }, setPolylinesSetCallback: function (a) {
                this.k.bE = a || s()
            }
        });
        function Dd(a) {
            U.call(this, a);
            a = a || {};
            this.pc = {input: a.input || p, oB: a.baseDom || p, types: a.types || [], vx: a.onSearchComplete || s()};
            this.kd.src = a.location || "\u5168\u56fd";
            this.Oi = "";
            this.$f = p;
            this.eH = "";
            this.Di();
            Pa(Ja);
            var b = this;
            J.load("autocomplete", function () {
                b.Bd()
            })
        }

        w.ia(Dd, U, "Autocomplete");
        w.extend(Dd.prototype, {
            Di: s(), show: s(), J: s(), JE: function (a) {
                this.pc.types = a
            }, Im: function (a) {
                this.kd.src = a
            }, search: ba("Oi"), Ox: ba("eH")
        });
        var Ra;

        function Na(a, b) {
            function c() {
                e.k.visible ? ("inter" === e.Pe && e.k.indoorExitControl === o ? w.B.show(e.Pz) : w.B.J(e.Pz), e.k.closeControl ? w.B.show(e.Ai) : w.B.J(e.Ai)) : (w.B.J(e.Ai), w.B.J(e.Pz))
            }

            this.A = "string" == typeof a ? w.N(a) : a;
            this.k = {
                enableScrollWheelZoom: o,
                panoramaRenderer: "flash",
                swfSrc: z.hg("main_domain_nocdn", "res/swf/") + "APILoader.swf",
                visible: o,
                indoorExitControl: o,
                indoorFloorControl: q,
                linksControl: o,
                clickOnRoad: o,
                navigationControl: o,
                closeControl: o,
                indoorSceneSwitchControl: o,
                albumsControl: q,
                albumsControlOptions: {},
                copyrightControlOptions: {}
            };
            var b = b || {}, d;
            for (d in b)
                this.k[d] = b[d];
            this.za = {heading: 0, pitch: 0};
            this.An = [];
            this.xb = this.Na = p;
            this.br = this.Bj();
            this.ka = [];
            this.Ac = 1;
            this.Pe = this.MR = this.Ik = "";
            this.se = {};
            this.uf = p;
            this.Bg = [];
            this.Sq = [];
            this.Wq = q;
            var e = this;
            this.Bn = function () {
                "flashRender" === this.Bj() ? J.load("panoramaflash", function () {
                    e.Di()
                }, o) : J.load("panorama", function () {
                    e.rb()
                }, o);
                "api" == b.zf ? Pa(Fa) : Pa(Ga);
                this.Bn = s()
            };
            this.k.zR !== o && this.Bn();
            this.qS(this.A);
            this.addEventListener("id_changed", function () {
                Pa(Ea, {from: b.zf})
            });
            this.JO();
            this.addEventListener("indoorexit_options_changed", c);
            this.addEventListener("scene_type_changed", c);
            this.addEventListener("onclose_options_changed", c);
            this.addEventListener("onvisible_changed", c)
        }

        var Ed = 4, Fd = 1;
        w.lang.ia(Na, w.lang.qa, "Panorama");
        w.extend(Na.prototype, {
            JO: function () {
                var a = this, b = this.Ai = K("div");
                b.className = "pano_close";
                b.style.cssText = "z-index: 1201;display: none";
                b.title = "\u9000\u51fa\u5168\u666f";
                b.onclick = function () {
                    a.J()
                };
                this.A.appendChild(b);
                var c = this.Pz = K("a");
                c.className = "pano_pc_indoor_exit";
                c.style.cssText = "z-index: 1201;display: none";
                c.innerHTML = '<span style="float:right;margin-right:12px;">\u51fa\u53e3</span>';
                c.title = "\u9000\u51fa\u5ba4\u5185\u666f";
                c.onclick = function () {
                    a.ro()
                };
                this.A.appendChild(c);
                window.ActiveXObject && !document.addEventListener && (b.style.backgroundColor = "rgb(37,37,37)", c.style.backgroundColor = "rgb(37,37,37)")
            },
            ro: s(),
            qS: function (a) {
                var b, c;
                b = a.style;
                c = Ta(a).position;
                "absolute" != c && "relative" != c && (b.position = "relative", b.zIndex = 0);
                if ("absolute" === c || "relative" === c)
                    if (a = Ta(a).zIndex, !a || "auto" === a)
                        b.zIndex = 0
            },
            RV: u("An"),
            Kb: u("Na"),
            tW: u("sv"),
            UM: u("sv"),
            V: u("xb"),
            sa: u("za"),
            U: u("Ac"),
            Pg: u("Ik"),
            Y0: function () {
                return this.E_ || []
            },
            U0: u("MR"),
            ts: u("Pe"),
            Qx: function (a) {
                a !== this.Pe && (this.Pe = a, this.dispatchEvent(new M("onscene_type_changed")))
            },
            cc: function (a, b, c) {
                "object" === typeof b && (c = b, b = j);
                a != this.Na && (this.Tk = this.Na, this.Uk = this.xb, this.Na = a, this.Pe = b || "street", this.xb = p, c && c.pov && this.ud(c.pov))
            },
            ha: function (a) {
                a.$a(this.xb) || (this.Tk = this.Na, this.Uk = this.xb, this.xb = a, this.Na = p)
            },
            ud: function (a) {
                a && (this.za = a, a = this.za.pitch, "cvsRender" == this.Bj() || Gd() ? (90 < a && (a = 90), -90 > a && (a = -90)) : "cssRender" == this.Bj() && (45 < a && (a = 45), -45 > a && (a = -45)), this.Wq = o, this.za.pitch = a)
            },
            Cc: function (a) {
                a != this.Ac && (a > Ed && (a = Ed), a < Fd && (a = Fd), a != this.Ac && (this.Ac = a))
            },
            OA: function () {
                if (this.C)
                    for (var a = this.C.Lw(), b = 0; b < a.length; b++)
                        (a[b]instanceof S || a[b]instanceof qc) && a[b].point && this.ka.push(a[b])
            },
            FE: ba("C"),
            it: function (a) {
                this.uf = a || "none"
            },
            kp: function (a) {
                for (var b in a) {
                    if ("object" == typeof a[b])
                        for (var c in a[b])
                            this.k[b][c] = a[b][c];
                    else
                        this.k[b] = a[b];
                    switch (b) {
                        case "linksControl":
                            this.dispatchEvent(new M("onlinks_visible_changed"));
                            break;
                        case "clickOnRoad":
                            this.dispatchEvent(new M("onclickonroad_changed"));
                            break;
                        case "navigationControl":
                            this.dispatchEvent(new M("onnavigation_visible_changed"));
                            break;
                        case "indoorSceneSwitchControl":
                            this.dispatchEvent(new M("onindoor_default_switch_mode_changed"));
                            break;
                        case "albumsControl":
                            this.dispatchEvent(new M("onalbums_visible_changed"));
                            break;
                        case "albumsControlOptions":
                            this.dispatchEvent(new M("onalbums_options_changed"));
                            break;
                        case "copyrightControlOptions":
                            this.dispatchEvent(new M("oncopyright_options_changed"));
                            break;
                        case "closeControl":
                            this.dispatchEvent(new M("onclose_options_changed"));
                            break;
                        case "indoorExitControl":
                            this.dispatchEvent(new M("onindoorexit_options_changed"));
                            break;
                        case "indoorFloorControl":
                            this.dispatchEvent(new M("onindoorfloor_options_changed"))
                    }
                }
            },
            hk: function () {
                this.bl.style.visibility = "hidden"
            },
            Ux: function () {
                this.bl.style.visibility = "visible"
            },
            gV: function () {
                this.k.enableScrollWheelZoom = o
            },
            SU: function () {
                this.k.enableScrollWheelZoom = q
            },
            show: function () {
                this.k.visible = o
            },
            J: function () {
                this.k.visible = q
            },
            Bj: function () {
                return Sa() && !G() && "javascript" != this.k.panoramaRenderer ? "flashRender" : !G() && Mb() ? "cvsRender" : "cssRender"
            },
            ya: function (a) {
                this.se[a.Vc] = a
            },
            Gb: function (a) {
                delete this.se[a]
            },
            qD: function () {
                return this.k.visible
            },
            Sh: function () {
                return new L(this.A.clientWidth, this.A.clientHeight)
            },
            Fa: u("A"),
            gK: function () {
                var a = z.hg("baidumap", "?"), b = this.Kb();
                if (b) {
                    var b = {
                        panotype: this.ts(),
                        heading: this.sa().heading,
                        pitch: this.sa().pitch,
                        pid: b,
                        panoid: b,
                        from: "api"
                    }, c;
                    for (c in b)
                        a += c + "=" + b[c] + "&"
                }
                return a.slice(0, -1)
            },
            Uw: function () {
                this.kp({copyrightControlOptions: {logoVisible: q}})
            },
            ME: function () {
                this.kp({copyrightControlOptions: {logoVisible: o}})
            },
            iB: function (a) {
                function b(a, b) {
                    return function () {
                        a.Sq.push({JL: b, IL: arguments})
                    }
                }

                for (var c = a.getPanoMethodList(), d = "", e = 0, f = c.length; e < f; e++)
                    d = c[e], this[d] = b(this, d);
                this.Bg.push(a)
            },
            rE: function (a) {
                for (var b = this.Bg.length; b--; )
                    this.Bg[b] === a && this.Bg.splice(b, 1)
            }
        });
        var Hd = Na.prototype;
        R(Hd, {
            setId: Hd.cc,
            setPosition: Hd.ha,
            setPov: Hd.ud,
            setZoom: Hd.Cc,
            setOptions: Hd.kp,
            getId: Hd.Kb,
            getPosition: Hd.V,
            getPov: Hd.sa,
            getZoom: Hd.U,
            getLinks: Hd.RV,
            getBaiduMapUrl: Hd.gK,
            hideMapLogo: Hd.Uw,
            showMapLogo: Hd.ME,
            enableDoubleClickZoom: Hd.x0,
            disableDoubleClickZoom: Hd.m0,
            enableScrollWheelZoom: Hd.gV,
            disableScrollWheelZoom: Hd.SU,
            show: Hd.show,
            hide: Hd.J,
            addPlugin: Hd.iB,
            removePlugin: Hd.rE,
            getVisible: Hd.qD,
            addOverlay: Hd.ya,
            removeOverlay: Hd.Gb,
            getSceneType: Hd.ts,
            setPanoramaPOIType: Hd.it,
            exitInter: Hd.ro
        });
        R(window, {
            BMAP_PANORAMA_POI_HOTEL: "hotel",
            BMAP_PANORAMA_POI_CATERING: "catering",
            BMAP_PANORAMA_POI_MOVIE: "movie",
            BMAP_PANORAMA_POI_TRANSIT: "transit",
            BMAP_PANORAMA_POI_INDOOR_SCENE: "indoor_scene",
            BMAP_PANORAMA_POI_NONE: "none",
            BMAP_PANORAMA_INDOOR_SCENE: "inter",
            BMAP_PANORAMA_STREET_SCENE: "street"
        });
        function Id() {
            w.lang.qa.call(this);
            this.Vc = "PanoramaOverlay_" + this.Q;
            this.G = p;
            this.Ea = o
        }

        w.lang.ia(Id, w.lang.qa, "PanoramaOverlayBase");
        w.extend(Id.prototype, {
            V0: u("Vc"), fa: function () {
                aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
            }, remove: function () {
                aa("remove\u65b9\u6cd5\u672a\u5b9e\u73b0")
            }, sf: function () {
                aa("_setOverlayProperty\u65b9\u6cd5\u672a\u5b9e\u73b0")
            }
        });
        function Jd(a, b) {
            Id.call(this);
            var c = {position: p, altitude: 2, displayDistance: o}, b = b || {}, d;
            for (d in b)
                c[d] = b[d];
            this.xb = c.position;
            this.vj = a;
            this.Rp = c.altitude;
            this.TP = c.displayDistance
        }

        w.lang.ia(Jd, Id, "PanoramaLabel");
        w.extend(Jd.prototype, {
            ha: function (a) {
                this.xb = a;
                this.sf("position", a)
            }, V: u("xb"), Qc: function (a) {
                this.vj = a;
                this.sf("content", a)
            }, bk: u("vj"), BE: function (a) {
                this.Rp = a;
                this.sf("altitude", a)
            }, uo: u("Rp"), sa: function () {
                var a = this.V(), b = p, c = p;
                this.G && (c = this.G.V());
                if (a && c)
                    if (a.$a(c))
                        b = this.G.sa();
                    else {
                        b = {};
                        b.heading = Kd(a.lng - c.lng, a.lat - c.lat) || 0;
                        var a = b, c = this.uo(), d = this.vn();
                        a.pitch = Math.round(180 * (Math.atan(c / d) / Math.PI)) || 0
                    }
                return b
            }, vn: function () {
                var a = 0, b, c;
                this.G && (b = this.G.V(), (c = this.V()) && !c.$a(b) && (a = Q.wo(b, c)));
                return a
            }, J: function () {
                aa("hide\u65b9\u6cd5\u672a\u5b9e\u73b0")
            }, show: function () {
                aa("show\u65b9\u6cd5\u672a\u5b9e\u73b0")
            }, sf: s()
        });
        var Ld = Jd.prototype;
        R(Ld, {
            setPosition: Ld.ha,
            getPosition: Ld.V,
            setContent: Ld.Qc,
            getContent: Ld.bk,
            setAltitude: Ld.BE,
            getAltitude: Ld.uo,
            getPov: Ld.sa,
            show: Ld.show,
            hide: Ld.J
        });
        function Md(a, b) {
            Id.call(this);
            var c = {icon: "", title: "", panoInfo: p, altitude: 2}, b = b || {}, d;
            for (d in b)
                c[d] = b[d];
            this.xb = a;
            this.$G = c.icon;
            this.rI = c.title;
            this.Rp = c.altitude;
            this.cS = c.panoInfo;
            this.za = {heading: 0, pitch: 0}
        }

        w.lang.ia(Md, Id, "PanoramaMarker");
        w.extend(Md.prototype, {
            ha: function (a) {
                this.xb = a;
                this.sf("position", a)
            }, V: u("xb"), qc: function (a) {
                this.rI = a;
                this.sf("title", a)
            }, Fo: u("rI"), Pb: function (a) {
                this.$G = icon;
                this.sf("icon", a)
            }, xo: u("$G"), BE: function (a) {
                this.Rp = a;
                this.sf("altitude", a)
            }, uo: u("Rp"), iD: u("cS"), sa: function () {
                var a = p;
                if (this.G) {
                    var a = this.G.V(), b = this.V(), a = Kd(b.lng - a.lng, b.lat - a.lat);
                    isNaN(a) && (a = 0);
                    a = {heading: a, pitch: 0}
                } else
                    a = this.za;
                return a
            }, sf: s()
        });
        var Nd = Md.prototype;
        R(Nd, {
            setPosition: Nd.ha,
            getPosition: Nd.V,
            setTitle: Nd.qc,
            getTitle: Nd.Fo,
            setAltitude: Nd.BE,
            getAltitude: Nd.uo,
            getPanoInfo: Nd.iD,
            getIcon: Nd.xo,
            setIcon: Nd.Pb,
            getPov: Nd.sa
        });
        function Kd(a, b) {
            var c = 0;
            if (0 !== a && 0 !== b) {
                var c = 180 * (Math.atan(a / b) / Math.PI), d = 0;
                0 < a && 0 > b && (d = 90);
                0 > a && 0 > b && (d = 180);
                0 > a && 0 < b && (d = 270);
                c = (c + 90) % 90 + d
            } else
                0 === a ? c = 0 > b ? 180 : 0 : 0 === b && (c = 0 < a ? 90 : 270);
            return Math.round(c)
        }

        function Gd() {
            if ("boolean" === typeof Od)
                return Od;
            if (!window.WebGLRenderingContext || w.platform.km && -1 == navigator.userAgent.indexOf("Android 5"))
                return Od = q;
            var a = document.createElement("canvas"), b = p;
            try {
                b = a.getContext("webgl")
            } catch (c) {
                Od = q
            }
            return Od = b === p ? q : o
        }

        var Od;

        function ac(a, b) {
            this.G = a || p;
            var c = this;
            c.G && c.P();
            J.load("pservice", function () {
                c.lP()
            });
            "api" == (b || {}).zf ? Pa(Ha) : Pa(Ia);
            this.gd = {
                getPanoramaById: [],
                getPanoramaByLocation: [],
                getVisiblePOIs: [],
                getRecommendPanosById: [],
                getPanoramaVersions: [],
                checkPanoSupportByCityCode: [],
                getPanoramaByPOIId: [],
                getCopyrightProviders: []
            }
        }

        z.xm(function (a) {
            "flashRender" !== a.Bj() && new ac(a, {zf: "api"})
        });
        w.extend(ac.prototype, {
            P: function () {
                function a(a) {
                    if (a) {
                        if (a.id != b.sv) {
                            b.UM(a.id);
                            b.R = a;
                            b.Na != p && (b.Uk = b._position);
                            for (var c in a)
                                if (a.hasOwnProperty(c))
                                    switch (b["_" + c] = a[c], c) {
                                        case "position":
                                            b.xb = a[c];
                                            break;
                                        case "id":
                                            b.Na = a[c];
                                            break;
                                        case "links":
                                            b.An = a[c];
                                            break;
                                        case "zoom":
                                            b.Ac = a[c]
                                    }
                            if (b.Uk) {
                                var f = b.Uk, g = b._position;
                                c = f.lat;
                                var i = g.lat, k = Nb(i - c), f = Nb(g.lng - f.lng);
                                c = Math.sin(k / 2) * Math.sin(k / 2) + Math.cos(Nb(c)) * Math.cos(Nb(i)) * Math.sin(f / 2) * Math.sin(f / 2);
                                b.oG = 6371E3 * 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
                            }
                            c = new M("ondataload");
                            c.data = a;
                            b.dispatchEvent(c);
                            b.dispatchEvent(new M("onposition_changed"));
                            b.dispatchEvent(new M("onlinks_changed"));
                            b.dispatchEvent(new M("oncopyright_changed"), {copyright: a.copyright});
                            a.Fl && b.k.closeControl ? w.B.show(b.oQ) : w.B.J(b.oQ)
                        }
                    } else
                        b.Na = b.Tk, b.xb = b.Uk, b.dispatchEvent(new M("onnoresult"))
                }

                var b = this.G, c = this;
                b.addEventListener("id_changed", function () {
                    c.Bo(b.Kb(), a)
                });
                b.addEventListener("iid_changed", function () {
                    c.Cg(ac.Ek + "qt=idata&iid=" + b.Lz + "&fn=", function (b) {
                        if (b && b.result && 0 == b.result.error) {
                            var b = b.content[0].interinfo, e = {};
                            e.Fl = b.BreakID;
                            for (var f = b.Defaultfloor, g = p, i = 0; i < b.Floors.length; i++)
                                if (b.Floors[i].Floor == f) {
                                    g = b.Floors[i];
                                    break
                                }
                            e.id = g.StartID || g.Points[0].PID;
                            c.Bo(e.id, a, e)
                        }
                    })
                });
                b.addEventListener("position_changed_inner", function () {
                    c.cj(b.V(), a)
                })
            }, Bo: function (a, b) {
                this.gd.getPanoramaById.push(arguments)
            }, cj: function (a, b, c) {
                this.gd.getPanoramaByLocation.push(arguments)
            }, rD: function (a, b, c, d) {
                this.gd.getVisiblePOIs.push(arguments)
            }, Ow: function (a, b) {
                this.gd.getRecommendPanosById.push(arguments)
            }, Nw: function (a) {
                this.gd.getPanoramaVersions.push(arguments)
            }, wB: function (a, b) {
                this.gd.checkPanoSupportByCityCode.push(arguments)
            }, Mw: function (a, b) {
                this.gd.getPanoramaByPOIId.push(arguments)
            }, mK: function (a) {
                this.gd.getCopyrightProviders.push(arguments)
            }
        });
        var Pd = ac.prototype;
        R(Pd, {getPanoramaById: Pd.Bo, getPanoramaByLocation: Pd.cj, getPanoramaByPOIId: Pd.Mw});
        function $b(a) {
            Dc.call(this);
            "api" == (a || {}).zf ? Pa(Ba) : Pa(Da)
        }

        $b.IF = z.hg("pano", "tile/");
        $b.prototype = new Dc;
        $b.prototype.getTilesUrl = function (a, b) {
            var c = $b.IF[(a.x + a.y) % $b.IF.length] + "?udt=20150114&qt=tile&styles=pl&x=" + a.x + "&y=" + a.y + "&z=" + b;
            w.S.ba && 6 >= w.S.ba && (c += "&color_dep=32");
            return c
        };
        $b.prototype.Js = da(o);
        Qd.Fd = new Q;
        function Qd() {
        }

        w.extend(Qd, {
            TU: function (a, b, c) {
                c = w.lang.Od(c);
                b = {data: b};
                "position_changed" == a && (b.data = Qd.Fd.fi(new P(b.data.mercatorX, b.data.mercatorY)));
                c.dispatchEvent(new M("on" + a), b)
            }
        });
        var Rd = Qd;
        R(Rd, {dispatchFlashEvent: Rd.TU});
        var Sd = {hO: 50};
        Sd.au = z.hg("pano")[0];
        Sd.Xt = {width: 220, height: 60};
        w.extend(Sd, {
            Mo: function (a, b, c, d) {
                if (!b || !c || !c.lngLat || !c.panoInstance)
                    d();
                else {
                    this.Gn === j && (this.Gn = new ac(p, {zf: "api"}));
                    var e = this;
                    this.Gn.wB(b, function (b) {
                        b ? e.Gn.cj(c.lngLat, Sd.hO, function (b) {
                            if (b && b.id) {
                                var f = b.id, k = b.bh, b = b.dh, l = ac.Fd.Vg(c.lngLat), m = e.RQ(l, {
                                    x: k,
                                    y: b
                                }), k = e.vK(f, m, 0, Sd.Xt.width, Sd.Xt.height);
                                a.content = e.SQ(a.content, k, c.titleTip, c.beforeDomId);
                                a.addEventListener("open", function () {
                                    ia.F(w.rc("infoWndPano"), "click", function () {
                                        c.panoInstance.cc(f);
                                        c.panoInstance.show();
                                        c.panoInstance.ud({heading: m, pitch: 0})
                                    })
                                })
                            }
                            d()
                        }) : d()
                    })
                }
            }, SQ: function (a, b, c, d) {
                var c = c || "", e;
                !d || !a.split(d)[0] ? (d = a, a = "") : (d = a.split(d)[0], e = d.lastIndexOf("<"), d = a.substring(0, e), a = a.substring(e));
                e = [];
                var f = Sd.Xt.width, g = Sd.Xt.height;
                e.push(d);
                e.push("<div id='infoWndPano' class='panoInfoBox' style='height:" + g + "px;width:" + f + "px; margin-top: -19px;'>");
                e.push("<img class='pano_thumnail_img' width='" + f + "' height='" + g + "' border='0' alt='" + c + "\u5916\u666f' title='" + c + "\u5916\u666f' src='" + b + "' onerror='Pano.PanoEntranceUtil.thumbnailNotFound(this, " + f + ", " + g + ");' />");
                e.push("<div class='panoInfoBoxTitleBg' style='width:" + f + "px;'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >\u8fdb\u5165\u5168\u666f&gt;&gt;</a>");
                e.push("</div>");
                e.push(a);
                return e.join("")
            }, RQ: function (a, b) {
                var c = 90 - 180 * Math.atan2(a.y - b.y, a.x - b.x) / Math.PI;
                0 > c && (c += 360);
                return c
            }, vK: function (a, b, c, d, e) {
                var f = {panoId: a, panoHeading: b || 0, panoPitch: c || 0, width: d, height: e};
                return (Sd.au + "?qt=pr3d&fovy=75&quality=80&panoid={panoId}&heading={panoHeading}&pitch={panoPitch}&width={width}&height={height}").replace(/\{(.*?)\}/g, function (a, b) {
                    return f[b]
                })
            }
        });
        var Td = document, Ud = Math, Vd = Td.createElement("div").style, Wd;
        a:{
            for (var Xd = ["t", "webkitT", "MozT", "msT", "OT"], Yd, ae = 0, be = Xd.length; ae < be; ae++)
                if (Yd = Xd[ae] + "ransform", Yd in Vd) {
                    Wd = Xd[ae].substr(0, Xd[ae].length - 1);
                    break a
                }
            Wd = q
        }
        var ce = Wd ? "-" + Wd.toLowerCase() + "-" : "", ee = de("transform"), fe = de("transitionProperty"), ge = de("transitionDuration"), he = de("transformOrigin"), ie = de("transitionTimingFunction"), je = de("transitionDelay"), wd = /android/gi.test(navigator.appVersion), ke = /iphone|ipad/gi.test(navigator.appVersion), le = /hp-tablet/gi.test(navigator.appVersion), ne = de("perspective")in Vd, oe = "ontouchstart"in window && !le, pe = Wd !== q, qe = de("transition")in Vd, re = "onorientationchange"in window ? "orientationchange" : "resize", se = oe ? "touchstart" : "mousedown", te = oe ? "touchmove" : "mousemove", ue = oe ? "touchend" : "mouseup", ve = oe ? "touchcancel" : "mouseup", we = Wd === q ? q : {
            "": "transitionend",
            webkit: "webkitTransitionEnd",
            Moz: "transitionend",
            O: "otransitionend",
            ms: "MSTransitionEnd"
        }[Wd], xe = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
            return setTimeout(a, 1)
        }, ye = window.cancelRequestAnimationFrame || window.U2 || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout, ze = ne ? " translateZ(0)" : "";

        function Ae(a, b) {
            var c = this, d;
            c.Tm = "object" == typeof a ? a : Td.getElementById(a);
            c.Tm.style.overflow = "hidden";
            c.Bb = c.Tm.children[0];
            c.options = {
                Jo: o,
                Rm: o,
                x: 0,
                y: 0,
                ao: o,
                XT: q,
                nx: o,
                SD: o,
                zk: o,
                ki: q,
                oZ: 0,
                Wv: q,
                Sw: o,
                Wh: o,
                li: o,
                KC: wd,
                Vw: ke,
                mV: ke && ne,
                yE: "",
                zoom: q,
                Ak: 1,
                yp: 4,
                VU: 2,
                NN: "scroll",
                wt: q,
                Xx: 1,
                cM: p,
                VL: function (a) {
                    a.preventDefault()
                },
                fM: p,
                UL: p,
                eM: p,
                TL: p,
                ux: p,
                gM: p,
                YL: p,
                Vo: p,
                hM: p,
                Uo: p
            };
            for (d in b)
                c.options[d] = b[d];
            c.x = c.options.x;
            c.y = c.options.y;
            c.options.zk = pe && c.options.zk;
            c.options.Wh = c.options.Jo && c.options.Wh;
            c.options.li = c.options.Rm && c.options.li;
            c.options.zoom = c.options.zk && c.options.zoom;
            c.options.ki = qe && c.options.ki;
            c.options.zoom && wd && (ze = "");
            c.Bb.style[fe] = c.options.zk ? ce + "transform" : "top left";
            c.Bb.style[ge] = "0";
            c.Bb.style[he] = "0 0";
            c.options.ki && (c.Bb.style[ie] = "cubic-bezier(0.33,0.66,0.66,1)");
            c.options.zk ? c.Bb.style[ee] = "translate(" + c.x + "px," + c.y + "px)" + ze : c.Bb.style.cssText += ";position:absolute;top:" + c.y + "px;left:" + c.x + "px";
            c.options.ki && (c.options.KC = o);
            c.refresh();
            c.P(re, window);
            c.P(se);
            !oe && "none" != c.options.NN && (c.P("DOMMouseScroll"), c.P("mousewheel"));
            c.options.Wv && (c.eU = setInterval(function () {
                c.jP()
            }, 500));
            this.options.Sw && (Event.prototype.stopImmediatePropagation || (document.body.removeEventListener = function (a, b, c) {
                var d = Node.prototype.removeEventListener;
                a === "click" ? d.call(document.body, a, b.OK || b, c) : d.call(document.body, a, b, c)
            }, document.body.addEventListener = function (a, b, c) {
                var d = Node.prototype.addEventListener;
                a === "click" ? d.call(document.body, a, b.OK || (b.OK = function (a) {
                    a.VX || b(a)
                }), c) : d.call(document.body, a, b, c)
            }), c.P("click", document.body, o))
        }

        Ae.prototype = {
            enabled: o,
            x: 0,
            y: 0,
            mj: [],
            scale: 1,
            RB: 0,
            SB: 0,
            Ee: [],
            bf: [],
            nB: p,
            iy: 0,
            handleEvent: function (a) {
                switch (a.type) {
                    case se:
                        if (!oe && 0 !== a.button)
                            break;
                        this.lv(a);
                        break;
                    case te:
                        this.OR(a);
                        break;
                    case ue:
                    case ve:
                        this.yu(a);
                        break;
                    case re:
                        this.HA();
                        break;
                    case "DOMMouseScroll":
                    case "mousewheel":
                        this.sT(a);
                        break;
                    case we:
                        this.oT(a);
                        break;
                    case "click":
                        this.tP(a)
                }
            },
            jP: function () {
                !this.Zg && (!this.Bk && !(this.zl || this.Nx == this.Bb.offsetWidth * this.scale && this.fp == this.Bb.offsetHeight * this.scale)) && this.refresh()
            },
            bv: function (a) {
                var b;
                this[a + "Scrollbar"] ? (this[a + "ScrollbarWrapper"] || (b = Td.createElement("div"), this.options.yE ? b.className = this.options.yE + a.toUpperCase() : b.style.cssText = "position:absolute;z-index:100;" + ("h" == a ? "height:7px;bottom:1px;left:2px;right:" + (this.li ? "7" : "2") + "px" : "width:7px;bottom:" + (this.Wh ? "7" : "2") + "px;top:2px;right:1px"), b.style.cssText += ";pointer-events:none;" + ce + "transition-property:opacity;" + ce + "transition-duration:" + (this.options.mV ? "350ms" : "0") + ";overflow:hidden;opacity:" + (this.options.Vw ? "0" : "1"), this.Tm.appendChild(b), this[a + "ScrollbarWrapper"] = b, b = Td.createElement("div"), this.options.yE || (b.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + ce + "background-clip:padding-box;" + ce + "box-sizing:border-box;" + ("h" == a ? "height:100%" : "width:100%") + ";" + ce + "border-radius:3px;border-radius:3px"), b.style.cssText += ";pointer-events:none;" + ce + "transition-property:" + ce + "transform;" + ce + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + ce + "transition-duration:0;" + ce + "transform: translate(0,0)" + ze, this.options.ki && (b.style.cssText += ";" + ce + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"), this[a + "ScrollbarWrapper"].appendChild(b), this[a + "ScrollbarIndicator"] = b), "h" == a ? (this.JK = this.KK.clientWidth, this.DW = Ud.max(Ud.round(this.JK * this.JK / this.Nx), 8), this.BW.style.width = this.DW + "px") : (this.FN = this.GN.clientHeight, this.JZ = Ud.max(Ud.round(this.FN * this.FN / this.fp), 8), this.IZ.style.height = this.JZ + "px"), this.IA(a, o)) : this[a + "ScrollbarWrapper"] && (pe && (this[a + "ScrollbarIndicator"].style[ee] = ""), this[a + "ScrollbarWrapper"].parentNode.removeChild(this[a + "ScrollbarWrapper"]), this[a + "ScrollbarWrapper"] = p, this[a + "ScrollbarIndicator"] = p)
            },
            HA: function () {
                var a = this;
                setTimeout(function () {
                    a.refresh()
                }, wd ? 200 : 0)
            },
            Vq: function (a, b) {
                this.Bk || (a = this.Jo ? a : 0, b = this.Rm ? b : 0, this.options.zk ? this.Bb.style[ee] = "translate(" + a + "px," + b + "px) scale(" + this.scale + ")" + ze : (a = Ud.round(a), b = Ud.round(b), this.Bb.style.left = a + "px", this.Bb.style.top = b + "px"), this.x = a, this.y = b, this.IA("h"), this.IA("v"))
            },
            IA: function (a, b) {
                var c = "h" == a ? this.x : this.y;
                this[a + "Scrollbar"] && (c *= this[a + "ScrollbarProp"], 0 > c ? (this.options.KC || (c = this[a + "ScrollbarIndicatorSize"] + Ud.round(3 * c), 8 > c && (c = 8), this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px"), c = 0) : c > this[a + "ScrollbarMaxScroll"] && (this.options.KC ? c = this[a + "ScrollbarMaxScroll"] : (c = this[a + "ScrollbarIndicatorSize"] - Ud.round(3 * (c - this[a + "ScrollbarMaxScroll"])), 8 > c && (c = 8), this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px", c = this[a + "ScrollbarMaxScroll"] + (this[a + "ScrollbarIndicatorSize"] - c))), this[a + "ScrollbarWrapper"].style[je] = "0", this[a + "ScrollbarWrapper"].style.opacity = b && this.options.Vw ? "0" : "1", this[a + "ScrollbarIndicator"].style[ee] = "translate(" + ("h" == a ? c + "px,0)" : "0," + c + "px)") + ze)
            },
            tP: function (a) {
                if (a.pQ === o)
                    return this.fB = a.target, this.xw = Date.now(), o;
                if (this.fB && this.xw) {
                    if (600 < Date.now() - this.xw)
                        return this.xw = this.fB = p, o
                } else {
                    for (var b = a.target; b != this.Bb && b != document.body; )
                        b = b.parentNode;
                    if (b == document.body)
                        return o
                }
                for (b = a.target; 1 != b.nodeType; )
                    b = b.parentNode;
                b = b.tagName.toLowerCase();
                if ("select" != b && "input" != b && "textarea" != b)
                    return a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.VX = o, a.stopPropagation(), a.preventDefault(), this.xw = this.fB = p, q
            },
            lv: function (a) {
                var b = oe ? a.touches[0] : a, c, d;
                if (this.enabled) {
                    this.options.VL && this.options.VL.call(this, a);
                    (this.options.ki || this.options.zoom) && this.sI(0);
                    this.Bk = this.zl = this.Zg = q;
                    this.aC = this.$B = this.Dv = this.Cv = this.gC = this.fC = 0;
                    this.options.zoom && (oe && 1 < a.touches.length) && (d = Ud.abs(a.touches[0].pageX - a.touches[1].pageX), c = Ud.abs(a.touches[0].pageY - a.touches[1].pageY), this.qZ = Ud.sqrt(d * d + c * c), this.wx = Ud.abs(a.touches[0].pageX + a.touches[1].pageX - 2 * this.cF) / 2 - this.x, this.xx = Ud.abs(a.touches[0].pageY + a.touches[1].pageY - 2 * this.dF) / 2 - this.y, this.options.Vo && this.options.Vo.call(this, a));
                    if (this.options.nx && (this.options.zk ? (c = getComputedStyle(this.Bb, p)[ee].replace(/[^0-9\-.,]/g, "").split(","), d = +(c[12] || c[4]), c = +(c[13] || c[5])) : (d = +getComputedStyle(this.Bb, p).left.replace(/[^0-9-]/g, ""), c = +getComputedStyle(this.Bb, p).top.replace(/[^0-9-]/g, "")), d != this.x || c != this.y))
                        this.options.ki ? this.Hd(we) : ye(this.nB), this.mj = [], this.Vq(d, c), this.options.ux && this.options.ux.call(this);
                    this.Ev = this.x;
                    this.Fv = this.y;
                    this.zt = this.x;
                    this.At = this.y;
                    this.bh = b.pageX;
                    this.dh = b.pageY;
                    this.startTime = a.timeStamp || Date.now();
                    this.options.fM && this.options.fM.call(this, a);
                    this.P(te, window);
                    this.P(ue, window);
                    this.P(ve, window)
                }
            },
            OR: function (a) {
                var b = oe ? a.touches[0] : a, c = b.pageX - this.bh, d = b.pageY - this.dh, e = this.x + c, f = this.y + d, g = a.timeStamp || Date.now();
                this.options.UL && this.options.UL.call(this, a);
                if (this.options.zoom && oe && 1 < a.touches.length)
                    e = Ud.abs(a.touches[0].pageX - a.touches[1].pageX), f = Ud.abs(a.touches[0].pageY - a.touches[1].pageY), this.pZ = Ud.sqrt(e * e + f * f), this.Bk = o, b = 1 / this.qZ * this.pZ * this.scale, b < this.options.Ak ? b = 0.5 * this.options.Ak * Math.pow(2, b / this.options.Ak) : b > this.options.yp && (b = 2 * this.options.yp * Math.pow(0.5, this.options.yp / b)), this.Po = b / this.scale, e = this.wx - this.wx * this.Po + this.x, f = this.xx - this.xx * this.Po + this.y, this.Bb.style[ee] = "translate(" + e + "px," + f + "px) scale(" + b + ")" + ze, this.options.hM && this.options.hM.call(this, a);
                else {
                    this.bh = b.pageX;
                    this.dh = b.pageY;
                    if (0 < e || e < this.Td)
                        e = this.options.ao ? this.x + c / 2 : 0 <= e || 0 <= this.Td ? 0 : this.Td;
                    if (f > this.$e || f < this.$c)
                        f = this.options.ao ? this.y + d / 2 : f >= this.$e || 0 <= this.$c ? this.$e : this.$c;
                    this.fC += c;
                    this.gC += d;
                    this.Cv = Ud.abs(this.fC);
                    this.Dv = Ud.abs(this.gC);
                    6 > this.Cv && 6 > this.Dv || (this.options.SD && (this.Cv > this.Dv + 5 ? (f = this.y, d = 0) : this.Dv > this.Cv + 5 && (e = this.x, c = 0)), this.Zg = o, this.Vq(e, f), this.$B = 0 < c ? -1 : 0 > c ? 1 : 0, this.aC = 0 < d ? -1 : 0 > d ? 1 : 0, 300 < g - this.startTime && (this.startTime = g, this.zt = this.x, this.At = this.y), this.options.eM && this.options.eM.call(this, a))
                }
            },
            yu: function (a) {
                if (!(oe && 0 !== a.touches.length)) {
                    var b = this, c = oe ? a.changedTouches[0] : a, d, e, f = {oa: 0, time: 0}, g = {
                        oa: 0,
                        time: 0
                    }, i = (a.timeStamp || Date.now()) - b.startTime;
                    d = b.x;
                    e = b.y;
                    b.Hd(te, window);
                    b.Hd(ue, window);
                    b.Hd(ve, window);
                    b.options.TL && b.options.TL.call(b, a);
                    if (b.Bk)
                        d = b.scale * b.Po, d = Math.max(b.options.Ak, d), d = Math.min(b.options.yp, d), b.Po = d / b.scale, b.scale = d, b.x = b.wx - b.wx * b.Po + b.x, b.y = b.xx - b.xx * b.Po + b.y, b.Bb.style[ge] = "200ms", b.Bb.style[ee] = "translate(" + b.x + "px," + b.y + "px) scale(" + b.scale + ")" + ze, b.Bk = q, b.refresh(), b.options.Uo && b.options.Uo.call(b, a);
                    else {
                        if (b.Zg) {
                            if (300 > i && b.options.nx) {
                                f = d ? b.qH(d - b.zt, i, -b.x, b.Nx - b.Pt + b.x, b.options.ao ? b.Pt : 0) : f;
                                g = e ? b.qH(e - b.At, i, -b.y, 0 > b.$c ? b.fp - b.Um + b.y - b.$e : 0, b.options.ao ? b.Um : 0) : g;
                                d = b.x + f.oa;
                                e = b.y + g.oa;
                                if (0 < b.x && 0 < d || b.x < b.Td && d < b.Td)
                                    f = {oa: 0, time: 0};
                                if (b.y > b.$e && e > b.$e || b.y < b.$c && e < b.$c)
                                    g = {oa: 0, time: 0}
                            }
                            f.oa || g.oa ? (c = Ud.max(Ud.max(f.time, g.time), 10), b.options.wt && (f = d - b.Ev, g = e - b.Fv, Ud.abs(f) < b.options.Xx && Ud.abs(g) < b.options.Xx ? b.scrollTo(b.Ev, b.Fv, 200) : (f = b.jI(d, e), d = f.x, e = f.y, c = Ud.max(f.time, c))), b.scrollTo(Ud.round(d), Ud.round(e), c)) : b.options.wt ? (f = d - b.Ev, g = e - b.Fv, Ud.abs(f) < b.options.Xx && Ud.abs(g) < b.options.Xx ? b.scrollTo(b.Ev, b.Fv, 200) : (f = b.jI(b.x, b.y), (f.x != b.x || f.y != b.y) && b.scrollTo(f.x, f.y, f.time))) : b.In(200)
                        } else {
                            if (oe)
                                if (b.GJ && b.options.zoom)
                                    clearTimeout(b.GJ), b.GJ = p, b.options.Vo && b.options.Vo.call(b, a), b.zoom(b.bh, b.dh, 1 == b.scale ? b.options.VU : 1), b.options.Uo && setTimeout(function () {
                                        b.options.Uo.call(b, a)
                                    }, 200);
                                else if (this.options.Sw) {
                                    for (d = c.target; 1 != d.nodeType; )
                                        d = d.parentNode;
                                    e = d.tagName.toLowerCase();
                                    "select" != e && "input" != e && "textarea" != e ? (e = Td.createEvent("MouseEvents"), e.initMouseEvent("click", o, o, a.view, 1, c.screenX, c.screenY, c.clientX, c.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, p), e.pQ = o, d.dispatchEvent(e)) : d.focus()
                                }
                            b.In(400)
                        }
                        b.options.gM && b.options.gM.call(b, a)
                    }
                }
            },
            In: function (a) {
                var b = 0 <= this.x ? 0 : this.x < this.Td ? this.Td : this.x, c = this.y >= this.$e || 0 < this.$c ? this.$e : this.y < this.$c ? this.$c : this.y;
                if (b == this.x && c == this.y) {
                    if (this.Zg && (this.Zg = q, this.options.ux && this.options.ux.call(this)), this.Wh && this.options.Vw && ("webkit" == Wd && (this.KK.style[je] = "300ms"), this.KK.style.opacity = "0"), this.li && this.options.Vw)
                        "webkit" == Wd && (this.GN.style[je] = "300ms"), this.GN.style.opacity = "0"
                } else
                    this.scrollTo(b, c, a || 0)
            },
            sT: function (a) {
                var b = this, c, d;
                if ("wheelDeltaX"in a)
                    c = a.wheelDeltaX / 12, d = a.wheelDeltaY / 12;
                else if ("wheelDelta"in a)
                    c = d = a.wheelDelta / 12;
                else if ("detail"in a)
                    c = d = 3 * -a.detail;
                else
                    return;
                if ("zoom" == b.options.NN) {
                    if (d = b.scale * Math.pow(2, 1 / 3 * (d ? d / Math.abs(d) : 0)), d < b.options.Ak && (d = b.options.Ak), d > b.options.yp && (d = b.options.yp), d != b.scale)
                        !b.iy && b.options.Vo && b.options.Vo.call(b, a), b.iy++, b.zoom(a.pageX, a.pageY, d, 400), setTimeout(function () {
                            b.iy--;
                            !b.iy && b.options.Uo && b.options.Uo.call(b, a)
                        }, 400)
                } else
                    c = b.x + c, d = b.y + d, 0 < c ? c = 0 : c < b.Td && (c = b.Td), d > b.$e ? d = b.$e : d < b.$c && (d = b.$c), 0 > b.$c && b.scrollTo(c, d, 0)
            },
            oT: function (a) {
                a.target == this.Bb && (this.Hd(we), this.UA())
            },
            UA: function () {
                var a = this, b = a.x, c = a.y, d = Date.now(), e, f, g;
                a.zl || (a.mj.length ? (e = a.mj.shift(), e.x == b && e.y == c && (e.time = 0), a.zl = o, a.Zg = o, a.options.ki) ? (a.sI(e.time), a.Vq(e.x, e.y), a.zl = q, e.time ? a.P(we) : a.In(0)) : (g = function () {
                    var i = Date.now(), k;
                    if (i >= d + e.time) {
                        a.Vq(e.x, e.y);
                        a.zl = q;
                        a.options.CX && a.options.CX.call(a);
                        a.UA()
                    } else {
                        i = (i - d) / e.time - 1;
                        f = Ud.sqrt(1 - i * i);
                        i = (e.x - b) * f + b;
                        k = (e.y - c) * f + c;
                        a.Vq(i, k);
                        if (a.zl)
                            a.nB = xe(g)
                    }
                }, g()) : a.In(400))
            },
            sI: function (a) {
                a += "ms";
                this.Bb.style[ge] = a;
                this.Wh && (this.BW.style[ge] = a);
                this.li && (this.IZ.style[ge] = a)
            },
            qH: function (a, b, c, d, e) {
                var b = Ud.abs(a) / b, f = b * b / 0.0012;
                0 < a && f > c ? (c += e / (6 / (6.0E-4 * (f / b))), b = b * c / f, f = c) : 0 > a && f > d && (d += e / (6 / (6.0E-4 * (f / b))), b = b * d / f, f = d);
                return {oa: f * (0 > a ? -1 : 1), time: Ud.round(b / 6.0E-4)}
            },
            Ij: function (a) {
                for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent; )
                    b -= a.offsetLeft, c -= a.offsetTop;
                a != this.Tm && (b *= this.scale, c *= this.scale);
                return {left: b, top: c}
            },
            jI: function (a, b) {
                var c, d, e;
                e = this.Ee.length - 1;
                c = 0;
                for (d = this.Ee.length; c < d; c++)
                    if (a >= this.Ee[c]) {
                        e = c;
                        break
                    }
                e == this.RB && (0 < e && 0 > this.$B) && e--;
                a = this.Ee[e];
                d = (d = Ud.abs(a - this.Ee[this.RB])) ? 500 * (Ud.abs(this.x - a) / d) : 0;
                this.RB = e;
                e = this.bf.length - 1;
                for (c = 0; c < e; c++)
                    if (b >= this.bf[c]) {
                        e = c;
                        break
                    }
                e == this.SB && (0 < e && 0 > this.aC) && e--;
                b = this.bf[e];
                c = (c = Ud.abs(b - this.bf[this.SB])) ? 500 * (Ud.abs(this.y - b) / c) : 0;
                this.SB = e;
                e = Ud.round(Ud.max(d, c)) || 200;
                return {x: a, y: b, time: e}
            },
            P: function (a, b, c) {
                (b || this.Bb).addEventListener(a, this, !!c)
            },
            Hd: function (a, b, c) {
                (b || this.Bb).removeEventListener(a, this, !!c)
            },
            XB: ga(2),
            refresh: function () {
                var a, b, c, d = 0;
                b = 0;
                this.scale < this.options.Ak && (this.scale = this.options.Ak);
                this.Pt = this.Tm.clientWidth || 1;
                this.Um = this.Tm.clientHeight || 1;
                this.$e = -this.options.oZ || 0;
                this.Nx = Ud.round(this.Bb.offsetWidth * this.scale);
                this.fp = Ud.round((this.Bb.offsetHeight + this.$e) * this.scale);
                this.Td = this.Pt - this.Nx;
                this.$c = this.Um - this.fp + this.$e;
                this.aC = this.$B = 0;
                this.options.cM && this.options.cM.call(this);
                this.Jo = this.options.Jo && 0 > this.Td;
                this.Rm = this.options.Rm && (!this.options.XT && !this.Jo || this.fp > this.Um);
                this.Wh = this.Jo && this.options.Wh;
                this.li = this.Rm && this.options.li && this.fp > this.Um;
                a = this.Ij(this.Tm);
                this.cF = -a.left;
                this.dF = -a.top;
                if ("string" == typeof this.options.wt) {
                    this.Ee = [];
                    this.bf = [];
                    c = this.Bb.querySelectorAll(this.options.wt);
                    a = 0;
                    for (b = c.length; a < b; a++)
                        d = this.Ij(c[a]), d.left += this.cF, d.top += this.dF, this.Ee[a] = d.left < this.Td ? this.Td : d.left * this.scale, this.bf[a] = d.top < this.$c ? this.$c : d.top * this.scale
                } else if (this.options.wt) {
                    for (this.Ee = []; d >= this.Td; )
                        this.Ee[b] = d, d -= this.Pt, b++;
                    this.Td % this.Pt && (this.Ee[this.Ee.length] = this.Td - this.Ee[this.Ee.length - 1] + this.Ee[this.Ee.length - 1]);
                    b = d = 0;
                    for (this.bf = []; d >= this.$c; )
                        this.bf[b] = d, d -= this.Um, b++;
                    this.$c % this.Um && (this.bf[this.bf.length] = this.$c - this.bf[this.bf.length - 1] + this.bf[this.bf.length - 1])
                }
                this.bv("h");
                this.bv("v");
                this.Bk || (this.Bb.style[ge] = "0", this.In(400))
            },
            scrollTo: function (a, b, c, d) {
                var e = a;
                this.stop();
                e.length || (e = [{x: a, y: b, time: c, WX: d}]);
                a = 0;
                for (b = e.length; a < b; a++)
                    e[a].WX && (e[a].x = this.x - e[a].x, e[a].y = this.y - e[a].y), this.mj.push({
                        x: e[a].x,
                        y: e[a].y,
                        time: e[a].time || 0
                    });
                this.UA()
            },
            disable: function () {
                this.stop();
                this.In(0);
                this.enabled = q;
                this.Hd(te, window);
                this.Hd(ue, window);
                this.Hd(ve, window)
            },
            enable: function () {
                this.enabled = o
            },
            stop: function () {
                this.options.ki ? this.Hd(we) : ye(this.nB);
                this.mj = [];
                this.zl = this.Zg = q
            },
            zoom: function (a, b, c, d) {
                var e = c / this.scale;
                this.options.zk && (this.Bk = o, d = d === j ? 200 : d, a = a - this.cF - this.x, b = b - this.dF - this.y, this.x = a - a * e + this.x, this.y = b - b * e + this.y, this.scale = c, this.refresh(), this.x = 0 < this.x ? 0 : this.x < this.Td ? this.Td : this.x, this.y = this.y > this.$e ? this.$e : this.y < this.$c ? this.$c : this.y, this.Bb.style[ge] = d + "ms", this.Bb.style[ee] = "translate(" + this.x + "px," + this.y + "px) scale(" + c + ")" + ze, this.Bk = q)
            }
        };
        function de(a) {
            if ("" === Wd)
                return a;
            a = a.charAt(0).toUpperCase() + a.substr(1);
            return Wd + a
        }

        Vd = p;
        function Be(a) {
            this.k = {anchor: Vb, offset: new L(0, 0), maxWidth: "100%", imageHeight: 80};
            var a = a || {}, b;
            for (b in a)
                this.k[b] = a[b];
            this.ll = new ac(p, {zf: "api"});
            this.Jj = [];
            this.G = p;
            this.Sf = {height: this.k.imageHeight, width: this.k.imageHeight * Ce};
            this.Dc = this.JA = this.Fl = this.Mc = p
        }

        var De = [0, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 8, 9], Ee = "\u5176\u4ed6 \u6b63\u95e8 \u623f\u578b \u8bbe\u65bd \u6b63\u95e8 \u9910\u996e\u8bbe\u65bd \u5176\u4ed6\u8bbe\u65bd \u6b63\u95e8 \u8bbe\u65bd \u89c2\u5f71\u5385 \u5176\u4ed6\u8bbe\u65bd".split(" ");
        z.xm(function (a) {
            var b = p;
            a.addEventListener("position_changed", function () {
                a.k.albumsControl === o && (b ? b.Hx(a.Kb()) : (b = new Be(a.k.albumsControlOptions), b.fa(a)))
            });
            a.addEventListener("albums_visible_changed", function () {
                a.k.albumsControl === o ? (b ? b.Hx(a.Kb()) : (b = new Be(a.k.albumsControlOptions), b.fa(a)), b.show()) : b.J()
            });
            a.addEventListener("albums_options_changed", function () {
                b && b.kp(a.k.albumsControlOptions)
            });
            a.addEventListener("visible_changed", function () {
                b && (a.qD() ? a.k.albumsControl === o && (b.A.style.visibility = "visible") : b.A.style.visibility = "hidden")
            })
        });
        var Ce = 1.8;
        G() && (Ce = 1);
        w.extend(Be.prototype, {
            kp: function (a) {
                for (var b in a)
                    this.k[b] = a[b];
                a = this.k.imageHeight + "px";
                this.mc(this.k.anchor);
                this.A.style.width = isNaN(Number(this.k.maxWidth)) === o ? this.k.maxWidth : this.k.maxWidth + "px";
                this.A.style.height = a;
                this.Nj.style.height = a;
                this.Gh.style.height = a;
                this.Sf = {height: this.k.imageHeight, width: this.k.imageHeight * Ce};
                this.Mj.style.height = this.Sf.height - 6 + "px";
                this.Mj.style.width = this.Sf.width - 6 + "px";
                this.Hx(this.G.Kb(), o)
            }, fa: function (a) {
                this.G = a;
                this.Er();
                this.UO();
                this.PW();
                this.Hx(a.Kb())
            }, Er: function () {
                var a = this.k.imageHeight + "px";
                this.A = K("div");
                var b = this.A.style;
                b.cssText = "background:rgb(37,37,37);background:rgba(37,37,37,0.9);";
                b.position = "absolute";
                b.zIndex = "2000";
                b.width = isNaN(Number(this.k.maxWidth)) === o ? this.k.maxWidth : this.k.maxWidth + "px";
                b.padding = "8px 0";
                b.visibility = "hidden";
                b.height = a;
                this.Nj = K("div");
                b = this.Nj.style;
                b.position = "absolute";
                b.overflow = "hidden";
                b.width = "100%";
                b.height = a;
                this.Gh = K("div");
                b = this.Gh.style;
                b.height = a;
                this.Nj.appendChild(this.Gh);
                this.A.appendChild(this.Nj);
                this.G.A.appendChild(this.A);
                this.Mj = K("div", {"class": "pano_photo_item_seleted"});
                this.Mj.style.height = this.Sf.height - 6 + "px";
                this.Mj.style.width = this.Sf.width - 6 + "px";
                this.mc(this.k.anchor)
            }, LG: function (a) {
                for (var b = this.Jj, c = b.length - 1; 0 <= c; c--)
                    if (b[c].panoId == a)
                        return c;
                return -1
            }, Hx: function (a, b) {
                if (b || !this.Jj[this.Mc] || !(this.Jj[this.Mc].panoId == a && 3 !== this.Jj[this.Mc].recoType)) {
                    var c = this, d = this.LG(a);
                    !b && -1 !== d && this.Jj[d] && 3 !== this.Jj[d].recoType ? this.jp(d) : this.fW(function (a) {
                        for (var b = {}, d, i, k = q, l = [], m = 0, n = a.length; m < n; m++)
                            d = a[m].catlog, i = a[m].floor, j !== d && ("" === d && j !== i ? (k = o, b[i] || (b[i] = []), b[i].push(a[m])) : (b[De[d]] || (b[De[d]] = []), b[De[d]].push(a[m])));
                        for (var t in b)
                            k ? l.push({data: t + "F", index: t}) : l.push({data: Ee[t], index: t});
                        c.dG = b;
                        c.Bi = l;
                        c.hl(a);
                        0 == a.length ? c.J() : c.show()
                    })
                }
            }, CU: function () {
                if (!this.xi) {
                    var a = this.UV(this.Bi), b = K("div");
                    b.style.cssText = ["width:" + 134 * this.Bi.length + "px;", "overflow:hidden;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;"].join("");
                    b.innerHTML = a;
                    a = K("div");
                    a.appendChild(b);
                    a.style.cssText = "position:absolute;top:-25px;background:rgb(37,37,37);background:rgba(37,37,37,0.9);border-bottom:1px solid #4e596a;width:100%;line-height:25px;height:25px;overflow:scroll;outline:0";
                    new Ae(a, {ao: q, nx: o, Wh: q, li: q, Rm: q, SD: o, Wv: o, Sw: o});
                    this.A.appendChild(a);
                    for (var c = this, d = b.getElementsByTagName("span"), e = 0, f = d.length; e < f; e++)
                        b = d[e], w.F(b, "click", function () {
                            if (this.getAttribute("dataindex")) {
                                c.hl(c.dG[this.getAttribute("dataindex")]);
                                for (var a = 0, b = d.length; a < b; a++)
                                    d[a].style.color = "#FFFFFF";
                                this.style.color = "#3383FF"
                            }
                        });
                    this.xi = a
                }
            }, zU: function () {
                if (this.xi)
                    a = this.kK(this.Bi), this.iP.innerHTML = a;
                else {
                    var a = this.kK(this.Bi), b = K("ul"), c = this;
                    b.style.cssText = "list-style: none;padding:0px;margin:0px;display:block;width:60px;position:absolute;top:7px";
                    b.innerHTML = a;
                    w.F(b, "click", function (a) {
                        if (a = (a.srcElement || a.target).getAttribute("dataindex")) {
                            c.hl(c.dG[a]);
                            for (var d = b.getElementsByTagName("li"), e = 0, f = d.length; e < f; e++)
                                d[e].childNodes[0].getAttribute("dataindex") === a ? w.B.Oa(d[e], "pano_catlogLiActive") : w.B.Ob(d[e], "pano_catlogLiActive")
                        }
                    });
                    var a = K("div"), d = K("a"), e = K("span"), f = K("a"), g = K("span"), i = ["background:url(" + F.ea + "panorama/catlog_icon.png) no-repeat;", "display:block;width:10px;height:7px;margin:0 auto;"].join("");
                    e.style.cssText = i + "background-position:-18px 0;";
                    d.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                    g.style.cssText = i + "background-position:0 0;";
                    f.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                    f.style.top = this.k.imageHeight - 7 + "px";
                    a.style.cssText = "position:absolute;top:0px;left:0px;width:60px;";
                    d.appendChild(e);
                    f.appendChild(g);
                    w.F(d, "mouseover", function () {
                        var a = parseInt(b.style.top, 10);
                        7 !== a && (e.style.backgroundPosition = "-27px 0");
                        new sb({
                            wc: 60, Xb: tb.Zr, duration: 300, ja: function (c) {
                                b.style.top = a + (7 - a) * c + "px"
                            }
                        })
                    });
                    w.F(d, "mouseout", function () {
                        e.style.backgroundPosition = "-18px 0"
                    });
                    w.F(f, "mouseover", function () {
                        var a = parseInt(b.style.top, 10), d = c.k.imageHeight - 14;
                        if (!(parseInt(b.offsetHeight, 10) < d)) {
                            var e = d - parseInt(b.offsetHeight, 10) + 7;
                            e !== a && (g.style.backgroundPosition = "-9px 0");
                            new sb({
                                wc: 60, Xb: tb.Zr, duration: 300, ja: function (c) {
                                    b.style.top = a + (e - a) * c + "px"
                                }
                            })
                        }
                    });
                    w.F(f, "mouseout", function () {
                        g.style.backgroundPosition = "0 0"
                    });
                    a.appendChild(d);
                    a.appendChild(f);
                    d = K("div");
                    d.style.cssText = ["position:absolute;z-index:2001;left:20px;", "height:" + this.k.imageHeight + "px;", "width:62px;overflow:hidden;background:rgb(37,37,37);background:rgba(37,37,37,0.9);"].join("");
                    d.appendChild(b);
                    d.appendChild(a);
                    this.xi = d;
                    this.iP = b;
                    this.A.appendChild(d)
                }
            }, AU: function () {
                if (this.Bi && !(0 >= this.Bi.length)) {
                    var a = K("div");
                    a.innerHTML = this.qz;
                    a.style.cssText = "position:absolute;background:#252525";
                    this.A.appendChild(a);
                    this.cs = a;
                    this.Dc.Tf.style.left = this.Sf.width + 8 + "px";
                    this.xi && (this.xi.style.left = parseInt(this.xi.style.left, 10) + this.Sf.width + 8 + "px");
                    var b = this;
                    w.F(a, "click", function () {
                        b.G.cc(b.jV)
                    })
                }
            }, hl: function (a) {
                this.Jj = a;
                this.k.showCatalog && (0 < this.Bi.length ? (Sa() ? this.zU() : this.CU(), this.Dc.offsetLeft = 60) : (this.cs && (this.A.removeChild(this.cs), this.cs = p, this.Dc.Tf.style.left = "0px"), this.xi && (this.A.removeChild(this.xi), this.xi = p), this.Dc.offsetLeft = 0));
                var b = this.OV(a);
                Sa() && (this.Bi && 0 < this.Bi.length && this.k.showExit && this.qz) && (this.Dc.offsetLeft += this.Sf.width + 8, this.cs ? this.cs.innerHTML = this.qz : this.AU());
                this.Gh.innerHTML = b;
                this.Gh.style.width = (this.Sf.width + 8) * a.length + 8 + "px";
                a = this.A.offsetWidth;
                b = this.Gh.offsetWidth;
                this.Dc.hs && (b += this.Dc.hs());
                b < a - 2 * this.Dc.ri - this.Dc.offsetLeft ? this.A.style.width = b + this.Dc.offsetLeft + "px" : (this.A.style.width = isNaN(Number(this.k.maxWidth)) === o ? this.k.maxWidth : this.k.maxWidth + "px", b < this.A.offsetWidth - 2 * this.Dc.ri - this.Dc.offsetLeft && (this.A.style.width = b + this.Dc.offsetLeft + "px"));
                this.Dc.refresh();
                this.JA = this.Gh.children;
                this.Gh.appendChild(this.Mj);
                this.Mj.style.left = "-100000px";
                a = this.LG(this.G.Kb(), this.I_);
                -1 !== a && this.jp(a)
            }, UV: function (a) {
                for (var b = "", c, d = 0, e = a.length; d < e; d++)
                    c = '<div style="color:white;opacity:0.5;margin:0 35px;float:left;text-align: center"><span  dataIndex="' + a[d].index + '">' + a[d].data + "</span></div>", b += c;
                return b
            }, kK: function (a) {
                for (var b = "", c, d = 0, e = a.length; d < e; d++)
                    c = '<li class="pano_catlogLi"><span style="display:block;width:100%;" dataIndex="' + a[d].index + '">' + a[d].data + "</span></li>", b += c;
                return b
            }, OV: function (a) {
                for (var b, c, d, e, f = [], g = this.Sf.height, i = this.Sf.width, k = 0; k < a.length; k++)
                    b = a[k], recoType = b.recoType, d = b.panoId, e = b.name, c = b.heading, b = b.pitch, c = Sd.vK(d, c, b, 198, 108), b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + k + '"><img style="width:' + (i - 2) + "px;height:" + (g - 2) + 'px;" data-index="' + k + '" name="' + e + '" src="' + c + '" alt="' + e + '"/><span class="pano_photo_decs" data-index="' + k + '" style="width:' + i + "px;font-size:" + Math.floor(g / 6) + "px; line-height:" + Math.floor(g / 6) + 'px;"><em class="pano_poi_' + recoType + '"></em>' + e + "</span></a>", 3 === recoType ? Sa() ? (this.qz = b, this.jV = d, a.splice(k, 1), k--) : (b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + k + '"><img style="width:' + (i - 2) + "px;height:" + (g - 2) + 'px;" data-index="' + k + '" name="' + e + '" src="' + c + '" alt="' + e + '"/><div style="background:rgba(37,37,37,0.5);position:absolute;top:0px;left:0px;width:100%;height:100%;text-align: center;line-height:' + this.k.imageHeight + 'px;" data-index="' + k + '"><img src="' + F.ea + 'panorama/photoexit.png" style="border:none;vertical-align:middle;" data-index="' + k + '" alt=""/></div></a>', f.push(b)) : f.push(b);
                return f.join("")
            }, fW: function (a) {
                var b = this, c = this.G.Kb();
                c && this.ll.Ow(c, function (d) {
                    b.G.Kb() === c && a(d)
                })
            }, mc: function (a) {
                if (!Ua(a) || isNaN(a) || a < Tb || 3 < a)
                    a = this.defaultAnchor;
                var b = this.A, c = this.k.offset.width, d = this.k.offset.height;
                b.style.left = b.style.top = b.style.right = b.style.bottom = "auto";
                switch (a) {
                    case Tb:
                        b.style.top = d + "px";
                        b.style.left = c + "px";
                        break;
                    case Ub:
                        b.style.top = d + "px";
                        b.style.right = c + "px";
                        break;
                    case Vb:
                        b.style.bottom = d + "px";
                        b.style.left = c + "px";
                        break;
                    case 3:
                        b.style.bottom = d + "px", b.style.right = c + "px"
                }
            }, UO: function () {
                this.SO()
            }, SO: function () {
                var a = this;
                w.F(this.A, "touchstart", function (a) {
                    a.stopPropagation()
                });
                w.F(this.Nj, "click", function (b) {
                    if ((b = (b.srcElement || b.target).getAttribute("data-index")) && b != a.Mc)
                        a.jp(b), a.G.cc(a.Jj[b].panoId)
                });
                w.F(this.Gh, "mouseover", function (b) {
                    b = (b.srcElement || b.target).getAttribute("data-index");
                    b !== p && a.oJ(b, o)
                });
                this.G.addEventListener("size_changed", function () {
                    isNaN(Number(a.k.maxWidth)) && a.kp({maxWidth: a.k.maxWidth})
                })
            }, jp: function (a) {
                this.Mj.style.left = this.JA[a].offsetLeft + 8 + "px";
                this.Mj.setAttribute("data-index", this.JA[a].getAttribute("data-index"));
                this.Mc = a;
                this.oJ(a)
            }, oJ: function (a, b) {
                var c = this.Sf.width + 8, d = 0;
                this.Dc.hs && (d = this.Dc.hs() / 2);
                var e = this.Nj.offsetWidth - 2 * d, f = this.Gh.offsetLeft || this.Dc.x, f = f - d, g = -a * c;
                g > f && this.Dc.scrollTo(g + d);
                c = g - c;
                f -= e;
                c < f && (!b || b && 8 < g - f) && this.Dc.scrollTo(c + e + d)
            }, PW: function () {
                this.Dc = G() ? new Ae(this.Nj, {
                    ao: q,
                    nx: o,
                    Wh: q,
                    li: q,
                    Rm: q,
                    SD: o,
                    Wv: o,
                    Sw: o
                }) : new Fe(this.Nj)
            }, J: function () {
                this.A.style.visibility = "hidden"
            }, show: function () {
                this.A.style.visibility = "visible"
            }
        });
        function Fe(a) {
            this.A = a;
            this.Eg = a.children[0];
            this.kr = p;
            this.ri = 20;
            this.offsetLeft = 0;
            this.fa()
        }

        Fe.prototype = {
            fa: function () {
                this.Eg.style.position = "relative";
                this.refresh();
                this.Er();
                this.Dl()
            }, refresh: function () {
                this.En = this.A.offsetWidth - this.hs();
                this.iA = -(this.Eg.offsetWidth - this.En - this.ri);
                this.Pu = this.ri + this.offsetLeft;
                this.Eg.style.left = this.Pu + "px";
                this.Eg.children[0] && (this.kr = this.Eg.children[0].offsetWidth);
                this.Tf && (this.Tf.children[0].style.marginTop = this.cr.children[0].style.marginTop = this.Tf.offsetHeight / 2 - this.Tf.children[0].offsetHeight / 2 + "px")
            }, hs: function () {
                return 2 * this.ri
            }, Er: function () {
                this.cv = K("div");
                this.cv.innerHTML = '<a class="pano_photo_arrow_l" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0a\u4e00\u9875"><span class="pano_arrow_l"></span></a><a class="pano_photo_arrow_r" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0b\u4e00\u9875"><span class="pano_arrow_r"></span></a>';
                this.Tf = this.cv.children[0];
                this.cr = this.cv.children[1];
                this.A.appendChild(this.cv);
                this.Tf.children[0].style.marginTop = this.cr.children[0].style.marginTop = this.Tf.offsetHeight / 2 - this.Tf.children[0].offsetHeight / 2 + "px"
            }, Dl: function () {
                var a = this;
                w.F(this.Tf, "click", function () {
                    a.scrollTo(a.Eg.offsetLeft + a.En)
                });
                w.F(this.cr, "click", function () {
                    a.scrollTo(a.Eg.offsetLeft - a.En)
                })
            }, pT: function () {
                w.B.Ob(this.Tf, "pano_arrow_disable");
                w.B.Ob(this.cr, "pano_arrow_disable");
                var a = this.Eg.offsetLeft;
                a >= this.Pu && w.B.Oa(this.Tf, "pano_arrow_disable");
                a - this.En <= this.iA && w.B.Oa(this.cr, "pano_arrow_disable")
            }, scrollTo: function (a) {
                a = a < this.Eg.offsetLeft ? Math.ceil((a - this.ri - this.En) / this.kr) * this.kr + this.En + this.ri - 8 : Math.ceil((a - this.ri) / this.kr) * this.kr + this.ri;
                a < this.iA ? a = this.iA : a > this.Pu && (a = this.Pu);
                var b = this.Eg.offsetLeft, c = this;
                new sb({
                    wc: 60, Xb: tb.Zr, duration: 300, ja: function (d) {
                        c.Eg.style.left = b + (a - b) * d + "px"
                    }, finish: function () {
                        c.pT()
                    }
                })
            }
        };
        z.Map = La;
        z.Hotspot = gb;
        z.MapType = Pc;
        z.Point = H;
        z.Pixel = P;
        z.Size = L;
        z.Bounds = db;
        z.TileLayer = Dc;
        z.Projection = fc;
        z.MercatorProjection = Q;
        z.PerspectiveProjection = fb;
        z.Copyright = function (a, b, c) {
            this.id = a;
            this.Ua = b;
            this.content = c
        };
        z.Overlay = ic;
        z.Label = qc;
        z.GroundOverlay = rc;
        z.PointCollection = vc;
        z.Marker = S;
        z.Icon = mc;
        z.IconSequence = oc;
        z.Symbol = nc;
        z.Polyline = zc;
        z.Polygon = yc;
        z.InfoWindow = pc;
        z.Circle = Ac;
        z.Control = Sb;
        z.NavigationControl = hb;
        z.GeolocationControl = Wb;
        z.OverviewMapControl = kb;
        z.CopyrightControl = Xb;
        z.ScaleControl = jb;
        z.MapTypeControl = lb;
        z.PanoramaControl = Zb;
        z.TrafficLayer = Mc;
        z.CustomLayer = mb;
        z.ContextMenu = bc;
        z.MenuItem = ec;
        z.LocalSearch = $a;
        z.TransitRoute = od;
        z.DrivingRoute = rd;
        z.WalkingRoute = sd;
        z.Autocomplete = Dd;
        z.RouteSearch = xd;
        z.Geocoder = yd;
        z.LocalCity = Ad;
        z.Geolocation = Geolocation;
        z.Convertor = hc;
        z.BusLineSearch = Cd;
        z.Boundary = Bd;
        z.VectorCloudLayer = Kc;
        z.VectorTrafficLayer = Lc;
        z.Panorama = Na;
        z.PanoramaLabel = Jd;
        z.PanoramaService = ac;
        z.PanoramaCoverageLayer = $b;
        z.PanoramaFlashInterface = Qd;
        function R(a, b) {
            for (var c in b)
                a[c] = b[c]
        }

        R(window, {
            BMap: z, _jsload2: function (a, b) {
                ia.$x.ZW && ia.$x.set(a, b);
                J.dU(a, b)
            }, BMAP_API_VERSION: "2.0"
        });
        var V = La.prototype;
        R(V, {
            getBounds: V.Nd,
            getCenter: V.Aa,
            getMapType: V.la,
            getSize: V.Lb,
            setSize: V.vd,
            getViewport: V.xs,
            getZoom: V.U,
            centerAndZoom: V.ae,
            panTo: V.di,
            panBy: V.mg,
            setCenter: V.Hf,
            setCurrentCity: V.EE,
            setMapType: V.og,
            setViewport: V.jh,
            setZoom: V.Cc,
            highResolutionEnabled: V.NK,
            zoomTo: V.sg,
            zoomIn: V.eF,
            zoomOut: V.fF,
            addHotspot: V.Kv,
            removeHotspot: V.YX,
            clearHotspots: V.Hl,
            checkResize: V.gU,
            addControl: V.Iv,
            removeControl: V.uM,
            getContainer: V.Fa,
            addContextMenu: V.Un,
            removeContextMenu: V.Zo,
            addOverlay: V.ya,
            removeOverlay: V.Gb,
            clearOverlays: V.lJ,
            openInfoWindow: V.zb,
            closeInfoWindow: V.Lc,
            pointToOverlayPixel: V.Fe,
            overlayPixelToPoint: V.jM,
            getInfoWindow: V.Rg,
            getOverlays: V.Lw,
            getPanes: function () {
                return {
                    floatPane: this.Zd.LC,
                    markerMouseTarget: this.Zd.VD,
                    floatShadow: this.Zd.bK,
                    labelPane: this.Zd.OD,
                    markerPane: this.Zd.EL,
                    markerShadow: this.Zd.FL,
                    mapPane: this.Zd.Ms
                }
            },
            addTileLayer: V.Ig,
            removeTileLayer: V.hh,
            pixelToPoint: V.mb,
            pointToPixel: V.Vb,
            setFeatureStyle: V.ip,
            selectBaseElement: V.l2,
            setMapStyle: V.gt,
            enable3DBuilding: V.no,
            disable3DBuilding: V.PU,
            getPanorama: V.Xl
        });
        var Ge = Pc.prototype;
        R(Ge, {
            getTileLayer: Ge.rW,
            getMinZoom: Ge.yo,
            getMaxZoom: Ge.Wl,
            getProjection: Ge.Do,
            getTextColor: Ge.vs,
            getTips: Ge.ws
        });
        R(window, {BMAP_NORMAL_MAP: Ma, BMAP_PERSPECTIVE_MAP: Oa, BMAP_SATELLITE_MAP: Wa, BMAP_HYBRID_MAP: Qa});
        var He = Q.prototype;
        R(He, {lngLatToPoint: He.Vg, pointToLngLat: He.fi});
        var Ie = fb.prototype;
        R(Ie, {lngLatToPoint: Ie.Vg, pointToLngLat: Ie.fi});
        var Je = db.prototype;
        R(Je, {
            equals: Je.$a,
            containsPoint: Je.Cr,
            containsBounds: Je.rU,
            intersects: Je.Ds,
            extend: Je.extend,
            getCenter: Je.Aa,
            isEmpty: Je.kj,
            getSouthWest: Je.De,
            getNorthEast: Je.Af,
            toSpan: Je.VE
        });
        var Ke = ic.prototype;
        R(Ke, {isVisible: Ke.Ug, show: Ke.show, hide: Ke.J});
        ic.getZIndex = ic.cm;
        var Le = eb.prototype;
        R(Le, {
            openInfoWindow: Le.zb,
            closeInfoWindow: Le.Lc,
            enableMassClear: Le.Zi,
            disableMassClear: Le.RU,
            show: Le.show,
            hide: Le.J,
            getMap: Le.Gw,
            addContextMenu: Le.Un,
            removeContextMenu: Le.Zo
        });
        var Pe = S.prototype;
        R(Pe, {
            setIcon: Pe.Pb,
            getIcon: Pe.xo,
            setPosition: Pe.ha,
            getPosition: Pe.V,
            setOffset: Pe.He,
            getOffset: Pe.Bf,
            getLabel: Pe.dD,
            setLabel: Pe.Hm,
            setTitle: Pe.qc,
            setTop: Pe.ii,
            enableDragging: Pe.Sb,
            disableDragging: Pe.cC,
            setZIndex: Pe.lt,
            getMap: Pe.Gw,
            setAnimation: Pe.Gm,
            setShadow: Pe.Rx,
            hide: Pe.J,
            setRotation: Pe.mp,
            getRotation: Pe.zK
        });
        R(window, {BMAP_ANIMATION_DROP: 1, BMAP_ANIMATION_BOUNCE: 2});
        var Qe = qc.prototype;
        R(Qe, {
            setStyle: Qe.xd,
            setStyles: Qe.hi,
            setContent: Qe.Qc,
            setPosition: Qe.ha,
            getPosition: Qe.V,
            setOffset: Qe.He,
            getOffset: Qe.Bf,
            setTitle: Qe.qc,
            setZIndex: Qe.lt,
            getMap: Qe.Gw,
            getContent: Qe.bk
        });
        var Re = mc.prototype;
        R(Re, {
            setImageUrl: Re.DY,
            setSize: Re.vd,
            setAnchor: Re.mc,
            setImageOffset: Re.ft,
            setImageSize: Re.BY,
            setInfoWindowAnchor: Re.FY,
            setPrintImageUrl: Re.OY
        });
        var Se = pc.prototype;
        R(Se, {
            redraw: Se.Ud,
            setTitle: Se.qc,
            setContent: Se.Qc,
            getContent: Se.bk,
            getPosition: Se.V,
            enableMaximize: Se.Mg,
            disableMaximize: Se.qw,
            isOpen: Se.Ka,
            setMaxContent: Se.ht,
            maximize: Se.mx,
            enableAutoPan: Se.$r
        });
        var Te = kc.prototype;
        R(Te, {
            getPath: Te.ee,
            setPath: Te.Vd,
            setPositionAt: Te.Jm,
            getStrokeColor: Te.lW,
            setStrokeWeight: Te.pp,
            getStrokeWeight: Te.CK,
            setStrokeOpacity: Te.np,
            getStrokeOpacity: Te.mW,
            setFillOpacity: Te.dt,
            getFillOpacity: Te.JV,
            setStrokeStyle: Te.op,
            getStrokeStyle: Te.BK,
            getFillColor: Te.IV,
            getBounds: Te.Nd,
            enableEditing: Te.yf,
            disableEditing: Te.QU
        });
        var Ue = Ac.prototype;
        R(Ue, {setCenter: Ue.Hf, getCenter: Ue.Aa, getRadius: Ue.xK, setRadius: Ue.cf});
        var Ve = yc.prototype;
        R(Ve, {getPath: Ve.ee, setPath: Ve.Vd, setPositionAt: Ve.Jm});
        var We = gb.prototype;
        R(We, {getPosition: We.V, setPosition: We.ha, getText: We.mD, setText: We.kt});
        H.prototype.equals = H.prototype.$a;
        P.prototype.equals = P.prototype.$a;
        L.prototype.equals = L.prototype.$a;
        R(window, {
            BMAP_ANCHOR_TOP_LEFT: Tb,
            BMAP_ANCHOR_TOP_RIGHT: Ub,
            BMAP_ANCHOR_BOTTOM_LEFT: Vb,
            BMAP_ANCHOR_BOTTOM_RIGHT: 3
        });
        var Xe = Sb.prototype;
        R(Xe, {
            setAnchor: Xe.mc,
            getAnchor: Xe.RC,
            setOffset: Xe.He,
            getOffset: Xe.Bf,
            show: Xe.show,
            hide: Xe.J,
            isVisible: Xe.Ug,
            toString: Xe.toString
        });
        var Ye = hb.prototype;
        R(Ye, {getType: Ye.Ho, setType: Ye.Km});
        R(window, {
            BMAP_NAVIGATION_CONTROL_LARGE: 0,
            BMAP_NAVIGATION_CONTROL_SMALL: 1,
            BMAP_NAVIGATION_CONTROL_PAN: 2,
            BMAP_NAVIGATION_CONTROL_ZOOM: 3
        });
        var Ze = kb.prototype;
        R(Ze, {changeView: Ze.be, setSize: Ze.vd, getSize: Ze.Lb});
        var $e = jb.prototype;
        R($e, {getUnit: $e.vW, setUnit: $e.KE});
        R(window, {BMAP_UNIT_METRIC: "metric", BMAP_UNIT_IMPERIAL: "us"});
        var af = Xb.prototype;
        R(af, {addCopyright: af.Jv, removeCopyright: af.qE, getCopyright: af.Ul, getCopyrightCollection: af.YC});
        R(window, {BMAP_MAPTYPE_CONTROL_HORIZONTAL: Yb, BMAP_MAPTYPE_CONTROL_DROPDOWN: 1, BMAP_MAPTYPE_CONTROL_MAP: 2});
        var bf = Dc.prototype;
        R(bf, {getMapType: bf.la, getCopyright: bf.Ul, isTransparentPng: bf.Js});
        var cf = bc.prototype;
        R(cf, {addItem: cf.Lv, addSeparator: cf.jB, removeSeparator: cf.sE});
        var df = ec.prototype;
        R(df, {setText: df.kt});
        var ef = U.prototype;
        R(ef, {
            getStatus: ef.$l,
            setSearchCompleteCallback: ef.IE,
            getPageCapacity: ef.Xe,
            setPageCapacity: ef.lp,
            setLocation: ef.Im,
            disableFirstResultSelection: ef.dC,
            enableFirstResultSelection: ef.AC,
            gotoPage: ef.dm,
            searchNearby: ef.gp,
            searchInBounds: ef.Fm,
            search: ef.search
        });
        R(window, {
            BMAP_STATUS_SUCCESS: 0,
            BMAP_STATUS_CITY_LIST: 1,
            BMAP_STATUS_UNKNOWN_LOCATION: 2,
            BMAP_STATUS_UNKNOWN_ROUTE: 3,
            BMAP_STATUS_INVALID_KEY: 4,
            BMAP_STATUS_INVALID_REQUEST: 5,
            BMAP_STATUS_PERMISSION_DENIED: 6,
            BMAP_STATUS_SERVICE_UNAVAILABLE: 7,
            BMAP_STATUS_TIMEOUT: 8
        });
        R(window, {
            BMAP_POI_TYPE_NORMAL: 0,
            BMAP_POI_TYPE_BUSSTOP: 1,
            BMAP_POI_TYPE_BUSLINE: 2,
            BMAP_POI_TYPE_SUBSTOP: 3,
            BMAP_POI_TYPE_SUBLINE: 4
        });
        R(window, {
            BMAP_TRANSIT_POLICY_LEAST_TIME: 0,
            BMAP_TRANSIT_POLICY_LEAST_TRANSFER: 2,
            BMAP_TRANSIT_POLICY_LEAST_WALKING: 3,
            BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: 4,
            BMAP_LINE_TYPE_BUS: 0,
            BMAP_LINE_TYPE_SUBWAY: 1,
            BMAP_LINE_TYPE_FERRY: 2
        });
        var ff = nd.prototype;
        R(ff, {clearResults: ff.ze});
        pd = od.prototype;
        R(pd, {setPolicy: pd.jt, toString: pd.toString, setPageCapacity: pd.lp});
        R(window, {
            BMAP_DRIVING_POLICY_LEAST_TIME: 0,
            BMAP_DRIVING_POLICY_LEAST_DISTANCE: 1,
            BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: 2
        });
        R(window, {
            BMAP_MODE_DRIVING: "driving",
            BMAP_MODE_TRANSIT: "transit",
            BMAP_MODE_WALKING: "walking",
            BMAP_MODE_NAVIGATION: "navigation"
        });
        var gf = xd.prototype;
        R(gf, {routeCall: gf.FM});
        R(window, {BMAP_HIGHLIGHT_STEP: 1, BMAP_HIGHLIGHT_ROUTE: 2});
        R(window, {BMAP_ROUTE_TYPE_DRIVING: $c, BMAP_ROUTE_TYPE_WALKING: Zc});
        R(window, {BMAP_ROUTE_STATUS_NORMAL: ad, BMAP_ROUTE_STATUS_EMPTY: 1, BMAP_ROUTE_STATUS_ADDRESS: 2});
        var hf = rd.prototype;
        R(hf, {setPolicy: hf.jt});
        var jf = Dd.prototype;
        R(jf, {
            show: jf.show,
            hide: jf.J,
            setTypes: jf.JE,
            setLocation: jf.Im,
            search: jf.search,
            setInputValue: jf.Ox
        });
        R(mb.prototype, {});
        var kf = Bd.prototype;
        R(kf, {get: kf.get});
        R($b.prototype, {});
        R(bb.prototype, {});
        R(window, {BMAP_POINT_DENSITY_HIGH: 200, BMAP_POINT_DENSITY_MEDIUM: Oc, BMAP_POINT_DENSITY_LOW: 50});
        R(window, {
            BMAP_POINT_SHAPE_STAR: 1,
            BMAP_POINT_SHAPE_WATERDROP: 2,
            BMAP_POINT_SHAPE_CIRCLE: sc,
            BMAP_POINT_SHAPE_SQUARE: 4,
            BMAP_POINT_SHAPE_RHOMBUS: 5
        });
        R(window, {
            BMAP_POINT_SIZE_TINY: 1,
            BMAP_POINT_SIZE_SMALLER: 2,
            BMAP_POINT_SIZE_SMALL: 3,
            BMAP_POINT_SIZE_NORMAL: tc,
            BMAP_POINT_SIZE_BIG: 5,
            BMAP_POINT_SIZE_BIGGER: 6,
            BMAP_POINT_SIZE_HUGE: 7
        });
        R(window, {
            BMap_Symbol_SHAPE_CAMERA: 11,
            BMap_Symbol_SHAPE_WARNING: 12,
            BMap_Symbol_SHAPE_SMILE: 13,
            BMap_Symbol_SHAPE_CLOCK: 14,
            BMap_Symbol_SHAPE_POINT: 9,
            BMap_Symbol_SHAPE_PLANE: 10,
            BMap_Symbol_SHAPE_CIRCLE: 1,
            BMap_Symbol_SHAPE_RECTANGLE: 2,
            BMap_Symbol_SHAPE_RHOMBUS: 3,
            BMap_Symbol_SHAPE_STAR: 4,
            BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: 5,
            BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: 6,
            BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: 7,
            BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: 8
        });
        R(window, {BMAP_CONTEXT_MENU_ICON_ZOOMIN: cc, BMAP_CONTEXT_MENU_ICON_ZOOMOUT: dc});
        z.HT();
    })()
}
