<?php

namespace App\Jobs;

use App\Facades\ReaiProcessor;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class ProcessFile implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(private $file)
    {
        Log::info('Processing file JOB', ['file' => $file]);
        Log::info('Q: file-processor');

        $this->onQueue('file-processor');
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        Log::info('File to process: '.Storage::path($this->file->stored_name));

        $resp = ReaiProcessor::processFile(Storage::path($this->file->stored_name));

        Log::info('Response from ReaiProcessor', ['response' => $resp]);

//        dd($resp); // Do something with the response

    }
}
