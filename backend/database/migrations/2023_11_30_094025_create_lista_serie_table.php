<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('lista_serie', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('lista_id')->references('id')->on('listas');
            $table->foreignId('serie_id')->references('id')->on('series');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lista_serie');
    }
};
