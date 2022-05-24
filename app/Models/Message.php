<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;
    // protected $timestamps = true;
    public $timestamps= false;
    protected $fillable= ["user_id", "message", "id_conversation", "type_message", "timeup", "timedl"];
    /**
     * Undocumented function
     *
     * @return void
     */
    public function usershop() {
        return $this-> belongsTo(UserShop::class);
    }
}