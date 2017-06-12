/*
* @Author: Marte
* @Date:   2017-06-05 10:53:53
* @Last Modified by:   Marte
* @Last Modified time: 2017-06-09 09:10:25
*/
$(document).ready(function(){
    $(".aside-left ul li").first().addClass('aside-hover')
});

   $(function(){
          $("#tablea").find(".box-room:first").show().siblings().hide();
          $("#oranger a").on("click",function(){
             var index=$(this).index();
             $(this).parent().next().find(".box-room").hide().eq(index).show();
             $(this).addClass("hover").siblings().removeClass("hover");
          })
})
     $(function(){
          $("#tablea-1").find(".box-room-1:first").show().siblings().hide();
          $("#oranger-1 a").on("click",function(){
             var index=$(this).index();
             $(this).parent().next().find(".box-room-1").hide().eq(index).show();
             $(this).addClass("hover").siblings().removeClass("hover");
          })
})
 function chosePerson(obj){
    var type = $(obj).data('type')
   if(type == 1){
        $(".aside-right").show().siblings().hide()
        $(obj).addClass('aside-hover').siblings().removeClass('aside-hover');
    }
    if(type == 2){
         $("#11").show().siblings().hide()
        $(obj).addClass('aside-hover').siblings().removeClass('aside-hover');
    }
    if(type == 3){
        $("#12").show().siblings().hide()
        $(obj).addClass('aside-hover').siblings().removeClass('aside-hover');
    }
    if(type == 4){
        $(".aside-right-room").show().siblings().hide()
        $(obj).addClass('aside-hover').siblings().removeClass('aside-hover');
    }
    if(type == 5){
        $(".aside-right-family").show().siblings().hide()
        $(obj).addClass('aside-hover').siblings().removeClass('aside-hover');
    }
     if(type == 6){
        $(".aside-right-wallet").show().siblings().hide()
        $(obj).addClass('aside-hover').siblings().removeClass('aside-hover');
    }
   }

   /*个人主页*/
   function chosePersonTwo(obj){
    var type = $(obj).data('type')
   if(type == 11){
        $(".aside-right").show().siblings().hide()
        $(obj).addClass('aside-hover').siblings().removeClass('aside-hover');
    }
    if(type == 21){
         $("#11").show().siblings().hide()
        $(obj).addClass('aside-hover').siblings().removeClass('aside-hover');
    }
    if(type == 31){
        $(".aside-right-fanced").show().siblings().hide()
        $(obj).addClass('aside-hover').siblings().removeClass('aside-hover');
    }
    if(type == 41){
        $(".aside-right-fance").show().siblings().hide()
        $(obj).addClass('aside-hover').siblings().removeClass('aside-hover');
    }
    if(type == 51){
        $(".aside-right-tan").show().siblings().hide()
        $(obj).addClass('aside-hover').siblings().removeClass('aside-hover');
    }
     if(type == 61){

    }
   }
   /*个人主页*/

   function changeMes(obj){
    $(obj).parent().parent().hide()
    $(".aside-right-change").show()
   }
   function upIt(obj){
     $(obj).parent().parent().hide()
     $(".aside-right").show()
   }

   /*粉丝关注*/
   function follow(){
    $(".add-vivw").html("<span>已关注</span>").css({"background":"#aaaaaa"})
   }
   /*朋友圈*/
   function chosePersonThree(obj){
    var type = $(obj).data('type');
    switch (type){
        case 111:
        $(obj).addClass('aside-hover').siblings().removeClass('aside-hover')
        $("#friend-change-1").show().siblings().hide()
        break;
        case 222:
        $(obj).addClass('aside-hover').siblings().removeClass('aside-hover')
        $("#friend-change-2").show().siblings().hide()
        break;
        case 333:
        $(obj).addClass('aside-hover').siblings().removeClass('aside-hover')
        $("#friend-change-3").show().siblings().hide()
        break;
        case 444:
        $(obj).addClass('aside-hover').siblings().removeClass('aside-hover')
        $("#friend-change-4").show().siblings().hide()
    }
   }
   /*我的关注*/
   function followed(obj){
    var rest = confirm('是否取消关注')
    if(rest){
         $(obj).html("<span>+</span><span>关注</span>").css({"background":"#fb9400"})
    }

   }