import React from "react";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";

const CommunityUpdates = () => {
  return (
    <div className="min-h-screen px-4 py-10 sm:px-6 bg-red-400 lg:px-20 xl:px-32 max-w-screen-xl mx-auto">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
          Caring is the new marketing
        </h1>
        <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more...
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 justify-items-center gap-30 sm:grid-cols-2 lg:grid-cols-3 sm:gap-12 lg:gap-16">
        <FirstCard />
        <SecondCard />
        <ThirdCard />
      </div>
    </div>
  );
};

export default CommunityUpdates;
