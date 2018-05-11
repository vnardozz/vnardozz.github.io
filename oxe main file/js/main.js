

(function ($) {
    'use strict';

    /*-----------------------
         Scroll Menu bg
      -----------------------*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.header-area').addClass('menu-bg');
        } else {
            $('.header-area').removeClass('menu-bg');
        }
    });

    /*-----------------------
        smooth scroll
      -----------------------*/
    $('a.nav-link').on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

    /*-----------------------
        slider
      -----------------------*/
    $('.slider-area').vegas({
        delay: 7000,
        overlay: true,
        animation: ['kenburns', 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight', 'kenburnsUpLeft', 'kenburnsUpRight', 'kenburnsDownLeft', 'kenburnsDownRight'],
        slides: [{
                src: 'img/slider/01.jpg'
        },
            {
                src: 'img/slider/02.jpg'
            },
            {
                src: 'img/slider/03.jpg'
            }
            ]
    });

    /*---------- client slider ---------*/
    var client_slider = $('.client-comment-info');
    client_slider.owlCarousel({
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    /*-----------------------
        parallax
      -----------------------*/
    var parallax_effect = $('.parallax');
    parallax_effect.jarallax({
        speed: 0.5
    });

	/*-----------------------
        google map
      -----------------------*/
    if ($('#map').length > 0) {
        var myCenter = new google.maps.LatLng(35.237062, -81.073008);

        function initialize() {
            var mapProp = {
                zoom: 16,
                center: myCenter,
                scrollwheel: false,
                styles: [{
                        "featureType": "all",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                                "saturation": 36
                            },
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 40
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                                "visibility": "on"
                            },
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.fill",
                        "stylers": [{
                                "color": "#000000"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                                "color": "#000000"
                            },
                            {
                                "lightness": 17
                            },
                            {
                                "weight": 1.2
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#000000"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#000000"
                            },
                            {
                                "lightness": 21
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [{
                                "color": "#000000"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                                "color": "#000000"
                            },
                            {
                                "lightness": 29
                            },
                            {
                                "weight": 0.2
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#000000"
                            },
                            {
                                "lightness": 18
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#000000"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#000000"
                            },
                            {
                                "lightness": 19
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#000000"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    }
                ],
                mapTpeIdy: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("map"), mapProp);
            //add your location marker here 
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(35.237062, -81.073008),
                map: map,
                draggable: true
            });
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    };

	/*-----------------------
        Scroll Up
      -----------------------*/
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<a class="hvr-icon-bob click-top"></a>', // Text for element
        activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });


    $(window).on('load', function () {

		/*-----------------------
			preloader
		  -----------------------*/
        $('.preloader').fadeOut('500');

		/*-----------------------
			Isotope
		  -----------------------*/
        // init Isotope        
        $('.iso-content').isotope({
            itemSelector: '.iso-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.iso-item'
            }
        });
        // filter items on button click
        $('.iso-nav ul li').on('click', function () {
            $('.iso-nav ul li').removeClass('portfolio-active');
            $(this).addClass('portfolio-active');
            var selector = $(this).attr('data-filter');
            $('.iso-content').isotope({
                filter: selector
            });
            return false;
        });

    });
}(jQuery));
