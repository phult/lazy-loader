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
		}
		return $retval;
	}

	protected function buildPosts($posts) {
		foreach ($posts as $post) {
			$post->title = $this->collageString($this->extractTitle($post->content), 70);
			$post->image = '';
			if ($post->images != null && $post->images != '') {
				$imageSpliter = explode(',', $post->images);
				$post->image = $imageSpliter[0];
			}
		}
		return $posts;
	}

	public static function collageString($str, $limitedWord)
    {
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
}
