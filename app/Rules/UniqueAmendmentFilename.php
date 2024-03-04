<?php

namespace App\Rules;

use App\Models\Document;
use App\Models\File;
use App\Models\Lease;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class UniqueAmendmentFilename implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $document = Document::where('name', $value->getClientOriginalName())
            ->where('asset_id', request()->lease->asset_id)
            ->withTrashed()
            ->first();

        if ( $document ) {
            $error_msg = 'This amendment document already exists'.($document->trashed() ? ' but is archived' : '')."!";
            $fail($error_msg);
        }
    }
}
