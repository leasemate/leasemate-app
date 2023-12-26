<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLeaseRequest;
use App\Http\Requests\UpdateLeaseRequest;
use App\Models\Asset;
use App\Models\Lease;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class LeaseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLeaseRequest $request)
    {
        try {

            if ($request->hasFile('lease_document')) {

                $lease_document = $request->file('lease_document');

                $disk = 's3';
                $storedName = $lease_document->store(tenant('domain')."/".auth()->user()->id, ['disk'=>$disk, 'visibility'=>'public']);

                $asset = Asset::find($request->asset_id);

                $lease = $asset->leases()->create([
                    'user_id' => auth()->user()->id,
                    'tenant_name'=>$lease_document->getClientOriginalName(),
                ])->documents()->create([
                    'uuid' => (string) Str::uuid(),
                    'collection_name' => 'lease_documents',
                    'name' => $lease_document->getClientOriginalName(),
                    'file_name' => $storedName,
                    'mime_type' => $lease_document->getMimeType(),
                    'disk' => $disk, // 'public
                    'size' => $lease_document->getSize(),
                    'extension' => $lease_document->getClientOriginalExtension(),
                ]);

                //To-do:
                //send API request with lease data to REAI API backend.

            }

        } catch(\Exception $e) {
            Log::error($e->getMessage());
            Log::error($e->getTraceAsString());

            return response()->json(['errors' => $e->getMessage()], 422);
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(Lease $lease)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Lease $lease)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLeaseRequest $request, Lease $lease)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lease $lease)
    {
        //
    }
}
