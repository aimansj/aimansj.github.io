$(document).ready(function(){

    $(window).on("beforeunload",function(){
        $(window).scrollTop(0);
    })
    
    $("#kypj_detail").css("display","none");
    $("#smktkj_detail").css("display","none");
    $("#slide").css("display","none");
    $(document).scroll(function(){
        if (window.innerHeight>305)
        {
            $(".Top").css("transition", "1s ease");
            $(".Top").css("height", "40%");
        }
        else{
            $(".Top").css("height", "100%");
        }
    });
    $(".Top").click(function(){
        if (window.innerHeight>305)
        {
            $(".Top").css("transition", "1s ease");
            $(".Top").css("height", "40%");
        }
        else{
            $(".Top").css("height", "100%");
        }
    })

    $("#kypj").on('mouseenter',function(){
        $("#kypjimg").css("fade-in","right")
        $("#kypj_detail").css("display","block")
        $(".education").css("text-align","center")
        $("#kypjimg").css("text-align","right")
    
    }).on('mouseleave',function(){
    
        $("#kypj_detail").css("display","none")
        $(".education").css("text-align","center")
        $("#kypjimg").css("text-align","center")

    });

    $(".skill img").hover(function(){
        
        $(".skill img").css("opacity","0.4")
        $(".skill img").css("filter","alpha(opacity=40)")
        $(".skill span").css("display","block")

    },function(){
        $(".skill span").css("display","none")
        $(".skill img").css("opacity","100")
        $(".skill img").css("filter","alpha(opacity=100)")
    });

    $(".skill img").click(function(){
        $(".skill span").css("display","none")
        $("#slide").slideToggle("slow");
    })
});