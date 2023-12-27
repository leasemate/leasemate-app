<?php

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterTenantRequest;
use App\Models\Tenant;
use Illuminate\Http\Request;
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

        $tenant = Tenant::create($request->validated());

        $tenant->createDomain(['domain'=>$request->domain]);

        $tenant->password = null;
        $tenant->save();

        return back()->with('recentlyRegistered', true);

//        return Inertia::location(tenant_route($tenant->domains->first()->domain, 'login'));
    }
}
