$(function(){
	$.ajax({
		type:"get",
//		url:"http://192.168.15.164:3000/api/getindexmenu",
		url:"http://localhost:3000/api/getindexmenu",
		datatype: "jsonp",
		success: function(data){
			$(".category > .row").html(template("cateli",data));	
			$(".category ul > li:nth-child(8)").on("click",function(){
				if($(".category ul > li:last-child").css("display")=="none"){
					$(".category ul > li:nth-last-child(-n+4)").css("display","block");
				}else{
					$(".category ul > li:nth-last-child(-n+4)").css("display","none");
				}
			})
		}
	});
	
	$.ajax({
		type:"get",
//		url:"http://192.168.15.164:3000/api/getmoneyctrl",
		url:"http://localhost:3000/api/getmoneyctrl",
		datatype: "jsonp",
		success: function(data){
			$(".recodetails > ul").html(template("recommendli",data));
		}
	});
	
	
	
	
	
})


