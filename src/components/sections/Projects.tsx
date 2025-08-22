import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { projects } from '@/lib/project-data';
import ProjectCard from '../ui/ProjectCard';
import { Section } from '@/components/ui/section';

const Projects = () => {
  return (
    <Section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            MY PROJECTS
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work spanning web development, and design
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Link to="/projects">
          <Button size="lg" variant="outline">
            View All Projects
          </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Projects;