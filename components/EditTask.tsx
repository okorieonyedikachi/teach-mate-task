'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { taskActions } from '@/store/task/taskSlice';
import { Task } from '@/types';
import { Pencil } from 'lucide-react';
import TaskModal from './TaskModal';
import { Button } from './ui/button';

interface Props {
  taskId: string;
}

export function EditTask(props: Props) {
  const { taskId } = props;

  const dispatch = useAppDispatch();
  const task = useAppSelector(state =>
    state.task.tasks.find(task => task.id === taskId),
  )!;

  function onSubmit(values: Task) {
    dispatch(taskActions.editTask(values));
  }

  return (
    <TaskModal task={task} submitAction={onSubmit}>
      <Button variant="ghost" size="icon">
        <span className="sr-only">Edit</span>
        <Pencil size={16} />
      </Button>
    </TaskModal>
  );
}

export default EditTask;