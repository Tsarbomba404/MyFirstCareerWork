import React from "react";
import ClubLogo from "../../assets/ClubLogo.png";
const AchieveClub = () => {
  return (
    <div className="flex items-center gap-3   w-fit  px-3 ">
      <div className="">
        <img src={ClubLogo} className="" alt="" />
      </div>
      <div className=" ">
        <h2 className="font-semibold  text-gray-600 tracking-widest text-[20px]">
          46,328
        </h2>
        <h4 className="text-[13px]">Clubs</h4>
      </div>
    </div>
  );
};

export default AchieveClub;
