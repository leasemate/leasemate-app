<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\Tenant;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function create(Request $request)
    {
        return Inertia::render('Auth/Register', [
            'recentlyRegistered' => session('recentlyRegistered'),
        ]);
    }

    public function store(RegisterRequest $request)
    {
        try {

            $tenant = Tenant::create($request->validated());
            $tenant->createDomain(['domain'=>$request->domain]);
            $tenant->password = null;
            $tenant->save();

            return back()->with('recentlyRegistered', true);

        } catch (\Exception $e) {

            return back()->with('error', $e->getMessage().' An error occurred while registering your account. Please try again.');
        }
    }
}
