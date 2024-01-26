import { CircleUserRound } from "lucide-react";
import React from "react";
import AddNewTask from "./AddNewTask";

const Header = () => {
  return (
    <div className="bg-white py-5 px-10 flex justify-between items-center shadow-md max-sm:px-4">
      <div>
        <h1 className="text-[#FDB515] text-3xl max-sm:text-xl">
          TeachMate <span className="text-secondary">AI</span>
        </h1>
      </div>
      <div className="flex gap-4 bg-bue-400 items-center">
        <div className=" flex mt-3 mx-auto">
          <AddNewTask />
        </div>
        <div className="bg-ed-600 flex items-center pt-4"><CircleUserRound size={30} className="" /></div>
      </div>
    </div>
  );
};

export default Header;
