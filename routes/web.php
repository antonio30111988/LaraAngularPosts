<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', 'AngularController@serveApp');

Route::get('/unsupported-browser', 'AngularController@unsupported');

$api->group([],function($api){
    $api->post('users/login','LoginController@login');	
    $api->post('posts', 'CreatePostController@create')	;	   
});

//Route::post('posts', 'CreatePostController@create');
