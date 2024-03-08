<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Amendment extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'execution_date' => 'datetime',
    ];

    public function document()
    {
        return $this->morphOne(Document::class, 'documentable');
    }

    public function lease()
    {
        return $this->belongsTo(Lease::class);
    }
}
