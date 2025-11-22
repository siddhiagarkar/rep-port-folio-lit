import TimelineItem from "@/components/TimelineItem";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function Experience() {
  const xtremsoftLogo = "https://via.placeholder.com/100x100/4A90E2/ffffff?text=XT";
  const adobeLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/512px-Adobe_Systems_logo_and_wordmark.svg.png";

  return (
    <div className="min-h-screen px-8 md:px-16 lg:px-24 py-16">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-4">Experience</h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Professional internships and work experience
          </p>
        </motion.div>

        <div className="space-y-20">
          {/* XtremSoft Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TimelineItem
              year="September – December 2025"
              title="XtremSoft Technologies, Mumbai"
              subtitle="Full-Stack Developer Intern"
              logo={xtremsoftLogo}
            />
            <div className="ml-12 -mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Problem Card */}
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-50/50 dark:from-blue-950/30 dark:to-blue-950/20 border-blue-200 dark:border-blue-900">
                  <h3 className="text-lg font-semibold mb-4 text-blue-900 dark:text-blue-100">Problem</h3>
                  <p className="text-base text-foreground/80 font-light leading-relaxed">
                    Client-employee appointment booking was entirely manual, relying on Slack and WhatsApp messages, causing inefficiency, missed bookings, and poor tracking of availability across the organization.
                  </p>
                </Card>

                {/* Solution Card */}
                <Card className="p-6 bg-gradient-to-br from-emerald-50 to-emerald-50/50 dark:from-emerald-950/30 dark:to-emerald-950/20 border-emerald-200 dark:border-emerald-900">
                  <h3 className="text-lg font-semibold mb-4 text-emerald-900 dark:text-emerald-100">Solution</h3>
                  <p className="text-base text-foreground/80 font-light leading-relaxed">
                    Built a full-stack system featuring a conversational AI interface that qualifies client needs and dynamically routes them to the correct employee. Created secure dashboards for employees to manage availability in real-time and for admins to monitor all appointments. Implemented Redis caching to reduce database dependence and improve performance.
                  </p>
                </Card>

                {/* Impact Card */}
                <Card className="p-6 bg-gradient-to-br from-cyan-50 to-cyan-50/50 dark:from-cyan-950/30 dark:to-cyan-950/20 border-cyan-200 dark:border-cyan-900">
                  <h3 className="text-lg font-semibold mb-4 text-cyan-900 dark:text-cyan-100">Impact</h3>
                  <ul className="space-y-3">
                    <li className="text-base text-foreground/80 font-light leading-relaxed flex gap-3">
                      <span className="text-cyan-600 dark:text-cyan-400 font-bold">✓</span>
                      <span>Eliminated 100% of manual booking overhead</span>
                    </li>
                    <li className="text-base text-foreground/80 font-light leading-relaxed flex gap-3">
                      <span className="text-cyan-600 dark:text-cyan-400 font-bold">✓</span>
                      <span>Reduced booking errors by 95%</span>
                    </li>
                    <li className="text-base text-foreground/80 font-light leading-relaxed flex gap-3">
                      <span className="text-cyan-600 dark:text-cyan-400 font-bold">✓</span>
                      <span>Improved system response by 60%</span>
                    </li>
                  </ul>
                </Card>
              </div>
              <div className="mt-6">
                <div className="text-sm text-muted-foreground tracking-wider uppercase font-light mb-3">Tech Stack</div>
                <div className="flex flex-wrap gap-3">
                  {["Node.js", "Express.js", "MongoDB", "Redis"].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-100 rounded-full text-xs font-light">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Adobe Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <TimelineItem
              year="May – July 2024"
              title="Adobe, Bangalore"
              subtitle="Backend Engineering Intern"
              logo={adobeLogo}
            />
            <div className="ml-12 -mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Problem Card */}
                <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-50/50 dark:from-orange-950/30 dark:to-orange-950/20 border-orange-200 dark:border-orange-900">
                  <h3 className="text-lg font-semibold mb-4 text-orange-900 dark:text-orange-100">Problem</h3>
                  <p className="text-base text-foreground/80 font-light leading-relaxed">
                    Microservice monitoring lacked proper visibility into API performance and latency patterns, making it difficult to identify bottlenecks, optimize performance, and manage infrastructure costs effectively across global data centers.
                  </p>
                </Card>

                {/* Solution Card */}
                <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-50/50 dark:from-purple-950/30 dark:to-purple-950/20 border-purple-200 dark:border-purple-900">
                  <h3 className="text-lg font-semibold mb-4 text-purple-900 dark:text-purple-100">Solution</h3>
                  <p className="text-base text-foreground/80 font-light leading-relaxed">
                    Designed and deployed an optimized Prometheus monitoring system with custom Grafana dashboards. Engineered histogram metrics to track p95, p98, and p99 API latencies across all global data centers. Contributed to enterprise-grade Java backend using Spring MVC and Maven to improve system observability and performance tracking.
                  </p>
                </Card>

                {/* Impact Card */}
                <Card className="p-6 bg-gradient-to-br from-pink-50 to-pink-50/50 dark:from-pink-950/30 dark:to-pink-950/20 border-pink-200 dark:border-pink-900">
                  <h3 className="text-lg font-semibold mb-4 text-pink-900 dark:text-pink-100">Impact</h3>
                  <ul className="space-y-3">
                    <li className="text-base text-foreground/80 font-light leading-relaxed flex gap-3">
                      <span className="text-pink-600 dark:text-pink-400 font-bold">✓</span>
                      <span>Boosted query speed by 40%</span>
                    </li>
                    <li className="text-base text-foreground/80 font-light leading-relaxed flex gap-3">
                      <span className="text-pink-600 dark:text-pink-400 font-bold">✓</span>
                      <span>Slashed infrastructure costs by 30%</span>
                    </li>
                    <li className="text-base text-foreground/80 font-light leading-relaxed flex gap-3">
                      <span className="text-pink-600 dark:text-pink-400 font-bold">✓</span>
                      <span>Extended data retention by 6×</span>
                    </li>
                    <li className="text-base text-foreground/80 font-light leading-relaxed flex gap-3">
                      <span className="text-pink-600 dark:text-pink-400 font-bold">✓</span>
                      <span>Achieved 98% visualization accuracy</span>
                    </li>
                  </ul>
                </Card>
              </div>
              <div className="mt-6">
                <div className="text-sm text-muted-foreground tracking-wider uppercase font-light mb-3">Tech Stack</div>
                <div className="flex flex-wrap gap-3">
                  {["Java", "Spring MVC", "Prometheus", "Grafana", "Maven"].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-orange-100 dark:bg-orange-950 text-orange-900 dark:text-orange-100 rounded-full text-xs font-light">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Future Experience Placeholder for Timeline Extension */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TimelineItem
              year="Coming Soon"
              title="Next Opportunity"
              subtitle="Growing the timeline..."
              isLast={true}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
