<?php

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('{tenant_id}.App.Model.User.{id}', function (User $user, $tenant_id, $user_id) {

    if (tenant('id') == $tenant_id && $user->id == $user_id) {
        return true;
    }
    return false;
});

Broadcast::channel('tenant-global-channel.{tenant_id}', function ($user, $tenant_id) {

    if (tenant('id') == $tenant_id) {
        return true;
    }
    return false;
});
