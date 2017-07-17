! function(b) {
    b.fn.camera = function(a7) {
        function aT() {
            return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) ? !0 : void 0
        }

        function aV() {
            var c = b(ap).width();
            b("li", ap).removeClass("camera_visThumb"), b("li", ap).each(function() {
                var e = b(this).position(),
                    d = (b("ul", ap).outerWidth(), b("ul", ap).offset().left),
                    g = b("> div", ap).offset().left,
                    h = g - d;
                b(".camera_prevThumbs", aO).removeClass("hideNav").css("visibility", "visible"), b(".camera_nextThumbs", aO).removeClass("hideNav").css("visibility", "visible");
                var f = e.left,
                    j = e.left + b(this).width();
                c >= j - h && f - h >= 0 && b(this).addClass("camera_visThumb")
            })
        }

        function aY() {
            "mediaboxck" == a7.lightbox && "undefined" != typeof Mediabox ? Mediabox.scanPage() : "squeezebox" == a7.lightbox && "undefined" != typeof SqueezeBox && (SqueezeBox.initialize({}), SqueezeBox.assign($$("a.camera_link[rel=lightbox]"), {}))
        }

        function aU() {
            if (ba = a6.width(), -1 != a7.height.indexOf("%")) {
                var c = Math.round(ba / (100 / parseFloat(a7.height)));
                bc = "" != a7.minHeight && c < parseFloat(a7.minHeight) ? parseFloat(a7.minHeight) : c, a6.css({
                    height: bc
                })
            } else {
                "auto" == a7.height ? bc = a6.height() : (bc = parseFloat(a7.height), a6.css({
                    height: bc
                }))
            }
        }

        function aZ() {
            function d() {
                ba = a6.width(), aU(), b(".camerarelative", aP).css({
                    width: ba,
                    height: bc
                }), b(".imgLoaded", aP).each(function() {
                    var q, k, e = b(this),
                        f = e.attr("width"),
                        u = e.attr("height"),
                        g = (e.index(), e.attr("data-alignment")),
                        p = e.attr("data-portrait");
                    if (("undefined" == typeof g || g === !1 || "" === g) && (g = a7.alignment), ("undefined" == typeof p || p === !1 || "" === p) && (p = a7.portrait), 0 == p || "false" == p) {
                        if (ba / bc > f / u) {
                            var j = ba / f,
                                h = 0.5 * Math.abs(bc - u * j);
                            switch (g) {
                                case "topLeft":
                                    q = 0;
                                    break;
                                case "topCenter":
                                    q = 0;
                                    break;
                                case "topRight":
                                    q = 0;
                                    break;
                                case "centerLeft":
                                    q = "-" + h + "px";
                                    break;
                                case "center":
                                    q = "-" + h + "px";
                                    break;
                                case "centerRight":
                                    q = "-" + h + "px";
                                    break;
                                case "bottomLeft":
                                    q = "-" + 2 * h + "px";
                                    break;
                                case "bottomCenter":
                                    q = "-" + 2 * h + "px";
                                    break;
                                case "bottomRight":
                                    q = "-" + 2 * h + "px"
                            }
                            e.css(1 == a7.fullpage ? {
                                height: u * j,
                                "margin-left": 0,
                                "margin-right": 0,
                                "margin-top": q,
                                position: "absolute",
                                visibility: "visible",
                                left: 0,
                                width: ba
                            } : {
                                height: u * j,
                                "margin-left": 0,
                                "margin-right": 0,
                                "margin-top": q,
                                position: "absolute",
                                visibility: "visible",
                                width: ba
                            })
                        } else {
                            var j = bc / u,
                                h = 0.5 * Math.abs(ba - f * j);
                            switch (g) {
                                case "topLeft":
                                    k = 0;
                                    break;
                                case "topCenter":
                                    k = "-" + h + "px";
                                    break;
                                case "topRight":
                                    k = "-" + 2 * h + "px";
                                    break;
                                case "centerLeft":
                                    k = 0;
                                    break;
                                case "center":
                                    k = "-" + h + "px";
                                    break;
                                case "centerRight":
                                    k = "-" + 2 * h + "px";
                                    break;
                                case "bottomLeft":
                                    k = 0;
                                    break;
                                case "bottomCenter":
                                    k = "-" + h + "px";
                                    break;
                                case "bottomRight":
                                    k = "-" + 2 * h + "px"
                            }
                            e.css({
                                height: bc,
                                "margin-left": k,
                                "margin-right": k,
                                "margin-top": 0,
                                position: "absolute",
                                visibility: "visible",
                                width: f * j
                            })
                        }
                    } else {
                        if (ba / bc > f / u) {
                            var j = bc / u,
                                h = 0.5 * Math.abs(ba - f * j);
                            switch (g) {
                                case "topLeft":
                                    k = 0;
                                    break;
                                case "topCenter":
                                    k = h + "px";
                                    break;
                                case "topRight":
                                    k = 2 * h + "px";
                                    break;
                                case "centerLeft":
                                    k = 0;
                                    break;
                                case "center":
                                    k = h + "px";
                                    break;
                                case "centerRight":
                                    k = 2 * h + "px";
                                    break;
                                case "bottomLeft":
                                    k = 0;
                                    break;
                                case "bottomCenter":
                                    k = h + "px";
                                    break;
                                case "bottomRight":
                                    k = 2 * h + "px"
                            }
                            e.css({
                                height: bc,
                                "margin-left": k,
                                "margin-right": k,
                                "margin-top": 0,
                                position: "absolute",
                                visibility: "visible",
                                width: f * j
                            })
                        } else {
                            var j = ba / f,
                                h = 0.5 * Math.abs(bc - u * j);
                            switch (g) {
                                case "topLeft":
                                    q = 0;
                                    break;
                                case "topCenter":
                                    q = 0;
                                    break;
                                case "topRight":
                                    q = 0;
                                    break;
                                case "centerLeft":
                                    q = h + "px";
                                    break;
                                case "center":
                                    q = h + "px";
                                    break;
                                case "centerRight":
                                    q = h + "px";
                                    break;
                                case "bottomLeft":
                                    q = 2 * h + "px";
                                    break;
                                case "bottomCenter":
                                    q = 2 * h + "px";
                                    break;
                                case "bottomRight":
                                    q = 2 * h + "px"
                            }
                            e.css({
                                height: u * j,
                                "margin-left": 0,
                                "margin-right": 0,
                                "margin-top": q,
                                position: "absolute",
                                visibility: "visible",
                                width: ba
                            })
                        }
                    }
                })
            }
            var c;
            1 == ar ? (clearTimeout(c), c = setTimeout(d, 200)) : d(), ar = !0
        }

        function a9() {
            b("iframe", aS).each(function() {
                b(".camera_caption", aS).show();
                var d = b(this),
                    c = d.attr("data-src");
                d.attr("src", c);
                var f = a7.imagePath + "blank.gif",
                    g = new Image;
                if (g.src = f, -1 != a7.height.indexOf("%")) {
                    var e = Math.round(ba / (100 / parseFloat(a7.height)));
                    bc = "" != a7.minHeight && e < parseFloat(a7.minHeight) ? parseFloat(a7.minHeight) : e
                } else {
                    bc = "auto" == a7.height ? a6.height() : parseFloat(a7.height)
                }
                d.after(b(g).attr({
                    "class": "imgFake",
                    width: ba,
                    height: bc
                }));
                var h = d.clone();
                d.remove(), b(g).bind("click", function() {
                    "absolute" == b(this).css("position") ? (b(this).remove(), autoplay = "", -1 != c.indexOf("vimeo") || -1 != c.indexOf("youtube") ? autoplay = -1 != c.indexOf("?") ? "&autoplay=1" : "?autoplay=1" : -1 != c.indexOf("dailymotion") && (autoplay = -1 != c.indexOf("?") ? "&autoPlay=1" : "?autoPlay=1"), h.attr("src", c + autoplay), bb = !0) : (b(this).css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 10
                    }).after(h), h.css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 9
                    }))
                })
            })
        }

        function a1(c) {
            for (var g, f, d = c.length; d; g = parseInt(Math.random() * d), f = c[--d], c[d] = c[g], c[g] = f) {}
            return c
        }

        function a0() {
            if (b(ap).length) {
                b(aj).length ? (b.each(ay, function(f) {
                    if ("" != b("> div", aN).eq(f).attr("data-thumb")) {
                        var d = b("> div", aN).eq(f).attr("data-thumb"),
                            c = new Image;
                        c.src = d, b("li.pag_nav_" + f, aj).append(b(c).attr("class", "camera_thumb").css({
                            position: "absolute"
                        }).animate({
                            opacity: 0
                        }, 0)), b("li.pag_nav_" + f + " > img", aj).after('<div class="thumb_arrow" />'), b("li.pag_nav_" + f + " > .thumb_arrow", aj).animate({
                            opacity: 0
                        }, 0)
                    }
                }), a6.css({
                    marginBottom: b(aj).outerHeight()
                })) : (b(ap).append("<div />"), b(ap).before('<div class="camera_prevThumbs hideNav"><div></div></div>').before('<div class="camera_nextThumbs hideNav"><div></div></div>'), b("> div", ap).append("<ul />"), b("ul", ap).width(ay.length * (parseInt(a7.thumbwidth) + 2)), b("ul", ap).height(parseInt(a7.thumbheight)), ulthumbwidth = 0, b.each(ay, function(f) {
                    if ("" != b("> div", aN).eq(f).attr("data-thumb")) {
                        var d = b("> div", aN).eq(f).attr("data-thumb"),
                            c = new Image;
                        c.src = d, b("ul", ap).append('<li class="pix_thumb pix_thumb_' + f + '" />'), b("li.pix_thumb_" + f, ap).append(b(c).attr("class", "camera_thumb")), ulthumbwidth += parseFloat(b("li.pix_thumb_" + f, ap).outerWidth()) + parseFloat(b("li.pix_thumb_" + f, ap).css("marginLeft")) + parseFloat(b("li.pix_thumb_" + f, ap).css("marginRight"))
                    }
                }), b("ul", ap).width(ulthumbwidth))
            } else {
                !b(ap).length && b(aj).length && a6.css({
                    marginBottom: b(aj).outerHeight()
                })
            }
        }

        function a8() {
            if (b(ap).length && !b(aj).length) {
                var j, g = b(ap).outerWidth(),
                    f = (b("ul > li", ap).outerWidth(), b("li.cameracurrent", ap).length ? b("li.cameracurrent", ap).position() : ""),
                    k = b("ul > li", ap).length * b("ul > li", ap).outerWidth(),
                    h = b("ul", ap).offset().left,
                    p = b("> div", ap).offset().left;
                j = 0 > h ? "-" + (p - h) : p - h, 1 == aC && (ulthumbwidth = 0, b.each(ay, function(c) {
                    ulthumbwidth += parseFloat(b("li.pix_thumb_" + c, ap).outerWidth()) + parseFloat(b("li.pix_thumb_" + c, ap).css("marginLeft")) + parseFloat(b("li.pix_thumb_" + c, ap).css("marginRight"))
                }), b("ul", ap).width(ulthumbwidth + 2), b(ap).length && !b(aj).lenght && a6.css({
                    marginBottom: b(ap).outerHeight()
                }), aV(), b(ap).length && !b(aj).lenght && a6.css({
                    marginBottom: b(ap).outerHeight()
                })), aC = !1;
                var m = b("li.cameracurrent", ap).length ? f.left : "",
                    d = b("li.cameracurrent", ap).length ? f.left + b("li.cameracurrent", ap).outerWidth() : "";
                m < b("li.cameracurrent", ap).outerWidth() && (m = 0), d - j > g ? k > m + g ? b("ul", ap).animate({
                    "margin-left": "-" + m + "px"
                }, 500, aV) : b("ul", ap).animate({
                    "margin-left": "-" + (b("ul", ap).outerWidth() - g) + "px"
                }, 500, aV) : 0 > m - j ? b("ul", ap).animate({
                    "margin-left": "-" + m + "px"
                }, 500, aV) : (b("ul", ap).css({
                    "margin-left": "auto",
                    "margin-right": "auto"
                }), setTimeout(aV, 100))
            }
        }

        function a4() {
            a = 0;
            var d = b(".camera_bar_cont", aO).width(),
                c = b(".camera_bar_cont", aO).height();
            if ("pie" != aR) {
                switch (aJ) {
                    case "leftToRight":
                        b("#" + aQ).css({
                            right: d
                        });
                        break;
                    case "rightToLeft":
                        b("#" + aQ).css({
                            left: d
                        });
                        break;
                    case "topToBottom":
                        b("#" + aQ).css({
                            bottom: c
                        });
                        break;
                    case "bottomToTop":
                        b("#" + aQ).css({
                            top: c
                        })
                }
            } else {
                aK.clearRect(0, 0, a7.pieDiameter, a7.pieDiameter)
            }
        }

        function aX(bs) {
            aN.addClass("camerasliding"), bb = !1;
            var bm = parseFloat(b("div.cameraSlide.cameracurrent", aP).index());
            if (bs > 0) {
                var bo = bs - 1
            } else {
                if (bm == aw - 1) {
                    var bo = 0
                } else {
                    var bo = bm + 1
                }
            }
            var bl = b(".cameraSlide:eq(" + bo + ")", aP),
                bp = b(".cameraSlide:eq(" + (bo + 1) + ")", aP).addClass("cameranext");
            if (bm != bo + 1 && bp.hide(), b(".cameraContent", aS).fadeOut(600), b(".camera_caption", aS).show(), b(".camerarelative", bl).append(b("> div ", aN).eq(bo).find("> div.camera_effected")), b(".camera_target_content .cameraContent:eq(" + bo + ")", a6).append(b("> div ", aN).eq(bo).find("> div")), b(".imgLoaded", bl).length) {
                if (an.length > bo + 1 && !b(".imgLoaded", bp).length) {
                    var bt = an[bo + 1],
                        bq = new Image;
                    bq.src = bt + "?" + (new Date).getTime(), bp.prepend(b(bq).attr("class", "imgLoaded").css("visibility", "hidden")), bq.onload = function() {
                        bu = bq.naturalWidth, e = bq.naturalHeight, b(bq).attr("data-alignment", aM[bo + 1]).attr("data-portrait", af[bo + 1]), b(bq).attr("width", bu), b(bq).attr("height", e), aZ()
                    }
                }
                a7.onLoaded.call(this);
                var S, h, u, l, z, W = a7.rows,
                    bn = a7.cols,
                    x = 1,
                    X = 0,
                    p = new Array("simpleFade", "curtainTopLeft", "curtainTopRight", "curtainBottomLeft", "curtainBottomRight", "curtainSliceLeft", "curtainSliceRight", "blindCurtainTopLeft", "blindCurtainTopRight", "blindCurtainBottomLeft", "blindCurtainBottomRight", "blindCurtainSliceBottom", "blindCurtainSliceTop", "stampede", "mosaic", "mosaicReverse", "mosaicRandom", "mosaicSpiral", "mosaicSpiralReverse", "topLeftBottomRight", "bottomRightTopLeft", "bottomLeftTopRight", "topRightBottomLeft", "scrollLeft", "scrollRight", "scrollTop", "scrollBottom", "scrollHorz");
                marginLeft = 0, marginTop = 0, opacityOnGrid = 0, opacityOnGrid = 1 == a7.opacityOnGrid ? 0 : 1;
                var y = b(" > div", aN).eq(bo).attr("data-fx");
                if (l = aT() && "" != a7.mobileFx && "default" != a7.mobileFx ? a7.mobileFx : "undefined" != typeof y && y !== !1 && "default" !== y ? y : a7.fx, "random" == l ? (l = a1(p), l = l[0]) : (l = l, l.indexOf(",") > 0 && (l = l.replace(/ /g, ""), l = l.split(","), l = a1(l), l = l[0])), dataEasing = b(" > div", aN).eq(bo).attr("data-easing"), mobileEasing = b(" > div", aN).eq(bo).attr("data-mobileEasing"), z = aT() && "" != a7.mobileEasing && "default" != a7.mobileEasing ? "undefined" != typeof mobileEasing && mobileEasing !== !1 && "default" !== mobileEasing ? mobileEasing : a7.mobileEasing : "undefined" != typeof dataEasing && dataEasing !== !1 && "default" !== dataEasing ? dataEasing : a7.easing, S = b(" > div", aN).eq(bo).attr("data-slideOn"), "undefined" != typeof S && S !== !1) {
                    O = S
                } else {
                    if ("random" == a7.slideOn) {
                        var O = new Array("next", "prev");
                        O = a1(O), O = O[0]
                    } else {
                        O = a7.slideOn
                    }
                }
                var G = b(" > div", aN).eq(bo).attr("data-time");
                h = "undefined" != typeof G && G !== !1 && "" !== G ? parseFloat(G) : a7.time;
                var t = b(" > div", aN).eq(bo).attr("data-transPeriod");
                switch (u = "undefined" != typeof t && t !== !1 && "" !== t ? parseFloat(t) : a7.transPeriod, b(aN).hasClass("camerastarted") || (l = "simpleFade", O = "next", z = "", u = 400, b(aN).addClass("camerastarted")), l) {
                    case "simpleFade":
                        bn = 1, W = 1;
                        break;
                    case "curtainTopLeft":
                        bn = 0 == a7.slicedCols ? a7.cols : a7.slicedCols, W = 1;
                        break;
                    case "curtainTopRight":
                        bn = 0 == a7.slicedCols ? a7.cols : a7.slicedCols, W = 1;
                        break;
                    case "curtainBottomLeft":
                        bn = 0 == a7.slicedCols ? a7.cols : a7.slicedCols, W = 1;
                        break;
                    case "curtainBottomRight":
                        bn = 0 == a7.slicedCols ? a7.cols : a7.slicedCols, W = 1;
                        break;
                    case "curtainSliceLeft":
                        bn = 0 == a7.slicedCols ? a7.cols : a7.slicedCols, W = 1;
                        break;
                    case "curtainSliceRight":
                        bn = 0 == a7.slicedCols ? a7.cols : a7.slicedCols, W = 1;
                        break;
                    case "blindCurtainTopLeft":
                        W = 0 == a7.slicedRows ? a7.rows : a7.slicedRows, bn = 1;
                        break;
                    case "blindCurtainTopRight":
                        W = 0 == a7.slicedRows ? a7.rows : a7.slicedRows, bn = 1;
                        break;
                    case "blindCurtainBottomLeft":
                        W = 0 == a7.slicedRows ? a7.rows : a7.slicedRows, bn = 1;
                        break;
                    case "blindCurtainBottomRight":
                        W = 0 == a7.slicedRows ? a7.rows : a7.slicedRows, bn = 1;
                        break;
                    case "blindCurtainSliceTop":
                        W = 0 == a7.slicedRows ? a7.rows : a7.slicedRows, bn = 1;
                        break;
                    case "blindCurtainSliceBottom":
                        W = 0 == a7.slicedRows ? a7.rows : a7.slicedRows, bn = 1;
                        break;
                    case "stampede":
                        X = "-" + u;
                        break;
                    case "mosaic":
                        X = a7.gridDifference;
                        break;
                    case "mosaicReverse":
                        X = a7.gridDifference;
                        break;
                    case "mosaicRandom":
                        break;
                    case "mosaicSpiral":
                        X = a7.gridDifference, x = 1.7;
                        break;
                    case "mosaicSpiralReverse":
                        X = a7.gridDifference, x = 1.7;
                        break;
                    case "topLeftBottomRight":
                        X = a7.gridDifference, x = 6;
                        break;
                    case "bottomRightTopLeft":
                        X = a7.gridDifference, x = 6;
                        break;
                    case "bottomLeftTopRight":
                        X = a7.gridDifference, x = 6;
                        break;
                    case "topRightBottomLeft":
                        X = a7.gridDifference, x = 6;
                        break;
                    case "scrollLeft":
                        bn = 1, W = 1;
                        break;
                    case "scrollRight":
                        bn = 1, W = 1;
                        break;
                    case "scrollTop":
                        bn = 1, W = 1;
                        break;
                    case "scrollBottom":
                        bn = 1, W = 1;
                        break;
                    case "scrollHorz":
                        bn = 1, W = 1
                }
                for (var br, n, w = 0, v = W * bn, f = ba - Math.floor(ba / bn) * bn, d = bc - Math.floor(bc / W) * W, c = 0, M = 0, bj = new Array, bg = new Array, bd = new Array; v > w;) {
                    bj.push(w), bg.push(w), aH.append('<div class="cameraappended" style="display:none; overflow:hidden; position:absolute; z-index:1000" />');
                    var V = b(".cameraappended:eq(" + w + ")", aP);
                    "scrollLeft" == l || "scrollRight" == l || "scrollTop" == l || "scrollBottom" == l || "scrollHorz" == l ? ad.eq(bo).clone().show().appendTo(V) : "next" == O ? ad.eq(bo).clone().show().appendTo(V) : ad.eq(bm).clone().show().appendTo(V), br = f > w % bn ? 1 : 0, w % bn == 0 && (c = 0), n = Math.floor(w / bn) < d ? 1 : 0, V.css({
                        height: Math.floor(bc / W + n + 1),
                        left: c,
                        top: M,
                        width: Math.floor(ba / bn + br + 1)
                    }), b("> .cameraSlide", V).css({
                        height: bc,
                        "margin-left": "-" + c + "px",
                        "margin-top": "-" + M + "px",
                        width: ba
                    }), c = c + V.width() - 1, w % bn == bn - 1 && (M = M + V.height() - 1), w++
                }
                switch (l) {
                    case "curtainTopLeft":
                        break;
                    case "curtainBottomLeft":
                        break;
                    case "curtainSliceLeft":
                        break;
                    case "curtainTopRight":
                        bj = bj.reverse();
                        break;
                    case "curtainBottomRight":
                        bj = bj.reverse();
                        break;
                    case "curtainSliceRight":
                        bj = bj.reverse();
                        break;
                    case "blindCurtainTopLeft":
                        break;
                    case "blindCurtainBottomLeft":
                        bj = bj.reverse();
                        break;
                    case "blindCurtainSliceTop":
                        break;
                    case "blindCurtainTopRight":
                        break;
                    case "blindCurtainBottomRight":
                        bj = bj.reverse();
                        break;
                    case "blindCurtainSliceBottom":
                        bj = bj.reverse();
                        break;
                    case "stampede":
                        bj = a1(bj);
                        break;
                    case "mosaic":
                        break;
                    case "mosaicReverse":
                        bj = bj.reverse();
                        break;
                    case "mosaicRandom":
                        bj = a1(bj);
                        break;
                    case "mosaicSpiral":
                        var bw, bf, ae, bi = W / 2,
                            bk = 0;
                        for (ae = 0; bi > ae; ae++) {
                            for (bf = ae, bw = ae; bn - ae - 1 > bw; bw++) {
                                bd[bk++] = bf * bn + bw
                            }
                            for (bw = bn - ae - 1, bf = ae; W - ae - 1 > bf; bf++) {
                                bd[bk++] = bf * bn + bw
                            }
                            for (bf = W - ae - 1, bw = bn - ae - 1; bw > ae; bw--) {
                                bd[bk++] = bf * bn + bw
                            }
                            for (bw = ae, bf = W - ae - 1; bf > ae; bf--) {
                                bd[bk++] = bf * bn + bw
                            }
                        }
                        bj = bd;
                        break;
                    case "mosaicSpiralReverse":
                        var bw, bf, ae, bi = W / 2,
                            bk = v - 1;
                        for (ae = 0; bi > ae; ae++) {
                            for (bf = ae, bw = ae; bn - ae - 1 > bw; bw++) {
                                bd[bk--] = bf * bn + bw
                            }
                            for (bw = bn - ae - 1, bf = ae; W - ae - 1 > bf; bf++) {
                                bd[bk--] = bf * bn + bw
                            }
                            for (bf = W - ae - 1, bw = bn - ae - 1; bw > ae; bw--) {
                                bd[bk--] = bf * bn + bw
                            }
                            for (bw = ae, bf = W - ae - 1; bf > ae; bf--) {
                                bd[bk--] = bf * bn + bw
                            }
                        }
                        bj = bd;
                        break;
                    case "topLeftBottomRight":
                        for (var bf = 0; W > bf; bf++) {
                            for (var bw = 0; bn > bw; bw++) {
                                bd.push(bw + bf)
                            }
                        }
                        bg = bd;
                        break;
                    case "bottomRightTopLeft":
                        for (var bf = 0; W > bf; bf++) {
                            for (var bw = 0; bn > bw; bw++) {
                                bd.push(bw + bf)
                            }
                        }
                        bg = bd.reverse();
                        break;
                    case "bottomLeftTopRight":
                        for (var bf = W; bf > 0; bf--) {
                            for (var bw = 0; bn > bw; bw++) {
                                bd.push(bw + bf)
                            }
                        }
                        bg = bd;
                        break;
                    case "topRightBottomLeft":
                        for (var bf = 0; W > bf; bf++) {
                            for (var bw = bn; bw > 0; bw--) {
                                bd.push(bw + bf)
                            }
                        }
                        bg = bd
                }
                b.each(bj, function(k, j) {
                    function m() {
                        if (b(this).addClass("cameraeased"), b(".cameraeased", aP).length >= 0 && b(ap).css({
                                visibility: "visible"
                            }), b(".cameraeased", aP).length == v) {
                            a8(), b(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom", aS).each(function() {
                                b(this).css("visibility", "hidden")
                            }), ad.eq(bo).show().css("z-index", "999").removeClass("cameranext").addClass("cameracurrent"), ad.eq(bm).css("z-index", "1").removeClass("cameracurrent"), b(".cameraContent", aS).eq(bo).addClass("cameracurrent"), bm >= 0 && b(".cameraContent", aS).eq(bm).removeClass("cameracurrent"), a7.onEndTransition.call(this), "hide" != b("> div", aN).eq(bo).attr("data-video") && b(".cameraContent.cameracurrent .imgFake", aS).length && b(".cameraContent.cameracurrent .imgFake", aS).click();
                            var A = ad.eq(bo).find(".fadeIn").length,
                                r = b(".cameraContent", aS).eq(bo).find(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom").length;
                            0 != A && b(".cameraSlide.cameracurrent .fadeIn", aS).each(function() {
                                if ("" != b(this).attr("data-easing")) {
                                    var H = b(this).attr("data-easing")
                                } else {
                                    var H = z
                                }
                                var D = b(this);
                                if ("undefined" == typeof D.attr("data-outerWidth") || D.attr("data-outerWidth") === !1 || "" === D.attr("data-outerWidth")) {
                                    var F = D.outerWidth();
                                    D.attr("data-outerWidth", F)
                                } else {
                                    var F = D.attr("data-outerWidth")
                                }
                                if ("undefined" == typeof D.attr("data-outerHeight") || D.attr("data-outerHeight") === !1 || "" === D.attr("data-outerHeight")) {
                                    var I = D.outerHeight();
                                    D.attr("data-outerHeight", I)
                                } else {
                                    var I = D.attr("data-outerHeight")
                                }
                                var E = D.position(),
                                    K = (E.left, E.top, D.attr("class")),
                                    J = D.index();
                                D.parents(".camerarelative").outerHeight(), D.parents(".camerarelative").outerWidth(); - 1 != K.indexOf("fadeIn") ? D.animate({
                                    opacity: 0
                                }, 0).css("visibility", "visible").delay(h / A * 0.1 * (J - 1)).animate({
                                    opacity: 1
                                }, h / A * 0.15, H) : D.css("visibility", "visible")
                            }), b(".cameraContent.cameracurrent", aS).show(), 0 != r && b(".cameraContent.cameracurrent .moveFromLeft, .cameraContent.cameracurrent .moveFromRight, .cameraContent.cameracurrent .moveFromTop, .cameraContent.cameracurrent .moveFromBottom, .cameraContent.cameracurrent .fadeIn, .cameraContent.cameracurrent .fadeFromLeft, .cameraContent.cameracurrent .fadeFromRight, .cameraContent.cameracurrent .fadeFromTop, .cameraContent.cameracurrent .fadeFromBottom", aS).each(function() {
                                if ("" != b(this).attr("data-easing")) {
                                    var H = b(this).attr("data-easing")
                                } else {
                                    var H = z
                                }
                                var D = b(this),
                                    F = D.position(),
                                    I = (F.left, F.top, D.attr("class")),
                                    E = D.index(),
                                    J = D.outerHeight(); - 1 != I.indexOf("moveFromLeft") ? (D.css({
                                    left: "-" + ba + "px",
                                    right: "auto"
                                }), D.css("visibility", "visible").delay(h / r * 0.1 * (E - 1)).animate({
                                    left: F.left
                                }, h / r * 0.15, H)) : -1 != I.indexOf("moveFromRight") ? (D.css({
                                    left: ba + "px",
                                    right: "auto"
                                }), D.css("visibility", "visible").delay(h / r * 0.1 * (E - 1)).animate({
                                    left: F.left
                                }, h / r * 0.15, H)) : -1 != I.indexOf("moveFromTop") ? (D.css({
                                    top: "-" + bc + "px",
                                    bottom: "auto"
                                }), D.css("visibility", "visible").delay(h / r * 0.1 * (E - 1)).animate({
                                    top: F.top
                                }, h / r * 0.15, H, function() {
                                    D.css({
                                        top: "auto",
                                        bottom: 0
                                    })
                                })) : -1 != I.indexOf("moveFromBottom") ? (D.css({
                                    top: bc + "px",
                                    bottom: "auto"
                                }), D.css("visibility", "visible").delay(h / r * 0.1 * (E - 1)).animate({
                                    top: F.top
                                }, h / r * 0.15, H)) : -1 != I.indexOf("fadeFromLeft") ? (D.animate({
                                    opacity: 0
                                }, 0).css({
                                    left: "-" + ba + "px",
                                    right: "auto"
                                }), D.css("visibility", "visible").delay(h / r * 0.1 * (E - 1)).animate({
                                    left: F.left,
                                    opacity: 1
                                }, h / r * 0.15, H)) : -1 != I.indexOf("fadeFromRight") ? (D.animate({
                                    opacity: 0
                                }, 0).css({
                                    left: ba + "px",
                                    right: "auto"
                                }), D.css("visibility", "visible").delay(h / r * 0.1 * (E - 1)).animate({
                                    left: F.left,
                                    opacity: 1
                                }, h / r * 0.15, H)) : -1 != I.indexOf("fadeFromTop") ? (D.animate({
                                    opacity: 0
                                }, 0).css({
                                    top: "-" + bc + "px",
                                    bottom: "auto"
                                }), D.css("visibility", "visible").delay(h / r * 0.1 * (E - 1)).animate({
                                    top: F.top,
                                    opacity: 1
                                }, h / r * 0.15, H, function() {
                                    D.css({
                                        top: "auto",
                                        bottom: 0
                                    })
                                })) : -1 != I.indexOf("fadeFromBottom") ? (D.animate({
                                    opacity: 0
                                }, 0).css({
                                    bottom: "-" + J + "px"
                                }), D.css("visibility", "visible").delay(h / r * 0.1 * (E - 1)).animate({
                                    bottom: "0",
                                    opacity: 1
                                }, h / r * 0.15, H)) : -1 != I.indexOf("fadeIn") ? D.animate({
                                    opacity: 0
                                }, 0).css("visibility", "visible").delay(h / r * 0.1 * (E - 1)).animate({
                                    opacity: 1
                                }, h / r * 0.15, H) : D.css("visibility", "visible")
                            }), b(".cameraappended", aP).remove(), aN.removeClass("camerasliding"), ad.eq(bm).hide();
                            var B, C = b(".camera_bar_cont", aO).width(),
                                q = b(".camera_bar_cont", aO).height();
                            B = "pie" != aR ? 0.05 : 0.005, b("#" + aQ).animate({
                                opacity: a7.loaderOpacity
                            }, 200), ag = setInterval(function() {
                                if (aN.hasClass("stopped") && clearInterval(ag), "pie" != aR) {
                                    switch (1.002 >= a && !aN.hasClass("stopped") && !aN.hasClass("paused") && !aN.hasClass("hovered") ? a += B : 1 >= a && (aN.hasClass("stopped") || aN.hasClass("paused") || aN.hasClass("stopped") || aN.hasClass("hovered")) ? a = a : aN.hasClass("stopped") || aN.hasClass("paused") || aN.hasClass("hovered") || (clearInterval(ag), a9(), b("#" + aQ).animate({
                                        opacity: 0
                                    }, 200, function() {
                                        clearTimeout(ac), ac = setTimeout(a4, g), aX(), a7.onStartLoading.call(this)
                                    })), aJ) {
                                        case "leftToRight":
                                            b("#" + aQ).animate({
                                                right: C - C * a
                                            }, h * B, "linear");
                                            break;
                                        case "rightToLeft":
                                            b("#" + aQ).animate({
                                                left: C - C * a
                                            }, h * B, "linear");
                                            break;
                                        case "topToBottom":
                                            b("#" + aQ).animate({
                                                bottom: q - q * a
                                            }, h * B, "linear");
                                            break;
                                        case "bottomToTop":
                                            b("#" + aQ).animate({
                                                bottom: q - q * a
                                            }, h * B, "linear")
                                    }
                                } else {
                                    aI = a, aK.clearRect(0, 0, a7.pieDiameter, a7.pieDiameter), aK.globalCompositeOperation = "destination-over", aK.beginPath(), aK.arc(a7.pieDiameter / 2, a7.pieDiameter / 2, a7.pieDiameter / 2 - a7.loaderStroke, 0, 2 * Math.PI, !1), aK.lineWidth = a7.loaderStroke, aK.strokeStyle = a7.loaderBgColor, aK.stroke(), aK.closePath(), aK.globalCompositeOperation = "source-over", aK.beginPath(), aK.arc(a7.pieDiameter / 2, a7.pieDiameter / 2, a7.pieDiameter / 2 - a7.loaderStroke, 0, 2 * Math.PI * aI, !1), aK.lineWidth = a7.loaderStroke - 2 * a7.loaderPadding, aK.strokeStyle = a7.loaderColor, aK.stroke(), aK.closePath(), 1.002 >= a && !aN.hasClass("stopped") && !aN.hasClass("paused") && !aN.hasClass("hovered") ? a += B : 1 >= a && (aN.hasClass("stopped") || aN.hasClass("paused") || aN.hasClass("hovered")) ? a = a : aN.hasClass("stopped") || aN.hasClass("paused") || aN.hasClass("hovered") || (clearInterval(ag), a9(), b("#" + aQ + ", .camera_canvas_wrap", aO).animate({
                                        opacity: 0
                                    }, 200, function() {
                                        clearTimeout(ac), ac = setTimeout(a4, g), aX(), a7.onStartLoading.call(this)
                                    }))
                                }
                            }, h * B)
                        }
                    }
                    switch (br = f > j % bn ? 1 : 0, j % bn == 0 && (c = 0), n = Math.floor(j / bn) < d ? 1 : 0, l) {
                        case "simpleFade":
                            height = bc, width = ba, opacityOnGrid = 0;
                            break;
                        case "curtainTopLeft":
                            height = 0, width = Math.floor(ba / bn + br + 1), marginTop = "-" + Math.floor(bc / W + n + 1) + "px";
                            break;
                        case "curtainTopRight":
                            height = 0, width = Math.floor(ba / bn + br + 1), marginTop = "-" + Math.floor(bc / W + n + 1) + "px";
                            break;
                        case "curtainBottomLeft":
                            height = 0, width = Math.floor(ba / bn + br + 1), marginTop = Math.floor(bc / W + n + 1) + "px";
                            break;
                        case "curtainBottomRight":
                            height = 0, width = Math.floor(ba / bn + br + 1), marginTop = Math.floor(bc / W + n + 1) + "px";
                            break;
                        case "curtainSliceLeft":
                            height = 0, width = Math.floor(ba / bn + br + 1), marginTop = j % 2 == 0 ? Math.floor(bc / W + n + 1) + "px" : "-" + Math.floor(bc / W + n + 1) + "px";
                            break;
                        case "curtainSliceRight":
                            height = 0, width = Math.floor(ba / bn + br + 1), marginTop = j % 2 == 0 ? Math.floor(bc / W + n + 1) + "px" : "-" + Math.floor(bc / W + n + 1) + "px";
                            break;
                        case "blindCurtainTopLeft":
                            height = Math.floor(bc / W + n + 1), width = 0, marginLeft = "-" + Math.floor(ba / bn + br + 1) + "px";
                            break;
                        case "blindCurtainTopRight":
                            height = Math.floor(bc / W + n + 1), width = 0, marginLeft = Math.floor(ba / bn + br + 1) + "px";
                            break;
                        case "blindCurtainBottomLeft":
                            height = Math.floor(bc / W + n + 1), width = 0, marginLeft = "-" + Math.floor(ba / bn + br + 1) + "px";
                            break;
                        case "blindCurtainBottomRight":
                            height = Math.floor(bc / W + n + 1), width = 0, marginLeft = Math.floor(ba / bn + br + 1) + "px";
                            break;
                        case "blindCurtainSliceBottom":
                            height = Math.floor(bc / W + n + 1), width = 0, marginLeft = j % 2 == 0 ? "-" + Math.floor(ba / bn + br + 1) + "px" : Math.floor(ba / bn + br + 1) + "px";
                            break;
                        case "blindCurtainSliceTop":
                            height = Math.floor(bc / W + n + 1), width = 0, marginLeft = j % 2 == 0 ? "-" + Math.floor(ba / bn + br + 1) + "px" : Math.floor(ba / bn + br + 1) + "px";
                            break;
                        case "stampede":
                            height = 0, width = 0, marginLeft = 0.2 * ba * (k % bn - (bn - Math.floor(bn / 2))) + "px", marginTop = 0.2 * bc * (Math.floor(k / bn) + 1 - (W - Math.floor(W / 2))) + "px";
                            break;
                        case "mosaic":
                            height = 0, width = 0;
                            break;
                        case "mosaicReverse":
                            height = 0, width = 0, marginLeft = Math.floor(ba / bn + br + 1) + "px", marginTop = Math.floor(bc / W + n + 1) + "px";
                            break;
                        case "mosaicRandom":
                            height = 0, width = 0, marginLeft = 0.5 * Math.floor(ba / bn + br + 1) + "px", marginTop = 0.5 * Math.floor(bc / W + n + 1) + "px";
                            break;
                        case "mosaicSpiral":
                            height = 0, width = 0, marginLeft = 0.5 * Math.floor(ba / bn + br + 1) + "px", marginTop = 0.5 * Math.floor(bc / W + n + 1) + "px";
                            break;
                        case "mosaicSpiralReverse":
                            height = 0, width = 0, marginLeft = 0.5 * Math.floor(ba / bn + br + 1) + "px", marginTop = 0.5 * Math.floor(bc / W + n + 1) + "px";
                            break;
                        case "topLeftBottomRight":
                            height = 0, width = 0;
                            break;
                        case "bottomRightTopLeft":
                            height = 0, width = 0, marginLeft = Math.floor(ba / bn + br + 1) + "px", marginTop = Math.floor(bc / W + n + 1) + "px";
                            break;
                        case "bottomLeftTopRight":
                            height = 0, width = 0, marginLeft = 0, marginTop = Math.floor(bc / W + n + 1) + "px";
                            break;
                        case "topRightBottomLeft":
                            height = 0, width = 0, marginLeft = Math.floor(ba / bn + br + 1) + "px", marginTop = 0;
                            break;
                        case "scrollRight":
                            height = bc, width = ba, marginLeft = -ba;
                            break;
                        case "scrollLeft":
                            height = bc, width = ba, marginLeft = ba;
                            break;
                        case "scrollTop":
                            height = bc, width = ba, marginTop = bc;
                            break;
                        case "scrollBottom":
                            height = bc, width = ba, marginTop = -bc;
                            break;
                        case "scrollHorz":
                            height = bc, width = ba, marginLeft = 0 == bm && bo == aw - 1 ? -ba : bo > bm || bm == aw - 1 && 0 == bo ? ba : -ba
                    }
                    var o = b(".cameraappended:eq(" + j + ")", aP);
                    "undefined" != typeof ag && (clearInterval(ag), clearTimeout(ac), ac = setTimeout(a4, u + X)), b(aj).length && (b(".camera_pag li", a6).removeClass("cameracurrent"), b(".camera_pag li", a6).eq(bo).addClass("cameracurrent")), b(ap).length && (b("li", ap).removeClass("cameracurrent"), b("li", ap).eq(bo).addClass("cameracurrent"), b("li", ap).not(".cameracurrent").find("img").animate({
                        opacity: 0.5
                    }, 0), b("li.cameracurrent img", ap).animate({
                        opacity: 1
                    }, 0), b("li", ap).hover(function() {
                        b("img", this).stop(!0, !1).animate({
                            opacity: 1
                        }, 150)
                    }, function() {
                        b(this).hasClass("cameracurrent") || b("img", this).stop(!0, !1).animate({
                            opacity: 0.5
                        }, 150)
                    }));
                    var g = parseFloat(u) + parseFloat(X);
                    "scrollLeft" == l || "scrollRight" == l || "scrollTop" == l || "scrollBottom" == l || "scrollHorz" == l ? (a7.onStartTransition.call(this), g = 0, o.delay((u + X) / v * bg[k] * x * 0.5).css({
                        display: "block",
                        height: height,
                        "margin-left": marginLeft,
                        "margin-top": marginTop,
                        width: width
                    }).animate({
                        height: Math.floor(bc / W + n + 1),
                        "margin-top": 0,
                        "margin-left": 0,
                        width: Math.floor(ba / bn + br + 1)
                    }, u - X, z, m), ad.eq(bm).delay((u + X) / v * bg[k] * x * 0.5).animate({
                        "margin-left": -1 * marginLeft,
                        "margin-top": -1 * marginTop
                    }, u - X, z, function() {
                        b(this).css({
                            "margin-top": 0,
                            "margin-left": 0
                        })
                    })) : (a7.onStartTransition.call(this), g = parseFloat(u) + parseFloat(X), "next" == O ? o.delay((u + X) / v * bg[k] * x * 0.5).css({
                        display: "block",
                        height: height,
                        "margin-left": marginLeft,
                        "margin-top": marginTop,
                        width: width,
                        opacity: opacityOnGrid
                    }).animate({
                        height: Math.floor(bc / W + n + 1),
                        "margin-top": 0,
                        "margin-left": 0,
                        opacity: 1,
                        width: Math.floor(ba / bn + br + 1)
                    }, u - X, z, m) : (ad.eq(bo).show().css("z-index", "999").addClass("cameracurrent"), ad.eq(bm).css("z-index", "1").removeClass("cameracurrent"), b(".cameraContent", aS).eq(bo).addClass("cameracurrent"), b(".cameraContent", aS).eq(bm).removeClass("cameracurrent"), o.delay((u + X) / v * bg[k] * x * 0.5).css({
                        display: "block",
                        height: Math.floor(bc / W + n + 1),
                        "margin-top": 0,
                        "margin-left": 0,
                        opacity: 1,
                        width: Math.floor(ba / bn + br + 1)
                    }).animate({
                        height: height,
                        "margin-left": marginLeft,
                        "margin-top": marginTop,
                        width: width,
                        opacity: opacityOnGrid
                    }, u - X, z, m)))
                })
            } else {
                var bh = an[bo],
                    bv = new Image;
                bv.src = bh + "?" + (new Date).getTime(), bl.css("visibility", "hidden"), bl.prepend(b(bv).attr("class", "imgLoaded").css("visibility", "hidden"));
                var bu, e;
                b(bv).get(0).complete && "0" != bu && "0" != e && "undefined" != typeof bu && bu !== !1 && "undefined" != typeof e && e !== !1 || (b(".camera_loader", a6).delay(500).fadeIn(400), bv.onload = function() {
                    bu = bv.naturalWidth, e = bv.naturalHeight, b(bv).attr("data-alignment", aM[bo]).attr("data-portrait", af[bo]), b(bv).attr("width", bu), b(bv).attr("height", e), aP.find(".cameraSlide_" + bo).css("visibility", "visible"), aZ(), aX(bo + 1), b(".camera_loader", a6).is(":visible") ? b(".camera_loader", a6).fadeOut(400) : (b(".camera_loader", a6).css({
                        visibility: "hidden"
                    }), b(".camera_loader", a6).fadeOut(400, function() {
                        b(".camera_loader", a6).css({
                            visibility: "visible"
                        })
                    }))
                })
            }
        }
        var a5 = {
                alignment: "center",
                autoAdvance: !0,
                mobileAutoAdvance: !0,
                barDirection: "leftToRight",
                barPosition: "bottom",
                cols: 6,
                easing: "easeInOutExpo",
                mobileEasing: "",
                fx: "random",
                mobileFx: "",
                gridDifference: 250,
                height: "50%",
                imagePath: "images/",
                hover: !0,
                loader: "pie",
                loaderColor: "#eeeeee",
                loaderBgColor: "#222222",
                loaderOpacity: 0.8,
                loaderPadding: 2,
                loaderStroke: 7,
                minHeight: "200px",
                navigation: !0,
                navigationHover: !0,
                mobileNavHover: !0,
                opacityOnGrid: !1,
                overlayer: !0,
                pagination: !0,
                playPause: !1,
                pauseOnClick: !0,
                pieDiameter: 38,
                piePosition: "rightTop",
                portrait: !1,
                rows: 4,
                slicedCols: 12,
                slicedRows: 8,
                slideOn: "random",
                thumbnails: !1,
                thumbheight: "100",
                thumbwidth: "75",
                time: 7000,
                transPeriod: 1500,
                fullpage: !1,
                lightbox: "none",
                mobileimageresolution: 0,
                container: "",
                onEndTransition: function() {},
                onLoaded: function() {},
                onStartLoading: function() {},
                onStartTransition: function() {}
            },
            a7 = b.extend({}, a5, a7),
            a6 = b(this).addClass("camera_wrap");
        1 == a7.fullpage ? (b(document.body).css("background", "none").prepend(a6), a6.css({
            height: "100%",
            "margin-left": 0,
            "margin-right": 0,
            "margin-top": 0,
            position: "fixed",
            visibility: "visible",
            left: 0,
            right: 0,
            "min-width": "100%",
            "min-height": "100%",
            width: "100%",
            "z-index": "-1"
        })) : 0 != a7.container && (b(a7.container).css("background", "none").prepend('<div class="slideshowck_container_wrap"></div>'), b(".slideshowck_container_wrap", a7.container).prepend(a6), "relative" != b(a7.container).css("position") && "absolute" != b(a7.container).css("position") && b(a7.container).css("position", "relative").css("z-index", "0"), a6.parent(".slideshowck_container_wrap").css({
            height: "100%",
            "margin-left": 0,
            "margin-right": 0,
            "margin-top": 0,
            position: "absolute",
            visibility: "visible",
            left: 0,
            right: 0,
            "min-width": "100%",
            "min-height": "100%",
            width: "100%",
            overflow: "hidden",
            "z-index": "-1"
        })), a6.wrapInner('<div class="camera_src" />').wrapInner('<div class="camera_fakehover" />');
        var aS = b(".camera_fakehover", a6);
        aS.append('<div class="camera_target"></div>'), 1 == a7.overlayer && aS.append('<div class="camera_overlayer"></div>'), aS.append('<div class="camera_target_content"></div>');
        var aR;
        aR = (navigator.userAgent.match(/MSIE 8.0/i) || navigator.userAgent.match(/MSIE 7.0/i) || navigator.userAgent.match(/MSIE 6.0/i)) && "none" != a7.loader ? "bar" : a7.loader, aS.append("pie" == aR ? '<div class="camera_pie"></div>' : "bar" == aR ? '<div class="camera_bar"></div>' : '<div class="camera_bar" style="display:none"></div>'), 1 == a7.playPause && aS.append('<div class="camera_commands"></div>'), 1 == a7.navigation && aS.append('<div class="camera_prev"><i class="fa  fa-chevron-left fa-lg"></i></div>').append('<div class="camera_next"><i class="fa fa-chevron-right fa-lg"></i></div>'), 1 == a7.thumbnails && a6.append('<div class="camera_thumbs_cont" />'), 1 == a7.thumbnails && 1 != a7.pagination && b(".camera_thumbs_cont", a6).wrap("<div />").wrap('<div class="camera_thumbs" />').wrap("<div />").wrap('<div class="camera_command_wrap" />'), 1 == a7.pagination && a6.append('<div class="camera_pag"></div>'), a6.append('<div class="camera_loader"><i class="fa fa-spinner fa-spin fa-2x"></i></div>'), b(".camera_caption", a6).each(function() {
            b(this).wrapInner("<div />")
        });
        var ba, bc, aQ = "pie_" + a6.attr("id"),
            aN = b(".camera_src", a6),
            aP = b(".camera_target", a6),
            a2 = b(".camera_target_content", a6),
            aB = b(".camera_pie", a6),
            ai = b(".camera_bar", a6),
            aq = b(".camera_prev", a6),
            ak = b(".camera_next", a6),
            ax = b(".camera_commands", a6),
            aj = b(".camera_pag", a6),
            ap = b(".camera_thumbs_cont", a6),
            aD = parseInt(b(document.body).width());
        if (imgresolution = 0, a7.mobileimageresolution) {
            var aW = a7.mobileimageresolution.split(",");
            for (i = 0; i < aW.length; i++) {
                aD <= aW[i] && (0 != imgresolution && aW[i] <= imgresolution || 0 == imgresolution && aD < Math.max.apply(Math, aW)) && (imgresolution = aW[i])
            }
        }
        var au, an = new Array;
        b("> div", aN).each(function() {
            au = b(this).attr("data-src"), imgresolution && (imgsrctmp = au.split("/"), imgnametmp = imgsrctmp[imgsrctmp.length - 1], imgsrctmp[imgsrctmp.length - 1] = imgresolution + "/" + imgnametmp, au = imgsrctmp.join("/")), an.push(au)
        });
        var aE = new Array,
            am = new Array,
            av = new Array;
        b("> div", aN).each(function() {
            aE.push(b(this).attr("data-link") ? b(this).attr("data-link") : ""), am.push(b(this).attr("data-rel") ? 'rel="' + b(this).attr("data-rel") + '" ' : ""), av.push(b(this).attr("data-title") ? 'title="' + b(this).attr("data-title") + '" ' : "")
        });
        var aA = new Array;
        b("> div", aN).each(function() {
            aA.push(b(this).attr("data-target") ? b(this).attr("data-target") : "")
        });
        var af = new Array;
        b("> div", aN).each(function() {
            af.push(b(this).attr("data-portrait") ? b(this).attr("data-portrait") : "")
        });
        var aM = new Array;
        b("> div", aN).each(function() {
            aM.push(b(this).attr("data-alignment") ? b(this).attr("data-alignment") : "")
        });
        var ay = new Array;
        b("> div", aN).each(function() {
            ay.push(b(this).attr("data-thumb") ? b(this).attr("data-thumb") : "")
        });
        var aw = an.length;
        b(a2).append('<div class="cameraContents" />');
        var ao;
        for (ao = 0; aw > ao; ao++) {
            if (b(".cameraContents", a2).append('<div class="cameraContent" />'), "" != aE[ao]) {
                var a3 = b("> div ", aN).eq(ao).attr("data-box");
                a3 = "undefined" != typeof a3 && a3 !== !1 && "" != a3 ? 'data-box="' + b("> div ", aN).eq(ao).attr("data-box") + '"' : "", b(".camera_target_content .cameraContent:eq(" + ao + ")", a6).append('<a class="camera_link" ' + am[ao] + av[ao] + 'href="' + aE[ao] + '" ' + a3 + ' target="' + aA[ao] + '"></a>')
            }
        }
        b(".camera_caption", a6).each(function() {
            var d = b(this).parent().index(),
                c = a6.find(".cameraContent").eq(d);
            b(this).appendTo(c)
        }), aP.append('<div class="cameraCont" />');
        var al, aH = b(".cameraCont", a6);
        for (al = 0; aw > al; al++) {
            aH.append('<div class="cameraSlide cameraSlide_' + al + '" />');
            var at = b("> div:eq(" + al + ")", aN);
            aP.find(".cameraSlide_" + al).clone(at)
        }
        b(window).bind("load resize pageshow", function() {
            a8(), aV()
        }), aH.append('<div class="cameraSlide cameraSlide_' + al + '" />');
        var ar;
        a6.show();
        var ah, ba = aP.width(),
            bc = aP.height();
        b(window).bind("resize pageshow", function() {
            1 == ar && aZ(), b("ul", ap).animate({
                "margin-top": 0
            }, 0, a8), aN.hasClass("paused") || (aN.addClass("paused"), b(".camera_stop", aO).length ? (b(".camera_stop", aO).hide(), b(".camera_play", aO).show(), "none" != aR && b("#" + aQ).hide()) : "none" != aR && b("#" + aQ).hide(), clearTimeout(ah), ah = setTimeout(function() {
                aN.removeClass("paused"), b(".camera_play", aO).length ? (b(".camera_play", aO).hide(), b(".camera_stop", aO).show(), "none" != aR && b("#" + aQ).fadeIn()) : "none" != aR && b("#" + aQ).fadeIn()
            }, 1500))
        }), aU();
        var ag, ac, ab, aa, ax, aj, az, bb;
        if (ab = aT() && "" != a7.mobileAutoAdvance ? a7.mobileAutoAdvance : a7.autoAdvance, 0 == ab && aN.addClass("paused"), aa = aT() && "" != a7.mobileNavHover ? a7.mobileNavHover : a7.navigationHover, 0 != aN.length) {
            var ad = b(".cameraSlide", aP);
            ad.wrapInner('<div class="camerarelative" />');
            var aJ = a7.barDirection,
                aO = a6;
            b("iframe", aS).each(function() {
                var f = b(this),
                    d = f.attr("src");
                f.attr("data-src", d);
                var c = f.parent().index("#" + a6.attr("id") + " .camera_src > div");
                b(".camera_target_content .cameraContent:eq(" + c + ")", a6).append(f)
            }), a9(), 1 == a7.hover && (aT() || aS.hover(function() {
                aN.addClass("hovered")
            }, function() {
                aN.removeClass("hovered")
            })), 1 == aa && (b(aq, a6).animate({
                opacity: 0
            }, 0), b(ak, a6).animate({
                opacity: 0
            }, 0), b(ax, a6).animate({
                opacity: 0
            }, 0), aT() ? (aS.on("vmouseover", function() {
                b(aq, a6).animate({
                    opacity: 1
                }, 200), b(ak, a6).animate({
                    opacity: 1
                }, 200), b(ax, a6).animate({
                    opacity: 1
                }, 200)
            }), aS.on("vmouseout", function() {
                b(aq, a6).delay(500).animate({
                    opacity: 0
                }, 200), b(ak, a6).delay(500).animate({
                    opacity: 0
                }, 200), b(ax, a6).delay(500).animate({
                    opacity: 0
                }, 200)
            })) : aS.hover(function() {
                b(aq, a6).animate({
                    opacity: 1
                }, 200), b(ak, a6).animate({
                    opacity: 1
                }, 200), b(ax, a6).animate({
                    opacity: 1
                }, 200)
            }, function() {
                b(aq, a6).animate({
                    opacity: 0
                }, 200), b(ak, a6).animate({
                    opacity: 0
                }, 200), b(ax, a6).animate({
                    opacity: 0
                }, 200)
            })), aO.on("click", ".camera_stop", function() {
                ab = !1, aN.addClass("paused"), b(".camera_stop", aO).length ? (b(".camera_stop", aO).hide(), b(".camera_play", aO).show(), "none" != aR && b("#" + aQ).hide()) : "none" != aR && b("#" + aQ).hide()
            }), aO.on("click", ".camera_play", function() {
                ab = !0, aN.removeClass("paused"), b(".camera_play", aO).length ? (b(".camera_play", aO).hide(), b(".camera_stop", aO).show(), "none" != aR && b("#" + aQ).show()) : "none" != aR && b("#" + aQ).show()
            }), 1 == a7.pauseOnClick && b(".camera_target_content", aS).mouseup(function() {
                ab = !1, aN.addClass("paused"), b(".camera_stop", aO).hide(), b(".camera_play", aO).show(), b("#" + aQ).hide()
            }), b(".cameraContent, .imgFake", aS).hover(function() {
                az = !0
            }, function() {
                az = !1
            }), b(".cameraContent, .imgFake", aS).bind("click", function() {
                1 == bb && 1 == az && (ab = !1, b(".camera_caption", aS).hide(), aN.addClass("paused"), b(".camera_stop", aO).hide(), b(".camera_play", aO).show(), b("#" + aQ).hide())
            })
        }
        if ("pie" != aR) {
            ai.append('<span class="camera_bar_cont" />'), b(".camera_bar_cont", ai).animate({
                opacity: a7.loaderOpacity
            }, 0).css({
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                "background-color": a7.loaderBgColor
            }).append('<span id="' + aQ + '" />'), b("#" + aQ).animate({
                opacity: 0
            }, 0);
            var aL = b("#" + aQ);
            switch (aL.css({
                position: "absolute",
                "background-color": a7.loaderColor
            }), a7.barPosition) {
                case "left":
                    ai.css({
                        right: "auto",
                        width: a7.loaderStroke
                    });
                    break;
                case "right":
                    ai.css({
                        left: "auto",
                        width: a7.loaderStroke
                    });
                    break;
                case "top":
                    ai.css({
                        bottom: "auto",
                        height: a7.loaderStroke
                    });
                    break;
                case "bottom":
                    ai.css({
                        top: "auto",
                        height: a7.loaderStroke
                    })
            }
            switch (aJ) {
                case "leftToRight":
                    aL.css({
                        left: 0,
                        right: 0,
                        top: a7.loaderPadding,
                        bottom: a7.loaderPadding
                    });
                    break;
                case "rightToLeft":
                    aL.css({
                        left: 0,
                        right: 0,
                        top: a7.loaderPadding,
                        bottom: a7.loaderPadding
                    });
                    break;
                case "topToBottom":
                    aL.css({
                        left: a7.loaderPadding,
                        right: a7.loaderPadding,
                        top: 0,
                        bottom: 0
                    });
                    break;
                case "bottomToTop":
                    aL.css({
                        left: a7.loaderPadding,
                        right: a7.loaderPadding,
                        top: 0,
                        bottom: 0
                    })
            }
        } else {
            aB.append('<canvas id="' + aQ + '"></canvas>');
            var aL = document.getElementById(aQ);
            aL.setAttribute("width", a7.pieDiameter), aL.setAttribute("height", a7.pieDiameter);
            var aG;
            switch (a7.piePosition) {
                case "leftTop":
                    aG = "left:0; top:0;";
                    break;
                case "rightTop":
                    aG = "right:0; top:0;";
                    break;
                case "leftBottom":
                    aG = "left:0; bottom:0;";
                    break;
                case "rightBottom":
                    aG = "right:0; bottom:0;"
            }
            aL.setAttribute("style", "position:absolute; z-index:1002; " + aG);
            var a, aI;
            if (aL && aL.getContext) {
                var aK = aL.getContext("2d");
                aK.rotate(1.5 * Math.PI), aK.translate(-a7.pieDiameter, 0)
            }
        }
        if (("none" == aR || 0 == ab) && (b("#" + aQ).hide(), b(".camera_canvas_wrap", aO).hide()), b(aj).length) {
            b(aj).append('<ul class="camera_pag_ul" />');
            var aF;
            for (aF = 0; aw > aF; aF++) {
                b(".camera_pag_ul", a6).append('<li class="pag_nav_' + aF + '" style="position:relative; z-index:1002"><span><span>' + aF + "</span></span></li>")
            }
            b(".camera_pag_ul li", a6).hover(function() {
                if (b(this).addClass("camera_hover"), b(".camera_thumb", this).length) {
                    var f = b(".camera_thumb", this).outerWidth(),
                        d = b(".camera_thumb", this).outerHeight(),
                        c = b(this).outerWidth();
                    b(".camera_thumb", this).show().css({
                        top: "-" + d + "px",
                        left: "-" + (f - c) / 2 + "px"
                    }).animate({
                        opacity: 1,
                        "margin-top": "-3px"
                    }, 200), b(".thumb_arrow", this).show().animate({
                        opacity: 1,
                        "margin-top": "-3px"
                    }, 200)
                }
            }, function() {
                b(this).removeClass("camera_hover"), b(".camera_thumb", this).animate({
                    "margin-top": "-20px",
                    opacity: 0
                }, 200, function() {
                    b(this).css({
                        marginTop: "5px"
                    }).hide()
                }), b(".thumb_arrow", this).animate({
                    "margin-top": "-20px",
                    opacity: 0
                }, 200, function() {
                    b(this).css({
                        marginTop: "5px"
                    }).hide()
                })
            })
        }
        a7.onStartLoading.call(this), aX(), a0();
        var aC = !0;
        b(ax).length && (b(ax).append('<div class="camera_play"><i class="fa fa-play fa-lg"></i></div>').append('<div class="camera_stop"><i class="fa fa-stop fa-lg"></i></div>'), 1 == ab ? (b(".camera_play", aO).hide(), b(".camera_stop", aO).show()) : (b(".camera_stop", aO).hide(), b(".camera_play", aO).show())), a4(), b(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom", aS).each(function() {
            b(this).css("visibility", "hidden")
        }), aY(), b(aq).length && b(aq).click(function() {
            if (!aN.hasClass("camerasliding")) {
                var c = parseFloat(b(".cameraSlide.cameracurrent", aP).index());
                clearInterval(ag), a9(), b("#" + aQ + ", .camera_canvas_wrap", a6).animate({
                    opacity: 0
                }, 0), a4(), aX(0 != c ? c : aw), a7.onStartLoading.call(this)
            }
        }), b(ak).length && b(ak).click(function() {
            if (!aN.hasClass("camerasliding")) {
                var c = parseFloat(b(".cameraSlide.cameracurrent", aP).index());
                clearInterval(ag), a9(), b("#" + aQ + ", .camera_canvas_wrap", aO).animate({
                    opacity: 0
                }, 0), a4(), aX(c == aw - 1 ? 1 : c + 2), a7.onStartLoading.call(this)
            }
        }), aT() && (aS.bind("swipeleft", function() {
            if (!aN.hasClass("camerasliding")) {
                var c = parseFloat(b(".cameraSlide.cameracurrent", aP).index());
                clearInterval(ag), a9(), b("#" + aQ + ", .camera_canvas_wrap", aO).animate({
                    opacity: 0
                }, 0), a4(), aX(c == aw - 1 ? 1 : c + 2), a7.onStartLoading.call(this)
            }
        }), aS.bind("swiperight", function() {
            if (!aN.hasClass("camerasliding")) {
                var c = parseFloat(b(".cameraSlide.cameracurrent", aP).index());
                clearInterval(ag), a9(), b("#" + aQ + ", .camera_canvas_wrap", aO).animate({
                    opacity: 0
                }, 0), a4(), aX(0 != c ? c : aw), a7.onStartLoading.call(this)
            }
        })), b(aj).length && b(".camera_pag li", a6).click(function() {
            if (!aN.hasClass("camerasliding")) {
                var d = parseFloat(b(this).index()),
                    c = parseFloat(b(".cameraSlide.cameracurrent", aP).index());
                d != c && (clearInterval(ag), a9(), b("#" + aQ + ", .camera_canvas_wrap", aO).animate({
                    opacity: 0
                }, 0), a4(), aX(d + 1), a7.onStartLoading.call(this))
            }
        }), b(ap).length && (b(".pix_thumb img", ap).click(function() {
            if (!aN.hasClass("camerasliding")) {
                var d = parseFloat(b(this).parents("li").index()),
                    c = parseFloat(b(".cameracurrent", aP).index());
                d != c && (clearInterval(ag), a9(), b("#" + aQ + ", .camera_canvas_wrap", aO).animate({
                    opacity: 0
                }, 0), b(".pix_thumb", ap).removeClass("cameracurrent"), b(this).parents("li").addClass("cameracurrent"), a4(), aX(d + 1), a8(), a7.onStartLoading.call(this))
            }
        }), b(".camera_thumbs_cont .camera_prevThumbs", aO).hover(function() {
            b(this).stop(!0, !1).animate({
                opacity: 1
            }, 250)
        }, function() {
            b(this).stop(!0, !1).animate({
                opacity: 0.7
            }, 250)
        }), b(".camera_prevThumbs", aO).click(function() {
            var f = 0,
                d = (b(ap).outerWidth(), b("ul", ap).offset().left),
                c = b("> div", ap).offset().left,
                g = c - d;
            b(".camera_visThumb", ap).each(function() {
                var e = b(this).outerWidth();
                f += e
            }), g - f > 0 ? b("ul", ap).animate({
                "margin-left": "-" + (g - f) + "px"
            }, 500, aV) : b("ul", ap).animate({
                "margin-left": 0
            }, 500, aV)
        }), b(".camera_thumbs_cont .camera_nextThumbs", aO).hover(function() {
            b(this).stop(!0, !1).animate({
                opacity: 1
            }, 250)
        }, function() {
            b(this).stop(!0, !1).animate({
                opacity: 0.7
            }, 250)
        }), b(".camera_nextThumbs", aO).click(function() {
            var g = 0,
                d = b(ap).outerWidth(),
                c = b("ul", ap).outerWidth(),
                h = b("ul", ap).offset().left,
                f = b("> div", ap).offset().left,
                j = f - h;
            b(".camera_visThumb", ap).each(function() {
                var e = b(this).outerWidth();
                g += e
            }), c > j + g + g ? b("ul", ap).animate({
                "margin-left": "-" + (j + g) + "px"
            }, 500, aV) : b("ul", ap).animate({
                "margin-left": "-" + (c - d) + "px"
            }, 500, aV)
        }))
    }
}(jQuery),
function(b) {
    b.fn.cameraStop = function() {
        var c = b(this),
            a = b(".camera_src", c);
        "pie_" + c.index();
        if (a.addClass("stopped"), b(".camera_showcommands").length) {
            b(".camera_thumbs_wrap", c)
        } else {}
    }
}(jQuery),
function(b) {
    b.fn.cameraPause = function() {
        var c = b(this),
            a = b(".camera_src", c);
        a.addClass("paused")
    }
}(jQuery),
function(b) {
    b.fn.cameraResume = function() {
        var c = b(this),
            a = b(".camera_src", c);
        ("undefined" == typeof autoAdv || autoAdv !== !0) && a.removeClass("paused")
    }
}(jQuery);