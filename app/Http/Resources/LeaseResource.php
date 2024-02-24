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
            'status_progress' => ($this->status_progress && $this->status == 'Processing' ? $this->status_progress."%" : null),
            'status_msg' => $this->status_msg,
            'monthly_base_rent' => $this->getMonthlyBaseRent(),
            'is_archived' => ($this->deleted_at?true:false),
            'is_deleting' => ($this->status == 'Deleting'),
        ];
    }

    private function getMonthlyBaseRent(): array
    {
        $monthly_base_rent = [];

        if (isset($this->extracted_data['monthly_base_rent'])) {

            foreach($this->extracted_data['monthly_base_rent'] as $key => $value) {
                $monthly_base_rent[$key] = [
                    'start_date' => Carbon::parse($value['start_date'])->format('m/d/Y'),
                    'end_date' => Carbon::parse($value['end_date'])->format('m/d/Y'),
                    'amount_total' => $value['amount_total'],
                    'amount_per_square_foot' => $value['amount_per_square_foot'],
                ];
            }
        }
        return $monthly_base_rent;
    }
}
