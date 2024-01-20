
export function fileStatusClass() {

    const status_classes = {

        'STATUS_CLASSES': {
            'Pending': 'bg-gray-50 text-gray-600 ring-gray-500/10',
            'Extracting': 'bg-blue-50 text-blue-700 ring-blue-700/10',
            'Processing': 'bg-yellow-100 text-yellow-800 ring-yellow-600/20',
            'Pre-Processing': 'bg-yellow-50 text-yellow-600 ring-yellow-400/20',
            'Completed': 'bg-green-50 text-green-700 ring-green-600/20',
            'Ready': 'bg-green-50 text-green-700 ring-green-600/20',
            'Failed': 'bg-red-50 text-red-800 ring-red-600/20',
            'Deleting': 'bg-red-50 text-red-800 ring-red-600/20',
            'Deleted': 'bg-red-50 text-red-800 ring-red-600/20',
        },
        'PROCESS_CLASSES': {
            'Pending': 'bg-gray-400',
            'Extracting': 'bg-blue-400',
            'Processing': 'bg-yellow-600',
            'Pre-Processing': 'bg-yellow-400',
            'Deleting': 'bg-red-400',
            'Failed': 'bg-red-400',
            'Completed': 'bg-green-400',
            'Ready': 'bg-green-400',
        }
    }

    function getFileStatusClass(fileStatus, objectToUse = 'STATUS_CLASSES') {

        const selectedObject = status_classes[objectToUse];

        if(selectedObject && selectedObject.hasOwnProperty(fileStatus)) {
            return selectedObject[fileStatus];
        }

        return '';

    };

    return { getFileStatusClass };
}
