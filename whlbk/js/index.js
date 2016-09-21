$(function(){

	var count=0;
		timer=null;
	var	nums=$(".left_m>ol>li").length;
//---------鼠标滑过imgNav对应图片滑动-------------
	$(".left_m>ol>li").on("mouseover",function(){
		count=$(this).index();
		play();
	})

//---------点击右按钮imgNav+img对应变动-------------
	$("#you").on("click",function(){
		count++;
		if(count>(nums-1)) count=0;
		play();
	})	

//---------点击左按钮imgNav+img对应变动-------------
	$("#zuo").on("click",function(){
		count--;
		if(count<0) count=nums-1;
		play();
	})	

//--------自动轮播--------------------------------
	autoplay()
	function autoplay(){
		clearInterval(timer)
		timer=setInterval(function(){
			count++;
			if(count>(nums-1)) count=0;
			play();
		},2000)
	}



//-------imgNav+img对应变动-----------------------
	function play(){
		$(".left_m>ol>li").eq(count).addClass("bg1").siblings().removeClass("bg1");
		$(".left_m>ul").stop().animate({
			"margin-left":-(count*595)+"px"
		},2000)
	}


//---------鼠标离开大盒子正常轮播，鼠标访问大盒子停止轮播
	$(".left_m").on("mouseover",function(){
		clearInterval(timer)
	}).on("mouseout",function(){
		autoplay()
	})
})

//跳转页面
$("dl").on("click","dt",function(){
	location.href="tiao.html";
})

//返回顶部
$("#scroll").on("click",function(){
		$(document).scrollTop(0);
})
//二维码
$('#hua').on("mouseover",function(){
	$("#erwei").show();
}).on("mouseout",function(){
	$("#erwei").hide();
})