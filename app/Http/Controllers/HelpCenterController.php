<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HelpCenterController extends Controller
{
    //
    public function textHelp(Request $request) {
        DB::table("help_center")-> insert(["id_user"=> $request-> id_user, "text"=> $request-> data, "time_send"=> $request-> time_send, "id_help_center"=> $request->  id_help_center]);
        return response()-> json("success");
    }
}
