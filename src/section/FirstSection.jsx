import React from "react";

import illustrate from "../assets/Illustration.png";

const FirstSection = () => {
  return (
    <div className="flex flex-col items-center md:flex-row justify-center gap-20 bg-amber-300">
      <div className="text-center ">
        {/* Typing Effect for H1 */}
        <div className="overflow-hidden border-r-2 border-yellow-400 whitespace-nowrap tracking-widest animate-typing inline-block">
          <h1>
            Lessons and insights <br />
            <span className="text-green-600">from 8 years</span>
          </h1>
        </div>

        {/* Normal H4 */}
        <h4 className="mt-4">
          Where to grow your business as a photographer <br /> site or social
          media?
        </h4>

        {/* Button */}
        <button className="bg-green-600 rounded p-2 w-32 text-white mt-4">
          Register
        </button>
      </div>

      {/* Image */}
      <div className="mt-6">
        <img src={illustrate} className="w-70 h-auto" alt="Illustration" />
      </div>
    </div>
  );
};

export default FirstSection;
