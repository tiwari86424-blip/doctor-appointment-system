import {
    FaUserMd,
    FaCalendarCheck,
    FaHeadset,
    FaShieldAlt
} from "react-icons/fa";

function WhyUs() {

    const features = [

        {
            icon: <FaUserMd />,
            title: "Qualified Doctors",
            text: "Experienced specialists across multiple healthcare departments."
        },

        {
            icon: <FaCalendarCheck />,
            title: "Easy Booking",
            text: "Book appointments within minutes using a simple interface."
        },

        {
            icon: <FaShieldAlt />,
            title: "Trusted Care",
            text: "Safe and reliable healthcare services for every patient."
        },

        {
            icon: <FaHeadset />,
            title: "24/7 Support",
            text: "Our support team is available whenever you need assistance."
        }

    ]

    return (

        <section
            id="whyus"
            className="why-us"
        >

            <div className="container">

                <h2 className="section-title">
                    Why Choose Us
                </h2>

                <p className="section-subtitle">
                    Healthcare made simple, accessible and reliable.
                </p>

                <div className="why-grid">

                    {features.map((item) => (

                        <div
                            className="why-card"
                            key={item.title}
                        >

                            <div className="why-icon">
                                {item.icon}
                            </div>

                            <h3>
                                {item.title}
                            </h3>

                            <p>
                                {item.text}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    )

}

export default WhyUs