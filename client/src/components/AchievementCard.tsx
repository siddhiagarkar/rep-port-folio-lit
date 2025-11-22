import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface AchievementCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function AchievementCard({ icon: Icon, title, description }: AchievementCardProps) {
  return (
    <Card className="hover-elevate transition-all duration-300" data-testid={`card-achievement-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-lg font-normal mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground font-light leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
