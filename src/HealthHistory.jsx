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
        <h1 className="text-4xl font-bold text-emerald-800 mb-8 flex items-center justify-center whitespace-nowrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-9 h-9"
            style={{ verticalAlign: "middle" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          <span className="ml-3">Patient Health History</span>
        </h1>

        <ul className="space-y-4">
          {healthHistory.map((entry, i) => (
            <li key={i} className="border-b pb-3">
              <div className="font-semibold text-gray-800">
                Date: {entry.date}
              </div>
              <div className="text-sm text-gray-600">
                Diagnosis: {entry.diagnosis}
              </div>
              <div className="text-sm text-blue-600">
                Treatment: {entry.treatment}
              </div>
              <div className="text-sm text-gray-500">
                Doctor: {entry.doctor}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HealthHistory;
