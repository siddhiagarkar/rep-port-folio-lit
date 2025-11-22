import TimelineItem from "@/components/TimelineItem";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

import xtremsoftImg from '@assets/image_1763824446388.png';

export default function Experience() {
  const xtremsoftLogo = xtremsoftImg;
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

        <div className="space-y-0">
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
                {/* Problem Card - Reddish Pink */}
                <Card className="p-6 bg-gradient-to-br from-rose-50 to-rose-50/50 dark:from-rose-950/30 dark:to-rose-950/20 border-rose-200 dark:border-rose-900">
                  <h3 className="text-lg font-semibold mb-4 text-rose-900 dark:text-rose-100">Problem</h3>
                  <p className="text-base text-foreground/80 font-light leading-relaxed">
                    Manual appointment booking via Slack/WhatsApp caused inefficiency and missed bookings across the organization.
                  </p>
                </Card>

                {/* Solution Card - Green */}
                <Card className="p-6 bg-gradient-to-br from-green-50 to-green-50/50 dark:from-green-950/30 dark:to-green-950/20 border-green-200 dark:border-green-900">
                  <h3 className="text-lg font-semibold mb-4 text-green-900 dark:text-green-100">Solution</h3>
                  <p className="text-base text-foreground/80 font-light leading-relaxed">
                    Built full-stack system with AI chat interface, secure dashboards for availability management, and Redis caching for performance.
                  </p>
                </Card>

                {/* Impact Card - Blue */}
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-50/50 dark:from-blue-950/30 dark:to-blue-950/20 border-blue-200 dark:border-blue-900">
                  <h3 className="text-lg font-semibold mb-4 text-blue-900 dark:text-blue-100">Impact</h3>
                  <ul className="space-y-2">
                    <li className="text-sm text-foreground/80 font-light leading-relaxed flex gap-3">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                      <span>100% elimination of manual overhead</span>
                    </li>
                    <li className="text-sm text-foreground/80 font-light leading-relaxed flex gap-3">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                      <span>95% reduction in booking errors</span>
                    </li>
                    <li className="text-sm text-foreground/80 font-light leading-relaxed flex gap-3">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                      <span>60% faster system response</span>
                    </li>
                  </ul>
                </Card>
              </div>
              <div className="mt-6">
                <div className="text-sm text-muted-foreground tracking-wider uppercase font-light mb-3">Tech Stack</div>
                <div className="flex flex-wrap gap-3">
                  {["Node.js", "Express.js", "MongoDB", "Redis"].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-rose-100 dark:bg-rose-950 text-rose-900 dark:text-rose-100 rounded-full text-xs font-light">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Adobe Experience */}
          <motion.div
            className="pt-0"
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
                {/* Problem Card - Reddish Pink */}
                <Card className="p-6 bg-gradient-to-br from-rose-50 to-rose-50/50 dark:from-rose-950/30 dark:to-rose-950/20 border-rose-200 dark:border-rose-900">
                  <h3 className="text-lg font-semibold mb-4 text-rose-900 dark:text-rose-100">Problem</h3>
                  <p className="text-base text-foreground/80 font-light leading-relaxed">
                    Microservice monitoring lacked visibility into API performance and latency patterns across global data centers.
                  </p>
                </Card>

                {/* Solution Card - Green */}
                <Card className="p-6 bg-gradient-to-br from-green-50 to-green-50/50 dark:from-green-950/30 dark:to-green-950/20 border-green-200 dark:border-green-900">
                  <h3 className="text-lg font-semibold mb-4 text-green-900 dark:text-green-100">Solution</h3>
                  <p className="text-base text-foreground/80 font-light leading-relaxed">
                    Deployed optimized Prometheus monitoring system with custom Grafana dashboards and histogram metrics for latency tracking.
                  </p>
                </Card>

                {/* Impact Card - Blue */}
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-50/50 dark:from-blue-950/30 dark:to-blue-950/20 border-blue-200 dark:border-blue-900">
                  <h3 className="text-lg font-semibold mb-4 text-blue-900 dark:text-blue-100">Impact</h3>
                  <ul className="space-y-2">
                    <li className="text-sm text-foreground/80 font-light leading-relaxed flex gap-3">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                      <span>40% boost in query speed</span>
                    </li>
                    <li className="text-sm text-foreground/80 font-light leading-relaxed flex gap-3">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                      <span>30% reduction in infrastructure costs</span>
                    </li>
                    <li className="text-sm text-foreground/80 font-light leading-relaxed flex gap-3">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                      <span>6× extension of data retention</span>
                    </li>
                    <li className="text-sm text-foreground/80 font-light leading-relaxed flex gap-3">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                      <span>98% visualization accuracy</span>
                    </li>
                  </ul>
                </Card>
              </div>
              <div className="mt-6">
                <div className="text-sm text-muted-foreground tracking-wider uppercase font-light mb-3">Tech Stack</div>
                <div className="flex flex-wrap gap-3">
                  {["Java", "Spring MVC", "Prometheus", "Grafana", "Maven"].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-rose-100 dark:bg-rose-950 text-rose-900 dark:text-rose-100 rounded-full text-xs font-light">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
