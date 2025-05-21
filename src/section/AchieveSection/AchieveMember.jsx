import React from "react";
import MemLogo from "../../assets/MemberLogo.png";
const AchieveMember = () => {
  return (
    <div className="flex items-center gap-3  e w-fit  px-3 ">
      <div className="">
        <img src={MemLogo} className="" alt="" />
      </div>
      <div className=" ">
        <h2 className="font-semibold  text-gray-600 tracking-widest text-[20px]">
          2,245,341
        </h2>
        <h4 className="text-[13px]">Members</h4>
      </div>
    </div>
  );
};

export default AchieveMember;
