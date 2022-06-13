<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminDecisionController extends Controller
{
    //
    public function lock_account(Request $request) {
        DB::table("status_user")-> where("id_user", $request-> id_user)-> update(["lock_account"=> 1]);
        DB::table("user_shops")-> where("id_user", $request-> id_user)-> update(["status"=> 1]);
        return response()-> json("success");
    } 


    public function un_lock_account(Request $request) {
        DB::table("status_user")-> where("id_user", $request-> id_user)-> update(["lock_account"=> 0]);
        DB::table("user_shops")-> where("id_user", $request-> id_user)-> update(["status"=> 0]);
        return response()-> json("success");
    }


    public function lock_account_time(Request $request) {
        DB::table("status_user")-> where("id_user", $request-> id_user)-> update(["lock_temporary"=> $request-> valuetime]);
        DB::table("user_shops")-> where("id_user", $request-> id_user)-> update(["status"=> $request-> valuetime]);
        return response()-> json("success");
    }


    public function unlock_account_time(Request $request) {
        DB::table("status_user")-> where("id_user", $request-> id_user)-> update(["lock_temporary"=> 0]);
        DB::table("user_shops")-> where("id_user", $request-> id_user)-> update(["status"=> 0]);
        return response()-> json("success");
    }
    //


    public function lock_shop(Request $request) {
        DB::table("status_shop")-> where("id_shop", $request-> id_shop)-> update(["lock_shop"=> 1]);
        // DB::table("shop_shops")-> where("id_shop", $request-> id_shop)-> update(["status"=> 1]);
        return response()-> json("success");
    } 

    
    public function un_lock_shop(Request $request) {
        DB::table("status_shop")-> where("id_shop", $request-> id_shop)-> update(["lock_shop"=> 0]);
        // DB::table("shop_shops")-> where("id_shop", $request-> id_shop)-> update(["status"=> 0]);
        return response()-> json("success");
    }


    public function lock_shop_time(Request $request) {
        DB::table("status_shop")-> where("id_shop", $request-> id_shop)-> update(["lock_temporary"=> $request-> valuetime]);
        // DB::table("shop_shops")-> where("id_shop", $request-> id_shop)-> update(["status"=> $request-> valuetime]);
        return response()-> json("success");
    }

    
    public function unlock_shop_time(Request $request) {
        DB::table("status_shop")-> where("id_shop", $request-> id_shop)-> update(["lock_temporary"=> 0]);
        // DB::table("shop_shops")-> where("id_shop", $request-> id_shop)-> update(["status"=> 0]);
        return response()-> json("success");
    }
}
