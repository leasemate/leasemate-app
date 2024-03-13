<?php

namespace App\Models;

use App\Models\Scopes\UserScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function getRouteKeyName()
    {
        return 'chat_uuid';
    }

    protected static function booted(): void
    {
        //        static::addGlobalScope(new UserScope());
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function lease()
    {
        return $this->belongsTo(Lease::class);
    }

    public function messages()
    {
        return $this->hasMany(ChatMessage::class)->orderBy('created_at', 'asc');
    }

    public function last_message()
    {
        return $this->hasOne(ChatMessage::class)->latestOfMany('created_at');
    }
}
