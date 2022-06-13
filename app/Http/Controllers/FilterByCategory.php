<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Stripe\Product;
use Symfony\Component\Process\Process;

class FilterByCategory extends Controller
{
    //
    /**
     * Categories
     *
     * @param Request $request
     * @return void
     */
    public function boot(Request $request) {
        if($request-> categories == "all") {
            return response()-> json(["total"=> Products::get()->count(),"list"=> Products::limit(8)->offset(($request-> current_page -1)* 8 )->get()]);
        }
        if($request-> categories== "trending") {
            return response()-> json(["total"=> Products::where("classify", "trending")->get()-> count(), "list"=> Products::where("classify", "trending")->limit(8)-> offset(($request-> current_page - 1) * 8)-> get()]);
        }
        if($request-> categories== "sale") {
            return response()-> json(["total"=> Products::where("sale_specific_money" ,">", 0)-> orWhere("sale_percent", ">", 0)-> get()-> count(), "list"=> Products::where("sale_specific_money" ,">", 0)-> orWhere("sale_percent", ">", 0)->limit(8)-> offset(($request-> current_page - 1) * 8)-> get()]);
        }
        if($request-> categories== "latest") {
            return response()-> json(["total"=> Products:: get()-> count(), "list"=> Products::orderBy("timeup", "desc")->limit(8)-> offset(($request-> current_page - 1) * 8)-> get()]);
        }
        if($request-> categories== "random") {
            
        }
    }
    
}