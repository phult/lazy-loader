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

	public function viewPage($pageSlug, $pageId) {
		$posts = [];
		$posts = $this->buildPosts($this->getPagePosts($pageId));
		$page = Page::find($pageId);
		return View::make('post-page', [
			'posts' => $posts,
			'page' => $page,
		]);
	}

	public function search() {
		$posts = [];
		$keyword = Input::get('s', '');
		if ($keyword != '') {
			$posts = $this->buildPosts($this->searchPosts($keyword));
		}
		return View::make('post-search', [
			'posts' => $posts,
		]);
	}

	public function view($postSlug, $postId) {
		$post = Post::find($postId);
		if ($post != null) {
			$this->viewPost($postId);
			$this->buildPost($post);
		}
		if ($post->type == Post::TYPE_LINK) {
			return Redirect::to(urldecode($post->links[0]));
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
		$paginationId = Input::get('page', 0);
		switch ($type) {
			case 'feed': {
				$posts = $this->getFeedPosts($paginationId);
				break;
			}
			case 'latest': {
				$posts = $this->getLatestPosts($paginationId);
				break;
			}
			case 'history': {
				$posts = $this->getHistoryPosts($paginationId);
				break;
			}
			case 'related': {
				$postId = Input::get('postId', 0);
				$post = Post::find($postId);
				$posts = $this->getRelatedPosts($post, $paginationId);
				break;
			}
			case 'search': {
				$keyword = Input::get('keyword', '');
				$posts = $this->searchPosts($keyword, $paginationId);
				break;
			}
			case 'page': {
				$pageId = Input::get('pageId', 0);
				$posts = $this->getPagePosts($pageId, $paginationId);
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

	private function searchPosts($keyword, $paginationId = 0, $paginationSize = 10) {
		return Post::whereRaw("MATCH(name,content) AGAINST('" . $keyword . "' IN NATURAL LANGUAGE MODE)")
			->where('content_words', '>', 0)
			->offset($paginationId * $paginationSize)->limit($paginationSize)->get();
	}

	private function getFeedPosts($paginationId = 0, $paginationSize = 20) {
		return Post::whereNotIn('id', $this->getViewedPosts())
			->where('content_words', '>', 0)
			->orderBy('post_time', 'DESC')
			->offset($paginationId * $paginationSize)->limit($paginationSize)->get();
	}

	private function getLatestPosts($paginationId = 0, $paginationSize = 10) {
		return Post::whereNotIn('id', $this->getViewedPosts())
			->where('content_words', '>', 0)
			->orderBy('post_time', 'DESC')
			->offset($paginationId * $paginationSize)->limit($paginationSize)->get();
	}

	private function getRelatedPosts($post, $paginationId = 0, $paginationSize = 6) {
		return Post::where('page_id', '=', $post->page->id)
			->whereNotIn('id', $this->getViewedPosts())
			->where('id', '<>', $post->id)
			->orderBy('post_time', 'DESC')
			->where('content_words', '>', 0)
			->offset($paginationId * $paginationSize)->limit($paginationSize)->get();
	}

	private function getHistoryPosts($paginationId = 0, $paginationSize = 10) {
		return Post::join('action', 'action.target_id', '=', 'post.id')
			->where('action.object_id', '=', $this->getUserId())
			->where('action.type', '=', 'view')
			->orderBy('action.create_time', 'DESC')
			->offset($paginationId * $paginationSize)->limit($paginationSize)->get(['post.*']);
	}

	private function getPagePosts($pageId, $paginationId = 0, $paginationSize = 10) {
		return Post::whereNotIn('id', $this->getViewedPosts())
			->where('page_id', '=', $pageId)
			->where('content_words', '>', 0)
			->orderBy('post_time', 'DESC')
			->offset($paginationId * $paginationSize)->limit($paginationSize)->get();
	}
}
