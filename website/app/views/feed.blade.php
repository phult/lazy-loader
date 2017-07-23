@extends("layout.master")
@section("title", "Feeds | Lazyload.net")
@section("content")
<div class="content-full">
	<?php echo View::make('/component/post/post-list', [
	'title' => '',
	'type' => 'feed',
	'posts' => $posts
]); ?>
</div>
@stop
