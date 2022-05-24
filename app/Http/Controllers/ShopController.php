<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class ShopController extends Controller
{
    //
    public function boot(Request $request) {
        return [Products::where("id_shop", $request-> id_shop)-> get(), Products::where("id_shop", $request-> id_shop)-> select("author_shop")->distinct()-> get()];
    }
}