<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminManageController extends Controller
{
    //
    /**
     * 
     *
     * @return void
     */
    public function listUser() {
        return DB::table("user_shops")-> where("role_user", "!=", "3")-> select("id_user", "firstname", "lastname", "email", "password", "avt_user", "created_at", "phone_number", "gender", "date_of_birth", "month_of_birth", "year_of_birth", "id_shop", "detail_address")-> get();
    }
    
    public function detailUser(Request $request) {
        return DB::table("user_shops")-> where("role_user", "!=", "3")-> where("id_user", $request-> id)-> select("id_user", "firstname", "lastname", "email", "password", "avt_user", "created_at", "phone_number", "gender", "date_of_birth", "month_of_birth", "year_of_birth", "id_shop", "detail_address")-> get();
    }
    public function editNameUser(Request $request) {
        DB::table("user_shops")-> where("id_user", $request-> id)->update(["firstname"=> $request-> newfirstname, "lastname"=> $request-> newlastname]);
        return response()-> json(["success"]);
    }

    public function statusUser(Request $request) {
        return DB::table("status_user")-> where("id_user", $request-> id_user)-> select("*")-> get();
    }
    /**
     * Undocumented function
     *
     * @return void
     */
    public function listShop() {
        return DB::table("shop_of_users")-> select("*")-> get();
    }
    public function detailShop(Request $request) {
        return DB::table("shop_of_users")-> where("id_shop", $request-> id_shop)-> select("*")-> get();
    }
    public function editNameShop(Request $request) {
        DB::table("shop_of_users")-> where("id_shop", $request-> id_shop)->update(["name_shop"=> $request-> newname]);
        return response()-> json(["success"]);
    }

    public function statusShop(Request $request) {
        return DB::table("status_shop")-> where("id_shop", $request-> id_shop)-> select("*")-> get();
    }
    //
    public function helpUser(Request $request) {
        return DB::table("help_center")-> join("user_shops", "help_center.id_user", "=", "user_shops.id_user")-> select("user_shops.firstname as firstname", "user_shops.lastname as lastname", "help_center.id_user", "help_center.text as text", "help_center.time_send as time_send", "user_shops.avt_user as avt_user", "help_center.id_help_center as id_help_center")->orderBy("time_send", "desc")-> get();
    }
}

