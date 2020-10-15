<template>
  <div class="flex-grow mx-auto container p-8">
    <Participants />
  </div>
</template>

<script>
// @ is an alias to /src

import Participants from '@/components/Participants.vue'

export default {
  name: 'Home',
  components: {
    Participants
  }
}
</script>
