import { CircleUserRound} from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="bg-white py-5 px-10 flex justify-between items-center">
      <div>
        <h1 className="text-[#FDB515] text-3xl">
          TeachMate <span className="text-secondary">AI</span>
        </h1>
      </div>
      <div><CircleUserRound size={40} className="w-full"/></div>
    </div>
  );
};

export default Header;
