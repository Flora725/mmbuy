$(function(){
	var objParam = cache.getParam();
	var urll;
	if(objParam.origin == 1){
		urll = "http://192.168.15.164:3000/api/getmoneyctrlproduct";
	}else if(objParam.origin == 2){
		urll = "http://192.168.15.164:3000/api/getdiscountproduct";
	}
	
	$.ajax({
		type:"get",
		url: urll,
		data:{"productid": objParam.productid },
		success: function(data){
			$(".goods").html(template("supervalue",data));
			console.log(data);
		},
	});	
})