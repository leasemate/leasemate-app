<?php

declare(strict_types=1);

use App\Events\LeaseProcessingUpdate;
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
use App\Http\Controllers\LeaseAmendmentController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Models\Document;
use App\Models\Lease;
use App\Models\User;
use App\Notifications\DocumentCompleteNotification;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

    Route::get('tenant-login', [AuthenticatedSessionController::class, 'forceLogin'])
        ->name('tenant.force.login');
});

Route::group([
    'middleware' => [
        'web',
        'guest',
        'tenant',
    ]
], function () {

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

        event(new LeaseProcessingUpdate($user->id, $file));

        $user->notify(new DocumentCompleteNotification($file));

        return 'done';
    });

    Route::get('/', function () {
        return redirect('dashboard');
    })->name('dashboard');

    Route::get('/dashboard', function () {

//        $lease = Lease::with('amendments')->find(8);

//        dd($lease);
//
//        $s3 = "5ce3eb40-dd76-4a83-ba4d-a2285c85d094/leases/1/kec5bGvbInTIWgYZPripKCmZqrDBn1WWSMu8z2lC.pdf";
//        $document = Document::where('file_name', $s3)->with('documentable')->first();
//
//        dd($document);

        return Inertia::render('Dashboard');
    })->name('dashboard');


    Route::get('/users/search', [UserController::class, 'searchUsers'])->name('users.search');
    Route::get('/users/{user}/resendInvitation', [UserController::class, 'resendInvitation'])->name('users.resendInvitation');
    Route::resource('users', UserController::class);


    Route::resource('assets', AssetController::class);

    Route::post('/assets/photo-upload', [AssetController::class, 'photoUpload'])->name('assets.photo-upload');
    Route::get('/assets/{asset}/load-photo', [AssetController::class, 'loadPhoto'])->name('assets.load-photo');

    Route::resource('assets.leases', AssetLeaseController::class)->scoped();
    Route::resource('leases.amendments', LeaseAmendmentController::class)->scoped();

    Route::scopeBindings()->group(function () {
        Route::post('/assets/{asset}/leases/{lease}/archive', [AssetLeaseController::class, 'archive'])->name('assets.leases.archive');
        Route::post('/assets/{asset}/leases/{lease}/restore', [AssetLeaseController::class, 'restore'])->withTrashed()->name('assets.leases.restore');
        Route::delete('/assets/{asset}/leases/{lease}/destroy', [AssetLeaseController::class, 'destroy'])->withTrashed()->name('assets.leases.destroy');

        Route::post('/assets/{asset}/leases/{lease}/store-amendment', [AssetLeaseController::class, 'storeAmendment'])->name('assets.leases.store-amendment');

//        Route::get('/assets/{asset}/leases/{lease}/chats', [ChatController::class, 'index'])->name('assets.leases.chats.index');
        Route::get('/assets/{asset}/leases/{lease}/chats/{chat?}', [ChatController::class, 'index'])->name('assets.leases.chats.index');
        Route::post('/assets/{asset}/leases/{lease}/chats/{chat?}', [ChatController::class, 'store'])->name('assets.leases.chats.store');
        Route::delete('/assets/{asset}/leases/{lease}/chats/{chat}', [ChatController::class, 'destroy'])->name('assets.leases.chats.destroy');
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



