// ======   跑马灯 等待窗口完全加载完毕 
window.onload = function(){
   	var marquee = document.querySelector(".marquee");
   	var marquee_width = marquee.clientWidth;
	var cb=0;
	var b=0;
	var marquee_ul = document.querySelector(".marquee .box ul");
	var marquee_ul2 =  document.querySelector(".marquee .box2 ul");
	var marquee_box = document.querySelector(".marquee .box");
	var marquee_box2 = document.querySelector(".marquee .box2");
	var newUl = marquee_ul.cloneNode(true);
	var newUl2 = marquee_ul2.cloneNode(true);
	marquee_box.appendChild(newUl);
	marquee_box2.appendChild(newUl2);
	var marquee_ul_li = document.querySelectorAll(".marquee .box ul li a");
	var marquee_ul2_li =  document.querySelectorAll(".marquee .box2 ul li a");
	marquee_box.style.width = marquee_width*2 + "px";
	marquee_box2.style.width = marquee_width*2 + "px";
	console.log(marquee_ul_li);
function marquee_show(width){
	var left = 0;
	var left2 = 0;
	function time_width(){
		left --;
	    if(Math.abs(left) >= marquee.clientWidth){
	        left = 0;
	    }
	    marquee_box.style.left = left + "px";
	}
		// left2 = -997;
	function time_width2(){
		left2 ++;
	    if(Math.abs(left2) >= marquee_width){
	        left2 = 0;
	    }
	    marquee_box2.style.left = left2-width + "px";
	}
	var marquee_timer = setInterval(time_width,20);
	var marquee_timer2 = setInterval(time_width2,20);
	marquee_box.onmouseover = function(){
		clearInterval(marquee_timer);
	}
	marquee_box.onmouseout =function(){
		marquee_timer = setInterval(time_width,20);
	}
	marquee_box2.onmouseover = function(){
		clearInterval(marquee_timer2);
	}
	marquee_box2.onmouseout =function(){
		marquee_timer2 = setInterval(time_width2,20);
	}
	bianse();
}
function bianse(){

if(b>1){
	liTimer1();	
	b=0;
}else{
	UlTimer();
}
return;
}
function liTimer1()	{
	for(var i =0;  i <8; i++){
		marquee_ul_li[i].style.color = '';
		marquee_ul2_li[i].style.color = '';
		}
}

function liTimer2(){
		for(var i =0;  i <8; i++){
		marquee_ul_li[i].style.color = '#B61D1D';	
		marquee_ul2_li[i].style.color = '#B61D1D';
		}
}
function liTimer3(){
	for (var i = 0; i <8; i++) {		
	marquee_ul_li[i].style.color = 'white';	
	marquee_ul2_li[i].style.color = 'white';
	}
}
function cbb(){
	var linTimer_Four1 =setInterval(liTimer3,100);
	var linTimer_Four2 =setInterval(liTimer2,200);
	var linTimer_Four3 =setTimeout(function(){
		clearInterval(linTimer_Four2);
		clearInterval(linTimer_Four1);
	},998);
}
function UlTimer(){	
	var marqueeUlTimer2 = setInterval(function(){		
		cb++;
		if(cb>=0&cb<1){		
			liTimer1();	
		}else if (cb<2&cb>=1) {
			liTimer2();
		}else if (cb<3&cb>=2) {
			liTimer3();	
		}else if (cb<4&cb>=3) {
			cbb();
		}else if(cb>=5){
			cb=0;
			liTimer1();	
		}
	},1000);
}	
	var body = document.querySelector("body");
	var container = document.querySelectorAll(".container");
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var iWidth = document.body.scrollWidth || document.documentElement.scrolllWidth;
	var iHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
	var windowHeight = window.innerHeight;
function chuangkou(){
	console.log(scrollTop,iHeight,iWidth);
	if(iWidth>=997){
		body.style.width=997+"px";
	}else{
		body.style.width=iWidth+"px";
		body.style.height = iHeight+"px";
	}
	for (var i = 0; i < container.length; i++) {
		container[i].style.left = iWidth/2 + "px";
		container[i].style.marginLeft = -container[i].offsetWidth/2 + "px"
	}
}
marquee_show(marquee_width);	
chuangkou();  
changeBodyWidth();  
//当浏览器窗口大小改变时，设置显示内容的高度  
window.onresize=function(){  
    changeBodyWidth();  
}  
function changeBodyWidth(){               
    var w = document.documentElement.clientWidth;//获取页面可见宽度
    var h = document.documentElement.clientHeight;//获取页面可见高度   
	if(h>=997){
		body.style.width=997+"px";
	}else{
		body.style.width=w+"px";
		body.style.height = h+"px";
	}
	for (var i = 0; i < container.length; i++) {
		container[i].style.left = w/2 + "px";
		container[i].style.marginLeft = -container[i].offsetWidth/2 + "px"
	}
	console.log(body.style.width)
}
	// ===== 拖拽移动
	// var dragging= false;
	// drag=document.getElementById('drag');	
			// 获取元素
			// screenX:鼠标位置相对于用户屏幕水平偏移量，而screenY也就是垂直方向的，此时的参照点也就是原点是屏幕的左上角。
			// clientX:跟screenX相比就是将参照点改成了浏览器内容区域的左上角，
			// pageX：参照点也是浏览器内容区域的左上角，参照点还是内容的顶端左上角，	
			// drag.onmousedown=down;// 鼠标按键按下去会触发的事件
			// document.drag.onmousemove=move;// 鼠标在对象上移动时触发的事件
			// drag.onmouseup=up;
			// 声明三个--鼠标按键按下去---鼠标按键弹起来---鼠标拖拽---事件
			// document.onmouseup=up;
			// 当鼠标在整个文档上-----鼠标按键弹起时触发的事件
			// drag.style.position="relative";
			//绝对定位或者相对定位都可以
			// drag.style.left="0px";
			// drag.style.top="0px";
		
		// 鼠标点击事件
		// function down(event){
			//关于event对象---- event对象只出现在事件里面--所以我们要把
			// 要把event对象保存变量，通过参数传递
			// event=event||window.event;
			// dragging = true;  
			// 解析一个字符串并返回一个整数。
			// dragNowX=parseInt(event.clientX);
			// 到浏览器边缘的距离
			// dragNowY=parseInt(event.clientY);
			// gragobjX=parseInt(drag.style.left);
			// 当前事件对象的左边距离position
			// gragobjY=parseInt(drag.style.top);
		// }
		// 鼠标移动事件
		// document.onmousemove=function(event){
			// event=event||window.event;
			// if(dragging == true){
				// var x=event.clientX-dragNowX+gragobjX;
				// var y=event.clientY-dragNowY+gragobjY;
				// drag.style.left=x+"px";
				// drag.style.top=y+"px";
			// }
		// }

		// function up(event){
			// dragging=false;
		// }


}

