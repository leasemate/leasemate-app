<?php

namespace App\Observers;

use App\Facades\LeasemateApi;
use App\Models\Lease;

class LeaseObserver
{
    /**
     * Handle the Lease "created" event.
     */
    public function created(Lease $lease): void
    {
        //
    }

    /**
     * Handle the Lease "updated" event.
     */
    public function updated(Lease $lease): void
    {
        //
    }

    /**
     * Handle the Lease "deleted" event.
     */
    public function deleted(Lease $lease): void
    {
        LeasemateApi::archiveDocument($lease);
    }

    /**
     * Handle the Lease "restored" event.
     */
    public function restored(Lease $lease): void
    {
        LeasemateApi::restoreDocument($lease);
    }

    /**
     * Handle the Lease "force deleted" event.
     */
    public function forceDeleted(Lease $lease): void
    {
        //
    }
}
