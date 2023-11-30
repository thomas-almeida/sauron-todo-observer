// Utilities
import { defineStore } from 'pinia';
import taskService from './tasks.service';

export const useAppStore = defineStore('app', {
  state: () => ({
    tasks: [],
  }),
  actions: {
    async fetchTasks() {
      const tasks = await taskService.getTasks();
      this.tasks = tasks
    },
    async createTask(taskData) {
      const createdTask = await taskService.createTask(taskData);
      this.tasks = [...this.tasks, createdTask]
    },
    async updateTask( taskId, taskData ) {
      const updatedTask = await taskService.updateTask(taskId, taskData);
      const index = this.tasks.findIndex((task) => task.id === updatedTask.id)
      if (index !== -1) {
        this.tasks = [
          ...this.tasks.slice(0, index),
          updatedTask,
          ...this.tasks.slice(index + 1)
        ]
      }
    },
    async deleteTask(taskId) {
      await taskService.deleteTask(taskId);
      this.tasks = this.tasks.filter((task) => task.id !== taskId)
    },
  },
  getters: {
    getTasks() {
      return this.tasks;
    },
  },
});
