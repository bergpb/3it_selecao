/* Loading Script */
jQuery(window).load(function() {
  "use strict";
    	jQuery(".loader").delay(500).fadeOut();
    	jQuery("#mask").delay(1000).fadeOut("slow");
      jQuery('#s').attr('placeholder','search');
    });

/* Flexslider */
jQuery(window).load(function() {
  "use strict";
	jQuery('.flexslider').flexslider({
		animation: "fade",
		start: function(slider) {
			jQuery('.np-controls a.next').click(function(event){
				event.preventDefault();
				slider.flexAnimate(slider.getTarget("next"));
			});
			jQuery('.np-controls a.previous').click(function(event){
				event.preventDefault();
				slider.flexAnimate(slider.getTarget("previous"));
			});
		}
	});
});

/* Mixitup Portfolio */
jQuery(document).ready(function(jQuery) {
  "use strict";
	jQuery('#portfolio').mixitup({
		targetSelector: '.item',
		transitionSpeed: 450
	});

  
});

/* Nivo - Lightbox */
jQuery(document).ready(function(jQuery) {
  "use strict";
    jQuery('.nivo-lbox').nivoLightbox({ effect: 'fade' });
});

/* Skills */
jQuery(document).ready(function(jQuery) {
	"use strict";
	jQuery('.skills-info').appear(function() {
	jQuery('.skill1').css('width', '71%');
	jQuery('.skill2').css('width', '85%');
	jQuery('.skill3').css('width', '76%');
	jQuery('.skill4').css('width', '53%');
	jQuery('.skill5').css('width', '69%');
	},{accX: 0, accY: -150});
});

/* Google map */
jQuery(function () {
  "use strict";
  var map = new GMaps({
  el: "#map",

  lat: object_name8.some_string8,
  lng: object_name9.some_string9,
          zoom: 15, 
          zoomControl : true,
          zoomControlOpt: {
            style : "BIG",
            position: "TOP_LEFT"
          },
          panControl : true,
          streetViewControl : false,
          mapTypeControl: false,
          overviewMapControl: false
      });
        
      var styles = [
            {
              stylers: [
                { hue: "#00ffe6" },
                { saturation: -100 }
              ]
            }
      ];
        
      map.addStyle({
            styledMapName:"Styled Map",
            styles: styles,
            mapTypeId: "map_style"  
      });
        
      map.setStyle("map_style");

      map.addMarker({
        lat: object_name8.some_string8,
        lng: object_name9.some_string9,
        icon: object_name10.some_string10
      });
});


jQuery(function(){
    jQuery(".bg-lite").click(function(){
        jQuery("body").css("background","#d9dbdd"); 
    });
});

jQuery(function(){
    jQuery(".bg-dark").click(function(){
        jQuery("body").css("background","#222222"); 
    });
});