<?php

declare(strict_types=1);

use App\Events\FileStatusUpdate;
use App\Http\Controllers\AssetController;
use App\Http\Controllers\AssetLeaseController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewUserPasswordController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\ChatMessageController;
use App\Http\Controllers\FilesController;
use App\Http\Controllers\LeaseController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Models\User;
use App\Notifications\FileProcessingUpdate;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use routes\PasswordController;

/*
|--------------------------------------------------------------------------
| Tenant Routes
|--------------------------------------------------------------------------
|
| Here you can register the tenant routes for your application.
| These routes are loaded by the TenantRouteServiceProvider.
|
| Feel free to customize them however you want. Good luck!
|
*/

Route::group([
    'middleware' => [
        'web',
        'guest',
        'tenant',
    ]
], function () {

    Route::get('/', function () {
        return redirect('login');
    })->name('home');

    Route::get('force-login', [AuthenticatedSessionController::class, 'forceLogin'])
        ->name('tenant.force.login');

    Route::get('login', [AuthenticatedSessionController::class, 'create'])
        ->name('tenant.login');

    Route::post('login', [AuthenticatedSessionController::class, 'store'])
        ->name('tenant.login.store');
});

Route::group([
    'middleware' => [
        'web',
        'guest',
        'tenant',
    ]
], function () {

//    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
//        ->name('password.request');
//
//    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
//        ->name('password.email');
//
//    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
//        ->name('password.reset');
//
//    Route::post('reset-password', [NewPasswordController::class, 'store'])
//        ->name('password.store');
//
    Route::get('create-password/{token}', [NewUserPasswordController::class, 'create'])
        ->name('new-user-password.create');

    Route::post('create-password', [NewUserPasswordController::class, 'store'])
        ->name('new-user-password.store');

});

Route::middleware([
    'web',
    'auth',
    config('jetstream.auth_session'),
    'tenant',
])->group(function () {

    Route::get('verify-email', EmailVerificationPromptController::class)
        ->name('verification.notice');

    Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
        ->middleware(['signed:relative', 'throttle:6,1'])
        ->name('verification.verify');

    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
        ->middleware('throttle:6,1')
        ->name('verification.send');

    Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
        ->name('password.confirm');

    Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');

});

Route::middleware([
    'web',
    'auth',
    config('jetstream.auth_session'),
    'tenant',
    'verified',
])->group(function () {

    Route::get('/notify', function() {
        $user = User::find(1);

//        dd($user->broadcastChannel());
//        dump($user);
        $file = \App\Models\File::find(1);
//        dd($file);
//        $file = new \App\Models\File();

        event(new FileStatusUpdate($user->id, $file));

        $user->notify(new FileProcessingUpdate($file));

        return 'done';
    });

    Route::get('/', function () {
        return redirect('dashboard');
    })->name('dashboard');

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');


    Route::get('/users/search', [UserController::class, 'searchUsers'])->name('users.search');
    Route::get('/users/{user}/resendInvitation', [UserController::class, 'resendInvitation'])->name('users.resendInvitation');
    Route::resource('users', UserController::class);


    Route::resource('assets', AssetController::class);
    Route::resource('assets.leases', AssetLeaseController::class)->scoped();
//    Route::resource('assets.leases.chats', AssetLeaseController::class);

    Route::scopeBindings()->group(function () {
        Route::post('/assets/{asset}/leases/{lease}/archive', [AssetLeaseController::class, 'archive'])->name('assets.leases.archive');
        Route::post('/assets/{asset}/leases/{lease}/restore', [AssetLeaseController::class, 'restore'])->withTrashed()->name('assets.leases.restore');

        Route::get('/assets/{asset}/leases/{lease}/chats/{chat}', [AssetLeaseController::class, 'show'])->name('assets.leases.chats.show');
        Route::post('/assets/{asset}/leases/{lease}/chats/{chat?}', [AssetLeaseController::class, 'sendMessage'])->name('assets.leases.chats.send-message');
        Route::delete('/assets/{asset}/leases/{lease}/chats/{chat}', [AssetLeaseController::class, 'destroyChat'])->name('assets.leases.chats.destroy-chat');
    });

    Route::resource('roles', RoleController::class);

    Route::resource('files', FilesController::class);

    Route::post('/files/{file}/restore', [FilesController::class, 'restore'])->name('files.restore')->withTrashed();
    Route::post('/files/{file}/prune', [FilesController::class, 'prune'])->name('files.prune')->withTrashed();


    Route::get('/chats', [ChatController::class, 'index'])->name('chats.index');
    Route::get('/chats/{chat}', [ChatController::class, 'show'])->name('chats.show');
    Route::post('/chats/{chat?}', [ChatController::class, 'store'])->name('chats.store');
    Route::delete('/chats/{chat}', [ChatController::class, 'destroy'])->name('chats.destroy');

    Route::resource('/chats/{chat}/messages', ChatMessageController::class);

    Route::resource('notifications', NotificationController::class);
    Route::post('notifications/mark-as-read/{notification}', [NotificationController::class, 'markAsRead'])->name('notifications.mark-as-read');

    Route::post('/refresh-token', function() {

        if(auth() && auth()->user()) {
            auth()->user()->jwt_token = JWTAuth::fromUser(auth()->user());
            auth()->user()->save();
            return response()->json(['token' => auth()->user()->jwt_token]);
        }
    })->name('refresh-token');

});



