import React, { useState } from "react";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";
import {
  ClipboardDocumentListIcon,
  CubeIcon,
  FireIcon,
  BeakerIcon,
  HeartIcon,
  CloudIcon,
  ShieldCheckIcon,
  EyeDropperIcon,
  BugAntIcon,
  BoltIcon,
  MinusIcon,
  PlusIcon
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const categoryIcons = {
  "Pain Relief / Fever": FireIcon,
  Antibiotic: BeakerIcon,
  "Pain Relief / Anti-inflammatory": BoltIcon,
  "Anti-Allergic": ShieldCheckIcon,
  "Anti-Allergic / Respiratory": CloudIcon,
  Diabetes: CubeIcon,
  Hypertension: HeartIcon,
  Cholesterol: HeartIcon,
  "Asthma / Respiratory": CloudIcon,
  "Acidity / GERD": EyeDropperIcon,
  Antacid: EyeDropperIcon,
  "Dermatology / Antifungal": BeakerIcon,
  "Dermatology / Anti-inflammatory": BoltIcon,
  "Antiviral / Flu": BugAntIcon,
  default: CubeIcon
};

const medicines = [
  { name: "Paracetamol 500mg", category: "Pain Relief / Fever", availability: "In Stock", price: "₹25 / strip" },
  { name: "Amoxicillin 250mg", category: "Antibiotic", availability: "Limited Stock", price: "₹58 / strip" },
  { name: "Ibuprofen 400mg", category: "Pain Relief / Anti-inflammatory", availability: "In Stock", price: "₹30 / strip" },
  { name: "Cetirizine", category: "Anti-Allergic", availability: "In Stock", price: "₹15 / strip" },
  { name: "Metformin 500mg", category: "Diabetes", availability: "Out of Stock", price: "₹40 / strip" },
  { name: "Amlodipine 5mg", category: "Hypertension", availability: "In Stock", price: "₹22 / strip" },
  { name: "Losartan 50mg", category: "Hypertension", availability: "Limited Stock", price: "₹24 / strip" },
  { name: "Atorvastatin 10mg", category: "Cholesterol", availability: "In Stock", price: "₹33 / strip" },
  { name: "Salbutamol Inhaler", category: "Asthma / Respiratory", availability: "In Stock", price: "₹120 / unit" },
  { name: "Pantoprazole 40mg", category: "Acidity / GERD", availability: "In Stock", price: "₹35 / strip" },
  { name: "Ranitidine 150mg", category: "Antacid", availability: "Limited Stock", price: "₹18 / strip" },
  { name: "Loratadine", category: "Anti-Allergic", availability: "In Stock", price: "₹20 / strip" },
  { name: "Clotrimazole Cream", category: "Dermatology / Antifungal", availability: "In Stock", price: "₹45 / tube" },
  { name: "Hydrocortisone Cream", category: "Dermatology / Anti-inflammatory", availability: "Limited Stock", price: "₹60 / tube" },
  { name: "Oseltamivir 75mg", category: "Antiviral / Flu", availability: "Out of Stock", price: "₹130 / strip" },
  { name: "Dolo 650", category: "Pain Relief / Fever", availability: "In Stock", price: "₹28 / strip" },
  { name: "Azithromycin 500mg", category: "Antibiotic", availability: "Limited Stock", price: "₹70 / strip" },
  { name: "Montelukast", category: "Anti-Allergic / Respiratory", availability: "In Stock", price: "₹55 / strip" },
  { name: "Glimepiride 1mg", category: "Diabetes", availability: "In Stock", price: "₹32 / strip" },
  { name: "Telmisartan 40mg", category: "Hypertension", availability: "In Stock", price: "₹42 / strip" },
  { name: "Rabeprazole 20mg", category: "Acidity / GERD", availability: "In Stock", price: "₹36 / strip" },
  { name: "Levocetirizine", category: "Anti-Allergic", availability: "In Stock", price: "₹25 / strip" },
  { name: "Thyroxine 50mcg", category: "Thyroid", availability: "In Stock", price: "₹18 / strip" },
  { name: "Calcium Carbonate", category: "Bone Health", availability: "In Stock", price: "₹22 / strip" },
  { name: "Vitamin D3 60K", category: "Bone Health", availability: "In Stock", price: "₹55 / tablet" },
  { name: "Iron Folic Acid", category: "Supplements", availability: "Limited Stock", price: "₹30 / strip" },
  { name: "Cetirizine Syrup", category: "Anti-Allergic", availability: "In Stock", price: "₹25 / bottle" },
  { name: "Chlorpheniramine Maleate", category: "Anti-Allergic", availability: "In Stock", price: "₹20 / strip" },
  { name: "Naproxen 250mg", category: "Pain Relief / Anti-inflammatory", availability: "In Stock", price: "₹34 / strip" },
  { name: "Domperidone 10mg", category: "Digestive Health", availability: "In Stock", price: "₹28 / strip" },
  { name: "Ondansetron 4mg", category: "Digestive Health", availability: "Limited Stock", price: "₹42 / strip" },
  { name: "Cefixime 200mg", category: "Antibiotic", availability: "Out of Stock", price: "₹58 / strip" },
  { name: "Erythromycin", category: "Antibiotic", availability: "In Stock", price: "₹52 / strip" },
  { name: "Albuterol Inhaler", category: "Asthma / Respiratory", availability: "In Stock", price: "₹135 / unit" },
  { name: "Itraconazole", category: "Dermatology / Antifungal", availability: "Limited Stock", price: "₹95 / strip" },
  { name: "Fluconazole", category: "Dermatology / Antifungal", availability: "In Stock", price: "₹48 / strip" },
  { name: "Isosorbide Mononitrate", category: "Cardiac", availability: "In Stock", price: "₹66 / strip" },
  { name: "Aspirin 75mg", category: "Cardiac", availability: "In Stock", price: "₹18 / strip" },
  { name: "Furosemide", category: "Diuretic", availability: "Limited Stock", price: "₹25 / strip" },
  { name: "Metronidazole", category: "Antibiotic", availability: "In Stock", price: "₹20 / strip" }
];

const PAGE_SIZE = 10;

const MedicalStore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [givenMedicines, setGivenMedicines] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = medicines.filter((med) =>
    (med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (categoryFilter ? med.category === categoryFilter : true)
  );

  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);

  const giveMedicineToPatient = (med) => {
    setGivenMedicines((prev) => {
      const existing = prev.find((m) => m.name === med.name);
      if (existing) {
        return prev.map((m) =>
          m.name === med.name ? { ...m, quantity: m.quantity + 1 } : m
        );
      } else {
        return [...prev, { ...med, quantity: 1 }];
      }
    });
  };

  const removeMedicine = (med) => {
    setGivenMedicines((prev) => {
      const existing = prev.find((m) => m.name === med.name);
      if (existing.quantity === 1) {
        return prev.filter((m) => m.name !== med.name);
      } else {
        return prev.map((m) =>
          m.name === med.name ? { ...m, quantity: m.quantity - 1 } : m
        );
      }
    });
  };

  const uniqueCategories = [...new Set(medicines.map((m) => m.category))];

  return (
    <div>
      <Navbar />
      <LeftSidebar />
      <div className="min-h-screen bg-gray-100 p-28">
        <h1 className="text-4xl font-bold text-center mb-6 text-teal-800 flex justify-center items-center gap-2">
          <ClipboardDocumentListIcon className="h-8 w-8 text-teal-800" />
          Medical Store
        </h1>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by name or category..."
            className="flex-1 p-2 border border-gray-300 rounded"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
          <select
            className="p-2 border border-gray-300 rounded"
            value={categoryFilter}
            onChange={(e) => {
              setCategoryFilter(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="">All Categories</option>
            {uniqueCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <ul className="space-y-4">
          {paginated.map((med, i) => {
            const Icon = categoryIcons[med.category] || categoryIcons.default;
            return (
              <li key={i} className="border-b pb-3 flex justify-between items-start">
                <div>
                  <div className="font-semibold text-gray-800 flex items-center gap-3">
                    <div className="p-2 bg-white rounded-full border shadow">
                      <Icon className="h-10 w-10 text-teal-600" />
                    </div>
                    {med.name}
                  </div>
                  <div className="text-sm text-gray-600">Category: {med.category}</div>
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
                </div>
                <button
                  onClick={() => giveMedicineToPatient(med)}
                  disabled={med.availability === "Out of Stock"}
                  className={`px-4 py-1 rounded cursor-pointer font-medium ${
                    med.availability === "Out of Stock"
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                >
                  {med.availability === "Out of Stock" ? "Not Available" : "Give to Patient"}
                </button>
              </li>
            );
          })}
        </ul>

        {totalPages > 1 && (
          <div className="mt-6 flex justify-center gap-2 flex-wrap">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-teal-600 text-white"
                    : "bg-white border text-teal-600"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

        {givenMedicines.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-green-700 mb-4 flex items-center gap-2">
              <CheckCircleIcon className="h-6 w-6 text-green-600" />
              Medicines Given to Patient:
            </h2>
            <ul className="space-y-3">
              {givenMedicines.map((med, i) => (
                <li
                  key={i}
                  className="border p-3 rounded text-sm bg-gray-50 flex justify-between items-center"
                >
                  <span>
                    <span className="font-bold text-gray-800">{med.name}</span> –{" "}
                    <span className="text-gray-600">{med.category}</span> –{" "}
                    <span className="text-blue-600">{med.price}</span>
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => removeMedicine(med)}
                      className="bg-gray-200 p-1 rounded hover:bg-gray-300"
                    >
                      <MinusIcon className="h-4 w-4 text-gray-800" />
                    </button>
                    <span className="px-2 text-gray-800 font-medium">
                      {med.quantity}
                    </span>
                    <button
                      onClick={() => giveMedicineToPatient(med)}
                      className="bg-gray-200 p-1 rounded hover:bg-gray-300"
                    >
                      <PlusIcon className="h-4 w-4 text-gray-800" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <button
              onClick={() => {
                alert("Order confirmed!");
                setGivenMedicines([]);
              }}
                           className="mt-4 bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition cursor-pointer"
            >
              Confirm Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicalStore;
