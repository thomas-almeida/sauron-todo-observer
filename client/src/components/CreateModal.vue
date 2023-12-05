<template>
  <v-dialog width="500" v-model="isActive">
    <template v-slot:activator="{ props }">
      <span v-if="isEditing">
        <v-btn v-bind="props" icon="mdi-pencil" variant="plain"></v-btn>
      </span>
      <span v-if="!isEditing">
        <v-btn v-bind="props" text="Criar" color="#5865f2"> </v-btn>
      </span>
    </template>

    <template v-slot:default="">
      <v-card :title="headText">
        <v-card-text>
          {{ detailsText }}
        </v-card-text>
        <div class="p-10">
          <v-text-field clearable label="Título" variant="outlined" v-model="taskForm.title"></v-text-field>
          <v-text-field clearable label="Tempo Limite" variant="outlined" v-model="taskForm.deadline" @input="applyDateMask"></v-text-field>
          <v-textarea clearable label="Descrição" variant="outlined" v-model="taskForm.details"></v-textarea>
        </div>
        <div class="spaced-buttons">
          <v-btn text="Cancelar" height="48" color="#DDD" @click="close">
          </v-btn>
          <v-btn :text="buttonText" :loading="loading" height="48" color="#5865f2" @click="modalAction">
          </v-btn>
        </div>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { useAppStore } from '@/store/app'
import dateMask from '@/mods/masks' 
import convertDateMod from '@/mods/date';

export default {
  props: {
    isEditing: Boolean,
    headText: String,
    buttonText: String,
    detailsText: String,
    actualTask: Object,
  },
  data() {
    return {
      isActive: false,
      loading: false,
      taskForm: {
        title: '',
        deadline: '',
        details: ''
      },
    };
  },
  mounted() {
    this.loadEdit()
  },
  methods: {
    async modalAction() {
      this.loading = true;

      if (this.isEditing) {
        return this.setUpdate()
      }

      return this.setCreate()
    },
    close() {
      this.isActive = false;
    },
    loadEdit() {
      if (this.isEditing && this.actualTask) {
        this.taskForm.title = this.actualTask.title
        this.taskForm.details = this.actualTask.details
        this.taskForm.deadline = convertDateMod(this.actualTask.deadline)
      }
    },
    async setCreate() {
      setTimeout(() => (this.loading = false), 2000);
      await useAppStore().createTask(this.taskForm);
      this.isActive = false;
    },
    async setUpdate() {
      setTimeout(() => (this.loading = false), 2000);
      await useAppStore().updateTask(this.actualTask?.id, this.taskForm)
      this.isActive = false;
    },
    applyDateMask() {
      this.taskForm.deadline = dateMask(this.taskForm.deadline)
    }
  }
}
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
