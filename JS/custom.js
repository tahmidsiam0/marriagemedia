$(window).on("load", function () {
  $('.preloader').fadeOut();
});
$('.bbbb').click(function () {
  $('.bbbb').addClass('aaaa');
});
$('.header_body').slick({
  infinite: true,
  dots: true,
  // autoplay: true,
  // autoplaySpeed: 2500
});
$('.review').slick({
  infinite: true,
  dots: true,
  // autoplay: true,
  // autoplaySpeed: 2500
});
$(window).on('scroll', function () {
  let scrollAm = $(window).scrollTop();
  if (scrollAm > 100) {
    $('.navbar').addClass('sticky');
    $('.slick_item').addClass('margin_sp2');
  } else {
    $('.navbar').removeClass('sticky');
    $('.slick_item').removeClass('margin_sp2');
  }


  if (scrollAm >= 0 && scrollAm < 400) {
    $('.home_a').addClass('active');
  }
  else {
    $('.home_a').removeClass('active');
  }
  console.log(scrollAm)

  if (scrollAm > 400 && scrollAm < 1130) {
    $('.service_a').addClass('active');
  }
  else {
    $('.service_a').removeClass('active');
  }

  if (scrollAm > 1130 && scrollAm < 2280) {
    $('.about_a').addClass('active');
  }
  else {
    $('.about_a').removeClass('active');
  }

  if (scrollAm > 2280 && scrollAm < 2803) {
    $('.blog_a').addClass('active');
  }
  else {
    $('.blog_a').removeClass('active');
  }

  if (scrollAm > 2803) {
    $('.contact_a').addClass('active');
  }
  else {
    $('.contact_a').removeClass('active');
  }



  if (scrollAm > 300) {
    $('#button').addClass('show');
  } else {
    $('#button').removeClass('show');
  }
});
$('#button').click(function () {
  $('html, body').animate({ scrollTop: 0 });
});