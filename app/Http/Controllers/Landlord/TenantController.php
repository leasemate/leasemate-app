<?php

namespace App\Http\Controllers\Landlord;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterTenantRequest;
use App\Models\Tenant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TenantController extends Controller
{
    public function index()
    {
        return inertia('Landlord/Tenant/Index', [
            'tenants' => Tenant::with('domains')->latest()->get(),
        ]);
    }

    public function create()
    {
        return inertia('Landlord/Tenant/Create');
    }

    public function store(RegisterTenantRequest $request)
    {
        $tenant = Tenant::create($request->validated());

        $tenant->createDomain(['domain'=>$request->domain]);

        $tenant->password = null;
        $tenant->save();

        return redirect()->route('tenants', $page.props.tenant_domain);
    }

    public function destroy(Tenant $tenant)
    {

        $tenant->delete();

        return redirect()->route('tenants', $page.props.tenant_domain);
    }

}
