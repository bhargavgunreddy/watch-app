var clearActive = function(){
							$('ul.megamenu').children('li').each(function(){
								$(this).removeClass('active grid');	
							})	
						}; 
var self = this;

$('.megamenu > li > a').on('click', function(){
	self.clearActive();
	$(this).parent().addClass('active').addClass('grid');
	$('.bannerClass').addClass('men_banner').removeClass('banner');
});


$('.login').on('click', function(){
	self.clearActive();
	$('.bannerClass').addClass('men_banner').removeClass('banner');
});

$('.logo').on('click', function(){
	self.clearActive();
	$('.bannerClass').addClass('banner').removeClass('men_banner');
})