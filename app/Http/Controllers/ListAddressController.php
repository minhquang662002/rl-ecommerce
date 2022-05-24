<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\AddressController;

class ListAddressController extends Controller
{
    //
    /**
     * get address user
     *
     * @param Request $request
     * @return response
     */
    public function boot(Request $request) {
        if($request-> query_string== "province") {
            return DB::table("provinces")-> select("province_id", "province_name")-> orderBy("province_name")->get();
        }
        if($request-> query_string== "district") {
            return DB::table("districts")-> where("province_id", $request-> p_id)-> select("district_id", "district_name")-> orderBy("district_name")-> get();
        }
        if($request-> query_string== "ward") {
            return DB::table("awards")-> where("district_id", $request-> p_id)-> select("ward_id", "ward_name")->orderBy("ward_name")-> get();
        }
        else {
            return response("co cai nit");
        }
    }
    /**
     * Undocumented function
     *
     * @param Request $request
     * @param AddressController $addressController
     * @return void
     */
    public function setNewAddress(Request $request, AddressController $addressController ) {
        // $update= [["province_id"=> $request-> p], ["district_id"=> $request-> d], ["ward_id"=> $request-> w], ["detail_address"=> $request-> sl]];
        DB::table("user_shops")->where("id_user", $request-> id_user)-> update(["province_id"=> $request-> p, "district_id"=> $request-> d,"ward_id"=> $request-> w ,"detail_address"=> $request-> sl]);
        return $addressController-> boot($request);
    }
}   