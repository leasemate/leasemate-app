<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Asset>
 */
class AssetFactory extends Factory
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
            'name' => $this->faker->company,
            'address' => $this->faker->address,
            'gross_leasable_area' => $this->faker->numberBetween(10000, 100000),
            'asset_photo' => 'https://via.placeholder.com/350x250?text=Asset+Photo',
        ];
    }
}
