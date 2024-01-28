'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Status, Task } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { DatePicker } from './DatePicker';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Textarea } from './ui/textarea';

/**
 * Use a timestamp or any other method to generate a unique ID
 */
export const generateUniqueId = (): string => {
  return `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
};

const formSchema = z.object({
  id:z.string(),
  title: z.string().min(2, { message: 'Must contain at least 2 characters.' }),
  description: z
    .string()
    .min(2, { message: 'Must contain at least 2 characters.' }),
  date: z.string({ required_error: 'Select a date' }).refine(value => {
    if (!value) return false;
    const date = new Date(value);
    return !isNaN(date.getTime());
  }),
  status: z.enum([Status.Todo, Status.Ongoing, Status.Completed]),
});

type Props = {
  task?: Task;
  children: React.ReactNode;
  submitAction: (values: Task) => void;
};

export function TaskModal(props: Props) {
  const { task, children, submitAction } = props;
  const [open, setOpen] = useState(false);

  const form = useForm<Task>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: task?.id ?? generateUniqueId(),
      title: task?.title || '',
      description: task?.description || '',
      date: task?.date,
      status: task?.status || Status.Todo,
    },
  });

  return (
    <Dialog
      open={open}
      onOpenChange={o => {
        setOpen(o);
        if (!o) form.reset();
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex">
          <DialogTitle>Add New Task</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(values => {
              submitAction({
                ...values, 
                id:task?.id || generateUniqueId(),
              });
              form.reset()
              setOpen(false);
              
              
            })}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Build UI" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <DatePicker
                      selected={field.value}
                      onSelect={value => {
                        field.onChange(value?.toISOString());
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="">
                          <SelectValue placeholder="Select a status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          {Object.values(Status).map(status => (
                            <SelectItem value={status} key={status}>
                              {status}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormItem>
                );
              }}
            />

            <DialogFooter>
              <div className="w-[120px] rounded-xl">
                <Button type="submit" variant="secondary">
                  {`${task ? 'Edit' : 'Create'} Task`}
                </Button>
              </div>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default TaskModal;