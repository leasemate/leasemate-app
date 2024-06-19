export function fileStatusClass() {

    const status_classes = {

        'STATUS_CLASSES': {
            'Pending': 'bg-gray-50 text-gray-600 ring-gray-500/10 dark:bg-gray-600 dark:text-gray-50 dark:ring-gray-600/20',
            'Extracting': 'bg-blue-50 text-blue-700 ring-blue-700/10 dark:bg-blue-600 dark:text-blue-50 dark:ring-blue-600/20',
            'Processing': 'bg-yellow-100 text-yellow-800 ring-yellow-600/20 dark:bg-yellow-600 dark:text-yellow-50 dark:ring-yellow-600/20',
            'Queued': 'bg-yellow-50 text-yellow-600 ring-yellow-400/20 dark:bg-yellow-600 dark:text-yellow-50 dark:ring-yellow-600/20',
            'Warning': 'bg-yellow-50 text-yellow-600 ring-yellow-400/20 dark:bg-yellow-600 dark:text-yellow-50 dark:ring-yellow-600/20',
            'Completed': 'bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-600 dark:text-green-50 dark:ring-green-600/20',
            'Ready': 'bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-600 dark:text-green-50 dark:ring-green-600/20',
            'Failed': 'bg-red-50 text-red-800 ring-red-600/20 dark:bg-red-600 dark:text-red-50 dark:ring-red-600/20',
            'FAILED': 'bg-red-50 text-red-800 ring-red-600/20 dark:bg-red-600 dark:text-red-50 dark:ring-red-600/20',
            'Deleting': 'bg-red-50 text-red-800 ring-red-600/20 dark:bg-red-600 dark:text-red-50 dark:ring-red-600/20',
            'Deleted': 'bg-red-50 text-red-800 ring-slate-600/20 dark:bg-red-600 dark:text-red-50 dark:ring-slate-600/20',
            'Archived': 'bg-slate-100 text-slate-400 ring-slate-500/20 dark:bg-slate-600 dark:text-slate-50 dark:ring-slate-600/20',
        },
        'PROCESS_CLASSES': {
            'Pending': 'bg-gray-400 dark:bg-gray-800',
            'Extracting': 'bg-blue-400 dark:bg-blue-800',
            'Processing': 'bg-yellow-800 dark:bg-yellow-800',
            'Queued': 'bg-yellow-400 dark:bg-yellow-800',
            'Warning': 'bg-yellow-400 dark:bg-yellow-800',
            'Deleting': 'bg-red-400 dark:bg-red-800',
            'Archived': 'bg-slate-400 dark:bg-slate-800',
            'Failed': 'bg-red-400 dark:bg-red-800',
            'FAILED': 'bg-red-400 dark:bg-red-800',
            'Completed': 'bg-green-400 dark:bg-green-800',
            'Ready': 'bg-green-400 dark:bg-green-800',
        },
    }

    function getFileStatusClass(fileStatus, objectToUse = 'STATUS_CLASSES') {

        const selectedObject = status_classes[objectToUse]

        if (selectedObject && selectedObject.hasOwnProperty(fileStatus)) {
            return selectedObject[fileStatus]
        }

        return ''

    }

    return { getFileStatusClass }
}
