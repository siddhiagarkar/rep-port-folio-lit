import ProjectCard from '../ProjectCard';
import medicalSchedulerImg from '@assets/generated_images/ai_medical_scheduler_interface.png';

export default function ProjectCardExample() {
  return (
    <div className="max-w-md">
      <ProjectCard
        id="ai-medical-scheduler"
        title="AI Medical Scheduler"
        description="Automated doctor appointment scheduling system with AI-powered chat interface and intelligent slot allocation."
        image={medicalSchedulerImg}
      />
    </div>
  );
}
