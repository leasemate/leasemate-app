<?php

namespace App\Rules;

use App\Models\TeamInvitation;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class EmailHasInvitation implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $invitation = TeamInvitation::where('email', $value)->first();
        if( ! $invitation) {
            $fail('This email does not have an invitation.');
        }
    }
}
