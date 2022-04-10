<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class SignupMiddelware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $err= array();
        if(!preg_match("/^[a-zA-Z-' ]*$/", $request->firstname)) {
            array_push($err, 1);
        }
        if(strlen($request->firstname)<1) {
            array_push($err, 2);      
        }
        if(!preg_match("/^[a-zA-Z-' ]*$/", $request->lastname)) {
            array_push($err, 3);
        }
        if(strlen($request->lastname)<1) {
            array_push($err, 4);      
        }
        if(!filter_var($request->email, FILTER_VALIDATE_EMAIL)) {
            array_push($err, 5);
        }
        if(strlen($request->email)<1) {
            array_push($err, 6);
        }
        if(strlen($request->password)< 1) {
            array_push($err, 7);
        }
        if($request->password !== $request->confirmpassword) {
            array_push($err, 8);
        }
        if(count($err) >=1) {
            return response()->json(['err'=> $err]);
        }
        return $next($request);
    }
}