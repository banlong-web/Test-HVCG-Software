jQuery(document).ready(function ($) {
  AOS.init();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.header').addClass('active');
    } else {
      $('.header').removeClass('active');
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $('.go-back-top').show();
    } else {
      $('.go-back-top').hide();
    }
  });

  $('.go-back-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });

  $('.content-section .col-xl-4').hover( function () {
    $(this).addClass('active');
    $('.content-section').addClass('onhover');
  },
  function () {
    $(this).removeClass('active');
    $('.content-section').removeClass('onhover');
  });
  $('.menu-bar').on('click', function(e) {
    e.preventDefault();
    $('.flex-menu').show();
    $('.close-menu').show();
    $('.header-content').addClass('active');
  });
  $('.menu-mobile #menu-item-3 a i').on('click', function(e) {
    e.preventDefault();
    $('.dropdown-menu').toggleClass('active');
    
    // $(this).removeClass('fa-chevron-down');
    $(this).toggleClass('fa-chevron-up');
  });
  $('.close-menu').on('click', function(e) {
    $('.flex-menu').hide();
    $('.header-content').removeClass('active');
    $('.close-menu').hide();
  });
}, jQuery); 