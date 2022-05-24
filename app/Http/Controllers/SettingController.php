<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SettingController extends Controller
{
    //
    /**
     * change language and theme
     *
     * @param Request $request
     * @return void
     */
    public function setSetting(Request $request) {
        if(isset($request-> query_string)) {
            $a= $request-> type_;
            DB::table("setting_shop")-> where("id_user", $request-> id_user)->update(["$a"=> $request-> query_string]);
            return DB::table("setting_shop")->where("id_user", $request-> id_user)-> select("theme", "language")-> get();
        }
        return DB::table("setting_shop")->where("id_user", $request-> id_user)-> select("theme", "language")-> get();
    }
    /**
     * get lang and theme
     *
     * @param Request $request
     * @return void
     */
    public function getSetting(Request $request) {
        if(DB::table("setting_shop")-> where("id_user", $request-> id_user)-> exists()) {
            return DB::table("setting_shop")->where("id_user", $request-> id_user)-> select("theme", "language")-> get();
        }
        else {
            DB::table("setting_shop")->insert([
                'id_user'=> $request-> id_user,
                'theme'=> 2,
                'language'=> 2
            ]);
            return DB::table("setting_shop")-> where('id_user', $request-> id_user)-> select("theme", "language")-> get();
        }
    }
}