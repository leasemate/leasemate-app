export default {
    formatNumber(value) {
        if(value === null || value === undefined) return;
        return new Intl.NumberFormat().format(value);
    },
    formatNumberSqFt(value) {
        if(value === null || value === undefined) return;
        return new Intl.NumberFormat().format(value)+' sq ft';
    },
    formatDate(value) {
        return new Intl.DateTimeFormat().format(new Date(value));
    },
    formatDateTime(value) {
        const date = new Date(value);
        return `${new Intl.DateTimeFormat().format(date)} ${date.toLocaleTimeString()}`;
    },
    formatMoney(value, decimals = 2) {
        if(value === null || value === undefined) return;
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            decimal: '.',
            minimumFractionDigits: decimals,
        }).format(value);
    },
};
