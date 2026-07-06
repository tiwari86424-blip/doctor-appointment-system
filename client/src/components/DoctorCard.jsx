import { FaStar, FaMapMarkerAlt, FaBriefcaseMedical } from "react-icons/fa";

function DoctorCard({ doctor, onBook }) {
  return (
    <div className="doctor-card">

      <div className="doctor-image">

        <img
          src={doctor.image}
          alt={doctor.name}
        />

        <span
          className={
            doctor.available
              ? "availability available"
              : "availability unavailable"
          }
        >
          {doctor.available ? "Available Today" : "Unavailable"}
        </span>

      </div>

      <div className="doctor-content">

        <div className="rating">

          <FaStar />

          <span>{doctor.rating}</span>

        </div>

        <h3>{doctor.name}</h3>

        <p className="qualification">
          {doctor.qualification}
        </p>

        <p className="specialty">
          {doctor.specialty}
        </p>

        <div className="doctor-info">

          <p>
            <FaBriefcaseMedical />
            {doctor.experience}
          </p>

          <p>
            <FaMapMarkerAlt />
            {doctor.hospital}
          </p>

        </div>

        <button
          className="book-btn"
          disabled={!doctor.available}
          onClick={() => onBook(doctor)}
        >
          {doctor.available
            ? "Book Appointment"
            : "Unavailable"}
        </button>

      </div>

    </div>
  );
}

export default DoctorCard;