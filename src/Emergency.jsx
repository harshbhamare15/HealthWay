import React from "react";
import LeftSidebar from "./LeftSidebar";
import Navbar from "./Navbar";

function Emergency() {
  return (
    <div className="flex">
      <Navbar/>
      <LeftSidebar />

      <div className="flex-grow flex flex-col items-center justify-center min-h-screen bg-white text-center px-4 ml-16">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          🚨 Emergency Help
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          In case of a medical emergency, click the button below to call now.
        </p>

        <a href="tel:9876543210">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md cursor-pointer">
            Call Emergency: +91-9876543210
          </button>
        </a>

        <p className="mt-6 text-sm text-gray-500">
          Available 24/7 — Stay calm and explain your situation clearly.
        </p>
      </div>
    </div>
  );
}

export default Emergency;
