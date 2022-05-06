<?php

namespace App\Http\Controllers;

use App\Models\CartShopping;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class AddItemToCartController extends Controller
{
    //
    
    public function boot(Request $request){ 
        CartShopping::insert([
            "id_user"=> $request-> id_user,
            "id_product"=> $request-> id_product,
            "idOrder"=> Str::uuid()-> toString()
        ]);
        return response("success");
    }
}