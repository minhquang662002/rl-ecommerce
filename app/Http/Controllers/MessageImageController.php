<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class MessageImageController extends Controller 
{
    //
    public function returnPath(Request $request) {
        Log::emergency(count($request-> all()));
        $li= array();
        $lr= count($request-> all());
        for($i=0 ;$i< $lr; $i++) {
            $image= $request->file("img-".$i);
            $result= UploadAvatarController::upload($image->getRealPath(), $image->getClientOriginalName());
            array_push($li, $result);    
        }
        return response()-> json($li);
    }
}