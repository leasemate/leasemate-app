<?php

namespace App\Jobs;

use App\Models\Tenant;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class CreateTenantS3Bucket implements ShouldQueue
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



//        $bucket = $this->tenant->s3->createBucket([
//            'Bucket' => $this->tenant->domain,
//            'ACL' => 'private',
//        ]);
//
//        $this->tenant->s3->waitUntil('BucketExists', [
//            'Bucket' => $this->tenant->domain,
//        ]);
//
//        $this->tenant->s3->putBucketEncryption([
//            'Bucket' => $this->tenant->domain,
//            'ServerSideEncryptionConfiguration' => [
//                'Rules' => [
//                    [
//                        'ApplyServerSideEncryptionByDefault' => [
//                            'SSEAlgorithm' => 'AES256',
//                        ],
//                    ],
//                ],
//            ],
//        ]);
//
//        $this->tenant->s3->putBucketVersioning([
//            'Bucket' => $this->tenant->domain,
//            'VersioningConfiguration' => [
//                'Status' => 'Enabled',
//            ],
//        ]);
//
//        $this->tenant->s3->putBucketLifecycleConfiguration([
//            'Bucket' => $this->tenant->domain,
//            'LifecycleConfiguration' => [
//                'Rules' => [
//                    [
//                        'ID' => 'Delete old versions',
//                        'Status' => 'Enabled',
//                        'Prefix' => '',
//                        'NoncurrentVersionExpiration' => [
//                            'NoncurrentDays' => 30,
//                        ],
//                    ],
//                ],
//            ],
//        ]);
    }
}
