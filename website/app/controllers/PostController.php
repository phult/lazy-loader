<?php

class PostController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/', 'HomeController@showWelcome');
	|
	*/

	public function feed() {
		$posts = $this->buildPosts($this->getHotPosts());
		return View::make('feed', [
			'posts' => $posts,
		]);
	}
	public function view($postSlug, $postId) {
		$post = Post::find($postId);
		$suggestionPosts = $this->buildPosts($this->getSugessionPosts($post));
		return View::make('view', [
			'post' => $post,
			'suggestionPosts' => $suggestionPosts
		]);
	}
	private function getHotPosts($pageSize = 10) {
		return Post::orderBy('post_time', 'DESC')
			->whereNotNull('content')->where('content', '<>', '')
			->whereNotNull('images')->where('images', '<>', '')
			->offset(0)->limit($pageSize)->get();
	}
	private function getSugessionPosts($post, $pageSize = 4) {
		return Post::where('page_id', '=', $post->page->id)
			->where('id', '<>', $post->id)
			->orderBy('post_time', 'DESC')
			->whereNotNull('content')->where('content', '<>', '')
			->whereNotNull('images')->where('images', '<>', '')
			->offset(0)->limit($pageSize)->get();
	}
}
