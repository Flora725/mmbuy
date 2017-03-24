$(function(){
	$.ajax({
		type:"get",
		url:"http://192.168.15.164:3000/api/getinlanddiscount",
		success: function(data){
			var index = 0;
			var arr = data.result;
			var data = [];
			for ( var i = 0;i<5;i++){
				var obj = {};
				obj.result = arr.slice(i,i+4);	
				data[i] = obj;	
			}
			$(".discountlist > .row").html(template("cheap",data[index]));
			
			$(window).on("scroll",function(){
				var pageHeight = $("header").height() + $(".discountlist").height();
				var srolHeight = $(window).scrollTop() + $(window).height();
				if(srolHeight > pageHeight){
					
					if(index<4){
						console.log("bigge");
						index++;
						var extra = $("<div></div>").html(template("cheap",data[index]));
						$(".discountlist > .row").append(extra);
						if(index==4){
							$(window).off("scroll");
						}
					}
				}
			});	
		}
	});
})
