<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class DocumentCompleteNotification extends Notification
{
    //    use Queueable;

    protected $data;

    protected $type;

    /**
     * Create a new notification instance.
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['database', 'broadcast'];
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            'notification_type_name' => 'Document Processing',
            'file_name' => $this->data['file_name'],
            'file_status' => $this->data['status'],
            'file_updated_at' => $this->data['updated_at'],
        ];
    }
}
