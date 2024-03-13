<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LeaseDetailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'option_to_extend' => $this->option_to_extend,
            'right_of_first_offer' => $this->right_of_first_offer,
            'right_of_first_refusal' => $this->right_of_first_refusal,
            'tenant_improvement_allowance' => $this->tenant_improvement_allowance,
            'tenant_insurance_requirements' => $this->tenant_insurance_requirements,
            'tenant_maintenance_obligations' => $this->tenant_maintenance_obligations,
            'landlord_maintenance_obligations' => $this->landlord_maintenance_obligations,
            'assignment_subletting' => $this->assignment_subletting,
            'holding_over' => $this->holding_over,
        ];
    }

    private function getMonthlyBaseRent(): array
    {
        $monthly_base_rent = [];

        if ($this->rent_schedule) {

            foreach ($this->rent_schedule as $key => $value) {
                $monthly_base_rent[$key] = [
                    'start_date' => $value['start_date'] ? Carbon::parse($value['start_date'])->format('m/d/Y') : null,
                    'end_date' => $value['end_date'] ? Carbon::parse($value['end_date'])->format('m/d/Y') : null,
                    'amount_total' => $value['amount'] ?? null,
                    'amount_per_square_foot' => $value['amount_per_sq_ft'] ?? null,
                ];
            }
        }

        return $monthly_base_rent;
    }
}
