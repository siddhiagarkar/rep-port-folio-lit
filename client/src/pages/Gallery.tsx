import { motion } from "framer-motion";
import PhotoGallery from "@/components/PhotoGallery";
import skitImg from '@assets/generated_images/school_skit_performance_photo.png';
import marchPastImg from '@assets/generated_images/march_past_ceremony_photo.png';
import volunteeringImg from '@assets/generated_images/volunteering_activity_photo.png';

export default function Gallery() {
  const photos = [
    { src: skitImg, alt: 'School skit performance', caption: 'Theatrical Skit Performance' },
    { src: marchPastImg, alt: 'March past ceremony', caption: 'March Past Ceremony' },
    { src: volunteeringImg, alt: 'Volunteering activity', caption: 'Community Service & Volunteering' },
  ];

  return (
    <div className="min-h-screen px-8 md:px-16 lg:px-24 py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-4">Gallery</h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Moments from my extra-curricular activities and life at NIT Durgapur
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <PhotoGallery photos={photos} />
        </motion.div>
      </div>
    </div>
  );
}
