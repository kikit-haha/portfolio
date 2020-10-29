$(function () {
	//메인페이지 스크립트
	$('html, body').on('mousewheel DOMMouseScroll swipe',
		function () {
			var sPos = $('.project01').offset().top;
			console.log(sPos);
		})


	// 마우스따라서 회전하는 기능
	var mousePos = {
		x: 0,
		y: 0
	};
	var sectionHeight = $('section').innerHeight();
	var sectionWidth = $('section').innerWidth();
	$('section').mousemove(function (e) {
		mousePos.x = -1 + (e.pageX / sectionWidth * 2);
		mousePos.y = 1 - (e.pageY / sectionHeight * 2);
		$('figure').css('transform', 'rotateY(' + mousePos.x * 2 + 'deg) rotateX(' + mousePos.y * 2 + 'deg)');
	});

	//스크롤되면서 하나씩 보이게
	function visible() {
		var sTop = $(this).scrollTop();
		var hHeight = $('header').height();
		var introduceHeight = $('.introduce_wrap').height();
		var introS_top = sTop - hHeight;
		var intro_hHeight_canScroll = introduceHeight - hHeight;
		var scrollHeight = introS_top / intro_hHeight_canScroll;
		if (scrollHeight <= 0.2) {
			$('.intro').removeClass('active');
			$('.intro_00').addClass('active');

		} else if (scrollHeight > 0.2 && scrollHeight <= 0.4) {
			$('.intro').removeClass('active');
			$('.intro_01').addClass('active');

		} else if (scrollHeight > 0.4 && scrollHeight <= 0.6) {
			$('.intro').removeClass('active');
			$('.intro_02').addClass('active');

		} else if (scrollHeight > 0.6) {
			$('.intro').removeClass('active');
			$('.intro_03').addClass('active');
		}
	}
	//스크롤하면서 너비 넓어지게하기
	$(window).scroll(function () {
		var sTop = $(this).scrollTop();
		var bodyHeight = $('body').height();
		var winHeight = $(this).height();
		var canScroll = (bodyHeight - winHeight);
		var sPos = sTop / canScroll; //0~1
		var hHeight = $('header').height();
		var proTop = $('.project').scrollTop();
		var introduceHeight = $('.introduce_wrap').height();
		var intro_hHeight = hHeight + introduceHeight;
		var scrollBar = sTop / introduceHeight * 20;
		var introduceHeight = $('.introduce_wrap').height();
		var intro_hHeight = hHeight + introduceHeight;
		var introS_top = sTop - hHeight;

		if (sTop >= hHeight && sTop < introduceHeight) {
			$('.introduce').addClass('fix');

			var iWidth = 80 + scrollBar;
			$('.introduce').css('width', iWidth + 'vw');
			visible();
		} else {
			$('.introduce').removeClass('fix');
		}
	})

});
