import AchievementCard from "@/components/AchievementCard";
import PhotoGallery from "@/components/PhotoGallery";
import { Trophy, Award, BookOpen, Users } from "lucide-react";
import skitImg from '@assets/generated_images/school_skit_performance_photo.png';
import marchPastImg from '@assets/generated_images/march_past_ceremony_photo.png';
import volunteeringImg from '@assets/generated_images/volunteering_activity_photo.png';

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "JEE Advanced Qualified",
      description: "All India Rank of 25,123 in one of India's most competitive engineering entrance examinations (2021).",
    },
    {
      icon: Award,
      title: "MHT-CET 98.6 Percentile",
      description: "Secured 98.6 percentile on State Competitive exam with 99.2 percentile in Mathematics (2021).",
    },
    {
      icon: BookOpen,
      title: "JEE Mains 97.1 Percentile",
      description: "All India percentile of 97.1 with rank 26,984 in JEE Mains examination (2021).",
    },
    {
      icon: Award,
      title: "GRE Score 313",
      description: "Achieved GRE score of 313 with Quant: 161 and Verbal: 152.",
    },
    {
      icon: Users,
      title: "School Prefect",
      description: "Served as School Prefect, demonstrating leadership and responsibility (2019).",
    },
    {
      icon: BookOpen,
      title: "Algorithmic Toolbox Certification",
      description: "Earned certification from UC San Diego via Coursera (2025).",
    },
  ];

  const activities = [
    "Senior Fest Coordinator at Aarohan, NIT Durgapur's Annual Techno-Management fest (2025)",
    "Content creator on LinkedIn with 23,000+ impressions and 2.5k followers on technology and career growth (2025)",
    "200-day streak learning German on Duolingo (2025)",
    "Convener at GNU/Linux Users' Group NIT Durgapur (2024-2025)",
    "Captain of Athletics team at Inter-NIT Athletics Meet (2024)",
    "Mentored 150+ freshmen in Open Source Starterpack workshop on Git and GitHub (2023)",
    "Special mention for hip-hop dance performance at NIT's Got Talent (2022)",
    "First position in 4x100m relay event at ASHA, Resonance Eduventures, Kota (2020)",
    "Silver medal in throwball at school level, St. Helena's School, Pune (2016)",
  ];

  const photos = [
    { src: skitImg, alt: 'School skit performance', caption: 'Theatrical Skit Performance' },
    { src: marchPastImg, alt: 'March past ceremony', caption: 'March Past Ceremony' },
    { src: volunteeringImg, alt: 'Volunteering activity', caption: 'Community Service & Volunteering' },
  ];

  return (
    <div className="min-h-screen px-8 md:px-16 lg:px-24 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-4">
            Achievements & Activities
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Awards, certifications, and extra-curricular involvement
          </p>
        </div>

        <section className="mb-20">
          <h2 className="text-3xl font-normal mb-8">Academic Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} {...achievement} />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-normal mb-8">Extra-Curricular Activities</h2>
          <div className="bg-card rounded-lg p-8 border border-card-border">
            <ul className="space-y-4">
              {activities.map((activity, index) => (
                <li
                  key={index}
                  className="text-base text-foreground/80 font-light leading-relaxed flex gap-3"
                  data-testid={`activity-${index}`}
                >
                  <span className="text-primary mt-1.5">•</span>
                  <span className="flex-1">{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-normal mb-8">School Activities Gallery</h2>
          <PhotoGallery photos={photos} />
        </section>
      </div>
    </div>
  );
}
