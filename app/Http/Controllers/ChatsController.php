<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Models\UserShop;
use Illuminate\Http\Request;
use App\Events\MessageSent;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ChatsController extends Controller
{
    //
    /**
     * Send Message
     *
     * @param Request $request
     * @param UserShop $usershop
     * @param Message $message
     * @return Response $response
     */
    public function sendMessage(Request $request) {
        
        broadcast(new MessageSent($request-> message, $request-> type_message, $request-> timeup, $request-> id_user, $request-> timedl, $request-> avt_user, $request-> lastname, $request-> id_conversation));
        Message::where("id_conversation", $request-> id_conversation)-> create([
            "id_conversation"=> $request-> id_conversation,
            "user_id"=> $request-> id_user,
            "message"=> $request-> message,
            "type_message"=> $request-> type_message,
            "timeup"=> $request-> timeup,
            "timedl"=> $request-> timedl
        ]);
        return ['status'=> 'Message Sent!'];
    }
    public function cM(Request $request) {
        Message::insert([
        [
            "id_conversation"=> $request-> id_conversation,
            "user_id"=> $request-> i_s,
            "message"=> "Get started",
            "type_message"=> "start",
            "timeup"=> $request-> timeup,
            "timedl"=> $request-> timedl
        ],
        [
            "id_conversation" => $request-> id_conversation,
            "user_id"=> $request-> i_r,
            "message"=> "Get started",
            "type_message"=> "start",
            "timeup" => $request-> timeup,
            "timedl"=> $request-> timedl   
        ]
    ]);
    return response($request-> id_conversation);        
    }
}