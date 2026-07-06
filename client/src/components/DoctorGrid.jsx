import { useMemo, useState } from "react";
import DoctorCard from "./DoctorCard";
import { doctors } from "../data/doctors";

function DoctorGrid({ onBook }) {
  const [search, setSearch] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");

  const specialties = [
    "All",
    ...new Set(doctors.map((doctor) => doctor.specialty)),
  ];

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchesName = doctor.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesSpecialty =
        selectedSpecialty === "All" ||
        doctor.specialty === selectedSpecialty;

      return matchesName && matchesSpecialty;
    });
  }, [search, selectedSpecialty]);

  return (
    <section className="doctor-section" id="doctors">
      <div className="container">

        <div className="section-heading">
          <h2>Our Specialists</h2>
          <p>
            Find experienced doctors and book appointments
            in just a few clicks.
          </p>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search doctors..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="filter-row">
          {specialties.map((item) => (
            <button
              key={item}
              className={
                selectedSpecialty === item
                  ? "filter-btn active-filter"
                  : "filter-btn"
              }
              onClick={() => setSelectedSpecialty(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="doctor-grid">
          {filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onBook={onBook}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default DoctorGrid;