import React from "react";
import comImg2 from "../../assets/comicon2.png";

const NationCard = () => {
  return (
    <div>
      <div className="">
        <div className=" w-fit flex flex-col p-2.5 justify-center items-center gap-2  shadow-md 00 transition-all duration-300 hover:-translate-y-5 hover:border-b-4 hover:border-[#F5F7FA]">
          <div className=" **:text-[18px] w-fit flex items-center justify-center flex-col p-2  ">
            <img src={comImg2} className="" alt="" />
            <p className="font-medium">
              National <br /> Associations
            </p>
          </div>
          <div className="w-fit text-[13px]">
            Our membership management <br /> software provides full automation
            of <br />
            membership renewals and payments
          </div>
        </div>
      </div>
    </div>
  );
};

export default NationCard;
