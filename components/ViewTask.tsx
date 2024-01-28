import { useAppSelector } from '@/store/hooks';
import { format } from 'date-fns';
import { Eye } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

interface Props {
  taskId: string;
}

const ViewTask = (props: Props) => {
  const { taskId } = props;

  const task = useAppSelector(state =>
    state.task.tasks.find(task => task.id === taskId),
  )!;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <span className="sr-only">View Task</span>
          <Eye size={16} />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{task.title}</DialogTitle>
        </DialogHeader>

        <div>
          <Label>Description</Label>
          <Textarea
            value={task.description}
            disabled
            className="bg-gray-50 dark:bg-gray-800"
          />
        </div>
        <div>
          <Label>Due Date</Label>
          <Input
            value={format(task.date, 'PPP')}
            disabled
            className="bg-gray-50 dark:bg-gray-800"
          />
        </div>
        <div>
          <Label>Status</Label>
          <Input
            value={task.status}
            disabled
            className="bg-gray-50 dark:bg-gray-800"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewTask;