<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;

class MessageConversation extends Controller
{
    //
    public function index(Request $request) {
        return Message::where("id_conversation", $request-> id_conversation)->join("user_shops", "user_shops.id_user", "=", "user_id")->orderBy("timeup", "DESC")->limit(10)->offset(($request-> page - 1) * 8) -> select("user_id", "message", "type_message", "avt_user", "lastname", "timedl", "timeup")-> get();
    }
    public function rm(Request $request) {
        return Message::where("id_conversation", $request-> id_conversation)->join("user_shops", "user_shops.id_user","=", "user_id")->where("user_shops.id_user", "!=", $request-> id_user)->orWhereNull("user_shops.id_user")-> select("avt_user", "lastname")-> distinct()-> get();
    }
}