$(function(){
	$.ajax({
		tXpe:"get",
//		url:"http://192.168.1.29:3000/api/getbaicaijiatitle",
		url:"http://localhost:3000/api/getbaicaijiatitle",
		success: function(data) {
			$(".nav-tabs").html(template("lis",data));
			$(".nav-tabs > li:first-child").addClass("active");
			$(".tab-content").html(template("divs",data));
			$(".tab-content > div:first-child").addClass("active");
			$.ajax({
				tXpe:"get",
//					url:"http://192.168.1.29:3000/api/getbaicaijiaproduct",
				url:"http://localhost:3000/api/getbaicaijiaproduct",
				data: {titleid: 0},
				success: function(data2){
					$(".productlist").html(template("goods",data2));
					cache.save(0,data2);
				}
			});	
			$(".nav-tabs li a").on("click",function() {
				var urll = /\d/.exec($(this).attr("aria-controls"))[0];
				var seek = cache.seek(urll);
				if(seek) {
					$(".productlist").html(template("goods",seek));
					console.log(222);
				} else {
					$.ajax({
						tXpe:"get",
//						url:"http://192.168.1.29:3000/api/getbaicaijiaproduct",
						url:"http://localhost:3000/api/getbaicaijiaproduct",
						data: {titleid: urll},
						success: function(data2){
							$("#to"+urll+">div").html(template("goods",data2));
							cache.save(urll,data2);
						}
					});	
				}
			})
			
			var parent = document.querySelector(".category");
			var child = document.querySelector(".category > ul")
		  	var childlis = document.querySelectorAll(".category > ul > li");
		  	var totalWidth = 0;
		  	for ( var i = 0; i < childlis.length; i++){
		  		totalWidth += childlis[i].offsetWidth;
		  	}
		  	var parentWidth = parent.offsetWidth;
		    /*translateX 初始的定位 其实就是最大定位 0*/
		    var maxX = 0;
		    var minX = parentWidth-totalWidth;
		    /*自己定义缓冲的距离*/
		    var distance = 100;
		    /*translateX 最大滑动定位*/
		    var maxSwipe = maxX + 100;
		    /*translateX 最小滑动定位*/
		    var minSwipe = minX - 100;
		
		    /*第一步  1.菜单滑动起来*/
		    var startX = 0;
		    var moveX = 0;
		    var distanceX = 0;
		    var isMove  = false;
		    var currX = 0;
		
		    /*定义公用的方法*/
		    var addTransition = function(){
		        child.style.webkitTransition = "all .2s";
		        child.style.transition = "all .2s";
		    }
		    var removeTransition = function(){
		        child.style.webkitTransition = "none";
		        child.style.transition = "none";
		    }
		    var setTranslateX = function(x){
		        child.style.webkitTransform = "translateX("+x+"px)";
		        child.style.transform = "translateX("+x+"px)";
		    }
		
		    /*绑定事件*/
		    child.addEventListener('touchstart',function(e){
		        startX = e.touches[0].clientX;
		    });
		    child.addEventListener('touchmove',function(e){
		        moveX = e.touches[0].clientX;
		        distanceX = moveX-startX;
		        removeTransition();
		        if((currX + distanceX) < maxSwipe &&　(currX + distanceX) > minSwipe){
		            setTranslateX(currX + distanceX);
		        }
		    });
		    window.addEventListener('touchend',function(e){
		        /*第二步 3.当触摸结束的时候  需要判断是否在定位区间内  否则吸附回去  定位回去*/
		        /*当往下滑的时候 大于 最大定位*/
		        if(( currX + distanceX)>maxX){
		            currX = maxX;
		            addTransition();
		            setTranslateX(currX);
		        }
		        /*当往上滑的时候 小于 最小定位*/
		        else if(( currX + distanceX)<minX){
		            currX = minX;
		            addTransition();
		            setTranslateX(currX);
		        }
		        else{
		            /*记录当前的定位   上一次当前的定位 + 这一次改变的定位*/
		            currX = currX + distanceX;
		        }
		
		        /*重置所有的参数  不重置currX */
		        startX = 0;
		        moveX =0;
		        distanceX = 0;
		        isMove = 0;
		    });
			for(var i = 0; i<childlis.length; i++){
				childlis[i].index = i;
				childlis[i].onclick = function(){
					var total = 0;
					for ( var j = 0; j < this.index; j++){
		  				total += childlis[j].offsetWidth;
		  		}
					console.log(total);
		            addTransition();
		            setTranslateX(-total);
				}
			}
		}
	});
})  


