<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Document extends Model
{
    use HasFactory;
    use SoftDeletes;

    const COLLECTION_AMENDMENT = 'amendment';

    const COLLECTION_LEASE = 'lease';

    protected $guarded = [];

    public function scopeOfType(Builder $query, string $type)
    {
        return $query->where('collection_name', $type);
    }

    public function scopeLease()
    {
        return $this->where('collection_name', self::COLLECTION_LEASE);
    }

    public function documentable()
    {
        return $this->morphTo();
    }

    public function document_detail()
    {
        return $this->hasOne(DocumentDetail::class);
    }
}
