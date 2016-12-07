// ======   跑马灯 等待窗口完全加载完毕 
window.onload = function(){
   var marquee = document.querySelector(".marquee");
	var marquee_ul = document.querySelector(".marquee ul");
	var marquee_width = marquee.clientWidth;
	var left = 0;
	var marquee_box = document.querySelector(".marquee .box");
	marquee_box.style.width = marquee_width*2 + "px";
	var newUl = marquee_ul.cloneNode(true);
	marquee_box.appendChild(newUl);
	//        cloneNode();

	var timer = null;
	timer = setInterval(function(){
		left --;
	    if(Math.abs(left) >= marquee.clientWidth){
	        left = 0;
	    }
	    marquee_box.style.left = left + "px";
	    // 0.01s/1px
	   },10);
	timer2 = setInterval(function(){
		marquee_ul[0].style.color = 'width';
		marquee_ul[1].style.color = 'width';
		marquee_ul[2].style.color = 'width';
		marquee_ul[3].style.color = 'width';	
	},1000);
	timer2 = setInterval(function(){
		marquee_ul[0].style.color = '';
		marquee_ul[1].style.color = '';
		marquee_ul[2].style.color = '';
		marquee_ul[3].style.color = '';
	},2000);
	}