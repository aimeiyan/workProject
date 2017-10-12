/**
 * Created by feng on 1/11/2016.
 */

/*
 Begin search input value
 */
function search_input_value() {
    var url_value = [];
    var $input_box = $(".hr-table-top-input .form-control");
    for (var i = 0; i < $input_box.length; i++) {
        url_value.push($input_box.eq(i).attr("name") + '=' + encodeURIComponent($input_box.eq(i).val()));
    }
    var url = url_value.join("&&");
    return url;
}
/*
 End search input value
 */

//Start table定义
var table;
// End table定义

var handleTableAjax = function () {
    $("[data-click=sys-setAuthority]").click();
    $('.hr-authority-table').on('shown.bs.modal', function () {
        //动态的数据

        var btns;
        var fixColum, columnDefs_info, column_th, ajaxUrl;
        var fixColum_01 = {
            leftColumns: 7
        };
        var fixColum_02 = false;
        var fixColum_03 = false;

        var column_th_01 = [
            {"data": "checkbox", 'title': '\<input type="checkbox" class="select-all"\>'},
            {"data": "idx", 'title': "序号"},
            {"data": "id", 'title': "用户名"},
            {"data": "name", 'title': "姓名"},
            {"data": "company", 'title': "机构"},
            {"data": "depart", 'title': "部门"},
            {"data": "job", 'title': "岗位"},
            {"data": "premissionSet", 'title': "权限集合"},
            {"data": "admin", 'title': "管理员"},
            {"data": "switch", 'title': "启用"},
            {"data": "action", 'title': "操作"}
        ];
        var column_th_02 = [
            {"data": "checkbox", 'title': '\<input type="checkbox" class="select-all"\>'},
            {"data": "company", 'title': "机构"},
            {"data": "depart", 'title': "部门"},
            {"data": "job", 'title': "岗位"},
            {"data": "premissionSet", 'title': "已有权限"},
            {"data": "peopleOnJob", 'title': "岗位上的人"},
            {"data": "action", 'title': "操作"}
        ];

        var column_th_03 = [
            {"data": "checkbox", 'title': '\<input type="checkbox" class="select-all"\>'},
            {"data": "name", 'title': "名称"},
            {"data": "premissionSet", 'title': "已有权限"},
            {"data": "usedPeople", 'title': "已使用的人"},
            {"data": "action", 'title': "操作"}
        ];

        var columnDefs_info_01 = [
            {targets: '_all', orderable: false},
            {
                "targets": 0,
                "render": function (data, type, row) {
                    return '<input type="checkbox" class="select-single" value="' + data + '">';
                }
            },
            {
                "targets": 6,
                "render": function (data, type, row) {
                    return '<a href="javascript:void(0);" class="btn-link hr-authority-post" data-id="' + data.id + '">' + data.value + '</a>'
                }
            },
            {
                "targets": 7,
                "render": function (data, type, row) {
                    return template('hr-authority-set-status', {data: data})
                }
            }, {
                "targets": 8,
                "render": function (data, type, row) {
                    return template('hr-authority-admin-status', {data: data})
                }
            },
            {
                "targets": 9,
                "render": function (data, type, row) {
                    return template('hr-authority-switch-status', {data: data})
                }
            },
            {
                "targets": 10,
                "render": function (data, type, row) {
                    return '<a href="javascript:void(0);" class="fa fa-plus-square-o m-r-5" data-id="' + data + '"></a><a href="javascript:void(0);" class="fa fa-minus-square" data-id="' + data + '"></a>'
                }
            }

        ];

        var columnDefs_info_02 = [
            {targets: '_all', orderable: false},
            {
                "targets": 0,
                "render": function (data, type, row) {
                    return '<input type="checkbox" class="select-single" value="' + data + '">';
                }
            },
            {
                "targets": 3,
                "render": function (data, type, row) {
                    return '<a href="javascript:void(0);" class="btn-link hr-authority-post" data-id="' + data.id + '">' + data.value + '</a>'
                }
            },
            {
                "targets": 4,
                "render": function (data, type, row) {
                    return '<a href="javascript:void(0);" class="btn-link hr-authority-post" data-id="' + data.id + '">' + data.value + '</a>'
                }
            },
            {
                "targets": 6,
                "render": function (data, type, row) {
                    return '<a href="javascript:void(0);" class="fa fa-plus-square-o m-r-5" data-id="' + data + '"></a><a href="javascript:void(0);" class="fa fa-minus-square" data-id="' + data + '"></a>'
                }
            }

        ];

        var columnDefs_info_03 = [
            {targets: '_all', orderable: false},
            {
                "targets": 0,
                "render": function (data, type, row) {
                    return '<input type="checkbox" class="select-single" value="' + data + '">';
                }
            },
            {
                "targets": 1,
                "render": function (data, type, row) {
                    return data.value + '<a href="javascript:void(0);" class="fa fa-edit m-l-10" data-id="' + data.id + '"></a>'
                }
            },
            {
                "targets": 2,
                "render": function (data, type, row) {
                    return template('hr-authority-set-status', {data: data})
                }
            },
            {
                "targets": 4,
                "render": function (data, type, row) {
                    return '<a href="javascript:void(0);" class="fa fa-plus-square-o m-r-5" data-id="' + data + '"></a><a href="javascript:void(0);" class="fa fa-minus-square" data-id="' + data + '"></a>'
                }
            }

        ];
        if ($(".hr-authority-classify-show").text()) {
            ajaxUrl = "server_dt_test/static/data-test-02.json";
            var clssify_text = $(".hr-authority-classify-show").text();
            $.get("resources/btns_input_01.json", clssify_text, function (res) {
                btns = res;
                var input_html = template('hr-authority-left-input', btns);
                $("#hr-table-top-input").append(input_html);
                var btn_html = template('hr-authority-right-btn', btns);
                $("#hr-table-top-btn").append(btn_html);
            });
            fixColum = fixColum_02;
            column_th = column_th_02;
            columnDefs_info = columnDefs_info_02;
        }

        $(".hr-authority-classify li").click(function () {
            var next_icon = $(this).find("i").text();
            var next_value = $(this).find("span").text();
            var current_icon = $(this).parent().prev().find("i").text();
            var current_value = $(this).parent().prev().find(".hr-authority-classify-text").text();
            $(this).find("i").text(current_icon);
            $(this).find("span").text(current_value);
            $(this).parent().prev().find("i").text(next_icon);
            $(this).parent().prev().find(".hr-authority-classify-text").text(next_value);

            if (next_value === "用户权限") {
                ajaxUrl = "server_dt_test/static/data-test.json";
                $.get("resources/btns_input_01.json", {data:next_value}, function (res) {
                    btns = res;
                    var input_html = template('hr-authority-left-input', btns);
                    $("#hr-table-top-input").empty().append(input_html);
                    var btn_html = template('hr-authority-right-btn', btns);
                    $("#hr-table-top-btn").empty().append(btn_html);
                });

                fixColum = fixColum_01;
                column_th = column_th_01;
                columnDefs_info = columnDefs_info_01;

            }
            if (next_value === "岗位权限") {
                ajaxUrl = "server_dt_test/static/data-test-02.json";
                console.log(ajaxUrl, '-----');
                $.get("resources/btns_input_02.json", {data:next_value}, function (res) {
                    btns = res;
                    var input_html = template('hr-authority-left-input', btns);
                    $("#hr-table-top-input").empty().append(input_html);
                    var btn_html = template('hr-authority-right-btn', btns);
                    $("#hr-table-top-btn").empty().append(btn_html);
                });

                console.log(next_value);
                fixColum = fixColum_02;
                column_th = column_th_02;
                columnDefs_info = columnDefs_info_02;
                //table.api().ajax.url(ajaxUrl).load();

            }
            if (next_value === "权限集合") {
                ajaxUrl = "server_dt_test/static/data-test-03.json";
                $.get("resources/btns_input_03.json", {data:next_value}, function (res) {
                    btns = res;
                    var input_html = template('hr-authority-left-input', btns);
                    $("#hr-table-top-input").empty().append(input_html);
                    var btn_html = template('hr-authority-right-btn', btns);
                    $("#hr-table-top-btn").empty().append(btn_html);
                });

                fixColum = fixColum_03;
                column_th = column_th_03;
                columnDefs_info = columnDefs_info_03;
            }
            var new_options = $.extend({
                "ajax": ajaxUrl,
                'destroy': true,
                'retrieve': false,
                columnDefs: columnDefs_info,
                "columns": column_th,
                fixedColumns: fixColum_03
            }, base_options);

            delete new_options['retrieve'];

            if (0 !== $("#data-table").length) {
                console.log('----------------', next_value, new_options);
                table = $("#data-table").dataTable(new_options);
            }
        });

        var manage_table_html = '<table id="data-table"'
            + 'class="table table-striped table-bordered dataTable no-footer dtr-inline text-center hr-authority-table">'
            + '</table>';

        $("#hr-table-top-input").empty();
        $("#hr-table-top-btn").empty();
        $(".hr-authority-table-content").append(manage_table_html);


        $(document).on("click", ".hr-add-authority-btn", function () {
            $('.hr-authority-control-modal-sm').modal("toggle");
        });


        $(document).unbind(".myevent");
        $(document).on("click.myevent", ".bootstrap-switch", function () {
            console.log("====");
            if ($(this).attr("data-state") === "enabled") {
                $(this).children(":first").css({marginLeft: -20});
                $(this).attr("data-state", "disabled").removeClass("bootstrap-switch-on").addClass("bootstrap-switch-off");
            } else {
                $(this).children(":first").css({marginLeft: 0});
                $(this).attr("data-state", "enabled").removeClass("bootstrap-switch-off").addClass("bootstrap-switch-on");
            }
        });

        var window_height = $(window).height();
        var modal_header_height = $(".modal-header").outerHeight();
        var thead_height = $("#data-table thead").outerHeight();
        var action_btn_height = $(".hr-authority-top-action").outerHeight();


        var table_y = window_height - modal_header_height - thead_height - action_btn_height - 160;

        var base_options = {
            retrieve: true,
            responsive: false,
            'serverSide': true,
            scrollX: true,
            scrollY: table_y,
            scrollCollapse: true,
            bFilter: false,
            bLengthChange: false,
            'ordering': true,
            iDisplayLength: 20,
            oLanguage: {
                "sInfo": ' <span class="m-l-10">相关记录共<span class="text-danger"> _TOTAL_ </span>条</span>',
                "oPaginate": {
                    "sPrevious": "<<",
                    "sNext": ">>"
                }
            }
        };

        var new_options = $.extend({
            "ajax": ajaxUrl,
            columnDefs: columnDefs_info,
            "columns": column_th,
            fixedColumns: fixColum_03
        }, base_options);

        if (0 !== $("#data-table").length) {
            table = $("#data-table").dataTable(new_options);
        }

        var order_options = [];
        var is_default_first_sort = true;
        // 常量
        var default_sort_column = 0;

        function add_default_sortable() {
            $('.hr-authority-table th').each(function (idx, th) {
                var $th = $(th);
                var index = $th.index();

                if (index === 0) {
                    $th.removeClass();
                    return;
                }

                if (is_default_first_sort && index === default_sort_column) {
                    $th.removeClass();
                    $th.addClass('sorting');
                    return;
                }

                if (index === 0 || index === 7 || index === 10) return;


                $th.removeClass('sorting_disabled');
                if ($th.attr('class').indexOf('sorting') >= 0) {

                } else {
                    $th.addClass('sorting');
                }
            });
        }

        var mytable = table;

        mytable.api().on('draw.dt', function () {
            add_default_sortable();
        });


        /*
         Begin search effect
         */

        //search_input_value();
        $('.hr-table-top-input :input').on("change", function () {
            var url = search_input_value();
            mytable.api().ajax.url(url).load();
        });

        /*
         End search effect
         */

        $(document).on('click', '.hr-authority-table th', function (e) {
            var $th = $(this);
            var index = $th.index(); // 以前按照第几列排序
            is_default_first_sort = false;


            if (index === 0 || index === 7 || index === 10) return;

            if (order_options.length === 1 && index !== default_sort_column) {
                var first = order_options[0];
                if (first[0] === 0 && first[1] == 'asc') {
                    order_options = [];
                }
            }

            // 已经enable的排序方案
            var old = null;
            var new_order_options = [];
            for (var i = 0; i < order_options.length; i++) {
                var o = order_options[i];
                if (o[0] === index) { // 已经有排序
                    old = o;
                } else {
                    new_order_options.push(o); // 把原有的方案保存下来
                }
            }

            if (!old) { // 原来 这一列没有排序. unshift加在最前面
                new_order_options.unshift([index, 'asc']);
            } else {
                var oldsort = old[1];
                if (oldsort == 'asc') {
                    new_order_options.unshift([index, 'desc']);
                } else if (oldsort == 'desc') {
                    // 去掉这一列的排序
                }
            }

            order_options = new_order_options;
            if (order_options.length === 0) { // 取消所有的排序， 则按照第一列排序
                order_options.push([default_sort_column, 'asc']);
                is_default_first_sort = true;
            }

            console.log(order_options);

            mytable.api(true).order(order_options).draw();
        });


        /*Begin Table中的复选框功能*/

        function checkbox_effect() {
            $(document).on("click", "input.select-all", function () {
                $('.hr-authority-table input:checkbox').prop('checked', this.checked);
                if (this.checked) {
                    $('.DTFC_Cloned tbody tr').addClass('selected');
                    $('#data-table tbody tr').addClass('selected');
                } else {
                    $('.DTFC_Cloned tbody tr').removeClass('selected');
                    $('#data-table tbody tr').removeClass('selected');
                }
            })

            $(document).on("click", "input.select-single", function () {
                var row = $(this).parent().parent();
                var rowIndex = row.index() + 1;

                if ($(this).is(":checked")) {

                    /*对checked=true的row添加选中效果*/
                    row.addClass("selected");
                    $("#data-table tr:nth-child(" + rowIndex + ")").addClass("selected");
                } else {

                    /*对checked=false的row添加选中效果，全选处于未选中状态*/
                    row.removeClass("selected");
                    $("#data-table tr:nth-child(" + rowIndex + ")").removeClass("selected");
                    $("input.select-all").prop('checked', false);
                }

                /*Start 判断当前页面的row的数量是否与checked=true的row一致*/

                var $chk = $(".DTFC_Cloned .select-single");
                var checked_num = [], checked = false;

                for (var i = 0; i < $chk.length; i++) {
                    if ($($chk[i]).is(":checked")) {
                        checked_num.push("true");
                    }
                }

                if (checked_num.length === $chk.length) {
                    checked = true;
                    $('.select-all').prop('checked', checked)
                } else {
                    checked = false;
                    $('.select-all').prop('checked', checked)
                }

                /*End 判断当前页面的row的数量是否与checked的row一致*/
            })

        }

        checkbox_effect();

        /*End Table中的复选框功能*/


        /*
         Begin authority admin click effect
         */

        function authority_control_admin() {

            $(document).on("click.myevent", "a[data-admin]", function () {
                if ($(this).attr("data-admin") === "true") {
                    $(this).attr("data-admin", "false");
                    $(this).addClass("hr-grey-676a6c").removeClass("hr-orange-f59c1a");
                } else {
                    $(this).attr("data-admin", "true");
                    $(this).addClass("hr-orange-f59c1a").removeClass("hr-grey-676a6c");
                }
            });
        }

        authority_control_admin();

        /*
         End authority admin click effect
         */


        /*
         Start authority classify delete btn
         */
        var authority_delete_html = '<button class="btn btn-default btn-xs hr-authority-classify-delete rounded-corner">x</button>';

        $(document).on('mouseenter', '.hr-authority-classify-item', function () {
            $(this).append(authority_delete_html);
        }).on('mouseleave', '.hr-authority-classify-item', function () {
            $(this).find(".hr-authority-classify-delete").remove();
        });

        /*
         End authority classify delete btn
         */
    }).on("hidden.bs.modal", function (e) {
        $(".hr-authority-table-content").empty();
    });


    /* 点击全选checkbox，将当页所有的row选中 */

}, ManageTable = function () {
    "use strict";
    return {
        init: function () {
            handleTableAjax()
        }
    }
}();
