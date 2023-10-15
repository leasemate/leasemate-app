<script setup>
import { ref, computed } from "vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import NavLink from "@/Components/NavLink.vue";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import { Link } from "@inertiajs/vue3";
import Header from "@/Components/Layout/Header.vue";
import Nav from "@/Components/Layout/Nav.vue";
import Footer from "@/Components/Layout/Footer.vue";
import SubHeader from "@/Components/Layout/SubHeader.vue";
import AutoLogout from "@/Components/AutoLogout.vue";

const showingNavigationDropdown = ref(false);

const isOpen = ref(false);
const subMenus = {
  products: ref(false),
  // Add more sub-menu keys as needed
};

const toggleSubMenu = (subMenuKey) => {
  subMenus[subMenuKey].value = !subMenus[subMenuKey].value;
};

const showSubMenu = (subMenuKey) => {
    return subMenus[subMenuKey].value;
};

</script>

<template>
    <div>


      <header class="bg-white p-4 shadow-md">
        <!-- Your header content goes here -->
        <h1>header</h1>
<!--        <Header />-->
      </header>

      <!-- Left Navigation (Mobile) -->
      <aside class="bg-gray-800 text-white w-64 min-h-screen fixed top-0 left-0 overflow-y-auto transition-transform duration-300 transform -translate-x-full lg:translate-x-0 lg:static lg:inset-auto">
        <!-- Hamburger Icon (visible on mobile) -->
        <div class="lg:hidden">
          <button id="menu-toggle" class="p-4 focus:outline-none focus:bg-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        <!-- Navigation Menu -->
        <nav class="p-4">
          <!-- Your navigation links go here -->
          <ul class="space-y-2">
            <li>

              <a href="#" class="block py-2 px-4 rounded hover:bg-gray-700 flex justify-between items-center">
                Dashboard
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ml-2 bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-5.147-5.146a.5.5 0 0 1 .708-.708l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </a>


              <a href="#" class="block py-2 px-4 rounded hover:bg-gray-700">Dashboard</a></li>

            <li @click="toggleSubMenu('products')">

              <a href="#" class="block py-2 px-4 rounded hover:bg-gray-700">Products</a>
                <ul
                    :class="{ 'hidden': !showSubMenu('products'), 'block': showSubMenu('products') }"
                    class="mt-2 space-y-1 left-0 w-full bg-gray-700 rounded shadow-lg"
                >
                  <li><a href="#" class="block py-1 px-4 rounded  pl-6">Product 1</a></li>
                  <li><a href="#" class="block py-1 px-4 rounded  pl-6">Product 2</a></li>
                  <!-- Add more sub-menu items -->
                </ul>

            </li>

            <li><a href="#" class="block py-2 px-4 rounded hover:bg-gray-700">Dashboard1</a></li>
            <li><a href="#" class="block py-2 px-4 rounded hover:bg-gray-700">Dashboard2</a></li>
            <!-- Add more menu items -->
          </ul>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="ml-0 lg:ml-64 p-4">
        <!-- Page content goes here -->
        <div class="bg-white p-4 shadow-md">
          <!-- Content for the current page -->

<!--          <slot />-->

        </div>
      </main>

      <!-- Footer -->
      <footer class="bg-gray-200 p-4 mt-auto">
        <p>footer</p>
        <!-- Your footer content goes here -->
      </footer>


<!--        <AutoLogout />-->

<!--        <div class="flex wrapper min-h-screen bg-gray-100">-->

<!--            <Nav />-->

<!--            <div class="page-content">-->
<!--                &lt;!&ndash; Topbar Start &ndash;&gt;-->
<!--                <Header />-->
<!--                &lt;!&ndash; Topbar End &ndash;&gt;-->

<!--                &lt;!&ndash; Page Content &ndash;&gt;-->
<!--                <main class="flex-grow p-6">-->
<!--                    &lt;!&ndash; Page Title Start &ndash;&gt;-->
<!--                    <SubHeader>-->
<!--                        <template #header>-->
<!--                            <slot name="header" />-->
<!--                        </template>-->
<!--                    </SubHeader>-->
<!--                    &lt;!&ndash; Page Title End &ndash;&gt;-->

<!--                    <div class="max-w-7xl mx-auto space-y-6">-->
<!--                        <slot />-->
<!--                    </div>-->

<!--                    <button-->
<!--                        data-toggle="back-to-top"-->
<!--                        class="fixed hidden h-10 w-10 items-center justify-center rounded-full z-10 bottom-20 end-14 p-2.5 bg-primary cursor-pointer shadow-lg text-white"-->
<!--                    >-->
<!--                        <i class="mgc_arrow_up_line text-lg"></i>-->
<!--                    </button>-->
<!--                </main>-->

<!--                &lt;!&ndash; Footer Start &ndash;&gt;-->
<!--                <Footer />-->
<!--                &lt;!&ndash; Footer End &ndash;&gt;-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>

<style>
@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.slide-fade-enter-active, .slide-fade-leave-active {
  @apply transition-all ease-out duration-300;
}

.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in <2.6 */ {
  @apply transform -translate-y-full opacity-0;
}

</style>
