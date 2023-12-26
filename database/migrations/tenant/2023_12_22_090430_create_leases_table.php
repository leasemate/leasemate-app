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
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('asset_id')->constrained()->cascadeOnDelete();
            $table->foreignId('parent_id')->nullable()->constrained('leases')->cascadeOnDelete();
            $table->string('tenant_name')->nullable();
            $table->string('suite_number')->nullable();;
            $table->string('gross_leasable_area')->nullable();;
            $table->date('start_date')->nullable();;
            $table->date('end_date')->nullable();;
            $table->integer('rent_per_sqft')->nullable();
            $table->string('status')->default('Pending');
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
