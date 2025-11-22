interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  description?: string;
  details?: string[];
  isLast?: boolean;
}

export default function TimelineItem({
  year,
  title,
  subtitle,
  description,
  details,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative flex gap-8 pb-12" data-testid={`timeline-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-chart-2 z-10" />
        {!isLast && <div className="w-0.5 flex-1 bg-border mt-2" />}
      </div>

      <div className="flex-1 -mt-1">
        <div className="text-sm text-muted-foreground tracking-wider uppercase font-light mb-2">
          {year}
        </div>
        <h3 className="text-2xl font-normal mb-1">{title}</h3>
        <p className="text-lg text-muted-foreground font-light mb-3">{subtitle}</p>
        {description && (
          <p className="text-base text-foreground/80 font-light leading-relaxed mb-3">
            {description}
          </p>
        )}
        {details && details.length > 0 && (
          <ul className="space-y-2">
            {details.map((detail, index) => (
              <li
                key={index}
                className="text-sm text-foreground/70 font-light leading-relaxed flex gap-2"
              >
                <span className="text-primary mt-1.5">•</span>
                <span className="flex-1">{detail}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
