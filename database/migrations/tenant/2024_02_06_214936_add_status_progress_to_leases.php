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
            $table->tinyInteger('status_progress')->default(0)->after('status_msg');
            $table->json('detailed_extracted_data')->nullable()->after('extracted_data');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('leases', function (Blueprint $table) {
            $table->removeColumn('status_progress');
            $table->removeColumn('detailed_extracted_data');
        });
    }
};
