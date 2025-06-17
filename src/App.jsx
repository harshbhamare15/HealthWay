import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LeftSidebar from "./LeftSidebar";
import isolated from "./isolated.jpg";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Navbar and Sidebar */}
      <Navbar />
      <LeftSidebar />

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-auto">
        {/* Background section with Welcome and Search */}
        <section
          className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-4 opacity-300"
          style={{ backgroundImage: `url(${isolated})` }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black drop-shadow-lg mb-6">
            Welcome to HealthWay
          </h1>
          <p className="font-semibold">
            HealthWay is a smart healthcare platform that simplifies patient
            check-ins, tracks doctor availability in real time, and uses AI to
            manage emergencies. With automated updates and easy queue
            management, HealthWay makes hospital visits faster, smoother, and
            more efficient for everyone.
          </p>
          <div className="flex justify-center items-center w-full md:w-3/4 mx-auto">
            <button
              className="bg-teal-700 hover:bg-teal-800 text-black cursor-pointer hover:font-semibold px-25 py-2 my-8 rounded shadow-md transition duration-200"
              onClick={() => {
                console.log("Register button clicked");
              }}
            >
              Register
            </button>
          </div>
        </section>
        <hr className="border-t-2 border-black-800 my-0 w-full" />

        {/* Feature Section */}
        <section className="bg-white py-16 px-6 md:px-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Smart HealthWay Features
          </h2>

          <div className="flex flex-col gap-6">
            <div className="bg-blue-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Patient Check-in & Queue System
              </h3>
              <p className="text-gray-700">
                The Smart HealthWay system revolutionizes the check-in process
                by enabling patients to self-register through QR codes, mobile
                applications, or in-hospital kiosks. Once registered, a digital
                token is instantly issued, placing the patient into a live
                queue. This real-time queue can be viewed on the patient's
                mobile device or on hospital display monitors, allowing them to
                monitor their position without needing to wait physically in
                line. The system ensures a smooth, transparent check-in
                experience that minimizes wait-related stress and improves
                operational flow from the moment a patient enters the facility.
              </p>
            </div>

            <hr className="border-t-2 border-black-800 my-0 w-full" />

            <div className="bg-green-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                Real-time Doctor Availability
              </h3>
              <p className="text-gray-700">
                Through a dynamic dashboard, doctors’ real-time availability,
                current queue lengths, and estimated wait times are continuously
                updated and displayed. This transparency allows both staff and
                patients to make informed decisions regarding consultation
                schedules, walk-ins, or emergency cases. The system adapts
                fluidly throughout the day as patient load changes, ensuring
                optimal use of medical resources and significantly reducing
                unnecessary delays or confusion in the consultation process.
              </p>
            </div>

            <hr className="border-t-2 border-black-800 my-0 w-full" />

            <div className="bg-red-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-red-900 mb-2">
                AI-enabled Emergency Prioritization
              </h3>
              <p className="text-gray-700">
                An intelligent AI-powered triage system evaluates the urgency of
                patient cases by analyzing reported symptoms, medical history,
                or real-time vitals. Based on this analysis, the system
                automatically prioritizes critical patients and dynamically
                adjusts the queue to escalate emergencies without manual
                intervention. This ensures that urgent cases receive immediate
                attention while maintaining an organized and fair queue for
                other patients, improving response times and overall safety
                within the healthcare environment.
              </p>
            </div>

            <hr className="border-t-2 border-black-800 my-0 w-full" />

            <div className="bg-yellow-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-yellow-900 mb-2">
                Automated Notifications
              </h3>
              <p className="text-gray-700">
                HealthWay keeps patients and staff seamlessly connected through
                automated, real-time notifications delivered via SMS, email, or
                mobile app alerts. Patients are notified when their turn is
                approaching, if delays occur, or when emergency adjustments are
                made in the queue. At the same time, hospital staff receive
                critical alerts about emergency escalations, queue surges, or
                changes in doctor availability, enabling quicker response and
                smoother coordination across departments.
              </p>
            </div>

            <hr className="border-t-2 border-black-800 my-0 w-full" />

            <div className="bg-purple-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">
                Analytics & Bottleneck Reports
              </h3>
              <p className="text-gray-700">
                A comprehensive analytics dashboard offers real-time insights
                into key performance indicators such as average wait times,
                service delays, queue lengths, and staff activity levels. These
                data visualizations help hospital administrators identify
                bottlenecks, inefficiencies, and peak usage periods. With
                detailed historical and live trend analysis, the system empowers
                healthcare providers to make informed decisions, streamline
                operations, and implement targeted improvements that enhance the
                overall patient experience.
              </p>
            </div>

            <hr className="border-t-2 border-black-800 my-0 w-full" />

            <div className="bg-teal-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-teal-900 mb-2">
                The Heartbeat of Everyday Healthcare
              </h3>
              <p className="text-gray-700">
                More than just a place to purchase medicine, the integrated
                medical store within HealthWay serves as a vital extension of
                everyday healthcare. It provides timely access to essential
                medications, trusted pharmacist advice, and ongoing support for
                treatment continuity. Whether it's fulfilling prescriptions,
                offering guidance, or enabling quick refills through digital
                platforms, the store operates as a dependable health
                partner—bridging the gap between clinical care and home
                recovery.
              </p>
            </div>

            <hr className="border-t-2 border-black-800 my-0 w-full" />
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
