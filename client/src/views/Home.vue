<template>
  <div class="container">
    <div class="container-content">
      <div class="heading">
        <h1>Welcome back, <b>user</b></h1>
        <CreateModal 
          :head-text="'Nova Tarefa'" 
          :button-text="'Criar Nova Tarefa'"
          :details-text="'Defina os dados da nova tarefa'"
        />
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
  height: 100vh;
}

.container-content {
  width: 75%;
}

.heading {
  padding: 5px 35px;
  margin-bottom: 4rem;
}
</style>
