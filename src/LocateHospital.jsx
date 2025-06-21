import React from "react";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";

const hospitals = [
  {
    name: "Apollo Hospital",
    location: "Ahmedabad, Gujarat",
    contact: "+91-9876543210",
    about:
      "Apollo Hospital is a top multi-specialty hospital offering advanced treatments in heart care, orthopedics, and emergency services.",
  },
  {
    name: "AIIMS",
    location: "New Delhi, India",
    contact: "+91-1123456789",
    about:
      "AIIMS is India’s most prestigious government hospital, providing expert medical services, education, and research facilities at low cost.",
  },
  {
    name: "Fortis Healthcare",
    location: "Mumbai, Maharashtra",
    contact: "+91-9988776655",
    about:
      "Fortis Healthcare is a leading private hospital known for world-class infrastructure and specialties like cardiology and oncology.",
  },
  {
    name: "Sunshine Hospital",
    location: "Hyderabad, Telangana",
    contact: "+91-9090909090",
    about:
      "Sunshine Hospital specializes in orthopedics and trauma care. It’s known for fast treatment and patient-friendly service.",
  },
];

const LocateHospital = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <LeftSidebar />
      <div className="max-w-5xl mx-auto px-6 pt-28">
        <h1 className="text-4xl font-bold text-center mb-10 text-teal-700">
          🏥 Locate a Hospital
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {hospitals.map((hospital, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {hospital.name}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                📍 {hospital.location}
              </p>
              <p className="text-sm text-blue-600 mb-2">
                ☎️ Contact: {hospital.contact}
              </p>
              <p className="text-gray-700 text-sm">{hospital.about}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocateHospital;
