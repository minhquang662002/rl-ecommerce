<?php

use App\Http\Controllers\BriefProductController;
use App\Http\Controllers\CartShoppingController;
use App\Http\Controllers\FavoriteItemController;
use App\Http\Controllers\FilterByCategory;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\ProductControllers;
use App\Http\Controllers\QuickviewController;
use App\Http\Controllers\SearchProductController;
use App\Http\Controllers\SearchResultController;
use App\Http\Controllers\SearchSuggestController;
use App\Http\Controllers\UploadAvatarController;
use App\Http\Controllers\UserLogin;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\VerifyCodeController;
use App\Models\Favorite;
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
Route::resource("products", ProductControllers::class);
Route::get("/item",[ItemController::class, "getItem"]);
Route::get("/category/products", [FilterByCategory::class, "boot"]);
Route::post("/favorite/items", [FavoriteItemController::class, "getFavoriteItem"]);
Route::post("/carts/shopping/item", [CartShoppingController::class, "getItemShopping"]);
Route::post("/brief", [BriefProductController::class, "getBrief"]);
Route::post("/signup", [UsersController::class, "signup"])->middleware("checkexistuser")->middleware("signupmiddleware");
Route::post("/login", [UsersController::class, "login"])->middleware("loginmiddleware");
Route::post("/verify/user/auth", [VerifyCodeController::class, "SendMail"]);
Route::post("/authentication/user/auth", [VerifyCodeController::class, "AuthenticationEmail"]);
Route::post("/quickview", [QuickviewController::class, "getAllImages"]);
Route::get("/search/option", [SearchProductController::class, "searchByOption"]);
Route::get("/search", [SearchSuggestController:: class, "searchSuggest"])->middleware("checkrequestquery");
Route::get("/search/results", [SearchResultController::class, "searchResult"])->middleware("checkrequestquery");
Route::get("/inspiration/products", [SearchProductController::class, "inspirationProduct"]);
Route::post("/l",[UserLogin::class, "checkLogin"]);
Route::post("/upload/avatar", [ImageController::class, "storeImage"])->middleware("filtermaliciousfile");
Route::post("/favorite/items/exist", [FavoriteItemController::class, "GetItemUserLogin"]);
Route::get('/send-notification', [NotificationController::class, "sendOfferNotification"]);
Route::get("/", function () {
    return view("welcome");
});

Route::fallback(function () {
    return view("welcome");
});