<?php

namespace App\Observers;

use App\Facades\ZepApi;
use App\Models\User;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Response;

class UserObserver
{
    /**
     * Handle the User "created" event.
     */
    public function created(User $user): void
    {

        try {

            \Log::info('OBSERVER: User created', ['user' => $user]);

            $user_data = [
                'email' => (string) $user->email,
                'first_name' => (string) $user->name,
                'user_id' => (string) $user->id
            ];

            $zep_user = ZepApi::createUser($user_data);

            if($zep_user) {
                $user->zep_uuid = $zep_user['uuid'];
                $user->save();
            }

        } catch(\Exception $e) {
            \Log::error('OBSERVER: Error updating user: '.$e->getMessage());
        }

    }

    /**
     * Handle the User "updated" event.
     */
    public function updated(User $user): void
    {

        try {

            \Log::info('OBSERVER: User updated', ['user' => $user]);

            $updates = $user->getChanges();

            $user_data = [];

            if(Arr::has($updates, 'email')) $user_data['email'] = (string) $updates['email'];
            if(Arr::has($updates, 'name')) $user_data['first_name'] = (string) $updates['name'];

            if(!empty($user_data)) {
                ZepApi::updateUser($user->id, $user_data);
            }

        } catch(\Exception $e) {
            \Log::error('OBSERVER: Error updating user: '.$e->getMessage());

        }

    }

    /**
     * Handle the User "deleted" event.
     */
    public function deleted(User $user): void
    {
        //
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
