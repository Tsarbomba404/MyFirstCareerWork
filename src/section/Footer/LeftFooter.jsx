import React from "react";
import { FaInstagram, FaGlobe, FaTwitter, FaYoutube } from "react-icons/fa";

const LeftFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-green-600 rounded-full" />
            <h1 className="text-xl font-bold">Nexcent</h1>
          </div>
          <p className="text-sm mb-2">Copyright © 2020 Landify UI Kit.</p>
          <p className="text-sm mb-4">All rights reserved</p>
          <div className="flex space-x-4 text-gray-400 text-lg">
            <FaInstagram className="hover:text-white" />
            <FaGlobe className="hover:text-white" />
            <FaTwitter className="hover:text-white" />
            <FaYoutube className="hover:text-white" />
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-white">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h2 className="font-semibold mb-4">Support</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-white">
                Help center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms of service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Legal
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Status
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="font-semibold mb-4">Stay up to date</h2>
          <div className="relative">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full py-2 pl-4 pr-10 rounded bg-gray-800 text-sm text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400 hover:text-white">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LeftFooter;
