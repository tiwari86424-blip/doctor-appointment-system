import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    text: "Booking an appointment was incredibly easy. The interface is clean and the doctors were highly professional.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    text: "Loved how quickly I found a specialist. Everything was simple and smooth from start to finish.",
  },
  {
    id: 3,
    name: "Ananya Gupta",
    text: "Excellent experience! The website feels modern and appointments can be booked in just a few clicks.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">

        <div className="section-title">
          <h2>What Our Patients Say</h2>
          <p>
            Trusted by thousands of happy patients across India.
          </p>
        </div>

        <div className="testimonial-grid">

          {reviews.map((review) => (
            <div className="testimonial-card" key={review.id}>

              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p>"{review.text}"</p>

              <h4>{review.name}</h4>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;