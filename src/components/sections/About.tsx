import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
  const personalInfo = [
    { label: 'Birthday', value: '02.08.1988' },
    { label: 'Age', value: '34' },
    { label: 'Nationality', value: 'Spanish' },
    { label: 'Study', value: 'University of Washington' },
    { label: 'Degree', value: 'Master' },
    { label: 'Freelance', value: 'Available' },
    { label: 'Email', value: 'hola@bever.com' },
    { label: 'Phone', value: '1-578-156-9845' },
    { label: 'Address', value: '4273 Hermiston Hills, Palau' }
  ];

  return (
    <section id="about" className="py-20 bg-background">
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
            <h3 className="text-2xl font-bold text-foreground mb-6">RAYAN BEVER</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              UX/UI DESIGNER
            </p>
            
            <div className="space-y-4 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula. 
                Quisque quis pharetra felis. Ut quis consequat orci, at consequat felis. Suspendisse auctor 
                laoreet placerat.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nam et risus non lacus dignissim lacinia sit amet nec eros. Nulla vel urna quis libero 
                pharetra varius. Nulla tellus nunc, malesuada at scelerisque eget, cursus at eros.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Proin ex ipsum, facilisis id tincidunt sed, vulputate in lacus. Donec pharetra faucibus leo, 
              vitae vestibulum leo scelerisque eu. Nam enim dolor, porta at ex ut, eleifend tristique metus. 
              Integer sit amet auctor ligula, vel dictum orci.
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
                    alt="Rayan Bever - About" 
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
    </section>
  );
};

export default About;