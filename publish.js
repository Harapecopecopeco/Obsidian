// Copyright 2012 Google Inc. All rights reserved.
(function () {

        var data = {
            "resource": {
                "version": "1",

                "macros": [{
                    "function": "__e"
                }, {
                    "function": "__aev",
                    "vtp_varType": "URL",
                    "vtp_component": "IS_OUTBOUND",
                    "vtp_affiliatedDomains": ["list"]
                }, {
                    "function": "__v",
                    "vtp_name": "gtm.triggers",
                    "vtp_dataLayerVersion": 2,
                    "vtp_setDefaultValue": true,
                    "vtp_defaultValue": ""
                }, {
                    "function": "__v",
                    "vtp_name": "gtm.elementId",
                    "vtp_dataLayerVersion": 1
                }, {
                    "function": "__v",
                    "vtp_name": "gtm.elementClasses",
                    "vtp_dataLayerVersion": 1
                }, {
                    "function": "__aev",
                    "vtp_varType": "URL",
                    "vtp_component": "URL_NO_FRAGMENT"
                }, {
                    "function": "__aev",
                    "vtp_varType": "URL",
                    "vtp_component": "HOST",
                    "vtp_stripWww": true
                }, {
                    "function": "__aev",
                    "vtp_varType": "URL",
                    "vtp_component": "EXTENSION"
                }, {
                    "function": "__aev",
                    "vtp_varType": "TEXT"
                }, {
                    "function": "__aev",
                    "vtp_varType": "URL",
                    "vtp_component": "PATH"
                }, {
                    "function": "__v",
                    "vtp_name": "gtm.videoStatus",
                    "vtp_dataLayerVersion": 1
                }, {
                    "function": "__v",
                    "vtp_name": "gtm.videoUrl",
                    "vtp_dataLayerVersion": 1
                }, {
                    "function": "__v",
                    "vtp_name": "gtm.videoTitle",
                    "vtp_dataLayerVersion": 1
                }, {
                    "function": "__v",
                    "vtp_name": "gtm.videoProvider",
                    "vtp_dataLayerVersion": 1
                }, {
                    "function": "__v",
                    "vtp_name": "gtm.videoCurrentTime",
                    "vtp_dataLayerVersion": 1
                }, {
                    "function": "__v",
                    "vtp_name": "gtm.videoDuration",
                    "vtp_dataLayerVersion": 1
                }, {
                    "function": "__v",
                    "vtp_name": "gtm.videoPercent",
                    "vtp_dataLayerVersion": 1
                }, {
                    "function": "__v",
                    "vtp_name": "gtm.videoVisible",
                    "vtp_dataLayerVersion": 1
                }, {
                    "function": "__u",
                    "vtp_component": "QUERY",
                    "vtp_queryKey": "q,s,search,query,keyword",
                    "vtp_multiQueryKeys": true,
                    "vtp_ignoreEmptyQueryParam": true,
                    "vtp_enableMultiQueryKeys": false,
                    "vtp_enableIgnoreEmptyQueryParam": false
                }, {
                    "function": "__v",
                    "vtp_name": "gtm.scrollThreshold",
                    "vtp_dataLayerVersion": 1
                }, {
                    "function": "__v",
                    "vtp_name": "gtm.historyChangeSource",
                    "vtp_dataLayerVersion": 1
                }, {
                    "function": "__v",
                    "vtp_name": "gtm.oldUrl",
                    "vtp_dataLayerVersion": 1
                }, {
                    "function": "__v",
                    "vtp_name": "gtm.newUrl",
                    "vtp_dataLayerVersion": 1
                }, {
                    "function": "__c",
                    "vtp_value": "google.co.jp"
                }, {
                    "function": "__c",
                    "vtp_value": 0
                }, {
                    "vtp_signal": 0,
                    "function": "__c",
                    "vtp_value": 0
                }],
                "tags": [{
                    "function": "__gct",
                    "vtp_trackingId": "G-4Q2MRL1K2Y",
                    "vtp_sessionDuration": 0,
                    "tag_id": 1
                }, {
                    "function": "__get",
                    "vtp_eventName": "click",
                    "vtp_settings": ["map", "streamId", "G-4Q2MRL1K2Y", "eventParameters", ["map", "link_id", ["macro", 3], "link_classes", ["macro", 4], "link_url", ["macro", 5], "link_domain", ["macro", 6], "outbound", true]],
                    "vtp_deferrable": false,
                    "tag_id": 11
                }, {
                    "function": "__get",
                    "vtp_eventName": "file_download",
                    "vtp_settings": ["map", "streamId", "G-4Q2MRL1K2Y", "eventParameters", ["map", "link_id", ["macro", 3], "link_text", ["macro", 8], "link_url", ["macro", 5], "file_name", ["macro", 9], "file_extension", ["macro", 7]]],
                    "vtp_deferrable": false,
                    "tag_id": 18
                }, {
                    "function": "__get",
                    "vtp_eventName": ["template", "video_", ["macro", 10]],
                    "vtp_settings": ["map", "streamId", "G-4Q2MRL1K2Y", "eventParameters", ["map", "video_url", ["macro", 11], "video_title", ["macro", 12], "video_provider", ["macro", 13], "video_current_time", ["macro", 14], "video_duration", ["macro", 15], "video_percent", ["macro", 16], "visible", ["macro", 17]]],
                    "vtp_deferrable": false,
                    "tag_id": 21
                }, {
                    "function": "__get",
                    "vtp_eventName": "view_search_results",
                    "vtp_settings": ["map", "streamId", "G-4Q2MRL1K2Y", "eventParameters", ["map", "search_term", ["macro", 18]]],
                    "vtp_deferrable": true,
                    "tag_id": 26
                }, {
                    "function": "__get",
                    "vtp_eventName": "scroll",
                    "vtp_settings": ["map", "streamId", "G-4Q2MRL1K2Y", "eventParameters", ["map", "percent_scrolled", ["macro", 19]]],
                    "vtp_deferrable": false,
                    "tag_id": 29
                }, {
                    "function": "__get",
                    "vtp_eventName": "page_view",
                    "vtp_settings": ["map", "streamId", "G-4Q2MRL1K2Y", "eventParameters", ["map", "page_referrer", ["macro", 21]]],
                    "vtp_deferrable": false,
                    "tag_id": 32
                }, {
                    "function": "__dlm",
                    "vtp_userInput": ["list", ["map", "key", "gtm.gtagReferrer.G-4Q2MRL1K2Y", "value", ["macro", 21]]],
                    "tag_id": 33
                }, {
                    "function": "__set_product_settings",
                    "original_activity_id": 3001,
                    "vtp_foreignTldMacroResult": ["macro", 23],
                    "vtp_isChinaVipRegionMacroResult": ["macro", 24],
                    "tag_id": 36
                }, {
                    "function": "__ogt_event_settings",
                    "original_activity_id": 3002,
                    "vtp_eventSettings": ["list", ["map", "name", "purchase", "conversion", true]],
                    "tag_id": 37
                }, {
                    "function": "__ogt_google_signals",
                    "original_activity_id": 3003,
                    "vtp_googleSignals": "DISABLED",
                    "vtp_serverMacroResult": ["macro", 25],
                    "tag_id": 38
                }, {
                    "function": "__lcl",
                    "vtp_waitForTags": false,
                    "vtp_checkValidation": true,
                    "vtp_uniqueTriggerId": "1_9",
                    "tag_id": 39
                }, {
                    "function": "__lcl",
                    "vtp_waitForTags": false,
                    "vtp_checkValidation": true,
                    "vtp_uniqueTriggerId": "1_16",
                    "tag_id": 40
                }, {
                    "function": "__ytl",
                    "vtp_captureStart": true,
                    "vtp_captureComplete": true,
                    "vtp_captureProgress": true,
                    "vtp_progressThresholdsPercent": "10,25,50,75",
                    "vtp_triggerStartOption": "DOM_READY",
                    "vtp_uniqueTriggerId": "1_19",
                    "vtp_enableTriggerStartOption": true,
                    "tag_id": 41
                }, {
                    "function": "__sdl",
                    "vtp_verticalThresholdUnits": "PERCENT",
                    "vtp_verticalThresholdsPercent": "90",
                    "vtp_verticalThresholdOn": true,
                    "vtp_horizontalThresholdOn": false,
                    "vtp_triggerStartOption": "WINDOW_LOAD",
                    "vtp_uniqueTriggerId": "1_27",
                    "vtp_enableTriggerStartOption": true,
                    "tag_id": 42
                }, {
                    "function": "__ehl",
                    "vtp_groupEvents": true,
                    "vtp_groupEventsInterval": 1000,
                    "vtp_uniqueTriggerId": "1_30",
                    "tag_id": 43
                }],
                "predicates": [{
                    "function": "_eq",
                    "arg0": ["macro", 0],
                    "arg1": "gtm.js"
                }, {
                    "function": "_eq",
                    "arg0": ["macro", 1],
                    "arg1": true
                }, {
                    "function": "_eq",
                    "arg0": ["macro", 0],
                    "arg1": "gtm.linkClick"
                }, {
                    "function": "_re",
                    "arg0": ["macro", 2],
                    "arg1": "(^$|((^|,)1_9($|,)))"
                }, {
                    "function": "_re",
                    "arg0": ["macro", 7],
                    "arg1": "pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma",
                    "ignore_case": true
                }, {
                    "function": "_re",
                    "arg0": ["macro", 2],
                    "arg1": "(^$|((^|,)1_16($|,)))"
                }, {
                    "function": "_eq",
                    "arg0": ["macro", 0],
                    "arg1": "gtm.video"
                }, {
                    "function": "_re",
                    "arg0": ["macro", 2],
                    "arg1": "(^$|((^|,)1_19($|,)))"
                }, {
                    "function": "_eq",
                    "arg0": ["macro", 18],
                    "arg1": "undefined"
                }, {
                    "function": "_eq",
                    "arg0": ["macro", 0],
                    "arg1": "gtm.scrollDepth"
                }, {
                    "function": "_re",
                    "arg0": ["macro", 2],
                    "arg1": "(^$|((^|,)1_27($|,)))"
                }, {
                    "function": "_eq",
                    "arg0": ["macro", 20],
                    "arg1": ["list", "pushState", "popstate", "replaceState"],
                    "any_of": true
                }, {
                    "function": "_eq",
                    "arg0": ["macro", 21],
                    "arg1": ["macro", 22]
                }, {
                    "function": "_eq",
                    "arg0": ["macro", 0],
                    "arg1": "gtm.historyChange-v2"
                }, {
                    "function": "_re",
                    "arg0": ["macro", 2],
                    "arg1": "(^$|((^|,)1_30($|,)))"
                }, {
                    "function": "_eq",
                    "arg0": ["macro", 0],
                    "arg1": "gtm.init"
                }, {
                    "function": "_eq",
                    "arg0": ["macro", 0],
                    "arg1": "gtm.dom"
                }, {
                    "function": "_eq",
                    "arg0": ["macro", 0],
                    "arg1": "gtm.load"
                }],
                "rules": [[["if", 0], ["add", 0, 11, 12, 15]], [["if", 1, 2, 3], ["add", 1]], [["if", 2, 4, 5], ["add", 2]], [["if", 6, 7], ["add", 3]], [["if", 0], ["unless", 8], ["add", 4]], [["if", 9, 10], ["add", 5]], [["if", 11, 13, 14], ["unless", 12], ["add", 6, 7]], [["if", 15], ["add", 8, 9, 10]], [["if", 16], ["add", 13]], [["if", 17], ["add", 14]]]
            },
            "runtime": [[50, "__ogt_event_settings", [46, "a"], [52, "b", ["require", "internal.setProductSettingsParameter"]], [52, "c", ["require", "getContainerVersion"]], [52, "d", [8]], [53, [41, "f"], [3, "f", 0], [63, [7, "f"], [23, [15, "f"], [17, [17, [15, "a"], "eventSettings"], "length"]], [33, [15, "f"], [3, "f", [0, [15, "f"], 1]]], [46, [53, [52, "g", [16, [16, [17, [15, "a"], "eventSettings"], [15, "f"]], "name"]], [43, [15, "d"], [15, "g"], [8, "blacklisted", [16, [16, [17, [15, "a"], "eventSettings"], [15, "f"]], "blacklisted"], "conversion", [16, [16, [17, [15, "a"], "eventSettings"], [15, "f"]], "conversion"]]]]]]], [52, "e", [17, ["c"], "containerId"]], ["b", [15, "e"], "event_settings", [15, "d"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ogt_google_signals", [46, "a"], [52, "b", ["require", "internal.setProductSettingsParameter"]], [52, "c", ["require", "getContainerVersion"]], [52, "d", [17, ["c"], "containerId"]], ["b", [15, "d"], "google_signals", [20, [17, [15, "a"], "serverMacroResult"], 1]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__set_product_settings", [46, "a"], [52, "b", ["require", "internal.setProductSettingsParameter"]], [52, "c", ["require", "getContainerVersion"]], [52, "d", [17, ["c"], "containerId"]], ["b", [15, "d"], "google_tld", [17, [15, "a"], "foreignTldMacroResult"]], ["b", [15, "d"], "ga_restrict_domain", [20, [17, [15, "a"], "isChinaVipRegionMacroResult"], 1]], [2, [15, "a"], "gtmOnSuccess", [7]]]],
            "permissions": {
                "__ogt_event_settings": {
                    "read_container_data": {}
                },
                "__ogt_google_signals": {
                    "read_container_data": {}
                },
                "__set_product_settings": {
                    "read_container_data": {}
                }
            }
            ,
            "security_groups": {
                "google": ["__ogt_event_settings", "__ogt_google_signals", "__set_product_settings"]
            }

        };

        /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
        var k, ca = function (a) {
            var b = 0;
            return function () {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        }, da = function (a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: ca(a)
            }
        }, ea = "function" == typeof Object.create ? Object.create : function (a) {
            var b = function () {
            };
            b.prototype = a;
            return new b
        }
            , ha;
        if ("function" == typeof Object.setPrototypeOf)
            ha = Object.setPrototypeOf;
        else {
            var ia;
            a: {
                var ja = {
                    a: !0
                }
                    , ka = {};
                try {
                    ka.__proto__ = ja;
                    ia = ka.a;
                    break a
                } catch (a) {
                }
                ia = !1
            }
            ha = ia ? function (a, b) {
                    a.__proto__ = b;
                    if (a.__proto__ !== b)
                        throw new TypeError(a + " is not extensible");
                    return a
                }
                : null
        }
        var la = ha
            , ma = function (a, b) {
            a.prototype = ea(b.prototype);
            a.prototype.constructor = a;
            if (la)
                la(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else
                            a[c] = b[c];
            a.uk = b.prototype
        }
            , oa = this || self
            , pa = function (a) {
            return a
        };
        var qa = function (a, b) {
            this.g = a;
            this.o = b
        };
        var ra = function (a) {
            return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
        }
            , sa = function () {
            this.C = {};
            this.s = !1;
            this.F = {}
        }
            , ta = function (a, b) {
            var c = [], d;
            for (d in a.C)
                if (a.C.hasOwnProperty(d))
                    switch (d = d.substr(5),
                        b) {
                        case 1:
                            c.push(d);
                            break;
                        case 2:
                            c.push(a.get(d));
                            break;
                        case 3:
                            c.push([d, a.get(d)])
                    }
            return c
        };
        sa.prototype.get = function (a) {
            return this.C["dust." + a]
        }
        ;
        sa.prototype.set = function (a, b) {
            this.s || (a = "dust." + a,
            this.F.hasOwnProperty(a) || (this.C[a] = b))
        }
        ;
        sa.prototype.has = function (a) {
            return this.C.hasOwnProperty("dust." + a)
        }
        ;
        var ua = function (a, b) {
            b = "dust." + b;
            a.s || a.F.hasOwnProperty(b) || delete a.C[b]
        };
        sa.prototype.Ab = function () {
            this.s = !0
        }
        ;
        var wa = function (a) {
            this.o = new sa;
            this.g = [];
            this.s = !1;
            a = a || [];
            for (var b in a)
                a.hasOwnProperty(b) && (ra(b) ? this.g[Number(b)] = a[Number(b)] : this.o.set(b, a[b]))
        };
        k = wa.prototype;
        k.toString = function (a) {
            if (a && 0 <= a.indexOf(this))
                return "";
            for (var b = [], c = 0; c < this.g.length; c++) {
                var d = this.g[c];
                null === d || void 0 === d ? b.push("") : d instanceof wa ? (a = a || [],
                    a.push(this),
                    b.push(d.toString(a)),
                    a.pop()) : b.push(d.toString())
            }
            return b.join(",")
        }
        ;
        k.set = function (a, b) {
            if (!this.s)
                if ("length" === a) {
                    if (!ra(b))
                        throw Error("RangeError: Length property must be a valid integer.");
                    this.g.length = Number(b)
                } else
                    ra(a) ? this.g[Number(a)] = b : this.o.set(a, b)
        }
        ;
        k.get = function (a) {
            return "length" === a ? this.length() : ra(a) ? this.g[Number(a)] : this.o.get(a)
        }
        ;
        k.length = function () {
            return this.g.length
        }
        ;
        k.zb = function () {
            for (var a = ta(this.o, 1), b = 0; b < this.g.length; b++)
                a.push(b + "");
            return new wa(a)
        }
        ;
        var ya = function (a, b) {
            ra(b) ? delete a.g[Number(b)] : ua(a.o, b)
        };
        k = wa.prototype;
        k.pop = function () {
            return this.g.pop()
        }
        ;
        k.push = function (a) {
            return this.g.push.apply(this.g, Array.prototype.slice.call(arguments))
        }
        ;
        k.shift = function () {
            return this.g.shift()
        }
        ;
        k.splice = function (a, b, c) {
            return new wa(this.g.splice.apply(this.g, arguments))
        }
        ;
        k.unshift = function (a) {
            return this.g.unshift.apply(this.g, Array.prototype.slice.call(arguments))
        }
        ;
        k.has = function (a) {
            return ra(a) && this.g.hasOwnProperty(a) || this.o.has(a)
        }
        ;
        k.Ab = function () {
            this.s = !0;
            Object.freeze(this.g);
            this.o.Ab()
        }
        ;
        var za = function () {
            function a(f, g) {
                if (b[f]) {
                    if (b[f].Dd + g > b[f].max)
                        throw Error("Quota exceeded");
                    b[f].Dd += g
                }
            }

            var b = {}
                , c = void 0
                , d = void 0
                , e = {
                Aj: function (f) {
                    c = f
                },
                Fg: function () {
                    c && a(c, 1)
                },
                Cj: function (f) {
                    d = f
                },
                Bb: function (f) {
                    d && a(d, f)
                },
                Uj: function (f, g) {
                    b[f] = b[f] || {
                        Dd: 0
                    };
                    b[f].max = g
                },
                bj: function (f) {
                    return b[f] && b[f].Dd || 0
                },
                reset: function () {
                    b = {}
                },
                Ni: a
            };
            e.onFnConsume = e.Aj;
            e.consumeFn = e.Fg;
            e.onStorageConsume = e.Cj;
            e.consumeStorage = e.Bb;
            e.setMax = e.Uj;
            e.getConsumed = e.bj;
            e.reset = e.reset;
            e.consume = e.Ni;
            return e
        };
        var Aa = function (a, b) {
            this.s = a;
            this.N = function (c, d, e) {
                return c.apply(d, e)
            }
            ;
            this.C = b;
            this.o = new sa;
            this.g = this.F = void 0
        };
        Aa.prototype.add = function (a, b) {
            Ca(this, a, b, !1)
        }
        ;
        var Ca = function (a, b, c, d) {
            if (!a.o.s)
                if (a.s.Bb(("string" === typeof b ? b.length : 1) + ("string" === typeof c ? c.length : 1)),
                    d) {
                    var e = a.o;
                    e.set(b, c);
                    e.F["dust." + b] = !0
                } else
                    a.o.set(b, c)
        };
        Aa.prototype.set = function (a, b) {
            this.o.s || (!this.o.has(a) && this.C && this.C.has(a) ? this.C.set(a, b) : (this.s.Bb(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)),
                this.o.set(a, b)))
        }
        ;
        Aa.prototype.get = function (a) {
            return this.o.has(a) ? this.o.get(a) : this.C ? this.C.get(a) : void 0
        }
        ;
        Aa.prototype.has = function (a) {
            return !!this.o.has(a) || !(!this.C || !this.C.has(a))
        }
        ;
        var Da = function (a) {
            var b = new Aa(a.s, a);
            a.F && (b.F = a.F);
            b.N = a.N;
            b.g = a.g;
            return b
        };
        var Ea = function () {
        }
            , Ga = function (a) {
            return "function" == typeof a
        }
            , m = function (a) {
            return "string" == typeof a
        }
            , Ha = function (a) {
            return "number" == typeof a && !isNaN(a)
        }
            , Ia = Array.isArray
            , Ja = function (a, b) {
            if (a && Ia(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c]))
                        return a[c]
        }
            , Ka = function (a, b) {
            if (!Ha(a) || !Ha(b) || a > b)
                a = 0,
                    b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        }
            , Na = function (a, b) {
            for (var c = new Ma, d = 0; d < a.length; d++)
                c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e]))
                    return !0;
            return !1
        }
            , Oa = function (a, b) {
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        }
            , Pa = function (a) {
            return !!a && ("[object Arguments]" == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        }
            , Qa = function (a) {
            return Math.round(Number(a)) || 0
        }
            , Ta = function (a) {
            return "false" == String(a).toLowerCase() ? !1 : !!a
        }
            , Ua = function (a) {
            var b = [];
            if (Ia(a))
                for (var c = 0; c < a.length; c++)
                    b.push(String(a[c]));
            return b
        }
            , Va = function (a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        }
            , Ya = function () {
            return new Date(Date.now())
        }
            , Za = function () {
            return Ya().getTime()
        }
            , Ma = function () {
            this.prefix = "gtm.";
            this.values = {}
        };
        Ma.prototype.set = function (a, b) {
            this.values[this.prefix + a] = b
        }
        ;
        Ma.prototype.get = function (a) {
            return this.values[this.prefix + a]
        }
        ;
        var bb = function (a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        }
            , cb = function (a) {
            var b = a;
            return function () {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {
                    }
                }
            }
        }
            , db = function (a, b) {
            for (var c in b)
                b.hasOwnProperty(c) && (a[c] = b[c])
        }
            , fb = function (a) {
            for (var b in a)
                if (a.hasOwnProperty(b))
                    return !0;
            return !1
        }
            , gb = function (a, b) {
            for (var c = [], d = 0; d < a.length; d++)
                c.push(a[d]),
                    c.push.apply(c, b[a[d]] || []);
            return c
        }
            , hb = function (a, b) {
            var c = A;
            b = b || [];
            for (var d = c, e = 0; e < a.length - 1; e++) {
                if (!d.hasOwnProperty(a[e]))
                    return;
                d = d[a[e]];
                if (0 <= b.indexOf(d))
                    return
            }
            return d
        }
            , ib = function (a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
                d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        }
            , jb = /^\w{1,9}$/
            , kb = function (a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            Oa(a, function (d, e) {
                jb.test(d) && e && c.push(d)
            });
            return c.join(b)
        }
            , lb = function (a, b) {
            function c() {
                ++d === b && (e(),
                    e = null,
                    c.done = !0)
            }

            var d = 0
                , e = a;
            c.done = !1;
            return c
        };
        var mb = function (a, b) {
            sa.call(this);
            this.N = a;
            this.Ma = b
        };
        ma(mb, sa);
        mb.prototype.toString = function () {
            return this.N
        }
        ;
        mb.prototype.zb = function () {
            return new wa(ta(this, 1))
        }
        ;
        mb.prototype.g = function (a, b) {
            a.s.Fg();
            return this.Ma.apply(new nb(this, a), Array.prototype.slice.call(arguments, 1))
        }
        ;
        mb.prototype.o = function (a, b) {
            try {
                return this.g.apply(this, Array.prototype.slice.call(arguments, 0))
            } catch (c) {
            }
        }
        ;
        var pb = function (a, b) {
            for (var c, d = 0; d < b.length && !(c = ob(a, b[d]),
            c instanceof qa); d++)
                ;
            return c
        }
            , ob = function (a, b) {
            try {
                var c = a.get(String(b[0]));
                if (!(c && c instanceof mb))
                    throw Error("Attempting to execute non-function " + b[0] + ".");
                return c.g.apply(c, [a].concat(b.slice(1)))
            } catch (e) {
                var d = a.F;
                d && d(e, b.context ? {
                    id: b[0],
                    line: b.context.line
                } : null);
                throw e;
            }
        }
            , nb = function (a, b) {
            this.o = a;
            this.g = b
        }
            , G = function (a, b) {
            return Ia(b) ? ob(a.g, b) : b
        }
            , I = function (a) {
            return a.o.N
        };
        var qb = function () {
            sa.call(this)
        };
        ma(qb, sa);
        qb.prototype.zb = function () {
            return new wa(ta(this, 1))
        }
        ;
        var rb = {
            control: function (a, b) {
                return new qa(a, G(this, b))
            },
            fn: function (a, b, c) {
                var d = this.g
                    , e = G(this, b);
                if (!(e instanceof wa))
                    throw Error("Error: non-List value given for Fn argument names.");
                var f = Array.prototype.slice.call(arguments, 2);
                this.g.s.Bb(a.length + f.length);
                return new mb(a, function () {
                    return function (g) {
                        var h = Da(d);
                        void 0 === h.g && (h.g = this.g.g);
                        for (var l = Array.prototype.slice.call(arguments, 0), n = 0; n < l.length; n++)
                            if (l[n] = G(this, l[n]),
                            l[n] instanceof qa)
                                return l[n];
                        for (var p = e.get("length"), r = 0; r < p; r++)
                            r < l.length ? h.add(e.get(r), l[r]) : h.add(e.get(r), void 0);
                        h.add("arguments", new wa(l));
                        var t = pb(h, f);
                        if (t instanceof qa)
                            return "return" === t.g ? t.o : t
                    }
                }())
            },
            list: function (a) {
                var b = this.g.s;
                b.Bb(arguments.length);
                for (var c = new wa, d = 0; d < arguments.length; d++) {
                    var e = G(this, arguments[d]);
                    "string" === typeof e && b.Bb(e.length ? e.length - 1 : 0);
                    c.push(e)
                }
                return c
            },
            map: function (a) {
                for (var b = this.g.s, c = new qb, d = 0; d < arguments.length - 1; d += 2) {
                    var e = G(this, arguments[d]) + ""
                        , f = G(this, arguments[d + 1])
                        , g = e.length;
                    g += "string" === typeof f ? f.length : 1;
                    b.Bb(g);
                    c.set(e, f)
                }
                return c
            },
            undefined: function () {
            }
        };
        var sb = function () {
            this.s = za();
            this.g = new Aa(this.s)
        }
            , tb = function (a, b, c) {
            var d = new mb(b, c);
            d.Ab();
            a.g.set(b, d)
        }
            , ub = function (a, b, c) {
            rb.hasOwnProperty(b) && tb(a, c || b, rb[b])
        };
        sb.prototype.execute = function (a, b) {
            var c = Array.prototype.slice.call(arguments, 0);
            return this.o(c)
        }
        ;
        sb.prototype.o = function (a) {
            for (var b, c = 0; c < arguments.length; c++)
                b = ob(this.g, arguments[c]);
            return b
        }
        ;
        sb.prototype.C = function (a, b) {
            var c = Da(this.g);
            c.g = a;
            for (var d, e = 1; e < arguments.length; e++)
                d = d = ob(c, arguments[e]);
            return d
        }
        ;
        var vb, wb = function () {
            if (void 0 === vb) {
                var a = null
                    , b = oa.trustedTypes;
                if (b && b.createPolicy) {
                    try {
                        a = b.createPolicy("goog#html", {
                            createHTML: pa,
                            createScript: pa,
                            createScriptURL: pa
                        })
                    } catch (c) {
                        oa.console && oa.console.error(c.message)
                    }
                    vb = a
                } else
                    vb = a
            }
            return vb
        };
        var Bb = function (a, b) {
            this.s = b === xb ? a : ""
        };
        Bb.prototype.o = !0;
        Bb.prototype.g = function () {
            return this.s.toString()
        }
        ;
        Bb.prototype.toString = function () {
            return this.s + ""
        }
        ;
        var xb = {}
            , Cb = function (a) {
            var b = wb()
                , c = b ? b.createScriptURL(a) : a;
            return new Bb(c, xb)
        };
        var Eb = function (a, b) {
            this.s = b === Db ? a : ""
        };
        Eb.prototype.o = !0;
        Eb.prototype.g = function () {
            return this.s.toString()
        }
        ;
        Eb.prototype.toString = function () {
            return this.s.toString()
        }
        ;
        var Fb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i
            , Db = {};
        var Gb;
        a: {
            var Hb = oa.navigator;
            if (Hb) {
                var Jb = Hb.userAgent;
                if (Jb) {
                    Gb = Jb;
                    break a
                }
            }
            Gb = ""
        }

        function Kb(a) {
            return -1 != Gb.indexOf(a)
        }
        ;var Lb = {}
            , Mb = function (a, b, c) {
                this.s = c === Lb ? a : "";
                this.o = !0
            };
        Mb.prototype.g = function () {
            return this.s.toString()
        }
        ;
        Mb.prototype.toString = function () {
            return this.s.toString()
        }
        ;
        var Nb = function (a) {
            return a instanceof Mb && a.constructor === Mb ? a.s : "type_error:SafeHtml"
        }
            , Ob = function (a) {
            var b = wb()
                , c = b ? b.createHTML(a) : a;
            return new Mb(c, null, Lb)
        }
            , Pb = new Mb(oa.trustedTypes && oa.trustedTypes.emptyHTML || "", 0, Lb);

        /*

 SPDX-License-Identifier: Apache-2.0
*/
        function Qb(a, b) {
            a.src = b instanceof Bb && b.constructor === Bb ? b.s : "type_error:TrustedResourceUrl";
            var c, d, e = (a.ownerDocument && a.ownerDocument.defaultView || window).document,
                f = null === (d = e.querySelector) || void 0 === d ? void 0 : d.call(e, "script[nonce]");
            (c = f ? f.nonce || f.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
        }
        ;var Rb = function (a, b) {
            var c = function () {
            };
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        }
            , Sb = function (a) {
                var b = a;
                return function () {
                    if (b) {
                        var c = b;
                        b = null;
                        c()
                    }
                }
            };
        var Tb = function (a) {
            var b = !1, c;
            return function () {
                b || (c = a(),
                    b = !0);
                return c
            }
        }(function () {
            var a = document.createElement("div")
                , b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            var c = a.firstChild.firstChild;
            a.innerHTML = Nb(Pb);
            return !c.parentElement
        });
        var A = window
            , J = document
            , Ub = navigator
            , Vb = J.currentScript && J.currentScript.src
            , Wb = function (a, b) {
            var c = A[a];
            A[a] = void 0 === c ? b : c;
            return A[a]
        }
            , Xb = function (a) {
            var b = J.getElementsByTagName("script")[0] || J.body || J.head;
            b.parentNode.insertBefore(a, b)
        }
            , Yb = function (a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
                    a.readyState in {
                        loaded: 1,
                        complete: 1
                    } && (a.onreadystatechange = null,
                        b())
                }
            )
        }
            , Zb = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        }
            , $b = function (a, b, c, d) {
            var e = J.createElement("script");
            d && Oa(d, function (f, g) {
                f = f.toLowerCase();
                Zb.hasOwnProperty(f) || e.setAttribute(f, g)
            });
            e.type = "text/javascript";
            e.async = !0;
            Qb(e, Cb(a));
            Yb(e, b);
            c && (e.onerror = c);
            Xb(e);
            return e
        }
            , ac = function () {
            if (Vb) {
                var a = Vb.toLowerCase();
                if (0 === a.indexOf("https://"))
                    return 2;
                if (0 === a.indexOf("http://"))
                    return 3
            }
            return 1
        }
            , bc = function (a, b) {
            var c = J.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = J.body && J.body.lastChild || J.body || J.head;
            d.parentNode.insertBefore(c, d);
            Yb(c, b);
            void 0 !== a && (c.src = a);
            return c
        }
            , cc = function (a, b, c) {
            var d = new Image(1, 1);
            d.onload = function () {
                d.onload = null;
                b && b()
            }
            ;
            d.onerror = function () {
                d.onerror = null;
                c && c()
            }
            ;
            d.src = a;
            return d
        }
            , dc = function (a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        }
            , ec = function (a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        }
            , K = function (a) {
            A.setTimeout(a, 0)
        }
            , fc = function (a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        }
            , hc = function (a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        }
            , ic = function (a) {
            var b = J.createElement("div")
                , c = Ob("A<div>" + a + "</div>")
                , d = b;
            if (Tb())
                for (; d.lastChild;)
                    d.removeChild(d.lastChild);
            d.innerHTML = Nb(c);
            b = b.lastChild;
            for (var e = []; b.firstChild;)
                e.push(b.removeChild(b.firstChild));
            return e
        }
            , jc = function (a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++)
                d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()])
                    return f;
                f = f.parentElement
            }
            return null
        }
            , kc = function (a) {
            var b;
            try {
                b = Ub.sendBeacon && Ub.sendBeacon(a)
            } catch (c) {
            }
            b || cc(a)
        }
            , lc = function (a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        }
            , mc = function (a) {
            var b = J.featurePolicy;
            return b && Ga(b.allowsFeature) ? b.allowsFeature(a) : !1
        };
        var nc = function (a, b) {
            return G(this, a) && G(this, b)
        }
            , oc = function (a, b) {
            return G(this, a) === G(this, b)
        }
            , pc = function (a, b) {
            return G(this, a) || G(this, b)
        }
            , qc = function (a, b) {
            a = G(this, a);
            b = G(this, b);
            return -1 < String(a).indexOf(String(b))
        }
            , rc = function (a, b) {
            a = String(G(this, a));
            b = String(G(this, b));
            return a.substring(0, b.length) === b
        }
            , sc = function (a, b) {
            a = G(this, a);
            b = G(this, b);
            switch (a) {
                case "pageLocation":
                    var c = A.location.href;
                    b instanceof qb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
                    return c
            }
        };
        var uc = function () {
            this.g = new sb;
            tc(this)
        };
        uc.prototype.execute = function (a) {
            return this.g.o(a)
        }
        ;
        var tc = function (a) {
            ub(a.g, "map");
            var b = function (c, d) {
                tb(a.g, c, d)
            };
            b("and", nc);
            b("contains", qc);
            b("equals", oc);
            b("or", pc);
            b("startsWith", rc);
            b("variable", sc)
        };
        var vc = function (a) {
            if (a instanceof vc)
                return a;
            this.Sa = a
        };
        vc.prototype.toString = function () {
            return String(this.Sa)
        }
        ;
        var xc = function (a) {
            sa.call(this);
            this.g = a;
            this.set("then", wc(this));
            this.set("catch", wc(this, !0));
            this.set("finally", wc(this, !1, !0))
        };
        ma(xc, qb);
        var wc = function (a, b, c) {
            b = void 0 === b ? !1 : b;
            c = void 0 === c ? !1 : c;
            return new mb("", function (d, e) {
                    b && (e = d,
                        d = void 0);
                    c && (e = d);
                    d instanceof mb || (d = void 0);
                    e instanceof mb || (e = void 0);
                    var f = Da(this.g)
                        , g = function (l) {
                        return function (n) {
                            return c ? (l.g(f),
                                a.g) : l.g(f, n)
                        }
                    }
                        , h = a.g.then(d && g(d), e && g(e));
                    return new xc(h)
                }
            )
        };
        /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
        var yc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/
            , zc = function (a) {
            if (null == a)
                return String(a);
            var b = yc.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        }
            , Fc = function (a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        }
            , Gc = function (a) {
            if (!a || "object" != zc(a) || a.nodeType || a == a.window)
                return !1;
            try {
                if (a.constructor && !Fc(a, "constructor") && !Fc(a.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (c) {
                return !1
            }
            for (var b in a)
                ;
            return void 0 === b || Fc(a, b)
        }
            , Hc = function (a, b) {
            var c = b || ("array" == zc(a) ? [] : {}), d;
            for (d in a)
                if (Fc(a, d)) {
                    var e = a[d];
                    "array" == zc(e) ? ("array" != zc(c[d]) && (c[d] = []),
                        c[d] = Hc(e, c[d])) : Gc(e) ? (Gc(c[d]) || (c[d] = {}),
                        c[d] = Hc(e, c[d])) : c[d] = e
                }
            return c
        };
        var Jc = function (a, b, c) {
            var d = []
                , e = []
                , f = function (h, l) {
                for (var n = ta(h, 1), p = 0; p < n.length; p++)
                    l[n[p]] = g(h.get(n[p]))
            }
                , g = function (h) {
                var l = d.indexOf(h);
                if (-1 < l)
                    return e[l];
                if (h instanceof wa) {
                    var n = [];
                    d.push(h);
                    e.push(n);
                    for (var p = h.zb(), r = 0; r < p.length(); r++)
                        n[p.get(r)] = g(h.get(p.get(r)));
                    return n
                }
                if (h instanceof xc)
                    return h.g;
                if (h instanceof qb) {
                    var t = {};
                    d.push(h);
                    e.push(t);
                    f(h, t);
                    return t
                }
                if (h instanceof mb) {
                    var u = function () {
                        for (var q = Array.prototype.slice.call(arguments, 0), v = 0; v < q.length; v++)
                            q[v] = Ic(q[v], b, !!c);
                        var w = b ? b.s : za()
                            , y = new Aa(w);
                        b && (y.g = b.g);
                        return g(h.g.apply(h, [y].concat(q)))
                    };
                    d.push(h);
                    e.push(u);
                    f(h, u);
                    return u
                }
                switch (typeof h) {
                    case "boolean":
                    case "number":
                    case "string":
                    case "undefined":
                        return h;
                    case "object":
                        if (null === h)
                            return null
                }
            };
            return g(a)
        }
            , Ic = function (a, b, c) {
            var d = []
                , e = []
                , f = function (h, l) {
                for (var n in h)
                    h.hasOwnProperty(n) && l.set(n, g(h[n]))
            }
                , g = function (h) {
                var l = d.indexOf(h);
                if (-1 < l)
                    return e[l];
                if (Ia(h) || Pa(h)) {
                    var n = new wa([]);
                    d.push(h);
                    e.push(n);
                    for (var p in h)
                        h.hasOwnProperty(p) && n.set(p, g(h[p]));
                    return n
                }
                if (Gc(h)) {
                    var r = new qb;
                    d.push(h);
                    e.push(r);
                    f(h, r);
                    return r
                }
                if ("function" === typeof h) {
                    var t = new mb("", function (y) {
                            for (var x = Array.prototype.slice.call(arguments, 0), z = 0; z < x.length; z++)
                                x[z] = Jc(G(this, x[z]), b, !!c);
                            return g((0,
                                this.g.N)(h, h, x))
                        }
                    );
                    d.push(h);
                    e.push(t);
                    f(h, t);
                    return t
                }
                var w = typeof h;
                if (null === h || "string" === w || "number" === w || "boolean" === w)
                    return h;
            };
            return g(a)
        };
        var Kc = function (a) {
            for (var b = [], c = 0; c < a.length(); c++)
                a.has(c) && (b[c] = a.get(c));
            return b
        }
            , Lc = function (a) {
            if (void 0 === a || Ia(a) || Gc(a))
                return !0;
            switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                    return !0
            }
            return !1
        };
        var Mc = {
            supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
            concat: function (a, b) {
                for (var c = [], d = 0; d < this.length(); d++)
                    c.push(this.get(d));
                for (var e = 1; e < arguments.length; e++)
                    if (arguments[e] instanceof wa)
                        for (var f = arguments[e], g = 0; g < f.length(); g++)
                            c.push(f.get(g));
                    else
                        c.push(arguments[e]);
                return new wa(c)
            },
            every: function (a, b) {
                for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                    if (this.has(d) && !b.g(a, this.get(d), d, this))
                        return !1;
                return !0
            },
            filter: function (a, b) {
                for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
                    this.has(e) && b.g(a, this.get(e), e, this) && d.push(this.get(e));
                return new wa(d)
            },
            forEach: function (a, b) {
                for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                    this.has(d) && b.g(a, this.get(d), d, this)
            },
            hasOwnProperty: function (a, b) {
                return this.has(b)
            },
            indexOf: function (a, b, c) {
                var d = this.length()
                    , e = void 0 === c ? 0 : Number(c);
                0 > e && (e = Math.max(d + e, 0));
                for (var f = e; f < d; f++)
                    if (this.has(f) && this.get(f) === b)
                        return f;
                return -1
            },
            join: function (a, b) {
                for (var c = [], d = 0; d < this.length(); d++)
                    c.push(this.get(d));
                return c.join(b)
            },
            lastIndexOf: function (a, b, c) {
                var d = this.length()
                    , e = d - 1;
                void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
                for (var f = e; 0 <= f; f--)
                    if (this.has(f) && this.get(f) === b)
                        return f;
                return -1
            },
            map: function (a, b) {
                for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
                    this.has(e) && (d[e] = b.g(a, this.get(e), e, this));
                return new wa(d)
            },
            pop: function () {
                return this.pop()
            },
            push: function (a, b) {
                return this.push.apply(this, Array.prototype.slice.call(arguments, 1))
            },
            reduce: function (a, b, c) {
                var d = this.length(), e, f = 0;
                if (void 0 !== c)
                    e = c;
                else {
                    if (0 === d)
                        throw Error("TypeError: Reduce on List with no elements.");
                    for (var g = 0; g < d; g++)
                        if (this.has(g)) {
                            e = this.get(g);
                            f = g + 1;
                            break
                        }
                    if (g === d)
                        throw Error("TypeError: Reduce on List with no elements.");
                }
                for (var h = f; h < d; h++)
                    this.has(h) && (e = b.g(a, e, this.get(h), h, this));
                return e
            },
            reduceRight: function (a, b, c) {
                var d = this.length(), e, f = d - 1;
                if (void 0 !== c)
                    e = c;
                else {
                    if (0 === d)
                        throw Error("TypeError: ReduceRight on List with no elements.");
                    for (var g = 1; g <= d; g++)
                        if (this.has(d - g)) {
                            e = this.get(d - g);
                            f = d - (g + 1);
                            break
                        }
                    if (g > d)
                        throw Error("TypeError: ReduceRight on List with no elements.");
                }
                for (var h = f; 0 <= h; h--)
                    this.has(h) && (e = b.g(a, e, this.get(h), h, this));
                return e
            },
            reverse: function () {
                for (var a = Kc(this), b = a.length - 1, c = 0; 0 <= b; b--,
                    c++)
                    a.hasOwnProperty(b) ? this.set(c, a[b]) : ya(this, c);
                return this
            },
            shift: function () {
                return this.shift()
            },
            slice: function (a, b, c) {
                var d = this.length();
                void 0 === b && (b = 0);
                b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
                c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
                c = Math.max(b, c);
                for (var e = [], f = b; f < c; f++)
                    e.push(this.get(f));
                return new wa(e)
            },
            some: function (a, b) {
                for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                    if (this.has(d) && b.g(a, this.get(d), d, this))
                        return !0;
                return !1
            },
            sort: function (a, b) {
                var c = Kc(this);
                void 0 === b ? c.sort() : c.sort(function (e, f) {
                    return Number(b.g(a, e, f))
                });
                for (var d = 0; d < c.length; d++)
                    c.hasOwnProperty(d) ? this.set(d, c[d]) : ya(this, d);
                return this
            },
            splice: function (a, b, c, d) {
                return this.splice.apply(this, Array.prototype.splice.call(arguments, 1, arguments.length - 1))
            },
            toString: function () {
                return this.toString()
            },
            unshift: function (a, b) {
                return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
            }
        };
        var Nc = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" ")
            , Oc = new qa("break")
            , Pc = new qa("continue")
            , Qc = function (a, b) {
            return G(this, a) + G(this, b)
        }
            , Rc = function (a, b) {
            return G(this, a) && G(this, b)
        }
            , Yc = function (a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            if (!(c instanceof wa))
                throw Error("Error: Non-List argument given to Apply instruction.");
            if (null === a || void 0 === a)
                throw Error("TypeError: Can't read property " + b + " of " + a + ".");
            var d = "number" === typeof a;
            if ("boolean" === typeof a || d) {
                if ("toString" === b) {
                    if (d && c.length()) {
                        var e = Jc(c.get(0));
                        try {
                            return a.toString(e)
                        } catch (r) {
                        }
                    }
                    return a.toString()
                }
                throw Error("TypeError: " + a + "." + b + " is not a function.");
            }
            if ("string" === typeof a) {
                if (0 <= Nc.indexOf(b)) {
                    var f = Jc(c);
                    return Ic(a[b].apply(a, f), this.g)
                }
                throw Error("TypeError: " + b + " is not a function");
            }
            if (a instanceof wa) {
                if (a.has(b)) {
                    var g = a.get(b);
                    if (g instanceof mb) {
                        var h = Kc(c);
                        h.unshift(this.g);
                        return g.g.apply(g, h)
                    }
                    throw Error("TypeError: " + b + " is not a function");
                }
                if (0 <= Mc.supportedMethods.indexOf(b)) {
                    var l = Kc(c);
                    l.unshift(this.g);
                    return Mc[b].apply(a, l)
                }
            }
            if (a instanceof mb || a instanceof qb) {
                if (a.has(b)) {
                    var n = a.get(b);
                    if (n instanceof mb) {
                        var p = Kc(c);
                        p.unshift(this.g);
                        return n.g.apply(n, p)
                    }
                    throw Error("TypeError: " + b + " is not a function");
                }
                if ("toString" === b)
                    return a instanceof mb ? a.N : a.toString();
                if ("hasOwnProperty" === b)
                    return a.has.apply(a, Kc(c))
            }
            if (a instanceof vc && "toString" === b)
                return a.toString();
            throw Error("TypeError: Object has no '" + b + "' property.");
        }
            , Zc = function (a, b) {
            a = G(this, a);
            if ("string" !== typeof a)
                throw Error("Invalid key name given for assignment.");
            var c = this.g;
            if (!c.has(a))
                throw Error("Attempting to assign to undefined value " + b);
            var d = G(this, b);
            c.set(a, d);
            return d
        }
            , $c = function (a) {
            var b = Da(this.g)
                , c = pb(b, Array.prototype.slice.apply(arguments));
            if (c instanceof qa)
                return c
        }
            , ad = function () {
            return Oc
        }
            , bd = function (a) {
            for (var b = G(this, a), c = 0; c < b.length; c++) {
                var d = G(this, b[c]);
                if (d instanceof qa)
                    return d
            }
        }
            , cd = function (a) {
            for (var b = this.g, c = 0; c < arguments.length - 1; c += 2) {
                var d = arguments[c];
                if ("string" === typeof d) {
                    var e = G(this, arguments[c + 1]);
                    Ca(b, d, e, !0)
                }
            }
        }
            , dd = function () {
            return Pc
        }
            , ed = function (a, b, c) {
            var d = new wa;
            b = G(this, b);
            for (var e = 0; e < b.length; e++)
                d.push(b[e]);
            var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
            this.g.add(a, G(this, f))
        }
            , fd = function (a, b) {
            return G(this, a) / G(this, b)
        }
            , gd = function (a, b) {
            a = G(this, a);
            b = G(this, b);
            var c = a instanceof vc
                , d = b instanceof vc;
            return c || d ? c && d ? a.Sa == b.Sa : !1 : a == b
        }
            , hd = function (a) {
            for (var b, c = 0; c < arguments.length; c++)
                b = G(this, arguments[c]);
            return b
        };

        function id(a, b, c, d) {
            for (var e = 0; e < b(); e++) {
                var f = a(c(e))
                    , g = pb(f, d);
                if (g instanceof qa) {
                    if ("break" === g.g)
                        break;
                    if ("return" === g.g)
                        return g
                }
            }
        }

        function jd(a, b, c) {
            if ("string" === typeof b)
                return id(a, function () {
                    return b.length
                }, function (f) {
                    return f
                }, c);
            if (b instanceof qb || b instanceof wa || b instanceof mb) {
                var d = b.zb()
                    , e = d.length();
                return id(a, function () {
                    return e
                }, function (f) {
                    return d.get(f)
                }, c)
            }
        }

        var kd = function (a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return jd(function (e) {
                d.set(a, e);
                return d
            }, b, c)
        }
            , ld = function (a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return jd(function (e) {
                var f = Da(d);
                Ca(f, a, e, !0);
                return f
            }, b, c)
        }
            , md = function (a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return jd(function (e) {
                var f = Da(d);
                f.add(a, e);
                return f
            }, b, c)
        }
            , rd = function (a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return nd(function (e) {
                d.set(a, e);
                return d
            }, b, c)
        }
            , sd = function (a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return nd(function (e) {
                var f = Da(d);
                Ca(f, a, e, !0);
                return f
            }, b, c)
        }
            , td = function (a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return nd(function (e) {
                var f = Da(d);
                f.add(a, e);
                return f
            }, b, c)
        };

        function nd(a, b, c) {
            if ("string" === typeof b)
                return id(a, function () {
                    return b.length
                }, function (d) {
                    return b[d]
                }, c);
            if (b instanceof wa)
                return id(a, function () {
                    return b.length()
                }, function (d) {
                    return b.get(d)
                }, c);
            throw new TypeError("The value is not iterable.");
        }

        var ud = function (a, b, c, d) {
            function e(p, r) {
                for (var t = 0; t < f.length(); t++) {
                    var u = f.get(t);
                    r.add(u, p.get(u))
                }
            }

            var f = G(this, a);
            if (!(f instanceof wa))
                throw Error("TypeError: Non-List argument given to ForLet instruction.");
            var g = this.g;
            d = G(this, d);
            var h = Da(g);
            for (e(g, h); ob(h, b);) {
                var l = pb(h, d);
                if (l instanceof qa) {
                    if ("break" === l.g)
                        break;
                    if ("return" === l.g)
                        return l
                }
                var n = Da(g);
                e(h, n);
                ob(n, c);
                h = n
            }
        }
            , vd = function (a) {
            a = G(this, a);
            var b = this.g
                , c = !1;
            if (c && !b.has(a))
                throw new ReferenceError(a + " is not defined.");
            return b.get(a)
        }
            , wd = function (a, b) {
            var c;
            a = G(this, a);
            b = G(this, b);
            if (void 0 === a || null === a)
                throw Error("TypeError: cannot access property of " + a + ".");
            if (a instanceof qb || a instanceof wa || a instanceof mb)
                c = a.get(b);
            else if ("string" === typeof a)
                "length" === b ? c = a.length : ra(b) && (c = a[b]);
            else if (a instanceof vc)
                return;
            return c
        }
            , xd = function (a, b) {
            return G(this, a) > G(this, b)
        }
            , yd = function (a, b) {
            return G(this, a) >= G(this, b)
        }
            , zd = function (a, b) {
            a = G(this, a);
            b = G(this, b);
            a instanceof vc && (a = a.Sa);
            b instanceof vc && (b = b.Sa);
            return a === b
        }
            , Ad = function (a, b) {
            return !zd.call(this, a, b)
        }
            , Bd = function (a, b, c) {
            var d = [];
            G(this, a) ? d = G(this, b) : c && (d = G(this, c));
            var e = pb(this.g, d);
            if (e instanceof qa)
                return e
        }
            , Cd = function (a, b) {
            return G(this, a) < G(this, b)
        }
            , Dd = function (a, b) {
            return G(this, a) <= G(this, b)
        }
            , Ed = function (a, b) {
            return G(this, a) % G(this, b)
        }
            , Fd = function (a, b) {
            return G(this, a) * G(this, b)
        }
            , Gd = function (a) {
            return -G(this, a)
        }
            , Hd = function (a) {
            return !G(this, a)
        }
            , Id = function (a, b) {
            return !gd.call(this, a, b)
        }
            , Jd = function () {
            return null
        }
            , Kd = function (a, b) {
            return G(this, a) || G(this, b)
        }
            , Ld = function (a, b) {
            var c = G(this, a);
            G(this, b);
            return c
        }
            , Md = function (a) {
            return G(this, a)
        }
            , Nd = function (a) {
            return Array.prototype.slice.apply(arguments)
        }
            , Od = function (a) {
            return new qa("return", G(this, a))
        }
            , Pd = function (a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            if (null === a || void 0 === a)
                throw Error("TypeError: Can't set property " + b + " of " + a + ".");
            (a instanceof mb || a instanceof wa || a instanceof qb) && a.set(b, c);
            return c
        }
            , Qd = function (a, b) {
            return G(this, a) - G(this, b)
        }
            , Yd = function (a, b, c) {
            a = G(this, a);
            var d = G(this, b)
                , e = G(this, c);
            if (!Ia(d) || !Ia(e))
                throw Error("Error: Malformed switch instruction.");
            for (var f, g = !1, h = 0; h < d.length; h++)
                if (g || a === G(this, d[h]))
                    if (f = G(this, e[h]),
                    f instanceof qa) {
                        var l = f.g;
                        if ("break" === l)
                            return;
                        if ("return" === l || "continue" === l)
                            return f
                    } else
                        g = !0;
            if (e.length === d.length + 1 && (f = G(this, e[e.length - 1]),
            f instanceof qa && ("return" === f.g || "continue" === f.g)))
                return f
        }
            , Zd = function (a, b, c) {
            return G(this, a) ? G(this, b) : G(this, c)
        }
            , $d = function (a) {
            a = G(this, a);
            return a instanceof mb ? "function" : typeof a
        }
            , ae = function (a) {
            for (var b = this.g, c = 0; c < arguments.length; c++) {
                var d = arguments[c];
                "string" !== typeof d || b.add(d, void 0)
            }
        }
            , be = function (a, b, c, d) {
            var e = G(this, d);
            if (G(this, c)) {
                var f = pb(this.g, e);
                if (f instanceof qa) {
                    if ("break" === f.g)
                        return;
                    if ("return" === f.g)
                        return f
                }
            }
            for (; G(this, a);) {
                var g = pb(this.g, e);
                if (g instanceof qa) {
                    if ("break" === g.g)
                        break;
                    if ("return" === g.g)
                        return g
                }
                G(this, b)
            }
        }
            , ce = function (a) {
            return ~Number(G(this, a))
        }
            , de = function (a, b) {
            return Number(G(this, a)) << Number(G(this, b))
        }
            , ee = function (a, b) {
            return Number(G(this, a)) >> Number(G(this, b))
        }
            , fe = function (a, b) {
            return Number(G(this, a)) >>> Number(G(this, b))
        }
            , ge = function (a, b) {
            return Number(G(this, a)) & Number(G(this, b))
        }
            , he = function (a, b) {
            return Number(G(this, a)) ^ Number(G(this, b))
        }
            , ie = function (a, b) {
            return Number(G(this, a)) | Number(G(this, b))
        };
        var ke = function () {
            this.g = new sb;
            je(this)
        };
        ke.prototype.execute = function (a) {
            return le(this.g.o(a))
        }
        ;
        var me = function (a, b, c) {
            return le(a.g.C(b, c))
        }
            , je = function (a) {
            var b = function (d, e) {
                ub(a.g, d, String(e))
            };
            b("control", 49);
            b("fn", 51);
            b("list", 7);
            b("map", 8);
            b("undefined", 44);
            var c = function (d, e) {
                tb(a.g, String(d), e)
            };
            c(0, Qc);
            c(1, Rc);
            c(2, Yc);
            c(3, Zc);
            c(53, $c);
            c(4, ad);
            c(5, bd);
            c(52, cd);
            c(6, dd);
            c(9, bd);
            c(50, ed);
            c(10, fd);
            c(12, gd);
            c(13, hd);
            c(47, kd);
            c(54, ld);
            c(55, md);
            c(63, ud);
            c(64, rd);
            c(65, sd);
            c(66, td);
            c(15, vd);
            c(16, wd);
            c(17, wd);
            c(18, xd);
            c(19, yd);
            c(20, zd);
            c(21, Ad);
            c(22, Bd);
            c(23, Cd);
            c(24, Dd);
            c(25, Ed);
            c(26, Fd);
            c(27, Gd);
            c(28, Hd);
            c(29, Id);
            c(45, Jd);
            c(30, Kd);
            c(32, Ld);
            c(33, Ld);
            c(34, Md);
            c(35, Md);
            c(46, Nd);
            c(36, Od);
            c(43, Pd);
            c(37, Qd);
            c(38, Yd);
            c(39, Zd);
            c(40, $d);
            c(41, ae);
            c(42, be);
            c(58, ce);
            c(57, de);
            c(60, ee);
            c(61, fe);
            c(56, ge);
            c(62, he);
            c(59, ie)
        };

        function le(a) {
            if (a instanceof qa || a instanceof mb || a instanceof wa || a instanceof qb || a instanceof vc || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a)
                return a
        }
        ;var ne = function () {
            var a = function (b) {
                return {
                    toString: function () {
                        return b
                    }
                }
            };
            return {
                Bh: a("consent"),
                Wd: a("consent_always_fire"),
                Ef: a("convert_case_to"),
                Ff: a("convert_false_to"),
                Gf: a("convert_null_to"),
                Hf: a("convert_true_to"),
                If: a("convert_undefined_to"),
                ek: a("debug_mode_metadata"),
                fk: a("event_data_overrides"),
                yb: a("function"),
                ki: a("instance_name"),
                oi: a("live_only"),
                ri: a("malware_disabled"),
                si: a("metadata"),
                ik: a("original_activity_id"),
                jk: a("original_vendor_template_id"),
                xi: a("once_per_event"),
                lg: a("once_per_load"),
                lk: a("priority_override"),
                mk: a("respected_consent_types"),
                pg: a("setup_tags"),
                qg: a("tag_id"),
                rg: a("teardown_tags")
            }
        }();
        var Pe;
        var Qe = [], Re = [], Se = [], Te = [], Ue = [], Ve = {}, We, Xe, Ye, Ze = function (a, b) {
            var c = {};
            c["function"] = "__" + a;
            for (var d in b)
                b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        }, $e = function (a, b) {
            var c = a["function"]
                , d = b && b.event;
            if (!c)
                throw Error("Error: No function name given for function call.");
            var e = Ve[c], f = {}, g;
            for (g in a)
                if (a.hasOwnProperty(g))
                    if (0 === g.indexOf("vtp_"))
                        e && d && d.Eg && d.Eg(a[g]),
                            f[void 0 !== e ? g : g.substr(4)] = a[g];
                    else if (g === ne.Wd.toString() && a[g]) {
                    }
            e && d && d.Dg && (f.vtp_gtmCachedValues = d.Dg);
            return void 0 !== e ? e(f) : Pe(c, f, b)
        }, bf = function (a, b, c) {
            c = c || [];
            var d = {}, e;
            for (e in a)
                a.hasOwnProperty(e) && (d[e] = af(a[e], b, c));
            return d
        }, af = function (a, b, c) {
            if (Ia(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++)
                            d.push(af(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f])
                            return;
                        var g = Qe[f];
                        if (!g || b.ff(g))
                            return;
                        c[f] = !0;
                        try {
                            var h = bf(g, b, c);
                            h.vtp_gtmEventId = b.id;
                            d = $e(h, {
                                event: b,
                                index: f,
                                type: 2
                            });
                            Ye && (d = Ye.Oi(d, h))
                        } catch (y) {
                            b.Yg && b.Yg(y, Number(f)),
                                d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var l = 1; l < a.length; l += 2)
                            d[af(a[l], b, c)] = af(a[l + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var n = !1, p = 1; p < a.length; p++) {
                            var r = af(a[p], b, c);
                            Xe && (n = n || r === Xe.td);
                            d.push(r)
                        }
                        return Xe && n ? Xe.Si(d) : d.join("");
                    case "escape":
                        d = af(a[1], b, c);
                        if (Xe && Ia(a[1]) && "macro" === a[1][0] && Xe.nj(a))
                            return Xe.Fj(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++)
                            oe[a[t]] && (d = oe[a[t]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!Te[u])
                            throw Error("Unable to resolve tag reference " + u + ".");
                        return d = {
                            Ng: a[2],
                            index: u
                        };
                    case "zb":
                        var q = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        q["function"] = a[1];
                        var v = cf(q, b, c)
                            , w = !!a[4];
                        return w || 2 !== v ? w !== (1 === v) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        }, cf = function (a, b, c) {
            try {
                return We(bf(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
        var df = function (a, b, c) {
            var d;
            d = Error.call(this);
            this.message = d.message;
            "stack" in d && (this.stack = d.stack);
            this.o = a;
            this.g = c
        };
        ma(df, Error);

        function ef(a, b) {
            if (Ia(a)) {
                Object.defineProperty(a, "context", {
                    value: {
                        line: b[0]
                    }
                });
                for (var c = 1; c < a.length; c++)
                    ef(a[c], b[c])
            }
        }
        ;var ff = function (a, b) {
            var c;
            c = Error.call(this);
            this.message = c.message;
            "stack" in c && (this.stack = c.stack);
            this.s = a;
            this.o = b;
            this.g = []
        };
        ma(ff, Error);
        var hf = function () {
            return function (a, b) {
                a instanceof ff || (a = new ff(a, gf));
                b && a.g.push(b);
                throw a;
            }
        };

        function gf(a) {
            if (!a.length)
                return a;
            a.push({
                id: "main",
                line: 0
            });
            for (var b = a.length - 1; 0 < b; b--)
                Ha(a[b].id) && a.splice(b++, 1);
            for (var c = a.length - 1; 0 < c; c--)
                a[c].line = a[c - 1].line;
            a.splice(0, 1);
            return a
        }
        ;var lf = function (a) {
            function b(t) {
                for (var u = 0; u < t.length; u++)
                    d[t[u]] = !0
            }

            for (var c = [], d = [], e = jf(a), f = 0; f < Re.length; f++) {
                var g = Re[f]
                    , h = kf(g, e);
                if (h) {
                    for (var l = g.add || [], n = 0; n < l.length; n++)
                        c[l[n]] = !0;
                    b(g.block || [])
                } else
                    null === h && b(g.block || []);
            }
            for (var p = [], r = 0; r < Te.length; r++)
                c[r] && !d[r] && (p[r] = !0);
            return p
        }
            , kf = function (a, b) {
                for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                    var e = b(c[d]);
                    if (0 === e)
                        return !1;
                    if (2 === e)
                        return null
                }
                for (var f = a.unless || [], g = 0; g < f.length; g++) {
                    var h = b(f[g]);
                    if (2 === h)
                        return null;
                    if (1 === h)
                        return !1
                }
                return !0
            }
            , jf = function (a) {
                var b = [];
                return function (c) {
                    void 0 === b[c] && (b[c] = cf(Se[c], a));
                    return b[c]
                }
            };
        var mf = {
            Oi: function (a, b) {
                b[ne.Ef] && "string" === typeof a && (a = 1 == b[ne.Ef] ? a.toLowerCase() : a.toUpperCase());
                b.hasOwnProperty(ne.Gf) && null === a && (a = b[ne.Gf]);
                b.hasOwnProperty(ne.If) && void 0 === a && (a = b[ne.If]);
                b.hasOwnProperty(ne.Hf) && !0 === a && (a = b[ne.Hf]);
                b.hasOwnProperty(ne.Ff) && !1 === a && (a = b[ne.Ff]);
                return a
            }
        };
        var nf = function () {
            this.g = {}
        };

        function of(a, b, c, d) {
            if (a)
                for (var e = 0; e < a.length; e++) {
                    var f = void 0
                        , g = "A policy function denied the permission request";
                    try {
                        f = a[e].call(void 0, b, c, d),
                            g += "."
                    } catch (h) {
                        g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
                    }
                    if (!f)
                        throw new df(c, d, g);
                }
        }

        function pf(a, b, c) {
            return function () {
                var d = arguments[0];
                if (d) {
                    var e = a.g[d]
                        , f = a.g.all;
                    if (e || f) {
                        var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                        of(e, b, d, g);
                        of(f, b, d, g)
                    }
                }
            }
        }
        ;var tf = function (a) {
            var b = qf.J
                , c = this;
            this.o = new nf;
            this.g = {};
            var d = {}
                , e = pf(this.o, b, function () {
                var f = arguments[0];
                return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
            });
            Oa(a, function (f, g) {
                var h = {};
                Oa(g, function (l, n) {
                    var p = rf(l, n);
                    h[l] = p.assert;
                    d[l] || (d[l] = p.T)
                });
                c.g[f] = function (l, n) {
                    var p = h[l];
                    if (!p)
                        throw sf(l, {}, "The requested permission " + l + " is not configured.");
                    var r = Array.prototype.slice.call(arguments, 0);
                    p.apply(void 0, r);
                    e.apply(void 0, r)
                }
            })
        }
            , vf = function (a) {
                return uf.g[a] || function () {
                }
            };

        function rf(a, b) {
            var c = Ze(a, b);
            c.vtp_permissionName = a;
            c.vtp_createPermissionError = sf;
            try {
                return $e(c)
            } catch (d) {
                return {
                    assert: function (e) {
                        throw new df(e, {}, "Permission " + e + " is unknown.");
                    },
                    T: function () {
                        for (var e = {}, f = 0; f < arguments.length; ++f)
                            e["arg" + (f + 1)] = arguments[f];
                        return e
                    }
                }
            }
        }

        function sf(a, b, c) {
            return new df(a, b, c)
        }
        ;var wf = !1;
        var xf = {};
        xf.ck = Ta('');
        xf.Wi = Ta('');
        var yf = wf
            , zf = xf.Wi
            , Af = xf.ck;
        var Bf = function (a, b) {
            var c = String(a);
            return c
        };
        var Gf = function (a) {
            var b = {}
                , c = 0;
            Oa(a, function (e, f) {
                if (void 0 !== f)
                    if (f = Bf(f, 100),
                        Cf.hasOwnProperty(e))
                        b[Cf[e]] = Df(f);
                    else if (Ef.hasOwnProperty(e)) {
                        var g = Ef[e]
                            , h = Df(f);
                        b.hasOwnProperty(g) || (b[g] = h)
                    } else if ("category" === e)
                        for (var l = Df(f).split("/", 5), n = 0; n < l.length; n++) {
                            var p = Ff[n]
                                , r = l[n];
                            b.hasOwnProperty(p) || (b[p] = r)
                        }
                    else
                        10 > c && (b["k" + c] = Df(Bf(e, 40)),
                            b["v" + c] = Df(f),
                            c++)
            });
            var d = [];
            Oa(b, function (e, f) {
                d.push("" + e + f)
            });
            return d.join("~")
        }
            , Df = function (a) {
            return ("" + a).replace(/~/g, function () {
                return "~~"
            })
        }
            , Cf = {
            item_id: "id",
            item_name: "nm",
            item_brand: "br",
            item_category: "ca",
            item_category2: "c2",
            item_category3: "c3",
            item_category4: "c4",
            item_category5: "c5",
            item_variant: "va",
            price: "pr",
            quantity: "qt",
            coupon: "cp",
            item_list_name: "ln",
            index: "lp",
            item_list_id: "li",
            discount: "ds",
            affiliation: "af",
            promotion_id: "pi",
            promotion_name: "pn",
            creative_name: "cn",
            creative_slot: "cs",
            location_id: "lo"
        }
            , Ef = {
            id: "id",
            name: "nm",
            brand: "br",
            variant: "va",
            list_name: "ln",
            list_position: "lp",
            list: "ln",
            position: "lp",
            creative: "cn"
        }
            , Ff = ["ca", "c2", "c3", "c4", "c5"];
        var Hf = function (a) {
            var b = [];
            Oa(a, function (c, d) {
                null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)))
            });
            return b.join("&")
        }
            , If = function (a, b, c, d) {
            this.Wa = a.Wa;
            this.Hb = a.Hb;
            this.K = a.K;
            this.o = b;
            this.C = c;
            this.s = Hf(a.Wa);
            this.g = Hf(a.K);
            this.F = d ? this.g.length : 0;
            if (16384 < this.F)
                throw Error("EVENT_TOO_LARGE");
        };
        var Jf = function () {
            this.events = [];
            this.g = this.Wa = "";
            this.s = 0;
            this.o = !1
        };
        Jf.prototype.add = function (a) {
            return this.C(a) ? (this.events.push(a),
                this.Wa = a.s,
                this.g = a.o,
                this.s += a.F,
                this.o = a.C,
                !0) : !1
        }
        ;
        Jf.prototype.C = function (a) {
            var b = 20 > this.events.length && 16384 > a.F + this.s
                , c = this.Wa === a.s && this.g === a.o && this.o === a.C;
            return 0 == this.events.length || b && c
        }
        ;
        var Qf = function (a, b) {
            Oa(a, function (c, d) {
                null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
            })
        }
            , Rf = function (a, b) {
            var c = [];
            a.s && c.push(a.s);
            b && c.push("_s=" + b);
            Qf(a.Hb, c);
            var d = !1;
            a.g && (c.push(a.g),
                d = !0);
            var e = c.join("&")
                , f = ""
                , g = e.length + a.o.length + 1;
            d && 2048 < g && (f = c.pop(),
                e = c.join("&"));
            return {
                sf: e,
                body: f
            }
        }
            , Sf = function (a, b) {
            var c = a.events;
            if (1 == c.length)
                return Rf(c[0], b);
            var d = [];
            a.Wa && d.push(a.Wa);
            for (var e = {}, f = 0; f < c.length; f++)
                Oa(c[f].Hb, function (u, q) {
                    null != q && (e[u] = e[u] || {},
                        e[u][String(q)] = e[u][String(q)] + 1 || 1)
                });
            var g = {};
            Oa(e, function (u, q) {
                var v, w = -1, y = 0;
                Oa(q, function (x, z) {
                    y += z;
                    var B = (x.length + u.length + 2) * (z - 1);
                    B > w && (v = x,
                        w = B)
                });
                y == c.length && (g[u] = v)
            });
            Qf(g, d);
            b && d.push("_s=" + b);
            for (var h = d.join("&"), l = [], n = {}, p = 0; p < c.length; n = {
                $c: n.$c
            },
                p++) {
                var r = [];
                n.$c = {};
                Oa(c[p].Hb, function (u) {
                    return function (q, v) {
                        g[q] != "" + v && (u.$c[q] = v)
                    }
                }(n));
                c[p].g && r.push(c[p].g);
                Qf(n.$c, r);
                l.push(r.join("&"))
            }
            var t = l.join("\r\n");
            return {
                sf: h,
                body: t
            }
        };
        var ag = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i
            , bg = {
            Fn: "function",
            DustMap: "Object",
            List: "Array"
        }
            , Q = function (a, b, c) {
            for (var d = 0; d < b.length; d++) {
                var e = ag.exec(b[d]);
                if (!e)
                    throw Error("Internal Error in " + a);
                var f = e[1]
                    , g = "!" === e[2]
                    , h = e[3]
                    , l = c[d]
                    , n = typeof l;
                if (null === l || "undefined" === n) {
                    if (g)
                        throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
                } else if ("*" !== h) {
                    var p = typeof l;
                    l instanceof mb ? p = "Fn" : l instanceof wa ? p = "List" : l instanceof qb ? p = "DustMap" : l instanceof vc && (p = "OpaqueValue");
                    if (p != h)
                        throw Error("Error in " + a + ". Argument " + f + " has type " + p + ", which does not match required type " + (bg[h] || h) + ".");
                }
            }
        };

        function cg(a) {
            return "" + a
        }

        function dg(a, b) {
            var c = [];
            return c
        }
        ;var eg = function (a, b) {
            var c = new mb(a, function () {
                    for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++)
                        d[e] = G(this, d[e]);
                    return b.apply(this, d)
                }
            );
            c.Ab();
            return c
        }
            , fg = function (a, b) {
                var c = new qb, d;
                for (d in b)
                    if (b.hasOwnProperty(d)) {
                        var e = b[d];
                        Ga(e) ? c.set(d, eg(a + "_" + d, e)) : (Ha(e) || m(e) || "boolean" == typeof e) && c.set(d, e)
                    }
                c.Ab();
                return c
            };
        var gg = function (a, b) {
            Q(I(this), ["apiName:!string", "message:?string"], arguments);
            var c = {}
                , d = new qb;
            return d = fg("AssertApiSubject", c)
        };
        var hg = function (a, b) {
            Q(I(this), ["actual:?*", "message:?string"], arguments);
            var c = {}
                , d = new qb;
            return d = fg("AssertThatSubject", c)
        };

        function ig(a) {
            return function () {
                for (var b = [], c = this.g, d = 0; d < arguments.length; ++d)
                    b.push(Jc(arguments[d], c));
                return Ic(a.apply(null, b))
            }
        }

        var kg = function () {
            for (var a = Math, b = jg, c = {}, d = 0; d < b.length; d++) {
                var e = b[d];
                a.hasOwnProperty(e) && (c[e] = ig(a[e].bind(a)))
            }
            return c
        };
        var lg = function (a) {
            var b;
            return b
        };
        var mg = function (a) {
            var b;
            return b
        };
        var ng = function (a) {
            return encodeURI(a)
        };
        var og = function (a) {
            return encodeURIComponent(a)
        };
        var pg = function (a) {
            Q(I(this), ["message:?string"], arguments);
        };
        var qg = function (a, b) {
            Q(I(this), ["min:!number", "max:!number"], arguments);
            return Ka(a, b)
        };
        var rg = function (a, b, c) {
            var d = a.g.g;
            if (!d)
                throw Error("Missing program state.");
            d.Hi.apply(null, Array.prototype.slice.call(arguments, 1))
        };
        var sg = function () {
            rg(this, "read_container_data");
            var a = new qb;
            a.set("containerId", 'G-4Q2MRL1K2Y');
            a.set("version", '1');
            a.set("environmentName", '');
            a.set("debugMode", yf);
            a.set("previewMode", Af);
            a.set("environmentMode", zf);
            a.Ab();
            return a
        };
        var tg = {};
        tg.sstECEnableData = !0;
        tg.enableAdsEc = !0;
        tg.enableCrossDomain = !1;
        tg.enableCrossDomain = !0;
        tg.sstFFConversionEnabled = !0;
        tg.sstEnableAuid = !0;
        tg.enableGbraidUpdate = !0;
        tg.enable1pScripts = !0;
        tg.requireGtagUserDataTos = !0;

        function ug() {
            return Ic(tg)
        }
        ;var vg = function () {
            return (new Date).getTime()
        };
        var wg = function (a) {
            if (null === a)
                return "null";
            if (a instanceof wa)
                return "array";
            if (a instanceof mb)
                return "function";
            if (a instanceof vc) {
                a = a.Sa;
                if (void 0 === a.constructor || void 0 === a.constructor.name) {
                    var b = String(a);
                    return b.substring(8, b.length - 1)
                }
                return String(a.constructor.name)
            }
            return typeof a
        };
        var xg = function (a) {
            function b(c) {
                return function (d) {
                    try {
                        return c(d)
                    } catch (e) {
                        (yf || Af) && a.call(this, e.message)
                    }
                }
            }

            return {
                parse: b(function (c) {
                    return Ic(JSON.parse(c))
                }),
                stringify: b(function (c) {
                    return JSON.stringify(Jc(c))
                })
            }
        };
        var yg = function (a) {
            return Qa(Jc(a, this.g))
        };
        var zg = function (a) {
            return Number(Jc(a, this.g))
        };
        var Ag = function (a) {
            return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
        };
        var Bg = function (a, b, c) {
            var d = null
                , e = !1;
            return e ? d : null
        };
        var jg = "floor ceil round max min abs pow sqrt".split(" ");
        var Cg = function () {
            var a = {};
            return {
                cj: function (b) {
                    return a.hasOwnProperty(b) ? a[b] : void 0
                },
                Vj: function (b, c) {
                    a[b] = c
                },
                reset: function () {
                    a = {}
                }
            }
        }
            , Dg = function (a, b) {
            Q(I(this), ["apiName:!string", "mock:?*"], arguments);
        };
        var Eg = {};
        Eg.keys = function (a) {
            return new wa
        }
        ;
        Eg.values = function (a) {
            return new wa
        }
        ;
        Eg.entries = function (a) {
            return new wa
        }
        ;
        Eg.freeze = function (a) {
            return a
        }
        ;
        Eg.delete = function (a, b) {
            return !1
        }
        ;
        var Gg = function () {
            this.g = {};
            this.o = {};
        };
        Gg.prototype.get = function (a, b) {
            var c = this.g.hasOwnProperty(a) ? this.g[a] : void 0;
            return c
        }
        ;
        Gg.prototype.add = function (a, b, c) {
            if (this.g.hasOwnProperty(a))
                throw "Attempting to add a function which already exists: " + a + ".";
            if (this.o.hasOwnProperty(a))
                throw "Attempting to add an API with an existing private API name: " + a + ".";
            this.g[a] = c ? void 0 : Ga(b) ? eg(a, b) : fg(a, b)
        }
        ;
        var Ig = function (a, b, c) {
            if (a.o.hasOwnProperty(b))
                throw "Attempting to add a private function which already exists: " + b + ".";
            if (a.g.hasOwnProperty(b))
                throw "Attempting to add a private function with an existing API name: " + b + ".";
            a.o[b] = Ga(c) ? eg(b, c) : fg(b, c)
        };

        function Hg(a, b) {
            var c = void 0;
            return c
        }
        ;

        function Jg() {
            var a = {};
            return a
        }
        ;var R = {
            Vb: "_ee",
            zd: "_syn_or_mod",
            pk: "_uei",
            ze: "_eu",
            kk: "_pci",
            Qb: "event_callback",
            gd: "event_timeout",
            za: "gtag.config",
            Na: "gtag.get",
            xa: "purchase",
            Nb: "refund",
            pb: "begin_checkout",
            Lb: "add_to_cart",
            Mb: "remove_from_cart",
            Kh: "view_cart",
            Kf: "add_to_wishlist",
            ya: "view_item",
            qb: "view_promotion",
            cd: "select_promotion",
            $d: "select_item",
            $a: "view_item_list",
            Jf: "add_payment_info",
            Jh: "add_shipping_info",
            Pa: "value_key",
            cb: "value_callback",
            Ea: "allow_ad_personalization_signals",
            sc: "restricted_data_processing",
            mc: "allow_google_signals",
            qa: "cookie_expires",
            Pb: "cookie_update",
            uc: "session_duration",
            nd: "session_engaged_time",
            Ra: "user_properties",
            sa: "transport_url",
            V: "ads_data_redaction",
            Aa: "user_data",
            qc: "first_party_collection",
            D: "ad_storage",
            I: "analytics_storage",
            Xd: "region",
            Df: "wait_for_update",
            oa: "conversion_linker",
            Fa: "conversion_cookie_prefix",
            da: "value",
            ca: "currency",
            hg: "trip_type",
            Z: "items",
            $f: "passengers",
            ce: "allow_custom_scripts",
            vc: "session_id",
            eg: "quantity",
            fb: "transaction_id",
            tb: "language",
            ed: "country",
            dd: "allow_enhanced_conversions",
            ie: "aw_merchant_id",
            fe: "aw_feed_country",
            he: "aw_feed_language",
            ee: "discount",
            W: "developer_id",
            od: "delivery_postal_code",
            pe: "estimated_delivery_date",
            ne: "shipping",
            ve: "new_customer",
            je: "customer_lifetime_value",
            oe: "enhanced_conversions",
            kc: "page_view",
            ia: "linker",
            O: "domains",
            ub: "decorate_forms",
            Wf: "enhanced_conversions_automatic_settings",
            Th: "auto_detection_enabled",
            Xf: "ga_temp_client_id",
            ae: "user_engagement",
            Eh: "app_remove",
            Fh: "app_store_refund",
            Gh: "app_store_subscription_cancel",
            Hh: "app_store_subscription_convert",
            Ih: "app_store_subscription_renew",
            Lh: "first_open",
            Mh: "first_visit",
            Nh: "in_app_purchase",
            Oh: "session_start",
            Ph: "user_data_login",
            Qh: "user_data_logout",
            Rh: "allow_display_features",
            nc: "campaign",
            Mf: "campaign_content",
            Nf: "campaign_id",
            Of: "campaign_medium",
            Pf: "campaign_name",
            Qf: "campaign_source",
            Rf: "campaign_term",
            rb: "client_id",
            fa: "cookie_domain",
            Ob: "cookie_name",
            ab: "cookie_path",
            Ga: "cookie_flags",
            oc: "custom_map",
            se: "groups",
            Zf: "non_interaction",
            vb: "page_location",
            we: "page_path",
            Qa: "page_referrer",
            ld: "page_title",
            Ub: "send_page_view",
            wb: "send_to",
            xe: "session_engaged",
            kd: "_logged_in_state",
            ye: "session_number",
            gi: "tracking_id",
            hb: "url_passthrough",
            Sb: "accept_incoming",
            Tb: "url_position",
            cg: "phone_conversion_number",
            ag: "phone_conversion_callback",
            bg: "phone_conversion_css_class",
            dg: "phone_conversion_options",
            di: "phone_conversion_ids",
            ci: "phone_conversion_country_code",
            Lf: "aw_remarketing",
            de: "aw_remarketing_only",
            be: "gclid",
            Sh: "auid",
            Yh: "affiliation",
            Vf: "tax",
            me: "list_name",
            Uf: "checkout_step",
            Tf: "checkout_option",
            Zh: "coupon",
            $h: "promotions",
            xb: "user_id",
            ei: "retoken",
            ra: "cookie_prefix",
            Sf: "disable_merchant_reported_purchases",
            Xh: "dc_natural_search",
            Wh: "dc_custom_params",
            Yf: "method",
            fi: "search_term",
            Vh: "content_type",
            bi: "optimize_id",
            ai: "experiments",
            eb: "google_signals",
            jd: "google_tld",
            pd: "update",
            qe: "firebase_id",
            Rb: "ga_restrict_domain",
            fd: "event_settings",
            ke: "dynamic_event_settings",
            wc: "user_data_settings",
            fg: "screen_name",
            Oa: "_x_19",
            sb: "_ecid",
            hd: "_x_20",
            ue: "internal_traffic_results",
            gg: "traffic_type",
            md: "referral_exclusion_definition",
            te: "ignore_referrer",
            Uh: "content_group"
        };
        var Kg = {};
        R.hi = Object.freeze((Kg[R.Ea] = 1,
            Kg[R.dd] = 1,
            Kg[R.mc] = 1,
            Kg[R.Z] = 1,
            Kg[R.fa] = 1,
            Kg[R.qa] = 1,
            Kg[R.Ga] = 1,
            Kg[R.Ob] = 1,
            Kg[R.ab] = 1,
            Kg[R.ra] = 1,
            Kg[R.Pb] = 1,
            Kg[R.oc] = 1,
            Kg[R.W] = 1,
            Kg[R.ke] = 1,
            Kg[R.Qb] = 1,
            Kg[R.fd] = 1,
            Kg[R.gd] = 1,
            Kg[R.qc] = 1,
            Kg[R.Rb] = 1,
            Kg[R.eb] = 1,
            Kg[R.jd] = 1,
            Kg[R.se] = 1,
            Kg[R.ue] = 1,
            Kg[R.ia] = 1,
            Kg[R.md] = 1,
            Kg[R.sc] = 1,
            Kg[R.Ub] = 1,
            Kg[R.wb] = 1,
            Kg[R.uc] = 1,
            Kg[R.nd] = 1,
            Kg[R.od] = 1,
            Kg[R.sa] = 1,
            Kg[R.pd] = 1,
            Kg[R.wc] = 1,
            Kg[R.Ra] = 1,
            Kg[R.ze] = 1,
            Kg));
        R.ig = Object.freeze([R.vb, R.Qa, R.ld, R.tb, R.fg, R.xb, R.qe, R.Uh]);
        var Lg = {};
        R.ji = Object.freeze((Lg[R.Eh] = 1,
            Lg[R.Fh] = 1,
            Lg[R.Gh] = 1,
            Lg[R.Hh] = 1,
            Lg[R.Ih] = 1,
            Lg[R.Lh] = 1,
            Lg[R.Mh] = 1,
            Lg[R.Nh] = 1,
            Lg[R.Oh] = 1,
            Lg[R.ae] = 1,
            Lg));
        var Mg = {};
        R.jg = Object.freeze((Mg[R.Jf] = 1,
            Mg[R.Jh] = 1,
            Mg[R.Lb] = 1,
            Mg[R.Mb] = 1,
            Mg[R.Kh] = 1,
            Mg[R.pb] = 1,
            Mg[R.$d] = 1,
            Mg[R.$a] = 1,
            Mg[R.cd] = 1,
            Mg[R.qb] = 1,
            Mg[R.xa] = 1,
            Mg[R.Nb] = 1,
            Mg[R.ya] = 1,
            Mg[R.Kf] = 1,
            Mg));
        R.Be = Object.freeze([R.Ea, R.mc, R.Pb]);
        R.vi = Object.freeze([].concat(R.Be));
        R.Ce = Object.freeze([R.qa, R.gd, R.uc, R.nd]);
        R.wi = Object.freeze([].concat(R.Ce));
        var Og = {}
            , Pg = function (a, b) {
            Og[a] = Og[a] || [];
            Og[a][b] = !0
        }
            , Qg = function (a) {
            for (var b = [], c = Og[a] || [], d = 0; d < c.length; d++)
                c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++)
                b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
            return b.join("")
        };
        var Rg = function (a) {
            Pg("GTM", a)
        };
        var qf = {}
            , S = null
            , Sg = Math.random();
        qf.J = "G-4Q2MRL1K2Y";
        qf.xd = "b31";
        qf.Dh = "ChEI8M+YjAYQ6YD+hKvZsNPSARIlAN0AEynIVvYUKGDiuMTn0XmXo34hIzT+M/sSQ8VpIPIPUd2ZExoClbk\x3d";
        var Tg = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0
        }, Ug = {
            __paused: !0,
            __tg: !0
        }, Vg;
        for (Vg in Tg)
            Tg.hasOwnProperty(Vg) && (Ug[Vg] = !0);
        qf.Yd = "www.googletagmanager.com";
        var Wg = qf.Yd + "/gtm.js";
        Wg = qf.Yd + "/gtag/js";
        var Xg = Wg
            , Yg = Ta("")
            , Zg = null
            , $g = null
            , ah = "https://www.googletagmanager.com/a?id=" + qf.J + "&cv=1"
            , bh = {}
            , ch = {}
            , dh = function () {
            var a = S.sequence || 1;
            S.sequence = a + 1;
            return a
        };
        qf.Ch = "";
        var eh = "";
        qf.yd = eh;
        var fh = {}
            , gh = new Ma
            , hh = {}
            , ih = {}
            , lh = {
            name: "dataLayer",
            set: function (a, b) {
                Hc(ib(a, b), hh);
                jh()
            },
            get: function (a) {
                return kh(a, 2)
            },
            reset: function () {
                gh = new Ma;
                hh = {};
                jh()
            }
        }
            , kh = function (a, b) {
            return 2 != b ? gh.get(a) : mh(a)
        }
            , mh = function (a, b) {
            var c = a.split(".");
            b = b || [];
            for (var d = hh, e = 0; e < c.length; e++) {
                if (null === d)
                    return !1;
                if (void 0 === d)
                    break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d))
                    return
            }
            return d
        }
            , nh = function (a, b) {
            ih.hasOwnProperty(a) || (gh.set(a, b),
                Hc(ib(a, b), hh),
                jh())
        }
            , oh = function () {
            for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
                var c = a[b]
                    , d = kh(c, 1);
                if (Ia(d) || Gc(d))
                    d = Hc(d);
                ih[c] = d
            }
        }
            , jh = function (a) {
            Oa(ih, function (b, c) {
                gh.set(b, c);
                Hc(ib(b, void 0), hh);
                Hc(ib(b, c), hh);
                a && delete ih[b]
            })
        }
            , qh = function (a, b, c) {
            fh[a] = fh[a] || {};
            fh[a][b] = ph(b, c)
        }
            , ph = function (a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? mh(a) : gh.get(a);
            "array" === zc(d) || "object" === zc(d) ? c = Hc(d) : c = d;
            return c
        }
            , rh = function (a, b) {
            if (fh[a])
                return fh[a][b]
        }
            , sh = function (a, b) {
            fh[a] && delete fh[a][b]
        };
        var th = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/)
            , uh = {
                cl: ["ecl"],
                customPixels: ["nonGooglePixels"],
                ecl: ["cl"],
                ehl: ["hl"],
                hl: ["ehl"],
                html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
                customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
                nonGooglePixels: [],
                nonGoogleScripts: ["nonGooglePixels"],
                nonGoogleIframes: ["nonGooglePixels"]
            }
            , vh = {
                cl: ["ecl"],
                customPixels: ["customScripts", "html"],
                ecl: ["cl"],
                ehl: ["hl"],
                hl: ["ehl"],
                html: ["customScripts"],
                customScripts: ["html"],
                nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
                nonGoogleScripts: ["customScripts", "html"],
                nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
            }
            ,
            wh = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
        var xh = function () {
            var a = !1;
            a = !0;
            return a
        }
            , zh = function (a) {
            var b = kh("gtm.allowlist") || kh("gtm.whitelist");
            b && Rg(9);
            xh() && (b = "google gtagfl lcl zone oid op".split(" "));
            var c = b && gb(Ua(b), uh)
                , d = kh("gtm.blocklist") || kh("gtm.blacklist");
            d || (d = kh("tagTypeBlacklist")) && Rg(3);
            d ? Rg(8) : d = [];
            yh() && (d = Ua(d),
                d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ua(d).indexOf("google") && Rg(2);
            var e = d && gb(Ua(d), vh)
                , f = {};
            return function (g) {
                var h = g && g[ne.yb];
                if (!h || "string" != typeof h)
                    return !0;
                h = h.replace(/^_*/, "");
                if (void 0 !== f[h])
                    return f[h];
                var l = ch[h] || []
                    , n = a(h, l);
                if (b) {
                    var p;
                    if (p = n)
                        a: {
                            if (0 > c.indexOf(h))
                                if (l && 0 < l.length)
                                    for (var r = 0; r < l.length; r++) {
                                        if (0 > c.indexOf(l[r])) {
                                            Rg(11);
                                            p = !1;
                                            break a
                                        }
                                    }
                                else {
                                    p = !1;
                                    break a
                                }
                            p = !0
                        }
                    n = p
                }
                var t = !1;
                if (d) {
                    var u = 0 <= e.indexOf(h);
                    if (u)
                        t = u;
                    else {
                        var q = Na(e, l || []);
                        q && Rg(10);
                        t = q
                    }
                }
                var v = !n || t;
                v || !(0 <= l.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = Na(e, wh));
                return f[h] = v
            }
        }
            , yh = function () {
            return th.test(A.location && A.location.hostname)
        };
        var Ah = {
            active: !0,
            isAllowed: function () {
                return !0
            }
        }
            , Bh = function (a) {
            var b = S.zones;
            return b ? b.checkState(qf.J, a) : Ah
        }
            , Ch = function (a) {
            var b = S.zones;
            !b && a && (b = S.zones = a());
            return b
        };
        var Dh = function (a) {
            this.g = a;
            this.defaultValue = !1
        };
        var Eh = new Dh(1933)
            , Fh = new Dh(1956);
        var Mh = function () {
            var a = Gh
                , b = "df";
            if (a.df && a.hasOwnProperty(b))
                return a.df;
            var c = new a;
            a.df = c;
            a.hasOwnProperty(b);
            return c
        };
        var Gh = function () {
            var a = {};
            this.o = function (b, c) {
                return null != a[b] ? a[b] : c
            }
            ;
            this.g = function (b) {
                a[b] = !0
            }
        }
            , Nh = function (a) {
            return Mh().o(a.g, a.defaultValue)
        };
        var Oh = [];

        function Ph() {
            var a = Wb("google_tag_data", {});
            a.ics || (a.ics = {
                entries: {},
                set: Qh,
                update: Rh,
                addListener: Sh,
                notifyListeners: Th,
                active: !1,
                usedDefault: !1
            });
            return a.ics
        }

        function Qh(a, b, c, d, e, f) {
            var g = Ph();
            g.active = !0;
            g.usedDefault = !0;
            if (void 0 != b) {
                var h = g.entries
                    , l = h[a] || {}
                    , n = l.region
                    , p = c && m(c) ? c.toUpperCase() : void 0;
                d = d.toUpperCase();
                e = e.toUpperCase();
                if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                    var r = !!(f && 0 < f && void 0 === l.update)
                        , t = {
                        region: p,
                        initial: "granted" === b,
                        update: l.update,
                        quiet: r
                    };
                    if ("" !== d || !1 !== l.initial)
                        h[a] = t;
                    r && A.setTimeout(function () {
                        h[a] === t && t.quiet && (t.quiet = !1,
                            Uh(a),
                            Th(),
                            Pg("TAGGING", 2))
                    }, f)
                }
            }
        }

        function Rh(a, b) {
            var c = Ph();
            c.active = !0;
            if (void 0 != b) {
                var d = Vh(a)
                    , e = c.entries
                    , f = e[a] = e[a] || {};
                f.update = "granted" === b;
                var g = Vh(a);
                f.quiet ? (f.quiet = !1,
                    Uh(a)) : g !== d && Uh(a)
            }
        }

        function Sh(a, b) {
            Oh.push({
                Ue: a,
                Zi: b
            })
        }

        function Uh(a) {
            for (var b = 0; b < Oh.length; ++b) {
                var c = Oh[b];
                Ia(c.Ue) && -1 !== c.Ue.indexOf(a) && (c.bh = !0)
            }
        }

        function Th(a) {
            for (var b = 0; b < Oh.length; ++b) {
                var c = Oh[b];
                if (c.bh) {
                    c.bh = !1;
                    try {
                        c.Zi({
                            consentEventId: a
                        })
                    } catch (d) {
                    }
                }
            }
        }

        var Vh = function (a) {
            var b = Ph().entries[a] || {};
            return void 0 !== b.update ? b.update : b.initial
        }
            , Wh = function (a) {
            return (Ph().entries[a] || {}).initial
        }
            , Xh = function (a) {
            return !(Ph().entries[a] || {}).quiet
        }
            , Yh = function () {
            return Nh(Eh) ? Ph().active : !1
        }
            , Zh = function () {
            return Ph().usedDefault
        }
            , $h = function (a, b) {
            Ph().addListener(a, b)
        }
            , ai = function (a) {
            Ph().notifyListeners(a)
        }
            , bi = function (a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Xh(b[e]))
                        return !0;
                return !1
            }

            if (c()) {
                var d = !1;
                $h(b, function (e) {
                    d || c() || (d = !0,
                        a(e))
                })
            } else
                a({})
        }
            , ci = function (a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var h = d[g];
                    !1 === Vh(h) || e[h] || (f.push(h),
                        e[h] = !0)
                }
                return f
            }

            var d = m(b) ? [b] : b
                , e = {};
            c().length !== d.length && $h(d, function (f) {
                var g = c();
                0 < g.length && (f.Ue = g,
                    a(f))
            })
        };

        function di() {
        }

        function ei() {
        }
        ;

        function fi(a) {
            for (var b = [], c = 0; c < gi.length; c++) {
                var d = a(gi[c]);
                b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
            }
            return b.join("")
        }

        var gi = [R.D, R.I]
            , hi = function (a) {
            var b = a[R.Xd];
            b && Rg(40);
            var c = a[R.Df];
            c && Rg(41);
            for (var d = Ia(b) ? b : [b], e = {
                fc: 0
            }; e.fc < d.length; e = {
                fc: e.fc
            },
                     ++e.fc)
                Oa(a, function (f) {
                    return function (g, h) {
                        if (g !== R.Xd && g !== R.Df) {
                            var l = d[f.fc];
                            Ph().set(g, h, l, "JP", "JP-14", c)
                        }
                    }
                }(e))
        }
            , ii = 0
            , ji = function (a, b) {
            Oa(a, function (e, f) {
                Ph().update(e, f)
            });
            ai(b);
            var c = Za()
                , d = c - ii;
            ii && 0 <= d && 1E3 > d && Rg(66);
            ii = c
        }
            , ki = function (a) {
            var b = Vh(a);
            return void 0 != b ? b : !0
        }
            , li = function () {
            return "G1" + fi(Vh)
        }
            , mi = function () {
            return "G1" + fi(Wh)
        }
            , ni = function (a, b) {
            $h(a, b)
        }
            , oi = function (a, b) {
            ci(a, b)
        }
            , pi = function (a, b) {
            bi(a, b)
        };
        var ri = function (a) {
            return qi ? J.querySelectorAll(a) : null
        }
            , si = function (a, b) {
            if (!qi)
                return null;
            if (Element.prototype.closest)
                try {
                    return a.closest(b)
                } catch (e) {
                    return null
                }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector
                , d = a;
            if (!J.documentElement.contains(d))
                return null;
            do {
                try {
                    if (c.call(d, b))
                        return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        }
            , ti = !1;
        if (J.querySelectorAll)
            try {
                var ui = J.querySelectorAll(":root");
                ui && 1 == ui.length && ui[0] == J.documentElement && (ti = !0)
            } catch (a) {
            }
        var qi = ti;
        var vi = function (a) {
            return void 0 === a || null === a ? "" : m(a) ? Va(String(a)) : "e0"
        }
            , xi = function (a) {
            return a.replace(wi, "")
        }
            , zi = function (a) {
            return yi(a.replace(/\s/g, ""))
        }
            , yi = function (a) {
            return Va(a.replace(Ai, "").toLowerCase())
        }
            , Ci = function (a) {
            a = a.replace(/[\s-()/.]/g, "");
            "+" !== a.charAt(0) && (a = "+" + a);
            return Bi.test(a) ? a : "e0"
        }
            , Ei = function (a) {
            var b = a.toLowerCase().split("@");
            if (2 == b.length) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (Di.test(c))
                    return c
            }
            return "e0"
        }
            , Hi = function (a, b) {
            window.Promise || b([]);
            Promise.all(a.map(function (c) {
                return c.value && -1 !== Fi.indexOf(c.name) ? Gi(c.value).then(function (d) {
                    c.value = d
                }) : Promise.resolve()
            })).then(function () {
                b(a)
            }).catch(function () {
                b([])
            })
        }
            , Gi = function (a) {
            if ("" === a || "e0" === a)
                return Promise.resolve(a);
            if (A.crypto && A.crypto.subtle)
                try {
                    var b = Ii(a);
                    return A.crypto.subtle.digest("SHA-256", b).then(function (c) {
                        var d = Array.from(new Uint8Array(c)).map(function (e) {
                            return String.fromCharCode(e)
                        }).join("");
                        return A.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                    }).catch(function () {
                        return "e2"
                    })
                } catch (c) {
                    return Promise.resolve("e2")
                }
            else
                return Promise.resolve("e1")
        }
            , Ii = function (a) {
            var b;
            if (A.TextEncoder)
                b = (new A.TextEncoder("utf-8")).encode(a);
            else {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023),
                        c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63))
                }
                b = new Uint8Array(c)
            }
            return b
        }
            , Ai = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g
            , Di = /^\S+@\S+\.\S+$/
            , Bi = /^\+\d{11,15}$/
            , wi = /[.~]/g
            , Ji = {}
            , Ki = (Ji.email = "em",
            Ji.phone_number = "pn",
            Ji.first_name = "fn",
            Ji.last_name = "ln",
            Ji.street = "sa",
            Ji.city = "ct",
            Ji.region = "rg",
            Ji.country = "co",
            Ji.postal_code = "pc",
            Ji.error_code = "ec",
            Ji)
            , Li = function (a, b) {
            function c(n, p, r) {
                var t = n[p];
                Ia(t) || (t = [t]);
                for (var u = 0; u < t.length; ++u) {
                    var q = vi(t[u]);
                    "" !== q && f.push({
                        name: p,
                        value: r(q),
                        index: void 0
                    })
                }
            }

            function d(n, p, r, t) {
                var u = vi(n[p]);
                "" !== u && f.push({
                    name: p,
                    value: r(u),
                    index: t
                })
            }

            function e(n) {
                return function (p) {
                    Rg(64);
                    return n(p)
                }
            }

            var f = [];
            if ("https:" === A.location.protocol) {
                c(a, "email", Ei);
                c(a, "phone_number", Ci);
                c(a, "first_name", e(zi));
                c(a, "last_name", e(zi));
                var g = a.home_address || {};
                c(g, "street", e(yi));
                c(g, "city", e(yi));
                c(g, "postal_code", e(xi));
                c(g, "region", e(yi));
                c(g, "country", e(xi));
                var h = a.address || {};
                Ia(h) || (h = [h]);
                for (var l = 0; l < h.length; l++)
                    d(h[l], "first_name", zi, l),
                        d(h[l], "last_name", zi, l),
                        d(h[l], "street", yi, l),
                        d(h[l], "city", yi, l),
                        d(h[l], "postal_code", xi, l),
                        d(h[l], "region", yi, l),
                        d(h[l], "country", xi, l);
                Hi(f, b)
            } else
                f.push({
                    name: "error_code",
                    value: "e3",
                    index: void 0
                }),
                    b(f)
        }
            , Mi = function (a, b) {
            Li(a, function (c) {
                for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                    var g = c[f].name
                        , h = c[f].value
                        , l = c[f].index
                        , n = Ki[g];
                    n && h && (-1 === Fi.indexOf(g) || /^e\d+$/.test(h) || /^[0-9A-Za-z_-]{43}$/.test(h)) && (void 0 !== l && (n += l),
                        d.push(n + "." + h),
                        e++)
                }
                1 === c.length && "error_code" === c[0].name && (e = 0);
                b(encodeURIComponent(d.join("~")), e)
            })
        }
            , Ni = function (a) {
            if (A.Promise)
                try {
                    return new Promise(function (b) {
                            Mi(a, function (c, d) {
                                b({
                                    Oc: c,
                                    tk: d
                                })
                            })
                        }
                    )
                } catch (b) {
                }
        }
            , Fi = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
        var Oi = function () {
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.globalConfig = {};
            this.remoteConfig = {};
            this.onSuccess = function () {
            }
            ;
            this.onFailure = function () {
            }
            ;
            this.setContainerTypeLoaded = function () {
            }
            ;
            this.getContainerTypeLoaded = function () {
            }
            ;
            this.eventId = void 0;
            this.isGtmEvent = !1
        }
            , Pi = function (a) {
            var b = new Oi;
            b.eventModel = a;
            return b
        }
            , Qi = function (a, b) {
            a.targetConfig = b;
            return a
        }
            , Ri = function (a, b) {
            a.containerConfig = b;
            return a
        }
            , Si = function (a, b) {
            a.globalConfig = b;
            return a
        }
            , Ti = function (a, b) {
            a.remoteConfig = b;
            return a
        }
            , Ui = function (a, b) {
            a.onSuccess = b;
            return a
        }
            , Vi = function (a, b) {
            a.setContainerTypeLoaded = b;
            return a
        }
            , Wi = function (a, b) {
            a.getContainerTypeLoaded = b;
            return a
        }
            , Xi = function (a, b) {
            a.onFailure = b;
            return a
        };
        Oi.prototype.getWithConfig = function (a) {
            if (void 0 !== this.eventModel[a])
                return this.eventModel[a];
            if (void 0 !== this.targetConfig[a])
                return this.targetConfig[a];
            if (void 0 !== this.containerConfig[a])
                return this.containerConfig[a];
            if (void 0 !== this.globalConfig[a])
                return this.globalConfig[a];
            if (void 0 !== this.remoteConfig[a])
                return this.remoteConfig[a]
        }
        ;
        var Yi = function (a) {
            function b(d) {
                for (var e = Object.keys(d), f = 0; f < e.length; ++f)
                    c[e[f]] = 1
            }

            var c = {};
            b(a.eventModel);
            b(a.targetConfig);
            b(a.containerConfig);
            b(a.globalConfig);
            return Object.keys(c)
        }
            , Zi = function (a, b, c) {
            function d(g) {
                Gc(g) && Oa(g, function (h, l) {
                    f = !0;
                    e[h] = l
                })
            }

            var e = {}
                , f = !1;
            c && 1 !== c || (d(a.remoteConfig[b]),
                d(a.globalConfig[b]),
                d(a.containerConfig[b]),
                d(a.targetConfig[b]));
            c && 2 !== c || d(a.eventModel[b]);
            return f ? e : void 0
        }
            , $i = function (a) {
            var b = [R.nc, R.Mf, R.Nf, R.Of, R.Pf, R.Qf, R.Rf]
                , c = {}
                , d = !1
                , e = function (f) {
                for (var g = 0; g < b.length; g++)
                    void 0 !== f[b[g]] && (c[b[g]] = f[b[g]],
                        d = !0);
                return d
            };
            if (e(a.eventModel) || e(a.targetConfig) || e(a.containerConfig) || e(a.globalConfig))
                return c;
            e(a.remoteConfig);
            return c
        }
            , aj = function (a) {
            var b = [], c;
            for (c in a.eventModel)
                c !== R.Vb && a.eventModel.hasOwnProperty(c) && void 0 !== a.eventModel[c] && b.push(c);
            return b
        };
        var bj, cj = !1;

        function dj() {
            cj = !0;
            bj = bj || {}
        }

        var ej = function (a) {
            cj || dj();
            return bj[a]
        };
        var fj = function (a) {
            if (J.hidden)
                return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !A.getComputedStyle)
                return !0;
            var c = A.getComputedStyle(a, null);
            if ("hidden" === c.visibility)
                return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display)
                    return !0;
                var f = e.opacity
                    , g = e.filter;
                if (g) {
                    var h = g.indexOf("opacity(");
                    0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)),
                    "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
                        f = Math.min(g, f))
                }
                if (void 0 !== f && 0 >= f)
                    return !0;
                (d = d.parentElement) && (e = A.getComputedStyle(d, null))
            }
            return !1
        };
        var gj = function () {
            var a = J.body, b = J.documentElement || a && a.parentElement, c, d;
            if (J.compatMode && "BackCompat" !== J.compatMode)
                c = b ? b.clientHeight : 0,
                    d = b ? b.clientWidth : 0;
            else {
                var e = function (f, g) {
                    return f && g ? Math.min(f, g) : Math.max(f, g)
                };
                Rg(7);
                c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
                d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0)
            }
            return {
                width: d,
                height: c
            }
        }
            , hj = function (a) {
            var b = gj()
                , c = b.height
                , d = b.width
                , e = a.getBoundingClientRect()
                , f = e.bottom - e.top
                , g = e.right - e.left;
            return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0
        };
        var oj = /:[0-9]+$/
            , pj = function (a, b, c, d) {
            for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
                var h = f[g].split("=");
                if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
                    var l = h.slice(1).join("=");
                    if (!c)
                        return d ? l : decodeURIComponent(l).replace(/\+/g, " ");
                    e.push(d ? l : decodeURIComponent(l).replace(/\+/g, " "))
                }
            }
            return c ? e : void 0
        }
            , sj = function (a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b)
                a.protocol = qj(a.protocol) || qj(A.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : A.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || A.location.hostname).replace(oj, "").toLowerCase());
            return rj(a, b, c, d, e)
        }
            , rj = function (a, b, c, d, e) {
            var f, g = qj(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = tj(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(oj, "").toLowerCase();
                    if (c) {
                        var h = /^www\d*\./.exec(f);
                        h && h[0] && (f = f.substr(h[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" == g ? 80 : "https" == g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || Pg("TAGGING", 1);
                    f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var l = f.split("/");
                    0 <= (d || []).indexOf(l[l.length - 1]) && (l[l.length - 1] = "");
                    f = l.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = pj(f, e, !1, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        }
            , qj = function (a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        }
            , tj = function (a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        }
            , uj = function (a) {
            var b = J.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || Pg("TAGGING", 1),
                c = "/" + c);
            var d = b.hostname.replace(oj, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        }
            , vj = function (a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function (p) {
                    return void 0 != p
                }).join("&")
            }

            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" ")
                , e = uj(a)
                , f = a.split(/[?#]/)[0]
                , g = e.search
                , h = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === h[0] && (h = h.substring(1));
            g = c(g);
            h = c(h);
            "" !== g && (g = "?" + g);
            "" !== h && (h = "#" + h);
            var l = "" + f + g + h;
            "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
            return l
        };
        var wj = {};
        var zj = function (a) {
            if (0 == a.length)
                return null;
            var b;
            b = xj(a, function (c) {
                return !yj.test(c.Ka)
            });
            b = xj(b, function (c) {
                return "INPUT" === c.element.tagName.toUpperCase()
            });
            b = xj(b, function (c) {
                return !fj(c.element)
            });
            return b[0]
        }
            , xj = function (a, b) {
            if (1 >= a.length)
                return a;
            var c = a.filter(b);
            return 0 == c.length ? a : c
        }
            , Aj = function (a) {
            var b;
            if (a === J.body)
                b = "body";
            else {
                var c;
                if (a.id)
                    c = "#" + a.id;
                else {
                    var d;
                    if (a.parentElement) {
                        var e;
                        a: {
                            var f = a.parentElement;
                            if (f) {
                                for (var g = 0; g < f.childElementCount; g++)
                                    if (f.children[g] === a) {
                                        e = g + 1;
                                        break a
                                    }
                                e = -1
                            } else
                                e = 1
                        }
                        d = Aj(a.parentElement) + ">:nth-child(" + e + ")"
                    } else
                        d = "";
                    c = d
                }
                b = c
            }
            return b
        }
            , Bj = !0
            , Cj = !1;
        wj.zh = "true";
        var Dj = function (a) {
            if ("false" === wj.zh || !Bj)
                return !1;
            if (Cj)
                return !0;
            var b = ej("AW-" + a);
            return !!b && !!b.preAutoPii
        }
            , Ej = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)
            , Fj = new RegExp(/@(gmail|googlemail)\./i)
            , yj = new RegExp(/support|noreply/i)
            , Gj = "SCRIPT STYLE IMG SVG PATH BR".split(" ")
            , Hj = ["BR"]
            , Ij = {}
            , Jj = function (a) {
            a = a || {
                Od: !0,
                Pd: !0
            };
            a.lb = a.lb || {
                email: !0,
                phone: !0,
                Ag: !0
            };
            var b, c = a, d = !!c.Od + "." + !!c.Pd;
            c && c.Ec && c.Ec.length && (d += "." + c.Ec.join("."));
            c && c.lb && (d += "." + c.lb.email + "." + c.lb.phone + "." + c.lb.Ag);
            b = d;
            var e = Ij[b];
            if (e && 200 > Za() - e.timestamp)
                return e.result;
            var f;
            var g = []
                , h = J.body;
            if (h) {
                for (var l = h.querySelectorAll("*"), n = 0; n < l.length && 1E4 > n; n++) {
                    var p = l[n];
                    if (!(0 <= Gj.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
                        for (var r = !1, t = 0; t < p.childElementCount && 1E4 > t; t++)
                            if (!(0 <= Hj.indexOf(p.children[t].tagName.toUpperCase()))) {
                                r = !0;
                                break
                            }
                        r || g.push(p)
                    }
                }
                f = {
                    elements: g,
                    status: 1E4 < l.length ? "2" : "1"
                }
            } else
                f = {
                    elements: g,
                    status: "4"
                };
            var u = f, q = u.status, v;
            if (a.lb && a.lb.email) {
                for (var w = u.elements, y = [], x = 0; x < w.length; x++) {
                    var z = w[x]
                        , B = z.textContent;
                    "INPUT" === z.tagName.toUpperCase() && z.value && (B = z.value);
                    if (B) {
                        var C = B.match(Ej);
                        if (C) {
                            var F = C[0], D;
                            if (A.location) {
                                var E = rj(A.location, "host", !0);
                                D = 0 <= F.toLowerCase().indexOf(E)
                            } else
                                D = !1;
                            D || y.push({
                                element: z,
                                Ka: F
                            })
                        }
                    }
                }
                var M;
                var N = a && a.Ec;
                if (N && 0 !== N.length) {
                    for (var O = [], L = 0; L < y.length; L++) {
                        for (var P = !0, H = 0; H < N.length; H++) {
                            var ba = N[H];
                            if (ba && si(y[L].element, ba)) {
                                P = !1;
                                break
                            }
                        }
                        P && O.push(y[L])
                    }
                    M = O
                } else
                    M = y;
                v = zj(M);
                10 < y.length && (q = "3")
            }
            var X = [];
            if (v) {
                var fa = v.element
                    , xa = {
                    Ka: v.Ka,
                    tagName: fa.tagName,
                    type: 1
                };
                a.Od && (xa.querySelector = Aj(fa));
                a.Pd && (xa.isVisible = !fj(fa));
                X.push(xa)
            }
            var V = {
                elements: X,
                status: q
            };
            Ij[b] = {
                timestamp: Za(),
                result: V
            };
            return V
        }
            , Kj = function (a) {
            return a.tagName + ":" + a.isVisible + ":" + a.Ka.length + ":" + Fj.test(a.Ka)
        };
        var Lj = function (a, b, c) {
            if (c) {
                var d = c.selector_type, e = String(c.value), f;
                if ("js_variable" === d) {
                    e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                    for (var g = e.split(","), h = 0; h < g.length; h++) {
                        var l = g[h].trim();
                        if (l) {
                            if (0 === l.indexOf("dataLayer."))
                                f = kh(l.substring(10));
                            else {
                                var n = l.split(".");
                                f = A[n.shift()];
                                for (var p = 0; p < n.length; p++)
                                    f = f && f[n[p]]
                            }
                            if (void 0 !== f)
                                break
                        }
                    }
                } else if ("css_selector" === d && qi) {
                    var r = ri(e);
                    r && 0 < r.length && (f = hc(r[0]) || Va(r[0].value))
                }
                f && (a[b] = f)
            }
        }
            , Mj = function (a) {
            if (a) {
                var b = {};
                Lj(b, "email", a.email);
                Lj(b, "phone_number", a.phone);
                b.address = [];
                for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
                    var e = {};
                    Lj(e, "first_name", c[d].first_name);
                    Lj(e, "last_name", c[d].last_name);
                    Lj(e, "street", c[d].street);
                    Lj(e, "city", c[d].city);
                    Lj(e, "region", c[d].region);
                    Lj(e, "country", c[d].country);
                    Lj(e, "postal_code", c[d].postal_code);
                    b.address.push(e)
                }
                return b
            }
        }
            , Nj = function (a) {
            if (a)
                switch (a.mode) {
                    case "selectors":
                        return Mj(a.selectors);
                    case "auto_detect":
                        var b;
                        var c = a.auto_detect;
                        if (c) {
                            var d = Jj({
                                Od: !1,
                                Pd: !1,
                                Ec: c.exclude_element_selectors,
                                lb: {
                                    email: !!c.email,
                                    phone: !!c.phone,
                                    Ag: !!c.address
                                }
                            }).elements
                                , e = {};
                            if (0 < d.length)
                                for (var f = 0; f < d.length; f++) {
                                    var g = d[f];
                                    if (1 === g.type) {
                                        e.email = g.Ka;
                                        break
                                    }
                                }
                            b = e
                        } else
                            b = void 0;
                        return b
                }
        }
            , Oj = function (a) {
            switch (a.enhanced_conversions_mode) {
                case "manual":
                    var b = a.enhanced_conversions_manual_var;
                    return void 0 !== b ? b : A.enhanced_conversion_data;
                case "automatic":
                    return Mj(a[R.Wf])
            }
        };
        var Pj = {}
            , Qj = function (a, b) {
            if (A._gtmexpgrp && A._gtmexpgrp.hasOwnProperty(a))
                return A._gtmexpgrp[a];
            void 0 === Pj[a] && (Pj[a] = Math.floor(Math.random() * b));
            return Pj[a]
        };
        var Rj = function (a) {
            var b = 1, c, d, e;
            if (a)
                for (b = 0,
                         d = a.length - 1; 0 <= d; d--)
                    e = a.charCodeAt(d),
                        b = (b << 6 & 268435455) + e + (e << 14),
                        c = b & 266338304,
                        b = 0 != c ? b ^ c >> 21 : b;
            return b
        };
        var Sj = function (a, b, c) {
            for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
                var g = e[f].split("=")
                    , h = g[0].replace(/^\s*|\s*$/g, "");
                if (h && h == a) {
                    var l = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                    l && c && (l = decodeURIComponent(l));
                    d.push(l)
                }
            }
            return d
        };

        function Tj(a) {
            return "null" !== a.origin
        }
        ;var Wj = function (a, b, c, d) {
            return Uj(d) ? Sj(a, String(b || Vj()), c) : []
        }
            , Zj = function (a, b, c, d, e) {
                if (Uj(e)) {
                    var f = Xj(a, d, e);
                    if (1 === f.length)
                        return f[0].id;
                    if (0 !== f.length) {
                        f = Yj(f, function (g) {
                            return g.Gd
                        }, b);
                        if (1 === f.length)
                            return f[0].id;
                        f = Yj(f, function (g) {
                            return g.Pc
                        }, c);
                        return f[0] ? f[0].id : void 0
                    }
                }
            };

        function ak(a, b, c, d) {
            var e = Vj()
                , f = window;
            Tj(f) && (f.document.cookie = a);
            var g = Vj();
            return e != g || void 0 != c && 0 <= Wj(b, g, !1, d).indexOf(c)
        }

        var ek = function (a, b, c, d) {
            function e(w, y, x) {
                if (null == x)
                    return delete h[y],
                        w;
                h[y] = x;
                return w + "; " + y + "=" + x
            }

            function f(w, y) {
                if (null == y)
                    return delete h[y],
                        w;
                h[y] = !0;
                return w + "; " + y
            }

            if (!Uj(c.Ja))
                return 2;
            var g;
            void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)),
                b = bk(b),
                g = a + "=" + b);
            var h = {};
            g = e(g, "path", c.path);
            var l;
            c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
            g = e(g, "expires", l);
            g = e(g, "max-age", c.xj);
            g = e(g, "samesite", c.Pj);
            c.Rj && (g = f(g, "secure"));
            var n = c.domain;
            if (n && "auto" === n.toLowerCase()) {
                for (var p = ck(), r = void 0, t = !1, u = 0; u < p.length; ++u) {
                    var q = "none" !== p[u] ? p[u] : void 0
                        , v = e(g, "domain", q);
                    v = f(v, c.flags);
                    try {
                        d && d(a, h)
                    } catch (w) {
                        r = w;
                        continue
                    }
                    t = !0;
                    if (!dk(q, c.path) && ak(v, a, b, c.Ja))
                        return 0
                }
                if (r && !t)
                    throw r;
                return 1
            }
            n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
            g = f(g, c.flags);
            d && d(a, h);
            return dk(n, c.path) ? 1 : ak(g, a, b, c.Ja) ? 0 : 1
        }
            , fk = function (a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return ek(a, b, c)
        };

        function Yj(a, b, c) {
            for (var d = [], e = [], f, g = 0; g < a.length; g++) {
                var h = a[g]
                    , l = b(h);
                l === c ? d.push(h) : void 0 === f || l < f ? (e = [h],
                    f = l) : l === f && e.push(h)
            }
            return 0 < d.length ? d : e
        }

        function Xj(a, b, c) {
            for (var d = [], e = Wj(a, void 0, void 0, c), f = 0; f < e.length; f++) {
                var g = e[f].split(".")
                    , h = g.shift();
                if (!b || -1 !== b.indexOf(h)) {
                    var l = g.shift();
                    l && (l = l.split("-"),
                        d.push({
                            id: g.join("."),
                            Gd: 1 * l[0] || 1,
                            Pc: 1 * l[1] || 1
                        }))
                }
            }
            return d
        }

        var bk = function (a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        }
            , gk = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/
            , hk = /(^|\.)doubleclick\.net$/i
            , dk = function (a, b) {
            return hk.test(window.document.location.hostname) || "/" === b && gk.test(a)
        }
            , Vj = function () {
            return Tj(window) ? window.document.cookie : ""
        }
            , ck = function () {
            var a = []
                , b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c)
                    return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--)
                a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            hk.test(e) || gk.test(e) || a.push("none");
            return a
        }
            , Uj = function (a) {
            if (!Nh(Eh) || !a || !Yh())
                return !0;
            if (!Xh(a))
                return !1;
            var b = Vh(a);
            return null == b ? !0 : !!b
        };
        var ik = function (a) {
            var b = Math.round(2147483647 * Math.random())
                , c = b;
            a && (c = b ^ Rj(a) & 2147483647);
            return [c, Math.round(Za() / 1E3)].join(".")
        }
            , lk = function (a, b, c, d, e) {
            var f = jk(b);
            return Zj(a, f, kk(c), d, e)
        }
            , mk = function (a, b, c, d) {
            var e = "" + jk(c)
                , f = kk(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        }
            , jk = function (a) {
            if (!a)
                return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        }
            , kk = function (a) {
            if (!a || "/" === a)
                return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1
        };

        function nk(a, b, c) {
            var d, e = Number(null != a.mb ? a.mb : void 0);
            0 !== e && (d = new Date((b || Za()) + 1E3 * (e || 7776E3)));
            return {
                path: a.path,
                domain: a.domain,
                flags: a.flags,
                encode: !!c,
                expires: d
            }
        }
        ;var ok = ["1"]
            , pk = {}
            , sk = function (a, b) {
                b = void 0 === b ? !0 : b;
                var c = qk(a.prefix);
                if (!pk[c] && !rk(c, a.path, a.domain) && b) {
                    var d = qk(a.prefix)
                        , e = ik()
                        , f = mk(e, "1", a.domain, a.path)
                        , g = nk(a, void 0);
                    g.Ja = "ad_storage";
                    if (0 === fk(d, f, g)) {
                        var h = Wb("google_tag_data", {});
                        h._gcl_au ? Pg("GTM", 57) : h._gcl_au = e
                    }
                    rk(c, a.path, a.domain)
                }
            };

        function rk(a, b, c) {
            var d = lk(a, b, c, ok, "ad_storage");
            if (!d)
                return !1;
            var e = d.split(".");
            5 === e.length ? (pk[a] = e.slice(0, 2).join("."),
                e.slice(2, 4).join(".")) : 3 === e.length ? e.slice(0, 2).join(".") : pk[a] = d;
            return !0
        }

        function qk(a) {
            return (a || "_gcl") + "_au"
        }
        ;var tk = function (a) {
            for (var b = [], c = J.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
                var f = c[e].match(d);
                f && b.push({
                    Af: f[1],
                    value: f[2],
                    timestamp: Number(f[2].split(".")[1]) || 0
                })
            }
            b.sort(function (g, h) {
                return h.timestamp - g.timestamp
            });
            return b
        };

        function uk(a, b) {
            var c = tk(a)
                , d = {};
            if (!c || !c.length)
                return d;
            for (var e = 0; e < c.length; e++) {
                var f = c[e].value.split(".");
                if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                    d[c[e].Af] || (d[c[e].Af] = []);
                    var g = {
                        version: f[0],
                        timestamp: 1E3 * Number(f[1]),
                        va: f[2]
                    };
                    b && 3 < f.length && (g.labels = f.slice(3));
                    d[c[e].Af].push(g)
                }
            }
            return d
        }
        ;

        function vk() {
            for (var a = wk, b = {}, c = 0; c < a.length; ++c)
                b[a[c]] = c;
            return b
        }

        function xk() {
            var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            a += a.toLowerCase() + "0123456789-_";
            return a + "."
        }

        var wk, yk;

        function zk(a) {
            wk = wk || xk();
            yk = yk || vk();
            for (var b = [], c = 0; c < a.length; c += 3) {
                var d = c + 1 < a.length
                    , e = c + 2 < a.length
                    , f = a.charCodeAt(c)
                    , g = d ? a.charCodeAt(c + 1) : 0
                    , h = e ? a.charCodeAt(c + 2) : 0
                    , l = f >> 2
                    , n = (f & 3) << 4 | g >> 4
                    , p = (g & 15) << 2 | h >> 6
                    , r = h & 63;
                e || (r = 64,
                d || (p = 64));
                b.push(wk[l], wk[n], wk[p], wk[r])
            }
            return b.join("")
        }

        function Ak(a) {
            function b(l) {
                for (; d < a.length;) {
                    var n = a.charAt(d++)
                        , p = yk[n];
                    if (null != p)
                        return p;
                    if (!/^[\s\xa0]*$/.test(n))
                        throw Error("Unknown base64 encoding at char: " + n);
                }
                return l
            }

            wk = wk || xk();
            yk = yk || vk();
            for (var c = "", d = 0; ;) {
                var e = b(-1)
                    , f = b(0)
                    , g = b(64)
                    , h = b(64);
                if (64 === h && -1 === e)
                    return c;
                c += String.fromCharCode(e << 2 | f >> 4);
                64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2),
                64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
            }
        }
        ;var Bk;
        var Ck = {
            dk: 0,
            nk: 1,
            hk: 2,
            gk: 3
        }
            , Dk = void 0
            , Hk = function () {
            var a = Ek
                , b = Fk
                , c = Gk()
                , d = function (g) {
                a(g.target || g.srcElement || {})
            }
                , e = function (g) {
                b(g.target || g.srcElement || {})
            };
            if (!c.init) {
                dc(J, "mousedown", d);
                dc(J, "keyup", d);
                dc(J, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function () {
                    b(this);
                    f.call(this)
                }
                ;
                c.init = !0
            }
        }
            , Ik = function (a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            Gk().decorators.push(f)
        }
            , Jk = function (a, b, c) {
            for (var d = Gk().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g = d[f], h;
                if (h = !c || g.forms)
                    a: {
                        var l = g.domains
                            , n = a
                            , p = !!g.sameHost;
                        if (l && (p || n !== J.location.hostname))
                            for (var r = 0; r < l.length; r++)
                                if (l[r] instanceof RegExp) {
                                    if (l[r].test(n)) {
                                        h = !0;
                                        break a
                                    }
                                } else if (0 <= n.indexOf(l[r]) || p && 0 <= l[r].indexOf(n)) {
                                    h = !0;
                                    break a
                                }
                        h = !1
                    }
                if (h) {
                    var t = g.placement;
                    void 0 == t && (t = g.fragment ? 2 : 1);
                    t === b && db(e, g.callback())
                }
            }
            return e
        };

        function Gk() {
            var a = Wb("google_tag_data", {})
                , b = a.gl;
            b && b.decorators || (b = {
                decorators: []
            },
                a.gl = b);
            return b
        }
        ;var Kk = /(.*?)\*(.*?)\*(.*)/
            , Lk = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/
            , Mk = /^(?:www\.|m\.|amp\.)+/
            , Nk = /\*?xp_[0-3]\*?/
            , Ok = /([^?#]+)(\?[^#]*)?(#.*)?/;

        function Pk(a) {
            return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
        }

        var Sk = function (a, b) {
            var c = [], d;
            for (d in a)
                if (a.hasOwnProperty(d)) {
                    var e = a[d];
                    void 0 !== e && e === e && null !== e && "[object Object]" !== e.toString() && (c.push(d),
                        c.push(zk(String(e))))
                }
            var f = c.join("*");
            if (void 0 !== b) {
                var g = "xp_" + b
                    , h = Qk[b](f);
                f = [f, g, zk(String(h))].join("*")
            }
            return ["1", Rk(f), f].join("*")
        };

        function Rk(a, b) {
            var c = [A.navigator.userAgent, (new Date).getTimezoneOffset(), Ub.userLanguage || Ub.language, Math.floor(Za() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
                d;
            if (!(d = Bk)) {
                for (var e = Array(256), f = 0; 256 > f; f++) {
                    for (var g = f, h = 0; 8 > h; h++)
                        g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                    e[f] = g
                }
                d = e
            }
            Bk = d;
            for (var l = 4294967295, n = 0; n < c.length; n++)
                l = l >>> 8 ^ Bk[(l ^ c.charCodeAt(n)) & 255];
            return ((l ^ -1) >>> 0).toString(36)
        }

        var Tk = {}
            , Qk = (Tk[1] = Uk,
            Tk[2] = Vk,
            Tk[3] = Wk,
            Tk);

        function Uk() {
            return "CHECKSUM_EXP_DISABLED"
        }

        function Vk() {
            return "CHECKSUM_EXP_DISABLED"
        }

        function Xk() {
            Ub.userAgentData && Ub.userAgentData.getHighEntropyValues(["architecture", "model", "bitness", "platformVersion", "uaFullVersion"]).then(function () {
            })
        }

        function Wk() {
            return "CHECKSUM_EXP_DISABLED"
        }

        function Yk() {
            return function (a) {
                var b = uj(A.location.href)
                    , c = b.search.replace("?", "")
                    , d = pj(c, "_gl", !1, !0) || "";
                a.query = Zk(d) || {};
                var e = sj(b, "fragment").match(Pk("_gl"));
                a.fragment = Zk(e && e[3] || "") || {}
            }
        }

        var $k = function (a) {
            var b = Yk()
                , c = Gk();
            c.data || (c.data = {
                query: {},
                fragment: {}
            },
                b(c.data));
            var d = {}
                , e = c.data;
            e && (db(d, e.query),
            a && db(d, e.fragment));
            return d
        }
            , Zk = function (a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a: {
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var f = Kk.exec(d);
                            if (f) {
                                c = f;
                                break a
                            }
                            d = decodeURIComponent(d)
                        }
                        c = void 0
                    }
                    var g = c;
                    if (g && "1" === g[1]) {
                        var h = g[2], l = g[3], n = null !== l.match(Nk), p;
                        a: {
                            for (var r = 0; r < b; ++r)
                                if (h === Rk(l, r)) {
                                    p = !0;
                                    break a
                                }
                            p = !1
                        }
                        var t = p;
                        if (t || n) {
                            for (var u = {}, q = l ? l.split("*") : [], v = 0; v + 1 < q.length; v += 2) {
                                var w = q[v]
                                    , y = null !== w.match(Nk);
                                if (t || y) {
                                    var x = Ak(q[v + 1]);
                                    u[w] = x
                                }
                                if (y) {
                                    var z = w.split("_")[1];
                                    if (!(Number(z) < Object.keys(Ck).length))
                                        return;
                                    var B = b, C = u[w], F = l.slice(0, l.indexOf("*xp")), D;
                                    a: {
                                        var E = C
                                            , M = F
                                            , N = B;
                                        if ("undefined" !== E && "UA_DATA_NOT_PRESENT" !== E && "UACH_ACCESSED_TOO_EARLY" !== E)
                                            for (var O = 0; O < N; ++O)
                                                if (E === Qk[z](M, O)) {
                                                    D = !0;
                                                    break a
                                                }
                                        D = !1
                                    }
                                    u._z = "uaxp." + (t ? D === t ? "" + z + 0 : "" + z + 3 : D === t ? "" + z + 1 : "" + z + 2)
                                }
                            }
                            return u
                        }
                    }
                }
            } catch (L) {
            }
        };

        function al(a, b, c, d) {
            function e(p) {
                var r = p
                    , t = Pk(a).exec(r)
                    , u = r;
                if (t) {
                    var q = t[2]
                        , v = t[4];
                    u = t[1];
                    v && (u = u + q + v)
                }
                p = u;
                var w = p.charAt(p.length - 1);
                p && "&" !== w && (p += "&");
                return p + n
            }

            d = void 0 === d ? !1 : d;
            var f = Ok.exec(c);
            if (!f)
                return "";
            var g = f[1]
                , h = f[2] || ""
                , l = f[3] || ""
                , n = a + "=" + b;
            d ? l = "#" + e(l.substring(1)) : h = "?" + e(h.substring(1));
            return "" + g + h + l
        }

        function bl(a, b) {
            var c = "FORM" === (a.tagName || "").toUpperCase()
                , d = Jk(b, 1, c)
                , e = Jk(b, 2, c)
                , f = Jk(b, 3, c)
                , g = Dk;
            if (fb(d)) {
                var h = Sk(d, g);
                c ? cl("_gl", h, a) : dl("_gl", h, a, !1)
            }
            if (!c && fb(e)) {
                var l = Sk(e);
                dl("_gl", l, a, !0)
            }
            for (var n in f)
                if (f.hasOwnProperty(n))
                    a: {
                        var p = n
                            , r = f[n]
                            , t = a;
                        if (t.tagName) {
                            if ("a" === t.tagName.toLowerCase()) {
                                dl(p, r, t, void 0);
                                break a
                            }
                            if ("form" === t.tagName.toLowerCase()) {
                                cl(p, r, t);
                                break a
                            }
                        }
                        "string" == typeof t && al(p, r, t, void 0)
                    }
        }

        function dl(a, b, c, d) {
            if (c.href) {
                var e = al(a, b, c.href, void 0 === d ? !1 : d);
                Fb.test(e) && (c.href = e)
            }
        }

        function cl(a, b, c) {
            if (c && c.action) {
                var d = (c.method || "").toLowerCase();
                if ("get" === d) {
                    for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                        var h = e[g];
                        if (h.name === a) {
                            h.setAttribute("value", b);
                            f = !0;
                            break
                        }
                    }
                    if (!f) {
                        var l = J.createElement("input");
                        l.setAttribute("type", "hidden");
                        l.setAttribute("name", a);
                        l.setAttribute("value", b);
                        c.appendChild(l)
                    }
                } else if ("post" === d) {
                    var n = al(a, b, c.action);
                    Fb.test(n) && (c.action = n)
                }
            }
        }

        function Ek(a) {
            try {
                var b;
                a: {
                    for (var c = a, d = 100; c && 0 < d;) {
                        if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                            b = c;
                            break a
                        }
                        c = c.parentNode;
                        d--
                    }
                    b = null
                }
                var e = b;
                if (e) {
                    var f = e.protocol;
                    "http:" !== f && "https:" !== f || bl(e, e.hostname)
                }
            } catch (g) {
            }
        }

        function Fk(a) {
            try {
                if (a.action) {
                    var b = sj(uj(a.action), "host");
                    bl(a, b)
                }
            } catch (c) {
            }
        }

        var el = function (a, b, c, d, e) {
            Hk();
            void 0 !== e && (Dk = e);
            3 === e && Xk();
            Ik(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        }
            , fl = function (a, b) {
            Hk();
            Ik(a, [rj(A.location, "host", !0)], b, !0, !0)
        }
            , gl = function () {
            var a = J.location.hostname
                , b = Lk.exec(J.referrer);
            if (!b)
                return !1;
            var c = b[2]
                , d = b[1]
                , e = "";
            if (c) {
                var f = c.split("/")
                    , g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--"))
                    return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var h = a.replace(Mk, ""), l = e.replace(Mk, ""), n;
            if (!(n = h === l)) {
                var p = "." + l;
                n = h.substring(h.length - p.length, h.length) === p
            }
            return n
        }
            , hl = function (a, b) {
            return !1 === a ? !1 : a || b || gl()
        };
        var il = {};
        var jl = /^\w+$/
            , kl = /^[\w-]+$/
            , ll = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        }
            , ml = function () {
            if (!Nh(Eh) || !Yh())
                return !0;
            var a = Vh("ad_storage");
            return null == a ? !0 : !!a
        }
            , nl = function (a, b) {
            Xh("ad_storage") ? ml() ? a() : ci(a, "ad_storage") : b ? Pg("TAGGING", 3) : bi(function () {
                nl(a, !0)
            }, ["ad_storage"])
        }
            , pl = function (a) {
            return ol(a).map(function (b) {
                return b.va
            })
        }
            , ol = function (a) {
            var b = [];
            if (!Tj(A) || !J.cookie)
                return b;
            var c = Wj(a, J.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length)
                return b;
            for (var d = {}, e = 0; e < c.length; d = {
                Zc: d.Zc
            },
                e++) {
                var f = ql(c[e]);
                if (null != f) {
                    var g = f
                        , h = g.version;
                    d.Zc = g.va;
                    var l = g.timestamp
                        , n = g.labels
                        , p = Ja(b, function (r) {
                        return function (t) {
                            return t.va === r.Zc
                        }
                    }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, l),
                        p.labels = rl(p.labels, n || [])) : b.push({
                        version: h,
                        va: d.Zc,
                        timestamp: l,
                        labels: n
                    })
                }
            }
            b.sort(function (r, t) {
                return t.timestamp - r.timestamp
            });
            return sl(b)
        };

        function rl(a, b) {
            for (var c = {}, d = [], e = 0; e < a.length; e++)
                c[a[e]] = !0,
                    d.push(a[e]);
            for (var f = 0; f < b.length; f++)
                c[b[f]] || d.push(b[f]);
            return d
        }

        function tl(a) {
            return a && "string" == typeof a && a.match(jl) ? a : "_gcl"
        }

        var vl = function () {
            var a = uj(A.location.href)
                , b = sj(a, "query", !1, void 0, "gclid")
                , c = sj(a, "query", !1, void 0, "gclsrc")
                , d = sj(a, "query", !1, void 0, "wbraid")
                , e = sj(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || pj(f, "gclid", !1, void 0);
                c = c || pj(f, "gclsrc", !1, void 0);
                d = d || pj(f, "wbraid", !1, void 0)
            }
            return ul(b, c, e, d)
        }
            , ul = function (a, b, c, d) {
            var e = {}
                , f = function (g, h) {
                e[h] || (e[h] = []);
                e[h].push(g)
            };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && kl.test(d) && (e.gbraid = d,
                f(d, "gb"));
            if (void 0 !== a && a.match(kl))
                switch (b) {
                    case void 0:
                        f(a, "aw");
                        break;
                    case "aw.ds":
                        f(a, "aw");
                        f(a, "dc");
                        break;
                    case "ds":
                        f(a, "dc");
                        break;
                    case "3p.ds":
                        f(a, "dc");
                        break;
                    case "gf":
                        f(a, "gf");
                        break;
                    case "ha":
                        f(a, "ha")
                }
            c && f(c, "dc");
            return e
        }
            , xl = function (a) {
            var b = vl();
            nl(function () {
                wl(b, !1, a)
            })
        };

        function wl(a, b, c, d, e) {
            function f(w, y) {
                var x = yl(w, g);
                x && (fk(x, y, h),
                    l = !0)
            }

            c = c || {};
            e = e || [];
            var g = tl(c.prefix);
            d = d || Za();
            var h = nk(c, d, !0);
            h.Ja = "ad_storage";
            var l = !1
                , n = Math.round(d / 1E3)
                , p = function (w) {
                var y = ["GCL", n, w];
                0 < e.length && y.push(e.join("."));
                return y.join(".")
            };
            a.aw && f("aw", p(a.aw[0]));
            a.dc && f("dc", p(a.dc[0]));
            a.gf && f("gf", p(a.gf[0]));
            a.ha && f("ha", p(a.ha[0]));
            a.gp && f("gp", p(a.gp[0]));
            if ((void 0 == il.enable_gbraid_cookie_write ? 0 : il.enable_gbraid_cookie_write) && !l && a.gb) {
                var r = a.gb[0]
                    , t = yl("gb", g)
                    , u = !1;
                if (!b)
                    for (var q = ol(t), v = 0; v < q.length; v++)
                        q[v].va === r && q[v].labels && 0 < q[v].labels.length && (u = !0);
                u || f("gb", p(r))
            }
        }

        var Al = function (a, b) {
            var c = $k(!0);
            nl(function () {
                for (var d = tl(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== ll[f]) {
                        var g = yl(f, d)
                            , h = c[g];
                        if (h) {
                            var l = Math.min(zl(h), Za()), n;
                            b: {
                                var p = l;
                                if (Tj(A))
                                    for (var r = Wj(g, J.cookie, void 0, "ad_storage"), t = 0; t < r.length; ++t)
                                        if (zl(r[t]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var u = nk(b, l, !0);
                                u.Ja = "ad_storage";
                                fk(g, h, u)
                            }
                        }
                    }
                }
                wl(ul(c.gclid, c.gclsrc), !1, b)
            })
        }
            , yl = function (a, b) {
            var c = ll[a];
            if (void 0 !== c)
                return b + c
        }
            , zl = function (a) {
            return 0 !== Bl(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
        };

        function ql(a) {
            var b = Bl(a.split("."));
            return 0 === b.length ? null : {
                version: b[0],
                va: b[2],
                timestamp: 1E3 * (Number(b[1]) || 0),
                labels: b.slice(3)
            }
        }

        function Bl(a) {
            return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !kl.test(a[2]) ? [] : a
        }

        var Cl = function (a, b, c, d, e) {
            if (Ia(b) && Tj(A)) {
                var f = tl(e)
                    , g = function () {
                    for (var h = {}, l = 0; l < a.length; ++l) {
                        var n = yl(a[l], f);
                        if (n) {
                            var p = Wj(n, J.cookie, void 0, "ad_storage");
                            p.length && (h[n] = p.sort()[p.length - 1])
                        }
                    }
                    return h
                };
                nl(function () {
                    el(g, b, c, d)
                })
            }
        }
            , sl = function (a) {
            return a.filter(function (b) {
                return kl.test(b.va)
            })
        }
            , Dl = function (a, b) {
            if (Tj(A)) {
                for (var c = tl(b.prefix), d = {}, e = 0; e < a.length; e++)
                    ll[a[e]] && (d[a[e]] = ll[a[e]]);
                nl(function () {
                    Oa(d, function (f, g) {
                        var h = Wj(c + g, J.cookie, void 0, "ad_storage");
                        h.sort(function (u, q) {
                            return zl(q) - zl(u)
                        });
                        if (h.length) {
                            var l = h[0], n = zl(l), p = 0 !== Bl(l.split(".")).length ? l.split(".").slice(3) : [],
                                r = {}, t;
                            t = 0 !== Bl(l.split(".")).length ? l.split(".")[2] : void 0;
                            r[f] = [t];
                            wl(r, !0, b, n, p)
                        }
                    })
                })
            }
        };

        function El(a, b) {
            for (var c = 0; c < b.length; ++c)
                if (a[b[c]])
                    return !0;
            return !1
        }

        var Fl = function (a) {
            function b(e, f, g) {
                g && (e[f] = g)
            }

            if (Yh()) {
                var c = vl();
                if (El(c, a)) {
                    var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.gbraid);
                    fl(function () {
                        return d
                    }, 3);
                    fl(function () {
                        var e = {};
                        return e._up = "1",
                            e
                    }, 1)
                }
            }
        };

        function Gl(a, b) {
            var c = tl(b)
                , d = yl(a, c);
            if (!d)
                return 0;
            for (var e = ol(d), f = 0, g = 0; g < e.length; g++)
                f = Math.max(f, e[g].timestamp);
            return f
        }

        function Hl(a) {
            var b = 0, c;
            for (c in a)
                for (var d = a[c], e = 0; e < d.length; e++)
                    b = Math.max(b, Number(d[e].timestamp));
            return b
        }
        ;var bm = !1
            , cm = 0
            , dm = [];

        function em(a) {
            if (!bm) {
                var b = J.createEventObject
                    , c = "complete" == J.readyState
                    , d = "interactive" == J.readyState;
                if (!a || "readystatechange" != a.type || c || !b && d) {
                    bm = !0;
                    for (var e = 0; e < dm.length; e++)
                        K(dm[e])
                }
                dm.push = function () {
                    for (var f = 0; f < arguments.length; f++)
                        K(arguments[f]);
                    return 0
                }
            }
        }

        function fm() {
            if (!bm && 140 > cm) {
                cm++;
                try {
                    J.documentElement.doScroll("left"),
                        em()
                } catch (a) {
                    A.setTimeout(fm, 50)
                }
            }
        }

        var gm = function (a) {
            bm ? a() : dm.push(a)
        };
        var im = function (a, b) {
            this.g = !1;
            this.C = [];
            this.F = {
                tags: []
            };
            this.N = !1;
            this.o = this.s = 0;
            hm(this, a, b)
        }
            , jm = function (a, b, c, d) {
            if (Ug.hasOwnProperty(b) || "__zone" === b)
                return -1;
            var e = {};
            Gc(d) && (e = Hc(d, e));
            e.id = c;
            e.status = "timeout";
            return a.F.tags.push(e) - 1
        }
            , km = function (a, b, c, d) {
            var e = a.F.tags[b];
            e && (e.status = c,
                e.executionTime = d)
        }
            , lm = function (a) {
            if (!a.g) {
                for (var b = a.C, c = 0; c < b.length; c++)
                    b[c]();
                a.g = !0;
                a.C.length = 0
            }
        }
            , hm = function (a, b, c) {
            Ga(b) && a.zc(b);
            c && A.setTimeout(function () {
                return lm(a)
            }, Number(c))
        };
        im.prototype.zc = function (a) {
            var b = this
                , c = cb(function () {
                return K(function () {
                    a(qf.J, b.F)
                })
            });
            this.g ? c() : this.C.push(c)
        }
        ;
        var mm = function (a) {
            a.s++;
            return cb(function () {
                a.o++;
                a.N && a.o >= a.s && lm(a)
            })
        };
        var nm = function () {
            function a(d) {
                return !Ha(d) || 0 > d ? 0 : d
            }

            if (!S._li && A.performance && A.performance.timing) {
                var b = A.performance.timing.navigationStart
                    , c = Ha(lh.get("gtm.start")) ? lh.get("gtm.start") : 0;
                S._li = {
                    cst: a(c - b),
                    cbt: a($g - b)
                }
            }
        }
            , om = function (a) {
            A.performance && A.performance.mark(qf.J + "_" + a + "_start")
        }
            , pm = function (a) {
            if (A.performance) {
                var b = qf.J + "_" + a + "_start"
                    , c = qf.J + "_" + a + "_duration";
                A.performance.measure(c, b);
                var d = A.performance.getEntriesByName(c)[0];
                A.performance.clearMarks(b);
                A.performance.clearMeasures(c);
                var e = S._p || {};
                void 0 === e[a] && (e[a] = d.duration,
                    S._p = e);
                return d.duration
            }
        }
            , qm = function () {
            if (A.performance && A.performance.now) {
                var a = S._p || {};
                a.PAGEVIEW = A.performance.now();
                S._p = a
            }
        };
        var rm = {}
            , sm = function () {
            return A.GoogleAnalyticsObject && A[A.GoogleAnalyticsObject]
        }
            , tm = !1;

        function xm() {
            return A.GoogleAnalyticsObject || "ga"
        }

        var ym = function (a) {
        }
            , zm = function (a, b) {
            return function () {
                var c = sm()
                    , d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function (f) {
                        var g = f.get("hitPayload")
                            , h = f.get("hitCallback")
                            , l = 0 > g.indexOf("&tid=" + b);
                        l && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0),
                            f.set("hitCallback", void 0, !0));
                        e(f);
                        l && (f.set("hitPayload", g, !0),
                            f.set("hitCallback", h, !0),
                            f.set("_x_19", void 0, !0),
                            e(f))
                    })
                }
            }
        };
        var Gm = function (a) {
        }, Km = function (a) {
        }, Lm = function () {
            return "&tc=" + Te.filter(function (a) {
                return a
            }).length
        }, Om = function () {
            2022 <= Mm().length && Nm()
        }, Pm = function (a) {
            return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*"
        }, Rm = function () {
            Qm || (Qm = A.setTimeout(Nm, 500))
        }, Nm = function () {
            Qm && (A.clearTimeout(Qm),
                Qm = void 0);
            void 0 === Sm || Tm[Sm] && !Um && !Vm || (Wm[Sm] || Xm.oj() || 0 >= Ym-- ? (Rg(1),
                Wm[Sm] = !0) : (Xm.Kj(),
                cc(Mm(!0)),
                Tm[Sm] = !0,
                Zm = $m = an = Vm = Um = ""))
        }, Mm = function (a) {
            var b = Sm;
            if (void 0 === b)
                return "";
            var c = Qg("GTM")
                , d = Qg("TAGGING");
            return [bn, Tm[b] ? "" : "&es=1", cn[b], Gm(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", Lm(), Um, Vm, an, $m, Km(a), Zm, "&z=0"].join("")
        }, en = function () {
            bn = dn()
        }, dn = function () {
            return [ah, "&v=3&t=t", "&pid=" + Ka(), "&rv=" + qf.xd].join("")
        }, Jm = ["L", "S", "Y"], Fm = ["S", "E"], fn = {
            sampleRate: "0.005000",
            vh: "",
            uh: Number("5")
        }, gn = 0 <= J.location.search.indexOf("?gtm_latency=") || 0 <= J.location.search.indexOf("&gtm_latency="), hn;
        if (!(hn = gn)) {
            var jn = Math.random()
                , kn = fn.sampleRate;
            hn = jn < kn
        }
        var ln = hn
            , mn = {
            label: qf.J + " Container",
            children: [{
                label: "Initialization",
                children: []
            }]
        }
            , bn = dn()
            , Tm = {}
            , Um = ""
            , Vm = ""
            , Zm = ""
            , $m = ""
            , Im = {}
            , Hm = !1
            , Em = {}
            , nn = {}
            , an = ""
            , Sm = void 0
            , cn = {}
            , Wm = {}
            , Qm = void 0
            , on = 5;
        0 < fn.uh && (on = fn.uh);
        var Xm = function (a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e)
                d.push(0);
            return {
                oj: function () {
                    return c < a ? !1 : Za() - d[c % a] < b
                },
                Kj: function () {
                    var f = c++ % a;
                    d[f] = Za()
                }
            }
        }(on, 1E3)
            , Ym = 1E3
            , qn = function (a, b) {
            if (ln && !Wm[a] && Sm !== a) {
                Nm();
                Sm = a;
                Zm = Um = "";
                cn[a] = "&e=" + Pm(b) + "&eid=" + a;
                Rm();
            }
        }
            , rn = function (a, b, c, d) {
            if (ln && b) {
                var e, f = String(b[ne.yb] || "").replace(/_/g, "");
                0 === f.indexOf("cvt") && (f = "cvt");
                e = f;
                var g = c + e;
                if (!Wm[a]) {
                    a !== Sm && (Nm(),
                        Sm = a);
                    Um = Um ? Um + "." + g : "&tr=" + g;
                    var h = b["function"];
                    if (!h)
                        throw Error("Error: No function name given for function call.");
                    var l = (Ve[h] ? "1" : "2") + e;
                    Zm = Zm ? Zm + "." + l : "&ti=" + l;
                    Rm();
                    Om()
                }
            }
        };
        var yn = function (a, b, c) {
            if (ln && !Wm[a]) {
                a !== Sm && (Nm(),
                    Sm = a);
                var d = c + b;
                Vm = Vm ? Vm + "." + d : "&epr=" + d;
                Rm();
                Om()
            }
        }
            , zn = function (a, b, c) {
        };

        function An(a, b, c, d) {
            var e = Te[a]
                , f = Bn(a, b, c, d);
            if (!f)
                return null;
            var g = af(e[ne.pg], c, []);
            if (g && g.length) {
                var h = g[0];
                f = An(h.index, {
                    onSuccess: f,
                    onFailure: 1 === h.Ng ? b.terminate : f,
                    terminate: b.terminate
                }, c, d)
            }
            return f
        }

        function Bn(a, b, c, d) {
            function e() {
                if (f[ne.ri])
                    h();
                else {
                    var w = bf(f, c, []);
                    var y = w[ne.Bh];
                    if (null != y)
                        for (var x = 0; x < y.length; x++)
                            if (!ki(y[x])) {
                                h();
                                return
                            }
                    var z = jm(c.kb, String(f[ne.yb]), Number(f[ne.qg]), w[ne.si])
                        , B = !1;
                    w.vtp_gtmOnSuccess = function () {
                        if (!B) {
                            B = !0;
                            var D = Za() - F;
                            rn(c.id, Te[a], "5", D);
                            km(c.kb, z, "success", D);
                            g()
                        }
                    }
                    ;
                    w.vtp_gtmOnFailure = function () {
                        if (!B) {
                            B = !0;
                            var D = Za() - F;
                            rn(c.id, Te[a], "6", D);
                            km(c.kb, z, "failure", D);
                            h()
                        }
                    }
                    ;
                    w.vtp_gtmTagId = f.tag_id;
                    w.vtp_gtmEventId = c.id;
                    rn(c.id, f, "1");
                    var C = function () {
                        var D = Za() - F;
                        rn(c.id, f, "7", D);
                        km(c.kb, z, "exception", D);
                        B || (B = !0,
                            h())
                    };
                    var F = Za();
                    try {
                        $e(w, {
                            event: c,
                            index: a,
                            type: 1
                        })
                    } catch (D) {
                        C(D)
                    }
                }
            }

            var f = Te[a]
                , g = b.onSuccess
                , h = b.onFailure
                , l = b.terminate;
            if (c.ff(f))
                return null;
            var n = af(f[ne.rg], c, []);
            if (n && n.length) {
                var p = n[0]
                    , r = An(p.index, {
                    onSuccess: g,
                    onFailure: h,
                    terminate: l
                }, c, d);
                if (!r)
                    return null;
                g = r;
                h = 2 === p.Ng ? l : r
            }
            if (f[ne.lg] || f[ne.xi]) {
                var t = f[ne.lg] ? Ue : c.Wj
                    , u = g
                    , q = h;
                if (!t[a]) {
                    e = cb(e);
                    var v = Cn(a, t, e);
                    g = v.onSuccess;
                    h = v.onFailure
                }
                return function () {
                    t[a](u, q)
                }
            }
            return e
        }

        function Cn(a, b, c) {
            var d = []
                , e = [];
            b[a] = Dn(d, e, c);
            return {
                onSuccess: function () {
                    b[a] = En;
                    for (var f = 0; f < d.length; f++)
                        d[f]()
                },
                onFailure: function () {
                    b[a] = Fn;
                    for (var f = 0; f < e.length; f++)
                        e[f]()
                }
            }
        }

        function Dn(a, b, c) {
            return function (d, e) {
                a.push(d);
                b.push(e);
                c()
            }
        }

        function En(a) {
            a()
        }

        function Fn(a, b) {
            b()
        }
        ;var In = function (a, b) {
            for (var c = [], d = 0; d < Te.length; d++)
                if (a[d]) {
                    var e = Te[d];
                    var f = mm(b.kb);
                    try {
                        var g = An(d, {
                            onSuccess: f,
                            onFailure: f,
                            terminate: f
                        }, b, d);
                        if (g) {
                            var h = c
                                , l = h.push
                                , n = d
                                , p = e["function"];
                            if (!p)
                                throw "Error: No function name given for function call.";
                            var r = Ve[p];
                            l.call(h, {
                                nh: n,
                                dh: r ? r.priorityOverride || 0 : 0,
                                execute: g
                            })
                        } else
                            Gn(d, b),
                                f()
                    } catch (q) {
                        f()
                    }
                }
            var t = b.kb;
            t.N = !0;
            t.o >= t.s && lm(t);
            c.sort(Hn);
            for (var u = 0; u < c.length; u++)
                c[u].execute();
            return 0 < c.length
        };

        function Hn(a, b) {
            var c, d = b.dh, e = a.dh;
            c = d > e ? 1 : d < e ? -1 : 0;
            var f;
            if (0 !== c)
                f = c;
            else {
                var g = a.nh
                    , h = b.nh;
                f = g > h ? 1 : g < h ? -1 : 0
            }
            return f
        }

        function Gn(a, b) {
            if (!ln)
                return;
            var c = function (d) {
                var e = b.ff(Te[d]) ? "3" : "4"
                    , f = af(Te[d][ne.pg], b, []);
                f && f.length && c(f[0].index);
                rn(b.id, Te[d], e);
                var g = af(Te[d][ne.rg], b, []);
                g && g.length && c(g[0].index)
            };
            c(a);
        }

        var Jn = !1
            , Pn = function (a) {
            var b = Za()
                , c = a["gtm.uniqueEventId"]
                , d = a.event;
            if ("gtm.js" === d) {
                if (Jn)
                    return !1;
                Jn = !0;
            }
            var g = Bh(c)
                , h = !1;
            if (!g.active) {
                if ("gtm.js" !== d)
                    return !1;
                h = !0;
                g = Bh(Number.MAX_SAFE_INTEGER)
            }
            qn(c, d);
            var l = a.eventCallback
                , n = a.eventTimeout
                , p = l;
            var r = {
                id: c,
                name: d,
                ff: zh(g.isAllowed),
                Wj: [],
                Yg: function () {
                    Rg(6)
                },
                Eg: Kn(c),
                kb: new im(p, n)
            };
            r.Dg = Ln();
            Mn(c, r.kb);
            var t = lf(r);
            h && (t = Nn(t));
            var u = In(t, r);
            "gtm.js" !== d && "gtm.sync" !== d || ym(qf.J);
            return On(t, u)
        };

        function Kn(a) {
            return function (b) {
                ln && (Lc(b) || zn(a, "input", b))
            }
        }

        function Mn(a, b) {
            qh(a, "event", 1);
            qh(a, "ecommerce", 1);
            qh(a, "gtm");
            qh(a, "eventModel");
        }

        function Ln() {
            var a = {};
            a.event = ph("event", 1);
            a.ecommerce = ph("ecommerce", 1);
            a.gtm = ph("gtm");
            a.eventModel = ph("eventModel");
            return a
        }

        function Nn(a) {
            for (var b = [], c = 0; c < a.length; c++)
                a[c] && Tg[String(Te[c][ne.yb])] && (b[c] = !0);
            return b
        }

        function On(a, b) {
            if (!b)
                return b;
            for (var c = 0; c < a.length; c++)
                if (a[c] && Te[c] && !Ug[String(Te[c][ne.yb])])
                    return !0;
            return !1
        }

        function Qn(a, b) {
            if (a) {
                var c = "" + a;
                0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
                "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
                return uj("" + c + b).href
            }
        }

        function Rn(a, b) {
            return Sn() ? Qn(a, b) : void 0
        }

        function Sn() {
            var a = !1;
            return a
        }

        function Tn() {
            return !!qf.yd && "SGTM_TOKEN" !== qf.yd.replaceAll("@@", "")
        }
        ;var Un = function () {
            var a = !1;
            return a
        };
        var Vn;
        if (3 === qf.xd.length)
            Vn = "g";
        else {
            var Wn = "G";
            Wn = "g";
            Vn = Wn
        }
        var Xn = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: Vn,
            OPT: "o"
        }
            , Yn = function (a) {
            var b = qf.J.split("-"), c = b[0].toUpperCase(), d = Xn[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "", f;
            if (3 === qf.xd.length) {
                var g = "w";
                g = Un() ? "s" : "o";
                f = "2" + g
            } else
                f = "";
            return f + d + qf.xd + e
        };

        function Zn(a, b) {
            if ("" === a)
                return b;
            var c = Number(a);
            return isNaN(c) ? b : c
        }
        ;var $n = function (a, b) {
            a.addEventListener && a.addEventListener.call(a, "message", b, !1)
        };

        function ao() {
            return Kb("iPhone") && !Kb("iPod") && !Kb("iPad")
        }
        ;Kb("Opera");
        Kb("Trident") || Kb("MSIE");
        Kb("Edge");
        !Kb("Gecko") || -1 != Gb.toLowerCase().indexOf("webkit") && !Kb("Edge") || Kb("Trident") || Kb("MSIE") || Kb("Edge");
        -1 != Gb.toLowerCase().indexOf("webkit") && !Kb("Edge") && Kb("Mobile");
        Kb("Macintosh");
        Kb("Windows");
        Kb("Linux") || Kb("CrOS");
        var bo = oa.navigator || null;
        bo && (bo.appVersion || "").indexOf("X11");
        Kb("Android");
        ao();
        Kb("iPad");
        Kb("iPod");
        ao() || Kb("iPad") || Kb("iPod");
        Gb.toLowerCase().indexOf("kaios");
        var co = function (a, b) {
            for (var c = a, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames[b])
                } catch (h) {
                    e = !1
                }
                if (e)
                    return c;
                var f;
                a: {
                    try {
                        var g = c.parent;
                        if (g && g != c) {
                            f = g;
                            break a
                        }
                    } catch (h) {
                    }
                    f = null
                }
                if (!(c = f))
                    break
            }
            return null
        }
            , eo = function (a) {
            var b = J;
            b = void 0 === b ? window.document : b;
            if (!a || !b.head)
                return null;
            var c, d, e;
            e = void 0 === e ? document : e;
            d = "META";
            "application/xhtml+xml" === (null == e ? void 0 : e.contentType) && (d = d.toLowerCase());
            c = e.createElement(d);
            b.head.appendChild(c);
            c.httpEquiv = "origin-trial";
            c.content = a;
            return c
        };
        var fo = function () {
        };
        var go = function (a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        }
            , ho = function (a, b) {
            this.o = a;
            this.g = null;
            this.C = {};
            this.N = 0;
            this.F = void 0 === b ? 500 : b;
            this.s = null
        };
        ma(ho, fo);
        var jo = function (a) {
            return "function" === typeof a.o.__tcfapi || null != io(a)
        };
        ho.prototype.addEventListener = function (a) {
            var b = {}
                , c = Sb(function () {
                return a(b)
            })
                , d = 0;
            -1 !== this.F && (d = setTimeout(function () {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.F));
            var e = function (f, g) {
                clearTimeout(d);
                f ? (b = f,
                    b.internalErrorState = go(b),
                g && 0 === b.internalErrorState || (b.tcString = "tcunavailable",
                g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable",
                    b.internalErrorState = 3);
                a(b)
            };
            try {
                ko(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable",
                    b.internalErrorState = 3,
                d && (clearTimeout(d),
                    d = 0),
                    c()
            }
        }
        ;
        ho.prototype.removeEventListener = function (a) {
            a && a.listenerId && ko(this, "removeEventListener", null, a.listenerId)
        }
        ;
        var mo = function (a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g)
                return !1;
            var h = c;
            2 === c ? (h = 0,
            2 === g && (h = 1)) : 3 === c && (h = 1,
            1 === g && (h = 0));
            var l;
            if (0 === h)
                if (a.purpose && a.vendor) {
                    var n = lo(a.vendor.consents, void 0 === d ? "755" : d);
                    l = n && "1" === b && a.purposeOneTreatment && ((Nh(Fh) ? 0 : "DE" === a.publisherCC) || "CH" === a.publisherCC) ? !0 : n && lo(a.purpose.consents, b)
                } else
                    l = !0;
            else
                l = 1 === h ? a.purpose && a.vendor ? lo(a.purpose.legitimateInterests, b) && lo(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return l
        }
            , lo = function (a, b) {
            return !(!a || !a[b])
        }
            , ko = function (a, b, c, d) {
            c || (c = function () {
                }
            );
            if ("function" === typeof a.o.__tcfapi) {
                var e = a.o.__tcfapi;
                e(b, 2, c, d)
            } else if (io(a)) {
                no(a);
                var f = ++a.N;
                a.C[f] = c;
                if (a.g) {
                    var g = {};
                    a.g.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    },
                        g), "*")
                }
            } else
                c({}, !1)
        }
            , io = function (a) {
            if (a.g)
                return a.g;
            a.g = co(a.o, "__tcfapiLocator");
            return a.g
        }
            , no = function (a) {
            a.s || (a.s = function (b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.C[c.callId](c.returnValue, c.success)
                } catch (d) {
                }
            }
                ,
                $n(a.o, a.s))
        };
        var oo = !0;
        oo = !1;
        var po = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        }
            , qo = Zn("", 550)
            , ro = Zn("", 500);

        function so() {
            var a = S.tcf || {};
            return S.tcf = a
        }

        var to = function (a, b) {
            this.s = a;
            this.g = b;
            this.o = Za();
        }
            , uo = function (a) {
        }
            , vo = function (a) {
        }
            , Bo = function () {
            var a = so()
                , b = new ho(A, oo ? 3E3 : -1)
                , c = new to(b, a);
            if ((wo() ? !0 === A.gtag_enable_tcf_support : !1 !== A.gtag_enable_tcf_support) && !a.active && ("function" === typeof A.__tcfapi || jo(b))) {
                a.active = !0;
                a.Sc = {};
                xo();
                var d = null;
                oo ? d = A.setTimeout(function () {
                    yo(a);
                    zo(a);
                    d = null
                }, ro) : a.tcString = "tcunavailable";
                try {
                    b.addEventListener(function (e) {
                        d && (clearTimeout(d),
                            d = null);
                        if (0 !== e.internalErrorState)
                            yo(a),
                                zo(a),
                                uo(c);
                        else {
                            var f;
                            a.gdprApplies = e.gdprApplies;
                            if (!1 === e.gdprApplies)
                                f = Ao(),
                                    b.removeEventListener(e);
                            else if ("tcloaded" === e.eventStatus || "useractioncomplete" === e.eventStatus || "cmpuishown" === e.eventStatus) {
                                var g = {}, h;
                                for (h in po)
                                    if (po.hasOwnProperty(h))
                                        if ("1" === h) {
                                            var l, n = e, p = !0;
                                            p = void 0 === p ? !1 : p;
                                            var r;
                                            var t = n;
                                            !1 === t.gdprApplies ? r = !0 : (void 0 === t.internalErrorState && (t.internalErrorState = go(t)),
                                                r = "error" === t.cmpStatus || 0 !== t.internalErrorState || "loaded" === t.cmpStatus && ("tcloaded" === t.eventStatus || "useractioncomplete" === t.eventStatus) ? !0 : !1);
                                            l = r ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : mo(n, "1", 0) : !1;
                                            g["1"] = l
                                        } else
                                            g[h] = mo(e, h, po[h]);
                                f = g
                            }
                            f && (a.tcString = e.tcString || "tcempty",
                                a.Sc = f,
                                zo(a),
                                uo(c))
                        }
                    }),
                        vo(c)
                } catch (e) {
                    d && (clearTimeout(d),
                        d = null),
                        yo(a),
                        zo(a)
                }
            }
        };

        function yo(a) {
            a.type = "e";
            a.tcString = "tcunavailable";
            oo && (a.Sc = Ao())
        }

        function xo() {
            var a = {}
                , b = (a.ad_storage = "denied",
                a.wait_for_update = qo,
                a);
            hi(b)
        }

        var wo = function () {
            var a = !1;
            a = !0;
            return a
        };

        function Ao() {
            var a = {}, b;
            for (b in po)
                po.hasOwnProperty(b) && (a[b] = !0);
            return a
        }

        function zo(a) {
            var b = {}
                , c = (b.ad_storage = a.Sc["1"] ? "granted" : "denied",
                b);
            ji(c, 0, {
                gdprApplies: a ? a.gdprApplies : void 0,
                tcString: Co()
            })
        }

        var Do = function () {
            var a = so();
            if (a.active && void 0 !== a.loadTime)
                return Number(a.loadTime)
        }
            , Co = function () {
            var a = so();
            return a.active ? a.tcString || "" : ""
        }
            , Eo = function () {
            var a = so();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        }
            , Fo = function (a) {
            if (!po.hasOwnProperty(String(a)))
                return !0;
            var b = so();
            return b.active && b.Sc ? !!b.Sc[String(a)] : !0
        };
        var No = !1;
        var Oo = function () {
            this.g = {}
        }
            , Po = function (a, b, c) {
            null != c && (a.g[b] = c)
        }
            , Qo = function (a) {
            return Object.keys(a.g).map(function (b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.g[b])
            }).join("&")
        }
            , So = function (a, b, c, d, e) {
        };
        var Uo = /[A-Z]+/
            , Vo = /\s/
            , Wo = function (a) {
            if (m(a)) {
                a = Va(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Uo.test(c)) {
                        var d = !1;
                        d = !0;
                        for (var e = a.substring(b + 1).split("/"), f = 0; f < e.length; f++)
                            if (!e[f] || Vo.test(e[f]) && ("AW" !== c || 1 !== f || !d))
                                return;
                        return {
                            id: a,
                            prefix: c,
                            containerId: c + "-" + e[0],
                            M: e
                        }
                    }
                }
            }
        }
            , Yo = function (a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = Wo(a[c]);
                d && (b[d.id] = d)
            }
            Xo(b);
            var e = [];
            Oa(b, function (f, g) {
                e.push(g)
            });
            return e
        };

        function Xo(a) {
            var b = [], c;
            for (c in a)
                if (a.hasOwnProperty(c)) {
                    var d = a[c];
                    "AW" === d.prefix && d.M[1] && b.push(d.containerId)
                }
            for (var e = 0; e < b.length; ++e)
                delete a[b[e]]
        }
        ;var $o = function (a, b, c, d) {
            return (2 === Zo() || d || "http:" != A.location.protocol ? a : b) + c
        }
            , Zo = function () {
                var a = ac(), b;
                if (1 === a)
                    a: {
                        var c = Xg;
                        c = c.toLowerCase();
                        for (var d = "https://" + c, e = "http://" + c, f = 1, g = J.getElementsByTagName("script"), h = 0; h < g.length && 100 > h; h++) {
                            var l = g[h].src;
                            if (l) {
                                l = l.toLowerCase();
                                if (0 === l.indexOf(e)) {
                                    b = 3;
                                    break a
                                }
                                1 === f && 0 === l.indexOf(d) && (f = 2)
                            }
                        }
                        b = f
                    }
                else
                    b = a;
                return b
            };
        var qq = function () {
            var a = !0;
            Fo(7) && Fo(9) && Fo(10) || (a = !1);
            var b = !0;
            b = !1;
            b && !pq() && (a = !1);
            return a
        }
            , pq = function () {
            var a = !0;
            Fo(3) && Fo(4) || (a = !1);
            return a
        };
        var jr = !1;
        jr = !0;

        function kr() {
            var a = S;
            return a.gcq = a.gcq || new lr
        }

        var mr = function (a, b, c) {
            kr().register(a, b, c)
        }
            , nr = function (a, b, c, d) {
            kr().push("event", [b, a], c, d)
        }
            , or = function (a, b) {
            kr().push("config", [a], b)
        }
            , pr = function (a, b, c, d) {
            kr().push("get", [a, b], c, d)
        }
            , qr = function (a) {
            return kr().getRemoteConfig(a)
        }
            , rr = {}
            , sr = function () {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.remoteConfig = {};
            this.o = {};
            this.s = null;
            this.g = !1
        }
            , tr = function (a, b, c, d, e) {
            this.type = a;
            this.s = b;
            this.U = c || "";
            this.g = d;
            this.o = e
        }
            , lr = function () {
            this.o = {};
            this.s = {};
            this.g = [];
            this.C = {
                AW: !1,
                UA: !1
            }
        }
            , ur = function (a, b) {
            var c = Wo(b);
            return a.o[c.containerId] = a.o[c.containerId] || new sr
        }
            , vr = function (a, b, c) {
            if (b) {
                var d = Wo(b);
                if (d && 1 === ur(a, b).status) {
                    ur(a, b).status = 2;
                    var e = {};
                    ln && (e.timeoutId = A.setTimeout(function () {
                        Rg(38);
                        Rm()
                    }, 3E3));
                    a.push("require", [e], d.containerId);
                    rr[d.containerId] = Za();
                    if (Un()) {
                    } else {
                        var g = "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=dataLayer&cx=c";
                        Tn() && (g += "&sign=" + qf.yd);
                        var h = ("http:" != A.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + g)
                            , l = Rn(c, g) || h;
                        $b(l)
                    }
                }
            }
        }
            , wr = function (a, b, c, d) {
            if (d.U) {
                var e = ur(a, d.U)
                    , f = e.s;
                if (f) {
                    var g = Hc(c)
                        , h = Hc(e.targetConfig[d.U])
                        , l = Hc(e.containerConfig)
                        , n = Hc(e.remoteConfig)
                        , p = Hc(a.s)
                        , r = kh("gtm.uniqueEventId")
                        , t = Wo(d.U).prefix
                        , u = cb(function () {
                        var v = g[R.Qb];
                        v && K(v)
                    })
                        , q = Wi(Vi(Xi(Ui(Si(Ti(Ri(Qi(Pi(g), h), l), n), p), function () {
                        yn(r, t, "2");
                        jr && u()
                    }), function () {
                        yn(r, t, "3");
                        jr && u()
                    }), function (v, w) {
                        a.C[v] = w
                    }), function (v) {
                        return a.C[v]
                    });
                    try {
                        yn(r, t, "1");
                        f(d.U, b, d.s, q)
                    } catch (v) {
                        yn(r, t, "4");
                    }
                }
            }
        };
        lr.prototype.register = function (a, b, c) {
            var d = ur(this, a);
            if (3 !== d.status) {
                d.s = b;
                d.status = 3;
                c && (Hc(d.remoteConfig, c),
                    d.remoteConfig = c);
                var e = Wo(a)
                    , f = rr[e.containerId];
                if (void 0 !== f) {
                    var g = S[e.containerId].bootstrap
                        , h = e.prefix.toUpperCase();
                    S[e.containerId]._spx && (h = h.toLowerCase());
                    var l = kh("gtm.uniqueEventId")
                        , n = h
                        , p = Za() - g;
                    if (ln && !Wm[l]) {
                        l !== Sm && (Nm(),
                            Sm = l);
                        var r = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                        $m = $m ? $m + "," + r : "&cl=" + r
                    }
                    delete rr[e.containerId]
                }
                this.flush()
            }
        }
        ;
        lr.prototype.push = function (a, b, c, d) {
            var e = Math.floor(Za() / 1E3);
            vr(this, c, b[0][R.sa] || this.s[R.sa]);
            c && ur(this, c).g && (d = !1);
            this.g.push(new tr(a, e, c, b, d));
            d || this.flush()
        }
        ;
        lr.prototype.insert = function (a, b, c) {
            var d = Math.floor(Za() / 1E3);
            0 < this.g.length ? this.g.splice(1, 0, new tr(a, d, c, b, !1)) : this.g.push(new tr(a, d, c, b, !1))
        }
        ;
        lr.prototype.flush = function (a) {
            for (var b = this, c = [], d = !1, e = {}; this.g.length;) {
                var f = this.g[0];
                if (f.o)
                    !f.U || ur(this, f.U).g ? (f.o = !1,
                        this.g.push(f)) : c.push(f),
                        this.g.shift();
                else {
                    switch (f.type) {
                        case "require":
                            if (3 !== ur(this, f.U).status && !a) {
                                this.g.push.apply(this.g, c);
                                return
                            }
                            ln && A.clearTimeout(f.g[0].timeoutId);
                            break;
                        case "set":
                            Oa(f.g[0], function (t, u) {
                                Hc(ib(t, u), b.s)
                            });
                            break;
                        case "config":
                            e.La = {};
                            Oa(f.g[0], function (t) {
                                return function (u, q) {
                                    Hc(ib(u, q), t.La)
                                }
                            }(e));
                            var g = !!e.La[R.pd];
                            delete e.La[R.pd];
                            var h = ur(this, f.U)
                                , l = Wo(f.U)
                                , n = l.containerId === l.id;
                            g || (n ? h.containerConfig = {} : h.targetConfig[f.U] = {});
                            h.g && g || wr(this, R.za, e.La, f);
                            h.g = !0;
                            delete e.La[R.Vb];
                            n ? Hc(e.La, h.containerConfig) : Hc(e.La, h.targetConfig[f.U]);
                            d = !0;
                            break;
                        case "event":
                            e.Yc = {};
                            Oa(f.g[0], function (t) {
                                return function (u, q) {
                                    Hc(ib(u, q), t.Yc)
                                }
                            }(e));
                            wr(this, f.g[1], e.Yc, f);
                            break;
                        case "get":
                            var p = {}
                                , r = (p[R.Pa] = f.g[0],
                                p[R.cb] = f.g[1],
                                p);
                            wr(this, R.Na, r, f)
                    }
                    this.g.shift();
                    xr(this, f)
                }
                e = {
                    La: e.La,
                    Yc: e.Yc
                }
            }
            this.g.push.apply(this.g, c);
            d && this.flush()
        }
        ;
        var xr = function (a, b) {
            if ("require" !== b.type)
                if (b.U)
                    for (var c = a.getCommandListeners(b.U)[b.type] || [], d = 0; d < c.length; d++)
                        c[d]();
                else
                    for (var e in a.o)
                        if (a.o.hasOwnProperty(e)) {
                            var f = a.o[e];
                            if (f && f.o)
                                for (var g = f.o[b.type] || [], h = 0; h < g.length; h++)
                                    g[h]()
                        }
        };
        lr.prototype.getRemoteConfig = function (a) {
            return ur(this, a).remoteConfig
        }
        ;
        lr.prototype.getCommandListeners = function (a) {
            return ur(this, a).o
        }
        ;
        var uf;
        var yr = {}
            , zr = function (a, b) {
            b = b.toString().split(",");
            for (var c = 0; c < b.length; c++) {
                var d = yr[b[c]] || [];
                yr[b[c]] = d;
                0 > d.indexOf(a) && d.push(a)
            }
        }
            , Ar = function (a) {
            Oa(yr, function (b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
        var Br = "HA GF G UA AW DC".split(" ")
            , Cr = !1;
        Cr = !0;
        var Dr = !1
            , Er = !1
            , Fr = 0;

        function Gr(a, b) {
            var c = {
                event: a
            };
            b && (c.eventModel = Hc(b),
            b[R.Qb] && (c.eventCallback = b[R.Qb]),
            b[R.gd] && (c.eventTimeout = b[R.gd]));
            return c
        }

        function Hr(a) {
            a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
                value: dh()
            });
            return a["gtm.uniqueEventId"]
        }

        function Ir() {
            if (!Dr && !S.gtagRegistered) {
                Dr = S.gtagRegistered = !0;
                S.addTargetToGroup = function (c) {
                    zr(c, "default")
                }
                ;
                var a = S.pendingDefaultTargets;
                delete S.pendingDefaultTargets;
                if (Ia(a))
                    for (var b = 0; b < a.length; ++b)
                        zr(a[b], "default")
            }
            return Dr
        }

        var Jr = {
            config: function (a) {
                var b, c = Hr(a);
                if (2 > a.length || !m(a[1]))
                    return;
                var d = {};
                if (2 < a.length) {
                    if (void 0 != a[2] && !Gc(a[2]) || 3 < a.length)
                        return;
                    d = a[2]
                }
                var e = Wo(a[1]);
                if (!e)
                    return;
                Ar(e.id);
                zr(e.id, d[R.se] || "default");
                delete d[R.se];
                Er || Rg(43);
                if (Ir() && -1 !== Br.indexOf(e.prefix)) {
                    "G" === e.prefix && (d[R.Vb] = !0);
                    Cr && delete d[R.Qb];
                    e.id === e.containerId && (S.configCount = ++Fr);
                    or(d, e.id);
                    return
                }
                nh("gtag.targets." + e.id, void 0);
                nh("gtag.targets." + e.id, Hc(d));
                var f = {};
                f[R.wb] = e.id;
                b = Gr(R.za, f);
                b["gtm.uniqueEventId"] = c;
                return b
            },
            consent: function (a) {
                function b() {
                    Ir() && Hc(a[2], {
                        subcommand: a[1]
                    })
                }

                if (3 === a.length) {
                    Rg(39);
                    var c = dh()
                        , d = a[1];
                    "default" === d ? (b(),
                        hi(a[2])) : "update" === d && (b(),
                        ji(a[2], c))
                }
            },
            event: function (a) {
                var b = a[1];
                if (!(2 > a.length) && m(b)) {
                    var c;
                    if (2 < a.length) {
                        if (!Gc(a[2]) && void 0 != a[2] || 3 < a.length)
                            return;
                        c = a[2]
                    }
                    var d = Gr(b, c)
                        , e = Hr(a);
                    d["gtm.uniqueEventId"] = e;
                    var f;
                    var g = c && c[R.wb];
                    void 0 === g && (g = kh(R.wb, 2),
                    void 0 === g && (g = "default"));
                    if (m(g) || Ia(g)) {
                        for (var h = g.toString().replace(/\s+/g, "").split(","), l = [], n = 0; n < h.length; n++)
                            if (0 <= h[n].indexOf("-"))
                                l.push(h[n]);
                            else {
                                var p = yr[h[n]];
                                p && p.length && (l = l.concat(p))
                            }
                        f = Yo(l)
                    } else
                        f = void 0;
                    var r = f;
                    if (!r)
                        return;
                    for (var t = Ir(), u = [], q = 0; t && q < r.length; q++) {
                        var v = r[q];
                        if (-1 !== Br.indexOf(v.prefix)) {
                            var w = Hc(c);
                            "G" === v.prefix && (w[R.Vb] = !0);
                            Cr && delete w[R.Qb];
                            nr(b, w, v.id)
                        }
                        u.push(v.id)
                    }
                    d.eventModel = d.eventModel || {};
                    0 < r.length ? d.eventModel[R.wb] = u.join() : delete d.eventModel[R.wb];
                    Er || Rg(43);
                    return d
                }
            },
            get: function (a) {
                Rg(53);
                if (4 !== a.length || !m(a[1]) || !m(a[2]) || !Ga(a[3]))
                    return;
                var b = Wo(a[1])
                    , c = String(a[2])
                    , d = a[3];
                if (!b)
                    return;
                Er || Rg(43);
                if (!Ir() || -1 === Br.indexOf(b.prefix))
                    return;
                dh();
                var e = {};
                di(Hc((e[R.Pa] = c,
                    e[R.cb] = d,
                    e)));
                pr(c, function (f) {
                    K(function () {
                        return d(f)
                    })
                }, b.id);
            },
            js: function (a) {
                if (2 == a.length && a[1].getTime) {
                    Er = !0;
                    Ir();
                    var b = {};
                    return b.event = "gtm.js",
                        b["gtm.start"] = a[1].getTime(),
                        b["gtm.uniqueEventId"] = Hr(a),
                        b
                }
            },
            policy: function (a) {
                if (3 === a.length) {
                    var b = a[1]
                        , c = a[2]
                        , d = uf.o;
                    d.g[b] ? d.g[b].push(c) : d.g[b] = [c]
                }
            },
            set: function (a) {
                var b;
                2 == a.length && Gc(a[1]) ? b = Hc(a[1]) : 3 == a.length && m(a[1]) && (b = {},
                    Gc(a[2]) || Ia(a[2]) ? b[a[1]] = Hc(a[2]) : b[a[1]] = a[2]);
                if (b) {
                    if (dh(),
                        Ir()) {
                        Hc(b);
                        var c = Hc(b);
                        kr().push("set", [c])
                    }
                    b._clear = !0;
                    return b
                }
            }
        }
            , Kr = {
            policy: !0
        };
        var Lr = function (a, b) {
            var c = a.hide;
            if (c && void 0 !== c[b] && c.end) {
                c[b] = !1;
                var d = !0, e;
                for (e in c)
                    if (c.hasOwnProperty(e) && !0 === c[e]) {
                        d = !1;
                        break
                    }
                d && (c.end(),
                    c.end = null)
            }
        }
            , Nr = function (a) {
            var b = Mr()
                , c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
        var Or = !1
            , Pr = [];

        function Qr() {
            if (!Or) {
                Or = !0;
                for (var a = 0; a < Pr.length; a++)
                    K(Pr[a])
            }
        }

        var Rr = function (a) {
            Or ? K(a) : Pr.push(a)
        };
        var hs = function (a) {
            if (gs(a))
                return a;
            this.g = a
        };
        hs.prototype.gj = function () {
            return this.g
        }
        ;
        var gs = function (a) {
            return !a || "object" !== zc(a) || Gc(a) ? !1 : "getUntrustedUpdateValue" in a
        };
        hs.prototype.getUntrustedUpdateValue = hs.prototype.gj;
        var is = []
            , js = !1
            , ks = !1
            , ls = function (a) {
            return A["dataLayer"].push(a)
        }
            , ms = function (a, b) {
            var c = S["dataLayer"]
                , d = c ? c.subscribers : 1
                , e = 0
                , f = !1
                , g = void 0;
            b && (g = A.setTimeout(function () {
                f || (f = !0,
                    a());
                g = void 0
            }, b));
            return function () {
                ++e === d && (g && (A.clearTimeout(g),
                    g = void 0),
                f || (a(),
                    f = !0))
            }
        };

        function ns(a) {
            var b = a._clear;
            Oa(a, function (d, e) {
                "_clear" !== d && (b && nh(d, void 0),
                    nh(d, e))
            });
            Zg || (Zg = a["gtm.start"]);
            var c = a["gtm.uniqueEventId"];
            if (!a.event)
                return !1;
            c || (c = dh(),
                a["gtm.uniqueEventId"] = c,
                nh("gtm.uniqueEventId", c));
            return Pn(a)
        }

        function os() {
            var a = is[0];
            if (null == a || "object" !== typeof a)
                return !1;
            if (a.event)
                return !0;
            if (Pa(a)) {
                var b = a[0];
                if ("config" === b || "event" === b || "js" === b)
                    return !0
            }
            return !1
        }

        function ps() {
            for (var a = !1; !ks && 0 < is.length;) {
                if (!js && os()) {
                    var b = {}
                        , c = (b.event = "gtm.init_consent",
                        b)
                        , d = {}
                        , e = (d.event = "gtm.init",
                        d)
                        , f = is[0]["gtm.uniqueEventId"];
                    f && (c["gtm.uniqueEventId"] = f - 2,
                        e["gtm.uniqueEventId"] = f - 1);
                    is.unshift(c, e);
                    js = !0
                }
                ks = !0;
                delete hh.eventModel;
                jh();
                var g = is.shift();
                if (null != g) {
                    var h = gs(g);
                    if (h) {
                        var l = g;
                        g = gs(l) ? l.getUntrustedUpdateValue() : void 0;
                        oh()
                    }
                    try {
                        if (Ga(g))
                            try {
                                g.call(lh)
                            } catch (w) {
                            }
                        else if (Ia(g)) {
                            var n = g;
                            if (m(n[0])) {
                                var p = n[0].split(".")
                                    , r = p.pop()
                                    , t = n.slice(1)
                                    , u = kh(p.join("."), 2);
                                if (void 0 !== u && null !== u)
                                    try {
                                        u[r].apply(u, t)
                                    } catch (w) {
                                    }
                            }
                        } else {
                            if (Pa(g)) {
                                a: {
                                    var q = g;
                                    if (q.length && m(q[0])) {
                                        var v = Jr[q[0]];
                                        if (v && (!h || !Kr[q[0]])) {
                                            g = v(q);
                                            break a
                                        }
                                    }
                                    g = void 0
                                }
                                if (!g) {
                                    ks = !1;
                                    continue
                                }
                            }
                            a = ns(g) || a
                        }
                    } finally {
                        h && jh(!0)
                    }
                }
                ks = !1
            }
            return !a
        }

        function qs() {
            var b = ps();
            try {
                Lr(A["dataLayer"], qf.J)
            } catch (c) {
            }
            return b
        }

        var ss = function () {
            var a = Wb("dataLayer", [])
                , b = Wb("google_tag_manager", {});
            b = b["dataLayer"] = b["dataLayer"] || {};
            gm(function () {
                b.gtmDom || (b.gtmDom = !0,
                    a.push({
                        event: "gtm.dom"
                    }))
            });
            Rr(function () {
                b.gtmLoad || (b.gtmLoad = !0,
                    a.push({
                        event: "gtm.load"
                    }))
            });
            b.subscribers = (b.subscribers || 0) + 1;
            var c = a.push;
            a.push = function () {
                var e;
                if (0 < S.SANDBOXED_JS_SEMAPHORE) {
                    e = [];
                    for (var f = 0; f < arguments.length; f++)
                        e[f] = new hs(arguments[f])
                } else
                    e = [].slice.call(arguments, 0);
                var g, h = !0;
                g = h;
                !g && is.push.apply(is, e);
                var l = c.apply(a, e);
                g && is.push.apply(is, e);
                if (300 < this.length)
                    for (Rg(4); 300 < this.length;)
                        this.shift();
                var n = "boolean" !== typeof l || l;
                return ps() && n
            }
            ;
            var d = a.slice(0);
            is.push.apply(is, d);
            if (rs()) {
                K(qs)
            }
        }
            , rs = function () {
            var a = !0;
            return a
        };

        function ts(a) {
            if (null == a || 0 === a.length)
                return !1;
            var b = Number(a)
                , c = Za();
            return b < c + 3E5 && b > c - 9E5
        }
        ;var us = function (a) {
            S.addTargetToGroup ? S.addTargetToGroup(a) : (S.pendingDefaultTargets = S.pendingDefaultTargets || [],
                S.pendingDefaultTargets.push(a))
        };
        var vs = function () {
            var a = [];
            return a
        };
        var ws = {};
        ws.td = new String("undefined");
        var zs = function (a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": lc(a, "className"),
                "gtm.elementId": a["for"] || fc(a, "id") || "",
                "gtm.elementTarget": a.formTarget || lc(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || lc(a, "href") || a.src || a.code || a.codebase || "";
            return d
        }
            , As = function (a) {
            S.hasOwnProperty("autoEventsSettings") || (S.autoEventsSettings = {});
            var b = S.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        }
            , Bs = function (a, b, c) {
            As(a)[b] = c
        }
            , Cs = function (a, b, c, d) {
            var e = As(a)
                , f = bb(e, b, d);
            e[b] = c(f)
        }
            , Ds = function (a, b, c) {
            var d = As(a);
            return bb(d, b, c)
        };
        var Js = !!A.MutationObserver
            , Ks = void 0
            , Ls = function (a) {
            if (!Ks) {
                var b = function () {
                    var c = J.body;
                    if (c)
                        if (Js)
                            (new MutationObserver(function () {
                                    for (var e = 0; e < Ks.length; e++)
                                        K(Ks[e])
                                }
                            )).observe(c, {
                                childList: !0,
                                subtree: !0
                            });
                        else {
                            var d = !1;
                            dc(c, "DOMNodeInserted", function () {
                                d || (d = !0,
                                    K(function () {
                                        d = !1;
                                        for (var e = 0; e < Ks.length; e++)
                                            K(Ks[e])
                                    }))
                            })
                        }
                };
                Ks = [];
                J.body ? b() : K(b)
            }
            Ks.push(a)
        };
        var Ws = function (a, b, c) {
            function d() {
                var g = a();
                f += e ? (Za() - e) * g.playbackRate / 1E3 : 0;
                e = Za()
            }

            var e = 0
                , f = 0;
            return {
                createEvent: function (g, h, l) {
                    var n = a()
                        , p = n.Ye
                        , r = void 0 !== l ? Math.round(l) : void 0 !== h ? Math.round(n.Ye * h) : Math.round(n.Ig)
                        , t = void 0 !== h ? Math.round(100 * h) : 0 >= p ? 0 : Math.round(r / p * 100)
                        , u = J.hidden ? !1 : .5 <= hj(c);
                    d();
                    var q = void 0;
                    void 0 !== b && (q = [b]);
                    var v = zs(c, "gtm.video", q);
                    v["gtm.videoProvider"] = "youtube";
                    v["gtm.videoStatus"] = g;
                    v["gtm.videoUrl"] = n.url;
                    v["gtm.videoTitle"] = n.title;
                    v["gtm.videoDuration"] = Math.round(p);
                    v["gtm.videoCurrentTime"] = Math.round(r);
                    v["gtm.videoElapsedTime"] = Math.round(f);
                    v["gtm.videoPercent"] = t;
                    v["gtm.videoVisible"] = u;
                    return v
                },
                ih: function () {
                    e = Za()
                },
                Yb: function () {
                    d()
                }
            }
        };
        var Xs = A.clearTimeout
            , Ys = A.setTimeout
            , U = function (a, b, c, d) {
            if (Un()) {
                b && K(b)
            } else
                return $b(a, b, c, d)
        }
            , Zs = function () {
            return new Date
        }
            , $s = function () {
            return A.location.href
        }
            , at = function (a) {
            return sj(uj(a), "fragment")
        }
            , bt = function (a) {
            return tj(uj(a))
        }
            , ct = function (a, b) {
            return kh(a, b || 2)
        }
            , dt = function (a, b, c) {
            var d;
            b ? (a.eventCallback = b,
            c && (a.eventTimeout = c),
                d = ls(a)) : d = ls(a);
            return d
        }
            , et = function (a, b) {
            A[a] = b
        }
            , W = function (a, b, c) {
            b && (void 0 === A[a] || c && !A[a]) && (A[a] = b);
            return A[a]
        }
            , ft = function (a, b, c) {
            return Wj(a, b, void 0 === c ? !0 : !!c)
        }
            , gt = function (a, b, c) {
            return 0 === fk(a, b, c)
        }
            , ht = function (a, b) {
            if (Un()) {
                b && K(b)
            } else
                bc(a, b)
        }
            , it = function (a) {
            return !!Ds(a, "init", !1)
        }
            , jt = function (a) {
            Bs(a, "init", !0)
        }
            , kt = function (a) {
            var b = Xg
                , c = "?id=" + encodeURIComponent(a) + "&l=dataLayer";
            Tn() && (c += "&sign=" + qf.yd,
            Vb && (b = Vb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]));
            var d = $o("https://", "http://", b + c);
            U(d)
        }
            , lt = function (a, b, c) {
            ln && (Lc(a) || zn(c, b, a))
        };

        function Jt(a, b) {
            a = String(a);
            b = String(b);
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        }

        var Kt = new Ma;

        function Lt(a, b, c) {
            var d = c ? "i" : void 0;
            try {
                var e = String(b) + d
                    , f = Kt.get(e);
                f || (f = new RegExp(b, d),
                    Kt.set(e, f));
                return f.test(a)
            } catch (g) {
                return !1
            }
        }

        function Mt(a, b) {
            function c(g) {
                var h = uj(g)
                    , l = sj(h, "protocol")
                    , n = sj(h, "host", !0)
                    , p = sj(h, "port")
                    , r = sj(h, "path").toLowerCase().replace(/\/$/, "");
                if (void 0 === l || "http" == l && "80" == p || "https" == l && "443" == p)
                    l = "web",
                        p = "default";
                return [l, n, p, r]
            }

            for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
                if (d[f] !== e[f])
                    return !1;
            return !0
        }

        function Nt(a) {
            return Ot(a) ? 1 : 0
        }

        function Ot(a) {
            var b = a.arg0
                , c = a.arg1;
            if (a.any_of && Ia(c)) {
                for (var d = 0; d < c.length; d++) {
                    var e = Hc(a, {});
                    Hc({
                        arg1: c[d],
                        any_of: void 0
                    }, e);
                    if (Nt(e))
                        return !0
                }
                return !1
            }
            switch (a["function"]) {
                case "_cn":
                    return 0 <= String(b).indexOf(String(c));
                case "_css":
                    var f;
                    a: {
                        if (b) {
                            var g = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                            try {
                                for (var h = 0; h < g.length; h++)
                                    if (b[g[h]]) {
                                        f = b[g[h]](c);
                                        break a
                                    }
                            } catch (l) {
                            }
                        }
                        f = !1
                    }
                    return f;
                case "_ew":
                    return Jt(b, c);
                case "_eq":
                    return String(b) == String(c);
                case "_ge":
                    return Number(b) >= Number(c);
                case "_gt":
                    return Number(b) > Number(c);
                case "_lc":
                    return 0 <= String(b).split(",").indexOf(String(c));
                case "_le":
                    return Number(b) <= Number(c);
                case "_lt":
                    return Number(b) < Number(c);
                case "_re":
                    return Lt(b, c, a.ignore_case);
                case "_sw":
                    return 0 == String(b).indexOf(String(c));
                case "_um":
                    return Mt(b, c)
            }
            return !1
        }
        ;

        function Pt(a, b) {
            var c = this;
        }
        ;

        function Qt(a, b, c) {
        }
        ;

        function Rt(a, b, c, d) {
        }
        ;

        function St(a) {
        }
        ;

        function Wt(a) {
        }
        ;var Xt = {}
            , Yt = []
            , Zt = {}
            , $t = 0
            , au = 0;

        function hu(a, b) {
        }

        function ou(a, b) {
        }
        ;

        function tu(a) {
        }
        ;var uu = {}
            , vu = [];
        var Cu = function (a, b) {
        };

        function Ju(a, b) {
        }
        ;var Ku = /^\s*$/, Lu, Mu = !1;

        function Xu(a, b) {
        }

        function Yu(a, b, c) {
        }
        ;var Zu = ["www.youtube.com", "www.youtube-nocookie.com"], $u, av = !1, bv = 0;

        function lv(a, b) {
        }

        function mv(a, b) {
            return !0
        }
        ;

        function nv(a, b, c) {
        }
        ;

        function ov(a, b) {
            var c;
            return c
        }
        ;

        function pv(a) {
        }
        ;

        function qv(a) {
        }
        ;

        function rv(a) {
            Q(I(this), ["listener:!Fn"], arguments);
            rg(this, "process_dom_events", "window", "load");
            Rr(Jc(a))
        }
        ;

        function sv(a) {
            var b;
            return b
        }
        ;

        function tv(a, b) {
            var c;
            var d = !1;
            var e = Ic(c, this.g, d);
            void 0 === e && void 0 !== c && Rg(45);
            return e
        }
        ;

        function uv(a) {
            var b;
            return b
        }
        ;

        function vv(a, b) {
            var c = null
                , d = !1;
            return Ic(c, this.g, d)
        }
        ;

        function wv(a) {
            var b;
            var g = !1;
            return Ic(b, this.g, g)
        }
        ;

        function xv(a) {
            return !1
        }

        var yv;

        function zv(a) {
            var b = !1;
            return b
        }
        ;var Av = function (a) {
            var b;
            return b
        };

        function Bv(a, b) {
            b = void 0 === b ? !0 : b;
            var c;
            return c
        }
        ;

        function Cv() {
            var a = [];
            return Ic(a)
        }
        ;

        function Dv(a) {
            var b = null;
            return b
        }
        ;

        function Ev(a, b) {
            var c;
            return c
        }
        ;

        function Fv(a, b) {
            var c;
            return c
        }
        ;

        function Gv(a, b) {
            var c;
            return c
        }
        ;

        function Hv(a) {
            var b = "";
            return b
        }
        ;

        function Iv(a, b) {
            var c;
            return c
        }
        ;

        function Jv(a) {
            var b = "";
            return b
        }
        ;

        function Kv() {
            rg(this, "get_user_agent");
            return A.navigator.userAgent
        }
        ;

        function Lv(a, b) {
        }
        ;var Mv = {};

        function Nv(a, b, c, d, e, f) {
            f ? e[f] ? (e[f][0].push(c),
                e[f][1].push(d)) : (e[f] = [[c], [d]],
                $b(a, function () {
                    for (var g = e[f][0], h = 0; h < g.length; h++)
                        K(g[h]);
                    g.push = function (l) {
                        K(l);
                        return 0
                    }
                }, function () {
                    for (var g = e[f][1], h = 0; h < g.length; h++)
                        K(g[h]);
                    e[f] = null
                }, b)) : $b(a, c, d, b)
        }

        function Ov(a, b, c, d) {
        }

        var Pv = Object.freeze({
            dl: 1,
            id: 1
        })
            , Qv = {};

        function Rv(a, b, c, d) {
        }
        ;

        function Sv(a) {
            var b = !0;
            return b
        }
        ;var Tv = function () {
            return !1
        }
            , Uv = {
                getItem: function (a) {
                    var b = null;
                    return b
                },
                setItem: function (a, b) {
                    return !1
                },
                removeItem: function (a) {
                }
            };
        var Vv = ["textContent", "value", "tagName", "children", "childElementCount"];

        function Wv(a) {
            var b;
            return b
        }
        ;

        function Xv() {
        }
        ;

        function Yv(a, b) {
            var c;
            return c
        }
        ;

        function Zv(a) {
            var b = void 0;
            return b
        }
        ;

        function $v(a, b) {
            var c = !1;
            return c
        }
        ;

        function aw() {
            var a = "";
            return a
        }
        ;

        function bw() {
            var a = "";
            return a
        }
        ;var cw = Object.freeze(["config", "event", "get", "set"]);

        function dw(a, b, c) {
        }
        ;

        function ew() {
        }
        ;

        function fw(a, b, c, d) {
            d = void 0 === d ? !1 : d;
        }
        ;

        function gw(a, b, c) {
        }
        ;

        function hw(a, b, c, d) {
            var e = this;
            d = void 0 === d ? !0 : d;
            var f = !1;
            return f
        }
        ;

        function iw(a) {
            Q(I(this), ["consentSettings:!DustMap"], arguments);
            for (var b = a.zb(), c = b.length(), d = 0; d < c; d++) {
                var e = b.get(d);
                e !== R.Xd && rg(this, "access_consent", e, "write")
            }
            hi(Jc(a))
        }
        ;

        function jw(a, b, c) {
            return !1
        }
        ;

        function kw(a, b, c) {
            Q(I(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
            var d = ej(a) || {};
            d[b] = Jc(c, this.g);
            var e = a;
            cj || dj();
            bj[e] = d;
        }
        ;

        function lw(a, b, c) {
        }
        ;var mw = function (a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023),
                    b[c++] = e >> 18 | 240,
                    b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224,
                    b[c++] = e >> 6 & 63 | 128),
                    b[c++] = e & 63 | 128)
            }
            return b
        };

        function nw(a, b, c, d) {
            var e = this;
        }
        ;

        function ow(a, b, c) {
        }
        ;var pw = {}
            , qw = {};
        pw.getItem = function (a) {
            var b = null;
            return b
        }
        ;
        pw.setItem = function (a, b) {
        }
        ;
        pw.removeItem = function (a) {
        }
        ;
        pw.clear = function () {
        }
        ;
        var rw = function (a) {
            var b;
            return b
        };

        function sw(a) {
            Q(I(this), ["consentSettings:!DustMap"], arguments);
            var b = Jc(a), c;
            for (c in b)
                b.hasOwnProperty(c) && rg(this, "access_consent", c, "write");
            var d = this.g.g;
            ji(b, d && d.eventId)
        }
        ;var tw = function () {
            var a = new Gg;
            Un() ? (a.add("injectHiddenIframe", Ea),
                a.add("injectScript", Ea)) : (a.add("injectHiddenIframe", Lv),
                a.add("injectScript", Ov));
            var b = gw;
            a.add("Math", kg());
            a.add("Object", Eg);
            a.add("TestHelper", Jg());
            a.add("addConsentListener", Pt);
            a.add("addEventCallback", St);
            a.add("aliasInWindow", mv);
            a.add("assertApi", gg);
            a.add("assertThat", hg);
            a.add("callInWindow", ov);
            a.add("callLater", pv);
            a.add("copyFromDataLayer", tv);
            a.add("copyFromWindow", uv);
            a.add("createArgumentsQueue", vv);
            a.add("createQueue", wv);
            a.add("decodeUri", lg);
            a.add("decodeUriComponent", mg);
            a.add("encodeUri", ng);
            a.add("encodeUriComponent", og);
            a.add("fail", pg);
            a.add("fromBase64", Av, !("atob" in A));
            a.add("generateRandom", qg);
            a.add("getContainerVersion", sg);
            a.add("getCookieValues", Bv);
            a.add("getQueryParameters", Fv);
            a.add("getReferrerQueryParameters", Gv);
            a.add("getReferrerUrl", Hv);
            a.add("getTimestamp", vg);
            a.add("getTimestampMillis", vg);
            a.add("getType", wg);
            a.add("getUrl", Jv);
            a.add("localStorage", Uv, !Tv());
            a.add("isConsentGranted", Sv);
            a.add("logToConsole", Xv);
            a.add("makeInteger", yg);
            a.add("makeNumber", zg);
            a.add("makeString", Ag);
            a.add("makeTableMap", Bg);
            a.add("mock", Dg);
            a.add("parseUrl", Zv);
            a.add("queryPermission", $v);
            a.add("readCharacterSet", aw);
            a.add("readTitle", bw);
            a.add("sendPixel", b);
            a.add("setCookie", hw);
            a.add("setDefaultConsentState", iw);
            a.add("setInWindow", jw);
            a.add("sha256", nw);
            a.add("templateStorage", pw);
            a.add("toBase64", rw, !("btoa" in A));
            a.add("updateConsentState", sw);
            Ig(a, "callOnWindowLoad", rv);
            a.add("JSON", xg(function (c) {
                var d = this.g.g;
                d && d.log.call(this, "error", c)
            }));
            Ig(a, "internal.appendRemoteConfigParameter", nv);
            Ig(a, "internal.getRemoteConfigParameter", Iv);
            Ig(a, "internal.setRemoteConfigParameter", lw);
            Ig(a, "internal.sortRemoteConfigParameters", ow);
            Ig(a, "internal.evaluateMatchingRules", zv),
                Ig(a, "internal.registerGtagCommandListener", dw);
            Ig(a, "internal.addGaSendListener", tu);
            Ig(a, "internal.evaluateFilteringRules", xv);
            Ig(a, "internal.getProductSettingsParameter", Ev);
            Ig(a, "internal.setProductSettingsParameter", kw);
            Ig(a, "internal.addHistoryChangeListener", Cu);
            Ig(a, "internal.sendGtagEvent", fw);
            Un() ? Ig(a, "internal.injectScript", Ea) : Ig(a, "internal.injectScript", Rv);
            Ig(a, "internal.locateUserData", Wv);
            Ig(a, "internal.addFormInteractionListener", hu);
            Ig(a, "internal.addFormSubmitListener", ou);
            Ig(a, "internal.getFlags", ug);
            return function (c) {
                var d;
                if (a.g.hasOwnProperty(c))
                    d = a.get(c, this);
                else {
                    var e;
                    if (e = a.o.hasOwnProperty(c)) {
                        var f = !1
                            , g = this.g.g;
                        if (g) {
                            var h = g.Ic();
                            if (h) {
                                0 !== h.indexOf("__cvt_") && (f = !0);
                            }
                        }
                        e = f
                    }
                    if (e) {
                        var l = a.o.hasOwnProperty(c) ? a.o[c] : void 0;
                        d = l
                    } else
                        throw Error(c + " is not a valid API name.");
                }
                return d
            }
        };
        var uw = function () {
            return !1
        }
            , vw = function () {
            var a = {};
            return function (b, c, d) {
            }
        };
        var ww;

        function xw() {
            var a = ww;
            return function (b, c, d) {
                var e = d && d.event;
                yw(c);
                var f = new qb;
                Oa(c, function (r, t) {
                    var u = Ic(t);
                    void 0 === u && void 0 !== t && Rg(44);
                    f.set(r, u)
                });
                a.g.g.F = hf();
                var g = {
                    Hi: vf(b),
                    eventId: void 0 !== e ? e.id : void 0,
                    zc: void 0 !== e ? function (r) {
                            return e.kb.zc(r)
                        }
                        : void 0,
                    Ic: function () {
                        return b
                    },
                    log: function () {
                    },
                    sk: {
                        index: d && d.index,
                        type: d && d.type
                    }
                };
                if (uw()) {
                    var h = vw()
                        , l = void 0
                        , n = void 0;
                    g.Da = {
                        Ac: {},
                        ac: function (r, t, u) {
                            1 === t && (l = r);
                            7 === t && (n = u);
                            h(r, t, u)
                        },
                        nf: Cg()
                    };
                    g.log = function (r, t) {
                        if (l) {
                            var u = Array.prototype.slice.call(arguments, 1);
                            h(l, 4, {
                                level: r,
                                source: n,
                                message: u
                            })
                        }
                    }
                }
                var p = me(a, g, [b, f]);
                a.g.g.F = void 0;
                p instanceof qa && "return" === p.g && (p = p.o);
                return Jc(p)
            }
        }

        function yw(a) {
            var b = a.gtmOnSuccess
                , c = a.gtmOnFailure;
            Ga(b) && (a.gtmOnSuccess = function () {
                    K(b)
                }
            );
            Ga(c) && (a.gtmOnFailure = function () {
                    K(c)
                }
            )
        }

        function zw() {
            ww.g.g.N = function (a, b, c) {
                S.SANDBOXED_JS_SEMAPHORE = S.SANDBOXED_JS_SEMAPHORE || 0;
                S.SANDBOXED_JS_SEMAPHORE++;
                try {
                    return a.apply(b, c)
                } finally {
                    S.SANDBOXED_JS_SEMAPHORE--
                }
            }
        }

        function Aw(a) {
            void 0 !== a && Oa(a, function (b, c) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d].replace(/^_*/, "");
                    ch[e] = ch[e] || [];
                    ch[e].push(b)
                }
            })
        }
        ;var Bw = encodeURI
            , Y = encodeURIComponent
            , Cw = cc;
        var Dw = function (a, b) {
            if (!a)
                return !1;
            var c = sj(uj(a), "host");
            if (!c)
                return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--,
                        e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f)
                        return !0
                }
            }
            return !1
        };
        var Ew = function (a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
                a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c],
                    e = !0);
            return e ? d : null
        };
        var Ox = {};
        Ox[R.Ob] = "";
        Ox[R.ra] = "";
        Ox[R.Ga] = "";
        Ox[R.fa] = "auto";
        Ox[R.ab] = "/";
        Ox[R.qa] = 63072E3;
        Ox[R.uc] = 30;
        Ox[R.nd] = 1E4;
        Ox[R.Ub] = !0;
        var Px = function (a, b, c, d, e, f) {
            f = void 0 === f ? !1 : f;
            this.s = a;
            this.eventName = b;
            this.C = c;
            this.K = d.eventModel;
            this.Ai = d.containerConfig;
            this.o = d;
            this.Ma = d.getWithConfig(R.rb) ? 1 : 7;
            this.Fe = d.getWithConfig(R.sb) ? 1 : 7;
            this.N = e;
            this.ob = this.Ee = this.yg = this.F = this.ug = this.wg = this.sd = !1;
            this.Fb = 0;
            this.Je = this.Ke = this.rd = !1;
            this.Ne = void 0;
            this.Wb = 0;
            this.sg = this.Ie = this.xg = this.g = this.He = this.Ge = void 0;
            this.Ii = f
        };
        k = Px.prototype;
        k.Ha = function (a, b) {
            void 0 === this.B(a) && (this.K[a] = b)
        }
        ;
        k.kh = function (a, b) {
            b <= this.Ma && (this.K[R.rb] = a,
                this.Ma = b)
        }
        ;
        k.lh = function (a, b) {
            b <= this.Fe && (this.K[R.sb] = a,
                this.Fe = b)
        }
        ;
        k.B = function (a) {
            return void 0 !== this.K[a] ? this.K[a] : void 0 !== this.o.getWithConfig(a) ? this.o.getWithConfig(a) : void 0 !== this.N[a] ? this.N[a] : Ox[a]
        }
        ;
        k.getRemoteConfig = function (a) {
            return void 0 !== this.o.remoteConfig[a] ? this.o.remoteConfig[a] : this.N[a]
        }
        ;
        k.Ld = function (a) {
            var b = this.Eb(R.fd, this.N[R.fd]);
            if (b && void 0 !== b[a || this.eventName])
                return b[a || this.eventName]
        }
        ;
        k.Eb = function (a, b) {
            var c = ej(this.s);
            if (c && c.hasOwnProperty(a))
                return c[a];
            return b
        }
        ;
        k.Qg = function () {
            var a = this.B(R.Aa);
            if ("object" === typeof a)
                return a
        }
        ;
        k.Rg = function () {
            return !!this.Qg()
        }
        ;
        k.abort = function () {
            throw "ABORT";
        }
        ;
        k.Ua = function () {
            return !(!0 !== this.B(R.qc) && "true" !== this.B(R.qc) || !this.B(R.sa))
        }
        ;
        k.zj = function () {
            return this.F || !!this.B(R.Xf)
        }
        ;
        var Qx = !1
            , Rx = function () {
            Qx = !0;
            Qx = !0;
        }
            , Sx = function (a) {
            var b = !1;
            b = a.eventName === R.kc && Yh() && a.Ua();
            return !(!Ub.sendBeacon || a.rd || a.Ke || a.F || a.Ee || a.ob || b || Qx)
        };
        var Tx = function (a) {
            Pg("GA4_EVENT", a)
        };
        var Vx = function (a) {
            return !a || Ux.test(a) || R.ji.hasOwnProperty(a)
        }
            , Wx = function (a) {
            var b = a[R.we];
            if (b)
                return b;
            var c = a[R.vb];
            if (m(c)) {
                if ("function" === typeof URL)
                    try {
                        return (new URL(c)).pathname
                    } catch (e) {
                        return
                    }
                var d = uj(c);
                return d.hostname ? sj(d, "path") : void 0
            }
        }
            , Xx = function (a, b, c) {
            if (c)
                switch (c.type) {
                    case "event_name":
                        return a;
                    case "const":
                        return c.const_value;
                    case "event_param":
                        var d = c.event_param.param_name
                            , e = b[d];
                        return e
                }
        }
            , Yx = function (a, b, c) {
            for (var d = c.event_param_ops || [], e = 0; e < d.length; e++) {
                var f = d[e];
                if (f.edit_param) {
                    var g = f.edit_param.param_name, h = Xx(a, b, f.edit_param.param_value), l;
                    if (h) {
                        var n = Number(h);
                        l = isNaN(n) ? h : n
                    } else
                        l = h;
                    b[g] = l
                } else
                    f.delete_param && delete b[f.delete_param.param_name]
            }
        }
            , Zx = function (a, b) {
            var c = b.values || []
                , d = Xx(a.eventName, a.K, c[0])
                , e = Xx(a.eventName, a.K, c[1])
                , f = b.type;
            if ("eqi" === f || "swi" === f || "ewi" === f || "cni" === f)
                d = "string" === typeof d ? d.toLowerCase() : d,
                    e = "string" === typeof e ? e.toLowerCase() : e;
            var g = !1;
            switch (f) {
                case "eq":
                case "eqi":
                    g = String(d) == String(e);
                    break;
                case "sw":
                case "swi":
                    g = 0 == String(d).indexOf(String(e));
                    break;
                case "ew":
                case "ewi":
                    g = Jt(d, e);
                    break;
                case "cn":
                case "cni":
                    g = 0 <= String(d).indexOf(String(e));
                    break;
                case "lt":
                    g = Number(d) < Number(e);
                    break;
                case "le":
                    g = Number(d) <= Number(e);
                    break;
                case "gt":
                    g = Number(d) > Number(e);
                    break;
                case "ge":
                    g = Number(d) >= Number(e);
                    break;
                case "re":
                case "rei":
                    g = Lt(d, e, "rei" === f)
            }
            return !!b.negate !== g
        }
            , $x = function (a, b) {
            var c = b.event_name_predicate;
            if (c && !Zx(a, c))
                return !1;
            var d = b.conditions || [];
            if (0 === d.length)
                return !0;
            for (var e = 0; e < d.length; e++) {
                for (var f = d[e].predicates || [], g = !0, h = 0; h < f.length; h++)
                    if (!Zx(a, f[h])) {
                        g = !1;
                        break
                    }
                if (g)
                    return !0
            }
            return !1
        }
            , Ux = /^(_|ga_|google_|gtag\.|firebase_).*$/
            , ay = !1;
        ay = !0;
        var by = function (a) {
            var b = 0
                , c = 0;
            return {
                start: function () {
                    b = Za()
                },
                stop: function () {
                    c = this.get()
                },
                get: function () {
                    var d = 0;
                    a.jf() && (d = Za() - b);
                    return d + c
                }
            }
        }
            , cy = function () {
            this.g = void 0;
            this.o = 0;
            this.isActive = this.isVisible = this.s = !1;
            this.F = this.C = void 0
        };
        k = cy.prototype;
        k.mi = function (a) {
            var b = this;
            if (!this.g) {
                this.s = J.hasFocus();
                this.isVisible = !J.hidden;
                this.isActive = !0;
                var c = function (d, e, f) {
                    dc(d, e, function (g) {
                        b.g.stop();
                        f(g);
                        b.jf() && b.g.start()
                    })
                };
                c(A, "focus", function () {
                    b.s = !0
                });
                c(A, "blur", function () {
                    b.s = !1
                });
                c(A, "pageshow", function (d) {
                    b.isActive = !0;
                    d.persisted && Rg(56);
                    b.F && b.F()
                });
                c(A, "pagehide", function () {
                    b.isActive = !1;
                    b.C && b.C()
                });
                c(J, "visibilitychange", function () {
                    b.isVisible = !J.hidden
                });
                a.Ua() && -1 === (Ub.userAgent || "").indexOf("Firefox") && -1 === (Ub.userAgent || "").indexOf("FxiOS") && c(A, "beforeunload", function () {
                    Rx()
                });
                this.wf();
                this.o = 0
            }
        }
        ;
        k.wf = function () {
            this.o += this.Kd();
            this.g = by(this);
            this.jf() && this.g.start()
        }
        ;
        k.Yj = function (a) {
            a.Wb = this.Kd()
        }
        ;
        k.kj = function (a) {
            a.Wb = 0;
            this.wf();
            this.o = 0
        }
        ;
        k.jf = function () {
            return this.s && this.isVisible && this.isActive
        }
        ;
        k.ej = function () {
            return this.o + this.Kd()
        }
        ;
        k.Kd = function () {
            return this.g && this.g.get() || 0
        }
        ;
        k.Mj = function (a) {
            this.C = a
        }
        ;
        k.gh = function (a) {
            this.F = a
        }
        ;

        function dy() {
            return A.gaGlobal = A.gaGlobal || {}
        }

        var ey = function () {
            var a = dy();
            a.hid = a.hid || Ka();
            return a.hid
        }
            , fy = function (a, b) {
            var c = dy();
            if (void 0 == c.vid || b && !c.from_cookie)
                c.vid = a,
                    c.from_cookie = b
        };
        var iy = function (a, b) {
            var c = !0;
            return c
        }
            , ky = function (a) {
            var b;
            return b
        }
            , gy = function (a, b, c) {
            var d = String(c.B(R.fa))
                , e = String(c.B(R.ab))
                , f = Number(c.B(R.qa))
                , g = c.B(R.Pb)
                , h = {
                Ja: R.I,
                domain: d,
                path: e,
                expires: f ? new Date(Za() + 1E3 * f) : void 0,
                flags: "" + c.B(R.Ga)
            };
            if (!1 === g && ly(c) === b)
                return !0;
            var l = mk(b, my[0], d, e);
            return 1 !== fk(a, l, h)
        }
            , jy = function (a, b) {
            var c = "" + b.B(R.fa)
                , d = "" + b.B(R.ab)
                , e = lk(a, c, d, my, R.I);
            if (!e) {
                var f = String(b.B(R.Ob));
                f && f != a && (e = lk(f, c, d, my, R.I))
            }
            return e
        }
            , hy = function (a) {
            return a.B(R.ra) + "_ga_ecid"
        }
            , oy = function (a, b) {
            return gy(ny(b), a, b)
        }
            , ly = function (a) {
            return jy(ny(a), a)
        }
            , ny = function (a) {
            return String(a.B(R.ra)) + "_ga"
        }
            , my = ["GA1"];
        var ry = function (a, b) {
            var c = py(b)
                , d = String(b.B(R.fa))
                , e = String(b.B(R.ab))
                , f = Number(b.B(R.qa))
                , g = mk(a, qy[0], d, e)
                , h = {
                Ja: R.I,
                domain: d,
                path: e,
                expires: f ? new Date(Za() + 1E3 * f) : void 0,
                flags: String(b.B(R.Ga))
            };
            return 1 !== fk(c, g, h)
        }
            , sy = function (a) {
            var b = py(a)
                , c = String(a.B(R.fa))
                , d = String(a.B(R.ab));
            return lk(b, c, d, qy, R.I)
        }
            , qy = ["GS1"]
            , py = function (a) {
            return String(a.B(R.ra)) + "_ga_" + a.s.substr(2)
        }
            , ty = function (a) {
            var b;
            var c = a.K[R.vc]
                , d = a.K[R.ye]
                , e = !!a.K[R.kd];
            if (c && d) {
                var f = [c, d, Qa(a.K[R.xe]), a.C, a.Fb];
                b = f.join(".")
            } else
                b = void 0;
            return b
        };
        var uy = function (a) {
            var b = a.B(R.ia)
                , c = a.getRemoteConfig(R.ia);
            if (c === b)
                return c;
            var d = Hc(b);
            c && c[R.O] && (d[R.O] = (d[R.O] || []).concat(c[R.O]));
            return d
        }, vy = function (a, b, c, d) {
            var e = $k(!0);
            if ("1" !== e._up)
                return {};
            var f = e[b], g = e[d], h;
            a.g && (h = e[c]);
            return {
                clientId: f,
                Lg: h,
                jh: g
            }
        }, wy = function (a, b, c, d) {
            var e = $k(!0)
                , f = e[b];
            f && (a.kh(f, 2),
                oy(f, a));
            var g = e._z;
            g && (a.He = g);
            var h = e[c];
            a.g && h && (a.lh(h, 2),
                iy(h, a));
            var l = e[d];
            l && ry(l, a);
            return a.g ? !!(f && h && l) : !(!f || !l)
        }, xy, yy = !1;
        var zy = !1
            , Ay = function (a) {
            var b = uy(a) || {}
                , c = ny(a)
                , d = hy(a)
                , e = py(a);
            hl(b[R.Sb], !!b[R.O]) && wy(a, c, d, e) && (zy = !0);
            if (b[R.O]) {
                var f = function () {
                    var g = {}
                        , h = ly(a);
                    h && (g[c] = h);
                    if (a.g) {
                        var l = ky(a);
                        l && (g[d] = l)
                    }
                    var n = sy(a);
                    n && (g[e] = n);
                    var p = Wj("FPLC", void 0, void 0, R.I);
                    p.length && (g._fplc = p[0]);
                    return g
                };
                yy ? el(f, b[R.O], b[R.Tb], !!b[R.ub], xy) : el(f, b[R.O], b[R.Tb], !!b[R.ub])
            }
        }
            , Cy = function (a) {
            if (!a.B(R.hb))
                return {};
            var b = ny(a)
                , c = hy(a)
                , d = py(a);
            fl(function () {
                var e;
                if (ki("analytics_storage"))
                    e = {};
                else {
                    var f = {}
                        , g = (f._up = "1",
                        f[b] = a.K[R.rb],
                        f[d] = ty(a),
                        f);
                    a.g && (g[c] = a.K[R.sb]);
                    e = g
                }
                return e
            }, 1);
            if (!ki("analytics_storage") && By())
                return vy(a, b, c, d);
            return {}
        }
            , By = function () {
            var a = rj(A.location, "host")
                , b = rj(uj(J.referrer), "host");
            return a && b ? a === b || 0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a) ? !0 : !1 : !1
        };
        var Dy = function () {
            var a = Za()
                , b = a + 864E5
                , c = 20
                , d = 5E3;
            return function () {
                var e = Za();
                e >= b && (b = e + 864E5,
                    d = 5E3);
                if (1 > d)
                    return !1;
                c = Math.min(c + (e - a) / 1E3 * 5, 20);
                a = e;
                if (1 > c)
                    return !1;
                d--;
                c--;
                return !0
            }
        };
        var Ey = !1;
        Ey = !0;
        var Fy = "" + Ka()
            , Gy = !1
            , Hy = void 0;
        var Iy = function () {
            if (Ga(A.__uspapi)) {
                var a = "";
                try {
                    A.__uspapi("getUSPData", 1, function (b, c) {
                        if (c && b) {
                            var d = b.uspString;
                            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                        }
                    })
                } catch (b) {
                }
                return a
            }
        };
        var Jy = function (a, b) {
            if (b.Ua()) {
                var c = Iy();
                c && (a.us_privacy = c);
                var d = Eo();
                d && (a.gdpr = d);
                var e = Co();
                e && (a.gdpr_consent = e)
            }
        }
            , Ly = function (a, b) {
            if (Yh() && (a.gcs = li(),
            b.Ie && (a.gcu = "1"),
                b.Ua())) {
                Zh() && (a.gcd = mi());
                var c = b.B(R.V);
                a.adr = void 0 !== c && !1 !== c ? "1" : "0";
                b.Ie && (a.gcut = Ky[b.sg || ""]);
            }
        }
            , My = function (a, b, c) {
            void 0 === c && (c = {});
            if ("object" === typeof b)
                for (var d in b)
                    My(a + "." + d, b[d], c);
            else
                c[a] = b;
            return c
        }
            , Ny = function (a) {
            var b = "https://www.google-analytics.com/g/collect"
                , c = Qn(a.B(R.sa), "/g/collect");
            if (c)
                return c;
            var d = !0;
            ki(R.D) && ki(R.I) || (d = !1);
            var e = !1 !== a.B(R.Ea);
            e = !0;
            var f = a.Eb(R.eb, a.B(R.eb))
                , g = a.Eb(R.Rb, a.B(R.Rb));
            f && !g && e && !1 !== a.B(R.mc) && qq() && d && (b = "https://analytics.google.com/g/collect");
            return b
        }
            , Oy = !1;
        var Py = {}
            , Ky = (Py[R.D] = "1",
            Py[R.I] = "2",
            Py)
            , Qy = {};
        Qy[R.gi] = "tid";
        Qy[R.rb] = "cid";
        Qy[R.tb] = "ul";
        Qy[R.qe] = "_fid";
        Qy[R.gg] = "tt";
        Qy[R.te] = "ir";
        var Ry = {};
        Ry[R.vc] = "sid";
        Ry[R.ye] = "sct";
        Ry[R.xe] = "seg";
        Ry[R.vb] = "dl";
        Ry[R.Qa] = "dr";
        Ry[R.ld] = "dt";
        Ry[R.ca] = "cu";
        Ry[R.xb] = "uid";
        var Sy = {};
        Sy[R.Mf] = "cc";
        Sy[R.Nf] = "ci";
        Sy[R.Of] = "cm";
        Sy[R.Pf] = "cn";
        Sy[R.Qf] = "cs";
        Sy[R.Rf] = "ck";
        var Ty = function (a, b, c) {
            function d(z, B) {
                if (void 0 !== B && !R.hi.hasOwnProperty(z)) {
                    null === B && (B = "");
                    var C;
                    if ("_" === z.charAt(0)) {
                        e[z] = Bf(B, 300)
                    } else if (Qy[z])
                        C = Qy[z],
                            e[C] = Bf(B, 300);
                    else if (Ry[z])
                        C = Ry[z],
                            g[C] = Bf(B, 300);
                    else if (!t(z, B)) {
                        r(z, B)
                    }
                }
            }

            var e = {}
                , f = {}
                , g = {};
            e.v = "2";
            e.tid = a.s;
            e.gtm = Yn();
            e._p = ey();
            a.Ne && (e.sr = a.Ne);
            a.He && (e._z = a.He);
            c && (e.em = c);
            a.ob && (e._gaz = 1);
            Ly(e, a);
            Jy(e, a);
            a.xg && (e.gtm_up = "1");
            if (Oy) {
                var h = kb(Zi(a.o, R.W, 1), ".");
                h && (e.gdid = h)
            }
            f.en = Bf(a.eventName, 40);
            a.sd && (f._fv = a.wg ? 2 : 1);
            a.ug && (f._nsi = 1);
            a.F && (f._ss = a.yg ? 2 : 1);
            a.rd && (f._c = 1);
            0 < a.Wb && (f._et = a.Wb);
            if (a.Je) {
                var l = a.B(R.Z);
                if (Ia(l))
                    for (var n = 0; n < l.length && 200 > n; n++)
                        f["pr" + (n + 1)] = Gf(l[n])
            }
            a.Ge && (f._eu = a.Ge);
            if (Oy) {
                var p = kb(Zi(a.o, R.W, 2), ".");
                p && (f.edid = p)
            }
            for (var r = function (z, B) {
                z = Bf(z, 40);
                var C = "ep." + z
                    , F = "epn." + z;
                z = Ha(B) ? F : C;
                var D = Ha(B) ? C : F;
                f.hasOwnProperty(D) && delete f[D];
                f[z] = Bf(B, 100)
            }, t = function (z, B) {
                var C = z.split(".");
                if (z === R.Aa && "object" !== typeof B)
                    return r(z, B),
                        !0;
                if (C[0] === R.Aa) {
                    if ((1 < C.length || "object" === typeof B) && a.Ua()) {
                        var F = My(z, B);
                        Oa(F, function (D, E) {
                            return void r(D, E)
                        })
                    }
                    return !0
                }
                return !1
            }, u = 0; u < R.ig.length; ++u) {
                var q = R.ig[u];
                d(q, a.B(q))
            }
            a.Je && d(R.ca, a.B(R.ca));
            Oa(a.Ai, d);
            Oa(a.K, d);
            var y = a.B(R.Ra) || {};
            !1 !== a.B(R.Ea) && pq() || (y._npa = "1");
            Oa(y, function (z, B) {
                if (void 0 !== B && (null === B && (B = ""),
                b[z] !== B)) {
                    if (z !== R.xb || g.uid) {
                        var C = (Ha(B) ? "upn." : "up.") + Bf(z, 24);
                        f[C] = Bf(B, 36)
                    } else
                        g.uid = Bf(B, 36);
                    b[z] = B
                }
            });
            var x = !1;
            return If.call(this, {
                Wa: e,
                Hb: g,
                K: f
            }, Ny(a), a.Ua(), x) || this
        };
        ma(Ty, If);

        var Uy = function (a, b) {
            return a.replace(/\$\{([^\}]+)\}/g, function (c, d) {
                return b[d] || c
            })
        }
            , Vy = function (a) {
            var b = a.search;
            return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
        }
            , Wy = function (a) {
            var b = {}
                , c = ""
                , d = a.pathname.indexOf("/g/collect");
            0 <= d && (c = a.pathname.substring(0, d));
            b.transport_url = a.protocol + "//" + a.hostname + c;
            return b
        }
            , Xy = function (a, b) {
            var c = new A.XMLHttpRequest;
            c.withCredentials = !0;
            var d = b ? "POST" : "GET"
                , e = ""
                , f = 0
                , g = uj(a)
                , h = Wy(g)
                , l = Vy(g);
            c.onprogress = function (n) {
                if (200 === c.status) {
                    e += c.responseText.substring(f);
                    f = n.loaded;
                    for (var p = Uy(e, h), r = p.indexOf("\n\n"); -1 !== r;) {
                        var t;
                        a: {
                            var u = da(p.substring(0, r).split("\n"))
                                , q = u.next().value
                                , v = u.next().value;
                            if (q.startsWith("event: message") && v.startsWith("data: "))
                                try {
                                    t = JSON.parse(v.substring(v.indexOf(":") + 1));
                                    break a
                                } catch (M) {
                                }
                            t = void 0
                        }
                        if (t) {
                            var w = t.send_pixel || [];
                            if (Array.isArray(w))
                                for (var y = 0; y < w.length; y++) {
                                    var x = w[y]
                                        , z = Zn('', 0);
                                    if (1 === z) {
                                        var B = Math.floor(2 * Math.random()) + 1, C, F = x, D = B,
                                            E = 0 < F.indexOf("?") ? "&" : "?";
                                        C = "" + F + E + "gtmexpsb=" + D;
                                        2 === B ? kc(C) : cc(C)
                                    } else
                                        2 === z ? kc(x) : cc(x)
                                }
                        }
                        p = p.substring(r + 2);
                        r = p.indexOf("\n\n")
                    }
                    e = p
                }
            }
            ;
            c.open(d, l);
            c.send(b);
        };
        var az = function (a, b, c, d) {
            var e = a + "?" + b;
            Yy && (d = !(0 === e.indexOf("https://www.google-analytics.com/g/collect") || 0 === e.indexOf("https://analytics.google.com/g/collect")));
            Zy && d && !Qx ? Xy(e, c) : $y(a, b, c)
        }
            , bz = function (a) {
            return a && 0 === a.indexOf("google.") && "google.com" != a ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%", a) : void 0
        }
            , Zy = !1;
        Zy = !0;
        var Yy = !1;
        var cz = function () {
            this.C = 1;
            this.F = {};
            this.g = new Jf;
            this.o = -1
        };
        cz.prototype.s = function (a, b) {
            var c = this, d;
            try {
                d = new Ty(a, this.F, b)
            } catch (n) {
                a.abort()
            }
            var e = Sx(a);
            e && this.g.C(d) || this.flush();
            if (e && this.g.add(d)) {
                if (0 > this.o) {
                    var f = A, g = f.setTimeout, h;
                    a.Ua() ? dz ? (dz = !1,
                        h = ez) : h = fz : h = 5E3;
                    this.o = g.call(f, function () {
                        return c.flush()
                    }, h)
                }
            } else {
                var l = Rf(d, this.C++);
                az(d.o, l.sf, l.body, d.C);
                gz(d, a.Ee, a.ob, String(a.Eb(R.jd, a.B(R.jd))))
            }
        }
        ;
        cz.prototype.add = function (a) {
            a.Ke ? this.N(a) : this.s(a)
        }
        ;
        cz.prototype.flush = function () {
            if (this.g.events.length) {
                var a = Sf(this.g, this.C++);
                az(this.g.g, a.sf, a.body, this.g.o);
                this.g = new Jf;
                0 <= this.o && (A.clearTimeout(this.o),
                    this.o = -1)
            }
        }
        ;
        cz.prototype.N = function (a) {
            var b = this
                , c = a.Qg();
            c ? Mi(c, function (d) {
                b.s(a, d)
            }) : this.s(a)
        }
        ;
        var gz = function (a, b, c, d) {
            function e(h) {
                f.push(h + "=" + encodeURIComponent("" + a.Wa[h]))
            }

            if (b || c) {
                var f = [];
                e("tid");
                e("cid");
                e("gtm");
                f.push("aip=1");
                a.Hb.uid && f.push("uid=" + encodeURIComponent("" + a.Hb.uid));
                b && ($y("https://stats.g.doubleclick.net/g/collect", "v=2&" + f.join("&")),
                    ei("https://stats.g.doubleclick.net/g/collect?v=2&" + f.join("&")));
                if (c) {
                    f.push("z=" + Ka());
                    var g = bz(d);
                    g && cc(g + f.join("&"))
                }
            }
        }
            , $y = function (a, b, c) {
            var d = a + "?" + b;
            c ? Ub.sendBeacon && Ub.sendBeacon(d, c) : kc(d)
        }
            , ez = Zn('', 500)
            , fz = Zn('', 5E3)
            , dz = !0;
        var hz = window
            , iz = document
            , jz = function (a) {
            var b = hz._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === hz["ga-disable-" + a])
                return !0;
            try {
                var c = hz.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs)
                    return !0
            } catch (f) {
            }
            for (var d = Sj("AMP_TOKEN", String(iz.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e])
                    return !0;
            return iz.getElementById("__gaOptOutExtension") ? !0 : !1
        };
        var kz = {};
        var lz = function (a, b) {
            var c = R.D;
            ki(c) || oi(function () {
                b.Ie = !0;
                b.sg = c;
                a.zg(b)
            }, c)
        };
        kz.ii = "";
        var mz = function (a, b) {
            this.ob = a;
            this.Wb = b;
            this.Ma = new cz;
            this.o = void 0;
            this.F = new cy;
            this.g = this.C = this.s = void 0;
            this.N = !1
        };
        k = mz.prototype;
        k.Gj = function (a, b, c) {
            var d = this
                , e = !1;
            if (c.eventModel[R.Vb]) {
                e = !0;
                if ("_" === a.charAt(0))
                    return;
                a !== R.za && a !== R.Na && Vx(a) && Rg(58);
                nz(c)
            }
            var f = new Px(this.ob, a, b, c, this.Wb, e)
                , g = [R.I]
                , h = !1;
            h = f.Ua();
            (f.Eb(R.eb, f.B(R.eb)) || h) && g.push(R.D);
            pi(function () {
                d.Hj(f)
            }, g)
        }
        ;
        k.Hj = function (a) {
            this.g = a;
            try {
                jz(a.s) && (Rg(28),
                    a.abort());
                0 <= kz.ii.replace(/\s+/g, "").split(",").indexOf(a.eventName) && (Rg(33),
                    a.abort());
                var b = a.Ld();
                b && b.blacklisted && (Rg(34),
                    a.abort());
                var c = J.location.protocol;
                "http:" != c && "https:" != c && (Rg(29),
                    a.abort());
                Ub && "preview" == Ub.loadPurpose && (Rg(30),
                    a.abort());
                var d = S.grl;
                d || (d = Dy(),
                    S.grl = d);
                d() || (Rg(35),
                    a.abort());
                this.ni(a);
                this.F.Yj(a);
                var g = this.fh, h;
                b: {
                    if (!a.B(R.hb) || ki(R.I) || 1 === a.Ma)
                        break b;
                    a.xg = !0;
                }
                a.eventName === R.za ? (a.B(R.hb) && Fl(["aw", "dc"]),
                    Ay(a),
                    h = Cy(a)) : h = {};
                g.call(this, h);
                a.eventName == R.za && (a.Ii && 0 < aj(a.o).length && (Rg(68),
                1 < S.configCount && Rg(69)),
                a.B(R.Ub) || a.abort(),
                a.o.eventModel[R.W] && (a.o.containerConfig[R.W] = a.o.eventModel[R.W],
                    a.o.eventModel[R.W] = void 0),
                    a.eventName = R.kc);
                var l = this.o
                    , n = this.s
                    , p = this.C
                    , r = this.F
                    , t = sy(a);
                t || (t = p);
                var u = Qa(a.B(R.uc)), q;
                q = Qa(a.B(R.nd));
                var v;
                a: {
                    if (t) {
                        var w = t.split(".");
                        if (!(5 > w.length || 6 < w.length)) {
                            v = {
                                sessionId: w[0],
                                zf: Number(w[1]),
                                Sd: !!Number(w[2]),
                                kf: Number(w[3]),
                                Fb: Number(w[4] || 0),
                                Nc: "1" === w[5]
                            };
                            break a
                        }
                    }
                    v = void 0
                }
                v && v.Fb && (a.Fb = Math.max(0, v.Fb - Math.max(0, a.C - v.kf)));
                var y = !1;
                v || (y = a.sd = !0,
                    v = {
                        sessionId: String(a.C),
                        zf: 1,
                        Sd: !1,
                        kf: a.C,
                        Nc: !1
                    });
                a.C > v.kf + 60 * u && (y = !0,
                    v.sessionId = String(a.C),
                    v.zf++,
                    v.Sd = !1);
                if (y)
                    a.F = !0,
                        r.kj(a);
                else if (r.ej() > q || a.eventName == R.kc)
                    v.Sd = !0;
                a.Ha(R.vc, v.sessionId);
                a.Ha(R.ye, v.zf);
                a.Ha(R.xe, v.Sd ? 1 : 0);
                var x = a.B(R.rb)
                    , z = a.Ma;
                x || (x = ly(a),
                    z = 3);
                x || (x = l,
                    z = 4);
                if (!x) {
                    var B = ki(R.I)
                        , C = dy();
                    x = !C.from_cookie || B ? C.vid : void 0;
                    z = 5
                }
                x ? x = "" + x : (a.sd = a.ug = !0,
                    x = ik(),
                    z = 6);
                a.kh(x, z);
                a: {
                }
                var E = ""
                    , M = J.location;
                if (M) {
                    var N = M.pathname || "";
                    "/" != N.charAt(0) && (N = "/" + N);
                    E = M.protocol + "//" + M.hostname + N + M.search
                }
                a.Ha(R.vb, E);
                var O;
                a: {
                    var L = Wj("_opt_expid", void 0, void 0, R.I)[0];
                    if (L) {
                        var P = decodeURIComponent(L).split("$");
                        if (3 === P.length) {
                            O = P[2];
                            break a
                        }
                    }
                    if (void 0 !== S.ga4_referrer_override)
                        O = S.ga4_referrer_override;
                    else {
                        var H = kh("gtm.gtagReferrer." + a.s);
                        O = H ? "" + H : J.referrer
                    }
                }
                var ba = O;
                ba && a.Ha(R.Qa, ba);
                a.Ha(R.ld, J.title);
                a.Ha(R.tb, (Ub.language || "").toLowerCase());
                var X = A.screen
                    , fa = X ? X.width : 0
                    , xa = X ? X.height : 0;
                a.Ne = fa + "x" + xa;
                var V = !1 !== a.B(R.Ea);
                V = !0;
                if (V && !1 !== a.B(R.mc) && qq() && ki(R.D)) {
                    var aa = a.Eb(R.eb, a.B(R.eb))
                        , va = a.Eb(R.Rb, a.B(R.Rb));
                    a.zj() && (a.Ee = !!aa);
                    aa && !va && 0 === a.Fb && (a.Fb = 60,
                        a.ob = !0)
                }
                oz(a);
                a.Je = R.jg.hasOwnProperty(a.eventName);
                for (var Fa = a.B(R.ue) || [], eb = 0; eb < Fa.length; eb++) {
                    var Xa = Fa[eb];
                    if (Xa.rule_result) {
                        a.Ha(R.gg, Xa.traffic_type);
                        Tx(3);
                        break
                    }
                }
                if (a.B(R.sa)) {
                    var Rd = uy(a) || {}
                        , Ac = hl(Rd[R.Sb], !!Rd[R.O]) ? $k(!0)._fplc : void 0;
                    a.K._fplc = Ac || (0 < Wj("FPLC", void 0, void 0, R.I).length ? void 0 : "0")
                }
                if (void 0 === a.B(R.te)) {
                    var Kf = a.B(R.md), Be, Sd;
                    a: {
                        if (zy) {
                            var Bc = uy(a) || {};
                            if (Bc && Bc[R.O])
                                for (var Lf = sj(uj(a.B(R.Qa)), "host", !0), Td = Bc[R.O], Sc = 0; Sc < Td.length; Sc++)
                                    if (Td[Sc] instanceof RegExp) {
                                        if (Td[Sc].test(Lf)) {
                                            Sd = !0;
                                            break a
                                        }
                                    } else if (0 <= Lf.indexOf(Td[Sc])) {
                                        Sd = !0;
                                        break a
                                    }
                        }
                        Sd = !1
                    }
                    var Cc;
                    if (!(Cc = Sd))
                        if (Ey)
                            Cc = !1;
                        else {
                            var Hh = sj(uj(a.B(R.Qa)), "host", !0), Dc;
                            var Ce = String(a.B(R.fa));
                            if ("none" !== Ce)
                                if ("auto" !== Ce)
                                    Dc = Ce;
                                else {
                                    if (!Gy) {
                                        for (var Ih = String(a.B(R.ab)), Ec = ck(), Tc = 0; Tc < Ec.length; Tc++)
                                            if ("none" !== Ec[Tc]) {
                                                var Jh = String(a.B(R.ra)) + "_ga_autodomain";
                                                if (0 === fk(Jh, Fy, {
                                                    Ja: R.I,
                                                    domain: Ec[Tc],
                                                    path: Ih
                                                })) {
                                                    fk(Jh, void 0, {
                                                        Ja: R.I,
                                                        domain: Ec[Tc],
                                                        path: Ih
                                                    });
                                                    Hy = Ec[Tc];
                                                    break
                                                }
                                            }
                                        Gy = !0
                                    }
                                    Dc = Hy
                                }
                            else
                                Dc = void 0;
                            var Ba = Dc;
                            Cc = Ba ? 0 <= Hh.indexOf(Ba) : !1
                        }
                    if (!(Be = Cc)) {
                        var na;
                        if (na = Kf)
                            a: {
                                for (var $a = Kf.include_conditions || [], Uc = 0; Uc < $a.length; Uc++)
                                    if ($a[Uc].test(a.B(R.Qa))) {
                                        na = !0;
                                        break a
                                    }
                                na = !1
                            }
                        Be = na
                    }
                    Be && (a.Ha(R.te, 1),
                        Tx(4))
                }
                if (a.eventName == R.Na) {
                    var od = a.B(R.Pa);
                    a.B(R.cb)(a.B(od));
                    a.abort()
                }
                if (a.K[R.zd])
                    delete a.K[R.zd];
                else {
                    var yb = a.B(R.ke);
                    if (yb) {
                        for (var gc = yb.edit_rules || [], zb = 0; zb < gc.length; zb++)
                            a: {
                                var Wa = a
                                    , T = gc[zb];
                                if ($x(Wa, T)) {
                                    if (T.new_event_name) {
                                        var Ud = "string" === typeof T.new_event_name ? String(T.new_event_name) : Xx(Wa.eventName, Wa.K, T.new_event_name);
                                        if (Vx(Ud))
                                            break a;
                                        Wa.eventName = String(Ud)
                                    }
                                    Yx(Wa.eventName, Wa.K, T);
                                    if (ay) {
                                        Wa.K[R.zd] = !0;
                                        var De = Wa.eventName
                                            , La = Wa.K
                                            , Mf = Wa.s;
                                        kr().insert("event", [La, De], Mf);
                                        Tx(2);
                                        Wa.abort()
                                    } else
                                        Tx(2)
                                }
                            }
                        for (var Vd = yb.synthesis_rules || [], pd = 0; pd < Vd.length; pd++) {
                            var Ee = a
                                , Vc = Vd[pd];
                            if ($x(Ee, Vc)) {
                                var Fe = Vc.new_event_name;
                                if (!Vx(Fe)) {
                                    var Wc = Vc.merge_source_event_params ? Hc(Ee.K) : {};
                                    Wc[R.zd] = !0;
                                    Yx(Fe, Wc, Vc);
                                    var Wd = Fe
                                        , Nf = Wc
                                        , Kh = Ee.s;
                                    kr().insert("event", [Nf, Wd], Kh);
                                    Tx(1)
                                }
                            }
                        }
                    }
                }
                var Ab = a.K[R.ze];
                if (Ia(Ab))
                    for (var ab = 0; ab < Ab.length; ab++)
                        Tx(Ab[ab]);
                var Ra = Qg("GA4_EVENT");
                Ra && (a.Ge = Ra);
                var Sa = this.fh, Ib = this.o, Ge = this.s, Xc;
                var Xd = ty(a);
                Xd ? (ry(Xd, a) || (Rg(25),
                    a.abort()),
                    Xc = Xd) : Xc = void 0;
                var vz = Xc, Lh;
                var qd = a.K[R.rb];
                Ib && qd === Ib ? Lh = qd : qd ? (qd = "" + qd,
                oy(qd, a) || (Rg(31),
                    a.abort()),
                    fy(qd, ki(R.I)),
                    Lh = qd) : (Rg(32),
                    a.abort(),
                    Lh = "");
                var wz = Lh, Of;
                a: {
                    Of = void 0
                }
                Sa.call(this, {
                    clientId: wz,
                    Lg: Of,
                    jh: vz
                });
                this.Xj();
                a.Ua() && ("page_view" === a.eventName || a.rd) && lz(this, a);
                this.F.wf();
                this.zg(a);
                a.o.onSuccess()
            } catch (Bz) {
                a.o.onFailure()
            }
            delete Og.GA4_EVENT
        }
        ;
        k.zg = function (a) {
            this.Ma.add(a)
        }
        ;
        k.fh = function (a) {
            var b = a.clientId
                , c = a.Lg
                , d = a.jh;
            b && d && (this.o = b,
                this.s = c,
                this.C = d)
        }
        ;
        k.flush = function () {
            this.Ma.flush()
        }
        ;
        k.Xj = function () {
            var a = this;
            if (!this.N) {
                var b = ki(R.I);
                ni([R.I], function () {
                    var c = ki(R.I);
                    if (b ^ c && a.g && a.C && a.o) {
                        var d = a.o;
                        if (c) {
                            var e = ly(a.g);
                            e ? (a.o = e,
                                a.C = sy(a.g),
                            a.g.g && (a.s = ky(a.g))) : (oy(a.o, a.g),
                                ry(a.C, a.g),
                                fy(a.o, !0),
                            a.g.g && a.s && iy(a.s, a.g));
                        } else {
                            a.C = void 0;
                            a.o = void 0;
                            a.s = void 0;
                        }
                        b = c
                    }
                });
                this.N = !0
            }
        }
        ;
        k.ni = function (a) {
            a.eventName !== R.Na && this.F.mi(a)
        }
        ;
        var oz = function (a) {
            var b = function (c) {
                return !!c && c.conversion
            };
            a.rd = b(a.Ld());
            a.sd && (a.wg = b(a.Ld("first_visit")));
            a.F && (a.yg = b(a.Ld("session_start")))
        };

        function nz(a) {
            delete a.eventModel[R.Vb];
            pz(a.eventModel)
        }

        var pz = function (a) {
            Oa(a, function (c) {
                "_" === c.charAt(0) && delete a[c]
            });
            var b = a[R.Ra] || {};
            Oa(b, function (c) {
                "_" === c.charAt(0) && delete b[c]
            })
        };
        var qz = function (a) {
            if ("prerender" == J.visibilityState)
                return !1;
            a();
            return !0
        }
            , rz = function (a) {
            if (!qz(a)) {
                var b = !1
                    , c = function () {
                    !b && qz(a) && (b = !0,
                        ec(J, "visibilitychange", c),
                        Rg(55))
                };
                dc(J, "visibilitychange", c);
                Rg(54)
            }
        };
        var sz = function (a, b, c) {
            nr(b, c, a)
        }
            , tz = function (a, b, c) {
            nr(b, c, a, !0)
        }
            , xz = function (a, b) {
            var c = new mz(a, b);
            rz(function () {
                uz(a, c)
            });
        };

        function uz(a, b) {
            var c = b.F;
            mr(a, function (d, e, f, g) {
                b.Gj(e, f, g)
            });
            c.Mj(function () {
                kr().flush();
                1E3 <= c.Kd() && Ub.sendBeacon && sz(a, R.ae, {});
                Rx();
                b.flush();
                c.gh(function () {
                    Qx = !1;
                    Qx = !1;
                    c.gh(void 0)
                })
            });
        }

        var Z = {
            h: {}
        };

        Z.h.ehl = ["google"],
            function () {
                function a(l) {
                    return l.target && l.target.location && l.target.location.href ? l.target.location.href : $s()
                }

                function b(l, n) {
                    dc(l, "hashchange", function (p) {
                        var r = a(p);
                        n({
                            source: "hashchange",
                            state: null,
                            url: bt(r),
                            P: at(r)
                        })
                    })
                }

                function c(l, n) {
                    dc(l, "popstate", function (p) {
                        var r = a(p);
                        n({
                            source: "popstate",
                            state: p.state,
                            url: bt(r),
                            P: at(r)
                        })
                    })
                }

                function d(l, n, p) {
                    var r = n.history
                        , t = r[l];
                    if (Ga(t))
                        try {
                            r[l] = function (u, q, v) {
                                t.apply(r, [].slice.call(arguments, 0));
                                p({
                                    source: l,
                                    state: u,
                                    url: bt($s()),
                                    P: at($s())
                                })
                            }
                        } catch (u) {
                        }
                }

                function e() {
                    var l = {
                        source: null,
                        state: W("history").state || null,
                        url: bt($s()),
                        P: at($s())
                    };
                    return function (n, p) {
                        var r = l
                            , t = {};
                        t[r.source] = !0;
                        t[n.source] = !0;
                        if (!t.popstate || !t.hashchange || r.P != n.P) {
                            var u = {
                                event: "gtm.historyChange-v2",
                                "gtm.historyChangeSource": n.source,
                                "gtm.oldUrlFragment": l.P,
                                "gtm.newUrlFragment": n.P,
                                "gtm.oldHistoryState": l.state,
                                "gtm.newHistoryState": n.state,
                                "gtm.oldUrl": l.url,
                                "gtm.newUrl": n.url,
                                "gtm.triggers": p.join(",")
                            };
                            l = n;
                            dt(u)
                        }
                    }
                }

                function f(l, n) {
                    var p = "" + n;
                    if (g[p])
                        g[p].push(l);
                    else {
                        var r = [l];
                        g[p] = r;
                        var t = e()
                            , u = -1;
                        h.push(function (q) {
                            0 <= u && Xs(u);
                            n ? u = Ys(function () {
                                t(q, r);
                                u = -1
                            }, n) : t(q, r)
                        })
                    }
                }

                var g = {}
                    , h = [];
                (function (l) {
                        Z.__ehl = l;
                        Z.__ehl.m = "ehl";
                        Z.__ehl.isVendorTemplate = !0;
                        Z.__ehl.priorityOverride = 0
                    }
                )(function (l) {
                    var n = W("self")
                        , p = l.vtp_uniqueTriggerId || "0"
                        , r = l.vtp_groupEvents ? Number(l.vtp_groupEventsInterval) : 0;
                    0 > r ? r = 0 : isNaN(r) && (r = 1E3);
                    if (it("ehl")) {
                        var t = Ds("ehl", "reg");
                        t ? (t(p, r),
                            K(l.vtp_gtmOnSuccess)) : K(l.vtp_gtmOnFailure)
                    } else {
                        var u = function (q) {
                            for (var v = 0; v < h.length; v++)
                                h[v](q)
                        };
                        b(n, u);
                        c(n, u);
                        d("pushState", n, u);
                        d("replaceState", n, u);
                        f(p, r);
                        Bs("ehl", "reg", f);
                        jt("ehl");
                        K(l.vtp_gtmOnSuccess)
                    }
                })
            }();
        Z.h.sdl = ["google"],
            function () {
                function a() {
                    return !!(Object.keys(l("horiz.pix")).length || Object.keys(l("horiz.pct")).length || Object.keys(l("vert.pix")).length || Object.keys(l("vert.pct")).length)
                }

                function b(x) {
                    for (var z = [], B = x.split(","), C = 0; C < B.length; C++) {
                        var F = Number(B[C]);
                        if (isNaN(F))
                            return [];
                        p.test(B[C]) || z.push(F)
                    }
                    return z
                }

                function c() {
                    var x = 0
                        , z = 0;
                    return function () {
                        var B = gj()
                            , C = B.height;
                        x = Math.max(v.scrollLeft + B.width, x);
                        z = Math.max(v.scrollTop + C, z);
                        return {
                            We: x,
                            Xe: z
                        }
                    }
                }

                function d() {
                    u = W("self");
                    q = u.document;
                    v = q.scrollingElement || q.body && q.body.parentNode;
                    y = c()
                }

                function e(x, z, B, C) {
                    var F = l(z), D = {}, E;
                    for (E in F) {
                        D.Kb = E;
                        if (F.hasOwnProperty(D.Kb)) {
                            var M = Number(D.Kb);
                            x < M || (dt({
                                event: "gtm.scrollDepth",
                                "gtm.scrollThreshold": M,
                                "gtm.scrollUnits": B.toLowerCase(),
                                "gtm.scrollDirection": C,
                                "gtm.triggers": F[D.Kb].join(",")
                            }),
                                Cs("sdl", z, function (N) {
                                    return function (O) {
                                        delete O[N.Kb];
                                        return O
                                    }
                                }(D), {}))
                        }
                        D = {
                            Kb: D.Kb
                        }
                    }
                }

                function f() {
                    var x = y()
                        , z = x.We
                        , B = x.Xe
                        , C = z / v.scrollWidth * 100
                        , F = B / v.scrollHeight * 100;
                    e(z, "horiz.pix", r.vd, t.kg);
                    e(C, "horiz.pct", r.ud, t.kg);
                    e(B, "vert.pix", r.vd, t.vg);
                    e(F, "vert.pct", r.ud, t.vg);
                    Bs("sdl", "pending", !1)
                }

                function g() {
                    var x = 250
                        , z = !1;
                    q.scrollingElement && q.documentElement && u.addEventListener && (x = 50,
                        z = !0);
                    var B = 0
                        , C = !1
                        , F = function () {
                        C ? B = Ys(F, x) : (B = 0,
                            f(),
                        it("sdl") && !a() && (ec(u, "scroll", D),
                            ec(u, "resize", D),
                            Bs("sdl", "init", !1)));
                        C = !1
                    }
                        , D = function () {
                        z && y();
                        B ? C = !0 : (B = Ys(F, x),
                            Bs("sdl", "pending", !0))
                    };
                    return D
                }

                function h(x, z, B) {
                    if (z) {
                        var C = b(String(x));
                        Cs("sdl", B, function (F) {
                            for (var D = 0; D < C.length; D++) {
                                var E = String(C[D]);
                                F.hasOwnProperty(E) || (F[E] = []);
                                F[E].push(z)
                            }
                            return F
                        }, {})
                    }
                }

                function l(x) {
                    return Ds("sdl", x, {})
                }

                function n(x) {
                    K(x.vtp_gtmOnSuccess);
                    var z = x.vtp_uniqueTriggerId
                        , B = x.vtp_horizontalThresholdsPixels
                        , C = x.vtp_horizontalThresholdsPercent
                        , F = x.vtp_verticalThresholdUnits
                        , D = x.vtp_verticalThresholdsPixels
                        , E = x.vtp_verticalThresholdsPercent;
                    switch (x.vtp_horizontalThresholdUnits) {
                        case r.vd:
                            h(B, z, "horiz.pix");
                            break;
                        case r.ud:
                            h(C, z, "horiz.pct")
                    }
                    switch (F) {
                        case r.vd:
                            h(D, z, "vert.pix");
                            break;
                        case r.ud:
                            h(E, z, "vert.pct")
                    }
                    it("sdl") ? Ds("sdl", "pending") || (w || (d(),
                        w = !0),
                        K(function () {
                            return f()
                        })) : (d(),
                        w = !0,
                    v && (jt("sdl"),
                        Bs("sdl", "pending", !0),
                        K(function () {
                            f();
                            if (a()) {
                                var M = g();
                                dc(u, "scroll", M);
                                dc(u, "resize", M)
                            } else
                                Bs("sdl", "init", !1)
                        })))
                }

                var p = /^\s*$/, r = {
                    ud: "PERCENT",
                    vd: "PIXELS"
                }, t = {
                    vg: "vertical",
                    kg: "horizontal"
                }, u, q, v, w = !1, y;
                (function (x) {
                        Z.__sdl = x;
                        Z.__sdl.m = "sdl";
                        Z.__sdl.isVendorTemplate = !0;
                        Z.__sdl.priorityOverride = 0
                    }
                )(function (x) {
                    x.vtp_triggerStartOption ? n(x) : Rr(function () {
                        n(x)
                    })
                })
            }();

        Z.h.read_container_data = ["google"],
            function () {
                (function (a) {
                        Z.__read_container_data = a;
                        Z.__read_container_data.m = "read_container_data";
                        Z.__read_container_data.isVendorTemplate = !0;
                        Z.__read_container_data.priorityOverride = 0
                    }
                )(function () {
                    return {
                        assert: function () {
                        },
                        T: function () {
                            return {}
                        }
                    }
                })
            }();
        Z.h.c = ["google"],
            function () {
                (function (a) {
                        Z.__c = a;
                        Z.__c.m = "c";
                        Z.__c.isVendorTemplate = !0;
                        Z.__c.priorityOverride = 0
                    }
                )(function (a) {
                    lt(a.vtp_value, "c", a.vtp_gtmEventId);
                    return a.vtp_value
                })
            }();
        Z.h.e = ["google"],
            function () {
                (function (a) {
                        Z.__e = a;
                        Z.__e.m = "e";
                        Z.__e.isVendorTemplate = !0;
                        Z.__e.priorityOverride = 0
                    }
                )(function (a) {
                    var b = String(rh(a.vtp_gtmEventId, "event"));
                    a.vtp_gtmCachedValues && (b = String(a.vtp_gtmCachedValues.event));
                    return b
                })
            }();
        Z.h.u = ["google"],
            function () {
                var a = function (b) {
                    return {
                        toString: function () {
                            return b
                        }
                    }
                };
                (function (b) {
                        Z.__u = b;
                        Z.__u.m = "u";
                        Z.__u.isVendorTemplate = !0;
                        Z.__u.priorityOverride = 0
                    }
                )(function (b) {
                    var c;
                    c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : ct("gtm.url", 1)) || $s();
                    var d = b[a("vtp_component")];
                    if (!d || "URL" == d)
                        return bt(String(c));
                    var e = uj(String(c)), f;
                    if ("QUERY" === d)
                        a: {
                            var g = b[a("vtp_multiQueryKeys").toString()], h = b[a("vtp_queryKey").toString()] || "",
                                l = b[a("vtp_ignoreEmptyQueryParam").toString()], n;
                            g ? Ia(h) ? n = h : n = String(h).replace(/\s+/g, "").split(",") : n = [String(h)];
                            for (var p = 0; p < n.length; p++) {
                                var r = sj(e, "QUERY", void 0, void 0, n[p]);
                                if (void 0 != r && (!l || "" !== r)) {
                                    f = r;
                                    break a
                                }
                            }
                            f = void 0
                        }
                    else
                        f = sj(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0, void 0);
                    return f
                })
            }();
        Z.h.v = ["google"],
            function () {
                (function (a) {
                        Z.__v = a;
                        Z.__v.m = "v";
                        Z.__v.isVendorTemplate = !0;
                        Z.__v.priorityOverride = 0
                    }
                )(function (a) {
                    var b = a.vtp_name;
                    if (!b || !b.replace)
                        return !1;
                    var c = ct(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1)
                        , d = void 0 !== c ? c : a.vtp_defaultValue;
                    lt(d, "v", a.vtp_gtmEventId);
                    return d
                })
            }();

        Z.h.ytl = ["google"],
            function () {
                function a() {
                    var q = Math.round(1E9 * Math.random()) + "";
                    return J.getElementById(q) ? a() : q
                }

                function b(q, v) {
                    if (!q)
                        return !1;
                    for (var w = 0; w < p.length; w++)
                        if (0 <= q.indexOf("//" + p[w] + "/" + v))
                            return !0;
                    return !1
                }

                function c(q, v) {
                    var w = q.getAttribute("src");
                    if (b(w, "embed/")) {
                        if (0 < w.indexOf("enablejsapi=1"))
                            return !0;
                        if (v) {
                            var y = q.setAttribute, x;
                            var z = -1 !== w.indexOf("?") ? "&" : "?";
                            if (-1 < w.indexOf("origin="))
                                x = w + z + "enablejsapi=1";
                            else {
                                if (!t) {
                                    var B = W("document");
                                    t = B.location.protocol + "//" + B.location.hostname;
                                    B.location.port && (t += ":" + B.location.port)
                                }
                                x = w + z + "enablejsapi=1&origin=" + encodeURIComponent(t)
                            }
                            y.call(q, "src", x);
                            return !0
                        }
                    }
                    return !1
                }

                function d(q, v) {
                    if (!q.getAttribute("data-gtm-yt-inspected-" + v.Bf) && (q.setAttribute("data-gtm-yt-inspected-" + v.Bf, "true"),
                        c(q, v.Hc))) {
                        q.id || (q.id = a());
                        var w = W("YT")
                            , y = w.get(q.id);
                        y || (y = new w.Player(q.id));
                        var x = f(y, v), z = {}, B;
                        for (B in x)
                            z.jc = B,
                            x.hasOwnProperty(z.jc) && y.addEventListener(z.jc, function (C) {
                                return function (F) {
                                    return x[C.jc](F.data)
                                }
                            }(z)),
                                z = {
                                    jc: z.jc
                                }
                    }
                }

                function e(q) {
                    K(function () {
                        function v() {
                            for (var y = w.getElementsByTagName("iframe"), x = y.length, z = 0; z < x; z++)
                                d(y[z], q)
                        }

                        var w = W("document");
                        v();
                        Ls(v)
                    })
                }

                function f(q, v) {
                    var w, y;

                    function x() {
                        O = Ws(function () {
                            return {
                                url: H,
                                title: ba,
                                Ye: P,
                                Ig: q.getCurrentTime(),
                                playbackRate: X
                            }
                        }, v.Bf, q.getIframe());
                        P = 0;
                        ba = H = "";
                        X = 1;
                        return z
                    }

                    function z(aa) {
                        switch (aa) {
                            case r.PLAYING:
                                P = Math.round(q.getDuration());
                                H = q.getVideoUrl();
                                if (q.getVideoData) {
                                    var va = q.getVideoData();
                                    ba = va ? va.title : ""
                                }
                                X = q.getPlaybackRate();
                                v.Se ? dt(O.createEvent("start")) : O.Yb();
                                L = l(v.uf, v.tf, q.getDuration());
                                return B(aa);
                            default:
                                return z
                        }
                    }

                    function B() {
                        fa = q.getCurrentTime();
                        xa = Zs().getTime();
                        O.ih();
                        N();
                        return C
                    }

                    function C(aa) {
                        var va;
                        switch (aa) {
                            case r.ENDED:
                                return D(aa);
                            case r.PAUSED:
                                va = "pause";
                            case r.BUFFERING:
                                var Fa = q.getCurrentTime() - fa;
                                va = 1 < Math.abs((Zs().getTime() - xa) / 1E3 * X - Fa) ? "seek" : va || "buffering";
                                q.getCurrentTime() && (v.Re ? dt(O.createEvent(va)) : O.Yb());
                                M();
                                return F;
                            case r.UNSTARTED:
                                return x(aa);
                            default:
                                return C
                        }
                    }

                    function F(aa) {
                        switch (aa) {
                            case r.ENDED:
                                return D(aa);
                            case r.PLAYING:
                                return B(aa);
                            case r.UNSTARTED:
                                return x(aa);
                            default:
                                return F
                        }
                    }

                    function D() {
                        for (; y;) {
                            var aa = w;
                            Xs(y);
                            aa()
                        }
                        v.Qe && dt(O.createEvent("complete", 1));
                        return x(r.UNSTARTED)
                    }

                    function E() {
                    }

                    function M() {
                        y && (Xs(y),
                            y = 0,
                            w = E)
                    }

                    function N() {
                        if (L.length && 0 !== X) {
                            var aa = -1, va;
                            do {
                                va = L[0];
                                if (va.ba > q.getDuration())
                                    return;
                                aa = (va.ba - q.getCurrentTime()) / X;
                                if (0 > aa && (L.shift(),
                                0 === L.length))
                                    return
                            } while (0 > aa);
                            w = function () {
                                y = 0;
                                w = E;
                                0 < L.length && L[0].ba === va.ba && (L.shift(),
                                    dt(O.createEvent("progress", va.Qc, va.Tc)));
                                N()
                            }
                            ;
                            y = Ys(w, 1E3 * aa)
                        }
                    }

                    var O, L = [], P, H, ba, X, fa, xa, V = x(r.UNSTARTED);
                    y = 0;
                    w = E;
                    return {
                        onStateChange: function (aa) {
                            V = V(aa)
                        },
                        onPlaybackRateChange: function (aa) {
                            fa = q.getCurrentTime();
                            xa = Zs().getTime();
                            O.Yb();
                            X = aa;
                            M();
                            N()
                        }
                    }
                }

                function g(q) {
                    for (var v = q.split(","), w = v.length, y = [], x = 0; x < w; x++) {
                        var z = parseInt(v[x], 10);
                        isNaN(z) || 100 < z || 0 > z || y.push(z / 100)
                    }
                    y.sort(function (B, C) {
                        return B - C
                    });
                    return y
                }

                function h(q) {
                    for (var v = q.split(","), w = v.length, y = [], x = 0; x < w; x++) {
                        var z = parseInt(v[x], 10);
                        isNaN(z) || 0 > z || y.push(z)
                    }
                    y.sort(function (B, C) {
                        return B - C
                    });
                    return y
                }

                function l(q, v, w) {
                    var y = q.map(function (B) {
                        return {
                            ba: B,
                            Tc: B,
                            Qc: void 0
                        }
                    });
                    if (!v.length)
                        return y;
                    var x = v.map(function (B) {
                        return {
                            ba: B * w,
                            Tc: void 0,
                            Qc: B
                        }
                    });
                    if (!y.length)
                        return x;
                    var z = y.concat(x);
                    z.sort(function (B, C) {
                        return B.ba - C.ba
                    });
                    return z
                }

                function n(q) {
                    var v = !!q.vtp_captureStart
                        , w = !!q.vtp_captureComplete
                        , y = !!q.vtp_capturePause
                        , x = g(q.vtp_progressThresholdsPercent + "")
                        , z = h(q.vtp_progressThresholdsTimeInSeconds + "")
                        , B = !!q.vtp_fixMissingApi;
                    if (v || w || y || x.length || z.length) {
                        var C = {
                            Se: v,
                            Qe: w,
                            Re: y,
                            tf: x,
                            uf: z,
                            Hc: B,
                            Bf: void 0 === q.vtp_uniqueTriggerId ? "" : q.vtp_uniqueTriggerId
                        }
                            , F = W("YT")
                            , D = function () {
                            e(C)
                        };
                        K(q.vtp_gtmOnSuccess);
                        if (F)
                            F.ready && F.ready(D);
                        else {
                            var E = W("onYouTubeIframeAPIReady");
                            et("onYouTubeIframeAPIReady", function () {
                                E && E();
                                D()
                            });
                            K(function () {
                                for (var M = W("document"), N = M.getElementsByTagName("script"), O = N.length, L = 0; L < O; L++) {
                                    var P = N[L].getAttribute("src");
                                    if (b(P, "iframe_api") || b(P, "player_api"))
                                        return
                                }
                                for (var H = M.getElementsByTagName("iframe"), ba = H.length, X = 0; X < ba; X++)
                                    if (!u && c(H[X], C.Hc)) {
                                        U("https://www.youtube.com/iframe_api");
                                        u = !0;
                                        break
                                    }
                            })
                        }
                    } else
                        K(q.vtp_gtmOnSuccess)
                }

                var p = ["www.youtube.com", "www.youtube-nocookie.com"], r = {
                    UNSTARTED: -1,
                    ENDED: 0,
                    PLAYING: 1,
                    PAUSED: 2,
                    BUFFERING: 3,
                    CUED: 5
                }, t, u = !1;
                (function (q) {
                        Z.__ytl = q;
                        Z.__ytl.m = "ytl";
                        Z.__ytl.isVendorTemplate = !0;
                        Z.__ytl.priorityOverride = 0
                    }
                )(function (q) {
                    q.vtp_triggerStartOption ? n(q) : gm(function () {
                        n(q)
                    })
                })
            }();

        Z.h.aev = ["google"],
            function () {
                function a(u, q, v) {
                    var w = u || rh(q, "gtm");
                    if (w)
                        return w[v]
                }

                function b(u, q, v, w, y) {
                    y || (y = "element");
                    var x = q + "." + v, z;
                    if (p.hasOwnProperty(x))
                        z = p[x];
                    else {
                        var B = a(u, q, y);
                        if (B && (z = w(B),
                            p[x] = z,
                            r.push(x),
                        35 < r.length)) {
                            var C = r.shift();
                            delete p[C]
                        }
                    }
                    return z
                }

                function c(u, q, v, w) {
                    var y = a(u, q, t[v]);
                    return void 0 !== y ? y : w
                }

                function d(u, q) {
                    if (!u)
                        return !1;
                    var v = e($s());
                    Ia(q) || (q = String(q || "").replace(/\s+/g, "").split(","));
                    for (var w = [v], y = 0; y < q.length; y++) {
                        var x = q[y];
                        if (x.hasOwnProperty("is_regex"))
                            if (x.is_regex)
                                try {
                                    x = new RegExp(x.domain)
                                } catch (B) {
                                    continue
                                }
                            else
                                x = x.domain;
                        if (x instanceof RegExp) {
                            if (x.test(u))
                                return !1
                        } else {
                            var z = x;
                            if (0 != z.length) {
                                if (0 <= e(u).indexOf(z))
                                    return !1;
                                w.push(e(z))
                            }
                        }
                    }
                    return !Dw(u, w)
                }

                function e(u) {
                    n.test(u) || (u = "http://" + u);
                    return sj(uj(u), "HOST", !0)
                }

                function f(u, q, v, w) {
                    switch (u) {
                        case "SUBMIT_TEXT":
                            return b(q, v, "FORM." + u, g, "formSubmitElement") || w;
                        case "LENGTH":
                            var y = b(q, v, "FORM." + u, h);
                            return void 0 === y ? w : y;
                        case "INTERACTED_FIELD_ID":
                            return l(q, v, "id", w);
                        case "INTERACTED_FIELD_NAME":
                            return l(q, v, "name", w);
                        case "INTERACTED_FIELD_TYPE":
                            return l(q, v, "type", w);
                        case "INTERACTED_FIELD_POSITION":
                            var x = a(q, v, "interactedFormFieldPosition");
                            return void 0 === x ? w : x;
                        case "INTERACT_SEQUENCE_NUMBER":
                            var z = a(q, v, "interactSequenceNumber");
                            return void 0 === z ? w : z;
                        default:
                            return w
                    }
                }

                function g(u) {
                    switch (u.tagName.toLowerCase()) {
                        case "input":
                            return fc(u, "value");
                        case "button":
                            return hc(u);
                        default:
                            return null
                    }
                }

                function h(u) {
                    if ("form" === u.tagName.toLowerCase() && u.elements) {
                        for (var q = 0, v = 0; v < u.elements.length; v++)
                            Gs(u.elements[v]) && q++;
                        return q
                    }
                }

                function l(u, q, v, w) {
                    var y = a(u, q, "interactedFormField");
                    return y && fc(y, v) || w
                }

                var n = /^https?:\/\//i
                    , p = {}
                    , r = []
                    , t = {
                    ATTRIBUTE: "elementAttribute",
                    CLASSES: "elementClasses",
                    ELEMENT: "element",
                    ID: "elementId",
                    HISTORY_CHANGE_SOURCE: "historyChangeSource",
                    HISTORY_NEW_STATE: "newHistoryState",
                    HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                    HISTORY_OLD_STATE: "oldHistoryState",
                    HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                    TARGET: "elementTarget"
                };
                (function (u) {
                        Z.__aev = u;
                        Z.__aev.m = "aev";
                        Z.__aev.isVendorTemplate = !0;
                        Z.__aev.priorityOverride = 0
                    }
                )(function (u) {
                    var q = u.vtp_gtmEventId, v = u.vtp_defaultValue, w = u.vtp_varType, y;
                    u.vtp_gtmCachedValues && (y = u.vtp_gtmCachedValues.gtm);
                    switch (w) {
                        case "TAG_NAME":
                            var x = a(y, q, "element");
                            return x && x.tagName || v;
                        case "TEXT":
                            return b(y, q, w, hc) || v;
                        case "URL":
                            var z;
                            a: {
                                var B = String(a(y, q, "elementUrl") || v || "")
                                    , C = uj(B)
                                    , F = String(u.vtp_component || "URL");
                                switch (F) {
                                    case "URL":
                                        z = B;
                                        break a;
                                    case "IS_OUTBOUND":
                                        z = d(B, u.vtp_affiliatedDomains);
                                        break a;
                                    default:
                                        z = sj(C, F, u.vtp_stripWww, u.vtp_defaultPages, u.vtp_queryKey)
                                }
                            }
                            return z;
                        case "ATTRIBUTE":
                            var D;
                            if (void 0 === u.vtp_attribute)
                                D = c(y, q, w, v);
                            else {
                                var E = u.vtp_attribute
                                    , M = a(y, q, "element");
                                D = M && fc(M, E) || v || ""
                            }
                            return D;
                        case "MD":
                            var N = u.vtp_mdValue
                                , O = b(y, q, "MD", Ss);
                            return N && O ? Vs(O, N) || v : O || v;
                        case "FORM":
                            return f(String(u.vtp_component || "SUBMIT_TEXT"), y, q, v);
                        default:
                            var L = c(y, q, w, v);
                            lt(L, "aev", u.vtp_gtmEventId);
                            return L
                    }
                })
            }();

        Z.h.dlm = ["google"],
            function () {
                (function (a) {
                        Z.__dlm = a;
                        Z.__dlm.m = "dlm";
                        Z.__dlm.isVendorTemplate = !0;
                        Z.__dlm.priorityOverride = 0
                    }
                )(function (a) {
                    var b = Ew(a.vtp_userInput || [], "key", "value") || {};
                    a.vtp_synchronousWrite ? Oa(b, function (c, d) {
                        nh(c, d)
                    }) : dt(b);
                    K(a.vtp_gtmOnSuccess)
                })
            }();

        Z.h.gct = ["google"],
            function () {
                function a(d) {
                    for (var e = [], f = 0; f < d.length; f++)
                        try {
                            e.push(new RegExp(d[f]))
                        } catch (g) {
                        }
                    return e
                }

                function b(d) {
                    return d.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&")
                }

                function c(d) {
                    for (var e = [], f = 0; f < d.length; f++) {
                        var g = d[f].matchValue, h;
                        switch (d[f].matchType) {
                            case "BEGINS_WITH":
                                h = "^" + b(g);
                                break;
                            case "ENDS_WITH":
                                h = b(g) + "$";
                                break;
                            case "EQUALS":
                                h = "^" + b(g) + "$";
                                break;
                            case "REGEX":
                                h = g;
                                break;
                            default:
                                h = b(g)
                        }
                        e.push(h)
                    }
                    return e
                }

                (function (d) {
                        Z.__gct = d;
                        Z.__gct.m = "gct";
                        Z.__gct.isVendorTemplate = !0;
                        Z.__gct.priorityOverride = 0
                    }
                )(function (d) {
                    var e = {};
                    0 < d.vtp_sessionDuration && (e[R.uc] = d.vtp_sessionDuration);
                    e[R.fd] = d.vtp_eventSettings;
                    e[R.ke] = d.vtp_dynamicEventSettings;
                    e[R.eb] = 1 === d.vtp_googleSignals;
                    e[R.jd] = d.vtp_foreignTld;
                    e[R.Rb] = 1 === d.vtp_restrictDomain;
                    e[R.ue] = d.vtp_internalTrafficResults;
                    var f = R.ia
                        , g = d.vtp_linker;
                    g && g[R.O] && (g[R.O] = a(g[R.O]));
                    e[f] = g;
                    var h = R.md
                        , l = d.vtp_referralExclusionDefinition;
                    l && l.include_conditions && (l.include_conditions = a(l.include_conditions));
                    e[h] = l;
                    var n = qr(d.vtp_trackingId)
                        , p = n.referral_exclusion_conditions;
                    p && (p.length && "object" === typeof p[0] && (p = c(p)),
                        e[R.md] = {
                            include_conditions: a(p)
                        });
                    var r = n.cross_domain_conditions;
                    if (r) {
                        r.length && "object" === typeof r[0] && (r = c(r));
                        var t = {};
                        e[R.ia] = (t[R.O] = a(r),
                            t[R.ub] = !0,
                            t[R.Sb] = !0,
                            t[R.Tb] = "query",
                            t)
                    }
                    xz(d.vtp_trackingId, e);
                    K(d.vtp_gtmOnSuccess)
                })
            }();

        Z.h.get = ["google"],
            function () {
                (function (a) {
                        Z.__get = a;
                        Z.__get.m = "get";
                        Z.__get.isVendorTemplate = !0;
                        Z.__get.priorityOverride = 0
                    }
                )(function (a) {
                    var b = a.vtp_settings;
                    (a.vtp_deferrable ? tz : sz)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
                    a.vtp_gtmOnSuccess()
                })
            }();

        Z.h.lcl = [],
            function () {
                function a() {
                    var c = W("document")
                        , d = 0
                        , e = function (f) {
                        var g = f.target;
                        if (g && 3 !== f.which && !(f.hf || f.timeStamp && f.timeStamp === d)) {
                            d = f.timeStamp;
                            g = jc(g, ["a", "area"], 100);
                            if (!g)
                                return f.returnValue;
                            var h = f.defaultPrevented || !1 === f.returnValue, l = Ds("lcl", h ? "nv.mwt" : "mwt", 0),
                                n;
                            n = h ? Ds("lcl", "nv.ids", []) : Ds("lcl", "ids", []);
                            if (n.length) {
                                var p = zs(g, "gtm.linkClick", n);
                                if (b(f, g, c) && !h && l && g.href) {
                                    var r = !!Ja(String(lc(g, "rel") || "").split(" "), function (v) {
                                        return "noreferrer" === v.toLowerCase()
                                    });
                                    r && Rg(36);
                                    var t = W((lc(g, "target") || "_self").substring(1))
                                        , u = !0
                                        , q = ms(function () {
                                        var v;
                                        if (v = u && t) {
                                            var w;
                                            a: if (r) {
                                                var y;
                                                try {
                                                    y = new MouseEvent(f.type, {
                                                        bubbles: !0
                                                    })
                                                } catch (x) {
                                                    if (!c.createEvent) {
                                                        w = !1;
                                                        break a
                                                    }
                                                    y = c.createEvent("MouseEvents");
                                                    y.initEvent(f.type, !0, !0)
                                                }
                                                y.hf = !0;
                                                f.target.dispatchEvent(y);
                                                w = !0
                                            } else
                                                w = !1;
                                            v = !w
                                        }
                                        v && (t.location.href = lc(g, "href"))
                                    }, l);
                                    if (dt(p, q, l))
                                        u = !1;
                                    else
                                        return f.preventDefault && f.preventDefault(),
                                            f.returnValue = !1
                                } else
                                    dt(p, function () {
                                    }, l || 2E3);
                                return !0
                            }
                        }
                    };
                    dc(c, "click", e, !1);
                    dc(c, "auxclick", e, !1)
                }

                function b(c, d, e) {
                    if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey)
                        return !1;
                    var f = lc(d, "href")
                        , g = f.indexOf("#")
                        , h = lc(d, "target");
                    if (h && "_self" !== h && "_parent" !== h && "_top" !== h || 0 === g)
                        return !1;
                    if (0 < g) {
                        var l = bt(f)
                            , n = bt(e.location);
                        return l !== n
                    }
                    return !0
                }

                (function (c) {
                        Z.__lcl = c;
                        Z.__lcl.m = "lcl";
                        Z.__lcl.isVendorTemplate = !0;
                        Z.__lcl.priorityOverride = 0
                    }
                )(function (c) {
                    var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags
                        , e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation
                        , f = Number(c.vtp_waitForTagsTimeout);
                    if (!f || 0 >= f)
                        f = 2E3;
                    var g = c.vtp_uniqueTriggerId || "0";
                    if (d) {
                        var h = function (n) {
                            return Math.max(f, n)
                        };
                        Cs("lcl", "mwt", h, 0);
                        e || Cs("lcl", "nv.mwt", h, 0)
                    }
                    var l = function (n) {
                        n.push(g);
                        return n
                    };
                    Cs("lcl", "ids", l, []);
                    e || Cs("lcl", "nv.ids", l, []);
                    it("lcl") || (a(),
                        jt("lcl"));
                    K(c.vtp_gtmOnSuccess)
                })
            }();
        var yz = {};
        yz.dataLayer = lh;
        yz.callback = function (a) {
            bh.hasOwnProperty(a) && Ga(bh[a]) && bh[a]();
            delete bh[a]
        }
        ;
        yz.bootstrap = 0;
        yz._spx = !1;

        function zz() {
            S[qf.J] = yz;
            db(ch, Z.h);
            Ye = mf
        }

        function Az() {
            var a = !1;
            a && om("INIT");
            Mh().g(Eh.g);
            S = A.google_tag_manager = A.google_tag_manager || {};
            Bo();
            il.enable_gbraid_cookie_write = !0;
            var b = !!S[qf.J];
            if (b) {
                var c = S.zones;
                c && c.unregisterChild(qf.J);
            } else {
                for (var f = data.resource || {}, g = f.macros || [], h = 0; h < g.length; h++)
                    Qe.push(g[h]);
                for (var l = f.tags || [], n = 0; n < l.length; n++)
                    Te.push(l[n]);
                for (var p = f.predicates || [], r = 0; r < p.length; r++)
                    Se.push(p[r]);
                for (var t = f.rules || [], u = 0; u < t.length; u++) {
                    for (var q = t[u], v = {}, w = 0; w < q.length; w++)
                        v[q[w][0]] = Array.prototype.slice.call(q[w], 1);
                    Re.push(v)
                }
                Ve = Z;
                We = Nt;
                var y = data.permissions || {}
                    , x = data.sandboxed_scripts
                    , z = data.security_groups
                    , B = data.runtime || []
                    , C = data.runtime_lines;
                ww = new ke;
                zw();
                Pe = xw();
                var F = ww
                    , D = tw();
                tb(F.g, "require", D);
                for (var E = 0; E < B.length; E++) {
                    var M = B[E];
                    if (!Ia(M) || 3 > M.length) {
                        if (0 === M.length)
                            continue;
                        break
                    }
                    C && C[E] && C[E].length && ef(M, C[E]);
                    ww.execute(M)
                }
                uf = new tf(y);
                if (void 0 !== x)
                    for (var N = ["sandboxedScripts"], O = 0; O < x.length; O++) {
                        var L = x[O].replace(/^_*/, "");
                        ch[L] = N
                    }
                Aw(z);
                zz();
                ss();
                bm = !1;
                cm = 0;
                if ("interactive" == J.readyState && !J.createEventObject || "complete" == J.readyState)
                    em();
                else {
                    dc(J, "DOMContentLoaded", em);
                    dc(J, "readystatechange", em);
                    if (J.createEventObject && J.documentElement.doScroll) {
                        var P = !0;
                        try {
                            P = !A.frameElement
                        } catch (xa) {
                        }
                        P && fm()
                    }
                    dc(A, "load", em)
                }
                Or = !1;
                "complete" === J.readyState ? Qr() : dc(A, "load", Qr);
                ln && A.setInterval(en, 864E5);
                $g = (new Date).getTime();
                yz.bootstrap = $g;
                if (a) {
                    var fa = pm("INIT");
                }
            }
        }

        (function (a) {
                if (!A["__TAGGY_INSTALLED"]) {
                    var b = !1;
                    if (J.referrer) {
                        var c = uj(J.referrer);
                        b = "cct.google" === rj(c, "host")
                    }
                    if (!b) {
                        var d = Wj("googTaggyReferrer");
                        b = d.length && d[0].length
                    }
                    b && (A["__TAGGY_INSTALLED"] = !0,
                        $b("https://cct.google/taggy/agent.js"))
                }
                var f = function (r) {
                    var t = "GTM"
                        , u = "GTM";
                    t = "OGT",
                        u = "GTAG";
                    var q = A["google.tagmanager.debugui2.queue"];
                    q || (q = [],
                        A["google.tagmanager.debugui2.queue"] = q,
                        $b("https://" + qf.Yd + "/debug/bootstrap?id=" + qf.J + "&src=" + u + "&cond=" + r + "&gtm=" + Yn()));
                    var v = {
                        messageType: "CONTAINER_STARTING",
                        data: {
                            scriptSource: Vb,
                            containerProduct: t,
                            debug: !1,
                            id: qf.J
                        }
                    };
                    v.data.resume = function () {
                        a()
                    }
                    ;
                    qf.Ch && (v.data.initialPublish = !0);
                    q.push(v)
                }
                    , g = void 0
                    , h = sj(A.location, "query", !1, void 0, "gtm_debug");
                ts(h) && (g = 2);
                if (!g && J.referrer) {
                    var l = uj(J.referrer);
                    "tagassistant.google.com" === rj(l, "host") && (g = 3)
                }
                if (!g) {
                    var n = Wj("__TAG_ASSISTANT");
                    n.length && n[0].length && (g = 4)
                }
                if (!g) {
                    var p = J.documentElement.getAttribute("data-tag-assistant-present");
                    ts(p) && (g = 5)
                }
                g && Vb ? f(g) : a()
            }
        )(Az);

    }
)()

window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag('js', new Date());

gtag('config', 'G-4Q2MRL1K2Y');

console.log("this is ga tag")