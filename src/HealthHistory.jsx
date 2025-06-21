import React from "react";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";

const healthHistory = [
  {
    date: "2024-12-15",
    diagnosis: "Diabetes Type 2",
    treatment: "Insulin therapy and diet control",
    doctor: "Dr. A.K. Sharma",
  },
  {
    date: "2023-08-10",
    diagnosis: "Fracture – Left Arm",
    treatment: "Surgery and physiotherapy",
    doctor: "Dr. Ravi Desai",
  },
  {
    date: "2022-06-01",
    diagnosis: "High Blood Pressure",
    treatment: "Lifestyle changes and medication",
    doctor: "Dr. Sneha Patel",
  },
  {
    date: "2021-11-20",
    diagnosis: "Skin Allergy",
    treatment: "Antihistamines and ointments",
    doctor: "Dr. Nisha Verma",
  },
];

const HealthHistory = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <LeftSidebar />
      <div className="max-w-4xl mx-auto p-6 pt-28">
        <h1 className="text-4xl font-bold text-center mb-8 text-emerald-800">
          📝 Patient Health History
        </h1>
        <ul className="space-y-4">
          {healthHistory.map((entry, i) => (
            <li key={i} className="border-b pb-3">
              <div className="font-semibold text-gray-800">Date: {entry.date}</div>
              <div className="text-sm text-gray-600">Diagnosis: {entry.diagnosis}</div>
              <div className="text-sm text-blue-600">Treatment: {entry.treatment}</div>
              <div className="text-sm text-gray-500">Doctor: {entry.doctor}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HealthHistory;


