<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>@yield("title")</title>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />

        <?= HTML::style('fonts/awesome/font-awesome.css?v=' . Config::get("app.version")); ?>
        <?= HTML::style('css/bootstrap.css?v=' . Config::get("app.version")); ?>
        <?= HTML::style('css/style.css?v=' . Config::get("app.version")); ?>
        <?= HTML::style('slick/slick.css'); ?>
        <?= HTML::style('slick/slick-theme.css'); ?>
        <!--[if lt IE 9]>
        <script src="js/html5.js"></script>
        <![endif]-->
    </head>
    <body>
        <?= HTML::script('js/jquery.js'); ?>
        <?= HTML::script('js/bootstrap.js?v=' . Config::get("app.version")); ?>
        <?= HTML::script('js/ui.js?v=' . Config::get("app.version")); ?>
        <?= HTML::script('js/main.js?v=' . Config::get("app.version")); ?>
        <?php echo View::make('/layout/header') ?>
        <main role="main" id="main">
            @yield("content")
        </main>
        <!--?php echo View::make('/layout/footer') ?-->
        <div class="clearfix"></div>
    </body>
</html>
