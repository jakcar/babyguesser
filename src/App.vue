<template>
  <div id="app" class="min-h-screen flex flex-col text-center">
    <nav-component />
    <router-view />
    <footer-component />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    'nav-component': NavBar,
    'footer-component': Footer
  }
}
</script>

<style></style>
