<?php

namespace App\Models;

use App\Traits\HasTenants;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Jetstream\HasProfilePhoto;
use Stancl\Tenancy\Contracts\SyncMaster;
use Stancl\Tenancy\Database\Concerns\CentralConnection;
use Stancl\Tenancy\Database\Concerns\ResourceSyncing;

class CentralUser extends Authenticatable implements MustVerifyEmail, SyncMaster
{
    // Note that we force the central connection on this model
    use CentralConnection, HasTenants, Notifiable, ResourceSyncing;
    use HasProfilePhoto;

    protected $guarded = [];

    public $timestamps = false;

    public $table = 'users';

    protected $appends = [
        'profile_photo_url',
    ];

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

    public function isSuperAdmin(): bool
    {
        return $this->is_super_admin;
    }

    public function sendEmailVerificationNotification()
    {
        $this->notify(new VerifyEmail());
    }

    public function getTenantModelName(): string
    {
        return User::class;
    }

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
        return static::class;
    }

    public function getSyncedAttributeNames(): array
    {
        return [
            'name',
            'password',
            'email',
        ];
    }
}
