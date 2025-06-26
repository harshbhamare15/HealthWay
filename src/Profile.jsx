// import React, { useEffect, useState } from "react";
// import { FaUserCircle } from "react-icons/fa";
// import Navbar from "./Navbar";
// import LeftSidebar from "./LeftSidebar";
// import { useNavigate } from "react-router-dom";

// function Profile() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedUser = localStorage.getItem("userProfile");
//     if (savedUser) {
//       setUser(JSON.parse(savedUser));
//     }
//   }, []);

//   const handleEdit = () => navigate("/edit-profile");
//   const handleSettings = () => navigate("/settings");
//   const handleLogout = () => {
//     localStorage.removeItem("userProfile");
//     navigate("/signin");
//   };

//   return (
//     <div className="bg-white min-h-screen">
//       {/* Navbar always visible */}
//       <Navbar />

//       <div className="flex pt-16">
//         {/* Sidebar always visible */}
//         <LeftSidebar />

//         {/* Main Content */}
//         <div className="flex-1 p-6">
//           {user ? (
//             <div className="bg-white p-6 sm:p-8 max-w-xl mx-auto shadow-lg rounded">
//               <div className="flex justify-center mb-4">
//                 <FaUserCircle className="text-gray-500" size={64} />
//               </div>

//               <h1 className="text-3xl font-bold text-black text-center mb-6">
//                 {user.name}
//               </h1>

//               <div className="text-gray-700 text-base space-y-2">
//                 <p><strong>Date of Birth:</strong> {user.dob}</p>
//                 <p><strong>Email:</strong> {user.email}</p>
//                 <p><strong>Phone:</strong> {user.phone}</p>
//                 <p><strong>Gender:</strong> {user.gender}</p>
//               </div>

//               <div className="mt-6 flex flex-col space-y-3">
//                 <button onClick={handleEdit} className="w-full bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800 transition cursor-pointer">
//                   Edit Profile
//                 </button>
//                 <button onClick={handleSettings} className="w-full bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800 transition cursor-pointer">
//                   Settings
//                 </button>
//                 <button onClick={handleLogout} className="w-full bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800 transition cursor-pointer">
//                   Logout
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <div className="text-center mt-20 text-gray-500 text-lg">
//               ⚠️ No user data found. Please register first.
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;




import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("userProfile");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleEdit = () => navigate("/edit-profile");
  const handleSettings = () => navigate("/settings");
  const handleLogout = () => {
    localStorage.removeItem("userProfile");
    navigate("/signin");
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Navbar always visible */}
      <Navbar />

      <div className="flex pt-16">
        {/* Sidebar always visible */}
        <LeftSidebar />

        {/* Main Content */}
        <div className="flex-1 p-6">
          {user ? (
            <div className="bg-white p-6 sm:p-8 max-w-xl mx-auto shadow-lg rounded">
              <div className="flex justify-center mb-4">
                <FaUserCircle className="text-gray-500" size={64} />
              </div>

              <h1 className="text-3xl font-bold text-black text-center mb-6">
                {user.name}
              </h1>

              <div className="text-gray-700 text-base space-y-2">
                <p><strong>Date of Birth:</strong> {user.dob}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Gender:</strong> {user.gender}</p>
              </div>

              <div className="mt-6 flex flex-col space-y-3">
                <button onClick={handleEdit} className="w-full bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800 transition cursor-pointer">
                  Edit Profile
                </button>
                <button onClick={handleSettings} className="w-full bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800 transition cursor-pointer">
                  Settings
                </button>
                <button onClick={handleLogout} className="w-full bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800 transition cursor-pointer">
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center mt-20 text-gray-500 text-lg">
              ⚠️ No user data found. Please register first.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;