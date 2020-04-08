var $font=(function(){
  var html=
  '<div class="notepad-dlg-mask notepad-dlg-font">'+
  '<div class="dialogbox notepad-dlgbox">'+
    '<div class="notepad-dlg-titlebar">'+
      '<p class="title">字体</p>'+
      '<span class="close-btn">✖</span>'+
    '</div>'+
    '<div class="main notepad-dlg-main">'+
      '<div class="font-family">'+
        '<p>字体(F):</p>'+
        '<input type="text" id="family">'+
        '<div id="choosef">'+
          '<ul id="listf"></ul>'+
        '</div>'+
      '</div>'+
      '<div class="font-style">'+
        '<p>字形(Y):</p>'+
        '<input type="text" id="fstyle">'+
        '<div id="choosey">'+
            '<ul id="listy"></ul>'+
        '</div>'+
      '</div>'+
      '<div class="font-size">'+
        '<p>大小(S):</p>'+
        '<input type="text" id="size">'+
        '<div id="chooses">'+
            '<ul id="lists"></ul>'+
        '</div>'+
      '</div>'+
      '<fieldset class="sample">'+
        '<legend>示例</legend>'+
        '<p id="sample-txt">AaBbYyZz</p>'+
      '</fieldset>'+
      '<div class="script">'+
        '<label>'+
          '脚本(R):<br>'+
          '<select>'+
            '<option value="西欧语言">西欧语言</option>'+
            '<option value="中文 GB2312">中文 GB2312</option>'+
          '</select>'+
        '</label>'+
      '</div>'+
      '<input class="btn-ok btn" type="button" value="确定">'+
      '<input class="btn-cancel btn" type="button" value="取消">'+
    '</div>'+
  '</div>'+
  '<div>';
  var fonts = ['Agency FB', 'Algerian', 'Arial', 'Arial Rounded MT', 'Axure Handwriting', 'Bahnschrift', 'Baskerville Old Face', 'Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Bernard MT', 'BlackAdder ITC'],
    styles = ['常规', '斜体', '粗体', '粗偏斜体'],
    sizes = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72'];
  var $dlgFont=$(html);
  var cfg = {
    container:'body',
  };
  var arg=[];
      function show(){
        $(cfg.container).append($dlgFont);
        $('.close-btn').click(function(){
            $('.close-btn').css('backgroundColor', 'white');
            $('.close-btn').css('color', 'gray');
            $dlgFont.remove(); 
        })
        $(".btn-cancel").click(function(){ 
          $dlgFont.remove(); 
        });
      
        $(".btn-ok").click(function(){
          var $ffamily=$("#family");
          var $fstyle=$("#fstyle");
          var $fsize=$("#size");
          arg[2]=$ffamily.val();
          arg[3]=$fsize.val();
          if($fstyle.val() === '斜体') {
            arg[0]='italic'
          }
          if($fstyle.val() === '粗体') {
            arg[1]='bold'
          }
      
          if($fstyle.val() === '粗偏斜体') {
            arg[0]='italic',arg[1]='bold'
          }
          $dlgFont.remove(); 
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

    function init(){
      var listf=document.getElementById("listf"),
          listy=document.getElementById("listy"),
          lists=document.getElementById("lists");
      var ffamily=document.getElementById("family"),
          fstyle=document.getElementById("fstyle"),
          fsize=document.getElementById("size")
      for(var i=0;i<fonts.length;i++){
        var li=document.createElement("li")
        li.innerText=fonts[i];
        li.index="f"+i;
        listf.appendChild(li)
      }
      for(var i=0;i<styles.length;i++){
        var li=document.createElement("li")
        li.innerText=styles[i];
        li.index="y"+i;
        listy.appendChild(li)
      }
      for(var i=0;i<sizes.length;i++){
        var li=document.createElement("li")
        li.innerText=sizes[i];
        li.index="s"+i;
        lists.appendChild(li)
      }
      ffamily.value=fonts[0];
      fstyle.value=styles[0];
      fsize.value=sizes[0]
      fclick();sclick();yclick();initcolor()
    }
    // init();

    function fclick(){
      var sample=document.getElementById("sample-txt");
      var ffamily=document.getElementById("family");
      var listf=document.getElementById("listf");
      var lif=listf.children;
      for(var i=0;i<lif.length;i++){
        lif[i].onclick=function(){
          for(var j=0;j<lif.length;j++){
            lif[j].style.background='white';
            lif[j].style.color='black';
          }
          this.style.background='rgb(27, 106, 233)';
          this.style.color='white'
          ffamily.value=this.innerText;
          sample.style.fontFamily=ffamily.value;
        }
      }

    }
    function yclick(){
      var sample=document.getElementById("sample-txt");
      var fstyle=document.getElementById("fstyle");
      var listy=document.getElementById("listy");
      var liy=listy.children;
      for(var i=0;i<liy.length;i++){
        liy[i].onclick=function(){
          for(var j=0;j<liy.length;j++){
            liy[j].style.background='white';
            liy[j].style.color='black';
          }
          this.style.background='rgb(27, 106, 233)';
          this.style.color='white'
          fstyle.value=this.innerText;
          if(fstyle.value === '斜体') {
            sample.style.fontStyle='italic'
            sample.style.fontWeight=''
          }
          if(fstyle.value === '粗体') {
            sample.style.fontWeight='bold'
            sample.style.fontStyle=''
          }
      
          if(fstyle.value === '粗偏斜体') {
            sample.style.fontStyle='italic';
            sample.style.fontWeight='bold';
          }
          if(fstyle.value === '常规') {
            sample.style.fontStyle='';
            sample.style.fontWeight='';
          }
        }
      }
    }
    function sclick(){
      var sample=document.getElementById("sample-txt");
      var  fsize=document.getElementById("size");
      var lists=document.getElementById("lists");
      var lis=lists.children;
      for(var i=0;i<lis.length;i++){
        lis[i].onclick=function(){
          for(var j=0;j<lis.length;j++){
            lis[j].style.background='white';
            lis[j].style.color='black';
          }
          this.style.background='rgb(27, 106, 233)';
          this.style.color='white'
          fsize.value=this.innerText;
          sample.style.fontSize=fsize.value+"px";
        }
      }
    }
  // fclick();sclick();yclick();

    function initcolor(){
      var listf=document.getElementById("listf"),
          listy=document.getElementById("listy"),
          lists=document.getElementById("lists");
      var ffamily=document.getElementById("family"),
          fstyle=document.getElementById("fstyle"),
          fsize=document.getElementById("size")
      for(var j=0;j<fonts.length;j++){
        if(fonts[j]===ffamily.value){
          listf.children[j].style.background='rgb(27, 106, 233)';
          listf.children[j].style.color='white';
        }
      }
      for(var j=0;j<styles.length;j++){
        if(styles[j]===fstyle.value){
          listy.children[j].style.background='rgb(27, 106, 233)';
          listy.children[j].style.color='white';
        }
      }
      for(var j=0;j<sizes.length;j++){
        if(sizes[j]===fsize.value){
          lists.children[j].style.background='rgb(27, 106, 233)';
          lists.children[j].style.color='white';
        }
      }
    }
    // var arg=[];
    // function getInfo(){
    //   var ok=document.getElementsByClassName("btn-ok")[0];
    //   ok.onclick=function(){
    //     var ffamily=document.getElementById("family");
    //     var fstyle=document.getElementById("fstyle");
    //     var fsize=document.getElementById("size");
    //     arg[2]=ffamily.value;
    //     arg[3]=fsize.value;
    //     if(fstyle.value === '斜体') {
    //       arg[0]='italic'
    //     }
    //     if(fstyle.value === '粗体') {
    //       arg[1]='bold'
    //     }
    
    //     if(fstyle.value === '粗偏斜体') {
    //       arg[0]='italic',arg[1]='bold'
    //     }
    //     return arg;
    //   }
    // }
    // initcolor();


    // }
    return{
      show:show,
      dragmove:dragmove,
      initcolor:initcolor,
      fclick:fclick,
      yclick:yclick,
      sclick:sclick,
      init:init,
      // familystr:familystr,
      // stylestr:stylestr,
      // sizestr:sizestr,
      // getInfo:getInfo,
      arg:arg,
      // weightstr:weightstr
  }
}())

    



    




