import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    emergencyContact: "",
    bloodGroup: "",
    medicalHistory: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("userProfile", JSON.stringify(formData));

    navigate("/profile");
  };

  return (
    <div className="flex">
      <Navbar />
      <LeftSidebar />

      <form
        className="bg-white m-2 p-10 rounded flex flex-col items-center justify-center min-h-screen ml-16 w-full"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl m-10 font-bold mb-6">Patient Registration</h1>
        <input name="name" onChange={handleChange} value={formData.name} type="text" placeholder="Full Name" className="w-160 mb-4 p-2 border rounded" />
        <input name="dob" onChange={handleChange} value={formData.dob} type="date" className="w-160 mb-4 p-2 border rounded" />

        <select name="gender" onChange={handleChange} value={formData.gender} className="w-160 mb-4 p-2 border rounded">
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input name="phone" onChange={handleChange} value={formData.phone} type="tel" placeholder="Mobile Number" className="w-160 mb-4 p-2 border rounded" />
        <input name="email" onChange={handleChange} value={formData.email} type="email" placeholder="Email" className="w-160 mb-4 p-2 border rounded" />
        <input name="address" onChange={handleChange} value={formData.address} type="text" placeholder="Address" className="w-160 mb-4 p-2 border rounded" />
        <input name="city" onChange={handleChange} value={formData.city} type="text" placeholder="City" className="w-160 mb-4 p-2 border rounded" />
        <input name="state" onChange={handleChange} value={formData.state} type="text" placeholder="State" className="w-160 mb-4 p-2 border rounded" />
        <input name="pincode" onChange={handleChange} value={formData.pincode} type="text" placeholder="Pincode" className="w-160 mb-4 p-2 border rounded" />
        <input name="emergencyContact" onChange={handleChange} value={formData.emergencyContact} type="tel" placeholder="Emergency Contact" className="w-160 mb-4 p-2 border rounded" />

        <select name="bloodGroup" onChange={handleChange} value={formData.bloodGroup} className="w-160 mb-4 p-2 border rounded">
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

        <textarea name="medicalHistory" onChange={handleChange} value={formData.medicalHistory} placeholder="Any Medical History" className="w-160 mb-4 p-2 border rounded" />
        <input name="password" onChange={handleChange} value={formData.password} type="password" placeholder="Password" className="w-160 mb-4 p-2 border rounded" />
        <input name="confirmPassword" onChange={handleChange} value={formData.confirmPassword} type="password" placeholder="Confirm Password" className="w-160 mb-4 p-2 border rounded" />

        <label className="block mt-2 mb-2 p-2">
          <input type="checkbox" required /> I agree to the Terms & Conditions
        </label>

        <button type="submit" className="bg-teal-700 hover:bg-teal-800 text-black px-4 py-3 rounded w-170 cursor-pointer">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
