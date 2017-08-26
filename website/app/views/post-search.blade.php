@extends("layout.master")
@section("title", "Search | Lazyload.net")
@section("content")
<div class="content-full">
	<?php echo View::make('/component/post/post-list', [
	'title' => 'Search "' . Input::get('s', '') . '"',
	'type' => 'search',
	'posts' => $posts,
	'keyword' => Input::get('s', '')
]); ?>
</div>
@stop
