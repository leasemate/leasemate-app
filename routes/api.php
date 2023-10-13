<?php

use App\Http\Controllers\FileProcessingController;
use App\Http\Controllers\FileUploadController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:api')->post('/file-processing/status-update', [FileProcessingController::class, 'statusUpdate']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
