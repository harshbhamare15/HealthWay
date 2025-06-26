import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";

const OVERPASS_ENDPOINTS = [
  "https://overpass.kumi.systems/api/interpreter",
  "https://overpass-api.de/api/interpreter",
  "https://lz4.overpass-api.de/api/interpreter",
];

const FinalBook = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const hospitalName = params.get("hospital") || "Unknown Hospital";

  const [showDetails, setShowDetails] = useState(false);
  const [consultType, setConsultType] = useState("offline");
  const [applicantName, setApplicantName] = useState("");
  const [speciality, setSpeciality] = useState("ophthalmology");
  const [symptoms, setSymptoms] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");
  const [hospitalDetails, setHospitalDetails] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [error, setError] = useState(null);

  const fetchWithFallback = async (controller) => {
    const query = `
      [out:json][timeout:25];
      nwr["amenity"="hospital"]["name"="${hospitalName}"];
      out center;
    `;

    for (let endpoint of OVERPASS_ENDPOINTS) {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          body: new URLSearchParams({ data: query }),
          signal: controller.signal,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });

        if (!response.ok) {
          console.warn(`Failed at ${endpoint}: Status ${response.status}`);
          continue;
        }

        const data = await response.json();
        console.log("Fetched from:", endpoint, data);
        return data;
      } catch (err) {
        if (err.name === "AbortError") throw err;
        console.warn(`Fetch failed at ${endpoint}`, err);
      }
    }
    throw new Error("All Overpass endpoints failed");
  };

  useEffect(() => {
    if (!showDetails) return;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000);

    const loadDetails = async () => {
      setLoadingDetails(true);
      setError(null);
      try {
        const data = await fetchWithFallback(controller);
        const match = data?.elements?.[0];

        if (match && match.tags) {
          setHospitalDetails(match.tags);
        } else {
          setError("❗ No matching hospital found.");
        }
      } catch (err) {
        if (err.name === "AbortError") {
          setError("⏱️ Request timed out");
        } else {
          setError("❌ Failed to load hospital info from all servers");
        }
      } finally {
        clearTimeout(timeoutId);
        setLoadingDetails(false);
      }
    };

    loadDetails();

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [showDetails, hospitalName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      hospitalName,
      consultType,
      applicantName,
      speciality,
      symptoms,
      medicalHistory,
    });
    alert("✅ Appointment Request Sent!");
  };

  const specialities = [
    { value: "ophthalmology", label: "Ophthalmology (Eye)" },
    { value: "cardiology", label: "Cardiology (Heart)" },
    { value: "pediatrics", label: "Pediatrics (Child)" },
    { value: "general", label: "General Medicine" },
    { value: "orthopedics", label: "Orthopedics (Bone)" },
    { value: "other", label: "Other" },
  ];

  return (
    <div>
      <Navbar />
      <LeftSidebar />

      <div className="min-h-screen px-4 pt-28 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-teal-700 mb-6">
          Confirm Appointment
        </h1>

        <div className="mb-4 flex items-center justify-between bg-gray-100 rounded p-4 shadow">
          <div>
            <p className="font-semibold text-lg">{hospitalName}</p>
            <p className="text-sm text-gray-600">Booking for Consultation</p>
          </div>
          <button
            onClick={() => {
              setShowDetails((prev) => {
                if (prev) {
                  setHospitalDetails(null);
                  setError(null);
                }
                return !prev;
              });
            }}
            className="text-teal-600 flex items-center gap-1"
          >
            {showDetails ? "Hide Details" : "Show Details"}
            {showDetails ? (
              <ChevronUpIcon className="w-4 h-4" />
            ) : (
              <ChevronDownIcon className="w-4 h-4" />
            )}
          </button>
        </div>

        {showDetails && (
          <div className="bg-gray-50 border rounded p-4 mb-4 text-sm text-gray-800 shadow-inner">
            {loadingDetails ? (
              <p>🔄 Loading hospital details...</p>
            ) : error ? (
              <p className="text-red-600">{error}</p>
            ) : hospitalDetails ? (
              <ul className="list-disc pl-5 space-y-1">
                {Object.entries(hospitalDetails).map(([key, value]) => (
                  <li key={key}>
                    <span className="font-medium capitalize">
                      {key.replace(/_/g, " ")}:
                    </span>{" "}
                    {value}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">
                No extra information available for this hospital.
              </p>
            )}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Consultation Type
            </label>
            <div className="flex gap-4">
              {["offline", "online"].map((type) => (
                <label key={type} className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="consultType"
                    value={type}
                    checked={consultType === type}
                    onChange={() => setConsultType(type)}
                  />
                  {type[0].toUpperCase() + type.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Applicant Name
            </label>
            <input
              type="text"
              required
              className="border px-3 py-2 rounded w-full"
              placeholder="Your full name"
              value={applicantName}
              onChange={(e) => setApplicantName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Specialization Required
            </label>
            <select
              className="border px-3 py-2 rounded w-full"
              value={speciality}
              onChange={(e) => setSpeciality(e.target.value)}
            >
              {specialities.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Describe the Issue
            </label>
            <textarea
              rows={4}
              required
              className="border px-3 py-2 rounded w-full"
              placeholder="Describe the patient's symptoms or concern..."
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Medical History
            </label>
            <textarea
              rows={4}
              className="border px-3 py-2 rounded w-full"
              placeholder="Any Medical History"
              value={medicalHistory}
              onChange={(e) => setMedicalHistory(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-teal-600 cursor-pointer text-white px-6 py-2 rounded hover:bg-teal-700 transition"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default FinalBook;
