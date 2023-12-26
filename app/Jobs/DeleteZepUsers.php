<?php

namespace App\Jobs;

use App\Facades\ZepApi;
use App\Models\Tenant;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Str;

class DeleteZepUsers implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(public Tenant $tenant)
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $zep_users = ZepApi::getAllUsers();

        foreach($zep_users as $zep_user) {
            if(Str::startsWith($zep_user["user_id"], $this->tenant->id)) {
                ZepApi::deleteUser($zep_user["user_id"]);
            }
        }
    }
}
