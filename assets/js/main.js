/*
Author       : Theme-Family
Template Name: Qaher - Real State & Property Business HTML Template
Version      : 1.0.0
*/
(function($) {
    "use strict";
	
	
	/*--------------------------------------------------------------
       PRELOADER
    --------------------------------------------------------------*/
	$(window).on('load', function() { 
		// Preloader
		setTimeout(function(){
			$('.atf_preloader').addClass('loaded');
		}, 1000);
	}); 
		
	/*--------------------------------------------------------------
       Sticky Header
    --------------------------------------------------------------*/
	
	$(window).on("scroll", function() {
		 var scroll = $(window).scrollTop();
		if (scroll >= 10) {
			$('.atf-sticky-header').addClass('atf-sticky-active');
		} else {
			$('.atf-sticky-header').removeClass('atf-sticky-active');
		}
	});

     
    /*--------------------------------------------------------------
       Mobile Menu
    --------------------------------------------------------------*/

	$('.atf-nav').append('<span class="atf-menu-toggle"><span></span></span>');
	$('.menu-item-has-children').append('<span class="atf-menu-dropdown-toggle"></span>');
	$('.atf-menu-toggle').on('click', function() {
		$(this).toggleClass("atf-toggle-active").siblings('.atf-nav-list').slideToggle();;
	});
	$('.atf-menu-dropdown-toggle').on('click', function() {
		$(this).toggleClass('active').siblings('ul').slideToggle();
	});

    // Auto close menu after clicking link (for one-page)
	$(".atf-onepage-nav > li > a").on("click", function () {
		if ($(window).width() <= 992) {
			$(".atf-nav-list").slideUp();
			$(".atf-menu-toggle").removeClass("atf-toggle-active");
		}
	});
    /*--------------------------------------------------------------
       One Page Navigation
    --------------------------------------------------------------*/
	// Click To Go Top
	$('.atf-smooth-move').on('click', function() {
		var thisAttr = $(this).attr('href');
		if ($(thisAttr).length) {
			var scrollPoint = $(thisAttr).offset().top - 50;
			$('body,html').animate({
				scrollTop: scrollPoint
			}, 800);
		}
		return false;
	});

	// One Page Active Class
	var topLimit = 300,
		ultimateOffset = 200;

	$('.atf-onepage-nav').each(function() {
		var $this = $(this),
			$parent = $this.parent(),
			current = null,
			$findLinks = $this.find("a");

		function getHeader(top) {
			var last = $findLinks.first();
			if (top < topLimit) {
				return last;
			}
			for (var i = 0; i < $findLinks.length; i++) {
				var $link = $findLinks.eq(i),
					href = $link.attr("href");

				if (href.charAt(0) === "#" && href.length > 1) {
					var $anchor = $(href).first();
					if ($anchor.length > 0) {
						var offset = $anchor.offset();
						if (top < offset.top - ultimateOffset) {
							return last;
						}
						last = $link;
					}
				}
			}
			return last;
		}

		$(window).on("scroll", function() {
			var top = window.scrollY,
				height = $this.outerHeight(),
				max_bottom = $parent.offset().top + $parent.outerHeight(),
				bottom = top + height + ultimateOffset;

			var $current = getHeader(top);

			if (current !== $current) {
				$this.find(".active").removeClass("active");
				$current.addClass("active");
				current = $current;
			}
		});
	});

	/*--------------------------------------------------------------
       Sticky Back To Top
    --------------------------------------------------------------*/
  
	$(window).on('scroll', function() {
	if ($(window).scrollTop() > 50) {
		$('.atf-sticky-header').addClass('atf-nav');
		$('.atf-back-to-top').addClass('open');
	} else {
		$('.atf-sticky-header').removeClass('atf-nav');
		$('.atf-back-to-top').removeClass('open');
	}
	});
		  
	/*--------------------------------------------------------------
       Scroll UP
    --------------------------------------------------------------*/

	if ($('.atf-back-to-top').length) {
	  $(".atf-back-to-top").on('click', function () {
		var target = $(this).attr('data-targets');
		// animate
		$('html, body').animate({
		  scrollTop: $(target).offset().top
		}, 1000);

	  });
	}
	

	/*--------------------------------------------------------------
		MAILCHAMP
    --------------------------------------------------------------*/		
	$('#mc-form').ajaxChimp({
		url: 'https://themesfamily.us22.list-manage.com/subscribe/post?u=e056d9c3aeb53b20aff997467&amp;id=e307d7e1b8&amp;f_id=0012cee1f0'
		/* Replace Your AjaxChimp Subscription Link */
	}); 
	/*--------------------------------------------------------------
		Porfolio isotope
    --------------------------------------------------------------*/
	var portfolioIsotope = $(".atf-tour-grid").isotope({
        itemSelector: ".grid-item",
    });

    $(".portfolio-filter button").on("click", function () {
        $(".portfolio-filter button").removeClass("active");
        $(this).addClass("filter-active");

        portfolioIsotope.isotope({
            filter: $(this).data("filter"),
        });
    });

	$('.image-popup').magnificPopup({
		type: 'image',
		callbacks: {
			beforeOpen: function() {
			   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomInUp');
			}
		},
		gallery: {
			enabled: true
		}
	});

	//  POPUP VIDEO
	$('.popup-video').magnificPopup({
		type: 'iframe',
	});
		
	/*--------------------------------------------------------------
		WOW SCROLL SPY
    --------------------------------------------------------------*/	
	  
	 /*START COUNTER JS*/
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	/*END COUNTER JS*/

	/*--------------------------------------------------------------
		START WOW JS
    --------------------------------------------------------------*/	
	 var wow = new WOW({
		  //disabled for mobile
			mobile: false
		});

	wow.init();
	
	/*--------------------------------------------------------------
		END WOW JS
      --------------------------------------------------------------*/	
	/* --------------------------------------------------------
		 Nice Select
	--------------------------------------------------------- */
	$('select').niceSelect();
	
	/* --------------------------------------------------------
		 range-slider
	--------------------------------------------------------- */
	
	 var rangeSlider = function(){
		var slider = $('.range-slider'),
			range = $('.range-slider input[type="range"]'),
			value = $('.range-value');
		slider.each(function(){
			value.each(function(){
				var value = $(this).prev().attr('value');
				var max = $(this).prev().attr('max');
				$(this).html(value);
			});
			range.on('input', function(){
				$(this).next(value).html(this.value);
			});
		});
	};
	rangeSlider();
		
	
		 /*----------------------
		Slider 1 active
	-----------------------*/
	$('.atf__slider-1-active').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.atf__slider-1-pagination-count .count').text('0'+i);
		$('.atf__slider-1-pagination-count .total').text('0' + slick.slideCount);

		$('.atf__slider-1-slide-item-count .count').text('0'+i);
		$('.atf__slider-1-slide-item-count .total').text('/0' + slick.slideCount);
		new WOW().init();
	}).slick({
		dots: false, /* slider left or right side pagination count with line */
		arrows: false, /* slider arrow  */
		appendDots: '.atf__slider-1-pagination-count',
		infinite: true,
		autoplay: false,
		autoplaySpeed: 10000,
		speed: 500,
		asNavFor: '.atf__slider-1-img-slide-arrow-active',
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
		nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: false
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: false
				}
			},
			{
				breakpoint: 575,
				settings: {
					arrows: false,
					dots: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.atf__slider-1-img-slide-arrow-active').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 2,
		centerMode: false,
		centerPadding: '0px',
		asNavFor: '.atf__slider-1-active',
		dots: false, /* image slide dots */
		arrows: false, /* image slide arrow */
		centerMode: true,
		focusOnSelect: true,
		prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
		nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					arrows: false,
					dots: false
				}
			},
			{
				breakpoint: 1200,
				settings: {
					arrows: true,
					dots: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					arrows: true,
					dots: false
				}
			},
			{
				breakpoint: 575,
				settings: {
					arrows: true,
					dots: false,
				}
			}
		]
	});
		
	/*--------------------------------------------------------------
      Main slider
      --------------------------------------------------------------*/		
	  
	$('.slider-active').owlCarousel({
		loop:true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		smartSpeed:450,
		autoplay:false,
		autoplayTimeout:6000,
		mouseDrag:true,
		nav:true,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})	
			
	/*--------------------------------------------------------------
      START SERVICE SLIDER
      --------------------------------------------------------------*/	
			
	$(".feature_slider").owlCarousel({
		margin:3,
		nav:true,
		navText: ['<i class="fa-light fa-arrow-left-long"></i>', '<i class="fa-light fa-arrow-right-long"></i>'],
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		smartSpeed:450,
		autoplay:true,
		autoplayTimeout:6000,
		loop:true,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
			
			
			
	/*--------------------------------------------------------------
		CLASS SLIDER
    --------------------------------------------------------------*/	
	$('#atf-homesale-slider').owlCarousel({
		margin: 20,
		autoplay: false,
		autoplayTimeout: 4000,
		nav: false,
		smartSpeed: 1000,
		dots: true,
		autoplayHoverPause: true,
		loop: true,
		responsiveClass:true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 3
			}
		}
	});
		
	/*--------------------------------------------------------------
		TESTIMONIAL SLIDER
	--------------------------------------------------------------*/	

	$('#testimonial-slider').owlCarousel({
		margin: 30,
		autoplay: true,
		autoplayTimeout: 4000,
		nav: false,
		smartSpeed: 1000,
		dots: true,
		autoplayHoverPause: true,
		loop: true,
		responsiveClass:true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 2
			}
		}
	});
		
		/*END Testimonials LOGO*/
		
	/*--------------------------------------------------------------
		NEWS SLIDER
	  --------------------------------------------------------------*/	
	$('#blog-slider').owlCarousel({
		margin: 25,
		autoplay: false,
		autoplayTimeout: 4000,
		nav: false,
		smartSpeed: 1000,
		dots: true,
		autoplayHoverPause: true,
		loop: true,
		responsiveClass:true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});
	
	/*END NEWS SLIDER */

      
	/*START PARTNER LOGO*/
	$('.atf-brand-active').owlCarousel({
		margin:25,
		autoplay:true,
		items: 5,
		loop:true,
		nav:false,
		dot:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	})


    
})(jQuery);

