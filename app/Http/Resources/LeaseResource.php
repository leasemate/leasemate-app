<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class LeaseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
//dd($this->extracted_data);
        return [
            'id' => $this->id,
            'asset_id' => $this->asset_id,
            'tenant_name' => $this->tenant_name,
            'filename' => Storage::disk('s3')->url($this->filename),
            'og_filename' => $this->og_filename,
            'address' => $this->address,
            'gla' => $this->gla,
            'gla_display' => $this->gla." sq ft",
            'start_date' => $this->start_date?$this->start_date->format('m/d/Y'):null,
            'end_date' => $this->end_date?$this->end_date->format('m/d/Y'):null,
            'rent_per_sqft' => $this->rent_per_sqft,
            'extracted_data' => $this->extracted_data,
            'status' => $this->status,
        ];
    }
}
