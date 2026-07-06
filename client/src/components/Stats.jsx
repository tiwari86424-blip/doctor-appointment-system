function Stats() {

    const stats = [

        {
            number: "120+",
            title: "Doctors"
        },

        {
            number: "30+",
            title: "Departments"
        },

        {
            number: "50K+",
            title: "Patients"
        },

        {
            number: "24/7",
            title: "Support"
        }

    ]

    return (

        <section className="stats">

            <div className="container stats-grid">

                {stats.map((item) => (

                    <div
                        className="stat-card"
                        key={item.title}
                    >

                        <h2>{item.number}</h2>

                        <p>{item.title}</p>

                    </div>

                ))}

            </div>

        </section>

    )

}

export default Stats