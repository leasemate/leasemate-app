<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Notifications\DatabaseNotification;
use Inertia\Inertia;

class NotificationController extends Controller
{
    public function index()
    {

        auth()->user()->notifications->markAsRead();

        $notifications = auth()->user()->notifications()->paginate(10);

        return Inertia::render('Notification/Index', [
            'notifications' => $notifications,
        ]);
    }

    public function show(DatabaseNotification $notification)
    {
        try {
            if ($notification) {

                $response_data = [
                    'status' => 'success',
                    'total_unread_notifications' => auth()->user()->unreadNotifications()->count(),
                    'notification' => $notification,
                ];

                return response()->json($response_data);
            }

        } catch (\Exception $e) {

            $response_data = [
                'status' => 'error',
                'message' => $e->getMessage(),
            ];

            return response()->json($response_data, 500);
        }
    }

    public function markAsRead(Request $request, DatabaseNotification $notification)
    {
        try {

            if ($notification) {
                $notification->markAsRead();
            }

            $response_data = [
                'status' => 'success',
                'total_unread_notifications' => auth()->user()->unreadNotifications()->count(),
                'read_at' => $notification->read_at,
            ];

            return response()->json($response_data);

        } catch (\Exception $e) {

            $response_data = [
                'status' => 'error',
                'message' => $e->getMessage(),
            ];

            return response()->json($response_data, 500);
        }
    }
}
