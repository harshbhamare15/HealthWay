import React from "react";
import { FaUserMd, FaClock, FaTimesCircle, FaCheckCircle, FaLongArrowAltLeft } from "react-icons/fa";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";

const doctors = [
  {
    name: "Dr. A.K. Sharma",
    specialty: "Cardiologist",
    available: true,
    time: "9:00 AM – 1:00 PM",
  },
  {
    name: "Dr. Sneha Patel",
    specialty: "Neurologist",
    available: false,
    time: "Not Available Today",
  },
  {
    name: "Dr. Ravi Desai",
    specialty: "Orthopedic",
    available: true,
    time: "11:00 AM – 4:00 PM",
  },
  {
    name: "Dr. Nisha Verma",
    specialty: "Dermatologist",
    available: true,
    time: "10:30 AM – 3:30 PM",
  },
];

const DoctorAvailability = () => {
  return (
    <div>
       <Navbar/>
       <LeftSidebar/>
    <div className="min-h-screen bg-gray-100 py-28 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-teal-800">
          🩺 Doctor Availability Tracker
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 cursor-pointer">
          {doctors.map((doc, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold text-gray-800 flex items-center mb-1">
                <FaUserMd className="mr-2 text-indigo-500" />
                {doc.name}
              </h2>
              <p className="text-sm text-gray-600 mb-1">{doc.specialty}</p>
              <p
                className={`text-sm flex items-center ${
                  doc.available ? "text-green-600" : "text-red-500"
                }`}
              >
                {doc.available ? (
                  <>
                    <FaCheckCircle className="mr-2" /> Available –{" "}
                    <span className="ml-1">{doc.time}</span>
                  </>
                ) : (
                  <>
                    <FaTimesCircle className="mr-2" /> Not Available
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default DoctorAvailability;
