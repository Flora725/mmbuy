$(function(){
	var pages;
	var curpos = 1;
	var pre = $(".page>button:first-child");
	var next = $(".page .fr");
	var options; 
	
	$.ajax({
		type:"get",
//		url: "http://192.168.15.164:3000/api/getmoneyctrl", 老师
		url: "http://localhost:3000/api/getmoneyctrl",
		success: function(data){
			$(".details").html(template("tem",data));
			cache.save(0,data);
			pages = Math.ceil(data.totalCount / data.pagesize);
			for(var i = 0;i<pages;i++){
				$("<option>"+(i+1)+"/"+pages+"</option>").appendTo($("#pg"));
			}
			options = $("option");
			$("#pg").on("change",function(){
				curpos = ($('#pg  option:selected').html()).replace("/15","");
				pageto(curpos);
				cache.save(curpos,data);
			});
		}
	});
	window.onunload = function(){
		window.localStorage.removeItem("goods");
	}
	pre.on("click",function(){
		curpos--;
		pageto(curpos);
	})
	next.on("click",function(){
		curpos++;
		pageto(curpos);
	})
	function pageto (cur){
		if(cur < 1){
			cur = 1;
		}else if(cur == 1) {
			pre.prop({"disabled":"true"});
			next.removeAttr("disabled");
		}else if (cur > pages){
			cur == pages;
		}else if (cur == pages){
			next.attr({"disabled":"true"});
			pre.removeAttr("disabled");
		}else{
			pre.removeAttr("disabled");
			next.removeAttr("disabled");
		}
		options.removeAttr("selected");
		$(options[cur-1]).prop("selected","true");
		$('#pg  option:selected').html(cur+"/"+pages);
		foo(cur);
	}
	
	function foo (num){
		num--;
		var data = cache.seek(num);
		if(data){
			$(".recodetails > ul").html(template("tem",data));
		}else {
			$.ajax({
				type:"get",
	//			url:"http://192.168.1.29:3000/api/getproductlist",
				url:"http://localhost:3000/api/getmoneyctrl",
				data: {pageid: (num)},
				success: function(data){
					$(".recodetails > ul").html(template("tem",data));				
					cache.save(num, data);
				}
			});
		}
		
	}
})
