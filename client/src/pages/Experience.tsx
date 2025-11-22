import TimelineItem from "@/components/TimelineItem";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  // TODO: Replace these placeholder logos with actual company logos
  // You can place logo files in attached_assets/ and import them like:
  // import xtremsoftLogo from '@assets/xtremsoft-logo.png';
  // import adobeLogo from '@assets/adobe-logo.png';
  const xtremsoftLogo = "https://via.placeholder.com/100x100/4A90E2/ffffff?text=XT";
  const adobeLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/512px-Adobe_Systems_logo_and_wordmark.svg.png";

  return (
    <div className="min-h-screen px-8 md:px-16 lg:px-24 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-4">Experience</h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Professional internships and work experience
          </p>
        </div>

        <div className="space-y-16">
          <TimelineItem
            year="September – December 2025"
            title="XtremSoft Technologies, Mumbai"
            subtitle="Full-Stack Developer Intern"
            logo={xtremsoftLogo}
          />
          <div className="ml-12 -mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Problem</h3>
                <p className="text-base text-foreground/80 font-light leading-relaxed">
                  Client-employee appointment booking was entirely manual, relying on Slack and WhatsApp messages, causing inefficiency, missed bookings, and poor tracking of availability across the organization.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Solution</h3>
                <p className="text-base text-foreground/80 font-light leading-relaxed">
                  Built a full-stack system featuring a conversational AI interface that qualifies client needs and dynamically routes them to the correct employee. Created secure dashboards for employees to manage availability in real-time and for admins to monitor all appointments. Implemented Redis caching to reduce database dependence and improve performance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Impact</h3>
                <ul className="space-y-2">
                  <li className="text-base text-foreground/80 font-light leading-relaxed flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Eliminated 100% of manual booking overhead</span>
                  </li>
                  <li className="text-base text-foreground/80 font-light leading-relaxed flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Reduced booking errors by 95% through automated routing</span>
                  </li>
                  <li className="text-base text-foreground/80 font-light leading-relaxed flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Improved system response time by 60% with Redis caching</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ml-12 -mt-4">
            <div className="text-sm text-muted-foreground tracking-wider uppercase font-light mb-3">Tech Stack</div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs font-light">Node.js</Badge>
              <Badge variant="secondary" className="text-xs font-light">Express.js</Badge>
              <Badge variant="secondary" className="text-xs font-light">MongoDB</Badge>
              <Badge variant="secondary" className="text-xs font-light">Redis</Badge>
            </div>
          </div>

          <TimelineItem
            year="May – July 2024"
            title="Adobe, Bangalore"
            subtitle="Backend Engineering Intern"
            logo={adobeLogo}
          />
          <div className="ml-12 -mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Problem</h3>
                <p className="text-base text-foreground/80 font-light leading-relaxed">
                  Microservice monitoring lacked proper visibility into API performance and latency patterns, making it difficult to identify bottlenecks, optimize performance, and manage infrastructure costs effectively across global data centers.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Solution</h3>
                <p className="text-base text-foreground/80 font-light leading-relaxed">
                  Designed and deployed an optimized Prometheus monitoring system with custom Grafana dashboards. Engineered histogram metrics to track p95, p98, and p99 API latencies across all global data centers. Contributed to enterprise-grade Java backend using Spring MVC and Maven to improve system observability and performance tracking.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Impact</h3>
                <ul className="space-y-2">
                  <li className="text-base text-foreground/80 font-light leading-relaxed flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Boosted query speed by 40% through optimized metrics collection</span>
                  </li>
                  <li className="text-base text-foreground/80 font-light leading-relaxed flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Slashed infrastructure costs by 30% via better resource allocation insights</span>
                  </li>
                  <li className="text-base text-foreground/80 font-light leading-relaxed flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Extended data retention by 6× for historical analysis</span>
                  </li>
                  <li className="text-base text-foreground/80 font-light leading-relaxed flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Achieved 98% accuracy in performance visualization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ml-12 -mt-4">
            <div className="text-sm text-muted-foreground tracking-wider uppercase font-light mb-3">Tech Stack</div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs font-light">Java</Badge>
              <Badge variant="secondary" className="text-xs font-light">Spring MVC</Badge>
              <Badge variant="secondary" className="text-xs font-light">Prometheus</Badge>
              <Badge variant="secondary" className="text-xs font-light">Grafana</Badge>
              <Badge variant="secondary" className="text-xs font-light">Maven</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
