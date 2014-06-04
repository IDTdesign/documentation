$( document ).ready(function() {
	if (states) {
		$('').appendTo('body');
		var html='';
		for(prop in states) {
			if (!states.hasOwnProperty(prop)) continue								
			for (var i = 0; i < states[prop].length; i++) {
				html = html + '<b class="state" data-new="'+states[prop][i]+'" data-native="'+prop.replace('.','')+'"">'+states[prop][i]+'</b>';
				console.log(html);
			}
		}

		$('<div id="states">'+html+'</div>').appendTo('body');
		$('#states b').click(function(){
			var cl  = $(this).data('native'),
				nv  = $(this).data('new');

				$(this).toggleClass('active');
				if ($(this).hasClass('active')) {
					$('.'+cl).attr('class',nv);					
					//$(this).text(nv);					
				} else {								
					$('.'+cl).attr('class',cl);
					//$(this).text(cl);
				}								
		});
		$('#states b').hover(
			function(){
				
				$('.'+$(this).data('native')).css({'outline':'solid 2px lime'});
			},
			function(){
				$('.'+$(this).data('native')).css({'outline':'0'});
			}
		);

	}
});
