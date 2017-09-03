<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('login', 'API\UserController@login');
Route::post('register', 'API\UserController@register');

Route::group(['middleware' => 'auth:api'], function(){
	Route::get('details', 'API\UserController@details');
	Route::get('task', 'API\TaskController@getTasks');
	Route::post('task', 'API\TaskController@createTask');
	Route::post('task/done', 'API\TaskController@doneTask');
	Route::post('task/update', 'API\TaskController@updateTask');
	Route::post('task/remove', 'API\TaskController@removeTask');
});

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
