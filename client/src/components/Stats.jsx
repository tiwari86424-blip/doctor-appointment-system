function Stats() {
  const stats = [
    {
      number: "120+",
      title: "Expert Doctors"
    },
    {
      number: "50K+",
      title: "Happy Patients"
    },
    {
      number: "25+",
      title: "Medical Departments"
    },
    {
      number: "24/7",
      title: "Emergency Support"
    }
  ];

  return (
    <section className="stats-section">

      <div className="container">

        <div className="stats-grid">

          {stats.map((item) => (

            <div
              key={item.title}
              className="stat-card"
            >

              <h2>{item.number}</h2>

              <p>{item.title}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;