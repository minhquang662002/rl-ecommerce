<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redis;

class AddressController extends Controller
{
    //
    public function boot(Request $request) {
        $province= DB::table("provinces")-> join("user_shops", "provinces.province_id", "=", "user_shops.province_id")->where("id_user", $request-> id_user)-> select("province_name")-> get();
        $district= DB::table("districts")-> join("user_shops", "districts.district_id", "=", "user_shops.district_id")->where("id_user", $request-> id_user)-> select("district_name")-> get();
        $ward= DB::table("awards")-> join("user_shops", "awards.ward_id", "=", "user_shops.ward_id")->where("id_user", $request-> id_user)-> select("ward_name")-> get();
        $detail_address= DB::table("user_shops")->where("id_user", $request-> id_user)-> select("detail_address")-> get();
        return response()-> json([$detail_address , $ward, $district, $province]);
    }
}