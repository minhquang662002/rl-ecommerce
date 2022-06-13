<?php

namespace App\Http\Controllers;

use App\Models\ShopOfUser;
use App\Models\UserShop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class UserLogin extends Controller
{
    //
    /**
     * Undocumented function
     *
     * @param Request $request
     * @return void
     */
    public function checkLogin(Request $request) {
        $s_id= (substr(substr(explode(":",Cookie::get("s_id"))[1], 0, -2), 1, -1));
        $u_id= Cookie::get("u_id");
        $token_key= UserShop::where("id_user", $s_id)->select("token_key")->get(); 
        if(strlen($token_key)< 1) {
            return response()->json(["login"=> "false"]);
        }
        // Log::emergency($token_key[0]["token_key"]);
        if(substr(substr(explode(":",$token_key)[1], 0, -2), 1, -1) == $u_id) {
            return response()->json(["login"=> "true", DB::table("user_shops")->where("id_user", $s_id)->select("avt_user", "firstname", "lastname", "email", "id_user", "id_shop", "role_user", "status")->get(), DB::table("shop_of_users")-> where("id_user", $s_id)-> select("id_shop")-> get()]);
        }           
        else {
            return response()-> json(["login"=> "false"]);
        }
    }
    
}