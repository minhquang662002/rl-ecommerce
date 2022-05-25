<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\Products;
use Illuminate\Http\Request;

class UploadProductController extends Controller
{
    //
    public function upload(Request $request) {
        Products::insert([
            "id_product"=> $request-> id_product,
            "title"=> $request-> title,
            "price"=> $request-> price,
            "decription"=> $request-> decription,
            "size"=> $request-> size,
            "categories"=> $request-> cateogries,
            "color"=> $request-> color,
            "full_images"=> $request-> full_images,
            "imageindex"=> $request-> imageIndex,
            "imageHover"=> $request-> imageHover,
            "classify"=> $request-> classify,
            "type"=> $request-> type, 
            "id_shop"=> $request-> id_shop,
            "author_shop"=> $request-> id_user,
            "timeup"=> $request-> timeup
        ]);
        Item::insert([
            "id_product"=> $request-> id_product,
            "full_images"=> $request-> full_images
        ]);
        return response()-> json("update successfully");    
    }
}