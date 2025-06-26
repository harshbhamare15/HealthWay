import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";

function EditProfile() {
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
  });

  useEffect(() => {
    const storedProfile = localStorage.getItem("userProfile");
    if (storedProfile) {
      setFormData(JSON.parse(storedProfile));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    localStorage.setItem("userProfile", JSON.stringify(formData));
    alert("Profile updated successfully");
    navigate("/profile");
  };

  const inputStyle = "p-2 border rounded w-full";

  return (
    <div className="flex">
      <Navbar />
      <LeftSidebar />
      <form
        className="bg-white m-4 p-28 rounded-md shadow-md flex flex-col w-full max-w-5xl mx-auto"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-bold text-center mb-10 text-teal-700">
          Edit Profile
        </h1>

        {/* Personal Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            name="name"
            placeholder="Full Name"
            className={inputStyle}
            onChange={handleChange}
            value={formData.name}
          />
          <input
            name="dob"
            type="date"
            className={inputStyle}
            onChange={handleChange}
            value={formData.dob}
          />
          <select
            name="gender"
            className={inputStyle}
            onChange={handleChange}
            value={formData.gender}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <input
            name="phone"
            placeholder="Mobile Number"
            className={inputStyle}
            onChange={handleChange}
            value={formData.phone}
          />
          <input
            name="email"
            placeholder="Email"
            className={inputStyle}
            onChange={handleChange}
            value={formData.email}
          />
          <input
            name="emergencyContact"
            placeholder="Emergency Contact"
            className={inputStyle}
            onChange={handleChange}
            value={formData.emergencyContact}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            name="address"
            placeholder="Address"
            className={inputStyle}
            onChange={handleChange}
            value={formData.address}
          />
          <input
            name="city"
            placeholder="City"
            className={inputStyle}
            onChange={handleChange}
            value={formData.city}
          />
          <input
            name="state"
            placeholder="State"
            className={inputStyle}
            onChange={handleChange}
            value={formData.state}
          />
          <input
            name="pincode"
            placeholder="Pincode"
            className={inputStyle}
            onChange={handleChange}
            value={formData.pincode}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"></div>

        <button
          type="submit"
          className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded w-full cursor-pointer"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
