export const Status = {
  Todo: 'Todo',
  Ongoing: 'Ongoing',
  Completed: 'Completed',
};
type Status = (typeof Status)[keyof typeof Status];

export type Task = {
  id: string;
  title: string;
  description: string;
  date: string;
  status: Status;
};