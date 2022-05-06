<?php

namespace App\Http\Controllers;

use App\Models\UserShop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Log;

class AuthorizationController extends Controller
{
    //
    /**
     * Undocumented function
     *
     * @return void
     */
    public static function checkUser() {
        return (UserShop::where("id_user", (substr(substr(explode(":",Cookie::get("s_id"))[1], 0, -2), 1, -1)))->exists());
        
    }
}