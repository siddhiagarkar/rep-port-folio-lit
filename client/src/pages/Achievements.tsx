import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

export default function Achievements() {
  const achievements = [
    {
      title: "JEE Advanced Qualified",
      detail: "All India Rank of 25,123 (2021)",
      color: "from-blue-500/20 to-blue-400/10",
      borderColor: "border-blue-200 dark:border-blue-900"
    },
    {
      title: "MHT-CET 98.6 Percentile",
      detail: "State exam with 99.2 percentile in Mathematics (2021)",
      color: "from-emerald-500/20 to-emerald-400/10",
      borderColor: "border-emerald-200 dark:border-emerald-900"
    },
    {
      title: "JEE Mains 97.1 Percentile",
      detail: "All India percentile with rank 26,984 (2021)",
      color: "from-cyan-500/20 to-cyan-400/10",
      borderColor: "border-cyan-200 dark:border-cyan-900"
    },
    {
      title: "GRE Score 313",
      detail: "Quant: 161, Verbal: 152",
      color: "from-orange-500/20 to-orange-400/10",
      borderColor: "border-orange-200 dark:border-orange-900"
    },
    {
      title: "School Prefect",
      detail: "Leadership and responsibility (2019)",
      color: "from-purple-500/20 to-purple-400/10",
      borderColor: "border-purple-200 dark:border-purple-900"
    },
    {
      title: "Algorithmic Toolbox Certification",
      detail: "UC San Diego via Coursera (2025)",
      color: "from-pink-500/20 to-pink-400/10",
      borderColor: "border-pink-200 dark:border-pink-900"
    },
  ];

  const activities = [
    {
      title: "Senior Fest Coordinator",
      detail: "Aarohan, NIT Durgapur's Annual Techno-Management fest (2025)",
      color: "from-blue-500/20 to-blue-400/10",
      borderColor: "border-blue-200 dark:border-blue-900"
    },
    {
      title: "LinkedIn Content Creator",
      detail: "23,000+ impressions and 2.5k followers on technology and career growth (2025)",
      color: "from-emerald-500/20 to-emerald-400/10",
      borderColor: "border-emerald-200 dark:border-emerald-900"
    },
    {
      title: "Language Learning Streak",
      detail: "200-day streak learning German on Duolingo (2025)",
      color: "from-cyan-500/20 to-cyan-400/10",
      borderColor: "border-cyan-200 dark:border-cyan-900"
    },
    {
      title: "GNU/Linux Users' Group Convener",
      detail: "NIT Durgapur (2024-2025)",
      color: "from-orange-500/20 to-orange-400/10",
      borderColor: "border-orange-200 dark:border-orange-900"
    },
    {
      title: "Athletics Team Captain",
      detail: "Inter-NIT Athletics Meet (2024)",
      color: "from-purple-500/20 to-purple-400/10",
      borderColor: "border-purple-200 dark:border-purple-900"
    },
    {
      title: "Open Source Workshop Mentor",
      detail: "Mentored 150+ freshmen in Git and GitHub (2023)",
      color: "from-pink-500/20 to-pink-400/10",
      borderColor: "border-pink-200 dark:border-pink-900"
    },
    {
      title: "Hip-Hop Dance Performance",
      detail: "Special mention at NIT's Got Talent (2022)",
      color: "from-indigo-500/20 to-indigo-400/10",
      borderColor: "border-indigo-200 dark:border-indigo-900"
    },
    {
      title: "4x100m Relay Champion",
      detail: "First position at ASHA, Resonance Eduventures, Kota (2020)",
      color: "from-rose-500/20 to-rose-400/10",
      borderColor: "border-rose-200 dark:border-rose-900"
    },
    {
      title: "Throwball Silver Medalist",
      detail: "School level competition, St. Helena's School, Pune (2016)",
      color: "from-amber-500/20 to-amber-400/10",
      borderColor: "border-amber-200 dark:border-amber-900"
    },
  ];

  return (
    <div className="min-h-screen px-8 md:px-16 lg:px-24 py-16">
      <div className="max-w-7xl mx-auto">
        <PageHeader 
          title="Achievements & Activities" 
          subtitle="Awards, certifications, and extra-curricular involvement"
        />

        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-normal mb-10">Academic Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                data-testid={`achievement-${index}`}
              >
                <div className={`bg-gradient-to-br ${achievement.color} border ${achievement.borderColor} rounded-lg p-6 h-full`}>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{achievement.title}</h3>
                  <p className="text-base text-foreground/70 font-light leading-relaxed">{achievement.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-normal mb-10">Extra-Curricular Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                data-testid={`activity-${index}`}
              >
                <div className={`bg-gradient-to-br ${activity.color} border ${activity.borderColor} rounded-lg p-6 h-full`}>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{activity.title}</h3>
                  <p className="text-base text-foreground/70 font-light leading-relaxed">{activity.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}
