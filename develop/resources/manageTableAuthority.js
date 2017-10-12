/*
 Start search function
 */

function filter_input_value(obj) {
    var url_arguments = [];
    var $input_box = obj;
    for (var i = 0; i < $input_box.length; i++) {
        url_arguments.push($input_box.eq(i).attr("name") + '=' + encodeURIComponent($input_box.eq(i).val()));
    }
    return url_arguments.join("&");
}

/*
 End search function
 */


//Start table定义
var table;
// End table定义

var handleTableAjax = function () {
    $("[data-click=sys-setAuthority]").click();
    $('.hr-authority-table').on('shown.bs.modal', function () {

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
                    return template('hr-authority-set-status', {data: data})
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


        function inputs_action(url, data) {
            $.get(url, {data: data}, function (res) {
                var btn_inputs = res;
                var input_html = template('hr-authority-left-input', btn_inputs);
                $("#hr-table-top-input").empty().append(input_html);

                var btn_html = template('hr-authority-right-btn', btn_inputs);
                $("#hr-table-top-btn").empty().append(btn_html);

            });
        }

        inputs_action("resources/btns_input_01.json", "用户权限");

        $(document).on("click", ".hr-add-authority-set-btn", function () {
            $('.hr-authority-control-modal-sm').modal("toggle");
        });


        $(document).unbind(".myevent");  //去掉admin和switch重复绑定

        /*
         start 启动开关功能
         */
        $(document).on("click.myevent", ".bootstrap-switch", function () {
            if ($(this).attr("data-state") === "enabled") {
                $(this).children(":first").css({marginLeft: -20});
                $(this).attr("data-state", "disabled").removeClass("bootstrap-switch-on").addClass("bootstrap-switch-off");
            } else {
                $(this).children(":first").css({marginLeft: 0});
                $(this).attr("data-state", "enabled").removeClass("bootstrap-switch-off").addClass("bootstrap-switch-on");
            }
        });
        /*
         start 启动开关功能
         */

        var window_height = $(window).height();
        var modal_header_height = $(".modal-header").outerHeight();
        var thead_height = $("#data-table thead").outerHeight();
        var action_btn_height = $(".hr-authority-top-action").outerHeight();
        var table_y = window_height - modal_header_height - thead_height - action_btn_height - 160;

        var default_option = {
            retrieve: true,
            responsive: false,
            'serverSide': true,
            scrollY: table_y,
            scrollX: true,
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

        var manage_table_html = ' <table id="data-table"'
            + 'class="table table-striped table-bordered table-hover dataTable no-footer dtr-inline text-center hr-authority-table">'
            + '</table>';

        $(".hr-authority-table-content").append(manage_table_html);

        var new_option = $.extend({
            "ajax": {
                url: 'server_dt_test/static/data-test-02.json',
                //dataSrc: "msgDetail",
                dataSrc: function(d) {
                    //console.log(d, d.msgInfo);
                    return d.data;

                    //console.log(d, d.msgInfo, '----++++');
                    //console.log(d);
                    //var json = JSON.stringify(decode(d.msgDetail));

                    //console.log(decode(d.msgDetail).data,'+++++++++++++');
                    //console.log(d.data)
                    //console.log(json);
                    //console.log('++++++++++next')
                    //console.log(decode(d.msgDetail));
                    //return decode(d.msgDetail).data
                }
            },
            columnDefs: columnDefs_info_02,
            "columns": column_th_02,
            fixedColumns: fixColum_02
        }, default_option);

        if (0 !== $("#data-table").length) {
            table = $("#data-table").dataTable(new_option);
        }
        //权限面板选择
        $(".hr-authority-classify li").click(function () {
            var next_icon = $(this).find("i").text();
            var next_value = $(this).find("span").text();
            var current_icon = $(this).parent().prev().find("i").text();
            var current_value = $(this).parent().prev().find(".hr-authority-classify-text").text();
            $(this).find("i").text(current_icon);
            $(this).find("span").text(current_value);
            $(this).parent().prev().find("i").text(next_icon);
            $(this).parent().prev().find(".hr-authority-classify-text").text(next_value);
            if (next_value === "权限集合") {
                inputs_action("resources/btns_input_03.json", "用户权限");
                $(".hr-authority-table-content").empty().append(manage_table_html);
                var new_option = $.extend({
                    "ajax": "server_dt_test/static/data-test-03.json",
                    columnDefs: columnDefs_info_03,
                    "columns": column_th_03,
                    fixedColumns: fixColum_03
                }, default_option);

                if (0 !== $("#data-table").length) {
                    table = $("#data-table").dataTable(new_option);

                }
                table.api().on('draw.dt', function () {
                    add_default_sortable();
                });
            }
            if (next_value === "岗位权限") {
                inputs_action("resources/btns_input_02.json", "用户权限");
                $(".hr-authority-table-content").empty().append(manage_table_html);
                var new_option = $.extend({
                    "ajax": "server_dt_test/static/data-test-02.json",
                    columnDefs: columnDefs_info_02,
                    "columns": column_th_02,
                    fixedColumns: fixColum_02
                }, default_option);

                if (0 !== $("#data-table").length) {
                    table = $("#data-table").dataTable(new_option);

                }
                table.api().on('draw.dt', function () {
                    add_default_sortable();
                });
            }
            if (next_value === "用户权限") {
                inputs_action("resources/btns_input_01.json", "用户权限");
                $(".hr-authority-table-content").empty().append(manage_table_html);

                var new_option = $.extend({
                    "ajax": "server_dt_test/static/data-test-01.json",
                    columnDefs: columnDefs_info_01,
                    "columns": column_th_01,
                    fixedColumns: fixColum_01
                }, default_option);

                if (0 !== $("#data-table").length) {
                    table = $("#data-table").dataTable(new_option);


                }
                table.api().on('draw.dt', function () {
                    add_default_sortable();
                });

            }
        });

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
         start search
         */
        $(document).on("change", ".hr-authority-modal-lg .hr-table-top-input .form-control", function () {
            var $filter_input = $(".hr-authority-modal-lg .hr-table-top-input .form-control");
            var last_url = "/filter?" + filter_input_value($filter_input);
            //console.log($filter_input,'00647');
            mytable.api().ajax.url(last_url).load();
        });
        /*
         end search
         */


        /*
         Begin sort table reload
         */

        function sort_table_load() {
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
        }

        sort_table_load();
        /*
         End sort table reload
         */
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
            });

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

                    var $chk = $("input.select-single");
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

        $(document).on("click.myevent", "a[data-admin]", function () {
            console.log('------');
            if ($(this).attr("data-admin") === "true") {
                $(this).attr("data-admin", "false");
                $(this).addClass("hr-authority-grey").removeClass("hr-authority-orange");
            } else {
                $(this).attr("data-admin", "true");
                $(this).addClass("hr-authority-orange").removeClass("hr-authority-grey");
            }
        });

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

}, AuthorityMangerTable = function () {
    "use strict";
    return {
        init: function () {
            handleTableAjax()
        }
    }
}();
