<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use Illuminate\Http\Request;

class AddFavoriteUser extends Controller
{
    //
    public function boot(Request $request) {
        Favorite::insert([
            'id_user'=> $request-> id_user,
            'id_product'=> $request-> id_product,
        ]);
        return response()-> json(["state"=> "success"]);
    }
}