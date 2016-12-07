		var dragging=false;
		window.onload=function(){
			drag=document.getElementById('drag');	
			// 获取元素
			// screenX:鼠标位置相对于用户屏幕水平偏移量，而screenY也就是垂直方向的，此时的参照点也就是原点是屏幕的左上角。
			// clientX:跟screenX相比就是将参照点改成了浏览器内容区域的左上角，
			// pageX：参照点也是浏览器内容区域的左上角，参照点还是内容的顶端左上角，	
			drag.onmousedown=down;// 鼠标按键按下去会触发的事件
			// document.drag.onmousemove=move;// 鼠标在对象上移动时触发的事件
			drag.onmouseup=up;
			// 声明三个--鼠标按键按下去---鼠标按键弹起来---鼠标拖拽---事件
			// document.onmouseup=up;
			// 当鼠标在整个文档上-----鼠标按键弹起时触发的事件
			drag.style.position="relative";
			//绝对定位或者相对定位都可以
			drag.style.left="0px";
			drag.style.top="0px";
		}
		// 鼠标点击事件
		function down(event){
			//关于event对象---- event对象只出现在事件里面--所以我们要把
			// 要把event对象保存变量，通过参数传递
			event=event||window.event;
			dragging = true;  
			// 解析一个字符串并返回一个整数。
			dragNowX=parseInt(event.clientX);
			// 到浏览器边缘的距离
			dragNowY=parseInt(event.clientY);
			gragobjX=parseInt(drag.style.left);
			// 当前事件对象的左边距离position
			gragobjY=parseInt(drag.style.top);
		}
		// 鼠标移动事件
		document.onmousemove=function(event){
			event=event||window.event;
			if(dragging == true){
				var x=event.clientX-dragNowX+gragobjX;
				var y=event.clientY-dragNowY+gragobjY;
				drag.style.left=x+"px";
				drag.style.top=y+"px";
			}
		}

		function up(event){
			dragging=false;
		}