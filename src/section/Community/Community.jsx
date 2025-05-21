import React from "react";
import MemberCard from "../Community/MemberCard";
import NationCard from "./NationCard";
import ClubCard from "./ClubCard";
const Community = () => {
  return (
    <div className="bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-neutral-400">
          Manage your entire community in a single system
        </h1>
        <h4 className="mt-2">Who is Nextcent suitable for?</h4>

        <div className=" grid place-items-center grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-10 mt-10">
          <MemberCard />
          <NationCard />
          <ClubCard />
        </div>
      </div>
    </div>
  );
};

export default Community;
