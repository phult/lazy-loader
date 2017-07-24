<div class="media col-sm-6">
    <div class="media-left">
        <a class="title" href="<?= URL::route('post:view', [
                'postSlug' => App\Utils\StringUtil::getSlug($post->title),
                'postId' => $post->id
            ])?>" title="<?= $post->title; ?>">
            <span class="vertical" style="overflow: hidden;display: block;height: 70px;">
                <img src="<?= $post->image; ?>" alt="<?= $post->title; ?>" style="width: 105px">
            </span>
        </a>
    </div>
    <div class="media-left">
        <?php
        if ($post->page != null) {
        ?>
        <a class="link"
            href="<?= $post->page->url; ?>"
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
        <a class="title" href="<?= URL::route('post:view', [
                'postSlug' => App\Utils\StringUtil::getSlug($post->title),
                'postId' => $post->id
            ])?>" title="<?= $post->title; ?>"><?= $post->title; ?></a>
        <p class="publish">
            <span><i class="fa fa-thumbs-o-up"></i> <?= $post->likes; ?> </span>
            <span><i class="fa fa-commenting"></i> <?= $post->comment_number; ?> </span>
            <span><i class="fa fa-eye"></i> <?= $post->views; ?> </span>
        </p>
    </div>
</div>
