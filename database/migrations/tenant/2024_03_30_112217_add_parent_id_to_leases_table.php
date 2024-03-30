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
            $table->unsignedBigInteger('parent_id')->nullable()->after('id');
            $table->string('type')->after('asset_id')->default('original');
            $table->date('execution_date')->nullable()->after('building_address');
            $table->date('commencement_date')->nullable()->after('execution_date');
            $table->date('expiration_date')->nullable()->after('commencement_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('leases', function (Blueprint $table) {
            $table->dropColumn('parent_id');
            $table->dropColumn('type');
            $table->dropColumn('execution_date');
            $table->dropColumn('commencement_date');
            $table->dropColumn('expiration_date');
        });
    }
};
