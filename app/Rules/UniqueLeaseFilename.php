<?php

namespace App\Rules;

use App\Models\Document;
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
        $document = Document::where('name', $value->getClientOriginalName())
            ->where('asset_id', request()->asset->id)
            ->withTrashed()
            ->first();

        if ($document) {
            $error_msg = 'This lease document already exists'.($document->trashed() ? ' but is archived' : '').'!';
            $fail($error_msg);
        }
    }
}
