import { useAppDispatch } from '@/store/hooks';
import { taskActions } from '@/store/task/taskSlice';
import { Trash2 } from 'lucide-react';
import { Button } from './ui/button';

interface Props {
  taskId: string;
}

const DeleteTask = (props: Props) => {
  const { taskId } = props;

  const dispatch = useAppDispatch();

  const handleDeleteClick = () => {
    dispatch(taskActions.deleteTask(taskId));
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleDeleteClick}>
      <span className="sr-only">Delete</span>
      <Trash2 size={16} color="red" />
    </Button>
  );
};

export default DeleteTask;