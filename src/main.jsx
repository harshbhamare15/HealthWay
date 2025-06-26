import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Register from "./Register";
import SignIn from "./SignIn";
import Emergency from "./Emergency";
import Profile from "./Profile";
import Home from "./Home";
import WaitingPeriod from "./WaitingPeriod";
import LocateHospital from "./LocateHospital";
import HospitalDistance from "./HospitalDistance";
import HealthHistory from "./HealthHistory";
import MedicalStore from "./MedicalStore";
import Calendar from "./Calendar";
import AISuggestions from "./AISuggestions";
import EditProfile from "./EditProfile";
import Settings from "./Settings";
import FinalBook from "./FinalBook";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Home />} />
        <Route path="/waiting-period" element={<WaitingPeriod />} />
        <Route path="/locate-hospital" element={<LocateHospital />} />
        <Route path="/hospital-distance" element={<HospitalDistance />} />
        <Route path="/health-history" element={<HealthHistory />} />
        <Route path="/medical-store" element={<MedicalStore />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/ai-suggestions" element={<AISuggestions />} />
        <Route path="/finalbook" element={<FinalBook />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
