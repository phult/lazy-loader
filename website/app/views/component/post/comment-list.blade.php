<div id="comment" class="talk-box" style="display:none">
    <div class="col-sm-12">
        <h2 class="bucket-title"><span>Comments</span></h2>
        <div class="talk-news row">
            <?php
            foreach ($comments as $comment) {
                if ($comment->content == null || $comment->content == '') {
                    continue;
                }
            ?>
                <div class="media col-sm-6" style="border: none; <?= $comment->parent_id != null ? 'padding-left: 30px;' : ''?>">
                    <div class="media-left">
                        <a class="title" title="<?= $comment->name; ?>">
                            <span style="display: block">
                                <img src="<?= $comment->avatar; ?>" alt="<?= $comment->name; ?>" style="width: 20px">
                            </span>
                        </a>
                    </div>
                    <div class="media-left">
                        <?php
                        if ($comment->name != null) {
                        ?>
                        <a class="link"
                            title="<?= $comment->name; ?>">
                            <?= $comment->name; ?>
                        </a>
                        <?php
                        }
                        ?>
                        <a class="title-separator"></a>
                        <a class="time"><?= App\Utils\DateTimeUtil::elapseTime($comment->post_time); ?></a>
                        <br/>
                        <a class="title" title="<?= $comment->content; ?>"><?= $comment->content; ?></a>
                    </div>
                </div>
            <?php
            }
            ?>
        </div>
    </div>
    <div class="clearfix"></div>
</div>
