var headerLiA = document.querySelectorAll(".header-box ul li a");
var headerLiA_length = headerLiA.length;
var switchL =document.querySelectorAll(".switch>div");
var logintitleA =document.querySelectorAll(".logintitle a");

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
for(i=0;i<logintitleA.length;i++){
	logintitleA[i].index =i;
	logintitleA[i].onclick = function(){
		for(j=0;j<logintitleA.length;j++){
			logintitleA[j].className="";
			switchL[j].style.display="none";
		}	
		logintitleA[this.index].className='show';
		switchL[this.index].style.display="block";	
	}
	console.log(switchL);
	
}