var cp= eData.courseplay;
var html = "";
// 未开启宝箱
if(eData.courseplay){
	 
	var cp_length = eData.courseplay.length;
	for(var i = 0;i<cp_length;i++){
		html+="<li>"+
					"<div>"+
						"<span>第"+cp[i].nth+"课</span>"+
						"<h3>"+cp[i].caption+"</h3>"+
					"</div>"+
					"<p><em><img src='"+cp[i].image+"' alt='' /></em>"+
						"<span>"+cp[i].content+"</span>"+ 
						"<a href=''>开始学习</a>"+
						"<i class='tiemr'>"+cp[i].time+"</i></p>"+
				"</li>"	
	}
}
document.querySelector(".courseplaylist_left ul").innerHTML = html;
var courseplay=document.querySelectorAll(".courseplaylist_left ul li");
var courseplayI=document.querySelectorAll(".courseplaylist_left ul li i");
var courseplayA=document.querySelectorAll(".courseplaylist_left ul li a");
var cPlay_length= courseplay.length;
for (var i = 0; i < cPlay_length; i++){
	courseplay[i].index =i;
	courseplay[i].onmouseover = function(){
		courseplayI[this.index].style.display = 'none';
		courseplayA[this.index].style.display= 'inline-block'
	}
	courseplay[i].onmouseout = function(){
		courseplayI[this.index].style.display = 'inline-block';
		courseplayA[this.index].style.display = 'none';
	}
}
