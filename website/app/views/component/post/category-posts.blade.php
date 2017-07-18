<?php
    if (isset($categoryPosts) && count($categoryPosts) > 0) {
        ?>
        <div class="talk-box">
            <?php
            foreach ($categoryPosts as $key => $posts) {
                ?>
                <div class="col-sm-4">
                    <h2 class="bucket-title"><span><?= $key?></span></h2>
                <?php
                $isFirst = true;
                foreach ($posts as $post) {
                    if ($isFirst) {
                        $isFirst = false;
                        ?>
                        <div class="talk-article">
                            <!--start left-->
                            <div class="feature-article-item">
                                <a class=" feature-article-images" href="detail.html">
                                    <span class="items-block-img vertical"> <img src="<?= $post->image?>" alt="<?= $post->title?>">
                                    </span>
                                </a>
                                <div class=" feature-article-content">
                                    <h3 class="item-content-title">
                                        <a href="detail.html" title="<?= $post->title?>"><?= $post->title?></a>
                                    </h3>
                                </div>
                            </div>
                            <!--end left-->
                        </div>
                        <?php
                    } else {
                        ?>
                        <div class="talk-news">
                            <div class="media">
                                <div class="media-left">
                                    <a href="detail.html" title="">
                                        <img src="<?= $post->image?>" alt="<?= $post->title?>" style="width: 105px">
                                    </a>
                                </div>
                                <div class="media-left">
                                    <a href="detail.html" title="<?= $post->title?>"><?= $post->title?></a>
                                    <p class="publish">
                                        <span><i class="fa fa-calendar"></i> <time> <?= $post->post_time?> </time> </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <?php
                    }
                }
                ?>
                </div>
                <?php
            }
            ?>
            <div class="clearfix"></div>
        </div>
        <?php
    }
?>
