<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserShop extends Model
{
    use HasFactory;
    /**
     * Mass assignable
     *
     * @var array<int, string>
     */
    protected $fillable= ["firstname", "lastname", "email", "password", "id_user", "secret_key", "api_token", "token", "token_key", "avt_user"];
    /**
     * Hidden serialazations
     *
     * @var array<int, string>
     */
    /**
     * Primary key
     *
     * @var string
     */
    protected  $primaryKey = 'id_user';
    /**
     * Disable increment primary key
     *
     * @var boolean
     */
    public $incrementing = false;
    protected $hidden= ["password", "api_token", "secret_key"];
    public function phone() {
        return $this-> hasOne(PhoneNumber::class, "id_user", "user_id");
    }
    public function messages() {
        return $this-> hasMany(Message::class);
    }
}