import React, { useState } from "react";
import HeaderLogo from "../assets/Nexlogo.png";
import RightArrow from "../assets/Vector.png";
import MenuLogo from "../assets/MenuBurger.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white px-7 py-4 w-full top-0 sticky z-30">
      {/* Main flex container */}
      <div className="flex justify-between items-center">
        {/* Left side: Logo */}
        <div className="flex gap-2 items-center">
          <img src={HeaderLogo} alt="Logo" className="w-8 h-auto" />
          <h3 className="text-black font-bold text-lg">Nexcent</h3>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-8 ">
          {/* Desktop Menu (hidden on small screens) */}
          <ul className="hidden md:flex gap-6 text-black text-sm font-medium">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">Features</li>
            <li className="hover:text-gray-300 cursor-pointer">Community</li>
            <li className="hover:text-gray-300 cursor-pointer">Blog</li>
            <li className="hover:text-gray-300 cursor-pointer">Pricing</li>
          </ul>

          {/* Desktop "Register Now" Button (hidden on small screens) */}
          <div className="hidden md:flex items-center bg-green-600 px-4 py-2 rounded-md gap-2 cursor-pointer">
            <h3 className="text-white text-sm">Register Now</h3>
            <img src={RightArrow} alt="Arrow" className="w-3 h-auto" />
          </div>

          {/* Mobile Menu Icon (hidden on large screens) */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <img src={MenuLogo} alt="Menu" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div className="  md:hidden mt-4 flex flex-col gap-4 text-white">
          <ul className="flex flex-col gap-3">
            <li className=" hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">Features</li>
            <li className="hover:text-gray-300 cursor-pointer">Community</li>
            <li className="hover:text-gray-300 cursor-pointer">Blog</li>
            <li className="hover:text-gray-300 cursor-pointer">Pricing</li>
          </ul>

          {/* Mobile "Register Now" */}
          <div className="flex items-center bg-green-600 px-4 py-2 rounded-md gap-2 w-max cursor-pointer">
            <h3 className="text-white text-sm">Register Now</h3>
            <img src={RightArrow} alt="Arrow" className="w-3 h-auto" />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
