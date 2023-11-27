<template>
    <v-list lines="two" class="flex">
      <v-list-item
        v-for="task in tasks"
        :key="task.id"
        :title="task.title"
        :subtitle="task.details"
        class="task-item"
      >
      <br>
      <v-btn icon="mdi-delete" variant="plain"></v-btn>
      <v-btn icon="mdi-pencil" variant="plain"></v-btn>
      <v-btn icon="mdi-check-circle" variant="plain"></v-btn>
      <span class="anchor-right">
        {{ task.deadline }}
      </span>
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
  
  <style>

    .flex {
      display: flex;
      justify-content: start;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
      padding: 20px;
      margin: 10px;
    }

    .task-item {
      border: 1px solid #9c9c9c;
      border-radius: 5px;
      box-shadow: 1px 2px 4px #d5d5d5;
      width: 30%;
      transition: 0.2s;
    }

    .task-item:hover {
      transform: scale(1.06);
      cursor: pointer;
      box-shadow: 1px 2px 4px #939393;
    }

    .v-list-item-title {
      font-size: 1.2em;
      line-height: 120%;
      padding-bottom: 5px;
    }

    .v-list-item-subtitle {
      font-size: 1em;
      padding: 10px 0px;
    }

    .anchor-right {
      position: absolute;
      right: 15px;
      bottom: 20px;
      border: 1px solid #ddd;
      padding: 5px 10px;
      border-radius: 4px;
    }
  </style>