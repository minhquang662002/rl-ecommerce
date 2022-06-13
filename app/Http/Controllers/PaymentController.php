<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Session as FacadesSession;
use Stripe;
use Illuminate\Support\Str;


class PaymentController extends Controller
{
    //

    /**
     * Payment with Stripe
     *
     * @param Request $request
     * @return void
     */
    public function makePayment(Request $request)
    {
        $secret_token = Str::uuid()->toString();
        Stripe\Stripe::setApiKey(env("STRIPE_SECRET"));
        header('Content-Type: application/json');
        $YOUR_DOMAIN = "http://localhost:8000";
        $checkout_url = Stripe\Checkout\Session::create([
            "line_items" => [[
                'price_data' => [
                    'currency' => 'usd',
                    'unit_amount' => $request-> price * 100,
                    'product_data' => [
                        'name' => $request-> title,
                        'images' => [$request-> image],
                    ],
                ],
                'quantity' => $request-> quantity
            ]],
            'payment_method_types' => [
                'card',
            ],
            'mode' => 'payment',
            'success_url' => $YOUR_DOMAIN . '/check/payment/success.html?query=' . $secret_token . '&i='.$request-> id_user.'&b='.$request-> buyer,
            'cancel_url' => $YOUR_DOMAIN,
        ]);
        $x= $request-> id_user;
        Redis::set("seque", $secret_token.','.$x, "EX", 180);
        FacadesSession::flash("success", "Payment successfully made.");
        DB::table("order_product")-> insert([
            'id_order'=> Str::uuid(),   
            'id_product'=> $request-> id_product,
            'quantity'=> $request-> quantity,
            'cost'=> $request-> price,
            'color'=> $request-> color, 
            'id_buyer'=> $request-> buyer,
            'state'=> 1,
            'id_seller'=> $request-> id_user,
            'timeu'=> $request-> timeu,
            "size"=> $request-> size
        ]);
        return response()-> json([$checkout_url->url, $checkout_url->payment_intent, $secret_token]);
        header("HTTP/1.1 303 See Other");
        header("Location: " . $checkout_url->url);
    }
}