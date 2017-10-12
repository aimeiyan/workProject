var handleToDoMessageShow = function (num) {
    var result = $.Execute("todomessage", "getTodoMessage", num, 1, '处理');
    if (result.status == "1") {
        var o = decode(result.msgDetail);
        var head = '<div class="unsolved" id="unsolved"><div class="table-responsive p-l-20"><table class="table table-hover m-b-0"><tbody>';
        if (o != null) {
            for (var i = 0; i < o.length; i++) {
                head += '<tr>' +
                    '<td class="no-border col-md-7 col-sm-8 col-xs-5 hr-rl-no-padding "><i class="fa fa-envelope m-r-10" style="color:#a9d86e;"></i>' + o[i].tName + '</td>' +
                    '<td class="no-border col-md-3 col-sm-2 col-xs-4 p-r-5 p-l-5 f-s-12">' + o[i].arrivalTime + '</td>' +
                    '<td class="no-border col-md-2 col-sm-2 col-xs-3"><a href="javascript:;" class="label label-success p-t-5 p-b-5 p-l-15 p-r-15 f-s-14 f-w-400" id="' + o[i].id + '" name="' + o[i]['function'] + '"  data-click="pendingTodo">' + o[i].status + '</a></td></tr> ';
            }
        }
        var last = '</tbody></table></div></div>';
        var c = head + last;
        $("#myTabContent").empty();
        $("#myTabContent").append(c);
        $("#unsolved").removeClass("HR-solved");
        $("#solved").addClass("HR-solved");
    }
};
var unsolvedAction = function () {
        $(document).on("click", "[data-click=pendingTodo]",
            function (e) {
                var id = e.currentTarget.attributes.id.nodeValue;
                var nodeNam = e.currentTarget.attributes.name.nodeValue;
                var result = $.Execute("todomessage", "pendingTodo", id);
                var o = decode(result.msgDetail);
                if (o != null) {
                    if (result.status == "1") {
                        if (o.nodeName == "合同新签") {
                            addContractAction(o.nodeName, id);
                        } else if (o.nodeName == "薪酬匹配") {
                            wageMatchAction(o.nodeName, id);
                        } else if (o.nodeName == "社保公积金录入") {
                            welfareEnteringAction(o.nodeName, id);
                        } else {
                            swal({
                                title: "抱歉！功能尚未完善！",
                                type: "warning",
                                showCancelButton: true,
                                cancelButtonText: "确定",
                                confirmButtonColor: "#DD6B55",
                                showConfirmButton: false,
                                closeOnConfirm: false
                            })
                        }
                    }
                }
            })
    }, addContractAction = function (nodeName, id) {
        loadJS("identity", "../../plugins/RD/HR-checkIdCard.js");
        window.ParsleyValidator
            .addValidator('compareDate', function (value, elemen) {
                return (new Date(value).getTime() ) > (new Date($(elemen).val()).getTime());
            }, 32);
        window.ParsleyValidator
            .addValidator('lessDate', function (value, elemen) {
                return (new Date(value).getTime() ) < (new Date($(elemen).val()).getTime());
            }, 32);
        loadCSS("popcss", "../../plugins/RD/popwindow/popwindow.css");
        loadJS("popjs", "../../plugins/RD/popwindow/popwindow.js");
        PopWindow.init("1,10,1,width-550,height-450 HRHeight", addContractSubmit, id);
        $("#sys-pop-win .modal-title").html(nodeName);
        var popWin = $(".sys-pop-win-m");
        var leftWin = $(".sys-pop-win-l");
        popWin.empty();
        //加载合同增加代码
        var i = '<form class="form-horizontal" id="formContract" data-parsley-validate="true"><div class="form-group">' +
            '<div class="form-group"><label class="col-md-3 col-sm-3 control-label">合同类型：</label><div class="col-md-9 col-sm-9"><select class="form-control" id="contractType"><option>实习</option><option>兼职</option><option>全职</option><option>其他</option></select></div></div>' +
            '<div class="form-group"><label class="col-md-3 col-sm-3 control-label">合同开始日期：</label><div class="col-md-9 col-sm-9"><input type="text" class="form-control" id="datepicker-autoClose" placeholder="请选择合同开始日期" required data-parsley-required-message="合同开始日期不能为空"/></div></div>' +
            '<div class="form-group"><label class="col-md-3 col-sm-3 control-label">合同结束日期：</label><div class="col-md-9 col-sm-9"><input type="text" class="form-control" id="datepicker-autoClose1" placeholder="请选择合同结束日期" data-parsley-compareDate="#datepicker-autoClose" data-parsley-compareDate-message="合同结束日期不能在开始日期之前" required data-parsley-required-message="合同结束日期不能为空"/></div></div>' +
            '<div class="form-group"><label class="col-md-3 col-sm-3 control-label">合同签订日期：</label><div class="col-md-9 col-sm-9"><input type="text" class="form-control" id="datepicker-autoClose2" placeholder="请选择合同签订日期" data-parsley-lessDate="#datepicker-autoClose" data-parsley-lessDate-message="合同签订日期不能在开始日期之后" required data-parsley-required-message="合同签订日期不能为空"/></div></div>' +
            '<div class="form-group"><label class="col-md-3 col-sm-3 control-label">合同时间：</label><div class="col-md-9 col-sm-9" ><input id="workYear" type="text" class="form-control" placeholder="请输入合同时间" data-parsley-type="number" data-parsley-min="0.1" data-parsley-min-message="合同年限不得低于0年" required data-parsley-required-message="合同时间不能为空"></div></div>' +
            '<div class="form-group"><label class="col-md-3 col-sm-3 control-label">岗位职责：</label><div class="col-md-9 col-sm-9" ><input id="position" type="text" class="form-control" placeholder="请输入新入职员工岗位职责" required data-parsley-required-message="岗位职责不能为空"></div></div>' +
            '<div class="form-group"><label class="col-md-3 col-sm-3 control-label">工作地点：</label><div class="col-md-9 col-sm-9" ><input id="workPlace" type="text" class="form-control" placeholder="请输入新入职员工作地点" required  data-parsley-required-message="工作地点不能为空"></div></div></form>';
        popWin.append(i);
        var p = '<form class="form-inline">' +
            '<div class="form-group"><label class="col-md-3 control-label">姓名</label><div class="col-md-9"></div>';
        FormPlugins.init();
        loadJS("datepickerAutoclose", "../../plugins/RD/form-plugin.demo.min.js");
        FormPlugin.init();
        $("#formContract").parsley();


    }, addContractSubmit = function (id) {
        $("#formContract").parsley().onSubmitValidate()
        if ($("#formContract").parsley().isValid()) {
            function creatNewContract(id, contractType, contractYear, position, workPlace, contractStartTime, contractEndTime, contractSignTime) {
                this.id = id;
                this.contractType = contractType;
                this.contractYear = contractYear;
                this.position = position;
                this.workPlace = workPlace;
                this.contractStartTime = contractStartTime;
                this.contractEndTime = contractEndTime;
                this.contractSignTime = contractSignTime;
            }

            var contractType = $("#contractType").find("option:selected").text(), contractEndTime = $("#datepicker-autoClose1").attr("value"),
                contractYear = $("#workYear").attr("value"), position = $("#position").attr("value"),
                workPlace = $("#workPlace").attr("value"), contractStartTime = $("#datepicker-autoClose").attr("value"),
                contractSignTime = $("#datepicker-autoClose2").attr("value");
            var o = new creatNewContract(id, contractType, contractYear, position, workPlace, contractStartTime, contractEndTime, contractSignTime);
            var json = JSON.stringify(o);
            var result = $.Execute("addNewStuff", "addContract", json);
            if (result.status == 1) {
                $("#todoReload").click();
                PopWindow.close();
                if ($("body").hasClass("panel-expand") && $(a).hasClass("panel-expand")) {
                    handleToDoMessageShow(20);
                } else {
                    handleToDoMessageShow(8);
                }
                $.gritter.add({title: "新消息", text: '增加合同成功！'});//,class_name:"gritter-light"});
            }
        }
    }, wageMatchAction = function (nodeName, id) {
        loadCSS("popcss", "../../plugins/RD/popwindow/popwindow.css");
        loadJS("popjs", "../../plugins/RD/popwindow/popwindow.js");
        PopWindow.init("1,10,1,width-500,height-350 HRHeight", wageMatchSubmit, id);
        $("#sys-pop-win .modal-title").html(nodeName);
        var popWin = $(".sys-pop-win-m");
        var leftWin = $(".sys-pop-win-l");
        popWin.empty();
        //加载合同增加代码
        var i = '<form class="form-horizontal" id="formWage" data-parsley-validate="true"><div class="form-group">' +
            '<div class="form-group"><label class="col-md-3 col-sm-3 control-label">薪资等级：</label><div class="col-md-9 col-sm-9"><select class="form-control" id="wageLevel"><option>一级</option><option>二级</option><option>三级</option><option>四级</option></select></div></div>' +
            '<div class="form-group"><label class="col-md-3 col-sm-3 control-label">核定起薪日：</label><div class="col-md-9 col-sm-9"><input type="text" class="form-control" id="datepicker-autoClose" placeholder="请选择薪资开始日期" required data-parsley-required-message="薪资开始日期不能为空"/></div></div>' +
            '<div class="form-group"><label class="col-md-3 col-sm-3 control-label">薪资档次：</label><div class="col-md-9 col-sm-9" ><input id="wageElegant" type="text" class="form-control" placeholder="请输入薪资档次" required data-parsley-required-message="薪资档次不能为空"></div></div>' +
            '<div class="form-group"><label class="col-md-3 col-sm-3 control-label">发放比例：</label><div class="col-md-9 col-sm-9" ><input id="paymentRatio" type="text" class="form-control" placeholder="请输入发放比例" data-parsley-type="integer" data-parsley-min="1" data-parsley-min-message="发放比例必须大于0" required data-parsley-required-message="发放比例不能为空"></div></div>' +
            '<div class="form-group"><label class="col-md-3 col-sm-3 control-label">基本工资：</label><div class="col-md-9 col-sm-9" ><input id="baseWage" type="text" class="form-control" placeholder="请输入基本工资" data-parsley-type="number" data-parsley-min="1" data-parsley-min-message="基本工资最小值必须大于0" required data-parsley-required-message="基本工资不能为空"></div></div></form>';
        popWin.append(i);
        FormPlugins.init();
        $("#formWage").parsley();
    }, wageMatchSubmit = function (id) {
        $("#formWage").parsley().onSubmitValidate();
        if ($("#formWage").parsley().isValid()) {
            function creatWage(id, wageLevel, wageStartTime, wageElegant, paymentRatio, baseWage) {
                this.id = id;
                this.wageLevel = wageLevel;
                this.wageStartTime = wageStartTime;
                this.wageElegant = wageElegant;
                this.paymentRatio = paymentRatio;
                this.baseWage = baseWage;
            }

            var wageLevel = $("#wageLevel").find("option:selected").text(), wageStartTime = $("#datepicker-autoClose").attr("value"),
                wageElegant = $("#wageElegant").attr("value"), paymentRatio = $("#wageElegant").attr("value"), baseWage = $("#baseWage").attr("value");
            var o = new creatWage(id, wageLevel, wageStartTime, wageElegant, paymentRatio, baseWage);
            var json = JSON.stringify(o);
            var result = $.Execute("addNewStuff", "getWageMatch", json);
            if (result.status == "1") {
                $("#todoReload").click();
                PopWindow.close();
                if ($("body").hasClass("panel-expand") && $(a).hasClass("panel-expand")) {
                    handleToDoMessageShow(20);
                } else {
                    handleToDoMessageShow(8);
                }
                $.gritter.add({title: "新消息", text: '薪酬匹配操作成功！'});//,class_name:"gritter-light"});
            }
        }
    }, welfareEnteringAction = function (nodeName, id) {
        loadCSS("popcss", "../../plugins/RD/popwindow/popwindow.css");
        loadJS("popjs", "../../plugins/RD/popwindow/popwindow.js");
        PopWindow.init("1,10,1,width-500,height-350 HRHeight", welfareEnteringSubmit, id);
        $("#sys-pop-win .modal-title").html(nodeName);
        var popWin = $(".sys-pop-win-m");
        var leftWin = $(".sys-pop-win-l");
        popWin.empty();
        //加载合同增加代码
        var i = '<form class="form-horizontal" id="formWelfare" data-parsley-validate="true"><div class="form-group">' +
            '<div class="form-group"><label class="col-md-3 col-sm-3 control-label">社保起始日期：</label><div class="col-md-9 col-sm-9"><input type="text" class="form-control" id="datepicker-autoClose" placeholder="请选择社保开始日期" required data-parsley-required-message="社保开始日期不能为空"/></div></div>' +
            '<div class="form-group"><label class="col-md-3 col-sm-3 control-label">社保基数：</label><div class="col-md-9 col-sm-9" ><input id="baseSocialSecurity" type="text" class="form-control" placeholder="请输入社保基数" data-parsley-type="integer" data-parsley-min="1" data-parsley-min-message="社保基数必须是比0大的数" required data-parsley-required-message="社保基数不能为空"></div></div>' +
            '<div class="form-group"><label class="col-md-3 col-sm-3 control-label">公积金基数：</label><div class="col-md-9 col-sm-9" ><input id="baseAccumulation" type="text" class="form-control" placeholder="请输入公积金基数" data-parsley-type="integer" data-parsley-min="1" data-parsley-min-message="公基金基数必须是比0大的数" required data-parsley-required-message="公基金基数不能为空"></div></div>' +
            '<div class="form-group"><label class="col-md-3 col-sm-3 control-label">公积金金额：</label><div class="col-md-9 col-sm-9" ><input id="accumulationNum" type="text" class="form-control" placeholder="请输入公积金金额" data-parsley-type="integer" data-parsley-min="1" data-parsley-min-message="公基金金额必须是比0大的数" required data-parsley-required-message="公基金金额不能为空"></div></div>' +
            '<div class="form-group"><label class="col-md-3 col-sm-3 control-label">社保金额：</label><div class="col-md-9 col-sm-9" ><input id="socialsecurityNum" type="text" class="form-control" placeholder="请输入社保金额" data-parsley-type="integer" data-parsley-min="1" data-parsley-min-message="社保金额必须是比0大的数" required data-parsley-required-message="社保金额不能为空"></div></div></form>';
        popWin.append(i);
        FormPlugins.init();
    }, welfareEnteringSubmit = function (id) {
        if ($("#formWelfare").parsley().isValid()) {
            function createWelfare(id, welfareStartTime, baseSocialSecurity, baseAccumulation, accumulationNum, socialsecurityNum) {
                this.id = id;
                this.welfareStartTime = welfareStartTime;
                this.baseSocialSecurity = baseSocialSecurity;
                this.baseAccumulation = baseAccumulation;
                this.accumulationNum = accumulationNum;
                this.socialsecurityNum = socialsecurityNum;
            }

            var welfareStartTime = $("#datepicker-autoClose").attr("value"), baseSocialSecurity = $("#baseSocialSecurity").attr("value"),
                baseAccumulation = $("#baseAccumulation").attr("value"), accumulationNum = $("#accumulationNum").attr("value"),
                socialsecurityNum = $("#socialsecurityNum").attr("value");
            var o = new createWelfare(id, welfareStartTime, baseSocialSecurity, baseAccumulation, accumulationNum, socialsecurityNum);
            var json = JSON.stringify(o);
            var result = $.Execute("addNewStuff", "getWelfare", json);
            if (result.status == "1") {
                $("#todoReload").click();
                PopWindow.close();
                if ($("body").hasClass("panel-expand") && $(a).hasClass("panel-expand")) {
                    handleToDoMessageShow(20);
                } else {
                    handleToDoMessageShow(8);
                }
                $.gritter.add({title: "新消息", text: '添加社保成功！'});//,class_name:"gritter-light"});
            }
        }
    }, solvedAction = function () {
        $(document).on("click", "[data-click=todoSolved]",
            function (e) {
                var id = e.currentTarget.attributes.id.nodeValue;
                var nodeNam = e.currentTarget.attributes.name.nodeValue;
                var result = $.Execute("todomessage", "todoSolved", id);
                //var o = decode(result.msgDetail);
                if (result.status == "1") {
                    //if(o!=null){
                    alert("功能还未完善，请试试其他功能！")
                    //}
                }
            })
    }, testFunction = function () {
        var popWin = $(".sys-pop-win-m");
        var i = $("#formValidate1").parsley().onSubmitValidate();
        //PopWindow.close();
    },
    todoSolved = function (num) {
        var result = $.Execute("todomessage","getTodoMessage",num,1,'已处理');
        if(result.status == "1") {
            var o = decode(result.msgDetail);
            var head = '<div class="tab-pane fade active in" id="alreadysolved"><div class="table-responsive"><table class="table table-hover"><tbody>';
            if (o != null) {
                for (var i = 0; i < o.length; i++) {
                    head += '<tr>' +
                        '<td class="no-border hr-grey-lighter"><i class="fa fa-envelope m-r-10" style="color:#b6c2c9;"></i>'+o[i].tName+'</td>' +
                        '<td class="no-border col-md-2 hr-grey-lighter">'+o[i].arrivalTime+'</td>' +
                        '<td class="no-border col-md-2"><a href="javascript:;" class="label label-default p-t-5 p-b-5 p-l-10 p-r-10 f-s-14 f-w-400" id="'+o[i].id+'" name="'+o[i]['function']+ '"  data-click="todoSolved">'+o[i].status+'</a></td></tr> ';
                }
            }
            var last = '</tbody></table></div></div>';
            var c = head + last;
            $("#myTabContent").empty();
            $("#myTabContent").append(c);
            $("#unsolved").addClass("HR-solved");
            $("#solved").removeClass("HR-solved");
        }
    },
    tohandlePanel = function() {
        "use strict";
        return panelActionRunning ? !1 : (panelActionRunning = !0, $(document).on("hover", "[data-click=panel-remove]",
            function() {
                $(this).tooltip({
                    title: "Remove",
                    placement: "bottom",
                    trigger: "hover",
                    container: "body"
                }),
                    $(this).tooltip("show")
            }), $(document).on("click", "[data-click=panel-remove]",
            function(e) {
                e.preventDefault(),
                    $(this).tooltip("destroy"),
                    $(this).closest(".panel").remove()
            }),$(document).on("click","[data-click=solved]",
            function(e){
                e.preventDefault();
                var a = $(this).closest(".panel");
                if ($("body").hasClass("panel-expand") && $(a).hasClass("panel-expand")) {
                    alert('if');
                    todoSolved(20);
                }else{
                    todoSolved(8);
                }
            }),$(document).on("click","[data-click=unsolved]",
            function(e){
                e.preventDefault();
                var a = $(this).closest(".panel");
                if ($("body").hasClass("panel-expand") && $(a).hasClass("panel-expand")) {
                    handleToDoMessageShow(20);
                }else{
                    handleToDoMessageShow(8);
                }
            }),$(document).on("click","[data-click=addStuff]",
            function(e){
                e.preventDefault();
                var title = this.getAttribute("name");
                loadJS("dailyworkPeople","../scripts/dailywork.js");
                var user = $.Execute("addNewStuff","getUserId");
                if(title=="入职"){
                    var role = decode(user.msgDetail);
                    if(role=="1"){
                        addNewStuffAction(title);
                    }else{
                        swal({
                            title: "您的权限不够，如需操作请联系系统管理员！",
                            text: "对话框将在2s内关闭.",
                            timer: 2000,
                            showConfirmButton: false
                        });
                    }
                }else{
                    swal({
                        title: "功能正在路上！不如试试其他功能！",
                        type: "warning",
                        showCancelButton: true,
                        cancelButtonText:"确定",
                        confirmButtonColor: "#DD6B55",
                        showConfirmButton:false,
                        closeOnConfirm: false
                    })
                }
            }),$(document).on("click","[data-click=dailyChart]",
            function(e){
                e.preventDefault();
                var title = e.target.childNodes[0].nodeValue;
                loadJS("dailyworkChart","../scripts/dailywork.js");
                if(title=="新增报表"){
                    addNewChart(title);
                }
            }),$(document).on("hover", "[data-click=panel-collapse]",
            function() {
                $(this).tooltip({
                    title: "Collapse / Expand",
                    placement: "bottom",
                    trigger: "hover",
                    container: "body"
                }),
                    $(this).tooltip("show")
            }), $(document).on("click", "[data-click=panel-collapse]",
            function(e) {
                e.preventDefault(),
                    $(this).closest(".panel").find(".panel-body").slideToggle()
            }), $(document).on("hover", "[data-click=panel-reload]",
            function() {
                $(this).tooltip({
                    title: "刷新",
                    placement: "bottom",
                    trigger: "hover",
                    container: "body"
                }),
                    $(this).tooltip("show")
            }), $(document).on("click", "[data-click=panel-reload]",
            function(e) {
                e.preventDefault();
                var a = $(this).closest(".panel");
                if (!$(a).hasClass("panel-loading")) {
                    var t = $(a).find(".panel-body"),
                        i = '<div class="panel-loader"><span class="spinner-small"></span></div>';
                    $(a).addClass("panel-loading"),
                        $(t).prepend(i);
                    if ($("body").hasClass("panel-expand") && $(a).hasClass("panel-expand")) {
                        if($("#unsolved").hasClass("HR-solved")){
                            todoSolved(20);
                        }else if($("#solved").hasClass("HR-solved")){
                            handleToDoMessageShow(20);
                        }
                    }else{
                        if($("#unsolved").hasClass("HR-solved")){
                            todoSolved(8);
                        }else if($("#solved").hasClass("HR-solved")){
                            handleToDoMessageShow(8);
                        }
                    }
                    setTimeout(function() {
                            $(a).removeClass("panel-loading"),
                                $(a).find(".panel-loader").remove()
                        },
                        2e3);
                }
            }), $(document).on("hover", "[data-click=panel-expand]",
            function() {
                $(this).tooltip({
                    title: "展开 / 折叠",
                    placement: "bottom",
                    trigger: "hover",
                    container: "body"
                }),
                    $(this).tooltip("show")
            }), void $(document).on("click", "[data-click=panel-expand]",
            function(e) {
                e.preventDefault();
                var a = $(this).closest(".panel"),
                    t = $(a).find(".panel-body"),
                    i = 40;
                if (0 !== $(t).length) {
                    var n = $(a).offset().top,
                        o = $(t).offset().top;
                    i = o - n
                }
                if($("#todoExpand").keydown()){
                    if($("#unsolved").hasClass("HR-solved")){
                        todoSolved(20);
                    }else if($("#solved").hasClass("HR-solved")){
                        handleToDoMessageShow(20);
                    }
                }

                if ($("body").hasClass("panel-expand") && $(a).hasClass("panel-expand")) {
                    $("body, .panel").removeClass("panel-expand"),
                        $(".panel").removeAttr("style"),
                        $(t).removeAttr("style");
                    if($("#unsolved").hasClass("HR-solved")){
                        todoSolved(8);
                    }else if($("#solved").hasClass("HR-solved")){
                        handleToDoMessageShow(8);
                    }
                }
                else if ($("body").addClass("panel-expand"), $(this).closest(".panel").addClass("panel-expand"), 0 !== $(t).length && 40 != i) {
                    var s = 40;
                    $(a).find(" > *").each(function() {
                        var e = $(this).attr("class");
                        "panel-heading" != e && "panel-body" != e && (s += $(this).height() + 30)
                    }),
                    40 != s && $(t).css("top", s + "px")
                }

                $(window).trigger("resize")
            }))
    },
    TodoMessage = function () {
        "use strict";
        return {
            init: function () {
                tohandlePanel();
                handleToDoMessageShow(8);
                this.initTodoMessage();
            }, initTodoMessage: function () {
                unsolvedAction();
                solvedAction();
            }
        }
    }();



