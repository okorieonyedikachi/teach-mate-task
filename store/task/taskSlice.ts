import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export enum Status{
    Todo = "ToDo",
    Ongoing = "Ongoing",
    Completed = "Completed"
}

export interface Task {
  value: number
  title: string
  description: string
  date: Date
  status: Status
}


export interface TaskState {
    tasks: Task[]
  }

const initialState:TaskState = {
  tasks:[]
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