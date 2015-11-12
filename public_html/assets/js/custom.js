function _maximageSlider() {

		if(jQuery('#slider').length > 0) {

			jQuery('#slider').maximage({
				cycleOptions: {
					fx: 		'fade',
					speed: 		1000, // Has to match the speed for CSS transitions in jQuery.maximage.css (lines 30 - 33)
					timeout: 	4000,
					prev: 		'#slider_prev',
					next: 		'#slider_next',
					pause: 		1,

					before: function(last,current){
						if(!is_msie) {
							// Start HTML5 video when you arrive
							if(jQuery(current).find('video').length > 0) jQuery(current).find('video')[0].play();
						}
					},

					after: function(last,current){
						if(!is_msie) {
							// Pauses HTML5 video when you leave it
							if(jQuery(last).find('video').length > 0) jQuery(last).find('video')[0].pause();
						}
					}
				},

                fillElement: '#slider-container',
                backgroundSize: 'contain',


                onFirstImageLoaded: function(){
					jQuery('#cycle-loader').hide();
					jQuery('#slider').fadeIn('fast');
				}
			});

			// Helper function to Fill and Center the HTML5 Video
			jQuery('video,object').maximage('maxcover');

			// To show it is dynamic html text
			jQuery('.in-slide-content').delay(1200).fadeIn();

		}

	}
