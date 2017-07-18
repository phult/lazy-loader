<?php
    if (isset($posts) && count($posts) > 0) {
        ?>
        <div class="news-container">
            <div class="col-sm-8">
                <h2 class="bucket-title"><span>Latest</span></h2>
                <div class="news-box row">
                    <?php
                        foreach ($posts as $item) {
                            ?>
                            <!--start item-->
                            <div class="feature-article-item col-sm-4">
                                <a class=" feature-article-images" href="detail.html">
                                    <span class="items-block-img vertical"> <img src="<?= $item->image?>" alt="<?= $item->title?>">
                                    </span>
                                </a>
                                <div class=" feature-article-content">
                                    <h3 class="item-content-title">
                                        <a href="detail.html" title="<?= $item->title?>"><?= $item->title?></a>
                                    </h3>
                                </div>
                            </div>
                            <!--end item-->
                            <?php
                        }
                    ?>
                    <div class="clearfix"></div>
                </div>
            </div>
            <div class="col-sm-4 new-right">
                <h2 class="bucket-title sitebar-title"><span>Follow Us</span></h2>
                <div class="content_element">
                    <img src="images/follow-us.jpg" alt="">
                </div>
                <div class="advertising _element">
                    <img class="img-responsive" src="images/6.gif" alt="">
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
        <?php
    }
?>
