<?php

namespace App\Http\Controllers;

use App\Models\UserShop;
use App\Notifications\DatabaseNotification;
use Illuminate\Http\Request;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Notification as Noti;

class NotificationController extends Controller
{
    //
    /**
     * Undocumented function
     */
    public function __construct()
    {
        // $this->middleware("auth");
    }
    /**
     * Undocumented function
     *
     * @return void
     */
    public function index() {
        return view("welcome");
    }
    /**
     * Undocumented function
     *
     * @return void
     */
    public function sendOfferNotification() {
        $user_schema= UserShop::find(1);
        Log::emergency($user_schema[0]);
        $offerData= [
            'name'=> 'Bogo',
            'body'=> 'You received an offer',
            'thanks'=> "Thank you",
            'offerText' => 'Check out the offer',
            'offerUrl' => url('/'),
            'offer_id' => 1,
        ];

        // Noti::send($user_schema[0], new DatabaseNotification($offerData));
        $user_schema-> notify(new DatabaseNotification($offerData));
        return view("welcome");
    }
}