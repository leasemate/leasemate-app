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
        Schema::table('documents', function (Blueprint $table) {
            $table->string('status')->default('Pending')->after('uuid');
            $table->text('status_msg')->nullable()->after('status');
            $table->tinyInteger('status_progress')->default(0)->after('status_msg');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('documents', function (Blueprint $table) {
            $table->dropColumn('status');
            $table->dropColumn('status_msg');
            $table->dropColumn('status_progress');
        });
    }
};
