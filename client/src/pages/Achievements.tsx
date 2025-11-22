export default function Achievements() {
  const achievements = [
    {
      title: "JEE Advanced Qualified",
      detail: "All India Rank of 25,123 (2021)",
    },
    {
      title: "MHT-CET 98.6 Percentile",
      detail: "State exam with 99.2 percentile in Mathematics (2021)",
    },
    {
      title: "JEE Mains 97.1 Percentile",
      detail: "All India percentile with rank 26,984 (2021)",
    },
    {
      title: "GRE Score 313",
      detail: "Quant: 161, Verbal: 152",
    },
    {
      title: "School Prefect",
      detail: "Leadership and responsibility (2019)",
    },
    {
      title: "Algorithmic Toolbox Certification",
      detail: "UC San Diego via Coursera (2025)",
    },
  ];

  const activities = [
    "Senior Fest Coordinator at Aarohan, NIT Durgapur's Annual Techno-Management fest (2025)",
    "Content creator on LinkedIn with 23,000+ impressions and 2.5k followers on technology and career growth (2025)",
    "200-day streak learning German on Duolingo (2025)",
    "Convener at GNU/Linux Users' Group NIT Durgapur (2024-2025)",
    "Captain of Athletics team at Inter-NIT Athletics Meet (2024)",
    "Mentored 150+ freshmen in Open Source Starterpack workshop on Git and GitHub (2023)",
    "Special mention for hip-hop dance performance at NIT's Got Talent (2022)",
    "First position in 4x100m relay event at ASHA, Resonance Eduventures, Kota (2020)",
    "Silver medal in throwball at school level, St. Helena's School, Pune (2016)",
  ];

  return (
    <div className="min-h-screen px-8 md:px-16 lg:px-24 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-4">
            Achievements & Activities
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Awards, certifications, and extra-curricular involvement
          </p>
        </div>

        <section className="mb-20">
          <h2 className="text-3xl font-normal mb-10">Academic Achievements</h2>
          <div className="space-y-10">
            {achievements.map((achievement, index) => (
              <div key={index} data-testid={`achievement-${index}`}>
                <h3 className="text-2xl font-normal mb-2 text-foreground">{achievement.title}</h3>
                <p className="text-base text-muted-foreground font-light">{achievement.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-normal mb-8">Extra-Curricular Activities</h2>
          <div className="bg-card rounded-lg p-8 border border-card-border">
            <ul className="space-y-4">
              {activities.map((activity, index) => (
                <li
                  key={index}
                  className="text-base text-foreground/80 font-light leading-relaxed flex gap-3"
                  data-testid={`activity-${index}`}
                >
                  <span className="text-primary mt-1.5">•</span>
                  <span className="flex-1">{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
}
