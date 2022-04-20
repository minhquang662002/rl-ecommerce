<?php

namespace App\Http\Controllers;

use App\Models\UserShop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Log;

class UserLogin extends Controller
{
    //
    public function checkLogin(Request $request) {
        $s_id= (substr(substr(explode(":",Cookie::get("s_id"))[1], 0, -2), 1, -1));
        $u_id= Cookie::get("u_id");
        $token_key= UserShop::where("id_user", $s_id)->select("token_key")->get(); 
        Log::emergency(substr(substr(explode(":",$token_key)[1], 0, -2), 1, -1));
        if(strlen($token_key)< 1) {
            return response()->json(["login"=> "false"]);
        }
        if(substr(substr(explode(":",$token_key)[1], 0, -2), 1, -1) == $u_id) {
            return response()->json(["login"=> "true", UserShop::where("id_user", $s_id)->select("avt_user", "firstname", "lastname")->get()]);
        }           
        else {
            return response()-> json(["login"=> "false"]);
        }
    }
    
}