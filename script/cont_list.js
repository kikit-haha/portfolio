$(function () {
    // 스크롤했을때 앞으로 튀어나오는거.뭘이동시키지? 하우스
    const articleElem=document.querySelector('article');
    let maxScrollValue=document.body.offsetHeight-window.innerHeight;
    // const barElem=document.querySelector('.progress-bar');
    const mousePos={x:0,y:0};
    const sectionElem=document.querySelector('section');
    window.addEventListener('scroll',function(){
      const scrollPer=pageYOffset/maxScrollValue;
      const zMove=scrollPer*850-490;//0~1인걸0~1000으로
      const aside=document.querySelector('aside');
      if(pageYOffset>100){
        aside.style.opacity="0";
      }else{
        aside.style.opacity="0.8";
      }
      console.log('비율'+pageYOffset/maxScrollValue);
     articleElem.style.transform='translateZ('+zMove+'vw)';
    })
    window.addEventListener('mousemove',function(e){
    // console.log(e.clientX,e.clientY);
    mousePos.x=-1+(e.clientX/window.innerWidth)*2;
    mousePos.y=1-(e.clientY/window.innerHeight)*2;
    sectionElem.style.transform = 'rotateX('+(mousePos.y*5)+'deg) rotateY('+(mousePos.x*5)+'deg)';
    })
    });
