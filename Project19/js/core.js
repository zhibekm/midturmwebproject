$(document).ready(function(){

	$('#mob-m').click(function(){		
			$('.header__nav').slideToggle(700);	
			if ($(this).hasClass('not-active')) {
				$(this).addClass('is-active').removeClass('not-active');
			}else{
				setTimeout(function(){
					$('.is-active').addClass('not-active').removeClass('is-active')
				},600)			
			}		
		});

});