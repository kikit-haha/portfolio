$(function () {
  //서브,메인 공통 스크립트
  //	var contTop = $('.cont').offset().top;
  var bodyHeight = $("body").height();
  var proHeight = $(".project").height();
  var winHeight = $(window).height();
  var height = 0;
  let toggleBtn = document.querySelector("div.toggle");
  const gnb = document.querySelector(".gnb_wrap");

  //토글 버튼
  toggleBtn.addEventListener("click", function (event) {
    event.target.classList.add("active");

    if (event.target.classList.contains("active")) {
      gnb.classList.add("act");
    } else {
      gnb.classList.remove("act");
    }
  });

  gnb.addEventListener("mouseleave", function () {
    gnb.classList.remove("act");
    toggleBtn.classList.remove("active");
  });

  function on() {
    console.log(this);
    const a = this.querySelector("a");
    a.classList.add("active");
    // $(this).find("a").addClass("active", 300);
    console.log(this.nextElementSibling);
    // a.nextSibling.classList.add("inactive");
    // $(this).siblings().find("a").addClass("inactive", 300);
  }

  function off() {
    $(this).find("a").removeClass("active", 300);
    $(this).siblings().find("a").removeClass("inactive", 300);
  }
  const gnbList = document.querySelector(".gnb li");
  console.log(gnbList);
  gnbList.addEventListener("mouseover", on);
  gnbList.addEventListener("mouseout", off);
  // $(".gnb li").hover(on, off);

  // 스티키 컨텐츠
  function setLayout() {
    var introHeight = window.innerHeight * 5;
    $(".introduce_wrap").css("height", introHeight);
    console.log("셋레이아웃" + introHeight);
  }
  //윈도우 리사이즈 이벤트

  function resizeThis() {
    $(window).resize(function () {
      var height = window.innerHeight;
      var width = window.innerHeight;
      setLayout();
    });
  }
  resizeThis();
  setLayout();
  //하단 더보기 버튼
  $(".more_btn").click(function () {
    $(this).toggleClass("active");
    $(".menu").toggleClass("active");
  });
  //진행 바
  $(window).scroll(function () {
    var sTop = $(this).scrollTop();
    var bodyHeight = $("body").height();
    var winHeight = $(this).height();
    var canScroll = bodyHeight - winHeight;
    var sPos = sTop / canScroll; //0~1
    $(".progress_bar").css("height", sPos * 230 + "px");
  });
});
