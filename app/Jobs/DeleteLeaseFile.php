<?php

namespace App\Jobs;

use App\Events\LeaseFileDeleted;
use App\Models\Lease;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class DeleteLeaseFile implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(public Lease $lease)
    {
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
        ]);

        $lease_data['file_name'] = $this->lease->lease_document_trashed->name;

        Log::info('force delete lease');
        $this->lease->forceDelete();

        \Log::info('Fire event LeaseFileDeleted', $lease_data);
        event(new LeaseFileDeleted($lease_data));
    }
}
