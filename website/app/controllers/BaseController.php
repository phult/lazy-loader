<?php
class BaseController extends Controller {

	/**
	 * Setup the layout used by the controller.
	 *
	 * @return void
	 */
	protected function setupLayout()
	{
		if ( ! is_null($this->layout))
		{
			$this->layout = View::make($this->layout);
		}
	}

	public function error() {
		return View::make('error', [
			'code' => Input::get('code', '')
		]);
	}

	protected function extractTitle($content) {
		$retval = '';
		if ($content != null && $content != '') {
			$titleSpliter = preg_split('/[\\.\\-\\_\\!\r\n;,?]/', $content);
			$retval = $titleSpliter[0];
			if ($retval == '' || $retval == null) {
				$retval = $content;
			}
		}
		return $retval;
	}

	protected function buildPosts($posts) {
		foreach ($posts as $post) {
			$this->buildPost($post);
		}
		return $posts;
	}

	protected function buildPost($post) {
		$post->title = $this->collageString($this->extractTitle($post->content), 100);
		$post->image = $this->buildPostImage($post);
		$post->images = $this->buildPostImages($post);
		$post->links = $this->buildPostSharedLink($post);
		$post->videos = $this->buildPostVideos($post);
		$post->type = $this->buildPostType($post);
	}

	protected function buildPostImage($post) {
		$retval = '';
		if ($post->images != null && $post->images != '') {
			$imageSpliter = explode(',', $post->images);
			$retval = $imageSpliter[0];
		}
		return $retval;
	}
	protected function buildPostSharedLink($post) {
		$retval = [];
		if ($post->resources != null) {
			$resources = json_decode($post->resources);
			if ($resources->links != '') {
				$retval = explode(',', $resources->links);
			}
		}
		return $retval;
	}
	protected function buildPostVideos($post) {
		$retval = [];
		if ($post->resources != null) {
			$resources = json_decode($post->resources);
			if ($resources->videos === NULL || $resources->videos != '') {
				$retval = explode(',', $resources->videos);
			}
		}
		return $retval;
	}
	protected function buildPostImages($post) {
		$retval = [];
		if ($post->resources != null) {
			$resources = json_decode($post->resources);
			if ($resources->images != '') {
				$retval = explode(',', $resources->images);
			}
		}
		return $retval;
	}

	protected function buildPostType($post) {
		$retval = Post::TYPE_ENTRY;
		if (count($post->links) > 0) {
			$retval = Post::TYPE_LINK;
		} else if (count($post->videos) > 0) {
			$retval = Post::TYPE_VIDEO;
		} else if (count($post->images) > 1) {
			$retval = Post::TYPE_IMAGE;
		}
		return $retval;
	}

	public function collageString($str, $limitedWord) {
        if (strlen($str) > $limitedWord) {
            $temp = substr($str, 0, $limitedWord);
            if (strrpos($temp, " ")) {
                $temp = substr($temp, 0, strrpos($temp, " "));
            }
            return $temp . "...";
        } else {
            return $str;
        }
    }

	public function action($data) {
		Action::create($data);
	}

	protected function viewPost($postId) {
		// check wheather today the user has viewed the post
		$todayViews = Action::where('object_id', '=', $this->getUserId())
			->where('target_type', '=', 'post')
			->where('type', '=', 'view')
			->where('target_id', '=', $postId)
			->where('create_time', '>', date('Y-m-d H:m:s',strtotime('-1 day')))
			->count();
		// increment view count
		if ($todayViews == 0) {
			Post::find($postId)->increment('views');
		}
		// save action
		$this->action([
			'type' => 'view',
			'object_type' => 'guest',
			'object_id' => $this->getUserId(),
			'target_type' => 'post',
			'target_id' => $postId,
			'create_time' => new DateTime()
		]);
	}

	protected function getViewedPosts() {
		return Action::where('object_id', '=', $this->getUserId())
			->where('target_type', '=', 'post')
			->where('type', '=', 'view')
			->get(['target_id'])->toArray();
	}

	protected function getUserId() {
		$retval = null;
		if (isset($_COOKIE['UCID'])) {
			$retval = $_COOKIE['UCID'];
		} else {
			$retval = hexdec(uniqid());
			setcookie( "UCID", $retval, time() + 60 * 60 * 24 * 1000, "/") ;
		}
		return $retval;
	}
}
