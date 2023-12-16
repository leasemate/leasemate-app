<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Landlord\TenantController;
use App\Http\Controllers\Tenant\RegisteredTenantController;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Stancl\Tenancy\Middleware\InitializeTenancyByDomain;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => false,
        'canRegister' => true,
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('registration', [RegisteredTenantController::class, 'create'])
    ->name('tenant.registration');

Route::post('registration', [RegisteredTenantController::class, 'store'])
    ->name('tenant.registration.store');

Route::middleware([
    'web',
    'guest'
])->group(function () {

    Route::get('/landlord-login', function () {

        return Inertia::render('Landlord/Login', [
            'canResetPassword' => true,
            'status' => session('status'),
        ]);

    })->name('landlord.login');


    Route::post('/landlord-login', function (LoginRequest $request) {

        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(route('tenants'));

    })->name('landlord.login.store');

});


Route::middleware([
    'web',
    'auth'
])->group(function () {

    Route::get('/tenants', [TenantController::class, 'index'])->name('tenants');
    Route::get('/tenants/create', [TenantController::class, 'create'])->name('tenants.create');
    Route::post('/tenants', [TenantController::class, 'store'])->name('tenants.store');
    Route::delete('/tenants/{tenant}', [TenantController::class, 'destroy'])->name('tenants.destroy');

    Route::post('/landlord-logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('landlord.logout');
});
