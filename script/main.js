$(document).ready(function () {

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
	var contTop = $('.project01').offset().top;
	console.log(contTop);
	var bodyHeight = $('body').height();
	var proHeight = $('.project').height();
	console.log(contTop / bodyHeight * 100);
	console.log('프로젝트안에서' + contTop / proHeight * 100);
	var winHeight = $(window).height();
	console.log(winHeight);
	console.log(winHeight / 5);
	//스크롤 하면 컨텐츠가 나타난다
	$('html, body').on('mousewheel DOMMouseScroll swipe',
		function () {
			var sPos = $('.project01').offset().top;
			console.log(sPos);
		})
	console.log(window);
	console.log($('window'));
	//윈도우 리사이즈 이벤트
	function resizeThis() {
		$(window).resize(function () {
			var height = window.innerHeight;
			var width = window.innerHeight;
			// console.log('바디높이' + bHeight)
			// console.log('높이' + height);
			// console.log('너비' + width);
		})
	}
	resizeThis();
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
		/*console.log('바디높이' + bodyHeight);
		console.log('스크롤높이' + sTop);
		console.log('윈도우창높이' + winHeight);
		console.log(sTop / canScroll);*/
		$('.status').text(sTop);
		$('.progress_bar').css('height', sPos * 60 + 'vh');
		var contTop = $('.project01').offset().top;
		console.log('콘텐츠1위치' + contTop);
		var cont02 = $('.project02').offset().top;
		console.log('콘텐츠2위치' + cont02);
		if (sTop >= 300) {
			$('.project01').animate({
				'opacity': 1
			}, 400);
		}
	})
	// 마우스따라서 회전하는 기능
	var mousePos={x:0,y:0};
	var sectionHeight=$('section').innerHeight();
	var sectionWidth=$('section').innerWidth();
	$('section').mousemove(function(e){
		// console.log(e.pageX);
		// console.log(sectionHeight);
		mousePos.x = -1+(e.pageX/sectionWidth*2);
		mousePos.y = 1-(e.pageY/sectionHeight*2);
		// console.log(mousePos.x,mousePos.y);
    $('figure').css('transform','rotateY('+mousePos.x*10+'deg) rotateX('+mousePos.y*10+'deg)');
		

	});
});
