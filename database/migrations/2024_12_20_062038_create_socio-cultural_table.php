<?php

use Illuminate\Database\Migrations\Migration;
use MongoDB\Laravel\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //
        Schema::create('socio-cultural', function (Blueprint $collection) {
            $collection->id();
            $collection->string('title');
            $collection->string('description');
            $collection->string('date');
            $collection->string('type');
            $collection->string('imageLink');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
