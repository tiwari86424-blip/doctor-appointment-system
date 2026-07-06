function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">

        <div className="hero-text">

          <h1>
            Find Trusted Doctors &
            <span> Book Appointments Easily</span>
          </h1>

          <p>
            Connect with experienced healthcare professionals
            and schedule appointments in just a few clicks.
          </p>

          <div className="hero-buttons">

            <button className="btn btn-primary">
              Book Appointment
            </button>

            <button className="btn btn-outline">
              Explore Doctors
            </button>

          </div>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900"
            alt="Hospital"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;