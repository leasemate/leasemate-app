<?php

namespace App\Http\Controllers\Landlord;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterTenantRequest;
use App\Models\Tenant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;

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

    public function forceLogin(Tenant $tenant)
    {

        $signedUrl = URL::temporarySignedRoute(
            'tenant.force.login',
            now()->addMinutes(1),
            ['email' => $tenant->users->first()->email],
            false
        );

        $redirect = collect([
            URL::formatScheme(),
            $tenant->domain,
            $signedUrl])->implode('');

        return Inertia::location($redirect);
    }

    public function store(RegisterTenantRequest $request)
    {
        $tenant = Tenant::create($request->validated());

        $tenant->createDomain(['domain'=>$request->domain]);

        $tenant->password = null;
        $tenant->save();

        return redirect()->route('tenants');
    }

    public function destroy(Tenant $tenant)
    {
        $tenant->users->each->delete();

        $tenant->delete();

        Storage::disk('s3')->deleteDirectory($tenant->id);

        return redirect()->route('tenants');
    }

}
