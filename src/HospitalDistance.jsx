// import React from "react";
// import { FaMapMarkerAlt, FaRoad } from "react-icons/fa";
// import Navbar from "./Navbar";
// import LeftSidebar from "./LeftSidebar";

// const hospitals = [
//   {
//     name: "Apollo Hospital",
//     distance: "3.2 km",
//     location: "Chennai, Tamil Nadu",
//   },
//   {
//     name: "Fortis Hospital",
//     distance: "5.8 km",
//     location: "Mumbai, Maharashtra",
//   },
//   {
//     name: "Shalby Hospital",
//     distance: "2.4 km",
//     location: "Ahmedabad, Gujarat",
//   },
//   {
//     name: "CIMS Hospital",
//     distance: "4.1 km",
//     location: "Bengaluru, Karnataka",
//   },
//   {
//     name: "Medanta – The Medicity",
//     distance: "6.0 km",
//     location: "Gurugram, Haryana",
//   },
//   {
//     name: "AIIMS",
//     distance: "1.9 km",
//     location: "New Delhi",
//   },
//   {
//     name: "Sunshine Hospital",
//     distance: "3.5 km",
//     location: "Hyderabad, Telangana",
//   },
//   {
//     name: "KIMS Hospital",
//     distance: "4.7 km",
//     location: "Thiruvananthapuram, Kerala",
//   }
// ];


// const HospitalDistance = () => {
//   return (
//     <div>
//         <Navbar/>
//         <LeftSidebar/>
//     <div className="min-h-screen bg-gray-100 py-25 px-4">
//       <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-16">
//         <h1 className="text-4xl font-bold text-center mb-8 text-teal-800">
//           📍 Nearby Hospitals & Distances
//         </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 cursor-pointer">
//           {hospitals.map((hospital, i) => (
//             <div
//               key={i}
//               className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition"
//             >
//               <h2 className="text-lg font-semibold text-gray-800 mb-1">
//                 {hospital.name}
//               </h2>
//               <p className="text-sm text-gray-600 flex items-center mb-1">
//                 <FaMapMarkerAlt className="mr-2 text-red-400" />
//                 {hospital.location}
//               </p>
//               <p className="text-sm text-rose-600 flex items-center">
//                 <FaRoad className="mr-2" />
//                 {hospital.distance}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default HospitalDistance;





import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";
import {
  BuildingOfficeIcon,
  UserGroupIcon,
  HeartIcon,
  EyeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

const Book = () => {
  const [userCoords, setUserCoords] = useState(null);
  const [queryCoords, setQueryCoords] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (x) => (x * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return +(R * c).toFixed(2);
  };

  const fetchOverpassData = async (query) => {
    const res = await fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      body: query,
    });
    const data = await res.json();
    return data.elements || [];
  };

  const searchWithCoords = async (lat, lon) => {
    const radii = [20000, 40000, 60000];
    let found = [];

    for (let r of radii) {
      const query = `
        [out:json];
        node[amenity=hospital](around:${r},${lat},${lon});
        out;
      `;
      found = await fetchOverpassData(query);
      if (found.length > 0) break;
    }

    return found;
  };

  const searchWithBoundingBox = async (south, north, west, east) => {
    const query = `
      [out:json][timeout:25];
      node["amenity"="hospital"](${south},${west},${north},${east});
      out;
    `;
    return await fetchOverpassData(query);
  };

  const getIconForHospital = (name) => {
    const n = name.toLowerCase();
    if (n.includes("children") || n.includes("pediatric")) return UserGroupIcon;
    if (n.includes("eye")) return EyeIcon;
    if (n.includes("heart") || n.includes("cardio")) return HeartIcon;
    if (n.includes("clinic")) return UserCircleIcon;
    return BuildingOfficeIcon;
  };

  const enrichHospitals = (found) =>
    found
      .map((el, i) => ({
        name: el.tags?.name || "Unnamed Hospital",
        lat: el.lat,
        lon: el.lon,
        distance: userCoords
          ? getDistance(userCoords.lat, userCoords.lon, el.lat, el.lon)
          : null,
        icon: getIconForHospital(el.tags?.name || ""),
      }))
      .sort((a, b) => (a.distance ?? 999) - (b.distance ?? 999));

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = {
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        };
        setUserCoords(coords);
        setQueryCoords(coords);
      },
      (err) => {
        console.warn("Geolocation denied:", err);
        setLoading(false);
      }
    );
  }, []);

  useEffect(() => {
    if (queryCoords) {
      handleSearch();
    }
  }, [queryCoords]);

  const handleSearch = async () => {
    const trimmed = searchInput.trim();
    setLoading(true);

    try {
      if (!trimmed) {
        if (userCoords) {
          const localResults = await searchWithCoords(
            userCoords.lat,
            userCoords.lon
          );
          setHospitals(enrichHospitals(localResults));
        } else {
          alert("Location not yet available. Please allow location access.");
        }
        setLoading(false);
        return;
      }

      const geoRes = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          trimmed
        )}&format=json&limit=1&polygon_geojson=1`
      );
      const geoData = await geoRes.json();
      if (!geoData[0]) throw new Error("Location not found");

      const { lat, lon, boundingbox } = geoData[0];
      let results = [];

      if (boundingbox && boundingbox.length === 4) {
        const [sLat, nLat, wLon, eLon] = boundingbox.map(parseFloat);
        results = await searchWithBoundingBox(sLat, nLat, wLon, eLon);
      } else {
        results = await searchWithCoords(parseFloat(lat), parseFloat(lon));
      }

      setHospitals(enrichHospitals(results));
    } catch (err) {
      console.error("Search error:", err);
      setHospitals([]);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <LeftSidebar />

      <div className="pt-28 px-6 max-w-5xl mx-auto pb-10">
        <h1 className="text-3xl font-bold text-teal-700 mb-6">
          Book Your Appointment
        </h1>

        <div className="flex flex-wrap gap-4 mb-6">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search by hospital name, city, state, or country..."
            className="p-2 border rounded w-full md:w-auto flex-1"
          />
          <button
            onClick={handleSearch}
            className="bg-teal-600 text-white px-4 py-2 rounded cursor-pointer"
          >
            Search
          </button>
        </div>

        {loading || hospitals.length === 0 ? (
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
            Searching hospitals...
          </p>

        ) : (
          <ul className="space-y-4 max-h-[600px] overflow-y-auto">
            {hospitals.map((h, i) => {
              const Icon = h.icon;
              return (
                <li
                  key={i}
                  className="bg-white shadow p-4 rounded border-l-4 border-teal-500 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <Icon className="w-10 h-10 text-teal-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold">{h.name}</h3>
                      {h.distance && (
                        <p className="text-sm text-gray-600">
                          Approx. {h.distance} km from you
                        </p>
                      )}
                    </div>
                  </div>

                  <a
                    href={`/finalbook?hospital=${encodeURIComponent(h.name)}`}
                    className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
                  >
                    Book
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Book;