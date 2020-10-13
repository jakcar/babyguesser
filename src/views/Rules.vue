<template>
  <div class="flex-grow mx-auto container p-8 text-2xl">
    <Rules />
  </div>
</template>

<script>
// @ is an alias to /src
import Rules from '@/components/Rules.vue'

export default {
  name: 'Home',
  components: {
    Rules
  }
}
</script>
