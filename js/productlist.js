$(function(){
	var paraobj = cache.getParam();
	var pages;
	var pre = $(".page>button:first-child");
	var next = $(".page .fr");
	var curpos = 1;
	var options;
	
	$.ajax({
		type:"get",
		url:"http://192.168.1.29:3000/api/getproductlist",
//		url:"http://192.168.15.164:3000/api/getproductlist",
		data: {categoryid: paraobj.categoryid, pageid: paraobj.category},
		success: function(data){
			$(".details").html(template("tem",data));
			$(".choose strong").html(paraobj.category);
			cache.save(1,data);
			pages = Math.ceil(data.totalCount / data.pagesize);
			for(var i = 0;i<pages;i++){
				$("<option>"+(i+1)+"</option>").appendTo($("#pg"));
			}
			options = $("option");
			$("#pg").on("change",function(){
				curpos = $('#pg  option:selected').html();
				pageto(curpos);
				cache.save(curpos,data);
			});	
		}
	});
	
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
		}else if (cur > pages){
			cur == pages;
		}else if(cur == 1) {
			pre.prop({"disabled":"true"});
			next.removeAttr("disabled");
		}else if (cur == pages){
			next.attr({"disabled":"true"});
			pre.removeAttr("disabled");
		}else{
			pre.removeAttr("disabled");
			next.removeAttr("disabled");
		}
		options.removeAttr("selected");
		$(options[cur-1]).prop("selected","true");
		$('#pg  option:selected').html(cur);
		foo(cur);
	}

	function foo (num){
		$.ajax({
			type:"get",
			url:"http://localhost:3000/api/getproductlist",
//			url:"http://192.168.15.164:3000/api/getproductlist",
			data: {categoryid: paraobj.categoryid, pageid: num},
			success: function(data){
				$(".details").html(template("tem",data));
				$(".choose strong").html(paraobj.category);
			}
		});
	}	
})