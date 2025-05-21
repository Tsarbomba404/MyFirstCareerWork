import React from "react";
import AchieveMember from "./AchieveMember";
import AchieveClub from "./AchieveClub";
import AchieveEvent from "./AchieveEvent";
import AchievePay from "./AchievePay";

const Achievement = () => {
  return (
    <div className="bg-[#F5F7FA] px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side: Heading */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Helping a local <br />
            <span className="text-green-500">business reinvent itself</span>
          </h1>
          <p className="mt-3 text-gray-600 font-light">
            We reached here with our hard work and dedication
          </p>
        </div>

        {/* Right Side: Stats */}
        <div className="grid grid-cols-2 gap-6 justify-items-center">
          <AchieveMember />
          <AchieveClub />
          <AchieveEvent />
          <AchievePay />
        </div>
      </div>
    </div>
  );
};

export default Achievement;
