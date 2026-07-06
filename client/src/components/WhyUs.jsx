import {
  FaUserMd,
  FaCalendarCheck,
  FaShieldAlt,
  FaHeadset
} from "react-icons/fa";

function WhyUs() {

  const features = [
    {
      icon: <FaUserMd />,
      title: "Experienced Doctors",
      description:
        "Consult highly qualified specialists with years of experience across multiple medical fields."
    },
    {
      icon: <FaCalendarCheck />,
      title: "Easy Appointment Booking",
      description:
        "Book your preferred doctor in just a few clicks with an intuitive appointment system."
    },
    {
      icon: <FaShieldAlt />,
      title: "Trusted Healthcare",
      description:
        "Your medical information stays secure while you receive quality healthcare services."
    },
    {
      icon: <FaHeadset />,
      title: "24×7 Patient Support",
      description:
        "Need help? Our support team is available round the clock to assist you."
    }
  ];

  return (
    <section
      className="why-section"
      id="whyus"
    >

      <div className="container">

        <h2 className="section-title">
          Why Choose HealthCare+
        </h2>

        <p className="section-subtitle">
          We make healthcare accessible, reliable and convenient for every patient.
        </p>

        <div className="why-grid">

          {features.map((feature) => (

            <div
              className="why-card"
              key={feature.title}
            >

              <div className="why-icon">
                {feature.icon}
              </div>

              <h3>
                {feature.title}
              </h3>

              <p>
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyUs;