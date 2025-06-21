import React, { useState } from "react";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");
  const [events, setEvents] = useState([]);

  const eventOptions = [
    "Doctor Appointment",
    "Lab Test",
    "General Checkup",
    "Follow-up",
    "X-ray/Scan",
    "Vaccination",
  ];

  const handleAddEvent = () => {
    if (selectedDate && selectedTime && selectedEvent) {
      const newEvent = {
        date: selectedDate,
        time: selectedTime,
        event: selectedEvent,
      };
      setEvents([...events, newEvent]);

      // Clear inputs
      setSelectedDate("");
      setSelectedTime("");
      setSelectedEvent("");
    }
  };

  return (
    <div>
        <Navbar/>
        <LeftSidebar/>
    <div className="max-w-4xl mx-auto p-28 bg-white shadow-md rounded-lg mt-5">
      <h1 className="text-3xl font-bold text-center mb-6 text-teal-800">
        📅 Patient Calendar – Book an Event
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border rounded cursor-pointer p-2"
        />
        <input
          type="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="border rounded cursor-pointer p-2"
        />
        <select
          value={selectedEvent}
          onChange={(e) => setSelectedEvent(e.target.value)}
          className="border rounded cursor-pointer p-2"
        >
          <option value="">-- Select Event --</option>
          {eventOptions.map((event, index) => (
            <option key={index} value={event}>
              {event}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleAddEvent}
        className="bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800 cursor-pointer"
      >
        Add Event
      </button>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">
        Recorded Events
      </h2>
      {events.length === 0 ? (
        <p className="text-gray-500">No events recorded yet.</p>
      ) : (
        <ul className="space-y-4">
          {events.map((event, index) => (
            <li key={index} className="border-b pb-3">
              <div className="font-semibold text-gray-800">{event.event}</div>
              <div className="text-sm text-gray-600">Date: {event.date}</div>
              <div className="text-sm text-green-600">Time: {event.time}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
};

export default Calendar;

