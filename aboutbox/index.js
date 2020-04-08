var $dlgAbout=(function(){
      var html=
      "<div class='notepad-about-goto'>"+
    "<div class='aboutbox'>"+
        "<div class='abtitlebar'>"+
          "<p class='abtitle'>关于“记事本”</p>"+
          "<span class='close'>×</span>"+
        "</div>"+
        "<div class='main'>"+
          "<div class='main-name'>JSNotepad</div>"+
          "<hr>"+
          "<img src='../images/book.png' >"+
          "<div class='main-detail'>"+
            "<p>作者：王心彤</p>"+
            "<p>QQ：815400083</p>"+
            "<p>仓库地址：<a href='https://github.com/WangXintong123/jsnotepad'>https://github.com/WangXintong123/jsnotepad</a></p>"+
          "</div>"+
          "<input class='btn-close' type='button' value='确定'>"+
        "</div>"+
    "</div>"+
  "</div>"
  var $about=$(html),
      cfg = {
          container:'body',
          num:6,
          title:'同意',
          onClick:null
      };
    function show(conf){
        // 1.DOM draw
        $(cfg.container).append($about);
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
            $about.remove(); 
       })
       $('.btn-close').click(function(){
        $about.remove(); 
   })
      
    }    
    function dragmove(){
        $('.aboutbox').mousedown(function (e) { 
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
           $(".aboutbox").mouseup(function () {
            $(cfg.container).off("mousemove");
        });   
    }
     return{
         show:show,
         dragmove:dragmove,
     }
  }())