var initHeader = function () {
        $(document).on("hover", "[data-click=sys-exit]",
            function () {
                $(this).tooltip({
                    title: "退出登录",
                    placement: "bottom",
                    trigger: "hover",
                    container: "body"
                });
                $(this).tooltip("show")
            });
        $(document).on("click", "[data-click=sys-exit]",
            function (e) {
                e.preventDefault();
                $(this).tooltip("destroy");
                var result = $.Execute("logout", "logout");
                if (result.status == "1") {
                    top.location.href = "login.jsp";
                } else {
                    alert(result.msgInfo)
                }
            });
        $(document).on("hover", "[data-click=sys-modifypassword]",
            function () {
                $(this).tooltip({
                    title: "修改密码",
                    placement: "bottom",
                    trigger: "hover",
                    container: "body"
                });
                $(this).tooltip("show")
            });
        $(document).on("click", "[data-click=sys-modifypassword]",
            function (e) {
                console.log("-----");
                e.preventDefault();
                loadCSS("popcss", "../../plugins/RD/popwindow/popwindow.css");
                loadJS("popjs", "../../plugins/RD/popwindow/popwindow.js");
                loadJS("passwordjs", "../../plugins/RD/modifypassword.js");
                loadJS("parsleyjs", "../../plugins/third/parsley/parsely.js");
                PopWindow.init("0,11,1,width-lg,,footer,hr-modify-password", modifyPassword);
                var title = "修改密码";
                $("#hr-modify-password .modal-title").html(title);
                var popWin = $(".sys-pop-win-m");
                var i = '<form class="form-horizontal" id="formModify" data-parsley-validate="true"><div class="form-group"><label class="control-label col-md-3">旧密码：</label><div class="col-md-9"><input type="password" name="password-visible" id="oldpassword" placeholder="请输入旧密码" class="form-control m-b-5" data-parsley-required-message="旧密码不能为空" required/><div id="passwordStrengthDiv2" class="is0 m-t-5"></div></div></div>' +
                    '<div class="form-group"><label class="control-label col-md-3">新密码：</label><div class="col-md-9"><input type="password" name="password" id="newpassword1" placeholder="请输入新密码" class="form-control m-b-5" data-parsley-required-message="新密码不能为空" required/><div id="passwordStrengthDiv" class="is0 m-t-5"></div></div></div>' +
                    '<div class="form-group"><label class="control-label col-md-3">确认新密码：</label><div class="col-md-9"><input type="password" name="password" id="newpassword2" placeholder="请确认新密码" class="form-control m-b-5" data-parsley-equalto="#newpassword1" data-parsley-required-message="新密码不能为空" required/><div id="passwordStrengthDiv" class="is0 m-t-5"></div></div></div>' +
                    '</form>';
                popWin.append(i);
                FormPlugins.init();
                $("#formModify").parsley();
            });
        $(document).on("click", "[data-click=hr-staff-view-info]",
            function (e) {
                e.preventDefault();
                loadCSS("popcss", "../../plugins/RD/popwindow/popwindow.css");
                loadJS("popjs", "../../plugins/RD/popwindow/popwindow.js");
                PopWindow.init("0,12,0,width-70percent,,no-footer,hr-top-staff-info");
                var title = "信息浏览";
                $("#hr-top-staff-info .modal-title").html(title);
                var popWin = $(".sys-pop-win-m");
                var i = '<div class="clearfix hr-bg-shallow-blue hr-info-action"><div class="pull-left"><div class="btn-group m-r-10"><a href="javascript:;" class="btn btn-default">查看详细信息</a></div></div><div class="pull-right"><button type="button" class="btn btn-default m-r-10">打印</button><button type="button" class="btn btn-default">导出</button></div></div><div class="text-right hr-f-s-15"><i class="iconfont hr-f-s-26 m-r-5 hr-txt-green-ac">&#xe64f;</i><a href="#" class="hr-inline-block hr-txt-green-ac">完善信息</a></div><div class="media hr-f-s-15 hr-info-media m-t-0"><a class="media-left m-r-10" href="javascript:;"><img src="../../resources/img/focus-person-01.jpg" alt="" class="media-object hr-line-height-16"></a><div class="media-body border-bottom-1 p-b-0 hr-line-height-16"><h4 class="media-heading m-b-0 m-t-15"><span class="f-s-18">张晓晓</span><span class="m-l-20">女</span><a class="btn btn-link hr-txt-green-ac pull-right hr-rl-no-padding"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></h4><div><span>总行人力资源部</span><span class="m-l-20">总经理助理</span><span class="m-l-40">入职时间：</span><span>2014年8月</span></div><div><i class="fa fa-phone hr-txt-green-ac"></i><span class="m-l-5">18301101234</span><i class="fa fa-envelope-o m-l-40 hr-txt-green-ac"></i><span class="m-l-5">zhangxiaoxiao@citic.com</span></div></div></div><div class="hr-line-height-16  hr-f-s-15 m-t-20 m-b-30"><div><span>汉族</span><span>1990年1月2日出生</span><span class="m-l-20">未婚</span><span>党员</span><span class="m-l-20">最高学历：</span><span>本科</span><a class="btn btn-link hr-txt-green-ac pull-right hr-rl-no-padding"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></div><div><span>国籍：</span><span>中国</span></div><div><span>籍贯：</span><span>河北省</span><span>石家庄市</span></div><div><span>证件类型：</span><span>身份证</span> <span class="m-l-20">证件号码：</span><span>110234198509046387</span></div></div><div class="hr-work-experience hr-f-s-15"><div class="hr-position-relative"><label class="label label-default m-r-20 f-w-400 f-s-14 hr-position-absolute hr-work-label">工作经历</label><a class="hr-txt-green-ac hr-position-absolute hr-add-action"><i class="fa fa-plus-square-o"></i><span class="m-l-5">添加</span></a></div><table class="table m-t-30"><tbody><tr><td>2011年3月至2012年8月</td><td>中信银行南京分行人力资源管理部</td><td>人事专员</td><td class="text-right p-r-0"><a type="button" class="btn btn-link hr-txt-green-ac">查看</a><a type="button" class="btn btn-link hr-txt-green-ac p-r-0"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></td></tr><tr><td>2012年8月至2013年12月</td><td>中信银行南京分行人力资源管理部</td><td>总经理助理</td><td class="text-right p-r-0"><a type="button" class="btn btn-link hr-txt-green-ac">查看</a><a type="button" class="btn btn-link hr-txt-green-ac p-r-0"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></td></tr><tr><td>2014年1月至今</td><td>中信银行总行人力资源管理部</td><td>总经理助理</td><td class="text-right p-r-0"><a type="button" class="btn btn-link hr-txt-green-ac">查看</a><a type="button" class="btn btn-link hr-txt-green-ac p-r-0"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></td></tr></tbody></table></div>';
                popWin.append(i);
            });

        $('.hr-user-domain').on('show.bs.dropdown', function () {
            $("[data-click=hr-manager-view-info]").click(function (e) {
                //function(e) {
                e.preventDefault();
                loadCSS("popcss", "../../plugins/RD/popwindow/popwindow.css");
                loadJS("popjs", "../../plugins/RD/popwindow/popwindow.js");
                PopWindow.init("0,12,0,width-70percent,,no-footer,hr-top-manager-info");
                var title = "信息浏览";
                $("#hr-top-manager-info .modal-title").html(title);
                var popWin = $(".sys-pop-win-m");
                var i = '<div class="clearfix hr-bg-shallow-blue hr-info-action"><div class="pull-left"><div class="btn-group m-r-10"><a href="javascript:;" class="btn btn-default">查看详细信息</a></div></div><div class="pull-right"><button type="button" class="btn btn-default m-r-10">打印</button><button type="button" class="btn btn-default">导出</button></div></div><div class="text-right hr-f-s-15"><i class="iconfont hr-f-s-26 m-r-5 hr-txt-green-ac">&#xe64f;</i><a href="#" class="hr-inline-block hr-txt-green-ac">完善信息</a></div><div class="media hr-f-s-15 hr-info-media m-t-0"><a class="media-left m-r-10" href="javascript:;"><img src="../../resources/img/focus-person-06.jpg" alt="" class="media-object hr-line-height-16"></a><div class="media-body border-bottom-1 p-b-0 hr-line-height-16"><h4 class="media-heading m-b-0 m-t-15"><span class="f-s-18">张晓晓</span><span class="m-l-20">男</span><a class="btn btn-link hr-txt-green-ac pull-right hr-rl-no-padding"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></h4><div><span>总行人力资源部</span><span class="m-l-20">总经理助理</span><span class="m-l-40">入职时间：</span><span>2014年8月</span></div><div><i class="fa fa-phone hr-txt-green-ac"></i><span class="m-l-5">18301101234</span><i class="fa fa-envelope-o m-l-40 hr-txt-green-ac"></i><span class="m-l-5">zhangxiaoxiao@citic.com</span></div></div></div><div class="hr-line-height-16  hr-f-s-15 m-t-20 m-b-30"><div><span>汉族</span><span>1990年1月2日出生</span><span class="m-l-20">未婚</span><span>党员</span><span class="m-l-20">最高学历：</span><span>本科</span><a class="btn btn-link hr-txt-green-ac pull-right hr-rl-no-padding"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></div><div><span>国籍：</span><span>中国</span></div><div><span>籍贯：</span><span>河北省</span><span>石家庄市</span></div><div><span>证件类型：</span><span>身份证</span> <span class="m-l-20">证件号码：</span><span>110234198509046387</span></div></div><div class="hr-work-experience hr-f-s-15"><div class="hr-position-relative"><label class="label label-default m-r-20 f-w-400 f-s-14 hr-position-absolute hr-work-label">工作经历</label><a class="hr-txt-green-ac hr-position-absolute hr-add-action"><i class="fa fa-plus-square-o"></i><span class="m-l-5">添加</span></a></div><table class="table m-t-30"><tbody><tr><td>2011年3月至2012年8月</td><td>中信银行南京分行人力资源管理部</td><td>人事专员</td><td class="text-right p-r-0"><a type="button" class="btn btn-link hr-txt-green-ac">查看</a><a type="button" class="btn btn-link hr-txt-green-ac p-r-0"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></td></tr><tr><td>2012年8月至2013年12月</td><td>中信银行南京分行人力资源管理部</td><td>总经理助理</td><td class="text-right p-r-0"><a type="button" class="btn btn-link hr-txt-green-ac">查看</a><a type="button" class="btn btn-link hr-txt-green-ac p-r-0"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></td></tr><tr><td>2014年1月至今</td><td>中信银行总行人力资源管理部</td><td>总经理助理</td><td class="text-right p-r-0"><a type="button" class="btn btn-link hr-txt-green-ac">查看</a><a type="button" class="btn btn-link hr-txt-green-ac p-r-0"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></td></tr></tbody></table></div>';
                popWin.append(i);
                //}
            });
            $("[data-click=hr-leader-view-info]").click(function (e) {
                //function(e) {
                e.preventDefault();
                loadCSS("popcss", "../../plugins/RD/popwindow/popwindow.css");
                loadJS("popjs", "../../plugins/RD/popwindow/popwindow.js");
                PopWindow.init("0,12,0,width-70percent,,no-footer,hr-top-leader-info");
                var title = "信息浏览";
                $("#hr-top-leader-info .modal-title").html(title);
                var popWin = $(".sys-pop-win-m");
                var i = '<div class="clearfix hr-bg-shallow-blue hr-info-action"><div class="pull-left"><div class="btn-group m-r-10"><a href="javascript:;" class="btn btn-default">查看详细信息</a></div></div><div class="pull-right"><button type="button" class="btn btn-default m-r-10">打印</button><button type="button" class="btn btn-default">导出</button></div></div><div class="text-right hr-f-s-15"><i class="iconfont hr-f-s-26 m-r-5 hr-txt-green-ac">&#xe64f;</i><a href="#" class="hr-inline-block hr-txt-green-ac">完善信息</a></div><div class="media hr-f-s-15 hr-info-media m-t-0"><a class="media-left m-r-10" href="javascript:;"><img src="../../resources/img/focus-person-06.jpg" alt="" class="media-object hr-line-height-16"></a><div class="media-body border-bottom-1 p-b-0 hr-line-height-16"><h4 class="media-heading m-b-0 m-t-15"><span class="f-s-18">张晓晓</span><span class="m-l-20">男</span><a class="btn btn-link hr-txt-green-ac pull-right hr-rl-no-padding"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></h4><div><span>总行人力资源部</span><span class="m-l-20">总经理助理</span><span class="m-l-40">入职时间：</span><span>2014年8月</span></div><div><i class="fa fa-phone hr-txt-green-ac"></i><span class="m-l-5">18301101234</span><i class="fa fa-envelope-o m-l-40 hr-txt-green-ac"></i><span class="m-l-5">zhangxiaoxiao@citic.com</span></div></div></div><div class="hr-line-height-16  hr-f-s-15 m-t-20 m-b-30"><div><span>汉族</span><span>1990年1月2日出生</span><span class="m-l-20">未婚</span><span>党员</span><span class="m-l-20">最高学历：</span><span>本科</span><a class="btn btn-link hr-txt-green-ac pull-right hr-rl-no-padding"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></div><div><span>国籍：</span><span>中国</span></div><div><span>籍贯：</span><span>河北省</span><span>石家庄市</span></div><div><span>证件类型：</span><span>身份证</span> <span class="m-l-20">证件号码：</span><span>110234198509046387</span></div></div><div class="hr-work-experience hr-f-s-15"><div class="hr-position-relative"><label class="label label-default m-r-20 f-w-400 f-s-14 hr-position-absolute hr-work-label">工作经历</label><a class="hr-txt-green-ac hr-position-absolute hr-add-action"><i class="fa fa-plus-square-o"></i><span class="m-l-5">添加</span></a></div><table class="table m-t-30"><tbody><tr><td>2011年3月至2012年8月</td><td>中信银行南京分行人力资源管理部</td><td>人事专员</td><td class="text-right p-r-0"><a type="button" class="btn btn-link hr-txt-green-ac">查看</a><a type="button" class="btn btn-link hr-txt-green-ac p-r-0"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></td></tr><tr><td>2012年8月至2013年12月</td><td>中信银行南京分行人力资源管理部</td><td>总经理助理</td><td class="text-right p-r-0"><a type="button" class="btn btn-link hr-txt-green-ac">查看</a><a type="button" class="btn btn-link hr-txt-green-ac p-r-0"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></td></tr><tr><td>2014年1月至今</td><td>中信银行总行人力资源管理部</td><td>总经理助理</td><td class="text-right p-r-0"><a type="button" class="btn btn-link hr-txt-green-ac">查看</a><a type="button" class="btn btn-link hr-txt-green-ac p-r-0"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></td></tr></tbody></table></div>';
                popWin.append(i);
                //}
            })
        });
        // hr经理登录页面（manager）——部门员工
        $(document).on("click", "[data-click=hr-department-staff-link]",
            function (e) {
                e.preventDefault();
                loadCSS("popcss", "../../plugins/RD/popwindow/popwindow.css");
                loadJS("popjs", "../../plugins/RD/popwindow/popwindow.js");
                PopWindow.init("0,12,0,width-70percent,,no-footer,hr-department-staff-info");
                var title = "信息浏览";
                $("#hr-department-staff-info .modal-title").html(title);

                var popWin = $(".sys-pop-win-m");
                // var i = '<div class="clearfix hr-bg-shallow-blue hr-info-action"><div class="pull-left"><div class="btn-group m-r-10"><a href="javascript:;" class="btn btn-default">详细信息</a></div><div class="btn-group m-r-10"><a href="javascript:;" data-toggle="dropdown" class="btn btn-default dropdown-toggle">生成报表<span class="caret m-l-5"></span></a><ul class="dropdown-menu f-s-14"><li><a href="javascript:;">人员登记表</a></li><li><a href="javascript:;">干部任免表</a></li><li><a href="javascript:;">收入证明</a></li></ul></div></div><div class="pull-right"><button type="button" class="btn btn-default m-r-10">导出</button><button type="button" class="btn btn-default">打印</button></div></div><div class="text-right hr-f-s-15"><i class="iconfont hr-f-s-26 m-r-5 hr-txt-green-ac">&#xe64f;</i><a href="#" class="hr-inline-block hr-txt-green-ac">完善信息</a></div><div class="media hr-f-s-15 hr-info-media m-t-0"><a class="media-left m-r-10" href="javascript:;"><img src="../../resources/img/focus-person-01.jpg" alt="" class="media-object hr-line-height-16"></a><div class="media-body border-bottom-1 p-b-0 hr-line-height-16"><h4 class="media-heading m-b-0 m-t-15"><span class="f-s-18">张晓晓</span><span class="m-l-20">女</span><a class="btn btn-link hr-txt-green-ac pull-right hr-rl-no-padding"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></h4><div><span>总行人力资源部</span><span class="m-l-20">总经理助理</span><span class="m-l-40">入职时间：</span><span>2014年8月</span></div><div><i class="fa fa-phone hr-txt-green-ac"></i><span class="m-l-5">18301101234</span><i class="fa fa-envelope-o m-l-40 hr-txt-green-ac"></i><span class="m-l-5">zhangxiaoxiao@citic.com</span></div></div></div><div class="hr-line-height-16  hr-f-s-15 m-t-20 m-b-30"><div><span>汉族</span><span>1990年1月2日出生</span><span class="m-l-20">未婚</span><span>党员</span><span class="m-l-20">最高学历：</span><span>本科</span><a class="btn btn-link hr-txt-green-ac pull-right hr-rl-no-padding"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></div><div><span>国籍：</span><span>中国</span></div><div><span>籍贯：</span><span>河北省</span><span>石家庄市</span></div><div><span>证件类型：</span><span>身份证</span> <span class="m-l-20">证件号码：</span><span>110234198509046387</span></div></div><div class="hr-work-experience hr-f-s-15"><div class="hr-position-relative"><label class="label label-default m-r-20 f-w-400 f-s-14 hr-position-absolute hr-work-label">工作经历</label><a class="hr-txt-green-ac hr-position-absolute hr-add-action"><i class="fa fa-plus-square-o"></i><span class="m-l-5">添加</span></a></div><table class="table m-t-30"><tbody><tr><td>2011年3月至2012年8月</td><td>中信银行南京分行人力资源管理部</td><td>人事专员</td><td class="text-right p-r-0"><a type="button" class="btn btn-link hr-txt-green-ac">查看</a><a type="button" class="btn btn-link hr-txt-green-ac p-r-0"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></td></tr><tr><td>2012年8月至2013年12月</td><td>中信银行南京分行人力资源管理部</td><td>总经理助理</td><td class="text-right p-r-0"><a type="button" class="btn btn-link hr-txt-green-ac">查看</a><a type="button" class="btn btn-link hr-txt-green-ac p-r-0"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></td></tr><tr><td>2014年1月至今</td><td>中信银行总行人力资源管理部</td><td>总经理助理</td><td class="text-right p-r-0"><a type="button" class="btn btn-link hr-txt-green-ac">查看</a><a type="button" class="btn btn-link hr-txt-green-ac p-r-0"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></td></tr></tbody></table></div>';
                var i = '<div class="clearfix hr-bg-shallow-blue hr-info-action"><div class="pull-left"><div class="btn-group m-r-10"><a href="javascript:;" class="btn-common btn">详细信息</a></div><div class="btn-group m-r-10"><a href="javascript:;" data-toggle="dropdown" class="btn-common btn dropdown-toggle">修改信息</div><div class="btn-group m-r-10"><a href="javascript:;" class="btn-common btn dropdown-toggle focusPerson"><span>+</span>关注<ul class="dropdown-menu f-s-14"><li><a href="javascript:;ipt:;"></a></li></ul></div></div><div class="pull-right"><button type="button" class="btn btn-default m-r-10 print">导出</button><button type="button" class="btn btn-default print">打印</button></div></div><ul class="text-left hr-f-s-15 info"><li><span>基本信息</span><div class="line"></div></li></ul><div class="media hr-f-s-15 hr-info-media m-t-0">'+
                '<a class="media-left m-r-10" href="javascript:;"><img src="../../resources/img/focus-person-01.jpg" alt="" class="media-object hr-line-height-16"><h4 class="media-heading m-b-0 m-t-15"><span class="f-s-18 m-t-20">张晓晓</span><div class="m-t-10">女</div></h4></a>'+
                '<div class="media-body border-bottom-1 p-b-0 hr-line-height-16"><div><span>总行人力资源部</span><span class="m-l-20">总经理助理</span><div class="hr-line-height-16 m-t-20"><div class="baseInfo"><span>汉族</span><span>1990年1月2日出生</span><span class="m-l-20">未婚</span><span>党员</span><span>本科</span></div><div><span>河北省</span><span class="m-l-10">石家庄市</span></div><div><span>身份证号：</span><span>110234198509046387</span></div></div></div><div><i class="fa fa-phone hr-txt-green-ac"></i><span class="m-l-10">18301101234</span><i class="fa fa-envelope-o m-l-40 hr-txt-green-ac"></i><span class="m-l-10">zhangxiaoxiao@citic.com</span></div></div></div><div class="hr-work-experience hr-f-s-15"><ul class="text-left hr-f-s-15 info"><li><span>工作经历</span><div class="line"></li></ul></div><table class="table m-t-30"><tbody><tr><td>2011年3月至2012年8月</td><td>中信银行南京分行人力资源管理部</td><td>人事专员</td><td class="text-right p-r-0"></td></tr><tr><td>2012年8月至2013年12月</td><td>中信银行南京分行人力资源管理部</td><td>总经理助理</td><td class="text-right p-r-0"></td></tr><tr><td>2014年1月至今</td><td>中信银行总行人力资源管理部</td><td>总经理助理</td><td class="text-right p-r-0"></td></tr></tbody></table></div>';
                popWin.append(i);

                var popBody=$('.modal-body');
                var oPopRight='<nav class="popPanel"><ul>'+
                    '<li><p>生成报表</p>'+
                    '<a href="#"><div class="icon"><i class="iconfont hr-f-s-26 slender"></i></div><div>人员登记表</div></a>'+
                    '<a href="#"><div class="icon"><i class="iconfont hr-f-s-26 slender"></i></div><div>干部任免表</div></a>'+
                    '<a href="#"><div class="icon"><i class="iconfont hr-f-s-26 slender"></i></div><div>收入证明</div></a>'+
                    '</li>'+
                    '<li class="hrWork"><p>人事业务</p>'+
                    '<a href="#"><div class="icon"><i class="iconfont hr-f-s-26 slender"></i></div><div>合同签订</div></a>'+
                    '<a href="#"><div class="icon"><i class="iconfont hr-f-s-26 slender"></i></div><div>薪酬核定</div></a>'+
                    '<a href="#"><div class="icon"><i class="iconfont hr-f-s-26 slender"></i></div><div>干部任免</div></a>'+
                    '<a href="#"><div class="icon"><i class="iconfont hr-f-s-26 slender"></i></div><div>人员调动</div></a>'+
                    '</li>'+
                    '</ul><div class="popLeft opacity"></div><i class="fa fa-angle-double-left pop"></i></nav>';
                popBody.append('<div class="popRight opacity"></div><i class="fa fa-angle-double-right pop"></i>');
                popBody.append(oPopRight);

                // 鼠标点击双箭头指示时动画出现浮窗菜单
                $('.popRight.opacity,.fa-angle-double-right.pop').click(function(e){
                    console.log($(this));
                    $('.popPanel').stop(true).animate({left:'0px'},400);
                    popWin.click(function(){
                       $('.popPanel').animate({left:'-195px'},600);
                    });
                    $('.fa-angle-double-left.pop,.popLeft').click(function(){
                        $('.popPanel').animate({left:'-195px'},600); 
                    });
                });
            }
        );
        // hr登录页面（index）——我关注的人
        $(document).on("click", "[data-click=hr-focus-person-lick]",
            function (e) {
                e.preventDefault();
                loadCSS("popcss", "../../plugins/RD/popwindow/popwindow.css");
                loadJS("popjs", "../../plugins/RD/popwindow/popwindow.js");
                PopWindow.init("0,12,0,width-70percent,,no-footer,hr-focus-person-info");
                var title = "信息浏览";
                $("#hr-focus-person-info .modal-title").html(title);
                var popWin = $(".sys-pop-win-m");
                var i = '<div class="clearfix hr-bg-shallow-blue hr-info-action"><div class="pull-left"><div class="btn-group m-r-10"><a href="javascript:;" class="btn-common btn">详细信息</a></div><div class="btn-group m-r-10"><a href="javascript:;" data-toggle="dropdown" class="btn-common btn dropdown-toggle">修改信息</div><div class="btn-group m-r-10"><a href="javascript:;" class="btn-common btn dropdown-toggle focusPerson"><span>+</span>关注<ul class="dropdown-menu f-s-14"><li><a href="javascript:;ipt:;"></a></li></ul></div></div><div class="pull-right"><button type="button" class="btn btn-default m-r-10 print">导出</button><button type="button" class="btn btn-default print">打印</button></div></div><ul class="text-left hr-f-s-15 info"><li><span>基本信息</span><div class="line"></div></li></ul><div class="media hr-f-s-15 hr-info-media m-t-0">'+
                '<a class="media-left m-r-10" href="javascript:;"><img src="../../resources/img/focus-person-01.jpg" alt="" class="media-object hr-line-height-16"><h4 class="media-heading m-b-0 m-t-15"><span class="f-s-18 m-t-20">张晓晓</span><div class="m-t-10">女</div></h4></a>'+
                '<div class="media-body border-bottom-1 p-b-0 hr-line-height-16"><div><span>总行人力资源部</span><span class="m-l-20">总经理助理</span><div class="hr-line-height-16 m-t-20"><div class="baseInfo"><span>汉族</span><span>1990年1月2日出生</span><span class="m-l-20">未婚</span><span>党员</span><span>本科</span></div><div><span>河北省</span><span class="m-l-10">石家庄市</span></div><div><span>身份证号：</span><span>110234198509046387</span></div></div></div><div><i class="fa fa-phone hr-txt-green-ac"></i><span class="m-l-10">18301101234</span><i class="fa fa-envelope-o m-l-40 hr-txt-green-ac"></i><span class="m-l-10">zhangxiaoxiao@citic.com</span></div></div></div><div class="hr-work-experience hr-f-s-15"><ul class="text-left hr-f-s-15 info"><li><span>工作经历</span><div class="line"></li></ul></div><table class="table m-t-30"><tbody><tr><td>2011年3月至2012年8月</td><td>中信银行南京分行人力资源管理部</td><td>人事专员</td><td class="text-right p-r-0"></td></tr><tr><td>2012年8月至2013年12月</td><td>中信银行南京分行人力资源管理部</td><td>总经理助理</td><td class="text-right p-r-0"></td></tr><tr><td>2014年1月至今</td><td>中信银行总行人力资源管理部</td><td>总经理助理</td><td class="text-right p-r-0"></td></tr></tbody></table></div>';
                popWin.append(i);

                var popBody=$('.modal-body');
                var oPopRight='<nav class="popPanel"><ul>'+
                    '<li><p>生成报表</p>'+
                    '<a href="#"><div class="icon"><i class="iconfont hr-f-s-26 slender"></i></div><div>人员登记表</div></a>'+
                    '<a href="#"><div class="icon"><i class="iconfont hr-f-s-26 slender"></i></div><div>干部任免表</div></a>'+
                    '<a href="#"><div class="icon"><i class="iconfont hr-f-s-26 slender"></i></div><div>收入证明</div></a>'+
                    '</li>'+
                    '<li class="hrWork"><p>人事业务</p>'+
                    '<a href="#"><div class="icon"><i class="iconfont hr-f-s-26 slender"></i></div><div>合同签订</div></a>'+
                    '<a href="#"><div class="icon"><i class="iconfont hr-f-s-26 slender"></i></div><div>薪酬核定</div></a>'+
                    '<a href="#"><div class="icon"><i class="iconfont hr-f-s-26 slender"></i></div><div>干部任免</div></a>'+
                    '<a href="#"><div class="icon"><i class="iconfont hr-f-s-26 slender"></i></div><div>人员调动</div></a>'+
                    '</li>'+
                    '</ul><div class="popLeft opacity"></div><i class="fa fa-angle-double-left pop"></i></nav>';
                popBody.append('<div class="popRight opacity"></div><i class="fa fa-angle-double-right pop"></i>');
                popBody.append(oPopRight);

                // 鼠标点击双箭头指示时动画出现浮窗菜单
                $('.popRight.opacity,.fa-angle-double-right.pop').click(function(e){
                    console.log($(this));
                    $('.popPanel').stop(true).animate({left:'0px'},400);
                    popWin.click(function(){
                       $('.popPanel').animate({left:'-195px'},600);
                    });
                    $('.fa-angle-double-left.pop,.popLeft').click(function(){
                        $('.popPanel').animate({left:'-195px'},600); 
                    });
                });
            }
        );
        $('.hr-user-domain').on('show.bs.dropdown', function () {
            $("[data-click=hr-admin-info]").click(function (e) {
                //function(e) {
                e.preventDefault();
                loadCSS("popcss", "../../plugins/RD/popwindow/popwindow.css");
                loadJS("popjs", "../../plugins/RD/popwindow/popwindow.js");
                PopWindow.init("0,12,0,width-70percent,,no-footer,hr-top-admin-info");
                var title = "信息浏览";
                $("#hr-top-admin-info .modal-title").html(title);
                var popWin = $(".sys-pop-win-m");
                var i = '<div class="clearfix hr-bg-shallow-blue hr-info-action"><div class="pull-left"><div class="btn-group m-r-10"><a href="javascript:;" class="btn btn-default">查看详细信息</a></div></div><div class="pull-right"><button type="button" class="btn btn-default m-r-10">打印</button><button type="button" class="btn btn-default">导出</button></div></div><div class="text-right hr-f-s-15"><i class="iconfont hr-f-s-26 m-r-5 hr-txt-green-ac">&#xe64f;</i><a href="#" class="hr-inline-block hr-txt-green-ac">完善信息</a></div><div class="media hr-f-s-15 hr-info-media m-t-0"><a class="media-left m-r-10" href="javascript:;"><img src="../../resources/img/focus-person-02.jpg" alt="" class="media-object hr-line-height-16"></a><div class="media-body border-bottom-1 p-b-0 hr-line-height-16"><h4 class="media-heading m-b-0 m-t-15"><span class="f-s-18">张晓晓</span><span class="m-l-20">男</span></h4><div><span>总行人力资源部</span><span class="m-l-20">总经理助理</span><span class="m-l-40">入职时间：</span><span>2014年8月</span></div><div><i class="fa fa-phone hr-txt-green-ac"></i><span class="m-l-5">18301101234</span><i class="fa fa-envelope-o m-l-40 hr-txt-green-ac"></i><span class="m-l-5">zhangxiaoxiao@citic.com</span></div></div></div><div class="hr-line-height-16  hr-f-s-15 m-t-20 m-b-30"><div><span>汉族</span><span>1990年1月2日出生</span><span class="m-l-20">未婚</span><span>党员</span><span class="m-l-20">最高学历：</span><span>本科</span><a class="btn btn-link hr-txt-green-ac pull-right hr-rl-no-padding"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></div><div><span>国籍：</span><span>中国</span></div><div><span>籍贯：</span><span>河北省</span><span>石家庄市</span></div><div><span>证件类型：</span><span>身份证</span> <span class="m-l-20">证件号码：</span><span>110234198509046387</span></div></div><div class="hr-work-experience hr-f-s-15"><div class="hr-position-relative"><label class="label label-default m-r-20 f-w-400 f-s-14 hr-position-absolute hr-work-label">工作经历</label><a class="hr-txt-green-ac hr-position-absolute hr-add-action"><i class="fa fa-plus-square-o"></i><span class="m-l-5">添加</span></a></div><table class="table m-t-30"><tbody><tr><td>2011年3月至2012年8月</td><td>中信银行南京分行人力资源管理部</td><td>人事专员</td><td class="text-right p-r-0"><a type="button" class="btn btn-link hr-txt-green-ac">查看</a><a type="button" class="btn btn-link hr-txt-green-ac p-r-0"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></td></tr><tr><td>2012年8月至2013年12月</td><td>中信银行南京分行人力资源管理部</td><td>总经理助理</td><td class="text-right p-r-0"><a type="button" class="btn btn-link hr-txt-green-ac">查看</a><a type="button" class="btn btn-link hr-txt-green-ac p-r-0"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></td></tr><tr><td>2014年1月至今</td><td>中信银行总行人力资源管理部</td><td>总经理助理</td><td class="text-right p-r-0"><a type="button" class="btn btn-link hr-txt-green-ac">查看</a><a type="button" class="btn btn-link hr-txt-green-ac p-r-0"><i class="fa fa-pencil"></i><span class="m-l-5">编辑</span></a></td></tr></tbody></table></div>';
                popWin.append(i);
                //}
            })
        });
    },
    initUser = function () {
        var result = $.Execute("login", "getUserInfo");
        if (result.status == "0") {
            top.location.href = "login.jsp"
        } else {
            var userInfo = decode(result.msgDetail);
            $("#userInfo").text(userInfo.userName);
        }
    },
    System = function () {
        "use strict";
        return {
            init: function () {
                initHeader();
                initUser()
            }
        }
    }();

