<?php

namespace App\Http\Resources;

use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class DocumentResource extends JsonResource
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
            'uuid' => $this->uuid,
            'status' => $this->status,
            'status_progress' => $this->getStatusProgress(),
            'status_msg' => $this->status_msg,
            'name' => $this->name,
            'file_name' => Storage::disk('s3')->url($this->file_name),
            'is_deleting' => ($this->status === 'Deleting'),
            'document_detail' => new DocumentDetailResource($this->whenLoaded('document_detail')),
        ];
    }

    protected function getStatusProgress(): ?string
    {
        if ($this->collection_name == Document::COLLECTION_AMENDMENT) {
            return "{$this->status_progress}%";
        } else {
            return $this->status_progress && $this->status == 'Processing' ? $this->status_progress.'%' : null;
        }
    }
}
