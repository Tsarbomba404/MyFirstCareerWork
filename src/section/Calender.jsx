import React from "react";
import pana from "../assets/pana.png";
const Calender = () => {
  return (
    <div className="w-full  px-4 py-10">
      <div className="grid grid-cols-1  md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        <img src={pana} alt="Illustration" className="w- max-w-md mx-auto" />

        <div className="flex flex-col gap-5 text-center md:text-left items-center md:items-start">
          <h1 className="text-2xl font-bold text-gray-800">
            How to design your site footer like we did
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calender;
