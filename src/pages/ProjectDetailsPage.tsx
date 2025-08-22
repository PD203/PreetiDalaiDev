import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Play } from 'lucide-react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { projects } from '@/lib/project-data';

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Project Not Found
          </h1>
          <Link to="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link to="/projects">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft size={16} className="mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>

        {/* Project Details */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Section - Image Gallery */}
              <div className="space-y-6">
                {/* Main Preview with Arrows */}
                <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                  <img
                    src={project.images[selectedImage]}
                    alt={`${project.title} screenshot ${selectedImage + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Left Arrow */}
                  {selectedImage > 0 && (
                    <button
                      onClick={() => setSelectedImage((prev) => prev - 1)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background rounded-full p-2 shadow"
                    >
                      <ArrowLeft size={20} />
                    </button>
                  )}

                  {/* Right Arrow */}
                  {selectedImage < project.images.length - 1 && (
                    <button
                      onClick={() => setSelectedImage((prev) => prev + 1)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background rounded-full p-2 shadow"
                    >
                      <ArrowLeft size={20} className="rotate-180" />
                    </button>
                  )}
                </div>

                {/* Thumbnail Gallery - Wrapped */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index
                          ? 'border-primary shadow-lg'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${project.title} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}

                  {/* Video Thumbnail */}
                  {project.video && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="w-20 h-20 rounded-lg overflow-hidden border-2 border-border hover:border-primary/50 transition-all bg-muted flex items-center justify-center group">
                          <Play
                            size={24}
                            className="text-primary group-hover:scale-110 transition-transform"
                          />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <div className="aspect-video bg-muted rounded-lg">
                          <video className="w-full h-full" controls autoPlay>
                            <source src={project.video} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </div>

              {/* Right Section - Project Details */}
              <div className="space-y-8">
                {/* Header */}
                <div>
                  <Badge variant="secondary" className="mb-4">
                    {project.category}
                  </Badge>
                  <h1 className="text-4xl font-bold text-foreground mb-4">
                    {project.title}
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {project.keyFeatures.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge
                        className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded"
                        key={index}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button asChild size="lg">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} className="mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetailsPage;
