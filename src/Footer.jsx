import React from "react";

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
        <div>
          <h3 className="font-bold text-lg mb-2">About</h3>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Our Mission & Vision</li>
            <li>Meet Our Team</li>
            <li>Careers</li>
            <li>Virtual Hospital Tour</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">Patient Resources</h3>
          <ul className="space-y-1">
            <li>Book Appointment</li>
            <li>Health Packages</li>
            <li>Insurance & Billing</li>
            <li>Medical Records</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">Departments & Services</h3>
          <ul className="space-y-1">
            <li>Emergency Care</li>
            <li>Outpatient Services</li>
            <li>Pharmacy</li>
            <li>Lab Tests</li>
            <li>Telemedicine</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">Legal & Policies</h3>
          <ul className="space-y-1">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Patient Rights</li>
            <li>Refund Policy</li>
            <li>Accessibility</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">Connect With Us</h3>
          <ul className="space-y-1">
            <li>Contact Us</li>
            <li>Feedback</li>
            <li>WhatsApp Support</li>
            <li>Social Media</li>
            <li>Newsletter Signup</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-6 text-gray-400 text-xs">
        © {new Date().getFullYear()} HealthWay Hospital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
