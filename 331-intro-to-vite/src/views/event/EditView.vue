<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useMessageStore } from '@/stores/message';
import type { Event } from '@/types';
import EventService from '@/services/EventService';

const router = useRouter();
const store = useMessageStore();

const event = ref<Event>({
  id: 0,
  category: '',
  title: '',
  description: '',
  location: '',
  date: '',
  time: '',
  organizer: ''
});

function updateEvent() {
  EventService.updateEvent(event.value)
    .then((response) => {
      router.push({
        name: 'event-detail',
        params: { id: response.data.id }
      });
      store.updateMessage(`You have successfully updated the event: ${response.data.title}`);
      setTimeout(() => {
        store.resetMessage();
      }, 3000);
    })
    .catch(() => {
      router.push({ name: 'network-error' });
    });
}
</script>

<template>
  <div>
    <h1>Edit Event</h1>
    <form @submit.prevent="updateEvent">
      <label>Category:</label>
      <input v-model="event.category" type="text" placeholder="Category" class="field" />

      <label>Title:</label>
      <input v-model="event.title" type="text" placeholder="Title" class="field" />

      <label>Description:</label>
      <textarea v-model="event.description" placeholder="Description" class="field"></textarea>

      <label>Location:</label>
      <input v-model="event.location" type="text" placeholder="Location" class="field" />

      <label>Date:</label>
      <input v-model="event.date" type="date" class="field" />

      <label>Time:</label>
      <input v-model="event.time" type="time" class="field" />

      <label>Organizer:</label>
      <input v-model="event.organizer" type="text" placeholder="Organizer" class="field" />

      <button class="button" type="submit">Update Event</button>
    </form>
  </div>
</template>

<style scoped>
.field {
  margin-bottom: 16px;
}
</style>
