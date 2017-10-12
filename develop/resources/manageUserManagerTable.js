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
var user_manage_table;
// End table定义

var handleUserMangerTableAjax = function () {
    //$("[data-click=sys-user-manager]").click();
    $('.hr-user-manager-table-modal').on('shown.bs.modal', function () {

        var manage_table_html = ' <table id="data-table"'
            + 'class="table table-striped table-bordered dataTable no-footer dtr-inline text-center hr-user-manager-table">'
            + '</table>';

        $(".hr-user-manager-table-content").append(manage_table_html);


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
        var fixColum = 7;
        var column_th = [
            {"data": "idx", 'title': "序号"},
            {"data": "id", 'title': "用户名"},
            {"data": "name", 'title': "姓名"},
            {"data": "sex", 'title': "性别"},
            {"data": "company", 'title': "机构"},
            {"data": "depart", 'title': "部门"},
            {"data": "job", 'title': "岗位"},
            {"data": "email", 'title': "邮箱"},
            {"data": "tel", 'title': "手机号"},
            {"data": "entryTime", 'title': "入职时间"},
            {"data": "lastLoginTime", 'title': "最后登录"},
            {"data": "address", 'title': "地点"},
            {"data": "IP", 'title': "IP"},
            {"data": "browser", 'title': "浏览器"},
            {"data": "useEquipment", 'title': "使用设备"},
            {"data": "switch", 'title': "启用"},
            {"data": "action", 'title': "操作"}
        ];

        var columnDefs_info = [
            {targets: '_all', orderable: false},
            {
                "targets": 15,
                "render": function (data, type, row) {
                    return template('hr-authority-switch-status', {data: data})
                }
            },
            {
                "targets": 16,
                "render": function (data, type, row) {
                    console.log(data);
                    return '<a href="javascript:void(0);" class="btn-link m-r-5" data-id="' + data.id + '">'+data.text+'</a>'
                }
            }

        ];

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
            "ajax": "server_dt_test/static/user-data-test.json",
            columnDefs: columnDefs_info,
            "columns": column_th,
            fixedColumns: {
                leftColumns: fixColum
            }
        }, base_options);

        if (0 !== $("#data-table").length) {
            user_manage_table = $("#data-table").dataTable(new_options);
        }


        var order_options = [];

        var is_default_first_sort = true;

        // 常量
        var default_sort_column = 0;

        function add_default_sortable() {


            $('.hr-user-manager-table-modal th').each(function (idx, th) {
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


                if (index === 0) return;

                $th.removeClass('sorting_disabled');
                if ($th.attr('class').indexOf('sorting') >= 0) {

                } else {
                    $th.addClass('sorting');
                }
            });
        }

        var mytable = user_manage_table;

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

        $(document).on('click', '.hr-user-manager-table th', function (e) {
            var $th = $(this);
            var index = $th.index(); // 以前按照第几列排序
            is_default_first_sort = false;


            if (index === 0) return;

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


    }).on("hidden.bs.modal", function (e) {
        $(".hr-user-manager-table-content").empty();
    });


    /* 点击全选checkbox，将当页所有的row选中 */

}, UserMangerTable = function () {
    "use strict";
    return {
        init: function () {
            handleUserMangerTableAjax()
        }
    }
}();
