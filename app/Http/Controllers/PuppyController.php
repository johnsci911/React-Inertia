<?php

namespace App\Http\Controllers;

use App\Http\Resources\PuppyResource;
use App\Models\Puppy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PuppyController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->search;

        return Inertia::render('puppies/index', [
            'puppies' => PuppyResource::collection(
                Puppy::query()
                    ->when($search, function ($query, $search) {
                        $query
                            ->where('name', 'like', '%' . $search . '%')
                            ->orWhere('trait', 'like', '%' . $search . '%');
                    })
                    ->with(['user', 'likedBy'])
                    ->paginate(9)
                    ->withQueryString()
            ),
            'filters' => [
                'search' => $search,
            ],
        ]);
    }

    public function store(Request $request)
    {
        // Validate the data
        $request->validate([
            'name' => 'required|string|max:255',
            'trait' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpg,jpeg,png,svg|max:5120',
        ]);

        $image_url = null;

        // Store the uploaded image
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('puppes' , 'public');
            if (!$path) {
                return back()->withErrors(['image' => 'Could not upload image']);
            }
            $image_url = Storage::url($path);
        }

        dd($image_url);

        // Create new Puppy instance attached to the authenticated user
        // Return to the same page with a success message
    }

    public function like(Request $request, Puppy $puppy)
    {
        sleep(2);

        $puppy->likedBy()->toggle($request->user()->id);
        return back();
    }
}
