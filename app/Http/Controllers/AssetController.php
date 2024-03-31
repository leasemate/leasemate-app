<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAssetPhotoRequest;
use App\Http\Requests\StoreAssetRequest;
use App\Http\Requests\UpdateAssetRequest;
use App\Http\Resources\AssetResource;
use App\Http\Resources\LeaseResource;
use App\Http\Resources\UserAssetResource;
use App\Models\Asset;
use App\Models\Lease;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

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

            $asset = auth()->user()->asset()->create($this->getAssetFields($request));

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

    public function photoUpload(StoreAssetPhotoRequest $request)
    {
        $storedName = $request
            ->file('asset_photo')
            ->store(tenant('id').'/asset_photos', ['visibility' => 'public']);

        return response()->json([
            'success' => 1,
            'asset_photo_path' => $storedName,
            'photo_filename' => $request->file('asset_photo')->getClientOriginalName(),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Asset $asset)
    {

        $leases = Lease::with([
                'lease_document' => function ($query) {
                    $query->withTrashed();
                },
            ])
            ->current()
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

    public function loadPhoto(Asset $asset)
    {
        $response = Http::get(Storage::url($asset->asset_photo));

        // Return the image as a Blob
        return response($response->body(), 200, [
            'Content-Type' => $response->header('Content-Type'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAssetRequest $request, Asset $asset)
    {
        try {
            DB::beginTransaction();

            if(! $request->asset_photo || ($request?->asset_photo !== $asset->asset_photo)) {
                $asset->deletePhoto();
            }

            $asset->update($this->getAssetFields($request));

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
        $asset->forceDelete();
        return redirect()->route('assets.index');
    }

    private function getAssetFields($request): array
    {
        return $request->safe()->only(
            'name',
            'address',
            'gross_leasable_area',
            'asset_photo',
            'photo_filename'
        );
    }

}
