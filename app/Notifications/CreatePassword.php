<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\URL;

class CreatePassword extends Notification implements ShouldQueue
{
    use Queueable;

    protected object $user;

    /**
     * Create a new notification instance.
     */
    public function __construct()
    {
        Log::info('NOTIFICATION: __construct');
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        Log::info('NOTIFICATION: via');
        $this->user = $notifiable;

        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return $this->buildMailMessage($this->createPasswordUrl());
    }

    protected function buildMailMessage($url): MailMessage
    {
        return (new MailMessage)
            ->subject(Lang::get('New Account - Create Password Notification'))
            ->greeting(Lang::get('Hello, :name', ['name' => $this->user->name]))
            ->line(Lang::get('You are receiving this email because your user account was created for '.tenant('company_name')))
            ->line(Lang::get('Click the link below to create your password:'))
            ->action(Lang::get('Create Password'), $url)
            ->line(Lang::get('This password reset link will expire in :count minutes.', ['count' => config('auth.passwords.'.config('auth.defaults.passwords').'.expire')]))
            ->line(Lang::get('If you did not request a password reset, no further action is required.'));
    }

    /**
     * Get the reset URL for the given notifiable.
     *
     * @param  mixed  $notifiable
     */
    protected function createPasswordUrl(): string
    {
        return URL::formatScheme().tenant('domain').route('new-user-password.create', [
            'token' => Password::broker()->createToken($this->user),
            'email' => $this->user->getEmailForPasswordReset(),
        ], false);
    }
}
