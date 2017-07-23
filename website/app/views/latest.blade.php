@extends("layout.master")
@section("title", "Latest | Lazyload.net")
@section("content")
<div class="content-full">
	<?php echo View::make('/component/post/post-list', [
		'title' => 'Lastest',
		'type' => 'latest',
		'posts' => $posts
	]); ?>
</div>
@stop
