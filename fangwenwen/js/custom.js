/**
 * Created by yanam on 4/4/16.
 */
    //    begin 首页banner效果
jssor_1_slider_init = function () {
    var jssor_1_SlideshowTransitions = [
        {$Duration: 1000, $Delay: 80, $Cols: 8, $Rows: 4, $Clip: 15, $SlideOut: true, $Easing: $Jease$.$OutQuad},
        {
            $Duration: 1200,
            y: 0.3,
            $Cols: 2,
            $During: {$Top: [0.3, 0.7]},
            $ChessMode: {$Column: 12},
            $Easing: {$Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear},
            $Opacity: 2
        },
        {
            $Duration: 1000,
            x: -1,
            y: 2,
            $Rows: 2,
            $Zoom: 11,
            $Rotate: 1,
            $SlideOut: true,
            $Assembly: 2049,
            $ChessMode: {$Row: 15},
            $Easing: {
                $Left: $Jease$.$InExpo,
                $Top: $Jease$.$InExpo,
                $Zoom: $Jease$.$InExpo,
                $Opacity: $Jease$.$Linear,
                $Rotate: $Jease$.$InExpo
            },
            $Opacity: 2,
            $Round: {$Rotate: 0.85}
        },
        {
            $Duration: 1200,
            x: 4,
            $Cols: 2,
            $Zoom: 11,
            $SlideOut: true,
            $Assembly: 2049,
            $ChessMode: {$Column: 15},
            $Easing: {$Left: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear},
            $Opacity: 2
        },
        {
            $Duration: 1000,
            x: 4,
            y: -4,
            $Zoom: 11,
            $Rotate: 1,
            $SlideOut: true,
            $Easing: {
                $Left: $Jease$.$InExpo,
                $Top: $Jease$.$InExpo,
                $Zoom: $Jease$.$InExpo,
                $Opacity: $Jease$.$Linear,
                $Rotate: $Jease$.$InExpo
            },
            $Opacity: 2,
            $Round: {$Rotate: 0.8}
        },
        {
            $Duration: 1500,
            x: 0.3,
            y: -0.3,
            $Delay: 80,
            $Cols: 8,
            $Rows: 4,
            $Clip: 15,
            $During: {$Left: [0.3, 0.7], $Top: [0.3, 0.7]},
            $Easing: {$Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Clip: $Jease$.$OutQuad},
            $Round: {$Left: 0.8, $Top: 2.5}
        },
        {
            $Duration: 1000,
            x: -3,
            y: 1,
            $Rows: 2,
            $Zoom: 11,
            $Rotate: 1,
            $SlideOut: true,
            $Assembly: 2049,
            $ChessMode: {$Row: 28},
            $Easing: {
                $Left: $Jease$.$InExpo,
                $Top: $Jease$.$InExpo,
                $Zoom: $Jease$.$InExpo,
                $Opacity: $Jease$.$Linear,
                $Rotate: $Jease$.$InExpo
            },
            $Opacity: 2,
            $Round: {$Rotate: 0.7}
        },
        {
            $Duration: 1200,
            y: -1,
            $Cols: 8,
            $Rows: 4,
            $Clip: 15,
            $During: {$Top: [0.5, 0.5], $Clip: [0, 0.5]},
            $Formation: $JssorSlideshowFormations$.$FormationStraight,
            $ChessMode: {$Column: 12},
            $ScaleClip: 0.5
        },
        {
            $Duration: 1000,
            x: 0.5,
            y: 0.5,
            $Zoom: 1,
            $Rotate: 1,
            $SlideOut: true,
            $Easing: {
                $Left: $Jease$.$InCubic,
                $Top: $Jease$.$InCubic,
                $Zoom: $Jease$.$InCubic,
                $Opacity: $Jease$.$Linear,
                $Rotate: $Jease$.$InCubic
            },
            $Opacity: 2,
            $Round: {$Rotate: 0.5}
        },
        {
            $Duration: 1200,
            x: -0.6,
            y: -0.6,
            $Zoom: 1,
            $Rotate: 1,
            $During: {$Left: [0.2, 0.8], $Top: [0.2, 0.8], $Zoom: [0.2, 0.8], $Rotate: [0.2, 0.8]},
            $Easing: {$Zoom: $Jease$.$Swing, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$Swing},
            $Opacity: 2,
            $Round: {$Rotate: 0.5}
        },
        {
            $Duration: 1500,
            y: -0.5,
            $Delay: 60,
            $Cols: 15,
            $SlideOut: true,
            $Formation: $JssorSlideshowFormations$.$FormationCircle,
            $Easing: $Jease$.$InWave,
            $Round: {$Top: 1.5}
        },
        {
            $Duration: 1000,
            $Delay: 30,
            $Cols: 8,
            $Rows: 4,
            $Clip: 15,
            $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
            $Assembly: 2050,
            $Easing: $Jease$.$InQuad
        },
        {
            $Duration: 1200,
            $Delay: 20,
            $Clip: 3,
            $SlideOut: true,
            $Assembly: 260,
            $Easing: {$Clip: $Jease$.$OutCubic, $Opacity: $Jease$.$Linear},
            $Opacity: 2
        }
    ];

    var jssor_1_SlideoTransitions = [
        [{b: -1, d: 1, rY: 90}, {b: 8500, d: 1000, o: -1, rY: -90}],
        [{b: -1, d: 1, o: -1}, {b: 0, d: 480, x: -300, o: 1}, {b: 1000, d: 500, x: -370}],
        [{b: 480, d: 520, x: 100, y: -320}],
        [{b: 1500, d: 500, y: 250}, {b: 8500, d: 1000, x: 600}],
        [{b: -1, d: 1, o: -1, sX: -0.6, sY: -0.6}, {b: 2000, d: 500, o: 1, r: 360, sX: 0.6, sY: 0.6}, {
            b: 8500,
            d: 1000,
            y: -150
        }],
        [{b: -1, d: 1, o: -1, tZ: -200}, {b: 2500, d: 1000, o: 1, tZ: 200}, {b: 3500, d: 1000, o: -1, tZ: 200}],
        [{b: -1, d: 1, o: -1, tZ: -200}, {b: 3500, d: 1000, o: 1, tZ: 200}, {b: 4500, d: 1000, o: -1, tZ: 200}],
        [{b: -1, d: 1, o: -1, tZ: -200}, {b: 4500, d: 1000, o: 1, tZ: 200}, {b: 5500, d: 1000, o: -1, tZ: 200}],
        [{b: -1, d: 1, o: -1, tZ: -200}, {b: 5500, d: 1000, o: 1, tZ: 200}, {b: 6500, d: 1000, o: -1, tZ: 200}],
        [{b: -1, d: 1, o: -1, tZ: -200}, {b: 6500, d: 1000, o: 1, tZ: 200}, {b: 7500, d: 1000, o: -1, tZ: 200}],
        [{b: -1, d: 1, o: -1, tZ: -200}, {b: 7500, d: 1000, o: 1, tZ: 200}, {b: 8500, d: 1000, o: -1, tZ: 200}],
        [{b: -1, d: 1, c: {x: 250.0, t: -250.0}}, {b: 0, d: 1000, c: {x: -250.0, t: 250.0}}, {
            b: 5000,
            d: 1000,
            y: 100
        }],
        [{b: -1, d: 1, o: -1}, {b: 1000, d: 1000, o: 1}, {b: 5000, d: 1000, y: 280}],
        [{b: 2000, d: 1000, y: 190, e: {y: 28}}, {b: 5000, d: 1000, x: 280}],
        [{b: 3000, d: 520, y: 50}, {b: 5000, d: 1000, y: -50}],
        [{b: 3520, d: 480, x: -400}, {b: 5000, d: 800, x: 400, e: {x: 7}}],
        [{b: 4000, d: 500, x: -400}, {b: 5000, d: 800, x: 400, e: {x: 7}}],
        [{b: 4500, d: 500, x: -400}, {b: 5000, d: 800, x: 400, e: {x: 7}}],
        [{b: -1, d: 1, o: -0.4}, {b: 0, d: 1000, y: 140, o: 0.4}, {b: 23000, d: 1000, y: -140}],
        [{b: -1, d: 1, c: {x: 275.0, t: -275.0}}, {b: 1000, d: 1000, c: {x: -275.0, t: 275.0}}, {
            b: 23000,
            d: 1000,
            y: 100
        }],
        [{b: -1, d: 1, o: -1}, {b: 2000, d: 1000, o: 1}, {b: 23000, d: 1000, o: -1}],
        [{b: -1, d: 1, sX: -0.7, sY: -0.7}, {b: 5000, d: 1000, sX: 0.4, sY: 0.4, e: {sX: 16, sY: 16}}, {
            b: 9000,
            d: 1000,
            sX: -0.2,
            sY: -0.2,
            e: {sX: 16, sY: 16}
        }, {b: 13000, d: 1000, sX: -0.3, sY: -0.3, e: {sX: 16, sY: 16}}, {
            b: 17000,
            d: 1000,
            sX: 0.4,
            sY: 0.4,
            e: {sX: 16, sY: 16}
        }, {b: 21000, d: 1000, sX: 0.4, sY: 0.4, e: {sX: 16, sY: 16}}],
        [{b: 4000, d: 1500, x: 195, y: 450, r: -90}, {b: 8000, d: 1500, x: -225, y: -240, r: -90}, {
            b: 12000,
            d: 1500,
            x: -220,
            y: -1140,
            r: 120
        }, {b: 16000, d: 1500, x: 400, y: 580, r: 100}, {b: 20000, d: 1500, x: 350, y: 350, r: 90}],
        [{b: 4000, d: 1500, o: -0.6}],
        [{b: -1, d: 1, o: -0.6, r: 90}, {b: 4000, d: 1500, o: 0.6}, {b: 8000, d: 1500, o: -0.6}],
        [{b: -1, d: 1, o: -0.6, r: 180}, {b: 8000, d: 1500, o: 0.6}, {b: 12000, d: 1500, o: -0.6}],
        [{b: -1, d: 1, o: -0.6, r: 60}, {b: 12000, d: 1500, o: 0.6}, {b: 16000, d: 1000, o: -0.6}],
        [{b: -1, d: 1, o: -0.6, r: -40}, {b: 16000, d: 1000, o: 0.6}, {b: 20000, d: 1500, o: -0.6}],
        [{b: -1, d: 1, o: -0.6, r: -130}, {b: 20000, d: 1500, o: 0.6}],
        [{b: -1, d: 1, c: {x: 250.0, t: -250.0}}, {b: 0, d: 1000, c: {x: -250.0, t: 250.0}}, {
            b: 10000,
            d: 500,
            y: 90
        }],
        [{b: -1, d: 1, c: {x: 150.0, t: -150.0}}, {b: 1000, d: 1000, c: {x: -150.0, t: 150.0}}, {
            b: 10000,
            d: 500,
            c: {y: 150.0, m: -150.0}
        }],
        [{b: 2000, d: 500, x: 220}],
        [{b: 3500, d: 500, rX: -20}, {b: 4000, d: 1000, rX: 40}, {b: 5000, d: 500, rX: -10}, {
            b: 9500,
            d: 500,
            o: -1
        }],
        [{b: 3500, d: 2000, r: 360}],
        [{b: -1, d: 1, o: -1}, {b: 2500, d: 500, x: 76, y: -25, o: 1}],
        [{b: -1, d: 1, o: -1}, {b: 2500, d: 500, x: 47, y: 65, o: 1}],
        [{b: -1, d: 1, o: -1}, {b: 2500, d: 500, x: -47, y: 65, o: 1}],
        [{b: -1, d: 1, o: -1}, {b: 2500, d: 500, x: -76, y: -25, o: 1}],
        [{b: -1, d: 1, o: -1}, {b: 2500, d: 500, y: -80, o: 1}],
        [{b: -1, d: 1, c: {x: 120.0, t: -120.0}}, {b: 6100, d: 400, c: {x: -120.0, t: 120.0}}, {
            b: 10000,
            d: 500,
            y: -120
        }],
        [{b: 6500, d: 500, x: 220}],
        [{b: -1, d: 1, o: -1, r: 180, sX: -0.5, sY: -0.5}, {
            b: 7000,
            d: 500,
            o: 1,
            r: 180,
            sX: 0.5,
            sY: 0.5
        }, {b: 8000, d: 500, o: -1, r: 180, sX: 9, sY: 9}],
        [{b: -1, d: 1, o: -1, r: 180, sX: -0.5, sY: -0.5}, {
            b: 8000,
            d: 500,
            o: 1,
            r: 180,
            sX: 0.5,
            sY: 0.5
        }, {b: 9000, d: 500, o: -1, r: 180, sX: 9, sY: 9}],
        [{b: -1, d: 1, o: -1, r: 180, sX: -0.5, sY: -0.5}, {
            b: 9000,
            d: 500,
            o: 1,
            r: 180,
            sX: 0.5,
            sY: 0.5
        }, {b: 9500, d: 500, o: -1, r: 180, sX: 9, sY: 9}]
    ];

    var jssor_1_options = {
        $AutoPlay: true,
        $SlideDuration: 800,
        $SlideEasing: $Jease$.$OutQuint,
        $SlideshowOptions: {
            $Class: $JssorSlideshowRunner$,
            $Transitions: jssor_1_SlideshowTransitions,
            $TransitionsOrder: 1
        },
        $CaptionSliderOptions: {
            $Class: $JssorCaptionSlideo$,
            $Transitions: jssor_1_SlideoTransitions,
            $Breaks: [
                [{d: 3000, b: 8500, t: 2}],
                [{d: 2000, b: 5000}],
                [{d: 3000, b: 23000}],
                [{d: 3000, b: 9500, t: 2}]
            ]
        },
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
        }
    };

    if ($("#jssor_1").length) {
        var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
    }

    //responsive code begin
    //you can remove responsive code if you don't want the slider scales while window resizing
    function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 1920);
            jssor_1_slider.$ScaleWidth(refSize);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

};

jssor_1_slider_init();

//    end 首页banner效果

$(function () {
    /*
     start  修正banner左右箭头的位置
     */
    function setSlideArrow() {
        var windowWidth = $(window).width();
        if (windowWidth > 1920) {
            windowWidth = 1920;
        }
        var marginleftVar = windowWidth / 2;

        $(".slider_container").find(".arrow_box").css({
            "width": windowWidth,
            "margin-left": -marginleftVar
        })
    }

    if ($(".slider_container").length) {
        $(window).resize(function () {
            setSlideArrow();
        })
    }

    setSlideArrow();
    /*
     end  修正banner左右箭头的位置
     */

    //  begin 首页列表hover效果

    if ($(".building-list").length) {

var browser=navigator.appName 
var b_version=navigator.appVersion 
var version=b_version.split(";"); 
var trim_Version=version[1].replace(/[ ]/g,""); 
        if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0") 
{ 
        $(".building-list .inner .detail li a").hover(function () {
            $(this).find(".overlay").css({
                filter: "alpha(opacity=80)"
            });
            $(this).find(".subject").css({
                filter: "alpha(opacity=100)"
            }, 300);
        }, function () {
            $(this).find(".overlay,.subject").css({
                filter: "alpha(opacity=0)"
            });
        });
} else{
            $(".building-list .inner .detail li a").hover(function () {
            $(this).find(".overlay").stop(true, false).animate({
                opacity: '0.8'
            }, 300);
            $(this).find(".subject").animate({
                opacity: '1'            }, 300);
        }, function () {
            $(this).find(".overlay,.subject").stop(true, false).animate({
                opacity: '0'
            }, 300);
        });
}



    }
    //  end 首页列表hover效果

    /*
     begin 页面向上滑动按钮
     */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".side_btn").animate({
                bottom: "100px",
                opacity: 1,
                filter: "alpha(opacity=1)"
            }, 100).show();
        } else {
            $(".side_btn").animate({
                bottom: "40px",
                opacity: 0,
                filter: "alpha(opacity=0)"
            }, 100).hide();
        }
    });


    $(".side_btn").click(function () {
        $("body").animate({scrollTop: 0}, 300, function () {
            $('.side_btn').hide();
        });
    });

    /*
     end 页面向上滑动按钮
     */


    //        begin 登陆之后 用户名hover出现dropdown内容
    if ($(".inner_login .account-user").length) {
        var $userInfo = $(".person-dropdown-info");
        var userImgLeft = $(".inner_login .account-user img").offset().left;
        var userTop = $userInfo.parent().outerHeight();
        var userWidth = $userInfo.width();

        $userInfo.css({
            "left": userImgLeft - userWidth / 4,
            "top": userTop
        });

        $(".inner_login .account-user").hover(function () {
            $userInfo.show();
        }, function () {
            $userInfo.hide();
        });
    }

//        end 登陆之后 用户名hover出现dropdown内容

    /*
     begin new and chose articles
     */
    if (!($(".recommend-article").length === 0)) {
        $(".recommend-article .tab-list li").click(function () {
            var index = $(this).index();
            if (!($(this).hasClass("active"))) {
                $(this).siblings().removeClass("active");
                $(this).addClass("active");
                var $recommendArticle = $(".recommend-article .tab-content ul");
                $recommendArticle.hide();
                $recommendArticle.eq(index).show();
            }

        });
    }
    /*
     end new and chose articles
     */

    /*
     begin tablet pane slide(done)
     */

    if ($(".about-us-container").length) {
        $(".about-us-container .item").each(function () {
            $(this).click(function () {
                var idx = $(this).index();
                console.log(idx);
                $(".item").siblings().removeClass("on");
                $(this).addClass("on");
                $(".about-us-container .piece").removeClass("in");
                $(".about-us-container .piece").eq(idx).addClass("in");

            })
        });
    }

    /*
     end tablet pane slide(done)
     */

    //        begin 注册协议显示
    $(".sign-up-policy").click(function () {
        $("#mask").show()
    });
    $("#mask .content-close").click(function () {
        $("#mask").hide()
    });
//        end 注册协议显示


    //begin 注册登录页复选框选中效果
    $(".sign-login-wrap .select-box").click(function () {
        $(this).toggleClass("active");
    });
    //end 注册登录页复选框选中效果

    //begin 选择找回密码的方式：邮箱 手机号
    $(".sign-login-wrap .forgot_info").each(function () {
        $(this).click(function () {
            if ($(this).find(".select_box").hasClass("active")) {
                $(this).find(".select_box").removeClass("active");
            } else {
                $(this).closest(".content_info").find(".select_box").removeClass("active");
                $(this).find(".select_box").addClass("active");
            }
        });
    });

    //end 选择找回密码的方式：邮箱 手机号

    //begin 基本信息页面 生日选择效果
    $.datepicker.regional["zh-CN"] = {
        closeText: "关闭",
        prevText: "&#x3c;上月",
        nextText: "下月&#x3e;",
        currentText: "今天",
        monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthNamesShort: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
        dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
        dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
        weekHeader: "周",
        dateFormat: "yy-mm-dd",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !0,
        yearSuffix: "年"
    }

    $.datepicker.setDefaults($.datepicker.regional["zh-CN"]);

    $("[name=userBirthday]").datepicker({
        dateFormat: "yy-mm-dd",
        showOtherMonths: true,
        selectOtherMonths: true,
        changeYear: true,          // 年下拉菜单
        changeMonth: true          // 月下拉菜单
    });

    //end 基本信息页面 生日选择效果


    //begin 地区联动功能

    var regionData = [
        {
            "provinceCode": "01",
            "name": "北京",
            "value": [{
                "cityCode": "01",
                "name": "东城区"
            }, {
                "cityCode": "01",
                "name": "西城区"
            }, {
                "cityCode": "01",
                "name": "崇文区"
            }, {
                "cityCode": "01",
                "name": "东城区"
            }, {
                "cityCode": "01",
                "name": "石景山区"
            }, {
                "cityCode": "01",
                "name": "东城区"
            }, {
                "cityCode": "01",
                "name": "通州区"
            }, {
                "cityCode": "01",
                "name": "怀柔区"
            }]
        },
        {
            "provinceCode": "02",
            "name": "天津",
            "value": [{
                "cityCode": "01",
                "name": "和平区"
            }, {
                "cityCode": "01",
                "name": "南开区"
            }, {
                "cityCode": "01",
                "name": "河东区"
            }, {
                "cityCode": "01",
                "name": "河西区"
            }, {
                "cityCode": "01",
                "name": "河北区"
            }, {
                "cityCode": "01",
                "name": "红桥区"
            }, {
                "cityCode": "01",
                "name": "塘沽区"
            }, {
                "cityCode": "01",
                "name": "津南区"
            }, {
                "cityCode": "01",
                "name": "河北区"
            }, {
                "cityCode": "01",
                "name": "东丽区"
            }, {
                "cityCode": "01",
                "name": "北辰区"
            }, {
                "cityCode": "01",
                "name": "西青区"
            }]
        }
    ];

    var initCityValue = $(".addrClick .city").text();

    //页面初次加载时填充省信息
    for (var i = 0; i < regionData.length; i++) {
        var regionProvinceSource = '<li data-code="' + regionData[i].provinceCode + '">' + regionData[i].name + '</li>';
        $(".region-province").append(regionProvinceSource);
    }

    //点击除了省市输入框之外的地方隐藏下拉框
    $("body").click(function (e) {
        if (!($(e.target).attr("class") === "provice" || $(e.target).attr("class") === "city")) {
            $(".region-province").hide();
            $(".region-city").hide();
        }
    });

    //点击省输入框的操作
    $(".addrClick .provice").click(function () {
        $(".region-province").toggle();
        $(".region-city").hide();

    });

    //点击市输入框的操作
    $(".addrClick .city").click(function () {
        var province = $(".addrClick .provice").text();
        $(".region-city").empty();
        for (var i = 0; i < regionData.length; i++) {
            if (regionData[i].name === province) {
                for (var j = 0; j < regionData[i].value.length; j++) {
                    var regionCitySource = '<li data-code="' + regionData[i].value[j].cityCode + '">' + regionData[i].value[j].name + '</li>';
                    $(".region-city").append(regionCitySource);
                }
            }
        }
        $(".region-city").toggle();
        $(".region-province").hide();

    });

    //点击省下拉框内容时的操作
    $(".region-province li").click(function () {
        var old = $(".addrClick .provice");
        console.log(old, $(this).text());
        if (!($(this).text() === old)) {
            $(".addrClick .city").text(initCityValue);
        }
        $(".addrClick .provice").text($(this).text());
        $(".region-province").hide();
    });

    //点击市下拉框内容时的操作
    $(document).on("click", ".region-city li", function () {
        $(".addrClick .city").text($(this).text());
        $(".region-city").hide();
    });


    //end 地区联动功能


    //begin 绑定邮箱和手机号

    $(".phone_add,.mail_add,.phone_change,.mail_change").click(function () {
        var classify = $(this).attr("class").split("_")[0];
        $(".global_dialog").find("." + classify + "_input").siblings().hide();
        $(".global_dialog").find("." + classify + "_input").show();
        $(".global_dialog").show();
    });


    $(".global_dialog .pop_close").click(function () {
        $(".global_dialog").hide();
    });
    //end 绑定邮箱和手机号
});