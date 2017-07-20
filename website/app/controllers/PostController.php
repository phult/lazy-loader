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
	public function history() {
		$posts = $this->buildPosts($this->getHistoryPosts());
		return View::make('history', [
			'posts' => $posts,
		]);
	}
	public function view($postSlug, $postId) {
		$post = Post::find($postId);
		if ($post != null) {
			$this->viewPost($postId);
			$post->title = $this->extractTitle($post->content);
		}
		$suggestionPosts = $this->buildPosts($this->getSugessionPosts($post));
		return View::make('view', [
			'post' => $post,
			'suggestionPosts' => $suggestionPosts
		]);
	}
	private function getHotPosts($pageSize = 10) {
		return Post::whereNotIn('id', $this->getViewedPosts())
			->where('content_words', '>', 0)
			->orderBy('id', 'DESC')
			->offset(0)->limit($pageSize)->get();
	}
	private function getSugessionPosts($post, $pageSize = 4) {
		return Post::where('page_id', '=', $post->page->id)
			->whereNotIn('id', $this->getViewedPosts())
			->where('id', '<>', $post->id)
			->orderBy('post_time', 'DESC')
			->where('content_words', '>', 0)
			->offset(0)->limit($pageSize)->get();
	}
	private function getHistoryPosts($pageSize = 10) {
		return Post::whereIn('id', $this->getViewedPosts())
			->orderBy('id', 'DESC')
			->offset(0)->limit($pageSize)->get();
	}
}
