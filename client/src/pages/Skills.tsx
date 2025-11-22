import { motion } from "framer-motion";
import SkillCategory from "@/components/SkillCategory";
import PageHeader from "@/components/PageHeader";
import { Code, Wrench, Database } from "lucide-react";

export default function Skills() {
  return (
    <div className="min-h-screen px-8 md:px-16 lg:px-24 py-16">
      <div className="max-w-7xl mx-auto">
        <PageHeader 
          title="Skills" 
          subtitle="Technical expertise and proficiencies"
        />

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
        </motion.div>
      </div>
    </div>
  );
}
