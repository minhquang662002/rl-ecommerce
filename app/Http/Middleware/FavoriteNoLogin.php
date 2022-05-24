<?php

namespace App\Http\Middleware;

use App\Models\Products;
use Closure;
use Illuminate\Http\Request;

class FavoriteNoLogin
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
        if($request-> hasCookie("s_id")== false && $request-> hasCookie("u_id")== false) {
            $pt= Products::whereIn("id_product", $request-> list)->get();
            return response($pt);        
        }
        return $next($request);
    }
}
