<?php

namespace App\Observers;

use App\Facades\LeasemateApi;
use App\Models\Lease;
use Illuminate\Support\Facades\Log;

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
     * Handle the Lease "deleted" event. (Archived)
     */
    public function deleted(Lease $lease): void
    {
        if (! $lease->isForceDeleting()) {
            $lease->lease_document->status = 'Archived';
            $lease->lease_document->save();
            $lease->lease_document->delete();

            $archiveDocument = LeasemateApi::archiveDocument($lease->lease_document);

            Log::info('archiveDocument response: ', [$archiveDocument]);
        }
    }

    /**
     * Handle the Lease "restored" event.
     */
    public function restored(Lease $lease): void
    {
        $lease->lease_document_trashed->restore();
        $lease->lease_document_trashed->status = 'Ready';
        $lease->lease_document_trashed->save();

        $restoreDocument = LeasemateApi::restoreDocument($lease->lease_document);

        \Log::info('restoreDocument', [$restoreDocument]);
    }

    /**
     * Handle the Lease "force deleted" event.
     *
     * Actual file deleted from S3 in DocumentObserver
     */
    public function forceDeleted(Lease $lease): void
    {
        Log::info('lease observer: force delete document');

        $lease_document = $lease->lease_document_trashed;

        $lease_document->forceDelete();

        $deleteDocument = LeasemateApi::deleteDocument($lease_document);

        Log::info('delete doc response..................');
        Log::info($deleteDocument);
    }
}
