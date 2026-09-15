import profilePhoto from '@/assets/profile-side.jpeg';
import { Section } from '@/components/ui/section';

const About = () => {
  const personalInfo = [
    { label: 'Birthday', value: '20 October 2003' },
    { label: 'Age', value: '23' },
    { label: 'Nationality', value: 'Indian' },
    { label: 'Field of Study', value: 'computer science' },
    { label: 'Degree', value: 'Bachelor of Computer Applications' },
    { label: 'Freelance', value: 'Available' },
    { label: 'Email', value: 'preetidalai558@gmail.com' },
    { label: 'Address', value: 'Bhuvaneswar, India' }
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
            <p className="text-lg text-primary font-semibold mb-6 leading-relaxed">
              UI/UX DEVELOPER
            </p>

            <div className="space-y-4 mb-8">
              <p className="text-muted-foreground leading-relaxed">
              Hi, I’m Preeti Dalai, a UI/UX Developer focused on creating intuitive, engaging, and responsive digital experiences.

              </p>
              <p className="text-muted-foreground leading-relaxed">
             I have experience working with Figma, HTML, CSS, JavaScript, React.js, Next.js, and TypeScript to design and develop modern web applications. My work involves creating UI/UX designs, building reusable components, developing responsive layouts, and continuously improving usability, accessibility, and overall user experience.
              </p>
            </div>


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