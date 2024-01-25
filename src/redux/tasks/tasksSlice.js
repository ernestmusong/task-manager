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
  },
});

export const { setTasks, selectTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
