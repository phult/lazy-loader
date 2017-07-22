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
			$post->title = $this->collageString($this->extractTitle($post->content), 100);
			//$post->title = $this->extractTitle($post->content);
			$post->image = '';
			if ($post->images != null && $post->images != '') {
				$imageSpliter = explode(',', $post->images);
				$post->image = $imageSpliter[0];
			}
		}
		return $posts;
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
