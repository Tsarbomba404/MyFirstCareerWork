import React from "react";
import paymentLogo from "../../assets/PaymentLogo.png";
const AchievePay = () => {
  return (
    <div className="flex items-center gap-3  w-fit  px-3 ">
      <div className="">
        <img src={paymentLogo} className="" alt="" />
      </div>
      <div className=" ">
        <h2 className="font-semibold  text-gray-600 tracking-widest text-[20px]">
          1,926,436
        </h2>
        <h4 className="text-[13px]">Payments</h4>
      </div>
    </div>
  );
};

export default AchievePay;
