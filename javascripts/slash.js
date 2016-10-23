(function($){
<<<<<<< HEAD
	// Open external links in new window
	var externalLinks = function(){
		var host = location.host;

		$('body').on('click', 'a', function(e){
			var href = this.href,
				link = href.replace(/https?:\/\/([^\/]+)(.*)/, '$1');

			if (link != '' && link != host && !$(this).hasClass('fancybox')){
				window.open(href);
				e.preventDefault();
			}
		});
	};

	// Append caption after pictures
	var appendCaption = function(){
		$('.entry-content').each(function(i){
			var _i = i;
			$(this).find('img').each(function(){
				var alt = this.alt;

				if (alt != ''){
					$(this).after('<span class="caption">'+alt+'</span>');
				}

				$(this).wrap('<a href="'+this.src+'" title="'+alt+'" class="fancybox" rel="gallery'+_i+'" />');
			});
		});
	};

	externalLinks(); // Delete or comment this line to disable opening external links in new window
	appendCaption(); // Delete or comment this line to disable caption
=======
>>>>>>> 3100bda1e75750754e071d5abaaed6174248e5a4

	var mobilenav = $('#mobile-nav');

	$('html').click(function(){
		mobilenav.find('.on').each(function(){
			$(this).removeClass('on').next().hide();
		});
	});

	mobilenav.on('click', '.menu .button', function(){
		if (!$(this).hasClass('on')){
<<<<<<< HEAD
			var width = $(this).width() + 42;
			$(this).addClass('on').next().show().css({width: width});
=======
			$(this).addClass('on').next().show();
>>>>>>> 3100bda1e75750754e071d5abaaed6174248e5a4
		} else {
			$(this).removeClass('on').next().hide();
		}
	}).on('click', '.search .button', function(){
		if (!$(this).hasClass('on')){
<<<<<<< HEAD
			var width = mobilenav.width() - 51;
			mobilenav.children('.menu').children().eq(0).removeClass('on').next().hide();
			$(this).addClass('on').next().show().css({width: width}).children().children().eq(0).focus();
=======
			mobilenav.children('.menu').children().eq(0).removeClass('on').next().hide();
			$(this).addClass('on').next().show().children().children().eq(0).focus();
>>>>>>> 3100bda1e75750754e071d5abaaed6174248e5a4
		} else {
			$(this).removeClass('on').next().hide().children().children().eq(0).val('');
		}
	}).click(function(e){
		e.stopPropagation();
	});
<<<<<<< HEAD
})(jQuery);
=======
})(jQuery);
>>>>>>> 3100bda1e75750754e071d5abaaed6174248e5a4
