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
            $table->string('type')->default('current')->change();
        });
        DB::table('leases')->where('type', 'original')->update(['type' => 'current']);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('leases', function (Blueprint $table) {
            $table->string('type')->default('original')->change();
        });
        DB::table('leases')->where('type', 'current')->update(['type' => 'original']);
    }
};
