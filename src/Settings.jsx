import React, { useState } from "react";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";
import ChangePasswordPopup from "./ChangePasswordPopup";

function Settings() {
  const [showChangePassword, setShowChangePassword] = useState(false);

  const [passwordForm, setPasswordForm] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  const settingsItems = [
    {
      title: "Change Password",
      description: "Update your login credentials to keep your account secure.",
      action: "Change",
      onClick: () => setShowChangePassword(true),
    },
    {
      title: "View Active Sessions",
      description: "Manage and sign out from devices you're logged into.",
      action: "View",
      onClick: () => console.log("View Sessions clicked"),
    },
    {
      title: "Download My Data",
      description: "Export a copy of your personal and health data.",
      action: "Download",
      onClick: () => console.log("Download triggered"),
    },
    {
      title: "Delete Account",
      description: "Permanently remove your account and all associated data.",
      action: "Delete",
      danger: true,
      onClick: () => console.log("Delete account triggered"),
    },
    {
      title: "FAQ / Help Center",
      description: "Find answers to common questions and how-to guides.",
      action: "Visit",
      onClick: () => console.log("FAQ visited"),
    },
    {
      title: "Report an Issue or Suggest Feature",
      description: "Share your feedback or request a new feature.",
      action: "Submit",
      onClick: () => console.log("Feedback popup launched"),
    },
  ];

  return (
    <div className="flex">
      <Navbar />
      <LeftSidebar />

        <div className="bg-white w-full ml-16 px-6 py-28"> 
        <h1 className="text-3xl font-semibold mb-10 border-b pb-4">Settings</h1>

        <div className="max-w-3xl mx-auto divide-y">
          {settingsItems.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center py-6 hover:bg-gray-50 transition"
            >
              <div>
                <h2 className="text-lg font-medium text-gray-800">{item.title}</h2>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
              <button
                onClick={item.onClick}
                className={`cursor-pointer text-sm px-4 py-2 rounded font-medium ${
                  item.danger
                    ? "bg-red-600 text-white hover:bg-red-700"
                    : "bg-teal-700 text-white hover:bg-teal-800"
                }`}
              >
                {item.action}
              </button>
            </div>
          ))}
        </div>
      </div>

      <ChangePasswordPopup
        isOpen={showChangePassword}
        onClose={() => setShowChangePassword(false)}
        onSubmit={() => {
          console.log(passwordForm);
          alert("✅ Password changed successfully!");
          setShowChangePassword(false);
        }}
        formData={passwordForm}
        setFormData={setPasswordForm}
      />
    </div>
  );
}

export default Settings;