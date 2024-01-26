"use client"
import { taskCard } from "@/data";
import React from "react";



const TaskCard = () => {
  return (
    <div className=" w-10/12 mt-6 mx-auto flex justify-between gap-7">
      {taskCard.map((item, i) => (
        <div key={i} className="w-2/12 h-14 text-lg rounded-xl shadow-md bg-white flex items-center justify-center gap-3 max-sm:text-sm max-sm:h-12">
          {<item.icon/>}
          {item.title}<span className="text-red-500">{"(4)"}</span>
        </div>
      ))}
    </div>
  );
};

export default TaskCard;
