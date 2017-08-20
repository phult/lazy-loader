<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class Post extends Eloquent{

	public $timestamps = false;
	protected $guarded = array("id");

	const TYPE_ENTRY = 'entry';
	const TYPE_LINK = 'link';
	const TYPE_VIDEO = 'video';
	const TYPE_IMAGE = 'image';
	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'post';

	public function page() {
		return $this->belongsTo('Page');
	}

	public function comments() {
        return $this->hasMany('Comment', 'post_id');
    }
}
