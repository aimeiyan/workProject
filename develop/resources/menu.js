initMenu = function () {
    var returnMap = $.Execute("getUserMenu", "getUserMenu");
    if (returnMap == null) {
        top.location.href = "/main/webapp/login.jsp"
    } else {
        var returnMap = decode(returnMap.msgDetail);
        //alert(menuList.mapList.size());
        var menuHTML = ' <div class="sidebar hr-sidebar"><div class="hr-logo"></div> ';
        menuHTML += '  <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 100%;padding-top: 14px;">';
        menuHTML += '  <div data-scrollbar="true" data-height="100%" data-init="true" style="overflow: hidden; width: auto; height: 100%;">';
        menuHTML += '<ul class="nav hr-dropdown-menu" role="menu" >';
        //menuHTML+=' <li class="nav-header"></li>';


        for (var obj in returnMap.menuList) {
            var funName = returnMap.menuList[obj]["FUNNAME"];
            var funId = returnMap.menuList[obj]["FUNID"];
            var funLogo = returnMap.menuList[obj]["FUNLOGO"];
            var list4 = returnMap.commonMapList[funId + "_" + funName];


            menuHTML += '<li data-click="refreshCommandMenu" data-id=' + funId + 'menuPanel' + ' data-name=' + funId + '><a href="javascript:void(0);" class="hr-first-menu" ><i class="fa ' + funLogo + '"></i> <span class="f-s-14">' + funName + '</span></a>';

            menuHTML += '    <div class="popover no-rounded-corner hr-aside-menu-popover">';
            menuHTML += '    <div class="well no-bg p-t-5 p-b-10 no-border border-bottom-1 hr-border-dash-type hr-border-grey m-b-10" id=' + funId + 'command' + ' >';
            menuHTML += '   <ul class="hr-quick-nav clearfix p-0"> ';
            for (var obj2 in list4) {
                var funId1 = list4[obj2][0];
                var funName1 = list4[obj2][1];
                var parentId1 = list4[obj2][2];
                var menuPath1 = list4[obj2][3];
                var funWay1 = list4[obj2][4];
                var funPara1 = list4[obj2][5];
                menuHTML += '    <a href="#" class="label label-success m-r-20 p-t-5 p-b-5 p-l-10 p-r-10 hr-round-radius" onclick="forViewByUrl(\'' + funId1 + '\',\'' + menuPath1 + '\',\'' + parentId1 + '\',\'' + funWay1 + '\',\'' + funPara1 + '\')" >' + funName1 + '</a>';
            }
            menuHTML += ' </ul>';
            menuHTML += '    </div> ';

            menuHTML += '    <div class="p-l-15 p-r-15 p-b-15 f-s-14"> ';
            var list2 = returnMap.mapList[funId + "_" + funName];
            //list2 为returnMap 通过 一级菜单 ID_菜单名为键 取到对应的值  list2中存放的是一个String 数组 0=菜单ID  1=菜单名 2=上级ID 3=菜单地址
            for (var obj1 in list2) {
                var funId1 = list2[obj1][0];
                var funName1 = list2[obj1][1];
                var parentId1 = list2[obj1][2];
                var menuPath1 = list2[obj1][3];
                var funWay1 = list2[obj1][4];
                var funPara1 = list2[obj1][5];

                menuHTML += ' <div class="row clearfix"> ';
                menuHTML += ' <div class="hr-third-menu"> ';
                menuHTML += ' <div class="hr-third-menu-content"> ';
                menuHTML += ' <ul class="hr-sub-menu p-l-0 p-t-5 p-b-5 clearfix"> ';
                //list2 为returnMap 通过 二级菜单 ID_菜单名为键 取到对应的三级菜单的列表  list2中存放的是一个String 数组 0=菜单ID  1=菜单名 2=上级ID 3=菜单地址
                var list3 = returnMap.mapList[funId1 + "_" + funName1];

                for (var k = 0; list3 && k < list3.length; k++) {
                    menuHTML += '  <li><a href="#"  onclick="forViewByUrl(\'' + list3[k][0] + '\',\'' + list3[k][3] + '\',\'' + list3[k][2] + '\',\'' + list3[k][4] + '\',\'' + list3[k][5] + '\')" >' + list3[k][1] + '</a></li>';
                }
                menuHTML += '   </ul> ';
                menuHTML += '    </div> ';
                menuHTML += '    </div> ';

                menuHTML += '<div class="hr-second-menu p-t-10">   <span class="text-warning">' + funName1 + '</span><i class="fa fa-angle-right m-l-10"></i> </div>';
                menuHTML += '    </div> ';
            }
            menuHTML += '    </div> ';

        }
        menuHTML += '<li><a href="javascript:void(0);" class="sidebar-minify-btn" data-click="sidebar-minify" id="sidebar-minify"><i class="fa fa-angle-double-left"></i></a></li>';

        menuHTML += ' </ul>';
        menuHTML += '  </div> ';
        menuHTML += '<div class="slimScrollBar ui-draggable"  style="width: 7px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 641px; background: rgb(0, 0, 0);"></div>';
        menuHTML += '<div class="slimScrollRail"  style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; opacity: 0.2; z-index: 90; right: 1px; background: rgb(51, 51, 51);"></div>';
        menuHTML += '    </div> ';
        menuHTML += '    </div> ';
        menuHTML += ' <div class="sidebar-bg hr-sidebar-bg hr-sidebar-bg-zindex"></div>  ';
        //$("#menu").html(menuHTML);
        $("#page-container").append(menuHTML);
        $("#content").removeClass("hr-content");
        $("#content").addClass("content");
        refreshCommandMenu();
    }
},


    refreshCommandMenu = function () {
        $(document).on("mouseover", '[data-click="refreshCommandMenu"]',
            function () {
                var id = $(this).data('id');
                var name = $(this).data('name');
                var returnMap = $.Execute("getUserMenuByFunId", "getUserMenuByFunId", name);
                if (returnMap == null) {
                    top.location.href = "/main/webapp/login.jsp"
                } else {
                    var returnMap = decode(returnMap.msgDetail);
                    for (var obj in returnMap.menuList) {
                        var funName = returnMap.menuList[obj]["FUNNAME"];
                        var funId = returnMap.menuList[obj]["FUNID"];
                        var list4 = returnMap.commonMapList[funId + "_" + funName];
                        var messageString = "";
                        messageString += '   <ul class="hr-quick-nav clearfix hr-rl-no-padding p-t-10 p-b-5"> ';
                        for (var obj2 in list4) {
                            var funId1 = list4[obj2][0];
                            var funName1 = list4[obj2][1];
                            var parentId1 = list4[obj2][2];
                            var menuPath1 = list4[obj2][3];
                            var funWay1 = list4[obj2][4];
                            var funPara1 = list4[obj2][5];
                            messageString += '    <a href="#" class="label label-success m-r-20 p-t-5 p-b-5 p-l-10 p-r-10 f-w-400 f-s-14" onclick="forViewByUrl(\'' + funId1 + '\',\'' + menuPath1 + '\',\'' + parentId1 + '\',\'' + funWay1 + '\',\'' + funPara1 + '\')" >' + funName1 + '</a>';
                        }
                        messageString += '   </ul> ';
                        $("#" + funId + "command").html(messageString);


                        //$("#" + funId + "command").clear();
                        //$("#" + funId + "command").append(messageString);

                    }

                }
            })
    },

    //生成txt文件和索引文件
    generationPersonTxtFile = function(){
    $(document).on("click", '[data-click="generactionTxtFile"]',
        function() {
            var result = $.Execute("generationFile", "initPersonFile");
        });
    $(document).on("click", '[data-click="createIndex"]',
        function() {
            var result = $.Execute("generationFile", "createIndex");
        })
};

    Menu = function () {
        "use strict";
        return {
            init: function () {

                initMenu();
                generationPersonTxtFile()

            }
        }
    }();

//通过传入的菜单ID 以及菜单地址 访问地址
function forViewByUrl(var1, var2, var3, var4, var5) {
    $.Execute("RecordMenuClickNum", "RecordMenuClickNum", var1);
    //window.location.href=var2;
    var returnMap = $.Execute("getUserMenuByFunId", "getUserMenuByFunId", var3, "click");
    if (returnMap == null) {
        top.location.href = "/main/webapp/login.jsp"
    } else {
        var returnMap = decode(returnMap.msgDetail);
        for (var obj in returnMap.menuList) {
            var funName = returnMap.menuList[obj]["FUNNAME"];
            var funId = returnMap.menuList[obj]["FUNID"];
            var list4 = returnMap.commonMapList[funId + "_" + funName];
            var messageString = "";
            messageString += '   <ul class="hr-quick-nav clearfix p-0"> ';
            for (var obj2 in list4) {
                var funId1 = list4[obj2][0];
                var funName1 = list4[obj2][1];
                var parentId1 = list4[obj2][2];
                var menuPath1 = list4[obj2][3];
                var funWay1 = list4[obj2][4];
                var funPara1 = list4[obj2][5];
                messageString += '    <a href="#" class="label label-success m-r-20 p-t-5 p-b-5 p-l-10 p-r-10 hr-round-radius"  onclick="forViewByUrl(\'' + funId1 + '\',\'' + menuPath1 + '\',\'' + parentId1 + '\',\'' + funWay1 + '\',\'' + funPara1 + '\')" >' + funName1 + '</a>';
            }
            messageString += '   </ul> ';
            $("#" + funId + "command").html(messageString);
            //$("#" + funId + "command").clear();
            //$("#" + funId + "command").append(messageString);

        }
        //var4 菜单访问方式  var5 通过AJAX 访问参数
        if (var4 == '1') {
            top.location.href = var2;
        } else if (var4 == '2') {
            var str = var5.split('|');
            var returnMap = $.Execute(str[0], str[1]);
            returnMap = returnMap.msgInfo;
            alert(returnMap);
        } else {
            top.location.href = "/main/webapp/login.jsp";
        }

    }
}


