'use strict';

(function ($, Drupal) {
  Drupal.behaviors.global_tobacco = {
    attach: function attach(context, settings) {
      (function ($) {

        $(document).ready(function () {

          var marker_cur_lang_title = 'РўРћР’ Р“Р»РѕР±Р°Р» РўРѕР±Р°РєРѕ Р†РЅС‚РµСЂРЅРµС€РЅР», Рј. Р›СѓС†СЊРє';
          var current_path = window.location.pathname;
          if (current_path.match("^/en")) {
            marker_cur_lang_title = 'Global Tobacco International Ltd, Lutsk, Ukraine';
          } else if (current_path.match("^/ru")) {
            marker_cur_lang_title = 'РћРћРћ Р“Р»РѕР±Р°Р» РўРѕР±Р°РєРѕ РРЅС‚РµСЂРЅРµС€РЅР», Рі. Р›СѓС†Рє, РЈРєСЂР°РёРЅР°';
          } else if (current_path.match("^/pl")) {
            marker_cur_lang_title = 'Global Tobacco International Ltd, Lutsk, Ukraine';
          } 

          $(function () {

            'use strict';

            var DOM = {
              body: $('body'),
              textarea: $('.form-item textarea'),
              scene: $('.bg-parallax')
            };

            $(init);

            function init() {

              autosize(DOM.textarea);

              function mapContact(scrollwheel, draggable) {
                var map = new GMaps({
                  div: '#map',
                  lat: 50.769381,
                  lng: 25.371785,
                  zoom: 5,
                  scrollwheel: scrollwheel,
                  draggable: draggable,
                  disableDefaultUI: true,
                  styles: [{
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                      "color": "#444444"
                    }]
                  }, {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [{
                      "color": "#f2f2f2"
                    }]
                  }, {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [{
                      "visibility": "off"
                    }]
                  }, {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [{
                      "saturation": -100
                    }, {
                      "lightness": 45
                    }]
                  }, {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [{
                      "visibility": "simplified"
                    }]
                  }, {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [{
                      "visibility": "off"
                    }]
                  }, {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [{
                      "visibility": "off"
                    }]
                  }, {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [{
                      "color": "#c2a267"
                    }, {
                      "visibility": "on"
                    }]
                  }]
                });
                map.addMarker({
                  lat: 50.769381,
                  lng: 25.371785,
                  icon: '/img/frontend/marker.png',
                  title: marker_cur_lang_title,
                });
              }

              if ($("#map").length == 1) {
                mapContact(true, true);
              }

              if ($(window).width() > 1050) {
                $('.bg-parallax').parallax();
              }

              $(window).resize(function () {
                if ($(window).width() > 1050) {
                  $('.bg-parallax').parallax();
                }
              });
            }
          });
        });
      })(jQuery);
    }
  };
})(jQuery, Drupal);