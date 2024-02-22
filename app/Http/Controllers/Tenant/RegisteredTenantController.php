<?php

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterTenantRequest;
use App\Models\Tenant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class RegisteredTenantController extends Controller
{
    public function create(Request $request)
    {
        return Inertia::render('Tenant/Register', [
            'recentlyRegistered' => session('recentlyRegistered'),
        ]);
    }

    public function store(RegisterTenantRequest $request)
    {

        try
        {
            $tenant = Tenant::create($request->validated());

            $tenant->createDomain(['domain'=>$request->domain]);

            $tenant->password = null;
            $tenant->save();

            return back()->with('recentlyRegistered', true);

        } catch (\Exception $e) {

            return back()->with('error', 'An error occurred while registering your account. Please try again.'.$e->getMessage());
        }

//        return Inertia::location(tenant_route($tenant->domains->first()->domain, 'login'));
    }
}
