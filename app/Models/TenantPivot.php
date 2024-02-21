<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class TenantPivot extends Pivot
{

    public $fillable = ['tenant_id', 'global_user_id', 'global_id'];
}
