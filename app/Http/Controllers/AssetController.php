<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAssetRequest;
use App\Http\Requests\UpdateAssetRequest;
use App\Http\Resources\AssetResource;
use App\Http\Resources\LeaseResource;
use App\Http\Resources\UserAssetResource;
use App\Models\Asset;
use App\Models\Lease;
use Illuminate\Support\Facades\DB;

class AssetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia()->render('Assets/Index', [
            'assets' => AssetResource::collection(Asset::latest()->get()),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia()->render('Assets/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAssetRequest $request)
    {
        try {

            DB::beginTransaction();

            $asset = auth()->user()->asset()->create($request->safe()->only('name', 'address', 'gross_leasable_area'));

            $asset->associates()->attach(collect($request->get('users'))->pluck('id'));

            DB::commit();

            session()->flash('success', 'Asset created successfully.');

            return redirect()->route('assets.show', $asset);

        } catch (\Exception $e) {
            DB::rollBack();
            session()->flash('error', $e->getMessage());
            return redirect()->back()->withInput();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Asset $asset)
    {

        $leases = Lease::with([
            'lease_document' => function($query) {
                $query->withTrashed();
            },
            ])
            ->where('asset_id', $asset->id)
            ->orderBy('created_at', 'desc')
            ->withTrashed()
            ->paginate(5);

        return inertia()->render('Assets/Show', [
            'asset' => new AssetResource($asset),
            'associates' => UserAssetResource::collection($asset->associates),
            'leases' => LeaseResource::collection($leases),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Asset $asset)
    {
        return inertia()->render('Assets/Edit', [
            'asset' => new AssetResource($asset),
            'associates' => UserAssetResource::collection($asset->associates),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAssetRequest $request, Asset $asset)
    {
        try {

            DB::beginTransaction();

            $asset->update($request->safe()->only('name', 'address', 'gross_leasable_area'));

            $asset->associates()->sync(collect($request->get('users'))->pluck('id'));

            DB::commit();

            session()->flash('success', 'Asset updated successfully.');

            return redirect()->route('assets.show', $asset);

        } catch (\Exception $e) {
            DB::rollBack();
            session()->flash('error', $e->getMessage());
            return redirect()->back()->withInput();
        }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Asset $asset)
    {
        //
    }
}
