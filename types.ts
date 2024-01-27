export const Status = {
    Todo : "Todo",
    Ongoing : "Ongoing",
    Completed : "Completed"
} 
type Status = typeof Status[keyof typeof Status]

export type Task = {
  title: string
  description: string
  date: Date
  status: Status
}
