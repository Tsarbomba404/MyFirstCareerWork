import React from "react";
import Logo1 from "../assets/client logo 1.png";
import Logo2 from "../assets/client logo 2.png";
import Logo3 from "../assets/client logo 3.png";
import Logo4 from "../assets/client logo 4.png";
import Logo5 from "../assets/client logo 5.png";
import Logo6 from "../assets/client logo 6.png";
import Logo7 from "../assets/client logo 7.png";
const Client = () => {
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h1 className="text-4xl text-neutral-400 font-semibold mb-2 ">
          Our Clients
        </h1>

        <h4 className="text-black font-light   ">
          We have been working with some Fortune 500+ clients
        </h4>

        <div className="my-12 flex flex-wrap justify-between items-center gap-8 mx-10">
          <img src={Logo1} alt="Logo 1" className="w-[40px] " />
          <img src={Logo2} alt="Logo 2" className="w-[40px] " />
          <img src={Logo3} alt="Logo 3" className=" " />
          <img src={Logo4} alt="Logo 4" className=" " />
          <img src={Logo5} alt="Logo 5" className=" " />
          <img src={Logo6} alt="Logo 6" className=" " />
          <img src={Logo7} alt="Logo 7" className="" />
        </div>
      </div>
    </div>
  );
};

export default Client;
