<?php

namespace App\Http\Controllers;


use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class SearchSuggestController extends Controller
{
    //
    /**
     * 
     *
     * @param Request $request
     * @return void
     */
    public function searchSuggest(Request $request) {
        $search_result= Products::where("title", "like", $request->query_search."%")->orWhere("title", "like", "%".$request-> query_search."%")->orWhere("type","like", "%".$request-> query_search."%")->select("title", "type", "id_product")->get(); 
        return response($search_result);
    }
}