function showWait(contextPath){
	var path = contextPath+'/static/admin/img/busy.gif';
	$.blockUI({
		message: '<div><img src="'+path+'" width="20px" /> 正在加载...</div>',
		css: { border:'0px',
			width:'180px',
			padding: '10px',
			left: ($(window).width() - 180) /2 + 'px' }
		});
}
/**
 * A标签触发等待页面
 * @param contextPath
 * @param url
 */
function showAWait(contextPath,url){
	showWait(contextPath);
	setTimeout(function(){
		window.location.href=url;
	},1000);
 }
function closeWait(){
	$.unblockUI();
}