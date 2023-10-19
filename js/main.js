$(function () {

    /* nav open, close */
    $('.nav_open').click(function () {
        $('nav').animate({
            'right': 0,
        }, 1000);
    });
    $('.nav_close').click(function () {
        $('nav').animate({
            'right': '-100%',
        }, 1000);
    });//nav open, close

    /* depth01.mouseenter */
    let menu01 = $('nav .left_nav .depth01 li');
    let menu02 = $('.depth02 > li > a');
    let menu03 = $('.depth03');

    menu01.mouseenter(function () {
        $('.depth02').removeClass('on');
        $('.depth02').eq($(this).index()).addClass('on');

        menu01.removeClass('on');
        $(this).addClass('on');
    });//depth01.mouseenter

    /* depth02.click */
    menu02.click(function () {
        if ($(this).next().css('display') == 'none') {
            menu03.slideUp();
            $(this).next().slideDown();

            menu02.removeClass('on');
            $(this).addClass('on');
        } else {
            $(this).next().slideUp();
            $(this).removeClass('on');
        }
    });//depth02.click

    /* swiper */
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });//swiper

    /* item02, item04.mouseenter */
    let item02 = $('.cont02 .inner .list li');
    let item04 = $('.cont04 .inner .list li');
    item02.mouseenter(function () {
        item02.removeClass('on');
        $(this).addClass('on');
    });
    item04.mouseenter(function () {
        item04.removeClass('on');
        $(this).addClass('on');
    });//item0204.mouseenter

    /* wrap03.mouseenter */
    $('.wrap03').mouseenter(function () {
        $('.wrap03').addClass('on');
        $(this).removeClass('on');
    });//wrap03.mouseenter
    
    //pagination05
    //Pagination custom로 바뀌는 숫자 스와이퍼 하나 더 만들고 연동하기

    var swiper = new Swiper(".swiper05", {
        pagination: {
          el: ".pagination05",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });//swiper05

    var swiper = new Swiper(".swiper07", {
        slidesPerView: 4,
        spaceBetween: 14,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
});//jquery end