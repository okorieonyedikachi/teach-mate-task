import data from '@/data.json';
import { Task } from '@/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: data.tasks.map(t => ({
    ...t,
    date: new Date().toISOString(),
    id: Math.random().toString(36),
  })),
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    editTask: (state, action: PayloadAction<Task>) => {
      const newTask = action.payload;
      state.tasks = state.tasks.map(task =>
        task.id === newTask.id ? newTask : task,
      );
    },
    addNewTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<Task['id']>) => {
      const taskId = action.payload;
      state.tasks = state.tasks.filter(task => task.id !== taskId);
    },
    deleteMultipleTasks: (state, action: PayloadAction<Task['id'][]>) => {
      const taskIds = action.payload;
      state.tasks = state.tasks.filter(task => !taskIds.includes(task.id));
    },
  },
});

// Action creators are generated for each case reducer function
export const taskActions = taskSlice.actions;

export default taskSlice.reducer;