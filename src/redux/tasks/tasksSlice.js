import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state) => {
      const allTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      return {
        ...state,
        tasks: allTasks,
      };
    },

    selectTask: (state, action) => {
      const taskSelected = action.payload;
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          localStorage.setItem('taskSelected', JSON.stringify(task));
          return { ...task, selected: true };
        }
        return task;
      });
      return {
        ...state,
        tasks: updatedTasks,
        taskSelected,
      };
    },

    handleTodoDrop: (state, { payload }) => {
      const { id } = payload;
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, status: 'todo' };
        }
        return task;
      });
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks,
      };
    },

    handleIprogressDrop: (state, { payload }) => {
      const { id } = payload;
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, status: 'inProgress' };
        }
        return task;
      });
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks,
      };
    },

    handleCompletedDrop: (state, { payload }) => {
      const { id } = payload;
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, status: 'completed' };
        }
        return task;
      });
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks,
      };
    },
  },
});

export const {
  setTasks, selectTask, editTask, handleIprogressDrop, handleTodoDrop, handleCompletedDrop,
} = tasksSlice.actions;
export default tasksSlice.reducer;
