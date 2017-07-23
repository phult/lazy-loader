@extends("layout.master")
@section("title","History | Lazyload.net")
@section("content")
<div class="content-full">
	<?php echo View::make('/component/post/post-list', [
		'title' => 'History',
		'type' => 'history',
		'posts' => $posts
	]); ?>
</div>
@stop
