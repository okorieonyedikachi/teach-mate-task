'use client'
import React, { useState } from 'react'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PencilLine } from 'lucide-react'
import { Textarea } from './ui/textarea'
import DatePicker from './DatePicker'

export function AddNewTask() {
 
  return (
    <Dialog> 
      <DialogTrigger asChild>
        <Button className='rounded-lg text-white w-[110px]'>Add new task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className='flex'>
          <DialogTitle>Add New Task</DialogTitle>
          {/* <DialogDescription>
           
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className=" items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Task Title
            </Label>
            <Input
              id="title"
              defaultValue=""
              className="col-span-3"
              placeholder='Dashboard UI'
            />
          </div>
          <div className=" items-center gap-4">
            <Label htmlFor="name" className="text-right">
             Task Description
            </Label>
            <Textarea/>
          </div>
        </div>
        <DatePicker/>
        <DialogFooter>
          <div className='w-[120px] rounded-xl'><Button type="submit" className='bg-secondary text-white'>Save changes</Button></div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default  AddNewTask

// bg-[#FDB515]