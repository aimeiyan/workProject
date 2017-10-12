function GetHttpRequest() {
    if (window.XMLHttpRequest) {//Gecko
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {//IE
        return new ActiveXObject("MsXml2.XmlHttp");
    }
}

function loadJS(sId, url) {
    var oXmlHttp = GetHttpRequest();
    oXmlHttp.onreadystatechange = function() {
        if (oXmlHttp.readyState == 4) {
            includeJS(sId, url, oXmlHttp.responseText);
        }
    };
    oXmlHttp.open('GET', url, false);//同步操作
    oXmlHttp.send(null);  
}

function includeJS(sId, fileUrl, source) {
    if ((source != null) && (!document.getElementById(sId))) {  
        var oHead = document.getElementsByTagName('HEAD').item(0);
        var oScript = document.createElement("script");
        oScript.type = "text/javascript";
        oScript.id = sId;
        oScript.text = source;
        oHead.appendChild(oScript);
    }
}

function loadCSS(sId, url) {
    var oXmlHttp = GetHttpRequest();
    oXmlHttp.onreadystatechange = function() {
        if (oXmlHttp.readyState == 4) {
            includeCSS(sId, url, oXmlHttp.responseText);
        }
    };
    oXmlHttp.open('GET', url, false);//同步操作
    oXmlHttp.send(null);
}

function includeCSS(sId, fileUrl, source) {
    if ((source != null) && (!document.getElementById(sId))) {
        var oHead = document.getElementsByTagName('HEAD').item(0);
        var link = document.createElement('link');
        link.href = fileUrl;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.id = sId;
        oHead.appendChild(link);
    }
}
