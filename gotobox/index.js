var $dlgGoto=(function(){
      var html=
      "<div class='notepad-dlg-goto'>"+
      "<div class='dialogbox'>"+
          "<div class='gttitlebar'>"+
            "<p class='gttitle'>转到指定行</p>"+
            "<span class='close'>×</span>"+
          "</div>"+
          "<div class='main'>"+
            "<label>行号(L):</label>"+
            "<br>"+
            "<input class='text-line-mum' type='text'>"+
            "<br>"+
            "<input class='btn-goto' type='button' value='转到'>"+
            "<input class='btn-close' type='button' value='取消'>"+
          "</div>"+
      "</div>"+
  "</div>"
  var $dlg=$(html),
      cfg = {
          container:'body',
          num:6,
          title:'同意',
          onClick:null
      };
    function show(conf){
        // 1.DOM draw
        $(cfg.container).append($dlg);
        $.extend(cfg,conf);
        // 2.event bind
        $('.close').hover(function(){
            $('.close').css('backgroundColor', 'red');
            $('.close').css('color', 'white');
        })
        $('.close').mouseout(function(){
            $('.close').css('backgroundColor', 'white');
            $('.close').css('color', 'gray');
        })
        $('.close').click(function(){
            $('.close').css('backgroundColor', 'white');
            $('.close').css('color', 'gray');
            $dlg.remove(); 
       })
      
    }    
    function dragmove(){
        $('.dialogbox').mousedown(function (e) { 
            var offset = $(this).position();//DIV在页面的位置  使用position定位
            var x = e.pageX - offset.left;//获得鼠标指针离DIV元素左边界的距离 
            var y = e.pageY - offset.top;//获得鼠标指针离DIV元素上边界的距离 
            var thas = $(this);
            $(cfg.container).on("mousemove",function(ev){
                var _x = ev.pageX - x;//获得X轴方向移动的值 
                var _y = ev.pageY - y;//获得Y轴方向移动的值 
                thas.animate({ left: _x + "px", top: _y + "px" }, 0.5);
            })
           });
           $(".dialogbox").mouseup(function () {
            $(cfg.container).off("mousemove");
        });   
    }
    function check(){
        $('.btn-goto').click(function(){
            if(/^\+?[1-9][0-9]*$/.test($(".text-line-mum").val())){
                if($(".text-line-mum").val()>10){
                    alert("行数超过了总行数")
                }
                else{
                    console.log("跳转到"+$(".text-line-mum").val()+"页")
                }
            }else{
                alert("请输正确入数值")
            }
            
        })        
        $(".btn-close").click(function(){ 
            $dlg.remove(); 
        });
        
    }
     return{
         show:show,
         dragmove:dragmove,
         check:check,
     }
  }())