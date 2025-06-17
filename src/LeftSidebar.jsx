import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const LeftSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    "Home",
    "AI Suggestions",
    "Calendar",
    "Waiting Period",
    "Doctor Rating",  
    "Locate a Hospital",
    "Hospital Distance For Patient",
    "Doctor Availability Tracker",
    "Health History",
    "Medical Store"
  ];

  return (
    <div className="flex">
      <button
        onClick={toggleSidebar}
        className="text-black text-2xl p-2 fixed z-50 top-4 left-4 rounded-md bg-white shadow-md cursor-pointer"
      >
        <FaBars />
      </button>

      {/* Sidebar */}
       <div
          className={`bg-white text-black h-screen fixed top-0 left-0 transition-all duration-300 ease-in-out z-40 ${
            isOpen ? 'w-68' : 'w-0 overflow-auto'
          }`}
        >
          <div className="pt-16 px-12 space-y-4 h-full overflow-y-auto">
            {menuItems.map((item, index) => (
              <div  
                key={index}
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
