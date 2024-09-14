<?php

namespace App\Models;

use App\Traits\HasTenants;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Jetstream\HasTeams;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Stancl\Tenancy\Contracts\Syncable;
use Stancl\Tenancy\Database\Concerns\ResourceSyncing;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject, Syncable, MustVerifyEmail
{
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use HasRoles;
    use HasTeams;
    use HasTenants;
    use Notifiable;
    use ResourceSyncing;
    use TwoFactorAuthenticatable;

    protected $appends = [
        'profile_photo_url',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'email',
        'email_verified_at',
        'name',
        'position',
        'password',
        'is_super_admin',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public static function search($search = ''): Builder
    {
        return self::with('roles')
            ->where('name', 'like', '%' . $search . '%')
            ->orWhere('email', 'like', '%' . $search . '%');
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public function receivesBroadcastNotificationsOn(): string
    {
        return tenant('id') . '.App.Model.User.' . $this->id;
    }

    public function isSuperAdmin(): bool
    {
        return $this->is_super_admin;
    }

    public function sendEmailVerificationNotification()
    {
        $this->notify(new VerifyEmail());
    }

    public function displayNameWithPosition(): Attribute
    {
        return Attribute::get(function (): string {
            return $this->name . ($this->position ? ' (' . $this->position . ')' : '');
        });
    }

    public function displayNameWithRoles(): Attribute
    {
        return Attribute::get(function (): string {
            $roles = $this->getRoleNames()->isNotEmpty() ? ' (' . $this->getRoleNames()->implode(', ') . ')' : '';

            return $this->name . $roles;
        });
    }

    public function getZepUserIdAttribute()
    {
        return tenant('id') . '-' . $this->id;
    }

    public function asset()
    {
        return $this->hasOne(Asset::class);
    }

    public function assets()
    {
        return $this->belongsToMany(Asset::class)->withTimestamps();
    }

    public function chats()
    {
        return $this->hasMany(Chat::class);
    }

    /**
     *Stancl Tenancy Syncable
     */
    public function getGlobalIdentifierKey()
    {
        return $this->getAttribute($this->getGlobalIdentifierKeyName());
    }

    public function getGlobalIdentifierKeyName(): string
    {
        return 'global_id';
    }

    public function getCentralModelName(): string
    {
        return CentralUser::class;
    }

    public function getSyncedAttributeNames(): array
    {
        return [
            'name',
            'password',
            'email',
            'email_verified_at',
        ];
    }
}
