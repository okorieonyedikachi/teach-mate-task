import React from "react";
import { TodoTable } from "./DataTable";

const TaskListContent = () => {
  return (
    <div className="bg-white shadow-lg w-11/12 mx-auto mt-6 px-6">
      <TodoTable />
    </div>
  );
};

export default TaskListContent;
