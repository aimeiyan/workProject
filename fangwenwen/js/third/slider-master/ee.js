Z.define("newWww/banner", {
    initialize: function () {
        this.$wrap = $(".slider_box"), jQuery(document).ready(function (i) {
            function t() {
                a = document.body.clientWidth || document.documentElement.clientWidth, s.css({
                    width: a,
                    "margin-left": -Math.ceil(a / 2)
                }), o.$ScaleWidth(a), o.$ScaleHeight(500), window.setTimeout(t, 30)
            }

            var n = [], e = {
                $FillMode: 4,
                $AutoPlay: !0,
                $AutoPlayInterval: 4e3,
                $PauseOnHover: 1,
                $ArrowKeyNavigation: !0,
                $SlideEasing: $JssorEasing$.$EaseOutQuint,
                $SlideDuration: 1200,
                $MinDragOffsetToSlide: 20,
                $SlideWidth: a,
                $SlideHeight: 500,
                $SlideSpacing: 0,
                $DisplayPieces: 1,
                $ParkingPosition: 0,
                $UISearchMode: 1,
                $PlayOrientation: 1,
                $DragOrientation: 0,
                $CaptionSliderOptions: {
                    $Class: $JssorCaptionSlider$,
                    $CaptionTransitions: n,
                    $PlayInMode: 1,
                    $PlayOutMode: 3
                },
                $BulletNavigatorOptions: {
                    $Class: $JssorBulletNavigator$,
                    $ChanceToShow: 2,
                    $AutoCenter: 1,
                    $Steps: 1,
                    $Lanes: 1,
                    $SpacingX: 10,
                    $SpacingY: 8,
                    $Orientation: 1
                },
                $ArrowNavigatorOptions: {$Class: $JssorArrowNavigator$, $ChanceToShow: 2, $AutoCenter: 2, $Steps: 1}
            }, a = document.body.clientWidth || document.documentElement.clientWidth, s = i(".arrow_box");
            s.css({width: a, "margin-left": -Math.ceil(a / 2)});
            var o = new $JssorSlider$("slider1_container", e);
            t(), i(window).bind("load", t), i(window).bind("resize", t)
        })
    }
}), Z.define("videoList/videoList", {
    initialize: function () {
        this.$wrap = $(".wrap"), this.bindEvent()
    }, bindEvent: function () {
        var i = this, t = i.$wrap.find(".video_list");
        t.on("mouseenter", "li", function () {
            $(this).find(".list_cover").stop().animate({opacity: "0.8"}), $(this).find(".left_line").stop().animate({
                opacity: 1,
                left: "111px"
            }), $(this).find(".right_line").stop().animate({
                opacity: 1,
                right: "111px"
            }), $(this).find(".list_play").stop().animate({opacity: 1, top: "0"})
        }), t.on("mouseleave", "li", function () {
            $(this).find(".list_cover").stop().animate({opacity: "0"}), $(this).find(".left_line").stop().animate({
                opacity: "0",
                left: "90px"
            }), $(this).find(".right_line").stop().animate({
                opacity: "0",
                right: "90px"
            }), $(this).find(".list_play").stop().animate({opacity: "0", top: "20px"})
        })
    }, videoShow: function () {
        var i = $(".playRead_layer");
        i.hover(function () {
            $(this).stop().animate({opacity: 1}, 250), $(this).parent().find(".unclor_layer").stop().animate({opacity: .66}, 250);
            var i = parseInt($(this).attr("rel"));
            $("#li_layer_" + i).next(".param_layer").size() > 0 ? ($("#li_layer_" + i).next(".param_layer").stop().animate({left: 250}, 350).css("display", "table"), $("#li_layer_" + (i + 1)).css("z-index", 0)) : ($("#li_layer_" + i).next(".param_left_layer").stop().animate({right: 250}, 350).css("display", "block"), $("#li_layer_" + (i - 1)).css("z-index", 0))
        }, function () {
            $(this).stop().animate({opacity: 0}, 250), $(this).parent().find(".unclor_layer").stop().animate({opacity: 0}, 250);
            var i = parseInt($(this).attr("rel"));
            $("#li_layer_" + i).next(".param_layer").size() > 0 ? ($("#li_layer_" + i).next(".param_layer").stop().animate({left: 0}, 350).hide(), $("#li_layer_" + (i + 1)).css("z-index", 2)) : ($("#li_layer_" + i).next(".param_left_layer").stop().animate({right: 0}, 350).hide(), $("#li_layer_" + (i - 1)).css("z-index", 2))
        })
    }, page: function () {
        {
            var i = this, t = $("#main"), n = t.find(".vList"), e = n.data("page");
            new Page({
                wrap: t.find(".page_videoList"),
                data: {},
                url: "/index/index",
                totalPage: Math.ceil(e / 16),
                callback: function (t) {
                    n.html(t.message), i.videoShow()
                }
            })
        }
    }
}), Z.define("plusList/plusList", {
    initialize: function () {
        this.$wrap = $(".wrap"), this.bindEvent()
    }, bindEvent: function () {
        var i = this, t = i.$wrap.find(".list_small");
        t.on("mouseenter", "li", function () {
            $(this).find(".list_cover").stop().animate({opacity: "0.8"}), $(this).find(".left_line").stop().animate({
                opacity: 1,
                left: "111px"
            }), $(this).find(".right_line").stop().animate({
                opacity: 1,
                right: "111px"
            }), $(this).find(".list_play").stop().animate({opacity: 1, top: "0"})
        }), t.on("mouseleave", "li", function () {
            $(this).find(".list_cover").stop().animate({opacity: "0"}), $(this).find(".left_line").stop().animate({
                opacity: "0",
                left: "90px"
            }), $(this).find(".right_line").stop().animate({
                opacity: "0",
                right: "90px"
            }), $(this).find(".list_play").stop().animate({opacity: "0", top: "20px"})
        });
        var n = i.$wrap.find(".list_big .big_content");
        n.on("mouseenter", function () {
            $(this).find(".list_cover").stop().animate({opacity: "0.8"}), $(this).find(".left_line").stop().animate({
                opacity: 1,
                left: "211px"
            }), $(this).find(".right_line").stop().animate({
                opacity: 1,
                right: "211px"
            }), $(this).find(".list_play").stop().animate({opacity: 1, top: "0"})
        }), n.on("mouseleave", function () {
            $(this).find(".list_cover").stop().animate({opacity: "0"}), $(this).find(".left_line").stop().animate({
                opacity: "0",
                left: "190px"
            }), $(this).find(".right_line").stop().animate({
                opacity: "0",
                right: "190px"
            }), $(this).find(".list_play").stop().animate({opacity: "0", top: "20px"})
        })
    }
}), Z.define("index/phoneList", {
    initialize: function () {
        this.$wrap = $(".wrap"), this.bindEvent()
    }, bindEvent: function () {
        function i() {
            s.find(".list_name").text("\u8bf7\u9009\u62e9\u578b\u53f7");
            var i = s.find(".like_phone");
            d[r] ? (s.find(".list_name").removeClass("noclick"), i.html(d[r])) : $.post("/data/searchPhone", {company: l}, function (t) {
                if (200 == t.status)if (t.message.list.length > 0) {
                    var n = "", e = 0;
                    $.each(t.message.list, function (i, t) {
                        if (t.id == window.mobile_id); else {
                            var a = JSON.stringify(t.color);
                            n += '<li isclick="yes" data-id=' + t.id + " data-img=" + t.cover + " data-color=" + a + ">" + t.name + "</li>", e++
                        }
                    }), d[r] = n, i.html(n), e > 5 ? i.css("overflow-y", "scroll") : i.css("overflow-y", "visible"), s.find(".list_name").removeClass("noclick")
                } else s.find(".like_phone").html("\u6ca1\u6709\u76f8\u5e94\u7684\u624b\u673a"); else alert("\u67e5\u8be2\u5931\u8d25")
            }, "json")
        }

        var t = $("#main_phone"), n = t.find(".list_img");
        n.on("mousemove", "li", function (i) {
            var t = $(this).find(".wrap_poster"), n = $(this).find(".poster_layer"), e = $(this).width(), a = $(this).height(), s = F.getMousePos(i, $(this)), o = .5 - s.x / e, l = .5 - s.y / a, r = t.data("offset"), d = "translateY(" + -o * r + "px) rotateX(" + -l * r + "deg) rotateY(" + 2 * o * r + "deg)";
            t.css("transform", d), n.each(function () {
                var i = $(this), t = i.data("offset") || 0, n = "translateX(" + o * t + "px) translateY(" + l * t + "px)";
                i.css("transform", n)
            })
        });
        var e = t.find(".tool_compare"), a = e.find(".list_choose"), s = e.find(".list_like"), o = e.find(".select_btn"), l = 0, r = "APPLE", d = {};
        d[r] = s.find("ul").html(), a.on("click", ".list_name", function () {
            var t = $(this).addClass("new_icons_active"), n = $(this).siblings("ul");
            s.find("ul").hide(), n.is(":visible") ? (n.hide(), $(this).removeClass("new_icons_active")) : (n.show(), n.on("click", "li", function () {
                t.text($(this).text()).removeClass("new_icons_active"), r = t.text(), l = $(this).data("id"), s.find("ul").html(""), s.find(".list_name").addClass("noclick").html("\u8bf7\u9009\u62e9\u673a\u578b"), o.attr("href", "javascript:;"), n.hide(), i(), n.off("click")
            }))
        }), s.on("click", ".list_name", function () {
            var i = $(this).siblings("ul");
            if (i.html()) {
                {
                    $(this).addClass("new_icons_active")
                }
                i.is(":visible") ? (i.hide(), $(this).removeClass("new_icons_active")) : i.find("li").length > 0 && i.show()
            }
        });
        var p = e.siblings(".compare_img");
        s.find("ul").on("click", "li", function () {
            s.find("div").text($(this).text()), $(this).parent().siblings("div").removeClass("new_icons_active"), $(this).parent().hide(), p.find(".img_phone").hide();
            var i = $(this).data("id"), t = $(this).data("img");
            o.attr("href", "/data/detail/" + i), F.loading(p, "blackNew", !0), F.loadImg(t, function () {
                F.unloading(p), p.find(".img_phone").attr("src", t).show()
            })
        })
    }
}), Z.define("labList/labList", {
    initialize: function () {
        this.$wrap = $(".wrap"), this.bindEvent()
    }, bindEvent: function () {
        var i = this, t = i.$wrap.find(".lab_list");
        t.on("mouseenter", "li", function () {
            $(this).find(".list_cover").stop().animate({opacity: "0.8"}), $(this).find(".left_line").stop().animate({
                opacity: 1,
                left: "173px"
            }), $(this).find(".right_line").stop().animate({
                opacity: 1,
                right: "173px"
            }), $(this).find(".list_play").stop().animate({opacity: 1, top: "0"})
        }), t.on("mouseleave", "li", function () {
            $(this).find(".list_cover").stop().animate({opacity: "0"}), $(this).find(".left_line").stop().animate({
                opacity: "0",
                left: "83px"
            }), $(this).find(".right_line").stop().animate({
                opacity: "0",
                right: "83px"
            }), $(this).find(".list_play").stop().animate({opacity: "0", top: "20px"})
        })
    }
}), Z.define("index/page", {
    initialize: function () {
        this.$wrap = $(".wrap"), this.bindEvent()
    }, bindEvent: function () {
        var i = this, t = i.$wrap.find(".fix_list"), n = t.find(".option_list"), e = n.find(".list_name"), a = n.find(".list_problem"), s = t.find(".wrap_go"), o = s.find("a"), l = "", r = n.find(".list_des");
        $(document).on("click", function () {
            r.css({display: "none"}, function () {
                $(document).off("click")
            })
        }), e.on("click", function () {
            var i = $(this).siblings(".list_des"), n = i.find(".des_select");
            "iPhone" === e.html() ? n.html("iPad") : n.html("iPhone"), t.find(".list_des").css({display: "none"}), i.css({display: "block"}), i.on("click", ".des_select", function () {
                $(this);
                $(this).parent().siblings(".list_title").html($(this).html()), l = $(this).html(), a.html("\u6545\u969c"), o.attr("href", "http://fix.zealer.com/"), $(this).parent().css({display: "none"})
            }), event.stopPropagation()
        }), a.on("click", function () {
            if ("iPhone" == l)var i = $(this).siblings(".list_iphone"); else if ("iPad" == l)var i = $(this).siblings(".list_ipad"); else var i = $(this).siblings(".list_iphone");
            t.find(".list_des").css({display: "none"}), i.css({display: "block"}), i.css({display: "block"}), i.on("click", ".des_select", function () {
                $(this);
                $(this).parent().siblings(".list_title").html($(this).html());
                var i = $(this).attr("addr");
                $(this).parent().css({display: "none"}), o.attr("href", i)
            }), event.stopPropagation()
        });
        var d = i.$wrap.find("#main_rephone"), p = d.find(".list_price");
        p.on("mouseenter", "li", function () {
            var i = $(this).parent().siblings(".list_img").find("li").eq($(this).index());
            i.stop().animate({top: "-10px"}, "fast")
        }), p.on("mouseleave", "li", function () {
            var i = $(this).parent().siblings(".list_img").find("li").eq($(this).index());
            i.stop().animate({top: "0"}, "fast")
        })
    }
});