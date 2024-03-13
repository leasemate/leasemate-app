<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('leases', function (Blueprint $table) {

            DB::statement('ALTER TABLE `leases` CHANGE `tenant_name` `tenant` varchar(255)');
            DB::statement('ALTER TABLE `leases` CHANGE `gla` `gla` int(11)');
            DB::statement('ALTER TABLE `leases` CHANGE `address` `premise_address` varchar(255)');

            $table->string('landlord')->nullable()->after('tenant');
            $table->string('building_address')->nullable()->after('premise_address');
            $table->integer('term')->nullable()->after('rent_per_sqft');
            $table->integer('abatement')->nullable()->after('term');
            $table->decimal('pro_rata_share', 5, 2)->nullable()->after('abatement');
            $table->integer('security_deposit')->nullable()->after('pro_rata_share');
            $table->json('rent_schedule')->nullable()->after('security_deposit');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('leases', function (Blueprint $table) {
            DB::statement('ALTER TABLE `leases` CHANGE `tenant` `tenant_name` varchar(255)');
            DB::statement('ALTER TABLE `leases` CHANGE `premise_address` `address` varchar(255)');
            DB::statement('ALTER TABLE `leases` CHANGE `gla` `gla` varchar(255) NULL');

            $table->dropColumn('landlord');
            $table->dropColumn('building_address');
            $table->dropColumn('term');
            $table->dropColumn('abatement');
            $table->dropColumn('pro_rata_share');
            $table->dropColumn('security_deposit');
            $table->dropColumn('rent_schedule');
        });
    }
};
