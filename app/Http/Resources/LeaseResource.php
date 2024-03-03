<?php

namespace App\Http\Resources;

use Carbon\Carbon;
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

        return [
            'id' => $this->id,
            'asset_id' => $this->asset_id,
            'tenant_name' => $this->tenant_name,
            'address' => $this->address,
            'gla' => $this->gla,
            'gla_display' => $this->gla." sq ft",
            'start_date' => $this->start_date?$this->start_date->format('m/d/Y'):null,
            'end_date' => $this->end_date?$this->end_date->format('m/d/Y'):null,
            'rent_per_sqft' => $this->rent_per_sqft,
//            'monthly_base_rent' => $this->getMonthlyBaseRent(),
            'is_archived' => ($this->deleted_at?true:false),
            'lease_document' => new DocumentResource($this->whenLoaded('lease_document')),
        ];
    }

    private function getMonthlyBaseRent(): array
    {
        $monthly_base_rent = [];

        if (isset($this->extracted_data['monthly_base_rent'])) {

            foreach($this->extracted_data['monthly_base_rent'] as $key => $value) {
                $monthly_base_rent[$key] = [
                    'start_date' => $value['start_date'] ? Carbon::parse($value['start_date'])->format('m/d/Y') : null,
                    'end_date' => $value['end_date'] ? Carbon::parse($value['end_date'])->format('m/d/Y') : null,
                    'amount_total' => $value['amount_total']??null,
                    'amount_per_square_foot' => $value['amount_per_square_foot']??null,
                ];
            }
        }
        return $monthly_base_rent;
    }
}
