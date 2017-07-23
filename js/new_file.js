$(".leftNav li").on("mouseenter",function(){
	$(this).find("div").css("display","block")
})
$(".leftNav li").on("mouseleave",function(){
	$(this).find("div").css("display","none")
})
$("leftNav leftNav_right li").on("mouseenter",function(){
	$(this).find("div").css("display","block")
})
$("leftNav leftNav_right li").on("mouseleave",function(){
	$(this).find("div").css("display","none")
})
$(".searchTxt").on("click",function(){
	$(".list").toggle();
})

$(".tab_title li").on("mouseenter",function(){
//	$(".tab_title li").attr('class','');
    var i = $(this).index();
	$(".item").eq(i).addClass("show").siblings().removeClass("show");
    $(this).addClass("active").siblings().removeClass("active");
})
$(".y li").on("mouseenter",function(){
    var i = $(this).index();
    $('.yi').eq(i).addClass("show").siblings().removeClass("show");
    $(this).addClass("active").siblings().removeClass("active");	
})
$('.allq').on('click',function(){
	$('.list_item_box input').attr('checked',true)
})
$('.all').on('click',function(){
	$('.list_item_box input').attr('checked',false);
})
$(".e li").on("mouseenter",function(){
	    var i = $(this).index();
	    $(".dzb-w .tabs").eq(i).css('display','block').siblings().css('display','none');
	    $(this).addClass("active").siblings().removeClass("active");	
	})
$(".comTitle_tabs li").on("mouseenter",function(){
	    $(this).addClass("active").siblings().removeClass("active");	
	})
$(".s li").on("mouseenter",function(){
	    var i = $(this).index();
	    $(".tabs_item1").eq(i).css('display','block').siblings().css('display','none');
	})
$(".b li").on("mouseenter",function(){
	    var i = $(this).index();
	    $(".tabs_item3").eq(i).css('display','block').siblings().css('display','none');
	})
$(".j li").on("mouseenter",function(){
	    var i = $(this).index();
	    $(".tabs_item4").eq(i).css('display','block').siblings().css('display','none');
	})
$('.drop i').on('click',function(){
	var i = $(this).index();
	$(this).addClass('active').siblings().removeClass('active');
	$('.c_list_scroll').find('ul').eq(i).removeClass('hide').siblings().addClass('hide');
})
$('.prev fl').on('click',function(){
	var i = $('.drop i').index();
	i--;
	$('.drop i').eq(i).addClass('active').siblings().removeClass('active');
	$('.c_list_scroll').find('ul').eq(i).removeClass('hide').siblings().addClass('hide');
    
})
$('.next fl').on('click',function(){
	var i = $('.drop i').index();
	i++;
	$('.drop i').eq(i).addClass('active').siblings().removeClass('active');
	$('.c_list_scroll').find('ul').eq(i).removeClass('hide').siblings().addClass('hide');
    
})
$('.day a').on('mouseenter',function(){
	var i = $(this).index();
	 $(".w div").eq(i).removeClass('show').siblings().addClass('show');
	    $(this).addClass("active").siblings().removeClass("active");	
})
$('.taobao_nb a').on('mouseenter',function(){
	var i = $(this).index();
	 $(".taobaoImg").eq(i).css('display','block').siblings().css('display','none');
	    $(this).addClass("active").siblings().removeClass("active");	
})
$('.photo_prev').on('click',function(){
	$('.photo_list').css({'left':'-400px'});
})
$('.photo_next').on('click',function(){
	$('.photo_list').css({'left':'0px'});
})
