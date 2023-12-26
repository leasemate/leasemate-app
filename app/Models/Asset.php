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

    public function associates()
    {
        return $this->belongsToMany(User::class, 'asset_user', 'asset_id', 'user_id')->withTimestamps();
    }

    public function leases()
    {
        return $this->hasMany(Lease::class);
    }

}
