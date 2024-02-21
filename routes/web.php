<?php

use App\Facades\ZepApi;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\NewUserPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Landlord\TenantController;
use App\Http\Controllers\Tenant\AuthTenantController;
use App\Http\Controllers\Tenant\RegisteredTenantController;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\Tenant;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;
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

Route::middleware([
    'web',
])->group(function() {

    Route::get('/', HomeController::class)->name('home');

//    Route::get('/', function () {
//        return redirect(route('login'));
//    });

//    Route::get('/terms-of-service', function ()  {
//        dd('test');
////        return Inertia::render('TermsOfService');
//    });

    Route::get('registration', [RegisteredTenantController::class, 'create'])
        ->name('registration');

    Route::post('registration', [RegisteredTenantController::class, 'store'])
        ->name('registration.store');

});


Route::middleware([
    'web',
    'guest'
])->group(function () {

    Route::get('login', [AuthTenantController::class, 'create'])->name('login');
    Route::post('login', [AuthTenantController::class, 'store'])->name('login.store');

//    Route::get('/landlord/login', function () {
//
//        return Inertia::render('Landlord/Login', [
//            'canResetPassword' => false,
//            'status' => session('status'),
//        ]);
//
//    })->name('landlord.login');
//
//
//    Route::post('/landlord/login', function (LoginRequest $request) {
//
//        $request->authenticate();
//
//        $request->session()->regenerate();
//
//        return redirect()->intended(route('tenants'));
//
//    })->name('landlord.login.store');


    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
        ->name('password.request');

    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
        ->name('password.email');

    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
        ->name('password.reset');

    Route::post('reset-password', [NewPasswordController::class, 'store'])
        ->name('password.store');

//    Route::get('create-password/{token}', [NewUserPasswordController::class, 'create'])
//        ->name('new-user-password.create');
//
//    Route::post('create-password', [NewUserPasswordController::class, 'store'])
//        ->name('new-user-password.store');

});


Route::middleware([
    'web',
    'auth:central'
])->group(function () {

    Route::get('/tenants', [TenantController::class, 'index'])->name('tenants');
    Route::get('/tenants/create', [TenantController::class, 'create'])->name('tenants.create');
    Route::post('/tenants', [TenantController::class, 'store'])->name('tenants.store');
    Route::delete('/tenants/{tenant}', [TenantController::class, 'destroy'])->name('tenants.destroy');

    Route::post('/landlord-logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('landlord.logout');
});
