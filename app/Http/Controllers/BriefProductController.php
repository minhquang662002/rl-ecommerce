<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class BriefProductController extends Controller
{
    //
    /**
     * Undocumented function
     *
     * @param Request $request
     * @return void
     */
    public function getBrief(Request $request) {
        
        return response(Products::where("id_product", $request-> id_product)->select("title", "price", "decription","size","categories","color", "author_shop", "id_shop", "sale_percent", "sale_specific_money")->get());
    }
}