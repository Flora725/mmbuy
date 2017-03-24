var cache = (function(){
	var ten = [];
	var options;
	//这个数组相当于缓存，用来存放头10条数据
	var tasks = (JSON.parse(window.localStorage.getItem("goods"))) || []; 
	//这个数组相当于localstorage,用于存放11条往后的数据
	return {
		seek: function(pageid){
			var have = false;
			//先在内存中寻找,再在localstorage中寻找,找到返回对应的数据以方便模板使用,否则false
			for(var i = 0; i<ten.length; i++){
				for(var key in ten[i]){
					if(key == pageid){
						have = true;
						console.log("seek");
						return ten[i][key];
					}
				}
			}
			for(var i = 0; i<tasks.length; i++){
				for(var key in tasks[i]){
					if(key == pageid){
						have = true;
						return tasks[i][key];
					}
				}
			}
			return have;
		},
		save: function(pageid, data){
			//先判断缓存中有没有10条，够的话存到localstorage中
			var obj = {};
			obj[pageid] = data;
			if(ten.length<10){
				ten.push(obj);
			}else{
				tasks.push(obj);
				window.localStorage.setItem("goods",JSON.stringify(tasks));	
			}
			console.log("save");
		},
		getParam: function(){
			var param = window.location.search;
			var arr = param.replace("?","").split("&");
			var obj = {};
			arr.forEach(function(v,i){
				var a = v.split("=");
				if(/\%+/.exec(a[1])==null){
					obj[a[0]] = a[1];
				}else{
					obj[a[0]] = decodeURI(a[1]);
				}
			});
			return obj;	
		}	
	}
})();

