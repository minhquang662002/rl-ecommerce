<?php

namespace App\Http\Controllers;

use App\Models\ReviewProduct;
use Illuminate\Http\Request;

class ReviewProductController extends Controller
{
    //
    /**
     * count and rating review
     *
     * @param Request $request
     * @return void
     */
    public function boot(Request $request) {
        return [ReviewProduct::where("id_product", $request-> id_product)-> count("*"),ReviewProduct::where("id_product", $request-> id_product)-> sum("rating")];
    }
    
    
}