<?php

namespace App\Traits;

use App\Models\Tenant;
use App\Models\TenantPivot;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

trait HasTenants
{
    public function tenants(): BelongsToMany
    {
        return $this->belongsToMany(Tenant::class, 'tenant_users', 'global_user_id', 'tenant_id', 'global_id')
            ->using(TenantPivot::class);
    }
}
