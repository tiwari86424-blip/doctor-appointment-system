import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import WhyUs from "./components/WhyUs";
import DoctorGrid from "./components/DoctorGrid";
import AppointmentList from "./components/AppointmentList";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Stats />

        <WhyUs />

        <DoctorGrid />

        <AppointmentList />
      </main>

      <Footer />
    </>
  );
}

export default App;