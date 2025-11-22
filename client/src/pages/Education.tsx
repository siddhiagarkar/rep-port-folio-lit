import { motion } from "framer-motion";
import TimelineItem from "@/components/TimelineItem";

export default function Education() {
  const educationData = [
    {
      year: "2021 - 2025",
      title: "National Institute of Technology, Durgapur",
      location: "Durgapur, West Bengal",
      subtitle: "Bachelor of Technology, Electronics and Communication Engineering",
      score: "CGPA: 8.11/10",
    },
    {
      year: "2021",
      title: "St. John's Senior Secondary School, Kota",
      location: "Kota, Rajasthan",
      subtitle: "Higher Secondary Examination, CBSE",
      score: "Aggregate: 91%",
    },
    {
      year: "2019",
      title: "St. Helena's School, Pune",
      location: "Pune, Maharashtra",
      subtitle: "Secondary School Examination, ICSE",
      score: "Aggregate: 93.6%",
      isLast: true,
    },
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
          <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-4">Education</h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Academic journey and qualifications
          </p>
        </motion.div>

        <motion.div 
          className="space-y-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {educationData.map((edu, index) => (
            <div key={index} className="relative flex gap-8 pb-12" data-testid={`timeline-${edu.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-chart-2 z-10" />
                {!edu.isLast && <div className="w-0.5 flex-1 bg-border mt-2" />}
              </div>

              <div className="flex-1 -mt-1 bg-slate-800 dark:bg-slate-900 text-white dark:text-slate-100 p-6 rounded-lg">
                <div className="text-xs text-slate-300 dark:text-slate-400 tracking-wider uppercase font-light mb-2">
                  {edu.year}
                </div>
                <h3 className="text-2xl font-normal mb-1 text-white dark:text-slate-50">{edu.title}</h3>
                <p className="text-sm text-slate-300 dark:text-slate-400 font-light italic mb-2">{edu.location}</p>
                <p className="text-lg text-slate-200 dark:text-slate-300 font-light mb-2">{edu.subtitle}</p>
                <p className="text-base text-slate-100 dark:text-slate-200 font-light leading-relaxed mb-3">
                  <span className="font-semibold text-slate-50 dark:text-white">{edu.score}</span>
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
