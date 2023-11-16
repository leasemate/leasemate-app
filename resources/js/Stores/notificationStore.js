import { defineStore } from 'pinia';

export const useNotificationStore = defineStore('notificationStore', {
    state: () => ({
        notifications: [],
        count: 0,
    }),
    actions: {
        setInitialData(notifications, count) {
            this.notifications = notifications;
            this.count = count;
        },
        add(notification) {
            this.notifications.unshift(notification);
        }
    }
});
