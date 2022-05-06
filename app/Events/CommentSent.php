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

class CommentSent implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $content;
    public $type_comment;
    public $timeup;
    public $id_user;
    public $timedl;
    public $avt_user;
    public $user_name;
    public $id_comment;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($id_comment, $id_user, $content, $type_comment, $timedl, $timeup, $avt_user, $user_name) {
        $this-> id_comment= $id_comment;
        $this-> id_user= $id_user;
        $this-> content= $content;
        $this-> type_comment= $type_comment;
        $this-> timedl= $timedl;
        $this-> timeup= $timeup;
        $this-> avt_user= $avt_user;
        $this-> user_name= $user_name;
    }
    

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return [$this-> id_comment];
    }
    public function broadcastAs() {
        return 'send-comment';
    }
}