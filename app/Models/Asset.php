<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Asset extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function asset_mgr()
    {
        return $this->belongsTo(User::class, 'asset_mgr_id');
    }

    public function property_mgr()
    {
        return $this->belongsTo(User::class, 'property_mgr_id');
    }

    public function leasing_agent()
    {
        return $this->belongsTo(User::class, 'leasing_agent_id');
    }

}
