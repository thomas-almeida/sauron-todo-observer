<template>
  <v-dialog width="500" v-model="isActive">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" text="Add Tarefa" color="#5865f2"> </v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="Criar Tarefa">
        <v-card-text>
          Insira os dados da tarefa nova
        </v-card-text>
        <div class="p-10">
          <v-text-field clearable label="Título" variant="outlined" v-model="taskForm.title"></v-text-field>
          <v-text-field clearable label="Tempo Limite" variant="outlined" v-model="taskForm.deadline"></v-text-field>
          <v-textarea clearable label="Descrição" variant="outlined" v-model="taskForm.details"></v-textarea>
        </div>
          <div class="spaced-buttons">
            <v-btn text="Voltar" @click="close" height="48" color="#DDD"></v-btn>
            <v-btn text="Criar Tarefa" :loading="loading" @click="createTask" height="48" color="#5865f2"></v-btn>
          </div>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { useAppStore } from '@/store/app'


const isActive = ref(false)
const loading = ref(false)
const taskForm = ref({
  title: '',
  deadline: '',
  details: ''
});

const createTask = async () => {
  loading.value = true;
  setTimeout(() => (loading.value = false), 2000)
  await useAppStore().createTask(taskForm.value)
  isActive.value = false
};

const close = () => {
  isActive.value = false;
};
</script>

<style>
.p-10 {
  padding: 10px 20px;
}
.spaced-buttons {
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}
</style>
