<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;
use Inertia\Response;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
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

                $this->destroy($request);

                return Inertia::location($redirect);

            }

        } catch (\Exception $e) {

            $this->destroy($request);

            return redirect()->route('login')->with('error', $e->getMessage());
        }
    }

    public function forceLogin(Request $request)
    {
        if (!$request->hasValidSignature(false)) {
            abort(403, 'Invalid login attempt.');
        }

        $user = User::where('email', $request->email)->first();

        $this->createJwtToken($user);

        Auth::login($user);

        return redirect()->intended(RouteServiceProvider::HOME);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return Inertia::location(route('home'));
    }

    protected function createJwtToken(User $user)
    {
        $user->jwt_token = JWTAuth::fromUser($user);
        $user->save();
    }
}
