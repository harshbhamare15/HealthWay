import React from "react";
import LeftSidebar from "./LeftSidebar";
import Navbar from "./Navbar";

function Register() {
  return (
    <div className="flex">
      <Navbar/>
      <LeftSidebar />

      <form className="bg-white m-2 p-10 rounded flex flex-col items-center justify-center min-h-screen ml-16 w-full">
        <h1 className="text-3xl m-10 font-bold mb-6">Patient Registration</h1>
        <input type="text" placeholder="Full Name" className="w-160 mb-4 p-2 border rounded" />
        <input type="date" placeholder="Date of Birth" className="w-160 mb-4 p-2 border rounded" />

        <select className="w-160 mb-4 p-2 border rounded">
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input type="tel" placeholder="Mobile Number" className="w-160 mb-4 p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-160 mb-4 p-2 border rounded" />
        <input type="text" placeholder="Address" className="w-160 mb-4 p-2 border rounded" />
        <input type="text" placeholder="City" className="w-160 mb-4 p-2 border rounded" />
        <input type="text" placeholder="State" className="w-160 mb-4 p-2 border rounded" />
        <input type="text" placeholder="Pincode" className="w-160 mb-4 p-2 border rounded" />
        <input type="tel" placeholder="Emergency Contact" className="w-160 mb-4 p-2 border rounded" />

        <select className="w-160 mb-4 p-2 border rounded">
          <option value="">Blood Group</option>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>AB+</option>
          <option>AB-</option>
          <option>O+</option>
          <option>O-</option>
        </select>

        <textarea placeholder="Any Medical History" className="w-160 mb-4 p-2 border rounded" />

        <input type="password" placeholder="Password" className="w-160 mb-4 p-2 border rounded" />
        <input type="password" placeholder="Confirm Password" className="w-160 mb-4 p-2 border rounded" />

        <label className="block mt-2 mb-2 p-2">
          <input type="checkbox" required /> I agree to the Terms & Conditions
        </label>

        <button className="bg-teal-700 hover:bg-teal-800 text-black px-4 py-3 rounded w-170">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
