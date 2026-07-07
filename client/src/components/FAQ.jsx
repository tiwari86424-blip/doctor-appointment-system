import { useState } from "react";

const faqs = [
  {
    question: "How do I book an appointment?",
    answer:
      "Choose a doctor, click Book Appointment, select a date and available time slot.",
  },
  {
    question: "Can I cancel an appointment?",
    answer:
      "Yes. Visit the My Appointments section and click Cancel.",
  },
  {
    question: "Can I choose my preferred doctor?",
    answer:
      "Yes. You can search and filter doctors before booking.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "This frontend demo showcases the interface. In a production application, patient data would be securely protected.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq">

      <div className="container">

        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
        </div>

        {faqs.map((faq, index) => (

          <div className="faq-item" key={index}>

            <button
              className="faq-question"
              onClick={() =>
                setOpen(open === index ? null : index)
              }
            >
              {faq.question}
              <span>{open === index ? "-" : "+"}</span>
            </button>

            {open === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}

          </div>

        ))}

      </div>

    </section>
  );
}

export default FAQ;