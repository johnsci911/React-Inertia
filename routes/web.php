<?php

use App\Models\Puppy;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Resources\PuppyResource;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'puppies' => PuppyResource::collection(Puppy::all()->load(['user'])),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
