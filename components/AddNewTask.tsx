"use client"
import { Button } from '@/components/ui/button';
import { useAppDispatch } from '@/store/hooks';
import { taskActions } from '@/store/task/taskSlice';
import { Task } from '@/types';
import TaskModal from './TaskModal';

export function AddNewTask() {
  const dispatch = useAppDispatch();

  function onSubmit(values: Task) {
    dispatch(taskActions.addNewTask(values));
  }

  return (
    <TaskModal submitAction={onSubmit}>
      <Button variant="secondary" className=" w-[110px]">
        Add new task
      </Button>
    </TaskModal>
  );
}

export default AddNewTask;