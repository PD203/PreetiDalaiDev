import profilePhoto from '@/assets/profile-side.jpg';
import { Section } from '@/components/ui/section';

const About = () => {
  const personalInfo = [
    { label: 'Birthday', value: '20 October 2003' },
    { label: 'Age', value: '22' },
    { label: 'Nationality', value: 'Indian' },
    { label: 'Field of Study', value: 'computer science' },
    { label: 'Degree', value: 'Bachelor of Computer Applications' },
    { label: 'Freelance', value: 'Available' },
    { label: 'Email', value: 'preetidalai940@gmail.com' },
    { label: 'Address', value: 'Delhi, India' }
  ];

  return (
    <Section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            ABOUT ME
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">PREETI DALAI</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              FRONTEND DEVELOPER 
            </p>

            <div className="space-y-4 mb-8">
              <p className="text-muted-foreground leading-relaxed">
              Hi, I’m Preeti Dalai — a Frontend Developer and UI Designer from Delhi, India. I craft clean, responsive, and user-friendly websites using HTML, CSS, JavaScript, React, and Tailwind CSS, turning ideas into intuitive digital experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
              My strength lies in writing maintainable code, designing intuitive interfaces, and delivering fast, engaging solutions that drive business growth. While AI is reshaping frontend development and UI design, I leverage it smartly—using AI tools to accelerate workflows, refine ideas, and enhance efficiency. More importantly, I fine-tune and correct AI-generated code to align perfectly with client needs, ensuring precision and customization.
              </p>

            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
            Curious, detail-oriented, and always learning, I stay ahead of tech and design trends to create impactful web experiences. Ready to collaborate on something extraordinary? Let’s build it together!
            </p>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                    {info.label}
                  </span>
                  <span className="text-muted-foreground">{info.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-96 h-96 bg-accent rounded-full p-3">
                <div className="w-full h-full rounded-full overflow-hidden bg-surface-elevated">
                  <img
                    src={profilePhoto}
                    alt="Preeti Dalai - About"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl -z-10 scale-110"></div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;