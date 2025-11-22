import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import PageHeader from "@/components/PageHeader";
import medicalSchedulerImg from '@assets/generated_images/ai_medical_scheduler_interface.png';
import newsBotImg from '@assets/generated_images/news_bot_application_interface.png';
import eLearningImg from '@assets/generated_images/e-learning_management_platform_ui.png';
import placementPortalImg from '@assets/generated_images/institute_placement_portal_interface.png';

export default function Projects() {
  const projects = [
    {
      id: "ai-medical-scheduler",
      title: "AI Medical Scheduler",
      description: "Automated doctor appointment scheduling system with AI-powered chat interface and intelligent slot allocation.",
      image: medicalSchedulerImg,
    },
    {
      id: "news-bot",
      title: "News Bot",
      description: "AI-powered news bot that demystifies complex topics with conversational explanations and follow-up questions.",
      image: newsBotImg,
    },
    {
      id: "e-learning-management",
      title: "E-learning Management",
      description: "Scalable web platform connecting volunteer teachers with underprivileged students for online education.",
      image: eLearningImg,
    },
    {
      id: "placement-portal",
      title: "Institute Placement Portal",
      description: "Cloud-based placement portal digitalizing the institute's placement operations with real-time analytics.",
      image: placementPortalImg,
    },
  ];

  return (
    <div className="min-h-screen px-8 md:px-16 lg:px-24 py-16">
      <div className="max-w-7xl mx-auto">
        <PageHeader 
          title="Projects" 
          subtitle="Academic and personal projects showcasing technical expertise"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
