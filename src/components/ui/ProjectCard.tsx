import { ExternalLink, Github, Figma } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { type Project } from '@/lib/project-data';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const navigate = useNavigate();

  const hasAnyLink = project.demoUrl || project.githubUrl || project.figma;

  return (
    <Card
      key={project.id}
      className="group overflow-hidden border border-border hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/project/${project.id}`)}
    >
      <div className="relative overflow-hidden">
        {/* Project Image */}
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Buttons (only if links exist) */}
        {hasAnyLink && (
          <div
            className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            {project.figma && (
              <Button asChild size="sm" variant="secondary" className="flex-1">
                <a href={project.figma} target="_blank" rel="noopener noreferrer">
                  <Figma size={16} className="mr-1" />
                  Figma
                </a>
              </Button>
            )}
            {project.demoUrl && (
              <Button asChild size="sm" variant="secondary" className="flex-1">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} className="mr-1" />
                  Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild size="sm" variant="outline" className="flex-1">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github size={16} className="mr-1" />
                  Code
                </a>
              </Button>
            )}
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <CardHeader>
        <CardTitle className="text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground line-clamp-3">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
