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
//        'extracted_data' => 'json',
//        'detailed_extracted_data' => 'json',
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

    public function securityDeposit(): Attribute
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

    public function amendments()
    {
        return $this->documents()->where('collection_name', 'amendment');
    }

    public function lease_document()
    {
        return $this->morphOne(Document::class, 'documentable')
            ->where('collection_name', Document::COLLECTION_LEASE);
    }

    public function lease_document_trashed()
    {
        return $this->lease_document()->withTrashed();
    }

    public function lease_details()
    {
        $this->hasOne(LeaseDetail::class);
    }

}
