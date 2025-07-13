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
        Schema::create('news_contents', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('news_id');
            $table->enum('type', ['text', 'image']);
            $table->text('content');
            $table->text('caption')->nullable();
            $table->integer('indexing');
            
            $table->foreign('news_id')->references('id')->on('news')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('news_contents');
    }
};
