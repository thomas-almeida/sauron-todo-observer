<template>
    <v-list lines="two">
      <v-list-item
        v-for="task in tasks"
        :key="task.id"
        :title="task.title"
        :subtitle="task.details"
      >
      </v-list-item>
    </v-list>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUpdate } from 'vue'
  import { useAppStore } from '../store/app'
  
  const store = useAppStore()
  const tasks = ref([])
  
  onMounted(async () => {
    await store.fetchTasks()
    tasks.value = store.getTasks
  })

  </script>
  