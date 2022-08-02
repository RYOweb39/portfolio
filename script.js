const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  });

jQuery('.drawer_icon').on('click', function(e) {
    e.preventDefault();

    jQuery('.drawer_icon').toggleClass('is-active');
    jQuery('.drawer_content').toggleClass('is-active');
    jQuery('.drawer_bg').toggleClass('is-active');

    return false;
});

jQuery(window).on("scroll", function($) {
    if (jQuery(this).scrollTop() > 500) {
        jQuery('.totop').show();
    } else {
        jQuery('.totop').hide();
    }
});

// jQuery('.totop').click(function() {
//     jQuery('body, html').animate({
//         scrollTop: 0
//     }, 500);
//     return false;
// });

jQuery('a[href^="#"]').on('click', function() {
    
    var id = jQuery(this).attr('href');
    var position = 0;
    var header = jQuery('.header').innerHeight();
    if (id != '#') {
        var position = jQuery(id).offset().top - header;
    }
    // console.log(id);
    // console.log(position);
    jQuery('html, body').animate({
        scrollTop: position
    }, 500);
});

jQuery('.header_nav li a').on('click', function() {
    jQuery('.header_nav li a').removeClass('is-active');
    jQuery(this).addClass('is-active');
});

jQuery('.qa_box_q').on('click', function() {
    jQuery(this).next().slideToggle();
    jQuery(this).children('.qa_box_icon').toggleClass('is_open');
});

jQuery('.js_close_button').on('click', function(e) {
    e.preventDefault();
    // alert('click');
    var target = jQuery(this).data('target');
    jQuery(target).hide();
});

jQuery('.js_open_button').on('click', function(e) {
    e.preventDefault();
    // alert('click');
    var target = jQuery(this).data('target');
    jQuery(target).show();
});
