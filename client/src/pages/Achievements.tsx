import { motion } from "framer-motion";

export default function Achievements() {
  const achievements = [
    "JEE Advanced Qualified - All India Rank 25,123 (2021)",
    "MHT-CET 98.6 Percentile - 99.2% in Mathematics (2021)",
    "JEE Mains 97.1 Percentile - All India Rank 26,984 (2021)",
    "GRE Score 313 - Quant: 161, Verbal: 152",
    "School Prefect - Leadership and responsibility (2019)",
    "Algorithmic Toolbox Certification - UC San Diego via Coursera (2025)",
  ];

  const activities = [
    "Senior Fest Coordinator - Aarohan, NIT Durgapur's Annual Techno-Management Fest (2025)",
    "LinkedIn Content Creator - 23,000+ impressions and 2.5k followers (2025)",
    "Language Learning Streak - 200-day streak learning German on Duolingo (2025)",
    "GNU/Linux Users' Group Convener - NIT Durgapur (2024-2025)",
    "Athletics Team Captain - Inter-NIT Athletics Meet (2024)",
    "Open Source Workshop Mentor - Mentored 150+ freshmen in Git and GitHub (2023)",
    "Hip-Hop Dance Performance - Special mention at NIT's Got Talent (2022)",
    "4x100m Relay Champion - First position at ASHA, Resonance Eduventures, Kota (2020)",
    "Throwball Silver Medalist - St. Helena's School, Pune (2016)",
  ];

  return (
    <div className="min-h-screen px-8 md:px-16 lg:px-24 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-4">
            Achievements & Activities
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Awards, certifications, and extra-curricular involvement
          </p>
        </motion.div>

        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-normal mb-8 text-foreground">Academic Achievements</h2>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                data-testid={`achievement-${index}`}
                className="flex items-start gap-4 py-3"
              >
                <span className="text-primary font-light mt-1">•</span>
                <p className="text-base text-foreground/80 font-light leading-relaxed">
                  {achievement}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-normal mb-8 text-foreground">Extra-Curricular Activities</h2>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                data-testid={`activity-${index}`}
                className="flex items-start gap-4 py-3"
              >
                <span className="text-primary font-light mt-1">•</span>
                <p className="text-base text-foreground/80 font-light leading-relaxed">
                  {activity}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
