<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class PostNCategory extends Eloquent{

	public $timestamps = false;
	protected $guarded = array("id");
	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'post_n_category';

	public function category() {
		return $this->belongsTo('Category');
	}
}
