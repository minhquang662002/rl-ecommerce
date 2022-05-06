<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class SearchProductController extends Controller
{
    //
    /**
     * Undocumented function
     *
     * @param Request $request
     * @return void
     */
    public function searchByOption(Request $request) {
        return Products::where("type", $request-> i)->select("title", "price", "decription","size","categories","color", "imageindex", "imageHover", "id_product", "classify")->get();
    }
    /**
     * Undocumented function
     *
     * @param Request $request
     * @return void
     */
    public function inspirationProduct(Request $request) {
        return Products::inRandomOrder()->limit(5)->select("title", "price", "decription","size","categories","color", "imageindex", "imageHover", "id_product", "classify")->get();
    }
}