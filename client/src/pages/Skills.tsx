import { motion } from "framer-motion";
import SkillCategory from "@/components/SkillCategory";
import { Code, Wrench, Database, Zap, Globe } from "lucide-react";

export default function Skills() {
  return (
    <div className="min-h-screen px-8 md:px-16 lg:px-24 py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-4">Skills</h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Technical expertise and proficiencies
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SkillCategory
            title="Languages & Frameworks"
            icon={Code}
            accentColor="text-primary"
            skills={[
              "Python",
              "JavaScript",
              "ReactJS",
              "C++",
              "HTML",
              "CSS",
              "SQL",
              "Django",
              "Node.js",
            ]}
          />
          <SkillCategory
            title="Tools & Technologies"
            icon={Wrench}
            accentColor="text-olive"
            skills={[
              "Prometheus",
              "Grafana",
              "Docker",
              "Render",
              "Vercel",
              "Git",
              "GitHub",
              "Visual Studio Code",
              "IntelliJ",
            ]}
          />
          <SkillCategory
            title="Concepts & Others"
            icon={Database}
            accentColor="text-teal"
            skills={[
              "Data Structures",
              "Algorithms",
              "Linux",
              "Ubuntu",
              "DBMS",
              "OOPs",
              "Computer Networks",
            ]}
          />
          <SkillCategory
            title="AI Tools"
            icon={Zap}
            accentColor="text-orange-600"
            skills={[
              "Claude",
              "Comet",
              "Bolt.AI",
            ]}
          />
          <SkillCategory
            title="Languages"
            icon={Globe}
            accentColor="text-rose-600"
            skills={[
              "English",
              "Hindi",
              "German",
              "Marathi",
            ]}
          />
          <SkillCategory
            title="Standardized Tests"
            icon={Code}
            accentColor="text-amber-600"
            skills={[
              "TOEFL - 106/120",
            ]}
          />
        </motion.div>
      </div>
    </div>
  );
}
