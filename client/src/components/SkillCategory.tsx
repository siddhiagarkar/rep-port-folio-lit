import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface SkillCategoryProps {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export default function SkillCategory({ title, icon: Icon, skills }: SkillCategoryProps) {
  return (
    <Card data-testid={`card-skill-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-xl font-normal">
          <Icon className="w-5 h-5 text-primary" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="text-sm font-light px-3 py-1"
              data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
