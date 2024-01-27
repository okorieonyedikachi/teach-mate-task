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
  },
})

// Action creators are generated for each case reducer function
export const taskActions = taskSlice.actions

export default taskSlice.reducer