function Hero() {
  return (
     <section className="hero" id="home">

      <div className="container hero-container">

        <div className="hero-content">

          <span className="hero-tag">
            Trusted Healthcare Platform
          </span>

          <h1>
            Book Appointments
            <br />
            With Trusted Doctors
          </h1>

          <p>
            Find experienced doctors, compare specialists,
            choose your preferred time slot and book
            appointments within minutes.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Book Appointment
            </button>

            <button className="secondary-btn">
              Explore Doctors
            </button>

          </div>

          <div className="hero-stats">

            <div>
              <h2>120+</h2>
              <span>Doctors</span>
            </div>

            <div>
              <h2>50K+</h2>
              <span>Patients</span>
            </div>

            <div>
              <h2>24/7</h2>
              <span>Support</span>
            </div>

          </div>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=900"
            alt="Doctor"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;