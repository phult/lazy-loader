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
		$feedPosts = $this->buildPosts($this->getFeedPosts());
		return View::make('feed', [
			'posts' => $feedPosts,
		]);
	}

	public function history() {
		$viewedPosts = $this->buildPosts($this->getHistoryPosts());
		return View::make('history', [
			'posts' => $viewedPosts,
		]);
	}

	public function latest() {
		$latestPosts = $this->buildPosts($this->getLatestPosts());
		return View::make('latest', [
			'posts' => $latestPosts,
		]);
	}

	public function view($postSlug, $postId) {
		$post = Post::find($postId);
		if ($post != null) {
			$this->viewPost($postId);
			$post->title = $this->extractTitle($post->content);
		}
		$relatedPosts = $this->buildPosts($this->getRelatedPosts($post));
		return View::make('view', [
			'post' => $post,
			'relatedPosts' => $relatedPosts
		]);
	}

	public function loadMore() {
		$retval = [
			'status' => 'successful'
		];
		$result = '';
		$posts = [];
		$type = Input::get('type', 'feed');
		$pageId = Input::get('page', 0);
		switch ($type) {
			case 'feed': {
				$posts = $this->getFeedPosts($pageId);
				break;
			}
			case 'latest': {
				$posts = $this->getLatestPosts($pageId);
				break;
			}
			case 'history': {
				$posts = $this->getHistoryPosts($pageId);
				break;
			}
			case 'related': {
				$postId = Input::get('postId', 0);
				$post = Post::find($postId);
				$posts = $this->getRelatedPosts($post, $pageId);
				break;
			}
			default:
				$retval['status'] = 'fail';
				break;
		}
		$posts = $this->buildPosts($posts);
		foreach ($posts as $post) {
			$view = View::make('/component/post/post-item', ['post' => $post]);
			$result .= $view->render();
		}
		$retval['result'] = $result;
		return Response::json($retval);
	}

	public function template() {
		return View::make('template');
	}

	private function getFeedPosts($pageId = 0, $pageSize = 20) {
		return Post::whereNotIn('id', $this->getViewedPosts())
			->where('content_words', '>', 0)
			->orderBy('post_time', 'DESC')
			->offset($pageId * $pageSize)->limit($pageSize)->get();
	}

	private function getLatestPosts($pageId = 0, $pageSize = 10) {
		return Post::whereNotIn('id', $this->getViewedPosts())
			->where('content_words', '>', 0)
			->orderBy('post_time', 'DESC')
			->offset($pageId * $pageSize)->limit($pageSize)->get();
	}

	private function getRelatedPosts($post, $pageId = 0, $pageSize = 6) {
		return Post::where('page_id', '=', $post->page->id)
			->whereNotIn('id', $this->getViewedPosts())
			->where('id', '<>', $post->id)
			->orderBy('post_time', 'DESC')
			->where('content_words', '>', 0)
			->offset($pageId * $pageSize)->limit($pageSize)->get();
	}
	private function getHistoryPosts($pageId = 0, $pageSize = 10) {
		return Post::join('action', 'action.target_id', '=', 'post.id')
			->where('action.object_id', '=', $this->getUserId())
			->where('action.type', '=', 'view')
			->orderBy('action.create_time', 'DESC')
			->offset($pageId * $pageSize)->limit($pageSize)->get(['post.*']);
	}
}
