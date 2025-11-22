import { motion } from "framer-motion";
import TimelineItem from "@/components/TimelineItem";

export default function Education() {
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
          <TimelineItem
            year="2021 - 2025"
            title="National Institute of Technology, Durgapur"
            subtitle="Bachelor of Technology, Electronics and Communication Engineering"
            description="CGPA: 8.11/10"
          />
          <TimelineItem
            year="2021"
            title="St. John's Senior Secondary School, Kota"
            subtitle="Higher Secondary Examination, CBSE"
            description="Aggregate: 91%"
          />
          <TimelineItem
            year="2019"
            title="St. Helena's School, Pune"
            subtitle="Secondary School Examination, ICSE"
            description="Aggregate: 93.6%"
            isLast={true}
          />
        </motion.div>
      </div>
    </div>
  );
}
