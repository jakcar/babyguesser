<template>
  <div class="bg-teal-800 text-white text-lg p-8 mt-4">
    <h1>BABYGUESSER</h1>
    <p class="text-xs leading-8">Av Jakob Carlbring</p>
    <!-- <p class="text-xs">Info</p>
    <p class="text-xs">Info</p> -->
  </div>
</template>
<script>
export default {
  name: 'Footer',
  props: {
    msg: { type: String, default: 'Nothing' }
  }
}
</script>
