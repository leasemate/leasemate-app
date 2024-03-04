<?php

namespace App\Observers;

use App\Facades\LeasemateApi;
use App\Models\Asset;
use Illuminate\Support\Facades\Auth;

class AssetObserver
{
    /**
     * Handle the Asset "created" event.
     */
    public function created(Asset $asset): void
    {
//        $response = LeasemateApi::registerAsset($asset);
//
//        if ($response->failed()) {
//            throw new \Exception("{$response->status()}: {$response->reason()}: API Error: Unable to register asset.");
//        }
    }

    /**
     * Handle the Asset "updated" event.
     */
    public function updated(Asset $asset): void
    {
        //
    }

    /**
     * Handle the Asset "deleted" event.
     */
    public function deleted(Asset $asset): void
    {
        //
    }

    /**
     * Handle the Asset "restored" event.
     */
    public function restored(Asset $asset): void
    {
        //
    }

    /**
     * Handle the Asset "force deleted" event.
     */
    public function forceDeleted(Asset $asset): void
    {
        //
    }
}
