<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::prefix('dashboard')->group(function () {
        Route::prefix('categories')->group(function () {
        });
    });
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
