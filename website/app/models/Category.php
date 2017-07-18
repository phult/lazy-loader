<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class Category extends Eloquent{

	public $timestamps = false;
	protected $guarded = array("id");
	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'category';

	public function postNCategory(){
        return $this->hasMany('PostNCategory', 'category_id');
    }
}
