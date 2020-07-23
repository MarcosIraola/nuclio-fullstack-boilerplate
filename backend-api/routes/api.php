<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

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

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

    Route::get('me', 'AuthController@me');
});

/*
|--------------------------------------------------------------------------
| User Routes
|--------------------------------------------------------------------------
*/

Route::group([

    'middleware' => 'api',
    'prefix' => 'users'

], function ($router){

    Route::get('','UserController@all');
    Route::get('{id}', 'UserController@getById');
    Route::get('email/{email}', 'UserController@getByEmail');
    Route::get('username/{username}', 'UserController@getByUsername');
    Route::post('','UserController@create');
    Route::put('{id}', 'UserController@updateById');
    Route::delete('{id}', 'UserController@delete');

});

/*
|--------------------------------------------------------------------------
| Board Routes
|--------------------------------------------------------------------------
*/

Route:: group([

    'middleware' => 'api',
    'prefix' => 'boards'

], function($router){

    Route::get('', 'BoardController@all');
    Route::get('{id}', 'BoardController@getById');
    Route::get('user/{userId}', 'BoardController@getByUser');
    Route::post('', 'BoardController@create');
    Route::put('{id}', 'BoardController@updateById');
    Route::delete('{id}', 'BoardController@delete');

});

/*
|--------------------------------------------------------------------------
| Pin Routes
|--------------------------------------------------------------------------
*/

Route:: group([

    'middleware' => 'api',
    'prefix' => 'pins'

], function($router){

    Route::get('', 'PinController@all');
    Route::get('{id}', 'PinController@getById');
    Route::get('board/{boardId}', 'PinController@GetByBoard');
    Route::post('', 'PinController@create');
    Route::put('{id}', 'PinController@updateById');
    Route::delete('{id}', 'PinController@delete');

});

    Route::get('search/{query}', 'SearchController@searchPinsByNoteAndColor');


