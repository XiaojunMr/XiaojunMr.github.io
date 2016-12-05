// Provides base functions for using AJAX

// Cross browser compatible creation of XmlHttpRequest object
function createRequest(){
	var request;
	// IE
	try{
		request = new ActiveXObject("Msxml2.XMLHTTP");
	}
	catch(e){
		try{
			request = new ActiveXObject("Microsoft.XMLHTTP");
		} 
		catch(oc){
			request = null;
		}
	}
	
	// Mozilla
	if(!request && typeof XMLHttpRequest != "undefined"){
		request = new XMLHttpRequest();
	}
	
	return request;
}

// Fires a callback, sending data to page, with the response handled by handler
function submitCallback(data,page, handler,method,objPar){
	var methodTxt = 'post';
	if(submitCallback.arguments[3]) methodTxt=submitCallback.arguments[3];
	var request = createRequest();
	if(request){
			if(methodTxt.toLowerCase()=='post'){
				// prepare request
				request.open('POST', page, true);
				request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

				// when the request is answered, relayResponse() will be called
				request.onreadystatechange = function(){ relayResponse(request, handler,objPar); }

				// fire off the request
				request.send(data);
			}
			else if(methodTxt.toLowerCase()=='get'){
				// prepare request
				request.open('GET',page+'?'+data,true);
				
				// when the request is answered, relayResponse() will be called
				request.onreadystatechange = function(){ relayResponse(request, handler,objPar); }
				
				// fire off the request
				request.send(null);
			}
	}
	else{
		// request object wasn't instantiated
		handler(false, 'Unable to create request object.');
	}


}

// Passes response data from a callback to the handler function
function relayResponse(request, handler,objPar){
	if(request.readyState == 4){
		if(request.status == 200){
			var responseText = request.responseText;
			//alert(responseText);
			// ugly hack for international pages adding extra HTML
			var index = responseText.indexOf("<!DOCTYPE");
			if(index != -1){
				responseText = responseText.substring(0, index);
			}
			
			// success, give response text to handler function
			handler(true, responseText,objPar);
		}
		else{
			// page returned error code (such as 404)
			handler(false, 'Ajax page returned error code ' + request.status + '.',objPar);
		}
	}
}
function ua(s){
	if(encodeURIComponent) return encodeURIComponent(s);
	if(escape) return escape(s);
}