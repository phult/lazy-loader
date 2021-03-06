@extends("layout.master")
@section("title","$post->title  | Lazyload.net")
@section("content")
<section class="content-full main-content">
	<article class="post-entry col-sm-8" itemscope="" itemtype="https://schema.org/Article">
		<header>
			<!--h1 class="entry-title"></h1-->
			<p role="user-action" style="margin-top: 10px">
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

			</p>
		</header>
		<div class="content">
			<?php
			if ($post->images != null && $post->images != '') {
				$imageSpliter = explode(',', $post->images);
				?>
				<div class="gallery">
					<?php
					foreach ($imageSpliter as $imageURL) {
						$fileExtension = App\Utils\StringUtil::getFileExtension($imageURL);
						if ($fileExtension == 'gif' || $imageURL == '') {
							continue;
						}
						?>
						<a style="text-align: center;"><img src="<?= $imageURL; ?>"></a>
						<?php
					}
					?>
				</div>
				<?php
			}
			?>
			<p>
				<?= nl2br($post->content); ?>
			</p>
			<p class="publish">
				<span><i class="fa fa-thumbs-o-up"></i> <?= $post->likes; ?> likes</span>
				<span id="comment-btn<?= $post->comment_number > 0 ? '' : '-disabled'; ?>" class="link" style="cursor: pointer"><i class="fa fa-commenting"></i> <?= $post->comment_number; ?> comments</span>
				<span><i class="fa fa-eye"></i> <?= $post->views; ?> views</span>
			</p>
		</div>
	</article>
	<div class="clearfix"></div>
	<?php echo View::make('/component/post/comment-list', ['comments' => $post->comments]); ?>
	<div class="clearfix"></div>
	<?php echo View::make('/component/post/post-list', [
		'title' => 'Suggestions',
		'type' => 'suggestion',
		'posts' => $suggestionPosts
	]); ?>
</section>
<?= HTML::script('slick/slick.min.js'); ?>
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
		$("#comment-btn").click(function() {
			$("#comment").toggle();
		});
	});
</script>
@stop
