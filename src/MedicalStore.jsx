import React, { useState } from "react";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";

const medicines = [
  {
    name: "Paracetamol 500mg",
    category: "Pain Relief / Fever",
    availability: "In Stock",
    price: "₹25 / strip",
  },
  {
    name: "Amoxicillin 250mg",
    category: "Antibiotic",
    availability: "Limited Stock",
    price: "₹58 / strip",
  },
  {
    name: "Cetirizine",
    category: "Anti-Allergic",
    availability: "In Stock",
    price: "₹15 / strip",
  },
  {
    name: "Metformin 500mg",
    category: "Diabetes",
    availability: "Out of Stock",
    price: "₹40 / strip",
  },
];

const MedicalStore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [givenMedicines, setGivenMedicines] = useState([]);

  const filteredMedicines = medicines.filter((med) =>
    med.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const giveMedicineToPatient = (med) => {
    if (!givenMedicines.find((m) => m.name === med.name)) {
      setGivenMedicines([...givenMedicines, med]);
    }
  };

  return (
    <div>
      <Navbar />
      <LeftSidebar />
      <div className="min-h-screen bg-gray-100 p-28">
        <h1 className="text-4xl font-bold text-center mb-6 text-teal-800">
          💊 Medical Store
        </h1>

        {/* Search Box */}
        <input
          type="text"
          placeholder="Search medicine by name..."
          className="w-full p-2 mb-6 border border-gray-300 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Search Results */}
        {searchTerm && (
          <>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              🔍 Search Results:
            </h2>
            {filteredMedicines.length > 0 ? (
              <ul className="space-y-4">
                {filteredMedicines.map((med, i) => (
                  <li
                    key={i}
                    className="border-b pb-3 flex justify-between items-start"
                  >
                    <div>
                      <div className="font-semibold text-gray-800">
                        {med.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        Category: {med.category}
                      </div>
                      <div
                        className={`text-sm ${
                          med.availability === "Out of Stock"
                            ? "text-red-500"
                            : med.availability === "Limited Stock"
                            ? "text-yellow-500"
                            : "text-green-600"
                        }`}
                      >
                        {med.availability}
                      </div>
                      <div className="text-sm text-blue-600">
                        Price: {med.price}
                      </div>
                    </div>
                    <button
                      onClick={() => giveMedicineToPatient(med)}
                      disabled={med.availability === "Out of Stock"}
                      className={`px-4 py-1 cursor-pointer rounded font-medium ${
                        med.availability === "Out of Stock"
                          ? "bg-gray-400 text-white cursor-not-allowed"
                          : "bg-green-600 text-white hover:bg-green-700"
                      }`}
                    >
                      {med.availability === "Out of Stock"
                        ? "Not Available"
                        : "Give to Patient"}
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-red-500">No medicine found.</p>
            )}
          </>
        )}

        {/* Given Medicines */}
        {givenMedicines.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              ✅ Medicines Given to Patient:
            </h2>
            <ul className="space-y-3">
              {givenMedicines.map((med, i) => (
                <li key={i} className="border p-3 rounded text-sm bg-gray-50">
                  <span className="font-bold text-gray-800">{med.name}</span> –{" "}
                  <span className="text-gray-600">{med.category}</span> –{" "}
                  <span className="text-blue-600">{med.price}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Full List */}
        <h2 className="text-3xl font-semibold text-gray-700 mt-10 mb-4">
          📋 All Medicines
        </h2>
        <ul className="space-y-4">
          {medicines.map((med, i) => (
            <li key={i} className="border-b pb-3">
              <div className="font-semibold text-gray-800">{med.name}</div>
              <div className="text-sm text-gray-600">
                Category: {med.category}
              </div>
              <div
                className={`text-sm ${
                  med.availability === "Out of Stock"
                    ? "text-red-500"
                    : med.availability === "Limited Stock"
                    ? "text-yellow-500"
                    : "text-green-600"
                }`}
              >
                {med.availability}
              </div>
              <div className="text-sm text-blue-600">Price: {med.price}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MedicalStore;

