<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title><?= isset($title) ? $title : 'LazyLoad.net' ?></title>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />

        <?= HTML::style('fonts/awesome/font-awesome.css?v=' . Config::get("app.version")); ?>
        <?= HTML::style('css/bootstrap.css?v=' . Config::get("app.version")); ?>
        <?= HTML::style('css/style.css?v=' . Config::get("app.version")); ?>
        <?= HTML::style('css/responsive.css?v=' . Config::get("app.version")); ?>
        <?= HTML::style('slick/slick.css'); ?>
        <?= HTML::style('slick/slick-theme.css'); ?>
        <!--[if lt IE 9]>
        <script src="js/html5.js"></script>
        <![endif]-->
    </head>
    <body>
        <?php echo View::make('/layout/header') ?>
        <main role="main" id="main">
            @yield("content")
        </main>
        <!--?php echo View::make('/layout/footer') ?-->
        <a href="javascript:void(0);" onclick="$('html, body').animate({scrollTop: $('html,body').offset().top}, 700);" id="back-to-top">
            <span class="glyphicon glyphicon-arrow-up"></span>
        </a>
        <div class="clearfix"></div>
        <?= HTML::script('js/jquery.js'); ?>
        <?= HTML::script('slick/slick.min.js'); ?>
        <?= HTML::script('js/bootstrap.js?v=' . Config::get("app.version")); ?>
        <?= HTML::script('js/script.js?v=' . Config::get("app.version")); ?>
        <script>
        	$(document).ready(function () {
        		$('.gallery').slick({
                    dots: true,
                    infinite: false,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 500000,
                    centerMode: true
                });
        	});
        </script>
</html>
