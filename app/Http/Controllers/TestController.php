<?php

namespace App\Http\Controllers;

use App\Models\UserShop;
use Illuminate\Http\Request;

class TestController extends Controller
{
    //
    public function Test() {

        return UserShop::where("id_user", "8a93f886-12fb-47fd-89fa-fc55c43052e2")-> phone;
    }
}