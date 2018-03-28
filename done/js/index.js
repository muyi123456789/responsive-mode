$(function(){
	$('.carousel').carousel({
	  interval: 2000
	})
	$('.click').click(function(){
		$('.bot').slideToggle('slow');
	});
});
