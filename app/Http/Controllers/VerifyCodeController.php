<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\View;

class VerifyCodeController extends Controller
{
    //
    
    private function VerifyCode() {
        $verify= rand(100000, 1000000);
        return $verify;
    }    
    public function SendMail(Request $request) {
        session()->forget('verifycode');
        session()->flush(); 
        $verifyCode= $this->VerifyCode();
        Mail::send('mail', array('name'=> $verifyCode), function($message) {
            $message->to('giang10a1dz@gmail.com', 'Visitor')->subject('Visitor Feedback');
            $message->from("datistpham@gmail.com", "Unilight");
        });
        Session::flash('flash_message', 'Send message successfully');
        $request->session()->put('verifycode', $verifyCode);
        return view("welcome");
    }
    public function AuthenticationEmail(Request $request) {
        if($request->verifyCode == $request->session()->get('verifycode')) {
            return response()->json(['state'=> 1]);
        }
        return response()->json(['state'=> 0]);
    }
}