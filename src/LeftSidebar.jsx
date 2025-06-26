import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const LeftSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    "Home",
    "Book Appointment",
    "Calendar",
    "Waiting Period",
    "Locate a Hospital",
    "Health History",
    "Medical Store",
  ];

  const routeMap = {
    Home: "/",
    "Book Appointment": "/hospital-distance",
    Calendar: "/calendar",
    "Waiting Period": "/waiting-period",
    "Locate a Hospital": "/locate-hospital",
    "Health History": "/health-history",
    "Medical Store": "/medical-store",
  };

  const handleItemClick = (item) => {
    const path = routeMap[item];
    if (path) {
      navigate(path);
      setIsOpen(false);
    }
  };

  return (
    <div className="flex">
      <button
        onClick={toggleSidebar}
        className="text-black text-2xl p-2 fixed z-50 top-4 left-4 rounded-md bg-white shadow-md cursor-pointer"
      >
        <FaBars />
      </button>

      <div
        className={`bg-white text-black h-screen fixed top-0 left-0 transition-all duration-300 ease-in-out z-40 ${
          isOpen ? "w-68" : "w-0 overflow-auto"
        }`}
      >
        <div className="pt-16 px-12 space-y-4 h-full overflow-y-auto">
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleItemClick(item)}
              className="hover:text-black hover:font-bold transition-all px-0 py-0 my-10 rounded-md cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
