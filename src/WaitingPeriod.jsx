import React from "react";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";

const WaitingPeriod = () => {
  const waitList = [
    { title: "OPD (Outpatient Department)", time: "15–30 minutes" },
    { title: "Emergency Cases", time: "Immediate (within 5–10 minutes)" },
    { title: "Walk-in Patients", time: "Seen in order of arrival" },
    { title: "Pre-booked Appointments", time: "Given priority" },
    {
      title: "Senior Citizens / Differently-abled",
      time: "Priority lane available",
    },
    {
      title: "Admission Waiting Time",
      time: "2–6 hours (based on bed availability)",
    },
    { title: "Lab Test Sample Collection", time: "Within 15 minutes" },
    { title: "Blood Test Reports", time: "2–4 hours" },
    { title: "X-ray/CT Scan Reports", time: "30–60 minutes" },
    { title: "MRI Reports", time: "2–3 hours" },
    { title: "Billing & Discharge Process", time: "1–3 hours" },
    { title: "Insurance Discharge", time: "Longer due to verification" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-1 p-18">
        <LeftSidebar />
        <main className="flex-1 p-6 sm:p-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-teal-800 mb-8 flex items-center justify-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 sm:w-10 sm:h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span>Hospital Waiting Periods</span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {waitList.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.time}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WaitingPeriod;
