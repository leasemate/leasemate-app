<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Chat>
 */
class ChatFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $randomDate = $this->faker->dateTimeBetween('-1 month', 'now');

        return [
            'user_id' => User::inRandomOrder()->first()->id ?? User::factory()->create()->id,
            'chat_uuid' => $this->faker->uuid,
            'created_at' =>$randomDate,
            'updated_at' =>$this->faker->dateTimeBetween($randomDate, 'now')
        ];
    }
}
