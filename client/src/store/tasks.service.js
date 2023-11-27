
import Api from "./api";

const taskService = {
  getTasks: async () => {
    try {
      const response = await Api.get('/get-tasks');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createTask: async (taskData) => {
    try {
      const response = await Api.post('/create-task', taskData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateTask: async (taskId, taskData) => {
    try {
      const response = await Api.put(`/update/${taskId}`, taskData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteTask: async (taskId) => {
    try {
      const response = await Api.delete(`/delete/${taskId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default taskService;
