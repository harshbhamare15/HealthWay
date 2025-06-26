//  <div className="flex flex-col md:flex-row gap-1 justify-center items-center w-full md:w-3/4 mx-auto">
//             <input
//               type="text"
//               placeholder="Search"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="border px-4 py-2 rounded w-full md:w-1/3 shadow-md bg-white"
//             />
//             <select
//               value={filter}
//               onChange={(e) => setFilter(e.target.value)}
//               className="border px-4 py-2 rounded w-full md:w-1/8 shadow-md bg-white"
//             >
//               <option value="Filters">Filters</option>
//               <option value="Doctor">Doctor</option>
//               <option value="Hospital">Hospital</option>
//             </select>
//           </div> In this code is search and filter code APP.JSX


// -------------------------------------------------------------------------------------------------


// import React from 'react';
// import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

// const Profile = () => {
//   const handleLogout = () => {
//     alert('Logged out!');
//     // Add logout logic here
//   };

//   const handleSettings = () => {
//     alert('Go to Settings');
//     // Navigate to settings page
//   };

//   const handleProfile = () => {
//     alert('Go to Profile Details');
//     // Navigate to profile details page
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-md rounded-xl p-6 w-80 text-center space-y-4">
//         <img
//           src="https://via.placeholder.com/100"
//           alt="Profile"
//           className="w-24 h-24 rounded-full mx-auto"
//         />
//         <h2 className="text-xl font-semibold">HelthWay User</h2>

//         <div className="space-y-3 mt-4">
//           <button
//             onClick={handleProfile}
//             className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
//           >
//             <FaUser /> Profile
//           </button>
//           <button
//             onClick={handleSettings}
//             className="w-full flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md"
//           >
//             <FaCog /> Settings
//           </button>
//           <button
//             onClick={handleLogout}
//             className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-md"
//           >
//             <FaSignOutAlt /> Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;


// import React from "react";
// import { FaUserCircle } from "react-icons/fa";

// const Profile = () => {
//   return (
//     <div className="relative h-screen bg-gray-100">
//       {/* Profile Logo with User Name at top-right (stacked vertically) */}
//       <div className="absolute top-4 right-6 flex flex-col items-center cursor-pointer">
//         <FaUserCircle
//           size={36}
//           className="text-gray-700 hover:text-blue-500 transition duration-300"
//         />
//         <span className="mt-1 text-sm font-semibold text-gray-800">
//           User Profile
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Profile;


// In this not working code and in this profile code PROFILE.JSX


// -------------------------------------------------------------------------------------------------


// import React from "react";

// const Home = () => {
//   return (
//     <div className="flex items-center justify-center h-[80vh] text-3xl font-bold">
//       Welcome to HealthWay Home!
//     </div>
//   );
// };

// export default Home;

// this is home page code HOME.JSX


// -------------------------------------------------------------------------------------------------


// import React from "react";

// const Navbar = () => {
//   return (

//     <nav className="flex justify-between bg-sky-200 py-4 text-black">
//       <div className="name">
//         <span className="font-bold text-3xl mx-30">HealthWay</span>
//       </div>
//       <ul className="flex gap-8 mx-9">
//         <button className="bg-white  hover:bg-cyan-50 mx-2 p-7 py-2.5 text-sm font-bold text-white rounded-full cursor-pointer">
//           <li className="cursor-pointer hover:font-bold transition-all text-black">
//             Login
//           </li>
//         </button>
//         <button className="bg-red-600 hover:bg-red-700 mx-2 p-7 py-2.5 text-sm font-bold text-white rounded-full cursor-pointer">
//           <li className="cursor-pointer hover:font-bold transition-all">
//             Emergency
//           </li>
//         </button>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



// import React from "react";
// import { FaUserCircle } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 w-full z-50 flex justify-between items-center bg-sky-200 py-4 px-6 text-black">
//       {/* Logo */}
//       <div className="logo">
//         <span className="font-bold text-3xl mx-30">HealthWay</span>
//       </div>

//       {/* Buttons + Profile */}
//       <div className="flex items-center gap-6">
//         <ul className="flex gap-4 items-center">
//           <button className="bg-white hover:bg-cyan-50 px-4 py-2.5 text-sm font-bold text-black rounded-full cursor-pointer">
//             <li className="cursor-pointer hover:font-bold transition-all">
//               Login
//             </li>
//           </button>
//           <button className="bg-red-600 hover:bg-red-700 px-4 py-2.5 text-sm font-bold text-white rounded-full cursor-pointer">
//             <li className="cursor-pointer hover:font-bold transition-all">
//               Emergency
//             </li>
//           </button>
//         </ul>

//         {/* Profile Icon */}
//         <div className="flex flex-col items-center cursor-pointer">
//           <FaUserCircle size={32} className="text-gray-700 hover:text-blue-500 transition duration-300" />
//           <span className="text-xs font-semibold text-gray-800">Unknown</span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar; 

// This is Navbar different different Code edition NAVBAR.JSX


// -------------------------------------------------------------------------------------------------


// import { useState } from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import LeftSidebar from "./LeftSidebar";

// function App() {

//   return (
//     <>
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <LeftSidebar />
//       <Footer />
//       </div>
//     </>
//   );
// }

// export default App;

// import { useState } from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import LeftSidebar from "./LeftSidebar";

// function App() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filter, setFilter] = useState("All");

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       <Navbar />
//       <div className="flex flex-1">
//         <LeftSidebar />

//         <main className="flex-1 p-6">

//           <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
//             {/* Search Input */}
//             <input
//               type="text"
//               placeholder="Search by name or specialization"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="border px-4 py-2 rounded w-full md:w-1/2"
//             />

//             {/* Filter Dropdown */}
//             <select
//               value={filter}
//               onChange={(e) => setFilter(e.target.value)}
//               className="border px-4 py-2 rounded w-full md:w-1/4"
//             >
//               <option value="All">All</option>
//               <option value="Doctor">Doctor</option>
//               <option value="Hospital">Hospital</option>
//             </select>
//           </div>
//         </main>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import LeftSidebar from "./LeftSidebar";

// function App() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filter, setFilter] = useState("All");

//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       <Navbar />
//       <LeftSidebar />
//       <div className="app">
//         <div className="bg"></div>
//       </div>
//       {/* <Profile /> */}
//       <div className="flex flex-1">
//         {/* Main content with transition for sidebar */}
//         <div
//           className={`transition-all duration-300 ${
//             isOpen ? "ml-5" : "ml-0"
//           } w-full`}
//         >
//           <div className="p-24">
//             <h1 className="text-3xl font-bold text-center mb-6">
//               Welcome to HealthWay
//             </h1>

//             <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
//               {/* Search Input */}
//               <input
//                 type="text"
//                 placeholder="Search"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="border px-4 py-2 rounded md:w-1/3"
//               />

//               {/* Filter Dropdown */}
//               <select
//                 value={filter}
//                 onChange={(e) => setFilter(e.target.value)}
//                 className="border px-4 py-2 rounded w-full md:w-1/9"
//               >
//                 <option value="Filters">Filters</option>
//                 <option value="Doctor">Doctor</option>
//                 <option value="Hospital">Hospital</option>
//               </select>

//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import LeftSidebar from "./LeftSidebar";
// import medicalworker from "./medicalworker.jpg";

// function App() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filter, setFilter] = useState("All");
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className="relative min-h-screen bg-gray-100 overflow-hidden">
//       <div
//         className="top-20 absolute inset-0 bg-cover bg-center opacity-200 z-0"
//         style={{
//           backgroundImage: `url(${medicalworker})`,
//         }}
//       />

//       <div className="relative z-10 flex flex-col min-h-screen">
//         <Navbar />
//         <LeftSidebar />

//         <div className="flex flex-1 items-center justify-center px-4 py-12">
//           <div
//             className={`transition-all duration-300 ${
//               isOpen ? "ml-5" : "ml-0"
//             } w-full`}
//           >
//             <div className="text-center">
//               <h1 className="text-4xl font-bold text-black mb-6">
//                 Welcome to HealthWay
//               </h1>

//               <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
//                 <input
//                   type="text"
//                   placeholder="Search"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="border px-4 py-2 rounded md:w-1/3 shadow-md bg-white"
//                 />

//                 <select
//                   value={filter}
//                   onChange={(e) => setFilter(e.target.value)}
//                   className="border px-4 py-2 rounded shadow-md bg-white"
//                 >
//                   <option value="Filters">Filters</option>
//                   <option value="Doctor">Doctor</option>
//                   <option value="Hospital">Hospital</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//         </div>

//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default App; This Is Main Page Code Edition APP.JSX


// -------------------------------------------------------------------------------------------------


// import React, { useState } from 'react';
// import { FaBars } from 'react-icons/fa';

// const LeftSidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const menuItems = [
//     "Home",
//     "AI Suggestions",
//     "Calendar",
//     "Waiting Period",
//     "Doctor Rating",  
//     "Locate a Hospital",
//     "Hospital Distance For Patient",
//     "Doctor Availability Tracker",
//     "Health History",
//     "Medical Store"
//   ];

//   return (
//     <div className="flex">
//       <button
//         onClick={toggleSidebar}
//         className="text-black text-2xl p-2 fixed z-50 top-4 left-4 rounded-md bg-white shadow-md cursor-pointer"
//       >
//         <FaBars />
//       </button>

//       {/* Sidebar */}
//        <div
//           className={`bg-white text-black h-screen fixed top-0 left-0 transition-all duration-300 ease-in-out z-40 ${
//             isOpen ? 'w-68' : 'w-0 overflow-auto'
//           }`}
//         >
//           <div className="pt-16 px-12 space-y-4 h-full overflow-y-auto">
//             {menuItems.map((item, index) => (
//               <div  
//                 key={index}
//                 className="hover:text-black hover:font-bold transition-all px-0 py-0 my-10 rounded-md cursor-pointer"
//               >
//                 {item}
//               </div>
//             ))}
//           </div>
//         </div>
//     </div>
//   );
// };

// export default LeftSidebar;


// -------------------------------------------------------------------------------------------------


// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import LeftSidebar from "./LeftSidebar";
// import ChangePasswordPopup from "./ChangePasswordPopup";

// function Settings() {
//   const [showChangePassword, setShowChangePassword] = useState(false);

//   const [passwordForm, setPasswordForm] = useState({
//     newPassword: "",
//     confirmNewPassword: "",
//   });

//   const settingsItems = [
//     {
//       title: "Change Password",
//       description: "Update your login credentials to keep your account secure.",
//       action: "Change",
//       onClick: () => setShowChangePassword(true),
//     },
//     {
//       title: "View Active Sessions",
//       description: "Manage and sign out from devices you're logged into.",
//       action: "View",
//       onClick: () => console.log("View Sessions clicked"),
//     },
//     {
//       title: "Download My Data",
//       description: "Export a copy of your personal and health data.",
//       action: "Download",
//       onClick: () => console.log("Download triggered"),
//     },
//     {
//       title: "Delete Account",
//       description: "Permanently remove your account and all associated data.",
//       action: "Delete",
//       danger: true,
//       onClick: () => console.log("Delete account triggered"),
//     },
//     {
//       title: "FAQ / Help Center",
//       description: "Find answers to common questions and how-to guides.",
//       action: "Visit",
//       onClick: () => console.log("FAQ visited"),
//     },
//     {
//       title: "Report an Issue or Suggest Feature",
//       description: "Share your feedback or request a new feature.",
//       action: "Submit",
//       onClick: () => console.log("Feedback popup launched"),
//     },
//   ];

//   return (
//     <div className="flex">
//       <Navbar />
//       <LeftSidebar />

//       <div className="bg-white w-full ml-16 px-6 py-10">
//         <h1 className="text-3xl font-semibold mb-10 border-b pb-4">Settings</h1>

//         <div className="max-w-3xl mx-auto divide-y">
//           {settingsItems.map((item, idx) => (
//             <div
//               key={idx}
//               className="flex justify-between items-center py-6 hover:bg-gray-50 transition"
//             >
//               <div>
//                 <h2 className="text-lg font-medium text-gray-800">{item.title}</h2>
//                 <p className="text-sm text-gray-500">{item.description}</p>
//               </div>
//               <button
//                 onClick={item.onClick}
//                 className={`cursor-pointer text-sm px-4 py-2 rounded font-medium ${
//                   item.danger
//                     ? "bg-red-600 text-white hover:bg-red-700"
//                     : "bg-teal-700 text-white hover:bg-teal-800"
//                 }`}
//               >
//                 {item.action}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       <ChangePasswordPopup
//         isOpen={showChangePassword}
//         onClose={() => setShowChangePassword(false)}
//         onSubmit={() => {
//           console.log(passwordForm);
//           alert("✅ Password changed successfully!");
//           setShowChangePassword(false);
//         }}
//         formData={passwordForm}
//         setFormData={setPasswordForm}
//       />
//     </div>
//   );
// }

// export default Settings;


// -------------------------------------------------------------------------------------------------


