<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class SearchResultController extends Controller
{
    //
    /**
     * 
     *
     * @param Request $request
     * @return void
     */
    public function searchResult(Request $request) {
        $search_result= Products::where("title", "like", $request->query_search."%")->orWhere("title", "like", "%".$request-> query_search."%")->orWhere("type","like", "%".$request-> query_search."%")->select()->get(); 
        return response($search_result);
    }
}