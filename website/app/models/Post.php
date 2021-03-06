<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class Post extends Eloquent{

	public $timestamps = false;
	protected $guarded = array("id");
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
