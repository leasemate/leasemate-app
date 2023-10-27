<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class FileProcessingUpdate extends Notification
{
//    use Queueable;

    protected $file;
    /**
     * Create a new notification instance.
     */
    public function __construct($file)
    {
        $this->file = $file;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['database','broadcast'];
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            'notification_type_name'=>'Processing Complete',
            'file_name' => $this->file->original_name,
            'file_status' => $this->file->status,
            'file_updated_at' => $this->file->updated_at,
        ];
    }
}
