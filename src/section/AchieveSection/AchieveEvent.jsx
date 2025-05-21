import React from "react";
import EventLogo from "../../assets/EventLogo.png";
const AchieveEvent = () => {
  return (
    <div className="flex items-center gap-3   w-fit  px-3 ">
      <div className="">
        <img src={EventLogo} className="" alt="" />
      </div>
      <div className=" ">
        <h2 className="font-semibold  text-gray-600 tracking-widest text-[20px]">
          828,867
        </h2>
        <h4 className="text-[13px]">Events Bookings</h4>
      </div>
    </div>
  );
};

export default AchieveEvent;
