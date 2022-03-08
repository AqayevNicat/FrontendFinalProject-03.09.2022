$('.big-image-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.small-image-slider'
  });
  $('.small-image-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.big-image-slider',
    centerPadding: '0px'
  });
  $(".slick-next").html(`<i class="fa-solid fa-arrow-right"></i>`)
  $(".slick-prev").html(`<i class="fa-solid fa-arrow-left"></i>`)