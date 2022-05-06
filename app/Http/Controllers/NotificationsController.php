<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NotificationsController extends Controller
{
    //
    private $database;

    public function __construct()
    {
        $this-> database= \App\Services\FirebaseService::connect();
    }
    public function create(Request $request) { 
        $this-> database
        -> getReference('test/blogs/'. "title")
        -> set([
            'title'=> "vip",
        ]);
        return response()-> json('blog has been ');
    }
}