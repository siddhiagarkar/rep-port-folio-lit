interface PhotoGalleryProps {
  photos: { src: string; alt: string; caption: string; focusPosition?: string }[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="group cursor-pointer overflow-hidden rounded-lg"
          data-testid={`photo-${index}`}
        >
          <div className="aspect-[4/3] overflow-hidden bg-muted">
            <img
              src={photo.src}
              alt={photo.alt}
              className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${photo.focusPosition || 'object-center'}`}
            />
          </div>
          <p className="mt-3 text-sm text-muted-foreground font-light text-center">
            {photo.caption}
          </p>
        </div>
      ))}
    </div>
  );
}
