<?php

namespace App\Observers;

use App\Models\User;
use App\Notifications\CreatePassword;
use Illuminate\Support\Facades\Password;

class UserObserver
{
    public function created(User $user): void
    {
        //        \Log::info('OBSERVER: User created', ['user' => $user]);

        if (tenant() && ! $user->is_super_admin) {
            $password_token = Password::broker()->createToken($user);
            $user->notify(new CreatePassword($password_token));
        }
    }

    /**
     * Handle the User "deleted" event.
     */
    public function deleted(User $user): void
    {
        \Log::info('OBSERVER: User deleted', ['user' => $user]);

        $user->ownedTeams()->delete();
    }

    /**
     * Handle the User "restored" event.
     */
    public function restored(User $user): void
    {
        //
    }

    /**
     * Handle the User "force deleted" event.
     */
    public function forceDeleted(User $user): void
    {
        //
    }
}
