import Navigation from '@/components/ui/navigation';
import { projects } from '@/lib/project-data';
import ProjectCard from '@/components/ui/ProjectCard';
import Footer from '@/components/sections/Footer';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-10">
        {/* Hero Section */}
        <section className="pt-20 pb-5 bg-primary text-text-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">MY PROJECTS</h1>
            <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-surface-elevated">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-4xl font-bold text-foreground">MY SERVICES</h2>
              {/* <button className="text-primary hover:text-accent transition-colors font-medium">
                VIEW ALL
              </button> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl font-bold text-primary">01</div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Frontend Development</h3>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl font-bold text-primary">02</div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">UI/UX Design</h3>
              </div>

              
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;