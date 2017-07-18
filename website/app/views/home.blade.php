@extends("layout.master")
@section("title","Home page")
@section("content")
<div class="content-full">
	<?php echo View::make('/component/post/hot-posts', ['posts' => $hotPosts]); ?>
	<?php echo View::make('/component/post/new-posts', ['posts' => $newPosts]); ?>
	<?php echo View::make('/component/post/category-posts', ['categoryPosts' => $categoryPosts])->render(); ?>
</div>
@stop
