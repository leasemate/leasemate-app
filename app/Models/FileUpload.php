<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Scopes\UserScope;

class FileUpload extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected static function booted(): void
    {
        static::addGlobalScope(new UserScope());
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
