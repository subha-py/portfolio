$(function(){
        function setImg(src,id){
        $("#main").attr("src",src)
        };
        var current_li;
        $("#portfolio img").click(function(){
            var src=$(this).attr("src")
            var id=$(this).attr("id")
            current_li=$(this).parent()
            setImg(src,id)
            $("#frame").fadeIn();
            $("#overlay").fadeIn();
        });
        $("#overlay").click(function(){
            $(this).fadeOut()
            $("#frame").fadeOut()
        });
        $("#right").click(function(){
            if(current_li.is(":last-child")){
                var next_li=$("#portfolio li").first();
            }
            else{
                var next_li=current_li.next()
            }
            var next_src=next_li.children("img").attr("src");
            var id=next_li.children("img").attr("id");
            setImg(next_src,id)
            current_li=next_li
        });
        $("#left").click(function(){
            if(current_li.is(":first-child")){
                var next_li=$("#portfolio li").last();
            }
            else{
                var next_li=current_li.prev()
            }
            var next_src=next_li.children("img").attr("src");
            var id=next_li.children("img").attr("id");
            setImg(next_src,id)
            current_li=next_li
        });
        $("#left,#right").mouseover(function(){
            $(this).css("opacity","1.0")
        });
        $("#left,#right").mouseleave(function(){
            $(this).css("opacity","0.5")
        });
});