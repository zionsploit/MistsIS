<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\ESportsEventsController;
use App\Http\Controllers\ESportsOfficerController;
use App\Http\Controllers\SocioCulturalController;
use App\Http\Controllers\SocioCulturalOfficerController;
use Inertia\Inertia;

Route::post('/register-admin', [AccountController::class, 'create']);
Route::post('/login', [AccountController::class, 'login']);

Route::get('/', function () {
    return Inertia::render('MainPage/index');
});

Route::get('/login', function () {
    return Inertia::render('Login');
});

Route::get('/register-admin', function () {
    return Inertia::render('Register');
});

Route::prefix('admin')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Admin/index');
    });

    Route::get('/announcement', [AnnouncementController::class, 'index'])->name('announcement');
    Route::post('/add-announcement', [AnnouncementController::class, 'create']);
    Route::post('/update-announcement', [AnnouncementController::class, 'update']);
    Route::post('/delete-announcement', [AnnouncementController::class, 'destroy']);

    Route::prefix('/socio-cultural')->group(function () {
        Route::get('/events', [SocioCulturalController::class, 'getAllEvents'])->name('socio-events');
        Route::post('/events', [SocioCulturalController::class, 'create']);
        Route::post('/update-events', [SocioCulturalController::class, 'update']);
        Route::post('/remove-events', [SocioCulturalController::class, 'destroy']);

        Route::get('/officers', [SocioCulturalOfficerController::class, 'index'])->name('socio-officers');
        Route::post('/add-officers', [SocioCulturalOfficerController::class, 'create']);
        Route::post('/update-officer', [SocioCulturalOfficerController::class, 'update']);
        Route::post('/delete-officer', [SocioCulturalOfficerController::class, 'destroy']);
    });

    Route::prefix('/e-sports')->group(function () {
        Route::get('/events', [ESportsEventsController::class, 'index'])->name('e-sports-events');
        Route::post('/add-events', [ESportsEventsController::class, 'create']);
        Route::post('/update-event', [ESportsEventsController::class, 'update']);
        Route::post('/delete-event', [ESportsEventsController::class, 'destroy']);

        Route::get('/officials', [ESportsOfficerController::class, 'index'])->name('e-sports-officer');
        Route::post('/add-officer', [ESportsOfficerController::class, 'create']);
        Route::post('/update-officer', [ESportsOfficerController::class, 'update']);
        Route::post('/delete-officer', [ESportsOfficerController::class, 'destroy']);
    });
});


Route::prefix('api')->group(function () {
    Route::get('/get-esports-event', [ESportsEventsController::class, 'getEvent']);
    Route::get('/get-sociocultural-event', [SocioCulturalController::class, 'getEvent']);
    Route::get('/get-announcement', [AnnouncementController::class, 'getAnnouncement']);
});

// require __DIR__.'/auth.php';
