<?php

namespace App\Rules;

use App\Models\FileUpload;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class UniqueFileName implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $file_uploads = FileUpload::where('original_name', $value->getClientOriginalName())
            ->where('user_id', auth()->user()->id)
            ->count();

        if ($file_uploads > 0) {
            $fail('This file already exists.');
        }
    }
}
