import Navigation from '@/components/ui/navigation';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-10">
        {/* Hero Section */}
        <section className="pt-20 pb-5 bg-primary text-text-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">GET IN TOUCH</h1>
            <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          </div>
        </section>

        <Contact />

        {/* CTA Section */}
        <section className="py-20 bg-background text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-accent/10 rounded-full p-16 mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                LET'S TALK ABOUT YOUR PROJECT
              </h2>
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                CONTACT ME
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;