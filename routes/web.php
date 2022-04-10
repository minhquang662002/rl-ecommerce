<?php

use App\Http\Controllers\ItemController;
use App\Http\Controllers\ProductControllers;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\VerifyCodeController;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */
Route::resource('products', ProductControllers::class);
Route::get('/item',[ItemController::class, 'getItem']);
Route::post('/signup', [UsersController::class, 'signup'])->middleware('signupmiddleware');
Route::post('/login', [UsersController::class, 'login'])->middleware('loginmiddleware');
Route::post('/verify/user/auth', [VerifyCodeController::class, 'SendMail']);
Route::post('/authentication/user/auth', [VerifyCodeController::class, 'AuthenticationEmail']);
Route::get('/', function () {
    return view('welcome');
});

Route::fallback(function () {
    return view('welcome');
});