@extends("layout.master")
@section("title", "Page | Lazyload.net")
@section("content")
<div class="content-full">
	<?php echo View::make('/component/post/post-list', [
	'title' => $page->name,
	'type' => 'page',
	'posts' => $posts,
	'page' => $page,
	'pageId' => Input::get('pageId', 0)
]); ?>
</div>
@stop
