<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LeaseResource extends JsonResource
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
            'tenant_name' => $this->tenant_name,
            'suite_number' => $this->suite_number,
            'gross_leasable_area' => $this->gross_leasable_area,
            'gross_leasable_area_display' => number_format($this->gross_leasable_area)." sq ft",
            'start_date' => $this->start_date?$this->start_date->format('m/d/Y'):null,
            'end_date' => $this->end_date?$this->end_date->format('m/d/Y'):null,
            'rent_per_sqft' => $this->rent_per_sqft,
            'abstract_data' => $this->abstract_data,
            'status' => $this->status,
        ];
    }
}
