<?php

use App\Http\Controllers\Tenant\RegisteredTenantController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware('guest')->group(function () {

    Route::get('s3', function () {

        $s3Client = new \Aws\S3\S3Client(config());


    })->name('s3');

    Route::get('register', [RegisteredTenantController::class, 'create'])
                ->name('register');

    Route::post('register', [RegisteredTenantController::class, 'store'])
            ->name('register.store');

});
