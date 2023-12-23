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
        Schema::create('leases', function (Blueprint $table) {
            $table->id();
            $table->foreignId('asset_id')->constrained()->cascadeOnDelete();
            $table->foreignId('parent_id')->constrained('leases')->cascadeOnDelete();
            $table->string('tenant_name');
            $table->string('suite_number');
            $table->string('gross_leaseable_area');
            $table->date('start_date');
            $table->date('end_date');
            $table->integer('rent_per_sqft');
            $table->json('abstract_data')->nullable();
            $table->timestamps();
            $table->softDeletesDatetime();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('leases');
    }
};
