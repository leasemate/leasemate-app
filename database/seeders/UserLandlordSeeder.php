<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserLandlordSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Dan Schultz',
            'email' => 'dan@reai-dev.com',
            'password' => '$2y$10$iz/MLHElX4VB3c36ra6IjeO8ZJ.Bt.yPpQkViaXrsYGSrPZGB9/3q',
            'email_verified_at' => now(),
        ]);
    }
}
