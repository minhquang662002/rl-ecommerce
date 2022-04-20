<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class FilterFileUpload
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
        $arr_file_not_allow= ["js", "php", "py", "rb", "html", "css" ];
        if( in_array($request-> file("avatar")-> extension(), $arr_file_not_allow)) {
            return response()-> json(["state" => "invalid"]);
        }
        return $next($request);
    }
}