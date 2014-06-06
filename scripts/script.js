/* Your scripts go here */
$( document ).ready(function() {
	$('.size_buttons a').click(function(){
		$('.size_buttons a').removeClass('active');
		$(this).addClass('active');
		var w = $(this).data('width');
		$('#preview iframe').width(w);
		return false;
	});

	$('#html, #css').click(function(){
		$(this).next().toggle();
	})
});