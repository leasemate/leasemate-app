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
        Schema::create('lease_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('lease_id')->constrained()->onDelete('cascade');
            $table->text('option_to_extend')->nullable();
            $table->text('right_of_first_offer')->nullable();
            $table->text('right_of_first_refusal')->nullable();
            $table->text('tenant_improvement_allowance')->nullable();
            $table->text('tenant_insurance_requirements')->nullable();
            $table->text('tenant_maintenance_obligations')->nullable();
            $table->text('landlord_maintenance_obligations')->nullable();
            $table->text('assignment_subletting')->nullable();
            $table->text('holding_over')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lease_details');
    }
};
