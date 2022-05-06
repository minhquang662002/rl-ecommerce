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
        Schema::table('shop_of_users', function (Blueprint $table) {
            //
            $table-> string("name_shop");
            $table-> string("avatar_shop"); 
            $table-> integer("quantity_shop");
            $table-> integer("follower");
            $table-> integer("joined");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('shop_of_users', function (Blueprint $table) {
            //
        });
    }
};