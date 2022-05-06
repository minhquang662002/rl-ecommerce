<?php

namespace App\Http\Controllers;

use App\Mail\VerifyUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\View;
use Symfony\Component\Console\Input\Input;

class VerifyCodeController extends Controller
{
    //
    /**
     * Undocumented function
     *
     * @param Request $request
     * @return void
     */
    private function REmail(Request $request) {
        return $request-> email;
    }
    /**
     * Undocumented function
     *
     * @return void
     */
    private function VerifyCode() {
        $verify= rand(100000, 1000000);
        return $verify;
    }    
    /**
     * Undocumented function
     *
     * @param Request $request
     * @return void
     */
    public function SendMail(Request $request) {
        // session()->forget('verifycode');
        // $emailTo= $request->email;
        $verifyCode= $this->VerifyCode();
        // Mail::send('mail', array('name'=> $verifyCode), function($emailTo= "giang10a1dz@gmail.com", $message) {
        //     $message->to($emailTo, 'Visitor')->subject('Visitor Feedback');
        //     $message->from("datistpham@gmail.com", "Unilight");
        // });
        // Session::flash('flash_message', 'Send message successfully');
        // $request->session()->put('verifycode', $verifyCode);
        $email= $request-> email;   
        Mail::to("giang10a1dz@gmail.com")->send(new VerifyUser($verifyCode));
        return view("welcome");
    }
    /**
     * Undocumented function
     *
     * @param Request $request
     * @return void
     */
    public function AuthenticationEmail(Request $request) {
        if($request->verifyCode == $request->session()->get('verifycode')) {
            return response()->json(['state'=> 1]);
        }
        return response()->json(['state'=> 0]);
    }
}