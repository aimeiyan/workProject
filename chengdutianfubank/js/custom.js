/**
 * Created by yanam on 4/27/16.
 */
$(function () {

    /*
     BEGIN 登录页面输入框placeholder处理，以兼容IE8
     */
    $('.login-page .login-box input')
        .focus(function () {
            $(this).css('background-color', 'white');
        })
        .blur(function () {
            if ($.trim($(this).val()) == '') {
                $(this).css('background-color', 'transparent').val('');
            }
        });
    /*
     END 登录页面输入框placeholder处理，以兼容IE8
     */

    /*
     BEGIN 左侧菜单鼠标悬浮效果
     */
    $(".left-sidebar>ul>li>a").hover(function () {


        if ($(this).parent().hasClass("active")) { // 展开状态，不进行处理
            return;
        }

        var $img = $(this).find("img");
        var src = $img.attr("src");

        if (src.indexOf('_active') > 0) {
            src = src.replace('_active', '');
        } else {
            var idx = src.lastIndexOf('.');
            src = src.substr(0, idx) + '_active' + src.substr(idx);
        }
        $img.attr("src", src);
        //}

    });
    /*
     END 左侧菜单鼠标悬浮效果
     */


    /*
     BEGIN 左侧菜单点击展开下拉菜单
     */
    $(".left-sidebar .has-down-menu>a").click(function () {
        var $parent = $(this).parent();
        $parent.toggleClass("show").toggleClass('active');
        //$parent.toggleClass("active");

        var $img = $(this).find("img");
        var src = $img.attr("src");

        if ($parent.hasClass('active')) { // 展开， 变成active状态
            if (src.indexOf('_active') < 0) {
                var idx = src.lastIndexOf('.');
                src = src.substr(0, idx) + '_active' + src.substr(idx);
            }
            $img.attr("src", src);
        }
    });
    /*
     END 左侧菜单点击展开下拉菜单
     */


    /*
     BEGIN 第二级页面背景图高度调整
     */

    function contentHeightDynamic() {
        var winHeight = $(window).height();
        $(".inner-page .main-content").height(winHeight - 120);
    }

    contentHeightDynamic();

    $(window).resize(function () {
        contentHeightDynamic();
    });


    /*
     END 第二级页面背景图高度调整
     */

    function addSheetFile(path) {
        var fileref = document.createElement("link");
        fileref.rel = "stylesheet";
        fileref.type = "text/css";
        fileref.href = path;
        var headobj = document.getElementsByTagName('head')[0];
        headobj.appendChild(fileref);
    }

    if (navigator.userAgent.indexOf("MSIE7.0") > 0 || navigator.userAgent.indexOf("MSIE 8.0") > 0) {
        if ($(window).width() <= 1024) {
            var path = "../css/ie8.css";
            addSheetFile(path);
        }
    }

});