import React from "react";
import up2 from "../../assets/update2.jpg";

const SecondCard = () => {
  return (
    <div className="relative w-[256.15px] h-[199.08px] bg-red-600 hover:-translate-y-5 transition-all duration-500">
      <img src={up2} className="w-full h-full object-cover" alt="" />
      <div className="text-center absolute top-1/1 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[150px] bg-[#F5F7FA] bg-opacity-75 p-4 rounded-md shadow-xl">
        {/* Your text content here */}

        <p className="text-sm ">
          {" "}
          What are your safeguarding responsibilities and how can you manage
          them?
        </p>
        <button className="mt-2 text-green-500 font-semibold text-center">
          Readmore →
        </button>
      </div>
    </div>
  );
};

export default SecondCard;
