<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DocumentDetail extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'basic_extracted_data' => 'json',
        'detailed_extracted_data' => 'json',
    ];

    public function document()
    {
        return $this->belongsTo(Document::class);
    }
}
