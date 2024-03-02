<?php

namespace App\Jobs;

use App\Events\LeaseFileDeleted;
use App\Facades\LeasemateApi;
use App\Models\Lease;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;

class DeleteLeaseFile implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(public Lease $lease)
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        \Log::info('JOB: Deleting lease file', ['lease_id' => $this->lease->id]);

        $lease_data = $this->lease->only([
            'id',
            'user_id',
            'asset_id',
            'og_filename',
        ]);

        if(Storage::disk('s3')->exists($this->lease->filename)) {
            Storage::disk('s3')->delete($this->lease->filename);
        }

        $delete_vectors_response = LeasemateApi::deleteDocument($this->lease);
        \Log::info('deleteFile', ['delete_vectors_response' => $delete_vectors_response]);

        \Log::info($delete_vectors_response->status());

        $this->lease->forceDelete();

        \Log::info('Fire event LeaseFileDeleted');
        event(new LeaseFileDeleted($lease_data));
    }
}
