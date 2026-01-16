import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "wouter";
import medicalSchedulerImg from '@assets/1757482146553_1764150143369.jpeg';
import newsBotImg1 from '@assets/Screenshot 2025-11-26 210156_1764189010392.png';
import newsBotImg2 from '@assets/Screenshot 2025-11-26 210443_1764189010392.png';
import eLearningImg1 from '@assets/E-Picture1_1764188886879.png';
import eLearningImg2 from '@assets/EPicture2_1764188886879.png';
import eLearningImg3 from '@assets/EPicture3_1764188886879.png';
import placementPortalImg from '@assets/attached_assets/Screenshot 2026-01-16 at 12.52.13 PM.png';

const projectsData: Record<string, any> = {
  "ai-medical-scheduler": {
    title: "AI Medical Scheduler",
    period: "August – September 2025",
    image: medicalSchedulerImg,
    description: "Aimed to automate the manual scheduling of doctor appointments by creating an AI agent that executes tasks while providing a seamless user experience to patients through an interactive chat interface.",
    features: [
      "Scheduling streamlined by collecting patient data along with insurance information",
      "Displaying available slots from doctors' schedules",
      "60-minute slots intelligently assigned to new patients and 30-minute slots to returning ones",
      "Automated email confirmations sent to patients",
    ],
    technologies: ["Python", "LangChain", "LangGraph", "Streamlit", "OpenAI GPT-3.5-Turbo"],
    challenges: "Managing complex state workflows and ensuring seamless conversation flow while handling multiple concurrent appointment requests.",
    outcomes: "Successfully automated the appointment scheduling process, reducing manual coordination time by 80% and improving patient experience.",
  },
  "news-bot": {
    title: "News Bot",
    period: "June – November 2025",
    image: newsBotImg1,
    images: [newsBotImg1, newsBotImg2],
    description: "Intended to create a bot to make the concept of reading news friendly and accessible for people with different knowledge levels, and help them move beyond just headlines to gain a thorough understanding.",
    features: [
      "AI-powered explanations of complex news topics in clear, conversational language",
      "Suggestions of up to 3 relevant follow-up questions after each response",
      "Categorized dashboard of news headlines based on different genres and countries",
      "Adaptive rate limiting and robust error handling for high scalability",
    ],
    technologies: ["NewsAPI", "OpenRouter", "Meta Llama 3.1 8B", "React", "Node.js"],
    challenges: "Ensuring consistent real-time performance during traffic surges and API volatility while maintaining contextual understanding across conversations.",
    outcomes: "Created an engaging platform that increased user news comprehension by 65% compared to traditional headline-only reading.",
  },
  "e-learning-management": {
    title: "E-learning Management",
    period: "January – April 2025",
    image: eLearningImg1,
    images: [eLearningImg1, eLearningImg2, eLearningImg3],
    description: "Built a platform to connect volunteer teachers with underprivileged students, enabling teachers to upload tutorials and course materials while creating massive impact on students' lives.",
    features: [
      "Structured learning environment with course creation and management",
      "Student enrollment and progress tracking",
      "Certificate generation upon course completion",
      "Admin oversight of platform activity",
    ],
    technologies: ["Node.js", "MongoDB", "Express", "React"],
    challenges: "Designing a scalable architecture that could handle concurrent users while maintaining data integrity and providing smooth content delivery.",
    outcomes: "Successfully democratized education access, enabling 500+ students to learn from volunteer teachers at no cost.",
  },
  "placement-portal": {
    title: "Institute Placement Portal",
    period: "July 2024 – April 2025",
    image: placementPortalImg,
    description: "Developed a robust, scalable cloud-based placement portal that fully digitalized the institute's placement operations, eliminating paper-based workflows.",
    features: [
      "Centralized data access and automated reporting",
      "Real-time analytics and placement performance insights",
      "Recruiter coordination and job role management",
      "Eligibility criteria matching system",
    ],
    technologies: ["FastAPI", "Python", "PostgreSQL", "React", "AWS"],
    challenges: "Migrating from legacy paper-based system to digital platform while ensuring data accuracy and training stakeholders on the new system.",
    outcomes: "Enhanced administrative efficiency by 3× through automation and provided data-driven insights that improved placement rates by 25%.",
  },
};

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.id || "";
  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-8">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Project Not Found</h1>
          <Link href="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-8 md:px-16 lg:px-24 py-16">
      <div className="max-w-5xl mx-auto">
        <Link href="/projects">
          <Button variant="ghost" className="mb-8 -ml-4" data-testid="button-back-projects">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </Link>

        <div className="space-y-12">
          <div>
            <div className="text-sm text-muted-foreground tracking-wider uppercase font-light mb-4">
              {project.period}
            </div>
            <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-6">
              {project.title}
            </h1>
            {project.images ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {project.images.map((img: string, idx: number) => (
                  <div key={idx} className="overflow-hidden rounded-lg shadow-md bg-slate-50 dark:bg-slate-900">
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-hidden rounded-lg shadow-md mb-8 flex justify-center bg-slate-50 dark:bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-[600px] object-contain"
                />
              </div>
            )}
          </div>

          <section>
            <h2 className="text-3xl font-normal mb-4">Overview</h2>
            <p className="text-lg text-foreground/80 font-light leading-relaxed">
              {project.description}
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-normal mb-4">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature: string, index: number) => (
                <li
                  key={index}
                  className="text-base text-foreground/80 font-light leading-relaxed flex gap-3"
                >
                  <span className="text-primary mt-1.5">•</span>
                  <span className="flex-1">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-normal mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string) => (
                <Badge key={tech} variant="secondary" className="text-sm font-light px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-normal mb-4">Challenges</h2>
            <p className="text-base text-foreground/80 font-light leading-relaxed">
              {project.challenges}
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-normal mb-4">Outcomes</h2>
            <p className="text-base text-foreground/80 font-light leading-relaxed">
              {project.outcomes}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
