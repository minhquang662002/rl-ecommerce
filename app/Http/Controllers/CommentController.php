<?php

namespace App\Http\Controllers;

use App\Events\CommentSent;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    //
    public function sendComment(Request $request) {
        broadcast(new CommentSent($request-> id_comment, $request-> id_user, $request-> content, $request-> type_comment, $request-> timedl, $request-> timeup, $request-> avt_user, $request-> user_name));
        Comment::insert([
            'id_comment'=> $request-> id_comment,
            'id_user'=> $request-> id_user,
            'content'=> $request-> content,
            'type_comment'=> $request-> type_comment,
            'timedl'=> $request-> timedl,
            'timeup'=> $request-> timeup,
            'avt_user'=> $request-> avt_user,
            'user_name'=> $request-> user_name,
            'timem'=> $request-> timem,
        ]);
        return ['status'=> 'Comment sent'];
    }
}