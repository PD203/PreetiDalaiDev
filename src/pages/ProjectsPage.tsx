import Navigation from '@/components/ui/navigation';
import Projects from '@/components/sections/Projects';
import Footer from '@/components/sections/Footer';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-primary text-text-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">MY PROJECTS</h1>
            <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-text-light/90 max-w-3xl mx-auto leading-relaxed">
              CREATIVE. PROFESSIONAL. ETHICAL.
            </p>
            <p className="text-lg text-text-light/80 max-w-3xl mx-auto mt-6">
              Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, velit. Nullam et maximus lorem. 
              Suspendisse maximus dolor quis consequat volutpat. Donec vehicula elit eu erat pulvinar, vel congue ex 
              egestas. Praesent egestas purus dolor.
            </p>
          </div>
        </section>

        <Projects />

        {/* Services Section */}
        <section className="py-20 bg-surface-elevated">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-4xl font-bold text-foreground">MY SERVICES</h2>
              <button className="text-primary hover:text-accent transition-colors font-medium">
                VIEW ALL
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl font-bold text-primary">01</div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">UX DESIGN</h3>
                <p className="text-muted-foreground">
                  Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus smell 
                  dignissim purus luctus quis.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl font-bold text-primary">02</div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">UI DESIGN</h3>
                <p className="text-muted-foreground">
                  Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus smell 
                  dignissim purus luctus quis.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl font-bold text-primary">03</div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">GRAPHIC DESIGN</h3>
                <p className="text-muted-foreground">
                  Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus smell 
                  dignissim purus luctus quis.
                </p>
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