<?php

namespace Database\Factories;

use App\Models\Asset;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Lease>
 */
class LeaseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::inRandomOrder()->first()->id ?? User::factory()->create()->id,
            'asset_id' => Asset::inRandomOrder()->first()->id ?? Asset::factory()->create()->id,
            'tenant_name' => $this->faker->company,
            'suite_number' => $this->faker->numberBetween(100, 1000),
            'gross_leasable_area' => $this->faker->numberBetween(10000, 100000),
            'start_date' => $this->faker->dateTimeBetween('-5 years', 'now'),
            'end_date' => $this->faker->dateTimeBetween('now', '+5 years'),
        'rent_per_sqft' => $this->faker->randomFloat(2, 1, 5),
        ];
    }
}
