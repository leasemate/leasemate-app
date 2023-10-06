<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ChatMessage>
 */
class ChatMessageFactory extends Factory
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
            'chat_id' => \App\Models\Chat::factory(),
            'from'=> $this->faker->randomElement(['user', 'bot']),
            'message' => $this->faker->sentence,
            'created_at' =>$randomDate,
            'updated_at' =>$this->faker->dateTimeBetween($randomDate, 'now')
        ];
    }
}
