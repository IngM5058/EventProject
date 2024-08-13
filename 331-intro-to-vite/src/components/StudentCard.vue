<script setup lang="ts">
import type { Student } from '@/type'
defineProps<{
  student: Student
}>()
</script>

<template>
  <div class="flex flex-col items-center">
    <div
      class="p-5 w-[250px] cursor-pointer border border-[#39495c] mb-[18px] hover:scale-105 hover:shadow-lg transition-transform"
    >
      <h4>{{ student.id }} : {{ student.studentId }}</h4>
      <h2>{{ student.name + ' ' + student.surname }}</h2>
      <span>"{{ student.description }}"</span><br />
      <span>gpa : {{ student.gpa }}</span>
    </div>
  </div>
</template>