<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ChatMessageResource extends JsonResource
{
    public static $wrap = 'chat_message';
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'from'=>$this->from,
            'message'=>$this->message,
            'created_at'=>$this->created_at->format('M j, y g:ia'),
        ];
    }
}
