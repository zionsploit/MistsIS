<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Login');
});

Route::prefix('admin')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Admin/index');
    });

    Route::get('/announcement', function () {
        return Inertia::render('Admin/Announcement');
    });

    Route::prefix('/socio-cultural')->group(function () {
        Route::get('/events', function () {
            return Inertia::render('Admin/SocioCultural/Events');
        });

        Route::get('/officials', function () {
            return Inertia::render('Admin/SocioCultural/Official');
        });
    });

    Route::prefix('/e-sports')->group(function () {
        Route::get('/events', function() {
            return Inertia::render('Admin/ESports/Events');
        });

        Route::get('/officials', function() {
            return Inertia::render('Admin/ESports/Official');
        });
    });
});

require __DIR__.'/auth.php';
