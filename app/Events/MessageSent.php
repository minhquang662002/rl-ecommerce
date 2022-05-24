<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class MessageSent implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $message;
    public $type_message;
    public $timeup;
    public $id_user;
    public $timedl;
    public $avt_user;
    public $lastname;
    public $id_conversation;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct( $message, $type_message, $timeup, $id_user, $timedl, $avt_user, $lastname, $id_conversation)
    {
        //
        $this-> message = $message;  
        $this-> type_message= $type_message;
        $this-> timeup= $timeup;
        $this-> id_user= $id_user;
        $this-> timedl= $timedl;
        $this-> avt_user= $avt_user;
        $this-> lastname= $lastname;
        $this->id_conversation= $id_conversation;
    }
    
    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return [$this-> id_conversation];
    }
    public function broadcastAs() {
        return 'my-event';
    }
    
}