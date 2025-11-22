import TimelineItem from "@/components/TimelineItem";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  return (
    <div className="min-h-screen px-8 md:px-16 lg:px-24 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-4">Experience</h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Professional internships and work experience
          </p>
        </div>

        <div className="space-y-0">
          <TimelineItem
            year="September – December 2025"
            title="XtremSoft Technologies, Mumbai"
            subtitle="Full-Stack Developer Intern"
            details={[
              "Spearheading a full-stack system to automate client-employee appointment booking, replacing manual Slack/WhatsApp processes",
              "Engineering a conversational interface to qualify client needs and dynamically route them to the correct employee",
              "Delivering secure dashboards for employees to manage availability and for admins to monitor all appointments in real-time",
              "Implemented caching using Redis to reduce dependence on MongoDB database"
            ]}
          />
          <div className="mb-4 ml-12">
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
            details={[
              "Designed and deployed Prometheus & built dashboards on Grafana to create an optimized monitoring system for a microservice",
              "Boosted query speed by 40%, slashed costs by 30%, extended data retention by 6x, and delivered superior visualization with 98% accuracy",
              "Engineered histogram metrics to track p95, p98, and p99 API latencies across global data centers",
              "Contributed to the enterprise-grade Java backend using Spring MVC and Maven"
            ]}
            isLast={true}
          />
          <div className="mb-4 ml-12">
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
