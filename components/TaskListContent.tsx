import React from "react";
import { TodoTable } from "./DataTable";
import { useDispatch } from "react-redux";
import { taskActions } from "@/store/task/taskSlice";


const TaskListContent = () => {
  const dispatch = useDispatch();
  const handleDeleteClickInCell = (taskId: string) => {
    dispatch(taskActions.deleteTask(taskId));
  };
  return (
    <div className="bg-white shadow-lg w-11/12 mx-auto mt-6 px-6">
    <TodoTable/>
    </div>
  );
};

export default TaskListContent;
