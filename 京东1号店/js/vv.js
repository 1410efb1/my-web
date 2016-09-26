;(function(){

	init();
	function init(){
		//头部tab切换效果
		tab();
		//banner 图片 X 号 关闭
		ban_close();
		//搜索默认字体
		focu();
		//我的购物车
		shop();
		//左侧商品导航部分
		tab_side();
		//透明图片轮播
		Imgautoplay();
		//楼层tab切换
		main_nav();
		//楼层内部 图片轮播
		main_img();
		//楼层效果
		floor_jd();
	}
function tab(){
		var $head_nav=$(".head .aa_s"),
			$head_tab=$head_nav.siblings(".erji");
			$.each($head_nav,function(i,v){
					$(v).on("mouseover",function(){
						$(this).addClass("aa_v");
						$head_tab.eq(i).show();
					})
					$(v).on("mouseout",function(){
						$(this).removeClass("aa_v");
						$head_tab.eq(i).hide();
					})
				
			})

			$.each($head_tab,function(i,v){
					$(v).on("mouseover",function(){
						
						$head_nav.eq(i).addClass("aa_v");
						$(this).show();
					})
					$(v).on("mouseout",function(){
						$head_nav.eq(i).removeClass("aa_v");
						$(this).hide();
					})
				
			})
			
			
}
function ban_close(){
	var $clo=$("#banner span");
	$clo.on("click",function(){
		$("#banner").hide();
	})
}
function focu(){
	$("#tet").on("focus",function(){
		$(this).val("");
	})
	$("#tet").on("blur",function(){
		if($(this).val()==""){
			$(this).val("限时秒杀");
		}
	})
}
function shop(){
	var ban_sps=$("#ban_sps"),
		ban_spa=$("#ban_spa"),
		ems=$("#ban_sps em");
		ban_sps.on("mouseover",function(){
			ems.show();
			$(this).addClass("yy");
		})
		ban_sps.on("mouseout",function(){
			ems.hide();
			$(this).removeClass("yy");
		})
		ems.on("mouseover",function(){
			$(this).show();
			ban_spa.addClass("yy");
		})
		ems.on("mouseout",function(){
			$(this).hide();
			ban_spa.removeClass("yy");
		})
}
function tab_side(){
		var $head_nav=$("#left>ul>li"),
			$head_tab=$("#left>div");
			$.each($head_nav,function(i,v){
					$(v).on("mouseover",function(){
						$(this).addClass("tt");
						$head_tab.eq(i).show();
					})
					$(v).on("mouseout",function(){
						$(this).removeClass("tt");
						$head_tab.eq(i).hide();
					})
				
			})

			$.each($head_tab,function(i,v){
					$(v).on("mouseover",function(){
						
						$head_nav.eq(i).addClass("tt");
						$(this).show();
					})
					$(v).on("mouseout",function(){
						$head_nav.eq(i).removeClass("tt");
						$(this).hide();
					})
				
			})
			
}
function Imgautoplay(){
	var timer=null,
		i=0,
		lis=$("#center .ulss").children(),
		los=$("#center .ols").children(),
		$btn1=$("#btn1"),
		$btn2=$("#btn2");
		//定义一个函数  变化函数  供以后调用
		function change(){
			lis.eq(i).stop().fadeIn(600).siblings().stop().fadeOut(600);
			los.eq(i).addClass("oo").siblings().removeClass("oo");
		}
		//轮播自动定时器
		autoPlay();
		function autoPlay(){
			timer=setInterval(function(){
				i++;
				if(i>=lis.length) i=0;
				change()
			},2000)
		}
		los.on("mouseenter",function(){
			i=$(this).index();
			change();
		})
		$("#center").on("mouseenter",function(){
			clearInterval(timer);
			$btn1.show();
			$btn2.show();
		}).on("mouseleave",function(){
			autoPlay();
			$btn1.hide();
			$btn2.hide();

		})
		$btn2.on("click",function(){
			i++;
			if(i>=lis.length) i=0;
			change()
		})
		$btn1.on("click",function(){
			i--;
			if(i<0) i=lis.length-1;
			change()
		})
}
function main_nav(){
	function cvc(tab){
		var lis=$(tab).find("ol.ols>li"),
			los=$(tab).find("ul.uls>li");
			//console.log(lis);
			//console.log(los);
			lis.on("mouseover",function(){
				
				var k=$(this).index(),
					$as=$(this).children("a"),
					$a_s=$(this).siblings("li").children("a");
					$as.addClass("vv");
					$a_s.removeClass("vv");
				los.eq(k).show().siblings().hide();

			})
	}
	cvc("#f_1_cn");
	cvc("#f_2_cn");
	cvc("#f_3_cn");
	cvc("#f_4_cn");
	cvc("#f_5_cn");
	cvc("#f_6_cn");
	cvc("#f_7_cn");
	cvc("#f_8_cn");
	cvc("#f_9_cn");
	cvc("#f_10_cn");
	

}
function main_img(){
	function ImgPlay(imc){
			var uls=$(imc).find("ul"),
				los=$(imc).find("ol").children("li"),
				btn1=$(imc).find(".btn_1"),
				btn2=$(imc).find(".btn_2"),
				len=uls.children("li").length,
				W=$(imc).width(),
				timer=null,
				j=0;

			$(imc).on("mouseover",function(){
				btn1.show();
				btn2.show();
				clearInterval(timer);
			}).on("mouseout",function(){
				btn1.hide();
				btn2.hide();
				autoPlay();
			})
			autoPlay();
			function autoPlay(){
				timer=setInterval(function(){
					j++;
				  if(j>len-1) j=0;
				  change();
				},2000);
			}
			//定义一个函数  变化函数
			function change(){
			   uls.stop().animate({"margin-left":-(j*W)},200);
			   los.eq(j).addClass("hk").siblings().removeClass("hk");
			}
			los.on("mouseover",function(){
				j=$(this).index();
				change();
			})


			btn2.on('click',function(){
	            j++;
	            if(j>len-1) j=0;
	              change()
        	})
        
	        btn1.on('click',function(){
	            j--;
	            if(j<0)  j=len-1;    
	           change()
	        })

	}
	ImgPlay("#f_1_oo");
	ImgPlay("#f_2_oo");
	ImgPlay("#f_3_oo");
	ImgPlay("#f_4_oo");
	ImgPlay("#f_5_oo");
	ImgPlay("#f_6_oo");
	ImgPlay("#f_7_oo");
	ImgPlay("#f_8_oo");
	ImgPlay("#f_9_oo");
	ImgPlay("#f_10_oo");
	ImgPlay("#f_11_ol");
	ImgPlay("#f_11_or");
}	
function floor_jd(){
	$(window).on("scroll",function(e){
		var scrollTop=$(this).scrollTop(),   //获取滚动条的高度
			$als=$(".als_nav"),           //获取 缩写楼层的a 楼层集合
			$floorId="",                //定义变量 为以后获取id
			$floor=$("div[id^=floor]");     //获取实际参数楼层id参数数组
		$floor.each(function(index,value){
			var offsetTop=$(value).offset().top;
			if(scrollTop>offsetTop){
				$floorId="#"+$(this).attr("id");//为定义变量添加数组
			}else{
				return false;   //没有的话不添加数组
			}
		});
		$als.filter('[href='+$floorId+']')
			.addClass("cur").siblings().removeClass("cur");
		if(scrollTop<$floor.first().offset().top || scrollTop>$floor.last().offset().top+$floor.last().height()){
			$als.removeClass("cur");
			$(".als").hide();
		}else{
			$(".als").show();
		}

	})
}
})(jQuery)