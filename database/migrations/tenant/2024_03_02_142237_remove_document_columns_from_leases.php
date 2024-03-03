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
        Schema::table('leases', function (Blueprint $table) {
            $table->dropColumn('status');
            $table->dropColumn('status_msg');
            $table->dropColumn('status_progress');
            $table->dropColumn('og_filename');
            $table->dropColumn('filename');
            $table->dropColumn('mime_type');
            $table->dropColumn('disk');
            $table->dropColumn('size');
            $table->dropColumn('ext');
            $table->dropColumn('extracted_data');
            $table->dropColumn('detailed_extracted_data');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('leases', function (Blueprint $table) {
            $table->string('status')->nullable();
            $table->string('status_msg')->nullable();
            $table->tinyInteger('status_progress')->default(0);
            $table->string('og_filename')->nullable();
            $table->string('filename')->nullable();
            $table->string('mime_type')->nullable();
            $table->string('disk')->nullable();
            $table->unsignedBigInteger('size')->nullable();
            $table->string('ext')->nullable();
            $table->json('extracted_data')->nullable();
            $table->json('detailed_extracted_data')->nullable();
        });
    }
};
