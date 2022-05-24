<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\UploadAvatarController;
use App\Models\UserShop;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Log;

class ImageController extends Controller
{
    //
    /**
     * upload to cloudinary
     *
     * @param Request $request
     * @return void
     */
    public function storeImage(Request $request) {
        $image= $request->file("avatar");
        $result= UploadAvatarController::upload($image->getRealPath(), $image->getClientOriginalName());
        $id_user= substr(substr(explode(":",Cookie::get("s_id"))[1], 0, -2), 1, -1);
        UserShop::where("id_user", $id_user)->update(['avt_user'=> $result]);
        return response()->json($result);    
    }
    public function batchImage(Request $request) {
        return "hihi";
    }
}   