<template>
  <v-list lines="two" class="flex">
    <v-list-item v-for="task in tasks" :key="task.id" :title="task.title" :subtitle="task.details" class="task-item">
      <br>
      <v-btn icon="mdi-delete" variant="plain" @click="deleteTask(task.id)"></v-btn>
      <CreateModal
        :isEditing="edit"
        :headText="'Editar'"
        :detailsText="'Edite os campos da tarefa e salve as alterações'"
        :buttonText="'Salvar Alterações'"
        :actualTask="task"
      />
      <v-btn icon="mdi-check-circle" variant="plain"></v-btn>
      <CardDetails
        :cardTitle="task.title"
        :cardDetails="task.details"
        :cardDeadline="task.deadline"
      />
      <span class="anchor-right">
        {{ formatDate(task.deadline) }}
      </span>
    </v-list-item>
  </v-list>
</template>

<script>
import { useAppStore } from '../store/app'
import CreateModal from './CreateModal.vue';
import CardDetails from './CardDetails.vue';
import convertDateMod from '@/mods/date';

export default {
    data() {
        return {
            store: useAppStore(),
            tasks: [],
            edit: true
        };
    },
    mounted() {
        this.fetchTasks();
    },
    methods: {
        async fetchTasks() {
            await this.store.fetchTasks();
            this.tasks = this.store.getTasks;
        },
        async deleteTask(taskId) {
            await this.store.deleteTask(taskId);
            this.fetchTasks();
        },
        formatDate(date) {
          return convertDateMod(date)
        }
    },
    components: { CreateModal, CardDetails }
}
</script>

<style>
.flex {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  margin: 10px;
}

.task-item {
  border: 1px solid #989696 !important;
  border-radius: 5px !important;
  box-shadow: 1px 2px 4px #d5d5d5;
  height: 180px;
  transition: 0.2s;
  padding: 20px !important;
}

.task-item:hover {
  transform: scale(1.06);
  cursor: pointer;
  box-shadow: 1px 2px 4px #939393;
}

.v-list {
  padding: 20px !important;
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
