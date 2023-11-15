<?php

use App\Facades\ReaiProcessor;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\ChatMessageController;
use App\Http\Controllers\FilesController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\ProfileController;
use App\Models\File;
use App\Notifications\FileProcessingUpdate;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
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


//Route::middleware(['auth', 'verified'])->group(function () {
Route::middleware(['auth'])->group(function () {


    Route::get('/', function () {
        return redirect()->route('dashboard');

//        return Inertia::render('Dashboard', [
//            'canLogin' => Route::has('login'),
//            'canRegister' => Route::has('register'),
//            'laravelVersion' => Application::VERSION,
//            'phpVersion' => PHP_VERSION,
//        ]);
    });
//

    Route::get('/test-notify', function() {

        $file = File::find(85);

        $file->user->notify(new FileProcessingUpdate($file));

//        $file->user->notify();
    });


    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

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

    Route::get('/flowise-test', function () {
        return Inertia::render('FlowiseTest');
    });

    Route::get('/node-websocket', function () {
        return Inertia::render('FlowiseTest');
    });

});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
