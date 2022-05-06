<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class LoadMoreComment extends Controller
{
    //
    public function boot(Request $request) {
        if(isset($request-> page)) {
            return Comment::where("id_comment", $request-> id_comment)->orderBy("timem", "DESC")-> limit(10)-> offset(($request-> page -1)* 10)-> get();
        }
    }
}