<?php

use App\Http\Controllers\AddFavoriteUser;
use App\Http\Controllers\AddItemToCartController;
use App\Http\Controllers\AddressController;
use App\Http\Controllers\AdminDecisionController;
use App\Http\Controllers\AdminManageController;
use App\Http\Controllers\BriefProductController;
use App\Http\Controllers\CartShoppingController;
use App\Http\Controllers\ChatsController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\FavoriteItemController;
use App\Http\Controllers\FcbController;
use App\Http\Controllers\FilterByCategory;
use App\Http\Controllers\HelpCenterController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\InfoNotification;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\ListAddressController;
use App\Http\Controllers\ListMessage;
use App\Http\Controllers\LoadMoreComment;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\MessageConversation;
use App\Http\Controllers\MessageImageController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\NotificationsController;
use App\Http\Controllers\OrderRequestController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProductControllers;
use App\Http\Controllers\QuickviewController;
use App\Http\Controllers\ReviewProductController;
use App\Http\Controllers\SearchProductController;
use App\Http\Controllers\SearchResultController;
use App\Http\Controllers\SearchSuggestController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\UploadAvatarController;
use App\Http\Controllers\UploadProductController;
use App\Http\Controllers\UserLogin;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\UserTypingController;
use App\Http\Controllers\VerifyCodeController;
use App\Models\Favorite;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Support\Facades\Route;
use Symfony\Component\Mime\MessageConverter;

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
/**
 * 
 */
Route::post("/api/v1/image/full", [MessageImageController::class, "returnPath"]);
Route::post("/api/v1/image/index", [MessageImageController::class, "returnPath"]);
Route::post("/api/v2/upload/product", [UploadProductController::class, "upload"]);
Route::post("/authentication/user/auth", [VerifyCodeController::class, "AuthenticationEmail"]);
Route::get("/address/user", [AddressController::class, "boot"]);
Route::post("/add/item/favorite", [AddFavoriteUser::class, "boot"]);
Route::post("/add/item/cart", [AddItemToCartController::class, "boot"]);
Route::post("/brief", [BriefProductController::class, "getBrief"]);
Route::post("/checkout", [PaymentController::class, "makePayment"])-> name("make-payment");
Route::post("/comment/send/m", [CommentController::class, "sendComment"]);
Route::get("/comment/usertyping/t/x", [UserTypingController::class, "boot"]);
Route::get("/comment/more/x/g/t", [LoadMoreComment::class, "boot"]);
Route::get("/c/m/t", [MessageConversation::class, "c"]);
Route::get("/c/m/n",[ChatsController::class, "cM"]);
Route::get("/category/products", [FilterByCategory::class, "boot"]);
Route::get("/carts/shopping/item/user",[CartShoppingController::class, "getItemShoppingUser"]);
Route::get("/carts/shopping/item", [CartShoppingController::class, "getItemShopping"])->middleware("cartshoppingnologin");
Route::post("/chat/message", [ChatsController::class, "sendMessage"]);
Route::post("/get/path/image/message", [MessageImageController::class, "returnPath"])->middleware("filterimagemessage");
Route::get("/favorite/items", [FavoriteItemController::class, "getFavoriteItem"])->middleware("favoriteshoppingnologin");
Route::get("/favorite/items/exist", [FavoriteItemController::class, "GetItemUserLogin"]);
Route::get("/favorite/items/exist/login", [FavoriteItemController::class], "getFavoriteItemLogin");
Route::get("/f/c/b", [FcbController::class, "boot"]);
Route::get("/item",[ItemController::class, "getItem"]);
Route::get("/inspiration/products", [SearchProductController::class, "inspirationProduct"]);
Route::post("/login", [UsersController::class, "login"])->middleware("loginmiddleware");
Route::post("/l",[UserLogin::class, "checkLogin"])->middleware("verifycookie");
Route::get("/list/address", [ListAddressController::class, "boot"]);
Route::post("/logout", [LogoutController::class, "boot"]);
Route::get("/message/conversation", [ListMessage::class, "index"])-> name("list-message");
Route::get("/message/chat/conversation", [MessageConversation::class, "index"]);
Route::resource("products", ProductControllers::class);
Route::get("/p/u/x", [InfoNotification:: class, "boot"]);
Route::post("/quickview", [QuickviewController::class, "getAllImages"]);
Route::get("/represent/message/conversation", [MessageConversation::class, "rm"]);
Route::post("/signup", [UsersController::class, "signup"])->middleware("checkexistuser")->middleware("signupmiddleware");
Route::get("/search/results", [SearchResultController::class, "searchResult"])->middleware("checkrequestquery");
Route::get("/search", [SearchSuggestController:: class, "searchSuggest"])->middleware("checkrequestquery");
Route::get("/send-notification", [NotificationController::class, "sendOfferNotification"]);
Route::post("/set/address/user", [ListAddressController::class, "setNewAddress"]);
Route::get("/setting", [SettingController::class, "getSetting"]);
Route::post("/setting", [SettingController::class, "setSetting"]);
Route::get("/s/a/i",[ShopController::class, "boot"]);
Route::get("/search/option", [SearchProductController::class, "searchByOption"]);
Route::get("/test", [TestController:: class, "Test"]);
Route::get("/t/c/r", [ReviewProductController::class, "boot"]);
Route::post("/upload/avatar", [ImageController::class, "storeImage"])->middleware("filtermaliciousfile");
Route::post("/verify/user/auth", [VerifyCodeController::class, "SendMail"]);
Route::post("/p/m/n/b", [ImageController::class, "batchImage"]);
Route::post("/api/v1/help", [HelpCenterController::class, "textHelp"]);
Route::get("/api/v1/request/order/product", [OrderRequestController::class, "orderRequest"]);
Route::post("/api/v1/order", [OrderRequestController::class, "executeOrder"]);
Route::get("/", [MainController::class, "index"]);
Route::fallback([MainController::class, "index"]);

Route::group(["prefix"=> "/api/v1/admin"], function() {
    Route::post("/user", [AdminManageController::class, 'listUser']);
    Route::post("/user/detail", [AdminManageController::class, "detailUser"]);
    Route::post("/edit/name/user", [AdminManageController::class, "editNameUser"]); 
    Route::post("/status/user", [AdminManageController::class, "statusUser"]);
    Route::post("/shop", [AdminManageController::class, 'listShop']);
    Route::post("/shop/detail", [AdminManageController::class, "detailShop"]);
    Route::post("/edit/name/shop", [AdminManageController::class, "editNameShop"]); 
    Route::post("/status/shop", [AdminManageController::class, "statusShop"]);
    Route::post("/help/user", [AdminManageController::class, "helpUser"]);
});

Route::group(["prefix"=> "/api/v2/admin/decision/account"], function() {
    Route::post("/lock", [AdminDecisionController::class, "lock_account"]);
    Route::post("/unlock", [AdminDecisionController::class, "un_lock_account"]);
    Route::post("/lock/time", [AdminDecisionController::class, "lock_account_time"]);
    Route::post("/unlock/time", [AdminDecisionController::class, "unlock_account_time"]);
});
Route::group(["prefix"=> "/api/v2/admin/decision/shop"], function() {
    Route::post("/lock", [AdminDecisionController::class, "lock_shop"]);
    Route::post("/unlock", [AdminDecisionController::class, "un_lock_shop"]);
    Route::post("/lock/time", [AdminDecisionController::class, "lock_shop_time"]);
    Route::post("/unlock/time", [AdminDecisionController::class, "unlock_shop_time"]);
});