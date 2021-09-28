document.addEventListener("DOMContentLoaded", function() {

    $(window).scroll(function() {
        if ( $(window).scrollTop() >= 150) {
            $('body').addClass('onScroll');
        } else {
            $('body').removeClass('onScroll');
        }
    });
    $('.jsMenu').on('click', function() {
        $('body').toggleClass('menuOpen');
    });
    if ($(window).width() < 992) {
      if ($(".directions-wrapper").length > 0) {
        $(".directions-wrapper").mCustomScrollbar({
          axis:"x" // horizontal scrollbar
        });
      }

    }
    $('.jsQuiz').on('click', function() {
      if ($(window).width() >= 992) {
        $('body').toggleClass('quizOpen');
        $('.quiz').attr('data-active-step', 0)
        $('.quiz:not(.quiz-mobi) .quiz-step').removeClass('active')
        $('.quiz:not(.quiz-mobi) .quiz-step').eq(0).addClass('active')
      } else {
        $([document.documentElement, document.body]).animate({
          scrollTop: $(".quiz-mobi").offset().top - 100
      }, 2000);
      }

    });
    var sectionWidth = $('.section-wrapper').width();
    var windowWidth = $(window).width();
    var centerPadding = (windowWidth - sectionWidth - 60) / 2 + 'px'

    $('.main-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '20px',
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '20px',
            }
          }
        ]
      });
    $('.cases-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        centerMode: true,
        centerPadding: centerPadding,
        prevArrow: $('.cases .prev-arrow'),
        nextArrow: $('.cases .next-arrow'),
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false
            }
          }
        ]
      }).on('afterChange', function(event, slick, currentSlide, nextSlide){
        var index = currentSlide
        $('.cases .cases-nav ul').find('.active').removeClass('active')
        $('.cases .cases-nav ul li').eq(index).addClass('active')
      });
      $('.cases-slider .slick-dots').css('maxWidth', sectionWidth + 'px')
      $('.new-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        prevArrow: $('.new .prev-arrow'),
        nextArrow: $('.new .next-arrow'),
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false
            }
          }
        ]
      }).on('afterChange', function(event, slick, currentSlide, nextSlide){
        var index = currentSlide
        $('.new .cases-nav ul').find('.active').removeClass('active')
        $('.new .cases-nav ul li').eq(index).addClass('active')
      });
    $('.cases-nav ul li').on('click', function() {
        var index = $(this).index()
        $(this).parent().find('.active').removeClass('active')
        $(this).addClass('active')
        $(this).closest('section').find('.slick-slider').slick('slickGoTo', index);
    });
    $('input[type="tel"]').inputmask('(99) 9999[9]-9999')
    // quiz
    var formData = [];
    $('.jsQuizNext').on('click', function() {
        var index = Number($(this).closest('.quiz-step').attr('data-step'))
        var value = $(this).attr('data-value')
        if(value && value.length > 0) {
            formData.push(value);
        }
        
        $(this).closest('.quiz-step').removeClass('active').next().addClass('active')
        $(this).closest('.quiz').find('.slick-dots li').removeClass('slick-active').eq(index - 3).addClass('slick-active')
        $(this).closest('.quiz').attr('data-active-step', index + 1)
        console.log(formData)
    });
    if ($(".custom-scrollbar").length > 0) {
      $(".custom-scrollbar").mCustomScrollbar({
        axis:"x" // horizontal scrollbar
      });
    }

    $('.jqFilter').on('click', function() {
      var filter = $(this).attr('data-filter');
      $(this).parent().find('.active').removeClass('active')
      $(this).addClass('active')
      if (filter === 'all') {
        $('body').find('[data-filter]:not(.jqFilter)').addClass('active')
      } else {
        $('body').find(`.active[data-filter]`).removeClass('active')
        $('body').find(`[data-filter="${filter}"]`).addClass('active')
      }
  });
  var filterInit = $('body').find('.jqFilter.active').attr('data-filter');
  if (filterInit === 'all') {
    $('body').find('[data-filter]:not(.jqFilter)').addClass('active')
  } else {
    $('body').find(`.active[data-filter]`).removeClass('active')
    $('body').find(`[data-filter="${filterInit}"]`).addClass('active')
  }
  $('.jsImage').on('click', function() {
    $(this).closest('.case-image').parent().find('.full-image').toggleClass('active');
  });
  $('.jsVideo').on('click', function() {
    $(this).closest('.video-wrapper').parent().find('.video-video').toggleClass('active');
  });
  $('.switcher-box').on('click', function() {
    $(this).closest('.price-header').toggleClass('active');
  });
});
