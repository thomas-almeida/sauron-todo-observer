<template>
  <div class="container">
    <div class="container-content">
      <CreateModal />
      <TaskList />
    </div>
  </div>
</template>

<script setup>
import CreateModal from '@/components/CreateModal.vue';
import TaskList from '@/components/TaskList.vue'
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .container-content {
    width: 70%;
  }

</style>
