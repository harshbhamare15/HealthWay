import React from "react";
import { FaUserCircle } from "react-icons/fa";
import healthwayLogo from "./healthway.jpg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center bg-teal-900 py-4 px-6 text-white shadow-md">
      
      {/* Left: Logo + HealthWay Name */}
      <div className="flex items-center space-x-0 mx-15">
        <div>
          <img
            src={healthwayLogo}
            alt="HealthWay Logo"
            className="h-10 w-10 object-cover rounded-full"
          />
        </div>
        <span className="font-bold text-3xl">HealthWay</span>
      </div>

      {/* Right: Buttons + Profile */}
      <div className="flex items-center gap-6">
        <div className="flex space-x-4">
          <button className="bg-white hover:bg-sky-100 px-4 py-2 text-sm hover:font-bold text-black rounded-full cursor-pointer">
            Sign in
          </button>
          <button className="bg-red-600 hover:bg-red-700 px-4 py-2 text-sm hover:font-bold text-white rounded-full cursor-pointer">
            Emergency
          </button>
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <FaUserCircle
            size={32}
            className="text-white hover:text-sky-100 transition duration-300"
          />
          <span className="text-xs font-bold text-white">Unknown</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
