<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\AuthorizationController;

class FavoriteItemController extends Controller
{
    //
    private $arr_products_favorite= [];
    public function getItem($id_product) {
        return array_push($this->arr_products_favorite, DB::table("products")->where("id_product",$id_product)->select("title", "price", "decription","size", "categories", "color", "imageindex", "imageHover", "id_product", "classify")->get());
    }
    public function getFavoriteItem(Request $request) {
        if(AuthorizationController::checkUser() != 1) {
            return Products::whereIn("id_product", $request-> list)->select("title", "price", "decription","size","categories","color", "imageindex", "imageHover", "id_product", "classify")->get();
        }
        $id_user= ((substr(substr(explode(":",Cookie::get("s_id"))[1], 0, -2), 1, -1)));
        $get_favorite_user= Favorite::where("id_user", $id_user)->select("id_products")-> get();
        $list_id_products_of_user= explode(",",substr(substr(explode(":",$get_favorite_user[0])[1], 0, -2), 1, -1));
        $check_products_user= (strlen(substr(substr(explode(":",$get_favorite_user[0])[1], 0, -2), 1, -1)));
        Log::alert($check_products_user);
        if($check_products_user== 0) {
            Favorite::where("id_user", $id_user)->update(["id_products"=> trim(implode(",",$request-> list), ",")]);
            return Products::whereIn("id_product", $request-> list)->select("title", "price", "decription","size","categories","color", "imageindex", "imageHover", "id_product", "classify")->get();
        }
        else {
            $arr= [];
            foreach($list_id_products_of_user as $value) {
                array_push($arr, $value);
            }
            return response()-> json(["f"=> "true", $arr]);
        }
    }

    
    public function GetItemUserLogin(Request $request) {
        return Products::whereIn("id_product", $request-> list)->get();
    }
}