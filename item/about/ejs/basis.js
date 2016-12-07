window.onload = function(){
var headerLiA = document.querySelectorAll(".header-box ul li a");
var headerRightA=document.querySelectorAll(".headerRight .pp a");
var headerLiA_length = headerLiA.length;
for(i=0;i<headerLiA_length;i++){
	console.log(i);
	headerLiA[i].index =i;
	headerLiA[i].onmouseover = function(){	
		for(j=0;j<headerLiA_length;j++){
			headerLiA[j].className ='';
		}
		headerLiA[this.index].className='alterant';		
	}
}
for(i=0;i<headerRightA.length;i++){
	console.log(i);
	headerRightA[i].index =i;
	headerRightA[i].onmouseover = function(){	
		for(j=0;j<headerRightA.length;j++){
			headerRightA[j].className ='';
		}
		headerRightA[this.index].className='alterant';	
	}
}
		var btn = document.querySelector(".btn");
		var isTop = true;
		var timer = null;
		var iHeight = window.innerHeight;
		window.onscroll = function(){
			var top = document.body.scrollTop;
			if(top >=iHeight){
				btn.style.display = "block";
			}else{
				btn.style.display = "none"
			}
			if(!isTop){
				clearInterval(timer);
			}
			isTop = false;
		}
		btn.onclick = function(){
			clearInterval(timer);
			timer = setInterval(fn,20);
			function fn(){
				var top = document.body.scrollTop;
				var sudu = Math.ceil(top/10);
				document.body.scrollTop = top - sudu;
				isTop = true;
				if(top == 0){
					clearInterval(timer);
				}
  			}			
		}	
}