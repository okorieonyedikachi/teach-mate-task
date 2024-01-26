import Header from "@/components/Header";
import TaskCard from "@/components/TaskCard";
import { Button } from "@/components/ui/button";
import AddNewTask from "@/components/AddNewTask"
import TaskListContent from "@/components/TaskListContent";

export default function Home() {
  return (
    <div className="bg-[#F7F9FF] w-screen h-screen flex flex-col">
      <Header/>
      <TaskCard/>
      <TaskListContent/>
    </div>
  );
}
