import React from "react";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";

const WaitingPeriod = () => {
  const waitList = [
    { title: "OPD (Outpatient Department)", time: "15–30 minutes" },
    { title: "Emergency Cases", time: "Immediate (within 5–10 minutes)" },
    { title: "Walk-in Patients", time: "Seen in order of arrival" },
    { title: "Pre-booked Appointments", time: "Given priority" },
    { title: "Senior Citizens / Differently-abled", time: "Priority lane available" },
    { title: "Admission Waiting Time", time: "2–6 hours (based on bed availability)" },
    { title: "Lab Test Sample Collection", time: "Within 15 minutes" },
    { title: "Blood Test Reports", time: "2–4 hours" },
    { title: "X-ray/CT Scan Reports", time: "30–60 minutes" },
    { title: "MRI Reports", time: "2–3 hours" },
    { title: "Billing & Discharge Process", time: "1–3 hours" },
    { title: "Insurance Discharge", time: "Longer due to verification" },
  ];

  return (
    <div>
        <Navbar/>
        <LeftSidebar/>
      <div className="max-w-2xl mx-auto p-15 mt-8">
      <h1 className="text-4xl font-bold text-center mb-6 text-teal-800">🕒 Hospital Waiting Periods</h1>
      <ul className="space-y-5 ">
        {waitList.map((item, i) => (
          <li key={i} className="border-b pb-4">
            <strong>{item.title}:</strong> {item.time}
          </li>
        ))}
      </ul>
    </div>
    </div>
    
  );
};

export default WaitingPeriod;
