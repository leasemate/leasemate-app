
export function fileStatusClass() {

    const STATUS_CLASSES = {
        'Pending': 'bg-gray-50 text-gray-600 ring-gray-500/10',
        'Extracting': 'bg-blue-50 text-blue-700 ring-blue-700/10',
        'Processing': 'bg-yellow-100 text-yellow-800 ring-yellow-600/20',
        'Pre-Processing': 'bg-yellow-50 text-yellow-600 ring-yellow-400/20',
        'Completed': 'bg-green-50 text-green-700 ring-green-600/20',
        'Failed': 'bg-red-50 text-red-800 ring-red-600/20',
    };

    function getFileStatusClass(fileStatus) {
        for (const [status, classes] of Object.entries(STATUS_CLASSES)) {
            if (fileStatus === status) {
                return classes;
            }
        }
        return ''; // default class or empty string if no match
    };

    return { getFileStatusClass };
}
