import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};
const allTasks = JSON.parse(localStorage.getItem('allTasks'));
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state) => ({
      ...state,
      tasks: (allTasks && allTasks) || [],
    }),
  },
});

export const { setTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
