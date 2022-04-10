<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ItemController extends Controller
{
    //
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getItem(Request $request) {
        return Item::where("id_product", $request->id_product)->get();
    }
}