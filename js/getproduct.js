$(function(){
	var objParam = cache.getParam();
//	var para = 	window.location.search.split("&");
//	var cateid = /\d+/.exec(para[0])[0];
//	var proid = /\d+/.exec(para[1])[0];
	$.ajax({
		type:"get",
//		url:"http://192.168.15.164:3000/api/getcategorybyid",
		url:"http://localhost:3000/api/getcategorybyid",
		data:{"categoryid": objParam.categoryid},
		success: function(data){
			$(".cateid").html("&gt;&nbsp;"+data.result[0].category +"&nbsp;&gt;&nbsp;");	
		}
	});

	$.ajax({
		type:"get",
		url:"http://192.168.15.164:3000/api/getproduct",
		url:"http://localhost:3000/api/getproduct",
		data:{"productid": objParam.productid},
		success: function(data){
			$(".prointroduce").html(template("intro",data));
			$(".choose strong").html(data.result[0].productName.split(" ")[0]);
			
		}
	});
	
	$.ajax({
		type:"get",
		url:"http://192.168.15.164:3000/api/getproductcom",
		url:"http://localhost:3000/api/getproductcom",
		data:{"productid": objParam.productid},
		success: function(data){
			$(".detaiscol").html(template("getpro",data));
		}
		
	});
	
	

	
	
	
	
})
