<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Lease extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $guarded = [];

    protected $casts = [
        'start_date' => 'datetime',
        'end_date' => 'datetime',
        'abstract_data' => 'json',
    ];

    protected $dates = [
        'start_date',
        'end_date',
    ];

    public function rentPerSqFt(): Attribute
    {
        return new Attribute(
            get: fn ($value) => is_null($value) ? null : $value / 100,
            set: fn ($value) => is_null($value) ? null : $value * 100,
        );
    }

    public function asset()
    {
        return $this->belongsTo(Asset::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function child_leases()
    {
        return $this->hasMany(Lease::class, 'parent_id');
    }

    public function parent_lease()
    {
        return $this->belongsTo(Lease::class, 'parent_id');
    }

    public function documents()
    {
        return $this->morphMany(Document::class, 'documentable');
    }
}
