import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-front.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80">
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <p className="text-accent text-lg font-medium mb-2">Hey, my name is</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-light mb-4">
                PREETI
                <br />
                <span className="text-accent">DALAI</span>
              </h1>
              <p className="text-xl text-text-light/90 font-medium">FRONTEND DEVELOPER</p>
            </motion.div>

            <motion.p
              className="text-lg text-text-light/80 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              In the world of AI, I harness its strength to craft code that perfectly matches client visions
            </motion.p>

            {/* Buttons with stagger */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } }
              }}
            >
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => scrollToSection('projects')}
                  className="bg-accent hover:bg-accent-glow text-foreground font-semibold"
                >
                  View My Work
                </Button>
              </motion.div>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <a
                  // href={resumeFile}
                  download="Preeti_Dalai_Resume.pdf"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-text-light text-text-foreground hover:bg-text-light hover:text-primary flex items-center gap-2 w-full"
                  >
                    <Download size={18} />
                    Download Resume
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Social Links with hover animation */}
            <motion.div
              className="flex justify-center lg:justify-start space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {[ 
                { icon: <Github size={20} />, href: "https://github.com/PD203" },
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/preeti-dalai-06303b273/" },
                { icon: <Mail size={20} />, href: "https://mail.google.com/mail/?view=cm&fs=1&to=preetidalai940@gmail.com" }
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button variant="ghost" size="sm" className="text-text-light hover:text-foreground">
                    {link.icon}
                  </Button>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 bg-accent rounded-full p-2"
                initial={{ rotate: 0 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-surface-elevated">
                  <img
                    src={profilePhoto}
                    alt="Preeti Dalai - Frontend Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection('about')}
            className="text-text-light hover:text-foreground animate-bounce"
          >
            <ArrowDown size={24} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
