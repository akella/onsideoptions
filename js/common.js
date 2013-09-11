(function(e,t){"use strict";if(typeof define==="function"&&define.amd){define([],t)}else{e.textFit=t()}})(typeof global==="object"?global:this,function(){"use strict";return function(t,n){function u(e){if(!l(e)||!r.reProcess&&e.getAttribute("boxfitted")){return false}if(!r.reProcess){e.setAttribute("boxfitted",1)}var t,n,i,s;var o,u,c;i=e.innerHTML;s=f(e);n=a(e);if(!s||!r.widthOnly&&!n){if(window.console&&!r.suppressErrors){if(!r.widthOnly)console.info("Set a static height and width on the target element "+e.outerHTML+" before using textFit!");else console.info("Set a static width on the target element "+e.outerHTML+" before using textFit!")}return false}if(i.indexOf("textfitted")===-1){t=document.createElement("span");t.className="textfitted";t.style["display"]="inline-block";t.innerHTML=i;e.innerHTML="";e.appendChild(t)}else{t=e.querySelector("span.textfitted")}if(r.alignVert){e.style["display"]="table";t.style["display"]="table-cell";t.style["vertical-align"]="middle"}if(r.alignHoriz){e.style["text-align"]="center";t.style["text-align"]="center"}var h=r.multiLine;if(r.detectMultiLine&&!h&&t.offsetHeight>=parseInt(window.getComputedStyle(t)["font-size"],10)*2){h=true}if(!h){e.style["white-space"]="nowrap"}o=r.minFontSize+1;c=r.maxFontSize+1;while(o<=c){u=parseInt((o+c)/2,10);t.style.fontSize=u+"px";if(t.offsetWidth<=s&&(r.widthOnly||t.offsetHeight<=n)){o=u+1}else{c=u-1}}t.style.fontSize=u-1+"px"}function a(e){var t=window.getComputedStyle(e,null);return e.clientHeight-parseInt(t.getPropertyValue("padding-top"),10)-parseInt(t.getPropertyValue("padding-bottom"),10)}function f(e){var t=window.getComputedStyle(e,null);return e.clientWidth-parseInt(t.getPropertyValue("padding-left"),10)-parseInt(t.getPropertyValue("padding-right"),10)}function l(e){return typeof HTMLElement==="object"?e instanceof HTMLElement:e&&typeof e==="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName==="string"}var r={alignVert:false,alignHoriz:false,multiLine:false,detectMultiLine:true,minFontSize:6,maxFontSize:80,reProcess:false,widthOnly:false,suppressErrors:false};for(var i in n){if(n.hasOwnProperty(i)){r[i]=n[i]}}if(typeof t.toArray==="function"){t=t.toArray()}var s=Object.prototype.toString.call(t);if(s!=="[object Array]"&&s!=="[object NodeList]"){t=[t]}for(var o=0;o<t.length;o++){u(t[o])}}})

$(document).ready(function() {


//scroll
if ($('.scroll').length > 0) {
	$('.scroll').jScrollPane({
		showArrows: true,
		verticalArrowPositions: 'split',
		horizontalArrowPositions: 'split',
		verticalDragMinHeight: 35,
		verticalDragMaxHeight: 35,
	});
};

textFit($(".bet__percent")[0], {minFontSize:10, maxFontSize: 250,widthOnly: true})
//$(".bet__percent").textfill({ maxFontPixels: 206 });

});