<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;

class ListMessage extends Controller
{
    //
    public function index(Request $request) {
        return Message::where("user_id", $request-> id_user)->distinct()-> select("id_conversation")-> get();
    }
}