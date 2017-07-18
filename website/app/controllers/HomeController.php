<?php

class HomeController extends BaseController {

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

	public function index() {
		$hotPosts = $this->buildPosts($this->getHotPosts());
		$newPosts = $this->buildPosts($this->getNewPosts());
		$categoryPosts = $this->getHotCategoryPosts();
		return View::make('home', [
			'hotPosts' => $hotPosts,
			'newPosts' => $newPosts,
			'categoryPosts' => $categoryPosts
		]);
	}

	private function getHotPosts() {
		return Post::orderBy('comment_number', 'DESC')
			->whereNotNull('content')->where('content', '<>', '')
			->whereNotNull('images')->where('images', '<>', '')
			->offset(0)->limit(10)->get();
	}
	private function getNewPosts() {
		return Post::orderBy('post_time', 'DESC')
			->whereNotNull('content')->where('content', '<>', '')
			->whereNotNull('images')->where('images', '<>', '')
			->offset(0)->limit(12)->get();
	}
	private function getHotCategoryPosts() {
		$retval = [];
		$hotCategories = PostNCategory::selectRaw('category_id, count(category_id) AS count_category')
			->groupBy('category_id')
           	->orderBy('count_category', 'DESC')
			->offset(0)->limit(3)->get();
		foreach ($hotCategories as $category) {
			$posts = Post::leftJoin('post_n_category', 'post_n_category.post_id', '=', 'post.id')
				->where('post_n_category.category_id', '=', $category->category['id'])
				->whereNotNull('content')->where('content', '<>', '')
				->whereNotNull('images')->where('images', '<>', '')
				->orderBy('post_time', 'DESC')
				->offset(0)->limit(5)->get(['post.*']);
			$retval[$category->category['name']] = $this->buildPosts($posts);
		}
		return $retval;
	}
}
