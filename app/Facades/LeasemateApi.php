<?php

namespace App\Facades;

use App\Models\Asset;
use App\Models\Lease;
use App\Models\Tenant;
use App\Models\Document;
use Illuminate\Support\Facades\Facade;

/**
 *
 * @method static \Illuminate\Http\Client\Response poke()
 * @method static \Illuminate\Http\Client\Response chat(string $chat_uuid, string $message)
 * @method static \Illuminate\Http\Client\Response registerTenant(Tenant $tenant)
 * @method static \Illuminate\Http\Client\Response updateTenant(Tenant $tenant)
 * @method static \Illuminate\Http\Client\Response deleteTenant(Tenant $tenant)
 *
 * @method static \Illuminate\Http\Client\Response registerAsset(Asset $asset)
 * @method static \Illuminate\Http\Client\Response updateAsset(Asset $asset)
 * @method static \Illuminate\Http\Client\Response deleteAsset(Asset $asset)
 *
 * @method static \Illuminate\Http\Client\Response registerDocument(Asset $asset, Lease $lease, string $storedName, string $classification = 'lease', Document $document = null)
 * @method static \Illuminate\Http\Client\Response restoreDocument(Lease $lease)
 * @method static \Illuminate\Http\Client\Response archiveDocument(Lease $asset)
 * @method static \Illuminate\Http\Client\Response deleteDocument(Lease $asset)
 *
 */

class LeasemateApi extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'leasemate-api';
    }
}
