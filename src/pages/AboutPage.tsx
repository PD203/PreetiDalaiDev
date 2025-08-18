import Navigation from '@/components/ui/navigation';
import About from '@/components/sections/About';
import Footer from '@/components/sections/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <About />
        
        {/* Experience Timeline */}
        <section className="py-20 bg-surface-elevated">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                EDUCATION & EXPERIENCE
              </h2>
              <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Education */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-8">Education</h3>
                <div className="space-y-8">
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0 w-16 text-primary font-bold">2010-2012</div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">University of Washington – Seattle</h4>
                      <p className="text-muted-foreground">BA in digital arts and design.</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0 w-16 text-primary font-bold">2012</div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">UW Study Abroad – Lille, France</h4>
                      <p className="text-muted-foreground">ABC Program: Arts & Innovation.</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0 w-16 text-primary font-bold">2013</div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">Visual Design Intern – Better Organics</h4>
                      <p className="text-muted-foreground">Designed product packaging, online campaigns, etc.</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0 w-16 text-primary font-bold">2014</div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">Design Researcher – University of San Diego</h4>
                      <p className="text-muted-foreground">Member of directed research group.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-8">Experience</h3>
                <div className="space-y-8">
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0 w-16 text-primary font-bold">2015-2016</div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">UX/Visual Designer – Intuit, San Diego</h4>
                      <p className="text-muted-foreground">Designed useful and elegant digital experiences across two different mobile platforms.</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0 w-16 text-primary font-bold">2016-2018</div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">Senior UX Designer – Intuit, LA</h4>
                      <p className="text-muted-foreground">Designed and launched multi-platform desktop community homepage focused on tax professionals across the country.</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0 w-16 text-primary font-bold">2019-2021</div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">UX Designer – IBM, LA</h4>
                      <p className="text-muted-foreground">Collaborated with researchers, engineers and product managers throughout design process – from creating research protocols, personas, scenarios, information architecture and wireframes to building user interface prototypes.</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0 w-16 text-primary font-bold">2021-Present</div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">UX/UI Designer – IBM, Marco-en-Barœul</h4>
                      <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor.</p>
                    </div>
                  </div>
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

export default AboutPage;