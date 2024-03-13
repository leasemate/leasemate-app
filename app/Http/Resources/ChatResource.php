<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ChatResource extends JsonResource
{
    //    public static $wrap = 'chat';
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        return [
            'chat_uuid' => $this->chat_uuid,
            'updated_at' => $this->updated_at->format('M j, y g:ia'),
            'last_message' => $this->when($this->relationLoaded('last_message'), function () {
                return new ChatMessageResource($this->last_message);
            }),
            'messages' => ChatMessageResource::collection($this->whenLoaded('messages')),
        ];
    }
}
