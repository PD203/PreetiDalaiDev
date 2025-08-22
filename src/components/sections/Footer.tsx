import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/PD203', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/preeti-dalai-06303b273/', label: 'LinkedIn' },
    { 
      icon: <Mail size={20} />, 
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=preetidalai940@gmail.com', 
      label: 'Email' 
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="bg-primary text-text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent text-foreground rounded-md flex items-center justify-center font-bold text-lg">
                P
              </div>
              <span className="text-xl font-bold">PREETI DALAI</span>
            </div>
            <p className="text-text-light/80 mb-6">
              Creating beautiful, user-centered digital experiences with passion and expertise.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-text-light hover:text-accent hover:bg-text-light/10"
                >
                  <a
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-text-light/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-text-light/80">
              <p>preetidalai940@gmail.com</p>
              <p>Delhi, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-text-light/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-light/60 text-sm">
            © {currentYear} - Preeti Dalai. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;