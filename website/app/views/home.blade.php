@extends("layout.master")
@section("title","Home page")
@section("content")
<div class="content-full">
	<?php echo View::make('/component/post/hot-posts') ?>
</div>
@stop
