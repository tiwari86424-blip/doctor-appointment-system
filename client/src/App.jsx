import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import WhyUs from "./components/WhyUs";
import DoctorGrid from "./components/DoctorGrid";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import AppointmentList from "./components/AppointmentList";
import BookingModal from "./components/BookingModal";
import LoginModal from "./components/LoginModal";
import Footer from "./components/Footer";

function App() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [showLogin, setShowLogin] = useState(false);

  const bookAppointment = (doctor, date, time) => {
  console.log("BOOKING:", doctor, date, time);

  const newAppointment = {
    id: Date.now(),
    doctor,
    date,
    time,
  };

  setAppointments((prev) => [...prev, newAppointment]);
  setSelectedDoctor(null);
};

  const cancelAppointment = (id) => {
    setAppointments((prev) =>
      prev.filter((appointment) => appointment.id !== id)
    );
  };

  return (
    <>
      <Navbar onLogin={() => setShowLogin(true)} />

      <Hero />

      <Stats />

      <WhyUs />

      <DoctorGrid
        onBook={(doctor) => setSelectedDoctor(doctor)}
      />
      <Testimonials />
      <FAQ />

      <AppointmentList
        appointments={appointments}
        onCancel={cancelAppointment}
      />

      {selectedDoctor && (
        <BookingModal
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
          onConfirm={bookAppointment}
          
        />
      )}

      {showLogin && (
  <LoginModal
    onClose={() => setShowLogin(false)}
  />
)}

      <Footer />
    </>
  );
}

export default App;