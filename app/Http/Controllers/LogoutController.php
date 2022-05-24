<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class LogoutController extends Controller
{
    //
    public function boot(Request $request) {
        Cookie::queue(Cookie::forget("s_id"));
        Cookie::queue(Cookie::forget("u_id"));
        Cookie::queue(Cookie::forget("u_ol"));
        return response()-> json(["logout"=> "true"]);
    }
}