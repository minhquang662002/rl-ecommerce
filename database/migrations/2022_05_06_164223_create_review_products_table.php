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
        Schema::create('review_products', function (Blueprint $table) {
            $table->id();
            $table-> uuid("id_product");
            $table-> uuid("id_user");
            $table-> string("content", 1000);
            $table-> string("image", 1000);
            $table-> string("timedl", 1000);
            $table-> string("timeup" , 1000);
            $table-> string("avt_user" , 1000);
            $table-> string("user_name" , 1000);
            $table-> bigInteger("timem");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('review_products');
    }
};