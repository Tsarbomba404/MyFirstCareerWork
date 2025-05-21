import React from "react";
import comImg1 from "../../assets/comicon1.png";

const MemberCard = () => {
  return (
    <div>
      <div className="">
        <div className="bg-white w-fit flex flex-col p-2.5 justify-center items-center gap-2  shadow-md transition-all duration-300 hover:-translate-y-5 hover:border-b-4 hover:border-[#F5F7FA]">
          <div className=" **:text-[18px] w-fit flex items-center justify-center flex-col p-2  ">
            <img src={comImg1} className="  " alt="" />
            <p className="font-medium text-8xl">
              Membership <br /> Organisations
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

export default MemberCard;
