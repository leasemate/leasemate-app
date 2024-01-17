<?php

namespace App\Rules;

use App\Models\File;
use App\Models\Lease;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class UniqueLeaseFilename implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $lease_uploads = Lease::where('og_filename', $value->getClientOriginalName())
            ->where('asset_id', request()->asset->id)
            ->count();

        if ($lease_uploads > 0) {
            $fail('This lease already exists!');
        }
    }
}
