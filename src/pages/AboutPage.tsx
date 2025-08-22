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
                    <div className="flex-shrink-0 w-16 text-primary font-bold">2021-2024</div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">Bachelor of Computer Applications</h4>
                      <p className="text-muted-foreground">Govt. Lahiri PG College, Chirmiri, Chhattisgarh</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-8">Experience</h3>
                <div className="space-y-8">
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0 w-16 text-primary font-bold">June 2025-Present</div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">Frontend Developer (Contributor) – Lugo</h4>
                      <p className="text-muted-foreground">Developed 10+ responsive web pages by translating Figma designs into functional components using Next.js and Tailwind CSS, and integrated RESTful APIs with the backend team.</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0 w-16 text-primary font-bold">2016-2018</div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">Web Development Volunteer – Chatrapur Women’s Degree College</h4>
                      <p className="text-muted-foreground">Maintained and updated the college website by uploading images, PDFs, and new content, while enhancing presentation using HTML/CSS in cPanel.</p>
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