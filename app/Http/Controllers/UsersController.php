<?php

namespace App\Http\Controllers;

use App\Models\UserShop;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UsersController extends Controller
{
    //
    protected function signup(Request $request) {
        $user= UserShop::create([
            'id_user'=> Str::uuid()->toString(),
            'firstname'=> $request->firstname,
            'lastname'=> $request-> lastname,
            'email'=> $request->email,
            'password'=> $request->password,
            'secret_key'=> Str::uuid()-> toString()
        ]);
        $user->save();
        return response()->json(['err'=> [0]]);
    }
    protected function login() {
        
    }   
}