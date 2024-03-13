<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Log;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        Log::info('Running DatabaseSeeder');

        $this->call([
            //            UserSeeder::class,
            PermissionSeeder::class,
            RoleSeeder::class,

        ]);

    }
}
