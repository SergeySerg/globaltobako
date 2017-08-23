/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-applicationcache-audio-backgroundcliptext-backgroundsize-borderimage-borderradius-boxshadow-canvas-canvastext-cssanimations-csscolumns-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-flexbox-fontface-generatedcontent-geolocation-hashchange-history-hsla-indexeddb-inlinesvg-input-inputtypes-localstorage-multiplebgs-opacity-postmessage-rgba-sessionstorage-smil-svg-svgclippaths-textshadow-video-webgl-websockets-websqldatabase-webworkers-addtest-domprefixes-hasevent-prefixed-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
! function(e, t, n) {
	function r(e, t) {
		return typeof e === t
	}

	function a() {
		var e, t, n, a, o, i, s;
		for (var c in x)
			if (x.hasOwnProperty(c)) {
				if (e = [], t = x[c], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
					for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
				for (a = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) i = e[o], s = i.split("."), 1 === s.length ? Modernizr[s[0]] = a : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = a), b.push((a ? "" : "no-") + s.join("-"))
			}
	}

	function o(e) {
		var t = E.className,
			n = Modernizr._config.classPrefix || "";
		if (k && (t = t.baseVal), Modernizr._config.enableJSClass) {
			var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
			t = t.replace(r, "$1" + n + "js$2")
		}
		Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), k ? E.className.baseVal = t : E.className = t)
	}

	function i(e, t) {
		if ("object" == typeof e)
			for (var n in e) N(e, n) && i(n, e[n]);
		else {
			e = e.toLowerCase();
			var r = e.split("."),
				a = Modernizr[r[0]];
			if (2 == r.length && (a = a[r[1]]), "undefined" != typeof a) return Modernizr;
			t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), o([(t && 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t)
		}
		return Modernizr
	}

	function s() {
		return "function" != typeof t.createElement ? t.createElement(arguments[0]) : k ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
	}

	function c(e) {
		return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
			return t + n.toUpperCase()
		}).replace(/^-/, "")
	}

	function l(e, t) {
		return !!~("" + e).indexOf(t)
	}

	function d() {
		var e = t.body;
		return e || (e = s(k ? "svg" : "body"), e.fake = !0), e
	}

	function u(e, n, r, a) {
		var o, i, c, l, u = "modernizr",
			f = s("div"),
			p = d();
		if (parseInt(r, 10))
			for (; r--;) c = s("div"), c.id = a ? a[r] : u + (r + 1), f.appendChild(c);
		return o = s("style"), o.type = "text/css", o.id = "s" + u, (p.fake ? p : f).appendChild(o), p.appendChild(f), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), f.id = u, p.fake && (p.style.background = "", p.style.overflow = "hidden", l = E.style.overflow, E.style.overflow = "hidden", E.appendChild(p)), i = n(f, e), p.fake ? (p.parentNode.removeChild(p), E.style.overflow = l, E.offsetHeight) : f.parentNode.removeChild(f), !!i
	}

	function f(e, t) {
		return function() {
			return e.apply(t, arguments)
		}
	}

	function p(e, t, n) {
		var a;
		for (var o in e)
			if (e[o] in t) return n === !1 ? e[o] : (a = t[e[o]], r(a, "function") ? f(a, n || t) : a);
		return !1
	}

	function m(e) {
		return e.replace(/([A-Z])/g, function(e, t) {
			return "-" + t.toLowerCase()
		}).replace(/^ms-/, "-ms-")
	}

	function g(t, r) {
		var a = t.length;
		if ("CSS" in e && "supports" in e.CSS) {
			for (; a--;)
				if (e.CSS.supports(m(t[a]), r)) return !0;
			return !1
		}
		if ("CSSSupportsRule" in e) {
			for (var o = []; a--;) o.push("(" + m(t[a]) + ":" + r + ")");
			return o = o.join(" or "), u("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
				return "absolute" == getComputedStyle(e, null).position
			})
		}
		return n
	}

	function h(e, t, a, o) {
		function i() {
			u && (delete q.style, delete q.modElem)
		}
		if (o = r(o, "undefined") ? !1 : o, !r(a, "undefined")) {
			var d = g(e, a);
			if (!r(d, "undefined")) return d
		}
		for (var u, f, p, m, h, v = ["modernizr", "tspan", "samp"]; !q.style && v.length;) u = !0, q.modElem = s(v.shift()), q.style = q.modElem.style;
		for (p = e.length, f = 0; p > f; f++)
			if (m = e[f], h = q.style[m], l(m, "-") && (m = c(m)), q.style[m] !== n) {
				if (o || r(a, "undefined")) return i(), "pfx" == t ? m : !0;
				try {
					q.style[m] = a
				} catch (y) {}
				if (q.style[m] != h) return i(), "pfx" == t ? m : !0
			}
		return i(), !1
	}

	function v(e, t, n, a, o) {
		var i = e.charAt(0).toUpperCase() + e.slice(1),
			s = (e + " " + M.join(i + " ") + i).split(" ");
		return r(t, "string") || r(t, "undefined") ? h(s, t, a, o) : (s = (e + " " + P.join(i + " ") + i).split(" "), p(s, t, n))
	}

	function y(e, t, r) {
		return v(e, n, n, t, r)
	}
	var b = [],
		x = [],
		T = {
			_version: "3.3.1",
			_config: {
				classPrefix: "",
				enableClasses: !0,
				enableJSClass: !0,
				usePrefixes: !0
			},
			_q: [],
			on: function(e, t) {
				var n = this;
				setTimeout(function() {
					t(n[e])
				}, 0)
			},
			addTest: function(e, t, n) {
				x.push({
					name: e,
					fn: t,
					options: n
				})
			},
			addAsyncTest: function(e) {
				x.push({
					name: null,
					fn: e
				})
			}
		},
		Modernizr = function() {};
	Modernizr.prototype = T, Modernizr = new Modernizr, Modernizr.addTest("applicationcache", "applicationCache" in e), Modernizr.addTest("geolocation", "geolocation" in navigator), Modernizr.addTest("history", function() {
		var t = navigator.userAgent;
		return -1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") ? e.history && "pushState" in e.history : !1
	}), Modernizr.addTest("postmessage", "postMessage" in e), Modernizr.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
	var w = !1;
	try {
		w = "WebSocket" in e && 2 === e.WebSocket.CLOSING
	} catch (S) {}
	Modernizr.addTest("websockets", w), Modernizr.addTest("localstorage", function() {
		var e = "modernizr";
		try {
			return localStorage.setItem(e, e), localStorage.removeItem(e), !0
		} catch (t) {
			return !1
		}
	}), Modernizr.addTest("sessionstorage", function() {
		var e = "modernizr";
		try {
			return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0
		} catch (t) {
			return !1
		}
	}), Modernizr.addTest("websqldatabase", "openDatabase" in e), Modernizr.addTest("webworkers", "Worker" in e);
	var C = T._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
	T._prefixes = C;
	var E = t.documentElement,
		k = "svg" === E.nodeName.toLowerCase();
	k || ! function(e, t) {
		function n(e, t) {
			var n = e.createElement("p"),
				r = e.getElementsByTagName("head")[0] || e.documentElement;
			return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
		}

		function r() {
			var e = b.elements;
			return "string" == typeof e ? e.split(" ") : e
		}

		function a(e, t) {
			var n = b.elements;
			"string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), b.elements = n + " " + e, l(t)
		}

		function o(e) {
			var t = y[e[h]];
			return t || (t = {}, v++, e[h] = v, y[v] = t), t
		}

		function i(e, n, r) {
			if (n || (n = t), u) return n.createElement(e);
			r || (r = o(n));
			var a;
			return a = r.cache[e] ? r.cache[e].cloneNode() : g.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !a.canHaveChildren || m.test(e) || a.tagUrn ? a : r.frag.appendChild(a)
		}

		function s(e, n) {
			if (e || (e = t), u) return e.createDocumentFragment();
			n = n || o(e);
			for (var a = n.frag.cloneNode(), i = 0, s = r(), c = s.length; c > i; i++) a.createElement(s[i]);
			return a
		}

		function c(e, t) {
			t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
				return b.shivMethods ? i(n, e, t) : t.createElem(n)
			}, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
					return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
				}) + ");return n}")(b, t.frag)
		}

		function l(e) {
			e || (e = t);
			var r = o(e);
			return !b.shivCSS || d || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || c(e, r), e
		}
		var d, u, f = "3.7.3",
			p = e.html5 || {},
			m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
			g = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
			h = "_html5shiv",
			v = 0,
			y = {};
		! function() {
			try {
				var e = t.createElement("a");
				e.innerHTML = "<xyz></xyz>", d = "hidden" in e, u = 1 == e.childNodes.length || function() {
						t.createElement("a");
						var e = t.createDocumentFragment();
						return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
					}()
			} catch (n) {
				d = !0, u = !0
			}
		}();
		var b = {
			elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
			version: f,
			shivCSS: p.shivCSS !== !1,
			supportsUnknownElements: u,
			shivMethods: p.shivMethods !== !1,
			type: "default",
			shivDocument: l,
			createElement: i,
			createDocumentFragment: s,
			addElements: a
		};
		e.html5 = b, l(t), "object" == typeof module && module.exports && (module.exports = b)
	}("undefined" != typeof e ? e : this, t);
	var _ = "Moz O ms Webkit",
		P = T._config.usePrefixes ? _.toLowerCase().split(" ") : [];
	T._domPrefixes = P;
	var N;
	! function() {
		var e = {}.hasOwnProperty;
		N = r(e, "undefined") || r(e.call, "undefined") ? function(e, t) {
			return t in e && r(e.constructor.prototype[t], "undefined")
		} : function(t, n) {
			return e.call(t, n)
		}
	}(), T._l = {}, T.on = function(e, t) {
		this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function() {
			Modernizr._trigger(e, Modernizr[e])
		}, 0)
	}, T._trigger = function(e, t) {
		if (this._l[e]) {
			var n = this._l[e];
			setTimeout(function() {
				var e, r;
				for (e = 0; e < n.length; e++)(r = n[e])(t)
			}, 0), delete this._l[e]
		}
	}, Modernizr._q.push(function() {
		T.addTest = i
	});
	var R = function() {
		function e(e, t) {
			var a;
			return e ? (t && "string" != typeof t || (t = s(t || "div")), e = "on" + e, a = e in t, !a && r && (t.setAttribute || (t = s("div")), t.setAttribute(e, ""), a = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), a) : !1
		}
		var r = !("onblur" in t.documentElement);
		return e
	}();
	T.hasEvent = R, Modernizr.addTest("hashchange", function() {
		return R("hashchange", e) === !1 ? !1 : t.documentMode === n || t.documentMode > 7
	}), Modernizr.addTest("audio", function() {
		var e = s("audio"),
			t = !1;
		try {
			(t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), t.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), t.opus = e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
		} catch (n) {}
		return t
	}), Modernizr.addTest("canvas", function() {
		var e = s("canvas");
		return !(!e.getContext || !e.getContext("2d"))
	}), Modernizr.addTest("canvastext", function() {
		return Modernizr.canvas === !1 ? !1 : "function" == typeof s("canvas").getContext("2d").fillText
	}), Modernizr.addTest("video", function() {
		var e = s("video"),
			t = !1;
		try {
			(t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
		} catch (n) {}
		return t
	}), Modernizr.addTest("webgl", function() {
		var t = s("canvas"),
			n = "probablySupportsContext" in t ? "probablySupportsContext" : "supportsContext";
		return n in t ? t[n]("webgl") || t[n]("experimental-webgl") : "WebGLRenderingContext" in e
	}), Modernizr.addTest("cssgradients", function() {
		for (var e, t = "background-image:", n = "gradient(linear,left top,right bottom,from(#9f9),to(white));", r = "", a = 0, o = C.length - 1; o > a; a++) e = 0 === a ? "to " : "", r += t + C[a] + "linear-gradient(" + e + "left top, #9f9, white);";
		Modernizr._config.usePrefixes && (r += t + "-webkit-" + n);
		var i = s("a"),
			c = i.style;
		return c.cssText = r, ("" + c.backgroundImage).indexOf("gradient") > -1
	}), Modernizr.addTest("multiplebgs", function() {
		var e = s("a").style;
		return e.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(e.background)
	}), Modernizr.addTest("opacity", function() {
		var e = s("a").style;
		return e.cssText = C.join("opacity:.55;"), /^0.55$/.test(e.opacity)
	}), Modernizr.addTest("rgba", function() {
		var e = s("a").style;
		return e.cssText = "background-color:rgba(150,255,150,.5)", ("" + e.backgroundColor).indexOf("rgba") > -1
	}), Modernizr.addTest("inlinesvg", function() {
		var e = s("div");
		return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI)
	});
	var z = s("input"),
		$ = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
		A = {};
	Modernizr.input = function(t) {
		for (var n = 0, r = t.length; r > n; n++) A[t[n]] = !!(t[n] in z);
		return A.list && (A.list = !(!s("datalist") || !e.HTMLDataListElement)), A
	}($);
	var O = "search tel url email datetime date month week time datetime-local number range color".split(" "),
		L = {};
	Modernizr.inputtypes = function(e) {
		for (var r, a, o, i = e.length, s = "1)", c = 0; i > c; c++) z.setAttribute("type", r = e[c]), o = "text" !== z.type && "style" in z, o && (z.value = s, z.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && z.style.WebkitAppearance !== n ? (E.appendChild(z), a = t.defaultView, o = a.getComputedStyle && "textfield" !== a.getComputedStyle(z, null).WebkitAppearance && 0 !== z.offsetHeight, E.removeChild(z)) : /^(search|tel)$/.test(r) || (o = /^(url|email)$/.test(r) ? z.checkValidity && z.checkValidity() === !1 : z.value != s)), L[e[c]] = !!o;
		return L
	}(O), Modernizr.addTest("hsla", function() {
		var e = s("a").style;
		return e.cssText = "background-color:hsla(120,40%,100%,.5)", l(e.backgroundColor, "rgba") || l(e.backgroundColor, "hsla")
	});
	var B = "CSS" in e && "supports" in e.CSS,
		j = "supportsCSS" in e;
	Modernizr.addTest("supports", B || j);
	var F = {}.toString;
	Modernizr.addTest("svgclippaths", function() {
		return !!t.createElementNS && /SVGClipPath/.test(F.call(t.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
	}), Modernizr.addTest("smil", function() {
		return !!t.createElementNS && /SVGAnimate/.test(F.call(t.createElementNS("http://www.w3.org/2000/svg", "animate")))
	});
	var M = T._config.usePrefixes ? _.split(" ") : [];
	T._cssomPrefixes = M;
	var I = function(t) {
		var r, a = C.length,
			o = e.CSSRule;
		if ("undefined" == typeof o) return n;
		if (!t) return !1;
		if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in o) return "@" + t;
		for (var i = 0; a > i; i++) {
			var s = C[i],
				c = s.toUpperCase() + "_" + r;
			if (c in o) return "@-" + s.toLowerCase() + "-" + t
		}
		return !1
	};
	T.atRule = I;
	var D = T.testStyles = u,
		W = function() {
			var e = navigator.userAgent,
				t = e.match(/applewebkit\/([0-9]+)/gi) && parseFloat(RegExp.$1),
				n = e.match(/w(eb)?osbrowser/gi),
				r = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9,
				a = 533 > t && e.match(/android/gi);
			return n || a || r
		}();
	W ? Modernizr.addTest("fontface", !1) : D('@font-face {font-family:"font";src:url("https://")}', function(e, n) {
		var r = t.getElementById("smodernizr"),
			a = r.sheet || r.styleSheet,
			o = a ? a.cssRules && a.cssRules[0] ? a.cssRules[0].cssText : a.cssText || "" : "",
			i = /src/i.test(o) && 0 === o.indexOf(n.split(" ")[0]);
		Modernizr.addTest("fontface", i)
	}), D('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function(e) {
		Modernizr.addTest("generatedcontent", e.offsetHeight >= 7)
	});
	var V = {
		elem: s("modernizr")
	};
	Modernizr._q.push(function() {
		delete V.elem
	});
	var q = {
		style: V.elem.style
	};
	Modernizr._q.unshift(function() {
		delete q.style
	});
	var H = T.testProp = function(e, t, r) {
		return h([e], n, t, r)
	};
	Modernizr.addTest("textshadow", H("textShadow", "1px 1px")), T.testAllProps = v;
	var U, G = T.prefixed = function(e, t, n) {
		return 0 === e.indexOf("@") ? I(e) : (-1 != e.indexOf("-") && (e = c(e)), t ? v(e, t, n) : v(e, "pfx"))
	};
	try {
		U = G("indexedDB", e)
	} catch (S) {}
	Modernizr.addTest("indexeddb", !!U), U && Modernizr.addTest("indexeddb.deletedatabase", "deleteDatabase" in U), T.testAllProps = y, Modernizr.addTest("cssanimations", y("animationName", "a", !0)), Modernizr.addTest("backgroundsize", y("backgroundSize", "100%", !0)), Modernizr.addTest("borderimage", y("borderImage", "url() 1", !0)), Modernizr.addTest("borderradius", y("borderRadius", "0px", !0)), Modernizr.addTest("boxshadow", y("boxShadow", "1px 1px", !0)),
		function() {
			Modernizr.addTest("csscolumns", function() {
				var e = !1,
					t = y("columnCount");
				try {
					(e = !!t) && (e = new Boolean(e))
				} catch (n) {}
				return e
			});
			for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], r = 0; r < n.length; r++) e = n[r].toLowerCase(), t = y("column" + n[r]), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || y(n[r])), Modernizr.addTest("csscolumns." + e, t)
		}(), Modernizr.addTest("flexbox", y("flexBasis", "1px", !0)), Modernizr.addTest("cssreflections", y("boxReflect", "above", !0)), Modernizr.addTest("csstransforms", function() {
		return -1 === navigator.userAgent.indexOf("Android 2.") && y("transform", "scale(1)", !0)
	}), Modernizr.addTest("csstransforms3d", function() {
		var e = !!y("perspective", "1px", !0),
			t = Modernizr._config.usePrefixes;
		if (e && (!t || "webkitPerspective" in E.style)) {
			var n, r = "#modernizr{width:0;height:0}";
			Modernizr.supports ? n = "@supports (perspective: 1px)" : (n = "@media (transform-3d)", t && (n += ",(-webkit-transform-3d)")), n += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", D(r + n, function(t) {
				e = 7 === t.offsetWidth && 18 === t.offsetHeight
			})
		}
		return e
	}), Modernizr.addTest("csstransitions", y("transition", "all", !0)), Modernizr.addTest("backgroundcliptext", function() {
		return y("backgroundClip", "text")
	}), a(), o(b), delete T.addTest, delete T.addAsyncTest;
	for (var J = 0; J < Modernizr._q.length; J++) Modernizr._q[J]();
	e.Modernizr = Modernizr
}(window, document);;
/*! VelocityJS.org (1.2.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
! function(e) {
	function t(e) {
		var t = e.length,
			r = $.type(e);
		return "function" === r || $.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
	}
	if (!e.jQuery) {
		var $ = function(e, t) {
			return new $.fn.init(e, t)
		};
		$.isWindow = function(e) {
			return null != e && e == e.window
		}, $.type = function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? a[o.call(e)] || "object" : typeof e
		}, $.isArray = Array.isArray || function(e) {
				return "array" === $.type(e)
			}, $.isPlainObject = function(e) {
			var t;
			if (!e || "object" !== $.type(e) || e.nodeType || $.isWindow(e)) return !1;
			try {
				if (e.constructor && !n.call(e, "constructor") && !n.call(e.constructor.prototype, "isPrototypeOf")) return !1
			} catch (r) {
				return !1
			}
			for (t in e);
			return void 0 === t || n.call(e, t)
		}, $.each = function(e, r, a) {
			var n, o = 0,
				i = e.length,
				s = t(e);
			if (a) {
				if (s)
					for (; i > o && (n = r.apply(e[o], a), n !== !1); o++);
				else
					for (o in e)
						if (n = r.apply(e[o], a), n === !1) break
			} else if (s)
				for (; i > o && (n = r.call(e[o], o, e[o]), n !== !1); o++);
			else
				for (o in e)
					if (n = r.call(e[o], o, e[o]), n === !1) break; return e
		}, $.data = function(e, t, a) {
			if (void 0 === a) {
				var n = e[$.expando],
					o = n && r[n];
				if (void 0 === t) return o;
				if (o && t in o) return o[t]
			} else if (void 0 !== t) {
				var n = e[$.expando] || (e[$.expando] = ++$.uuid);
				return r[n] = r[n] || {}, r[n][t] = a, a
			}
		}, $.removeData = function(e, t) {
			var a = e[$.expando],
				n = a && r[a];
			n && $.each(t, function(e, t) {
				delete n[t]
			})
		}, $.extend = function() {
			var e, t, r, a, n, o, i = arguments[0] || {},
				s = 1,
				l = arguments.length,
				u = !1;
			for ("boolean" == typeof i && (u = i, i = arguments[s] || {}, s++), "object" != typeof i && "function" !== $.type(i) && (i = {}), s === l && (i = this, s--); l > s; s++)
				if (null != (n = arguments[s]))
					for (a in n) e = i[a], r = n[a], i !== r && (u && r && ($.isPlainObject(r) || (t = $.isArray(r))) ? (t ? (t = !1, o = e && $.isArray(e) ? e : []) : o = e && $.isPlainObject(e) ? e : {}, i[a] = $.extend(u, o, r)) : void 0 !== r && (i[a] = r));
			return i
		}, $.queue = function(e, r, a) {
			function n(e, r) {
				var a = r || [];
				return null != e && (t(Object(e)) ? ! function(e, t) {
					for (var r = +t.length, a = 0, n = e.length; r > a;) e[n++] = t[a++];
					if (r !== r)
						for (; void 0 !== t[a];) e[n++] = t[a++];
					return e.length = n, e
				}(a, "string" == typeof e ? [e] : e) : [].push.call(a, e)), a
			}
			if (e) {
				r = (r || "fx") + "queue";
				var o = $.data(e, r);
				return a ? (!o || $.isArray(a) ? o = $.data(e, r, n(a)) : o.push(a), o) : o || []
			}
		}, $.dequeue = function(e, t) {
			$.each(e.nodeType ? [e] : e, function(e, r) {
				t = t || "fx";
				var a = $.queue(r, t),
					n = a.shift();
				"inprogress" === n && (n = a.shift()), n && ("fx" === t && a.unshift("inprogress"), n.call(r, function() {
					$.dequeue(r, t)
				}))
			})
		}, $.fn = $.prototype = {
			init: function(e) {
				if (e.nodeType) return this[0] = e, this;
				throw new Error("Not a DOM node.")
			},
			offset: function() {
				var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
					top: 0,
					left: 0
				};
				return {
					top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
					left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
				}
			},
			position: function() {
				function e() {
					for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
					return e || document
				}
				var t = this[0],
					e = e.apply(t),
					r = this.offset(),
					a = /^(?:body|html)$/i.test(e.nodeName) ? {
						top: 0,
						left: 0
					} : $(e).offset();
				return r.top -= parseFloat(t.style.marginTop) || 0, r.left -= parseFloat(t.style.marginLeft) || 0, e.style && (a.top += parseFloat(e.style.borderTopWidth) || 0, a.left += parseFloat(e.style.borderLeftWidth) || 0), {
					top: r.top - a.top,
					left: r.left - a.left
				}
			}
		};
		var r = {};
		$.expando = "velocity" + (new Date).getTime(), $.uuid = 0;
		for (var a = {}, n = a.hasOwnProperty, o = a.toString, i = "Boolean Number String Function Array Date RegExp Object Error".split(" "), s = 0; s < i.length; s++) a["[object " + i[s] + "]"] = i[s].toLowerCase();
		$.fn.init.prototype = $.fn, e.Velocity = {
			Utilities: $
		}
	}
}(window),
	function(e) {
		"object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
	}(function() {
		return function(e, t, r, a) {
			function n(e) {
				for (var t = -1, r = e ? e.length : 0, a = []; ++t < r;) {
					var n = e[t];
					n && a.push(n)
				}
				return a
			}

			function o(e) {
				return g.isWrapped(e) ? e = [].slice.call(e) : g.isNode(e) && (e = [e]), e
			}

			function i(e) {
				var t = $.data(e, "velocity");
				return null === t ? a : t
			}

			function s(e) {
				return function(t) {
					return Math.round(t * e) * (1 / e)
				}
			}

			function l(e, r, a, n) {
				function o(e, t) {
					return 1 - 3 * t + 3 * e
				}

				function i(e, t) {
					return 3 * t - 6 * e
				}

				function s(e) {
					return 3 * e
				}

				function l(e, t, r) {
					return ((o(t, r) * e + i(t, r)) * e + s(t)) * e
				}

				function u(e, t, r) {
					return 3 * o(t, r) * e * e + 2 * i(t, r) * e + s(t)
				}

				function c(t, r) {
					for (var n = 0; m > n; ++n) {
						var o = u(r, e, a);
						if (0 === o) return r;
						var i = l(r, e, a) - t;
						r -= i / o
					}
					return r
				}

				function p() {
					for (var t = 0; b > t; ++t) w[t] = l(t * x, e, a)
				}

				function f(t, r, n) {
					var o, i, s = 0;
					do i = r + (n - r) / 2, o = l(i, e, a) - t, o > 0 ? n = i : r = i; while (Math.abs(o) > h && ++s < v);
					return i
				}

				function d(t) {
					for (var r = 0, n = 1, o = b - 1; n != o && w[n] <= t; ++n) r += x;
					--n;
					var i = (t - w[n]) / (w[n + 1] - w[n]),
						s = r + i * x,
						l = u(s, e, a);
					return l >= y ? c(t, s) : 0 == l ? s : f(t, r, r + x)
				}

				function g() {
					V = !0, (e != r || a != n) && p()
				}
				var m = 4,
					y = .001,
					h = 1e-7,
					v = 10,
					b = 11,
					x = 1 / (b - 1),
					S = "Float32Array" in t;
				if (4 !== arguments.length) return !1;
				for (var P = 0; 4 > P; ++P)
					if ("number" != typeof arguments[P] || isNaN(arguments[P]) || !isFinite(arguments[P])) return !1;
				e = Math.min(e, 1), a = Math.min(a, 1), e = Math.max(e, 0), a = Math.max(a, 0);
				var w = S ? new Float32Array(b) : new Array(b),
					V = !1,
					C = function(t) {
						return V || g(), e === r && a === n ? t : 0 === t ? 0 : 1 === t ? 1 : l(d(t), r, n)
					};
				C.getControlPoints = function() {
					return [{
						x: e,
						y: r
					}, {
						x: a,
						y: n
					}]
				};
				var T = "generateBezier(" + [e, r, a, n] + ")";
				return C.toString = function() {
					return T
				}, C
			}

			function u(e, t) {
				var r = e;
				return g.isString(e) ? v.Easings[e] || (r = !1) : r = g.isArray(e) && 1 === e.length ? s.apply(null, e) : g.isArray(e) && 2 === e.length ? b.apply(null, e.concat([t])) : g.isArray(e) && 4 === e.length ? l.apply(null, e) : !1, r === !1 && (r = v.Easings[v.defaults.easing] ? v.defaults.easing : h), r
			}

			function c(e) {
				if (e) {
					var t = (new Date).getTime(),
						r = v.State.calls.length;
					r > 1e4 && (v.State.calls = n(v.State.calls));
					for (var o = 0; r > o; o++)
						if (v.State.calls[o]) {
							var s = v.State.calls[o],
								l = s[0],
								u = s[2],
								f = s[3],
								d = !!f,
								m = null;
							f || (f = v.State.calls[o][3] = t - 16);
							for (var y = Math.min((t - f) / u.duration, 1), h = 0, b = l.length; b > h; h++) {
								var S = l[h],
									w = S.element;
								if (i(w)) {
									var V = !1;
									if (u.display !== a && null !== u.display && "none" !== u.display) {
										if ("flex" === u.display) {
											var C = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
											$.each(C, function(e, t) {
												x.setPropertyValue(w, "display", t)
											})
										}
										x.setPropertyValue(w, "display", u.display)
									}
									u.visibility !== a && "hidden" !== u.visibility && x.setPropertyValue(w, "visibility", u.visibility);
									for (var T in S)
										if ("element" !== T) {
											var k = S[T],
												A, F = g.isString(k.easing) ? v.Easings[k.easing] : k.easing;
											if (1 === y) A = k.endValue;
											else {
												var E = k.endValue - k.startValue;
												if (A = k.startValue + E * F(y, u, E), !d && A === k.currentValue) continue
											}
											if (k.currentValue = A, "tween" === T) m = A;
											else {
												if (x.Hooks.registered[T]) {
													var j = x.Hooks.getRoot(T),
														H = i(w).rootPropertyValueCache[j];
													H && (k.rootPropertyValue = H)
												}
												var N = x.setPropertyValue(w, T, k.currentValue + (0 === parseFloat(A) ? "" : k.unitType), k.rootPropertyValue, k.scrollData);
												x.Hooks.registered[T] && (i(w).rootPropertyValueCache[j] = x.Normalizations.registered[j] ? x.Normalizations.registered[j]("extract", null, N[1]) : N[1]), "transform" === N[0] && (V = !0)
											}
										}
									u.mobileHA && i(w).transformCache.translate3d === a && (i(w).transformCache.translate3d = "(0px, 0px, 0px)", V = !0), V && x.flushTransformCache(w)
								}
							}
							u.display !== a && "none" !== u.display && (v.State.calls[o][2].display = !1), u.visibility !== a && "hidden" !== u.visibility && (v.State.calls[o][2].visibility = !1), u.progress && u.progress.call(s[1], s[1], y, Math.max(0, f + u.duration - t), f, m), 1 === y && p(o)
						}
				}
				v.State.isTicking && P(c)
			}

			function p(e, t) {
				if (!v.State.calls[e]) return !1;
				for (var r = v.State.calls[e][0], n = v.State.calls[e][1], o = v.State.calls[e][2], s = v.State.calls[e][4], l = !1, u = 0, c = r.length; c > u; u++) {
					var p = r[u].element;
					if (t || o.loop || ("none" === o.display && x.setPropertyValue(p, "display", o.display), "hidden" === o.visibility && x.setPropertyValue(p, "visibility", o.visibility)), o.loop !== !0 && ($.queue(p)[1] === a || !/\.velocityQueueEntryFlag/i.test($.queue(p)[1])) && i(p)) {
						i(p).isAnimating = !1, i(p).rootPropertyValueCache = {};
						var f = !1;
						$.each(x.Lists.transforms3D, function(e, t) {
							var r = /^scale/.test(t) ? 1 : 0,
								n = i(p).transformCache[t];
							i(p).transformCache[t] !== a && new RegExp("^\\(" + r + "[^.]").test(n) && (f = !0, delete i(p).transformCache[t])
						}), o.mobileHA && (f = !0, delete i(p).transformCache.translate3d), f && x.flushTransformCache(p), x.Values.removeClass(p, "velocity-animating")
					}
					if (!t && o.complete && !o.loop && u === c - 1) try {
						o.complete.call(n, n)
					} catch (d) {
						setTimeout(function() {
							throw d
						}, 1)
					}
					s && o.loop !== !0 && s(n), i(p) && o.loop === !0 && !t && ($.each(i(p).tweensContainer, function(e, t) {
						/^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
					}), v(p, "reverse", {
						loop: !0,
						delay: o.delay
					})), o.queue !== !1 && $.dequeue(p, o.queue)
				}
				v.State.calls[e] = !1;
				for (var g = 0, m = v.State.calls.length; m > g; g++)
					if (v.State.calls[g] !== !1) {
						l = !0;
						break
					}
				l === !1 && (v.State.isTicking = !1, delete v.State.calls, v.State.calls = [])
			}
			var f = function() {
					if (r.documentMode) return r.documentMode;
					for (var e = 7; e > 4; e--) {
						var t = r.createElement("div");
						if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
					}
					return a
				}(),
				d = function() {
					var e = 0;
					return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
							var r = (new Date).getTime(),
								a;
							return a = Math.max(0, 16 - (r - e)), e = r + a, setTimeout(function() {
								t(r + a)
							}, a)
						}
				}(),
				g = {
					isString: function(e) {
						return "string" == typeof e
					},
					isArray: Array.isArray || function(e) {
						return "[object Array]" === Object.prototype.toString.call(e)
					},
					isFunction: function(e) {
						return "[object Function]" === Object.prototype.toString.call(e)
					},
					isNode: function(e) {
						return e && e.nodeType
					},
					isNodeList: function(e) {
						return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== a && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
					},
					isWrapped: function(e) {
						return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
					},
					isSVG: function(e) {
						return t.SVGElement && e instanceof t.SVGElement
					},
					isEmptyObject: function(e) {
						for (var t in e) return !1;
						return !0
					}
				},
				$, m = !1;
			if (e.fn && e.fn.jquery ? ($ = e, m = !0) : $ = t.Velocity.Utilities, 8 >= f && !m) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
			if (7 >= f) return void(jQuery.fn.velocity = jQuery.fn.animate);
			var y = 400,
				h = "swing",
				v = {
					State: {
						isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
						isAndroid: /Android/i.test(navigator.userAgent),
						isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
						isChrome: t.chrome,
						isFirefox: /Firefox/i.test(navigator.userAgent),
						prefixElement: r.createElement("div"),
						prefixMatches: {},
						scrollAnchor: null,
						scrollPropertyLeft: null,
						scrollPropertyTop: null,
						isTicking: !1,
						calls: []
					},
					CSS: {},
					Utilities: $,
					Redirects: {},
					Easings: {},
					Promise: t.Promise,
					defaults: {
						queue: "",
						duration: y,
						easing: h,
						begin: a,
						complete: a,
						progress: a,
						display: a,
						visibility: a,
						loop: !1,
						delay: !1,
						mobileHA: !0,
						_cacheValues: !0
					},
					init: function(e) {
						$.data(e, "velocity", {
							isSVG: g.isSVG(e),
							isAnimating: !1,
							computedStyle: null,
							tweensContainer: null,
							rootPropertyValueCache: {},
							transformCache: {}
						})
					},
					hook: null,
					mock: !1,
					version: {
						major: 1,
						minor: 2,
						patch: 2
					},
					debug: !1
				};
			t.pageYOffset !== a ? (v.State.scrollAnchor = t, v.State.scrollPropertyLeft = "pageXOffset", v.State.scrollPropertyTop = "pageYOffset") : (v.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, v.State.scrollPropertyLeft = "scrollLeft", v.State.scrollPropertyTop = "scrollTop");
			var b = function() {
				function e(e) {
					return -e.tension * e.x - e.friction * e.v
				}

				function t(t, r, a) {
					var n = {
						x: t.x + a.dx * r,
						v: t.v + a.dv * r,
						tension: t.tension,
						friction: t.friction
					};
					return {
						dx: n.v,
						dv: e(n)
					}
				}

				function r(r, a) {
					var n = {
							dx: r.v,
							dv: e(r)
						},
						o = t(r, .5 * a, n),
						i = t(r, .5 * a, o),
						s = t(r, a, i),
						l = 1 / 6 * (n.dx + 2 * (o.dx + i.dx) + s.dx),
						u = 1 / 6 * (n.dv + 2 * (o.dv + i.dv) + s.dv);
					return r.x = r.x + l * a, r.v = r.v + u * a, r
				}
				return function a(e, t, n) {
					var o = {
							x: -1,
							v: 0,
							tension: null,
							friction: null
						},
						i = [0],
						s = 0,
						l = 1e-4,
						u = .016,
						c, p, f;
					for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, n = n || null, o.tension = e, o.friction = t, c = null !== n, c ? (s = a(e, t), p = s / n * u) : p = u;;)
						if (f = r(f || o, p), i.push(1 + f.x), s += 16, !(Math.abs(f.x) > l && Math.abs(f.v) > l)) break;
					return c ? function(e) {
						return i[e * (i.length - 1) | 0]
					} : s
				}
			}();
			v.Easings = {
				linear: function(e) {
					return e
				},
				swing: function(e) {
					return .5 - Math.cos(e * Math.PI) / 2
				},
				spring: function(e) {
					return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
				}
			}, $.each([
				["ease", [.25, .1, .25, 1]],
				["ease-in", [.42, 0, 1, 1]],
				["ease-out", [0, 0, .58, 1]],
				["ease-in-out", [.42, 0, .58, 1]],
				["easeInSine", [.47, 0, .745, .715]],
				["easeOutSine", [.39, .575, .565, 1]],
				["easeInOutSine", [.445, .05, .55, .95]],
				["easeInQuad", [.55, .085, .68, .53]],
				["easeOutQuad", [.25, .46, .45, .94]],
				["easeInOutQuad", [.455, .03, .515, .955]],
				["easeInCubic", [.55, .055, .675, .19]],
				["easeOutCubic", [.215, .61, .355, 1]],
				["easeInOutCubic", [.645, .045, .355, 1]],
				["easeInQuart", [.895, .03, .685, .22]],
				["easeOutQuart", [.165, .84, .44, 1]],
				["easeInOutQuart", [.77, 0, .175, 1]],
				["easeInQuint", [.755, .05, .855, .06]],
				["easeOutQuint", [.23, 1, .32, 1]],
				["easeInOutQuint", [.86, 0, .07, 1]],
				["easeInExpo", [.95, .05, .795, .035]],
				["easeOutExpo", [.19, 1, .22, 1]],
				["easeInOutExpo", [1, 0, 0, 1]],
				["easeInCirc", [.6, .04, .98, .335]],
				["easeOutCirc", [.075, .82, .165, 1]],
				["easeInOutCirc", [.785, .135, .15, .86]]
			], function(e, t) {
				v.Easings[t[0]] = l.apply(null, t[1])
			});
			var x = v.CSS = {
				RegEx: {
					isHex: /^#([A-f\d]{3}){1,2}$/i,
					valueUnwrap: /^[A-z]+\((.*)\)$/i,
					wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
					valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
				},
				Lists: {
					colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
					transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
					transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
				},
				Hooks: {
					templates: {
						textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
						boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
						clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
						backgroundPosition: ["X Y", "0% 0%"],
						transformOrigin: ["X Y Z", "50% 50% 0px"],
						perspectiveOrigin: ["X Y", "50% 50%"]
					},
					registered: {},
					register: function() {
						for (var e = 0; e < x.Lists.colors.length; e++) {
							var t = "color" === x.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
							x.Hooks.templates[x.Lists.colors[e]] = ["Red Green Blue Alpha", t]
						}
						var r, a, n;
						if (f)
							for (r in x.Hooks.templates) {
								a = x.Hooks.templates[r], n = a[0].split(" ");
								var o = a[1].match(x.RegEx.valueSplit);
								"Color" === n[0] && (n.push(n.shift()), o.push(o.shift()), x.Hooks.templates[r] = [n.join(" "), o.join(" ")])
							}
						for (r in x.Hooks.templates) {
							a = x.Hooks.templates[r], n = a[0].split(" ");
							for (var e in n) {
								var i = r + n[e],
									s = e;
								x.Hooks.registered[i] = [r, s]
							}
						}
					},
					getRoot: function(e) {
						var t = x.Hooks.registered[e];
						return t ? t[0] : e
					},
					cleanRootPropertyValue: function(e, t) {
						return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]), t
					},
					extractValue: function(e, t) {
						var r = x.Hooks.registered[e];
						if (r) {
							var a = r[0],
								n = r[1];
							return t = x.Hooks.cleanRootPropertyValue(a, t), t.toString().match(x.RegEx.valueSplit)[n]
						}
						return t
					},
					injectValue: function(e, t, r) {
						var a = x.Hooks.registered[e];
						if (a) {
							var n = a[0],
								o = a[1],
								i, s;
							return r = x.Hooks.cleanRootPropertyValue(n, r), i = r.toString().match(x.RegEx.valueSplit), i[o] = t, s = i.join(" ")
						}
						return r
					}
				},
				Normalizations: {
					registered: {
						clip: function(e, t, r) {
							switch (e) {
								case "name":
									return "clip";
								case "extract":
									var a;
									return x.RegEx.wrappedValueAlreadyExtracted.test(r) ? a = r : (a = r.toString().match(x.RegEx.valueUnwrap), a = a ? a[1].replace(/,(\s+)?/g, " ") : r), a;
								case "inject":
									return "rect(" + r + ")"
							}
						},
						blur: function(e, t, r) {
							switch (e) {
								case "name":
									return v.State.isFirefox ? "filter" : "-webkit-filter";
								case "extract":
									var a = parseFloat(r);
									if (!a && 0 !== a) {
										var n = r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
										a = n ? n[1] : 0
									}
									return a;
								case "inject":
									return parseFloat(r) ? "blur(" + r + ")" : "none"
							}
						},
						opacity: function(e, t, r) {
							if (8 >= f) switch (e) {
								case "name":
									return "filter";
								case "extract":
									var a = r.toString().match(/alpha\(opacity=(.*)\)/i);
									return r = a ? a[1] / 100 : 1;
								case "inject":
									return t.style.zoom = 1, parseFloat(r) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")"
							} else switch (e) {
								case "name":
									return "opacity";
								case "extract":
									return r;
								case "inject":
									return r
							}
						}
					},
					register: function() {
						9 >= f || v.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
						for (var e = 0; e < x.Lists.transformsBase.length; e++) ! function() {
							var t = x.Lists.transformsBase[e];
							x.Normalizations.registered[t] = function(e, r, n) {
								switch (e) {
									case "name":
										return "transform";
									case "extract":
										return i(r) === a || i(r).transformCache[t] === a ? /^scale/i.test(t) ? 1 : 0 : i(r).transformCache[t].replace(/[()]/g, "");
									case "inject":
										var o = !1;
										switch (t.substr(0, t.length - 1)) {
											case "translate":
												o = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);
												break;
											case "scal":
											case "scale":
												v.State.isAndroid && i(r).transformCache[t] === a && 1 > n && (n = 1), o = !/(\d)$/i.test(n);
												break;
											case "skew":
												o = !/(deg|\d)$/i.test(n);
												break;
											case "rotate":
												o = !/(deg|\d)$/i.test(n)
										}
										return o || (i(r).transformCache[t] = "(" + n + ")"), i(r).transformCache[t]
								}
							}
						}();
						for (var e = 0; e < x.Lists.colors.length; e++) ! function() {
							var t = x.Lists.colors[e];
							x.Normalizations.registered[t] = function(e, r, n) {
								switch (e) {
									case "name":
										return t;
									case "extract":
										var o;
										if (x.RegEx.wrappedValueAlreadyExtracted.test(n)) o = n;
										else {
											var i, s = {
												black: "rgb(0, 0, 0)",
												blue: "rgb(0, 0, 255)",
												gray: "rgb(128, 128, 128)",
												green: "rgb(0, 128, 0)",
												red: "rgb(255, 0, 0)",
												white: "rgb(255, 255, 255)"
											};
											/^[A-z]+$/i.test(n) ? i = s[n] !== a ? s[n] : s.black : x.RegEx.isHex.test(n) ? i = "rgb(" + x.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (i = s.black), o = (i || n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
										}
										return 8 >= f || 3 !== o.split(" ").length || (o += " 1"), o;
									case "inject":
										return 8 >= f ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), (8 >= f ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
								}
							}
						}()
					}
				},
				Names: {
					camelCase: function(e) {
						return e.replace(/-(\w)/g, function(e, t) {
							return t.toUpperCase()
						})
					},
					SVGAttribute: function(e) {
						var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
						return (f || v.State.isAndroid && !v.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
					},
					prefixCheck: function(e) {
						if (v.State.prefixMatches[e]) return [v.State.prefixMatches[e], !0];
						for (var t = ["", "Webkit", "Moz", "ms", "O"], r = 0, a = t.length; a > r; r++) {
							var n;
							if (n = 0 === r ? e : t[r] + e.replace(/^\w/, function(e) {
									return e.toUpperCase()
								}), g.isString(v.State.prefixElement.style[n])) return v.State.prefixMatches[e] = n, [n, !0]
						}
						return [e, !1]
					}
				},
				Values: {
					hexToRgb: function(e) {
						var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
							r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
							a;
						return e = e.replace(t, function(e, t, r, a) {
							return t + t + r + r + a + a
						}), a = r.exec(e), a ? [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)] : [0, 0, 0]
					},
					isCSSNullValue: function(e) {
						return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
					},
					getUnitType: function(e) {
						return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
					},
					getDisplayType: function(e) {
						var t = e && e.tagName.toString().toLowerCase();
						return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
					},
					addClass: function(e, t) {
						e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
					},
					removeClass: function(e, t) {
						e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
					}
				},
				getPropertyValue: function(e, r, n, o) {
					function s(e, r) {
						function n() {
							u && x.setPropertyValue(e, "display", "none")
						}
						var l = 0;
						if (8 >= f) l = $.css(e, r);
						else {
							var u = !1;
							if (/^(width|height)$/.test(r) && 0 === x.getPropertyValue(e, "display") && (u = !0, x.setPropertyValue(e, "display", x.Values.getDisplayType(e))), !o) {
								if ("height" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
									var c = e.offsetHeight - (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
									return n(), c
								}
								if ("width" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
									var p = e.offsetWidth - (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
									return n(), p
								}
							}
							var d;
							d = i(e) === a ? t.getComputedStyle(e, null) : i(e).computedStyle ? i(e).computedStyle : i(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === r && (r = "borderTopColor"), l = 9 === f && "filter" === r ? d.getPropertyValue(r) : d[r], ("" === l || null === l) && (l = e.style[r]), n()
						}
						if ("auto" === l && /^(top|right|bottom|left)$/i.test(r)) {
							var g = s(e, "position");
							("fixed" === g || "absolute" === g && /top|left/i.test(r)) && (l = $(e).position()[r] + "px")
						}
						return l
					}
					var l;
					if (x.Hooks.registered[r]) {
						var u = r,
							c = x.Hooks.getRoot(u);
						n === a && (n = x.getPropertyValue(e, x.Names.prefixCheck(c)[0])), x.Normalizations.registered[c] && (n = x.Normalizations.registered[c]("extract", e, n)), l = x.Hooks.extractValue(u, n)
					} else if (x.Normalizations.registered[r]) {
						var p, d;
						p = x.Normalizations.registered[r]("name", e), "transform" !== p && (d = s(e, x.Names.prefixCheck(p)[0]), x.Values.isCSSNullValue(d) && x.Hooks.templates[r] && (d = x.Hooks.templates[r][1])), l = x.Normalizations.registered[r]("extract", e, d)
					}
					if (!/^[\d-]/.test(l))
						if (i(e) && i(e).isSVG && x.Names.SVGAttribute(r))
							if (/^(height|width)$/i.test(r)) try {
								l = e.getBBox()[r]
							} catch (g) {
								l = 0
							} else l = e.getAttribute(r);
						else l = s(e, x.Names.prefixCheck(r)[0]);
					return x.Values.isCSSNullValue(l) && (l = 0), v.debug >= 2 && console.log("Get " + r + ": " + l), l
				},
				setPropertyValue: function(e, r, a, n, o) {
					var s = r;
					if ("scroll" === r) o.container ? o.container["scroll" + o.direction] = a : "Left" === o.direction ? t.scrollTo(a, o.alternateValue) : t.scrollTo(o.alternateValue, a);
					else if (x.Normalizations.registered[r] && "transform" === x.Normalizations.registered[r]("name", e)) x.Normalizations.registered[r]("inject", e, a), s = "transform", a = i(e).transformCache[r];
					else {
						if (x.Hooks.registered[r]) {
							var l = r,
								u = x.Hooks.getRoot(r);
							n = n || x.getPropertyValue(e, u), a = x.Hooks.injectValue(l, a, n), r = u
						}
						if (x.Normalizations.registered[r] && (a = x.Normalizations.registered[r]("inject", e, a), r = x.Normalizations.registered[r]("name", e)), s = x.Names.prefixCheck(r)[0], 8 >= f) try {
							e.style[s] = a
						} catch (c) {
							v.debug && console.log("Browser does not support [" + a + "] for [" + s + "]")
						} else i(e) && i(e).isSVG && x.Names.SVGAttribute(r) ? e.setAttribute(r, a) : e.style[s] = a;
						v.debug >= 2 && console.log("Set " + r + " (" + s + "): " + a)
					}
					return [s, a]
				},
				flushTransformCache: function(e) {
					function t(t) {
						return parseFloat(x.getPropertyValue(e, t))
					}
					var r = "";
					if ((f || v.State.isAndroid && !v.State.isChrome) && i(e).isSVG) {
						var a = {
							translate: [t("translateX"), t("translateY")],
							skewX: [t("skewX")],
							skewY: [t("skewY")],
							scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
							rotate: [t("rotateZ"), 0, 0]
						};
						$.each(i(e).transformCache, function(e) {
							/^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), a[e] && (r += e + "(" + a[e].join(" ") + ") ", delete a[e])
						})
					} else {
						var n, o;
						$.each(i(e).transformCache, function(t) {
							return n = i(e).transformCache[t], "transformPerspective" === t ? (o = n, !0) : (9 === f && "rotateZ" === t && (t = "rotate"), void(r += t + n + " "))
						}), o && (r = "perspective" + o + " " + r)
					}
					x.setPropertyValue(e, "transform", r)
				}
			};
			x.Hooks.register(), x.Normalizations.register(), v.hook = function(e, t, r) {
				var n = a;
				return e = o(e), $.each(e, function(e, o) {
					if (i(o) === a && v.init(o), r === a) n === a && (n = v.CSS.getPropertyValue(o, t));
					else {
						var s = v.CSS.setPropertyValue(o, t, r);
						"transform" === s[0] && v.CSS.flushTransformCache(o), n = s
					}
				}), n
			};
			var S = function() {
				function e() {
					return l ? T.promise || null : f
				}

				function n() {
					function e(e) {
						function p(e, t) {
							var r = a,
								i = a,
								s = a;
							return g.isArray(e) ? (r = e[0], !g.isArray(e[1]) && /^[\d-]/.test(e[1]) || g.isFunction(e[1]) || x.RegEx.isHex.test(e[1]) ? s = e[1] : (g.isString(e[1]) && !x.RegEx.isHex.test(e[1]) || g.isArray(e[1])) && (i = t ? e[1] : u(e[1], o.duration), e[2] !== a && (s = e[2]))) : r = e, t || (i = i || o.easing), g.isFunction(r) && (r = r.call(n, w, P)), g.isFunction(s) && (s = s.call(n, w, P)), [r || 0, i, s]
						}

						function f(e, t) {
							var r, a;
							return a = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
								return r = e, ""
							}), r || (r = x.Values.getUnitType(e)), [a, r]
						}

						function d() {
							var e = {
									myParent: n.parentNode || r.body,
									position: x.getPropertyValue(n, "position"),
									fontSize: x.getPropertyValue(n, "fontSize")
								},
								a = e.position === N.lastPosition && e.myParent === N.lastParent,
								o = e.fontSize === N.lastFontSize;
							N.lastParent = e.myParent, N.lastPosition = e.position, N.lastFontSize = e.fontSize;
							var s = 100,
								l = {};
							if (o && a) l.emToPx = N.lastEmToPx, l.percentToPxWidth = N.lastPercentToPxWidth, l.percentToPxHeight = N.lastPercentToPxHeight;
							else {
								var u = i(n).isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");
								v.init(u), e.myParent.appendChild(u), $.each(["overflow", "overflowX", "overflowY"], function(e, t) {
									v.CSS.setPropertyValue(u, t, "hidden")
								}), v.CSS.setPropertyValue(u, "position", e.position), v.CSS.setPropertyValue(u, "fontSize", e.fontSize), v.CSS.setPropertyValue(u, "boxSizing", "content-box"), $.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
									v.CSS.setPropertyValue(u, t, s + "%")
								}), v.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = N.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = N.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = N.lastEmToPx = (parseFloat(x.getPropertyValue(u, "paddingLeft")) || 1) / s, e.myParent.removeChild(u)
							}
							return null === N.remToPx && (N.remToPx = parseFloat(x.getPropertyValue(r.body, "fontSize")) || 16), null === N.vwToPx && (N.vwToPx = parseFloat(t.innerWidth) / 100, N.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = N.remToPx, l.vwToPx = N.vwToPx, l.vhToPx = N.vhToPx, v.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), n), l
						}
						if (o.begin && 0 === w) try {
							o.begin.call(m, m)
						} catch (y) {
							setTimeout(function() {
								throw y
							}, 1)
						}
						if ("scroll" === k) {
							var S = /^x$/i.test(o.axis) ? "Left" : "Top",
								V = parseFloat(o.offset) || 0,
								C, A, F;
							o.container ? g.isWrapped(o.container) || g.isNode(o.container) ? (o.container = o.container[0] || o.container, C = o.container["scroll" + S], F = C + $(n).position()[S.toLowerCase()] + V) : o.container = null : (C = v.State.scrollAnchor[v.State["scrollProperty" + S]], A = v.State.scrollAnchor[v.State["scrollProperty" + ("Left" === S ? "Top" : "Left")]], F = $(n).offset()[S.toLowerCase()] + V), s = {
								scroll: {
									rootPropertyValue: !1,
									startValue: C,
									currentValue: C,
									endValue: F,
									unitType: "",
									easing: o.easing,
									scrollData: {
										container: o.container,
										direction: S,
										alternateValue: A
									}
								},
								element: n
							}, v.debug && console.log("tweensContainer (scroll): ", s.scroll, n)
						} else if ("reverse" === k) {
							if (!i(n).tweensContainer) return void $.dequeue(n, o.queue);
							"none" === i(n).opts.display && (i(n).opts.display = "auto"), "hidden" === i(n).opts.visibility && (i(n).opts.visibility = "visible"), i(n).opts.loop = !1, i(n).opts.begin = null, i(n).opts.complete = null, b.easing || delete o.easing, b.duration || delete o.duration, o = $.extend({}, i(n).opts, o);
							var E = $.extend(!0, {}, i(n).tweensContainer);
							for (var j in E)
								if ("element" !== j) {
									var H = E[j].startValue;
									E[j].startValue = E[j].currentValue = E[j].endValue, E[j].endValue = H, g.isEmptyObject(b) || (E[j].easing = o.easing), v.debug && console.log("reverse tweensContainer (" + j + "): " + JSON.stringify(E[j]), n)
								}
							s = E
						} else if ("start" === k) {
							var E;
							i(n).tweensContainer && i(n).isAnimating === !0 && (E = i(n).tweensContainer), $.each(h, function(e, t) {
								if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(e)) {
									var r = p(t, !0),
										n = r[0],
										o = r[1],
										i = r[2];
									if (x.RegEx.isHex.test(n)) {
										for (var s = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(n), u = i ? x.Values.hexToRgb(i) : a, c = 0; c < s.length; c++) {
											var f = [l[c]];
											o && f.push(o), u !== a && f.push(u[c]), h[e + s[c]] = f
										}
										delete h[e]
									}
								}
							});
							for (var R in h) {
								var O = p(h[R]),
									z = O[0],
									q = O[1],
									M = O[2];
								R = x.Names.camelCase(R);
								var I = x.Hooks.getRoot(R),
									B = !1;
								if (i(n).isSVG || "tween" === I || x.Names.prefixCheck(I)[1] !== !1 || x.Normalizations.registered[I] !== a) {
									(o.display !== a && null !== o.display && "none" !== o.display || o.visibility !== a && "hidden" !== o.visibility) && /opacity|filter/.test(R) && !M && 0 !== z && (M = 0), o._cacheValues && E && E[R] ? (M === a && (M = E[R].endValue + E[R].unitType), B = i(n).rootPropertyValueCache[I]) : x.Hooks.registered[R] ? M === a ? (B = x.getPropertyValue(n, I), M = x.getPropertyValue(n, R, B)) : B = x.Hooks.templates[I][1] : M === a && (M = x.getPropertyValue(n, R));
									var W, G, D, X = !1;
									if (W = f(R, M), M = W[0], D = W[1], W = f(R, z), z = W[0].replace(/^([+-\/*])=/, function(e, t) {
											return X = t, ""
										}), G = W[1], M = parseFloat(M) || 0, z = parseFloat(z) || 0, "%" === G && (/^(fontSize|lineHeight)$/.test(R) ? (z /= 100, G = "em") : /^scale/.test(R) ? (z /= 100, G = "") : /(Red|Green|Blue)$/i.test(R) && (z = z / 100 * 255, G = "")), /[\/*]/.test(X)) G = D;
									else if (D !== G && 0 !== M)
										if (0 === z) G = D;
										else {
											l = l || d();
											var Y = /margin|padding|left|right|width|text|word|letter/i.test(R) || /X$/.test(R) || "x" === R ? "x" : "y";
											switch (D) {
												case "%":
													M *= "x" === Y ? l.percentToPxWidth : l.percentToPxHeight;
													break;
												case "px":
													break;
												default:
													M *= l[D + "ToPx"]
											}
											switch (G) {
												case "%":
													M *= 1 / ("x" === Y ? l.percentToPxWidth : l.percentToPxHeight);
													break;
												case "px":
													break;
												default:
													M *= 1 / l[G + "ToPx"]
											}
										}
									switch (X) {
										case "+":
											z = M + z;
											break;
										case "-":
											z = M - z;
											break;
										case "*":
											z = M * z;
											break;
										case "/":
											z = M / z
									}
									s[R] = {
										rootPropertyValue: B,
										startValue: M,
										currentValue: M,
										endValue: z,
										unitType: G,
										easing: q
									}, v.debug && console.log("tweensContainer (" + R + "): " + JSON.stringify(s[R]), n)
								} else v.debug && console.log("Skipping [" + I + "] due to a lack of browser support.")
							}
							s.element = n
						}
						s.element && (x.Values.addClass(n, "velocity-animating"), L.push(s), "" === o.queue && (i(n).tweensContainer = s, i(n).opts = o), i(n).isAnimating = !0, w === P - 1 ? (v.State.calls.push([L, m, o, null, T.resolver]), v.State.isTicking === !1 && (v.State.isTicking = !0, c())) : w++)
					}
					var n = this,
						o = $.extend({}, v.defaults, b),
						s = {},
						l;
					switch (i(n) === a && v.init(n), parseFloat(o.delay) && o.queue !== !1 && $.queue(n, o.queue, function(e) {
						v.velocityQueueEntryFlag = !0, i(n).delayTimer = {
							setTimeout: setTimeout(e, parseFloat(o.delay)),
							next: e
						}
					}), o.duration.toString().toLowerCase()) {
						case "fast":
							o.duration = 200;
							break;
						case "normal":
							o.duration = y;
							break;
						case "slow":
							o.duration = 600;
							break;
						default:
							o.duration = parseFloat(o.duration) || 1
					}
					v.mock !== !1 && (v.mock === !0 ? o.duration = o.delay = 1 : (o.duration *= parseFloat(v.mock) || 1, o.delay *= parseFloat(v.mock) || 1)), o.easing = u(o.easing, o.duration), o.begin && !g.isFunction(o.begin) && (o.begin = null), o.progress && !g.isFunction(o.progress) && (o.progress = null), o.complete && !g.isFunction(o.complete) && (o.complete = null), o.display !== a && null !== o.display && (o.display = o.display.toString().toLowerCase(), "auto" === o.display && (o.display = v.CSS.Values.getDisplayType(n))), o.visibility !== a && null !== o.visibility && (o.visibility = o.visibility.toString().toLowerCase()), o.mobileHA = o.mobileHA && v.State.isMobile && !v.State.isGingerbread, o.queue === !1 ? o.delay ? setTimeout(e, o.delay) : e() : $.queue(n, o.queue, function(t, r) {
						return r === !0 ? (T.promise && T.resolver(m), !0) : (v.velocityQueueEntryFlag = !0, void e(t))
					}), "" !== o.queue && "fx" !== o.queue || "inprogress" === $.queue(n)[0] || $.dequeue(n)
				}
				var s = arguments[0] && (arguments[0].p || $.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties)),
					l, f, d, m, h, b;
				if (g.isWrapped(this) ? (l = !1, d = 0, m = this, f = this) : (l = !0, d = 1, m = s ? arguments[0].elements || arguments[0].e : arguments[0]), m = o(m)) {
					s ? (h = arguments[0].properties || arguments[0].p, b = arguments[0].options || arguments[0].o) : (h = arguments[d], b = arguments[d + 1]);
					var P = m.length,
						w = 0;
					if (!/^(stop|finish)$/i.test(h) && !$.isPlainObject(b)) {
						var V = d + 1;
						b = {};
						for (var C = V; C < arguments.length; C++) g.isArray(arguments[C]) || !/^(fast|normal|slow)$/i.test(arguments[C]) && !/^\d/.test(arguments[C]) ? g.isString(arguments[C]) || g.isArray(arguments[C]) ? b.easing = arguments[C] : g.isFunction(arguments[C]) && (b.complete = arguments[C]) : b.duration = arguments[C]
					}
					var T = {
						promise: null,
						resolver: null,
						rejecter: null
					};
					l && v.Promise && (T.promise = new v.Promise(function(e, t) {
						T.resolver = e, T.rejecter = t
					}));
					var k;
					switch (h) {
						case "scroll":
							k = "scroll";
							break;
						case "reverse":
							k = "reverse";
							break;
						case "finish":
						case "stop":
							$.each(m, function(e, t) {
								i(t) && i(t).delayTimer && (clearTimeout(i(t).delayTimer.setTimeout), i(t).delayTimer.next && i(t).delayTimer.next(), delete i(t).delayTimer)
							});
							var A = [];
							return $.each(v.State.calls, function(e, t) {
								t && $.each(t[1], function(r, n) {
									var o = b === a ? "" : b;
									return o === !0 || t[2].queue === o || b === a && t[2].queue === !1 ? void $.each(m, function(r, a) {
										a === n && ((b === !0 || g.isString(b)) && ($.each($.queue(a, g.isString(b) ? b : ""), function(e, t) {
											g.isFunction(t) && t(null, !0)
										}), $.queue(a, g.isString(b) ? b : "", [])), "stop" === h ? (i(a) && i(a).tweensContainer && o !== !1 && $.each(i(a).tweensContainer, function(e, t) {
											t.endValue = t.currentValue
										}), A.push(e)) : "finish" === h && (t[2].duration = 1))
									}) : !0
								})
							}), "stop" === h && ($.each(A, function(e, t) {
								p(t, !0)
							}), T.promise && T.resolver(m)), e();
						default:
							if (!$.isPlainObject(h) || g.isEmptyObject(h)) {
								if (g.isString(h) && v.Redirects[h]) {
									var F = $.extend({}, b),
										E = F.duration,
										j = F.delay || 0;
									return F.backwards === !0 && (m = $.extend(!0, [], m).reverse()), $.each(m, function(e, t) {
										parseFloat(F.stagger) ? F.delay = j + parseFloat(F.stagger) * e : g.isFunction(F.stagger) && (F.delay = j + F.stagger.call(t, e, P)), F.drag && (F.duration = parseFloat(E) || (/^(callout|transition)/.test(h) ? 1e3 : y), F.duration = Math.max(F.duration * (F.backwards ? 1 - e / P : (e + 1) / P), .75 * F.duration, 200)), v.Redirects[h].call(t, t, F || {}, e, P, m, T.promise ? T : a)
									}), e()
								}
								var H = "Velocity: First argument (" + h + ") was not a property map, a known action, or a registered redirect. Aborting.";
								return T.promise ? T.rejecter(new Error(H)) : console.log(H), e()
							}
							k = "start"
					}
					var N = {
							lastParent: null,
							lastPosition: null,
							lastFontSize: null,
							lastPercentToPxWidth: null,
							lastPercentToPxHeight: null,
							lastEmToPx: null,
							remToPx: null,
							vwToPx: null,
							vhToPx: null
						},
						L = [];
					$.each(m, function(e, t) {
						g.isNode(t) && n.call(t)
					});
					var F = $.extend({}, v.defaults, b),
						R;
					if (F.loop = parseInt(F.loop), R = 2 * F.loop - 1, F.loop)
						for (var O = 0; R > O; O++) {
							var z = {
								delay: F.delay,
								progress: F.progress
							};
							O === R - 1 && (z.display = F.display, z.visibility = F.visibility, z.complete = F.complete), S(m, "reverse", z)
						}
					return e()
				}
			};
			v = $.extend(S, v), v.animate = S;
			var P = t.requestAnimationFrame || d;
			return v.State.isMobile || r.hidden === a || r.addEventListener("visibilitychange", function() {
				r.hidden ? (P = function(e) {
					return setTimeout(function() {
						e(!0)
					}, 16)
				}, c()) : P = t.requestAnimationFrame || d
			}), e.Velocity = v, e !== t && (e.fn.velocity = S, e.fn.velocity.defaults = v.defaults), $.each(["Down", "Up"], function(e, t) {
				v.Redirects["slide" + t] = function(e, r, n, o, i, s) {
					var l = $.extend({}, r),
						u = l.begin,
						c = l.complete,
						p = {
							height: "",
							marginTop: "",
							marginBottom: "",
							paddingTop: "",
							paddingBottom: ""
						},
						f = {};
					l.display === a && (l.display = "Down" === t ? "inline" === v.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
						u && u.call(i, i);
						for (var r in p) {
							f[r] = e.style[r];
							var a = v.CSS.getPropertyValue(e, r);
							p[r] = "Down" === t ? [a, 0] : [0, a]
						}
						f.overflow = e.style.overflow, e.style.overflow = "hidden"
					}, l.complete = function() {
						for (var t in f) e.style[t] = f[t];
						c && c.call(i, i), s && s.resolver(i)
					}, v(e, p, l)
				}
			}), $.each(["In", "Out"], function(e, t) {
				v.Redirects["fade" + t] = function(e, r, n, o, i, s) {
					var l = $.extend({}, r),
						u = {
							opacity: "In" === t ? 1 : 0
						},
						c = l.complete;
					l.complete = n !== o - 1 ? l.begin = null : function() {
						c && c.call(i, i), s && s.resolver(i)
					}, l.display === a && (l.display = "In" === t ? "auto" : "none"), v(this, u, l)
				}
			}), v
		}(window.jQuery || window.Zepto || window, window, document)
	});;
/* VelocityJS.org UI Pack (5.0.4). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License. Portions copyright Daniel Eden, Christian Pucci. */
! function(t) {
	"function" == typeof require && "object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define(["velocity"], t) : t()
}(function() {
	return function(t, a, e, r) {
		function n(t, a) {
			var e = [];
			return t && a ? ($.each([t, a], function(t, a) {
				var r = [];
				$.each(a, function(t, a) {
					for (; a.toString().length < 5;) a = "0" + a;
					r.push(a)
				}), e.push(r.join(""))
			}), parseFloat(e[0]) > parseFloat(e[1])) : !1
		}
		if (!t.Velocity || !t.Velocity.Utilities) return void(a.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));
		var i = t.Velocity,
			$ = i.Utilities,
			s = i.version,
			o = {
				major: 1,
				minor: 1,
				patch: 0
			};
		if (n(o, s)) {
			var l = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
			throw alert(l), new Error(l)
		}
		i.RegisterEffect = i.RegisterUI = function(t, a) {
			function e(t, a, e, r) {
				var n = 0,
					s;
				$.each(t.nodeType ? [t] : t, function(t, a) {
					r && (e += t * r), s = a.parentNode, $.each(["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], function(t, e) {
						n += parseFloat(i.CSS.getPropertyValue(a, e))
					})
				}), i.animate(s, {
					height: ("In" === a ? "+" : "-") + "=" + n
				}, {
					queue: !1,
					easing: "ease-in-out",
					duration: e * ("In" === a ? .6 : 1)
				})
			}
			return i.Redirects[t] = function(n, s, o, l, c, u) {
				function f() {
					s.display !== r && "none" !== s.display || !/Out$/.test(t) || $.each(c.nodeType ? [c] : c, function(t, a) {
						i.CSS.setPropertyValue(a, "display", "none")
					}), s.complete && s.complete.call(c, c), u && u.resolver(c || n)
				}
				var p = o === l - 1;
				a.defaultDuration = "function" == typeof a.defaultDuration ? a.defaultDuration.call(c, c) : parseFloat(a.defaultDuration);
				for (var d = 0; d < a.calls.length; d++) {
					var g = a.calls[d],
						y = g[0],
						m = s.duration || a.defaultDuration || 1e3,
						X = g[1],
						Y = g[2] || {},
						O = {};
					if (O.duration = m * (X || 1), O.queue = s.queue || "", O.easing = Y.easing || "ease", O.delay = parseFloat(Y.delay) || 0, O._cacheValues = Y._cacheValues || !0, 0 === d) {
						if (O.delay += parseFloat(s.delay) || 0, 0 === o && (O.begin = function() {
								s.begin && s.begin.call(c, c);
								var a = t.match(/(In|Out)$/);
								a && "In" === a[0] && y.opacity !== r && $.each(c.nodeType ? [c] : c, function(t, a) {
									i.CSS.setPropertyValue(a, "opacity", 0)
								}), s.animateParentHeight && a && e(c, a[0], m + O.delay, s.stagger)
							}), null !== s.display)
							if (s.display !== r && "none" !== s.display) O.display = s.display;
							else if (/In$/.test(t)) {
								var v = i.CSS.Values.getDisplayType(n);
								O.display = "inline" === v ? "inline-block" : v
							}
						s.visibility && "hidden" !== s.visibility && (O.visibility = s.visibility)
					}
					d === a.calls.length - 1 && (O.complete = function() {
						if (a.reset) {
							for (var t in a.reset) {
								var e = a.reset[t];
								i.CSS.Hooks.registered[t] !== r || "string" != typeof e && "number" != typeof e || (a.reset[t] = [a.reset[t], a.reset[t]])
							}
							var s = {
								duration: 0,
								queue: !1
							};
							p && (s.complete = f), i.animate(n, a.reset, s)
						} else p && f()
					}, "hidden" === s.visibility && (O.visibility = s.visibility)), i.animate(n, y, O)
				}
			}, i
		}, i.RegisterEffect.packagedEffects = {
			"callout.bounce": {
				defaultDuration: 550,
				calls: [
					[{
						translateY: -30
					}, .25],
					[{
						translateY: 0
					}, .125],
					[{
						translateY: -15
					}, .125],
					[{
						translateY: 0
					}, .25]
				]
			},
			"callout.shake": {
				defaultDuration: 800,
				calls: [
					[{
						translateX: -11
					}, .125],
					[{
						translateX: 11
					}, .125],
					[{
						translateX: -11
					}, .125],
					[{
						translateX: 11
					}, .125],
					[{
						translateX: -11
					}, .125],
					[{
						translateX: 11
					}, .125],
					[{
						translateX: -11
					}, .125],
					[{
						translateX: 0
					}, .125]
				]
			},
			"callout.flash": {
				defaultDuration: 1100,
				calls: [
					[{
						opacity: [0, "easeInOutQuad", 1]
					}, .25],
					[{
						opacity: [1, "easeInOutQuad"]
					}, .25],
					[{
						opacity: [0, "easeInOutQuad"]
					}, .25],
					[{
						opacity: [1, "easeInOutQuad"]
					}, .25]
				]
			},
			"callout.pulse": {
				defaultDuration: 825,
				calls: [
					[{
						scaleX: 1.1,
						scaleY: 1.1
					}, .5, {
						easing: "easeInExpo"
					}],
					[{
						scaleX: 1,
						scaleY: 1
					}, .5]
				]
			},
			"callout.swing": {
				defaultDuration: 950,
				calls: [
					[{
						rotateZ: 15
					}, .2],
					[{
						rotateZ: -10
					}, .2],
					[{
						rotateZ: 5
					}, .2],
					[{
						rotateZ: -5
					}, .2],
					[{
						rotateZ: 0
					}, .2]
				]
			},
			"callout.tada": {
				defaultDuration: 1e3,
				calls: [
					[{
						scaleX: .9,
						scaleY: .9,
						rotateZ: -3
					}, .1],
					[{
						scaleX: 1.1,
						scaleY: 1.1,
						rotateZ: 3
					}, .1],
					[{
						scaleX: 1.1,
						scaleY: 1.1,
						rotateZ: -3
					}, .1],
					["reverse", .125],
					["reverse", .125],
					["reverse", .125],
					["reverse", .125],
					["reverse", .125],
					[{
						scaleX: 1,
						scaleY: 1,
						rotateZ: 0
					}, .2]
				]
			},
			"transition.fadeIn": {
				defaultDuration: 500,
				calls: [
					[{
						opacity: [1, 0]
					}]
				]
			},
			"transition.fadeOut": {
				defaultDuration: 500,
				calls: [
					[{
						opacity: [0, 1]
					}]
				]
			},
			"transition.flipXIn": {
				defaultDuration: 700,
				calls: [
					[{
						opacity: [1, 0],
						transformPerspective: [800, 800],
						rotateY: [0, -55]
					}]
				],
				reset: {
					transformPerspective: 0
				}
			},
			"transition.flipXOut": {
				defaultDuration: 700,
				calls: [
					[{
						opacity: [0, 1],
						transformPerspective: [800, 800],
						rotateY: 55
					}]
				],
				reset: {
					transformPerspective: 0,
					rotateY: 0
				}
			},
			"transition.flipYIn": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [1, 0],
						transformPerspective: [800, 800],
						rotateX: [0, -45]
					}]
				],
				reset: {
					transformPerspective: 0
				}
			},
			"transition.flipYOut": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [0, 1],
						transformPerspective: [800, 800],
						rotateX: 25
					}]
				],
				reset: {
					transformPerspective: 0,
					rotateX: 0
				}
			},
			"transition.flipBounceXIn": {
				defaultDuration: 900,
				calls: [
					[{
						opacity: [.725, 0],
						transformPerspective: [400, 400],
						rotateY: [-10, 90]
					}, .5],
					[{
						opacity: .8,
						rotateY: 10
					}, .25],
					[{
						opacity: 1,
						rotateY: 0
					}, .25]
				],
				reset: {
					transformPerspective: 0
				}
			},
			"transition.flipBounceXOut": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [.9, 1],
						transformPerspective: [400, 400],
						rotateY: -10
					}, .5],
					[{
						opacity: 0,
						rotateY: 90
					}, .5]
				],
				reset: {
					transformPerspective: 0,
					rotateY: 0
				}
			},
			"transition.flipBounceYIn": {
				defaultDuration: 850,
				calls: [
					[{
						opacity: [.725, 0],
						transformPerspective: [400, 400],
						rotateX: [-10, 90]
					}, .5],
					[{
						opacity: .8,
						rotateX: 10
					}, .25],
					[{
						opacity: 1,
						rotateX: 0
					}, .25]
				],
				reset: {
					transformPerspective: 0
				}
			},
			"transition.flipBounceYOut": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [.9, 1],
						transformPerspective: [400, 400],
						rotateX: -15
					}, .5],
					[{
						opacity: 0,
						rotateX: 90
					}, .5]
				],
				reset: {
					transformPerspective: 0,
					rotateX: 0
				}
			},
			"transition.swoopIn": {
				defaultDuration: 850,
				calls: [
					[{
						opacity: [1, 0],
						transformOriginX: ["100%", "50%"],
						transformOriginY: ["100%", "100%"],
						scaleX: [1, 0],
						scaleY: [1, 0],
						translateX: [0, -700],
						translateZ: 0
					}]
				],
				reset: {
					transformOriginX: "50%",
					transformOriginY: "50%"
				}
			},
			"transition.swoopOut": {
				defaultDuration: 850,
				calls: [
					[{
						opacity: [0, 1],
						transformOriginX: ["50%", "100%"],
						transformOriginY: ["100%", "100%"],
						scaleX: 0,
						scaleY: 0,
						translateX: -700,
						translateZ: 0
					}]
				],
				reset: {
					transformOriginX: "50%",
					transformOriginY: "50%",
					scaleX: 1,
					scaleY: 1,
					translateX: 0
				}
			},
			"transition.whirlIn": {
				defaultDuration: 850,
				calls: [
					[{
						opacity: [1, 0],
						transformOriginX: ["50%", "50%"],
						transformOriginY: ["50%", "50%"],
						scaleX: [1, 0],
						scaleY: [1, 0],
						rotateY: [0, 160]
					}, 1, {
						easing: "easeInOutSine"
					}]
				]
			},
			"transition.whirlOut": {
				defaultDuration: 750,
				calls: [
					[{
						opacity: [0, "easeInOutQuint", 1],
						transformOriginX: ["50%", "50%"],
						transformOriginY: ["50%", "50%"],
						scaleX: 0,
						scaleY: 0,
						rotateY: 160
					}, 1, {
						easing: "swing"
					}]
				],
				reset: {
					scaleX: 1,
					scaleY: 1,
					rotateY: 0
				}
			},
			"transition.shrinkIn": {
				defaultDuration: 750,
				calls: [
					[{
						opacity: [1, 0],
						transformOriginX: ["50%", "50%"],
						transformOriginY: ["50%", "50%"],
						scaleX: [1, 1.5],
						scaleY: [1, 1.5],
						translateZ: 0
					}]
				]
			},
			"transition.shrinkOut": {
				defaultDuration: 600,
				calls: [
					[{
						opacity: [0, 1],
						transformOriginX: ["50%", "50%"],
						transformOriginY: ["50%", "50%"],
						scaleX: 1.3,
						scaleY: 1.3,
						translateZ: 0
					}]
				],
				reset: {
					scaleX: 1,
					scaleY: 1
				}
			},
			"transition.expandIn": {
				defaultDuration: 700,
				calls: [
					[{
						opacity: [1, 0],
						transformOriginX: ["50%", "50%"],
						transformOriginY: ["50%", "50%"],
						scaleX: [1, .625],
						scaleY: [1, .625],
						translateZ: 0
					}]
				]
			},
			"transition.expandOut": {
				defaultDuration: 700,
				calls: [
					[{
						opacity: [0, 1],
						transformOriginX: ["50%", "50%"],
						transformOriginY: ["50%", "50%"],
						scaleX: .5,
						scaleY: .5,
						translateZ: 0
					}]
				],
				reset: {
					scaleX: 1,
					scaleY: 1
				}
			},
			"transition.bounceIn": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [1, 0],
						scaleX: [1.05, .3],
						scaleY: [1.05, .3]
					}, .4],
					[{
						scaleX: .9,
						scaleY: .9,
						translateZ: 0
					}, .2],
					[{
						scaleX: 1,
						scaleY: 1
					}, .5]
				]
			},
			"transition.bounceOut": {
				defaultDuration: 800,
				calls: [
					[{
						scaleX: .95,
						scaleY: .95
					}, .35],
					[{
						scaleX: 1.1,
						scaleY: 1.1,
						translateZ: 0
					}, .35],
					[{
						opacity: [0, 1],
						scaleX: .3,
						scaleY: .3
					}, .3]
				],
				reset: {
					scaleX: 1,
					scaleY: 1
				}
			},
			"transition.bounceUpIn": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [1, 0],
						translateY: [-30, 1e3]
					}, .6, {
						easing: "easeOutCirc"
					}],
					[{
						translateY: 10
					}, .2],
					[{
						translateY: 0
					}, .2]
				]
			},
			"transition.bounceUpOut": {
				defaultDuration: 1e3,
				calls: [
					[{
						translateY: 20
					}, .2],
					[{
						opacity: [0, "easeInCirc", 1],
						translateY: -1e3
					}, .8]
				],
				reset: {
					translateY: 0
				}
			},
			"transition.bounceDownIn": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [1, 0],
						translateY: [30, -1e3]
					}, .6, {
						easing: "easeOutCirc"
					}],
					[{
						translateY: -10
					}, .2],
					[{
						translateY: 0
					}, .2]
				]
			},
			"transition.bounceDownOut": {
				defaultDuration: 1e3,
				calls: [
					[{
						translateY: -20
					}, .2],
					[{
						opacity: [0, "easeInCirc", 1],
						translateY: 1e3
					}, .8]
				],
				reset: {
					translateY: 0
				}
			},
			"transition.bounceLeftIn": {
				defaultDuration: 750,
				calls: [
					[{
						opacity: [1, 0],
						translateX: [30, -1250]
					}, .6, {
						easing: "easeOutCirc"
					}],
					[{
						translateX: -10
					}, .2],
					[{
						translateX: 0
					}, .2]
				]
			},
			"transition.bounceLeftOut": {
				defaultDuration: 750,
				calls: [
					[{
						translateX: 30
					}, .2],
					[{
						opacity: [0, "easeInCirc", 1],
						translateX: -1250
					}, .8]
				],
				reset: {
					translateX: 0
				}
			},
			"transition.bounceRightIn": {
				defaultDuration: 750,
				calls: [
					[{
						opacity: [1, 0],
						translateX: [-30, 1250]
					}, .6, {
						easing: "easeOutCirc"
					}],
					[{
						translateX: 10
					}, .2],
					[{
						translateX: 0
					}, .2]
				]
			},
			"transition.bounceRightOut": {
				defaultDuration: 750,
				calls: [
					[{
						translateX: -30
					}, .2],
					[{
						opacity: [0, "easeInCirc", 1],
						translateX: 1250
					}, .8]
				],
				reset: {
					translateX: 0
				}
			},
			"transition.slideUpIn": {
				defaultDuration: 900,
				calls: [
					[{
						opacity: [1, 0],
						translateY: [0, 20],
						translateZ: 0
					}]
				]
			},
			"transition.slideUpOut": {
				defaultDuration: 900,
				calls: [
					[{
						opacity: [0, 1],
						translateY: -20,
						translateZ: 0
					}]
				],
				reset: {
					translateY: 0
				}
			},
			"transition.slideDownIn": {
				defaultDuration: 900,
				calls: [
					[{
						opacity: [1, 0],
						translateY: [0, -20],
						translateZ: 0
					}]
				]
			},
			"transition.slideDownOut": {
				defaultDuration: 900,
				calls: [
					[{
						opacity: [0, 1],
						translateY: 20,
						translateZ: 0
					}]
				],
				reset: {
					translateY: 0
				}
			},
			"transition.slideLeftIn": {
				defaultDuration: 1e3,
				calls: [
					[{
						opacity: [1, 0],
						translateX: [0, -20],
						translateZ: 0
					}]
				]
			},
			"transition.slideLeftOut": {
				defaultDuration: 1050,
				calls: [
					[{
						opacity: [0, 1],
						translateX: -20,
						translateZ: 0
					}]
				],
				reset: {
					translateX: 0
				}
			},
			"transition.slideRightIn": {
				defaultDuration: 1e3,
				calls: [
					[{
						opacity: [1, 0],
						translateX: [0, 20],
						translateZ: 0
					}]
				]
			},
			"transition.slideRightOut": {
				defaultDuration: 1050,
				calls: [
					[{
						opacity: [0, 1],
						translateX: 20,
						translateZ: 0
					}]
				],
				reset: {
					translateX: 0
				}
			},
			"transition.slideUpBigIn": {
				defaultDuration: 850,
				calls: [
					[{
						opacity: [1, 0],
						translateY: [0, 75],
						translateZ: 0
					}]
				]
			},
			"transition.slideUpBigOut": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [0, 1],
						translateY: -75,
						translateZ: 0
					}]
				],
				reset: {
					translateY: 0
				}
			},
			"transition.slideDownBigIn": {
				defaultDuration: 850,
				calls: [
					[{
						opacity: [1, 0],
						translateY: [0, -75],
						translateZ: 0
					}]
				]
			},
			"transition.slideDownBigOut": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [0, 1],
						translateY: 75,
						translateZ: 0
					}]
				],
				reset: {
					translateY: 0
				}
			},
			"transition.slideLeftBigIn": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [1, 0],
						translateX: [0, -75],
						translateZ: 0
					}]
				]
			},
			"transition.slideLeftBigOut": {
				defaultDuration: 750,
				calls: [
					[{
						opacity: [0, 1],
						translateX: -75,
						translateZ: 0
					}]
				],
				reset: {
					translateX: 0
				}
			},
			"transition.slideRightBigIn": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [1, 0],
						translateX: [0, 75],
						translateZ: 0
					}]
				]
			},
			"transition.slideRightBigOut": {
				defaultDuration: 750,
				calls: [
					[{
						opacity: [0, 1],
						translateX: 75,
						translateZ: 0
					}]
				],
				reset: {
					translateX: 0
				}
			},
			"transition.perspectiveUpIn": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [1, 0],
						transformPerspective: [800, 800],
						transformOriginX: [0, 0],
						transformOriginY: ["100%", "100%"],
						rotateX: [0, -180]
					}]
				],
				reset: {
					transformPerspective: 0,
					transformOriginX: "50%",
					transformOriginY: "50%"
				}
			},
			"transition.perspectiveUpOut": {
				defaultDuration: 850,
				calls: [
					[{
						opacity: [0, 1],
						transformPerspective: [800, 800],
						transformOriginX: [0, 0],
						transformOriginY: ["100%", "100%"],
						rotateX: -180
					}]
				],
				reset: {
					transformPerspective: 0,
					transformOriginX: "50%",
					transformOriginY: "50%",
					rotateX: 0
				}
			},
			"transition.perspectiveDownIn": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [1, 0],
						transformPerspective: [800, 800],
						transformOriginX: [0, 0],
						transformOriginY: [0, 0],
						rotateX: [0, 180]
					}]
				],
				reset: {
					transformPerspective: 0,
					transformOriginX: "50%",
					transformOriginY: "50%"
				}
			},
			"transition.perspectiveDownOut": {
				defaultDuration: 850,
				calls: [
					[{
						opacity: [0, 1],
						transformPerspective: [800, 800],
						transformOriginX: [0, 0],
						transformOriginY: [0, 0],
						rotateX: 180
					}]
				],
				reset: {
					transformPerspective: 0,
					transformOriginX: "50%",
					transformOriginY: "50%",
					rotateX: 0
				}
			},
			"transition.perspectiveLeftIn": {
				defaultDuration: 950,
				calls: [
					[{
						opacity: [1, 0],
						transformPerspective: [2e3, 2e3],
						transformOriginX: [0, 0],
						transformOriginY: [0, 0],
						rotateY: [0, -180]
					}]
				],
				reset: {
					transformPerspective: 0,
					transformOriginX: "50%",
					transformOriginY: "50%"
				}
			},
			"transition.perspectiveLeftOut": {
				defaultDuration: 950,
				calls: [
					[{
						opacity: [0, 1],
						transformPerspective: [2e3, 2e3],
						transformOriginX: [0, 0],
						transformOriginY: [0, 0],
						rotateY: -180
					}]
				],
				reset: {
					transformPerspective: 0,
					transformOriginX: "50%",
					transformOriginY: "50%",
					rotateY: 0
				}
			},
			"transition.perspectiveRightIn": {
				defaultDuration: 950,
				calls: [
					[{
						opacity: [1, 0],
						transformPerspective: [2e3, 2e3],
						transformOriginX: ["100%", "100%"],
						transformOriginY: [0, 0],
						rotateY: [0, 180]
					}]
				],
				reset: {
					transformPerspective: 0,
					transformOriginX: "50%",
					transformOriginY: "50%"
				}
			},
			"transition.perspectiveRightOut": {
				defaultDuration: 950,
				calls: [
					[{
						opacity: [0, 1],
						transformPerspective: [2e3, 2e3],
						transformOriginX: ["100%", "100%"],
						transformOriginY: [0, 0],
						rotateY: 180
					}]
				],
				reset: {
					transformPerspective: 0,
					transformOriginX: "50%",
					transformOriginY: "50%",
					rotateY: 0
				}
			}
		};
		for (var c in i.RegisterEffect.packagedEffects) i.RegisterEffect(c, i.RegisterEffect.packagedEffects[c]);
		i.RunSequence = function(t) {
			var a = $.extend(!0, [], t);
			a.length > 1 && ($.each(a.reverse(), function(t, e) {
				var r = a[t + 1];
				if (r) {
					var n = e.o || e.options,
						s = r.o || r.options,
						o = n && n.sequenceQueue === !1 ? "begin" : "complete",
						l = s && s[o],
						c = {};
					c[o] = function() {
						var t = r.e || r.elements,
							a = t.nodeType ? [t] : t;
						l && l.call(a, a), i(e)
					}, r.o ? r.o = $.extend({}, s, c) : r.options = $.extend({}, s, c)
				}
			}), a.reverse()), i(a[0])
		}
	}(window.jQuery || window.Zepto || window, window, document)
});;
jQuery(document).ready(function(jQuery) {
	//variables
	var hijacking = jQuery('#scroll-wrap').data('hijacking'),
		animationType = jQuery('#scroll-wrap').data('animation'),
		delta = 0,
		scrollThreshold = 5,
		actual = 1,
		animating = false;

	//DOM elements
	var sectionsAvailable = jQuery('.cd-section'),
		verticalNav = jQuery('.cd-vertical-nav'),
		prevArrow = verticalNav.find('a.cd-prev'),
		nextArrow = verticalNav.find('a.cd-next');

	//check the media query and bind corresponding events
	var MQ = deviceType(),
		bindToggle = false;

	bindEvents(MQ, true);

	jQuery(window).on('resize', function() {
		MQ = deviceType();
		bindEvents(MQ, bindToggle);
		if (MQ == 'mobile') bindToggle = true;
		if (MQ == 'desktop') bindToggle = false;
	});

	function bindEvents(MQ, bool) {

		if (MQ == 'desktop' && bool) {
			//bind the animation to the window scroll event, arrows click and keyboard
			if (hijacking == 'on') {
				initHijacking();
				jQuery(window).on('DOMMouseScroll mousewheel', scrollHijacking);
			} else {
				scrollAnimation();
				jQuery(window).on('scroll', scrollAnimation);
			}
			prevArrow.on('click', prevSection);
			nextArrow.on('click', nextSection);

			jQuery(document).on('keydown', function(event) {
				if (event.which == '40' && !nextArrow.hasClass('inactive')) {
					event.preventDefault();
					nextSection();
				} else if (event.which == '38' && (!prevArrow.hasClass('inactive') || (prevArrow.hasClass('inactive') && jQuery(window).scrollTop() != sectionsAvailable.eq(0).offset().top))) {
					event.preventDefault();
					prevSection();
				}
			});
			//set navigation arrows visibility
			checkNavigation();
		} else if (MQ == 'mobile') {
			//reset and unbind
			resetSectionStyle();
			jQuery(window).off('DOMMouseScroll mousewheel', scrollHijacking);
			jQuery(window).off('scroll', scrollAnimation);
			prevArrow.off('click', prevSection);
			nextArrow.off('click', nextSection);
			jQuery(document).off('keydown');
		}
	}

	function scrollAnimation() {
		//normal scroll - use requestAnimationFrame (if defined) to optimize performance
		(!window.requestAnimationFrame) ? animateSection(): window.requestAnimationFrame(animateSection);
	}

	function animateSection() {
		var scrollTop = jQuery(window).scrollTop(),
			windowHeight = jQuery(window).height(),
			windowWidth = jQuery(window).width();

		sectionsAvailable.each(function() {
			var actualBlock = jQuery(this),
				offset = scrollTop - actualBlock.offset().top;

			//according to animation type and window scroll, define animation parameters
			var animationValues = setSectionAnimation(offset, windowHeight, animationType);

			transformSection(actualBlock.children('div'), animationValues[0], animationValues[1], animationValues[2], animationValues[3], animationValues[4]);
			(offset >= 0 && offset < windowHeight) ? actualBlock.addClass('visible'): actualBlock.removeClass('visible');
		});

		checkNavigation();
	}

	function transformSection(element, translateY, scaleValue, rotateXValue, opacityValue, boxShadow) {
		//transform sections - normal scroll
		element.velocity({
			translateY: translateY + 'vh',
			scale: scaleValue,
			rotateX: rotateXValue,
			opacity: opacityValue,
			boxShadowBlur: boxShadow + 'px',
			translateZ: 0,
		}, 0);
	}

	function initHijacking() {
		// initialize section style - scrollhijacking
		var visibleSection = sectionsAvailable.filter('.visible'),
			topSection = visibleSection.prevAll('.cd-section'),
			bottomSection = visibleSection.nextAll('.cd-section'),
			animationParams = selectAnimation(animationType, false),
			animationVisible = animationParams[0],
			animationTop = animationParams[1],
			animationBottom = animationParams[2];

		visibleSection.children('div').velocity(animationVisible, 1, function() {
			visibleSection.css('opacity', 1);
			topSection.css('opacity', 1);
			bottomSection.css('opacity', 1);
		});
		topSection.children('div').velocity(animationTop, 0);
		bottomSection.children('div').velocity(animationBottom, 0);
	}

	function scrollHijacking(event) {
		// on mouse scroll - check if animate section
		if (event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0) {
			delta--;
			(Math.abs(delta) >= scrollThreshold) && prevSection();
		} else {
			delta++;
			(delta >= scrollThreshold) && nextSection();
		}
		return false;
	}

	function prevSection(event) {
		//go to previous section
		typeof event !== 'undefined' && event.preventDefault();

		var visibleSection = sectionsAvailable.filter('.visible'),
			middleScroll = (hijacking == 'off' && jQuery(window).scrollTop() != visibleSection.offset().top) ? true : false;
		visibleSection = middleScroll ? visibleSection.next('.cd-section') : visibleSection;

		var animationParams = selectAnimation(animationType, middleScroll, 'prev');
		unbindScroll(visibleSection.prev('.cd-section'), animationParams[3]);

		if (!animating && !visibleSection.is(":first-child")) {
			animating = true;
			visibleSection.removeClass('visible').children('div').velocity(animationParams[2], animationParams[3], animationParams[4])
				.end().prev('.cd-section').addClass('visible').children('div').velocity(animationParams[0], animationParams[3], animationParams[4], function() {
				animating = false;
				if (hijacking == 'off') jQuery(window).on('scroll', scrollAnimation);
			});

			actual = actual - 1;
		}

		resetScroll();
	}

	function nextSection(event) {
		//go to next section
		typeof event !== 'undefined' && event.preventDefault();

		var visibleSection = sectionsAvailable.filter('.visible'),
			middleScroll = (hijacking == 'off' && jQuery(window).scrollTop() != visibleSection.offset().top) ? true : false;

		var animationParams = selectAnimation(animationType, middleScroll, 'next');
		unbindScroll(visibleSection.next('.cd-section'), animationParams[3]);

		if (!animating && !visibleSection.is(":last-of-type")) {
			animating = true;
			visibleSection.removeClass('visible').children('div').velocity(animationParams[1], animationParams[3], animationParams[4])
				.end().next('.cd-section').addClass('visible').children('div').velocity(animationParams[0], animationParams[3], animationParams[4], function() {
				animating = false;
				if (hijacking == 'off') jQuery(window).on('scroll', scrollAnimation);
			});

			actual = actual + 1;
		}
		resetScroll();
	}

	function unbindScroll(section, time) {
		//if clicking on navigation - unbind scroll and animate using custom velocity animation
		if (hijacking == 'off') {
			jQuery(window).off('scroll', scrollAnimation);
			(animationType == 'catch') ? jQuery('body, html').scrollTop(section.offset().top): section.velocity("scroll", {
				duration: time
			});
		}
	}

	function resetScroll() {
		delta = 0;
		checkNavigation();
	}

	function checkNavigation() {
		//update navigation arrows visibility
		(sectionsAvailable.filter('.visible').is(':first-of-type')) ? prevArrow.addClass('inactive'): prevArrow.removeClass('inactive');
		(sectionsAvailable.filter('.visible').is(':last-of-type')) ? nextArrow.addClass('inactive'): nextArrow.removeClass('inactive');
	}

	function resetSectionStyle() {
		//on mobile - remove style applied with jQuery
		sectionsAvailable.children('div').each(function() {
			jQuery(this).attr('style', '');
		});
	}

	function deviceType() {
		//detect if desktop/mobile
		return window.getComputedStyle(document.getElementById('scroll-wrap'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
	}

	function selectAnimation(animationName, middleScroll, direction) {
		// select section animation - scrollhijacking
		var animationVisible = 'translateNone',
			animationTop = 'translateUp',
			animationBottom = 'translateDown',
			easing = 'ease',
			animDuration = 800;

		switch (animationName) {
			case 'scaleDown':
				animationTop = 'scaleDown';
				easing = 'easeInCubic';
				break;
			case 'rotate':
				if (hijacking == 'off') {
					animationTop = 'rotation.scroll';
					animationBottom = 'translateNone';
				} else {
					animationTop = 'rotation';
					easing = 'easeInCubic';
				}
				break;
			case 'gallery':
				animDuration = 1500;
				if (middleScroll) {
					animationTop = 'scaleDown.moveUp.scroll';
					animationVisible = 'scaleUp.moveUp.scroll';
					animationBottom = 'scaleDown.moveDown.scroll';
				} else {
					animationVisible = (direction == 'next') ? 'scaleUp.moveUp' : 'scaleUp.moveDown';
					animationTop = 'scaleDown.moveUp';
					animationBottom = 'scaleDown.moveDown';
				}
				break;
			case 'catch':
				animationVisible = 'translateUp.delay';
				break;
			case 'opacity':
				animDuration = 700;
				animationTop = 'hide.scaleUp';
				animationBottom = 'hide.scaleDown';
				break;
			case 'fixed':
				animationTop = 'translateNone';
				easing = 'easeInCubic';
				break;
			case 'parallax':
				animationTop = 'translateUp.half';
				easing = 'easeInCubic';
				break;
		}

		return [animationVisible, animationTop, animationBottom, animDuration, easing];
	}

	function setSectionAnimation(sectionOffset, windowHeight, animationName) {
		// select section animation - normal scroll
		var scale = 1,
			translateY = 100,
			rotateX = '0deg',
			opacity = 1,
			boxShadowBlur = 0;

		if (sectionOffset >= -windowHeight && sectionOffset <= 0) {
			// section entering the viewport
			translateY = (-sectionOffset) * 100 / windowHeight;

			switch (animationName) {
				case 'scaleDown':
					scale = 1;
					opacity = 1;
					break;
				case 'rotate':
					translateY = 0;
					break;
				case 'gallery':
					if (sectionOffset >= -windowHeight && sectionOffset < -0.9 * windowHeight) {
						scale = -sectionOffset / windowHeight;
						translateY = (-sectionOffset) * 100 / windowHeight;
						boxShadowBlur = 400 * (1 + sectionOffset / windowHeight);
					} else if (sectionOffset >= -0.9 * windowHeight && sectionOffset < -0.1 * windowHeight) {
						scale = 0.9;
						translateY = -(9 / 8) * (sectionOffset + 0.1 * windowHeight) * 100 / windowHeight;
						boxShadowBlur = 40;
					} else {
						scale = 1 + sectionOffset / windowHeight;
						translateY = 0;
						boxShadowBlur = -400 * sectionOffset / windowHeight;
					}
					break;
				case 'catch':
					if (sectionOffset >= -windowHeight && sectionOffset < -0.75 * windowHeight) {
						translateY = 100;
						boxShadowBlur = (1 + sectionOffset / windowHeight) * 160;
					} else {
						translateY = -(10 / 7.5) * sectionOffset * 100 / windowHeight;
						boxShadowBlur = -160 * sectionOffset / (3 * windowHeight);
					}
					break;
				case 'opacity':
					translateY = 0;
					scale = (sectionOffset + 5 * windowHeight) * 0.2 / windowHeight;
					opacity = (sectionOffset + windowHeight) / windowHeight;
					break;
			}

		} else if (sectionOffset > 0 && sectionOffset <= windowHeight) {
			//section leaving the viewport - still has the '.visible' class
			translateY = (-sectionOffset) * 100 / windowHeight;

			switch (animationName) {
				case 'scaleDown':
					scale = (1 - (sectionOffset * 0.3 / windowHeight)).toFixed(5);
					opacity = (1 - (sectionOffset / windowHeight)).toFixed(5);
					translateY = 0;
					boxShadowBlur = 40 * (sectionOffset / windowHeight);

					break;
				case 'rotate':
					opacity = (1 - (sectionOffset / windowHeight)).toFixed(5);
					rotateX = sectionOffset * 90 / windowHeight + 'deg';
					translateY = 0;
					break;
				case 'gallery':
					if (sectionOffset >= 0 && sectionOffset < 0.1 * windowHeight) {
						scale = (windowHeight - sectionOffset) / windowHeight;
						translateY = -(sectionOffset / windowHeight) * 100;
						boxShadowBlur = 400 * sectionOffset / windowHeight;
					} else if (sectionOffset >= 0.1 * windowHeight && sectionOffset < 0.9 * windowHeight) {
						scale = 0.9;
						translateY = -(9 / 8) * (sectionOffset - 0.1 * windowHeight / 9) * 100 / windowHeight;
						boxShadowBlur = 40;
					} else {
						scale = sectionOffset / windowHeight;
						translateY = -100;
						boxShadowBlur = 400 * (1 - sectionOffset / windowHeight);
					}
					break;
				case 'catch':
					if (sectionOffset >= 0 && sectionOffset < windowHeight / 2) {
						boxShadowBlur = sectionOffset * 80 / windowHeight;
					} else {
						boxShadowBlur = 80 * (1 - sectionOffset / windowHeight);
					}
					break;
				case 'opacity':
					translateY = 0;
					scale = (sectionOffset + 5 * windowHeight) * 0.2 / windowHeight;
					opacity = (windowHeight - sectionOffset) / windowHeight;
					break;
				case 'fixed':
					translateY = 0;
					break;
				case 'parallax':
					translateY = (-sectionOffset) * 50 / windowHeight;
					break;

			}

		} else if (sectionOffset < -windowHeight) {
			//section not yet visible
			translateY = 100;

			switch (animationName) {
				case 'scaleDown':
					scale = 1;
					opacity = 1;
					break;
				case 'gallery':
					scale = 1;
					break;
				case 'opacity':
					translateY = 0;
					scale = 0.8;
					opacity = 0;
					break;
			}

		} else {
			//section not visible anymore
			translateY = -100;

			switch (animationName) {
				case 'scaleDown':
					scale = 0;
					opacity = 0.7;
					translateY = 0;
					break;
				case 'rotate':
					translateY = 0;
					rotateX = '90deg';
					break;
				case 'gallery':
					scale = 1;
					break;
				case 'opacity':
					translateY = 0;
					scale = 1.2;
					opacity = 0;
					break;
				case 'fixed':
					translateY = 0;
					break;
				case 'parallax':
					translateY = -50;
					break;
			}
		}

		return [translateY, scale, rotateX, opacity, boxShadowBlur];
	}
});

/* Custom effects registration - feature available in the Velocity UI pack */
//none
jQuery.Velocity
	.RegisterEffect("translateUp", {
		defaultDuration: 1,
		calls: [
			[{
				translateY: '-100%'
			}, 1]
		]
	});
jQuery.Velocity
	.RegisterEffect("translateDown", {
		defaultDuration: 1,
		calls: [
			[{
				translateY: '100%'
			}, 1]
		]
	});
jQuery.Velocity
	.RegisterEffect("translateNone", {
		defaultDuration: 1,
		calls: [
			[{
				translateY: '0',
				opacity: '1',
				scale: '1',
				rotateX: '0',
				boxShadowBlur: '0'
			}, 1]
		]
	});

//scale down
jQuery.Velocity
	.RegisterEffect("scaleDown", {
		defaultDuration: 1,
		calls: [
			[{
				opacity: '0',
				scale: '0.7',
				boxShadowBlur: '40px'
			}, 1]
		]
	});
//rotation
jQuery.Velocity
	.RegisterEffect("rotation", {
		defaultDuration: 1,
		calls: [
			[{
				opacity: '0',
				rotateX: '90',
				translateY: '-100%'
			}, 1]
		]
	});
jQuery.Velocity
	.RegisterEffect("rotation.scroll", {
		defaultDuration: 1,
		calls: [
			[{
				opacity: '0',
				rotateX: '90',
				translateY: '0'
			}, 1]
		]
	});
//gallery
jQuery.Velocity
	.RegisterEffect("scaleDown.moveUp", {
		defaultDuration: 1,
		calls: [
			[{
				translateY: '-10%',
				scale: '0.9',
				boxShadowBlur: '40px'
			}, 0.20],
			[{
				translateY: '-100%'
			}, 0.60],
			[{
				translateY: '-100%',
				scale: '1',
				boxShadowBlur: '0'
			}, 0.20]
		]
	});
jQuery.Velocity
	.RegisterEffect("scaleDown.moveUp.scroll", {
		defaultDuration: 1,
		calls: [
			[{
				translateY: '-100%',
				scale: '0.9',
				boxShadowBlur: '40px'
			}, 0.60],
			[{
				translateY: '-100%',
				scale: '1',
				boxShadowBlur: '0'
			}, 0.40]
		]
	});
jQuery.Velocity
	.RegisterEffect("scaleUp.moveUp", {
		defaultDuration: 1,
		calls: [
			[{
				translateY: '90%',
				scale: '0.9',
				boxShadowBlur: '40px'
			}, 0.20],
			[{
				translateY: '0%'
			}, 0.60],
			[{
				translateY: '0%',
				scale: '1',
				boxShadowBlur: '0'
			}, 0.20]
		]
	});
jQuery.Velocity
	.RegisterEffect("scaleUp.moveUp.scroll", {
		defaultDuration: 1,
		calls: [
			[{
				translateY: '0%',
				scale: '0.9',
				boxShadowBlur: '40px'
			}, 0.60],
			[{
				translateY: '0%',
				scale: '1',
				boxShadowBlur: '0'
			}, 0.40]
		]
	});
jQuery.Velocity
	.RegisterEffect("scaleDown.moveDown", {
		defaultDuration: 1,
		calls: [
			[{
				translateY: '10%',
				scale: '0.9',
				boxShadowBlur: '40px'
			}, 0.20],
			[{
				translateY: '100%'
			}, 0.60],
			[{
				translateY: '100%',
				scale: '1',
				boxShadowBlur: '0'
			}, 0.20]
		]
	});
jQuery.Velocity
	.RegisterEffect("scaleDown.moveDown.scroll", {
		defaultDuration: 1,
		calls: [
			[{
				translateY: '100%',
				scale: '0.9',
				boxShadowBlur: '40px'
			}, 0.60],
			[{
				translateY: '100%',
				scale: '1',
				boxShadowBlur: '0'
			}, 0.40]
		]
	});
jQuery.Velocity
	.RegisterEffect("scaleUp.moveDown", {
		defaultDuration: 1,
		calls: [
			[{
				translateY: '-90%',
				scale: '0.9',
				boxShadowBlur: '40px'
			}, 0.20],
			[{
				translateY: '0%'
			}, 0.60],
			[{
				translateY: '0%',
				scale: '1',
				boxShadowBlur: '0'
			}, 0.20]
		]
	});
//catch up
jQuery.Velocity
	.RegisterEffect("translateUp.delay", {
		defaultDuration: 1,
		calls: [
			[{
				translateY: '0%'
			}, 0.8, {
				delay: 100
			}],
		]
	});
//opacity
jQuery.Velocity
	.RegisterEffect("hide.scaleUp", {
		defaultDuration: 1,
		calls: [
			[{
				opacity: '0',
				scale: '1.2'
			}, 1]
		]
	});
jQuery.Velocity
	.RegisterEffect("hide.scaleDown", {
		defaultDuration: 1,
		calls: [
			[{
				opacity: '0',
				scale: '0.8'
			}, 1]
		]
	});
//parallax
jQuery.Velocity
	.RegisterEffect("translateUp.half", {
		defaultDuration: 1,
		calls: [
			[{
				translateY: '-50%'
			}, 1]
		]
	});;
! function(e, t) {
	if ("function" == typeof define && define.amd) define(["exports", "module"], t);
	else if ("undefined" != typeof exports && "undefined" != typeof module) t(exports, module);
	else {
		var o = {
			exports: {}
		};
		t(o.exports, o), e.autosize = o.exports
	}
}(this, function(e, t) {
	"use strict";

	function o(e) {
		function t() {
			var t = window.getComputedStyle(e, null);
			"vertical" === t.resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), l = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(l) && (l = 0), a()
		}

		function o(t) {
			var o = e.style.width;
			e.style.width = "0px", e.offsetWidth, e.style.width = o, e.style.overflowY = t
		}

		function n(e) {
			for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
				node: e.parentNode,
				scrollTop: e.parentNode.scrollTop
			}), e = e.parentNode;
			return t
		}

		function r() {
			var t = e.style.height,
				o = n(e),
				r = document.documentElement && document.documentElement.scrollTop;
			e.style.height = "auto";
			var i = e.scrollHeight + l;
			return 0 === e.scrollHeight ? void(e.style.height = t) : (e.style.height = i + "px", p = e.clientWidth, o.forEach(function(e) {
				e.node.scrollTop = e.scrollTop
			}), void(r && (document.documentElement.scrollTop = r)))
		}

		function a() {
			r();
			var t = Math.round(parseFloat(e.style.height)),
				n = window.getComputedStyle(e, null),
				i = Math.round(parseFloat(n.height));
			if (i !== t ? "visible" !== n.overflowY && (o("visible"), r(), i = Math.round(parseFloat(window.getComputedStyle(e, null).height))) : "hidden" !== n.overflowY && (o("hidden"), r(), i = Math.round(parseFloat(window.getComputedStyle(e, null).height))), c !== i) {
				c = i;
				var a = s("autosize:resized");
				try {
					e.dispatchEvent(a)
				} catch (e) {}
			}
		}
		if (e && e.nodeName && "TEXTAREA" === e.nodeName && !i.has(e)) {
			var l = null,
				p = e.clientWidth,
				c = null,
				g = function() {
					e.clientWidth !== p && a()
				},
				h = function(t) {
					window.removeEventListener("resize", g, !1), e.removeEventListener("input", a, !1), e.removeEventListener("keyup", a, !1), e.removeEventListener("autosize:destroy", h, !1), e.removeEventListener("autosize:update", a, !1), Object.keys(t).forEach(function(o) {
						e.style[o] = t[o]
					}), i.delete(e)
				}.bind(e, {
					height: e.style.height,
					resize: e.style.resize,
					overflowY: e.style.overflowY,
					overflowX: e.style.overflowX,
					wordWrap: e.style.wordWrap
				});
			e.addEventListener("autosize:destroy", h, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", a, !1), window.addEventListener("resize", g, !1), e.addEventListener("input", a, !1), e.addEventListener("autosize:update", a, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", i.set(e, {
				destroy: h,
				update: a
			}), t()
		}
	}

	function n(e) {
		var t = i.get(e);
		t && t.destroy()
	}

	function r(e) {
		var t = i.get(e);
		t && t.update()
	}
	var i = "function" == typeof Map ? new Map : function() {
			var e = [],
				t = [];
			return {
				has: function(t) {
					return e.indexOf(t) > -1
				},
				get: function(o) {
					return t[e.indexOf(o)]
				},
				set: function(o, n) {
					e.indexOf(o) === -1 && (e.push(o), t.push(n))
				},
				delete: function(o) {
					var n = e.indexOf(o);
					n > -1 && (e.splice(n, 1), t.splice(n, 1))
				}
			}
		}(),
		s = function(e) {
			return new Event(e, {
				bubbles: !0
			})
		};
	try {
		new Event("test")
	} catch (e) {
		s = function(e) {
			var t = document.createEvent("Event");
			return t.initEvent(e, !0, !1), t
		}
	}
	var a = null;
	"undefined" == typeof window || "function" != typeof window.getComputedStyle ? (a = function(e) {
		return e
	}, a.destroy = function(e) {
		return e
	}, a.update = function(e) {
		return e
	}) : (a = function(e, t) {
		return e && Array.prototype.forEach.call(e.length ? e : [e], function(e) {
			return o(e, t)
		}), e
	}, a.destroy = function(e) {
		return e && Array.prototype.forEach.call(e.length ? e : [e], n), e
	}, a.update = function(e) {
		return e && Array.prototype.forEach.call(e.length ? e : [e], r), e
	}), t.exports = a
}), ! function(e, t) {
	"object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define(["jquery", "googlemaps!"], t) : e.GMaps = t()
}(this, function() {
	var t = function(e, t) {
			var o;
			if (e === t) return e;
			for (o in t) void 0 !== t[o] && (e[o] = t[o]);
			return e
		},
		o = function(e, t) {
			var o, n = Array.prototype.slice.call(arguments, 2),
				r = [],
				i = e.length;
			if (Array.prototype.map && e.map === Array.prototype.map) r = Array.prototype.map.call(e, function(e) {
				var o = n.slice(0);
				return o.splice(0, 0, e), t.apply(this, o)
			});
			else
				for (o = 0; i > o; o++) callback_params = n, callback_params.splice(0, 0, e[o]), r.push(t.apply(this, callback_params));
			return r
		},
		n = function(e) {
			var t, o = [];
			for (t = 0; t < e.length; t++) o = o.concat(e[t]);
			return o
		},
		r = function(e, t) {
			var o = e[0],
				n = e[1];
			return t && (o = e[1], n = e[0]), new google.maps.LatLng(o, n)
		},
		i = function(e, t) {
			var o;
			for (o = 0; o < e.length; o++) e[o] instanceof google.maps.LatLng || (e[o].length > 0 && "object" == typeof e[o][0] ? e[o] = i(e[o], t) : e[o] = r(e[o], t));
			return e
		},
		s = function(e, t) {
			var o, n = e.replace(".", "");
			return o = "jQuery" in this && t ? $("." + n, t)[0] : document.getElementsByClassName(n)[0]
		},
		a = function(e, t) {
			var o, e = e.replace("#", "");
			return o = "jQuery" in window && t ? $("#" + e, t)[0] : document.getElementById(e)
		},
		l = function(e) {
			var t = 0,
				o = 0;
			if (e.offsetParent)
				do t += e.offsetLeft, o += e.offsetTop; while (e = e.offsetParent);
			return [t, o]
		},
		p = function(e) {
			var o = document,
				n = function(e) {
					if ("object" != typeof window.google || !window.google.maps) return "object" == typeof window.console && window.console.error && console.error("Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js."),
						function() {};
					if (!this) return new n(e);
					e.zoom = e.zoom || 15, e.mapType = e.mapType || "roadmap";
					var r, i = function(e, t) {
							return void 0 === e ? t : e
						},
						p = this,
						c = ["bounds_changed", "center_changed", "click", "dblclick", "drag", "dragend", "dragstart", "idle", "maptypeid_changed", "projection_changed", "resize", "tilesloaded", "zoom_changed"],
						g = ["mousemove", "mouseout", "mouseover"],
						h = ["el", "lat", "lng", "mapType", "width", "height", "markerClusterer", "enableNewStyle"],
						d = e.el || e.div,
						u = e.markerClusterer,
						f = google.maps.MapTypeId[e.mapType.toUpperCase()],
						m = new google.maps.LatLng(e.lat, e.lng),
						y = i(e.zoomControl, !0),
						v = e.zoomControlOpt || {
								style: "DEFAULT",
								position: "TOP_LEFT"
							},
						w = v.style || "DEFAULT",
						k = v.position || "TOP_LEFT",
						L = i(e.panControl, !0),
						b = i(e.mapTypeControl, !0),
						x = i(e.scaleControl, !0),
						_ = i(e.streetViewControl, !0),
						M = i(M, !0),
						C = {},
						O = {
							zoom: this.zoom,
							center: m,
							mapTypeId: f
						},
						T = {
							panControl: L,
							zoomControl: y,
							zoomControlOptions: {
								style: google.maps.ZoomControlStyle[w],
								position: google.maps.ControlPosition[k]
							},
							mapTypeControl: b,
							scaleControl: x,
							streetViewControl: _,
							overviewMapControl: M
						};
					if ("string" == typeof e.el || "string" == typeof e.div ? d.indexOf("#") > -1 ? this.el = a(d, e.context) : this.el = s.apply(this, [d, e.context]) : this.el = d, "undefined" == typeof this.el || null === this.el) throw "No element defined.";
					for (window.context_menu = window.context_menu || {}, window.context_menu[p.el.id] = {}, this.controls = [], this.overlays = [], this.layers = [], this.singleLayers = {}, this.markers = [], this.polylines = [], this.routes = [], this.polygons = [], this.infoWindow = null, this.overlay_el = null, this.zoom = e.zoom, this.registered_events = {}, this.el.style.width = e.width || this.el.scrollWidth || this.el.offsetWidth, this.el.style.height = e.height || this.el.scrollHeight || this.el.offsetHeight, google.maps.visualRefresh = e.enableNewStyle, r = 0; r < h.length; r++) delete e[h[r]];
					for (1 != e.disableDefaultUI && (O = t(O, T)), C = t(O, e), r = 0; r < c.length; r++) delete C[c[r]];
					for (r = 0; r < g.length; r++) delete C[g[r]];
					this.map = new google.maps.Map(this.el, C), u && (this.markerClusterer = u.apply(this, [this.map]));
					var P = function(e, t) {
						var o = "",
							n = window.context_menu[p.el.id][e];
						for (var r in n)
							if (n.hasOwnProperty(r)) {
								var i = n[r];
								o += '<li><a id="' + e + "_" + r + '" href="#">' + i.title + "</a></li>"
							}
						if (a("gmaps_context_menu")) {
							var s = a("gmaps_context_menu");
							s.innerHTML = o;
							var r, c = s.getElementsByTagName("a"),
								g = c.length;
							for (r = 0; g > r; r++) {
								var h = c[r],
									d = function(o) {
										o.preventDefault(), n[this.id.replace(e + "_", "")].action.apply(p, [t]), p.hideContextMenu()
									};
								google.maps.event.clearListeners(h, "click"), google.maps.event.addDomListenerOnce(h, "click", d, !1)
							}
							var u = l.apply(this, [p.el]),
								f = u[0] + t.pixel.x - 15,
								m = u[1] + t.pixel.y - 15;
							s.style.left = f + "px", s.style.top = m + "px"
						}
					};
					this.buildContextMenu = function(e, t) {
						if ("marker" === e) {
							t.pixel = {};
							var o = new google.maps.OverlayView;
							o.setMap(p.map), o.draw = function() {
								var n = o.getProjection(),
									r = t.marker.getPosition();
								t.pixel = n.fromLatLngToContainerPixel(r), P(e, t)
							}
						} else P(e, t);
						var n = a("gmaps_context_menu");
						setTimeout(function() {
							n.style.display = "block"
						}, 0)
					}, this.setContextMenu = function(e) {
						window.context_menu[p.el.id][e.control] = {};
						var t, n = o.createElement("ul");
						for (t in e.options)
							if (e.options.hasOwnProperty(t)) {
								var r = e.options[t];
								window.context_menu[p.el.id][e.control][r.name] = {
									title: r.title,
									action: r.action
								}
							}
						n.id = "gmaps_context_menu", n.style.display = "none", n.style.position = "absolute", n.style.minWidth = "100px", n.style.background = "white", n.style.listStyle = "none", n.style.padding = "8px", n.style.boxShadow = "2px 2px 6px #ccc", a("gmaps_context_menu") || o.body.appendChild(n);
						var i = a("gmaps_context_menu");
						google.maps.event.addDomListener(i, "mouseout", function(e) {
							e.relatedTarget && this.contains(e.relatedTarget) || window.setTimeout(function() {
								i.style.display = "none"
							}, 400)
						}, !1)
					}, this.hideContextMenu = function() {
						var e = a("gmaps_context_menu");
						e && (e.style.display = "none")
					};
					var z = function(t, o) {
						google.maps.event.addListener(t, o, function(t) {
							void 0 == t && (t = this), e[o].apply(this, [t]), p.hideContextMenu()
						})
					};
					google.maps.event.addListener(this.map, "zoom_changed", this.hideContextMenu);
					for (var S = 0; S < c.length; S++) {
						var W = c[S];
						W in e && z(this.map, W)
					}
					for (var S = 0; S < g.length; S++) {
						var W = g[S];
						W in e && z(this.map, W)
					}
					google.maps.event.addListener(this.map, "rightclick", function(t) {
						e.rightclick && e.rightclick.apply(this, [t]), void 0 != window.context_menu[p.el.id].map && p.buildContextMenu("map", t)
					}), this.refresh = function() {
						google.maps.event.trigger(this.map, "resize")
					}, this.fitZoom = function() {
						var e, t = [],
							o = this.markers.length;
						for (e = 0; o > e; e++) "boolean" == typeof this.markers[e].visible && this.markers[e].visible && t.push(this.markers[e].getPosition());
						this.fitLatLngBounds(t)
					}, this.fitLatLngBounds = function(e) {
						var t, o = e.length,
							n = new google.maps.LatLngBounds;
						for (t = 0; o > t; t++) n.extend(e[t]);
						this.map.fitBounds(n)
					}, this.setCenter = function(e, t, o) {
						this.map.panTo(new google.maps.LatLng(e, t)), o && o()
					}, this.getElement = function() {
						return this.el
					}, this.zoomIn = function(e) {
						e = e || 1, this.zoom = this.map.getZoom() + e, this.map.setZoom(this.zoom)
					}, this.zoomOut = function(e) {
						e = e || 1, this.zoom = this.map.getZoom() - e, this.map.setZoom(this.zoom)
					};
					var E, R = [];
					for (E in this.map) "function" != typeof this.map[E] || this[E] || R.push(E);
					for (r = 0; r < R.length; r++) ! function(e, t, o) {
						e[o] = function() {
							return t[o].apply(t, arguments)
						}
					}(this, this.map, R[r])
				};
			return n
		}(this);
	p.prototype.createControl = function(e) {
		var t = document.createElement("div");
		t.style.cursor = "pointer", e.disableDefaultStyles !== !0 && (t.style.fontFamily = "Roboto, Arial, sans-serif", t.style.fontSize = "11px", t.style.boxShadow = "rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px");
		for (var o in e.style) t.style[o] = e.style[o];
		e.id && (t.id = e.id), e.title && (t.title = e.title), e.classes && (t.className = e.classes), e.content && ("string" == typeof e.content ? t.innerHTML = e.content : e.content instanceof HTMLElement && t.appendChild(e.content)), e.position && (t.position = google.maps.ControlPosition[e.position.toUpperCase()]);
		for (var n in e.events) ! function(t, o) {
			google.maps.event.addDomListener(t, o, function() {
				e.events[o].apply(this, [this])
			})
		}(t, n);
		return t.index = 1, t
	}, p.prototype.addControl = function(e) {
		var t = this.createControl(e);
		return this.controls.push(t), this.map.controls[t.position].push(t), t
	}, p.prototype.removeControl = function(e) {
		var t, o = null;
		for (t = 0; t < this.controls.length; t++) this.controls[t] == e && (o = this.controls[t].position, this.controls.splice(t, 1));
		if (o)
			for (t = 0; t < this.map.controls.length; t++) {
				var n = this.map.controls[e.position];
				if (n.getAt(t) == e) {
					n.removeAt(t);
					break
				}
			}
		return e
	}, p.prototype.createMarker = function(e) {
		if (void 0 == e.lat && void 0 == e.lng && void 0 == e.position) throw "No latitude or longitude defined.";
		var o = this,
			n = e.details,
			r = e.fences,
			i = e.outside,
			s = {
				position: new google.maps.LatLng(e.lat, e.lng),
				map: null
			},
			a = t(s, e);
		delete a.lat, delete a.lng, delete a.fences, delete a.outside;
		var l = new google.maps.Marker(a);
		if (l.fences = r, e.infoWindow) {
			l.infoWindow = new google.maps.InfoWindow(e.infoWindow);
			for (var p = ["closeclick", "content_changed", "domready", "position_changed", "zindex_changed"], c = 0; c < p.length; c++) ! function(t, o) {
				e.infoWindow[o] && google.maps.event.addListener(t, o, function(t) {
					e.infoWindow[o].apply(this, [t])
				})
			}(l.infoWindow, p[c])
		}
		for (var g = ["animation_changed", "clickable_changed", "cursor_changed", "draggable_changed", "flat_changed", "icon_changed", "position_changed", "shadow_changed", "shape_changed", "title_changed", "visible_changed", "zindex_changed"], h = ["dblclick", "drag", "dragend", "dragstart", "mousedown", "mouseout", "mouseover", "mouseup"], c = 0; c < g.length; c++) ! function(t, o) {
			e[o] && google.maps.event.addListener(t, o, function() {
				e[o].apply(this, [this])
			})
		}(l, g[c]);
		for (var c = 0; c < h.length; c++) ! function(t, o, n) {
			e[n] && google.maps.event.addListener(o, n, function(o) {
				o.pixel || (o.pixel = t.getProjection().fromLatLngToPoint(o.latLng)), e[n].apply(this, [o])
			})
		}(this.map, l, h[c]);
		return google.maps.event.addListener(l, "click", function() {
			this.details = n, e.click && e.click.apply(this, [this]), l.infoWindow && (o.hideInfoWindows(), l.infoWindow.open(o.map, l))
		}), google.maps.event.addListener(l, "rightclick", function(t) {
			t.marker = this, e.rightclick && e.rightclick.apply(this, [t]), void 0 != window.context_menu[o.el.id].marker && o.buildContextMenu("marker", t)
		}), l.fences && google.maps.event.addListener(l, "dragend", function() {
			o.checkMarkerGeofence(l, function(e, t) {
				i(e, t)
			})
		}), l
	}, p.prototype.addMarker = function(e) {
		var t;
		if (e.hasOwnProperty("gm_accessors_")) t = e;
		else {
			if (!(e.hasOwnProperty("lat") && e.hasOwnProperty("lng") || e.position)) throw "No latitude or longitude defined.";
			t = this.createMarker(e)
		}
		return t.setMap(this.map), this.markerClusterer && this.markerClusterer.addMarker(t), this.markers.push(t), p.fire("marker_added", t, this), t
	}, p.prototype.addMarkers = function(e) {
		for (var t, o = 0; t = e[o]; o++) this.addMarker(t);
		return this.markers
	}, p.prototype.hideInfoWindows = function() {
		for (var e, t = 0; e = this.markers[t]; t++) e.infoWindow && e.infoWindow.close()
	}, p.prototype.removeMarker = function(e) {
		for (var t = 0; t < this.markers.length; t++)
			if (this.markers[t] === e) {
				this.markers[t].setMap(null), this.markers.splice(t, 1), this.markerClusterer && this.markerClusterer.removeMarker(e), p.fire("marker_removed", e, this);
				break
			}
		return e
	}, p.prototype.removeMarkers = function(e) {
		var t = [];
		if ("undefined" == typeof e) {
			for (var o = 0; o < this.markers.length; o++) {
				var n = this.markers[o];
				n.setMap(null), p.fire("marker_removed", n, this)
			}
			this.markerClusterer && this.markerClusterer.clearMarkers && this.markerClusterer.clearMarkers(), this.markers = t
		} else {
			for (var o = 0; o < e.length; o++) {
				var r = this.markers.indexOf(e[o]);
				if (r > -1) {
					var n = this.markers[r];
					n.setMap(null), this.markerClusterer && this.markerClusterer.removeMarker(n), p.fire("marker_removed", n, this)
				}
			}
			for (var o = 0; o < this.markers.length; o++) {
				var n = this.markers[o];
				null != n.getMap() && t.push(n)
			}
			this.markers = t
		}
	}, p.prototype.drawOverlay = function(e) {
		var t = new google.maps.OverlayView,
			o = !0;
		return t.setMap(this.map), null != e.auto_show && (o = e.auto_show), t.onAdd = function() {
			var o = document.createElement("div");
			o.style.borderStyle = "none", o.style.borderWidth = "0px", o.style.position = "absolute", o.style.zIndex = 100, o.innerHTML = e.content, t.el = o, e.layer || (e.layer = "overlayLayer");
			var n = this.getPanes(),
				r = n[e.layer],
				i = ["contextmenu", "DOMMouseScroll", "dblclick", "mousedown"];
			r.appendChild(o);
			for (var s = 0; s < i.length; s++) ! function(e, t) {
				google.maps.event.addDomListener(e, t, function(e) {
					-1 != navigator.userAgent.toLowerCase().indexOf("msie") && document.all ? (e.cancelBubble = !0, e.returnValue = !1) : e.stopPropagation()
				})
			}(o, i[s]);
			e.click && (n.overlayMouseTarget.appendChild(t.el), google.maps.event.addDomListener(t.el, "click", function() {
				e.click.apply(t, [t])
			})), google.maps.event.trigger(this, "ready")
		}, t.draw = function() {
			var n = this.getProjection(),
				r = n.fromLatLngToDivPixel(new google.maps.LatLng(e.lat, e.lng));
			e.horizontalOffset = e.horizontalOffset || 0, e.verticalOffset = e.verticalOffset || 0;
			var i = t.el,
				s = i.children[0],
				a = s.clientHeight,
				l = s.clientWidth;
			switch (e.verticalAlign) {
				case "top":
					i.style.top = r.y - a + e.verticalOffset + "px";
					break;
				default:
				case "middle":
					i.style.top = r.y - a / 2 + e.verticalOffset + "px";
					break;
				case "bottom":
					i.style.top = r.y + e.verticalOffset + "px"
			}
			switch (e.horizontalAlign) {
				case "left":
					i.style.left = r.x - l + e.horizontalOffset + "px";
					break;
				default:
				case "center":
					i.style.left = r.x - l / 2 + e.horizontalOffset + "px";
					break;
				case "right":
					i.style.left = r.x + e.horizontalOffset + "px"
			}
			i.style.display = o ? "block" : "none", o || e.show.apply(this, [i])
		}, t.onRemove = function() {
			var o = t.el;
			e.remove ? e.remove.apply(this, [o]) : (t.el.parentNode.removeChild(t.el), t.el = null)
		}, this.overlays.push(t), t
	}, p.prototype.removeOverlay = function(e) {
		for (var t = 0; t < this.overlays.length; t++)
			if (this.overlays[t] === e) {
				this.overlays[t].setMap(null), this.overlays.splice(t, 1);
				break
			}
	}, p.prototype.removeOverlays = function() {
		for (var e, t = 0; e = this.overlays[t]; t++) e.setMap(null);
		this.overlays = []
	}, p.prototype.drawPolyline = function(e) {
		var t = [],
			o = e.path;
		if (o.length)
			if (void 0 === o[0][0]) t = o;
			else
				for (var n, r = 0; n = o[r]; r++) t.push(new google.maps.LatLng(n[0], n[1]));
		var i = {
			map: this.map,
			path: t,
			strokeColor: e.strokeColor,
			strokeOpacity: e.strokeOpacity,
			strokeWeight: e.strokeWeight,
			geodesic: e.geodesic,
			clickable: !0,
			editable: !1,
			visible: !0
		};
		e.hasOwnProperty("clickable") && (i.clickable = e.clickable), e.hasOwnProperty("editable") && (i.editable = e.editable), e.hasOwnProperty("icons") && (i.icons = e.icons), e.hasOwnProperty("zIndex") && (i.zIndex = e.zIndex);
		for (var s = new google.maps.Polyline(i), a = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], l = 0; l < a.length; l++) ! function(t, o) {
			e[o] && google.maps.event.addListener(t, o, function(t) {
				e[o].apply(this, [t])
			})
		}(s, a[l]);
		return this.polylines.push(s), p.fire("polyline_added", s, this), s
	}, p.prototype.removePolyline = function(e) {
		for (var t = 0; t < this.polylines.length; t++)
			if (this.polylines[t] === e) {
				this.polylines[t].setMap(null), this.polylines.splice(t, 1), p.fire("polyline_removed", e, this);
				break
			}
	}, p.prototype.removePolylines = function() {
		for (var e, t = 0; e = this.polylines[t]; t++) e.setMap(null);
		this.polylines = []
	}, p.prototype.drawCircle = function(e) {
		e = t({
			map: this.map,
			center: new google.maps.LatLng(e.lat, e.lng)
		}, e), delete e.lat, delete e.lng;
		for (var o = new google.maps.Circle(e), n = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], r = 0; r < n.length; r++) ! function(t, o) {
			e[o] && google.maps.event.addListener(t, o, function(t) {
				e[o].apply(this, [t])
			})
		}(o, n[r]);
		return this.polygons.push(o), o
	}, p.prototype.drawRectangle = function(e) {
		e = t({
			map: this.map
		}, e);
		var o = new google.maps.LatLngBounds(new google.maps.LatLng(e.bounds[0][0], e.bounds[0][1]), new google.maps.LatLng(e.bounds[1][0], e.bounds[1][1]));
		e.bounds = o;
		for (var n = new google.maps.Rectangle(e), r = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], i = 0; i < r.length; i++) ! function(t, o) {
			e[o] && google.maps.event.addListener(t, o, function(t) {
				e[o].apply(this, [t])
			})
		}(n, r[i]);
		return this.polygons.push(n), n
	}, p.prototype.drawPolygon = function(e) {
		var r = !1;
		e.hasOwnProperty("useGeoJSON") && (r = e.useGeoJSON), delete e.useGeoJSON, e = t({
			map: this.map
		}, e), 0 == r && (e.paths = [e.paths.slice(0)]), e.paths.length > 0 && e.paths[0].length > 0 && (e.paths = n(o(e.paths, i, r)));
		for (var s = new google.maps.Polygon(e), a = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], l = 0; l < a.length; l++) ! function(t, o) {
			e[o] && google.maps.event.addListener(t, o, function(t) {
				e[o].apply(this, [t])
			})
		}(s, a[l]);
		return this.polygons.push(s), p.fire("polygon_added", s, this), s
	}, p.prototype.removePolygon = function(e) {
		for (var t = 0; t < this.polygons.length; t++)
			if (this.polygons[t] === e) {
				this.polygons[t].setMap(null), this.polygons.splice(t, 1), p.fire("polygon_removed", e, this);
				break
			}
	}, p.prototype.removePolygons = function() {
		for (var e, t = 0; e = this.polygons[t]; t++) e.setMap(null);
		this.polygons = []
	}, p.prototype.getFromFusionTables = function(e) {
		var t = e.events;
		delete e.events;
		var o = e,
			n = new google.maps.FusionTablesLayer(o);
		for (var r in t) ! function(e, o) {
			google.maps.event.addListener(e, o, function(e) {
				t[o].apply(this, [e])
			})
		}(n, r);
		return this.layers.push(n), n
	}, p.prototype.loadFromFusionTables = function(e) {
		var t = this.getFromFusionTables(e);
		return t.setMap(this.map), t
	}, p.prototype.getFromKML = function(e) {
		var t = e.url,
			o = e.events;
		delete e.url, delete e.events;
		var n = e,
			r = new google.maps.KmlLayer(t, n);
		for (var i in o) ! function(e, t) {
			google.maps.event.addListener(e, t, function(e) {
				o[t].apply(this, [e])
			})
		}(r, i);
		return this.layers.push(r), r
	}, p.prototype.loadFromKML = function(e) {
		var t = this.getFromKML(e);
		return t.setMap(this.map), t
	}, p.prototype.addLayer = function(e, t) {
		t = t || {};
		var o;
		switch (e) {
			case "weather":
				this.singleLayers.weather = o = new google.maps.weather.WeatherLayer;
				break;
			case "clouds":
				this.singleLayers.clouds = o = new google.maps.weather.CloudLayer;
				break;
			case "traffic":
				this.singleLayers.traffic = o = new google.maps.TrafficLayer;
				break;
			case "transit":
				this.singleLayers.transit = o = new google.maps.TransitLayer;
				break;
			case "bicycling":
				this.singleLayers.bicycling = o = new google.maps.BicyclingLayer;
				break;
			case "panoramio":
				this.singleLayers.panoramio = o = new google.maps.panoramio.PanoramioLayer, o.setTag(t.filter), delete t.filter, t.click && google.maps.event.addListener(o, "click", function(e) {
					t.click(e), delete t.click
				});
				break;
			case "places":
				if (this.singleLayers.places = o = new google.maps.places.PlacesService(this.map), t.search || t.nearbySearch || t.radarSearch) {
					var n = {
						bounds: t.bounds || null,
						keyword: t.keyword || null,
						location: t.location || null,
						name: t.name || null,
						radius: t.radius || null,
						rankBy: t.rankBy || null,
						types: t.types || null
					};
					t.radarSearch && o.radarSearch(n, t.radarSearch), t.search && o.search(n, t.search), t.nearbySearch && o.nearbySearch(n, t.nearbySearch)
				}
				if (t.textSearch) {
					var r = {
						bounds: t.bounds || null,
						location: t.location || null,
						query: t.query || null,
						radius: t.radius || null
					};
					o.textSearch(r, t.textSearch)
				}
		}
		return void 0 !== o ? ("function" == typeof o.setOptions && o.setOptions(t), "function" == typeof o.setMap && o.setMap(this.map), o) : void 0
	}, p.prototype.removeLayer = function(e) {
		if ("string" == typeof e && void 0 !== this.singleLayers[e]) this.singleLayers[e].setMap(null), delete this.singleLayers[e];
		else
			for (var t = 0; t < this.layers.length; t++)
				if (this.layers[t] === e) {
					this.layers[t].setMap(null), this.layers.splice(t, 1);
					break
				}
	};
	var c, g;
	return p.prototype.getRoutes = function(e) {
		switch (e.travelMode) {
			case "bicycling":
				c = google.maps.TravelMode.BICYCLING;
				break;
			case "transit":
				c = google.maps.TravelMode.TRANSIT;
				break;
			case "driving":
				c = google.maps.TravelMode.DRIVING;
				break;
			default:
				c = google.maps.TravelMode.WALKING
		}
		g = "imperial" === e.unitSystem ? google.maps.UnitSystem.IMPERIAL : google.maps.UnitSystem.METRIC;
		var o = {
				avoidHighways: !1,
				avoidTolls: !1,
				optimizeWaypoints: !1,
				waypoints: []
			},
			n = t(o, e);
		n.origin = /string/.test(typeof e.origin) ? e.origin : new google.maps.LatLng(e.origin[0], e.origin[1]), n.destination = /string/.test(typeof e.destination) ? e.destination : new google.maps.LatLng(e.destination[0], e.destination[1]), n.travelMode = c, n.unitSystem = g, delete n.callback, delete n.error;
		var r = [],
			i = new google.maps.DirectionsService;
		i.route(n, function(t, o) {
			if (o === google.maps.DirectionsStatus.OK) {
				for (var n in t.routes) t.routes.hasOwnProperty(n) && r.push(t.routes[n]);
				e.callback && e.callback(r, t, o)
			} else e.error && e.error(t, o)
		})
	}, p.prototype.removeRoutes = function() {
		this.routes.length = 0
	}, p.prototype.getElevations = function(e) {
		e = t({
			locations: [],
			path: !1,
			samples: 256
		}, e), e.locations.length > 0 && e.locations[0].length > 0 && (e.locations = n(o([e.locations], i, !1)));
		var r = e.callback;
		delete e.callback;
		var s = new google.maps.ElevationService;
		if (e.path) {
			var a = {
				path: e.locations,
				samples: e.samples
			};
			s.getElevationAlongPath(a, function(e, t) {
				r && "function" == typeof r && r(e, t)
			})
		} else delete e.path, delete e.samples, s.getElevationForLocations(e, function(e, t) {
			r && "function" == typeof r && r(e, t)
		})
	}, p.prototype.cleanRoute = p.prototype.removePolylines, p.prototype.renderRoute = function(e, o) {
		var n, r = "string" == typeof o.panel ? document.getElementById(o.panel.replace("#", "")) : o.panel;
		o.panel = r, o = t({
			map: this.map
		}, o), n = new google.maps.DirectionsRenderer(o), this.getRoutes({
			origin: e.origin,
			destination: e.destination,
			travelMode: e.travelMode,
			waypoints: e.waypoints,
			unitSystem: e.unitSystem,
			error: e.error,
			avoidHighways: e.avoidHighways,
			avoidTolls: e.avoidTolls,
			optimizeWaypoints: e.optimizeWaypoints,
			callback: function(e, t, o) {
				o === google.maps.DirectionsStatus.OK && n.setDirections(t)
			}
		})
	}, p.prototype.drawRoute = function(e) {
		var t = this;
		this.getRoutes({
			origin: e.origin,
			destination: e.destination,
			travelMode: e.travelMode,
			waypoints: e.waypoints,
			unitSystem: e.unitSystem,
			error: e.error,
			avoidHighways: e.avoidHighways,
			avoidTolls: e.avoidTolls,
			optimizeWaypoints: e.optimizeWaypoints,
			callback: function(o) {
				if (o.length > 0) {
					var n = {
						path: o[o.length - 1].overview_path,
						strokeColor: e.strokeColor,
						strokeOpacity: e.strokeOpacity,
						strokeWeight: e.strokeWeight
					};
					e.hasOwnProperty("icons") && (n.icons = e.icons), t.drawPolyline(n), e.callback && e.callback(o[o.length - 1])
				}
			}
		})
	}, p.prototype.travelRoute = function(e) {
		if (e.origin && e.destination) this.getRoutes({
			origin: e.origin,
			destination: e.destination,
			travelMode: e.travelMode,
			waypoints: e.waypoints,
			unitSystem: e.unitSystem,
			error: e.error,
			callback: function(t) {
				if (t.length > 0 && e.start && e.start(t[t.length - 1]), t.length > 0 && e.step) {
					var o = t[t.length - 1];
					if (o.legs.length > 0)
						for (var n, r = o.legs[0].steps, i = 0; n = r[i]; i++) n.step_number = i, e.step(n, o.legs[0].steps.length - 1)
				}
				t.length > 0 && e.end && e.end(t[t.length - 1])
			}
		});
		else if (e.route && e.route.legs.length > 0)
			for (var t, o = e.route.legs[0].steps, n = 0; t = o[n]; n++) t.step_number = n, e.step(t)
	}, p.prototype.drawSteppedRoute = function(e) {
		var t = this;
		if (e.origin && e.destination) this.getRoutes({
			origin: e.origin,
			destination: e.destination,
			travelMode: e.travelMode,
			waypoints: e.waypoints,
			error: e.error,
			callback: function(o) {
				if (o.length > 0 && e.start && e.start(o[o.length - 1]), o.length > 0 && e.step) {
					var n = o[o.length - 1];
					if (n.legs.length > 0)
						for (var r, i = n.legs[0].steps, s = 0; r = i[s]; s++) {
							r.step_number = s;
							var a = {
								path: r.path,
								strokeColor: e.strokeColor,
								strokeOpacity: e.strokeOpacity,
								strokeWeight: e.strokeWeight
							};
							e.hasOwnProperty("icons") && (a.icons = e.icons), t.drawPolyline(a), e.step(r, n.legs[0].steps.length - 1)
						}
				}
				o.length > 0 && e.end && e.end(o[o.length - 1])
			}
		});
		else if (e.route && e.route.legs.length > 0)
			for (var o, n = e.route.legs[0].steps, r = 0; o = n[r]; r++) {
				o.step_number = r;
				var i = {
					path: o.path,
					strokeColor: e.strokeColor,
					strokeOpacity: e.strokeOpacity,
					strokeWeight: e.strokeWeight
				};
				e.hasOwnProperty("icons") && (i.icons = e.icons), t.drawPolyline(i), e.step(o)
			}
	}, p.Route = function(e) {
		this.origin = e.origin, this.destination = e.destination, this.waypoints = e.waypoints, this.map = e.map, this.route = e.route, this.step_count = 0, this.steps = this.route.legs[0].steps, this.steps_length = this.steps.length;
		var t = {
			path: new google.maps.MVCArray,
			strokeColor: e.strokeColor,
			strokeOpacity: e.strokeOpacity,
			strokeWeight: e.strokeWeight
		};
		e.hasOwnProperty("icons") && (t.icons = e.icons), this.polyline = this.map.drawPolyline(t).getPath()
	}, p.Route.prototype.getRoute = function(t) {
		var o = this;
		this.map.getRoutes({
			origin: this.origin,
			destination: this.destination,
			travelMode: t.travelMode,
			waypoints: this.waypoints || [],
			error: t.error,
			callback: function() {
				o.route = e[0], t.callback && t.callback.call(o)
			}
		})
	}, p.Route.prototype.back = function() {
		if (this.step_count > 0) {
			this.step_count--;
			var e = this.route.legs[0].steps[this.step_count].path;
			for (var t in e) e.hasOwnProperty(t) && this.polyline.pop()
		}
	}, p.Route.prototype.forward = function() {
		if (this.step_count < this.steps_length) {
			var e = this.route.legs[0].steps[this.step_count].path;
			for (var t in e) e.hasOwnProperty(t) && this.polyline.push(e[t]);
			this.step_count++
		}
	}, p.prototype.checkGeofence = function(e, t, o) {
		return o.containsLatLng(new google.maps.LatLng(e, t))
	}, p.prototype.checkMarkerGeofence = function(e, t) {
		if (e.fences)
			for (var o, n = 0; o = e.fences[n]; n++) {
				var r = e.getPosition();
				this.checkGeofence(r.lat(), r.lng(), o) || t(e, o)
			}
	}, p.prototype.toImage = function(e) {
		var e = e || {},
			t = {};
		if (t.size = e.size || [this.el.clientWidth, this.el.clientHeight], t.lat = this.getCenter().lat(), t.lng = this.getCenter().lng(), this.markers.length > 0) {
			t.markers = [];
			for (var o = 0; o < this.markers.length; o++) t.markers.push({
				lat: this.markers[o].getPosition().lat(),
				lng: this.markers[o].getPosition().lng()
			})
		}
		if (this.polylines.length > 0) {
			var n = this.polylines[0];
			t.polyline = {}, t.polyline.path = google.maps.geometry.encoding.encodePath(n.getPath()), t.polyline.strokeColor = n.strokeColor, t.polyline.strokeOpacity = n.strokeOpacity, t.polyline.strokeWeight = n.strokeWeight
		}
		return p.staticMapURL(t)
	}, p.staticMapURL = function(e) {
		function t(e, t) {
			if ("#" === e[0] && (e = e.replace("#", "0x"), t)) {
				if (t = parseFloat(t), t = Math.min(1, Math.max(t, 0)), 0 === t) return "0x00000000";
				t = (255 * t).toString(16), 1 === t.length && (t += t), e = e.slice(0, 8) + t
			}
			return e
		}
		var o, n = [],
			r = ("file:" === location.protocol ? "http:" : location.protocol) + "//maps.googleapis.com/maps/api/staticmap";
		e.url && (r = e.url, delete e.url), r += "?";
		var i = e.markers;
		delete e.markers, !i && e.marker && (i = [e.marker], delete e.marker);
		var s = e.styles;
		delete e.styles;
		var a = e.polyline;
		if (delete e.polyline, e.center) n.push("center=" + e.center), delete e.center;
		else if (e.address) n.push("center=" + e.address), delete e.address;
		else if (e.lat) n.push(["center=", e.lat, ",", e.lng].join("")), delete e.lat, delete e.lng;
		else if (e.visible) {
			var l = encodeURI(e.visible.join("|"));
			n.push("visible=" + l)
		}
		var p = e.size;
		p ? (p.join && (p = p.join("x")), delete e.size) : p = "630x300", n.push("size=" + p), e.zoom || e.zoom === !1 || (e.zoom = 15);
		var c = !e.hasOwnProperty("sensor") || !!e.sensor;
		delete e.sensor, n.push("sensor=" + c);
		for (var g in e) e.hasOwnProperty(g) && n.push(g + "=" + e[g]);
		if (i)
			for (var h, d, u = 0; o = i[u]; u++) {
				h = [], o.size && "normal" !== o.size ? (h.push("size:" + o.size), delete o.size) : o.icon && (h.push("icon:" + encodeURI(o.icon)), delete o.icon), o.color && (h.push("color:" + o.color.replace("#", "0x")), delete o.color), o.label && (h.push("label:" + o.label[0].toUpperCase()), delete o.label), d = o.address ? o.address : o.lat + "," + o.lng, delete o.address, delete o.lat, delete o.lng;
				for (var g in o) o.hasOwnProperty(g) && h.push(g + ":" + o[g]);
				h.length || 0 === u ? (h.push(d), h = h.join("|"), n.push("markers=" + encodeURI(h))) : (h = n.pop() + encodeURI("|" + d), n.push(h))
			}
		if (s)
			for (var u = 0; u < s.length; u++) {
				var f = [];
				s[u].featureType && f.push("feature:" + s[u].featureType.toLowerCase()), s[u].elementType && f.push("element:" + s[u].elementType.toLowerCase());
				for (var m = 0; m < s[u].stylers.length; m++)
					for (var y in s[u].stylers[m]) {
						var v = s[u].stylers[m][y];
						("hue" == y || "color" == y) && (v = "0x" + v.substring(1)), f.push(y + ":" + v)
					}
				var w = f.join("|");
				"" != w && n.push("style=" + w)
			}
		if (a) {
			if (o = a, a = [], o.strokeWeight && a.push("weight:" + parseInt(o.strokeWeight, 10)), o.strokeColor) {
				var k = t(o.strokeColor, o.strokeOpacity);
				a.push("color:" + k)
			}
			if (o.fillColor) {
				var L = t(o.fillColor, o.fillOpacity);
				a.push("fillcolor:" + L)
			}
			var b = o.path;
			if (b.join)
				for (var x, m = 0; x = b[m]; m++) a.push(x.join(","));
			else a.push("enc:" + b);
			a = a.join("|"), n.push("path=" + encodeURI(a))
		}
		var _ = window.devicePixelRatio || 1;
		return n.push("scale=" + _), n = n.join("&"), r + n
	}, p.prototype.addMapType = function(e, t) {
		if (!t.hasOwnProperty("getTileUrl") || "function" != typeof t.getTileUrl) throw "'getTileUrl' function required.";
		t.tileSize = t.tileSize || new google.maps.Size(256, 256);
		var o = new google.maps.ImageMapType(t);
		this.map.mapTypes.set(e, o)
	}, p.prototype.addOverlayMapType = function(e) {
		if (!e.hasOwnProperty("getTile") || "function" != typeof e.getTile) throw "'getTile' function required.";
		var t = e.index;
		delete e.index, this.map.overlayMapTypes.insertAt(t, e)
	}, p.prototype.removeOverlayMapType = function(e) {
		this.map.overlayMapTypes.removeAt(e)
	}, p.prototype.addStyle = function(e) {
		var t = new google.maps.StyledMapType(e.styles, {
			name: e.styledMapName
		});
		this.map.mapTypes.set(e.mapTypeId, t)
	}, p.prototype.setStyle = function(e) {
		this.map.setMapTypeId(e)
	}, p.prototype.createPanorama = function(e) {
		return e.hasOwnProperty("lat") && e.hasOwnProperty("lng") || (e.lat = this.getCenter().lat(), e.lng = this.getCenter().lng()), this.panorama = p.createPanorama(e), this.map.setStreetView(this.panorama), this.panorama
	}, p.createPanorama = function(e) {
		var o = a(e.el, e.context);
		e.position = new google.maps.LatLng(e.lat, e.lng), delete e.el, delete e.context, delete e.lat, delete e.lng;
		for (var n = ["closeclick", "links_changed", "pano_changed", "position_changed", "pov_changed", "resize", "visible_changed"], r = t({
			visible: !0
		}, e), i = 0; i < n.length; i++) delete r[n[i]];
		for (var s = new google.maps.StreetViewPanorama(o, r), i = 0; i < n.length; i++) ! function(t, o) {
			e[o] && google.maps.event.addListener(t, o, function() {
				e[o].apply(this)
			})
		}(s, n[i]);
		return s
	}, p.prototype.on = function(e, t) {
		return p.on(e, this, t)
	}, p.prototype.off = function(e) {
		p.off(e, this)
	}, p.prototype.once = function(e, t) {
		return p.once(e, this, t);
	}, p.custom_events = ["marker_added", "marker_removed", "polyline_added", "polyline_removed", "polygon_added", "polygon_removed", "geolocated", "geolocation_failed"], p.on = function(e, t, o) {
		if (-1 == p.custom_events.indexOf(e)) return t instanceof p && (t = t.map), google.maps.event.addListener(t, e, o);
		var n = {
			handler: o,
			eventName: e
		};
		return t.registered_events[e] = t.registered_events[e] || [], t.registered_events[e].push(n), n
	}, p.off = function(e, t) {
		-1 == p.custom_events.indexOf(e) ? (t instanceof p && (t = t.map), google.maps.event.clearListeners(t, e)) : t.registered_events[e] = []
	}, p.once = function(e, t, o) {
		return -1 == p.custom_events.indexOf(e) ? (t instanceof p && (t = t.map), google.maps.event.addListenerOnce(t, e, o)) : void 0
	}, p.fire = function(e, t, o) {
		if (-1 == p.custom_events.indexOf(e)) google.maps.event.trigger(t, e, Array.prototype.slice.apply(arguments).slice(2));
		else if (e in o.registered_events)
			for (var n = o.registered_events[e], r = 0; r < n.length; r++) ! function(e, t, o) {
				e.apply(t, [o])
			}(n[r].handler, o, t)
	}, p.geolocate = function(e) {
		var t = e.always || e.complete;
		navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(o) {
			e.success(o), t && t()
		}, function(o) {
			e.error(o), t && t()
		}, e.options) : (e.not_supported(), t && t())
	}, p.geocode = function(e) {
		this.geocoder = new google.maps.Geocoder;
		var t = e.callback;
		e.hasOwnProperty("lat") && e.hasOwnProperty("lng") && (e.latLng = new google.maps.LatLng(e.lat, e.lng)), delete e.lat, delete e.lng, delete e.callback, this.geocoder.geocode(e, function(e, o) {
			t(e, o)
		})
	}, "object" == typeof window.google && window.google.maps && (google.maps.Polygon.prototype.getBounds || (google.maps.Polygon.prototype.getBounds = function(e) {
		for (var t, o = new google.maps.LatLngBounds, n = this.getPaths(), r = 0; r < n.getLength(); r++) {
			t = n.getAt(r);
			for (var i = 0; i < t.getLength(); i++) o.extend(t.getAt(i))
		}
		return o
	}), google.maps.Polygon.prototype.containsLatLng || (google.maps.Polygon.prototype.containsLatLng = function(e) {
		var t = this.getBounds();
		if (null !== t && !t.contains(e)) return !1;
		for (var o = !1, n = this.getPaths().getLength(), r = 0; n > r; r++)
			for (var i = this.getPaths().getAt(r), s = i.getLength(), a = s - 1, l = 0; s > l; l++) {
				var p = i.getAt(l),
					c = i.getAt(a);
				(p.lng() < e.lng() && c.lng() >= e.lng() || c.lng() < e.lng() && p.lng() >= e.lng()) && p.lat() + (e.lng() - p.lng()) / (c.lng() - p.lng()) * (c.lat() - p.lat()) < e.lat() && (o = !o), a = l
			}
		return o
	}), google.maps.Circle.prototype.containsLatLng || (google.maps.Circle.prototype.containsLatLng = function(e) {
		return !google.maps.geometry || google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(), e) <= this.getRadius()
	}), google.maps.Rectangle.prototype.containsLatLng = function(e) {
		return this.getBounds().contains(e)
	}, google.maps.LatLngBounds.prototype.containsLatLng = function(e) {
		return this.contains(e)
	}, google.maps.Marker.prototype.setFences = function(e) {
		this.fences = e
	}, google.maps.Marker.prototype.addFence = function(e) {
		this.fences.push(e)
	}, google.maps.Marker.prototype.getId = function() {
		return this.__gm_id
	}), Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
		if (null == this) throw new TypeError;
		var t = Object(this),
			o = t.length >>> 0;
		if (0 === o) return -1;
		var n = 0;
		if (arguments.length > 1 && (n = Number(arguments[1]), n != n ? n = 0 : 0 != n && n != 1 / 0 && n != -(1 / 0) && (n = (n > 0 || -1) * Math.floor(Math.abs(n)))), n >= o) return -1;
		for (var r = n >= 0 ? n : Math.max(o - Math.abs(n), 0); o > r; r++)
			if (r in t && t[r] === e) return r;
		return -1
	}), p
});;