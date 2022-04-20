<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\Process\Process;

class FilterByCategory extends Controller
{
    //
    public function boot(Request $request) {
        if($request-> categories == "all") {
            return response()-> json(["total"=> Products::get()->count(),"list"=> Products::limit(8)->offset(($request-> current_page -1)* 8 )->get()]);
        }
        
    }
}