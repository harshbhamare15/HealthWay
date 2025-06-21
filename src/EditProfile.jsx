// src/EditProfile.jsx
import React from "react";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";

function EditProfile() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <Navbar />
      <LeftSidebar />
      <div className="bg-white p-6 w-160">
        <h1 className="text-2xl font-bold text-center mb-6">Edit Profile</h1>
        <p className="text-center text-gray-500">This is your Edit Profile page. You can add form here later.</p>
      </div>
    </div>
  );
}

export default EditProfile;
