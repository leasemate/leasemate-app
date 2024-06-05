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

    const TYPE_ORIGINAL = 'original';

    const TYPE_AMENDMENT = 'amendment';

    const TYPE_CURRENT = 'current';

    protected $guarded = [];

    protected $casts = [
        'execution_date' => 'datetime',
        'commencement_date' => 'datetime',
        'expiration_date' => 'datetime',
        'start_date' => 'datetime',
        'end_date' => 'datetime',
        'rent_schedule' => 'json',
    ];

    protected $dates = [
        'start_date',
        'end_date',
        'execution_date',
        'commencement_date',
        'expiration_date',
    ];

    public function rentPerSqFt(): Attribute
    {
        return new Attribute(
            get: fn ($value) => is_null($value) ? null : $value / 100,
            set: fn ($value) => is_null($value) ? null : $value * 100,
        );
    }

    public function securityDeposit(): Attribute
    {
        return new Attribute(
            get: fn ($value) => is_null($value) ? null : $value / 100,
            set: fn ($value) => is_null($value) ? null : $value * 100,
        );
    }

    public function isAmendment(): Attribute
    {
        return new Attribute(
            get: fn ($value) => $this->type === self::TYPE_AMENDMENT,
        );
    }

    public function original_lease()
    {
        return $this->hasOne(Lease::class, 'parent_id', 'id')
            ->where('type', self::TYPE_ORIGINAL);
    }

    public function current_lease()
    {
        return $this->belongsTo(Lease::class, 'parent_id', 'id')
            ->where('type', self::TYPE_CURRENT);
    }

    public function amendments_processing()
    {
        return $this->base_amendments()
            ->whereHas('lease_document', function ($q) {
                $q->where('status', '!=', 'Ready');
            });
    }

    public function amendments()
    {
        return $this->base_amendments()
            ->whereHas('lease_document', function ($q) {
                $q->whereIn('status', ['Ready', 'Failed']);
            })
            ->orderBy('execution_date', 'desc');
    }

    public function base_amendments()
    {
        return $this->hasMany(Lease::class, 'parent_id', 'id')
            ->where('type', self::TYPE_AMENDMENT);
    }

    /**
     * Scope a query to only include original leases.
     */
    public function scopeOriginal($query)
    {
        return $query->where('type', self::TYPE_ORIGINAL);
    }

    /**
     * Scope a query to only include current leases.
     */
    public function scopeCurrent($query)
    {
        return $query->where('type', self::TYPE_CURRENT);
    }

    /**
     * Scope a query to only include amendments.
     */
    public function scopeAmendments($query)
    {
        return $query->where('type', self::TYPE_AMENDMENT);
    }

    public function asset()
    {
        return $this->belongsTo(Asset::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function chats()
    {
        return $this->hasMany(Chat::class);
    }

    public function chats_with_last_message()
    {
        return $this->hasMany(Chat::class)->with('last_message')->orderBy('updated_at', 'desc');
    }

    public function documents()
    {
        return $this->morphMany(Document::class, 'documentable');
    }

    public function lease_document()
    {
        return $this->morphOne(Document::class, 'documentable');
    }

    public function lease_document_trashed()
    {
        return $this->lease_document()->withTrashed();
    }

    public function lease_detail()
    {
        return $this->hasOne(LeaseDetail::class);
    }
}
