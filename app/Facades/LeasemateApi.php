<?php

namespace App\Facades;

use App\Models\Asset;
use App\Models\Document;
use App\Models\Lease;
use App\Models\Tenant;
use Illuminate\Support\Facades\Facade;

/**
 * @method static \Illuminate\Http\Client\Response poke()
 * @method static \Illuminate\Http\Client\Response chat(string $chat_uuid, string $message)
 * @method static \Illuminate\Http\Client\Response registerTenant(Tenant $tenant)
 * @method static \Illuminate\Http\Client\Response updateTenant(Tenant $tenant)
 * @method static \Illuminate\Http\Client\Response deleteTenant(Tenant $tenant)
 * @method static \Illuminate\Http\Client\Response registerAsset(Asset $asset)
 * @method static \Illuminate\Http\Client\Response updateAsset(Asset $asset)
 * @method static \Illuminate\Http\Client\Response deleteAsset(Asset $asset)
 * @method static \Illuminate\Http\Client\Response registerDocument(Asset $asset, Lease $lease, Document $document, string $storedName, string $classification = 'lease')
 * @method static \Illuminate\Http\Client\Response restoreDocument(Document $document)
 * @method static \Illuminate\Http\Client\Response archiveDocument(Document $document)
 * @method static \Illuminate\Http\Client\Response deleteDocument(Document $document)
 */
class LeasemateApi extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'leasemate-api';
    }
}
