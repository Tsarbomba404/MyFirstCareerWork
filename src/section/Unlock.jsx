import React from "react";
import oll from "../assets/pana.png";

const Unlock = () => {
  return (
    <div className="w-full bg-amber-200 px-4 py-10">
      <div className="grid grid-cols-1 bg-red-500 md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        <img src={oll} alt="Illustration" className="w- max-w-md mx-auto" />

        <div className="flex flex-col gap-5 text-center md:text-left items-center md:items-start">
          <h1 className="text-2xl font-bold text-gray-800">
            The unseen of spending three years at Pixelgrade
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Unlock;
