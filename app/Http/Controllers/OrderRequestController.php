<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderRequestController extends Controller
{
    //
    public function orderRequest(Request $request) {
        return DB::table("order_product")-> join("user_shops", "user_shops.id_user", "=", "order_product.id_seller")-> join("products", "products.id_product", "=", "order_product.id_product")-> where("order_product.state", 1)-> where("user_shops.id_shop", $request-> id_shop)-> select("order_product.quantity as quantity", "order_product.cost as cost", "order_product.size as size", "order_product.color as color", "order_product.id_product as id_product", "products.imageindex as imageindex", "products.title as title", "user_shops.firstname as firstname", "user_shops.lastname as lastname", "order_product.state as state", "order_product.timeu as timeu", "order_product.id_order as id_order")-> orderBy("order_product.timeu", "desc")-> get();
    }
    public function acceptRequest(Request $request) {
        
    }
    public function executeOrder(Request $request) {
        DB::table("order_product")-> where("id_order", $request-> id_order)-> update(["state"=> $request-> exe]);
        return response()-> json("success");
    }
}
