import React from "react";

import illustrate from "../assets/Illustration.png";

const FirstSection = () => {
  return (
    <div className="flex flex-col items-center md:flex-row justify-center gap-20 bg-[#F5F7FA]">
      <div className="text-center ">
        {/* Typing Effect for H1 */}
        <>
          <style>
            {`
      @keyframes bounceIn {
        0% {
          transform: translateY(100%);
          opacity: 0;
        }
        60% {
          transform: translateY(-10%);
          opacity: 1;
        }
        80% {
          transform: translateY(5%);
        }
        100% {
          transform: translateY(0);
        }
      }

      .bounce-char {
        display: inline-block;
        animation: bounceIn 0.6s ease-out forwards;
      }
    `}
          </style>

          <div className="text-center mt-10 text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide">
            {/* First Line */}
            <div className="text-black">
              {"THANK YOU CHRISTIAN".split("").map((char, index) => (
                <span
                  key={index}
                  className="bounce-char"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>

            {/* Second Line */}
            <div className="text-green-600 mt-2">
              {"PETER".split("").map((char, index) => (
                <span
                  key={index}
                  className="bounce-char"
                  style={{ animationDelay: `${(index + 18) * 0.1}s` }}
                >
                  {char}
                </span>
              ))}
            </div>
          </div>
        </>

        {/* Normal H4 */}
        <h4 className="mt-4 font-light">
          Where to grow your business as a photographer <br /> site or social
          media?
        </h4>

        {/* Button */}
        <button className="bg-green-600  rounded p-2 w-32 text-white mt-4">
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
