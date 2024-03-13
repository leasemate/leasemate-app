<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChatMessage extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $touches = ['chat'];

    public function chat()
    {
        return $this->belongsTo(Chat::class);
    }
}
