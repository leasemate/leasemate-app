<?php

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\Tenant;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;
use Inertia\Response;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthTenantController extends Controller
{
    /**
     * Display the login view.
     */
    public function create()
    {
        return Inertia::render('Tenant/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request)
    {

        try {

            $request->authenticate();
            $user = auth('central')->user();

            if(is_null($user->global_id)) {

                return redirect()->route('tenants');

            } else {

                $signedUrl = URL::temporarySignedRoute(
                    'tenant.force.login',
                    now()->addMinutes(1),
                    ['email' => $user->email],
                    false
                );

                $redirect = collect([
                    URL::formatScheme(),
                    $user->tenants->first()->domain,
                    $signedUrl])->implode('');

                $this->logout($request);

                return Inertia::location($redirect);

            }

        } catch (\Exception $e) {

            $this->logout($request);

            return redirect()->route('login')->with('error', $e->getMessage());
        }
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $this->logout($request);

        return redirect('/');
    }

    protected function logout($request): void
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();
    }
}
