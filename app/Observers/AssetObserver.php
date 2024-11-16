<?php

namespace App\Observers;

use App\Facades\LeasemateApi;
use App\Models\Asset;
use Exception;

class AssetObserver
{
    /**
     * Handle the Asset "created" event.
     */
    public function created(Asset $asset): void
    {
        if (app()->environment('production')) {
            $response = LeasemateApi::registerAsset($asset);
            if ($response->failed()) {
                throw new Exception("{$response->status()}: {$response->reason()}: API Error: Unable to register asset.");
            }
        }
    }

    /**
     * Handle the Asset "updated" event.
     */
    public function updated(Asset $asset): void
    {

        if (app()->environment('production')) {
            $response = LeasemateApi::updateAsset($asset);
            if ($response->failed()) {
                throw new Exception("{$response->status()}: {$response->reason()}: API Error: Unable to register asset.");
            }
        }
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
        $asset->deletePhoto();

        if (app()->environment('production')) {
            $response = LeasemateApi::deleteAsset($asset);
            if ($response->failed()) {
                throw new Exception("{$response->status()}: {$response->reason()}: API Error: Unable to delete asset.");
            }
        }
    }
}
