<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class FcbController extends Controller
{
    //
    public function boot(Request $request) {
        if(isset($request-> b) && ($request-> b == "all")) {
            return Products:: get();
        }
        if(isset($request-> b)) {
            return Products::where("classify", $request -> b)-> get();
        }
        return ['nothing'];
    }
}