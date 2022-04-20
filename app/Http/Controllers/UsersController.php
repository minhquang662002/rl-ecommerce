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
    protected function signup(Request $request) {
        $user= UserShop::create([
            'id_user'=> Str::uuid()->toString(),
            'firstname'=> $request->firstname,
            'lastname'=> $request-> lastname,
            'email'=> $request->email,
            'password'=> md5($request->password),
            'api_token'=> Str::uuid()->toString(),   
            'token_key'=> 'none',
            'secret_key'=> Str::uuid()-> toString(),
            'token'=> Str::uuid()-> toString(),
            'avt_user'=> 'none',
        ]);
        $user->save();
        return response()->json(['err'=>[0]]);
    }
    
    protected function login(Request $request, Response $response) {
        if(UserShop::where("email", $request-> email)->where("password", md5($request-> password))->exists()) {
            $u_id_no_hash= UserShop::where("email", $request-> email)->where("password", md5($request-> password))->select("id_user")-> get(); 
            $setToken= UserShop::find(1);
            Log::emergency(UserShop::find(1));
            $setToken->token_key= md5($u_id_no_hash);
            $setToken->save();
            $u_id_hashed= md5($u_id_no_hash);
            $response->withCookie(cookie("u_id", $u_id_hashed, 100000))->withCookie(cookie("s_id", $u_id_no_hash, 100000));
            return $response;   
        };  
        
        return response("false");
    }   
}