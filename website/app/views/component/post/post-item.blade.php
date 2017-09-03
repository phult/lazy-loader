<?php
$href = URL::route('post:view', ['postSlug' => App\Utils\StringUtil::getSlug($post->title), 'postId' => $post->id]);
?>
<div class="media col-sm-6">
    <div class="media-left">
        <a class="title" href="<?= $href; ?>" target="<?= $post->type == Post::TYPE_LINK ? '_blank' : ''?>" title="<?= $post->title; ?>">
            <span class="vertical" style="overflow: hidden;display: block;height: 70px;">
                <img src="<?= ($post->image != null && $post->image != '') ? $post->image : $post->page->avatar; ?>"
                    alt="<?= $post->title; ?>"
                    style="width: 105px"/>
                <?php
                switch ($post->type) {
                    case Post::TYPE_LINK:
                        ?><i class="post-type-icon glyphicon glyphicon-link"></i><?php
                        break;
                    case Post::TYPE_IMAGE:
                        ?><i class="post-type-icon glyphicon glyphicon-camera"></i><?php
                        break;
                    case Post::TYPE_VIDEO:
                        ?><i class="post-type-icon glyphicon glyphicon-play-circle"></i><?php
                        break;
                    default:
                        break;
                }
                ?>
            </span>
        </a>
    </div>
    <div class="media-left">
        <?php
        if ($post->page != null) {
        ?>
        <a class="link"
            href="<?= URL::route('page:view', ['pageSlug' => App\Utils\StringUtil::getSlug($post->page->name), 'pageId' => $post->page->id]); ?>"
            target="_blank"
            title="<?= $post->page->name; ?>">
            <?= $post->page->name; ?>
        </a>
        <?php
        }
        ?>
        <a class="title-separator"></a>
        <a class="time"><?= App\Utils\DateTimeUtil::elapseTime($post->post_time); ?></a>
        <br/>
        <a class="title" href="<?= $href; ?>" target="<?= $post->type == Post::TYPE_LINK ? '_blank' : ''?>" title="<?= $post->title; ?>"><?= $post->title; ?></a>
        <p class="publish">
            <span><i class="fa fa-thumbs-o-up"></i> <?= $post->likes; ?> </span>
            <span><i class="fa fa-commenting"></i> <?= $post->comment_number; ?> </span>
            <span><i class="fa fa-eye"></i> <?= $post->views; ?> </span>
        </p>
    </div>
</div>
