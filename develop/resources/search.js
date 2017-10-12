var handleSearchListInit = function () {

    var localObj = window.location;
    var contextPath = localObj.pathname.split("/")[1];
    var basePath = localObj.protocol + "//" + localObj.host + "/" + contextPath;
    var server_context = basePath;

    $("[data-click=getSearchList]").click(function (e) {
        e.preventDefault();
        loadCSS("popcss", "../../plugins/RD/popwindow/popwindow.css");
        loadJS("popjs", "../../plugins/RD/popwindow/popwindow.js");
        PopWindow.init("0,12,0,width-70percent,,no-footer,hr-search-modal");
        var title = "搜索结果";
        $("#hr-search-modal .modal-title").html(title);
        var popWin = $("#hr-search-modal .sys-pop-win-m");
        var i = '<div class="clearfix hr-sub-search"><ul class="nav navbar-nav"><li><form class="navbar-form full-width hr-search-form"><div class="form-group"><input type="text" class="form-control" id="lucene_search2" placeholder="人员/机构/功能菜单"><input type="hidden" id="searchIconType2" value=""/><button type="submit" data-click="getSearchList2" class="btn btn-search" id="modal-btn-search"><i class="fa fa-search"></i></button></div></form></li></ul></div><div class="hr-search-result" style="max-height: 412px;overflow: auto;" id="searchResult"></div><div id="demo2" style="width: 500px"></div>';
        popWin.append(i);

        /*
         modal complete function
         */

        if ($("#hr-search-modal").is(":visible")) {
            var data_modal = [
                {
                    "value": "",
                    "category": "找人",
                    "icon": "fa fa-user"
                },
                {
                    "value": "",
                    "category": "找机构",
                    "icon": "fa fa-building"
                },
                {
                    "value": "",
                    "category": "找功能",
                    "icon": "fa fa-th-large"
                }
            ];


            $("#lucene_search2").focus(function () {
                $("#lucene_search2").autocomplete({
                    select: function (event, ui) {
                        var icon = ui.item.icon;
                        $("#searchIconType2").val(icon);
                        $("#modal-btn-search").click();
                    },
                    minLength: 0,
                    source: function (request, response) {
                        // 有输入的情况
                        console.log(request,response);

                        if (request.term == "") {
                            console.log(data_modal);
                            response(data_modal)
                        } else {
                            $.ajax({
                                url: server_context + "/lucene.do",
                                data: {
                                    action: "searchInputValue",
                                    params: encode($("#lucene_search2").val())
                                },
                                success: function (data) {
                                    result = decode(data);
                                    response(decode(result.msgDetail));
                                }
                            });
                        }

                    }
                }).focus(function () {
                    $(this).autocomplete("search");

                    var $search_domain = $("#lucene_search2");
                    $(".ui-autocomplete").css({
                        left: $search_domain.offset().left,
                        top: $search_domain.offset().top + 30
                    });
                }).autocomplete().data("uiAutocomplete")._renderItem = function (ul, item) {
                    return $("<li>")
                        .append("<a><i class='m-r-10 text-success " + item.icon + "'></i>" + item.category + "：" + item.value + "</a>")
                        .appendTo(ul);
                };

                $(this).autocomplete("search");

            });

            $("#lucene_search2").bind("keydown", function (e) {

                if (e.which === 13) { // enter
                    $("#lucene_search2").blur();
                    $("#modal-btn-search").click();
                }
            });

            $(document).on("click", ".hr-search-person-link", function () {
                $(".hr-search-person-info").remove();
                $(".modal-backdrop").remove();
                $("body").append('<div class="modal-backdrop fade in"></div>');
                e.preventDefault();
                loadCSS("popcss", "../../plugins/RD/popwindow/popwindow.css");
                loadJS("popjs", "../../plugins/RD/popwindow/popwindow.js");
                PopWindow.init("0,12,0,width-70percent,,no-footer,hr-search-person-info");
                var title = "信息浏览";
                $("#hr-search-person-info .modal-title").html(title);
                var popWin = $("#hr-search-person-info .sys-pop-win-m");
                var i = '<div class="clearfix hr-bg-shallow-blue hr-info-action"><div class="pull-left"><div class="btn-group m-r-10"><a href="javascript:;" class="btn btn-default">查看详细信息</a></div><div class="btn-group m-r-10"><a href="javascript:;" data-toggle="dropdown" class="btn btn-default dropdown-toggle">人事业务<span class="caret m-l-5"></span></a><ul class="dropdown-menu f-s-14"><li><a href="javascript:;">合同签订</a></li><li><a href="javascript:;">薪资核定</a></li><li><a href="javascript:;">人员调动</a></li><li><a href="javascript:;">干部任免</a></li></ul></div><div class="btn-group m-r-10"><a href="javascript:;" data-toggle="dropdown" class="btn btn-default dropdown-toggle">生成报表<span class="caret m-l-5"></span></a><ul class="dropdown-menu f-s-14"><li><a href="javascript:;">人员登记表</a></li><li><a href="javascript:;">干部任免表</a></li><li><a href="javascript:;">收入证明</a></li></ul></div></div><div class="pull-right"><button type="button" class="btn btn-default m-r-10">打印</button><button type="button" class="btn btn-default">导出</button></div></div><div class="text-right hr-f-s-15"><i class="iconfont hr-f-s-26 m-r-5 hr-txt-green-ac">&#xe64f;</i><a href="#" class="hr-inline-block hr-txt-green-ac">完善信息</a></div><div class="media hr-f-s-15 hr-info-media m-t-0"><a class="media-left m-r-10" href="javascript:;"><img src="../../resources/img/focus-person-01.jpg" alt="" class="media-object hr-line-height-16"></a><div class="media-body border-bottom-1 p-b-0 hr-line-height-16"><h4 class="media-heading m-b-0 m-t-15"><span class="f-s-18">张晓晓</span><span class="m-l-20">女</span><a class="btn btn-link text-danger hr-f-s-13">加关注</a><a class="btn btn-link hr-txt-green-ac pull-right hr-rl-no-padding"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></h4><div><span>总行人力资源部</span><span class="m-l-20">总经理助理</span><span class="m-l-40">入职时间：</span><span>2014年8月</span></div><div><i class="fa fa-phone hr-txt-green-ac"></i><span class="m-l-5">18301101234</span><i class="fa fa-envelope-o m-l-40 hr-txt-green-ac"></i><span class="m-l-5">zhangxiaoxiao@citic.com</span></div></div></div><div class="hr-line-height-16  hr-f-s-15 m-t-20 m-b-30"><div><span>汉族</span><span>1990年1月2日出生</span><span class="m-l-20">未婚</span><span>党员</span><span class="m-l-20">最高学历：</span><span>本科</span><a class="btn btn-link hr-txt-green-ac pull-right hr-rl-no-padding"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></div><div><span>国籍：</span><span>中国</span></div><div><span>籍贯：</span><span>河北省</span><span>石家庄市</span></div><div><span>证件类型：</span><span>身份证</span> <span class="m-l-20">证件号码：</span><span>110234198509046387</span></div></div><div class="hr-work-experience hr-f-s-15"><div class="hr-position-relative"><label class="label label-default m-r-20 f-w-400 f-s-14 hr-position-absolute hr-work-label">工作经历</label><a class="hr-txt-green-ac hr-position-absolute hr-add-action"><i class="fa fa-plus-square-o"></i><span class="m-l-5">添加</span></a></div><table class="table m-t-30"><tbody><tr><td>2011年3月至2012年8月</td><td>中信银行南京分行人力资源管理部</td><td>人事专员</td><td class="text-right p-r-0"><a type="button" class="btn btn-link hr-txt-green-ac">查看</a><a type="button" class="btn btn-link hr-txt-green-ac p-r-0"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></td></tr><tr><td>2012年8月至2013年12月</td><td>中信银行南京分行人力资源管理部</td><td>总经理助理</td><td class="text-right p-r-0"><a type="button" class="btn btn-link hr-txt-green-ac">查看</a><a type="button" class="btn btn-link hr-txt-green-ac p-r-0"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></td></tr><tr><td>2014年1月至今</td><td>中信银行总行人力资源管理部</td><td>总经理助理</td><td class="text-right p-r-0"><a type="button" class="btn btn-link hr-txt-green-ac">查看</a><a type="button" class="btn btn-link hr-txt-green-ac p-r-0"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></td></tr></tbody></table></div>';
                popWin.append(i);
            });

            $("#hr-search-modal .close").click(function () {
                $(".modal-backdrop").remove();
            })
        }
    });

    var data_search = [
        {
            "value": "",
            "category": "找人",
            "icon": "fa fa-user"
        },
        {
            "value": "",
            "category": "找机构",
            "icon": "fa fa-building"
        },
        {
            "value": "",
            "category": "找功能",
            "icon": "fa fa-th-large"
        }
    ];

    $(".hr-search-input").focus(function () {
        $(".hr-search-input").autocomplete({
            select: function (event, ui) {
                var icon = ui.item.icon;
                $("#searchIconType").val(icon);
                $(".hr-search-modal-btn").click();
            },
            minLength: 0,
            source: function (request, response) {

                // 有输入的情况
                if (request.term == "") {
                    response(data_search)
                } else {
                    $.ajax({
                        url: server_context + "/lucene.do",
                        data: {
                            action: "searchInputValue",
                            params: encode($(".hr-search-input").val())
                        },
                        success: function (data) {
                            result = decode(data);
                            response(decode(result.msgDetail));
                        }
                    });
                }

            }
        }).focus(function () {
            $(this).autocomplete("search");

            var $search_domain = $(".hr-search-input");
            $(".ui-autocomplete").css({
                left: $search_domain.offset().left,
                top: $search_domain.offset().top + 30
            });
        }).autocomplete().data("uiAutocomplete")._renderItem = function (ul, item) {
            return $("<li>")
                .append("<a><i class='m-r-10 text-success " + item.icon + "'></i>" + item.category + "：" + item.value + "</a>")
                .appendTo(ul);
        };

        $(this).autocomplete("search");

    });
    $(".hr-search-input").bind("keydown", function (e) {

        if (e.which === 13) { // enter
            $(".hr-search-input").blur();
            $(".hr-search-modal-btn").click();
        }
    });
    $(".hr-search-form").submit(function (e) {
        e.preventDefault();
    });


};


handleSearchListAction = function () {
    $(document).on("click", '[data-click="getSearchList"]',
        function () {
            var totalPage = 10;//总记录数
            var pageSize = 0;//每页显示？条
            var currentPage = 0;//当前第？页
            if (currentPage == 0) {
                currentPage = 1;
            }
            if (pageSize == 0) {
                pageSize = 1;
            }
            $("#searchResult").empty();//清空外层div
            var searchVal = $("#lucene_search").val();//搜索框值
            var searchIconType = $("#searchIconType").val();//获取所选类别、找人、找机构、找功能

            var result = $.Execute("lucene", "lucene_getSearchList", 5, 1, searchVal, searchIconType);
            var searchPerTitle = '';//找人标题div
            var searchOrgTitle = '';//找机构标题div
            var searchFunTitle = '';//找功能标题div
            var searchAllTitle = '';//找全部标题div
            var content = '';//找人
            var searchOrg = '';//找机构
            var searchFun = '';//找功能
            if (result.status == "1") {
                var o = decode(result.msgDetail);
                if (o != null) {
                    //找人
                    var arr = new Array(o.pageSize);
                    arr = o.results;
                    //找功能
                    var arr1 = new Array(o.pageSize);
                    arr1 = o.funResults;
                    if (searchIconType == "fa fa-user") {
                        searchPerTitle += '<div class="hr-stuff-search" id="searchPerTitle">' +
                            '<h4 class="p-l-30 p-t-5 p-b-5 f-s-14 m-t-0 m-b-0" style="background-color: #f5f4f2">人员</h4>' +
                            '<div class="p-l-30 p-r-10" id="searchModal">' +

                            '<div>' +
                            '</div>';
                        $("#searchResult").append(searchPerTitle);
                        if (arr.length > 0) {
                            for (var i = 0; i < arr.length; i++) {//找人
                                var summarys = arr[i].summary;
                                var val = summarys.split("#");
                                content += '<div class="media media-sm border-bottom-1 p-t-10 p-b-10 m-t-0">' +
                                    '<a class="media-left hr-search-person-link-img" href="javascript:;">' +
                                    '<img src="../../resources/img/search-01.png" alt="" class="media-object">' +
                                    '</a>' +
                                    '<div class="media-body">' +
                                    '<a class="hr-search-person-link" href="javascript:void(0);"><h4 class="media-heading f-s-18 hr-text-underline m-t-10">' +
                                    '<span class="text-danger">' + val[0] + ' &nbsp;</span>' + val[3] + '' +
                                    '</h4></a>' +
                                    '<div class="hr-f-s-13">' +
                                    '' + val[1] + '，42岁，籍贯：河北。出生日期：' + val[2] + '，入党时间：1999年12月05日，进入本行时间：2000年04月23日。' +
                                    '</div>' +
                                    '</div>' +
                                    '</div>';
                            }
                            content += '<div class="p-t-20 p-b-20 hr-txt-green-dark2 f-s-12"><i class="fa fa-search m-r-10 f-s-16"></i>' +
                                '<a href="#" class="hr-txt-green-dark2">查看全部</a>' +
                                '</div>';
                            //if(o.totalRecord>1){
                            //    totalPage= o.totalRecord;
                            //
                            //    if(totalPage%pageSize==0){
                            //        totalPage = totalPage/pageSize;
                            //    }else{
                            //        totalPage = parseInt(totalPage/pageSize) + 1;
                            //    }
                            //    $("#demo2").paginate({
                            //        count 		: 10,
                            //        start 		: 2,
                            //        display     : 5,
                            //        border					: true,
                            //        text_color  			: '#888',
                            //        background_color    	: '#EEE',
                            //        text_hover_color  		: 'red',
                            //        background_hover_color	: '#CFCFCF'
                            //    });
                            //}


                        } else {
                            content += '<div class="media media-sm p-t-10 p-b-10 m-t-0">' +
                                '<div style="text-align: center;"><img src="../../resources/img/sorry.png"/><span class="m-l-5">未搜索到相关信息</span></div>' +
                                '</div>';
                        }
                    } else if (searchIconType == "fa fa-building") {//找机构
                        searchOrgTitle += '<div class="hr-stuff-organ" id="searchOrgTitle">' +
                            '<h4 class="p-l-30 p-t-5 p-b-5 f-s-14 m-t-0 m-b-0" style="background-color: #f5f4f2">机构</h4>' +
                            '<div class="p-l-30 p-r-10" id="searchOrgModal">' +
                            '</div>' +
                            '</div>';
                        $("#searchResult").append(searchOrgTitle);
                        if (false) {
                            for (var i = 0; i < 2; i++) {
                                searchOrg += '<div class="media media-sm border-bottom-1 p-t-10 p-b-10 m-t-0">' +
                                    '<a class="media-left hr-search-person-link-img" href="javascript:;">' +
                                    '<img src="../../resources/img/search-01.png" alt="" class="media-object">' +
                                    '</a>' +
                                    '<div class="media-body">' +
                                    '<a class="hr-search-person-link" href="javascript:void(0);"><h4 class="media-heading f-s-18 hr-text-underline m-t-10">' +
                                    '<span class="text-danger">张明</span>人力资源部总经理' +
                                    '</h4></a>' +
                                    '<div class="hr-f-s-13">' +
                                    '男，42岁，籍贯：河北。参加工作时间：1990年08月10日，入党时间：1999年12月05日，进入本行时间：2000年04月23日。' +
                                    '</div>' +
                                    '</div>' +
                                    '</div>';
                            }
                            searchOrg += '<div class="p-t-20 p-b-20 hr-txt-green-dark2 f-s-12"><i class="fa fa-search m-r-10 f-s-16"></i>' +
                                '<a href="#" class="hr-txt-green-dark2">查看全部</a>' +
                                '</div>';
                        } else {
                            searchOrg += '<div class="media media-sm p-t-10 p-b-10 m-t-0">' +
                                '<div style="text-align: center;"><img src="../../resources/img/sorry.png"/><span class="m-l-5">未搜索到相关信息</span></div>' +
                                '</div>';
                        }
                    } else if (searchIconType == "fa fa-th-large") {//找功能
                        searchFunTitle += '<div class="" id="searchFunTitle">' +
                            '<h4 class="p-l-30 p-t-5 p-b-5 f-s-14 m-t-0 m-b-0" style="background-color: #f5f4f2">功能</h4>' +
                            '<div class="p-l-30 p-r-10" id="searchFunModal">' +
                            '</div>' +
                            '</div>';
                        $("#searchResult").append(searchFunTitle);
                        if (arr1.length > 0) {
                            for (var i = 0; i < arr1.length; i++) {
                                searchFun += '<div class="media media-sm border-bottom-1 p-t-10 p-b-10 m-t-0">' +
                                    '<div class="media-body">' +
                                    '<div class="f-s-18">' +
                                    '<a href="#" class="text-danger">' + arr1[i].funName + '</a>' +
                                    '</div>' +
                                    '</div>' +
                                    '</div>';
                            }
                            searchFun += '<div class="p-t-20 p-b-20 hr-txt-green-dark2 f-s-12"><i class="fa fa-search m-r-10 f-s-16"></i>' +
                                '<a href="#" class="hr-txt-green-dark2">查看全部</a>' +
                                '</div>';
                        } else {
                            searchFun += '<div class="media media-sm p-t-10 p-b-10 m-t-0">' +
                                '<div style="text-align: center;"><img src="../../resources/img/sorry.png"/><span class="m-l-5">未搜索到相关信息</span></div>' +
                                '</div>';
                        }
                    } else {//查询全部
                        searchAllTitle += '<div class="hr-stuff-search" id="searchPerTitle">' +
                            '<h4 class="p-l-30 p-t-5 p-b-5 f-s-14 m-t-0 m-b-0" style="background-color: #f5f4f2">人员</h4>' +
                            '<div class="p-l-30 p-r-10" id="searchModal">' +
                            '</div>' +
                            '</div>' +
                            '<div class="hr-stuff-organ" id="searchOrgTitle">' +
                            '<h4 class="p-l-30 p-t-5 p-b-5 f-s-14 m-t-0 m-b-0" style="background-color: #f5f4f2">机构</h4>' +
                            '<div class="p-l-30 p-r-10" id="searchOrgModal">' +
                            '</div>' +
                            '</div>' +
                            '<div class="" id="searchFunTitle">' +
                            '<h4 class="p-l-30 p-t-5 p-b-5 f-s-14 m-t-0 m-b-0" style="background-color: #f5f4f2">功能</h4>' +
                            '<div class="p-l-30 p-r-10" id="searchFunModal">' +
                            '</div>' +
                            '</div>';
                        $("#searchResult").append(searchAllTitle);
                        if (arr.length > 0) {
                            for (var i = 0; i < arr.length; i++) {//找人
                                var summarys = arr[i].summary;
                                var val = summarys.split("#");
                                content += '<div class="media media-sm border-bottom-1 p-t-10 p-b-10 m-t-0">' +
                                    '<a class="media-left hr-search-person-link-img" href="javascript:;">' +
                                    '<img src="../../resources/img/search-01.png" alt="" class="media-object">' +
                                    '</a>' +
                                    '<div class="media-body">' +
                                    '<a class="hr-search-person-link" href="javascript:void(0);"><h4 class="media-heading f-s-18 hr-text-underline m-t-10">' +
                                    '<span class="text-danger">' + val[0] + ' &nbsp;</span>' + val[3] + '' +
                                    '</h4></a>' +
                                    '<div class="hr-f-s-13">' +
                                    '' + val[1] + '，42岁，籍贯：河北。出生日期：' + val[2] + '，入党时间：1999年12月05日，进入本行时间：2000年04月23日。' +
                                    '</div>' +
                                    '</div>' +
                                    '</div>';
                            }
                            content += '<div class="p-t-20 p-b-20 hr-txt-green-dark2 f-s-12"><i class="fa fa-search m-r-10 f-s-16"></i>' +
                                '<a href="javascript:;" data-click="searchMore" class="hr-txt-green-dark2">查看全部</a>' +
                                '</div>';
                        } else {
                            content += '<div class="media media-sm p-t-10 p-b-10 m-t-0">' +
                                '<div style="text-align: center;"><img src="../../resources/img/sorry.png"/><span class="m-l-5">未搜索到相关信息</span></div>' +
                                '</div>';
                        }
                        if (false) {
                            for (var i = 0; i < 2; i++) {
                                searchOrg += '<div class="media media-sm border-bottom-1 p-t-10 p-b-10 m-t-0">' +
                                    '<a class="media-left hr-search-person-link-img" href="javascript:;">' +
                                    '<img src="../../resources/img/search-01.png" alt="" class="media-object">' +
                                    '</a>' +
                                    '<div class="media-body">' +
                                    '<a class="hr-search-person-link" href="javascript:void(0);"><h4 class="media-heading f-s-18 hr-text-underline m-t-10">' +
                                    '<span class="text-danger">张明</span>人力资源部总经理' +
                                    '</h4></a>' +
                                    '<div class="hr-f-s-13">' +
                                    '男，42岁，籍贯：河北。参加工作时间：1990年08月10日，入党时间：1999年12月05日，进入本行时间：2000年04月23日。' +
                                    '</div>' +
                                    '</div>' +
                                    '</div>';
                            }
                            searchOrg += '<div class="p-t-20 p-b-20 hr-txt-green-dark2 f-s-12"><i class="fa fa-search m-r-10 f-s-16"></i>' +
                                '<a href="#" class="hr-txt-green-dark2">查看全部</a>' +
                                '</div>';
                        } else {
                            searchOrg += '<div class="media media-sm p-t-10 p-b-10 m-t-0">' +
                                '<div style="text-align: center;"><img src="../../resources/img/sorry.png"/><span class="m-l-5">未搜索到相关信息</span></div>' +
                                '</div>';
                        }
                        if (arr1.length > 0) {
                            for (var i = 0; i < arr1.length; i++) {
                                searchFun += '<div class="media media-sm border-bottom-1 p-t-10 p-b-10 m-t-0">' +
                                    '<div class="media-body">' +
                                    '<div class="f-s-18">' +
                                    '<a href="#" class="text-danger">' + arr1[i].funName + '</a>' +
                                    '</div>' +
                                    '</div>' +
                                    '</div>';
                            }
                            searchFun += '<div class="p-t-20 p-b-20 hr-txt-green-dark2 f-s-12"><i class="fa fa-search m-r-10 f-s-16"></i>' +
                                '<a href="#" class="hr-txt-green-dark2">查看全部</a>' +
                                '</div>';
                        } else {
                            searchFun += '<div class="media media-sm p-t-10 p-b-10 m-t-0">' +
                                '<div style="text-align: center;"><img src="../../resources/img/sorry.png"/><span class="m-l-5">未搜索到相关信息</span></div>' +
                                '</div>';
                        }
                    }
                }
            }
            $("#lucene_search2").val(searchVal);
            $("#searchIconType").val("");//清空所选类别
            $("#searchModal").empty();
            $("#searchOrgModal").empty();
            $("#searchFunModal").empty();
            $("#searchModal").append(content);//填充找人div
            $("#searchOrgModal").append(searchOrg);//填充找机构div
            $("#searchFunModal").append(searchFun);//填充找功能div


        });
    $(document).on("click", '[data-click="getSearchList2"]',
        function () {
            var searchval2 = $("#lucene_search2").val();//modal搜索框值
            var searchIconType = $("#searchIconType2").val();//获取所选类别、找人、找机构、找功能
            var result = $.Execute("lucene", "lucene_getSearchList", 5, 1, searchval2, searchIconType);
            $("#searchResult").empty();//清空外层div
            var searchPerTitle = '';//找人标题div
            var searchOrgTitle = '';//找机构标题div
            var searchFunTitle = '';//找功能标题div
            var searchAllTitle = '';//找全部标题div
            var content = '';//找人
            var searchOrg = '';//找机构
            var searchFun = '';//找功能
            if (result.status == "1") {
                var o = decode(result.msgDetail);
                if (o != null) {
                    //找人
                    var arr = new Array(o.pageSize);
                    arr = o.results;
                    //找功能
                    var arr1 = new Array(o.pageSize);
                    arr1 = o.funResults;
                    if (searchIconType == "fa fa-user") {
                        searchPerTitle += '<div class="hr-stuff-search" id="searchPerTitle">' +
                            '<h4 class="p-l-30 p-t-5 p-b-5 f-s-14 m-t-0 m-b-0" style="background-color: #f5f4f2">人员</h4>' +
                            '<div class="p-l-30 p-r-10" id="searchModal">' +
                            '<div>' +
                            '</div>';
                        $("#searchResult").append(searchPerTitle);
                        if (arr.length > 0) {
                            for (var i = 0; i < arr.length; i++) {//找人
                                var summarys = arr[i].summary
                                var val = summarys.split("#");
                                content += '<div class="media media-sm border-bottom-1 p-t-10 p-b-10 m-t-0">' +
                                    '<a class="media-left hr-search-person-link-img" href="javascript:;">' +
                                    '<img src="../../resources/img/search-01.png" alt="" class="media-object">' +
                                    '</a>' +
                                    '<div class="media-body">' +
                                    '<a class="hr-search-person-link" href="javascript:void(0);"><h4 class="media-heading f-s-18 hr-text-underline m-t-10">' +
                                    '<span class="text-danger">' + val[0] + ' &nbsp;</span>' + val[3] + '' +
                                    '</h4></a>' +
                                    '<div class="hr-f-s-13">' +
                                    '' + val[1] + '，42岁，籍贯：河北。出生日期：' + val[2] + '，入党时间：1999年12月05日，进入本行时间：2000年04月23日。' +
                                    '</div>' +
                                    '</div>' +
                                    '</div>';
                            }
                            content += '<div class="p-t-20 p-b-20 hr-txt-green-dark2 f-s-12"><i class="fa fa-search m-r-10 f-s-16"></i>' +
                                '<a href="javascript:;" data-click="searchMore" class="hr-txt-green-dark2">查看全部</a>' +
                                '</div>';
                        } else {
                            content += '<div class="media media-sm p-t-10 p-b-10 m-t-0">' +
                                '<div style="text-align: center;"><img src="../../resources/img/sorry.png"/><span class="m-l-5">未搜索到相关信息</span></div>' +
                                '</div>';
                        }
                    } else if (searchIconType == "fa fa-building") {//找机构
                        searchOrgTitle += '<div class="hr-stuff-organ" id="searchOrgTitle">' +
                            '<h4 class="p-l-30 p-t-5 p-b-5 f-s-14 m-t-0 m-b-0" style="background-color: #f5f4f2">机构</h4>' +
                            '<div class="p-l-30 p-r-10" id="searchOrgModal">' +
                            '</div>' +
                            '</div>';
                        $("#searchResult").append(searchOrgTitle);
                        if (false) {
                            for (var i = 0; i < 2; i++) {
                                searchOrg += '<div class="media media-sm border-bottom-1 p-t-10 p-b-10 m-t-0">' +
                                    '<a class="media-left hr-search-person-link-img" href="javascript:;">' +
                                    '<img src="../../resources/img/search-01.png" alt="" class="media-object">' +
                                    '</a>' +
                                    '<div class="media-body">' +
                                    '<a class="hr-search-person-link" href="javascript:void(0);"><h4 class="media-heading f-s-18 hr-text-underline m-t-10">' +
                                    '<span class="text-danger">张明</span>人力资源部总经理' +
                                    '</h4></a>' +
                                    '<div class="hr-f-s-13">' +
                                    '男，42岁，籍贯：河北。参加工作时间：1990年08月10日，入党时间：1999年12月05日，进入本行时间：2000年04月23日。' +
                                    '</div>' +
                                    '</div>' +
                                    '</div>';
                            }
                            searchOrg += '<div class="p-t-20 p-b-20 hr-txt-green-dark2 f-s-12"><i class="fa fa-search m-r-10 f-s-16"></i>' +
                                '<a href="#" class="hr-txt-green-dark2">查看全部</a>' +
                                '</div>';
                        } else {
                            searchOrg += '<div class="media media-sm p-t-10 p-b-10 m-t-0">' +
                                '<div style="text-align: center;"><img src="../../resources/img/sorry.png"/><span class="m-l-5">未搜索到相关信息</span></div>' +
                                '</div>';
                        }
                    } else if (searchIconType == "fa fa-th-large") {//找功能
                        searchFunTitle += '<div class="" id="searchFunTitle">' +
                            '<h4 class="p-l-30 p-t-5 p-b-5 f-s-14 m-t-0 m-b-0" style="background-color: #f5f4f2">功能</h4>' +
                            '<div class="p-l-30 p-r-10" id="searchFunModal">' +
                            '</div>' +
                            '</div>';
                        $("#searchResult").append(searchFunTitle);
                        if (arr1.length > 0) {
                            for (var i = 0; i < arr1.length; i++) {
                                searchFun += '<div class="media media-sm border-bottom-1 p-t-10 p-b-10 m-t-0">' +
                                    '<div class="media-body">' +
                                    '<div class="f-s-18">' +
                                    '<a href="#" class="text-danger hr-text-underline">' + arr1[i].funName + '</a>' +
                                    '</div>' +
                                    '</div>' +
                                    '</div>';
                            }
                            searchFun += '<div class="p-t-20 p-b-20 hr-txt-green-dark2 f-s-12"><i class="fa fa-search m-r-10 f-s-16"></i>' +
                                '<a href="#" class="hr-txt-green-dark2">查看全部</a>' +
                                '</div>';
                        } else {
                            searchFun += '<div class="media media-sm p-t-10 p-b-10 m-t-0">' +
                                '<div style="text-align: center;"><img src="../../resources/img/sorry.png"/><span class="m-l-5">未搜索到相关信息</span></div>' +
                                '</div>';
                        }
                    } else {//查询全部
                        searchAllTitle += '<div class="hr-stuff-search" id="searchPerTitle">' +
                            '<h4 class="p-l-30 p-t-5 p-b-5 f-s-14 m-t-0 m-b-0" style="background-color: #f5f4f2">人员</h4>' +
                            '<div class="p-l-30 p-r-10" id="searchModal">' +
                            '</div>' +
                            '</div>' +
                            '<div class="hr-stuff-organ" id="searchOrgTitle">' +
                            '<h4 class="p-l-30 p-t-5 p-b-5 f-s-14 m-t-0 m-b-0" style="background-color: #f5f4f2">机构</h4>' +
                            '<div class="p-l-30 p-r-10" id="searchOrgModal">' +
                            '</div>' +
                            '</div>' +
                            '<div class="" id="searchFunTitle">' +
                            '<h4 class="p-l-30 p-t-5 p-b-5 f-s-14 m-t-0 m-b-0" style="background-color: #f5f4f2">功能</h4>' +
                            '<div class="p-l-30 p-r-10" id="searchFunModal">' +
                            '</div>' +
                            '</div>';
                        $("#searchResult").append(searchAllTitle);
                        if (arr.length > 0) {
                            for (var i = 0; i < arr.length; i++) {//找人
                                var summarys = arr[i].summary;
                                var val = summarys.split("#");
                                content += '<div class="media media-sm border-bottom-1 p-t-10 p-b-10 m-t-0">' +
                                    '<a class="media-left hr-search-person-link-img" href="javascript:;">' +
                                    '<img src="../../resources/img/search-01.png" alt="" class="media-object">' +
                                    '</a>' +
                                    '<div class="media-body">' +
                                    '<a class="hr-search-person-link" href="javascript:void(0);"><h4 class="media-heading f-s-18 hr-text-underline m-t-10">' +
                                    '<span class="text-danger">' + val[0] + ' &nbsp;</span>' + val[3] + '' +
                                    '</h4></a>' +
                                    '<div class="hr-f-s-13">' +
                                    '' + val[1] + '，42岁，籍贯：河北。出生日期：' + val[2] + '，入党时间：1999年12月05日，进入本行时间：2000年04月23日。' +
                                    '</div>' +
                                    '</div>' +
                                    '</div>';
                            }
                            content += '<div class="p-t-20 p-b-20 hr-txt-green-dark2 f-s-12"><i class="fa fa-search m-r-10 f-s-16"></i>' +
                                '<a href="javascript:;" data-click="searchMore" class="hr-txt-green-dark2">查看全部</a>' +
                                '</div>';
                        } else {
                            content += '<div class="media media-sm p-t-10 p-b-10 m-t-0">' +
                                '<div style="text-align: center;"><img src="../../resources/img/sorry.png"/><span class="m-l-5">未搜索到相关信息</span></div>' +
                                '</div>';
                        }
                        if (false) {
                            for (var i = 0; i < 2; i++) {
                                searchOrg += '<div class="media media-sm border-bottom-1 p-t-10 p-b-10 m-t-0">' +
                                    '<a class="media-left hr-search-person-link-img" href="javascript:;">' +
                                    '<img src="../../resources/img/search-01.png" alt="" class="media-object">' +
                                    '</a>' +
                                    '<div class="media-body">' +
                                    '<a class="hr-search-person-link" href="javascript:void(0);"><h4 class="media-heading f-s-18 hr-text-underline m-t-10">' +
                                    '<span class="text-danger">张明</span>人力资源部总经理' +
                                    '</h4></a>' +
                                    '<div class="hr-f-s-13">' +
                                    '男，42岁，籍贯：河北。参加工作时间：1990年08月10日，入党时间：1999年12月05日，进入本行时间：2000年04月23日。' +
                                    '</div>' +
                                    '</div>' +
                                    '</div>';
                            }
                            searchOrg += '<div class="p-t-20 p-b-20 hr-txt-green-dark2 f-s-12"><i class="fa fa-search m-r-10 f-s-16"></i>' +
                                '<a href="#" class="hr-txt-green-dark2">查看全部</a>' +
                                '</div>';
                        } else {
                            searchOrg += '<div class="media media-sm p-t-10 p-b-10 m-t-0">' +
                                '<div style="text-align: center;"><img src="../../resources/img/sorry.png"/><span class="m-l-5">未搜索到相关信息</span></div>' +
                                '</div>';
                        }
                        if (arr1.length > 0) {
                            for (var i = 0; i < arr1.length; i++) {
                                searchFun += '<div class="media media-sm border-bottom-1 p-t-10 p-b-10 m-t-0">' +
                                    '<div class="media-body">' +
                                    '<div class="hr-f-s-13">' +
                                    '<a href="#" class="text-danger">' + arr1[i].funName + '</a>' +
                                    '</div>' +
                                    '</div>' +
                                    '</div>';
                            }
                            searchFun += '<div class="p-t-20 p-b-20 hr-txt-green-dark2 f-s-12"><i class="fa fa-search m-r-10 f-s-16"></i>' +
                                '<a href="#" class="hr-txt-green-dark2">查看全部</a>' +
                                '</div>';
                        } else {
                            searchFun += '<div class="media media-sm p-t-10 p-b-10 m-t-0">' +
                                '<div style="text-align: center;"><img src="../../resources/img/sorry.png"/><span class="m-l-5">未搜索到相关信息</span></div>' +
                                '</div>';
                        }
                    }
                }
            }
            $("#searchIconType2").val("");//清空所选类别
            $("#lucene_search2").empty();
            $("#searchModal").empty();
            $("#searchOrgModal").empty();
            $("#searchFunModal").empty();
            $("#searchModal").append(content);//填充找人div
            $("#searchOrgModal").append(searchOrg);//填充找机构div
            $("#searchFunModal").append(searchFun);//填充找功能div
        });
    $(document).on("click", '[data-click="searchMore"]',
        function () {

            var totalPage = 0;//总记录数
            var pageSize = 0;//每页显示？条
            var currentPage = 0;//当前第？页
            if (currentPage == 0) {
                currentPage = 1;
            }
            if (pageSize == 0) {
                pageSize = 1;
            }
            var searchval2 = $("#lucene_search2").val();//modal搜索框值
            var searchType = $(this).data('id');
            var searchPerTitle = '';//找人标题div
            var content = '';//找人
            $("#searchResult").empty();//清空外层div
            var result = $.Execute("lucene", "lucene_getSearchList", 5, 1, searchval2, searchType);
            if (result.status == "1") {
                var o = decode(result.msgDetail);
                var arr = new Array(o.pageSize);
                arr = o.results;
                if (searchType == 'fa fa-user') {//找人
                    searchPerTitle += '<div class="hr-stuff-search" id="searchPerTitle">' +
                        '<h4 class="p-l-30 p-t-5 p-b-5 f-s-14 m-t-0 m-b-0" style="background-color: #f5f4f2">人员</h4>' +
                        '<div class="p-l-30 p-r-10" id="searchModal">' +
                        '<div>' +
                        '</div>';
                    $("#searchResult").append(searchPerTitle);
                    for (var i = 0; i < arr.length; i++) {//找人
                        var summarys = arr[i].summary;
                        var val = summarys.split("#");
                        content += '<div class="media media-sm border-bottom-1 p-t-10 p-b-10 m-t-0">' +
                            '<a class="media-left hr-search-person-link-img" href="javascript:;">' +
                            '<img src="../../resources/img/search-01.png" alt="" class="media-object">' +
                            '</a>' +
                            '<div class="media-body">' +
                            '<a class="hr-search-person-link" href="javascript:void(0);"><h4 class="media-heading f-s-18 hr-text-underline m-t-10">' +
                            '<span class="text-danger">' + val[0] + ' &nbsp;</span>' + val[3] + '' +
                            '</h4></a>' +
                            '<div class="hr-f-s-13">' +
                            '' + val[1] + '，42岁，籍贯：河北。出生日期：' + val[2] + '，入党时间：1999年12月05日，进入本行时间：2000年04月23日。' +
                            '</div>' +
                            '</div>' +
                            '</div>';
                    }
                    totalPage = o.totalRecord;
                    if (totalPage % pageSize == 0) {
                        totalPage = totalPage / pageSize;
                    } else {
                        totalPage = parseInt(totalPage / pageSize) + 1;
                    }
                    $("#demo2").paginate({
                        count: totalPage,
                        start: currentPage,
                        display: pageSize,
                        fun: 'searchMore',
                        border: true,
                        text_color: '#888',
                        background_color: '#EEE',
                        text_hover_color: 'red',
                        background_hover_color: '#CFCFCF'
                    });
                }
            }
            $("#searchModal").empty();//清空找人div
            $("#searchModal").append(content);//填充找人div
        })
};


Search = function () {
    "use strict";
    return {
        init: function () {
            handleSearchListInit(),
                handleSearchListAction()
        }
    }
}();

