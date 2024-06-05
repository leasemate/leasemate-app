<script setup>
import { computed } from "vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

const props = defineProps({
    index: {
        type: Number,
        default: 0,
    },
    length: {
        type: Number,
        default: 0,
    },
    bottomAlign: {
        type: String,
        default: "2",
    },
    align: {
        type: String,
        default: 'right',
    },
    menuItemClasses: {
        type: String,
        default: "",
    },
    menuButtonClasses: {
        type: String,
        default: "",
    },
    width: {
        type: String,
        default: '48',
    },
    contentClasses: {
        type: Array,
        default: () => ['py-1', 'bg-white', 'dark:bg-gray-700'],
    },
});

const widthClass = computed(() => {
    return 'w-' + props.width.toString();
});


const bottomAlignClass = computed(() => {
    // if(props.length === 1) {
    //     return 'bottom-0 right-10';
    // } else if(props.index >= props.length - parseInt(props.bottomAlign)) {
    //     return 'bottom-0 right-11';
    // }
    // return '-top-2 right-11';
    return 'right-10 -top-2'
});

const menuItemClasses = computed(() => {
    return bottomAlignClass.value;
});

const alignmentClasses = computed(() => {
    if (props.align === 'left') {
        return 'ltr:origin-top-left rtl:origin-top-right start-0';
    }

    if (props.align === 'right') {
        return 'ltr:origin-top-right rtl:origin-top-left end-0';
    }
    return 'origin-top';
});

</script>

<template>

    <Menu as="div" class="relative inline-block text-left">
        <div>
            <MenuButton
                class="
                inline-flex w-full justify-center gap-x-1.5 px-2 py-2 rounded-md bg-white dark:bg-indigo-200 border border-transparent
                dark:text-gray-800 uppercase tracking-widest hover:bg-gray-50 dark:hover:bg-white focus:outline-none transition ease-in-out duration-150"
                :class="[props.menuButtonClasses]"
            >
                <slot name="trigger" />
            </MenuButton>
        </div>

        <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >

            <MenuItems
                class="absolute z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                :class="[menuItemClasses, widthClass]"
            >
                <div class="py-1">
                    <slot name="content" />
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>
