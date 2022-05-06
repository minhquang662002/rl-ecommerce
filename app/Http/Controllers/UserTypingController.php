<?php

namespace App\Http\Controllers;

use App\Events\UserTyping;
use Illuminate\Http\Request;

class UserTypingController extends Controller
{
    //
    public function boot(Request $request) {
        broadcast(new UserTyping($request-> id_comment, $request-> lengthText))->toOthers();
        return ['typing'=> "on"];
    }
}