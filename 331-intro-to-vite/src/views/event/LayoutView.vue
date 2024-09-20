<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import EventService from '@/services/EventService'
import type { Event } from '@/types'

const event = ref<Event | null>(null)
const route = useRoute()
const id = route.params.id as string

EventService.getEvent(parseInt(id))
  .then((response) => {
    event.value = response.data
  })
  .catch((error) => {
    console.error('There was an error fetching the event:', error)
  })
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div class="event-layout">
      <router-view :event="event"></router-view>
    </div>
  </div>
</template>

<style scoped>
.event-layout {
  display: flex;
  justify-content: space-between;
}
</style>
