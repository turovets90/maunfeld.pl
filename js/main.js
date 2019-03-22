$(document).ready(function(){

    $('#search_toggler').on('click', function(){
        $('#search_block').slideDown();
    });
    $('.search_block .s_close').on('click', function(){
        $('#search_block').slideUp();
    });

    $('.main_menu .arrow').click(function(){
        $(this).toggleClass('rotate');
        $(this).next().slideToggle();
    });

    $('.hamburger').click(function () {
        $('.main_menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        $('.main_menu .mm_close').click(function () {
            $('.main_menu').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".main_menu.open").length) {
            $(".main_menu.open").removeClass('open');
            $("html").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });


    if($('.main_slider .slider_item').length >1){
        $('.main_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots:false,
            fade:true,
            //speed: 1000,
            //autoplay: true,
            //autoplaySpeed: 2000,
        });
    }

    $('.ms_prev').click(function(){
        $('.main_slider').slick('slickPrev');
    });

    $('.ms_next').click(function(){
        $('.main_slider').slick('slickNext');
    });


   // if($(".main_cat_slider .c_slider_item").length >7){
        $('.main_cat_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            variableWidth: true,
        });
    //}


    $('.mc_prev').click(function(){
        $('.main_cat_slider').slick('slickPrev');
    });

    $('.mc_next').click(function(){
        $('.main_cat_slider').slick('slickNext');
    });




    $('.sale_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true,
    });

    $('.sale_prev').click(function(){
        $('.sale_slider').slick('slickPrev');
    });

    $('.sale_next').click(function(){
        $('.sale_slider').slick('slickNext');
    });


    $('.hits_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true,
    });

    $('.hits_prev').click(function(){
        $('.hits_slider').slick('slickPrev');
    });

    $('.hits_next').click(function(){
        $('.hits_slider').slick('slickNext');
    });


    $('.new_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true,
    });

    $('.new_prev').click(function(){
        $('.new_slider').slick('slickPrev');
    });

    $('.new_next').click(function(){
        $('.new_slider').slick('slickNext');
    });

    /*
    $('.hamburger').click(function () {
        $('.main_menu').slideToggle();
        $(this).toggleClass('act');
    });
    */

/*


    $('.custom_item_title').click(function(){
        $(this).toggleClass('active');
        $(this).next().slideToggle();
    });


    if($(".our_specialists .slider_item").length >3){
        $('.our_specialists').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots:false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 680,
                    settings: {
                        slidesToShow: 1,
                    }
                }

            ]
        });
    }
    $('.specialists_prev').click(function(){
        $('.our_specialists').slick('slickPrev');
    });

    $('.specialists_next').click(function(){
        $('.our_specialists').slick('slickNext');
    });


    if($(".reviews_slider .slider_item").length >3){
        $('.reviews_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots:false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 680,
                    settings: {
                        slidesToShow: 1,
                    }
                }

            ]
        });
    }
    $('.reviews_prev').click(function(){
        $('.reviews_slider').slick('slickPrev');
    });

    $('.reviews_next').click(function(){
        $('.reviews_slider').slick('slickNext');
    });


    $('.file').filestyle({
        text : 'Прикрепить файл',
        dragdrop: false,
    });
    $(".phone").mask("+375 (99) 999-99-99");





    */

});


