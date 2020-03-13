/* nav bar */

$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

/* slider */

$( document ).ready(function() {
  $('#slider').owlCarousel({
      loop:true,
      autoplay:true,
      smartSpeed: 2000,
      margin:0,
      navText : ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      autoplayTimeout:4000,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:false,
              dots: true
          },
          768:{
              items:1,
              nav:false,
              dots: true
          },
          992:{
              items:1,
              nav:false,
              dots: true
          },
          1200:{
              items:1,
              nav:false,
              dots: true
          }
      }
  });
});

/* testamonial */

$(document).ready(function() {
  $('#testimonial-slider').owlCarousel({
      loop:true,
      autoplay:true,
      smartSpeed: 1500,
      margin:0,
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      animateIn: 'slideInRight',
      animateOut: 'slideOutLeft',
      autoplayTimeout:2000,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav: true,
              dots: false
          },
          768:{
              items:2,
              nav: true,
              dots: false
          },
          992:{
              items:3,
              nav: true,
              dots: false
          },
          1200:{
              items:3,
              nav: true,
              dots: false
          }
      }
  });
});





