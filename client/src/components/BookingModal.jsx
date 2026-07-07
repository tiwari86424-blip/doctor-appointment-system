import { useState } from "react";

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM"
];

function BookingModal({ doctor, onClose, onConfirm }) {
  const [date, setDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleBooking = () => {
    if (!date || !selectedTime) {
      alert("Please select a date and time.");
      return;
    }

    onConfirm(doctor, date, selectedTime);

    setDate("");
    setSelectedTime("");
  };

  return (
    <div className="modal-overlay">

      <div className="booking-modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          ×
        </button>

        <h2>Book Appointment</h2>

        <div className="selected-doctor">

          <img
            src={doctor.image}
            alt={doctor.name}
          />

          <div>

            <h3>{doctor.name}</h3>

            <p>{doctor.specialty}</p>

            <span>{doctor.hospital}</span>

          </div>

        </div>

        <label>Select Date</label>

        <input
          type="date"
          value={date}
          min={new Date().toISOString().split("T")[0]}
          onChange={(e) => setDate(e.target.value)}
        />

        <label>Available Time Slots</label>

        <div className="time-grid">

          {timeSlots.map((slot) => (

            <button
              key={slot}
              className={
                selectedTime === slot
                  ? "time-slot active-slot"
                  : "time-slot"
              }
              onClick={() => setSelectedTime(slot)}
            >
              {slot}
            </button>

          ))}

        </div>

        <button
          className="confirm-booking"
          onClick={handleBooking}
        >
          Confirm Appointment
        </button>

      </div>

    </div>
  );
}

export default BookingModal;