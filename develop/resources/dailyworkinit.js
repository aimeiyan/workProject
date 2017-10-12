/**
 * Created by Fly on 2015/11/26.
 */

var dailyWorkInitPanel = function() {
    "use strict";
    var result = $.Execute("dailywork","getDailyWork");
    var o = decode(result.msgDetail);
    if ($("#dailywork").length !== 0) {
        var head = '<div class="well no-border text-center m-b-0 p-t-0 p-b-0 p-l-20">';
        for(var i=0;i<o.length;i++){
            head += '<div class="row hr-daily-work-row"><div class="col-md-1 col-sm-2 col-xs-3 p-t-10 p-b-10 hr-rl-no-padding">'+
                '<div><i class="iconfont hr-orange-txt hr-f-s-26">'+o[i].imgAddress+'</i></div>'+
                '<div class="p-t-5 f-w-700">'+o[i].flowName+'</div>'+
                '</div>'+
                '<div class="col-md-1 col-sm-1 col-xs-1 p-t-10 p-b-10 hr-rl-no-padding">'+
                '<div class="p-t-5 f-s-16 f-w-700 m-t-20"><i class="fa fa-angle-right"></i></div>'+
                '</div>'+
                '<div class="col-md-10 col-sm-9 col-xs-8">'+
                '<div class="row">';
            for(var j=0;j<o[i].nodeName.length;j++){
                if(j==0){
                    head+='<div class="col-md-2 col-sm-2 col-xs-4 p-t-10 p-b-10 hr-rl-no-padding">'+
                        '<a href="#modal-dialog" data-click="addStuff" style="text-decoration: none;color:707478" name="'+(o[i].nodeName)[j]+'" id="'+o[i].flowId+'"data-click="'+o[i]['function']+'" data-toggle="modal">' +
                        '<div style="text-decoration: none"><i class="iconfont hr-grey-57-txt hr-f-s-26">'+(o[i].nodeImg)[j]+'</i>'+
                        '</div>'+
                        '<div class="p-t-5 hr-black-lighter">' + (o[i].nodeName)[j] +'</div></a>'+
                        '</div>';
                }else{
                    head += '<div class="col-md-2 col-sm-2 col-xs-4 p-t-10 p-b-10 hr-rl-no-padding">'+
                        '<div><i class="iconfont hr-grey-57-txt hr-f-s-26">'+(o[i].nodeImg)[j]+'</i>'+
                        '</div>'+
                        '<div class="p-t-5" >' + (o[i].nodeName)[j] +'</div>'+
                        '</div>';
                }
            }
            head += '</div></div></div>';
        }
        head += '</div>';
        $("#dailywork").append(head);
    }

};

var dailyWorkInit = function() {
    "use strict";
    return {
        init: function() {
            // handleDashboardGritterNotification();
            dailyWorkInitPanel();
            //handleDashboardSparkline();
            //handleDonutChart();
            //handleDashboardTodolist();
            //handleVectorMap();
            //handleDashboardDatepicker();
            //handleToDoMessageShow(8);
        }
    }
} ();
