<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\v1\Users\UserController;
use App\Http\Controllers\Api\v1\Users\RoleController;

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

/**
 * Greetings
 */
Route::get('/', function() {

    return [
        'greetings' => 'Welcome to '.config('app.name').' API',
        'authenticate' => url('login'),
        'current_api_version' => config('app.current_api_version', 1),
    ];
})->name('greetings');

/*****************
 * Authentication
 *****************/

/**
 * API v1
 */
Route::group(['prefix' => 'v1'], function() {

    /***************
     * Public  API
     ***************/


    /***************
     * Private API
     ***************/
    Route::group([ 'middleware' => ['auth:sanctum'] ], function() {

        /******************
         * Application Info
         ******************/
        Route::get('/', function() {
            return [
                'api_version' => 1,
                'php_version' => PHP_VERSION,
                'laravel_version' => Illuminate\Foundation\Application::VERSION,
            ];
        });

        /**
         * Users.
         */
        Route::group(['namespace' => 'Users'], function() {
            Route::group(['prefix' => 'users'], function() {
                Route::get('/me', [UserController::class, 'showme']);
                Route::group(['middleware' => ['roles:admin']], function() {
                    Route::get('/', [UserController::class, 'index']);
                    Route::get('/{id}', [UserController::class, 'show'])->where('id', '[0-9]+');
                    Route::post('/', [UserController::class, 'store']);
                    Route::put('/{id}', [UserController::class, 'update'])->where('id', '[0-9]+');
                    Route::delete('/{id}', [UserController::class, 'destroy'])->where('id', '[0-9]+');
                });
            });
            Route::group(['middleware' => ['roles:admin']], function() {
                Route::get('roles', [RoleController::class, 'index']);
                Route::get('roles/{id}', [RoleController::class, 'show'])->where('id', '[0-9]+');
            });
        });
    });
});

/****************
 * Fallback Route
 ****************/
Route::get('/{any}', function(){
    return response()->json(['message' => 'Not Found.'], 404);
})->where('any', '.*')->name('api.fallback.404');

