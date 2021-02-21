<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::group([ 'namespace' => 'Api' ], function () {

    /*****************
     * Authentication
     *****************/

    Route::middleware('auth:sanctum')->get('/auth/me', function (Request $request) {
        return $request->user();
    });

    /**
     * API v1
     */
    Route::group(['prefix' => 'v1', 'namespace' => 'v1'], function() {

        /***************
         * Public  API
         ***************/


        /***************
         * Private API
         ***************/
        Route::group([ 'middleware' => ['auth:sanctum'] ], function() {

        });
    });
});
