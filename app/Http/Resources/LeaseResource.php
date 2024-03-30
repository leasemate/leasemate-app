<?php

namespace App\Http\Resources;

use Carbon\Carbon;
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
//dd($this->amendments);
//        dd($this->whenLoaded('current_lease'));
        return [
            'id' => $this->id,
            'parent_id' => $this->parent_id,
            'asset_id' => $this->asset_id,
            'expired' => $this->expired,
            'tenant' => $this->tenant,
            'landlord' => $this->landlord,
            'premise_address' => $this->premise_address,
            'building_address' => $this->building_address,
            'execution_date' => $this->execution_date ? $this->execution_date->format('m/d/Y') : null,
            'commencement_date' => $this->commencement_date ? $this->commencement_date->format('m/d/Y') : null,
            'expiration_date' => $this->expiration_date ? $this->expiration_date->format('m/d/Y') : null,
            'start_date' => $this->start_date ? $this->start_date->format('m/d/Y') : null,
            'end_date' => $this->end_date ? $this->end_date->format('m/d/Y') : null,
            'rentable_sqft' => $this->rentable_sqft ?? null,
            'rent_per_sqft' => $this->rent_per_sqft ?? null,
            'term' => $this->term ?? null,
            'abatement' => $this->abatement ?? null,
            'pro_rata_share' => $this->pro_rata_share ? "{$this->pro_rata_share}%" : null,
            'security_deposit' => $this->security_deposit ?? null,
            'rent_schedule' => $this->getMonthlyBaseRent(),
            'is_archived' => $this->deleted_at ? true : false,
            'lease_document' => new DocumentResource($this->whenLoaded('lease_document')),
            $this->mergeWhen($this->relationLoaded('current_lease') && $this->current_lease !== null, [
                'current_lease' => new LeaseResource($this->current_lease),
            ]),
            'amendments' => LeaseResource::collection($this->whenLoaded('amendments')),
            'lease_detail' => new LeaseDetailResource($this->whenLoaded('lease_detail')),
        ];
    }

    private function getMonthlyBaseRent(): array
    {
        $monthly_base_rent = [];

        if ($this->rent_schedule) {

            foreach ($this->rent_schedule as $key => $value) {
                if (!is_numeric($key)) continue;

                $monthly_base_rent[$key] = [
                    'current' => $value['current'] ?? false,
                    'start_date' => $value['start_date'] ? Carbon::parse($value['start_date'])->format('m/d/Y') : null,
                    'end_date' => $value['end_date'] ? Carbon::parse($value['end_date'])->format('m/d/Y') : null,
                    'amount_total' => $value['monthly_base_rent'] ?? null,
                    'amount_per_square_foot' => $value['rent_per_sqft'] ?? null,
                ];
            }
        }

        return $monthly_base_rent;
    }
}
