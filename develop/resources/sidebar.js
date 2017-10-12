/**
 * 
 */
var initSidebar = function() {
    "use strict";
    //var themeHTML = '<div class="theme-panel"><a href="javascript:;" data-click="theme-panel-expand" class="theme-collapse-btn" data-toggle="tooltip" data-placement="left" title="设置主题"><i class="fa fa-th"></i></a><div class="theme-panel-content"><h5 class="m-t-0 panel-title">颜色</h5><ul class="theme-list clearfix"><li class="active"><a href="javascript:;" class="bg-green" data-theme="default" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Default">&nbsp;</a></li><li><a href="javascript:;" class="bg-red" data-theme="red" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Red">&nbsp;</a></li><li><a href="javascript:;" class="bg-blue" data-theme="blue" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Blue">&nbsp;</a></li><li><a href="javascript:;" class="bg-purple" data-theme="purple" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Purple">&nbsp;</a></li><li><a href="javascript:;" class="bg-orange" data-theme="orange" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Orange">&nbsp;</a></li><li><a href="javascript:;" class="bg-black" data-theme="black" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Black">&nbsp;</a></li></ul><div class="divider"></div><div class="row m-t-10"><div class="col-md-5 control-label double-line">Header Styling</div><div class="col-md-7"><select name="header-styling" class="form-control input-sm"><option value="1">default</option><option value="2">inverse</option></select></div></div><div class="row m-t-10"><div class="col-md-5 control-label">Header</div><div class="col-md-7"><select name="header-fixed" class="form-control input-sm"><option value="1">fixed</option><option value="2">default</option></select></div></div><div class="row m-t-10"><div class="col-md-5 control-label double-line">Sidebar Styling</div><div class="col-md-7"><select name="sidebar-styling" class="form-control input-sm"><option value="1">default</option><option value="2">grid</option></select></div></div><div class="row m-t-10"><div class="col-md-5 control-label">Sidebar</div><div class="col-md-7"><select name="sidebar-fixed" class="form-control input-sm"><option value="1">fixed</option><option value="2">default</option></select></div></div><div class="row m-t-10"><div class="col-md-5 control-label double-line">Sidebar Gradient</div><div class="col-md-7"><select name="content-gradient" class="form-control input-sm"><option value="1">disabled</option><option value="2">enabled</option></select></div></div><div class="row m-t-10"><div class="col-md-5 control-label double-line">Content Styling</div><div class="col-md-7"><select name="content-styling" class="form-control input-sm"><option value="1">default</option><option value="2">black</option></select></div></div><div class="row m-t-10"><div class="col-md-12"><a href="#" class="btn btn-inverse btn-block btn-sm" data-click="reset-local-storage"><i class="fa fa-refresh m-r-3"></i> Reset Local Storage</a></div></div></div></div>';
    var themeHTML = '<div class="theme-panel"><a href="javascript:;" data-click="theme-panel-expand" class="theme-collapse-btn" data-toggle="tooltip" data-placement="left" title="设置主题"><i class="fa fa-th"></i></a><div class="theme-panel-content"><h5 class="m-t-0 panel-title p-b-5">颜色</h5><ul class="theme-list clearfix"><li class="active"><a href="javascript:;" class="bg-deongaree" data-theme="default" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Default">&nbsp;</a></li><li><a href="javascript:;" class="bg-purple" data-theme="purple" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Purple">&nbsp;</a></li><li><a href="javascript:;" class="bg-green" data-theme="green" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Red">&nbsp;</a></li><li><a href="javascript:;" class="bg-blue" data-theme="blue" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Blue">&nbsp;</a></li></ul></div></div></div>';
    var myMessageHTML = '<div id="messageHtml" class="right-message-panel"><a href="javascript:;" data-click="right-message-panel-expand" class="right-message-collapse-btn" data-toggle="tooltip" data-placement="left" title="个人消息" style="background-color: #348fe3;"><i class="fa fa-bell hr-position-relative"><span class="label btn-icon btn-xs hr-num-tip" style="background-color: #f99034;" id="messageNum"></span></i></a></div>';
    var myNoticeHTML = '<div id="noticeHtml" class="right-notice-panel"><a href="javascript:;" data-click="right-notice-panel-expand" class="right-notice-collapse-btn" data-toggle="tooltip" data-placement="left" title="企业公告" style="background-color: #727cb7;"><i class="fa fa-bullhorn hr-position-relative"><span class="label btn-icon btn-xs hr-num-tip" style="background-color: #f99034;" id="noticeNum"></span></i></a></div>';
        var myFavoriteHTML = '<div id="favoriteHtml" class="right-favorite-panel hr-right-favorite-panel"><a href="javascript:;" data-click="right-favorite-panel-expand" data-toggle="tooltip" data-placement="left" title="收藏夹" class="right-favorite-collapse-btn" style="background-color: #f8ac59;"><i class="fa fa-star-o"></i></a></div>';
    var myLinkHTML = '<div id="outLinkHtml" class="right-link-panel"><a href="javascript:;" data-toggle="tooltip" data-placement="left" title="外部链接" data-click="right-link-panel-expand" class="right-link-collapse-btn" style="background-color: #ff5a56;"><i class="fa fa-link fa-rotate-90"></i></a></div>';
    $(document.body).append(themeHTML);

    $(document.body).append(myMessageHTML);
        $(document.body).append(myNoticeHTML);
    $(document.body).append(myFavoriteHTML);
    $(document.body).append(myLinkHTML);
},
handleThemePageStructureControl = function() {
    if ($.cookie && $.cookie("theme")) {
        0 !== $(".theme-list").length && ($(".theme-list [data-theme]").closest("li").removeClass("active"), $('.theme-list [data-theme="' + $.cookie("theme") + '"]').closest("li").addClass("active"));
        var e = "../../resources/themes/" +$.cookie("theme")+"/css/"+ $.cookie("theme") + ".css";
        $("#theme").attr("href", e)
    }
    $.cookie && $.cookie("sidebar-styling") && 0 !== $(".sidebar").length && "grid" == $.cookie("sidebar-styling") && ($(".sidebar").addClass("sidebar-grid"), $('[name=sidebar-styling] option[value="2"]').prop("selected", !0)),
    $.cookie && $.cookie("header-styling") && 0 !== $(".header").length && "navbar-inverse" == $.cookie("header-styling") && ($(".header").addClass("navbar-inverse"), $('[name=header-styling] option[value="2"]').prop("selected", !0)),
    $.cookie && $.cookie("content-gradient") && 0 !== $("#page-container").length && "enabled" == $.cookie("content-gradient") && ($("#page-container").addClass("gradient-enabled"), $('[name=content-gradient] option[value="2"]').prop("selected", !0)),
    $.cookie && $.cookie("content-styling") && 0 !== $("body").length && "black" == $.cookie("content-styling") && ($("body").addClass("flat-black"), $('[name=content-styling] option[value="2"]').prop("selected", !0)),
    $(".theme-list [data-theme]").click(function() {
        var e = "../../resources/themes/"+$(this).attr("data-theme")+"/css/" + $(this).attr("data-theme") + ".css";
        $("#theme").attr("href", e),
        $(".theme-list [data-theme]").not(this).closest("li").removeClass("active"),
        $(this).closest("li").addClass("active"),
        $.cookie("theme", $(this).attr("data-theme"))
    }),
    $(".theme-panel [name=header-styling]").on("change",
    function() {
        var e = 1 == $(this).val() ? "navbar-default": "navbar-inverse",
        a = 1 == $(this).val() ? "navbar-inverse": "navbar-default";
        $("#header").removeClass(a).addClass(e),
        $.cookie("header-styling", e)
    }),
    $(".theme-panel [name=sidebar-styling]").on("change",
    function() {
        2 == $(this).val() ? ($("#sidebar").addClass("sidebar-grid"), $.cookie("sidebar-styling", "grid")) : ($("#sidebar").removeClass("sidebar-grid"), $.cookie("sidebar-styling", "default"))
    }),
    $(".theme-panel [name=content-gradient]").on("change",
    function() {
        2 == $(this).val() ? ($("#page-container").addClass("gradient-enabled"), $.cookie("content-gradient", "enabled")) : ($("#page-container").removeClass("gradient-enabled"), $.cookie("content-gradient", "disabled"))
    }),
    $(document).on("change", ".theme-panel [name=content-styling]",
    function() {
        2 == $(this).val() ? ($("body").addClass("flat-black"), $.cookie("content-styling", "black")) : ($("body").removeClass("flat-black"), $.cookie("content-styling", "default"))
    }),
    $(document).on("change", ".theme-panel [name=sidebar-fixed]",
    function() {
        1 == $(this).val() ? (2 == $(".theme-panel [name=header-fixed]").val() && (alert("Default Header with Fixed Sidebar option is not supported. Proceed with Fixed Header with Fixed Sidebar."), $('.theme-panel [name=header-fixed] option[value="1"]').prop("selected", !0), $("#header").addClass("navbar-fixed-top"), $("#page-container").addClass("page-header-fixed")), $("#page-container").addClass("page-sidebar-fixed"), $("#page-container").hasClass("page-sidebar-minified") || generateSlimScroll($('.sidebar [data-scrollbar="true"]'))) : ($("#page-container").removeClass("page-sidebar-fixed"), 0 !== $(".sidebar .slimScrollDiv").length && ($(window).width() <= 979 ? $(".sidebar").each(function() {
            if (!$("#page-container").hasClass("page-with-two-sidebar") || !$(this).hasClass("sidebar-right")) {
                $(this).find(".slimScrollBar").remove(),
                $(this).find(".slimScrollRail").remove(),
                $(this).find('[data-scrollbar="true"]').removeAttr("style");
                var e = $(this).find('[data-scrollbar="true"]').parent(),
                a = $(e).html();
                $(e).replaceWith(a)
            }
        }) : $(window).width() > 979 && ($('.sidebar [data-scrollbar="true"]').slimScroll({
            destroy: !0
        }), $('.sidebar [data-scrollbar="true"]').removeAttr("style"))), 0 === $("#page-container .sidebar-bg").length && $("#page-container").append('<div class="sidebar-bg"></div>'))
    }),
    $(document).on("change", ".theme-panel [name=header-fixed]",
    function() {
        1 == $(this).val() ? ($("#header").addClass("navbar-fixed-top"), $("#page-container").addClass("page-header-fixed"), $.cookie("header-fixed", !0)) : (1 == $(".theme-panel [name=sidebar-fixed]").val() && (alert("Default Header with Fixed Sidebar option is not supported. Proceed with Default Header with Default Sidebar."), $('.theme-panel [name=sidebar-fixed] option[value="2"]').prop("selected", !0), $("#page-container").removeClass("page-sidebar-fixed"), 0 === $("#page-container .sidebar-bg").length && $("#page-container").append('<div class="sidebar-bg"></div>')), $("#header").removeClass("navbar-fixed-top"), $("#page-container").removeClass("page-header-fixed"), $.cookie("header-fixed", !1))
    })
},
handleThemePanelExpand = function() {
    $(document).on("click", '[data-click="theme-panel-expand"]',
    function() {
        var e = ".theme-panel",
        a = "active";
        $(e).hasClass(a) ? $(e).removeClass(a) : $(e).addClass(a)
    })
},
refreshMessagePanel = function() {
    var result = $.Execute("portal", "getUserMessage", 10, 1);
    var title = '';
    var content = '';
    if (result.status == "1") {
        var num = 0;//记录未读信息数量
        var o = decode(result.msgDetail);
        title+='<h4 id="messageTitle"><span class="hr-txt-green-dark f-w-700">个人消息</span><a href="javascript:void(0)" data-click="updateMessage" data-id="uAll" class="pull-right f-s-12 hr-black-lighter hr-block m-t-5 hr-readed-btn">全部标记为已读</a></h4><div id="messageTitleDiv" class="hr-right-favorite-panel-divider">&nbsp;</div>';
        if (o !== null && o.length > 0) {
            content+= '<div id="messageContent" class="hr-message-height">';
            for (var i = 0; i < o.length; i++) {
               if(o[i].readFlag == "00010" ){
                   num++;
                   content+='<div class="row m-l-0 m-r-0 p-t-5 p-b-5 hr-bg-hover-f5f5f5">' +
                   '<div class="col-xs-8"><i class="fa fa-square m-r-5 hr-txt-green-dark" style="color:#d8c80b;"></i><a href="#" class="hr-black-lighter" data-click="updateMessage" data-id="'+o[i].id+'">'+o[i].content+'</a></div>' +
                   '<div class="col-xs-4 text-right">'+o[i].arrivalTime+'</div>' +
                   //'<div class="col-xs-3 text-right"><a href="javascript:;" data-click="updateMessage" data-id="'+o[i].id+'" class="hr-txt-green-dark">我知道了</a></div>' +
                   '</i></div>';
               }else{
                   content+='<div class="row m-l-0 m-r-0 p-t-5 p-b-5 hr-bg-hover-f5f5f5 hr-grey-lighter">' +
                   '<div class="col-xs-8" ><i class="fa fa-check-square-o m-r-10" style="color:#b6c2c9;"></i><a href="#" class="hr-grey-lighter" data-click="updateMessage" data-id="'+o[i].id+'">'+o[i].content+'</a></div>' +
                   '<div class="col-xs-4 text-right">'+o[i].arrivalTime+'</div>' +
                   //'<div class="col-xs-3 text-right"><a href="javascript:;" data-click="updateMessage" data-id="'+o[i].id+'" class="hr-grey-lighter">&nbsp;&nbsp;已&nbsp;&nbsp;读&nbsp;&nbsp;&nbsp;</a></div>' +
                   '</div>';
               }
            }
            content+= '</div><div class="row text-right p-t-20 p-r-5" id="messageAll"><a href="#" class="hr-txt-green-dark2">查看全部<i class="fa fa-angle-right f-s-14 m-l-5"></i></a></div>';
        }
        if(num != 0){
            $("#messageNum").html(num);
        }else{
            $("#messageNum").html("");
        }
        $("#messageHtml").append(title).append(content);
    } else {
        alert(result.msgInfo);
    }
},
handleUpdateMessagePanelAction=function(){
    $(document).on("click", '[data-click="updateMessage"]',
    function() {
        var id = $(this).data('id');
        var result = $.Execute("portal", "updateMessageStatus",id,'00011');
        if(result.status == "1"){
            $("#messageContent").remove();
            $("#messageTitle").remove();
            $("#messageTitleDiv").remove();
            $("#messageAll").remove();
            refreshMessagePanel();
        }
    })
},
handleMessagePanelExpand = function() {
    $(document).on("click", '[data-click="right-message-panel-expand"]',
        function() {
            var e = ".right-message-panel",
                a = "active";
            $(e).hasClass(a) ? $(e).removeClass(a) : $(e).addClass(a)
        })
},
handleNoticePanelExpand = function() {
    $(document).on("click", '[data-click="right-notice-panel-expand"]',
    function() {
        var e = ".right-notice-panel",
        a = "active";
        $(e).hasClass(a) ? $(e).removeClass(a) : $(e).addClass(a)
    })
},
refreshNoticePanel = function() {
    var result = $.Execute("portal", "getEnterpriseNotice", 10, 1);
    var title = '';
    var content = '';
    if (result.status == "1") {
        var o = decode(result.msgDetail);
        title+='<h4 id="noticeTitle"><span class="hr-txt-green-dark f-w-700">企业公告</span><span class="pull-right f-s-12 hr-black-lighter hr-block m-t-5">共'+ o.length+'条公告</span></h4><div id="noticeTitleDiv" class="hr-right-favorite-panel-divider">&nbsp;</div>';
        if (o !== null && o.length > 0) {
            content+= '<div id="noticeContent" class="hr-notice-height">';
            for (var i = 0; i < o.length; i++) {
                content+='<div class="row p-t-5 p-b-5 m-r-0 m-l-0 hr-bg-hover-f5f5f5">' +
                    '<div class="col-xs-8" ><i class="fa fa-square m-r-5 hr-txt-green-dark"></i><a href="#" class="hr-black-lighter">'+o[i].title+'</a></div>' +
                    '<div class="col-xs-4 text-right">'+o[i].publishDate+'</div>' +
                    '</div>';
            }
            //content+= '<div class="row text-right p-t-20 p-r-5"><a href="#" class="hr-txt-green-dark">查看全部<i class="fa fa-angle-right f-s-14 m-l-5"></i></a></div></div>';
        }
        content+= '</div><div class="row text-right p-t-20 p-r-5"><a href="#" class="hr-txt-green-dark">查看全部<i class="fa fa-angle-right f-s-14 m-l-5"></i></a></div>';
        $("#noticeNum").html(o.length);
        $("#noticeHtml").append(title).append(content);
    } else {
        alert(result.msgInfo);
    }
},

handleFavoritePanelExpand = function() {
    $(document).on("click", '[data-click="right-favorite-panel-expand"]',
    function() {
        var e = ".right-favorite-panel",
        a = "active";
        $(e).hasClass(a) ? $(e).removeClass(a) : $(e).addClass(a)
    })
},
refreshFavoritePanel = function(){
    var result = $.Execute("portal", "getUserFavorite", 10, 1);
    var title = '';
    var content = '';
    if (result.status == "1") {
        var o = decode(result.msgDetail);
        title+='<h4 id="favoriteTitle"><span class="hr-txt-green-dark f-w-700">收藏夹</span><span class="pull-right f-s-12 hr-black-lighter hr-block m-t-5">共'+ o.length+'个收藏</span></h4><div id="favoriteTitleDiv" class="hr-right-favorite-panel-divider">&nbsp;</div>';
        if (o !== null && o.length > 0) {
            content+= '<div id="favoriteContent" class="hr-favorite-height">';
            for (var i = 0; i < o.length; i++) {
                content+='<div class="row m-l-0 m-r-0 p-t-5 p-b-5 hr-bg-hover-f5f5f5">' +
                            '<div class="col-xs-9" ><i class="fa fa-file-word-o f-s-16 m-r-5 hr-txt-green-dark"></i><a href="#" class="hr-black-lighter hr-txt-hover-orange">'+o[i].fName+'...</a></div>' +
                            '<div class="col-xs-3 text-right" ><a href="javascript:;" data-click="updateFavoriteStatus" data-id="'+o[i].id+'" class="hr-txt-green-dark hr-text-underline">取消收藏</a></div>' +
                        '</div>';
            }
            content+= '</div><div class="row text-right p-t-20 p-r-5" id="favoriteAll"><a href="#" class="hr-txt-green-dark">查看全部<i class="fa fa-angle-right f-s-14 m-l-5"></i></a></div>';

        }
    }
    $("#favoriteHtml").append(title).append(content);
},
handleFavoritePanelAction = function(){
    $(document).on("click", '[data-click="updateFavoriteStatus"]',
        function() {
            var id = $(this).data('id');
            var result = $.Execute("portal", "updateFavorite",id);
            if(result.status == "1"){
                $("#favoriteTitle").remove();
                $("#favoriteContent").remove();
                $("#favoriteTitleDiv").remove();
                $("#favoriteAll").remove();
                refreshFavoritePanel();
            }
        })
},
handleLinkPanelExpand = function() {
    $(document).on("click", '[data-click="right-link-panel-expand"]',
    function() {
        var e = ".right-link-panel",
        a = "active";
        $(e).hasClass(a) ? $(e).removeClass(a) : $(e).addClass(a)
    })
},
refreshLinkPanel = function(){
    var result = $.Execute("portal", "getMyLink", 10, 1);
    var title = '';
    var content = '';
    if (result.status == "1") {
        var o = decode(result.msgDetail);
        title+='<h4 id="favoriteTitle"><span class="hr-txt-green-dark f-w-700">外部链接</span><span class="pull-right f-s-12 hr-black-lighter hr-block m-t-5">共'+ o.length+'个</span></h4><div class="hr-right-favorite-panel-divider">&nbsp;</div>';
        if (o !== null && o.length > 0) {
            content+='<div class="row text-center hr-outlink-height">';
            for (var i = 0; i < o.length; i++) {
                content+=  '<div class="col-xs-4">' +
                                '<div class="p-t-5 p-b-5"><a href="#" class="hr-black-lighter"><img  src="../../resources/img/'+o[i].lImage+'"><br/><div class="p-t-5">'+o[i].lName+'</div></a></div>' +
                                //'<div class="p-t-5 p-b-5"><a href="#" class="hr-black-lighter"><img  src="'+o[i+1].lImage+'"><br/><div class="p-t-5">'+o[i+1].lName+'</div></a></div>' +
                            '</div>';
                            /*'<div class="col-xs-4">' +
                                '<div class="p-t-5 p-b-5"><a href="#" class="hr-black-lighter"><img  src="'+o[2].lImage+'"><br/><div class="p-t-5">'+o[2].lName+'</div></a></div>' +
                                '<div class="p-t-5 p-b-5"><a href="#" class="hr-black-lighter"><img  src="'+o[3].lImage+'"><br/><div class="p-t-5">'+o[3].lName+'</div></a></div>' +
                            '</div>' +
                            '<div class="col-xs-4">' +
                            '<div class="p-t-5 p-b-5"><a href="#" class="hr-black-lighter"><img  src="'+o[4].lImage+'"><br/><div class="p-t-5">'+o[4].lName+'</div></a></div>' +
                            '<div class="p-t-5 p-b-5"><a href="#" class="hr-black-lighter"><img  src="'+o[5].lImage+'"><br/><div class="p-t-5">'+o[5].lName+'</div></a></div>' +
                            '</div>' +*/
            }
            content += '</div>';
        }
    }

    $("#outLinkHtml").append(title).append(content);
},


Sidebar = function() {
    "use strict";
    return {
        init: function() {
            var sidebar = document.querySelector("div.theme-panel");
            if (sidebar != null) {
                return;
            }
            initSidebar();
            this.initSidebarPanel();
        },
        initSidebarPanel: function() {
            handleThemePageStructureControl(),
            handleThemePanelExpand(),
            handleNoticePanelExpand(),
            refreshNoticePanel(),
            handleMessagePanelExpand(),
            refreshMessagePanel(),
            handleUpdateMessagePanelAction(),
            handleFavoritePanelExpand(),
            refreshFavoritePanel(),
            handleFavoritePanelAction(),
            handleLinkPanelExpand(),
            refreshLinkPanel(),
            handleSearchListAction()
        }
    }
}();


