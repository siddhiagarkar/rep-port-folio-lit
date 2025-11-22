import PhotoGallery from '../PhotoGallery';
import skitImg from '@assets/generated_images/school_skit_performance_photo.png';
import marchPastImg from '@assets/generated_images/march_past_ceremony_photo.png';
import volunteeringImg from '@assets/generated_images/volunteering_activity_photo.png';

export default function PhotoGalleryExample() {
  const photos = [
    { src: skitImg, alt: 'School skit performance', caption: 'Theatrical Skit Performance' },
    { src: marchPastImg, alt: 'March past ceremony', caption: 'March Past Ceremony' },
    { src: volunteeringImg, alt: 'Volunteering activity', caption: 'Community Volunteering' },
  ];

  return <PhotoGallery photos={photos} />;
}
