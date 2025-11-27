import { motion } from "framer-motion";
import PhotoGallery from "@/components/PhotoGallery";
import lectureImg from '@assets/WhatsApp Image 2025-11-22 at 9.35.27 PM_1763827867065.jpeg';
import speakingImg from '@assets/WhatsApp Image 2025-11-22 at 9.33.11 PM_1763827867066.jpeg';
import nitJacketImg from '@assets/WhatsApp Image 2025-11-22 at 9.31.02 PM_1763827867067.jpeg';
import nitBuildingImg from '@assets/WhatsApp Image 2025-11-22 at 9.29.00 PM_1763827867067.jpeg';
import posterArtImg from '@assets/WhatsApp Image 2025-11-22 at 9.27.12 PM_1763827867067.jpeg';
import ropeActivityImg from '@assets/WhatsApp Image 2025-11-22 at 9.14.00 PM_1763827867068.jpeg';
import schoolSportsImg from '@assets/WhatsApp Image 2025-11-22 at 9.13.12 PM_1763827867068.jpeg';
import medalImg from '@assets/WhatsApp Image 2025-11-22 at 9.07.29 PM_1763827867069.jpeg';
import conferenceImg from '@assets/WhatsApp Image 2025-11-22 at 9.10.05 PM_1763827867069.jpeg';

export default function Gallery() {
  const photos = [
    { src: lectureImg, alt: 'Mentoring workshop', caption: 'Mentored 150+ freshmen in Git/GitHub workshop', focusPosition: 'object-[center_20%]' },
    { src: speakingImg, alt: 'Speaking at event', caption: 'Convener at GNU/Linux Users\' Group', focusPosition: 'object-[center_25%]' },
    { src: nitBuildingImg, alt: 'Adobe office', caption: 'Product Intern at Adobe', focusPosition: 'object-center' },
    { src: medalImg, alt: 'Marathon finisher', caption: '16km Monsoon Hill Marathon Finisher', focusPosition: 'object-[center_45%]' },
    { src: schoolSportsImg, alt: 'March past winners', caption: 'March Past Winners in St. Helena\'s School', focusPosition: 'object-[center_35%]' },
    { src: ropeActivityImg, alt: 'Rock climbing', caption: 'Rock climbing and Adventure', focusPosition: 'object-[center_40%]' },
    { src: nitJacketImg, alt: 'Athletics meet', caption: 'Represented NIT Durgapur at Inter-NIT Athletics Meet in 100m sprint', focusPosition: 'object-[center_40%]' },
    { src: posterArtImg, alt: 'Volunteer work', caption: 'Volunteered in the Study Material Preparation for visually-impaired children', focusPosition: 'object-center' },
    { src: conferenceImg, alt: 'AI Hack Day', caption: 'AI Hack Day, Mumbai', focusPosition: 'object-[center_85%]' },
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
            A Retrospective :D
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
