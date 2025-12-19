<?php

use App\Http\Controllers\PuppyController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [PuppyController::class, 'index'])
    ->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::patch('puppies/{puppy}/like', [PuppyController::class, 'like'])
        ->name('puppies.like');

    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::post('puppies', [PuppyController::class, 'store'])
        ->name('puppies.store');

    Route::delete('puppies/{puppy}', [PuppyController::class, 'destroy'])
        ->name('puppies.destroy');
});

require __DIR__.'/settings.php';
