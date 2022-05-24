<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string("title");
            $table-> string("price");
            $table-> string("decription");
            $table->string("size");
            $table->string("categories");
            $table->string("color");
            $table->string("full_images");
            $table->timestamps();
        });
            // Schema::table('products', function($table ){
            //     $table->string('full_images');
            // } );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};