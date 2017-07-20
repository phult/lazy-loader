<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get("/", ["as" => "post:feed", "uses" => "PostController@feed"]);
Route::get("/{postSlug}-c{postId}", ["as" => "post:view", "uses" => "PostController@view"])->where('postSlug', '[0-9a-zA-Z/_\-]+')->where('postId', '[0-9]+');
Route::get("/trends", ["as" => "home:index", "uses" => "HomeController@index"]);
Route::get("/history", ["as" => "post:history", "uses" => "PostController@history"]);
