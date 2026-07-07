function AppointmentList({ appointments, onCancel }) {
  return (
    <section className="appointment-section" id="appointments">
      <div className="container">
        <div className="section-heading">
          <h2>My Appointments</h2>
          <p>View your upcoming appointments and manage them easily.</p>
        </div>

        {appointments.length === 0 ? (
          <div className="empty-appointments">
            <h3>No Appointments Yet</h3>
            <p>Book your first appointment with one of our specialists.</p>
          </div>
        ) : (
          <div className="appointment-grid">
            {appointments.map((appointment) => (
              <div className="appointment-card" key={appointment.id}>
                <img
                  src={appointment.doctor.image}
                  alt={appointment.doctor.name}
                />

                <div className="appointment-info">
                  <h3>{appointment.doctor.name}</h3>
                  <p>{appointment.doctor.specialty}</p>
                  <span>📅 {appointment.date}</span>
                  <span>🕒 {appointment.time}</span>
                </div>

                <button
                  className="cancel-btn"
                  onClick={() => onCancel(appointment.id)}
                >
                  Cancel
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default AppointmentList;