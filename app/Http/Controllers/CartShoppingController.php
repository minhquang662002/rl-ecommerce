<?php

namespace App\Http\Controllers;

use App\Models\Products;
use App\Models\UserShop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Log;

class CartShoppingController extends Controller
{
    //
    /**
     * Undocumented function
     *
     * @param Request $request
     * @return void
     */
    public function getItemShopping(Request $request) {
        $token= UserShop::where("id_user", $request-> id_user)->select("token_key")-> get();
        if(substr(substr(explode(":",$token)[1], 0, -2), 1, -1)== Cookie::get("u_id")) {
            return response()-> json(["f"=> "true"]);
        }
        return Products::whereIn("id_product", $request-> list)->select()->get();
    }
    /**
     * Get item cart user was logged
     *
     * @param Request $request
     * @return void
     */
    public function getItemShoppingUser(Request $request ) {
        return Products::where("id_user", $request-> id_user)-> join("cart_shoppings", "products.id_product", "=", "cart_shoppings.id_product")-> select("products.id_product","title", "price", "decription", "size", "categories", "color", "imageindex")-> get();     
    }
}