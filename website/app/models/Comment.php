<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class Comment extends Eloquent{

	public $timestamps = false;
	protected $guarded = array("id");
	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'comment';

	public function replies(){
        return $this->hasMany('Comment', 'parent_id');
    }
}
