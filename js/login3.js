var iWidth = document.body.scrollWidth || document.documentElement.scrolllWidth;
var iHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
var body =document.querySelector("body");
var container =document.querySelector(".container");
function chuangkou(){
	console.log(scrollTop,iHeight,iWidth);
		body.style.width=iWidth+"px";
		body.style.height = iHeight+"px";
		container.style.left = iWidth/2 + "px";
		container.style.marginLeft = -container.offsetWidth/2 + "px"
}
chuangkou();   
window.onresize=function(){  
	changeBodyWidth();
}
function changeBodyWidth(){               
    var w = document.documentElement.clientWidth;//获取页面可见宽度
    var h = document.documentElement.clientHeight;//获取页面可见高度   
	body.style.width  =w+"px";
	body.style.height = h+"px";
	container.style.left = w/2 + "px";
	container.style.marginLeft = -container.offsetWidth/2 + "px"
	console.log(body.style.width)
}
