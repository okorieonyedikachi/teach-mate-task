import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import data from "@/data.json"
import { Task } from '@/types'

export interface TaskState {
    tasks: Task[]
  }

const initialState:TaskState = {
  tasks:[]
  // tasks:data.tasks.map(t=>({...t,date:new Date()}))
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
   
    addNewTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload)
    },
    deleteTask: (state, action: PayloadAction<Task['id']>) => {
      const taskId = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
    // deleteTask: (state, action: PayloadAction<Task['id']>) => {
    //   const taskIndex = state.tasks.findIndex((task) => task.id === action.payload);
    //   if (taskIndex !== -1) {
    //     state.tasks.filter(taskIndex, 1);
    //   }
    // },
  },
})

// Action creators are generated for each case reducer function
export const taskActions = taskSlice.actions

export default taskSlice.reducer