import React from "react";
import comImg3 from "../../assets/comicon3.png";

const ClubCard = () => {
  return (
    <div>
      <div className="">
        <div className="bg-red-400 w-fit flex flex-col p-2.5 justify-center items-center gap-2  shadow-2xl transition-all duration-300 hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700">
          <div className="bg-amber-600 **:text-[12px] w-fit flex items-center justify-center flex-col p-2  ">
            <img src={comImg3} className="" alt="" />
            <p>
              Clubs And <br /> Groups
            </p>
          </div>
          <div className="w-fit text-[9px]">
            Our membership management <br /> software provides full automation
            of <br />
            membership renewals and payments
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubCard;
