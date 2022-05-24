<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;
    
    /** */ 
     /**
     * 
     *
     * @var string
     */
    protected $table= 'products';
    protected $primaryKey= 'id';
    protected $hidden= ["created_at", "updated_at", "id"];
    public $timestamp= false;
}