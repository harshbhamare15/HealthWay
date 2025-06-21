import React from "react";
import { FaMapMarkerAlt, FaRoad } from "react-icons/fa";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";

const hospitals = [
  {
    name: "Apollo Hospital",
    distance: "3.2 km",
    location: "Chennai, Tamil Nadu",
  },
  {
    name: "Fortis Hospital",
    distance: "5.8 km",
    location: "Mumbai, Maharashtra",
  },
  {
    name: "Shalby Hospital",
    distance: "2.4 km",
    location: "Ahmedabad, Gujarat",
  },
  {
    name: "CIMS Hospital",
    distance: "4.1 km",
    location: "Bengaluru, Karnataka",
  },
  {
    name: "Medanta – The Medicity",
    distance: "6.0 km",
    location: "Gurugram, Haryana",
  },
  {
    name: "AIIMS",
    distance: "1.9 km",
    location: "New Delhi",
  },
  {
    name: "Sunshine Hospital",
    distance: "3.5 km",
    location: "Hyderabad, Telangana",
  },
  {
    name: "KIMS Hospital",
    distance: "4.7 km",
    location: "Thiruvananthapuram, Kerala",
  }
];


const HospitalDistance = () => {
  return (
    <div>
        <Navbar/>
        <LeftSidebar/>
    <div className="min-h-screen bg-gray-100 py-25 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-teal-800">
          📍 Nearby Hospitals & Distances
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 cursor-pointer">
          {hospitals.map((hospital, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                {hospital.name}
              </h2>
              <p className="text-sm text-gray-600 flex items-center mb-1">
                <FaMapMarkerAlt className="mr-2 text-red-400" />
                {hospital.location}
              </p>
              <p className="text-sm text-rose-600 flex items-center">
                <FaRoad className="mr-2" />
                {hospital.distance}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default HospitalDistance;
