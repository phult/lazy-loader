/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

jQuery(document).ready(function () {

    $(document).ready(function (e) {

        if (screen.width > 767) {
            //Hover Menu in Header
            $('ul.nav li.dropdown').hover(function () {
                $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
                $(this).addClass('open');
            }, function () {
                $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
                $(this).removeClass('open');
            });
        }


        $('.search-panel .dropdown-menu').find('a').click(function (e) {
            e.preventDefault();
            var param = $(this).attr("href").replace("#", "");
            var concept = $(this).text();
            $('.search-panel span#search_concept').text(concept);
            $('.input-group #search_param').val(param);
        });

        if (screen.width < 767) {
            $(".open-menu").click(function () {
                $('.darkness ').delay(200).show(500);
            }, function () {
                $('.darkness ').show();
            });
            $(".darkness ").click(function () {
                $('.darkness , .list-categories').hide();
            });

            
            $('.open-menu').click(function () {
                $("#myNavbar").css({
                    '-webkit-transform': 'translateX(0)',
                    '-ms-transform': 'translateX(0)',
                    'transform': 'translateX(0)'
                });
                $('body').css('overflow','hidden');
                $('.darkness, .darkness .close').css({
                    '-webkit-transform': 'translateX(0)',
                    '-ms-transform': 'translateX(0)',
                    'transform': 'translateX(0)'
                });
                $('.navbar-nav').removeClass('pull-right');
                $('#MainMenu').css('height', '100%;');
            });
            $('.darkness ').click(function () {
                $("#myNavbar, .darkness, .darkness .close").css({
                    '-webkit-transform': 'translateX(-100%)',
                    '-ms-transform': 'translateX(-100%)',
                    'transform': 'translateX(-100%)'
                }).removeClass('in');
                $('body').css('overflow','')
            });
        }


        $('.navbar .dropdown > a').click(function () {
            location.href = this.href;
        });

//        $(function () {
//            $(document).off('click.bs.tab.data-api', '[data-hover="tab"]');
//            $(document).on('mouseenter.bs.tab.data-api', '[data-toggle="tab"], [data-hover="tab"]', function () {
//                $(this).tab('show');
//            });
//        });


        $('.key-word').bind('keyup change', function () {
            if (this.value.length > 0) {
                //$('.body').removeClass('home-search').addClass('page-result');
                $('#search-suggestion').show();
                //$('footer').css('position','relative');
                $(".search-suggest").show().css('height', 'auto');

            } else {

            }
        });

        $('body').click(function () {
            $("#search-suggestion").hide();
        });



        $(window).scroll(function () {
            if ($(window).scrollTop() > 150) {
                $("#back-to-top ").show();
            } else {
                $("#back-to-top ").hide();
            }
        });


    });
    //Set No Image
    $(window).bind('load', function () {
        $('img').each(function () {
            if ((typeof this.naturalWidth != "undefined" && this.naturalWidth == 0) || this.readyState == 'uninitialized') {
                $(this).attr('src', 'images/noimage.png');
            }
        });
    });
    $(".content img").removeAttr('style').parents('p').css('text-align', 'center');

});