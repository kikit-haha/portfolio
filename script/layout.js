$(function () {
	//서브,메인 공통 스크립트
	//	var contTop = $('.cont').offset().top;
	var bodyHeight = $('body').height();
	var proHeight = $('.project').height();
	var winHeight = $(window).height();
	var height = 0;
	console.log(bodyHeight);
	//토글버튼
	$('.toggle').click(function () {
		$(this).toggleClass('active', 500);
		if ($(this).hasClass('active')) {
			$('.gnb_wrap').animate({
				'right': '0px'
			}, 500);
		} else {
			$('.gnb_wrap').animate({
				'right': '-50vw'
			}, 500);
		}

	});

	function on() {
		$(this).find('a').addClass('active', 300);
		$(this).siblings().find('a').addClass('inactive', 300);

	}

	function off() {
		$(this).find('a').removeClass('active', 300);
		$(this).siblings().find('a').removeClass('inactive', 300);
	}
	$('.gnb li').hover(on, off);
	// 스티키 컨텐츠
	function setLayout() {
		var introHeight = window.innerHeight * 5;
		$('.introduce_wrap').css('height', introHeight);
		console.log('셋레이아웃' + introHeight);
	}
	//윈도우 리사이즈 이벤트

	function resizeThis() {
		$(window).resize(function () {
			var height = window.innerHeight;
			var width = window.innerHeight;
			setLayout();
		})
	}
	resizeThis();
	setLayout();
	//하단 더보기 버튼
	$('.more_btn').click(function () {
		$(this).toggleClass('active');
		$('.menu').toggleClass('active');
	})
	//진행 바
	$(window).scroll(function () {
		var sTop = $(this).scrollTop();
		var bodyHeight = $('body').height();
		var winHeight = $(this).height();
		var canScroll = (bodyHeight - winHeight);
		var sPos = sTop / canScroll; //0~1
		$('.progress_bar').css('height', sPos * 230 + 'px');
	})

});
