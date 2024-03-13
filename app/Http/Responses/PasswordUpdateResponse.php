<?php

namespace App\Http\Responses;

use Illuminate\Http\Response;
use Inertia\Inertia;
use Laravel\Fortify\Contracts\PasswordUpdateResponse as PasswordUpdateResponseContract;

class PasswordUpdateResponse implements PasswordUpdateResponseContract
{
    public function toResponse($request)
    {
        // Here you can customize the response after a successful password update
        // For example, redirecting with Inertia:
        return $request->wantsJson()
            ? new Response('', 200)
            : Inertia::location(route('dashboard'));
    }
}
