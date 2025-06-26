import React, { useState } from "react";

function ChangePasswordPopup({
  isOpen,
  onClose,
  onSubmit,
  formData,
  setFormData,
}) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);

  if (!isOpen) return null;

  const sendOtp = () => {
    if (/^\d{10}$/.test(phoneNumber)) {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedOtp(otp);
      setOtpSent(true);
      alert(`Mock OTP sent: ${otp}`);
    } else {
      alert("Please enter a valid 10-digit phone number");
    }
  };

  const verifyOtp = () => {
    if (enteredOtp === generatedOtp) {
      setOtpVerified(true);
    } else {
      alert("Incorrect OTP");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-300 bg-opacity-40 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-lg"
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Change Password
        </h2>

        <form className="space-y-4" onSubmit={handleFormSubmit}>
          {!otpVerified && (
            <>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border rounded"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />

              {!otpSent && (
                <button
                  type="button"
                  onClick={sendOtp}
                  className="w-full bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800 transition cursor-pointer"
                >
                  Send OTP
                </button>
              )}

              {otpSent && (
                <>
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    className="w-full p-3 border rounded"
                    value={enteredOtp}
                    onChange={(e) => setEnteredOtp(e.target.value)}
                    required
                  />
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={verifyOtp}
                      className="flex-1 bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800 transition cursor-pointer"
                    >
                      Verify OTP
                    </button>
                    <button
                      type="button"
                      onClick={() => alert(`Mock OTP resent: ${generatedOtp}`)}
                      className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition cursor-pointer"
                    >
                      Resend OTP
                    </button>
                  </div>
                </>
              )}
            </>
          )}

          {otpVerified && (
            <>
              <PasswordInput
                label="New Password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
              />
              <PasswordInput
                label="Confirm New Password"
                name="confirmNewPassword"
                value={formData.confirmNewPassword}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="bg-teal-700 text-white px-6 py-3 rounded hover:bg-teal-800 w-full cursor-pointer"
              >
                Update Password
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

function PasswordInput({ label, name, value, onChange }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        name={name}
        placeholder={label}
        className="w-full p-3 border rounded pr-10"
        value={value}
        onChange={onChange}
        required
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
        aria-label="Toggle password visibility"
      >
        {show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9.27-3.11-10.5-7.5a10.05 10.05 0 011.875-3.325m3.04-2.54A9.977 9.977 0 0112 4.5c5 0 9.27 3.11 10.5 7.5a10.015 10.015 0 01-4.388 5.775M15 12a3 3 0 11-3-3"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

export default ChangePasswordPopup;
