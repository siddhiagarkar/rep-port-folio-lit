import { motion } from "framer-motion";
import PhotoGallery from "@/components/PhotoGallery";
import lectureImg from '@assets/WhatsApp Image 2025-11-22 at 9.35.27 PM_1763827867065.jpeg';
import speakingImg from '@assets/WhatsApp Image 2025-11-22 at 9.33.11 PM_1763827867066.jpeg';
import nitJacketImg from '@assets/WhatsApp Image 2025-11-22 at 9.31.02 PM_1763827867067.jpeg';
import nitBuildingImg from '@assets/WhatsApp Image 2025-11-22 at 9.29.00 PM_1763827867067.jpeg';
import posterArtImg from '@assets/WhatsApp Image 2025-11-22 at 9.27.12 PM_1763827867067.jpeg';
import natureImg from '@assets/WhatsApp Image 2025-11-22 at 9.16.15 PM_1763827867068.jpeg';
import ropeActivityImg from '@assets/WhatsApp Image 2025-11-22 at 9.14.00 PM_1763827867068.jpeg';
import schoolSportsImg from '@assets/WhatsApp Image 2025-11-22 at 9.13.12 PM_1763827867068.jpeg';
import medalImg from '@assets/WhatsApp Image 2025-11-22 at 9.07.29 PM_1763827867069.jpeg';
import nitSignImg from '@assets/WhatsApp Image 2025-11-22 at 9.06.56 PM_1763827867069.jpeg';
import conferenceImg from '@assets/WhatsApp Image 2025-11-22 at 9.10.05 PM_1763827867069.jpeg';

export default function Gallery() {
  const photos = [
    { src: lectureImg, alt: 'Presenting at lecture hall', caption: 'Open Source Workshop - Mentoring Freshmen' },
    { src: speakingImg, alt: 'Speaking with microphone', caption: 'LinkedIn Content Creator & Public Speaking' },
    { src: nitBuildingImg, alt: 'NIT Durgapur campus', caption: 'NIT Durgapur - Campus Life' },
    { src: nitSignImg, alt: 'NIT Durgapur entrance', caption: 'National Institute of Technology Durgapur' },
    { src: medalImg, alt: 'Holding athletic medal', caption: 'Athletics Achievement - Medal Win' },
    { src: schoolSportsImg, alt: 'School sports team', caption: '4x100m Relay Champion - ASHA 2020' },
    { src: ropeActivityImg, alt: 'Adventure rope activity', caption: 'Rock Climbing & Adventure Sports' },
    { src: nitJacketImg, alt: 'NIT Durgapur jacket', caption: 'NIT Durgapur - Pride & Identity' },
    { src: posterArtImg, alt: 'Creative poster art', caption: 'Senior Fest Coordinator - Aarohan 2025' },
    { src: conferenceImg, alt: 'Conference event', caption: 'Networking & Professional Events' },
    { src: natureImg, alt: 'Outdoor nature photo', caption: 'Adventure & Outdoor Activities' },
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
