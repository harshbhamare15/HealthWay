import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LocateHospital = () => {
  const [position, setPosition] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [error, setError] = useState("");

  // ✅ Haversine formula to calculate distance between 2 points
  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = [pos.coords.latitude, pos.coords.longitude];
        setPosition(coords);
        fetchHospitals(coords);
      },
      (err) => {
        console.error("Geolocation error:", err);
        setError("Unable to access your location. Please enable GPS.");
      }
    );
  }, []);

  const fetchHospitals = async ([lat, lon]) => {
    const query = `
      [out:json];
      node[amenity=hospital](around:10000,${lat},${lon});
      out;
    `;
    try {
      const response = await fetch("https://overpass-api.de/api/interpreter", {
        method: "POST",
        body: query,
      });
      const data = await response.json();

      const realNearbyHospitals = data.elements.filter((h) => {
        if (!h.tags?.name || !h.lat || !h.lon) return false;
        const distance = getDistanceFromLatLonInKm(lat, lon, h.lat, h.lon);
        return distance <= 5;
      });

      setHospitals(realNearbyHospitals);
    } catch (error) {
      console.error("Error fetching hospital data:", error);
      setError("Failed to fetch nearby hospitals.");
    }
  };

  const userIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [32, 32],
  });

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Navbar />
      <LeftSidebar className="z-10" />

      <main className="flex-grow px-6 pt-28 pb-10">
        <h1 className="text-3xl font-semibold text-center mb-8 text-teal-700 flex items-center justify-center whitespace-nowrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
            style={{ verticalAlign: "middle" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
            />
          </svg>
          <span className="ml-3">Nearby Hospitals Map</span>
        </h1>

        <div className="bg-white rounded-xl shadow-lg mx-auto max-w-4xl overflow-hidden">
          <div className="h-[400px] w-full">
            {error ? (
              <div className="flex items-center justify-center h-full text-red-600 font-medium">
                ❗ {error}
              </div>
            ) : position ? (
              <MapContainer
                center={position}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position} icon={userIcon}>
                  <Popup>You are here</Popup>
                </Marker>
                {hospitals.map((h, i) => (
                  <Marker key={i} position={[h.lat, h.lon]}>
                    <Popup>
                      <div className="text-sm">
                        <p className="font-semibold">{h.tags.name}</p>
                        <p className="text-gray-500">
                          📏 {getDistanceFromLatLonInKm(position[0], position[1], h.lat, h.lon).toFixed(2)} km away
                        </p>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${h.lat},${h.lon}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          📍 Open in Google Maps
                        </a>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500 animate-pulse">
                📍 Locating you and searching for real nearby hospitals…
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LocateHospital;
