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
  },
});

export const { setTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
