<?php

namespace App\Http\Controllers;

use App\Models\UserShop;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Log;

class UsersController extends Controller
{
    //
    /**
     * Undocumented function
     *
     * @param Request $request
     * @return void
     */
    protected function signup(Request $request) {
        $auth_ac= Str::uuid()-> toString();
        $user= UserShop::create([
            'id_user'=> $auth_ac,
            'firstname'=> $request->firstname,
            'lastname'=> $request-> lastname,
            'email'=> $request->email,
            'password'=> md5($request->password),
            'api_token'=> Str::uuid()->toString(),   
            'token_key'=> md5($auth_ac),
            'secret_key'=> Str::uuid()-> toString(),
            'token'=> Str::uuid()-> toString(),
            'phone_number'=> "",
            'gender'=> 0,
            "date_of_birth"=> 0, "month_of_birth"=> 0, "year_of_birth"=> 0,
            "fullname"=> "",
            'province_id'=> 0,
            'district_id'=> 0,
            'ward_id'=> 0,
            'detail_address'=> "",
            'avt_user'=> 'none',
            'role_user'=> 1,
            "id_shop"=> "",
        ]);
        $user->save();
        return response()->json(['err'=>[0]]);
    }
    /**
     * Undocumented function
     *
     * @param Request $request
     * @param Response $response
     * @return void
     */
    protected function login(Request $request, Response $response) {
        if(UserShop::where("email", $request-> email)->where("password", md5($request-> password))->exists()) {
            $u_id_no_hash= UserShop::where("email", $request-> email)->where("password", md5($request-> password))->select("id_user")-> get(); 
            $u_id_hashed= md5($u_id_no_hash[0]["id_user"]); 
            // Log::emergency($u_id_no_hash[0]["id_user"]);
            $response->withCookie(cookie("u_id", $u_id_hashed, 100000))->withCookie(cookie("s_id", $u_id_no_hash, 100000))->withCookie(cookie("u_ol", $u_id_no_hash[0]["id_user"], 100000));
            return $response;   
        };  
        
        return response("false");
    }   
}