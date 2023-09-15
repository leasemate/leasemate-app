<?php

namespace App\Jobs;

use App\Facades\ReaiProcessor;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessFile implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(private $file)
    {

        $this->onQueue('file-processor');
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {

        $resp = ReaiProcessor::processFile($this->file);

        dd($resp);

    }
}
