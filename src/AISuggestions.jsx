import React from "react";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";

const suggestions = [
  {
    title: "💧 Stay Hydrated",
    advice: "Drink at least 2-3 liters of water daily to maintain healthy organ function.",
  },
  {
    title: "🥗 Balanced Diet",
    advice: "Include fruits, vegetables, whole grains, and lean proteins in your meals.",
  },
  {
    title: "🏃‍♂️ Daily Exercise",
    advice: "30 minutes of walking, jogging, or yoga helps improve overall fitness.",
  },
  {
    title: "😴 Proper Sleep",
    advice: "Ensure 7–8 hours of uninterrupted sleep every night for recovery and mental health.",
  },
  {
    title: "🧘 Stress Management",
    advice: "Practice meditation, deep breathing, or mindfulness to reduce anxiety.",
  },
  {
    title: "🩺 Regular Checkups",
    advice: "Schedule regular health checkups and screenings to detect issues early.",
  },
];

const AISuggestions = () => {
  return (
    <div>
        <Navbar/>
        <LeftSidebar/>
    <div className="max-w-4xl mx-auto p-28 bg-white shadow-md rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-teal-600">
        🤖 AI Health Suggestions
      </h1>
      <ul className="space-y-6">
        {suggestions.map((item, i) => (
          <li key={i} className="border-l-4 border-teal-500 pl-4">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-700">{item.advice}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default AISuggestions;
