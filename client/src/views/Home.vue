<template>
  <div class="container">
    <div class="container-content">
      <div class="heading">
        <h1>Welcome back, <b>user</b></h1>
        <CreateModal />
      </div>
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
  height: 100vh;
}

.container-content {
  width: 70%;
}

.heading {
  padding: 5px 35px;
}
</style>
