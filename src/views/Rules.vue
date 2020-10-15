<template>
  <div class="flex-grow mx-auto container p-8 ">
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
