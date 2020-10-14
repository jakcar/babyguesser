<template>
  <div class="flex-grow mx-auto container p-8 text-2xl">
    <MainContent />
    <Participants />
  </div>
</template>

<script>
// @ is an alias to /src
import MainContent from '@/components/MainContent.vue'
import Participants from '@/components/Participants.vue'

export default {
  name: 'Home',
  components: {
    MainContent,
    Participants
  }
}
</script>
