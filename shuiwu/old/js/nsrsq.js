
		var carandom = "";
		var hasSubmit = false;
		
		function CheckOnSubmit(frm){
			if(!checkXys())return false;
			if(frm.loginName.value==""){
				alert("请输入用户名");
				return false;
			}
			if(frm.loginPass.value==""){
				alert("请输入密码");
				return false;
			}
			if(frm.yzm.value==""){
				alert("请输入验证码");
				return false;
			}
			
			if (hasSubmit) {
				return false;
			} else {
				
				try {
			var checkRes=false;
　　　　　　	var option={
　　　　　　　　Url:jcontextPath+"/nsrLoginAction.do",
　　　　　　　　Param:"method=wzslogin",
			   Form:frm,
　　　　　　　　Success:function(request){
					var text = request.responseText;
					outputText.innerText=text;
					// outputTextYzs.innerText=outputText.innerText;
					if (text == "登录成功！") {
						if(showConfirm()){
						hasSubmit = true;
				        showWaitingWindow("正在页面跳转…");
				        document.getElementById("frmId").submit();
						}
					} else {
						var imgpath = jcontextPath+"/common/vimage.jsp?v=" + getLongRandomString();
						document.getElementById("yzmimg").style.display="none";
						document.getElementById("loadimg").style.display="";
						document.getElementById("yzmimg").src=imgpath;
						if (text == "修改初始密码") {
							outputText.innerText="修改初始密码或简单密码";
							alert("您使用的是初始密码或简单密码，为了保障您的信息安全，请修改密码后再使用授权功能。");
							window.location.href=jcontextPath+"/resources/nsfw/wsbs/start.htm";
						} else {
							alert(text);
						}
					}
　　　　　　　　},
　　　　　　　　Failure:function(request){
　　　　　　　　　　alert("访问页面失败，请重试！");
　　　　　　　　}
　　　　　　};

　　　　　　new AjaxSubmit(option);
				
				
				} catch (e) {
					alert(e);
				}
				return false;
			}
			
		}
	

		function login()
		{
			if (CheckOnSubmit(frm)) {
				frm.submit();
			}
		}
		
		
		

		function initGdgsNTSA(){
			try{
				document.frm.keyType.value = initFsCA();
				if(document.frm.keyType.value=='0101'){
				systemstatus.innerHTML="<a href='<%=contextPath%>/resources/wsbs/trust/trust.htm' target='_blank'><font color='blue'>初始化证书控件失败，请把本站设置为信任站点。</font></a>";
				// window.showModalDialog("http://app.gd-n-tax.gov.cn/sso/jsp/download.jsp"
				// ,"广东省国家税务局", "dialogWidth:25em; dialogHeight:8em; status:0;
				// help:0");
				// history.back();
				document.getElementById("btn_ca_dl").contentEditable="true";
				return false;				
				}
			}catch(e){
				systemstatus.innerHTML="<a href='http://app.gd-n-tax.gov.cn/sso/jsp/download.jsp' target='_blank'><font color='blue'>需要安装网上办税系统安全适配器</font></a>";
				showModalDialog("http://app.gd-n-tax.gov.cn/sso/jsp/download.jsp" ,"广东省国家税务局", "dialogWidth:25em; dialogHeight:8em; status:0; help:0");
				return false;
			}
			
			// 比较版本
			if(iVersionDLL > getVersion()){
				systemstatus.innerHTML="<a href='http://app.gd-n-tax.gov.cn/sso/jsp/update.jsp' target='_blank'><font color='blue'>需要升级网上办税系统安全适配器</font></a>";
				cleanCA();
				showModalDialog("http://app.gd-n-tax.gov.cn/sso/jsp/update.jsp" ,"广东省国家税务局", "dialogWidth:26em; dialogHeight:8em; status:0; help:0");
				return false;
			}
			
			if (document.frm.keyType.value === ""){
				// logError('read key failure');
				alert("证书信息读取失败.");
				return false;
			}
			return true;
		}
		
		function onSubmit_check(){
			if(!checkXys())return false;
		    if (document.frm.pin.value.replace(/(^\s*)|(\s*$)/g, "") == "") {
		        alert("请输入PIN码!!!");
		        document.frm.pin.focus();
		        return ;
		    }

		    systemstatus.innerText="正在验证，请稍候...";
		    showWaitingWindow("正在验证，请稍候...");
		    
			setTimeout(onSubmit_check2,50);
		}
		
		function onSubmit_check2(){

			if(!setFsCAPin(document.frm.pin.value)){
				systemstatus.innerText="PIN码错误,请重试!";
				alert("PIN码错误,请重试!");
				document.frm.pin.value = "";
				document.frm.pin.focus();
				closeWaitingWindow();
				return ;
			}
			
			document.frm.user_sign_cert.value = encodeHex(getClientPublicKey());
			document.frm.user_encrypt_cert.value = encodeHex(getServerPublicKey());
			document.frm.random_num.value = carandom;
			document.frm.user_sign.value = encodeHex(getSignData(document.frm.keyType.value,carandom,""));
				
			/*
			 * var user_sign_cert=getClientPublicKey();
			 * $("#user_sign_cert").val(user_sign_cert);
			 * $("#user_encrypt_cert").val(getServerPublicKey()); var
			 * random="0.23010192671804508"; $("#random_num").val(random); var
			 * keyType=$("#keyType").val(); var
			 * random_num=$("#random_num").val();
			 * $("#user_sign").val(getSignData(keyType,random_num,""));
			 */
			
			
			
			if(document.frm.user_sign.value == ''){
				logError('getSignData failure');
			}
			// document.frm.pin.value = "";
			document.getElementById("btn_ca_dl").contentEditable="true";
			cleanCA();
		    
		    // document.frm.action=jcontextPath+"/nsrLoginAction.do?method=yzs";
		    
		    // 试错使用
		    // document.frm.ca_sn.value = document.frm.ca_sn.value.substring(2);
			// document.frm.user_sign_cert.value =
			// document.frm.user_sign_cert.value.substring(2);
		    
		    try {
					
	　　　　　　	var option={
	　　　　　　　　Url:jcontextPath+"/nsrLoginAction.do",
	　　　　　　　　Param:"method=yzs",
				   Form:frm,
	　　　　　　　　Success:function(request){
						var text = request.responseText;
						outputText.innerText=text;
						// outputTextYzs.innerText=outputText.innerText;
						if (text == "登录成功！") {
							if(showConfirm()){
					        hasSubmit = true;
					        showWaitingWindow("正在页面跳转…");
					        document.getElementById("zsNsrBz").value='Y';
					        document.getElementById("frmId").submit();
							}
						} else if (text == "选择纳税人") {
							var returnValue=window.showModalDialog(jcontextPath+"/common/wsbs/nsrsqselect.jsp","","dialogWidth:600px;dialogHeight:300px;resizable:yes");
							if(returnValue!=null&&returnValue!=""){
								if(showConfirm()){
								hasSubmit = true;
								showWaitingWindow("正在页面跳转…");
								document.getElementById("zsNsrBz").value=returnValue;
								document.getElementById("frmId").submit();
								}
							}else{
								alert("您未正确选择纳税人，请重试!");
								logintab('commonlogin');
							}
						} else {
							alert(text);
							logintab('commonlogin');// 返回普通登录界面，为了下次CA登录可以重新初始化
						}
	　　　　　　　　},
	　　　　　　　　Failure:function(request){
	　　　　　　　　　　alert("访问页面失败，请重试！");
	　　　　　　　　}
	　　　　　　};

	　　　　　　new AjaxSubmit(option);
					
					
			} catch (e) {
				alert(e);
			}
			return false;	    
		    
		   // document.frm.submit();
		}
		
		function initCA(){
			systemstatus.innerText="证书检测中，请稍候...";
			document.frm.pin.readOnly = true;
			var ret ;
			if(keySwitch){
				try{
					fsCA = new ActiveXObject("PSIAtv.PSIAPP");
					fsCA.AtvInit();
					isWR = true;
					var cert=getClientPublicKey();
					if(cert != ''){
						document.frm.keyType.value = '0101';
						var clientCertInfo = fsCA.GetCertInfo(cert);
						// alert(clientCertInfo);
						if(clientCertInfo!=''){
				        	var begin = clientCertInfo.indexOf("<serialnum>");
				        	var end = clientCertInfo.indexOf("</serialnum>");
				        	if(end>begin>-1){
				        		document.frm.ca_sn.value=clientCertInfo.substring(begin + 11, end);  
				        	}
						}
					} else {
						logError('read key failure');
						alert("证书信息读取失败.");
						closeWaitingWindow();
						return false;
					}
				}catch(e){
					ret=initGdgsNTSA();
				}
			}else{
				ret=initGdgsNTSA();
			}
			
			if(ret==false){
				return false;
			}
			
			
			
			getRandom();
			
			return true;
		}

	function getRandom(){
		var option={
		　　Url:jcontextPath+"/nsrLoginAction.do",
		　　Param:"method=carandom",
		　　Success:function(request){
				var text = "" + request.responseText;
				if (text.indexOf("错误") > -1) {
					document.frm.pin.readOnly = true;
					systemstatus.innerText=text;
					alert(text);
				} else {
					var sp = text.split(";");
					if (sp.length != 2) {
						document.frm.pin.readOnly = true;
						systemstatus.innerText=text;
						alert("错误，随机数分析不正确！");
					} else {
						carandom = sp[0];
						document.frm.lt.value = sp[1];
			
						document.frm.pin.readOnly = false;
						systemstatus.innerText="证书检测成功,请输入PIN码";
						document.frm.pin.focus();
					}
				}
		　　},
		　　Failure:function(request){
				document.frm.pin.readOnly = true;
				systemstatus.innerText="获取随机数失败！";
		　　		alert("获取随机数失败！");
		　　}
		};
		new AjaxSubmit(option);
	}


	function closeDiv(){
		document.getElementById("floater").style.visibility='hidden';
	}	
	function openTuest(){
		window.open(jcontextPath+"/resources/wsbs/trust/trust.htm");
		closeDiv();
	}
	
	function CheckOnSubmitWx(frm){

		if(frm.loginName.value==""){
			alert("请输入用户名");
			return false;
		}
		if(frm.loginPass.value==""){
			alert("请输入密码");
			return false;
		}
		if(frm.yzm.value==""){
			alert("请输入验证码");
			return false;
		}
		
		if (hasSubmit) {
			return false;
		} else {
			var checkRes=false;
			var option={
					Url:jcontextPath+"/nsrLoginAction.do",
					Param:"method=wzslogin",
					Form:frm,
					Success:function(request){
							var text = request.responseText;
							outputText.innerText=text;
							if (text == "登录成功！") {
								if(showConfirm()){
									hasSubmit = true;
							        showWaitingWindow("正在页面跳转…");
							        document.getElementById("frmId").submit();
								}
							} else {
								var imgpath = jcontextPath+"/common/vimage.jsp?v=" + getLongRandomString();
								document.getElementById("yzmimg").style.display="none";
								document.getElementById("loadimg").style.display="";
								document.getElementById("yzmimg").src=imgpath;
								if (text == "修改初始密码") {
									alert("您使用的是初始密码或简单密码，为了保障您的信息安全，请及时修改。");
									showWaitingWindow("正在页面跳转…");
									window.location.href= jcontextPath+"/wx/common/wxPasswordInfo.jsp?id="+$('#idField').attr("value")+"&url="+$('#returnURLField').attr("value");
								}
							}
			　　　　},
			　　　　Failure:function(request){
			　　　　　　alert("访问页面失败，请重试！");
			　　　　}
			　　};
			new AjaxSubmit(option);
			return false;
		}
	}