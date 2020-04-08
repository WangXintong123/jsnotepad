var $menubar=(function(){
  var titles=document.getElementsByClassName('title');
  var menus=document.getElementsByClassName('menus')
  var menubar=document.getElementsByClassName("notepad-menubar")[0]
  var num=1;

  var html=
  '<div class="notepad-menubar">'+
  '<ul class="menu-title">'+
    '<li class="title">文件(F)</li>'+
    '<li class="title">编辑(E)</li>'+
    '<li class="title">格式(O)</li>'+
    '<li class="title">查看(V)</li>'+
    '<li class="title">帮助(H)</li>'+
  '</ul>'+
  '<ul class="menus" id="fm">'+
    '<li class="menu-item">新建(N)<span class="shortcut">Ctrl+N</span></li>'+
    '<li class="menu-item">打开(O)...</li>'+
    '<li class="menu-item">保存(S)</li>'+
    '<li class="menu-item">另存为(A)...</li>'+
    '<li class="menu-hr"></li>'+
    '<li class="menu-item">页面设置(U)</li>'+
    '<li class="disabled menu-item">打印(P)</li>'+
    '<li class="menu-hr"></li>'+
    '<li class="menu-item">退出(X)</li>'+
  '</ul>'+
  '<ul class="menus" id="ef">'+
    '<li class="menu-item">撤销(U)</li>'+
    '<li class="menu-hr"></li>'+
    '<li class="menu-item">剪切(T)</li>'+
    '<li class="menu-item">复制(C)</li>'+
    '<li class="menu-item">粘贴(P)</li>'+
    '<li class="menu-item">删除(L)</li>'+
    '<li class="menu-hr"></li>'+
    '<li class="menu-item">查找(F)</li>'+
    '<li class="disabled menu-item">替换(R)</li>'+
    '<li class="menu-item" id="goto">转到(G)</li>'+
  '</ul>'+
  '<ul class="menus" id="om">'+
    '<li class="menu-item">自动换行(W)</li>'+
    '<li class="menu-item" id="font">字体(F)...</li>'+
  '</ul>'+
  '<ul class="menus" id="vm">'+
    '<li class="menu-item">缩放(Z)</li>'+
    '<li class="menu-item">状态栏(S)</li>'+
  '</ul>'+
  '<ul class="menus" id="hm">'+
    '<li class="menu-item">查看帮助(H)...</li>'+
    '<li class="menu-item">发送反馈(F)...</li>'+
    '<li class="menu-hr"></li>'+
    '<li class="menu-item" id="about">关于记事本(A)</li>'+
  '</ul>'+
'</div>'+
'<div class="notepad-editor">'+
  '<textarea name="tex" id="tex"></textarea>'+
'</div>'
var $dlgMenu=$(html);
  var cfg = {
    container:'body',
  };
  function show(){
    $(cfg.container).append($dlgMenu);
  }   
  function menuClick(){
    for(var i=0;i<menus.length;i++){
      var left=titles[i].offsetLeft
      menus[i].style.marginLeft=left+'px';
      menus[i].style.zIndex=i+10;
      menus[i].style.display='none';
      menus[i].index=i;
      titles[i].index=i
      titles[i].onclick=function(e){
        if(num===0){
          num=1;
        }
        else{
          num=0
        }
        var te=e.target.index
        menus[te].style.display="block";
        for(var j=0;j<menus.length;j++){
          if(j!==te){
            menus[j].style.display='none';
          }
        }
        if(num===0){
          for(var j=0;j<titles.length;j++){
            titles[j].onmouseover=function(e){
              var te=e.target.index
              menus[te].style.display="block";
              for(var j=0;j<menus.length;j++){
                if(j!==te){
                  menus[j].style.display='none';
                }
              }
            }
          }
        }
        if(num===1){
          for(var j=0;j<menus.length;j++){
            menus[j].style.display='none';
            titles[j].onmouseover=function(e){
            }
          }
        }
      }
    }
  }
  function showFont(){
    var font=document.getElementById('font');
    font.onclick=function(){
      $font.show();
      $font.dragmove();
      $font.initcolor();
      $font.fclick()
      $font.yclick()
      $font.sclick()
      $font.init()
      // $font.getInfo()
    }
  }

  function showAbout(){
    var about=document.getElementById("about")
    about.onclick=function(){
      $dlgAbout.show()
      $dlgAbout.dragmove()
    }
  }

  function showGoto(){
    var goto=document.getElementById("goto")
    goto.onclick=function(){
      $dlgGoto.show()
      $dlgGoto.dragmove()
      $dlgGoto.check()
    }
  }


  function txtClick(){
    var tex=document.getElementById("tex")
    var menus=document.getElementsByClassName('menus')
    tex.onfocus=function(){
      for(var i=0;i<menus.length;i++){
        menus[i].style.display="none"
      }
    }
  };

  return{
    show:show,
    menuClick:menuClick,
    showFont:showFont,
    showAbout:showAbout,
    showGoto:showGoto,
    txtClick:txtClick
  }


}())
  
  // var titles=document.getElementsByClassName('title');
  // var menus=document.getElementsByClassName('menus')
  // var menubar=document.getElementsByClassName("notepad-menubar")[0]
  // var num=1;

  // function show(){
  //   $(cfg.container).append($dlgMenu);
  // }   
  // function menuClick(){
  //   for(var i=0;i<menus.length;i++){
  //     var left=titles[i].offsetLeft
  //     menus[i].style.marginLeft=left+'px';
  //     menus[i].style.zIndex=i+10;
  //     menus[i].style.display='none';
  //     menus[i].index=i;
  //     titles[i].index=i
  //     titles[i].onclick=function(e){
  //       if(num===0){
  //         num=1;
  //       }
  //       else{
  //         num=0
  //       }
  //       var te=e.target.index
  //       menus[te].style.display="block";
  //       for(var j=0;j<menus.length;j++){
  //         if(j!==te){
  //           menus[j].style.display='none';
  //         }
  //       }
  //       if(num===0){
  //         for(var j=0;j<titles.length;j++){
  //           titles[j].onmouseover=function(e){
  //             var te=e.target.index
  //             menus[te].style.display="block";
  //             for(var j=0;j<menus.length;j++){
  //               if(j!==te){
  //                 menus[j].style.display='none';
  //               }
  //             }
  //           }
  //         }
  //       }
  //       if(num===1){
  //         for(var j=0;j<menus.length;j++){
  //           menus[j].style.display='none';
  //           titles[j].onmouseover=function(e){
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
  // menuClick();

  // function showFont(){
  //   var font=document.getElementById('font');
  //   font.onclick=function(){
  //     $font.show();
  //     $font.dragmove();
  //     $font.initcolor();
  //     $font.fclick()
  //     $font.yclick()
  //     $font.sclick()
  //     $font.init()
  //     // $font.getInfo()
  //   }
  // }
  // showFont();

  // function showAbout(){
  //   var about=document.getElementById("about")
  //   about.onclick=function(){
  //     $dlgAbout.show()
  //     $dlgAbout.dragmove()
  //   }
  // }
  // showAbout();

  // function showGoto(){
  //   var goto=document.getElementById("goto")
  //   goto.onclick=function(){
  //     $dlgGoto.show()
  //     $dlgGoto.dragmove()
  //     $dlgGoto.check()
  //   }
  // }
  // showGoto();

  // function txtClick(){
  //   var tex=document.getElementById("tex")
  //   var menus=document.getElementsByClassName('menus')
  //   tex.onfocus=function(){
  //     for(var i=0;i<menus.length;i++){
  //       menus[i].style.display="none"
  //     }
  //   }
  // }
  // txtClick()


  
