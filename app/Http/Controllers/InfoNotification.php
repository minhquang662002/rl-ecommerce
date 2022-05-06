<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InfoNotification extends Controller
{
    //
    public function boot(Request $request) {
        return DB::table("user_shops")-> where("id_user", $request-> id_user)-> select("firstname", "lastname", "avt_user", "id_user")-> get();
    }
}