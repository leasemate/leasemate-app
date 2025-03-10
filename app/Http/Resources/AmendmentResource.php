<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AmendmentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'execution_date' => $this->execution_date ? $this->execution_date->format('m/d/y') : null,
            'document' => new DocumentResource($this->whenLoaded('document')),
        ];
    }
}
