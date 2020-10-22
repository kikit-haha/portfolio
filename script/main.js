$(document).ready(function () {

	//토글버튼
  $('.toggle').click(function () {
    $(this).toggleClass('active',500);
    if($(this).hasClass('active')){
      $('.gnb_wrap').animate({'right':'0px'},500);
    }else{
      $('.gnb_wrap').animate({'right':'-50vw'},500);
    }
  
  });
  function on(){
    $(this).siblings().children('a').addClass('inactive',8000);
    $(this).find('a').siblings('a').addClass('inactive',8000);
  }
  function off(){
    $(this).find('a').removeClass('active',8000);
    $(this).siblings().children('a').removeClass('inactive',800);
  }
  $('.gnb li').hover(on,off);
var contTop = $('.project01').offset().top;
console.log(contTop);
var bodyHeight=$('body').height();
var proHeight=$('.project').height();
console.log(contTop/bodyHeight*100);
console.log('프로젝트안에서'+contTop/proHeight*100);
var winHeight=$(window).height();
console.log(winHeight);
console.log(winHeight/5);
if()
});
