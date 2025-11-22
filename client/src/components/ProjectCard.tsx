import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "wouter";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({ id, title, description, image }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300" data-testid={`card-project-${id}`}>
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-normal mb-3">{title}</h3>
        <p className="text-base text-muted-foreground font-light leading-relaxed">
          {description}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={`/projects/${id}`}>
          <Button className="w-full" data-testid={`button-details-${id}`}>
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
