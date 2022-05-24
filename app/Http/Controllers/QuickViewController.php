<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class QuickViewController extends Controller
{
    /**
     * Undocumented function
     *
     * @param Request $request
     * @return void
     */
    public function getAllImages(Request $request) {
        $allImages= DB::table("products")
        ->join("items", "products.id_product", "=", "items.id_product")
        ->where("products.id_product", $request-> id_product)
        ->select("items.full_images")
        ->get();
        return response()->json(['allImages'=> $allImages, 'id_product'=> $request->id_product]);
    }
}