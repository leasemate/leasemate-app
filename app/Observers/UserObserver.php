<?php

namespace App\Observers;

use App\Facades\ZepApi;
use App\Models\User;
use App\Notifications\CreatePassword;
use Illuminate\Contracts\Auth\PasswordBroker;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Response;

class UserObserver
{
    public $tokens;
    /**
     * Handle the User "created" event.
     */

    public function created(User $user): void
    {

        \Log::info('OBSERVER: User created', ['user' => $user]);

        if(tenant()) {

            if( ! $user->is_super_admin) {
                $password_token = Password::broker()->createToken($user);
                Log::info('PASSWORD TOKEN: '. $password_token);
                Log::info('Tenant: '. tenant());

                $user->notify(new CreatePassword($password_token));
            }
        }

    }

    /**
     * Handle the User "updated" event.
     */
    public function updated(User $user): void
    {

//        \Log::info('OBSERVER: User updated', ['user' => $user]);
//
//        $updates = $user->getChanges();
//
//        $user_data = [];
//
//        if(Arr::has($updates, 'email')) $user_data['email'] = (string) $updates['email'];
//        if(Arr::has($updates, 'name')) $user_data['first_name'] = (string) $updates['name'];
//
//        if(!empty($user_data)) {
//
//            $user_data['metadata'] = [
//                'user_id' => (int) $user->id,
//                'tenant_id' => (string) tenant('id'),
//                'tenant_domain' => (string) tenant('domain'),
//            ];
//
//            ZepApi::updateUser($user->zep_user_id, $user_data);
//        }

    }

    /**
     * Handle the User "deleted" event.
     */
    public function deleted(User $user): void
    {
        \Log::info('OBSERVER: User deleted', ['user' => $user]);

        $user->ownedTeams()->delete();



//        ZepApi::deleteUser($user->zep_user_id);
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
