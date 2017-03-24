$(function(){
	$.ajax({
		type:"get",
//		url:"http://192.168.15.164:3000/api/getcategorytitle",
//		url:"http://192.168.1.29:3000/api/getcategorytitle", myservicer
		url:"http://localhost:3000/api/getcategorytitle",
		
		datatype: "jsonp",
		success: function(data){
			$(".panel-group").html(template("cate",data));
			var arrhead = $(".category .panel-heading");
			var arrtitile = $(".category .panel-title");
			var arrul = $(".panel-body > ul");
			for(var i = 0; i<arrhead.length;i++){
				arrhead[i].index = i;
				arrtitile[i].index = i;
				arrul[i].index = i;
			}
			
			$(".category .panel-heading").on("click",function(){
				var that = this.index;
				$($(".panel-title span:first-child")[that]).toggleClass("hi");
				$($(".panel-title span:last-child")[that]).toggleClass("sh");
				if ($(arrul[that]).html()==""){
					$.ajax({
						type:"get",
	//					url:"http://192.168.1.29:3000/api/getcategory",
						url:"http://localhost:3000/api/getcategory",
						data:{titleid: data.result[that].titleId},
						datatype: "jsonp",
						success: function(data2){
							var source = '{{each result as value i}}'
							+ '<li class = "col-xs-4">'
							+ '<a href="productlist.html?categoryid={{value.categoryId}}&category={{value.category}}" >{{value.category}}</a>'
							+ '</li>'
							+ '{{/each}}';
							
							var render = template.compile(source);
							var html = render(data2);
							$(arrul[that]).html(html);	
						}
					})
				}	
			});
		}	
	});
})
