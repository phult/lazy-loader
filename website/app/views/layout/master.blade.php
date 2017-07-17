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

        <link href="fonts/awesome/font-awesome.css" rel="stylesheet" type="text/css"/>
        <link href="css/bootstrap.css?v=1137" rel="stylesheet" type="text/css"/>
        <link href="css/style.css?v=1138" rel="stylesheet" type="text/css"/>
        <link href="css/responsive.css" rel="stylesheet" type="text/css"/>
        <!--[if lt IE 9]>
        <script src="js/html5.js"></script>
        <![endif]-->
    </head>
    <body>
        <?php echo View::make('/layout/header') ?>
        <main role="main" id="main">
            @yield("content")
        </main>
        <?php echo View::make('/layout/footer') ?>
        <a href="javascript:void(0);" onclick="$('html, body').animate({scrollTop: $('html,body').offset().top}, 700);" id="back-to-top">
            <span class="glyphicon glyphicon-arrow-up"></span>
        </a>
        <div class="clearfix"></div>
        <script src="js/jquery.js" type="text/javascript"></script>
        <script src="js/bootstrap.js" type="text/javascript"></script>
        <script src="js/script.js" type="text/javascript"></script>
</html>
