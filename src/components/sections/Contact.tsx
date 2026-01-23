import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';
import { Section } from '@/components/ui/section';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    budget: ''
  });
  const [currency, setCurrency] = useState('USD');
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      budget: `${currency} ${formData.budget}`,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          setFormData({ name: '', email: '', message: '', budget: '' });
          setIsSubmitting(false);
        },
        (error) => {
          toast({
            title: "Error",
            description: "Something went wrong. Please try again.",
            variant: "destructive",
          });
          console.error(error);
          setIsSubmitting(false);
        }
      );
  };


  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'preetidalai940@gmail.com',
      href: 'mailto:preetidalai940@gmail.com'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Address',
      value: 'Raipur, Chhattisgarh, India',
      href: '#'
    },
  ];

  const budgetOptions = {
    USD: ['1-2k', '2-5k', '5-10k', '> 10k'],
    INR: ['5-10k', '10-30k', '30-50k', '50-100k']
  };

  return (
    <Section id="contact" className="py-20 bg-surface-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            CONTACT ME
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a great idea? Let's talk about your project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              LET'S TALK ABOUT YOUR PROJECT
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Looking for a skilled developer to bring ideas to life? Whether you’re a client with a project
              or a recruiter seeking talent, let’s connect. I create sleek, functional solutions that drive results
              and make a real impact.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <a
                      href={info.href}
                      className="text-foreground font-medium hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Tell me about your project
                  </label>
                  <Textarea
                    id="message"
                    placeholder="I want a super-duper website..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project budget
                  </label>
                  <div className="flex items-center gap-4 mb-2">
                    <Button type="button" variant={currency === 'INR' ? 'default' : 'outline'} onClick={() => setCurrency('INR')}>INR</Button>
                    <Button type="button" variant={currency === 'USD' ? 'default' : 'outline'} onClick={() => setCurrency('USD')}>USD</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {budgetOptions[currency as keyof typeof budgetOptions].map((budget) => (
                      <Button
                        key={budget}
                        type="button"
                        variant={formData.budget === budget ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFormData({ ...formData, budget })}
                      >
                        {budget}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Submit
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Contact;