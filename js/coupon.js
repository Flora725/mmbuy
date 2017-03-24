$(function(){
	$.ajax({
		type:"get",
		url:"http://localhost:3000/api/getcoupon",
		success: function(data){
			$(".coupondetail").html(template("lis",data));		
		}
	});	
})
