import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    budget: '2-5k'
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '', budget: '2-5k' });
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '1-578-156-9845',
      href: 'tel:+15781569845'
    },
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'hola@bever.com',
      href: 'mailto:hola@bever.com'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Address',
      value: '4273 Hermiston Hills, Palau',
      href: '#'
    }
  ];

  const budgetOptions = ['1-2k', '2-5k', '5-10k', '< 10k'];

  return (
    <section id="contact" className="py-20 bg-surface-elevated">
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
              Integer ac interdum lacus. Nunc porta semper lacus a varius pellentesque habitant 
              morbi tristique senectus et netus.
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
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                    placeholder="john@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
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
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project budget (USD)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgetOptions.map((budget) => (
                      <Button
                        key={budget}
                        type="button"
                        variant={formData.budget === budget ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFormData({...formData, budget})}
                      >
                        {budget}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send size={20} className="mr-2" />
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;