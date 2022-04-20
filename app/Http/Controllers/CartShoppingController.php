<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class CartShoppingController extends Controller
{
    //
    public function getItemShopping(Request $request) {
        return Products::whereIn("id_product", $request-> list)->select()->get();
    }
}