// src/Profile.jsx
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";

function Profile() {
  const user = {
    name: "User Name",
    dob: "-----------------------",
    email: "-----------------------",
    phone: "-----------------------",
    gender: "-----------------------",
  };

  // Button handlers (optional now)
  const handleEdit = () => alert("Edit Profile clicked");
  const handleSettings = () => alert("Settings clicked");
  const handleLogout = () => alert("Logged out");

  return (

    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
        <Navbar/>
        <LeftSidebar/>
      <div className="bg-white p-6 sm:p-8 w-160">
        {/* Profile Icon */}
        <div className="flex justify-center mb-4">
          <FaUserCircle className="text-gray-500" size={64} />
        </div>

        {/* Name Heading */}
        <h1 className="text-3xl font-bold text-Black text-center mb-6">
          {user.name}
        </h1>

        {/* Profile Details */}
        <div className="text-gray-700 text-base space-y-2">
          <p><strong>Date of Birth:</strong> {user.dob}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col space-y-3">
          <button
            onClick={handleEdit}
            className="w-full bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800 transition cursor-pointer"
          >
            Edit Profile
          </button>
          <button
            onClick={handleSettings}
            className="w-full bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800 transition cursor-pointer"
          >
            Settings
          </button>
          <button
            onClick={handleLogout}
            className="w-full bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800 transition cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
