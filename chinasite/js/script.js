$(document).ready(function(){
	$('.slider__area').slick({
		dots: true,
		autoplay: true
	});
});

let d = document;
const toggle_btn = d.querySelector('.hamburger'),
	  menu = d.querySelector('.header__menu');

var menu_active = false
toggle_btn.addEventListener('click', toggle_menu);

function toggle_menu() {
	if(menu_active) {
		this.classList.remove('active');
		menu_active = false
	} else {
		this.classList.add('active');
		menu_active = true

	}
}

$(document).ready(function(){

	$('.hamburger').click(function(){		
			$('.header__menu').slideToggle(100);					
		});

});
var a = 0;
$(window).scroll(function() {
	var block = $('.fact').offset().top - window.innerHeight;
	if (a == 0 && $(window).scrollTop() > block) {
		$('.colored').each(function() {
			var $this = $(this),
			countTo = $this.attr('data-count');
			$({
				countNum: $this.text()
			}).animate({
				countNum: countTo
			},
			{
				duration: 2000,
				easing: 'swing',
				step: function() {
					$this.text(Math.floor(this.countNum));
				},
				complete: function() {
					$this.text(this.countNum);
				}
			});
		});
		a = 1;}
	});
$(document).ready(function(){
	$('.info__link, .item__icon, .footer__link').click(function(e) {
		e.preventDefault();
});
	$('.info__link').click(function(){		
		$('.more__info').slideToggle(700);	
		if ($(this).hasClass('not-active')) {
			$(this).addClass('is-active').removeClass('not-active');
		}else{
			setTimeout(function(){
				$('.is-active').addClass('not-active').removeClass('is-active')
			},600)			
		}		
	});
});
