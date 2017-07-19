<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class Page extends Eloquent{

	public $timestamps = false;
	protected $guarded = array("id");
	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'page';

	public function posts(){
		return $this->hasMany('Post', 'page_id');
	}
}
