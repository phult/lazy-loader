<?php
    if (isset($posts) && count($posts) > 0) {
        ?>
        <div class=" feature-article-container">
            <h2 class="bucket-title container-fluid"><span>Hot posts</span></h2>
            <div class="feature-article-box">
                <?php
                    foreach ($posts as $item) {
                        ?>
                        <!--start item-->
                        <div class="feature-article-item col-md-20 col-sm-4">
                            <a class=" feature-article-images" href="<?= URL::route('post:view')?>">
                                <span class="items-block-img vertical"> <img src="<?= $item->image?>" alt="<?= $item->title?>">
                                </span>
                            </a>
                            <div class=" feature-article-content">
                                <h3 class="item-content-title">
                                    <a href="<?= URL::route('post:view')?>" title="<?= $item->title?>"><?= $item->title?></a>
                                </h3>
                            </div>
                        </div>
                        <!--end item-->
                        <?php
                    }
                ?>
            </div>
        </div>
        <?php
    }
?>
