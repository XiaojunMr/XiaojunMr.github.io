// 基础选项卡调用
// html结构
// 个人推荐
/*<div id="你自己来取">
	<ol>
		<li class="active"></li>
		<li></li>
		<li></li>
		...
	</ol>
	<ul>
		<li class="active"></li>
		<li></li>
		<li></li>
		...
	</ul>
</div>
*样式自理
*调用方法
*tab("#你自己取的名字")
*
*/
// 单个选项卡
function tab(id){
	var btns = document.querySelectorAll(id+" ol li");
	var length = btns.length;
	var pics= document.querySelectorAll(id+" ul li");
	var picBox=document.querySelector(id+" ul");
	for(var i = 0;i<length;i++){
		btns[i].index = i;
		btns[i].onclick = function(){
			btns[i].className = '';
			pics[i].className = '';
		}
		btns[this.index].className="active";
		pics[this.index].className="active";
	}
}
// 两个参数 可以运用两个选项卡
function tab_effect(id,type){
	if(type == "change_hide"){
		var btns = document.querySelectorAll(id+" ol li");
		var length = btns.length;
		var pics = document.querySelectorAll(id+" ul li");
		var picBox = document.querySelector(id+" ul");
		picBox.style.position = "relative";
		for(var i = 0;i<length;i++){
			pics[i].style.position = "absolute";
			pics[i].style.left = "0";
			pics[i].style.top = "0";
			pics[i].style.transition = "1.5s";
			btns[i].index = i;
			btns[i].onclick = function(){
				for(var i = 0;i<length;i++){
					btns[i].style.opacity= 1;
					pics[i].style.opacity= 0;

				}
				btns[this.index].style.opacity= 1;	
				pics[this.index].style.opacity= 1;	
			}
		}	
	}else if(type=="change_left"){
		var btns = document.querySelectorAll(id+" ol li");
		var length = btns.length;
		var pics = document.querySelectorAll(id+" ul li");
		var picBox = document.querySelector(id+" ul");
		
		// offsetWidth的宽度 
		console.log(picBox.offsetWidth);
		picBox.style.width = document.querySelector(id).offsetWidth * btns.length + "px";
		for(var i = 0;i<length;i++){
			pics[i].style.float = "left";
			pics[i].innerHTML = i+1;
			btns[i].index = i;
			btns[i].onclick = function(){
				picBox.style.marginLeft = -(this.index*document.querySelector(id).offsetWidth)+"px";	
			}
		}	
	}
	
}
// =====函数调用
// tab("#essential");
// tab_effect("#effect1","change_hide");
// tab_effect("#effect2","change_left");