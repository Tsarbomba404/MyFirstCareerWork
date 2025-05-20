import React from "react";
import up1 from "../../assets/update1.jpg";

const FirstCard = () => {
  return (
    <div className="relative w-[256.15px] h-[199.08px] bg-red-600 hover:-translate-y-5 transition-all duration-500">
      <img src={up1} className="w-full h-full object-cover rounded" alt="" />
      <div className="text-center absolute top-1/1 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[150px] bg-[#F5F7FA] bg-opacity-75 p-4 rounded-md shadow-xl">
        {/* Your text content here */}

        <p className="text-sm ">
          {" "}
          Creating Streamlined Safeguarding Processes with OneRen
        </p>
        <button className="mt-2 text-green-500 font-semibold text-center">
          Readmore →
        </button>
      </div>{" "}
    </div>
  );
};

export default FirstCard;
