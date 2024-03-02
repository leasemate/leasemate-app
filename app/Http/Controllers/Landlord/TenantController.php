<?php

namespace App\Http\Controllers\Landlord;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\Tenant;
use Illuminate\Support\Facades\DB;
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

    public function store(RegisterRequest $request)
    {
        try {

            $tenant = Tenant::create($request->validated());

            $tenant->createDomain(['domain'=>$request->domain]);

            $tenant->password = null;
            $tenant->save();

            return redirect()->route('tenants');

        } catch (\Exception $e) {

            return back()->with('error', 'An error occurred while registering your account. Please try again. '.$e->getMessage());

        }
    }

    public function destroy(Tenant $tenant)
    {
        try {

            $tenant->users->each->delete();

            $tenant->delete();

            Storage::disk('s3')->deleteDirectory($tenant->id);

            return redirect()->route('tenants');

        } catch( \Exception $e) {
            return back()->with('error', $e->getMessage());
        }
    }

}
