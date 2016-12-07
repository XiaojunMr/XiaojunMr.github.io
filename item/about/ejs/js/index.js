var headerLiA = document.querySelectorAll(".header-box ul li a");
var headerRightA=document.querySelectorAll(".headerRight .pp a");
var registerBtn = document.querySelectorAll(".registerBtn span a");
var headerLiA_length = headerLiA.length;
var imgLeft = document.querySelectorAll(".imgLeft ol li");
var htmlimg = "";
var imgN = 0;
var iG = 0;
for(i=0;i<imgLeft.length;i++){
	console.log(i);
	imgLeft[i].index =i;
	imgLeft[i].onmouseover = function(){
		clearInterval(time);
			imgN = this.index+1;
		htmlimg="<img src='../img/imgLeft"+imgN+".jpg' alt='' />"
		document.querySelector(".imgLeft div div").innerHTML = htmlimg;
		imgLeft[this.index].style.backgroundColor="#808080";
	}
	imgLeft[i].onmouseout= function(){
		time = setInterval(imgGl,1500);
		imgLeft[this.index].style.backgroundColor="";
	}
}
var time = setInterval(imgGl,1500);
function imgGl(){
		iG++;
		if(iG>imgLeft.length-1){
			iG= 0;
		}
		htmlimg= "<img src='../img/imgLeft"+(iG+1)+".jpg' alt='' />"
		document.querySelector(".imgLeft div div").innerHTML = htmlimg;

		for (var i = 0; i < imgLeft.length; i++) {
			imgLeft[iG].style.backgroundColor="#808080";
			imgLeft[i].style.backgroundColor="";
		}
}	
console.log(time);
for(i=0;i<headerLiA_length;i++){
	headerLiA[i].index =i;
	headerLiA[i].onmouseover = function(){	
		for(j=0;j<headerLiA_length;j++){
			headerLiA[j].className ='';
		}
		headerLiA[this.index].className='alterant';		
	}
}
for(i=0;i<headerRightA.length;i++){
	headerRightA[i].index =i;
	headerRightA[i].onmouseover = function(){	
		for(j=0;j<headerRightA.length;j++){
			headerRightA[j].className ='';
		}
		headerRightA[this.index].className='alterant';	
	}
}
for(i=0;i<registerBtn.length;i++){

	registerBtn[i].index =i;
	registerBtn[i].onmouseover = function(){	
		for(j=0;j<registerBtn.length;j++){
			registerBtn[j].className ='';
		}
		registerBtn[this.index].className='show';
		
	}
}
var has= eData.has;
var html1 = "";
// 未开启宝箱
if(eData.has){
	 
	var has_length = eData.has.length;
	for(var i = 0;i<has_length;i++){
		html1+="<div class = 'case'>"+
		"<img src='"+has[i].image+"' alt='' />"+
		"<span>"+has[i].name+"</span>"+
		"<span>"+has[i].unit+"</span>"+
		"<span>"+has[i].profession+"</span>"+
		"<p>薪资</p>"+"<h3>"+has[i].salary+"</h3>"+
		"</div>"	
	}
}
document.querySelector(".itemBox .example").innerHTML = html1;
if(has_length==5){
	for(j=0;j<=has_length+1;j++){
		var hasM=document.querySelectorAll(".itemBox .example div")
		hasM[4].className="case noMargins";
	}
}
var itemCp= eData.itemCp;
var html2 = "";
if(eData.itemCp){
	 
	var itemCp_length = eData.itemCp.length;
	for(var i = 0;i<itemCp_length;i++){
		html2+="<li><img src='"+itemCp[i].image+"' alt='' /></li>"	
	}
}
document.querySelector(".itemBox .cp_Name").innerHTML = html2;
var cTi = document.querySelectorAll(".itemBox .cp_Name li");
var prevBtn = document.querySelector(".itemBox .prevBtn");
var nextBtn = document.querySelector(".itemBox .nextBtn");
window.onload = function(){
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




	
