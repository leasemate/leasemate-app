<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class Asset extends Model
{
    use HasFactory;
    use SoftDeletes;

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
        $builder = $this->hasMany(Lease::class);
        if (request()->has('archived') && request()->get('archived') == 1) {
            return $builder->onlyTrashed();
        }

        return $builder;
    }

    public function deletePhoto()
    {
        if ($this->asset_photo) {
            Storage::delete($this->asset_photo);
        }
    }
}
