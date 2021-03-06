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


    if($(window).innerWidth() < 575){
        $('.stock_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots:true,
            autoplay: true,
            autoplaySpeed: 2000,
        });



        $('.category_list > .row').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots:true,
            autoplay: true,
            autoplaySpeed: 2000,
        });

    }



    $('.related_products_list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                }
            }
        ]
    });

    $('.related_prev').click(function(){
        $('.related_products_list').slick('slickPrev');
    });

    $('.related_next').click(function(){
        $('.related_products_list').slick('slickNext');
    });




    if($('.main_slider .slider_item').length >1){
        $('.main_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots:false,
            fade:true,
            //speed: 1000,
            autoplay: true,
            autoplaySpeed: 2000,
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
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        variableWidth: false,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        variableWidth: false,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: false,
                    }
                }
            ]
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
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                }
            }
        ]
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
        responsive: [

            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                }
            }
        ]
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
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                }
            }
        ]
    });

    $('.new_prev').click(function(){
        $('.new_slider').slick('slickPrev');
    });

    $('.new_next').click(function(){
        $('.new_slider').slick('slickNext');
    });


    $('.product_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.product_slider_nav'
    });

    $('.product_slider_nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.product_slider',
        vertical:true,
        focusOnSelect: true
    });


    $('.catalog_nav .arrow').click(function () {
        $(this).toggleClass('act');
        $(this).parent().toggleClass('active');
        $(this).next().slideToggle();
    });


    $('.catalog_title').click(function () {
        $(this).toggleClass('act');
        $('.catalog_nav').slideToggle();
    });


    $('.filter_nav li').each(function(){
        var f_item=$(this).find('.filter_item');
        var f_arrow=$(this).find('.arrow');
        var f_level2=$(this).find('.level2');
        $(f_item).click(function () {
            $(f_arrow).toggleClass('act');
            $(f_arrow).parent().toggleClass('active');
            $(f_level2).slideToggle();
        });
    });



    $('.filter_title').click(function () {
        $(this).toggleClass('act');
        $('.filter_nav').slideToggle();
    });


    $(".phone").mask("+48 (99) 999-99-99");

    $("#modal_form").validate();
    $("#payment_form").validate();



    $('.amount .down').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.amount .up').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });



    $('#up').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });



    $('.pr_desc_row .item').each(function(){
        var more=$(this).find('.more');
        var hidden_text=$(this).find('.hidden_text');
        $(more).click(function(){
            if($(hidden_text).is(':visible')){
                $(hidden_text).slideUp();
                $(more).text('Przeczytaj więcej');
            }else{
                $(hidden_text).slideDown();
                $(more).text('Upadek');
            }
        });
    });





    $(window).resize(function(){
        
        var pr_scroll_nav = $(".pr_scroll_nav");
        var header = $('header').outerHeight();
        $(window).scroll(function(){
            if ($(window).scrollTop() > header) {
                $('header').addClass('fixed');
            } else {
                $('header').removeClass('fixed');
            }
        });
        $('header').next().css({
            "margin-top":+header+"px"
        });
        if(pr_scroll_nav){
            var pr_scroll_nav_top = $(pr_scroll_nav).offset().top;
            console.log(pr_scroll_nav_top);
            $(window).scroll(function(){
                if ($(window).scrollTop() > pr_scroll_nav_top) {
                    $(pr_scroll_nav).addClass('fixed').css({
                        "top":"50px"
                    });
                } else {
                    $(pr_scroll_nav).removeClass('fixed');
                }
            });
        }


        $("a.ankor").click(function () {
            var elementClick = $(this).attr("href");
            var destination = $(elementClick).offset().top;
            $('html,body').animate( { scrollTop: destination-header }, 1100 );
            return false;
        });

    });
    $(window).resize();







});


