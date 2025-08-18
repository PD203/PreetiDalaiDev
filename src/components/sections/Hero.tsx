import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80">
        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <p className="text-accent text-lg font-medium mb-2">Hey, my name is</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-light mb-4">
                RAYAN
                <br />
                <span className="text-accent">BEVER</span>
              </h1>
              <p className="text-xl text-text-light/90 font-medium">UX/UI DESIGNER</p>
            </div>
            
            <p className="text-lg text-text-light/80 mb-8 max-w-lg">
              Creating beautiful, user-centered digital experiences with over 10+ years 
              of expertise in modern design and development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => scrollToSection('projects')}
                className="bg-accent hover:bg-accent-glow text-foreground font-semibold"
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection('contact')}
                className="border-text-light text-text-light hover:bg-text-light hover:text-primary"
              >
                Let's Talk
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <Button variant="ghost" size="sm" className="text-text-light hover:text-accent">
                <Github size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-text-light hover:text-accent">
                <Linkedin size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-text-light hover:text-accent">
                <Mail size={20} />
              </Button>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-accent rounded-full p-2">
                <div className="w-full h-full rounded-full overflow-hidden bg-surface-elevated">
                  <img 
                    src={profilePhoto} 
                    alt="Rayan Bever - UX/UI Designer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Stats */}
              <div className="absolute -right-4 top-12 bg-surface-elevated rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Years experience</div>
                </div>
              </div>
              <div className="absolute -left-4 top-32 bg-surface-elevated rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">400+</div>
                  <div className="text-sm text-muted-foreground">Projects done</div>
                </div>
              </div>
              <div className="absolute -right-8 bottom-12 bg-surface-elevated rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">90+</div>
                  <div className="text-sm text-muted-foreground">Happy clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => scrollToSection('about')}
            className="text-text-light hover:text-accent animate-bounce"
          >
            <ArrowDown size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;