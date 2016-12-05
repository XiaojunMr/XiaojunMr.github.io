/*
<div id="popupDiv_ChEnTips" style="width:420px;visibility:visible;top:100px;left:150px;">
	<div class="hintArr2"></div>
    <div class="closeChEnTips"></div>
    <div class="hintBoxInner"><div><span>智联建议您对自己做一个简短评价，简明扼要地描述您的职业优势，让用人单位快智联建议您对自己做一个简短评价，简明扼要地描述您的职业优势，让用人单位快少！</span></div></div>
	<div class="hintArr"></div>
</div>
*/

function createPopupDiv4ChEnTips(){
	var div = document.createElement('div');
	div.id = 'popupDiv_ChEnTips';
	myAttachEvent(div,'click',function(e){cancelBubble(e);});
	document.body.appendChild(div);
	
	var subDiv = document.createElement('div');
	subDiv.className = 'clear';
	div.appendChild(subDiv);
	div.upArrowDiv = subDiv;
	
	subDiv = document.createElement('div');
	subDiv.className = 'closeChEnTips';
	div.appendChild(subDiv);
	myAttachEvent(subDiv,'click',fnCloseChEnTips);
	
	subDiv = document.createElement('div');
	subDiv.className = 'hintBoxInner';
	div.appendChild(subDiv);
	
	var subDiv2 = document.createElement('div');
	subDiv2.style.overflowY = 'auto';
	subDiv.appendChild(subDiv2);
	div.hDiv = subDiv2;
	
	var span = document.createElement('span');
	subDiv2.appendChild(span);
	div.txtDiv = span;
	
	subDiv = document.createElement('div');
	subDiv.className = 'clear';
	div.appendChild(subDiv);
	div.downArrowDiv = subDiv;
	
	div.nowId = null;
	
	if(div.currentStyle&&navigator.userAgent.indexOf("MSIE 7")==-1){//ie6
		var frame = document.createElement('iframe');
		frame.src = "javascript:''"
        frame.frameBorder = "0";
        frame.scrolling = "no";
        frame.className = "iframeShim";
        frame.style.zIndex = div.currentStyle.zIndex - 1;
		frame.style.width = parseFloat(div.offsetWidth) + 'px';
		frame.style.height = parseFloat(div.offsetHeight) + 'px';
		frame.style.visibility = 'hidden';
		frame.style.position = 'absolute';
		frame.style.top = '-100px';
		frame.style.left = '-100px';
		document.body.appendChild(frame);
		div.shim = frame;
	}
	return div;
}
function fnCloseChEnTips(){
	if(window['popupDivChEnTips']){
		window['popupDivChEnTips'].style.visibility = 'hidden';
		window['popupDivChEnTips'].nowId = null;
		if(window['popupDivChEnTips'].shim) window['popupDivChEnTips'].shim.style.visibility = 'hidden';
	}
}
myAttachEvent(document,'click',fnCloseChEnTips);

function resumeChEnFac(h){
	var s = this;
	s.html = h;
	s.id = s.html.id;
	myAttachEvent(s.html,'click',function(e){cancelBubble(e);});
	s.tips = s.html.getAttribute('tiptext')||'';
	s.divWidth = Math.max(s.html.getAttribute('divwidth')||parseFloat(s.html.offsetWidth),90);
	s.divFixX = s.html.getAttribute('xfix')||0;
	s.divFixY = s.html.getAttribute('yfix')||-8;//arrow's height = 8 (position:relative)
	s.divMaxH = s.html.getAttribute('maxheight')||100;
	s.lang = s.html.getAttribute('lang')||'cn';
	s.O = function(e){s.fnOpenPopup(e);};
	s.C = function(e){s.fnClosePopup(e);};
	if(!window['popupDivChEnTips']) window['popupDivChEnTips'] = createPopupDiv4ChEnTips();
	s.div = window['popupDivChEnTips'];
	s.txtDiv = s.div.txtDiv;
	s.upArrowDiv = s.div.upArrowDiv;
	s.downArrowDiv = s.div.downArrowDiv;
	s.hDiv = s.div.hDiv;
	myAttachEvent(s.html,'click',s.O);
}
resumeChEnFac.prototype = {
	fnOpenPopup : function(e){
		var s = this;
		if(s.div.nowId==s.id) return;
		if(s.div.nowId!=null&&s.div.nowId!=s.id){
			s.div.style.visibility = 'hidden';
			s.div.nowId = null;
			if(s.div.shim&&s.div.shim.style.visibility!='hidden') s.div.shim.style.visibility = 'hidden';
		}
		if(s.tips!=''){
		s.divWidth = Math.max(s.html.getAttribute('divwidth')||parseFloat(s.html.offsetWidth),90);
		s.div.style.width = s.divWidth + 'px';
		s.txtDiv.innerHTML = '<img src="http://myimg.zhaopin.com/images/blank.gif" align="absmiddle" width="13" height="13" class="iconHelp" title="您对应的'+(s.lang=='cn'?'中文':'英文')+'简历内容" alt="您对应的'+(s.lang=='cn'?'中文':'英文')+'简历内容">&nbsp;&nbsp;' + s.tips.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/ /g,'&nbsp;');
		s.hDiv.style.height = Math.min(parseFloat(s.txtDiv.offsetHeight)+7,s.divMaxH) + 'px';
		var pointer = s.getCoord();
		s.div.style.left = pointer.x + 'px';
		s.div.style.top = pointer.y + 'px';
		s.div.style.visibility = 'visible';
		s.div.nowId = s.id;
		if(s.div.shim){
			s.div.shim.style.left = pointer.x + 'px';
			s.div.shim.style.top = pointer.y + (s.upArrowDiv.className=='hintArr2'?-8:0) + 'px';
			s.div.shim.style.width = s.divWidth + 'px';
			s.div.shim.style.height = parseFloat(s.div.offsetHeight)+8 + 'px';//arrow's height = 8 (position:relative)
			s.div.shim.style.visibility = 'visible';
		}
		}
	},
	fnClosePopup : function(e){
		var s = this;
		fnCloseChEnTips();
	},
	getCoord : function(){
		var s = this;
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop,scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft;
		var wWH = $getWinWH();
		var divW = parseFloat(s.div.offsetWidth);
		var divH = parseFloat(s.div.offsetHeight);
		var htmlXY = $getXY(s.html);
		var p = {x:htmlXY.x+s.divFixX,y:htmlXY.y-divH+s.divFixY};
		if(p.x-scrollLeft+divW>wWH.w) p.x = Math.max(wWH.w-divW+scrollLeft-s.divFixX,0);
		if(p.y-scrollTop<0){
			p.y = htmlXY.y+parseFloat(s.html.offsetHeight)-s.divFixY;
			s.upArrowDiv.className = 'hintArr2';
			s.downArrowDiv.className = 'clear';
		}
		else{
			s.upArrowDiv.className = 'clear';
			s.downArrowDiv.className = 'hintArr';
		}
		return p;
	}
}