<template>
  <nav
    class="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-700 mb-3"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
      >
        <a
          class="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
          href="#pablo"
        >
          <font-awesome-icon
            icon="baby-carriage"
            size="lg"
            class="text-white mr-2"
          />
          <router-link to="/">BABYGUESSER</router-link>
        </a>
        <div class="block lg:hidden">
          <button
            class="flex items-center px-3 py-2 border rounded text-white border-white-400 hover:text-white hover:border-white"
            @click="toggleNavbar()"
          >
            <svg
              class="fill-current h-5 w-5"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      <div
        :class="showMenu ? 'block' : 'hidden'"
        class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
      >
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <a
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <router-link to="/">HEM</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <router-link to="/regler">REGLER</router-link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function() {
      this.showMenu = !this.showMenu
    }
  }
}
</script>
