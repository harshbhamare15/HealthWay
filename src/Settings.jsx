// src/Settings.jsx
import React from "react";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";

function Settings() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <Navbar />
      <LeftSidebar />
      <div className="bg-white p-6 w-160">
        <h1 className="text-2xl font-bold text-center mb-6">Settings</h1>
        <p className="text-center text-gray-500">Settings page content goes here.</p>
      </div>
    </div>
  );
}

export default Settings;
