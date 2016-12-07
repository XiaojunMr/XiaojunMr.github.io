// // 放大镜 等待窗口完全加载完毕
window.onload = function(){
        var show_small = document.querySelector(".show_small");
        var pointer = document.querySelector(".pointer");
        var hide = document.querySelector(".hide");
        var hideImg = document.querySelector(".hide img");
        show_small.onmouseover = function(){
            pointer.style.display = "block";
            hide.style.display = "block";
        }
        show_small.onmouseout = function(){
            pointer.style.display = "none";
            hide.style.display = "none";
        }
        show_small.onmousemove = function(event){
            var oEvent = event || window.event;
// 展示图与放大图的倍数  等于  指针范围与展示图的倍数
            var x = oEvent.clientX;
            var y = oEvent.clientY;
            var l = x - pointer.offsetWidth/2;
            var t = y - pointer.offsetHeight/2;

// 鼠标位置小于指针范围宽度一半时，指针范围水平方向的位置等于O
            if(x <= pointer.offsetWidth/2){
                l = 0;
                // 鼠标位置大于（展示图宽度减去指针范围的宽度）的一半时，
                // 指针范围水平方向的位置等于（展示图宽度减去指针范围的宽度）
            }else if(x >= show_small.offsetWidth - pointer.offsetWidth/2){
                l = show_small.offsetWidth - pointer.offsetWidth;
            }
            //鼠标位置小于指针范围宽度一半时，指针范围竖直方向的位置等于O
            if(y <= pointer.offsetHeight/2){
                t = 0;
            // 鼠标位置大于（展示图高度减去指针范围的高度）的一半时，
            // 指针范围竖直方向的位置等于（展示图高度减去指针范围的高度）  
            }else if(y >= show_small.offsetHeight - pointer.offsetHeight/2){
                t = show_small.offsetHeight - pointer.offsetHeight;
            }
            // 指针范围所在的位置
            pointer.style.left = l + "px";
            pointer.style.top = t + "px";


            var xishuX = l/(show_small.offsetWidth - pointer.offsetWidth);
            var xishuY = t/(show_small.offsetHeight - pointer.offsetHeight);
// 显示位置系数
            // pointer.innerText = "x:"+ xishuX + ";y:"+xishuY;
// 放大图片所显示的位置
            hideImg.style.left = -xishuX*(hideImg.offsetWidth - hide.offsetWidth) + "px";
            hideImg.style.top = -xishuY*(hideImg.offsetHeight - hide.offsetHeight) + "px";
		}
	}