<?php

namespace Database\Seeders;

use App\Models\Asset;
use App\Models\Lease;
use Illuminate\Database\Seeder;

class AssetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Asset::factory()->count(25)
            ->has(Lease::factory()->count(8), 'leases')
            ->create();
    }
}
