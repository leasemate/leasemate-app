import {reactive} from "vue";

export default reactive({
    items: [],
    success(message, duration=5000) {  // this.$toast.success('message')
        this.add(message, 'success', duration);
    },
    warning(message, duration=5000) {  // this.$toast.success('message')
        this.add(message, 'warning', duration);
    },
    error(message, duration=5000) {  // this.$toast.error('message')
        this.add(message, 'error', duration);
    },
    info(message, duration=5000) {  // this.$toast.info('message')
        this.add(message, 'info', duration);
    },
    add(message, type='success', duration) {
        this.items.unshift({
            key: Symbol(),
            type,
            message,
            duration
        });
    },
    remove(index) {
        this.items.splice(index, 1);
    }
});
