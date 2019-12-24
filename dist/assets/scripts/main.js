window.onload = function () {

  anchors()
  openMenu()
  slickGallery()
  statisticForm()
  parallax()
  $('.words').midnight()

}

window.onscroll = function () {

  wordsHide()
  numberChange()
  headerFixed()
  parallax()
}

function headerFixed() {
  if (window.pageYOffset > 0) {
    $('.header').addClass('colored')
  }else{
    $('.header').removeClass('colored')
  }
}

function wordsHide() {

  if ($(window).width() > 1023) {

    if (window.pageYOffset > $(".contacts").offset().top && window.pageYOffset < $(".join").offset().top + 0){
      $('.words').fadeIn(200)
    }
    else if (window.pageYOffset > $(".join").offset().top + 0){
      $('.words').fadeOut(200)
    }

  }

}

function numberChange() {

  var offsetGallery = $(".gallery").offset().top,
      offsetStatistic = $(".statistic").offset().top,
      offsetHalls = $(".halls").offset().top,
      offsetProgram = $(".program").offset().top,
      offsetClub = $(".club").offset().top,
      offsetContacts = $(".contacts").offset().top,
      offsetJoin = $(".join").offset().top;

  if ($(window).width() > 1023) {

    if (window.pageYOffset > offsetGallery && window.pageYOffset < offsetStatistic){
      $('.words-number').html('03/08')
    }
    else if (window.pageYOffset > offsetStatistic && window.pageYOffset < offsetHalls){
      $('.words-number').html('04/08')
    }
    else if (window.pageYOffset > offsetHalls && window.pageYOffset < offsetProgram){
      $('.words-number').html('05/08')
    }
    else if (window.pageYOffset > offsetProgram && window.pageYOffset < offsetClub){
      $('.words-number').html('06/08')
    }
    else if (window.pageYOffset > offsetClub && window.pageYOffset < offsetContacts){
      $('.words-number').html('07/08')
    }
    else if (window.pageYOffset > offsetContacts && window.pageYOffset < offsetJoin){
      $('.words-number').html('08/08')
    }
    else {
      $('.words-number').html('02/08')
    }
  }
}

function slickGallery() {

    $('.gallery-content').slick({
      slidesToShow: 1,
      dots: true,
      prevArrow: '.gallery-nav__item_left',
      nextArrow: '.gallery-nav__item_right'
    });


}


function statisticForm() {

  $("input[type='tel']").inputmask("+7 (999) 999-99-99");

  $('.statistic-form select').selectize({
    create: true,
    sortField: 'text'
  });

}






function openMenu() {
  var button = $('.header-gamburger'),
      nav = $('.header-nav');

  $(button).click(function() {
    if ($(nav).hasClass('open')) {
      $(nav).removeClass('open')
      $(this).removeClass('header-gamburger_close')
    }else{
      $(nav).addClass('open')
      $(this).addClass('header-gamburger_close')
    }
  })
}


$('.halls-item.active .halls-slides__wrap').on('init', function(event, slick){
  $('.halls-item .halls-counter p').html('01 / ' + '0' + slick.slideCount)
});
$('.halls-item.active .halls-slides__wrap').slick({
  slidesToShow: 1,
  arrows: true
});
$('.halls-item.active .halls-slides__wrap').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  $('.halls-item .halls-counter p').html( '0' + (nextSlide + 1) + ' / ' + '0' + slick.slideCount)
});

$('.halls-slider').tabslet({
  active: 3,
  container: '#slider-container',
  animation: true,
  delay: 5000
});

$('.program-body').tabslet({
  active: 1,
  animation: true
});

$('.halls-tabs__item').click(function () {
  var index = $(this).index(),
      items = $('.halls-content');
  $('.halls-tabs__item').addClass('disabled')
  $(items).removeClass('active')
  setTimeout(function () {
    $('.halls-tabs__item').removeClass('disabled')
    $(items).css('display','none')
    $(items[index]).css('display','block')
    setTimeout(function () {
      $(items[index]).addClass('active')
    },200)
  }, 300)
})

$('.halls-slider').on("_before", function() {
  $('.halls-slides__wrap.slick-initialized').slick('unslick');
});

$('.halls-slider').on("_after", function(tab) {
  var attribute = $(this).find('a').attr('style'),
      active = $(tab.currentTarget).find('.halls-slides__wrap');
  $('.halls-item').removeClass('active')
  $(tab.currentTarget).addClass('active')

    $(active).on('init', function(event, slick){
      $('.halls-item .halls-counter p').html('01 / ' + '0' + slick.slideCount)
    });
    $(active).slick({
      slidesToShow: 1,
      arrows: true
    });
    $(active).on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.halls-item .halls-counter p').html( '0' + (nextSlide + 1) + ' / ' + '0' + slick.slideCount)
    });

});

function anchors() {


      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        const offsets = Number($(this).attr('data-offset'));
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top + offsets
            }, 1000);
            return false;
        }
    }
  });
}

function parallax() {
  var st = $(this).scrollTop(),
      value = st/10;
  var about = $('.about');
      // console.log(st+ ' st')
  // $('.about').css('transform', 'translateY('+value+'px)')
  if (value > 0) {
    var welcomeVal = st / 8;
    $('.welcome').css('transform', 'translateY(-'+welcomeVal+'px)')
    // $('.about-image').css('transform', 'translateY('+aboutVal+'px) translateX(-40%)')
    // $('.about-content').css('transform', 'translateY('+aboutVal+'px)')
    // $('.about .welcome-start').css('transform', 'translateY('+aboutVal+'px)')
  }
  if (value < 230) {
    var aboutVal = (st - 600)/7;
    $('.about-image').css('transform', 'translateY('+aboutVal+'px) translateX(-40%)')
    $('.about').css('transform', 'translateY(-'+aboutVal+'px)')
    $('.about-content').css('transform', 'translateY('+aboutVal+'px)')
    $('.about .welcome-start').css('transform', 'translateY('+aboutVal+'px)')
  }
  if (st > 2100 && st < 3400){
    var galleryVal = (st - 2100)/8;
    $('.gallery .welcome-start').css('transform', 'translateY('+galleryVal * 1.5 +'px)')
    $('.gallery__wrap').css('transform', 'translateY('+galleryVal * 1.5 +'px)')
    $('.gallery-slider').css('transform', 'translateY('+galleryVal * 1.5 +'px)')
    // $('.gallery-container').css('background-position', '0 '+galleryVal +'px')
    $('.gallery').css('transform', 'translateY('+galleryVal +'px)')
  }
  if (st > 3100 && st < 5300){
    var statisticVal = (st - 3100)/6;
    if (statisticVal < 140){
      $('.statistic-image').css('transform', 'translateY(-'+statisticVal+'px)')
    }
    $('.statistic').css('transform', 'translateY(-'+statisticVal+'px)')
    $('.statistic .wrap').css('transform', 'translateY('+statisticVal+'px)')
  }
  if (st > 5400 ){
    var hallsVal = (st - 5400)/4;
    $('.halls').css('transform', 'translateY(-'+hallsVal+'px)')
    $('.halls__wrap').css('transform', 'translateY('+hallsVal+'px)')
    // $('.statistic-image').css('transform', 'translateY(-'+statisticVal+'px)')
    // $('.statistic .wrap').css('transform', 'translateY('+statisticVal+'px)')
  }
  if (st > 6700 ){
    var programVal = (st - 6700)/4;
    $('.program').css('transform', 'translateY(-'+programVal+'px)')
    $('.program .wrap').css('transform', 'translateY('+programVal+'px)')
    // $('.statistic-image').css('transform', 'translateY(-'+statisticVal+'px)')
    // $('.statistic .wrap').css('transform', 'translateY('+statisticVal+'px)')
  }
  if (st > 8500 ){
    var clubVal = (st - 8500)/6;
    $('.club').css('transform', 'translateY(-'+clubVal+'px)')
    $('.club .wrap').css('transform', 'translateY('+clubVal+'px)')
    // $('.statistic-image').css('transform', 'translateY(-'+statisticVal+'px)')
    // $('.statistic .wrap').css('transform', 'translateY('+statisticVal+'px)')
  }
  if (st > 10000 ){
    var contactsVal = (st - 10000)/6;
    $('.contacts').css('transform', 'translateY(-'+contactsVal+'px)')
    $('.contacts .wrap').css('transform', 'translateY('+contactsVal+'px)')
    // $('.statistic-image').css('transform', 'translateY(-'+statisticVal+'px)')
    // $('.statistic .wrap').css('transform', 'translateY('+statisticVal+'px)')
  }

}
