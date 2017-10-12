/*
 click eye icon show number value
 */
$(function () {

    $('.hr-user-domain').on('shown.bs.dropdown hide.bs.dropdown', function () {

        $(".hr-user-dropdown-menu").click(function () {
            return false
        });
        // do something…
        var $hr_eye_btn = $(".hr-eye");
        var $hr_downmenu_num_value = $(".hr-downmenu-show-num");
        $hr_eye_btn.click(function (e) {
            if ($hr_eye_btn.hasClass("hr-eye-close")) {
                $hr_eye_btn.removeClass("hr-eye-close");
                $hr_downmenu_num_value.removeClass("hide").next().addClass("hide")
            } else {
                $hr_eye_btn.addClass("hr-eye-close");
                $hr_downmenu_num_value.addClass("hide").next().removeClass("hide")
            }
        })

    });

    /*
     left aside menu
     */
    $(function () {

        var $left_aside_menu = $(".hr-dropdown-menu");
        $(".hr-dropdown-menu li").hover(function () {
            var menu_with = $left_aside_menu.width();
            var pop_top = $(this).offset().top;
            //$('.popover').hide();
            var pop_height = $(this).find(".popover").outerHeight();
            var window_height = $(window).height();
            var diff = window_height - pop_top;
            $(this).find(".hr-first-menu").addClass("maintainHover");
            $(this).find(".popover").css({
                display: "block",
                left: menu_with
            });
            if (pop_height > diff) {
                $(this).find(".popover").css({
                    top: diff - pop_height
                });
            } else {
                $(this).find(".popover").css({
                    top: -1
                });
            }
        }, function () {
            $(this).find(".hr-first-menu").removeClass("maintainHover");

            $(this).find(".popover").css({display: "none"});
        })
    })
});

/*
 right panel readed all click event
 */
$(function () {

    var $tooltip_element = $("a[data-toggle='tooltip']");
    var $hidden_label = $(".hr-num-tip");

    $hidden_label.each(function () {
        if (parseInt($(this).text()) === 0) {
            $(this).hide();
        }
    });

    $(".hr-readed-btn").click(function () {
        $(".right-message-collapse-btn .label").hide();
        $("#messageContent *").addClass("hr-grey-lighter");
        $("#messageContent").find(".hr-txt-green-dark").html("&nbsp;&nbsp;已&nbsp;&nbsp;读&nbsp;&nbsp;&nbsp;").removeClass("hr-txt-green-dark");
    });

    $tooltip_element.click(function () {
        $(this).next().hide();
    });
    $tooltip_element.hover(function () {
        $(this).next().show();
        if ($(this).parent().hasClass("active")) {
            $(this).next().hide();
        }
    }, function () {
        $(this).next().hide();
    })
});


$(function () {
    $(".hr-staff-salary-eye").click(function () {
        if ($(this).hasClass("closed")) {
            $(this).removeClass("closed");
            $(".hr-stuff-total-num").removeClass("hide").next().addClass("hide");
        } else {
            $(this).addClass("closed");
            $(".hr-stuff-total-num").addClass("hide").next().removeClass("hide");

        }
    });
    //$(window).resize(function () {
    //    staff_salary_chart();
    //});

    var $hidden_label_num = $(".hr-num-tip");
    $hidden_label_num.each(function () {
        if (parseInt($(this).text()) === 0) {
            $(this).hide();
        }
    });


    $(".hr-staff-readed-btn").click(function () {
        $(".hr-myinfo-panel-title .hr-num-tip").hide();
        $(".hr-myinfo-items *").addClass("hr-grey-lighter");
        $(".hr-myinfo-items").find(".text-success").text("已读").removeClass("text-success");

    });


    /*
     focus person delete function
     */
    var focus_delete_html = '<button class="btn btn-danger btn-xs hr-focus-delete rounded-corner"><i class="fa fa-close"></i></button>';

    $(".hr-focus-person-link").hover(function () {
        $(this).append(focus_delete_html);
    }, function () {
        $(this).find(".hr-focus-delete").remove();
    });


    //$(function(){
    /*
     scroll search staff in manager page
     */

    var $parent_ele = $(".hr-letter-classify");
    var $child_ele = $(".hr-staff-sort");
    var $letter_list = $(".hr-letter-list");
    var $letter_click = $(".hr-letter-click");
    if ($parent_ele.length) {
        $parent_ele.scroll(function (e) {
            var top = $(this).scrollTop();
            var letter_list_top = top + 30;
            $letter_list.css({top: letter_list_top + 'px'});

            for (var i = 0; i < $child_ele.length; i++) {
                if (210 > $child_ele.eq(i).position().top) {
                    $letter_click.removeClass("hr-click").eq(i).addClass("hr-click");
                }
            }

        });

        var parent_offset_top = $parent_ele.offset().top;

        $(".hr-letter-list a.hr-letter-click").click(function () {

            var idx = $(".hr-letter-list a.hr-letter-click").index(this);
            var child_top = 0;
            $letter_click.removeClass("hr-click").eq(idx).addClass("hr-click");

            for (var i = 0; i < idx; i++) {
                child_top += $child_ele.eq(i).height();
            }

            var Top = child_top;
            $parent_ele.animate({scrollTop: Top}, 500);
            var letter_list_top = $child_ele.eq(idx).position() + 30;
            $letter_list.css({top: letter_list_top + 'px'});
        });
    }
    ;


    /* carousel charts for index page */
    $(function () {

        /* chart colors default */
        var $chrt_border_color = "#efefef";

        /*tooltip*/
        function e(e, t, n) {
            $('<div id="tooltip" class="flot-tooltip">' + n + "</div>").css({
                top: t - 45,
                left: e - 55
            }).appendTo("body").fadeIn(200)
        }

        function hr_admin_chart_01() {

            /* bar chart */
            "use strict";

            if ($("#hr-admin-chart-01").length) {
                var css_id = "#hr-admin-chart-01";
                var data = [
                    {label: '人员总量', data: [[1, 372321], [2, 6275], [3, 370512], [4, 8084], [5, 378596], [6, 52286]]}
                ];
                var options = {
                    series: {
                        bars: {
                            show: true,
                            barWidth: .2,
                            align: "left",
                            fill: true,
                            fillColor: '#a9d86e',
                            zero: true
                        }
                    },
                    xaxis: {ticks: [[1, '劳动</br>合同'], [2, '劳务</br>人员'], [3, '在岗'], [4, '不在岗'], [5, '本行</br>总量'], [6, '离职</br>退休']]},
                    legend: false,
                    grid: {
                        show: true,
                        hoverable: true,
                        clickable: true,
                        tickColor: $chrt_border_color,
                        borderWidth: 0,
                        borderColor: $chrt_border_color
                    }
                };

                $.plot($(css_id), data, options);
                var r = null;
                $("#hr-admin-chart-01").bind("plothover", function (t, n, i) {
                    $("#x").text(n.x.toFixed(2));
                    $("#y").text(n.y.toFixed(2));
                    if (i) {
                        if (r !== i.dataIndex) {
                            r = i.dataIndex;
                            $("#tooltip").remove();
                            var s = i.datapoint[1].toFixed(2);
//                            console.log(i.series.xaxis.ticks[n]);
                            var o = i.series.label + " <br/> " + s;
                            e(i.pageX, i.pageY, o)
                        }
                    } else {
                        $("#tooltip").remove();
                        r = null
                    }
                    t.preventDefault()
                })
            }
        }

        /* end bar chart */

        /* pie chart */
        function hr_admin_chart_02() {
            if ($('#hr-admin-chart-02').length) {
                var data = [];
                var num = 4;
                var color = ["#d1d1d1", "#a9d86e", "#f8a20f", "#5eaee3"];
                var category = ["本科", "大专及以下", "博士及以上", "硕士"];
                var value = [310, 335, 135, 234];
                for (var i = 0; i < num; i++) {
                    data[i] = {label: category[i], data: value[i], color: color[i]}
                }
                $.plot($("#hr-admin-chart-02"), data, {
                    series: {
                        pie: {
                            innerRadius: .5,
                            show: true,
                            combine: {color: "#999", threshold: .1}
                        }
                    }, grid: {borderWidth: 0, hoverable: true, clickable: true}, legend: {show: false}
                })

            }
        }

        /* end pie chart */

        /*Start Line chart */
        function hr_admin_chart_03() {

            "use strict";

            if ($("#hr-admin-chart-03").length) {

                var data = [
                    {label: '近五年人员总量变化趋势', data: [[1, 352630], [2, 359048], [3, 370318], [4, 376730], [5, 378596]]}
                ];
                var plot = $.plot($("#hr-admin-chart-03"), data, {
                    series: {
                        lines: {
                            show: true
                        },
                        points: {
                            show: true
                        }
                    },
                    legend: {
                        show: false
                    },
                    grid: {
                        hoverable: true,
                        clickable: true,
                        tickColor: $chrt_border_color,
                        borderWidth: 0,
                        borderColor: $chrt_border_color
                    },
                    colors: ['#35d2cb'],
                    xaxis: {ticks: [[1, '2010'], [2, '2011'], [3, '2012'], [4, '2013'], [5, '2014']]}
                });
                var r = null;
                $("#hr-admin-chart-03").bind("plothover", function (t, n, i) {
                    $("#x").text(n.x.toFixed(2));
                    $("#y").text(n.y.toFixed(2));
                    if (i) {
                        if (r !== i.dataIndex) {
                            r = i.dataIndex;
                            $("#tooltip").remove();
                            var s = i.datapoint[1].toFixed(2);
                            var o = i.series.label + " <br/> " + s;
                            e(i.pageX, i.pageY, o)
                        }
                    } else {
                        $("#tooltip").remove();
                        r = null
                    }
                    t.preventDefault()
                })
            }
        }

        /*End Line chart */

        hr_admin_chart_01();
        hr_admin_chart_02();
        hr_admin_chart_03();

        $('#hr-admin-Carousel').on('slid.bs.carousel', function () {
            hr_admin_chart_01();
            hr_admin_chart_02();
            hr_admin_chart_03();
        });

    });

    //closed carousel autoplay
    $(function () {
        $('.carousel').carousel({
            interval: false // in milliseconds
        })
    });

});


/*
 begin staff salary chart function
 */
var XData = [], YData = [];

var salary_data = [{
    name: "1月",
    value: 8000
}, {
    name: "2月",
    value: 8976
}, {
    name: "3月",
    value: 12652
}, {
    name: "4月",
    value: 16235
}, {
    name: "5月",
    value: 9834
}, {
    name: "6月",
    value: 2345
}, {
    name: "7月",
    value: 12343
}, {
    name: "8月",
    value: 5432
}, {
    name: "9月",
    value: 32134
}, {
    name: "10月",
    value: 23134
}, {
    name: "11月",
    value: 43682
}, {
    name: "12月",
    value: 0
}];

var salary_length = salary_data.length;

for (var i = 0; i < salary_data.length; i++) {
    XData.push(salary_data[i].name);
    YData.push(salary_data[i].value);
}


//颜色值

var colorList = [];

var date = new Date;
var month = date.getMonth() + 1;

for (var j = 0; j < month - 1; j++) {
    colorList.push("#e2e7eb");
}

if (salary_data[month - 1].value === 0) {
    colorList[month - 2] = "#f59c1a";
} else {
    colorList[month - 1] = "#f59c1a";

}

function staff_salary_chart() {

    var myChart = echarts.init(document.getElementById('hr-staff-salary-chart'));

    var option = {
        tooltip: {
            trigger: 'axis'
        },
        title: {
            show: false
        },
        toolbox: {
            show: false
        },
        grid: {
            x: 60,
            y: 20,
            x2: 20,
            y2: 20,
            borderWidth: 0
        },
        xAxis: [
            {
                type: 'category',
                axisLine: {lineStyle: {color: "#F0EDED", width: 1}},
                axisTick: {show: false},
                axisLabel: {
                    interval: 0,
                    textStyle: {color: "#34474f"}
                },
                splitLine: {show: false},
                splitArea: {show: false},
                data: XData
            }
        ],
        yAxis: [
            {
                type: 'value',
//                name: '业绩（百万）',
                nameTextStyle: {
                    color: "#34474f"
                },
//                axisLine: {lineStyle: {color: "#F0EDED", width: 1}},

                splitLine: {show: false, lineStyle: {color: "#F0EDED"}},
                axisLine: {lineStyle: {color: "#fff"}}
            }
        ],
        series: [
            {
                type: 'bar',
                name: "薪资",
                smooth: false,
                barWidth: 20,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            // build a color map as your need.
                            return colorList[params.dataIndex]
                        }
                    }
                },
                data: YData
            }
        ]
    };

    // 为echarts对象加载数据
    myChart.setOption(option);
}

$(function(){
    if($("#hr-staff-salary-chart").length){
        staff_salary_chart();
        $(window).resize(function () {
            staff_salary_chart();
        });
    }

});

/*
 end staff salary chart function
 */


$(function(){
    //        领导页面的数据表格
    if($("#hr_leader_chart_01").length){
        var leader_chart_01 = echarts.init(document.getElementById('hr_leader_chart_01'));

        var leader_carousel_option = {
            color: ['#0082bf'],
            legend: {
                show: false,
                data: ['人员总量']
            },
            toolbox: {
                show: false
            },
            calculable: true,
            tooltip: {
                trigger: 'axis'
            },
            xAxis: [
                {
                    type: 'category',
                    name: '（年份）',
                    boundaryGap: false,
                    data: ['2001年', '2002年', '2003年', '20014', '2005年', '2006年', '2007年', '2008年', '2009年', '2010年', '2011年', '2012年', '2013年', '2014年']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '（人数）',
                    min: 320000,
                    max: 400000,
                    scale: true,
                    axisLabel: {
                        formatter: '{value}'
                    }
                }
            ],
            series: [
                {
                    name: '人员总量',
                    type: 'line',
                    smooth: false,
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                shadowColor: 'rgba(0,0,0,0.4)'
                            },
                            label: {
                                show: true,
                                position: 'top',
                                formatter: '{c}',
                                textStyle: {
                                    fontSize: 14,
                                    color: '#6dbdd8'

                                }
                            }
                        }
                    },
                    data: [384608, 368676, 357681, 335098, 333240, 333963, 343059, 346047, 349426, 352630, 359048, 370318, 376730, 378596]
                }
            ]
        };

        leader_chart_01.setOption(leader_carousel_option);

        $('#hr-leader-carousel').on('slid.bs.carousel', function () {
            var leader_chart_01 = echarts.init(document.getElementById('hr_leader_chart_01'));
            leader_chart_01.setOption(leader_carousel_option);
        });

        $(window).resize(function () {
            var leader_chart_01 = echarts.init(document.getElementById('hr_leader_chart_01'));
            leader_chart_01.setOption(leader_carousel_option);
        });

    }

    var map_option = {
        map: "world_mill_en",
        zoomButtons: false,
        scaleColors: ["#e74c3c", "#0071a4"],
        normalizeFunction: "polynomial",
        hoverOpacity: .5,
        hoverColor: false,
        markerStyle: {
            initial: {
                fill: "#006fa3",
                stroke: "transparent",
                r: 5
            }
        },
        regionStyle: {
            initial: {
                fill: "#60b1c5",
                "fill-opacity": 1,
                stroke: "none",
                "stroke-width": .4,
                "stroke-opacity": 1
            },
            hover: {
                "fill-opacity": .8
            },
            selected: {
                fill: "yellow"
            },
            selectedHover: {}
        },
        focusOn: {
            x: .5,
            y: .5,
            scale: 0
        },
        backgroundColor: false,
        markers: [{
            latLng: [41.9, 12.45],
            name: "Vatican City"
        },
            {
                latLng: [43.73, 7.41],
                name: "Monaco"
            },
            {
                latLng: [-.52, 166.93],
                name: "Nauru"
            },
            {
                latLng: [-8.51, 179.21],
                name: "Tuvalu"
            },
            {
                latLng: [43.93, 12.46],
                name: "San Marino"
            },
            {
                latLng: [47.14, 9.52],
                name: "Liechtenstein"
            },
            {
                latLng: [7.11, 171.06],
                name: "Marshall Islands"
            },
            {
                latLng: [17.3, -62.73],
                name: "Saint Kitts and Nevis"
            },
            {
                latLng: [3.2, 73.22],
                name: "Maldives"
            },
            {
                latLng: [35.88, 14.5],
                name: "Malta"
            },
            {
                latLng: [12.05, -61.75],
                name: "Grenada"
            },
            {
                latLng: [13.16, -61.23],
                name: "Saint Vincent and the Grenadines"
            },
            {
                latLng: [13.16, -59.55],
                name: "Barbados"
            },
            {
                latLng: [17.11, -61.85],
                name: "Antigua and Barbuda"
            },
            {
                latLng: [-4.61, 55.45],
                name: "Seychelles"
            },
            {
                latLng: [7.35, 134.46],
                name: "Palau"
            },
            {
                latLng: [42.5, 1.51],
                name: "Andorra"
            },
            {
                latLng: [14.01, -60.98],
                name: "Saint Lucia"
            },
            {
                latLng: [6.91, 158.18],
                name: "Federated States of Micronesia"
            },
            {
                latLng: [1.3, 103.8],
                name: "Singapore"
            },
            {
                latLng: [1.46, 173.03],
                name: "Kiribati"
            },
            {
                latLng: [-21.13, -175.2],
                name: "Tonga"
            },
            {
                latLng: [15.3, -61.38],
                name: "Dominica"
            },
            {
                latLng: [-20.2, 57.5],
                name: "Mauritius"
            },
            {
                latLng: [26.02, 50.55],
                name: "Bahrain"
            },
            {
                latLng: [.33, 6.73],
                name: "São Tomé and Príncipe"
            }]
    };

    if($("#world-map").length){

        $('#hr-leader-carousel').on('slid.bs.carousel', function () {
            $('#world-map').empty().vectorMap(map_option);
        });

        $('#hr-leader-carousel').on('slide.bs.carousel', function () {
            $('#world-map').empty();
        });

        $(window).resize(function () {
            $('#world-map').empty().vectorMap(map_option);
        });

    }

    //            导航子菜单背景
    $('.hr-leader-dropdown-wrapper').on('show.bs.dropdown', function () {
        $(".hr-dropdown-overlay").show();
    }).on('hide.bs.dropdown', function () {
        $(".hr-dropdown-overlay").hide();
    })
});
