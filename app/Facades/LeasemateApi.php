<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

/**
 *
 * @method static \Illuminate\Http\Client\Response poke()
 * @method static \Illuminate\Http\Client\Response chat(string $chat_uuid, string $message)
 * @method static \Illuminate\Http\Client\Response registerTenant()
 * @method static \Illuminate\Http\Client\Response updateTenant(int $tenant_id)
 * @method static \Illuminate\Http\Client\Response registerAsset(\App\Models\Asset $asset)
 * @method static \Illuminate\Http\Client\Response updateAsset(\App\Models\Asset $asset)
 * @method static \Illuminate\Http\Client\Response deleteAsset(\App\Models\Asset $asset)
 * @method static \Illuminate\Http\Client\Response registerUser(\App\Models\User $user)
 * @method static \Illuminate\Http\Client\Response updateUser(\App\Models\User $user)
 * @method static \Illuminate\Http\Client\Response deleteUser(\App\Models\User $user)
 *
 */

class LeasemateApi extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'leasemate-api';
    }
}
