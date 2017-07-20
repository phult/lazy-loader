<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class Action extends Eloquent{

	public $timestamps = false;
	protected $guarded = array("id");
	protected $fillable = array(
		'type',
		'object_type',
		'object_id',
		'target_type',
		'target_id',
		'create_time'
	);
	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'action';

}
