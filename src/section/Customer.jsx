import React from "react";

import TeslaPicture from "../assets/Tesla.png";

import Logo1 from "../assets/client logo 1.png";
import Logo2 from "../assets/client logo 2.png";
import Logo3 from "../assets/client logo 3.png";
import Logo4 from "../assets/client logo 4.png";
import Logo5 from "../assets/client logo 5.png";
import Logo6 from "../assets/client logo 6.png";
import Logo7 from "../assets/client logo 7.png";

const Customer = () => {
  return (
    <div className="w-full bg-amber-200 px-4 py-10">
      <div className="grid grid-cols-1 bg-red-500 md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        <img
          src={TeslaPicture}
          alt="Illustration"
          className="w- max-w-md mx-auto"
        />

        <div className="flex flex-col gap-5 text-center  md:text-left items-center md:items-start">
          <h1 className="text-2xl font-bold text-gray-800">
            The unseen of spending three years at Pixelgrade
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <div className=" ">
            <h1>Tim Smith</h1>
            <h4>British Dragon Boat Racing Association</h4>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <img src={Logo1} alt="Logo 1" className=" " />
              <img src={Logo2} alt="Logo 2" className=" " />
              <img src={Logo3} alt="Logo 3" className=" " />
              <img src={Logo4} alt="Logo 4" className=" " />
              <img src={Logo5} alt="Logo 5" className=" " />
              <img src={Logo6} alt="Logo 6" className=" " />
              <img src={Logo7} alt="Logo 7" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
