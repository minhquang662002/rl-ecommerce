<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class BriefProductController extends Controller
{
    //
    public function getBrief(Request $request) {
        
        return response(Products::where("id_product", $request-> id_product)->select("title", "price", "decription","size","categories","color")->get());
    }
}