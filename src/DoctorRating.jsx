import React from "react";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";

const DoctorRating = () => {
  const ratings = [
    {
      name: "Dr. A.K. Sharma",
      rating: "4.8 ★",
      specialty: "Cardiologist",
      about:
        "Dr. A.K. Sharma is a senior heart specialist with years of experience. He treats heart-related problems like high blood pressure, heart attacks, irregular heartbeat, and chest pain. Patients trust him for both regular checkups and advanced heart treatments. He is known for his polite nature and careful attention to every patient.",
    },
    {
      name: "Dr. Sneha Patel",
      rating: "4.6 ★",
      specialty: "Neurologist",
      about:
        "Dr. Sneha Patel is a brain and nerve doctor. She handles cases like migraines, epilepsy, paralysis, Parkinson’s disease, and nerve pain. Her patients like how she listens patiently and explains everything clearly. She is calm, friendly, and gives the right advice for complex neurological issues.",
    },
    {
      name: "Dr. Ravi Desai",
      rating: "4.9 ★",
      specialty: "Orthopedic",
      about:
        "Dr. Ravi Desai is an expert in treating bone and joint problems. He helps with fractures, arthritis, joint pain, and sports injuries. He also performs surgeries like knee or hip replacements. Known for his accurate diagnosis and friendly behavior, he is one of the most trusted orthopedic doctors.",
    },
    {
      name: "Dr. Nisha Verma",
      rating: "4.7 ★",
      specialty: "Dermatologist",
      about:
        "Dr. Nisha Verma is a skin specialist. She treats acne, skin infections, hair fall, allergies, and provides cosmetic treatments like laser and anti-aging therapy. Patients love her warm personality, modern treatment methods, and customized skincare advice for all age groups.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <LeftSidebar />
      <div className="max-w-4xl mx-auto p-6 pt-28">
        <h1 className="text-4xl font-bold text-center mb-10 text-teal-700">
          🩺 Doctor Ratings
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ratings.map((doctor, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {doctor.name}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                {doctor.specialty} –{" "}
                <span className="font-bold text-green-600">
                  {doctor.rating}
                </span>
              </p>
              <p className="text-gray-700 text-sm">{doctor.about}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorRating;
